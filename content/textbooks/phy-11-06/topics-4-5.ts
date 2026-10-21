import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 04 and 05, pp. 386–406 of the Class 11 Physics Master
 * Reference, word for word: Torque and Angular Momentum (pp. 386 to 396) and
 * Equilibrium of a Rigid Body (pp. 397 to 406), each split at the book's
 * Sections 1 to 8. Figures 6.3 (p. 391, drawn on p. 393), 6.4 (p. 399, drawn
 * on p. 400), 6.5 and 6.6 (p. 402, drawn on p. 403).
 */
export const TOPICS: Topic[] = [
  {
    n: '04',
    title: 'Torque and Angular Momentum',
    kalam: 'Torque is the turning effect of a force — how effectively a push makes something rotate.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the dynamical heart of the chapter. JEE Main asks 1–2 questions yearly — usually <i>τ</i> = d<i>L</i>/d<i>t</i>, conservation problems, or angular momentum of a projectile. NEET keeps it conceptual: the spinning-skater idea and “is angular momentum conserved here?” JEE Advanced pushes into angular impulse and collisions involving rotation. CBSE Boards wants the <i>τ⃗</i> = d<i>L⃗</i>/d<i>t</i> derivation and the conservation law stated cleanly.',
      },
      {
        t: 'p',
        html: 'Think about the last time you opened a heavy door. Without realising it, you pushed on the handle — the edge farthest from the hinges. Nobody pushes near the hinge; it feels useless, and it is. That instinct is the entire concept of <b>torque</b> living inside your muscle memory.<br><br>Torque is the <b>turning effect of a force</b> — how effectively a push makes something rotate. And it depends on three things: how hard you push, where you push (distance from the pivot), and in which direction you push. The door teaches all three. Push harder → it swings faster. Push farther from the hinge → much easier. Push toward the hinge instead of perpendicular to the door → nothing happens at all, no matter how hard you shove.',
      },
      {
        t: 'p',
        html: 'That last point is the one students forget. Only the part of the force that is <b>perpendicular</b> to the line joining the pivot and the push contributes to turning. A force aimed straight at the axis has zero turning effect. This is why a mechanic loosening a tight bolt grabs the longest spanner and pushes at right angles to it — maximum distance, maximum perpendicular force, maximum torque.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A thela-wala (handcart vendor) pushing his cart to turn a corner pushes sideways on the far end of the handle, never straight down the middle. Long arm, sideways push — that’s torque optimised by intuition.',
      },
      {
        t: 'p',
        html: 'One special case worth naming: a <b>couple</b> — two equal, opposite, parallel forces whose lines of action don’t coincide (think of your two hands turning a steering wheel, or twisting a water-bottle cap). A couple produces pure rotation with no net force, and its torque is simply <i>τ</i> = <i>Fd</i>, where <i>d</i> is the perpendicular distance between the two forces. Steering wheels, taps, and screwdrivers all run on couples.<br><br>A quick word on <b>direction</b>. Torque and angular momentum are axial vectors — they point along the rotation axis, not in the plane of motion. To find which way, use the right-hand rule: curl the fingers of your right hand in the sense of rotation, and your thumb points along <i>τ⃗</i> (or <i>L⃗</i>). Anticlockwise rotation (seen from the front) points the vector toward you; clockwise points it away.',
      },
      {
        t: 'p',
        html: 'Now the partner concept: <b>angular momentum</b>. If torque is the rotational cousin of force, angular momentum <i>L⃗</i> is the rotational cousin of linear momentum <i>p⃗</i>. It’s the “quantity of rotational motion” stored in a spinning body — and like linear momentum, it resists being changed. A spinning top stays upright, a moving bicycle is far easier to balance than a stationary one, and a spinning cricket ball holds its line — all because angular momentum is “locked in” and only an external torque can change it.',
      },
      {
        t: 'p',
        html: 'The most famous demonstration is one you’ve seen at every wedding sangeet. A dancer doing fast chakkars (spins) starts with arms outstretched, then pulls them in — and suddenly whips around much faster. No one pushed them. They simply moved their mass closer to the spin axis, shrinking their moment of inertia <i>I</i>. Since angular momentum <i>L</i> = <i>Iω</i> must stay constant (there’s no external torque about the vertical axis), shrinking <i>I</i> forces <i>ω</i> to shoot up. Pull arms in → spin faster. Stretch arms out → slow down. That’s conservation of angular momentum in a single graceful move.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Sit on a rotating office chair, give yourself a spin with legs stretched out, then tuck them in. You’ll speed up noticeably. Your body just ran a physics experiment.',
      },
      {
        t: 'p',
        html: 'The same law operates on a cosmic scale. A planet orbiting the Sun feels a force always directed toward the Sun, so that force has zero torque about the Sun (its moment arm is zero). Angular momentum about the Sun is therefore conserved — which is exactly why a planet speeds up when it swings close to the Sun and slows down when far away, sweeping out equal areas in equal times. This is Kepler’s second law, and it’s nothing more than conservation of angular momentum in disguise. Push it further and you get one of the most dramatic events in physics: when a giant star collapses into a tiny neutron star, its radius crashes by a factor of thousands, its moment of inertia plummets, and to conserve <i>L</i> its spin rate explodes — some neutron stars rotate hundreds of times per second. Same dancer, same law, unimaginably larger stage.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>1. <b>Torque and angular momentum are always defined about a chosen point or axis.</b> Change the reference point and the numbers change. There’s no such thing as “the torque” in the abstract — always ask “about which point?”<br>2. <b>Conservation of angular momentum holds only when the net external torque is zero.</b> Internal forces (like the dancer’s muscles, or friction between coupling wheels) can rearrange <i>I</i> and <i>ω</i> but can never change the total <i>L</i>.<br>3. <b>It’s component-wise.</b> If the external torque is zero along one particular axis, only the angular momentum along that axis is conserved — the others may still change.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Torque (moment of force) about a point',
        main: '<i>τ⃗</i> = <i>r⃗</i> × <i>F⃗</i>, |<i>τ⃗</i>| = <i>rF</i> sin <i>θ</i> = <i>r</i><sub>⊥</sub><i>F</i> = <i>rF</i><sub>⊥</sub>',
        legend: [
          '<i>r</i><sub>⊥</sub> = <i>r</i> sin <i>θ</i> is the <b>moment arm</b> (perpendicular distance from the axis to the line of action of the force)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rotational form of Newton’s second law',
        main: '<i>τ⃗</i><sub>net</sub> = <i>Iα⃗</i> = d<i>L⃗</i>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angular momentum of a particle about a point',
        main: '<i>L⃗</i> = <i>r⃗</i> × <i>p⃗</i> = <i>r⃗</i> × <i>mv⃗</i>, |<i>L⃗</i>| = <i>mvr</i> sin <i>θ</i> = <i>pr</i><sub>⊥</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angular momentum of a rigid body about a fixed axis',
        main: '<i>L⃗</i> = <i>Iω⃗</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angular impulse–momentum principle',
        main: '<i>J⃗</i> = ∫<sub><i>t</i>₁</sub><sup><i>t</i>₂</sup> <i>τ⃗</i> d<i>t</i> = Δ<i>L⃗</i> = <i>L⃗</i><sub><i>f</i></sub> − <i>L⃗</i><sub><i>i</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conservation of angular momentum',
        main: '(when <i>τ⃗</i><sub>ext</sub> = 0⃗):<br><i>L⃗</i> = constant ⇒ <i>I</i><sub>1</sub><i>ω</i><sub>1</sub> = <i>I</i><sub>2</sub><i>ω</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rotational kinetic energy',
        main: '<i>K</i><sub>rot</sub> = ½<i>Iω</i><sup>2</sup> = <i>L</i><sup>2</sup>/2<i>I</i> = ½<i>Lω</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Work and power in rotation',
        main: '<i>W</i> = ∫ <i>τ⃗</i> · d<i>θ⃗</i> = <i>τθ</i> (<i>τ</i> constant), <i>P</i> = <i>τ⃗</i> · <i>ω⃗</i>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Notation & dimensions',
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Torque', '<i>τ</i>', 'N · m', '[M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]'],
          ['Angular momentum', '<i>L</i>', 'kg · m<sup>2</sup> · s<sup>−1</sup> = J · s', '[M<sup>1</sup> L<sup>2</sup> T<sup>−1</sup>]'],
          ['Moment of inertia', '<i>I</i>', 'kg · m<sup>2</sup>', '[M<sup>1</sup> L<sup>2</sup> T<sup>0</sup>]'],
          ['Angular impulse', '<i>J</i>', 'N · m · s = J · s', '[M<sup>1</sup> L<sup>2</sup> T<sup>−1</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '(Note that torque and energy have the same dimensions [M L<sup>2</sup> T<sup>−2</sup>], but torque is a vector measured in N · m, never joules — keep them mentally separate.)',
      },

      { t: 'part', title: 'CBSE board derivation — relation between torque and angular momentum' },
      {
        t: 'p',
        html: 'We will prove the single most important equation of rotational dynamics: that the rate of change of angular momentum equals the applied torque. From it, conservation of angular momentum falls out instantly.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Start from the definition of angular momentum of a particle.</b><br><i>L⃗</i> = <i>r⃗</i> × <i>p⃗</i> = <i>r⃗</i> × <i>mv⃗</i>',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Differentiate both sides with respect to time.</b> Angular momentum changes as both <i>r⃗</i> and <i>p⃗</i> evolve, so we apply the product rule for the cross product (order matters in a cross product, so we keep it):<br>d<i>L⃗</i>/d<i>t</i> = (d<i>r⃗</i>/d<i>t</i>) × <i>p⃗</i> + <i>r⃗</i> × (d<i>p⃗</i>/d<i>t</i>)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Examine the first term and watch it vanish.</b> Now, d<i>r⃗</i>/d<i>t</i> = <i>v⃗</i> and <i>p⃗</i> = <i>mv⃗</i>, so the first term is:<br><i>v⃗</i> × <i>mv⃗</i> = <i>m</i>(<i>v⃗</i> × <i>v⃗</i>) = 0⃗<br>This is zero because the cross product of any vector with itself is zero — <i>v⃗</i> is parallel to itself, so sin 0° = 0. This is the crucial step: velocity and momentum point the same way, so they contribute no turning effect.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Identify the second term.</b> By Newton’s second law, d<i>p⃗</i>/d<i>t</i> = <i>F⃗</i>. Therefore:<br>d<i>L⃗</i>/d<i>t</i> = <i>r⃗</i> × <i>F⃗</i> = <i>τ⃗</i>',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Result.</b><br><i>τ⃗</i><sub>ext</sub> = d<i>L⃗</i>/d<i>t</i><br>This is Newton’s second law written in angular language — the rotational twin of <i>F⃗</i> = d<i>p⃗</i>/d<i>t</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 6 — The conservation law as a corollary.</b> If the net external torque is zero, then:<br>d<i>L⃗</i>/d<i>t</i> = 0⃗ ⇒ <i>L⃗</i> = constant<br>This is the <b>law of conservation of angular momentum</b>: if no net external torque acts on a system, its total angular momentum stays constant, no matter what internal rearrangements occur. The dancer pulling in her arms, two wheels coupling on a shaft, and a planet sweeping along its orbit are all governed by this one line.',
      },
      {
        t: 'p',
        html: 'When you’re given vectors directly, use the determinant form. For <i>r⃗</i> = <i>xî</i> + <i>yĵ</i> + <i>zk̂</i> and <i>F⃗</i> = <i>F</i><sub><i>x</i></sub><i>î</i> + <i>F</i><sub><i>y</i></sub><i>ĵ</i> + <i>F</i><sub><i>z</i></sub><i>k̂</i>:<br><i>τ⃗</i> = <i>r⃗</i> × <i>F⃗</i> = | <i>î</i>  <i>ĵ</i>  <i>k̂</i> ; <i>x</i>  <i>y</i>  <i>z</i> ; <i>F</i><sub><i>x</i></sub>  <i>F</i><sub><i>y</i></sub>  <i>F</i><sub><i>z</i></sub> |',
      },
      {
        t: 'proc',
        title: 'Key Procedure — Computing Torque and Angular Momentum by Cross Product',
        steps: [
          'Write <i>r⃗</i> in the middle row, <i>F⃗</i> (or <i>p⃗</i> for angular momentum) in the bottom row.',
          'Expand the determinant: <i>î</i>(<i>yF</i><sub><i>z</i></sub> − <i>zF</i><sub><i>y</i></sub>) − <i>ĵ</i>(<i>xF</i><sub><i>z</i></sub> − <i>zF</i><sub><i>x</i></sub>) + <i>k̂</i>(<i>xF</i><sub><i>y</i></sub> − <i>yF</i><sub><i>x</i></sub>).',
          'For planar (2D) problems, only the <i>k̂</i> term survives — a positive <i>k̂</i> means anticlockwise, negative means clockwise. This sign-from-direction trick saves real time in exams.',
        ],
      },
      {
        t: 'p',
        html: '<b>Quick worked illustration.</b> Let <i>r⃗</i> = (2<i>î</i> + 3<i>ĵ</i>) m and <i>F⃗</i> = (5<i>î</i> + <i>ĵ</i>) N. Then only the <i>k̂</i> component matters:<br><i>τ</i><sub><i>z</i></sub> = <i>xF</i><sub><i>y</i></sub> − <i>yF</i><sub><i>x</i></sub> = (2)(1) − (3)(5) = 2 − 15 = −13 N · m<br>The negative sign tells you the force tends to rotate the body clockwise about the origin. Notice you never had to draw an angle or find a perpendicular distance — the determinant handles geometry and sign for you in one shot. The identical machinery, with <i>p⃗</i> = <i>mv⃗</i> in the bottom row, gives angular momentum.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A mechanic applies a force of 40 N at the end of a spanner of length 0.25 m. The force makes an angle of 30° with the spanner handle. Calculate the torque produced about the bolt.',
        steps: [
          '<b>Given:</b> <i>F</i> = 40 N, <i>r</i> = 0.25 m, <i>θ</i> = 30°.',
          '<b>Formula:</b><br><i>τ</i> = <i>rF</i> sin <i>θ</i>',
          '<b>Substitution:</b><br><i>τ</i> = (0.25)(40) sin 30° = (0.25)(40)(0.5) = 5 N · m',
          '<b>Presentation note:</b> always carry the unit N · m (not J) and, if asked, state the sense of rotation.',
        ],
        ans: 'The torque is 5 N · m.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A spinning dancer with arms outstretched has a moment of inertia <i>I</i> and angular speed <i>ω</i>. She pulls her arms in, reducing her moment of inertia to 2<i>I</i>/5. Find (a) her new angular speed, and (b) the ratio of her new rotational kinetic energy to the old one.',
        steps: [
          '<b>The trap:</b> Students assume kinetic energy is conserved like in a collision. It is <b>not</b> — the dancer’s muscles do work pulling the arms in, so KE increases. Only angular momentum is conserved.',
          '<b>Mental shortcut — conserve <i>L</i>, then read off the ratios.</b>',
          '(a) <i>L</i> = <i>Iω</i> = constant:<br><i>Iω</i> = (2<i>I</i>/5)<i>ω</i>′ ⇒ <i>ω</i>′ = (5/2)<i>ω</i> = 2.5 <i>ω</i>',
          '(b) Using <i>K</i> = <i>L</i><sup>2</sup>/2<i>I</i> with <i>L</i> fixed, <i>K</i> ∝ 1/<i>I</i>:<br><i>K</i>′/<i>K</i> = <i>I</i>/<i>I</i>′ = <i>I</i>/(2<i>I</i>/5) = 5/2 = 2.5',
          '<b>Sanity check:</b> she spins faster and has more energy — exactly what your intuition says when someone “powers up” a spin. The extra energy came from her muscles, not from nowhere. ✓',
        ],
        ans: 'New angular speed = 2.5 <i>ω</i>; rotational KE increases by a factor of 2.5.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle of mass <i>m</i> is projected from the ground with speed <i>u</i> at an angle <i>θ</i> to the horizontal. Find the magnitude of its angular momentum about the point of projection when it is at the highest point of its trajectory.',
        steps: [
          '<b>Concept 1 — Projectile motion gives position and velocity at the top.</b> Maximum height: <i>H</i> = <i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>/2<i>g</i>. At the top, the velocity is purely horizontal: <i>v</i><sub><i>x</i></sub> = <i>u</i> cos <i>θ</i> (vertical component is zero).',
          '<b>Concept 2 — Angular momentum about the launch point.</b> <i>L</i> = <i>mv</i><sub>⊥</sub> × (perpendicular distance). At the top, the horizontal velocity <i>u</i> cos <i>θ</i> is perpendicular to the vertical height <i>H</i>, so:<br><i>L</i> = <i>m</i>(<i>u</i> cos <i>θ</i>)(<i>H</i>) = <i>m</i>(<i>u</i> cos <i>θ</i>)(<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>/2<i>g</i>)<br><i>L</i> = <i>mu</i><sup>3</sup> sin<sup>2</sup> <i>θ</i> cos <i>θ</i>/2<i>g</i>',
          '<b>Why two concepts:</b> you cannot solve this without first extracting <i>H</i> and <i>v</i><sub><i>x</i></sub> from projectile kinematics and then applying the angular-momentum definition — a textbook JEE Main blend.',
        ],
        ans: '<i>L</i> = <i>mu</i><sup>3</sup> sin<sup>2</sup> <i>θ</i> cos <i>θ</i>/2<i>g</i>, directed into the plane (clockwise sense).',
      },
      {
        t: 'ex',
        fig: 'p11-06-fig-6.3',
        tag: 'JEE Advanced Level',
        q: 'A uniform rod of mass <i>M</i> and length <i>L</i> is pivoted at one end on a frictionless horizontal table and is initially at rest. A bullet of mass <i>m</i> moving horizontally with speed <i>v</i> (perpendicular to the rod) strikes the free end and embeds itself. Find the angular speed of the rod-plus-bullet system immediately after impact.',
        steps: [
          '<b>Step 1 — Choose the right conserved quantity.</b> During the collision, the pivot exerts a large unknown impulsive force. So linear momentum is not conserved. But that pivot force has <b>zero torque about the pivot</b> (its moment arm is zero), and the collision is instantaneous, so <b>angular momentum about the pivot is conserved.</b> This choice of axis is the whole insight.',
          '<b>Step 2 — Angular momentum before impact.</b> Only the bullet moves; its angular momentum about the pivot is:<br><i>L</i><sub><i>i</i></sub> = <i>mvL</i>',
          '<b>Step 3 — Moment of inertia after impact.</b> The rod (about its end) plus the embedded bullet (a point mass at distance <i>L</i>):<br><i>I</i><sub><i>f</i></sub> = <i>ML</i><sup>2</sup>/3 (rod) + <i>mL</i><sup>2</sup> (bullet)',
          '<b>Step 4 — Angular momentum after impact and equate.</b><br><i>L</i><sub><i>f</i></sub> = <i>I</i><sub><i>f</i></sub><i>ω</i> = (<i>ML</i><sup>2</sup>/3 + <i>mL</i><sup>2</sup>)<i>ω</i><br><i>mvL</i> = (<i>ML</i><sup>2</sup>/3 + <i>mL</i><sup>2</sup>)<i>ω</i>',
          '<b>Step 5 — Solve for <i>ω</i>.</b><br><i>ω</i> = <i>mvL</i>/(<i>L</i><sup>2</sup>(<i>M</i>/3 + <i>m</i>)) = <i>mv</i>/(<i>L</i>((<i>M</i> + 3<i>m</i>)/3)) = 3<i>mv</i>/(<i>L</i>(<i>M</i> + 3<i>m</i>))',
          '<b>Note:</b> kinetic energy is <b>not</b> conserved here (the embedding is perfectly inelastic), which is exactly why we leaned on angular momentum, not energy.',
        ],
        ans: '<i>ω</i> = 3<i>mv</i>/(<i>L</i>(<i>M</i> + 3<i>m</i>)).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A force <i>F⃗</i> = (2<i>î</i> + 3<i>ĵ</i>) N acts at a point with position vector <i>r⃗</i> = (4<i>î</i> + <i>ĵ</i>) m. Find the torque about the origin.',
            a: '10 <i>k̂</i> N · m',
          },
          {
            q: '[NEET] A planet moves in an elliptical orbit around the Sun. About which point is its angular momentum conserved, and what stays constant as a result?',
            a: 'About the Sun (the centre of force); the angular momentum — and hence the areal velocity — stays constant (Kepler’s second law)',
          },
          {
            q: '[JEE Main] A constant torque acting on a wheel changes its angular momentum from <i>L</i><sub>0</sub> to 3<i>L</i><sub>0</sub> in 6 seconds. Find the magnitude of the torque.',
            a: '<i>τ</i> = 2<i>L</i><sub>0</sub>/6 = <i>L</i><sub>0</sub>/3 (in N · m when <i>L</i><sub>0</sub> is in kg · m<sup>2</sup> · s<sup>−1</sup>)',
          },
          {
            q: '[JEE Main] A particle of mass 2 kg is at position (3<i>î</i> + <i>ĵ</i>) m moving with velocity (2<i>î</i> − <i>ĵ</i>) m/s. Find its angular momentum about the origin.',
            a: '−10 <i>k̂</i> kg · m<sup>2</sup> · s<sup>−1</sup>',
          },
          {
            q: '[JEE Advanced] A solid sphere of mass <i>m</i>, radius <i>R</i> rests on rough ground. A time-varying horizontal force <i>F</i> = <i>bt</i> acts at its topmost point. Find the angular momentum of the sphere about the bottom-most contact point as a function of time. Does the answer depend on whether the ground is rough or smooth?',
            a: '<i>L</i> = <i>bRt</i><sup>2</sup>; independent of the surface, since friction acts through the contact point and has zero torque about it.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A force is applied to a rigid body that can rotate about a fixed axis. The torque about that axis is zero when the force is:',
        opts: [
          { label: 'perpendicular to the position vector', nudge: '(A) gives maximum torque, the opposite of zero.' },
          { label: 'directed along the position vector (toward or away from the axis)', nudge: null },
          { label: 'of small magnitude', nudge: '(C) reduces torque but never to zero.' },
          {
            label: 'applied at the rim of the body',
            nudge: '(D) applying the force at the rim gives the largest <i>r</i>, but the torque still depends on direction — a rim force along the tangent gives the most torque, one aimed at the axis gives none. Where you push alone never makes the torque zero.',
          },
        ],
        correct: 1,
        solution: 'Torque = <i>rF</i> sin <i>θ</i>. A force pointing along <i>r⃗</i> has <i>θ</i> = 0° (or 180°), so sin <i>θ</i> = 0 and the torque vanishes — like pushing a door straight at its hinge.',
      },
      {
        t: 'mcq',
        q: 'A skater spinning with her arms extended pulls them in. Which quantity stays constant?',
        opts: [
          {
            label: 'Angular velocity',
            nudge: '(A) and (B) both change (that’s the whole point — <i>I</i> drops, <i>ω</i> rises).',
          },
          {
            label: 'Moment of inertia',
            nudge: '(A) and (B) both change (that’s the whole point — <i>I</i> drops, <i>ω</i> rises).',
          },
          { label: 'Angular momentum', nudge: null },
          {
            label: 'Rotational kinetic energy',
            nudge: '(D) is the classic trap: KE increases because the skater’s muscles do work pulling the arms in. Conserved momentum ≠ conserved energy.',
          },
        ],
        correct: 2,
        solution: 'With no external torque about the spin axis, angular momentum <i>L</i> = <i>Iω</i> is conserved.',
      },
      {
        t: 'mcq',
        q: 'The dimensional formula of angular momentum is the same as that of:',
        opts: [
          {
            label: 'torque',
            nudge: '(A) torque is [M L<sup>2</sup> T<sup>−2</sup>] — differs by one power of time.',
          },
          { label: 'Planck’s constant', nudge: null },
          { label: 'angular velocity', nudge: '(C) angular velocity is [T<sup>−1</sup>].' },
          { label: 'force', nudge: '(D) force is [M L T<sup>−2</sup>].' },
        ],
        correct: 1,
        solution: 'Angular momentum has dimensions [M L<sup>2</sup> T<sup>−1</sup>], identical to Planck’s constant <i>h</i> (energy × time = M L<sup>2</sup> T<sup>−2</sup> · T). This is no coincidence — <i>h</i>/2π (written ħ) is the natural unit of angular momentum: Bohr’s rule is <i>L</i> = <i>nh</i>/2π.',
      },
      {
        t: 'mcq',
        q: 'A particle moves in a straight line at constant velocity. Its angular momentum about a point not on that line:',
        opts: [
          { label: 'is zero', nudge: '(A) is true only if the point lies on the line (<i>r</i><sub>⊥</sub> = 0).' },
          {
            label: 'increases with time',
            nudge: '(B) and (D) wrongly assume <i>L</i> changes as the particle moves — but the moment arm stays fixed for straight-line motion.',
          },
          { label: 'is constant and non-zero', nudge: null },
          {
            label: 'decreases with time',
            nudge: '(B) and (D) wrongly assume <i>L</i> changes as the particle moves — but the moment arm stays fixed for straight-line motion.',
          },
        ],
        correct: 2,
        solution: '<i>L</i> = <i>mvr</i><sub>⊥</sub>, where <i>r</i><sub>⊥</sub> is the constant perpendicular distance from the point to the line. Since <i>m</i>, <i>v</i>, and <i>r</i><sub>⊥</sub> are all fixed, <i>L</i> is constant and non-zero. (Equivalently: no force ⇒ no torque ⇒ <i>L</i> conserved.)',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to specify the reference point.</b> Torque and angular momentum are meaningless without “about which point/axis.” The same force gives different torques about different points — always anchor your reference first.',
          '<b>Assuming energy is conserved when only angular momentum is.</b> In skater spins, wheel-coupling, and inelastic rotational collisions, <i>L</i> is conserved but KE is not. Reach for energy conservation only when the process is genuinely lossless.',
          '<b>Using the full force instead of its perpendicular component.</b> Only the perpendicular component <i>F</i> sin <i>θ</i> turns the body (torque = <i>rF</i> sin <i>θ</i>, or equivalently <i>r</i><sub>⊥</sub><i>F</i>). The radial component is dead weight for rotation.',
          '<b>Mixing up the units of torque and energy.</b> Both come out as N · m dimensionally, but torque is a vector quantity reported in N · m, while energy is a scalar in joules. Never write torque in joules.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> In collision-and-rotation problems (bullet-in-rod, person-jumping-on-turntable), always take angular momentum about the pivot or hinge. The unknown impulsive reaction there has zero moment arm, so it drops out automatically — turning a messy two-unknown problem into a one-line conservation statement.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Torque',
            note: '<i>τ⃗</i> = <i>r⃗</i> × <i>F⃗</i>, |<i>τ</i>| = <i>rF</i> sin <i>θ</i> = <i>r</i><sub>⊥</sub><i>F</i> — only the perpendicular force turns things.',
          },
          {
            f: 'Angular momentum',
            note: '<i>L⃗</i> = <i>r⃗</i> × <i>p⃗</i>, <i>L</i> = <i>Iω</i> | dimensions [M L<sup>2</sup> T<sup>−1</sup>], unit J · s.',
          },
          {
            f: 'Master equation',
            note: '<i>τ⃗</i><sub>ext</sub> = d<i>L⃗</i>/d<i>t</i> → the rotational <i>F⃗</i> = d<i>p⃗</i>/d<i>t</i>.',
          },
          {
            f: 'Conservation',
            note: '<i>τ</i><sub>ext</sub> = 0 ⇒ <i>L</i> = const ⇒ <i>I</i><sub>1</sub><i>ω</i><sub>1</sub> = <i>I</i><sub>2</sub><i>ω</i><sub>2</sub>. (Skater, planets, coupling wheels.)',
          },
          { f: 'Angular impulse', note: '<i>J</i> = ∫ <i>τ</i> d<i>t</i> = Δ<i>L</i>.' },
          { f: 'Rotational KE', note: '<i>K</i> = ½<i>Iω</i><sup>2</sup> = <i>L</i><sup>2</sup>/2<i>I</i>.' },
        ],
        aids: [
          '<b>Memory aid — “Same point, every step”:</b> pick one reference point at the start of a torque/<i>L</i> problem and never switch — switching mid-solution is the #1 source of wrong answers.',
          '<b>Memory aid — “<i>L</i> lives, energy leaks”:</b> in spins and inelastic rotational hits, angular momentum survives but kinetic energy usually doesn’t.',
        ],
      },
    ],
  },

  {
    n: '05',
    title: 'Equilibrium of a Rigid Body',
    kalam: 'This is the key insight: a rigid body needs two separate conditions to be in equilibrium.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a CBSE favourite and a steady JEE/NEET performer. CBSE Boards regularly asks the principle of moments, levers, and centre of gravity (2–3 marks). JEE Main poses beam-and-support and ladder-against-wall problems. NEET keeps it conceptual — conditions for equilibrium and types of equilibrium. Mastering this turns intimidating “find the reactions” problems into routine bookkeeping.',
      },
      {
        t: 'p',
        html: 'So far this chapter has been about making things move and spin. This subtopic asks the opposite question: when does a rigid body stay perfectly still — neither sliding away nor toppling over? That state is called <b>equilibrium</b>, and it is the physics of every bridge, every shelf bracket, every charpai (cot) leg, and every child balanced on a seesaw.',
      },
      {
        t: 'p',
        html: 'A point particle only had to worry about one thing to stay put: the forces on it had to cancel. But a rigid body has size, so it can do something a particle never could — it can <b>rotate</b> even when the forces cancel. Imagine pushing the top of a cupboard forward while a friend pushes the bottom backward with an equal force. The total force is zero, so the cupboard won’t slide. Yet it will happily topple, because those two forces create a turning effect. This is the key insight: a rigid body needs <b>two</b> separate conditions to be in equilibrium.<br>1. <b>Translational equilibrium</b> — the net force is zero, so the centre of mass does not accelerate. The body won’t drift in any direction.<br>2. <b>Rotational equilibrium</b> — the net torque is zero, so the body does not start spinning. It won’t topple or twist.',
      },
      {
        t: 'p',
        html: 'Both must hold. Forces balanced but torques unbalanced → it spins. Torques balanced but forces unbalanced → it slides. Only when both vanish is the body truly at rest and content to stay there.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A seesaw at the park is the perfect teacher. A heavy uncle near the pivot can balance a small child sitting far out at the end. Balance isn’t about equal weights — it’s about equal moments: weight times distance from the pivot. The child’s small weight times big distance equals the uncle’s big weight times small distance. This is the <b>principle of moments</b>: for balance, the total clockwise turning effect equals the total anticlockwise turning effect.',
      },
      {
        t: 'p',
        html: 'This single principle powers every <b>lever</b> you’ve ever used — a sabal (crowbar) prying up a rock, scissors, a bottle opener, a nimbu nichodne wala (lime squeezer), even your own forearm. A lever lets a small effort move a large load by giving the effort a longer arm. The payoff is the <b>mechanical advantage</b> — the factor by which the lever multiplies your force.<br><br>Closely tied to balance is the <b>centre of gravity (CG)</b> — the single point where the body’s entire weight effectively acts. Support a body exactly under its CG and it balances; support it anywhere else and gravity produces a toppling torque. For ordinary objects in uniform gravity, the CG sits exactly at the centre of mass.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>1. <b>Both conditions are required, and they are independent.</b> Checking only forces (or only torques) is the commonest source of wrong answers.<br>2. <b>Torque must be computed about a chosen point — but for a body in equilibrium, the net torque is zero about every point.</b> This freedom is a gift: pick the pivot that eliminates the most unknowns.<br>3. <b>Centre of gravity equals centre of mass only when <i>g</i> is uniform</b> over the body. For everyday objects this is essentially exact.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Conditions for complete equilibrium of a rigid body',
        main: '∑ <i>F⃗</i><sub>ext</sub> = 0⃗ (translational equilibrium)<br>∑ <i>τ⃗</i><sub>ext</sub> = 0⃗ (rotational equilibrium)<br>In two dimensions these become three scalar equations:<br>∑ <i>F</i><sub><i>x</i></sub> = 0, ∑ <i>F</i><sub><i>y</i></sub> = 0, ∑ <i>τ</i> = 0',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Principle of moments (about a pivot)',
        main: 'For balance, anticlockwise moments = clockwise moments<br><i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub> ⇒ (load) × (load arm) = (effort) × (effort arm)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mechanical advantage of a lever',
        main: 'M.A. = Load/Effort = (Effort arm)/(Load arm)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Couple',
        main: 'two equal, opposite, non-collinear forces; its moment (torque) is:<br><i>τ</i><sub>couple</sub> = <i>Fd</i>',
        legend: ['<i>d</i> = the perpendicular distance between the two forces'],
        note: 'A couple produces pure rotation with zero net force.',
      },
      {
        t: 'formula',
        kicker: 'Centre of gravity',
        main: '(position, weighting by weight <i>w</i><sub><i>i</i></sub> = <i>m</i><sub><i>i</i></sub><i>g</i>):<br><i>x</i><sub>cg</sub> = (∑ <i>w</i><sub><i>i</i></sub><i>x</i><sub><i>i</i></sub>)/(∑ <i>w</i><sub><i>i</i></sub>) = (∑ <i>m</i><sub><i>i</i></sub><i>x</i><sub><i>i</i></sub>)/(∑ <i>m</i><sub><i>i</i></sub>) = <i>x</i><sub>cm</sub> (uniform <i>g</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation:</b> <i>F</i> = force, <i>d</i> = perpendicular distance (moment arm), <i>τ</i> = torque. SI unit of torque/moment is N · m; dimensional formula [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]. Mechanical advantage is dimensionless.',
      },
      {
        t: 'table',
        title: 'Types of equilibrium (how a body responds to a small disturbance)',
        head: ['Type', 'On disturbance', 'CG behaviour', 'Everyday example'],
        rows: [
          ['Stable', 'returns to original position', 'CG rises', 'ball in a valley; cone on its base'],
          ['Unstable', 'moves further away', 'CG falls', 'ball on a hilltop; cone on its apex'],
          ['Neutral', 'stays in new position', 'CG stays at same height', 'ball on a flat floor; cone on its side'],
        ],
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation: the Principle of Moments from rotational equilibrium</b><br>Consider a light rod (a lever) free to rotate about a pivot (fulcrum) <i>O</i>. A load force <i>F</i><sub>1</sub> acts downward at perpendicular distance <i>d</i><sub>1</sub> on one side, and an effort force <i>F</i><sub>2</sub> acts downward at perpendicular distance <i>d</i><sub>2</sub> on the other side.',
      },
      { t: 'fig', id: 'p11-06-fig-6.4' },
      {
        t: 'p',
        html: '<b>Step 1 — Apply rotational equilibrium about the pivot.</b> For the rod not to rotate, the net torque about <i>O</i> must vanish:<br>∑ <i>τ</i><sub><i>O</i></sub> = 0',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Write each torque with its sense.</b> The load tends to turn the rod one way (say anticlockwise, +) and the effort the other way (clockwise, −):<br>+<i>F</i><sub>1</sub><i>d</i><sub>1</sub> − <i>F</i><sub>2</sub><i>d</i><sub>2</sub> = 0',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Rearrange.</b><br><i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub><br>This is the <b>principle of moments</b>: at balance, the anticlockwise moment equals the clockwise moment. Rearranging gives the lever’s mechanical advantage <i>F</i><sub>1</sub>/<i>F</i><sub>2</sub> = <i>d</i><sub>2</sub>/<i>d</i><sub>1</sub> — a long effort arm <i>d</i><sub>2</sub> lets a small effort <i>F</i><sub>2</sub> lift a large load <i>F</i><sub>1</sub>. That is the secret of every crowbar.',
      },
      {
        t: 'proc',
        title: 'Procedure: solving any rigid-body equilibrium problem',
        steps: [
          '<b>Draw a clean free-body diagram.</b> Mark every external force with its point of application: weights (acting at the CG), normal reactions, tensions, friction, and applied forces.',
          '<b>Apply force balance.</b> Write ∑ <i>F</i><sub><i>x</i></sub> = 0 and ∑ <i>F</i><sub><i>y</i></sub> = 0.',
          '<b>Apply torque balance about a smartly chosen point.</b> Here lies the art: choose the pivot at the point where an unknown force acts, because that force then has zero moment arm and drops out of the equation. This often lets you solve for one unknown immediately.',
          '<b>Solve the simultaneous equations</b> for the unknown forces or distances, and sanity-check signs (a negative reaction means you drew its direction backwards).',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure: locating the centre of gravity experimentally</b><br>Hang an irregular lamina (say a cardboard cut-out) freely from a point and drop a plumb line from that point; the CG lies somewhere on that vertical line. Repeat from a second hanging point. The CG is where the two plumb lines intersect — because a freely suspended body always settles with its CG directly below the point of suspension (any offset would create a restoring torque).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A uniform metre stick of mass 0.4 kg is pivoted at its centre. A 0.6 kg mass hangs 20 cm from the pivot on one side. At what distance from the pivot must a 0.3 kg mass be hung on the other side to balance the stick?',
        steps: [
          '<b>Given:</b> the stick is uniform and pivoted at its centre, so its own weight acts at the pivot and produces no torque. Load <i>m</i><sub>1</sub> = 0.6 kg at <i>d</i><sub>1</sub> = 0.20 m; balancing mass <i>m</i><sub>2</sub> = 0.3 kg at unknown <i>d</i><sub>2</sub>.',
          '<b>Apply the principle of moments</b> (the <i>g</i> cancels):<br><i>m</i><sub>1</sub><i>d</i><sub>1</sub> = <i>m</i><sub>2</sub><i>d</i><sub>2</sub> ⇒ (0.6)(0.20) = (0.3)(<i>d</i><sub>2</sub>)<br><i>d</i><sub>2</sub> = 0.12/0.3 = 0.40 m',
        ],
        ans: 'The 0.3 kg mass must hang 40 cm from the pivot.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A seesaw is balanced about its central pivot. A 30 kg child sits 1.5 m from the pivot. Where must a 45 kg child sit to balance it?',
        steps: [
          '<b>The trap:</b> Students start computing weights with <i>g</i> = 9.8. But <i>g</i> appears on both sides and cancels — work directly with mass × distance.',
          '<b>Mental shortcut.</b><br><i>m</i><sub>1</sub><i>d</i><sub>1</sub> = <i>m</i><sub>2</sub><i>d</i><sub>2</sub> ⇒ (30)(1.5) = (45)(<i>d</i><sub>2</sub>) ⇒ <i>d</i><sub>2</sub> = 45/45 = 1.0 m',
          '<b>Sanity check:</b> the heavier child sits closer to the pivot — exactly as intuition (and every real seesaw) demands. ✓',
        ],
        ans: 'The heavier (45 kg) child sits 1.0 m from the pivot.',
      },
      {
        t: 'ex',
        fig: 'p11-06-fig-6.5',
        tag: 'JEE Main Level',
        q: 'A uniform beam of length 4 m and weight 200 N rests horizontally on two supports, one at the left end (A) and one 1 m from the right end (B). Find the reaction forces at the two supports.',
        steps: [
          'This needs <b>both</b> equilibrium conditions together.',
          '<b>Step 1 — Force balance (vertical):</b><br><i>N</i><sub><i>A</i></sub> + <i>N</i><sub><i>B</i></sub> = 200   ...(i)',
          '<b>Step 2 — Torque balance about A</b> (so <i>N</i><sub><i>A</i></sub> drops out — it acts at A with zero moment arm). The weight acts at the centre, <i>x</i> = 2 m; support B is at <i>x</i> = 3 m:<br><i>N</i><sub><i>B</i></sub>(3) − (200)(2) = 0 ⇒ <i>N</i><sub><i>B</i></sub> = 400/3 ≈ 133.3 N',
          '<b>Step 3 — Back-substitute into (i):</b><br><i>N</i><sub><i>A</i></sub> = 200 − 133.3 = 66.7 N',
          '<b>Check:</b> support B is closer to the centre of gravity, so it carries more of the load — physically sensible, and 66.7 + 133.3 = 200 N balances the weight. ✓',
        ],
        ans: '<i>N</i><sub><i>A</i></sub> ≈ 66.7 N, <i>N</i><sub><i>B</i></sub> ≈ 133.3 N.',
      },
      {
        t: 'ex',
        fig: 'p11-06-fig-6.6',
        tag: 'JEE Advanced Level',
        q: 'A uniform ladder of weight <i>W</i> and length <i>L</i> leans against a smooth (frictionless) vertical wall, making an angle <i>θ</i> with the rough horizontal floor. Find the minimum coefficient of friction between the ladder and the floor needed to prevent slipping.',
        steps: [
          '<b>Step 1 — Identify the forces.</b> Wall is smooth → only a horizontal normal <i>N</i><sub><i>w</i></sub> at the top. Floor is rough → vertical normal <i>N</i><sub><i>f</i></sub> and horizontal friction <i>f</i> at the bottom. Weight <i>W</i> acts at the midpoint.',
          '<b>Step 2 — Force balance.</b> Horizontal: <i>f</i> = <i>N</i><sub><i>w</i></sub>   ...(i) Vertical: <i>N</i><sub><i>f</i></sub> = <i>W</i>   ...(ii)',
          '<b>Step 3 — Torque balance about the bottom of the ladder</b> (eliminates <i>N</i><sub><i>f</i></sub> and <i>f</i>, which act there). Taking the foot as pivot, with the ladder length <i>L</i>:<br>• Weight acts at <i>L</i>/2 along the ladder; its horizontal moment arm is (<i>L</i>/2) cos <i>θ</i>, turning the ladder down: moment = <i>W</i> · (<i>L</i>/2) cos <i>θ</i>.<br>• Wall normal <i>N</i><sub><i>w</i></sub> acts at the top; its vertical moment arm is <i>L</i> sin <i>θ</i>, turning the ladder up: moment = <i>N</i><sub><i>w</i></sub> · <i>L</i> sin <i>θ</i>.<br>Setting them equal:<br><i>N</i><sub><i>w</i></sub><i>L</i> sin <i>θ</i> = <i>W</i> · (<i>L</i>/2) cos <i>θ</i> ⇒ <i>N</i><sub><i>w</i></sub> = (<i>W</i>/2) cot <i>θ</i>',
          '<b>Step 4 — Apply the friction condition.</b> For no slipping, <i>f</i> ≤ <i>μN</i><sub><i>f</i></sub>. Using (i), (ii), and the result for <i>N</i><sub><i>w</i></sub>:<br><i>μ</i><sub>min</sub> = <i>f</i>/<i>N</i><sub><i>f</i></sub> = <i>N</i><sub><i>w</i></sub>/<i>W</i> = ½ cot <i>θ</i>',
          '<b>Insight:</b> a steeper ladder (larger <i>θ</i>) has a smaller cot <i>θ</i>, needing less friction — which is exactly why you stand a ladder as upright as safely possible.',
        ],
        ans: '<i>μ</i><sub>min</sub> = ½ cot <i>θ</i>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A uniform rod of length 1 m and weight 20 N is supported horizontally at its two ends. What force does each support exert?',
            a: '10 N each',
          },
          {
            q: '[NEET] Two children of masses 20 kg and 25 kg sit on a seesaw. The lighter child is 2 m from the pivot. For balance, how far from the pivot is the heavier child?',
            a: '1.6 m',
          },
          {
            q: '[JEE Main] A 50 N weight hangs from the end of a uniform horizontal rod (weight 30 N, length 2 m) hinged to a wall, with the weight at the free end. Find the total torque of the two weights about the hinge point (the moment the support must balance).',
            a: '50(2) + 30(1) = 130 N · m',
          },
          {
            q: '[JEE Main] A crowbar 1.2 m long is used as a lever with the fulcrum 0.2 m from the load end. Find its mechanical advantage.',
            a: 'M.A. = 1.0/0.2 = 5',
          },
          {
            q: '[JEE Advanced] A non-uniform rod of length <i>L</i> rests horizontally on two supports at its ends. The reactions at the left and right supports are in the ratio 2 : 3. Find the distance of the rod’s centre of gravity from the left end.',
            a: '3<i>L</i>/5 = 0.6<i>L</i> from the left end (the CG lies nearer the support carrying more load).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A rigid body is in complete equilibrium. This requires that:',
        opts: [
          { label: 'the net force is zero', nudge: '(A) alone allows the body to spin (a couple).' },
          { label: 'the net torque is zero', nudge: '(B) alone allows it to drift.' },
          { label: 'both the net force and the net torque are zero', nudge: null },
          {
            label: 'the body is at rest',
            nudge: '(D) confuses equilibrium with rest — a body moving at constant velocity while not rotating is also in equilibrium.',
          },
        ],
        correct: 2,
        solution: 'Complete (mechanical) equilibrium demands both ∑ <i>F⃗</i> = 0⃗ (no translation) and ∑ <i>τ⃗</i> = 0⃗ (no rotation).',
      },
      {
        t: 'mcq',
        q: 'A couple acting on a body produces:',
        opts: [
          { label: 'only translation', nudge: '(A) and (C) wrongly assume a net force; the forces cancel.' },
          { label: 'only rotation', nudge: null },
          { label: 'both translation and rotation', nudge: '(A) and (C) wrongly assume a net force; the forces cancel.' },
          { label: 'neither', nudge: '(D) forgets the turning effect — the defining feature of a couple.' },
        ],
        correct: 1,
        solution: 'A couple is two equal and opposite forces with different lines of action. Their vector sum is zero (no translation), but they produce a non-zero net torque (pure rotation).',
      },
      {
        t: 'mcq',
        q: 'A cone resting on its flat circular base is an example of:',
        opts: [
          { label: 'unstable equilibrium', nudge: '(A) unstable is the cone balanced on its apex (CG falls on disturbance).' },
          { label: 'neutral equilibrium', nudge: '(B) neutral is the cone lying on its side (CG height unchanged).' },
          { label: 'stable equilibrium', nudge: null },
          { label: 'no equilibrium', nudge: '(D) it is clearly in equilibrium while resting.' },
        ],
        correct: 2,
        solution: 'Tilt the cone slightly and its centre of gravity rises; released, it falls back to the upright position. A rising CG on disturbance is the signature of stable equilibrium.',
      },
      {
        t: 'mcq',
        q: 'A uniform metre stick of mass 0.1 kg is pivoted at the 40 cm mark. A 0.5 kg mass hangs at the 10 cm mark. The mass needed at the 90 cm mark to balance the stick (its own weight included) is:',
        opts: [
          {
            label: '0.20 kg',
            nudge: '(A) 0.20 kg leaves the stick unbalanced: clockwise 0.1(0.10) + 0.20(0.50) = 0.11 against anticlockwise 0.5(0.30) = 0.15. It comes from giving the stick’s weight a 0.50 m arm (measuring its centre from the 0 cm end) instead of 0.10 m from the pivot.',
          },
          { label: '0.28 kg', nudge: null },
          {
            label: '0.30 kg',
            nudge: '(C) 0.30 kg is what you get by treating the stick as weightless — the classic trap, because with the pivot off-centre the stick’s own weight adds a clockwise moment.',
          },
          {
            label: '0.15 kg',
            nudge: '(D) 0.15 kg is just the moment 0.5 × 0.30 with the division by the 0.50 m arm forgotten.',
          },
        ],
        correct: 1,
        solution: 'Take moments about the 40 cm pivot. The 0.5 kg mass at 10 cm gives an anticlockwise moment over arm 0.30 m. The stick’s weight (acting at its centre, the 50 cm mark) and the hung mass at 90 cm give clockwise moments over arms 0.10 m and 0.50 m. Balancing: 0.5(0.30) = 0.1(0.10) + <i>m</i>(0.50) so <i>m</i> = 0.28 kg. Always include the stick’s weight at its centre of gravity.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Checking only one equilibrium condition.</b> Balancing forces but forgetting torques (or vice versa) is the number-one error. A rigid body needs both ∑ <i>F</i> = 0 and ∑ <i>τ</i> = 0.',
          '<b>Ignoring the weight of the “support” object.</b> When a rod or plank has appreciable weight, that weight acts at its centre of gravity and must enter the torque equation — especially when the pivot is off-centre.',
          '<b>Picking a poor pivot for torque.</b> You may take torques about any point. Choosing a point where an unknown force acts makes that force vanish from the equation. Not using this freedom turns a one-line problem into a messy two-unknown system.',
          '<b>Confusing centre of mass with point of support.</b> A body balances only when supported under its centre of gravity; elsewhere, gravity produces a toppling torque.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “find the reaction/force” problem, take torques about the point where the unknown you care least about acts — it disappears, and you solve for the one you want in a single step. And always carry a quick sign convention (anticlockwise +): the side closer to the centre of gravity carries the larger share of the load, a fast sanity check on your answer.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two conditions (both required)',
            note: '∑ <i>F⃗</i> = 0⃗ (no sliding) and ∑ <i>τ⃗</i> = 0⃗ (no toppling).',
          },
          {
            f: 'Principle of moments',
            note: '<i>F</i><sub>1</sub><i>d</i><sub>1</sub> = <i>F</i><sub>2</sub><i>d</i><sub>2</sub> — anticlockwise moment = clockwise moment.',
          },
          { f: 'Lever mechanical advantage', note: 'M.A. = Load/Effort = (Effort arm)/(Load arm).' },
          {
            f: 'Couple',
            note: 'equal, opposite, non-collinear forces; net force 0, torque = <i>Fd</i> → pure rotation.',
          },
          { f: 'Centre of gravity', note: 'point where total weight acts; = centre of mass in uniform <i>g</i>.' },
          { f: 'Equilibrium types', note: 'stable (CG rises), unstable (CG falls), neutral (CG level).' },
        ],
        aids: [
          '<b>Memory aid — “Slide and spin, kill them both”:</b> translational equilibrium kills sliding (∑ <i>F</i> = 0); rotational equilibrium kills spinning (∑ <i>τ</i> = 0). You need both.',
          '<b>Memory aid — “Pivot on the unknown”:</b> take torques about the point where an unwanted force acts, and it vanishes from your equation.',
        ],
      },
    ],
  },
];
