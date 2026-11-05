import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Additional Topics C to E, word for word from the Class 12 Chemistry
 * Master Reference: C Kohlrausch Beyond 1:1, Equivalent Conductance, and Why Ions
 * Rank as They Do (pp. 93–95; "Practice — Addendum B" above its heading on p. 93
 * belongs to B), D Batteries and Corrosion: the NCERT Numbers the Chapter Skips
 * (pp. 95–97) and E, the book's "Addendum P — What JEE & NEET Actually Ask"
 * (pp. 97–100), kept as the last Additional topic.
 *
 * Each addendum prints its answers inside its practice questions as
 * "(Answer: …)"; each answer is set here as that question's answer. The
 * formula cards' legends use the book's own definitions of the same symbols
 * from Topic 02 (p. 69). These pages print no drawing.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 93–95 ─────────────────────────
  {
    n: 'C',
    title: 'Kohlrausch Beyond 1:1, Equivalent Conductance, and Why Ions Rank as They Do',
    extra: true,
    kalam: 'The chapter worked Kohlrausch’s law only for 1:1 electrolytes and weak monobasic acids.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter worked Kohlrausch’s law only for 1:1 electrolytes and weak monobasic acids. Exams extend it to Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> and Mohr’s salt, quote equivalent conductance, and ask for the ordering of ionic conductivities across cations of different charge. All three are one-line extensions of what the chapter has.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Polyvalent salts — count every ion.</b> Kohlrausch’s law is additive over the ions as produced:<br>Λ°<sub>m</sub> = <i>ν</i><sub>+</sub><i>λ</i>°<sub>+</sub> + <i>ν</i><sub>−</sub><i>λ</i>°<sub>−</sub>',
      },
      {
        t: 'p',
        html: 'For Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: 2<i>λ</i>°(Al<sup>3+</sup>) + 3<i>λ</i>°(SO<sub>4</sub><sup>2−</sup>) — the stoichiometric multipliers are the whole content of the question. For Mohr’s salt, (NH<sub>4</sub>)<sub>2</sub>Fe(SO<sub>4</sub>)<sub>2</sub> · 6H<sub>2</sub>O, dissolving gives 2 NH<sub>4</sub><sup>+</sup>, 1 Fe<sup>2+</sup> and 2 SO<sub>4</sub><sup>2−</sup> — three types of ion (true) but the limiting molar conductivity is <i>λ</i>°(Fe<sup>2+</sup>) + 2<i>λ</i>°(NH<sub>4</sub><sup>+</sup>) + 2<i>λ</i>°(SO<sub>4</sub><sup>2−</sup>), with every coefficient taken from the formula — a sum such as <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> + 2<i>x</i><sub>3</sub>, whose multipliers do not match the formula, is wrong. JEE Main 2025 tested exactly this point.',
      },
      {
        t: 'p',
        html: '<b>Equivalent conductance.</b> Older papers and some NEET sources use equivalent (rather than molar) conductivity: Λ<sub>eq</sub> = <i>κ</i> × 1000/<i>N</i> with <i>N</i> in gram-equivalents per litre. The conversion is by the n-factor <i>z</i> of the salt (equivalents per mole of formula unit — total positive charge per formula unit):',
      },
      {
        t: 'formula',
        kicker: 'Equivalent conductance',
        main: 'Λ<sub>m</sub> = <i>z</i> × Λ<sub>eq</sub>',
        legend: [
          'Λ<sub>m</sub> = molar conductivity',
          'Λ<sub>eq</sub> = equivalent conductivity, <i>κ</i> × 1000/<i>N</i>, with <i>N</i> in gram-equivalents per litre',
          '<i>z</i> = n-factor of the salt, equivalents per mole of formula unit',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'For a uni-univalent salt such as NaCl (<i>z</i> = 1), Λ<sub>m</sub> = Λ<sub>eq</sub> numerically; for BaSO<sub>4</sub>, <i>z</i> = 2; for Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>, <i>z</i> = 6. An item quoting Λ<sub>eq</sub> for BaSO<sub>4</sub> is just the molar-conductivity solubility method wearing an older hat: find the normality, halve it for the molar solubility, square for <i>K</i><sub>sp</sub>.',
      },
      {
        t: 'p',
        html: '<b>The conductivity ordering, explained.</b> From the chapter’s table, with Ca<sup>2+</sup> and Mg<sup>2+</sup> added (<i>λ</i>° in S cm<sup>2</sup> mol<sup>−1</sup>): H<sup>+</sup> 349.6 and OH<sup>−</sup> 199.1 tower over everything — the Grotthuss relay, where the “migration” is a proton handed along hydrogen-bonded water rather than bodily travel. Among ordinary cations the molar values rank Ca<sup>2+</sup> (119.0) > Mg<sup>2+</sup> (106.0) > K<sup>+</sup> (73.5) > Na<sup>+</sup> (50.1) > Li<sup>+</sup> (38.7): divalent ions look fast partly because each carries two charges, and within the alkali metals the smallest bare ion, Li<sup>+</sup>, is slowest because it drags the largest hydration shell. JEE Main 2025’s ordering item (H<sup>+</sup> > Ca<sup>2+</sup> > Mg<sup>2+</sup> > K<sup>+</sup> > Na<sup>+</sup>) is nothing but these two effects read off the numbers.',
      },
      {
        t: 'p',
        html: '<b>A trend subtlety examiners probe.</b> For a weak electrolyte, <i>κ</i> rises with concentration (more ions per unit volume, even at low <i>α</i>), while Λ<sub>m</sub> falls as concentration rises (a smaller fraction of the molecules is dissociated). So <i>κ</i> and Λ<sub>m</sub> change in opposite directions: on dilution <i>κ</i> falls while Λ<sub>m</sub> rises, and on concentrating <i>κ</i> rises while Λ<sub>m</sub> falls. Options saying both increase or both decrease are wrong.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET archetype — Λ°m of Al2(SO4)3',
        q: 'Limiting molar ionic conductivities of Al<sup>3+</sup> and SO<sub>4</sub><sup>2−</sup> are <i>X</i> and <i>Y</i> S cm<sup>2</sup> mol<sup>−1</sup>. Write Λ°<sub>m</sub> of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.',
        steps: [
          'Dissociation gives 2 Al<sup>3+</sup> and 3 SO<sub>4</sub><sup>2−</sup> per formula unit, so Λ°<sub>m</sub> = 2<i>X</i> + 3<i>Y</i>. The distractors are <i>X</i> + <i>Y</i> (forgot stoichiometry), (<i>X</i> + <i>Y</i>)/3 and (<i>X</i> + <i>Y</i>)/6 (confused with equivalent conductance — indeed Λ°<sub>eq</sub> = (2<i>X</i> + 3<i>Y</i>)/6).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main archetype — Ksp of BaSO4 from equivalent conductance',
        q: 'The equivalent conductance of a saturated BaSO<sub>4</sub> solution is 400 ohm<sup>−1</sup> cm<sup>2</sup> eq<sup>−1</sup> and its specific conductance is 8 × 10<sup>−5</sup> ohm<sup>−1</sup> cm<sup>−1</sup> (water’s own conductivity already subtracted). Find <i>K</i><sub>sp</sub>.',
        steps: [
          'Normality of the saturated solution:<br><i>N</i> = (<i>κ</i> × 1000)/Λ<sub>eq</sub> = (8 × 10<sup>−5</sup> × 1000)/400 = 2 × 10<sup>−4</sup> eq L<sup>−1</sup>',
          'BaSO<sub>4</sub> carries 2 equivalents per mole, so <i>S</i> = <i>N</i>/2 = 1 × 10<sup>−4</sup> mol L<sup>−1</sup>, and for a 1:1 lattice <i>K</i><sub>sp</sub> = <i>S</i><sup>2</sup> = 1 × 10<sup>−8</sup>. Every step is the chapter’s sparingly-soluble-salt procedure with the word “equivalent” substituted for “molar.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main level — Solubility of AgCl in g L−1',
        q: 'The conductivity of saturated AgCl solution (after subtracting water’s own conductivity) is 2.30 × 10<sup>−6</sup> S cm<sup>−1</sup> at 298 K. With <i>λ</i>°(Ag<sup>+</sup>) = 61.9 and <i>λ</i>°(Cl<sup>−</sup>) = 76.3 S cm<sup>2</sup> mol<sup>−1</sup>, find the solubility in units of 10<sup>−3</sup> g L<sup>−1</sup>. (<i>M</i>(AgCl) = 143.5.)',
        steps: [
          'Λ°<sub>m</sub> = 61.9 + 76.3 = 138.2 S cm<sup>2</sup> mol<sup>−1</sup>. Then<br><i>S</i> = (<i>κ</i> × 1000)/Λ°<sub>m</sub> = (2.30 × 10<sup>−6</sup> × 1000)/138.2 = 1.664 × 10<sup>−5</sup> mol L<sup>−1</sup><br><i>S</i> = 1.664 × 10<sup>−5</sup> × 143.5 = 2.39 × 10<sup>−3</sup> g L<sup>−1</sup>',
        ],
        ans: 'The answer is 2.39 in the requested units of 10<sup>−3</sup> g L<sup>−1</sup>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] The molar conductivities at infinite dilution of sodium ethanoate, HCl and NaCl are 91.0, 425.9 and 126.4 S cm<sup>2</sup> mol<sup>−1</sup>. Find Λ°<sub>m</sub> of ethanoic acid.',
            a: '91.0 + 425.9 − 126.4 = 390.5 S cm<sup>2</sup> mol<sup>−1</sup>; Na<sup>+</sup> and Cl<sup>−</sup> cancel.',
          },
          {
            q: '[JEE Main] Write the limiting molar conductivity of Mohr’s salt in terms of the ionic values <i>λ</i>°(Fe<sup>2+</sup>), <i>λ</i>°(NH<sub>4</sub><sup>+</sup>), <i>λ</i>°(SO<sub>4</sub><sup>2−</sup>), and state how many types of ion its solution contains.',
            a: '<i>λ</i>°(Fe<sup>2+</sup>) + 2<i>λ</i>°(NH<sub>4</sub><sup>+</sup>) + 2<i>λ</i>°(SO<sub>4</sub><sup>2−</sup>); three types — ferrous, ammonium, sulphate.',
          },
          {
            q: '[JEE Main] A 0.01 M weak acid HA has <i>κ</i> = 1.1 × 10<sup>−5</sup> S cm<sup>−1</sup> and Λ°<sub>m</sub> = 100 S cm<sup>2</sup> mol<sup>−1</sup>. Find its percent dissociation.',
            a: 'Λ<sub>m</sub> = 1.1 × 10<sup>−5</sup> × 1000/0.01 = 1.1 S cm<sup>2</sup> mol<sup>−1</sup>; <i>α</i> = 1.1/100 = 0.011, that is 1.1% (about 1%).',
          },
          {
            q: '[JEE Main] Arrange in order of decreasing limiting molar conductivity: Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>, Mg<sup>2+</sup>, H<sup>+</sup>.',
            a: 'H<sup>+</sup> > Ca<sup>2+</sup> > Mg<sup>2+</sup> > K<sup>+</sup> > Na<sup>+</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 95–97 ─────────────────────────
  {
    n: 'D',
    title: 'Batteries and Corrosion: the NCERT Numbers the Chapter Skips',
    extra: true,
    kalam: 'NCERT completes the rusting stoichiometry the chapter stops short of.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names every cell and gives most of its reactions, but leaves out several identifiers NCERT attaches to them (the mercury cell’s 1.35 V, the 38% acid, the lead electrode reactions, the fuel cell’s 70%, the rust equation) — and exam match-the-column items trade in precisely those.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The battery fact-file (NCERT-exact).</b><br>• <b>Dry (Leclanché) cell</b> — primary, nearly 1.5 V. Zinc container as anode (Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>); graphite rod surrounded by MnO<sub>2</sub> and carbon as cathode (MnO<sub>2</sub> + NH<sub>4</sub><sup>+</sup> + e<sup>−</sup> → MnO(OH) + NH<sub>3</sub>, manganese reduced from +4 to +3); moist NH<sub>4</sub>Cl–ZnCl<sub>2</sub> paste; the ammonia produced complexes Zn<sup>2+</sup> as [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>.<br>• <b>Mercury cell</b> — primary, for low-current devices (hearing aids, watches). Zinc–mercury amalgam anode, HgO–carbon paste cathode, KOH–ZnO paste electrolyte: Zn(Hg) + 2OH<sup>−</sup> → ZnO + H<sub>2</sub>O + 2e<sup>−</sup> and HgO + H<sub>2</sub>O + 2e<sup>−</sup> → Hg + 2OH<sup>−</sup>. Overall Zn(Hg) + HgO → ZnO + Hg involves no ion in solution, so the cell potential is approximately <b>1.35 V and remains constant throughout its life</b> — its signature property and a favourite match-the-column entry.<br>• <b>Lead storage battery</b> — secondary (automobiles, inverters): lead anode, lead grid packed with PbO<sub>2</sub> cathode, <b>38% sulphuric acid</b> electrolyte. On discharge: anode Pb + SO<sub>4</sub><sup>2−</sup> → PbSO<sub>4</sub> + 2e<sup>−</sup>; cathode PbO<sub>2</sub> + SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> + 2e<sup>−</sup> → PbSO<sub>4</sub> + 2H<sub>2</sub>O; overall Pb + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> → 2PbSO<sub>4</sub> + 2H<sub>2</sub>O. Acid is consumed and water formed, so electrolyte density falls on discharge; charging reverses the reaction, regenerating Pb and PbO<sub>2</sub>.<br>• <b>Nickel–cadmium cell</b> — secondary, longer life than lead storage; overall Cd + 2Ni(OH)<sub>3</sub> → CdO + 2Ni(OH)<sub>2</sub> + H<sub>2</sub>O.<br>• <b>H<sub>2</sub>–O<sub>2</sub> fuel cell</b> — reactants fed continuously; porous carbon electrodes with finely divided Pt/Pd catalysts in concentrated NaOH; anode 2H<sub>2</sub> + 4OH<sup>−</sup> → 4H<sub>2</sub>O + 4e<sup>−</sup>, cathode O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup> → 4OH<sup>−</sup>. Used in the Apollo programme, where the product water was condensed into the astronauts’ drinking supply. Efficiency about <b>70%</b>, against about 40% for thermal plants, and pollution-free.',
      },
      {
        t: 'p',
        html: '<b>Corrosion, one step further than the chapter went.</b> NCERT completes the rusting stoichiometry the chapter stops short of: after Fe → Fe<sup>2+</sup> + 2e<sup>−</sup> at anodic spots and O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O at cathodic spots, the dissolved Fe<sup>2+</sup> is oxidised by air:<br>2Fe<sup>2+</sup>(aq) + 2H<sub>2</sub>O(l) + ½O<sub>2</sub>(g) → Fe<sub>2</sub>O<sub>3</sub>(s) + 4H<sup>+</sup>(aq)<br>and the Fe<sub>2</sub>O<sub>3</sub> hydrates to rust, Fe<sub>2</sub>O<sub>3</sub>·<i>x</i>H<sub>2</sub>O. Two exam-sharp corollaries: corrosion is faster in acidic than alkaline medium (the cathodic step consumes H<sup>+</sup>), and impurity spots or more-noble contact metals act as cathodes while the iron behaves as the anode — the electrochemical statement behind “a metal corrodes at its impurity boundaries.”',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main 2024 archetype — Match the cell to its signature',
        q: 'Match: (A) Leclanché cell, (B) Ni–Cd cell, (C) fuel cell, (D) mercury cell — with (I) converts energy of combustion into electrical energy, (II) no ion in solution whose concentration changes; used in hearing aids, (III) rechargeable, (IV) anode reaction Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>.',
        steps: [
          'Leclanché: zinc anode, so (IV). Ni–Cd: rechargeable, so (III). Fuel cell: combustion energy converted directly, so (I). Mercury cell: overall reaction Zn(Hg) + HgO → ZnO + Hg has no solution ion, giving its constant 1.35 V, and it serves hearing aids — (II).',
        ],
        ans: 'A–IV, B–III, C–I, D–II.',
      },
      {
        t: 'ex',
        tag: 'NEET level — What the fuel cell supplied Apollo besides power',
        q: 'Hydrogen–oxygen fuel cells were used in spacecraft to supply which additional consumable, and why is that possible?',
        steps: [
          'Water. The cell’s only product is 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O; the water vapour was condensed and added to the astronauts’ drinking supply. Because the cell converts chemical energy directly into electricity, skipping the combustion-and-turbine detour, it runs at about 70% efficiency against roughly 40% for thermal plants; and because water is its only product, it causes no pollution.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Explain why the mercury cell maintains a constant potential of about 1.35 V throughout its life.',
            a: 'Its overall reaction Zn(Hg) + HgO → ZnO + Hg involves no ion in solution, so no concentration — and hence no emf — can drift.',
          },
          {
            q: '[NEET] During discharge of a lead storage battery, what happens to the density of the electrolyte and why?',
            a: 'It falls — H<sub>2</sub>SO<sub>4</sub> is consumed and water is produced, diluting the 38% acid.',
          },
          {
            q: '[JEE Main] Write the atmospheric-oxidation step that converts the Fe<sup>2+</sup> of a corroding droplet into rust, and name the corrosion product.',
            a: '2Fe<sup>2+</sup> + 2H<sub>2</sub>O + ½O<sub>2</sub> → Fe<sub>2</sub>O<sub>3</sub> + 4H<sup>+</sup>; the oxide hydrates to Fe<sub>2</sub>O<sub>3</sub>·<i>x</i>H<sub>2</sub>O, rust.',
          },
          {
            q: '[NEET] State whether corrosion of iron is faster in acidic or alkaline medium, with reason.',
            a: 'Acidic — the cathodic reduction O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O consumes H<sup>+</sup>, so acidity feeds the micro-cell.',
          },
        ],
      },
    ],
  },

  // ─────────────── Additional topic E (the book's Addendum P) · pp. 97–100 ───────────────
  {
    n: 'E',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Recent JEE and NEET questions on this chapter divide roughly as follows.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      { t: 'p', html: 'Recent JEE and NEET questions on this chapter divide roughly as follows:' },
      {
        t: 'defgrid',
        title: 'Sub-topic — Approximate share',
        rows: [
          {
            k: 'Cells, electrode potentials and Nernst applications (spontaneity, series, pH cells, combining couples)',
            v: '~38%',
          },
          {
            k: 'Conductance and Kohlrausch (incl. solubility/<i>K</i><sub>sp</sub>, ordering, weak-electrolyte <i>α</i>)',
            v: '~30%',
          },
          { k: 'Faraday’s laws and products of electrolysis', v: '~21%' },
          { k: 'Batteries and corrosion', v: '~10%' },
        ],
      },
      {
        t: 'p',
        html: 'The questions span JEE Main 2020, 2022 (including the NTA paper), 2023, 2024 and 2025. Two drifts stand out: Nernst items increasingly end in a pH or concentration read-out rather than a bare emf, and conductance items increasingly wrap the weak-electrolyte <i>α</i> or a <i>K</i><sub>sp</sub> inside the unit-conversion work.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1 — “Combine two half-cell potentials into a third”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two overlapping couples with their <i>E</i>°; find a third (JEE Main 2022 and 2025).',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Add Δ<i>G</i>° = −<i>nFE</i>°, never <i>E</i>° itself; divide back by the target’s electron count. The first worked example of Additional topic A solves the Sn item (<i>E</i>°(Sn<sup>4+</sup>/Sn<sup>2+</sup>) = +0.16 V, answer 16 in units of 10<sup>−2</sup> V).',
      },
      { t: 'p', html: '<b>Archetype 2 — “Nernst backward: pH or concentration from an emf”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A hydrogen or Ag/AgCl half-cell paired with a standard cathode; the emf is given and the pH or a concentration is wanted.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Write <i>Q</i> for the cell reaction (mind [H<sup>+</sup>]<sup>2</sup>), set up <i>E</i> = <i>E</i>° − (0.0591/<i>n</i>) log <i>Q</i>, and solve for the single unknown. The second worked example of Additional topic B is the NTA 2022 item (pH 5).',
      },
      {
        t: 'p',
        html: '<b>Archetype 3 — “Λ<sub>m</sub> from <i>κ</i> (the 1000 factor), then <i>α</i> or <i>K</i><sub>a</sub>”</b>',
      },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A resistance/conductivity plus concentration; compute molar conductivity, then degree of dissociation for a weak electrolyte.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Λ<sub>m</sub> = <i>κ</i> × 1000/molarity, then <i>α</i> = Λ<sub>m</sub>/Λ°<sub>m</sub>. For <i>κ</i> = 1.1 × 10<sup>−5</sup> S cm<sup>−1</sup> at 0.01 M with Λ°<sub>m</sub> = 100 S cm<sup>2</sup> mol<sup>−1</sup>: Λ<sub>m</sub> = 1.1 S cm<sup>2</sup> mol<sup>−1</sup>, so <i>α</i> ≈ 1%. Watch <i>κ</i> in S m<sup>−1</sup> vs S cm<sup>−1</sup> — a factor of 100 rides on it.',
      },
      { t: 'p', html: '<b>Archetype 4 — “Kohlrausch cancellation for a weak acid”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Three strong-electrolyte Λ°<sub>m</sub> values; find the weak acid’s (e.g. 91.0, 425.9, 126.4 ⇒ ethanoic acid).',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Λ°<sub>m</sub>(HA) = Λ°<sub>m</sub>(HCl) + Λ°<sub>m</sub>(NaA) − Λ°<sub>m</sub>(NaCl); verify the spectators cancel. Here 425.9 + 91.0 − 126.4 = 390.5 S cm<sup>2</sup> mol<sup>−1</sup>.',
      },
      { t: 'p', html: '<b>Archetype 5 — “Solubility and <i>K</i><sub>sp</sub> from conductivity”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Saturated-solution conductivity plus ionic conductivities (or an equivalent conductance); find solubility or <i>K</i><sub>sp</sub>.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> <i>S</i> = <i>κ</i> × 1000/Λ°<sub>m</sub> (subtract water’s <i>κ</i> first); for a 1:1 salt <i>K</i><sub>sp</sub> = <i>S</i><sup>2</sup>. If the data say “equivalent conductance,” divide the resulting normality by the salt’s n-factor. The second and third worked examples of Additional topic C show the two usual forms (<i>K</i><sub>sp</sub> = 10<sup>−8</sup>; solubility 2.39 × 10<sup>−3</sup> g L<sup>−1</sup>).',
      },
      { t: 'p', html: '<b>Archetype 6 — “Products of electrolysis, with electrode identity and deposition order”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Predict cathode/anode products for molten vs aqueous, inert vs active electrodes; or order metals by deposition as voltage is raised.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Cathode — highest reduction potential wins, but water beats Na<sup>+</sup>, Mg<sup>2+</sup>, K<sup>+</sup>, Ca<sup>2+</sup> (so H<sub>2</sub>, never the metal, from their aqueous salts); anode — an active electrode (Cu, Ag anodes) dissolves instead of liberating O<sub>2</sub>; overpotential lets Cl<sub>2</sub> beat O<sub>2</sub> from brine. As voltage rises, metals plate in order of decreasing <i>E</i>°: Ag (+0.80 V), then Hg (Hg<sub>2</sub><sup>2+</sup>/Hg, +0.79 V), then Cu (+0.34 V); Mg never plates from water. With inert electrodes in aqueous Mg(NO<sub>3</sub>)<sub>2</sub> the cathode product is H<sub>2</sub> (from water), not O<sub>2</sub>; trust the potentials.',
      },
      {
        t: 'p',
        html: '<b>Archetype 7 — “Faraday bookkeeping: equivalents, electrochemical equivalent, efficiency”</b>',
      },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Mass deposited from <i>I</i> × <i>t</i>; cells in series; the definition of electrochemical equivalent; current efficiency.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Work in equivalents: <i>Q</i>/<i>F</i> moles of electrons = equivalents; multiply by equivalent weight <i>M</i>/<i>n</i>. One coulomb deposits exactly one electrochemical equivalent (<i>Z</i>) — a definition item examiners ask outright. Efficiency = (actual/theoretical) ×100.',
      },
      { t: 'p', html: '<b>Archetype 8 — “Battery and corrosion fact-matching”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Match cells to uses/reactions, or judge two statements on corrosion.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Memorise the signatures: dry cell — Zn anode, Mn reduced +4 to +3, ~1.5 V; mercury cell — constant 1.35 V (no ion in solution), hearing aids; lead storage — secondary, 38% H<sub>2</sub>SO<sub>4</sub>, density falls on discharge; fuel cell — combustion energy directly, ~70% efficiency, Apollo drinking water. Corrosion needs O<sub>2</sub> + moisture, runs faster in acid, and pits under the oxygen-starved centre of a droplet.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding <i>E</i>° values.</b> When a half-reaction is built from two others, potentials combine only through Δ<i>G</i>° with electron weighting; the Sn and Fe triples are built to punish the shortcut.',
          '<b>[H<sup>+</sup>] exponent slips.</b> In Pt | H<sub>2</sub> | H<sup>+</sup> cells the proton enters <i>Q</i> squared (for H<sub>2</sub> written as one mole); using it once shifts the pH by a factor of two.',
          '<b>The 1000 factor and S cm<sup>−1</sup> vs S m<sup>−1</sup>.</b> Λ<sub>m</sub> = <i>κ</i> × 1000/molarity holds only with <i>κ</i> in S cm<sup>−1</sup>; with <i>κ</i> in S m<sup>−1</sup> the conversion differs by 100, and exam questions use both units.',
          '<b>Cell constant is geometry.</b> <i>G</i>* = <i>l</i>/<i>A</i> depends on the apparatus, never on the electrolyte, concentration or temperature.',
          '<b>Cathode gas identity.</b> From aqueous Na<sub>2</sub>SO<sub>4</sub> or Mg(NO<sub>3</sub>)<sub>2</sub>, the cathode product is H<sub>2</sub> (water reduced); O<sub>2</sub> appears at the anode. Swapping the two gases is the most planted distractor in this chapter.',
          '<b>emf is intensive.</b> AA and AAA cells of the same chemistry deliver the same emf — only the capacity (total charge) differs.',
          '<b>Electrochemical equivalent vs equivalent weight.</b> One coulomb deposits <i>Z</i> grams (electrochemical equivalent); one Faraday deposits one gram-equivalent (<i>M</i>/<i>n</i>).',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: '<b>Level 1 — Direct recall</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'Why is the SHE assigned exactly zero volts?',
            a: 'Single-electrode potentials cannot be measured; a reference is chosen by convention, and the SHE is that zero.',
          },
          {
            q: 'Which cells are primary, which secondary: dry cell, mercury cell, lead storage, Ni–Cd, H<sub>2</sub>–O<sub>2</sub> fuel cell?',
            a: 'Primary — dry, mercury; secondary — lead storage, Ni–Cd; the fuel cell is a separate continuously-fed class.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 2 — Applied</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'Given <i>E</i>°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = +0.77 V and <i>E</i>°(Fe<sup>2+</sup>/Fe) = −0.44 V, find <i>E</i>°(Fe<sup>3+</sup>/Fe).',
            a: '(0.77 − 0.88)/3 = −0.04 V — electron-weighted, not subtracted.',
          },
          {
            q: 'The 0.1 M Cu<sup>2+</sup> solution around a copper electrode is diluted to 0.01 M at 298 K. State the potential shift.',
            a: 'Decreases by 0.0591/2 = 29.55 mV (about 30 mV).',
          },
          {
            q: 'Λ°<sub>m</sub> values: HCl 426, CH<sub>3</sub>COONa 91, NaCl 126 S cm<sup>2</sup> mol<sup>−1</sup>. Find Λ°<sub>m</sub>(CH<sub>3</sub>COOH).',
            a: '426 + 91 − 126 = 391 S cm<sup>2</sup> mol<sup>−1</sup>.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 3 — Multi-step</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'The cell Pt | H<sub>2</sub> (1 bar) | H<sup>+</sup> (<i>x</i>) ‖ Cu<sup>2+</sup> (1 M) | Cu shows 0.517 V at 298 K. Find <i>x</i>. (<i>E</i>°(Cu<sup>2+</sup>/Cu) = +0.34 V.)',
            a: '<i>E</i> = 0.34 − 0.02955 log[H<sup>+</sup>]<sup>2</sup> = 0.34 + 0.0591 pH; pH = (0.517 − 0.34)/0.0591 = 3; <i>x</i> = 10<sup>−3</sup> M.',
          },
          {
            q: 'Saturated AgCl has <i>κ</i> = 2.30 × 10<sup>−6</sup> S cm<sup>−1</sup> (after subtracting water’s own conductivity); Λ°<sub>m</sub> = 138.2 S cm<sup>2</sup> mol<sup>−1</sup>. Find the solubility and <i>K</i><sub>sp</sub>.',
            a: '<i>S</i> = 1.66 × 10<sup>−5</sup> mol L<sup>−1</sup>; <i>K</i><sub>sp</sub> = <i>S</i><sup>2</sup> = 2.8 × 10<sup>−10</sup>.',
          },
          {
            q: 'A current of 3 A passes for 270 min through aqueous CuSO<sub>4</sub>; 15.0 g Cu deposits. Find the current efficiency. (<i>M</i> = 63.5, <i>n</i> = 2, <i>F</i> = 96500 C mol<sup>−1</sup>.)',
            a: '<i>Q</i> = 48600 C; theoretical mass = 48600 × 63.5/(2 × 96500) = 16.0 g; efficiency = 15.0/16.0 = 93.8%.',
          },
          {
            q: 'A solution 1 M in each of Cu(NO<sub>3</sub>)<sub>2</sub>, AgNO<sub>3</sub> and Mg(NO<sub>3</sub>)<sub>2</sub> is electrolysed with inert electrodes at rising voltage. State the deposition order at the cathode and the eventual gas there. (<i>E</i>°: Ag +0.80, Cu +0.34, Mg −2.36 V.)',
            a: 'Ag plates first, then Cu; Mg<sup>2+</sup> never plates — once the reducible metal ions are exhausted, water is reduced and H<sub>2</sub> evolves.',
          },
          {
            q: 'Given <i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V and <i>E</i>°(AgCl/Ag) = +0.22 V, find <i>K</i><sub>sp</sub>(AgCl) at 298 K.',
            a: 'log <i>K</i><sub>sp</sub> = (0.22 − 0.80)/0.0591 = −9.81; <i>K</i><sub>sp</sub> ≈ 1.5 × 10<sup>−10</sup>. (The conductivity data of the AgCl item above give 2.8 × 10<sup>−10</sup>: different data, a different estimate. The measured value is about 1.8 × 10<sup>−10</sup>.)',
          },
        ],
      },
    ],
  },
];
