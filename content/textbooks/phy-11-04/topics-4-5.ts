import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 04 and 05, pp. 225–247 of the Class 11 Physics Master
 * Reference, word for word: Sub-topic 4, Friction (pp. 225 to 235), and
 * Sub-topic 5, Circular Motion Dynamics (Banking) (pp. 236 to 246). Figures
 * 4.4 (p. 227, drawn on p. 228), 4.5 (p. 230, drawn on p. 231), 4.6 and 4.7
 * (p. 238, drawn on p. 239) and 4.8 (p. 241, drawn on p. 242). Page 247 is the
 * title page of the book's Part II (Sub-topics 6 to 8) and is not carried here.
 */
export const TOPICS: Topic[] = [
  {
    n: '04',
    title: 'Friction',
    kalam:
      'Friction is the force that acts along two surfaces in contact, opposing the relative sliding (or the tendency to slide) between them.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield topics in mechanics. JEE Main asks 1–2 questions almost every year — blocks on inclines, connected systems, minimum-force problems. NEET favors conceptual items on the self-adjusting nature of static friction, angle of repose, and the laws of friction. JEE Advanced layers it into multi-block, stacked, and non-inertial setups. CBSE Board exams regularly set a 2–3 mark numerical or a definition-plus-graph question.',
      },
      {
        t: 'p',
        html: 'Try pushing a heavy steel almirah across the floor. At first it refuses to budge no matter how hard you lean into it. You push harder, harder still — and then suddenly it gives way and slides, often with a little jerk. Everyone has felt this. That stubborn resistance, and its sudden surrender, is the whole drama of <b>friction</b>.<br><br>Friction is the force that acts along two surfaces in contact, opposing the relative sliding (or the tendency to slide) between them. It arises because no surface is truly smooth — under a microscope, even polished steel is a landscape of tiny peaks and valleys that interlock and, where they touch, even weakly “weld” together. To slide one surface over the other, these microscopic bonds must be sheared. That’s why friction exists, and why it depends on how hard the surfaces are pressed together (the normal force) rather than on how big they look.',
      },
      {
        t: 'p',
        html: 'The single most important idea in this whole topic: <b>static friction is self-adjusting.</b> When you push the almirah gently, friction pushes back exactly as hard as you push — so the net force is zero and nothing moves. Push a little harder, friction matches you again. It keeps matching… but only up to a ceiling. That ceiling is the <b>limiting friction</b>, the maximum grip the surfaces can muster. Push beyond it and the surfaces lose their hold; the almirah breaks free and slides.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Static friction is like a patient employee who does exactly the work you assign — no more, no less — but who has a strict maximum capacity. Ask for less than the maximum, and the request is met precisely. Ask for more, and the system snaps: the body starts sliding. The instant it slides, a different, slightly weaker force takes over — <b>kinetic (or dynamic) friction</b> — which is why the almirah, once moving, is easier to keep moving than it was to start. That little lurch you feel is exactly this drop from limiting static friction to kinetic friction.',
      },
      {
        t: 'p',
        html: 'We capture these with two numbers, the <b>coefficients of friction</b>. The limiting (maximum) static friction is <i>f</i><sub><i>s</i></sub><sup>max</sup> = <i>μ</i><sub><i>s</i></sub><i>N</i>, and the kinetic friction is <i>f</i><sub><i>k</i></sub> = <i>μ</i><sub><i>k</i></sub><i>N</i>, where <i>N</i> is the normal reaction. For real surfaces <i>μ</i><sub><i>s</i></sub> ≳ <i>μ</i><sub><i>k</i></sub> (static is the tougher one to beat). Crucially, while the body is not yet sliding, the actual static friction is whatever it needs to be — anywhere from zero up to <i>μ</i><sub><i>s</i></sub><i>N</i> — <b>not</b> automatically <i>μ</i><sub><i>s</i></sub><i>N</i>. That misunderstanding wrecks more friction problems than any other.<br><br>Two beautiful angles summarize friction geometrically. The <b>angle of friction</b> <i>λ</i> is the tilt of the total contact force (friction plus normal) away from the normal, and it satisfies tan <i>λ</i> = <i>μ</i>. The <b>angle of repose</b> <i>θ</i><sub><i>r</i></sub> is the steepest incline on which a body can rest before sliding under its own weight — and remarkably, <i>θ</i><sub><i>r</i></sub> equals the angle of friction, so tan <i>θ</i><sub><i>r</i></sub> = <i>μ</i><sub><i>s</i></sub>. Tilt a tray of marbles and watch the angle at which they let go: you’ve just measured a coefficient of friction.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• The laws <i>f</i><sub><i>s</i></sub> ≤ <i>μ</i><sub><i>s</i></sub><i>N</i> and <i>f</i><sub><i>k</i></sub> = <i>μ</i><sub><i>k</i></sub><i>N</i> are <b>empirical approximations</b>, excellent for ordinary dry surfaces but not exact laws of nature.<br>• Friction is treated as <b>independent of the apparent contact area</b> and of sliding speed — both reasonable for exam-level problems, both imperfect in reality.<br>• The coefficient of friction is <b>dimensionless</b> and depends on the nature of both surfaces, not on the bodies’ masses.<br>• A smooth (frictionless) surface means <i>μ</i> = 0 and <i>λ</i> = 0.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Static friction (self-adjusting, up to a maximum)',
        main: '0 ≤ <i>f</i><sub><i>s</i></sub> ≤ <i>μ</i><sub><i>s</i></sub><i>N</i>',
        legend: [],
        note: '(actual value equals the applied tangential force until the limit)',
      },
      {
        t: 'formula',
        kicker: 'Limiting (maximum static) friction',
        main: '<i>f</i><sub><i>s</i></sub><sup>max</sup> = <i>μ</i><sub><i>s</i></sub><i>N</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Kinetic (dynamic) friction (while sliding)',
        main: '<i>f</i><sub><i>k</i></sub> = <i>μ</i><sub><i>k</i></sub><i>N</i>',
        legend: [
          '<i>N</i> = the normal reaction (newton, [M L T<sup>−2</sup>])',
          '<i>μ</i><sub><i>s</i></sub>, <i>μ</i><sub><i>k</i></sub> = the coefficients of static and kinetic friction',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Coefficient of friction (dimensionless)',
        main: '<i>μ</i> = <i>f</i>/<i>N</i>',
        legend: [],
        note: 'dimensional formula [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>], with <i>μ</i><sub><i>s</i></sub> ≥ <i>μ</i><sub><i>k</i></sub>.',
      },
      {
        t: 'formula',
        kicker: 'Angle of friction λ',
        main: 'tan <i>λ</i> = <i>μ</i>',
        legend: [],
        note: '(the angle the resultant contact force makes with the normal at the verge of sliding).',
      },
      {
        t: 'formula',
        kicker: 'Angle of repose (θ<sub>r</sub>)',
        main: 'tan <i>θ</i><sub><i>r</i></sub> = <i>μ</i><sub><i>s</i></sub> ⇒ <i>θ</i><sub><i>r</i></sub> = <i>λ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Acceleration of a block sliding down a rough incline of angle θ',
        main: '<i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ</i><sub><i>k</i></sub> cos <i>θ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Minimum force to drag a body on a rough horizontal surface (applied at the optimal angle)',
        main: '<i>F</i><sub>min</sub> = <i>μmg</i>/√(1 + <i>μ</i><sup>2</sup>) = <i>mg</i> sin <i>λ</i>',
        legend: [],
        note: '(applied at angle <i>θ</i> = <i>λ</i> = tan<sup>−1</sup> <i>μ</i>)',
      },
      {
        t: 'formula',
        kicker: 'Maximum fraction of a chain that can hang off a rough table (coefficient μ)',
        main: '<i>y</i>/<i>L</i> = <i>μ</i>/(1 + <i>μ</i>)',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Angle of repose equals angle of friction.</b> Setup: A block of mass <i>m</i> rests on a rough inclined plane whose angle <i>θ</i> is slowly increased. At the <b>angle of repose</b> <i>θ</i><sub><i>r</i></sub>, the block is just on the verge of sliding down. Three forces act: weight <i>mg</i> (vertically down), normal reaction <i>N</i> (perpendicular to the incline), and limiting friction <i>f</i> = <i>μ</i><sub><i>s</i></sub><i>N</i> (up the incline, opposing the impending downhill slide).',
      },
      { t: 'fig', id: 'p11-04-fig-4.4' },
      {
        t: 'p',
        html: 'Resolve the weight along the natural slope axes:<br>• Perpendicular to incline: <i>N</i> = <i>mg</i> cos <i>θ</i><sub><i>r</i></sub><br>• Along the incline (down-slope): <i>mg</i> sin <i>θ</i><sub><i>r</i></sub><br>At the verge of sliding, the down-slope pull is exactly balanced by limiting friction:<br><i>mg</i> sin <i>θ</i><sub><i>r</i></sub> = <i>μ</i><sub><i>s</i></sub><i>N</i> = <i>μ</i><sub><i>s</i></sub><i>mg</i> cos <i>θ</i><sub><i>r</i></sub><br>Cancel <i>mg</i> and divide:<br>tan <i>θ</i><sub><i>r</i></sub> = <i>μ</i><sub><i>s</i></sub><br>But the angle of friction is defined by tan <i>λ</i> = <i>μ</i><sub><i>s</i></sub>. Therefore:<br><i>θ</i><sub><i>r</i></sub> = <i>λ</i>',
      },
      {
        t: 'p',
        html: 'Physical reading: the steepest “safe” slope is set entirely by the surfaces’ grip, independent of the block’s mass — a heavier block presses down harder but is also gripped harder, and the two effects cancel exactly. This is why a given material (sand, gravel, rice) always piles up to the same characteristic cone angle regardless of how much you pour.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Minimum force to pull a body along a rough horizontal surface.</b> Setup: A block of mass <i>m</i> on a rough floor (coefficient <i>μ</i>) is pulled by a force <i>F</i> applied at angle <i>θ</i> above the horizontal. Find the angle that minimizes the force needed to start it moving.<br><br>Key insight: lifting the rope upward has two competing effects — the upward component reduces the normal force (good, less friction), but it also wastes some of <i>F</i> in the vertical direction (bad). There must be a sweet spot.',
      },
      {
        t: 'p',
        html: 'Vertical equilibrium (block stays on the floor):<br><i>N</i> + <i>F</i> sin <i>θ</i> = <i>mg</i> ⇒ <i>N</i> = <i>mg</i> − <i>F</i> sin <i>θ</i><br>Horizontal balance at the verge of sliding:<br><i>F</i> cos <i>θ</i> = <i>μN</i> = <i>μ</i>(<i>mg</i> − <i>F</i> sin <i>θ</i>)<br>Solve for <i>F</i>:<br><i>F</i> cos <i>θ</i> + <i>μF</i> sin <i>θ</i> = <i>μmg</i> ⇒ <i>F</i> = <i>μmg</i>/(cos <i>θ</i> + <i>μ</i> sin <i>θ</i>)<br>To <b>minimize</b> <i>F</i>, we maximize the denominator <i>D</i>(<i>θ</i>) = cos <i>θ</i> + <i>μ</i> sin <i>θ</i>. Its maximum value is √(1 + <i>μ</i><sup>2</sup>), attained when tan <i>θ</i> = <i>μ</i> — that is, when the pull is applied at the <b>angle of friction</b> <i>θ</i> = <i>λ</i>. Substituting:<br><i>F</i><sub>min</sub> = <i>μmg</i>/√(1 + <i>μ</i><sup>2</sup>) = <i>mg</i> sin <i>λ</i>',
      },
      {
        t: 'p',
        html: 'Why it matters: pulling horizontally needs <i>F</i> = <i>μmg</i>; pulling at the optimal angle <i>λ</i> needs only <i>mg</i> sin <i>λ</i>, which is always less (since sin <i>λ</i> < tan <i>λ</i>). This is the physics behind why we instinctively pull a heavy suitcase or a stubborn lawnmower at a slant rather than straight along the ground.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A 2 kg block rests on a rough horizontal floor with <i>μ</i><sub><i>s</i></sub> = 0.4 and <i>μ</i><sub><i>k</i></sub> = 0.3. Find the frictional force on the block when a horizontal force is applied of magnitude (a) 5 N, (b) 8 N, (c) 12 N. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>Step 1 — Find the limiting friction first</b> (always the first move):<br><i>f</i><sub><i>s</i></sub><sup>max</sup> = <i>μ</i><sub><i>s</i></sub><i>N</i> = <i>μ</i><sub><i>s</i></sub><i>mg</i> = 0.4 × 2 × 10 = 8 N<br>This is the threshold that decides everything.',
          '<b>(a) Applied force = 5 N.</b> Since 5 N < 8 N, the block does <b>not</b> move. Static friction self-adjusts to exactly balance the applied force:<br><i>f</i><sub><i>s</i></sub> = 5 N',
          '<b>(b) Applied force = 8 N.</b> This equals the limiting friction exactly — the block is on the verge of sliding. Friction is at its maximum:<br><i>f</i><sub><i>s</i></sub> = 8 N',
          '<b>(c) Applied force = 12 N.</b> Since 12 N > 8 N, the block breaks free and slides. Now <b>kinetic</b> friction acts:<br><i>f</i><sub><i>k</i></sub> = <i>μ</i><sub><i>k</i></sub><i>N</i> = 0.3 × 2 × 10 = 6 N',
          '<b>The lesson in one line:</b> friction is <b>not</b> <i>μ</i><sub><i>s</i></sub><i>N</i> until the body is about to move. Below the threshold it simply matches the applied force. Note too that once sliding begins (case c), friction drops from 8 N to 6 N — that’s the little lurch you feel.',
        ],
        ans: '(a) 5 N, (b) 8 N, (c) 6 N.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A coin placed on a closed textbook starts to slide the moment the book is tilted to 30° from the horizontal. What is the coefficient of static friction between the coin and the cover?',
        steps: [
          '<b>The trap:</b> students reach for <i>mg</i> sin <i>θ</i>, <i>mg</i> cos <i>θ</i>, set up full equilibrium equations, and lose a minute under exam pressure.',
          '<b>The shortcut:</b> “starts to slide when tilted to <i>θ</i>” is the literal definition of the <b>angle of repose</b>. And angle of repose = angle of friction, so:<br><i>μ</i><sub><i>s</i></sub> = tan <i>θ</i><sub><i>r</i></sub> = tan 30° = 1/√3 ≈ 0.58',
          '<b>Speed tip:</b> the instant you read “just begins to slide on an incline of angle <i>θ</i>,” write <i>μ</i> = tan <i>θ</i> and you’re done — no resolving needed. Beware distractors offering sin 30° = 0.5 or cos 30° = 0.87; those tempt students who set up the components but forget they cancel into a clean tangent.',
        ],
        ans: '<i>μ</i><sub><i>s</i></sub> = 1/√3 ≈ 0.58.',
      },
      {
        t: 'ex',
        fig: 'p11-04-fig-4.5',
        tag: 'JEE Main Level',
        q: 'A 3 kg block lies on a rough horizontal table and is connected by a light string over a frictionless pulley at the table’s edge to a freely hanging 2 kg block. The coefficient of friction between the table block and the table is <i>μ</i> = 0.2. Find the acceleration of the system and the tension in the string. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'This combines <b>friction</b>, <b>Newton’s second law</b>, and a <b>connected (constraint) system</b> — a staple JEE Main combination.',
          '<b>Step 1 — Will it even move?</b> The hanging weight drives the motion: <i>m</i><sub>2</sub><i>g</i> = 2 × 10 = 20 N. The maximum friction resisting it: <i>μm</i><sub>1</sub><i>g</i> = 0.2 × 3 × 10 = 6 N. Since 20 N > 6 N, the system accelerates.',
          '<b>Step 2 — Equations of motion.</b> Let <i>a</i> be the common acceleration, <i>T</i> the tension.<br>Hanging block (<i>m</i><sub>2</sub>, moving down):<br><i>m</i><sub>2</sub><i>g</i> − <i>T</i> = <i>m</i><sub>2</sub><i>a</i> ⇒ 20 − <i>T</i> = 2<i>a</i><br>Table block (<i>m</i><sub>1</sub>, moving toward the pulley; kinetic friction <i>μm</i><sub>1</sub><i>g</i> opposes it):<br><i>T</i> − <i>μm</i><sub>1</sub><i>g</i> = <i>m</i><sub>1</sub><i>a</i> ⇒ <i>T</i> − 6 = 3<i>a</i>',
          '<b>Step 3 — Solve.</b> Add the two equations to eliminate <i>T</i>:<br>20 − 6 = 5<i>a</i> ⇒ <i>a</i> = 14/5 = 2.8 m/s<sup>2</sup><br>Substitute back:<br><i>T</i> = 6 + 3(2.8) = 6 + 8.4 = 14.4 N',
          '<b>Check:</b> tension (14.4 N) is less than the hanging weight (20 N) — correct, since the hanging block is accelerating downward. If you ever get <i>T</i> > <i>m</i><sub>2</sub><i>g</i> here, you’ve made a sign error.',
        ],
        ans: '<i>a</i> = 2.8 m/s<sup>2</sup> and <i>T</i> = 14.4 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A crate of mass 10 kg rests on a rough horizontal floor with coefficient of friction <i>μ</i> = 0.75. A worker wants to drag it using a rope. (a) Compare the force needed if the rope is pulled horizontally versus at the optimal angle. (b) Find that optimal angle and the minimum force. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'This requires the <b>angle-of-friction optimization</b> — pure JEE Advanced reasoning.',
          '<b>Part (a) — Horizontal pull.</b> With the rope horizontal, the full weight presses on the floor, so <i>N</i> = <i>mg</i> = 100 N and:<br><i>F</i><sub>horizontal</sub> = <i>μmg</i> = 0.75 × 100 = 75 N',
          '<b>Part (b) — Optimal angled pull.</b> From the derivation, the minimum force occurs when the rope is pulled at the angle of friction <i>λ</i> = tan<sup>−1</sup> <i>μ</i>:<br><i>λ</i> = tan<sup>−1</sup>(0.75) ≈ 37°<br>The minimum force is:<br><i>F</i><sub>min</sub> = <i>μmg</i>/√(1 + <i>μ</i><sup>2</sup>) = (0.75 × 100)/√(1 + 0.5625) = 75/√1.5625 = 75/1.25 = 60 N',
          '<b>Deep insight:</b> the optimal angle is exactly the angle of friction, and at that angle <i>F</i><sub>min</sub> = <i>mg</i> sin <i>λ</i> = 100 sin 37° = 100(0.6) = 60 N — the same number by a slicker route. The angled pull wins because lifting at <i>λ</i> reduces the normal force (and hence friction) faster than it wastes the pull vertically. This is precisely why we instinctively tilt the handle when dragging a loaded trolley.',
        ],
        ans: 'Pulling horizontally needs 75 N; pulling at 37° above the horizontal needs only 60 N — a saving of 15 N (20%).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 4 kg block rests on a rough horizontal surface with <i>μ</i><sub><i>s</i></sub> = 0.5 and <i>μ</i><sub><i>k</i></sub> = 0.4. Find the frictional force when a horizontal force of (a) 12 N and (b) 25 N is applied. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '(a) 12 N (static, since limiting = 20 N); (b) 16 N (kinetic, since 25 > 20)',
          },
          {
            q: '[NEET] A body placed on a rough inclined plane just begins to slide when the inclination is 45°. What is the coefficient of static friction?',
            a: '<i>μ</i><sub><i>s</i></sub> = tan 45° = 1',
          },
          {
            q: '[JEE Main] A 5 kg block slides down a rough incline of 37° with coefficient of kinetic friction 0.25. Find its acceleration. (<i>g</i> = 10 m/s<sup>2</sup>, sin 37° = 0.6, cos 37° = 0.8)',
            a: '<i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ</i><sub><i>k</i></sub> cos <i>θ</i>) = 10(0.6 − 0.25 × 0.8) = 4 m/s<sup>2</sup>',
          },
          {
            q: '[JEE Main] A 6 kg block on a rough table (<i>μ</i> = 0.3) is connected over a frictionless pulley to a hanging 4 kg block. Find the acceleration of the system and the string tension. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>a</i> = (40 − 0.3 × 60)/10 = 2.2 m/s<sup>2</sup>; <i>T</i> = 4(10) − 4(2.2) = 31.2 N',
          },
          {
            q: '[JEE Advanced] A uniform chain lies on a rough horizontal table with coefficient of static friction 0.25. Find the maximum fraction of the chain’s length that can hang over the edge of the table without the chain sliding off.',
            a: '<i>y</i>/<i>L</i> = <i>μ</i>/(1 + <i>μ</i>) = 0.25/1.25 = 0.2, i.e. 20%',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A 5 kg block sits on a rough floor with <i>μ</i><sub><i>s</i></sub> = 0.5. A horizontal force of 15 N is applied but the block does not move. The frictional force on the block is (<i>g</i> = 10 m/s<sup>2</sup>):',
        opts: [
          {
            label: '25 N',
            nudge: '(a) computes <i>μ</i><sub><i>s</i></sub><i>N</i> without checking whether the block is actually at the verge of sliding — the single most common friction error.',
          },
          { label: '15 N', nudge: null },
          { label: '0 N', nudge: '(c) ignores that friction must balance the applied force.' },
          { label: '7.5 N', nudge: '(d) multiplies <i>μ</i><sub><i>s</i></sub> by the applied force, which is meaningless.' },
        ],
        correct: 1,
        solution: 'The limiting friction is <i>μ</i><sub><i>s</i></sub><i>mg</i> = 0.5 × 50 = 25 N. Since the applied 15 N is below this, the block stays put and static friction self-adjusts to exactly balance the applied force: <i>f</i><sub><i>s</i></sub> = 15 N.',
      },
      {
        t: 'mcq',
        q: 'The force of limiting friction between two surfaces in contact:',
        opts: [
          {
            label: 'increases if the apparent area of contact increases.',
            nudge: '(a) and (c) invoke contact area, which the empirical laws say does not matter.',
          },
          { label: 'is independent of the apparent area of contact but proportional to the normal reaction.', nudge: null },
          {
            label: 'depends only on the area of contact.',
            nudge: '(a) and (c) invoke contact area, which the empirical laws say does not matter.',
          },
          { label: 'is independent of the normal reaction.', nudge: '(d) contradicts the defining relation <i>f</i> = <i>μN</i>.' },
        ],
        correct: 1,
        solution: 'By the laws of friction, limiting friction is proportional to the normal reaction and (to good approximation) independent of the apparent contact area.',
      },
      {
        t: 'mcq',
        q: 'For a given pair of surfaces, the coefficients of static (<i>μ</i><sub><i>s</i></sub>) and kinetic (<i>μ</i><sub><i>k</i></sub>) friction generally satisfy:',
        opts: [
          { label: '<i>μ</i><sub><i>s</i></sub> < <i>μ</i><sub><i>k</i></sub>', nudge: '(a) reverses the inequality.' },
          { label: '<i>μ</i><sub><i>s</i></sub> > <i>μ</i><sub><i>k</i></sub>', nudge: null },
          { label: '<i>μ</i><sub><i>s</i></sub> = 0', nudge: '(c) would mean a frictionless surface, not a general rule.' },
          {
            label: '<i>μ</i><sub><i>k</i></sub> > 1 always',
            nudge: '(d) coefficients can exceed 1 for some surfaces, but it is certainly not “always.”',
          },
        ],
        correct: 1,
        solution: 'It generally takes more force to start sliding than to maintain it, so <i>μ</i><sub><i>s</i></sub> is generally greater than (or even equal to) <i>μ</i><sub><i>k</i></sub>. This is why a sliding body, once started, is easier to keep moving.',
      },
      {
        t: 'mcq',
        q: 'Which statement about friction is correct?',
        opts: [
          {
            label: 'Friction always opposes the motion of a body.',
            nudge: '(a) is the classic misconception; friction can drive motion (walking, driving wheels).',
          },
          { label: 'Static friction can act as the force that propels a body forward.', nudge: null },
          {
            label: 'Kinetic friction is always greater than limiting static friction.',
            nudge: '(c) is backward — kinetic friction is generally less than limiting static friction.',
          },
          {
            label: 'Friction acts only on bodies that are moving.',
            nudge: '(d) ignores static friction, which acts on stationary bodies.',
          },
        ],
        correct: 1,
        solution: 'Friction opposes relative sliding, which is not the same as opposing a body’s motion. When you walk or a car accelerates, <b>static friction from the ground pushes you forward</b> — it is the driving force, not a retarding one.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Writing friction = <i>μN</i> unconditionally.</b> Static friction equals <i>μ</i><sub><i>s</i></sub><i>N</i> only at the verge of sliding. Below that, it equals whatever tangential force is applied (up to the limit). Always compute the limiting friction first, compare it with the driving force, and only then decide whether the body is static (friction = applied force) or sliding (friction = <i>μ</i><sub><i>k</i></sub><i>N</i>).',
          '<b>Skipping the “does it move?” check on inclines.</b> A block on a rough incline stays put if tan <i>θ</i> ≤ <i>μ</i><sub><i>s</i></sub> (i.e. <i>θ</i> ≤ angle of repose). Plugging into <i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ</i><sub><i>k</i></sub> cos <i>θ</i>) when the block isn’t actually sliding gives a fictitious “acceleration” — check tan <i>θ</i> versus <i>μ</i><sub><i>s</i></sub> first.',
          '<b>Believing friction depends on contact area.</b> It doesn’t (to exam approximation). A brick resting on its large face or its small face experiences the same limiting friction, because <i>N</i> is unchanged.',
          '<b>Thinking friction always opposes motion.</b> Friction opposes relative sliding between surfaces. Static friction frequently causes a body to accelerate — it’s what lets you walk and what drives a car’s tyres forward.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the angle of repose shortcut.</b> Whenever a problem says a body “just begins to slide on an incline of angle <i>θ</i>,” instantly write <i>μ</i><sub><i>s</i></sub> = tan <i>θ</i> — no force resolution required. And on any incline question, your first scratch-pad line should compare tan <i>θ</i> with <i>μ</i>: it tells you in one step whether you’re in the static or kinetic regime.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Static friction (below limit)',
            note: 'equals the applied force, with <i>f</i><sub><i>s</i></sub> ≤ <i>μ</i><sub><i>s</i></sub><i>N</i>',
          },
          { f: 'Limiting friction', note: '<i>f</i><sub><i>s</i></sub><sup>max</sup> = <i>μ</i><sub><i>s</i></sub><i>N</i>' },
          { f: 'Kinetic friction', note: '<i>f</i><sub><i>k</i></sub> = <i>μ</i><sub><i>k</i></sub><i>N</i>' },
          {
            f: 'Coefficient of friction',
            note: '<i>μ</i> = <i>f</i>/<i>N</i>, dimensionless, <i>μ</i><sub><i>s</i></sub> ≥ <i>μ</i><sub><i>k</i></sub>',
          },
          { f: 'Angle of friction', note: 'tan <i>λ</i> = <i>μ</i>' },
          {
            f: 'Angle of repose',
            note: 'tan <i>θ</i><sub><i>r</i></sub> = <i>μ</i><sub><i>s</i></sub>, and <i>θ</i><sub><i>r</i></sub> = <i>λ</i>',
          },
          {
            f: 'Sliding down rough incline',
            note: '<i>a</i> = <i>g</i>(sin <i>θ</i> − <i>μ</i><sub><i>k</i></sub> cos <i>θ</i>)',
          },
          {
            f: 'Minimum drag force',
            note: '<i>F</i><sub>min</sub> = <i>μmg</i>/√(1 + <i>μ</i><sup>2</sup>) = <i>mg</i> sin <i>λ</i> at <i>θ</i> = <i>λ</i>',
          },
          {
            f: '<b>Static friction is self-adjusting</b>',
            note: 'it equals the applied force up to a maximum of <i>μ</i><sub><i>s</i></sub><i>N</i>; only then does sliding begin and <i>f</i><sub><i>k</i></sub> = <i>μ</i><sub><i>k</i></sub><i>N</i> take over.',
          },
          { f: '<b>Friction depends on the normal force, not the contact area.</b>', note: '' },
          {
            f: '<b>Angle of repose = angle of friction</b>',
            note: 'tan <i>θ</i><sub><i>r</i></sub> = <i>μ</i><sub><i>s</i></sub>, independent of mass.',
          },
          { f: '<b>Compare</b> tan <i>θ</i> <b>with</b> <i>μ</i> to decide whether a block on an incline slides.', note: '' },
          { f: 'The <b>optimal drag angle</b> equals the angle of friction <i>λ</i>.', note: '' },
        ],
        aids: [
          '“Static is shy and self-adjusting; kinetic is constant and a little weaker.”',
          'For the angles: “Repose = friction = tan<sup>−1</sup> <i>μ</i>.”',
        ],
      },
    ],
  },

  {
    n: '05',
    title: 'Circular Motion Dynamics (Banking)',
    kalam:
      'Here’s the foundational truth, and it surprises most students: a body moving in a circle at constant speed is still accelerating.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield application of Newton’s laws. JEE Main asks 1–2 questions a year on banking, friction-limited cornering, or conical-pendulum-type setups. NEET favors the conceptual side — what provides centripetal force, why a cyclist leans, the design-speed idea. JEE Advanced builds it into friction-plus-banking ranges and rotating-frame problems. CBSE Board exams reliably set the banking-angle derivation as a 3–5 mark question.',
      },
      {
        t: 'p',
        html: 'Watch a car take a sharp turn on a flat road and you feel it: your body is flung toward the outer side of the car. Watch a cyclist round a corner at speed and you’ll notice she leans inward, almost dangerously so. Watch the daredevil “maut ka kuan” (well of death) at a village mela — a motorcyclist roaring around the inside of a vertical wooden cylinder, defying gravity. Every one of these is the same physics: <b>the dynamics of circular motion.</b>',
      },
      {
        t: 'p',
        html: 'Here’s the foundational truth, and it surprises most students: a body moving in a circle at constant speed is still <b>accelerating</b>. Its speed isn’t changing, but its direction is changing every instant — and velocity is a vector, so a changing direction means a changing velocity, which means acceleration. This acceleration points always toward the <b>centre</b> of the circle, and has magnitude<br><i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i><br>By Newton’s second law, an acceleration needs a force. So circular motion demands a net inward force, called the <b>centripetal force</b>, of magnitude <i>mv</i><sup>2</sup>/<i>r</i>. This is the single most misunderstood point in the topic: centripetal force is <b>not a new kind of force</b>. It is the name for the role played by whatever real force happens to point toward the centre — friction for a turning car, tension for a stone on a string, gravity for a satellite, the normal reaction for the well-of-death rider. Identify the real inward force, set it equal to <i>mv</i><sup>2</sup>/<i>r</i>, and you’ve solved the problem.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> When your car turns left and you lurch right, no real force pushed you outward. Your body, obeying inertia, simply wanted to keep going straight, while the car curved away beneath you. The seat (or the door) then pushes you inward to make you turn with the car. From inside the accelerating car you can pretend there’s an outward force — the <b>centrifugal force</b> — but it is a <b>pseudo-force</b>, a bookkeeping fiction valid only in the rotating (non-inertial) frame. In the ground frame there is no such outward force; there is only the inward centripetal force and inertia. (Note: centripetal and centrifugal forces are not an action–reaction pair — they act on the same body, just described from two different frames.)',
      },
      {
        t: 'p',
        html: 'Now to the headline application — <b>turning on roads.</b> A turning vehicle needs an inward force. It can come three ways: <b>friction alone</b> (the road is flat and friction grips the tyres inward), <b>banking alone</b> (the road is tilted so the normal reaction leans inward), or <b>both together</b> (real roads). On a flat road, friction is the only ally — but friction is unreliable on wet or icy surfaces and runs out at high speed. So engineers <b>bank</b> the curve: they raise the outer edge, tilting the road so that a component of the (always-present) normal reaction points toward the centre and supplies the centripetal force without relying on friction at all. This is why highway curves and railway tracks are visibly tilted.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• The formulas assume <b>uniform circular motion</b> — constant speed, so no tangential acceleration.<br>• “Friction only” <i>v</i><sub>max</sub> = √(<i>μrg</i>) uses the <b>limiting</b> static friction; below this speed the car corners safely with friction to spare.<br>• A road banked for one <b>design speed</b> is friction-free only at that speed; above or below it, friction must make up the difference.<br>• The vehicle is treated as a <b>point mass</b> — overturning (a torque effect) is a separate consideration from skidding.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Centripetal acceleration and force',
        main: '<i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i><br><i>F</i><sub><i>c</i></sub> = <i>mv</i><sup>2</sup>/<i>r</i> = <i>mω</i><sup>2</sup><i>r</i>',
        legend: [
          '<i>F</i><sub><i>c</i></sub> SI unit: newton — Dimensional formula: [M<sup>1</sup> L<sup>1</sup> T<sup>−2</sup>]',
          '<i>ω</i> (angular speed) unit: rad · s<sup>−1</sup> — Dimensional formula: [M<sup>0</sup> L<sup>0</sup> T<sup>−1</sup>]',
        ],
        note: null,
      },
      {
        t: 'def',
        term: 'Centrifugal force (pseudo-force in the rotating frame)',
        html: 'magnitude <i>mv</i><sup>2</sup>/<i>r</i>, directed radially <b>outward</b>.',
      },
      {
        t: 'formula',
        kicker: 'Turning on a level (unbanked) road — friction only',
        main: '<i>mv</i><sup>2</sup>/<i>r</i> ≤ <i>μ</i><sub><i>s</i></sub><i>mg</i> ⇒ <i>v</i><sub>max</sub> = √(<i>μ</i><sub><i>s</i></sub><i>rg</i>)',
        legend: [],
        note: '(Note: mass cancels — <i>v</i><sub>max</sub> is independent of the vehicle’s mass.)',
      },
      {
        t: 'formula',
        kicker: 'Banking of roads — frictionless (design speed)',
        main: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i> ⇒ <i>v</i><sub>design</sub> = √(<i>rg</i> tan <i>θ</i>)',
        legend: ['<i>θ</i> = the angle of banking'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Banking with friction — safe speed range',
        main: '<i>v</i><sub>max</sub> = √(<i>rg</i>(tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>))<br><i>v</i><sub>min</sub> = √(<i>rg</i>(tan <i>θ</i> − <i>μ</i>)/(1 + <i>μ</i> tan <i>θ</i>))',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Cyclist leaning into a turn (lean angle θ from vertical)',
        main: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>',
        legend: [],
        note: '(identical in form to the banking relation).',
      },
      {
        t: 'formula',
        kicker: 'Conical pendulum / horizontal circular swing (string at angle θ to vertical)',
        main: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Angle of banking on a frictionless road.</b> Setup: A vehicle of mass <i>m</i> moves at speed <i>v</i> around a curve of radius <i>r</i> on a road banked at angle <i>θ</i>. Assume the road is smooth (no friction), so only two forces act: the weight <i>mg</i> (vertically down) and the normal reaction <i>N</i> (perpendicular to the road surface).',
      },
      { t: 'fig', id: 'p11-04-fig-4.6' },
      {
        t: 'p',
        html: 'The normal reaction, being perpendicular to the tilted road, leans inward. Resolve it:<br>• Vertical component: <i>N</i> cos <i>θ</i> (upward)<br>• Horizontal component: <i>N</i> sin <i>θ</i> (pointing toward the centre of the circle)<br>Why these two equations? Vertically the car neither rises nor sinks, so vertical forces balance. Horizontally the car accelerates toward the centre, so the net horizontal force is the centripetal force.',
      },
      {
        t: 'p',
        html: '<b>Vertical balance:</b><br><i>N</i> cos <i>θ</i> = <i>mg</i>   ...(1)<br><b>Horizontal (centripetal) equation:</b><br><i>N</i> sin <i>θ</i> = <i>mv</i><sup>2</sup>/<i>r</i>   ...(2)<br>Divide (2) by (1) — the <i>N</i> and <i>m</i> cancel beautifully:<br>tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>',
      },
      {
        t: 'p',
        html: 'Physical reading: the required banking angle depends only on the speed and radius, <b>not on the vehicle’s mass</b> — a truck and a scooter need the same banked curve. This is exactly the geometry of a leaning cyclist and a conical pendulum, which is why all three share the same formula.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Maximum safe speed on a banked road with friction.</b> Setup: Same banked road (angle <i>θ</i>, radius <i>r</i>), now with coefficient of friction <i>μ</i>. At the <b>maximum</b> speed, the vehicle tends to skid outward and up the bank, so limiting friction <i>f</i> = <i>μN</i> acts down the slope (toward the inner edge), helping to hold the car in.',
      },
      { t: 'fig', id: 'p11-04-fig-4.7' },
      {
        t: 'p',
        html: 'Resolve all forces into vertical and horizontal (centripetal) directions.<br><b>Vertical balance</b> (<i>N</i> up-component supports weight plus friction’s downward component):<br><i>N</i> cos <i>θ</i> = <i>mg</i> + <i>μN</i> sin <i>θ</i> ⇒ <i>N</i>(cos <i>θ</i> − <i>μ</i> sin <i>θ</i>) = <i>mg</i>   ...(1)<br><b>Horizontal (centripetal)</b> (both <i>N</i> and friction contribute inward):<br><i>N</i> sin <i>θ</i> + <i>μN</i> cos <i>θ</i> = <i>mv</i><sub>max</sub><sup>2</sup>/<i>r</i> ⇒ <i>N</i>(sin <i>θ</i> + <i>μ</i> cos <i>θ</i>) = <i>mv</i><sub>max</sub><sup>2</sup>/<i>r</i>   ...(2)<br>Divide (2) by (1):<br><i>v</i><sub>max</sub><sup>2</sup>/<i>rg</i> = (sin <i>θ</i> + <i>μ</i> cos <i>θ</i>)/(cos <i>θ</i> − <i>μ</i> sin <i>θ</i>)<br>Divide numerator and denominator by cos <i>θ</i>:<br><i>v</i><sub>max</sub> = √(<i>rg</i>(tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>))',
      },
      {
        t: 'p',
        html: 'The minimum speed follows by flipping the direction of friction (the car now tends to slip down, so friction acts up the slope): swap the signs of <i>μ</i>, giving <i>v</i><sub>min</sub> = √(<i>rg</i>(tan <i>θ</i> − <i>μ</i>)/(1 + <i>μ</i> tan <i>θ</i>)). Between these two speeds the curve can be taken safely.<br><br>Sanity check: set <i>μ</i> = 0 and both formulas collapse to <i>v</i> = √(<i>rg</i> tan <i>θ</i>) — the single frictionless design speed, exactly as Derivation 1 demands.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A curved highway of radius 200 m is to be banked so that a car can take the turn at 20 m/s without relying on friction. Find the required angle of banking. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>Given:</b> <i>r</i> = 200 m, <i>v</i> = 20 m/s, frictionless design.',
          '<b>Step 1 — Apply the banking relation.</b><br>tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i> = (20)<sup>2</sup>/(200 × 10) = 400/2000 = 0.2',
          '<b>Step 2 — Solve for the angle.</b><br><i>θ</i> = tan<sup>−1</sup>(0.2) ≈ 11.3°',
          '<b>Presentation note:</b> state clearly that this is the design speed angle — the curve is friction-free only at 20 m/s. Boards often award a mark for noting that the answer is independent of the car’s mass.',
        ],
        ans: 'The road should be banked at about 11.3°.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A car rounds a flat, unbanked curve of radius 20 m. If the coefficient of friction between the tyres and the road is 0.5, what is the maximum speed at which the car can turn without skidding? Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>The trap:</b> students drag in the car’s mass, or forget the square root and report <i>μrg</i> = 100 as a speed.',
          '<b>The shortcut:</b> on a flat road friction alone supplies the centripetal force, so <i>v</i><sub>max</sub> = √(<i>μrg</i>) — mass-free:<br><i>v</i><sub>max</sub> = √(0.5 × 20 × 10) = √100 = 10 m/s',
          '<b>Speed tip:</b> memorize <i>v</i><sub>max</sub> = √(<i>μrg</i>) for flat turns and notice the numbers are chosen to give a perfect square — exam-setters love <i>μrg</i> = 100. Any option that scales with mass is wrong on inspection, since mass cancels.',
        ],
        ans: '10 m/s.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A circular road of radius 90 m is banked at an angle <i>θ</i> where tan <i>θ</i> = 0.5. The coefficient of friction between the tyres and the road is <i>μ</i> = 0.5. Find the maximum speed at which a car can safely round the curve. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'This needs the <b>banking-plus-friction</b> formula — a true multi-effect problem.',
          '<b>Step 1 — Identify the quantities.</b> <i>r</i> = 90 m, tan <i>θ</i> = 0.5, <i>μ</i> = 0.5, <i>g</i> = 10.',
          '<b>Step 2 — Apply the maximum-speed formula.</b><br><i>v</i><sub>max</sub> = √(<i>rg</i>(tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>)) = √(90 × 10 × (0.5 + 0.5)/(1 − (0.5)(0.5)))',
          '<b>Step 3 — Evaluate the bracket.</b><br>(0.5 + 0.5)/(1 − 0.25) = 1.0/0.75 = 4/3',
          '<b>Step 4 — Finish.</b><br><i>v</i><sub>max</sub> = √(900 × 4/3) = √1200 ≈ 34.6 m/s',
          '<b>Insight:</b> compare with the frictionless design speed √(<i>rg</i> tan <i>θ</i>) = √(900 × 0.5) = √450 ≈ 21.2 m/s. Friction widens the safe window dramatically — here it raises the ceiling from 21 to 35 m/s. The denominator (1 − <i>μ</i> tan <i>θ</i>) is the easy place to slip; guard it carefully.',
        ],
        ans: 'The maximum safe speed is √1200 ≈ 34.6 m/s (about 125 km/h).',
      },
      {
        t: 'ex',
        fig: 'p11-04-fig-4.8',
        tag: 'JEE Advanced Level',
        q: 'At a village fair, a stunt rider performs in the “well of death” — riding around the inside of a vertical cylindrical wall of radius 3 m. The coefficient of friction between the tyres and the wall is <i>μ</i> = 0.6. Find the minimum speed the rider must maintain so as not to slide down. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'This is the showpiece — friction acting vertically while the normal reaction plays the centripetal role. Pure JEE Advanced reasoning.',
          '<b>Step 1 — Identify the forces.</b> The wall pushes the rider horizontally inward — this normal reaction <i>N</i> is the centripetal force. Gravity <i>mg</i> pulls down. Friction <i>f</i> acts up the wall (opposing the tendency to slide down), and it is the only thing holding the rider up.',
          '<b>Step 2 — Centripetal (horizontal) equation.</b> The normal reaction supplies the centripetal force:<br><i>N</i> = <i>mv</i><sup>2</sup>/<i>r</i>',
          '<b>Step 3 — Vertical equilibrium.</b> Friction must support the full weight, and friction cannot exceed <i>μN</i>:<br><i>f</i> = <i>mg</i>,   <i>f</i> ≤ <i>μN</i>',
          '<b>Step 4 — Combine.</b> For the rider not to slide, <i>mg</i> ≤ <i>μN</i> = <i>μmv</i><sup>2</sup>/<i>r</i>. The mass cancels:<br><i>g</i> ≤ <i>μv</i><sup>2</sup>/<i>r</i> ⇒ <i>v</i><sup>2</sup> ≥ <i>gr</i>/<i>μ</i> ⇒ <i>v</i><sub>min</sub> = √(<i>gr</i>/<i>μ</i>)',
          '<b>Step 5 — Substitute.</b><br><i>v</i><sub>min</sub> = √(10 × 3/0.6) = √50 ≈ 7.07 m/s',
          '<b>Deep insight:</b> notice the counterintuitive result — going faster is what keeps the rider up, because higher speed means a larger normal reaction, hence more available friction. Slow down too much and friction can no longer support the weight, and the rider slides. The mass cancelling means a heavy bike and a light one need the same minimum speed.',
        ],
        ans: 'The rider must maintain at least about 7.07 m/s.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A curved road of radius 50 m is banked for a design speed of 15 m/s. Find the angle of banking. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>θ</i> = tan<sup>−1</sup>(225/500) = tan<sup>−1</sup>(0.45) ≈ 24.2°',
          },
          {
            q: '[NEET] A car rounds an unbanked curve of radius 40 m with coefficient of friction 0.5 between the tyres and the road. Find the maximum speed for no skidding. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>v</i><sub>max</sub> = √(0.5 × 40 × 10) = √200 ≈ 14.1 m/s',
          },
          {
            q: '[JEE Main] A road of radius 90 m is banked at tan <i>θ</i> = 0.5, with coefficient of friction <i>μ</i> = 0.5 between tyres and road. Find the <b>minimum</b> speed at which a car can negotiate the curve without slipping down the bank. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>v</i><sub>min</sub> = √(900 × (0.5 − 0.5)/(1 + 0.25)) = 0 — friction alone holds it at any low speed (the bank is gentle enough that the car cannot slip down)',
          },
          {
            q: '[JEE Main] A stone of mass 0.5 kg tied to a string is whirled as a conical pendulum in a horizontal circle of radius 0.5 m, with the string making 30° with the vertical. Find the speed of the stone. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>v</i> = √(<i>rg</i> tan <i>θ</i>) = √(0.5 × 10 × tan 30°) = √2.887 ≈ 1.70 m/s',
          },
          {
            q: '[JEE Advanced] A motorcyclist rides on the inside vertical wall of a cylindrical “well of death” of radius 4 m. If the coefficient of friction between the tyres and the wall is 0.4, find the minimum speed required to avoid sliding down. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>v</i><sub>min</sub> = √(<i>gr</i>/<i>μ</i>) = √(10 × 4/0.4) = √100 = 10 m/s',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A car takes a turn on a flat, unbanked road at constant speed. The centripetal force acting on it is provided by:',
        opts: [
          {
            label: 'the forward thrust of the engine.',
            nudge: '(a) engine thrust acts along the direction of motion (tangential), not toward the centre.',
          },
          { label: 'the static friction between the tyres and the road.', nudge: null },
          {
            label: 'the weight of the car.',
            nudge: '(c) and (d) the weight and normal reaction are both vertical on a flat road and cannot contribute a horizontal centripetal force.',
          },
          {
            label: 'the normal reaction from the road.',
            nudge: '(c) and (d) the weight and normal reaction are both vertical on a flat road and cannot contribute a horizontal centripetal force.',
          },
        ],
        correct: 1,
        solution: 'On a flat road the only horizontal force available to point toward the centre is friction, so static friction supplies the centripetal force.',
      },
      {
        t: 'mcq',
        q: 'The centrifugal force is best described as:',
        opts: [
          {
            label: 'a real force directed toward the centre of the circular path.',
            nudge: '(a) it points outward, not inward, and is not real in the ground frame.',
          },
          {
            label: 'the Newton’s-third-law reaction to the centripetal force.',
            nudge: '(b) this is the classic trap — centripetal and centrifugal forces act on the same body in different frames, so they are <b>not</b> an action–reaction pair.',
          },
          {
            label: 'a pseudo-force, directed radially outward, experienced only in a rotating (non-inertial) frame.',
            nudge: null,
          },
          { label: 'a force always equal to the weight of the body.', nudge: '(d) there is no general relation to weight.' },
        ],
        correct: 2,
        solution: 'Centrifugal force is a fictitious force introduced to make Newton’s laws work in a rotating frame; it points outward and exists only in that non-inertial frame.',
      },
      {
        t: 'mcq',
        q: 'A road is banked for a particular design speed. When a vehicle travels at exactly that speed, the force of friction required between the tyres and the road is:',
        opts: [
          {
            label: 'maximum, equal to <i>μmg</i>.',
            nudge: '(a) friction is maximal only when the vehicle is at the edge of skidding, not at the design speed.',
          },
          {
            label: 'equal to <i>mg</i>.',
            nudge: '(b) and (d) assign friction a value it does not need to take; the whole purpose of banking is to make friction unnecessary at the design speed.',
          },
          { label: 'zero.', nudge: null },
          {
            label: 'equal to <i>mv</i><sup>2</sup>/<i>r</i>.',
            nudge: '(b) and (d) assign friction a value it does not need to take; the whole purpose of banking is to make friction unnecessary at the design speed.',
          },
        ],
        correct: 2,
        solution: 'At the design speed the horizontal component of the normal reaction alone supplies the entire centripetal force, so no friction is needed.',
      },
      {
        t: 'mcq',
        q: 'The maximum speed at which a car can safely round an unbanked curve of radius <i>r</i> (coefficient of friction <i>μ</i>):',
        opts: [
          { label: 'depends on the mass of the car.', nudge: '(a) and (c) invoke mass, which cancels out.' },
          { label: 'equals √(<i>μrg</i>) and is independent of the car’s mass.', nudge: null },
          { label: 'increases as the car’s mass increases.', nudge: '(a) and (c) invoke mass, which cancels out.' },
          {
            label: 'equals <i>μrg</i>.',
            nudge: '(d) forgets the square root — <i>μrg</i> has units of speed-squared, not speed.',
          },
        ],
        correct: 1,
        solution: 'Setting friction equal to the centripetal requirement, <i>μmg</i> = <i>mv</i><sup>2</sup>/<i>r</i>; the mass cancels, leaving <i>v</i><sub>max</sub> = √(<i>μrg</i>).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating centrifugal force as real in the ground frame.</b> In the inertial (ground) frame there is no outward force — only the inward centripetal force and inertia. Introduce centrifugal force only if you deliberately work in the rotating frame, and then add it as a pseudo-force pointing outward. Mixing the two frames in one equation is a guaranteed error.',
          '<b>Forgetting that mass cancels.</b> In friction-only cornering (<i>v</i> = √(<i>μrg</i>)), in banking (tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>), and in the well-of-death (<i>v</i><sub>min</sub> = √(<i>gr</i>/<i>μ</i>)), the mass drops out. If your final answer still contains <i>m</i>, recheck — you’ve likely missed a cancellation.',
          '<b>Botching the banking-plus-friction denominator.</b> The terms are (tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>) for maximum speed and (tan <i>θ</i> − <i>μ</i>)/(1 + <i>μ</i> tan <i>θ</i>) for minimum. Memorize that the <b>maximum</b> uses +<i>μ</i> on top and −<i>μ</i> tan <i>θ</i> below; the minimum flips both signs. Setting <i>μ</i> = 0 should recover tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i> — use that as an instant check.',
          '<b>Confusing “centripetal” with a new force.</b> Always ask “which real force points toward the centre here?” — friction, tension, normal reaction, gravity — and set that equal to <i>mv</i><sup>2</sup>/<i>r</i>. Writing “centripetal force” as an extra force in the free-body diagram (on top of the real ones) double-counts and gives wrong answers.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the design-speed check.</b> For any banking-with-friction problem, first compute the frictionless design speed √(<i>rg</i> tan <i>θ</i>). The friction-assisted <i>v</i><sub>max</sub> must be larger and <i>v</i><sub>min</sub> smaller than this value. If your range doesn’t straddle the design speed, you’ve made a sign error in the friction direction.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Centripetal force',
            note: '<i>F</i><sub><i>c</i></sub> = <i>mv</i><sup>2</sup>/<i>r</i> = <i>mω</i><sup>2</sup><i>r</i> (toward centre)',
          },
          { f: 'Flat road, friction only', note: '<i>v</i><sub>max</sub> = √(<i>μrg</i>)' },
          { f: 'Banking, frictionless', note: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>' },
          {
            f: 'Banking + friction (max)',
            note: '<i>v</i><sub>max</sub> = √(<i>rg</i>(tan <i>θ</i> + <i>μ</i>)/(1 − <i>μ</i> tan <i>θ</i>))',
          },
          {
            f: 'Banking + friction (min)',
            note: '<i>v</i><sub>min</sub> = √(<i>rg</i>(tan <i>θ</i> − <i>μ</i>)/(1 + <i>μ</i> tan <i>θ</i>))',
          },
          { f: 'Leaning cyclist / conical pendulum', note: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i>' },
          { f: 'Well of death (rotor)', note: '<i>v</i><sub>min</sub> = √(<i>gr</i>/<i>μ</i>)' },
          {
            f: '<b>Centripetal force is a role, not a new force</b>',
            note: 'identify the real inward force and set it to <i>mv</i><sup>2</sup>/<i>r</i>.',
          },
          {
            f: '<b>Centrifugal force is a pseudo-force</b>, outward, valid only in the rotating frame; not the reaction to centripetal force.',
            note: '',
          },
          { f: '<b>Mass cancels</b> in nearly every banking and friction-limited result.', note: '' },
          {
            f: '<b>Banking</b> lets the normal reaction supply the centripetal force; at the design speed, friction is <b>zero</b>.',
            note: '',
          },
          {
            f: 'The <b>same formula</b> tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i> governs banking, leaning cyclists, and conical pendulums.',
            note: '',
          },
        ],
        aids: [
          '“The centre pulls, inertia flings.”',
          'For banking: “tan <i>θ</i> equals v-squared over r-g.”',
          'For the well of death: “faster means safer.”',
        ],
      },
    ],
  },
];
