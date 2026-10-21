import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, the six Additional Topics, word for word from the Class 11
 * Physics Master Reference, pages 586 to 598: the addenda's shared opening
 * (p. 586, set at the head of Addendum A), then A Elongation by Integration
 * (pp. 586 to 588), B Constrained Thermal Stress (pp. 588 to 590), C The Wire
 * as a Spring, Set in Motion (pp. 591 to 592), D Two Wires Sharing a Load
 * Through a Rigid Bar (pp. 593 to 594), E The Interatomic Potential Made
 * Quantitative (pp. 595 to 596) and F Error Propagation in Searle’s Experiment
 * (pp. 596 to 598). The addenda print no drawings.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Elongation by Integration: One Master Formula for Non-Uniform Loading',
    extra: true,
    kalam:
      'Whenever either the tension T or the area A varies along the rod, apply Hooke’s law to an infinitesimal element and integrate.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gave you the full skeleton: stress and strain, the four constants, the wire-as-spring, elastic energy, yielding, beams, thermal stress, and torsion. Six examinable patterns still stand outside it, and each one is two things the chapter already teaches separately. Addendum A turns Topic 01’s two special-case integrals into one master integral covering tapered rods and piecewise tensions. Addendum B completes the thermal-stress story with gaps and dissimilar-material composites, which is where JEE actually asks it. Addendum C sets the chapter’s static spring into motion. Addendum D handles two wires sharing a load through a rigid bar — the load-distribution pattern JEE Main repeats almost yearly. Addendum E makes Topic 05’s atomic picture quantitative. Addendum F propagates experimental errors through Searle’s formula. Nothing here is new theory; it is the chapter’s own machinery run one step further.',
      },
      {
        t: 'p',
        html: 'Topic 01 derived two integrals separately: self-weight (<i>T</i> growing linearly) and the rotating rod (<i>T</i> growing quadratically). Both are instances of a single rule. Whenever either the tension <i>T</i> or the area <i>A</i> varies along the rod, apply Hooke’s law to an infinitesimal element and integrate.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Cut the rod at position <i>x</i>, where the element of length d<i>x</i> experiences local tension <i>T</i>(<i>x</i>) across local area <i>A</i>(<i>x</i>). Its stress is <i>T</i>(<i>x</i>)/<i>A</i>(<i>x</i>), its strain is <i>T</i>(<i>x</i>)/(<i>A</i>(<i>x</i>) <i>Y</i>), so it stretches by<br>d(Δ<i>L</i>) = <i>T</i>(<i>x</i>)/(<i>A</i>(<i>x</i>) <i>Y</i>) d<i>x</i>,   Δ<i>L</i> = ∫<sub>0</sub><sup><i>L</i></sup> <i>T</i>(<i>x</i>)/(<i>A</i>(<i>x</i>) <i>Y</i>) d<i>x</i>',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>T</i>/(<i>AY</i>) carries units N/(m<sup>2</sup> · Pa) = N/(m<sup>2</sup> · N m<sup>−2</sup>), which is dimensionless; multiplied by d<i>x</i> (in m) the result is a length in metres. Every elongation you compute below must come out in m — if it does not, an area or modulus was misconverted.',
      },
      {
        t: 'p',
        html: 'Three stock situations cover nearly every exam question:<br>1. <b>Uniform rod, constant tension:</b> both factors constant, giving the chapter’s <i>FL</i>/(<i>AY</i>).<br>2. <b>Piecewise-constant tension</b> (point masses hung along the wire): split the range at each mass, use the constant tension on each segment, and add the segments.<br>3. <b>Continuously varying area under constant tension:</b> substitute <i>A</i>(<i>x</i>) and integrate.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A rod in the shape of a circular frustum has end radii <i>R</i><sub>1</sub> = 2.0 mm and <i>R</i><sub>2</sub> = 4.0 mm, length <i>L</i> = 0.50 m, and Young’s modulus <i>Y</i> = 2.0 × 10<sup>11</sup> Pa. Find its elongation under a steady pull <i>F</i> = 100 N along its axis.',
        steps: [
          'Because the pull is transmitted undiminished along the rod, <i>T</i>(<i>x</i>) = <i>F</i> everywhere — only the area varies. The radius grows linearly from <i>R</i><sub>1</sub> to <i>R</i><sub>2</sub>, so<br><i>R</i>(<i>x</i>) = <i>R</i><sub>1</sub> + (<i>R</i><sub>2</sub> − <i>R</i><sub>1</sub>)<i>x</i>/<i>L</i>,   <i>A</i>(<i>x</i>) = <i>π</i>(<i>R</i><sub>1</sub> + (<i>R</i><sub>2</sub> − <i>R</i><sub>1</sub>)<i>x</i>/<i>L</i>)<sup>2</sup>',
          'Substitute into the master integral:<br>Δ<i>L</i> = <i>F</i>/(<i>πY</i>) ∫<sub>0</sub><sup><i>L</i></sup> d<i>x</i>/(<i>R</i><sub>1</sub> + <i>kx</i>)<sup>2</sup>,   <i>k</i> = (<i>R</i><sub>2</sub> − <i>R</i><sub>1</sub>)/<i>L</i>',
          'Since ∫ d<i>x</i>/(<i>R</i><sub>1</sub> + <i>kx</i>)<sup>2</sup> = −1/(<i>k</i>(<i>R</i><sub>1</sub> + <i>kx</i>)),<br>Δ<i>L</i> = <i>F</i>/(<i>πY</i>) · (1/<i>k</i>)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>) = <i>F</i>/(<i>πY</i>) · <i>L</i>/(<i>R</i><sub>2</sub> − <i>R</i><sub>1</sub>) · (<i>R</i><sub>2</sub> − <i>R</i><sub>1</sub>)/(<i>R</i><sub>1</sub><i>R</i><sub>2</sub>) = <i>FL</i>/(<i>πR</i><sub>1</sub><i>R</i><sub>2</sub><i>Y</i>)',
          '<b>The elegant result:</b> a tapered rod stretches exactly as much as a uniform wire of radius √(<i>R</i><sub>1</sub><i>R</i><sub>2</sub>) — the geometric mean of the end radii. Note it is emphatically not the uniform rod of average radius (<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>)/2: thin regions dominate because strain goes as 1/<i>A</i>.',
          'Numerically, with <i>R</i><sub>1</sub><i>R</i><sub>2</sub> = 8.0 × 10<sup>−6</sup> m<sup>2</sup>:<br>Δ<i>L</i> = (100)(0.50)/[<i>π</i>(8.0 × 10<sup>−6</sup>)(2.0 × 10<sup>11</sup>)] = 50/(5.03 × 10<sup>6</sup>) = 1.0 × 10<sup>−5</sup> m',
          '<b>Check against the wrong route.</b> A uniform rod of radius 3.0 mm would give <i>A</i> = <i>π</i>(3.0 × 10<sup>−3</sup>)<sup>2</sup> = 2.83 × 10<sup>−5</sup> m<sup>2</sup> and Δ<i>L</i> = 50/[(2.83 × 10<sup>−5</sup>)(2.0 × 10<sup>11</sup>)] = 8.8 × 10<sup>−6</sup> m — smaller, because it underweights the skinny end. When <i>R</i><sub>1</sub> = <i>R</i><sub>2</sub> = <i>R</i> the formula collapses to <i>FL</i>/(<i>πR</i><sup>2</sup><i>Y</i>), the chapter’s result, as it must.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A wire of length <i>L</i>, area <i>A</i>, density <i>ρ</i>, and Young’s modulus <i>Y</i> hangs from a ceiling with a mass <i>M</i> tied to its lower end. Find the total elongation, including the wire’s own weight. Evaluate for <i>M</i> = 5.0 kg, wire mass <i>m</i> = 2.0 kg, <i>L</i> = 2.0 m, <i>A</i> = 1.0 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa, <i>g</i> = 10 m s<sup>−2</sup>.',
        steps: [
          'Measure <i>x</i> upward from the bottom. The tension at height <i>x</i> supports the hanging mass plus the wire material below it:<br><i>T</i>(<i>x</i>) = <i>Mg</i> + <i>λgx</i>,   <i>λ</i> = <i>ρA</i> = <i>m</i>/<i>L</i>',
          'Integrate:<br>Δ<i>L</i> = ∫<sub>0</sub><sup><i>L</i></sup> (<i>Mg</i> + <i>λgx</i>)/(<i>AY</i>) d<i>x</i> = <i>MgL</i>/(<i>AY</i>) + <i>λgL</i><sup>2</sup>/(2<i>AY</i>) = <i>MgL</i>/(<i>AY</i>) + <i>mgL</i>/(2<i>AY</i>)',
          'The load contributes the ordinary <i>MgL</i>/(<i>AY</i>); the wire’s own weight contributes exactly what it would with no load, <i>mgL</i>/(2<i>AY</i>) — the two effects simply superpose because Hooke’s law is linear.',
          'Numerically, <i>AY</i> = (1.0 × 10<sup>−6</sup> m<sup>2</sup>)(2.0 × 10<sup>11</sup> Pa) = 2.0 × 10<sup>5</sup> N, so<br>Δ<i>L</i> = (5.0)(10)(2.0)/(2.0 × 10<sup>5</sup>) + (2.0)(10)(2.0)/[2(2.0 × 10<sup>5</sup>)] = (100 + 20)/(2.0 × 10<sup>5</sup>) = 6.0 × 10<sup>−4</sup> m = 0.60 mm',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A steel wire of length 2.0 m and area 1.0 mm<sup>2</sup> (<i>Y</i> = 2.0 × 10<sup>11</sup> Pa) carries a 6.0 kg mass at its midpoint and a 4.0 kg mass at its lower end. Find the total elongation (<i>g</i> = 10 m s<sup>−2</sup>).',
            a: 'Upper half carries <i>T</i> = (6.0 + 4.0)<i>g</i> = 100 N; lower half carries <i>T</i> = 4.0<i>g</i> = 40 N. With <i>AY</i> = 2.0 × 10<sup>5</sup> N: Δ<i>L</i> = [(100)(1.0) + (40)(1.0)]/(2.0 × 10<sup>5</sup>) = 7.0 × 10<sup>−4</sup> m = 0.70 mm.',
          },
          {
            q: 'A flat strip of length 0.40 m, thickness 1.0 mm, and Young’s modulus 1.0 × 10<sup>11</sup> Pa tapers linearly in breadth from 2.0 cm to 4.0 cm. It is pulled end-on with <i>F</i> = 60 N. Find the elongation.',
            a: '<i>A</i>(<i>x</i>) = <i>t</i>[<i>b</i><sub>1</sub> + (<i>b</i><sub>2</sub> − <i>b</i><sub>1</sub>)<i>x</i>/<i>L</i>] with constant thickness <i>t</i>. Integrating gives Δ<i>L</i> = <i>FL</i> ln(<i>b</i><sub>2</sub>/<i>b</i><sub>1</sub>)/[(<i>b</i><sub>2</sub> − <i>b</i><sub>1</sub>)<i>tY</i>] = (60)(0.40)(0.693)/[(0.020)(0.001)(1.0 × 10<sup>11</sup>)] = 16.6/(2.0 × 10<sup>6</sup>) = 8.3 × 10<sup>−6</sup> m. (Logarithms appear whenever breadth — not radius — tapers linearly, because then <i>A</i> itself is linear.)',
          },
          {
            q: 'An elevator cable (treat as a wire: <i>L</i> = 1.0 m, <i>A</i> = 0.50 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa) carries a 4.0 kg load. Find its elongation when the elevator (a) moves at constant velocity, (b) accelerates upward at 5.0 m s<sup>−2</sup> (<i>g</i> = 10 m s<sup>−2</sup>).',
            a: '(a) <i>T</i> = <i>Mg</i> = 40 N: Δ<i>L</i> = (40)(1.0)/[(5.0 × 10<sup>−7</sup>)(2.0 × 10<sup>11</sup>)] = 40/(1.0 × 10<sup>5</sup>) = 4.0 × 10<sup>−4</sup> m. (b) <i>T</i> = <i>M</i>(<i>g</i> + <i>a</i>) = 60 N: Δ<i>L</i> = 6.0 × 10<sup>−4</sup> m. Acceleration enters only through the effective tension.',
          },
          {
            q: 'Starting from Δ<i>L</i> = <i>FL</i>/(<i>πR</i><sub>1</sub><i>R</i><sub>2</sub><i>Y</i>), show that a conical frustum with <i>R</i><sub>1</sub> = <i>R</i><sub>2</sub> = <i>R</i> behaves as a uniform wire, and state the effective area.',
            a: 'Substituting <i>R</i><sub>1</sub> = <i>R</i><sub>2</sub> = <i>R</i> gives Δ<i>L</i> = <i>FL</i>/(<i>πR</i><sup>2</sup><i>Y</i>), the uniform-wire result; the effective area is <i>A</i><sub>eff</sub> = <i>πR</i><sub>1</sub><i>R</i><sub>2</sub>.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Constrained Thermal Stress: Gaps and Dissimilar Rods',
    extra: true,
    kalam:
      'Exams ask two refinements the chapter skips: a rod with a small gap before the wall, and two different materials welded together and then clamped.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 derives <i>σ</i> = <i>Yα</i>Δ<i>T</i> for a rod perfectly clamped at both ends. Exams ask two refinements the chapter skips: a rod with a small gap before the wall, and two different materials welded together and then clamped.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Step 1 — Ask what the rod wants to do.</b> Unclamped, a temperature change Δ<i>T</i> produces free expansion Δ<i>L</i><sub>free</sub> = <i>Lα</i>Δ<i>T</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Impose the constraint geometrically.</b> If a gap of width <i>s</i> separates the hot end from a rigid wall, the rod first fills the gap freely. Only the excess is suppressed. The imposed compressive strain is therefore<br><i>ε</i> = <i>α</i>Δ<i>T</i> − <i>s</i>/<i>L</i><br>and the compressive stress is <i>σ</i> = <i>Yε</i> — provided <i>α</i>Δ<i>T</i> > <i>s</i>/<i>L</i>. If the free expansion cannot even reach the wall, there is no contact and <i>σ</i> = 0. This conditional is where marks are lost.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Composite rods: two equations, two unknowns.</b> Weld rods 1 and 2 (lengths <i>L</i><sub>1</sub>, <i>L</i><sub>2</sub>; moduli <i>Y</i><sub>1</sub>, <i>Y</i><sub>2</sub>; areas <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>; expansion coefficients <i>α</i><sub>1</sub>, <i>α</i><sub>2</sub>) and clamp the assembly between rigid walls. Since the walls push with one continuous force,<br><i>F</i><sub>1</sub> = <i>F</i><sub>2</sub> = <i>F</i>   (equilibrium)<br>and the sum of the mechanical compressions (changes in length) must cancel the sum of the prevented thermal expansions:<br><i>FL</i><sub>1</sub>/(<i>A</i><sub>1</sub><i>Y</i><sub>1</sub>) + <i>FL</i><sub>2</sub>/(<i>A</i><sub>2</sub><i>Y</i><sub>2</sub>) = (<i>α</i><sub>1</sub><i>L</i><sub>1</sub> + <i>α</i><sub>2</sub><i>L</i><sub>2</sub>) Δ<i>T</i>   (compatibility)<br>Solve for <i>F</i>; the individual stresses follow as <i>σ</i><sub><i>i</i></sub> = <i>F</i>/<i>A</i><sub><i>i</i></sub>. Note the stresses in the two rods are generally different even though the force is common.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A steel rod of length 1.0 m and area 2.0 cm<sup>2</sup> stands with one end against a rigid wall and a gap <i>s</i> = 0.30 mm at the other end. It is heated by Δ<i>T</i> = 50 °C. Given <i>α</i> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup> and <i>Y</i> = 2.0 × 10<sup>11</sup> Pa, find the force exerted on the wall.',
        steps: [
          'Free expansion would be<br>Δ<i>L</i><sub>free</sub> = <i>Lα</i>Δ<i>T</i> = (1.0)(1.2 × 10<sup>−5</sup>)(50) = 6.0 × 10<sup>−4</sup> m = 0.60 mm',
          'This exceeds the gap, so contact occurs. The suppressed compression is 0.60 − 0.30 = 0.30 mm over 1.0 m, i.e. strain 3.0 × 10<sup>−4</sup>. Then<br><i>σ</i> = <i>Yε</i> = (2.0 × 10<sup>11</sup> Pa)(3.0 × 10<sup>−4</sup>) = 6.0 × 10<sup>7</sup> Pa<br><i>F</i> = <i>σA</i> = (6.0 × 10<sup>7</sup> Pa)(2.0 × 10<sup>−4</sup> m<sup>2</sup>) = 1.2 × 10<sup>4</sup> N = 12 kN',
          '<b>Check.</b> Had the gap been absent, <i>σ</i> = <i>Yα</i>Δ<i>T</i> = 1.2 × 10<sup>8</sup> Pa — double. Halving the suppressed strain halves the stress, exactly as linearity demands.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A steel rod (<i>L</i><sub>1</sub> = 1.0 m, <i>α</i><sub>1</sub> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>, <i>Y</i><sub>1</sub> = 2.0 × 10<sup>11</sup> Pa) is welded end-to-end to a brass rod (<i>L</i><sub>2</sub> = 1.0 m, <i>α</i><sub>2</sub> = 2.0 × 10<sup>−5</sup> °C<sup>−1</sup>, <i>Y</i><sub>2</sub> = 1.0 × 10<sup>11</sup> Pa). Both have area <i>A</i> = 1.0 cm<sup>2</sup>. The assembly is clamped between rigid walls and heated by Δ<i>T</i> = 40 °C. Find the force in each rod and the strain in each rod.',
        steps: [
          'Compatibility equation:<br><i>F</i>(<i>L</i><sub>1</sub>/(<i>A</i><sub>1</sub><i>Y</i><sub>1</sub>) + <i>L</i><sub>2</sub>/(<i>A</i><sub>2</sub><i>Y</i><sub>2</sub>)) = (<i>α</i><sub>1</sub><i>L</i><sub>1</sub> + <i>α</i><sub>2</sub><i>L</i><sub>2</sub>)Δ<i>T</i>',
          'Left bracket: 1.0/[(1.0 × 10<sup>−4</sup>)(2.0 × 10<sup>11</sup>)] + 1.0/[(1.0 × 10<sup>−4</sup>)(1.0 × 10<sup>11</sup>)] = 5.0 × 10<sup>−8</sup> + 1.0 × 10<sup>−7</sup> = 1.5 × 10<sup>−7</sup> m N<sup>−1</sup>.',
          'Right side: (1.2 × 10<sup>−5</sup> + 2.0 × 10<sup>−5</sup>)(1.0)(40) = 1.28 × 10<sup>−3</sup> m.',
          '<i>F</i> = (1.28 × 10<sup>−3</sup>)/(1.5 × 10<sup>−7</sup>) = 8.5 × 10<sup>3</sup> N',
          'Both rods are in compression with this force. The stresses are equal here (equal areas):<br><i>σ</i><sub>1</sub> = <i>σ</i><sub>2</sub> = (8.5 × 10<sup>3</sup> N)/(1.0 × 10<sup>−4</sup> m<sup>2</sup>) = 8.5 × 10<sup>7</sup> Pa<br>but the strains are not: <i>ε</i><sub>1</sub> = <i>σ</i>/<i>Y</i><sub>1</sub> = 4.3 × 10<sup>−4</sup> (steel) versus <i>ε</i><sub>2</sub> = <i>σ</i>/<i>Y</i><sub>2</sub> = 8.5 × 10<sup>−4</sup> (brass). Since both rods are 1.0 m long, their sum, 1.28 × 10<sup>−3</sup>, reproduces the prevented expansion — a built-in check. The softer brass absorbs twice the strain while carrying the same force.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A copper rod (<i>L</i> = 0.80 m, <i>Y</i> = 1.1 × 10<sup>11</sup> Pa, <i>α</i> = 1.7 × 10<sup>−5</sup> °C<sup>−1</sup>) is rigidly clamped and cooled by 25 °C. Find the stress developed and state whether it is tensile or compressive.',
            a: '<i>σ</i> = <i>Yα</i>Δ<i>T</i> = (1.1 × 10<sup>11</sup>)(1.7 × 10<sup>−5</sup>)(25) = 4.7 × 10<sup>7</sup> Pa, tensile — cooling makes the rod want to shrink, so the clamps pull it outward.',
          },
          {
            q: 'An aluminium rod of length 2.0 m (<i>α</i> = 2.4 × 10<sup>−5</sup> °C<sup>−1</sup>) sits with a gap of 1.0 mm before a wall. At what temperature rise does it just make contact?',
            a: 'Set <i>Lα</i>Δ<i>T</i> = <i>s</i>: Δ<i>T</i> = (1.0 × 10<sup>−3</sup>)/[(2.0)(2.4 × 10<sup>−5</sup>)] ≈ 21 °C.',
          },
          {
            q: 'For the steel–brass composite of the second worked example above, derive the general expression for <i>F</i> when the areas are <i>A</i><sub>1</sub> and <i>A</i><sub>2</sub> (not necessarily equal), and state which rod carries the larger stress if <i>A</i><sub>1</sub> < <i>A</i><sub>2</sub>.',
            a: '<i>F</i> = (<i>α</i><sub>1</sub><i>L</i><sub>1</sub> + <i>α</i><sub>2</sub><i>L</i><sub>2</sub>)Δ<i>T</i>/[<i>L</i><sub>1</sub>/(<i>A</i><sub>1</sub><i>Y</i><sub>1</sub>) + <i>L</i><sub>2</sub>/(<i>A</i><sub>2</sub><i>Y</i><sub>2</sub>)]; since <i>σ</i><sub><i>i</i></sub> = <i>F</i>/<i>A</i><sub><i>i</i></sub>, the narrower rod <i>A</i><sub>1</sub> carries the larger stress.',
          },
          {
            q: 'A steel rail is laid in 20 m segments with small gaps at each joint. Explain in one sentence why the gap size is chosen using <i>αL</i>Δ<i>T</i> rather than <i>σ</i> = <i>Yα</i>Δ<i>T</i>.',
            a: 'The gap exists precisely to prevent stress from developing: it accommodates the free expansion <i>αL</i>Δ<i>T</i>, keeping <i>ε</i> = 0 and hence <i>σ</i> = 0.',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'The Wire as a Spring, Set in Motion',
    extra: true,
    kalam:
      'The entire method is: replace the wire by a spring of constant k, then use Class 11 mechanics without modification.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 establishes <i>k</i> = <i>YA</i>/<i>L</i> but uses it only statically. JEE routinely attaches a mass and asks for oscillations or impact. The entire method is: replace the wire by a spring of constant <i>k</i>, then use Class 11 mechanics without modification.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          'Compute <i>k</i> = <i>YA</i>/<i>L</i> (unit N m<sup>−1</sup>). For combinations, use the series/parallel rules already in the chapter.',
          '<b>Oscillations about equilibrium:</b> after the mass settles, the static stretch <i>x</i><sub>st</sub> = <i>Mg</i>/<i>k</i> merely relocates the equilibrium point. Gravity shifts the centre of oscillation but never appears in the period:<br><i>T</i> = 2<i>π</i>√(<i>M</i>/<i>k</i>) = 2<i>π</i>√(<i>ML</i>/(<i>YA</i>))',
          '<b>Impact from a drop:</b> release the mass from height <i>h</i> above the unstretched wire. Energy conservation between release (wire slack) and the lowest point (momentarily at rest) gives<br><i>Mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup> ⟹ <i>x</i> = [<i>Mg</i> + √(<i>M</i><sup>2</sup><i>g</i><sup>2</sup> + 2<i>kMgh</i>)]/<i>k</i><br>taking the positive root. The chapter’s sudden-load result is the special case <i>h</i> = 0: then <i>x</i> = 2<i>Mg</i>/<i>k</i> = 2<i>x</i><sub>st</sub>. For <i>h</i> large compared with <i>x</i>, the <i>Mgx</i> term is a small correction and <i>x</i> ≈ √(2<i>Mgh</i>/<i>k</i>).',
          '<b>Twisting oscillations:</b> a wire twisted by angle <i>θ</i> provides restoring torque <i>C</i> = <i>cθ</i> with torsional rigidity <i>c</i> = <i>πηR</i><sup>4</sup>/(2<i>L</i>) (Topic 05), so a body of moment of inertia <i>I</i> executes<br><i>T</i> = 2<i>π</i>√(<i>I</i>/<i>c</i>)',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A mass <i>M</i> = 3.0 kg hangs from a steel wire (<i>L</i> = 1.0 m, <i>A</i> = 0.50 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa) and oscillates vertically. Find the spring constant, the static stretch, and the period.',
        steps: [
          '<i>k</i> = <i>YA</i>/<i>L</i> = (2.0 × 10<sup>11</sup> Pa)(5.0 × 10<sup>−7</sup> m<sup>2</sup>)/(1.0 m) = 1.0 × 10<sup>5</sup> N m<sup>−1</sup>',
          '<i>x</i><sub>st</sub> = <i>Mg</i>/<i>k</i> = (30 N)/(1.0 × 10<sup>5</sup> N m<sup>−1</sup>) = 3.0 × 10<sup>−4</sup> m',
          '<i>T</i> = 2<i>π</i>√(3.0/(1.0 × 10<sup>5</sup>)) s = 2<i>π</i>(5.48 × 10<sup>−3</sup>) s = 3.4 × 10<sup>−2</sup> s',
          'Note <i>g</i> appears nowhere in <i>T</i> — on the Moon the period would be identical.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Using the wire of Topic 03’s JEE Advanced worked example (<i>M</i> = <i>m</i> = 2.0 kg, <i>L</i> = 2.0 m, <i>A</i> = 1.0 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa, <i>g</i> = 10 m s<sup>−2</sup>), the block is released from rest <i>h</i> = 0.20 m above the unstretched wire. Find the maximum elongation.',
        steps: [
          'First <i>k</i> = <i>YA</i>/<i>L</i> = (2.0 × 10<sup>11</sup>)(1.0 × 10<sup>−6</sup>)/2.0 = 1.0 × 10<sup>5</sup> N m<sup>−1</sup>, and the static stretch is <i>x</i><sub>st</sub> = <i>Mg</i>/<i>k</i> = 2.0 × 10<sup>−4</sup> m (the chapter’s number).',
          'Energy conservation, release point to lowest point:<br><i>Mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup> ⟹ (20)(0.20 + <i>x</i>) = ½(1.0 × 10<sup>5</sup>)<i>x</i><sup>2</sup><br>5.0 × 10<sup>4</sup><i>x</i><sup>2</sup> − 20<i>x</i> − 4.0 = 0',
          'Taking the positive root of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 with <i>a</i> = 5.0 × 10<sup>4</sup>, <i>b</i> = −20, <i>c</i> = −4.0:<br><i>x</i> = (20 + √(400 + 8.0 × 10<sup>5</sup>))/(1.0 × 10<sup>5</sup>) = (20 + 894.6)/(1.0 × 10<sup>5</sup>) = 9.1 × 10<sup>−3</sup> m ≈ 9.1 mm',
          '<b>Checks.</b> The shortcut <i>x</i> ≈ √(2<i>Mgh</i>/<i>k</i>) = √(8.0 × 10<sup>−5</sup>) m = 8.9 mm agrees to 2%, legitimate because <i>h</i> = 0.20 m ≫ <i>x</i>. And the <i>h</i> = 0 limit of the same quadratic returns the chapter’s <i>x</i><sub>max</sub> = 2<i>x</i><sub>st</sub> = 0.40 mm — a twenty-three-fold increase from a mere 0.20 m drop height, because the quadratic term dominates.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A 1.0 kg mass on a wire (<i>L</i> = 0.50 m, <i>A</i> = 0.20 mm<sup>2</sup>, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa) oscillates vertically. Find the period.',
            a: '<i>k</i> = (2.0 × 10<sup>11</sup>)(2.0 × 10<sup>−7</sup>)/0.50 = 8.0 × 10<sup>4</sup> N m<sup>−1</sup>; <i>T</i> = 2<i>π</i>√(1.0/(8.0 × 10<sup>4</sup>)) = 2<i>π</i>(3.54 × 10<sup>−3</sup>) s = 2.2 × 10<sup>−2</sup> s.',
          },
          {
            q: 'Prove algebraically that setting <i>h</i> = 0 in the drop equation yields <i>x</i> = 2<i>Mg</i>/<i>k</i>.',
            a: 'With <i>h</i> = 0: ½<i>kx</i><sup>2</sup> = <i>Mgx</i> ⇒ <i>x</i>(½<i>kx</i> − <i>Mg</i>) = 0; rejecting the trivial root <i>x</i> = 0 leaves <i>x</i> = 2<i>Mg</i>/<i>k</i> = 2<i>x</i><sub>st</sub>.',
          },
          {
            q: 'A torsion pendulum consists of a disc of moment of inertia <i>I</i> = 0.20 kg m<sup>2</sup> suspended by a wire of radius <i>R</i> = 1.0 mm, length <i>L</i> = 1.0 m, rigidity <i>η</i> = 4.0 × 10<sup>10</sup> Pa. Find the period.',
            a: '<i>c</i> = <i>π</i>(4.0 × 10<sup>10</sup> Pa)(1.0 × 10<sup>−12</sup> m<sup>4</sup>)/(2(1.0 m)) = 6.3 × 10<sup>−2</sup> N m rad<sup>−1</sup>; <i>T</i> = 2<i>π</i>√(0.20/(6.3 × 10<sup>−2</sup>)) s = 11.2 s.',
          },
          {
            q: 'A block dropped from height <i>h</i> stretches a wire to <i>x</i><sub>1</sub>; dropped from 4<i>h</i>, it stretches to <i>x</i><sub>2</sub>. Show that for large <i>h</i>, <i>x</i><sub>2</sub> ≈ 2<i>x</i><sub>1</sub>.',
            a: 'For <i>h</i> ≫ <i>x</i>, <i>x</i> ≈ √(2<i>Mgh</i>/<i>k</i>) ∝ √<i>h</i>; quadrupling <i>h</i> doubles <i>x</i>.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Two Wires Sharing a Load Through a Rigid Bar',
    extra: true,
    kalam:
      'A weight hangs from a light rigid horizontal bar whose ends are supported by two vertical wires of different stiffness.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'A weight hangs from a light rigid horizontal bar whose ends are supported by two vertical wires of different stiffness. Which wire pulls harder? The chapter’s spring rules answer it, but only after you write the two equations exams demand: one force balance and one geometric compatibility.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Let wires 1 and 2 have spring constants <i>k</i><sub>1</sub> = <i>Y</i><sub>1</sub><i>A</i><sub>1</sub>/<i>L</i><sub>1</sub> and <i>k</i><sub>2</sub> = <i>Y</i><sub>2</sub><i>A</i><sub>2</sub>/<i>L</i><sub>2</sub>, and let the load be <i>W</i>.',
      },
      {
        t: 'p',
        html: '<b>Case 1 — the bar stays horizontal.</b> Equal extensions are forced by the geometry: Δ<i>L</i><sub>1</sub> = Δ<i>L</i><sub>2</sub>. Combined with <i>T</i><sub>1</sub> + <i>T</i><sub>2</sub> = <i>W</i>:<br><i>T</i><sub>1</sub>/<i>k</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>k</i><sub>2</sub> ⟹ <i>T</i><sub>1</sub> = <i>W</i> <i>k</i><sub>1</sub>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>),   <i>T</i><sub>2</sub> = <i>W</i> <i>k</i><sub>2</sub>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)<br>The stiffer wire carries the larger share. (For the bar actually to remain horizontal with a single hanging load, the load must sit where the moments balance: <i>T</i><sub>1</sub><i>a</i> = <i>T</i><sub>2</sub><i>b</i> for distances <i>a</i>, <i>b</i> from the load.)',
      },
      {
        t: 'p',
        html: '<b>Case 2 — the load hangs elsewhere, and the bar tilts.</b> Take moments on the light bar to relate <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub> to the load position; the extensions then differ, and the tilt follows from their difference divided by the wire separation. Never assume equal extensions unless horizontality is given or forced.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Steel (<i>Y</i><sub>s</sub> = 2.0 × 10<sup>11</sup> Pa) and copper (<i>Y</i><sub>c</sub> = 1.0 × 10<sup>11</sup> Pa) wires, each of length 1.0 m and area 1.0 mm<sup>2</sup>, hang from a ceiling 0.90 m apart and carry a light horizontal bar. A weight <i>W</i> = 150 N is hung so that the bar remains level. Find each tension and the load’s position.',
        steps: [
          'Stiffnesses: <i>k</i><sub>s</sub> = (2.0 × 10<sup>11</sup>)(1.0 × 10<sup>−6</sup>)/1.0 = 2.0 × 10<sup>5</sup> N m<sup>−1</sup>; <i>k</i><sub>c</sub> = 1.0 × 10<sup>5</sup> N m<sup>−1</sup>.',
          'Equal extensions give <i>T</i><sub>s</sub>/<i>T</i><sub>c</sub> = <i>k</i><sub>s</sub>/<i>k</i><sub>c</sub> = 2, and <i>T</i><sub>s</sub> + <i>T</i><sub>c</sub> = 150 N:<br><i>T</i><sub>s</sub> = 100 N,   <i>T</i><sub>c</sub> = 50 N,   Δ<i>L</i> = <i>T</i><sub>s</sub>/<i>k</i><sub>s</sub> = 100/(2.0 × 10<sup>5</sup>) = 5.0 × 10<sup>−4</sup> m',
          'Moments about the load (or equivalently <i>T</i><sub>c</sub> · 0.90 = <i>Wd</i> measuring <i>d</i> from the steel wire):<br><i>d</i> = (<i>T</i><sub>c</sub>/<i>W</i>)(0.90) = (50/150)(0.90) = 0.30 m',
          'The load sits 0.30 m from the steel wire — closer to the stronger supporter, exactly as lever intuition demands.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Same two wires and bar, but now the <i>W</i> = 150 N load hangs from the midpoint of the bar (separation still 0.90 m). Find the tensions and the tilt of the bar.',
        steps: [
          'Take moments about the bar’s midpoint. The bar is light, so the only torques are the two tensions acting at ±0.45 m:<br><i>T</i><sub>s</sub>(0.45) − <i>T</i><sub>c</sub>(0.45) = 0 ⟹ <i>T</i><sub>s</sub> = <i>T</i><sub>c</sub> = 75 N',
          'A surprising result: the tensions are equal regardless of stiffness — the bar enforces it by tilting. The extensions now differ:<br>Δ<i>L</i><sub>s</sub> = 75/(2.0 × 10<sup>5</sup>) = 3.75 × 10<sup>−4</sup> m,   Δ<i>L</i><sub>c</sub> = 75/(1.0 × 10<sup>5</sup>) = 7.50 × 10<sup>−4</sup> m',
          'The copper corner drops lower by <i>δ</i> = 3.75 × 10<sup>−4</sup> m, so<br><i>θ</i> ≈ <i>δ</i>/0.90 = 4.2 × 10<sup>−4</sup> rad',
          '<b>Why this is Advanced-level.</b> Cases 1 and 2 look identical but have opposite physics: horizontality forces equal extensions (unequal tensions), while a central load on a pivoting light bar forces equal tensions (unequal extensions). Recognising which quantity the constraint pins down is the entire problem.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Steel wire: <i>A</i> = 2.0 mm<sup>2</sup>, <i>L</i> = 2.0 m, <i>Y</i> = 2.0 × 10<sup>11</sup> Pa. Brass wire: <i>A</i> = 1.0 mm<sup>2</sup>, <i>L</i> = 1.0 m, <i>Y</i> = 1.0 × 10<sup>11</sup> Pa. They support a light horizontal bar carrying <i>W</i> = 120 N, hung at the position that keeps the bar level. Find the tensions and the common extension.',
            a: '<i>k</i><sub>s</sub> = (2.0 × 10<sup>11</sup>)(2.0 × 10<sup>−6</sup>)/2.0 = 2.0 × 10<sup>5</sup> N m<sup>−1</sup>; <i>k</i><sub>b</sub> = 1.0 × 10<sup>5</sup> N m<sup>−1</sup>. <i>T</i><sub>s</sub> = 120 × 2/3 = 80 N, <i>T</i><sub>b</sub> = 40 N; common extension = 80/(2.0 × 10<sup>5</sup>) = 4.0 × 10<sup>−4</sup> m.',
          },
          {
            q: 'For the setup of Question 1 with the wires 1.0 m apart, where must the load hang for the bar to stay horizontal?',
            a: 'Moments about the load: <i>T</i><sub>s</sub><i>x</i> = <i>T</i><sub>b</sub>(1.0 − <i>x</i>) with <i>T</i><sub>s</sub> = 2<i>T</i><sub>b</sub> gives <i>x</i> = 1/3 m from the steel wire.',
          },
          {
            q: 'Two identical wires support a light rigid bar (which tilts slightly); the load hangs at one-third of the separation from wire 1. Find <i>T</i><sub>1</sub> : <i>T</i><sub>2</sub>.',
            a: 'Moments: <i>T</i><sub>1</sub>(<i>d</i>/3) = <i>T</i><sub>2</sub>(2<i>d</i>/3), so <i>T</i><sub>1</sub> : <i>T</i><sub>2</sub> = 2 : 1 — position alone fixes the ratio; stiffness is irrelevant here.',
          },
          {
            q: 'In Case 1, prove that the common extension can be written as Δ<i>L</i> = <i>W</i>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>), and interpret the combination.',
            a: 'Adding Δ<i>L</i> = <i>T</i><sub>1</sub>/<i>k</i><sub>1</sub> and Δ<i>L</i> = <i>T</i><sub>2</sub>/<i>k</i><sub>2</sub> after multiplying by the respective <i>k</i>’s, or directly: <i>W</i> = <i>T</i><sub>1</sub> + <i>T</i><sub>2</sub> = Δ<i>L</i>(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>). The pair acts as springs in parallel — stiffnesses add.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'The Interatomic Potential Made Quantitative',
    extra: true,
    kalam:
      'JEE Advanced hands you an explicit U(r) and asks for the equilibrium separation, the well depth, the bond stiffness, or the resulting vibration frequency.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 argues qualitatively that atoms sit at the bottom of a parabolic well. JEE Advanced hands you an explicit <i>U</i>(<i>r</i>) and asks for the equilibrium separation, the well depth, the bond stiffness, or the resulting vibration frequency. The tools are pure calculus.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Given a pair potential <i>U</i>(<i>r</i>) with a minimum at <i>r</i> = <i>r</i><sub>0</sub>:',
      },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Equilibrium:</b> <i>F</i> = −d<i>U</i>/d<i>r</i> = 0 at <i>r</i><sub>0</sub>.',
          '<b>Well depth:</b> substitute <i>r</i><sub>0</sub> back into <i>U</i>; the binding energy is |<i>U</i>(<i>r</i><sub>0</sub>)|.',
          '<b>Bond stiffness:</b> expand about the minimum. By Taylor’s theorem,<br><i>U</i>(<i>r</i><sub>0</sub> + <i>x</i>) ≈ <i>U</i>(<i>r</i><sub>0</sub>) + ½ (d<sup>2</sup><i>U</i>/d<i>r</i><sup>2</sup>)|<sub><i>r</i>₀</sub> <i>x</i><sup>2</sup> ⟹ <i>κ</i> = (d<sup>2</sup><i>U</i>/d<i>r</i><sup>2</sup>)|<sub><i>r</i>₀</sub><br>with unit N m<sup>−1</sup>. The linear restoring force is <i>F</i> ≈ −<i>κx</i> — this is Hooke’s law, and its small-<i>x</i> validity is exactly the small-strain limit quoted in the chapter.',
          '<b>Vibrations:</b> two atoms of masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> bonded by <i>κ</i> oscillate with angular frequency <i>ω</i> = √(<i>κ</i>/<i>μ</i>), where <i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) is the reduced mass (for identical atoms, <i>μ</i> = <i>m</i>/2).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The Lennard–Jones potential <i>U</i>(<i>r</i>) = <i>A</i>/<i>r</i><sup>12</sup> − <i>B</i>/<i>r</i><sup>6</sup> describes a pair of atoms (<i>A</i>, <i>B</i> > 0). Find the equilibrium separation <i>r</i><sub>0</sub>, the well depth, and the bond stiffness <i>κ</i>.',
        steps: [
          'Differentiate and set to zero:<br>−12<i>A</i>/<i>r</i><sup>13</sup> + 6<i>B</i>/<i>r</i><sup>7</sup> = 0 ⟹ <i>r</i><sub>0</sub><sup>6</sup> = 2<i>A</i>/<i>B</i>',
          '(The second derivative is positive there, confirming a minimum.) Well depth: with <i>r</i><sub>0</sub><sup>12</sup> = 4<i>A</i><sup>2</sup>/<i>B</i><sup>2</sup>,<br><i>U</i>(<i>r</i><sub>0</sub>) = <i>AB</i><sup>2</sup>/(4<i>A</i><sup>2</sup>) − <i>B</i><sup>2</sup>/(2<i>A</i>) = <i>B</i><sup>2</sup>/(4<i>A</i>) − <i>B</i><sup>2</sup>/(2<i>A</i>) = −<i>B</i><sup>2</sup>/(4<i>A</i>)<br>so the atoms bind with energy <i>B</i><sup>2</sup>/(4<i>A</i>).',
          'Stiffness:<br>d<sup>2</sup><i>U</i>/d<i>r</i><sup>2</sup> = 156<i>A</i>/<i>r</i><sup>14</sup> − 42<i>B</i>/<i>r</i><sup>8</sup> ⟹ <i>κ</i> = 156<i>A</i>/(<i>r</i><sub>0</sub><sup>8</sup><i>r</i><sub>0</sub><sup>6</sup>) − 42<i>B</i>/<i>r</i><sub>0</sub><sup>8</sup> = (78<i>B</i> − 42<i>B</i>)/<i>r</i><sub>0</sub><sup>8</sup> = 36<i>B</i>/<i>r</i><sub>0</sub><sup>8</sup><br>using <i>r</i><sub>0</sub><sup>6</sup> = 2<i>A</i>/<i>B</i> to eliminate <i>A</i>. All three quantities are expressible purely through <i>A</i> and <i>B</i> — the signature move of this problem type.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Near equilibrium an atom’s potential is well modelled by <i>U</i>(<i>x</i>) = ½<i>κx</i><sup>2</sup> − <i>βx</i><sup>3</sup>, with <i>κ</i> = 20 N m<sup>−1</sup> and <i>β</i> = 8.0 × 10<sup>9</sup> N m<sup>−2</sup>, where <i>x</i> is the displacement from <i>r</i><sub>0</sub>. Find the exact restoring force for <i>x</i> = 1.0 × 10<sup>−11</sup> m and the percentage error made by keeping only Hooke’s law.',
        steps: [
          'Exact force:<br><i>F</i> = −d<i>U</i>/d<i>x</i> = −<i>κx</i> + 3<i>βx</i><sup>2</sup>',
          'Hooke’s term: −<i>κx</i> = −(20)(1.0 × 10<sup>−11</sup>) = −2.0 × 10<sup>−10</sup> N. Cubic term: 3<i>βx</i><sup>2</sup> = 3(8.0 × 10<sup>9</sup>)(1.0 × 10<sup>−22</sup>) = 2.4 × 10<sup>−12</sup> N.<br><i>F</i> = −2.0 × 10<sup>−10</sup> + 2.4 × 10<sup>−12</sup> = −1.98 × 10<sup>−10</sup> N',
          'The correction is (2.4 × 10<sup>−12</sup>)/(2.0 × 10<sup>−10</sup>) = 1.2%. Two lessons: Hooke’s law is excellent for atomic-scale displacements (hence the whole chapter works), and the cubic term makes the well lopsided — pushing atoms together meets resistance sooner than pulling them apart, which is why real solids fracture in tension rather than implode.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'For the potential <i>U</i>(<i>r</i>) = −<i>A</i>/<i>r</i> + <i>B</i>/<i>r</i><sup>9</sup> (<i>A</i>, <i>B</i> > 0), find <i>r</i><sub>0</sub>.',
            a: '−d<i>U</i>/d<i>r</i> = −<i>A</i>/<i>r</i><sup>2</sup> + 9<i>B</i>/<i>r</i><sup>10</sup> = 0 ⇒ <i>r</i><sub>0</sub><sup>8</sup> = 9<i>B</i>/<i>A</i>, so <i>r</i><sub>0</sub> = (9<i>B</i>/<i>A</i>)<sup>1/8</sup>.',
          },
          {
            q: 'For <i>U</i>(<i>x</i>) = ½<i>κx</i><sup>2</sup> − <i>βx</i><sup>3</sup>, evaluate the force at <i>x</i> = +<i>a</i> and <i>x</i> = −<i>a</i> and show the magnitudes differ.',
            a: '<i>F</i>(+<i>a</i>) = −<i>κa</i> + 3<i>βa</i><sup>2</sup> (magnitude <i>κa</i> − 3<i>βa</i><sup>2</sup>); <i>F</i>(−<i>a</i>) = <i>κa</i> + 3<i>βa</i><sup>2</sup> (magnitude <i>κa</i> + 3<i>βa</i><sup>2</sup>) — compression is resisted more strongly, by 6<i>βa</i><sup>2</sup>.',
          },
          {
            q: 'Two identical atoms of mass <i>m</i> = 1.6 × 10<sup>−26</sup> kg are bonded with <i>κ</i> = 320 N m<sup>−1</sup>. Find the vibration angular frequency and frequency.',
            a: '<i>μ</i> = <i>m</i>/2 = 8.0 × 10<sup>−27</sup> kg; <i>ω</i> = √(<i>κ</i>/<i>μ</i>) = √(4.0 × 10<sup>28</sup>) = 2.0 × 10<sup>14</sup> rad s<sup>−1</sup>; <i>f</i> = <i>ω</i>/(2<i>π</i>) = 3.2 × 10<sup>13</sup> Hz — squarely in the infrared, as molecular vibrations are.',
          },
          {
            q: 'Using the Lennard–Jones result above, state how <i>κ</i> scales if <i>B</i> is doubled at fixed <i>r</i><sub>0</sub>.',
            a: 'From <i>κ</i> = 36<i>B</i>/<i>r</i><sub>0</sub><sup>8</sup>, doubling <i>B</i> doubles <i>κ</i>.',
          },
        ],
      },
    ],
  },

  {
    n: 'F',
    title: 'Error Propagation in Searle’s Experiment',
    extra: true,
    kalam:
      'The chapter describes Searle’s procedure but never says what precision the result inherits — a guaranteed CBSE practical-exam question and a recurring JEE Main one-liner.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter describes Searle’s procedure but never says what precision the result inherits — a guaranteed CBSE practical-exam question and a recurring JEE Main one-liner.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Searle’s working formula is <i>Y</i> = <i>MgL</i>/(<i>πr</i><sup>2</sup> Δ<i>L</i>). Take logarithms and differentiate: every factor contributes its own relative error, and powers multiply:<br>ln <i>Y</i> = ln <i>M</i> + ln <i>g</i> + ln <i>L</i> − 2 ln <i>r</i> − ln Δ<i>L</i> − ln <i>π</i> ⟹ <i>δY</i>/<i>Y</i> = <i>δM</i>/<i>M</i> + <i>δL</i>/<i>L</i> + 2 <i>δr</i>/<i>r</i> + <i>δ</i>(Δ<i>L</i>)/Δ<i>L</i><br>Errors in <i>g</i> and <i>π</i> are negligible. The radius enters squared, so its relative error counts double — which is why the chapter warns that a small radius error wrecks the determination. The relative errors add as a worst case (all taken with the same sign); if a question asks for the most probable error, combine the terms in quadrature instead.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: 'In a Searle’s experiment: <i>M</i> = 5.0 kg measured to 0.5%; <i>L</i> = 2.0 m measured with <i>δL</i> = 2 mm; the diameter <i>D</i> = 1.00 mm measured with a least count of 0.01 mm; and Δ<i>L</i> = 0.50 mm measured to 1%. Find the percentage error in <i>Y</i>.',
        steps: [
          'Term by term:<br><i>δM</i>/<i>M</i> = 0.5%,   <i>δL</i>/<i>L</i> = 2 mm/2000 mm = 0.1%',
          'The radius is half the diameter: <i>r</i> = 0.50 mm with <i>δr</i> = <i>δD</i>/2 = 0.005 mm, giving <i>δr</i>/<i>r</i> = <i>δD</i>/<i>D</i> = 0.01/1.00 = 1%, and hence 2 <i>δr</i>/<i>r</i> = 2.0%. Finally <i>δ</i>(Δ<i>L</i>)/Δ<i>L</i> = 1%.<br><i>δY</i>/<i>Y</i> = 0.5 + 0.1 + 2.0 + 1.0 = 3.6%',
          'More than half of the total (2.0 of 3.6) comes from the micrometer screw gauge alone. If asked which instrument to upgrade: the diameter measurement, unambiguously.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Repeat the worked example above but suppose the student mistakenly quotes <i>δr</i>/<i>r</i> = 1% without doubling. What error results, and why is it wrong?',
            a: 'They would report 0.5 + 0.1 + 1.0 + 1.0 = 2.6% — understating the true 3.6%, because <i>r</i> enters <i>Y</i> as <i>r</i><sup>2</sup> and its fractional contribution must be counted twice.',
          },
          {
            q: 'A wire of diameter 0.80 mm is measured with a least count of 0.01 mm, and all other contributions total 1.5%. Find the total percentage error in <i>Y</i>.',
            a: 'The least count belongs to the diameter, so <i>δr</i>/<i>r</i> = <i>δD</i>/<i>D</i> = 0.01/0.80 = 1.25%, doubled to 2.5%; total = 2.5 + 1.5 = 4.0%.',
          },
          {
            q: 'Show dimensionally that <i>δY</i>/<i>Y</i> is dimensionless, and state why this must be so.',
            a: 'Each term is an error divided by the quantity it belongs to (<i>δM</i>/<i>M</i>, <i>δL</i>/<i>L</i>, …): the units cancel, leaving a pure number. A relative error compares like with like, so it cannot carry units; only the absolute error <i>δY</i> carries pascals.',
          },
          {
            q: 'The elongation Δ<i>L</i> is measured via the difference of two micrometer readings, each with least count 0.01 mm. For Δ<i>L</i> = 0.20 mm, estimate <i>δ</i>(Δ<i>L</i>)/Δ<i>L</i> and its contribution to <i>δY</i>/<i>Y</i>.',
            a: 'Two readings, so <i>δ</i>(Δ<i>L</i>) ≈ 2 × 0.01 mm = 0.02 mm; <i>δ</i>(Δ<i>L</i>)/Δ<i>L</i> = 0.02/0.20 = 10%, contributing a full 10% to <i>δY</i>/<i>Y</i>. Small elongations are a major enemy of precision — here this term outweighs even the radius; measure Δ<i>L</i> large by using heavier loads (within the elastic limit).',
          },
        ],
      },
    ],
  },
];
