import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topics 01 and 02: pp. 742–758 of the Class 11 Physics Master
 * Reference, word for word: Thermodynamic State and the Zeroth Law
 * (pp. 742–750) and The First Law of Thermodynamics (pp. 751–758). The
 * chapter’s title and contents (pp. 740–741) are not copied. Each is split at
 * its Sections 1 to 8. Figures 11.1 (caption p. 743, drawn on p. 744), 11.2
 * (caption p. 745, drawn on p. 746), 11.3 (caption p. 752, drawn on p. 753)
 * and 11.4 (caption p. 754, drawn on p. 755) are redrawn in
 * lib/diagrams/physics-11-11.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 742–750 ─────────────────────────
  {
    n: '01',
    title: 'Thermodynamic State and the Zeroth Law',
    kalam: 'Experiment shows that thermal equilibrium is transitive, like an equals sign in algebra.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual foundation of the entire chapter. CBSE Boards almost always pick a 1–2 mark question here — a definition of the zeroth law, “state variable vs. path variable,” or a clean equation-of-state calculation. NEET loves it as a one-line conceptual trap (thermal equilibrium ≠ equal energy). JEE Main asks crisp equation-of-state numericals, and JEE Advanced occasionally probes the deep idea: that temperature is a property the zeroth law forces into existence. Master this, and the rest of thermodynamics has solid ground to stand on.',
      },
      {
        t: 'p',
        html: 'Imagine you walk into a sweet shop in the afternoon and pick up a steel tin of fresh gulab jamun syrup that’s been sitting on the counter. Your hand tells you it’s “warm.” But what is warmth, really? You can’t see it, weigh it, or bottle it. Yet you’re absolutely confident the tin and the room have settled into some shared condition. That shared condition is the seed of everything we are about to build.',
      },
      {
        t: 'p',
        html: 'Thermodynamics is the branch of physics that studies heat, temperature, and how heat converts into other forms of energy — but it does so from a deliberately “zoomed-out” point of view. It is a macroscopic science. When we describe a litre of gas thermodynamically, we don’t care that it contains roughly 10<sup>22</sup> molecules each zipping around with its own velocity. That microscopic bookkeeping belongs to kinetic theory. Thermodynamics instead asks: what few bulk numbers can I measure with ordinary instruments that completely pin down the condition of this gas? The answer is a small handful of quantities — pressure, volume, temperature, mass, composition — that our senses and lab instruments can grab directly.',
      },
      {
        t: 'p',
        html: 'This bundle of bulk quantities defines what we call the <b>thermodynamic state</b> of a system. A “system” is simply the chunk of the universe we choose to study (the gas in a cylinder, the syrup in the tin), and everything outside it is the <b>surroundings</b>. The boundary between them — the <b>wall</b> — is more important than students expect. A wall that lets heat pass through is <b>diathermic</b> (conducting); a wall that blocks heat entirely is <b>adiabatic</b> (insulating). Whether two systems can “feel” each other thermally depends entirely on the wall between them.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture two friends in adjacent train compartments. If the connecting door is open (diathermic wall), they keep chatting until they’ve agreed on every piece of gossip — they reach a settled, no-more-news state. If the door is sealed (adiabatic wall), each lives in their own world, oblivious to the other. “Reaching a settled state where nothing more changes” is exactly what physicists call <b>thermal equilibrium</b>: two systems in thermal contact stop exchanging heat once their macroscopic variables stop drifting. The hot one cooled, the cold one warmed, and they met somewhere in the middle.',
      },
      {
        t: 'p',
        html: 'Now here is the quietly profound part. Experiment shows that thermal equilibrium is transitive, like an equals sign in algebra. If system A has settled with system C, and system B has separately settled with the same C, then A and B turn out to already be settled with each other — even if A and B were never in direct contact. This single observation is the <b>Zeroth Law of Thermodynamics</b>, and it does something beautiful: it guarantees that every system carries a single number such that “equal numbers” means “in equilibrium.” We name that number <b>temperature</b>. So temperature isn’t assumed at the start of thermodynamics — it is forced into existence by the zeroth law. That’s why this law, discovered last, is numbered first: temperature has to exist before the first and second laws can even be written down.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Keep three guardrails in mind. (1) The whole “state” picture requires the system to actually be in equilibrium — for a gas mid-explosion, pressure and temperature aren’t even well-defined at a single value. (2) The clean three-variable description (<i>P</i>, <i>V</i>, <i>T</i> linked by an equation of state) assumes a homogeneous system of fixed mass and composition; a mixture mid-reaction needs more variables. (3) The zeroth law is an empirical law about equilibrium — it says equal temperatures mean equilibrium, but it says nothing about equal energy. Two systems at the same temperature can hold wildly different amounts of internal energy. That distinction trips up more students in the exam hall than almost anything else in this topic.',
      },
      { t: 'fig', id: 'p11-11-fig-11.1' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Thermodynamic state',
        html: 'the condition of a homogeneous system of fixed mass and composition, completely specified by any two independent state variables (e.g. <i>P</i> and <i>V</i>, or <i>P</i> and <i>T</i>, or <i>V</i> and <i>T</i>).',
      },
      {
        t: 'formula',
        kicker: 'Equation of state (ideal gas)',
        main: '<i>PV</i> = <i>nRT</i><br>A frequently used “per molecule” form is:<br><i>PV</i> = <i>Nk</i><sub><i>B</i></sub><i>T</i>',
        legend: [
          '<i>P</i> = pressure',
          '<i>V</i> = volume',
          '<i>n</i> = number of moles',
          '<i>T</i> = absolute (kelvin) temperature',
          '<i>R</i> = universal gas constant',
          '<i>N</i> = number of molecules',
          '<i>k</i><sub><i>B</i></sub> = Boltzmann constant (= <i>R</i>/<i>N</i><sub><i>A</i></sub>)',
        ],
        note: null,
      },
      {
        t: 'def',
        term: 'Zeroth Law (formal statement)',
        html: 'If two systems A and B are each separately in thermal equilibrium with a third system C, then A and B are in thermal equilibrium with each other. Consequently there exists a state variable — temperature <i>T</i> — such that<br><i>T</i><sub><i>A</i></sub> = <i>T</i><sub><i>C</i></sub> and <i>T</i><sub><i>B</i></sub> = <i>T</i><sub><i>C</i></sub> ⇒ <i>T</i><sub><i>A</i></sub> = <i>T</i><sub><i>B</i></sub>.',
      },
      {
        t: 'table',
        title: 'Quantity reference table',
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Pressure', '<i>P</i>', 'pascal (Pa)', '[M<sup>1</sup> L<sup>−1</sup> T<sup>−2</sup>]'],
          ['Volume', '<i>V</i>', 'm<sup>3</sup>', '[M<sup>0</sup> L<sup>3</sup> T<sup>0</sup>]'],
          ['Temperature', '<i>T</i>', 'kelvin (K)', '[θ]'],
          ['Number of moles', '<i>n</i>', 'mol', '[mol]'],
          ['Universal gas constant', '<i>R</i>', 'J mol<sup>−1</sup> K<sup>−1</sup>', '[M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup> θ<sup>−1</sup> mol<sup>−1</sup>]'],
          ['Boltzmann constant', '<i>k</i><sub><i>B</i></sub>', 'J K<sup>−1</sup>', '[M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup> θ<sup>−1</sup>]'],
          ['Internal energy', '<i>U</i>', 'joule (J)', '[M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Numerical constants you must memorise:</b> <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>, <i>k</i><sub><i>B</i></sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>, <i>N</i><sub><i>A</i></sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>, and the triple point of water <i>T</i><sub><i>tr</i></sub> = 273.16 K.',
      },
      {
        t: 'p',
        html: '<b>Key classification — Intensive vs. Extensive variables:</b><br>• <b>Intensive</b> (do not depend on amount of substance): pressure, temperature, density, molar volume.<br>• <b>Extensive</b> (scale with amount): volume, mass, internal energy, number of moles.<br>• A handy test: cut the system in half. Whatever stays the same is intensive (<i>P</i>, <i>T</i>); whatever halves is extensive (<i>V</i>, <i>U</i>, <i>n</i>).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no algebra-heavy “derivation” of the zeroth law itself — it is an empirical law. So this section lays out the logical machinery the law sets in motion, plus the standard procedures you’ll execute in problems.',
      },
      {
        t: 'p',
        html: 'This is the reasoning JEE Advanced examiners love, so understand each link:',
      },
      {
        t: 'proc',
        title: '3.1 How the Zeroth Law creates temperature (the logical chain)',
        steps: [
          '<b>Observation:</b> When two systems are joined by a diathermic wall, their macroscopic variables change and then stop. We call the final unchanging condition thermal equilibrium.',
          '<b>The transitivity experiment:</b> Put A and B each in equilibrium with a third body C (a thermometer, say), while keeping A and B insulated from each other. Now remove the insulation between A and B. Result: nothing changes — they were already in equilibrium. This is the zeroth law as a raw experimental fact.',
          '<b>The logical consequence:</b> “Being in equilibrium with C” partitions all systems into groups. Every member of a group is in equilibrium with every other member. We need a label for each group.',
          '<b>Defining the label:</b> Assign each group a number such that two systems share the number if and only if they are in mutual equilibrium. That number is temperature. Equilibrium ⇔ equal temperature is now true by construction, made legitimate by step 2.',
          '<b>The pay-off — the thermometer:</b> Because of step 4, we never need to press two objects together to compare them. We touch a small standard system (thermometer) to each in turn; equal thermometer readings guarantee equal temperatures. Every temperature measurement you have ever made silently relies on the zeroth law.',
        ],
      },
      { t: 'fig', id: 'p11-11-fig-11.2' },
      {
        t: 'proc',
        title: '3.2 Procedure: specifying a thermodynamic state',
        steps: [
          'Confirm the system is homogeneous, of fixed mass and composition, and in equilibrium (otherwise state variables aren’t single-valued).',
          'Choose any two independent variables — most commonly two of {<i>P</i>, <i>V</i>, <i>T</i>}.',
          'The third follows automatically from the equation of state <i>PV</i> = <i>nRT</i>. You never need all three independently; specifying all three over-determines the state.',
          'Plot the state as a single point on a <i>P</i>–<i>V</i> (indicator) diagram. A point = a definite state; a line = a process.',
        ],
      },
      {
        t: 'p',
        html: '<b>3.3 Procedure: state variables vs. path variables</b><br>• A <b>state variable</b> (point function) depends only on the current state, not on how the system got there: <i>P</i>, <i>V</i>, <i>T</i>, <i>U</i>. Over any closed cycle, its net change is zero: ∮ d<i>U</i> = 0.<br>• A <b>path variable</b> depends on the route taken between two states: heat <i>Q</i> and work <i>W</i>. There is no “amount of heat stored in a gas” — only heat transferred along a path.<br>• Quick decision rule: ask “does this quantity have a definite value the instant I freeze the system?” If yes → state variable. If it only makes sense while something is happening → path variable.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A rigid steel cylinder of fixed internal volume 0.025 m<sup>3</sup> holds an ideal gas at a pressure of 2.0 × 10<sup>5</sup> Pa and a temperature of 300 K. Determine the number of moles of gas in the cylinder.',
        steps: [
          '<b>Solution.</b> Given: <i>V</i> = 0.025 m<sup>3</sup>, <i>P</i> = 2.0 × 10<sup>5</sup> Pa, <i>T</i> = 300 K, <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>. Rearranging the equation of state for <i>n</i>:<br><i>n</i> = <i>PV</i>/(<i>RT</i>) = (2.0 × 10<sup>5</sup>)(0.025)/((8.314)(300)) = (5.0 × 10<sup>3</sup>)/(2.494 × 10<sup>3</sup>) mol',
          '<b>Note on units:</b> Pa · m<sup>3</sup> = N m<sup>−2</sup> · m<sup>3</sup> = N m = J, which cancels cleanly against the joules in <i>R</i>, leaving mol. Always check that the energy units reconcile — it’s the fastest sanity check in board exams.',
        ],
        ans: '≈ 2.0 mol',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Three sealed flasks P, Q, and R are observed over time. P is in thermal equilibrium with Q, and Q is in thermal equilibrium with R. A student concludes: (i) P is in equilibrium with R; (ii) P, Q, R all have the same temperature; (iii) P, Q, R all contain the same internal energy. Which conclusions are correct?',
        steps: [
          '<b>Speed solution.</b> Reason in one pass:<br>• (i) is the zeroth law applied directly (P ↔ Q, Q ↔ R ⇒ P ↔ R). <b>Correct.</b><br>• (ii) is just (i) restated through temperature. Equilibrium ⇔ equal temperature. <b>Correct.</b><br>• (iii) is the trap. Temperature is intensive; internal energy is extensive and depends on the amount and nature of gas in each flask. A flask with 5 mol holds far more internal energy than one with 1 mol at the same temperature. <b>Incorrect.</b>',
          '<b>Mental-elimination tip:</b> the instant a question offers an “equal energy/equal heat” option alongside “equal temperature,” suspect the energy option. Equal <i>T</i> is what the zeroth law gives you; equal <i>U</i> is something it never promises.',
        ],
        ans: '(i) and (ii) only.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A rigid, externally insulated container is split into two equal halves by a fixed, heat-conducting (diathermic) partition. Each half has volume 0.010 m<sup>3</sup>. The left half holds 2.0 mol of a monoatomic ideal gas at 400 K; the right half holds 3.0 mol of the same gas at 300 K. Find (a) the final common temperature and (b) the final pressure on each side.',
        steps: [
          '<b>Solution.</b> <b>Step 1 — what is conserved?</b> The partition is fixed (no work) and the container is externally insulated (no heat in/out). So total internal energy is constant. For a monoatomic ideal gas <i>U</i> = (3/2)<i>nRT</i>:<br>(3/2)<i>R</i>(<i>n</i><sub>1</sub><i>T</i><sub>1</sub> + <i>n</i><sub>2</sub><i>T</i><sub>2</sub>) = (3/2)<i>R</i>(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>)<i>T</i><sub><i>f</i></sub>.',
          '<b>Step 2 — common temperature.</b> The (3/2)<i>R</i> cancels:<br><i>T</i><sub><i>f</i></sub> = (<i>n</i><sub>1</sub><i>T</i><sub>1</sub> + <i>n</i><sub>2</sub><i>T</i><sub>2</sub>)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>) = ((2.0)(400) + (3.0)(300))/5.0 = 1700/5.0 K = 340 K.<br>By the zeroth law this single temperature now describes both halves.',
          '<b>Step 3 — pressures</b> (each half keeps <i>V</i> = 0.010 m<sup>3</sup>):<br><i>P</i><sub>left</sub> = <i>n</i><sub>1</sub><i>RT</i><sub><i>f</i></sub>/<i>V</i> = (2.0)(8.314)(340)/0.010 ≈ 5.65 × 10<sup>5</sup> Pa,<br><i>P</i><sub>right</sub> = <i>n</i><sub>2</sub><i>RT</i><sub><i>f</i></sub>/<i>V</i> = (3.0)(8.314)(340)/0.010 ≈ 8.48 × 10<sup>5</sup> Pa.',
          'The temperatures equalise, but the pressures do not — the halves hold different amounts of gas in the same volume. Thermal equilibrium fixes temperature, not the other state variables.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A constant-volume ideal-gas thermometer reads <i>T</i> = 273.16 (<i>P</i>/<i>P</i><sub><i>tr</i></sub>) K, where <i>P</i><sub><i>tr</i></sub> is its gas pressure at the triple point of water. Dipped in bath A it reads 1.10 <i>P</i><sub><i>tr</i></sub>; in bath B it reads 1.30 <i>P</i><sub><i>tr</i></sub>. Bath A is 2.0 kg of water, bath B is 1.0 kg of water (same specific heat). The baths are placed in thermal contact, isolated, and allowed to settle. The thermometer is afterwards dipped in each in turn. Predict, with justification, and compute the two readings.',
        steps: [
          '<b>Solution.</b> <b>Step 1 — initial bath temperatures:</b><br><i>T</i><sub><i>A</i></sub> = 273.16(1.10) = 300.5 K, <i>T</i><sub><i>B</i></sub> = 273.16(1.30) = 355.1 K.',
          '<b>Step 2 — the deep prediction.</b> When A and B reach mutual equilibrium, they share one temperature <i>T</i><sub><i>f</i></sub>. By the zeroth law the thermometer — itself a third system — must register the same value in A and B. So before any arithmetic we assert: the two final readings are identical.',
          '<b>Step 3 — common temperature (calorimetry):</b> heat lost = heat gained, <i>m</i><sub><i>A</i></sub><i>c</i>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>A</i></sub>) + <i>m</i><sub><i>B</i></sub><i>c</i>(<i>T</i><sub><i>f</i></sub> − <i>T</i><sub><i>B</i></sub>) = 0, giving the mass-weighted mean:<br><i>T</i><sub><i>f</i></sub> = (<i>m</i><sub><i>A</i></sub><i>T</i><sub><i>A</i></sub> + <i>m</i><sub><i>B</i></sub><i>T</i><sub><i>B</i></sub>)/(<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>B</i></sub>) = ((2.0)(300.5) + (1.0)(355.1))/3.0',
          '<b>Step 4 — convert back:</b> <i>P</i><sub><i>f</i></sub> = <i>P</i><sub><i>tr</i></sub><i>T</i><sub><i>f</i></sub>/273.16 = <i>P</i><sub><i>tr</i></sub>(318.7/273.16)',
          'The zeroth law gives the qualitative answer (equal readings) before calculation; the masses fix the numerical value. Note 318.7 K is nearer <i>T</i><sub><i>A</i></sub> — exactly as the 2:1 mass ratio demands.',
        ],
        ans: 'Both readings ≈ 1.17 <i>P</i><sub><i>tr</i></sub> (<i>T</i><sub><i>f</i></sub> ≈ 318.7 K)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] An ideal gas occupies 5.0 × 10<sup>−3</sup> m<sup>3</sup> at 1.0 × 10<sup>5</sup> Pa and 250 K. Find the number of moles present.',
            a: '≈ 0.24 mol.',
          },
          {
            q: '[NEET] Classify each as state or path variable: pressure, work done, internal energy, heat supplied, volume. Then state which two of {pressure, work, volume} can together specify the state of a fixed mass of ideal gas.',
            a: 'State: pressure, internal energy, volume; Path: work, heat. Pressure and volume (work is a path variable).',
          },
          {
            q: '[JEE Main] A fixed mass of ideal gas at 300 K and 2.0 × 10<sup>5</sup> Pa is heated in a rigid sealed container until its pressure rises to 3.2 × 10<sup>5</sup> Pa. Find its new temperature.',
            a: '480 K.',
          },
          {
            q: '[JEE Main] Two equal rigid volumes joined by a fixed diathermic wall, isolated from outside, hold 1.0 mol of a monoatomic ideal gas at 500 K and 4.0 mol of the same gas at 250 K. Find the final common temperature.',
            a: '300 K.',
          },
          {
            q: '[JEE Advanced] A constant-volume gas thermometer reads <i>P</i><sub>1</sub> in a bath at unknown <i>T</i><sub>1</sub> and 1.5<i>P</i><sub>1</sub> in a second bath. The triple-point pressure is <i>P</i><sub><i>tr</i></sub> = 0.80<i>P</i><sub>1</sub>. The second bath is twice as massive (same liquid) and the two are mixed in isolation. Find (a) <i>T</i><sub>1</sub>, (b) the final common temperature, (c) the thermometer’s final reading in each bath as a multiple of <i>P</i><sub><i>tr</i></sub>.',
            a: '(a) <i>T</i><sub>1</sub> = 273.16(<i>P</i><sub>1</sub>/<i>P</i><sub><i>tr</i></sub>) = 273.16/0.80 ≈ 341.5 K; (b) second bath <i>T</i><sub>2</sub> = 1.5 × 341.5 ≈ 512.2 K; mixing (mass ratio 1:2) gives <i>T</i><sub><i>f</i></sub> = (341.5 + 2 × 512.2)/3 ≈ 455.3 K; (c) both baths read <i>P</i><sub><i>f</i></sub> = <i>P</i><sub><i>tr</i></sub>(<i>T</i><sub><i>f</i></sub>/273.16) ≈ 1.67 <i>P</i><sub><i>tr</i></sub>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The zeroth law fundamentally allows us to define which physical quantity?',
        opts: [
          { label: 'Heat', nudge: '<b>(A)</b> Heat is energy in transit due to a temperature difference; it presupposes temperature exists.' },
          { label: 'Internal energy', nudge: '<b>(B)</b> Internal energy is defined later, through the first law, not the zeroth.' },
          { label: 'Temperature', nudge: null },
          { label: 'Work', nudge: '<b>(D)</b> Work is a mechanical, path-dependent transfer; unrelated to the zeroth law.' },
        ],
        correct: 2,
        solution: 'The zeroth law makes “in equilibrium with” transitive, letting us tag every system with one number — temperature — equal exactly when two systems are in equilibrium.',
      },
      {
        t: 'mcq',
        q: 'The minimum number of independent state variables needed to specify the state of a homogeneous fixed mass of ideal gas in equilibrium is:',
        opts: [
          { label: '1', nudge: '<b>(A)</b> 1 is too few — fixing one variable (say <i>T</i>) still leaves the gas free to move along a curve (the isotherm).' },
          { label: '2', nudge: null },
          { label: '3', nudge: '<b>(C)</b> 3 over-counts, ignoring the equation-of-state constraint — the most common wrong choice.' },
          { label: '4', nudge: '<b>(D)</b> 4 adds mass/moles, but the mass is already fixed.' },
        ],
        correct: 1,
        solution: '<i>P</i>, <i>V</i>, <i>T</i> are tied by <i>PV</i> = <i>nRT</i>; fixing any two fixes the third.',
      },
      {
        t: 'mcq',
        q: 'Which is an intensive property?',
        opts: [
          { label: 'Volume', nudge: '<b>(A)</b> Volume halves — extensive.' },
          { label: 'Internal energy', nudge: '<b>(B)</b> Internal energy scales with amount — extensive.' },
          { label: 'Number of moles', nudge: '<b>(C)</b> Number of moles literally measures amount — the most obviously extensive quantity.' },
          { label: 'Pressure', nudge: null },
        ],
        correct: 3,
        solution: 'Cut the system in half: pressure stays the same, so it is intensive.',
      },
      {
        t: 'mcq',
        q: 'X is in thermal equilibrium with Y. Y is not in equilibrium with Z. Which is necessarily true?',
        opts: [
          { label: 'X ↔ Z', nudge: '<b>(A)</b> would need <i>T</i><sub><i>X</i></sub> = <i>T</i><sub><i>Z</i></sub>, but <i>T</i><sub><i>X</i></sub> = <i>T</i><sub><i>Y</i></sub> ≠ <i>T</i><sub><i>Z</i></sub>.' },
          { label: 'X not ↔ Z', nudge: null },
          { label: 'X, Y, Z equal <i>T</i>', nudge: '<b>(C)</b> impossible since <i>T</i><sub><i>Y</i></sub> ≠ <i>T</i><sub><i>Z</i></sub>.' },
          { label: 'Z has greater <i>U</i> than X', nudge: '<b>(D)</b> confuses temperature with energy.' },
        ],
        correct: 1,
        solution: '<i>X</i> ↔ <i>Y</i> ⇒ <i>T</i><sub><i>X</i></sub> = <i>T</i><sub><i>Y</i></sub>; <i>T</i><sub><i>Y</i></sub> ≠ <i>T</i><sub><i>Z</i></sub>, so <i>T</i><sub><i>X</i></sub> ≠ <i>T</i><sub><i>Z</i></sub>, hence X and Z cannot be in equilibrium.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing equal temperature with equal energy.</b> A tiny hot system and a huge warm system can hold the same internal energy; two same-<i>T</i> systems usually hold different energies. Temperature is intensive; energy is extensive.',
          '<b>Treating <i>P</i>, <i>V</i>, <i>T</i> as three independent variables.</b> They are bound by <i>PV</i> = <i>nRT</i>. For a fixed mass, only two are free.',
          '<b>Calling heat a state variable.</b> <i>Q</i> and <i>W</i> are path quantities. <i>P</i>, <i>V</i>, <i>T</i>, <i>U</i> are state (point) functions. Never write “the heat content of the gas.”',
          '<b>Using <i>T</i> in °C inside <i>PV</i> = <i>nRT</i>.</b> The gas equation demands kelvin. Always convert: <i>T</i>(K) = <i>t</i>(°C) + 273.15.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> For “same gas, fixed amount, two states” problems, skip rederiving everything — use the ratio form (<i>P</i><sub>1</sub><i>V</i><sub>1</sub>)/<i>T</i><sub>1</sub> = (<i>P</i><sub>2</sub><i>V</i><sub>2</sub>)/<i>T</i><sub>2</sub>. Cancel whatever is held constant (<i>V</i> for rigid, <i>P</i> for free-piston) and you’re left with a one-line proportion. And for any “two bodies reach equilibrium” question, write the qualitative answer first — equal final temperature — before touching the algebra.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'State of a homogeneous fixed-mass system = one point in <i>P</i>–<i>V</i>–<i>T</i> space, fixed by any two independent variables.',
            note: '',
          },
          {
            f: 'Equation of state',
            note: '<i>PV</i> = <i>nRT</i> (use <i>T</i> in kelvin, always). Per-molecule: <i>PV</i> = <i>Nk</i><sub><i>B</i></sub><i>T</i>.',
          },
          {
            f: 'Zeroth Law',
            note: 'A ↔ C and B ↔ C ⇒ A ↔ B → defines temperature as the shared label of equilibrium.',
          },
          { f: 'Equilibrium ⇔ equal temperature (NOT equal energy, NOT equal pressure).', note: '' },
          {
            f: 'State variables (point functions)',
            note: '<i>P</i>, <i>V</i>, <i>T</i>, <i>U</i> — depend only on the state; ∮ d<i>U</i> = 0.',
          },
          { f: 'Path variables', note: '<i>Q</i>, <i>W</i> — depend on the route taken.' },
          {
            f: 'Intensive (<i>P</i>, <i>T</i>, <i>ρ</i> — unchanged on halving) vs. Extensive (<i>V</i>, <i>U</i>, <i>n</i> — halve on halving).',
            note: '',
          },
        ],
        aids: [
          '“Zeroth = the law that gives birth to temperature.”',
          '“Cut it in half: same → intensive, halved → extensive.”',
          '“Heat and Work are journeys, not destinations.”',
          '“Two independent variables, third comes free.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 751–758 ─────────────────────────
  {
    n: '02',
    title: 'The First Law of Thermodynamics',
    kalam: 'The first law is an empirical statement of energy conservation, elevated to a postulate.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the workhorse of the whole chapter — almost every numerical you’ll meet later is the first law wearing a different costume. CBSE Boards reliably ask a 2–3 mark numerical (“heat given, work done, find Δ<i>U</i>”) plus the occasional definition or “limitations” question. NEET favours quick sign-convention and conceptual traps (cyclic process, isothermal Δ<i>U</i> = 0). JEE Main asks multi-step or two-path numericals exploiting that internal energy is a state function. JEE Advanced layers it onto phase changes, cycles, or processes where you must track each transfer’s sign with care. Get the sign convention airtight and you’ve won half the chapter.',
      },
      {
        t: 'p',
        html: 'We learned that a system’s condition is captured by its internal energy <i>U</i> — a genuine state variable, a number the gas “owns.” The natural next question is the one this entire law answers: how can that owned energy change?',
      },
      {
        t: 'p',
        html: 'Picture a fixed amount of gas trapped in a cylinder under a frictionless, movable piston — the single most important mental image in thermodynamics. There are exactly two doors through which energy can enter or leave this gas. Door one is <b>heat</b>: place the cylinder on a hot stove, and because of the temperature difference, energy seeps in as heat <i>Q</i>. Door two is <b>work</b>: push the piston down and you do work on the gas, cramming energy in; let the gas push the piston up and the gas spends energy doing work on the surroundings. Heat flow and work are the only two ways to alter the internal energy of a closed system. There is no third door.',
      },
      {
        t: 'p',
        html: 'The first law is just honest accounting of these two doors. Energy is never created or destroyed, so whatever comes in through the heat door must either pile up inside (raising <i>U</i>) or go back out through the work door. In symbols, with the convention Indian boards and JEE/NEET use throughout:<br>Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i>.<br>Read it as a sentence: the heat poured into a gas splits into two parts — some raises its internal energy, the rest is spent by the gas doing work on its surroundings.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Treat the gas like a bank account for a month. Δ<i>Q</i> is the salary credited (income). Δ<i>W</i> is the rent and bills paid out (expenditure). Δ<i>U</i> is the change in balance (savings). The law Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i> says: income = change in savings + expenditure. Some months income is high and savings grow; some months you overspend, withdrawing from savings so the balance drops (Δ<i>U</i> < 0). Nobody invents money from nothing — and no gas invents energy from nothing. That is conservation of energy.',
      },
      {
        t: 'p',
        html: 'Now the subtle, exam-deciding distinction. Your bank balance is a state — at any instant it has one definite value. But “income” and “expenditure” describe flows during a period, not contents at an instant. It is meaningless to ask “how much income is sitting in the account right now?” Likewise, internal energy <i>U</i> is a <b>state function</b>, while heat <i>Q</i> and work <i>W</i> are <b>path functions</b> — they describe energy in transit, not energy stored. This is why physicists scold the phrase “heat contained in a gas”: a gas in a given state has internal energy, never “an amount of heat.”',
      },
      {
        t: 'p',
        html: 'A powerful consequence drops out: take a gas from state <i>i</i> to state <i>f</i> by ten wildly different routes, and <i>Q</i> and <i>W</i> differ on every route — but Δ<i>U</i> = <i>U</i><sub><i>f</i></sub> − <i>U</i><sub><i>i</i></sub> is identical for all ten, because it depends only on the endpoints. So Δ<i>Q</i> − Δ<i>W</i> comes out the same no matter the path. This path-independence of Δ<i>U</i> is the single most-used idea in first-law problems.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Three guardrails. (1) Unit consistency is non-negotiable: <i>Q</i>, <i>U</i>, <i>W</i> must be in the same units — mix calories and joules and your answer is wrong (1 cal = 4.18 J). (2) The law is supremely general — solids, liquids, gases, even phase changes — but the simple work expression <i>W</i> = ∫ <i>P</i> d<i>V</i> assumes a quasi-static process with a well-defined pressure at every step. (3) The first law is a bookkeeper, not a fortune-teller: it guarantees energy balances but says nothing about which direction a process spontaneously goes, or what fraction of heat can become useful work. That blind spot is what the second law fills.',
      },
      { t: 'fig', id: 'p11-11-fig-11.3' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'First law (Indian / JEE–NEET sign convention)',
        main: 'Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i> ⟺ Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i>',
        legend: [],
        note: 'In differential form, using đ for inexact (path-dependent) differentials: đ<i>Q</i> = d<i>U</i> + đ<i>W</i>.',
      },
      {
        t: 'p',
        html: '<b>Sign convention (memorise exactly):</b><br>• Δ<i>Q</i> > 0: heat absorbed by the system; Δ<i>Q</i> < 0: heat released.<br>• Δ<i>W</i> > 0: work done by the system (expansion); Δ<i>W</i> < 0: work done on the system (compression).<br>• Δ<i>U</i> > 0: internal energy (and, for an ideal gas, temperature) increases.',
      },
      {
        t: 'formula',
        kicker: 'Work done by a gas (quasi-static)',
        main: 'Δ<i>W</i> = ∫ <i>P</i> d<i>V</i> (from <i>V</i><sub><i>i</i></sub> to <i>V</i><sub><i>f</i></sub>) = area under the <i>P</i>–<i>V</i> curve',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Internal energy of an ideal gas',
        main: 'depends only on temperature, for any process:<br>Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub> Δ<i>T</i>',
        legend: ['<i>C</i><sub><i>V</i></sub> = the molar heat capacity at constant volume'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Alternate convention alert.</b> Some foreign textbooks (and chemistry) write Δ<i>U</i> = Δ<i>Q</i> + Δ<i>W</i>, defining Δ<i>W</i> as work done on the system. It is the same physics with <i>W</i>’s sign flipped. This companion uses the physics/board convention Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i> (<i>W</i> = work by gas) throughout. Pick one and never mix them mid-problem.',
      },
      {
        t: 'table',
        title: 'The first law in four standard processes (each is the master equation with one term killed)',
        head: ['Process', 'Constraint', 'What vanishes', 'First law reduces to'],
        rows: [
          ['Isochoric', '<i>V</i> constant', 'Δ<i>W</i> = 0', 'Δ<i>Q</i> = Δ<i>U</i>'],
          ['Isobaric', '<i>P</i> constant', '—', 'Δ<i>Q</i> = Δ<i>U</i> + <i>P</i>Δ<i>V</i>'],
          ['Isothermal (ideal gas)', '<i>T</i> constant', 'Δ<i>U</i> = 0', 'Δ<i>Q</i> = Δ<i>W</i>'],
          ['Adiabatic', 'no heat exchange', 'Δ<i>Q</i> = 0', 'Δ<i>U</i> = −Δ<i>W</i>'],
        ],
      },
      {
        t: 'p',
        html: 'All three of Δ<i>Q</i>, Δ<i>W</i>, Δ<i>U</i> share the dimension of energy [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>] — a useful self-check that the equation is dimensionally homogeneous.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'The first law is an empirical statement of energy conservation, elevated to a postulate. What matters for exams is (a) the reasoning that fixes its form and (b) a reliable solution procedure.',
      },
      {
        t: 'proc',
        title: '3.1 Why internal energy must be a state function (the logical core)',
        steps: [
          '<b>Experimental fact:</b> for any process taking a system from <i>i</i> to <i>f</i>, the quantity (Δ<i>Q</i> − Δ<i>W</i>) is the same regardless of path, even though Δ<i>Q</i> and Δ<i>W</i> individually vary wildly.',
          '<b>Logical inference:</b> a quantity that depends only on the endpoints is, by definition, a function of state. So there exists a state function — internal energy <i>U</i> — whose change equals Δ<i>Q</i> − Δ<i>W</i>.',
          '<b>Definition forced on us:</b> we therefore define Δ<i>U</i> ≡ Δ<i>Q</i> − Δ<i>W</i>. The first law simultaneously expresses energy conservation and introduces internal energy as a legitimate property. The two ideas arrive together.',
          '<b>Cyclic corollary:</b> if the system returns to its start (<i>i</i> = <i>f</i>), then Δ<i>U</i> = 0 over the cycle, so ∮ đ<i>Q</i> = ∮ đ<i>W</i> — net heat absorbed equals net work done. This one line solves a huge fraction of cyclic-process questions.',
        ],
      },
      { t: 'fig', id: 'p11-11-fig-11.4' },
      {
        t: 'proc',
        title: '3.2 Standard procedure for any first-law problem',
        steps: [
          '<b>Identify the system and the two transfers.</b> What is the substance? Is heat entering or leaving? Is the gas expanding (doing work) or being compressed (work done on it)?',
          '<b>Assign signs first, numbers second.</b> Write Δ<i>Q</i> and Δ<i>W</i> with explicit +/−. Most wrong answers here are sign errors, not arithmetic errors.',
          '<b>Convert to one unit system</b> (joules, usually). 1 cal = 4.18 J.',
          '<b>Apply</b> Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i>, or its reduced form for isochoric/isobaric/isothermal/adiabatic.',
          '<b>Exploit path-independence</b> if two routes share endpoints: compute Δ<i>U</i> from the known route, reuse it for the unknown route.',
          '<b>Sanity-check the sign of Δ<i>U</i>:</b> for an ideal gas, Δ<i>U</i> > 0 ⇔ temperature rose. Does that match the physics?',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A gas is supplied 250 cal of heat. During the heating it expands and does 500 J of work on the surroundings. Find the change in internal energy. (1 cal = 4.18 J.)',
        steps: [
          '<b>Solution.</b> Given Δ<i>Q</i> = +250 cal (absorbed), Δ<i>W</i> = +500 J (by gas). Convert: Δ<i>Q</i> = 250 × 4.18 = 1045 J. Apply the first law:<br>Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i> = 1045 − 500',
          'The positive sign tells us internal energy increased by 545 J — most of the heat stayed inside the gas, the rest pushed the piston outward. (Skipping the cal→J conversion would give nonsense.)',
        ],
        ans: 'Δ<i>U</i> = +545 J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A gas is compressed by an external agent who does 80 J of work on it. During compression the gas releases 30 J of heat. By how much does the internal energy change?',
        steps: [
          '<b>Speed solution.</b> The trap is entirely in the signs — set them first. Heat released ⇒ Δ<i>Q</i> = −30 J. Work done on the gas ⇒ work done by the gas is Δ<i>W</i> = −80 J.<br>Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i> = (−30) − (−80)',
          'A hurried student writes Δ<i>U</i> = −30 − 80 = −110 (forgetting work-on-the-gas is positive energy input) or −80 + 30 = −50 (flipping both signs). The sanity check rescues you: squeezing a gas while only a little heat leaks out must raise its internal energy, so Δ<i>U</i> > 0.',
        ],
        ans: 'Δ<i>U</i> = +50 J (internal energy rises)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An ideal gas goes from A to B along two paths. Along path 1 it absorbs 200 J of heat and does 120 J of work. Along path 2 (same endpoints) it does 60 J of work. Find the heat exchanged along path 2, and whether it is absorbed or released.',
        steps: [
          '<b>Solution.</b> This lives entirely on Δ<i>U</i> being a state function. <b>Step 1 — from the fully known path 1:</b><br>Δ<i>U</i><sub><i>A</i>→<i>B</i></sub> = Δ<i>Q</i><sub>1</sub> − Δ<i>W</i><sub>1</sub> = 200 − 120 = +80 J.',
          '<b>Step 2 — reuse on path 2</b> (same endpoints): Δ<i>U</i><sub><i>A</i>→<i>B</i></sub> = +80 J.',
          '<b>Step 3 — solve for heat:</b><br>Δ<i>Q</i><sub>2</sub> = Δ<i>U</i> + Δ<i>W</i><sub>2</sub> = 80 + 60',
          'Both transfers shrank from path 1 to path 2, but their difference stayed pinned at 80 J. That fixed difference is the whole point.',
        ],
        ans: 'Δ<i>Q</i><sub>2</sub> = +140 J, absorbed by the gas',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '2.0 g of a liquid is completely vaporised at constant pressure 1.0 × 10<sup>5</sup> Pa. As liquid it occupies 2.5 cm<sup>3</sup>; as vapour 3100 cm<sup>3</sup>. Latent heat <i>L</i> = 2.0 × 10<sup>6</sup> J kg<sup>−1</sup>. Find (a) the work done, (b) the change in internal energy, (c) the fraction of supplied heat going into internal energy, and its physical meaning.',
        steps: [
          '<b>Solution.</b> <b>Step 1 — heat (latent):</b> Δ<i>Q</i> = <i>mL</i> = (2.0 × 10<sup>−3</sup>)(2.0 × 10<sup>6</sup>) = 4000 J.',
          '<b>Step 2 — work (isobaric):</b><br>Δ<i>V</i> = (3100 − 2.5) cm<sup>3</sup> = 3.0975 × 10<sup>−3</sup> m<sup>3</sup>,<br>Δ<i>W</i> = <i>P</i> Δ<i>V</i> = (1.0 × 10<sup>5</sup>)(3.0975 × 10<sup>−3</sup>)',
          '<b>Step 3 — internal energy:</b> Δ<i>U</i> = Δ<i>Q</i> − Δ<i>W</i> = 4000 − 310',
          '<b>Step 4 — fraction:</b> Δ<i>U</i>/Δ<i>Q</i> = 3690/4000',
          'Only about 8% of the heat pushed back the atmosphere; the 92% went into internal energy — almost all of it potential energy, pulling molecules apart against their mutual attractions (temperature stays constant during boiling). This is exactly why latent heats are large: breaking intermolecular bonds is expensive, mechanical expansion is cheap.',
        ],
        ans: '(a) Δ<i>W</i> ≈ 310 J; (b) Δ<i>U</i> ≈ 3690 J; (c) ≈ 92% into internal energy',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A gas absorbs 600 J of heat and does 250 J of work on its surroundings. Find Δ<i>U</i>.',
            a: '+350 J.',
          },
          {
            q: '[NEET] An ideal gas undergoes isothermal expansion. State, with one-line justification, the value of Δ<i>U</i> and the relationship between Δ<i>Q</i> and Δ<i>W</i>.',
            a: 'Δ<i>U</i> = 0 (ideal-gas <i>U</i> depends only on <i>T</i>, and <i>T</i> is constant), therefore Δ<i>Q</i> = Δ<i>W</i> (all absorbed heat converts to work).',
          },
          {
            q: '[JEE Main] 150 J of heat is supplied to a gas in a rigid, sealed container of fixed volume. Find the work done by the gas and its Δ<i>U</i>.',
            a: 'Δ<i>W</i> = 0 (rigid, isochoric); Δ<i>U</i> = +150 J.',
          },
          {
            q: '[JEE Main] A gas goes from A to B along path I, absorbing 300 J while doing 100 J of work. Taken from A to B by a different path II along which it does 250 J of work, find the heat exchanged along path II.',
            a: 'Δ<i>U</i> = 300 − 100 = 200 J (state function); Δ<i>Q</i><sub>II</sub> = 200 + 250 = +450 J absorbed.',
          },
          {
            q: '[JEE Advanced] An ideal gas first expands adiabatically, doing 220 J of work; it is then compressed isothermally, with 150 J of work done on it by an external agent. Find the total Δ<i>U</i> over the two steps, and whether its final temperature is higher or lower than its initial.',
            a: 'Leg 1 (adiabatic): Δ<i>U</i><sub>1</sub> = −Δ<i>W</i><sub>1</sub> = −220 J. Leg 2 (isothermal): Δ<i>U</i><sub>2</sub> = 0. Total Δ<i>U</i> = −220 J; since Δ<i>U</i> < 0 for an ideal gas means <i>T</i> fell, the final temperature is lower.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A system absorbs 800 J of heat, and its internal energy increases by 500 J. The work done by the system is:',
        opts: [
          { label: '300 J', nudge: null },
          { label: '1300 J', nudge: '<b>(B)</b> adds instead of subtracts.' },
          { label: '−300 J', nudge: '<b>(C)</b> right magnitude, flipped sign.' },
          { label: '500 J', nudge: '<b>(D)</b> internal energy mistaken for work.' },
        ],
        correct: 0,
        solution: 'Δ<i>W</i> = Δ<i>Q</i> − Δ<i>U</i> = 800 − 500 = 300 J, done by the system.',
      },
      {
        t: 'mcq',
        q: 'For a complete cyclic process, which is always true?',
        opts: [
          { label: 'net heat absorbed = net work done', nudge: null },
          {
            label: 'net work = 0',
            nudge: '<b>(B)</b> false — an engine’s whole purpose is non-zero net work (the enclosed <i>P</i>–<i>V</i> area).',
          },
          { label: 'net heat = 0', nudge: '<b>(C)</b> false for the same reason.' },
          {
            label: 'Δ<i>U</i> = <i>W</i><sub>net</sub>',
            nudge: '<b>(D)</b> confuses the result: it is Δ<i>U</i> = 0, not Δ<i>U</i> = <i>W</i><sub>net</sub>.',
          },
        ],
        correct: 0,
        solution: 'Over a cycle Δ<i>U</i><sub>cycle</sub> = 0, so Δ<i>Q</i><sub>net</sub> = Δ<i>W</i><sub>net</sub>.',
      },
      {
        t: 'mcq',
        q: 'The internal energy of a given mass of ideal gas depends only on its:',
        opts: [
          {
            label: 'pressure',
            nudge: '<b>(A)</b>,<b>(B)</b> each only part of the state; at fixed <i>T</i> you change <i>P</i> and <i>V</i> along an isotherm with no change in <i>U</i>.',
          },
          {
            label: 'volume',
            nudge: '<b>(A)</b>,<b>(B)</b> each only part of the state; at fixed <i>T</i> you change <i>P</i> and <i>V</i> along an isotherm with no change in <i>U</i>.',
          },
          { label: 'temperature', nudge: null },
          {
            label: '<i>P</i> and <i>V</i> independently',
            nudge: '<b>(D)</b> (<i>P</i>, <i>V</i>) fixes <i>T</i> via <i>PV</i> = <i>nRT</i> — and <i>U</i> tracks <i>T</i>.',
          },
        ],
        correct: 2,
        solution: '<i>U</i> is the kinetic energy of random molecular motion, a function of <i>T</i> alone: Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> for every process.',
      },
      {
        t: 'mcq',
        q: 'Which can the first law not do?',
        opts: [
          {
            label: 'account for energy conservation',
            nudge: '<b>(A)</b>,<b>(B)</b>,<b>(D)</b> are all things the first law does; choosing any of them means missing the word “not.”',
          },
          {
            label: 'introduce <i>U</i> as a state variable',
            nudge: '<b>(A)</b>,<b>(B)</b>,<b>(D)</b> are all things the first law does; choosing any of them means missing the word “not.”',
          },
          { label: 'predict the direction of spontaneous change', nudge: null },
          {
            label: 'apply to solids, liquids, gases alike',
            nudge: '<b>(A)</b>,<b>(B)</b>,<b>(D)</b> are all things the first law does; choosing any of them means missing the word “not.”',
          },
        ],
        correct: 2,
        solution: 'The first law is direction-blind: it permits heat to flow cold-to-hot just as readily as hot-to-cold, since both conserve energy. Only the second law forbids the unnatural direction.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Sign-convention chaos.</b> The number-one error in this chapter. “Heat released” ⇒ Δ<i>Q</i> < 0; “work done on the gas” ⇒ Δ<i>W</i> < 0. Decide and write every sign before substituting.',
          '<b>Calling internal energy “heat content.”</b> A gas in a state has internal energy; it does not “contain heat.” Heat is energy crossing the boundary, defined only for a process.',
          '<b>Forgetting unit consistency.</b> Δ<i>Q</i>, Δ<i>U</i>, Δ<i>W</i> must share one unit. Convert first: 1 cal = 4.18 J.',
          '<b>Assuming Δ<i>U</i> = 0 when it isn’t.</b> Δ<i>U</i> = 0 only when the temperature of an ideal gas ends where it began — isothermal, a complete cycle, or free expansion. It is not zero for a reversible adiabatic, isobaric, or isochoric change. And don’t assume Δ<i>U</i> = Δ<i>Q</i> unless the process is isochoric.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> For any two-path problem, don’t grind through both — compute Δ<i>U</i> once from the fully-specified path, then reuse it. For cyclic problems jump straight to Δ<i>Q</i><sub>net</sub> = Δ<i>W</i><sub>net</sub> and read net work as the enclosed loop area. And always run the physical check: compress a gas adiabatically ⇒ Δ<i>U</i> rises; let it expand adiabatically ⇒ it cools. If a sign disagrees with intuition, you have an error, not a discovery.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Master equation',
            note: 'Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i> (board/JEE convention: Δ<i>W</i> = work by gas, Δ<i>Q</i> = heat absorbed).',
          },
          { f: 'It is conservation of energy plus it defines internal energy <i>U</i> as a state function.', note: '' },
          {
            f: 'State function',
            note: '<i>U</i> (path-independent, ∮ d<i>U</i> = 0). Path functions: <i>Q</i>, <i>W</i>.',
          },
          { f: 'Work by gas', note: 'Δ<i>W</i> = ∫ <i>P</i> d<i>V</i> = area under the <i>P</i>–<i>V</i> curve.' },
          { f: 'Ideal gas', note: 'Δ<i>U</i> = <i>nC</i><sub><i>V</i></sub>Δ<i>T</i> for every process (<i>U</i> depends only on <i>T</i>).' },
          {
            f: 'Four shortcuts',
            note: 'isochoric → Δ<i>Q</i> = Δ<i>U</i>; isobaric → Δ<i>Q</i> = Δ<i>U</i> + <i>P</i>Δ<i>V</i>; isothermal → Δ<i>Q</i> = Δ<i>W</i> (Δ<i>U</i> = 0); adiabatic → Δ<i>U</i> = −Δ<i>W</i> (Δ<i>Q</i> = 0).',
          },
          { f: 'Over a cycle', note: 'Δ<i>U</i> = 0 ⇒ <i>Q</i><sub>net</sub> = <i>W</i><sub>net</sub>.' },
          {
            f: 'Limitation',
            note: 'says nothing about direction or the maximum heat→work conversion (that’s the second law).',
          },
        ],
        aids: [
          '“Income = Savings + Spending” → Δ<i>Q</i> = Δ<i>U</i> + Δ<i>W</i>.',
          '“<i>U</i> is a place you’re at; <i>Q</i> and <i>W</i> are roads you took.”',
          '“Signs before sums.”',
          '“<i>V</i> fixed kills <i>W</i>; <i>T</i> fixed kills Δ<i>U</i>; <i>Q</i> = 0 is adiabatic.”',
        ],
      },
    ],
  },
];
