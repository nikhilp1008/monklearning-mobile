import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topic 08 and Additional Topics A and B, word for word from the
 * Class 11 Physics Master Reference: Entropy and the Quantified Second Law
 * (JEE Advanced Extension) (pp. 795 to 800, opening with its Scope note, split
 * at the book's Sections 1 to 8), then the Additional Topics' shared opening
 * (p. 801, set at the head of Addendum A), A General Polytropic Processes:
 * The Master Exponent x (pp. 801 to 805) and B Composite Cycles: Leg-by-Leg
 * Heat Accounting (pp. 805 to 809; its practice answers run onto the top of
 * p. 809). Figure 11.11 (caption p. 795, drawn on p. 796). The addenda print
 * no drawings.
 */
export const TOPICS: Topic[] = [
  {
    n: '08',
    title: 'Entropy and the Quantified Second Law (JEE Advanced Extension)',
    kalam: 'Entropy is a state function — it depends only on the state, not the path.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Scope note.</b> Entropy is not part of the CBSE Class 11 NCERT Thermodynamics chapter — it is formally introduced in physical chemistry and in higher physics. It is included here as a JEE-Advanced-level extension so this companion is genuinely complete. CBSE-Boards-only students may treat this topic as enrichment; JEE Advanced aspirants should master it, as it converts the qualitative “arrow of time” of Topic 06 into a calculable state function.',
      },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> JEE Advanced occasionally asks for the entropy change in a standard process (isothermal, phase change, heating at constant pressure), the sign of Δ<i>S</i><sub>universe</sub> for an irreversible process, or a conceptual question on the Clausius inequality. NEET and CBSE Boards do not test this directly. The single most valuable takeaways: Δ<i>S</i> = ∫ d<i>Q</i><sub>rev</sub>/<i>T</i> defines a state function, and Δ<i>S</i><sub>universe</sub> ≥ 0 for every real process.',
      },
      {
        t: 'p',
        html: 'Topic 06 gave us the second law in words: real processes have a preferred direction. But “direction” begged for a number — a single quantity that always increases as a system drifts toward its most probable state, the way a clock’s hands always advance. That quantity is <b>entropy</b>, <i>S</i>. It is the bookkeeping device that turns the qualitative arrow of time into an inequality you can compute: Δ<i>S</i><sub>universe</sub> ≥ 0.<br><br>The cleanest physical reading of entropy is “the amount of disorder,” or more precisely the number of microscopic arrangements (microstates) consistent with the bulk state. Heat <i>Q</i> flowing into a system at temperature <i>T</i> raises its disorder by <i>Q</i>/<i>T</i> — and the colder the system, the bigger the disordering effect of the same heat (a whisper in a silent library is disruptive; the same whisper at a loud party is nothing). That single ratio, d<i>Q</i>/<i>T</i>, is the heartbeat of entropy.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Recall the shuffled-deck image from Topic 06. Entropy is the precise scorecard for “how shuffled.” A perfectly ordered deck has low entropy; a thoroughly mixed one has high entropy. Every real process shuffles the universe a little more, so the total never decreases. You can lower a system’s entropy (a freezer makes ordered ice from disordered water) — but only by dumping even more disorder into the surroundings (the freezer’s coils warm the kitchen), so the universe’s entropy still rises. That is the second law, now wearing a number.',
      },
      {
        t: 'p',
        html: '<b>Why “reversible heat” in the definition?</b> Entropy is a state function — it depends only on the state, not the path. But heat <i>Q</i> is a path function. The trick that rescues a state function out of a path quantity is to insist on the reversible path: d<i>S</i> = d<i>Q</i><sub>rev</sub>/<i>T</i>. Along any reversible route between two states the integral ∫ d<i>Q</i><sub>rev</sub>/<i>T</i> comes out the same, so it legitimately defines Δ<i>S</i>. To find Δ<i>S</i> for an irreversible process, you cleverly compute it along any reversible path with the same endpoints — because <i>S</i> is a state function, the answer is identical.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) d<i>S</i> = d<i>Q</i><sub>rev</sub>/<i>T</i> requires the reversible heat and the temperature at which it is exchanged (kelvin). (2) Δ<i>S</i> for the system can be positive, negative, or zero; it is Δ<i>S</i><sub>universe</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub> that obeys ≥ 0. (3) Equality (Δ<i>S</i><sub>universe</sub> = 0) holds only for a reversible process; every irreversible (real) process gives > 0.',
      },
      { t: 'fig', id: 'p11-11-fig-11.11' },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'Entropy (definition)',
        main: 'For a reversible exchange of heat d<i>Q</i><sub>rev</sub> at absolute temperature <i>T</i>:<br>d<i>S</i> = d<i>Q</i><sub>rev</sub>/<i>T</i>,<br>Δ<i>S</i> = ∫<sub><i>i</i></sub><sup><i>f</i></sup> d<i>Q</i><sub>rev</sub>/<i>T</i>.',
        legend: [],
        note: '<i>S</i> is a state function: ∮ d<i>S</i> = 0 over any cycle. SI unit: J K<sup>−1</sup>.',
      },
      {
        t: 'formula',
        kicker: 'The entropy form of the second law (entropy principle)',
        main: 'Δ<i>S</i><sub>universe</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub> ≥ 0',
        legend: [],
        note: 'with equality for a reversible process and strict inequality (> 0) for every irreversible one.',
      },
      {
        t: 'formula',
        kicker: 'Clausius inequality',
        main: '(for any cyclic process; the integral uses the actual heat):<br>∮ d<i>Q</i>/<i>T</i> ≤ 0',
        legend: [],
        note: '(= 0 if reversible; < 0 if irreversible).',
      },
      {
        t: 'defgrid',
        title: 'Standard entropy changes (ideal gas / standard processes)',
        rows: [
          {
            k: 'Isothermal (ideal gas, <i>T</i> const)',
            v: 'Δ<i>S</i> = <i>Q</i><sub>rev</sub>/<i>T</i> = <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>)',
          },
          { k: 'Phase change (at constant <i>T</i>)', v: 'Δ<i>S</i> = <i>mL</i>/<i>T</i>' },
          {
            k: 'Heating at constant pressure',
            v: 'Δ<i>S</i> = <i>nC</i><sub><i>P</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>)',
          },
          {
            k: 'Heating at constant volume',
            v: 'Δ<i>S</i> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>)',
          },
          { k: 'Reversible adiabatic (isentropic)', v: 'Δ<i>S</i> = 0 (d<i>Q</i><sub>rev</sub> = 0)' },
        ],
      },
      {
        t: 'formula',
        kicker: 'General ideal-gas form',
        main: '(combining volume and temperature change):<br>Δ<i>S</i> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) + <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>).',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: '3.1 Why S is a state function (the logical core)',
        steps: [
          'For a reversible cycle the Clausius relation gives ∮ d<i>Q</i><sub>rev</sub>/<i>T</i> = 0.',
          'A quantity whose integral around any closed loop vanishes is, by definition, the differential of a state function. So d<i>Q</i><sub>rev</sub>/<i>T</i> is an exact differential — call its integral <i>S</i>.',
          'Therefore Δ<i>S</i> between two states is path-independent: compute it along whatever reversible path is convenient, even to evaluate an irreversible process with the same endpoints.',
        ],
      },
      {
        t: 'proc',
        title: '3.2 Procedure: entropy change of the universe for an irreversible process',
        steps: [
          'Compute Δ<i>S</i><sub>sys</sub> along a reversible path with the system’s actual endpoints (use the table of standard entropy changes).',
          'Compute Δ<i>S</i><sub>surr</sub> = −<i>Q</i><sub>actual</sub>/<i>T</i><sub>surr</sub>, using the actual heat exchanged and the surroundings’ temperature (the reservoir, treated as unchanging).',
          'Add: Δ<i>S</i><sub>univ</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub>. For a genuinely irreversible process this comes out > 0; a result < 0 signals an arithmetic or sign error.',
        ],
      },
      {
        t: 'p',
        html: '<b>3.3 The Carnot cycle has zero entropy change (a consistency check)</b><br>Around a reversible Carnot cycle, entropy is gained on the hot isothermal (+<i>Q</i><sub>1</sub>/<i>T</i><sub>1</sub>) and lost on the cold isothermal (−<i>Q</i><sub>2</sub>/<i>T</i><sub>2</sub>); the adiabatics contribute nothing. The net is<br>∮ d<i>Q</i><sub>rev</sub>/<i>T</i> = <i>Q</i><sub>1</sub>/<i>T</i><sub>1</sub> − <i>Q</i><sub>2</sub>/<i>T</i><sub>2</sub> = 0   ⟺   <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>,<br>which is exactly the Carnot heat ratio from Topic 07 — entropy and Carnot are two views of the same truth.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main / Advanced Level',
        q: '2.0 mol of an ideal gas expands isothermally and reversibly at 400 K to twice its initial volume. Find the entropy change of the gas. (<i>R</i> = 8.314, ln 2 = 0.693.)',
        steps: [
          'Isothermal, so Δ<i>S</i> = <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = (2.0)(8.314)(ln 2) = (16.628)(0.693)',
          'Positive, as expected: the gas spreads into a larger volume (more disorder). Since the process is reversible, Δ<i>S</i><sub>surr</sub> = −11.5 J K<sup>−1</sup> and Δ<i>S</i><sub>univ</sub> = 0.',
        ],
        ans: 'Δ<i>S</i><sub>gas</sub> ≈ +11.5 J K<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '0.50 kg of ice at 0°C melts completely to water at 0°C. The latent heat of fusion is <i>L</i> = 3.34 × 10<sup>5</sup> J kg<sup>−1</sup>. Find the entropy change of the ice.',
        steps: [
          'Phase change at constant <i>T</i> = 273 K: Δ<i>S</i> = <i>mL</i>/<i>T</i> = (0.50)(3.34 × 10<sup>5</sup>)/273 = (1.67 × 10<sup>5</sup>)/273',
          'Melting injects heat at constant temperature, sharply raising disorder as the rigid lattice dissolves into a free-flowing liquid — a large positive Δ<i>S</i>.',
        ],
        ans: 'Δ<i>S</i> ≈ +612 J K<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A 2.0 kg block of metal at 400 K is dropped into a very large lake at 300 K and cools to 300 K. The metal’s specific heat is <i>c</i> = 400 J kg<sup>−1</sup> K<sup>−1</sup>. Find (a) Δ<i>S</i><sub>block</sub>, (b) Δ<i>S</i><sub>lake</sub>, and (c) Δ<i>S</i><sub>universe</sub>, and confirm the sign. (ln(400/300) = ln 1.333 = 0.2877.)',
        steps: [
          '(a) The block cools, and (computing along a reversible path) its entropy change is<br>Δ<i>S</i> = <i>mc</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) = (2.0)(400) ln(300/400) = 800 × (−0.2877) ≈ −230.2 J K<sup>−1</sup><br>(negative: it loses heat and orders).',
          '(b) The lake is a reservoir at constant 300 K; it gains the heat the block lost: <i>Q</i> = <i>mc</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>) = (2.0)(400)(100) = 8.0 × 10<sup>4</sup> J. So Δ<i>S</i><sub>lake</sub> = +<i>Q</i>/<i>T</i> = 8.0 × 10<sup>4</sup>/300 ≈ +266.7 J K<sup>−1</sup>.',
          '(c) Δ<i>S</i><sub>univ</sub> = −230.2 + 266.7 ≈ +36.5 J K<sup>−1</sup> > 0.',
          'The block’s entropy falls, but the lake’s rises more — the irreversible cooling across a finite temperature gap creates net entropy, exactly as the second law demands.',
        ],
        ans: '(a) Δ<i>S</i><sub>block</sub> ≈ −230 J K<sup>−1</sup>; (b) Δ<i>S</i><sub>lake</sub> ≈ +267 J K<sup>−1</sup>; (c) Δ<i>S</i><sub>univ</sub> ≈ +37 J K<sup>−1</sup> > 0',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Verify that a reversible Carnot engine produces zero net entropy change in the universe per cycle, given <i>Q</i><sub>1</sub> = 600 J absorbed at <i>T</i><sub>1</sub> = 500 K and <i>Q</i><sub>2</sub> rejected at <i>T</i><sub>2</sub> = 300 K.',
        steps: [
          'For a Carnot engine, <i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub>(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>) = 600 × (300/500) = 360 J. Entropy gained by the gas from the hot reservoir: +<i>Q</i><sub>1</sub>/<i>T</i><sub>1</sub> = 600/500 = 1.2 J K<sup>−1</sup>. Entropy lost to the cold reservoir: −<i>Q</i><sub>2</sub>/<i>T</i><sub>2</sub> = −360/300 = −1.2 J K<sup>−1</sup>. The adiabatic steps exchange no heat, contributing 0.',
          'Net over the cycle: 1.2 − 1.2',
          'This is why the Carnot engine is the efficiency ceiling: it is the unique engine that creates no entropy. Any real engine creates some, and the work it loses is <i>T</i><sub>2</sub> times that created entropy (<i>W</i><sub>lost</sub> = <i>T</i><sub>2</sub>Δ<i>S</i><sub>univ</sub>).',
        ],
        ans: 'Δ<i>S</i><sub>univ</sub> = 0 per cycle — the hallmark of a fully reversible engine.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] 1.0 mol of an ideal gas expands isothermally and reversibly at 300 K to three times its volume. Find Δ<i>S</i> of the gas. (ln 3 = 1.0986.)',
            a: 'Δ<i>S</i> = <i>nR</i> ln 3 = (1.0)(8.314)(1.0986) ≈ +9.13 J K<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] 1.0 kg of water at 100°C vaporises to steam at 100°C; <i>L</i><sub><i>v</i></sub> = 2.26 × 10<sup>6</sup> J kg<sup>−1</sup>. Find the entropy change of the water.',
            a: 'Δ<i>S</i> = <i>mL</i><sub><i>v</i></sub>/<i>T</i> = (1.0)(2.26 × 10<sup>6</sup>)/373 ≈ +6060 J K<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] A reversible Carnot engine absorbs 800 J at 400 K and rejects heat at 250 K. Find <i>Q</i><sub>2</sub> and verify ∮ d<i>Q</i>/<i>T</i> = 0.',
            a: '<i>Q</i><sub>2</sub> = <i>Q</i><sub>1</sub>(<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>) = 800(250/400) = 500 J; ∮ d<i>Q</i>/<i>T</i> = 800/400 − 500/250 = 2.0 − 2.0 = 0 ✓.',
          },
          {
            q: '[JEE Advanced] 3.0 mol of an ideal monoatomic gas (<i>C</i><sub><i>V</i></sub> = (3/2)<i>R</i>) is heated at constant volume from 300 K to 600 K. Find Δ<i>S</i>. (ln 2 = 0.693.)',
            a: 'Δ<i>S</i> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) = (3.0)((3/2) × 8.314)(ln 2) = (3.0)(12.471)(0.693) ≈ +25.9 J K<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] A hot body at 500 K transfers 1000 J directly to a cold body at 400 K (both large enough that temperatures barely change). Find Δ<i>S</i><sub>universe</sub> and confirm it is positive.',
            a: 'Δ<i>S</i><sub>hot</sub> = −1000/500 = −2.0 J K<sup>−1</sup>; Δ<i>S</i><sub>cold</sub> = +1000/400 = +2.5 J K<sup>−1</sup>; Δ<i>S</i><sub>univ</sub> = +0.5 J K<sup>−1</sup> > 0 ✓.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'For any reversible process, the entropy change of the universe is:',
        opts: [
          { label: 'positive', nudge: '<b>(A)</b> holds for irreversible processes.' },
          { label: 'negative', nudge: '<b>(B)</b> would violate the second law.' },
          { label: 'zero', nudge: null },
          { label: 'infinite', nudge: '<b>(D)</b> has no basis.' },
        ],
        correct: 2,
        solution: 'Reversibility is exactly the equality case of Δ<i>S</i><sub>univ</sub> ≥ 0.',
      },
      {
        t: 'mcq',
        q: 'The entropy change of an ideal gas in a reversible adiabatic process is:',
        opts: [
          {
            label: '<i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>)',
            nudge: '<b>(A)</b> is the isothermal result.',
          },
          { label: 'zero', nudge: null },
          {
            label: '<i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>)',
            nudge:
              '<b>(C)</b> keeps only the temperature term of the general form; in a reversible adiabatic the volume term <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) cancels it exactly.',
          },
          { label: 'negative', nudge: '<b>(D)</b> has no justification.' },
        ],
        correct: 1,
        solution: 'Adiabatic means d<i>Q</i><sub>rev</sub> = 0, so Δ<i>S</i> = ∫ d<i>Q</i><sub>rev</sub>/<i>T</i> = 0 — a reversible adiabatic is isentropic.',
      },
      {
        t: 'mcq',
        q: 'Entropy is a:',
        opts: [
          {
            label: 'path function like heat',
            nudge: '<b>(A)</b> confuses <i>S</i> with <i>Q</i> (its definition uses the reversible heat precisely to make it path-independent).',
          },
          { label: 'state function like internal energy', nudge: null },
          { label: 'form of energy', nudge: '<b>(C)</b> entropy has units J K<sup>−1</sup>, not joules.' },
          { label: 'always-conserved quantity', nudge: '<b>(D)</b> entropy of the universe increases, it is not conserved.' },
        ],
        correct: 1,
        solution: '∮ d<i>S</i> = 0, so <i>S</i> depends only on the state, like <i>U</i>.',
      },
      {
        t: 'mcq',
        q: 'The Clausius inequality ∮ d<i>Q</i>/<i>T</i> ≤ 0 becomes an equality for:',
        opts: [
          { label: 'any spontaneous process', nudge: '<b>(A)</b>,<b>(B)</b> spontaneous/irreversible give < 0.' },
          { label: 'an irreversible cycle', nudge: '<b>(A)</b>,<b>(B)</b> spontaneous/irreversible give < 0.' },
          { label: 'a reversible cycle', nudge: null },
          {
            label: 'an isothermal cycle only',
            nudge: '<b>(D)</b> the process type is irrelevant; reversibility is what matters.',
          },
        ],
        correct: 2,
        solution: 'The strict inequality (< 0) marks irreversibility; equality marks reversibility.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using actual heat for Δ<i>S</i><sub>sys</sub> of an irreversible process.</b> Δ<i>S</i> of the system must be computed along a reversible path with the same endpoints — not from the actual (irreversible) heat.',
          '<b>Forgetting the surroundings.</b> The second law constrains Δ<i>S</i><sub>universe</sub>, not Δ<i>S</i><sub>system</sub> alone. A system’s entropy may legitimately fall (freezing, compression).',
          '<b>Wrong temperature in <i>Q</i>/<i>T</i>.</b> Use the kelvin temperature at which the heat is exchanged — for a reservoir, its own (constant) temperature.',
          '<b>Treating entropy as energy.</b> Entropy has units J K<sup>−1</sup>, not J. It measures disorder, not stored energy.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> For irreversible problems, always split into “system” and “surroundings,” compute each Δ<i>S</i> separately, and add. For the system, route the calculation through a convenient reversible path (isothermal → <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>); heating → <i>nC</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>); phase change → <i>mL</i>/<i>T</i>). For a reservoir, Δ<i>S</i> = ±<i>Q</i><sub>actual</sub>/<i>T</i><sub>res</sub>. The universe total must come out ≥ 0 — a negative answer is a guaranteed sign error. And remember the elegant consistency check: a reversible Carnot cycle gives ∮ d<i>Q</i>/<i>T</i> = 0, which is the relation <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: 'd<i>S</i> = d<i>Q</i><sub>rev</sub>/<i>T</i>; <i>S</i> is a state function (∮ d<i>S</i> = 0), unit J K<sup>−1</sup>.',
          },
          {
            f: 'Second law (entropy form)',
            note: 'Δ<i>S</i><sub>universe</sub> = Δ<i>S</i><sub>sys</sub> + Δ<i>S</i><sub>surr</sub> ≥ 0 (= 0 reversible, > 0 irreversible).',
          },
          { f: 'Clausius inequality', note: '∮ d<i>Q</i>/<i>T</i> ≤ 0 (equality ⇔ reversible).' },
          {
            f: 'Standard Δ<i>S</i>',
            note: 'isothermal <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>); phase change <i>mL</i>/<i>T</i>; heating <i>nC</i><sub><i>P</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) or <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>); reversible adiabatic 0 (isentropic).',
          },
          {
            f: 'Irreversible process',
            note: 'compute Δ<i>S</i><sub>sys</sub> via a reversible path; Δ<i>S</i><sub>surr</sub> = −<i>Q</i><sub>actual</sub>/<i>T</i><sub>surr</sub>.',
          },
          {
            f: 'Carnot consistency',
            note: '∮ d<i>Q</i><sub>rev</sub>/<i>T</i> = <i>Q</i><sub>1</sub>/<i>T</i><sub>1</sub> − <i>Q</i><sub>2</sub>/<i>T</i><sub>2</sub> = 0 ⇔ <i>Q</i><sub>2</sub>/<i>Q</i><sub>1</sub> = <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>.',
          },
        ],
        aids: [
          '“Entropy is the universe’s odometer — it only ever goes up.”',
          '“System can tidy up; the universe always gets messier.”',
          '“State function ⇒ compute Δ<i>S</i> along any reversible path you like.”',
        ],
      },
    ],
  },

  {
    n: 'A',
    title: 'General Polytropic Processes: The Master Exponent x',
    extra: true,
    kalam: 'JEE Advanced treats x as a continuous variable.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the four basic processes, the two laws, the Carnot ceiling, and the entropy definition. Five JEE Advanced patterns sit just outside that perimeter: general polytropic processes where the exponent <i>x</i> is not 0, 1, <i>γ</i>, ∞; composite cycles where you must disentangle heat input from heat output leg by leg; irreversible adiabatic expansions against constant external pressure (not quasi-static, not isentropic); entropy accounting for the universe when the process is genuinely irreversible; and compound Carnot systems where engines drive refrigerators or cascades share reservoirs. Each addendum below takes one of these patterns and reduces it to the case-splitting, sign-tracking, and state-function logic the chapter already teaches.',
      },
      {
        t: 'p',
        html: 'Topic 03 introduces the polytropic relation <i>PV</i><sup><i>x</i></sup> = const and the molar heat capacity <i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>), but stops at naming the four special cases. JEE Advanced treats <i>x</i> as a continuous variable: you are given a process (e.g. “molar heat capacity is 2<i>R</i>” or “pressure varies as <i>P</i> ∝ <i>V</i><sup>−2</sup>”) and must find <i>x</i>, then the work, heat, entropy change, and whether the gas heats or cools during expansion. The engine is the first law in differential form with <i>P</i> = <i>KV</i><sup>−<i>x</i></sup>.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Identify <i>x</i>.</b><br>• If <i>P</i> ∝ <i>V</i><sup>−<i>n</i></sup> is given, <i>x</i> = <i>n</i>.<br>• If molar heat capacity <i>C</i> is given, solve <i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>) for <i>x</i>:<br><i>x</i> = 1 − <i>R</i>/(<i>C</i> − <i>C</i><sub><i>V</i></sub>).<br>• If a relation like <i>TV</i><sup><i>α</i></sup> = const is given, use <i>PV</i> = <i>nRT</i> ⇒ <i>TV</i><sup><i>x</i>−1</sup> = const, so <i>α</i> = <i>x</i> − 1.',
          '<b>Work done (quasi-static).</b> For <i>n</i> moles from (<i>P</i><sub><i>i</i></sub>, <i>V</i><sub><i>i</i></sub>) to (<i>P</i><sub><i>f</i></sub>, <i>V</i><sub><i>f</i></sub>):<br><i>W</i> = ∫ <i>P</i> d<i>V</i> = ∫ (<i>K</i>/<i>V</i><sup><i>x</i></sup>) d<i>V</i> (from <i>V</i><sub><i>i</i></sub> to <i>V</i><sub><i>f</i></sub>) = (<i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> − <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub>)/(<i>x</i> − 1) = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>x</i> − 1),   (<i>x</i> ≠ 1).<br>For <i>x</i> = 1 (isothermal), <i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>).',
          '<b>Internal energy change (ideal gas, any process).</b><br>Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i>.',
          '<b>Heat exchanged (First Law).</b><br><i>Q</i> = Δ<i>U</i> + <i>W</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> + <i>nR</i>Δ<i>T</i>/(1 − <i>x</i>) = <i>n</i>Δ<i>T</i>(<i>C</i><sub><i>V</i></sub> − <i>R</i>/(<i>x</i> − 1)).<br>Using <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i> and <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub>, the bracket is exactly the polytropic molar heat capacity <i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>). Thus <i>Q</i> = <i>nC</i>Δ<i>T</i> — the definition of <i>C</i>.',
          '<b>Temperature–Volume relation.</b> From <i>PV</i><sup><i>x</i></sup> = const and <i>PV</i> = <i>nRT</i>:<br><i>TV</i><sup><i>x</i>−1</sup> = const   ⇒   <i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> = (<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup><i>x</i>−1</sup>.',
          '<b>Entropy change (ideal gas).</b><br>Δ<i>S</i> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) + <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>).<br>Substitute <i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> from step 5 to express Δ<i>S</i> in terms of volumes only:<br>Δ<i>S</i> = <i>n</i>[<i>C</i><sub><i>V</i></sub>(1 − <i>x</i>) + <i>R</i>] ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = <i>nC</i>(1 − <i>x</i>) ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>)   (since <i>C</i>(1 − <i>x</i>) = <i>C</i><sub><i>V</i></sub>(1 − <i>x</i>) + <i>R</i>).<br>Equivalently, Δ<i>S</i> = <i>nC</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>).<br><b>Sign rule:</b> During expansion (<i>V</i><sub><i>f</i></sub> > <i>V</i><sub><i>i</i></sub>), Δ<i>T</i> has the sign of (1 − <i>x</i>), so <i>Q</i> = <i>nC</i>Δ<i>T</i> and Δ<i>S</i> = <i>nC</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) both have the sign of <i>C</i>(1 − <i>x</i>); during compression, both are opposite.',
          '<b>Special values of <i>x</i> (revision table with <i>C</i>).</b>',
        ],
      },
      {
        t: 'table',
        title: null,
        head: ['x', 'Process', 'C', 'ΔS sign in expansion'],
        rows: [
          ['0', 'Isobaric', '<i>C</i><sub><i>P</i></sub>', '> 0 (heat in)'],
          ['1', 'Isothermal', '∞', '> 0 (heat in)'],
          ['<i>γ</i>', 'Adiabatic (reversible)', '0', '= 0'],
          ['∞', 'Isochoric', '<i>C</i><sub><i>V</i></sub>', '> 0 on heating'],
          [
            '<i>x</i> > <i>γ</i>',
            'Steeper than adiabat',
            '0 < <i>C</i> < <i>C</i><sub><i>V</i></sub>',
            '< 0 (heat <b>out</b>: the gas cools, and since <i>C</i> > 0, cooling releases heat)',
          ],
          [
            '1 < <i>x</i> < <i>γ</i>',
            'Between isotherm & adiabat',
            '<i>C</i> < 0',
            '> 0 (heat <b>in</b> — the gas cools here too, but <i>C</i> < 0 flips the sign: it absorbs heat while cooling)',
          ],
          ['<i>x</i> < 0', 'Anomalous (pressure rises with volume)', '<i>C</i><sub><i>V</i></sub> < <i>C</i> < <i>C</i><sub><i>P</i></sub>', '> 0'],
        ],
      },
      {
        t: 'p',
        html: '<b>Critical JEE trap:</b> For 1 < <i>x</i> < <i>γ</i> (between isothermal and adiabatic), <i>TV</i><sup><i>x</i>−1</sup> = const with <i>x</i> − 1 > 0 means the gas cools during expansion (<i>T</i><sub><i>f</i></sub> < <i>T</i><sub><i>i</i></sub>) exactly as an adiabat would — but here <i>C</i> < 0, so <i>Q</i> = <i>nC</i>Δ<i>T</i> is positive: the gas <b>absorbs</b> heat even while cooling. Students assume “cooling ⇒ heat released”. Wrong. The gas does more work expanding than the drop in internal energy accounts for, so it must draw in the shortfall as heat, net cooling notwithstanding.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'One mole of a monoatomic ideal gas (<i>C</i><sub><i>V</i></sub> = (3/2)<i>R</i>, <i>γ</i> = 5/3) undergoes a quasi-static process described by <i>P</i> = <i>aV</i><sup>−2</sup>, where <i>a</i> is a constant. The gas expands from volume <i>V</i><sub>0</sub> to 2<i>V</i><sub>0</sub>. Find (a) the polytropic index <i>x</i>, (b) the molar heat capacity <i>C</i>, (c) the work done, (d) the heat exchanged, (e) the change in internal energy, (f) the entropy change. State whether the gas warms or cools.',
        steps: [
          '<b>(a) Find <i>x</i>.</b><br><i>P</i> ∝ <i>V</i><sup>−2</sup> ⇒ <i>PV</i><sup>2</sup> = const ⇒ <i>x</i> = 2.',
          '<b>(b) Molar heat capacity <i>C</i>.</b><br><i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>) = (3/2)<i>R</i> + <i>R</i>/(1 − 2) = (3/2)<i>R</i> − <i>R</i> = ½<i>R</i>.<br>Since <i>x</i> = 2 > <i>γ</i> = 5/3, this falls in the “steeper than adiabat” row of the table in Method: 0 < <i>C</i> < <i>C</i><sub><i>V</i></sub>, confirmed here since 0 < ½<i>R</i> < (3/2)<i>R</i>. As part (c)–(f) below will show, the gas cools during this expansion — and since <i>C</i> > 0, it releases heat while doing so.',
          '<b>(c) Work done.</b><br>Initial state: <i>P</i><sub><i>i</i></sub><i>V</i><sub>0</sub> = <i>RT</i><sub><i>i</i></sub> ⇒ <i>T</i><sub><i>i</i></sub> = <i>aV</i><sub>0</sub><sup>−2</sup><i>V</i><sub>0</sub>/<i>R</i> = <i>a</i>/(<i>RV</i><sub>0</sub>).<br>Final state: <i>P</i><sub><i>f</i></sub>(2<i>V</i><sub>0</sub>) = <i>RT</i><sub><i>f</i></sub> ⇒ <i>T</i><sub><i>f</i></sub> = <i>a</i>(2<i>V</i><sub>0</sub>)<sup>−2</sup>(2<i>V</i><sub>0</sub>)/<i>R</i> = <i>a</i>/(4<i>RV</i><sub>0</sub>) · 2 = <i>a</i>/(2<i>RV</i><sub>0</sub>) = <i>T</i><sub><i>i</i></sub>/2.<br>Δ<i>T</i> = <i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>i</i></sub> = −<i>T</i><sub><i>i</i></sub>/2.<br><i>W</i> = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>x</i> − 1) = <i>R</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>i</i></sub>/2)/(2 − 1) = <i>RT</i><sub><i>i</i></sub>/2.<br>Using <i>T</i><sub><i>i</i></sub> = <i>a</i>/(<i>RV</i><sub>0</sub>): <i>W</i> = <i>a</i>/(2<i>V</i><sub>0</sub>) J.<br>(Positive, gas expands).',
          '<b>(d) Heat exchanged.</b><br><i>Q</i> = <i>nC</i>Δ<i>T</i> = 1 · ½<i>R</i> · (−<i>T</i><sub><i>i</i></sub>/2) = −¼<i>RT</i><sub><i>i</i></sub> = −<i>a</i>/(4<i>V</i><sub>0</sub>) J.<br><b>Negative.</b> Heat is released by the gas during expansion, consistent with <i>C</i> > 0 and Δ<i>T</i> < 0.',
          '<b>(e) Internal energy change.</b><br>Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> = (3/2)<i>R</i>(−<i>T</i><sub><i>i</i></sub>/2) = −(3/4)<i>RT</i><sub><i>i</i></sub> = −3<i>a</i>/(4<i>V</i><sub>0</sub>) J.<br>Check First Law: Δ<i>U</i> + <i>W</i> = −(3/4)<i>RT</i><sub><i>i</i></sub> + ½<i>RT</i><sub><i>i</i></sub> = −¼<i>RT</i><sub><i>i</i></sub> = <i>Q</i>.',
          '<b>(f) Entropy change.</b><br>Δ<i>S</i> = <i>nC</i><sub><i>V</i></sub> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) + <i>nR</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = (3/2)<i>R</i> ln ½ + <i>R</i> ln 2 = (−3/2 + 1)<i>R</i> ln 2 = −½<i>R</i> ln 2.<br>Δ<i>S</i> = −(<i>R</i> ln 2)/2 J K<sup>−1</sup>.',
          '<b>Negative.</b> Gas entropy decreases. This is allowed because heat flows out (<i>Q</i> < 0). Universe entropy change requires surroundings.',
        ],
        ans: '<b>Summary:</b> <i>x</i> = 2, <i>C</i> = 0.5<i>R</i>, <i>W</i> = <i>a</i>/(2<i>V</i><sub>0</sub>) J, <i>Q</i> = −<i>a</i>/(4<i>V</i><sub>0</sub>) J, Δ<i>U</i> = −3<i>a</i>/(4<i>V</i><sub>0</sub>) J, Δ<i>S</i> = −0.5<i>R</i> ln 2 J/K. Gas cools (<i>T</i><sub><i>f</i></sub> = <i>T</i><sub><i>i</i></sub>/2) and releases heat.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A diatomic ideal gas (<i>C</i><sub><i>V</i></sub> = (5/2)<i>R</i>, <i>γ</i> = 7/5) undergoes a process where the molar heat capacity is constant and equal to <i>C</i> = 3<i>R</i>. Find the polytropic index <i>x</i> and the ratio <i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> if the volume doubles.',
        steps: [
          '<b>Find <i>x</i>:</b><br><i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>) ⟹ 3<i>R</i> = (5/2)<i>R</i> + <i>R</i>/(1 − <i>x</i>)<br>½<i>R</i> = <i>R</i>/(1 − <i>x</i>) ⟹ 1 − <i>x</i> = 2 ⟹ <i>x</i> = −1.',
          '<b>Temperature ratio:</b><br><i>TV</i><sup><i>x</i>−1</sup> = const ⇒ <i>TV</i><sup>−2</sup> = const.<br><i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> = (<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup><i>x</i>−1</sup> = (½)<sup>−2</sup> = 4.<br><i>T</i><sub><i>f</i></sub> = 4<i>T</i><sub><i>i</i></sub>. Temperature quadruples during expansion. Since <i>x</i> = −1 < 0, pressure increases with volume (<i>P</i> ∝ <i>V</i>). Heat is absorbed: <i>C</i> = 3<i>R</i> lies between <i>C</i><sub><i>V</i></sub> = (5/2)<i>R</i> and <i>C</i><sub><i>P</i></sub> = (7/2)<i>R</i>, as it must for any <i>x</i> < 0.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'One mole of a monoatomic ideal gas (<i>C</i><sub><i>V</i></sub> = 3<i>R</i>/2) expands quasi-statically from <i>V</i><sub>0</sub> to 2<i>V</i><sub>0</sub> following <i>PV</i><sup>3/2</sup> = const. Find <i>W</i>, <i>Q</i>, Δ<i>U</i>, Δ<i>S</i>. (<i>R</i> = 8.314, ln 2 = 0.693).',
            a: '<i>x</i> = 1.5. <i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> = (1/2)<sup>0.5</sup> = 1/√2. <i>W</i> = <i>R</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/0.5 = 2<i>RT</i><sub><i>i</i></sub>(1 − 1/√2). <i>Q</i> = <i>nC</i>Δ<i>T</i>, <i>C</i> = 1.5<i>R</i> + <i>R</i>/(1 − 1.5) = 1.5<i>R</i> − 2<i>R</i> = −0.5<i>R</i>. Δ<i>U</i> = 1.5<i>R</i>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>i</i></sub>). Δ<i>S</i> = <i>nC</i>(1 − <i>x</i>) ln 2 = (−0.5<i>R</i>)(−0.5) ln 2 = +0.25<i>R</i> ln 2 ≈ +1.44 J/K > 0 (positive because <i>C</i> < 0 and the gas cools).',
          },
          {
            q: 'A gas has <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> = 1.5. In a process, its molar heat capacity is found to be zero. Find the polytropic index <i>x</i> and the relation between <i>P</i> and <i>V</i>.',
            a: '<i>C</i> = 0 ⇒ <i>x</i> = <i>γ</i> = 1.5. <i>PV</i><sup>1.5</sup> = const.',
          },
          {
            q: 'For a certain ideal gas, <i>C</i><sub><i>V</i></sub> = 2<i>R</i>. The gas is compressed such that <i>P</i> ∝ <i>V</i><sup>2</sup>. Find the molar heat capacity <i>C</i> for this process. Does the gas absorb or release heat during this compression?',
            a: '<i>P</i> ∝ <i>V</i><sup>2</sup> ⇒ <i>PV</i><sup>−2</sup> = const ⇒ <i>x</i> = −2. <i>C</i> = 2<i>R</i> + <i>R</i>/(1 − (−2)) = 2<i>R</i> + <i>R</i>/3 = 7<i>R</i>/3 > 0. Compression ⇒ Δ<i>V</i> < 0 ⇒ Δ<i>T</i> < 0 (since <i>x</i> − 1 = −3, <i>TV</i><sup>−3</sup> = const, i.e. <i>T</i> ∝ <i>V</i><sup>3</sup>). <i>Q</i> = <i>C</i>Δ<i>T</i> < 0. Heat released.',
          },
          {
            q: 'Two moles of a diatomic gas (<i>C</i><sub><i>V</i></sub> = 5<i>R</i>/2) undergo a process <i>TV</i><sup>3</sup> = const. Initial state: <i>T</i><sub><i>i</i></sub> = 300 K, <i>V</i><sub><i>i</i></sub> = 0.01 m<sup>3</sup>. Final volume <i>V</i><sub><i>f</i></sub> = 0.02 m<sup>3</sup>. Find <i>W</i>, <i>Q</i>, Δ<i>S</i>.',
            a: '<i>TV</i><sup>3</sup> = const ⇒ <i>x</i> − 1 = 3 ⇒ <i>x</i> = 4. <i>T</i><sub><i>f</i></sub> = <i>T</i><sub><i>i</i></sub>(<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup>3</sup> = 300(1/2)<sup>3</sup> = 37.5 K. <i>W</i> = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>x</i> − 1) = (2 × 8.314 × 262.5)/3 ≈ 1455 J. <i>C</i> = 2.5<i>R</i> + <i>R</i>/(1 − 4) = 2.5<i>R</i> − <i>R</i>/3 = 13<i>R</i>/6. <i>Q</i> = <i>nC</i>Δ<i>T</i> = 2 × (13<i>R</i>/6) × (−262.5) ≈ −9.46 × 10<sup>3</sup> J (check: Δ<i>U</i> = 2(2.5<i>R</i>)(−262.5) ≈ −10912 J, <i>W</i> = +1455 J, Δ<i>U</i> + <i>W</i> ≈ −9457 J). Δ<i>S</i> = <i>nC</i> ln(<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub>) = 2 × (13<i>R</i>/6) × ln(1/8) = −13<i>R</i> ln 2 ≈ −74.9 J/K (negative: heat leaves the gas and <i>T</i> falls).',
          },
          {
            q: '<b>Advanced.</b> An ideal gas undergoes a process <i>P</i> = <i>kV</i><sup>−1/2</sup>. Find the value of <i>γ</i> for which this process is adiabatic. For a gas with <i>γ</i> = 5/3, find <i>C</i> and state if heat is absorbed or released during expansion.',
            a: '<i>P</i> ∝ <i>V</i><sup>−1/2</sup> ⇒ <i>x</i> = 0.5. Adiabatic requires <i>x</i> = <i>γ</i>, so <i>γ</i> would have to be 0.5, which is impossible for an ideal gas (<i>γ</i> > 1). The process is never adiabatic. For <i>γ</i> = 5/3, <i>C</i><sub><i>V</i></sub> = 1.5<i>R</i>. <i>x</i> = 0.5. <i>C</i> = 1.5<i>R</i> + <i>R</i>/(1 − 0.5) = 1.5<i>R</i> + 2<i>R</i> = 3.5<i>R</i> > 0. Expansion ⇒ Δ<i>V</i> > 0 ⇒ Δ<i>T</i> > 0 (<i>TV</i><sup>−0.5</sup> = const, i.e. <i>T</i> ∝ <i>V</i><sup>0.5</sup>). <i>Q</i> = <i>C</i>Δ<i>T</i> > 0. Heat absorbed.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Composite Cycles: Leg-by-Leg Heat Accounting',
    extra: true,
    kalam:
      'JEE Main/Advanced frequently presents cycles made of straight lines and curves on a P-V diagram and asks for efficiency.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 05 and 07 define efficiency <i>η</i> = <i>W</i><sub>net</sub>/<i>Q</i><sub>in</sub> and show the Carnot cycle. JEE Main/Advanced frequently presents cycles made of straight lines and curves on a P-V diagram (e.g., two isotherms + two isochors, a triangle, a rectangle with slanted top) and asks for efficiency. The trap: <i>Q</i><sub>in</sub> is <b>not</b> the net heat <i>Q</i><sub>net</sub>; it is the sum of heat absorbed only on those legs where <i>Q</i> > 0. You must compute <i>Q</i> for every leg using the first law, track signs, sum only the positive <i>Q</i>’s for the denominator, and take the enclosed area (or ∑ <i>W</i>) for the numerator.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Sketch the cycle</b> on a P-V diagram. Label states 1, 2, 3… with (<i>P</i>, <i>V</i>, <i>T</i>).',
          '<b>Analyse each leg</b> (process 1→2, 2→3, …):<br>• Identify process type (isotherm, adiabat, isobar, isochor, straight line <i>P</i> = <i>aV</i> + <i>b</i>).<br>• Compute Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> (ideal gas).<br>• Compute <i>W</i> = ∫ <i>P</i> d<i>V</i> (area under curve; + for expansion, − for compression).<br>• Compute <i>Q</i> = Δ<i>U</i> + <i>W</i>.<br>• Record sign of <i>Q</i>: <i>Q</i> > 0 (heat absorbed), <i>Q</i> < 0 (heat rejected).',
          '<b>Net work:</b> <i>W</i><sub>net</sub> = ∑ <i>W</i><sub>legs</sub> = Area enclosed (positive if clockwise).',
          '<b>Heat input:</b> <i>Q</i><sub>in</sub> = ∑<sub>legs: <i>Q</i> > 0</sub> <i>Q</i><sub>leg</sub>.',
          '<b>Efficiency:</b> <i>η</i> = <i>W</i><sub>net</sub>/<i>Q</i><sub>in</sub>.',
          '<b>Carnot comparison:</b> Compute <i>η</i><sub>Carnot</sub> = 1 − <i>T</i><sub>min</sub>/<i>T</i><sub>max</sub> using the extreme temperatures in the cycle. Verify <i>η</i> < <i>η</i><sub>Carnot</sub>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Straight-line process <i>P</i> = <i>aV</i> + <i>b</i> (non-standard):</b><br><i>W</i> = ∫(<i>aV</i> + <i>b</i>)d<i>V</i> = (<i>a</i>/2)(<i>V</i><sub><i>f</i></sub><sup>2</sup> − <i>V</i><sub><i>i</i></sub><sup>2</sup>) + <i>b</i>(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>) = ½(<i>P</i><sub><i>f</i></sub> + <i>P</i><sub><i>i</i></sub>)(<i>V</i><sub><i>f</i></sub> − <i>V</i><sub><i>i</i></sub>) (trapezoid area).<br>Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>i</i></sub>) = (<i>C</i><sub><i>V</i></sub>/<i>R</i>)(<i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub> − <i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>).<br><i>Q</i> = Δ<i>U</i> + <i>W</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'One mole of a monoatomic ideal gas (<i>C</i><sub><i>V</i></sub> = (3/2)<i>R</i>) undergoes a cyclic process ABCA on a P-V diagram.<br>• A → B: Straight line from (<i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>) to (2<i>P</i><sub>0</sub>, 2<i>V</i><sub>0</sub>).<br>• B → C: Isochoric cooling to pressure <i>P</i><sub>0</sub>.<br>• C → A: Isobaric compression back to <i>V</i><sub>0</sub>.<br>Find the efficiency of the cycle.',
        steps: [
          '<b>State variables:</b><br>• A: <i>P</i><sub><i>A</i></sub> = <i>P</i><sub>0</sub>, <i>V</i><sub><i>A</i></sub> = <i>V</i><sub>0</sub> ⇒ <i>T</i><sub><i>A</i></sub> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>/<i>R</i>.<br>• B: <i>P</i><sub><i>B</i></sub> = 2<i>P</i><sub>0</sub>, <i>V</i><sub><i>B</i></sub> = 2<i>V</i><sub>0</sub> ⇒ <i>T</i><sub><i>B</i></sub> = 4<i>P</i><sub>0</sub><i>V</i><sub>0</sub>/<i>R</i> = 4<i>T</i><sub><i>A</i></sub>.<br>• C: <i>V</i><sub><i>C</i></sub> = <i>V</i><sub><i>B</i></sub> = 2<i>V</i><sub>0</sub>, <i>P</i><sub><i>C</i></sub> = <i>P</i><sub>0</sub> ⇒ <i>T</i><sub><i>C</i></sub> = 2<i>P</i><sub>0</sub><i>V</i><sub>0</sub>/<i>R</i> = 2<i>T</i><sub><i>A</i></sub>.',
          '<b>Leg A → B (Straight line <i>P</i> = (<i>P</i><sub>0</sub>/<i>V</i><sub>0</sub>)<i>V</i>):</b><br><i>W</i><sub><i>AB</i></sub> = Area of trapezoid = ½(<i>P</i><sub><i>A</i></sub> + <i>P</i><sub><i>B</i></sub>)(<i>V</i><sub><i>B</i></sub> − <i>V</i><sub><i>A</i></sub>) = ½(3<i>P</i><sub>0</sub>)(<i>V</i><sub>0</sub>) = (3/2)<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = (3/2)<i>RT</i><sub><i>A</i></sub>.<br>Δ<i>U</i><sub><i>AB</i></sub> = <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>B</i></sub> − <i>T</i><sub><i>A</i></sub>) = (3/2)<i>R</i>(3<i>T</i><sub><i>A</i></sub>) = (9/2)<i>RT</i><sub><i>A</i></sub>.<br><i>Q</i><sub><i>AB</i></sub> = Δ<i>U</i><sub><i>AB</i></sub> + <i>W</i><sub><i>AB</i></sub> = (9/2)<i>RT</i><sub><i>A</i></sub> + (3/2)<i>RT</i><sub><i>A</i></sub> = 6<i>RT</i><sub><i>A</i></sub> > 0. (Heat absorbed).',
          '<b>Leg B → C (Isochoric, <i>V</i> = 2<i>V</i><sub>0</sub>):</b><br><i>W</i><sub><i>BC</i></sub> = 0.<br>Δ<i>U</i><sub><i>BC</i></sub> = <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>C</i></sub> − <i>T</i><sub><i>B</i></sub>) = (3/2)<i>R</i>(2<i>T</i><sub><i>A</i></sub> − 4<i>T</i><sub><i>A</i></sub>) = −3<i>RT</i><sub><i>A</i></sub>.<br><i>Q</i><sub><i>BC</i></sub> = −3<i>RT</i><sub><i>A</i></sub> < 0. (Heat rejected).',
          '<b>Leg C → A (Isobaric, <i>P</i> = <i>P</i><sub>0</sub>):</b><br><i>W</i><sub><i>CA</i></sub> = <i>P</i><sub>0</sub>(<i>V</i><sub><i>A</i></sub> − <i>V</i><sub><i>C</i></sub>) = <i>P</i><sub>0</sub>(<i>V</i><sub>0</sub> − 2<i>V</i><sub>0</sub>) = −<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = −<i>RT</i><sub><i>A</i></sub>.<br>Δ<i>U</i><sub><i>CA</i></sub> = <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>A</i></sub> − <i>T</i><sub><i>C</i></sub>) = (3/2)<i>R</i>(<i>T</i><sub><i>A</i></sub> − 2<i>T</i><sub><i>A</i></sub>) = −(3/2)<i>RT</i><sub><i>A</i></sub>.<br><i>Q</i><sub><i>CA</i></sub> = Δ<i>U</i><sub><i>CA</i></sub> + <i>W</i><sub><i>CA</i></sub> = −(3/2)<i>RT</i><sub><i>A</i></sub> − <i>RT</i><sub><i>A</i></sub> = −(5/2)<i>RT</i><sub><i>A</i></sub> < 0. (Heat rejected).',
          '<b>Cycle Totals:</b><br><i>W</i><sub>net</sub> = (3/2)<i>RT</i><sub><i>A</i></sub> + 0 − <i>RT</i><sub><i>A</i></sub> = ½<i>RT</i><sub><i>A</i></sub>. (Clockwise, positive).<br><i>Q</i><sub>in</sub> = <i>Q</i><sub><i>AB</i></sub> = 6<i>RT</i><sub><i>A</i></sub>. (Only leg with <i>Q</i> > 0).<br><i>η</i> = <i>W</i><sub>net</sub>/<i>Q</i><sub>in</sub> = 0.5<i>RT</i><sub><i>A</i></sub>/(6<i>RT</i><sub><i>A</i></sub>) = 1/12 ≈ 8.33%.',
          '<b>Carnot check:</b> <i>T</i><sub>max</sub> = <i>T</i><sub><i>B</i></sub> = 4<i>T</i><sub><i>A</i></sub>, <i>T</i><sub>min</sub> = <i>T</i><sub><i>A</i></sub>.<br><i>η</i><sub>Carnot</sub> = 1 − <i>T</i><sub><i>A</i></sub>/(4<i>T</i><sub><i>A</i></sub>) = 75%.<br><i>η</i>(8.33%) < <i>η</i><sub>Carnot</sub>(75%).',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A cyclic process for 1 mol of ideal diatomic gas (<i>γ</i> = 7/5) consists of:<br>1. Isothermal expansion at <i>T</i><sub>1</sub> from <i>V</i><sub>1</sub> to <i>V</i><sub>2</sub> = 2<i>V</i><sub>1</sub>.<br>2. Isochoric cooling to a temperature <i>T</i><sub>2</sub>.<br>3. Adiabatic compression back to the initial state.<br>Find <i>T</i><sub>2</sub> and the efficiency.',
        steps: [
          '<b>State 1:</b> <i>T</i><sub>1</sub>, <i>V</i><sub>1</sub>.<br><b>State 2:</b> <i>T</i><sub>1</sub>, <i>V</i><sub>2</sub> = 2<i>V</i><sub>1</sub>.<br><b>State 3:</b> <i>T</i><sub>2</sub>, <i>V</i><sub>3</sub> = 2<i>V</i><sub>1</sub>.',
          'For the adiabat 3 → 1 to return exactly to state 1, state 3 must lie on the adiabat through state 1:<br><i>T</i><sub>2</sub>(2<i>V</i><sub>1</sub>)<sup><i>γ</i>−1</sup> = <i>T</i><sub>1</sub><i>V</i><sub>1</sub><sup><i>γ</i>−1</sup> ⇒ <i>T</i><sub>2</sub> = <i>T</i><sub>1</sub> 2<sup>−(<i>γ</i>−1)</sup> = <i>T</i><sub>1</sub> 2<sup>−2/5</sup> ≈ 0.758 <i>T</i><sub>1</sub>.',
          '(Note that <i>T</i><sub>2</sub> = <i>T</i><sub>1</sub>/2 would not close the cycle: the adiabat from (<i>T</i><sub>1</sub>/2, 2<i>V</i><sub>1</sub>) ends at a different state, so the cooling temperature is fixed by the requirement that the cycle closes.)',
          '<b>Leg 1 (Isothermal Exp):</b> <i>W</i><sub>1</sub> = <i>RT</i><sub>1</sub> ln 2. Δ<i>U</i><sub>1</sub> = 0. <i>Q</i><sub>1</sub> = <i>RT</i><sub>1</sub> ln 2 > 0.',
          '<b>Leg 2 (Isochoric Cool):</b> <i>W</i><sub>2</sub> = 0. Δ<i>U</i><sub>2</sub> = <i>C</i><sub><i>V</i></sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) = (5/2)<i>RT</i><sub>1</sub>(2<sup>−2/5</sup> − 1). <i>Q</i><sub>2</sub> = Δ<i>U</i><sub>2</sub> < 0.',
          '<b>Leg 3 (Adiabatic Comp):</b> <i>Q</i><sub>3</sub> = 0. <i>W</i><sub>3</sub> = <i>R</i>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)/(<i>γ</i> − 1) = (5/2)<i>R</i>(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>) = Δ<i>U</i><sub>2</sub> (both negative; Δ<i>U</i><sub>3</sub> = −Δ<i>U</i><sub>2</sub> because Δ<i>U</i><sub>cycle</sub> = 0, and <i>W</i><sub>3</sub> = −Δ<i>U</i><sub>3</sub> for an adiabat).',
          '<i>W</i><sub>net</sub> = <i>W</i><sub>1</sub> + <i>W</i><sub>3</sub> = <i>RT</i><sub>1</sub> ln 2 + (5/2)<i>RT</i><sub>1</sub>(2<sup>−2/5</sup> − 1).<br><i>Q</i><sub>in</sub> = <i>Q</i><sub>1</sub> = <i>RT</i><sub>1</sub> ln 2.<br><i>η</i> = 1 + [(5/2)(2<sup>−2/5</sup> − 1)]/ln 2.<br>2<sup>−2/5</sup> ≈ 0.7579. Num = 2.5(−0.2421) = −0.605. Den = 0.693.<br><i>η</i> = 1 − 0.605/0.693 ≈ 1 − 0.873 = 0.127 = 12.7%.<br><i>η</i><sub>Carnot</sub> = 1 − <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = 1 − 2<sup>−2/5</sup> ≈ 24.2%. <i>η</i> < <i>η</i><sub><i>C</i></sub>.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>Rectangle Cycle.</b> 1 mol monoatomic gas. A(<i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>) → B(2<i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>) (isochoric) → C(2<i>P</i><sub>0</sub>, 2<i>V</i><sub>0</sub>) (isobaric) → D(<i>P</i><sub>0</sub>, 2<i>V</i><sub>0</sub>) (isochoric) → A (isobaric). Find <i>η</i>.',
            a: '<i>T</i><sub><i>A</i></sub> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>/<i>R</i>, <i>T</i><sub><i>B</i></sub> = 2<i>T</i><sub><i>A</i></sub>, <i>T</i><sub><i>C</i></sub> = 4<i>T</i><sub><i>A</i></sub>, <i>T</i><sub><i>D</i></sub> = 2<i>T</i><sub><i>A</i></sub>.<br>AB: <i>W</i> = 0, <i>Q</i> = 1.5<i>R</i>(<i>T</i><sub><i>A</i></sub>) > 0.<br>BC: <i>W</i> = 2<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = 2<i>RT</i><sub><i>A</i></sub>, Δ<i>U</i> = 1.5<i>R</i>(2<i>T</i><sub><i>A</i></sub>) = 3<i>RT</i><sub><i>A</i></sub>, <i>Q</i> = 5<i>RT</i><sub><i>A</i></sub> > 0.<br>CD: <i>W</i> = 0, <i>Q</i> = 1.5<i>R</i>(−2<i>T</i><sub><i>A</i></sub>) = −3<i>RT</i><sub><i>A</i></sub>.<br>DA: <i>W</i> = −<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = −<i>RT</i><sub><i>A</i></sub>, Δ<i>U</i> = 1.5<i>R</i>(−<i>T</i><sub><i>A</i></sub>) = −1.5<i>RT</i><sub><i>A</i></sub>, <i>Q</i> = −2.5<i>RT</i><sub><i>A</i></sub>.<br><i>W</i><sub>net</sub> = 2<i>RT</i><sub><i>A</i></sub> − <i>RT</i><sub><i>A</i></sub> = <i>RT</i><sub><i>A</i></sub>. <i>Q</i><sub>in</sub> = 1.5<i>RT</i><sub><i>A</i></sub> + 5<i>RT</i><sub><i>A</i></sub> = 6.5<i>RT</i><sub><i>A</i></sub>. <i>η</i> = 1/6.5 ≈ 15.4%.',
          },
          {
            q: '<b>Triangle Cycle.</b> 1 mol diatomic gas. A(<i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>) → B(2<i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>) (isochoric) → C(<i>P</i><sub>0</sub>, 2<i>V</i><sub>0</sub>) (straight line) → A (isobaric). Find <i>η</i>.',
            a: 'AB: <i>W</i> = 0, <i>Q</i> = 2.5<i>RT</i><sub><i>A</i></sub> > 0. (<i>T</i><sub><i>B</i></sub> = 2<i>T</i><sub><i>A</i></sub>).<br>BC: Straight line <i>P</i> = 3<i>P</i><sub>0</sub> − (<i>P</i><sub>0</sub>/<i>V</i><sub>0</sub>)<i>V</i>. <i>W</i> = ½(2<i>P</i><sub>0</sub> + <i>P</i><sub>0</sub>)(<i>V</i><sub>0</sub>) = 1.5<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = 1.5<i>RT</i><sub><i>A</i></sub>.<br>Δ<i>U</i> = 2.5<i>R</i>(<i>T</i><sub><i>C</i></sub> − <i>T</i><sub><i>B</i></sub>) = 2.5<i>R</i>(2<i>T</i><sub><i>A</i></sub> − 2<i>T</i><sub><i>A</i></sub>) = 0 (since <i>T</i><sub><i>C</i></sub> = <i>P</i><sub>0</sub>2<i>V</i><sub>0</sub>/<i>R</i> = 2<i>T</i><sub><i>A</i></sub>), so the net heat on BC is <i>Q</i><sub><i>BC</i></sub> = 1.5<i>RT</i><sub><i>A</i></sub>.<br><b>Trap:</b> along this line <i>T</i> first rises and then falls (maximum at <i>V</i> = 1.5<i>V</i><sub>0</sub>), so BC is not all heat absorbed. With d<i>Q</i> = <i>nC</i><sub><i>V</i></sub> d<i>T</i> + <i>P</i> d<i>V</i> and <i>PV</i> = 3<i>P</i><sub>0</sub><i>V</i> − (<i>P</i><sub>0</sub>/<i>V</i><sub>0</sub>)<i>V</i><sup>2</sup>:<br>d<i>Q</i>/d<i>V</i> = 2.5(3<i>P</i><sub>0</sub> − 2(<i>P</i><sub>0</sub>/<i>V</i><sub>0</sub>)<i>V</i>) + (3<i>P</i><sub>0</sub> − (<i>P</i><sub>0</sub>/<i>V</i><sub>0</sub>)<i>V</i>) = 10.5<i>P</i><sub>0</sub> − 6(<i>P</i><sub>0</sub>/<i>V</i><sub>0</sub>)<i>V</i>,<br>which is positive until <i>V</i> = 1.75<i>V</i><sub>0</sub> and negative afterwards. Heat absorbed on BC: ∫<sub><i>V</i>₀</sub><sup>1.75<i>V</i>₀</sup> d<i>Q</i> = 7.875<i>P</i><sub>0</sub><i>V</i><sub>0</sub> − 6.1875<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = 1.6875 <i>RT</i><sub><i>A</i></sub> (the remaining 0.1875 <i>RT</i><sub><i>A</i></sub> is rejected).<br>CA: Isobaric comp. <i>W</i> = −<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = −<i>RT</i><sub><i>A</i></sub>. Δ<i>U</i> = 2.5<i>R</i>(<i>T</i><sub><i>A</i></sub> − 2<i>T</i><sub><i>A</i></sub>) = −2.5<i>RT</i><sub><i>A</i></sub>. <i>Q</i> = −3.5<i>RT</i><sub><i>A</i></sub>.<br><i>W</i><sub>net</sub> = 1.5 − 1 = 0.5<i>RT</i><sub><i>A</i></sub>. <i>Q</i><sub>in</sub> = 2.5 + 1.6875 ≈ 4.19<i>RT</i><sub><i>A</i></sub>. <i>η</i> = 0.5/4.19 ≈ 11.9% (not 12.5%, which would result from counting the net 1.5<i>RT</i><sub><i>A</i></sub> on BC as heat input).',
          },
          {
            q: '<b>Stirling-like Cycle.</b> Two isotherms (<i>T</i><sub><i>H</i></sub>, <i>T</i><sub><i>C</i></sub>) connected by two isochors (<i>V</i><sub>1</sub>, <i>V</i><sub>2</sub>). 1 mol monoatomic gas. Find <i>η</i>. (No regenerator: heat is absorbed on the high-<i>T</i> isotherm and on the heating isochor.)',
            a: '1→2 (Isoth <i>T</i><sub><i>H</i></sub>): <i>Q</i><sub><i>H</i></sub> = <i>RT</i><sub><i>H</i></sub> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) > 0.<br>2→3 (Isochor <i>V</i><sub>2</sub> cool): <i>Q</i><sub>23</sub> = <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>C</i></sub> − <i>T</i><sub><i>H</i></sub>) < 0.<br>3→4 (Isoth <i>T</i><sub><i>C</i></sub>): <i>Q</i><sub><i>C</i></sub> = <i>RT</i><sub><i>C</i></sub> ln(<i>V</i><sub>1</sub>/<i>V</i><sub>2</sub>) < 0.<br>4→1 (Isochor <i>V</i><sub>1</sub> heat): <i>Q</i><sub>41</sub> = <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>) > 0.<br><i>Q</i><sub>in</sub> = <i>RT</i><sub><i>H</i></sub> ln <i>r</i> + <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>) where <i>r</i> = <i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>.<br><i>W</i><sub>net</sub> = <i>R</i>(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>) ln <i>r</i>.<br><i>η</i> = [<i>R</i>(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>) ln <i>r</i>]/[<i>RT</i><sub><i>H</i></sub> ln <i>r</i> + <i>C</i><sub><i>V</i></sub>(<i>T</i><sub><i>H</i></sub> − <i>T</i><sub><i>C</i></sub>)] = <i>η</i><sub><i>C</i></sub>/(1 + <i>η</i><sub><i>C</i></sub><i>C</i><sub><i>V</i></sub>/(<i>R</i> ln <i>r</i>)) < <i>η</i><sub><i>C</i></sub>, where <i>η</i><sub><i>C</i></sub> = 1 − <i>T</i><sub><i>C</i></sub>/<i>T</i><sub><i>H</i></sub> (divide numerator and denominator by <i>RT</i><sub><i>H</i></sub> ln <i>r</i>).',
          },
          {
            q: '<b>Complex Straight Line.</b> 1 mol gas (<i>γ</i> = 5/3). Cycle: A(<i>P</i><sub>0</sub>, <i>V</i><sub>0</sub>) → B(2<i>P</i><sub>0</sub>, 3<i>V</i><sub>0</sub>) (straight line) → C(<i>P</i><sub>0</sub>, 3<i>V</i><sub>0</sub>) (isochoric) → A (isobaric). Find <i>Q</i><sub>in</sub>, <i>W</i><sub>net</sub>, <i>η</i>.',
            a: 'A: <i>T</i><sub><i>A</i></sub> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>/<i>R</i>. B: <i>T</i><sub><i>B</i></sub> = 6<i>P</i><sub>0</sub><i>V</i><sub>0</sub>/<i>R</i> = 6<i>T</i><sub><i>A</i></sub>. C: <i>T</i><sub><i>C</i></sub> = 3<i>P</i><sub>0</sub><i>V</i><sub>0</sub>/<i>R</i> = 3<i>T</i><sub><i>A</i></sub>.<br>AB: Line (<i>P</i> − <i>P</i><sub>0</sub>)/(2<i>P</i><sub>0</sub> − <i>P</i><sub>0</sub>) = (<i>V</i> − <i>V</i><sub>0</sub>)/(3<i>V</i><sub>0</sub> − <i>V</i><sub>0</sub>) ⇒ <i>P</i> = <i>P</i><sub>0</sub> + 0.5(<i>P</i><sub>0</sub>/<i>V</i><sub>0</sub>)(<i>V</i> − <i>V</i><sub>0</sub>).<br><i>W</i><sub><i>AB</i></sub> = ½(<i>P</i><sub>0</sub> + 2<i>P</i><sub>0</sub>)(2<i>V</i><sub>0</sub>) = 3<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = 3<i>RT</i><sub><i>A</i></sub>.<br>Δ<i>U</i><sub><i>AB</i></sub> = 1.5<i>R</i>(5<i>T</i><sub><i>A</i></sub>) = 7.5<i>RT</i><sub><i>A</i></sub>. <i>Q</i><sub><i>AB</i></sub> = 10.5<i>RT</i><sub><i>A</i></sub> > 0.<br>BC: Isochoric (<i>V</i> = 3<i>V</i><sub>0</sub>). <i>W</i><sub><i>BC</i></sub> = 0. Δ<i>U</i><sub><i>BC</i></sub> = 1.5<i>R</i>(<i>T</i><sub><i>C</i></sub> − <i>T</i><sub><i>B</i></sub>) = 1.5<i>R</i>(−3<i>T</i><sub><i>A</i></sub>) = −4.5<i>RT</i><sub><i>A</i></sub>. <i>Q</i><sub><i>BC</i></sub> = −4.5<i>RT</i><sub><i>A</i></sub> < 0.<br>CA: Isobaric (<i>P</i> = <i>P</i><sub>0</sub>). <i>W</i><sub><i>CA</i></sub> = <i>P</i><sub>0</sub>(<i>V</i><sub>0</sub> − 3<i>V</i><sub>0</sub>) = −2<i>P</i><sub>0</sub><i>V</i><sub>0</sub> = −2<i>RT</i><sub><i>A</i></sub>. Δ<i>U</i><sub><i>CA</i></sub> = 1.5<i>R</i>(−2<i>T</i><sub><i>A</i></sub>) = −3<i>RT</i><sub><i>A</i></sub>. <i>Q</i><sub><i>CA</i></sub> = −5<i>RT</i><sub><i>A</i></sub> < 0.<br><i>W</i><sub>net</sub> = 3 − 2 = <i>RT</i><sub><i>A</i></sub>. <i>Q</i><sub>in</sub> = 10.5<i>RT</i><sub><i>A</i></sub>. <i>η</i> = 1/10.5 ≈ 9.5%.',
          },
        ],
      },
    ],
  },
];
