import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 15, Experimental Skills: Topic 00 (reading instruments, errors and
 * graphs) and Topic 04 (semiconductors and components). ORIGINAL TEXT, written
 * from standard laboratory practice (NCERT laboratory manual level), not copied
 * from any book. Diagrams are redrawn in lib/diagrams/physics-12-15.ts:
 *   p12-15-00-d1  screw gauge closed, positive and negative zero error
 *   p12-15-00-d2  V against I scatter, best-fit line, slope triangle
 *   p12-15-00-d3  two parallel lines: the same slope, a systematic offset
 *   p12-15-04-d1  forward-bias and reverse-bias circuits of a diode
 *   p12-15-04-d2  forward and reverse I-V curves of a silicon diode
 *   p12-15-04-d3  Zener voltage regulator circuit
 *   p12-15-04-d4  Zener characteristic circuit
 *   p12-15-04-d5  Zener reverse I-V curve with the breakdown region
 *   p12-15-04-d6  identification flow chart for the four components
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 00 · Reading instruments, errors and graphs ─────────────────────────
  {
    n: '00',
    title: 'Reading instruments, errors and graphs',
    kalam: 'Every reading has a least count, every instrument a zero error, and every result an error.',
    blocks: [
      { t: 'part', title: 'Least count and zero error' },
      {
        t: 'p',
        html: 'Sixteen experiments follow this page. Each ends in a number, and each number is only as good as the instrument that gave it. Questions on this chapter ask you to read a scale, correct the reading, find the error in the result, or say what a graph should look like. This topic gathers the skills they all share, so the experiments need not repeat them.',
      },
      {
        t: 'p',
        html: '<b>Least count (LC)</b> is the smallest change an instrument can show. A reading is never more precise than its LC.<br><b>Vernier callipers and screw gauge.</b> LC of a vernier = 1 MSD − 1 VSD, which is the value of one main-scale division divided by the number of vernier divisions <i>N</i>, provided that <i>N</i> vernier divisions equal (<i>N</i> − 1) main-scale divisions. LC of a screw gauge = pitch/(number of circular-scale divisions). Both are taught with worked readings in Physics 11, Chapter 1 (Units and Measurements). This chapter only uses them.',
      },
      {
        t: 'table',
        title: 'Least count of other common instruments',
        head: ['Instrument', 'Least count', 'Example'],
        rows: [
          ['Metre scale', 'Smallest division, 1 mm', 'Reads to 0.1 cm'],
          ['Analogue voltmeter or ammeter', 'Full-scale value ÷ number of divisions', '0 to 3 V over 30 divisions: 0.1 V. 0 to 250 mA over 50 divisions: 5 mA'],
          ['Digital meter', 'One unit of the last digit shown', 'Displays 1.52 V: 0.01 V'],
          ['Stopwatch', 'Smallest time it displays', 'Displays 0.01 s, but starting and stopping by hand adds about 0.1 to 0.2 s'],
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Zero error.</b> Close the jaws (or bring the two ends together) and read the instrument. If it does not read zero, the reading it does show is the zero error <i>e</i>, with its sign. Every reading taken afterwards is corrected with the same rule:',
      },
      {
        t: 'formula',
        kicker: 'Zero correction',
        main: 'corrected reading = observed reading − <i>e</i>',
        legend: ['<i>e</i> = zero error, positive or negative as found with the jaws closed'],
        note: 'A positive zero error is subtracted. A negative zero error is added.',
      },
      {
        t: 'p',
        html: 'Finding <i>e</i> on a screw gauge with <i>N</i> circular divisions: if the reference line meets the <i>n</i>-th division and <i>n</i> is small, the zero mark has not yet reached the line and <i>e</i> = +<i>n</i> × LC. If the line meets a division near the top of the scale, the zero mark has passed the line and <i>e</i> = −(<i>N</i> − <i>n</i>) × LC. On a vernier with <i>N</i> vernier divisions: if its zero lies to the right of the main-scale zero and the <i>k</i>-th vernier division coincides, <i>e</i> = +<i>k</i> × LC. If its zero lies to the left, <i>e</i> = −(<i>N</i> − <i>k</i>) × LC.',
      },
      { t: 'fig', id: 'p12-15-00-d1' },
      {
        t: 'formula',
        kicker: 'Least count',
        main: 'Vernier: LC = 1 MSD − 1 VSD<br>Screw gauge: LC = pitch/(number of circular divisions)<br>Analogue meter: LC = full-scale value/(number of divisions)',
        legend: ['MSD = main-scale division', 'VSD = vernier-scale division'],
        note: null,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (zero error)',
        q: 'A screw gauge has pitch 1 mm and 100 circular divisions. With the studs touching, the 94th division lies on the reference line. Five readings are then taken across a wire, each as main-scale reading + circular reading × LC.',
        steps: [
          'LC = pitch/(number of divisions) = 1 mm/100 = 0.01 mm.',
          'Zero error: the 94th division is on the line, so the zero mark has passed it by 100 − 94 = 6 divisions. <i>e</i> = −6 × 0.01 mm = −0.06 mm.',
          'Observed readings (mm): 1 + 0.52 = 1.52, 1 + 0.55 = 1.55, 1 + 0.50 = 1.50, 1 + 0.53 = 1.53, 1 + 0.54 = 1.54.',
          'Corrected reading = observed − <i>e</i> = observed + 0.06 mm: 1.58, 1.61, 1.56, 1.59, 1.60 mm.',
          'Mean = (1.58 + 1.61 + 1.56 + 1.59 + 1.60)/5 = 7.94/5 = 1.588 mm.',
          'Deviations from the mean: 0.008, 0.022, 0.028, 0.002, 0.012 mm. Mean deviation = 0.072/5 = 0.0144 mm, so the scatter is about 0.01 mm, the same as the LC.',
          '<b>Check.</b> Mean of the observed readings = 7.64/5 = 1.528 mm. Adding 0.06 mm gives 1.588 mm again.',
        ],
        ans: 'Diameter = 1.59 ± 0.01 mm',
      },

      { t: 'part', title: 'Errors and how they combine' },
      {
        t: 'p',
        html: '<b>Kinds of error.</b> A <b>systematic</b> error pushes every reading the same way: a zero error, a mis-calibrated scale, a stop-watch that runs fast. Repeating the measurement does not remove it. You find it and correct for it. A <b>random</b> error scatters the readings both ways: reaction time, parallax, small disturbances. Repeating and averaging reduces it. The <b>least-count error</b> is the limit set by the scale itself.<br><br>For a quantity <i>a</i> measured <i>n</i> times, the mean is <i>a</i><sub>mean</sub> = (<i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> + … + <i>a</i><sub><i>n</i></sub>)/<i>n</i>. The absolute error of each reading is Δ<i>a</i><sub><i>i</i></sub> = |<i>a</i><sub>mean</sub> − <i>a</i><sub><i>i</i></sub>|. The mean absolute error is Δ<i>a</i> = (Δ<i>a</i><sub>1</sub> + … + Δ<i>a</i><sub><i>n</i></sub>)/<i>n</i>, and the result is written <i>a</i> = <i>a</i><sub>mean</sub> ± Δ<i>a</i>. The relative error is Δ<i>a</i>/<i>a</i><sub>mean</sub>, and ×100 gives the percentage error.',
      },
      {
        t: 'ex',
        tag: 'CBSE / NEET Level (repeated readings)',
        q: 'Five students time one oscillation of a pendulum and record these periods.',
        steps: [
          'Readings in seconds: 1.95, 2.02, 1.98, 2.05, 2.00.',
          'Mean = (1.95 + 2.02 + 1.98 + 2.05 + 2.00)/5 = 10.00/5 = 2.00 s.',
          'Absolute errors: 0.05, 0.02, 0.02, 0.05, 0.00 s. Their sum is 0.14 s, so the mean absolute error = 0.14/5 = 0.028 s ≈ 0.03 s.',
          'Relative error = 0.03/2.00 = 0.015, which is about 1.5 %.',
          '<b>Check.</b> The readings sum to 10.00 s whichever order they are added, so the mean is right. The five errors add to 0.14 s, which is 0.028 s each on average.',
        ],
        ans: '<i>T</i> = 2.00 ± 0.03 s (about 1.5 %)',
      },
      {
        t: 'p',
        html: '<b>Combining errors.</b> For a sum or a difference the absolute errors add: <i>Q</i> = <i>a</i> ± <i>b</i> gives Δ<i>Q</i> = Δ<i>a</i> + Δ<i>b</i>. For products, quotients and powers the relative errors add, each weighted by the power of its quantity. The next derivation shows why.',
      },
      {
        t: 'deriv',
        kicker: 'Error in a combined quantity',
        steps: [
          { eq: '<i>Q</i> = <i>a</i><sup><i>p</i></sup> <i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup>', why: 'The quantity, built from measured values <i>a</i>, <i>b</i>, <i>c</i>.' },
          { eq: 'ln <i>Q</i> = <i>p</i> ln <i>a</i> + <i>q</i> ln <i>b</i> − <i>r</i> ln <i>c</i>', why: 'Take logarithms. Products and quotients turn into sums and differences.' },
          { eq: 'd<i>Q</i>/<i>Q</i> = <i>p</i> d<i>a</i>/<i>a</i> + <i>q</i> d<i>b</i>/<i>b</i> − <i>r</i> d<i>c</i>/<i>c</i>', why: 'Differentiate. The small changes d<i>a</i>, d<i>b</i>, d<i>c</i> stand for the errors.' },
          { eq: 'Δ<i>Q</i>/<i>Q</i> = <i>p</i> Δ<i>a</i>/<i>a</i> + <i>q</i> Δ<i>b</i>/<i>b</i> + <i>r</i> Δ<i>c</i>/<i>c</i>', why: 'The maximum error: the errors may have either sign, so in the worst case every term pushes <i>Q</i> the same way and all terms are taken as positive. That is why a quotient also has errors that add.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Error in a combined quantity',
        main: '<i>Q</i> = <i>a</i><sup><i>p</i></sup> <i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup><br>Δ<i>Q</i>/<i>Q</i> = <i>p</i> Δ<i>a</i>/<i>a</i> + <i>q</i> Δ<i>b</i>/<i>b</i> + <i>r</i> Δ<i>c</i>/<i>c</i><br>Δ(<i>a</i> ± <i>b</i>) = Δ<i>a</i> + Δ<i>b</i>',
        legend: [
          '<i>p</i>, <i>q</i>, <i>r</i> = powers of the measured quantities, taken positive in the error',
          'Δ<i>a</i>/<i>a</i> = relative error of <i>a</i>',
        ],
        note: 'The diameter of a wire appears as <i>d</i><sup>2</sup> in its area, so its relative error counts twice.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (error in density)',
        q: 'A solid steel cylinder has mass <i>m</i> = 54.0 ± 0.1 g, diameter <i>d</i> = 1.20 ± 0.01 cm and length <i>L</i> = 6.00 ± 0.01 cm. Find its density with the error.',
        steps: [
          'Volume = π<i>d</i><sup>2</sup><i>L</i>/4, so <i>ρ</i> = 4<i>m</i>/(π<i>d</i><sup>2</sup><i>L</i>).',
          '<i>d</i><sup>2</sup><i>L</i> = (1.20)<sup>2</sup> × 6.00 = 1.44 × 6.00 = 8.64 cm<sup>3</sup>. π × 8.64 = 27.143 cm<sup>3</sup>.',
          '<i>ρ</i> = 4 × 54.0/27.143 = 216/27.143 = 7.958 g cm<sup>−3</sup>.',
          'Relative errors: Δ<i>m</i>/<i>m</i> = 0.1/54.0 = 0.00185. Δ<i>d</i>/<i>d</i> = 0.01/1.20 = 0.00833, and <i>d</i> enters squared, so it counts 2 × 0.00833 = 0.01667. Δ<i>L</i>/<i>L</i> = 0.01/6.00 = 0.00167.',
          'Δ<i>ρ</i>/<i>ρ</i> = 0.00185 + 0.01667 + 0.00167 = 0.02019, which is 2.0 %.',
          'Δ<i>ρ</i> = 0.02019 × 7.958 = 0.16 g cm<sup>−3</sup>.',
          'The diameter supplies 0.01667 of the 0.02019, more than four-fifths of the error. To improve the result, measure the diameter more carefully, for example with a screw gauge.',
          '<b>Check.</b> Volume = 27.143/4 = 6.786 cm<sup>3</sup>, and 54.0/6.786 = 7.958 g cm<sup>−3</sup>, the same density by the direct route.',
        ],
        ans: '<i>ρ</i> = 7.96 ± 0.16 g cm<sup>−3</sup> (2.0 %), or 7.96 × 10<sup>3</sup> kg m<sup>−3</sup>',
      },

      { t: 'part', title: 'Graphs' },
      {
        t: 'proc',
        title: 'Drawing and reading a graph',
        steps: [
          '<b>Choose the scales.</b> Pick scales so the points spread over most of the sheet, and so that one small square is a simple number of units (1, 2 or 5). The origin need not be shown.',
          '<b>Label the axes</b> with the quantity and its unit, for example “<i>V</i> (V)” and “<i>I</i> (mA)”.',
          '<b>Mark the points</b> clearly, each with a small cross or dot.',
          '<b>Draw the best-fit line</b>, not a join-the-dots line. It is one smooth line (straight if the law says so) with about as many points on one side as the other. It need not pass through any point.',
          '<b>Take the slope</b> from two points on the line that are far apart, and not from the plotted data points. Draw the triangle and write the sides with their units, slope = Δ<i>y</i>/Δ<i>x</i> = (<i>y</i><sub>2</sub> − <i>y</i><sub>1</sub>)/(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>).',
          '<b>Read the intercept</b> where the line meets an axis, and say what it means.',
        ],
      },
      {
        t: 'p',
        html: 'A straight line through the origin means direct proportionality. A straight line that does not pass through the origin has the form <i>y</i> = <i>mx</i> + <i>c</i>: its slope is <i>m</i> and its intercept is <i>c</i>. The experiments use this: choose what to plot so that the unknown becomes a slope or an intercept.',
      },
      {
        t: 'table',
        title: 'Choosing what to plot',
        head: ['Relation', 'Plot y against x', 'Slope', 'Intercept'],
        rows: [
          ['<i>V</i> = <i>IR</i> (Ohm’s law)', '<i>V</i> against <i>I</i>', '<i>R</i>', '0'],
          ['<i>T</i><sup>2</sup> = (4π<sup>2</sup>/<i>g</i>) <i>L</i> (simple pendulum)', '<i>T</i><sup>2</sup> against <i>L</i>', '4π<sup>2</sup>/<i>g</i>', '0'],
          ['1/<i>v</i> = 1/<i>u</i> + 1/<i>f</i> (lens, Cartesian signs)', '1/<i>v</i> against 1/<i>u</i>', '1', '1/<i>f</i>'],
        ],
        note: null,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (slope of a best-fit line)',
        q: 'A resistor is tested with a voltmeter and a milliammeter. The readings are plotted as <i>V</i> against <i>I</i> and the best-fit line passes through the origin. Find the resistance.',
        steps: [
          'Readings: <i>I</i> = 10, 20, 30, 40, 50 mA with <i>V</i> = 1.02, 2.01, 3.03, 3.98, 5.02 V.',
          'Two points far apart on the best-fit line are (10 mA, 1.00 V) and (50 mA, 5.00 V). They are read from the line, not taken from the data.',
          'Slope = Δ<i>V</i>/Δ<i>I</i> = (5.00 − 1.00) V/(50 − 10) mA = 4.00 V/40 mA = 0.100 V mA<sup>−1</sup> = 100 Ω.',
          'A slope has the units of the quantity on <i>y</i> over the quantity on <i>x</i>: V/A is ohm.',
          '<b>Check.</b> The least-squares slope through the origin is Σ<i>VI</i>/Σ<i>I</i><sup>2</sup> = 551.5/5500 = 0.1003 V mA<sup>−1</sup> = 100.3 Ω. It agrees with the triangle to 0.3 %.',
        ],
        ans: '<i>R</i> = 100 Ω',
      },
      { t: 'fig', id: 'p12-15-00-d2' },
      {
        t: 'p',
        html: '<b>What a systematic error does to a graph.</b> An instrument with a zero error shifts every reading by the same amount. The line keeps its slope but no longer passes through the origin: a voltmeter that reads 0.05 V too high gives <i>V</i> = <i>IR</i> + 0.05 V. The slope is still <i>R</i>, which is why a graph is a good way to remove a constant zero error.',
      },
      { t: 'fig', id: 'p12-15-00-d3' },

      { t: 'part', title: 'Exam traps and habits' },
      {
        t: 'mistakes',
        items: [
          '<b>The sign of the zero correction.</b> The correction is observed − <i>e</i>. A negative zero error is added, and many students subtract it by habit.',
          '<b>Differences.</b> The error in <i>a</i> − <i>b</i> is Δ<i>a</i> + Δ<i>b</i>. The result is small, so its relative error is large.',
          '<b>The power weights.</b> A quantity raised to the power <i>p</i> counts <i>p</i> times in the relative error. A square root counts one half.',
          '<b>A quotient subtracts nothing.</b> The relative errors of numerator and denominator both add.',
          '<b>Join-the-dots graphs, and slopes from data points.</b> Draw the best-fit line and take the slope from two far-apart points on it, with units.',
          '<b>One oscillation timed by hand.</b> Reaction time (about 0.2 s) is a fixed error in the total time. Time 20 or more oscillations so that dividing by the number of oscillations shrinks it.',
          '<b>Small least count is not accuracy.</b> A very fine scale with an uncorrected zero error is precise but wrong.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (null and resonance positions):</b> Approach a null or resonance position from both sides and take the mean. Quote a result to no more digits than the least count and the scatter support.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A screw gauge has pitch 0.5 mm and 50 circular divisions. With the studs touching, the 47th division is on the reference line. A wire gives main-scale reading 3.5 mm and circular reading 28. Find the corrected diameter.',
            a: 'LC = 0.5/50 = 0.01 mm. The zero mark has passed the line by 50 − 47 = 3 divisions, so <i>e</i> = −0.03 mm. Observed = 3.5 + 28 × 0.01 = 3.78 mm. Corrected = 3.78 − (−0.03) = <b>3.81 mm</b>.',
          },
          {
            q: '[CBSE] A stop-watch is started and stopped by hand, with a total timing uncertainty of 0.2 s. Twenty oscillations take 36.0 s. Find the period and the error in it.',
            a: '<i>T</i> = 36.0/20 = 1.80 s. Δ<i>T</i> = 0.2/20 = 0.01 s, which is 0.01/1.80 = 0.56 %. <i>T</i> = <b>1.80 ± 0.01 s</b>.',
          },
          {
            q: '[NEET] A resistance is found from <i>R</i> = <i>V</i>/<i>I</i> with <i>V</i> = 6.0 ± 0.1 V and <i>I</i> = 1.50 ± 0.02 A. Find <i>R</i> with its error.',
            a: '<i>R</i> = 6.0/1.50 = 4.00 Ω. Δ<i>R</i>/<i>R</i> = 0.1/6.0 + 0.02/1.50 = 0.0167 + 0.0133 = 0.030. Δ<i>R</i> = 0.030 × 4.00 = 0.12 Ω. <i>R</i> = <b>4.00 ± 0.12 Ω</b> (3 %).',
          },
          {
            q: '[JEE Main] A quantity is <i>Q</i> = <i>a</i><sup>2</sup><i>b</i><sup>3</sup>/<i>c</i>. The percentage errors in <i>a</i>, <i>b</i> and <i>c</i> are 1 %, 2 % and 3 %. Find the percentage error in <i>Q</i>.',
            a: '2(1) + 3(2) + 1(3) = 2 + 6 + 3 = <b>11 %</b>.',
          },
          {
            q: '[JEE Main] A straight line of <i>T</i><sup>2</sup> against <i>L</i> for a simple pendulum passes through (0.25 m, 1.00 s<sup>2</sup>) and (1.00 m, 4.01 s<sup>2</sup>). Find <i>g</i>.',
            a: 'Slope = (4.01 − 1.00)/(1.00 − 0.25) = 3.01/0.75 = 4.013 s<sup>2</sup> m<sup>−1</sup>. Since <i>T</i><sup>2</sup> = (4π<sup>2</sup>/<i>g</i>) <i>L</i>, <i>g</i> = 4π<sup>2</sup>/slope = 39.48/4.013 = <b>9.84 m s<sup>−2</sup></b>.',
          },
          {
            q: '[NEET] Two lengths are measured as 25.0 ± 0.1 cm and 21.4 ± 0.1 cm. Find their difference and the percentage error in it, and compare with the percentage error of each length.',
            a: 'Difference = 3.6 cm. Absolute errors add: Δ = 0.1 + 0.1 = 0.2 cm. Percentage error = 0.2/3.6 × 100 = <b>5.6 %</b>. Each length alone has an error of only 0.1/25.0 = 0.4 % and 0.1/21.4 = 0.47 %. A difference of nearly equal readings magnifies the error.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A screw gauge has 100 circular divisions and LC 0.01 mm. With the studs touching, the 94th division is on the reference line. A rod reads 2.45 mm. The correct diameter is:',
        opts: [
          { label: '2.39 mm', nudge: '<b>(A)</b> subtracts 0.06 mm. That treats the error as positive, but the zero mark has passed the line, so the error is negative and must be added back.' },
          { label: '2.45 mm', nudge: '<b>(B)</b> applies no correction at all.' },
          { label: '2.51 mm', nudge: null },
          { label: '3.39 mm', nudge: '<b>(D)</b> adds 94 divisions (0.94 mm). The error is the 6 divisions short of 100, not 94.' },
        ],
        correct: 2,
        solution: 'The 94th division on the line means the zero mark has passed it by 100 − 94 = 6 divisions: <i>e</i> = −0.06 mm. Corrected reading = 2.45 − (−0.06) = 2.51 mm.',
      },
      {
        t: 'mcq',
        q: 'A quantity is <i>Q</i> = <i>a</i><sup>3</sup>/√<i>b</i>. <i>a</i> is measured with a 1 % error and <i>b</i> with a 2 % error. The maximum percentage error in <i>Q</i> is:',
        opts: [
          { label: '2 %', nudge: '<b>(A)</b> subtracts the contribution of <i>b</i> because it is in the denominator: 3 − 1. Errors always add.' },
          { label: '3 %', nudge: '<b>(B)</b> adds 1 % and 2 % and ignores the powers 3 and ½.' },
          { label: '4 %', nudge: null },
          { label: '5 %', nudge: '<b>(D)</b> uses the power 3 for <i>a</i> but forgets that the square root halves the error of <i>b</i>: 3 + 2.' },
        ],
        correct: 2,
        solution: 'Δ<i>Q</i>/<i>Q</i> = 3 (Δ<i>a</i>/<i>a</i>) + ½ (Δ<i>b</i>/<i>b</i>) = 3(1 %) + ½(2 %) = 3 % + 1 % = 4 %.',
      },
      {
        t: 'mcq',
        q: 'The slope of a straight-line graph is best found by:',
        opts: [
          { label: 'joining the first and the last data points', nudge: '<b>(A)</b> relies on two points that may lie off the best-fit line.' },
          { label: 'choosing two widely separated points on the best-fit line, even where no data point lies', nudge: null },
          { label: 'joining the two data points that are closest together', nudge: '<b>(C)</b> a short base makes the slope very sensitive to the reading error of each point.' },
          { label: 'dividing the last <i>y</i> value by the last <i>x</i> value in every case', nudge: '<b>(D)</b> gives the slope only for a line through the origin, and only if the last point lies on the line.' },
        ],
        correct: 1,
        solution: 'Two points far apart on the best-fit line give the largest triangle, so reading errors are a small fraction of the sides, and the line itself averages the scatter of all the data.',
      },
      {
        t: 'mcq',
        q: 'Timing 10 oscillations with a total timing error of 0.2 s, the error in the period is Δ<i>T</i>. With the same timing error over 40 oscillations, the error in the period is:',
        opts: [
          { label: '4 Δ<i>T</i>', nudge: '<b>(A)</b> turns the factor upside down. More oscillations reduce the error in <i>T</i>.' },
          { label: '2 Δ<i>T</i>', nudge: '<b>(B)</b> also increases the error. Dividing a fixed timing error by a larger number gives a smaller period error.' },
          { label: 'Δ<i>T</i>/2', nudge: '<b>(C)</b> treats the reaction time as random, averaging as 1/√<i>N</i>. The start and stop delay is a fixed error in the total time, so the division is by <i>N</i> itself.' },
          { label: 'Δ<i>T</i>/4', nudge: null },
        ],
        correct: 3,
        solution: '<i>T</i> = <i>t</i>/<i>N</i>, so Δ<i>T</i> = Δ<i>t</i>/<i>N</i>. For <i>N</i> = 10 this is 0.2/10 = 0.02 s. For <i>N</i> = 40 it is 0.2/40 = 0.005 s, a quarter as large.',
      },
      {
        t: 'mcq',
        q: 'A milliammeter has a scale 0 to 250 mA divided into 50 equal divisions. Its least count is:',
        opts: [
          { label: '0.5 mA', nudge: '<b>(A)</b> is the range divided by 500. The scale has 50 divisions.' },
          { label: '1 mA', nudge: '<b>(B)</b> would need 250 divisions.' },
          { label: '5 mA', nudge: null },
          { label: '50 mA', nudge: '<b>(D)</b> is the number of divisions, not the value of one.' },
        ],
        correct: 2,
        solution: 'LC = full-scale value/(number of divisions) = 250 mA/50 = 5 mA.',
      },
      {
        t: 'mcq',
        q: 'A voltmeter has a positive zero error of 0.05 V (it reads 0.05 V when the true voltage is zero). <i>V</i> is plotted against <i>I</i> for a resistor <i>R</i>. The line:',
        opts: [
          { label: 'has a slope larger than <i>R</i> and passes through the origin', nudge: '<b>(A)</b> a constant zero error adds the same amount at every current, which does not change the slope.' },
          { label: 'has slope <i>R</i> and a positive intercept of 0.05 V on the <i>V</i> axis', nudge: null },
          { label: 'has slope <i>R</i> and a negative intercept of 0.05 V on the <i>V</i> axis', nudge: '<b>(C)</b> has the sign reversed. A voltmeter reading too high shifts the line up.' },
          { label: 'has a slope smaller than <i>R</i> and passes through the origin', nudge: '<b>(D)</b> the zero error is not proportional to the current, so it cannot change the slope.' },
        ],
        correct: 1,
        solution: 'The reading is <i>V</i><sub>read</sub> = <i>IR</i> + 0.05 V. This is a straight line with slope <i>R</i> and intercept +0.05 V.',
      },
    ],
  },

  // ───────────────────────── Topic 04 · Semiconductors and components ─────────────────────────
  {
    n: '04',
    title: 'Semiconductors and components',
    kalam: 'One diode curve, one Zener curve, and four components told apart with a multimeter.',
    blocks: [
      { t: 'part', title: 'p-n junction diode: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To draw the forward and the reverse <i>I</i>–<i>V</i> characteristics of a p-n junction diode, to find its knee voltage, and to find its dynamic resistance in forward bias.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> At the junction there is a potential barrier, about 0.7 V for silicon and about 0.3 V for germanium. In <b>forward bias</b> (p side to the positive terminal) the applied voltage works against the barrier. Almost no current flows until the voltage comes near the barrier, and then the current rises steeply. In <b>reverse bias</b> the barrier is raised. Only a small leakage current of minority carriers flows, nearly independent of the voltage: nanoamperes for silicon, microamperes for germanium.<br><br>For a junction diode the current is close to the ideal-diode form <i>I</i> = <i>I</i><sub>s</sub> [exp(<i>V</i>/<i>ηV</i><sub>T</sub>) − 1], where <i>I</i><sub>s</sub> is the reverse saturation current, <i>V</i><sub>T</sub> = <i>kT</i>/<i>e</i> ≈ 26 mV at 300 K, and <i>η</i> is 1 for an ideal junction and up to about 2 for a real silicon diode (our data give about 1.8). It is used here only to explain the shape of the curve and the next result.',
      },
      {
        t: 'deriv',
        kicker: 'Dynamic resistance of a forward-biased diode',
        steps: [
          { eq: '<i>I</i> = <i>I</i><sub>s</sub> [exp(<i>V</i>/<i>ηV</i><sub>T</sub>) − 1]', why: 'The diode relation, close to the ideal-diode form (stated, not derived here).' },
          { eq: 'd<i>I</i>/d<i>V</i> = (<i>I</i> + <i>I</i><sub>s</sub>)/(<i>ηV</i><sub>T</sub>)', why: 'Differentiate. The factor exp(<i>V</i>/<i>ηV</i><sub>T</sub>) is (<i>I</i> + <i>I</i><sub>s</sub>)/<i>I</i><sub>s</sub>.' },
          { eq: '<i>r</i> = d<i>V</i>/d<i>I</i> = <i>ηV</i><sub>T</sub>/<i>I</i>', why: 'Well into forward bias <i>I</i> is much larger than <i>I</i><sub>s</sub>. The dynamic resistance is the reciprocal of the slope, and it falls as 1/<i>I</i>.' },
          { eq: 'Δ<i>V</i> = <i>ηV</i><sub>T</sub> ln 10 ≈ 60<i>η</i> mV for <i>I</i> ten times larger', why: 'Divide the currents at two voltages. With <i>η</i> = 1 the voltage rises about 60 mV for each tenfold rise of current, so the curve climbs very steeply on a linear current scale.' },
        ],
      },
      {
        t: 'defgrid',
        title: 'Two resistances of a diode',
        tag: null,
        rows: [
          { k: 'Static (d.c.) resistance', v: '<i>R</i> = <i>V</i>/<i>I</i> at one point of the curve.' },
          { k: 'Dynamic (a.c.) resistance', v: '<i>r</i> = Δ<i>V</i>/Δ<i>I</i> over a small step: the reciprocal of the slope of the <i>I</i>–<i>V</i> curve there.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Diode resistances',
        main: 'Static: <i>R</i> = <i>V</i>/<i>I</i><br>Dynamic: <i>r</i> = Δ<i>V</i>/Δ<i>I</i><br>Forward: <i>r</i> = <i>ηV</i><sub>T</sub>/<i>I</i>',
        legend: [
          '<i>V</i><sub>T</sub> = thermal voltage, <i>kT</i>/<i>e</i> (about 26 mV at 300 K)',
          '<i>η</i> = ideality constant: 1 for an ideal junction, up to about 2 for a real silicon diode',
          '<i>I</i> = forward current of the diode',
        ],
        note: 'The dynamic resistance falls as the current rises.',
      },

      { t: 'part', title: 'p-n junction diode: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A silicon junction diode, a variable d.c. source (about 0 to 5 V), a rheostat used as a potential divider, a protective resistor of about 100 Ω, a milliammeter, a microammeter, a voltmeter with a 0 to 1 V range for forward bias and a 0 to 10 V range for reverse bias, a key and connecting wires.',
      },
      {
        t: 'proc',
        title: 'Forward bias',
        steps: [
          'Connect the p side (anode) to the positive terminal through the protective resistor and the milliammeter. Connect the voltmeter directly across the diode.',
          'Close the key with the slider at zero and raise the voltage in steps of 0.05 to 0.1 V, using smaller steps where the current starts to rise.',
          'At each step record the voltage <i>V</i> across the diode and the current <i>I</i>.',
          'Stop when the current reaches the diode’s rated value, or the end of the milliammeter scale.',
        ],
      },
      {
        t: 'proc',
        title: 'Reverse bias',
        steps: [
          'Reverse the diode (cathode to the positive side) and replace the milliammeter by the microammeter.',
          'Connect the voltmeter across the diode and the microammeter together, not across the diode alone.',
          'Raise the voltage in steps of 1 V up to a value safely below the diode’s rated reverse voltage, and record <i>V</i> and <i>I</i> at each step.',
        ],
      },
      { t: 'fig', id: 'p12-15-04-d1' },
      {
        t: 'p',
        html: '<b>Why the voltmeter goes where it does.</b> In forward bias the diode’s resistance is only a few ohms to a few hundred ohms, so the voltmeter (about 1 MΩ) takes a negligible current and may sit across the diode alone. In reverse bias the diode’s resistance is hundreds of megaohms or more, far larger than the voltmeter’s own (tens of kilohms to a few megohms). A voltmeter across the diode alone would pass 5 V/1 MΩ = 5 μA through the microammeter, far more than the leakage being measured. Placed across the diode and the microammeter together, its current bypasses the microammeter. The microammeter’s own small voltage drop is then the only error.',
      },

      { t: 'part', title: 'p-n junction diode: observations and calculation' },
      {
        t: 'table',
        title: 'Forward bias, silicon diode (LC of voltmeter 0.01 V, LC of milliammeter 0.1 mA)',
        head: ['Voltage V (V)', 'Current I (mA)'],
        rows: [
          ['0.30', '0.0'],
          ['0.40', '0.0'],
          ['0.50', '0.1'],
          ['0.55', '0.4'],
          ['0.60', '1.1'],
          ['0.65', '3.3'],
          ['0.68', '6.4'],
          ['0.70', '10.0'],
          ['0.72', '15.6'],
          ['0.75', '30.4'],
        ],
        note: 'Reverse bias, 1 V to 10 V: the microammeter shows no deflection (below its least count). The leakage of a silicon diode is of the order of nanoamperes.',
      },
      { t: 'fig', id: 'p12-15-04-d2' },
      {
        t: 'ex',
        tag: 'JEE Main Level (resistances from the curve)',
        q: 'Use the forward readings above to find the dynamic resistance between 0.60 V and 0.65 V, the dynamic resistance between 0.70 V and 0.72 V, and the static resistance at 0.70 V. Where is the knee?',
        steps: [
          '0.60 V to 0.65 V: Δ<i>V</i> = 0.05 V and Δ<i>I</i> = 3.3 − 1.1 = 2.2 mA. <i>r</i> = 0.05/(2.2 × 10<sup>−3</sup>) = 22.7 Ω.',
          '0.70 V to 0.72 V: Δ<i>V</i> = 0.02 V and Δ<i>I</i> = 15.6 − 10.0 = 5.6 mA. <i>r</i> = 0.02/(5.6 × 10<sup>−3</sup>) = 3.57 Ω.',
          'Static resistance at 0.70 V: <i>R</i> = 0.70 V/10.0 mA = 70 Ω.',
          'Knee: the current is 0.1 mA at 0.50 V, 1.1 mA at 0.60 V and 10 mA at 0.70 V. It climbs steeply between about 0.6 V and 0.75 V, which is the silicon knee.',
          '<b>Check.</b> The dynamic resistance should fall as 1/<i>I</i>. At the mean currents 2.2 mA and 12.8 mA of the two steps, <i>r</i> × <i>I</i> = 22.7 Ω × 2.2 mA = 0.050 V and 3.57 Ω × 12.8 mA = 0.046 V. Both products are near 0.05 V, as <i>r</i> = <i>ηV</i><sub>T</sub>/<i>I</i> requires.',
        ],
        ans: '<i>r</i> ≈ 23 Ω (0.60 to 0.65 V), <i>r</i> ≈ 3.6 Ω (0.70 to 0.72 V), <i>R</i> = 70 Ω at 0.70 V; knee about 0.6 to 0.7 V',
      },
      {
        t: 'ex',
        tag: 'CBSE / NEET Level (silicon against germanium)',
        q: 'A 5.0 V source, a 430 Ω resistor and a forward-biased diode are in series. Find the current for a silicon diode (forward drop 0.7 V), and for a germanium diode (0.3 V).',
        steps: [
          'The diode is a fixed drop in series with the resistor, so <i>I</i> = (5.0 − <i>V</i><sub>d</sub>)/430.',
          'Silicon: <i>I</i> = (5.0 − 0.7)/430 = 4.3/430 = 0.0100 A = 10.0 mA.',
          'Germanium: <i>I</i> = (5.0 − 0.3)/430 = 4.7/430 = 0.01093 A = 10.9 mA.',
          '<b>Check.</b> 430 × 0.0100 = 4.3 V and 430 × 0.01093 = 4.7 V, so the resistor takes the rest of the 5.0 V in each case.',
        ],
        ans: 'Silicon 10.0 mA, germanium 10.9 mA',
      },

      { t: 'part', title: 'p-n junction diode: result, precautions and exam traps' },
      {
        t: 'p',
        html: '<b>Result.</b> The forward curve is not a straight line. The current is negligible below about 0.5 V, rises steeply between about 0.6 V and 0.75 V (the knee of silicon), and the dynamic resistance falls from tens of ohms to a few ohms. The reverse current is very small and nearly constant. State the knee voltage, and the dynamic resistance with the current at which it was found.<br><br><b>Precautions.</b> Do not let the forward current exceed the rating of the diode, and keep the protective resistor in the circuit. Raise the voltage slowly and take more points near the knee. Put the voltmeter across the diode and microammeter together in reverse bias. Use separate scales (mA and V in one quadrant, μA and V in the other).<br><br><b>Errors.</b> Near the knee a very small error in <i>V</i> means a large error in <i>I</i>, so the slope there is the least certain number. The junction warms with current, which shifts the curve. Take the readings quickly and let it cool.',
      },
      {
        t: 'mistakes',
        items: [
          '<b>Calling the forward curve a straight line.</b> It is an exponential rise, with no sudden step at 0.7 V. The knee is only where the current becomes appreciable.',
          '<b>Static against dynamic resistance.</b> Static is <i>V</i>/<i>I</i> at a point. Dynamic is Δ<i>V</i>/Δ<i>I</i>, the reciprocal of the slope. At 0.70 V, 10 mA they are 70 Ω and about 4 Ω.',
          '<b>The voltmeter in the reverse circuit.</b> Across the diode alone it passes microamperes of its own through the microammeter.',
          '<b>One scale for both halves.</b> The forward current is in milliamperes and the reverse current in microamperes or less, so the two halves of the graph use different scales.',
          '<b>Silicon against germanium.</b> Silicon has about 0.7 V and a leakage in nanoamperes. Germanium has about 0.3 V and a leakage in microamperes.',
        ],
      },

      { t: 'part', title: 'Zener diode: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To draw the reverse characteristic of a Zener diode, to find its breakdown voltage <i>V</i><sub>z</sub> and its dynamic resistance in breakdown, and to see how it regulates a voltage.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> A Zener diode is heavily doped, so its depletion layer is extremely thin. A modest reverse voltage then produces a very strong field in the layer. In reverse bias the current stays tiny until the voltage reaches <i>V</i><sub>z</sub>, and then it rises abruptly. In breakdown the voltage across the diode hardly changes however much the current changes: Δ<i>V</i> = <i>r</i><sub>z</sub> Δ<i>I</i>, where <i>r</i><sub>z</sub> is only a few ohms to tens of ohms. This is the property used to regulate a voltage. The breakdown is not damage: it is reversible while the power <i>V</i><sub>z</sub><i>I</i> stays within the diode’s rating. In forward bias a Zener diode behaves like an ordinary diode. Breakdown is by field emission (the Zener effect) in diodes of low <i>V</i><sub>z</sub> and by avalanche multiplication at higher <i>V</i><sub>z</sub>, a 5 V diode being near the crossover.',
      },
      {
        t: 'p',
        html: '<b>The regulator.</b> A Zener diode is connected in reverse across the load, with a series resistor <i>R</i><sub>s</sub> from the supply. The next derivation gives the current the diode must carry.',
      },
      {
        t: 'deriv',
        kicker: 'Zener regulator',
        steps: [
          { eq: '<i>V</i><sub>out</sub> = <i>V</i><sub>z</sub>', why: 'The load is in parallel with the diode, and in breakdown the diode holds its voltage almost constant.' },
          { eq: '<i>I</i><sub>s</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>z</sub>)/<i>R</i><sub>s</sub>', why: 'Ohm’s law for the series resistor, which carries the whole supply current.' },
          { eq: '<i>I</i><sub>L</sub> = <i>V</i><sub>z</sub>/<i>R</i><sub>L</sub>', why: 'Ohm’s law for the load.' },
          { eq: '<i>I</i><sub>z</sub> = <i>I</i><sub>s</sub> − <i>I</i><sub>L</sub>', why: 'Current at the junction. The diode takes whatever the load does not. It must stay above the knee for regulation, and below <i>I</i><sub>z,max</sub> = <i>P</i><sub>max</sub>/<i>V</i><sub>z</sub> for safety. With the load removed the diode carries all of <i>I</i><sub>s</sub>.' },
        ],
      },
      {
        t: 'formula',
        kicker: 'Zener diode and regulator',
        main: '<i>r</i><sub>z</sub> = Δ<i>V</i>/Δ<i>I</i> (in breakdown)<br><i>I</i><sub>z,max</sub> = <i>P</i><sub>max</sub>/<i>V</i><sub>z</sub><br><i>I</i><sub>s</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>z</sub>)/<i>R</i><sub>s</sub><br><i>I</i><sub>z</sub> = <i>I</i><sub>s</sub> − <i>I</i><sub>L</sub>',
        legend: [
          '<i>V</i><sub>z</sub> = breakdown voltage',
          '<i>P</i><sub>max</sub> = power rating of the diode',
          '<i>R</i><sub>s</sub> = series resistor',
          '<i>I</i><sub>L</sub> = load current, <i>V</i><sub>z</sub>/<i>R</i><sub>L</sub>',
          '<i>I</i><sub>z</sub> = current through the Zener diode',
          '<i>I</i><sub>s</sub> = supply current through the series resistor',
          '<i>V</i><sub>in</sub> = supply voltage',
        ],
        note: 'Regulation needs <i>V</i><sub>in</sub> <i>R</i><sub>L</sub>/(<i>R</i><sub>s</sub> + <i>R</i><sub>L</sub>) above <i>V</i><sub>z</sub>, so that the diode current stays in the breakdown region.',
      },
      { t: 'fig', id: 'p12-15-04-d3' },

      { t: 'part', title: 'Zener diode: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A Zener diode (here a 0.5 W diode of about 5 V), a variable d.c. supply of 0 to 12 V, a series protective resistor of 100 Ω, a milliammeter, a voltmeter of 0 to 10 V, a key and wires.',
      },
      {
        t: 'proc',
        title: 'Reverse characteristic of a Zener diode',
        steps: [
          'Connect the diode with its cathode to the positive side, in series with the 100 Ω resistor and the milliammeter, with the voltmeter directly across the diode.',
          'Start with the supply at zero and raise it slowly. Record <i>V</i> across the diode and <i>I</i>.',
          'Take readings every 0.5 V at first. Near the knee the current rises quickly with very little change in voltage, so take readings every 0.05 V there. Stop before the current reaches the rating.',
          'Plot <i>I</i> against <i>V</i> for the reverse region, with both taken as positive numbers and the axes labelled.',
        ],
      },
      { t: 'fig', id: 'p12-15-04-d4' },

      { t: 'part', title: 'Zener diode: observations and calculation' },
      {
        t: 'table',
        title: 'Reverse bias, Zener diode, 100 Ω in series (LC of milliammeter 0.1 mA, of voltmeter 0.01 V)',
        head: ['Voltage V across the diode (V)', 'Current I (mA)'],
        rows: [
          ['3.00', '0.0'],
          ['4.00', '0.0'],
          ['4.50', '0.0'],
          ['4.80', '0.2'],
          ['4.90', '0.7'],
          ['5.00', '2.5'],
          ['5.05', '6.0'],
          ['5.10', '12.0'],
          ['5.15', '20.0'],
          ['5.20', '30.0'],
        ],
        note: null,
      },
      { t: 'fig', id: 'p12-15-04-d5' },
      {
        t: 'ex',
        tag: 'JEE Main Level (breakdown voltage and dynamic resistance)',
        q: 'From the table find the breakdown voltage, the dynamic resistance in breakdown between 5.05 V and 5.20 V, the power at 5.20 V, and the supply voltage needed to run the diode at 30.0 mA.',
        steps: [
          'The current is zero (to 0.1 mA) up to 4.5 V and then climbs steeply. The curve turns sharply upward at about 5.0 V, where the current reaches a few milliamperes, so <i>V</i><sub>z</sub> ≈ 5.0 V.',
          'From 5.00 V to 5.20 V the voltage rises 0.20 V, while the current rises from 2.5 mA to 30.0 mA, twelve times. The voltage is almost constant in breakdown.',
          'Between 5.05 V and 5.20 V: Δ<i>V</i> = 0.15 V and Δ<i>I</i> = 30.0 − 6.0 = 24.0 mA. <i>r</i><sub>z</sub> = 0.15/(24.0 × 10<sup>−3</sup>) = 6.25 Ω.',
          'Power in the diode at 5.20 V: <i>P</i> = <i>VI</i> = 5.20 × 0.0300 = 0.156 W, well below 0.5 W.',
          'Supply needed: <i>V</i> = 5.20 + 100 × 0.0300 = 5.20 + 3.00 = 8.2 V.',
          'With the full 12 V and the same resistor the current is about (12 − 5.2)/100 = 68 mA, and the power 5.2 × 0.068 = 0.35 W, still below the 0.5 W rating.',
          '<b>Check.</b> Between 5.10 V and 5.20 V: 0.10 V/18.0 mA = 5.6 Ω, the same order as 6.25 Ω. The curve is steeper at the higher current.',
        ],
        ans: '<i>V</i><sub>z</sub> ≈ 5.0 V, <i>r</i><sub>z</sub> ≈ 6 Ω, <i>P</i> = 0.156 W, supply 8.2 V',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Zener regulator)',
        q: 'An unregulated 12 V supply feeds a 5.1 V Zener diode through <i>R</i><sub>s</sub> = 150 Ω. A load <i>R</i><sub>L</sub> = 510 Ω is connected across the diode. Find the load voltage and the current in each branch, and the diode current if the load is removed. The diode is rated 0.5 W.',
        steps: [
          'The diode is in breakdown, so the load voltage is <i>V</i><sub>z</sub> = 5.1 V.',
          'Series resistor current: <i>I</i><sub>s</sub> = (12 − 5.1)/150 = 6.9/150 = 0.046 A = 46 mA.',
          'Load current: <i>I</i><sub>L</sub> = 5.1/510 = 0.010 A = 10 mA.',
          'Diode current: <i>I</i><sub>z</sub> = 46 − 10 = 36 mA, so its power is 5.1 × 0.036 = 0.18 W.',
          'With the load removed the diode carries all 46 mA: 5.1 × 0.046 = 0.23 W, which is below the 0.5 W rating.',
          '<b>Check.</b> 36 mA is below <i>I</i><sub>z,max</sub> = 0.5/5.1 = 98 mA. The branches sum to 36 + 10 = 46 mA. The voltage across <i>R</i><sub>s</sub> is 0.046 × 150 = 6.9 V, and 6.9 + 5.1 = 12 V.',
        ],
        ans: '<i>V</i><sub>out</sub> = 5.1 V, <i>I</i><sub>s</sub> = 46 mA, <i>I</i><sub>L</sub> = 10 mA, <i>I</i><sub>z</sub> = 36 mA (46 mA with no load)',
      },

      { t: 'part', title: 'Zener diode: result, precautions and exam traps' },
      {
        t: 'p',
        html: '<b>Result.</b> The reverse current is negligible until about 5.0 V. Then the current rises sharply while the voltage across the diode barely changes: <i>V</i><sub>z</sub> ≈ 5.0 V, and the dynamic resistance in breakdown is about 6 Ω. State <i>V</i><sub>z</sub> and the current at which it was read.<br><br><b>Precautions.</b> Always keep a series resistor, and never let <i>V</i><sub>z</sub><i>I</i> exceed the power rating. Raise the supply slowly and take closely spaced readings near the knee. Connect the cathode to the positive side.<br><br><b>Errors.</b> The knee is rounded, so reading <i>V</i><sub>z</sub> to better than a few hundredths of a volt is not possible. The milliammeter shows nothing below its least count, so the small pre-breakdown current is not measured. The diode warms as it dissipates power, and its characteristic shifts with temperature.',
      },
      {
        t: 'mistakes',
        items: [
          '<b>The wrong connection.</b> A Zener diode works in reverse bias, cathode to the positive terminal. In forward bias it is an ordinary diode and the voltage across it is about 0.7 V.',
          '<b>Breakdown is not damage.</b> It is reversible while the power stays within the rating. The series resistor, not the diode, limits the current.',
          '<b>Why it regulates.</b> A large change in current produces only a small change in voltage (<i>r</i><sub>z</sub> is small).',
          '<b>Below <i>V</i><sub>z</sub> there is no regulation.</b> If the divider voltage <i>V</i><sub>in</sub> <i>R</i><sub>L</sub>/(<i>R</i><sub>s</sub> + <i>R</i><sub>L</sub>) is below <i>V</i><sub>z</sub>, the diode is off and the load voltage is that divider voltage.',
          '<b>Reading <i>V</i><sub>z</sub> from the wrong place.</b> It is read at the sharp upward turn of the reverse curve, not at the top of the plotted current range.',
        ],
      },

      { t: 'part', title: 'Identifying a diode, LED, resistor and capacitor: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To tell a diode, an LED, a resistor and a capacitor apart from a mixed collection, using a multimeter and the markings on them.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> Each component responds differently to a steady voltage. A <b>resistor</b> obeys Ohm’s law, with the same resistance whichever way round it is connected. A <b>diode</b> conducts one way and blocks the other, so its two readings differ greatly. An <b>LED</b> is a diode that gives light, with a higher forward voltage. A <b>capacitor</b> passes a current only while it charges and then blocks d.c. The charging is exponential, as the next derivation shows.',
      },
      {
        t: 'deriv',
        kicker: 'Charging a capacitor through a resistance',
        steps: [
          { eq: '<i>E</i> = <i>IR</i> + <i>q</i>/<i>C</i>', why: 'The cell’s emf is shared by the resistor (the meter’s internal resistance) and the capacitor.' },
          { eq: '<i>q</i> = <i>CE</i> (1 − e<sup>−<i>t</i>/<i>RC</i></sup>)', why: 'Solution of this equation with <i>I</i> = d<i>q</i>/d<i>t</i> and <i>q</i> = 0 at <i>t</i> = 0.' },
          { eq: '<i>I</i> = (<i>E</i>/<i>R</i>) e<sup>−<i>t</i>/<i>RC</i></sup>', why: 'Differentiate. The current starts at <i>E</i>/<i>R</i> and decays with time constant <i>τ</i> = <i>RC</i>.' },
        ],
      },
      {
        t: 'p',
        html: 'On an analogue ohmmeter the pointer follows this current. It swings at once towards a low resistance and then drifts back to off-scale in a few time constants. If <i>τ</i> is much shorter than a blink, no movement is visible.',
      },
      {
        t: 'formula',
        kicker: 'Identifying the components',
        main: 'Resistor code: <i>R</i> = (10<i>a</i> + <i>b</i>) × 10<sup><i>m</i></sup> Ω<br>Time constant: <i>τ</i> = <i>RC</i><br>LED resistor: <i>R</i> = (<i>V</i><sub>s</sub> − <i>V</i><sub>f</sub>)/<i>I</i>',
        legend: [
          '<i>a</i>, <i>b</i> = digits of the first and second colour bands',
          '<i>m</i> = multiplier power, from the third band',
          '<i>V</i><sub>s</sub> = supply voltage',
          '<i>V</i><sub>f</sub> = LED forward voltage',
          '<i>I</i> = LED current',
        ],
        note: 'Gold in the fourth band is ± 5 %, silver ± 10 %, and no band ± 20 %.',
      },

      { t: 'part', title: 'Identifying the components: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A multimeter with an ohm range and a diode-test range (analogue or digital), and the collection: a resistor, a diode, an LED and a capacitor.',
      },
      {
        t: 'table',
        title: 'Resistor colour code',
        head: ['Colour', 'Digit', 'Multiplier'],
        rows: [
          ['Black', '0', '× 1'],
          ['Brown', '1', '× 10'],
          ['Red', '2', '× 10<sup>2</sup>'],
          ['Orange', '3', '× 10<sup>3</sup>'],
          ['Yellow', '4', '× 10<sup>4</sup>'],
          ['Green', '5', '× 10<sup>5</sup>'],
          ['Blue', '6', '× 10<sup>6</sup>'],
          ['Violet', '7', '× 10<sup>7</sup>'],
          ['Grey', '8', '× 10<sup>8</sup>'],
          ['White', '9', '× 10<sup>9</sup>'],
        ],
        note: 'Four bands: digit, digit, multiplier, tolerance (gold ± 5 %, silver ± 10 %, none ± 20 %).',
      },
      {
        t: 'proc',
        title: 'Sorting the components',
        steps: [
          '<b>Look first.</b> Colour bands mean a resistor. A clear or coloured dome with two leads, one longer, means an LED. A small body with a band at one end is a diode, with the band at the cathode. A can or a disc with markings in μF or nF is a capacitor, and an electrolytic one has a marked negative lead.',
          '<b>Resistance range, leads one way, then reversed.</b> Touch the leads to the two terminals and note the reading. Reverse the leads and note it again.',
          '<b>Same steady value both ways:</b> a resistor. Compare it with the colour code.',
          '<b>A reading that starts low and climbs to off-scale:</b> a capacitor. Discharge it by touching its leads together, swap the leads and the same swing repeats.',
          '<b>Low one way and off-scale the other:</b> a diode (or an LED). Use the diode-test range to tell them apart: a silicon diode reads about 0.5 to 0.7 V in forward bias and an LED a higher value, about 1.7 to 2.3 V for red to green, and may glow faintly. Blue and white LEDs need about 3 V and may read off-scale even on the diode-test range.',
          '<b>Off-scale both ways with no movement:</b> a very small capacitor, a broken component, or a diode or LED on a low-voltage range.',
        ],
      },
      { t: 'fig', id: 'p12-15-04-d6' },
      {
        t: 'p',
        html: '<b>Which lead is positive.</b> On an analogue multimeter set to the ohm range, the black lead is joined to the positive terminal of the meter’s cell, and the red lead to the negative. On a digital multimeter in the diode-test range the red lead is positive. Do not carry the analogue rule over to a digital meter. Check the leads with a known diode before using them to mark an unknown diode’s anode and cathode.',
      },

      { t: 'part', title: 'Identifying the components: observations and calculation' },
      {
        t: 'table',
        title: 'What each component shows',
        head: ['Component', 'Ohm range, leads one way, then swapped', 'What else to check'],
        rows: [
          ['Resistor', 'The same steady value both ways', 'The value matches the colour code within its tolerance'],
          ['Diode', 'Low one way, off-scale the other', 'Diode-test range: about 0.5 to 0.7 V forward for silicon, off-scale reversed'],
          ['LED', 'Like a diode, but may read off-scale both ways on a low-voltage range', 'Diode-test range: higher forward voltage, and a faint glow. The longer lead is the anode'],
          ['Capacitor (large)', 'Pointer swings low, then returns towards off-scale. Repeats after discharging', 'Marked in μF. An electrolytic one is polarised'],
          ['Capacitor (very small)', 'Off-scale both ways, no visible swing', 'Marked in pF or nF'],
        ],
        note: null,
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level (colour code)',
        q: 'A resistor has bands yellow, violet, red, gold. A multimeter reads 4.62 kΩ whichever way it is connected. Does the reading agree with the code?',
        steps: [
          'Yellow is 4 and violet is 7, so the digits are 47. Red gives the multiplier 10<sup>2</sup>.',
          '<i>R</i> = 47 × 10<sup>2</sup> Ω = 4700 Ω = 4.7 kΩ. Gold means a tolerance of ± 5 %.',
          'Tolerance = 5 % of 4.7 kΩ = 0.235 kΩ, so the resistor lies between 4.7 − 0.235 = 4.465 kΩ and 4.7 + 0.235 = 4.935 kΩ.',
          'The measured 4.62 kΩ lies inside this range.',
          '<b>Check.</b> The reading differs from 4.7 kΩ by 0.08 kΩ, which is 1.7 % of 4.7 kΩ. That is less than 5 %.',
        ],
        ans: 'Yes: 4.7 kΩ ± 5 % (4.465 kΩ to 4.935 kΩ), measured 4.62 kΩ',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (why the pointer swings)',
        q: 'On an analogue meter range the internal resistance is 15 kΩ. Find the time constant of the charging for a 100 μF electrolytic capacitor and for a 1 nF ceramic capacitor, and say what is seen.',
        steps: [
          '100 μF: <i>τ</i> = <i>RC</i> = 15 × 10<sup>3</sup> Ω × 100 × 10<sup>−6</sup> F = 1.5 s. The pointer swings and then takes a few seconds to return.',
          '1 nF: <i>τ</i> = 15 × 10<sup>3</sup> × 1 × 10<sup>−9</sup> = 1.5 × 10<sup>−5</sup> s = 15 μs. The charge is complete long before the eye can follow.',
          'A very small capacitor therefore looks like an open circuit on this range, with no visible swing.',
          '<b>Check.</b> The two capacitances differ by a factor of 10<sup>5</sup>, and 1.5 s/10<sup>5</sup> = 1.5 × 10<sup>−5</sup> s.',
        ],
        ans: '<i>τ</i> = 1.5 s for 100 μF (clear swing), 15 μs for 1 nF (no visible swing)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (resistor for an LED)',
        q: 'A red LED (forward voltage 2.0 V) is to carry about 20 mA from a 9.0 V battery. Find the series resistor, and the current with the next higher standard value, 390 Ω.',
        steps: [
          'The LED drops 2.0 V, so the resistor must take 9.0 − 2.0 = 7.0 V.',
          '<i>R</i> = (<i>V</i><sub>s</sub> − <i>V</i><sub>f</sub>)/<i>I</i> = 7.0/0.020 = 350 Ω.',
          'The standard values near 350 Ω are 330 Ω and 390 Ω. Taking the higher one keeps the current at or below 20 mA: <i>I</i> = 7.0/390 = 0.0179 A = 17.9 mA.',
          '<b>Check.</b> 350 × 0.020 = 7.0 V, and 390 × 0.0179 = 7.0 V.',
        ],
        ans: '<i>R</i> = 350 Ω, so use 390 Ω (about 18 mA)',
      },

      { t: 'part', title: 'Identifying the components: result, precautions and exam traps' },
      {
        t: 'p',
        html: '<b>Result.</b> The resistor is the component that reads the same steady value both ways and matches its colour code. The diode reads low one way and off-scale the other. The LED behaves like a diode, but with a higher forward voltage and a glow. The capacitor shows a transient reading that repeats after discharging.<br><br><b>Precautions.</b> Test each component out of the circuit, and discharge a capacitor before testing it. Keep your fingers off the leads while reading a resistance, since the body is a parallel path.<br><br><b>Errors.</b> A resistor tested in a circuit gives a lower value because other paths are parallel to it. A resistor’s true value may differ from the code by its tolerance.',
      },
      {
        t: 'mistakes',
        items: [
          '<b>A capacitor reads a transient, a resistor a steady value.</b> Only a diode or an LED is strongly different in the two directions.',
          '<b>“Off-scale both ways” is not always a broken part.</b> A very small capacitor looks the same, as does an LED on a low-voltage range.',
          '<b>Reversing lead polarity between meters.</b> Black is positive on an analogue ohm range, red is positive in the diode-test range of a digital meter.',
          '<b>The colour code.</b> The multiplier band is a power of ten and not the next digit. Red as the third band means ×10<sup>2</sup>, not 2.',
          '<b>The LED’s resistor.</b> The drop across the LED is taken off the supply before dividing by the current.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] On a forward-biased silicon diode, 0.66 V gives a current of 4.0 mA and 0.70 V gives 9.0 mA. Find the dynamic resistance between them and the static resistance at 0.70 V.',
            a: 'Δ<i>V</i> = 0.04 V and Δ<i>I</i> = 5.0 mA, so <i>r</i> = 0.04/0.005 = <b>8 Ω</b>. Static: <i>R</i> = 0.70/0.009 = <b>78 Ω</b> (77.8 Ω).',
          },
          {
            q: '[NEET] In the reverse-bias measurement, a student connects a 1 MΩ voltmeter across the diode alone and reads the microammeter at 5 V. The diode’s true leakage is 0.02 μA. What does the microammeter read, and how large is the error?',
            a: 'The voltmeter draws 5 V/1 MΩ = 5 μA through the microammeter, so it reads 5 + 0.02 = <b>5.02 μA</b>, about <b>250 times</b> the true leakage (5.02/0.02 = 251). The voltmeter should be across the diode and the microammeter together.',
          },
          {
            q: '[JEE Main] A 6.0 V Zener diode is connected in reverse across a load of 1.2 kΩ, with a series resistor of 300 Ω from a 15 V supply. Find the current in the series resistor, the load and the diode.',
            a: '<i>I</i><sub>s</sub> = (15 − 6.0)/300 = 30 mA. <i>I</i><sub>L</sub> = 6.0/1200 = 5 mA. <i>I</i><sub>z</sub> = 30 − 5 = <b>25 mA</b>. The load is at 6.0 V.',
          },
          {
            q: '[JEE Main] A 5.0 V, 0.5 W Zener diode is used with a 10 V supply and a series resistor, and the load may be disconnected. What is the smallest safe series resistance?',
            a: 'With the load removed the diode carries the whole current. <i>I</i><sub>z,max</sub> = 0.5/5.0 = 0.10 A. <i>R</i><sub>s</sub> ≥ (10 − 5.0)/0.10 = <b>50 Ω</b>.',
          },
          {
            q: '[CBSE] A resistor is banded red, red, orange, gold. Find its resistance and the range allowed by its tolerance.',
            a: 'Digits 22, multiplier 10<sup>3</sup>: <b>22 kΩ ± 5 %</b>. 5 % of 22 kΩ is 1.1 kΩ, so the range is <b>20.9 kΩ to 23.1 kΩ</b>.',
          },
          {
            q: '[JEE Main] A 2.2 nF capacitor is tested with an analogue meter range whose internal resistance is 15 kΩ. Find the time constant and say why the pointer shows no movement.',
            a: '<i>τ</i> = <i>RC</i> = 15 × 10<sup>3</sup> × 2.2 × 10<sup>−9</sup> = 3.3 × 10<sup>−5</sup> s = <b>33 μs</b>. The capacitor charges in a few tens of microseconds, much faster than the pointer or the eye can follow, so it reads as an open circuit.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'To measure the small reverse current of a silicon diode with a microammeter, the voltmeter should be connected:',
        opts: [
          { label: 'across the diode alone', nudge: '<b>(A)</b> the voltmeter’s own current (microamperes) would then flow through the microammeter and swamp the leakage.' },
          { label: 'across the diode and the microammeter together', nudge: null },
          { label: 'across the microammeter alone', nudge: '<b>(C)</b> would read the tiny drop across the meter, not the voltage across the diode.' },
          { label: 'in series with the diode', nudge: '<b>(D)</b> a voltmeter has a very high resistance and would block the current instead of measuring a voltage.' },
        ],
        correct: 1,
        solution: 'The reverse resistance of the diode is far larger than the voltmeter’s, so the voltmeter’s own current would swamp the leakage. Across the diode and the microammeter together, the voltmeter’s current bypasses the microammeter, which then reads only the diode’s leakage.',
      },
      {
        t: 'mcq',
        q: 'A forward-biased diode passes 2.0 mA at 0.62 V and 6.0 mA at 0.66 V. Its dynamic resistance between these points is:',
        opts: [
          { label: '110 Ω', nudge: '<b>(A)</b> is the static resistance at 0.66 V, 0.66/6.0 mA.' },
          { label: '10 Ω', nudge: null },
          { label: '210 Ω', nudge: '<b>(C)</b> is the average of the two static resistances.' },
          { label: '310 Ω', nudge: '<b>(D)</b> is the static resistance at 0.62 V, 0.62/2.0 mA.' },
        ],
        correct: 1,
        solution: '<i>r</i> = Δ<i>V</i>/Δ<i>I</i> = (0.66 − 0.62)/(6.0 − 2.0) mA = 0.04 V/4.0 mA = 10 Ω.',
      },
      {
        t: 'mcq',
        q: 'A 5.0 V Zener diode is connected in reverse with a 200 Ω series resistor to a 15 V supply, with no load. The current in the diode is:',
        opts: [
          { label: '25 mA', nudge: '<b>(A)</b> divides the Zener voltage by 200 Ω. The resistor’s voltage is the supply minus the Zener voltage.' },
          { label: '50 mA', nudge: null },
          { label: '75 mA', nudge: '<b>(C)</b> divides the whole 15 V by the resistor and forgets that the diode holds 5 V.' },
          { label: '100 mA', nudge: '<b>(D)</b> adds the two voltages (15 + 5 = 20 V) instead of subtracting.' },
        ],
        correct: 1,
        solution: 'The resistor carries the difference: (15 − 5.0) V/200 Ω = 0.050 A = 50 mA. With no load all of it flows through the diode.',
      },
      {
        t: 'mcq',
        q: 'Which statement about the breakdown of a Zener diode is correct?',
        opts: [
          { label: 'It permanently destroys the junction.', nudge: '<b>(A)</b> Breakdown by itself does no harm, and the diode is made to work there.' },
          { label: 'The voltage across the diode rises greatly as the current rises.', nudge: '<b>(B)</b> is the opposite of the real behaviour. The voltage stays nearly constant.' },
          { label: 'It is reversible so long as the power <i>V</i><sub>z</sub><i>I</i> stays within the rating.', nudge: null },
          { label: 'It occurs in forward bias at about 0.7 V.', nudge: '<b>(D)</b> 0.7 V is the forward knee of silicon, which is not the breakdown.' },
        ],
        correct: 2,
        solution: 'Breakdown does not damage the diode. Only excess power does, and the series resistor keeps the current within the rating.',
      },
      {
        t: 'mcq',
        q: 'A resistor has bands brown, black, orange, gold. Its value is:',
        opts: [
          { label: '1 kΩ ± 5 %', nudge: '<b>(A)</b> reads the multiplier as 10<sup>2</sup> (red). Orange is 10<sup>3</sup>.' },
          { label: '10 kΩ ± 5 %', nudge: null },
          { label: '100 kΩ ± 5 %', nudge: '<b>(C)</b> uses a multiplier of 10<sup>4</sup> (yellow).' },
          { label: '10 kΩ ± 10 %', nudge: '<b>(D)</b> has the tolerance wrong. Gold is ± 5 %, silver ± 10 %.' },
        ],
        correct: 1,
        solution: 'Brown 1, black 0, orange 10<sup>3</sup>: 10 × 10<sup>3</sup> Ω = 10 kΩ. Gold means ± 5 %.',
      },
      {
        t: 'mcq',
        q: 'An analogue multimeter on its ohm range is touched to a 470 μF electrolytic capacitor and the leads are then swapped after discharging it. The pointer:',
        opts: [
          { label: 'stays at a steady low value both times', nudge: '<b>(A)</b> is the behaviour of a low-valued resistor, not a capacitor that blocks d.c. once charged.' },
          { label: 'swings towards low resistance and then returns towards off-scale, and repeats it', nudge: null },
          { label: 'shows a low reading one way and off-scale the other', nudge: '<b>(C)</b> is the behaviour of a diode.' },
          { label: 'does not move at all, the capacitor being open', nudge: '<b>(D)</b> would be true for a very small capacitor. For 470 μF the time constant is several seconds, so the swing is clear.' },
        ],
        correct: 1,
        solution: 'The meter charges the capacitor through its internal resistance. With <i>τ</i> = <i>RC</i> of the order of seconds, the pointer swings at once and then returns as the charging current dies away. Discharging and swapping the leads repeats it.',
      },
    ],
  },
];
