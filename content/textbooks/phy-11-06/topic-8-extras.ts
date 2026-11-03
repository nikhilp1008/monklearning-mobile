import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topic 08 and the six Additional Topics, word for word from the
 * Class 11 Physics Master Reference, pages 429 to 455: Rolling Motion
 * (pp. 429 to 439, with Figures 6.11 and 6.12), then the addenda's shared
 * opening (p. 440, set at the head of Addendum A) and A Velocity and
 * Acceleration of Every Point on a Rolling Body (pp. 440 to 443), B Massive
 * Pulleys (pp. 443 to 445), C Slipping into Rolling (pp. 445 to 447),
 * D Collisions on a Free Rigid Body (pp. 447 to 450), E The Physical Pendulum
 * (pp. 450 to 452) and F Over a Step (pp. 452 to 455). The addenda print no
 * drawings.
 */
export const TOPICS: Topic[] = [
  {
    n: '08',
    title: 'Rolling Motion',
    kalam: 'This is the chapter’s grand finale — it fuses translation and rotation into one motion.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the chapter’s grand finale — it fuses translation and rotation into one motion. JEE Main asks 1–2 questions yearly: inclined-plane acceleration, the kinetic-energy split, or the “which body wins the race” classic. NEET loves the energy ratio and the race ordering. JEE Advanced pushes into rolling-with-slipping transitions and friction analysis. CBSE Boards wants the rolling kinetic energy expression and the pure-rolling condition <i>v</i> = <i>Rω</i>.',
      },
      {
        t: 'p',
        html: 'Everything you’ve built across this chapter — centre of mass, torque, moment of inertia, rotational dynamics — comes together here in the most familiar motion of all: a wheel rolling along a road. Rolling looks simple, but it hides a beautiful secret. <b>A rolling body is doing two things at once:</b> its centre of mass is gliding forward (pure translation, the first type of motion in Topic 01), and at the same time the body is spinning about that centre (pure rotation, Topics 04, 06 and 07). Rolling is the superposition of these two.<br><br>Here’s the secret that makes rolling special. In <b>pure rolling</b> — rolling without slipping — the point of the body touching the ground is, for that instant, completely at rest. Think about a car tyre on the highway. The patch of rubber kissing the road isn’t skidding or smearing; it’s momentarily stationary, which is exactly why your tyres grip instead of sliding. The forward translation of the centre and the backward sweep of the spinning rim cancel perfectly at the bottom.<br><br>This cancellation produces a striking velocity pattern. The contact point at the bottom has speed <b>zero</b>. The centre moves at speed <i>v</i>. And the top point races along at 2<i>v</i> — twice the speed of the car itself. Photograph a moving wheel and the spokes near the top are a blur while the spokes at the bottom look sharp; the camera is telling you the bottom is barely moving.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Walking is rolling in disguise. When you stride, your planted foot stays fixed on the ground (momentarily at rest) while your whole body pivots forward over it. The foot is your “contact point.” That’s pure rolling, performed by your legs.',
      },
      {
        t: 'p',
        html: 'There’s a clean way to see the velocity pattern: imagine the rolling motion as two transparent pictures laid on top of each other. In the first, every point of the wheel slides forward at the centre’s speed <i>v</i> (pure translation). In the second, every point whirls around the centre at rim-speed <i>Rω</i> = <i>v</i> (pure rotation). Add the two at the bottom: the translation points forward, the rotation points backward, and they cancel to zero. Add them at the top: both point forward, giving 2<i>v</i>. This “superposition” trick — translation of the centre plus rotation about the centre — lets you find the velocity of any point on a rolling body, and it’s the same centre-of-mass decomposition you met in Topic 01, now applied to a spinning wheel.<br><br>The pure-rolling condition that links the two motions is gorgeously simple:<br><i>v</i><sub>cm</sub> = <i>Rω</i><br>Translation speed equals radius times spin rate. This one equation is the bridge between everything linear and everything angular in this subtopic.',
      },
      {
        t: 'p',
        html: 'Because a rolling body stores energy in both motions, it carries more kinetic energy than a sliding body of the same speed — part of the energy is “locked up” in spinning. This leads to the single most famous demonstration in rotational physics: the <b>race down a ramp</b>. Release a solid sphere, a disc, and a ring from the same height at the same instant. They do not tie. The body that diverts the least energy into spinning reaches the bottom first. The solid sphere wins, the disc comes second, and the ring trails last — and astonishingly, this order does not depend on their masses or radii, only on their shape (how their mass is distributed). A marble beats a ring every time, whether the marble is tiny or huge.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>1. <b>Accelerated pure rolling (e.g. down an incline) requires friction — yet that friction does no work.</b> Static friction supplies the torque that keeps <i>v</i> = <i>Rω</i>, but since the contact point doesn’t move, it dissipates no energy. This surprises almost everyone.<br>2. <b>On a perfectly frictionless incline, a body cannot roll — it only slides.</b> With no friction there’s no torque to spin it up, so <i>ω</i> stays zero while it slides down.<br>3. <b>The condition <i>v</i> = <i>Rω</i> holds only for pure rolling.</b> The moment slipping begins (a hard brake, an icy patch), <i>v</i> ≠ <i>Rω</i> and you’re in “rolling with slipping.”',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Pure rolling (no slipping) conditions',
        main: '<i>v</i><sub>cm</sub> = <i>Rω</i><br><i>a</i><sub>cm</sub> = <i>Rα</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Velocities of key points',
        main: '<i>v</i><sub>contact</sub> = 0<br><i>v</i><sub>centre</sub> = <i>v</i><br><i>v</i><sub>top</sub> = 2<i>v</i>',
        legend: [],
        note: '(for a body rolling at centre-speed <i>v</i>)',
      },
      {
        t: 'formula',
        kicker: 'Total kinetic energy',
        main: '<i>K</i> = ½<i>mv</i><sup>2</sup> + ½<i>Iω</i><sup>2</sup> = ½<i>mv</i><sup>2</sup>(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)<br>The translational and rotational shares are in the ratio:<br><i>K</i><sub>trans</sub> ∶ <i>K</i><sub>rot</sub> = 1 ∶ <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>',
        legend: ['<i>k</i> = the radius of gyration (<i>I</i> = <i>mk</i><sup>2</sup>)'],
        note: '(translation + rotation), using <i>I</i> = <i>mk</i><sup>2</sup> and <i>v</i> = <i>Rω</i>',
      },
      {
        t: 'formula',
        kicker: 'Rolling down an incline of angle θ',
        main: '<i>a</i> = (<i>g</i> sin <i>θ</i>)/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)<br><i>v</i><sub>bottom</sub> = √(2<i>gh</i>/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>))',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Friction required and minimum coefficient for pure rolling',
        main: '<i>f</i> = (<i>mg</i> sin <i>θ</i>)/(1 + <i>R</i><sup>2</sup>/<i>k</i><sup>2</sup>)<br><i>μ</i><sub>min</sub> = tan <i>θ</i>/(1 + <i>R</i><sup>2</sup>/<i>k</i><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'The master table (the smaller k²/R², the faster the body)',
        head: ['Body', 'k²/R²', '1 + k²/R²', 'Acceleration on incline'],
        rows: [
          ['Solid sphere', '2/5', '7/5', '(5/7)<i>g</i> sin <i>θ</i>'],
          ['Solid cylinder / disc', '1/2', '3/2', '(2/3)<i>g</i> sin <i>θ</i>'],
          ['Spherical shell', '2/3', '5/3', '(3/5)<i>g</i> sin <i>θ</i>'],
          ['Ring / hollow cylinder', '1', '2', '½<i>g</i> sin <i>θ</i>'],
        ],
      },
      {
        t: 'p',
        html: '<b>Notation:</b> <i>v</i><sub>cm</sub> = centre-of-mass speed, <i>ω</i> = angular speed, <i>R</i> = radius, <i>k</i> = radius of gyration, <i>h</i> = vertical height descended. SI unit of KE is the joule; dimensional formula [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>].',
      },

      { t: 'part', title: 'CBSE board derivation — A body rolling down an incline' },
      {
        t: 'p',
        html: 'We derive the acceleration of a round body rolling without slipping down an incline of angle <i>θ</i> — the most-asked rolling derivation in boards and a complete showcase of the chapter’s tools.',
      },
      { t: 'fig', id: 'p11-06-fig-6.11' },
      {
        t: 'p',
        html: '<b>Step 1 — Translation equation (Newton’s second law along the incline).</b> The forces along the incline are the gravity component <i>mg</i> sin <i>θ</i> pulling down and friction <i>f</i> acting up:<br><i>mg</i> sin <i>θ</i> − <i>f</i> = <i>ma</i>   ...(i)',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Rotation equation (torque about the centre of mass).</b> Of the forces, only friction has a moment arm about the centre (gravity acts through the centre, and the normal force’s line passes through it too). So friction alone provides the torque:<br><i>τ</i> = <i>fR</i> = <i>Iα</i><br>Writing <i>I</i> = <i>mk</i><sup>2</sup> and using the pure-rolling link <i>α</i> = <i>a</i>/<i>R</i>:<br><i>fR</i> = <i>mk</i><sup>2</sup> · <i>a</i>/<i>R</i> ⇒ <i>f</i> = <i>mk</i><sup>2</sup><i>a</i>/<i>R</i><sup>2</sup>   ...(ii)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Eliminate friction.</b> Substitute (ii) into (i):<br><i>mg</i> sin <i>θ</i> − <i>mk</i><sup>2</sup><i>a</i>/<i>R</i><sup>2</sup> = <i>ma</i>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Solve for <i>a</i>.</b> Cancel <i>m</i> and collect terms:<br><i>g</i> sin <i>θ</i> = <i>a</i>(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>) ⇒ <i>a</i> = (<i>g</i> sin <i>θ</i>)/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)',
      },
      {
        t: 'p',
        html: '<b>The physical insight:</b> the term <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> in the denominator is the “rotational tax.” A body that distributes its mass far from the axis (large <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>, like a ring) pays a heavier tax — more of gravity’s pull goes into spinning it up, so it accelerates more slowly. This single formula explains the entire race result.',
      },
      {
        t: 'p',
        html: '<b>Companion derivation: rolling kinetic energy</b><br>The total kinetic energy is the translational KE of the centre of mass plus the rotational KE about it:<br><i>K</i> = ½<i>mv</i><sup>2</sup> + ½<i>Iω</i><sup>2</sup><br>Substitute <i>I</i> = <i>mk</i><sup>2</sup> and <i>ω</i> = <i>v</i>/<i>R</i>:<br><i>K</i> = ½<i>mv</i><sup>2</sup> + ½<i>mk</i><sup>2</sup> · <i>v</i><sup>2</sup>/<i>R</i><sup>2</sup> = ½<i>mv</i><sup>2</sup>(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)<br>This is the same “1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>” factor — appearing now in energy. Setting this equal to the lost potential energy <i>mgh</i> on an incline immediately gives <i>v</i><sub>bottom</sub> = √(2<i>gh</i>/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)).',
      },
      {
        t: 'p',
        html: '<b>Companion result: how much friction is needed?</b><br>The friction force itself follows from substituting the acceleration back into equation (ii):<br><i>f</i> = (<i>mk</i><sup>2</sup>/<i>R</i><sup>2</sup>) · <i>a</i> = (<i>mk</i><sup>2</sup>/<i>R</i><sup>2</sup>) · (<i>g</i> sin <i>θ</i>)/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>) = (<i>mg</i> sin <i>θ</i>)/(1 + <i>R</i><sup>2</sup>/<i>k</i><sup>2</sup>)<br>For pure rolling to be possible, the surface must be able to supply at least this much friction. Since the available static friction is at most <i>μN</i> = <i>μ mg</i> cos <i>θ</i>, the condition <i>f</i> ≤ <i>μ mg</i> cos <i>θ</i> rearranges to:<br><i>μ</i><sub>min</sub> = tan <i>θ</i>/(1 + <i>R</i><sup>2</sup>/<i>k</i><sup>2</sup>)<br>If the actual <i>μ</i> falls below this, the body can no longer maintain <i>v</i> = <i>Rω</i> and begins to slip — which is exactly why a steep, smooth slope makes even a well-shaped wheel skid rather than roll.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A solid sphere of mass <i>m</i> rolls without slipping with centre-of-mass speed <i>v</i>. Find its total kinetic energy and the fraction of that energy which is rotational.',
        steps: [
          '<b>Given:</b> solid sphere, so <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/5.',
          '<b>Total kinetic energy:</b><br><i>K</i> = ½<i>mv</i><sup>2</sup>(1 + 2/5) = ½<i>mv</i><sup>2</sup> · 7/5 = (7/10)<i>mv</i><sup>2</sup>',
          '<b>Rotational fraction</b> — using <i>K</i><sub>trans</sub> ∶ <i>K</i><sub>rot</sub> = 1 ∶ <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1 ∶ 2/5 = 5 ∶ 2:<br><i>K</i><sub>rot</sub>/<i>K</i><sub>total</sub> = 2/(5 + 2) = 2/7',
        ],
        ans: 'Total KE = (7/10)<i>mv</i><sup>2</sup>; rotational energy is 2/7 of the total.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A solid sphere, a disc, and a ring — all released from rest at the same height on identical inclines. In what order do they reach the bottom?',
        steps: [
          '<b>The trap:</b> Students hunt for masses and radii. But the acceleration <i>a</i> = (<i>g</i> sin <i>θ</i>)/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>) depends <b>only</b> on <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> — mass and radius cancel out entirely.',
          '<b>Mental shortcut — smallest <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> accelerates fastest.</b><br>• Solid sphere: <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/5 = 0.40 → fastest<br>• Disc: <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1/2 = 0.50 → middle<br>• Ring: <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1 → slowest',
        ],
        ans: '<b>Sphere first, disc second, ring last</b> — regardless of their masses or sizes. Sanity check: the ring keeps all its mass at the rim, so it pays the biggest “rotational tax” and crawls. The compact sphere spends the least energy spinning and wins. ✓',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A uniform disc rolls without slipping down an incline of angle 30°. Find (a) its acceleration and (b) the minimum coefficient of static friction required for pure rolling.',
        steps: [
          '<b>Given:</b> disc, <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1/2, <i>θ</i> = 30°.',
          '<b>(a) Acceleration:</b><br><i>a</i> = (<i>g</i> sin 30°)/(1 + ½) = (<i>g</i> · ½)/(3/2) = <i>g</i>/3',
          '<b>(b) Minimum friction coefficient</b> — this couples translation, rotation, and the friction limit:<br><i>μ</i><sub>min</sub> = tan <i>θ</i>/(1 + <i>R</i><sup>2</sup>/<i>k</i><sup>2</sup>) = tan 30°/(1 + 2) = (1/√3)/3 = 1/(3√3) ≈ 0.19',
        ],
        ans: '<i>a</i> = <i>g</i>/3 and <i>μ</i><sub>min</sub> = 1/(3√3) ≈ 0.19. Why multi-concept: part (a) needs the rolling-incline result, while part (b) needs you to back out the friction force and compare it to <i>μN</i> — combining rolling dynamics with the friction inequality.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p11-06-fig-6.12',
        q: 'A solid sphere is thrown onto a rough horizontal floor with initial speed <i>v</i><sub>0</sub> but no spin (it is purely sliding). Friction acts until pure rolling begins. Find the final speed of the centre of mass when pure rolling starts.',
        steps: [
          '<b>The elegant method — conserve angular momentum about a point on the floor.</b> Friction acts at the contact line on the floor, so it has zero torque about any point on the floor; the weight and the normal reaction are equal, opposite and act along the same vertical line, so their torques cancel. Hence the sphere’s angular momentum about a floor point is conserved throughout the sliding phase. This ties straight back to the “take <i>L</i> about the contact point” trick from the angular-momentum subtopic.',
          '<b>Step 1 — Initial angular momentum about the floor point.</b> Only the translating centre contributes (<i>ω</i><sub>0</sub> = 0):<br><i>L</i><sub><i>i</i></sub> = <i>mv</i><sub>0</sub><i>R</i>',
          '<b>Step 2 — Final angular momentum (pure rolling, <i>v</i> = <i>Rω</i>).</b> About the contact point, <i>I</i><sub>contact</sub> = <i>I</i><sub>cm</sub> + <i>mR</i><sup>2</sup> = (2/5)<i>mR</i><sup>2</sup> + <i>mR</i><sup>2</sup> = (7/5)<i>mR</i><sup>2</sup>:<br><i>L</i><sub><i>f</i></sub> = <i>I</i><sub>contact</sub><i>ω</i> = (7/5)<i>mR</i><sup>2</sup> · <i>v</i>/<i>R</i> = (7/5)<i>mRv</i>',
          '<b>Step 3 — Equate and solve.</b><br><i>mv</i><sub>0</sub><i>R</i> = (7/5)<i>mRv</i> ⇒ <i>v</i> = (5/7)<i>v</i><sub>0</sub>',
        ],
        ans: 'Pure rolling begins when the centre-of-mass speed has dropped to <i>v</i> = (5/7)<i>v</i><sub>0</sub>. Note: the force-and-torque method (friction decelerates translation, <i>v</i> = <i>v</i><sub>0</sub> − <i>μgt</i>, while spinning it up, <i>ω</i> = (5<i>μg</i>/(2<i>R</i>))<i>t</i>, then impose <i>v</i> = <i>Rω</i>) gives the identical (5/7)<i>v</i><sub>0</sub> — but the angular-momentum route skips <i>μ</i> and <i>t</i> entirely.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A ring rolls without slipping at centre speed <i>v</i>. What fraction of its total kinetic energy is translational?',
            a: '1/2 (since ring has <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 1, the split is 1 ∶ 1).',
          },
          {
            q: '[NEET] A body rolls down an incline with acceleration (3/5)<i>g</i> sin <i>θ</i>. Identify the body.',
            a: 'A spherical shell (<i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/3).',
          },
          {
            q: '[JEE Main] A solid sphere and a hollow sphere of the same mass and radius roll down the same incline. Find the ratio of the times they take to reach the bottom from the same height.',
            a: '<i>t</i><sub>solid</sub> ∶ <i>t</i><sub>hollow</sub> = √((1 + 2/5)/(1 + 2/3)) = √((7/5)/(5/3)) = √(21/25) = √21/5 ≈ 0.92.',
          },
          {
            q: '[JEE Main] A disc of radius 0.2 m rolls without slipping with centre speed 4 m/s. Find the speed of the topmost point and the speed of the point of contact.',
            a: 'Top = 8 m/s, contact = 0.',
          },
          {
            q: '[JEE Advanced] A solid cylinder of mass <i>M</i> and radius <i>R</i> rolls without slipping down an incline of angle <i>θ</i>. Using energy conservation, find the speed of its centre after it has descended a vertical height <i>h</i>, and verify it is independent of <i>M</i> and <i>R</i>.',
            a: '<i>v</i> = √(2<i>gh</i>/(1 + 1/2)) = √(4<i>gh</i>/3), independent of <i>M</i> and <i>R</i>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A wheel rolls without slipping at centre speed <i>v</i>. The speed of the topmost point of the wheel is:',
        opts: [
          { label: '<i>v</i>', nudge: '(A) ignores the rotational contribution.' },
          { label: '<i>v</i>/2', nudge: '(B) is a random halving.' },
          { label: '2<i>v</i>', nudge: null },
          { label: 'zero', nudge: '(D) is the speed of the bottom (contact) point, a classic swap.' },
        ],
        correct: 2,
        solution:
          'The top point combines the translational velocity <i>v</i> (forward) with the rotational velocity <i>Rω</i> = <i>v</i> (also forward at the top), giving <i>v</i> + <i>v</i> = 2<i>v</i>. The defining fact of pure rolling: bottom = 0, centre = <i>v</i>, top = 2<i>v</i>.',
      },
      {
        t: 'mcq',
        q: 'A solid sphere and a ring of the same mass and radius roll down identical inclines from the same height. At the bottom:',
        opts: [
          { label: 'the ring is faster', nudge: '(A) reverses the physics.' },
          { label: 'the sphere is faster', nudge: null },
          { label: 'they have equal speed', nudge: '(C) forgets that the energy split differs by shape.' },
          {
            label: 'the faster one depends on the radius',
            nudge: '(D) is the trap that radius matters — but <i>R</i> cancels, leaving only the shape factor.',
          },
        ],
        correct: 1,
        solution:
          'Bottom speed is <i>v</i> = √(2<i>gh</i>/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)). The sphere has the smaller <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> (2/5 vs 1), so the smaller denominator and the larger speed.',
      },
      {
        t: 'mcq',
        q: 'During pure rolling on a horizontal surface, the work done by the static friction force is:',
        opts: [
          {
            label: 'positive',
            nudge: '(A) and (B) assume friction transfers energy, but with zero contact-point motion there’s no work.',
          },
          {
            label: 'negative',
            nudge: '(A) and (B) assume friction transfers energy, but with zero contact-point motion there’s no work.',
          },
          { label: 'zero', nudge: null },
          {
            label: 'equal to the change in rotational KE',
            nudge: '(D) confuses friction’s role (it provides torque, redistributing but not dissipating energy) with doing net work.',
          },
        ],
        correct: 2,
        solution:
          'Static friction acts at the contact point, which is instantaneously at rest. Work = force × displacement of the point of application = 0.',
      },
      {
        t: 'mcq',
        q: 'A body rolls without slipping. Its rotational kinetic energy is 40% of its total kinetic energy. The body could be a:',
        opts: [
          { label: 'ring', nudge: '(A) ring gives 1/2 = 50%.' },
          { label: 'solid sphere', nudge: '(B) solid sphere gives 2/7 ≈ 28.6%.' },
          { label: 'disc', nudge: '(C) disc gives 1/3 ≈ 33.3%.' },
          { label: 'spherical shell', nudge: null },
        ],
        correct: 3,
        solution:
          'Rotational fraction = (<i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>). Setting this to 0.40: (<i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>) = 2/5 gives <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup> = 2/3 — a spherical shell. Only the shell yields exactly 40%.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the (1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>) factor.</b> A rolling body is not a point mass — it stores energy in spin too. Leaving out this factor (using just ½<i>mv</i><sup>2</sup> or <i>a</i> = <i>g</i> sin <i>θ</i>) is the most common rolling error.',
          '<b>Believing friction does work in pure rolling.</b> It supplies the torque for <i>v</i> = <i>Rω</i>, but the contact point is at rest, so static friction does zero work. Energy is conserved.',
          '<b>Thinking mass or radius affects the race.</b> On an incline, both cancel — only the shape (via <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>) decides speed and acceleration. A tiny ball bearing ties with a cannonball of the same shape.',
          '<b>Using <i>v</i> = <i>Rω</i> when the body is slipping.</b> This condition is only for pure rolling. During slipping (e.g., a sphere thrown without spin), <i>v</i> ≠ <i>Rω</i> until friction establishes rolling.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “sliding-becomes-rolling” problems, take <b>angular momentum about a point on the surface</b>. Friction acts there, so its torque is zero (gravity and the normal reaction cancel) and <i>L</i> is conserved — you get the final speed in one line without ever touching <i>μ</i> or time. And for ranking bodies, memorise the order by <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>: <b>sphere</b> (0.4) < <b>disc</b> (0.5) < <b>shell</b> (0.67) < <b>ring</b> (1) — fastest to slowest, every time.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Rolling = translation + rotation.',
            note: 'Pure-rolling condition: <i>v</i><sub>cm</sub> = <i>Rω</i>, <i>a</i><sub>cm</sub> = <i>Rα</i>.',
          },
          { f: 'Point speeds', note: 'contact = 0, centre = <i>v</i>, top = 2<i>v</i>.' },
          {
            f: 'Total KE',
            note: '<i>K</i> = ½<i>mv</i><sup>2</sup>(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>). Split <i>K</i><sub>trans</sub> ∶ <i>K</i><sub>rot</sub> = 1 ∶ <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>.',
          },
          {
            f: 'Incline',
            note: '<i>a</i> = (<i>g</i> sin <i>θ</i>)/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>), <i>v</i><sub>bottom</sub> = √(2<i>gh</i>/(1 + <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>)).',
          },
          {
            f: 'Shape factors <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>',
            note: 'sphere 2/5, disc/cylinder 1/2, shell 2/3, ring 1.',
          },
          { f: 'Friction in pure rolling does no work', note: '(contact point at rest).' },
        ],
        aids: [
          '<b>Memory aid — “Compact wins”:</b> the more tightly mass hugs the axis (smaller <i>k</i><sup>2</sup>/<i>R</i><sup>2</sup>), the faster it rolls. Sphere beats disc beats shell beats ring — mass and radius never matter.',
          '<b>Memory aid — “Bottom is frozen, top flies”:</b> in pure rolling the contact point is momentarily at rest (0) and the top moves at 2<i>v</i>.',
        ],
      },
    ],
  },

  {
    n: 'A',
    title: 'Velocity and Acceleration of Every Point on a Rolling Body',
    extra: true,
    kalam:
      'The chapter’s superposition picture (“translation picture laid on rotation picture”) already contains the whole method; this addendum simply finishes the job.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter taught you centre of mass, the cross product, torque and angular momentum, equilibrium, moment of inertia with both axis theorems, the rotational SUVAT family, and rolling down an incline. Six examinable patterns still stand outside the door, and each is a marriage of two things the chapter already teaches separately. Addendum A takes the rolling chapter’s three famous speeds (contact = 0, centre = <i>v</i>, top = 2<i>v</i>) and builds the machinery for every point on the wheel — the JEE favourite the chapter skips. Addendum B extends the chapter’s single-block pulley to the full connected-system recipe with a massive pulley. Addendum C takes the sliding-sphere example (which stopped at the final speed (5/7)<i>v</i><sub>0</sub>) and runs the complete timeline: time, distance, and heat. Addendum D removes the pivot from the bullet-in-rod collision and introduces the centre of percussion. Addendum E covers a body the chapter never mentions at all: the rigid body that oscillates — the physical pendulum. Addendum F takes on the rigid body pulled or rolled over a step: the floor normal vanishes, the body pivots about the step corner, and a single torque equation delivers the minimum force — the JEE Main favourite the chapter never treats. Nothing here is new theory; every method below is <i>v⃗</i> = <i>v⃗</i><sub>cm</sub> + <i>ω⃗</i> × <i>r⃗</i>, <i>τ</i> = <i>Iα</i>, and angular momentum conservation, applied one step further than the chapter took them.',
      },
      {
        t: 'p',
        html: 'The chapter gives you exactly three speeds of a rolling wheel. JEE Main regularly asks for the velocity of an arbitrary rim point — the leading point, a point at some angle — and JEE Advanced attaches accelerations and the instantaneous axis of rotation to it. The chapter’s superposition picture (“translation picture laid on rotation picture”) already contains the whole method; this addendum simply finishes the job.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Work with a wheel of radius <i>R</i> rolling without slipping to the right at centre speed <i>v</i>, so the spin obeys<br><i>ω</i> = <i>v</i>/<i>R</i>,<br>with <i>ω⃗</i> pointing into the page (clockwise, seen with +<i>y</i> up).',
      },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Write the master relation.</b> For any point <i>P</i> of the body,<br><i>v⃗</i><sub><i>P</i></sub> = <i>v⃗</i><sub>cm</sub> + <i>ω⃗</i> × <i>r⃗</i><sub><i>P</i>/cm</sub>,<br>where <i>r⃗</i><sub><i>P</i>/cm</sub> is the position of <i>P</i> measured from the centre.',
          '<b>Parametrise the rim.</b> Let <i>P</i> sit at angle <i>θ</i> measured from the upward vertical, so <i>r⃗</i><sub><i>P</i>/cm</sub> = <i>R</i> sin <i>θ</i> <i>î</i> + <i>R</i> cos <i>θ</i> <i>ĵ</i>.',
          '<b>Carry out the cross product.</b> With <i>ω⃗</i> = −<i>ωk̂</i>:<br><i>ω⃗</i> × <i>r⃗</i><sub><i>P</i>/cm</sub> = <i>ωR</i> cos <i>θ</i> <i>î</i> − <i>ωR</i> sin <i>θ</i> <i>ĵ</i>,<br>and adding <i>v⃗</i><sub>cm</sub> = <i>vî</i> with <i>ωR</i> = <i>v</i>:<br><i>v⃗</i><sub><i>P</i></sub> = <i>v</i>[(1 + cos <i>θ</i>) <i>î</i> − sin <i>θ</i> <i>ĵ</i>].',
          '<b>Read off the speed.</b><br>|<i>v⃗</i><sub><i>P</i></sub>|<sup>2</sup> = <i>v</i><sup>2</sup>[(1 + cos <i>θ</i>)<sup>2</sup> + sin<sup>2</sup> <i>θ</i>] = 2<i>v</i><sup>2</sup>(1 + cos <i>θ</i>),<br>so<br>|<i>v⃗</i><sub><i>P</i></sub>| = 2<i>v</i> cos(<i>θ</i>/2),<br>and the velocity makes an angle <i>θ</i>/2 below the horizontal, since tan(slope) = sin <i>θ</i>/(1 + cos <i>θ</i>) = tan(<i>θ</i>/2).<br>• Checks: <i>θ</i> = 0 (top) gives 2<i>v</i> horizontally; <i>θ</i> = π (bottom) gives 0; <i>θ</i> = π/2 (leading point) gives √2 <i>v</i> at 45° below the horizontal.',
          '<b>Accelerations are a separate question.</b> If the wheel rolls steadily, <i>ω</i> is constant, so every rim point performs uniform circular motion about the centre:<br>|<i>a⃗</i><sub><i>P</i></sub>| = <i>ω</i><sup>2</sup><i>R</i> = <i>v</i><sup>2</sup>/<i>R</i>,<br>directed from <i>P</i> toward the centre — for every point, independent of <i>θ</i>. The topmost point therefore accelerates downward at <i>v</i><sup>2</sup>/<i>R</i>, and the contact point (velocity zero!) accelerates upward at <i>v</i><sup>2</sup>/<i>R</i>. Students who answer “zero acceleration because zero velocity” lose the mark every single year.',
          '<b>Shortcut — the instantaneous axis of rotation (IAOR).</b> At each instant the whole wheel may be treated as rotating purely about the contact point: <i>v</i><sub><i>P</i></sub> = <i>ωd</i><sub><i>P</i></sub>, where <i>d</i><sub><i>P</i></sub> is <i>P</i>’s distance from the contact point. For a rim point the chord geometry gives <i>d</i><sub><i>P</i></sub> = 2<i>R</i> cos(<i>θ</i>/2), which reproduces Step 4 instantly.<br>• Caveat (Advanced): the IAOR is legitimate for velocities only. The contact point itself accelerates, so you must not compute accelerations as if the wheel pivoted about a fixed point there.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A disc of radius <i>R</i> = 0.50 m rolls without slipping with centre speed <i>v</i> = 4.0 m/s. Find the angular velocity, and the velocity of the leading (rightmost) point of the rim.',
        steps: [
          'Step 1 — angular velocity:<br><i>ω</i> = <i>v</i>/<i>R</i> = (4.0 m/s)/(0.50 m) = 8.0 rad/s.',
          'Step 2 — the leading point sits at <i>θ</i> = 90° from the top. Substituting into the master relation:<br><i>v⃗</i><sub><i>P</i></sub> = 4.0[(1 + 0) <i>î</i> − 1 <i>ĵ</i>] m/s = (4.0 <i>î</i> − 4.0 <i>ĵ</i>) m/s.',
          'Its magnitude is √((4.0)<sup>2</sup> + (4.0)<sup>2</sup>) m/s = 4√2 m/s ≈ 5.7 m/s, directed 45° below the horizontal (forward and downward).',
          '<b>Check by IAOR.</b> The leading point is a distance √(<i>R</i><sup>2</sup> + <i>R</i><sup>2</sup>) = <i>R</i>√2 = 0.707 m from the contact point, so<br><i>v</i><sub><i>P</i></sub> = <i>ωd</i> = (8.0)(0.707) m/s = 5.7 m/s. ✓',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '(a) Show that the rim speed 2<i>v</i> cos(<i>θ</i>/2) follows from the IAOR alone. (b) Find all rim points whose speed equals the centre speed <i>v</i>. (c) Find the acceleration of the topmost point.',
        steps: [
          '<b>(a)</b> The contact point <i>C</i> and rim point <i>P</i> both lie on the circle, separated by the chord subtending angle π − <i>θ</i> at the centre. The chord length is <i>d</i> = 2<i>R</i> sin((π − <i>θ</i>)/2) = 2<i>R</i> cos(<i>θ</i>/2). Treating the wheel as instantaneously rotating about <i>C</i> with angular speed <i>ω</i> = <i>v</i>/<i>R</i>:<br><i>v</i><sub><i>P</i></sub> = <i>ωd</i> = (<i>v</i>/<i>R</i>) · 2<i>R</i> cos(<i>θ</i>/2) = 2<i>v</i> cos(<i>θ</i>/2).',
          'No components were needed — the geometry did the work.',
          '<b>(b)</b> Set 2<i>v</i> cos(<i>θ</i>/2) = <i>v</i>, so cos(<i>θ</i>/2) = ½ and <i>θ</i> = 120°. There are <b>two</b> such points, at ±120° from the top. Their heights relative to the centre are <i>R</i> cos 120° = −<i>R</i>/2, i.e. half a radius below the centre, at horizontal offsets ±<i>R</i> sin 120° = ±(√3/2)<i>R</i>.',
          '<b>Check:</b> at <i>θ</i> = 120° the master relation gives <i>v⃗</i><sub><i>P</i></sub> = <i>v</i>[½<i>î</i> − (√3/2)<i>ĵ</i>] with magnitude <i>v</i>√(1/4 + 3/4) = <i>v</i>.',
          '<b>(c)</b> Steady rolling means constant <i>ω</i>, so the top point is in uniform circular motion about the centre:<br><i>a</i><sub>top</sub> = <i>ω</i><sup>2</sup><i>R</i> = <i>v</i><sup>2</sup>/<i>R</i>,<br>directed straight downward. Its velocity (2<i>v</i>, horizontal) and acceleration (<i>v</i><sup>2</sup>/<i>R</i>, vertical) are perpendicular.',
          '<b>Why it is Advanced-level.</b> Part (b) hides a counting trap (two points, symmetric, easily missed), and part (c) tests whether you know the IAOR cannot be reused for accelerations. The mark-winning habit is separating the velocity machine from the acceleration machine.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A bicycle wheel of radius 0.35 m rolls at 7.0 m/s. Find <i>ω</i>.',
            a: '<i>ω</i> = <i>v</i>/<i>R</i> = 20 rad/s.',
          },
          {
            q: 'Find the speed of the trailing (leftmost) rim point in terms of <i>v</i>.',
            a: '√2 <i>v</i> — by symmetry with the leading point, directed 45° above the horizontal.',
          },
          {
            q: 'Which non-contact rim points have a purely horizontal velocity?',
            a: 'Only the topmost point (<i>θ</i> = 0): setting the <i>y</i>-component −<i>v</i> sin <i>θ</i> to zero forces <i>θ</i> = 0 or π, and <i>θ</i> = π is the contact point with zero velocity.',
          },
          {
            q: 'What is the maximum possible rim speed, and how many rim points attain it?',
            a: 'Maximum = 2<i>v</i> at the top, attained at exactly one point.',
          },
          {
            q: 'A wheel rolls at <i>v</i> = 6.0 m/s. Find the speed of the point at <i>θ</i> = 60° from the top.',
            a: '2<i>v</i> cos 30° = √3 <i>v</i> = 6√3 ≈ 10.4 m/s.',
          },
          {
            q: 'Find the magnitude and direction of the acceleration of the contact point of a steadily rolling wheel.',
            a: 'Magnitude <i>v</i><sup>2</sup>/<i>R</i>, directed vertically upward (toward the centre) — the contact point has zero velocity but non-zero acceleration.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Massive Pulleys: Connected Systems Done Completely',
    extra: true,
    kalam:
      'The perennial JEE Main pattern goes one step further: two blocks over a pulley with rotational inertia, where the two string tensions are not equal.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter solved one block hanging from a disc pulley. The perennial JEE Main pattern goes one step further: two blocks over a pulley with rotational inertia, where the two string tensions are <b>not equal</b>. The extra idea is tiny — write Newton’s law for each translating mass, <i>τ</i> = <i>Iα</i> for the pulley, link everything with <i>a</i> = <i>Rα</i> — but the bookkeeping must be airtight.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>One equation per object.</b> Each translating mass gets <i>F</i><sub>net</sub> = <i>ma</i>; the pulley gets <i>τ</i><sub>net</sub> = <i>Iα</i> about its axle.',
          '<b>Label the tensions separately.</b> With a massive pulley, <i>T</i><sub>1</sub> ≠ <i>T</i><sub>2</sub>; their difference is precisely what provides the pulley’s torque. Writing <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub> is the fatal error.',
          '<b>Apply the constraint.</b> String inextensible and non-slipping: <i>a</i> = <i>Rα</i> for every segment.',
          '<b>Fix one sign convention</b> (e.g. <i>m</i><sub>1</sub> descending is positive) and hold it across all equations.',
          '<b>Solve the linear system</b>, then check limits: letting <i>M</i> → 0 must recover the massless-pulley answers from earlier chapters.',
          '<b>Cross-check with energy.</b> For motion through a height <i>h</i> from rest, ∑ Δ<i>K</i> = −∑ Δ<i>U</i> must hold, since the rope does not slip on the pulley and the axle is frictionless, so no energy is dissipated.',
        ],
      },
      {
        t: 'p',
        html: '<b>Master result — Atwood machine with a disc pulley</b> (masses <i>m</i><sub>1</sub> > <i>m</i><sub>2</sub>, pulley mass <i>M</i>, radius <i>R</i>, <i>I</i> = ½<i>MR</i><sup>2</sup>):<br><i>m</i><sub>1</sub><i>g</i> − <i>T</i><sub>1</sub> = <i>m</i><sub>1</sub><i>a</i>,<br><i>T</i><sub>2</sub> − <i>m</i><sub>2</sub><i>g</i> = <i>m</i><sub>2</sub><i>a</i>,<br>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)<i>R</i> = ½<i>MR</i><sup>2</sup> · <i>a</i>/<i>R</i> ⟹ <i>T</i><sub>1</sub> − <i>T</i><sub>2</sub> = ½<i>Ma</i>.<br>Adding all three eliminates both tensions:<br><i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> + <i>M</i>/2).',
      },
      {
        t: 'p',
        html: 'Note how <i>M</i>/2 enters the denominator exactly like a third mass — the pulley’s inertia behaves like an extra mass <i>M</i>/2 added to the moving system (a quarter of <i>M</i> on each side). If the pulley were a thin ring, <i>I</i> = <i>MR</i><sup>2</sup> and the denominator becomes <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> + <i>M</i> instead.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Masses <i>m</i><sub>1</sub> = 3.0 kg and <i>m</i><sub>2</sub> = 2.0 kg hang over a uniform disc pulley of mass <i>M</i> = 1.0 kg. Take <i>g</i> = 10 m/s<sup>2</sup>. Find <i>a</i>, both tensions, and verify the tension difference.',
        steps: [
          'Step 1 — acceleration:<br><i>a</i> = (3.0 − 2.0)(10)/(3.0 + 2.0 + 0.5) m/s<sup>2</sup> = 10/5.5 m/s<sup>2</sup> = 20/11 ≈ 1.82 m/s<sup>2</sup>.',
          'Step 2 — tensions:<br><i>T</i><sub>1</sub> = <i>m</i><sub>1</sub>(<i>g</i> − <i>a</i>) = 3.0(10 − 20/11) = 270/11 N ≈ 24.5 N,<br><i>T</i><sub>2</sub> = <i>m</i><sub>2</sub>(<i>g</i> + <i>a</i>) = 2.0(10 + 20/11) = 260/11 N ≈ 23.6 N.',
          'Step 3 — verify the torque equation:<br><i>T</i><sub>1</sub> − <i>T</i><sub>2</sub> = 10/11 N ≈ 0.91 N,   ½<i>Ma</i> = 0.5 × 1.0 × 20/11 = 10/11 N. ✓',
          'The heavier side’s string pulls harder — by exactly the amount needed to angularly accelerate the pulley.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For the system of Example B.1, find the speed of the masses after <i>m</i><sub>1</sub> has descended <i>h</i> = 1.0 m from rest, by (i) kinematics and (ii) energy conservation. Confirm the two agree exactly.',
        steps: [
          '<b>(i) Kinematics.</b> Constant <i>a</i> from rest:<br><i>v</i><sup>2</sup> = 2<i>ah</i> = 2(20/11)(1.0) m<sup>2</sup>/s<sup>2</sup> = 40/11 m<sup>2</sup>/s<sup>2</sup>,   <i>v</i> ≈ 1.91 m/s.',
          '<b>(ii) Energy.</b> Lost potential energy:<br>Δ<i>U</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>gh</i> = (1.0)(10)(1.0) J = 10 J.',
          'Gained kinetic energy, with <i>I</i> = ½<i>MR</i><sup>2</sup> and <i>ω</i> = <i>v</i>/<i>R</i>:<br><i>K</i> = ½(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>v</i><sup>2</sup> + ½<i>Iω</i><sup>2</sup> = ½(5.0)<i>v</i><sup>2</sup> + ¼(1.0)<i>v</i><sup>2</sup> = 2.75<i>v</i><sup>2</sup>.',
          'Setting <i>K</i> = Δ<i>U</i>: <i>v</i><sup>2</sup> = 10/2.75 = 40/11 m<sup>2</sup>/s<sup>2</sup> — identical to (i).',
          '<b>Why it is Advanced-level.</b> Either route alone scores; producing both and showing they agree demonstrates command of the constraint machinery, and the energy route is the faster one whenever the question asks only for speeds.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Repeat Example B.1 with the pulley replaced by a thin ring of the same mass. Find <i>a</i>.',
            a: '<i>a</i> = (1.0)(10)/(3.0 + 2.0 + 1.0) = 10/6.0 ≈ 1.67 m/s<sup>2</sup> — smaller, since a ring stores more inertia per unit mass.',
          },
          {
            q: 'A block <i>m</i><sub>1</sub> = 1.0 kg rests on a frictionless table; a light string runs horizontally from it over a disc pulley (<i>M</i> = 0.50 kg) to a hanging block <i>m</i><sub>2</sub> = 2.0 kg. Take <i>g</i> = 10 m/s<sup>2</sup>. Find <i>a</i>.',
            a: 'Adding <i>m</i><sub>2</sub><i>g</i> − <i>T</i><sub>2</sub> = <i>m</i><sub>2</sub><i>a</i>, <i>T</i><sub>1</sub> = <i>m</i><sub>1</sub><i>a</i>, and (<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)<i>R</i> = ½<i>MR</i><sup>2</sup>(<i>a</i>/<i>R</i>): <i>a</i> = <i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> + <i>M</i>/2) = 20/3.25 ≈ 6.15 m/s<sup>2</sup>.',
          },
          {
            q: 'In Question 2, find the difference between the two tensions.',
            a: 'Δ<i>T</i> = ½<i>Ma</i> = 0.25 × 6.15 ≈ 1.54 N.',
          },
          {
            q: 'In Question 2, find the time for <i>m</i><sub>2</sub> to descend 0.50 m from rest.',
            a: '<i>t</i> = √(2<i>h</i>/<i>a</i>) = √(1.00/6.15) s ≈ 0.40 s.',
          },
          {
            q: 'Conceptual: why must the two tensions in any massive-pulley system differ?',
            a: 'Zero net torque would mean zero angular acceleration; a spinning-up pulley demands (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)<i>R</i> = <i>Iα</i> ≠ 0. Only a massless pulley (<i>I</i> = 0) allows <i>T</i><sub>1</sub> = <i>T</i><sub>2</sub>.',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Slipping into Rolling: Time, Distance and Heat',
    extra: true,
    kalam:
      'JEE Advanced routinely wants the whole story: how long slipping lasts, how far the body travels, and how much energy friction destroys.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter showed the slick trick — conserve angular momentum about a floor point — to get the final speed (5/7)<i>v</i><sub>0</sub> of a sliding sphere. It stopped there. JEE Advanced routinely wants the whole story: how long slipping lasts, how far the body travels, and how much energy friction destroys. The trick cannot give those; a straightforward force-and-torque timeline can.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Identify the slip.</b> Kinetic friction <i>f</i> = <i>μmg</i> acts at the contact point, opposing the relative slip there. It decelerates translation and exerts a torque <i>fR</i> about the centre.',
          '<b>Write both timelines.</b> With <i>I</i> = <i>mk</i><sup>2</sup>:<br><i>v</i>(<i>t</i>) = <i>v</i><sub>0</sub> − <i>μgt</i>,   <i>ω</i>(<i>t</i>) = (<i>μmgR</i>/<i>I</i>)<i>t</i> = (<i>μgR</i>/<i>k</i><sup>2</sup>)<i>t</i>.',
          '<b>Find the rolling instant</b> <i>t</i><sup>*</sup> from the pure-rolling condition <i>v</i>(<i>t</i><sup>*</sup>) = <i>ω</i>(<i>t</i><sup>*</sup>)<i>R</i>.',
          '<b>Distance:</b> integrate (or use constant-acceleration kinematics) up to <i>t</i><sup>*</sup>.',
          '<b>Heat generated:</b> friction acts on slipping surfaces, so<br><i>H</i> = ∫ <i>f</i> |<i>v</i> − <i>ωR</i>| d<i>t</i> = <i>μmg</i> × (area under the (<i>v</i> − <i>ωR</i>) graph).<br>Since <i>v</i> − <i>ωR</i> falls linearly from <i>v</i><sub>0</sub> to 0, the area is ½<i>v</i><sub>0</sub><i>t</i><sup>*</sup>.',
          '<b>Close the books:</b> <i>K</i><sub><i>i</i></sub> − <i>K</i><sub><i>f</i></sub> must equal <i>H</i>. If it does not, hunt the arithmetic.',
        ],
      },
      {
        t: 'p',
        html: '<b>Solid sphere</b> (<i>k</i><sup>2</sup> = (2/5)<i>R</i><sup>2</sup>), thrown without spin: the rolling condition gives<br><i>v</i><sub>0</sub> − <i>μgt</i><sup>*</sup> = (5<i>μg</i>/2)<i>t</i><sup>*</sup> ⟹ <i>t</i><sup>*</sup> = 2<i>v</i><sub>0</sub>/(7<i>μg</i>),   <i>v</i><sup>*</sup> = 5<i>v</i><sub>0</sub>/7,<br>matching the chapter’s angular-momentum result. The distance and heat work out to<br><i>s</i><sup>*</sup> = 12<i>v</i><sub>0</sub><sup>2</sup>/(49<i>μg</i>),   <i>H</i> = <i>mv</i><sub>0</sub><sup>2</sup>/7 = (2/7) · ½<i>mv</i><sub>0</sub><sup>2</sup>.<br><br>Exactly two-sevenths of the initial kinetic energy is destroyed — and notice <i>v</i><sup>*</sup> and the energy split contain <b>no</b> <i>μ</i>: friction sets the schedule, not the destination.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A cue ball (solid sphere, <i>m</i> = 0.20 kg) slides without spin at <i>v</i><sub>0</sub> = 7.0 m/s onto cloth with <i>μ</i> = 0.20. Take <i>g</i> = 10 m/s<sup>2</sup>. Find (a) the time and distance until pure rolling, (b) the heat generated, and (c) verify the energy ledger.',
        steps: [
          '<b>(a)</b> Timeline:<br><i>t</i><sup>*</sup> = 2(7.0)/(7(0.20)(10)) s = 14/14 s = 1.0 s,<br><i>s</i><sup>*</sup> = <i>v</i><sub>0</sub><i>t</i><sup>*</sup> − ½<i>μg</i>(<i>t</i><sup>*</sup>)<sup>2</sup> = (7.0)(1.0) − ½(2.0)(1.0) m = 6.0 m.',
          'Final speed <i>v</i><sup>*</sup> = <i>v</i><sub>0</sub> − <i>μgt</i><sup>*</sup> = 7.0 − 2.0 = 5.0 m/s, agreeing with (5/7)(7.0) = 5.0 m/s.',
          '<b>(b)</b> Heat:<br><i>H</i> = <i>mv</i><sub>0</sub><sup>2</sup>/7 = (0.20)(7.0)<sup>2</sup>/7 J = 1.4 J.',
          '<b>(c)</b> Ledger:<br><i>K</i><sub><i>i</i></sub> = ½(0.20)(7.0)<sup>2</sup> J = 4.9 J,<br><i>K</i><sub><i>f</i></sub> = ½(0.20)(5.0)<sup>2</sup> + ½(2/5)(0.20)(5.0)<sup>2</sup> J = 2.5 + 1.0 J = 3.5 J.',
          'Loss = 4.9 − 3.5 = 1.4 J = <i>H</i>.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A solid sphere is spun up to <i>ω</i><sub>0</sub> about a horizontal axis and released from rest just above a rough floor, landing with zero translational speed. Find its final speed once pure rolling sets in, and the fraction of the initial kinetic energy dissipated.',
        steps: [
          'Here the slip runs the other way: the sphere’s bottom surface moves backward, so kinetic friction acts forward, accelerating translation while braking the spin:<br><i>v</i>(<i>t</i>) = <i>μgt</i>,   <i>ω</i>(<i>t</i>) = <i>ω</i><sub>0</sub> − (5<i>μg</i>/(2<i>R</i>))<i>t</i>.',
          'Rolling condition <i>v</i> = <i>ωR</i>:<br><i>μgt</i><sup>*</sup> = <i>Rω</i><sub>0</sub> − (5<i>μg</i>/2)<i>t</i><sup>*</sup> ⟹ <i>t</i><sup>*</sup> = 2<i>Rω</i><sub>0</sub>/(7<i>μg</i>),   <i>v</i><sup>*</sup> = 2<i>Rω</i><sub>0</sub>/7.',
          'Energy ledger. Initially only spin energy exists, <i>K</i><sub><i>i</i></sub> = (1/5)<i>mR</i><sup>2</sup><i>ω</i><sub>0</sub><sup>2</sup>. Finally, with <i>ω</i><sub><i>f</i></sub> = <i>v</i><sup>*</sup>/<i>R</i> = (2/7)<i>ω</i><sub>0</sub>:<br><i>K</i><sub><i>f</i></sub> = ½<i>m</i>(2<i>Rω</i><sub>0</sub>/7)<sup>2</sup> + ½ · (2/5)<i>mR</i><sup>2</sup>(2<i>ω</i><sub>0</sub>/7)<sup>2</sup> = (2/49 + 4/245)<i>mR</i><sup>2</sup><i>ω</i><sub>0</sub><sup>2</sup> = (2/35)<i>mR</i><sup>2</sup><i>ω</i><sub>0</sub><sup>2</sup>.',
          'Fraction surviving: (2/35)/(1/5) = 2/7. So <b>five-sevenths dissipates</b> — the mirror image of the thrown ball, where five-sevenths of <i>v</i><sub>0</sub> survived.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A ring is projected without spin at <i>v</i><sub>0</sub>. Find <i>t</i><sup>*</sup> and the final speed.',
            a: 'With <i>I</i> = <i>mR</i><sup>2</sup>, <i>ω</i> = (<i>μg</i>/<i>R</i>)<i>t</i>, so <i>v</i><sub>0</sub> − <i>μgt</i><sup>*</sup> = <i>μgt</i><sup>*</sup> gives <i>t</i><sup>*</sup> = <i>v</i><sub>0</sub>/(2<i>μg</i>) and <i>v</i><sup>*</sup> = <i>v</i><sub>0</sub>/2.',
          },
          {
            q: 'For the thrown solid sphere, find the distance travelled before rolling begins.',
            a: '<i>s</i><sup>*</sup> = 12<i>v</i><sub>0</sub><sup>2</sup>/(49<i>μg</i>).',
          },
          {
            q: 'What fraction of the initial kinetic energy of the thrown sphere is dissipated?',
            a: '2/7 ≈ 28.6%.',
          },
          {
            q: 'For the dropped spinning sphere, what fraction of the initial kinetic energy remains?',
            a: '2/7 ≈ 28.6%.',
          },
          {
            q: 'Conceptual: which quantities in the thrown-sphere problem depend on <i>μ</i>, and which do not?',
            a: '<i>t</i><sup>*</sup> and <i>s</i><sup>*</sup> shrink as <i>μ</i> grows; <i>v</i><sup>*</sup>, the energy split, and the final state are independent of <i>μ</i>.',
          },
          {
            q: 'A solid sphere slides at <i>v</i><sub>0</sub> = 14 m/s without spin on <i>μ</i> = 0.10 (<i>g</i> = 10 m/s<sup>2</sup>). Find <i>t</i><sup>*</sup>, <i>s</i><sup>*</sup>, and <i>v</i><sup>*</sup>.',
            a: '<i>t</i><sup>*</sup> = 2(14)/(7(0.10)(10)) = 4.0 s; <i>s</i><sup>*</sup> = 14(4.0) − ½(1.0)(16) = 48 m; <i>v</i><sup>*</sup> = 14 − (0.10)(10)(4.0) = 10 m/s.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Collisions on a Free Rigid Body and the Centre of Percussion',
    extra: true,
    kalam:
      'Remove the pivot and the problem changes character completely: now both linear momentum and angular momentum survive, and you need them both.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Every collision example in the chapter involves a pivoted rod, where the hinge force kills linear momentum and you conserve angular momentum about the pivot. Remove the pivot and the problem changes character completely: now <b>both</b> linear momentum and angular momentum survive, and you need them both. Attached to this is a beautiful, examinable idea: the one special impact point where a pivoted body’s support feels nothing — the centre of percussion, the physics of the bat’s sweet spot.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Free body struck by a particle (sticking collision)',
        steps: [
          'Conserve linear momentum: <i>mv</i> = (<i>M</i> + <i>m</i>)<i>V</i>.',
          'Locate the system’s centre of mass; it sits a distance (<i>mL</i>/2)/(<i>M</i> + <i>m</i>) from the rod’s centre toward the struck end.',
          'Conserve angular momentum <b>about the system’s centre of mass</b> — about that one point the final state is pure rotation, <i>L</i><sub><i>f</i></sub> = <i>I</i><sub>cm</sub><i>ω</i>, with<br><i>I</i><sub>cm</sub> = <i>ML</i><sup>2</sup>/12 + <i>M</i>(<i>mL</i>/(2(<i>M</i> + <i>m</i>)))<sup>2</sup> + <i>m</i>(<i>ML</i>/(2(<i>M</i> + <i>m</i>)))<sup>2</sup> = <i>ML</i><sup>2</sup>(<i>M</i> + 4<i>m</i>)/(12(<i>M</i> + <i>m</i>)),<br>the rod’s own value plus parallel-axis shifts for both the rod (centre <i>mL</i>/(2(<i>M</i> + <i>m</i>)) from the system’s centre of mass) and the particle (<i>ML</i>/(2(<i>M</i> + <i>m</i>)) from it).',
          'Solve for <i>ω</i>; recover any point’s velocity from <i>V</i> and <i>ω</i>.',
        ],
      },
      {
        t: 'p',
        html: 'Running the algebra of Steps 1–4 for a particle striking the rod’s end perpendicular to it:<br><i>V</i> = <i>mv</i>/(<i>M</i> + <i>m</i>),   <i>ω</i> = 6<i>mv</i>/(<i>L</i>(<i>M</i> + 4<i>m</i>)).<br>• Limits: <i>M</i> → ∞ gives <i>V</i> → 0, <i>ω</i> → 0 (an immovable rod barely responds); <i>m</i> → ∞ gives <i>V</i> → <i>v</i> — the heavy particle carries on at essentially <i>v</i>. Both sane.',
      },
      {
        t: 'p',
        html: '<b>Centre of percussion.</b> A rod of mass <i>M</i>, length <i>L</i>, pivoted at one end, is dealt a horizontal impulse <i>J</i> at distance <i>x</i> from the pivot. Immediately after:<br><i>ω</i> = <i>Jx</i>/<i>I</i><sub>end</sub>,   <i>V</i><sub>cm</sub> = <i>ω</i> · <i>L</i>/2,<br>with <i>I</i><sub>end</sub> = <i>ML</i><sup>2</sup>/3. The impulse–momentum theorem for the whole rod reads <i>J</i> − <i>J</i><sub>hinge</sub> = <i>MV</i><sub>cm</sub>, where <i>J</i><sub>hinge</sub> is whatever impulse the pivot supplies. Demanding <i>J</i><sub>hinge</sub> = 0:<br><i>J</i> = <i>M</i> · <i>JxL</i>/(2<i>I</i><sub>end</sub>) ⟹ <i>x</i> = 2<i>I</i><sub>end</sub>/(<i>ML</i>) = (2/(<i>ML</i>)) · <i>ML</i><sup>2</sup>/3 = 2<i>L</i>/3.<br><br>Struck at <b>two-thirds of its length from the pivot</b>, the rod rotates exactly as a free impulse predicts, and the pivot feels nothing. Struck anywhere else, the hinge jerks — which is why a mis-hit bat stings your hands.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A rod of mass <i>M</i> and length <i>L</i> lies at rest on a smooth horizontal table. A putty blob of mass <i>m</i> = <i>M</i>, moving perpendicular to the rod with speed <i>v</i>, strikes and sticks to one end. Find <i>V</i>, <i>ω</i>, and the post-impact speeds of both ends of the rod.',
        steps: [
          'With <i>m</i> = <i>M</i> the general results collapse pleasantly:<br><i>V</i> = <i>Mv</i>/(2<i>M</i>) = <i>v</i>/2,<br>and, substituting <i>m</i> = <i>M</i> into the master <i>ω</i>,<br><i>ω</i> = 6<i>Mv</i>/(<i>L</i>(<i>M</i> + 4<i>M</i>)) = 6<i>v</i>/(5<i>L</i>).',
          'The system centre of mass lies <i>mL</i>/(2(<i>M</i> + <i>m</i>)) = <i>L</i>/4 from the rod’s centre, i.e. <i>L</i>/4 from the struck end and 3<i>L</i>/4 from the far end. End speeds:<br><i>v</i><sub>struck</sub> = <i>V</i> + <i>ω</i> · <i>L</i>/4 = <i>v</i>/2 + (6<i>v</i>/(5<i>L</i>)) · <i>L</i>/4 = <i>v</i>/2 + 3<i>v</i>/10 = 4<i>v</i>/5,<br><i>v</i><sub>far</sub> = <i>V</i> − <i>ω</i> · 3<i>L</i>/4 = <i>v</i>/2 − (6<i>v</i>/(5<i>L</i>)) · 3<i>L</i>/4 = <i>v</i>/2 − 9<i>v</i>/10 = −2<i>v</i>/5.',
          '<b>Check 1:</b> the struck end moves at (4/5)<i>v</i> < <i>v</i> — the putty slowed down, as an inelastic hit demands.',
          '<b>Check 2 (angular momentum about the rod’s original centre):</b> before, <i>L</i><sub><i>i</i></sub> = <i>mv</i> · <i>L</i>/2 = <i>MvL</i>/2. After, the orbital piece about that point contributes <i>y</i><sub><i>c</i></sub>(<i>M</i> + <i>m</i>)<i>V</i> = (<i>L</i>/4)(2<i>M</i>)(<i>v</i>/2) = <i>MvL</i>/4, and the spin contributes <i>I</i><sub>cm</sub><i>ω</i> = (5<i>ML</i><sup>2</sup>/24) · (6<i>v</i>/(5<i>L</i>)) = <i>MvL</i>/4. Sum = <i>MvL</i>/2.',
          'Notice the far end momentarily moves backward: the rod both chases the putty and spins fast enough that its tail kicks the other way. Students who assume “everything moves forward” miss this every time.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A uniform rod of mass 2.0 kg and length 1.5 m is pivoted at one end on a smooth horizontal axis. A ball imparts a horizontal impulse of magnitude <i>J</i> = 10 N · s at the centre of percussion. Find the rod’s angular speed just after, and confirm the hinge delivers zero impulse.',
        steps: [
          'The percussion point sits at <i>x</i> = 2<i>L</i>/3 = 1.0 m from the pivot. About the pivot, <i>I</i><sub>end</sub> = <i>ML</i><sup>2</sup>/3 = (2.0)(1.5)<sup>2</sup>/3 = 1.5 kg · m<sup>2</sup>:<br><i>ω</i> = <i>Jx</i>/<i>I</i><sub>end</sub> = (10)(1.0)/1.5 rad/s = 6.7 rad/s.',
          'Impulse–momentum check: <i>V</i><sub>cm</sub> = <i>ωL</i>/2 = 6.7 × 0.75 = 5.0 m/s, so <i>MV</i><sub>cm</sub> = (2.0)(5.0) = 10 kg · m/s = <i>J</i>. The entire delivered impulse is accounted for by the rod’s momentum — the hinge supplied exactly zero.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Redo Example D.1 with <i>m</i> = <i>M</i>/2. Find <i>V</i> and <i>ω</i>.',
            a: '<i>V</i> = <i>mv</i>/(<i>M</i> + <i>m</i>) = <i>v</i>/3; <i>ω</i> = 6<i>mv</i>/(<i>L</i>(<i>M</i> + 4<i>m</i>)) = (6 · (<i>M</i>/2)<i>v</i>)/(<i>L</i>(<i>M</i> + 2<i>M</i>)) = <i>v</i>/<i>L</i>.',
          },
          {
            q: 'For Example D.1 as stated (<i>m</i> = <i>M</i>), find the ratio of translational to rotational kinetic energy after impact.',
            a: '<i>K</i><sub>trans</sub> = ½(2<i>M</i>)(<i>v</i>/2)<sup>2</sup> = <i>Mv</i><sup>2</sup>/4; <i>K</i><sub>rot</sub> = ½ · (5<i>ML</i><sup>2</sup>/24) · (6<i>v</i>/(5<i>L</i>))<sup>2</sup> = 3<i>Mv</i><sup>2</sup>/20; ratio = (1/4)/(3/20) = 5 ∶ 3.',
          },
          {
            q: 'Find the centre of percussion of a uniform disc pivoted at a point on its rim.',
            a: '<i>x</i> = <i>I</i><sub>rim</sub>/(<i>Md</i>) = (3/2)<i>MR</i><sup>2</sup>/(<i>MR</i>) = 3<i>R</i>/2 from the pivot.',
          },
          {
            q: 'For Example D.1 (<i>m</i> = <i>M</i>), what fraction of the initial kinetic energy survives the collision?',
            a: '<i>K</i><sub><i>f</i></sub> = <i>Mv</i><sup>2</sup>/4 + 3<i>Mv</i><sup>2</sup>/20 = 2<i>Mv</i><sup>2</sup>/5 versus <i>K</i><sub><i>i</i></sub> = <i>Mv</i><sup>2</sup>/2: fraction = 4/5 = 80% — most of the energy survives because a free rod offers little resistance.',
          },
          {
            q: 'Conceptual: a cricketer holds the bat near one end. Explain, in one sentence of physics, why a ball struck near the middle of the blade hurts the hands less than one struck near the tip.',
            a: 'Struck away from the centre of percussion, the unbalanced impulse must be supplied by the hands at the grip — the sting is the hinge impulse.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'The Physical Pendulum: When a Rigid Body Oscillates',
    extra: true,
    kalam:
      'The entire construction is two chapter tools bolted together: torque about a fixed axis, and the parallel-axis theorem.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Nothing in the chapter oscillates. Yet CBSE loves the physical-pendulum time period as a synthesis question, NEET asks it factually, and JEE Main/Advanced pose the “drill a hole, minimise the period” classic nearly every few years. The entire construction is two chapter tools bolted together: torque about a fixed axis, and the parallel-axis theorem.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Pivot the body</b> at a point a distance <i>d</i> from its centre of mass; displace it by a small angle <i>θ</i>.',
          '<b>Write the restoring torque.</b> Gravity acts at the centre of mass, so<br><i>τ</i> = −<i>Mgd</i> sin <i>θ</i> ≈ −<i>Mgd θ</i><br>for small oscillations — the minus sign is what makes it restoring.',
          '<b>Invoke rotational Newton’s law</b> about the pivot, <i>τ</i> = <i>I</i><sub>pivot</sub><i>θ̈</i>:<br><i>I</i><sub>pivot</sub><i>θ̈</i> = −<i>Mgd θ</i>,<br>which is simple harmonic motion with<br><i>ω</i><sup>2</sup> = <i>Mgd</i>/<i>I</i><sub>pivot</sub>,   <i>T</i> = 2π√(<i>I</i><sub>pivot</sub>/(<i>Mgd</i>)).',
          '<b>Deploy the parallel-axis theorem</b>, <i>I</i><sub>pivot</sub> = <i>I</i><sub>cm</sub> + <i>Md</i><sup>2</sup> = <i>M</i>(<i>k</i><sup>2</sup> + <i>d</i><sup>2</sup>), where <i>k</i> is the radius of gyration about the centre of mass:<br><i>T</i> = 2π√((<i>k</i><sup>2</sup> + <i>d</i><sup>2</sup>)/(<i>gd</i>)).',
          '<b>Recover the simple pendulum</b> as a check: a point mass on a light string has <i>k</i> = 0, <i>d</i> = <i>ℓ</i>, giving <i>T</i> = 2π√(<i>ℓ</i>/<i>g</i>).',
          '<b>Equivalent length:</b> <i>ℓ</i><sub>eq</sub> = <i>I</i><sub>pivot</sub>/(<i>Md</i>) = <i>d</i> + <i>k</i><sup>2</sup>/<i>d</i>. Minimising over <i>d</i> (set (d/d<i>d</i>)(<i>d</i> + <i>k</i><sup>2</sup>/<i>d</i>) = 1 − <i>k</i><sup>2</sup>/<i>d</i><sup>2</sup> = 0) gives <i>d</i> = <i>k</i> and<br><i>T</i><sub>min</sub> = 2π√(2<i>k</i>/<i>g</i>).<br>Any physical pendulum has a longer period than a simple pendulum of length <i>d</i>, since <i>k</i><sup>2</sup> + <i>d</i><sup>2</sup> > <i>d</i><sup>2</sup> whenever <i>k</i> ≠ 0.',
        ],
      },
      {
        t: 'p',
        html: '<b>Torsional pendulum (for completeness).</b> Replace gravity with a wire of torsional constant <i>κ</i>: <i>τ</i> = −<i>κθ</i> gives <i>T</i> = 2π√(<i>I</i>/<i>κ</i>) — independent of gravity entirely.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: 'A uniform rod of length <i>L</i> = 0.90 m pivots about a horizontal axis through one end. Find its small-oscillation period (<i>g</i> = 10 m/s<sup>2</sup>), and compare with a simple pendulum of the same length.',
        steps: [
          'Here <i>k</i><sup>2</sup> = <i>L</i><sup>2</sup>/12 and <i>d</i> = <i>L</i>/2:<br><i>T</i> = 2π√((<i>L</i><sup>2</sup>/12 + <i>L</i><sup>2</sup>/4)/(<i>gL</i>/2)) = 2π√((<i>L</i><sup>2</sup>/3)/(<i>gL</i>/2)) = 2π√(2<i>L</i>/(3<i>g</i>)).',
          'Numerically: 2<i>L</i>/(3<i>g</i>) = 1.80/30 s<sup>2</sup> = 0.060 s<sup>2</sup>, so <i>T</i> = 2π√0.060 = 2π(0.245) = 1.54 s.',
          'The simple pendulum of length 0.90 m would take <i>T</i> = 2π√0.090 = 1.88 s — the rod, with its mass concentrated nearer the pivot, swings faster. Its equivalent length is <i>ℓ</i><sub>eq</sub> = 2<i>L</i>/3 = 0.60 m, and indeed 2π√(0.60/10) = 1.54 s.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A hole is drilled in a uniform disc of radius <i>R</i> and the disc is suspended from a smooth pin through the hole, a distance <i>d</i> from the centre. For what <i>d</i> is the oscillation period minimum, and what is that minimum period?',
        steps: [
          'For a disc, <i>k</i><sup>2</sup> = <i>R</i><sup>2</sup>/2. From the Method,<br><i>T</i>(<i>d</i>) = 2π√((<i>R</i><sup>2</sup>/2 + <i>d</i><sup>2</sup>)/(<i>gd</i>)),<br>which is minimised when (<i>R</i><sup>2</sup>/2 + <i>d</i><sup>2</sup>)/<i>d</i> = <i>d</i> + <i>R</i><sup>2</sup>/(2<i>d</i>) is minimised, i.e. at<br><i>d</i> = <i>R</i>/√2.',
          'Then <i>k</i><sup>2</sup> + <i>d</i><sup>2</sup> = <i>R</i><sup>2</sup>/2 + <i>R</i><sup>2</sup>/2 = <i>R</i><sup>2</sup> and <i>gd</i> = <i>gR</i>/√2:<br><i>T</i><sub>min</sub> = 2π√(<i>R</i><sup>2</sup>√2/(<i>gR</i>)) = 2π√(√2 <i>R</i>/<i>g</i>).',
          '<b>Numeric check,</b> <i>R</i> = 0.20 m, <i>g</i> = 10 m/s<sup>2</sup>: the pin sits at <i>d</i> = 0.141 m, and<br><i>T</i><sub>min</sub> = 2π√(1.414 × 0.20/10) s = 2π√0.0283 s = 2π(0.168) s = 1.06 s.',
          'Direct substitution confirms: <i>I</i><sub>pin</sub> = <i>M</i>(0.02 + 0.02) = 0.04<i>M</i> kg · m<sup>2</sup>, <i>Mgd</i> = <i>M</i>(10)(0.141) = 1.41<i>M</i> N · m, and 2π√(0.04/1.41) = 1.06 s.',
          'Note the shape of the answer: suspending from the centre (<i>d</i> → 0) or from very far away both stretch <i>T</i> — the minimum lives strictly in between, at <i>d</i> = <i>k</i>.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A uniform rod of length 1.0 m oscillates about its end. Find <i>T</i> (<i>g</i> = 10 m/s<sup>2</sup>).',
            a: '<i>T</i> = 2π√(2(1.0)/(3(10))) = 2π√0.0667 = 2π(0.258) = 1.62 s.',
          },
          {
            q: 'A uniform disc of radius 0.20 m oscillates about a pin on its rim. Find <i>T</i>.',
            a: '<i>T</i> = 2π√((3/2)<i>R</i><sup>2</sup>/(<i>gR</i>)) = 2π√(3(0.20)/(2(10))) = 2π√0.030 = 2π(0.173) = 1.09 s.',
          },
          {
            q: 'At what distance from the centre should the pin of Question 2 be placed for minimum period, and what is <i>T</i><sub>min</sub>?',
            a: 'Pin at <i>d</i> = <i>R</i>/√2 ≈ 0.141 m; <i>T</i><sub>min</sub> = 2π√(√2(0.20)/10) = 1.06 s.',
          },
          {
            q: 'A torsional pendulum has <i>I</i> = 0.20 kg · m<sup>2</sup> and wire constant <i>κ</i> = 0.80 N · m/rad. Find <i>T</i>.',
            a: '<i>T</i> = 2π√(0.20/0.80) = 2π(0.5) = 3.14 s.',
          },
          {
            q: 'Conceptual: explain in one line why no physical pendulum can ever swing faster than a simple pendulum bob placed at the same distance <i>d</i> from the pivot.',
            a: 'Because <i>I</i><sub>pivot</sub> = <i>M</i>(<i>k</i><sup>2</sup> + <i>d</i><sup>2</sup>) > <i>Md</i><sup>2</sup>, the physical pendulum always has the larger inertia per unit restoring torque, so <i>T</i> = 2π√((<i>k</i><sup>2</sup> + <i>d</i><sup>2</sup>)/<i>gd</i>) ≥ 2π√(<i>d</i>/<i>g</i>), with equality only for a point mass.',
          },
          {
            q: 'A disc oscillates about a pin at distance <i>d</i> = <i>R</i>/√2. State whether its period increases or decreases if the pin is moved to <i>d</i> = <i>R</i>.',
            a: 'It increases: <i>d</i> = <i>R</i>/√2 = <i>k</i> is the minimum, and <i>d</i> = <i>R</i> > <i>k</i> sits past it — indeed 2π√((<i>R</i><sup>2</sup>/2 + <i>R</i><sup>2</sup>)/<i>gR</i>) = 2π√(3<i>R</i>/2<i>g</i>) = 1.09 s > 1.06 s for <i>R</i> = 0.20 m.',
          },
        ],
      },
    ],
  },

  {
    n: 'F',
    title: 'Over a Step: Torque About the Corner and the Minimum Force',
    extra: true,
    kalam:
      'A cylinder, roller or log of radius R and mass m rests on a horizontal floor against a step of height h (h < R).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'A cylinder, roller or log of radius <i>R</i> and mass <i>m</i> rests on a horizontal floor against a step of height <i>h</i> (<i>h</i> < <i>R</i>). How hard must you pull to make it mount the step? The chapter’s equilibrium machinery answers this in three lines once you see where to pivot — and JEE Main returns to exactly this picture again and again.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'At the instant the body begins to mount the step, it is pivoting about the <b>step corner</b> <i>O</i> — a point on the rim — and the floor has already let go:<br>liftoff condition:   <i>N</i><sub>floor</sub> → 0.<br><br>If the floor normal had not vanished, the body would not be leaving the floor. So at the threshold only <b>three</b> forces remain: the weight <i>mg</i> at the centre <i>C</i>, the applied force <i>F</i>, and the reaction at the corner <i>O</i>.',
      },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Pivot at the corner.</b> The corner reaction is unknown in both magnitude and direction (it is whatever the balance of forces demands — certainly not “vertical”, and not along <i>OC</i> either). Taking torques about <i>O</i> eliminates it entirely. Torques balance about any point, but about the old floor contact the unknown corner reaction would keep a lever arm and stay in the equation; about <i>O</i> it drops out.',
          '<b>The one triangle you need.</b> The corner lies on the rim, so |<i>OC</i>| = <i>R</i>. The centre sits at height <i>R</i> and the corner at height <i>h</i>, so the vertical drop from <i>C</i> to <i>O</i> is <i>R</i> − <i>h</i>, and the horizontal offset — which is the lever arm of the weight about <i>O</i> — is<br><i>a</i> = √(<i>R</i><sup>2</sup> − (<i>R</i> − <i>h</i>)<sup>2</sup>) = √(2<i>Rh</i> − <i>h</i><sup>2</sup>).',
          '<b>Torque balance.</b> If the applied force has lever arm <i>d</i> about <i>O</i>,<br><i>F</i> · <i>d</i> = <i>mga</i> = <i>mg</i>√(2<i>Rh</i> − <i>h</i><sup>2</sup>).<br>The weight’s torque pins the body onto the corner; the applied torque must just match it at the threshold.',
          '<b>Minimise <i>F</i> by maximising <i>d</i>.</b> In the standard JEE Main form the pull is <b>horizontal and applied at the top</b> of the roller (a level strap or handle at height 2<i>R</i>), so <i>d</i> = 2<i>R</i> − <i>h</i> and<br><i>F</i><sub>min</sub> = <i>mg</i>√(2<i>Rh</i> − <i>h</i><sup>2</sup>)/(2<i>R</i> − <i>h</i>).',
          '<b>Check the limits.</b> As <i>h</i> → 0, <i>F</i><sub>min</sub> → 0 (no step, no force). As <i>h</i> → <i>R</i>, <i>F</i><sub>min</sub> → <i>mg</i> (the corner rises level with the centre and you end up supporting the whole weight through a unit lever ratio). A formula that fails either limit is wrong, whatever its derivation looked like.',
        ],
      },
      {
        t: 'p',
        html: 'This is statics, not dynamics: <i>F</i><sub>min</sub> is the force that begins the climb, quasi-statically. Once the body is rotating about the corner, kinetic energy and the corner’s changing geometry take over — a different problem.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A road roller of radius <i>R</i> = 0.50 m and mass <i>m</i> = 15 kg rests against a step of height <i>h</i> = 0.10 m. Find the minimum horizontal force, applied at the top of the roller, that will start it mounting the step. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Step 1 — the lever arm of the weight. With |<i>OC</i>| = <i>R</i> and vertical drop <i>R</i> − <i>h</i> = 0.40 m:<br><i>a</i> = √(<i>R</i><sup>2</sup> − (<i>R</i> − <i>h</i>)<sup>2</sup>) = √((0.50)<sup>2</sup> − (0.40)<sup>2</sup>) m = √0.09 m = 0.30 m.',
          '(The geometry is a 3-4-5 triangle: the radius to the corner makes an angle <i>θ</i> with the vertical where cos <i>θ</i> = (<i>R</i> − <i>h</i>)/<i>R</i> = 0.8 and sin <i>θ</i> = <i>a</i>/<i>R</i> = 0.6.)',
          'Step 2 — the lever arm of the force. A horizontal force at the top acts along a line at height 2<i>R</i> = 1.00 m; the corner sits at height <i>h</i> = 0.10 m, so<br><i>d</i> = 2<i>R</i> − <i>h</i> = 0.90 m.',
          'Step 3 — torque balance about the corner:<br><i>F</i><sub>min</sub> = <i>mga</i>/(2<i>R</i> − <i>h</i>) = (15)(10)(0.30)/0.90 N = 50 N,<br>directed horizontally at the top of the roller, toward the step (pulling the roller into the corner and up over it).',
          '<b>Check — force balance.</b> The corner reaction must cancel both <i>F</i> horizontally and <i>mg</i> vertically, so |<i>R</i><sub><i>O</i></sub>| = √((<i>mg</i>)<sup>2</sup> + <i>F</i><sup>2</sup>) = √(150<sup>2</sup> + 50<sup>2</sup>) N ≈ 158 N. Its existence is consistent; its direction never entered the calculation, which was the point of pivoting at <i>O</i>. ✓',
        ],
        // The book boxes "50 N" inside Step 3 and prints no answer line; the
        // result stays in its step so the check still follows it.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Same roller, same step — but now the force applied at the top point may point in any direction. Find the true minimum force and its direction.',
        steps: [
          'Step 1 — the lever arm is now yours to choose. For a force applied at a point <i>P</i>, the largest possible lever arm about <i>O</i> is |<i>OP</i>| itself, attained when <i>F⃗</i> ⊥ <i>OP⃗</i>.',
          'Step 2 — the corner-to-top distance. The top point <i>T</i> is 2<i>R</i> − <i>h</i> above and <i>a</i> to the side of the corner, so<br>|<i>OT</i>| = √(<i>a</i><sup>2</sup> + (2<i>R</i> − <i>h</i>)<sup>2</sup>) = √(0.09 + 0.81) m = √0.90 m ≈ 0.949 m,<br>which tidies up to |<i>OT</i>| = √(2<i>R</i>(2<i>R</i> − <i>h</i>)).',
          'Step 3 — the true minimum:<br><i>F</i><sub>min</sub> = <i>mga</i>/|<i>OT</i>| = (15)(10)(0.30)/√0.90 N ≈ 47.4 N,<br>perpendicular to the corner-to-top line — about 5% cheaper than the 50 N horizontal pull of Example F.1.',
          '<b>Why it is Advanced-level.</b> The mark scheme changes with one word of the question. “Horizontal force at the top” fixes the lever arm at 2<i>R</i> − <i>h</i>; “minimum force” with direction free fixes it at |<i>OT</i>|. Students who memorise one formula answer the other question with it — the exact confusion the examiners are farming. A further variant applies the force at the axle: horizontally, <i>d</i> = <i>R</i> − <i>h</i> and the same roller needs 112.5 N; with direction free there, <i>d</i> = <i>R</i> and 90 N. One torque equation, four different answers, and the geometry decides which is being asked.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Trap note' },
      {
        t: 'mistakes',
        items: [
          '<b>Pivoting at the floor contact.</b> At the threshold the floor normal is zero — that is the condition of the problem, not an approximation. Torques still balance about the old contact point, but there the unknown corner reaction has a lever arm and stays in the equation; about <i>O</i> it drops out.',
          '<b>Guessing the corner reaction.</b> It is not vertical (it must also cancel <i>F</i>) and not along the radius <i>OC</i> (a perfectly smooth edge would push along <i>OC</i>, but a pull at the top can only be balanced if the edge also supplies friction). You never need it: moments about <i>O</i> delete it.',
          '<b>Minimising with the wrong constraint.</b> <i>F</i><sub>min</sub> = <i>mg</i>√(2<i>Rh</i> − <i>h</i><sup>2</sup>)/(2<i>R</i> − <i>h</i>) is the answer to “horizontal force at the top”. Direction-free at the same point, the answer divides by |<i>OT</i>| = √(2<i>R</i>(2<i>R</i> − <i>h</i>)) instead of 2<i>R</i> − <i>h</i> — smaller, since |<i>OT</i>| > 2<i>R</i> − <i>h</i>. Read what the question fixes before quoting a “minimum”.',
          '<b>Forgetting <i>h</i> < <i>R</i>.</b> The body cannot pivot over a step taller than its centre height by pulling alone: as <i>h</i> → <i>R</i> the required force tends to <i>mg</i>, and for <i>h</i> ≥ <i>R</i> the roller meets the riser of the step rather than its corner, so the corner model (and this formula) no longer applies.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A garden roller of radius 0.25 m and mass 40 kg meets a step 0.05 m high. Find the minimum horizontal force applied at the top that starts it climbing (<i>g</i> = 10 m/s<sup>2</sup>).',
            a: '<i>a</i> = √(2(0.25)(0.05) − (0.05)<sup>2</sup>) = √0.0225 = 0.15 m, so <i>F</i><sub>min</sub> = (400)(0.15)/0.45 = 133 N.',
          },
          {
            q: 'The same roller, but the horizontal force is applied at the axle. Find the minimum force now, and explain in one line why it grew.',
            a: '<i>d</i> = <i>R</i> − <i>h</i> = 0.20 m, so <i>F</i><sub>min</sub> = (400)(0.15)/0.20 = 300 N; the lever arm about the corner shrank from 2<i>R</i> − <i>h</i> to <i>R</i> − <i>h</i>, and <i>F</i> grows in inverse proportion.',
          },
          {
            q: 'Show that the top-applied horizontal <i>F</i><sub>min</sub> tends to <i>mg</i> as <i>h</i> → <i>R</i>, and interpret the limit physically.',
            a: 'As <i>h</i> → <i>R</i>, <i>a</i> → √(2<i>R</i><sup>2</sup> − <i>R</i><sup>2</sup>) = <i>R</i> and 2<i>R</i> − <i>h</i> → <i>R</i>, so <i>F</i><sub>min</sub> → <i>mg</i>: the corner stands level with the centre, the pull acts through the same lever ratio as the weight, and you are effectively lifting the whole roller.',
          },
          {
            q: 'A log of radius 0.30 m and mass 25 kg rests against a step of height 0.06 m. Show the geometry is again a 3-4-5 triangle, and find the minimum horizontal force applied at the top.',
            a: '<i>a</i> = √(2(0.30)(0.06) − (0.06)<sup>2</sup>) = √0.0324 = 0.18 m = 0.6<i>R</i> and <i>R</i> − <i>h</i> = 0.24 m = 0.8<i>R</i> (any <i>h</i> = <i>R</i>/5 gives this triangle); <i>F</i><sub>min</sub> = (250)(0.18)/0.54 = 83.3 N.',
          },
          {
            q: 'For the roller of Question 1, find the absolute minimum force at the top point when its direction is free, and state that direction.',
            a: '|<i>OT</i>| = √(2<i>R</i>(2<i>R</i> − <i>h</i>)) = √(2(0.25)(0.45)) = 0.474 m, so <i>F</i><sub>min</sub> = (400)(0.15)/0.474 ≈ 126 N, applied perpendicular to the corner-to-top line.',
          },
        ],
      },
    ],
  },
];
