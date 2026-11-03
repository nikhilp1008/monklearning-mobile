import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 07: pp. 206–218 of the Class 12 Physics Master Reference,
 * word for word: Kirchhoff’s Laws & Electrical Networks, split at its
 * Sections 1 to 8. Figure 3.16 (referred to p. 207, drawn p. 208), Figure 3.17
 * (referred to p. 210, drawn p. 211) and Figure 3.18 (referred to p. 212, drawn
 * p. 213, inside worked example 1) are redrawn in lib/diagrams/physics-12-03.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 07 · pp. 206–218 ─────────────────────────
  {
    n: '07',
    title: 'Kirchhoff’s Laws & Electrical Networks',
    kalam: 'Series and parallel rules are wonderful — until the circuit refuses to be either.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is one of the most heavily examined topics in the whole chapter. CBSE Boards ask for the statements of both rules with their underlying conservation principles (2 marks) and the full Wheatstone bridge balance derivation (3 marks) almost every year. JEE Main reliably sets one multi-loop network numerical; JEE Advanced builds unbalanced-bridge and symmetry problems. NEET favours quick balanced-bridge recognition and junction-rule conceptuals.',
      },
      {
        t: 'p',
        html: 'Series and parallel rules are wonderful — until the circuit refuses to be either. The moment you meet a circuit with two batteries pushing against each other, or a bridge where no two resistors are cleanly “in series” or “in parallel,” the simple <i>R</i><sub>eq</sub> tricks collapse. You need a more powerful, completely general toolkit. That toolkit is <b>Kirchhoff’s two rules</b>, and the beautiful thing is that both are just two everyday conservation laws wearing circuit clothing.',
      },
      {
        t: 'p',
        html: '<b>The Junction Rule (first law).</b> Picture a busy Mumbai local pulling into Dadar. The number of passengers stepping onto the platform from all the doors must equal the number stepping off into the train and the exits — nobody evaporates, nobody materialises. A wire junction is exactly this: it is just a meeting point of wires, not a storage tank. In the steady state, charge cannot pile up there (it’s not a capacitor). So whatever charge per second flows in must flow out:<br>∑ <i>I</i><sub>in</sub> = ∑ <i>I</i><sub>out</sub>.<br>This is nothing more than <b>conservation of charge</b>. If three wires bring in 5 A, 3 A, and 2 A, the wires leaving must carry 10 A in total — split however the resistances dictate.',
      },
      {
        t: 'p',
        html: '<b>The Loop Rule (second law).</b> Now imagine going for a walk on the hilly trails around Lonavala. You set off, climb some ridges, descend into some valleys, wander around — and eventually return to exactly the spot you started. No matter how complicated your path, your net change in altitude is <b>zero</b>, because you’re back where you began. Electric potential behaves precisely like altitude: it has a definite value at every point. So if you trace any closed loop in a circuit and add up every rise and drop in potential, the total must come back to zero:<br>∑ Δ<i>V</i> = 0   ⟺   ∑ <i>E</i> = ∑ <i>IR</i>  (around the loop).<br>This is <b>conservation of energy</b> — each coulomb of charge gains exactly as much energy from the cells as it loses in the resistors over one full lap.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Treat the whole circuit as a contour map. Cells are escalators that lift charge to a higher potential; resistors are slopes down which charge slides, dissipating energy as heat. The junction rule says traffic is conserved at every crossroad; the loop rule says every round trip returns to the same altitude. With just these two, you can crack any network, however tangled.',
      },
      { t: 'fig', id: 'p12-03-fig-3.16' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The junction rule (∑ <i>I</i> = 0) rests on no charge accumulating at a junction — true in the <b>steady state</b>, and at every instant at a junction, which cannot store charge. During the transient charging of a capacitor, charge does build up on the plates (not at a junction), and you must treat the capacitor branch with care (in steady state, no DC current flows through a fully charged capacitor). The loop rule in the form ∑ <i>E</i> = ∑ <i>IR</i> assumes the only potential changes come from cells and resistors; for AC or transient circuits you must add capacitor (<i>q</i>/<i>C</i>) and inductor (<i>L</i> d<i>I</i>/d<i>t</i>) terms. Finally, both rules need <b>consistent sign bookkeeping</b> — get the signs right and the algebra does the rest.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Kirchhoff’s Junction Rule (KCL)',
        main: '∑<sub>junction</sub> <i>I</i> = 0<br>i.e. ∑ <i>I</i><sub>in</sub> = ∑ <i>I</i><sub>out</sub>',
        legend: [],
        note: 'Based on <b>conservation of charge</b> (no accumulation at a node in steady state).',
      },
      {
        t: 'formula',
        kicker: 'Kirchhoff’s Loop Rule (KVL)',
        main: '∑<sub>closed loop</sub> Δ<i>V</i> = 0<br>i.e. ∑ <i>E</i> = ∑ <i>IR</i>',
        legend: [],
        note: 'Based on <b>conservation of energy</b> (electric potential is single-valued).',
      },
      {
        t: 'p',
        html: '<b>Sign conventions for the loop rule</b> (pick a traversal direction, then):',
      },
      {
        t: 'table',
        title: null,
        head: ['Element', 'Direction of traversal', 'Sign of term'],
        rows: [
          ['Resistor <i>R</i>', 'along assumed current', '−<i>IR</i> (potential drops)'],
          ['Resistor <i>R</i>', 'against assumed current', '+<i>IR</i> (potential rises)'],
          ['emf source <i>E</i>', 'from − to + terminal', '+<i>E</i>'],
          ['emf source <i>E</i>', 'from + to − terminal', '−<i>E</i>'],
        ],
      },
      {
        t: 'p',
        html: '(The emf sign depends only on the terminals you cross, <b>not</b> on the current direction.)',
      },
      {
        t: 'p',
        html: '<b>How many equations do you need?</b> For a network with <i>b</i> branches and <i>n</i> nodes (junctions):<br>• Independent junction equations: <i>n</i> − 1<br>• Independent loop equations: <i>b</i> − <i>n</i> + 1<br>• Total independent equations = <i>b</i>, exactly matching the <i>b</i> unknown branch currents.',
      },
      {
        t: 'formula',
        kicker: 'Wheatstone bridge balance condition',
        main: '<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> ⟺ <i>PS</i> = <i>QR</i>',
        legend: [],
        note: 'At balance the galvanometer current <i>I</i><sub>g</sub> = 0 and points B, D are at equal potential.',
      },
      {
        t: 'p',
        html: '<b>Quantities:</b> current <i>I</i> — unit A, dimension [A]; potential difference / emf <i>V</i>, <i>E</i> — unit V, dimension [M<sup>1</sup>L<sup>2</sup>T<sup>−3</sup>A<sup>−1</sup>]; resistance <i>R</i> — unit Ω, dimension [M<sup>1</sup>L<sup>2</sup>T<sup>−3</sup>A<sup>−2</sup>].',
      },

      { t: 'part', title: 'Derivations' },
      { t: 'p', html: '<b>3.1 Proof of the Junction Rule</b>' },
      {
        t: 'p',
        html: 'Consider any junction where several wires meet, in the steady state. Charge is conserved and cannot accumulate at a point (a junction has no capacity to store it). In a small time d<i>t</i>, let charge d<i>q</i><sub>in</sub> flow in and d<i>q</i><sub>out</sub> flow out. Conservation demands d<i>q</i><sub>in</sub> = d<i>q</i><sub>out</sub>. Dividing by d<i>t</i>,<br>d<i>q</i><sub>in</sub>/d<i>t</i> = d<i>q</i><sub>out</sub>/d<i>t</i>   ⟹   ∑ <i>I</i><sub>in</sub> = ∑ <i>I</i><sub>out</sub>,<br>which, taking currents toward the junction as positive and away as negative, is ∑ <i>I</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>Why this step matters:</b> it is the steady-state assumption (no pile-up) that turns a charge statement into a current statement.',
      },
      { t: 'p', html: '<b>3.2 Proof of the Loop Rule</b>' },
      {
        t: 'p',
        html: 'The electrostatic field inside the circuit is <b>conservative</b>, so electric potential <i>V</i> has a unique value at each point. Start at any point in a closed loop, traverse the entire loop adding the potential change across each element, and return to the start. Since you arrive back at the same point with the same potential, the net change must vanish:<br>∑<sub>loop</sub> Δ<i>V</i> = 0.<br>Splitting the changes into energy gained from sources (+<i>E</i>) and energy lost across resistors (<i>IR</i>), this reads ∑ <i>E</i> = ∑ <i>IR</i>. Physically: each coulomb is handed exactly as much energy by the cells as it surrenders to the resistors per lap — energy conservation.',
      },
      { t: 'p', html: '<b>3.3 Wheatstone Bridge — Balance Condition</b>' },
      {
        t: 'p',
        html: 'A Wheatstone bridge is four resistances <i>P</i>, <i>Q</i>, <i>R</i>, <i>S</i> arranged in a diamond. A cell drives current across one diagonal (A–C); a sensitive galvanometer <i>G</i> bridges the other diagonal (B–D).',
      },
      { t: 'fig', id: 'p12-03-fig-3.17' },
      {
        t: 'p',
        html: 'The bridge is “balanced” when the galvanometer shows <b>zero deflection</b>, i.e. <i>I</i><sub>g</sub> = 0. We find the condition on the resistances for this to happen.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — currents at balance.</b> With <i>I</i><sub>g</sub> = 0, no current diverts at B into the galvanometer, so the same current <i>I</i><sub>1</sub> flows through <i>P</i> (arm AB) and <i>Q</i> (arm BC). Likewise the same current <i>I</i><sub>2</sub> flows through <i>R</i> (arm AD) and <i>S</i> (arm DC).',
      },
      {
        t: 'p',
        html: '<b>Step 2 — loop ABDA.</b> Traverse A→B→D→A. Across <i>P</i> (along <i>I</i><sub>1</sub>): −<i>I</i><sub>1</sub><i>P</i>. Across <i>G</i> (along <i>I</i><sub>g</sub>): −<i>I</i><sub>g</sub><i>G</i>. Across <i>R</i> (against <i>I</i><sub>2</sub>, since <i>I</i><sub>2</sub> runs A→D): +<i>I</i><sub>2</sub><i>R</i>. Loop rule:<br>−<i>I</i><sub>1</sub><i>P</i> − <i>I</i><sub>g</sub><i>G</i> + <i>I</i><sub>2</sub><i>R</i> = 0.<br>At balance <i>I</i><sub>g</sub> = 0:<br><i>I</i><sub>1</sub><i>P</i> = <i>I</i><sub>2</sub><i>R</i>.   (1)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — loop BCDB.</b> Traverse B→C→D→B. Across <i>Q</i> (along <i>I</i><sub>1</sub>): −<i>I</i><sub>1</sub><i>Q</i>. Across <i>S</i> (against <i>I</i><sub>2</sub>, since <i>I</i><sub>2</sub> runs D→C): +<i>I</i><sub>2</sub><i>S</i>. Across <i>G</i> (against <i>I</i><sub>g</sub>): +<i>I</i><sub>g</sub><i>G</i>. Loop rule:<br>−<i>I</i><sub>1</sub><i>Q</i> + <i>I</i><sub>2</sub><i>S</i> + <i>I</i><sub>g</sub><i>G</i> = 0.<br>At balance <i>I</i><sub>g</sub> = 0:<br><i>I</i><sub>1</sub><i>Q</i> = <i>I</i><sub>2</sub><i>S</i>.   (2)',
      },
      {
        t: 'p',
        html: '<b>Step 4 — divide.</b> Dividing equation (1) by equation (2), the unknown currents cancel:<br><i>I</i><sub>1</sub><i>P</i>/(<i>I</i><sub>1</sub><i>Q</i>) = <i>I</i><sub>2</sub><i>R</i>/(<i>I</i><sub>2</sub><i>S</i>)   ⟹   <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>.',
      },
      {
        t: 'p',
        html: '<b>The deep point:</b> the balance condition contains <b>only the four resistances</b> — the battery emf and the galvanometer resistance have dropped out entirely. This is why the bridge is a null method: it compares resistances without needing to know the source voltage, making it far more accurate than reading a meter on a deflecting scale.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two cells drive current through a shared resistor. The left branch has emf <i>E</i><sub>1</sub> = 8 V in series with 2 Ω; the right branch has <i>E</i><sub>2</sub> = 4 V in series with 2 Ω; a 4 Ω resistor bridges the two nodes A (top) and B (bottom). Find the current in each branch.',
        fig: 'p12-03-fig-3.18',
        steps: [
          '<b>Assign currents.</b> Let <i>I</i><sub>1</sub> rise through the left branch and <i>I</i><sub>2</sub> through the right branch; by the junction rule the middle resistor carries <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> (downward).',
          '<b>Loop rule, left loop</b> (left branch + middle resistor):<br><i>E</i><sub>1</sub> = <i>I</i><sub>1</sub>(2) + (<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>)(4) ⇒ 8 = 6<i>I</i><sub>1</sub> + 4<i>I</i><sub>2</sub>.   (1)',
          '<b>Loop rule, right loop</b> (right branch + middle resistor):<br><i>E</i><sub>2</sub> = <i>I</i><sub>2</sub>(2) + (<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>)(4) ⇒ 4 = 4<i>I</i><sub>1</sub> + 6<i>I</i><sub>2</sub>.   (2)',
          '<b>Solve.</b> Multiply (1) by 3 and (2) by 2:<br>18<i>I</i><sub>1</sub> + 12<i>I</i><sub>2</sub> = 24,   8<i>I</i><sub>1</sub> + 12<i>I</i><sub>2</sub> = 8.<br>Subtracting: 10<i>I</i><sub>1</sub> = 16 ⇒ <i>I</i><sub>1</sub> = 1.6 A. From (2): 4(1.6) + 6<i>I</i><sub>2</sub> = 4',
        ],
        ans: '<i>I</i><sub>1</sub> = 1.6 A, <i>I</i><sub>2</sub> = −0.4 A (the <b>minus sign means the real direction is opposite</b> to what we assumed — the 4 V cell is actually being charged by the stronger 8 V cell). Current through the 4 Ω resistor = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> = 1.2 A.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'In the bridge of Figure 3.17, <i>P</i> = 10 Ω, <i>Q</i> = 20 Ω, <i>R</i> = 15 Ω, <i>S</i> = 30 Ω, with a galvanometer across the bridge diagonal and a 6 V battery across the supply diagonal. Find the <b>equivalent resistance</b> of the network.',
        steps: [
          '<b>The trap:</b> Students dive into Kirchhoff with five resistors and three unknown currents — minutes of algebra — or they wrongly include the galvanometer arm in a series/parallel reduction.',
          '<b>The fast move — always check balance first:</b><br><i>P</i>/<i>Q</i> = 10/20 = 1/2,   <i>R</i>/<i>S</i> = 15/30 = 1/2.<br>They’re equal, so the bridge is <b>balanced</b> ⇒ <i>I</i><sub>g</sub> = 0. The galvanometer branch carries no current and can be <b>erased</b> from the circuit. What remains is simply (<i>P</i> + <i>Q</i>) in series and (<i>R</i> + <i>S</i>) in series, the two in parallel:<br><i>P</i> + <i>Q</i> = 30 Ω,   <i>R</i> + <i>S</i> = 45 Ω,   <i>R</i><sub>eq</sub> = (30 × 45)/(30 + 45) = 1350/75',
          'The 6 V value is a red herring — equivalent resistance never depends on it.',
          '<b>Shortcut to remember:</b> Check <i>P</i>/<i>Q</i> vs <i>R</i>/<i>S</i> before touching anything. If equal, delete the bridge arm and you’re done in ten seconds.',
        ],
        ans: '<i>R</i><sub>eq</sub> = 18 Ω',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Kirchhoff + power balance',
        q: 'Battery <i>E</i><sub>1</sub> = 8 V (series 1 Ω) and battery <i>E</i><sub>2</sub> = 7 V (series 1 Ω), both with their positive terminals toward node A, drive current through a common 2 Ω resistor between nodes A and B. (a) Find all three branch currents. (b) Verify conservation of energy by checking that the power delivered by the sources equals the power dissipated.',
        steps: [
          '<b>(a) Set up loops</b> (currents <i>I</i><sub>1</sub>, <i>I</i><sub>2</sub> rising in the two cell branches; middle resistor carries <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>):<br>8 = <i>I</i><sub>1</sub>(1) + (<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>)(2) = 3<i>I</i><sub>1</sub> + 2<i>I</i><sub>2</sub>,   (1)<br>7 = <i>I</i><sub>2</sub>(1) + (<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>)(2) = 2<i>I</i><sub>1</sub> + 3<i>I</i><sub>2</sub>.   (2)',
          'Adding and subtracting these clean equations gives <i>I</i><sub>1</sub> = 2 A, <i>I</i><sub>2</sub> = 1 A, and middle current <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> = 3 A.',
          '<b>(b) Power balance.</b><br>• Delivered by sources: <i>P</i><sub>in</sub> = <i>E</i><sub>1</sub><i>I</i><sub>1</sub> + <i>E</i><sub>2</sub><i>I</i><sub>2</sub> = (8)(2) + (7)(1) = 16 + 7 = 23 W.<br>• Dissipated in resistors: <i>I</i><sub>1</sub><sup>2</sup>(1) + <i>I</i><sub>2</sub><sup>2</sup>(1) + (<i>I</i><sub>1</sub> + <i>I</i><sub>2</sub>)<sup>2</sup>(2) = (4)(1) + (1)(1) + (9)(2) = 4 + 1 + 18 = 23 W.',
          'The perfect match is no accident — it is Kirchhoff’s loop rule (energy conservation) showing up as a number, and it’s a powerful self-check on your solved currents.',
        ],
        ans: '<i>P</i><sub>in</sub> = <i>P</i><sub>dissipated</sub> = 23 W. ✓',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: unbalanced bridge',
        q: 'Five resistors form a bridge between A and C: arm <i>AB</i> = <i>R</i>, <i>BC</i> = 2<i>R</i>, <i>AD</i> = 2<i>R</i>, <i>DC</i> = <i>R</i>, and bridge arm <i>BD</i> = <i>R</i>. Since <i>P</i>/<i>Q</i> = AB/BC = <i>R</i>/(2<i>R</i>) = ½ but AD/DC = 2<i>R</i>/<i>R</i> = 2, the bridge is <b>unbalanced</b> and the bridge arm carries current. Find the equivalent resistance between A and C.',
        steps: [
          '<b>Assign currents.</b> Let total current <i>I</i> enter at A. At A it splits: <i>i</i><sub>1</sub> into AB, <i>i</i><sub>2</sub> into AD (<i>i</i><sub>1</sub> + <i>i</i><sub>2</sub> = <i>I</i>). Let <i>i</i><sub>g</sub> flow B→D through the bridge. Then BC carries <i>i</i><sub>1</sub> − <i>i</i><sub>g</sub> and DC carries <i>i</i><sub>2</sub> + <i>i</i><sub>g</sub> (junction rule at B and D). At C these recombine to <i>I</i>. ✓',
          '<b>Loop ABDA</b> (A→B→D→A): −<i>i</i><sub>1</sub><i>R</i> − <i>i</i><sub>g</sub><i>R</i> + <i>i</i><sub>2</sub>(2<i>R</i>) = 0 ⇒ 2<i>i</i><sub>2</sub> − <i>i</i><sub>1</sub> − <i>i</i><sub>g</sub> = 0, so<br><i>i</i><sub>g</sub> = 2<i>i</i><sub>2</sub> − <i>i</i><sub>1</sub>.   (I)',
          '<b>Loop BCDB</b> (B→C→D→B):<br>−(<i>i</i><sub>1</sub> − <i>i</i><sub>g</sub>)(2<i>R</i>) + (<i>i</i><sub>2</sub> + <i>i</i><sub>g</sub>)(<i>R</i>) + <i>i</i><sub>g</sub><i>R</i> = 0 ⇒ −2<i>i</i><sub>1</sub> + <i>i</i><sub>2</sub> + 4<i>i</i><sub>g</sub> = 0.   (II)',
          '<b>Solve.</b> Substitute (I) into (II): −2<i>i</i><sub>1</sub> + <i>i</i><sub>2</sub> + 4(2<i>i</i><sub>2</sub> − <i>i</i><sub>1</sub>) = 0 ⇒ −6<i>i</i><sub>1</sub> + 9<i>i</i><sub>2</sub> = 0 ⇒ <i>i</i><sub>2</sub> = (2/3)<i>i</i><sub>1</sub>. Then <i>i</i><sub>g</sub> = 2((2/3)<i>i</i><sub>1</sub>) − <i>i</i><sub>1</sub> = (1/3)<i>i</i><sub>1</sub>.',
          'Total current: <i>I</i> = <i>i</i><sub>1</sub> + <i>i</i><sub>2</sub> = <i>i</i><sub>1</sub> + (2/3)<i>i</i><sub>1</sub> = (5/3)<i>i</i><sub>1</sub>.',
          '<b>Find</b> <i>V</i><sub>AC</sub> along path A→B→C: <i>V</i><sub>AC</sub> = <i>i</i><sub>1</sub><i>R</i> + (<i>i</i><sub>1</sub> − <i>i</i><sub>g</sub>)(2<i>R</i>) = <i>i</i><sub>1</sub><i>R</i> + 2<i>R</i>(<i>i</i><sub>1</sub> − (1/3)<i>i</i><sub>1</sub>) = <i>i</i><sub>1</sub><i>R</i> + (4/3)<i>i</i><sub>1</sub><i>R</i> = (7/3)<i>i</i><sub>1</sub><i>R</i>.',
          '<b>Equivalent resistance:</b><br><i>R</i><sub>eq</sub> = <i>V</i><sub>AC</sub>/<i>I</i> = ((7/3)<i>i</i><sub>1</sub><i>R</i>)/((5/3)<i>i</i><sub>1</sub>)',
          '<b>Check</b> via path A→D→C: <i>V</i><sub>AC</sub> = <i>i</i><sub>2</sub>(2<i>R</i>) + (<i>i</i><sub>2</sub> + <i>i</i><sub>g</sub>)(<i>R</i>) = (4/3)<i>i</i><sub>1</sub><i>R</i> + ((2/3)<i>i</i><sub>1</sub> + (1/3)<i>i</i><sub>1</sub>)<i>R</i> = (4/3)<i>i</i><sub>1</sub><i>R</i> + <i>i</i><sub>1</sub><i>R</i> = (7/3)<i>i</i><sub>1</sub><i>R</i> — identical, as the loop rule guarantees. The current splits unequally precisely because the bridge is unbalanced.',
        ],
        ans: '<i>R</i><sub>eq</sub> = (7/5)<i>R</i> = 1.4<i>R</i>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In a balanced Wheatstone bridge, <i>P</i> = 4 Ω, <i>Q</i> = 8 Ω and <i>R</i> = 6 Ω. Find the value of <i>S</i> that produces balance.',
            a: '<i>S</i> = 12 Ω',
          },
          {
            q: '[NEET] A bridge has arms <i>P</i> = 5 Ω, <i>Q</i> = 10 Ω, <i>R</i> = 8 Ω, <i>S</i> = 16 Ω, with a galvanometer across the bridge diagonal and a 6 V cell across the supply diagonal. What current flows through the galvanometer?',
            a: '<i>I</i><sub>g</sub> = 0 (balanced, since 5/10 = 8/16)',
          },
          {
            q: '[JEE Main] Battery <i>E</i><sub>1</sub> = 5 V (series 2 Ω) and battery <i>E</i><sub>2</sub> = 7 V (series 2 Ω), both with their positive terminals toward node A, drive current through a common 1 Ω resistor connecting nodes A and B. Find the current through the 1 Ω resistor.',
            a: '3 A (branch currents 1 A and 2 A)',
          },
          {
            q: '[JEE Main] Two cells of emf 9 V and 3 V, with internal resistances 1 Ω and 2 Ω, are connected in opposition in a single loop together with an external 3 Ω resistor. Find the loop current and the terminal voltage of the 9 V cell.',
            a: '<i>I</i> = 1 A, terminal voltage of 9 V cell = 8 V',
          },
          {
            q: '[JEE Advanced] An unbalanced bridge between A and C has arms <i>AB</i> = <i>R</i>, <i>BC</i> = 2<i>R</i>, <i>AD</i> = <i>R</i>, <i>DC</i> = <i>R</i> and bridge arm <i>BD</i> = <i>R</i>. Find the equivalent resistance between A and C.',
            a: '<i>R</i><sub>eq</sub> = (13/11)<i>R</i> ≈ 1.18<i>R</i>',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Kirchhoff’s junction rule is a direct consequence of the conservation of:',
        opts: [
          { label: 'energy', nudge: '<b>(A)</b> is the basis of the loop rule, not the junction rule; this is the single most common swap.' },
          { label: 'charge', nudge: null },
          { label: 'momentum', nudge: '<b>(C)</b> momentum has no role here.' },
          {
            label: 'potential',
            nudge: '<b>(D)</b> “potential” is not a conserved quantity at all — it is the loop rule that uses the single-valuedness of potential, which is a different statement.',
          },
        ],
        correct: 1,
        solution: 'The junction rule says charge entering a node equals charge leaving — conservation of charge in the steady state.',
      },
      {
        t: 'mcq',
        q: 'While applying the loop rule, you traverse a resistor <b>in the same direction as the assumed current</b>. The corresponding term in the equation is:',
        opts: [
          {
            label: '+<i>IR</i>',
            nudge: '<b>(A)</b> +<i>IR</i> applies when you traverse against the current; choosing it is the classic sign-flip error.',
          },
          { label: '−<i>IR</i>', nudge: null },
          { label: '+<i>E</i>', nudge: '<b>(C)</b> +<i>E</i> is an emf term, irrelevant to a resistor.' },
          { label: 'zero', nudge: '<b>(D)</b> the drop is non-zero whenever current flows.' },
        ],
        correct: 1,
        solution: 'Moving along the current means moving from higher to lower potential across the resistor — a <b>drop</b>, written −<i>IR</i>.',
      },
      {
        t: 'mcq',
        q: 'A Wheatstone bridge with arms <i>P</i>, <i>Q</i>, <i>R</i>, <i>S</i> (galvanometer across the bridge diagonal) shows <b>zero deflection</b>. Which relation must hold?',
        opts: [
          {
            label: '<i>PQ</i> = <i>RS</i>',
            nudge: '<b>(A)</b> and <b>(D)</b> are wrong pairings of products — easy traps because they “look symmetric.”',
          },
          {
            label: '<i>P</i> + <i>Q</i> = <i>R</i> + <i>S</i>',
            nudge: '<b>(B)</b> sums the arms, which has no physical meaning for balance.',
          },
          { label: '<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>', nudge: null },
          {
            label: '<i>PR</i> = <i>QS</i>',
            nudge: '<b>(A)</b> and <b>(D)</b> are wrong pairings of products — easy traps because they “look symmetric.”',
          },
        ],
        correct: 2,
        solution: 'Zero deflection is the balance condition <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> (equivalently <i>PS</i> = <i>QR</i>). Tip: the balance condition equates the ratios in the two parallel paths, not sums or arbitrary products.',
      },
      {
        t: 'mcq',
        q: 'A bridge has <i>P</i> = 2 Ω, <i>Q</i> = 4 Ω, <i>R</i> = 3 Ω, <i>S</i> = 6 Ω, and a galvanometer of 5 Ω across the bridge diagonal. The equivalent resistance between the supply terminals is:',
        opts: [
          { label: '3.6 Ω', nudge: null },
          {
            label: '2.5 Ω',
            nudge: '<b>(B)</b> and <b>(C)</b> do not follow from any correct reduction: at balance the 5 Ω arm carries no current, so any method in which it changes the answer has gone wrong.',
          },
          {
            label: '5.6 Ω',
            nudge: '<b>(B)</b> and <b>(C)</b> do not follow from any correct reduction: at balance the 5 Ω arm carries no current, so any method in which it changes the answer has gone wrong.',
          },
          { label: '15 Ω', nudge: '<b>(D)</b> 15 Ω wrongly adds the two paths in series.' },
        ],
        correct: 0,
        solution: 'Check balance: <i>P</i>/<i>Q</i> = 2/4 = 1/2 = 3/6 = <i>R</i>/<i>S</i> — <b>balanced</b>, so the 5 Ω galvanometer arm carries no current and is removed. Then (<i>P</i> + <i>Q</i>) = 6 Ω in parallel with (<i>R</i> + <i>S</i>) = 9 Ω: <i>R</i><sub>eq</sub> = (6 × 9)/(6 + 9) = 54/15 = 3.6 Ω.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Sign chaos in the loop rule — the #1 error.</b> Mixing up +<i>IR</i> and −<i>IR</i>, or attaching the emf sign to the current direction. Remember: resistor sign depends on whether you move with or against the current; emf sign depends only on which terminal you enter first (− to + is +<i>E</i>).',
          '<b>Panicking over a negative current.</b> A negative answer is not a mistake — it simply means your assumed direction was backwards. Keep the magnitude, flip the arrow, move on. Never re-solve.',
          '<b>Brute-forcing a balanced bridge.</b> Launching into five-resistor Kirchhoff when a two-second check of whether <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> would have collapsed the problem. Always test balance first.',
          '<b>Wrong number of equations.</b> Using a loop that is not independent (its equation is just a combination of others) gives you a useless redundant line, or you write too few. <b>Pro-tip:</b> independent loops = <i>b</i> − <i>n</i> + 1 (branches minus nodes plus one). Count them before you start so you know exactly how many loop equations to write.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> Before declaring victory, run the <b>power check</b> from worked example 3 — total power from sources must equal total <i>I</i><sup>2</sup><i>R</i> dissipated. If they don’t match, a sign or arithmetic slip is hiding in your current values.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Junction rule (KCL)', note: '∑ <i>I</i> = 0 at a node — conservation of charge.' },
          { f: 'Loop rule (KVL)', note: '∑ Δ<i>V</i> = 0, i.e. ∑ <i>E</i> = ∑ <i>IR</i> — conservation of energy.' },
          {
            f: 'Resistor sign',
            note: '−<i>IR</i> along the current, +<i>IR</i> against it. <b>emf sign:</b> +<i>E</i> entering − → +, −<i>E</i> entering + → −.',
          },
          {
            f: 'Equation count',
            note: '(<i>n</i> − 1) junction + (<i>b</i> − <i>n</i> + 1) loop = <i>b</i> equations for <i>b</i> branch currents.',
          },
          {
            f: 'Wheatstone balance',
            note: '<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> (i.e. <i>PS</i> = <i>QR</i>) ⇒ <i>I</i><sub>g</sub> = 0; then delete the bridge arm and reduce.',
          },
          { f: 'A <b>negative current</b> just means the real direction is opposite to the assumed one.', note: '' },
        ],
        aids: [
          '“Junction = no pile-up” (charge in = charge out).',
          '“Loop = back home, zero net climb” (energy / altitude).',
          '“Balanced bridge: cross-products equal — <i>PS</i> = <i>QR</i>” — and then the galvanometer arm vanishes.',
          'Always check <i>P</i>/<i>Q</i> vs <i>R</i>/<i>S</i> before doing any bridge algebra.',
        ],
      },
    ],
  },
];
