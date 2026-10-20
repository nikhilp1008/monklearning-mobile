import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 06 and 07: pp. 407–428 of the Class 11 Physics Master
 * Reference, word for word: Moment of Inertia (pp. 407 to 417) and
 * Rotational Kinematics and Dynamics (pp. 418 to 428). Each topic is split
 * into parts at the book’s own “Section 1” … “Section 8” headings. Figure 6.7
 * (p. 409, drawn on p. 410) sits in Topic 06’s rod derivation, Figure 6.8
 * (p. 413, drawn on p. 414) in its Example 4; Figure 6.9 (p. 420, drawn on
 * p. 421) sits in Topic 07’s τ = Iα derivation, Figure 6.10 (p. 423, drawn on
 * p. 424) in its Example 3.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 06 · pp. 407–417 ─────────────────────────
  {
    n: '06',
    title: 'Moment of Inertia',
    kalam: 'Mass far from the axis is “expensive” to spin; mass near the axis is “cheap.”',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the most formula-dense subtopic of the chapter, and examiners love it. JEE Main asks 1–2 questions every year — usually composite bodies, the two axis theorems, or radius of gyration. NEET keeps it factual: standard-body formulas and “what does MOI depend on.” JEE Advanced demands integration from scratch and clever theorem combinations. CBSE Boards wants the rod/ring derivation and clean statements of the parallel and perpendicular axis theorems.',
      },
      {
        t: 'p',
        html: 'You already have a deep feel for <b>mass</b>: it’s how hard it is to get something moving in a straight line. Push a loaded thela and an empty one with the same force — the loaded one accelerates less. Mass is the resistance to a change in linear motion.<br><br><b>Moment of inertia</b> is the exact same idea, but for spinning. It’s how hard it is to get something rotating — its resistance to a change in angular motion. And here’s the twist that makes it richer than mass: moment of inertia depends not just on how much mass an object has, but on where that mass sits relative to the spin axis. Mass far from the axis is “expensive” to spin; mass near the axis is “cheap.”<br><br>You feel this every time you use a jhaadu (broom) or a cricket bat. Hold a bat by the handle and waggle it — hard work, because most of the wood is far from your wrists. Now choke up, gripping near the middle — suddenly it whips around easily. Same bat, same mass, but you moved the axis closer to the mass, slashing the moment of inertia. A tabla player’s quick wrist flicks, a fan blade, a merry-go-round at the mela — all of them are governed by how their mass is spread out from the axis.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine two metal objects of the same mass and radius. In the first, all the metal is bunched at the rim (a ring). In the second, the metal is spread evenly across the whole area (a disc). Spin both about their centres. The ring fights you harder — its mass lives far out at radius <i>R</i>, so every bit contributes the maximum <i>mr</i><sup>2</sup>. The disc has lots of mass close in, contributing little. That’s why a solid disc (½<i>MR</i><sup>2</sup>) has exactly half the moment of inertia of a ring (<i>MR</i><sup>2</sup>) of the same mass and radius. Distance is squared in the formula, so the outermost mass dominates — a tiny shift of mass outward costs you dearly.',
      },
      {
        t: 'p',
        html: 'This squaring is the soul of the concept. Because each particle contributes <i>mr</i><sup>2</sup>, doubling a particle’s distance from the axis quadruples its contribution. That single fact explains nearly every moment-of-inertia result you’ll meet.<br><br>Engineers exploit this deliberately. A <b>flywheel</b> — the heavy spinning disc in a potter’s wheel, an old sewing machine, or a car engine — is built with most of its mass concentrated at the rim precisely to make its moment of inertia large. A large <i>I</i> means the wheel resists changes in spin, smoothing out the jerky pushes of a foot pedal or firing pistons into steady rotation. The same principle, run in reverse, is why a gymnast or diver tucks into a tight ball mid-air: shrinking <i>I</i> lets them spin rapidly, then they open out to slow down for a clean landing. And looking ahead to rolling motion, two objects of equal mass and radius released down a ramp will not arrive together — the one with the smaller moment of inertia (the solid sphere) wins the race against the ring, because less of its energy gets “locked up” in spinning. Moment of inertia quietly decides all of these.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>1. <b>Moment of inertia is always defined about a specific axis.</b> The very same body has different values about different axes — there’s no single “the moment of inertia.” Always ask “about which axis?” before quoting a number.<br>2. <b>The <i>r</i> in <i>mr</i><sup>2</sup> is the perpendicular distance from the axis,</b> not the distance from a point or from the centre of mass. Students lose marks confusing the two.<br>3. <b>It depends only on mass, its distribution, and the axis — never on the angular velocity.</b> A body has the same moment of inertia whether spinning fast, slow, or sitting still. (It does change slightly with temperature, since thermal expansion shifts the mass distribution — a nice exam footnote.)<br>4. <b>It’s technically a tensor</b>, not a scalar or vector — but for the fixed-axis problems in this syllabus, treating it as a single number about the chosen axis is exactly right.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Definition — discrete particles and continuous bodies',
        main: '<i>I</i> = ∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup> and <i>I</i> = ∫ <i>r</i><sup>2</sup> d<i>m</i>',
        legend: ['<i>r</i> = the <b>perpendicular distance</b> of each mass element from the axis'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Radius of gyration',
        main: '<i>I</i> = <i>Mk</i><sup>2</sup> ⇒ <i>k</i> = √(<i>I</i>/<i>M</i>)',
        legend: ['<i>k</i> = the single distance at which the whole mass could be concentrated to give the same <i>I</i>'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Theorem of Parallel Axes (works for any body)',
        main: '<i>I</i> = <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup>',
        legend: [
          '<i>I</i><sub>cm</sub> = the MOI about a parallel axis through the centre of mass',
          '<i>d</i> = the distance between the two axes',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Theorem of Perpendicular Axes (works only for flat/laminar bodies)',
        main: '<i>I</i><sub><i>z</i></sub> = <i>I</i><sub><i>x</i></sub> + <i>I</i><sub><i>y</i></sub>',
        legend: [
          '<i>x</i> and <i>y</i> = two perpendicular axes in the plane of the lamina',
          '<i>z</i> = perpendicular to it, all meeting at one point',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Standard results</b> (memorise these — they’re the toolkit for every problem):',
      },
      {
        t: 'table',
        title: null,
        head: ['Body', 'Axis', 'Moment of Inertia'],
        rows: [
          ['Ring / hoop', 'central, ⊥ to plane', '<i>MR</i><sup>2</sup>'],
          ['Ring', 'diameter', '½<i>MR</i><sup>2</sup>'],
          ['Disc', 'central, ⊥ to plane', '½<i>MR</i><sup>2</sup>'],
          ['Disc', 'diameter', '¼<i>MR</i><sup>2</sup>'],
          ['Rod', '⊥ through centre', '(1/12)<i>ML</i><sup>2</sup>'],
          ['Rod', '⊥ through end', '⅓<i>ML</i><sup>2</sup>'],
          ['Solid sphere', 'diameter', '(2/5)<i>MR</i><sup>2</sup>'],
          ['Hollow sphere (shell)', 'diameter', '⅔<i>MR</i><sup>2</sup>'],
          ['Solid cylinder', 'own axis', '½<i>MR</i><sup>2</sup>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Notation & dimensions:</b> <i>M</i> = total mass, <i>R</i>/<i>L</i> = radius/length. SI unit of <i>I</i> is <b>kg · m<sup>2</sup></b>; dimensional formula [M<sup>1</sup> L<sup>2</sup> T<sup>0</sup>]. Radius of gyration <i>k</i> has unit metre, dimension [L].',
      },

      { t: 'part', title: 'CBSE board derivation — MOI of a uniform rod and the axis theorems' },
      {
        t: 'p',
        html: '<b>Derivation: Moment of inertia of a thin uniform rod about a perpendicular axis through its centre</b><br><b>Step 1 — Set up.</b> Take a rod of mass <i>M</i>, length <i>L</i>, lying along the x-axis with its centre at the origin. The axis of rotation is perpendicular to the rod, through the origin.',
      },
      { t: 'fig', id: 'p11-06-fig-6.7' },
      {
        t: 'p',
        html: '<b>Step 2 — Define a mass element.</b> Since the rod is uniform, its linear mass density is <i>λ</i> = <i>M</i>/<i>L</i>. A small element of width d<i>x</i> at distance <i>x</i> from the axis has mass:<br>d<i>m</i> = <i>λ</i> d<i>x</i> = (<i>M</i>/<i>L</i>) d<i>x</i><br><br><b>Step 3 — Write its contribution.</b> Each element sits at perpendicular distance <i>x</i> from the axis, so it contributes:<br>d<i>I</i> = <i>x</i><sup>2</sup> d<i>m</i> = <i>x</i><sup>2</sup> · (<i>M</i>/<i>L</i>) d<i>x</i><br><br><b>Step 4 — Integrate over the whole rod</b>, from <i>x</i> = −<i>L</i>/2 to <i>x</i> = +<i>L</i>/2:<br><i>I</i> = (<i>M</i>/<i>L</i>) ∫<sub>−<i>L</i>/2</sub><sup>+<i>L</i>/2</sup> <i>x</i><sup>2</sup> d<i>x</i> = (<i>M</i>/<i>L</i>) [<i>x</i><sup>3</sup>/3]<sub>−<i>L</i>/2</sub><sup>+<i>L</i>/2</sup> = (<i>M</i>/<i>L</i>) · ⅓ (<i>L</i><sup>3</sup>/8 + <i>L</i><sup>3</sup>/8) = (<i>M</i>/<i>L</i>) · <i>L</i><sup>3</sup>/12<br><br><b>Step 5 — Result.</b><br><i>I</i><sub>centre</sub> = <i>ML</i><sup>2</sup>/12',
      },
      {
        t: 'p',
        html: '<b>Theorem of Perpendicular Axes (with proof)</b><br>For a flat lamina in the <i>xy</i>-plane, a mass element at (<i>x</i>, <i>y</i>) sits at distance <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) from the <i>z</i>-axis. So:<br><i>I</i><sub><i>z</i></sub> = ∫ <i>r</i><sup>2</sup> d<i>m</i> = ∫ (<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) d<i>m</i> = ∫ <i>x</i><sup>2</sup> d<i>m</i> + ∫ <i>y</i><sup>2</sup> d<i>m</i><br>Now, ∫ <i>y</i><sup>2</sup> d<i>m</i> = <i>I</i><sub><i>x</i></sub> (distance from x-axis is <i>y</i>) and ∫ <i>x</i><sup>2</sup> d<i>m</i> = <i>I</i><sub><i>y</i></sub>. Therefore:<br><i>I</i><sub><i>z</i></sub> = <i>I</i><sub><i>x</i></sub> + <i>I</i><sub><i>y</i></sub><br><br>Why “laminar only”: the proof needs every mass element to lie in the plane (<i>z</i> = 0). For a 3D body this fails, so the theorem does <b>not</b> apply to spheres, cylinders, or cubes.',
      },
      {
        t: 'p',
        html: '<b>Bonus derivation: ring, then disc (the chaining trick)</b><br>Two more standard results fall out quickly, and they show how one derivation feeds the next.<br><br><b>Ring about its central axis.</b> Every bit of a ring sits at the same distance <i>R</i> from the axis, so <i>r</i> comes straight out of the integral:<br><i>I</i><sub>ring</sub> = ∫ <i>R</i><sup>2</sup> d<i>m</i> = <i>R</i><sup>2</sup> ∫ d<i>m</i> = <i>MR</i><sup>2</sup><br>No calculus needed — the geometry does the work.<br><br><b>Disc about its central axis (by stacking rings).</b> Treat a disc as nested rings. A ring at radius <i>r</i>, thickness d<i>r</i>, has area 2<i>πr</i> d<i>r</i>, so with surface density <i>σ</i> = <i>M</i>/(<i>πR</i><sup>2</sup>) its mass is d<i>m</i> = <i>σ</i> 2<i>πr</i> d<i>r</i>. Each ring contributes d<i>I</i> = <i>r</i><sup>2</sup> d<i>m</i>:<br><i>I</i><sub>disc</sub> = ∫<sub>0</sub><sup><i>R</i></sup> <i>r</i><sup>2</sup> (<i>σ</i> 2<i>πr</i> d<i>r</i>) = 2<i>πσ</i> ∫<sub>0</sub><sup><i>R</i></sup> <i>r</i><sup>3</sup> d<i>r</i> = 2<i>πσ</i> · <i>R</i><sup>4</sup>/4 = <i>πσR</i><sup>4</sup>/2 = ½<i>MR</i><sup>2</sup><br>Notice the disc derivation used the ring result as its building block. This chaining — point mass → ring → disc → sphere — is the master technique for the whole subtopic.',
      },
      {
        t: 'p',
        html: 'The parallel-axis theorem, <i>I</i> = <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup>, lets us shift to any parallel axis. Let’s verify the rod’s end value. The axis through the end is parallel to the central axis and a distance <i>d</i> = <i>L</i>/2 away:<br><i>I</i><sub>end</sub> = <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup> = <i>ML</i><sup>2</sup>/12 + <i>M</i>(<i>L</i>/2)<sup>2</sup> = <i>ML</i><sup>2</sup>/12 + <i>ML</i><sup>2</sup>/4 = <i>ML</i><sup>2</sup>/3 ✓<br>This matches the table — a satisfying internal consistency check, and the fastest way to get the “about-the-end” value without re-integrating.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Four point masses, each of 2 kg, are placed at the corners of a square of side 1 m. Find the moment of inertia of the system about an axis passing through the centre of the square and perpendicular to its plane.',
        steps: [
          '<b>Given:</b> <i>m</i> = 2 kg each; square side <i>a</i> = 1 m. The perpendicular distance of each corner from the centre is half the diagonal:<br><i>r</i> = <i>a</i>√2/2 = √2/2 m, <i>r</i><sup>2</sup> = <i>a</i><sup>2</sup>/2 = ½ m<sup>2</sup>',
          '<b>Formula:</b> <i>I</i> = ∑ <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup>. All four masses are equidistant:<br><i>I</i> = 4 × <i>m r</i><sup>2</sup> = 4 × 2 × ½ = 4 kg · m<sup>2</sup>',
        ],
        ans: '<i>I</i> = 4 kg · m<sup>2</sup>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A ring and a disc have the same mass <i>M</i> and the same radius <i>R</i>. Find the radius of gyration of each about its central perpendicular axis, and state which is larger.',
        steps: [
          '<b>The trap:</b> Students hunt for the mass or try to compute integrals. But radius of gyration <i>k</i> = √(<i>I</i>/<i>M</i>) needs only the standard formula — mass cancels out entirely.',
          '<b>Mental shortcut — plug the standard <i>I</i> into <i>k</i> = √(<i>I</i>/<i>M</i>).</b><br>• Ring: <i>I</i> = <i>MR</i><sup>2</sup> ⇒ <i>k</i><sub>ring</sub> = √(<i>MR</i><sup>2</sup>/<i>M</i>) = <i>R</i><br>• Disc: <i>I</i> = ½<i>MR</i><sup>2</sup> ⇒ <i>k</i><sub>disc</sub> = √((<i>MR</i><sup>2</sup>/2)/<i>M</i>) = <i>R</i>/√2 ≈ 0.707<i>R</i>',
        ],
        ans: '<i>k</i><sub>ring</sub> = <i>R</i>, <i>k</i><sub>disc</sub> = <i>R</i>/√2. The <b>ring</b> has the larger radius of gyration. Sanity check: the ring keeps all its mass at the rim, so its “effective distance” is the full <i>R</i>. The disc spreads mass inward, pulling the effective distance below <i>R</i>. Physics and formula agree. ✓',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find the moment of inertia of a uniform disc of mass <i>M</i> and radius <i>R</i> about a tangent lying in the plane of the disc.',
        steps: [
          'This needs <b>both</b> axis theorems in sequence — the hallmark of a JEE Main problem.',
          '<b>Concept 1 — Perpendicular axis theorem gives the diameter value.</b> About the central perpendicular axis, <i>I</i><sub><i>z</i></sub> = ½<i>MR</i><sup>2</sup>. By symmetry, the MOI about any in-plane diameter is the same: <i>I</i><sub><i>x</i></sub> = <i>I</i><sub><i>y</i></sub> = <i>I</i><sub><i>d</i></sub>. So:<br><i>I</i><sub><i>z</i></sub> = <i>I</i><sub><i>x</i></sub> + <i>I</i><sub><i>y</i></sub> = 2<i>I</i><sub><i>d</i></sub> ⇒ <i>I</i><sub><i>d</i></sub> = <i>I</i><sub><i>z</i></sub>/2 = ¼<i>MR</i><sup>2</sup>',
          '<b>Concept 2 — Parallel axis theorem shifts to the tangent.</b> A tangent in the plane is parallel to a diameter, a distance <i>d</i> = <i>R</i> away:<br><i>I</i><sub>tangent</sub> = <i>I</i><sub><i>d</i></sub> + <i>MR</i><sup>2</sup> = ¼<i>MR</i><sup>2</sup> + <i>MR</i><sup>2</sup> = (5/4)<i>MR</i><sup>2</sup>',
        ],
        ans: '<i>I</i><sub>tangent</sub> = (5/4)<i>MR</i><sup>2</sup>. Why two concepts: you first need the perpendicular-axis theorem to get the diameter MOI, then the parallel-axis theorem to walk it out to the tangent. Skip either and you’re stuck.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p11-06-fig-6.8',
        q: 'Derive, by integration, the moment of inertia of a uniform solid sphere of mass <i>M</i> and radius <i>R</i> about a diameter.',
        steps: [
          '<b>Strategy:</b> Slice the sphere into thin discs stacked along the diameter (the axis), and integrate using the known disc result d<i>I</i> = ½(d<i>m</i>)<i>r</i><sup>2</sup>.',
          '<b>Step 1 — Geometry of a slice.</b> At height <i>y</i> from the centre, the disc has radius <i>r</i> = √(<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>) and thickness d<i>y</i>.',
          '<b>Step 2 — Mass of the slice.</b> With volume density <i>ρ</i> = <i>M</i>/((4/3)<i>πR</i><sup>3</sup>), the slice volume is <i>πr</i><sup>2</sup> d<i>y</i>, so:<br>d<i>m</i> = <i>ρ πr</i><sup>2</sup> d<i>y</i> = <i>ρ π</i>(<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>) d<i>y</i>',
          '<b>Step 3 — MOI of the slice about the axis</b> (it’s a disc about its own central axis):<br>d<i>I</i> = ½(d<i>m</i>) <i>r</i><sup>2</sup> = ½<i>ρπ</i>(<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>)<sup>2</sup> d<i>y</i>',
          '<b>Step 4 — Integrate from <i>y</i> = −<i>R</i> to <i>y</i> = +<i>R</i>:</b><br><i>I</i> = ½<i>ρπ</i> ∫<sub>−<i>R</i></sub><sup><i>R</i></sup> (<i>R</i><sup>2</sup> − <i>y</i><sup>2</sup>)<sup>2</sup> d<i>y</i> = ½<i>ρπ</i> ∫<sub>−<i>R</i></sub><sup><i>R</i></sup> (<i>R</i><sup>4</sup> − 2<i>R</i><sup>2</sup><i>y</i><sup>2</sup> + <i>y</i><sup>4</sup>) d<i>y</i><br>= ½<i>ρπ</i> [<i>R</i><sup>4</sup><i>y</i> − 2<i>R</i><sup>2</sup><i>y</i><sup>3</sup>/3 + <i>y</i><sup>5</sup>/5]<sub>−<i>R</i></sub><sup><i>R</i></sup> = ½<i>ρπ</i> · 2(<i>R</i><sup>5</sup> − 2<i>R</i><sup>5</sup>/3 + <i>R</i><sup>5</sup>/5) = ½<i>ρπ</i> · 16<i>R</i><sup>5</sup>/15',
          '<b>Step 5 — Substitute <i>ρ</i>.</b><br><i>I</i> = (8<i>πR</i><sup>5</sup>/15) · <i>M</i>/((4/3)<i>πR</i><sup>3</sup>) = (8<i>πR</i><sup>5</sup>/15) · 3<i>M</i>/(4<i>πR</i><sup>3</sup>) = (2/5)<i>MR</i><sup>2</sup>',
        ],
        ans: '<i>I</i> = (2/5)<i>MR</i><sup>2</sup>, confirming the standard result from first principles.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Three particles of mass 1 kg each sit at the vertices of an equilateral triangle of side 2 m. Find the moment of inertia of the system about an axis passing through one vertex and perpendicular to the plane of the triangle.',
            a: '8 kg · m<sup>2</sup>',
          },
          {
            q: '[NEET] A solid sphere and a hollow sphere have the same mass and radius. Which has the greater moment of inertia about a diameter, and what is the ratio <i>I</i><sub>hollow</sub> : <i>I</i><sub>solid</sub>?',
            a: 'The hollow sphere; <i>I</i><sub>hollow</sub> : <i>I</i><sub>solid</sub> = 2/3 : 2/5 = 5 : 3',
          },
          {
            q: '[JEE Main] The radius of gyration of a uniform rod of length <i>L</i> about an axis through its centre and perpendicular to its length is:',
            a: '<i>k</i> = <i>L</i>/(2√3)',
          },
          {
            q: '[JEE Main] A circular disc of radius <i>R</i> has a concentric circular hole of radius <i>R</i>/2 cut out. Find the moment of inertia of the remaining portion about the central perpendicular axis, in terms of the remaining mass <i>M</i>.',
            a: '<i>I</i> = (5/8)<i>MR</i><sup>2</sup> (where <i>M</i> is the remaining mass)',
          },
          {
            q: '[JEE Advanced] A thin rod of length <i>L</i> has a linear mass density that varies as <i>λ</i> = <i>λ</i><sub>0</sub><i>x</i>/<i>L</i>, where <i>x</i> is measured from one end. Find its moment of inertia about an axis through that end, perpendicular to the rod.',
            a: '<i>I</i> = <i>λ</i><sub>0</sub><i>L</i><sup>3</sup>/4 = <i>ML</i><sup>2</sup>/2 (since <i>M</i> = ½<i>λ</i><sub>0</sub><i>L</i>)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The moment of inertia of a rigid body depends on all of the following EXCEPT:',
        opts: [
          {
            label: 'the mass of the body',
            nudge: '<b>(A)</b>, <b>(B)</b> and <b>(C)</b> are precisely the three things <i>I</i> does depend on, so none is the exception. Rejecting <b>(D)</b> confuses <i>I</i> with the kinetic energy ½<i>Iω</i><sup>2</sup>, which does involve <i>ω</i> — but <i>I</i> itself does not.',
          },
          {
            label: 'the distribution of mass about the axis',
            nudge: '<b>(A)</b>, <b>(B)</b> and <b>(C)</b> are precisely the three things <i>I</i> does depend on, so none is the exception. Rejecting <b>(D)</b> confuses <i>I</i> with the kinetic energy ½<i>Iω</i><sup>2</sup>, which does involve <i>ω</i> — but <i>I</i> itself does not.',
          },
          {
            label: 'the position of the axis of rotation',
            nudge: '<b>(A)</b>, <b>(B)</b> and <b>(C)</b> are precisely the three things <i>I</i> does depend on, so none is the exception. Rejecting <b>(D)</b> confuses <i>I</i> with the kinetic energy ½<i>Iω</i><sup>2</sup>, which does involve <i>ω</i> — but <i>I</i> itself does not.',
          },
          { label: 'the angular velocity of the body', nudge: null },
        ],
        correct: 3,
        solution: 'Moment of inertia is a geometric property of the body and axis; it is identical whether the body spins fast, slow, or not at all.',
      },
      {
        t: 'mcq',
        q: 'A concentric circular hole is cut from a uniform disc, about its central perpendicular axis. Compared to the original disc, the remaining portion has:',
        opts: [
          { label: 'larger MOI, smaller radius of gyration', nudge: '<b>(A)</b> and <b>(C)</b> mishandle the direction of the MOI change.' },
          { label: 'smaller MOI, larger radius of gyration', nudge: null },
          { label: 'larger MOI and larger radius of gyration', nudge: '<b>(A)</b> and <b>(C)</b> mishandle the direction of the MOI change.' },
          {
            label: 'smaller MOI and smaller radius of gyration',
            nudge: '<b>(D)</b> is the gut reaction (“less mass, so everything decreases”) and the most common error — it forgets that <i>k</i> depends on the ratio <i>I</i>/<i>M</i>, not on <i>I</i> alone.',
          },
        ],
        correct: 1,
        solution: 'Removing inner mass takes away material that was close to the axis (cheap, low-<i>r</i><sup>2</sup>), so <i>I</i> drops a little. But it removes mass that contributed little to <i>I</i> relative to its mass, so the average distance of the remaining mass increases — pushing <i>k</i> = √(<i>I</i>/<i>M</i>) up.',
      },
      {
        t: 'mcq',
        q: 'The perpendicular axis theorem can be applied to:',
        opts: [
          {
            label: 'a solid sphere',
            nudge: '<b>(A)</b>, <b>(B)</b>, and <b>(D)</b> are all three-dimensional bodies with mass spread out of any single plane, so the theorem’s defining assumption (<i>z</i> = 0 for all mass) breaks.',
          },
          {
            label: 'a solid cylinder',
            nudge: '<b>(A)</b>, <b>(B)</b>, and <b>(D)</b> are all three-dimensional bodies with mass spread out of any single plane, so the theorem’s defining assumption (<i>z</i> = 0 for all mass) breaks.',
          },
          { label: 'a thin circular disc', nudge: null },
          {
            label: 'a cube',
            nudge: '<b>(A)</b>, <b>(B)</b>, and <b>(D)</b> are all three-dimensional bodies with mass spread out of any single plane, so the theorem’s defining assumption (<i>z</i> = 0 for all mass) breaks.',
          },
        ],
        correct: 2,
        solution: 'The theorem holds only for <b>planar (laminar)</b> bodies, where all mass lies in one plane. A thin disc qualifies. This “which shape qualifies” question is a recurring JEE favourite.',
      },
      {
        t: 'mcq',
        q: 'Two identical rods each of mass <i>M</i> and length <i>L</i> are joined in the form of a ‘+’ (cross) at their centres. The moment of inertia of the cross about an axis through the centre, perpendicular to its plane, is:',
        opts: [
          { label: '<i>ML</i><sup>2</sup>/12', nudge: '<b>(A)</b> counts only one rod.' },
          { label: '<i>ML</i><sup>2</sup>/6', nudge: null },
          { label: '<i>ML</i><sup>2</sup>/3', nudge: '<b>(C)</b> wrongly uses the about-the-end value <i>ML</i><sup>2</sup>/3.' },
          { label: '2<i>ML</i><sup>2</sup>/3', nudge: '<b>(D)</b> doubles that error.' },
        ],
        correct: 1,
        solution: 'Each rod about a perpendicular axis through its centre is <i>ML</i><sup>2</sup>/12. Moments of inertia about the same axis simply add:<br><i>I</i> = <i>ML</i><sup>2</sup>/12 + <i>ML</i><sup>2</sup>/12 = <i>ML</i><sup>2</sup>/6<br>The key fact: MOIs about a common axis add directly.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using the wrong distance in <i>mr</i><sup>2</sup>.</b> The <i>r</i> is the perpendicular distance from the axis, never the distance from the centre of mass or from a random point. For a corner mass on a square rotating about the centre, <i>r</i> is half the diagonal, not half the side.',
          '<b>Applying the perpendicular axis theorem to 3D bodies.</b> It is for flat laminae only. Reaching for it on a sphere or cylinder is an instant wrong answer.',
          '<b>Mixing up the standard formulas.</b> Disc-about-centre (½<i>MR</i><sup>2</sup>) vs disc-about-diameter (¼<i>MR</i><sup>2</sup>); solid sphere ((2/5)<i>MR</i><sup>2</sup>) vs shell (⅔<i>MR</i><sup>2</sup>). Build a clean mental table and rehearse it.',
          '<b>Thinking radius of gyration moves with mass.</b> <i>k</i> depends only on geometry and axis — add or remove uniform mass and <i>k</i> can stay put or even rise, as in the hollowed-disc case.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> When you need an MOI about an off-centre axis, don’t integrate — reach for the parallel axis theorem (<i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup>) first. And for any flat plate, the perpendicular axis theorem turns one hard integral into two easy ones. Most “hard” MOI problems are really one standard formula plus one theorem; spot the combination and the work collapses.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: '<i>I</i> = ∑ <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup> = ∫ <i>r</i><sup>2</sup> d<i>m</i> — <i>r</i> is the perpendicular distance from the axis.',
          },
          { f: 'Radius of gyration', note: '<i>k</i> = √(<i>I</i>/<i>M</i>), <i>I</i> = <i>Mk</i><sup>2</sup>.' },
          {
            f: '<b>Parallel axis (any body):</b> <i>I</i> = <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup>. <b>Perpendicular axis (laminae only):</b> <i>I</i><sub><i>z</i></sub> = <i>I</i><sub><i>x</i></sub> + <i>I</i><sub><i>y</i></sub>.',
            note: '',
          },
          {
            f: 'Must-know values',
            note: 'ring <i>MR</i><sup>2</sup>; disc ½<i>MR</i><sup>2</sup>; rod-centre <i>ML</i><sup>2</sup>/12; rod-end <i>ML</i><sup>2</sup>/3; solid sphere (2/5)<i>MR</i><sup>2</sup>; shell ⅔<i>MR</i><sup>2</sup>.',
          },
          { f: '<b>Depends on:</b> mass, mass distribution, axis. <b>Independent of:</b> angular velocity.', note: '' },
          { f: 'Unit/dimension', note: 'kg · m<sup>2</sup>, [M L<sup>2</sup>].' },
        ],
        aids: [
          '<b>Memory aid — “Far mass is costly”:</b> because <i>r</i> is squared, mass far from the axis dominates <i>I</i>. Ring beats disc, hollow beats solid.',
          '<b>Memory aid — “Perpendicular = Pancake”:</b> the perpendicular axis theorem works only for flat, pancake-like laminae — never for solid 3D shapes.',
        ],
      },
    ],
  },
  // ───────────────────────── Topic 07 · pp. 418–428 ─────────────────────────
  {
    n: '07',
    title: 'Rotational Kinematics and Dynamics',
    kalam: 'Every quantity you know from straight-line motion has an exact rotational twin.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This subtopic ties the whole chapter together. JEE Main asks 1–2 questions yearly — constant-<i>α</i> kinematics and pulley/connected-body <i>τ</i> = <i>Iα</i> problems are perennial. NEET favours direct numericals and the <i>v</i> = <i>rω</i> relation. JEE Advanced pushes into connected systems, energy methods, and variable torque. CBSE Boards wants the <i>τ</i> = <i>Iα</i> derivation, rotational kinetic energy, and the kinematic equations.',
      },
      {
        t: 'p',
        html: 'Here’s the best news in this entire chapter: you have already studied rotational kinematics and dynamics. You studied it earlier under the name “linear motion.” Rotation is simply that same physics, retold with a new cast of characters.<br><br>Every quantity you know from straight-line motion has an exact rotational twin. Distance <i>s</i> becomes angle <i>θ</i>. Velocity <i>v</i> becomes angular velocity <i>ω</i>. Acceleration <i>a</i> becomes angular acceleration <i>α</i>. Force <i>F</i> becomes torque <i>τ</i>. Mass <i>m</i> — the resistance to linear acceleration — becomes moment of inertia <i>I</i>, the resistance to angular acceleration. Once you internalise this dictionary, the famous “<i>v</i> = <i>u</i> + <i>at</i>” family of equations and “<i>F</i> = <i>ma</i>” carry over almost word for word.<br><br>Watch a <b>ceiling fan</b>. Flip the switch and it speeds up — that’s angular acceleration <i>α</i>. After a while it spins at a steady rate — constant angular velocity <i>ω</i>, zero <i>α</i>. Switch it off and it gradually slows — angular deceleration. The fan is living out the rotational version of a car starting, cruising, and braking.<br><br>Now the single most important intuition in this subtopic. On a rigid rotating body, <b>every particle shares the same <i>ω</i> and the same <i>α</i> — but each has a different linear speed <i>v</i> = <i>rω</i>.</b> Picture a merry-go-round at the mela. A child sitting near the centre and a child clinging to the outer rim both complete one full circle in the same time, so their angular velocity is identical. But the outer child is hurtling along a much bigger circle and feels a thrilling rush of speed, while the inner child barely moves. Same <i>ω</i>, very different <i>v</i>, because <i>v</i> scales with the radius <i>r</i>. This one fact — “angular is shared, linear is not” — resolves an enormous fraction of conceptual questions.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A music record or an old film reel: every groove turns at the same rate (same <i>ω</i>), yet a point on the outer edge sweeps past far more centimetres per second than a point near the spindle. Linear speed depends on where you are; angular speed is a property of the whole disc.',
      },
      {
        t: 'p',
        html: 'The dynamics half answers a simple question: what makes rotation speed up? The answer is <b>torque</b>, and the rule is the rotational echo of Newton’s second law: <i>τ</i> = <i>Iα</i>. Just as a heavier object needs more force for the same acceleration, a body with larger moment of inertia needs more torque for the same angular acceleration. That’s why a heavy stone flywheel on a chakki (grinding wheel) takes a real heave to get going — large <i>I</i>, so large <i>τ</i> needed.<br><br>Notice that this means two things control how fast a body spins up, not one: how hard you twist it (torque) <b>and</b> how its mass is arranged (moment of inertia). A figure skater and a child’s spinning top respond to the same gentle torque very differently, because their moments of inertia differ enormously. This is the rotational reason a long lathi (staff) is harder to twirl end-over-end than to spin about its length — same stick, same effort, but the mass sits much farther from the axis in the first case, so <i>I</i> is larger and the resulting <i>α</i> is smaller. Internalise that torque and moment of inertia together set the angular acceleration, and the dynamics of this entire chapter become predictable.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>1. <b>The constant-<i>α</i> kinematic equations work only when <i>α</i> is constant</b> — exactly like the linear SUVAT equations require constant <i>a</i>. If torque (and hence <i>α</i>) varies, you must integrate instead.<br>2. <b><i>τ</i> = <i>Iα</i> holds for rigid bodies about a fixed axis</b> (or an axis through the centre of mass). For a non-rigid system — say a tank of sloshing water — different particles have different <i>α</i> and the equation fails.<br>3. <b>Always use radians, not degrees,</b> in these formulas. The relations <i>s</i> = <i>rθ</i>, <i>v</i> = <i>rω</i> are defined for radian measure.<br>4. <b>Finite angular displacements are not vectors</b> (they don’t add commutatively); only infinitesimal d<i>θ⃗</i>, and hence <i>ω⃗</i> and <i>α⃗</i>, qualify as vectors.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Defining relations',
        main: '<i>ω</i> = d<i>θ</i>/d<i>t</i>, <i>α</i> = d<i>ω</i>/d<i>t</i> = d<sup>2</sup><i>θ</i>/d<i>t</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Kinematic equations for constant angular acceleration (the rotational SUVAT)',
        main: '<i>ω</i> = <i>ω</i><sub>0</sub> + <i>αt</i><br><i>θ</i> = <i>ω</i><sub>0</sub><i>t</i> + ½<i>αt</i><sup>2</sup><br><i>ω</i><sup>2</sup> = <i>ω</i><sub>0</sub><sup>2</sup> + 2<i>αθ</i><br><i>θ</i><sub><i>n</i>th</sub> = <i>ω</i><sub>0</sub> + (<i>α</i>/2)(2<i>n</i> − 1) (angle in the <i>n</i>-th second)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Linear–angular bridge (for a point at perpendicular distance r from the axis)',
        main: '<i>s</i> = <i>rθ</i>, <i>v</i> = <i>rω</i>, <i>a</i><sub><i>t</i></sub> = <i>rα</i>, <i>a</i><sub><i>c</i></sub> = <i>ω</i><sup>2</sup><i>r</i> = <i>v</i><sup>2</sup>/<i>r</i>',
        legend: ['<i>a</i><sub><i>t</i></sub> = the tangential acceleration', '<i>a</i><sub><i>c</i></sub> = the centripetal (radial) acceleration'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rotational dynamics',
        main: '<i>τ</i><sub>net</sub> = <i>Iα</i>',
        legend: [],
        note: '(rotational Newton’s second law)',
      },
      {
        t: 'formula',
        kicker: 'Rotational kinetic energy, work, and power',
        main: '<i>K</i><sub>rot</sub> = ½<i>Iω</i><sup>2</sup>, <i>W</i> = <i>τθ</i> (<i>τ</i> const), <i>P</i> = <i>τω</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Work–energy theorem for rotation',
        main: '<i>W</i> = Δ<i>K</i><sub>rot</sub> = ½<i>Iω</i><sup>2</sup> − ½<i>Iω</i><sub>0</sub><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'defgrid',
        title: 'The master analogy table — your single most useful study aid for this subtopic',
        rows: [
          { k: 'Displacement <i>s</i>', v: 'Angular displacement <i>θ</i>' },
          { k: 'Velocity <i>v</i>', v: 'Angular velocity <i>ω</i>' },
          { k: 'Acceleration <i>a</i>', v: 'Angular acceleration <i>α</i>' },
          { k: 'Mass <i>m</i>', v: 'Moment of inertia <i>I</i>' },
          { k: 'Force <i>F</i>', v: 'Torque <i>τ</i>' },
          { k: '<i>F</i> = <i>ma</i>', v: '<i>τ</i> = <i>Iα</i>' },
          { k: 'Momentum <i>p</i> = <i>mv</i>', v: 'Angular momentum <i>L</i> = <i>Iω</i>' },
          { k: '<i>KE</i> = ½<i>mv</i><sup>2</sup>', v: '<i>K</i><sub>rot</sub> = ½<i>Iω</i><sup>2</sup>' },
          { k: 'Power <i>P</i> = <i>Fv</i>', v: 'Power <i>P</i> = <i>τω</i>' },
        ],
      },
      {
        t: 'p',
        html: '<b>Units & dimensions:</b> <i>ω</i> in rad · s<sup>−1</sup>, dimension [T<sup>−1</sup>]; <i>α</i> in rad · s<sup>−2</sup>, dimension [T<sup>−2</sup>]. (The radian is dimensionless, so it doesn’t appear in dimensional formulas.)',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1: The rotational form of Newton’s second law, <i>τ</i> = <i>Iα</i></b><br><b>Step 1 — Look at one particle.</b> Consider a rigid body rotating about a fixed axis with angular acceleration <i>α</i>. Take the <i>i</i>-th particle of mass <i>m</i><sub><i>i</i></sub> at perpendicular distance <i>r</i><sub><i>i</i></sub> from the axis.',
      },
      { t: 'fig', id: 'p11-06-fig-6.9' },
      {
        t: 'p',
        html: '<b>Step 2 — Its tangential acceleration.</b> Since every particle shares the same <i>α</i>, this particle’s tangential (linear) acceleration is:<br><i>a</i><sub><i>i</i></sub> = <i>r</i><sub><i>i</i></sub><i>α</i><br><br><b>Step 3 — The force and torque on it.</b> By Newton’s second law, the tangential force needed is <i>F</i><sub><i>i</i></sub> = <i>m</i><sub><i>i</i></sub><i>a</i><sub><i>i</i></sub> = <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><i>α</i>. This force acts at distance <i>r</i><sub><i>i</i></sub> from the axis, so the torque it produces about the axis is:<br><i>τ</i><sub><i>i</i></sub> = <i>F</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub> = <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup><i>α</i><br><br><b>Step 4 — Sum over all particles.</b> The net torque is the sum of all individual torques (internal torques cancel in pairs, leaving only external ones):<br><i>τ</i><sub>net</sub> = ∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup><i>α</i> = (∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup>) <i>α</i><br><br><b>Step 5 — Recognise the moment of inertia.</b> The bracketed quantity is exactly <i>I</i> = ∑ <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup>. Therefore:<br><i>τ</i><sub>net</sub> = <i>Iα</i><br>This is the rotational twin of <i>F</i> = <i>ma</i>, with torque playing the role of force and moment of inertia playing the role of mass.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2: Rotational kinetic energy, <i>K</i> = ½<i>Iω</i><sup>2</sup></b><br><b>Step 1 — Kinetic energy of one particle.</b> The <i>i</i>-th particle moves with linear speed <i>v</i><sub><i>i</i></sub> = <i>r</i><sub><i>i</i></sub><i>ω</i>, so its kinetic energy is ½<i>m</i><sub><i>i</i></sub><i>v</i><sub><i>i</i></sub><sup>2</sup> = ½<i>m</i><sub><i>i</i></sub>(<i>r</i><sub><i>i</i></sub><i>ω</i>)<sup>2</sup>.<br><b>Step 2 — Sum over the body.</b> Since <i>ω</i> is common to all particles:<br><i>K</i> = ∑<sub><i>i</i></sub> ½<i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup><i>ω</i><sup>2</sup> = ½ (∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub><i>r</i><sub><i>i</i></sub><sup>2</sup>) <i>ω</i><sup>2</sup> = ½<i>Iω</i><sup>2</sup><br>This is not a new kind of energy — it’s just the ordinary ½<i>mv</i><sup>2</sup> of every particle, added up and repackaged in rotational language.',
      },
      {
        t: 'p',
        html: '<b>Key Procedure: where the kinematic equations come from</b><br>The constant-<i>α</i> equations aren’t magic — they come from integrating the definitions, exactly as the linear SUVAT equations do. Starting from the definition of angular acceleration with <i>α</i> held constant:<br><i>α</i> = d<i>ω</i>/d<i>t</i> ⇒ ∫<sub><i>ω</i>₀</sub><sup><i>ω</i></sup> d<i>ω</i> = ∫<sub>0</sub><sup><i>t</i></sup> <i>α</i> d<i>t</i> ⇒ <i>ω</i> − <i>ω</i><sub>0</sub> = <i>αt</i> ⇒ <i>ω</i> = <i>ω</i><sub>0</sub> + <i>αt</i><br>Now substitute <i>ω</i> = d<i>θ</i>/d<i>t</i> and integrate a second time:<br>d<i>θ</i>/d<i>t</i> = <i>ω</i><sub>0</sub> + <i>αt</i> ⇒ ∫<sub>0</sub><sup><i>θ</i></sup> d<i>θ</i> = ∫<sub>0</sub><sup><i>t</i></sup> (<i>ω</i><sub>0</sub> + <i>αt</i>) d<i>t</i> ⇒ <i>θ</i> = <i>ω</i><sub>0</sub><i>t</i> + ½<i>αt</i><sup>2</sup><br>Finally, eliminating <i>t</i> between the two results gives the time-independent relation <i>ω</i><sup>2</sup> = <i>ω</i><sub>0</sub><sup>2</sup> + 2<i>αθ</i>. The procedure is step-for-step identical to the linear case — only the symbols change, which is the whole point of the analogy.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A wheel starts from rest and accelerates uniformly, reaching an angular speed of 50 rad/s in 10 seconds. Find (a) its angular acceleration and (b) the total angle turned in this time.',
        steps: [
          '<b>Given:</b> <i>ω</i><sub>0</sub> = 0, <i>ω</i> = 50 rad/s, <i>t</i> = 10 s.',
          '<b>(a) Angular acceleration</b> — use <i>ω</i> = <i>ω</i><sub>0</sub> + <i>αt</i>:<br><i>α</i> = (<i>ω</i> − <i>ω</i><sub>0</sub>)/<i>t</i> = (50 − 0)/10 = 5 rad/s<sup>2</sup>',
          '<b>(b) Angle turned</b> — use <i>θ</i> = <i>ω</i><sub>0</sub><i>t</i> + ½<i>αt</i><sup>2</sup>:<br><i>θ</i> = 0 + ½(5)(10)<sup>2</sup> = ½(5)(100) = 250 rad',
        ],
        ans: '<i>α</i> = 5 rad/s<sup>2</sup> and <i>θ</i> = 250 rad.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A flywheel of moment of inertia 4 kg · m<sup>2</sup> is spinning at 20 rad/s. Friction at the axle brings it to rest in 10 s. Find the magnitude of the frictional torque.',
        steps: [
          '<b>The trap:</b> Students reach for energy or angular-momentum integrals. But this is a one-line <i>τ</i> = <i>Iα</i> problem — find <i>α</i> from kinematics, multiply by <i>I</i>, done.',
          '<b>Mental shortcut.</b><br><i>α</i> = (<i>ω</i> − <i>ω</i><sub>0</sub>)/<i>t</i> = (0 − 20)/10 = −2 rad/s<sup>2</sup><br>|<i>τ</i>| = <i>I</i>|<i>α</i>| = 4 × 2 = 8 N · m',
        ],
        ans: 'The frictional torque is 8 N · m (opposing the rotation). Sanity check: the negative <i>α</i> confirms deceleration, exactly what friction should do. No calculus required. ✓',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'p11-06-fig-6.10',
        q: 'A block of mass <i>m</i> hangs from a light string wound around a pulley shaped like a uniform disc of mass <i>M</i> and radius <i>R</i>. The string does not slip. Find the downward acceleration of the block.',
        steps: [
          'This couples <b>linear dynamics</b> (the block) with <b>rotational dynamics</b> (the pulley) via a constraint.',
          '<b>Concept 1 — Newton’s law for the block</b> (taking down as positive):<br><i>mg</i> − <i>T</i> = <i>ma</i> ...(i)',
          '<b>Concept 2 — Rotational law for the pulley.</b> The tension provides the torque; the disc has <i>I</i> = ½<i>MR</i><sup>2</sup>:<br><i>τ</i> = <i>TR</i> = <i>Iα</i> = ½<i>MR</i><sup>2</sup> <i>α</i>',
          'The no-slip constraint links the two motions: <i>a</i> = <i>Rα</i> ⇒ <i>α</i> = <i>a</i>/<i>R</i>. Substituting:<br><i>TR</i> = ½<i>MR</i><sup>2</sup> · <i>a</i>/<i>R</i> ⇒ <i>T</i> = ½<i>Ma</i> ...(ii)',
          '<b>Combine (i) and (ii):</b><br><i>mg</i> − ½<i>Ma</i> = <i>ma</i> ⇒ <i>mg</i> = <i>a</i>(<i>m</i> + <i>M</i>/2)<br><i>a</i> = <i>mg</i>/(<i>m</i> + <i>M</i>/2) = 2<i>mg</i>/(2<i>m</i> + <i>M</i>)',
        ],
        ans: '<i>a</i> = 2<i>mg</i>/(2<i>m</i> + <i>M</i>). Check the limits: if <i>M</i> → 0 (massless pulley), <i>a</i> → <i>g</i> — free fall, as expected. If <i>M</i> is huge, <i>a</i> → 0 — the heavy pulley barely budges. Both make physical sense.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A uniform rod of mass <i>m</i> and length <i>L</i> is hinged at one end on a frictionless horizontal axis and held horizontally. It is released from rest. Find (a) its angular acceleration at the instant of release, and (b) its angular speed when it becomes vertical.',
        steps: [
          '<b>Part (a) — initial angular acceleration (use <i>τ</i> = <i>Iα</i>).</b> At release, gravity acts at the rod’s centre of mass, a distance <i>L</i>/2 from the hinge, producing torque <i>τ</i> = <i>mg</i> · <i>L</i>/2. The rod’s MOI about the hinged end is <i>I</i> = <i>mL</i><sup>2</sup>/3. So:<br><i>mg</i> · <i>L</i>/2 = (<i>mL</i><sup>2</sup>/3) <i>α</i> ⇒ <i>α</i> = 3<i>g</i>/(2<i>L</i>)',
          '<b>Part (b) — angular speed when vertical (use energy conservation).</b> As the rod swings down to vertical, its centre of mass falls a height <i>L</i>/2. The lost potential energy becomes rotational kinetic energy:<br><i>mg</i> · <i>L</i>/2 = ½<i>Iω</i><sup>2</sup> = ½ · (<i>mL</i><sup>2</sup>/3) · <i>ω</i><sup>2</sup><br><i>mgL</i>/2 = <i>mL</i><sup>2</sup><i>ω</i><sup>2</sup>/6 ⇒ <i>ω</i><sup>2</sup> = 3<i>g</i>/<i>L</i> ⇒ <i>ω</i> = √(3<i>g</i>/<i>L</i>)',
        ],
        ans: '(a) <i>α</i> = 3<i>g</i>/(2<i>L</i>); (b) <i>ω</i> = √(3<i>g</i>/<i>L</i>). Note: <i>τ</i> = <i>Iα</i> handles the instantaneous dynamics, while energy conservation handles the cumulative change — choosing the right tool for each part is the JEE Advanced skill being tested.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A fan rotating at 300 rpm is switched off and comes to rest after 30 revolutions under uniform deceleration. Find the angular deceleration (in rad/s<sup>2</sup>).',
            a: '<i>α</i> = (10<i>π</i>)<sup>2</sup>/(2 × 60<i>π</i>) ≈ 2.62 rad/s<sup>2</sup>',
          },
          {
            q: '[NEET] A disc rotates at constant angular speed. Point P is at distance <i>r</i> and point Q at 3<i>r</i> from the axis. Find the ratio of (i) their angular speeds and (ii) their linear speeds.',
            a: '(i) 1 : 1; (ii) 1 : 3',
          },
          {
            q: '[JEE Main] A constant torque of 20 N · m acts on a wheel of moment of inertia 5 kg · m<sup>2</sup>, initially at rest. Find its angular speed after 4 seconds and the work done by the torque in this time.',
            a: '<i>ω</i> = 16 rad/s, <i>W</i> = 640 J',
          },
          {
            q: '[JEE Main] A solid cylinder of mass <i>M</i> and radius <i>R</i> can rotate about its fixed horizontal axis. A string wound on it is pulled with constant force <i>F</i>. Find the angular acceleration of the cylinder.',
            a: '<i>α</i> = 2<i>F</i>/(<i>MR</i>)',
          },
          {
            q: '[JEE Advanced] A uniform disc of mass <i>M</i>, radius <i>R</i> rotates freely at angular speed <i>ω</i><sub>0</sub> about its central axis. A small lump of clay of mass <i>m</i> drops gently onto its rim and sticks. Find the new angular speed and the fraction of kinetic energy lost.',
            a: '<i>ω</i> = <i>Mω</i><sub>0</sub>/(<i>M</i> + 2<i>m</i>) (using conservation of angular momentum with <i>I</i><sub>disc</sub> = ½<i>MR</i><sup>2</sup>, <i>I</i><sub>clay</sub> = <i>mR</i><sup>2</sup>); fraction of KE lost = 2<i>m</i>/(<i>M</i> + 2<i>m</i>)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Two particles sit on a rotating rigid disc at different distances from the axis. Which quantity is the same for both?',
        opts: [
          { label: 'linear speed', nudge: '<b>(A)</b> linear speed <i>v</i> = <i>rω</i> differs — the outer particle moves faster.' },
          { label: 'centripetal acceleration', nudge: '<b>(B)</b> centripetal acceleration <i>ω</i><sup>2</sup><i>r</i> also depends on <i>r</i>.' },
          { label: 'angular velocity', nudge: null },
          {
            label: 'distance covered per second',
            nudge: '<b>(D)</b> “distance per second” is just linear speed in disguise, so it differs too.',
          },
        ],
        correct: 2,
        solution: 'On a rigid body every particle turns through the same angle in the same time, so <i>ω</i> is shared by all. The single shared quantity is the angular one.',
      },
      {
        t: 'mcq',
        q: 'A wheel starting from rest under constant angular acceleration completes <i>N</i> revolutions in the first 2 seconds. The number of revolutions it completes in the next 2 seconds is:',
        opts: [
          {
            label: '<i>N</i>',
            nudge: '<b>(A)</b> wrongly assumes equal revolutions per equal time (true only at constant speed, not constant acceleration).',
          },
          { label: '2<i>N</i>', nudge: '<b>(B)</b> and <b>(D)</b> misapply the <i>t</i><sup>2</sup> scaling.' },
          { label: '3<i>N</i>', nudge: null },
          { label: '4<i>N</i>', nudge: '<b>(B)</b> and <b>(D)</b> misapply the <i>t</i><sup>2</sup> scaling.' },
        ],
        correct: 2,
        solution: 'With <i>ω</i><sub>0</sub> = 0 and constant <i>α</i>, the angle scales as <i>t</i><sup>2</sup>. In 4 s the total is proportional to 4<sup>2</sup> = 16 units; in the first 2 s it’s 2<sup>2</sup> = 4 units. So the next 2 s account for 16 − 4 = 12 units — three times the first 4. Hence 3<i>N</i>. This “first vs next interval” trap appears constantly.',
      },
      {
        t: 'mcq',
        q: 'The rotational analog of mass is:',
        opts: [
          { label: 'torque', nudge: '<b>(A)</b> torque is the analog of force — a real analog, but of a different linear quantity.' },
          { label: 'angular momentum', nudge: '<b>(B)</b> angular momentum is the analog of linear momentum — a real analog, but of a different linear quantity.' },
          { label: 'moment of inertia', nudge: null },
          { label: 'angular velocity', nudge: '<b>(D)</b> angular velocity is the analog of velocity — a real analog, but of a different linear quantity.' },
        ],
        correct: 2,
        solution: 'Moment of inertia measures resistance to angular acceleration, exactly as mass measures resistance to linear acceleration — and it sits in the same slot of <i>τ</i> = <i>Iα</i> that <i>m</i> occupies in <i>F</i> = <i>ma</i>.',
      },
      {
        t: 'mcq',
        q: 'A torque does work on a freely rotating body. The work done equals:',
        opts: [
          {
            label: 'the change in its angular momentum',
            nudge: '<b>(A)</b> torque × time gives the change in angular momentum (angular impulse), not work.',
          },
          { label: 'the change in its rotational kinetic energy', nudge: null },
          { label: 'the change in its moment of inertia', nudge: '<b>(C)</b> moment of inertia is fixed for a rigid body.' },
          {
            label: 'zero, since rotation involves no displacement',
            nudge: '<b>(D)</b> is the classic misconception — there is angular displacement <i>θ</i>, and <i>W</i> = <i>τθ</i> ≠ 0.',
          },
        ],
        correct: 1,
        solution: 'By the work–energy theorem for rotation, <i>W</i> = Δ<i>K</i><sub>rot</sub> = ½<i>Iω</i><sup>2</sup> − ½<i>Iω</i><sub>0</sub><sup>2</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating constant-<i>α</i> equations as always valid.</b> They apply only when angular acceleration is constant. If the torque varies with time or angle, you must integrate <i>α</i> = d<i>ω</i>/d<i>t</i> instead. Check whether <i>α</i> is constant before reaching for the SUVAT analogs.',
          '<b>Forgetting the constraint <i>a</i> = <i>Rα</i> in connected-body problems.</b> In pulley-and-block setups, the linear acceleration of the string equals <i>Rα</i> of the pulley. Omit this link and your equations won’t close.',
          '<b>Mixing degrees and radians.</b> Every formula here (<i>s</i> = <i>rθ</i>, <i>v</i> = <i>rω</i>, etc.) assumes radians. Convert rpm and degrees first: 1 rev = 2<i>π</i> rad, and <i>ω</i>(rad/s) = 2<i>πN</i>/60 for <i>N</i> rpm.',
          '<b>Confusing which particle’s speed you want.</b> Angular quantities belong to the whole body; linear quantities depend on <i>r</i>. Always ask “which point, and how far from the axis?”',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Solve every rotational problem by translating it to its linear twin first. “Wheel from rest, given <i>α</i>, find <i>θ</i>” is identically “object from rest, given <i>a</i>, find <i>s</i>.” Write the linear version you already trust, then swap symbols using the analogy table. For connected bodies, the energy method (½<i>Iω</i><sup>2</sup> + ½<i>mv</i><sup>2</sup> = lost PE) is often faster than force-and-torque equations when you only need final speeds.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definitions', note: '<i>ω</i> = d<i>θ</i>/d<i>t</i>, <i>α</i> = d<i>ω</i>/d<i>t</i>.' },
          {
            f: 'Constant-<i>α</i> kinematics',
            note: '<i>ω</i> = <i>ω</i><sub>0</sub> + <i>αt</i>, <i>θ</i> = <i>ω</i><sub>0</sub><i>t</i> + ½<i>αt</i><sup>2</sup>, <i>ω</i><sup>2</sup> = <i>ω</i><sub>0</sub><sup>2</sup> + 2<i>αθ</i>.',
          },
          { f: 'Linear bridge', note: '<i>v</i> = <i>rω</i>, <i>a</i><sub><i>t</i></sub> = <i>rα</i>, <i>a</i><sub><i>c</i></sub> = <i>ω</i><sup>2</sup><i>r</i>.' },
          { f: 'Dynamics', note: '<i>τ</i> = <i>Iα</i> (the rotational <i>F</i> = <i>ma</i>).' },
          { f: 'Energy & power', note: '<i>K</i><sub>rot</sub> = ½<i>Iω</i><sup>2</sup>, <i>W</i> = <i>τθ</i>, <i>P</i> = <i>τω</i>.' },
          { f: 'Connected bodies', note: 'link with the constraint <i>a</i> = <i>Rα</i>.' },
        ],
        aids: [
          '<b>Memory aid — “Same letters, new alphabet”:</b> rotation reuses every linear law with <i>s</i> → <i>θ</i>, <i>v</i> → <i>ω</i>, <i>a</i> → <i>α</i>, <i>m</i> → <i>I</i>, <i>F</i> → <i>τ</i>. Learn the swap, not new physics.',
          '<b>Memory aid — “Shared spin, personal speed”:</b> every point on a rigid body shares <i>ω</i> and <i>α</i>, but linear <i>v</i> = <i>rω</i> grows with distance from the axis.',
        ],
      },
    ],
  },
];
