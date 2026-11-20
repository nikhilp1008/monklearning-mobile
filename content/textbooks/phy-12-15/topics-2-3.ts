import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 15 (Experimental Skills), Topics 02 and 03, written fresh in our own words
 * (no source book): Current electricity (metre bridge, Ohm's law, galvanometer by half
 * deflection) and Optics (parallax focal lengths, prism, slab with a travelling
 * microscope). Drawings p12-15-02-d1..d4 and p12-15-03-d1..d6 are redrawn in
 * lib/diagrams/physics-12-15.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · Current electricity ─────────────────────────
  {
    n: '02',
    title: 'Current electricity',
    kalam: 'A bridge, a voltmeter and an ammeter, and a shunted galvanometer: three ways to measure a resistance.',
    blocks: [
      // ───── Experiment: resistivity by metre bridge
      { t: 'part', title: 'Metre bridge: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the resistivity of the material of a wire by measuring the resistance <i>X</i> of a known length of it on a metre bridge, and its diameter with a screw gauge.<br><br>A metre bridge is a Wheatstone bridge in which two of the four arms are the two pieces of one uniform wire, 100 cm long, stretched along a metre scale. A resistance box <i>R</i> sits in the left gap and the wire under test <i>X</i> in the right gap. A galvanometer joins their common point B to a sliding contact (the jockey) J on the bridge wire. The cell is connected across the two ends A and C of the bridge wire.',
      },
      { t: 'fig', id: 'p12-15-02-d1' },
      {
        t: 'deriv',
        kicker: 'Balance condition of the metre bridge',
        steps: [
          { eq: '<i>V</i><sub>B</sub> = <i>V</i><sub>J</sub>', why: 'At the null point the galvanometer between B and J shows no current, so B and J are at the same potential.' },
          { eq: '<i>I</i><sub>1</sub><i>R</i> = <i>I</i><sub>2</sub><i>lr</i>', why: 'The potential fall from A to B (current <i>I</i><sub>1</sub> through <i>R</i>) equals the fall from A to J along the bridge wire (current <i>I</i><sub>2</sub>, resistance <i>lr</i> for a length <i>l</i> cm, <i>r</i> being the resistance of 1 cm of wire; the wire is uniform).' },
          { eq: '<i>I</i><sub>1</sub><i>X</i> = <i>I</i><sub>2</sub>(100 − <i>l</i>)<i>r</i>', why: 'In the same way the fall from B to C (through <i>X</i>) equals the fall from J to C.' },
          { eq: '<i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>)', why: 'Divide the first equation by the second: <i>I</i><sub>1</sub>, <i>I</i><sub>2</sub> and <i>r</i> cancel.' },
          { eq: '<i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>', why: 'Here <i>l</i> is measured from the end A, next to the gap holding <i>R</i>.' },
          { eq: '<i>ρ</i> = <i>XA</i>/<i>L</i> = <i>Xπd</i><sup>2</sup>/(4<i>L</i>)', why: 'From <i>X</i> = <i>ρL</i>/<i>A</i> with the cross-section <i>A</i> = <i>πd</i><sup>2</sup>/4, <i>d</i> the diameter and <i>L</i> the length of the wire in the gap.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Resistivity by metre bridge',
        main: '<i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i><br><i>ρ</i> = <i>πXd</i><sup>2</sup>/(4<i>L</i>)',
        legend: ['<i>R</i> = known resistance in the left gap', '<i>X</i> = resistance of the wire in the right gap', '<i>l</i> = balance length from the left end, in cm', '<i>d</i> = diameter of the wire', '<i>L</i> = length of the wire', '<i>ρ</i> = resistivity of the wire'],
        note: '<i>l</i> is measured from the end next to <i>R</i>.',
      },

      { t: 'part', title: 'Metre bridge: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A metre bridge, a resistance box, a galvanometer, a jockey, a cell with a key, the wire under test (such as constantan or manganin), thick copper connecting strips, a screw gauge and a metre scale.',
      },
      {
        t: 'proc',
        title: 'Finding the resistance and resistivity',
        steps: [
          '<b>Wire size.</b> Measure the diameter <i>d</i> of the wire with a screw gauge at several places and in two perpendicular directions, after finding the zero error. Measure its length <i>L</i> between the two connecting points with the metre scale.',
          '<b>Connect.</b> Put the wire in the right gap and the resistance box in the left gap. Join the cell and key across the two ends of the bridge wire and the galvanometer from the middle terminal to the jockey.',
          '<b>Choose R.</b> Take out a plug from the box so that <i>R</i> is close to the expected <i>X</i>; the null point then falls near the middle of the wire.',
          '<b>Find the null point.</b> Touch the jockey lightly at different points until the galvanometer shows no deflection; read <i>l</i> on the scale. Lift the jockey after every touch.',
          '<b>Interchange.</b> Swap <i>R</i> and <i>X</i> and read the new balance length <i>l</i>′, measured from the same end A.',
          '<b>Repeat.</b> Do this for three or four values of <i>R</i> and take the mean of all the values of <i>X</i>. Then calculate <i>ρ</i>.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> Keep the key open between readings so that the wire does not warm up.' },

      { t: 'part', title: 'Metre bridge: observations and calculation' },
      {
        t: 'table',
        title: 'Metre bridge readings (known resistance R in the left gap, wire in the right gap)',
        head: ['R (Ω)', 'l (cm)', 'X = R(100 − l)/l (Ω)', 'l′ after interchange (cm)', 'X′ = Rl′/(100 − l′) (Ω)'],
        rows: [
          ['3.0', '42.6', '4.042', '57.3', '4.026'],
          ['4.0', '49.7', '4.048', '50.4', '4.065'],
          ['5.0', '55.3', '4.042', '44.8', '4.058'],
        ],
        note: 'The balance lengths of each pair add up to about 100 cm (99.9, 100.1, 100.1), so the resistances at the two ends are nearly equal. With the null near the middle, their effect on the mean <i>X</i> is small.',
      },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'A screw gauge has pitch 0.5 mm and 50 divisions on the circular scale. With the jaws closed the reading is +0.02 mm. Six readings of the wire diameter are 0.33, 0.32, 0.33, 0.32, 0.33 and 0.32 mm. The length of the wire in the right gap is 60.0 cm. Using the table above, find the resistivity of the wire, with its uncertainty, if the balance lengths are read to 0.1 cm.',
        steps: [
          '<b>Least count of the screw gauge.</b> LC = pitch/divisions = 0.5 mm/50 = 0.01 mm.',
          '<b>Diameter.</b> Mean of the six readings = 1.95/6 = 0.325 mm. The zero error is positive, so it is subtracted: <i>d</i> = 0.325 − 0.02 = 0.305 mm.',
          '<b>Resistance.</b> The six values of <i>X</i> in the table are 4.042, 4.026, 4.048, 4.065, 4.042, 4.058 Ω; their sum is 24.281 Ω, so the mean is <i>X</i> = 24.281/6 = 4.047 Ω ≈ 4.05 Ω.',
          '<b>Cross-section.</b> <i>A</i> = <i>πd</i><sup>2</sup>/4 = <i>π</i> (0.305 × 10<sup>−3</sup>)<sup>2</sup>/4 = 7.31 × 10<sup>−8</sup> m<sup>2</sup>.',
          '<b>Resistivity.</b> <i>ρ</i> = <i>XA</i>/<i>L</i> = (4.047 × 7.31 × 10<sup>−8</sup>)/0.600 = 4.93 × 10<sup>−7</sup> Ω m.',
          '<b>Uncertainty.</b> Δ<i>ρ</i>/<i>ρ</i> = Δ<i>X</i>/<i>X</i> + 2Δ<i>d</i>/<i>d</i> + Δ<i>L</i>/<i>L</i>. The bridge term is 100Δ<i>l</i>/[<i>l</i>(100 − <i>l</i>)] = 100 × 0.1/(50 × 50) = 0.40 %. The diameter term is 2 × 0.01/0.305 = 6.6 %. The length term is 0.1/60.0 = 0.17 %. The total is about 7.1 %, so Δ<i>ρ</i> = 0.07 × 4.93 × 10<sup>−7</sup> ≈ 0.35 × 10<sup>−7</sup> Ω m.',
          '<b>Check.</b> For constantan, <i>ρ</i> ≈ 4.9 × 10<sup>−7</sup> Ω m. A 60 cm length of a 0.305 mm wire of that material has <i>X</i> = (4.9 × 10<sup>−7</sup> × 0.600)/(7.31 × 10<sup>−8</sup>) = 4.02 Ω, matching the 4.05 Ω found on the bridge.',
        ],
        ans: '<i>ρ</i> = (4.9 ± 0.4) × 10<sup>−7</sup> Ω m',
      },

      { t: 'part', title: 'Metre bridge: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The resistivity of the wire is <i>ρ</i> = (mean) ± (uncertainty) Ω m, with the temperature at which it was measured.<br><br><b>Precautions.</b> Use thick copper strips and tight connections, so that the resistance of the gaps and joints is negligible. Tap the jockey lightly and lift it between touches: sliding scrapes the wire and makes it non-uniform. Keep the current small and the key open between readings, since a warm wire has a larger resistance. Measure the diameter at several places, and in two directions, to allow for a wire that is not perfectly round. Keep the wire straight and untwisted when measuring its length.',
      },
      {
        t: 'p',
        html: '<b>Why the null point should be near 50 cm.</b> Differentiating <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i> gives Δ<i>X</i>/<i>X</i> = Δ<i>l</i>/<i>l</i> + Δ<i>l</i>/(100 − <i>l</i>) = 100Δ<i>l</i>/[<i>l</i>(100 − <i>l</i>)]. The product <i>l</i>(100 − <i>l</i>) is greatest at <i>l</i> = 50 cm, so the fractional error is least there. At <i>l</i> = 50 cm and Δ<i>l</i> = 0.1 cm it is 0.4 %.<br><br><b>End resistances and the interchange.</b> The ends of the bridge wire carry a little extra resistance (strips, joints). Treat them as extra lengths <i>a</i> (at A) and <i>b</i> (at C), so the true balance is <i>R</i>/<i>X</i> = (<i>l</i> + <i>a</i>)/(100 − <i>l</i> + <i>b</i>). To first order the value of <i>X</i> from the first balance is then off by the fraction <i>a</i>/<i>l</i> − <i>b</i>/(100 − <i>l</i>) and from the interchanged balance by <i>b</i>/<i>l</i> − <i>a</i>/(100 − <i>l</i>) (the two lengths being nearly 100 − <i>l</i> and <i>l</i>). These add to (<i>a</i> + <i>b</i>)[1/<i>l</i> − 1/(100 − <i>l</i>)], which is zero when <i>l</i> = 50 cm. So the interchange does not remove the end error by itself, but when the null is near the middle the mean of the two values of <i>X</i> is almost free of it, and the sum <i>l</i> + <i>l</i>′ equals 100 + <i>b</i> − <i>a</i>, so a sum far from 100 cm shows that the two end resistances are unequal. Equal end resistances leave the sum at 100 cm and can only be made harmless by keeping the null near 50 cm.<br><br><b>Which error dominates.</b> The diameter, which enters squared and is the smallest measured quantity: in the example it contributes 6.6 % of the 7.1 %.',
      },

      { t: 'part', title: 'Metre bridge: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>The ratio is the right way up only if <i>l</i> is measured from the end next to <i>R</i>.</b> The formula is <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>, not <i>R</i><i>l</i>/(100 − <i>l</i>).',
          '<b>If the wire in the right gap warms up,</b> <i>X</i> rises, the ratio <i>R</i>/<i>X</i> falls and the null point moves toward the <i>R</i> end of the bridge, away from the wire.',
          '<b>A thicker wire of the same material and length</b> has a smaller <i>X</i>, so the null point moves toward the right gap.',
          '<b>The best null point is near 50 cm,</b> not at either end, and <i>R</i> is chosen to put it there.',
          '<b>The largest fractional error in <i>ρ</i> is almost always from the diameter,</b> because <i>d</i> appears squared.',
        ],
      },

      // ───── Experiment: resistance by Ohm's law
      { t: 'part', title: 'Ohm’s law: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the resistance of a wire from the current through it and the potential difference across it.<br><br>For an ohmic conductor kept at constant temperature, <i>V</i> ∝ <i>I</i>, so <i>R</i> = <i>V</i>/<i>I</i> is constant: the graph of <i>V</i> (vertical) against <i>I</i> (horizontal) is a straight line through the origin whose slope is <i>R</i>.',
      },
      { t: 'fig', id: 'p12-15-02-d2' },
      {
        t: 'deriv',
        kicker: 'What the meters add to the reading',
        steps: [
          { eq: '<i>I</i> = <i>V</i>/<i>R</i> + <i>V</i>/<i>R</i><sub>V</sub>', why: 'Voltmeter across the wire only (the circuit drawn): the ammeter reads the current of the wire and of the voltmeter, which are in parallel under the same <i>V</i>.' },
          { eq: '<i>V</i>/<i>I</i> = <i>RR</i><sub>V</sub>/(<i>R</i> + <i>R</i><sub>V</sub>) < <i>R</i>', why: 'The reading is too low, by the fraction <i>R</i>/(<i>R</i> + <i>R</i><sub>V</sub>) ≈ <i>R</i>/<i>R</i><sub>V</sub>.' },
          { eq: '<i>V</i> = <i>I</i>(<i>R</i> + <i>R</i><sub>A</sub>)', why: 'Voltmeter across the wire and the ammeter together: it also reads the potential fall across the ammeter.' },
          { eq: '<i>V</i>/<i>I</i> = <i>R</i> + <i>R</i><sub>A</sub> > <i>R</i>', why: 'The reading is too high, by the fraction <i>R</i><sub>A</sub>/<i>R</i>.' },
          { eq: '<i>R</i> < √(<i>R</i><sub>A</sub><i>R</i><sub>V</sub>)', why: 'The first error, <i>R</i>/<i>R</i><sub>V</sub>, is the smaller when <i>R</i>/<i>R</i><sub>V</sub> < <i>R</i><sub>A</sub>/<i>R</i>. So connect the voltmeter across the wire alone for low resistances and across wire and ammeter for high ones.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Resistance by Ohm’s law',
        main: '<i>R</i> = <i>V</i>/<i>I</i> = slope of the <i>V</i>–<i>I</i> graph<br>Voltmeter across wire alone: <i>R</i><sub>meas</sub> = <i>RR</i><sub>V</sub>/(<i>R</i> + <i>R</i><sub>V</sub>)<br>Voltmeter across wire and ammeter: <i>R</i><sub>meas</sub> = <i>R</i> + <i>R</i><sub>A</sub>',
        legend: ['<i>V</i> = potential difference across the wire', '<i>I</i> = current through the wire', '<i>R</i> = true resistance of the wire', '<i>R</i><sub>meas</sub> = value read as <i>V</i>/<i>I</i>', '<i>R</i><sub>V</sub> = resistance of the voltmeter', '<i>R</i><sub>A</sub> = resistance of the ammeter'],
        note: 'The second line is for the voltmeter across the wire alone, the third for the voltmeter across wire and ammeter.',
      },

      { t: 'part', title: 'Ohm’s law: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A cell or battery, a rheostat, an ammeter (low resistance) in series with the wire, a voltmeter (high resistance) across it, a key, the wire and connecting leads.',
      },
      {
        t: 'proc',
        title: 'Finding the resistance from V and I',
        steps: [
          '<b>Meters.</b> Find the least count and any zero error of the ammeter and the voltmeter; note the range of each.',
          '<b>Connect</b> the circuit with the ammeter in series with the wire and the voltmeter in parallel with it, keeping the rheostat in the circuit so that it can reduce the current. The positive terminals of both meters go toward the positive of the cell.',
          '<b>Readings.</b> Close the key and adjust the rheostat to give six to eight values of the current, within the ranges of the meters. Read <i>I</i> and <i>V</i> each time and open the key between readings.',
          '<b>Graph.</b> Plot <i>V</i> against <i>I</i> and draw the best straight line. Its slope is <i>R</i>; also find <i>V</i>/<i>I</i> for each pair and take the mean.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> Keep the current within the rating of the ammeter and the rheostat.' },

      { t: 'part', title: 'Ohm’s law: observations and calculation' },
      {
        t: 'table',
        title: 'Voltmeter across the wire only (least counts: ammeter 0.01 A, voltmeter 0.05 V)',
        head: ['Reading', 'I (A)', 'V (V)', 'V/I (Ω)'],
        rows: [
          ['1', '0.10', '0.50', '5.00'],
          ['2', '0.20', '1.00', '5.00'],
          ['3', '0.30', '1.55', '5.17'],
          ['4', '0.40', '2.05', '5.13'],
          ['5', '0.50', '2.55', '5.10'],
        ],
      },
      { t: 'fig', id: 'p12-15-02-d3' },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'The table above was taken with the voltmeter across the wire only. The voltmeter has resistance 2000 Ω. Find the resistance of the wire, correct it for the voltmeter, and give its uncertainty from the largest reading.',
        steps: [
          '<b>Mean of V/I.</b> (5.00 + 5.00 + 5.17 + 5.13 + 5.10)/5 = 25.40/5 = 5.08 Ω.',
          '<b>Graph.</b> The least-squares line through the five points has slope 5.15 Ω and meets the <i>V</i> axis at −0.015 V, which is zero within the reading error: the line goes through the origin, as Ohm’s law says. The slope agrees with the mean of <i>V</i>/<i>I</i> to 1.4 %.',
          '<b>Voltmeter correction.</b> 1/<i>R</i> = 1/<i>R</i><sub>meas</sub> − 1/<i>R</i><sub>V</sub> = 1/5.08 − 1/2000, so <i>R</i> = 5.08 × 2000/(2000 − 5.08) = 5.09 Ω. The correction is 0.25 %, much smaller than the reading uncertainty.',
          '<b>Uncertainty.</b> Δ<i>R</i>/<i>R</i> = Δ<i>V</i>/<i>V</i> + Δ<i>I</i>/<i>I</i>, with the least counts as uncertainties and the largest readings: 0.05/2.55 + 0.01/0.50 = 0.0196 + 0.020 = 4.0 %, so Δ<i>R</i> = 0.04 × 5.08 = 0.2 Ω.',
        ],
        ans: '<i>R</i> = 5.1 ± 0.2 Ω',
      },

      { t: 'part', title: 'Ohm’s law: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The resistance of the wire is <i>R</i> = (value) ± (uncertainty) Ω, from the slope of the <i>V</i>–<i>I</i> graph and the mean of <i>V</i>/<i>I</i>.<br><br><b>Precautions.</b> Check both meters for zero error before connecting. Close the key only while taking a reading, because a warm wire has a larger resistance and bends the graph. Choose meter ranges so that the pointers move across more than half the scale. Keep the line of sight perpendicular to the scale to avoid parallax.<br><br><b>Errors.</b> The reading uncertainty of the two meters (their least counts) is the main one, and it is relatively largest at small readings, which is why the largest pair is used for the estimate. The meters themselves add the systematic error derived above.',
      },

      { t: 'part', title: 'Ohm’s law: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>A filament lamp gives a curve, not a line.</b> Its resistance rises as it heats, so on a graph of <i>V</i> against <i>I</i> the slope increases with current.',
          '<b>The voltmeter should have a very high resistance and the ammeter a very low one.</b> A real voltmeter in parallel makes the measured <i>R</i> too small; a real ammeter in series makes it too large.',
          '<b>Slope or ratio:</b> the slope of <i>V</i> against <i>I</i> is <i>R</i>. If <i>I</i> is plotted against <i>V</i> the slope is 1/<i>R</i>.',
          '<b>Fractional errors add,</b> so the percentage error in <i>R</i> is the sum of the percentage errors of <i>V</i> and <i>I</i>.',
        ],
      },

      // ───── Experiment: galvanometer
      { t: 'part', title: 'Galvanometer: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the resistance <i>G</i> of a moving-coil galvanometer by the half-deflection method, and its figure of merit <i>k</i>.<br><br>A large resistance <i>R</i> is put in series with the cell and the galvanometer, and the deflection <i>θ</i> is noted. A shunt <i>S</i> is then joined across the galvanometer and adjusted until the deflection falls to <i>θ</i>/2. Since the deflection is proportional to the current through the coil, the current through the coil has been halved, and this fixes <i>G</i>. The <b>figure of merit</b> <i>k</i> is the current in the coil that gives a deflection of one division, in A per division.',
      },
      { t: 'fig', id: 'p12-15-02-d4' },
      {
        t: 'deriv',
        kicker: 'Half-deflection formula',
        steps: [
          { eq: '<i>I</i> = <i>E</i>/(<i>R</i> + <i>G</i>), <i>θ</i> = <i>I</i>/<i>k</i>', why: 'Key K<sub>2</sub> open: the whole current <i>I</i> passes through the coil. The internal resistance of the cell is taken as included in <i>R</i> (or as negligible).' },
          { eq: '<i>I</i>′ = <i>E</i>/[<i>R</i> + <i>GS</i>/(<i>G</i> + <i>S</i>)]', why: 'K<sub>2</sub> closed: <i>S</i> and <i>G</i> are in parallel, with resistance <i>GS</i>/(<i>G</i> + <i>S</i>), in series with <i>R</i>.' },
          { eq: '<i>I</i><sub>g</sub> = <i>I</i>′<i>S</i>/(<i>G</i> + <i>S</i>) = <i>ES</i>/[<i>R</i>(<i>G</i> + <i>S</i>) + <i>GS</i>]', why: 'The coil gets the share <i>S</i>/(<i>G</i> + <i>S</i>) of the main current.' },
          { eq: '<i>ES</i>/[<i>R</i>(<i>G</i> + <i>S</i>) + <i>GS</i>] = <i>E</i>/[2(<i>R</i> + <i>G</i>)]', why: 'Half deflection means half the coil current.' },
          { eq: '2<i>SR</i> + 2<i>SG</i> = <i>RG</i> + <i>RS</i> + <i>GS</i> ⇒ <i>SR</i> + <i>SG</i> = <i>RG</i>', why: 'Cross-multiply and cancel <i>E</i>.' },
          { eq: '<i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>)', why: 'Collect the terms in <i>G</i>: <i>G</i>(<i>R</i> − <i>S</i>) = <i>RS</i>. This is exact if the cell’s resistance is zero or counted in <i>R</i>.' },
          { eq: '<i>G</i> = <i>S</i>/(1 − <i>S</i>/<i>R</i>) ≈ <i>S</i>(1 + <i>S</i>/<i>R</i>) ≈ <i>S</i>', why: 'For <i>R</i> ≫ <i>S</i> the shunt hardly changes the main current, and <i>G</i> is very nearly equal to <i>S</i>; always <i>G</i> > <i>S</i>.' },
          { eq: '<i>k</i> = <i>I</i>/<i>θ</i> = <i>E</i>/[(<i>R</i> + <i>G</i>)<i>θ</i>]', why: 'The figure of merit, from the deflection <i>θ</i> with <i>S</i> removed. The potential difference across the coil for one division is <i>kG</i>.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Galvanometer resistance and figure of merit',
        main: '<i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>)<br><i>G</i> ≈ <i>S</i> (for <i>R</i> ≫ <i>S</i>)<br><i>k</i> = <i>E</i>/[(<i>R</i> + <i>G</i>)<i>θ</i>]',
        legend: ['<i>G</i> = resistance of the galvanometer', '<i>R</i> = series resistance', '<i>S</i> = shunt that halves the deflection', '<i>k</i> = figure of merit, in A per division', '<i>E</i> = emf of the cell', '<i>θ</i> = deflection with the shunt open, in divisions'],
        note: '<i>G</i> ≈ <i>S</i> holds only for <i>R</i> ≫ <i>S</i>.',
      },

      { t: 'part', title: 'Galvanometer: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A moving-coil galvanometer, a high-resistance box <i>R</i> (up to tens of kΩ), a low-resistance box <i>S</i>, a cell of known emf <i>E</i> (about 2 V), two keys K<sub>1</sub> (main circuit) and K<sub>2</sub> (across the shunt), and connecting wires.',
      },
      {
        t: 'proc',
        title: 'Half-deflection method',
        steps: [
          '<b>Connect</b> the cell, K<sub>1</sub>, the resistance box <i>R</i> and the galvanometer in series. Join <i>S</i> and K<sub>2</sub> across the galvanometer. Take out a large resistance from <i>R</i> (for example 40 kΩ) before closing K<sub>1</sub>.',
          '<b>Deflection.</b> With K<sub>2</sub> open, close K<sub>1</sub> and adjust <i>R</i> until the deflection is a convenient even number of divisions <i>θ</i>, a large part of the full scale. Note <i>R</i> and <i>θ</i>.',
          '<b>Half deflection.</b> Without changing <i>R</i>, close K<sub>2</sub> and adjust <i>S</i> until the deflection is exactly <i>θ</i>/2. Note <i>S</i>.',
          '<b>Calculate</b> <i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>) and <i>k</i> = <i>E</i>/[(<i>R</i> + <i>G</i>)<i>θ</i>].',
          '<b>Repeat</b> for two or three more values of <i>R</i> (and so of <i>θ</i>), and take the means of <i>G</i> and <i>k</i>.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> Start with a large <i>R</i> so that the coil is not overloaded.' },

      { t: 'part', title: 'Galvanometer: observations and calculation' },
      {
        t: 'table',
        title: 'Half-deflection readings (E = 2.0 V)',
        head: ['R (Ω)', 'θ (div)', 'S (Ω) for θ/2', 'G = RS/(R − S) (Ω)', 'k = E/[(R + G)θ] (A per div)'],
        rows: [
          ['40000', '20', '120', '120.36', '2.49 × 10<sup>−6</sup>'],
          ['33000', '24', '120', '120.44', '2.52 × 10<sup>−6</sup>'],
          ['50000', '16', '120', '120.29', '2.49 × 10<sup>−6</sup>'],
        ],
      },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'Using the first row of the table above (<i>E</i> = 2.0 V, <i>R</i> = 40 000 Ω, <i>θ</i> = 20 divisions, <i>S</i> = 120 Ω at 10 divisions), find <i>G</i> and <i>k</i>, and say how much the approximation <i>G</i> ≈ <i>S</i> would have been in error. Then give the means of all three rows.',
        steps: [
          '<b>Galvanometer resistance.</b> <i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>) = (40 000 × 120)/(40 000 − 120) = 4 800 000/39 880 = 120.36 Ω.',
          '<b>Current for 20 divisions.</b> <i>I</i> = <i>E</i>/(<i>R</i> + <i>G</i>) = 2.0/40 120.36 = 4.985 × 10<sup>−5</sup> A.',
          '<b>Figure of merit.</b> <i>k</i> = <i>I</i>/<i>θ</i> = 4.985 × 10<sup>−5</sup>/20 = 2.49 × 10<sup>−6</sup> A per division.',
          '<b>The approximation.</b> <i>G</i> ≈ <i>S</i> = 120 Ω is low by 0.36/120.36 = 0.3 %, matching <i>S</i>/<i>R</i> = 0.3 %. It is far below the precision of a resistance box, which is why <i>G</i> ≈ <i>S</i> is acceptable when <i>R</i> ≫ <i>S</i>.',
          '<b>Means of three rows.</b> <i>G</i> = (120.36 + 120.44 + 120.29)/3 = 120.4 Ω. <i>k</i> = (2.4925 + 2.5161 + 2.4940) × 10<sup>−6</sup>/3 = 2.50 × 10<sup>−6</sup> A per division.',
          '<b>Check.</b> The potential difference per division across the coil is <i>kG</i> = 2.50 × 10<sup>−6</sup> × 120.4 = 3.0 × 10<sup>−4</sup> V, so 20 divisions need only 6 mV across the coil, small against the 2 V of the cell: nearly all of the cell’s emf is dropped across <i>R</i>, as the method assumes.',
        ],
        ans: '<i>G</i> = 120 Ω; <i>k</i> = 2.5 × 10<sup>−6</sup> A per division',
      },

      { t: 'part', title: 'Galvanometer: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The resistance of the galvanometer is <i>G</i> = (mean) Ω and its figure of merit is <i>k</i> = (mean) A per division.<br><br><b>Precautions.</b> Use a large <i>R</i>, so that the coil is safe and <i>S</i> ≪ <i>R</i>. Use an even number of divisions so that half of it can be read exactly. Do not change <i>R</i> between the two deflections. Use a steady cell whose internal resistance is small compared with <i>R</i> (or add it to <i>R</i>).<br><br><b>Errors.</b> The reading of the half deflection (to a fraction of a division) and the step size of the shunt box limit <i>G</i>. The error in <i>k</i> comes from <i>E</i>, <i>θ</i> and the resistance <i>R</i> + <i>G</i>. Because <i>R</i> ≫ <i>G</i>, an error in <i>G</i> hardly changes <i>k</i>: 0.3 % in <i>G</i> changes <i>R</i> + <i>G</i> by only 0.001 %.',
      },

      { t: 'part', title: 'Galvanometer: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>This method finds <i>G</i>, the resistance of the galvanometer,</b> not the resistance of the shunt, and not the resistance needed to convert the galvanometer into an ammeter.',
          '<b><i>G</i> = <i>S</i> is only an approximation.</b> The exact result is <i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>), and <i>G</i> is always a little larger than <i>S</i>. The approximation fails if <i>S</i> is not small against <i>R</i>.',
          '<b>The shunt is adjusted until the deflection is half,</b> with <i>R</i> unchanged. Reducing <i>R</i> instead would raise the deflection.',
          '<b>The figure of merit is a current per division (A per div).</b> Current sensitivity is its reciprocal, divisions per ampere; the potential difference per division is <i>kG</i>.',
          '<b>A larger figure of merit means a less sensitive galvanometer,</b> because more current is needed for each division.',
        ],
      },

      // ───── Practice and MCQ, Topic 02
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[Metre bridge] A resistance of 8.0 Ω is in the left gap of a metre bridge and a wire of 12.0 Ω in the right gap. (a) Where is the null point, measured from the left end? (b) The wire warms up and its resistance rises to 15.0 Ω. Where is the null point now, and in which direction has it moved?',
            a: '(a) <i>l</i> = 100<i>R</i>/(<i>R</i> + <i>X</i>) = 100 × 8.0/20.0 = 40.0 cm. (b) <i>l</i> = 100 × 8.0/23.0 = 34.8 cm: it moves toward the left end, the side of <i>R</i>, away from the wire whose resistance has risen. Check: with 40.0 cm, 100 − <i>l</i> = 60.0 and <i>R</i>/<i>X</i> = 40/60 = 8/12 ✓.',
          },
          {
            q: '[Resistivity] A wire of diameter 0.40 mm and length 75.0 cm in the right gap of a metre bridge has resistance 2.6 Ω. Find its resistivity.',
            a: '<i>ρ</i> = <i>Xπd</i><sup>2</sup>/(4<i>L</i>) = 2.6 × <i>π</i> × (0.40 × 10<sup>−3</sup>)<sup>2</sup>/(4 × 0.750) = 2.6 × 5.03 × 10<sup>−7</sup>/3.00 = 4.4 × 10<sup>−7</sup> Ω m (about the value for manganin or constantan). Check: <i>A</i> = 1.257 × 10<sup>−7</sup> m<sup>2</sup>, <i>ρ</i> = 2.6 × 1.257 × 10<sup>−7</sup>/0.750 = 4.36 × 10<sup>−7</sup> Ω m ✓.',
          },
          {
            q: '[Metre bridge, error] Balance lengths are read to ±0.1 cm. Find the percentage error in <i>X</i> from the bridge reading when the null point is at (a) 45.0 cm and (b) 20.0 cm. Which is the better reading, and by what factor?',
            a: 'Δ<i>X</i>/<i>X</i> = 100Δ<i>l</i>/[<i>l</i>(100 − <i>l</i>)]. (a) 100 × 0.1/(45.0 × 55.0) = 10/2475 = 0.40 %. (b) 100 × 0.1/(20.0 × 80.0) = 10/1600 = 0.63 %. The 45.0 cm reading is better, by a factor of 0.63/0.40 = 1.5.',
          },
          {
            q: '[Ohm’s law] A wire of true resistance 5.0 Ω is measured with an ammeter of resistance 0.50 Ω and a voltmeter of resistance 2000 Ω. Find the resistance that would be read (a) with the voltmeter across the wire alone, and (b) with the voltmeter across the wire and the ammeter. Which arrangement is better for this wire? (Take the meters to read exactly.)',
            a: '(a) <i>RR</i><sub>V</sub>/(<i>R</i> + <i>R</i><sub>V</sub>) = 5.0 × 2000/2005 = 4.99 Ω (0.25 % low). (b) <i>R</i> + <i>R</i><sub>A</sub> = 5.50 Ω (10 % high). The first is better. Check with the rule: √(<i>R</i><sub>A</sub><i>R</i><sub>V</sub>) = √1000 = 32 Ω, and 5.0 Ω is below it.',
          },
          {
            q: '[Galvanometer] In a half-deflection experiment <i>E</i> = 2.0 V, <i>R</i> = 50.0 kΩ and the deflection of 24 divisions falls to 12 divisions when <i>S</i> = 75 Ω. Find <i>G</i> and the figure of merit.',
            a: '<i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>) = 50 000 × 75/49 925 = 75.1 Ω. <i>I</i> = <i>E</i>/(<i>R</i> + <i>G</i>) = 2.0/50 075.1 = 3.994 × 10<sup>−5</sup> A, so <i>k</i> = <i>I</i>/<i>θ</i> = 3.994 × 10<sup>−5</sup>/24 = 1.66 × 10<sup>−6</sup> A per division.',
          },
          {
            q: '[Galvanometer, approximation] A student uses <i>R</i> = 2000 Ω and finds that <i>S</i> = 200 Ω halves the deflection. What is the true <i>G</i>, and by what percentage would taking <i>G</i> = <i>S</i> be wrong? What should the student have done to make <i>G</i> ≈ <i>S</i> a good approximation?',
            a: '<i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>) = 2000 × 200/1800 = 222 Ω. Taking <i>G</i> = <i>S</i> = 200 Ω is 10 % too low (22/222). The student should have used a much larger <i>R</i>, so that <i>S</i>/<i>R</i> is small (for <i>S</i>/<i>R</i> = 0.01 the error is 1 %); a larger <i>R</i> needs a larger emf to keep the same deflection, or else accepts a smaller deflection.',
          },
        ],
      },
      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a metre bridge the null point is at 30.0 cm from the left end when a resistance of 6.0 Ω is in the left gap. The unknown resistance in the right gap is',
        opts: [
          { label: '2.6 Ω', nudge: 'That uses the ratio upside down, <i>R</i><i>l</i>/(100 − <i>l</i>) = 6.0 × 30/70. The longer length, 70 cm, is on the side of <i>X</i>, so <i>X</i> is larger than <i>R</i>.' },
          { label: '14 Ω', nudge: null },
          { label: '20 Ω', nudge: 'That is <i>R</i> × 100/<i>l</i>, which forgets that the right arm is 100 − <i>l</i>, not 100.' },
          { label: '6.0 Ω', nudge: 'That would be the answer for a null at 50 cm. At 30 cm the two arms are unequal, so <i>X</i> ≠ <i>R</i>.' },
        ],
        correct: 1,
        solution: '<i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i> = 6.0 × 70.0/30.0 = 14 Ω.',
      },
      {
        t: 'mcq',
        q: 'In the metre bridge experiment the resistance <i>R</i> is chosen so that the null point lies near the middle of the wire mainly because',
        opts: [
          { label: 'the fractional error 100Δ<i>l</i>/[<i>l</i>(100 − <i>l</i>)] in <i>X</i> is then the least', nudge: null },
          { label: 'the wire then heats up the least', nudge: 'Heating depends on the current and on how long the key is closed, not on where the null point is.' },
          { label: 'the galvanometer then carries its maximum current', nudge: 'At the null point the galvanometer current is zero for any position.' },
          { label: 'the jockey slides most easily there', nudge: 'The position of the null point has nothing to do with how the jockey moves; the jockey should be tapped, not slid.' },
        ],
        correct: 0,
        solution: 'The product <i>l</i>(100 − <i>l</i>) is greatest at <i>l</i> = 50 cm, so the same error Δ<i>l</i> in the reading gives the smallest fractional error in <i>X</i>.',
      },
      {
        t: 'mcq',
        q: 'In a metre bridge the wire in the right gap is replaced by a thicker wire of the same material and the same length, with <i>R</i> in the left gap unchanged. The null point',
        opts: [
          { label: 'moves toward the left end, where <i>R</i> is', nudge: 'That would happen if <i>X</i> increased. A thicker wire has a smaller resistance.' },
          { label: 'moves toward the right end, where the wire is', nudge: null },
          { label: 'stays where it was', nudge: 'The null point depends on <i>R</i>/<i>X</i>. A thicker wire changes <i>X</i>, so it moves.' },
          { label: 'cannot be found', nudge: 'The bridge still balances; only the position of the balance changes.' },
        ],
        correct: 1,
        solution: 'The resistance <i>X</i> = <i>ρL</i>/<i>A</i> falls, so <i>l</i> = 100<i>R</i>/(<i>R</i> + <i>X</i>) rises: the null point moves toward the right end.',
      },
      {
        t: 'mcq',
        q: 'The voltage <i>V</i> across a tungsten filament lamp is plotted on the vertical axis against the current <i>I</i> through it. The graph is',
        opts: [
          { label: 'a straight line through the origin', nudge: 'That is for an ohmic conductor at constant temperature. A lamp filament heats up, so its resistance does not stay constant.' },
          { label: 'a curve whose slope increases as <i>I</i> increases', nudge: null },
          { label: 'a curve whose slope decreases as <i>I</i> increases', nudge: 'The slope would fall if the resistance fell with heating, as for a semiconductor. A metal’s resistance rises.' },
          { label: 'a horizontal line', nudge: 'A horizontal line would mean <i>V</i> does not change with <i>I</i>, as in a constant-voltage source.' },
        ],
        correct: 1,
        solution: 'The resistance of the metal filament increases with temperature, so <i>V</i>/<i>I</i> rises with <i>I</i> and the <i>V</i>–<i>I</i> curve gets steeper.',
      },
      {
        t: 'mcq',
        q: 'In the half-deflection method, <i>R</i> = 1000 Ω in series, and a shunt <i>S</i> = 100 Ω halves the deflection. The resistance of the galvanometer is',
        opts: [
          { label: '90.9 Ω', nudge: 'That is <i>RS</i>/(<i>R</i> + <i>S</i>), with the wrong sign in the denominator. The correct condition is <i>G</i>(<i>R</i> − <i>S</i>) = <i>RS</i>.' },
          { label: '100 Ω', nudge: '<i>G</i> ≈ <i>S</i> holds only for <i>R</i> ≫ <i>S</i>. Here <i>S</i> is a tenth of <i>R</i>, and the approximation is 10 % low.' },
          { label: '111 Ω', nudge: null },
          { label: '1100 Ω', nudge: 'That is <i>R</i> + <i>S</i>, which has no connection with the formula.' },
        ],
        correct: 2,
        solution: '<i>G</i> = <i>RS</i>/(<i>R</i> − <i>S</i>) = 1000 × 100/900 = 111 Ω.',
      },
      {
        t: 'mcq',
        q: 'A galvanometer has a figure of merit of 2.0 μA per division and a resistance of 100 Ω. The potential difference across it that gives one division is',
        opts: [
          { label: '2.0 × 10<sup>−8</sup> V', nudge: 'That divides the current by the resistance. The potential difference is the current times the resistance.' },
          { label: '2.0 × 10<sup>−4</sup> V', nudge: null },
          { label: '2.0 × 10<sup>−6</sup> V', nudge: 'That is the number from the figure of merit itself, and its unit is amperes, not volts.' },
          { label: '2.0 × 10<sup>−2</sup> V', nudge: 'That is 100 times too large: 2.0 × 10<sup>−6</sup> × 100 is 2.0 × 10<sup>−4</sup>, not 2.0 × 10<sup>−2</sup>.' },
        ],
        correct: 1,
        solution: '<i>V</i> = <i>kG</i> = 2.0 × 10<sup>−6</sup> A × 100 Ω = 2.0 × 10<sup>−4</sup> V.',
      },
    ],
  },

  // ───────────────────────── Topic 03 · Optics ─────────────────────────
  {
    n: '03',
    title: 'Optics',
    kalam: 'Pins and a microscope locate images and rays, and turn reflection and refraction into measured focal lengths and indices.',
    blocks: [
      // ───── Experiment: parallax focal lengths
      { t: 'part', title: 'Parallax method: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the focal length of (a) a concave mirror and (b) a convex lens, by locating the real image of a pin with an image pin that shows no parallax, and (c) of a convex mirror, with the help of an auxiliary convex lens.<br><br><b>Parallax.</b> Two things at different distances from the eye appear to shift against each other when the eye moves sideways; the nearer one seems to move the other way. If the two shift together (no relative motion for any sideways movement of the eye), they are at the same place. An image in the air, which cannot be touched, is therefore located by moving a pin until it and the image are free of parallax. The pin tip is then exactly at the image.',
      },
      { t: 'fig', id: 'p12-15-03-d1' },
      {
        t: 'deriv',
        kicker: 'The relations used',
        steps: [
          { eq: '1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i> (mirror), 1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i> (lens)', why: 'With the new Cartesian convention: distances are measured from the pole or the optical centre, positive in the direction of the incident light. A real object has <i>u</i> < 0.' },
          { eq: '1/|<i>v</i>| + 1/|<i>u</i>| = 1/|<i>f</i>|', why: 'For a concave mirror and a convex lens forming a real image, <i>v</i> and <i>u</i> are both negative for the mirror (<i>f</i> < 0) and <i>v</i> > 0, <i>u</i> < 0 for the lens (<i>f</i> > 0). In magnitudes both give the same relation.' },
          { eq: '<i>f</i> = |<i>u</i>||<i>v</i>|/(|<i>u</i>| + |<i>v</i>|)', why: 'The working formula for one pair of readings.' },
          { eq: '1/|<i>v</i>| = 1/|<i>f</i>| − 1/|<i>u</i>|', why: 'A graph of 1/|<i>v</i>| (vertical) against 1/|<i>u</i>| (horizontal) is a straight line of slope −1, cutting each axis at 1/|<i>f</i>|.' },
          { eq: '|<i>u</i>| = |<i>v</i>| = 2|<i>f</i>|', why: 'The line meets 1/|<i>v</i>| = 1/|<i>u</i>| at 1/(2|<i>f</i>|): when the image pin sits exactly at the object pin, both are at the centre of curvature, and <i>f</i> is half the distance.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Focal length by the parallax method',
        main: '1/|<i>f</i>| = 1/|<i>u</i>| + 1/|<i>v</i>|<br>|<i>f</i>| = |<i>u</i>||<i>v</i>|/(|<i>u</i>| + |<i>v</i>|)<br>Convex mirror: <i>f</i> = <i>R</i>/2',
        legend: ['<i>u</i> = object distance from the pole or lens', '<i>v</i> = image distance from the pole or lens', '<i>f</i> = focal length', '<i>R</i> = radius of curvature, the distance from the mirror pole to the real image I in the convex-mirror method'],
        note: 'The first two lines are for a concave mirror or a convex lens, in magnitudes; the third is for the convex mirror.',
      },

      { t: 'part', title: 'Parallax method: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> An optical bench with uprights, a concave mirror, a convex mirror, a convex lens (and for the convex mirror, a second convex lens as the auxiliary), two or three pins as object and image pins, a knitting needle or metre rod for the index correction, and a lens holder.<br><br><b>Index correction.</b> The scale reading of an upright is taken at its index mark, not at the pin tip or the pole. To find the correction, place a knitting needle of known length between the pole (or the lens) and the tip of the pin, and compare its true length with the scale distance. The correction is true minus observed, and it is added to the observed distance. Do this for the object pin and for the image pin separately: each has its own correction.',
      },
      {
        t: 'proc',
        title: 'Concave mirror or convex lens',
        steps: [
          '<b>Rough focal length.</b> Focus a distant object on a screen to get a first idea of <i>f</i>.',
          '<b>Set up.</b> Put the mirror (or lens) on the bench with its axis along the bench. Place the object pin at a distance <i>u</i> greater than <i>f</i>, with the tip at the height of the pole or of the axis.',
          '<b>Locate the image.</b> Move the image pin along the bench until, as you move your eye sideways, there is no relative motion between the image of the object pin and the image pin. Read the position of the image pin.',
          '<b>Record</b> <i>u</i> and <i>v</i> (observed) and add the index corrections.',
          '<b>Repeat</b> for five or six values of <i>u</i> between <i>f</i> and about 3<i>f</i> and find <i>f</i> from each pair; also plot 1/|<i>v</i>| against 1/|<i>u</i>|.',
        ],
      },
      { t: 'fig', id: 'p12-15-03-d2' },
      {
        t: 'proc',
        title: 'Convex mirror',
        steps: [
          '<b>A real image first.</b> A convex mirror makes a virtual image of a real object, behind the mirror, where no pin can be put. So a convex lens of known position is placed between the object pin and the mirror, and the lens forms a real image I of the object pin.',
          '<b>Insert the mirror</b> between the lens and I, with its reflecting face toward the lens. Move the mirror along the bench until the image of the object pin seen in the mirror lies exactly beside the object pin and shows no parallax with it.',
          '<b>What that means.</b> The converging rays now strike the mirror along the normal, so they retrace their path. A ray goes along the normal when it is directed to the centre of curvature C, so the point I, toward which the lens sends the rays, is the centre of curvature of the mirror.',
          '<b>Remove the mirror</b> without disturbing its position reading, and locate I with the image pin (no parallax with the real image formed by the lens). The distance from the mirror’s pole position to I is the radius of curvature <i>R</i>; then <i>f</i> = <i>R</i>/2.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> Pins are sharp: push them into the holders with care.' },

      { t: 'part', title: 'Parallax method: observations and calculation' },
      {
        t: 'table',
        title: 'Concave mirror, distances in cm (index corrections: object pin +0.4, image pin +0.3)',
        head: ['u observed', 'v observed', 'u corrected', 'v corrected', 'f = uv/(u + v)'],
        rows: [
          ['24.6', '37.4', '25.0', '37.7', '15.03'],
          ['29.6', '29.6', '30.0', '29.9', '14.97'],
          ['34.6', '26.0', '35.0', '26.3', '15.02'],
          ['39.6', '23.9', '40.0', '24.2', '15.08'],
          ['44.6', '22.1', '45.0', '22.4', '14.96'],
        ],
        note: 'Distances are magnitudes. In the new Cartesian convention every <i>u</i>, <i>v</i> and <i>f</i> of a concave mirror is negative.',
      },
      {
        t: 'table',
        title: 'Convex lens, corrected distances in cm',
        head: ['|u|', '|v|', '1/|u| (per cm)', '1/|v| (per cm)', 'f = |u||v|/(|u| + |v|)'],
        rows: [
          ['30.0', '60.2', '0.0333', '0.0166', '20.02'],
          ['35.0', '46.4', '0.0286', '0.0216', '19.95'],
          ['40.0', '40.1', '0.0250', '0.0249', '20.02'],
          ['50.0', '33.5', '0.0200', '0.0299', '20.06'],
          ['60.0', '29.9', '0.0167', '0.0334', '19.96'],
        ],
      },
      { t: 'fig', id: 'p12-15-03-d3' },
      {
        t: 'ex',
        tag: 'Experiment data (concave mirror)',
        q: 'A knitting needle of true length 20.0 cm placed from the pole to the tip of the object pin reads 19.6 cm on the bench scale; for the image pin it reads 19.7 cm. Using the concave-mirror table, find the index corrections, the corrected distances for the first row and the focal length of the mirror.',
        steps: [
          '<b>Index corrections.</b> True minus observed: for the object pin 20.0 − 19.6 = +0.4 cm; for the image pin 20.0 − 19.7 = +0.3 cm.',
          '<b>First row.</b> <i>u</i> = 24.6 + 0.4 = 25.0 cm; <i>v</i> = 37.4 + 0.3 = 37.7 cm.',
          '<b>Focal length from that row.</b> <i>f</i> = <i>uv</i>/(<i>u</i> + <i>v</i>) = 25.0 × 37.7/62.7 = 942.5/62.7 = 15.03 cm.',
          '<b>Mean of the five rows.</b> (15.03 + 14.97 + 15.02 + 15.08 + 14.96)/5 = 75.06/5 = 15.01 cm.',
          '<b>Second route.</b> Mean of 1/|<i>u</i>| + 1/|<i>v</i>| over the rows is 0.0666 per cm, so <i>f</i> = 1/0.0666 = 15.0 cm.',
          '<b>Check.</b> The second row has <i>u</i> ≈ <i>v</i> ≈ 30 cm, which is 2<i>f</i>, the centre of curvature. The radius of curvature is therefore 30 cm.',
        ],
        ans: '|<i>f</i>| = 15.0 cm (so <i>f</i> = −15.0 cm in the sign convention)',
      },
      {
        t: 'ex',
        tag: 'Experiment data (convex lens)',
        q: 'For the convex-lens table, plot 1/|<i>v</i>| against 1/|<i>u</i>| and find the focal length from the intercepts.',
        steps: [
          '<b>Plot.</b> The five points (1/|<i>u</i>|, 1/|<i>v</i>|) = (0.0333, 0.0166), (0.0286, 0.0216), (0.0250, 0.0249), (0.0200, 0.0299), (0.0167, 0.0334) fall on a straight line of slope −1.',
          '<b>Sum along the line.</b> For each point, 1/|<i>u</i>| + 1/|<i>v</i>| = 0.0499, 0.0502, 0.0499, 0.0499, 0.0501, so the intercept on each axis is 0.0500 per cm.',
          '<b>Focal length.</b> <i>f</i> = 1/0.0500 = 20.0 cm.',
          '<b>Second route.</b> The mean of <i>uv</i>/(<i>u</i> + <i>v</i>) in the table is (20.02 + 19.95 + 20.02 + 20.06 + 19.96)/5 = 20.00 cm.',
          '<b>Check.</b> At <i>u</i> = 40.0 cm = 2<i>f</i> the image is at <i>v</i> = 40.1 cm = 2<i>f</i>, real, inverted and the same size as the object.',
        ],
        ans: '<i>f</i> = 20.0 cm',
      },
      {
        t: 'ex',
        tag: 'Experiment data (convex mirror)',
        q: 'The object pin O is at the 0 cm mark of the bench and the auxiliary convex lens (<i>f</i> = 20.0 cm) at 35.0 cm. A convex mirror, placed between the lens and the image, is moved until its image coincides with O. Its pole is then at 57.3 cm. The mirror is removed and the real image I is found at 81.7 cm. Find the focal length of the mirror.',
        steps: [
          '<b>Where the lens should put I.</b> <i>u</i> = −35.0 cm, so 1/<i>v</i> = 1/<i>f</i> + 1/<i>u</i> = 1/20.0 − 1/35.0 = 3/140, giving <i>v</i> = 46.7 cm and I at 35.0 + 46.7 = 81.7 cm. This agrees with the position read with the image pin.',
          '<b>Radius of curvature.</b> The pole is at 57.3 cm, I at 81.7 cm: <i>R</i> = 81.7 − 57.3 = 24.4 cm.',
          '<b>Focal length.</b> <i>f</i> = <i>R</i>/2 = 12.2 cm.',
          '<b>Check.</b> The mirror at 57.3 cm lies between the lens (35.0 cm) and I (81.7 cm), as it must, so it intercepts the converging beam. A pole beyond I, if it were there, would not do.',
        ],
        ans: '<i>f</i> = +12.2 cm (convex mirror: focal length positive)',
      },

      { t: 'part', title: 'Parallax method: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The focal length of the concave mirror is |<i>f</i>| = (mean) cm, of the convex lens <i>f</i> = (mean) cm, and of the convex mirror <i>f</i> = <i>R</i>/2 = (value) cm.<br><br><b>Precautions.</b> Keep the tips of the pins at the height of the pole or of the lens axis, and the bench level and parallel to the axis. Keep the object distance greater than <i>f</i>, so that the image is real and can be located. Look from at least 25 cm away and move the head sideways to test for parallax. If the image pin seems to move with the eye relative to the image, the pin is farther from the eye than the image and should be brought nearer; if it seems to move against the eye, it should be moved farther. Do not shake the uprights while reading the scale.<br><br><b>Errors.</b> The parallax judgment is good to a few millimetres, and the index corrections matter at the same level, so skipping them gives a systematic error. Taking several values of <i>u</i> averages out the random part of the parallax judgment. For a lens, the thickness (the distance between the principal planes) is neglected.',
      },

      { t: 'part', title: 'Parallax method: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Parallax is a way of finding where the image is,</b> not a way of calculating <i>f</i>; <i>f</i> then comes from the mirror or lens formula.',
          '<b>The index correction is added to the observed distance</b> when the observed distance is too small (true minus observed is positive). It is not applied to <i>f</i>.',
          '<b>A concave mirror has a negative <i>f</i></b> in the new Cartesian convention, and a convex mirror a positive one. A convex lens has a positive <i>f</i>.',
          '<b>A convex mirror never forms a real image of a real object,</b> which is why an auxiliary convex lens is used. The mirror is at the right point when the pin’s image coincides with the pin.',
          '<b>On the graph of 1/|<i>v</i>| against 1/|<i>u</i>|,</b> the slope is −1 and each intercept is 1/|<i>f</i>|; the intercepts are not <i>f</i>.',
          '<b>When <i>u</i> = <i>v</i> the distance is 2<i>f</i>:</b> the object and its image are at the centre of curvature of a mirror (or at 2<i>f</i> of a lens).',
        ],
      },

      // ───── Experiment: prism
      { t: 'part', title: 'Prism: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To draw the graph of the angle of deviation <i>δ</i> against the angle of incidence <i>i</i> for a glass prism, to find the angle of minimum deviation <i>δ</i><sub>m</sub> from it, and to calculate the refractive index.',
      },
      { t: 'fig', id: 'p12-15-03-d4' },
      {
        t: 'deriv',
        kicker: 'Deviation and minimum deviation of a prism',
        steps: [
          { eq: '<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>', why: 'The two normals to the faces meet at an angle 180° − <i>A</i>, so in the triangle they make with the ray, <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> + (180° − <i>A</i>) = 180°. Here <i>r</i><sub>1</sub> and <i>r</i><sub>2</sub> are the angles of refraction at entry and of incidence at the second face.' },
          { eq: '<i>δ</i> = (<i>i</i> − <i>r</i><sub>1</sub>) + (<i>e</i> − <i>r</i><sub>2</sub>) = <i>i</i> + <i>e</i> − <i>A</i>', why: 'At each face the ray turns by the difference between the outer and inner angles, in the same sense, so the two turnings add.' },
          { eq: 'd<i>e</i>/d<i>i</i> = −(cos <i>i</i> cos <i>r</i><sub>2</sub>)/(cos <i>e</i> cos <i>r</i><sub>1</sub>)', why: 'Differentiate sin <i>i</i> = <i>n</i> sin <i>r</i><sub>1</sub> and sin <i>e</i> = <i>n</i> sin <i>r</i><sub>2</sub> with d<i>r</i><sub>2</sub> = −d<i>r</i><sub>1</sub>.' },
          { eq: 'd<i>δ</i>/d<i>i</i> = 0 ⇒ d<i>e</i>/d<i>i</i> = −1', why: 'The deviation is stationary where this derivative is zero.' },
          { eq: '(<i>n</i><sup>2</sup> − 1)(sin<sup>2</sup> <i>r</i><sub>2</sub> − sin<sup>2</sup> <i>r</i><sub>1</sub>) = 0', why: 'Squaring cos <i>i</i> cos <i>r</i><sub>2</sub> = cos <i>e</i> cos <i>r</i><sub>1</sub> and putting cos<sup>2</sup> <i>i</i> = 1 − <i>n</i><sup>2</sup> sin<sup>2</sup> <i>r</i><sub>1</sub>, cos<sup>2</sup> <i>e</i> = 1 − <i>n</i><sup>2</sup> sin<sup>2</sup> <i>r</i><sub>2</sub> reduces it to this. For <i>n</i> > 1 it forces <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub>.' },
          { eq: '<i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2, <i>i</i> = <i>e</i> = (<i>A</i> + <i>δ</i><sub>m</sub>)/2', why: 'The ray passes symmetrically at minimum deviation; the second form comes from <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i> with <i>i</i> = <i>e</i>.' },
          { eq: '<i>n</i> = sin <i>i</i>/sin <i>r</i><sub>1</sub> = sin[(<i>A</i> + <i>δ</i><sub>m</sub>)/2]/sin(<i>A</i>/2)', why: 'Snell’s law at the first face with the symmetric values.' },
        ],
      },
      {
        t: 'p',
        html: '<b>Shape of the graph.</b> The deviation falls as <i>i</i> increases from its smallest working value, reaches a single minimum <i>δ</i><sub>m</sub> at <i>i</i> = <i>e</i>, and rises again. The curve is not symmetric about the minimum, and it is steeper on the small-<i>i</i> side. For a given <i>δ</i> larger than <i>δ</i><sub>m</sub> there are two values of <i>i</i>: <i>i</i> and the matching <i>e</i>, because the ray path can be reversed. For a prism of <i>A</i> = 60° and <i>n</i> = 1.5 the ray emerges only if <i>i</i> is at least about 28°; below that it is totally reflected at the second face.',
      },
      {
        t: 'formula',
        kicker: 'Refractive index by the prism',
        main: '<i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i><br><i>n</i> = sin[(<i>A</i> + <i>δ</i><sub>m</sub>)/2]/sin(<i>A</i>/2)',
        legend: ['<i>δ</i> = angle of deviation', '<i>i</i> = angle of incidence', '<i>e</i> = angle of emergence', '<i>A</i> = refracting angle of the prism', '<i>δ</i><sub>m</sub> = angle of minimum deviation', '<i>n</i> = refractive index of the glass'],
        note: 'At minimum deviation <i>i</i> = <i>e</i>.',
      },

      { t: 'part', title: 'Prism: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A drawing board with white paper fixed by drawing pins, a glass prism, six or more pins, a protractor, a sharp pencil and a metre scale or ruler.',
      },
      {
        t: 'proc',
        title: 'Deviation for different angles of incidence',
        steps: [
          '<b>Trace.</b> Fix the paper on the board and place the prism on it with its refracting edge toward you. Trace the outline of the prism and take it off. Measure the refracting angle <i>A</i> between the two traced faces with the protractor.',
          '<b>Incident ray.</b> Draw a normal to the face AB at a point N. Draw lines through N at <i>i</i> = 35°, 40°, 45°, …, 65° to the normal. Replace the prism exactly on the outline.',
          '<b>Pins on the incident ray.</b> For the first value of <i>i</i> fix two pins P<sub>1</sub> and P<sub>2</sub> upright on the line, at least 10 cm apart.',
          '<b>Emergent ray.</b> Look through the other face AC and fix P<sub>3</sub> and P<sub>4</sub> so that they and the images of P<sub>1</sub> and P<sub>2</sub> appear in one straight line.',
          '<b>Deviation.</b> Remove the prism and the pins (marking their holes). Join P<sub>3</sub> and P<sub>4</sub> and extend the line to cut the incident ray. The angle between the extended incident ray and the emergent ray is <i>δ</i>; measure it with the protractor.',
          '<b>Repeat</b> for each <i>i</i>, using a fresh sheet or a fresh point N on the face, and plot <i>δ</i> (vertical) against <i>i</i> (horizontal). Draw a smooth curve through the points and read <i>δ</i><sub>m</sub> at its lowest point.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> Hold the prism by its two end faces, and push pins in with care.' },

      { t: 'part', title: 'Prism: observations and calculation' },
      {
        t: 'table',
        title: 'Prism with refracting angle A = 60.0° (protractor least count 0.5°)',
        head: ['i (degrees)', 'δ (degrees)'],
        rows: [
          ['35', '44.0'],
          ['40', '40.5'],
          ['45', '39.5'],
          ['50', '39.0'],
          ['55', '39.5'],
          ['60', '40.5'],
          ['65', '42.0'],
        ],
        note: 'The smooth curve through these points has its lowest point at about δ = 39.0° near i = 49.5°.',
      },
      { t: 'fig', id: 'p12-15-03-d5' },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'Using the table (<i>A</i> = 60.0°), find the angle of incidence at minimum deviation and the refractive index of the glass, with the uncertainty from a protractor error of 0.5° in <i>δ</i><sub>m</sub> and in <i>A</i>.',
        steps: [
          '<b>Minimum deviation.</b> The smooth curve has its lowest point at <i>δ</i><sub>m</sub> = 39.0°.',
          '<b>Angle of incidence there.</b> <i>i</i> = <i>e</i> = (<i>A</i> + <i>δ</i><sub>m</sub>)/2 = (60.0° + 39.0°)/2 = 49.5°, which matches the lowest tabulated point near <i>i</i> = 50°.',
          '<b>Refractive index.</b> <i>n</i> = sin 49.5°/sin 30.0° = 0.7604/0.5000 = 1.521.',
          '<b>Uncertainty.</b> From <i>n</i> = sin[(<i>A</i> + <i>δ</i><sub>m</sub>)/2]/sin(<i>A</i>/2), d<i>n</i>/<i>n</i> = ½cot[(<i>A</i> + <i>δ</i><sub>m</sub>)/2] d<i>δ</i><sub>m</sub> − ½[cot(<i>A</i>/2) − cot((<i>A</i> + <i>δ</i><sub>m</sub>)/2)] d<i>A</i>. With cot 49.5° = 0.854, cot 30° = 1.732 and 0.5° = 0.00873 rad, the <i>δ</i><sub>m</sub> term is ½ × 0.854 × 0.00873 = 0.37 % and the <i>A</i> term ½ × (1.732 − 0.854) × 0.00873 = 0.38 %. Taking both at worst, 0.76 %, so Δ<i>n</i> = 0.0115, about 0.01.',
          '<b>Check.</b> With <i>n</i> = 1.52 and <i>A</i> = 60.0°, sin <i>i</i> = 1.52 sin 30° = 0.76, so <i>i</i> = 49.5° and <i>δ</i><sub>m</sub> = 2 × 49.5° − 60.0° = 39.0° ✓.',
        ],
        ans: '<i>n</i> = 1.52 ± 0.01',
      },

      { t: 'part', title: 'Prism: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The angle of minimum deviation is <i>δ</i><sub>m</sub> = (value)° and the refractive index of the glass is <i>n</i> = (value) ± (uncertainty).<br><br><b>Precautions.</b> Fix the pins vertical and at least 10 cm apart, since the direction error of a line drawn through two pins is smaller for a wide spacing. Keep the angles of incidence within about 30° to 65°; with <i>n</i> = 1.52 the ray emerges only for <i>i</i> ≥ 29.4°, and for smaller <i>i</i> it is totally reflected at the second face, and for large <i>i</i> the emergent ray is very oblique and faint. Do not move the prism once it is traced. Look at the feet of the pins, not their tops.<br><br><b>Errors.</b> The reading of <i>δ</i><sub>m</sub> (the curve is flat near its lowest point, so it is read by eye) and the measurement of <i>A</i> contribute about equally, as in the example.',
      },

      { t: 'part', title: 'Prism: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b><i>δ</i><sub>m</sub> is the lowest point of the curve,</b> not the value at the largest angle of incidence, and not the average of the readings.',
          '<b>The curve is not symmetric about the minimum;</b> it is a shallow, uneven U, steeper on the side of small <i>i</i>.',
          '<b>Each deviation larger than <i>δ</i><sub>m</sub> occurs at two angles of incidence</b> (<i>i</i> and the corresponding <i>e</i>); the deviation <i>δ</i><sub>m</sub> occurs at one.',
          '<b>At minimum deviation <i>i</i> = <i>e</i> and <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2.</b> In an isosceles prism the ray inside is then parallel to the base.',
          '<b>The angle in the formula is <i>A</i>/2 and (<i>A</i> + <i>δ</i><sub>m</sub>)/2:</b> a common slip is to use <i>A</i> and <i>A</i> + <i>δ</i><sub>m</sub>.',
        ],
      },

      // ───── Experiment: slab with travelling microscope
      { t: 'part', title: 'Slab and microscope: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the refractive index of a glass slab as the ratio of the real thickness to the apparent thickness, using a travelling microscope.<br><br>A mark under a slab appears to be raised, because the rays from it bend away from the normal as they leave the slab. The apparent depth <i>t</i>′ is less than the real thickness <i>t</i>.',
      },
      { t: 'fig', id: 'p12-15-03-d6' },
      {
        t: 'deriv',
        kicker: 'Real and apparent depth',
        steps: [
          { eq: 'tan <i>r</i> = <i>x</i>/<i>t</i>', why: 'A ray leaves the mark O, which is at depth <i>t</i> below the top surface, and reaches the top surface at a point at a horizontal distance <i>x</i> from the point above O. In the glass it makes an angle <i>r</i> with the normal.' },
          { eq: 'sin <i>i</i> = <i>n</i> sin <i>r</i>', why: 'Snell’s law at the top surface: the ray emerges into air at an angle <i>i</i>.' },
          { eq: 'tan <i>i</i> = <i>x</i>/<i>t</i>′', why: 'The emerging ray, extended backward, appears to come from the image point at depth <i>t</i>′ below the surface.' },
          { eq: '<i>n</i> = sin <i>i</i>/sin <i>r</i> ≈ tan <i>i</i>/tan <i>r</i> = <i>t</i>/<i>t</i>′', why: 'For rays nearly along the normal (the eye or microscope looking straight down) the angles are small, so sin ≈ tan.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Refractive index of a slab',
        main: '<i>n</i> = <i>t</i>/<i>t</i>′<br><i>n</i> = (<i>R</i><sub>3</sub> − <i>R</i><sub>1</sub>)/(<i>R</i><sub>3</sub> − <i>R</i><sub>2</sub>)',
        legend: ['<i>t</i> = real thickness of the slab', '<i>t</i>′ = apparent thickness', '<i>R</i><sub>1</sub> = microscope reading on the cross, no slab', '<i>R</i><sub>2</sub> = microscope reading on the cross through the slab', '<i>R</i><sub>3</sub> = microscope reading on the top face', '<i>n</i> = refractive index of the glass'],
        note: 'Valid for viewing nearly along the normal.',
      },

      { t: 'part', title: 'Slab and microscope: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A travelling microscope (a microscope on a vertical scale with a vernier), a rectangular glass slab, a sheet of paper with a cross drawn on it, fine lycopodium powder and a small brush.<br><br><b>Least count.</b> If one main-scale division is 0.5 mm and 25 vernier divisions equal 24 main-scale divisions, LC = 1 MSD/25 = 0.5 mm/25 = 0.02 mm = 0.002 cm. When <i>N</i> vernier divisions span <i>N</i> − 1 main-scale divisions, LC is one main-scale division divided by <i>N</i>.',
      },
      {
        t: 'proc',
        title: 'Three focusing readings',
        steps: [
          '<b>Mark.</b> Put the paper with the cross on the base of the microscope stand and focus the microscope on the cross, with no parallax between the cross-wire in the eyepiece and the image. Read the vertical scale: <i>R</i><sub>1</sub>.',
          '<b>Through the slab.</b> Place the slab over the cross and raise the microscope until the cross, seen through the slab, is in focus. Read <i>R</i><sub>2</sub>. The cross appears raised, so <i>R</i><sub>2</sub> is greater than <i>R</i><sub>1</sub>.',
          '<b>Top surface.</b> Sprinkle a little lycopodium powder on the top face of the slab and raise the microscope until the powder is in focus. Read <i>R</i><sub>3</sub>.',
          '<b>Repeat</b> three or four times (a different place on the slab each time) and take the mean of <i>n</i>.',
        ],
      },
      { t: 'p', html: '<b>Safety.</b> Glass edges can be sharp: handle the slab with care.' },

      { t: 'part', title: 'Slab and microscope: observations and calculation' },
      {
        t: 'table',
        title: 'Travelling microscope readings (LC = 0.002 cm)',
        head: ['Reading', 'Focused on', 'Scale reading (cm)'],
        rows: [
          ['R1', 'cross on the paper, no slab', '4.236'],
          ['R2', 'cross seen through the slab', '5.092'],
          ['R3', 'lycopodium powder on the top face', '6.738'],
        ],
      },
      {
        t: 'ex',
        tag: 'Experiment data',
        q: 'Using the readings in the table, find the real thickness, the apparent thickness and the refractive index of the slab, and the uncertainty in <i>n</i>.',
        steps: [
          '<b>Real thickness.</b> The slab rests on the paper, so its thickness is the distance from the paper to the top face: <i>t</i> = <i>R</i><sub>3</sub> − <i>R</i><sub>1</sub> = 6.738 − 4.236 = 2.502 cm.',
          '<b>Apparent thickness.</b> <i>t</i>′ = <i>R</i><sub>3</sub> − <i>R</i><sub>2</sub> = 6.738 − 5.092 = 1.646 cm.',
          '<b>Refractive index.</b> <i>n</i> = <i>t</i>/<i>t</i>′ = 2.502/1.646 = 1.520.',
          '<b>Uncertainty.</b> <i>n</i> = (<i>R</i><sub>3</sub> − <i>R</i><sub>1</sub>)/(<i>R</i><sub>3</sub> − <i>R</i><sub>2</sub>), so the largest fractional error is (LC + LC)/<i>t</i> + (LC + LC)/<i>t</i>′ = 0.004/2.502 + 0.004/1.646 = 0.0016 + 0.0024 = 0.0040. So Δ<i>n</i> = 0.004 × 1.520 = 0.006.',
          '<b>Check.</b> The cross should be raised by <i>t</i> − <i>t</i>′ = 2.502 − 1.646 = 0.856 cm, and <i>R</i><sub>2</sub> − <i>R</i><sub>1</sub> = 5.092 − 4.236 = 0.856 cm ✓. The value 1.52 is typical of crown glass.',
        ],
        ans: '<i>n</i> = 1.520 ± 0.006',
      },

      { t: 'part', title: 'Slab and microscope: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The refractive index of the glass of the slab is <i>n</i> = (mean) ± (uncertainty).<br><br><b>Precautions.</b> Focus until the image and the cross-wire show no parallax. Turn the screw of the microscope in one direction only when taking a reading, to avoid errors from backlash. Keep the microscope vertical and the slab flat on the paper, so that the line of sight is along the normal. Use the powder sparingly, as a thick layer adds to the thickness. Read the vernier carefully, with the same sense of rotation each time.<br><br><b>Errors.</b> The three focusing readings are each uncertain by about one least count, and the difference <i>R</i><sub>3</sub> − <i>R</i><sub>2</sub> is the smallest; so a thicker slab, with a larger <i>t</i>′, gives a smaller fractional error. The small-angle approximation behind <i>n</i> = <i>t</i>/<i>t</i>′ is good because the microscope receives only rays near the vertical.',
      },

      { t: 'part', title: 'Slab and microscope: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>All three readings are positions of the microscope.</b> The real thickness is not read from a scale on the slab but found as <i>R</i><sub>3</sub> − <i>R</i><sub>1</sub>.',
          '<b><i>n</i> is greater than 1 because the apparent depth is smaller than the real depth.</b> A value below 1 means the ratio has been inverted.',
          '<b>The apparent shift is <i>t</i> − <i>t</i>′ = <i>R</i><sub>2</sub> − <i>R</i><sub>1</sub>,</b> which is not the apparent depth.',
          '<b>The formula is valid for near-normal viewing.</b> It is only an approximation for a slanting view of the mark.',
          '<b>The lycopodium powder marks the top face</b>; without it the top surface of clear glass cannot be focused.',
        ],
      },

      // ───── Practice and MCQ, Topic 03
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[Concave mirror] For a concave mirror the object pin and the image pin coincide at observed distances <i>u</i> = 29.6 cm and <i>v</i> = 29.4 cm from the pole. The index corrections are +0.4 cm for the object pin and +0.6 cm for the image pin. Find the radius of curvature and the focal length.',
            a: 'Corrected: <i>u</i> = 29.6 + 0.4 = 30.0 cm and <i>v</i> = 29.4 + 0.6 = 30.0 cm. They are equal, so the pins are at the centre of curvature: <i>R</i> = 30.0 cm and |<i>f</i>| = <i>R</i>/2 = 15.0 cm. Check: <i>f</i> = <i>uv</i>/(<i>u</i> + <i>v</i>) = 900/60.0 = 15.0 cm ✓. In the sign convention <i>f</i> = −15.0 cm.',
          },
          {
            q: '[Convex lens] A graph of 1/|<i>v</i>| against 1/|<i>u</i>| for a convex lens is a straight line that cuts the 1/|<i>v</i>| axis at 0.050 cm<sup>−1</sup>. Find the focal length of the lens and the image distance when the object is 60.0 cm from the lens.',
            a: 'The intercept is 1/<i>f</i>, so <i>f</i> = 1/0.050 = 20.0 cm. For |<i>u</i>| = 60.0 cm: 1/|<i>v</i>| = 0.050 − 1/60.0 = 0.0500 − 0.0167 = 0.0333 cm<sup>−1</sup>, so |<i>v</i>| = 30.0 cm. Check with the formula: 60.0 × 30.0/90.0 = 20.0 cm ✓.',
          },
          {
            q: '[Convex mirror] An auxiliary lens forms a real image of the object pin. When the convex mirror is in the correct position its pole is at 75.6 cm on the bench and the image, found after removing the mirror, is at 96.0 cm. Find the focal length of the mirror. Why can the focal length not be found by locating the image of a real object directly with a pin?',
            a: '<i>R</i> = 96.0 − 75.6 = 20.4 cm, so <i>f</i> = <i>R</i>/2 = 10.2 cm (positive in the new Cartesian convention). A convex mirror forms a virtual image of a real object, behind the mirror, where no pin can be placed, so the image cannot be located by the no-parallax method without the extra lens.',
          },
          {
            q: '[Prism] For a prism of refracting angle 60.0° the minimum deviation is measured as 40.0°. Find the angle of incidence at minimum deviation, the angle of refraction at the first face and the refractive index.',
            a: '<i>i</i> = (<i>A</i> + <i>δ</i><sub>m</sub>)/2 = (60.0° + 40.0°)/2 = 50.0°; <i>r</i><sub>1</sub> = <i>A</i>/2 = 30.0°; <i>n</i> = sin 50.0°/sin 30.0° = 0.7660/0.5000 = 1.53. Check: <i>e</i> = <i>i</i> = 50.0° and <i>δ</i> = 50.0° + 50.0° − 60.0° = 40.0° ✓.',
          },
          {
            q: '[Prism] A prism of refracting angle 60° has refractive index 1.50. (a) Find its angle of minimum deviation. (b) Find the smallest angle of incidence for which a ray emerges from the second face.',
            a: '(a) sin <i>i</i> = 1.50 × sin 30° = 0.750, so <i>i</i> = 48.6° and <i>δ</i><sub>m</sub> = 2 × 48.6° − 60° = 37.2°. (b) The ray just emerges (at 90°) when the angle at the second face equals the critical angle: sin <i>C</i> = 1/1.5, <i>C</i> = 41.8°. Then <i>r</i><sub>1</sub> = 60° − 41.8° = 18.2° and sin <i>i</i> = 1.50 × sin 18.2° = 0.469, so <i>i</i> = 27.9°. For smaller <i>i</i> the ray is totally reflected at the second face.',
          },
          {
            q: '[Slab] In a travelling microscope experiment the readings are <i>R</i><sub>1</sub> = 3.210 cm (cross, no slab), <i>R</i><sub>2</sub> = 3.810 cm (cross through the slab) and <i>R</i><sub>3</sub> = 5.010 cm (top face). Find the real thickness, the apparent thickness, the refractive index and the apparent shift of the cross.',
            a: 'Real thickness <i>t</i> = 5.010 − 3.210 = 1.800 cm; apparent thickness <i>t</i>′ = 5.010 − 3.810 = 1.200 cm; <i>n</i> = 1.800/1.200 = 1.50; apparent shift = <i>t</i> − <i>t</i>′ = 0.600 cm = <i>R</i><sub>2</sub> − <i>R</i><sub>1</sub> ✓.',
          },
        ],
      },
      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the parallax method with a concave mirror, the image pin and the object pin are found at the same distance, 36.0 cm (corrected), from the pole. The focal length of the mirror has magnitude',
        opts: [
          { label: '9.0 cm', nudge: 'That divides 36 by 4. From 1/<i>f</i> = 1/36 + 1/36 = 2/36 the focal length is 36/2, not 36/4.' },
          { label: '18.0 cm', nudge: null },
          { label: '36.0 cm', nudge: 'That is the radius of curvature, 2<i>f</i>. The pins are at the centre of curvature, so <i>f</i> is half this.' },
          { label: '72.0 cm', nudge: 'That doubles <i>R</i>; the focal length is half of <i>R</i>, not twice it.' },
        ],
        correct: 1,
        solution: 'With <i>u</i> = <i>v</i> = 36.0 cm the pins are at the centre of curvature, <i>R</i> = 36.0 cm and |<i>f</i>| = <i>R</i>/2 = 18.0 cm.',
      },
      {
        t: 'mcq',
        q: 'In the convex mirror experiment with an auxiliary lens, the mirror is correctly placed when its image of the object pin coincides with the pin. At that position',
        opts: [
          { label: 'the point toward which the lens sends the rays is the centre of curvature of the mirror', nudge: null },
          { label: 'the point toward which the lens sends the rays is the focus of the mirror', nudge: 'Rays converging to the focus of a convex mirror would be reflected parallel to the axis, not back along themselves.' },
          { label: 'the point toward which the lens sends the rays is the pole of the mirror', nudge: 'Rays converging on the pole would meet the surface obliquely in general, so they would not retrace their path. Retracing needs normal incidence.' },
          { label: 'the mirror forms a real image of the pin in front of it', nudge: 'A convex mirror cannot form a real image of a real object. Here the rays arriving are converging, which is a virtual object for the mirror.' },
        ],
        correct: 0,
        solution: 'The rays retrace their path only if they strike the mirror along the normal, that is, directed to the centre of curvature. So I is at C and the distance from the pole to I is <i>R</i>; then <i>f</i> = <i>R</i>/2.',
      },
      {
        t: 'mcq',
        q: 'For a convex lens used with the new Cartesian convention, a graph of 1/<i>v</i> on the vertical axis against 1/<i>u</i> on the horizontal axis is a straight line with',
        opts: [
          { label: 'slope +1 and intercept 1/<i>f</i> on the 1/<i>v</i> axis', nudge: null },
          { label: 'slope −1 and intercept 1/<i>f</i> on the 1/<i>v</i> axis', nudge: 'Slope −1 belongs to the graph of the magnitudes 1/|<i>v</i>| against 1/|<i>u</i>|. With the sign of <i>u</i> kept, 1/<i>v</i> = 1/<i>f</i> + 1/<i>u</i> has slope +1.' },
          { label: 'slope +1 and intercept <i>f</i> on the 1/<i>v</i> axis', nudge: 'The intercept is 1/<i>f</i>, the reciprocal, not <i>f</i>.' },
          { label: 'slope <i>f</i> and passing through the origin', nudge: 'The line does not pass through the origin; it cuts the 1/<i>v</i> axis at 1/<i>f</i>.' },
        ],
        correct: 0,
        solution: 'The lens formula 1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i> rearranges to 1/<i>v</i> = 1/<i>u</i> + 1/<i>f</i>, a line of slope +1 with intercept 1/<i>f</i>.',
      },
      {
        t: 'mcq',
        q: 'A prism has refracting angle 60° and its angle of minimum deviation is 30°. Its refractive index is',
        opts: [
          { label: '1.33', nudge: 'For <i>A</i> = 60° an index of 1.33 gives a minimum deviation smaller than 30°.' },
          { label: '1.41', nudge: null },
          { label: '1.50', nudge: 'For <i>A</i> = 60° an index of 1.50 gives a minimum deviation larger than 30°, about 37°.' },
          { label: '1.73', nudge: 'That is sin 60°/sin 30°, from using <i>A</i> instead of (<i>A</i> + <i>δ</i><sub>m</sub>)/2 in the numerator. For <i>n</i> = 1.73 the deviation would be 60°.' },
        ],
        correct: 1,
        solution: '<i>n</i> = sin[(60° + 30°)/2]/sin 30° = sin 45°/sin 30° = 0.7071/0.5 = 1.41.',
      },
      {
        t: 'mcq',
        q: 'In a slab experiment with a travelling microscope the readings are 2.000 cm (cross without slab), 2.600 cm (cross through the slab) and 3.800 cm (top surface). The refractive index of the slab is',
        opts: [
          { label: '0.67', nudge: 'That is the inverted ratio, <i>t</i>′/<i>t</i>. A refractive index here must be greater than 1.' },
          { label: '1.30', nudge: 'That is the ratio of the two readings 2.600/2.000, which are positions, not depths.' },
          { label: '1.50', nudge: null },
          { label: '3.00', nudge: 'That divides the real thickness 1.800 by the shift 0.600, instead of by the apparent thickness 1.200.' },
        ],
        correct: 2,
        solution: '<i>t</i> = 3.800 − 2.000 = 1.800 cm, <i>t</i>′ = 3.800 − 2.600 = 1.200 cm, so <i>n</i> = 1.800/1.200 = 1.50.',
      },
      {
        t: 'mcq',
        q: 'In an experiment on a convex lens the observed distances are <i>u</i> = <i>v</i> = 39.5 cm. Each is too small by 0.5 cm, so the index correction is +0.5 cm for both. The focal length is',
        opts: [
          { label: '19.5 cm', nudge: 'The correction was subtracted. The observed distances are too small, so the correction is added.' },
          { label: '19.75 cm', nudge: 'That is the uncorrected value, 39.5/2.' },
          { label: '20.0 cm', nudge: null },
          { label: '40.0 cm', nudge: 'That is the distance <i>u</i> = <i>v</i> = 2<i>f</i>, not the focal length.' },
        ],
        correct: 2,
        solution: 'The corrected distances are 40.0 cm each, which is 2<i>f</i>, so <i>f</i> = 20.0 cm.',
      },
    ],
  },
];
