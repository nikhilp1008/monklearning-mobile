import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topic 01, Electrochemical Cells & Nernst Equation: pp. 59–67 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1 to
 * 8. The chapter's title page (p. 58) and contents (top of p. 59) are not copied.
 * Figure 2.1 (cited p. 62, drawn p. 63) sits at the book's reference, after the
 * procedure for reading a cell; it is redrawn in lib/diagrams/chemistry-12-02.ts.
 * The MCQ options, which the book runs on in one block (errata), are separate.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 59–67 ─────────────────────────
  {
    n: '01',
    title: 'Electrochemical Cells & Nernst Equation',
    kalam: 'The Nernst equation is the tool that corrects E°cell for any real concentration.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial high-yield topic. CBSE Boards routinely ask a 3-mark cell-representation + <i>E</i>°<sub>cell</sub> numerical or a 2-mark Nernst statement. NEET picks one conceptual MCQ on spontaneity/electrode polarity almost every year. JEE Main reliably sets one Nernst or Δ<i>G</i>–<i>E</i>°–<i>K</i> numerical, and JEE Advanced layers it with equilibrium, pH, or solubility for a multi-step problem.',
      },
      {
        t: 'p',
        html: 'Imagine two water tanks on a rooftop connected by a pipe. If one tank is higher, water rushes from high to low until the levels equalise. The height difference drives the flow; once levels match, flow stops. An electrochemical cell is exactly this picture — except the “water” is electrons and the “height” is electrical potential.',
      },
      {
        t: 'p',
        html: 'A <b>galvanic (voltaic) cell</b> is a device that lets a spontaneous redox reaction push electrons through an external wire, turning chemical energy into electrical energy. The classic example is the Daniell cell, built from zinc and copper:<br>Zn(s) + Cu<sup>2+</sup>(aq) → Zn<sup>2+</sup>(aq) + Cu(s)',
      },
      {
        t: 'p',
        html: 'Zinc wants to give up electrons more than copper does. So at the zinc electrode, zinc atoms dissolve, leaving electrons behind — this is <b>oxidation</b>, and this electrode is the <b>anode</b>. Those electrons travel through the wire to the copper electrode, where copper ions grab them and plate out as copper metal — <b>reduction</b>, at the <b>cathode</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a busy Mumbai local-train platform. Electrons are commuters who desperately want to get from the crowded Zn platform (high potential energy, eager to leave) to the emptier Cu platform. The wire is the train track; the <b>salt bridge</b> is the foot-overbridge that lets ions (not electrons) shuffle across to keep each platform electrically neutral — without it, charge piles up and everyone stops moving. Pull the salt bridge out and the cell goes dead instantly: the voltmeter drops to zero.',
      },
      {
        t: 'p',
        html: 'The salt bridge does its job quietly but indispensably. As Zn<sup>2+</sup> pours into the anode beaker, that solution would turn net-positive and repel further oxidation; meanwhile the cathode beaker loses Cu<sup>2+</sup> and would turn net-negative. The bridge — typically a gel of KCl or KNO<sub>3</sub> — feeds anions toward the anode and cations toward the cathode, neutralising both build-ups so the reaction can keep running. It completes the circuit internally the way the wire completes it externally.',
      },
      {
        t: 'p',
        html: 'There is also a neat way to rank every species’ eagerness to be reduced: the <b>electrochemical series</b>, a table of standard electrode potentials. Read it like a leaderboard. Fluorine sits at the top with the most positive value, meaning F<sub>2</sub> grabs electrons hardest — the strongest oxidising agent. Lithium sits at the bottom with the most negative value, so lithium metal gives up electrons most readily — the strongest reducing agent. As you slide down the table the reduction potential falls: the species on the left become weaker oxidisers, and the metals on the right become stronger reducers. This single table lets you predict, at a glance, which metal will displace another and which way any cell will run — a genuinely Indian-bazaar intuition of “who outbids whom” for electrons.',
      },
      {
        t: 'p',
        html: 'A few intuitions worth locking in:<br>• The <b>anode is negative</b> and the <b>cathode is positive</b> in a galvanic cell. Electrons flow anode → cathode through the wire; conventional current flows the opposite way.<br>• We can never measure the potential of a single electrode in isolation — only the difference between two. It is like altitude: you can only state a height relative to a chosen sea level. Chemistry’s “sea level” is the <b>Standard Hydrogen Electrode (SHE)</b>, assigned exactly 0 V.<br>• The <b>cell potential</b> (or emf, when no current is drawn) measures how hard the reaction pushes electrons. The bigger the “height difference” in electrode potentials, the bigger the voltage.',
      },
      {
        t: 'p',
        html: 'But standard electrode potentials are quoted for a very specific situation: <b>all ion concentrations at 1 M, gases at 1 bar, 298 K</b>. Real cells rarely sit at these conditions, and as the cell runs, concentrations change. The <b>Nernst equation</b> is the tool that corrects <i>E</i>°<sub>cell</sub> for any real concentration.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean form <i>E</i> = <i>E</i>° − (0.0591/<i>n</i>) log <i>Q</i> assumes (i) temperature is exactly 298 K — the constant 0.0591 bakes in <i>T</i> = 298 K; (ii) we use concentrations, valid only in dilute solution where concentration ≈ activity; (iii) pure solids and pure liquids are assigned activity 1 and are left out of <i>Q</i>. Outside 298 K you must revert to the full 2.303<i>RT</i>/(<i>nF</i>) form. At equilibrium the cell is “dead”: <i>E</i><sub>cell</sub> = 0, not <i>E</i>°<sub>cell</sub> = 0.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Cell potential from electrode potentials (both as reduction potentials)',
        main: '<i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> = <i>E</i>°<sub>right</sub> − <i>E</i>°<sub>left</sub>',
        legend: [
          '<i>E</i>°<sub>cell</sub> = standard cell potential / emf',
          '<i>E</i>°<sub>cathode</sub> = standard reduction potential of the cathode',
          '<i>E</i>°<sub>anode</sub> = standard reduction potential of the anode',
          '<i>E</i>°<sub>right</sub> = standard reduction potential of the right electrode',
          '<i>E</i>°<sub>left</sub> = standard reduction potential of the left electrode',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Nernst equation (general reaction <i>a</i>A + <i>b</i>B → <i>c</i>C + <i>d</i>D, <i>n</i> electrons)',
        main: '<i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (2.303 <i>RT</i>/(<i>nF</i>)) log <i>Q</i><br><i>Q</i> = [C]<sup><i>c</i></sup>[D]<sup><i>d</i></sup>/([A]<sup><i>a</i></sup>[B]<sup><i>b</i></sup>)<br>At <i>T</i> = 298 K this collapses to the workhorse form:<br><i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log <i>Q</i> (volts)',
        legend: [
          '<i>E</i><sub>cell</sub> = cell potential / emf',
          '<i>E</i>°<sub>cell</sub> = standard cell potential / emf',
          '<i>R</i> = gas constant (8.314 J K<sup>−1</sup> mol<sup>−1</sup>)',
          '<i>T</i> = temperature (K)',
          '<i>n</i> = number of electrons transferred',
          '<i>F</i> = Faraday constant (≈ 96485 C mol<sup>−1</sup>)',
          '<i>Q</i> = reaction quotient',
          '[A], [B] = concentrations of the reactants (pressures for gases)',
          '[C], [D] = concentrations of the products (pressures for gases)',
          '<i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> = coefficients in the reaction',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Gibbs energy linkage',
        main: 'Δ<sub>r</sub><i>G</i> = −<i>nFE</i><sub>cell</sub><br>Δ<sub>r</sub><i>G</i>° = −<i>nFE</i>°<sub>cell</sub>',
        legend: [
          'Δ<sub>r</sub><i>G</i> = Gibbs energy of reaction',
          'Δ<sub>r</sub><i>G</i>° = standard Gibbs energy of reaction',
          '<i>n</i> = number of electrons transferred',
          '<i>F</i> = Faraday constant (≈ 96485 C mol<sup>−1</sup>)',
          '<i>E</i><sub>cell</sub> = cell potential / emf',
          '<i>E</i>°<sub>cell</sub> = standard cell potential / emf',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equilibrium constant from standard emf',
        main: '<i>E</i>°<sub>cell</sub> = (0.0591/<i>n</i>) log <i>K</i><sub>c</sub> ⇒ log <i>K</i><sub>c</sub> = <i>nE</i>°<sub>cell</sub>/0.0591',
        legend: [
          '<i>E</i>°<sub>cell</sub> = standard cell potential / emf',
          '<i>n</i> = number of electrons transferred',
          '<i>K</i><sub>c</sub> = equilibrium constant',
          '0.0591 holds at 298 K',
        ],
        note: null,
      },
      {
        t: 'table',
        title: 'Symbols and units',
        head: ['Symbol', 'Meaning', 'SI unit', 'Dimensional formula'],
        rows: [
          ['<i>E</i><sub>cell</sub>, <i>E</i>°<sub>cell</sub>', 'cell potential / emf', 'volt (V)', '[M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]'],
          ['<i>n</i>', 'number of electrons transferred', 'dimensionless', '—'],
          ['<i>F</i>', 'Faraday constant (≈ 96485)', 'C mol<sup>−1</sup>', '[A T mol<sup>−1</sup>]'],
          ['<i>R</i>', 'gas constant (8.314)', 'J K<sup>−1</sup> mol<sup>−1</sup>', '[M L<sup>2</sup> T<sup>−2</sup> K<sup>−1</sup> mol<sup>−1</sup>]'],
          ['<i>Q</i>', 'reaction quotient', 'dimensionless', '—'],
          ['Δ<sub>r</sub><i>G</i>', 'Gibbs energy of reaction', 'J mol<sup>−1</sup>', '[M L<sup>2</sup> T<sup>−2</sup> mol<sup>−1</sup>]'],
        ],
      },
      {
        t: 'p',
        html: 'The number 0.0591 = (2.303 × 8.314 × 298)/96485. Memorise it; examiners love checking whether you remember it is per-electron, i.e. divided by <i>n</i>.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — The Nernst equation for an electrode</b><br>Consider a single electrode reaction in which a metal ion is reduced:<br>M<sup><i>n</i>+</sup>(aq) + <i>n</i>e<sup>−</sup> → M(s)',
      },
      {
        t: 'p',
        html: 'From thermodynamics, the Gibbs energy of a reaction relates to the standard value and the reaction quotient by Δ<sub>r</sub><i>G</i> = Δ<sub>r</sub><i>G</i>° + <i>RT</i> ln <i>Q</i>. <b>Why this step?</b> Because <i>Q</i> encodes how far the actual concentrations sit from the standard state — it is the thermodynamic “correction” for non-standard conditions.',
      },
      {
        t: 'p',
        html: 'Now substitute the electrical expressions Δ<sub>r</sub><i>G</i> = −<i>nFE</i> and Δ<sub>r</sub><i>G</i>° = −<i>nFE</i>°. <b>Why?</b> This is the bridge that converts a thermodynamic statement into an electrical one — the whole reason an electrochemical cell can be analysed with Δ<i>G</i>:<br>−<i>nFE</i> = −<i>nFE</i>° + <i>RT</i> ln <i>Q</i>',
      },
      {
        t: 'p',
        html: 'Divide through by −<i>nF</i>:<br><i>E</i> = <i>E</i>° − (<i>RT</i>/(<i>nF</i>)) ln <i>Q</i>',
      },
      {
        t: 'p',
        html: 'For the half-cell above, <i>Q</i> = 1/[M<sup><i>n</i>+</sup>] — the solid M has activity 1 and never enters <i>Q</i>. Converting ln to log<sub>10</sub> (factor 2.303) and inserting <i>R</i>, <i>T</i> = 298 K, <i>F</i>:<br><i>E</i>(M<sup><i>n</i>+</sup>/M) = <i>E</i>°(M<sup><i>n</i>+</sup>/M) − (0.0591/<i>n</i>) log (1/[M<sup><i>n</i>+</sup>])',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Cell emf and the relation to <i>K</i><sub>c</sub></b><br>For a full cell, write Nernst for cathode and anode separately, then subtract (<i>E</i><sub>cell</sub> = <i>E</i><sub>cathode</sub> − <i>E</i><sub>anode</sub>). The two log terms combine into a single <i>Q</i> for the overall reaction:<br><i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log <i>Q</i>',
      },
      {
        t: 'p',
        html: 'As the cell discharges, products build up, <i>Q</i> rises, and <i>E</i><sub>cell</sub> falls. <b>Why must it stop?</b> Eventually the reaction reaches equilibrium: there is no longer any net driving force, so <i>E</i><sub>cell</sub> = 0 and <i>Q</i> = <i>K</i><sub>c</sub>. Setting <i>E</i><sub>cell</sub> = 0:<br>0 = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log <i>K</i><sub>c</sub> ⇒ <i>E</i>°<sub>cell</sub> = (0.0591/<i>n</i>) log <i>K</i><sub>c</sub>',
      },
      {
        t: 'p',
        html: 'This is powerful: equilibrium constants that are almost impossible to measure directly (think <i>K</i> ∼ 10<sup>37</sup>) drop out of a single voltmeter reading.',
      },
      {
        t: 'proc',
        title: 'Procedure — Reading a cell from its line notation',
        steps: [
          '<b>Anode on the left, cathode on the right</b> (IUPAC convention). A single bar | marks a phase boundary; a double bar ‖ marks the salt bridge.',
          'Write the <b>left</b> electrode as oxidation, the <b>right</b> as reduction.',
          'Add the half-reactions (balancing electrons) to get the overall cell reaction.',
          'Compute <i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>right</sub> − <i>E</i>°<sub>left</sub>. If positive, the reaction as written is spontaneous under standard conditions and the notation is “correct” (galvanic).',
        ],
      },
      { t: 'fig', id: 'c12-02-fig-2.1' },
      {
        t: 'p',
        html: '<b>Procedure — Inert electrodes and reference electrodes</b><br>Not every half-cell contains a metal that takes part in the reaction. For redox couples that are entirely in solution or involve a gas — say Fe<sup>3+</sup>/Fe<sup>2+</sup>, or the H<sup>+</sup>/H<sub>2</sub> couple — we need a chemically unreactive conductor to ferry electrons in and out. <b>Inert electrodes</b> such as platinum or gold do exactly this: they do not participate in the chemistry but provide a surface for oxidation or reduction and a path for electrons. The hydrogen electrode Pt(s) | H<sub>2</sub>(g) | H<sup>+</sup>(aq) is the headline example.',
      },
      {
        t: 'p',
        html: 'That same hydrogen electrode, run at standard conditions (1 M H<sup>+</sup>, 1 bar H<sub>2</sub>, 298 K) and defined as 0 V, is the <b>Standard Hydrogen Electrode (SHE)</b> — our universal zero. To find any unknown standard electrode potential, you couple that electrode to the SHE and read the cell emf; with the SHE on the left, <i>E</i>°<sub>left</sub> is zero, so the emf of that cell, sign included, is the unknown’s <i>E</i>°.',
      },
      {
        t: 'p',
        html: 'In practice the SHE is fiddly — it needs a constant stream of pure, dry hydrogen at exactly one bar. So laboratories lean on <b>secondary reference electrodes</b> whose potentials are already fixed against the SHE and which are far easier to handle: the <b>calomel electrode</b> and the <b>silver–silver chloride</b> electrode are the two you must know. They behave like a pre-calibrated measuring stick: stable, portable, and traceable back to the hydrogen zero.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Given <i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V and <i>E</i>°(Ni<sup>2+</sup>/Ni) = −0.25 V, set up the galvanic cell, write its reaction, and find <i>E</i>°<sub>cell</sub>.',
        steps: [
          'The more negative reduction potential oxidises; nickel is the anode, silver the cathode.',
          'Anode (oxidation): Ni(s) → Ni<sup>2+</sup>(aq) + 2e<sup>−</sup>; Cathode (reduction): Ag<sup>+</sup>(aq) + e<sup>−</sup> → Ag(s) — multiply by 2 to balance electrons.',
          'Overall: Ni(s) + 2Ag<sup>+</sup>(aq) → Ni<sup>2+</sup>(aq) + 2Ag(s)',
          'Cell: Ni(s) | Ni<sup>2+</sup>(aq) ‖ Ag<sup>+</sup>(aq) | Ag(s)',
          '<i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> = 0.80 − (−0.25)',
          'The positive value confirms the reaction is spontaneous under standard conditions. <b>(Units: volts.)</b>',
        ],
        ans: '<i>E</i>°<sub>cell</sub> = 1.05 V',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'For the cell Zn | Zn<sup>2+</sup> ‖ Cu<sup>2+</sup> | Cu, both [Zn<sup>2+</sup>] and [Cu<sup>2+</sup>] are simultaneously doubled. How does <i>E</i><sub>cell</sub> change?',
        steps: [
          '<b>Trap:</b> students reflexively reach for the Nernst equation and start computing two log terms.',
          '<b>Speed solution.</b> The quotient is <i>Q</i> = [Zn<sup>2+</sup>]/[Cu<sup>2+</sup>]. Doubling both leaves the ratio unchanged: 2[Zn<sup>2+</sup>]/(2[Cu<sup>2+</sup>]) = [Zn<sup>2+</sup>]/[Cu<sup>2+</sup>]. Since <i>Q</i> is unchanged, <i>E</i><sub>cell</sub> is <b>unchanged</b>. No calculation needed — recognise that <i>Q</i> is a ratio.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A cell is built from <i>E</i>°(Fe<sup>2+</sup>/Fe) = −0.44 V and <i>E</i>°(Cu<sup>2+</sup>/Cu) = +0.34 V. Find (a) <i>E</i>°<sub>cell</sub>, (b) Δ<sub>r</sub><i>G</i>°, and (c) <i>K</i><sub>c</sub> at 298 K. (<i>F</i> = 96485 C mol<sup>−1</sup>.)',
        steps: [
          'Iron oxidises (more negative), copper reduces; <i>n</i> = 2. Overall: Fe(s) + Cu<sup>2+</sup>(aq) → Fe<sup>2+</sup>(aq) + Cu(s).',
          '(a) <i>E</i>°<sub>cell</sub> = 0.34 − (−0.44)',
          '(b) Δ<sub>r</sub><i>G</i>° = −<i>nFE</i>°<sub>cell</sub> = −(2)(96485)(0.78) = −1.505 × 10<sup>5</sup> J mol<sup>−1</sup>',
          '(c) log <i>K</i><sub>c</sub> = <i>nE</i>°<sub>cell</sub>/0.0591 = (2 × 0.78)/0.0591 = 26.4',
          'The huge <i>K</i><sub>c</sub> tells us the reaction runs essentially to completion — exactly why copper plates out cleanly on an iron nail dipped in copper sulphate.',
        ],
        ans: '(a) <i>E</i>°<sub>cell</sub> = 0.78 V; (b) Δ<sub>r</sub><i>G</i>° ≈ −150.5 kJ mol<sup>−1</sup> (−1.5 × 10<sup>2</sup> kJ mol<sup>−1</sup> to two significant figures); (c) <i>K</i><sub>c</sub> ≈ 2.5 × 10<sup>26</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For Zn | Zn<sup>2+</sup> (0.10 M) ‖ Ag<sup>+</sup> (0.010 M) | Ag with <i>E</i>°(Zn<sup>2+</sup>/Zn) = −0.76 V and <i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V at 298 K, (a) compute <i>E</i><sub>cell</sub>, and (b) find the value of [Zn<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup> at which the cell goes dead.',
        steps: [
          'Reaction: Zn(s) + 2Ag<sup>+</sup> → Zn<sup>2+</sup> + 2Ag(s), so <i>n</i> = 2 and <i>Q</i> = [Zn<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup>.',
          '<i>E</i>°<sub>cell</sub> = 0.80 − (−0.76) = 1.56 V.',
          '(a) <i>Q</i> = 0.10/(0.010)<sup>2</sup> = 0.10/(1.0 × 10<sup>−4</sup>) = 1.0 × 10<sup>3</sup>.<br><i>E</i><sub>cell</sub> = 1.56 − (0.0591/2) log(10<sup>3</sup>) = 1.56 − 0.02955(3) = 1.56 − 0.0887',
          '(b) “Dead” means <i>E</i><sub>cell</sub> = 0, i.e. <i>Q</i> = <i>K</i><sub>c</sub>:<br>log <i>K</i><sub>c</sub> = <i>nE</i>°<sub>cell</sub>/0.0591 = (2 × 1.56)/0.0591 = 52.8',
          'The ratio must climb to ∼ 10<sup>52</sup> before the cell stops — practically, the silver ions are consumed almost entirely first. This is the rigorous statement of “the cell discharges until equilibrium.”',
        ],
        ans: '(a) <i>E</i><sub>cell</sub> = 1.47 V; (b) [Zn<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup> = <i>K</i><sub>c</sub> ≈ 6 × 10<sup>52</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the cell notation and compute <i>E</i>°<sub>cell</sub> for a cell using Al<sup>3+</sup>/Al (−1.66 V) and Cu<sup>2+</sup>/Cu (+0.34 V).',
            a: 'Al | Al<sup>3+</sup> ‖ Cu<sup>2+</sup> | Cu, <i>E</i>°<sub>cell</sub> = 2.00 V.',
          },
          {
            q: '[NEET] In a galvanic cell the salt bridge is removed. State and justify what the voltmeter reads.',
            a: '0 V — without the bridge the circuit is broken and charge build-up halts ion movement.',
          },
          {
            q: '[JEE Main] For a cell with <i>E</i>°<sub>cell</sub> = 0.59 V and <i>n</i> = 2, calculate <i>K</i><sub>c</sub> at 298 K.',
            a: '<i>K</i><sub>c</sub> ≈ 1.0 × 10<sup>20</sup> (log <i>K</i><sub>c</sub> = 1.18/0.0591 = 19.97; unrounded, <i>K</i><sub>c</sub> = 9.3 × 10<sup>19</sup>).',
          },
          {
            q: '[JEE Main] Compute the electrode potential of a copper electrode dipped in 0.010 M Cu<sup>2+</sup> at 298 K, given <i>E</i>°(Cu<sup>2+</sup>/Cu) = +0.34 V.',
            a: '0.281 V (0.28 V to two significant figures).',
          },
          {
            q: '[JEE Advanced] For Pt | H<sub>2</sub> (1 bar) | H<sup>+</sup> (pH = 3) ‖ Cu<sup>2+</sup> (1 M) | Cu, find <i>E</i><sub>cell</sub> given <i>E</i>°(Cu<sup>2+</sup>/Cu) = +0.34 V. (<i>n</i> = 2.)',
            a: '0.34 − (0.0591/2) log ([H<sup>+</sup>]<sup>2</sup>/[Cu<sup>2+</sup>]); with [H<sup>+</sup>] = 10<sup>−3</sup>, <i>E</i><sub>cell</sub> = 0.34 − 0.02955 log(10<sup>−6</sup>) = 0.34 + 0.177 = 0.517 V (0.52 V to two significant figures).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the Daniell cell, when the external opposing voltage is increased beyond 1.10 V, the cell:',
        opts: [
          { label: 'keeps working as before', nudge: '<b>(a)</b> ignores that the driving force is overcome.' },
          {
            label: 'stops completely',
            nudge: '<b>(b)</b> is the special case at exactly 1.10 V, where current is zero — a classic trap for students who stop reading at “opposing.”',
          },
          { label: 'reverses — Zn deposits and Cu dissolves', nudge: null },
          { label: 'explodes', nudge: '<b>(d)</b> is a nonsense distractor.' },
        ],
        correct: 2,
        solution: 'Above the cell’s own emf, the external source overpowers it and drives the reaction backward — it now behaves as an electrolytic cell, plating Zn and dissolving Cu.',
      },
      {
        t: 'mcq',
        q: 'For a cell reaction that is spontaneous under standard conditions, which is necessarily true?',
        opts: [
          {
            label: '<i>E</i>°<sub>cell</sub> < 0',
            nudge: '<b>(a)</b> and <b>(b)</b> are sign-flipped versions — the single most common error.',
          },
          {
            label: 'Δ<sub>r</sub><i>G</i>° > 0',
            nudge: '<b>(a)</b> and <b>(b)</b> are sign-flipped versions — the single most common error.',
          },
          { label: '<i>E</i>°<sub>cell</sub> > 0 and Δ<sub>r</sub><i>G</i>° < 0', nudge: null },
          {
            label: '<i>K</i><sub>c</sub> < 1',
            nudge: '<b>(d)</b> follows from the same sign slip via log <i>K</i><sub>c</sub> = <i>nE</i>°/0.0591.',
          },
        ],
        correct: 2,
        solution: 'Spontaneity under standard conditions needs Δ<sub>r</sub><i>G</i>° < 0, and since Δ<sub>r</sub><i>G</i>° = −<i>nFE</i>°<sub>cell</sub>, this forces <i>E</i>°<sub>cell</sub> > 0 (and hence <i>K</i><sub>c</sub> > 1). At any other concentrations the test is Δ<sub>r</sub><i>G</i> < 0, that is <i>E</i><sub>cell</sub> > 0.',
      },
      {
        t: 'mcq',
        q: 'The SHE is assigned a potential of exactly zero because:',
        opts: [
          {
            label: 'hydrogen has only one electron',
            nudge: '<b>(a)</b> and <b>(d)</b> are true facts about hydrogen but irrelevant to the convention.',
          },
          { label: 'it is a reference chosen by convention', nudge: null },
          { label: 'hydrogen never reacts', nudge: '<b>(c)</b> is chemically false.' },
          {
            label: 'it is the lightest element',
            nudge: '<b>(a)</b> and <b>(d)</b> are true facts about hydrogen but irrelevant to the convention.',
          },
        ],
        correct: 1,
        solution: 'Absolute single-electrode potentials cannot be measured, so one electrode is defined as the zero reference — the SHE.',
      },
      {
        t: 'mcq',
        q: 'As a galvanic cell discharges over time, <i>E</i><sub>cell</sub>:',
        opts: [
          { label: 'stays constant until the cell dies', nudge: '<b>(a)</b> confuses emf with a battery’s “rated” voltage.' },
          { label: 'increases', nudge: '<b>(b)</b> is the wrong direction.' },
          { label: 'decreases toward zero', nudge: null },
          {
            label: 'becomes negative',
            nudge: '<b>(d)</b> overshoots — the cell stops at zero; it does not go negative on its own.',
          },
        ],
        correct: 2,
        solution: 'Products accumulate, <i>Q</i> rises, and per Nernst the subtracted (0.0591/<i>n</i>) log <i>Q</i> term grows, pulling <i>E</i><sub>cell</sub> down until <i>E</i><sub>cell</sub> = 0 at equilibrium.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Anode/cathode sign confusion.</b> In a galvanic cell, anode is − and cathode is <b>+</b>; in an electrolytic cell the signs flip. Mixing the two conventions costs easy marks.',
          '<b>Forgetting <i>n</i> in the log term.</b> The Nernst constant is 0.0591/<i>n</i>, not 0.0591. For <i>n</i> = 2 it is 0.02955. Always identify <i>n</i> from the balanced electron count first.',
          '<b>Putting solids/liquids into <i>Q</i>.</b> Pure metals, pure solids, and pure liquids have activity 1 and never appear in <i>Q</i>. Only dissolved ions and gas pressures do.',
          '<b>Confusing <i>E</i><sub>cell</sub> = 0 with <i>E</i>°<sub>cell</sub> = 0.</b> At equilibrium the actual emf is zero; the standard emf is a fixed constant at a given temperature, nonzero except in a concentration cell (Topic 04).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “does the value change?” questions, don’t compute — inspect <i>Q</i>. If a concentration change leaves the ratio in <i>Q</i> untouched, <i>E</i> is unchanged. And for spontaneity under standard conditions, a positive <i>E</i>°<sub>cell</sub> and negative Δ<sub>r</sub><i>G</i>° always travel together — check one, you know the other.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Galvanic cell',
            note: 'spontaneous redox → electricity. Anode = oxidation = −; Cathode = reduction = <b>+</b>. Electrons flow anode→cathode.',
          },
          { f: 'Notation', note: 'anode-left, cathode-right; | = phase boundary, ‖ = salt bridge.' },
          {
            f: 'Standard emf',
            note: '<i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> (reduction potentials).',
          },
          {
            f: 'Nernst (298 K)',
            note: '<i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log <i>Q</i>.',
          },
          {
            f: 'Thermo links',
            note: 'Δ<sub>r</sub><i>G</i> = −<i>nFE</i><sub>cell</sub>; Δ<sub>r</sub><i>G</i>° = −<i>nFE</i>°<sub>cell</sub>; log <i>K</i><sub>c</sub> = <i>nE</i>°<sub>cell</sub>/0.0591.',
          },
          {
            f: 'Dead cell',
            note: '<i>E</i><sub>cell</sub> = 0, <i>Q</i> = <i>K</i><sub>c</sub> (not <i>E</i>°<sub>cell</sub> = 0).',
          },
        ],
        aids: [
          '“An Ox, Red Cat” — <b>An</b>ode = <b>Ox</b>idation, <b>Red</b>uction = <b>Cat</b>hode.',
          '“FAT CAT” — electrons <b>F</b>low from <b>A</b>node <b>T</b>o <b>CAT</b>hode, in both cell types (helps keep the two cell types straight).',
          'The Nernst log term is negative and per-electron: “minus oh-point-oh-five-nine-one over n.”',
        ],
      },
    ],
  },
];
