import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Additional Topics A and B, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 122, set at
 * the head of Addendum A), then A Energy of Charge Systems (pp. 122 to 125;
 * the book's title carries ½ Σ qᵢVᵢ, written here as plain text) and B
 * Potential of Continuous Charge Distributions (pp. 125 to 128). Each
 * addendum prints its own practice problems and answers. These pages print
 * no drawings.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 122–125 ─────────────────────────
  {
    n: 'A',
    title: 'Energy of Charge Systems: The ½ Σ qV Method',
    extra: true,
    kalam:
      'Addendum A fixes the energy bookkeeping for multi-charge systems (the factor of one-half that the chapter states but rarely applies in examples) and shows how to extract energy from a charge assembly.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you point-charge potential and dipole formulas, capacitance of parallel-plate capacitors, dielectric insertion rules, conductor properties, and series/parallel network reduction. Five JEE patterns sit just beyond what the chapter explicitly solves, and each one is built from the same tools the chapter already teaches — applied to situations the chapter leaves as exercises. Addendum A fixes the energy bookkeeping for multi-charge systems (the factor of one-half that the chapter states but rarely applies in examples) and shows how to extract energy from a charge assembly. Addendum B opens continuous charge distributions — line charges, rings, disks — with the integration method the chapter mentions but never demonstrates, including the crucial distinction between potential of an infinite line and the potential difference between two finite points. Addendum C tackles two dielectric problems the chapter treats asymmetrically: partial fills (the slab halfway in) and the force that pulls a dielectric into a charged capacitor (a JEE Advanced favourite). Addendum D extends Topic 04’s spherical capacitor to cylindrical geometry and to a dielectric-filled concentric-sphere system, a configuration that JEE Advanced favours. Addendum E closes with the classic coalescing-drops problem and its <i>n</i><sup>2/3</sup> scaling laws.',
      },
      {
        t: 'p',
        html: 'Topic 02 states the formula <i>U</i> = (1/(4πε<sub>0</sub>)) Σ<sub><i>i</i> < <i>j</i></sub> <i>q</i><sub><i>i</i></sub><i>q</i><sub><i>j</i></sub>/<i>r</i><sub><i>ij</i></sub> = ½ Σ<sub><i>i</i></sub> <i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>, where <i>V</i><sub><i>i</i></sub> is the potential at charge <i>i</i> due to all the other charges. The factor of one-half in the second form accounts for the fact that each pair would be counted twice if you summed <i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> over all charges without it. This form is the fast path in JEE problems where the chapter’s three-charge or four-charge expansion would be arithmetic-heavy.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'formula',
        kicker: 'For a system of <i>n</i> point charges',
        main: '<i>U</i> = ½ Σ<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> = ½ Σ<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>q</i><sub><i>i</i></sub> Σ<sub><i>j</i>≠<i>i</i></sub> <i>q</i><sub><i>j</i></sub>/(4πε<sub>0</sub><i>r</i><sub><i>ij</i></sub>)',
        legend: ['<i>V</i><sub><i>i</i></sub> = the potential at the location of charge <i>i</i> produced by all other charges <i>j</i> ≠ <i>i</i>'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Physical interpretation of the factor one-half:</b> When you bring in charges one by one from infinity, the first charge costs zero work (there is nothing to fight). The second charge costs <i>q</i><sub>2</sub> times the potential that charge 1 produces at its position. The third charge costs <i>q</i><sub>3</sub> times the combined potential of charges 1 and 2 at its position. Summing these incremental costs counts each pair exactly once. The sum Σ<sub><i>i</i></sub> <i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>, with <i>V</i><sub><i>i</i></sub> the potential at <i>i</i> from all others, counts each pair twice (the pair {1, 2} appears in both <i>q</i><sub>1</sub><i>V</i><sub>1</sub> and <i>q</i><sub>2</sub><i>V</i><sub>2</sub>), so the energy is ½ Σ<sub><i>i</i></sub> <i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Sign convention:</b> The formula works with algebraic signs carried through <i>q</i><sub><i>i</i></sub>. For a like pair <i>U</i> > 0; for an unlike pair <i>U</i> < 0.',
      },
      {
        t: 'p',
        html: '<b>Units check:</b> <i>q</i> in C, <i>V</i> in V = J/C, so <i>qV</i> in J. The sum is in joules. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Energy of a Three-Charge Triangle',
        q: 'Three point charges <i>q</i><sub>1</sub> = +2 μC, <i>q</i><sub>2</sub> = −3 μC, and <i>q</i><sub>3</sub> = +4 μC are fixed at the vertices of an equilateral triangle of side <i>a</i> = 0.30 m. Find the total electrostatic potential energy of the system.',
        steps: [
          '<b>Step 1 — Identify pairs.</b> There are three pairs: (1, 2), (2, 3), (3, 1).',
          '<b>Step 2 — Compute each pair energy.</b><br><i>U</i><sub>12</sub> = (1/(4πε<sub>0</sub>)) <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>a</i> = (9 × 10<sup>9</sup>) (2 × 10<sup>−6</sup>)(−3 × 10<sup>−6</sup>)/0.30 = (9 × 10<sup>9</sup>) (−6 × 10<sup>−12</sup>)/0.30<br><i>U</i><sub>12</sub> = −(54 × 10<sup>−3</sup>)/0.30 = −0.180 J<br><i>U</i><sub>23</sub> = (1/(4πε<sub>0</sub>)) <i>q</i><sub>2</sub><i>q</i><sub>3</sub>/<i>a</i> = (9 × 10<sup>9</sup>) (−3 × 10<sup>−6</sup>)(4 × 10<sup>−6</sup>)/0.30 = −0.360 J<br><i>U</i><sub>31</sub> = (1/(4πε<sub>0</sub>)) <i>q</i><sub>3</sub><i>q</i><sub>1</sub>/<i>a</i> = (9 × 10<sup>9</sup>) (4 × 10<sup>−6</sup>)(2 × 10<sup>−6</sup>)/0.30 = +0.240 J',
          '<b>Step 3 — Sum.</b> <i>U</i> = <i>U</i><sub>12</sub> + <i>U</i><sub>23</sub> + <i>U</i><sub>31</sub> = −0.180 − 0.360 + 0.240 = −0.300 J.',
          '<b>Using the ½ Σ <i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> method (alternative):</b> At charge <i>q</i><sub>1</sub>:<br><i>V</i><sub>1</sub> = (1/(4πε<sub>0</sub>))(<i>q</i><sub>2</sub>/<i>a</i> + <i>q</i><sub>3</sub>/<i>a</i>) = (9 × 10<sup>9</sup>)((−3 × 10<sup>−6</sup> + 4 × 10<sup>−6</sup>)/0.30) = +30 kV.<br><i>q</i><sub>1</sub><i>V</i><sub>1</sub> = (2 × 10<sup>−6</sup>)(30 × 10<sup>3</sup>) = 0.060 J.<br>At charge <i>q</i><sub>2</sub>: <i>V</i><sub>2</sub> = (9 × 10<sup>9</sup>)((2 × 10<sup>−6</sup> + 4 × 10<sup>−6</sup>)/0.30) = +180 kV.<br><i>q</i><sub>2</sub><i>V</i><sub>2</sub> = (−3 × 10<sup>−6</sup>)(180 × 10<sup>3</sup>) = −0.540 J.<br>At charge <i>q</i><sub>3</sub>: <i>V</i><sub>3</sub> = (9 × 10<sup>9</sup>)((2 × 10<sup>−6</sup> − 3 × 10<sup>−6</sup>)/0.30) = −30 kV.<br><i>q</i><sub>3</sub><i>V</i><sub>3</sub> = (4 × 10<sup>−6</sup>)(−30 × 10<sup>3</sup>) = −0.120 J.<br><i>U</i> = ½(0.060 − 0.540 − 0.120) = ½(−0.600) = −0.300 J. Same result.',
        ],
        ans: '<i>U</i> = −0.300 J (bound system — the two unlike-charge pairs outweigh the like pair).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Work Needed to Assemble Four Like Charges',
        q: 'Four equal charges <i>q</i> = +1 μC are brought from infinity and fixed at the corners of a square of side <i>a</i> = 0.50 m. How much work must an external agent do to assemble them?',
        steps: [
          '<b>Physical picture.</b> Assembling from infinity means the first charge costs zero. Each subsequent charge is brought in against the repulsion of those already placed, so the external agent does positive work and the field does negative work. The total work the agent must supply equals the final potential energy of the system.',
          '<b>Number of pairs.</b> For 4 charges: (4 × 3)/2 = 6 pairs. These split into two types:<br>• <b>4 side pairs</b> (adjacent corners): each <i>U</i><sub>side</sub> = (1/(4πε<sub>0</sub>)) <i>q</i><sup>2</sup>/<i>a</i><br>• <b>2 diagonal pairs</b> (opposite corners): each <i>U</i><sub>diag</sub> = (1/(4πε<sub>0</sub>)) <i>q</i><sup>2</sup>/(<i>a</i>√2)',
          '<b>Compute:</b><br><i>U</i><sub>side, each</sub> = (9 × 10<sup>9</sup>) (10<sup>−6</sup>)<sup>2</sup>/0.50 = 18 × 10<sup>−3</sup> J = 0.018 J<br><i>U</i><sub>diag, each</sub> = (9 × 10<sup>9</sup>) (10<sup>−6</sup>)<sup>2</sup>/(0.50√2) = 0.018/√2 J ≈ 0.01273 J',
          'Total work required (equal to the energy of the final configuration):<br><i>U</i><sub>total</sub> = 4(0.018) + 2(0.01273) = 0.072 + 0.0255 = 0.0975 J',
          '<b>Note.</b> The result is positive because like charges repel: the energy is stored in the configuration (the system is “wound up”) and is given back if the charges are released.',
        ],
        ans: '<i>W</i><sub>ext</sub> = <i>U</i> ≈ 0.098 J must be supplied by the external agent.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two charges +4 μC and −6 μC are 0.20 m apart. Find the potential energy and state whether energy is released or absorbed when they are brought from infinity to this separation.',
            a: '<i>U</i> = (9 × 10<sup>9</sup>)(+4 × 10<sup>−6</sup>)(−6 × 10<sup>−6</sup>)/0.20 = −1.08 J. Energy is released (negative PE means the system is bound — unlike charges attract, so work is done by the field as they come together).',
          },
          {
            q: '[NEET] Three charges +<i>q</i>, +<i>q</i>, and −<i>q</i> are placed at the corners of an equilateral triangle of side <i>a</i>. Find the total electrostatic potential energy in terms of <i>q</i> and <i>a</i>.',
            a: 'Three pairs: two +<i>q</i> to −<i>q</i> pairs (attractive, negative) and one +<i>q</i> to +<i>q</i> pair (repulsive, positive).<br><i>U</i> = 2[(9 × 10<sup>9</sup>)(+<i>q</i>)(−<i>q</i>)/<i>a</i>] + (9 × 10<sup>9</sup>)(+<i>q</i>)(+<i>q</i>)/<i>a</i> = (9 × 10<sup>9</sup>/<i>a</i>)(−2<i>q</i><sup>2</sup> + <i>q</i><sup>2</sup>) = −(9 × 10<sup>9</sup> <i>q</i><sup>2</sup>)/<i>a</i>',
          },
          {
            q: '[JEE Main] Four charges +1 μC, −2 μC, +3 μC, and −4 μC are fixed at the corners of a square of side 0.10 m, in order around the square. Find the total potential energy.',
            a: 'Label charges <i>q</i><sub>1</sub> = +1, <i>q</i><sub>2</sub> = −2, <i>q</i><sub>3</sub> = +3, <i>q</i><sub>4</sub> = −4 (all μC, convert to C by ×10<sup>−6</sup>). Pairs: sides: (1, 2), (2, 3), (3, 4), (4, 1) at <i>a</i> = 0.10 m. Diagonals: (1, 3), (2, 4) at <i>a</i>√2. Computing:<br>• <i>U</i><sub>12</sub> = (9 × 10<sup>9</sup>)(+1)(−2)(10<sup>−12</sup>)/0.10 = −0.18 J<br>• <i>U</i><sub>23</sub> = (9 × 10<sup>9</sup>)(−2)(+3)(10<sup>−12</sup>)/0.10 = −0.54 J<br>• <i>U</i><sub>34</sub> = (9 × 10<sup>9</sup>)(+3)(−4)(10<sup>−12</sup>)/0.10 = −1.08 J<br>• <i>U</i><sub>41</sub> = (9 × 10<sup>9</sup>)(−4)(+1)(10<sup>−12</sup>)/0.10 = −0.36 J<br>• <i>U</i><sub>13</sub> = (9 × 10<sup>9</sup>)(+1)(+3)(10<sup>−12</sup>)/(0.10√2) = +0.19 J (approx)<br>• <i>U</i><sub>24</sub> = (9 × 10<sup>9</sup>)(−2)(−4)(10<sup>−12</sup>)/(0.10√2) = +0.51 J (approx)<br>Sum ≈ −1.46 J.',
          },
          {
            q: '[JEE Advanced] Two identical small spheres, each of mass <i>m</i> = 170 g and charge <i>q</i> = +1 μC, are suspended from a common point by strings of length <i>L</i> = 0.50 m. At equilibrium the strings make an angle <i>θ</i> = 10° with the vertical. (a) Find the separation between the spheres. (b) Calculate the electrostatic potential energy of the pair. (c) If both strings are then cut, what is the horizontal speed of each sphere when they are far apart? (Use energy conservation; gravity acts only vertically; <i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '(a) Separation <i>r</i> = 2<i>L</i> sin <i>θ</i> = 2(0.50) sin 10° = 1.0 × 0.1736 = 0.174 m. (Consistency check: <i>kq</i><sup>2</sup>/<i>r</i><sup>2</sup> = 0.299 N and <i>mg</i> tan <i>θ</i> = 0.17 × 10 × 0.1763 = 0.300 N, so the data describe a genuine equilibrium.)<br>(b) <i>U</i> = (9 × 10<sup>9</sup>)(10<sup>−6</sup>)<sup>2</sup>/0.1736 = 0.0518 J ≈ 52 mJ.<br>(c) Initial PE ≈ 52 mJ. Gravity does no work on the horizontal motion, so at large separation all of it is horizontal kinetic energy: 52 mJ = 2 × ½<i>mv</i><sub><i>x</i></sub><sup>2</sup>. <i>v</i><sub><i>x</i></sub> = √(<i>U</i>/<i>m</i>) = √(0.0518/0.170) = √0.305 ≈ 0.55 m/s.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 125–128 ─────────────────────────
  {
    n: 'B',
    title: 'Potential of Continuous Charge Distributions',
    extra: true,
    kalam: 'JEE regularly asks for the potential of continuous distributions — a uniformly charged ring, a line segment, a disk — where you set up the integral V = (1/(4πε0)) ∫ dq/r and evaluate.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 01 gives <i>V</i> = <i>k</i> Σ <i>q</i><sub><i>i</i></sub>/<i>r</i><sub><i>i</i></sub> for point charges, where <i>k</i> = 1/(4πε<sub>0</sub>) = 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>. JEE regularly asks for the potential of continuous distributions — a uniformly charged ring, a line segment, a disk — where you set up the integral <i>V</i> = (1/(4πε<sub>0</sub>)) ∫ d<i>q</i>/<i>r</i> and evaluate. The chapter works out only the ring (Topic 01, worked example 3), without ever setting up the integral. This addendum fills that gap with the three distributions that appear most often.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'General recipe',
        steps: [
          '<b>Choose the element.</b> Express d<i>q</i> in terms of a geometric parameter: for a line, d<i>q</i> = <i>λ</i> d<i>x</i> (linear charge density <i>λ</i> in C/m); for a ring, d<i>q</i> = <i>λ</i> d<i>l</i>; for a disk, d<i>q</i> = <i>σ</i> d<i>A</i> (surface charge density <i>σ</i> in C/m<sup>2</sup>).',
          '<b>Find the distance.</b> Express the distance <i>r</i> from each element to the point of interest. If it is the same for every element (a ring seen from its axis, an arc seen from its centre), it factors out of the integral. If not (a rod), write <i>r</i> in terms of the integration variable. Either way the integral is a scalar one — unlike the field, the potential needs no components.',
          '<b>Set up the integral.</b> <i>V</i> = (1/(4πε<sub>0</sub>)) ∫ d<i>q</i>/<i>r</i>. If <i>r</i> is constant, it factors out immediately.',
          '<b>Evaluate.</b> The limits and the expression for d<i>q</i> determine the integral.',
          '<b>Units check.</b> ∫ d<i>q</i> is in C and 4πε<sub>0</sub><i>r</i> is in C<sup>2</sup>/(N·m<sup>2</sup>) · m = C<sup>2</sup>/(N·m), so <i>V</i> is in C · (N·m)/C<sup>2</sup> = (N·m)/C = J/C = V. Correct.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Potential on the Axis of a Uniformly Charged Ring',
        q: 'A thin ring of radius <i>R</i> = 0.20 m carries a uniform linear charge <i>λ</i> = 5 × 10<sup>−8</sup> C/m (total charge <i>Q</i> = 2π<i>Rλ</i>). Find the potential at a point <i>P</i> on the axis at distance <i>x</i> = 0.15 m from the centre.',
        steps: [
          '<b>Step 1 — Geometry.</b> Every element of charge on the ring is at the same distance <i>r</i> = √(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) from <i>P</i>. This is the key simplification that makes the ring easy.',
          '<b>Step 2 — Element.</b> Total charge <i>Q</i> = <i>λ</i>(2π<i>R</i>). For an element d<i>q</i>: <i>V</i><sub>element</sub> = (1/(4πε<sub>0</sub>)) d<i>q</i>/<i>r</i>.',
          '<b>Step 3 — Integrate.</b> Since <i>r</i> is constant over the ring:<br><i>V</i><sub><i>P</i></sub> = (1/(4πε<sub>0</sub>)) ∫<sub>ring</sub> d<i>q</i>/<i>r</i> = (1/(4πε<sub>0</sub>))(1/<i>r</i>) ∫ d<i>q</i> = (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>r</i><br><i>V</i><sub><i>P</i></sub> = (1/(4πε<sub>0</sub>)) 2π<i>Rλ</i>/√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) = <i>Rλ</i>/(2ε<sub>0</sub>√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>))',
          '<b>Step 4 — Numbers.</b> √(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) = √(0.20<sup>2</sup> + 0.15<sup>2</sup>) = √0.0625 = 0.25 m.<br><i>Q</i> = 2π(0.20)(5 × 10<sup>−8</sup>) = 6.28 × 10<sup>−8</sup> C.<br><i>V</i><sub><i>P</i></sub> = (9 × 10<sup>9</sup>) (6.28 × 10<sup>−8</sup>)/0.25 = (9 × 10<sup>9</sup>)(2.51 × 10<sup>−7</sup>) = 2260 V',
          '<b>Alternative:</b> Direct ring formula <i>V</i> = (1/(4πε<sub>0</sub>)) <i>Q</i>/√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) gives the same result.',
        ],
        ans: '<i>V</i><sub><i>P</i></sub> ≈ 2.3 × 10<sup>3</sup> V',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Potential Due to a Finite Line Charge',
        q: 'A thin rod of length <i>L</i> = 0.40 m carries a uniform linear charge density <i>λ</i> = 2 × 10<sup>−8</sup> C/m. Find the potential at a point <i>P</i> on the perpendicular bisector, a distance <i>a</i> = 0.10 m from the rod’s centre.',
        steps: [
          '<b>Step 1 — Geometry.</b> Place the rod along the <i>y</i>-axis from −<i>L</i>/2 to +<i>L</i>/2. The point <i>P</i> is at (<i>a</i>, 0) in the <i>x</i>-<i>y</i> plane. For a charge element at <i>y</i>, the distance to <i>P</i> is <i>r</i> = √(<i>a</i><sup>2</sup> + <i>y</i><sup>2</sup>).',
          '<b>Step 2 — Element.</b> d<i>q</i> = <i>λ</i> d<i>y</i>.',
          '<b>Step 3 — Integrate.</b><br><i>V</i><sub><i>P</i></sub> = (1/(4πε<sub>0</sub>)) ∫<sub>−<i>L</i>/2</sub><sup>+<i>L</i>/2</sup> <i>λ</i> d<i>y</i>/√(<i>a</i><sup>2</sup> + <i>y</i><sup>2</sup>) = (<i>λ</i>/(4πε<sub>0</sub>)) [ln(<i>y</i> + √(<i>a</i><sup>2</sup> + <i>y</i><sup>2</sup>))]<sub>−<i>L</i>/2</sub><sup>+<i>L</i>/2</sup><br><i>V</i><sub><i>P</i></sub> = (<i>λ</i>/(4πε<sub>0</sub>)) ln[(<i>L</i>/2 + √(<i>a</i><sup>2</sup> + (<i>L</i>/2)<sup>2</sup>))/(−<i>L</i>/2 + √(<i>a</i><sup>2</sup> + (<i>L</i>/2)<sup>2</sup>))]',
          '<b>Step 4 — Numbers.</b> <i>L</i>/2 = 0.20 m, √(<i>a</i><sup>2</sup> + (<i>L</i>/2)<sup>2</sup>) = √(0.01 + 0.04) = √0.05 = 0.2236 m.<br>Numerator: 0.20 + 0.2236 = 0.4236. Denominator: −0.20 + 0.2236 = 0.0236.<br><i>V</i><sub><i>P</i></sub>/(<i>kλ</i>) = ln(0.4236/0.0236) = ln(17.94) = 2.887<br><i>V</i><sub><i>P</i></sub> = (9 × 10<sup>9</sup>)(2 × 10<sup>−8</sup>)(2.887) = 180 × 2.887 ≈ 520 V',
          '<b>Shortcut (finite rod):</b> <i>V</i> = (<i>λ</i>/(4πε<sub>0</sub>)) ln[(√(<i>a</i><sup>2</sup> + (<i>L</i>/2)<sup>2</sup>) + <i>L</i>/2)/(√(<i>a</i><sup>2</sup> + (<i>L</i>/2)<sup>2</sup>) − <i>L</i>/2)]. For a very long rod (<i>L</i> → ∞), this diverges — the potential of an infinite line charge is infinite, which is why we always work with <b>potential differences</b> for lines, never absolute potential.',
        ],
        ans: '<i>V</i><sub><i>P</i></sub> ≈ 5.2 × 10<sup>2</sup> V',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Potential on the Axis of a Charged Disk',
        q: 'A circular disk of radius <i>R</i> = 0.10 m carries a uniform surface charge density <i>σ</i> = 5 × 10<sup>−6</sup> C/m<sup>2</sup>. Find the potential at a point on the axis at distance <i>x</i> = 0.05 m from the disk.',
        steps: [
          '<b>Step 1 — Geometry.</b> Divide the disk into concentric rings of radius <i>r</i> and width d<i>r</i>. Each ring has area d<i>A</i> = 2π<i>r</i> d<i>r</i> and charge d<i>q</i> = <i>σ</i> d<i>A</i> = 2π<i>σr</i> d<i>r</i>. Every point on a given ring is at the same distance <i>s</i> = √(<i>r</i><sup>2</sup> + <i>x</i><sup>2</sup>) from <i>P</i>.',
          '<b>Step 2 — Ring potential.</b> From worked example 1: d<i>V</i> = (1/(4πε<sub>0</sub>)) d<i>q</i>/<i>s</i> = (1/(4πε<sub>0</sub>)) 2π<i>σr</i> d<i>r</i>/√(<i>r</i><sup>2</sup> + <i>x</i><sup>2</sup>).',
          '<b>Step 3 — Integrate over the disk.</b> Sum contributions from <i>r</i> = 0 to <i>r</i> = <i>R</i>:<br><i>V</i><sub><i>P</i></sub> = (<i>σ</i>/(2ε<sub>0</sub>)) ∫<sub>0</sub><sup><i>R</i></sup> <i>r</i> d<i>r</i>/√(<i>r</i><sup>2</sup> + <i>x</i><sup>2</sup>) = (<i>σ</i>/(2ε<sub>0</sub>)) [√(<i>r</i><sup>2</sup> + <i>x</i><sup>2</sup>)]<sub>0</sub><sup><i>R</i></sup><br><i>V</i><sub><i>P</i></sub> = (<i>σ</i>/(2ε<sub>0</sub>))(√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) − <i>x</i>)',
          '<b>Step 4 — Numbers.</b> ε<sub>0</sub> = 8.85 × 10<sup>−12</sup>, so 1/(2ε<sub>0</sub>) = 5.65 × 10<sup>10</sup>.<br>√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) = √(0.01 + 0.0025) = √0.0125 = 0.1118 m<br><i>V</i><sub><i>P</i></sub> = (5.65 × 10<sup>10</sup>)(5 × 10<sup>−6</sup>)(0.1118 − 0.05) = (5.65 × 10<sup>10</sup>)(5 × 10<sup>−6</sup>)(0.0618)',
          '<b>Limit check.</b> As <i>x</i> → 0 (at the disk surface): <i>V</i> → <i>σR</i>/(2ε<sub>0</sub>). As <i>x</i> → ∞: <i>V</i> → <i>σR</i><sup>2</sup>/(4ε<sub>0</sub><i>x</i>) = <i>Q</i>/(4πε<sub>0</sub><i>x</i>) (using √(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) − <i>x</i> ≈ <i>R</i><sup>2</sup>/(2<i>x</i>) and <i>Q</i> = <i>σ</i>π<i>R</i><sup>2</sup>), recovering the point-charge result (disk looks like a point from far away). Both limits are physically correct.',
        ],
        ans: '<i>V</i><sub><i>P</i></sub> ≈ 1.75 × 10<sup>4</sup> V',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A ring of radius <i>R</i> = 0.15 m carries charge <i>Q</i> = +3 μC uniformly distributed. Find the potential at the centre of the ring.',
            a: 'At the centre, every charge element is at distance <i>R</i>, so <i>V</i> = (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>R</i> = (9 × 10<sup>9</sup>) (3 × 10<sup>−6</sup>)/0.15 = 1.8 × 10<sup>5</sup> V.',
          },
          {
            q: '[JEE Main] A thin rod of length <i>L</i> = 0.30 m carries total charge <i>Q</i> = +2 μC uniformly distributed. Find the potential at a point on the rod’s axis at a distance <i>a</i> = 0.10 m from the nearer end.',
            a: 'Place the rod from <i>x</i>′ = 0 to <i>x</i>′ = <i>L</i> and the point <i>P</i> on the axis at <i>x</i> = −<i>a</i>, so an element at <i>x</i>′ is at distance <i>r</i> = <i>x</i>′ + <i>a</i>. With d<i>q</i> = (<i>Q</i>/<i>L</i>) d<i>x</i>′:<br><i>V</i><sub><i>P</i></sub> = (<i>Q</i>/(4πε<sub>0</sub><i>L</i>)) ∫<sub>0</sub><sup><i>L</i></sup> d<i>x</i>′/(<i>x</i>′ + <i>a</i>) = (<i>Q</i>/(4πε<sub>0</sub><i>L</i>)) ln((<i>L</i> + <i>a</i>)/<i>a</i>).<br>Substituting: <i>kQ</i>/<i>L</i> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)/0.30 = 6 × 10<sup>4</sup> V and ln(0.40/0.10) = ln 4 = 1.386, so <i>V</i><sub><i>P</i></sub> = 6 × 10<sup>4</sup> × 1.386 ≈ 8.3 × 10<sup>4</sup> V = 83 kV.',
          },
          {
            q: '[JEE Main] A circular disk of radius <i>R</i> = 5 cm carries charge <i>Q</i> = +4 μC. Find the potential at a point <i>x</i> = 3 cm on the axis.',
            a: 'Using <i>V</i> = (<i>σ</i>/(2ε<sub>0</sub>))(√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) − <i>x</i>) with <i>σ</i> = <i>Q</i>/(π<i>R</i><sup>2</sup>) = (4 × 10<sup>−6</sup>)/[π(0.05)<sup>2</sup>] = 5.09 × 10<sup>−4</sup> C/m<sup>2</sup>. √(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) = √(0.0025 + 0.0009) = 0.0583 m. <i>V</i> = (5.65 × 10<sup>10</sup>)(5.09 × 10<sup>−4</sup>)(0.0583 − 0.03) ≈ 8.1 × 10<sup>5</sup> V.',
          },
          {
            q: '[JEE Advanced] A non-conducting ring of radius <i>R</i> has linear charge density <i>λ</i>(<i>θ</i>) = <i>λ</i><sub>0</sub> cos <i>θ</i>, where <i>θ</i> is measured from a diameter. Find the potential at the centre of the ring. (Hint: this distribution has a dipole moment but no net charge.)',
            a: 'The total charge ∫<sub>0</sub><sup>2π</sup> <i>λ</i><sub>0</sub> cos <i>θ</i> <i>R</i> d<i>θ</i> = <i>λ</i><sub>0</sub><i>R</i>[sin <i>θ</i>]<sub>0</sub><sup>2π</sup> = 0. There is no net charge (monopole moment zero). Because every element is at the same distance <i>R</i> from the centre, <i>V</i>(0) = (1/(4πε<sub>0</sub>)) ∫ d<i>q</i>/<i>r</i> with <i>r</i> = <i>R</i> constant, so <i>V</i>(0) = (1/(4πε<sub>0</sub><i>R</i>)) ∫ d<i>q</i> = <i>Q</i><sub>total</sub>/(4πε<sub>0</sub><i>R</i>) = 0.',
          },
        ],
      },
    ],
  },
];
