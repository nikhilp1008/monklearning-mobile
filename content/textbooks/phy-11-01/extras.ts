import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1's Additional Topics, A to D: pages 61 to 74 of the Class 11
 * Physics Master Reference, word for word.
 *
 * The chapter-level opener on page 61 (before Addendum A) opens Topic A's
 * Introduction. Each addendum's run-in headings are its parts: Introduction,
 * Method, Worked examples, Practice. An example's "Result:" line is its
 * answer; where an example has none, its last solution paragraph is.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Dimensions Through Calculus: Derivatives and Integrals Carry Units',
    kalam:
      'Addendum A pushes homogeneity through derivatives and integrals, which is how JEE extracts the dimensions of every coefficient hiding in a differential equation.',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gave you the seven base units, the conversion relation, the three jobs of dimensional analysis, the worst-case error rules, the significant-figure discipline, the vernier and the screw gauge, and the indirect-length toolkit. Four examinable patterns are still standing outside the door, and each one is a marriage of two things the chapter already teaches separately. Addendum A pushes homogeneity through derivatives and integrals, which is how JEE extracts the dimensions of every coefficient hiding in a differential equation. Addendum B finishes the error-propagation toolkit: the chapter derived the sum rule but never once worked a percentage-error-in-a-sum problem, and never systematised the “differentiate the reciprocal” route beyond one resistor example. Addendum C builds the dimensional formulae of the constants the chapter’s tables skip — <i>ε</i><sub>0</sub>, <i>μ</i><sub>0</sub>, <i>B</i>, <i>R</i>, capacitance — straight from the laws that define them, and weaponises the dimensionless-argument rule. Addendum D faces the chapter’s admitted limitation head-on: what dimensional analysis can still tell you when there are four variables, plus the estimation habits behind every Fermi-style numerical.<br><br>Nothing here is new theory. Every method below is homogeneity or worst-case error, applied one layer deeper.',
      },
      {
        t: 'p',
        html: 'Sub-topic 02 checks static formulas like <i>s</i> = <i>ut</i> + ½<i>at</i><sup>2</sup>. But JEE’s favourite hunting ground is the dynamic equation — <i>m</i> d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> + <i>b</i> d<i>x</i>/d<i>t</i> + <i>kx</i> = 0 — where the quantities carrying unknown dimensions sit next to derivative symbols. Nothing in the chapter tells you what d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> does to dimensions. One rule fixes everything, and it follows directly from the definition of the derivative.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The rule, derived.</b> Let <i>y</i> have dimensional formula [<i>Y</i>] and <i>x</i> have [<i>X</i>]. A change Δ<i>y</i> is a difference of two values of <i>y</i>, so it carries the dimension [<i>Y</i>]; likewise Δ<i>x</i> carries [<i>X</i>]. The quotient Δ<i>y</i>/Δ<i>x</i> therefore carries [<i>Y</i>][<i>X</i>]<sup>−1</sup>, and taking the limit Δ<i>x</i> → 0 changes no units — shrinking a denominator does not strip dimensions. Hence<br>[d<i>y</i>/d<i>x</i>] = [<i>Y</i>] [<i>X</i>]<sup>−1</sup>,<br>and repeating the argument,<br>[d<sup><i>n</i></sup><i>y</i>/d<i>x</i><sup><i>n</i></sup>] = [<i>Y</i>] [<i>X</i>]<sup>−<i>n</i></sup>.<br>An integral runs the arrow backwards: ∫ <i>y</i> d<i>x</i> is the limit of a sum of terms <i>y</i> Δ<i>x</i>, each carrying [<i>Y</i>][<i>X</i>], so<br>[∫ <i>y</i> d<i>x</i>] = [<i>Y</i>] [<i>X</i>].',
      },
      {
        t: 'defgrid',
        title: 'Operation — Dimensional rule',
        rows: [
          { k: 'd<i>y</i>/d<i>x</i>', v: '[<i>Y</i>][<i>X</i>]<sup>−1</sup>' },
          { k: 'd<sup><i>n</i></sup><i>y</i>/d<i>x</i><sup><i>n</i></sup>', v: '[<i>Y</i>][<i>X</i>]<sup>−<i>n</i></sup>' },
          { k: '∫ <i>y</i> d<i>x</i>', v: '[<i>Y</i>][<i>X</i>]' },
          {
            k: 'mixed derivative ∂<sup>2</sup><i>y</i>/(∂<i>x</i> ∂<i>t</i>)',
            v: '[<i>Y</i>][<i>X</i>]<sup>−1</sup>[<i>T</i>]<sup>−1</sup>',
          },
        ],
      },
      {
        t: 'p',
        html: 'Here [<i>Y</i>], [<i>X</i>] denote the dimensions of <i>y</i> and <i>x</i> respectively, and <i>n</i> is a positive integer.<br><br><b>The engine.</b> Any differential equation must satisfy homogeneity term by term, exactly as in Procedure 1 of Sub-topic 02 — the derivative symbols contribute their powers, and every term must land on the same dimensional formula. That requirement converts each unknown coefficient into a one-step division.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Find the dimensions of <i>b</i> and <i>k</i> in the damped-oscillator equation <i>m</i> d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> + <i>b</i> d<i>x</i>/d<i>t</i> + <i>kx</i> = 0.',
        steps: [
          'Step 1 — Dimensions of the derivatives. Position <i>x</i> carries [<i>L</i>] and time carries [<i>T</i>], so<br>[d<i>x</i>/d<i>t</i>] = L T<sup>−1</sup>, [d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup>] = L T<sup>−2</sup>.',
          'Step 2 — Anchor term. The first term is <i>m</i> · L T<sup>−2</sup>, giving M L T<sup>−2</sup> — a newton, as it must be, since Newton’s second law guarantees this.',
          'Step 3 — Extract <i>b</i>. Homogeneity forces the second term onto M L T<sup>−2</sup> as well:<br>[<i>b</i>] (L T<sup>−1</sup>) = M L T<sup>−2</sup> ⟹ [<i>b</i>] = M L T<sup>−2</sup>/(L T<sup>−1</sup>) = M T<sup>−1</sup>.',
          'Step 4 — Extract <i>k</i>. Same demand on the third term:<br>[<i>k</i>] (L) = M L T<sup>−2</sup> ⟹ [<i>k</i>] = M T<sup>−2</sup>.',
          '<b>Check.</b> Both divisions can be read backwards: kg s<sup>−1</sup> × m s<sup>−1</sup> = kg m s<sup>−2</sup> and kg s<sup>−2</sup> × m = kg m s<sup>−2</sup>. All three terms land on the newton. Homogeneity holds.',
        ],
        ans: '[<i>b</i>] = M T<sup>−1</sup> (SI unit kg s<sup>−1</sup>) and [<i>k</i>] = M T<sup>−2</sup> (SI unit kg s<sup>−2</sup>, equivalently N m<sup>−1</sup> — exactly the spring constant you will meet in oscillations).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Show that the wave equation ∂<sup>2</sup><i>y</i>/∂<i>t</i><sup>2</sup> = <i>c</i><sup>2</sup> ∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup> forces <i>c</i> to be a speed, whatever the wave.',
        steps: [
          'Left side: <i>y</i> is a displacement, so<br>[∂<sup>2</sup><i>y</i>/∂<i>t</i><sup>2</sup>] = L (T<sup>−2</sup>) = L T<sup>−2</sup>.',
          'Right side: ∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup> carries L(L)<sup>−2</sup> = L<sup>−1</sup>, so the right side carries [<i>c</i><sup>2</sup>] L<sup>−1</sup>. Homogeneity demands<br>[<i>c</i><sup>2</sup>] L<sup>−1</sup> = L T<sup>−2</sup> ⟹ [<i>c</i><sup>2</sup>] = L<sup>2</sup> T<sup>−2</sup> ⟹ [<i>c</i>] = L T<sup>−1</sup>.',
          '<b>Check.</b> Substitute [<i>c</i>] = L T<sup>−1</sup> into the right side: (L<sup>2</sup>T<sup>−2</sup>)(L<sup>−1</sup>) = L T<sup>−2</sup>, matching the left side exactly.',
        ],
        ans: '<i>c</i> has the dimensions of a speed (m s<sup>−1</sup> in SI). The equation itself announces that waves propagate — no wave theory required.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Air drag on a slow projectile is modelled by <i>F</i> = −<i>γv</i> − <i>λv</i><sup>2</sup>. Find [<i>γ</i>] and [<i>λ</i>], and use them to locate the crossover speed at which the two drag terms are equal.',
        steps: [
          'Both terms must carry the dimensions of force, M L T<sup>−2</sup>, and <i>v</i> carries L T<sup>−1</sup>.',
          'Linear term:<br>[<i>γ</i>] (L T<sup>−1</sup>) = M L T<sup>−2</sup> ⟹ [<i>γ</i>] = M T<sup>−1</sup>.',
          'Quadratic term: <i>v</i><sup>2</sup> carries L<sup>2</sup>T<sup>−2</sup>, so<br>[<i>λ</i>] (L<sup>2</sup> T<sup>−2</sup>) = M L T<sup>−2</sup> ⟹ [<i>λ</i>] = M L<sup>−1</sup>.',
          'Crossover speed. Set the magnitudes of the two terms equal, <i>γv</i> = <i>λv</i><sup>2</sup>; the nonzero solution is <i>v</i><sub>∗</sub> = <i>γ</i>/<i>λ</i>. Check its dimensions before trusting it:<br>[<i>γ</i>/<i>λ</i>] = M T<sup>−1</sup>/(M L<sup>−1</sup>) = L T<sup>−1</sup>.',
          '<b>Why it is Advanced-level.</b> The examiner is not asking for two divisions; the mark-winning move is the third act — forming a new physical quantity from the two coefficients and demanding that it come out dimensionally sensible. If your extracted dimensions were wrong, <i>v</i><sub>∗</sub> would fail the speed test instantly. The dimensions audit each other.',
        ],
        ans: '[<i>γ</i>] = M T<sup>−1</sup> (kg s<sup>−1</sup>), [<i>λ</i>] = M L<sup>−1</sup> (kg m<sup>−1</sup>), and the crossover speed <i>v</i><sub>∗</sub> = <i>γ</i>/<i>λ</i> comes out with dimensions of speed automatically — a consistency proof that costs nothing.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In <i>v</i> = <i>a</i> + <i>bt</i>, where <i>v</i> is speed and <i>t</i> is time, find [<i>a</i>] and [<i>b</i>].',
            a: '[<i>a</i>] = L T<sup>−1</sup>, [<i>b</i>] = L T<sup>−2</sup> — each term must be a speed.',
          },
          {
            q: '[NEET] A population grows according to d<i>y</i>/d<i>t</i> = <i>ky</i>. Find [<i>k</i>] and state its SI unit.',
            a: '[<i>k</i>] = T<sup>−1</sup>; SI unit s<sup>−1</sup>, since [<i>y</i>][<i>T</i>]<sup>−1</sup> = [<i>k</i>][<i>y</i>].',
          },
          {
            q: '[JEE Main] Viscous force obeys <i>F</i> = −<i>ηA</i> d<i>v</i>/d<i>x</i>. Find [<i>η</i>] and compare with the chapter’s table value for coefficient of viscosity.',
            a: 'd<i>v</i>/d<i>x</i> carries T<sup>−1</sup>, so [<i>η</i>] = M L T<sup>−2</sup>/(L<sup>2</sup> T<sup>−1</sup>) = M L<sup>−1</sup> T<sup>−1</sup> — identical to the chapter’s table entry, now derived rather than memorised.',
          },
          {
            q: '[JEE Main] Heat conduction obeys d<i>Q</i>/d<i>t</i> = −<i>kA</i> d<i>T</i>/d<i>x</i>, where <i>Q</i> is heat energy, <i>T</i> temperature, <i>A</i> area and <i>x</i> distance. Find [<i>k</i>].',
            a: 'd<i>Q</i>/d<i>t</i> carries M L<sup>2</sup> T<sup>−3</sup> and d<i>T</i>/d<i>x</i> carries K L<sup>−1</sup>, so [<i>k</i>] = M L T<sup>−3</sup> K<sup>−1</sup> (thermal conductivity; SI unit W m<sup>−1</sup> K<sup>−1</sup>).',
          },
          {
            q: '[JEE Advanced] An LR circuit obeys <i>L</i> d<i>i</i>/d<i>t</i> + <i>Ri</i> = <i>E</i>, where <i>i</i> is current and <i>E</i> is emf with [<i>E</i>] = M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>. Find [<i>L</i>], [<i>R</i>], and show that the ratio <i>L</i>/<i>R</i> has the dimension of time.',
            a: 'd<i>i</i>/d<i>t</i> carries A T<sup>−1</sup>, so [<i>L</i>] = M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>/(A T<sup>−1</sup>) = M L<sup>2</sup> T<sup>−2</sup> A<sup>−2</sup> (henry); [<i>R</i>] = [<i>E</i>]/[<i>A</i>] = M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup> (ohm); [<i>L</i>]/[<i>R</i>] = T — the circuit’s time constant, dimensionally guaranteed.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Percentage Errors in Sums, Differences and Reciprocals',
    kalam:
      'First: when the input errors arrive as percentages and the quantity is a sum, you must detour through absolute errors — percentages of different bases never add.',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Sub-topic 03 derives Δ(<i>a</i> + <i>b</i>) = Δ<i>a</i> + Δ<i>b</i> and then spends every worked example on products, quotients and powers. Two consequences follow that the chapter never demonstrates, and JEE Main sets both almost every year. First: when the input errors arrive as percentages and the quantity is a sum, you must detour through absolute errors — percentages of different bases never add. Second: for “reciprocals-add” relations (thin lenses, spherical mirrors, parallel anything), the clean route is to differentiate the reciprocal relation, and the recipe deserves to be written down once, properly.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'For <i>x</i> = <i>a</i> + <i>b</i> with percentage errors <i>δa</i> and <i>δb</i>:',
      },
      {
        t: 'proc',
        title: 'B1 — Sums with percentage inputs',
        steps: [
          'Convert each percentage to an absolute error: Δ<i>a</i> = (<i>δa</i>/100) <i>a</i>, Δ<i>b</i> = (<i>δb</i>/100) <i>b</i> — keeping the units of <i>a</i> and <i>b</i>.',
          'Add the absolute errors: Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i> (Derivation A of Sub-topic 03).',
          'Convert back: <i>δx</i> = Δ<i>x</i>/<i>x</i> × 100%.',
        ],
      },
      {
        t: 'p',
        html: 'Why the detour is compulsory: <i>δa</i> is a fraction of <i>a</i> and <i>δb</i> is a fraction of <i>b</i> — different denominators. Adding them produces a number attached to neither. Mini-counterexample: 100 ± 1 plus 1 ± 0.5 gives 101 ± 1.5, i.e. 1.49% — not 1% + 50%.',
      },
      {
        t: 'p',
        html: '<b>B2 — Reciprocals-add relations by differentials.</b> For any smooth relation, small changes propagate as<br>Δ<i>x</i> ≈ |∂<i>f</i>/∂<i>a</i>| Δ<i>a</i> + |∂<i>f</i>/∂<i>b</i>| Δ<i>b</i> + ⋯ ,<br>with every contribution taken positive (worst case, as always). Apply this to the reciprocal relation 1/<i>x</i> = 1/<i>a</i> + 1/<i>b</i>. Differentiating both sides,<br>−Δ<i>x</i>/<i>x</i><sup>2</sup> = −Δ<i>a</i>/<i>a</i><sup>2</sup> − Δ<i>b</i>/<i>b</i><sup>2</sup> ⟹ Δ<i>x</i> = <i>x</i><sup>2</sup> (Δ<i>a</i>/<i>a</i><sup>2</sup> + Δ<i>b</i>/<i>b</i><sup>2</sup>),<br>where the minus signs have been absorbed by taking magnitudes. Note the structure: the absolute error in <i>x</i> picks up each input’s absolute error weighted by (<i>x</i>/<i>a</i>)<sup>2</sup> — not the relative-error rule of Derivation B, because <i>a</i> and <i>b</i> are entangled on both sides of the defining relation.',
      },
      {
        t: 'p',
        html: '<b>Sanity habit.</b> After any sum-or-reciprocal computation, compare the percentage errors of the inputs and the output. A sum’s percentage error is a size-weighted average of the inputs’ percentages, so it is dragged toward the percentage of the larger quantity (the dominant term). A result built from a difference of reciprocals, as in the lens formula, can land far worse than either input, because the subtraction shrinks the result while the absolute errors still add.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Two masses are weighed as <i>m</i><sub>1</sub> = (10.0±0.1) g and <i>m</i><sub>2</sub> = (20.0±0.1) g. Find the maximum percentage error in the total mass <i>M</i> = <i>m</i><sub>1</sub>+<i>m</i><sub>2</sub>, and explain why adding the individual percentage errors fails.',
        steps: [
          'Step 1 — Individual percentage errors. <i>δm</i><sub>1</sub> = 0.1/10.0 × 100% = 1% and <i>δm</i><sub>2</sub> = 0.1/20.0 × 100% = 0.5%.',
          'Step 2 — Convert to absolute errors (both in grams):<br>Δ<i>m</i><sub>1</sub> = (1/100)(10.0 g) = 0.1 g, Δ<i>m</i><sub>2</sub> = 0.1 g.',
          'Step 3 — Add absolutes, convert back:<br>Δ<i>M</i> = 0.1 + 0.1 = 0.2 g, <i>M</i> = 30.0 g,<br><i>δM</i> = 0.2/30.0 × 100% = 0.67%.',
          '<b>Why the shortcut fails.</b> Adding percentages gives 1%+0.5% = 1.5% — more than double the truth. Each percentage divides by its own mass; the sum divides by the larger total. Notice also the structural lesson: the sum inherits the percentage error of the dominant mass (0.67% sits between 0.5% and 1%), whereas for a product the percentage errors genuinely add. Same data, opposite rules — the distinction the chapter flags but never exercises.',
        ],
        ans: '<i>M</i> = (30.0 ± 0.2) g, maximum percentage error ≈ 0.67%.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'In a thin-lens experiment (magnitudes; ray-optics signs suppressed), the object and image distances are measured as <i>u</i> = (30.0±0.1) cm and <i>v</i> = (20.0±0.1) cm, with 1/<i>f</i> = 1/<i>v</i> − 1/<i>u</i>. Find <i>f</i> and its maximum absolute and percentage error.',
        steps: [
          'Step 1 — Central value. 1/20.0 − 1/30.0 = (3−2)/60 = 1/60 cm<sup>−1</sup>, so<br><i>f</i> = 60.0 cm.',
          'Step 2 — Differentiate the reciprocal relation. From 1/<i>f</i> = 1/<i>v</i> − 1/<i>u</i>,<br>−Δ<i>f</i>/<i>f</i><sup>2</sup> = −Δ<i>v</i>/<i>v</i><sup>2</sup> − Δ<i>u</i>/<i>u</i><sup>2</sup> ⟹ Δ<i>f</i> = <i>f</i><sup>2</sup> (Δ<i>v</i>/<i>v</i><sup>2</sup> + Δ<i>u</i>/<i>u</i><sup>2</sup>),<br>all magnitudes, worst case.',
          'Step 3 — Substitute, keeping units throughout. Δ<i>u</i> = Δ<i>v</i> = 0.1 cm, so each fraction carries units cm/cm<sup>2</sup> = cm<sup>−1</sup>:<br>Δ<i>v</i>/<i>v</i><sup>2</sup> = 0.1/(20.0)<sup>2</sup> = 2.5 × 10<sup>−4</sup> cm<sup>−1</sup>, Δ<i>u</i>/<i>u</i><sup>2</sup> = 0.1/(30.0)<sup>2</sup> = 1.11 × 10<sup>−4</sup> cm<sup>−1</sup>.',
          'Then<br>Δ<i>f</i> = (60.0)<sup>2</sup> × (2.5 + 1.11) × 10<sup>−4</sup> cm = 3600 × 3.61 × 10<sup>−4</sup> cm ≈ 1.3 cm.',
          '<b>Check.</b> The inputs carry errors of 0.33% (<i>u</i>) and 0.5% (<i>v</i>), yet the output lands at 2.2% — worse than either, exactly as the sanity habit warns for a difference of reciprocals. A naive “add the relative errors” attempt would give 0.83%, wrong by a factor of nearly three; the entanglement punishes the shortcut.',
          '<b>Why it is Advanced-level.</b> The relation cannot be reduced to a product of powers, so the chapter’s flagship rule does not apply. Recognising that fact — and switching to differentials of the reciprocal — is the entire assessment objective. The same template handles mirrors, capacitors in series, and spring combinations.',
        ],
        ans: '<i>f</i> = (60.0 ± 1.3) cm, a maximum percentage error of 1.3/60.0 × 100% ≈ 2.2%.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In a pendulum experiment, <i>L</i> = (100.0 ± 0.1) cm and <i>T</i> = (2.00 ± 0.01) s over one oscillation. Using <i>g</i> = 4<i>π</i><sup>2</sup><i>L</i>/<i>T</i><sup>2</sup>, find <i>g</i> with its maximum percentage and absolute error, and identify which measurement limits the precision.',
        steps: [
          'Step 1 — Central value. <i>L</i> = 1.000 m, so<br><i>g</i> = 4<i>π</i><sup>2</sup> × 1.000/(2.00)<sup>2</sup> m s<sup>−2</sup> = 39.48/4.00 m s<sup>−2</sup> = 9.87 m s<sup>−2</sup>.',
          'Step 2 — Percentage errors of the inputs. <i>δL</i> = 0.1/100.0 × 100% = 0.1%; <i>δT</i> = 0.01/2.00 × 100% = 0.5%. Since <i>g</i> is a product of powers, the chapter’s rule applies directly:<br><i>δg</i> = <i>δL</i> + 2 <i>δT</i> = 0.1% + 2(0.5%) = 1.1%.',
          'Step 3 — Absolute error:<br>Δ<i>g</i> = 1.1/100 × 9.87 m s<sup>−2</sup> = 0.11 m s<sup>−2</sup>.',
          '<b>Where the error lives.</b> Timing contributes 2 × 0.5% = 1.0% of the 1.1%; the length contributes only 0.1%. The fix is procedural, not instrumental: time <i>N</i> oscillations together so that <i>δT</i> falls roughly <i>N</i>-fold — timing 50 oscillations here would cut the timing contribution to about 0.02% and make the length the limiter instead.',
        ],
        ans: '<i>g</i> = (9.87 ± 0.11) m s<sup>−2</sup>, maximum percentage error 1.1%.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] <i>m</i><sub>1</sub> = (15.0 ± 0.1) g and <i>m</i><sub>2</sub> = (5.0 ± 0.1) g. Find the maximum percentage error in (a) the sum and (b) the difference.',
            a: '(a) Sum = 20.0 g, Δ = 0.2 g, 1.0%. (b) Difference = 10.0 g, Δ = 0.2 g, 2.0% — halving the result doubles the percentage while the absolute error stays put.',
          },
          {
            q: '[NEET] <i>Z</i> = <i>A</i> + <i>B</i> with <i>A</i> = (50 ± 1) units and <i>B</i> = (20 ± 1) units. Write <i>Z</i> with its error and give the percentage error.',
            a: '<i>Z</i> = (70 ± 2) units; <i>δZ</i> = 2/70 × 100% ≈ 2.9%.',
          },
          {
            q: '[JEE Main] A concave mirror forms a real image with <i>u</i> = (20.0 ± 0.1) cm and <i>v</i> = (20.0 ± 0.1) cm, using 1/<i>f</i> = 1/<i>v</i> + 1/<i>u</i> (magnitudes). Find <i>f</i> with its maximum absolute error.',
            a: '1/<i>f</i> = 2/20.0 gives <i>f</i> = 10.0 cm; Δ<i>f</i> = <i>f</i><sup>2</sup> (0.1/400 + 0.1/400) = 100 × 5 × 10<sup>−4</sup> cm = 0.05 cm, so <i>f</i> = (10.00 ± 0.05) cm, 0.5%.',
          },
          {
            q: '[JEE Main] In a Searle’s-apparatus determination, <i>Y</i> ∝ <i>m</i> <i>L</i> (<i>r</i><sup>2</sup><i>e</i>)<sup>−1</sup>. The percentage errors are <i>δm</i> = 1%, <i>δL</i> = 0.2%, <i>δr</i> = 0.5%, <i>δe</i> = 1.5%. Find <i>δY</i>.',
            a: 'Exponents 1, 1, −2, −1: <i>δY</i> = 1+0.2+2(0.5)+1.5 = 3.7% — the extension dominates at 1.5%, while the mass and the squared radius tie for second at 1.0% each.',
          },
          {
            q: '[JEE Advanced] A pendulum gives <i>L</i> = (99.8 ± 0.1) cm and <i>T</i> = (2.00 ± 0.02) s. Find the maximum percentage error in <i>g</i> = 4<i>π</i><sup>2</sup><i>L</i>/<i>T</i><sup>2</sup> and state which input dominates it.',
            a: '<i>δg</i> = 0.1% + 2(1%) = 2.1%, dominated entirely by the timing (2% of the 2.1%); time many oscillations per reading.',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Dimensional Formulae from Physical Laws: The Constants the Chapter’s Tables Skip',
    kalam:
      'JEE Main happily asks for the dimensional formula of ε₀, B, resistance or capacitance — quantities defined not by a schoolbook formula but by a law of physics.',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s dimensional table stops at viscosity, <i>G</i> and <i>h</i>. JEE Main happily asks for the dimensional formula of <i>ε</i><sub>0</sub>, <i>B</i>, resistance or capacitance — quantities defined not by a schoolbook formula but by a law of physics. The rescue is a principle you already own: every physical law is itself dimensionally homogeneous, so isolating the target constant in its defining law and substituting dimensional formulae must succeed. Alongside this sits the dimensionless-argument rule from the pitfalls section, promoted here to a full method for dissecting constants buried inside sin, exp and ln.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'For a constant <i>C</i> appearing in a law:',
      },
      {
        t: 'proc',
        title: 'C1 — Isolate and substitute',
        steps: [
          'Rearrange the law algebraically until <i>C</i> stands alone.',
          'Replace every other symbol with its dimensional formula (use the chapter’s master table; recall [<i>q</i>] = A T from charge = current × time).',
          'Simplify the powers of M, L, T, A, K.',
          'Name the SI unit if you know it — a built-in cross-check, since the named unit must reduce to the same base-unit string.',
        ],
      },
      {
        t: 'p',
        html: '<b>C2 — Dimensionless arguments.</b> The quantities sin(·), cos(·), <i>e</i><sup>(·)</sup>, ln(·) take pure numbers only. Therefore, in any valid equation, every argument is dimensionless. Reading off “which products of symbols multiply to nothing” hands you the dimensions of the constants inside the argument, one equation per symbol.<br><br><b>Standard results</b> (each derived below or left to practice):',
      },
      {
        t: 'table',
        title: null,
        head: ['Constant', 'Defining law', 'Dimensional formula', 'Named unit'],
        rows: [
          ['<i>ε</i><sub>0</sub>', 'Coulomb’s law', 'M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>', 'farad per metre'],
          ['<i>μ</i><sub>0</sub>', 'force per length, parallel wires', 'M L T<sup>−2</sup> A<sup>−2</sup>', 'henry per metre'],
          ['<i>B</i>', '<i>F</i> = <i>qvB</i>', 'M T<sup>−2</sup> A<sup>−1</sup>', 'tesla'],
          ['<i>R</i> (electrical)', '<i>V</i> = <i>IR</i>', 'M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>', 'ohm'],
          ['<i>C</i> (capacitance)', '<i>Q</i> = <i>CV</i>', 'M<sup>−1</sup> L<sup>−2</sup> T<sup>4</sup> A<sup>2</sup>', 'farad'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / NEET Level',
        q: 'Find the dimensional formula of <i>ε</i><sub>0</sub> from Coulomb’s law <i>F</i> = <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/(4<i>πε</i><sub>0</sub><i>r</i><sup>2</sup>).',
        steps: [
          'Isolate: <i>ε</i><sub>0</sub> = <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/(4<i>πFr</i><sup>2</sup>), with 4<i>π</i> a pure number contributing nothing.',
          'Charge: [<i>q</i>] = A T, so the numerator carries (A T)<sup>2</sup> = A<sup>2</sup> T<sup>2</sup>. Denominator:<br>[<i>F</i>][<i>r</i><sup>2</sup>] = (M L T<sup>−2</sup>)(L<sup>2</sup>) = M L<sup>3</sup> T<sup>−2</sup>.',
          '<b>Check.</b> The SI unit of <i>ε</i><sub>0</sub> is F m<sup>−1</sup>; the farad reduces to A<sup>2</sup> s<sup>4</sup> kg<sup>−1</sup> m<sup>−2</sup>, and dividing by metre gives A<sup>2</sup> s<sup>4</sup> kg<sup>−1</sup> m<sup>−3</sup> — the same string as above with s ↔ T. Agreement.',
        ],
        ans: 'Dividing,<br>[<i>ε</i><sub>0</sub>] = A<sup>2</sup> T<sup>2</sup>/(M L<sup>3</sup> T<sup>−2</sup>) = M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '(a) Find [<i>B</i>] from the Lorentz force <i>F</i> = <i>qvB</i>. (b) Find [<i>μ</i><sub>0</sub>] from the force per unit length between parallel wires, <i>F</i>/<i>ℓ</i> = <i>μ</i><sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub>/(2<i>πd</i>). Confirm the two are mutually consistent.',
        steps: [
          '(a) Isolate <i>B</i> = <i>F</i>/(<i>qv</i>). Numerator: M L T<sup>−2</sup>. Denominator: (A T)(L T<sup>−1</sup>) = A L. Hence<br>[<i>B</i>] = M L T<sup>−2</sup>/(A L) = M T<sup>−2</sup> A<sup>−1</sup>.',
          'This is the tesla — and the cross-check against the wire law <i>F</i> = <i>BIℓ</i> gives [<i>B</i>] = M L T<sup>−2</sup>/(A L), identical.',
          '<b>Consistency.</b> The electromagnetic wave-speed combination 1/√(<i>ε</i><sub>0</sub><i>μ</i><sub>0</sub>) must be a speed. Multiply the two results: [<i>ε</i><sub>0</sub><i>μ</i><sub>0</sub>] = T<sup>2</sup> L<sup>−2</sup>, so [1/√(<i>ε</i><sub>0</sub><i>μ</i><sub>0</sub>)] = L T<sup>−1</sup>. Two independently derived dimensional formulae click together into Maxwell’s prediction that light is an electromagnetic wave — dimensional analysis alone gets you to the doorstep.',
        ],
        ans: '(b) Rearrange: <i>μ</i><sub>0</sub> = (<i>F</i>/<i>ℓ</i>) 2<i>πd</i>/(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>), with 2<i>π</i> inert. Force per length carries M L T<sup>−2</sup>/L = M T<sup>−2</sup>; multiplying by <i>d</i> (dimension L) restores M L T<sup>−2</sup>; dividing by <i>I</i><sup>2</sup> = A<sup>2</sup>:<br>[<i>μ</i><sub>0</sub>] = M L T<sup>−2</sup> A<sup>−2</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'The van der Waals equation reads (<i>P</i> + <i>a</i>/<i>V</i><sup>2</sup>)(<i>V</i> − <i>b</i>) = <i>RT</i> for one mole. Find [<i>a</i>] and [<i>b</i>].',
        steps: [
          'Homogeneity forbids adding unlike quantities, so inside the first bracket,<br>[<i>a</i>/<i>V</i><sup>2</sup>] = [<i>P</i>] ⟹ [<i>a</i>] = [<i>P</i>] [<i>V</i>]<sup>2</sup> = (M L<sup>−1</sup> T<sup>−2</sup>)(L<sup>3</sup>)<sup>2</sup> = M L<sup>5</sup> T<sup>−2</sup>.',
          '<b>Check.</b> The right side, <i>RT</i>, carries M L<sup>2</sup> T<sup>−2</sup> mol<sup>−1</sup> per the chapter’s Example 1 — energy per mole. The left side must match: [<i>P</i>][<i>V</i>] = (M L<sup>−1</sup> T<sup>−2</sup>)(L<sup>3</sup>) = M L<sup>2</sup> T<sup>−2</sup>, and the per-mole character rides along because the equation is stated for one mole. Consistent.',
        ],
        ans: 'Inside the second bracket, [<i>b</i>] = [<i>V</i>] = L<sup>3</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A travelling wave is written <i>y</i> = <i>A</i> sin(<i>kx</i> − <i>ωt</i>). Deduce [<i>k</i>], [<i>ω</i>], [<i>A</i>], and then extract a prediction from the ratio <i>ω</i>/<i>k</i>.',
        steps: [
          'The sine’s argument must be dimensionless. The argument splits into two pieces added together, so each piece is individually dimensionless:<br>[<i>k</i>][<i>x</i>] = 1 ⟹ [<i>k</i>] = L<sup>−1</sup>, [<i>ω</i>][<i>t</i>] = 1 ⟹ [<i>ω</i>] = T<sup>−1</sup>.',
          'Since <i>y</i> is a displacement and the sine is a pure number, [<i>A</i>] = [<i>y</i>] = L.',
          'The prediction. Form the ratio:<br>[<i>ω</i>/<i>k</i>] = T<sup>−1</sup>/L<sup>−1</sup> = L T<sup>−1</sup>.',
          '<b>Why it is Advanced-level.</b> Step one is routine argument-hunting. The assessed step is the last one: noticing that dimensional analysis lets you manufacture a speed from two constants whose individual dimensions you have just certified, and recognising that a dimensionally forced speed in a wave equation must be the wave’s speed. The chapter’s pro-tip planted the seed; this is the harvest.',
        ],
        ans: 'A ratio of the two constants built into the wave’s shape has the dimensions of speed. Dimensional analysis thus predicts that the wave profile moves at <i>ω</i>/<i>k</i> — the phase velocity — before any wave mechanics is done.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Given [<i>V</i>] = M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>, find [<i>R</i>] from Ohm’s law <i>V</i> = <i>IR</i>.',
            a: '[<i>R</i>] = M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>/A = M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup> (ohm).',
          },
          {
            q: '[NEET] Find the dimensional formula of capacitance from <i>Q</i> = <i>CV</i>.',
            a: '[<i>C</i>] = [<i>Q</i>]/[<i>V</i>], so<br>[<i>C</i>] = A T/(M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>) = M<sup>−1</sup> L<sup>−2</sup> T<sup>4</sup> A<sup>2</sup> (farad).',
          },
          {
            q: '[JEE Main] In <i>y</i> = <i>a</i> sin(<i>bx</i> + <i>ct</i>), find [<i>a</i>], [<i>b</i>], [<i>c</i>], and the dimensions of <i>c</i>/<i>b</i>.',
            a: '[<i>a</i>] = L, [<i>b</i>] = L<sup>−1</sup>, [<i>c</i>] = T<sup>−1</sup>; [<i>c</i>/<i>b</i>] = T<sup>−1</sup>/L<sup>−1</sup> = L T<sup>−1</sup> — a speed, the same phase-velocity logic as Example C.4 (the product <i>bc</i>, by contrast, has dimensions L<sup>−1</sup> T<sup>−1</sup> and is not a speed).',
          },
          {
            q: '[JEE Main] Kinetic theory gives (3/2)<i>k</i><sub><i>B</i></sub><i>T</i> = ½<i>mv</i><sup>2</sup> for a gas molecule. Find [<i>k</i><sub><i>B</i></sub>].',
            a: '[<i>k</i><sub><i>B</i></sub>] = [<i>mv</i><sup>2</sup>]/[<i>T</i>] = M L<sup>2</sup> T<sup>−2</sup> K<sup>−1</sup> (joule per kelvin).',
          },
          {
            q: '[JEE Advanced] A discharging capacitor obeys <i>q</i> = <i>q</i><sub>0</sub> <i>e</i><sup>−<i>t</i>/<i>RC</i></sup>. Using your results for [<i>R</i>] and [<i>C</i>], prove that [<i>RC</i>] = T, confirming the exponential’s argument is dimensionless.',
            a: '[<i>RC</i>] = (M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>)(M<sup>−1</sup> L<sup>−2</sup> T<sup>4</sup> A<sup>2</sup>) = T: mass, length and current cancel pairwise, leaving exactly one power of time — the argument <i>t</i>/<i>RC</i> is a pure number, as the exponential demands.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'When Three Equations Are Not Enough: Dimensionless Groups and Estimation',
    kalam:
      'Sub-topic 02 confesses the limitation honestly: with four or more governing quantities and only three balancing equations, the power-law method stalls.',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Sub-topic 02 confesses the limitation honestly: with four or more governing quantities and only three balancing equations, the power-law method stalls. What it does not say is what JEE Advanced actually expects you to do at that point. The answer has two halves. First, the stall leaves exactly one degree of freedom — and that freedom can always be repackaged as an unknown function of a dimensionless group, which is itself a publishable, examinable result. Second, when even that is beyond reach, physics falls back on order-of-magnitude estimation, the skill quietly tested whenever a question says “estimate.”',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>D1 — The leftover-exponent manoeuvre.</b> Suppose <i>Q</i> depends on four quantities <i>q</i><sub>1</sub>, <i>q</i><sub>2</sub>, <i>q</i><sub>3</sub>, <i>q</i><sub>4</sub>. Write <i>Q</i> = <i>C</i> <i>q</i><sub>1</sub><sup><i>a</i></sup><i>q</i><sub>2</sub><sup><i>b</i></sup><i>q</i><sub>3</sub><sup><i>c</i></sup><i>q</i><sub>4</sub><sup><i>d</i></sup> and apply homogeneity: three equations, four unknowns. Everything is determined except one free exponent — say <i>d</i>. Solve <i>a</i>, <i>b</i>, <i>c</i> in terms of <i>d</i>, regroup the result as<br><i>Q</i> = (a fully determined power-law product) × Φ(a dimensionless combination),<br>and verify by direct substitution that the combination inside Φ truly carries M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>. The method’s honest verdict: it fixes everything except the dimensionless function Φ.',
      },
      {
        t: 'p',
        html: 'For a Fermi-style quantity:',
      },
      {
        t: 'proc',
        title: 'D2 — Estimation protocol',
        steps: [
          'Model the object with the simplest formula containing measurable or tabulated quantities.',
          'Insert orders of magnitude, keeping one guard digit.',
          'Audit the result against the chapter’s range tables (lengths 10<sup>−15</sup> to 10<sup>26</sup> m; masses 10<sup>−30</sup> to 10<sup>55</sup> kg). A landing inside the expected decade is the estimate’s certificate.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Drag on a sphere moving slowly through a fluid is expected to depend on its radius <i>r</i>, speed <i>v</i>, the fluid’s density <i>ρ</i>, and the fluid’s viscosity <i>η</i>. Show that dimensional analysis forces <i>F</i> into the form <i>ρr</i><sup>2</sup><i>v</i><sup>2</sup> Φ(<i>ρvr</i>/<i>η</i>), and verify the grouping is dimensionless.',
        steps: [
          'Assume <i>F</i> = <i>C</i> <i>r</i><sup><i>a</i></sup><i>v</i><sup><i>b</i></sup><i>ρ</i><sup><i>c</i></sup><i>η</i><sup><i>d</i></sup> and insert the dimensional formulae [<i>F</i>] = M L T<sup>−2</sup>, [<i>r</i>] = L, [<i>v</i>] = L T<sup>−1</sup>, [<i>ρ</i>] = M L<sup>−3</sup>, [<i>η</i>] = M L<sup>−1</sup> T<sup>−1</sup>:<br>M L T<sup>−2</sup> = L<sup><i>a</i></sup> (L T<sup>−1</sup>)<sup><i>b</i></sup> (M L<sup>−3</sup>)<sup><i>c</i></sup> (M L<sup>−1</sup> T<sup>−1</sup>)<sup><i>d</i></sup> = M<sup><i>c</i>+<i>d</i></sup> L<sup><i>a</i>+<i>b</i>−3<i>c</i>−<i>d</i></sup> T<sup>−<i>b</i>−<i>d</i></sup>.',
          'Three equations, four unknowns — exactly the predicted stall. Mass:<br><i>c</i> + <i>d</i> = 1 ⟹ <i>c</i> = 1 − <i>d</i>.',
          'Time:<br>−<i>b</i> − <i>d</i> = −2 ⟹ <i>b</i> = 2 − <i>d</i>.',
          'Length:<br><i>a</i> + <i>b</i> − 3<i>c</i> − <i>d</i> = 1 ⟹ <i>a</i> = 1 − <i>b</i> + 3<i>c</i> + <i>d</i> = 1 − (2 − <i>d</i>) + 3(1 − <i>d</i>) + <i>d</i> = 2 − <i>d</i>.',
          'Regroup, pulling the free exponent <i>d</i> into one lump:<br><i>F</i> = <i>C</i> <i>r</i><sup>2−<i>d</i></sup> <i>v</i><sup>2−<i>d</i></sup> <i>ρ</i><sup>1−<i>d</i></sup> <i>η</i><sup><i>d</i></sup> = <i>C</i> <i>ρ</i> <i>r</i><sup>2</sup><i>v</i><sup>2</sup> (<i>η</i>/(<i>ρvr</i>))<sup><i>d</i></sup>.',
          'Since <i>d</i> is unknowable, absorb it into a function of the reciprocal grouping:<br><i>F</i> = <i>ρ</i> <i>r</i><sup>2</sup><i>v</i><sup>2</sup> Φ(<i>ρvr</i>/<i>η</i>).',
          'Verification of the grouping:<br>[<i>ρvr</i>/<i>η</i>] = (M L<sup>−3</sup>)(L T<sup>−1</sup>)(L)/(M L<sup>−1</sup> T<sup>−1</sup>) = M L<sup>−1</sup> T<sup>−1</sup>/(M L<sup>−1</sup> T<sup>−1</sup>) = M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>.✓',
          '<b>Check.</b> Set Φ to a constant and the surviving product carries (M L<sup>−3</sup>)(L<sup>2</sup>)(L<sup>2</sup>T<sup>−2</sup>) = M L T<sup>−2</sup> — a force, as required.',
        ],
        ans: '<i>F</i> = <i>ρr</i><sup>2</sup><i>v</i><sup>2</sup> Φ(<i>ρvr</i>/<i>η</i>) — every dimensional content pinned, the residue quarantined inside a dimensionless function (physicists call its argument the Reynolds number). The full fluid dynamics lives entirely inside Φ; dimensional analysis correctly refuses to guess it.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: 'Estimate the mass of the Earth, using <i>g</i> = 9.8 m s<sup>−2</sup>, <i>R</i> = 6.37 × 10<sup>6</sup> m, and <i>G</i> = 6.67 × 10<sup>−11</sup> N m<sup>2</sup> kg<sup>−2</sup>.',
        steps: [
          'Model: surface gravity obeys <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>, so<br><i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i>.',
          'Compute <i>R</i><sup>2</sup>: (6.37)<sup>2</sup> = 40.58, so <i>R</i><sup>2</sup> = 4.058 × 10<sup>13</sup> m<sup>2</sup>. Multiply:<br><i>gR</i><sup>2</sup> = 9.8 × 4.058 × 10<sup>13</sup> m<sup>3</sup> s<sup>−2</sup> = 39.77 × 10<sup>13</sup> = 3.98 × 10<sup>14</sup> m<sup>3</sup> s<sup>−2</sup>.',
          '<b>Audit.</b> The chapter’s mass-range table puts the Earth at ∼ 10<sup>25</sup> kg; the estimate lands squarely in that decade. No laboratory ever weighed the Earth — a falling apple, a radius, and a constant did.',
        ],
        ans: 'Divide:<br><i>M</i> = 3.98 × 10<sup>14</sup>/(6.67 × 10<sup>−11</sup>) kg = 5.97 × 10<sup>24</sup> kg.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Estimate the radius of a copper atom. Density of copper <i>ρ</i> = 9.0 × 10<sup>3</sup> kg m<sup>−3</sup>; molar mass <i>M</i><sub>mol</sub> = 63.5 × 10<sup>−3</sup> kg mol<sup>−1</sup>; Avogadro constant <i>N</i><sub><i>A</i></sub> = 6.02 × 10<sup>23</sup> mol<sup>−1</sup>.',
        steps: [
          'Model: one mole occupies <i>M</i><sub>mol</sub>/<i>ρ</i> cubic metres and contains <i>N</i><sub><i>A</i></sub> atoms packed edge to edge, so the volume per atom is<br><i>V</i><sub>atom</sub> = <i>M</i><sub>mol</sub>/(<i>ρ</i> <i>N</i><sub><i>A</i></sub>) = 63.5 × 10<sup>−3</sup>/((9.0 × 10<sup>3</sup>)(6.02 × 10<sup>23</sup>)) m<sup>3</sup>.',
          'Denominator first: 9.0 × 6.02 = 54.2, so <i>ρN</i><sub><i>A</i></sub> = 5.42 × 10<sup>27</sup> kg m<sup>−3</sup> mol<sup>−1</sup>. Then<br><i>V</i><sub>atom</sub> = 6.35 × 10<sup>−2</sup>/(5.42 × 10<sup>27</sup>) m<sup>3</sup> = 1.17 × 10<sup>−29</sup> m<sup>3</sup>.',
          '<b>Audit.</b> The result is 1.4 Å, sitting exactly on the atomic rung (10<sup>−10</sup> m) of the chapter’s length ladder. One density and one molar mass buy you the size of matter’s brick.',
        ],
        ans: 'Treating the atom as a sphere, <i>V</i><sub>atom</sub> = (4/3)<i>πr</i><sup>3</sup>, so<br><i>r</i> = (3<i>V</i><sub>atom</sub>/(4<i>π</i>))<sup>1/3</sup> = (3 × 1.17 × 10<sup>−29</sup>/12.57)<sup>1/3</sup> m = (2.79 × 10<sup>−30</sup>)<sup>1/3</sup> m ≈ 1.4 × 10<sup>−10</sup> m.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Advanced] Gas kinetic theory suggests pressure <i>p</i> depends on number density <i>n</i> (molecules per volume), molecular mass <i>m</i>, and typical molecular speed <i>v</i>. Derive the form of <i>p</i> by homogeneity.',
            a: 'Write <i>p</i> = <i>C</i> <i>n</i><sup><i>a</i></sup><i>m</i><sup><i>b</i></sup><i>v</i><sup><i>c</i></sup> with [<i>n</i>] = L<sup>−3</sup>: mass gives <i>b</i> = 1; time gives <i>c</i> = 2; length gives −3<i>a</i> + 2 = −1, so <i>a</i> = 1. Hence <i>p</i> = <i>C</i> <i>n</i> <i>m</i> <i>v</i><sup>2</sup> — kinetic theory’s headline result, dimensionally forced.',
          },
          {
            q: '[JEE Main] A torsional pendulum’s period depends on moment of inertia <i>I</i> and torsional constant <i>C</i> as <i>T</i> = 2<i>π</i>√(<i>I</i>/<i>C</i>). Find [<i>C</i>] by homogeneity alone.',
            a: '[<i>C</i>] = [<i>I</i>]/[<i>T</i>]<sup>2</sup> = (M L<sup>2</sup>)(T<sup>−2</sup>) = M L<sup>2</sup> T<sup>−2</sup> (joule per radian squared, radians being dimensionless).',
          },
          {
            q: '[CBSE] Estimate the number of seconds in a 70-year human lifetime (take 1 year ≈ 3.16 × 10<sup>7</sup> s).',
            a: '70 × 3.16 × 10<sup>7</sup> s ≈ 2.2 × 10<sup>9</sup> s.',
          },
          {
            q: '[JEE Main] A room measures 6 m × 5 m × 4 m. Estimate the number of air molecules in it at <i>P</i> = 1.0 × 10<sup>5</sup> Pa, <i>T</i> = 300 K, using <i>N</i> = <i>PV</i>/(<i>k</i><sub><i>B</i></sub><i>T</i>) with <i>k</i><sub><i>B</i></sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>.',
            a: '<i>PV</i> = 10<sup>5</sup> × 120 = 1.2 × 10<sup>7</sup> J; <i>k</i><sub><i>B</i></sub><i>T</i> = 1.38 × 10<sup>−23</sup> × 300 = 4.14 × 10<sup>−21</sup> J; <i>N</i> = 1.2 × 10<sup>7</sup>/4.14 × 10<sup>−21</sup> ≈ 2.9 × 10<sup>27</sup> molecules.',
          },
          {
            q: '[JEE Advanced] Capillary rise <i>h</i> depends on surface tension <i>S</i>, liquid density <i>ρ</i>, tube radius <i>r</i>, and <i>g</i>. Show that <i>h</i> = <i>r</i> Φ(<i>ρgr</i><sup>2</sup>/<i>S</i>), and identify the choice of the free exponent that yields the familiar form <i>h</i> = <i>CS</i>/(<i>ρgr</i>).',
            a: 'With <i>h</i> = <i>C</i> <i>S</i><sup><i>a</i></sup><i>ρ</i><sup><i>b</i></sup><i>r</i><sup><i>c</i></sup><i>g</i><sup><i>d</i></sup>: mass gives <i>b</i> = −<i>a</i>; time gives <i>a</i> = −<i>d</i>; length gives <i>c</i> = 1 + 2<i>d</i>, so <i>h</i> = <i>C</i> <i>r</i> (<i>ρgr</i><sup>2</sup>/<i>S</i>)<sup><i>d</i></sup> = <i>r</i> Φ(<i>ρgr</i><sup>2</sup>/<i>S</i>), the grouping being dimensionless by substitution. Choosing the free exponent <i>d</i> = −1 gives <i>h</i> = <i>CS</i>/(<i>ρgr</i>) — check: (M T<sup>−2</sup>)/[(M L<sup>−3</sup>)(L T<sup>−2</sup>)(L)] = L.',
          },
          {
            q: '[CBSE] Estimate the number of heartbeats in that same 70-year lifetime, taking roughly 1 beat per second.',
            a: '2.2 × 10<sup>9</sup> s × 1 s<sup>−1</sup> ≈ 2 × 10<sup>9</sup> beats — a heart is a counter with a billion-count warranty.',
          },
        ],
      },
    ],
  },
];
