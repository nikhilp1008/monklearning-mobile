import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topic 04 and Additional topics A and B, word for word from the
 * Class 12 Chemistry Master Reference.
 *
 * Topic 04 "Concentration Cells & Reference Tables" is the book's "Chapter 2
 * Capstone" (pp. 85–88), a regular topic by the founder's decision of
 * 2026-11-03: its Part A (the bold leads A1–A3, the worked examples of A4, the
 * MCQ of A5), its Part B (the tables B1–B3) and its Topic Mastery Checklist.
 * Its "How to use this section" box and "Part C — Complete Chapter Formula
 * Sheet" are not copied: the app's Formula sheet does that job.
 *
 * Then the shared opening of "Chapter 2: Electrochemistry — Additional Topics"
 * (p. 89, set at the head of A's Introduction), A Combining Half-Cell
 * Potentials: Add ΔG, Never E (pp. 89–91) and B The Nernst Equation as a
 * Measuring Instrument (pp. 91–93; Addendum C begins part-way down p. 93). Each
 * practice answer, printed in brackets after its question, is set with it.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 85–88 ─────────────────────────
  {
    n: '04',
    title: 'Concentration Cells & Reference Tables',
    kalam: 'You can build a working cell from two identical electrodes dipping in solutions of the same ion at different concentrations.',
    blocks: [
      { t: 'part', title: 'Concentration cells' },
      {
        t: 'p',
        html: '<b>The idea.</b> Every cell so far paired two different electrodes. But you can build a working cell from <b>two identical electrodes</b> dipping in solutions of the <b>same ion at different concentrations</b>. There is no chemical difference between the two sides — the only driving force is the concentration gap, exactly like gas rushing from high pressure to low. Nature wants the two concentrations equal, and on the way to equalising them it pushes a current.',
      },
      {
        t: 'p',
        html: 'Take two zinc rods, one in dilute Zn<sup>2+</sup> and one in concentrated Zn<sup>2+</sup>:<br>Zn | Zn<sup>2+</sup> (<i>c</i><sub>1</sub>, dilute) ‖ Zn<sup>2+</sup> (<i>c</i><sub>2</sub>, concentrated) | Zn',
      },
      {
        t: 'p',
        html: 'The <b>concentrated side is reduced (cathode)</b> — its surplus ions plate out — while the <b>dilute side is oxidised (anode)</b> — its rod dissolves to top up the ions. The cell runs until <i>c</i><sub>1</sub> = <i>c</i><sub>2</sub>, at which point it is dead.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> it is a cell that exists purely to “average out” a concentration imbalance. Because both half-cells are chemically identical, the standard potentials cancel exactly: <i>E</i>°<sub>cell</sub> = 0. The entire emf comes from the Nernst log term.',
      },
      {
        t: 'p',
        html: '<b>Key formula.</b> Setting <i>E</i>°<sub>cell</sub> = 0 in the Nernst equation, with <i>Q</i> = <i>c</i><sub>anode</sub>/<i>c</i><sub>cathode</sub>:',
      },
      {
        t: 'formula',
        kicker: 'Concentration cell',
        main: '<i>E</i><sub>cell</sub> = (0.0591/<i>n</i>) log(<i>c</i><sub>cathode</sub>/<i>c</i><sub>anode</sub>) (at 298 K)',
        legend: [
          '<i>E</i><sub>cell</sub> = cell potential / emf',
          '<i>n</i> = number of electrons transferred',
          '<i>c</i><sub>cathode</sub> = ion concentration at the cathode',
          '<i>c</i><sub>anode</sub> = ion concentration at the anode',
          '<i>c</i><sub>cathode</sub> > <i>c</i><sub>anode</sub> for a spontaneous cell',
        ],
        note: 'The emf is small (millivolts) and shrinks to zero as the concentrations converge.',
      },
      {
        t: 'p',
        html: '<b>Quick derivation.</b> For the net process Zn<sup>2+</sup>(<i>c</i><sub>2</sub>) → Zn<sup>2+</sup>(<i>c</i><sub>1</sub>), the Nernst equation gives<br><i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log(<i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>) = 0 − (0.0591/<i>n</i>) log(<i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>) = (0.0591/<i>n</i>) log(<i>c</i><sub>2</sub>/<i>c</i><sub>1</sub>)<br>Since <i>c</i><sub>2</sub> (cathode) > <i>c</i><sub>1</sub> (anode), the log is positive and <i>E</i><sub>cell</sub> > 0 — the cell is spontaneous, as expected.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / NEET Level',
        q: 'Calculate the emf at 298 K of: Zn | Zn<sup>2+</sup> (0.001 M) ‖ Zn<sup>2+</sup> (0.10 M) | Zn.',
        steps: [
          '<i>n</i> = 2; cathode (higher conc) = 0.10 M, anode = 0.001 M.',
          '<i>E</i><sub>cell</sub> = (0.0591/2) log(0.10/0.001) = 0.02955 × log(100) = 0.02955 × 2',
        ],
        ans: '<i>E</i><sub>cell</sub> = 0.0591 V',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A copper concentration cell has <i>c</i><sub>cathode</sub> = 1.0 M and develops <i>E</i><sub>cell</sub> = 0.0295 V at 298 K. Find the concentration at the anode. (<i>n</i> = 2.)',
        steps: [
          '0.0295 = (0.0591/2) log(1.0/<i>c</i><sub>anode</sub>) ⇒ log(1.0/<i>c</i><sub>anode</sub>) = 1.0 ⇒ 1.0/<i>c</i><sub>anode</sub> = 10',
        ],
        ans: '<i>c</i><sub>anode</sub> = 0.10 M',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For Ag | Ag<sup>+</sup> (<i>x</i> M) ‖ Ag<sup>+</sup> (1.0 M) | Ag, the emf is 0.118 V at 298 K. Find <i>x</i>, and state what happens to the emf as the cell discharges. (<i>n</i> = 1.)',
        steps: [
          '0.118 = 0.0591 log(1.0/<i>x</i>) ⇒ log(1.0/<i>x</i>) = 2',
          'As the cell runs, the dilute side (0.01 M) grows more concentrated and the 1.0 M side gets diluted, so the ratio → 1, the log → 0, and <i>E</i><sub>cell</sub> <b>falls to zero</b> — the concentration cell dies when the two sides equalise.',
        ],
        ans: '<i>x</i> = 0.01 M',
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a concentration cell, the electrode dipped in the <b>more concentrated</b> solution acts as the:',
        opts: [
          { label: 'anode and is oxidised', nudge: '<b>(a)</b> reverses the roles — the commonest error.' },
          { label: 'cathode and is reduced', nudge: null },
          { label: 'anode and is reduced', nudge: '<b>(c)</b> keeps the reduction but puts it at the wrong electrode: reduction happens at the cathode.' },
          { label: 'cathode and is oxidised', nudge: '<b>(d)</b> mismatches the half-reaction with the electrode.' },
        ],
        correct: 1,
        solution: 'The concentrated side has surplus ions that are reduced (plated out), making it the cathode; the dilute side dissolves (anode, oxidation) to replenish ions.',
      },

      { t: 'part', title: 'Master reference tables' },
      {
        t: 'p',
        html: '<b>Standard Electrode (Reduction) Potentials at 298 K.</b> Listed strongest oxidising agent (top) to strongest reducing agent (bottom). The more positive <i>E</i>°, the greater the tendency to be <b>reduced</b>.',
      },
      {
        t: 'defgrid',
        title: 'Half-reaction (reduction) — E° / V',
        rows: [
          { k: 'F<sub>2</sub> + 2e<sup>−</sup> → 2F<sup>−</sup>', v: '+2.87' },
          { k: 'MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O', v: '+1.51' },
          { k: 'Au<sup>3+</sup> + 3e<sup>−</sup> → Au', v: '+1.40' },
          { k: 'Cl<sub>2</sub> + 2e<sup>−</sup> → 2Cl<sup>−</sup>', v: '+1.36' },
          { k: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O', v: '+1.33' },
          { k: 'O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O', v: '+1.23' },
          { k: 'Br<sub>2</sub> + 2e<sup>−</sup> → 2Br<sup>−</sup>', v: '+1.09' },
          { k: 'Ag<sup>+</sup> + e<sup>−</sup> → Ag', v: '+0.80' },
          { k: 'Fe<sup>3+</sup> + e<sup>−</sup> → Fe<sup>2+</sup>', v: '+0.77' },
          { k: 'Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu', v: '+0.34' },
          { k: 'AgCl + e<sup>−</sup> → Ag + Cl<sup>−</sup>', v: '+0.22' },
          { k: '2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub> (SHE)', v: '0.00' },
          { k: 'Pb<sup>2+</sup> + 2e<sup>−</sup> → Pb', v: '−0.13' },
          { k: 'Sn<sup>2+</sup> + 2e<sup>−</sup> → Sn', v: '−0.14' },
          { k: 'Ni<sup>2+</sup> + 2e<sup>−</sup> → Ni', v: '−0.25' },
          { k: 'Fe<sup>2+</sup> + 2e<sup>−</sup> → Fe', v: '−0.44' },
          { k: 'Cr<sup>3+</sup> + 3e<sup>−</sup> → Cr', v: '−0.74' },
          { k: 'Zn<sup>2+</sup> + 2e<sup>−</sup> → Zn', v: '−0.76' },
          { k: 'Al<sup>3+</sup> + 3e<sup>−</sup> → Al', v: '−1.66' },
          { k: 'Mg<sup>2+</sup> + 2e<sup>−</sup> → Mg', v: '−2.36' },
          { k: 'Na<sup>+</sup> + e<sup>−</sup> → Na', v: '−2.71' },
          { k: 'Ca<sup>2+</sup> + 2e<sup>−</sup> → Ca', v: '−2.87' },
          { k: 'K<sup>+</sup> + e<sup>−</sup> → K', v: '−2.93' },
          { k: 'Li<sup>+</sup> + e<sup>−</sup> → Li', v: '−3.05' },
        ],
      },
      {
        t: 'p',
        html: '<b>Limiting Molar Ionic Conductivities (<i>λ</i>°) at 298 K.</b> Values in S cm<sup>2</sup> mol<sup>−1</sup>. Note the anomalously high H<sup>+</sup> and OH<sup>−</sup> (Grotthuss “relay” conduction).',
      },
      // The book prints cations and anions side by side in one table; on a phone a row stacks, and pairs ions that
      // have nothing to do with each other (K⁺ with Br⁻), so each list stands alone. Same data.
      {
        t: 'defgrid',
        title: 'Cation — λ°',
        rows: [
          { k: 'H<sup>+</sup>', v: '349.6' },
          { k: 'K<sup>+</sup>', v: '73.5' },
          { k: 'NH<sub>4</sub><sup>+</sup>', v: '73.5' },
          { k: 'Ag<sup>+</sup>', v: '61.9' },
          { k: 'Na<sup>+</sup>', v: '50.1' },
          { k: 'Li<sup>+</sup>', v: '38.7' },
        ],
      },
      {
        t: 'defgrid',
        title: 'Anion — λ°',
        rows: [
          { k: 'OH<sup>−</sup>', v: '199.1' },
          { k: 'Br<sup>−</sup>', v: '78.1' },
          { k: 'Cl<sup>−</sup>', v: '76.3' },
          { k: 'NO<sub>3</sub><sup>−</sup>', v: '71.4' },
          { k: 'CH<sub>3</sub>COO<sup>−</sup>', v: '40.9' },
        ],
      },
      {
        t: 'table',
        title: 'Common Products of Electrolysis',
        head: ['Electrolyte (electrodes)', 'Cathode product', 'Anode product'],
        rows: [
          ['Molten NaCl (inert)', 'Na', 'Cl<sub>2</sub>'],
          ['Concentrated aqueous NaCl (inert)', 'H<sub>2</sub> (+ NaOH)', 'Cl<sub>2</sub>'],
          ['Dilute H<sub>2</sub>SO<sub>4</sub> / water (Pt)', 'H<sub>2</sub>', 'O<sub>2</sub>'],
          ['Aqueous CuSO<sub>4</sub> (Pt)', 'Cu', 'O<sub>2</sub>'],
          ['Aqueous CuSO<sub>4</sub> (Cu electrodes)', 'Cu deposited', 'Cu dissolves (refining)'],
          ['Aqueous AgNO<sub>3</sub> (Pt)', 'Ag', 'O<sub>2</sub>'],
          ['Aqueous CuCl<sub>2</sub> (Pt)', 'Cu', 'Cl<sub>2</sub>'],
        ],
      },

      { t: 'part', title: 'Topic mastery checklist' },
      { t: 'p', html: 'A student who has mastered Chapter 2 can do <b>all</b> of the following:' },
      {
        t: 'p',
        html: '1. Distinguish galvanic vs electrolytic cells, including polarity and energy-conversion direction.<br>2. Write any cell in line notation (anode-left) and compute <i>E</i>°<sub>cell</sub> from electrode potentials.<br>3. Explain the SHE convention and why only potential differences are measurable; use secondary reference electrodes.<br>4. Read the electrochemical series to predict displacement, spontaneity, and oxidising/reducing strength.<br>5. Apply the Nernst equation to electrodes, full cells, and <b>concentration cells</b>.<br>6. Link <i>E</i>°<sub>cell</sub>, Δ<sub>r</sub><i>G</i>°, and <i>K</i><sub>c</sub>, and reason about spontaneity.<br>7. Compute conductivity, molar conductivity, and cell constant, and explain the opposite trends of conductivity and molar conductivity on dilution.<br>8. Apply Kohlrausch’s law to get Λ°<sub>m</sub> of a weak acid, its degree of dissociation <i>α</i>, <i>K</i><sub>a</sub>, and salt solubility.<br>9. Predict products of electrolysis (molten vs aqueous; role of overpotential) and solve Faraday’s-law numericals, including series cells, gas volumes, and current efficiency.<br>10. Describe primary cells (dry, mercury), secondary cells (lead storage, Ni–Cd), and fuel cells, with their reactions.<br>11. Explain corrosion as a micro galvanic cell — its mechanism, accelerating factors, and prevention methods.',
      },
    ],
  },

  // ───────────────────────── Additional topic A · pp. 89–91 ─────────────────────────
  {
    n: 'A',
    title: 'Combining Half-Cell Potentials: Add ΔG, Never E',
    extra: true,
    kalam: 'Electrode potential is an intensive property — a volt is a volt regardless of how many moles react.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers cells and the Nernst equation, conductance and Kohlrausch’s law, Faraday’s laws, batteries and corrosion — and even closes with concentration cells and master tables. What it still owes a strong student is four working skills that the previous-year papers exercise directly. Addendum A teaches the one manipulation of electrode potentials the chapter never states: potentials are combined through Δ<i>G</i>, never by addition. Addendum B turns the Nernst equation into a measuring instrument — per-decade dilution shifts, pH from a hydrogen-electrode cell, and <i>K</i><sub>sp</sub> from emf. Addendum C extends Kohlrausch’s law to polyvalent salts and equivalent conductance, and puts numbers on the ionic-conductivity ordering that exams ask about. Addendum D restores the NCERT numbers on batteries and corrosion that the chapter summarised away. Additional topic E closes with what JEE and NEET actually ask.',
      },
      {
        t: 'p',
        html: 'JEE Main asked this in both 2022 and 2025: given <i>E</i>° for two overlapping half-reactions, find <i>E</i>° for a third. The chapter computes <i>E</i>°<sub>cell</sub> by subtracting electrode potentials — which is valid because, in a full cell, the electrons given up at the anode are exactly the electrons taken up at the cathode, so they cancel. When a third half-reaction is built from two others, the electrons do not cancel, the subtraction fails, and the failure is silent.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The principle.</b> Electrode potential is an intensive property — a volt is a volt regardless of how many moles react. Gibbs energy is extensive — it scales with the reaction as written. So when half-reactions are added or subtracted, Δ<sub>r</sub><i>G</i>° values add (Hess’s law), and <i>E</i>° values do not.',
      },
      {
        t: 'proc',
        title: 'The safe algorithm',
        steps: [
          'Write each half-reaction as a reduction with its electron count <i>n</i><sub><i>i</i></sub>.',
          'Compute Δ<sub>r</sub><i>G</i>°<sub><i>i</i></sub> = −<i>n</i><sub><i>i</i></sub><i>FE</i>°<sub><i>i</i></sub> for each.',
          'Add or subtract the Δ<sub>r</sub><i>G</i>° values to build the target half-reaction.',
          'Divide back: <i>E</i>° = −Δ<sub>r</sub><i>G</i>°<sub>target</sub>/(<i>n</i><sub>target</sub><i>F</i>).',
        ],
      },
      { t: 'p', html: 'Collapsed into one line, for combining two reductions into a third:' },
      {
        t: 'formula',
        kicker: 'Combining two reductions into a third',
        main: '<i>E</i>°<sub>target</sub> = (<i>n</i><sub>1</sub><i>E</i>°<sub>1</sub> + <i>n</i><sub>2</sub><i>E</i>°<sub>2</sub>)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>)',
        legend: [
          '<i>E</i>°<sub>target</sub> = potential of the target half-reaction, the sum of the two reductions',
          '<i>E</i>°<sub>1</sub>, <i>E</i>°<sub>2</sub> = potentials of the two reductions',
          '<i>n</i><sub>1</sub>, <i>n</i><sub>2</sub> = electron counts of the two reductions',
        ],
        note: '— an electron-weighted average, valid only when the target is the sum of the two reductions. (Subtracting a half-reaction changes the sign of its Δ<i>G</i> term, i.e. −<i>n</i><sub><i>i</i></sub><i>E</i>°<sub><i>i</i></sub> enters with a minus.)',
      },
      {
        t: 'p',
        html: '<b>Why naive subtraction tempts.</b> Students write <i>E</i>°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) − <i>E</i>°(Fe<sup>2+</sup>/Fe) by analogy with <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub>. That formula is valid only when the electrons cancel between the two half-reactions (cathode minus anode in a working cell); here the target half-reaction still contains electrons, with <i>n</i> = 1 for one step and <i>n</i> = 2 for the other, so the shortcut is wrong.',
      },
      {
        t: 'p',
        html: '<b>Aside — what actually sets <i>E</i>° (asked by JEE Main 2023).</b> The electrode potential of M<sup>+</sup>/M measures the overall tendency M(s) → M<sup>+</sup>(aq) + e<sup>−</sup>, which decomposes into three energy terms: sublimation of the solid metal, ionisation of the gaseous atom, and hydration of the gaseous ion. All three feed the net Δ<i>G</i>, hence <i>E</i>°. A question asking “which step does not contribute” is answered by listing exactly these three — anything else (e.g. “ionisation of a solid metal atom”) is a process that does not occur.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main 2022 archetype — Sn4+/Sn2+ from the two overlapping couples',
        q: 'Given <i>E</i>°(Sn<sup>2+</sup>/Sn) = −0.140 V and <i>E</i>°(Sn<sup>4+</sup>/Sn) = +0.010 V, find <i>E</i>°(Sn<sup>4+</sup>/Sn<sup>2+</sup>).',
        steps: [
          'The target Sn<sup>4+</sup> + 2e<sup>−</sup> → Sn<sup>2+</sup> equals [Sn<sup>4+</sup> + 4e<sup>−</sup> → Sn] minus [Sn<sup>2+</sup> + 2e<sup>−</sup> → Sn]. Through Δ<i>G</i>:',
          'Δ<i>G</i>°<sub>target</sub> = −4<i>F</i>(0.010) − [−2<i>F</i>(−0.140)] = −0.040<i>F</i> − 0.280<i>F</i> = −0.320<i>F</i>',
          '<i>E</i>°(Sn<sup>4+</sup>/Sn<sup>2+</sup>) = 0.320<i>F</i>/(2<i>F</i>)',
          'The naive subtraction 0.010 − (−0.140) = 0.15 V lands close here only by accident; for other triples it is plainly wrong, and it embeds no electron counting. (The answer is reported as 16 × 10<sup>−2</sup> V — the same result.)',
        ],
        ans: '<i>E</i>°(Sn<sup>4+</sup>/Sn<sup>2+</sup>) = +0.16 V',
      },
      {
        t: 'ex',
        tag: 'JEE Main level — Fe3+/Fe and a built-in cross-check',
        q: 'Given <i>E</i>°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = +0.77 V and <i>E</i>°(Fe<sup>2+</sup>/Fe) = −0.44 V, compute <i>E</i>°(Fe<sup>3+</sup>/Fe).',
        steps: [
          'The target is the sum of the two reductions, so<br><i>E</i>°(Fe<sup>3+</sup>/Fe) = [(1)(0.77) + (2)(−0.44)]/(1 + 2) = (0.77 − 0.88)/3',
          'The value lies between the two step potentials (−0.44 V and +0.77 V), as an electron-weighted average must: Fe<sup>3+</sup> is a much weaker oxidant when taken all the way to the metal than it is in the Fe<sup>3+</sup>/Fe<sup>2+</sup> step alone. Cross-check the method on a couple whose <i>E</i>° you already know: with <i>E</i>°(Cu<sup>2+</sup>/Cu<sup>+</sup>) = +0.15 V and <i>E</i>°(Cu<sup>+</sup>/Cu) = +0.52 V, the weighted average (0.15 + 0.52)/2 = +0.335 V ≈ +0.34 V, the tabulated <i>E</i>°(Cu<sup>2+</sup>/Cu). When a method reproduces a table value you did not feed it, you can trust it on the one you were asked for.',
        ],
        ans: '<i>E</i>°(Fe<sup>3+</sup>/Fe) = −0.04 V',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why can standard Gibbs energies of half-reactions be added directly while standard electrode potentials cannot?',
            a: 'Δ<i>G</i> is extensive, scaling with the reaction as written (Hess’s law); <i>E</i>° is intensive. Adding two half-reactions adds their electron-weighted energy, not their voltages.',
          },
          {
            q: '[JEE Main] Given <i>E</i>°(MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup>) = +1.51 V (<i>n</i> = 5) and <i>E</i>°(Mn<sup>2+</sup>/Mn) = −1.18 V (<i>n</i> = 2), find <i>E</i>°(MnO<sub>4</sub><sup>−</sup>/Mn).',
            a: '(5 × 1.51 + 2 × (−1.18))/7 = (7.55 − 2.36)/7 = 5.19/7 = +0.74 V.',
          },
          {
            q: '[JEE Main] State the three energy terms whose sum fixes the standard electrode potential of a metal.',
            a: 'Enthalpies of sublimation of M(s), ionisation of M(g), and hydration of M<sup>+</sup>(g).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 91–93 ─────────────────────────
  {
    n: 'B',
    title: 'The Nernst Equation as a Measuring Instrument',
    extra: true,
    kalam: 'Coupled to a known cathode, a single voltmeter reading yields the unknown pH.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter applied the Nernst equation mainly to compute cell emfs. The exams more often run it backward: read the emf and extract a concentration, a pH, or an equilibrium constant. Four such instruments recur.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>1. Per-decade electrode shifts.</b> For M<sup><i>n</i>+</sup> + <i>n</i>e<sup>−</sup> → M, the electrode form is',
      },
      {
        t: 'formula',
        kicker: 'Per-decade electrode shifts',
        main: '<i>E</i> = <i>E</i>° + (0.0591/<i>n</i>) log[M<sup><i>n</i>+</sup>] (298 K)',
        legend: [
          '<i>E</i> = electrode potential',
          '<i>E</i>° = standard electrode potential',
          '<i>n</i> = number of electrons transferred',
          '[M<sup><i>n</i>+</sup>] = concentration of the metal ion',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'so diluting the ion tenfold lowers <i>E</i> by 0.0591/<i>n</i> volts — about 59 mV for <i>n</i> = 1, 30 mV for <i>n</i> = 2, 20 mV for <i>n</i> = 3. NEET asks this as a pure sign-and-magnitude item: dilution of the metal-ion solution always lowers the reduction potential (the metal becomes a better reducing agent on paper).',
      },
      {
        t: 'p',
        html: '<b>2. pH from a hydrogen-electrode cell.</b> For Pt | H<sub>2</sub> (1 bar) | H<sup>+</sup>, the Nernst form is <i>E</i> = −0.0591 pH against the SHE — every unit of pH costs the electrode 59 mV. Coupled to a known cathode, a single voltmeter reading yields the unknown pH. (This is the electrochemistry behind the pH meter; the practical glass electrode is calibrated the same way.)',
      },
      {
        t: 'p',
        html: '<b>3. <i>K</i><sub>sp</sub> from standard potentials.</b> Combine the reduction Ag<sup>+</sup> + e<sup>−</sup> → Ag with the dissolution AgCl(s) → Ag<sup>+</sup> + Cl<sup>−</sup> (Δ<i>G</i>° = −<i>RT</i> ln <i>K</i><sub>sp</sub>). Adding gives AgCl(s) + e<sup>−</sup> → Ag + Cl<sup>−</sup>, whose potential obeys',
      },
      {
        t: 'formula',
        kicker: '<i>K</i><sub>sp</sub> from standard potentials',
        main: '<i>E</i>°(AgCl/Ag) = <i>E</i>°(Ag<sup>+</sup>/Ag) + (0.0591/1) log <i>K</i><sub>sp</sub> (298 K)',
        legend: [
          '<i>E</i>°(AgCl/Ag) = standard potential of the AgCl/Ag couple',
          '<i>E</i>°(Ag<sup>+</sup>/Ag) = standard potential of the Ag<sup>+</sup>/Ag couple',
          '<i>K</i><sub>sp</sub> = solubility product of AgCl',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A solid-involving couple’s standard potential therefore contains the solubility product — an emf table doubles as a <i>K</i><sub>sp</sub> table.',
      },
      {
        t: 'p',
        html: '<b>4. Thermodynamics from the temperature coefficient (JEE Advanced).</b> With Δ<sub>r</sub><i>G</i> = −<i>nFE</i> and Δ<i>S</i> = −(∂Δ<i>G</i>/∂<i>T</i>)<sub><i>p</i></sub>:',
      },
      {
        t: 'formula',
        kicker: 'Thermodynamics from the temperature coefficient',
        main: 'Δ<sub>r</sub><i>S</i> = <i>nF</i>(∂<i>E</i>/∂<i>T</i>)<sub><i>p</i></sub><br>Δ<sub>r</sub><i>H</i> = −<i>nF</i>[<i>E</i> − <i>T</i>(∂<i>E</i>/∂<i>T</i>)<sub><i>p</i></sub>]',
        legend: [
          'Δ<sub>r</sub><i>S</i> = entropy change of the cell reaction',
          'Δ<sub>r</sub><i>H</i> = enthalpy change of the cell reaction',
          '<i>n</i> = number of electrons transferred',
          '<i>F</i> = Faraday constant',
          '<i>E</i> = cell emf',
          '<i>T</i> = temperature',
          '(∂<i>E</i>/∂<i>T</i>)<sub><i>p</i></sub> = temperature coefficient of the emf, at constant pressure',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Two emf readings at two temperatures thus deliver all three of Δ<i>G</i>, Δ<i>S</i>, Δ<i>H</i> for the cell reaction.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET archetype — Tenfold dilution of a copper electrode',
        q: 'By how much does the potential of a copper electrode change if the CuSO<sub>4</sub> solution it dips in is diluted tenfold at 298 K?',
        steps: [
          '<i>n</i> = 2 for Cu<sup>2+</sup>/Cu, so the shift is (0.0591/2) log(1/10) = −0.02955 V.',
          'No value of <i>E</i>° was needed — the decade-shift rule carries the whole answer.',
        ],
        ans: 'The potential decreases by about 30 mV.',
      },
      {
        t: 'ex',
        tag: 'NTA JEE Main 2022 — pH of the hydrogen half-cell',
        q: 'The cell Pt | H<sub>2</sub>(g) | H<sup>+</sup>(aq) ‖ Cu<sup>2+</sup> (0.01 M) | Cu(s) shows <i>E</i><sub>cell</sub> = 0.576 V at 298 K. Given <i>E</i>°(Cu<sup>2+</sup>/Cu) = 0.34 V and 2.303<i>RT</i>/<i>F</i> = 0.06 V, find the pH of the acid solution (nearest integer).',
        steps: [
          'The cell reaction is H<sub>2</sub> + Cu<sup>2+</sup> → 2H<sup>+</sup> + Cu with <i>n</i> = 2 and <i>Q</i> = [H<sup>+</sup>]<sup>2</sup>/[Cu<sup>2+</sup>] (the gas sits at 1 bar):',
          '<i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.06/2) log([H<sup>+</sup>]<sup>2</sup>/[Cu<sup>2+</sup>]) ⇒ 0.576 = 0.34 − 0.03 log([H<sup>+</sup>]<sup>2</sup>/10<sup>−2</sup>)',
          'log([H<sup>+</sup>]<sup>2</sup>/10<sup>−2</sup>) = (0.34 − 0.576)/0.03 = −7.87 ≈ −8 ⇒ [H<sup>+</sup>]<sup>2</sup> = 10<sup>−10</sup> ⇒ [H<sup>+</sup>] = 10<sup>−5</sup>',
          'The reconstruction skill is writing <i>Q</i> for the cell reaction and remembering H<sup>+</sup> appears squared — the factor of 2 is where most attempts at this item die.',
        ],
        ans: 'pH = 5',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level — Ksp of AgCl from an emf table',
        q: 'Given <i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V and <i>E</i>°(AgCl/Ag) = +0.22 V at 298 K, estimate <i>K</i><sub>sp</sub> of AgCl.',
        steps: [
          'log <i>K</i><sub>sp</sub> = [<i>E</i>°(AgCl/Ag) − <i>E</i>°(Ag<sup>+</sup>/Ag)]/0.0591 = (0.22 − 0.80)/0.0591 = −9.81',
          'The same construction works for any sparingly soluble salt whose couple appears in a potential table.',
        ],
        ans: '<i>K</i><sub>sp</sub> = 10<sup>−9.81</sup> = 1.55 × 10<sup>−10</sup> (1.5 × 10<sup>−10</sup> to two significant figures) — matching the accepted value near 10<sup>−10</sup>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] A silver electrode dips in 0.01 M Ag<sup>+</sup>. State the direction and magnitude of the potential change on diluting to 0.001 M at 298 K.',
            a: 'Decreases by 0.0591/1 × 1 = 59 mV.',
          },
          {
            q: '[JEE Main] For the Daniell cell, <i>E</i>° = 1.10 V and (∂<i>E</i>/∂<i>T</i>)<sub><i>p</i></sub> = −1.0 × 10<sup>−4</sup> V K<sup>−1</sup>. Compute Δ<sub>r</sub><i>G</i>°, Δ<sub>r</sub><i>S</i>° and Δ<sub>r</sub><i>H</i>° at 298 K (<i>n</i> = 2, <i>F</i> = 96500 C mol<sup>−1</sup>).',
            a: 'Δ<sub>r</sub><i>G</i>° = −2 × 96500 × 1.10 = −212.3 kJ mol<sup>−1</sup> (−212 to three significant figures); Δ<sub>r</sub><i>S</i>° = 2 × 96500 × (−10<sup>−4</sup>) = −19.3 J K<sup>−1</sup> mol<sup>−1</sup> (−19 to two significant figures); Δ<sub>r</sub><i>H</i>° = −212.3 + 298 × (−0.0193) = −218.1 kJ mol<sup>−1</sup> (−218 to three significant figures).',
          },
          {
            q: '[JEE Advanced] For the cell Pt | H<sub>2</sub> (1 bar) | H<sup>+</sup> (<i>x</i>) ‖ Ag<sup>+</sup> (1 M) | Ag, write <i>E</i><sub>cell</sub> as a function of pH and compute it at pH 3. (<i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V.)',
            a: '<i>E</i>°<sub>cell</sub> = 0.80 V; reaction H<sub>2</sub> + 2Ag<sup>+</sup> → 2H<sup>+</sup> + 2Ag, <i>Q</i> = [H<sup>+</sup>]<sup>2</sup>, so <i>E</i> = 0.80 − 0.0591 log[H<sup>+</sup>] = 0.80 + 0.0591 pH; at pH 3, <i>E</i> = 0.80 + 0.177 = 0.977 V (0.98 V to two decimal places).',
          },
        ],
      },
    ],
  },
];
