import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Topic 02: pp. 825–832 of the Class 12 Physics Master Reference,
 * word for word: the book's sub-topic 2, "Nuclear Binding Energy, the
 * Binding-Energy Curve, and the Nuclear Force", split at its Sections 1 to 8.
 * Figure 13.3 (caption p. 826, drawn p. 827) and Figure 13.4 (caption p. 828,
 * drawn p. 829) are never referred to in the text; each is set beside the text
 * it illustrates (13.3 after the Concept-intuition paragraphs on the curve and
 * on fusion/fission, 13.4 after the properties of the nuclear force), redrawn
 * in lib/diagrams/physics-12-13.ts. The book's cross-references are rewritten
 * to the app's numbering ("the previous unit" → "Topic 01", "the
 * nuclear-energy unit" → "Topic 04", "the next unit" → "Topic 03").
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 825–832 ─────────────────────────
  {
    n: '02',
    title: 'Nuclear Binding Energy, the Binding-Energy Curve, and the Nuclear Force',
    kalam: 'Iron-region nuclei are the most tightly bound and most stable.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual heart of the chapter. CBSE Boards ask the definition of binding energy, a sketch and interpretation of the BE-per-nucleon curve, and the properties of the nuclear force (2–3 marks). NEET sets quick “which nucleus is most stable” and “fission vs fusion releases energy” questions. JEE Main asks mass-defect-to-energy numericals; JEE Advanced demands energy-release calculations from BE/A values and subtle stability reasoning.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we met a strange fact: an assembled nucleus weighs less than the loose protons and neutrons that make it up. That missing mass, the <b>mass defect</b> Δ<i>m</i>, did not vanish — by <i>E</i> = <i>mc</i><sup>2</sup> it was released as energy when the nucleons snapped together. Run the film backwards and the same number appears as the energy you would have to supply to tear the nucleus completely apart into free nucleons. That energy is the <b>binding energy</b> <i>E</i><sub>b</sub> of the nucleus. A nucleus with a large binding energy is like a well that is hard to climb out of: deeply, securely held together.',
      },
      {
        t: 'p',
        html: 'But total binding energy alone can mislead. A uranium nucleus has a far larger total binding energy than a helium nucleus simply because it has many more nucleons to bind. To compare stability fairly, we divide by the number of nucleons and ask: how much glue does each nucleon get? This is the <b>binding energy per nucleon</b>, <i>E</i><sub>b</sub>/<i>A</i>, and it is the single most important quantity in nuclear physics.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine comparing two cricket teams not by their total runs but by their batting average — runs per player. A team of 11 scoring 880 (average 80) is performing better, player-for-player, than a team of 20 scoring 990 (average 49.5). Binding energy per nucleon is exactly this “stability average”: it tells you how tightly the typical nucleon is held, independent of how big the nucleus is.',
      },
      {
        t: 'p',
        html: 'When we plot <i>E</i><sub>b</sub>/<i>A</i> against mass number <i>A</i> for all known nuclei, a beautifully revealing curve emerges. Starting from light nuclei it climbs steeply, reaching a broad <b>peak of about 8.8 MeV per nucleon near</b> <i>A</i> ≈ 56 (the iron–nickel region), and then declines gently for heavier nuclei, dropping to about 7.6 MeV per nucleon by the time we reach uranium. The message of this curve is profound: <b>iron-region nuclei are the most tightly bound and most stable</b>, and every other nucleus would “prefer” to move toward that peak.',
      },
      {
        t: 'p',
        html: 'This one curve explains how we extract nuclear energy. <b>Light nuclei</b> can climb toward the peak by joining together — <b>fusion</b>. <b>Heavy nuclei</b> can climb toward the peak by splitting apart — <b>fission</b>. In both cases the products are more tightly bound (higher <i>E</i><sub>b</sub>/<i>A</i>) than the starting material, so the surplus binding energy is released. Hold on to this idea; it is the seed of the entire nuclear-energy topic (Topic 04).',
      },
      { t: 'fig', id: 'p12-13-fig-13.3' },
      {
        t: 'p',
        html: 'What actually supplies this enormous binding? Not gravity (far too weak) and not the electric force (which only pushes the protons apart). A distinct, powerful interaction — the <b>strong nuclear force</b> — overpowers the electrostatic repulsion and clamps the nucleons together.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The BE/A curve is a smooth average trend; real nuclei show small bumps. Nuclei with “magic numbers” of protons or neutrons (2, 8, 20, 28, 50, 82, 126) are unusually stable — for example <sup>4</sup><sub>2</sub>He sits noticeably above its neighbours. Also, when computing binding energy from atomic masses, the electron masses cancel automatically — but this cancellation must be handled carefully in processes like <i>β</i> decay where electron count changes.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Mass defect',
        main: 'Δ<i>m</i> = [<i>Z m</i><sub>p</sub> + (<i>A</i> − <i>Z</i>) <i>m</i><sub>n</sub>] − <i>M</i><sub>nucleus</sub><br>Using neutral-atom masses (electron masses cancel):<br>Δ<i>m</i> = [<i>Z m</i><sub>H</sub> + (<i>A</i> − <i>Z</i>) <i>m</i><sub>n</sub>] − <i>M</i><sub>atom</sub>',
        legend: [
          'Δ<i>m</i> = mass defect',
          '<i>Z</i> = atomic number (number of protons)',
          '<i>A</i> = mass number (number of nucleons)',
          '<i>m</i><sub>p</sub> = mass of proton',
          '<i>m</i><sub>n</sub> = mass of neutron',
          '<i>m</i><sub>H</sub> = mass of hydrogen atom',
          '<i>M</i><sub>nucleus</sub> = measured mass of the nucleus',
          '<i>M</i><sub>atom</sub> = measured mass of the neutral atom',
        ],
        note: 'Unit: u. Dimensional formula: [M<sup>1</sup> L<sup>0</sup> T<sup>0</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Binding energy',
        main: '<i>E</i><sub>b</sub> = Δ<i>m c</i><sup>2</sup> = Δ<i>m</i> (in u) × 931.5 MeV',
        legend: ['<i>E</i><sub>b</sub> = binding energy of the nucleus', 'Δ<i>m</i> = mass defect', '<i>c</i> = speed of light in vacuum'],
        note: 'SI unit: joule; practical unit MeV. Dimensional formula: [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Binding energy per nucleon',
        main: '<i>E</i><sub>b</sub>/<i>A</i> = (Δ<i>m c</i><sup>2</sup>)/<i>A</i>',
        legend: ['<i>E</i><sub>b</sub>/<i>A</i> = binding energy per nucleon', '<i>A</i> = mass number (number of nucleons)'],
        note: 'Higher <i>E</i><sub>b</sub>/<i>A</i> ⇒ more stable nucleus. Peak ≈ 8.8 MeV near <i>A</i> ≈ 56.',
      },
      {
        t: 'p',
        html: '<b>Useful atomic masses:</b> <i>m</i><sub>H</sub> = 1.007825 u, <i>m</i><sub>n</sub> = 1.008665 u, <i>m</i>(<sup>4</sup>He) = 4.002603 u, <i>m</i>(<sup>2</sup>H) = 2.014102 u, <i>m</i>(<sup>16</sup>O) = 15.994915 u.',
      },
      {
        t: 'p',
        html: '<b>Properties of the nuclear (strong) force</b> — the qualitative “formulas” of this topic:<br>1. <b>Strongest</b> of the basic forces in its domain — about 100 times the electrostatic force at nuclear separations.<br>2. <b>Short-range</b> — effective only within ∼ 2–3 fm; essentially zero beyond.<br>3. <b>Charge-independent</b> — the nuclear attraction between <i>n</i>–<i>n</i>, <i>n</i>–<i>p</i>, and <i>p</i>–<i>p</i> pairs is the same (it does not care about electric charge).<br>4. <b>Saturated</b> — each nucleon attracts only its nearest neighbours, which is why total binding energy grows roughly in proportion to <i>A</i> (and why nuclear density is constant).<br>5. <b>Repulsive at very short range</b> — below about 0.8 fm the force turns strongly repulsive, preventing the nucleus from collapsing and fixing the inter-nucleon spacing.<br>6. <b>Spin-dependent and non-central</b> — its strength depends on the relative orientation of the nucleon spins and on their direction relative to the line joining the nucleons.',
      },
      { t: 'fig', id: 'p12-13-fig-13.4' },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: '3.1 Procedure: computing binding energy and Eb/A',
        steps: [
          '<b>Count constituents:</b> <i>Z</i> protons and (<i>A</i> − <i>Z</i>) neutrons.',
          '<b>Add their separate masses:</b> <i>Z m</i><sub>H</sub> + (<i>A</i> − <i>Z</i>) <i>m</i><sub>n</sub> (atomic-mass route).',
          '<b>Subtract the actual atomic mass</b> to get the mass defect Δ<i>m</i>.',
          '<b>Convert to energy:</b> multiply Δ<i>m</i> (in u) by 931.5 MeV to get <i>E</i><sub>b</sub>.',
          '<b>Divide by</b> <i>A</i> for the binding energy per nucleon. The reasoning: steps 1–3 isolate the “missing mass,” and step 4 cashes it in for energy through <i>E</i> = <i>mc</i><sup>2</sup> pre-evaluated for atomic mass units.',
        ],
      },
      { t: 'p', html: '<b>3.2 Reading the BE/A curve — why it has this shape</b>' },
      {
        t: 'p',
        html: '• <b>Steep rise (light nuclei):</b> in a tiny nucleus most nucleons sit on the surface with few neighbours to bond to. Add nucleons and each new one finds more partners, so <i>E</i><sub>b</sub>/<i>A</i> climbs quickly. (This is the volume/surface competition: surface nucleons are “under-bonded.”)<br>• <b>Broad peak (<i>A</i> ≈ 56):</b> the short-range force is saturated — a nucleon only feels its nearest neighbours — so once most nucleons are inside the nucleus, adding more no longer increases the binding per nucleon. Here the surface loss has become small while the Coulomb loss is still modest, so stability is maximised.<br>• <b>Gentle fall (heavy nuclei):</b> every proton repels every other proton through the long-range Coulomb force, so the disruptive electrostatic energy grows like <i>Z</i><sup>2</sup> — faster than the attractive nuclear binding can keep up. The typical nucleon becomes slightly less tightly held, so <i>E</i><sub>b</sub>/<i>A</i> slowly decreases.',
      },
      { t: 'p', html: '<b>3.3 Nuclear stability and the neutron–proton balance</b>' },
      {
        t: 'p',
        html: 'Light stable nuclei have roughly equal numbers of protons and neutrons (<i>N</i> ≈ <i>Z</i>). As nuclei grow heavier, the Coulomb repulsion between protons demands extra neutrons to add binding without adding charge, so the stable ratio drifts to <i>N</i>/<i>Z</i> ≈ 1.5 for the heaviest stable nuclei. Step too far from this stability band and the nucleus becomes radioactive — the bridge to Topic 03.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the binding energy and binding energy per nucleon of a helium nucleus <sup>4</sup><sub>2</sub>He. Given <i>m</i><sub>H</sub> = 1.007825 u, <i>m</i><sub>n</sub> = 1.008665 u, <i>m</i>(<sup>4</sup>He atom) = 4.002603 u.',
        steps: [
          '<b>Constituents:</b> <i>Z</i> = 2 protons, <i>A</i> − <i>Z</i> = 2 neutrons.',
          '<b>Mass of separate constituents:</b> 2(1.007825) + 2(1.008665) = 2.015650 + 2.017330 = 4.032980 u.',
          '<b>Mass defect:</b> Δ<i>m</i> = 4.032980 − 4.002603 = 0.030377 u.',
          '<b>Binding energy:</b> <i>E</i><sub>b</sub> = 0.030377 × 931.5 = 28.30 MeV.',
          '<b>Per nucleon:</b> <i>E</i><sub>b</sub>/<i>A</i> = 28.30/4',
        ],
        ans: '<i>E</i><sub>b</sub> ≈ 28.3 MeV, <i>E</i><sub>b</sub>/<i>A</i> ≈ 7.07 MeV — already very tightly bound, which is why the <i>α</i> particle is ejected as a whole unit in <i>α</i> decay.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Four nuclei have binding energies per nucleon: P = 7.1 MeV, Q = 8.8 MeV, R = 8.0 MeV, S = 7.6 MeV. Which is the most stable, and in a reaction would energy be released going from S to Q?',
        steps: [
          '<b>The trap:</b> students compare total binding energies, or assume “heavier = more stable.” Stability is read off <i>E</i><sub>b</sub>/<i>A</i> alone.',
          '<b>Most stable:</b> the largest <i>E</i><sub>b</sub>/<i>A</i> is <b>Q at 8.8 MeV</b> — the nearer a nucleus sits to the curve’s peak, the more stable it is.',
          '<b>S → Q:</b> since <i>E</i><sub>b</sub>/<i>A</i> increases (7.6 → 8.8), the products are more tightly bound, so <b>energy is released</b>. ✓',
          '<b>Speed rule:</b> more binding energy per nucleon = more stable; any move that raises <i>E</i><sub>b</sub>/<i>A</i> liberates energy.',
        ],
        ans: 'Q is most stable; S → Q releases energy.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Compute the binding energy per nucleon of <sup>16</sup><sub>8</sub>O and compare it with the deuteron <sup>2</sup><sub>1</sub>H (<i>m</i>(<sup>2</sup>H) = 2.014102 u). Given <i>m</i>(<sup>16</sup>O) = 15.994915 u, <i>m</i><sub>H</sub> = 1.007825 u, <i>m</i><sub>n</sub> = 1.008665 u. (Links mass-defect calculation with the stability trend.)',
        steps: [
          '<b>Oxygen-16:</b> constituents = 8(1.007825) + 8(1.008665) = 8.062600 + 8.069320 = 16.131920 u. Δ<i>m</i> = 16.131920 − 15.994915 = 0.137005 u, so <i>E</i><sub>b</sub> = 0.137005 × 931.5 = 127.6 MeV, giving <i>E</i><sub>b</sub>/<i>A</i> = 127.6/16 = 7.98 MeV.',
          '<b>Deuteron:</b> Δ<i>m</i> = (1.007825 + 1.008665) − 2.014102 = 0.002388 u, so <i>E</i><sub>b</sub> = 2.224 MeV and <i>E</i><sub>b</sub>/<i>A</i> = 1.11 MeV.',
        ],
        ans: '<sup>16</sup>O has <i>E</i><sub>b</sub>/<i>A</i> ≈ 8.0 MeV versus only 1.11 MeV for the deuteron. Oxygen sits near the stable plateau while the deuteron is one of the most loosely bound nuclei — a vivid illustration of the curve’s steep rise.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A heavy nucleus of mass number <i>A</i> = 240 with binding energy per nucleon 7.6 MeV splits into two fragments each of mass number 120 with binding energy per nucleon 8.5 MeV. Calculate the energy released in this fission.',
        steps: [
          '<b>Reason via total binding energies.</b> Energy released equals the increase in total binding energy (more tightly bound products = released surplus):<br><i>E</i><sub>released</sub> = (BE of products) − (BE of parent).',
          '<b>Parent BE:</b> 240 × 7.6 = 1824 MeV. <b>Products BE:</b> 2 × (120 × 8.5) = 2 × 1020 = 2040 MeV.<br><i>E</i><sub>released</sub> = 2040 − 1824',
        ],
        ans: 'About 216 MeV per fission — strikingly close to the ∼ 200 MeV released in real uranium fission. The energy comes entirely from the climb up the BE/A curve from 7.6 to 8.5 MeV per nucleon.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define binding energy and binding energy per nucleon. Why is binding energy per nucleon a better measure of nuclear stability than total binding energy?',
            a: 'Binding energy <i>E</i><sub>b</sub> is the energy that must be supplied to pull a nucleus completely apart into free protons and neutrons; it equals the mass defect times <i>c</i><sup>2</sup>: <i>E</i><sub>b</sub> = Δ<i>m c</i><sup>2</sup> = Δ<i>m</i> (in u) × 931.5 MeV. Binding energy per nucleon is <i>E</i><sub>b</sub>/<i>A</i>, the total divided by the number of nucleons. The total grows with <i>A</i> simply because a big nucleus has more nucleons to bind (uranium’s is far larger than helium’s), so it cannot compare nuclei fairly; <i>E</i><sub>b</sub>/<i>A</i> says how tightly the typical nucleon is held, whatever the size of the nucleus. The higher it is, the more stable the nucleus (peak ≈ 8.8 MeV near <i>A</i> ≈ 56).',
          },
          {
            q: '[NEET] The mass defect of a nucleus is 0.21 u. What is its binding energy in MeV?',
            a: '<i>E</i><sub>b</sub> = 0.21 × 931.5 ≈ 195.6 MeV',
          },
          {
            q: '[JEE Main] Calculate the binding energy per nucleon of <sup>7</sup><sub>3</sub>Li. Given <i>m</i>(<sup>7</sup>Li) = 7.016004 u, <i>m</i><sub>H</sub> = 1.007825 u, <i>m</i><sub>n</sub> = 1.008665 u.',
            a: 'Δ<i>m</i> = 0.042131 u ⇒ <i>E</i><sub>b</sub> = 39.25 MeV ⇒ <i>E</i><sub>b</sub>/<i>A</i> ≈ 5.61 MeV',
          },
          {
            q: '[JEE Main] State any four properties of the nuclear force and explain how “saturation” leads to binding energy being roughly proportional to mass number.',
            a: 'Any four of: (1) the strongest of the basic forces in its domain, about 100 times the electrostatic force at nuclear separations; (2) short-range, effective only within ∼ 2–3 fm; (3) charge-independent: the <i>n</i>–<i>n</i>, <i>n</i>–<i>p</i> and <i>p</i>–<i>p</i> attractions are the same; (4) saturated: each nucleon attracts only its nearest neighbours; (5) strongly repulsive below about 0.8 fm; (6) spin-dependent and non-central. Saturation: because a nucleon is bound only to the few neighbours around it, not to every other nucleon, each added nucleon contributes about the same binding energy whatever the size of the nucleus. So <i>E</i><sub>b</sub> ≈ (constant) × <i>A</i>: binding energy is roughly proportional to <i>A</i>, and <i>E</i><sub>b</sub>/<i>A</i> is nearly constant (about 8 MeV) for most nuclei. If every nucleon attracted every other, <i>E</i><sub>b</sub> would grow as <i>A</i>(<i>A</i> − 1)/2, that is, as <i>A</i><sup>2</sup>.',
          },
          {
            q: '[JEE Advanced] Two deuterons (<i>E</i><sub>b</sub>/<i>A</i> = 1.11 MeV) fuse to form a helium-4 nucleus (<i>E</i><sub>b</sub>/<i>A</i> = 7.07 MeV). Using binding-energy values only, estimate the energy released.',
            a: 'BE(products) − BE(reactants) = (4 × 7.07) − (4 × 1.11) = 28.28 − 4.44 ≈ 23.8 MeV',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The binding energy per nucleon is maximum for nuclei near mass number:',
        opts: [
          {
            label: '4',
            nudge: 'Distractor <b>(a)</b> is helium — tightly bound for a light nucleus, but well below the peak.',
          },
          { label: '56', nudge: null },
          {
            label: '138',
            nudge: 'Distractors <b>(c)</b> and <b>(d)</b> lie on the declining heavy side, where Coulomb repulsion has lowered <i>E</i><sub>b</sub>/<i>A</i>.',
          },
          {
            label: '238',
            nudge: 'Distractors <b>(c)</b> and <b>(d)</b> lie on the declining heavy side, where Coulomb repulsion has lowered <i>E</i><sub>b</sub>/<i>A</i>.',
          },
        ],
        correct: 1,
        solution: 'The BE/A curve peaks (≈ 8.8 MeV) in the iron region, <i>A</i> ≈ 56.',
      },
      {
        t: 'mcq',
        q: 'Energy is released in nuclear fission of a heavy nucleus because:',
        opts: [
          { label: 'the products have lower binding energy per nucleon', nudge: 'Distractor <b>(a)</b> reverses the logic.' },
          { label: 'the products have higher binding energy per nucleon', nudge: null },
          {
            label: 'mass is created',
            nudge: 'Distractor <b>(c)</b> violates mass-energy conservation — mass is converted, not created.',
          },
          {
            label: 'the Coulomb force does positive work only',
            nudge: 'Distractor <b>(d)</b> is a partial truth that ignores the binding-energy bookkeeping.',
          },
        ],
        correct: 1,
        solution: 'Fission products lie nearer the BE/A peak, so they are more tightly bound; the surplus binding energy is released.',
      },
      {
        t: 'mcq',
        q: 'Which property of the nuclear force explains the near-constant density of all nuclei?',
        opts: [
          {
            label: 'it is charge-independent',
            nudge: 'Distractor <b>(a)</b> is true but explains equal <i>n</i>–<i>p</i>/<i>p</i>–<i>p</i> attraction, not density.',
          },
          { label: 'it is long-range', nudge: 'Distractor <b>(b)</b> is false — the force is short-range.' },
          { label: 'it saturates / has a repulsive core', nudge: null },
          {
            label: 'it is purely attractive',
            nudge: 'Distractor <b>(d)</b> is false; a purely attractive force would collapse the nucleus.',
          },
        ],
        correct: 2,
        solution: 'Saturation plus the short-range repulsive core fix a constant spacing between nucleons, keeping density independent of <i>A</i>.',
      },
      {
        t: 'mcq',
        q: 'The binding energy of a deuteron is 2.22 MeV. The mass defect of the deuteron is approximately:',
        opts: [
          { label: '0.0024 u', nudge: null },
          { label: '0.0238 u', nudge: 'Distractor <b>(b)</b> divides by 93.15 (decimal slip).' },
          { label: '2.22 u', nudge: 'Distractor <b>(c)</b> confuses energy in MeV with mass in u.' },
          { label: '0.24 u', nudge: 'Distractor <b>(d)</b> is a power-of-ten error.' },
        ],
        correct: 0,
        solution: 'Δ<i>m</i> = <i>E</i><sub>b</sub>/931.5 = 2.22/931.5 ≈ 0.00238 u.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing <i>E</i><sub>b</sub> with <i>E</i><sub>b</sub>/<i>A</i>.</b> Total binding energy keeps rising with <i>A</i>; it is the per-nucleon value that peaks and measures stability. Always divide by <i>A</i> before comparing nuclei.',
          '<b>Wrong sign / direction of mass defect.</b> The constituents are always heavier than the bound nucleus, so Δ<i>m</i> > 0. If you get a negative mass defect, you have subtracted the wrong way.',
          '<b>Mixing nuclear and atomic masses.</b> Use atomic masses consistently (electron masses then cancel for binding energy). Do not subtract a nuclear mass from atomic-mass constituents.',
          '<b>Thinking heavy nuclei are “more stable” because <i>E</i><sub>b</sub> is huge.</b> Uranium’s large total binding energy is spread thin — its <i>E</i><sub>b</sub>/<i>A</i> is below iron’s, which is exactly why it can release energy by fissioning.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For energy-release questions, never recompute masses if binding energies are given. Just use <i>E</i><sub>released</sub> = (total BE of products) − (total BE of reactants) — a one-line subtraction that sidesteps all the mass arithmetic.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Mass defect',
            note: 'Δ<i>m</i> = [<i>Zm</i><sub>H</sub> + (<i>A</i> − <i>Z</i>)<i>m</i><sub>n</sub>] − <i>M</i><sub>atom</sub> > 0.',
          },
          {
            f: 'Binding energy',
            note: '<i>E</i><sub>b</sub> = Δ<i>m</i> × 931.5 MeV. <b>Per nucleon:</b> <i>E</i><sub>b</sub>/<i>A</i> — the stability measure.',
          },
          {
            f: 'BE/A curve',
            note: 'rises steeply, peaks ≈ 8.8 MeV at <i>A</i> ≈ 56 (iron), falls gently to ∼ 7.6 MeV at uranium.',
          },
          {
            f: 'Energy release',
            note: 'fusion (light nuclei) and fission (heavy nuclei) both climb toward the peak ⇒ energy out.',
          },
          {
            f: 'Nuclear force',
            note: 'strongest, short-range (∼ fm), charge-independent, saturating, with a repulsive core.',
          },
          { f: 'Energy released = BE(products) − BE(reactants).', note: '' },
        ],
        aids: ['“Per-nucleon is the king of stability; everyone climbs toward iron.”'],
      },
    ],
  },
];
