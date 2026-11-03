import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 03 and 04, pp. 482–503 of the Class 11 Physics Master
 * Reference, word for word: Acceleration due to Gravity (g) (Part 3, pp. 482
 * to 491) and Gravitational Potential and Energy (Part 4, pp. 492 to 503),
 * each split at the book's Sections 1 to 8. Figures 7.7 (p. 487, drawn on
 * p. 488), 7.8 (p. 492, drawn on p. 493) and 7.9 (p. 499, drawn on p. 500).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 482–491 ─────────────────────────
  {
    n: '03',
    title: 'Acceleration due to Gravity (g)',
    kalam: 'That number — the rate at which a freely falling body gains speed — is the acceleration due to gravity, written g.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite — NEET and JEE Main almost guarantee a question on the variation of <i>g</i> (altitude, depth, or rotation), usually as a ratio or “find the height/depth” numerical. JEE Advanced folds it into tunnel-SHM and non-uniform-density problems. CBSE Boards expect the derivation of <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> and the depth/altitude formulae as 2–3 mark questions, and love conceptual one-liners (“why is <i>g</i> less at the equator?”).',
      },
      {
        t: 'p',
        html: 'In Topic 02 we learned that the Earth pulls on every object near it. This topic asks a sharper question: if I let go of something, how fast does that pull make it speed up? That number — the rate at which a freely falling body gains speed — is the <b>acceleration due to gravity</b>, written <i>g</i>. Near the surface of the Earth it’s about 9.8 m/s<sup>2</sup>, meaning a dropped stone gets 9.8 m/s faster every second.',
      },
      {
        t: 'p',
        html: 'Here is the single most beautiful fact about <i>g</i>: <b>it does not care what you drop.</b> A cricket ball and a crumpled sheet of paper, a feather and a hammer — in the absence of air, they all accelerate at exactly the same <i>g</i> and hit the ground together. Astronaut David Scott famously proved this on the Moon with a hammer and a feather. Why? Because the Earth pulls harder on a heavier object (bigger <i>m</i> means bigger force <i>F</i> = <i>GMm</i>/<i>R</i><sup>2</sup>), but a heavier object is also harder to accelerate (bigger <i>m</i> resists motion). When you compute <i>g</i> = <i>F</i>/<i>m</i>, the object’s mass cancels out completely. The pull and the sluggishness scale together and perfectly balance.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine the Earth offering everyone the same “down escalator.” It doesn’t matter whether you’re a child or a sumo wrestler — the escalator carries you down at the same rate. Your mass changes how hard the Earth grips you, but not how fast you descend. That’s why <i>g</i> is a property of the Earth (its mass and radius), not of the falling object.',
      },
      {
        t: 'p',
        html: 'This immediately tells us how to compute <i>g</i>. The Earth’s gravitational pull on a surface object equals that object’s weight, <i>mg</i>. Setting Newton’s law equal to weight:<br><i>GMm</i>/<i>R</i><sup>2</sup> = <i>mg</i> ⇒ <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup><br>The mass <i>m</i> vanishes — exactly as our intuition demanded. <i>g</i> depends only on the Earth’s mass <i>M</i> and radius <i>R</i>.',
      },
      {
        t: 'p',
        html: 'But <i>g</i> is not a single frozen number. It changes depending on where you stand:<br>• <b>Go up</b> (a mountain, an aircraft, orbit) — you’re farther from the Earth’s centre, so <i>g</i> <b>decreases</b>.<br>• <b>Go down</b> (a mine, a tunnel) — surprisingly, <i>g</i> also <b>decreases</b>, because the shell of Earth now above you stops pulling you down.<br>• <b>Move toward the equator</b> — the Earth’s spin flings you outward slightly, and the Earth’s equatorial bulge puts you farther from the centre, both of which make <i>g</i> <b>smaller</b> there than at the poles.',
      },
      {
        t: 'p',
        html: 'So, in the uniform-density model, the acceleration due to gravity is greatest at the surface near the poles and decreases as you climb up, dig down, or drift toward the equator.',
      },
      {
        t: 'p',
        html: '<b>One more thing worth knowing — gravity cannot be switched off.</b> You can shield a charge from an electric field by sealing it inside a hollow metal box (a Faraday cage); the field inside vanishes. There is no such trick for gravity. You cannot block, absorb, or screen the gravitational influence of nearby matter by wrapping an object in any material or hollow shell, because gravity is independent of the intervening medium and there is no “negative mass” to cancel it. Wherever there is mass, its gravity reaches through everything. This is also why <i>g</i> at any point is numerically identical to the <b>gravitational field strength</b> there — <i>g</i> is simply the field the Earth sets up, felt as an acceleration.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b> The clean formula <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> assumes the Earth is a perfect uniform sphere and non-rotating. The depth formula <i>g</i><sub><i>d</i></sub> = <i>g</i>(1 − <i>d</i>/<i>R</i>) further assumes uniform density — which is not actually true (the Earth’s core is far denser than its crust), so in reality <i>g</i> initially rises slightly as you descend before falling to zero at the centre. The altitude approximation <i>g</i><sub><i>h</i></sub> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>) is valid <b>only when</b> <i>h</i> ≪ <i>R</i>; for satellites high above the Earth you must use the full inverse-square form.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Acceleration due to gravity at the surface',
        main: '<i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'In terms of mean density <i>ρ</i>',
        main: '(using <i>M</i> = (4/3)π<i>R</i><sup>3</sup><i>ρ</i>):<br><i>g</i> = (4/3)π<i>GRρ</i>',
        legend: [],
        note: 'This handy form shows that for planets of the same density, <i>g</i> ∝ <i>R</i>.',
      },
      {
        t: 'formula',
        kicker: 'At height <i>h</i> above the surface',
        main: '<i>g</i><sub><i>h</i></sub> = <i>GM</i>/(<i>R</i> + <i>h</i>)<sup>2</sup> = <i>g</i>/(1 + <i>h</i>/<i>R</i>)<sup>2</sup> →<sup><i>h</i> ≪ <i>R</i></sup> <i>g</i>(1 − 2<i>h</i>/<i>R</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'At depth <i>d</i> below the surface',
        main: '(uniform density assumed):<br><i>g</i><sub><i>d</i></sub> = <i>g</i>(1 − <i>d</i>/<i>R</i>)',
        legend: [],
        note: 'At the centre (<i>d</i> = <i>R</i>), <i>g</i><sub><i>d</i></sub> = 0.',
      },
      {
        t: 'formula',
        kicker: 'Effective <i>g</i> at latitude <i>λ</i>, accounting for Earth’s rotation',
        main: '<i>g</i><sub><i>λ</i></sub> = <i>g</i> − <i>ω</i><sup>2</sup><i>R</i> cos<sup>2</sup> <i>λ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit'],
        rows: [
          ['<i>g</i>', 'Acceleration due to gravity at surface', 'm/s<sup>2</sup>'],
          ['<i>M</i>, <i>R</i>', 'Mass and radius of the planet (Earth)', 'kg, m'],
          ['<i>ρ</i>', 'Mean density of the planet', 'kg/m<sup>3</sup>'],
          ['<i>h</i>', 'Height above the surface', 'm'],
          ['<i>d</i>', 'Depth below the surface', 'm'],
          ['<i>ω</i>', 'Angular speed of the planet’s rotation', 'rad/s'],
          ['<i>λ</i>', 'Latitude of the location', '— (degrees)'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Dimensional formula of <i>g</i>:</b> [L T<sup>−2</sup>].<br>• <i>g</i> is a <b>vector</b>, directed radially toward the planet’s centre.<br>• <i>g</i> is <b>independent of the mass, size, shape, and composition</b> of the falling body.<br>• Numerically, the surface <i>g</i> equals the <b>gravitational field strength</b> <i>E</i><sub><i>g</i></sub> at the surface — the two are the same physical quantity.',
      },
      {
        t: 'p',
        html: '(Notation note for the chapter: here <i>ω</i> is the <b>rotational/orbital</b> angular speed of the planet — a different physical meaning from the <i>ω</i> used for SHM angular frequency in Chapter 13, even though the symbol is identical.)',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>(a) Surface value:</b> <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup><br>Consider a body of mass <i>m</i> resting on the surface of a planet of mass <i>M</i> and radius <i>R</i>. Treating the planet as a uniform sphere, its entire mass acts as if concentrated at the centre (shell theorem), so the gravitational force on the body is<br><i>F</i> = <i>GMm</i>/<i>R</i><sup>2</sup><br>This force is the body’s weight, and by Newton’s second law weight = <i>mg</i>. Equating:<br><i>mg</i> = <i>GMm</i>/<i>R</i><sup>2</sup> ⇒ <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup><br>The mass <i>m</i> cancels — confirming that <i>g</i> is set entirely by the planet.',
      },
      {
        t: 'p',
        html: '<b>(b) Variation with altitude</b><br>At a height <i>h</i>, the body is now a distance (<i>R</i> + <i>h</i>) from the centre. The reasoning behind this step: from outside, the planet still behaves as a point mass at its centre, so we simply replace <i>R</i> by (<i>R</i> + <i>h</i>):<br><i>g</i><sub><i>h</i></sub> = <i>GM</i>/(<i>R</i> + <i>h</i>)<sup>2</sup> = <i>GM</i>/<i>R</i><sup>2</sup> · 1/(1 + <i>h</i>/<i>R</i>)<sup>2</sup> = <i>g</i>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup><br>When <i>h</i> ≪ <i>R</i>, we expand using the binomial approximation (1 + <i>x</i>)<sup>−2</sup> ≈ 1 − 2<i>x</i>:<br><i>g</i><sub><i>h</i></sub> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>)',
      },
      {
        t: 'p',
        html: 'Why the approximation matters: it tells us the fractional fall in <i>g</i> is <b>twice</b> the fractional rise in distance from the centre — rising by 1% of the Earth’s radius (<i>h</i> = 0.01<i>R</i>, about 64 km) drops <i>g</i> by about 2%. But it is only trustworthy for small <i>h</i>.',
      },
      {
        t: 'p',
        html: '<b>(c) Variation with depth</b><br>This is the subtle one. Go to a depth <i>d</i>, so your distance from the centre is (<i>R</i> − <i>d</i>). Newton’s shell theorem says the spherical shell of matter above you (thickness <i>d</i>) exerts <b>zero</b> net gravitational force. Only the inner sphere of radius (<i>R</i> − <i>d</i>) pulls you. Assuming uniform density <i>ρ</i>:<br><i>M</i><sub>inner</sub> = (4/3)π(<i>R</i> − <i>d</i>)<sup>3</sup><i>ρ</i>, <i>M</i> = (4/3)π<i>R</i><sup>3</sup><i>ρ</i> ⇒ <i>M</i><sub>inner</sub>/<i>M</i> = (<i>R</i> − <i>d</i>)<sup>3</sup>/<i>R</i><sup>3</sup><br>The acceleration at depth is due only to this inner sphere, acting from distance (<i>R</i> − <i>d</i>):<br><i>g</i><sub><i>d</i></sub> = <i>GM</i><sub>inner</sub>/(<i>R</i> − <i>d</i>)<sup>2</sup> = (<i>GM</i>(<i>R</i> − <i>d</i>)<sup>3</sup>/<i>R</i><sup>3</sup>)/(<i>R</i> − <i>d</i>)<sup>2</sup> = <i>GM</i>(<i>R</i> − <i>d</i>)/<i>R</i><sup>3</sup> = <i>GM</i>/<i>R</i><sup>2</sup> · (<i>R</i> − <i>d</i>)/<i>R</i><br><i>g</i><sub><i>d</i></sub> = <i>g</i>(1 − <i>d</i>/<i>R</i>)<br>At the centre <i>d</i> = <i>R</i>, every direction has equal pull, the inner sphere shrinks to nothing, and <i>g</i><sub><i>d</i></sub> = 0. <b>A body is weightless at the Earth’s centre</b> — though it still has its full mass and inertia.',
      },
      {
        t: 'p',
        html: '<b>(d) Variation due to rotation (effective gravity)</b><br>The Earth spins, so a body sitting at latitude <i>λ</i> is actually moving in a circle of radius <i>r</i> = <i>R</i> cos <i>λ</i> about the rotation axis, and needs a centripetal acceleration <i>ω</i><sup>2</sup><i>R</i> cos <i>λ</i> directed toward the axis. Part of the true gravitational pull <i>g</i> must “go toward” supplying this, leaving less to press the body down. Resolving the centripetal requirement along the vertical (radial) direction gives a reduction of <i>ω</i><sup>2</sup><i>R</i> cos <i>λ</i> × cos <i>λ</i>, so the effective gravity is:<br><i>g</i><sub><i>λ</i></sub> = <i>g</i> − <i>ω</i><sup>2</sup><i>R</i> cos<sup>2</sup> <i>λ</i><br>• At the <b>equator</b> (<i>λ</i> = 0): maximum reduction, <i>g</i><sub>eq</sub> = <i>g</i> − <i>ω</i><sup>2</sup><i>R</i>.<br>• At the <b>poles</b> (<i>λ</i> = 90°): cos <i>λ</i> = 0, so rotation has <b>no effect</b>; <i>g</i> is largest here.',
      },
      {
        t: 'p',
        html: 'This is one of two reasons the poles feel heavier; the other is the Earth’s flattened <b>shape</b> — the polar radius is about 21 km smaller, and since <i>g</i> ∝ 1/<i>R</i><sup>2</sup>, the smaller polar radius further boosts <i>g</i> at the poles.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A certain planet has mass <i>M</i> = 4.8 × 10<sup>24</sup> kg and radius <i>R</i> = 4.0 × 10<sup>6</sup> m. (a) Calculate the acceleration due to gravity on its surface. (b) A body weighs 200 N at the surface. Assuming the planet to be a uniform sphere, how much will it weigh at a depth equal to half the radius?',
        steps: [
          '<b>Part (a).</b> Given <i>M</i> = 4.8 × 10<sup>24</sup> kg, <i>R</i> = 4.0 × 10<sup>6</sup> m, <i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup> kg<sup>−2</sup>.<br><i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> = (6.67 × 10<sup>−11</sup>)(4.8 × 10<sup>24</sup>)/(4.0 × 10<sup>6</sup>)<sup>2</sup> = (3.20 × 10<sup>14</sup>)/(1.6 × 10<sup>13</sup>) = 20 m/s<sup>2</sup>',
          '<b>Part (b).</b> Given surface weight <i>W</i> = <i>mg</i> = 200 N, depth <i>d</i> = <i>R</i>/2.',
          'Use the depth formula:<br><i>g</i><sub><i>d</i></sub> = <i>g</i>(1 − <i>d</i>/<i>R</i>) = <i>g</i>(1 − (<i>R</i>/2)/<i>R</i>) = <i>g</i>(1 − 1/2) = <i>g</i>/2',
          'The new weight is<br><i>W</i><sub><i>d</i></sub> = <i>mg</i><sub><i>d</i></sub> = <i>m</i> · <i>g</i>/2 = <i>mg</i>/2 = 200/2 = 100 N',
        ],
        ans: '(a) <i>g</i> = 20 m/s<sup>2</sup>; (b) 100 N. Note the body’s mass is unchanged — only its weight halves, because the effective <i>g</i> halves at depth <i>R</i>/2.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'At what height above the Earth’s surface does the acceleration due to gravity become one-fourth of its value at the surface? (<i>R</i> = radius of the Earth.)',
        steps: [
          'We need <i>g</i><sub><i>h</i></sub> = <i>g</i>/4. <b>Use the exact inverse-square form — not the approximation:</b><br><i>g</i><sub><i>h</i></sub> = <i>g</i> · <i>R</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup> = <i>g</i>/4 ⇒ <i>R</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup> = 1/4 ⇒ <i>R</i>/(<i>R</i> + <i>h</i>) = 1/2',
          '<b>The trap:</b> a hurried student reaches for <i>g</i><sub><i>h</i></sub> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>) and writes <i>g</i>(1 − 2<i>h</i>/<i>R</i>) = <i>g</i>/4, giving <i>h</i> = 3<i>R</i>/8. <b>This is wrong</b> — the linear approximation is valid only for <i>h</i> ≪ <i>R</i>, but here <i>h</i> = <i>R</i> is enormous. Whenever the required change in <i>g</i> is large (a factor of 1/4, 1/9, etc.), you must use the full (<i>R</i> + <i>h</i>)<sup>2</sup> form. Recognising “is <i>h</i> small?” before choosing a formula is the entire skill being tested.',
        ],
        ans: '<i>R</i> + <i>h</i> = 2<i>R</i> ⇒ <i>h</i> = <i>R</i>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Rotation × circular motion)',
        q: 'How fast would the Earth need to rotate for objects at the equator to become weightless? Estimate the corresponding length of a day. Take <i>R</i> = 6.4 × 10<sup>6</sup> m and <i>g</i> = 9.8 m/s<sup>2</sup>.',
        steps: [
          'At the equator (<i>λ</i> = 0), effective gravity is <i>g</i><sub>eq</sub> = <i>g</i> − <i>ω</i><sup>2</sup><i>R</i>. Weightlessness means <i>g</i><sub>eq</sub> = 0:<br><i>g</i> − <i>ω</i><sup>2</sup><i>R</i> = 0 ⇒ <i>ω</i> = √(<i>g</i>/<i>R</i>) = √(9.8/(6.4 × 10<sup>6</sup>)) = √(1.531 × 10<sup>−6</sup>) = 1.24 × 10<sup>−3</sup> rad/s',
          'The new length of a day would be<br><i>T</i> = 2π/<i>ω</i> = 2π√(<i>R</i>/<i>g</i>) = 2π√((6.4 × 10<sup>6</sup>)/9.8) = 2π(808.1) ≈ 5078 s ≈ 1.41 hours',
        ],
        ans: '<i>ω</i> ≈ 1.24 × 10<sup>−3</sup> rad/s, giving a day of roughly 84.6 minutes. The Earth currently rotates about 17 times slower than this, which is why the equatorial reduction in <i>g</i> (only about 0.034 m/s<sup>2</sup>) is tiny in everyday life. Keep this <b>“≈ 84.6 minute”</b> number in mind — it reappears in the next example.',
      },
      {
        t: 'ex',
        fig: 'p11-07-fig-7.7',
        tag: 'JEE Advanced Level (Cross-chapter link: Gravitation → SHM)',
        q: 'A narrow, frictionless tunnel is drilled straight through the centre of the Earth, from one side to the other. A small ball is dropped into it from the surface. Show that the ball performs simple harmonic motion, and find its time period. Treat the Earth as a uniform non-rotating sphere; <i>R</i> = 6.4 × 10<sup>6</sup> m, <i>g</i> = 9.8 m/s<sup>2</sup>.',
        steps: [
          '<b>Step 1 — Find the force at distance <i>r</i> from the centre.</b> Inside the Earth, at a distance <i>r</i> from the centre, only the sphere of radius <i>r</i> pulls the ball (shell theorem; the outer shell contributes nothing). From the depth result, the local gravitational acceleration at distance <i>r</i> from the centre is<br><i>g</i>(<i>r</i>) = <i>g</i> · <i>r</i>/<i>R</i><br>directed toward the centre. The force on the ball of mass <i>m</i> is therefore<br><i>F</i> = −(<i>mg</i>/<i>R</i>)<i>r</i><br>where the minus sign shows the force always points back toward the centre (the equilibrium point), opposing the displacement.',
          '<b>Step 2 — Recognise the SHM signature.</b> This has exactly the form of Hooke’s law, <i>F</i> = −<i>k</i><sub>eff</sub><i>r</i>, with an effective “spring constant”<br><i>k</i><sub>eff</sub> = <i>mg</i>/<i>R</i><br>Any force linearly proportional to displacement and directed back toward equilibrium produces simple harmonic motion (recall Chapter 13). The angular frequency of the SHM is<br><i>ω</i><sub>SHM</sub> = √(<i>k</i><sub>eff</sub>/<i>m</i>) = √(<i>g</i>/<i>R</i>)',
          '<b>Step 3 — Time period.</b><br><i>T</i> = 2π/<i>ω</i><sub>SHM</sub> = 2π√(<i>R</i>/<i>g</i>) = 2π√((6.4 × 10<sup>6</sup>)/9.8) ≈ 5078 s ≈ 84.6 minutes',
        ],
        ans: 'The ball oscillates back and forth through the Earth in SHM with a period of about 84.6 minutes — the same magic number as the weightless-equator day in the previous example, and (it turns out) the same as the period of a satellite skimming the Earth’s surface. All three are governed by 2π√(<i>R</i>/<i>g</i>). This is exactly the kind of deep unification JEE Advanced rewards: a gravitation problem that becomes an oscillations problem, with the surface value <i>g</i> acting as the bridge.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] The radius of planet A is twice that of planet B, but both have the same mass. Find the ratio of the acceleration due to gravity on their surfaces, <i>g</i><sub><i>A</i></sub> : <i>g</i><sub><i>B</i></sub>.',
            a: '1 : 4 (since <i>g</i> ∝ 1/<i>R</i><sup>2</sup> at fixed mass)',
          },
          {
            q: '[NEET] At what depth below the Earth’s surface (in terms of <i>R</i>) does <i>g</i> fall to 40% of its surface value? Assume uniform density.',
            a: '<i>d</i> = 0.6 <i>R</i>',
          },
          {
            q: '[JEE Main] The change in <i>g</i> at a height <i>h</i> above the surface equals the change in <i>g</i> at a depth <i>d</i> below the surface. If both <i>h</i> and <i>d</i> are much smaller than <i>R</i>, find the relation between <i>h</i> and <i>d</i>.',
            a: '<i>d</i> = 2<i>h</i>',
          },
          {
            q: '[JEE Main] Two planets have mean densities in the ratio 1 : 2 and radii in the ratio 3 : 1. Find the ratio of the accelerations due to gravity on their surfaces.',
            a: '<i>g</i> ∝ <i>ρR</i>, so ratio = (1 × 3) : (2 × 1) = 3 : 2',
          },
          {
            q: '[JEE Advanced] A planet has the same mean density as the Earth but its surface gravity is 4 times that of the Earth. If the Earth’s radius is <i>R</i>, find the radius of the planet and the ratio of their masses.',
            a: '<i>g</i> ∝ <i>ρR</i> at fixed density ⇒ radius = 4<i>R</i>; mass ratio (planet : Earth) = <i>ρ</i>(4<i>R</i>)<sup>3</sup> : <i>ρR</i><sup>3</sup> = 64 : 1.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The acceleration due to gravity at a height <i>h</i> = <i>R</i> above the Earth’s surface (where <i>R</i> is the Earth’s radius) is what fraction of its surface value?',
        opts: [
          { label: '<i>g</i>/2', nudge: '(A) comes from wrongly using a 1/(<i>R</i> + <i>h</i>) (inverse-first-power) dependence.' },
          { label: '<i>g</i>/4', nudge: null },
          { label: '<i>g</i>/3', nudge: '(C) has no valid basis.' },
          {
            label: 'zero',
            nudge: '(D) confuses “high altitude” with “infinitely far”; <i>g</i> only reaches zero at infinity, never at a finite height.',
          },
        ],
        correct: 1,
        solution: 'Use <i>g</i><sub><i>h</i></sub> = <i>gR</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup>. With <i>h</i> = <i>R</i>, the denominator is (2<i>R</i>)<sup>2</sup> = 4<i>R</i><sup>2</sup>, so <i>g</i><sub><i>h</i></sub> = <i>g</i>/4.',
      },
      {
        t: 'mcq',
        q: 'A body is taken from the Earth’s surface to the top of a high mountain, and then down into a deep mine. Compared with the surface value, the acceleration due to gravity:',
        opts: [
          {
            label: 'increases on the mountain, decreases in the mine',
            nudge: '(A) and (B) assume up and down do opposite things — the classic misconception that “deeper means stronger gravity.”',
          },
          {
            label: 'decreases on the mountain, increases in the mine',
            nudge: '(A) and (B) assume up and down do opposite things — the classic misconception that “deeper means stronger gravity.”',
          },
          { label: 'decreases in both cases', nudge: null },
          { label: 'increases in both cases', nudge: '(D) wrongly thinks altitude increases <i>g</i>.' },
        ],
        correct: 2,
        solution: '<i>g</i> is <b>maximum at the surface</b> (treating the Earth as uniform); it decreases whether you go up (greater distance from centre, <i>g</i><sub><i>h</i></sub> < <i>g</i>) or down (less mass pulling you, <i>g</i><sub><i>d</i></sub> < <i>g</i>). This surface-maximum behaviour is the conceptual heart of the topic.',
      },
      {
        t: 'mcq',
        q: 'Two identical balls are dropped, one near the Earth’s pole and one near the equator. Ignoring air resistance, the ball near the pole will:',
        opts: [
          { label: 'accelerate slightly faster', nudge: null },
          { label: 'accelerate slightly slower', nudge: '(B) reverses the effect.' },
          {
            label: 'accelerate at exactly the same rate',
            nudge: '(C) forgets that the Earth is neither perfectly spherical nor non-rotating.',
          },
          { label: 'not accelerate at all', nudge: '(D) is nonsense — gravity acts everywhere.' },
        ],
        correct: 0,
        solution: 'Effective <i>g</i> is <b>largest at the poles</b> for two reinforcing reasons: (i) no rotational reduction there (cos <i>λ</i> = 0), and (ii) the polar radius is smaller, so <i>g</i> ∝ 1/<i>R</i><sup>2</sup> is larger. So the polar ball speeds up slightly faster.',
      },
      {
        t: 'mcq',
        q: 'If both the mass and the radius of the Earth were somehow halved, the acceleration due to gravity at the surface would:',
        opts: [
          { label: 'remain unchanged', nudge: '(A) wrongly lets the two halvings cancel — but radius enters as a square, so halving <i>R</i> outweighs halving <i>M</i>.' },
          { label: 'double', nudge: null },
          { label: 'halve', nudge: '(C) counts only the mass.' },
          {
            label: 'become one-fourth',
            nudge: '(D) ignores the mass change and squares only the radius effect in the wrong direction.',
          },
        ],
        correct: 1,
        solution: '<i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> ∝ <i>M</i>/<i>R</i><sup>2</sup>. Halving <i>M</i> multiplies <i>g</i> by ½; halving <i>R</i> multiplies <i>g</i> by 1/(½)<sup>2</sup> = 4. Net effect: ½ × 4 = 2, so <i>g</i> <b>doubles</b>. The lesson: mass enters linearly, radius enters as a square — handle them separately.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using the altitude approximation when <i>h</i> is not small.</b> <i>g</i><sub><i>h</i></sub> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>) is a small-height shortcut only. For satellites or any <i>h</i> comparable to <i>R</i>, use the exact <i>g</i><sub><i>h</i></sub> = <i>gR</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup>. Mixing these up is the single biggest source of wrong answers here.',
          '<b>Swapping the altitude and depth formulae.</b> Altitude has the factor (1 − 2<i>h</i>/<i>R</i>) (a <b>2</b> appears); depth has (1 − <i>d</i>/<i>R</i>) (<b>no 2</b>). Memorise: “height has the 2, depth does not.” This is exactly why, for equal small changes, <i>d</i> = 2<i>h</i>.',
          '<b>Thinking <i>g</i> depends on the falling body.</b> It does not — <i>g</i> is fixed by the planet (<i>M</i>, <i>R</i>, density, rotation). A heavy stone and a light one fall identically. Weight (<i>mg</i>) depends on the body; <i>g</i> does not.',
          '<b>Crediting only rotation (or only shape) for the equator being “lighter.”</b> Both effects act together: the equatorial bulge (larger <i>R</i>) and the rotational centrifugal reduction. Naming only one in a board answer loses marks.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — reason in ratios with <i>g</i> ∝ <i>M</i>/<i>R</i><sup>2</sup> (or <i>g</i> ∝ <i>ρR</i>).</b> For “compare two planets” problems, never plug in 6.67 × 10<sup>−11</sup>. Just track how <i>M</i>, <i>R</i>, or <i>ρ</i> scale. If density is fixed, the cleanest tool is <i>g</i> ∝ <i>R</i>; if mass is fixed, use <i>g</i> ∝ 1/<i>R</i><sup>2</sup>.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — memorise the magic period.</b> <i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min is the period of (i) a ball oscillating in a tunnel through the Earth, (ii) a satellite skimming the surface, and (iii) the day-length for equatorial weightlessness. Recognising it instantly cracks several “famous-number” questions.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Surface',
            note: '<i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> = (4/3)π<i>GRρ</i>. Dimensions [L T<sup>−2</sup>]; <b>independent of the falling body.</b>',
          },
          {
            f: 'Altitude',
            note: '<i>g</i><sub><i>h</i></sub> = <i>gR</i><sup>2</sup>/(<i>R</i> + <i>h</i>)<sup>2</sup>; for <i>h</i> ≪ <i>R</i>: <i>g</i><sub><i>h</i></sub> ≈ <i>g</i>(1 − 2<i>h</i>/<i>R</i>).',
          },
          { f: 'Depth', note: '<i>g</i><sub><i>d</i></sub> = <i>g</i>(1 − <i>d</i>/<i>R</i>); <b>zero at the centre.</b>' },
          {
            f: 'Rotation',
            note: '<i>g</i><sub><i>λ</i></sub> = <i>g</i> − <i>ω</i><sup>2</sup><i>R</i> cos<sup>2</sup> <i>λ</i>; minimum at equator, unchanged at poles.',
          },
          { f: '<i>g</i> <b>is maximum at the surface</b> (uniform-density Earth)', note: 'decreases going both up and down.' },
          { f: '<b>Poles feel heavier</b> (no rotation effect + smaller polar radius); equator feels lighter.', note: '' },
        ],
        aids: [
          '“Height has the 2, depth does not” → (1 − 2<i>h</i>/<i>R</i>) vs (1 − <i>d</i>/<i>R</i>); hence equal small changes give <i>d</i> = 2<i>h</i>.',
          '“Same density? <i>g</i> tracks <i>R</i>. Same mass? <i>g</i> fights <i>R</i><sup>2</sup>.”',
          '“2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min” → tunnel-SHM = surface satellite = weightless day.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 492–503 ─────────────────────────
  {
    n: '04',
    title: 'Gravitational Potential and Energy',
    kalam: 'This topic is about gravitational energy: the energy stored in the arrangement of masses, just because of where they sit relative to each other.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A heavily weighted, concept-rich topic. JEE Main reliably asks 1–2 questions (potential energy of a system, escape velocity, work to move a mass). NEET favours escape-velocity ratios and the sign of <i>U</i>. JEE Advanced pushes into self-energy and potential inside solid spheres/shells. CBSE Boards expect the derivation of <i>U</i> = −<i>GMm</i>/<i>r</i>, the definition of potential <i>V</i>, and the escape-velocity derivation — classic 3–5 mark territory.',
      },
      {
        t: 'p',
        html: 'So far we’ve talked about the gravitational force — a push-and-pull you feel right now. This topic is about gravitational <b>energy</b>: the energy stored in the arrangement of masses, just because of where they sit relative to each other. Lift a stone and you’ve stored energy in the stone–Earth system; let go and that stored energy turns back into motion. Gravitational potential energy (<i>U</i>) is the bookkeeping of this stored energy, and gravitational potential (<i>V</i>) is that same energy measured per kilogram — a property of the location itself, independent of what you place there.',
      },
      {
        t: 'p',
        html: 'Here is the idea that trips up almost everyone, so let’s meet it head-on: <b>gravitational potential energy is negative.</b> Not “sometimes negative” — for two attracting masses it is always negative (with the standard convention). Why?',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine the region around the Earth as a deep valley, and infinity as the flat ground far away at the rim. We agree to call the energy “zero” when the two masses are infinitely far apart — they barely feel each other, nothing is stored, a clean starting line. Now bring a mass in from infinity toward the Earth. Gravity is attractive, so it pulls the mass inward and does <b>positive work</b> — like a ball rolling down into the valley, speeding up on its own. Since the system gives up energy (it could have done work on you), its stored energy drops below the zero line. The deeper you go (smaller <i>r</i>), the more negative <i>U</i> becomes. Climbing back out toward infinity costs you energy and brings <i>U</i> back up toward zero.',
      },
      { t: 'fig', id: 'p11-07-fig-7.8' },
      {
        t: 'p',
        html: 'So the negative sign is not a mistake — it is the signature of an attractive force and a “bound” system. A more negative <i>U</i> means the two masses are more tightly bound; you’d need to supply energy to pull them apart. This single picture explains nearly everything in this topic: why a satellite’s total energy is negative (it’s trapped in the valley), why escaping requires a minimum launch speed (enough energy to climb all the way to the rim), and why <i>V</i> is negative everywhere around a mass.',
      },
      {
        t: 'p',
        html: 'How deep can the valley get? If you keep the same mass but shrink the body — squeezing <i>M</i> into a smaller and smaller radius <i>R</i> — the well at the surface gets steeper and the escape speed √(2<i>GM</i>/<i>R</i>) climbs. Push this to the extreme and you reach a radius where the escape velocity would equal the speed of light itself. At that point nothing, not even light, can climb out of the valley: the object has become a <b>black hole</b>. A black hole is simply gravity’s valley made infinitely steep — the same physics of bound, negative-energy systems we are studying here, taken to its limit.',
      },
      {
        t: 'p',
        html: 'A second key idea: <b>potential energy belongs to the system, not to one body.</b> It makes no sense to say “the stone has <i>U</i>” — the energy lives in the configuration of stone-and-Earth together. We loosely say “the stone’s PE” only as shorthand.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b> The formula <i>U</i> = −<i>GMm</i>/<i>r</i> takes the <b>zero of energy at infinity</b> — change that reference and the number changes (though differences Δ<i>U</i> never do). The familiar school formula <i>U</i> = <i>mgh</i> is only the change in PE for small heights (<i>h</i> ≪ <i>R</i>), where gravity is nearly constant; for large heights you must use the exact −<i>GMm</i>/<i>r</i> form. And <i>V</i> = −<i>GM</i>/<i>r</i> is for a point mass or a body you may treat as a point (outside a sphere); inside extended bodies the expressions differ.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Gravitational potential energy of two particles',
        main: '(zero taken at infinity):<br><i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'System of <i>n</i> particles',
        main: 'sum over all <i>n</i>(<i>n</i> − 1)/2 distinct pairs:<br><i>U</i> = −<i>G</i> ∑<sub>pairs (<i>i</i>,<i>j</i>)</sub> <i>m</i><sub><i>i</i></sub><i>m</i><sub><i>j</i></sub>/<i>r</i><sub><i>ij</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Of a mass <i>m</i> at the Earth’s surface',
        main: '<i>U</i> = −<i>GMm</i>/<i>R</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Change in PE on raising mass <i>m</i> by height <i>h</i>',
        main: 'Δ<i>U</i> = <i>mgh</i>/(1 + <i>h</i>/<i>R</i>) →<sup><i>h</i> ≪ <i>R</i></sup> <i>mgh</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Gravitational potential',
        main: '(PE per unit mass; the work done per unit mass by an external agent, against gravity, to bring a test mass slowly from infinity to that point):<br><i>V</i> = <i>U</i>/<i>m</i> = −<i>GM</i>/<i>r</i>, <i>U</i> = <i>mV</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Potential from several masses',
        main: 'scalar (algebraic) sum:<br><i>V</i> = −<i>G</i> ∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub>/<i>r</i><sub><i>i</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Relation between field and potential',
        main: '(field is the negative gradient of potential):<br><i>E</i><sub><i>g</i></sub> = −d<i>V</i>/d<i>r</i>, Δ<i>V</i> = −∫ <i>E⃗</i><sub><i>g</i></sub> · d<i>r⃗</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Escape velocity',
        main: '(minimum surface speed to reach infinity):<br><i>v</i><sub><i>e</i></sub> = √(2<i>GM</i>/<i>R</i>) = √(2<i>gR</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit'],
        rows: [
          ['<i>U</i>', 'Gravitational potential energy (of the system)', 'joule (J)'],
          ['<i>V</i>', 'Gravitational potential (per unit mass)', 'J/kg'],
          ['<i>E</i><sub><i>g</i></sub>', 'Gravitational field strength (= <i>g</i> numerically)', 'm/s<sup>2</sup> or N/kg'],
          ['<i>v</i><sub><i>e</i></sub>', 'Escape velocity', 'm/s'],
          ['<i>M</i>, <i>m</i>', 'Source mass and test/body mass', 'kg'],
          ['<i>r</i>, <i>R</i>', 'Separation / distance from centre; planet radius', 'm'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Dimensional formula:</b> [<i>U</i>] = [M L<sup>2</sup> T<sup>−2</sup>]; [<i>V</i>] = [L<sup>2</sup> T<sup>−2</sup>].<br>• <i>U</i> and <i>V</i> are <b>scalars</b> — add them algebraically, never as vectors.<br>• Both are <b>negative</b> for attractive gravity (zero reference at infinity), most negative when masses are closest.<br>• At the surface: <i>V</i><sub>surface</sub> = −<i>GM</i>/<i>R</i> = −<i>gR</i>.<br>• For a <b>thin shell</b>: outside <i>V</i> = −<i>GM</i>/<i>r</i>; inside <i>V</i> = −<i>GM</i>/<i>R</i> (constant, equal to the surface value). For a <b>solid sphere</b>: outside <i>V</i> = −<i>GM</i>/<i>r</i>; at the centre <i>V</i> = −3<i>GM</i>/(2<i>R</i>).',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>(a) Potential energy of a two-particle system:</b> <i>U</i> = −<i>GMm</i>/<i>r</i><br>Fix a mass <i>M</i> at the origin and bring a test mass <i>m</i> in from infinity to a distance <i>r</i>. By definition, the potential energy at <i>r</i> is the <b>negative of the work done by the gravitational force</b> in this process:<br><i>U</i>(<i>r</i>) = −<i>W</i><sub>grav</sub> = −∫<sub>∞</sub><sup><i>r</i></sup> <i>F⃗</i> · d<i>x⃗</i><br>The gravitational force on <i>m</i> at distance <i>x</i> has magnitude <i>GMm</i>/<i>x</i><sup>2</sup> and points inward (toward <i>M</i>), i.e. in the direction of decreasing <i>x</i>. Writing it along the radial axis:<br><i>F⃗</i> · d<i>x⃗</i> = −(<i>GMm</i>/<i>x</i><sup>2</sup>) d<i>x</i><br>so the work done by gravity as <i>m</i> moves inward from ∞ to <i>r</i> is<br><i>W</i><sub>grav</sub> = ∫<sub>∞</sub><sup><i>r</i></sup> (−<i>GMm</i>/<i>x</i><sup>2</sup>) d<i>x</i> = −<i>GMm</i>[−1/<i>x</i>]<sub>∞</sub><sup><i>r</i></sup> = −<i>GMm</i>(−1/<i>r</i> + 0) = +<i>GMm</i>/<i>r</i><br>The positive sign confirms gravity aids the inward motion (the mass speeds up). Therefore<br><i>U</i>(<i>r</i>) = −<i>W</i><sub>grav</sub> = −<i>GMm</i>/<i>r</i>',
      },
      {
        t: 'p',
        html: '<b>Why it’s negative:</b> because gravity did positive work, the system released energy, dropping below the infinity reference of zero.',
      },
      {
        t: 'p',
        html: '<b>(b) Gravitational potential:</b> <i>V</i> = −<i>GM</i>/<i>r</i><br>Potential is simply PE per unit test mass. Dividing the result above by <i>m</i>:<br><i>V</i>(<i>r</i>) = <i>U</i>/<i>m</i> = −<i>GM</i>/<i>r</i><br>This is the work done against gravity, per kilogram, to carry a small test mass from infinity to the point — a property of the field at that location, independent of the test mass.',
      },
      {
        t: 'p',
        html: '<b>(c) Field–potential relation:</b> <i>E</i><sub><i>g</i></sub> = −d<i>V</i>/d<i>r</i><br>Since <i>V</i> = −<i>GM</i>/<i>r</i>, differentiate:<br>d<i>V</i>/d<i>r</i> = +<i>GM</i>/<i>r</i><sup>2</sup> ⇒ <i>E</i><sub><i>g</i></sub> = −d<i>V</i>/d<i>r</i> = −<i>GM</i>/<i>r</i><sup>2</sup><br>The minus sign places the field pointing toward <i>M</i> (decreasing <i>r</i>), with magnitude <i>GM</i>/<i>r</i><sup>2</sup> — exactly the <i>g</i> of Topic 03. The field always points “downhill,” from high potential to low.',
      },
      {
        t: 'p',
        html: '<b>(d) Escape velocity:</b> <i>v</i><sub><i>e</i></sub> = √(2<i>GM</i>/<i>R</i>)<br>To “escape” means to reach infinity (where <i>U</i> = 0) with at least zero kinetic energy. Launch a body of mass <i>m</i> from the surface with speed <i>v</i><sub><i>e</i></sub>. The reasoning: gravity is conservative, so total mechanical energy is conserved. Set total energy at the surface equal to the minimum total energy at infinity (which is 0 + 0):<br>½<i>mv</i><sub><i>e</i></sub><sup>2</sup> (KE at surface) + (−<i>GMm</i>/<i>R</i>) (PE at surface) = 0<br>Solving:<br>½<i>mv</i><sub><i>e</i></sub><sup>2</sup> = <i>GMm</i>/<i>R</i> ⇒ <i>v</i><sub><i>e</i></sub> = √(2<i>GM</i>/<i>R</i>)<br>Using <i>GM</i> = <i>gR</i><sup>2</sup>, this simplifies to <i>v</i><sub><i>e</i></sub> = √(2<i>gR</i>). The mass <i>m</i> cancels — <b>escape velocity is independent of the escaping body’s mass</b>, and (since energy is a scalar) independent of the launch direction too. For the Earth, <i>v</i><sub><i>e</i></sub> ≈ 11.2 km/s.',
      },
      {
        t: 'p',
        html: '<b>(e) Potential due to a solid sphere, and self-energy (a note for JEE)</b><br>A uniform solid sphere of mass <i>M</i>, radius <i>R</i>, behaves outside exactly like a point mass: <i>V</i> = −<i>GM</i>/<i>r</i> for <i>r</i> ≥ <i>R</i>. Inside (<i>r</i> < <i>R</i>) the potential is <b>not</b> −<i>GM</i>/<i>r</i>; carrying the test mass through the matter gives<br><i>V</i><sub>inside</sub>(<i>r</i>) = −(<i>GM</i>/(2<i>R</i><sup>3</sup>))(3<i>R</i><sup>2</sup> − <i>r</i><sup>2</sup>)<br>At the surface (<i>r</i> = <i>R</i>) this reduces to −<i>GM</i>/<i>R</i> (continuous, as it must be), and at the <b>centre</b> (<i>r</i> = 0) it reaches its most negative value <i>V</i><sub>centre</sub> = −3<i>GM</i>/(2<i>R</i>) = (3/2)<i>V</i><sub>surface</sub>. So potential is deepest at the centre, even though the field there is zero — a vivid reminder that “zero field” means “flat potential,” not “zero potential.”',
      },
      {
        t: 'p',
        html: 'Finally, the <b>gravitational self-energy</b> of a body is the energy released in assembling it from dust scattered at infinity (equivalently, the work needed to disperse it). Building a uniform sphere shell by shell and integrating gives<br><i>U</i><sub>self</sub> = −3<i>GM</i><sup>2</sup>/(5<i>R</i>)<br>This is the energy that powers the gravitational collapse of gas clouds into stars — a single number capturing how tightly a whole body binds itself together.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Three point masses of 2 kg, 4 kg, and 6 kg are placed at the vertices of an equilateral triangle of side 3.0 m. Calculate the gravitational potential energy of the system. (<i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup> kg<sup>−2</sup>.)',
        steps: [
          '<b>Given:</b> <i>m</i><sub>1</sub> = 2, <i>m</i><sub>2</sub> = 4, <i>m</i><sub>3</sub> = 6 kg; all pair separations <i>r</i> = 3.0 m.',
          'A 3-particle system has 3(3 − 1)/2 = 3 pairs. Total PE:<br><i>U</i> = −<i>G</i>[<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i> + <i>m</i><sub>1</sub><i>m</i><sub>3</sub>/<i>r</i> + <i>m</i><sub>2</sub><i>m</i><sub>3</sub>/<i>r</i>] = −(<i>G</i>/<i>r</i>)(<i>m</i><sub>1</sub><i>m</i><sub>2</sub> + <i>m</i><sub>1</sub><i>m</i><sub>3</sub> + <i>m</i><sub>2</sub><i>m</i><sub>3</sub>)<br><i>U</i> = −(6.67 × 10<sup>−11</sup>/3.0)[(2)(4) + (2)(6) + (4)(6)] = −(6.67 × 10<sup>−11</sup>/3.0)(8 + 12 + 24)<br><i>U</i> = −(6.67 × 10<sup>−11</sup>/3.0)(44) = −9.78 × 10<sup>−10</sup> J',
        ],
        ans: '<i>U</i> = −9.78 × 10<sup>−10</sup> J. The value is negative — energy would have to be supplied to disperse the three masses back to infinity.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The escape velocity from the Earth’s surface is 11.2 km/s. Find the escape velocity from a planet whose mass is twice that of the Earth and whose radius is half that of the Earth.',
        steps: [
          '<b>Reason in ratios — don’t recompute.</b> Since <i>v</i><sub><i>e</i></sub> = √(2<i>GM</i>/<i>R</i>), we have <i>v</i><sub><i>e</i></sub> ∝ √(<i>M</i>/<i>R</i>). Comparing the planet to the Earth:<br><i>v</i><sub><i>e</i>,planet</sub>/<i>v</i><sub><i>e</i>,Earth</sub> = √((<i>M</i><sub><i>p</i></sub>/<i>R</i><sub><i>p</i></sub>)/(<i>M</i><sub><i>E</i></sub>/<i>R</i><sub><i>E</i></sub>)) = √(2/(1/2)) = √4 = 2',
          '<b>The trap:</b> students often forget the square root and report <i>v</i><sub><i>e</i></sub> × <i>M</i>/<i>R</i> = ×4 = 44.8 km/s, or confuse escape velocity with orbital velocity. Escape velocity scales as √(<i>M</i>/<i>R</i>) — apply the factor inside the root, then take the root once.',
        ],
        ans: '<i>v</i><sub><i>e</i>,planet</sub> = 2 × 11.2 = 22.4 km/s',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Exact PE vs the mgh shortcut)',
        q: 'A body of mass <i>m</i> is lifted slowly from the Earth’s surface to a height equal to the Earth’s radius <i>R</i>. Find the work done against gravity. Compare it with the naive estimate <i>mgh</i>. (Take <i>GM</i> = <i>gR</i><sup>2</sup>.)',
        steps: [
          'Lifting slowly means kinetic energy doesn’t change, so the work done against gravity equals the change in potential energy:<br><i>W</i> = Δ<i>U</i> = <i>U</i><sub><i>f</i></sub> − <i>U</i><sub><i>i</i></sub> = (−<i>GMm</i>/(<i>R</i> + <i>h</i>)) − (−<i>GMm</i>/<i>R</i>)',
          'With <i>h</i> = <i>R</i>, the final separation is <i>R</i> + <i>R</i> = 2<i>R</i>:<br><i>W</i> = −<i>GMm</i>/(2<i>R</i>) + <i>GMm</i>/<i>R</i> = (<i>GMm</i>/<i>R</i>)(1 − 1/2) = <i>GMm</i>/(2<i>R</i>)',
          'Substituting <i>GM</i> = <i>gR</i><sup>2</sup>:<br><i>W</i> = (<i>gR</i><sup>2</sup> · <i>m</i>)/(2<i>R</i>) = ½<i>mgR</i>',
          '<b>Now compare with the school shortcut</b> <i>mgh</i> = <i>mg</i> · <i>R</i> = <i>mgR</i>. The shortcut gives <b>double</b> the true answer! The reason: <i>mgh</i> assumes <i>g</i> stays constant, but over a height as large as <i>R</i>, gravity weakens substantially, so less work is actually needed.',
        ],
        ans: '<i>W</i> = ½<i>mgR</i>; the <i>mgh</i> formula overestimates it by a factor of 2 here. Use <i>mgh</i> only when <i>h</i> ≪ <i>R</i>.',
      },
      {
        t: 'ex',
        fig: 'p11-07-fig-7.9',
        tag: 'JEE Advanced Level (Energy + momentum conservation)',
        q: 'Two point masses <i>m</i> and 2<i>m</i> are released from rest in deep space, initially separated by a distance <i>d</i>, with only their mutual gravitation acting. Find their relative velocity of approach when the separation has shrunk to <i>r</i>.',
        steps: [
          '<b>Two conservation laws are in play.</b> No external force acts, so total momentum is conserved; and gravity is conservative, so total mechanical energy is conserved.',
          '<b>Momentum (started from rest, so total momentum stays zero):</b><br><i>mv</i><sub>1</sub> = 2<i>m</i> <i>v</i><sub>2</sub> ⇒ <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub><br>where <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub> are the speeds of <i>m</i> and 2<i>m</i> as they rush toward each other.',
          '<b>Energy conservation</b> (initial KE = 0):<br>−<i>G</i>(<i>m</i>)(2<i>m</i>)/<i>d</i> = ½<i>mv</i><sub>1</sub><sup>2</sup> + ½(2<i>m</i>)<i>v</i><sub>2</sub><sup>2</sup> − <i>G</i>(<i>m</i>)(2<i>m</i>)/<i>r</i>',
          'Substitute <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub> into the kinetic terms:<br>½<i>m</i>(2<i>v</i><sub>2</sub>)<sup>2</sup> + ½(2<i>m</i>)<i>v</i><sub>2</sub><sup>2</sup> = 2<i>mv</i><sub>2</sub><sup>2</sup> + <i>mv</i><sub>2</sub><sup>2</sup> = 3<i>mv</i><sub>2</sub><sup>2</sup>',
          'So:<br>3<i>mv</i><sub>2</sub><sup>2</sup> = 2<i>Gm</i><sup>2</sup>/<i>r</i> − 2<i>Gm</i><sup>2</sup>/<i>d</i> = 2<i>Gm</i><sup>2</sup>(1/<i>r</i> − 1/<i>d</i>)<br><i>v</i><sub>2</sub><sup>2</sup> = (2<i>Gm</i>/3)(1/<i>r</i> − 1/<i>d</i>), <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub>',
          '<b>Relative velocity of approach</b> = <i>v</i><sub>1</sub> + <i>v</i><sub>2</sub> = 3<i>v</i><sub>2</sub> (they move toward each other):<br><i>v</i><sub>rel</sub> = 3<i>v</i><sub>2</sub> = 3√((2<i>Gm</i>/3)(1/<i>r</i> − 1/<i>d</i>)) = √(6<i>Gm</i>(1/<i>r</i> − 1/<i>d</i>))',
        ],
        ans: '<i>v</i><sub>rel</sub> = √(6<i>Gm</i>(1/<i>r</i> − 1/<i>d</i>)). Note that you cannot simply give each mass half the released energy — the lighter mass moves faster and carries more KE. Momentum conservation is what correctly splits the energy, which is the entire point of the problem.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the gravitational potential at the surface of the Earth. Take <i>M</i> = 6.0 × 10<sup>24</sup> kg, <i>R</i> = 6.4 × 10<sup>6</sup> m.',
            a: '<i>V</i> = −<i>GM</i>/<i>R</i> ≈ −6.25 × 10<sup>7</sup> J/kg',
          },
          {
            q: '[NEET] A body is projected vertically upward from the Earth’s surface with a speed equal to half the escape velocity. In terms of <i>R</i>, find the maximum height it reaches. (Ignore air resistance and Earth’s rotation.)',
            a: '<i>h</i> = <i>R</i>/3',
          },
          {
            q: '[JEE Main] Four point masses, each of mass <i>m</i>, are placed at the corners of a square of side <i>a</i>. Find the total gravitational potential energy of the system.',
            a: '<i>U</i> = −(<i>Gm</i><sup>2</sup>/<i>a</i>)(4 + √2) (4 side-pairs at <i>a</i>, 2 diagonal-pairs at <i>a</i>√2)',
          },
          {
            q: '[JEE Main] How much energy must be supplied to a satellite of mass <i>m</i> resting on the Earth’s surface to send it completely out of the Earth’s gravitational field? Express your answer in terms of <i>m</i>, <i>g</i>, and <i>R</i>.',
            a: '<i>E</i> = <i>GMm</i>/<i>R</i> = <i>mgR</i> (the magnitude of the surface PE)',
          },
          {
            q: '[JEE Advanced] A particle is released from rest at a great distance (effectively infinity) from a planet of mass <i>M</i> and radius <i>R</i>. Find the speed with which it strikes the planet’s surface, and show that it equals the escape velocity.',
            a: '<i>v</i> = √(2<i>GM</i>/<i>R</i>) = <i>v</i><sub><i>e</i></sub> (a body falling from infinity arrives at exactly escape speed).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The gravitational potential energy of a system of two masses is:',
        opts: [
          { label: 'always positive', nudge: '(A) confuses gravity with the elastic PE of a spring (always positive).' },
          { label: 'always negative', nudge: null },
          { label: 'zero', nudge: '(C) is true only in the limit <i>r</i> → ∞.' },
          {
            label: 'positive or negative depending on the masses',
            nudge: '(D) would be correct for electric PE (which can be either sign), but gravity is only ever attractive.',
          },
        ],
        correct: 1,
        solution: 'With the zero of energy taken at infinity, gravity (being attractive) does positive work as the masses approach, so the stored energy falls below zero. <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i> is negative for all finite <i>r</i>.',
      },
      {
        t: 'mcq',
        q: 'The escape velocity of a body from the Earth’s surface does <b>not</b> depend on:',
        opts: [
          {
            label: 'the mass of the Earth',
            nudge: '(A), (B), (D) all appear explicitly in the formula, so escape velocity does depend on them.',
          },
          {
            label: 'the radius of the Earth',
            nudge: '(A), (B), (D) all appear explicitly in the formula, so escape velocity does depend on them.',
          },
          { label: 'the mass of the body', nudge: null },
          {
            label: 'the value of <i>G</i>',
            nudge: '(A), (B), (D) all appear explicitly in the formula, so escape velocity does depend on them.',
          },
        ],
        correct: 2,
        solution: '<i>v</i><sub><i>e</i></sub> = √(2<i>GM</i>/<i>R</i>) contains <i>G</i>, <i>M</i>, and <i>R</i> — but <b>not</b> the mass of the escaping body, which cancels out in the energy equation. A pebble and a spaceship need the same escape speed. The standout misconception this question targets: “heavier objects are harder to launch, so they need more speed” — false; they need more energy, but the same speed.',
      },
      {
        t: 'mcq',
        q: 'The gravitational potential at a point is −5.0 × 10<sup>6</sup> J/kg. The work done by an external agent in bringing a 3.0 kg mass slowly from infinity to that point is:',
        opts: [
          {
            label: '+1.5 × 10<sup>7</sup> J',
            nudge: '(A) flips the sign (that’s the work done by the field, not the agent’s).',
          },
          { label: '−1.5 × 10<sup>7</sup> J', nudge: null },
          { label: '−5.0 × 10<sup>6</sup> J', nudge: '(C) forgets to multiply by the mass — that’s <i>V</i>, not <i>U</i>.' },
          { label: 'zero', nudge: '(D) wrongly assumes “infinity to a point” gives no work.' },
        ],
        correct: 1,
        solution: 'The work done by an external agent bringing the mass in slowly equals the change in potential energy, Δ<i>U</i> = <i>mV</i> = (3.0)(−5.0 × 10<sup>6</sup>) = −1.5 × 10<sup>7</sup> J. The field does the opposite work, +1.5 × 10<sup>7</sup> J, so the energy of the system falls.',
      },
      {
        t: 'mcq',
        q: 'Inside a uniform thin spherical shell, the gravitational field is zero everywhere. The gravitational potential inside the shell is therefore:',
        opts: [
          {
            label: 'zero everywhere inside',
            nudge: '(A) is the classic error of assuming “zero field ⇒ zero potential.” Zero field means unchanging potential, not zero potential — they are different things.',
          },
          { label: 'constant and equal to the surface value −<i>GM</i>/<i>R</i>', nudge: null },
          { label: 'increasing toward the centre', nudge: '(C) wrongly imagines potential varying inside.' },
          {
            label: '−<i>GM</i>/<i>r</i> at distance <i>r</i> from the centre',
            nudge: '(D) applies the outside formula where it isn’t valid.',
          },
        ],
        correct: 1,
        solution: 'Field is the negative gradient of potential (<i>E</i><sub><i>g</i></sub> = −d<i>V</i>/d<i>r</i>). Zero field means the potential does not change with position — it is <b>constant</b> inside. By continuity at the surface, that constant equals the surface value <i>V</i> = −<i>GM</i>/<i>R</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Dropping the negative sign.</b> <i>U</i> = −<i>GMm</i>/<i>r</i> and <i>V</i> = −<i>GM</i>/<i>r</i> are negative. Writing them positive is the single most frequent error and reverses the physics (it would imply repulsion). Always carry the minus.',
          '<b>Using <i>mgh</i> for large heights.</b> <i>mgh</i> is only the change in PE for <i>h</i> ≪ <i>R</i>. For heights comparable to <i>R</i>, use Δ<i>U</i> = −<i>GMm</i>(1/<i>r</i><sub><i>f</i></sub> − 1/<i>r</i><sub><i>i</i></sub>). (Recall worked example 3: <i>mgh</i> overshot by a factor of 2.)',
          '<b>Confusing potential <i>V</i> with potential energy <i>U</i>.</b> <i>V</i> is per unit mass (J/kg); <i>U</i> = <i>mV</i> is the total energy (J). Mixing their units or forgetting the factor of <i>m</i> loses marks instantly.',
          '<b>“Zero field means zero potential.”</b> False. Inside a shell the field is zero but the potential is a non-zero constant (−<i>GM</i>/<i>R</i>). Field is the slope of potential, not the potential itself.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — potential adds like a scalar, force adds like a vector.</b> For several masses, just add the numbers <i>V</i> = −<i>G</i> ∑ <i>m</i><sub><i>i</i></sub>/<i>r</i><sub><i>i</i></sub> (with signs) — no components, no angles. This makes potential problems far faster than the corresponding force problems. Compute <i>V</i> first, then get energy as <i>U</i> = <i>mV</i> or speed via energy conservation.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — remember the √2 bridge.</b> Escape velocity <i>v</i><sub><i>e</i></sub> = √(2<i>gR</i>) is exactly √2 times the orbital velocity of a surface-skimming satellite (<i>v</i><sub><i>o</i></sub> = √(<i>gR</i>)). If a question gives you one, you instantly know the other. For Earth: <i>v</i><sub><i>o</i></sub> ≈ 7.9 km/s, <i>v</i><sub><i>e</i></sub> ≈ 11.2 km/s.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'PE of two masses',
            note: '<i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i> (negative; zero at infinity). System: sum over all <i>n</i>(<i>n</i> − 1)/2 pairs.',
          },
          {
            f: 'Potential',
            note: '<i>V</i> = <i>U</i>/<i>m</i> = −<i>GM</i>/<i>r</i>, units J/kg; <b>scalar</b>, add algebraically.',
          },
          { f: 'Surface values', note: '<i>U</i> = −<i>GMm</i>/<i>R</i>, <i>V</i> = −<i>GM</i>/<i>R</i> = −<i>gR</i>.' },
          { f: 'Small-height PE change', note: 'Δ<i>U</i> ≈ <i>mgh</i> (only for <i>h</i> ≪ <i>R</i>).' },
          {
            f: 'Field–potential',
            note: '<i>E</i><sub><i>g</i></sub> = −d<i>V</i>/d<i>r</i> (field = downhill slope of potential).',
          },
          {
            f: 'Escape velocity',
            note: '<i>v</i><sub><i>e</i></sub> = √(2<i>GM</i>/<i>R</i>) = √(2<i>gR</i>) ≈ 11.2 km/s; independent of body’s mass & launch angle.',
          },
          {
            f: 'Inside a shell',
            note: 'field = 0, potential = −<i>GM</i>/<i>R</i> (constant). Solid sphere centre: <i>V</i> = −3<i>GM</i>/(2<i>R</i>).',
          },
        ],
        aids: [
          '“Attractive ⇒ negative; closer ⇒ more negative.”',
          '“<i>V</i> is per-kilo, <i>U</i> = <i>mV</i> is the whole bill.”',
          '“<i>v</i><sub><i>e</i></sub> = √2 <i>v</i><sub><i>o</i></sub>” — escape is root-two times surface orbit.',
          '“Zero field ≠ zero potential” — field is the slope, not the value.',
        ],
      },
    ],
  },
];
