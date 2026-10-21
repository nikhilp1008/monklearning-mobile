import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Additional Topics A to C, word for word from the Class 11
 * Physics Master Reference, pages 924 to 935: the addenda's shared opening
 * (p. 924, set at the head of Addendum A), then A Energy Method for Time
 * Period & The Potential-Energy Curve (pp. 924 to 929), B Spring Systems
 * Beyond Series and Parallel (pp. 929 to 932) and C Phase, Time, and
 * Fraction-of-Period Calculations (pp. 932 to 935). Each addendum prints its
 * own practice problems and answers. These pages print no drawings (their
 * two grids are tables).
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Energy Method for Time Period & The Potential-Energy Curve',
    extra: true,
    kalam:
      'The energy method is the universal backup: write total energy E = K + U, differentiate once, set dE/dt = 0, and the equation of motion falls out with ω² identified automatically.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the kinematics, energy, standard pendulums and springs, damping, forcing, the reference circle, and three “exotic” SHM systems. Six JEE patterns are still standing outside the door, and each one is a marriage of two things the chapter already teaches separately. Addendum A marries the energy conservation of Topic 02 to the “find <i>ω</i>” recipe of Topic 01: the energy method (d<i>E</i>/d<i>t</i> = 0) solves systems where forces are messy but energy is clean. Addendum B goes back to Topic 03’s spring combinations and adds the pieces the chapter omits — springs with mass, springs cut and rejoined, and springs separated by masses. Addendum C takes the phase-circle picture of Topic 05 and turns it into a stopwatch: exact time-between-positions, fraction-of-period-in-region, and the phase-difference shortcuts that replace integration. Addendum D opens Topic 05’s superposition to different frequencies — beats, amplitude modulation, and the exact envelope that JEE Main asks for by name. Addendum E deepens Topic 04’s damping: logarithmic decrement, the distinction between amplitude resonance and velocity resonance, and the power-absorption curve that decides “sharpness” in Advanced. Addendum F is the “prove it’s SHM” laboratory: the potential-energy-curve test, the small-oscillation expansion, and a menu of non-standard systems (rolling cylinder, U-tube with unequal arms, ball in a spherical bowl, piston in gas) that all collapse to the same three-line derivation.<br><br>Numbering continues from the chapter’s Topic 05. Nothing here is new theory. Every method below is the energy method, the force method, or the phase-circle geometry, applied one step earlier or one dimension wider.',
      },
      {
        t: 'p',
        html: 'Topic 01 Derivation 3 and Topic 05 Derivation 3 both say: write the net force, show it is −<i>k</i><sub>eff</sub><i>x</i>, read off <i>ω</i>. That works when forces are visible. In many JEE systems (a piston compressing gas, a floating body with non-uniform cross-section, a particle in a potential well <i>U</i>(<i>x</i>)) the force is either obscure or easier to get from energy. The energy method is the universal backup: write total energy <i>E</i> = <i>K</i> + <i>U</i>, differentiate once, set d<i>E</i>/d<i>t</i> = 0, and the equation of motion falls out with <i>ω</i><sup>2</sup> identified automatically.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Energy recipe (works for 1-D conservative systems)',
        steps: [
          '<b>Choose the generalised coordinate <i>q</i>.</b> For a translating mass <i>q</i> = <i>x</i>; for a rolling cylinder <i>q</i> = <i>x</i> (centre displacement) or <i>θ</i>; for a pendulum <i>q</i> = <i>θ</i>.',
          '<b>Write the kinetic energy <i>K</i>.</b> If the system has rotation, <i>K</i> = ½<i>mv</i><sub>cm</sub><sup>2</sup> + ½<i>I</i><sub>cm</sub><i>ω</i><sup>2</sup>. Express every speed in terms of <i>q̇</i>.',
          '<b>Write the potential energy <i>U</i>(<i>q</i>).</b> For a spring <i>U</i> = ½<i>kx</i><sup>2</sup>; for gravity <i>U</i> = <i>mgy</i><sub>cm</sub>(<i>q</i>); for a gas piston <i>U</i> = −∫<i>P</i> d<i>V</i>; for an arbitrary potential <i>U</i>(<i>q</i>) is given or deduced.',
          '<b>Total energy</b> <i>E</i> = <i>K</i> + <i>U</i> = constant. Differentiate with respect to time: d<i>E</i>/d<i>t</i> = 0.',
          '<b>Factor out <i>q̇</i>.</b> The remaining bracket is the equation of motion. It will have the form <i>q̈</i> + <i>ω</i><sup>2</sup><i>q</i> = 0 (for small <i>q</i>). Read off <i>ω</i>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Potential-energy-curve test (finds <i>ω</i> without knowing the force law).</b> If a particle of mass <i>m</i> moves in a potential <i>U</i>(<i>x</i>) with a stable equilibrium at <i>x</i> = 0, then for small <i>x</i>:<br><i>U</i>(<i>x</i>) ≈ <i>U</i>(0) + ½<i>U</i>″(0) <i>x</i><sup>2</sup>,<br>and the motion is SHM with<br><i>ω</i> = √(<i>U</i>″(0)/<i>m</i>).<br>No force calculation needed — just expand <i>U</i> to second order.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>U</i> has units J = kg m<sup>2</sup> s<sup>−2</sup>. <i>U</i>″ has units kg s<sup>−2</sup>. <i>U</i>″/<i>m</i> has units s<sup>−2</sup>. √(<i>U</i>″/<i>m</i>) has units s<sup>−1</sup> = rad s<sup>−1</sup>. Correct.',
      },

      { t: 'part', title: 'Standard shortcuts' },
      {
        t: 'table',
        title: null,
        head: ['System', 'Coordinate', 'K', 'U', 'ω'],
        rows: [
          ['Spring–mass (horizontal)', '<i>x</i>', '½<i>mẋ</i><sup>2</sup>', '½<i>kx</i><sup>2</sup>', '√(<i>k</i>/<i>m</i>)'],
          ['Spring–mass (vertical)', '<i>y</i> from equilibrium', '½<i>mẏ</i><sup>2</sup>', '½<i>ky</i><sup>2</sup>', '√(<i>k</i>/<i>m</i>)'],
          ['Simple pendulum', '<i>θ</i>', '½<i>mL</i><sup>2</sup><i>θ̇</i><sup>2</sup>', '½<i>mgLθ</i><sup>2</sup>', '√(<i>g</i>/<i>L</i>)'],
          ['Physical pendulum', '<i>θ</i>', '½<i>Iθ̇</i><sup>2</sup>', '½<i>mgdθ</i><sup>2</sup>', '√(<i>mgd</i>/<i>I</i>)'],
          ['Torsional pendulum', '<i>θ</i>', '½<i>Iθ̇</i><sup>2</sup>', '½<i>κθ</i><sup>2</sup>', '√(<i>κ</i>/<i>I</i>)'],
          ['Liquid in U-tube', '<i>y</i>', '½(<i>ρAL</i>)<i>ẏ</i><sup>2</sup>', '½(2<i>ρAg</i>)<i>y</i><sup>2</sup>', '√(2<i>g</i>/<i>L</i>)'],
          ['Floating body (area <i>A</i>)', '<i>y</i>', '½<i>mẏ</i><sup>2</sup>', '½(<i>ρAg</i>)<i>y</i><sup>2</sup>', '√(<i>ρAg</i>/<i>m</i>)'],
          [
            'Piston in gas (isothermal)',
            '<i>x</i>',
            '½<i>mẋ</i><sup>2</sup>',
            '½(<i>P</i><sub>0</sub><i>A</i><sup>2</sup>/<i>V</i><sub>0</sub>)<i>x</i><sup>2</sup>',
            '√(<i>P</i><sub>0</sub><i>A</i><sup>2</sup>/(<i>mV</i><sub>0</sub>))',
          ],
          [
            'Piston in gas (adiabatic)',
            '<i>x</i>',
            '½<i>mẋ</i><sup>2</sup>',
            '½(<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>/<i>V</i><sub>0</sub>)<i>x</i><sup>2</sup>',
            '√(<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>/(<i>mV</i><sub>0</sub>))',
          ],
          ['Particle in <i>U</i>(<i>x</i>)', '<i>x</i>', '½<i>mẋ</i><sup>2</sup>', '<i>U</i>(<i>x</i>)', '√(<i>U</i>″(0)/<i>m</i>)'],
        ],
        note: '<i>ρ</i> — density (kg m<sup>−3</sup>); <i>A</i> — area (m<sup>2</sup>); <i>L</i> — length (m); <i>V</i><sub>0</sub> — equilibrium volume (m<sup>3</sup>); <i>P</i><sub>0</sub> — equilibrium pressure (Pa); <i>γ</i> — adiabatic index (dimensionless); <i>κ</i> — torsional constant (N m rad<sup>−1</sup>).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Energy Method on a Rolling Cylinder',
        q: 'A solid cylinder of mass <i>M</i> and radius <i>R</i> rolls without slipping on a horizontal surface, attached to a spring of constant <i>k</i> fixed to a wall. The spring is horizontal and attached to the cylinder’s axle. Find the period of small oscillations.',
        steps: [
          '<b>Step 1 — Coordinate.</b> Let <i>x</i> be the displacement of the centre of mass from equilibrium (spring relaxed at <i>x</i> = 0).',
          '<b>Step 2 — Kinetic energy.</b> Rolling without slipping ⇒ <i>v</i><sub>cm</sub> = <i>ẋ</i> and <i>ω</i><sub>cyl</sub> = <i>v</i><sub>cm</sub>/<i>R</i> = <i>ẋ</i>/<i>R</i>. Moment of inertia of a solid cylinder about its axis: <i>I</i> = ½<i>MR</i><sup>2</sup>.<br><i>K</i> = ½<i>Mẋ</i><sup>2</sup> + ½<i>Iω</i><sub>cyl</sub><sup>2</sup> = ½<i>Mẋ</i><sup>2</sup> + ½(½<i>MR</i><sup>2</sup>)(<i>ẋ</i>/<i>R</i>)<sup>2</sup> = ½<i>Mẋ</i><sup>2</sup> + ¼<i>Mẋ</i><sup>2</sup> = ¾<i>Mẋ</i><sup>2</sup>.',
          '<b>Step 3 — Potential energy.</b> Only the spring stores energy (gravity constant).<br><i>U</i> = ½<i>kx</i><sup>2</sup>.',
          '<b>Step 4 — Total energy and differentiation.</b><br><i>E</i> = ¾<i>Mẋ</i><sup>2</sup> + ½<i>kx</i><sup>2</sup> = constant.<br>d<i>E</i>/d<i>t</i> = (3/2)<i>Mẋẍ</i> + <i>kxẋ</i> = 0.',
          '<b>Step 5 — Factor out <i>ẋ</i> and read <i>ω</i>.</b><br><i>ẋ</i>((3/2)<i>Mẍ</i> + <i>kx</i>) = 0 ⟹ <i>ẍ</i> + (2<i>k</i>/(3<i>M</i>))<i>x</i> = 0.<br>Hence<br><i>ω</i> = √(2<i>k</i>/(3<i>M</i>)),   <i>T</i> = 2π√(3<i>M</i>/(2<i>k</i>)).',
          '<b>Check.</b> If the cylinder were sliding frictionless (no rotation), <i>K</i> = ½<i>Mẋ</i><sup>2</sup> and <i>ω</i> = √(<i>k</i>/<i>M</i>). Rolling adds rotational inertia, so the system is “heavier” dynamically — the period increases by a factor √(3/2) ≈ 1.22. Correct direction.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Potential-Energy-Curve Method',
        q: 'A particle of mass <i>m</i> moves in a potential <i>U</i>(<i>x</i>) = <i>U</i><sub>0</sub>(<i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> − <i>x</i><sup>4</sup>/<i>b</i><sup>4</sup>) with <i>U</i><sub>0</sub> > 0, <i>a</i> > 0, <i>b</i> > 0. Show that for small oscillations about the stable equilibrium the angular frequency is <i>ω</i> = √(2<i>U</i><sub>0</sub>/(<i>ma</i><sup>2</sup>)), independent of <i>b</i>.',
        steps: [
          '<b>Step 1 — Find equilibrium.</b> <i>U</i>′(<i>x</i>) = <i>U</i><sub>0</sub>(2<i>x</i>/<i>a</i><sup>2</sup> − 4<i>x</i><sup>3</sup>/<i>b</i><sup>4</sup>) = 0. Roots: <i>x</i> = 0 and <i>x</i> = ±<i>b</i><sup>2</sup>/(<i>a</i>√2).',
          '<b>Step 2 — Test stability via second derivative.</b><br><i>U</i>″(<i>x</i>) = <i>U</i><sub>0</sub>(2/<i>a</i><sup>2</sup> − 12<i>x</i><sup>2</sup>/<i>b</i><sup>4</sup>).<br>At <i>x</i> = 0: <i>U</i>″(0) = 2<i>U</i><sub>0</sub>/<i>a</i><sup>2</sup> > 0 ⇒ stable minimum. At <i>x</i> = ±<i>b</i><sup>2</sup>/(<i>a</i>√2): <i>U</i>″ = 2<i>U</i><sub>0</sub>/<i>a</i><sup>2</sup> − (12<i>U</i><sub>0</sub>/<i>b</i><sup>4</sup>)(<i>b</i><sup>4</sup>/(2<i>a</i><sup>2</sup>)) = −4<i>U</i><sub>0</sub>/<i>a</i><sup>2</sup> < 0 ⇒ unstable maxima.',
          '<b>Step 3 — Read off <i>ω</i>.</b><br><i>ω</i> = √(<i>U</i>″(0)/<i>m</i>) = √(2<i>U</i><sub>0</sub>/(<i>ma</i><sup>2</sup>)).<br>The parameter <i>b</i> controls the barrier height and width but not the curvature at the bottom. This is a standard JEE Advanced “distractor parameter” trap.',
          '<b>Check.</b> Units: <i>U</i><sub>0</sub> in J, <i>a</i> in m, <i>m</i> in kg. <i>U</i><sub>0</sub>/(<i>ma</i><sup>2</sup>) has units (kg m<sup>2</sup> s<sup>−2</sup>)/(kg m<sup>2</sup>) = s<sup>−2</sup>. The square root gives s<sup>−1</sup>. Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Piston Compressing Gas (Adiabatic)',
        q: 'A vertical cylinder of cross-section <i>A</i> contains an ideal gas at pressure <i>P</i><sub>0</sub> and volume <i>V</i><sub>0</sub>. A piston of mass <i>m</i> fits tightly and slides without friction. The piston is slightly displaced downward and released. Assuming the gas undergoes adiabatic compression/expansion (<i>PV</i><sup><i>γ</i></sup> = constant), find the period of oscillation.',
        steps: [
          '<b>Step 1 — Coordinate.</b> Let <i>y</i> be the downward displacement of the piston from equilibrium. Volume <i>V</i> = <i>V</i><sub>0</sub> − <i>Ay</i>.',
          '<b>Step 2 — Pressure as a function of <i>y</i>.</b> Adiabatic: <i>PV</i><sup><i>γ</i></sup> = <i>P</i><sub>0</sub><i>V</i><sub>0</sub><sup><i>γ</i></sup>.<br><i>P</i> = <i>P</i><sub>0</sub>(<i>V</i><sub>0</sub>/<i>V</i>)<sup><i>γ</i></sup> = <i>P</i><sub>0</sub>(1 − <i>Ay</i>/<i>V</i><sub>0</sub>)<sup>−<i>γ</i></sup>.',
          '<b>Step 3 — Net force on the piston (taken along +<i>y</i>, i.e. downward).</b> At equilibrium the gas pressure <i>P</i><sub>0</sub> supports the piston’s weight: <i>P</i><sub>0</sub><i>A</i> = <i>mg</i> (vacuum above the piston; if the atmosphere also presses on the top, equilibrium is <i>P</i><sub>0</sub><i>A</i> = <i>mg</i> + <i>P</i><sub>atm</sub><i>A</i>, with <i>P</i><sub>0</sub> still the absolute gas pressure — the atmosphere’s push is constant, so only the change <i>P</i> − <i>P</i><sub>0</sub> matters below). After a downward displacement <i>y</i> the gas is compressed (<i>P</i> > <i>P</i><sub>0</sub>) and pushes the piston back up, so the restoring force along +<i>y</i> is<br><i>F</i> = −(<i>P</i> − <i>P</i><sub>0</sub>)<i>A</i> = −<i>P</i><sub>0</sub><i>A</i>[(1 − <i>Ay</i>/<i>V</i><sub>0</sub>)<sup>−<i>γ</i></sup> − 1].',
          '<b>Step 4 — Small-<i>y</i> expansion.</b> For <i>z</i> ≪ 1, (1 − <i>z</i>)<sup>−<i>γ</i></sup> ≈ 1 + <i>γz</i>.<br>(1 − <i>Ay</i>/<i>V</i><sub>0</sub>)<sup>−<i>γ</i></sup> − 1 ≈ <i>γAy</i>/<i>V</i><sub>0</sub>.<br><i>F</i> ≈ −<i>P</i><sub>0</sub><i>A</i> · <i>γAy</i>/<i>V</i><sub>0</sub> = −(<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>/<i>V</i><sub>0</sub>)<i>y</i>.',
          '<b>Step 5 — Equation of motion and <i>ω</i>.</b><br><i>mÿ</i> = −(<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>/<i>V</i><sub>0</sub>)<i>y</i> ⟹ <i>ÿ</i> + (<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>/(<i>mV</i><sub>0</sub>))<i>y</i> = 0.<br><i>ω</i> = √(<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>/(<i>mV</i><sub>0</sub>)),   <i>T</i> = 2π√(<i>mV</i><sub>0</sub>/(<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>)).',
          '<b>Alternative energy method.</b> Gas energy change: d<i>U</i> = −<i>P</i> d<i>V</i>. For an adiabatic gas, <i>U</i> = <i>PV</i>/(<i>γ</i> − 1). Total energy: <i>E</i> = ½<i>mẏ</i><sup>2</sup> + <i>PV</i>/(<i>γ</i> − 1) − <i>mgy</i> (<i>y</i> is measured downward, so the piston’s gravitational energy is −<i>mgy</i>). Using <i>PV</i><sup><i>γ</i></sup> = const, expand to second order in <i>y</i> — the same <i>ω</i> emerges.',
          '<b>Check.</b> If <i>γ</i> = 1 (isothermal), <i>T</i> = 2π√(<i>mV</i><sub>0</sub>/(<i>P</i><sub>0</sub><i>A</i><sup>2</sup>)). The adiabatic gas is stiffer (<i>γ</i> > 1) ⇒ shorter period. Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A uniform rod of mass <i>M</i> and length <i>L</i> hangs vertically from a pivot at its upper end. A spring of constant <i>k</i> is attached to the free end, horizontal when the rod is vertical. Find the period of small oscillations. (Use the energy method.)',
            a: 'Rod about its pivoted end: <i>I</i> = ⅓<i>ML</i><sup>2</sup>. Let the free end move through <i>x</i> = <i>Lθ</i> (the spring stretches by <i>x</i>). Then <i>K</i> = ½<i>Iθ̇</i><sup>2</sup> = ½(⅓<i>ML</i><sup>2</sup>)(<i>ẋ</i>/<i>L</i>)<sup>2</sup> = ⅙<i>Mẋ</i><sup>2</sup>, and, adding the gravitational term ½<i>Mg</i>(<i>L</i>/2)<i>θ</i><sup>2</sup> of the rod, <i>U</i> = ½<i>kx</i><sup>2</sup> + ½(<i>Mg</i>/(2<i>L</i>))<i>x</i><sup>2</sup> = ½(<i>k</i> + <i>Mg</i>/(2<i>L</i>))<i>x</i><sup>2</sup>. Energy conservation (<i>Ė</i> = 0) gives ⅓<i>Mẋẍ</i> + (<i>k</i> + <i>Mg</i>/(2<i>L</i>))<i>xẋ</i> = 0 ⇒ <i>ω</i><sup>2</sup> = 3<i>k</i>/<i>M</i> + 3<i>g</i>/(2<i>L</i>).<br><i>T</i> = 2π/√(3<i>g</i>/(2<i>L</i>) + 3<i>k</i>/<i>M</i>)<br>(In the limit <i>g</i> → 0 this reduces to <i>T</i> = 2π√(<i>M</i>/(3<i>k</i>)); it agrees with the fourth worked example of Additional topic F.)',
          },
          {
            q: 'A particle of mass <i>m</i> moves in the potential <i>U</i>(<i>x</i>) = ½<i>kx</i><sup>2</sup> + ¼<i>αx</i><sup>4</sup> (<i>α</i> > 0). Find <i>ω</i> for small oscillations about <i>x</i> = 0.',
            a: '<i>U</i>″(0) = <i>k</i> ⇒ <i>ω</i> = √(<i>k</i>/<i>m</i>). (The ¼<i>αx</i><sup>4</sup> term gives a force −<i>αx</i><sup>3</sup>, of order <i>x</i><sup>3</sup>, so it does not affect the small-oscillation frequency.)',
          },
          {
            q: 'A solid sphere of mass <i>M</i> and radius <i>R</i> rolls without slipping in a spherical bowl of radius 10<i>R</i>. Find the period of small oscillations.',
            a: 'Bowl radius 10<i>R</i>, sphere radius <i>R</i>, so the centre moves on a circle of radius 9<i>R</i>. Let <i>x</i> = 9<i>Rθ</i> be the arc length travelled by the centre. With no slip, <i>ω</i><sub>rot</sub> = <i>ẋ</i>/<i>R</i>, and <i>I</i> = ⅖<i>MR</i><sup>2</sup>, so <i>K</i> = ½<i>Mẋ</i><sup>2</sup> + ½<i>Iω</i><sub>rot</sub><sup>2</sup> = ½<i>Mẋ</i><sup>2</sup> + ½(⅖<i>MR</i><sup>2</sup>)(<i>ẋ</i>/<i>R</i>)<sup>2</sup> = (7/10)<i>Mẋ</i><sup>2</sup> = ½((7/5)<i>M</i>)<i>ẋ</i><sup>2</sup>. Also <i>U</i> = <i>Mg</i>(9<i>R</i>)(1 − cos <i>θ</i>) ≈ ½<i>Mg</i>(9<i>R</i>)<i>θ</i><sup>2</sup> = ½(<i>Mg</i>/(9<i>R</i>))<i>x</i><sup>2</sup>. Therefore<br><i>ω</i><sup>2</sup> = (<i>Mg</i>/(9<i>R</i>))/(7<i>M</i>/5) = 5<i>g</i>/(63<i>R</i>),   <i>T</i> = 2π√(63<i>R</i>/(5<i>g</i>))<br>(the same as the second worked example of Additional topic F with <i>R</i> − <i>r</i> = 9<i>R</i>).',
          },
          {
            q: 'A U-tube has unequal cross-sections <i>A</i><sub>1</sub> and <i>A</i><sub>2</sub>; the liquid (density <i>ρ</i>) occupies lengths <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub> in the two arms, <i>L</i> = <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> in all. Find the period of oscillation of the liquid column.',
            a: 'Let <i>y</i> be the displacement of the liquid surface in arm 1 (area <i>A</i><sub>1</sub>); volume conservation gives <i>A</i><sub>1</sub><i>y</i> = <i>A</i><sub>2</sub><i>y</i><sub>2</sub>, i.e. <i>y</i><sub>2</sub> = (<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>)<i>y</i> for the opposite displacement in arm 2. The height difference between the two surfaces is <i>y</i> + <i>y</i><sub>2</sub> = <i>y</i>(1 + <i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>), so the restoring force on the column is <i>F</i> = −<i>ρgA</i><sub>1</sub>(1 + <i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>)<i>y</i>. The liquid in arm 1 (length <i>L</i><sub>1</sub>) moves at <i>ẏ</i> and the liquid in arm 2 (length <i>L</i><sub>2</sub>) at (<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>)<i>ẏ</i>, so <i>K</i> = ½<i>ρA</i><sub>1</sub>(<i>L</i><sub>1</sub> + (<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>)<i>L</i><sub>2</sub>)<i>ẏ</i><sup>2</sup>. Hence<br><i>ω</i><sup>2</sup> = <i>g</i>(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)/(<i>A</i><sub>2</sub><i>L</i><sub>1</sub> + <i>A</i><sub>1</sub><i>L</i><sub>2</sub>)   ⟹   <i>T</i> = 2π√((<i>A</i><sub>2</sub><i>L</i><sub>1</sub> + <i>A</i><sub>1</sub><i>L</i><sub>2</sub>)/(<i>g</i>(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>)))<br>If the tube has a single bore (<i>A</i><sub>1</sub> = <i>A</i><sub>2</sub>, and <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> = <i>L</i>), this reduces to the familiar <i>T</i> = 2π√(<i>L</i>/(2<i>g</i>)).',
          },
          {
            q: 'A cylindrical block of wood (cross-section <i>A</i>, mass <i>m</i>, height <i>H</i>) floats in a liquid of density <i>ρ</i>. It is pushed down slightly. Find the period. (Same as the chapter’s floating body — do it by energy to verify.)',
            a: '<i>T</i> = 2π√(<i>m</i>/(<i>ρAg</i>)). (Energy: <i>K</i> = ½<i>mẏ</i><sup>2</sup>; <i>U</i> = work against buoyancy = ½(<i>ρAg</i>)<i>y</i><sup>2</sup>; <i>ω</i><sup>2</sup> = <i>ρAg</i>/<i>m</i>.)',
          },
          {
            q: 'A piston of mass <i>m</i> and cross-section <i>A</i> separates two chambers of a cylinder. Left chamber: gas at <i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>. Right chamber: gas at <i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>. Both gases are ideal with adiabatic index <i>γ</i>. In equilibrium the pressures are equal (<i>P</i><sub>1</sub> = <i>P</i><sub>2</sub> = <i>P</i><sub>0</sub>) and the volumes are <i>V</i><sub>10</sub> and <i>V</i><sub>20</sub>. The piston is displaced slightly. Find <i>ω</i>.',
            a: 'Let the piston move through <i>x</i> so that <i>V</i><sub>1</sub> = <i>V</i><sub>10</sub> − <i>Ax</i> and <i>V</i><sub>2</sub> = <i>V</i><sub>20</sub> + <i>Ax</i>. The net force is <i>F</i> = −(<i>P</i><sub>1</sub> − <i>P</i><sub>2</sub>)<i>A</i>, with <i>P</i><sub>1</sub> = <i>P</i><sub>10</sub>(<i>V</i><sub>10</sub>/<i>V</i><sub>1</sub>)<sup><i>γ</i></sup> ≈ <i>P</i><sub>10</sub>(1 + <i>γAx</i>/<i>V</i><sub>10</sub>) and <i>P</i><sub>2</sub> = <i>P</i><sub>20</sub>(<i>V</i><sub>20</sub>/<i>V</i><sub>2</sub>)<sup><i>γ</i></sup> ≈ <i>P</i><sub>20</sub>(1 − <i>γAx</i>/<i>V</i><sub>20</sub>). In equilibrium <i>P</i><sub>10</sub> = <i>P</i><sub>20</sub> = <i>P</i><sub>0</sub>, so<br><i>F</i> = −<i>P</i><sub>0</sub><i>A</i>[(1 + <i>γAx</i>/<i>V</i><sub>10</sub>) − (1 − <i>γAx</i>/<i>V</i><sub>20</sub>)] = −<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>(1/<i>V</i><sub>10</sub> + 1/<i>V</i><sub>20</sub>)<i>x</i>, so <i>ω</i> = √(<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>(<i>V</i><sub>10</sub> + <i>V</i><sub>20</sub>)/(<i>mV</i><sub>10</sub><i>V</i><sub>20</sub>)), i.e. <i>T</i> = 2π√(<i>mV</i><sub>10</sub><i>V</i><sub>20</sub>/(<i>γP</i><sub>0</sub><i>A</i><sup>2</sup>(<i>V</i><sub>10</sub> + <i>V</i><sub>20</sub>))).',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Spring Systems Beyond Series and Parallel',
    extra: true,
    kalam:
      'JEE regularly tests three extensions that are not “series or parallel” but are solved by the same force/energy logic: (i) a massive spring, (ii) a spring cut into pieces and rejoined in a new geometry, (iii) two springs with a mass between them (the “middle-mass” problem).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 gives series (1/<i>k</i><sub>eff</sub> = ∑ 1/<i>k</i><sub><i>i</i></sub>) and parallel (<i>k</i><sub>eff</sub> = ∑ <i>k</i><sub><i>i</i></sub>). JEE regularly tests three extensions that are not “series or parallel” but are solved by the same force/energy logic: (i) a massive spring, (ii) a spring cut into pieces and rejoined in a new geometry, (iii) two springs with a mass between them (the “middle-mass” problem).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>B1 — Effective mass of a uniform spring.</b> A spring of mass <i>m</i><sub>s</sub> and constant <i>k</i> has its mass distributed along its length <i>L</i>. For a mass <i>M</i> attached to one end (other end fixed), the kinetic energy of the spring element at distance <i>x</i> from the fixed end is d<i>K</i> = ½(<i>m</i><sub>s</sub>/<i>L</i>)[<i>v</i>(<i>x</i>)]<sup>2</sup> d<i>x</i>. For a spring stretched uniformly, <i>v</i>(<i>x</i>) = (<i>x</i>/<i>L</i>)<i>v</i><sub>end</sub>. Integrate:<br><i>K</i><sub>spring</sub> = ∫<sub>0</sub><sup><i>L</i></sup> ½(<i>m</i><sub>s</sub>/<i>L</i>)((<i>x</i>/<i>L</i>)<i>v</i><sub>end</sub>)<sup>2</sup> d<i>x</i> = ½(<i>m</i><sub>s</sub>/3)<i>v</i><sub>end</sub><sup>2</sup>.<br>The spring behaves as if an extra mass <i>m</i><sub>s</sub>/3 were added to the load.<br><i>ω</i> = √(<i>k</i>/(<i>M</i> + <i>m</i><sub>s</sub>/3)),   <i>T</i> = 2π√((<i>M</i> + <i>m</i><sub>s</sub>/3)/<i>k</i>).',
      },
      {
        t: 'p',
        html: '<b>B2 — Cutting and rejoining springs.</b><br>• A spring of constant <i>k</i>, length <i>L</i>, cut into <i>n</i> equal pieces: each piece has constant <i>nk</i> (stiffer).<br>• Pieces rejoined in series: <i>k</i><sub>eff</sub> = <i>k</i> (back to the original).<br>• Pieces rejoined in parallel: <i>k</i><sub>eff</sub> = <i>n</i><sup>2</sup><i>k</i>.<br>• One piece used alone with the same mass: <i>T</i><sub>new</sub>/<i>T</i><sub>original</sub> = 1/√<i>n</i>.',
      },
      {
        t: 'p',
        html: '<b>B3 — Two springs with a mass between them (middle-mass system).</b> Mass <i>M</i> is connected to the left wall by spring <i>k</i><sub>1</sub> and to the right wall by spring <i>k</i><sub>2</sub>. Displace the mass by <i>x</i>. Left spring: <i>F</i><sub>1</sub> = −<i>k</i><sub>1</sub><i>x</i>. Right spring: <i>F</i><sub>2</sub> = −<i>k</i><sub>2</sub><i>x</i>. Total <i>F</i> = −(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)<i>x</i> ⇒ <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> (parallel addition). Two springs on opposite sides of a single mass always add like parallel, because both are deformed by the same <i>x</i>. <b>Crucial distinction:</b> if the two springs are instead joined end to end (series), with the mass on the free end of the chain, then <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>) — see practice question 4.',
      },
      {
        t: 'p',
        html: '<b>B4 — Spring with masses at both ends (free-free system).</b> Two masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> connected by a spring <i>k</i>, free in space. The centre of mass is inertial. Relative coordinate <i>x</i> = <i>x</i><sub>2</sub> − <i>x</i><sub>1</sub> − <i>L</i><sub>0</sub>. Reduced mass <i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>). Equation: <i>μẍ</i> + <i>kx</i> = 0 ⇒ <i>ω</i> = √(<i>k</i>/<i>μ</i>). Period <i>T</i> = 2π√(<i>μ</i>/<i>k</i>). This is the “internal oscillation” mode; the CM moves uniformly (the <i>ω</i> = 0 mode).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Massive Spring',
        q: 'A spring of mass 0.3 kg and force constant 200 N m<sup>−1</sup> has a block of mass 0.5 kg attached to one end, the other end fixed. Find the period of vertical oscillation. (Take <i>g</i> = 9.8 m s<sup>−2</sup>; note that <i>g</i> does not affect the period.)',
        steps: [
          '<b>Solution.</b><br>Effective mass = <i>M</i> + <i>m</i><sub>s</sub>/3 = 0.5 + 0.3/3 = 0.5 + 0.1 = 0.6 kg.<br><i>T</i> = 2π√(<i>M</i><sub>eff</sub>/<i>k</i>) = 2π√(0.6/200) = 2π√0.003 = 2π × 0.05477 ≈ 0.344 s.',
          '<b>Check.</b> Without the spring’s mass: <i>T</i> = 2π√(0.5/200) = 2π√0.0025 = 2π × 0.05 = 0.314 s. The spring’s mass increases the period by a factor √(0.6/0.5) = √1.2 ≈ 1.095. Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Cut Spring Rejoined',
        q: 'A spring of constant <i>k</i> is cut into three equal pieces. Two pieces are connected in parallel and this combination is connected in series with the third piece. A mass <i>m</i> is attached. Find the period.',
        steps: [
          '<b>Solution.</b><br>Each piece: <i>k</i>′ = 3<i>k</i>.<br>Parallel pair: <i>k</i><sub>parallel</sub> = 3<i>k</i> + 3<i>k</i> = 6<i>k</i>.<br>Series with the third: 1/<i>k</i><sub>eff</sub> = 1/(6<i>k</i>) + 1/(3<i>k</i>) = 1/(6<i>k</i>) + 2/(6<i>k</i>) = 3/(6<i>k</i>) = 1/(2<i>k</i>).<br>So <i>k</i><sub>eff</sub> = 2<i>k</i>.<br><i>T</i> = 2π√(<i>m</i>/(2<i>k</i>)) = (2π/√2)√(<i>m</i>/<i>k</i>) = <i>T</i><sub>0</sub>/√2,<br>where <i>T</i><sub>0</sub> = 2π√(<i>m</i>/<i>k</i>) is the period of the original uncut spring with the same mass.',
          '<b>Check.</b> Original <i>k</i>. New <i>k</i><sub>eff</sub> = 2<i>k</i> > <i>k</i> ⇒ stiffer ⇒ shorter period. <i>T</i><sub>new</sub> = <i>T</i><sub>0</sub>/√2 ≈ 0.707 <i>T</i><sub>0</sub>. Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Mass on a Stretched Wire',
        q: 'A wire of length 2<i>L</i>, cross-sectional area <i>A</i>, Young’s modulus <i>Y</i>, is stretched between two fixed supports with an initial tension <i>T</i><sub>0</sub>. A mass <i>m</i> is attached at its midpoint. The mass is displaced a small distance <i>y</i> transversely and released. Find the period of small oscillations.',
        steps: [
          '<b>Solution.</b><br>Each half of the wire has length <i>L</i> and tension <i>T</i><sub>0</sub> (approximately constant for small <i>y</i>).<br>When the mass is displaced by <i>y</i>, each half makes an angle <i>θ</i> ≈ <i>y</i>/<i>L</i> with the horizontal.<br>Vertical component of tension from one half = <i>T</i><sub>0</sub> sin <i>θ</i> ≈ <i>T</i><sub>0</sub>(<i>y</i>/<i>L</i>).<br>Total restoring force = −2<i>T</i><sub>0</sub>(<i>y</i>/<i>L</i>).<br>Equation: <i>mÿ</i> = −(2<i>T</i><sub>0</sub>/<i>L</i>)<i>y</i>.<br><i>ω</i> = √(2<i>T</i><sub>0</sub>/(<i>mL</i>)),   <i>T</i> = 2π√(<i>mL</i>/(2<i>T</i><sub>0</sub>)).',
          '<b>Using Young’s modulus:</b> if the natural length of the wire is 2<i>L</i><sub>0</sub> and it is stretched to 2<i>L</i>, each half is extended from <i>L</i><sub>0</sub> to <i>L</i>, so <i>T</i><sub>0</sub> = <i>YA</i>(<i>L</i> − <i>L</i><sub>0</sub>)/<i>L</i><sub>0</sub>. If <i>T</i><sub>0</sub> is given directly, use it in the result above.',
          '<b>Check.</b> Units: <i>T</i><sub>0</sub> in N, <i>m</i> in kg, <i>L</i> in m. <i>T</i><sub>0</sub>/(<i>mL</i>) has units (kg m s<sup>−2</sup>)/(kg m) = s<sup>−2</sup>. The square root gives s<sup>−1</sup>. Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A spring of mass 0.2 kg and constant 100 N m<sup>−1</sup> has a 0.8 kg block attached. Find the period. By what percentage does the spring’s mass increase the period compared to a massless spring?',
            a: '<i>T</i> = 2π√((0.8 + 0.2/3)/100) = 2π√(0.8667/100) = 2π × 0.0931 ≈ 0.585 s. Massless spring: <i>T</i><sub>0</sub> = 2π√(0.8/100) = 0.562 s. Increase = (0.585 − 0.562)/0.562 ≈ 4.1%.',
          },
          {
            q: 'A spring of constant <i>k</i> is cut into two pieces of lengths <i>L</i>/3 and 2<i>L</i>/3. The pieces are connected in parallel. Find <i>k</i><sub>eff</sub>.',
            a: 'Piece 1: length <i>L</i>/3 ⇒ <i>k</i><sub>1</sub> = 3<i>k</i>. Piece 2: length 2<i>L</i>/3 ⇒ <i>k</i><sub>2</sub> = 1.5<i>k</i>. Parallel: <i>k</i><sub>eff</sub> = 3<i>k</i> + 1.5<i>k</i> = 4.5<i>k</i>.',
          },
          {
            q: 'Two masses <i>m</i><sub>1</sub> = 2 kg and <i>m</i><sub>2</sub> = 3 kg are connected by a spring of constant 120 N m<sup>−1</sup> on a frictionless table. Find the period of oscillation of the distance between them.',
            a: 'Reduced mass <i>μ</i> = (2 × 3)/(2 + 3) = 6/5 = 1.2 kg. <i>T</i> = 2π√(1.2/120) = 2π√0.01 = 2π × 0.1 = 0.2π ≈ 0.628 s.',
          },
          {
            q: 'A mass <i>m</i> is attached to two identical springs of constant <i>k</i>, each fixed at its other end to walls on opposite sides (the standard “middle-mass” system). Find the period. Now join the same two springs end to end (in series), with the first fixed to a wall and the mass attached to the free end of the second. Find the new period. Compare.',
            a: 'Standard middle-mass (parallel): <i>k</i><sub>eff</sub> = 2<i>k</i>, <i>T</i><sub>1</sub> = 2π√(<i>m</i>/(2<i>k</i>)). Series: <i>k</i><sub>eff</sub> = <i>k</i>/2 (two <i>k</i> in series), <i>T</i><sub>2</sub> = 2π√(<i>m</i>/(<i>k</i>/2)) = 2π√(2<i>m</i>/<i>k</i>) = 2<i>T</i><sub>1</sub>. The series combination is softer.',
          },
          {
            q: 'A uniform spring of mass <i>m</i><sub>s</sub> and constant <i>k</i> hangs vertically with a mass <i>M</i> attached at the bottom. Find the period of vertical oscillation. (Hint: the effective-mass correction is still <i>m</i><sub>s</sub>/3.)',
            a: '<i>T</i> = 2π√((<i>M</i> + <i>m</i><sub>s</sub>/3)/<i>k</i>). Gravity shifts the equilibrium but not the period. The effective mass of a vertical uniform spring is still <i>m</i><sub>s</sub>/3.',
          },
          {
            q: 'A spring of constant <i>k</i> has a mass <i>m</i> attached at its midpoint, the ends fixed. The spring is initially unstretched. The mass is displaced along the spring’s axis (longitudinal). Find the period.',
            a: 'Mass at the midpoint, longitudinal. Each half acts as a spring of constant 2<i>k</i>. The mass is between two springs in parallel (both attached to the mass, other ends fixed). <i>k</i><sub>eff</sub> = 2<i>k</i> + 2<i>k</i> = 4<i>k</i>. <i>T</i> = 2π√(<i>m</i>/(4<i>k</i>)) = π√(<i>m</i>/<i>k</i>).',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Phase, Time, and Fraction-of-Period Calculations',
    extra: true,
    kalam:
      'The method is always: write x = A sin(ωt + φ) or the cosine form, invert to get the phase, subtract phases, divide by ω.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Worked example 4 of Topic 01 and practice question 5 of Topic 02 show the idea: map position conditions to phase intervals on the reference circle. JEE Main and Advanced ask for exact times to go from <i>x</i><sub>1</sub> to <i>x</i><sub>2</sub>, the fraction of the period spent with |<i>x</i>| > <i>A</i>/2, the time when the speed is half the maximum, etc. The method is always: write <i>x</i> = <i>A</i> sin(<i>ωt</i> + <i>φ</i>) or the cosine form, invert to get the phase, subtract phases, divide by <i>ω</i>.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Phase-stopwatch procedure',
        steps: [
          '<b>Choose the sine/cosine form</b> that makes the initial condition simple. If <i>t</i> = 0 at <i>x</i> = <i>A</i>, use <i>x</i> = <i>A</i> cos <i>ωt</i>. If <i>t</i> = 0 at <i>x</i> = 0 moving +, use <i>x</i> = <i>A</i> sin <i>ωt</i>.',
          '<b>Convert position conditions to phase angles.</b> For <i>x</i> = <i>A</i> sin <i>θ</i> (<i>θ</i> = <i>ωt</i> + <i>φ</i>), the condition <i>x</i> = <i>x</i><sub>0</sub> gives <i>θ</i> = sin<sup>−1</sup>(<i>x</i><sub>0</sub>/<i>A</i>) or π − sin<sup>−1</sup>(<i>x</i><sub>0</sub>/<i>A</i>), depending on the quadrant (direction of motion).',
          '<b>Determine the correct branch</b> using the velocity sign: <i>v</i> = <i>Aω</i> cos <i>θ</i>. <i>v</i> > 0 ⇒ cos <i>θ</i> > 0 ⇒ <i>θ</i> in Q1 or Q4. <i>v</i> < 0 ⇒ <i>θ</i> in Q2 or Q3.',
          '<b>Compute the phase difference</b> Δ<i>θ</i> between the two states along the actual direction of motion.',
          '<b>Time</b> = Δ<i>θ</i>/<i>ω</i>. Fraction of period = Δ<i>θ</i>/(2π).',
        ],
      },
      {
        t: 'table',
        title: 'Standard results to memorise (for x = A sin ωt, starting at the mean position moving +)',
        head: ['From → To', 'Phase span', 'Fraction of T', 'Time'],
        rows: [
          ['0 → <i>A</i>/2', 'π/6', '1/12', '<i>T</i>/12'],
          ['0 → <i>A</i>/√2', 'π/4', '1/8', '<i>T</i>/8'],
          ['0 → <i>A</i>', 'π/2', '1/4', '<i>T</i>/4'],
          ['<i>A</i>/2 → <i>A</i>', 'π/2 − π/6 = π/3', '1/6', '<i>T</i>/6'],
          ['<i>A</i>/√2 → <i>A</i>', 'π/2 − π/4 = π/4', '1/8', '<i>T</i>/8'],
          ['−<i>A</i>/2 → <i>A</i>/2', 'π/6 − (−π/6) = π/3', '1/6', '<i>T</i>/6'],
          ['|<i>x</i>| < <i>A</i>/2', '|sin <i>θ</i>| < 1/2; total span 4 × π/6 = 2π/3', '1/3', '<i>T</i>/3'],
          ['|<i>x</i>| > <i>A</i>/2', '2π − 2π/3 = 4π/3', '2/3', '2<i>T</i>/3'],
        ],
      },
      {
        t: 'p',
        html: 'For |<i>x</i>| < <i>A</i>/2 the phase lies in <i>θ</i> ∈ [0, π/6) ∪ (5π/6, 7π/6) ∪ (11π/6, 2π] over one period.',
      },
      {
        t: 'p',
        html: '<b>Speed-based conditions.</b> <i>v</i> = <i>v</i><sub>max</sub>/2 ⇒ <i>Aω</i> cos <i>θ</i> = <i>Aω</i>/2 ⇒ cos <i>θ</i> = 1/2 ⇒ <i>θ</i> = π/3 or 5π/3. Use symmetry.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Time from x = A/2 to x = A',
        q: 'A particle starts from the mean position (<i>x</i> = 0) at <i>t</i> = 0, moving in the positive direction, with SHM of amplitude <i>A</i> and period <i>T</i>. Find the time taken to go from <i>x</i> = <i>A</i>/2 to <i>x</i> = <i>A</i>.',
        steps: [
          '<b>Solution.</b><br>Use <i>x</i> = <i>A</i> sin <i>ωt</i> (<i>φ</i> = 0, <i>ω</i> = 2π/<i>T</i>).<br>At <i>x</i> = <i>A</i>/2: sin <i>ωt</i><sub>1</sub> = 1/2 ⇒ <i>ωt</i><sub>1</sub> = π/6 (since moving +, <i>v</i> > 0, cos > 0 ⇒ Q1).<br>At <i>x</i> = <i>A</i>: sin <i>ωt</i><sub>2</sub> = 1 ⇒ <i>ωt</i><sub>2</sub> = π/2.<br>Δ<i>θ</i> = π/2 − π/6 = π/3.<br><i>t</i> = Δ<i>θ</i>/<i>ω</i> = (π/3)/(2π/<i>T</i>) = <i>T</i>/6.',
          '<b>Check.</b> Quarter period <i>T</i>/4 from 0 to <i>A</i>. <i>T</i>/12 from 0 to <i>A</i>/2. Difference = <i>T</i>/4 − <i>T</i>/12 = <i>T</i>/6. Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Fraction of Period with Speed > vmax/√2',
        q: 'A particle executes SHM with amplitude <i>A</i> and angular frequency <i>ω</i>. Find the fraction of one period during which its speed exceeds <i>v</i><sub>max</sub>/√2.',
        steps: [
          '<b>Solution.</b><br><i>v</i> = <i>Aω</i> cos <i>ωt</i> (starting at <i>x</i> = 0 at <i>t</i> = 0). <i>v</i><sub>max</sub> = <i>Aω</i>.<br>Condition: |<i>v</i>| > <i>v</i><sub>max</sub>/√2 ⇒ |cos <i>ωt</i>| > 1/√2.<br>On [0, 2π], |cos <i>θ</i>| > 1/√2 when <i>θ</i> ∈ [0, π/4) ∪ (3π/4, 5π/4) ∪ (7π/4, 2π].<br>Total angular span = 4 × (π/4) = π.<br>Fraction = π/(2π) = 1/2.',
          '<b>Alternative using position.</b> |<i>v</i>| > <i>v</i><sub>max</sub>/√2 ⇔ |<i>x</i>| < <i>A</i>/√2 (since <i>v</i><sup>2</sup> = <i>ω</i><sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)). The fraction with |<i>x</i>| < <i>A</i>/√2 is also 1/2 (by symmetry, <i>K</i> > <i>U</i> when |<i>x</i>| < <i>A</i>/√2, and practice question 5 of Topic 02 gave fraction 1/2 for <i>K</i> > <i>U</i>).',
          '<b>Check.</b> <i>K</i> > <i>U</i> for half the period. Consistent.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Time from x = −A/2 to x = +A/2 Moving Positive',
        q: 'A particle in SHM (amplitude <i>A</i>, period <i>T</i>) is at <i>x</i> = −<i>A</i>/2 moving in the positive direction at <i>t</i> = 0. Find the time when it first reaches <i>x</i> = +<i>A</i>/2.',
        steps: [
          '<b>Solution.</b><br>Choose <i>x</i> = <i>A</i> sin(<i>ωt</i> + <i>φ</i>). At <i>t</i> = 0: <i>x</i> = −<i>A</i>/2 ⇒ sin <i>φ</i> = −1/2. Moving + ⇒ <i>v</i> = <i>Aω</i> cos <i>φ</i> > 0 ⇒ cos <i>φ</i> > 0.<br>sin <i>φ</i> = −1/2, cos <i>φ</i> > 0 ⇒ <i>φ</i> = −π/6 (or 11π/6).<br>Target: <i>x</i> = +<i>A</i>/2 ⇒ sin(<i>ωt</i> − π/6) = 1/2, with <i>v</i> > 0 (still moving +).<br>sin <i>α</i> = 1/2, cos <i>α</i> > 0 ⇒ <i>α</i> = π/6.<br><i>ωt</i> − π/6 = π/6 ⇒ <i>ωt</i> = π/3.<br><i>t</i> = (π/3)/<i>ω</i> = (π/3)/(2π/<i>T</i>) = <i>T</i>/6.',
          '<b>Check.</b> From −<i>A</i>/2 to 0 takes <i>T</i>/12 (by symmetry with 0 to <i>A</i>/2). From 0 to +<i>A</i>/2 takes another <i>T</i>/12. Total <i>T</i>/6. Correct.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A particle in SHM of period <i>T</i> starts from <i>x</i> = <i>A</i> at <i>t</i> = 0. Find the time to reach <i>x</i> = <i>A</i>/2.',
            a: '<i>x</i> = <i>A</i> cos <i>ωt</i>. cos <i>ωt</i> = 1/2 ⇒ <i>ωt</i> = π/3. <i>t</i> = (π/3)/(2π/<i>T</i>) = <i>T</i>/6.',
          },
          {
            q: 'A particle in SHM (amplitude <i>A</i>, period <i>T</i>) has speed <i>v</i> = <i>v</i><sub>max</sub>/2 at <i>t</i> = 0 and is moving toward the mean position from the positive side. Find the time when it next reaches <i>x</i> = 0.',
            a: 'Speed <i>v</i> = <i>v</i><sub>max</sub>/2 at position <i>x</i><sub>0</sub> satisfies <i>v</i><sup>2</sup> = <i>ω</i><sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>), i.e. (<i>Aω</i>/2)<sup>2</sup> = <i>ω</i><sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sub>0</sub><sup>2</sup>) ⇒ <i>x</i><sub>0</sub><sup>2</sup> = ¾<i>A</i><sup>2</sup> ⇒ <i>x</i><sub>0</sub> = (√3/2)<i>A</i> (taking the positive root, since <i>x</i> > 0 is given). Writing <i>x</i>(<i>t</i>) = <i>A</i> cos(<i>ωt</i> + <i>φ</i>) with <i>x</i>(0) = <i>x</i><sub>0</sub> and <i>v</i>(0) < 0 (moving toward the mean position) requires cos <i>φ</i> = √3/2 and sin <i>φ</i> > 0, so <i>φ</i> = π/6. The particle reaches <i>x</i> = 0 when cos(<i>ωt</i> + π/6) = 0, i.e. <i>ωt</i> + π/6 = π/2 ⇒ <i>ωt</i> = π/3 ⇒ <i>t</i> = (π/3)/(2π/<i>T</i>) = <i>T</i>/6.',
          },
          {
            q: 'Find the fraction of a period during which the kinetic energy is greater than 3/4 of the total energy.',
            a: '<i>K</i> > ¾<i>E</i> ⇒ ½<i>mω</i><sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) > ¾ · ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup> ⇒ <i>A</i><sup>2</sup> − <i>x</i><sup>2</sup> > ¾<i>A</i><sup>2</sup> ⇒ <i>x</i><sup>2</sup> < ¼<i>A</i><sup>2</sup> ⇒ |<i>x</i>| < <i>A</i>/2. Fraction = 1/3 (from the Standard-results table).',
          },
          {
            q: 'A particle in SHM takes time <i>t</i><sub>1</sub> to go from <i>x</i> = 0 to <i>x</i> = <i>A</i>/2, and time <i>t</i><sub>2</sub> to go from <i>x</i> = <i>A</i>/2 to <i>x</i> = <i>A</i>. Find <i>t</i><sub>2</sub>/<i>t</i><sub>1</sub>.',
            a: '<i>t</i><sub>1</sub> = <i>T</i>/12 (0 to <i>A</i>/2). <i>t</i><sub>2</sub> = <i>T</i>/6 (<i>A</i>/2 to <i>A</i>). <i>t</i><sub>2</sub>/<i>t</i><sub>1</sub> = 2.',
          },
          {
            q: 'For SHM <i>x</i> = <i>A</i> cos(<i>ωt</i> + π/3), find the first time after <i>t</i> = 0 when the particle is at <i>x</i> = −<i>A</i>/2 and moving in the negative direction.',
            a: '<i>x</i> = <i>A</i> cos(<i>ωt</i> + π/3) = −<i>A</i>/2 ⇒ cos(<i>ωt</i> + π/3) = −1/2. Moving negative ⇒ <i>v</i> = −<i>Aω</i> sin(<i>ωt</i> + π/3) < 0 ⇒ sin(<i>ωt</i> + π/3) > 0. cos <i>θ</i> = −1/2, sin <i>θ</i> > 0 ⇒ <i>θ</i> = 2π/3. <i>ωt</i> + π/3 = 2π/3 ⇒ <i>ωt</i> = π/3. <i>t</i> = π/(3<i>ω</i>) = <i>T</i>/6.',
          },
          {
            q: 'A particle executes SHM with amplitude 10 cm and period 2 s. What is the minimum time required for it to move between points 5 cm and 8 cm from the mean position on the same side?',
            a: '<i>A</i> = 10 cm, <i>T</i> = 2 s, <i>ω</i> = π rad/s. Points: 5 cm and 8 cm on the same side. Use <i>x</i> = <i>A</i> sin <i>ωt</i> (start at 0). <i>x</i> = 5: sin <i>ωt</i><sub>1</sub> = 0.5 ⇒ <i>ωt</i><sub>1</sub> = π/6. <i>x</i> = 8: sin <i>ωt</i><sub>2</sub> = 0.8 ⇒ <i>ωt</i><sub>2</sub> = sin<sup>−1</sup>(0.8) ≈ 0.9273 rad. Δ<i>θ</i> = 0.9273 − π/6 ≈ 0.9273 − 0.5236 = 0.4037 rad. <i>t</i> = Δ<i>θ</i>/<i>ω</i> = 0.4037/π ≈ 0.1285 s.',
          },
        ],
      },
    ],
  },
];
