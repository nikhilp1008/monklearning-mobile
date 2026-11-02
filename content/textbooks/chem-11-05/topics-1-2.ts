import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 01 and 02: pp. 214–226 of the Class 11 Chemistry Master
 * Reference, word for word. The chapter’s title page (p. 213) and contents
 * (top of p. 214) are not copied. Topic 01, Thermodynamic Terms, the First
 * Law, Internal Energy & Enthalpy (starts under the contents on p. 214, ends
 * p. 220), and Topic 02, Thermochemistry, Enthalpy of Reactions & Hess’s Law
 * (pp. 221–226), are each split at their Sections 1 to 8. These pages print
 * no drawings. Signs follow the IUPAC/NCERT convention the book states:
 * ΔU = q + w, with w the work done on the system.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 214–220 ─────────────────────────
  {
    n: '01',
    title: 'Thermodynamic Terms, the First Law, Internal Energy & Enthalpy',
    kalam: 'Energy entering as heat or work must show up as a change in internal energy — it cannot vanish, and it cannot appear from nothing.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the spine of the entire chapter — every later idea (thermochemistry, entropy, spontaneity, Gibbs energy) is built on the terms fixed here. CBSE Boards reliably ask a 1–3 mark question on the first law, the meaning of a state function, or the <i>q</i><sub><i>V</i></sub> = Δ<i>U</i> / <i>q</i><sub><i>P</i></sub> = Δ<i>H</i> distinction. NEET asks 1 direct conceptual question almost every year (sign convention, Δ<i>H</i> vs Δ<i>U</i>). JEE Main turns it into a 1–2 question numerical (reversible work, Δ<i>n</i><sub>g</sub><i>RT</i>). JEE Advanced uses it as a multi-step trap linking work, heat and path-dependence.',
      },
      {
        t: 'p',
        html: 'Imagine you want to study what happens to the steam inside a pressure cooker on your kitchen stove. The first thing any physicist or chemist does is draw an imaginary boundary: this is the part I care about (the steam and water inside), and everything else — the cooker walls, the flame, the kitchen air — is the outside world. That single act of drawing a boundary is where thermodynamics begins.',
      },
      {
        t: 'p',
        html: 'The part of the universe we put under the microscope is the <b>system</b>. Everything outside the boundary that can still exchange energy or matter with it is the <b>surroundings</b>. The boundary can be real (the cooker wall) or purely imaginary. Depending on what the boundary lets through, we get three kinds of systems, and you meet all three in an ordinary Indian kitchen:<br>• An <b>open system</b> exchanges both matter and energy with its surroundings — like an open kadhai of boiling milk, losing both steam (matter) and heat (energy).<br>• A <b>closed system</b> exchanges energy but not matter — like a sealed pressure cooker before the whistle blows: heat goes in, but no steam escapes.<br>• An <b>isolated system</b> exchanges neither — the closest everyday example is hot chai in a good steel thermos, idealised to perfection.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Suppose you trek up to a hill temple. When you reach the top, your altitude gain depends only on where you started and where you finished — not on whether you took the short steep stairs or the long winding road. Altitude gain is a <b>state function</b>: it cares about the two end-points, not the journey. But the number of steps you walked and the water you drank depend entirely on the route. Those are <b>path functions</b>.',
      },
      {
        t: 'p',
        html: 'This is the single most important habit of mind in thermodynamics. <b>Internal energy (<i>U</i>)</b> and <b>enthalpy (<i>H</i>)</b> behave like altitude — they are state functions. <b>Heat (<i>q</i>)</b> and <b>work (<i>w</i>)</b> behave like steps-walked — they are path functions. Two students can take a gas from the same starting state to the same finishing state by completely different routes; they will always agree on Δ<i>U</i>, but they may report totally different values of <i>q</i> and <i>w</i>.',
      },
      {
        t: 'p',
        html: 'What is internal energy, physically? It is simply the grand total of every kind of energy stored inside the system: the kinetic energy of molecules jiggling and flying about, plus the potential energy locked in the attractions and repulsions between electrons, nuclei, atoms and molecules. There is a beautiful, humbling fact here: <b>we can never measure the absolute value of <i>U</i>.</b> It is like asking for the total wealth in a person’s life — impossible to pin down. But the change in their bank balance over a month? Easy. Thermodynamics only ever needs Δ<i>U</i>, the change, and that we can measure precisely.',
      },
      {
        t: 'p',
        html: 'The <b>first law of thermodynamics</b> is then just the law of energy conservation, written in the language of systems. Energy entering as heat or work must show up as a change in internal energy — it cannot vanish, and it cannot appear from nothing.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Two cautions for this whole topic: (1) The clean relations like Δ<i>U</i> = 0 for isothermal change, or <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>, hold for an ideal gas. Real gases deviate. (2) Heat and work are only defined for a process (a change), never for a state — it is meaningless to say “this gas contains 200 J of heat.” A system stores internal energy; it does not store heat or work.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'def',
        term: 'Internal energy (<i>U</i>)',
        html: 'total energy of a system; a state function and an extensive property. <b>SI unit:</b> joule (J), or J mol<sup>−1</sup> for molar internal energy. Only Δ<i>U</i> is measurable.',
      },
      {
        t: 'formula',
        kicker: 'First law of thermodynamics (IUPAC / NCERT sign convention)',
        main: 'Δ<i>U</i> = <i>q</i> + <i>w</i>',
        legend: ['<i>q</i> = heat supplied to the system', '<i>w</i> = work done on the system'],
        note: null,
      },
      {
        t: 'p',
        html: '• <i>q</i> > 0: heat absorbed by the system; <i>q</i> < 0: heat released.<br>• <i>w</i> > 0: work done on the system (compression); <i>w</i> < 0: work done by the system (expansion).',
      },
      {
        t: 'formula',
        kicker: 'Pressure–volume (expansion) work',
        main: '<i>w</i> = −<i>p</i><sub>ext</sub>Δ<i>V</i> (constant external pressure)<br><i>w</i><sub>rev</sub> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) = −2.303 <i>nRT</i> log(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) (reversible isothermal, ideal gas)',
        legend: [
          '<i>p</i><sub>ext</sub> = external pressure',
          'Δ<i>V</i> = <i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>',
          '<i>n</i> = moles',
          '<i>R</i> = gas constant',
          '<i>T</i> = temperature',
        ],
        note: 'SI unit of work: joule (J). Use <i>R</i> = 8.314 J K<sup>−1</sup> mol<sup>−1</sup> whenever the answer is wanted in joules.',
      },
      {
        t: 'formula',
        kicker: 'Enthalpy (<i>H</i>)',
        main: 'the “heat content at constant pressure,” defined as:<br><i>H</i> = <i>U</i> + <i>PV</i>',
        legend: ['<i>U</i> = internal energy', '<i>P</i> = pressure', '<i>V</i> = volume'],
        note: 'A state function and an extensive property. SI unit: J (or J mol<sup>−1</sup>). Like <i>U</i>, only Δ<i>H</i> is measurable.',
      },
      {
        t: 'formula',
        kicker: 'Relation between Δ<i>H</i> and Δ<i>U</i>',
        main: 'Δ<i>H</i> = Δ<i>U</i> + Δ(<i>PV</i>)<br>Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i> (constant <i>T</i>, ideal gases)',
        legend: [
          'Δ<i>n</i><sub>g</sub> = (moles of gaseous products) − (moles of gaseous reactants)',
          '<i>R</i> = gas constant',
          '<i>T</i> = temperature',
        ],
        note: 'Solids and liquids contribute negligible volume and are <b>not</b> counted in Δ<i>n</i><sub>g</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Heat exchanged under the two common constraints',
        main: '<i>q</i><sub><i>V</i></sub> = Δ<i>U</i> (constant volume; <i>w</i> = 0)<br><i>q</i><sub><i>P</i></sub> = Δ<i>H</i> (constant pressure)',
        legend: ['<i>q</i><sub><i>V</i></sub> = heat exchanged at constant volume', '<i>q</i><sub><i>P</i></sub> = heat exchanged at constant pressure'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Heat capacity (<i>C</i>)',
        main: 'heat needed to raise the temperature by 1 K:<br><i>C</i> = <i>q</i>/Δ<i>T</i><br>At constant volume: <i>C</i><sub><i>V</i></sub> = (∂<i>U</i>/∂<i>T</i>)<sub><i>V</i></sub><br>At constant pressure: <i>C</i><sub><i>P</i></sub> = (∂<i>H</i>/∂<i>T</i>)<sub><i>P</i></sub><br>Mayer’s relation (ideal gas, per mole): <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>',
        legend: [
          '<i>q</i> = heat needed',
          'Δ<i>T</i> = rise in temperature',
          '<i>C</i><sub><i>V</i></sub> = heat capacity at constant volume',
          '<i>C</i><sub><i>P</i></sub> = heat capacity at constant pressure',
          '<i>R</i> = gas constant',
        ],
        note: 'SI unit: J K<sup>−1</sup> (molar: J K<sup>−1</sup> mol<sup>−1</sup>). For <i>n</i> moles the total heat capacities differ by <i>nR</i>.',
      },
      {
        t: 'def',
        term: 'Standard state convention',
        html: 'the “°” (or “ø”) superscript, e.g. Δ<i>H</i>°, denotes values measured at the standard pressure of <b>1 bar</b> (and a specified temperature, usually 298.15 K).',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>3.1 Stating the First Law cleanly</b><br>Take any closed system. Allow it to absorb heat <i>q</i> from the surroundings and let the surroundings do work <i>w</i> on it. Energy is conserved, so the only place this energy can go is into the system’s internal store:<br>Δ<i>U</i> = <i>q</i> + <i>w</i>',
      },
      {
        t: 'p',
        html: '<b>Why this form?</b> Internal energy is the bookkeeping account. The two ways to deposit into it are heat flow and work. The signs follow the “from the system’s point of view” rule: anything that increases <i>U</i> is positive.',
      },
      {
        t: 'p',
        html: '<b>A clean consequence — the cyclic process.</b> If a system is taken through any cycle and brought back to its original state, then because <i>U</i> is a state function, Δ<i>U</i><sub>cycle</sub> = 0. The first law immediately gives <i>q</i><sub>cycle</sub> = −<i>w</i><sub>cycle</sub>: over a full cycle, the net heat absorbed equals the net work done by the system. (This is exactly why <i>q</i> and <i>w</i> cannot be state functions — if they were, they would have to be zero over every cycle too, which experiment flatly denies.)',
      },
      {
        t: 'p',
        html: '<b>3.2 Expansion work and why reversible work is the largest</b><br>Consider a gas in a cylinder pushing a piston out by Δ<i>V</i> against a constant external pressure <i>p</i><sub>ext</sub>. The system spends energy <i>p</i><sub>ext</sub>Δ<i>V</i> pushing back the surroundings, so the work done on the system is negative:<br><i>w</i><sub>irr</sub> = −<i>p</i><sub>ext</sub>Δ<i>V</i>',
      },
      {
        t: 'p',
        html: 'Now do the same expansion reversibly: at every instant the external pressure is kept only infinitesimally below the internal pressure, <i>p</i><sub>ext</sub> ≈ <i>p</i><sub>int</sub> = <i>nRT</i>/<i>V</i>. Summing (integrating) the work over the whole path:<br><i>w</i><sub>rev</sub> = −∫<sub><i>V</i>₁</sub><sup><i>V</i>₂</sup> <i>p</i><sub>int</sub> d<i>V</i> = −∫<sub><i>V</i>₁</sub><sup><i>V</i>₂</sup> (<i>nRT</i>/<i>V</i>) d<i>V</i> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>)',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> in the reversible path the gas pushes against the <b>largest possible</b> opposing pressure at every step (anything larger would compress it). So expansion work extracted is <b>maximum</b> in the reversible route, and the magnitude obeys |<i>w</i><sub>rev</sub>| > |<i>w</i><sub>irr</sub>| between the same two states. A <b>free expansion</b> (into vacuum, <i>p</i><sub>ext</sub> = 0) is the extreme opposite: <i>w</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>3.3 Deriving Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i></b><br>Start from the definition <i>H</i> = <i>U</i> + <i>PV</i>. For a change at constant temperature and pressure:<br>Δ<i>H</i> = Δ<i>U</i> + Δ(<i>PV</i>)<br>If the only species that change the <i>PV</i> product significantly are ideal gases, then <i>PV</i> = <i>n</i><sub>g</sub><i>RT</i>, so at constant <i>T</i>:<br>Δ(<i>PV</i>) = (<i>RT</i>) Δ<i>n</i><sub>g</sub><br>giving Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i>. <b>Why it matters:</b> it lets us convert between a bomb-calorimeter measurement (constant volume, gives Δ<i>U</i>) and the constant-pressure enthalpy Δ<i>H</i> that reactions in open beakers actually deliver.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A gas sealed in a cylinder with a movable piston absorbs 250 J of heat from a water bath and, in expanding, does 80 J of work on its surroundings. Find the change in internal energy of the gas.',
        steps: [
          '<b>Given:</b> <i>q</i> = +250 J (heat absorbed by system). Work is done by the system, so work done on the system <i>w</i> = −80 J.',
          '<b>First law:</b> Δ<i>U</i> = <i>q</i> + <i>w</i> = 250 + (−80)',
        ],
        ans: 'Δ<i>U</i> = +170 J. The internal energy rises by 170 J — the heat input outweighs the energy spent pushing the surroundings.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A gaseous process converts 1 mole of gas into 2 moles of gas at 300 K, with Δ<i>U</i> = +12.0 kJ. What is Δ<i>H</i>? (Options in an exam: 12.0, 14.5, 9.5, 6.0 kJ.)',
        steps: [
          '<b>Speed approach:</b> Use Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i>. Here Δ<i>n</i><sub>g</sub> = 2 − 1 = +1.<br>Δ<i>H</i> = 12000 + (1)(8.314)(300) = 12000 + 2494 ≈ 14.5 kJ',
          '<b>Trap watch:</b> (i) Reach instinctively for <i>R</i> = 8.314 J K<sup>−1</sup> mol<sup>−1</sup>, <b>not</b> 0.0821 — the answer is wanted in joules. (ii) Keep <i>T</i> = 300 K, never °C. (iii) Δ<i>n</i><sub>g</sub> is products-minus-reactants gas moles, and it is +1 here, so Δ<i>H</i> > Δ<i>U</i>. A student who drops the Δ<i>n</i><sub>g</sub><i>RT</i> term picks 12.0 (wrong); one who flips the sign picks 9.5 (wrong).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept',
        q: '2 mol of an ideal gas expands isothermally and reversibly at 300 K from 5.0 L to 20.0 L. Find <i>w</i>, <i>q</i>, Δ<i>U</i> and Δ<i>H</i>.',
        steps: [
          '<b>Concept link:</b> isothermal + ideal gas ⇒ Δ<i>U</i> = 0 and Δ<i>H</i> = 0 (both depend only on <i>T</i> for an ideal gas, and <i>T</i> is unchanged). Then the first law forces <i>q</i> = −<i>w</i>.',
          '<i>w</i> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) = −(2)(8.314)(300) ln(20/5) = −(4988.4)(ln 4)<br><i>w</i> = −(4988.4)(1.3863) = −6915 J',
        ],
        ans: '<i>w</i> ≈ −6.92 kJ (done by the gas), <i>q</i> ≈ +6.92 kJ (absorbed), Δ<i>U</i> = Δ<i>H</i> = 0. Every joule of heat absorbed is spent as expansion work.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '1 mol of an ideal gas at 300 K is expanded isothermally from 2.0 L to 8.0 L by two routes: (a) reversibly, and (b) irreversibly in a single step against a constant external pressure equal to the final pressure. Compute <i>w</i>, <i>q</i>, Δ<i>U</i> for each route and comment on what is path-dependent.',
        steps: [
          '<b>Route (a) — reversible:</b><br><i>w</i><sub>a</sub> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) = −(1)(8.314)(300) ln 4 = −(2494.2)(1.3863) = −3458 J<br>Isothermal ideal gas ⇒ Δ<i>U</i> = 0, so <i>q</i><sub>a</sub> = +3458 J.',
          '<b>Route (b) — irreversible against <i>p</i><sub>ext</sub> = <i>p</i><sub>2</sub>:</b><br><i>p</i><sub>2</sub> = <i>nRT</i>/<i>V</i><sub>2</sub> = ((1)(8.314)(300))/(8.0 × 10<sup>−3</sup> m<sup>3</sup>) = 3.118 × 10<sup>5</sup> Pa<br><i>w</i><sub>b</sub> = −<i>p</i><sub>ext</sub>Δ<i>V</i> = −(3.118 × 10<sup>5</sup>)(6.0 × 10<sup>−3</sup>) = −1871 J<br>Again Δ<i>U</i> = 0 (same two states, isothermal), so <i>q</i><sub>b</sub> = +1871 J.',
          '<b>Reasoning:</b> Δ<i>U</i> is <b>identical (0)</b> by both routes — that is the signature of a state function. But |<i>w</i><sub>a</sub>| = 3458 J > |<i>w</i><sub>b</sub>| = 1871 J, and the heats differ in lockstep. <b>Work and heat are path functions; the reversible path extracts the maximum work.</b> This single comparison is the conceptual seed for the second law you meet in Topic 03.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A system releases 120 J of heat while 200 J of work is done on it. Find Δ<i>U</i>.',
            a: '+80 J',
          },
          {
            q: '[NEET] For N<sub>2</sub>(g) + 3H<sub>2</sub>(g) → 2NH<sub>3</sub>(g) at 400 K, by how much does Δ<i>H</i> differ from Δ<i>U</i>? (Find Δ<i>n</i><sub>g</sub><i>RT</i> with its sign.)',
            a: 'Δ<i>H</i> − Δ<i>U</i> = Δ<i>n</i><sub>g</sub><i>RT</i> = (−2)(8.314)(400) ≈ −6.65 kJ (so Δ<i>H</i> < Δ<i>U</i>)',
          },
          {
            q: '[JEE Main] 0.5 mol of an ideal gas at 290 K doubles its volume reversibly and isothermally. Find the work done.',
            a: '<i>w</i> = −<i>nRT</i> ln 2 ≈ −836 J',
          },
          {
            q: '[JEE Main] 2 mol of an ideal monoatomic gas (<i>C</i><sub><i>V</i></sub> = 3<i>R</i>/2) is heated at constant pressure through 50 K. Find <i>q</i><sub><i>P</i></sub> and Δ<i>U</i>.',
            a: '<i>q</i><sub><i>P</i></sub> = <i>nC</i><sub><i>P</i></sub>Δ<i>T</i> = 2(5<i>R</i>/2)(50) ≈ 2.08 kJ; Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> ≈ 1.25 kJ',
          },
          {
            q: '[JEE Advanced] In a cyclic process A → B → C → A: for A → B, <i>q</i> = +400 J, <i>w</i> = −150 J; for B → C, <i>q</i> = −100 J, <i>w</i> = +60 J. Find Δ<i>U</i> for the step C → A.',
            a: 'Δ<i>U</i><sub>CA</sub> = −210 J.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is <b>not</b> a state function?',
        opts: [
          { label: 'Internal energy', nudge: '<b>(a)</b> and <b>(b)</b> depend only on the state.' },
          { label: 'Enthalpy', nudge: '<b>(a)</b> and <b>(b)</b> depend only on the state.' },
          { label: 'Work', nudge: null },
          { label: 'Temperature', nudge: '<b>(d)</b> temperature is a state property of the system.' },
        ],
        correct: 2,
        solution: 'Work depends on the path taken between two states, so it is a path function. <b>Trap:</b> a student who confuses “work” with “energy” may think work must be a state function because energy is — the lesson is that transfers (heat, work) are path-dependent while contents (<i>U</i>, <i>H</i>) are not.',
      },
      {
        t: 'mcq',
        q: 'For the isothermal reversible expansion of an ideal gas, which statement is correct?',
        opts: [
          { label: 'Δ<i>U</i> > 0', nudge: '<b>(a)</b>/<b>(d)</b> come from wrongly assuming expansion raises energy.' },
          { label: '<i>q</i> = 0', nudge: '<b>(b)</b> confuses isothermal with adiabatic (where <i>q</i> = 0).' },
          { label: 'Δ<i>U</i> = 0 and <i>q</i> = −<i>w</i>', nudge: null },
          { label: 'Δ<i>H</i> > 0', nudge: '<b>(a)</b>/<b>(d)</b> come from wrongly assuming expansion raises energy.' },
        ],
        correct: 2,
        solution: 'For an ideal gas, <i>U</i> and <i>H</i> depend only on <i>T</i>; isothermal means Δ<i>T</i> = 0, so Δ<i>U</i> = Δ<i>H</i> = 0, and the first law gives <i>q</i> = −<i>w</i>.',
      },
      {
        t: 'mcq',
        q: 'For the reaction C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), the value of Δ<i>H</i> − Δ<i>U</i> at temperature <i>T</i> is:',
        opts: [
          {
            label: '−<i>RT</i>',
            nudge: '<b>Trap:</b> counting C(s) as a reactant species gives Δ<i>n</i><sub>g</sub> = −1 and the wrong answer <b>(a)</b> — the classic “forgot solids don’t count” error.',
          },
          { label: '0', nudge: null },
          { label: '+<i>RT</i>', nudge: '<b>(c)</b> counts only the CO<sub>2</sub>(g) product and forgets the O<sub>2</sub>(g) on the reactant side (Δ<i>n</i><sub>g</sub> = +1).' },
          { label: '−2<i>RT</i>', nudge: '<b>(d)</b> would need Δ<i>n</i><sub>g</sub> = −2 — counting C(s) as a gas <b>and</b> dropping the CO<sub>2</sub>(g) product; no single slip gives it.' },
        ],
        correct: 1,
        solution: 'Δ<i>H</i> − Δ<i>U</i> = Δ<i>n</i><sub>g</sub><i>RT</i>. Counting gas moles only: products have 1 (CO<sub>2</sub>), reactants have 1 (O<sub>2</sub>); carbon is a solid and is excluded. So Δ<i>n</i><sub>g</sub> = 0 and the difference is zero.',
      },
      {
        t: 'mcq',
        q: 'A gas does 50 J of work on its surroundings while absorbing 30 J of heat. The change in internal energy is:',
        opts: [
          { label: '+80 J', nudge: '<b>(a)</b> adds both as positive (sign error on <i>w</i>).' },
          { label: '−20 J', nudge: null },
          { label: '+20 J', nudge: '<b>(c)</b> flips both signs (<i>q</i> = −30 J, <i>w</i> = +50 J).' },
          { label: '−80 J', nudge: '<b>(d)</b> flips the sign of <i>q</i> (<i>q</i> = −30 J) while keeping <i>w</i> = −50 J.' },
        ],
        correct: 1,
        solution: '<i>q</i> = +30 J, and work done on the system <i>w</i> = −50 J, so Δ<i>U</i> = 30 − 50 = −20 J.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing up the sign of work.</b> The biggest single error in this topic. Memorise it from the system’s viewpoint: work done on the system is +, work done by the system (expansion) is −. If the gas expands, <i>w</i> is negative — full stop.',
          '<b>Using the wrong <i>R</i>.</b> <i>R</i> = 8.314 J K<sup>−1</sup> mol<sup>−1</sup> for answers in joules; <i>R</i> = 0.0821 L atm K<sup>−1</sup> mol<sup>−1</sup> only when you are deliberately working in litre-atmospheres. Mixing the two is a guaranteed factor-of-100-ish blunder.',
          '<b>Counting solids and liquids in Δ<i>n</i><sub>g</sub>.</b> Only gaseous moles enter Δ<i>n</i><sub>g</sub>. C(s), H<sub>2</sub>O(l) and the like are invisible to this term.',
          '<b>Calling <i>q</i> or <i>w</i> a state function.</b> They are path functions; <i>U</i>, <i>H</i>, <i>T</i>, <i>P</i>, <i>V</i> are state functions. Saying “the gas has 200 J of heat” is meaningless.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any isothermal process of an ideal gas, write Δ<i>U</i> = 0 and Δ<i>H</i> = 0 on sight — then the first law collapses to <i>q</i> = −<i>w</i>, often saving you an entire calculation. And before reporting Δ<i>H</i> vs Δ<i>U</i>, glance at Δ<i>n</i><sub>g</sub>: if no gas moles change, they are equal.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'First law', note: 'Δ<i>U</i> = <i>q</i> + <i>w</i> — <i>q</i>(+) heat in, <i>w</i>(+) work done on system.' },
          {
            f: 'Work',
            note: '<i>w</i> = −<i>p</i><sub>ext</sub>Δ<i>V</i> (irrev.); <i>w</i><sub>rev</sub> = −<i>nRT</i> ln(<i>V</i><sub>2</sub>/<i>V</i><sub>1</sub>) (isothermal rev.); free expansion <i>w</i> = 0.',
          },
          { f: 'Enthalpy', note: '<i>H</i> = <i>U</i> + <i>PV</i>; Δ<i>H</i> = Δ<i>U</i> + Δ<i>n</i><sub>g</sub><i>RT</i>.' },
          { f: 'Heat under constraints', note: '<i>q</i><sub><i>V</i></sub> = Δ<i>U</i>, <i>q</i><sub><i>P</i></sub> = Δ<i>H</i>.' },
          { f: 'Heat capacity (ideal gas)', note: '<i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>.' },
          {
            f: 'State functions (<i>U</i>, <i>H</i>, <i>T</i>, <i>P</i>, <i>V</i>) care only about end-points; path functions (<i>q</i>, <i>w</i>) care about the route. Cyclic ⇒ Δ<i>U</i> = 0.',
            note: '',
          },
        ],
        aids: [
          '“On is plus, by is minus” (sign of <i>w</i>).',
          '“Joules want 8.314, litre-atm wants 0.0821.”',
          '“Gases only” for Δ<i>n</i><sub>g</sub>.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 221–226 ─────────────────────────
  {
    n: '02',
    title: 'Thermochemistry, Enthalpy of Reactions & Hess’s Law',
    kalam: 'Hess’s law is therefore not a new principle at all — it is the first law wearing chemical clothes.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield topics in the whole chapter. CBSE Boards regularly set a 3-mark numerical on Hess’s law or Δ<sub>r</sub><i>H</i> from formation enthalpies. NEET asks 1–2 questions every year (Hess combinations, neutralisation, sign reasoning). JEE Main almost always carries a bond-enthalpy or formation-enthalpy numerical. JEE Advanced builds multi-step problems — Born–Haber cycles, bond-enthalpy with adiabatic flame temperature — that quietly test whether you respect signs and states.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we fixed the rule that enthalpy <i>H</i> is a <b>state function</b> — it depends only on the start and end states, never on the route. Thermochemistry is simply that one idea, turned loose on chemical reactions: it is the accounting of the heat that flows in or out when bonds break and form.',
      },
      {
        t: 'p',
        html: 'Every reaction has an <b>enthalpy of reaction</b>, Δ<sub>r</sub><i>H</i> — the heat exchanged at constant pressure. If the products sit at lower enthalpy than the reactants, energy is released and the reaction is <b>exothermic</b> (Δ<sub>r</sub><i>H</i> < 0); burning a matchstick or neutralising acid with base are everyday examples. If the products are higher, the reaction must be fed energy from outside and is <b>endothermic</b> (Δ<sub>r</sub><i>H</i> > 0); think of the cold pack that turns icy when you snap it.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture booking a train from Chennai to Delhi. You can go direct, or break the trip — Chennai → Nagpur → Delhi. If the railways price fares honestly, the total cost of the two-leg journey must equal the direct fare; otherwise you could loop around and magic money out of nothing. <b>Hess’s law of constant heat summation</b> is exactly this honesty rule for enthalpy: if a reaction can be carried out in one step or as the sum of several steps, the total enthalpy change is the same either way, because <i>H</i> depends only on the endpoints. Hess’s law is therefore not a new principle at all — it is the first law wearing chemical clothes. This is enormously useful: it lets us calculate the enthalpy of a reaction we can never run cleanly in a lab (like C + ½O<sub>2</sub> → CO, which always makes some CO<sub>2</sub> too) by adding up reactions we can measure.',
      },
      {
        t: 'p',
        html: 'The same logic gives us a master reference table. If we agree to assign <b>zero enthalpy of formation to every element in its most stable form</b> (a sea-level datum, just as we couldn’t measure absolute <i>U</i> in Topic 01 and only ever used changes), then the <b>standard enthalpy of formation</b> Δ<sub>f</sub><i>H</i>° of any compound becomes a single tabulated number, and the enthalpy of any reaction collapses to “products minus reactants.”',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) Hess’s law needs the same initial and final states for both routes — same substances, same physical states, same temperature. Liquid water and steam are not interchangeable in a Hess cycle. (2) The standard “°” values are quoted at 1 bar and a stated temperature (usually 298 K); enthalpies drift with temperature (a refinement called Kirchhoff’s law). (3) Bond enthalpies are averages over many molecules, so reaction enthalpies computed from them are approximate and apply to species in the <b>gaseous</b> state.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'All quantities below are enthalpy changes; the “°” superscript means the standard state (1 bar, stated <i>T</i>). <b>SI/working unit:</b> kJ mol<sup>−1</sup>.',
      },
      {
        t: 'def',
        term: 'Standard enthalpy of reaction (Δ<sub>r</sub><i>H</i>°)',
        html: 'heat exchanged at constant pressure when reactants in standard states form products in standard states, for the molar amounts in the balanced equation.',
      },
      {
        t: 'def',
        term: 'Standard enthalpy of formation (Δ<sub>f</sub><i>H</i>°)',
        html: 'the enthalpy change when <b>one mole</b> of a compound forms from its elements in their reference (most stable) states. By convention Δ<sub>f</sub><i>H</i>°(element, reference state) = 0.',
      },
      {
        t: 'formula',
        kicker: 'Master formula (from formation enthalpies)',
        main: 'Δ<sub>r</sub><i>H</i>° = ∑ <i>ν</i> Δ<sub>f</sub><i>H</i>°(products) − ∑ <i>ν</i> Δ<sub>f</sub><i>H</i>°(reactants)',
        legend: [
          'Δ<sub>r</sub><i>H</i>° = standard enthalpy of reaction',
          'Δ<sub>f</sub><i>H</i>° = standard enthalpy of formation',
          '<i>ν</i> = stoichiometric coefficients',
        ],
        note: null,
      },
      {
        t: 'def',
        term: 'Standard enthalpy of combustion (Δ<sub>c</sub><i>H</i>°)',
        html: 'enthalpy change when one mole of a substance is completely burnt in oxygen; always negative.',
      },
      {
        t: 'def',
        term: 'Enthalpy of neutralisation',
        html: 'heat released when one gram-equivalent of acid is neutralised by a base in dilute solution. For any <b>strong acid + strong base</b> it is essentially constant, ≈ −57.1 kJ mol<sup>−1</sup>, because the only net reaction is H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l).',
      },
      {
        t: 'formula',
        kicker: 'Phase-transition enthalpies',
        main: 'Δ<sub>sub</sub><i>H</i> = Δ<sub>fus</sub><i>H</i> + Δ<sub>vap</sub><i>H</i> (by Hess’s law)',
        legend: [
          'Δ<sub>fus</sub><i>H</i> = enthalpy of fusion (solid → liquid)',
          'Δ<sub>vap</sub><i>H</i> = enthalpy of vaporisation (liquid → gas)',
          'Δ<sub>sub</sub><i>H</i> = enthalpy of sublimation (solid → gas)',
        ],
        note: null,
      },
      {
        t: 'def',
        term: 'Enthalpy of atomisation (Δ<sub>a</sub><i>H</i>°)',
        html: 'enthalpy to break one mole of a substance completely into gaseous atoms.',
      },
      {
        t: 'def',
        term: 'Bond enthalpy',
        html: 'energy to break one mole of a given bond in the gaseous state. For diatomics this equals the <b>bond-dissociation enthalpy</b>; for polyatomics we use the <b>mean bond enthalpy</b> averaged over the molecule.',
      },
      {
        t: 'formula',
        kicker: 'Reaction enthalpy from bond enthalpies (gaseous species)',
        main: 'Δ<sub>r</sub><i>H</i> = ∑ BE(bonds broken in reactants)<br>− ∑ BE(bonds formed in products)',
        legend: ['Δ<sub>r</sub><i>H</i> = reaction enthalpy', 'BE = bond enthalpy'],
        note: 'Note the direction is reactants minus products — the opposite of the formation formula — because we put energy in to break reactant bonds and get it out when product bonds form.',
      },
      {
        t: 'def',
        term: 'Lattice enthalpy (Δ<sub>lattice</sub><i>H</i>)',
        html: 'enthalpy change when one mole of an ionic solid separates into gaseous ions (positive, as in NCERT). The Born–Haber cycle runs the other way (ions → solid), so there the lattice term is negative; Topic 04 uses the positive value.',
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>3.1 Hess’s law from the first law</b><br>Suppose a compound D can be made from A either directly (Δ<i>H</i><sub>direct</sub>) or via an intermediate, A → B → D (Δ<i>H</i><sub>1</sub> + Δ<i>H</i><sub>2</sub>). Because <i>H</i> is a state function (Topic 01), the enthalpy difference between the fixed states A and D cannot depend on the path:<br>Δ<i>H</i><sub>direct</sub> = Δ<i>H</i><sub>1</sub> + Δ<i>H</i><sub>2</sub><br>That is Hess’s law. <b>Why it is allowed:</b> if the two routes gave different values, coupling the direct forward route to the reverse stepwise route would create or destroy energy in a closed cycle, violating the first law.',
      },
      {
        t: 'p',
        html: '<b>Manipulation rules that follow directly:</b> (i) reverse an equation → reverse the sign of its Δ<i>H</i>; (ii) multiply an equation by a factor → multiply its Δ<i>H</i> by the same factor; (iii) add equations → add their Δ<i>H</i> values. These three moves let you algebraically combine measured reactions into the target reaction.',
      },
      {
        t: 'p',
        html: '<b>3.2 Reaction enthalpy from bond enthalpies</b><br>Treat the reaction as: completely atomise the reactants (cost = sum of reactant bond enthalpies), then assemble the products (release = sum of product bond enthalpies). The net is<br>Δ<sub>r</sub><i>H</i> = Σ BE<sub>reactant bonds</sub> − Σ BE<sub>product bonds</sub><br>Carefully count every bond — all four C–H bonds in methane, both O–H bonds in water — and remember all species must be gaseous; add Δ<sub>vap</sub><i>H</i> or Δ<sub>sub</sub><i>H</i> first if they are not.',
      },
      {
        t: 'p',
        html: '<b>3.3 Born–Haber cycle (lattice enthalpy of an ionic solid MX)</b><br>Build a closed loop equating the direct formation of the solid to the stepwise ionic route:<br>Δ<sub>f</sub><i>H</i>°(MX) = Δ<sub>sub</sub><i>H</i>(M) + Δ<sub>i</sub><i>H</i>(M) + ½Δ<sub>diss</sub><i>H</i>(X<sub>2</sub>) + Δ<sub>eg</sub><i>H</i>(X) − Δ<sub>lattice</sub><i>H</i><br>Read in order: sublimate the metal → ionise it → dissociate half a mole of X<sub>2</sub> into atoms → add an electron to X → let the gaseous ions collapse into the lattice. Every term but the unknown is measurable, so the lattice enthalpy drops out. <b>Sign discipline is the whole battle here:</b> sublimation, ionisation and dissociation are endothermic (+); electron gain (usually) and lattice formation are exothermic (−).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the standard enthalpy of reaction for the hydrogenation of ethene, C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g) → C<sub>2</sub>H<sub>6</sub>(g), given Δ<sub>f</sub><i>H</i>°[C<sub>2</sub>H<sub>4</sub>(g)] = +52.3, Δ<sub>f</sub><i>H</i>°[C<sub>2</sub>H<sub>6</sub>(g)] = −84.7, Δ<sub>f</sub><i>H</i>°[H<sub>2</sub>(g)] = 0 kJ mol<sup>−1</sup>.',
        steps: [
          '<b>Apply</b> Δ<sub>r</sub><i>H</i>° = ∑ Δ<sub>f</sub><i>H</i>°(prod) − ∑ Δ<sub>f</sub><i>H</i>°(react):<br>Δ<sub>r</sub><i>H</i>° = (−84.7) − [(+52.3) + 0]',
        ],
        ans: 'Δ<sub>r</sub><i>H</i>° = −137.0 kJ mol<sup>−1</sup> (exothermic). Note H<sub>2</sub>, an element in its reference state, contributes zero.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Given (i) C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), Δ<i>H</i><sub>1</sub> = −393.5 and (ii) CO(g) + ½O<sub>2</sub>(g) → CO<sub>2</sub>(g), Δ<i>H</i><sub>2</sub> = −283.0 kJ, find Δ<i>H</i> for C(s) + ½O<sub>2</sub>(g) → CO(g).',
        steps: [
          '<b>Speed approach:</b> the target = equation (i) <b>minus</b> equation (ii). So<br>Δ<i>H</i> = Δ<i>H</i><sub>1</sub> − Δ<i>H</i><sub>2</sub> = −393.5 − (−283.0) = −110.5 kJ',
          '<b>Trap watch:</b> the error that costs marks is forgetting that subtracting equation (ii) <b>reverses its sign</b> — students who write −393.5 − 283.0 = −676.5 have effectively added equation (ii) instead of subtracting it — they reversed it without flipping its sign. Whenever you flip a reaction, flip the sign first, then add.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept',
        q: 'Estimate Δ<sub>r</sub><i>H</i> for the combustion CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g) using mean bond enthalpies (kJ mol<sup>−1</sup>): C–H = 414, O=O = 498, C=O = 799, O–H = 463.',
        steps: [
          '<b>Bonds broken (reactants):</b> 4(C–H) + 2(O=O) = 4(414) + 2(498) = 1656 + 996 = 2652.',
          '<b>Bonds formed (products):</b> 2(C=O in CO<sub>2</sub>) + 4(O–H in 2H<sub>2</sub>O) = 2(799) + 4(463) = 1598 + 1852 = 3450.',
          'Δ<sub>r</sub><i>H</i> = ΣBE<sub>broken</sub> − ΣBE<sub>formed</sub> = 2652 − 3450',
        ],
        ans: '≈ −798 kJ mol<sup>−1</sup>. The multi-concept catch is counting bonds correctly in polyatomic molecules (four C–H, two C=O, four O–H) and keeping water in the gaseous state, since bond enthalpies apply to gases.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Determine the lattice enthalpy of KCl(s) from the following data (kJ mol<sup>−1</sup>): Δ<sub>f</sub><i>H</i>°(KCl) = −437; Δ<sub>sub</sub><i>H</i>(K) = +89; ionisation enthalpy Δ<sub>i</sub><i>H</i>(K) = +419; bond-dissociation enthalpy of Cl<sub>2</sub> = +244; electron gain enthalpy Δ<sub>eg</sub><i>H</i>(Cl) = −349.',
        steps: [
          '<b>Set up the Born–Haber loop:</b><br>Δ<sub>f</sub><i>H</i>° = Δ<sub>sub</sub><i>H</i> + Δ<sub>i</sub><i>H</i> + ½Δ<sub>diss</sub><i>H</i>(Cl<sub>2</sub>) + Δ<sub>eg</sub><i>H</i> − Δ<sub>lattice</sub><i>H</i>',
          'With ½Δ<sub>diss</sub><i>H</i>(Cl<sub>2</sub>) = ½(244) = +122:<br>−437 = 89 + 419 + 122 + (−349) − Δ<sub>lattice</sub><i>H</i><br>−437 = 281 − Δ<sub>lattice</sub><i>H</i>',
        ],
        ans: 'The lattice enthalpy (KCl(s) → K<sup>+</sup>(g) + Cl<sup>−</sup>(g)) is +718 kJ mol<sup>−1</sup>; the reverse step, K<sup>+</sup>(g) + Cl<sup>−</sup>(g) → KCl(s) releases 718 kJ mol<sup>−1</sup>. The rigor is entirely in the bookkeeping: endothermic steps positive, the half-coefficient on Cl<sub>2</sub>, and reporting the sign that matches the direction asked.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate Δ<sub>r</sub><i>H</i>° for 2H<sub>2</sub>O<sub>2</sub>(l) → 2H<sub>2</sub>O(l) + O<sub>2</sub>(g), given Δ<sub>f</sub><i>H</i>°[H<sub>2</sub>O<sub>2</sub>(l)] = −188 and Δ<sub>f</sub><i>H</i>°[H<sub>2</sub>O(l)] = −286 kJ mol<sup>−1</sup>.',
            a: '−196 kJ',
          },
          {
            q: '[NEET] The enthalpy of neutralisation of acetic acid by NaOH is −55.8 kJ mol<sup>−1</sup>, while that for a strong acid–strong base is −57.1 kJ mol<sup>−1</sup>. Find the enthalpy of ionisation (dissociation) of acetic acid.',
            a: 'Δ<sub>ion</sub><i>H</i> = −55.8 − (−57.1) = +1.3 kJ mol<sup>−1</sup> (endothermic)',
          },
          {
            q: '[JEE Main] For N<sub>2</sub>(g) + 3H<sub>2</sub>(g) → 2NH<sub>3</sub>(g), Δ<sub>r</sub><i>H</i> = −92 kJ. Using bond enthalpies N≡N = 941 and H–H = 436 kJ mol<sup>−1</sup>, find the mean N–H bond enthalpy.',
            a: '≈ +390 kJ mol<sup>−1</sup>',
          },
          {
            q: '[JEE Main] Given Δ<sub>c</sub><i>H</i>(C, graphite) = −393.5, Δ<sub>c</sub><i>H</i>(H<sub>2</sub>) = −285.8, and Δ<sub>c</sub><i>H</i>(C<sub>2</sub>H<sub>6</sub>) = −1560 kJ mol<sup>−1</sup>, find Δ<sub>f</sub><i>H</i>° of ethane.',
            a: '≈ −84.4 kJ mol<sup>−1</sup>',
          },
          {
            q: '[JEE Advanced] For NaCl(s), Δ<sub>f</sub><i>H</i>° = −411, Δ<sub>sub</sub><i>H</i>(Na) = 108, Δ<sub>i</sub><i>H</i>(Na) = 496, ½Δ<sub>diss</sub><i>H</i>(Cl<sub>2</sub>) = 121, Δ<sub>lattice</sub><i>H</i> = +788 kJ mol<sup>−1</sup>. Find the electron gain enthalpy of chlorine.',
            a: '≈ −348 kJ mol<sup>−1</sup>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Hess’s law of constant heat summation is a direct consequence of:',
        opts: [
          { label: 'enthalpy being a state function (the first law)', nudge: null },
          { label: 'the second law of thermodynamics', nudge: '<b>(b)</b> governs spontaneity (entropy), not heat summation.' },
          { label: 'the third law', nudge: '<b>(c)</b> concerns absolute entropy near 0 K.' },
          { label: 'Le Chatelier’s principle', nudge: '<b>(d)</b> is about shifting equilibria, a different chapter entirely.' },
        ],
        correct: 0,
        solution: 'Because <i>H</i> depends only on initial and final states, the total enthalpy change is route-independent — which is precisely the first law applied to enthalpy.',
      },
      {
        t: 'mcq',
        q: 'The standard enthalpy of formation of O<sub>2</sub>(g) at 298 K is:',
        opts: [
          { label: 'a large negative value', nudge: '<b>(a)</b>/<b>(b)</b> wrongly assume every species must have a nonzero formation enthalpy.' },
          { label: 'a large positive value', nudge: '<b>(a)</b>/<b>(b)</b> wrongly assume every species must have a nonzero formation enthalpy.' },
          { label: 'zero', nudge: null },
          {
            label: 'equal to its bond enthalpy',
            nudge: '<b>(d)</b> confuses the formation enthalpy with the O=O bond enthalpy (498 kJ mol<sup>−1</sup>) — a very common slip.',
          },
        ],
        correct: 2,
        solution: 'O<sub>2</sub> is an element in its reference state, so Δ<sub>f</sub><i>H</i>° = 0 by definition.',
      },
      {
        t: 'mcq',
        q: 'For H<sub>2</sub>(g) + Br<sub>2</sub>(g) → 2HBr(g), with bond enthalpies H–H = 435, Br–Br = 192, H–Br = 364 kJ mol<sup>−1</sup>, Δ<sub>r</sub><i>H</i> is:',
        opts: [
          { label: '−101 kJ', nudge: null },
          {
            label: '+101 kJ',
            nudge: '<b>(b)</b> flips the sign by using products-minus-reactants (the formation-formula direction, wrong for bond enthalpies).',
          },
          { label: '−63 kJ', nudge: '<b>(c)</b>/<b>(d)</b> match no consistent slip; forgetting to double H–Br would give +263 kJ, which is not offered.' },
          { label: '+63 kJ', nudge: '<b>(c)</b>/<b>(d)</b> match no consistent slip; forgetting to double H–Br would give +263 kJ, which is not offered.' },
        ],
        correct: 0,
        solution: 'Δ<sub>r</sub><i>H</i> = (435 + 192) − 2(364) = 627 − 728 = −101 kJ.',
      },
      {
        t: 'mcq',
        q: 'The enthalpy of neutralisation of any strong acid by any strong base is nearly constant at ≈ −57 kJ mol<sup>−1</sup> because:',
        opts: [
          { label: 'all strong acids have identical bond enthalpies', nudge: '<b>(a)</b>/<b>(c)</b> are simply untrue.' },
          { label: 'the only net reaction is H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l)', nudge: null },
          { label: 'the salts formed are identical', nudge: '<b>(a)</b>/<b>(c)</b> are simply untrue.' },
          { label: 'water has zero enthalpy of formation', nudge: '<b>(d)</b> is false and irrelevant.' },
        ],
        correct: 1,
        solution: 'Strong acids and bases are fully ionised, so regardless of identity the net change is always the same proton–hydroxide combination.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to flip the sign when reversing an equation.</b> In any Hess combination, reversing a step changes Δ<i>H</i> → −Δ<i>H</i>. Decide the algebra (which steps add, which subtract) before plugging in numbers.',
          '<b>Not scaling Δ<i>H</i> with coefficients.</b> If you double a reaction, you double its Δ<i>H</i>. Enthalpy is extensive.',
          '<b>Reversing the bond-enthalpy direction.</b> It is reactant bonds broken − product bonds formed — opposite to the formation formula. Also, bond enthalpies are for <b>gaseous</b> species; convert solids/liquids with Δ<sub>sub</sub><i>H</i> or Δ<sub>vap</sub><i>H</i> first.',
          '<b>Assigning a nonzero Δ<sub>f</sub><i>H</i>° to an element.</b> Elements in their reference state are the zero datum; do not confuse Δ<sub>f</sub><i>H</i>°(O<sub>2</sub>) = 0 with the O=O bond enthalpy.',
          '<b>Sign chaos in Born–Haber.</b> Sublimation, ionisation, dissociation are +; electron gain and lattice formation are −. Write each step with its sign before summing.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (direction memory hook):</b> Two formulas, two directions. <b>Formation enthalpies: “products minus reactants.”</b> <b>Bond enthalpies: “reactants minus products”</b> (you pay to break what you start with). Mixing the two directions is the single most common source of a sign error in this topic.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Hess’s law',
            note: 'Δ<i>H</i> is path-independent ⇒ add reactions algebraically (reverse → flip sign; ×factor → ×Δ<i>H</i>).',
          },
          {
            f: 'From formation',
            note: 'Δ<sub>r</sub><i>H</i>° = Σ<i>ν</i> Δ<sub>f</sub><i>H</i>°(prod) − Σ<i>ν</i> Δ<sub>f</sub><i>H</i>°(react); elements in reference state = 0.',
          },
          { f: 'From bond enthalpies (gas)', note: 'Δ<sub>r</sub><i>H</i> = ΣBE<sub>broken</sub> − ΣBE<sub>formed</sub>.' },
          { f: 'Phase relation', note: 'Δ<sub>sub</sub><i>H</i> = Δ<sub>fus</sub><i>H</i> + Δ<sub>vap</sub><i>H</i>.' },
          {
            f: 'Neutralisation (strong–strong)',
            note: '≈ −57.1 kJ mol<sup>−1</sup> (net H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O).',
          },
          {
            f: 'Born–Haber',
            note: 'Δ<sub>f</sub><i>H</i> = Δ<sub>sub</sub><i>H</i> + Δ<sub>i</sub><i>H</i> + ½Δ<sub>diss</sub><i>H</i> + Δ<sub>eg</sub><i>H</i> − Δ<sub>lattice</sub><i>H</i>.',
          },
        ],
        aids: [
          '“Formation: products − reactants. Bonds: reactants − products.”',
          '“Reverse the reaction, reverse the sign.”',
          '“Bond enthalpies live in the gas phase.”',
        ],
      },
    ],
  },
];
