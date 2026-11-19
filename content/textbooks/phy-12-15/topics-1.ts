import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 15 (Experimental Skills), Topic 01: seven experiments from mechanics,
 * properties of matter, heat and sound. ORIGINAL text (no source book): every
 * formula is derived in the text, every worked example and answer was
 * recomputed by a second route. Drawings p12-15-01-d1 to d9 are redrawn in
 * lib/diagrams/physics-12-15b.ts.
 */
export const TOPICS: Topic[] = [
  {
    n: '01',
    title: 'Mechanics, properties of matter, heat and sound',
    kalam: 'Seven experiments, each reduced to a formula, a data table and the one measurement whose error matters most.',
    blocks: [
      // ───────────────────── Experiment 1: simple pendulum, energy loss ─────────────────────
      { t: 'part', title: 'Pendulum energy loss: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To see how a swinging pendulum loses energy, by plotting the square of its amplitude against time, and to read the rate of loss from the graph.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> For small swings the energy of the bob is proportional to the square of the amplitude. Air drag and friction at the support take energy away a little on every swing, so the amplitude dies away. The derivation below takes the drag as proportional to the speed, which is the usual model for a slow bob.',
      },
      {
        t: 'deriv',
        kicker: 'Why A² falls exponentially',
        steps: [
          {
            eq: '<i>E</i> = ½<i>m</i>(<i>ωA</i>)<sup>2</sup> = ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup>',
            why: 'In simple harmonic motion of amplitude <i>A</i> (a length) and angular frequency <i>ω</i> the greatest speed is <i>ωA</i>, and all the energy is kinetic there. So <i>E</i> ∝ <i>A</i><sup>2</sup>.',
          },
          {
            eq: 'drag = −<i>bv</i>',
            why: 'The drag on a slow bob is taken as proportional to its speed. <i>b</i> is a constant (unit kg s<sup>−1</sup>).',
          },
          {
            eq: 'd<i>E</i>/d<i>t</i> = −<i>b</i>⟨<i>v</i><sup>2</sup>⟩ = −<i>b</i> · ½<i>ω</i><sup>2</sup><i>A</i><sup>2</sup> = −(<i>b</i>/<i>m</i>)<i>E</i>',
            why: 'Drag removes energy at the rate <i>bv</i><sup>2</sup>. Over one swing the mean of <i>v</i><sup>2</sup> is ½<i>ω</i><sup>2</sup><i>A</i><sup>2</sup>. This treats <i>A</i> as constant during one swing, which is fair because the loss per swing is small.',
          },
          {
            eq: '<i>E</i> = <i>E</i><sub>0</sub> e<sup>−<i>bt</i>/<i>m</i></sup>',
            why: 'The energy falls at a rate proportional to itself, so it falls by the same fraction in equal times.',
          },
          {
            eq: '<i>A</i><sup>2</sup> = <i>A</i><sub>0</sub><sup>2</sup> e<sup>−<i>bt</i>/<i>m</i></sup>, so ln <i>A</i><sup>2</sup> = ln <i>A</i><sub>0</sub><sup>2</sup> − (<i>b</i>/<i>m</i>)<i>t</i>',
            why: 'Because <i>E</i> ∝ <i>A</i><sup>2</sup>. The graph of <i>A</i><sup>2</sup> against <i>t</i> is a falling curve. The graph of ln <i>A</i><sup>2</sup> against <i>t</i> is a straight line of slope −<i>b</i>/<i>m</i>. The amplitude itself obeys <i>A</i> = <i>A</i><sub>0</sub> e<sup>−<i>bt</i>/(2<i>m</i>)</sup>.',
          },
        ],
      },
      {
        t: 'formula',
        kicker: 'Pendulum energy loss',
        main: '<i>E</i> ∝ <i>A</i><sup>2</sup><br><i>A</i><sup>2</sup> = <i>A</i><sub>0</sub><sup>2</sup> e<sup>−<i>bt</i>/<i>m</i></sup><br>ln <i>A</i><sup>2</sup> = ln <i>A</i><sub>0</sub><sup>2</sup> − (<i>b</i>/<i>m</i>)<i>t</i>',
        legend: [
          '<i>A</i> = amplitude at time <i>t</i>',
          '<i>A</i><sub>0</sub> = amplitude at <i>t</i> = 0',
          '<i>b</i> = drag constant, force per unit speed',
          '<i>m</i> = mass of the bob',
        ],
        note: 'Light damping, drag proportional to speed. The energy halves in 0.693 <i>m</i>/<i>b</i>; the slope of the ln <i>A</i><sup>2</sup> line is −<i>b</i>/<i>m</i>.',
      },

      { t: 'part', title: 'Pendulum energy loss: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A dense metal bob (a heavier bob loses less of its energy to the air on each swing), a thread about 1 m long, a rigid clamp, a horizontal scale fixed just behind the bob with its zero at the rest position, a stop-watch.',
      },
      { t: 'fig', id: 'p12-15-01-d1' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          '<b>Set up.</b> Hang the bob from the clamp and fix the scale behind it. Clamp the stand firmly to the bench so it cannot topple.',
          '<b>Start.</b> Pull the bob aside by 10 cm (about 6° for a 1 m thread) and release it without a push or a twist.',
          '<b>Read.</b> After every 50 oscillations (about 100 s) read the amplitude at the end of a swing, with your eye level with the bob, and note the time on the stop-watch.',
          '<b>Continue</b> until the amplitude has fallen to about a quarter of its starting value.',
          '<b>Tabulate and plot.</b> Work out <i>A</i><sup>2</sup> and ln <i>A</i><sup>2</sup> for each reading. Plot <i>A</i><sup>2</sup> against <i>t</i>, then ln <i>A</i><sup>2</sup> against <i>t</i>.',
        ],
      },

      { t: 'part', title: 'Pendulum energy loss: observations and calculation' },
      {
        t: 'table',
        title: 'Amplitude of a 1.00 m pendulum',
        head: ['t (s)', 'A (cm)', 'A² (cm²)', 'ln A²'],
        rows: [
          ['0', '10.0', '100.0', '4.61'],
          ['100', '7.8', '60.8', '4.11'],
          ['200', '6.1', '37.2', '3.62'],
          ['300', '4.7', '22.1', '3.10'],
          ['400', '3.7', '13.7', '2.62'],
          ['500', '2.9', '8.4', '2.13'],
        ],
        note: 'A² is in cm², and ln A² is worked out from the value of A² in cm².',
      },
      { t: 'fig', id: 'p12-15-01-d2' },
      {
        t: 'ex',
        tag: 'JEE Main Level (experiment data)',
        q: 'Use the table to find <i>b</i>/<i>m</i>, the time in which the energy halves, and the fraction of energy lost per swing. The thread is 1.00 m long and <i>g</i> = 9.8 m s<sup>−2</sup>.',
        steps: [
          '<b>Slope.</b> The points of ln <i>A</i><sup>2</sup> against <i>t</i> lie on a straight line. Using the first and last, slope = (ln 8.41 − ln 100)/500 s = (2.129 − 4.605)/500 s = −4.95 × 10<sup>−3</sup> s<sup>−1</sup>. So <i>b</i>/<i>m</i> = 4.95 × 10<sup>−3</sup> s<sup>−1</sup>.',
          '<b>Half-time.</b> <i>t</i><sub>½</sub> = ln 2/(<i>b</i>/<i>m</i>) = 0.693/(4.95 × 10<sup>−3</sup> s<sup>−1</sup>) = 140 s. This agrees with the table: <i>A</i><sup>2</sup> = 50 cm<sup>2</sup> lies between 60.8 cm<sup>2</sup> at 100 s and 37.2 cm<sup>2</sup> at 200 s.',
          '<b>Loss per swing.</b> The period is 2π√(<i>L</i>/<i>g</i>) = 2π√(1.00/9.8) = 2.01 s. Fraction lost per swing ≈ (<i>b</i>/<i>m</i>)<i>T</i> = 4.95 × 10<sup>−3</sup> × 2.01 = 9.9 × 10<sup>−3</sup>.',
          '<b>Check by another route.</b> The amplitude falls from 10.0 cm to 2.9 cm in 500 s, so <i>b</i>/(2<i>m</i>) = ln(10.0/2.9)/500 = 2.48 × 10<sup>−3</sup> s<sup>−1</sup>, which gives <i>b</i>/<i>m</i> = 4.95 × 10<sup>−3</sup> s<sup>−1</sup> again. Over the first 100 s (about 50 swings) <i>A</i><sup>2</sup> falls to 0.608 of its value, a loss of about 1% per swing.',
        ],
        ans: '<i>b</i>/<i>m</i> ≈ 5.0 × 10<sup>−3</sup> s<sup>−1</sup>; the energy halves in about 140 s; about 1% of the energy is lost on each swing',
      },

      { t: 'part', title: 'Pendulum energy loss: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The graph of <i>A</i><sup>2</sup> against <i>t</i> is a smooth falling curve, steep at first and flattening, and it never reaches zero. The graph of ln <i>A</i><sup>2</sup> against <i>t</i> is a straight line of negative slope, and its slope is −<i>b</i>/<i>m</i>.',
      },
      {
        t: 'p',
        html: '<b>Precautions.</b><br>• Keep the swings small, so that the motion is simple harmonic and <i>E</i> ∝ <i>A</i><sup>2</sup> holds.<br>• Use a rigid support. A clamp that yields also takes energy, and the slope would no longer measure the air drag.<br>• Keep the bob out of draughts.<br>• Release the bob without a push so that it swings in one plane.<br>• Read the amplitude at the end of the swing, with the eye level with the bob, to avoid parallax.',
      },
      {
        t: 'p',
        html: '<b>Errors.</b> An error Δ<i>A</i> in an amplitude reading gives Δ(ln <i>A</i><sup>2</sup>) = 2Δ<i>A</i>/<i>A</i>. The reading error therefore counts twice, and it matters most for the late, small amplitudes. A line fitted through all the points uses the readings better than the first and last points alone.',
      },

      { t: 'part', title: 'Pendulum energy loss: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Energy goes as <i>A</i><sup>2</sup>, not <i>A</i>.</b> If the amplitude halves, the energy becomes one quarter.',
          '<b>Only a logarithm gives a straight line.</b> <i>A</i> against <i>t</i> and <i>A</i><sup>2</sup> against <i>t</i> are both curves. The slope of ln <i>A</i><sup>2</sup> is −<i>b</i>/<i>m</i>; the slope of ln <i>A</i> is −<i>b</i>/(2<i>m</i>).',
          '<b>Equal ratios, not equal amounts.</b> The energy falls by the same factor in equal times (it halves every 0.693 <i>m</i>/<i>b</i>). The amplitude takes twice as long to halve as the energy does.',
          '<b>The period hardly changes.</b> Light damping leaves the period almost constant, so counting swings is a fair clock.',
        ],
      },

      // ───────────────────── Experiment 2: metre scale, moments ─────────────────────
      { t: 'part', title: 'Metre scale, mass by moments: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the mass of an object with a metre scale, a knife edge and a standard mass of known value.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> A rigid body stays horizontal when the clockwise and anticlockwise torques about its support are equal. Suppose the knife edge sits at the scale’s centre of gravity, so the scale’s own weight has no torque. A standard mass <i>M</i> hangs at a distance <i>a</i> on one side and the object of mass <i>m</i> at a distance <i>b</i> on the other. Balance of torques gives <i>Mga</i> = <i>mgb</i>, so <i>m</i> = <i>Ma</i>/<i>b</i>. The factor <i>g</i> cancels: the experiment compares masses and needs no value of <i>g</i>.',
      },
      {
        t: 'formula',
        kicker: 'Principle of moments (metre scale)',
        main: '<i>Ma</i> = <i>mb</i><br><i>m</i> = <i>Ma</i>/<i>b</i>',
        legend: [
          '<i>M</i> = standard (known) mass',
          '<i>a</i> = distance of <i>M</i> from the knife edge',
          '<i>m</i> = unknown mass',
          '<i>b</i> = distance of <i>m</i> from the knife edge',
        ],
        note: 'The knife edge is at the centre of gravity of the scale and the scale is horizontal.',
      },

      { t: 'part', title: 'Metre scale, mass by moments: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A metre scale, a knife edge (a wedge on a stand), a standard mass of 50 g, the object, and two light thread loops that slide along the scale.',
      },
      { t: 'fig', id: 'p12-15-01-d3' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          '<b>Find the centre of gravity.</b> Balance the bare scale on the knife edge and slide it until it stays horizontal. Note this mark, G (near 50 cm for a uniform scale). Keep the knife edge at G for the whole experiment, and keep your hands clear of it when you slide the scale.',
          '<b>Hang the standard mass.</b> Put its thread loop at a convenient mark on one side and read the mark.',
          '<b>Balance the object.</b> Hang the object on the other side and slide its loop until the scale is horizontal. Judge this by comparing the heights of the two ends above the bench. Read the mark.',
          '<b>Find the distances.</b> Each distance is the difference between a mark and G.',
          '<b>Repeat</b> for four different positions of the standard mass, and take the mean of <i>m</i>. A graph of <i>b</i> against <i>a</i> is a straight line through the origin of slope <i>M</i>/<i>m</i>.',
        ],
      },

      { t: 'part', title: 'Metre scale, mass by moments: observations and calculation' },
      {
        t: 'table',
        title: 'Standard mass M = 50.0 g, knife edge at G = 50.0 cm',
        head: ['Trial', 'Standard at (cm)', 'Object at (cm)', 'a (cm)', 'b (cm)', 'm (g)'],
        rows: [
          ['1', '20.0', '70.8', '30.0', '20.8', '72.1'],
          ['2', '25.0', '67.4', '25.0', '17.4', '71.8'],
          ['3', '30.0', '63.9', '20.0', '13.9', '71.9'],
          ['4', '35.0', '60.4', '15.0', '10.4', '72.1'],
        ],
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (experiment data)',
        q: 'Work out the mass of the object from the table, and estimate the error in trial 1. Each mark is read to ±0.1 cm, so a distance (a difference of two marks) is uncertain by ±0.2 cm, and the standard mass is known to ±0.1 g.',
        steps: [
          '<b>Trial 1.</b> <i>a</i> = 50.0 − 20.0 = 30.0 cm and <i>b</i> = 70.8 − 50.0 = 20.8 cm, so <i>m</i> = 50.0 × 30.0/20.8 = 72.1 g.',
          '<b>The other trials</b> give 71.8 g, 71.9 g and 72.1 g (for example trial 4: 50.0 × 15.0/10.4 = 72.1 g).',
          '<b>Mean.</b> <i>m</i> = (72.1 + 71.8 + 71.9 + 72.1)/4 = 72.0 g.',
          '<b>Check by the graph.</b> A line <i>b</i> = (<i>M</i>/<i>m</i>)<i>a</i> through the origin fitted to the four points has slope Σ<i>ab</i>/Σ<i>a</i><sup>2</sup> = 1493/2150 = 0.694, so <i>m</i> = 50.0/0.694 = 72.0 g.',
          '<b>Error in trial 1.</b> Δ<i>m</i>/<i>m</i> = Δ<i>M</i>/<i>M</i> + Δ<i>a</i>/<i>a</i> + Δ<i>b</i>/<i>b</i> = 0.1/50.0 + 0.2/30.0 + 0.2/20.8 = 0.2% + 0.7% + 1.0% = 1.8%, which is ±1.3 g.',
        ],
        ans: '<i>m</i> = 72.0 g (mean of four trials), uncertain by about ±1.3 g',
      },

      { t: 'part', title: 'Metre scale, mass by moments: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The object has a mass of about 72 g, found from <i>m</i> = <i>Ma</i>/<i>b</i> averaged over several positions.',
      },
      {
        t: 'p',
        html: '<b>Precautions.</b><br>• Find G first and put the knife edge there. A scale is not always uniform, so G need not be at 50 cm.<br>• Use thin, light thread loops and read the mark at the centre of the loop.<br>• Make sure the scale is horizontal before reading, and keep the wedge sharp, upright and fixed.',
      },
      {
        t: 'p',
        html: '<b>Errors.</b> Δ<i>m</i>/<i>m</i> = Δ<i>M</i>/<i>M</i> + Δ<i>a</i>/<i>a</i> + Δ<i>b</i>/<i>b</i>: each term has weight 1. A short arm has a large fractional error (0.2 cm out of 10.4 cm is 1.9%), so choose positions that keep both arms long.',
      },

      { t: 'part', title: 'Metre scale, mass by moments: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Distances are measured from the knife edge</b>, not from the end of the scale. Use <i>a</i> = |mark − G|.',
          '<b><i>g</i> cancels.</b> The balance gives a ratio of masses, so no value of <i>g</i> is needed.',
          '<b>The heavier mass sits nearer the knife edge.</b> If <i>m</i> > <i>M</i> then <i>b</i> < <i>a</i>.',
          '<b>If the knife edge is not at G</b>, the weight of the scale adds a torque about the edge, and <i>m</i> = <i>Ma</i>/<i>b</i> is wrong. This is why the first step is to find G.',
        ],
      },

      // ───────────────────── Experiment 3: Young's modulus, Searle ─────────────────────
      { t: 'part', title: 'Young’s modulus by Searle’s method: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find Young’s modulus <i>Y</i> of the material of a wire.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> Within the elastic limit, stress is proportional to strain. A wire of length <i>L</i> and diameter <i>d</i>, pulled by a force <i>F</i> = <i>mg</i>, stretches by <i>ℓ</i>. The stress is <i>F</i>/<i>A</i> with area <i>A</i> = π<i>d</i><sup>2</sup>/4, and the strain is <i>ℓ</i>/<i>L</i>. Therefore<br><i>Y</i> = (<i>F</i>/<i>A</i>)/(<i>ℓ</i>/<i>L</i>) = <i>FL</i>/(<i>Aℓ</i>) = 4<i>mgL</i>/(π<i>d</i><sup>2</sup><i>ℓ</i>).<br>The extension is only a fraction of a millimetre, so Searle’s apparatus measures it with a micrometer screw and a spirit level.',
      },
      {
        t: 'formula',
        kicker: 'Young’s modulus (Searle)',
        main: '<i>Y</i> = 4<i>mgL</i>/(π<i>d</i><sup>2</sup><i>ℓ</i>)<br>Δ<i>Y</i>/<i>Y</i> = Δ<i>m</i>/<i>m</i> + Δ<i>L</i>/<i>L</i> + 2Δ<i>d</i>/<i>d</i> + Δ<i>ℓ</i>/<i>ℓ</i>',
        legend: [
          '<i>m</i> = load on the wire',
          '<i>g</i> = acceleration due to gravity',
          '<i>L</i> = length of the wire',
          '<i>d</i> = diameter of the wire',
          '<i>ℓ</i> = extension produced by the load',
        ],
        note: 'Valid below the elastic limit. A graph of load against extension is a straight line through the origin, with slope <i>m</i>/<i>ℓ</i>.',
      },

      { t: 'part', title: 'Young’s modulus by Searle’s method: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> Two wires of the same material and length hang side by side from a rigid support: the experimental wire and a reference wire. Each carries a frame at its lower end. A spirit level lies across the two frames, with one end pivoted on one frame and the other end resting on the tip of a micrometer screw carried by the other frame. Both wires carry a constant dead load to keep them straight. Extra slotted loads go on the hanger of the experimental wire. You also need a screw gauge and a metre scale. The reference wire is not a second sample under test: a change of temperature or a sag of the support lengthens both wires alike, so the level does not respond to it.',
      },
      { t: 'fig', id: 'p12-15-01-d4' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          '<b>Diameter.</b> With a screw gauge measure the diameter of the experimental wire at three places, in two perpendicular directions at each, and correct the mean for the zero error.',
          '<b>Length.</b> Measure <i>L</i> with a metre scale from the clamp to the frame. Stand clear of the hanging loads.',
          '<b>Starting reading.</b> With only the dead load on, turn the micrometer screw until the bubble is at the centre of the level, and read the screw.',
          '<b>Load.</b> Add loads gently in equal steps of 1.0 kg. After each step the wire stretches, the frame drops and the bubble moves. Turn the screw, always in the same direction, until the bubble is central again, and read it. The change of screw reading from the starting reading is the extension <i>ℓ</i>.',
          '<b>Unload</b> in the same steps and read again. The mean of the loading and unloading readings removes the effect of elastic after-effect.',
          '<b>Plot</b> the load against the extension, and take <i>m</i>/<i>ℓ</i> from the slope. Stay well below the elastic limit.',
        ],
      },

      { t: 'part', title: 'Young’s modulus by Searle’s method: observations and calculation' },
      {
        t: 'p',
        html: '<b>Wire.</b> Length <i>L</i> = 150.0 cm. Diameter by screw gauge (least count 0.01 mm), six readings in mm: 0.52, 0.52, 0.53, 0.51, 0.52, 0.52; mean 0.52 mm. The zero error is +0.02 mm.',
      },
      {
        t: 'table',
        title: 'Micrometer screw readings (dead load on at 0)',
        head: ['Load (kg)', 'Loading (mm)', 'Unloading (mm)', 'Mean (mm)', 'Extension (mm)'],
        rows: [
          ['0', '4.50', '4.51', '4.505', '0.000'],
          ['1.0', '4.89', '4.91', '4.900', '0.395'],
          ['2.0', '5.29', '5.30', '5.295', '0.790'],
          ['3.0', '5.68', '5.70', '5.690', '1.185'],
          ['4.0', '6.08', '6.08', '6.080', '1.575'],
        ],
      },
      { t: 'fig', id: 'p12-15-01-d5' },
      {
        t: 'ex',
        tag: 'JEE Main Level (experiment data)',
        q: 'Find Young’s modulus of the wire and the error in it. Take <i>g</i> = 9.8 m s<sup>−2</sup>. The load is known to ±1 g, <i>L</i> to ±0.1 cm, the diameter to ±0.01 mm, and each screw reading to ±0.01 mm.',
        steps: [
          '<b>Diameter.</b> <i>d</i> = 0.52 − 0.02 = 0.50 mm = 5.0 × 10<sup>−4</sup> m.',
          '<b>Extension per kilogram.</b> The extensions divided by the loads are 0.395, 0.395, 0.395 and 0.394 mm, so the mean is 0.395 mm per kg, which is 3.95 × 10<sup>−4</sup> m per kg. Hence <i>m</i>/<i>ℓ</i> = 1/(3.95 × 10<sup>−4</sup>) = 2.53 × 10<sup>3</sup> kg m<sup>−1</sup>.',
          '<b>Young’s modulus.</b> 4<i>gL</i>/(π<i>d</i><sup>2</sup>) = 4 × 9.8 × 1.500/(π × (5.0 × 10<sup>−4</sup>)<sup>2</sup>) = 58.8/(7.854 × 10<sup>−7</sup>) = 7.49 × 10<sup>7</sup> in SI units. Then <i>Y</i> = 7.49 × 10<sup>7</sup> × 2.53 × 10<sup>3</sup> = 1.90 × 10<sup>11</sup> N m<sup>−2</sup>.',
          '<b>Check by stress over strain.</b> For the full 4.0 kg load the force is 4.0 × 9.8 = 39.2 N and the area is π(2.5 × 10<sup>−4</sup>)<sup>2</sup> = 1.963 × 10<sup>−7</sup> m<sup>2</sup>, so the stress is 1.997 × 10<sup>8</sup> N m<sup>−2</sup>. The strain is 1.575 × 10<sup>−3</sup>/1.500 = 1.050 × 10<sup>−3</sup>. Their ratio is 1.90 × 10<sup>11</sup> N m<sup>−2</sup>.',
          '<b>Error.</b> The load gives 1/4000 = 0.03%. The length gives 0.1/150.0 = 0.07%. The diameter gives 2 × 0.01/0.50 = 4.0%. The extension is a difference of two screw readings, so Δ<i>ℓ</i> = 0.02 mm and Δ<i>ℓ</i>/<i>ℓ</i> = 0.02/1.575 = 1.3%. The sum is 5.4%, which is ±0.10 × 10<sup>11</sup> N m<sup>−2</sup>.',
        ],
        ans: '<i>Y</i> = (1.90 ± 0.10) × 10<sup>11</sup> N m<sup>−2</sup>',
      },

      { t: 'part', title: 'Young’s modulus by Searle’s method: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> Young’s modulus of the wire is (1.90 ± 0.10) × 10<sup>11</sup> N m<sup>−2</sup>, close to the value for steel.',
      },
      {
        t: 'p',
        html: '<b>Precautions.</b><br>• Never exceed the elastic limit; add and remove loads gently.<br>• Use a long, kink-free wire, and keep the dead load on so it is always taut.<br>• Take the diameter at several places and in two perpendicular directions, because a wire is never perfectly uniform.<br>• Turn the screw in the same direction each time you centre the bubble, so that backlash of the screw does not enter.<br>• Average the loading and unloading readings.',
      },
      {
        t: 'p',
        html: '<b>Errors.</b> Δ<i>Y</i>/<i>Y</i> = Δ<i>m</i>/<i>m</i> + Δ<i>L</i>/<i>L</i> + 2Δ<i>d</i>/<i>d</i> + Δ<i>ℓ</i>/<i>ℓ</i>. The diameter enters squared, so its error has weight 2, and a diameter of only 0.5 mm read to 0.01 mm already gives 4%. The diameter dominates, followed by the extension; the load and the length hardly matter. That is why the diameter is measured at several places.',
      },

      { t: 'part', title: 'Young’s modulus by Searle’s method: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>The reference wire is not a second wire under test.</b> It cancels temperature changes and sag of the support, which lengthen both wires alike.',
          '<b>The extension is read on the micrometer screw</b>, not on a length scale. The length <i>L</i> is read on the metre scale.',
          '<b>Which graph?</b> Load against extension is a straight line through the origin until the elastic limit, then it bends and the extension grows faster. If extension is plotted against load, <i>Y</i> = 4<i>gL</i>/(π<i>d</i><sup>2</sup> × slope).',
          '<b>Scaling.</b> For the same load, doubling the diameter divides the extension by 4 and doubling the length doubles it. Doubling the load doubles it too.',
        ],
      },

      // ───────────────────── Experiment 4: surface tension, capillary rise ─────────────────────
      { t: 'part', title: 'Surface tension by capillary rise: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To measure the surface tension <i>T</i> of water by capillary rise, and to see how a detergent changes it.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> Water wets clean glass and climbs the inside of a fine tube. The surface of the liquid pulls on the wall along a circle of length 2π<i>r</i>, and the vertical part of that pull holds up the raised column.',
      },
      {
        t: 'deriv',
        kicker: 'Height of capillary rise',
        steps: [
          {
            eq: 'upward pull = 2π<i>r</i> · <i>T</i> cos <i>θ</i>',
            why: 'Surface tension acts along the liquid surface. Where the surface meets the wall at angle <i>θ</i> (the angle of contact), its component along the tube is <i>T</i> cos <i>θ</i> per unit length of the circle of contact.',
          },
          {
            eq: 'weight = π<i>r</i><sup>2</sup><i>h</i><sub>e</sub><i>ρg</i>',
            why: 'The raised liquid, taken as a cylinder of radius <i>r</i> and effective height <i>h</i><sub>e</sub>, has weight <i>ρg</i> times its volume.',
          },
          {
            eq: '<i>T</i> = <i>rh</i><sub>e</sub><i>ρg</i>/(2 cos <i>θ</i>)',
            why: 'Equate the pull to the weight and solve for <i>T</i>. For the same tube and liquid, <i>h</i><sub>e</sub> = 2<i>T</i> cos <i>θ</i>/(<i>rρg</i>) rises as the tube gets finer.',
          },
          {
            eq: '<i>h</i><sub>e</sub> = <i>h</i> + <i>r</i>/3',
            why: 'The microscope reads <i>h</i> up to the lowest point of the meniscus. For <i>θ</i> = 0 the meniscus is a hemisphere, and the liquid above its lowest point has volume π<i>r</i><sup>3</sup> − (2/3)π<i>r</i><sup>3</sup> = (1/3)π<i>r</i><sup>3</sup> = π<i>r</i><sup>2</sup>(<i>r</i>/3), which is a cylinder of extra height <i>r</i>/3.',
          },
          {
            eq: '<i>T</i> = <i>r</i>(<i>h</i> + <i>r</i>/3)<i>ρg</i>/(2 cos <i>θ</i>)',
            why: 'For water on clean glass <i>θ</i> is close to zero, so cos <i>θ</i> = 1 and <i>T</i> = <i>r</i>(<i>h</i> + <i>r</i>/3)<i>ρg</i>/2.',
          },
        ],
      },
      {
        t: 'formula',
        kicker: 'Surface tension (capillary rise)',
        main: '<i>T</i> = <i>r</i>(<i>h</i> + <i>r</i>/3)<i>ρg</i>/(2 cos <i>θ</i>)<br><i>h</i><sub>e</sub> = <i>h</i> + <i>r</i>/3 = 2<i>T</i> cos <i>θ</i>/(<i>rρg</i>)',
        legend: [
          '<i>T</i> = surface tension of the liquid',
          '<i>r</i> = radius of the bore of the tube',
          '<i>h</i> = height of the lowest point of the meniscus above the free surface',
          '<i>h</i><sub>e</sub> = effective height, with the liquid in the meniscus included',
          '<i>ρ</i> = density of the liquid',
          '<i>g</i> = acceleration due to gravity',
          '<i>θ</i> = angle of contact',
        ],
        note: 'Water on clean glass has <i>θ</i> ≈ 0. For <i>θ</i> > 90°, as for mercury, cos <i>θ</i> is negative and the liquid is pushed down.',
      },

      { t: 'part', title: 'Surface tension by capillary rise: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A clean glass capillary tube of uniform fine bore (radius about 0.3 to 0.5 mm), a beaker of water, a pointer (a bent needle on a stand), a clamp, a travelling microscope with a vertical scale, and some liquid detergent.',
      },
      { t: 'fig', id: 'p12-15-01-d6' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          '<b>Clean the tube</b> and rinse it with clean water, so that water wets it completely. A greasy tube gives a larger angle of contact and a wrong answer. Handle the thin glass gently, because broken ends are sharp.',
          '<b>Mount it.</b> Clamp the tube vertically with its lower end a few centimetres under the water, and wait for the column to settle.',
          '<b>Read <i>h</i>.</b> Focus the microscope cross-wire on the lowest point of the meniscus and read the vertical scale. Set the pointer so that its tip just touches the water surface in the beaker (the tip meets its reflection), focus the cross-wire on the tip, and read again. The difference is <i>h</i>.',
          '<b>Measure <i>r</i>.</b> Mark the tube where the meniscus stood, break it there, and measure the inner diameter at the break with the microscope in two perpendicular directions. The radius is half of the mean.',
          '<b>Detergent.</b> Repeat with water to which a few drops of detergent have been added, using the same tube cleaned again and rinsed.',
        ],
      },

      { t: 'part', title: 'Surface tension by capillary rise: observations and calculation' },
      {
        t: 'table',
        title: 'Travelling microscope readings, bore diameter 0.70 mm',
        head: ['Liquid', 'Pointer tip (cm)', 'Meniscus (cm)', 'h (cm)'],
        rows: [
          ['Water', '3.712', '7.842', '4.130'],
          ['Water with detergent', '3.712', '5.752', '2.040'],
        ],
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (experiment data)',
        q: 'Work out the surface tension of water and of the detergent solution. Take ρ = 1000 kg m<sup>−3</sup>, <i>g</i> = 9.8 m s<sup>−2</sup>, <i>θ</i> = 0, and the bore diameter 0.70 mm to ±0.01 mm.',
        steps: [
          '<b>Radius.</b> <i>r</i> = 0.70/2 = 0.350 mm = 3.50 × 10<sup>−4</sup> m, and <i>r</i>/3 = 1.17 × 10<sup>−4</sup> m = 0.0117 cm.',
          '<b>Water.</b> <i>h</i><sub>e</sub> = 4.130 + 0.012 = 4.142 cm = 4.142 × 10<sup>−2</sup> m. So <i>T</i> = (3.50 × 10<sup>−4</sup>)(4.142 × 10<sup>−2</sup>)(1000)(9.8)/2 = 0.1421/2 = 0.0710 N m<sup>−1</sup>.',
          '<b>Detergent solution.</b> <i>h</i><sub>e</sub> = 2.040 + 0.012 = 2.052 cm = 2.052 × 10<sup>−2</sup> m. So <i>T</i> = (3.50 × 10<sup>−4</sup>)(2.052 × 10<sup>−2</sup>)(1000)(9.8)/2 = 0.0704/2 = 0.0352 N m<sup>−1</sup>.',
          '<b>Check by another route.</b> Put <i>T</i> = 0.0710 N m<sup>−1</sup> into <i>h</i><sub>e</sub> = 2<i>T</i>/(<i>rρg</i>) = 2(0.0710)/(3.50 × 10<sup>−4</sup> × 1000 × 9.8) = 4.14 × 10<sup>−2</sup> m, which matches the measured 4.142 cm. The ratio of the two heights, 2.052/4.142 = 0.495, equals the ratio of the two tensions, 0.0352/0.0710 = 0.496, as it should for the same tube, density and angle.',
          '<b>Error.</b> Δ<i>T</i>/<i>T</i> = Δ<i>r</i>/<i>r</i> + Δ<i>h</i>/<i>h</i> = 0.01/0.70 + 0.002/4.130 = 1.4% + 0.05% = 1.5%, which is ±0.0011 N m<sup>−1</sup> for water.',
        ],
        ans: '<i>T</i> (water) = (0.0710 ± 0.0011) N m<sup>−1</sup>; <i>T</i> (detergent solution) ≈ 0.035 N m<sup>−1</sup>, about half',
      },

      { t: 'part', title: 'Surface tension by capillary rise: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The surface tension of water at room temperature is about 0.071 N m<sup>−1</sup>. Detergent halves it in this solution. Detergent molecules gather at the surface and reduce the surface tension, while the water still wets the clean glass (<i>θ</i> stays near zero), so the rise falls in proportion to <i>T</i>.',
      },
      {
        t: 'p',
        html: '<b>Precautions.</b><br>• The tube must be clean, of uniform bore, and vertical.<br>• Measure the radius at the level of the meniscus, not at the other end of the tube.<br>• Touch the pointer to the free surface without pushing it in, and keep the water still.<br>• Read <i>h</i> to the lowest point of the meniscus, and add <i>r</i>/3.<br>• Keep the temperature the same for both liquids.',
      },
      {
        t: 'p',
        html: '<b>Errors.</b> <i>T</i> ∝ <i>rh</i>, so Δ<i>T</i>/<i>T</i> = Δ<i>r</i>/<i>r</i> + Δ<i>h</i>/<i>h</i>, each with weight 1. The height is read to 0.001 cm out of about 4 cm, but the radius is only 0.35 mm and is measured to 0.005 mm, so the radius dominates. The <i>r</i>/3 term changes <i>T</i> by only 0.3%.',
      },

      { t: 'part', title: 'Surface tension by capillary rise: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Finer tube, higher rise.</b> <i>h</i> ∝ 1/<i>r</i>, and <i>h</i> ∝ <i>T</i> cos <i>θ</i>/<i>ρ</i>. Halve both <i>r</i> and <i>T</i> and the height is unchanged.',
          '<b>Mercury falls.</b> Its angle of contact with glass is about 140°, so cos <i>θ</i> is negative and the level inside the tube is below the outside level.',
          '<b>A tilted tube</b> carries the liquid further along the tube, but the vertical height is the same.',
          '<b>Detergent</b> lowers <i>T</i>, so the capillary rise is smaller. It does not lower the density, and on clean glass the angle stays near zero.',
        ],
      },

      // ───────────────────── Experiment 5: viscosity, terminal velocity ─────────────────────
      { t: 'part', title: 'Viscosity by terminal velocity: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the coefficient of viscosity <i>η</i> of a viscous liquid, such as glycerine, from the terminal velocity of a falling sphere.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> A sphere released in a liquid speeds up until three forces balance: its weight down, and the buoyancy and the viscous drag up. After that it falls at a steady terminal velocity. The drag on a small sphere moving slowly is given by Stokes’ law, 6π<i>ηrv</i>.',
      },
      {
        t: 'deriv',
        kicker: 'Terminal velocity of a sphere',
        steps: [
          {
            eq: 'weight <i>W</i> = (4/3)π<i>r</i><sup>3</sup><i>ρg</i>',
            why: 'The sphere has radius <i>r</i> and density <i>ρ</i>.',
          },
          {
            eq: 'buoyancy <i>U</i> = (4/3)π<i>r</i><sup>3</sup><i>σg</i>',
            why: 'Archimedes: the weight of the displaced liquid, of density <i>σ</i>.',
          },
          {
            eq: 'drag <i>F</i> = 6π<i>ηrv</i>',
            why: 'Stokes’ law, valid for slow, smooth flow past a sphere far from any wall.',
          },
          {
            eq: '<i>W</i> = <i>U</i> + 6π<i>ηrv</i><sub>t</sub>',
            why: 'At terminal velocity <i>v</i><sub>t</sub> the acceleration is zero, so the net force is zero.',
          },
          {
            eq: '<i>η</i> = 2<i>r</i><sup>2</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i>/(9<i>v</i><sub>t</sub>)',
            why: 'Substitute, cancel π<i>r</i>, and solve: (4/3)π<i>r</i><sup>3</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i> = 6π<i>ηrv</i><sub>t</sub> gives <i>v</i><sub>t</sub> = 2<i>r</i><sup>2</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i>/(9<i>η</i>).',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Is Stokes’ law allowed?</b> It needs a small Reynolds number, 2<i>rσv</i><sub>t</sub>/<i>η</i> ≪ 1. A small steel ball in glycerine satisfies this easily (the worked example below gives about 0.04). The ball also reaches <i>v</i><sub>t</sub> within about 2 ms, so the upper mark need only be a few centimetres below the surface.',
      },
      {
        t: 'formula',
        kicker: 'Viscosity (terminal velocity)',
        main: '<i>v</i><sub>t</sub> = 2<i>r</i><sup>2</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i>/(9<i>η</i>)<br><i>η</i> = 2<i>r</i><sup>2</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i>/(9<i>v</i><sub>t</sub>)',
        legend: [
          '<i>r</i> = radius of the sphere',
          '<i>ρ</i> = density of the sphere',
          '<i>σ</i> = density of the liquid',
          '<i>g</i> = acceleration due to gravity',
          '<i>v</i><sub>t</sub> = terminal velocity',
          '<i>η</i> = coefficient of viscosity',
        ],
        note: 'Stokes’ law: Reynolds number well below 1, sphere far from the walls. If <i>σ</i> > <i>ρ</i> the sphere rises.',
      },

      { t: 'part', title: 'Viscosity by terminal velocity: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A tall, wide, transparent glass jar of glycerine (about 1 m tall), identical steel balls of diameter about 2 mm, a screw gauge, a stop-watch, a metre scale, two rubber bands as marks, a short glass tube to guide the balls, and a thermometer.',
      },
      { t: 'fig', id: 'p12-15-01-d7' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          '<b>Diameter.</b> Measure the diameter of several balls with the screw gauge and correct the mean for the zero error.',
          '<b>Marks.</b> Put the upper mark A a few centimetres below the surface and the lower mark B about 40 cm below it. Measure AB with the metre scale. Wipe up any glycerine you spill, because it makes the floor slippery.',
          '<b>Drop.</b> Wet each ball in glycerine first so no air bubble clings to it. Drop it through the guide tube so that it falls along the axis of the jar, away from the wall.',
          '<b>Time.</b> Start the stop-watch as the ball passes A and stop it as it passes B, keeping your eye level with each mark. Wait for the liquid to be still before the next ball.',
          '<b>Record</b> the temperature, and take the densities of steel and glycerine from a table.',
        ],
      },

      { t: 'part', title: 'Viscosity by terminal velocity: observations and calculation' },
      {
        t: 'table',
        title: 'Five steel balls in glycerine at 25 °C, AB = 40.0 cm, zero error of the screw gauge −0.01 mm',
        head: ['Ball', 'Diameter reading (mm)', 'Time from A to B (s)'],
        rows: [
          ['1', '1.99', '26.8'],
          ['2', '1.99', '26.5'],
          ['3', '2.00', '27.0'],
          ['4', '1.99', '26.6'],
          ['5', '1.98', '26.9'],
        ],
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (experiment data)',
        q: 'Find <i>η</i> for glycerine and check that Stokes’ law applies. Take the density of steel as 7800 kg m<sup>−3</sup>, of glycerine as 1260 kg m<sup>−3</sup>, and <i>g</i> = 9.8 m s<sup>−2</sup>.',
        steps: [
          '<b>Radius.</b> The mean reading is 1.99 mm. The zero error is −0.01 mm, so <i>d</i> = 1.99 − (−0.01) = 2.00 mm and <i>r</i> = 1.00 × 10<sup>−3</sup> m.',
          '<b>Speed.</b> The mean time is (26.8 + 26.5 + 27.0 + 26.6 + 26.9)/5 = 26.76 s, so <i>v</i><sub>t</sub> = 0.400/26.76 = 1.495 × 10<sup>−2</sup> m s<sup>−1</sup>.',
          '<b>Viscosity.</b> <i>ρ</i> − <i>σ</i> = 7800 − 1260 = 6540 kg m<sup>−3</sup>. So <i>η</i> = 2(1.00 × 10<sup>−3</sup>)<sup>2</sup>(6540)(9.8)/(9 × 1.495 × 10<sup>−2</sup>) = 0.1282/0.1345 = 0.953 Pa s.',
          '<b>Check by balancing forces.</b> The net downward force on the ball is (4/3)π<i>r</i><sup>3</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i> = 4.189 × 10<sup>−9</sup> × 6540 × 9.8 = 2.685 × 10<sup>−4</sup> N. The drag is 6π<i>ηrv</i><sub>t</sub> = 18.85 × <i>η</i> × 10<sup>−3</sup> × 1.495 × 10<sup>−2</sup> = 2.818 × 10<sup>−4</sup> <i>η</i> N for <i>η</i> in Pa s. Equating the two gives <i>η</i> = 0.953 Pa s.',
          '<b>Is Stokes’ law valid?</b> The Reynolds number is 2<i>rσv</i><sub>t</sub>/<i>η</i> = 2(1.00 × 10<sup>−3</sup>)(1260)(1.495 × 10<sup>−2</sup>)/0.953 = 0.040, far below 1.',
          '<b>Error.</b> <i>η</i> ∝ <i>r</i><sup>2</sup><i>t</i>/<i>s</i>, so Δ<i>η</i>/<i>η</i> = 2Δ<i>d</i>/<i>d</i> + Δ<i>t</i>/<i>t</i> + Δ<i>s</i>/<i>s</i> = 2(0.01/2.00) + 0.2/26.76 + 0.1/40.0 = 1.0% + 0.75% + 0.25% = 2.0%. Here 0.2 s is the reaction time of the person with the stop-watch, and the densities are taken from tables with no error counted.',
        ],
        ans: '<i>η</i> = (0.95 ± 0.02) Pa s at 25 °C',
      },

      { t: 'part', title: 'Viscosity by terminal velocity: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The coefficient of viscosity of glycerine at 25 °C is about 0.95 Pa s, in agreement with the tabulated value.',
      },
      {
        t: 'p',
        html: '<b>Precautions.</b><br>• Keep the jar wide compared with the ball and drop the ball along the axis. The walls drag the liquid and slow the ball, and then <i>η</i> comes out too large.<br>• Remove air bubbles from the ball’s surface.<br>• Keep the temperature steady. The viscosity of glycerine falls by several per cent for each degree it warms.<br>• Use small balls, so that the Reynolds number stays far below 1.<br>• Time only between the marks, after the ball has reached its terminal velocity.',
      },
      {
        t: 'p',
        html: '<b>Errors.</b> <i>η</i> ∝ <i>r</i><sup>2</sup>, so the radius has weight 2 (the same reason as the diameter in Searle’s experiment). The time of a fall of about 27 s is read to about 0.2 s, so the stop-watch is the other main error.',
      },

      { t: 'part', title: 'Viscosity by terminal velocity: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b><i>v</i><sub>t</sub> ∝ <i>r</i><sup>2</sup>.</b> Doubling the radius of the ball multiplies the terminal speed by 4.',
          '<b>Buoyancy counts.</b> The drag at terminal speed equals the weight minus the buoyancy, not the weight. The factor is (<i>ρ</i> − <i>σ</i>). If the liquid is denser than the sphere, the sphere rises at 2<i>r</i><sup>2</sup>(<i>σ</i> − <i>ρ</i>)<i>g</i>/(9<i>η</i>).',
          '<b><i>v</i><sub>t</sub> ∝ 1/<i>η</i>.</b> A thinner (warmer) liquid lets the ball fall faster.',
          '<b>Stokes’ law is for slow, smooth flow.</b> A large, fast ball makes a turbulent wake and the formula fails.',
        ],
      },

      // ───────────────────── Experiment 6: resonance tube ─────────────────────
      { t: 'part', title: 'Speed of sound by resonance tube: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the speed of sound in air at room temperature with a tuning fork and a tube closed at one end by water.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> A fork sounds over the mouth of the tube. When the air column has just the right length, a standing wave forms and the sound becomes much louder. The water surface is a closed end, where the air cannot move: a displacement node. The mouth is an antinode, but the air just outside the mouth also moves, so the antinode lies a distance <i>e</i> beyond the mouth. This <i>e</i> is the end correction, about 0.6<i>r</i> for a tube of radius <i>r</i>.',
      },
      {
        t: 'deriv',
        kicker: 'Resonance lengths and the speed of sound',
        steps: [
          {
            eq: '<i>L</i><sub>1</sub> + <i>e</i> = <i>λ</i>/4',
            why: 'First resonance: a node at the water and an antinode at the effective mouth is a quarter of a wavelength.',
          },
          {
            eq: '<i>L</i><sub>2</sub> + <i>e</i> = 3<i>λ</i>/4',
            why: 'Second resonance: the next standing wave with a node at the water and an antinode at the mouth has three quarters of a wavelength in the column.',
          },
          {
            eq: '<i>λ</i> = 2(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>)',
            why: 'Subtract: <i>L</i><sub>2</sub> − <i>L</i><sub>1</sub> = <i>λ</i>/2. The end correction <i>e</i> cancels.',
          },
          {
            eq: '<i>v</i> = <i>fλ</i> = 2<i>f</i>(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>)',
            why: 'The frequency <i>f</i> of the fork is known.',
          },
          {
            eq: '<i>e</i> = (<i>L</i><sub>2</sub> − 3<i>L</i><sub>1</sub>)/2',
            why: 'From <i>L</i><sub>2</sub> + <i>e</i> = 3(<i>L</i><sub>1</sub> + <i>e</i>).',
          },
        ],
      },
      {
        t: 'formula',
        kicker: 'Speed of sound (resonance tube)',
        main: '<i>λ</i> = 2(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>)<br><i>v</i> = <i>fλ</i> = 2<i>f</i>(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>)<br><i>e</i> = (<i>L</i><sub>2</sub> − 3<i>L</i><sub>1</sub>)/2',
        legend: [
          '<i>L</i><sub>1</sub> = length of the air column at the first resonance',
          '<i>L</i><sub>2</sub> = length of the air column at the second resonance',
          '<i>f</i> = frequency of the tuning fork',
          '<i>λ</i> = wavelength of the sound in air',
          '<i>e</i> = end correction',
        ],
        note: 'The end correction is about 0.6<i>r</i>. Near room temperature <i>v</i> rises by about 0.61 m s<sup>−1</sup> for each °C, so <i>v</i><sub>0</sub> ≈ <i>v</i><sub><i>t</i></sub> − 0.61<i>t</i>.',
      },

      { t: 'part', title: 'Speed of sound by resonance tube: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A vertical glass tube about 1 m long, joined by rubber tubing to a water reservoir so the water level can be raised and lowered, a metre scale along the tube, two tuning forks of known frequency (for example 512 Hz and 384 Hz), a rubber pad, and a thermometer.',
      },
      { t: 'fig', id: 'p12-15-01-d8' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          '<b>Set up.</b> Fix the tube vertically and support the tube and the reservoir firmly so neither can topple. Raise the water level to near the top.',
          '<b>First resonance.</b> Strike the fork on the rubber pad (not on a hard surface) and hold it just above the open end, clear of the glass. Lower the water level slowly until the sound is loudest, and read the length of the air column. Find the position twice, once lowering and once raising the level, and take the mean as <i>L</i><sub>1</sub>.',
          '<b>Second resonance.</b> Keep lowering the level to the next loud position, about three times <i>L</i><sub>1</sub>, and find <i>L</i><sub>2</sub> in the same way.',
          '<b>Repeat</b> with a second fork.',
          '<b>Temperature.</b> Note the room temperature at the start and at the end.',
        ],
      },

      { t: 'part', title: 'Speed of sound by resonance tube: observations and calculation' },
      {
        t: 'table',
        title: 'Resonance lengths at 20 °C',
        head: ['Fork (Hz)', 'L1 (cm)', 'L2 (cm)', 'L2 − L1 (cm)', 'λ (cm)', 'v (m/s)'],
        rows: [
          ['512', '15.6', '49.1', '33.5', '67.0', '343.0'],
          ['384', '21.1', '65.8', '44.7', '89.4', '343.3'],
        ],
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (experiment data)',
        q: 'Find the speed of sound at 20 °C and at 0 °C, and the end correction. The positions of loudest sound are uncertain by ±0.2 cm each.',
        steps: [
          '<b>Wavelength and speed.</b> For 512 Hz, <i>λ</i> = 2(49.1 − 15.6) = 67.0 cm and <i>v</i> = 512 × 0.670 = 343.0 m s<sup>−1</sup>. For 384 Hz, <i>λ</i> = 2(65.8 − 21.1) = 89.4 cm and <i>v</i> = 384 × 0.894 = 343.3 m s<sup>−1</sup>. The mean is 343.2 m s<sup>−1</sup> at 20 °C.',
          '<b>End correction.</b> For 512 Hz, <i>e</i> = (49.1 − 3 × 15.6)/2 = 1.15 cm. For 384 Hz, <i>e</i> = (65.8 − 3 × 21.1)/2 = 1.25 cm. The mean is 1.2 cm, which is 0.6<i>r</i> for a tube of radius 2.0 cm (a bore of 4.0 cm).',
          '<b>At 0 °C.</b> <i>v</i><sub>0</sub> = 343.2 − 0.61 × 20 = 331.0 m s<sup>−1</sup>.',
          '<b>Check by another route.</b> Using <i>L</i><sub>1</sub> and <i>e</i> directly, <i>v</i> = 4<i>f</i>(<i>L</i><sub>1</sub> + <i>e</i>) = 4 × 512 × (0.156 + 0.0115) = 343.0 m s<sup>−1</sup>, the same value. Using <i>L</i><sub>1</sub> alone, with no end correction, would give 4 × 512 × 0.156 = 319 m s<sup>−1</sup>, which is 7% too low.',
          '<b>Error.</b> <i>v</i> = 2<i>f</i>(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>), so Δ<i>v</i>/<i>v</i> = Δ<i>f</i>/<i>f</i> + Δ(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>)/(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>). The fork’s frequency is taken as exact. The difference of two lengths is uncertain by 0.4 cm, so Δ<i>v</i>/<i>v</i> = 0.4/33.5 = 1.2%, which is ±4 m s<sup>−1</sup>.',
        ],
        ans: '<i>v</i> = (343 ± 4) m s<sup>−1</sup> at 20 °C, which is 331 m s<sup>−1</sup> at 0 °C; <i>e</i> ≈ 1.2 cm',
      },

      { t: 'part', title: 'Speed of sound by resonance tube: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The speed of sound in air at 20 °C is (343 ± 4) m s<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Precautions.</b><br>• Strike the fork gently on the rubber pad. A hard blow adds overtones and can damage the fork.<br>• Keep the tube vertical, and keep the fork at the same height for both resonances.<br>• Approach each resonance from above and from below, and average, because the ear cannot judge the loudest point closely.<br>• Use the two resonances together, so that the end correction cancels.',
      },
      {
        t: 'p',
        html: '<b>Errors.</b> The main error is the judgement of the loudest point. It enters twice, through <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub>, and the result depends on their difference. A longer difference (a lower-frequency fork) gives a smaller fractional error.',
      },

      { t: 'part', title: 'Speed of sound by resonance tube: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b><i>λ</i> = 2(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>), not 4<i>L</i><sub>1</sub>.</b> The resonant lengths are <i>λ</i>/4 − <i>e</i>, 3<i>λ</i>/4 − <i>e</i>, 5<i>λ</i>/4 − <i>e</i>. Successive resonances are <i>λ</i>/2 apart.',
          '<b>Temperature.</b> A warmer day gives a larger <i>v</i> and so a longer <i>λ</i> for the same fork. Both resonant lengths increase, and <i>L</i><sub>2</sub> shifts three times as much as <i>L</i><sub>1</sub>.',
          '<b>Higher frequency, shorter lengths.</b> The speed does not depend on the fork, but <i>λ</i> = <i>v</i>/<i>f</i> does.',
          '<b>Node and antinode.</b> The closed (water) end is a displacement node, and a pressure antinode. The open end is a displacement antinode.',
        ],
      },

      // ───────────────────── Experiment 7: specific heat by mixtures ─────────────────────
      { t: 'part', title: 'Specific heat by mixtures: aim and principle' },
      {
        t: 'p',
        html: '<b>Aim.</b> To find the specific heat capacity of a solid and of a liquid by the method of mixtures.',
      },
      {
        t: 'p',
        html: '<b>Principle.</b> When a hot body is dropped into a cooler one inside an insulated vessel, the heat lost by the hot body is gained by the cold bodies, provided no heat escapes and nothing changes state. The heat to change the temperature of a mass <i>m</i> of specific heat <i>c</i> by Δ<i>T</i> is <i>mc</i>Δ<i>T</i>.',
      },
      {
        t: 'deriv',
        kicker: 'Heat balance in the calorimeter',
        steps: [
          {
            eq: 'heat lost by the solid = <i>m</i><sub>s</sub><i>c</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>)',
            why: 'The solid cools from <i>T</i><sub>1</sub> to the final temperature <i>T</i>.',
          },
          {
            eq: 'heat gained = (<i>m</i><sub>c</sub><i>c</i><sub>c</sub> + <i>m</i><sub>w</sub><i>c</i><sub>w</sub>)(<i>T</i> − <i>T</i><sub>2</sub>)',
            why: 'The calorimeter and stirrer (mass <i>m</i><sub>c</sub>, specific heat <i>c</i><sub>c</sub>) and the water (mass <i>m</i><sub>w</sub>, specific heat <i>c</i><sub>w</sub> = 4186 J kg<sup>−1</sup> K<sup>−1</sup>) warm from <i>T</i><sub>2</sub> to <i>T</i>.',
          },
          {
            eq: '<i>c</i><sub>s</sub> = (<i>m</i><sub>c</sub><i>c</i><sub>c</sub> + <i>m</i><sub>w</sub><i>c</i><sub>w</sub>)(<i>T</i> − <i>T</i><sub>2</sub>)/(<i>m</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>))',
            why: 'Equate the two heats and solve. Writing <i>W</i> = <i>m</i><sub>c</sub><i>c</i><sub>c</sub>/<i>c</i><sub>w</sub> (the water equivalent of the calorimeter) turns the bracket into (<i>m</i><sub>w</sub> + <i>W</i>)<i>c</i><sub>w</sub>.',
          },
          {
            eq: '<i>c</i><sub>ℓ</sub> = [<i>m</i><sub>s</sub><i>c</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>)/(<i>T</i> − <i>T</i><sub>2</sub>) − <i>m</i><sub>c</sub><i>c</i><sub>c</sub>]/<i>m</i><sub>ℓ</sub>',
            why: 'For an unknown liquid, drop a solid of known specific heat into it. The liquid (mass <i>m</i><sub>ℓ</sub>) replaces the water in the heat gained, and the same equation is solved for <i>c</i><sub>ℓ</sub>.',
          },
        ],
      },
      {
        t: 'formula',
        kicker: 'Specific heat (method of mixtures)',
        main: '<i>c</i><sub>s</sub> = (<i>m</i><sub>c</sub><i>c</i><sub>c</sub> + <i>m</i><sub>w</sub><i>c</i><sub>w</sub>)(<i>T</i> − <i>T</i><sub>2</sub>)/(<i>m</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>))<br><i>c</i><sub>ℓ</sub> = [<i>m</i><sub>s</sub><i>c</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>)/(<i>T</i> − <i>T</i><sub>2</sub>) − <i>m</i><sub>c</sub><i>c</i><sub>c</sub>]/<i>m</i><sub>ℓ</sub>',
        legend: [
          '<i>m</i><sub>s</sub> = mass of the hot solid',
          '<i>c</i><sub>s</sub> = specific heat of the solid',
          '<i>m</i><sub>c</sub> = mass of the calorimeter with stirrer',
          '<i>c</i><sub>c</sub> = specific heat of the calorimeter metal',
          '<i>m</i><sub>w</sub> = mass of the water',
          '<i>c</i><sub>w</sub> = specific heat of water, 4186 J kg<sup>−1</sup> K<sup>−1</sup>',
          '<i>T</i><sub>1</sub> = temperature of the hot solid',
          '<i>T</i><sub>2</sub> = initial temperature of the calorimeter and contents',
          '<i>T</i> = final temperature of the mixture',
          '<i>m</i><sub>ℓ</sub> = mass of the liquid',
          '<i>c</i><sub>ℓ</sub> = specific heat of the liquid',
        ],
        note: 'The water equivalent of the calorimeter is <i>W</i> = <i>m</i><sub>c</sub><i>c</i><sub>c</sub>/<i>c</i><sub>w</sub>. The solid must not dissolve in, or react with, the liquid.',
      },

      { t: 'part', title: 'Specific heat by mixtures: apparatus and procedure' },
      {
        t: 'p',
        html: '<b>Apparatus.</b> A copper calorimeter with a stirrer of the same metal, standing in an insulating jacket of felt or wool, with a lid; a steam heater; the solid, in pieces on a thread; a thermometer of least count 0.1 °C; a balance; water and the liquid (cooking oil).',
      },
      { t: 'fig', id: 'p12-15-01-d9' },
      {
        t: 'proc',
        title: 'Procedure',
        steps: [
          '<b>Masses.</b> Weigh the dry calorimeter with its stirrer to find <i>m</i><sub>c</sub>. Add enough water to cover the solid, and weigh again to find <i>m</i><sub>w</sub>. Weigh the solid to find <i>m</i><sub>s</sub>.',
          '<b>Heat the solid.</b> Hang it by a thread in the steam heater until the thermometer there is steady, and read <i>T</i><sub>1</sub>. Handle the hot heater and solid with tongs or the thread, since steam and hot metal burn.',
          '<b>Start temperature.</b> Stir the water gently and read <i>T</i><sub>2</sub>. Choose <i>T</i><sub>2</sub> below room temperature by about as much as the final temperature will be above it.',
          '<b>Mix.</b> Lift the solid out, drop it quickly into the water without splashing, and put the lid on. Stir gently and read the highest steady temperature <i>T</i>.',
          '<b>Liquid.</b> Repeat with the liquid in the calorimeter and a solid of known specific heat (copper pieces).',
        ],
      },

      { t: 'part', title: 'Specific heat by mixtures: observations and calculation' },
      {
        t: 'table',
        title: 'Two runs, one copper calorimeter (c = 385 J kg⁻¹ K⁻¹), room temperature about 32 °C',
        head: ['Quantity', 'Unknown solid in water', 'Copper in unknown liquid'],
        rows: [
          ['Mass of calorimeter with stirrer (g)', '60.0', '60.0'],
          ['Mass of water or liquid (g)', '150.0', '120.0'],
          ['Mass of hot solid (g)', '120.0', '150.0'],
          ['Temperature of hot solid, T1 (°C)', '99.0', '99.0'],
          ['Start temperature, T2 (°C)', '27.0', '27.0'],
          ['Final temperature, T (°C)', '37.2', '40.0'],
        ],
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (experiment data)',
        q: 'Find the specific heat of the unknown solid. Take <i>c</i><sub>c</sub> = 385 J kg<sup>−1</sup> K<sup>−1</sup> and <i>c</i><sub>w</sub> = 4186 J kg<sup>−1</sup> K<sup>−1</sup>, and estimate the error. Each thermometer reading is uncertain by ±0.1 °C and each mass by ±0.1 g.',
        steps: [
          '<b>Heat capacities.</b> <i>m</i><sub>c</sub><i>c</i><sub>c</sub> = 0.0600 × 385 = 23.1 J K<sup>−1</sup> and <i>m</i><sub>w</sub><i>c</i><sub>w</sub> = 0.1500 × 4186 = 627.9 J K<sup>−1</sup>. Together they make 651.0 J K<sup>−1</sup>.',
          '<b>Temperature changes.</b> <i>T</i> − <i>T</i><sub>2</sub> = 37.2 − 27.0 = 10.2 K and <i>T</i><sub>1</sub> − <i>T</i> = 99.0 − 37.2 = 61.8 K.',
          '<b>Specific heat.</b> Heat gained = 651.0 × 10.2 = 6640 J. So <i>c</i><sub>s</sub> = 6640/(0.1200 × 61.8) = 6640/7.416 = 895 J kg<sup>−1</sup> K<sup>−1</sup>.',
          '<b>Check with the water equivalent.</b> <i>W</i> = 60.0 × 385/4186 = 5.52 g, so the effective mass of water is 155.52 g. Then <i>c</i><sub>s</sub> = 155.52 × 4.186 × 10.2/(120.0 × 61.8) = 0.8954 J g<sup>−1</sup> K<sup>−1</sup> = 895 J kg<sup>−1</sup> K<sup>−1</sup>.',
          '<b>Error.</b> Δ(<i>T</i> − <i>T</i><sub>2</sub>)/(<i>T</i> − <i>T</i><sub>2</sub>) = 0.2/10.2 = 2.0%, because a difference of two readings is uncertain by 0.2 K. Δ(<i>T</i><sub>1</sub> − <i>T</i>)/(<i>T</i><sub>1</sub> − <i>T</i>) = 0.2/61.8 = 0.3%. The mass of the solid gives 0.1/120.0 = 0.1%, and the heat capacity of the water and calorimeter about 0.1%. The sum is 2.4%, which is ±22 J kg<sup>−1</sup> K<sup>−1</sup>.',
        ],
        ans: '<i>c</i><sub>s</sub> = (8.95 ± 0.22) × 10<sup>2</sup> J kg<sup>−1</sup> K<sup>−1</sup>, close to aluminium',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (experiment data)',
        q: 'In the second run, 150.0 g of copper at 99.0 °C is dropped into 120.0 g of cooking oil in the same calorimeter. Find the specific heat of the oil.',
        steps: [
          '<b>Heat lost by the copper.</b> <i>m</i><sub>s</sub><i>c</i><sub>s</sub> = 0.1500 × 385 = 57.75 J K<sup>−1</sup>. The copper falls by 99.0 − 40.0 = 59.0 K, so it gives up 57.75 × 59.0 = 3407 J.',
          '<b>Heat gained by the calorimeter.</b> 23.1 × (40.0 − 27.0) = 23.1 × 13.0 = 300 J.',
          '<b>Heat gained by the oil.</b> 3407 − 300 = 3107 J, for a rise of 13.0 K in 0.1200 kg. So <i>c</i><sub>ℓ</sub> = 3107/(0.1200 × 13.0) = 3107/1.56 = 1.99 × 10<sup>3</sup> J kg<sup>−1</sup> K<sup>−1</sup>.',
          '<b>Check by the formula.</b> <i>c</i><sub>ℓ</sub> = [57.75 × 59.0/13.0 − 23.1]/0.1200 = (262.1 − 23.1)/0.1200 = 1.99 × 10<sup>3</sup> J kg<sup>−1</sup> K<sup>−1</sup>.',
        ],
        ans: '<i>c</i><sub>ℓ</sub> ≈ 2.0 × 10<sup>3</sup> J kg<sup>−1</sup> K<sup>−1</sup>',
      },

      { t: 'part', title: 'Specific heat by mixtures: result, precautions and errors' },
      {
        t: 'p',
        html: '<b>Result.</b> The solid has a specific heat of about 8.95 × 10<sup>2</sup> J kg<sup>−1</sup> K<sup>−1</sup> and the cooking oil about 2.0 × 10<sup>3</sup> J kg<sup>−1</sup> K<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Precautions.</b><br>• Move the solid into the calorimeter quickly, because it cools in the air, and shake off any water it carries from the heater.<br>• Insulate the calorimeter, keep its lid on and polish its outside to reduce heat loss.<br>• Start below room temperature and finish above it by about the same amount, so that the heat gained from the room while the mixture is cooler than the room roughly equals the heat lost to it afterwards.<br>• Use enough water to cover the solid, and stir gently so the temperature is uniform.<br>• Read the highest steady temperature.',
      },
      {
        t: 'p',
        html: '<b>Errors.</b> In <i>c</i><sub>s</sub> ∝ (heat capacity)(<i>T</i> − <i>T</i><sub>2</sub>)/(<i>m</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>)) each factor has weight 1. The small rise <i>T</i> − <i>T</i><sub>2</sub> has the largest fractional error, so use enough solid and not too much water to make the rise 8 K or more.',
      },

      { t: 'part', title: 'Specific heat by mixtures: exam traps' },
      {
        t: 'mistakes',
        items: [
          '<b>The calorimeter takes heat too.</b> Leaving out <i>m</i><sub>c</sub><i>c</i><sub>c</sub> (its water equivalent) makes the answer for the solid too small.',
          '<b>Both differences are positive.</b> Use <i>T</i><sub>1</sub> − <i>T</i> for the cooling solid and <i>T</i> − <i>T</i><sub>2</sub> for the warming contents. The final temperature lies between <i>T</i><sub>2</sub> and <i>T</i><sub>1</sub>.',
          '<b>Heat loss acts in opposite ways.</b> A leak to the surroundings lowers <i>T</i>. This makes the specific heat of the solid come out too small, and the specific heat of the liquid come out too large.',
          '<b>No change of state, no reaction.</b> The solid must not dissolve in the liquid, and nothing may boil off, or <i>mc</i>Δ<i>T</i> does not account for all the heat.',
        ],
      },

      // ───────────────────── Practice and MCQ ─────────────────────
      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A uniform metre scale of mass 100 g is balanced on a knife edge at the 40.0 cm mark. A 50.0 g standard mass hangs at the 10.0 cm mark and the unknown object at the 70.0 cm mark, with the 0 cm end on the left. Find the mass of the object. What would <i>m</i> = <i>Ma</i>/<i>b</i> give?',
            a: '16.7 g. Torques about the edge: the standard mass is 30.0 cm to the left, so 50.0 × 30.0 = 1500 g cm anticlockwise. The scale’s weight acts at the 50.0 cm mark, 10.0 cm to the right: 100 × 10.0 = 1000 g cm clockwise. The object is 30.0 cm to the right: 30.0<i>m</i>. So 1500 = 1000 + 30.0<i>m</i> and <i>m</i> = 500/30.0 = 16.7 g. Check by centre of mass: 100 × 50 + 50 × 10 + 70<i>m</i> = 40(150 + <i>m</i>) gives 30<i>m</i> = 500 again. The formula <i>m</i> = <i>Ma</i>/<i>b</i> = 50.0 × 30.0/30.0 would give 50.0 g, which is wrong because the knife edge is not at the centre of gravity.',
          },
          {
            q: '[JEE Main] In Searle’s experiment a wire of length 2.00 m and diameter 0.400 mm is stretched by an added load of 1.50 kg, and the extension is 1.17 mm. The load is known to ±1 g, the length to ±0.1 cm, the diameter to ±0.010 mm and the extension to ±0.010 mm. Take <i>g</i> = 9.8 m s<sup>−2</sup>. Find <i>Y</i> and the percentage error in it, and name the measurement that dominates it.',
            a: '<i>Y</i> = 4<i>mgL</i>/(π<i>d</i><sup>2</sup><i>ℓ</i>) = 4(1.50)(9.8)(2.00)/[π(0.400 × 10<sup>−3</sup>)<sup>2</sup>(1.17 × 10<sup>−3</sup>)] = 117.6/(5.88 × 10<sup>−10</sup>) = 2.00 × 10<sup>11</sup> N m<sup>−2</sup>. Check: stress = 14.7/(1.257 × 10<sup>−7</sup>) = 1.170 × 10<sup>8</sup> N m<sup>−2</sup> and strain = 1.17 × 10<sup>−3</sup>/2.00 = 5.85 × 10<sup>−4</sup>, ratio 2.00 × 10<sup>11</sup>. Error: 1/1500 + 0.1/200 + 2(0.010/0.400) + 0.010/1.17 = 0.07% + 0.05% + 5.0% + 0.85% = 6.0%. So <i>Y</i> = (2.00 ± 0.12) × 10<sup>11</sup> N m<sup>−2</sup>. The diameter dominates (5.0 of the 6.0%) because it enters squared.',
          },
          {
            q: '[JEE Main] Water of surface tension 0.072 N m<sup>−1</sup> and density 1000 kg m<sup>−3</sup> rises in a clean capillary tube of bore diameter 0.60 mm. Take <i>θ</i> = 0 and <i>g</i> = 9.8 m s<sup>−2</sup>. (a) Find the effective rise <i>h</i><sub>e</sub>. (b) With detergent, <i>T</i> falls to 0.036 N m<sup>−1</sup>. What is the new effective rise? (c) What height <i>h</i> would a microscope read for the water, to the lowest point of the meniscus?',
            a: '(a) <i>h</i><sub>e</sub> = 2<i>T</i>/(<i>rρg</i>) = 2(0.072)/(3.0 × 10<sup>−4</sup> × 1000 × 9.8) = 0.144/2.94 = 4.90 cm. (b) <i>h</i><sub>e</sub> is proportional to <i>T</i> for the same tube, so it halves to 2.45 cm. (c) <i>h</i> = <i>h</i><sub>e</sub> − <i>r</i>/3 = 4.898 cm − 0.010 cm = 4.89 cm, since <i>r</i>/3 = 0.10 mm. Check: <i>T</i> = <i>r</i>(<i>h</i> + <i>r</i>/3)<i>ρg</i>/2 = 3.0 × 10<sup>−4</sup> × 0.04898 × 9800/2 = 0.072 N m<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] A glass bead of radius 1.50 mm and density 2500 kg m<sup>−3</sup> falls through an oil of density 900 kg m<sup>−3</sup> at a steady 1.30 cm s<sup>−1</sup>. Take <i>g</i> = 9.8 m s<sup>−2</sup>. (a) Find the viscosity of the oil and check that Stokes’ law is valid. (b) At what speed would the same bead fall through an oil of the same density but viscosity 0.30 Pa s?',
            a: '(a) <i>η</i> = 2<i>r</i><sup>2</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i>/(9<i>v</i><sub>t</sub>) = 2(1.5 × 10<sup>−3</sup>)<sup>2</sup>(1600)(9.8)/(9 × 0.013) = 0.07056/0.117 = 0.603 Pa s. Check by forces: the net weight is (4/3)π<i>r</i><sup>3</sup>(<i>ρ</i> − <i>σ</i>)<i>g</i> = 2.217 × 10<sup>−4</sup> N and 6π<i>rv</i><sub>t</sub> = 3.676 × 10<sup>−4</sup> N per Pa s, which gives 0.603 Pa s. The Reynolds number is 2(1.5 × 10<sup>−3</sup>)(900)(0.013)/0.603 = 0.058, far below 1, so Stokes’ law applies. (b) <i>v</i><sub>t</sub> ∝ 1/<i>η</i>, so <i>v</i><sub>t</sub> = 1.30 × (0.603/0.30) = 2.6 cm s<sup>−1</sup>. The Reynolds number rises to about 0.12, still small.',
          },
          {
            q: '[JEE Main] A 480 Hz fork gives resonances in a closed tube when the air column is 17.0 cm and 53.0 cm long. Find the speed of sound, the end correction, and the length of the third resonance.',
            a: '<i>λ</i> = 2(53.0 − 17.0) = 72.0 cm, so <i>v</i> = 480 × 0.720 = 346 m s<sup>−1</sup>. <i>e</i> = (<i>L</i><sub>2</sub> − 3<i>L</i><sub>1</sub>)/2 = (53.0 − 51.0)/2 = 1.0 cm. The third resonance is <i>λ</i>/2 further on: 53.0 + 36.0 = 89.0 cm, which is 5<i>λ</i>/4 − <i>e</i> = 90.0 − 1.0 cm. Check: 4<i>f</i>(<i>L</i><sub>1</sub> + <i>e</i>) = 4 × 480 × 0.180 = 346 m s<sup>−1</sup>. The speed corresponds to a temperature near 25 °C.',
          },
          {
            q: '[JEE Main] A copper calorimeter of mass 80.0 g (<i>c</i> = 385 J kg<sup>−1</sup> K<sup>−1</sup>) holds 100.0 g of water at 24.0 °C. A 150.0 g metal block at 99.0 °C is dropped in, and the temperature rises to 32.5 °C. Take the specific heat of water as 4186 J kg<sup>−1</sup> K<sup>−1</sup> and neglect heat losses. Find the specific heat of the metal and the water equivalent of the calorimeter.',
            a: 'Heat capacity of calorimeter and water = 0.0800 × 385 + 0.1000 × 4186 = 30.8 + 418.6 = 449.4 J K<sup>−1</sup>. Heat gained = 449.4 × (32.5 − 24.0) = 449.4 × 8.5 = 3820 J. The block falls by 99.0 − 32.5 = 66.5 K, so <i>c</i> = 3820/(0.1500 × 66.5) = 3820/9.975 = 383 J kg<sup>−1</sup> K<sup>−1</sup>, about 3.8 × 10<sup>2</sup> (brass). The water equivalent is <i>W</i> = 80.0 × 385/4186 = 7.36 g. Check: (100.0 + 7.36) g × 4.186 J g<sup>−1</sup> K<sup>−1</sup> = 449.4 J K<sup>−1</sup>, the same.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The amplitude of a lightly damped pendulum, with drag proportional to speed, halves every 100 s. What fraction of its initial energy is left after 200 s?',
        opts: [
          { label: '1/4', nudge: '<b>(A)</b> is the fraction left after 100 s. After 200 s the amplitude has halved twice.' },
          { label: '1/16', nudge: null },
          { label: '1/8', nudge: '<b>(C)</b> has no basis: the energy falls by the same factor, 1/4, in each 100 s.' },
          { label: '1/2', nudge: '<b>(D)</b> is the fraction of the amplitude left after 100 s, not of the energy after 200 s.' },
        ],
        correct: 1,
        solution: 'Energy ∝ <i>A</i><sup>2</sup>. In 200 s the amplitude falls to 1/4 of its starting value (halved twice), so the energy falls to (1/4)<sup>2</sup> = 1/16.',
      },
      {
        t: 'mcq',
        q: 'In Searle’s experiment the percentage errors in the load, the length, the diameter and the extension are 0.5%, 0.2%, 1.5% and 3.0%. The percentage error in Young’s modulus is:',
        opts: [
          { label: '4.3%', nudge: '<b>(A)</b> adds the errors in quadrature. For a maximum error the fractional errors are added.' },
          { label: '5.2%', nudge: '<b>(B)</b> counts the diameter once. <i>Y</i> contains <i>d</i><sup>2</sup>, so its error counts twice.' },
          { label: '6.7%', nudge: null },
          { label: '9.7%', nudge: '<b>(D)</b> doubles the extension error as well. Only the diameter is squared.' },
        ],
        correct: 2,
        solution: '<i>Y</i> = 4<i>mgL</i>/(π<i>d</i><sup>2</sup><i>ℓ</i>), so Δ<i>Y</i>/<i>Y</i> = 0.5 + 0.2 + 2(1.5) + 3.0 = 6.7%. The diameter counts twice and the extension once.',
      },
      {
        t: 'mcq',
        q: 'Water rises 6.0 cm in a clean capillary tube. The same tube is replaced by one of half the radius, and a detergent halves the surface tension. Assuming the angle of contact and the density are unchanged, the water now rises:',
        opts: [
          { label: '12 cm', nudge: '<b>(A)</b> allows for the finer tube but not for the halved surface tension.' },
          { label: '3.0 cm', nudge: '<b>(B)</b> allows for the surface tension but not for the finer tube.' },
          { label: '24 cm', nudge: '<b>(C)</b> would need <i>h</i> ∝ 1/<i>r</i><sup>2</sup> and no change of <i>T</i>. The rise goes as <i>T</i>/<i>r</i>.' },
          { label: '6.0 cm', nudge: null },
        ],
        correct: 3,
        solution: '<i>h</i> = 2<i>T</i> cos <i>θ</i>/(<i>rρg</i>) is proportional to <i>T</i>/<i>r</i>. Halving both <i>T</i> and <i>r</i> leaves <i>T</i>/<i>r</i> unchanged, so the rise stays 6.0 cm.',
      },
      {
        t: 'mcq',
        q: 'The same steel sphere falls at terminal velocity in two liquids of equal viscosity. The first has density ρ/4 and the second ρ/2, where ρ is the density of the sphere. The ratio of the terminal velocities, first to second, is:',
        opts: [
          { label: '3/2', nudge: null },
          { label: '2/3', nudge: '<b>(B)</b> is the inverse. The liquid of lower density gives less buoyancy, so the sphere falls faster in it.' },
          { label: '1/2', nudge: '<b>(C)</b> compares the liquid densities directly. The speed depends on the difference <i>ρ</i> − <i>σ</i>.' },
          { label: '3', nudge: '<b>(D)</b> divides (<i>ρ</i> − <i>σ</i><sub>1</sub>) by <i>σ</i><sub>1</sub>. The correct denominator is <i>ρ</i> − <i>σ</i><sub>2</sub>.' },
        ],
        correct: 0,
        solution: '<i>v</i><sub>t</sub> ∝ (<i>ρ</i> − <i>σ</i>) at fixed <i>η</i> and <i>r</i>. The first liquid has <i>ρ</i> − <i>ρ</i>/4 = 3<i>ρ</i>/4 and the second <i>ρ</i> − <i>ρ</i>/2 = <i>ρ</i>/2, so the ratio is (3/4)/(1/2) = 3/2.',
      },
      {
        t: 'mcq',
        q: 'In a resonance tube experiment with a 400 Hz fork the first two resonances occur at 20.0 cm and 62.0 cm. The speed of sound is:',
        opts: [
          { label: '320 m s<sup>−1</sup>', nudge: '<b>(A)</b> is 4<i>fL</i><sub>1</sub>, which ignores the end correction.' },
          { label: '331 m s<sup>−1</sup>', nudge: '<b>(B)</b> is 4<i>fL</i><sub>2</sub>/3, which also ignores the end correction.' },
          { label: '336 m s<sup>−1</sup>', nudge: null },
          { label: '168 m s<sup>−1</sup>', nudge: '<b>(D)</b> is <i>f</i>(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>), which is <i>fλ</i>/2. The wavelength is twice the difference.' },
        ],
        correct: 2,
        solution: 'λ = 2(<i>L</i><sub>2</sub> − <i>L</i><sub>1</sub>) = 2(0.420) = 0.840 m, so <i>v</i> = <i>fλ</i> = 400 × 0.840 = 336 m s<sup>−1</sup>. The end correction is (62.0 − 60.0)/2 = 1.0 cm and cancels in the difference.',
      },
      {
        t: 'mcq',
        q: 'A solid heated to 99 °C is dropped into water in an insulated calorimeter, and some heat leaks to the room. The specific heat of the solid is worked out from the heat balance, with the measured final temperature and all masses correct. The value obtained is:',
        opts: [
          { label: 'too high', nudge: '<b>(A)</b> is the direction for a liquid, not for the solid. For the solid, the leak lowers the temperature rise used in the numerator.' },
          { label: 'too low', nudge: null },
          { label: 'correct, because the heat lost by the solid equals the heat gained', nudge: '<b>(C)</b> holds only without a leak. With a leak the solid loses more than the contents gain.' },
          { label: 'too high or too low according to where the heat leaks from', nudge: '<b>(D)</b> No: a leak from any part lowers the final temperature, and that lowers the answer.' },
        ],
        correct: 1,
        solution: 'A leak lowers the final temperature <i>T</i>. In <i>c</i><sub>s</sub> = (heat capacity)(<i>T</i> − <i>T</i><sub>2</sub>)/(<i>m</i><sub>s</sub>(<i>T</i><sub>1</sub> − <i>T</i>)) the numerator gets smaller and the denominator larger, so <i>c</i><sub>s</sub> comes out too low. For an unknown liquid the same leak makes <i>c</i><sub>ℓ</sub> too high.',
      },
    ],
  },
];
