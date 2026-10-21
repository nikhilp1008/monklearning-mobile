import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topics 03 to 05, pp. 834–857 of the Class 11 Physics Master
 * Reference, word for word: Kinetic Theory and Gas Pressure (book Sub-topic 2,
 * pp. 834 to 841), RMS Speed and Maxwell Distribution (Sub-topic 3, pp. 842 to
 * 849) and Degrees of Freedom and Mean Free Path (Sub-topic 4, pp. 850 to 857),
 * each split at the book's Sections 1 to 8. The book numbers its sub-topics
 * from 0, so its "Sub-topic N" is the app's Topic 0(N+1). The chapter's
 * drawings carry no figure numbers: p11-12-03-d1 (p. 836), p11-12-03-d2
 * (p. 839, inside worked example 4), p11-12-04-d1 (p. 849) and p11-12-05-d1
 * (p. 857). The Chapter Summary & Master Formula Sheet (pp. 858–861) is not
 * copied.
 */
export const TOPICS: Topic[] = [
  {
    n: '03',
    title: 'Kinetic Theory and Gas Pressure',
    kalam: 'Pressure is nothing more than the relentless drumbeat of molecules colliding with the container walls and rebounding.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The derivation of gas pressure is a CBSE Board favourite — a full 3–5 mark derivation appears regularly, so the step-by-step logic must be airtight. JEE Main leans on the results <i>P</i> = ⅓<i>ρv</i><sub>rms</sub><sup>2</sup> and <i>PV</i> = ⅔<i>E</i> in numericals, and NEET tests the proportionalities. JEE Advanced probes the assumptions — when the pressure expression breaks (anisotropy, non-collisional forces) — far more than the algebra.',
      },
      {
        t: 'p',
        html: 'In Topic 02 we asserted that gases obey <i>PV</i> = <i>nRT</i>. But where does that law come from? Why should pressure exist at all? Kinetic theory answers this by zooming all the way down to the molecules and asking: if a gas is nothing but a swarm of tiny particles in ceaseless random motion, what must we observe at the macroscopic scale? The triumph of the theory is that pressure, temperature, and the gas laws all fall out of Newton’s laws applied to a crowd of bouncing molecules.',
      },
      {
        t: 'p',
        html: 'This is a genuinely big idea, and it took the nineteenth-century work of Clausius, Maxwell and Boltzmann to put it on a firm footing. What makes kinetic theory so celebrated is its reach from a single set of assumptions, it not only reproduces the gas laws and Avogadro’s hypothesis, but also explains the specific heat capacities of gases and links measurable bulk properties — viscosity, thermal conduction, diffusion — back to molecular sizes and masses. A handful of postulates about colliding particles end up explaining an enormous swathe of observed behaviour. Crucially, the theory works for a gas because gas molecules are far apart: at ordinary pressure and temperature the average separation between molecules is roughly ten times their own size, so for most of their lives the molecules fly freely and ignore one another, interacting only in brief collisions. That is exactly the regime in which the idealisation below is accurate.',
      },
      {
        t: 'p',
        html: 'Picture a cricket ball machine at a practice net, firing balls at the back netting. Each ball that strikes the net pushes it outward a little and bounces back. A single ball gives a tiny, jerky shove. But fire thousands of balls per second from every angle and the net feels a steady, smooth, outward push — a pressure. A gas does exactly this. <b>Pressure is nothing more than the relentless drumbeat of molecules colliding with the container walls and rebounding.</b> No collisions, no pressure. The walls do not feel individual molecular hits any more than your skin feels individual air molecules; what you feel is the time-averaged force from an astronomical number of impacts.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the wall of a balloon is being machine-gunned from the inside by roughly 10<sup>27</sup> molecules every second. Each impact is microscopic and random, but their sheer number averages out into the constant, uniform pressure that keeps the balloon inflated. Stretch this picture and you can already feel the answers to exam questions: heat the gas and the molecules move faster, hit harder and more often, so pressure rises; squeeze the gas into half the volume and the same molecules strike the walls twice as often, so pressure doubles.',
      },
      {
        t: 'p',
        html: 'To turn this picture into equations, kinetic theory adopts a clean set of <b>postulates</b> — the rules of the idealised game:<br>1. A gas consists of a very large number of identical molecules, in constant, random motion in all directions.<br>2. The size of a molecule is negligible compared with the average separation between molecules and with the size of the container — molecules are effectively point masses.<br>3. Molecules obey Newton’s laws of motion. Between collisions they travel in straight lines at constant velocity, exerting no force on one another (no long-range intermolecular forces).<br>4. All collisions — molecule with molecule, and molecule with wall — are perfectly elastic, conserving kinetic energy and momentum. Collisions are instantaneous (negligible duration).<br>5. The motion is <b>isotropic</b>: molecules are equally likely to be moving in any direction, so on average no direction is special.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Notice how much rides on these postulates. The whole derivation of pressure assumes collisions are elastic (so molecules rebound with undiminished speed), that the only forces are wall collisions (so we can ignore gravity and intermolecular attraction), and that motion is isotropic (so ⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>y</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>z</i></sub><sup>2</sup>⟩). Break any of these and the simple result fails: introduce an electric field on charged molecules and a new, non-collisional force appears; make the container so small that one wall is preferred and isotropy is lost; or pack the gas so densely that molecular size and attraction matter, and you are back to a real gas. Kinetic theory is the physics of a dilute gas of neutral molecules feeling nothing but each other’s bounces.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Kinetic equation for pressure — the central result of this topic',
        main: '<i>P</i> = ⅓ <i>Nm</i>⟨<i>v</i><sup>2</sup>⟩/<i>V</i> = ⅓ (<i>N</i>/<i>V</i>) <i>m</i>⟨<i>v</i><sup>2</sup>⟩<br>Equivalent and very useful forms:<br><i>P</i> = ⅓<i>ρ</i> <i>v</i><sub>rms</sub><sup>2</sup><br><i>PV</i> = ⅓<i>Nm</i> <i>v</i><sub>rms</sub><sup>2</sup>',
        legend: [
          '<i>N</i> = total number of molecules',
          '<i>N</i>/<i>V</i> = <i>n</i><sub>0</sub> = <b>number density</b> (molecules per unit volume), [<i>n</i><sub>0</sub>] = [L<sup>−3</sup>]',
          '<i>m</i> = mass of one molecule (not the sample mass)',
          '⟨<i>v</i><sup>2</sup>⟩ = <b>mean square speed</b> = (<i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup> + ⋯ + <i>v</i><sub><i>N</i></sub><sup>2</sup>)/<i>N</i>, [⟨<i>v</i><sup>2</sup>⟩] = [L<sup>2</sup> T<sup>−2</sup>]',
          '<i>v</i><sub>rms</sub> = √⟨<i>v</i><sup>2</sup>⟩ = <b>root-mean-square speed</b>, SI unit m s<sup>−1</sup>, [L T<sup>−1</sup>]',
          '<i>ρ</i> = <i>Nm</i>/<i>V</i> = density of the gas, SI unit kg m<sup>−3</sup>, [M L<sup>−3</sup>]',
          '<i>P</i> = pressure, SI unit Pa, [M L<sup>−1</sup> T<sup>−2</sup>]',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Pressure–energy relation.</b> The total translational kinetic energy of the gas is <i>E</i> = <i>N</i> · ½<i>m</i>⟨<i>v</i><sup>2</sup>⟩. Starting from <i>PV</i> = ⅓<i>Nm</i>⟨<i>v</i><sup>2</sup>⟩ and deliberately introducing a factor to expose the kinetic energy,<br><i>PV</i> = ⅓<i>Nm</i>⟨<i>v</i><sup>2</sup>⟩ = ⅔<i>N</i>(½<i>m</i>⟨<i>v</i><sup>2</sup>⟩) = ⅔<i>E</i><br>so that',
      },
      {
        t: 'formula',
        kicker: 'Pressure–energy relation',
        main: '<i>PV</i> = ⅔<i>E</i>   ⟺   <i>P</i> = ⅔<i>Ē</i><sub>vol</sub>',
        legend: [
          '<i>E</i> = total translational kinetic energy of the gas',
          '<i>Ē</i><sub>vol</sub> = <i>E</i>/<i>V</i> is the translational kinetic energy <b>per unit volume</b>',
        ],
        note: 'In words: the pressure of an ideal gas equals two-thirds of its translational kinetic-energy density. This single line is the bridge that, in Topic 04, connects pressure to temperature.',
      },
      {
        t: 'formula',
        kicker: 'Key proportionalities to memorise (at fixed everything-else)',
        main: '<i>P</i> ∝ <i>N</i>/<i>V</i>,   <i>P</i> ∝ <i>m</i>,   <i>P</i> ∝ ⟨<i>v</i><sup>2</sup>⟩ (i.e. <i>P</i> ∝ <i>v</i><sub>rms</sub><sup>2</sup>)',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivation — pressure of an ideal gas' },
      {
        t: 'p',
        html: '<b>Goal:</b> starting only from the postulates and Newton’s laws, show that <i>P</i> = ⅓ (<i>N</i>/<i>V</i>) <i>m</i>⟨<i>v</i><sup>2</sup>⟩.',
      },
      {
        t: 'p',
        html: '<b>Setup.</b> Consider <i>N</i> molecules, each of mass <i>m</i>, enclosed in a cube of side <i>l</i>, so the volume is <i>V</i> = <i>l</i><sup>3</sup>. Align the coordinate axes with the cube’s edges. Focus first on a <b>single molecule</b> with velocity components (<i>v</i><sub><i>x</i></sub>, <i>v</i><sub><i>y</i></sub>, <i>v</i><sub><i>z</i></sub>), and track its collisions with the wall that lies perpendicular to the <i>x</i>-axis (the marked face of area <i>A</i> = <i>l</i><sup>2</sup>).',
      },
      { t: 'fig', id: 'p11-12-03-d1' },
      {
        t: 'p',
        html: '<b>Step 1 — Momentum change in one collision.</b> The collision with the wall is elastic, and the wall is perpendicular to <i>x</i>. So the <i>x</i>-component of velocity reverses, <i>v</i><sub><i>x</i></sub> → −<i>v</i><sub><i>x</i></sub>, while <i>v</i><sub><i>y</i></sub> and <i>v</i><sub><i>z</i></sub> are unchanged. The change in the molecule’s momentum is<br>Δ<i>p</i><sub><i>x</i></sub> = (−<i>mv</i><sub><i>x</i></sub>) − (+<i>mv</i><sub><i>x</i></sub>) = −2<i>mv</i><sub><i>x</i></sub>',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> only the <i>x</i>-motion “sees” this wall; the tangential components slide along it untouched. By Newton’s third law, the momentum delivered <b>to the wall</b> per collision is +2<i>mv</i><sub><i>x</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Time between successive collisions with the same wall.</b> After bouncing off the right wall, the molecule must travel across to the left wall and come back before it strikes the right wall again — a round-trip distance 2<i>l</i> in the <i>x</i>-direction, at <i>x</i>-speed <i>v</i><sub><i>x</i></sub>. Hence the time between two hits on the same wall is<br>Δ<i>t</i> = 2<i>l</i>/<i>v</i><sub><i>x</i></sub>',
      },
      {
        t: 'p',
        html: '<b>Physical reasoning:</b> we don’t care about the <i>y</i>, <i>z</i> wandering; the rate of striking this wall is set purely by the <i>x</i>-motion.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Average force from one molecule.</b> Force is momentum delivered per unit time. The molecule delivers 2<i>mv</i><sub><i>x</i></sub> every Δ<i>t</i>, so the average force it exerts on the wall is<br><i>f</i><sub><i>x</i></sub> = 2<i>mv</i><sub><i>x</i></sub>/Δ<i>t</i> = 2<i>mv</i><sub><i>x</i></sub>/(2<i>l</i>/<i>v</i><sub><i>x</i></sub>) = <i>mv</i><sub><i>x</i></sub><sup>2</sup>/<i>l</i>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Sum over all <i>N</i> molecules.</b> Each molecule contributes its own <i>mv</i><sub><i>xi</i></sub><sup>2</sup>/<i>l</i>. The total force on the wall is<br><i>F</i><sub><i>x</i></sub> = (<i>m</i>/<i>l</i>)(<i>v</i><sub><i>x</i>1</sub><sup>2</sup> + <i>v</i><sub><i>x</i>2</sub><sup>2</sup> + ⋯ + <i>v</i><sub><i>xN</i></sub><sup>2</sup>) = (<i>m</i>/<i>l</i>) <i>N</i>⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩<br>where we have introduced the <b>mean square <i>x</i>-velocity</b> ⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = (1/<i>N</i>) Σ<sub><i>i</i></sub> <i>v</i><sub><i>xi</i></sub><sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Pressure on the wall.</b> Divide the force by the wall area <i>A</i> = <i>l</i><sup>2</sup>:<br><i>P</i> = <i>F</i><sub><i>x</i></sub>/<i>A</i> = <i>mN</i>⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩/(<i>l</i> · <i>l</i><sup>2</sup>) = <i>mN</i>⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩/<i>l</i><sup>3</sup> = (<i>mN</i>/<i>V</i>)⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩',
      },
      {
        t: 'p',
        html: '<b>Step 6 — Use isotropy to bring in the full speed.</b> Pressure cannot depend on which wall we chose, because the molecular motion is random and isotropic. Therefore<br>⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>y</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>z</i></sub><sup>2</sup>⟩<br>The full speed satisfies <i>v</i><sup>2</sup> = <i>v</i><sub><i>x</i></sub><sup>2</sup> + <i>v</i><sub><i>y</i></sub><sup>2</sup> + <i>v</i><sub><i>z</i></sub><sup>2</sup>, so averaging gives ⟨<i>v</i><sup>2</sup>⟩ = 3⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩, i.e. ⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = ⅓⟨<i>v</i><sup>2</sup>⟩. Substituting:<br><i>P</i> = ⅓ (<i>Nm</i>/<i>V</i>)⟨<i>v</i><sup>2</sup>⟩ = ⅓<i>ρ</i> <i>v</i><sub>rms</sub><sup>2</sup>',
      },
      {
        t: 'p',
        html: 'This is the kinetic equation for pressure. The factor of ⅓ is not arbitrary — it is the direct fingerprint of three-dimensional isotropy. (Strictly, molecules also collide with one another between wall hits; but since intermolecular collisions are elastic and merely reshuffle velocities among molecules without changing the collection’s total ⟨<i>v</i><sup>2</sup>⟩, the result is unaffected.)',
      },
      {
        t: 'p',
        html: '<b>Why the result is more general than the cube.</b> Two reassurances are worth stating, because exams sometimes probe them. First, the side length <i>l</i> cancelled completely — it appears in Step 3 and Step 5 and then divides out, so the final pressure depends only on the number density <i>N</i>/<i>V</i>, the molecular mass, and ⟨<i>v</i><sup>2</sup>⟩, never on the size of the box. Second, although we derived it for a cube for algebraic convenience, the result holds for a container of any shape: any wall can be tiled by tiny surface patches, and the same momentum-transfer argument applied patch by patch reproduces <i>P</i> = ⅓<i>ρv</i><sub>rms</sub><sup>2</sup> everywhere. The cube is a calculational scaffold, not a physical restriction. Finally, notice what the formula does not contain: it has no reference to the chemical identity of the gas beyond <i>m</i> and no reference to temperature yet — temperature enters only in Topic 04, once we connect ⟨<i>v</i><sup>2</sup>⟩ to <i>T</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Oxygen gas is held at a pressure of 1.0 × 10<sup>5</sup> Pa and has a density of 1.30 kg m<sup>−3</sup>. Calculate the rms speed of its molecules.',
        steps: [
          '<b>Given:</b> <i>P</i> = 1.0 × 10<sup>5</sup> Pa, <i>ρ</i> = 1.30 kg m<sup>−3</sup>.',
          'From the kinetic equation <i>P</i> = ⅓<i>ρv</i><sub>rms</sub><sup>2</sup>, solve for <i>v</i><sub>rms</sub>:<br><i>v</i><sub>rms</sub> = √(3<i>P</i>/<i>ρ</i>) = √((3 × 1.0 × 10<sup>5</sup>)/1.30) = √(2.31 × 10<sup>5</sup>)',
        ],
        ans: 'The rms speed is about 4.8 × 10<sup>2</sup> m s<sup>−1</sup> — comfortably faster than the speed of sound in air, as expected for molecular motion.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A fixed quantity of gas is heated and stirred so that its rms speed becomes <b>three times</b> its original value, while its density is kept unchanged. By what factor does the pressure change?',
        steps: [
          '<b>Speed method:</b> At fixed density, <i>P</i> ∝ <i>v</i><sub>rms</sub><sup>2</sup>. Tripling <i>v</i><sub>rms</sub> multiplies <i>v</i><sub>rms</sub><sup>2</sup> by 3<sup>2</sup> = 9.<br><i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = (<i>v</i><sub>rms,2</sub>/<i>v</i><sub>rms,1</sub>)<sup>2</sup>',
          '<b>The trap:</b> the careless answer is “3 times,” from reading <i>P</i> as proportional to speed. Pressure follows the square of the rms speed (it comes from kinetic energy, ∝ <i>v</i><sup>2</sup>). Whenever a speed is scaled, square the factor before touching pressure or energy.',
        ],
        ans: 'The pressure becomes 9 times larger.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A rigid 2.0 L vessel contains an ideal gas at a pressure of 1.5 × 10<sup>5</sup> Pa. Find the <b>total translational kinetic energy</b> of all the gas molecules. If the gas is monatomic with 4.0 × 10<sup>22</sup> molecules, find the average translational KE per molecule.',
        steps: [
          '<b>Concept 1 — pressure–energy relation.</b> From <i>PV</i> = ⅔<i>E</i>:<br><i>E</i> = (3/2)<i>PV</i> = (3/2) × (1.5 × 10<sup>5</sup>) × (2.0 × 10<sup>−3</sup> m<sup>3</sup>) = (3/2) × 300',
          '<b>Concept 2 — per-molecule average.</b> Divide by the number of molecules <i>N</i>:<br>⟨½<i>mv</i><sup>2</sup>⟩ = <i>E</i>/<i>N</i> = 450/(4.0 × 10<sup>22</sup>)',
          'Note we never needed the temperature or the molar mass — the macroscopic pair (<i>P</i>, <i>V</i>) already encodes the total kinetic energy. That is the power of <i>PV</i> = ⅔<i>E</i>.',
        ],
        ans: 'Total translational KE = 450 J; average per molecule ≈ 1.1 × 10<sup>−20</sup> J.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p11-12-03-d2',
        q: 'A thought experiment. Imagine a hypothetical gas of <i>N</i> identical molecules (mass <i>m</i>, number density <i>N</i>/<i>V</i>) confined to a cubical box, but constrained so that every molecule moves <b>only along the <i>x</i>-axis</b> (half in the +<i>x</i>, half in the −<i>x</i> direction), all with the same speed <i>v</i>. (a) Find the pressure on the two walls perpendicular to <i>x</i>. (b) Find the pressure on the four walls parallel to <i>x</i>. (c) Compare the <i>x</i>-wall pressure with that of a normal isotropic gas of the same <i>N</i>, <i>V</i>, <i>m</i>, and speed <i>v</i>.',
        steps: [
          '<b>Part (a).</b> Repeat the derivation, but now there is <b>no isotropy to invoke</b> — the molecules’ entire speed is in <i>x</i>, so ⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = <i>v</i><sup>2</sup> (not ⅓<i>v</i><sup>2</sup>). From Step 5 of the derivation, before the isotropy substitution:<br><i>P</i><sub><i>x</i></sub> = (<i>Nm</i>/<i>V</i>)⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = (<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>',
          '<b>Part (b).</b> No molecule has any <i>y</i> or <i>z</i> velocity, so no molecule ever strikes the walls parallel to <i>x</i>. Those walls feel<br><i>P</i><sub><i>y</i></sub> = <i>P</i><sub><i>z</i></sub> = 0',
          '<b>Part (c).</b> A real isotropic gas with the same parameters has, from the boxed result, <i>P</i><sub>iso</sub> = ⅓ (<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>. Therefore<br><i>P</i><sub><i>x</i></sub>/<i>P</i><sub>iso</sub> = ((<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>)/(⅓ (<i>Nm</i>/<i>V</i>)<i>v</i><sup>2</sup>)',
          'This is the whole meaning of the ⅓: in a real gas, each molecule’s kinetic energy is shared equally among three directions, so any one pair of walls receives only a third of the “if-everything-pointed-here” pressure. Strip away isotropy and the factor disappears — a vivid reminder that the kinetic pressure formula is inseparable from the isotropy postulate.',
        ],
        ans: 'The directed gas pushes three times as hard on the <i>x</i>-walls and not at all on the others.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Nitrogen gas has a density of 1.25 kg m<sup>−3</sup> at a pressure of 1.0 × 10<sup>5</sup> Pa. Find the rms speed of its molecules.',
            a: '≈ 490 m s<sup>−1</sup>',
          },
          {
            q: '[NEET] The rms speed of the molecules of a gas at constant density is reduced to one-half of its initial value. The pressure becomes what fraction of its initial value?',
            a: 'one-quarter (¼<i>P</i>)',
          },
          {
            q: '[JEE Main] A 5.0 L container holds a gas exerting a pressure of 2.0 × 10<sup>5</sup> Pa. What is the total translational kinetic energy of the gas?',
            a: '1.5 × 10<sup>3</sup> J',
          },
          {
            q: '[JEE Main] Equal masses of two gases A and B are kept in identical containers at the same pressure. Gas A has molecules of twice the mass of gas B. Find the ratio of the mean square speeds ⟨<i>v</i><sub><i>A</i></sub><sup>2</sup>⟩ ∶ ⟨<i>v</i><sub><i>B</i></sub><sup>2</sup>⟩. (Hint: equal mass and equal <i>P</i>, <i>V</i> ⟹ use <i>PV</i> = ⅓<i>M</i><sub>gas</sub>⟨<i>v</i><sup>2</sup>⟩, where <i>M</i><sub>gas</sub> is the total gas mass.)',
            a: '1 ∶ 1 (equal masses ⟹ equal total gas mass; same <i>P</i>, <i>V</i> forces equal ⟨<i>v</i><sup>2</sup>⟩ · <i>M</i><sub>gas</sub>, hence equal ⟨<i>v</i><sup>2</sup>⟩)',
          },
          {
            q: '[JEE Advanced] A cubical box contains <i>N</i> molecules of an ideal gas with rms speed <i>v</i><sub>rms</sub> at pressure <i>P</i><sub>0</sub>. Without changing the volume, three-quarters of the molecules are removed and the rms speed of those remaining is simultaneously doubled. Find the new pressure in terms of <i>P</i><sub>0</sub>.',
            a: '<i>P</i> = <i>P</i><sub>0</sub> × ¼ × 4 = <i>P</i><sub>0</sub> (number falls to ¼, <i>v</i><sub>rms</sub><sup>2</sup> rises ×4).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The pressure exerted by an ideal gas on its container walls is fundamentally due to:',
        opts: [
          {
            label: 'the weight of the gas molecules',
            nudge: '<b>Trap (A):</b> gravity is explicitly neglected in kinetic theory; pressure exists even in zero-g.',
          },
          { label: 'the mutual attraction between molecules', nudge: '<b>(B):</b> an ideal gas has no intermolecular attraction at all.' },
          { label: 'the change in momentum of molecules colliding with the walls', nudge: null },
          {
            label: 'the electrostatic repulsion between molecules and the walls',
            nudge: '<b>(D):</b> molecules are neutral; there is no electrostatic interaction in the model.',
          },
        ],
        correct: 2,
        solution: 'Pressure is the time-averaged force per unit area arising from countless elastic collisions, each transferring momentum 2<i>mv</i><sub><i>x</i></sub> to the wall.',
      },
      {
        t: 'mcq',
        q: 'For an ideal gas, <i>PV</i> = ⅔<i>E</i>, where <i>E</i> is the total translational kinetic energy. If the volume is halved while the total kinetic energy is kept constant, the pressure:',
        opts: [
          { label: 'halves', nudge: '<b>Trap (A):</b> reading the proportionality backwards.' },
          { label: 'doubles', nudge: null },
          {
            label: 'stays the same',
            nudge: '<b>(C):</b> assuming constant <i>E</i> means constant <i>P</i> — but <i>P</i> depends on <i>E</i>/<i>V</i>, not <i>E</i> alone.',
          },
          {
            label: 'becomes four times',
            nudge: '<b>(D):</b> confusing this with a <i>v</i><sub>rms</sub><sup>2</sup> or area-squared dependence; the relation here is strictly linear in 1/<i>V</i>.',
          },
        ],
        correct: 1,
        solution: 'With <i>E</i> fixed, <i>P</i> = 2<i>E</i>/(3<i>V</i>), so <i>P</i> ∝ 1/<i>V</i>. Halving <i>V</i> doubles <i>P</i>.',
      },
      {
        t: 'mcq',
        q: 'A sealed, rigid, insulated box of ionised hydrogen has a strong positive charge fixed on one of its inner faces. The usual kinetic-theory expression for gas pressure, <i>P</i> = ⅓ (<i>N</i>/<i>V</i>) <i>m</i>⟨<i>v</i><sup>2</sup>⟩:',
        opts: [
          { label: 'remains exactly valid', nudge: '<b>Trap (A):</b> ignores that the postulates are now broken.' },
          {
            label: 'fails, because the ions now feel forces other than wall collisions, and the motion is no longer isotropic',
            nudge: null,
          },
          {
            label: 'fails, because the collisions with the walls stop being elastic',
            nudge: '<b>(C):</b> elasticity of the wall bounce is not what fails here — the new external force is.',
          },
          {
            label: 'remains valid but only for the uncharged wall',
            nudge: '<b>(D):</b> the loss of isotropy spoils the formula globally, not on one wall.',
          },
        ],
        correct: 1,
        solution: 'The derivation assumes the only forces are elastic wall collisions and that motion is isotropic. A fixed charge exerts a long-range electrostatic force on the ions, violating the “no non-collisional forces” postulate, and biases their motion toward/away from that face, destroying isotropy — so ⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>y</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>z</i></sub><sup>2</sup>⟩ no longer holds.',
      },
      {
        t: 'mcq',
        q: 'Two ideal gases have the same number density <i>N</i>/<i>V</i> and the same rms speed, but gas X has molecules twice as massive as gas Y. The ratio of their pressures <i>P</i><sub><i>X</i></sub> ∶ <i>P</i><sub><i>Y</i></sub> is:',
        opts: [
          { label: '1 ∶ 1', nudge: '<b>Trap (A):</b> assuming pressure is independent of molecular mass.' },
          { label: '2 ∶ 1', nudge: null },
          { label: '1 ∶ 2', nudge: '<b>(C):</b> inverting the dependence.' },
          {
            label: '4 ∶ 1',
            nudge: '<b>(D):</b> squaring the mass ratio — but <i>P</i> is linear in <i>m</i>, only quadratic in <i>v</i><sub>rms</sub>.',
          },
        ],
        correct: 1,
        solution: 'From <i>P</i> = ⅓ (<i>N</i>/<i>V</i>) <i>m</i>⟨<i>v</i><sup>2</sup>⟩, with <i>N</i>/<i>V</i> and ⟨<i>v</i><sup>2</sup>⟩ identical, <i>P</i> ∝ <i>m</i>. Double the molecular mass ⟹ double the pressure.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing <i>m</i> (one molecule) with the sample mass.</b> In <i>P</i> = ⅓ (<i>N</i>/<i>V</i>) <i>m</i>⟨<i>v</i><sup>2</sup>⟩, <i>m</i> is the mass of a single molecule and <i>N</i> is the number of molecules. Mixing these up by a factor of <i>N</i> is the commonest derivation error. The density form <i>P</i> = ⅓<i>ρv</i><sub>rms</sub><sup>2</sup> sidesteps it because <i>ρ</i> already bundles <i>Nm</i>/<i>V</i>.',
          '<b>Forgetting the ⅓ — or not knowing where it comes from.</b> The ⅓ is purely the isotropy factor (⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = ⅓⟨<i>v</i><sup>2</sup>⟩). Examiners love to test this by removing isotropy (directed beams, 1-D motion). If a problem says molecules move along one axis, drop the ⅓.',
          '<b>Treating pressure as linear in speed.</b> Pressure and kinetic energy scale as <i>v</i><sub>rms</sub><sup>2</sup>, not <i>v</i><sub>rms</sub>. Always square the speed factor first.',
          '<b>Assuming wall collisions transfer the whole momentum <i>mv</i>.</b> An elastic bounce reverses the perpendicular component, so the transfer is 2<i>mv</i><sub><i>x</i></sub>, not <i>mv</i><sub><i>x</i></sub>. Halving this is a classic slip.',
          '<b>Forgetting that pressure is a statistical average.</b> Pressure (and indeed temperature) is only meaningful for a large collection of molecules. A single molecule rattling in a box delivers sharp, intermittent impulses, not a steady force — you cannot sensibly assign it a pressure or a temperature, because the postulate “very large <i>N</i>” has failed. This is why kinetic theory is explicitly a theory of dilute gases with enormous molecule counts; conceptual questions that shrink <i>N</i> to one, or push toward 0 K (where, in this classical picture, motion and hence pressure would cease), are testing exactly this statistical foundation.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (sanity check via energy):</b> if a question gives you <i>P</i> and <i>V</i>, you instantly know the total translational KE without anything else: <i>E</i> = (3/2)<i>PV</i>. Reach for this whenever “total kinetic energy” appears — it usually turns a three-step problem into one line.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Pressure (kinetic equation)',
            note: '<i>P</i> = ⅓ (<i>N</i>/<i>V</i>) <i>m</i>⟨<i>v</i><sup>2</sup>⟩ = ⅓<i>ρ</i> <i>v</i><sub>rms</sub><sup>2</sup>.',
          },
          { f: 'Pressure–energy bridge', note: '<i>PV</i> = ⅔<i>E</i>, so <i>E</i> = (3/2)<i>PV</i> (total translational KE).' },
          {
            f: 'The ⅓ comes from isotropy',
            note: '⟨<i>v</i><sub><i>x</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>y</i></sub><sup>2</sup>⟩ = ⟨<i>v</i><sub><i>z</i></sub><sup>2</sup>⟩ = ⅓⟨<i>v</i><sup>2</sup>⟩.',
          },
          {
            f: 'Per-collision momentum transfer',
            note: 'to a wall = 2<i>mv</i><sub><i>x</i></sub>; <b>time between hits</b> on one wall = 2<i>l</i>/<i>v</i><sub><i>x</i></sub>.',
          },
          { f: 'Scaling', note: '<i>P</i> ∝ <i>N</i>/<i>V</i>, <i>P</i> ∝ <i>m</i>, <i>P</i> ∝ <i>v</i><sub>rms</sub><sup>2</sup>.' },
          {
            f: 'Postulate check for validity',
            note: 'large <i>N</i>, point molecules, no force but elastic collisions, isotropic motion. Charge / external field / anisotropy ⟹ formula fails.',
          },
        ],
        aids: ['“Pressure = one-third density times speed-squared” — and “<i>PV</i> is two-thirds the kinetic energy.”'],
      },
    ],
  },

  {
    n: '04',
    title: 'RMS Speed and Maxwell Distribution',
    kalam: 'The average translational kinetic energy per molecule depends only on absolute temperature — not on pressure, volume, or the identity of the gas.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Extremely high-yield. NEET and JEE Main almost always carry one numerical on <i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>) or the speed ratios (lighter gas faster, <i>v</i> ∝ √<i>T</i>). CBSE Boards ask the kinetic interpretation of temperature (½<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = (3/2)<i>k</i><sub>B</sub><i>T</i>) and the labelled Maxwell curve. JEE Advanced reaches into the distribution itself — deriving <i>v</i><sub>mp</sub>, comparing the three speeds, or reading fractions off the curve.',
      },
      {
        t: 'p',
        html: 'In Topic 03 we stopped one step short of a deep secret: we found <i>PV</i> = ⅔<i>E</i>, linking pressure to the molecules’ kinetic energy, but we never said what temperature is at the molecular level. This topic closes that gap, and the answer is one of the most beautiful results in all of physics: <b>temperature is simply a measure of the average kinetic energy of the molecules.</b> A hot gas is not “carrying heat” like a bucket carries water — its molecules are literally moving faster. Cool the gas and they slow down. That is all temperature is.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine the molecules as the crowd leaving a stadium after an India–Pakistan match. They don’t all walk at the same pace — a few sprint, most amble, a handful dawdle. There is a whole spread of speeds. Now, if you wanted a single number to summarise “how fast is this crowd moving,” which would you pick? The fastest? The slowest? The most common pace? Physicists found that three different averages are each useful, and they show up constantly in exams: the <b>most probable speed</b> (the pace the largest number of molecules actually have — the peak of the crowd), the <b>average (mean) speed</b> (the ordinary arithmetic mean of everyone’s speed), and the <b>root-mean-square speed</b> (the speed whose square equals the average of the squared speeds — the one that connects directly to kinetic energy).',
      },
      {
        t: 'p',
        html: 'Why three? Because the molecules do not all move at one speed. If they did, one number would suffice. Instead they share out the total energy through countless collisions into a characteristic, stable distribution of speeds — the <b>Maxwell–Boltzmann distribution</b>. Picture a graph: number of molecules on the vertical axis, speed on the horizontal. The curve starts at zero (no molecule is perfectly still), rises to a peak (the most probable speed), then falls away with a long tail stretching to very high speeds. It is lopsided — a gentle rise, then a long high-speed tail — which is exactly why the three speed-measures differ and always line up in the same order: most probable < average < rms.',
      },
      {
        t: 'p',
        html: 'Heat the gas and this whole curve responds: the peak slides to the right (molecules are faster on average) and the curve flattens and spreads (a wider range of speeds), but the total area — the total number of molecules — stays fixed. Swap to a heavier gas at the same temperature and the curve squeezes leftward: heavier molecules carry the same average kinetic energy, so they must move slower. This single fact — equal energy, unequal speeds — explains a huge fraction of exam questions.',
      },
      {
        t: 'p',
        html: 'This spread of speeds is not just bookkeeping; it has dramatic real consequences. Consider why the Moon has no atmosphere while the Earth keeps one. A planet retains a gas only if the molecules move too slowly to escape its gravity — that is, only if their speeds stay well below the escape speed. The Maxwell curve’s long high-speed tail means that some molecules are always far faster than <i>v</i><sub>rms</sub>, and over geological time these stragglers leak away. Light gases (hydrogen, helium) have large speeds and lose this race quickly; that is why Earth’s atmosphere is dominated by heavier nitrogen and oxygen, and why the low-gravity Moon, where the fast tail exceeds escape speed, holds essentially no gas at all. The same high-energy tail explains why a few molecules in a cool liquid can evaporate, and why chemical reactions speed up sharply with temperature — only the molecules out in the fast tail carry enough energy to react.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Everything here assumes an ideal gas in thermal equilibrium — a large number of molecules that have collided enough times to settle into the Maxwell distribution. The clean relation ½<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = (3/2)<i>k</i><sub>B</sub><i>T</i> counts <b>translational</b> kinetic energy only; rotational and vibrational motion (which matter for the energy budget of diatomic and polyatomic gases) belong to Topic 05 and do not change the translational speeds. And note the recurring trap: the average velocity (a vector) of the molecules is <b>zero</b> — they go equally in all directions — but the average speed (a scalar) is decidedly not zero. Speed is what these formulas are about.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Kinetic interpretation of temperature — the central bridge',
        main: '½<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = (3/2)<i>k</i><sub>B</sub><i>T</i>   ⟹   <i>Ē</i><sub>trans (per molecule)</sub> = (3/2)<i>k</i><sub>B</sub><i>T</i>',
        legend: [
          '<i>m</i> = mass of one molecule',
          '⟨<i>v</i><sup>2</sup>⟩ = mean square speed of the molecules',
          '<i>k</i><sub>B</sub> = Boltzmann constant, 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>',
          '<i>T</i> = absolute temperature (K)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The average translational kinetic energy per molecule depends only on absolute temperature — not on pressure, volume, or the identity of the gas. For <i>N</i> molecules (or <i>n</i> moles), the total translational kinetic energy is <i>E</i> = (3/2)<i>Nk</i><sub>B</sub><i>T</i> = (3/2)<i>nRT</i>.',
      },
      {
        t: 'p',
        html: 'For a <b>monatomic</b> ideal gas (single atoms — helium, neon, argon) this translational energy is the entire internal energy, since such atoms have no rotational or vibrational motion to store energy in. Hence the internal energy of a monatomic ideal gas is <i>U</i> = (3/2)<i>nRT</i>, a function of temperature alone — a result used constantly in thermodynamics. (Diatomic and polyatomic gases store additional energy in rotation and vibration; that extension belongs to Topic 05 and does not alter the translational speeds derived here.)',
      },
      {
        t: 'formula',
        kicker: 'The three molecular speeds',
        main: '<i>v</i><sub>rms</sub> = √⟨<i>v</i><sup>2</sup>⟩ = √(3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>) = √(3<i>RT</i>/<i>M</i>) = √(3<i>P</i>/<i>ρ</i>)<br><i>v</i><sub>av</sub> = √(8<i>k</i><sub>B</sub><i>T</i>/(π<i>m</i>)) = √(8<i>RT</i>/(π<i>M</i>)) = √(8<i>P</i>/(π<i>ρ</i>))<br><i>v</i><sub>mp</sub> = √(2<i>k</i><sub>B</sub><i>T</i>/<i>m</i>) = √(2<i>RT</i>/<i>M</i>) = √(2<i>P</i>/<i>ρ</i>)',
        legend: [
          '<i>m</i> = mass of one molecule (kg)',
          '<i>M</i> = molar mass (<b>kg mol<sup>−1</sup></b>, not g mol<sup>−1</sup> — the commonest unit error)',
          '<i>k</i><sub>B</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>',
          '<i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>',
          '<i>R</i> = <i>N</i><sub>A</sub><i>k</i><sub>B</sub>',
          'All speeds: SI unit m s<sup>−1</sup>, dimension [L T<sup>−1</sup>]',
          '<i>ρ</i> = density (kg m<sup>−3</sup>)',
          '<i>P</i> = pressure (Pa)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Ordering and ratio (true at any temperature, for any gas)',
        main: '<i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>mp</sub><br><i>v</i><sub>rms</sub> ∶ <i>v</i><sub>av</sub> ∶ <i>v</i><sub>mp</sub> = √3 ∶ √(8/π) ∶ √2 ≈ 1.732 ∶ 1.596 ∶ 1.414 ≈ 1.224 ∶ 1.128 ∶ 1',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'A handy memory hook for the order is <b>“RAM”</b> (Rms, Average, Most-probable — largest to smallest).',
      },
      {
        t: 'p',
        html: 'To anchor these to real numbers: oxygen at 300 K has <i>v</i><sub>mp</sub> ≈ 395 m s<sup>−1</sup>, <i>v</i><sub>av</sub> ≈ 446 m s<sup>−1</sup>, and <i>v</i><sub>rms</sub> ≈ 484 m s<sup>−1</sup> — confirming both the order and the ≈ 1 ∶ 1.13 ∶ 1.22 spacing. The much lighter hydrogen, at the same temperature, runs roughly four times faster across the board (<i>v</i><sub>rms</sub> ≈ 1934 m s<sup>−1</sup>), since <i>v</i> ∝ 1/√<i>M</i> and √(32/2) = 4. These figures are worth remembering as order-of-magnitude checks: molecular speeds at room temperature are hundreds to a couple of thousand metres per second — comparable to, and a little above, the speed of sound in the gas.',
      },
      {
        t: 'p',
        html: '<b>Key proportionalities:</b> all three speeds share <i>v</i> ∝ √<i>T</i> and <i>v</i> ∝ 1/√<i>M</i>. So <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = √(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>) at fixed <i>M</i>, and <i>v</i><sub><i>A</i></sub>/<i>v</i><sub><i>B</i></sub> = √(<i>M</i><sub><i>B</i></sub>/<i>M</i><sub><i>A</i></sub>) at fixed <i>T</i>.',
      },
      {
        t: 'formula',
        kicker: 'Maxwell–Boltzmann speed distribution',
        main: '<i>P</i>(<i>v</i>) = 4π (<i>M</i>/(2π<i>RT</i>))<sup>3/2</sup> <i>v</i><sup>2</sup> <i>e</i><sup>−<i>Mv</i>²/(2<i>RT</i>)</sup>',
        legend: [],
        note: 'Here <i>P</i>(<i>v</i>) d<i>v</i> is the fraction of molecules with speeds between <i>v</i> and <i>v</i> + d<i>v</i>. The peak of this curve sits at <i>v</i><sub>mp</sub>; the total area under it is 1.',
      },

      { t: 'part', title: 'CBSE board derivation and procedures' },
      {
        t: 'p',
        html: '<b>Part A — Deriving the kinetic interpretation of temperature and <i>v</i><sub>rms</sub>.</b><br><b>Starting point.</b> We carry over two results. From the pressure derivation (Topic 03):<br><i>PV</i> = ⅓<i>Nm</i>⟨<i>v</i><sup>2</sup>⟩     (1)<br>From the ideal gas law in molecular form (Topic 02):<br><i>PV</i> = <i>Nk</i><sub>B</sub><i>T</i>     (2)',
      },
      {
        t: 'p',
        html: '<b>Step 1 — equate the two expressions for <i>PV</i>.</b> Both describe the same gas, so<br>⅓<i>Nm</i>⟨<i>v</i><sup>2</sup>⟩ = <i>Nk</i><sub>B</sub><i>T</i>',
      },
      {
        t: 'p',
        html: '<b>Step 2 — cancel <i>N</i> and rearrange.</b> The number of molecules cancels (the result is per-molecule, independent of how much gas there is):<br>⅓<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = <i>k</i><sub>B</sub><i>T</i>   ⟹   ½<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = (3/2)<i>k</i><sub>B</sub><i>T</i>',
      },
      {
        t: 'p',
        html: '<b>Physical meaning:</b> the left side is the average translational kinetic energy of one molecule. So <b>temperature is a direct measure of average molecular kinetic energy</b> — the deepest statement in this chapter. Because the right side contains no reference to mass or gas type, all gases at the same temperature have the same average translational KE per molecule. Heavier molecules simply compensate with lower speeds.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — solve for the rms speed.</b> From ½<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = (3/2)<i>k</i><sub>B</sub><i>T</i> we get ⟨<i>v</i><sup>2</sup>⟩ = 3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>, hence<br><i>v</i><sub>rms</sub> = √⟨<i>v</i><sup>2</sup>⟩ = √(3<i>k</i><sub>B</sub><i>T</i>/<i>m</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 4 — convert to molar form.</b> Multiply numerator and denominator inside the root by Avogadro’s number <i>N</i><sub>A</sub>: since <i>N</i><sub>A</sub><i>k</i><sub>B</sub> = <i>R</i> and <i>N</i><sub>A</sub><i>m</i> = <i>M</i> (molar mass),<br><i>v</i><sub>rms</sub> = √(3<i>N</i><sub>A</sub><i>k</i><sub>B</sub><i>T</i>/(<i>N</i><sub>A</sub><i>m</i>)) = √(3<i>RT</i>/<i>M</i>)<br>and using <i>P</i> = <i>ρRT</i>/<i>M</i> from Topic 02, a third equivalent form <i>v</i><sub>rms</sub> = √(3<i>P</i>/<i>ρ</i>) follows immediately.',
      },
      {
        t: 'p',
        html: 'The most probable speed is, by definition, the speed at the peak of <i>P</i>(<i>v</i>). The procedure is standard calculus:',
      },
      {
        t: 'proc',
        title: 'Part B — Procedure: locating the most probable speed from the distribution',
        steps: [
          'Write the distribution <i>P</i>(<i>v</i>) = <i>C</i> <i>v</i><sup>2</sup> exp(−<i>mv</i><sup>2</sup>/(2<i>k</i><sub>B</sub><i>T</i>)), where <i>C</i> collects the constants (they won’t affect where the peak is).',
          'The peak is where d<i>P</i>/d<i>v</i> = 0. Differentiate the product <i>v</i><sup>2</sup> exp(−<i>mv</i><sup>2</sup>/(2<i>k</i><sub>B</sub><i>T</i>)) using the product rule:<br>d<i>P</i>/d<i>v</i> = <i>C</i> [2<i>v</i> exp(−<i>mv</i><sup>2</sup>/(2<i>k</i><sub>B</sub><i>T</i>)) + <i>v</i><sup>2</sup> (−<i>mv</i>/(<i>k</i><sub>B</sub><i>T</i>)) exp(−<i>mv</i><sup>2</sup>/(2<i>k</i><sub>B</sub><i>T</i>))]',
          'Factor out the common (non-zero) terms <i>Cv</i> exp(−<i>mv</i><sup>2</sup>/(2<i>k</i><sub>B</sub><i>T</i>)):<br>d<i>P</i>/d<i>v</i> = <i>Cv</i> exp(−<i>mv</i><sup>2</sup>/(2<i>k</i><sub>B</sub><i>T</i>)) (2 − <i>mv</i><sup>2</sup>/(<i>k</i><sub>B</sub><i>T</i>)) = 0',
          'The exponential never vanishes and <i>v</i> = 0 is the minimum, so the maximum requires the bracket to vanish: 2 − <i>mv</i><sup>2</sup>/(<i>k</i><sub>B</sub><i>T</i>) = 0, giving<br><i>v</i><sub>mp</sub> = √(2<i>k</i><sub>B</sub><i>T</i>/<i>m</i>) = √(2<i>RT</i>/<i>M</i>)',
        ],
      },
      {
        t: 'p',
        html: 'This is why <i>v</i><sub>mp</sub> carries the smallest numerical coefficient (√2) of the three speeds — it marks the peak, while the averaging that defines <i>v</i><sub>av</sub> and the energy-weighting that defines <i>v</i><sub>rms</sub> both pull their values up into the high-speed tail.',
      },
      {
        t: 'p',
        html: '<b>Part C — Reading the Maxwell curve.</b> Because <i>P</i>(<i>v</i>) d<i>v</i> is the fraction of molecules with speeds between <i>v</i> and <i>v</i> + d<i>v</i>, the curve is read as an area, not a height. The fraction of molecules with speeds lying in any interval [<i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>] equals the <b>area under the curve between <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub></b> (mathematically, ∫<sub><i>v</i>₁</sub><sup><i>v</i>₂</sup> <i>P</i>(<i>v</i>) d<i>v</i>). Three consequences follow that examiners like to test. First, the total area, from 0 to ∞, is exactly 1 — every molecule has some speed — so heating a gas cannot change the area, only redistribute it. Second, the height <i>P</i>(<i>v</i>) at a single speed is not itself a probability; only an area (a height times a width) is. Third, the curve is asymmetric: it rises steeply from the origin, peaks at <i>v</i><sub>mp</sub>, then trails off slowly, so there are always more molecules faster than <i>v</i><sub>mp</sub> than slower than it — which is the geometric reason the mean and rms both lie to the right of the peak.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the rms speed of nitrogen molecules (<i>M</i> = 28 g mol<sup>−1</sup>) at 27 °C. Take <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.',
        steps: [
          '<b>Given:</b> <i>M</i> = 28 g mol<sup>−1</sup> = 28 × 10<sup>−3</sup> kg mol<sup>−1</sup>, <i>T</i> = 27 + 273 = 300 K.',
          '<i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>) = √((3 × 8.314 × 300)/(28 × 10<sup>−3</sup>)) = √(7482.6/0.028) = √(2.672 × 10<sup>5</sup>)<br><i>v</i><sub>rms</sub> ≈ 517 m s<sup>−1</sup>',
          'Note the conversion of <i>M</i> to kg mol<sup>−1</sup> — leaving it in g mol<sup>−1</sup> would make the answer √1000 ≈ 32 times too small.',
          'The other two speeds follow at once from the fixed ratio, without re-running the calculation: <i>v</i><sub>av</sub> = <i>v</i><sub>rms</sub>√(8/(3π)) ≈ 0.921 × 517 ≈ 476 m s<sup>−1</sup>, and <i>v</i><sub>mp</sub> = <i>v</i><sub>rms</sub>√(2/3) ≈ 0.816 × 517 ≈ 422 m s<sup>−1</sup>. As expected, <i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>mp</sub>, and all three are of the same order — a few hundred metres per second.',
        ],
        ans: 'The rms speed is about 5.2 × 10<sup>2</sup> m s<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'At the same temperature, find the ratio of the rms speed of hydrogen (<i>M</i> = 2) to that of oxygen (<i>M</i> = 32).',
        steps: [
          '<b>Speed method:</b> at fixed <i>T</i>, <i>v</i><sub>rms</sub> ∝ 1/√<i>M</i>, so<br><i>v</i><sub>H₂</sub>/<i>v</i><sub>O₂</sub> = √(<i>M</i><sub>O₂</sub>/<i>M</i><sub>H₂</sub>) = √(32/2) = √16',
          '<b>The trap:</b> two slips lurk here. First, students sometimes take the ratio of molar masses directly (32/2 = 16) instead of its square root. Second, some invert it and conclude oxygen is faster — but the lighter gas is always faster at a given temperature. A 2-second sanity check (“light = fast”) kills the wrong option instantly. The same single relation, <i>v</i><sub><i>A</i></sub>/<i>v</i><sub><i>B</i></sub> = √(<i>M</i><sub><i>B</i></sub>/<i>M</i><sub><i>A</i></sub>), handles every “which gas is faster and by how much” question on the paper, so it is worth internalising as a reflex rather than re-deriving each time.',
        ],
        ans: 'Hydrogen molecules move 4 times as fast as oxygen molecules.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'At what temperature will the rms speed of helium atoms (<i>M</i> = 4) equal the rms speed of nitrogen molecules (<i>M</i> = 28) that are held at 350 K?',
        steps: [
          '<b>Concept — equate rms speeds across two gases at different temperatures.</b> Setting <i>v</i><sub>rms,He</sub> = <i>v</i><sub>rms,N₂</sub>:<br>√(3<i>RT</i><sub>He</sub>/<i>M</i><sub>He</sub>) = √(3<i>RT</i><sub>N₂</sub>/<i>M</i><sub>N₂</sub>)   ⟹   <i>T</i><sub>He</sub>/<i>M</i><sub>He</sub> = <i>T</i><sub>N₂</sub>/<i>M</i><sub>N₂</sub>',
          'Solve for <i>T</i><sub>He</sub>:<br><i>T</i><sub>He</sub> = <i>T</i><sub>N₂</sub> · <i>M</i><sub>He</sub>/<i>M</i><sub>N₂</sub> = 350 × 4/28',
          'This makes physical sense: helium is much lighter, so to match the slower nitrogen it must be at a far lower temperature (less kinetic energy). The key step is recognising that “equal rms speeds” reduces to “equal <i>T</i>/<i>M</i>.”',
        ],
        ans: 'Helium must be cooled to 50 K.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Five molecules are found to have speeds (in arbitrary units) of 2, 4, 6, 8, and 10. (a) Compute <i>v</i><sub>av</sub> and <i>v</i><sub>rms</sub> for this set and verify <i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub>. (b) Then, for a real gas in thermal equilibrium, explain why <i>v</i><sub>rms</sub> always exceeds <i>v</i><sub>av</sub>, connecting it to the shape of the Maxwell curve.',
        steps: [
          '<b>Part (a) — average speed:</b><br><i>v</i><sub>av</sub> = (2 + 4 + 6 + 8 + 10)/5 = 30/5 = 6.00 units',
          '<b>rms speed:</b><br>⟨<i>v</i><sup>2</sup>⟩ = (2<sup>2</sup> + 4<sup>2</sup> + 6<sup>2</sup> + 8<sup>2</sup> + 10<sup>2</sup>)/5 = (4 + 16 + 36 + 64 + 100)/5 = 220/5 = 44<br><i>v</i><sub>rms</sub> = √44 ≈ 6.63 units',
          'Indeed <i>v</i><sub>rms</sub> (6.63) > <i>v</i><sub>av</sub> (6.00). ✓',
          '<b>Part (b) — why this is always true.</b> The rms takes the average of the squares of the speeds. Squaring weights large speeds disproportionately — a molecule at 10 contributes 100 to the squared-sum but only 10 to the plain sum. So the high-speed tail of the Maxwell distribution drags <i>v</i><sub>rms</sub> above <i>v</i><sub>av</sub>. Mathematically this is a manifestation of the inequality ⟨<i>v</i><sup>2</sup>⟩ ≥ ⟨<i>v</i>⟩<sup>2</sup> (with equality only if every molecule had exactly the same speed). Because a real gas in equilibrium always has a spread of speeds — the long high-speed tail of the Maxwell curve — the inequality is strict, so <i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub>. The same tail pulls <i>v</i><sub>av</sub> above the peak <i>v</i><sub>mp</sub>, so <i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>mp</sub>, with the gaps fixed by the universal ratio √3 ∶ √(8/π) ∶ √2.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the rms speed of oxygen molecules (<i>M</i> = 32 g mol<sup>−1</sup>) at 0 °C.',
            a: '≈ 461 m s<sup>−1</sup>',
          },
          {
            q: '[NEET] The rms speed of a gas at 300 K is <i>v</i>. At what temperature will its rms speed become 2<i>v</i>?',
            a: '1200 K',
          },
          {
            q: '[JEE Main] For oxygen gas at 300 K (<i>M</i> = 32 g mol<sup>−1</sup>), calculate the most probable speed and the average speed.',
            a: '<i>v</i><sub>mp</sub> ≈ 395 m s<sup>−1</sup>, <i>v</i><sub>av</sub> ≈ 446 m s<sup>−1</sup>',
          },
          {
            q: '[JEE Main] A vessel contains a mixture of hydrogen and oxygen in thermal equilibrium. Find the ratio of the average translational kinetic energy per hydrogen molecule to that per oxygen molecule.',
            a: '1 ∶ 1 (average translational KE depends only on <i>T</i>, which is shared)',
          },
          {
            q: '[JEE Advanced] The rms speed of the molecules of an ideal gas is <i>v</i>. The gas is heated so that its absolute temperature triples, and simultaneously every molecule dissociates into two molecules each of half the original mass. Find the new rms speed in terms of <i>v</i>.',
            a: '<i>v</i><sub>rms,new</sub> = √(3<i>RT</i>′/<i>M</i>′) with <i>T</i>′ = 3<i>T</i> and <i>M</i>′ = <i>M</i>/2, so the factor is √(3 × 2) = √6, giving √6 <i>v</i> ≈ 2.45 <i>v</i>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The average translational kinetic energy of the molecules of an ideal gas depends on:',
        opts: [
          {
            label: 'the pressure of the gas only',
            nudge: '<b>Trap (A):</b> confusing energy with pressure; pressure depends on energy density, but the per-molecule energy does not depend on <i>P</i>.',
          },
          {
            label: 'the nature (molar mass) of the gas only',
            nudge: '<b>(B)/(D):</b> the molar mass affects the speed, but not the energy — heavier molecules go slower so that the energy stays the same.',
          },
          { label: 'the absolute temperature of the gas only', nudge: null },
          {
            label: 'both temperature and molar mass',
            nudge: '<b>(B)/(D):</b> the molar mass affects the speed, but not the energy — heavier molecules go slower so that the energy stays the same.',
          },
        ],
        correct: 2,
        solution: 'From <i>Ē</i><sub>trans</sub> = (3/2)<i>k</i><sub>B</sub><i>T</i>, the average translational KE per molecule is a function of <i>T</i> alone. This independence from mass is exactly the surprising part of the result.',
      },
      {
        t: 'mcq',
        q: 'The rms speed of oxygen molecules at temperature <i>T</i> is <i>v</i>. If the temperature is doubled <b>and</b> the oxygen molecules dissociate into oxygen atoms, the rms speed becomes:',
        opts: [
          { label: '<i>v</i>', nudge: '<b>(A):</b> assuming the two effects cancel.' },
          {
            label: '√2 <i>v</i>',
            nudge: '<b>Trap (B):</b> accounting for the temperature change but forgetting the dissociation halves the mass.',
          },
          { label: '2<i>v</i>', nudge: null },
          {
            label: '4<i>v</i>',
            nudge: '<b>(D):</b> multiplying the factors (2 × 2) instead of combining them correctly under the root.',
          },
        ],
        correct: 2,
        solution: '<i>v</i><sub>rms</sub> ∝ √(<i>T</i>/<i>M</i>). Doubling <i>T</i> multiplies by √2; dissociation halves the particle mass (<i>M</i> → <i>M</i>/2), multiplying by another √2. Together: √2 × √2 = 2.',
      },
      {
        t: 'mcq',
        q: 'For the molecules of an ideal gas in thermal equilibrium, which ordering of the speeds is always correct?',
        opts: [
          {
            label: '<i>v</i><sub>mp</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>rms</sub>',
            nudge: '<b>Trap (A):</b> exact reversal — a common memory slip.',
          },
          { label: '<i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>mp</sub>', nudge: null },
          {
            label: '<i>v</i><sub>av</sub> > <i>v</i><sub>rms</sub> > <i>v</i><sub>mp</sub>',
            nudge: '<b>(C):</b> misremembering which average sits on top; squaring (rms) always wins because it over-weights the fast tail.',
          },
          {
            label: 'all three are equal',
            nudge: '<b>(D):</b> true only for a hypothetical gas where every molecule has identical speed, which never happens in equilibrium.',
          },
        ],
        correct: 1,
        solution: 'The “RAM” order: <i>v</i><sub>rms</sub> ∶ <i>v</i><sub>av</sub> ∶ <i>v</i><sub>mp</sub> = √3 ∶ √(8/π) ∶ √2 ≈ 1.22 ∶ 1.13 ∶ 1, so rms is largest and most-probable smallest.',
      },
      {
        t: 'mcq',
        q: 'When the temperature of a gas is increased, the Maxwell speed-distribution curve:',
        opts: [
          {
            label: 'shifts its peak to a lower speed and becomes taller',
            nudge: '<b>Trap (A):</b> gets the direction of the peak backwards.',
          },
          { label: 'shifts its peak to a higher speed and becomes broader and flatter', nudge: null },
          { label: 'remains unchanged in shape', nudge: '<b>(C):</b> ignores the temperature dependence entirely.' },
          {
            label: 'increases the total area under it',
            nudge: '<b>(D):</b> the area equals the total fraction of molecules = 1 always, so it cannot change — a frequent conceptual error.',
          },
        ],
        correct: 1,
        solution: 'Higher <i>T</i> raises all the speeds, so <i>v</i><sub>mp</sub> (the peak) moves right; the distribution spreads over a wider range, so the curve flattens. The peak height drops because the molecules are spread across more speeds.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Molar mass in grams.</b> <i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>) demands <i>M</i> in <b>kg mol<sup>−1</sup></b>. Using g mol<sup>−1</sup> makes every speed √1000 ≈ 32 times too small. This single error is the most common in board and entrance scripts.',
          '<b>Celsius instead of kelvin.</b> Like every gas relation, these use absolute temperature. Always convert before taking the square root.',
          '<b>Confusing the three speeds — or their coefficients.</b> Remember √3 (rms), √(8/π) (average), √2 (most probable), in the “RAM” order. Mixing up which formula carries which coefficient is a classic trap, especially <i>v</i><sub>av</sub> (the only one with π).',
          '<b>Average velocity vs average speed.</b> The mean velocity vector is zero (isotropy), but the mean speed is not. Questions that say “average velocity” are usually testing whether you’ll wrongly plug in <i>v</i><sub>av</sub>.',
          '<b>Misreading the Maxwell curve.</b> The vertical height <i>P</i>(<i>v</i>) is not a probability — only the area under a stretch of the curve gives the fraction of molecules in that speed range. When a question asks “what fraction of molecules have speed greater than <i>v</i><sub>mp</sub>,” it wants the area to the right of the peak, not a value read off the axis. And remember the total area is always 1, so raising the temperature redistributes molecules into the faster tail but never adds or removes any.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (ratios beat plug-ins):</b> for “compare two gases” or “change the temperature” problems, never compute full speeds. Use <i>v</i> ∝ √(<i>T</i>/<i>M</i>) directly: <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = √(<i>T</i><sub>1</sub><i>M</i><sub>2</sub>/(<i>T</i><sub>2</sub><i>M</i><sub>1</sub>)). One line, no calculator, no unit errors.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Kinetic interpretation',
            note: '½<i>m</i>⟨<i>v</i><sup>2</sup>⟩ = (3/2)<i>k</i><sub>B</sub><i>T</i> — temperature is average translational KE; same for all gases at a given <i>T</i>.',
          },
          {
            f: 'Three speeds',
            note: '<i>v</i><sub>rms</sub> = √(3<i>RT</i>/<i>M</i>), <i>v</i><sub>av</sub> = √(8<i>RT</i>/(π<i>M</i>)), <i>v</i><sub>mp</sub> = √(2<i>RT</i>/<i>M</i>).',
          },
          {
            f: 'Order (RAM)',
            note: '<i>v</i><sub>rms</sub> > <i>v</i><sub>av</sub> > <i>v</i><sub>mp</sub>, ratio √3 ∶ √(8/π) ∶ √2 ≈ 1.22 ∶ 1.13 ∶ 1.',
          },
          { f: 'Scaling', note: 'every speed ∝ √<i>T</i> and ∝ 1/√<i>M</i>.' },
          {
            f: 'Maxwell distribution',
            note: '<i>P</i>(<i>v</i>) = 4π (<i>M</i>/(2π<i>RT</i>))<sup>3/2</sup> <i>v</i><sup>2</sup> <i>e</i><sup>−<i>Mv</i>²/(2<i>RT</i>)</sup>; peak at <i>v</i><sub>mp</sub>, total area = 1, and the area between two speeds gives the fraction of molecules in that range. Higher <i>T</i> ⟹ peak shifts right, curve flattens.',
          },
          {
            f: 'Units',
            note: '<i>M</i> in kg mol<sup>−1</sup>, <i>T</i> in K, <i>k</i><sub>B</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>.',
          },
        ],
        aids: ['“Heavier = slower, hotter = faster; RAM from big to small.” And temperature alone fixes the average kinetic energy.'],
      },
      { t: 'fig', id: 'p11-12-04-d1' },
    ],
  },

  {
    n: '05',
    title: 'Degrees of Freedom and Mean Free Path',
    kalam: 'The mean free path λ is the average straight-line distance a molecule covers between two successive collisions.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dense, high-return cluster. JEE Main and NEET reliably ask for <i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> or <i>C</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub> from atomicity (monatomic/diatomic), and the mean free path’s dependence on <i>P</i> and <i>T</i>. CBSE Boards favour the statement of the equipartition law and the degrees-of-freedom count. JEE Advanced combines them — mixture specific heats, or <i>γ</i> when vibrational modes switch on.',
      },
      {
        t: 'p',
        html: 'So far our molecules have only been allowed to fly — to move through space. But a real molecule can do more than travel: a dumbbell-shaped oxygen molecule can also tumble, and at high temperatures its two atoms can vibrate along their bond like masses on a spring. Each of these independent ways of moving is a place where the molecule can stash energy. Physicists call each such independent mode a <b>degree of freedom</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture how a single coin can carry “state”: it can slide across a table (translation), it can spin on the spot (rotation), and if it were soft it could even wobble and flex (vibration). A point-like atom such as helium is like a marble — it can only slide, in three independent directions (<i>x</i>, <i>y</i>, <i>z</i>), so it has <b>3 translational degrees of freedom</b> and nothing more (a marble spinning carries no meaningful energy because it has negligible size). A diatomic molecule like nitrogen is like a tiny dumbbell — it slides in 3 directions and tumbles end-over-end about 2 axes (spinning about the bond axis itself stores nothing, since the atoms sit on that line), giving <b>5 degrees of freedom</b> at room temperature. Heat it enough and the bond starts to vibrate, adding 2 more (one for vibrational kinetic energy, one for the spring’s potential energy), for <b>7</b>.',
      },
      {
        t: 'p',
        html: 'Why does spinning about the bond axis “store nothing”? Rotational kinetic energy is ½<i>Iω</i><sup>2</sup>, and the moment of inertia <i>I</i> about the line joining the two atoms is vanishingly small — almost all the mass of each atom sits essentially on that axis, so the perpendicular distance that enters <i>I</i> is negligible. With <i>I</i> ≈ 0 along the bond, no meaningful energy can be stored in that rotation, which is exactly why a diatomic molecule counts 2 rotational degrees of freedom rather than 3. The very same argument explains why a monatomic atom counts zero rotational degrees of freedom: a point-like atom has negligible moment of inertia about every axis.',
      },
      {
        t: 'p',
        html: 'Now comes the elegant part. Nature is scrupulously fair about how it shares thermal energy: it dumps exactly the same amount, ½<i>k</i><sub>B</sub><i>T</i> per molecule, into every single degree of freedom, no matter what kind. This is the <b>law of equipartition of energy</b> — energy is partitioned equally among all available modes. A molecule with <i>f</i> degrees of freedom therefore carries an average energy of <i>f</i> × ½<i>k</i><sub>B</sub><i>T</i>. This one principle is the master key: it tells us the internal energy of any ideal gas, and from there its specific heats and the all-important ratio <i>γ</i>.',
      },
      {
        t: 'p',
        html: 'The second idea in this topic is about motion between collisions. A molecule in air does not sail smoothly across the room — it ricochets off its neighbours billions of times a second, tracing a frantic zig-zag. The <b>mean free path</b> <i>λ</i> is the average straight-line distance a molecule covers between two successive collisions. It is tiny but not vanishingly so: in ordinary air it is about two hundred times the molecular size, which is exactly why gases behave the way they do — molecules are mostly free, occasionally colliding. Crowd the gas (raise pressure, raise density) and collisions come thicker and faster, so <i>λ</i> shrinks; rarefy it (pump it down) and <i>λ</i> grows, becoming as large as the whole tube in a good vacuum.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Two cautions matter. First, the degree-of-freedom count for diatomic and polyatomic gases is temperature-dependent: vibrational modes are “frozen out” at ordinary temperatures and only switch on when it is hot enough (for hydrogen, rotation itself freezes out below about 50 K). So unless told otherwise, use <i>f</i> = 3 (monatomic), <i>f</i> = 5 (diatomic), <i>f</i> = 6 (non-linear polyatomic) — the room-temperature values. Second, equipartition is a classical result; it works beautifully at ordinary temperatures but quantum mechanics modifies it at the extremes (the very freezing-out just mentioned). And the mean free path formula assumes a dilute gas of finite-sized, hard-sphere molecules.',
      },
      {
        t: 'p',
        html: 'This freezing-out is itself a fingerprint of quantum mechanics intruding on a classical theory. Classically, equipartition says every mode should always carry ½<i>k</i><sub>B</sub><i>T</i>, so a diatomic gas should always show <i>f</i> = 7. Experiment disagrees: at low temperatures the measured specific heat corresponds to <i>f</i> = 3 (only translation), rising to <i>f</i> = 5 near room temperature and only approaching <i>f</i> = 7 at high temperatures. The reason is that rotational and vibrational energies come in discrete quantum steps; when <i>k</i><sub>B</sub><i>T</i> is smaller than the gap to the first excited level, that mode simply cannot be activated and contributes nothing. The orderly switching-on of modes as temperature rises is one of the earliest clues that energy at the molecular scale is quantised.',
      },
      {
        t: 'p',
        html: 'Finally, the mean free path is not just an abstract average — it is the quantity that links the microscopic world to bulk, measurable properties. The viscosity of a gas, its thermal conductivity, and its diffusion rate can all be expressed in terms of <i>λ</i> and the molecular speed; historically, it was precisely by measuring these bulk properties and working backwards through the mean-free-path relations that scientists first estimated the sizes of molecules.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: '<b>Degrees of freedom (<i>f</i>)</b> — the number of independent ways a molecule can store energy:',
      },
      {
        t: 'table',
        title: null,
        head: ['Gas type', 'Translational', 'Rotational', 'f (room T)', 'f (high T, +vibration)'],
        rows: [
          ['Monatomic (He, Ne, Ar)', '3', '0', '<b>3</b>', '3'],
          ['Diatomic (N<sub>2</sub>, O<sub>2</sub>)', '3', '2', '<b>5</b>', '7'],
          ['Non-linear polyatomic (triatomic, e.g. H<sub>2</sub>O)', '3', '3', '<b>6</b>', '12'],
        ],
      },
      {
        t: 'def',
        term: 'Law of equipartition of energy',
        html: 'each degree of freedom carries average energy ½<i>k</i><sub>B</sub><i>T</i> per molecule (equivalently ½<i>RT</i> per mole). A molecule with <i>f</i> degrees of freedom has average energy (<i>f</i>/2)<i>k</i><sub>B</sub><i>T</i>.',
      },
      {
        t: 'formula',
        kicker: 'Internal energy of <i>n</i> moles of an ideal gas',
        main: '<i>U</i> = (<i>f</i>/2)<i>nRT</i>',
        legend: [],
        note: '(<i>U</i> depends only on temperature; SI unit J, dimension [M L<sup>2</sup> T<sup>−2</sup>].)',
      },
      {
        t: 'formula',
        kicker: 'Molar specific heats (from equipartition + Mayer’s relation)',
        main: '<i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i><br><i>C</i><sub><i>P</i></sub> = <i>C</i><sub><i>V</i></sub> + <i>R</i> = (<i>f</i>/2 + 1)<i>R</i><br><i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> = 1 + 2/<i>f</i><br>Useful inverses: <i>C</i><sub><i>V</i></sub> = <i>R</i>/(<i>γ</i> − 1), <i>C</i><sub><i>P</i></sub> = <i>γR</i>/(<i>γ</i> − 1)',
        legend: [],
        note: 'SI unit of molar specific heat: J mol<sup>−1</sup> K<sup>−1</sup>, dimension [M L<sup>2</sup> T<sup>−2</sup> mol<sup>−1</sup> K<sup>−1</sup>].',
      },
      {
        t: 'table',
        title: 'Standard values',
        head: ['Gas', 'f', 'CV', 'CP', 'γ'],
        rows: [
          ['Monatomic', '3', '3<i>R</i>/2', '5<i>R</i>/2', '5/3 ≈ 1.67'],
          ['Diatomic', '5', '5<i>R</i>/2', '7<i>R</i>/2', '7/5 = 1.40'],
          ['Non-linear polyatomic', '6', '3<i>R</i>', '4<i>R</i>', '4/3 ≈ 1.33'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Mean free path',
        main: '<i>λ</i> = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>) = <i>k</i><sub>B</sub><i>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>)',
        legend: ['<i>d</i> = molecular diameter', '<i>n</i> = <i>N</i>/<i>V</i> = number density ([L<sup>−3</sup>])'],
        note: 'SI unit of <i>λ</i>: m, dimension [L]. The quantity π<i>d</i><sup>2</sup> is the <b>collision cross-section</b>, and the √2 accounts for the relative motion of all molecules.',
      },
      {
        t: 'formula',
        kicker: 'Dependences of <i>λ</i>',
        main: '<i>λ</i> ∝ 1/<i>n</i>,   <i>λ</i> ∝ 1/<i>d</i><sup>2</sup>,   <i>λ</i> ∝ <i>T</i> (const <i>P</i>),   <i>λ</i> ∝ 1/<i>P</i> (const <i>T</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Collision frequency.</b> Closely related to <i>λ</i> is the average number of collisions a molecule suffers per second, the collision frequency <i>ν</i>. Since a molecule covers an average distance <i>λ</i> between collisions while moving at average speed <i>v</i><sub>av</sub>,',
      },
      {
        t: 'formula',
        kicker: 'Collision frequency',
        main: '<i>ν</i> = <i>v</i><sub>av</sub>/<i>λ</i><br><i>τ</i> = 1/<i>ν</i> = <i>λ</i>/<i>v</i><sub>av</sub>',
        legend: [],
        note: 'where <i>τ</i> is the mean time between collisions. In ordinary air a molecule collides several billion times each second.',
      },
      {
        t: 'p',
        html: '<b>Degrees of freedom and specific heat of a solid.</b> The atoms of a crystalline solid cannot translate or rotate freely; instead each vibrates about its lattice site along 3 axes. Each vibration carries 2 degrees of freedom (kinetic + potential), giving <i>f</i> = 3 × 2 = 6. Equipartition then predicts a molar internal energy <i>U</i> = (6/2)<i>RT</i> = 3<i>RT</i> and a molar specific heat <i>C</i> = 3<i>R</i> ≈ 25 J mol<sup>−1</sup> K<sup>−1</sup> — the <b>law of Dulong and Petit</b>, which most solids obey well at ordinary temperatures.',
      },
      {
        t: 'p',
        html: '<b>Specific heat of water.</b> The same solid-like reasoning explains water’s famously high heat capacity. Treat each atom in a water molecule as if bound in a solid, with 6 degrees of freedom contributing 3<i>R</i> per mole of atoms. A water molecule (H<sub>2</sub>O) has 3 atoms, so one mole of water behaves like 3 moles of vibrating atoms:<br><i>C</i><sub>water</sub> = 3 × 3<i>R</i> = 9<i>R</i> ≈ 9 × 8.314 ≈ 75 J mol<sup>−1</sup> K<sup>−1</sup><br>This matches the measured molar heat capacity of water remarkably well (the familiar specific heat 4186 J kg<sup>−1</sup> K<sup>−1</sup> times the molar mass 0.018 kg mol<sup>−1</sup> gives ≈ 75 J mol<sup>−1</sup> K<sup>−1</sup>) — a small triumph of the equipartition idea applied beyond gases.',
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Part A — Specific heats and <i>γ</i> from equipartition.</b><br><b>Step 1 — internal energy.</b> By equipartition, a molecule with <i>f</i> degrees of freedom has average energy (<i>f</i>/2)<i>k</i><sub>B</sub><i>T</i>. For <i>n</i> moles (<i>N</i> = <i>nN</i><sub>A</sub> molecules), the total internal energy is<br><i>U</i> = <i>N</i> · (<i>f</i>/2)<i>k</i><sub>B</sub><i>T</i> = <i>nN</i><sub>A</sub> · (<i>f</i>/2)<i>k</i><sub>B</sub><i>T</i> = (<i>f</i>/2)<i>nRT</i>   (using <i>N</i><sub>A</sub><i>k</i><sub>B</sub> = <i>R</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 2 — molar heat capacity at constant volume.</b> <i>C</i><sub><i>V</i></sub> is the heat needed to raise one mole by one kelvin at constant volume. At constant volume no work is done, so all the heat goes into internal energy:<br><i>C</i><sub><i>V</i></sub> = (1/<i>n</i>)(d<i>U</i>/d<i>T</i>)<sub><i>V</i></sub> = (1/<i>n</i>) · (<i>f</i>/2)<i>nR</i> = (<i>f</i>/2)<i>R</i>',
      },
      {
        t: 'p',
        html: '<b>Step 3 — molar heat capacity at constant pressure.</b> At constant pressure the gas also does expansion work as it is heated. Mayer’s relation (derived in thermodynamics) captures this: <i>C</i><sub><i>P</i></sub> − <i>C</i><sub><i>V</i></sub> = <i>R</i>. Hence<br><i>C</i><sub><i>P</i></sub> = <i>C</i><sub><i>V</i></sub> + <i>R</i> = (<i>f</i>/2)<i>R</i> + <i>R</i> = (<i>f</i>/2 + 1)<i>R</i> = ((<i>f</i> + 2)/2)<i>R</i>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — the adiabatic ratio.</b> Dividing,<br><i>γ</i> = <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> = [((<i>f</i> + 2)/2)<i>R</i>]/[(<i>f</i>/2)<i>R</i>] = (<i>f</i> + 2)/<i>f</i> = 1 + 2/<i>f</i>',
      },
      {
        t: 'p',
        html: '<b>Reading the result:</b> because <i>γ</i> depends only on <i>f</i>, measuring <i>γ</i> experimentally tells you the atomicity of a gas. Monatomic (<i>f</i> = 3) gives <i>γ</i> = 5/3; diatomic (<i>f</i> = 5) gives 7/5; the more ways a molecule can store energy, the smaller <i>γ</i> — extra modes soak up heat without raising temperature as fast, lowering the ratio toward 1.',
      },
      {
        t: 'p',
        html: '<b>Part B — Mean free path, by the collision-cylinder argument.</b><br><b>Step 1 — set up the collision volume.</b> Model molecules as hard spheres of diameter <i>d</i>. A moving molecule collides with another whenever their centres come within a distance <i>d</i>. So picture the moving molecule sweeping out a cylinder of radius <i>d</i> (cross-sectional area π<i>d</i><sup>2</sup>) as it travels. In time <i>t</i>, moving at speed <i>v</i>, it sweeps a cylinder of length <i>vt</i> and volume π<i>d</i><sup>2</sup> · <i>vt</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — count the collisions.</b> If there are <i>n</i> molecules per unit volume, the number of molecular centres lying in that swept cylinder — i.e. the number of collisions in time <i>t</i> — is <i>n</i> π<i>d</i><sup>2</sup><i>vt</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — distance per collision.</b> The mean free path is total distance travelled divided by number of collisions:<br><i>λ</i> = <i>vt</i>/(<i>n</i> π<i>d</i><sup>2</sup><i>vt</i>) = 1/(<i>n</i> π<i>d</i><sup>2</sup>)',
      },
      {
        t: 'p',
        html: '<b>Step 4 — the √2 correction.</b> This simple count assumed only one molecule moves while the rest stand still. In reality all molecules move, so what matters is the relative speed between colliding pairs; averaging the relative speed introduces a factor of √2 in the denominator:<br><i>λ</i> = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 5 — pressure–temperature form.</b> Substituting the number density from the ideal gas law, <i>n</i> = <i>N</i>/<i>V</i> = <i>P</i>/(<i>k</i><sub>B</sub><i>T</i>):<br><i>λ</i> = <i>k</i><sub>B</sub><i>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>)<br>which makes the dependences explicit: at fixed <i>P</i>, <i>λ</i> grows with <i>T</i>; at fixed <i>T</i>, <i>λ</i> falls as <i>P</i> rises.',
      },
      {
        t: 'p',
        html: '<b>Part C — collision frequency.</b> Once <i>λ</i> is known, the rate of collisions follows immediately. A molecule travelling at average speed <i>v</i><sub>av</sub> covers, on average, one mean free path between collisions, so the number of collisions per second is<br><i>ν</i> = <i>v</i><sub>av</sub>/<i>λ</i> = √2 π<i>d</i><sup>2</sup><i>n</i> <i>v</i><sub>av</sub><br>The reciprocal, <i>τ</i> = 1/<i>ν</i>, is the average time between collisions. This connects all three threads of the chapter: <i>v</i><sub>av</sub> comes from the Maxwell distribution (Topic 04), <i>λ</i> from the collision geometry here, and <i>n</i> from the ideal gas law (Topic 02). Notice that as pressure rises (denser gas), <i>λ</i> falls and <i>ν</i> climbs in proportion — squeezing a gas makes its molecules collide both more often and over shorter free flights.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the internal energy of 3.0 moles of a diatomic ideal gas at 300 K (assume only translational and rotational modes are active). Take <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>.',
        steps: [
          '<b>Given:</b> diatomic at room temperature ⟹ <i>f</i> = 5; <i>n</i> = 3.0; <i>T</i> = 300 K.',
          '<i>U</i> = (<i>f</i>/2)<i>nRT</i> = (5/2) × 3.0 × 8.314 × 300<br><i>U</i> = 2.5 × 3.0 × 2494.2',
          'Note we used <i>f</i> = 5, not 7 — the problem specified only translational and rotational modes (room-temperature behaviour), so vibration is excluded.',
        ],
        ans: 'The internal energy is about 1.87 × 10<sup>4</sup> J.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The ratio of specific heats of a gas is found to be <i>γ</i> = 1.40. Identify the atomicity of the gas and write its <i>C</i><sub><i>V</i></sub>.',
        steps: [
          '<b>Speed method:</b> use <i>γ</i> = 1 + 2/<i>f</i>, so <i>f</i> = 2/(<i>γ</i> − 1) = 2/0.40 = 5. A gas with <i>f</i> = 5 is <b>diatomic</b>, and <i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i> = (5/2)<i>R</i> = 2.5<i>R</i>.',
          '<b>The trap:</b> the three benchmark <i>γ</i> values — 1.67 (monatomic), 1.40 (diatomic), 1.33 (polyatomic) — are worth memorising so you can identify the gas by sight. A student who misremembers 1.4 as monatomic, or who computes <i>f</i> = 2/<i>γ</i> instead of 2/(<i>γ</i> − 1), lands on the wrong option. The “−1” in the denominator is the whole game.',
        ],
        ans: 'Diatomic; <i>C</i><sub><i>V</i></sub> = (5/2)<i>R</i> ≈ 20.8 J mol<sup>−1</sup> K<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Estimate the mean free path of a nitrogen molecule at 300 K and a pressure of 1.0 × 10<sup>5</sup> Pa. Take the molecular diameter <i>d</i> = 3.7 × 10<sup>−10</sup> m and <i>k</i><sub>B</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>.',
        steps: [
          '<b>Concept — use the pressure–temperature form directly:</b><br><i>λ</i> = <i>k</i><sub>B</sub><i>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>)',
          '<b>Numerator:</b> <i>k</i><sub>B</sub><i>T</i> = 1.38 × 10<sup>−23</sup> × 300 = 4.14 × 10<sup>−21</sup> J.',
          '<b>Denominator:</b> √2 π<i>d</i><sup>2</sup><i>P</i> = 1.414 × 3.1416 × (3.7 × 10<sup>−10</sup>)<sup>2</sup> × (1.0 × 10<sup>5</sup>). With <i>d</i><sup>2</sup> = 1.369 × 10<sup>−19</sup> m<sup>2</sup>: 1.414 × 3.1416 × 1.369 × 10<sup>−19</sup> × 10<sup>5</sup> = 6.08 × 10<sup>−14</sup>.',
          '<i>λ</i> = (4.14 × 10<sup>−21</sup>)/(6.08 × 10<sup>−14</sup>) ≈ 6.8 × 10<sup>−8</sup> m ≈ 68 nm',
          'As a follow-on, the collision frequency is easy to estimate: nitrogen’s average speed at 300 K is roughly <i>v</i><sub>av</sub> ≈ 475 m s<sup>−1</sup>, so<br><i>ν</i> = <i>v</i><sub>av</sub>/<i>λ</i> ≈ 475/(6.8 × 10<sup>−8</sup>) ≈ 7 × 10<sup>9</sup> collisions per second.',
          'Each nitrogen molecule therefore suffers about seven billion collisions every second — a vivid sense of how furiously busy a seemingly still volume of air really is.',
        ],
        ans: 'The mean free path is roughly 7 × 10<sup>−8</sup> m — about 200 times the molecular diameter, consistent with the “mostly free, occasionally colliding” picture of a gas.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A gas mixture is made of 2.0 moles of helium (monatomic) and 3.0 moles of oxygen (diatomic, room temperature). Find the effective <i>γ</i> of the mixture.',
        steps: [
          '<b>Concept — heat capacities add by moles.</b> For a mixture, the total internal energy is the sum of the parts, so the molar <i>C</i><sub><i>V</i></sub> of the mixture is the mole-weighted average:<br><i>C</i><sub><i>V</i>,mix</sub> = (<i>n</i><sub>1</sub><i>C</i><sub><i>V</i>1</sub> + <i>n</i><sub>2</sub><i>C</i><sub><i>V</i>2</sub>)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>)',
          'With <i>C</i><sub><i>V</i>,He</sub> = (3/2)<i>R</i> and <i>C</i><sub><i>V</i>,O₂</sub> = (5/2)<i>R</i>:<br><i>C</i><sub><i>V</i>,mix</sub> = (2.0 × (3/2)<i>R</i> + 3.0 × (5/2)<i>R</i>)/(2.0 + 3.0) = (3<i>R</i> + 7.5<i>R</i>)/5.0 = 10.5<i>R</i>/5.0 = 2.1<i>R</i>',
          'By Mayer’s relation the mixture still obeys <i>C</i><sub><i>P</i>,mix</sub> = <i>C</i><sub><i>V</i>,mix</sub> + <i>R</i> = 3.1<i>R</i>. Therefore<br><i>γ</i><sub>mix</sub> = <i>C</i><sub><i>P</i>,mix</sub>/<i>C</i><sub><i>V</i>,mix</sub> = 3.1<i>R</i>/(2.1<i>R</i>)',
          'The crucial insight is that you cannot average the two <i>γ</i> values directly; you must average <i>C</i><sub><i>V</i></sub> (which is additive through energy) and only then form the ratio.',
        ],
        ans: 'The mixture’s <i>γ</i> ≈ 1.48 — sitting neatly between the pure monatomic (1.67) and pure diatomic (1.40) values, weighted toward the more abundant oxygen.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the law of equipartition of energy and use it to find the total internal energy of 2.0 mol of a monatomic ideal gas at 400 K.',
            a: '<i>U</i> = (3/2)<i>nRT</i> = (3/2)(2.0)(8.314)(400) ≈ 9.98 × 10<sup>3</sup> J',
          },
          {
            q: '[NEET] A polyatomic gas has 6 degrees of freedom. Find its <i>γ</i>.',
            a: '<i>γ</i> = 1 + 2/6 = 4/3 ≈ 1.33',
          },
          {
            q: '[JEE Main] For a diatomic gas at room temperature, find <i>C</i><sub><i>P</i></sub>, <i>C</i><sub><i>V</i></sub>, and the ratio <i>C</i><sub><i>P</i></sub>/<i>C</i><sub><i>V</i></sub> in terms of <i>R</i>.',
            a: '<i>C</i><sub><i>V</i></sub> = (5/2)<i>R</i>, <i>C</i><sub><i>P</i></sub> = (7/2)<i>R</i>, <i>γ</i> = 1.4',
          },
          {
            q: '[JEE Main] The mean free path of a gas molecule is <i>λ</i> at pressure <i>P</i> and temperature <i>T</i>. What is the new mean free path if the pressure is doubled while the temperature is kept constant?',
            a: '<i>λ</i>/2 (since <i>λ</i> ∝ 1/<i>P</i> at constant <i>T</i>)',
          },
          {
            q: '[JEE Advanced] A diatomic gas is heated to a temperature high enough that its vibrational mode becomes fully active. Find the new value of <i>γ</i>, and the fractional change from its room-temperature value.',
            a: '<i>f</i> goes 5 → 7, so <i>γ</i> = 1 + 2/7 = 9/7 ≈ 1.29; it drops from 1.40 by about 8%.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'At room temperature, the number of degrees of freedom of a diatomic gas molecule is:',
        opts: [
          { label: '3', nudge: '<b>Trap (A):</b> counting only translation (correct for a monatomic gas).' },
          { label: '5', nudge: null },
          { label: '6', nudge: '<b>(C):</b> over-counting rotation as 3 — but rotation about the bond axis stores no energy.' },
          {
            label: '7',
            nudge: '<b>(D):</b> the high-temperature value, valid only once vibration is excited; the qualifier “room temperature” rules it out.',
          },
        ],
        correct: 1,
        solution: 'A diatomic molecule has 3 translational + 2 rotational = 5 active degrees of freedom at room temperature; vibration is frozen out.',
      },
      {
        t: 'mcq',
        q: 'A gas has <i>γ</i> = 5/3. The gas is:',
        opts: [
          { label: 'diatomic', nudge: '<b>Trap (A):</b> diatomic has <i>γ</i> = 1.4, not 1.67.' },
          { label: 'monatomic', nudge: null },
          { label: 'triatomic non-linear', nudge: '<b>(C):</b> non-linear polyatomic has <i>γ</i> = 4/3.' },
          {
            label: 'diatomic with vibration',
            nudge: '<b>(D):</b> adding vibration increases <i>f</i> and lowers <i>γ</i> below 1.4, the opposite direction.',
          },
        ],
        correct: 1,
        solution: '<i>γ</i> = 1 + 2/<i>f</i> = 5/3 gives <i>f</i> = 3, the signature of a monatomic gas (only translation).',
      },
      {
        t: 'mcq',
        q: 'At constant temperature, if the pressure of a gas is increased to four times its original value, its mean free path becomes:',
        opts: [
          { label: '4<i>λ</i>', nudge: '<b>Trap (A):</b> treating <i>λ</i> as directly proportional to <i>P</i>.' },
          {
            label: '2<i>λ</i>',
            nudge: '<b>(B):</b> taking <i>λ</i> ∝ √<i>P</i> — wrong in direction as well as size: <i>λ</i> falls, not rises, when the pressure goes up.',
          },
          {
            label: '<i>λ</i>/2',
            nudge: '<b>(C):</b> getting the inverse relationship but with the wrong factor — confusing <i>P</i> with √<i>P</i>.',
          },
          { label: '<i>λ</i>/4', nudge: null },
        ],
        correct: 3,
        solution: 'From <i>λ</i> = <i>k</i><sub>B</sub><i>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>), at constant <i>T</i> we have <i>λ</i> ∝ 1/<i>P</i>. Quadrupling <i>P</i> divides <i>λ</i> by 4. Higher pressure means a denser gas and more frequent collisions, so <i>λ</i> must shrink.',
      },
      {
        t: 'mcq',
        q: 'According to the law of equipartition, the total energy associated with the rotational motion of one mole of a diatomic gas at temperature <i>T</i> is:',
        opts: [
          { label: '½<i>RT</i>', nudge: '<b>Trap (A):</b> counting only one rotational mode.' },
          { label: '<i>RT</i>', nudge: null },
          { label: '(3/2)<i>RT</i>', nudge: '<b>(C):</b> using the translational share (3 × ½<i>RT</i>) instead of rotational.' },
          {
            label: '(5/2)<i>RT</i>',
            nudge: '<b>(D):</b> using the total room-temperature energy ((5/2)<i>RT</i>) rather than the rotational part alone.',
          },
        ],
        correct: 1,
        solution: 'A diatomic molecule has 2 rotational degrees of freedom, each carrying ½<i>RT</i> per mole, so rotational energy = 2 × ½<i>RT</i> = <i>RT</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b><i>f</i> = 5 vs <i>f</i> = 7 for diatomic gases.</b> Use 5 at room temperature and 7 only when the problem explicitly invokes vibration or “high temperature.” Defaulting to the wrong one flips <i>γ</i> between 1.4 and 1.29.',
          '<b>Vibration adds two degrees of freedom, not one.</b> Each vibrational mode contributes one kinetic and one potential degree of freedom (½<i>k</i><sub>B</sub><i>T</i> each), so a single vibration adds 2 to <i>f</i>, not 1.',
          '<b>Using <i>k</i><sub>B</sub> where <i>R</i> belongs (or vice-versa).</b> Molar quantities (<i>C</i><sub><i>V</i></sub>, <i>C</i><sub><i>P</i></sub>, <i>U</i> = (<i>f</i>/2)<i>nRT</i>) use <i>R</i>; per-molecule energies use <i>k</i><sub>B</sub>. Mixing them up costs a factor of <i>N</i><sub>A</sub>.',
          '<b>Averaging <i>γ</i> for a mixture.</b> You cannot average <i>γ</i> values directly. Average <i>C</i><sub><i>V</i></sub> by moles, add <i>R</i> for <i>C</i><sub><i>P</i></sub>, then take the ratio. The reason is that internal energy is additive (the gases share the same temperature and their energies simply sum), so <i>C</i><sub><i>V</i></sub> is the mole-weighted quantity; <i>γ</i>, being a ratio, is not additive and averaging it directly gives a physically meaningless number.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (identify gases by <i>γ</i>):</b> memorise the trio 1.67/1.40/1.33 for mono/di/poly. The instant a problem gives <i>γ</i>, you know <i>f</i>, <i>C</i><sub><i>V</i></sub>, and <i>C</i><sub><i>P</i></sub> without any algebra — and you can sanity-check any answer by recalling that more atoms ⟹ smaller <i>γ</i>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Degrees of freedom (room <i>T</i>)',
            note: 'monatomic 3, diatomic/linear 5, non-linear polyatomic 6; vibration adds 2 each at high <i>T</i>.',
          },
          { f: 'Equipartition', note: '½<i>k</i><sub>B</sub><i>T</i> per degree of freedom per molecule (½<i>RT</i> per mole).' },
          { f: 'Internal energy', note: '<i>U</i> = (<i>f</i>/2)<i>nRT</i> (temperature only).' },
          {
            f: 'Specific heats',
            note: '<i>C</i><sub><i>V</i></sub> = (<i>f</i>/2)<i>R</i>, <i>C</i><sub><i>P</i></sub> = (<i>f</i>/2 + 1)<i>R</i>, <i>γ</i> = 1 + 2/<i>f</i>; also <i>C</i><sub><i>V</i></sub> = <i>R</i>/(<i>γ</i> − 1).',
          },
          { f: '<i>γ</i> benchmarks', note: '5/3 ≈ 1.67 (mono), 7/5 = 1.40 (di), 4/3 ≈ 1.33 (poly).' },
          {
            f: 'Mean free path',
            note: '<i>λ</i> = 1/(√2 π<i>d</i><sup>2</sup><i>n</i>) = <i>k</i><sub>B</sub><i>T</i>/(√2 π<i>d</i><sup>2</sup><i>P</i>); <i>λ</i> ∝ <i>T</i>, ∝ 1/<i>P</i>, ∝ 1/<i>d</i><sup>2</sup>.',
          },
          { f: 'Collision frequency', note: '<i>ν</i> = <i>v</i><sub>av</sub>/<i>λ</i>.' },
          {
            f: 'Solids obey Dulong–Petit',
            note: '<i>C</i> = 3<i>R</i> ≈ 25 J mol<sup>−1</sup> K<sup>−1</sup>; water <i>C</i> = 9<i>R</i> ≈ 75 J mol<sup>−1</sup> K<sup>−1</sup> (3 atoms × 3<i>R</i>).',
          },
        ],
        aids: ['“Half-kT to every mode.” “More atoms, smaller gamma.” “Squeeze the gas, shrink the path and quicken the collisions.”'],
      },
      { t: 'fig', id: 'p11-12-05-d1' },
    ],
  },
];
