import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Additional Topics C to E, word for word from the Class 12
 * Physics Master Reference: C Magnetic Circuits (pp. 379 to 382; its practice
 * answers sit at the top of p. 382), D Neutral Points and Field Superposition
 * (pp. 382 to 385; its practice and answers sit at the top of p. 385) and
 * E Magnetic Shielding and Hysteresis Energy (pp. 385 to 388). Each addendum
 * prints its own practice problems and answers, which are its Practice part.
 * These pages print no drawings. The closing line "End of Addendum — Chapter 5:
 * Magnetism and Matter" (p. 388) is layout and is not copied.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 379–382 ─────────────────────────
  {
    n: 'C',
    title: 'Magnetic Circuits',
    extra: true,
    kalam: 'The chapter mentions magnetic shielding and electromagnet cores but never develops the quantitative framework.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter mentions magnetic shielding and electromagnet cores but never develops the quantitative framework. Magnetic circuits fill this gap: they are the exact analogue of electric circuits, replacing voltage by magnetomotive force (MMF), current by magnetic flux, and resistance by reluctance. Every electromagnet, transformer, and electric motor is designed using this framework. The method settles air-gap electromagnet problems quickly.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'defgrid',
        title: 'Magnetic circuit analogue — Electric circuit / Magnetic circuit',
        rows: [
          { k: 'EMF ℰ (V)', v: 'MMF ℱ (A-turns)' },
          { k: 'Current <i>I</i> (A)', v: 'Flux Φ (Wb)' },
          { k: 'Resistance <i>R</i> (Ω)', v: 'Reluctance ℛ (H<sup>−1</sup>)' },
          { k: 'Ohm’s law: <i>I</i> = ℰ/<i>R</i>', v: 'Ohm’s law: Φ = ℱ/ℛ' },
          { k: 'Resistors in series: <i>R</i> = ∑ <i>R</i><sub><i>i</i></sub>', v: 'Reluctances in series: ℛ = ∑ ℛ<sub><i>i</i></sub>' },
          { k: 'Resistors in parallel: 1/<i>R</i> = ∑ 1/<i>R</i><sub><i>i</i></sub>', v: 'Reluctances in parallel: 1/ℛ = ∑ 1/ℛ<sub><i>i</i></sub>' },
        ],
      },
      { t: 'p', html: '<b>Key formulas:</b>' },
      {
        t: 'formula',
        kicker: 'MMF produced by a coil of <i>N</i> turns carrying current <i>I</i>',
        main: 'ℱ = <i>NI</i>',
        legend: [],
        note: '(unit: ampere-turns, A).',
      },
      {
        t: 'formula',
        kicker: 'Reluctance of a magnetic path',
        main: 'ℛ = <i>l</i>/(<i>μA</i>)',
        legend: ['<i>l</i> = length', '<i>A</i> = cross-section', '<i>μ</i> = permeability, μ<sub>0</sub><i>μ</i><sub>r</sub>'],
        note: '(unit: H<sup>−1</sup>, henry<sup>−1</sup>).',
      },
      {
        t: 'formula',
        kicker: 'For a toroid (donut shape)',
        main: 'Φ = μ<sub>0</sub><i>μ</i><sub>r</sub><i>NIA</i>/(2π<i>r</i>)',
        legend: ['<i>r</i> = mean radius', '<i>A</i> = cross-section', '<i>N</i> = turns carrying current <i>I</i>'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'For a toroid with an air gap of length <i>δ</i>',
        main: 'Φ = <i>NI</i>/[(2π<i>r</i>)/(μ<sub>0</sub><i>μ</i><sub>r</sub><i>A</i>) + <i>δ</i>/(μ<sub>0</sub><i>A</i>)] = <i>NI</i>/(ℛ<sub>core</sub> + ℛ<sub>gap</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Units check.</b> ℱ = <i>NI</i> has units of A. Reluctance ℛ = <i>l</i>/(<i>μA</i>) has units m/(H m<sup>−1</sup> × m<sup>2</sup>) = H<sup>−1</sup>. Since 1 H = V s/A, and flux Φ is in Wb = V s: Φℛ = (V s) × H<sup>−1</sup> = (V s) × (A/(V s)) = A = ℱ. Consistent with Φ = ℱ/ℛ.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Toroid with Air Gap',
        q: 'A toroidal iron core has a mean radius <i>r</i> = 8.0 cm, cross-sectional area <i>A</i> = 3.0 cm<sup>2</sup>, and <i>N</i> = 300 turns. The iron has relative permeability <i>μ</i><sub>r</sub> = 600. A narrow saw-cut creates an air gap of length <i>δ</i> = 1.0 mm. Find the current required to produce a flux of Φ = 3.0 × 10<sup>−5</sup> Wb in the gap.',
        steps: [
          '<b>Step 1 — Calculate the two reluctances.</b><br>Iron path length: <i>l</i><sub>i</sub> = 2π<i>r</i> = 2π(0.080) = 0.503 m.<br>Iron reluctance:<br>ℛ(iron) = <i>l</i><sub>i</sub>/(μ<sub>0</sub><i>μ</i><sub>r</sub><i>A</i>) = 0.503/[(4π × 10<sup>−7</sup>)(600)(3.0 × 10<sup>−4</sup>)] = 0.503/(2.26 × 10<sup>−7</sup>) = 2.22 × 10<sup>6</sup> H<sup>−1</sup>.',
          'Air gap reluctance:<br>ℛ<sub>g</sub> = <i>δ</i>/(μ<sub>0</sub><i>A</i>) = 0.001/[(4π × 10<sup>−7</sup>)(3.0 × 10<sup>−4</sup>)] = 0.001/(3.77 × 10<sup>−10</sup>) = 2.65 × 10<sup>6</sup> H<sup>−1</sup>.',
          '<b>Step 2 — Compare.</b> ℛ(gap)/ℛ(iron) ≈ 1.2, so the iron path is not negligible and the two reluctances add in series: ℛ = ℛ(iron) + ℛ(gap) = 2.22 × 10<sup>6</sup> + 2.65 × 10<sup>6</sup> = 4.87 × 10<sup>6</sup> H<sup>−1</sup>.',
          '<b>Step 3 — Apply Ohm’s law for magnetic circuits.</b><br>ℱ = Φℛ = (3.0 × 10<sup>−5</sup>)(4.87 × 10<sup>6</sup>) = 146 A-turns.',
          '<b>Step 4 — Find current.</b><br><i>I</i> = ℱ/<i>N</i> = 146/300 = 0.49 A.',
          '<b>Check.</b> Without the iron (air only) the same path would have ℛ = <i>l</i><sub>i</sub>/(μ<sub>0</sub><i>A</i>) = 1.33 × 10<sup>9</sup> H<sup>−1</sup> and would need 1.33 × 10<sup>9</sup> × 3 × 10<sup>−5</sup>/300 ≈ 133 A, a physically impossible current. The iron core therefore cuts the required MMF by a large factor (about 270 here); with an air gap present the reduction is limited by the gap reluctance, and only a gapless core gives a reduction of about <i>μ</i><sub>r</sub>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Electromagnet Lifting Force — Magnetic Circuit Check',
        q: 'A C-shaped iron core (mean path length <i>l</i> = 30 cm, cross-section <i>A</i> = 4.0 cm<sup>2</sup>, <i>μ</i><sub>r</sub> = 400) has an air gap of <i>δ</i> = 2.0 mm between its pole faces. It is wound with <i>N</i> = 250 turns. Find (a) the reluctance of the magnetic circuit, (b) the flux density in the gap when <i>I</i> = 2.0 A, and (c) the attractive force between the two pole faces across the gap.',
        steps: [
          '(a) Core reluctance:<br>ℛ<sub>c</sub> = <i>l</i>/(μ<sub>0</sub><i>μ</i><sub>r</sub><i>A</i>) = 0.30/[(4π × 10<sup>−7</sup>)(400)(4.0 × 10<sup>−4</sup>)] = 0.30/(2.01 × 10<sup>−7</sup>) = 1.49 × 10<sup>6</sup> H<sup>−1</sup>.',
          'Gap reluctance:<br>ℛ<sub>g</sub> = <i>δ</i>/(μ<sub>0</sub><i>A</i>) = 0.002/[(4π × 10<sup>−7</sup>)(4.0 × 10<sup>−4</sup>)] = 0.002/(5.03 × 10<sup>−10</sup>) = 3.98 × 10<sup>6</sup> H<sup>−1</sup>.',
          'Total reluctance:<br>ℛ = ℛ<sub>c</sub> + ℛ<sub>g</sub> = 1.49 × 10<sup>6</sup> + 3.98 × 10<sup>6</sup> = 5.47 × 10<sup>6</sup> H<sup>−1</sup>.',
          '(b) MMF: ℱ = <i>NI</i> = 250 × 2.0 = 500 A. Flux: Φ = ℱ/ℛ = 500/(5.47 × 10<sup>6</sup>) = 9.14 × 10<sup>−5</sup> Wb.<br>Flux density: <i>B</i> = Φ/<i>A</i> = (9.14 × 10<sup>−5</sup>)/(4.0 × 10<sup>−4</sup>) = 0.229 T.',
          '(c) Force between the pole faces (one face of area <i>A</i>):<br><i>F</i> = <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>) = (0.229)<sup>2</sup>(4.0 × 10<sup>−4</sup>)/[2(4π × 10<sup>−7</sup>)] = (0.0524)(4.0 × 10<sup>−4</sup>)/(2.51 × 10<sup>−6</sup>) = (2.10 × 10<sup>−5</sup>)/(2.51 × 10<sup>−6</sup>) = 8.4 N.',
          '<b>Check.</b> The gap reluctance dominates (about 73% of total), so the flux is limited primarily by the gap. A force of 8.4 N would support a mass of about 0.86 kg. For a larger force, one would reduce the gap length (gap reluctance scales linearly with <i>δ</i>) or increase the cross-section.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A magnetic circuit consists of a ring of mean radius 10 cm and cross-section 1.0 cm<sup>2</sup> made of iron (<i>μ</i><sub>r</sub> = 1000). It has a 0.5 mm air gap. Find the magnetomotive force required to produce a flux of 5.0 × 10<sup>−5</sup> Wb.',
            a: 'Core path <i>l</i> = 2π(0.10) = 0.628 m: ℛ(core) = 0.628/[(4π × 10<sup>−7</sup>)(1000)(1.0 × 10<sup>−4</sup>)] = 5.0 × 10<sup>6</sup> H<sup>−1</sup>. Gap: ℛ(gap) = 0.5 × 10<sup>−3</sup>/[(4π × 10<sup>−7</sup>)(1.0 × 10<sup>−4</sup>)] = 3.98 × 10<sup>6</sup> H<sup>−1</sup>. Total ℛ = 8.98 × 10<sup>6</sup> H<sup>−1</sup>, so ℱ = Φℛ = (5.0 × 10<sup>−5</sup>)(8.98 × 10<sup>6</sup>) ≈ 4.5 × 10<sup>2</sup> A-turns (for example 449 turns at 1 A).',
          },
          {
            q: 'A rectangular magnetic circuit is one loop: two iron legs (20 cm each) in series with a 1.0 mm air gap, all of cross-section 2.0 cm<sup>2</sup> and <i>μ</i><sub>r</sub> = 800. Find the total reluctance.',
            a: 'The two iron legs and the gap form one loop, so the reluctances add in series: ℛ(iron) = 2 × 0.20/[(4π × 10<sup>−7</sup>)(800)(2.0 × 10<sup>−4</sup>)] = 2 × 9.95 × 10<sup>5</sup> = 1.99 × 10<sup>6</sup> H<sup>−1</sup> and ℛ(gap) = 0.001/[(4π × 10<sup>−7</sup>)(2.0 × 10<sup>−4</sup>)] = 3.98 × 10<sup>6</sup> H<sup>−1</sup>, so ℛ = 5.97 × 10<sup>6</sup> H<sup>−1</sup>.',
          },
          {
            q: 'Show that if the air gap is the only significant reluctance in a magnetic circuit, the flux density in the gap is <i>B</i> ≈ μ<sub>0</sub><i>NI</i>/<i>δ</i> (independent of the core cross-section and permeability).',
            a: 'If ℛ(gap) ≫ ℛ(core) then ℛ ≈ ℛ(gap) = <i>δ</i>/(μ<sub>0</sub><i>A</i>), Φ = <i>NI</i>/ℛ = <i>NI</i>μ<sub>0</sub><i>A</i>/<i>δ</i> and <i>B</i> = Φ/<i>A</i> = μ<sub>0</sub><i>NI</i>/<i>δ</i>, independent of <i>A</i> and <i>μ</i><sub>r</sub>.',
          },
          {
            q: 'Two magnetic paths share the same core: a main path with reluctance ℛ<sub>1</sub> and a leakage path with reluctance ℛ<sub>2</sub>. Show that the leakage flux is Φ<sub>leak</sub> = Φ<sub>main</sub> · ℛ<sub>1</sub>/ℛ<sub>2</sub>.',
            a: 'Main path: Φ<sub>1</sub> = ℱ/ℛ<sub>1</sub>; leakage path: Φ<sub>2</sub> = ℱ/ℛ<sub>2</sub>; so Φ<sub>2</sub>/Φ<sub>1</sub> = ℛ<sub>1</sub>/ℛ<sub>2</sub> and Φ(leak) = Φ(main) ℛ<sub>1</sub>/ℛ<sub>2</sub>.',
          },
          {
            q: 'A toroid with no gap has flux Φ<sub>0</sub>. An air gap of length <i>δ</i> is introduced. Show that the new flux is Φ = Φ<sub>0</sub>/(1 + <i>δμ</i><sub>r</sub>/<i>l</i>), where <i>l</i> is the mean path length of the toroid.',
            a: 'ℛ = ℛ<sub>0</sub> + ℛ(gap) = <i>l</i>/(μ<sub>0</sub><i>μ</i><sub>r</sub><i>A</i>) + <i>δ</i>/(μ<sub>0</sub><i>A</i>) = [<i>l</i>/(μ<sub>0</sub><i>μ</i><sub>r</sub><i>A</i>)](1 + <i>μ</i><sub>r</sub><i>δ</i>/<i>l</i>), so Φ = <i>NI</i>/ℛ = Φ<sub>0</sub>/(1 + <i>δμ</i><sub>r</sub>/<i>l</i>). QED.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 382–385 ─────────────────────────
  {
    n: 'D',
    title: 'Neutral Points and Field Superposition',
    extra: true,
    kalam: 'This addendum solves the superposition configurations that the chapter’s single-magnet-plus-Earth setup leaves out.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 Derivation (D) gives the two standard neutral-point configurations (N pole pointing north and south). JEE Advanced goes further: two bar magnets interacting with each other and with Earth’s field, magnets at arbitrary angles, and the “null point” at a specific location relative to two magnets. This addendum solves the superposition configurations that the chapter’s single-magnet-plus-Earth setup leaves out.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Neutral point recipe (field cancellation)',
        steps: [
          'Identify the region where you are looking for the null point.',
          'Write the vector field from each source at that point.',
          'Set the vector sum to zero: <i>B⃗</i><sub>1</sub> + <i>B⃗</i><sub>2</sub> + ⋯ = 0.',
          'Solve for the geometry (distance, angle).',
          'For axial points: use <i>B</i><sub>axial</sub> = (μ<sub>0</sub>/(4π))(2<i>m</i>/<i>r</i><sup>3</sup>).',
          'For equatorial points: use <i>B</i><sub>equat</sub> = (μ<sub>0</sub>/(4π))(<i>m</i>/<i>r</i><sup>3</sup>).',
        ],
      },
      {
        t: 'p',
        html: '<b>Sign convention for directions:</b> On the axial line the dipole field points along <i>m</i> on both sides of the magnet: beyond the N pole it points away from the N pole, and beyond the S pole it points toward the S pole. On the equatorial line, the field points opposite to <i>m</i>.',
      },
      {
        t: 'p',
        html: '<b>Units.</b> <i>m</i> in A m<sup>2</sup>, <i>r</i> in m, <i>B</i> in T. μ<sub>0</sub>/(4π) = 10<sup>−7</sup> H m<sup>−1</sup>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Two Magnets — Null Point on Perpendicular Bisector',
        q: 'Two identical short bar magnets are 20 cm apart on the <i>x</i>-axis, axes along the <i>x</i>-axis, moments in the same direction (N pole of one facing the S pole of the other). Find the points on the perpendicular bisector (the <i>y</i>-axis) where the net field is zero; neglect Earth’s field.',
        steps: [
          'Let each magnet have moment <i>m</i>. At a point (0, <i>y</i>) on the <i>y</i>-axis, each magnet is at distance <i>r</i> = √(<i>d</i><sup>2</sup>/4 + <i>y</i><sup>2</sup>) where <i>d</i> = 0.20 m, and each makes an angle <i>α</i> with the line joining it to the point, where tan <i>α</i> = <i>y</i>/(<i>d</i>/2).',
          'The field from each magnet at the point has two components. Along the line from magnet to point: <i>B</i><sub><i>r</i></sub> = (μ<sub>0</sub>/(4π))(2<i>m</i> cos <i>α</i>/<i>r</i><sup>3</sup>). Perpendicular to this line: <i>B</i><sub><i>α</i></sub> = (μ<sub>0</sub>/(4π))(<i>m</i> sin <i>α</i>/<i>r</i><sup>3</sup>).',
          'The two magnets contribute equally. The <i>x</i>-components (parallel to the magnets’ axes) add; the <i>y</i>-components (along the bisector) cancel by symmetry.',
          'Along the <i>x</i>-direction (parallel to the magnets’ axes, positive to the right) the component of the field from one magnet is <i>B</i><sub><i>r</i></sub> cos <i>α</i> − <i>B</i><sub><i>α</i></sub> sin <i>α</i> = (μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>))(2cos<sup>2</sup><i>α</i> − sin<sup>2</sup><i>α</i>) = (μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>))(3cos<sup>2</sup><i>α</i> − 1).',
          'For two magnets:<br><i>B</i><sub><i>x</i></sub> = 2 · (μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>))(3 cos<sup>2</sup> <i>α</i> − 1) = (μ<sub>0</sub><i>m</i>/(2π<i>r</i><sup>3</sup>))(3 cos<sup>2</sup> <i>α</i> − 1).',
          'Setting <i>B</i><sub><i>x</i></sub> = 0: 3 cos<sup>2</sup> <i>α</i> − 1 = 0 ⇒ cos<sup>2</sup> <i>α</i> = 1/3 ⇒ cos <i>α</i> = 1/√3.<br>Now cos <i>α</i> = (<i>d</i>/2)/<i>r</i> = <i>d</i>/(2<i>r</i>). So <i>d</i>/(2<i>r</i>) = 1/√3 ⇒ <i>r</i> = (√3/2)<i>d</i>.<br>Also sin <i>α</i> = √(1 − 1/3) = √(2/3).<br>And <i>y</i> = <i>r</i> sin <i>α</i> = (√3/2)<i>d</i> · √(2/3) = (√2/2)<i>d</i> = <i>d</i>/√2.',
          'With <i>d</i> = 0.20 m: <i>y</i> = 0.20/√2 = 0.141 m = 14.1 cm from the midpoint on the perpendicular bisector, on either side of the axis (two null points, <i>y</i> = ±<i>d</i>/√2).',
          '<b>Check.</b> At the midpoint (<i>y</i> = 0): cos <i>α</i> = 1, so <i>B</i><sub><i>x</i></sub> = [μ<sub>0</sub><i>m</i>/(2π(<i>d</i>/2)<sup>3</sup>)](3 − 1) = 8μ<sub>0</sub><i>m</i>/(π<i>d</i><sup>3</sup>) > 0. The field is positive (pushing right), so the null points must lie away from the midpoint (|<i>y</i>| > 0). At large <i>y</i>: cos <i>α</i> ≈ 0, so <i>B</i><sub><i>x</i></sub> ≈ −μ<sub>0</sub><i>m</i>/(2π<i>r</i><sup>3</sup>) < 0. The field reverses direction, so a zero exists in between. The result <i>y</i> = <i>d</i>/√2 is in the middle. Reasonable.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Three-Field Null Point — Magnet + Earth + Second Magnet',
        q: 'A short bar magnet (<i>m</i> = 0.80 A m<sup>2</sup>) lies horizontally along the magnetic meridian, N pole pointing north. Earth’s horizontal field is <i>B</i><sub>H</sub> = 0.40 G = 4.0 × 10<sup>−5</sup> T (northward). A second identical magnet is placed <i>d</i> = 10 cm north of the first with its poles reversed (N pole pointing south). Find the point on the line between them where the net horizontal field is zero.',
        steps: [
          'This is an extension of the standard neutral-point problem to two magnets. Place the first magnet (A) at <i>x</i> = 0 with <i>m⃗</i> = +<i>mx̂</i> (N pole north), and the second magnet (B) at <i>x</i> = +<i>d</i> = 0.10 m with <i>m⃗</i> = −<i>mx̂</i> (N pole south). We look for a point <i>x</i> between them where <i>B</i><sub>A</sub> + <i>B</i><sub>B</sub> + <i>B</i><sub>H</sub> = 0.',
          '<b>Why the poles must be reversed.</b> For an ideal dipole the on-axis field points along <i>m</i> at every point on the axis, not only “ahead of” the N pole: a point south of the dipole feels the same field direction as a point north of it. If both magnets pointed north, each would add a field in the +<i>x</i> direction between them, reinforcing Earth’s +<i>x</i> field with no possibility of cancellation. Reversing magnet B makes a null point possible:<br>• Magnet A (<i>m⃗</i> = +<i>mx̂</i>) at <i>x</i> = 0: field at 0 < <i>x</i> < <i>d</i> is <i>B</i><sub>A</sub> = +(μ<sub>0</sub>/(4π))(2<i>m</i>/<i>x</i><sup>3</sup>) (north).<br>• Magnet B (<i>m⃗</i> = −<i>mx̂</i>) at <i>x</i> = <i>d</i>: field at 0 < <i>x</i> < <i>d</i> is <i>B</i><sub>B</sub> = −(μ<sub>0</sub>/(4π))(2<i>m</i>/(<i>d</i> − <i>x</i>)<sup>3</sup>) (south).',
          'Earth’s field <i>B</i><sub>H</sub> points north (the +<i>x</i> direction).',
          'Set the sum to zero:<br>+(μ<sub>0</sub>/(4π))(2<i>m</i>/<i>x</i><sup>3</sup>) − (μ<sub>0</sub>/(4π))(2<i>m</i>/(<i>d</i> − <i>x</i>)<sup>3</sup>) + <i>B</i><sub>H</sub> = 0.<br>2<i>m</i>/<i>x</i><sup>3</sup> − 2<i>m</i>/(<i>d</i> − <i>x</i>)<sup>3</sup> = −4π<i>B</i><sub>H</sub>/μ<sub>0</sub>.',
          'With <i>B</i><sub>H</sub> = 4.0 × 10<sup>−5</sup> T: 4π<i>B</i><sub>H</sub>/μ<sub>0</sub> = 4π(4.0 × 10<sup>−5</sup>)/(4π × 10<sup>−7</sup>) = 4 × 10<sup>−5</sup>/10<sup>−7</sup> = 400 A m<sup>−1</sup>.',
          'The left side: 2<i>m</i>(1/<i>x</i><sup>3</sup> − 1/(<i>d</i> − <i>x</i>)<sup>3</sup>). With <i>m</i> = 0.80 A m<sup>2</sup>: 2(0.80) = 1.6.<br>1.6(1/<i>x</i><sup>3</sup> − 1/(0.10 − <i>x</i>)<sup>3</sup>) = −400.',
          'Cleared of fractions this is a sixth-degree equation in <i>x</i>, so solve it approximately. At the midpoint <i>x</i> = <i>d</i>/2 = 0.05 m the two magnets’ fields would cancel exactly (1/<i>x</i><sup>3</sup> = 1/(<i>d</i> − <i>x</i>)<sup>3</sup> = 8000 m<sup>−3</sup>), so the left side would be 0, not −400. We need 1/<i>x</i><sup>3</sup> < 1/(<i>d</i> − <i>x</i>)<sup>3</sup>, i.e. <i>x</i> > <i>d</i>/2, so write <i>x</i> = <i>d</i>/2 + <i>ε</i> with <i>ε</i> ≪ <i>d</i>/2. Then 1/<i>x</i><sup>3</sup> − 1/(<i>d</i> − <i>x</i>)<sup>3</sup> ≈ −6<i>ε</i>/(<i>d</i>/2)<sup>4</sup> = −6<i>ε</i>/(0.050)<sup>4</sup> = −9.6 × 10<sup>5</sup> <i>ε</i> (in m<sup>−3</sup>). The condition 1.6[1/<i>x</i><sup>3</sup> − 1/(<i>d</i> − <i>x</i>)<sup>3</sup>] = −400 gives 1/<i>x</i><sup>3</sup> − 1/(<i>d</i> − <i>x</i>)<sup>3</sup> = −250 m<sup>−3</sup>, so <i>ε</i> = 250/(9.6 × 10<sup>5</sup>) = 2.6 × 10<sup>−4</sup> m = 0.26 mm and <i>x</i> ≈ 0.0500 + 0.00026 ≈ 0.05026 m.',
          'So the null point lies at <i>x</i> ≈ 5.03 cm from magnet A (equivalently about 4.97 cm from magnet B). At this location <i>B</i>(A) + <i>B</i>(B) = −<i>B</i><sub>H</sub>: the combined axial field of the two magnets exactly cancels Earth’s field.',
          '<b>Check.</b> Each magnet’s own axial field at the midpoint is <i>B</i> = (10<sup>−7</sup>)(1.6)/(0.050)<sup>3</sup> = 1.28 × 10<sup>−3</sup> T = 12.8 G, about 32 times <i>B</i><sub>H</sub> = 0.40 G. The two fields oppose and nearly cancel there, so a field as small as <i>B</i><sub>H</sub> can be balanced only very close to the midpoint, consistent with the null point at <i>x</i> ≈ 5.03 cm from A.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Two identical magnets are placed 30 cm apart on a table with their axes colinear and their N poles facing each other. Find the neutral point on the line between them. (Earth’s field is horizontal, north-south, and the magnets are oriented east-west.)',
            a: 'Between the two like poles (repelling) the fields of the two magnets are opposite on the line. For identical magnets they cancel at the midpoint, <i>x</i> = <i>d</i>/2 = 15 cm from each. The magnets lie east-west, so their fields there are perpendicular to Earth’s horizontal field <i>B</i><sub>H</sub>, which remains: the magnets’ own fields cancel at the midpoint, but the total field does not vanish, so there is no true neutral point on this line.',
          },
          {
            q: 'A bar magnet is placed with its axis along the north-south direction and its N pole pointing north. Show that there are two null points on the east-west line through the magnet’s centre, equidistant from it.',
            a: 'On the east-west line through the centre (the magnet’s equatorial line) the magnet’s field has magnitude μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>) and points opposite to <i>m</i>, i.e. southward, while Earth’s <i>B</i><sub>H</sub> points northward. They cancel at the two points, one on each side of the magnet, where μ<sub>0</sub><i>m</i>/(4π<i>r</i><sup>3</sup>) = <i>B</i><sub>H</sub>.',
          },
          {
            q: 'Three identical magnets are placed at the vertices of an equilateral triangle of side <i>a</i>, all pointing toward the centre. Find the field at the centre. (Neglect Earth’s field.)',
            a: 'The centre lies on the axis of each magnet (<i>r</i> = <i>a</i>/√3 from each). Each contributes an axial field of magnitude (μ<sub>0</sub>/(4π))(2<i>m</i>/<i>r</i><sup>3</sup>) directed toward the centre. The three contributions are equal and 120° apart, so their vector sum is zero.',
          },
          {
            q: 'A short bar magnet is placed at the origin with its axis along the <i>x</i>-direction. A second identical magnet is placed at (0, <i>a</i>) with its axis along the <i>y</i>-direction. Find the null point(s) on the <i>x</i>-axis. (Neglect Earth’s field.)',
            a: 'On the <i>x</i>-axis (<i>y</i> = 0), magnet 2 at (0, <i>a</i>) is not on its own equatorial line (that is <i>y</i> = <i>a</i>). With <i>r</i><sup>2</sup> = <i>x</i><sup>2</sup> + <i>a</i><sup>2</sup>, its field has <i>x</i>-component −3μ<sub>0</sub> <i>m</i> <i>a</i> <i>x</i>/(4π<i>r</i><sup>5</sup>) and <i>y</i>-component μ<sub>0</sub> <i>m</i> (2<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)/(4π<i>r</i><sup>5</sup>). The <i>y</i>-component vanishes only at <i>x</i> = ±√2 <i>a</i>, and there the total <i>x</i>-component (magnet 1 contributes (μ<sub>0</sub>/(4π))(2<i>m</i>/|<i>x</i>|<sup>3</sup>) along +<i>x</i>) is (μ<sub>0</sub><i>m</i>/(4π<i>a</i><sup>3</sup>)) × 0.43 at <i>x</i> = +√2 <i>a</i> and × 0.98 at <i>x</i> = −√2 <i>a</i>, not zero. So there is no null point on the <i>x</i>-axis.',
          },
          {
            q: 'Two bar magnets of moments <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> are placed on the <i>x</i>-axis at <i>x</i> = 0 and <i>x</i> = <i>d</i> respectively, with both N poles pointing in the +<i>x̂</i> direction. Find the point on the <i>x</i>-axis where the net field is zero (neglect Earth’s field).',
            a: 'Both moments point along +<i>x</i>. On the axis of a dipole the field points along <i>m</i> on both sides, so at every point of the <i>x</i>-axis (<i>x</i> < 0, 0 < <i>x</i> < <i>d</i> and <i>x</i> > <i>d</i>) both fields point along +<i>x</i> and add. Hence there is no null point on the <i>x</i>-axis.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 385–388 ─────────────────────────
  {
    n: 'E',
    title: 'Magnetic Shielding and Hysteresis Energy',
    extra: true,
    kalam: 'Topic 03 describes magnetic shielding only qualitatively.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 describes magnetic shielding only qualitatively. It states the hysteresis-loop rule (loop area = energy lost per unit volume per cycle) but uses it in just one practice question. This addendum develops both: the shielding factor of a cylindrical shell in a transverse field, and the hysteresis power-loss formula that drives transformer design.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Magnetic shielding factor for a cylindrical shell (long relative to radius).</b> A long cylindrical shell of inner radius <i>r</i><sub>1</sub>, outer radius <i>r</i><sub>2</sub> and relative permeability <i>μ</i><sub>r</sub> is placed in a field <i>B</i><sub>0</sub> applied perpendicular to its axis (a transverse field). The field in the hollow bore is given exactly by:<br><i>B</i><sub>in</sub>/<i>B</i><sub>0</sub> = 4<i>μ</i><sub>r</sub> <i>r</i><sub>2</sub><sup>2</sup>/[(<i>μ</i><sub>r</sub> + 1)<sup>2</sup> <i>r</i><sub>2</sub><sup>2</sup> − (<i>μ</i><sub>r</sub> − 1)<sup>2</sup> <i>r</i><sub>1</sub><sup>2</sup>].',
      },
      {
        t: 'p',
        html: 'For a thin wall (<i>t</i> = <i>r</i><sub>2</sub> − <i>r</i><sub>1</sub> ≪ <i>r</i><sub>2</sub>) this reduces to <i>B</i><sub>in</sub>/<i>B</i><sub>0</sub> ≈ 1/(1 + <i>μ</i><sub>r</sub> <i>t</i>/(2<i>r</i><sub>2</sub>)). A long open tube gives almost no shielding against a field along its axis, because the tangential component of <i>H</i> is continuous across the wall; axial fields need closed ends or several layers.',
      },
      {
        t: 'formula',
        kicker: 'Hysteresis power loss density',
        main: 'Energy lost per unit volume per cycle = area of <i>B</i>–<i>H</i> loop (J m<sup>−3</sup> per cycle)<br>Power loss density: <i>p</i> = <i>f</i> × (loop area)<br>Total power loss: <i>P</i> = <i>p</i> × <i>V</i> = <i>f</i> × (loop area) × <i>V</i>',
        legend: ['<i>f</i> = the frequency in Hz'],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Cylindrical Magnetic Shield',
        q: 'A long cylindrical tube of inner radius <i>r</i><sub>1</sub> = 3.0 cm, outer radius <i>r</i><sub>2</sub> = 3.5 cm and relative permeability <i>μ</i><sub>r</sub> = 1000 is placed in a transverse field <i>B</i><sub>0</sub> = 50 mT (perpendicular to its axis). Find the field at the centre of the tube.',
        steps: [
          'Use the exact transverse-field formula; only the ratio <i>r</i><sub>1</sub>/<i>r</i><sub>2</sub> = 3.0/3.5 = 6/7 matters: <i>B</i><sub>in</sub>/<i>B</i><sub>0</sub> = 4<i>μ</i><sub>r</sub>/[(<i>μ</i><sub>r</sub> + 1)<sup>2</sup> − (<i>μ</i><sub>r</sub> − 1)<sup>2</sup>(<i>r</i><sub>1</sub>/<i>r</i><sub>2</sub>)<sup>2</sup>] = 4000/[1002001 − 998001(36/49)] = 4000/268775 = 0.0149.',
          'Hence <i>B</i><sub>in</sub> = (0.0149)(50 mT) = 0.74 mT: the field at the centre is reduced by a factor of about 67. A 5 mm wall of iron with <i>μ</i><sub>r</sub> = 1000 attenuates a transverse field by almost two orders of magnitude.',
          '<b>Check.</b> For a thin wall the shielding factor is approximately 1 + <i>μ</i><sub>r</sub> <i>t</i>/(2<i>r</i><sub>2</sub>). Here <i>t</i>/<i>r</i><sub>2</sub> = 0.5/3.5 ≈ 0.14, so the factor is about 1 + 1000(0.143)/2 = 72, i.e. <i>B</i><sub>in</sub> ≈ 0.69 mT, within about 7% of the exact 0.74 mT.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Hysteresis Power Loss',
        q: 'A ferrite core used in a radio frequency transformer has a hysteresis loop that encloses an area equivalent to 200 J m<sup>−3</sup> per cycle. The core volume is <i>V</i> = 1.5 × 10<sup>−6</sup> m<sup>3</sup>. The transformer operates at <i>f</i> = 1.0 MHz. Find the power dissipated as hysteresis loss.',
        steps: [
          '<b>Step 1 — Energy lost per cycle.</b><br><i>W</i><sub>cycle</sub> = (loop area) × <i>V</i> = 200 × 1.5 × 10<sup>−6</sup> = 3.0 × 10<sup>−4</sup> J per cycle.',
          '<b>Step 2 — Power loss.</b><br><i>P</i> = <i>W</i><sub>cycle</sub> × <i>f</i> = (3.0 × 10<sup>−4</sup>)(1.0 × 10<sup>6</sup>) = 300 W.',
          'This is a substantial power loss — 300 W in a small ferrite core. In practice, RF transformers use ferrite cores with very thin hysteresis loops to keep losses low, but at high frequencies even small loop areas cause significant heating. The power loss scales linearly with frequency, which is why switching power supplies (which operate at hundreds of kHz) must use low-loss magnetic materials.',
          '<b>Check.</b> The power density is <i>p</i> = <i>f</i> × (loop area) = 10<sup>6</sup> × 200 = 2 × 10<sup>8</sup> W m<sup>−3</sup>. For a volume of 1.5 × 10<sup>−6</sup> m<sup>3</sup>, this gives 300 W. Correct.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A cylindrical magnetic shield has <i>r</i><sub>1</sub> = 4.0 cm, <i>r</i><sub>2</sub> = 5.0 cm, <i>μ</i><sub>r</sub> = 500. Using the exact formula, find the shielding factor for a transverse field.',
            a: 'Using the exact transverse-field formula, <i>B</i><sub>in</sub>/<i>B</i><sub>0</sub> = 4<i>μ</i><sub>r</sub>/[(<i>μ</i><sub>r</sub> + 1)<sup>2</sup> − (<i>μ</i><sub>r</sub> − 1)<sup>2</sup>(<i>r</i><sub>1</sub>/<i>r</i><sub>2</sub>)<sup>2</sup>] = 4(500)/[(501)<sup>2</sup> − (499)<sup>2</sup>(16/25)] = 2000/91640 = 2.2 × 10<sup>−2</sup>. Shielding factor ≈ 46: the interior field is about 2.2% of the exterior field.',
          },
          {
            q: 'A soft iron core has a hysteresis loop area of 300 J m<sup>−3</sup> per cycle. A transformer using this core operates at 50 Hz with core volume 0.50 m<sup>3</sup>. Find the hysteresis power loss.',
            a: '<i>P</i> = <i>f</i> × (area) × <i>V</i> = 50 × 300 × 0.50 = 7500 W = 7.5 kW. This is the hysteresis loss alone; eddy-current losses add to it, which is why transformer cores are laminated.',
          },
          {
            q: 'A magnetic material has retentivity <i>B</i><sub>r</sub> = 1.0 T and coercivity <i>H</i><sub>c</sub> = 10<sup>4</sup> A m<sup>−1</sup>. Estimate the maximum energy product (<i>BH</i>)<sub>max</sub> (a figure of merit for permanent magnets).',
            a: '(<i>BH</i>)<sub>max</sub> occurs at a point on the demagnetisation curve. For a linear demagnetisation curve, <i>B</i> = <i>B</i><sub>r</sub>(1 − <i>H</i>/<i>H</i><sub>c</sub>), (<i>BH</i>)<sub>max</sub> = <i>B</i><sub>r</sub><i>H</i><sub>c</sub>/4 = (1.0)(10<sup>4</sup>)/4 = 2.5 × 10<sup>3</sup> J m<sup>−3</sup>; an ideal rectangular loop would give <i>B</i><sub>r</sub><i>H</i><sub>c</sub> = 1.0 × 10<sup>4</sup> J m<sup>−3</sup>. Modern Nd-Fe-B magnets achieve (<i>BH</i>)<sub>max</sub> ≈ 400 kJ m<sup>−3</sup>.',
          },
          {
            q: 'Show that the energy stored in the magnetic field of a toroid with air gap is <i>U</i> = (1/(2μ<sub>0</sub>))<i>B</i><sup>2</sup><i>Aδ</i>, where <i>δ</i> is the gap length and <i>A</i> is the cross-section. (Assume <i>μ</i><sub>r</sub><i>δ</i> ≫ <i>l</i>, where <i>l</i> is the core’s mean length.)',
            a: 'Energy density: <i>u</i> = <i>B</i><sup>2</sup>/(2<i>μ</i>). The same <i>B</i> runs through core and gap, so the core’s energy density is smaller by the factor <i>μ</i><sub>r</sub>; the core stores <i>B</i><sup>2</sup><i>Al</i>/(2μ<sub>0</sub><i>μ</i><sub>r</sub>), negligible beside the gap’s when <i>μ</i><sub>r</sub><i>δ</i> ≫ <i>l</i>. Hence <i>U</i> ≈ [<i>B</i><sup>2</sup>/(2μ<sub>0</sub>)] <i>Aδ</i>.',
          },
          {
            q: 'Two magnetic shields of the same material but different thicknesses are nested one inside the other, well separated, in the same field. Show that the shielding factors (approximately) multiply.',
            a: 'For shield 1: <i>B</i><sub>1</sub> = <i>B</i><sub>0</sub>/<i>S</i><sub>1</sub>. For shield 2 (inside shield 1): <i>B</i><sub>2</sub> = <i>B</i><sub>1</sub>/<i>S</i><sub>2</sub> = <i>B</i><sub>0</sub>/(<i>S</i><sub>1</sub><i>S</i><sub>2</sub>). The shielding factors multiply. This is why multi-layer shields are used for sensitive measurements.',
          },
        ],
      },
    ],
  },
];
