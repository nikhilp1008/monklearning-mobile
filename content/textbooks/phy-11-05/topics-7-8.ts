import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 07 and 08, word for word from pp. 332 to 347 of the Class
 * 11 Physics Master Reference: Sub-topic 5, Collisions (pp. 332 to 340), and
 * the Application section, Motion in a Vertical Circle (pp. 341 to 347). Both
 * use the book's eight-section layout. p. 334 is the book's figure page for
 * Figure 5.6, placed where the book prints its caption (p. 333). No other
 * drawings on these pages.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 07 · pp. 332–340 ─────────────────────────
  {
    n: '07',
    title: 'Collisions',
    kalam: 'So the total momentum just before impact equals the total momentum just after.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Collisions are among the densest scoring zones in the chapter, blending momentum and energy conservation. CBSE Boards ask the definitions (elastic vs inelastic) and a clean perfectly-inelastic momentum numerical (2–3 marks). NEET asks 1–2 questions yearly, loving the equal-mass velocity-exchange and the “momentum is conserved, KE may not be” conceptual trap. JEE Main reliably asks 1–2 questions on the coefficient of restitution and 1-D elastic formulas. JEE Advanced favours oblique (2-D) elastic collisions — especially the elegant “equal masses fly apart at 90°” result — and multi-body restitution chains.',
      },
      {
        t: 'p',
        html: 'A collision, in physics, is simply an event where two bodies exert strong forces on each other for a very short time — a carrom striker smacking a coin, two cars crunching at an intersection, a cricket ball meeting the bat, even two protons slamming together in an accelerator. The forces are huge but the contact time is tiny, and that tiny-time fact is the key that unlocks everything. The product of that large force and the short time is the <b>impulse</b>, and it equals the change in momentum each body experiences — but because the two bodies push on each other with equal and opposite forces, the impulses are equal and opposite, so they cancel for the system. That is the deep reason momentum survives a collision intact.<br><br>Here’s the master principle, and you must internalise it before anything else: <b>momentum is conserved in every single collision — elastic, inelastic, sticky, explosive, all of them.</b> Why? Because during the fleeting moment of impact, the internal forces the two bodies exert on each other are equal and opposite (Newton’s third law), so they cancel for the system as a whole. External forces like gravity or friction do exist, but they’re so feeble compared to the violent contact force, and act for so short a time, that their impulse is negligible. So the total momentum just before impact equals the total momentum just after. Always.<br><br>Kinetic energy is a different story, and this is where collisions get their personalities. Sometimes the bodies bounce apart and the total kinetic energy is exactly the same afterwards as before — no energy got buried in heat, sound, or permanent dents. We call this an <b>elastic collision</b> (think of two hard steel balls, or idealised billiard balls). Other times, some kinetic energy gets lost — converted into heat, the crunch of metal, the squish of clay. That’s an <b>inelastic collision</b>, and almost every real-world collision is at least a little inelastic.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> drop a steel ball-bearing and a lump of wet atta dough from the same height onto a hard floor. The steel ball bounces back up almost to where it started — barely any kinetic energy lost, nearly elastic. The dough goes splat and doesn’t bounce at all — it has handed all of its “bounce-back” energy over to deforming itself. The dough is the extreme case, a <b>perfectly inelastic collision</b>, where the colliding bodies stick together and move as one afterwards. This is the case of <b>maximum possible kinetic energy loss</b> (you can’t lose more than this, because the bodies must still share whatever momentum the system started with).',
      },
      {
        t: 'p',
        html: 'To put a number on “how bouncy” a collision is, we use the <b>coefficient of restitution</b>, <i>e</i> — the ratio of how fast the bodies separate afterwards to how fast they approached beforehand. A perfectly elastic collision has <i>e</i> = 1 (they separate just as fast as they approached); a perfectly inelastic one has <i>e</i> = 0 (they don’t separate at all — they move together); everything real lives in between, 0 < <i>e</i> < 1.<br><br>There’s a second way collisions are classified — by geometry. In a <b>head-on</b> (one-dimensional) collision, the bodies travel along the same straight line both before and after, like two carrom coins meeting dead-centre. In an <b>oblique</b> (two-dimensional) collision, they approach and leave at angles, like a cue ball clipping another ball off-centre. The crucial subtlety for oblique collisions: the impact force acts only along the <b>line of impact</b> (the line joining the centres at contact), so only the velocity components along that line change — the components perpendicular to it sail through untouched. This single idea reduces most 2-D collision problems to a 1-D collision along the line of impact plus an unchanged sideways motion.',
      },
      { t: 'fig', id: 'p11-05-fig-5.6' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>1. Momentum conservation assumes the system is <b>isolated during impact</b> — external impulsive forces (a bat being held, a wall) along the line of collision can break it. Always check the direction.<br>2. The collision time is assumed <b>negligibly short</b>, so the bodies barely move during the impact and gravity/friction can be ignored.<br>3. KE conservation holds <b>only for elastic collisions</b> (<i>e</i> = 1). Never apply it to inelastic ones.<br>4. In <b>oblique</b> collisions, only the velocity components along the line of impact change; the perpendicular components are untouched.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Conservation of momentum (ALL collisions)',
        main: '<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub> = <i>m</i><sub>1</sub><i>v</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v</i><sub>2</sub>',
        legend: ['<i>u</i> = velocities before', '<i>v</i> = velocities after'],
        note: 'signs encode direction.',
      },
      {
        t: 'formula',
        kicker: 'Coefficient of restitution',
        main: '<i>e</i> = velocity of separation/velocity of approach = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)',
        legend: [],
        note: '<i>e</i> = 1 (perfectly elastic), 0 < <i>e</i> < 1 (inelastic), <i>e</i> = 0 (perfectly inelastic).',
      },
      {
        t: 'formula',
        kicker: 'Elastic collision in 1-D — final velocities',
        main: '<i>v</i><sub>1</sub> = ((<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>u</i><sub>1</sub> + (2<i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>u</i><sub>2</sub><br><i>v</i><sub>2</sub> = (2<i>m</i><sub>1</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>u</i><sub>1</sub> + ((<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))<i>u</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Elastic shortcut (no masses needed)',
        main: 'velocity of approach = velocity of separation:<br><i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Perfectly inelastic collision — common velocity and energy loss',
        main: '<i>V</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br>Δ<i>K</i> = ½(<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Variable definitions:</b> <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> = masses; <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> / <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub> = velocities before/after; <i>V</i> = common final velocity; <i>e</i> = coefficient of restitution; Δ<i>K</i> = kinetic energy lost. All energies in joules [M L<sup>2</sup> T<sup>−2</sup>]; momentum in kg·m·s<sup>−1</sup> [M L T<sup>−1</sup>].',
      },
      {
        t: 'p',
        html: '<b>Three special cases of 1-D elastic collision (target at rest, <i>u</i><sub>2</sub> = 0):</b><br>• <b>Equal masses</b> (<i>m</i><sub>1</sub> = <i>m</i><sub>2</sub>): velocities are exchanged — <i>v</i><sub>1</sub> = 0, <i>v</i><sub>2</sub> = <i>u</i><sub>1</sub>.<br>• <b>Heavy hits light</b> (<i>m</i><sub>1</sub> ≫ <i>m</i><sub>2</sub>): <i>v</i><sub>1</sub> ≈ <i>u</i><sub>1</sub>, <i>v</i><sub>2</sub> ≈ 2<i>u</i><sub>1</sub> (light body shoots off at double speed).<br>• <b>Light hits heavy</b> (<i>m</i><sub>1</sub> ≪ <i>m</i><sub>2</sub>): <i>v</i><sub>1</sub> ≈ −<i>u</i><sub>1</sub>, <i>v</i><sub>2</sub> ≈ 0 (light body bounces straight back).',
      },

      { t: 'part', title: 'Key derivations and procedures' },
      {
        t: 'p',
        html: '<b>(A) The elastic 1-D shortcut: approach speed = separation speed</b><br><b>Setup:</b> Two bodies, masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, velocities <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub> before and <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub> after a head-on elastic collision.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Momentum conservation:</b><br><i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub> = <i>m</i><sub>1</sub><i>v</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v</i><sub>2</sub> ⇒ <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>)   (i)',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Kinetic energy conservation</b> (elastic):<br>½<i>m</i><sub>1</sub><i>u</i><sub>1</sub><sup>2</sup> + ½<i>m</i><sub>2</sub><i>u</i><sub>2</sub><sup>2</sup> = ½<i>m</i><sub>1</sub><i>v</i><sub>1</sub><sup>2</sup> + ½<i>m</i><sub>2</sub><i>v</i><sub>2</sub><sup>2</sup> ⇒ <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub><sup>2</sup> − <i>v</i><sub>1</sub><sup>2</sup>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub><sup>2</sup> − <i>u</i><sub>2</sub><sup>2</sup>)   (ii)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Divide (ii) by (i)</b> (factor each side as a difference of squares):<br><i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>)(<i>u</i><sub>1</sub> + <i>v</i><sub>1</sub>)/(<i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>)) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>)(<i>v</i><sub>2</sub> + <i>u</i><sub>2</sub>)/(<i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>)) ⇒ <i>u</i><sub>1</sub> + <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> + <i>u</i><sub>2</sub>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Rearrange:</b><br><i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>',
      },
      {
        t: 'p',
        html: 'Physical meaning: in any 1-D elastic collision, the speed at which the bodies approach each other equals the speed at which they separate — <b>regardless of their masses.</b> This is exactly the <i>e</i> = 1 statement, and it lets you replace the messy quadratic KE equation with a simple linear one, which (paired with momentum) solves any elastic collision quickly.',
      },
      {
        t: 'p',
        html: '<b>(B) Why equal masses exchange velocities</b><br>Put <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub> = <i>m</i> into momentum conservation: <i>u</i><sub>1</sub> + <i>u</i><sub>2</sub> = <i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>. Pair this with the elastic shortcut <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>. Adding and subtracting these two simple equations gives <i>v</i><sub>1</sub> = <i>u</i><sub>2</sub> and <i>v</i><sub>2</sub> = <i>u</i><sub>1</sub> — the bodies simply trade velocities. This is the physics behind Newton’s cradle: the incoming ball stops dead and the far ball leaves with its velocity.',
      },
      {
        t: 'proc',
        title: '(C) Procedure — solving any collision',
        steps: [
          '<b>Write momentum conservation first</b> — it holds for every collision. Mind the signs (pick a positive direction and stick to it).',
          '<b>Add the right second equation:</b><br>• Elastic? Use the shortcut <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub> (cleaner than the KE equation).<br>• Given <i>e</i>? Use <i>e</i> = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>).<br>• Perfectly inelastic? Set <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> = <i>V</i> (they stick) — momentum alone then suffices.',
          '<b>Solve the two equations</b> for the two unknown final velocities.',
          '<b>Sanity-check</b> with momentum (and, if elastic, KE).',
        ],
      },
      {
        t: 'p',
        html: '<b>(D) How much energy is lost when bodies stick</b><br>For a perfectly inelastic collision, the bodies move off together at <i>V</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>). The kinetic energy lost is<br>Δ<i>K</i> = (½<i>m</i><sub>1</sub><i>u</i><sub>1</sub><sup>2</sup> + ½<i>m</i><sub>2</sub><i>u</i><sub>2</sub><sup>2</sup>) − ½(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>V</i><sup>2</sup>.<br>Substituting <i>V</i> and simplifying (the algebra collapses neatly) yields the compact result<br>Δ<i>K</i> = ½(<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<sup>2</sup>',
      },
      {
        t: 'p',
        html: 'Two insights fall out of this form. First, the loss depends on the <b>relative velocity</b> (<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>) — if the bodies were moving together at the same speed, nothing would be lost (nothing actually “collides”). Second, the combination <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) (the reduced mass) shows that, for a given total mass, the loss is largest when the masses are equal. This is also the <b>maximum</b> energy any collision with these initial conditions can lose — no collision can shed more than the perfectly inelastic one, because the bodies must still carry the system’s conserved momentum.',
      },

      { t: 'part', title: 'Worked examples' },
      // The book boxes the results inside the working and prints no answer
      // line in Examples 1, 3 and 4, so those keep the whole working in steps.
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A 2 kg lump of clay moving at 6 m/s strikes a stationary 4 kg block and sticks to it. (a) Find their common velocity after collision. (b) How much kinetic energy is lost?',
        steps: [
          '<b>Given:</b> <i>m</i><sub>1</sub> = 2 kg, <i>u</i><sub>1</sub> = 6 m/s, <i>m</i><sub>2</sub> = 4 kg, <i>u</i><sub>2</sub> = 0. They stick → perfectly inelastic.',
          '<b>(a) Common velocity</b> (momentum conservation):<br><i>V</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = ((2)(6) + (4)(0))/(2 + 4) = 12/6 = 2 m/s',
          '<b>(b) Kinetic energy lost:</b><br><i>K</i><sub><i>i</i></sub> = ½<i>m</i><sub>1</sub><i>u</i><sub>1</sub><sup>2</sup> = ½(2)(6)<sup>2</sup> = 36 J,   <i>K</i><sub><i>f</i></sub> = ½(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>V</i><sup>2</sup> = ½(6)(2)<sup>2</sup> = 12 J<br>Δ<i>K</i> = <i>K</i><sub><i>i</i></sub> − <i>K</i><sub><i>f</i></sub> = 36 − 12 = 24 J lost',
          '<b>Comment:</b> Momentum is conserved (it must be), but 24 J of kinetic energy vanished into heat and deformation of the clay — the signature of an inelastic collision.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A ball moving at 8 m/s makes a head-on <b>elastic</b> collision with an identical stationary ball. The velocities of the two balls after the collision are: (a) both 4 m/s (b) 0 and 8 m/s (c) 8 and 0 m/s (d) −8 and 8 m/s',
        steps: [
          '<b>The trap:</b> Option (a) “both 4” conserves momentum (8 = 4 + 4), so a student who checks only momentum picks it. But it fails kinetic energy: before, ½<i>m</i>(8<sup>2</sup>) = 32<i>m</i>; after, ½<i>m</i>(4<sup>2</sup>) + ½<i>m</i>(4<sup>2</sup>) = 16<i>m</i>. Energy isn’t conserved, so (a) cannot be an elastic collision.',
          '<b>The fast reasoning:</b> Equal masses + elastic + head-on → they <b>exchange velocities.</b> The incoming ball stops (<i>v</i><sub>1</sub> = 0), the target leaves with 8 m/s (<i>v</i><sub>2</sub> = 8).',
          '<b>Speed tip:</b> an elastic collision demands you satisfy <b>both</b> conservation laws. Whenever masses are equal and the collision is elastic, skip the algebra entirely — just swap the velocities.',
        ],
        ans: '(b) 0 and 8 m/s.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A ball is dropped from a height of 5 m onto a hard floor and rebounds to a height of 1.8 m. (a) Find the coefficient of restitution between the ball and the floor. (b) To what height will it rise after the <b>second</b> bounce? (Combines: free-fall kinematics + coefficient of restitution.)',
        steps: [
          '<b>Step 1 — Relate restitution to heights.</b> A ball falling from height <i>h</i> arrives with speed √(2<i>gh</i>); rebounding to height <i>h</i>′ means it left with speed √(2<i>gh</i>′). The floor is stationary, so<br><i>e</i> = speed after/speed before = √(2<i>gh</i>′)/√(2<i>gh</i>) = √(<i>h</i>′/<i>h</i>).',
          '<b>(a)</b> With <i>h</i> = 5 m, <i>h</i>′ = 1.8 m:<br><i>e</i> = √(1.8/5) = √0.36 = 0.6',
          '<b>(b)</b> Each bounce multiplies the rebound height by <i>e</i><sup>2</sup> (since height ∝ speed<sup>2</sup>). The first bounce reached 1.8 m; the second reaches<br><i>h</i><sub>2</sub> = <i>e</i><sup>2</sup> × 1.8 = 0.36 × 1.8 = 0.648 m',
          '<b>Why this is JEE Main:</b> it fuses two ideas — converting drop/rise heights into impact speeds, and applying restitution — and rewards spotting the clean pattern <i>h</i><sub><i>n</i></sub> = <i>e</i><sup>2<i>n</i></sup><i>h</i> rather than re-computing each bounce from scratch.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle makes an <b>oblique elastic</b> collision with a second, identical particle that is initially at rest. (a) Prove that after the collision the two particles move at right angles to each other. (b) If one particle is found to move at 30° to the original line of motion, find the direction of the other and the ratio of their speeds. (Take the incoming speed as <i>u</i> and assume both particles move after impact.)',
        steps: [
          '<b>(a) The 90° theorem.</b> Let the incoming velocity be <i>u⃗</i> and the two final velocities <i>v⃗</i><sub>1</sub>, <i>v⃗</i><sub>2</sub>. With equal masses, conservation of momentum gives<br><i>u⃗</i> = <i>v⃗</i><sub>1</sub> + <i>v⃗</i><sub>2</sub>.',
          'Squaring (taking the dot product of each side with itself):<br><i>u</i><sup>2</sup> = <i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup> + 2 <i>v⃗</i><sub>1</sub> · <i>v⃗</i><sub>2</sub>.   (i)',
          'Conservation of kinetic energy (elastic, equal masses) gives<br><i>u</i><sup>2</sup> = <i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup>.   (ii)',
          'Comparing (i) and (ii) forces <i>v⃗</i><sub>1</sub> · <i>v⃗</i><sub>2</sub> = 0. Since neither speed is zero, the two final velocities are <b>perpendicular</b> — they separate at exactly 90°. ■',
          '<b>(b) The specific angles.</b> If one particle goes off at 30° on one side of the original direction, the 90° result puts the other at 60° on the other side. Resolve momentum along (x) and perpendicular to (y) the original line:<br>(y): <i>v</i><sub>1</sub> sin 30° = <i>v</i><sub>2</sub> sin 60° ⇒ <i>v</i><sub>1</sub>(0.5) = <i>v</i><sub>2</sub>(0.866) ⇒ <i>v</i><sub>1</sub> = √3 <i>v</i><sub>2</sub><br>(x): <i>v</i><sub>1</sub> cos 30° + <i>v</i><sub>2</sub> cos 60° = <i>u</i> ⇒ (√3<i>v</i><sub>2</sub>)(0.866) + <i>v</i><sub>2</sub>(0.5) = <i>u</i> ⇒ 2<i>v</i><sub>2</sub> = <i>u</i>',
          'So <i>v</i><sub>2</sub> = <i>u</i>/2 and <i>v</i><sub>1</sub> = (√3/2)<i>u</i>, giving a speed ratio<br><i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = √3',
          '(Quick check: <i>v</i><sub>1</sub><sup>2</sup> + <i>v</i><sub>2</sub><sup>2</sup> = ¾<i>u</i><sup>2</sup> + ¼<i>u</i><sup>2</sup> = <i>u</i><sup>2</sup> ✓ — kinetic energy is conserved, as it must be.)',
          '<b>Why this is JEE Advanced:</b> the proof uses the vector form of momentum together with energy conservation, and the numerical part demands clean 2-D resolution. The 90° result itself is a frequently-tested gem worth memorising.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 3 kg body moving at 4 m/s collides with and sticks to a stationary 1 kg body. Find their common velocity after the collision.',
            a: '3 m/s',
          },
          {
            q: '[NEET] Two identical balls undergo a head-on elastic collision; one moves at 10 m/s and the other is at rest. State their velocities after the collision.',
            a: '0 and 10 m/s (they exchange)',
          },
          {
            q: '[JEE Main] A ball dropped from 2 m rebounds to a height of 0.5 m. Find the coefficient of restitution.',
            a: '<i>e</i> = 0.5',
          },
          {
            q: '[JEE Main] A 2 kg body moving at 5 m/s collides head-on with a 3 kg body moving at 2 m/s in the opposite direction; they stick together. Find the common velocity (state its direction).',
            a: '0.8 m/s in the direction of the 2 kg body',
          },
          {
            q: '[JEE Advanced] A 1 kg ball moving at 6 m/s collides head-on <b>elastically</b> with a stationary 2 kg ball. Find the velocity of each ball after the collision.',
            a: '<i>v</i><sub>1</sub> = −2 m/s (rebounds), <i>v</i><sub>2</sub> = +4 m/s',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In which type of collision is linear momentum conserved?',
        opts: [
          {
            label: 'elastic only',
            nudge: '(a) confuses the special property of elastic collisions (energy conservation) with the universal one (momentum).',
          },
          { label: 'inelastic only', nudge: '(b) and (d) misunderstand the principle entirely.' },
          { label: 'both elastic and inelastic', nudge: null },
          { label: 'neither', nudge: '(b) and (d) misunderstand the principle entirely.' },
        ],
        correct: 2,
        solution:
          'Momentum conservation follows from Newton’s third law during impact and holds for every collision, regardless of energy loss. The one-line takeaway: momentum always, energy only if elastic.',
      },
      {
        t: 'mcq',
        q: 'The coefficient of restitution for a perfectly inelastic collision is:',
        opts: [
          {
            label: '1',
            nudge: '(a) is the value for a perfectly elastic collision — a direct swap of the two extremes.',
          },
          { label: '0', nudge: null },
          { label: 'infinite', nudge: '(c) is non-physical, since <i>e</i> can never exceed 1.' },
          { label: 'between 0 and 1', nudge: '(d) describes a partially inelastic collision.' },
        ],
        correct: 1,
        solution:
          'The bodies stick and move together, so their velocity of separation is zero, giving <i>e</i> = 0.',
      },
      {
        t: 'mcq',
        q: 'A very heavy ball moving with speed <i>u</i> collides head-on elastically with a very light stationary ball. The light ball moves off with a speed of approximately:',
        opts: [
          { label: '<i>u</i>', nudge: '(a) is the heavy ball’s speed, not the light one’s.' },
          { label: '2<i>u</i>', nudge: null },
          { label: '<i>u</i>/2', nudge: '(c) halves it for no reason.' },
          { label: 'zero', nudge: '(d) would be true if the masses were reversed (light hitting heavy).' },
        ],
        correct: 1,
        solution:
          'For <i>m</i><sub>1</sub> ≫ <i>m</i><sub>2</sub> with the light body at rest, the heavy ball ploughs on at nearly <i>u</i>, while the light ball is flung off at about 2<i>u</i>. Recall the limiting cases as a set so you don’t mix them up.',
      },
      {
        t: 'mcq',
        q: 'Two identical balls, one moving and one stationary, undergo a head-on elastic collision. Immediately after:',
        opts: [
          {
            label: 'both move with half the original speed',
            nudge: '(a) conserves momentum but <b>not</b> kinetic energy, so it can’t be elastic — the classic trap.',
          },
          { label: 'they exchange velocities', nudge: null },
          {
            label: 'they stick and move together',
            nudge: '(c) describes a perfectly inelastic collision, not an elastic one.',
          },
          { label: 'both reverse direction', nudge: '(d) violates momentum conservation outright.' },
        ],
        correct: 1,
        solution:
          'Equal masses + elastic + head-on means the mover stops and the target takes off with the mover’s velocity.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Applying kinetic-energy conservation to an inelastic collision.</b> KE is conserved <b>only</b> when <i>e</i> = 1 (elastic). For inelastic and perfectly inelastic collisions, use momentum (plus <i>e</i>, or the stick-together condition) — never set <i>K</i><sub><i>i</i></sub> = <i>K</i><sub><i>f</i></sub>.',
          '<b>Saying momentum is “lost” in an inelastic collision.</b> Momentum is <b>always</b> conserved. What’s lost is kinetic energy (to heat, sound, deformation). Don’t confuse the two conserved-or-not statuses.',
          '<b>Dropping the sign on velocities.</b> Momentum is a vector. A ball that rebounds has a negative velocity relative to its approach; forgetting this corrupts the momentum equation. Fix a positive direction at the start.',
          '<b>Over-using the velocity-exchange rule.</b> “They swap velocities” is true <b>only</b> for equal masses in an elastic head-on collision. Apply it to unequal masses or inelastic collisions and you’ll get nonsense.',
          '<b>Mishandling oblique collisions.</b> The coefficient of restitution and the collision equations apply only to the velocity components along the line of impact. The perpendicular components don’t change at all. Treating the total speeds with the restitution formula — instead of resolving along and across the line of impact first — is a frequent JEE Advanced slip.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Build a fixed two-step reflex. First, always write momentum conservation — it’s true for every collision. Second, attach the right partner equation: the approach-equals-separation shortcut if elastic, <i>e</i> = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>) if a restitution is given, or <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> = <i>V</i> if they stick. For oblique elastic collisions between equal masses, remember the bodies fly apart at 90° when one of them starts at rest — it often hands you an angle for free. These shortcuts turn a two-equation grind into a few lines.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Momentum conserved in ALL collisions',
            note: '<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub> = <i>m</i><sub>1</sub><i>v</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v</i><sub>2</sub>',
          },
          {
            f: 'Elastic (<i>e</i> = 1)',
            note: 'KE also conserved; approach speed = separation speed, <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>',
          },
          {
            f: 'Inelastic (0 < <i>e</i> < 1)',
            note: 'KE lost. Perfectly inelastic (<i>e</i> = 0): bodies stick, maximum KE loss',
          },
          {
            f: 'Coefficient of restitution',
            note: '<i>e</i> = velocity of separation/velocity of approach = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)',
          },
          {
            f: 'Elastic 1-D',
            note: '<i>v</i><sub>1</sub> = ((<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>u</i><sub>1</sub> + 2<i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>v</i><sub>2</sub> = ((<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)<i>u</i><sub>2</sub> + 2<i>m</i><sub>1</sub><i>u</i><sub>1</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
          },
          { f: 'Equal masses, elastic, head-on → exchange velocities', note: '' },
          {
            f: 'Perfectly inelastic',
            note: '<i>V</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>); KE loss = ½(<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<sup>2</sup>',
          },
          { f: 'Equal masses, oblique, elastic (one at rest) → separate at 90°', note: '' },
          {
            f: 'Bounce heights',
            note: '<i>e</i> = √(<i>h</i>′/<i>h</i>); after <i>n</i> bounces <i>h</i><sub><i>n</i></sub> = <i>e</i><sup>2<i>n</i></sup><i>h</i>',
          },
        ],
        aids: [
          '“Momentum always; energy only if elastic.”',
          '“Stick together = <i>e</i> = 0 = maximum energy lost.”',
          '“Equal-mass elastic = swap.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 08 · pp. 341–347 ─────────────────────────
  {
    n: '08',
    title: 'Application: Motion in a Vertical Circle',
    kalam:
      'That single condition, “tension = 0 at the top,” is the key that unlocks every vertical-circle problem.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the flagship application of conservation of mechanical energy, and a near-guaranteed exam topic. CBSE Boards ask the minimum-speed derivations (3 marks). NEET asks 1 question yearly — usually minimum speed at the top, or the <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> result. JEE Main reliably asks 1–2 questions combining energy conservation with the tension equation. JEE Advanced favours the regime analysis (complete the loop vs leave the track vs oscillate) and the angle at which a string goes slack.',
      },
      {
        t: 'p',
        html: 'Tie a small stone to a string and whirl it in a vertical circle — the kind of thing you’ve seen with a bucket of water swung overhead without a drop falling out. Something interesting is happening: the stone speeds up as it swings down and slows as it climbs, because gravity does positive work on the way down and negative work on the way up. The motion is not uniform circular motion — the speed changes continuously around the loop.<br><br>Two forces act on the stone: gravity (always straight down) and the string tension (always along the string, pulling inward toward the centre). At every instant, the net inward force must supply the centripetal force <i>mv</i><sup>2</sup>/<i>R</i> needed to keep the stone on its circular path. The trouble spot is the <b>top</b> of the circle. There, both gravity and tension point downward — toward the centre — so they add to provide the centripetal force. But a string can only pull, never push. If the stone moves too slowly at the top, the required centripetal force becomes less than gravity alone, the string goes slack, and the stone falls out of its circular path.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the bucket of water overhead stays full only if you swing it fast enough. At the very top, the water needs a downward centripetal force to keep curving with the bucket. If the bucket (and water) move fast enough, gravity alone isn’t enough — the bucket’s base has to push down on the water too, and by Newton’s third law the water pushes up on the base, staying put. But swing too slowly and gravity is more than the centripetal requirement; the water “wants” to fall faster than the circle curves, leaves the base, and spills. The critical case — the slowest possible successful swing — is when, at the top, <b>gravity alone exactly provides the centripetal force</b> and the contact force (or string tension) drops to zero.',
      },
      {
        t: 'p',
        html: 'That single condition, “tension = 0 at the top,” is the key that unlocks every vertical-circle problem. Setting it gives the <b>minimum speed at the top</b>, <i>v</i><sub>top</sub> = √(<i>gR</i>). Then energy conservation carries that condition anywhere else on the loop — most usefully to the bottom, giving the <b>minimum launch speed</b> <i>v</i><sub>bottom</sub> = √(5<i>gR</i>) needed to just complete the circle.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>1. These string/bucket results assume a flexible string (or the inside of a track) that can <b>only pull/push inward</b> — it cannot push outward. A rigid rod changes the answers (it can support the bob, so the top speed can be zero).<br>2. The track/string is assumed of fixed length <i>R</i> and the bob a point mass; air resistance is neglected.<br>3. The speed varies around the loop — never use a single constant speed. Always connect two points with <b>energy conservation</b>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Centripetal (radial) equation at angle θ measured from the lowest point',
        main: '<i>T</i> − <i>mg</i> cos <i>θ</i> = <i>mv</i><sup>2</sup>/<i>R</i> ⇒ <i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> cos <i>θ</i>',
        legend: [],
        note: '(At the bottom <i>θ</i> = 0: <i>T</i> − <i>mg</i> = <i>mv</i><sup>2</sup>/<i>R</i>. At the top <i>θ</i> = 180°: <i>T</i> + <i>mg</i> = <i>mv</i><sup>2</sup>/<i>R</i>.)',
      },
      {
        t: 'formula',
        kicker: 'Speed at any point via energy conservation (height h above the lowest point)',
        main: '<i>v</i><sup>2</sup> = <i>v</i><sub>bottom</sub><sup>2</sup> − 2<i>gh</i><br><i>h</i> = <i>R</i>(1 − cos <i>θ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Critical (minimum) speeds for a string/track to just complete the loop',
        main: '<i>v</i><sub>top</sub> = √(<i>gR</i>)<br><i>v</i><sub>bottom</sub> = √(5<i>gR</i>)<br><i>v</i><sub>side</sub> = √(3<i>gR</i>)',
        legend: [],
        note: '(side = at the horizontal level of the centre).',
      },
      {
        t: 'formula',
        kicker: 'Tensions in the minimum (just-completing) case',
        main: '<i>T</i><sub>top</sub> = 0<br><i>T</i><sub>bottom</sub> = 6<i>mg</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Tension difference (true for any speed that completes the circle)',
        main: '<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Variable definitions:</b> <i>T</i> = string tension, <i>m</i> = mass, <i>R</i> = radius, <i>v</i> = speed at the point, <i>θ</i> = angle from the lowest point, <i>h</i> = height above the lowest point, <i>g</i> = gravitational acceleration.',
      },
      {
        t: 'p',
        html: '<b>Three regimes</b> (string/track, launch speed <i>u</i> at the bottom):<br>• <i>u</i> ≥ √(5<i>gR</i>) → <b>completes the full vertical circle.</b><br>• <i>u</i> ≤ √(2<i>gR</i>) → <b>oscillates</b> like a pendulum (never rises above the horizontal).<br>• √(2<i>gR</i>) < <i>u</i> < √(5<i>gR</i>) → string goes <b>slack in the upper half; the bob leaves the circular path</b> and becomes a projectile.',
      },
      {
        t: 'p',
        html: '<b>Rigid rod (instead of string):</b> a rod can push outward, so the minimum top speed is <i>v</i><sub>top</sub> = 0, giving a minimum bottom speed of <i>v</i><sub>bottom</sub> = √(4<i>gR</i>) = 2√(<i>gR</i>) to complete the loop.',
      },

      { t: 'part', title: 'CBSE board derivation — Minimum speeds' },
      {
        t: 'p',
        html: '<b>Setup / assumptions:</b> A bob of mass <i>m</i> on a string of length <i>R</i> moves in a vertical circle. We find the slowest speed at the top that keeps the string taut, then the corresponding speed at the bottom.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Condition at the top.</b> At the topmost point, both the weight <i>mg</i> and the tension <i>T</i> point downward (toward the centre). The radial equation is<br><i>T</i> + <i>mg</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>R</i>.<br>Why: the net inward force supplies the centripetal force.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Impose the critical (minimum) condition.</b> The slowest the bob can go while keeping the string taut is when the tension just reaches zero (<i>T</i> = 0):<br><i>mg</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>R</i> ⇒ <i>v</i><sub>top</sub> = √(<i>gR</i>)<br>Why: below this speed, gravity exceeds the centripetal requirement, the string slackens, and the bob leaves the circle.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Relate top and bottom by energy conservation.</b> Going from the bottom to the top, the bob rises a height 2<i>R</i>. With only gravity doing work (tension is always perpendicular to motion and does none):<br>½<i>mv</i><sub>bottom</sub><sup>2</sup> = ½<i>mv</i><sub>top</sub><sup>2</sup> + <i>mg</i>(2<i>R</i>)<br><i>v</i><sub>bottom</sub><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gR</i> = <i>gR</i> + 4<i>gR</i> = 5<i>gR</i> ⇒ <i>v</i><sub>bottom</sub> = √(5<i>gR</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Tension at the bottom (minimum case).</b> At the bottom, tension points up and gravity down:<br><i>T</i><sub>bottom</sub> − <i>mg</i> = <i>mv</i><sub>bottom</sub><sup>2</sup>/<i>R</i> = <i>m</i>(5<i>gR</i>)/<i>R</i> = 5<i>mg</i> ⇒ <i>T</i><sub>bottom</sub> = 6<i>mg</i>.',
      },
      {
        t: 'p',
        html: 'Combined with <i>T</i><sub>top</sub> = 0, this gives the memorable result <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> — which in fact holds for any speed with which the bob completes the circle, not just the minimum (energy conservation over the height difference 2<i>R</i> supplies 4<i>mg</i>; the other 2<i>mg</i> is the weight, which acts against the tension at the bottom but along it at the top).',
      },

      { t: 'part', title: 'Worked examples' },
      // The book boxes the results inside the working and prints no answer
      // line in Examples 1, 3 and 4, so those keep the whole working in steps.
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A stone of mass 0.2 kg is tied to a string of length 1 m and whirled in a vertical circle. Find (a) the minimum speed at the highest point and (b) the minimum speed at the lowest point needed to just complete the circle. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>Given:</b> <i>m</i> = 0.2 kg, <i>R</i> = 1 m.',
          '<b>(a) Minimum speed at the top:</b><br><i>v</i><sub>top</sub> = √(<i>gR</i>) = √((10)(1)) = √10 ≈ 3.16 m/s',
          '<b>(b) Minimum speed at the bottom:</b><br><i>v</i><sub>bottom</sub> = √(5<i>gR</i>) = √(5(10)(1)) = √50 ≈ 7.07 m/s',
          '<b>Comment:</b> The mass never entered the speed answers — the critical speeds depend only on <i>g</i> and <i>R</i>. (Mass would matter if the question asked for tension.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A body of mass 0.5 kg is whirled in a vertical circle, completing it. The difference between the maximum and minimum tension in the string is: (a) needs the speed to find (b) 30 N (c) 5 N (d) 15 N',
        steps: [
          '<b>The trap:</b> Students assume they need the speed or radius and pick (a), or compute a tension at one point only.',
          '<b>The fast reasoning:</b> Regardless of speed (as long as the bob completes the circle), the difference between the bottom (maximum) and top (minimum) tension is always<br><i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> = 6(0.5)(10) = 30 N.',
          '<b>Speed tip:</b> memorise <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> — it needs neither speed nor radius, only the mass, and turns a scary-looking question into a one-line answer.',
        ],
        ans: '(b) 30 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 2 kg ball is whirled in a vertical circle of radius 0.5 m. At the lowest point its speed is 6 m/s. Find (a) its speed at the highest point and (b) the tension in the string at the lowest point. Take <i>g</i> = 10 m/s<sup>2</sup>. Does it complete the circle? (Combines: energy conservation + centripetal tension equation.)',
        steps: [
          '<b>Step 1 — Speed at the top (energy conservation, rise = 2<i>R</i> = 1 m):</b><br><i>v</i><sub>top</sub><sup>2</sup> = <i>v</i><sub>bottom</sub><sup>2</sup> − 4<i>gR</i> = (6)<sup>2</sup> − 4(10)(0.5) = 36 − 20 = 16 ⇒ <i>v</i><sub>top</sub> = 4 m/s',
          '<b>Check completion:</b> the minimum top speed is √(<i>gR</i>) = √((10)(0.5)) = √5 ≈ 2.24 m/s. Since 4 > 2.24, the string stays taut — <b>yes, it completes the circle.</b>',
          '<b>Step 2 — Tension at the bottom:</b><br><i>T</i><sub>bottom</sub> = <i>mv</i><sub>bottom</sub><sup>2</sup>/<i>R</i> + <i>mg</i> = (2)(6)<sup>2</sup>/0.5 + (2)(10) = 72/0.5 + 20 = 144 + 20 = 164 N',
          '<b>Why this is JEE Main:</b> it threads energy conservation (to get the top speed) into the centripetal equation (to get the tension), with a completion check in between — the standard multi-step vertical-circle problem.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A bob on a string of length <i>R</i> is given a speed <i>u</i> = √(3<i>gR</i>) at the lowest point. Show that the bob does not complete the circle, and find the angle (measured from the lowest point) at which the string goes slack.',
        steps: [
          '<b>Step 1 — Will it complete the loop?</b> The launch speed is <i>u</i> = √(3<i>gR</i>). Since √(2<i>gR</i>) < √(3<i>gR</i>) < √(5<i>gR</i>), the bob is in the middle regime: it rises past the horizontal but the string slackens before the top — it does <b>not</b> complete the circle.',
          '<b>Step 2 — Speed at angle <i>θ</i> from the bottom</b> (height <i>h</i> = <i>R</i>(1 − cos <i>θ</i>)):<br><i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> − 2<i>gR</i>(1 − cos <i>θ</i>) = 3<i>gR</i> − 2<i>gR</i> + 2<i>gR</i> cos <i>θ</i> = <i>gR</i>(1 + 2 cos <i>θ</i>)',
          '<b>Step 3 — Condition for the string to go slack</b> (<i>T</i> = 0). The radial equation <i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> cos <i>θ</i> set to zero gives<br><i>mv</i><sup>2</sup>/<i>R</i> = −<i>mg</i> cos <i>θ</i> ⇒ <i>v</i><sup>2</sup> = −<i>gR</i> cos <i>θ</i><br>(possible only where cos <i>θ</i> < 0, i.e. in the upper half — as expected).',
          '<b>Step 4 — Equate the two expressions for <i>v</i><sup>2</sup>:</b><br><i>gR</i>(1 + 2 cos <i>θ</i>) = −<i>gR</i> cos <i>θ</i> ⇒ 1 + 2 cos <i>θ</i> = −cos <i>θ</i> ⇒ 3 cos <i>θ</i> = −1<br>cos <i>θ</i> = −1/3 ⇒ <i>θ</i> = cos<sup>−1</sup>(−1/3) ≈ 109.5°',
          'So the string goes slack at about 109.5° from the bottom (roughly 19.5° above the horizontal), after which the bob flies off as a projectile.',
          '<b>Why this is JEE Advanced:</b> it requires recognising the regime, writing <i>v</i><sup>2</sup>(<i>θ</i>) from energy conservation, imposing <i>T</i> = 0, and solving simultaneously — the complete toolkit for “where does it leave the track?” problems.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A ball tied to a string of length 0.4 m is whirled in a vertical circle. Find the minimum speed at the top. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '√(<i>gR</i>) = 2 m/s',
          },
          {
            q: '[NEET] For a 1 kg stone whirled in a vertical circle, completing it, find the difference between the tensions at the lowest and highest points. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '6<i>mg</i> = 60 N',
          },
          {
            q: '[JEE Main] A bob of mass 0.5 kg on a string of length 1 m has a speed of 5 m/s at the top of a vertical circle. Find the tension at the top. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> − <i>mg</i> = (0.5×25)/1 − 5 = 12.5 − 5 = 7.5 N',
          },
          {
            q: '[JEE Main] What minimum speed at the lowest point lets a ball complete a vertical circle of radius 0.8 m? (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '√(5<i>gR</i>) = √40 ≈ 6.32 m/s',
          },
          {
            q: '[JEE Advanced] A mass on a rigid rod of length <i>R</i> is whirled in a vertical circle. Find the minimum speed at the lowest point required to complete the circle, and explain why it differs from the string case.',
            a: '<i>v</i><sub>bottom</sub> = √(4<i>gR</i>) = 2√(<i>gR</i>); a rod can push, so the top speed can be zero (<i>v</i><sub>top</sub> = 0), unlike a string which must stay taut (<i>v</i><sub>top</sub> = √(<i>gR</i>))',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The minimum speed at the highest point of a vertical circle of radius <i>R</i> (string) is:',
        opts: [
          { label: '√(2<i>gR</i>)', nudge: '(a) has no basis here.' },
          { label: '√(<i>gR</i>)', nudge: null },
          { label: '√(5<i>gR</i>)', nudge: '(c) √(5<i>gR</i>) is the speed at the bottom, not the top.' },
          { label: 'zero', nudge: '(d) zero applies to a rigid rod, not a string — a string would go slack.' },
        ],
        correct: 1,
        solution:
          'At the top, the minimum-speed condition is tension = 0, so gravity alone supplies the centripetal force: <i>mg</i> = <i>mv</i><sup>2</sup>/<i>R</i> ⇒ <i>v</i> = √(<i>gR</i>).',
      },
      {
        t: 'mcq',
        q: 'For a body completing a vertical circle, the ratio of the maximum to minimum speed (bottom to top, minimum case) is:',
        opts: [
          {
            label: '5 : 1',
            nudge: '(a) 5 : 1 is the ratio of the squares of the speeds (i.e. of kinetic energies), not the speeds themselves.',
          },
          { label: '√5 : 1', nudge: null },
          { label: '3 : 1', nudge: '(c) has no basis.' },
          { label: '6 : 1', nudge: '(d) borrows the 6 from the tension result <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> — a difference of tensions, not a ratio of speeds.' },
        ],
        correct: 1,
        solution:
          'The speeds are <i>v</i><sub>bottom</sub> = √(5<i>gR</i>) and <i>v</i><sub>top</sub> = √(<i>gR</i>), so the ratio is √(5<i>gR</i>) : √(<i>gR</i>) = √5 : 1.',
      },
      {
        t: 'mcq',
        q: 'The difference in tension between the lowest and highest points for a body completing a vertical circle (mass <i>m</i>) is:',
        opts: [
          { label: '2<i>mg</i>', nudge: '(a) and (b) under-count the contributions.' },
          { label: '3<i>mg</i>', nudge: '(a) and (b) under-count the contributions.' },
          { label: '6<i>mg</i>', nudge: null },
          {
            label: 'depends on the speed',
            nudge: '(d) is the tempting trap — it feels like faster motion should change the difference, but as long as the circle is completed the speed-dependence cancels, leaving exactly 6<i>mg</i>.',
          },
        ],
        correct: 2,
        solution:
          'Energy conservation over the height difference 2<i>R</i> gives <i>v</i><sub>bottom</sub><sup>2</sup> − <i>v</i><sub>top</sub><sup>2</sup> = 4<i>gR</i>, i.e. 4<i>mg</i> in the radial equations; the weight adds another 2<i>mg</i> (it opposes <i>T</i> at the bottom and adds to it at the top). So <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>, independent of speed as long as the circle is completed.',
      },
      {
        t: 'mcq',
        q: 'A ball is given a speed √(2<i>gR</i>) at the lowest point of a vertical circle (string). It will:',
        opts: [
          { label: 'complete the circle', nudge: '(a) needs <i>u</i> ≥ √(5<i>gR</i>).' },
          { label: 'oscillate without rising above the horizontal', nudge: null },
          {
            label: 'leave the track in the upper half',
            nudge: '(c) needs √(2<i>gR</i>) < <i>u</i> < √(5<i>gR</i>) (strictly greater).',
          },
          {
            label: 'stop at the top',
            nudge: '(d) “stop at the top” can’t happen on a string — it would have slackened far earlier.',
          },
        ],
        correct: 1,
        solution:
          'With <i>u</i> = √(2<i>gR</i>), the bob just reaches the horizontal level (<i>h</i> = <i>R</i>) where its speed becomes zero, then swings back — pendulum-like motion. The launch speed sorts the outcome into one of three regimes.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using a single constant speed around the loop.</b> The speed changes continuously (slowest at top, fastest at bottom). Always link two points with <b>energy conservation</b>; never assume uniform circular motion.',
          '<b>Forgetting that a string can’t push.</b> The “tension = 0” critical condition exists because a string only pulls. A rigid rod can push, so its minimum top speed is zero — a different answer (<i>v</i><sub>bottom</sub> = 2√(<i>gR</i>)).',
          '<b>Mixing up the critical speeds.</b> √(<i>gR</i>) is at the <b>top</b>, √(5<i>gR</i>) at the <b>bottom</b>, √(3<i>gR</i>) at the <b>side</b>. Sketch the circle and label them to avoid swapping.',
          '<b>Thinking <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> needs the speed.</b> It doesn’t — as long as the circle is completed, the result is speed-independent. Reaching for the speed wastes time.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Tackle every vertical-circle problem in the same order: (1) apply the radial equation at the relevant point, (2) connect points with energy conservation (<i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> − 2<i>gh</i>), (3) use the critical conditions (<i>T</i> = 0 at the top for the minimum case). Keep the three speeds √(<i>gR</i>), √(3<i>gR</i>), √(5<i>gR</i>) and the result <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> on instant recall — they alone answer most MCQs.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Radial equation (angle <i>θ</i> from bottom)',
            note: '<i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> cos <i>θ</i>',
          },
          {
            f: 'Energy link',
            note: '<i>v</i><sup>2</sup> = <i>v</i><sub>bottom</sub><sup>2</sup> − 2<i>gh</i>, <i>h</i> = <i>R</i>(1 − cos <i>θ</i>)',
          },
          {
            f: 'Critical speeds (string)',
            note: 'top √(<i>gR</i>) · side √(3<i>gR</i>) · bottom √(5<i>gR</i>)',
          },
          {
            f: 'Minimum-case tensions',
            note: '<i>T</i><sub>top</sub> = 0, <i>T</i><sub>bottom</sub> = 6<i>mg</i>',
          },
          {
            f: 'Whenever the circle is completed',
            note: '<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> (speed-independent)',
          },
          {
            f: 'Regimes (launch speed <i>u</i>)',
            note: '<i>u</i> ≥ √(5<i>gR</i>) completes · <i>u</i> ≤ √(2<i>gR</i>) oscillates · between → leaves track',
          },
          {
            f: 'Rigid rod',
            note: 'top speed can be 0, so <i>v</i><sub>bottom</sub> = 2√(<i>gR</i>) to complete',
          },
        ],
        aids: [
          '“Top needs √(<i>gR</i>), bottom needs √(5<i>gR</i>).”',
          '“<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>, whenever it loops.”',
          '“String pulls only; rod can push.”',
        ],
      },
    ],
  },
];
