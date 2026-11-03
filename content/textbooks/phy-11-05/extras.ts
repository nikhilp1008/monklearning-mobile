import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5's five Additional Topics, word for word from the Master Reference
 * book, pages 348 to 363: the addenda's shared opening (p. 348, set at the
 * head of Addendum A), A Spring–Block Systems: Compression, Collision, Release
 * (pp. 348 to 351), B Continuous Mass: Chains, Sand and Conveyor Belts
 * (pp. 351 to 354), C Restitution Past the First Bounce: Series, Moving
 * Walls, General e (pp. 354 to 357), D Oblique Collisions: The Line-of-Impact
 * Procedure (pp. 357 to 360) and E Connected Bodies: Strings, Pulleys and
 * Cancelled Work (pp. 360 to 363). No drawings in these pages.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Spring–Block Systems: Compression, Collision, Release',
    extra: true,
    kalam:
      'Addendum A builds the spring–block toolkit the chapter’s ½kx² begs for but never deploys: maximum compression, two-block spring collisions, and the drop-onto-a-spring quadratic.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter taught you the machinery — dot products, the work–energy theorem, potential energies, conservation laws, power, collisions, and the vertical circle — and it taught it well. But five examinable families sit just outside its coverage, and every one of them appears in real papers. Addendum A builds the spring–block toolkit the chapter’s ½<i>kx</i><sup>2</sup> begs for but never deploys: maximum compression, two-block spring collisions, and the drop-onto-a-spring quadratic. Addendum B handles mass as a continuous quantity — chains pulled off tables, sand landing on belts — where the famous factor of two in conveyor-belt power lives. Addendum C extends restitution past the chapter’s single bounce: geometric series of bounces, moving walls, and the general-<i>e</i> velocity formulas. Addendum D supplies the line-of-impact procedure for oblique collisions, which the chapter names but never executes. Addendum E applies the work–energy theorem to systems joined by strings and pulleys, using one cancellation most students never learn to exploit.<br><br>Nothing below is new theory — every method is the chapter’s own energy bookkeeping, applied one system bigger or one bounce further.',
      },
      {
        t: 'p',
        html: 'The chapter stores elastic energy (<i>U</i> = ½<i>kx</i><sup>2</sup>) and derives it, then never spends it. Yet “find the maximum compression” is among the most repeated JEE Main structures in this chapter, and CBSE asks the drop-onto-spring numerical directly. Three situations cover nearly everything.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Situation 1 — one block meets a spring (wall-mounted or free-standing), block mass <i>m</i>, spring constant <i>k</i>.</b> Only gravity, the normal force, and the spring force act. The first two either do no work or are accounted for explicitly, and the spring force is conservative. So mechanical energy of the block–spring system is conserved:<br><i>K</i><sub><i>i</i></sub> + <i>U</i><sub>g,<i>i</i></sub> + <i>U</i><sub>s,<i>i</i></sub> = <i>K</i><sub><i>f</i></sub> + <i>U</i><sub>g,<i>f</i></sub> + <i>U</i><sub>s,<i>f</i></sub><br>with <i>U</i><sub><i>s</i></sub> = ½<i>kx</i><sup>2</sup> and <i>U</i><sub><i>g</i></sub> = <i>mgh</i> measured from any fixed level. At maximum compression the block is instantaneously at rest (<i>K</i><sub><i>f</i></sub> = 0).',
      },
      {
        t: 'p',
        html: '<b>Situation 2 — one block collides into another through a spring.</b> During compression the spring force is internal to the two-block system, and no external horizontal force acts, so <b>momentum is conserved at every instant</b>, including the instant of maximum compression. At that instant the two blocks share a common velocity <i>V</i> (their relative velocity is zero):<br><i>V</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br>Then energy finishes the job. All the kinetic energy “missing” between the start and the common-velocity state sits in the spring:<br>½<i>kx</i><sub>max</sub><sup>2</sup> = <i>K</i><sub>initial</sub> − ½(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>V</i><sup>2</sup> = ½ (<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)) (<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<sup>2</sup><br>so that<br><i>x</i><sub>max</sub> = √(<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>k</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))) |<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>|',
      },
      {
        t: 'p',
        html: 'Dimension check: <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>k</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)) has units kg/(N/m) = kg·s<sup>2</sup>/kg = s<sup>2</sup>, and multiplying by (<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<sup>2</sup> in m<sup>2</sup>/s<sup>2</sup> gives m<sup>2</sup>. The square root is a length, as required.',
      },
      {
        t: 'p',
        html: '<b>Situation 3 — the spring re-expands.</b> While the spring is compressed and later returns to its natural length, it hands back exactly the energy it stored (it is conservative). Consequently, after the spring reaches its natural length again, the two blocks have precisely the velocities of a <b>perfectly elastic 1-D collision</b> with <i>e</i> = 1 — the formulas of Topic 07 (Collisions) apply verbatim. A light spring between two blocks is nature’s elastic collider.',
      },
      {
        t: 'p',
        html: '<b>Two standing warnings.</b><br>• In Situation 2 you may not take the spring’s work on one block as −½<i>kx</i><sup>2</sup>: both ends of the spring move, so its work on either block alone is not fixed by the compression. Bookkeep the whole system.<br>• When a block drops onto a vertical spring, gravity keeps working during the compression. The correct balance at maximum compression <i>x</i> (fallen height <i>h</i> + <i>x</i>) is<br><i>mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup>',
      },
      {
        t: 'p',
        html: 'Setting <i>mgh</i> = ½<i>kx</i><sup>2</sup> — forgetting the <i>mgx</i> term — is the single most common error in this family.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 2 kg block moving at 6 m/s on a smooth floor overtakes a 4 kg block at rest, with a light spring of constant <i>k</i> = 300 N/m attached to its front face. Find the maximum compression of the spring.',
        steps: [
          'Common velocity at maximum compression:<br><i>V</i> = ((2)(6) + (4)(0))/(2 + 4) = 12/6 = 2 m/s',
          'Kinetic energy before, and at the common-velocity instant:<br><i>K</i><sub><i>i</i></sub> = ½(2)(6)<sup>2</sup> = 36 J,   <i>K</i><sub><i>V</i></sub> = ½(6)(2)<sup>2</sup> = 12 J',
          'The missing 36 − 12 = 24 J sits in the spring:<br>½(300) <i>x</i><sup>2</sup> = 24   ⇒   <i>x</i><sup>2</sup> = 48/300 = 0.16 m<sup>2</sup>,   <i>x</i><sub>max</sub> = 0.40 m',
          '<b>Check via the compact formula:</b><br><i>x</i><sub>max</sub> = √((2)(4)/((300)(6))) × 6 = √(8/1800) × 6 = √0.16 = 0.40 m ✓',
          'Both routes agree, and the units reduce correctly to metres.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A 2 kg block is released from rest 0.48 m above the top of an uncompressed vertical spring of constant <i>k</i> = 1000 N/m. Find the maximum compression. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Between release and maximum compression <i>x</i>, gravity does work over the total drop <i>h</i> + <i>x</i> and the spring absorbs everything:<br><i>mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup>',
          'Substituting:<br>(2)(10)(0.48 + <i>x</i>) = ½(1000)<i>x</i><sup>2</sup>   ⇒   500<i>x</i><sup>2</sup> − 20<i>x</i> − 9.6 = 0',
          'Divide by 20:<br>25<i>x</i><sup>2</sup> − <i>x</i> − 0.48 = 0   ⇒   <i>x</i> = (1 ± √(1 + 4(25)(0.48)))/50 = (1 ± √49)/50',
          'Taking the positive root:<br><i>x</i> = (1 + 7)/50 = 0.16 m',
          '<b>Verification by direct energy tally.</b> Gravitational PE surrendered: <i>mg</i>(<i>h</i> + <i>x</i>) = (2)(10)(0.64) = 12.8 J. Spring PE gained: ½(1000)(0.16)<sup>2</sup> = ½(1000)(0.0256) = 12.8 J. Equal, with units of joules on both sides.',
          '<b>Why the naive shortcut fails.</b> Setting <i>mgh</i> = ½<i>kx</i><sup>2</sup> gives <i>x</i><sup>2</sup> = 9.6/500 = 0.0192 m<sup>2</sup>, i.e. <i>x</i> ≈ 0.139 m — about 13% low, because gravity does another <i>mgx</i> ≈ 3.2 J of work during the compression. An examiner who offers 0.14 m as a distractor knows exactly which error you made.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A 1 kg block moving at 4 m/s hits a light spring of constant 1600 N/m fixed to a wall. Find the maximum compression.',
            a: '½(1600)<i>x</i><sup>2</sup> = ½(1)(16) gives <i>x</i><sup>2</sup> = 0.0100 m<sup>2</sup>, so <i>x</i> = 0.10 m.',
          },
          {
            q: 'A 2 kg block is pushed against a spring (<i>k</i> = 800 N/m), compressing it 0.25 m, and released on a smooth floor. Find its speed after losing contact with the spring.',
            a: 'Stored ½(800)(0.25)<sup>2</sup> = 25 J becomes ½(2)<i>v</i><sup>2</sup>, so <i>v</i> = 5 m/s.',
          },
          {
            q: 'A 2 kg block moving at 6 m/s collides with a stationary 4 kg block through a spring of constant 300 N/m. Find the maximum compression.',
            a: 'Common velocity <i>V</i> = 12/6 = 2 m/s; <i>K</i><sub><i>i</i></sub> = 36 J, <i>K</i><sub><i>V</i></sub> = 12 J; ½(300)<i>x</i><sup>2</sup> = 24 gives <i>x</i> = 0.40 m.',
          },
          {
            q: 'A 1 kg block is dropped from rest from 0.80 m above an uncompressed vertical spring of constant 500 N/m. Find the maximum compression. Take <i>g</i> = 10 m/s<sup>2</sup>.',
            a: '(1)(10)(0.80 + <i>x</i>) = ½(500)<i>x</i><sup>2</sup>, i.e. 250<i>x</i><sup>2</sup> − 10<i>x</i> − 8 = 0, i.e. 25<i>x</i><sup>2</sup> − <i>x</i> − 0.80 = 0; <i>x</i> = (1 + √81)/50 = 0.20 m. Check: <i>mg</i>(1.0) = 10 J = ½(500)(0.04).',
          },
          {
            q: 'In a two-block spring collision, explain in one sentence why the spring’s work on the incoming block alone cannot be written as −½<i>kx</i><sup>2</sup> between the first contact and maximum compression.',
            a: 'Both ends of the spring move, so the work it does on one block depends on how far that block moved, not on the compression alone; only for the combined system is the spring force internal and its energy trackable as stored PE.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Continuous Mass: Chains, Sand and Conveyor Belts',
    extra: true,
    kalam:
      'Addendum B handles mass as a continuous quantity — chains pulled off tables, sand landing on belts — where the famous factor of two in conveyor-belt power lives.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Every work formula in the chapter assumes a lump of fixed mass. Exams regularly break that assumption: a chain partly hanging off a table, sand raining onto a conveyor belt, water pumped in a stream. The fix is always the same — integrate the chapter’s own results over d<i>m</i> — but the conveyor-belt result hides a surprise worth a mark in itself.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>B1 — Work for a continuous distribution.</b> To raise each element d<i>m</i> through the height appropriate to it,<br><i>W</i> = ∫ <i>g</i> <i>h</i>(d<i>m</i>)<br>For a uniform chain of linear mass density <i>λ</i> (in kg/m) with a length <i>l</i> hanging off a table, raising an element at depth <i>y</i> costs d<i>m</i> · <i>g</i> · <i>y</i> with d<i>m</i> = <i>λ</i> d<i>y</i>:<br><i>W</i> = ∫<sub>0</sub><sup><i>l</i></sup> <i>λgy</i> d<i>y</i> = ½<i>λgl</i><sup>2</sup>',
      },
      {
        t: 'p',
        html: 'Note the square: doubling the hanging length quadruples the work. The reverse process, a chain sliding off a smooth table on its own, needs a little more care, because the hanging part keeps growing as the chain slips. Take the tabletop as the zero of potential energy. With a length <i>l</i> hanging at the start, the potential energy is −(<i>λl</i>) <i>g</i> <i>l</i>/2. When the last link leaves the table the whole chain (length <i>L</i>, mass <i>M</i> = <i>λL</i>) hangs with its centre of mass <i>L</i>/2 below the top, so the potential energy is −(<i>λL</i>) <i>g</i> <i>L</i>/2. The loss in potential energy becomes kinetic energy:<br>½<i>Mv</i><sup>2</sup> = ½<i>λg</i>(<i>L</i><sup>2</sup> − <i>l</i><sup>2</sup>)   ⇒   <i>v</i> = √(<i>g</i>(<i>L</i><sup>2</sup> − <i>l</i><sup>2</sup>)/<i>L</i>)<br>For <i>l</i> → 0 this gives <i>v</i> = √(<i>gL</i>), the speed of a chain that has just fallen off the edge.',
      },
      {
        t: 'p',
        html: '<b>B2 — Mass arriving at a steady rate.</b> If mass flows at a constant rate <i>μ</i> (in kg/s), then any per-kilogram energy cost <i>ϵ</i> (in J/kg) becomes a power <i>μϵ</i> (in W). The chapter used this for pumps; the same logic governs belts and chains.',
      },
      {
        t: 'p',
        html: '<b>B3 — The conveyor belt.</b> Sand falls vertically at rate <i>μ</i> onto a horizontal belt moving at constant speed <i>v</i>. Each kilogram of sand must be accelerated from 0 to <i>v</i>.',
      },
      {
        t: 'p',
        html: 'Force. In a time d<i>t</i>, mass <i>μ</i> d<i>t</i> lands with zero horizontal velocity and must leave the hopper region moving at <i>v</i>. The belt must supply horizontal impulse:<br><i>F</i> d<i>t</i> = (<i>μ</i> d<i>t</i>) <i>v</i>   ⇒   <i>F</i> = <i>μv</i>   (newtons, since kg/s · m/s = kg·m/s<sup>2</sup>)',
      },
      {
        t: 'p',
        html: 'Power of the motor. The belt surface moves at <i>v</i> while exerting <i>F</i>:<br><i>P</i><sub>motor</sub> = <i>Fv</i> = <i>μv</i><sup>2</sup>',
      },
      {
        t: 'p',
        html: 'Rate of kinetic energy gain of the sand.<br><i>P</i><sub><i>K</i></sub> = d/d<i>t</i> (½(<i>μt</i>)<i>v</i><sup>2</sup>) = ½<i>μv</i><sup>2</sup>',
      },
      {
        t: 'p',
        html: '<b>Half the motor’s power goes into kinetic energy. Where is the other half?</b> It is dissipated as heat by kinetic friction between belt and sand. The sand does not instantly match the belt speed; it slips against the belt while friction accelerates it. During the slip, the friction force does work <i>μv</i><sup>2</sup> d<i>t</i> on the belt-side account but delivers only ½<i>μv</i><sup>2</sup> d<i>t</i> to the sand as kinetic energy — the deficit is rubbing heat at the contact. This “exactly half” result is a standing JEE Advanced favourite and a beautiful consistency check: energy is conserved, it is just spent in two places.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main Level',
        q: 'A uniform chain of mass 9 kg and length 3 m is held at rest on a smooth table with a 1 m length hanging over the edge. How much work is needed to pull the hanging part slowly back onto the table? Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Linear density: <i>λ</i> = 9/3 = 3 kg/m. Raising the element at depth <i>y</i> (from <i>y</i> = 0 to <i>y</i> = 1 m) through height <i>y</i>:<br><i>W</i> = ∫<sub>0</sub><sup>1</sup> <i>λgy</i> d<i>y</i> = 3 × 10 × [<i>y</i><sup>2</sup>/2]<sub>0</sub><sup>1</sup> = 3 × 10 × 0.5 = 15 J',
          '<b>Equivalent centre-of-mass route.</b> The hanging segment has mass 3 kg and its centre of mass sits ½ m below the tabletop, so raising it costs (3)(10)(0.5) = 15 J. Units agree: kg · m/s<sup>2</sup> · m = J.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Sand falls at <i>μ</i> = 10 kg/s onto a conveyor belt moving horizontally at <i>v</i> = 2 m/s. Find (a) the force the belt must exert on the sand, (b) the motor power, (c) the rate of kinetic energy gain of the sand, and (d) the rate of heat generation at the contact.',
        steps: [
          '(a) Force:<br><i>F</i> = <i>μv</i> = (10)(2) = 20 N',
          '(b) Motor power:<br><i>P</i> = <i>Fv</i> = (20)(2) = 40 W',
          '(c) Kinetic energy accumulation rate:<br><i>P</i><sub><i>K</i></sub> = ½<i>μv</i><sup>2</sup> = ½(10)(4) = 20 W',
          '(d) By conservation of energy, the remainder is heat:<br><i>P</i><sub>heat</sub> = <i>P</i> − <i>P</i><sub><i>K</i></sub> = 40 − 20 = 20 W',
          '<b>Consistency check.</b> Every second, 10 kg of sand gains ½(10)(2)<sup>2</sup> = 20 J of kinetic energy, and 20 J warms the belt and sand. The motor supplies 40 J each second. Books balance exactly — the factor of two is not an approximation but a theorem.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A uniform chain of mass 4 kg and length 2 m is held at rest on a smooth table with half its length hanging over the edge. Find the work needed to pull it fully onto the table. Take <i>g</i> = 10 m/s<sup>2</sup>.',
            a: 'Hanging mass 2 kg, its centre of mass 0.5 m down: <i>W</i> = (2)(10)(0.5) = 10 J.',
          },
          {
            q: 'The chain of Question 1 is instead released from rest and slides off the smooth table. Find its speed when the last link leaves the table.',
            a: '½<i>Mv</i><sup>2</sup> = ½<i>λg</i>(<i>L</i><sup>2</sup> − <i>l</i><sup>2</sup>) with <i>λ</i> = 2 kg/m, <i>L</i> = 2 m, <i>l</i> = 1 m, <i>M</i> = 4 kg: 2<i>v</i><sup>2</sup> = ½(2)(10)(4 − 1) = 30 J, so <i>v</i><sup>2</sup> = 15 and <i>v</i> = √15 ≈ 3.87 m/s. Check: the hanging 2 kg (centre of mass 0.5 m down) becomes the whole 4 kg (centre of mass 1 m down), so the potential energy falls from −10 J to −40 J, a loss of 30 J.',
          },
          {
            q: 'Sand lands on a belt at 5 kg/s; the belt runs at 4 m/s. Find the driving force, the motor power, and the heating rate.',
            a: '<i>F</i> = <i>μv</i> = 20 N; <i>P</i> = <i>μv</i><sup>2</sup> = 80 W; heating = 40 W.',
          },
          {
            q: 'State, with one-line reasoning, why the motor power in a belt problem is exactly twice the rate of kinetic energy gain of the load.',
            a: 'The belt exerts <i>F</i> = <i>μv</i> on sand that slips against a surface moving at <i>v</i>, so friction work enters at <i>μv</i><sup>2</sup> while the sand’s kinetic energy accumulates at ½<i>μv</i><sup>2</sup>; the difference is dissipated at the slipping contact.',
          },
          {
            q: 'A uniform chain of length <i>L</i> and mass <i>M</i> lies in a heap on a platform. It is lifted slowly by one end until it hangs vertically with its lower end just clear of the platform. Find the work needed.',
            a: 'The element that ends at height <i>y</i> above the platform has mass <i>λ</i> d<i>y</i> and is raised through <i>y</i>: <i>W</i> = ∫<sub>0</sub><sup><i>L</i></sup> <i>λgy</i> d<i>y</i> = <i>MgL</i>/2 (the centre of mass rises by <i>L</i>/2).',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Restitution Past the First Bounce: Series, Moving Walls, General e',
    extra: true,
    kalam:
      'Addendum C extends restitution past the chapter’s single bounce: geometric series of bounces, moving walls, and the general-e velocity formulas.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines <i>e</i>, derives the elastic shortcut, and works one bounce off the floor. Three examinable extensions remain: the whole sequence of bounces (a geometric series — CBSE loves the total-distance question, JEE Main the total-time question), collisions with a moving massive object, and the general-<i>e</i> version of the two-body final velocities.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>C1 — The bounce series.</b> After each floor impact the rebound height multiplies by <i>e</i><sup>2</sup> (height ∝ speed<sup>2</sup>, and the speed multiplies by <i>e</i>). Starting from height <i>h</i>:<br><i>h</i><sub><i>n</i></sub> = <i>e</i><sup>2<i>n</i></sup><i>h</i><br>Total vertical distance travelled until rest:<br><i>D</i> = <i>h</i> + 2<i>he</i><sup>2</sup> + 2<i>he</i><sup>4</sup> + ⋯ = <i>h</i> + 2<i>he</i><sup>2</sup>/(1 − <i>e</i><sup>2</sup>)',
      },
      {
        t: 'p',
        html: 'Total time: the first fall takes <i>t</i><sub>0</sub> = √(2<i>h</i>/<i>g</i>); each subsequent rise-and-fall pair takes 2<i>t</i><sub>0</sub><i>e</i><sup><i>n</i></sup>:<br><i>T</i> = <i>t</i><sub>0</sub>(1 + 2<i>e</i>/(1 − <i>e</i>)) = <i>t</i><sub>0</sub>(1 + <i>e</i>)/(1 − <i>e</i>)',
      },
      {
        t: 'p',
        html: 'Sanity limits: as <i>e</i> → 0, <i>D</i> → <i>h</i> (it thuds dead) and <i>T</i> → <i>t</i><sub>0</sub>; as <i>e</i> → 1, both diverge (an ideal ball bounces forever). Both limits behave physically.',
      },
      {
        t: 'p',
        html: '<b>C2 — Bouncing off a massive moving object.</b> Treat the massive body’s frame first. If a wall (train front, piston, paddle) moves toward the ball at speed <i>V</i> while the ball approaches at <i>u</i>, the approach speed in the wall’s frame is <i>u</i> + <i>V</i>. The wall, being effectively infinite in mass, recoils negligibly, so the ball rebounds in that frame at <i>e</i>(<i>u</i> + <i>V</i>). Transform back to the ground frame:<br><i>v</i><sub>ball</sub> = <i>e</i>(<i>u</i> + <i>V</i>) + <i>V</i><br>directed back the way the ball came. For <i>e</i> = 1 this is the celebrated <i>u</i> + 2<i>V</i>: a cricket ball hit by a moving bat leaves faster than it arrived by twice the bat’s speed, which is the entire physics of batting.',
      },
      {
        t: 'p',
        html: 'If the wall recedes at <i>V</i>, replace <i>V</i> → −<i>V</i> throughout; the closing speed in the wall frame is <i>u</i> − <i>V</i>.',
      },
      {
        t: 'p',
        html: '<b>C3 — General-<i>e</i> two-body results.</b> Combining momentum conservation with <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub> = <i>e</i>(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>) (both written along the line of collision) and solving:<br><i>v</i><sub>1</sub> = <i>u</i><sub>1</sub> − (<i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))(1 + <i>e</i>)(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>),   <i>v</i><sub>2</sub> = <i>u</i><sub>2</sub> + (<i>m</i><sub>1</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))(1 + <i>e</i>)(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)',
      },
      {
        t: 'p',
        html: 'Quick derivation: momentum rearranged gives <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>); write <i>v</i><sub>2</sub> − <i>u</i><sub>2</sub> = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>) + (<i>v</i><sub>1</sub> − <i>u</i><sub>1</sub>) + (<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>) = (1 + <i>e</i>)(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>) − (<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>); then collect terms in (<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>):<br><i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(1 + <i>e</i>)(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>) − <i>m</i><sub>2</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>)   ⇒   (<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(1 + <i>e</i>)(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<br>which is the first formula; the second follows symmetrically. Setting <i>e</i> = 1 must reproduce the chapter’s elastic formulas — a built-in check.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main Level',
        q: 'A ball is dropped from <i>h</i> = 20 m and rebounds with <i>e</i> = 0.5. Find (a) the height after the second bounce, (b) the total distance travelled before it comes to rest, and (c) the total time elapsed. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '(a) After the second bounce:<br><i>h</i><sub>2</sub> = <i>e</i><sup>4</sup><i>h</i> = (0.5)<sup>4</sup>(20) = 20/16 = 1.25 m',
          '(b) Total distance:<br><i>D</i> = <i>h</i> + 2<i>he</i><sup>2</sup>/(1 − <i>e</i><sup>2</sup>) = 20 + 2(20)(0.25)/0.75 = 20 + 10/0.75 = 20 + 13.33 = 33.33 m',
          '(c) First fall takes <i>t</i><sub>0</sub> = √(2(20)/10) = 2 s. Total:<br><i>T</i> = <i>t</i><sub>0</sub>(1 + <i>e</i>)/(1 − <i>e</i>) = 2 × 1.5/0.5 = 6 s',
          '<b>Check by direct summation.</b> Fall 2 s; then pairs of duration 2(1) = 2 s, 2(0.5) = 1 s, 2(0.25) = 0.5 s, …: total = 2 + 2 + 1 + 0.5 + 0.25 + ⋯ = 2 + 4 = 6 s.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A ball moving at 10 m/s strikes head-on the front wall of a train approaching at 5 m/s, with <i>e</i> = 0.5. Find the ball’s speed after the bounce, and state what it would be for <i>e</i> = 1.',
        steps: [
          'In the train’s frame the ball approaches at <i>u</i> + <i>V</i> = 10 + 5 = 15 m/s. It rebounds at <i>e</i> × 15 = 7.5 m/s relative to the train, still pointing away from the train. Back in the ground frame the train’s wall still advances at 5 m/s behind the ball, adding to the recession:<br><i>v</i> = <i>e</i>(<i>u</i> + <i>V</i>) + <i>V</i> = (0.5)(15) + 5 = 7.5 + 5 = 12.5 m/s',
          'For <i>e</i> = 1: <i>v</i> = 15 + 5 = 20 m/s = <i>u</i> + 2<i>V</i>, the bat-and-ball limit.',
          '<b>Momentum sanity check (ball–train system).</b> Before: ball momentum (say <i>m</i> = 0.5 kg, taking the train’s direction as positive, so the ball moves in the negative direction) = −(0.5)(10) = −5 kg·m/s. After: the ball has reversed and moves with the train’s direction at 12.5 m/s, so its momentum is +(0.5)(12.5) = +6.25 kg·m/s. The ball’s momentum changes by +11.25 kg·m/s; the train’s changes by −11.25 kg·m/s, which for a massive train is an undetectably small change in its velocity, exactly as assumed. Kinetic energy: ball’s <i>K</i> rises from ½(0.5)(100) = 25 J to ½(0.5)(156.25) ≈ 39.1 J; the extra energy comes from the train’s engine doing work as the wall advances against the ball’s push. Nothing violates conservation — the train is not a passive wall.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A ball dropped from 5 m rebounds to 1.25 m. Find <i>e</i>, and the height reached after the third bounce.',
            a: '<i>e</i> = √(1.25/5) = 0.5; <i>h</i><sub>3</sub> = <i>e</i><sup>6</sup><i>h</i> = 5/64 ≈ 0.078 m.',
          },
          {
            q: 'For the ball of Question 1 (<i>h</i> = 5 m), find the total distance travelled and the total time before rest. Take <i>g</i> = 10 m/s<sup>2</sup>.',
            a: '<i>D</i> = 5 + 2(5)(0.25)/0.75 = 5 + 3.33 = 8.33 m; <i>t</i><sub>0</sub> = 1 s, <i>T</i> = 1 × 1.5/0.5 = 3 s.',
          },
          {
            q: 'A ball moving at 6 m/s catches up with a wall receding at 2 m/s; <i>e</i> = 0.5. Find the ball’s speed and direction after the bounce.',
            a: 'Closing speed in the wall frame = 6 − 2 = 4 m/s; the ball rebounds at <i>e</i> × 4 = 2 m/s in that frame, directed backward (away from the wall); the ground-frame velocity is −2 + 2 = 0, so the ball is momentarily at rest after the bounce. (Check: <i>v</i> = <i>e</i>(<i>u</i> − <i>V</i>) − <i>V</i> with the wall receding, i.e. <i>V</i> → −<i>V</i> in the formula of C2, gives 0.5 × 4 − 2 = 0.)',
          },
          {
            q: 'A ball thrown at 5 m/s meets a train wall approaching at 10 m/s, <i>e</i> = 1. Find the return speed.',
            a: '<i>v</i> = 1 × (5 + 10) + 10 = 25 m/s.',
          },
          {
            q: 'A 2 kg body moving at 6 m/s overtakes a 4 kg body moving at 2 m/s in the same direction; <i>e</i> = 0.5. Using the general-<i>e</i> formulas, find both final velocities and the kinetic energy lost.',
            a: '<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = 4 m/s; <i>v</i><sub>1</sub> = 6 − (4/6)(1.5)(4) = 6 − 4 = 2 m/s; <i>v</i><sub>2</sub> = 2 + (2/6)(1.5)(4) = 4 m/s. Momentum: 12 + 8 = 20 before, 4 + 16 = 20 after. <i>K</i>: 36 + 8 = 44 J before, 4 + 32 = 36 J after, so 8 J is lost to heat and deformation. (Check: Δ<i>K</i> = ½(<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))(1 − <i>e</i><sup>2</sup>)(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<sup>2</sup> = ½ · (4/3)(0.75)(16) = 8 J.)',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Oblique Collisions: The Line-of-Impact Procedure',
    extra: true,
    kalam:
      'Addendum D supplies the line-of-impact procedure for oblique collisions, which the chapter names but never executes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter announces the crucial fact — only velocity components along the line of impact change — and then proves the equal-mass 90° theorem without ever running the general procedure. JEE Advanced asks that procedure almost yearly, usually against a smooth wall or between two balls with a stated geometry. Four steps settle every case.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Draw the line of impact</b> — the common normal at contact: the line joining the centres of the two balls, or the normal to a wall.',
          '<b>Resolve every velocity</b> into components along the line of impact (subscript n) and perpendicular to it (subscript t).',
          '<b>Apply the rules separately:</b><br>• Tangential: smooth contact exerts no tangential force, so <i>v</i><sub>t</sub> = <i>u</i><sub>t</sub> unchanged for each body.<br>• Normal: run the ordinary 1-D collision — momentum conservation plus restitution <i>e</i> — on the n-components alone.',
          '<b>Recombine and report</b> the final speeds and angles; compute any energy loss from the change in normal components only:<br>Δ<i>K</i> = ½<i>m</i>[(1 − <i>e</i><sup>2</sup>) <i>u</i><sub>n</sub><sup>2</sup>]   (ball vs fixed wall)',
        ],
      },
      {
        t: 'p',
        html: '<b>Wall case in one box.</b> A ball hits a smooth fixed wall at speed <i>u</i>, at angle <i>θ</i> to the normal, restitution <i>e</i>:<br><i>v</i><sub>n</sub> = <i>e</i> <i>u</i> cos <i>θ</i> (reversed),   <i>v</i><sub>t</sub> = <i>u</i> sin <i>θ</i><br><i>v</i> = <i>u</i>√(sin<sup>2</sup> <i>θ</i> + <i>e</i><sup>2</sup> cos<sup>2</sup> <i>θ</i>),   tan <i>ϕ</i> = tan <i>θ</i>/<i>e</i><br>where <i>ϕ</i> is the rebound angle from the normal. Note tan <i>ϕ</i> > tan <i>θ</i> for <i>e</i> < 1: a dead ball rebounds wider. For <i>e</i> = 1 we recover mirror reflection, <i>ϕ</i> = <i>θ</i> and <i>v</i> = <i>u</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A ball strikes a smooth fixed wall at 10 m/s, its velocity making 60° with the wall (so 30° with the normal). Given <i>e</i> = 0.5, find the rebound speed, the rebound angle, and the fraction of kinetic energy lost.',
        steps: [
          'Normal and tangential components (normal at 30° to the velocity):<br><i>u</i><sub>n</sub> = 10 cos 30° = 10 × √3/2 ≈ 8.66 m/s,   <i>u</i><sub>t</sub> = 10 sin 30° = 5 m/s',
          'After the bounce:<br><i>v</i><sub>n</sub> = <i>e</i> <i>u</i><sub>n</sub> = 0.5 × 8.66 = 4.33 m/s (reversed),   <i>v</i><sub>t</sub> = 5 m/s (unchanged)',
          'Rebound speed:<br><i>v</i> = √((4.33)<sup>2</sup> + (5)<sup>2</sup>) = √(18.75 + 25) = √43.75 ≈ 6.61 m/s',
          'Rebound angle from the normal:<br>tan <i>ϕ</i> = <i>v</i><sub>t</sub>/<i>v</i><sub>n</sub> = 5/4.33 ≈ 1.155   ⇒   <i>ϕ</i> ≈ 49.1°',
          '(Equivalently tan <i>ϕ</i> = tan 30°/0.5 = (1/√3)/0.5 = 2/√3 ≈ 1.155.)',
          'Energy lost — only the normal component was degraded:<br>Δ<i>K</i> = ½<i>m</i>(1 − <i>e</i><sup>2</sup>) <i>u</i><sub>n</sub><sup>2</sup> = ½<i>m</i>(0.75)(75) = 28.125 <i>m</i>',
          'where <i>m</i> is the mass in kg and Δ<i>K</i> comes out in joules. The initial kinetic energy is <i>K</i> = ½<i>m</i>(100) = 50 <i>m</i> (in joules), so the fraction lost is 28.125 <i>m</i>/(50 <i>m</i>) = 0.5625, i.e. 56.25%.',
          '<b>Check.</b> Final <i>K</i> = 50 <i>m</i> − 28.125 <i>m</i> = 21.875 <i>m</i>; direct computation gives ½<i>m</i>(43.75) = 21.875 <i>m</i>. Units: each term is kg · m<sup>2</sup>/s<sup>2</sup> = J once <i>m</i> is in kg.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An identical smooth billiard ball strikes a stationary identical ball. At the moment of impact the striker’s velocity makes 30° with the line of centres. The collision is elastic (<i>e</i> = 1). Find the speed of each ball afterwards and verify the 90° result of the chapter by direct computation.',
        steps: [
          'Take the striker’s incoming speed as <i>u</i>. Resolve along the line of centres (n) and across it (t):<br><i>u</i><sub>n</sub> = <i>u</i> cos 30° = (√3/2)<i>u</i>,   <i>u</i><sub>t</sub> = <i>u</i> sin 30° = <i>u</i>/2',
          'Tangential: the striker keeps <i>v</i><sub>1,t</sub> = <i>u</i>/2; the target had none and gains none.',
          'Normal: identical masses, elastic, one at rest — the chapter’s exchange rule applies to the normal components alone:<br><i>v</i><sub>1,n</sub> = 0,   <i>v</i><sub>2,n</sub> = (√3/2)<i>u</i>',
          'Recombining:<br><i>v</i><sub>1</sub> = <i>u</i>/2 = 0.5<i>u</i> (purely tangential direction),   <i>v</i><sub>2</sub> = (√3/2)<i>u</i> ≈ 0.87<i>u</i> (along the line of centres)',
          'Since one final velocity is purely tangential and the other purely normal, they are mutually perpendicular — the 90° theorem, produced here by arithmetic rather than the vector proof.',
          '<b>Kinetic energy check.</b><br>½<i>mv</i><sub>1</sub><sup>2</sup> + ½<i>mv</i><sub>2</sub><sup>2</sup> = ½<i>m</i>(<i>u</i><sup>2</sup>/4 + 3<i>u</i><sup>2</sup>/4) = ½<i>mu</i><sup>2</sup> ✓<br>equal to the initial kinetic energy, as elasticity demands.',
          '<b>Why this is the mark-winning route.</b> Students who try to conserve momentum vectorially in two unknown directions drown; those who split along n and t reduce the problem to the chapter’s own 1-D machinery in three lines. The decomposition is the method.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A ball hits a smooth wall at 20 m/s at 30° to the wall, with <i>e</i> = 1. Describe the rebound completely.',
            a: 'Mirror reflection: speed 20 m/s; the ball strikes at 30° to the wall, i.e. 60° to the normal, and leaves at the same angles on the other side of the normal (30° to the wall, 60° from the normal); no energy lost.',
          },
          {
            q: 'Repeat with <i>e</i> = 0.6: find the rebound speed and angle from the wall.',
            a: 'Components: <i>u</i><sub>n</sub> = 20 cos 60° = 10 m/s, <i>u</i><sub>t</sub> = 20 sin 60° ≈ 17.32 m/s. After: <i>v</i><sub>n</sub> = 6 m/s, <i>v</i><sub>t</sub> = 17.32 m/s; speed = √(36 + 300) = √336 ≈ 18.3 m/s; angle from wall arctan(6/17.32) ≈ 19.1°.',
          },
          {
            q: 'An identical ball strikes a stationary identical ball elastically; at impact its velocity makes 60° with the line of centres and its speed is 8 m/s. Find both final speeds.',
            a: 'Striker retains only the tangential piece 8 sin 60° = 4√3 ≈ 6.93 m/s; target leaves along the line of centres at 8 cos 60° = 4 m/s; they separate at 90°, and ½<i>m</i>(48 + 16) = ½<i>m</i>(64).',
          },
          {
            q: 'Explain in one line why the tangential component of velocity survives an impact with a smooth wall.',
            a: 'A smooth wall exerts only a normal force, so there is no tangential impulse and hence no change in the tangential momentum component.',
          },
          {
            q: 'A ball hits a smooth wall at speed <i>u</i> and angle <i>θ</i> to the normal, with restitution <i>e</i>. Show that the kinetic energy lost is ½<i>mu</i><sup>2</sup>(1 − <i>e</i><sup>2</sup>) cos<sup>2</sup> <i>θ</i>.',
            a: 'Only <i>u</i> cos <i>θ</i> participates in the lossy normal interaction, and a 1-D bounce with restitution <i>e</i> destroys a fraction (1 − <i>e</i><sup>2</sup>) of the kinetic energy associated with that component: Δ<i>K</i> = ½<i>m</i>(<i>u</i> cos <i>θ</i>)<sup>2</sup>(1 − <i>e</i><sup>2</sup>).',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'Connected Bodies: Strings, Pulleys and Cancelled Work',
    extra: true,
    kalam:
      'Addendum E applies the work–energy theorem to systems joined by strings and pulleys, using one cancellation most students never learn to exploit.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Every worked energy problem in the chapter involves a single body. Real papers attach strings. The saving grace — and the reason energy methods beat Newton’s-law grinding on multi-body systems — is a cancellation almost never stated outright: <b>an ideal string does zero net work on the system it connects.</b>',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>E1 — The cancellation.</b> An inextensible string of fixed length transmits whatever power enters one end out the other, unchanged. Concretely, for a string over an ideal (massless, frictionless) pulley joining bodies 1 and 2, if the ends move distances <i>s</i><sub>1</sub> and <i>s</i><sub>2</sub> along their respective string segments, inextensibility forces <i>s</i><sub>1</sub> = <i>s</i><sub>2</sub> (up to sign). The tension <i>T</i> therefore does work<br><i>W</i><sub><i>T</i></sub> = +<i>Ts</i><sub>1</sub> − <i>Ts</i><sub>2</sub> = 0<br>on the combined system. For compound arrangements (a movable pulley) the displacements differ, but the force multiplies inversely: the two strands supporting the movable pulley pull it with 2<i>T</i> over displacement <i>s</i>, while the free end’s tension <i>T</i> moves 2<i>s</i>, and again <i>W</i><sub><i>T</i></sub> = <i>T</i>(2<i>s</i>) − (2<i>T</i>)<i>s</i> = 0. <b>In every ideal-string arrangement, the total work done by string tensions on the whole system is zero.</b>',
      },
      {
        t: 'p',
        html: '<b>E2 — The system work–energy theorem.</b> Consequently, for a collection of bodies joined by ideal strings, with gravity the only other force doing work:<br>∑(loss in PE) = ∑(gain in <i>K</i>) = ∑ ½<i>m</i><sub><i>i</i></sub><i>v</i><sub><i>i</i></sub><sup>2</sup><br>with the speeds <i>v</i><sub><i>i</i></sub> linked by the string constraint (bodies on one string share one speed; a movable pulley halves or doubles it).',
      },
      {
        t: 'p',
        html: '<b>E3 — When it breaks.</b> If the pulley has mass, the axle rubs, or the string stretches or slips, the cancellation fails and you must account for the pulley’s kinetic energy, friction losses, or elastic storage explicitly. The method is safe only under the ideals named in E1.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Masses of 3 kg and 2 kg hang over a frictionless pulley on a light inextensible string. Released from rest, how fast are they moving when the 3 kg mass has descended 0.8 m? Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'By E1, ignore the string entirely and balance energy for the pair:<br>PE lost by 3 kg = PE gained by 2 kg + KE gained by both',
          '<i>m</i><sub>1</sub><i>gs</i> = <i>m</i><sub>2</sub><i>gs</i> + ½(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>v</i><sup>2</sup><br>(3)(10)(0.8) = (2)(10)(0.8) + ½(5)<i>v</i><sup>2</sup><br>24 = 16 + 2.5 <i>v</i><sup>2</sup>   ⇒   <i>v</i><sup>2</sup> = 8/2.5 = 3.2,   <i>v</i> = √3.2 ≈ 1.79 m/s',
          'The whole solution never touched the tension. (For the record, Newton’s route gives <i>a</i> = ((<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>g</i> = (1/5)(10) = 2 m/s<sup>2</sup> and <i>v</i><sup>2</sup> = 2<i>as</i> = 2(2)(0.8) = 3.2 — same answer, more lines.)',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A 1 kg block on a smooth table is tied to a light string that runs over a fixed pulley at the table’s edge, hangs down, passes under a light movable pulley carrying a 2 kg hanging block, and has its far end tied to the ceiling. Find the speeds of both blocks when the hanging block has descended 0.3 m, starting from rest. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>Constraint first.</b> The string’s ceiling end is fixed, so if the movable pulley (and the 2 kg block) descends by <i>x</i>, the string must feed 2<i>x</i> of extra length over the fixed pulley — meaning the table block moves toward the edge by 2<i>x</i>. Differentiating: whenever the hanging block has speed <i>v</i><sub><i>B</i></sub>, the table block has<br><i>v</i><sub><i>A</i></sub> = 2<i>v</i><sub><i>B</i></sub>',
          '<b>Energy bookkeeping (E1 lets us skip all tensions).</b> Only gravity does net work:<br>PE lost by 2 kg = KE of both blocks<br><i>m</i><sub><i>B</i></sub><i>gx</i> = ½<i>m</i><sub><i>A</i></sub><i>v</i><sub><i>A</i></sub><sup>2</sup> + ½<i>m</i><sub><i>B</i></sub><i>v</i><sub><i>B</i></sub><sup>2</sup> = ½(1)(2<i>v</i><sub><i>B</i></sub>)<sup>2</sup> + ½(2)<i>v</i><sub><i>B</i></sub><sup>2</sup>',
          'With <i>m</i><sub><i>B</i></sub> = 2 kg, <i>g</i> = 10 m/s<sup>2</sup>, <i>x</i> = 0.3 m:<br>2 × 10 × 0.3 = 2<i>v</i><sub><i>B</i></sub><sup>2</sup> + <i>v</i><sub><i>B</i></sub><sup>2</sup> = 3<i>v</i><sub><i>B</i></sub><sup>2</sup><br>6 = 3<i>v</i><sub><i>B</i></sub><sup>2</sup>   ⇒   <i>v</i><sub><i>B</i></sub> = √2 ≈ 1.41 m/s,   <i>v</i><sub><i>A</i></sub> = 2√2 ≈ 2.83 m/s',
          '<b>Verification that the string really does no net work.</b> Newton’s laws on this arrangement: for the hanging block, <i>m</i><sub><i>B</i></sub><i>g</i> − 2<i>T</i> = <i>m</i><sub><i>B</i></sub><i>a</i><sub><i>B</i></sub>; for the table block, <i>T</i> = <i>m</i><sub><i>A</i></sub><i>a</i><sub><i>A</i></sub> = <i>m</i><sub><i>A</i></sub>(2<i>a</i><sub><i>B</i></sub>). Substituting, 20 − 4<i>a</i><sub><i>B</i></sub> = 2<i>a</i><sub><i>B</i></sub>, so <i>a</i><sub><i>B</i></sub> = 10/3 m/s<sup>2</sup> and the tension is <i>T</i> = 2<i>a</i><sub><i>B</i></sub> = 20/3 N. (Check: <i>v</i><sub><i>B</i></sub><sup>2</sup> = 2<i>a</i><sub><i>B</i></sub><i>x</i> = 2 · 10/3 · 0.3 = 2, as found by energy.) Over the descent, the two strands pull up on the movable pulley with total force 2<i>T</i> while it moves <i>x</i> = 0.3 m downward, so their work on <i>B</i> is<br><i>W</i><sub>on B</sub> = −(2<i>T</i>)(0.3) = −(40/3) × 0.3 = −4 J',
          'while the single strand pulls the 1 kg block forward (toward the edge, along its motion) with <i>T</i> through 2<i>x</i> = 0.6 m:<br><i>W</i><sub>on A</sub> = <i>T</i>(0.6) = (20/3) × 0.6 = +4 J',
          'Sum: −4 + 4 = 0 J, exactly as E1 promises. As a further check, the table block’s kinetic energy is ½(1)(2√2)<sup>2</sup> = 4 J, which equals the work the tension did on it, and the hanging block gains ½(2)(√2)<sup>2</sup> = 2 J, which is its 6 J of gravitational work minus the 4 J taken by the tension. The tension channelled 4 J out of one body and 4 J into the other and kept nothing — which is why the energy ledger closes with tensions absent.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Masses of 5 kg and 3 kg hang over a frictionless pulley. Find their common speed after the 5 kg mass descends 0.8 m from rest. Take <i>g</i> = 10 m/s<sup>2</sup>.',
            a: 'PE lost = (5)(10)(0.8) = 40 J; PE gained = (3)(10)(0.8) = 24 J; so 16 = ½(8)<i>v</i><sup>2</sup>, giving <i>v</i> = 2 m/s.',
          },
          {
            q: 'A 2 kg block on a smooth table is connected by a string over a pulley to a hanging 3 kg block. Find the speed of the system after the hanging block falls 1 m from rest. Take <i>g</i> = 10 m/s<sup>2</sup>.',
            a: '30 = ½(5)<i>v</i><sup>2</sup>, so <i>v</i> = √12 = 2√3 ≈ 3.46 m/s.',
          },
          {
            q: 'State the precise conditions under which the string tensions do zero net work on a connected system.',
            a: 'The string must be inextensible and light, and every pulley it crosses must be ideal (massless, frictionless, no slip); then power in at one end equals power out at the other and the net work over any motion vanishes.',
          },
          {
            q: 'In the setup of the movable-pulley example above, replace the hanging block with one of mass <i>m</i><sub><i>B</i></sub>. Find <i>v</i><sub><i>B</i></sub> after a descent <i>x</i>, in symbols.',
            a: '<i>m</i><sub><i>B</i></sub><i>gx</i> = ½<i>m</i><sub><i>A</i></sub>(2<i>v</i><sub><i>B</i></sub>)<sup>2</sup> + ½<i>m</i><sub><i>B</i></sub><i>v</i><sub><i>B</i></sub><sup>2</sup> = (2<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>B</i></sub>/2)<i>v</i><sub><i>B</i></sub><sup>2</sup>, so <i>v</i><sub><i>B</i></sub> = √(<i>m</i><sub><i>B</i></sub><i>gx</i>/(2<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>B</i></sub>/2)). For the example’s values this reproduces √2 m/s.',
          },
          {
            q: 'A student includes the string’s work in the ledger of the first worked example (3 kg and 2 kg), writing “+work by tension on the 3 kg mass.” What value should they enter, and why?',
            a: 'The tension acts upward on the descending 3 kg mass, so it does negative work on it: −<i>Ts</i>. With <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 24 N and <i>s</i> = 0.8 m this is −19.2 J; on the rising 2 kg mass the tension does +<i>Ts</i> = +19.2 J. Entering only one of the two terms breaks the ledger. The two cancel, so the correct entry for tension in the system ledger is 0 J.',
          },
        ],
      },
    ],
  },
];
