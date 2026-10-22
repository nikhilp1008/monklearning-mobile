import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 01 to 03: pp. 364–385 of the Class 11 Physics Master
 * Reference, word for word: the Chapter Foundations (pp. 364–367; the
 * chapter’s title and contents on p. 364 are not copied), Center of Mass
 * (pp. 368–378) and Vector Product of Two Vectors (pp. 379–385). The
 * Foundations have no "Section N" headings, so they are split at their own
 * headings; the other two at their Sections 1 to 8. Figure 6.1 (p. 365, drawn
 * on p. 366) and Figure 6.2 (p. 371, drawn on p. 372) are redrawn in
 * lib/diagrams/physics-11-06.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 364–367 ─────────────────────────
  {
    n: '01',
    title: 'Chapter Foundations: Rigid Bodies & Types of Motion',
    kalam: 'Every motion of a rigid body is one of three kinds — or a blend of the first two.',
    blocks: [
      { t: 'part', title: 'What is a Rigid Body?' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> These foundations are rarely asked as standalone questions, but every single problem in this chapter silently assumes them. CBSE Boards may include a 1-mark definition of a rigid body or a type of motion. Getting these ideas crisp now makes every later subtopic — centre of mass, torque, rolling — feel obvious instead of mysterious.',
      },
      {
        t: 'p',
        html: 'Until this chapter, you treated every object as a single point particle — a block, a ball, a car, all shrunk to a dot carrying mass. That worked when you only cared about where something went. But it cannot explain spinning. A point has no size, so it cannot rotate about itself, wobble, or roll. To study rotation we need objects with extent.<br><br>A <b>rigid body</b> is an idealised object in which the distance between any two particles stays exactly the same, no matter what forces act on it. It never stretches, compresses, or bends. Real objects deform a little, but for a cricket bat, a flywheel, a spanner, or a planet, the deformation is so tiny that treating them as perfectly rigid gives excellent predictions.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the body as a swarm of particles welded together by unbreakable, unstretchable rods. Push or twist it however you like — the swarm moves and turns as one, with every internal distance frozen. That “frozen internal geometry” is the single defining property of rigidity, and it’s what lets us talk about the rotation of the body rather than each particle doing its own thing.',
      },

      { t: 'part', title: 'The Three Types of Motion' },
      {
        t: 'p',
        html: 'Every motion of a rigid body is one of three kinds — or a blend of the first two.<br><br><b>1. Pure translation.</b> Every particle of the body moves with the same velocity at every instant, tracing parallel paths. A book slid flat across a table, or a suitcase carried straight forward, is translating. There is no turning — a line drawn on the body keeps pointing the same way. For pure translation, the whole body behaves exactly like a single particle located at its centre of mass, which is why everything you learned about the motion of a particle in the earlier chapters still applies.<br><br><b>2. Pure rotation about a fixed axis.</b> Every particle moves in a circle, and all those circles are centred on one fixed line called the <b>axis of rotation</b>. A ceiling fan, a merry-go-round, the hands of a clock, and a spinning potter’s wheel are rotating about a fixed axis. Here, particles farther from the axis move faster (we’ll quantify this as <i>v</i> = <i>rω</i>), but they all share the same angular speed.<br><br><b>3. General (combined) motion.</b> Most real motion mixes the two: the body translates and rotates at the same time. A rolling wheel is the headline example — its centre glides forward (translation) while the wheel spins about that centre (rotation). A thrown spinning bat, a tumbling gymnast, and a planet orbiting while rotating are all general motion. The master strategy of this entire chapter is to split such motion into “translation of the centre of mass” plus “rotation about the centre of mass,” handle each with its own set of laws, then add the results.',
      },
      { t: 'fig', id: 'p11-06-fig-6.1' },

      { t: 'part', title: 'A Roadmap to This Chapter' },
      {
        t: 'p',
        html: 'Here is how the pieces fit together, so you always know why you’re learning each subtopic:<br>• <b>Centre of mass</b> locates the one special point that represents the whole body’s translation.<br>• <b>Vector product</b> gives us the mathematical tool to describe turning effects in three dimensions.<br>• <b>Torque and angular momentum</b> are the rotational versions of force and momentum — what causes and what carries rotation.<br>• <b>Equilibrium</b> asks when a rigid body neither moves nor turns — the physics of balance, levers, and structures.<br>• <b>Moment of inertia</b> measures how hard a body is to spin, depending on how its mass is spread out.<br>• <b>Rotational kinematics and dynamics</b> mirror linear motion, with <i>θ</i>, <i>ω</i>, <i>α</i> replacing <i>s</i>, <i>v</i>, <i>a</i> and <i>τ</i> = <i>Iα</i> replacing <i>F</i> = <i>ma</i>.<br>• <b>Rolling motion</b> ties everything together as the most common general motion of all.',
      },
      {
        t: 'p',
        html: 'Keep one master idea in your pocket as you read: <b>rotation is a faithful mirror of the straight-line physics you already know.</b> Almost every formula ahead has a linear twin. Learn the correspondence, and this chapter becomes far smaller than it looks.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Rigid body', note: 'distances between all particles are fixed; it does not deform.' },
          { f: 'Pure translation', note: 'all particles share the same velocity; body acts like a point at its CoM.' },
          { f: 'Pure rotation', note: 'all particles circle a fixed axis with the same angular speed; <i>v</i> = <i>rω</i>.' },
          { f: 'General motion', note: 'translation of CoM + rotation about CoM (e.g., rolling).' },
          { f: 'Master idea', note: 'split motion into translation + rotation; rotation mirrors linear motion.' },
        ],
        aids: [],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 368–378 ─────────────────────────
  {
    n: '02',
    title: 'Center of Mass',
    kalam: 'The center of mass is the mass-weighted average position of all the matter in a system.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Center of Mass is a foundation stone for this entire chapter and for collisions later. JEE Main asks 1–2 direct questions almost every year (composite bodies, mass removal). NEET keeps it light — usually one conceptual question. JEE Advanced loves continuous bodies and integration. CBSE Boards expects the “motion of centre of mass” derivation and clean definitions.',
      },
      {
        t: 'p',
        html: 'Imagine you toss a cricket bat spinning across the room. Watch it closely — it tumbles in a way that looks completely chaotic. The handle, the toe, the edges, every part traces its own complicated, looping path. If a friend asked you to predict exactly where the handle will be after half a second, you’d struggle.<br><br>But here’s the beautiful part. Hidden inside that tumbling bat there is <b>one special point</b> that ignores all the chaos and quietly traces a clean, simple parabola — exactly the path a single thrown stone would follow. That magic point is the <b>center of mass (CoM)</b>.<br><br>So what is it, really? The center of mass is the <b>mass-weighted average position</b> of all the matter in a system. The phrase “mass-weighted” is the whole idea. If you have a light particle and a heavy particle, the balance point doesn’t sit halfway between them — it leans toward the heavy one, because the heavy particle “pulls the average” toward itself. It’s exactly like a see-saw in a park: a heavy uncle and a small child can balance only if the uncle sits much closer to the pivot.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture balancing a steel thali (plate) on the tip of one finger. There is exactly one spot where it sits perfectly without tipping. That spot is the center of mass. Slide your finger even slightly away from it and the thali topples, because gravity now produces a turning effect about your fingertip. The CoM is the point where the whole object behaves as if all its mass were squeezed into that single location.',
      },
      {
        t: 'p',
        html: 'Why do we even bother inventing this point? Because a real object is a system of particles — millions of atoms, each on its own path. Tracking all of them is hopeless. The center of mass is our shortcut: it lets us replace the entire messy system with a single equivalent particle of mass <i>M</i> sitting at one point. A loaded goods train rounding a bend is thousands of tonnes of wagons, couplings, and cargo, yet for momentum and overall motion we can treat the whole train as one heavy dot moving along the track. That is the power the CoM hands us — it collapses complexity into a single, well-behaved point.<br><br>Here’s another everyday picture. Think of a busy vegetable mandi (market) and imagine asking, “where is the average shopper standing right now?” If most shoppers crowd around the potato stall, that average point sits near the potatoes — even if a few people wander near the exit. The CoM does exactly this for mass: it sits wherever the mass is most concentrated, and lighter outlying bits barely tug it.<br><br>This gives us the cleanest definition: <b>the center of mass is the point that moves as though (1) the entire mass of the system were concentrated there, and (2) every external force acted there.</b> This is why coaches studying a long-jumper, a Bharatanatyam dancer mid-leap, or a diver doing somersaults always start by tracking the center of mass — its motion is simple even when the limbs are flailing.',
      },
      {
        t: 'p',
        html: 'A few things that surprise students at first:<br>• <b>Mass need not exist at the center of mass.</b> The CoM of a ring or a bangle sits at its empty geometric center — there’s literally no metal there. Same for a hollow box: its CoM floats in the empty air inside.<br>• <b>The CoM is a property of the body, not of your coordinate system.</b> Shift your origin, rotate your axes — the physical balance point stays welded to the same spot on the object.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>1. <b>Center of mass vs. center of gravity.</b> These two coincide only when gravity <i>g</i> is the same at every point of the body. For everyday objects on Earth this is essentially perfect. But for an enormous object — say a mountain or a kilometre-tall tower — <i>g</i> varies slightly with height, and the center of gravity drifts a tiny bit below the center of mass.<br>2. <b>The simple formula assumes you can locate the CoM of each piece.</b> For symmetric, uniform bodies the CoM sits at the geometric center. The moment the density becomes non-uniform, you must integrate.<br>3. <b>CoM motion is governed only by external forces.</b> Internal forces — however violent — can never move the center of mass on their own.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'For a system of discrete particles',
        main: '<i>r⃗</i><sub>cm</sub> = (∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>m</i><sub><i>i</i></sub><i>r⃗</i><sub><i>i</i></sub>)/(∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>m</i><sub><i>i</i></sub>) = (1/<i>M</i>) ∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>m</i><sub><i>i</i></sub><i>r⃗</i><sub><i>i</i></sub><br>In component form: <i>x</i><sub>cm</sub> = ∑ <i>m</i><sub><i>i</i></sub><i>x</i><sub><i>i</i></sub>/<i>M</i>, <i>y</i><sub>cm</sub> = ∑ <i>m</i><sub><i>i</i></sub><i>y</i><sub><i>i</i></sub>/<i>M</i>, <i>z</i><sub>cm</sub> = ∑ <i>m</i><sub><i>i</i></sub><i>z</i><sub><i>i</i></sub>/<i>M</i>',
        legend: [],
        note: '(masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, … , <i>m</i><sub><i>n</i></sub> at positions <i>r⃗</i><sub>1</sub>, … , <i>r⃗</i><sub><i>n</i></sub>)',
      },
      {
        t: 'formula',
        kicker: 'For two particles',
        main: '<i>x</i><sub>cm</sub> = (<i>m</i><sub>1</sub><i>x</i><sub>1</sub> + <i>m</i><sub>2</sub><i>x</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
        legend: [],
        note: '(the case you’ll use most for quick checks)',
      },
      {
        t: 'formula',
        kicker: 'For a continuous body',
        main: '<i>r⃗</i><sub>cm</sub> = (1/<i>M</i>) ∫ <i>r⃗</i> d<i>m</i>',
        legend: [],
        note: '(replace summation with integration)',
      },
      {
        t: 'formula',
        kicker: 'Velocity and acceleration of the CoM',
        main: '<i>v⃗</i><sub>cm</sub> = (1/<i>M</i>) ∑ <i>m</i><sub><i>i</i></sub><i>v⃗</i><sub><i>i</i></sub>, <i>a⃗</i><sub>cm</sub> = (1/<i>M</i>) ∑ <i>m</i><sub><i>i</i></sub><i>a⃗</i><sub><i>i</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Newton’s law for the system',
        main: '<i>F⃗</i><sub>ext</sub> = <i>M</i> <i>a⃗</i><sub>cm</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Fundamental property',
        main: '∑ <i>m</i><sub><i>i</i></sub><i>r⃗</i><sub><i>i</i></sub> = 0⃗ (position vectors measured from the CoM)',
        legend: [],
        note: '(taking the origin at the CoM)',
      },
      {
        t: 'p',
        html: '<b>Notation:</b> <i>M</i> = total mass, <i>r⃗</i><sub><i>i</i></sub> = position of <i>i</i>-th particle, d<i>m</i> = mass element, <i>F⃗</i><sub>ext</sub> = net external force.',
      },
      {
        t: 'table',
        title: 'Symbols, SI units, and dimensional formulas',
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Position of CoM', '<i>r⃗</i><sub>cm</sub>', 'm', '[M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]'],
          ['Linear mass density', '<i>λ</i>', 'kg m<sup>−1</sup>', '[M<sup>1</sup> L<sup>−1</sup> T<sup>0</sup>]'],
          ['Surface mass density', '<i>σ</i>', 'kg m<sup>−2</sup>', '[M<sup>1</sup> L<sup>−2</sup> T<sup>0</sup>]'],
          ['Volume mass density', '<i>ρ</i>', 'kg m<sup>−3</sup>', '[M<sup>1</sup> L<sup>−3</sup> T<sup>0</sup>]'],
        ],
      },

      { t: 'part', title: 'CBSE board derivation — Motion of the centre of mass' },
      {
        t: 'p',
        html: 'This is the classic derivation CBSE asks for, and it reveals why the CoM is special. We want to prove that the total external force on a system equals total mass times the acceleration of its center of mass.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Start from the definition.</b> For <i>n</i> particles, the position of the center of mass is defined by:<br><i>M</i> <i>r⃗</i><sub>cm</sub> = <i>m</i><sub>1</sub><i>r⃗</i><sub>1</sub> + <i>m</i><sub>2</sub><i>r⃗</i><sub>2</sub> + ⋯ + <i>m</i><sub><i>n</i></sub><i>r⃗</i><sub><i>n</i></sub><br>We’ve multiplied through by <i>M</i> to clear the fraction — this keeps the algebra clean.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Differentiate once with respect to time.</b> Since the masses are constant, differentiation passes straight through them:<br><i>M</i> <i>v⃗</i><sub>cm</sub> = <i>m</i><sub>1</sub><i>v⃗</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v⃗</i><sub>2</sub> + ⋯ + <i>m</i><sub><i>n</i></sub><i>v⃗</i><sub><i>n</i></sub><br>Physical meaning: the total momentum of the system equals <i>M</i><i>v⃗</i><sub>cm</sub> — as if all the mass marched along with the CoM. This single line is the bridge to the law of conservation of linear momentum.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Differentiate again.</b><br><i>M</i> <i>a⃗</i><sub>cm</sub> = <i>m</i><sub>1</sub><i>a⃗</i><sub>1</sub> + <i>m</i><sub>2</sub><i>a⃗</i><sub>2</sub> + ⋯ + <i>m</i><sub><i>n</i></sub><i>a⃗</i><sub><i>n</i></sub>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Replace each <i>m</i><sub><i>i</i></sub><i>a⃗</i><sub><i>i</i></sub> using Newton’s second law.</b> The force on each particle has two parts: external forces (gravity, applied pushes, normal reactions) and internal forces (the mutual pulls and pushes between particles of the system). So:<br><i>M</i> <i>a⃗</i><sub>cm</sub> = ∑<sub><i>i</i></sub> <i>F⃗</i><sub><i>i</i></sub><sup>ext</sup> + ∑<sub><i>i</i></sub> <i>F⃗</i><sub><i>i</i></sub><sup>int</sup>',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Kill the internal forces using Newton’s third law.</b> Here is the heart of the proof. For every internal force that particle A exerts on particle B, particle B exerts an equal and opposite force back on A. These pairs cancel exactly when you sum over the whole system:<br>∑<sub><i>i</i></sub> <i>F⃗</i><sub><i>i</i></sub><sup>int</sup> = 0⃗<br>This is the reason the step works — not algebra, but the third law guaranteeing internal forces always come in cancelling twins.',
      },
      {
        t: 'p',
        html: '<b>Step 6 — Result.</b><br><i>F⃗</i><sub>ext</sub> = <i>M</i> <i>a⃗</i><sub>cm</sub>',
      },
      {
        t: 'p',
        html: '<b>The big takeaway:</b> internal forces — an exploding firecracker, a sprinter’s muscles, two skaters pushing apart — can never shift the center of mass by themselves. When a bomb at rest explodes mid-air, the fragments fly everywhere, but the center of mass keeps following the same parabola the unexploded bomb would have followed.<br><br><b>An immediate and powerful corollary.</b> If the net external force is zero, then <i>M</i><i>a⃗</i><sub>cm</sub> = 0⃗, which means <i>v⃗</i><sub>cm</sub> is constant — the total momentum <i>M</i><i>v⃗</i><sub>cm</sub> is conserved. This is the <b>law of conservation of linear momentum</b>, and you can see it falls straight out of the CoM equation. So every recoil, collision, and explosion problem you’ll meet later in this chapter is really a center-of-mass statement in disguise. Master the CoM now and half of momentum conservation comes free.',
      },
      {
        t: 'p',
        html: '<b>Key Procedure — CoM of a Continuous Body by Integration</b><br>For a uniform body where symmetry doesn’t hand you the answer, follow these steps. Let’s locate the CoM of a <b>uniform semicircular wire</b> of radius <i>R</i>.<br><br><b>Step 1 — Set up coordinates and an element.</b> Place the center at the origin, flat side along the x-axis. By symmetry, <i>x</i><sub>cm</sub> = 0; we only need <i>y</i><sub>cm</sub>. Take an element subtending angle d<i>θ</i> at angle <i>θ</i>.',
      },
      { t: 'fig', id: 'p11-06-fig-6.2' },
      {
        t: 'p',
        html: '<b>Step 2 — Express the mass element.</b> Linear mass density <i>λ</i> = <i>M</i>/(π<i>R</i>). Arc length of the element is <i>R</i> d<i>θ</i>, so d<i>m</i> = <i>λR</i> d<i>θ</i> = (<i>M</i>/π) d<i>θ</i>.<br><br><b>Step 3 — Write the coordinate of the element.</b> The element sits at height <i>y</i> = <i>R</i> sin <i>θ</i>.<br><br><b>Step 4 — Integrate over <i>θ</i> from 0 to π.</b><br><i>y</i><sub>cm</sub> = (1/<i>M</i>) ∫<sub>0</sub><sup>π</sup> (<i>R</i> sin <i>θ</i>)((<i>M</i>/π) d<i>θ</i>) = (<i>R</i>/π) ∫<sub>0</sub><sup>π</sup> sin <i>θ</i> d<i>θ</i> = (<i>R</i>/π)[−cos <i>θ</i>]<sub>0</sub><sup>π</sup> = 2<i>R</i>/π<br>So the CoM of a semicircular wire lies at (0, 2<i>R</i>/π) — about 0.64<i>R</i> above the center, in the empty space where no wire exists. A perfect illustration that mass need not sit at the CoM.',
      },
      {
        t: 'p',
        html: '<b>A note on choosing your mass element.</b> The whole game in continuous-body problems is writing d<i>m</i> correctly. Match the density to the geometry:<br>• A <b>1D body</b> (rod, wire): d<i>m</i> = <i>λ</i> d<i>x</i> or <i>λ</i>(<i>R</i> d<i>θ</i>) for an arc.<br>• A <b>2D body</b> (plate, disc, lamina): d<i>m</i> = <i>σ</i> d<i>A</i>, where d<i>A</i> is a strip or ring of area.<br>• A <b>3D body</b> (sphere, cone, cylinder): d<i>m</i> = <i>ρ</i> d<i>V</i>, where d<i>V</i> is a thin slice or shell.<br><br>Always pick the element so that every point of it shares the same coordinate you’re averaging — otherwise the integral lies to you. For the cone in the practice set, the natural element is a thin disc-slice perpendicular to the axis, because every point of that slice sits at the same height.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Three point masses of 2 kg, 3 kg, and 5 kg are placed at the points (0, 0), (4, 0), and (0, 3) metres respectively. Find the coordinates of the center of mass.',
        steps: [
          '<b>Given:</b> <i>m</i><sub>1</sub> = 2 kg at (0, 0); <i>m</i><sub>2</sub> = 3 kg at (4, 0); <i>m</i><sub>3</sub> = 5 kg at (0, 3). Total mass <i>M</i> = 10 kg.',
          '<b>Formula:</b><br><i>x</i><sub>cm</sub> = ∑ <i>m</i><sub><i>i</i></sub><i>x</i><sub><i>i</i></sub>/<i>M</i>, <i>y</i><sub>cm</sub> = ∑ <i>m</i><sub><i>i</i></sub><i>y</i><sub><i>i</i></sub>/<i>M</i>',
          '<b>Substitution:</b><br><i>x</i><sub>cm</sub> = ((2)(0) + (3)(4) + (5)(0))/10 = 12/10 = 1.2 m<br><i>y</i><sub>cm</sub> = ((2)(0) + (3)(0) + (5)(3))/10 = 15/10 = 1.5 m',
        ],
        ans: 'The center of mass is at (1.2 m, 1.5 m).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A man of mass 60 kg stands at one end of a 40 kg boat of length 5 m, floating at rest on still water. He walks to the other end. Assuming negligible water resistance, how far does the boat move?',
        steps: [
          '<b>The trap:</b> Students instinctively calculate the man’s displacement as 5 m and stop. But there is <b>no external horizontal force</b> on the man-boat system (water resistance is negligible), so the <b>center of mass cannot move horizontally</b>. The boat must slide backward to compensate.',
          '<b>Mental shortcut — use the “mass-ratio” rule directly.</b> When the man walks a length <i>L</i> relative to the boat, the boat shifts by:<br><i>d</i><sub>boat</sub> = <i>m</i><sub>man</sub>/(<i>m</i><sub>man</sub> + <i>m</i><sub>boat</sub>) × <i>L</i>',
          '<b>Plug in:</b><br><i>d</i><sub>boat</sub> = 60/(60 + 40) × 5 = 60/100 × 5 = 3 m',
        ],
        ans: 'The boat moves <b>3 m</b> in the opposite direction. (Quick sanity check: the heavier mover → bigger boat recoil. Here the man is heavier than the boat, so the boat moves more than half the length. ✓)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A uniform circular disc of radius <i>R</i> has a circular hole of radius <i>R</i>/2 cut from it. The center of the hole is at a distance <i>R</i>/2 from the center of the disc. (a) Find the center of mass of the remaining portion. (b) Where must a point mass equal to the mass of the removed disc be placed so that the CoM of the whole arrangement returns to the original center?',
        steps: [
          '<b>Concept 1 — Negative mass method.</b> Treat the remaining body as (full disc) + (a negative hole). For a uniform disc, mass ∝ area ∝ radius<sup>2</sup>.<br>• Full disc: mass ∝ <i>R</i><sup>2</sup>, located at <i>x</i> = 0.<br>• Hole (negative): mass ∝ (<i>R</i>/2)<sup>2</sup> = <i>R</i><sup>2</sup>/4, located at <i>x</i> = <i>R</i>/2.',
          '<i>x</i><sub>cm</sub> = ((<i>R</i><sup>2</sup>)(0) − (<i>R</i><sup>2</sup>/4)(<i>R</i>/2))/(<i>R</i><sup>2</sup> − <i>R</i><sup>2</sup>/4) = (−<i>R</i><sup>3</sup>/8)/(3<i>R</i><sup>2</sup>/4) = −<i>R</i><sup>3</sup>/8 × 4/(3<i>R</i><sup>2</sup>) = −<i>R</i>/6<br>So the CoM of the remaining portion is at <i>x</i> = −<i>R</i>/6 (i.e., <i>R</i>/6 from the center, away from the hole).',
          '<b>Concept 2 — Restoring the CoM with an added mass.</b> Let the removed disc have mass <i>m</i> (so the remaining portion has mass 3<i>m</i>, since hole is ¼ of the full 4<i>m</i>). We place a point mass <i>m</i> at position <i>x</i><sub>0</sub> so the combined CoM sits at the origin:<br>((3<i>m</i>)(−<i>R</i>/6) + (<i>m</i>)(<i>x</i><sub>0</sub>))/(3<i>m</i> + <i>m</i>) = 0 ⇒ −<i>R</i>/2 + <i>x</i><sub>0</sub> = 0 ⇒ <i>x</i><sub>0</sub> = +<i>R</i>/2',
        ],
        ans: '(a) CoM of remaining portion at −<i>R</i>/6. (b) The point mass must be placed at <i>x</i> = +<i>R</i>/2 — exactly at the center of the hole that was removed (which makes perfect physical sense: you’re “filling back” the missing mass at its original location).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A thin rod of length <i>L</i> lies along the <i>x</i>-axis from <i>x</i> = 0 to <i>x</i> = <i>L</i>. Its linear mass density varies as <i>λ</i>(<i>x</i>) = <i>λ</i><sub>0</sub>(1 + <i>x</i>/<i>L</i>). Locate its center of mass.',
        steps: [
          '<b>Step 1 — Mass element.</b> d<i>m</i> = <i>λ</i> d<i>x</i> = <i>λ</i><sub>0</sub>(1 + <i>x</i>/<i>L</i>) d<i>x</i>.',
          '<b>Step 2 — Total mass.</b><br><i>M</i> = ∫<sub>0</sub><sup><i>L</i></sup> <i>λ</i><sub>0</sub>(1 + <i>x</i>/<i>L</i>) d<i>x</i> = <i>λ</i><sub>0</sub>[<i>x</i> + <i>x</i><sup>2</sup>/(2<i>L</i>)]<sub>0</sub><sup><i>L</i></sup> = <i>λ</i><sub>0</sub>(<i>L</i> + <i>L</i>/2) = 3<i>λ</i><sub>0</sub><i>L</i>/2',
          '<b>Step 3 — First moment of mass.</b><br>∫<sub>0</sub><sup><i>L</i></sup> <i>x</i> d<i>m</i> = ∫<sub>0</sub><sup><i>L</i></sup> <i>λ</i><sub>0</sub>(<i>x</i> + <i>x</i><sup>2</sup>/<i>L</i>) d<i>x</i> = <i>λ</i><sub>0</sub>[<i>x</i><sup>2</sup>/2 + <i>x</i><sup>3</sup>/(3<i>L</i>)]<sub>0</sub><sup><i>L</i></sup> = <i>λ</i><sub>0</sub>(<i>L</i><sup>2</sup>/2 + <i>L</i><sup>2</sup>/3) = 5<i>λ</i><sub>0</sub><i>L</i><sup>2</sup>/6',
          '<b>Step 4 — Divide.</b><br><i>x</i><sub>cm</sub> = (1/<i>M</i>) ∫<sub>0</sub><sup><i>L</i></sup> <i>x</i> d<i>m</i> = (5<i>λ</i><sub>0</sub><i>L</i><sup>2</sup>/6)/(3<i>λ</i><sub>0</sub><i>L</i>/2) = 5<i>L</i><sup>2</sup>/6 × 2/(3<i>L</i>) = 5<i>L</i>/9',
          '<b>Reasoning check:</b> A uniform rod would have its CoM at 0.5<i>L</i>. Here density increases toward <i>x</i> = <i>L</i>, so the CoM shifts toward the heavier end — and indeed 5<i>L</i>/9 > <i>L</i>/2. The physics agrees with the algebra. ✓',
        ],
        ans: '<i>x</i><sub>cm</sub> = 5<i>L</i>/9 ≈ 0.556 <i>L</i>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two particles of mass 4 kg and 6 kg are separated by 10 m along a straight line. Find the distance of the center of mass from the 4 kg particle.',
            a: '6 m from the 4 kg mass',
          },
          {
            q: '[NEET] Four identical particles of mass <i>m</i> each are placed at the corners of a square of side <i>a</i>. One particle is removed. How far does the center of mass shift from the center of the square?',
            a: '<i>a</i>/(3√2) (toward the diagonally opposite corner)',
          },
          {
            q: '[JEE Main] From a uniform square plate of side 2<i>a</i>, a smaller square of side <i>a</i> is removed from one corner. Find the distance of the new center of mass from the center of the original plate.',
            a: '<i>a</i>/(3√2) from the center',
          },
          {
            q: '[JEE Main] A shell flying horizontally at 20 m s<sup>−1</sup> explodes into two equal fragments. One fragment momentarily comes to rest. Find the speed of the other fragment immediately after the explosion.',
            a: '40 m s<sup>−1</sup>',
          },
          {
            q: '[JEE Advanced] A uniform solid cone of height <i>h</i> has its apex at the origin and axis along the y-axis. Using integration, show that its center of mass lies at <i>y</i><sub>cm</sub> = 3<i>h</i>/4 from the apex.',
            a: '<i>y</i><sub>cm</sub> = 3<i>h</i>/4 (derivation required)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A bomb at rest at the origin explodes into several fragments due to internal forces only. Which statement is always true (ignore gravity)?',
        opts: [
          { label: 'The fragments’ total momentum increases', nudge: '(A) ignores momentum conservation — total momentum stays zero.' },
          { label: 'The center of mass remains at the origin', nudge: null },
          {
            label: 'The center of mass moves in the direction of the heaviest fragment',
            nudge: '(C) wrongly imagines the heaviest fragment “winning”; fragments always fly so their momenta cancel.',
          },
          {
            label: 'The center of mass accelerates outward',
            nudge: '(D) is the most tempting — students see fragments shooting outward and assume the CoM does too, forgetting internal forces can’t move it.',
          },
        ],
        correct: 1,
        solution: 'With only internal forces, <i>F⃗</i><sub>ext</sub> = 0⃗, so <i>a⃗</i><sub>cm</sub> = 0⃗. Since it started at rest at the origin, the CoM stays there forever.',
      },
      {
        t: 'mcq',
        q: 'The center of mass of a uniform semicircular disc of radius <i>R</i> lies at a distance from its center equal to:',
        opts: [
          {
            label: '2<i>R</i>/π',
            nudge: '(A) is the answer for a semicircular wire/arc, not a filled disc — the classic mix-up the examiner is hunting for.',
          },
          { label: '4<i>R</i>/3π', nudge: null },
          { label: '<i>R</i>/2', nudge: '(C) is a careless guess of “halfway.”' },
          { label: '4<i>R</i>/π', nudge: '(D) drops the factor of 3 from a botched integration.' },
        ],
        correct: 1,
        solution: 'For a semicircular disc (a filled lamina), <i>y</i><sub>cm</sub> = 4<i>R</i>/3π.',
      },
      {
        t: 'mcq',
        q: 'A man stands at the rear of a frictionless trolley. He walks forward and stops. Compared to the ground, the trolley:',
        opts: [
          { label: 'stays exactly where it was', nudge: '(A) forgets that the CoM being fixed forces the trolley to move, not stay.' },
          { label: 'moves forward', nudge: '(B) confuses the man’s motion with the trolley’s.' },
          { label: 'moves backward', nudge: null },
          {
            label: 'moves backward, then returns to its start',
            nudge: '(D) wrongly assumes the trolley “springs back” — once both stop, displacements are permanent.',
          },
        ],
        correct: 2,
        solution: 'No external horizontal force ⇒ the CoM is fixed in the ground frame. For the man to move forward, the trolley must move backward to keep the CoM put.',
      },
      {
        t: 'mcq',
        q: 'Two particles of masses <i>m</i> and 3<i>m</i> move such that their CoM remains stationary. If the velocity of mass <i>m</i> is <i>v⃗</i>, the velocity of mass 3<i>m</i> is:',
        opts: [
          { label: '−<i>v⃗</i>', nudge: '(A) assumes equal-and-opposite velocities, ignoring the mass weighting.' },
          { label: '−<i>v⃗</i>/3', nudge: null },
          { label: '−3<i>v⃗</i>', nudge: '(C) inverts the ratio (multiplies instead of divides).' },
          {
            label: '<i>v⃗</i>/3',
            nudge: '(D) gets the magnitude right but forgets the negative sign — the velocities must be oppositely directed.',
          },
        ],
        correct: 1,
        solution: 'A stationary CoM means total momentum is zero: <i>mv⃗</i> + 3<i>mv⃗</i><sub>2</sub> = 0⃗ ⇒ <i>v⃗</i><sub>2</sub> = −<i>v⃗</i>/3.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating the CoM as a simple midpoint.</b> The CoM is mass-weighted, not a geometric average. Halfway is correct only for equal masses. Always lean the answer toward the heavier mass and sanity-check.',
          '<b>Confusing the semicircular wire with the semicircular disc.</b> Wire (arc) → 2<i>R</i>/π; filled disc → 4<i>R</i>/3π. Examiners deliberately offer both as options. Tattoo this difference into your memory.',
          '<b>Forgetting that internal forces don’t move the CoM.</b> In explosions, recoil, and man-on-boat problems, the CoM is fixed (or keeps its original motion). Students waste time tracking individual pieces instead of anchoring to the CoM.',
          '<b>Sign errors in the negative-mass (removed portion) method.</b> The removed piece contributes a negative mass in both the numerator and denominator. Drop a sign and your CoM flips to the wrong side.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “removed portion” problems, don’t grind out full numbers. Use the ratio form and remember the CoM always shifts away from the hole. A quick direction check before computing catches half of all sign mistakes — and in NEET, that’s 30 seconds saved per question.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: 'Mass-weighted average position — moves as if all mass and all external force act there.' },
          {
            f: 'Discrete',
            note: '<i>r⃗</i><sub>cm</sub> = (1/<i>M</i>) ∑ <i>m</i><sub><i>i</i></sub><i>r⃗</i><sub><i>i</i></sub> | <b>Continuous:</b> <i>r⃗</i><sub>cm</sub> = (1/<i>M</i>) ∫ <i>r⃗</i> d<i>m</i>',
          },
          { f: 'System law', note: '<i>F⃗</i><sub>ext</sub> = <i>M</i><i>a⃗</i><sub>cm</sub> → internal forces never move the CoM.' },
          {
            f: 'Standard results',
            note: 'semicircular <b>wire</b> → 2<i>R</i>/π; semicircular <b>disc</b> → 4<i>R</i>/3π; solid cone (from apex) → 3<i>h</i>/4; triangle (from base) → <i>h</i>/3.',
          },
          { f: 'Removed mass', note: 'subtract the cut piece as a negative mass; CoM shifts away from the cut.' },
          { f: 'Property', note: '∑ <i>m</i><sub><i>i</i></sub><i>r⃗</i><sub><i>i</i></sub> = 0⃗ when measured from the CoM.' },
        ],
        aids: [
          '<b>“WAR”:</b> <b>W</b>ire is 2<i>R</i>/π, <b>A</b>rea (disc) is 4<i>R</i>/3π — and they’re at <b>R</b>ight angles in your mind so you never swap them.',
          '<b>“Internal can’t move it”:</b> Explosions, recoils, walking-on-boat → freeze the CoM first, then everything else falls into place.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 379–385 ─────────────────────────
  {
    n: '03',
    title: 'Vector Product of Two Vectors',
    kalam: 'The cross product is the mathematical engine behind torque and angular momentum, so it pays off across the whole chapter.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The cross product is the mathematical engine behind torque and angular momentum, so it pays off across the whole chapter. JEE Main asks 1 direct question most years — finding a cross product, a perpendicular unit vector, or the area of a triangle/parallelogram. NEET uses it lightly (angle between vectors, area). JEE Advanced folds it into 3D torque and angular-momentum problems. CBSE Boards expects the definition, properties, and the right-hand rule.',
      },
      {
        t: 'p',
        html: 'You already know one way to multiply two vectors — the <b>dot product</b>, which answers “how much do these two vectors point the same way?” and gives back a plain number (a scalar). The <b>vector product</b>, or <b>cross product</b>, answers a completely different question: “how much do these two vectors point in different directions — and which way is the plane they define facing?” Remarkably, its answer is itself a vector.<br><br>Why would the product of two vectors be a vector? Because some physical quantities need a direction that is perpendicular to two given directions at once. Think of opening a door. You push (one direction) at some distance from the hinge (another direction), and the door swings about an axis that is perpendicular to both — pointing straight up or down along the hinge line. That turning axis is exactly what the cross product captures. The result of <i>r⃗</i> × <i>F⃗</i> (torque) points along the axis of the turning it produces.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture screwing a bottle cap shut. Your fingers curl in the direction of the turn, and the cap advances along the axis your thumb points to. The cross product works identically: sweep the first vector toward the second with your right hand’s fingers, and your thumb gives the direction of the product. This is the famous <b>right-hand rule</b>, and it is the whole geometric soul of the operation.',
      },
      {
        t: 'p',
        html: 'There’s a second, equally useful picture. The magnitude of <i>A⃗</i> × <i>B⃗</i> equals the <b>area of the parallelogram</b> built on <i>A⃗</i> and <i>B⃗</i> as adjacent sides. When the two vectors are parallel, the “parallelogram” is squashed flat — zero area — so the cross product is zero. When they are perpendicular, the parallelogram is as fat as possible, so the cross product is largest. In other words, the cross product measures how perpendicular two vectors are, exactly the opposite of what the dot product measures.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>1. <b>The cross product is defined only in three dimensions.</b> Unlike the dot product, which works in any number of dimensions, the perpendicular-direction idea needs 3D space to live in.<br>2. <b>Order matters — it is anti-commutative.</b> <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i>. Swapping the vectors flips the result’s direction (your thumb points the opposite way). This is unlike ordinary multiplication and unlike the dot product.<br>3. <b>Parallel (or anti-parallel) vectors give zero.</b> If <i>A⃗</i> ∥ <i>B⃗</i>, then sin <i>θ</i> = 0, so <i>A⃗</i> × <i>B⃗</i> = 0⃗. In particular, any vector crossed with itself is zero.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Definition',
        main: '<i>A⃗</i> × <i>B⃗</i> = <i>AB</i> sin <i>θ</i> <i>n̂</i>',
        legend: [
          '<i>θ</i> = the angle between the vectors (0 ≤ <i>θ</i> ≤ π)',
          '<i>n̂</i> = the unit vector perpendicular to both <i>A⃗</i> and <i>B⃗</i>, pointing in the right-hand-rule sense',
        ],
        note: '(magnitude and direction)',
      },
      {
        t: 'formula',
        kicker: 'Magnitude alone',
        main: '|<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Core properties',
        main: '<i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i> (anti-commutative)<br><i>A⃗</i> × <i>A⃗</i> = 0⃗<br><i>A⃗</i> × (<i>B⃗</i> + <i>C⃗</i>) = <i>A⃗</i> × <i>B⃗</i> + <i>A⃗</i> × <i>C⃗</i> (distributive)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Unit-vector products',
        main: '<i>î</i> × <i>ĵ</i> = <i>k̂</i>, <i>ĵ</i> × <i>k̂</i> = <i>î</i>, <i>k̂</i> × <i>î</i> = <i>ĵ</i><br><i>ĵ</i> × <i>î</i> = −<i>k̂</i>, <i>î</i> × <i>î</i> = <i>ĵ</i> × <i>ĵ</i> = <i>k̂</i> × <i>k̂</i> = 0⃗',
        legend: [],
        note: '(cyclic order <i>î</i> → <i>ĵ</i> → <i>k̂</i> → <i>î</i> gives +; reverse gives −)',
      },
      {
        t: 'formula',
        kicker: 'Determinant form',
        main: '<i>A⃗</i> × <i>B⃗</i> = |<i>î</i> <i>ĵ</i> <i>k̂</i> ; <i>A</i><sub><i>x</i></sub> <i>A</i><sub><i>y</i></sub> <i>A</i><sub><i>z</i></sub> ; <i>B</i><sub><i>x</i></sub> <i>B</i><sub><i>y</i></sub> <i>B</i><sub><i>z</i></sub>| = <i>î</i>(<i>A</i><sub><i>y</i></sub><i>B</i><sub><i>z</i></sub> − <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>y</i></sub>) − <i>ĵ</i>(<i>A</i><sub><i>x</i></sub><i>B</i><sub><i>z</i></sub> − <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>x</i></sub>) + <i>k̂</i>(<i>A</i><sub><i>x</i></sub><i>B</i><sub><i>y</i></sub> − <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>x</i></sub>)',
        legend: [],
        note: '(the workhorse for component vectors)',
      },
      {
        t: 'formula',
        kicker: 'Geometric uses',
        main: 'Area of parallelogram = |<i>A⃗</i> × <i>B⃗</i>|, Area of triangle = ½|<i>A⃗</i> × <i>B⃗</i>|',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Link with the dot product',
        main: '|<i>A⃗</i> × <i>B⃗</i>|<sup>2</sup> + (<i>A⃗</i> · <i>B⃗</i>)<sup>2</sup> = <i>A</i><sup>2</sup><i>B</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation:</b> <i>A</i>, <i>B</i> are magnitudes; <i>θ</i> the included angle; <i>n̂</i> the perpendicular unit vector. The cross product of two vectors (e.g. position × force) has whatever units the factors carry; it is dimensionless only when both factors are.',
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>Why the result is perpendicular to both vectors</b><br>We can prove <i>A⃗</i> × <i>B⃗</i> is perpendicular to <i>A⃗</i> by showing their dot product is zero. Let <i>C⃗</i> = <i>A⃗</i> × <i>B⃗</i> with components from the determinant expansion. Then:<br><i>A⃗</i> · <i>C⃗</i> = <i>A</i><sub><i>x</i></sub>(<i>A</i><sub><i>y</i></sub><i>B</i><sub><i>z</i></sub> − <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>y</i></sub>) + <i>A</i><sub><i>y</i></sub>(<i>A</i><sub><i>z</i></sub><i>B</i><sub><i>x</i></sub> − <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>z</i></sub>) + <i>A</i><sub><i>z</i></sub>(<i>A</i><sub><i>x</i></sub><i>B</i><sub><i>y</i></sub> − <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>x</i></sub>)<br>Expanding, every term cancels in a +/− pair (for example <i>A</i><sub><i>x</i></sub><i>A</i><sub><i>y</i></sub><i>B</i><sub><i>z</i></sub> cancels −<i>A</i><sub><i>y</i></sub><i>A</i><sub><i>x</i></sub><i>B</i><sub><i>z</i></sub>), giving <i>A⃗</i> · <i>C⃗</i> = 0. Since the dot product is zero, <i>C⃗</i> is perpendicular to <i>A⃗</i> — and by the same algebra, perpendicular to <i>B⃗</i>. This is why torque and angular momentum point along the rotation axis, out of the plane of the motion.',
      },
      {
        t: 'p',
        html: '<b>Procedure: computing a cross product from components</b><br><b>Step 1 — Set up the determinant.</b> Write <i>î</i>, <i>ĵ</i>, <i>k̂</i> across the top, the components of the first vector in the middle row, the second in the bottom row. Order is critical here — the middle row is whichever vector comes first in <i>A⃗</i> × <i>B⃗</i>.<br><br><b>Step 2 — Expand along the top row,</b> remembering the alternating sign on the <i>ĵ</i> term:<br><i>î</i> (cover column 1) − <i>ĵ</i> (cover column 2) + <i>k̂</i> (cover column 3)<br>Each “cover” is the 2 × 2 determinant of the remaining four entries.<br><br><b>Step 3 — Sanity-check with a dot product.</b> Dot your answer with either original vector; you must get zero. This single check catches almost every arithmetic slip.',
      },
      {
        t: 'p',
        html: '<b>Procedure: finding the angle or a perpendicular unit vector</b><br>To get the angle between two vectors, combine both products: tan <i>θ</i> = |<i>A⃗</i> × <i>B⃗</i>|/(<i>A⃗</i> · <i>B⃗</i>). To get a unit vector perpendicular to both, compute the cross product and divide by its magnitude: <i>n̂</i> = (<i>A⃗</i> × <i>B⃗</i>)/|<i>A⃗</i> × <i>B⃗</i>|.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Find <i>A⃗</i> × <i>B⃗</i> for <i>A⃗</i> = 2<i>î</i> + 3<i>ĵ</i> + <i>k̂</i> and <i>B⃗</i> = <i>î</i> − <i>ĵ</i> + 2<i>k̂</i>.',
        steps: [
          '<b>Set up the determinant:</b><br><i>A⃗</i> × <i>B⃗</i> = |<i>î</i> <i>ĵ</i> <i>k̂</i> ; 2 3 1 ; 1 −1 2|',
          '<b>Expand:</b><br>= <i>î</i>[(3)(2) − (1)(−1)] − <i>ĵ</i>[(2)(2) − (1)(1)] + <i>k̂</i>[(2)(−1) − (3)(1)]<br>= <i>î</i>(6 + 1) − <i>ĵ</i>(4 − 1) + <i>k̂</i>(−2 − 3) = 7<i>î</i> − 3<i>ĵ</i> − 5<i>k̂</i>',
          '<b>Check:</b> <i>A⃗</i> · (<i>A⃗</i> × <i>B⃗</i>) = (2)(7) + (3)(−3) + (1)(−5) = 14 − 9 − 5 = 0 ✓',
        ],
        ans: '<i>A⃗</i> × <i>B⃗</i> = 7<i>î</i> − 3<i>ĵ</i> − 5<i>k̂</i>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two vectors have magnitudes 6 and 5 units. If the magnitude of their cross product is 15, find the angle between them.',
        steps: [
          '<b>The trap:</b> Students set up the full vector machinery. But only magnitudes are needed — use |<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i> directly.',
          '<b>Mental shortcut.</b><br>15 = (6)(5) sin <i>θ</i> ⇒ sin <i>θ</i> = 15/30 = 1/2 ⇒ <i>θ</i> = 30°',
        ],
        ans: '<i>θ</i> = 30° (or 150°: the magnitude of the cross product alone cannot tell them apart). Sanity check: the maximum possible cross product would be 6 × 5 = 30 (at 90°). We got exactly half, so sin <i>θ</i> = 0.5 and a 30° angle fits. ✓',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Find the area of the triangle whose two sides are given by the vectors <i>P⃗</i> = 3<i>î</i> + <i>ĵ</i> and <i>Q⃗</i> = <i>î</i> + 4<i>ĵ</i>, and also find a unit vector perpendicular to the plane of the triangle.',
        steps: [
          'This blends the <b>area interpretation</b> with the <b>perpendicular-direction</b> use — two concepts in one.',
          '<b>Step 1 — Cross product</b> (both vectors lie in the <i>xy</i>-plane, so only the <i>k̂</i> term survives):<br><i>P⃗</i> × <i>Q⃗</i> = <i>k̂</i>[(3)(4) − (1)(1)] = <i>k̂</i>(12 − 1) = 11<i>k̂</i>',
          '<b>Step 2 — Area of the triangle:</b><br>Area = ½|<i>P⃗</i> × <i>Q⃗</i>| = ½(11) = 5.5 square units',
          '<b>Step 3 — Perpendicular unit vector:</b><br><i>n̂</i> = (<i>P⃗</i> × <i>Q⃗</i>)/|<i>P⃗</i> × <i>Q⃗</i>| = 11<i>k̂</i>/11 = <i>k̂</i>',
        ],
        ans: 'Area = 5.5 square units; perpendicular unit vector = <i>k̂</i> (which makes sense — the vectors lie in the <i>xy</i>-plane, so the perpendicular points along the <i>z</i>-axis).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A vector <i>X⃗</i> satisfies <i>X⃗</i> × (2<i>î</i> + 3<i>ĵ</i>) = 6<i>k̂</i> and also <i>X⃗</i> · (2<i>î</i> + 3<i>ĵ</i>) = 0, and <i>X⃗</i> lies in the <i>xy</i>-plane. Find <i>X⃗</i>.',
        steps: [
          '<b>Strategy:</b> Let <i>X⃗</i> = <i>xî</i> + <i>yĵ</i>. Use both conditions as simultaneous equations.',
          '<b>Condition 1 — the dot product is zero</b> (so <i>X⃗</i> ⊥ (2<i>î</i> + 3<i>ĵ</i>)):<br>2<i>x</i> + 3<i>y</i> = 0 ...(i)',
          '<b>Condition 2 — the cross product:</b><br><i>X⃗</i> × (2<i>î</i> + 3<i>ĵ</i>) = (<i>xî</i> + <i>yĵ</i>) × (2<i>î</i> + 3<i>ĵ</i>) = <i>k̂</i> [(<i>x</i>)(3) − (<i>y</i>)(2)] = (3<i>x</i> − 2<i>y</i>)<i>k̂</i><br>Setting this equal to 6<i>k̂</i>:<br>3<i>x</i> − 2<i>y</i> = 6 ...(ii)',
          '<b>Solve (i) and (ii).</b> From (i), <i>x</i> = −(3/2)<i>y</i>. Substitute into (ii):<br>3(−(3/2)<i>y</i>) − 2<i>y</i> = 6 ⇒ −(9/2)<i>y</i> − 2<i>y</i> = 6 ⇒ −(13/2)<i>y</i> = 6 ⇒ <i>y</i> = −12/13<br>Then <i>x</i> = −(3/2)(−12/13) = 18/13.',
        ],
        ans: '<i>X⃗</i> = (18/13)<i>î</i> − (12/13)<i>ĵ</i>. Note: the two products together pin down both the direction (perpendicularity, from the dot product) and the magnitude-and-sense (from the cross product) — a neat illustration of how dot and cross encode complementary information.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Find <i>A⃗</i> × <i>B⃗</i> for <i>A⃗</i> = <i>î</i> + 2<i>ĵ</i> + 3<i>k̂</i> and <i>B⃗</i> = 2<i>î</i> + <i>ĵ</i> − <i>k̂</i>.',
            a: '−5<i>î</i> + 7<i>ĵ</i> − 3<i>k̂</i>',
          },
          {
            q: '[NEET] The magnitudes of two vectors are 4 and 7. If their scalar product equals their vector product’s magnitude, find the angle between them.',
            a: '45° (since <i>AB</i> cos <i>θ</i> = <i>AB</i> sin <i>θ</i> ⇒ tan <i>θ</i> = 1)',
          },
          {
            q: '[JEE Main] Find the area of the parallelogram whose adjacent sides are <i>A⃗</i> = 3<i>î</i> + 2<i>ĵ</i> − <i>k̂</i> and <i>B⃗</i> = <i>î</i> − <i>ĵ</i> + 2<i>k̂</i>.',
            a: '√(3<sup>2</sup> + 7<sup>2</sup> + 5<sup>2</sup>) = √83 ≈ 9.11 square units',
          },
          {
            q: '[JEE Main] Find a unit vector perpendicular to both <i>A⃗</i> = 2<i>î</i> − <i>ĵ</i> + <i>k̂</i> and <i>B⃗</i> = <i>î</i> + <i>ĵ</i> − 2<i>k̂</i>.',
            a: '(1/√35)(<i>î</i> + 5<i>ĵ</i> + 3<i>k̂</i>)',
          },
          {
            q: '[JEE Advanced] Given |<i>A⃗</i>| = 3, |<i>B⃗</i>| = 4, and |<i>A⃗</i> × <i>B⃗</i>| = 6, find <i>A⃗</i> · <i>B⃗</i> (both possible values).',
            a: '<i>A⃗</i> · <i>B⃗</i> = ±√((<i>AB</i>)<sup>2</sup> − |<i>A⃗</i> × <i>B⃗</i>|<sup>2</sup>) = ±√(144 − 36) = ±6√3',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The vector product <i>A⃗</i> × <i>B⃗</i> is zero. This means:',
        opts: [
          { label: '<i>A⃗</i> and <i>B⃗</i> are perpendicular', nudge: '(A) perpendicular vectors give the maximum cross product, not zero.' },
          { label: '<i>A⃗</i> and <i>B⃗</i> are parallel or anti-parallel', nudge: null },
          { label: 'either vector is a unit vector', nudge: '(C) magnitude being 1 is irrelevant to the angle.' },
          {
            label: '<i>A⃗</i> = <i>B⃗</i>',
            nudge: '(D) <i>A⃗</i> = <i>B⃗</i> is one special parallel case, but the condition is far broader than equality.',
          },
        ],
        correct: 1,
        solution: '|<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i> = 0 requires sin <i>θ</i> = 0, i.e. <i>θ</i> = 0° or 180° — the vectors are parallel or anti-parallel.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is correct?',
        opts: [
          { label: '<i>î</i> × <i>ĵ</i> = <i>î</i>', nudge: '(A) should be <i>k̂</i>, not <i>î</i>.' },
          { label: '<i>ĵ</i> × <i>k̂</i> = <i>î</i>', nudge: null },
          { label: '<i>k̂</i> × <i>ĵ</i> = <i>î</i>', nudge: '(C) reverses the cyclic order, so it equals −<i>î</i>, not +<i>î</i>.' },
          { label: '<i>î</i> × <i>î</i> = <i>k̂</i>', nudge: '(D) any vector crossed with itself is 0⃗, never <i>k̂</i>.' },
        ],
        correct: 1,
        solution: 'Following the cyclic order <i>î</i> → <i>ĵ</i> → <i>k̂</i> → <i>î</i>, we get <i>ĵ</i> × <i>k̂</i> = <i>î</i>.',
      },
      {
        t: 'mcq',
        q: 'If <i>A⃗</i> × <i>B⃗</i> = <i>B⃗</i> × <i>A⃗</i> (not just equal in magnitude, but identical vectors), then:',
        opts: [
          {
            label: 'the vectors are perpendicular',
            nudge: '(A) perpendicular vectors give non-zero, oppositely directed products — not identical.',
          },
          { label: 'the vectors have equal magnitudes', nudge: '(B) equal magnitudes are not required; any parallel pair works.' },
          { label: '<i>A⃗</i> × <i>B⃗</i> = 0⃗', nudge: null },
          {
            label: 'it is impossible for any vectors',
            nudge: '(D) wrongly calls it impossible; it’s possible precisely when the product vanishes.',
          },
        ],
        correct: 2,
        solution: 'Since <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i> always, setting it equal to +<i>B⃗</i> × <i>A⃗</i> forces <i>A⃗</i> × <i>B⃗</i> = −<i>A⃗</i> × <i>B⃗</i>, hence <i>A⃗</i> × <i>B⃗</i> = 0⃗.',
      },
      {
        t: 'mcq',
        q: 'The area of a parallelogram with adjacent sides <i>A⃗</i> = 2<i>î</i> and <i>B⃗</i> = 3<i>ĵ</i> is:',
        opts: [
          { label: '5', nudge: '(A) adds the magnitudes (2 + 3) — wrong operation.' },
          { label: '6', nudge: null },
          { label: '√13', nudge: '(C) computes √(2<sup>2</sup> + 3<sup>2</sup>) as if finding a resultant.' },
          { label: '0', nudge: '(D) wrongly assumes perpendicular vectors give zero area (that’s parallel vectors).' },
        ],
        correct: 1,
        solution: '<i>A⃗</i> × <i>B⃗</i> = (2<i>î</i>) × (3<i>ĵ</i>) = 6(<i>î</i> × <i>ĵ</i>) = 6<i>k̂</i>, so the area is |6<i>k̂</i>| = 6.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating the cross product like ordinary multiplication.</b> It is anti-commutative: <i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i>. Reversing the order flips the sign — a costly slip in torque problems where direction decides clockwise vs anticlockwise.',
          '<b>Forgetting the minus sign on the <i>ĵ</i> term</b> in the determinant expansion. The middle term is subtracted. This single sign error is the most common cross-product mistake in exams.',
          '<b>Confusing the dot and cross products.</b> Dot gives a scalar and uses cos <i>θ</i> (maximal when parallel); cross gives a vector and uses sin <i>θ</i> (maximal when perpendicular). Mixing them up corrupts the whole solution.',
          '<b>Believing parallel vectors give a non-zero product.</b> Parallel ⇒ sin <i>θ</i> = 0 ⇒ zero cross product. This is the reason a force pushing straight toward a hinge produces no torque.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> After any cross-product calculation, dot the result with one of the original vectors. If you don’t get zero, you’ve made an arithmetic error — go back. This costs five seconds and saves whole questions. And for two vectors already in the <i>xy</i>-plane, skip the full determinant: only the <i>k̂</i> component (<i>A</i><sub><i>x</i></sub><i>B</i><sub><i>y</i></sub> − <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>x</i></sub>) is non-zero.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: '<i>A⃗</i> × <i>B⃗</i> = <i>AB</i> sin <i>θ</i> <i>n̂</i> — a vector perpendicular to both, by the right-hand rule.' },
          { f: 'Magnitude', note: '|<i>A⃗</i> × <i>B⃗</i>| = <i>AB</i> sin <i>θ</i> = area of the parallelogram on <i>A⃗</i>, <i>B⃗</i>.' },
          { f: 'Anti-commutative', note: '<i>A⃗</i> × <i>B⃗</i> = −<i>B⃗</i> × <i>A⃗</i>; <i>A⃗</i> × <i>A⃗</i> = 0⃗.' },
          { f: 'Unit vectors (cyclic +)', note: '<i>î</i> × <i>ĵ</i> = <i>k̂</i>, <i>ĵ</i> × <i>k̂</i> = <i>î</i>, <i>k̂</i> × <i>î</i> = <i>ĵ</i>.' },
          { f: '<b>Determinant form</b> for components; remember the <b>minus on <i>ĵ</i></b>.', note: '' },
          { f: '<b>Triangle area</b> = ½|<i>A⃗</i> × <i>B⃗</i>|; <b>perpendicular check:</b> <i>A⃗</i> · (<i>A⃗</i> × <i>B⃗</i>) = 0.', note: '' },
        ],
        aids: [
          '<b>“Cross is perpendicular, sine of the angle”:</b> dot uses cos and points along; cross uses sin and points across (perpendicular).',
          '<b>“i, j, k go round in a ring”:</b> forward around the ring <i>î</i> → <i>ĵ</i> → <i>k̂</i> → <i>î</i> is positive; going backward picks up a minus sign.',
        ],
      },
    ],
  },
];
