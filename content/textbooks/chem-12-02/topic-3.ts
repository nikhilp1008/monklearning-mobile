import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topic 03: pp. 76–84 of the Class 12 Chemistry Master Reference,
 * word for word, split at the book's Sections 1 to 8. Figures 2.3 (caption
 * p. 78, drawn p. 79) and 2.4 (caption p. 80, drawn p. 81) are redrawn in
 * lib/diagrams/chemistry-12-02.ts. The book's "previous subtopic" is rewritten
 * to the topic it means (Topic 01). The MCQ options, which run on in one block
 * in the book (its errata list this), are proper options here.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 76–84 ─────────────────────────
  {
    n: '03',
    title: 'Electrolytic Cells, Electrolysis & Batteries/Corrosion',
    kalam: 'One mole of electrons (one Faraday, 96500 C) deposits exactly one equivalent of any substance.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dependable scoring cluster. CBSE Boards almost always set a 2–3 mark Faraday’s-law numerical and a short battery/corrosion question. NEET reliably picks one MCQ on products of electrolysis, batteries, or rusting. JEE Main sets a Faraday calculation (often series cells or gas volumes) nearly every year; JEE Advanced layers it with current efficiency, mixed electrolysis, or stoichiometry.',
      },
      {
        t: 'p',
        html: 'In Topic 01 a galvanic cell let a spontaneous reaction push electrons out and do work for us. An <b>electrolytic cell</b> runs the whole story in reverse: we force electrons in from an external battery to drive a reaction that would never happen on its own. Think of the galvanic cell as water flowing downhill and turning a wheel; the electrolytic cell is a pump using external power to push that same water back up the hill.',
      },
      {
        t: 'p',
        html: 'The clearest bridge is the Daniell cell itself. Apply an opposing voltage and raise it slowly: at exactly 1.1 V the cell freezes — no current. Push past 1.1 V and the reaction reverses — now zinc plates back on and copper dissolves. The cell has become electrolytic. That single experiment captures the whole idea: <b>above the cell’s own emf, the external source wins and chemistry runs backward.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> electrolysis is like a strict bank teller counting coins. Michael Faraday’s great insight was that the amount of chemistry at an electrode is simply bookkeeping on electrons: pass a fixed number of electrons and you get a fixed amount of product — no more, no less. One mole of electrons (one <b>Faraday</b>, 96500 C) deposits exactly one equivalent of any substance. To get one mole of silver (Ag<sup>+</sup> + e<sup>−</sup> → Ag) you spend 1 F; for one mole of copper (Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu) you spend 2 F; for aluminium (Al<sup>3+</sup> + 3e<sup>−</sup> → Al), 3 F. The “price in electrons” is set by the charge on the ion.',
      },
      {
        t: 'p',
        html: 'There is a subtlety in aqueous solutions, though — water itself can react. When you electrolyse concentrated aqueous NaCl (brine), you might expect Na metal at the cathode, but water is reduced more easily, so you get H<sub>2</sub> instead. At the anode, electrode-potential values say water should oxidise before Cl<sup>−</sup> — yet because the oxygen reaction is sluggish and needs an extra push (<b>overpotential</b>), chlorine actually comes off. So products of electrolysis depend on who is present, their electrode potentials, AND the kinetics.',
      },
      {
        t: 'p',
        html: '<b>Batteries</b> are just galvanic cells packaged to be portable. We sort them into three families: <b>primary</b> (used once, reactants run out — the dry cell, the mercury cell), <b>secondary</b> (rechargeable, the reaction can be reversed by an external source — lead storage, Ni–Cd), and <b>fuel cells</b> (reactants are fed in continuously from outside, so they never “run down” as long as fuel flows — the H<sub>2</sub>–O<sub>2</sub> cell that powered the Apollo missions).',
      },
      {
        t: 'p',
        html: '<b>Corrosion</b> is the villain of the story — a galvanic cell you never wanted. On a piece of iron exposed to moist air, one spot behaves as an anode (iron dissolves) and another as a cathode (oxygen is reduced), with the water film as electrolyte. The result is rust, Fe<sub>2</sub>O<sub>3</sub>·<i>x</i>H<sub>2</sub>O. India loses crores of rupees a year to it.',
      },
      {
        t: 'p',
        html: 'Why do engineers care so much about fuel cells in particular? A conventional thermal power plant burns fuel to make steam, spins a turbine, and generates electricity — a chain that wastes most of the energy as heat, landing around 40% efficiency and pouring out pollution. A fuel cell skips the combustion-and-turbine detour and converts the chemical energy directly into electricity, so it is far more efficient and essentially pollution-free (the H<sub>2</sub>–O<sub>2</sub> cell’s only product is water). This is the appeal of the so-called <b>hydrogen economy</b>: produce hydrogen by electrolysing water with solar energy, then “burn” it cleanly in a fuel cell. Both halves rest entirely on the electrochemistry of this chapter.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Faraday’s laws assume 100% current efficiency — that every electron does the intended chemistry; in reality side-reactions lower the yield, so real current efficiency < 100%. Predicting electrolysis products from electrode potentials alone fails whenever overpotential intervenes (the NaCl case). And corrosion needs both water and oxygen — iron in dry air or in vacuum does not rust.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Charge passed',
        main: '<i>Q</i> = <i>I</i> × <i>t</i> (coulomb = ampere × second)',
        legend: ['<i>Q</i> = charge', '<i>I</i> = current', '<i>t</i> = time'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Faraday’s First Law',
        main: '<i>W</i> = <i>ZQ</i> = <i>ZIt</i><br>In terms of molar mass <i>M</i> and electrons per ion <i>n</i>:<br><i>W</i> = <i>MIt</i>/(<i>nF</i>)<br><i>Z</i> = <i>M</i>/(<i>nF</i>) = <i>E</i>/<i>F</i><br><i>E</i> = <i>M</i>/<i>n</i> (equivalent weight)',
        legend: [
          'mass liberated ∝ charge passed',
          '<i>W</i> = mass deposited/liberated',
          '<i>Z</i> = electrochemical equivalent (mass deposited by 1 coulomb)',
          '<i>Q</i> = charge',
          '<i>I</i> = current',
          '<i>t</i> = time',
          '<i>M</i> = molar mass',
          '<i>n</i> = electrons per ion',
          '<i>F</i> = Faraday constant (96500 C mol<sup>−1</sup>)',
          '<i>E</i> = equivalent weight',
          'Here <i>E</i> is the equivalent weight, not an electrode potential.',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Faraday’s Second Law',
        main: '<i>W</i><sub>1</sub>/<i>W</i><sub>2</sub> = <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub>',
        legend: [
          'for the same charge through cells in series, masses are in the ratio of equivalent weights',
          '<i>W</i><sub>1</sub>, <i>W</i><sub>2</sub> = masses',
          '<i>E</i><sub>1</sub>, <i>E</i><sub>2</sub> = equivalent weights',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Current efficiency',
        main: '<i>η</i> = (charge actually used for the desired reaction)/(total charge passed) × 100%',
        legend: ['<i>η</i> = current efficiency'],
        note: null,
      },
      {
        t: 'table',
        title: 'Symbols and units',
        head: ['Symbol', 'Meaning', 'SI unit', 'Dimensional formula'],
        rows: [
          ['<i>Q</i>', 'charge', 'coulomb (C)', '[A T]'],
          ['<i>I</i>', 'current', 'ampere (A)', '[A]'],
          ['<i>t</i>', 'time', 'second (s)', '[T]'],
          ['<i>F</i>', 'Faraday constant (96500)', 'C mol<sup>−1</sup>', '[A T mol<sup>−1</sup>]'],
          ['<i>Z</i>', 'electrochemical equivalent', 'kg C<sup>−1</sup> (g C<sup>−1</sup> in practice)', '[M A<sup>−1</sup> T<sup>−1</sup>]'],
          ['<i>W</i>', 'mass deposited/liberated', 'kg (g in practice)', '[M]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Key definitions:</b> <b>Electrolysis</b> — chemical change driven by passing current. <b>Electrolytic cell</b> — converts electrical energy into chemical energy (the reverse of galvanic). <b>Primary cell</b> — non-rechargeable. <b>Secondary cell</b> — rechargeable. <b>Fuel cell</b> — reactants supplied continuously from outside.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      {
        t: 'p',
        html: '<b>Derivation — Faraday’s laws as electron bookkeeping</b><br><br>Start from the electrode reaction M<sup><i>n</i>+</sup> + <i>n</i>e<sup>−</sup> → M. To deposit <b>one mole</b> of M requires <i>n</i> <b>moles of electrons</b>. Why? Each ion needs exactly <i>n</i> electrons to neutralise its charge — this is the entire physical content of the law.',
      },
      {
        t: 'p',
        html: 'One mole of electrons carries a charge of <i>F</i> = <i>N</i><sub>A</sub> × <i>e</i> = (6.022 × 10<sup>23</sup>)(1.602 × 10<sup>−19</sup>) ≈ 96500 C. So <i>n</i> moles of electrons carry <i>nF</i> coulombs, and that is the charge to deposit one mole (<i>M</i> grams) of metal.',
      },
      {
        t: 'p',
        html: 'Scaling linearly, the charge <i>Q</i> = <i>It</i> deposits<br><i>W</i> = <i>M</i>/(<i>nF</i>) × <i>Q</i> = <i>MIt</i>/(<i>nF</i>)<br>This is the first law (<i>W</i> ∝ <i>Q</i>). For the <b>second law</b>, pass the same <i>Q</i> through two cells in series. Then <i>W</i><sub>1</sub> = [<i>M</i><sub>1</sub>/(<i>n</i><sub>1</sub><i>F</i>)]<i>Q</i> and <i>W</i><sub>2</sub> = [<i>M</i><sub>2</sub>/(<i>n</i><sub>2</sub><i>F</i>)]<i>Q</i>, so<br><i>W</i><sub>1</sub>/<i>W</i><sub>2</sub> = (<i>M</i><sub>1</sub>/<i>n</i><sub>1</sub>)/(<i>M</i><sub>2</sub>/<i>n</i><sub>2</sub>) = <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub><br>the ratio of equivalent weights — exactly what Faraday found experimentally.',
      },
      {
        t: 'proc',
        title: 'Procedure — Predicting products of electrolysis',
        steps: [
          '<b>List every species</b> that could react at each electrode — including water (H<sub>2</sub>O) and its ions (H<sup>+</sup>, OH<sup>−</sup>) in aqueous solution.',
          '<b>At the cathode (reduction):</b> the species with the higher (more positive) reduction potential is favoured. In aqueous NaCl, H<sup>+</sup>/H<sub>2</sub> (0.00 V) beats Na<sup>+</sup>/Na (−2.71 V), so <b>H<sub>2</sub></b> is liberated.',
          '<b>At the anode (oxidation):</b> the species with the lower reduction potential is favoured — but check overpotential. In concentrated aqueous NaCl, water “should” oxidise (1.23 V vs 1.36 V for Cl<sup>−</sup>), yet oxygen evolution is kinetically slow, so <b>Cl<sub>2</sub></b> comes off instead. (From very dilute NaCl, O<sub>2</sub> comes off instead.)',
          '<b>Molten vs aqueous matters:</b> molten NaCl has no water, so the products are simply <b>Na</b> and <b>Cl<sub>2</sub></b>.',
        ],
      },
      { t: 'fig', id: 'c12-02-fig-2.3' },
      {
        t: 'p',
        html: '<b>Key electrode reactions (batteries, fuel cell, corrosion)</b><br><br><b>Dry (Leclanché) cell</b> — primary, ~1.5 V: Anode: Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>; Cathode: MnO<sub>2</sub> + NH<sub>4</sub><sup>+</sup> + e<sup>−</sup> → MnO(OH) + NH<sub>3</sub>',
      },
      {
        t: 'p',
        html: '<b>Mercury cell</b> — primary, steady voltage (no ions consumed in net reaction): Anode: Zn(Hg) + 2OH<sup>−</sup> → ZnO + H<sub>2</sub>O + 2e<sup>−</sup>; Cathode: HgO + H<sub>2</sub>O + 2e<sup>−</sup> → Hg + 2OH<sup>−</sup>',
      },
      {
        t: 'p',
        html: '<b>Lead storage battery</b> — secondary; discharge:<br>Pb + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> → 2PbSO<sub>4</sub> + 2H<sub>2</sub>O<br>Sulphuric acid is consumed and water formed, so the <b>electrolyte density falls on discharge</b>; charging reverses the reaction.',
      },
      {
        t: 'p',
        html: '<b>Ni–Cd cell</b> — secondary; discharge:<br>Cd + 2Ni(OH)<sub>3</sub> → CdO + 2Ni(OH)<sub>2</sub> + H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: '<b>H<sub>2</sub>–O<sub>2</sub> fuel cell</b> (alkaline): Anode: 2H<sub>2</sub> + 4OH<sup>−</sup> → 4H<sub>2</sub>O + 4e<sup>−</sup>; Cathode: O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup> → 4OH<sup>−</sup>; Overall: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: '<b>Corrosion of iron (rusting)</b> — a micro galvanic cell on the metal surface: Anodic spot: Fe → Fe<sup>2+</sup> + 2e<sup>−</sup>; Cathodic spot: O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O; then Fe<sup>2+</sup> is further oxidised by air to hydrated ferric oxide, Fe<sub>2</sub>O<sub>3</sub>·<i>x</i>H<sub>2</sub>O (rust). A water droplet on iron sets up exactly this geometry: the metal under the centre of the drop, starved of oxygen, becomes the anode and dissolves, while the rim — rich in dissolved oxygen — becomes the cathode. Electrons travel through the metal from centre to rim; ions travel through the water film. That is why pits form under a droplet, not at its edge.',
      },
      { t: 'fig', id: 'c12-02-fig-2.4' },
      {
        t: 'p',
        html: '<b>Factors that speed up corrosion</b> (worth knowing for one-mark questions): a <b>lower standard reduction potential</b> (more reactive metal) corrodes faster; <b>strains, bends, and scratches</b> create high-energy anodic spots; <b>impurities</b> in the metal set up extra micro-cells, which is why chemically pure iron rusts far more slowly; <b>salinity</b> of water improves ion conduction and accelerates the micro-cell current; and <b>acidic pollutants</b> such as CO<sub>2</sub>, SO<sub>2</sub>, and NO<sub>2</sub> dissolve in the water film and supply H<sup>+</sup>, which speeds up the cathodic step. Crucially, iron sealed in a vacuum does not rust at all: the process needs both moisture and oxygen.',
      },
      {
        t: 'p',
        html: '<b>Prevention methods</b>:<br>• <b>Barrier coating</b> — paint, grease, or a chemical such as bisphenol simply keeps air and water off the surface. Cheap, but useless once scratched.<br>• <b>Galvanisation</b> — coating iron with a layer of zinc. Because zinc is more reactive (more negative potential), even a scratched surface stays protected: the zinc preferentially corrodes and the exposed iron survives. (Tin behaves oppositely — a scratched tin can rusts faster, because iron is now the anode.)<br>• <b>Sacrificial / cathodic protection</b> — bolting a block of a more reactive metal (Mg or Zn) to a pipeline, ship hull, or bridge. The block becomes the anode and corrodes away, forcing the protected structure to behave as the cathode. The “sacrificial anode” is simply replaced periodically.<br>• <b>Alloying</b> — e.g. stainless steel (iron with chromium and nickel) resists corrosion intrinsically.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A current of 2.0 A is passed through AgNO<sub>3</sub> solution for 30 minutes. Calculate the mass of silver deposited. (<i>M</i><sub>Ag</sub> = 108, <i>n</i> = 1, <i>F</i> = 96500 C mol<sup>−1</sup>.)',
        steps: [
          'Time in seconds: <i>t</i> = 30 × 60 = 1800 s. Charge <i>Q</i> = <i>It</i> = 2.0 × 1800 = 3600 C.',
          '<i>W</i> = <i>MIt</i>/(<i>nF</i>) = (108 × 3600)/(1 × 96500)',
          '<b>(Units: grams.)</b> Note the conversion of minutes to seconds — the single most common slip.',
        ],
        ans: '4.03 g (4.0 g to two significant figures)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The same quantity of charge is passed through AgNO<sub>3</sub> solution and molten alumina (Al<sub>2</sub>O<sub>3</sub> in cryolite) in series. If 1.08 g of silver is deposited, what mass of aluminium is deposited? (<i>M</i><sub>Ag</sub> = 108, <i>M</i><sub>Al</sub> = 27.)',
        steps: [
          '<b>Trap:</b> students compute charge from silver, then forget that Al needs <i>n</i> = 3.',
          '<b>Speed solution.</b> Same charge → same number of equivalents. Silver deposited = 1.08/108 = 0.010 mol = 0.010 equivalents (since <i>n</i> = 1). So aluminium is also 0.010 equivalents. Equivalent weight of Al = 27/3 = 9. Mass = 0.010 × 9. No need to find the charge at all — work in equivalents.',
        ],
        ans: '0.090 g',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Acidified water is electrolysed with a current of 5.0 A for 1930 s using inert electrodes. Find the volume of O<sub>2</sub> liberated at the anode and H<sub>2</sub> at the cathode, measured at STP (22400 mL mol<sup>−1</sup>).',
        steps: [
          'Charge <i>Q</i> = 5.0 × 1930 = 9650 C = 9650/96500 = 0.100 F (i.e. 0.100 mol electrons).',
          'At the anode: 2H<sub>2</sub>O → O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup>, so 4 electrons per O<sub>2</sub>.',
          '<i>n</i><sub>O₂</sub> = 0.100/4 = 0.025 mol ⇒ <i>V</i><sub>O₂</sub> = 0.025 × 22400',
          'At the cathode: 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>, so 2 electrons per H<sub>2</sub>.',
          '<i>n</i><sub>H₂</sub> = 0.100/2 = 0.050 mol ⇒ <i>V</i><sub>H₂</sub> = 0.050 × 22400',
          'The 2 ∶ 1 volume ratio of H<sub>2</sub> to O<sub>2</sub> mirrors the formula of water — a quick sanity check.',
        ],
        ans: '<i>V</i><sub>O₂</sub> = 560 mL; <i>V</i><sub>H₂</sub> = 1120 mL',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two electrolytic cells, one with alumina (Al<sub>2</sub>O<sub>3</sub>) dissolved in molten cryolite and one with aqueous CuSO<sub>4</sub>, are connected in series and a steady current is passed. After some time, 1.27 g of copper is deposited. (a) Find the mass of aluminium expected at 100% current efficiency. (b) If the current was 2.0 A, for how long did it flow? (c) If the aluminium actually deposited was 0.324 g, find the current efficiency of the aluminium cell. (<i>M</i><sub>Cu</sub> = 63.5, <i>n</i><sub>Cu</sub> = 2; <i>M</i><sub>Al</sub> = 27, <i>n</i><sub>Al</sub> = 3.)',
        steps: [
          'Moles of Cu = 1.27/63.5 = 0.0200 mol → charge <i>Q</i> = <i>n</i><sub>Cu</sub> × mol × <i>F</i> = 2 × 0.0200 × 96500 = 3860 C.',
          '(a) Same charge through the series → moles of Al = <i>Q</i>/(<i>n</i><sub>Al</sub><i>F</i>) = 3860/(3 × 96500) = 0.01333 mol.',
          '<i>W</i><sub>Al</sub> = 0.01333 × 27',
          '(b) <i>t</i> = <i>Q</i>/<i>I</i> = 3860/2.0',
          '(c) Current efficiency = (0.324/0.360) × 100 — the missing 10% of charge went into side-reactions (e.g. back-reaction), the real-world departure from Faraday’s idealisation.',
        ],
        ans: '(a) 0.360 g; (b) 1930 s (≈ 32 min 10 s; 1.9 × 10<sup>3</sup> s to two significant figures); (c) 90%',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A current of 1.5 A flows for 20 minutes through molten CaCl<sub>2</sub>. Find the mass of calcium deposited. (<i>M</i><sub>Ca</sub> = 40, <i>n</i> = 2.)',
            a: '<i>Q</i> = 1800 C; <i>W</i> = 40 × 1800/(2 × 96500) = 0.373 g (0.37 g to two significant figures).',
          },
          {
            q: '[NEET] Predict the products at the cathode and anode when molten NaCl is electrolysed, and contrast with concentrated aqueous NaCl.',
            a: 'Molten: Na at cathode, Cl<sub>2</sub> at anode (no water). Concentrated aqueous: H<sub>2</sub> at cathode (water reduced before Na<sup>+</sup>), Cl<sub>2</sub> at anode (overpotential suppresses O<sub>2</sub>).',
          },
          {
            q: '[JEE Main] How many Faradays are required to deposit 0.25 mol of aluminium from molten alumina?',
            a: '0.25 × 3 = 0.75 F.',
          },
          {
            q: '[JEE Main] During discharge of a lead storage battery, state what happens to the concentration (density) of the sulphuric acid and why.',
            a: 'Density falls — H<sub>2</sub>SO<sub>4</sub> is consumed and H<sub>2</sub>O is produced on discharge.',
          },
          {
            q: '[JEE Advanced] A current of 3.0 A is passed for 1 hour through a CuSO<sub>4</sub> solution between platinum electrodes. Find the mass of copper deposited at the cathode and the volume of O<sub>2</sub> at STP (22400 mL mol<sup>−1</sup>) liberated at the anode. (<i>M</i><sub>Cu</sub> = 63.5, <i>n</i> = 2.)',
            a: '<i>Q</i> = 3.0 × 3600 = 10800 C = 0.1119 F; Cu = 63.5 × 0.1119/2 = 3.55 g (3.6 g to two significant figures); <i>n</i><sub>O₂</sub> = 0.1119/4 = 0.0280 mol → 627 mL (6.3 × 10<sup>2</sup> mL to two significant figures).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'During the electrolysis of concentrated aqueous NaCl, the gas liberated at the anode is:',
        opts: [
          {
            label: 'O<sub>2</sub>',
            nudge: '<b>(a)</b> is the trap for students who apply electrode potentials without the overpotential caveat.',
          },
          { label: 'Cl<sub>2</sub>', nudge: null },
          { label: 'H<sub>2</sub>', nudge: '<b>(c)</b> is the cathode product, not the anode.' },
          {
            label: 'Na vapour',
            nudge: '<b>(d)</b> is impossible in aqueous solution — water is reduced before Na<sup>+</sup>.',
          },
        ],
        correct: 1,
        solution:
          'Although water has the lower reduction potential (1.23 V vs 1.36 V for Cl<sup>−</sup>) and “should” give O<sub>2</sub>, oxygen evolution is kinetically slow and needs overpotential, so Cl<sub>2</sub> is released instead.',
      },
      {
        t: 'mcq',
        q: 'Which one is a secondary cell?',
        opts: [
          { label: 'Dry cell', nudge: '<b>(a)</b> and <b>(b)</b> are primary cells (single-use).' },
          { label: 'Mercury cell', nudge: '<b>(a)</b> and <b>(b)</b> are primary cells (single-use).' },
          { label: 'Lead storage battery', nudge: null },
          {
            label: 'H<sub>2</sub>–O<sub>2</sub> fuel cell',
            nudge: '<b>(d)</b> is a fuel cell, a separate category fed continuously from outside; calling it “secondary” is the classic misclassification.',
          },
        ],
        correct: 2,
        solution: 'A lead storage battery is rechargeable — discharge can be reversed by an external source.',
      },
      {
        t: 'mcq',
        q: 'When 96500 C of charge is passed through molten alumina (Al<sub>2</sub>O<sub>3</sub> in cryolite), the mass of Al deposited is (<i>M</i><sub>Al</sub> = 27):',
        opts: [
          { label: '27 g', nudge: '<b>(a)</b> ignores <i>n</i> = 3 (treats 1 F as 1 mole).' },
          { label: '9 g', nudge: null },
          { label: '3 g', nudge: '<b>(c)</b> confuses the number of Faradays needed per mole with the answer.' },
          { label: '81 g', nudge: '<b>(d)</b> multiplies instead of dividing by <i>n</i>.' },
        ],
        correct: 1,
        solution: '96500 C = 1 F = 1 equivalent. Equivalent weight of Al = 27/3 = 9, so 9 g deposits.',
      },
      {
        t: 'mcq',
        q: 'Rusting of iron does <b>not</b> occur when iron is kept in:',
        opts: [
          {
            label: 'moist air',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> all accelerate rusting — moisture, salinity (better ion conduction), and acidic pollutant oxides (CO<sub>2</sub>, SO<sub>2</sub>, NO<sub>2</sub>) each speed it up.',
          },
          {
            label: 'salty water',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> all accelerate rusting — moisture, salinity (better ion conduction), and acidic pollutant oxides (CO<sub>2</sub>, SO<sub>2</sub>, NO<sub>2</sub>) each speed it up.',
          },
          { label: 'dry air / vacuum', nudge: null },
          {
            label: 'polluted urban air',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(d)</b> all accelerate rusting — moisture, salinity (better ion conduction), and acidic pollutant oxides (CO<sub>2</sub>, SO<sub>2</sub>, NO<sub>2</sub>) each speed it up.',
          },
        ],
        correct: 2,
        solution:
          'Corrosion is electrochemical and needs both water and oxygen acting through an electrolyte film; with no moisture, the micro-cell cannot operate.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Minutes vs seconds.</b> <i>Q</i> = <i>It</i> needs <i>t</i> in seconds. Forgetting to convert minutes/hours is the most frequent numerical error.',
          '<b>Dropping <i>n</i>.</b> The mass formula is <i>W</i> = <i>MIt</i>/(<i>nF</i>) — students who use <i>W</i> = <i>MIt</i>/<i>F</i> overstate Cu, Al, etc. Always read <i>n</i> off the balanced electrode reaction.',
          '<b>Electrolytic polarity is opposite to galvanic.</b> In an electrolytic cell the anode is <b>+</b> and cathode is − (a battery drives it); in a galvanic cell anode is −. Mixing the two is a guaranteed mark-loss.',
          '<b>Forgetting water in aqueous electrolysis.</b> Always include H<sub>2</sub>O/H<sup>+</sup>/OH<sup>−</sup> as candidate species, and remember overpotential can override the electrode-potential prediction (concentrated NaCl → Cl<sub>2</sub>, not O<sub>2</sub>).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For series-cell problems, think in equivalents, not coulombs. The same charge means the same number of equivalents in every cell, so <i>W</i><sub>1</sub>/<i>W</i><sub>2</sub> = <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> gets you the answer in one line — no need to compute <i>Q</i> at all. And for gas-volume problems, the electron-per-molecule count (2 for H<sub>2</sub>, 4 for O<sub>2</sub>) is the whole game.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Electrolytic cell',
            note: 'external source drives a non-spontaneous reaction (reverse of galvanic). Anode = <b>+</b>, Cathode = −.',
          },
          {
            f: 'Faraday’s laws',
            note: '<i>W</i> = <i>ZIt</i> = <i>MIt</i>/(<i>nF</i>); in series, <i>W</i><sub>1</sub>/<i>W</i><sub>2</sub> = <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub>. 1 F = 96500 C = 1 mole of electrons = 1 equivalent.',
          },
          {
            f: 'Products of electrolysis depend on species present, their electrode potentials, and overpotential.',
            note: 'Molten NaCl → Na + Cl<sub>2</sub>; concentrated aqueous NaCl → H<sub>2</sub> + Cl<sub>2</sub> + NaOH.',
          },
          {
            f: 'Batteries',
            note: 'primary (dry, mercury), secondary (lead-storage, Ni–Cd), fuel cell (H<sub>2</sub>–O<sub>2</sub>, continuous feed). Lead storage: <b>density falls on discharge</b>.',
          },
          {
            f: 'Corrosion = micro galvanic cell; needs water + O<sub>2</sub>.',
            note: 'Prevent by barrier coating, <b>galvanisation</b> (Zn), or <b>sacrificial/cathodic protection</b> (Mg/Zn block).',
          },
        ],
        aids: [
          '“PoSiTiVe = oxidation in electroLYsis” — in an electroLYtic cell the + electrode is the anode (opposite to galvanic).',
          '“One mole e<sup>−</sup>, one equivalent, 96500” for Faraday.',
          '“Rust needs a Wet Air date” — Water + Air, no rust without both.',
        ],
      },
    ],
  },
];
