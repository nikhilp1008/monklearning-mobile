import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 05 and 06, pp. 639–654 of the Class 11 Physics Master
 * Reference, word for word: Viscosity and Terminal Velocity (pp. 639 to 646)
 * and Poiseuille's Law and Viscous Flow Resistance (pp. 647 to 654), each
 * split at the book's Sections 1 to 8. Figure 9.10 (caption p. 641, drawn on
 * p. 642) and Figure 9.11 (caption p. 649, drawn on p. 650).
 */
export const TOPICS: Topic[] = [
  {
    n: '05',
    title: 'Viscosity and Terminal Velocity',
    kalam: 'Viscosity = internal fluid friction; acts only when layers move relative to each other.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A consistently scoring topic. CBSE Boards ask the definition of the coefficient of viscosity, its units/dimensions, and the terminal-velocity expression (2–3 marks), and frequently the conceptual temperature-dependence question. JEE Main reliably carries a terminal-velocity numerical or a Newton’s-law shear-force problem. NEET loves the <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>2</sup> scaling trap and the liquids-vs-gases temperature behaviour. JEE Advanced builds droplet-coalescence, free-fall-into-liquid, and power-dissipation scaling problems.',
      },
      {
        t: 'p',
        html: 'Pour out a bottle of water and it splashes away instantly. Tip up a jar of honey and it crawls down the side in a slow, lazy ribbon. Both are fluids, both flow — but honey resists flowing far more than water does. That internal resistance, the friction within a fluid that opposes one layer sliding past another, is <b>viscosity</b>. It is, quite simply, fluid friction.',
      },
      {
        t: 'p',
        html: 'Here is the picture that makes it precise. Imagine a deep, still river. The water right at the bottom, touching the riverbed, is essentially stationary — it clings to the bed. The water at the surface moves fastest. In between, each thin horizontal layer slides over the one below it, a little faster than its neighbour beneath, a little slower than its neighbour above. This smooth, layered sliding is exactly what happens in any viscous flow, and it sets up a <b>velocity gradient</b> — the change in flow speed per unit distance measured perpendicular to the flow, written d<i>v</i>/d<i>x</i>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a thick stack of paper sheets lying flat. Slide the top sheet sideways and, because of friction, it drags the sheet just below it along a little, which drags the next one, and so on down to the bottom sheet which stays put. Each sheet moves a bit slower than the one above. A viscous fluid behaves just like this stack: each layer exerts a tangential (sideways) dragging force on its neighbours. Newton found that this viscous force <i>F</i> is proportional to the contact area <i>A</i> between layers and to the velocity gradient d<i>v</i>/d<i>x</i>:<br><i>F</i> = −<i>ηA</i> d<i>v</i>/d<i>x</i><br>The constant <i>η</i> is the <b>coefficient of viscosity</b> — large for honey, small for water, tinier still for air. The negative sign is the signature of friction: the force always opposes the relative motion, trying to slow the faster layer and speed up the slower one, dragging the fluid toward uniformity.',
      },
      {
        t: 'p',
        html: 'Viscosity is the close cousin of solid friction: both oppose relative motion, both arise at the molecular level (attraction between molecules in a liquid, momentum carried between layers by moving molecules in a gas), and both come into play only when there is relative motion. This is the key difference from a static fluid — a fluid at rest has no velocity gradient, so viscosity is dormant. It acts only on moving fluids. This is why a stirred cup of tea eventually stops swirling, why a galvanometer needle settles instead of oscillating forever (viscous damping), and why thick oil makes a good shock absorber.',
      },
      {
        t: 'p',
        html: 'Now apply this to a small object falling through a fluid — a steel pellet sinking in glycerine, or a raindrop falling through air. Three forces act on it: its <b>weight</b> pulling down, the <b>buoyant force</b> pushing up (the displaced-fluid upthrust from Topic 02), and the <b>viscous drag</b> pushing up, opposing its downward motion. The drag grows with speed. So as the object speeds up, the upward drag grows until, at some speed, the three forces exactly balance: net force becomes zero, acceleration stops, and the object falls thereafter at a constant speed. This steady, maximum speed is the <b>terminal velocity</b>. It is why a raindrop does not hit you at bullet speed despite falling kilometres, and why dust and cloud droplets seem to hang in the air — their terminal velocities are minuscule.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) Newton’s law <i>F</i> = −<i>ηA</i> d<i>v</i>/d<i>x</i> describes <b>laminar</b> (streamline) flow; in turbulent flow the simple linear relation fails. (2) <b>Temperature matters, and oppositely for the two phases:</b> liquid viscosity decreases with rising temperature (heat weakens the cohesive bonds), while gas viscosity increases (faster molecular diffusion across layers) — getting this backwards is the topic’s classic error. (3) <b>Stokes’ law</b> <i>F</i> = 6π<i>ηrv</i> holds only for a small smooth sphere moving slowly (low Reynolds number) through an infinite, incompressible fluid. (4) The terminal-velocity formula assumes the sphere has reached steady state and that the fluid is unbounded (no wall effects).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Newton’s law of viscosity',
        main: '<i>F</i> = −<i>ηA</i> d<i>v</i>/d<i>x</i>',
        legend: [
          '<i>F</i> = tangential viscous force',
          '<i>A</i> = area of contact between layers',
          'd<i>v</i>/d<i>x</i> = velocity gradient (perpendicular to flow)',
          '<i>η</i> = coefficient of viscosity',
        ],
        note: 'The negative sign denotes opposition to relative motion.',
      },
      {
        t: 'formula',
        kicker: 'Coefficient of viscosity',
        main: 'tangential force per unit area per unit velocity gradient:<br><i>η</i> = (<i>F</i>/<i>A</i>)/(d<i>v</i>/d<i>x</i>)',
        legend: [],
        note: '• <b>SI unit:</b> N s m<sup>−2</sup> = Pa·s = <b>decapoise</b> = <b>poiseuille</b> (Pl).<br>• <b>CGS unit:</b> dyne s cm<sup>−2</sup> = poise.<br>• <b>Conversions:</b> 1 Pa·s = 1 decapoise = 10 poise; equivalently 1 poise = 0.1 Pa·s.<br>• <b>Dimensional formula:</b> [<i>η</i>] = ([M L T<sup>−2</sup>]/[L<sup>2</sup>])/([L T<sup>−1</sup>]/[L]) = [M L<sup>−1</sup> T<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Kinematic viscosity',
        main: '<i>ν</i> = <i>η</i>/<i>ρ</i>',
        legend: [],
        note: '(SI unit m<sup>2</sup> s<sup>−1</sup>)',
      },
      {
        t: 'formula',
        kicker: 'Stokes’ law',
        main: '(viscous drag on a small sphere of radius <i>r</i> moving at speed <i>v</i>):<br><i>F</i> = 6π<i>ηrv</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Terminal velocity',
        main: 'of a sphere (radius <i>r</i>, density <i>ρ</i><sub><i>b</i></sub>) falling through a fluid (density <i>ρ</i><sub><i>f</i></sub>, viscosity <i>η</i>) — from the three-force balance:<br><i>v</i><sub><i>t</i></sub> = (2/9) <i>r</i><sup>2</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<i>g</i>/<i>η</i>',
        legend: [],
        note: 'Key scalings: <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>2</sup>, <i>v</i><sub><i>t</i></sub> ∝ (<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>), <i>v</i><sub><i>t</i></sub> ∝ 1/<i>η</i>. (If <i>ρ</i><sub><i>b</i></sub> < <i>ρ</i><sub><i>f</i></sub>, <i>v</i><sub><i>t</i></sub> is negative — the body rises, like an air bubble in water.)',
      },
      {
        t: 'p',
        html: '<b>Temperature dependence (memorise the split):</b> liquids <i>η</i> ↓ as <i>T</i> ↑ (falling steeply); gases <i>η</i> ↑ as <i>T</i> ↑ (roughly <i>η</i> ∝ √<i>T</i>).',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      { t: 'p', html: '<b>Derivation 1 — Terminal velocity of a sphere (three-force balance).</b>' },
      { t: 'fig', id: 'p11-09-fig-9.10' },
      {
        t: 'p',
        html: '<b>Assumption:</b> a small smooth sphere of radius <i>r</i> and density <i>ρ</i><sub><i>b</i></sub> falling through a large body of fluid of density <i>ρ</i><sub><i>f</i></sub> and viscosity <i>η</i>, slowly enough for Stokes’ law to hold.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — List the three forces.</b><br>• Weight (down): <i>W</i> = (4/3)π<i>r</i><sup>3</sup><i>ρ</i><sub><i>b</i></sub><i>g</i><br>• Buoyant force (up): <i>F</i><sub><i>B</i></sub> = (4/3)π<i>r</i><sup>3</sup><i>ρ</i><sub><i>f</i></sub><i>g</i> (weight of displaced fluid, from Topic 02)<br>• Viscous drag (up, opposing motion): <i>F</i><sub><i>v</i></sub> = 6π<i>ηrv</i> (Stokes’ law)',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Apply the terminal condition.</b> <b>Physical reasoning:</b> initially the drag is zero (the sphere starts from rest), so the net downward force accelerates it; as <i>v</i> grows, <i>F</i><sub><i>v</i></sub> grows, until the upward forces exactly balance the weight. At that instant acceleration vanishes and the speed becomes constant — the terminal velocity <i>v</i><sub><i>t</i></sub>. Setting net force to zero:<br><i>W</i> = <i>F</i><sub><i>B</i></sub> + <i>F</i><sub><i>v</i></sub><br>(4/3)π<i>r</i><sup>3</sup><i>ρ</i><sub><i>b</i></sub><i>g</i> = (4/3)π<i>r</i><sup>3</sup><i>ρ</i><sub><i>f</i></sub><i>g</i> + 6π<i>ηrv</i><sub><i>t</i></sub>',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Solve for <i>v</i><sub><i>t</i></sub>.</b> Move buoyancy across and group the weight terms:<br>6π<i>ηrv</i><sub><i>t</i></sub> = (4/3)π<i>r</i><sup>3</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<i>g</i><br>Cancel π<i>r</i> from both sides and simplify the constant (4/3 ÷ 6 = 2/9):<br><i>v</i><sub><i>t</i></sub> = (2/9) <i>r</i><sup>2</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<i>g</i>/<i>η</i>',
      },
      {
        t: 'p',
        html: 'Notice the result reuses the buoyancy machinery from Topic 02 (the <i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub> “effective weight”) and the Stokes drag — it is genuinely a synthesis of two ideas. The crucial takeaway is the <i>r</i><sup>2</sup> dependence: a sphere of twice the radius reaches four times the terminal velocity.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Dimensions and units of <i>η</i> (key procedure).</b> Starting from <i>η</i> = (<i>F</i>/<i>A</i>)/(d<i>v</i>/d<i>x</i>), substitute dimensions step by step. <b>Physical reasoning:</b> each piece is built from its definition so the route is reproducible in an exam:<br>• Force: [<i>F</i>] = [M L T<sup>−2</sup>]; Area: [<i>A</i>] = [L<sup>2</sup>], so [<i>F</i>/<i>A</i>] = [M L<sup>−1</sup> T<sup>−2</sup>].<br>• Velocity gradient: [d<i>v</i>/d<i>x</i>] = [L T<sup>−1</sup>]/[L] = [T<sup>−1</sup>].<br>• Therefore [<i>η</i>] = [M L<sup>−1</sup> T<sup>−2</sup>]/[T<sup>−1</sup>] = [M L<sup>−1</sup> T<sup>−1</sup>].<br><br>For the unit conversion poise ↔ Pa·s: 1 Pa·s = 1 N s/m<sup>2</sup> = (10<sup>5</sup> dyne·s)/(10<sup>4</sup> cm<sup>2</sup>) = 10 dyne s/cm<sup>2</sup> = 10 poise.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A flat glass plate of area 0.10 m<sup>2</sup> rests on a layer of glycerine 2.0 mm thick spread over a table. The plate is dragged horizontally at a steady 0.50 m s<sup>−1</sup>. If the coefficient of viscosity of glycerine is 1.5 Pa·s, find the tangential force needed to keep the plate moving. (Assume a uniform velocity gradient and that the glycerine touching the table is stationary.)',
        steps: [
          '<b>Given:</b> <i>A</i> = 0.10 m<sup>2</sup>, Δ<i>x</i> = 2.0 mm = 2.0 × 10<sup>−3</sup> m, <i>v</i> = 0.50 m s<sup>−1</sup>, <i>η</i> = 1.5 Pa·s.',
          'The velocity gradient (uniform, top moving, bottom still):<br>d<i>v</i>/d<i>x</i> = (0.50 − 0)/(2.0 × 10<sup>−3</sup>) = 250 s<sup>−1</sup>',
          'The magnitude of the viscous force (the applied force must balance it for steady motion):<br><i>F</i> = <i>ηA</i> d<i>v</i>/d<i>x</i> = 1.5 × 0.10 × 250',
        ],
        ans: '37.5 N',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A spherical raindrop of radius <i>r</i> falls through air at terminal velocity <i>v</i>. It breaks up into 8 identical smaller droplets. Find the terminal velocity of each smaller droplet.',
        steps: [
          '<b>The traps to avoid:</b> (i) thinking terminal velocity scales with radius (giving <i>v</i>/2) or with volume (giving <i>v</i>/8). It scales as <i>r</i><sup>2</sup>. (ii) Forgetting to first find the new radius from volume conservation.',
          '<b>Speed approach.</b> Volume is conserved when the drop splits:<br>(4/3)π<i>r</i><sup>3</sup> = 8 × (4/3)π<i>r</i>′<sup>3</sup> ⇒ <i>r</i>′<sup>3</sup> = <i>r</i><sup>3</sup>/8 ⇒ <i>r</i>′ = <i>r</i>/2',
          'Since <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>2</sup>:<br><i>v</i>′ = <i>v</i>(<i>r</i>′/<i>r</i>)<sup>2</sup> = <i>v</i>(1/2)<sup>2</sup>',
          '<b>Mental check:</b> 8 droplets means radius halves (8<sup>1/3</sup> = 2), and <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>2</sup> means the speed quarters. Smaller drops fall slower — exactly why fine mist lingers in the air while big drops plummet.',
        ],
        ans: '<i>v</i>/4',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (combines buoyancy from Topic 02 + Stokes’ drag)',
        q: 'A glass sphere of radius 2.0 mm and density 2500 kg m<sup>−3</sup> falls through glycerine of density 1260 kg m<sup>−3</sup> and viscosity 0.83 Pa·s. Find (a) the terminal velocity, and (b) the viscous drag force at terminal velocity, and verify it equals the sphere’s apparent weight. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '(a) Terminal velocity:<br><i>v</i><sub><i>t</i></sub> = (2/9) <i>r</i><sup>2</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<i>g</i>/<i>η</i> = (2/9) (2.0 × 10<sup>−3</sup>)<sup>2</sup>(2500 − 1260)(10)/0.83<br>= (2/9) (4.0 × 10<sup>−6</sup>)(1240)(10)/0.83 = (2/9) × 0.0496/0.83',
          '(b) Viscous drag at terminal velocity (Stokes):<br><i>F</i><sub><i>v</i></sub> = 6π<i>ηrv</i><sub><i>t</i></sub> = 6π(0.83)(2.0 × 10<sup>−3</sup>)(1.33 × 10<sup>−2</sup>) ≈ 4.16 × 10<sup>−4</sup> N',
          '<b>Verification —</b> the apparent weight (weight minus buoyancy):<br><i>W</i><sub>app</sub> = (4/3)π<i>r</i><sup>3</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<i>g</i> = (4/3)π(2.0 × 10<sup>−3</sup>)<sup>3</sup>(1240)(10) ≈ 4.16 × 10<sup>−4</sup> N ✓',
          'The two match, confirming the force balance: at terminal velocity, the viscous drag exactly supports the sphere against its buoyancy-reduced weight.',
        ],
        ans: '1.33 × 10<sup>−2</sup> m s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (scaling argument: power dissipated by viscous drag)',
        q: 'A small sphere of radius <i>r</i> and density <i>ρ</i><sub><i>b</i></sub> falls at terminal velocity through a fluid of density <i>ρ</i><sub><i>f</i></sub> and viscosity <i>η</i>. Show that the rate at which heat is generated by viscous drag is proportional to <i>r</i><sup>5</sup>, and find the full expression.',
        steps: [
          '<b>Reasoning.</b> At terminal velocity the sphere moves at constant speed, so all the work done against the viscous drag is dissipated as heat. The power dissipated equals the drag force times the speed:<br><i>P</i> = <i>F</i><sub><i>v</i></sub><i>v</i><sub><i>t</i></sub> = (6π<i>ηrv</i><sub><i>t</i></sub>)<i>v</i><sub><i>t</i></sub> = 6π<i>ηr</i> <i>v</i><sub><i>t</i></sub><sup>2</sup>',
          'Now substitute the terminal velocity <i>v</i><sub><i>t</i></sub> = (2/9) <i>r</i><sup>2</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<i>g</i>/<i>η</i>, so that <i>v</i><sub><i>t</i></sub><sup>2</sup> = (4/81) <i>r</i><sup>4</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<sup>2</sup><i>g</i><sup>2</sup>/<i>η</i><sup>2</sup>:<br><i>P</i> = 6π<i>ηr</i> × (4/81) <i>r</i><sup>4</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<sup>2</sup><i>g</i><sup>2</sup>/<i>η</i><sup>2</sup> = (24π/81) <i>r</i><sup>5</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<sup>2</sup><i>g</i><sup>2</sup>/<i>η</i>',
          '<b>Insight:</b> the <i>r</i><sup>5</sup> dependence is dramatic — doubling the radius increases the heating rate 32-fold. The physical chain is transparent once seen: drag ∝ <i>r</i> (one power), terminal speed ∝ <i>r</i><sup>2</sup>, and power = <i>Fv</i> ∝ <i>r</i> · <i>v</i><sup>2</sup> ∝ <i>r</i> · <i>r</i><sup>4</sup> = <i>r</i><sup>5</sup>. This kind of scaling argument — tracking how each factor’s power of <i>r</i> accumulates — is a hallmark of Advanced-level reasoning.',
        ],
        ans: '<i>P</i> = (8π/27) <i>r</i><sup>5</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<sup>2</sup><i>g</i><sup>2</sup>/<i>η</i> ∝ <i>r</i><sup>5</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define the coefficient of viscosity and state its SI unit and dimensional formula. A fluid layer of area 0.20 m<sup>2</sup> experiences a viscous force of 0.60 N for a velocity gradient of 15 s<sup>−1</sup>. Find the coefficient of viscosity.',
            a: '<i>η</i> = 0.20 Pa·s',
          },
          {
            q: '[NEET] The viscosity of a liquid and the viscosity of a gas are each measured as the temperature is raised. State, with one-line reasoning, how each changes.',
            a: 'Liquid: <i>η</i> decreases; gas: <i>η</i> increases',
          },
          {
            q: '[JEE Main] A steel ball of radius 0.50 mm and density 8000 kg m<sup>−3</sup> falls through a tank of oil of density 900 kg m<sup>−3</sup> and viscosity 0.40 Pa·s. Find its terminal velocity. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '≈ 9.9 × 10<sup>−3</sup> m s<sup>−1</sup>',
          },
          {
            q: '[JEE Main] An air bubble of radius 0.050 mm rises through water (density 1000 kg m<sup>−3</sup>, viscosity 1.0 × 10<sup>−3</sup> Pa·s). Treating the bubble’s density as negligible, find the terminal (rise) speed. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '≈ 5.6 × 10<sup>−3</sup> m s<sup>−1</sup> (directed upward)',
          },
          {
            q: '[JEE Advanced] <i>n</i> identical small spherical droplets, each falling at terminal velocity <i>v</i>, coalesce into a single large drop. Find the terminal velocity of the large drop in terms of <i>n</i> and <i>v</i>.',
            a: '<i>v</i><sub>big</sub> = <i>n</i><sup>2/3</sup><i>v</i>',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'As temperature increases, the coefficient of viscosity of a liquid and of a gas respectively:',
        opts: [
          { label: 'Both increase', nudge: '<b>(a)</b>/<b>(b)</b> wrongly apply a single rule to both phases — the most common error.' },
          { label: 'Both decrease', nudge: '<b>(a)</b>/<b>(b)</b> wrongly apply a single rule to both phases — the most common error.' },
          { label: 'Liquid decreases, gas increases', nudge: null },
          { label: 'Liquid increases, gas decreases', nudge: '<b>(d)</b> reverses both directions.' },
        ],
        correct: 2,
        solution:
          'Liquid viscosity arises from cohesive bonds, which weaken on heating, so <i>η</i> decreases. Gas viscosity arises from molecular diffusion between layers, which intensifies on heating, so <i>η</i> increases. Memorise the split: liquids down, gases up.',
      },
      {
        t: 'mcq',
        q: 'Two spheres of the same material but radii in the ratio 1 : 2 fall through the same viscous liquid. The ratio of their terminal velocities is:',
        opts: [
          { label: '1 : 2', nudge: '<b>(a)</b> uses <i>v</i><sub><i>t</i></sub> ∝ <i>r</i> (forgetting the square).' },
          { label: '1 : 4', nudge: null },
          { label: '1 : 8', nudge: '<b>(c)</b> uses <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>3</sup> (confusing with volume/mass).' },
          { label: '2 : 1', nudge: '<b>(d)</b> inverts the relationship entirely.' },
        ],
        correct: 1,
        solution: 'Terminal velocity ∝ <i>r</i><sup>2</sup>, so the ratio is 1<sup>2</sup> : 2<sup>2</sup> = 1 : 4.',
      },
      {
        t: 'mcq',
        q: 'The dimensional formula of the coefficient of viscosity is:',
        opts: [
          { label: '[M L<sup>−1</sup> T<sup>−1</sup>]', nudge: null },
          { label: '[M L T<sup>−1</sup>]', nudge: '<b>(b)</b>/<b>(d)</b> are dimensionally inconsistent with the definition.' },
          {
            label: '[M L<sup>−1</sup> T<sup>−2</sup>]',
            nudge: '<b>(c)</b> is the dimensional formula of pressure (or stress) — chosen by students who stop at <i>F</i>/<i>A</i> and forget to divide by the velocity gradient.',
          },
          { label: '[M L<sup>2</sup> T<sup>−1</sup>]', nudge: '<b>(b)</b>/<b>(d)</b> are dimensionally inconsistent with the definition.' },
        ],
        correct: 0,
        solution:
          'From <i>η</i> = (<i>F</i>/<i>A</i>)/(d<i>v</i>/d<i>x</i>): [M L<sup>−1</sup> T<sup>−2</sup>] ÷ [T<sup>−1</sup>] = [M L<sup>−1</sup> T<sup>−1</sup>].',
      },
      {
        t: 'mcq',
        q: 'A small water droplet falls through air and is observed to descend at a constant speed. At this instant:',
        opts: [
          {
            label: 'Gravity is greater than the sum of viscous drag and buoyancy',
            nudge: '<b>(a)</b> describes the accelerating phase before terminal velocity is reached.',
          },
          { label: 'Viscous drag plus buoyancy equals gravity', nudge: null },
          {
            label: 'Viscous drag alone equals gravity',
            nudge: '<b>(c)</b> ignores buoyancy (acceptable as an approximation when fluid density is tiny, but not exact).',
          },
          { label: 'The droplet has zero weight', nudge: '<b>(d)</b> is nonsensical — the weight is unchanged.' },
        ],
        correct: 1,
        solution:
          'Constant speed means zero net force, so the two upward forces (viscous drag + buoyancy) exactly balance the downward weight. This is the definition of terminal velocity.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing the temperature dependence.</b> Liquids get less viscous when heated; gases get more viscous. Students routinely apply one rule to both, or flip them. Anchor it physically: heat loosens a liquid’s cohesive grip (think warm honey pouring easily), but speeds up a gas’s molecular mixing (more momentum transfer between layers).',
          '<b>Mis-scaling terminal velocity.</b> <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>2</sup> — not <i>r</i>, not <i>r</i><sup>3</sup>. When a drop splits or droplets coalesce, first find the new radius from volume conservation, then square the radius ratio.',
          '<b>Dropping buoyancy in the terminal-velocity formula.</b> The driving term is the effective weight (<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>), not <i>ρ</i><sub><i>b</i></sub> alone. Forgetting buoyancy overestimates <i>v</i><sub><i>t</i></sub>. For an air bubble in water, <i>ρ</i><sub><i>b</i></sub> < <i>ρ</i><sub><i>f</i></sub> makes the term negative — the bubble rises, which the formula correctly predicts.',
          '<b>Confusing poise with the SI unit.</b> 1 poise = 0.1 Pa·s, and 1 decapoise = 10 poise = 1 Pa·s. Always convert poise to Pa·s before substituting into SI formulas, or your terminal velocity will be off by a factor of ten.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any falling-sphere problem, write the three-force balance — weight, buoyancy, drag — as your very first line. Every result (terminal velocity, viscosity from a measured speed, time to reach terminal velocity) flows from that one equation. And lock in the scaling triple: <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>2</sup>, ∝ (<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>), ∝ 1/<i>η</i> — most NEET/JEE Main questions test a ratio, which you can answer from the scaling alone without ever plugging in numbers.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Viscosity</b> = internal fluid friction; acts only when layers move relative to each other. <b>Newton’s law:</b> <i>F</i> = −<i>ηA</i> d<i>v</i>/d<i>x</i> (negative sign = opposes relative motion).',
            note: '',
          },
          {
            f: 'Coefficient of viscosity <i>η</i>',
            note: 'SI unit Pa·s = decapoise = poiseuille; CGS unit poise; 1 Pa·s = 10 poise. <b>Dimensions</b> [M L<sup>−1</sup> T<sup>−1</sup>].',
          },
          {
            f: 'Temperature',
            note: 'liquids <i>η</i> ↓ with <i>T</i>; gases <i>η</i> ↑ with <i>T</i>. (Opposite behaviours — memorise the split.)',
          },
          { f: 'Stokes’ law', note: '<i>F</i> = 6π<i>ηrv</i> (small slow sphere).' },
          {
            f: 'Terminal velocity',
            note: '<i>v</i><sub><i>t</i></sub> = (2/9) <i>r</i><sup>2</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<i>g</i>/<i>η</i>, from weight = buoyancy + drag. Scalings: <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>2</sup>, (<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>), 1/<i>η</i>.',
          },
          {
            f: 'Applications',
            note: 'lubricant choice by season, shock absorbers, instrument damping, slow-settling cloud droplets, blood flow.',
          },
        ],
        aids: [
          '“Liquids loosen, gases gum up” (hot liquid flows easier, hot gas drags more).',
          '“Terminal velocity goes as r-squared.”',
          '“Weight = buoyancy + drag” at terminal velocity.',
          '“Poise is small — divide by ten for Pa·s.”',
        ],
      },
    ],
  },

  {
    n: '06',
    title: 'Poiseuille’s Law and Viscous Flow Resistance',
    kalam: 'The radius matters enormously: halving a tube’s radius cuts the flow to one-sixteenth (2⁴ = 16).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield extension of viscosity. CBSE Boards ask the statement of Poiseuille’s law and a direct flow-rate calculation. JEE Main reliably tests the <i>r</i><sup>4</sup> dependence and series/parallel combinations of capillaries. NEET favours the “halve the radius” trap and blood-flow applications. JEE Advanced builds the parabolic velocity profile, junction-pressure problems, and the mean-vs-maximum-velocity result.',
      },
      {
        t: 'p',
        html: 'In Topic 05 we watched a single sphere fall through a still fluid and learned how viscosity drags on it. Now flip the picture: hold the fluid’s container still and make the fluid itself flow through a thin tube — water through a drip pipe, blood through an artery, ink through the nib of a pen. How fast does it flow? That is the question Jean Léonard Marie Poiseuille (a French physician studying blood flow) answered, and his law is one of the most practically important results in all of fluid physics.',
      },
      {
        t: 'p',
        html: 'Think about what limits the flow. Push harder — a bigger <b>pressure difference</b> between the two ends — and more fluid flows; that much is obvious, like opening a tap wider. Use a <b>longer</b> tube and the flow drops, because the fluid has to fight viscous drag over a greater distance. Use a <b>more viscous</b> fluid (honey instead of water) and flow drops, because internal friction is higher. So far, intuitive. But the fourth factor is the shocker: the flow depends on the tube’s radius raised to the <b>fourth power</b>, <i>r</i><sup>4</sup>. Not <i>r</i>, not <i>r</i><sup>2</sup> (the area), but <i>r</i><sup>4</sup>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Why <i>r</i><sup>4</sup> and not just the cross-sectional area <i>r</i><sup>2</sup>? Two effects multiply. First, a wider tube has more cross-sectional area for fluid to pass through — that’s one factor of <i>r</i><sup>2</sup>. Second, and less obvious: in a wider tube, the fluid in the middle is much farther from the sticky walls, so on average it moves faster (the walls grip the outer layers, but the core slides freely). This average-speed boost contributes another factor of <i>r</i><sup>2</sup>. Multiply them — area × average speed — and you get <i>r</i><sup>2</sup> × <i>r</i><sup>2</sup> = <i>r</i><sup>4</sup>. The radius matters enormously: <b>halving a tube’s radius cuts the flow to one-sixteenth</b> (2<sup>4</sup> = 16). This is why a tiny narrowing of an artery by cholesterol plaque can choke blood flow dramatically, and why a slightly clogged fuel line starves an engine.',
      },
      {
        t: 'p',
        html: 'The flow in a viscous tube is not uniform across the cross-section. The fluid touching the wall is essentially stuck (the “no-slip condition”), while the fluid at the centre races ahead. The speed varies smoothly from zero at the wall to a maximum at the axis, tracing a <b>parabolic velocity profile</b> — a bullet-shaped front. The average speed turns out to be exactly half the maximum (centre) speed.',
      },
      {
        t: 'p',
        html: 'There is a beautiful unifying idea here. Compare fluid flow to electric current. A pressure difference Δ<i>P</i> drives a volume flow <i>Q</i> through a tube, just as a voltage <i>V</i> drives a current <i>I</i> through a wire. The tube resists the flow, and we can define a <b>fluid resistance</b> <i>R</i> = Δ<i>P</i>/<i>Q</i>, perfectly analogous to Ohm’s law <i>R</i> = <i>V</i>/<i>I</i>. This analogy is not a loose metaphor — it works quantitatively, including the rules for combining tubes in series and parallel, exactly like resistors.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Poiseuille’s law holds only for: (1) <b>steady, laminar (streamline) flow</b> — it fails once the flow turns turbulent (high Reynolds number); (2) an <b>incompressible, Newtonian</b> fluid (constant <i>η</i>); (3) a <b>long, straight, uniform</b> cylindrical tube (entrance effects neglected); (4) the <b>no-slip</b> boundary condition at the walls. For blood (a non-Newtonian suspension) or for fast/turbulent flow, the law is only approximate.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Poiseuille’s law',
        main: 'volume flow rate <i>Q</i> through a horizontal capillary:<br><i>Q</i> = πΔ<i>P</i> <i>r</i><sup>4</sup>/(8<i>ηl</i>) = π(<i>P</i><sub>1</sub> − <i>P</i><sub>2</sub>) <i>r</i><sup>4</sup>/(8<i>ηl</i>)',
        legend: [
          '<i>Q</i> = volume flow rate (m<sup>3</sup> s<sup>−1</sup>)',
          'Δ<i>P</i> = <i>P</i><sub>1</sub> − <i>P</i><sub>2</sub> = pressure difference across the ends',
          '<i>r</i> = tube radius',
          '<i>l</i> = tube length',
          '<i>η</i> = coefficient of viscosity',
        ],
        note: 'Key scalings: <i>Q</i> ∝ Δ<i>P</i>, <i>Q</i> ∝ 1/<i>l</i>, <i>Q</i> ∝ 1/<i>η</i>, <i>Q</i> ∝ <i>r</i><sup>4</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Fluid (viscous) resistance',
        main: 'by analogy with Ohm’s law:<br><i>R</i> = Δ<i>P</i>/<i>Q</i> = 8<i>ηl</i>/(π<i>r</i><sup>4</sup>)',
        legend: [],
        note: '(units: Pa s m<sup>−3</sup>)<br>• Driving “voltage” ↔ Δ<i>P</i>; “current” ↔ <i>Q</i>; “resistance” ↔ <i>R</i>.',
      },
      {
        t: 'formula',
        kicker: 'Combination of tubes',
        main: '<b>Series</b> (same <i>Q</i> through each, pressure drops add):<br><i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + …<br><b>Parallel</b> (same Δ<i>P</i> across each, flows add):<br>1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + …',
        legend: [],
        note: '(same analogy as resistors)',
      },
      {
        t: 'formula',
        kicker: 'Velocity profile (parabolic)',
        main: 'At radial distance <i>s</i> from the axis of a tube of radius <i>r</i>:<br><i>v</i>(<i>s</i>) = (Δ<i>P</i>/(4<i>ηl</i>))(<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>)<br><b>Maximum (axial) speed</b>: <i>v</i><sub>max</sub> = Δ<i>P</i> <i>r</i><sup>2</sup>/(4<i>ηl</i>) (at <i>s</i> = 0)<br><b>Mean speed</b>: <i>v</i><sub>avg</sub> = <i>Q</i>/(π<i>r</i><sup>2</sup>) = Δ<i>P</i> <i>r</i><sup>2</sup>/(8<i>ηl</i>) = <i>v</i><sub>max</sub>/2',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Critical velocity',
        main: '(onset of turbulence; links to Reynolds number from Topics 04–05):<br><i>v</i><sub><i>c</i></sub> = <i>R</i><sub><i>e</i></sub><i>η</i>/(<i>ρD</i>)',
        legend: ['<i>D</i> = diameter of the tube (2<i>r</i>)', '<i>R</i><sub><i>e</i></sub> = Reynolds number (≈ 2000 at the laminar–turbulent transition)'],
        note: '<i>R</i><sub><i>e</i></sub> ≈ 2000 marks the laminar–turbulent transition.',
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Poiseuille’s law by dimensional analysis (CBSE/JEE Main method).</b> Reasoning: the volume flow rate <i>Q</i> should depend on the pressure gradient Δ<i>P</i>/<i>l</i> (the driving force per length), the viscosity <i>η</i> (the resistance), and the tube radius <i>r</i> (the geometry). Assume a power-law form:<br><i>Q</i> = <i>k</i>(Δ<i>P</i>/<i>l</i>)<sup><i>a</i></sup><i>η</i><sup><i>b</i></sup><i>r</i><sup><i>c</i></sup><br>where <i>k</i> is a dimensionless constant. Write dimensions ([<i>Q</i>] = [L<sup>3</sup> T<sup>−1</sup>], [Δ<i>P</i>/<i>l</i>] = [M L<sup>−2</sup> T<sup>−2</sup>], [<i>η</i>] = [M L<sup>−1</sup> T<sup>−1</sup>], [<i>r</i>] = [L]):<br>[L<sup>3</sup> T<sup>−1</sup>] = [M L<sup>−2</sup> T<sup>−2</sup>]<sup><i>a</i></sup>[M L<sup>−1</sup> T<sup>−1</sup>]<sup><i>b</i></sup>[L]<sup><i>c</i></sup>',
      },
      {
        t: 'p',
        html: 'Match powers of M, L, T:<br>• M: 0 = <i>a</i> + <i>b</i><br>• T: −1 = −2<i>a</i> − <i>b</i><br>• L: 3 = −2<i>a</i> − <i>b</i> + <i>c</i><br><br>From the first two: <i>a</i> = 1, <i>b</i> = −1. Substituting into the third: 3 = −2(1) − (−1) + <i>c</i> = −1 + <i>c</i>, so <i>c</i> = 4. Therefore<br><i>Q</i> = <i>k</i>(Δ<i>P</i>/<i>l</i>)(1/<i>η</i>)<i>r</i><sup>4</sup> = <i>k</i> Δ<i>P</i> <i>r</i><sup>4</sup>/(<i>ηl</i>)<br>Dimensional analysis cannot fix the pure number <i>k</i>; a full calculus treatment (Derivation 2) gives <i>k</i> = π/8, yielding <i>Q</i> = πΔ<i>P</i> <i>r</i><sup>4</sup>/(8<i>ηl</i>). <b>Physical reasoning:</b> the <i>r</i><sup>4</sup> emerges automatically from the dimensional bookkeeping — it is not assumed, which is what makes this derivation satisfying.',
      },
      { t: 'p', html: '<b>Derivation 2 — Parabolic velocity profile and the factor π/8 (JEE Advanced).</b>' },
      { t: 'fig', id: 'p11-09-fig-9.11' },
      {
        t: 'p',
        html: '<b>Assumption:</b> steady laminar flow; consider a coaxial fluid cylinder of radius <i>s</i> and length <i>l</i>. Two forces balance on it: the net pressure force pushing it forward and the viscous drag from the slower-moving fluid shell just outside it.',
      },
      {
        t: 'p',
        html: 'The pressure force driving the inner cylinder forward: (<i>P</i><sub>1</sub> − <i>P</i><sub>2</sub>)π<i>s</i><sup>2</sup> = Δ<i>P</i> π<i>s</i><sup>2</sup>. The viscous drag on its curved surface (area 2π<i>sl</i>), by Newton’s law of viscosity: −<i>η</i>(2π<i>sl</i>) d<i>v</i>/d<i>s</i>. For steady (non-accelerating) flow these balance:<br>Δ<i>P</i> π<i>s</i><sup>2</sup> = −<i>η</i>(2π<i>sl</i>) d<i>v</i>/d<i>s</i> ⟹ d<i>v</i>/d<i>s</i> = −(Δ<i>P</i>/(2<i>ηl</i>))<i>s</i><br>Integrate from <i>s</i> out to the wall at <i>s</i> = <i>r</i>, where <i>v</i> = 0 (no-slip):<br><i>v</i>(<i>s</i>) = (Δ<i>P</i>/(4<i>ηl</i>))(<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>)<br>This is the parabolic profile. Now find the total flow by summing the contributions of thin annular rings of area 2π<i>s</i> d<i>s</i>:<br><i>Q</i> = ∫<sub>0</sub><sup><i>r</i></sup> <i>v</i>(<i>s</i>) 2π<i>s</i> d<i>s</i> = (2πΔ<i>P</i>/(4<i>ηl</i>)) ∫<sub>0</sub><sup><i>r</i></sup> (<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>)<i>s</i> d<i>s</i> = (πΔ<i>P</i>/(2<i>ηl</i>)) [<i>r</i><sup>2</sup><i>s</i><sup>2</sup>/2 − <i>s</i><sup>4</sup>/4]<sub>0</sub><sup><i>r</i></sup><br><i>Q</i> = (πΔ<i>P</i>/(2<i>ηl</i>)) · <i>r</i><sup>4</sup>/4 = πΔ<i>P</i> <i>r</i><sup>4</sup>/(8<i>ηl</i>)<br>This recovers Poiseuille’s law with the constant π/8. The mean speed is <i>v</i><sub>avg</sub> = <i>Q</i>/(π<i>r</i><sup>2</sup>) = Δ<i>P</i> <i>r</i><sup>2</sup>/(8<i>ηl</i>), exactly half the axial maximum <i>v</i><sub>max</sub> = Δ<i>P</i> <i>r</i><sup>2</sup>/(4<i>ηl</i>).',
      },
      {
        t: 'p',
        html: '<b>Key procedure — combining tubes (the resistance analogy).</b> Treat each tube as a resistor <i>R</i> = 8<i>ηl</i>/(π<i>r</i><sup>4</sup>). For tubes end-to-end (series), the same flow passes through each and the pressure drops add, so <i>R</i><sub>eq</sub> = ∑ <i>R</i><sub><i>i</i></sub>. For tubes side-by-side between the same two reservoirs (parallel), each feels the same Δ<i>P</i> and the flows add, so 1/<i>R</i><sub>eq</sub> = ∑ 1/<i>R</i><sub><i>i</i></sub>. Then <i>Q</i> = Δ<i>P</i>/<i>R</i><sub>eq</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Water flows through a horizontal capillary tube of length 0.20 m and radius 0.50 mm under a pressure difference of 1.0 × 10<sup>3</sup> Pa between its ends. The viscosity of water is 1.0 × 10<sup>−3</sup> Pa·s. Find the volume flow rate.',
        steps: [
          '<b>Given:</b> <i>l</i> = 0.20 m, <i>r</i> = 0.50 mm = 5.0 × 10<sup>−4</sup> m, Δ<i>P</i> = 1.0 × 10<sup>3</sup> Pa, <i>η</i> = 1.0 × 10<sup>−3</sup> Pa·s.',
          'By Poiseuille’s law:<br><i>Q</i> = πΔ<i>P</i> <i>r</i><sup>4</sup>/(8<i>ηl</i>) = π(1.0 × 10<sup>3</sup>)(5.0 × 10<sup>−4</sup>)<sup>4</sup>/(8(1.0 × 10<sup>−3</sup>)(0.20))',
          'Compute <i>r</i><sup>4</sup> = (5.0 × 10<sup>−4</sup>)<sup>4</sup> = 6.25 × 10<sup>−14</sup> m<sup>4</sup>:<br><i>Q</i> = π(1.0 × 10<sup>3</sup>)(6.25 × 10<sup>−14</sup>)/(1.6 × 10<sup>−3</sup>) = π(6.25 × 10<sup>−11</sup>)/(1.6 × 10<sup>−3</sup>)',
          'That is about 0.12 mL per second.',
        ],
        ans: '1.23 × 10<sup>−7</sup> m<sup>3</sup> s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A liquid flows through a capillary tube at a rate <i>Q</i>. If a second tube of the <b>same length</b> but <b>half the radius</b> is used under the same pressure difference, the new flow rate is:',
        steps: [
          '<b>The trap to avoid:</b> thinking flow scales with area (<i>r</i><sup>2</sup>, giving <i>Q</i>/4) or linearly with radius (<i>Q</i>/2). Poiseuille’s law scales as <i>r</i><sup>4</sup>.',
          '<b>Speed approach.</b> Since <i>Q</i> ∝ <i>r</i><sup>4</sup>:<br><i>Q</i>′ = <i>Q</i>((<i>r</i>/2)/<i>r</i>)<sup>4</sup> = <i>Q</i>(1/2)<sup>4</sup>',
          '<b>Mental check:</b> “Radius to the fourth” — halving the radius drops the flow by 2<sup>4</sup> = 16. This extreme sensitivity is the whole point of the law and the most-tested fact about it.',
        ],
        ans: '<i>Q</i>/16',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (series combination — fluid resistance)',
        q: 'Two capillary tubes are joined end to end. The first has length <i>l</i> and radius <i>r</i>; the second has length <i>l</i> and radius 2<i>r</i>. A pressure difference Δ<i>P</i> is maintained across the combination, with the liquid (viscosity <i>η</i>) flowing through both. Find the overall volume flow rate, and the pressure drop across the narrow tube.',
        steps: [
          'The tubes are in <b>series</b>, so add their fluid resistances. With <i>R</i> = 8<i>ηl</i>/(π<i>r</i>′<sup>4</sup>) for a tube of radius <i>r</i>′:<br><i>R</i><sub>1</sub> = 8<i>ηl</i>/(π<i>r</i><sup>4</sup>), <i>R</i><sub>2</sub> = 8<i>ηl</i>/(π(2<i>r</i>)<sup>4</sup>) = 8<i>ηl</i>/(16π<i>r</i><sup>4</sup>) = <i>R</i><sub>1</sub>/16<br><i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> = <i>R</i><sub>1</sub>(1 + 1/16) = (17/16)<i>R</i><sub>1</sub> = (17/16) · 8<i>ηl</i>/(π<i>r</i><sup>4</sup>) = 17<i>ηl</i>/(2π<i>r</i><sup>4</sup>)',
          'Overall flow:<br><i>Q</i> = Δ<i>P</i>/<i>R</i><sub>eq</sub> = 2π<i>r</i><sup>4</sup>Δ<i>P</i>/(17<i>ηl</i>)',
          'Pressure drop across the narrow tube (same <i>Q</i>, so Δ<i>P</i><sub>1</sub> = <i>QR</i><sub>1</sub>):<br>Δ<i>P</i><sub>1</sub> = <i>QR</i><sub>1</sub> = (Δ<i>P</i>/<i>R</i><sub>eq</sub>) · <i>R</i><sub>1</sub> = Δ<i>P</i> · <i>R</i><sub>1</sub>/((17/16)<i>R</i><sub>1</sub>) = (16/17)Δ<i>P</i>',
          'Almost the entire pressure drop (16/17) occurs across the narrow tube — the wide tube barely resists. This mirrors how, in a series circuit, the larger resistor takes the larger share of the voltage.',
        ],
        ans: '0.94 Δ<i>P</i>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (mean vs. maximum velocity from the profile)',
        q: 'For laminar flow of a liquid through a horizontal tube of radius <i>r</i> under a pressure difference Δ<i>P</i> over length <i>l</i>, show from the parabolic velocity profile that the mean flow speed equals half the maximum speed, and find the radial distance from the axis at which the local speed equals the mean speed.',
        steps: [
          'From Derivation 2, the velocity profile is <i>v</i>(<i>s</i>) = (Δ<i>P</i>/(4<i>ηl</i>))(<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>), so the maximum (axial) speed is<br><i>v</i><sub>max</sub> = <i>v</i>(0) = Δ<i>P</i> <i>r</i><sup>2</sup>/(4<i>ηl</i>)',
          'The mean speed is the flow rate divided by the area:<br><i>v</i><sub>avg</sub> = <i>Q</i>/(π<i>r</i><sup>2</sup>) = (1/(π<i>r</i><sup>2</sup>)) · πΔ<i>P</i> <i>r</i><sup>4</sup>/(8<i>ηl</i>) = Δ<i>P</i> <i>r</i><sup>2</sup>/(8<i>ηl</i>) = <i>v</i><sub>max</sub>/2 ✓',
          'To find where the local speed equals the mean speed, set <i>v</i>(<i>s</i>) = <i>v</i><sub>avg</sub> = ½<i>v</i><sub>max</sub>:<br>(Δ<i>P</i>/(4<i>ηl</i>))(<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>) = ½ · Δ<i>P</i> <i>r</i><sup>2</sup>/(4<i>ηl</i>) ⟹ <i>r</i><sup>2</sup> − <i>s</i><sup>2</sup> = <i>r</i><sup>2</sup>/2 ⟹ <i>s</i> = <i>r</i>/√2',
          '<b>Insight:</b> the fluid moves at the average speed at about 71% of the way out from the axis — closer to the wall than the centre, because the slow near-wall fluid occupies a disproportionate share of the cross-sectional area.',
        ],
        ans: '0.71 <i>r</i>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State Poiseuille’s law and write the expression for the volume flow rate through a capillary, defining each symbol. On what power of the radius does the flow rate depend?',
            a: '<i>Q</i> ∝ <i>r</i><sup>4</sup>',
          },
          {
            q: '[NEET] The radius of a pipe carrying a viscous liquid is increased to three times its original value, keeping length and pressure difference unchanged. By what factor does the flow rate change?',
            a: 'Increases by 81× (3<sup>4</sup>)',
          },
          {
            q: '[JEE Main] Water flows through a horizontal tube of radius 1.0 mm and length 1.0 m at 2.0 × 10<sup>−6</sup> m<sup>3</sup> s<sup>−1</sup>. Find the pressure difference across the tube. (<i>η</i><sub>water</sub> = 1.0 × 10<sup>−3</sup> Pa·s.)',
            a: 'Δ<i>P</i> ≈ 5.1 × 10<sup>3</sup> Pa',
          },
          {
            q: '[JEE Main] Two identical capillaries are connected (a) in series and (b) in parallel across the same pressure difference. Find the ratio of the total flow rate in the parallel arrangement to that in the series arrangement.',
            a: '4 : 1',
          },
          {
            q: '[JEE Advanced] A capillary of radius <i>r</i> and length <i>l</i> delivers a flow <i>Q</i> under pressure difference Δ<i>P</i>. It is replaced by a tube of the same length but with radius varying — model it as two equal-length halves of radii <i>r</i> and <i>r</i>/2 in series. Find the new flow rate in terms of <i>Q</i>.',
            a: '<i>Q</i>′ = 2<i>Q</i>/17',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'If the radius of a capillary tube is doubled while length and pressure difference are unchanged, the volume flow rate becomes:',
        opts: [
          { label: '2×', nudge: '<b>(a)</b> uses <i>Q</i> ∝ <i>r</i>.' },
          { label: '4×', nudge: '<b>(b)</b> uses <i>Q</i> ∝ <i>r</i><sup>2</sup> (area).' },
          { label: '8×', nudge: '<b>(c)</b> uses <i>Q</i> ∝ <i>r</i><sup>3</sup> (volume).' },
          { label: '16×', nudge: null },
        ],
        correct: 3,
        solution:
          '<i>Q</i> ∝ <i>r</i><sup>4</sup>, so doubling the radius multiplies the flow by 2<sup>4</sup> = 16. Each wrong option uses too low a power of <i>r</i>. The <i>r</i><sup>4</sup> law is the single most important fact here.',
      },
      {
        t: 'mcq',
        q: 'The velocity profile of a viscous liquid undergoing laminar flow through a cylindrical pipe is:',
        opts: [
          { label: 'Uniform across the cross-section', nudge: '<b>(a)</b> describes ideal (non-viscous) plug flow.' },
          {
            label: 'Linear, zero at the centre',
            nudge: '<b>(b)</b>/<b>(d)</b> invert the profile — the centre is fastest, the walls are stationary.',
          },
          { label: 'Parabolic, maximum at the axis', nudge: null },
          {
            label: 'Maximum at the walls',
            nudge: '<b>(b)</b>/<b>(d)</b> invert the profile — the centre is fastest, the walls are stationary.',
          },
        ],
        correct: 2,
        solution: 'No-slip at the walls makes the speed zero there; it rises parabolically to a maximum on the axis.',
      },
      {
        t: 'mcq',
        q: 'Two tubes of fluid resistance <i>R</i> and 2<i>R</i> are connected in series. The equivalent fluid resistance is:',
        opts: [
          { label: '<i>R</i>/3', nudge: '<b>(a)</b> has no valid working behind it — not even the parallel formula gives <i>R</i>/3.' },
          { label: '2<i>R</i>/3', nudge: '<b>(b)</b> applies the parallel formula by mistake: <i>R</i> · 2<i>R</i>/(<i>R</i> + 2<i>R</i>) = 2<i>R</i>/3.' },
          { label: '3<i>R</i>', nudge: null },
          { label: '2<i>R</i>', nudge: '<b>(d)</b> ignores one tube entirely.' },
        ],
        correct: 2,
        solution: 'In series, fluid resistances add (like resistors): <i>R</i> + 2<i>R</i> = 3<i>R</i>.',
      },
      {
        t: 'mcq',
        q: 'In a person’s artery, a deposit narrows the radius to 80% of normal. Assuming Poiseuille flow at the same pressure difference, the blood flow rate falls to approximately:',
        opts: [
          { label: '80%', nudge: '<b>(a)</b> uses <i>r</i><sup>1</sup>.' },
          { label: '64%', nudge: '<b>(b)</b> uses <i>r</i><sup>2</sup>.' },
          { label: '51%', nudge: '<b>(c)</b> uses <i>r</i><sup>3</sup>.' },
          { label: '41%', nudge: null },
        ],
        correct: 3,
        solution:
          '<i>Q</i> ∝ <i>r</i><sup>4</sup>, so the flow scales by (0.80)<sup>4</sup> = 0.41, i.e. about 41%. The dramatic drop from a modest narrowing — to less than half — is exactly why arterial plaque is so dangerous, and is the medical punchline of Poiseuille’s law.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using the wrong power of <i>r</i>.</b> Flow rate goes as <i>r</i><sup>4</sup>, not <i>r</i><sup>2</sup> (area) or <i>r</i><sup>3</sup> (volume). When a problem changes the radius, raise the ratio to the fourth power. This single slip accounts for most errors in the topic.',
          '<b>Mixing up series and parallel rules.</b> Fluid resistances combine exactly like electrical resistors: add in series, reciprocal-add in parallel. The narrow tube (huge <i>R</i> ∝ 1/<i>r</i><sup>4</sup>) dominates a series combination, just as the large resistor dominates a series circuit.',
          '<b>Applying Poiseuille’s law to turbulent flow.</b> The law is for laminar flow only. Check the Reynolds number first; above ∼ 2000 the flow turns turbulent and <i>Q</i> no longer scales as Δ<i>P</i> <i>r</i><sup>4</sup> (it grows more slowly than Δ<i>P</i>).',
          '<b>Confusing mean and maximum speed.</b> The centre-line speed is the maximum; the mean speed (used in <i>Q</i> = <i>v</i><sub>avg</sub>π<i>r</i><sup>2</sup>) is half of it. Use the mean for flow-rate questions and the maximum only when the axial speed is specifically asked.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “change the tube” question, lean on the scaling <i>Q</i> ∝ Δ<i>P</i> <i>r</i><sup>4</sup>/(<i>ηl</i>) and work with ratios — you rarely need to plug in the messy constants. And memorise the resistance analogy (Δ<i>P</i> ↔ <i>V</i>, <i>Q</i> ↔ <i>I</i>, <i>R</i> = 8<i>ηl</i>/(π<i>r</i><sup>4</sup>)); it turns every multi-tube network into a familiar circuit problem you already know how to solve.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Poiseuille’s law',
            note: '<i>Q</i> = πΔ<i>P</i> <i>r</i><sup>4</sup>/(8<i>ηl</i>) — laminar flow through a capillary. Scalings: <i>Q</i> ∝ Δ<i>P</i>, <i>r</i><sup>4</sup>, 1/<i>l</i>, 1/<i>η</i>.',
          },
          {
            f: 'The <i>r</i><sup>4</sup> rule',
            note: 'halve the radius ⇒ flow drops to 1/16; double it ⇒ 16×. Extreme radius sensitivity.',
          },
          {
            f: 'Fluid resistance',
            note: '<i>R</i> = Δ<i>P</i>/<i>Q</i> = 8<i>ηl</i>/(π<i>r</i><sup>4</sup>) (Ohm’s-law analogy). <b>Series:</b> <i>R</i><sub>eq</sub> = ∑ <i>R</i><sub><i>i</i></sub>. <b>Parallel:</b> 1/<i>R</i><sub>eq</sub> = ∑ 1/<i>R</i><sub><i>i</i></sub>.',
          },
          {
            f: 'Velocity profile',
            note: 'parabolic, <i>v</i>(<i>s</i>) = (Δ<i>P</i>/(4<i>ηl</i>))(<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>); <i>v</i><sub>max</sub> at axis; <i>v</i><sub>avg</sub> = <i>v</i><sub>max</sub>/2.',
          },
          {
            f: '<b>Valid only for</b> steady, laminar, incompressible, Newtonian flow in a long uniform tube (<i>R</i><sub><i>e</i></sub> ≲ 2000).',
            note: '',
          },
          {
            f: 'Applications',
            note: 'blood flow (arterial narrowing), IV drips, hypodermic needles, lubrication channels.',
          },
        ],
        aids: [
          '“Flow goes as radius to the fourth.”',
          '“Pressure is voltage, flow is current, 8<i>ηl</i>/(π<i>r</i><sup>4</sup>) is resistance.”',
          '“Add in series, reciprocal in parallel.”',
          '“Mean is half the max.”',
        ],
      },
    ],
  },
];
