import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Additional Topics A and B, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 848, set at
 * the head of Addendum A), then A Sequential Decay and the Equilibrium of
 * Parent–Daughter Chains (pp. 848 to 851) and B The Geiger–Nuttall Law for
 * Alpha Decay (pp. 852 to 854; its practice answers end on p. 854, and
 * Addendum C opens p. 855). Each addendum prints its own practice problems
 * and answers, which are its Practice part. These pages print no drawings:
 * every equation is typeset.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 848–851 ─────────────────────────
  {
    n: 'A',
    title: 'Sequential Decay and the Equilibrium of Parent–Daughter Chains',
    extra: true,
    kalam: 'JEE regularly asks what happens when a daughter nucleus is itself radioactive: a parent decays into a daughter that then decays further.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the nuclear size law, the binding-energy curve, the exponential decay law, half-life, activity, and the Q-value for fission and fusion. Five JEE patterns sit just outside that boundary. Addendum A marries two decay laws to the sequential-decay chain: when the parent is the longer-lived member, the parent-daughter-granddaughter system reaches a predictable equilibrium, and the algebra of transient and secular equilibrium lets you read the answer directly from a ratio of half-lives. Addendum B computes the energy released in the alpha decay that Topic 03 introduces (its Q-value) and adds the Geiger–Nuttall law — the exponential systematics that connects decay constant to Q-value and appears in Advanced problems by name. Addendum C completes the beta-decay picture the chapter sketches (Topic 03 writes the β<sup>−</sup> and β<sup>+</sup> decay equations): the energy condition for positron emission, electron capture, and the energy balance that makes neutrino bookkeeping mandatory. Addendum D builds the semi-empirical mass formula from the liquid-drop model, turning the surface and Coulomb reasoning that Topic 02 uses for the curve’s shape into five fitted terms, so you can compute binding energies and see exactly why the curve has its shape. Addendum E generalises the Q-value into nuclear reaction kinematics: threshold energy for endoergic reactions and the correct mass-energy accounting.<br><br>Most of what follows is the decay law, mass-energy equivalence, or conservation laws, applied one step further than the chapter carries them; the Geiger–Nuttall law (Addendum B) and the semi-empirical mass formula (Addendum D) are new, empirical results.',
      },
      {
        t: 'p',
        html: 'Topic 03 derives the law <i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup> for a single radioactive species. JEE regularly asks what happens when a daughter nucleus is itself radioactive: a parent decays into a daughter that then decays further. The system has two coupled decay laws, and the daughter activity can initially grow before eventually dying out. Two limiting cases — transient equilibrium (parent half-life longer than the daughter’s, but comparable to it) and secular equilibrium (parent half-life much longer than the daughter’s) — collapse the algebra into a single useful ratio that lets you read the answer without solving the differential equations.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The parent–daughter chain.</b> Parent <i>A</i> decays with constant <i>λ</i><sub>1</sub> into daughter <i>B</i> which decays with constant <i>λ</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Number of daughter nuclei at time <i>t</i></b> (no daughter nuclei at <i>t</i> = 0; <i>N</i><sub>10</sub> = number of parent nuclei at <i>t</i> = 0):<br><i>N</i><sub>2</sub>(<i>t</i>) = [<i>λ</i><sub>1</sub><i>N</i><sub>10</sub>/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>)](<i>e</i><sup>−<i>λ</i>₁<i>t</i></sup> − <i>e</i><sup>−<i>λ</i>₂<i>t</i></sup>)   (<i>λ</i><sub>1</sub> ≠ <i>λ</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>Activity of daughter:</b><br><i>R</i><sub>2</sub>(<i>t</i>) = <i>λ</i><sub>2</sub><i>N</i><sub>2</sub> = [<i>λ</i><sub>1</sub><i>λ</i><sub>2</sub><i>N</i><sub>10</sub>/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>)](<i>e</i><sup>−<i>λ</i>₁<i>t</i></sup> − <i>e</i><sup>−<i>λ</i>₂<i>t</i></sup>).',
      },
      {
        t: 'p',
        html: '<b>Transient equilibrium (<i>λ</i><sub>1</sub> < <i>λ</i><sub>2</sub> but comparable).</b> After sufficient time <i>t</i> ≫ 1/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>):<br><i>N</i><sub>2</sub> ≈ <i>N</i><sub>1</sub><i>λ</i><sub>1</sub>/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>),   <i>R</i><sub>2</sub> ≈ <i>R</i><sub>1</sub><i>λ</i><sub>2</sub>/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>).<br>The daughter activity rises, peaks, and then decays at the parent’s rate.',
      },
      {
        t: 'p',
        html: '<b>Secular equilibrium (<i>λ</i><sub>1</sub> ≪ <i>λ</i><sub>2</sub>, parent very long-lived).</b> Taking <i>λ</i><sub>1</sub> → 0:<br><i>N</i><sub>2</sub> ≈ <i>λ</i><sub>1</sub><i>N</i><sub>10</sub>/<i>λ</i><sub>2</sub> = <i>R</i><sub>1</sub>/<i>λ</i><sub>2</sub>,   <i>R</i><sub>2</sub> ≈ <i>R</i><sub>1</sub>.<br>The daughter activity equals the parent activity, and the number of daughter nuclei is the parent’s activity divided by the daughter’s decay constant. This is why, in an old uranium ore, the amount of each short-lived daughter is fixed by the ratio of half-lives.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>λ</i> in s<sup>−1</sup>, <i>N</i> dimensionless, <i>R</i> = <i>λN</i> in s<sup>−1</sup> = Bq. In <i>R</i><sub>2</sub> ≈ <i>R</i><sub>1</sub>, both sides have units s<sup>−1</sup>. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Secular Equilibrium in a Uranium Series',
        q: 'The parent <sup>238</sup>U has <i>λ</i><sub>1</sub> = 4.92 × 10<sup>−18</sup> s<sup>−1</sup> (<i>T</i><sub>1/2</sub> ≈ 4.47 × 10<sup>9</sup> yr). Its daughter <sup>234</sup>Th has <i>λ</i><sub>2</sub> = 3.33 × 10<sup>−7</sup> s<sup>−1</sup> (<i>T</i><sub>1/2</sub> ≈ 24.1 days). A sample has <i>N</i><sub>1</sub> = 10<sup>12</sup> uranium nuclei at <i>t</i> = 0. Find the activity of the thorium daughter after long time (secular equilibrium).',
        steps: [
          '<b>Step 1 — Check secular condition.</b> <i>λ</i><sub>1</sub>/<i>λ</i><sub>2</sub> = (4.92 × 10<sup>−18</sup>)/(3.33 × 10<sup>−7</sup>) ≈ 1.5 × 10<sup>−11</sup> ≪ 1. Condition <i>λ</i><sub>1</sub> ≪ <i>λ</i><sub>2</sub> is satisfied. Secular equilibrium applies.',
          '<b>Step 2 — Parent activity at equilibrium.</b><br><i>R</i><sub>1</sub> = <i>λ</i><sub>1</sub><i>N</i><sub>1</sub> = (4.92 × 10<sup>−18</sup>)(10<sup>12</sup>) = 4.92 × 10<sup>−6</sup> Bq.',
          '<b>Step 3 — Daughter activity at secular equilibrium.</b><br><i>R</i><sub>2</sub> ≈ <i>R</i><sub>1</sub> = 4.92 × 10<sup>−6</sup> Bq.',
          '<b>Step 4 — Daughter nuclei count.</b><br><i>N</i><sub>2</sub> ≈ <i>R</i><sub>2</sub>/<i>λ</i><sub>2</sub> = (4.92 × 10<sup>−6</sup>)/(3.33 × 10<sup>−7</sup>)',
        ],
        ans: 'The thorium activity equals the uranium activity: <i>R</i><sub>2</sub> ≈ 4.9 × 10<sup>−6</sup> Bq, with about 15 thorium nuclei in equilibrium (<i>N</i><sub>2</sub> ≈ 14.8). Note that <i>N</i><sub>2</sub> is tiny because <i>λ</i><sub>2</sub> is large — the short-lived daughter is consumed nearly as fast as it is produced. The total activity of the chain is still governed by the parent.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Transient Equilibrium and the Activity Ratio',
        q: 'A parent nucleus <i>X</i> (<i>T</i><sub>1/2</sub> = 10 h) decays into daughter <i>Y</i> (<i>T</i><sub>1/2</sub> = 2 h). Initially only <i>X</i> is present with <i>N</i><sub>X</sub>(0) = <i>N</i><sub>0</sub>. Find the time at which the daughter activity equals the parent activity, and the maximum daughter activity.',
        steps: [
          '<b>Step 1 — Convert half-lives to decay constants.</b><br><i>λ</i><sub>X</sub> = 0.693/10 = 0.0693 h<sup>−1</sup>,   <i>λ</i><sub>Y</sub> = 0.693/2 = 0.3465 h<sup>−1</sup>.',
          '<b>Step 2 — Condition <i>R</i><sub>Y</sub> = <i>R</i><sub>X</sub>.</b> Using the activity formula:<br>[<i>λ</i><sub>X</sub><i>λ</i><sub>Y</sub><i>N</i><sub>0</sub>/(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)](<i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i></sup> − <i>e</i><sup>−<i>λ</i><sub>Y</sub><i>t</i></sup>) = <i>λ</i><sub>X</sub><i>N</i><sub>0</sub><i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i></sup>.<br>Cancel <i>λ</i><sub>X</sub><i>N</i><sub>0</sub> on both sides:<br>[<i>λ</i><sub>Y</sub>/(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)](<i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i></sup> − <i>e</i><sup>−<i>λ</i><sub>Y</sub><i>t</i></sup>) = <i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i></sup>.<br>Divide by <i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i></sup>:<br>[<i>λ</i><sub>Y</sub>/(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)](1 − <i>e</i><sup>−(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)<i>t</i></sup>) = 1.<br>Hence 1 − <i>e</i><sup>−(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)<i>t</i></sup> = (<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)/<i>λ</i><sub>Y</sub>, which gives<br><i>e</i><sup>−(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)<i>t</i></sup> = <i>λ</i><sub>X</sub>/<i>λ</i><sub>Y</sub> = 0.0693/0.3465 = 0.2 ⇒ <i>t</i> = ln 5/(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>) = 1.609/0.2772 ≈ 5.80 h.<br>So <i>R</i><sub>Y</sub> = <i>R</i><sub>X</sub> at <i>t</i> ≈ 5.8 h. Before this time <i>R</i><sub>Y</sub> < <i>R</i><sub>X</sub>; afterwards <i>R</i><sub>Y</sub> > <i>R</i><sub>X</sub>.',
          '<b>Step 3 — Time of maximum daughter activity.</b> Set d<i>R</i><sub>Y</sub>/d<i>t</i> = 0 in:<br><i>R</i><sub>Y</sub>(<i>t</i>) = [<i>λ</i><sub>X</sub><i>λ</i><sub>Y</sub><i>N</i><sub>0</sub>/(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)](<i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i></sup> − <i>e</i><sup>−<i>λ</i><sub>Y</sub><i>t</i></sup>).<br>d<i>R</i><sub>Y</sub>/d<i>t</i> = [<i>λ</i><sub>X</sub><i>λ</i><sub>Y</sub><i>N</i><sub>0</sub>/(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)](−<i>λ</i><sub>X</sub><i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i></sup> + <i>λ</i><sub>Y</sub><i>e</i><sup>−<i>λ</i><sub>Y</sub><i>t</i></sup>) = 0.<br><i>λ</i><sub>Y</sub><i>e</i><sup>−<i>λ</i><sub>Y</sub><i>t</i></sup> = <i>λ</i><sub>X</sub><i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i></sup>.<br><i>e</i><sup>−(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>)<i>t</i></sup> = <i>λ</i><sub>X</sub>/<i>λ</i><sub>Y</sub> ⇒ <i>t</i><sub>max</sub> = ln(<i>λ</i><sub>Y</sub>/<i>λ</i><sub>X</sub>)/(<i>λ</i><sub>Y</sub> − <i>λ</i><sub>X</sub>).',
          'Numerically <i>t</i><sub>max</sub> = ln 5/0.2772 ≈ 5.80 h, exactly the time found in Step 2. This is no accident: d<i>N</i><sub>Y</sub>/d<i>t</i> = <i>λ</i><sub>X</sub><i>N</i><sub>X</sub> − <i>λ</i><sub>Y</sub><i>N</i><sub>Y</sub> = <i>R</i><sub>X</sub> − <i>R</i><sub>Y</sub>, so the daughter activity is a maximum precisely when it equals the parent activity.',
        ],
        ans: 'The daughter activity equals the parent activity at <i>t</i> ≈ 5.8 h, and this is also the instant at which the daughter activity is largest. Because <i>R</i><sub>Y</sub> = <i>R</i><sub>X</sub> at that moment, the maximum daughter activity is<br><i>R</i><sub>Y,max</sub> = <i>R</i><sub>X</sub>(<i>t</i><sub>max</sub>) = <i>R</i><sub>X</sub>(0) <i>e</i><sup>−<i>λ</i><sub>X</sub><i>t</i><sub>max</sub></sup> = <i>R</i><sub>X</sub>(0) <i>e</i><sup>−0.0693×5.80</sup> ≈ 0.67 <i>R</i><sub>X</sub>(0).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A radioactive parent has half-life <i>T</i><sub>1</sub> and decays into a daughter with half-life <i>T</i><sub>2</sub>. If <i>T</i><sub>1</sub> ≫ <i>T</i><sub>2</sub>, show that the daughter activity approaches the parent activity at long times.',
            a: 'For secular equilibrium <i>R</i><sub>2</sub> ≈ <i>R</i><sub>1</sub> when <i>λ</i><sub>1</sub> ≪ <i>λ</i><sub>2</sub>. Proof: take limit <i>λ</i><sub>1</sub> → 0 in the general daughter activity formula, giving <i>N</i><sub>2</sub> → <i>R</i><sub>1</sub>/<i>λ</i><sub>2</sub>, so <i>R</i><sub>2</sub> = <i>λ</i><sub>2</sub><i>N</i><sub>2</sub> → <i>R</i><sub>1</sub>.',
          },
          {
            q: '[NEET] In the U-238 decay chain, once secular equilibrium has been established, the uranium activity is 10<sup>6</sup> Bq. What is the activity of each radioactive daughter member of the chain?',
            a: 'In secular equilibrium every radioactive member of the chain has the same activity as the long-lived parent, so each daughter has an activity of 10<sup>6</sup> Bq (apart from small corrections where the chain branches; the stable end product, Pb-206, is not radioactive). This is why radium is found in equilibrium with uranium in ores.',
          },
          {
            q: '[JEE Main] The half-life of a parent is 30 min and that of its daughter is 60 min. Initially only parent is present. After how much time will the daughter activity become maximum?',
            a: '<i>t</i><sub>max</sub> = ln(60/30)/[(ln 2/30) − (ln 2/60)] = ln 2/(ln 2/60) = 60 min. (Here the parent is the shorter-lived species, so no transient or secular equilibrium is established: the daughter activity peaks at the finite time <i>t</i><sub>max</sub> = 60 min and afterwards decays with the daughter’s own half-life.)',
          },
          {
            q: '[JEE Advanced] In the decay chain <i>A</i> → <i>B</i> → <i>C</i> (stable), <i>T</i><sub>1/2,A</sub> = 10 min, <i>T</i><sub>1/2,B</sub> = 20 min. If <i>N</i><sub>A</sub>(0) = 1000, find the number of <i>B</i> nuclei at <i>t</i> = 30 min.',
            a: 'Using the sequential decay formula for <i>N</i><sub>B</sub>:<br><i>N</i><sub>B</sub>(30) = [<i>λ</i><sub>A</sub><i>N</i><sub>A0</sub>/(<i>λ</i><sub>B</sub> − <i>λ</i><sub>A</sub>)](<i>e</i><sup>−<i>λ</i><sub>A</sub>·30</sup> − <i>e</i><sup>−<i>λ</i><sub>B</sub>·30</sup>).<br><i>λ</i><sub>A</sub> = 0.0693 min<sup>−1</sup>, <i>λ</i><sub>B</sub> = 0.03465 min<sup>−1</sup>. <i>e</i><sup>−<i>λ</i><sub>A</sub>·30</sup> = (1/2)<sup>3</sup> = 1/8. <i>e</i><sup>−<i>λ</i><sub>B</sub>·30</sup> = (1/2)<sup>1.5</sup> = 1/(2√2). Since <i>λ</i><sub>B</sub> < <i>λ</i><sub>A</sub> (the daughter decays more slowly than the parent), the denominator <i>λ</i><sub>B</sub> − <i>λ</i><sub>A</sub> = 0.03465 − 0.0693 = −0.0347 min<sup>−1</sup> is negative:<br><i>N</i><sub>B</sub>(30) = [(0.0693)(1000)/(−0.03465)](1/8 − 1/(2√2)) = (−2000)(0.125 − 0.3536) = (−2000)(−0.2286) ≈ 457.<br><i>N</i><sub>B</sub> ≈ 457 nuclei — positive, as it must be: the negative denominator and the negative bracket (since <i>e</i><sup>−<i>λ</i><sub>A</sub><i>t</i></sup> < <i>e</i><sup>−<i>λ</i><sub>B</sub><i>t</i></sup>, the faster-decaying parent’s exponential falls below the slower-decaying daughter’s) cancel correctly.',
          },
          {
            q: '[JEE Advanced] A nuclide <i>X</i> decays to <i>Y</i> (<i>T</i><sub>1/2</sub> = 5 min), which decays to stable <i>Z</i>. If only <i>X</i> is present initially and the half-life of <i>X</i> is much longer than that of <i>Y</i>, show that after long time the ratio <i>N</i><sub>Y</sub>/<i>N</i><sub>X</sub> = <i>T</i><sub>1/2,Y</sub>/<i>T</i><sub>1/2,X</sub>.',
            a: 'For <i>λ</i><sub>X</sub> ≪ <i>λ</i><sub>Y</sub> (parent much longer-lived than the daughter), secular equilibrium gives <i>λ</i><sub>X</sub><i>N</i><sub>X</sub> = <i>λ</i><sub>Y</sub><i>N</i><sub>Y</sub>, so <i>N</i><sub>Y</sub>/<i>N</i><sub>X</sub> = <i>λ</i><sub>X</sub>/<i>λ</i><sub>Y</sub> = <i>T</i><sub>1/2,Y</sub>/<i>T</i><sub>1/2,X</sub>. The numbers of nuclei are in the ratio of the half-lives: the shorter-lived member is present in proportionally smaller numbers.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 852–854 ─────────────────────────
  {
    n: 'B',
    title: 'The Geiger–Nuttall Law for Alpha Decay',
    extra: true,
    kalam: 'The law follows from quantum-mechanical tunnelling through the Coulomb barrier.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 gives the alpha-decay displacement law (<sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i> → <sup><i>A</i>−4</sup><sub><i>Z</i>−2</sub><i>Y</i> + <sup>4</sup><sub>2</sub>He). The alpha particles from a given emitter come out with a characteristic energy. JEE Advanced asks for the systematics of those energies: why does polonium-212 (<i>α</i>-energy 8.78 MeV) have a half-life of 0.3 μs, while uranium-238 (<i>α</i>-energy 4.20 MeV) lives 4.5 × 10<sup>9</sup> years? The Geiger–Nuttall law connects these numbers through an exponential relation between decay constant and Q-value that students must recognise and apply.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The Geiger–Nuttall law (empirical form).</b><br>ln <i>λ</i> = <i>a</i> − <i>b</i>/√<i>Q</i><sub>α</sub>,<br>or equivalently:<br>log<sub>10</sub> <i>T</i><sub>1/2</sub> = <i>a</i>′/√<i>Q</i><sub>α</sub> + <i>b</i>′,<br>where <i>Q</i><sub>α</sub> is the alpha decay Q-value (MeV), <i>T</i><sub>1/2</sub> is the half-life, and <i>a</i>, <i>b</i> (or <i>a</i>′, <i>b</i>′) are constants for a given isotopic series. The law follows from quantum-mechanical tunnelling through the Coulomb barrier.',
      },
      {
        t: 'p',
        html: '<b>Alpha decay Q-value.</b> For <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i> → <sup><i>A</i>−4</sup><sub><i>Z</i>−2</sub><i>Y</i> + <sup>4</sup><sub>2</sub>He:<br><i>Q</i><sub>α</sub> = [<i>M</i><sub>X</sub> − <i>M</i><sub>Y</sub> − <i>M</i><sub>He</sub>]<i>c</i><sup>2</sup>.<br>Using atomic masses (the electron masses cancel, neglecting the tiny differences in atomic binding energies):<br><i>Q</i><sub>α</sub> = [<i>m</i>(<sup><i>A</i></sup><sub><i>Z</i></sub>X) − <i>m</i>(<sup><i>A</i>−4</sup><sub><i>Z</i>−2</sub>Y) − <i>m</i>(<sup>4</sup><sub>2</sub>He)] × 931.5 MeV.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>Q</i><sub>α</sub> in MeV; √<i>Q</i><sub>α</sub> in MeV<sup>1/2</sup>. The constant <i>b</i> therefore has units of MeV<sup>1/2</sup> so that <i>b</i>/√<i>Q</i><sub>α</sub> is dimensionless, and <i>a</i> is dimensionless when <i>λ</i> is expressed in s<sup>−1</sup> inside the logarithm.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Alpha Decay Q-Value and Energy',
        q: 'Calculate the Q-value for the alpha decay of <sup>226</sup>Ra → <sup>222</sup>Rn + <sup>4</sup><sub>2</sub>He. Given: <i>m</i>(<sup>226</sup>Ra) = 226.02541 u, <i>m</i>(<sup>222</sup>Rn) = 222.01758 u, <i>m</i>(<sup>4</sup>He) = 4.002603 u.',
        steps: [
          '<b>Step 1 — Mass difference.</b><br>Δ<i>m</i> = 226.02541 − 222.01758 − 4.002603 = 0.005227 u.',
          '<b>Step 2 — Q-value.</b><br><i>Q</i><sub>α</sub> = 0.005227 × 931.5 = 4.87 MeV.',
          '<b>Step 3 — Share of <i>Q</i><sub>α</sub> between the two products.</b> The parent nucleus is at rest, so the total momentum is zero and momentum conservation gives <i>p</i><sub>α</sub> = <i>p</i><sub>Rn</sub> (equal and opposite). Since <i>K</i> = <i>p</i><sup>2</sup>/(2<i>M</i>), the kinetic energies are in inverse ratio of the masses:<br><i>K</i><sub>Rn</sub>/<i>K</i><sub>α</sub> = <i>M</i><sub>α</sub>/<i>M</i><sub>Rn</sub> ≈ 4/222.<br>The total kinetic energy equals the Q-value, <i>K</i><sub>α</sub> + <i>K</i><sub>Rn</sub> = <i>Q</i><sub>α</sub>, so<br><i>K</i><sub>α</sub> = <i>Q</i><sub>α</sub>/(1 + 4/222) = <i>Q</i><sub>α</sub> × 222/226 = 4.87 × 222/226 ≈ 4.78 MeV,<br><i>K</i><sub>Rn</sub> = <i>Q</i><sub>α</sub> − <i>K</i><sub>α</sub>.',
        ],
        ans: '<i>Q</i><sub>α</sub> ≈ 4.87 MeV; <i>K</i><sub>α</sub> ≈ 4.78 MeV (about 98% of <i>Q</i><sub>α</sub>), <i>K</i><sub>Rn</sub> ≈ 0.09 MeV.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Applying the Geiger–Nuttall Law',
        q: 'Two isotopes of polonium, <sup>212</sup>Po (<i>T</i><sub>1/2</sub> = 0.3 μs, α-energy <i>K</i><sub>α</sub> = 8.78 MeV) and <sup>214</sup>Po (<i>T</i><sub>1/2</sub> = 164 μs, <i>K</i><sub>α</sub> = 7.69 MeV), are isotopes of the same element. (These are the α-particle kinetic energies; <i>Q</i><sub>α</sub> is about 2% larger because the daughter recoils, which does not change the straight-line fit.) Using the Geiger–Nuttall form with the α-energy, ln <i>λ</i> = <i>a</i> − <i>b</i>/√<i>K</i><sub>α</sub>, determine the constants <i>a</i> and <i>b</i> from these two isotopes, and compare the two decay rates.',
        steps: [
          '<b>Step 1 — Convert half-lives to decay constants.</b><br><i>λ</i>(<sup>212</sup>Po) = 0.693/(0.3 × 10<sup>−6</sup>) = 2.31 × 10<sup>6</sup> s<sup>−1</sup>.<br><i>λ</i>(<sup>214</sup>Po) = 0.693/(164 × 10<sup>−6</sup>) = 4.23 × 10<sup>3</sup> s<sup>−1</sup>.',
          '<b>Step 2 — Write the two equations.</b> Use four significant figures for 1/√<i>K</i><sub>α</sub>, because the two values are close and their difference is what determines <i>b</i>.<br>ln(2.31 × 10<sup>6</sup>) = <i>a</i> − <i>b</i>/√8.78 = <i>a</i> − 0.3375 <i>b</i>.<br>ln(4.23 × 10<sup>3</sup>) = <i>a</i> − <i>b</i>/√7.69 = <i>a</i> − 0.3606 <i>b</i>.',
          '<b>Step 3 — Subtract to find <i>b</i>.</b> The logarithms are 14.653 and 8.350:<br>14.653 − 8.350 = (−0.3375 <i>b</i>) − (−0.3606 <i>b</i>) = 0.0231 <i>b</i>.<br><i>b</i> = 6.303/0.0231 ≈ 273 MeV<sup>1/2</sup>.',
          '<b>Step 4 — Find <i>a</i> from either equation.</b><br><i>a</i> = 14.653 + 0.3375 × 273 = 14.653 + 92.1 ≈ 107.',
          '<b>Step 5 — Ratio of decay rates.</b><br><i>λ</i>(<sup>212</sup>Po)/<i>λ</i>(<sup>214</sup>Po) = (2.31 × 10<sup>6</sup>)/(4.23 × 10<sup>3</sup>)',
        ],
        ans: '<i>a</i> ≈ 107 and <i>b</i> ≈ 273 MeV<sup>1/2</sup>. The physical interpretation: the large positive <i>b</i> means that a modest increase in the α-energy (greater penetration of the Coulomb barrier) increases <i>λ</i> dramatically — which is why polonium-212 with 8.78 MeV decays about 5.5 × 10<sup>2</sup> times faster than polonium-214 with 7.69 MeV.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the Q-value of the alpha decay of <sup>238</sup>U → <sup>234</sup>Th + <sup>4</sup><sub>2</sub>He. Given <i>m</i>(<sup>238</sup>U) = 238.0508 u, <i>m</i>(<sup>234</sup>Th) = 234.0436 u, <i>m</i>(<sup>4</sup>He) = 4.002603 u.',
            a: 'Δ<i>m</i> = 238.0508 − 234.0436 − 4.002603 = 0.004597 u. <i>Q</i><sub>α</sub> = 0.004597 × 931.5 = 4.28 MeV.',
          },
          {
            q: '[JEE Main] The Q-value for the alpha decay of <sup>212</sup>Po is 8.95 MeV. If the daughter recoil energy is 0.17 MeV, what is the kinetic energy of the alpha particle?',
            a: 'The total kinetic energy shared by the products equals <i>Q</i><sub>α</sub>, so <i>K</i><sub>α</sub> + <i>K</i><sub>Pb</sub> = <i>Q</i><sub>α</sub> (the daughter of <sup>212</sup>Po is <sup>208</sup>Pb). Hence <i>K</i><sub>α</sub> = <i>Q</i><sub>α</sub> − <i>K</i><sub>Pb</sub> = 8.95 − 0.17 = 8.78 MeV. (Check: momentum conservation gives <i>K</i><sub>Pb</sub>/<i>K</i><sub>α</sub> = 4/208, so <i>K</i><sub>α</sub> = <i>Q</i><sub>α</sub> × 208/212 = 8.78 MeV and <i>K</i><sub>Pb</sub> = <i>Q</i><sub>α</sub> × 4/212 = 0.17 MeV, consistent with the quoted 0.17 MeV.)',
          },
          {
            q: '[JEE Advanced] Show that the recoil velocity of the daughter nucleus in alpha decay is approximately <i>v</i><sub>daughter</sub> ≈ (2√2/<i>A</i>)√(<i>Q</i><sub>α</sub>/<i>m</i><sub>u</sub>) = (2√2<i>c</i>/<i>A</i>)√(<i>Q</i><sub>α</sub>/(<i>m</i><sub>u</sub><i>c</i><sup>2</sup>)), where <i>A</i> is the mass number of the daughter and <i>m</i><sub>u</sub> is the atomic mass unit.',
            a: 'From <i>p</i><sub>α</sub> = <i>p</i><sub>daughter</sub>: √(2<i>M</i><sub>α</sub><i>K</i><sub>α</sub>) = √(2<i>M</i><sub>d</sub><i>K</i><sub>d</sub>). With <i>K</i><sub>α</sub> + <i>K</i><sub>d</sub> = <i>Q</i><sub>α</sub> and <i>K</i><sub>d</sub>/<i>K</i><sub>α</sub> = <i>M</i><sub>α</sub>/<i>M</i><sub>d</sub> ≈ 4/<i>A</i>: <i>K</i><sub>d</sub> = [4/(<i>A</i> + 4)]<i>Q</i><sub>α</sub>. Then, with <i>M</i><sub>d</sub> ≈ <i>Am</i><sub>u</sub>,<br><i>v</i><sub>d</sub> = √(2<i>K</i><sub>d</sub>/<i>M</i><sub>d</sub>) = √(8<i>Q</i><sub>α</sub>/[(<i>A</i> + 4)<i>Am</i><sub>u</sub>]) ≈ (2√2/<i>A</i>)√(<i>Q</i><sub>α</sub>/<i>m</i><sub>u</sub>)   (<i>A</i> ≫ 4),<br>which is the stated form.',
          },
          {
            q: '[JEE Advanced] Using the Geiger–Nuttall law and the data for <sup>212</sup>Po and <sup>214</sup>Po from worked example 2, predict the half-life of <sup>210</sup>Po (α-energy <i>K</i><sub>α</sub> = 5.30 MeV). Comment on the reliability of this estimate.',
            a: 'Using ln <i>λ</i> = 106.8 − 273/√5.30 = 106.8 − 118.6 ≈ −11.8, giving <i>λ</i> ≈ 7.6 × 10<sup>−6</sup> s<sup>−1</sup> and <i>T</i><sub>1/2</sub> = 0.693/<i>λ</i> ≈ 9 × 10<sup>4</sup> s, about one day. The actual <i>T</i><sub>1/2</sub> of <sup>210</sup>Po is 138 days, so the estimate is off by a factor of more than a hundred. The Geiger–Nuttall law is unreliable when extrapolated from two data points to a different isotope, because <i>a</i> and <i>b</i> are only approximately constant across an isotopic chain and the exponential form magnifies any error in <i>b</i>.',
          },
        ],
      },
    ],
  },
];
