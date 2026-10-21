import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, the four Additional Topics, word for word from the Class 11
 * Physics Master Reference, pages 726 to 739: the addenda's shared opening
 * (p. 726, set at the head of Addendum A), then A Thermal Stress in Composite
 * & Constrained Systems (pp. 726 to 728), B Steady Conduction in Cylindrical
 * & Spherical Shells (pp. 729 to 731), C Exact Radiation Cooling (Beyond
 * Newton’s Law) (pp. 731 to 733) and D Advanced Calorimetry: Variable
 * Specific Heat & Continuous Power (pp. 734 to 735). The book collects the
 * practice problems of all four addenda, and their answers, at the end
 * (pp. 735 to 739); each addendum's problems are its own Practice part here.
 * The addenda print no drawings.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Thermal Stress in Composite & Constrained Systems',
    extra: true,
    kalam:
      'The engine in every case is the same: total length is fixed → sum of length changes (mechanical + thermal) = 0, and force is common through series elements.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The main chapter (Topics 01–06) gives you every formula, derivation and standard numerical pattern that CBSE Boards, NEET and JEE Main expect. Four JEE Advanced patterns remain that marry concepts the chapter teaches in isolation: <b>composite thermal-stress systems</b> (expansion + elasticity + force balance), <b>non-planar steady conduction</b> (Fourier’s law + geometry + integration), <b>exact radiation cooling</b> (Stefan’s law + differential equations + spectral selectivity), and <b>advanced calorimetry</b> (variable specific heat + continuous power + integration). These addenda supply the missing derivations, the geometric resistance formulas you must carry in memory, and the integration techniques that turn “rate ∝ <i>T</i><sup>4</sup>” into a usable time–temperature relation. Every method below is a direct extension of the chapter’s own procedures — no new physics, only the next algebraic or geometric step.',
      },
      {
        t: 'p',
        html: 'Topic 01 derived <i>σ</i> = <i>Yα</i>Δ<i>T</i> for a single rod clamped between rigid walls. JEE Advanced rarely stops there. Standard problems join two rods of different materials (different <i>α</i>, <i>Y</i>, <i>A</i>) end-to-end between immovable supports, or clamp a single rod that also carries a hanging mass, or ask for the curvature of a heated bimetallic strip. The engine in every case is the same: <b>total length is fixed → sum of length changes (mechanical + thermal) = 0</b>, and <b>force is common through series elements</b>.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Draw the free-body diagram.</b> In a series junction the internal force <i>F</i> (tension positive, compression negative) is the same in every segment. If a mass <i>m</i> hangs from a junction, its weight <i>mg</i> is an external load there: the forces in the two segments meeting at that junction then differ by <i>mg</i>.',
          '<b>Write the strain compatibility equation for each segment <i>i</i>.</b><br><i>ε</i><sub><i>i</i></sub> = Δ<i>L</i><sub><i>i</i></sub>/<i>L</i><sub>0<i>i</i></sub> = <i>F</i>/(<i>A</i><sub><i>i</i></sub><i>Y</i><sub><i>i</i></sub>) + <i>α</i><sub><i>i</i></sub>Δ<i>T</i><br>Sign convention: thermal expansion (<i>α</i> Δ<i>T</i> > 0 for heating) tends to increase length; tensile force (<i>F</i> > 0) increases length; compressive force (<i>F</i> < 0) decreases length.',
          '<b>Apply the global constraint.</b><br>• <b>Rigid walls, no external load:</b> ∑ Δ<i>L</i><sub><i>i</i></sub> = 0 ⟹ ∑(<i>ε</i><sub><i>i</i></sub><i>L</i><sub>0<i>i</i></sub>) = 0.<br>• <b>Rigid walls + hanging mass <i>m</i> at a junction:</b> The force in the segments changes at the junction. Write compatibility for the whole system: ∑(<i>ε</i><sub><i>i</i></sub><i>L</i><sub>0<i>i</i></sub>) = 0, but <i>F</i> is piecewise constant.<br>• <b>One end fixed, other end free but attached to a spring (stiffness <i>k</i>):</b> ∑ Δ<i>L</i><sub><i>i</i></sub> = −<i>F</i>/<i>k</i> (an expanding rod compresses the spring, so <i>F</i> < 0).',
          '<b>Solve for <i>F</i></b>, then back-substitute for stresses <i>σ</i><sub><i>i</i></sub> = <i>F</i>/<i>A</i><sub><i>i</i></sub> and final lengths.',
          '<b>Bimetallic strip (curvature).</b> Two strips of equal length <i>L</i><sub>0</sub> and equal width, thicknesses <i>d</i><sub>1</sub> and <i>d</i><sub>2</sub>, Young’s moduli <i>E</i><sub>1</sub> and <i>E</i><sub>2</sub>, are bonded together; strip 2 has the larger expansion coefficient, <i>α</i><sub>2</sub> > <i>α</i><sub>1</sub>. On heating by Δ<i>T</i> the strip bends with strip 2 on the outside. With <i>m</i> = <i>d</i><sub>1</sub>/<i>d</i><sub>2</sub>, <i>n</i> = <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> and total thickness <i>h</i> = <i>d</i><sub>1</sub> + <i>d</i><sub>2</sub>, beam theory (Timoshenko) gives the radius of curvature<br><i>R</i> = <i>h</i>/(6(<i>α</i><sub>2</sub> − <i>α</i><sub>1</sub>)Δ<i>T</i>) · [3(1 + <i>m</i>)<sup>2</sup> + (1 + <i>mn</i>)(<i>m</i><sup>2</sup> + 1/(<i>mn</i>))]/(1 + <i>m</i>)<sup>2</sup><br><b>Exam case</b> (equal thickness <i>d</i>, equal <i>E</i>, so <i>m</i> = <i>n</i> = 1 and <i>h</i> = 2<i>d</i>): the bracket equals 16/4 = 4, giving<br><i>R</i> = 4<i>d</i>/(3(<i>α</i><sub>2</sub> − <i>α</i><sub>1</sub>)Δ<i>T</i>)<br>Derivation for the exam case. Let the interface be at <i>y</i> = 0, with strip 1 at −<i>d</i> < <i>y</i> < 0 and strip 2 at 0 < <i>y</i> < <i>d</i>. Plane sections stay plane, so the total strain is <i>ε</i><sub>0</sub> + <i>κy</i> with curvature <i>κ</i> = 1/<i>R</i>, and the stress in a strip is <i>E</i>(<i>ε</i><sub>0</sub> + <i>κy</i> − <i>α</i>Δ<i>T</i>). Zero net force gives <i>ε</i><sub>0</sub> = ½(<i>α</i><sub>1</sub> + <i>α</i><sub>2</sub>)Δ<i>T</i>. Zero net moment about the interface gives ½<i>d</i><sup>2</sup>(<i>α</i><sub>1</sub> − <i>α</i><sub>2</sub>)Δ<i>T</i> + ⅔<i>κd</i><sup>3</sup> = 0, i.e. <i>κ</i> = 3(<i>α</i><sub>2</sub> − <i>α</i><sub>1</sub>)Δ<i>T</i>/(4<i>d</i>), which is the result above. Note: a cruder model that only equates the lengths of the two strip centre-lines gives <i>R</i> = <i>d</i>/[(<i>α</i><sub>2</sub> − <i>α</i><sub>1</sub>)Δ<i>T</i>]. It ignores the force and moment balance, and the correct factor is 4/3 larger; use <i>R</i> = 4<i>d</i>/[3(<i>α</i><sub>2</sub> − <i>α</i><sub>1</sub>)Δ<i>T</i>].',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Composite Rod Between Rigid Walls',
        q: 'A copper rod (<i>L</i><sub>1</sub> = 0.40 m, <i>A</i><sub>1</sub> = 4.0 cm<sup>2</sup>, <i>Y</i><sub>1</sub> = 1.1 × 10<sup>11</sup> Pa, <i>α</i><sub>1</sub> = 1.7 × 10<sup>−5</sup> K<sup>−1</sup>) and a steel rod (<i>L</i><sub>2</sub> = 0.60 m, <i>A</i><sub>2</sub> = 2.0 cm<sup>2</sup>, <i>Y</i><sub>2</sub> = 2.0 × 10<sup>11</sup> Pa, <i>α</i><sub>2</sub> = 1.2 × 10<sup>−5</sup> K<sup>−1</sup>) are placed end-to-end between rigid supports with no initial stress at 20 °C. The temperature is raised to 120 °C. Find the stress in each rod and the displacement of the junction.',
        steps: [
          '<b>Step 1 — Force balance.</b> Series connection ⇒ <i>F</i> is common. Let <i>F</i> be compressive (negative).',
          '<b>Step 2 — Compatibility.</b> Total length fixed:<br>Δ<i>L</i><sub>1</sub> + Δ<i>L</i><sub>2</sub> = 0<br>(<i>FL</i><sub>1</sub>/(<i>A</i><sub>1</sub><i>Y</i><sub>1</sub>) + <i>α</i><sub>1</sub><i>L</i><sub>1</sub>Δ<i>T</i>) + (<i>FL</i><sub>2</sub>/(<i>A</i><sub>2</sub><i>Y</i><sub>2</sub>) + <i>α</i><sub>2</sub><i>L</i><sub>2</sub>Δ<i>T</i>) = 0',
          '<b>Step 3 — Insert numbers (SI).</b> Δ<i>T</i> = 100 K, <i>A</i><sub>1</sub> = 4.0 × 10<sup>−4</sup> m<sup>2</sup>, <i>A</i><sub>2</sub> = 2.0 × 10<sup>−4</sup> m<sup>2</sup>.<br><i>F</i>(0.40)/[(4.0 × 10<sup>−4</sup>)(1.1 × 10<sup>11</sup>)] + (1.7 × 10<sup>−5</sup>)(0.40)(100)<br>+ <i>F</i>(0.60)/[(2.0 × 10<sup>−4</sup>)(2.0 × 10<sup>11</sup>)] + (1.2 × 10<sup>−5</sup>)(0.60)(100) = 0<br><i>F</i>(0.40/(4.4 × 10<sup>7</sup>) + 0.60/(4.0 × 10<sup>7</sup>)) + (6.8 × 10<sup>−4</sup> + 7.2 × 10<sup>−4</sup>) = 0<br><i>F</i>(9.09 × 10<sup>−9</sup> + 15.0 × 10<sup>−9</sup>) + 14.0 × 10<sup>−4</sup> = 0<br><i>F</i>(24.09 × 10<sup>−9</sup>) = −1.40 × 10<sup>−3</sup><br><i>F</i> = −5.81 × 10<sup>4</sup> N   (compression)',
          '<b>Step 4 — Stresses.</b><br><i>σ</i><sub>1</sub> = <i>F</i>/<i>A</i><sub>1</sub> = (−5.81 × 10<sup>4</sup>)/(4.0 × 10<sup>−4</sup>) = −1.45 × 10<sup>8</sup> Pa<br><i>σ</i><sub>2</sub> = <i>F</i>/<i>A</i><sub>2</sub> = (−5.81 × 10<sup>4</sup>)/(2.0 × 10<sup>−4</sup>) = −2.91 × 10<sup>8</sup> Pa',
          '<b>Step 5 — Junction displacement (from left wall).</b><br>Δ<i>L</i><sub>1</sub> = <i>FL</i><sub>1</sub>/(<i>A</i><sub>1</sub><i>Y</i><sub>1</sub>) + <i>α</i><sub>1</sub><i>L</i><sub>1</sub>Δ<i>T</i><br>= [(−5.81 × 10<sup>4</sup>)(0.40)]/[(4.0 × 10<sup>−4</sup>)(1.1 × 10<sup>11</sup>)] + 6.8 × 10<sup>−4</sup><br>= −5.28 × 10<sup>−4</sup> + 6.80 × 10<sup>−4</sup> = +1.52 × 10<sup>−4</sup> m = 0.152 mm',
          'The junction moves <b>0.152 mm to the right</b> (towards steel). Both rods try to expand — copper by 0.68 mm and steel by 0.72 mm, a total of 1.40 mm — but the walls forbid any net change in length. Steel, which wanted to expand more, is compressed by 0.872 mm (more than its free expansion), while copper is compressed by only 0.528 mm (less than its free expansion). So copper ends up net longer by 0.152 mm and steel net shorter by 0.152 mm, and the junction shifts toward the steel side.',
          '<b>Check.</b> Free expansions: Cu = 0.68 mm, steel = 0.72 mm; total free = 1.40 mm = total compression (0.528 + 0.872 mm). Net Cu = +0.152 mm and net steel = 0.720 − 0.872 = −0.152 mm. Consistent.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Bimetallic Strip Curvature',
        q: 'A bimetallic strip consists of brass (<i>α</i> = 1.9 × 10<sup>−5</sup> K<sup>−1</sup>) and steel (<i>α</i> = 1.2 × 10<sup>−5</sup> K<sup>−1</sup>), each 0.50 mm thick and 20 mm wide, bonded over a length 10 cm. Initially straight at 0 °C. Find the radius of curvature at 100 °C. Assume Young’s moduli are equal.',
        steps: [
          '<b>Step 1 — Identify parameters.</b> <i>d</i> = 0.50 × 10<sup>−3</sup> m for each strip, Δ<i>T</i> = 100 K. Since <i>α</i><sub>brass</sub> > <i>α</i><sub>steel</sub>, brass expands more, so the strip bends with brass on the <b>outer</b> (convex) side.',
          '<b>Step 2 — Formula (equal <i>E</i>, equal thickness <i>d</i>).</b><br><i>R</i> = 4<i>d</i>/(3(<i>α</i><sub>brass</sub> − <i>α</i><sub>steel</sub>)Δ<i>T</i>)',
          '<b>Step 3 — Compute.</b><br><i>R</i> = 4(0.50 × 10<sup>−3</sup>)/(3 × (1.9 − 1.2) × 10<sup>−5</sup> × 100) = (2.0 × 10<sup>−3</sup>)/(2.1 × 10<sup>−3</sup>)',
        ],
        ans: 'Radius of curvature ≈ 0.95 m (brass on the outside).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Two rods A and B of equal length <i>L</i> and cross-section <i>A</i> are joined end-to-end between rigid walls. <i>α</i><sub><i>A</i></sub> = 2<i>α</i>, <i>Y</i><sub><i>A</i></sub> = <i>Y</i>; <i>α</i><sub><i>B</i></sub> = <i>α</i>, <i>Y</i><sub><i>B</i></sub> = 2<i>Y</i>. The temperature is increased by Δ<i>T</i>. Find the stress in rod A.',
            a: 'The force <i>F</i> is common, and Δ<i>L</i><sub><i>A</i></sub> + Δ<i>L</i><sub><i>B</i></sub> = 0:<br><i>FL</i>/(<i>AY</i>) + 2<i>αL</i>Δ<i>T</i> + <i>FL</i>/(<i>A</i>(2<i>Y</i>)) + <i>αL</i>Δ<i>T</i> = 0<br>(<i>FL</i>/(<i>AY</i>))(1 + 0.5) = −3<i>αL</i>Δ<i>T</i> ⇒ <i>F</i> = −2<i>αAY</i>Δ<i>T</i><br><i>σ</i><sub><i>A</i></sub> = <i>F</i>/<i>A</i> = −2<i>αY</i>Δ<i>T</i> (compressive), i.e. a compressive stress of magnitude 2<i>αY</i>Δ<i>T</i>.',
          },
          {
            q: '[JEE Advanced] A vertical steel rod (<i>L</i> = 1 m, <i>A</i> = 2 cm<sup>2</sup>) is clamped at its top and bottom ends between rigid supports at 0 °C. A 10 kg mass is hung from its midpoint. The rod is heated to 50 °C. Find the force in each half of the rod. (<i>Y</i> = 2 × 10<sup>11</sup> Pa, <i>α</i> = 1.2 × 10<sup>−5</sup> K<sup>−1</sup>, <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: 'The rod cannot elongate overall (rigid supports), but the midpoint, where the mass hangs, can displace by some amount <i>x</i>: the top half’s length changes by +<i>x</i> and the bottom half’s by −<i>x</i> (thermal plus mechanical together), so the two halves need not carry equal force. Let <i>F</i><sub>1</sub> be the (tension-positive) force in the top half and <i>F</i><sub>2</sub> in the bottom half.<br><br>Length change of each half (mechanical + thermal), with the midpoint displacement <i>x</i> built in:<br>Δ<i>L</i><sub>1</sub> = <i>x</i> = [<i>F</i><sub>1</sub>(<i>L</i>/2)]/(<i>AY</i>) + <i>α</i>(<i>L</i>/2)Δ<i>T</i>,   Δ<i>L</i><sub>2</sub> = −<i>x</i> = [<i>F</i><sub>2</sub>(<i>L</i>/2)]/(<i>AY</i>) + <i>α</i>(<i>L</i>/2)Δ<i>T</i><br>Adding the two equations eliminates <i>x</i> (total length is fixed) and gives the force sum:<br><i>F</i><sub>1</sub> + <i>F</i><sub>2</sub> = −2<i>AYα</i>Δ<i>T</i><br>Force balance on the hanging mass (<i>F</i><sub>1</sub> pulls up via tension in the top half, <i>F</i><sub>2</sub> pushes up via compression in the bottom half) gives <i>F</i><sub>1</sub> − <i>F</i><sub>2</sub> = <i>mg</i>. Solving the pair:<br><i>F</i><sub>1</sub> = −<i>AYα</i>Δ<i>T</i> + <i>mg</i>/2,   <i>F</i><sub>2</sub> = −<i>AYα</i>Δ<i>T</i> − <i>mg</i>/2<br>Numbers: <i>AYα</i>Δ<i>T</i> = (2 × 10<sup>−4</sup>)(2 × 10<sup>11</sup>)(1.2 × 10<sup>−5</sup>)(50) = 24000 N, and <i>mg</i>/2 = 50 N, so<br><i>F</i><sub>1</sub> = −24000 + 50 = −23950 N,   <i>F</i><sub>2</sub> = −24000 − 50 = −24050 N<br><b>Both halves are in compression</b> — the thermal force (24000 N) completely dominates the 50 N asymmetry from the hanging mass, so despite the mass “pulling” on the top half, there is no tension anywhere in the rod. The stress magnitude is ≈ 24000/(2 × 10<sup>−4</sup>) = 1.2 × 10<sup>8</sup> Pa in each half (the two halves differ by only 100 N, about 0.4 %).',
          },
          {
            q: '[CBSE] A bimetallic strip of copper (<i>α</i> = 1.7 × 10<sup>−5</sup> K<sup>−1</sup>) and steel (<i>α</i> = 1.2 × 10<sup>−5</sup> K<sup>−1</sup>), each 1 mm thick, is straight at 0 °C. Find the radius of curvature at 100 °C. (Assume equal <i>Y</i>, equal width.)',
            a: '<i>d</i> = 1 mm = 0.001 m, <i>α</i><sub>Cu</sub> − <i>α</i><sub>steel</sub> = 0.5 × 10<sup>−5</sup> K<sup>−1</sup>, Δ<i>T</i> = 100 K.<br><i>R</i> = 4<i>d</i>/(3(<i>α</i><sub>Cu</sub> − <i>α</i><sub>steel</sub>)Δ<i>T</i>) = (4 × 10<sup>−3</sup>)/(3 × 0.5 × 10<sup>−5</sup> × 100) = (4 × 10<sup>−3</sup>)/(1.5 × 10<sup>−3</sup>) ≈ <b>2.7 m</b>',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Steady Conduction in Cylindrical & Spherical Shells',
    extra: true,
    kalam:
      'The heat current H is constant in steady state, but the area A(r) changes with radius, so the temperature gradient dT/dr is not constant.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 derived thermal resistance for a slab: <i>R</i> = <i>L</i>/(<i>KA</i>). JEE Advanced routinely asks for heat flow through a <b>pipe wall</b> (cylindrical) or a <b>spherical shell</b> (e.g., a hollow sphere cooling in a bath). The heat current <i>H</i> is constant in steady state, but the area <i>A</i>(<i>r</i>) changes with radius, so the temperature gradient d<i>T</i>/d<i>r</i> is not constant. You must integrate Fourier’s law.',
      },

      { t: 'part', title: 'Method: Cylindrical shell (pipe)' },
      {
        t: 'p',
        html: '<b>Geometry:</b> Length <i>L</i>, inner radius <i>r</i><sub>1</sub>, outer radius <i>r</i><sub>2</sub>, conductivity <i>K</i>. Inner surface at <i>T</i><sub>1</sub>, outer at <i>T</i><sub>2</sub> (<i>T</i><sub>1</sub> > <i>T</i><sub>2</sub>). Heat flows radially outward.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Fourier’s law at radius <i>r</i>.</b><br><i>H</i> = −<i>KA</i>(<i>r</i>) d<i>T</i>/d<i>r</i> = −<i>K</i>(2π<i>rL</i>) d<i>T</i>/d<i>r</i>',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Separate variables and integrate.</b><br><i>H</i> ∫<sub><i>r</i>₁</sub><sup><i>r</i>₂</sup> d<i>r</i>/<i>r</i> = −2π<i>KL</i> ∫<sub><i>T</i>₁</sub><sup><i>T</i>₂</sup> d<i>T</i><br><i>H</i> ln(<i>r</i><sub>2</sub>/<i>r</i><sub>1</sub>) = 2π<i>KL</i>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Thermal Resistance.</b><br><i>R</i><sub>cyl</sub> = ln(<i>r</i><sub>2</sub>/<i>r</i><sub>1</sub>)/(2π<i>KL</i>)   Unit: K W<sup>−1</sup><br><i>H</i> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>R</i><sub>cyl</sub>',
      },
      {
        t: 'p',
        html: '<b>Series/Parallel:</b> For composite cylinders (e.g., pipe + insulation), resistances add in series because <i>H</i> is common. The junction temperature <i>T</i><sub><i>j</i></sub> is found from <i>H</i> = (<i>T</i><sub>1</sub> − <i>T</i><sub><i>j</i></sub>)/<i>R</i><sub>1</sub> = (<i>T</i><sub><i>j</i></sub> − <i>T</i><sub>2</sub>)/<i>R</i><sub>2</sub>.',
      },

      { t: 'part', title: 'Method: Spherical shell' },
      {
        t: 'p',
        html: '<b>Geometry:</b> Inner radius <i>r</i><sub>1</sub>, outer radius <i>r</i><sub>2</sub>. Area <i>A</i>(<i>r</i>) = 4π<i>r</i><sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Fourier’s law.</b><br><i>H</i> = −<i>K</i>(4π<i>r</i><sup>2</sup>) d<i>T</i>/d<i>r</i>',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Integrate.</b><br><i>H</i> ∫<sub><i>r</i>₁</sub><sup><i>r</i>₂</sup> d<i>r</i>/<i>r</i><sup>2</sup> = −4π<i>K</i> ∫<sub><i>T</i>₁</sub><sup><i>T</i>₂</sup> d<i>T</i><br><i>H</i>(1/<i>r</i><sub>1</sub> − 1/<i>r</i><sub>2</sub>) = 4π<i>K</i>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Thermal Resistance.</b><br><i>R</i><sub>sph</sub> = (<i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>)/(4π<i>Kr</i><sub>1</sub><i>r</i><sub>2</sub>)   Unit: K W<sup>−1</sup><br><i>H</i> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>R</i><sub>sph</sub>',
      },

      { t: 'part', title: 'Variable conductivity K(T)' },
      {
        t: 'p',
        html: 'If <i>K</i> = <i>K</i><sub>0</sub>(1 + <i>βT</i>), the integration changes slightly.<br><b>Slab:</b> <i>HL</i> = <i>A</i> ∫<sub><i>T</i>₂</sub><sup><i>T</i>₁</sup> <i>K</i><sub>0</sub>(1 + <i>βT</i>) d<i>T</i> = <i>AK</i><sub>0</sub>[(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) + (<i>β</i>/2)(<i>T</i><sub>1</sub><sup>2</sup> − <i>T</i><sub>2</sub><sup>2</sup>)].<br><b>Cylinder/Sphere:</b> Substitute <i>K</i>(<i>T</i>) inside the integral before separating variables. The algebraic form remains integrable.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Steam Pipe with Insulation',
        q: 'A steam pipe (<i>r</i><sub>1</sub> = 5.0 cm, <i>r</i><sub>2</sub> = 6.0 cm, <i>K</i><sub>steel</sub> = 50 W m<sup>−1</sup> K<sup>−1</sup>) is covered with a 4.0 cm thick layer of glass wool (<i>K</i><sub>wool</sub> = 0.08 W m<sup>−1</sup> K<sup>−1</sup>). Steam at 150 °C flows inside; ambient air is at 25 °C. Find (a) the heat loss per metre of pipe, (b) the temperature at the steel–wool interface. Ignore convection/radiation at the outer surface (assume the outer wool surface is at 25 °C).',
        steps: [
          '<b>Step 1 — Radii.</b> Steel: <i>r</i><sub>1</sub> = 0.050 m, <i>r</i><sub>2</sub> = 0.060 m. Wool: <i>r</i><sub>2</sub> = 0.060 m, <i>r</i><sub>3</sub> = 0.100 m. Total temperature drop Δ<i>T</i><sub>total</sub> = 150 − 25 = 125 K. Since the answer is wanted per metre of pipe, take <i>L</i> = 1.0 m.',
          '<b>Step 2 — Resistances (per metre).</b><br><i>R</i><sub>steel</sub> = ln(0.060/0.050)/(2π(50)) = ln(1.2)/(100π) = 0.1823/314.16 = 5.80 × 10<sup>−4</sup> K/W<br><i>R</i><sub>wool</sub> = ln(0.100/0.060)/(2π(0.08)) = ln(1.667)/0.5027 = 0.5108/0.5027 = 1.016 K/W',
          '<b>Note:</b> Wool resistance is about 1750 times the steel resistance, so the steel drop is negligible.',
          '<b>Step 3 — Heat current (per metre).</b><br><i>H</i> = 125/(<i>R</i><sub>steel</sub> + <i>R</i><sub>wool</sub>) = 125/1.0166 = 123.0 W/m',
          '<b>Step 4 — Interface temperature <i>T</i><sub><i>j</i></sub>.</b><br><i>T</i><sub><i>j</i></sub> = <i>T</i><sub>steam</sub> − <i>HR</i><sub>steel</sub> = 150 − (123.0)(5.80 × 10<sup>−4</sup>) = 150 − 0.071 ≈ 149.93 °C',
          'Essentially the steam temperature. The steel offers almost no resistance.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Spherical Cavity in a Large Block',
        q: 'A spherical cavity of radius 10 cm is maintained at 200 °C inside a large block of material (<i>K</i> = 1.5 W m<sup>−1</sup> K<sup>−1</sup>) whose outer boundary is at 30 °C. Find the heat flow rate. (Treat the block as a spherical shell with <i>r</i><sub>2</sub> → ∞.)',
        steps: [
          '<b>Step 1 — Resistance formula for a sphere with <i>r</i><sub>2</sub> → ∞.</b><br><i>R</i> = lim<sub><i>r</i>₂→∞</sub> (<i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>)/(4π<i>Kr</i><sub>1</sub><i>r</i><sub>2</sub>) = 1/(4π<i>Kr</i><sub>1</sub>)',
          '<b>Step 2 — Compute.</b> <i>r</i><sub>1</sub> = 0.10 m.<br><i>R</i> = 1/(4π(1.5)(0.10)) = 1/1.885 = 0.5305 K/W',
          '<b>Step 3 — Heat flow.</b><br><i>H</i> = (200 − 30)/0.5305 = 170/0.5305 ≈ 320 W',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Advanced] A hollow sphere (<i>r</i><sub>1</sub> = 5 cm, <i>r</i><sub>2</sub> = 10 cm, <i>K</i> = 10 W m<sup>−1</sup> K<sup>−1</sup>) has its inner surface at 200 °C and outer surface at 30 °C. Find the heat flow. If a second layer (<i>r</i><sub>2</sub> = 10 cm to <i>r</i><sub>3</sub> = 15 cm, <i>K</i> = 1 W m<sup>−1</sup> K<sup>−1</sup>) is added, find the new heat flow and the interface temperature.',
            a: 'Sphere 1: <i>R</i><sub>1</sub> = (0.10 − 0.05)/(4π × 10 × 0.05 × 0.10) = 0.05/0.6283 = 0.0796 K/W, so<br><i>H</i> = 170/0.0796 ≈ <b>2.14 × 10<sup>3</sup> W</b>.<br>With the second layer: <i>R</i><sub>2</sub> = (0.15 − 0.10)/(4π × 1 × 0.10 × 0.15) = 0.05/0.1885 = 0.265 K/W, and<br><i>R</i><sub>total</sub> = 0.0796 + 0.265 = 0.345 K/W,   <i>H</i><sub>new</sub> = 170/0.345 ≈ <b>4.9 × 10<sup>2</sup> W</b>.<br><i>T</i><sub>interface</sub> = 200 − 493 × 0.0796 ≈ <b>161 °C</b>.<br>(Check from the outside: 161 − 493 × 0.265 ≈ 30 °C, as required.)',
          },
          {
            q: '[JEE Main] A cylindrical pipe (<i>L</i> = 10 m, <i>r</i><sub>1</sub> = 2 cm, <i>r</i><sub>2</sub> = 3 cm, <i>K</i> = 50 W m<sup>−1</sup> K<sup>−1</sup>) carries steam at 150 °C. It is insulated with a 5 cm thick layer (<i>K</i> = 0.1 W m<sup>−1</sup> K<sup>−1</sup>). Ambient is 25 °C. Find the heat loss per hour. (Ignore outer convection.)',
            a: '<i>R</i><sub>steel</sub> = ln(3/2)/(2π × 50 × 10) = 0.4055/3141.6 = 1.29 × 10<sup>−4</sup> K/W. <i>R</i><sub>insul</sub> = ln(8/3)/(2π × 0.1 × 10) = 0.981/6.283 = 0.156 K/W. <i>H</i> = 125/0.156 ≈ 800 W. Per hour = 800 × 3600 ≈ <b>2.88 MJ</b>.',
          },
          {
            q: '[NEET] The thermal resistance of a spherical shell (<i>r</i><sub>1</sub>, <i>r</i><sub>2</sub>, <i>K</i>) is <i>R</i>. If <i>r</i><sub>1</sub> and <i>r</i><sub>2</sub> are both doubled (the thickness doubles), what is the new resistance?',
            a: '<i>R</i> = (<i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>)/(4π<i>Kr</i><sub>1</sub><i>r</i><sub>2</sub>). With <i>r</i><sub>1</sub>′ = 2<i>r</i><sub>1</sub>, <i>r</i><sub>2</sub>′ = 2<i>r</i><sub>2</sub>:<br><i>R</i>′ = (2<i>r</i><sub>2</sub> − 2<i>r</i><sub>1</sub>)/(4π<i>K</i>(2<i>r</i><sub>1</sub>)(2<i>r</i><sub>2</sub>)) = [2(<i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>)]/(16π<i>Kr</i><sub>1</sub><i>r</i><sub>2</sub>) = <i>R</i>/2. <b>Half.</b>',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Exact Radiation Cooling (Beyond Newton’s Law)',
    extra: true,
    kalam:
      'Topic 04 derived Newton’s Law (−dT/dt = k(T − T₀)) by linearising Stefan’s law for small ΔT.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 04 derived Newton’s Law (−d<i>T</i>/d<i>t</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>)) by linearising Stefan’s law (<i>P</i><sub>net</sub> = <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>)) for small Δ<i>T</i>. JEE Advanced often demands the <b>exact cooling time</b> for a body cooling from <i>T</i><sub>1</sub> to <i>T</i><sub>2</sub> in surroundings at <i>T</i><sub>0</sub>, where Δ<i>T</i> is not small, or asks for the cooling curve when the body has <b>temperature-dependent emissivity</b> or when <b>two bodies exchange radiation</b> in an enclosure.',
      },

      { t: 'part', title: 'Method 1: Exact integration of Stefan’s law (isolated body)' },
      {
        t: 'p',
        html: '<b>Governing equation (lumped capacitance, uniform <i>T</i>):</b><br>−<i>mc</i> d<i>T</i>/d<i>t</i> = <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>)',
      },
      {
        t: 'p',
        html: '<b>Separate variables:</b><br>d<i>t</i> = −(<i>mc</i>/(<i>eσA</i>)) d<i>T</i>/(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>)',
      },
      {
        t: 'p',
        html: '<b>Partial fractions</b> (first <i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup> = (<i>T</i><sup>2</sup> − <i>T</i><sub>0</sub><sup>2</sup>)(<i>T</i><sup>2</sup> + <i>T</i><sub>0</sub><sup>2</sup>), then split <i>T</i><sup>2</sup> − <i>T</i><sub>0</sub><sup>2</sup>):<br>1/(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>) = (1/(4<i>T</i><sub>0</sub><sup>3</sup>))[1/(<i>T</i> − <i>T</i><sub>0</sub>) − 1/(<i>T</i> + <i>T</i><sub>0</sub>)] − 1/(2<i>T</i><sub>0</sub><sup>2</sup>(<i>T</i><sup>2</sup> + <i>T</i><sub>0</sub><sup>2</sup>))<br>(Check at <i>T</i> = 0: the left side is −1/<i>T</i><sub>0</sub><sup>4</sup>; the right side is (1/(4<i>T</i><sub>0</sub><sup>3</sup>))(−2/<i>T</i><sub>0</sub>) − 1/(2<i>T</i><sub>0</sub><sup>4</sup>) = −1/<i>T</i><sub>0</sub><sup>4</sup>.)',
      },
      {
        t: 'p',
        html: '<b>Integrate from <i>t</i> = 0 (<i>T</i> = <i>T</i><sub>1</sub>) to <i>t</i> (temperature <i>T</i>):</b> using ∫ d<i>T</i>/(<i>T</i><sup>2</sup> + <i>T</i><sub>0</sub><sup>2</sup>) = (1/<i>T</i><sub>0</sub>) tan<sup>−1</sup>(<i>T</i>/<i>T</i><sub>0</sub>),<br><i>t</i> = (<i>mc</i>/(4<i>eσAT</i><sub>0</sub><sup>3</sup>))[ln([(<i>T</i><sub>1</sub> − <i>T</i><sub>0</sub>)(<i>T</i> + <i>T</i><sub>0</sub>)]/[(<i>T</i> − <i>T</i><sub>0</sub>)(<i>T</i><sub>1</sub> + <i>T</i><sub>0</sub>)]) + 2 tan<sup>−1</sup>(<i>T</i>/<i>T</i><sub>0</sub>) − 2 tan<sup>−1</sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>0</sub>)]',
      },
      {
        t: 'p',
        html: '<b>Special case <i>T</i><sub>0</sub> = 0 K (radiating into deep space):</b><br><i>t</i> = (<i>mc</i>/(3<i>eσA</i>))(1/<i>T</i><sup>3</sup> − 1/<i>T</i><sub>1</sub><sup>3</sup>)',
      },

      { t: 'part', title: 'Method 2: Two gray bodies exchanging radiation (enclosure)' },
      {
        t: 'p',
        html: 'Two large parallel plates (or concentric spheres/cylinders) at <i>T</i><sub>1</sub>, <i>T</i><sub>2</sub> with emissivities <i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>. Net heat flux from 1 to 2:<br><i>q</i> = <i>σ</i>(<i>T</i><sub>1</sub><sup>4</sup> − <i>T</i><sub>2</sub><sup>4</sup>)/(1/<i>e</i><sub>1</sub> + 1/<i>e</i><sub>2</sub> − 1)   (parallel plates)<br><i>q</i> = <i>σ</i>(<i>T</i><sub>1</sub><sup>4</sup> − <i>T</i><sub>2</sub><sup>4</sup>)/[1/<i>e</i><sub>1</sub> + (<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>)(1/<i>e</i><sub>2</sub> − 1)]   (concentric, <i>A</i><sub>1</sub> < <i>A</i><sub>2</sub>; flux per unit area of body 1)',
      },
      {
        t: 'p',
        html: '<b>Derivation sketch:</b> Radiosity method. Each surface leaves with radiosity <i>J</i> = <i>eσT</i><sup>4</sup> + (1 − <i>e</i>)<i>G</i>, where <i>G</i> is the irradiation falling on it. Eliminating <i>G</i> between the two surfaces, the net flux is driven by the black-body emissive powers <i>σT</i><sub>1</sub><sup>4</sup> and <i>σT</i><sub>2</sub><sup>4</sup> across the series “resistances” (1 − <i>e</i><sub>1</sub>)/<i>e</i><sub>1</sub>, 1 and (1 − <i>e</i><sub>2</sub>)/<i>e</i><sub>2</sub>, which add to 1/<i>e</i><sub>1</sub> + 1/<i>e</i><sub>2</sub> − 1. Memorise the denominator.',
      },

      { t: 'part', title: 'Method 3: Selective surfaces (spectral emissivity)' },
      {
        t: 'p',
        html: 'A surface has <i>e</i>(<i>λ</i>) = <i>e</i><sub>1</sub> for <i>λ</i> < <i>λ</i><sub><i>c</i></sub> and <i>e</i><sub>2</sub> for <i>λ</i> > <i>λ</i><sub><i>c</i></sub>. At temperature <i>T</i>, the peak wavelength is <i>λ</i><sub><i>m</i></sub> ≈ <i>b</i>/<i>T</i>.<br>• If <i>λ</i><sub><i>m</i></sub> ≪ <i>λ</i><sub><i>c</i></sub> (very hot), the surface “sees” mostly <i>e</i><sub>1</sub>.<br>• If <i>λ</i><sub><i>m</i></sub> ≫ <i>λ</i><sub><i>c</i></sub> (cool), the surface “sees” mostly <i>e</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Effective emissivity:</b><br><i>e</i><sub>eff</sub>(<i>T</i>) = (∫<sub>0</sub><sup>∞</sup> <i>e</i>(<i>λ</i>)<i>E</i><sub><i>bλ</i></sub>(<i>T</i>) d<i>λ</i>)/(<i>σT</i><sup>4</sup>)<br>For a step-function <i>e</i>(<i>λ</i>), this is a weighted mix of <i>e</i><sub>1</sub> and <i>e</i><sub>2</sub> given by the black-body fraction <i>F</i>(0 → <i>λ</i><sub><i>c</i></sub><i>T</i>) of the total emission that lies below <i>λ</i><sub><i>c</i></sub>. JEE Advanced may give you a graph of <i>e</i>(<i>λ</i>) and ask for the equilibrium temperature of a satellite plate facing the Sun (<i>α</i><sub>solar</sub> ≈ 1 for <i>λ</i> < 2 μm, <i>ε</i><sub>IR</sub> ≈ 0.1 for <i>λ</i> > 2 μm).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Exact Cooling Time',
        q: 'A copper sphere (<i>r</i> = 2.0 cm, <i>ρ</i> = 8960 kg m<sup>−3</sup>, <i>c</i> = 385 J kg<sup>−1</sup> K<sup>−1</sup>, <i>e</i> = 0.8) cools from 500 K to 400 K in surroundings at 300 K. Find the time taken. (<i>σ</i> = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>.) Compare with Newton’s law approximation.',
        steps: [
          '<b>Step 1 — Parameters.</b><br><i>m</i> = <i>ρ</i> · (4/3)π<i>r</i><sup>3</sup> = 8960 × (4/3)π(0.02)<sup>3</sup> = 8960 × 3.351 × 10<sup>−5</sup> = 0.300 kg<br><i>A</i> = 4π<i>r</i><sup>2</sup> = 4π(0.02)<sup>2</sup> = 5.027 × 10<sup>−3</sup> m<sup>2</sup><br><i>mc</i>/(<i>eσA</i>) = (0.300 × 385)/(0.8 × 5.67 × 10<sup>−8</sup> × 5.027 × 10<sup>−3</sup>) = 115.5/(2.28 × 10<sup>−10</sup>) = 5.07 × 10<sup>11</sup> s K<sup>3</sup>',
          '<b>Step 2 — Exact formula.</b> With <i>T</i><sub>0</sub> = 300 K, <i>T</i><sub>1</sub> = 500 K, <i>T</i><sub>2</sub> = 400 K:<br><i>t</i> = (<i>mc</i>/(4<i>eσAT</i><sub>0</sub><sup>3</sup>))[ln([(<i>T</i><sub>1</sub> − <i>T</i><sub>0</sub>)(<i>T</i><sub>2</sub> + <i>T</i><sub>0</sub>)]/[(<i>T</i><sub>2</sub> − <i>T</i><sub>0</sub>)(<i>T</i><sub>1</sub> + <i>T</i><sub>0</sub>)]) + 2 tan<sup>−1</sup>(<i>T</i><sub>2</sub>/<i>T</i><sub>0</sub>) − 2 tan<sup>−1</sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>0</sub>)]<br>Term 1: ln((200/100) × (700/800)) = ln(1.75) = 0.5596.<br>Term 2: 2[tan<sup>−1</sup>(1.333) − tan<sup>−1</sup>(1.667)] = 2[0.9273 − 1.0304] = −0.2062.<br>Bracket = 0.5596 − 0.2062 = 0.3534.<br>Prefactor = (5.07 × 10<sup>11</sup>)/(4 × (300)<sup>3</sup>) = (5.07 × 10<sup>11</sup>)/(1.08 × 10<sup>8</sup>) = 4694 s.<br><i>t</i><sub>exact</sub> = 4694 × 0.3534 ≈ <b>1.66 × 10<sup>3</sup> s ≈ 27.7 min</b>',
          '<b>Step 3 — Newton approximation</b> (<i>k</i> = 4<i>eσAT</i><sub>0</sub><sup>3</sup>/(<i>mc</i>)).<br><i>k</i> = (4 × 0.8 × 5.67 × 10<sup>−8</sup> × 5.027 × 10<sup>−3</sup> × (300)<sup>3</sup>)/115.5 = 2.13 × 10<sup>−4</sup> s<sup>−1</sup><br><i>t</i><sub>Newton</sub> = (1/<i>k</i>) ln((<i>T</i><sub>1</sub> − <i>T</i><sub>0</sub>)/(<i>T</i><sub>2</sub> − <i>T</i><sub>0</sub>)) = 4694 × ln 2 ≈ <b>3.25 × 10<sup>3</sup> s ≈ 54.2 min</b>',
          '<b>Conclusion:</b> Newton’s law overestimates the cooling time here (3.25 × 10<sup>3</sup> s against 1.66 × 10<sup>3</sup> s). It uses the radiative loss coefficient 4<i>eσAT</i><sub>0</sub><sup>3</sup> evaluated at the surroundings’ temperature, which is the smallest possible value; the true loss <i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup> exceeds 4<i>T</i><sub>0</sub><sup>3</sup>(<i>T</i> − <i>T</i><sub>0</sub>) whenever <i>T</i> > <i>T</i><sub>0</sub>, so the real body cools faster than Newton’s law predicts. <b>Always check if Δ<i>T</i>/<i>T</i><sub>0</sub> < 0.1 before using Newton.</b>',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Satellite Plate Equilibrium',
        q: 'A flat plate in Earth orbit faces the Sun. Solar constant <i>S</i> = 1360 W m<sup>−2</sup>. The plate has <i>α</i> = 0.9 for <i>λ</i> < 2.0 μm (solar spectrum peak ∼ 0.5 μm) and <i>ε</i> = 0.1 for <i>λ</i> > 2.0 μm (the plate’s own thermal spectrum). The back side is perfectly insulated. Find the equilibrium temperature.',
        steps: [
          '<b>Step 1 — Energy balance.</b> Absorbed solar power = emitted thermal power.<br><i>α</i><sub>solar</sub><i>S</i> = <i>ε</i><sub>IR</sub><i>σT</i><sup>4</sup>',
          '<b>Step 2 — Solve.</b><br><i>T</i><sup>4</sup> = (0.9 × 1360)/(0.1 × 5.67 × 10<sup>−8</sup>) = 1224/(5.67 × 10<sup>−9</sup>) = 2.158 × 10<sup>11</sup> K<sup>4</sup><br><i>T</i> = (2.158 × 10<sup>11</sup>)<sup>1/4</sup> ≈ 682 K',
          '<b>Check:</b> <i>λ</i><sub><i>m</i></sub> = <i>b</i>/<i>T</i> = 2.9 × 10<sup>−3</sup>/682 = 4.25 μm > 2.0 μm, so the assumption <i>ε</i> = 0.1 for the plate’s own radiation is self-consistent.',
          'A black plate (<i>α</i> = <i>ε</i> = 1) would settle at 394 K. The selective surface runs hotter because it traps its own heat (low <i>ε</i>) while absorbing sunlight well (high <i>α</i>).',
        ],
        ans: '682 K (≈ 409 °C)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Advanced] A black body (<i>m</i> = 1 kg, <i>c</i> = 500 J kg<sup>−1</sup> K<sup>−1</sup>, <i>A</i> = 0.01 m<sup>2</sup>) cools from 1000 K to 500 K in 0 K surroundings. Find the time.',
            a: '<i>T</i><sub>0</sub> = 0: <i>t</i> = (<i>mc</i>/(3<i>eσA</i>))(1/<i>T</i><sub>2</sub><sup>3</sup> − 1/<i>T</i><sub>1</sub><sup>3</sup>), with <i>mc</i> = 500 and <i>eσA</i> = 1 × 5.67 × 10<sup>−8</sup> × 0.01 = 5.67 × 10<sup>−10</sup>.<br><i>t</i> = (500/(3 × 5.67 × 10<sup>−10</sup>))(1/500<sup>3</sup> − 1/1000<sup>3</sup>) = 2.94 × 10<sup>11</sup> × (8 × 10<sup>−9</sup> − 1 × 10<sup>−9</sup>) = 2.94 × 10<sup>11</sup> × 7 × 10<sup>−9</sup> ≈ <b>2058 s</b>.',
          },
          {
            q: '[JEE Advanced] Two large parallel plates at <i>T</i><sub>1</sub> = 500 K, <i>T</i><sub>2</sub> = 300 K with <i>e</i><sub>1</sub> = 0.8, <i>e</i><sub>2</sub> = 0.6. Find the net radiative flux (W m<sup>−2</sup>).',
            a: '<i>q</i> = <i>σ</i>(500<sup>4</sup> − 300<sup>4</sup>)/(1/0.8 + 1/0.6 − 1) = [5.67 × 10<sup>−8</sup>(6.25 × 10<sup>10</sup> − 0.81 × 10<sup>10</sup>)]/(1.25 + 1.667 − 1)<br>= (5.67 × 10<sup>−8</sup> × 5.44 × 10<sup>10</sup>)/1.917 = 3084/1.917 ≈ <b>1609 W m<sup>−2</sup></b>.',
          },
          {
            q: '[JEE Main] A body cools from 80 °C to 60 °C in 5 min (surroundings at 20 °C). Using the exact Stefan law (<i>e</i> = 1), find the time to cool from 60 °C to 40 °C. (Use the first interval to fix <i>mc</i>/(<i>eσA</i>); then take the ratio of the two times.)',
            a: 'Use the exact formula with <i>T</i><sub>0</sub> = 293 K and the temperatures <i>T</i><sub>1</sub> = 353 K (80 °C), <i>T</i><sub>2</sub> = 333 K (60 °C), <i>T</i><sub>3</sub> = 313 K (40 °C). Writing <i>t</i> = (<i>mc</i>/(4<i>eσAT</i><sub>0</sub><sup>3</sup>))<i>ℬ</i>, the unknown prefactor cancels in the ratio of the two intervals, so <i>t</i><sub>23</sub>/<i>t</i><sub>12</sub> = <i>ℬ</i><sub>23</sub>/<i>ℬ</i><sub>12</sub>, where<br><i>ℬ</i><sub>12</sub> = ln([(<i>T</i><sub>1</sub> − <i>T</i><sub>0</sub>)(<i>T</i><sub>2</sub> + <i>T</i><sub>0</sub>)]/[(<i>T</i><sub>2</sub> − <i>T</i><sub>0</sub>)(<i>T</i><sub>1</sub> + <i>T</i><sub>0</sub>)]) + 2(tan<sup>−1</sup>(<i>T</i><sub>2</sub>/<i>T</i><sub>0</sub>) − tan<sup>−1</sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>0</sub>)) = ln((60/40) × (626/646)) + 2(0.8492 − 0.8780) = 0.3164<br><i>ℬ</i><sub>23</sub> = ln([(<i>T</i><sub>2</sub> − <i>T</i><sub>0</sub>)(<i>T</i><sub>3</sub> + <i>T</i><sub>0</sub>)]/[(<i>T</i><sub>3</sub> − <i>T</i><sub>0</sub>)(<i>T</i><sub>2</sub> + <i>T</i><sub>0</sub>)]) + 2(tan<sup>−1</sup>(<i>T</i><sub>3</sub>/<i>T</i><sub>0</sub>) − tan<sup>−1</sup>(<i>T</i><sub>2</sub>/<i>T</i><sub>0</sub>)) = ln((40/20) × (606/626)) + 2(0.8184 − 0.8492) = 0.5990<br><i>t</i><sub>23</sub> = 5 min × 0.5990/0.3164 ≈ <b>9.5 min</b>.<br>For comparison, Newton’s law gives 5 × (ln 2)/(ln 1.5) ≈ 8.5 min.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Advanced Calorimetry: Variable Specific Heat & Continuous Power',
    extra: true,
    kalam: 'Real materials have c = c(T) (e.g., solids at low T: c ∝ T³).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 assumed constant <i>c</i>. Real materials have <i>c</i> = <i>c</i>(<i>T</i>) (e.g., solids at low <i>T</i>: <i>c</i> ∝ <i>T</i><sup>3</sup>; gases: <i>c</i><sub><i>v</i></sub> = <i>a</i> + <i>bT</i>). JEE Advanced asks for:<br>1. <b>Heat required</b> when <i>c</i> = <i>a</i> + <i>bT</i>: <i>Q</i> = <i>m</i> ∫<sub><i>T</i>₁</sub><sup><i>T</i>₂</sup> (<i>a</i> + <i>bT</i>) d<i>T</i>.<br>2. <b>Cooling/heating curves under constant power <i>P</i>:</b> <i>P</i> = <i>m c</i>(<i>T</i>) d<i>T</i>/d<i>t</i> ⟹ d<i>t</i> = (<i>m c</i>(<i>T</i>)/<i>P</i>) d<i>T</i>.<br>3. <b>Determining the water equivalent (<i>w</i>) experimentally:</b> mix known masses at known temperatures and solve for <i>w</i>.',
      },

      { t: 'part', title: 'Method: Variable specific heat integration' },
      {
        t: 'p',
        html: '<b>Given <i>c</i>(<i>T</i>) = <i>c</i><sub>0</sub> + <i>βT</i> (common model).</b><br><i>Q</i> = <i>m</i> ∫<sub><i>T</i>₁</sub><sup><i>T</i>₂</sup> (<i>c</i><sub>0</sub> + <i>βT</i>) d<i>T</i> = <i>m</i>[<i>c</i><sub>0</sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) + (<i>β</i>/2)(<i>T</i><sub>2</sub><sup>2</sup> − <i>T</i><sub>1</sub><sup>2</sup>)]',
      },
      {
        t: 'p',
        html: '<b>Units:</b> <i>c</i><sub>0</sub> in J kg<sup>−1</sup> K<sup>−1</sup>, <i>β</i> in J kg<sup>−1</sup> K<sup>−2</sup>, <i>Q</i> in J.',
      },
      {
        t: 'p',
        html: '<b>Constant Power Heating:</b><br><i>t</i> = (<i>m</i>/<i>P</i>) ∫<sub><i>T</i>₁</sub><sup><i>T</i>₂</sup> <i>c</i>(<i>T</i>) d<i>T</i> = (<i>m</i>/<i>P</i>)[<i>c</i><sub>0</sub>Δ<i>T</i> + (<i>β</i>/2)(<i>T</i><sub>2</sub><sup>2</sup> − <i>T</i><sub>1</sub><sup>2</sup>)]',
      },

      { t: 'part', title: 'Method: Finding water equivalent of calorimeter' },
      {
        t: 'p',
        html: '<b>Experiment:</b> A calorimeter (mass <i>m</i><sub><i>c</i></sub>, unknown specific heat <i>c</i><sub><i>c</i></sub>, water equivalent <i>w</i> = (<i>m</i><sub><i>c</i></sub><i>c</i><sub><i>c</i></sub>)/<i>c</i><sub><i>w</i></sub>) contains <i>m</i><sub><i>w</i></sub> of water at <i>T</i><sub>1</sub>. Add <i>m</i><sub><i>h</i></sub> of hot water at <i>T</i><sub>2</sub>. Final temperature <i>T</i><sub><i>f</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Balance:</b><br><i>m</i><sub><i>h</i></sub><i>c</i><sub><i>w</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub><i>f</i></sub>) = (<i>m</i><sub><i>w</i></sub><i>c</i><sub><i>w</i></sub> + <i>wc</i><sub><i>w</i></sub>)(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub>1</sub>)<br><i>w</i> = [<i>m</i><sub><i>h</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub><i>f</i></sub>)]/(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub>1</sub>) − <i>m</i><sub><i>w</i></sub>',
      },
      {
        t: 'p',
        html: '<b>Several-trial (graphical) method:</b> Do several mixes with different <i>m</i><sub><i>h</i></sub> (same <i>T</i><sub>1</sub>, <i>T</i><sub>2</sub>, <i>m</i><sub><i>w</i></sub>). From the balance, <i>m</i><sub><i>h</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub><i>f</i></sub>) = (<i>m</i><sub><i>w</i></sub> + <i>w</i>)(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub>1</sub>), so a plot of <i>m</i><sub><i>h</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub><i>f</i></sub>) against (<i>T</i><sub><i>f</i></sub> − <i>T</i><sub>1</sub>) is a straight line with slope <i>m</i><sub><i>w</i></sub> + <i>w</i>, and <i>w</i> = slope − <i>m</i><sub><i>w</i></sub>. If the heat leaked to the surroundings is about the same in every trial, it shows up only as a non-zero intercept and leaves the slope — and hence <i>w</i> — unchanged.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Variable Specific Heat',
        q: 'The specific heat of a solid varies as <i>c</i> = (0.50 + 0.002 <i>θ</i>) J g<sup>−1</sup> K<sup>−1</sup>, where <i>θ</i> is the temperature in °C. Find the heat required to raise 200 g from 0 °C to 100 °C. Compare with using the average <i>c</i>.',
        steps: [
          '<b>Step 1 — Convert to SI / consistent units.</b> <i>m</i> = 0.200 kg, <i>c</i><sub>0</sub> = 500 J kg<sup>−1</sup> K<sup>−1</sup>, <i>β</i> = 2.0 J kg<sup>−1</sup> K<sup>−2</sup> (since 0.002 J g<sup>−1</sup> K<sup>−2</sup> = 2 J kg<sup>−1</sup> K<sup>−2</sup>).',
          '<b>Crucial:</b> a temperature difference is the same in kelvin and in °C. If <i>c</i> = <i>a</i> + <i>bθ</i> with <i>θ</i> in °C, then ∫ <i>c</i> d<i>θ</i> from <i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub> is correct as it stands, so integrate directly over <i>θ</i> from <i>θ</i><sub>1</sub> = 0 to <i>θ</i><sub>2</sub> = 100. (If <i>c</i> were given as <i>a</i> + <i>bT</i> with <i>T</i> in kelvin, you would integrate over <i>T</i> in kelvin.)',
          '<b>Step 2 — Integrate.</b><br><i>Q</i> = 0.200[500(100) + (2.0/2)(100<sup>2</sup> − 0)]<br>= 0.200[50000 + 10000] = 0.200 × 60000 = 12000 J',
          '<b>Step 3 — Average <i>c</i> method.</b><br><i>c</i><sub>avg</sub> = <i>c</i>(50) = 500 + 2 × 50 = 600 J kg<sup>−1</sup> K<sup>−1</sup><br><i>Q</i><sub>avg</sub> = 0.200 × 600 × 100 = 12000 J',
          'Matches exactly because <i>c</i> is linear in the temperature. For non-linear <i>c</i>, the average-<i>c</i> method fails.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Determining Water Equivalent',
        q: 'A calorimeter contains 100 g of water at 20.0 °C. 50 g of water at 60.0 °C is added. The final temperature is 30.0 °C. Find <i>w</i> (in grams).',
        steps: [
          '<b>Step 1 — Formula.</b><br><i>w</i> = [<i>m</i><sub><i>h</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub><i>f</i></sub>)]/(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub>1</sub>) − <i>m</i><sub><i>w</i></sub>',
          '<b>Step 2 — Substitute.</b> <i>m</i><sub><i>h</i></sub> = 50 g, <i>m</i><sub><i>w</i></sub> = 100 g, <i>T</i><sub>2</sub> = 60, <i>T</i><sub>1</sub> = 20, <i>T</i><sub><i>f</i></sub> = 30.<br><i>w</i> = [50(60 − 30)]/(30 − 20) − 100 = (50 × 30)/10 − 100 = 150 − 100 = 50 g',
          '<b>Check:</b> heat lost by the hot water = 50 × 30 = 1500 cal; heat gained by the cold water and calorimeter = (100 + 50) × 10 = 1500 cal, so the data are consistent.',
          '<b>Remark.</b> A computed <i>w</i> < 0 is impossible. It means the measured <i>T</i><sub><i>f</i></sub> is too high for the data — for instance <i>T</i><sub><i>f</i></sub> = 35 °C with these masses and temperatures would give <i>w</i> = −16.7 g, which signals an experimental error (heat leaking in, or a thermometer error) rather than a real calorimeter.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Advanced] The specific heat of a substance is <i>c</i> = 100 + 0.2 <i>T</i> (J kg<sup>−1</sup> K<sup>−1</sup>, <i>T</i> in K). Find the heat needed to warm 2 kg from 100 K to 300 K.',
            a: '<i>Q</i> = 2[100(200) + 0.1(300<sup>2</sup> − 100<sup>2</sup>)] = 2[20000 + 0.1(80000)] = 2[28000] = <b>56,000 J</b>.',
          },
          {
            q: '[JEE Main] A 2 kg block (<i>c</i> = 500 J kg<sup>−1</sup> K<sup>−1</sup>, constant) is heated by a 1000 W heater. How long does it take to go from 300 K to 400 K? How long if instead <i>c</i> = 400 + 0.5 <i>T</i>?',
            a: 'Constant <i>c</i>: <i>t</i> = <i>mc</i>Δ<i>T</i>/<i>P</i> = (2 × 500 × 100)/1000 = <b>100 s</b>.<br>Variable <i>c</i>:<br><i>t</i> = (<i>m</i>/<i>P</i>)[<i>c</i><sub>0</sub>Δ<i>T</i> + (<i>β</i>/2)(<i>T</i><sub>2</sub><sup>2</sup> − <i>T</i><sub>1</sub><sup>2</sup>)] = (2/1000)[400 × 100 + 0.25(160000 − 90000)]<br>= 0.002[40000 + 17500] = 0.002 × 57500 = <b>115 s</b>.',
          },
          {
            q: '[CBSE] In a water-equivalent experiment a calorimeter contains 80 g of water at 20 °C. 100 g of water at 70 °C is added and the final temperature is 45 °C. Find <i>w</i>. In a second trial, with fresh 80 g of water at 20 °C and 150 g of hot water at 70 °C, the final temperature is 50 °C; verify that it gives the same <i>w</i>.',
            a: 'Trial 1: <i>w</i> = [100(70 − 45)]/(45 − 20) − 80 = 100 − 80 = <b>20 g</b>.<br>Trial 2: <i>w</i> = [150(70 − 50)]/(50 − 20) − 80 = 100 − 80 = <b>20 g</b>. Both trials give the same water equivalent, <i>w</i> = 20 g.',
          },
        ],
      },
    ],
  },
];
