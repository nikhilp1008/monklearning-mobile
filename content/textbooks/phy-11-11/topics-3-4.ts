import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topics 03 and 04, pp. 759–774 of the Class 11 Physics Master
 * Reference, word for word: Thermodynamic Processes (pp. 759 to 767) and
 * Specific Heat Capacity (CP, CV and Mayer’s Relation) (pp. 768 to 774), each
 * split at the book's Sections 1 to 8. Figure 11.5 (caption p. 760, drawn on
 * p. 761), Figure 11.6 (caption p. 763, drawn on p. 764) and Figure 11.7
 * (caption p. 769, drawn on p. 770). The inexact differential the book prints
 * as a barred d is written đ.
 */
export const TOPICS: Topic[] = [
  {
    n: '03',
    title: 'Thermodynamic Processes',
    kalam: 'Master the four processes plus the polytropic generalisation, and the rest of thermodynamics is just assembly.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the most question-dense topic in the chapter. CBSE Boards almost always pull a 3–5 mark derivation from here — work done in an isothermal process, or the adiabatic relation <i>PV</i><sup><i>γ</i></sup> = constant. NEET fires rapid conceptual rounds: identifying processes from a <i>P</i>–<i>V</i> graph, the <i>Q</i>–<i>W</i> relation in each, and slope comparisons. JEE Main loves multi-step numericals combining a process with the first law and specific heats. JEE Advanced builds full cycles out of these process “legs” and asks you to compare work or temperatures across competing paths. Master the four processes plus the polytropic generalisation, and the rest of thermodynamics is just assembly.',
      },
      {
        t: 'p',
        html: 'We found the universal accountant — Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i>. But an accountant needs the rules of the particular transaction to fill in the numbers. A <b>thermodynamic process</b> is exactly that: a specified rule for how a system moves from one state to another. Pin down the rule, and the first law instantly tells you how heat, work, and internal energy divide up.',
      },
      {
        t: 'p',
        html: 'Return to our trusty gas-in-a-cylinder. Imagine four ways a gas-wala might handle the same cylinder, each holding one thing fixed:<br>• <b>Volume fixed (isochoric):</b> Bolt the piston so it cannot move. Heat the gas — its pressure climbs, but since the piston never budges, the gas does zero work. Every joule of heat goes straight into internal energy. Think of a sealed pressure cooker with a jammed lid: heat just builds pressure.<br>• <b>Pressure fixed (isobaric):</b> Let the piston slide freely against the constant push of the atmosphere. Heat the gas and it expands, doing work against that steady pressure while warming up. Water boiling in an open pan pushes steam out against unchanging atmospheric pressure.<br>• <b>Temperature fixed (isothermal):</b> Keep the cylinder in a giant water bath that never changes temperature, and move the piston slowly so the gas always stays at the bath’s temperature. Every bit of energy spent as work is replenished by heat sneaking in — so internal energy never changes. Slow is the key word.<br>• <b>No heat exchanged (adiabatic):</b> Wrap the cylinder in a perfect insulator, or move the piston so fast that heat has no time to flow. Now the gas must pay for any expansion entirely out of its own internal energy — so an adiabatic expansion cools the gas. This is why a bicycle pump’s nozzle gets hot when you pump fast, and why spray-can gas feels cold as it rushes out.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Isothermal and adiabatic are two opposite extremes of speed. Do the process infinitely slowly with the bath connected and heat flows freely to keep temperature pinned — isothermal. Do it so fast (or so well-insulated) that no heat can cross — adiabatic. Real processes live somewhere in between, but exams idealise to these clean limits. On a <i>P</i>–<i>V</i> diagram both look like falling curves, but the <b>adiabatic always falls more steeply</b>, because the adiabatic gas loses temperature as it expands and so loses pressure faster than the isothermal gas, whose temperature is propped up by incoming heat.',
      },
      {
        t: 'p',
        html: 'The deepest single fact in this topic: <b>work done by a gas equals the area under its <i>P</i>–<i>V</i> curve.</b> Two processes connecting the same two states enclose different areas, hence do different work — a direct picture of why <i>W</i> is a path function. And if a process traces a closed loop (a cycle), the work done per cycle is the area trapped inside the loop. That one geometric idea drives every heat-engine problem.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) The clean work formula <i>W</i> = ∫<i>P</i> d<i>V</i> requires the process to be quasi-static — slow enough that the gas has a single well-defined pressure at every instant. A violent, turbulent expansion has no single <i>P</i> (free expansion is the classic exception: gas rushes into vacuum, does zero work despite expanding). (2) The relations <i>PV</i><sup><i>γ</i></sup> = const, <i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>), etc. are derived for an ideal gas; real gases deviate at high pressure / low temperature. (3) “Isothermal” needs a heat reservoir and slowness; “adiabatic” needs insulation or speed — a quasi-static process can’t be both unless nothing actually happens.',
      },
      { t: 'fig', id: 'p11-11-fig-11.5' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: 'For <i>n</i> moles of an ideal gas; <i>C</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub> are molar heat capacities, <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> the adiabatic exponent, and <i>W</i> is the work done by the gas.',
      },
      {
        t: 'table',
        title: 'The four basic processes',
        head: ['Process', 'Condition', 'Work W', 'First-law result'],
        rows: [
          ['Isochoric', '<i>V</i> = const', '<i>W</i> = 0', 'Δ<i>Q</i> = Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i>'],
          ['Isobaric', '<i>P</i> = const', '<i>W</i> = <i>P</i>Δ<i>V</i> = <i>nR</i>Δ<i>T</i>', 'Δ<i>Q</i> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i>, Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i>'],
          [
            'Isothermal',
            '<i>T</i> = const',
            '<i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = <i>nRT</i> ln(<i>P</i><sub><i>i</i></sub>/<i>P</i><sub><i>f</i></sub>)',
            'Δ<i>U</i> = 0, Δ<i>Q</i> = <i>W</i>',
          ],
          [
            'Adiabatic',
            'Δ<i>Q</i> = 0',
            '<i>W</i> = (<i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> − <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub>)/(<i>γ</i> − 1) = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>γ</i> − 1)',
            'Δ<i>U</i> = −<i>W</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i>',
          ],
        ],
      },
      {
        t: 'formula',
        kicker: 'Adiabatic relations (three equivalent forms, ideal gas)',
        main: '<i>PV</i><sup><i>γ</i></sup> = const<br><i>TV</i><sup><i>γ</i>−1</sup> = const<br><i>P</i><sup>1−<i>γ</i></sup><i>T</i><sup><i>γ</i></sup> = const',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Polytropic process (the master process; all four above are special cases)',
        main: '<i>PV</i><sup><i>x</i></sup> = const<br><i>W</i> = (<i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> − <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub>)/(<i>x</i> − 1) = <i>nR</i> Δ<i>T</i>/(1 − <i>x</i>)<br>with molar heat capacity <i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>)',
        legend: [],
        note: 'Special cases: <i>x</i> = 0 (isobaric), <i>x</i> = 1 (isothermal), <i>x</i> = <i>γ</i> (adiabatic), <i>x</i> → ∞ (isochoric).',
      },
      {
        t: 'formula',
        kicker: 'Slope of the P–V curve for a polytropic process',
        main: 'd<i>P</i>/d<i>V</i> = −<i>xP</i>/<i>V</i><br>Hence at a common point: isobaric slope = 0; isothermal slope = −<i>P</i>/<i>V</i>; adiabatic slope = −<i>γP</i>/<i>V</i>',
        legend: [],
        note: 'The adiabatic curve is <i>γ</i> times steeper than the isothermal (<i>γ</i> > 1).',
      },
      {
        t: 'formula',
        kicker: 'Work in an isothermal process',
        main: '<i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = <i>nRT</i> ln(<i>P</i><sub><i>i</i></sub>/<i>P</i><sub><i>f</i></sub>)',
        legend: [
          '<i>W</i> = work done by the gas',
          '<i>n</i> = number of moles',
          '<i>R</i> = universal gas constant',
          '<i>T</i> = absolute (kelvin) temperature',
          '<i>V</i><sub><i>i</i></sub>, <i>V</i><sub><i>f</i></sub> = initial and final volumes',
          '<i>P</i><sub><i>i</i></sub>, <i>P</i><sub><i>f</i></sub> = initial and final pressures',
        ],
        note: '(ideal gas, quasi-static)',
      },
      {
        t: 'formula',
        kicker: 'Work in an adiabatic process',
        main: '<i>W</i> = (<i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> − <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub>)/(<i>γ</i> − 1) = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>γ</i> − 1)',
        legend: [
          '<i>W</i> = work done by the gas',
          '<i>P</i><sub><i>i</i></sub>, <i>V</i><sub><i>i</i></sub> = initial pressure and volume',
          '<i>P</i><sub><i>f</i></sub>, <i>V</i><sub><i>f</i></sub> = final pressure and volume',
          '<i>T</i><sub><i>i</i></sub>, <i>T</i><sub><i>f</i></sub> = initial and final temperatures',
          '<i>n</i> = number of moles',
          '<i>R</i> = universal gas constant',
          '<i>γ</i> = adiabatic exponent (= <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub>)',
        ],
        note: '(ideal gas, quasi-static)',
      },
      {
        t: 'table',
        title: 'Quantity reference',
        head: ['Quantity', 'Symbol', 'Notes'],
        rows: [
          ['Adiabatic exponent', '<i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub>', '5/3 monoatomic, 7/5 diatomic, 4/3 polyatomic (dimensionless)'],
          [
            'Molar heat capacity',
            '<i>C</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub>',
            '<i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i> (Mayer’s relation), J mol<sup>−1</sup> K<sup>−1</sup>',
          ],
          ['Work', '<i>W</i>', 'joule (J), = area under <i>P</i>–<i>V</i> curve'],
        ],
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: 'Two derivations are board favourites. Master both — the reasoning, not just the algebra.',
      },
      {
        t: 'p',
        html: '<b>3.1 Work done in an isothermal process</b><br><b>Setup.</b> Let <i>n</i> moles of an ideal gas expand quasi-statically and isothermally (temperature held at <i>T</i>) from volume <i>V</i><sub><i>i</i></sub> to <i>V</i><sub><i>f</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — pressure in terms of volume.</b> <i>PV</i> = <i>nRT</i> ⇒ <i>P</i> = <i>nRT</i>/<i>V</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — the work integral.</b><br><i>W</i> = ∫ <i>P</i> d<i>V</i> = ∫ (<i>nRT</i>/<i>V</i>) d<i>V</i> (from <i>V</i><sub><i>i</i></sub> to <i>V</i><sub><i>f</i></sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — integrate</b> (pull out the constants <i>n</i>, <i>R</i>, <i>T</i>):<br><i>W</i> = <i>nRT</i>(ln <i>V</i><sub><i>f</i></sub> − ln <i>V</i><sub><i>i</i></sub>) = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 4 — alternate form.</b> Since <i>T</i> is constant, <i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> = <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub>, so <i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub> = <i>P</i><sub><i>i</i></sub>/<i>P</i><sub><i>f</i></sub>, giving <i>W</i> = <i>nRT</i> ln(<i>P</i><sub><i>i</i></sub>/<i>P</i><sub><i>f</i></sub>). Physical reading: with Δ<i>U</i> = 0, the first law forces Δ<i>Q</i> = <i>W</i> — every joule the gas spends doing work is supplied as heat by the reservoir.',
      },
      {
        t: 'p',
        html: '<b>3.2 The adiabatic relation <i>PV</i><sup><i>γ</i></sup> = constant and the work done</b><br><b>Setup.</b> A quasi-static adiabatic process: Δ<i>Q</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — first law on an infinitesimal step.</b> With đ<i>Q</i> = 0, d<i>U</i> = <i>nC</i><sub><i>V</i></sub> d<i>T</i>, đ<i>W</i> = <i>P</i> d<i>V</i>:<br>0 = <i>nC</i><sub><i>V</i></sub> d<i>T</i> + <i>P</i> d<i>V</i>.   (1)',
      },
      {
        t: 'p',
        html: '<b>Step 2 — eliminate d<i>T</i> via the gas law.</b> Differentiating <i>PV</i> = <i>nRT</i>: <i>P</i> d<i>V</i> + <i>V</i> d<i>P</i> = <i>nR</i> d<i>T</i>, so d<i>T</i> = (<i>P</i> d<i>V</i> + <i>V</i> d<i>P</i>)/(<i>nR</i>). Substituting into (1) and multiplying by <i>R</i>:<br><i>C</i><sub><i>V</i></sub>(<i>P</i> d<i>V</i> + <i>V</i> d<i>P</i>) + <i>RP</i> d<i>V</i> = 0 ⇒ <i>C</i><sub><i>V</i></sub><i>V</i> d<i>P</i> + (<i>C</i><sub><i>V</i></sub> + <i>R</i>)<i>P</i> d<i>V</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — introduce <i>γ</i>.</b> Using Mayer’s relation <i>C</i><sub><i>P</i></sub> = <i>C</i><sub><i>V</i></sub> + <i>R</i>:<br><i>C</i><sub><i>V</i></sub><i>V</i> d<i>P</i> + <i>C</i><sub><i>P</i></sub><i>P</i> d<i>V</i> = 0.<br>Divide by <i>C</i><sub><i>V</i></sub><i>PV</i> and use <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub>:<br>d<i>P</i>/<i>P</i> + <i>γ</i> d<i>V</i>/<i>V</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — integrate.</b><br>ln <i>P</i> + <i>γ</i> ln <i>V</i> = const ⇒ <i>PV</i><sup><i>γ</i></sup> = constant.<br>Substituting <i>P</i> = <i>nRT</i>/<i>V</i> gives <i>TV</i><sup><i>γ</i>−1</sup> = const; eliminating <i>V</i> gives <i>P</i><sup>1−<i>γ</i></sup><i>T</i><sup><i>γ</i></sup> = const.',
      },
      {
        t: 'p',
        html: '<b>Step 5 — work done.</b> With <i>P</i> = <i>K</i>/<i>V</i><sup><i>γ</i></sup> where <i>K</i> = <i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub><sup><i>γ</i></sup> = <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub><sup><i>γ</i></sup>:<br><i>W</i> = ∫ (<i>K</i>/<i>V</i><sup><i>γ</i></sup>) d<i>V</i> (from <i>V</i><sub><i>i</i></sub> to <i>V</i><sub><i>f</i></sub>) = <i>K</i>(<i>V</i><sub><i>f</i></sub><sup>1−<i>γ</i></sup> − <i>V</i><sub><i>i</i></sub><sup>1−<i>γ</i></sup>)/(1 − <i>γ</i>) = (<i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub> − <i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>)/(1 − <i>γ</i>),<br><i>W</i> = (<i>P</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub> − <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub>)/(<i>γ</i> − 1) = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>γ</i> − 1).<br>Physical reading: with Δ<i>Q</i> = 0, the first law gives <i>W</i> = −Δ<i>U</i>. In an adiabatic expansion (<i>V</i><sub><i>f</i></sub> > <i>V</i><sub><i>i</i></sub>) the gas does positive work, so Δ<i>U</i> < 0 and the gas cools — the spray-can effect.',
      },
      { t: 'fig', id: 'p11-11-fig-11.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '2.0 mol of an ideal gas at 300 K expand isothermally and quasi-statically until their volume triples. Find (a) the work done and (b) the heat absorbed. (<i>R</i> = 8.314, ln 3 = 1.0986.)',
        steps: [
          '(a) Isothermal work:<br><i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) = (2.0)(8.314)(300)(1.0986)',
          '(b) Isothermal ⇒ Δ<i>U</i> = 0 ⇒ Δ<i>Q</i> = <i>W</i>.',
          'All the heat absorbed leaves as work; temperature and internal energy are unchanged.',
        ],
        ans: '(a) <i>W</i> ≈ 5.48 kJ; (b) Δ<i>Q</i> ≈ 5.48 kJ',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A monoatomic ideal gas (<i>γ</i> = 5/3) is compressed adiabatically until its volume becomes one-eighth of its initial value. By what factor does its absolute temperature change?',
        steps: [
          '<b>Speed solution.</b> Use <i>TV</i><sup><i>γ</i>−1</sup> = const:<br><i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> = (<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup><i>γ</i>−1</sup> = 8<sup>5/3−1</sup> = 8<sup>2/3</sup>.',
          '<b>Mentally:</b> 8 = 2<sup>3</sup>, so 8<sup>2/3</sup> = 2<sup>3×2/3</sup> = 2<sup>2</sup> = 4.',
          '<b>Classic mistakes:</b> (i) using exponent <i>γ</i> instead of <i>γ</i> − 1, giving 8<sup>5/3</sup> = 32; (ii) inverting the volume ratio, giving 8<sup>−2/3</sup> = 1/4. The physical check saves you: compression must raise temperature, so the factor exceeds 1 — instantly killing 1/4.',
        ],
        ans: '<i>T</i><sub><i>f</i></sub> = 4<i>T</i><sub><i>i</i></sub> — the temperature quadruples',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '3.0 mol of a diatomic ideal gas (<i>γ</i> = 7/5, so <i>C</i><sub><i>V</i></sub> = (5/2)<i>R</i>, <i>C</i><sub><i>P</i></sub> = (7/2)<i>R</i>) are heated at constant pressure so the temperature rises by 100 K. Find (a) the work done, (b) Δ<i>U</i>, (c) the heat supplied. Verify the first law.',
        steps: [
          '(a) Isobaric work: <i>W</i> = <i>nR</i>Δ<i>T</i> = (3.0)(8.314)(100)',
          '(b) Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> = (3.0)((5/2) × 8.314)(100) = (3.0)(20.785)(100)',
          '(c) Δ<i>Q</i> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i> = (3.0)((7/2) × 8.314)(100) = (3.0)(29.099)(100)',
          '<b>Verification:</b> Δ<i>U</i> + <i>W</i> = 6.24 + 2.49 = 8.73 kJ = Δ<i>Q</i>. ✓',
          'Heat and internal-energy change stand in the ratio Δ<i>Q</i> ∶ Δ<i>U</i> = <i>C</i><sub><i>P</i></sub> ∶ <i>C</i><sub><i>V</i></sub> = <i>γ</i> ∶ 1 = 7 ∶ 5 (so Δ<i>U</i> ∶ <i>W</i> = 5 ∶ 2) — a quick structural check for any isobaric problem.',
        ],
        ans: '(a) <i>W</i> ≈ 2.49 kJ; (b) Δ<i>U</i> ≈ 6.24 kJ; (c) Δ<i>Q</i> ≈ 8.73 kJ',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A monoatomic ideal gas (<i>γ</i> = 5/3) starts at <i>P</i><sub>0</sub>, <i>V</i><sub>0</sub> and expands to 2<i>V</i><sub>0</sub> by two routes: (i) isothermally, (ii) adiabatically. Find the ratio of work done in the isothermal expansion to that in the adiabatic, and explain which is larger and why.',
        steps: [
          '<b>Step 1 — isothermal work</b> (with <i>nRT</i> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>):<br><i>W</i><sub>iso</sub> = <i>nRT</i> ln(2<i>V</i><sub>0</sub>/<i>V</i><sub>0</sub>) = <i>P</i><sub>0</sub><i>V</i><sub>0</sub> ln 2 ≈ 0.693 <i>P</i><sub>0</sub><i>V</i><sub>0</sub>.',
          '<b>Step 2 — adiabatic final pressure.</b> <i>P</i><sub>0</sub><i>V</i><sub>0</sub><sup><i>γ</i></sup> = <i>P</i><sub><i>f</i></sub>(2<i>V</i><sub>0</sub>)<sup><i>γ</i></sup> ⇒ <i>P</i><sub><i>f</i></sub> = <i>P</i><sub>0</sub> 2<sup>−<i>γ</i></sup> = <i>P</i><sub>0</sub> 2<sup>−5/3</sup>, so<br><i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub> = <i>P</i><sub>0</sub> 2<sup>−5/3</sup>(2<i>V</i><sub>0</sub>) = <i>P</i><sub>0</sub><i>V</i><sub>0</sub> 2<sup>1−5/3</sup> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub> 2<sup>−2/3</sup>.',
          '<b>Step 3 — adiabatic work.</b><br><i>W</i><sub>adia</sub> = (<i>P</i><sub>0</sub><i>V</i><sub>0</sub> − <i>P</i><sub><i>f</i></sub><i>V</i><sub><i>f</i></sub>)/(<i>γ</i> − 1) = <i>P</i><sub>0</sub><i>V</i><sub>0</sub>(1 − 2<sup>−2/3</sup>)/(5/3 − 1) = (3/2)<i>P</i><sub>0</sub><i>V</i><sub>0</sub>(1 − 2<sup>−2/3</sup>).<br>With 2<sup>−2/3</sup> ≈ 0.630: <i>W</i><sub>adia</sub> ≈ (3/2)(0.370)<i>P</i><sub>0</sub><i>V</i><sub>0</sub> ≈ 0.555 <i>P</i><sub>0</sub><i>V</i><sub>0</sub>.',
          '<b>Step 4 — the ratio:</b><br><i>W</i><sub>iso</sub>/<i>W</i><sub>adia</sub> = 0.693/0.555',
          'Both start at the same point and end at the same volume, but the isothermal gas is continuously fed heat, keeping its temperature — and pressure — higher at every intermediate volume. The adiabatic gas, sealed off, spends its own internal energy and cools, its pressure dropping faster. Higher pressure throughout means a larger area under the curve, hence more work. This is the geometric truth behind the rule <b>isobaric > isothermal > adiabatic</b> for expansion work between the same volumes.',
        ],
        ans: '<i>W</i><sub>iso</sub>/<i>W</i><sub>adia</sub> ≈ 1.25 — the isothermal expansion does about 25% more work',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] 0.50 mol of an ideal gas is heated at constant pressure, raising its temperature from 300 K to 400 K. Find the work done by the gas.',
            a: '<i>W</i> = <i>nR</i>Δ<i>T</i> = (0.50)(8.314)(100) ≈ 416 J.',
          },
          {
            q: '[NEET] On a <i>P</i>–<i>V</i> diagram, an isothermal and an adiabatic curve pass through the same point for the same gas. State which is steeper, by what factor their slopes differ, and which process does less work during an expansion to the same final volume.',
            a: 'The adiabatic is steeper; its slope is <i>γ</i> times the isothermal slope at that point; the adiabatic process does less work (smaller area under the curve).',
          },
          {
            q: '[JEE Main] A diatomic ideal gas (<i>γ</i> = 1.4) at 300 K is compressed adiabatically to one-fourth its initial volume. Find the final temperature. (4<sup>0.4</sup> ≈ 1.741.)',
            a: '<i>T</i><sub><i>f</i></sub> = 300 × 4<sup>0.4</sup> ≈ 300 × 1.741 ≈ 522 K.',
          },
          {
            q: '[JEE Main] 4.0 mol of a monoatomic ideal gas (<i>C</i><sub><i>V</i></sub> = (3/2)<i>R</i>) is heated at constant volume so its temperature rises by 50 K. Find the work done by the gas and the heat supplied.',
            a: '<i>W</i> = 0 (isochoric); Δ<i>Q</i> = Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> = (4.0)((3/2) × 8.314)(50) ≈ 2.49 kJ.',
          },
          {
            q: '[JEE Advanced] 2.0 mol of an ideal gas with <i>γ</i> = 1.5 expands adiabatically, its temperature falling from 500 K to 350 K. Find the work done.',
            a: '<i>W</i> = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>γ</i> − 1) = (2.0)(8.314)(150)/0.5 ≈ 4.99 kJ.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'An ideal gas expands from the same initial state to the same final volume by isobaric, isothermal, and adiabatic processes. The work done is greatest in the:',
        opts: [
          { label: 'adiabatic', nudge: '<b>(A)</b> adiabatic does the least work.' },
          { label: 'isothermal', nudge: '<b>(B)</b> isothermal sits in the middle.' },
          { label: 'isobaric', nudge: null },
          { label: 'same in all', nudge: '<b>(D)</b> ignores that <i>W</i> is path-dependent.' },
        ],
        correct: 2,
        solution: 'Work is the area under the <i>P</i>–<i>V</i> curve; the isobaric path keeps pressure highest (flat), enclosing the largest area. Order: isobaric > isothermal > adiabatic.',
      },
      {
        t: 'mcq',
        q: 'At a given point, the magnitude of the slope of the adiabatic curve relates to that of the isothermal by a factor of:',
        opts: [
          { label: '<i>γ</i>', nudge: null },
          { label: '1/<i>γ</i>', nudge: '<b>(B)</b> inverts the relationship.' },
          { label: '<i>γ</i> − 1', nudge: '<b>(C)</b> confuses the slope ratio with the <i>TV</i><sup><i>γ</i>−1</sup> exponent.' },
          { label: '<i>γ</i><sup>2</sup>', nudge: '<b>(D)</b> has no basis.' },
        ],
        correct: 0,
        solution: 'Isothermal slope = −<i>P</i>/<i>V</i>; adiabatic = −<i>γP</i>/<i>V</i>. Ratio of magnitudes is <i>γ</i>.',
      },
      {
        t: 'mcq',
        q: 'For an adiabatic process of an ideal gas, which is correct?',
        opts: [
          { label: 'Δ<i>Q</i> = <i>W</i>', nudge: '<b>(A)</b> is isothermal.' },
          { label: 'Δ<i>U</i> = 0', nudge: '<b>(B)</b> is isothermal.' },
          { label: 'Δ<i>U</i> = −<i>W</i>', nudge: null },
          { label: '<i>W</i> = 0', nudge: '<b>(D)</b> is isochoric.' },
        ],
        correct: 2,
        solution: 'Δ<i>Q</i> = 0 so 0 = Δ<i>U</i> + <i>W</i>. The gas does work entirely at the expense of internal energy.',
      },
      {
        t: 'mcq',
        q: 'A monoatomic ideal gas (<i>γ</i> = 5/3) is compressed adiabatically to half its volume. Its absolute temperature changes by a factor of approximately:',
        opts: [
          { label: '2<sup>2/3</sup> ≈ 1.59', nudge: null },
          { label: '2<sup>5/3</sup> ≈ 3.17', nudge: '<b>(B)</b> uses exponent <i>γ</i> instead of <i>γ</i> − 1.' },
          { label: '2', nudge: '<b>(C)</b> ignores the exponent.' },
          { label: '2<sup>1/3</sup> ≈ 1.26', nudge: '<b>(D)</b> miscomputes <i>γ</i> − 1 as 1/3 (it is 2/3).' },
        ],
        correct: 0,
        solution: '<i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> = (<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup><i>γ</i>−1</sup> = 2<sup>2/3</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing isothermal and adiabatic curves.</b> They look like twins. Remember: adiabatic is steeper (−<i>γP</i>/<i>V</i> vs −<i>P</i>/<i>V</i>), the adiabatic gas changes temperature while the isothermal does not, and Δ<i>Q</i> = <i>W</i> is isothermal while Δ<i>U</i> = −<i>W</i> is adiabatic.',
          '<b>Using <i>γ</i> where <i>γ</i> − 1 belongs (and vice-versa).</b> Pressure relation uses <i>γ</i> (<i>PV</i><sup><i>γ</i></sup>); temperature relation uses <i>γ</i> − 1 (<i>TV</i><sup><i>γ</i>−1</sup>). Writing <i>TV</i><sup><i>γ</i></sup> = const is a classic slip.',
          '<b>Applying a process formula outside its process.</b> <i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>) is only isothermal; <i>W</i> = <i>P</i>Δ<i>V</i> is only isobaric.',
          '<b>Sign and direction of work / cyclic area.</b> Expansion <i>W</i> > 0; compression <i>W</i> < 0. For a cycle, net work = enclosed area, positive if clockwise on a <i>P</i>–<i>V</i> diagram (engine), negative if anticlockwise (refrigerator).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> For adiabatic numericals, work with ratios, never absolute pressures — <i>T</i><sub><i>f</i></sub>/<i>T</i><sub><i>i</i></sub> = (<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup><i>γ</i>−1</sup> and <i>P</i><sub><i>f</i></sub>/<i>P</i><sub><i>i</i></sub> = (<i>V</i><sub><i>i</i></sub>/<i>V</i><sub><i>f</i></sub>)<sup><i>γ</i></sup> collapse most problems to a single power of a clean number. To identify a process from a <i>P</i>–<i>V</i> graph in seconds: vertical line → isochoric; horizontal → isobaric; of the two curves, the steeper one is adiabatic. And for adiabatic work, skip the integral — use <i>W</i> = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>γ</i> − 1) once you know the two temperatures.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Isochoric (<i>V</i> const)', note: '<i>W</i> = 0, Δ<i>Q</i> = Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i>. (Vertical line.)' },
          { f: 'Isobaric (<i>P</i> const)', note: '<i>W</i> = <i>P</i>Δ<i>V</i> = <i>nR</i>Δ<i>T</i>, Δ<i>Q</i> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i>. (Horizontal line.)' },
          {
            f: 'Isothermal (<i>T</i> const)',
            note: 'Δ<i>U</i> = 0, Δ<i>Q</i> = <i>W</i> = <i>nRT</i> ln(<i>V</i><sub><i>f</i></sub>/<i>V</i><sub><i>i</i></sub>). (Gentle hyperbola.)',
          },
          {
            f: 'Adiabatic (Δ<i>Q</i> = 0)',
            note: 'Δ<i>U</i> = −<i>W</i>, <i>W</i> = <i>nR</i>(<i>T</i><sub><i>i</i></sub> − <i>T</i><sub><i>f</i></sub>)/(<i>γ</i> − 1); <i>PV</i><sup><i>γ</i></sup>, <i>TV</i><sup><i>γ</i>−1</sup> = const. (Steep curve.)',
          },
          {
            f: 'Polytropic <i>PV</i><sup><i>x</i></sup> = const',
            note: '<i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>); recovers all four at <i>x</i> = 0, 1, <i>γ</i>, ∞.',
          },
          { f: 'Slope = −<i>xP</i>/<i>V</i>; adiabatic is <i>γ</i>× steeper than isothermal.', note: '' },
          { f: 'Expansion work order', note: 'isobaric > isothermal > adiabatic. Cycle work = enclosed area (clockwise = +).' },
        ],
        aids: [
          '“<i>V</i>-fixed kills Work; <i>T</i>-fixed kills Δ<i>U</i>; <i>Q</i>-zero is adiabatic; <i>P</i>-fixed needs <i>C</i><sub><i>P</i></sub>.”',
          '“Adiabatic is the Athlete — steeper and cools down when it works.”',
          '“Pressure uses <i>γ</i>, Temperature uses <i>γ</i> − 1.”',
        ],
      },
    ],
  },

  {
    n: '04',
    title: 'Specific Heat Capacity (CP, CV and Mayer’s Relation)',
    kalam: 'A gas expands dramatically on heating, so how you heat it matters.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic is the hinge between the first law and every numerical that follows. CBSE Boards ask the definition of <i>C</i><sub><i>P</i></sub> and <i>C</i><sub><i>V</i></sub>, the derivation of Mayer’s relation <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>, and one-line “why is <i>C</i><sub><i>P</i></sub> > <i>C</i><sub><i>V</i></sub>” reasoning. NEET fires conceptual traps on degrees of freedom and the value of <i>γ</i> for mono/di/polyatomic gases. JEE Main folds <i>C</i><sub><i>V</i></sub> and <i>C</i><sub><i>P</i></sub> into isobaric/isochoric numericals (heat, Δ<i>U</i>, work). JEE Advanced probes mixtures of gases, the polytropic molar heat capacity, and the link between equipartition and <i>γ</i>. Get <i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i> and <i>γ</i> = 1 + 2/<i>f</i> into reflex memory.',
      },
      {
        t: 'p',
        html: 'Pour the same amount of heat into a small steel spanner and into a bucket of water, and the spanner’s temperature shoots up while the water barely warms. <b>Heat capacity</b> measures exactly this reluctance: how much heat a body needs to raise its temperature by one degree. Divide by mass and you get the <b>specific heat capacity</b> <i>s</i> (per kilogram); divide by moles and you get the <b>molar specific heat capacity</b> <i>C</i> (per mole). Water’s famously large specific heat is why coastal cities have mild climates and why a hot-water bottle stays warm all night.',
      },
      {
        t: 'p',
        html: 'For solids and liquids, one number is enough — they barely expand on heating, so essentially all the heat becomes internal energy. Gases are different, and this is the heart of the topic. A gas expands dramatically on heating, so how you heat it matters. Heat it in a sealed rigid box (constant volume) and it cannot expand: every joule goes into internal energy. Heat it under a free piston (constant pressure) and it expands, spending some of the incoming heat pushing the piston back — so you must supply extra heat to get the same temperature rise. A gas therefore needs two molar specific heats: <i>C</i><sub><i>V</i></sub> (constant volume) and <i>C</i><sub><i>P</i></sub> (constant pressure), and always <i>C</i><sub><i>P</i></sub> > <i>C</i><sub><i>V</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine filling a bucket that has a small leak at the bottom. If you plug the leak (constant volume — no escape), every mug of water you pour raises the level. If you leave the leak open (constant pressure — the gas “leaks” energy into expansion work), some of every mug drains away, so you must pour more to raise the level by the same amount. The plugged bucket is <i>C</i><sub><i>V</i></sub>; the leaky one is <i>C</i><sub><i>P</i></sub>. The size of the leak is exactly the work of expansion — and for one mole of an ideal gas heated by one kelvin at constant pressure, that leak is precisely <i>R</i> joules. That single sentence is Mayer’s relation, <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>.',
      },
      {
        t: 'p',
        html: '<b>The deeper picture — degrees of freedom.</b> Why is <i>C</i><sub><i>V</i></sub> = (3/2)<i>R</i> for helium but (5/2)<i>R</i> for nitrogen? Because internal energy is stored in the ways a molecule can move. A point-like monoatomic atom can only translate in three directions — three <b>degrees of freedom</b>. A dumbbell-shaped diatomic molecule can also tumble about two axes — five. The <b>equipartition theorem</b> hands each degree of freedom an energy of ½<i>k</i><sub><i>B</i></sub><i>T</i> per molecule, i.e. ½<i>R</i> per mole per kelvin. So <i>n</i> moles of molecules with <i>f</i> active degrees of freedom store <i>U</i> = (<i>f</i>/2)<i>nRT</i>, giving <i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i>. More ways to wiggle means more places to hide energy, which means a larger heat capacity.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i> holds per mole of an ideal gas; for real gases it is only approximate, and for solids and liquids it does not apply (there <i>C</i><sub><i>P</i></sub> ≈ <i>C</i><sub><i>V</i></sub>). (2) The clean values <i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i> assume the equipartition theorem, which is a high-temperature (classical) result — at low temperatures vibrational and even rotational modes “freeze out” and <i>C</i><sub><i>V</i></sub> drops (a quantum effect beyond Class 11, but worth knowing exists). (3) For diatomic gases at ordinary room temperature, rotation is active but vibration is usually frozen, so <i>f</i> = 5, not 7.',
      },
      { t: 'fig', id: 'p11-11-fig-11.7' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Heat capacity (of a body)',
        main: '<i>S</i> = Δ<i>Q</i>/Δ<i>T</i>',
        legend: [],
        note: '(units J K<sup>−1</sup>).',
      },
      {
        t: 'formula',
        kicker: 'Specific heat capacity (per unit mass)',
        main: '<i>s</i> = (1/<i>m</i>)(Δ<i>Q</i>/Δ<i>T</i>)<br>Δ<i>Q</i> = <i>m s</i> Δ<i>T</i>',
        legend: [],
        note: '(units J kg<sup>−1</sup> K<sup>−1</sup>).',
      },
      {
        t: 'formula',
        kicker: 'Molar specific heat capacity (per mole)',
        main: '<i>C</i> = (1/<i>n</i>)(Δ<i>Q</i>/Δ<i>T</i>)',
        legend: [],
        note: '(units J mol<sup>−1</sup> K<sup>−1</sup>).',
      },
      {
        t: 'formula',
        kicker: 'For a gas — the two molar specific heats',
        main: '<i>C</i><sub><i>V</i></sub> = ((1/<i>n</i>)(Δ<i>Q</i>/Δ<i>T</i>))<sub><i>V</i></sub> = (1/<i>n</i>)(d<i>U</i>/d<i>T</i>)<br><i>C</i><sub><i>P</i></sub> = ((1/<i>n</i>)(Δ<i>Q</i>/Δ<i>T</i>))<sub><i>P</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mayer’s relation (ideal gas, per mole)',
        main: '<i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equipartition and degrees of freedom (f active degrees of freedom)',
        main: '<i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i><br><i>C</i><sub><i>P</i></sub> = (<i>f</i>/2 + 1)<i>R</i><br><i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> = 1 + 2/<i>f</i>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Standard ideal-gas values',
        head: ['Gas type', 'f', 'CV', 'CP', 'γ = CP/CV'],
        rows: [
          ['Monoatomic (He, Ar)', '3', '(3/2)<i>R</i> ≈ 12.5', '(5/2)<i>R</i> ≈ 20.8', '5/3 ≈ 1.67'],
          ['Diatomic (N<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>)', '5', '(5/2)<i>R</i> ≈ 20.8', '(7/2)<i>R</i> ≈ 29.1', '7/5 = 1.40'],
          ['Polyatomic (nonlinear, e.g. H<sub>2</sub>O, NH<sub>3</sub>)', '6', '3<i>R</i> ≈ 24.9', '4<i>R</i> ≈ 33.3', '4/3 ≈ 1.33'],
        ],
        note: '(<i>C</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub> in J mol<sup>−1</sup> K<sup>−1</sup>, using <i>R</i> = 8.314.)',
      },
      {
        t: 'formula',
        kicker: 'Internal energy from C<sub>V</sub> (any process, ideal gas)',
        main: '<i>U</i> = <i>nC</i><sub><i>V</i></sub><i>T</i><br>Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub> Δ<i>T</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Polytropic molar heat capacity (PVˣ = const)',
        main: '<i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>)',
        legend: [],
        note: 'Special cases: isobaric <i>x</i> = 0 ⇒ <i>C</i><sub><i>P</i></sub>; isothermal <i>x</i> = 1 ⇒ <i>C</i> → ∞; adiabatic <i>x</i> = <i>γ</i> ⇒ <i>C</i> = 0; isochoric <i>x</i> → ∞ ⇒ <i>C</i><sub><i>V</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Useful benchmarks:</b> water <i>s</i> ≈ 4186 J kg<sup>−1</sup> K<sup>−1</sup> = 1 cal g<sup>−1</sup> °C<sup>−1</sup>; Dulong–Petit law for many solids: molar heat capacity ≈ 3<i>R</i> ≈ 25 J mol<sup>−1</sup> K<sup>−1</sup>.',
      },
      {
        t: 'formula',
        kicker: 'For a mixture of n₁, n₂, … moles of gases',
        main: '<i>C</i><sub><i>V</i>,mix</sub> = (∑ <i>n</i><sub><i>i</i></sub><i>C</i><sub><i>V</i>,<i>i</i></sub>)/(∑ <i>n</i><sub><i>i</i></sub>), and similarly for <i>C</i><sub><i>P</i></sub>;<br>then <i>γ</i><sub>mix</sub> = <i>C</i><sub><i>P</i>,mix</sub>/<i>C</i><sub><i>V</i>,mix</sub>.',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '<b>3.1 Derivation of Mayer’s relation <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i> (board favourite)</b><br><b>Setup.</b> Consider one mole (<i>n</i> = 1) of an ideal gas. We heat it by d<i>T</i>, once at constant volume and once at constant pressure, and compare.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — constant volume.</b> No work is done (d<i>V</i> = 0), so the first law đ<i>Q</i> = d<i>U</i> + <i>P</i> d<i>V</i> gives đ<i>Q</i><sub><i>V</i></sub> = d<i>U</i>. By definition <i>C</i><sub><i>V</i></sub> = (1/<i>n</i>)(đ<i>Q</i>/d<i>T</i>)<sub><i>V</i></sub> = d<i>U</i>/d<i>T</i> (for one mole), hence<br>d<i>U</i> = <i>C</i><sub><i>V</i></sub> d<i>T</i>.<br>Crucially, for an ideal gas <i>U</i> depends only on <i>T</i>, so this d<i>U</i> = <i>C</i><sub><i>V</i></sub> d<i>T</i> holds for every process, not just constant volume.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — constant pressure.</b> Now đ<i>Q</i><sub><i>P</i></sub> = d<i>U</i> + <i>P</i> d<i>V</i> = <i>C</i><sub><i>V</i></sub> d<i>T</i> + <i>P</i> d<i>V</i>. By definition đ<i>Q</i><sub><i>P</i></sub> = <i>C</i><sub><i>P</i></sub> d<i>T</i>, so<br><i>C</i><sub><i>P</i></sub> d<i>T</i> = <i>C</i><sub><i>V</i></sub> d<i>T</i> + <i>P</i> d<i>V</i>.   (1)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — evaluate <i>P</i> d<i>V</i> from the gas law.</b> For one mole, <i>PV</i> = <i>RT</i>. At constant pressure, differentiate: <i>P</i> d<i>V</i> = <i>R</i> d<i>T</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — substitute into (1).</b><br><i>C</i><sub><i>P</i></sub> d<i>T</i> = <i>C</i><sub><i>V</i></sub> d<i>T</i> + <i>R</i> d<i>T</i> ⇒ <i>C</i><sub><i>P</i></sub> = <i>C</i><sub><i>V</i></sub> + <i>R</i>, i.e. <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>.',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> the extra <i>R</i> is precisely the work <i>P</i> d<i>V</i> = <i>R</i> d<i>T</i> done pushing back the surroundings per mole per kelvin at constant pressure. That “leak” is why <i>C</i><sub><i>P</i></sub> > <i>C</i><sub><i>V</i></sub> always, by exactly <i>R</i>.',
      },
      {
        t: 'p',
        html: '<b>3.2 Why <i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i> (the equipartition link)</b><br>1. Equipartition assigns each active degree of freedom an average energy ½<i>k</i><sub><i>B</i></sub><i>T</i> per molecule.<br>2. For <i>N</i> molecules (<i>n</i> moles, <i>N</i> = <i>nN</i><sub><i>A</i></sub>) with <i>f</i> degrees of freedom: <i>U</i> = <i>N</i> · <i>f</i> · ½<i>k</i><sub><i>B</i></sub><i>T</i> = (<i>f</i>/2)<i>nRT</i> (using <i>N</i><sub><i>A</i></sub><i>k</i><sub><i>B</i></sub> = <i>R</i>).<br>3. Then <i>C</i><sub><i>V</i></sub> = (1/<i>n</i>)(d<i>U</i>/d<i>T</i>) = (<i>f</i>/2)<i>R</i>, and Mayer gives <i>C</i><sub><i>P</i></sub> = (<i>f</i>/2 + 1)<i>R</i>, so <i>γ</i> = 1 + 2/<i>f</i>.<br>4. Reading off <i>f</i>: monoatomic <i>f</i> = 3 (3 translations); diatomic <i>f</i> = 5 (3 translations + 2 rotations) at room temperature; nonlinear polyatomic <i>f</i> = 6 (3 translations + 3 rotations).',
      },
      {
        t: 'proc',
        title: '3.3 Procedure: choosing CV or CP in a numerical',
        steps: [
          'For Δ<i>U</i>, always use Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> — it is process-independent for an ideal gas.',
          'For heat Δ<i>Q</i>: at constant volume use <i>nC</i><sub><i>V</i></sub>Δ<i>T</i>; at constant pressure use <i>nC</i><sub><i>P</i></sub>Δ<i>T</i>; for a general polytrope use <i>nC</i> Δ<i>T</i> with <i>C</i> = <i>C</i><sub><i>V</i></sub> + <i>R</i>/(1 − <i>x</i>).',
          'Identify <i>f</i> (and hence <i>C</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub>, <i>γ</i>) from the gas type before plugging numbers.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'The molar specific heat at constant volume of a gas is <i>C</i><sub><i>V</i></sub> = 20.8 J mol<sup>−1</sup> K<sup>−1</sup>. Identify the gas type and find <i>C</i><sub><i>P</i></sub> and <i>γ</i>. (<i>R</i> = 8.314.)',
        steps: [
          '<i>C</i><sub><i>V</i></sub> = (5/2)<i>R</i> = 20.8 ⇒ <i>f</i> = 5, a diatomic gas. By Mayer, <i>C</i><sub><i>P</i></sub> = <i>C</i><sub><i>V</i></sub> + <i>R</i> = 20.8 + 8.3 = 29.1 J mol<sup>−1</sup> K<sup>−1</sup>, and <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> = 29.1/20.8 ≈ 7/5.',
        ],
        ans: 'Diatomic; <i>C</i><sub><i>P</i></sub> ≈ 29.1 J mol<sup>−1</sup> K<sup>−1</sup>, <i>γ</i> = 1.40',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'For which gas is the fraction of heat (supplied at constant pressure) that goes into work the largest: monoatomic, diatomic, or polyatomic?',
        steps: [
          '<b>Speed solution.</b> At constant pressure the work fraction is <i>W</i>/Δ<i>Q</i> = (<i>nR</i>Δ<i>T</i>)/(<i>nC</i><sub><i>P</i></sub>Δ<i>T</i>) = <i>R</i>/<i>C</i><sub><i>P</i></sub> = <i>R</i>/((<i>f</i>/2 + 1)<i>R</i>) = 2/(<i>f</i> + 2). This decreases as <i>f</i> increases, so it is largest for the smallest <i>f</i> — the monoatomic gas.',
          '<b>The trap:</b> students assume “polyatomic absorbs the most heat, so it does the most work.” But more degrees of freedom means more heat is siphoned into internal modes, leaving a smaller share for expansion work.',
        ],
        ans: 'Monoatomic (<i>f</i> = 3): work fraction = 2/5 = 40%, the largest',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '2.0 mol of a monoatomic ideal gas is heated so its temperature rises by 60 K. Find the heat supplied (a) if the heating is at constant volume, (b) if at constant pressure, and (c) the difference between the two, interpreting it physically. (<i>R</i> = 8.314.)',
        steps: [
          'Monoatomic: <i>C</i><sub><i>V</i></sub> = (3/2)<i>R</i> = 12.47, <i>C</i><sub><i>P</i></sub> = (5/2)<i>R</i> = 20.79 J mol<sup>−1</sup> K<sup>−1</sup>.',
          '(a) Δ<i>Q</i><sub><i>V</i></sub> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> = (2.0)(12.47)(60)',
          '(b) Δ<i>Q</i><sub><i>P</i></sub> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i> = (2.0)(20.79)(60)',
          '(c) Difference = Δ<i>Q</i><sub><i>P</i></sub> − Δ<i>Q</i><sub><i>V</i></sub> = <i>nR</i>Δ<i>T</i> = (2.0)(8.314)(60)',
          'The extra ≈ 1.0 kJ at constant pressure is exactly the expansion work <i>nR</i>Δ<i>T</i> the gas does against the surroundings — the same <i>R</i> that appears in Mayer’s relation.',
        ],
        ans: '(a) Δ<i>Q</i><sub><i>V</i></sub> ≈ 1.50 kJ; (b) Δ<i>Q</i><sub><i>P</i></sub> ≈ 2.49 kJ; (c) difference ≈ 1.0 kJ',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A container holds a mixture of 2.0 mol of a monoatomic ideal gas and 4.0 mol of a diatomic ideal gas. Find <i>C</i><sub><i>V</i>,mix</sub>, <i>C</i><sub><i>P</i>,mix</sub>, and <i>γ</i><sub>mix</sub>.',
        steps: [
          'For the components: monoatomic <i>C</i><sub><i>V</i>1</sub> = (3/2)<i>R</i>, diatomic <i>C</i><sub><i>V</i>2</sub> = (5/2)<i>R</i>. Mole-weighted average:<br><i>C</i><sub><i>V</i>,mix</sub> = (<i>n</i><sub>1</sub><i>C</i><sub><i>V</i>1</sub> + <i>n</i><sub>2</sub><i>C</i><sub><i>V</i>2</sub>)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>) = ((2.0)((3/2)<i>R</i>) + (4.0)((5/2)<i>R</i>))/6.0 = (3<i>R</i> + 10<i>R</i>)/6 = (13/6)<i>R</i> ≈ 2.167<i>R</i>.',
          'By Mayer, <i>C</i><sub><i>P</i>,mix</sub> = <i>C</i><sub><i>V</i>,mix</sub> + <i>R</i> = (13/6)<i>R</i> + <i>R</i> = (19/6)<i>R</i>. Hence<br><i>γ</i><sub>mix</sub> = <i>C</i><sub><i>P</i>,mix</sub>/<i>C</i><sub><i>V</i>,mix</sub> = (19/6)/(13/6) = 19/13',
          'The mixture’s <i>γ</i> lies between the monoatomic 1.67 and diatomic 1.40, pulled toward the diatomic because diatomic moles dominate the mixture (4:2).',
        ],
        ans: '<i>C</i><sub><i>V</i>,mix</sub> = (13/6)<i>R</i> ≈ 18.0, <i>C</i><sub><i>P</i>,mix</sub> = (19/6)<i>R</i> ≈ 26.3 J mol<sup>−1</sup> K<sup>−1</sup>, <i>γ</i><sub>mix</sub> ≈ 1.46',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define molar specific heat at constant volume and at constant pressure, and state Mayer’s relation. For a gas with <i>γ</i> = 1.4, find <i>C</i><sub><i>V</i></sub> and <i>C</i><sub><i>P</i></sub> in terms of <i>R</i>.',
            a: '<i>C</i><sub><i>V</i></sub> = heat per mole per K at constant volume (= d<i>U</i>/d<i>T</i>); <i>C</i><sub><i>P</i></sub> at constant pressure; <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>. With <i>γ</i> = 1.4: <i>C</i><sub><i>V</i></sub> = <i>R</i>/(<i>γ</i> − 1) = <i>R</i>/0.4 = 2.5<i>R</i>, <i>C</i><sub><i>P</i></sub> = <i>γC</i><sub><i>V</i></sub> = 3.5<i>R</i>.',
          },
          {
            q: '[NEET] A gas has <i>γ</i> = 4/3. How many active degrees of freedom does each molecule have, and what type of gas is it?',
            a: '<i>γ</i> = 1 + 2/<i>f</i> = 4/3 ⇒ 2/<i>f</i> = 1/3 ⇒ <i>f</i> = 6; nonlinear polyatomic gas.',
          },
          {
            q: '[JEE Main] 0.50 mol of a diatomic ideal gas is heated at constant pressure by 200 K. Find the heat supplied, the work done, and Δ<i>U</i>. (<i>R</i> = 8.314.)',
            a: 'Δ<i>Q</i> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i> = (0.5)((7/2) × 8.314)(200) ≈ 2.91 kJ; <i>W</i> = <i>nR</i>Δ<i>T</i> = (0.5)(8.314)(200) ≈ 831 J; Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> = (0.5)((5/2) × 8.314)(200) ≈ 2.08 kJ (check: 2.08 + 0.83 = 2.91 = Δ<i>Q</i>)',
          },
          {
            q: '[JEE Main] How much heat is needed to raise the temperature of 5.0 kg of water from 20 °C to 80 °C? (<i>s</i><sub>water</sub> = 4186 J kg<sup>−1</sup> K<sup>−1</sup>.)',
            a: 'Δ<i>Q</i> = <i>ms</i>Δ<i>T</i> = (5.0)(4186)(60) ≈ 1.26 × 10<sup>6</sup> J = 1.26 MJ.',
          },
          {
            q: '[JEE Advanced] A mixture contains 3.0 mol monoatomic and 2.0 mol diatomic ideal gas. Find <i>γ</i><sub>mix</sub>.',
            a: '<i>C</i><sub><i>V</i>,mix</sub> = (3((3/2)<i>R</i>) + 2((5/2)<i>R</i>))/5 = (4.5<i>R</i> + 5<i>R</i>)/5 = 1.9<i>R</i>; <i>C</i><sub><i>P</i>,mix</sub> = 2.9<i>R</i>; <i>γ</i><sub>mix</sub> = 2.9/1.9 ≈ 1.53.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'For an ideal gas, <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> equals:',
        opts: [
          { label: '0', nudge: '<b>(A)</b> would mean no expansion work — only true at constant volume.' },
          { label: '<i>R</i>', nudge: null },
          { label: '<i>γR</i>', nudge: '<b>(C)</b>,<b>(D)</b> confuse the difference with ratios of <i>C</i><sub><i>P</i></sub>, <i>C</i><sub><i>V</i></sub>.' },
          { label: '<i>R</i>/<i>γ</i>', nudge: '<b>(C)</b>,<b>(D)</b> confuse the difference with ratios of <i>C</i><sub><i>P</i></sub>, <i>C</i><sub><i>V</i></sub>.' },
        ],
        correct: 1,
        solution: 'Mayer’s relation, per mole. The difference is the constant-pressure expansion work <i>nR</i>Δ<i>T</i> per mole per kelvin.',
      },
      {
        t: 'mcq',
        q: 'The ratio <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> for a monoatomic ideal gas is:',
        opts: [
          { label: '7/5', nudge: '<b>(A)</b> is diatomic (<i>f</i> = 5).' },
          { label: '5/3', nudge: null },
          { label: '4/3', nudge: '<b>(C)</b> is polyatomic (<i>f</i> = 6).' },
          { label: '3/2', nudge: '<b>(D)</b> has no standard <i>f</i>.' },
        ],
        correct: 1,
        solution: 'With <i>f</i> = 3: <i>γ</i> = 1 + 2/3 = 5/3.',
      },
      {
        t: 'mcq',
        q: 'Why is <i>C</i><sub><i>P</i></sub> greater than <i>C</i><sub><i>V</i></sub> for a gas?',
        opts: [
          { label: 'more molecules at constant pressure', nudge: '<b>(A)</b> the amount of gas is unchanged.' },
          { label: 'at constant pressure some heat does expansion work', nudge: null },
          { label: 'pressure heats the gas faster', nudge: '<b>(C)</b> heating rate is irrelevant to the capacity.' },
          {
            label: '<i>C</i><sub><i>V</i></sub> ignores internal energy',
            nudge: '<b>(D)</b> false — <i>C</i><sub><i>V</i></sub> = d<i>U</i>/d<i>T</i> is built from internal energy.',
          },
        ],
        correct: 1,
        solution: 'At constant pressure the gas expands and spends part of the heat as work, so more heat is needed for the same Δ<i>T</i>.',
      },
      {
        t: 'mcq',
        q: 'At room temperature the internal energy of one mole of a diatomic ideal gas is:',
        opts: [
          { label: '(3/2)<i>RT</i>', nudge: '<b>(A)</b> is monoatomic.' },
          { label: '(5/2)<i>RT</i>', nudge: null },
          { label: '(7/2)<i>RT</i>', nudge: '<b>(C)</b> would require <i>f</i> = 7 (vibration active — frozen at room temperature).' },
          { label: '3<i>RT</i>', nudge: '<b>(D)</b> is nonlinear polyatomic (<i>f</i> = 6).' },
        ],
        correct: 1,
        solution: '<i>f</i> = 5 (3 translation + 2 rotation), so <i>U</i> = (<i>f</i>/2)<i>RT</i> = (5/2)<i>RT</i> per mole.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using <i>C</i><sub><i>P</i></sub> for Δ<i>U</i>.</b> Internal energy change is always <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> for an ideal gas, in every process — never <i>nC</i><sub><i>P</i></sub>Δ<i>T</i>. Use <i>C</i><sub><i>P</i></sub> only for heat at constant pressure.',
          '<b>Counting diatomic degrees of freedom as 7.</b> At ordinary temperatures vibration is frozen, so <i>f</i> = 5, not 7. Use 7 only if a problem explicitly invokes high-temperature vibration.',
          '<b>Mixing specific (per kg) and molar (per mole) capacities.</b> <i>s</i> has units J kg<sup>−1</sup> K<sup>−1</sup>; <i>C</i> has J mol<sup>−1</sup> K<sup>−1</sup>. They differ by the molar mass: <i>C</i> = <i>Ms</i>.',
          '<b>Forgetting Mayer is per mole and ideal-gas only.</b> <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i> holds only approximately for real gases, and not at all for solids and liquids (for them <i>C</i><sub><i>P</i></sub> ≈ <i>C</i><sub><i>V</i></sub>).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> Memorise the two reflex identities <i>C</i><sub><i>V</i></sub> = <i>R</i>/(<i>γ</i> − 1) and <i>C</i><sub><i>P</i></sub> = <i>γR</i>/(<i>γ</i> − 1) — they convert any <i>γ</i> straight into capacities with no degree-of-freedom counting. For a gas type, jump via <i>f</i>: monoatomic (3/2)<i>R</i>, (5/2)<i>R</i>; diatomic (5/2)<i>R</i>, (7/2)<i>R</i>; polyatomic 3<i>R</i>, 4<i>R</i>. And the constant-pressure work fraction <i>R</i>/<i>C</i><sub><i>P</i></sub> = 2/(<i>f</i> + 2) answers a whole class of NEET “which gas does most work” traps in one step.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Specific heat', note: 'Δ<i>Q</i> = <i>ms</i>Δ<i>T</i> (per kg); molar: Δ<i>Q</i> = <i>nC</i>Δ<i>T</i> (per mole).' },
          {
            f: 'Two for a gas',
            note: '<i>C</i><sub><i>V</i></sub> (constant <i>V</i>) and <i>C</i><sub><i>P</i></sub> (constant <i>P</i>), with <i>C</i><sub><i>P</i></sub> > <i>C</i><sub><i>V</i></sub> always.',
          },
          { f: '<b>Mayer</b>', note: '<i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i> (ideal gas, per mole). The <i>R</i> is the expansion work.' },
          {
            f: 'Degrees of freedom',
            note: '<i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i>, <i>C</i><sub><i>P</i></sub> = (<i>f</i>/2 + 1)<i>R</i>, <i>γ</i> = 1 + 2/<i>f</i>.',
          },
          {
            f: 'Mono (<i>f</i> = 3): (3/2)<i>R</i>, (5/2)<i>R</i>, <i>γ</i> = 5/3. Di (<i>f</i> = 5): (5/2)<i>R</i>, (7/2)<i>R</i>, <i>γ</i> = 7/5. Poly (<i>f</i> = 6): 3<i>R</i>, 4<i>R</i>, <i>γ</i> = 4/3.',
            note: '',
          },
          {
            f: 'Reflex',
            note: '<i>C</i><sub><i>V</i></sub> = <i>R</i>/(<i>γ</i> − 1), <i>C</i><sub><i>P</i></sub> = <i>γR</i>/(<i>γ</i> − 1). Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> (every process).',
          },
          { f: 'Water <i>s</i> ≈ 4186 J kg<sup>−1</sup> K<sup>−1</sup>; solids (Dulong–Petit) ≈ 3<i>R</i>.', note: '' },
          {
            f: 'Mixture',
            note: 'mole-weighted <i>C</i><sub><i>V</i></sub>, then <i>C</i><sub><i>P</i></sub> = <i>C</i><sub><i>V</i></sub> + <i>R</i>, <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub>.',
          },
        ],
        aids: [
          '“<i>C</i><sub><i>P</i></sub> pays for the Push” (the extra <i>R</i> is expansion work).',
          '“More wiggles, more storage” (bigger <i>f</i> ⇒ bigger <i>C</i><sub><i>V</i></sub>, smaller <i>γ</i>).',
          '“Δ<i>U</i> always rides <i>C</i><sub><i>V</i></sub>.”',
        ],
      },
    ],
  },
];
