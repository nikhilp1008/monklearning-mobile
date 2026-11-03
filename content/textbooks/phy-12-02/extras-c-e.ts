import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Additional Topics C to E, word for word from the Class 12
 * Physics Master Reference: C Partial Dielectrics and Force on Dielectrics
 * (pp. 128 to 132), D Spherical and Cylindrical Capacitors (pp. 132 to 135)
 * and E Coalescing Charged Drops: The n^(2/3) Scaling (pp. 135 to 138; the
 * book raises the 2/3, which a plain-text title cannot). Each addendum prints
 * its own practice problems and answers, which are its Practice part. These
 * pages print no drawings; E's scaling grid is a table block.
 */
export const TOPICS: Topic[] = [
  {
    n: 'C',
    title: 'Partial Dielectrics and Force on Dielectrics',
    extra: true,
    kalam: 'The force pulling a dielectric into a capacitor can be found from the energy perspective.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 covers dielectric insertion when the slab fills the entire gap, with a clear battery-connected versus battery-disconnected table. Two important patterns are only touched on or missing: the partial fill (dielectric inserted only partway) and the force on a dielectric in a capacitor.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Force on a dielectric slab in a capacitor — energy method.</b><br>The force pulling a dielectric into a capacitor can be found from the energy perspective. For a capacitor with the dielectric partially inserted (inserted a length <i>x</i> into plates of width <i>W</i> and length <i>L</i>, with gap <i>d</i>), the capacitance is the sum of two regions in parallel — one with dielectric (ε = <i>K</i>ε<sub>0</sub>) and one without (ε = ε<sub>0</sub>):<br><i>C</i>(<i>x</i>) = (ε<sub>0</sub><i>W</i>/<i>d</i>)[<i>Kx</i> + (<i>L</i> − <i>x</i>)] = (ε<sub>0</sub><i>W</i>/<i>d</i>)[(<i>K</i> − 1)<i>x</i> + <i>L</i>]',
      },
      {
        t: 'p',
        html: 'If the capacitor is <b>isolated</b> (charge <i>Q</i> fixed): <i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>(<i>x</i>)). The force is obtained from the gradient of stored energy:<br><i>F</i> = −d<i>U</i>/d<i>x</i> = −(d/d<i>x</i>)(<i>Q</i><sup>2</sup>/(2<i>C</i>(<i>x</i>))) = +(<i>Q</i><sup>2</sup>/(2<i>C</i><sup>2</sup>)) d<i>C</i>/d<i>x</i>',
      },
      {
        t: 'p',
        html: 'If the capacitor is <b>connected to a battery</b> (voltage <i>V</i> fixed): <i>U</i> = ½<i>C</i>(<i>x</i>)<i>V</i><sup>2</sup>, and the force is<br><i>F</i> = +d<i>U</i>/d<i>x</i> = +(<i>V</i><sup>2</sup>/2) d<i>C</i>/d<i>x</i><br>(the sign is opposite to −d<i>U</i>/d<i>x</i> here because the battery does work <i>V</i> d<i>Q</i> = <i>V</i><sup>2</sup> d<i>C</i>, twice the change in stored energy).',
      },
      {
        t: 'p',
        html: 'In both cases the force is in the direction that increases <i>C</i> (pulls the dielectric in further), since d<i>C</i>/d<i>x</i> > 0.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>Q</i><sup>2</sup>/<i>C</i><sup>2</sup> is in V<sup>2</sup>, and d<i>C</i>/d<i>x</i> is in F/m = C/(V·m). So (<i>Q</i><sup>2</sup>/(2<i>C</i><sup>2</sup>)) d<i>C</i>/d<i>x</i> is in V<sup>2</sup> · C/(V·m) = V·C/m = J/m = N. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Force on a Dielectric in an Isolated Capacitor',
        q: 'A parallel-plate capacitor has square plates of side <i>s</i> = 0.1414 m (area <i>A</i> = <i>s</i><sup>2</sup> = 0.02 m<sup>2</sup>) and plate separation <i>d</i> = 1.0 × 10<sup>−3</sup> m; it is charged to voltage <i>V</i><sub>0</sub> = 100 V and then disconnected from the battery. A dielectric slab of constant <i>K</i> = 4 and thickness <i>d</i> (so it exactly fills the gap) is inserted fully, sliding in along one edge of the square. The capacitor is isolated throughout. Find the force on the dielectric as it is being inserted at the start of insertion (<i>x</i> = 0), assuming the insertion is slow enough to treat charge as fixed.',
        steps: [
          '<b>Step 1 — Capacitance before insertion.</b> <i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i> = (8.85 × 10<sup>−12</sup>)(0.02)/10<sup>−3</sup> = 1.77 × 10<sup>−10</sup> F = 177 pF.<br>Charge on the isolated capacitor: <i>Q</i> = <i>C</i><sub>0</sub><i>V</i><sub>0</sub> = (1.77 × 10<sup>−10</sup>)(100) = 1.77 × 10<sup>−8</sup> C.',
          '<b>Step 2 — Capacitance as a function of insertion depth.</b> The slab fills the gap and slides in along one edge, covering a fraction <i>x</i>′ of the plate area (from 0 to 1). The covered and uncovered strips act as two capacitors in parallel, so<br><i>C</i>(<i>x</i>) = (ε<sub>0</sub><i>A</i>/<i>d</i>)[<i>Kx</i>′ + (1 − <i>x</i>′)]<br>With <i>K</i> = 4:<br><i>C</i>(<i>x</i>) = <i>C</i><sub>0</sub>[1 + (<i>K</i> − 1)<i>x</i>′] = <i>C</i><sub>0</sub>(1 + 3<i>x</i>′)',
          '<b>Step 3 — Force.</b> The energy method requires differentiating with respect to the real physical distance the slab has moved, not the dimensionless fraction <i>x</i>′. The slab enters along an edge of length <i>s</i> = 0.1414 m, so the real insertion distance is <i>x</i> = <i>sx</i>′.<br>From Step 2, <i>C</i>(<i>x</i>) = <i>C</i><sub>0</sub>(1 + 3<i>x</i>′) = <i>C</i><sub>0</sub>(1 + 3<i>x</i>/<i>s</i>), so d<i>C</i>/d<i>x</i> = 3<i>C</i><sub>0</sub>/<i>s</i> (a constant). For the isolated capacitor (<i>Q</i> fixed):<br><i>F</i> = −d<i>U</i>/d<i>x</i> = −(d/d<i>x</i>)(<i>Q</i><sup>2</sup>/(2<i>C</i>(<i>x</i>))) = +(<i>Q</i><sup>2</sup>/(2<i>C</i>(<i>x</i>)<sup>2</sup>)) d<i>C</i>/d<i>x</i><br>At <i>x</i> = 0 (first contact), <i>C</i>(<i>x</i>) = <i>C</i><sub>0</sub>, so:<br><i>F</i> = <i>Q</i><sup>2</sup>/(2<i>C</i><sub>0</sub><sup>2</sup>) · 3<i>C</i><sub>0</sub>/<i>s</i> = 3<i>Q</i><sup>2</sup>/(2<i>C</i><sub>0</sub><i>s</i>)<br>Substituting <i>Q</i> = <i>C</i><sub>0</sub><i>V</i><sub>0</sub>:<br><i>F</i> = 3<i>C</i><sub>0</sub><i>V</i><sub>0</sub><sup>2</sup>/(2<i>s</i>)<br><i>C</i><sub>0</sub> = 1.77 × 10<sup>−10</sup> F,   <i>V</i><sub>0</sub> = 100 V,   <i>s</i> = 0.1414 m<br><i>F</i> = [3(1.77 × 10<sup>−10</sup>)(100)<sup>2</sup>]/[2(0.1414)] = (5.31 × 10<sup>−6</sup>)/0.2828 = 1.88 × 10<sup>−5</sup> N',
          '<b>Direction:</b> The force is positive (into the capacitor), pulling the dielectric in further. When the capacitor is isolated, the dielectric is attracted because inserting it reduces the stored energy — the system “wants” to lower its energy.',
        ],
        ans: '<i>F</i> ≈ 1.9 × 10<sup>−5</sup> N directed into the gap.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Partial Dielectric Fill (Battery Connected)',
        q: 'A parallel-plate capacitor with <i>C</i><sub>0</sub> = 100 pF is connected to a 50 V battery. A dielectric slab of constant <i>K</i> = 5 and area equal to the plate area is inserted to fill half the gap (thickness <i>d</i>/2, leaving the other half air). Find the new capacitance, the charge drawn from the battery, and the change in stored energy.',
        steps: [
          '<b>Step 1 — The capacitor with partial fill.</b> The gap is now two series capacitors: one dielectric-filled of thickness <i>d</i>/2 and one air of thickness <i>d</i>/2. For two dielectrics in series:<br>1/<i>C</i> = 1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub><br><i>C</i><sub>1</sub> = <i>K</i>ε<sub>0</sub><i>A</i>/(<i>d</i>/2) = 2<i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i> = 2<i>KC</i><sub>0</sub><br><i>C</i><sub>2</sub> = ε<sub>0</sub><i>A</i>/(<i>d</i>/2) = 2<i>C</i><sub>0</sub><br>1/<i>C</i> = 1/(2<i>KC</i><sub>0</sub>) + 1/(2<i>C</i><sub>0</sub>) = (1/(2<i>C</i><sub>0</sub>))(1/<i>K</i> + 1) = (<i>K</i> + 1)/(2<i>KC</i><sub>0</sub>)<br><i>C</i> = 2<i>KC</i><sub>0</sub>/(<i>K</i> + 1)',
          '<b>Step 2 — Numbers.</b> <i>K</i> = 5:<br><i>C</i> = 2(5)(100 pF)/(5 + 1) = (1000/6) pF = 166.7 pF',
          '<b>Step 3 — Charge from battery.</b> Battery is connected, so <i>V</i> = 50 V fixed.<br>Initial charge: <i>Q</i><sub>0</sub> = <i>C</i><sub>0</sub><i>V</i> = 100 × 10<sup>−12</sup> × 50 = 5.0 × 10<sup>−9</sup> C.<br>Final charge: <i>Q</i> = <i>CV</i> = 166.7 × 10<sup>−12</sup> × 50 = 8.33 × 10<sup>−9</sup> C.<br>Extra charge drawn: Δ<i>Q</i> = <i>Q</i> − <i>Q</i><sub>0</sub> = 3.33 × 10<sup>−9</sup> C = 3.33 nC.',
          '<b>Step 4 — Energy change.</b> Use <i>U</i> = ½<i>CV</i><sup>2</sup> (battery connected):<br><i>U</i><sub>0</sub> = ½(100 × 10<sup>−12</sup>)(2500) = 1.25 × 10<sup>−7</sup> J.<br><i>U</i> = ½(166.7 × 10<sup>−12</sup>)(2500) = 2.08 × 10<sup>−7</sup> J.<br>Δ<i>U</i> = +8.3 × 10<sup>−8</sup> J = +83 nJ.',
          'Energy increased — the battery did work Δ<i>Q</i> · <i>V</i> = (3.33 × 10<sup>−9</sup>)(50) = 1.67 × 10<sup>−7</sup> J; half of this went into stored energy, and the other half is the work the field does in pulling the slab in (taken up by whatever holds the slab back, or ending as heat if the slab is let go).',
        ],
        ans: '<i>C</i> ≈ 167 pF; Δ<i>Q</i> ≈ 3.3 nC drawn from the battery; Δ<i>U</i> ≈ +83 nJ.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] A capacitor <i>C</i> = 50 μF is connected to a 12 V battery. A dielectric slab with <i>K</i> = 3 is inserted to fill the gap completely. Find the new capacitance and the charge drawn from the battery.',
            a: 'New <i>C</i> = <i>KC</i><sub>0</sub> = 3 × 50 = 150 μF. Initial <i>Q</i><sub>0</sub> = 50 × 10<sup>−6</sup> × 12 = 600 μC. Final <i>Q</i> = 150 × 10<sup>−6</sup> × 12 = 1800 μC. Drawn Δ<i>Q</i> = 1200 μC = 1.2 mC.',
          },
          {
            q: '[JEE Main] A parallel-plate capacitor with square plates of area <i>A</i> = 0.01 m<sup>2</sup> (side 0.10 m) and separation <i>d</i> = 0.5 mm is charged to <i>V</i> = 200 V and disconnected. A dielectric slab (<i>K</i> = 6) is inserted slowly until it exactly fills the gap. Find (a) the initial charge, (b) the final voltage, (c) the change in stored energy, and (d) the force on the dielectric as it enters the gap.',
            a: '(a) <i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i> = (8.85 × 10<sup>−12</sup>)(0.01)/(5 × 10<sup>−4</sup>) = 1.77 × 10<sup>−10</sup> F = 177 pF. <i>Q</i> = <i>C</i><sub>0</sub><i>V</i> = 3.54 × 10<sup>−8</sup> C.<br>(b) <i>V</i> = <i>Q</i>/(<i>KC</i><sub>0</sub>) = <i>V</i><sub>0</sub>/<i>K</i> = 200/6 = 33.3 V.<br>(c) <i>U</i><sub>0</sub> = ½<i>C</i><sub>0</sub><i>V</i><sub>0</sub><sup>2</sup> = 3.54 × 10<sup>−6</sup> J. <i>U</i> = <i>U</i><sub>0</sub>/<i>K</i> = 5.9 × 10<sup>−7</sup> J. Δ<i>U</i> = −2.95 × 10<sup>−6</sup> J (energy decreased).<br>(d) Force at entry: the slab slides in along an edge of length <i>s</i> = √<i>A</i> = 0.10 m, so d<i>C</i>/d<i>x</i> = (<i>K</i> − 1)<i>C</i><sub>0</sub>/<i>s</i> and, with <i>Q</i> fixed, <i>F</i> = (<i>Q</i><sup>2</sup>/(2<i>C</i><sub>0</sub><sup>2</sup>)) d<i>C</i>/d<i>x</i> = (<i>K</i> − 1)<i>C</i><sub>0</sub><i>V</i><sub>0</sub><sup>2</sup>/(2<i>s</i>). Numerically, <i>F</i> = (1.77 × 10<sup>−10</sup>)(4 × 10<sup>4</sup>)(5)/(2 × 0.10) = (3.54 × 10<sup>−5</sup>)/0.20 = 1.77 × 10<sup>−4</sup> N.',
          },
          {
            q: '[JEE Advanced] A capacitor consists of two plates with area <i>A</i>, separation <i>d</i>. The left half of the gap is filled with dielectric <i>K</i><sub>1</sub>, the right half with dielectric <i>K</i><sub>2</sub>. Derive the capacitance. Evaluate for <i>A</i> = 100 cm<sup>2</sup>, <i>d</i> = 2 mm, <i>K</i><sub>1</sub> = 2, <i>K</i><sub>2</sub> = 8.',
            a: 'Side by side: two capacitors in parallel. <i>C</i><sub>1</sub> = <i>K</i><sub>1</sub>ε<sub>0</sub><i>A</i>/(2<i>d</i>), <i>C</i><sub>2</sub> = <i>K</i><sub>2</sub>ε<sub>0</sub><i>A</i>/(2<i>d</i>). <i>C</i> = (<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)ε<sub>0</sub><i>A</i>/(2<i>d</i>). Substituting: <i>C</i> = (2 + 8)(8.85 × 10<sup>−12</sup>)(10<sup>−2</sup>)/(2 × 2 × 10<sup>−3</sup>) = (10)(8.85 × 10<sup>−12</sup>)(10<sup>−2</sup>)/(4 × 10<sup>−3</sup>) = 2.21 × 10<sup>−10</sup> F ≈ 221 pF.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Spherical and Cylindrical Capacitors',
    extra: true,
    kalam: 'The dielectric-filled concentric-sphere problem is a JEE Advanced favourite.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 derives the spherical capacitor formula <i>C</i> = 4πε<sub>0</sub> <i>ab</i>/(<i>b</i> − <i>a</i>) for a vacuum gap but does not extend it to dielectrics or to cylindrical geometry. The dielectric-filled concentric-sphere problem is a JEE Advanced favourite.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Spherical capacitor with dielectric.</b><br>Inner sphere radius <i>a</i> (charge +<i>Q</i>), outer sphere radius <i>b</i> (charge −<i>Q</i>), dielectric of constant <i>K</i> filling the gap <i>a</i> < <i>r</i> < <i>b</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Gauss’s law.</b> For <i>a</i> < <i>r</i> < <i>b</i>, draw a spherical Gaussian surface of radius <i>r</i>. The enclosed charge is +<i>Q</i>, so:<br><i>E</i>(<i>r</i>) · 4π<i>r</i><sup>2</sup> = <i>Q</i>/(ε<sub>0</sub><i>K</i>) ⟹ <i>E</i>(<i>r</i>) = <i>Q</i>/(4πε<sub>0</sub><i>Kr</i><sup>2</sup>)<br>The dielectric reduces the field by factor <i>K</i> at every point in the gap.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Potential difference.</b><br><i>V</i> = −∫<sub><i>b</i></sub><sup><i>a</i></sup> <i>E</i>(<i>r</i>) d<i>r</i> = −∫<sub><i>b</i></sub><sup><i>a</i></sup> <i>Q</i>/(4πε<sub>0</sub><i>Kr</i><sup>2</sup>) d<i>r</i> = (<i>Q</i>/(4πε<sub>0</sub><i>K</i>))(1/<i>a</i> − 1/<i>b</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Capacitance.</b><br><i>C</i> = <i>Q</i>/<i>V</i> = <i>Q</i>/[(<i>Q</i>/(4πε<sub>0</sub><i>K</i>))(1/<i>a</i> − 1/<i>b</i>)] = 4πε<sub>0</sub><i>K</i>/(1/<i>a</i> − 1/<i>b</i>) = 4πε<sub>0</sub><i>K</i> <i>ab</i>/(<i>b</i> − <i>a</i>)<br>This is <i>K</i> times the vacuum result — exactly as expected for a dielectric filling the entire gap.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> 4πε<sub>0</sub><i>K</i> in F/m. <i>ab</i>/(<i>b</i> − <i>a</i>) in m. Product in F. Correct.',
      },
      {
        t: 'p',
        html: '<b>Cylindrical capacitor.</b><br>Two coaxial cylinders, inner radius <i>a</i>, outer radius <i>b</i>, length <i>L</i> ≫ <i>b</i> − <i>a</i> (end effects neglected), dielectric of constant <i>K</i> in the gap.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Gauss’s law.</b> For <i>a</i> < <i>r</i> < <i>b</i>, draw a cylindrical Gaussian surface of radius <i>r</i> and length <i>L</i>. Flux through the curved surface is <i>E</i>(<i>r</i>) · 2π<i>rL</i>; through the ends is zero (field is radial). Enclosed charge: <i>λL</i> where <i>λ</i> is the charge per unit length on the inner cylinder.<br><i>E</i>(<i>r</i>) · 2π<i>rL</i> = <i>λL</i>/(ε<sub>0</sub><i>K</i>) ⟹ <i>E</i>(<i>r</i>) = <i>λ</i>/(2πε<sub>0</sub><i>Kr</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Potential difference.</b><br><i>V</i> = −∫<sub><i>b</i></sub><sup><i>a</i></sup> <i>E</i>(<i>r</i>) d<i>r</i> = −∫<sub><i>b</i></sub><sup><i>a</i></sup> <i>λ</i>/(2πε<sub>0</sub><i>Kr</i>) d<i>r</i> = (<i>λ</i>/(2πε<sub>0</sub><i>K</i>)) ln(<i>b</i>/<i>a</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Capacitance per unit length.</b><br><i>C</i><sub><i>L</i></sub> = <i>λ</i>/<i>V</i> = 2πε<sub>0</sub><i>K</i>/ln(<i>b</i>/<i>a</i>)<br>For a cylinder of length <i>L</i>: <i>C</i> = 2πε<sub>0</sub><i>KL</i>/ln(<i>b</i>/<i>a</i>).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> ε<sub>0</sub> in F/m, <i>L</i> in m, so 2πε<sub>0</sub><i>KL</i> in F. ln(<i>b</i>/<i>a</i>) dimensionless. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Spherical Capacitor with Dielectric',
        q: 'A spherical capacitor has an inner sphere of radius <i>a</i> = 0.05 m and an outer sphere of radius <i>b</i> = 0.08 m. The space between them is filled with a dielectric of constant <i>K</i> = 6. (a) Find its capacitance. (b) If it is charged to <i>V</i> = 500 V, find the charge on the inner sphere and the energy stored.',
        steps: [
          '(a) Using the derived formula:<br><i>C</i> = 4πε<sub>0</sub><i>K</i> <i>ab</i>/(<i>b</i> − <i>a</i>) = 4π(8.85 × 10<sup>−12</sup>)(6)(0.05)(0.08)/0.03<br><i>C</i> = 4π(8.85 × 10<sup>−12</sup>)(6)(0.1333) = 4π(7.08 × 10<sup>−12</sup>) = 8.89 × 10<sup>−11</sup> F<br><i>C</i> ≈ 89 pF',
          '(b) <i>Q</i> = <i>CV</i> = (8.89 × 10<sup>−11</sup>)(500) = 4.45 × 10<sup>−8</sup> C = 44.5 nC.<br><i>U</i> = ½<i>CV</i><sup>2</sup> = ½(8.89 × 10<sup>−11</sup>)(2.5 × 10<sup>5</sup>) = 1.11 × 10<sup>−5</sup> J = 11.1 μJ.',
        ],
        ans: '<i>C</i> ≈ 89 pF; <i>Q</i> ≈ 44.5 nC; <i>U</i> ≈ 11 μJ.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Cylindrical Capacitor',
        q: 'A cylindrical capacitor consists of two coaxial cylinders, inner radius <i>a</i> = 2.0 cm, outer radius <i>b</i> = 5.0 cm, length <i>L</i> = 50 cm. The gap is air (take <i>K</i> ≈ 1). Find its capacitance and the maximum charge per unit length it can hold if the dielectric strength of air is <i>E</i><sub>max</sub> = 3 × 10<sup>6</sup> V/m.',
        steps: [
          '<b>Step 1 — Capacitance.</b><br><i>C</i> = 2πε<sub>0</sub><i>L</i>/ln(<i>b</i>/<i>a</i>) = 2π(8.85 × 10<sup>−12</sup>)(0.50)/ln(5/2) = (2.78 × 10<sup>−11</sup>)/ln(2.5)<br>ln(2.5) = 0.9163<br><i>C</i> = (2.78 × 10<sup>−11</sup>)/0.9163 = 3.03 × 10<sup>−11</sup> F = 30.3 pF',
          '<b>Step 2 — Maximum charge per unit length.</b> The field is strongest at the inner cylinder surface (<i>r</i> = <i>a</i>):<br><i>E</i>(<i>a</i>) = <i>λ</i>/(2πε<sub>0</sub><i>a</i>)<br>Setting <i>E</i>(<i>a</i>) = <i>E</i><sub>max</sub>:<br><i>λ</i><sub>max</sub> = 2πε<sub>0</sub><i>a</i> <i>E</i><sub>max</sub> = 2π(8.85 × 10<sup>−12</sup>)(0.02)(3 × 10<sup>6</sup>)<br><i>λ</i><sub>max</sub> = 2π(8.85 × 10<sup>−12</sup>)(6 × 10<sup>4</sup>) = 2π(5.31 × 10<sup>−7</sup>) = 3.34 × 10<sup>−6</sup> C/m',
        ],
        ans: '<i>C</i> ≈ 30 pF; <i>λ</i><sub>max</sub> ≈ 3.3 μC/m.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A spherical capacitor has <i>a</i> = 0.06 m, <i>b</i> = 0.10 m with vacuum. Find its capacitance.',
            a: '<i>C</i> = 4πε<sub>0</sub> <i>ab</i>/(<i>b</i> − <i>a</i>) = 4π(8.85 × 10<sup>−12</sup>)(0.06 × 0.10)/0.04 = 4π(8.85 × 10<sup>−12</sup>)(0.15) = 1.67 × 10<sup>−11</sup> F ≈ 16.7 pF.',
          },
          {
            q: '[JEE Advanced] The spherical capacitor of practice question 1 has its gap completely filled with a dielectric of constant <i>K</i> = 3. Find the new capacitance and the ratio of the energy stored at the same voltage compared to the vacuum case.',
            a: '<i>C</i><sub>dielectric</sub> = <i>KC</i><sub>vacuum</sub> = 3 × 16.7 = 50.1 pF. For fixed voltage <i>V</i>: <i>U</i> ∝ <i>C</i>, so <i>U</i><sub>dielectric</sub>/<i>U</i><sub>vacuum</sub> = <i>K</i> = 3.',
          },
          {
            q: '[JEE Advanced] A cylindrical capacitor has inner radius <i>a</i> = 1 cm, outer radius <i>b</i> = 3 cm, length <i>L</i> = 1 m. Find its capacitance.',
            a: '<i>C</i> = 2πε<sub>0</sub><i>L</i>/ln(<i>b</i>/<i>a</i>) = 2π(8.85 × 10<sup>−12</sup>)(1)/ln 3 = (5.56 × 10<sup>−11</sup>)/1.099 = 5.06 × 10<sup>−11</sup> F ≈ 50.6 pF.',
          },
          {
            q: '[JEE Advanced] Show that for a spherical capacitor with <i>b</i> ≫ <i>a</i>, the capacitance approaches <i>C</i> ≈ 4πε<sub>0</sub><i>Ka</i> — the capacitance of an isolated sphere surrounded by a dielectric. Explain physically why this makes sense.',
            a: 'When <i>b</i> → ∞: <i>ab</i>/(<i>b</i> − <i>a</i>) = <i>a</i>/(1 − <i>a</i>/<i>b</i>) ≈ <i>a</i>(1 + <i>a</i>/<i>b</i> + ⋯) → <i>a</i>. So <i>C</i> → 4πε<sub>0</sub><i>Ka</i>. Physically: if the outer sphere is infinitely far away, it plays no role, and the inner sphere acts as an isolated sphere of radius <i>a</i> embedded in a dielectric medium — exactly the isolated-sphere result <i>C</i> = 4πε<sub>0</sub><i>Ka</i>.',
          },
          {
            q: '[JEE Advanced] A cylindrical capacitor is made of two coaxial wires of radii <i>a</i> = 1 mm and <i>b</i> = 3 mm, length <i>L</i> = 10 m. (a) Find its capacitance in vacuum. (b) If the maximum working voltage is 10 kV, what is the maximum energy that can be stored?',
            a: '(a) <i>C</i> = 2πε<sub>0</sub><i>L</i>/ln(<i>b</i>/<i>a</i>) = 2π(8.85 × 10<sup>−12</sup>)(10)/ln 3 = (5.56 × 10<sup>−10</sup>)/1.099 = 5.06 × 10<sup>−10</sup> F ≈ 506 pF.<br>(b) <i>U</i><sub>max</sub> = ½<i>CV</i><sub>max</sub><sup>2</sup> = ½(5.06 × 10<sup>−10</sup>)(10<sup>4</sup>)<sup>2</sup> = ½(5.06 × 10<sup>−10</sup>)(10<sup>8</sup>) = 2.53 × 10<sup>−2</sup> J = 25.3 mJ.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'Coalescing Charged Drops: The n^(2/3) Scaling',
    extra: true,
    kalam:
      'Charge is conserved in coalescence; energy is not — and the direction is the opposite of what intuition suggests.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 gives you the isolated charged sphere — <i>C</i> = 4πε<sub>0</sub><i>R</i>, <i>V</i> = (1/(4πε<sub>0</sub>))(<i>Q</i>/<i>R</i>), <i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>) — and Topic 05 drills the sharing of charge between two conductors. One classic configuration sits between the two and appears in both JEE Main and NEET with mechanical regularity: <i>n</i> identical charged drops that coalesce into a single large drop. The whole pattern is two conservation laws plus the three sphere formulas; every mark lost on it is lost in the exponents.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Coalescence recipe',
        steps: [
          '<b>Volume conservation.</b> The liquid is incompressible, so the total volume is unchanged:<br>(4/3)π<i>R</i><sup>3</sup> = <i>n</i> · (4/3)π<i>r</i><sup>3</sup>   ⟹   <i>R</i> = <i>n</i><sup>1/3</sup><i>r</i>',
          '<b>Charge conservation.</b> No charge escapes during the merger:<br><i>Q</i> = <i>nq</i>',
          '<b>Read every other quantity off the sphere formulas.</b> Potential, capacitance, surface charge density, surface field, and self-energy all follow from <i>R</i> and <i>Q</i>:<br><i>V</i>′ = (1/(4πε<sub>0</sub>))(<i>Q</i>/<i>R</i>) = (1/(4πε<sub>0</sub>))(<i>nq</i>/(<i>n</i><sup>1/3</sup><i>r</i>)) = <i>n</i><sup>2/3</sup><i>V</i><br><i>C</i>′ = 4πε<sub>0</sub><i>R</i> = <i>n</i><sup>1/3</sup><i>C</i><br><i>σ</i>′ = <i>Q</i>/(4π<i>R</i><sup>2</sup>) = <i>nq</i>/(4π<i>n</i><sup>2/3</sup><i>r</i><sup>2</sup>) = <i>n</i><sup>1/3</sup><i>σ</i>,   <i>E</i>′ = <i>σ</i>′/ε<sub>0</sub> = <i>n</i><sup>1/3</sup><i>E</i><br><i>U</i>′ = <i>Q</i><sup>2</sup>/(2<i>C</i>′) = <i>n</i><sup>2</sup><i>q</i><sup>2</sup>/(8πε<sub>0</sub><i>n</i><sup>1/3</sup><i>r</i>) = <i>n</i><sup>5/3</sup> <i>q</i><sup>2</sup>/(8πε<sub>0</sub><i>r</i>) = <i>n</i><sup>5/3</sup><i>U</i>',
        ],
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'One small drop', 'Big drop', 'Scaling'],
        rows: [
          ['Radius', '<i>r</i>', '<i>n</i><sup>1/3</sup><i>r</i>', '<i>n</i><sup>1/3</sup>'],
          ['Charge', '<i>q</i>', '<i>nq</i>', '<i>n</i>'],
          ['Potential', '<i>V</i>', '<i>n</i><sup>2/3</sup><i>V</i>', '<i>n</i><sup>2/3</sup>'],
          ['Capacitance', '<i>C</i> = 4πε<sub>0</sub><i>r</i>', '<i>n</i><sup>1/3</sup><i>C</i>', '<i>n</i><sup>1/3</sup>'],
          ['Surface charge density', '<i>σ</i>', '<i>n</i><sup>1/3</sup><i>σ</i>', '<i>n</i><sup>1/3</sup>'],
          ['Field at surface', '<i>E</i>', '<i>n</i><sup>1/3</sup><i>E</i>', '<i>n</i><sup>1/3</sup>'],
          ['Self-energy', '<i>U</i> = ½<i>qV</i>', '<i>n</i><sup>5/3</sup><i>U</i>', '<i>n</i><sup>5/3</sup>'],
        ],
      },
      {
        t: 'p',
        html: 'The energy ratio most often asked — big drop against <b>all <i>n</i> small drops together</b> — is<br><i>U</i>′/(<i>nU</i>) = <i>n</i><sup>5/3</sup>/<i>n</i> = <i>n</i><sup>2/3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> Every scaling is a dimensionless power of <i>n</i> multiplying a quantity, so units are inherited unchanged: <i>n</i><sup>2/3</sup><i>V</i> is in volts, <i>n</i><sup>1/3</sup><i>C</i> in farads. Correct.',
      },
      {
        t: 'p',
        html: '<b>The trap.</b> Charge is conserved in coalescence; energy is not — and the direction is the opposite of what intuition suggests. The electrostatic energy <b>rises</b> by the factor <i>n</i><sup>2/3</sup> over the initial total: merging forces like charges into a single smaller neighbourhood, and pushing like charge together costs work. The bill is paid by surface tension. The total surface area falls from <i>n</i> · 4π<i>r</i><sup>2</sup> to 4π<i>R</i><sup>2</sup> = <i>n</i><sup>2/3</sup> · 4π<i>r</i><sup>2</sup>, i.e. to <i>n</i><sup>−1/3</sup> of its initial value, and the surface energy released funds the electrostatic increase. (If the drops are charged too heavily, the released surface energy cannot pay for the electrostatic rise, and coalescence no longer releases energy overall — practice question 3 finds the condition.) The seductive wrong options are <i>nV</i> (charge conservation applied directly to potential, forgetting that the radius also grew) and <i>n</i><sup>1/3</sup><i>V</i> (the radius scaling mistaken for the potential scaling).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main/NEET Level — 512 Charged Drops Coalesce',
        q: '512 identical mercury drops, each of radius <i>r</i> = 1.0 mm and each charged to a potential <i>V</i> = 2.0 V, coalesce to form a single spherical drop. Find (a) the radius and charge of the big drop, (b) its potential, and (c) the ratio of its electrostatic energy to the total initial electrostatic energy of the 512 drops.',
        steps: [
          '<b>Step 1 — Exponents of <i>n</i>.</b> <i>n</i> = 512 = 8<sup>3</sup>, so<br><i>n</i><sup>1/3</sup> = 8,   <i>n</i><sup>2/3</sup> = 64,   <i>n</i><sup>5/3</sup> = 32768.',
          '<b>Step 2 — Radius and charge.</b> <i>R</i> = 8<i>r</i> = 8.0 mm. The charge on one small drop follows from <i>V</i> = (1/(4πε<sub>0</sub>))(<i>q</i>/<i>r</i>):<br><i>q</i> = 4πε<sub>0</sub><i>rV</i> = 4π(8.85 × 10<sup>−12</sup>)(1.0 × 10<sup>−3</sup>)(2.0) = 2.2 × 10<sup>−13</sup> C<br><i>Q</i> = 512<i>q</i> ≈ 1.14 × 10<sup>−10</sup> C',
          '<b>Step 3 — Potential.</b><br><i>V</i>′ = <i>n</i><sup>2/3</sup><i>V</i> = 64 × 2.0 = 128 V<br>Check by direct substitution: <i>V</i>′ = (1/(4πε<sub>0</sub>))(<i>Q</i>/<i>R</i>) = (9 × 10<sup>9</sup>)(1.14 × 10<sup>−10</sup>)/(8.0 × 10<sup>−3</sup>) ≈ 128 V. Same result.',
          '<b>Step 4 — Energies.</b> One small drop:<br><i>U</i> = ½<i>qV</i> = ½(2.2 × 10<sup>−13</sup>)(2.0) = 2.2 × 10<sup>−13</sup> J<br>Total initial: <i>U</i><sub>total</sub> = 512<i>U</i> = 1.14 × 10<sup>−10</sup> J.<br>Big drop:<br><i>U</i>′ = ½<i>QV</i>′ = ½(1.14 × 10<sup>−10</sup>)(128) = 7.3 × 10<sup>−9</sup> J<br>Ratio:<br><i>U</i>′/<i>U</i><sub>total</sub> = (7.3 × 10<sup>−9</sup>)/(1.14 × 10<sup>−10</sup>) = 64 = <i>n</i><sup>2/3</sup><br>exactly as the scaling law demands. (Against a single small drop, <i>U</i>′/<i>U</i> = (7.3 × 10<sup>−9</sup>)/(2.2 × 10<sup>−13</sup>) ≈ 3.3 × 10<sup>4</sup>, i.e. <i>n</i><sup>5/3</sup> = 32768 — the other ratio examiners ask for.)',
        ],
        ans: '<i>R</i> = 8.0 mm; <i>Q</i> ≈ 1.14 × 10<sup>−10</sup> C; <i>V</i>′ = 128 V; <i>U</i>′/<i>U</i><sub>total</sub> = 64 — the electrostatic energy increases by the factor <i>n</i><sup>2/3</sup>, funded by the released surface energy.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Eight identical drops, each at potential <i>V</i>, coalesce into one drop. Find the potential of the combined drop and the ratio of its electrostatic energy to the total initial energy.',
            a: '<i>n</i> = 8: <i>n</i><sup>2/3</sup> = 4, so <i>V</i>′ = 4<i>V</i> and <i>U</i>′/<i>U</i><sub>total</sub> = <i>n</i><sup>2/3</sup> = 4 — the energy quadruples relative to the initial total.',
          },
          {
            q: '[JEE Main] 27 identical drops, each of radius <i>r</i> carrying charge <i>q</i>, coalesce. In terms of the small-drop values <i>V</i>, <i>C</i>, and <i>U</i>, find the big drop’s radius, potential, capacitance, and self-energy.',
            a: '<i>n</i> = 27: <i>n</i><sup>1/3</sup> = 3, <i>n</i><sup>2/3</sup> = 9, <i>n</i><sup>5/3</sup> = 243. So <i>R</i> = 3<i>r</i>; <i>V</i>′ = 9<i>V</i>; <i>C</i>′ = 3<i>C</i> = 12πε<sub>0</sub><i>r</i>; <i>U</i>′ = 243 <i>U</i> (nine times the total initial energy 27<i>U</i>).',
          },
          {
            q: '[JEE Advanced] Show that the electrostatic energy always rises on coalescence, and identify the energy source that pays for the rise. For drops of radius <i>r</i> and charge <i>q</i> made of a liquid of surface tension <i>T</i>, write the condition for the merger to release energy overall. (Hint: compare Δ<i>U</i><sub>elec</sub> with the released surface energy 4π<i>r</i><sup>2</sup><i>T</i>(<i>n</i> − <i>n</i><sup>2/3</sup>).)',
            a: '<i>U</i>′ = <i>n</i><sup>5/3</sup><i>U</i> > <i>nU</i> for all <i>n</i> > 1, since <i>n</i><sup>2/3</sup> > 1: the electrostatic energy always rises. The source is surface tension — the area shrinks to <i>n</i><sup>−1/3</sup> of its initial total. Net energy is released only if<br>4π<i>r</i><sup>2</sup><i>T</i>(<i>n</i> − <i>n</i><sup>2/3</sup>) ≥ (<i>n</i><sup>2/3</sup> − 1) <i>nq</i><sup>2</sup>/(8πε<sub>0</sub><i>r</i>)<br>which for large <i>n</i> reads <i>q</i><sup>2</sup> ≲ 32π<sup>2</sup>ε<sub>0</sub><i>r</i><sup>3</sup><i>T</i>/<i>n</i><sup>2/3</sup>: more drops, or more charge per drop, and the merger cannot pay for itself.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Cheat sheet.</b> <i>R</i> = <i>n</i><sup>1/3</sup><i>r</i>, <i>Q</i> = <i>nq</i>, <i>V</i>′ = <i>n</i><sup>2/3</sup><i>V</i>, <i>C</i>′ = <i>n</i><sup>1/3</sup><i>C</i>, <i>σ</i>′ = <i>n</i><sup>1/3</sup><i>σ</i>, <i>E</i>′ = <i>n</i><sup>1/3</sup><i>E</i>. Energy: <i>U</i>′ = <i>n</i><sup>5/3</sup><i>U</i><sub>one</sub> = <i>n</i><sup>2/3</sup><i>U</i><sub>total</sub> — the electrostatic energy rises on coalescence; surface tension pays the difference.',
      },
    ],
  },
];
