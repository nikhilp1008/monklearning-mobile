import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional Topics A to C, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 3: Chemical Kinetics —
 * Additional Topics" (p. 136, set at the head of Additional topic A's
 * Introduction), then A Second-Order Kinetics, Properly (pp. 136–137), B Composite
 * Rate Constants: Effective Ea, Parallel and Consecutive Reactions (pp. 138–139)
 * and C Gas-Phase First Order: the p∞ Form (pp. 140–141; Addendum D begins
 * part-way down p. 141). The book draws no figure on these pages.
 *
 * Each addendum prints its answers inside its practice questions ("(Answer: …)");
 * each is set here as that question's answer, the first word capitalised. The
 * legends of the formula blocks are ours, in the words of the surrounding text
 * and of Topic 02.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 136–137 ─────────────────────────
  {
    n: 'A',
    title: 'Second-Order Kinetics, Properly',
    extra: true,
    kalam: 'A plot of 1/[A] against t is a straight line of slope +k and intercept 1/[A]0.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers rate laws, order and molecularity, zero- and first-order integrated equations with their half-lives, pseudo first order reactions, and collision theory with the Arrhenius equation. It is deliberately CBSE-scoped in places that JEE and NEET do not respect. Addendum A completes the integrated rate laws with the second order, derived and worked. Addendum B handles composite rate constants — the effective activation energy of <i>k</i> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub> or <i>k</i> = √(<i>k</i><sub>1</sub><i>k</i><sub>3</sub>), and parallel and consecutive first-order reactions — a shape JEE Main 2025 set outright. Addendum C generalises the gas-phase first-order formula to its <i>p</i><sub>∞</sub> form, the version the 2025 paper quoted as an option. Addendum D restores the named mechanism NCERT itself uses (peroxide–iodide), adds the ozone pre-equilibrium that JEE sets, and gives NCERT’s own zero-order examples. Additional topic E then surveys what JEE and NEET actually ask.',
      },
      {
        t: 'p',
        html: 'The chapter quoted the second-order half-life as “beyond the CBSE scope” and did not derive it. JEE Main does not treat it as beyond scope: half-life scaling questions, the 1/[A] straight line, and the units of <i>k</i> all presuppose the full second-order toolkit.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Derivation.</b> For a single reactant with Rate = <i>k</i>[A]<sup>2</sup>:',
      },
      {
        t: 'formula',
        kicker: 'Second-order integrated rate equation (single reactant)',
        main: '−d[A]/d<i>t</i> = <i>k</i>[A]<sup>2</sup> ⇒ d[A]/[A]<sup>2</sup> = −<i>k</i> d<i>t</i> ⇒ 1/[A] = 1/[A]<sub>0</sub> + <i>kt</i>',
        legend: [
          '[A] = concentration at time <i>t</i>',
          '[A]<sub>0</sub> = initial concentration',
          '<i>k</i> = rate constant',
          '<i>t</i> = time',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A plot of 1/[A] against <i>t</i> is a straight line of slope +<i>k</i> and intercept 1/[A]<sub>0</sub> — the second-order counterpart of the chapter’s first-order log plot. Units of <i>k</i>: L mol<sup>−1</sup> s<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Half-life and the completion ladder.</b> Setting [A] = [A]<sub>0</sub>/2:',
      },
      {
        t: 'formula',
        kicker: 'Second-order half-life',
        main: '<i>t</i><sub>1/2</sub> = 1/(<i>k</i>[A]<sub>0</sub>)',
        legend: [
          '<i>t</i><sub>1/2</sub> = half-life',
          '<i>k</i> = rate constant, defined by −d[A]/d<i>t</i> = <i>k</i>[A]<sup>2</sup>',
          '[A]<sub>0</sub> = initial concentration',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '— inversely proportional to the starting concentration, as in the pattern Topic 02 gives: zero order <i>t</i><sub>1/2</sub> ∝ [A]<sub>0</sub>, first order independent of [A]<sub>0</sub>, second order <i>t</i><sub>1/2</sub> ∝ 1/[A]<sub>0</sub>. The general fraction result follows directly:',
      },
      {
        t: 'formula',
        kicker: 'General fraction result (second order)',
        main: '<i>t</i><sub><i>x</i>%</sub> = (1/(1 − <i>x</i>/100) − 1)/(<i>k</i>[A]<sub>0</sub>)',
        legend: [
          '<i>t</i><sub><i>x</i>%</sub> = time for <i>x</i>% conversion',
          '<i>x</i> = percentage converted',
          '<i>k</i> = rate constant, defined by −d[A]/d<i>t</i> = <i>k</i>[A]<sup>2</sup>',
          '[A]<sub>0</sub> = initial concentration',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'so <i>t</i><sub>75%</sub> = 3 <i>t</i><sub>1/2</sub> and <i>t</i><sub>87.5%</sub> = 7 <i>t</i><sub>1/2</sub> — second-order reactions take progressively longer per halving, the mirror image of first order’s constant rhythm. (This matches the chapter’s consistency check <i>t</i><sub>3/4</sub>/<i>t</i><sub>1/2</sub> = 2<sup><i>n</i>−1</sup> + 1, which gives 3 at <i>n</i> = 2.)',
      },
      {
        t: 'p',
        html: '<b>The one-line order identifier.</b> With half-lives at two starting concentrations, <i>t</i><sub>1/2</sub> ∝ [A]<sub>0</sub><sup>1−<i>n</i></sup>: doubled [A]<sub>0</sub> with doubled <i>t</i><sub>1/2</sub> means zero order; unchanged <i>t</i><sub>1/2</sub> means first order; halved <i>t</i><sub>1/2</sub> means second order; quadrupled <i>t</i><sub>1/2</sub> when [A]<sub>0</sub> halves means third order (2<sup><i>n</i>−1</sup> = 4).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main level — Full second-order numerics',
        q: 'The dimerisation 2A → A<sub>2</sub> is second order in A, with −d[A]/d<i>t</i> = <i>k</i>[A]<sup>2</sup>, <i>k</i> = 5.0 × 10<sup>−3</sup> L mol<sup>−1</sup> s<sup>−1</sup> and [A]<sub>0</sub> = 0.20 mol L<sup>−1</sup>. Find (a) the half-life, (b) the concentration after 500 s, (c) the time for 87.5% conversion.',
        steps: [
          '(a) <i>t</i><sub>1/2</sub> = 1/(<i>k</i>[A]<sub>0</sub>) = 1/(5.0 × 10<sup>−3</sup> × 0.20)',
          '(b) 1/[A] = 1/0.20 + (5.0 × 10<sup>−3</sup>)(500) = 5.0 + 2.5 = 7.5',
          '(c) 87.5% conversion leaves [A]<sub>0</sub>/8, so<br><i>t</i> = (8 − 1)/(<i>k</i>[A]<sub>0</sub>) = 7 <i>t</i><sub>1/2</sub>',
          'Note the discipline of part (b): second order works in reciprocal concentration — adding <i>kt</i> to 1/[A]<sub>0</sub>, never subtracting <i>kt</i> from [A]<sub>0</sub> (that is the zero-order move).',
          'Which <i>k</i>? Here <i>k</i> is defined by A’s own loss, as in Method. Topic 01’s rate of reaction divides by the coefficient: Rate = −(1/2) d[A]/d<i>t</i> = <i>k</i>[A]<sup>2</sup> means −d[A]/d<i>t</i> = 2<i>k</i>[A]<sup>2</sup>, and the same <i>k</i> would then give <i>t</i><sub>1/2</sub> = 1/(2<i>k</i>[A]<sub>0</sub>) = 500 s, [A] = 0.10 mol L<sup>−1</sup> after 500 s, and 3500 s for 87.5%. Read how the question defines <i>k</i>. With a coefficient and no definition, boards and NEET usually mean the reactant’s own loss; JEE Advanced has used the factor of 2.',
        ],
        ans: '(a) <i>t</i><sub>1/2</sub> = 1000 s; (b) [A] = 0.133 mol L<sup>−1</sup> (0.13 mol L<sup>−1</sup> to two significant figures); (c) <i>t</i> = 7000 s',
      },
      {
        t: 'ex',
        tag: 'JEE Main archetype — Order from half-life scaling',
        q: 'The half-life of a reaction becomes four times longer when the initial reactant concentration is halved. Find the order.',
        steps: [
          '<i>t</i><sub>1/2</sub> ∝ [A]<sub>0</sub><sup>1−<i>n</i></sup>. Halving [A]<sub>0</sub> multiplies the half-life by 2<sup><i>n</i>−1</sup> = 4, so <i>n</i> − 1 = 2',
          '(The same logic handles the pressure version: <i>t</i><sub>1/2</sub> unchanged when the initial pressure halves ⇒ first order; proportional to the initial pressure ⇒ zero order.)',
        ],
        ans: '<i>n</i> = 3',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Derive the integrated rate equation for a second-order reaction and write its half-life.',
            a: '−d[A]/d<i>t</i> = <i>k</i>[A]<sup>2</sup> gives d[A]/[A]<sup>2</sup> = −<i>k</i> d<i>t</i>; integrating from [A]<sub>0</sub> at <i>t</i> = 0, 1/[A] − 1/[A]<sub>0</sub> = <i>kt</i>. Setting [A] = [A]<sub>0</sub>/2 gives <i>t</i><sub>1/2</sub> = 1/(<i>k</i>[A]<sub>0</sub>).',
          },
          {
            q: '[NEET] For a second-order reaction, doubling the initial concentration changes the half-life by what factor?',
            a: 'Halves it — <i>t</i><sub>1/2</sub> ∝ 1/[A]<sub>0</sub>.',
          },
          {
            q: '[JEE Main] A second-order reaction has <i>t</i><sub>1/2</sub> = 40 min at [A]<sub>0</sub> = 0.10 M. Find <i>k</i>, then <i>t</i><sub>1/2</sub> at [A]<sub>0</sub> = 0.40 M.',
            a: '<i>k</i> = 1/(40 × 0.10) = 0.25 L mol<sup>−1</sup> min<sup>−1</sup>; at fourfold concentration, <i>t</i><sub>1/2</sub> = 10 min.',
          },
          {
            q: '[JEE Main] Which plot is linear for a second-order reaction, and what is its slope?',
            a: '1/[A] vs <i>t</i>, slope +<i>k</i>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 138–139 ─────────────────────────
  {
    n: 'B',
    title: 'Composite Rate Constants: Effective Ea, Parallel and Consecutive Reactions',
    extra: true,
    kalam: 'Because a reverse step subtracts, an effective Ea can come out smaller than every individual step’s — or even negative.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Mechanism problems end with a composite observed constant — <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub> is the standard outcome of the chapter’s own pre-equilibrium derivation. Two follow-on questions the chapter never asks are exactly what JEE asks: what is the effective activation energy of that composite, and what happens when reactions run side by side or in a chain?',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Effective activation energy — the log rule.</b> Since every elementary constant obeys Arrhenius, ln <i>k</i><sub><i>i</i></sub> = ln <i>A</i><sub><i>i</i></sub> − <i>E</i><sub>a,<i>i</i></sub>/<i>RT</i>, any product-quotient-power combination of constants has an activation energy that is the same combination of the individual ones:',
      },
      {
        t: 'formula',
        kicker: 'Effective activation energy — the log rule',
        main: '<i>k</i><sub>obs</sub> = ∏<sub><i>i</i></sub> <i>k</i><sub><i>i</i></sub><sup><i>a</i><sub><i>i</i></sub></sup> ⇒ <i>E</i><sub>a</sub>(obs) = ∑<sub><i>i</i></sub> <i>a</i><sub><i>i</i></sub> <i>E</i><sub>a,<i>i</i></sub>',
        legend: [
          '<i>k</i><sub>obs</sub> = composite observed constant',
          '<i>k</i><sub><i>i</i></sub> = rate constant of elementary step <i>i</i>',
          '<i>a</i><sub><i>i</i></sub> = power of <i>k</i><sub><i>i</i></sub> in the combination (negative for a constant in the denominator)',
          '<i>E</i><sub>a</sub>(obs) = effective activation energy',
          '<i>E</i><sub>a,<i>i</i></sub> = activation energy of step <i>i</i>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'So for <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub>: <i>E</i><sub>a</sub> = <i>E</i><sub>a,1</sub> + <i>E</i><sub>a,2</sub> − <i>E</i><sub>a,−1</sub>; for <i>k</i><sub>obs</sub> = (<i>k</i><sub>1</sub><i>k</i><sub>3</sub>)<sup>1/2</sup>: <i>E</i><sub>a</sub> = (<i>E</i><sub>a,1</sub> + <i>E</i><sub>a,3</sub>)/2. Because a reverse step subtracts, an effective <i>E</i><sub>a</sub> can come out smaller than every individual step’s — or even negative. The log rule is the entire content of the JEE Main 2025 item on the subject.',
      },
      {
        t: 'p',
        html: '<b>Parallel first-order reactions.</b> If A decays by two channels, A →<sup><i>k</i>₁</sup> B and A →<sup><i>k</i>₂</sup> C, the disappearance adds: −d[A]/d<i>t</i> = (<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)[A], so [A] = [A]<sub>0</sub><i>e</i><sup>−(<i>k</i>₁+<i>k</i>₂)<i>t</i></sup>. The products form in the fixed ratio',
      },
      {
        t: 'formula',
        kicker: 'Parallel first-order reactions (no B or C at the start)',
        main: '[B]/[C] = <i>k</i><sub>1</sub>/<i>k</i><sub>2</sub> at all times<br>fraction to B = <i>k</i><sub>1</sub>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)',
        legend: [
          '[B], [C] = concentrations of the products',
          '<i>k</i><sub>1</sub> = rate constant of the channel A → B',
          '<i>k</i><sub>2</sub> = rate constant of the channel A → C',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A sum does not obey the log rule: for <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> the effective activation energy is the weighted mean (<i>k</i><sub>1</sub><i>E</i><sub>a,1</sub> + <i>k</i><sub>2</sub><i>E</i><sub>a,2</sub>)/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>Consecutive first-order reactions.</b> In A →<sup><i>k</i>₁</sup> B →<sup><i>k</i>₂</sup> C, when one step is much slower it caps the whole chain — the slowest-link logic of the rate-determining step applied to time evolution. If <i>k</i><sub>2</sub> ≫ <i>k</i><sub>1</sub>, the intermediate B barely accumulates and product C appears essentially at the pace of <i>k</i><sub>1</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main 2025 archetype — Ea of a composite constant',
        q: 'A complex reaction proceeds in steps with rate constants <i>k</i><sub>1</sub>, <i>k</i><sub>2</sub>, <i>k</i><sub>3</sub>, and the overall constant is <i>k</i> = (<i>k</i><sub>1</sub><i>k</i><sub>3</sub>)<sup>1/2</sup>. The activation energies of the three steps are 60, 30 and 10 kJ mol<sup>−1</sup> respectively. Find the overall activation energy.',
        steps: [
          'By the log rule only <i>k</i><sub>1</sub> and <i>k</i><sub>3</sub> enter, each with exponent 1/2:<br><i>E</i><sub>a</sub> = (<i>E</i><sub>a,1</sub> + <i>E</i><sub>a,3</sub>)/2 = (60 + 10)/2',
          'The step whose constant does not appear in the composite (<i>k</i><sub>2</sub>, with its 30 kJ mol<sup>−1</sup>) contributes nothing — a designed distractor.',
        ],
        ans: '<i>E</i><sub>a</sub> = 35 kJ mol<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level — A composite with a reverse step',
        q: 'A pre-equilibrium mechanism gives <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub> with <i>E</i><sub>a,1</sub> = 40, <i>E</i><sub>a,2</sub> = 50, <i>E</i><sub>a,−1</sub> = 70 kJ mol<sup>−1</sup>. Find the effective activation energy and comment.',
        steps: [
          '<i>E</i><sub>a</sub> = 40 + 50 − 70',
          'The physical reading: raising the temperature accelerates the reverse of step 1 more than its forward direction, draining the intermediate pool and softening the overall temperature response. A composite <i>E</i><sub>a</sub> is not bounded by the individual ones.',
        ],
        ans: '<i>E</i><sub>a</sub> = 20 kJ mol<sup>−1</sup> — lower than every forward step.',
      },
      {
        t: 'ex',
        tag: 'JEE Main archetype — Two simultaneous first-order decays',
        q: 'Substances A and B decay independently by first-order kinetics, with half-lives 15 min and 5 min. Initially [B]<sub>0</sub> = 4[A]<sub>0</sub>. After how long are their concentrations equal?',
        steps: [
          'Write [A] = [A]<sub>0</sub> 2<sup>−<i>t</i>/15</sup> and [B] = 4[A]<sub>0</sub> 2<sup>−<i>t</i>/5</sup>. Equality needs<br>2<sup>−<i>t</i>/15</sup> = 4 × 2<sup>−<i>t</i>/5</sup> ⇒ 2<sup><i>t</i>/5−<i>t</i>/15</sup> = 4 ⇒ 2<sup>2<i>t</i>/15</sup> = 2<sup>2</sup>',
          'At <i>t</i> = 15 min, A has gone through one half-life (its concentration is divided by 2) and B through three (divided by 8). B’s 4:1 head start is a factor 2<sup>2</sup>, and it is cancelled exactly by B’s two extra half-lives.',
        ],
        ans: '<i>t</i> = 15 min',
      },
      {
        t: 'ex',
        tag: 'JEE Main level — Parallel channels',
        q: 'Reactant A converts to B with <i>k</i><sub>1</sub> = 3.0 × 10<sup>−3</sup> s<sup>−1</sup> and to C with <i>k</i><sub>2</sub> = 1.0 × 10<sup>−3</sup> s<sup>−1</sup>, both first order. Find (a) the overall half-life of A, (b) the product ratio after any time.',
        steps: [
          '(a) <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> = 4.0 × 10<sup>−3</sup> s<sup>−1</sup>, so <i>t</i><sub>1/2</sub> = 0.693/(4.0 × 10<sup>−3</sup>)',
          '(b) [B]/[C] = <i>k</i><sub>1</sub>/<i>k</i><sub>2</sub>',
        ],
        ans: '(a) <i>t</i><sub>1/2</sub> = 173 s (1.7 × 10<sup>2</sup> s to two significant figures); (b) [B]/[C] = 3 at all times — three quarters of every mole of A that reacts becomes B.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A mechanism yields <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub>(<i>k</i><sub>2</sub>/<i>k</i><sub>−2</sub>)<sup>1/2</sup>. Write the effective activation energy in terms of the three steps.',
            a: '<i>E</i><sub>a</sub> = <i>E</i><sub>a,1</sub> + (<i>E</i><sub>a,2</sub> − <i>E</i><sub>a,−2</sub>)/2.',
          },
          {
            q: '[JEE Main] In parallel first-order channels with <i>k</i><sub>1</sub> ∶ <i>k</i><sub>2</sub> = 2 ∶ 1, what fraction of product is from channel 1, and what is <i>t</i><sub>1/2</sub> if <i>k</i><sub>2</sub> = 0.01 s<sup>−1</sup>?',
            a: '2/3; <i>k</i><sub>obs</sub> = 0.03 s<sup>−1</sup>, <i>t</i><sub>1/2</sub> = 23.1 s.',
          },
          {
            q: '[JEE Advanced] Can an effective activation energy be negative? Construct one from <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub>.',
            a: 'Yes — whenever <i>E</i><sub>a,−1</sub> > <i>E</i><sub>a,1</sub> + <i>E</i><sub>a,2</sub>, e.g. <i>E</i><sub>a,1</sub> = 30, <i>E</i><sub>a,2</sub> = 40 and <i>E</i><sub>a,−1</sub> = 100 kJ mol<sup>−1</sup> give <i>E</i><sub>a</sub> = −30 kJ mol<sup>−1</sup>; the composite slows on heating because the pre-equilibrium shifts back.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 140–141 ─────────────────────────
  {
    n: 'C',
    title: 'Gas-Phase First Order: the p∞ Form',
    extra: true,
    kalam: 'The two forms are interchangeable; reach for pi when the start is given, for p∞ when the completion pressure is.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter derived the gas-phase first-order equation against the initial pressure, <i>k</i> = (2.303/<i>t</i>) log[<i>p</i><sub>i</sub>/(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>)] for A → B + C. JEE Main 2025 quoted the same physics written against the final (infinite-time) pressure — and the chapter’s toolbox does not contain that form.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The <i>p</i><sub>∞</sub> bookkeeping.</b> For A(g) → B(g) + C(g) starting from pure A: at completion every mole of A has become two moles of gas, so<br><i>p</i><sub>∞</sub> = 2<i>p</i><sub>i</sub>',
      },
      {
        t: 'p',
        html: 'At time <i>t</i>, with <i>x</i> of A reacted: <i>p</i><sub>t</sub> = (<i>p</i><sub>i</sub> − <i>x</i>) + <i>x</i> + <i>x</i> = <i>p</i><sub>i</sub> + <i>x</i>, so <i>x</i> = <i>p</i><sub>t</sub> − <i>p</i><sub>i</sub> and the surviving reactant pressure is<br><i>p</i><sub>A</sub> = <i>p</i><sub>i</sub> − <i>x</i> = <i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>',
      },
      { t: 'p', html: 'Substituting into the first-order law with <i>p</i><sub>i</sub> = <i>p</i><sub>∞</sub>/2:' },
      {
        t: 'formula',
        kicker: 'Gas-phase first order: the <i>p</i><sub>∞</sub> form (A(g) → B(g) + C(g), starting from pure A)',
        main: '<i>k</i> = (1/<i>t</i>) ln(<i>p</i><sub>i</sub>/<i>p</i><sub>A</sub>) = (1/<i>t</i>) ln(<i>p</i><sub>∞</sub>/(2(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)))',
        legend: [
          '<i>k</i> = rate constant',
          '<i>t</i> = time',
          '<i>p</i><sub>i</sub> = initial pressure of pure A',
          '<i>p</i><sub>A</sub> = surviving reactant pressure, <i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>',
          '<i>p</i><sub>∞</sub> = final (infinite-time) pressure, 2<i>p</i><sub>i</sub>',
          '<i>p</i><sub>t</sub> = total pressure at time <i>t</i>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '— precisely the expression JEE Main 2025 listed as its correct option. The two forms are interchangeable; reach for <i>p</i><sub>i</sub> when the start is given, for <i>p</i><sub>∞</sub> when the completion pressure is.',
      },
      {
        t: 'p',
        html: '<b>Any gas mole-count works the same way.</b> The method — write the stoichiometric pressure table, express total pressure through <i>x</i>, recover <i>p</i><sub>A</sub> — is the real skill; the formulas are just its two most common outputs. For 2N<sub>2</sub>O<sub>5</sub> → 4NO<sub>2</sub> + O<sub>2</sub> (NCERT’s standard decomposition), 2 mol of gas become 5, so <i>p</i><sub>∞</sub> = (5/2)<i>p</i><sub>i</sub> and <i>p</i><sub>N₂O₅</sub> = (1/3)(5<i>p</i><sub>i</sub> − 2<i>p</i><sub>t</sub>) — but since first-order kinetics tracks the reactant’s own partial pressure exponentially, <i>p</i><sub>N₂O₅</sub> = <i>p</i><sub>i</sub><i>e</i><sup>−<i>kt</i></sup>, with <i>k</i> defined by N<sub>2</sub>O<sub>5</sub>’s own loss, is usually the fastest route when only the reactant pressure is wanted.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main 2025 archetype — Choosing the right expression',
        q: 'For first-order A(g) → B(g) + C(g) started with pure A, which expression is correct?<br>(1) <i>k</i> = (1/<i>t</i>) ln(2(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)/<i>p</i><sub>t</sub>)<br>(2) <i>k</i> = (1/<i>t</i>) ln(<i>p</i><sub>∞</sub>/<i>p</i><sub>t</sub>)<br>(3) <i>k</i> = (1/<i>t</i>) ln(<i>p</i><sub>∞</sub>/(2(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)))<br>(4) <i>k</i> = (1/<i>t</i>) ln(<i>p</i><sub>∞</sub>/(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>))',
        steps: [
          'From the bookkeeping above, <i>p</i><sub>A</sub> = <i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub> and <i>p</i><sub>i</sub> = <i>p</i><sub>∞</sub>/2, so<br><i>k</i> = (1/<i>t</i>) ln(<i>p</i><sub>i</sub>/<i>p</i><sub>A</sub>) = (1/<i>t</i>) ln((<i>p</i><sub>∞</sub>/2)/(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)) = (1/<i>t</i>) ln(<i>p</i><sub>∞</sub>/(2(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)))',
          'Option (4) drops the factor of 2 in the denominator; option (1) is an unrelated rearrangement, equal to (1/<i>t</i>) ln(2<i>p</i><sub>A</sub>/<i>p</i><sub>t</sub>); option (2) puts the total pressure where the reactant pressure belongs, and <i>p</i><sub>∞</sub> where <i>p</i><sub>i</sub> belongs, the chapter’s named trap in new clothing.',
        ],
        ans: 'Option (3).',
      },
      {
        t: 'ex',
        tag: 'JEE Main level — N₂O₅ from rate constant alone',
        q: 'For the first-order decomposition of N<sub>2</sub>O<sub>5</sub> at constant temperature and volume, <i>k</i> = 3.38 × 10<sup>−5</sup> s<sup>−1</sup>, defined by N<sub>2</sub>O<sub>5</sub>’s own loss, −d[N<sub>2</sub>O<sub>5</sub>]/d<i>t</i> = <i>k</i>[N<sub>2</sub>O<sub>5</sub>]. Starting with pure N<sub>2</sub>O<sub>5</sub> at 100 atm, find its partial pressure after 20 min.',
        steps: [
          'First order needs no stoichiometric table for the reactant itself:<br><i>p</i><sub>N₂O₅</sub> = <i>p</i><sub>i</sub><i>e</i><sup>−<i>kt</i></sup>, with <i>kt</i> = (3.38 × 10<sup>−5</sup>)(1200) = 0.0406, so <i>p</i><sub>N₂O₅</sub> = 100 × <i>e</i><sup>−0.0406</sup> = 100 × 0.960',
          'The total pressure is a different question (it involves the 2-to-5 gas mole change); the reactant pressure is pure exponential decay.',
          'If a question instead writes 2N<sub>2</sub>O<sub>5</sub> → 4NO<sub>2</sub> + O<sub>2</sub> and defines Rate = −(1/2) d[N<sub>2</sub>O<sub>5</sub>]/d<i>t</i> = <i>k</i>[N<sub>2</sub>O<sub>5</sub>], the exponent is 2<i>kt</i> and the pressure is 100 × <i>e</i><sup>−0.0811</sup> = 92.2 atm.',
        ],
        ans: '<i>p</i><sub>N₂O₅</sub> = 96 atm',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Show that for A(g) → B(g) + C(g) with pure A initially, the chapter’s form <i>k</i> = (2.303/<i>t</i>) log[<i>p</i><sub>i</sub>/(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>)] and the <i>p</i><sub>∞</sub> form are algebraically identical.',
            a: 'Set <i>p</i><sub>∞</sub> = 2<i>p</i><sub>i</sub>; then 2(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>) = 2(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>), and <i>p</i><sub>∞</sub>/[2(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)] = 2<i>p</i><sub>i</sub>/[2(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>)] = <i>p</i><sub>i</sub>/(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>).',
          },
          {
            q: '[JEE Main] For the first-order reaction A(g) → B(g) + C(g) at constant temperature and volume, started at 0.50 atm of pure A, the total pressure is 0.60 atm after 100 s. Find <i>k</i> and the rate when the total pressure reaches 0.65 atm.',
            a: '<i>p</i><sub>A</sub> = 2(0.50) − 0.60 = 0.40 atm, so <i>k</i> = (1/100) ln(0.50/0.40) = 2.2 × 10<sup>−3</sup> s<sup>−1</sup>; at <i>p</i><sub>t</sub> = 0.65, <i>p</i><sub>A</sub> = 0.35 atm and rate = <i>k</i> <i>p</i><sub>A</sub> = 7.8 × 10<sup>−4</sup> atm s<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] For X(g) → 2Y(g) + Z(g), express <i>p</i><sub>∞</sub> and <i>p</i><sub>X</sub> in terms of <i>p</i><sub>i</sub> and <i>p</i><sub>t</sub>.',
            a: '1 mol becomes 3, so <i>p</i><sub>∞</sub> = 3<i>p</i><sub>i</sub>; <i>p</i><sub>t</sub> = <i>p</i><sub>i</sub> + 2<i>x</i>, so <i>p</i><sub>X</sub> = <i>p</i><sub>i</sub> − <i>x</i> = (3<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>)/2 = (<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)/2.',
          },
        ],
      },
    ],
  },
];
