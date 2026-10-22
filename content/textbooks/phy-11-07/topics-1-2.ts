import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 01 and 02: pp. 458–481 of the Class 11 Physics Master
 * Reference, word for word: Part 1, Newton’s Law of Gravitation (pp. 458–468),
 * and Part 2, Gravitational Field Intensity (pp. 469–481), each split at its
 * Sections 1 to 8. The chapter’s title and contents (pp. 456–457) are not
 * copied. Figures 7.1 to 7.6 are redrawn in lib/diagrams/physics-11-07.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 458–468 ─────────────────────────
  {
    n: '01',
    title: 'Newton’s Law of Gravitation',
    kalam: 'The pen falls and the Moon orbits for one identical reason — and a 23-year-old Isaac Newton was the first to see it clearly.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation stone of the entire chapter. JEE Main asks 1–2 direct questions (force calculation, superposition, ratio-scaling). NEET loves it for definitions, properties of <i>G</i>, and quick numericals. JEE Advanced rarely asks it in isolation but builds every orbital, energy, and field problem on top of it. CBSE Boards expect the statement, the vector form, and the properties of <i>G</i> as a 2–3 mark question.',
      },
      {
        t: 'p',
        html: 'Look up at night and you’ll see the Moon hanging in the sky, going around the Earth, year after year, never falling down. Now drop your pen — it hits the floor instantly. For thousands of years, people thought these were two completely different things: the “heavens” obeyed one set of rules, and “earthly” objects obeyed another. The single most powerful idea in all of physics is that <b>they are the same thing.</b> The pen falls and the Moon orbits for one identical reason — and a 23-year-old Isaac Newton was the first to see it clearly.<br><br>Here’s the intuition. Imagine you’re standing on a tall hill near Mumbai and you throw a cricket ball horizontally. It curves down and lands some distance away. Throw it harder — it lands further. Now imagine throwing it impossibly hard. The ball keeps trying to fall toward the Earth’s centre, but the Earth’s surface is curving away beneath it at exactly the same rate. The ball never gets any closer to the ground — it just keeps “falling around” the Earth forever. <b>That’s an orbit.</b> The Moon is doing nothing more than this: it is a cricket ball that was thrown sideways fast enough to keep missing the Earth. The very force pulling your pen down is the force holding the Moon in the sky.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> every chunk of matter in the universe is quietly tugging on every other chunk. You are right now being pulled toward your physics textbook, toward the person sitting next to you, toward the Sun, toward a distant galaxy — all at once. We never notice these pulls because gravity is staggeringly weak; the electric force between two protons is about 10<sup>36</sup> times stronger than their gravitational attraction. Gravity only becomes a big deal when you pile up enormous amounts of mass — like a whole planet. That’s why the Earth’s pull dominates your daily life, but your pull on your textbook is undetectable.',
      },
      {
        t: 'p',
        html: 'Newton turned this picture into a precise law. The force between two bodies: • gets <b>stronger</b> when either mass is bigger (double a mass → double the force), and • gets <b>weaker fast</b> as they move apart — specifically as the square of the distance (move twice as far → force drops to one-quarter).',
      },
      { t: 'fig', id: 'p11-07-fig-7.1' },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions — when this simple formula is allowed:</b><br>The law in its clean form <i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> is written for <b>point masses</b> — objects so small compared to their separation that their size doesn’t matter. You are not allowed to blindly use it for two arbitrary extended objects sitting close together. There are exactly three safe situations:<br>1. <b>Two point particles</b> (the original case).<br>2. <b>Two uniform spheres</b> (or spherically symmetric bodies) — here a beautiful result called the <b>shell theorem</b> lets you pretend the entire mass of each sphere is squeezed into a point at its centre, and <i>r</i> is the centre-to-centre distance.<br>3. <b>A uniform sphere and a point mass.</b><br><br>For anything else — a rod and a particle, two thin rings, an L-shaped body — you cannot just plug in. You must <b>add up (integrate)</b> the pulls from every tiny piece. We’ll see exactly how in the worked examples. Misapplying the point-mass formula to a rod is one of the most common ways students lose marks.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Newton’s Law of Gravitation (statement)',
        html: 'Every particle in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them, directed along the line joining them.',
      },
      {
        t: 'formula',
        kicker: 'Scalar form (magnitude)',
        main: '<i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Vector form (force on m₁ due to m₂)',
        main: '<i>F⃗</i><sub>12</sub> = −(<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup>) <i>r̂</i><sub>21</sub>',
        legend: ['<i>r̂</i><sub>21</sub> = the unit vector pointing from <i>m</i><sub>2</sub> to <i>m</i><sub>1</sub>'],
        note: 'The negative sign encodes the single most important physical fact: gravity is always <b>attractive</b> — the force points opposite to the outward direction, i.e. back toward the other mass.',
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit'],
        rows: [
          ['<i>F</i>', 'Gravitational force', 'newton (N)'],
          ['<i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>', 'Masses of the two bodies', 'kilogram (kg)'],
          ['<i>r</i>', 'Distance between centres / particles', 'metre (m)'],
          ['<i>r̂</i>', 'Unit vector along the line joining them', 'dimensionless'],
          ['<i>G</i>', 'Universal gravitational constant', 'N·m<sup>2</sup>kg<sup>−2</sup>'],
        ],
      },
      {
        t: 'formula',
        kicker: 'The Universal Gravitational Constant G',
        main: '<i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup>kg<sup>−2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '• <b>Dimensional formula:</b> [<i>G</i>] = [M<sup>−1</sup>L<sup>3</sup>T<sup>−2</sup>]<br>• It is a <b>scalar</b> and a <b>true universal constant</b> — its value does not depend on the masses, the medium, time, place, or temperature.<br>• Physically, <i>G</i> equals the gravitational force (in newtons) between two 1 kg masses placed 1 m apart — which is why it is so tiny.',
      },
      {
        t: 'formula',
        kicker: 'Principle of Superposition',
        main: 'the net force on one particle is the vector sum of the forces from all the others:<br><i>F⃗</i><sub>1</sub> = <i>F⃗</i><sub>12</sub> + <i>F⃗</i><sub>13</sub> + ⋯ + <i>F⃗</i><sub>1<i>n</i></sub> = ∑<sub><i>i</i>=2</sub><sup><i>n</i></sup> (<i>Gm</i><sub>1</sub><i>m</i><sub><i>i</i></sub>/<i>r</i><sub>1<i>i</i></sub><sup>2</sup>) <i>r̂</i><sub>1<i>i</i></sub>',
        legend: [],
        note: 'Each pairwise force is computed as if the other masses weren’t there, then all are added head-to-tail. Each unit vector points from <i>m</i><sub>1</sub> toward the mass that exerts that pull.',
      },
      {
        t: 'p',
        html: '<b>A subtle but examinable distinction — two kinds of mass.</b> The mass <i>m</i> in Newton’s law of gravitation is the <b>gravitational mass</b> <i>m</i><sub><i>g</i></sub> — it measures how strongly a body participates in gravity (both how hard it pulls and how hard it gets pulled). But mass also appears in Newton’s second law, <i>F</i> = <i>m</i><sub><i>i</i></sub><i>a</i>, where it is the <b>inertial mass</b> <i>m</i><sub><i>i</i></sub> — a measure of how stubbornly a body resists being accelerated. Logically these are two completely separate properties: there is no obvious reason a body’s “gravitational charge” should equal its “resistance to acceleration.”<br><br>Yet experiment shows they are equal to about one part in 10<sup>15</sup>. This is why, when you drop two objects of different mass, they fall with the same acceleration <i>g</i>: in <i>m</i><sub><i>g</i></sub><i>g</i> = <i>m</i><sub><i>i</i></sub><i>a</i>, the masses cancel only because <i>m</i><sub><i>g</i></sub> = <i>m</i><sub><i>i</i></sub>. Einstein elevated this remarkable coincidence into the <b>Principle of Equivalence</b> — that gravitation and acceleration are locally indistinguishable — which became the seed of his General Theory of Relativity. For CBSE/NEET purposes, remember: the equality of gravitational and inertial mass is an experimental fact, and it is what makes free-fall acceleration independent of the falling body’s mass.',
      },

      { t: 'part', title: 'CBSE board derivation — Establishing the inverse-square law' },
      {
        t: 'p',
        html: 'Newton’s law is a fundamental law of nature; we don’t “derive” it from something deeper. But there is a classic, examinable derivation that shows <b>why the exponent is exactly 2</b> — Newton’s own reasoning, working backward from Kepler’s observations of the planets. This is the derivation CBSE asks for.',
      },
      {
        t: 'p',
        html: '<b>The assumptions.</b> Consider a planet of mass <i>m</i> moving in a circular orbit of radius <i>r</i> around the Sun (mass <i>M</i><sub><i>s</i></sub>) with period <i>T</i>. (Real orbits are ellipses, but circles capture the physics and are what the board expects.)',
      },
      {
        t: 'p',
        html: '<b>Step 1 — What keeps the planet on its circle?</b> A body moving in a circle is constantly accelerating toward the centre (centripetal acceleration). Some force must supply this. Newton’s leap was to say: that force is gravity. The required centripetal force is<br><i>F</i> = <i>mv</i><sup>2</sup>/<i>r</i><br>The reasoning: without an inward pull, the planet would fly off along a straight tangent; gravity is what continuously bends its path into a closed loop.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Express speed using the period.</b> In one period <i>T</i>, the planet covers the circumference 2π<i>r</i>:<br><i>v</i> = 2π<i>r</i>/<i>T</i><br>Substituting into Step 1:<br><i>F</i> = (<i>m</i>/<i>r</i>)(2π<i>r</i>/<i>T</i>)<sup>2</sup> = 4π<sup>2</sup><i>mr</i>/<i>T</i><sup>2</sup>',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Bring in Kepler’s Third Law.</b> Kepler had found empirically (from Tycho Brahe’s data) that <i>T</i><sup>2</sup> ∝ <i>r</i><sup>3</sup>, i.e. <i>T</i><sup>2</sup> = <i>kr</i><sup>3</sup> for some constant <i>k</i>. The physical insight: this is an observed fact about the solar system that any correct force law must reproduce. Substituting:<br><i>F</i> = 4π<sup>2</sup><i>mr</i>/(<i>kr</i><sup>3</sup>) = (4π<sup>2</sup>/<i>k</i>) · <i>m</i>/<i>r</i><sup>2</sup>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Read off the dependence.</b> Everything except <i>m</i> and <i>r</i> is constant, so<br><i>F</i> ∝ <i>m</i>/<i>r</i><sup>2</sup><br>The inverse-square law drops out automatically — that’s the whole point. The force on the planet is proportional to its own mass <i>m</i> and falls off as 1/<i>r</i><sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 5 — Make it symmetric.</b> By Newton’s third law the planet pulls the Sun just as hard, so the force must depend on <i>M</i><sub><i>s</i></sub> in exactly the same way it depends on <i>m</i>. The only expression symmetric in both masses and matching the 1/<i>r</i><sup>2</sup> behaviour is<br><i>F</i> = <i>GM</i><sub><i>s</i></sub><i>m</i>/<i>r</i><sup>2</sup><br>where <i>G</i> bundles up all the constants. Newton then checked this against the Moon’s orbit (the famous “Moon test”) and found spectacular agreement — confirming the law was universal, not just solar.',
      },
      {
        t: 'proc',
        title: 'Key Procedure — Solving any superposition problem',
        steps: [
          '<b>Isolate</b> the particle on which you want the net force.',
          'For each other mass, compute the <b>magnitude</b> <i>Gm</i><sub>1</sub><i>m</i><sub><i>i</i></sub>/<i>r</i><sub>1<i>i</i></sub><sup>2</sup> separately.',
          '<b>Draw each force as an arrow</b> pointing from your particle toward the source (gravity is attractive).',
          '<b>Resolve</b> into components (x, y) and add component-wise — never add magnitudes directly unless the forces are collinear.',
          'Recombine with <i>F</i><sub>net</sub> = √(<i>F</i><sub><i>x</i></sub><sup>2</sup> + <i>F</i><sub><i>y</i></sub><sup>2</sup>) and find the direction.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two uniform iron spheres of masses 80 kg and 120 kg have their centres 0.50 m apart. Find the gravitational force between them. What happens to this force if the distance is doubled?',
        steps: [
          '<b>Given:</b> <i>m</i><sub>1</sub> = 80 kg, <i>m</i><sub>2</sub> = 120 kg, <i>r</i> = 0.50 m, <i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup>kg<sup>−2</sup>.',
          'Since both are uniform spheres, we may treat their masses as concentrated at their centres and use the point-mass formula directly:<br><i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> = (6.67 × 10<sup>−11</sup>)(80)(120)/(0.50)<sup>2</sup><br><i>F</i> = (6.67 × 10<sup>−11</sup>)(9600)/0.25 = 6.403 × 10<sup>−7</sup>/0.25 = 2.56 × 10<sup>−6</sup> N',
          '<b>Effect of doubling <i>r</i>:</b> since <i>F</i> ∝ 1/<i>r</i><sup>2</sup>, doubling <i>r</i> divides the force by 4:<br><i>F</i>′ = 2.56 × 10<sup>−6</sup>/4 = 6.40 × 10<sup>−7</sup> N',
        ],
        ans: '<i>F</i> = 2.56 × 10<sup>−6</sup> N; doubling the separation reduces it to one-quarter. Notice how minuscule the force is even for 200 kg of iron — gravity is genuinely feeble at human scales.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The gravitational force between two point masses is <i>F</i><sub>0</sub>. One of the masses is tripled and the distance between them is halved. Without a calculator, find the new force.',
        steps: [
          '<b>The fast way — think in ratios, never re-substitute numbers.</b> Each factor changes the force independently:<br><i>F</i> ∝ <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup>',
          '• Tripling one mass: <i>F</i> multiplied by 3. • Halving the distance: <i>r</i> → <i>r</i>/2, so <i>r</i><sup>2</sup> → <i>r</i><sup>2</sup>/4, which multiplies <i>F</i> by 4.',
          '<b>The trap:</b> the most common wrong answer is 3 × 2 = 6<i>F</i><sub>0</sub> — students forget that distance enters as a <b>square</b>, so halving <i>r</i> boosts the force by 4, not 2. The whole problem is solvable in your head in under ten seconds if you respect the square.',
        ],
        ans: 'Combine: <i>F</i><sub>new</sub> = 3 × 4 × <i>F</i><sub>0</sub> = 12 <i>F</i><sub>0</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Gravitation × Dimensional Analysis)',
        q: 'The orbital speed <i>v</i> of a satellite is believed to depend only on the gravitational constant <i>G</i>, the mass <i>M</i> of the planet, and the orbital radius <i>r</i>. Use dimensional analysis to find how <i>v</i> depends on these quantities.',
        steps: [
          'Assume a power-law relation:<br><i>v</i> = <i>kG</i><sup><i>a</i></sup><i>M</i><sup><i>b</i></sup><i>r</i><sup><i>c</i></sup><br>where <i>k</i> is a dimensionless constant. Write the dimensions of each quantity:<br>[<i>v</i>] = [LT<sup>−1</sup>], [<i>G</i>] = [M<sup>−1</sup>L<sup>3</sup>T<sup>−2</sup>], [<i>M</i>] = [M], [<i>r</i>] = [L]',
          'Substitute and collect powers:<br>[M<sup>0</sup>L<sup>1</sup>T<sup>−1</sup>] = [M<sup>−1</sup>L<sup>3</sup>T<sup>−2</sup>]<sup><i>a</i></sup> [M]<sup><i>b</i></sup> [L]<sup><i>c</i></sup> = [M<sup><i>b</i>−<i>a</i></sup> L<sup>3<i>a</i>+<i>c</i></sup> T<sup>−2<i>a</i></sup>]',
          'Equate exponents on both sides: • <b>Time:</b> −2<i>a</i> = −1 ⇒ <i>a</i> = ½ • <b>Mass:</b> <i>b</i> − <i>a</i> = 0 ⇒ <i>b</i> = ½ • <b>Length:</b> 3<i>a</i> + <i>c</i> = 1 ⇒ 3/2 + <i>c</i> = 1 ⇒ <i>c</i> = −½',
          'Therefore<br><i>v</i> = <i>k</i>√(<i>GM</i>/<i>r</i>)',
        ],
        ans: '<i>v</i> ∝ √(<i>GM</i>/<i>r</i>). The full dynamical theory (equating gravity to centripetal force) gives <i>k</i> = 1, but dimensional analysis alone pins down the form without solving any equation of motion — that’s the cross-topic power being tested here.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Force from an extended body — integration)',
        fig: 'p11-07-fig-7.2',
        q: 'A thin uniform rod of mass <i>M</i> and length <i>L</i> lies along a straight line. A point mass <i>m</i> is placed on that same line, a distance <i>a</i> from the <b>nearer</b> end of the rod. Find the gravitational force on <i>m</i>. Then verify the answer in the limit <i>a</i> ≫ <i>L</i>.',
        steps: [
          '<b>Why we can’t just use <i>GMm</i>/<i>r</i><sup>2</sup>:</b> different parts of the rod are at different distances from <i>m</i>, so there is no single value of <i>r</i>. We must sum the pull of every element.',
          '<b>Set up the element.</b> Let the rod have linear mass density <i>λ</i> = <i>M</i>/<i>L</i>. Take a small element of length d<i>x</i> at distance <i>x</i> from <i>m</i>. Its mass is d<i>m</i> = <i>λ</i> d<i>x</i>, and being a tiny piece, it acts like a point mass. Its pull on <i>m</i>:<br>d<i>F</i> = <i>Gm</i> d<i>m</i>/<i>x</i><sup>2</sup> = <i>Gmλ</i> d<i>x</i>/<i>x</i><sup>2</sup>',
          'All these pulls point the same way (along the line, toward the rod), so we can add <b>magnitudes</b> directly — no vector resolution needed here.',
          '<b>Integrate</b> over the rod, with <i>x</i> running from <i>a</i> (near end) to <i>a</i> + <i>L</i> (far end):<br><i>F</i> = ∫<sub><i>a</i></sub><sup><i>a</i>+<i>L</i></sup> (<i>Gmλ</i>/<i>x</i><sup>2</sup>) d<i>x</i> = <i>Gmλ</i>[−1/<i>x</i>]<sub><i>a</i></sub><sup><i>a</i>+<i>L</i></sup> = <i>Gmλ</i>(1/<i>a</i> − 1/(<i>a</i> + <i>L</i>))<br><i>F</i> = <i>Gmλ</i> · ((<i>a</i> + <i>L</i>) − <i>a</i>)/(<i>a</i>(<i>a</i> + <i>L</i>)) = <i>Gm</i> · (<i>M</i>/<i>L</i>) · <i>L</i>/(<i>a</i>(<i>a</i> + <i>L</i>))',
          '<b>Limiting check (<i>a</i> ≫ <i>L</i>):</b> when the point mass is very far away, <i>L</i> becomes negligible beside <i>a</i>, so <i>a</i> + <i>L</i> ≈ <i>a</i> and<br><i>F</i> ≈ <i>GMm</i>/(<i>a</i> · <i>a</i>) = <i>GMm</i>/<i>a</i><sup>2</sup><br>which is exactly the point-mass result. This is the hallmark of a correct extended-body answer: <b>from far away, every object looks like a point mass at its location.</b> If your limit doesn’t collapse to <i>GMm</i>/<i>a</i><sup>2</sup>, you’ve made an error.',
        ],
        ans: '<i>F</i> = <i>GMm</i>/(<i>a</i>(<i>a</i> + <i>L</i>))',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two spheres of mass 5.0 kg each have their centres 20 cm apart. Calculate the gravitational force between them.',
            a: '4.2 × 10<sup>−8</sup> N',
          },
          {
            q: '[NEET] The force between two masses is <i>F</i>. If both masses are doubled and the distance between them is also doubled, what is the new force?',
            a: '<i>F</i> (unchanged — the four-fold mass increase exactly cancels the four-fold distance penalty)',
          },
          {
            q: '[JEE Main] Two point masses, <i>M</i> and 4<i>M</i>, are fixed 9.0 m apart. At what distance from the smaller mass <i>M</i>, along the line joining them, will a third mass experience zero net gravitational force?',
            a: '3.0 m from <i>M</i> (and 6.0 m from 4<i>M</i>)',
          },
          {
            q: '[JEE Main] Three particles each of mass <i>m</i> sit at the corners of an equilateral triangle of side <i>a</i>. Find the magnitude of the net gravitational force on any one particle due to the other two.',
            a: '√3 <i>Gm</i><sup>2</sup>/<i>a</i><sup>2</sup>',
          },
          {
            q: '[JEE Advanced] Two solid spheres made of the same material (same density) and of radii <i>r</i> are placed in contact. Show that the gravitational force between them is proportional to <i>r</i><sup>4</sup>.',
            a: '<i>F</i> ∝ <i>r</i><sup>4</sup> (since each mass ∝ <i>r</i><sup>3</sup> and separation ∝ <i>r</i>).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The gravitational force of attraction between two bodies is <i>F</i>. If the mass of each body is doubled and the distance between them is also doubled, the new force is:',
        opts: [
          { label: '4<i>F</i>', nudge: '(A) picks up only the mass factor and forgets the distance entirely.' },
          { label: '2<i>F</i>', nudge: '(B) wrongly treats the mass effect as ×2 (counting only one mass) and ignores distance.' },
          { label: '<i>F</i>', nudge: null },
          { label: '<i>F</i>/4', nudge: '(D) applies only the distance penalty and forgets that both masses grew.' },
        ],
        correct: 2,
        solution: 'Doubling each mass multiplies the numerator <i>m</i><sub>1</sub><i>m</i><sub>2</sub> by 2 × 2 = 4. Doubling the distance multiplies <i>r</i><sup>2</sup> by 4, dividing the force by 4. Net effect: 4/4 = 1, so the force is unchanged.',
      },
      {
        t: 'mcq',
        q: 'Which one of the following statements about the gravitational force is <b>incorrect</b>?',
        opts: [
          {
            label: 'It is always attractive.',
            nudge: '(A), (C), and (D) are all genuinely true: gravity only ever pulls, the work it does is path-independent (conservative), and the two bodies feel equal-and-opposite pulls.',
          },
          { label: 'It depends on the medium between the bodies.', nudge: null },
          {
            label: 'It is a conservative force.',
            nudge: '(A), (C), and (D) are all genuinely true: gravity only ever pulls, the work it does is path-independent (conservative), and the two bodies feel equal-and-opposite pulls.',
          },
          {
            label: 'It obeys Newton’s third law.',
            nudge: '(A), (C), and (D) are all genuinely true: gravity only ever pulls, the work it does is path-independent (conservative), and the two bodies feel equal-and-opposite pulls.',
          },
        ],
        correct: 1,
        solution: 'Unlike electrostatic or magnetic forces, gravity is <b>completely independent of the intervening medium</b> — putting water, lead, or vacuum between two masses changes nothing. The trap in (B) is confusion with Coulomb’s law, where a dielectric medium does reduce the force by a factor of the permittivity. Students who mentally fuse “inverse-square laws” together fall for this.',
      },
      {
        t: 'mcq',
        q: 'A uniform thin rod of mass <i>M</i> and length <i>L</i> and a point mass <i>m</i> are separated by distance <i>r</i> between the rod’s centre and the point mass. The gravitational force between them is <b>best</b> described as:',
        opts: [
          {
            label: 'exactly <i>GMm</i>/<i>r</i><sup>2</sup>',
            nudge: '(A) is the classic blunder of treating “distance to the centre” as if the rod were a sphere.',
          },
          { label: 'must be found by integration; it is not <i>GMm</i>/<i>r</i><sup>2</sup>', nudge: null },
          { label: 'zero', nudge: '(C) is wrong because there is obviously a non-zero attraction.' },
          { label: '<i>GMm</i>/<i>L</i><sup>2</sup>', nudge: '(D) invents a formula with no basis.' },
        ],
        correct: 1,
        solution: 'The point-mass formula is valid only for point masses, spheres, or a sphere-and-point. A rod is none of these — different elements are at different distances and angles, so you must integrate. You cannot pretend the rod’s mass sits at its centre.',
      },
      {
        t: 'mcq',
        q: 'Two particles of equal mass <i>m</i> are released from rest in deep space with only their mutual gravitation acting, initially separated by distance <i>R</i>. The magnitude of the acceleration of one particle relative to the other is:',
        opts: [
          {
            label: '<i>Gm</i>/<i>R</i><sup>2</sup>',
            nudge: '(A) gives the acceleration of a single particle in the ground frame, forgetting that the second particle is also rushing in.',
          },
          {
            label: '<i>Gm</i>/(2<i>R</i><sup>2</sup>)',
            nudge: '(B) mistakenly halves it (perhaps confusing this with a reduced-mass step done in the wrong direction).',
          },
          { label: '2<i>Gm</i>/<i>R</i><sup>2</sup>', nudge: null },
          { label: 'cannot be determined', nudge: '(D) wrongly assumes missing data — everything needed is given.' },
        ],
        correct: 2,
        solution: 'The force on each particle is <i>F</i> = <i>Gm</i><sup>2</sup>/<i>R</i><sup>2</sup>, so each accelerates at <i>a</i> = <i>F</i>/<i>m</i> = <i>Gm</i>/<i>R</i><sup>2</sup> — toward the other. But they accelerate toward each other, so the <b>relative</b> acceleration is the sum: <i>a</i><sub>rel</sub> = <i>a</i> + <i>a</i> = 2<i>Gm</i>/<i>R</i><sup>2</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the square on distance.</b> When distance changes by a factor <i>k</i>, the force changes by 1/<i>k</i><sup>2</sup>, not 1/<i>k</i>. Halving distance quadruples the force. This single slip causes more wrong answers in ratio problems than anything else.',
          '<b>Misapplying <i>GMm</i>/<i>r</i><sup>2</sup> to extended bodies.</b> The clean formula is licensed only for point masses, uniform spheres, or a sphere-and-point. For rods, rings, arcs, or irregular shapes you must integrate. Asking yourself “is every part of this body the same distance away?” instantly tells you whether you’re allowed to shortcut.',
          '<b>Adding force magnitudes instead of vectors.</b> In superposition, two forces of equal magnitude <i>F</i> at 120° do <b>not</b> give 2<i>F</i> — their resultant is 2<i>F</i> cos 60° = <i>F</i>. In general two equal forces at angle <i>θ</i> give 2<i>F</i> cos(<i>θ</i>/2), anything from 2<i>F</i> down to zero. Always resolve into components first.',
          '<b>Confusing gravity with electrostatics.</b> Gravity is always attractive, medium-independent, and has no “shielding.” Don’t import dielectric constants or repulsion into gravitation problems.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — solve by ratio, not by re-substitution.</b> For any “what happens to <i>F</i> if masses/distance change” question, write <i>F</i> ∝ <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> and multiply the separate factors in your head. You’ll finish in seconds and never touch 6.67 × 10<sup>−11</sup>.',
      },
      {
        t: 'protip',
        html: '<b>Sanity-check with the far-field limit.</b> After any extended-body integration, set the distance ≫ the body’s size. The answer must reduce to <i>GMm</i>/<i>r</i><sup>2</sup>. If it doesn’t, find your mistake before moving on.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Law',
            note: '<i>F</i> = <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup>, directed along the line joining the masses; <b>always attractive.</b>',
          },
          {
            f: 'Vector form',
            note: '<i>F⃗</i><sub>12</sub> = −(<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup>) <i>r̂</i><sub>21</sub> (the − sign = attraction).',
          },
          {
            f: 'Constant',
            note: '<i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup>kg<sup>−2</sup>; dimensions [M<sup>−1</sup>L<sup>3</sup>T<sup>−2</sup>]; universal scalar.',
          },
          { f: 'Force properties', note: 'attractive · central · conservative · medium-independent · obeys Newton’s 3rd law.' },
          { f: 'Valid directly for', note: 'point masses, uniform spheres, sphere + point. <b>Else → integrate.</b>' },
          {
            f: 'Superposition',
            note: '<i>F⃗</i><sub>net</sub> = ∑ <i>F⃗</i><sub><i>i</i></sub> (vector sum, each computed independently).',
          },
        ],
        aids: [
          '“Product up, distance squared down” — masses multiply, distance divides as a square.',
          '“Far away, everything’s a point” — far-field check for extended bodies → <i>GMm</i>/<i>r</i><sup>2</sup>.',
          '<i>G</i> dimensions: rearrange <i>G</i> = <i>Fr</i><sup>2</sup>/(<i>m</i><sub>1</sub><i>m</i><sub>2</sub>) → [M<sup>−1</sup>L<sup>3</sup>T<sup>−2</sup>].',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 469–481 ─────────────────────────
  {
    n: '02',
    title: 'Gravitational Field Intensity',
    kalam: 'Every mass is a source that “warps” the space around it into a landscape of pulls; any other mass dropped into that landscape feels a force determined purely by the local field.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A JEE powerhouse. JEE Main asks 1–2 questions (field due to point masses, shell/sphere inside-vs-outside, the E–r graph). JEE Advanced is relentless here — field of rings, the cavity-in-a-sphere trick, and field–potential links appear almost every year. NEET keeps it lighter (definition, field inside a shell = 0). CBSE Boards expect the definition of field intensity and the fact that surface <i>g</i> is the Earth’s field.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we pictured gravity as a direct tug between two masses — “action at a distance.” But there’s a deeper, more powerful way to see it, and it’s the way modern physics actually thinks. Instead of saying “the Earth reaches across space and grabs the Moon,” we say: <b>the Earth fills the space around it with a gravitational field, and the Moon simply responds to the field right where it sits.</b> The field is the middleman. Every mass is a source that “warps” the space around it into a landscape of pulls; any other mass dropped into that landscape feels a force determined purely by the local field.',
      },
      {
        t: 'p',
        html: '<b>Gravitational field intensity</b> <i>E⃗</i><sub><i>g</i></sub> at a point is defined as the force that a unit mass would feel if placed there — force per kilogram. Put a 1 kg test mass at a point and measure the gravitational force on it; that number (with direction) is the field there. This is why the field has the same units as acceleration (N/kg = m/s<sup>2</sup>): the field at a point is literally the acceleration any freely-falling mass would have there.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> you already know one gravitational field intimately — it’s called <i>g</i>. The “acceleration due to gravity,” 9.8 m/s<sup>2</sup>, is nothing but the Earth’s gravitational field at its surface. That this acceleration belongs to the Earth, and not to the falling object (a point developed in Topic 03), is really the statement that the Earth sets up a field: it exists at every point around the Earth whether or not anything is there to feel it. Now we generalise: every mass, not just the Earth, sets up such a field, and we can compute it for any shape.',
      },
      {
        t: 'p',
        html: 'Why bother with the field picture? Because of one magical property of spheres. Newton proved the <b>shell theorem</b>: • A uniform spherical shell pulls an outside point exactly as if all its mass were a point at the centre. • A uniform spherical shell exerts <b>zero</b> net force on any point inside it — the pulls from all directions cancel perfectly.',
      },
      { t: 'fig', id: 'p11-07-fig-7.3' },
      {
        t: 'p',
        html: 'This is what makes planets tractable: a solid planet is just a stack of nested shells, so from outside it acts like a point mass, and as you tunnel inside, the shells above you stop contributing. The field picture turns messy geometry into clean, layered simplicity.<br><br>We can even draw the field. <b>Gravitational field lines</b> are imaginary arrows pointing everywhere in the direction a test mass would be pushed — so they always point inward, toward the source, like water draining toward a plughole. Their rules mirror those of electric field lines, with one crucial difference: gravity only attracts, so field lines only ever converge onto masses; there are no outward lines, because there is no negative mass to repel. Where the lines crowd together (close to a mass) the field is strong; where they spread out (far away) it is weak. Field lines never cross — at any point the field has one definite direction. For a single point mass they are straight spokes pointing radially inward from every direction; for two masses they curve and merge, and at a null point (where the field vanishes) no line passes at all. Sketching the lines is a fast sanity-check: if you can draw them, you already know the direction of the force everywhere.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b> The clean results below assume <b>uniform</b> mass distributions and <b>spherical or ring symmetry</b>. The shell theorem requires a uniform shell (or one whose density depends only on radius); a lumpy, non-symmetric shell does not give zero interior field. For arbitrary shapes you must integrate the vector contributions, watching the directions — fields are <b>vectors</b> and add by components, never as bare numbers.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Gravitational field intensity (force per unit test mass)',
        main: '<i>E⃗</i><sub><i>g</i></sub> = <i>F⃗</i>/<i>m</i><sub>0</sub>, |<i>E⃗</i><sub><i>g</i></sub>| = <i>GM</i>/<i>r</i><sup>2</sup> (point mass, directed toward <i>M</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Field due to a point mass / outside any spherical body at distance r',
        main: '<i>E</i><sub><i>g</i></sub> = <i>GM</i>/<i>r</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'On the axis of a uniform ring (mass M, radius a) at axial distance x from the centre',
        main: '<i>E</i><sub><i>g</i></sub> = <i>GMx</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup> (toward the ring)<br><i>V</i> = −<i>GM</i>/√(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)',
        legend: [],
        note: 'The field is <b>zero at the centre</b> (<i>x</i> = 0) and is maximum at <i>x</i> = <i>a</i>/√2.',
      },
      {
        t: 'formula',
        kicker: 'Uniform spherical shell (mass M, radius R)',
        main: '<i>E</i><sub><i>g</i></sub> = 0, <i>r</i> < <i>R</i> (inside)<br><i>E</i><sub><i>g</i></sub> = <i>GM</i>/<i>R</i><sup>2</sup>, <i>r</i> = <i>R</i> (surface)<br><i>E</i><sub><i>g</i></sub> = <i>GM</i>/<i>r</i><sup>2</sup>, <i>r</i> > <i>R</i> (outside)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Uniform solid sphere (mass M, radius R)',
        main: '<i>E</i><sub><i>g</i></sub> = <i>GMr</i>/<i>R</i><sup>3</sup>, <i>r</i> ≤ <i>R</i> (inside, ∝ <i>r</i>)<br><i>E</i><sub><i>g</i></sub> = <i>GM</i>/<i>r</i><sup>2</sup>, <i>r</i> ≥ <i>R</i> (outside)',
        legend: [],
        note: 'The field rises linearly from 0 at the centre to <i>GM</i>/<i>R</i><sup>2</sup> at the surface, then falls off as 1/<i>r</i><sup>2</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Relation to potential (field is the negative gradient)',
        main: '<i>E</i><sub><i>g</i></sub> = −d<i>V</i>/d<i>r</i>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit'],
        rows: [
          ['<i>E⃗</i><sub><i>g</i></sub>', 'Gravitational field intensity', 'N/kg (= m/s<sup>2</sup>)'],
          ['<i>m</i><sub>0</sub>', 'Test mass placed at the point', 'kg'],
          ['<i>M</i>', 'Source mass', 'kg'],
          ['<i>r</i>', 'Distance from source / centre', 'm'],
          ['<i>a</i>, <i>x</i>', 'Ring radius; axial distance', 'm'],
          ['<i>R</i>', 'Shell / sphere radius', 'm'],
        ],
      },
      {
        t: 'p',
        html: '• <b>Dimensional formula:</b> [<i>E</i><sub><i>g</i></sub>] = [LT<sup>−2</sup>] — identical to acceleration.<br>• Field is a <b>vector</b>; the net field from many sources is the <b>vector sum</b> <i>E⃗</i><sub><i>g</i></sub> = ∑ <i>E⃗</i><sub><i>i</i></sub>.<br>• At the Earth’s surface, <i>E</i><sub><i>g</i></sub> = <i>g</i>. Field and “acceleration due to gravity” are the same quantity.',
      },

      { t: 'part', title: 'CBSE / JEE derivations' },
      {
        t: 'p',
        html: '<b>(a) Field of a point mass</b><br>Place a test mass <i>m</i><sub>0</sub> at distance <i>r</i> from a point mass <i>M</i>. The force on it is <i>F</i> = <i>GMm</i><sub>0</sub>/<i>r</i><sup>2</sup> (toward <i>M</i>). Dividing by <i>m</i><sub>0</sub>:<br><i>E</i><sub><i>g</i></sub> = <i>F</i>/<i>m</i><sub>0</sub> = <i>GM</i>/<i>r</i><sup>2</sup><br>The test mass cancels — the field is a property of the source and the location, not of whatever we use to probe it.',
      },
      {
        t: 'p',
        html: '<b>(b) Field on the axis of a ring</b><br>Take a uniform ring of mass <i>M</i>, radius <i>a</i>. Consider a point <i>P</i> on its axis at distance <i>x</i> from the centre. Split the ring into tiny elements of mass d<i>m</i>. Each element is at distance √(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>) from <i>P</i> and produces a field d<i>E</i> = <i>G</i> d<i>m</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>) pointing from <i>P</i> toward that element.',
      },
      { t: 'fig', id: 'p11-07-fig-7.4' },
      {
        t: 'p',
        html: 'By symmetry, the components perpendicular to the axis from diametrically opposite elements <b>cancel</b>, leaving only the axial component:<br>d<i>E</i><sub>axis</sub> = d<i>E</i> cos <i>θ</i> = <i>G</i> d<i>m</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>) · <i>x</i>/√(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>) = <i>Gx</i> d<i>m</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup><br>Since <i>x</i> and <i>a</i> are the same for every element, integrate d<i>m</i> over the whole ring (∫ d<i>m</i> = <i>M</i>):<br><i>E</i><sub><i>g</i></sub> = <i>GMx</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup><br>At the centre <i>x</i> = 0, the field is <b>zero</b> (every pull is balanced by its opposite). Far away (<i>x</i> ≫ <i>a</i>), it reduces to <i>GM</i>/<i>x</i><sup>2</sup> — the ring looks like a point. Setting d<i>E</i><sub><i>g</i></sub>/d<i>x</i> = 0 gives the maximum field at <i>x</i> = <i>a</i>/√2.',
      },
      {
        t: 'p',
        html: '<b>(c) Shell theorem and the solid sphere</b><br>For a <b>uniform shell</b>, a rigorous integration (or Gauss’s law for gravity) gives the two clean results stated above: outside, the shell acts as a point mass <i>GM</i>/<i>r</i><sup>2</sup>; inside, the field is exactly <b>zero</b> everywhere. The physical reason for the zero: at an interior point, the nearby part of the shell is small but close (pull ∝ 1/<i>r</i><sup>2</sup> but little mass), while the far part is large but distant — and these exactly compensate.<br><br>A <b>solid sphere</b> is a nest of shells. At a point inside at radius <i>r</i>, every shell of radius greater than <i>r</i> contributes zero (you’re inside them), and every shell smaller than <i>r</i> acts as a point mass at the centre. So only the mass enclosed within radius <i>r</i> matters:<br><i>M</i><sub>enc</sub> = <i>M</i> · <i>r</i><sup>3</sup>/<i>R</i><sup>3</sup> ⇒ <i>E</i><sub><i>g</i></sub> = <i>GM</i><sub>enc</sub>/<i>r</i><sup>2</sup> = (<i>GMr</i><sup>3</sup>/<i>R</i><sup>3</sup>)/<i>r</i><sup>2</sup> = <i>GMr</i>/<i>R</i><sup>3</sup><br>The field grows <b>linearly</b> from the centre (0) to the surface (<i>GM</i>/<i>R</i><sup>2</sup>), then drops as 1/<i>r</i><sup>2</sup> outside.',
      },
      { t: 'fig', id: 'p11-07-fig-7.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two point masses, 4 kg and 9 kg, are placed 1.0 m apart. Find the point on the line joining them where the net gravitational field is zero.',
        steps: [
          'At the null point, the fields from the two masses are equal in magnitude and opposite in direction (between the masses, the two fields point toward opposite masses, so they can cancel). Let the point be at distance <i>x</i> from the 4 kg mass, so (1 − <i>x</i>) from the 9 kg mass:<br><i>G</i>(4)/<i>x</i><sup>2</sup> = <i>G</i>(9)/(1 − <i>x</i>)<sup>2</sup> ⇒ 4/<i>x</i><sup>2</sup> = 9/(1 − <i>x</i>)<sup>2</sup>',
          'Taking square roots: 2/<i>x</i> = 3/(1 − <i>x</i>) ⇒ 2(1 − <i>x</i>) = 3<i>x</i> ⇒ 2 = 5<i>x</i> ⇒ <i>x</i> = 0.4 m.',
        ],
        ans: 'the net field vanishes 0.4 m from the 4 kg mass (and 0.6 m from the 9 kg mass). Notice the null point lies closer to the smaller mass — the field equation balances the smaller pull at a shorter distance.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A hollow spherical shell and a solid sphere have the same mass <i>M</i> and same radius <i>R</i>. A small test mass is placed (i) at the centre and (ii) at the surface of each. Where is the gravitational field zero, and where is it the same for both?',
        steps: [
          '<b>Think in cases, no calculation needed.</b> • <b>At the centre:</b> the shell gives <i>E</i> = 0 (interior of a shell). The solid sphere also gives <i>E</i> = 0 at its centre (<i>E</i> = <i>GMr</i>/<i>R</i><sup>3</sup> = 0 at <i>r</i> = 0). So <b>both are zero at the centre.</b> • <b>At the surface</b> (<i>r</i> = <i>R</i>): both give <i>E</i> = <i>GM</i>/<i>R</i><sup>2</sup> — <b>identical</b>, because from the surface outward, any spherically symmetric body of mass <i>M</i> looks like a point mass.',
          '<b>The trap:</b> students often think the solid sphere has a non-zero field at its centre (it doesn’t — by symmetry, equal pulls from all sides cancel) or that the shell and solid sphere differ at the surface (they don’t). The fields differ only inside: zero throughout the shell, but linearly increasing inside the solid sphere.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Ring on axis)',
        q: 'A uniform ring of mass <i>M</i> and radius <i>a</i> produces a gravitational field along its axis. At what axial distance is the field maximum, and what is that maximum value?',
        steps: [
          'The axial field is <i>E</i><sub><i>g</i></sub> = <i>GMx</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup>. To maximise, differentiate with respect to <i>x</i> and set to zero:<br>d<i>E</i><sub><i>g</i></sub>/d<i>x</i> = <i>GM</i> · [(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup> − <i>x</i> · (3/2)(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>1/2</sup>(2<i>x</i>)]/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3</sup> = 0',
          'The numerator gives (<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>) − 3<i>x</i><sup>2</sup> = 0 ⇒ <i>a</i><sup>2</sup> = 2<i>x</i><sup>2</sup> ⇒ <i>x</i> = <i>a</i>/√2.',
          'Substitute back: <i>a</i><sup>2</sup> + <i>x</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>a</i><sup>2</sup>/2 = 3<i>a</i><sup>2</sup>/2, so (<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup> = (3<i>a</i><sup>2</sup>/2)<sup>3/2</sup> = (3√3/(2√2))<i>a</i><sup>3</sup>:<br><i>E</i><sub>max</sub> = <i>GM</i> · (<i>a</i>/√2)/((3√3/(2√2))<i>a</i><sup>3</sup>) = (<i>GM</i>/<i>a</i><sup>2</sup>) · (<i>a</i>/√2 · 2√2)/(3√3 <i>a</i>) = 2<i>GM</i>/(3√3 <i>a</i><sup>2</sup>)',
        ],
        ans: 'maximum field at <i>x</i> = <i>a</i>/√2, of magnitude <i>E</i><sub>max</sub> = 2<i>GM</i>/(3√3 <i>a</i><sup>2</sup>) ≈ 0.385 <i>GM</i>/<i>a</i><sup>2</sup>. The field is zero at the centre, climbs to this peak, then decays — a non-monotonic profile that JEE loves to test.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (The cavity trick — superposition)',
        fig: 'p11-07-fig-7.6',
        q: 'A solid sphere of radius <i>R</i> and uniform density <i>ρ</i> has a spherical cavity of radius <i>R</i>/2 scooped out, such that the cavity’s surface touches the centre of the original sphere (so the cavity’s centre is at distance <i>R</i>/2 from the sphere’s centre). Show that the gravitational field everywhere inside the cavity is uniform, and find its magnitude.',
        steps: [
          '<b>The idea — superposition.</b> A sphere-with-a-cavity equals a complete solid sphere <b>minus</b> a small solid sphere that would exactly fill the cavity. The field at any point inside the cavity is the field of the full sphere minus the field of the (imaginary) small sphere.',
          'For a point <i>P</i> inside a uniform solid sphere, the interior field is <i>E⃗</i> = −(4/3)π<i>Gρ</i> <i>r⃗</i>, where <i>r⃗</i> is the position vector from that sphere’s centre (the minus sign meaning it points toward the centre). This follows from <i>E</i> = <i>GM</i><sub>enc</sub>/<i>r</i><sup>2</sup> = <i>G</i> · (4/3)π<i>r</i><sup>3</sup><i>ρ</i>/<i>r</i><sup>2</sup> = (4/3)π<i>Gρr</i>.',
          'Let <i>O</i> be the big sphere’s centre and <i>O</i>′ the cavity’s centre, with <i>d⃗</i> = <i>OO⃗</i>′ (magnitude <i>R</i>/2). For point <i>P</i>:<br><i>E⃗</i><sub>cavity</sub> = <i>E⃗</i><sub>full</sub> − <i>E⃗</i><sub>small</sub> = −(4/3)π<i>Gρ</i> <i>r⃗</i><sub><i>OP</i></sub> − (−(4/3)π<i>Gρ</i> <i>r⃗</i><sub><i>O</i>′<i>P</i></sub>) = −(4/3)π<i>Gρ</i>(<i>r⃗</i><sub><i>OP</i></sub> − <i>r⃗</i><sub><i>O</i>′<i>P</i></sub>)',
          'But <i>r⃗</i><sub><i>OP</i></sub> − <i>r⃗</i><sub><i>O</i>′<i>P</i></sub> = <i>OO⃗</i>′ = <i>d⃗</i> (the position <i>P</i> cancels!). Therefore:<br><i>E⃗</i><sub>cavity</sub> = −(4/3)π<i>Gρ</i> <i>d⃗</i>',
          '<b>The result is independent of <i>P</i></b> — the field is the <b>same everywhere inside the cavity</b>: a uniform field of magnitude<br><i>E</i><sub>cavity</sub> = (4/3)π<i>Gρ</i> · <i>R</i>/2 = (2/3)π<i>GρR</i><br>directed parallel to the line of centres, toward the big sphere’s centre. This astonishing uniformity — every point in the hollow feels the identical pull — is one of the most elegant consequences of the inverse-square law, and a signature JEE Advanced result.',
        ],
        ans: '<i>E⃗</i><sub>cavity</sub> = −(4/3)π<i>Gρ</i> <i>d⃗</i>: uniform, of magnitude (2/3)π<i>GρR</i>, directed toward the big sphere’s centre',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define gravitational field intensity and state its SI unit and dimensional formula. What is the gravitational field at the surface of the Earth called?',
            a: 'Force per unit mass, <i>E⃗</i><sub><i>g</i></sub> = <i>F⃗</i>/<i>m</i><sub>0</sub>; unit N/kg; dimensions [LT<sup>−2</sup>]; it is called <i>g</i> (acceleration due to gravity).',
          },
          {
            q: '[NEET] The gravitational field at a distance <i>r</i> from the centre of a uniform solid sphere of radius <i>R</i> (with <i>r</i> < <i>R</i>) is <i>E</i>. What is the field at distance 2<i>R</i> from the centre (outside)? Express it as a multiple of <i>E</i> in terms of <i>r</i> and <i>R</i>.',
            a: 'Inside: <i>E</i> = <i>GMr</i>/<i>R</i><sup>3</sup>; at 2<i>R</i>: <i>E</i>′ = <i>GM</i>/(4<i>R</i><sup>2</sup>), so <i>E</i>′ = <i>ER</i>/(4<i>r</i>).',
          },
          {
            q: '[JEE Main] Two concentric uniform spherical shells have masses <i>M</i><sub>1</sub> and <i>M</i><sub>2</sub> and radii <i>R</i><sub>1</sub> < <i>R</i><sub>2</sub>. Find the gravitational field at a point distance <i>r</i> from the centre when (i) <i>r</i> < <i>R</i><sub>1</sub>, (ii) <i>R</i><sub>1</sub> < <i>r</i> < <i>R</i><sub>2</sub>, (iii) <i>r</i> > <i>R</i><sub>2</sub>.',
            a: '(i) 0; (ii) <i>GM</i><sub>1</sub>/<i>r</i><sup>2</sup>; (iii) <i>G</i>(<i>M</i><sub>1</sub> + <i>M</i><sub>2</sub>)/<i>r</i><sup>2</sup>.',
          },
          {
            q: '[JEE Main] A uniform ring of mass <i>M</i> and radius <i>R</i> has a particle of mass <i>m</i> on its axis at distance <i>R</i> from the centre. Find the gravitational force on the particle.',
            a: '<i>F</i> = <i>GMmR</i>/(<i>R</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup> = <i>GMm</i>/(2√2 <i>R</i><sup>2</sup>).',
          },
          {
            q: '[JEE Advanced] Inside a uniform solid sphere of radius <i>R</i> and density <i>ρ</i>, a spherical cavity is made whose diameter coincides with a radius of the sphere. Find the gravitational field at the centre of the cavity.',
            a: '<i>E</i> = (2/3)π<i>GρR</i> (uniform inside the cavity), directed toward the sphere’s centre.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The gravitational field intensity inside a uniform spherical shell is:',
        opts: [
          { label: '<i>GM</i>/<i>r</i><sup>2</sup>', nudge: '(A) is the outside field.' },
          { label: '<i>GM</i>/<i>R</i><sup>2</sup>', nudge: '(B) is the surface field.' },
          { label: 'zero', nudge: null },
          {
            label: '<i>GMr</i>/<i>R</i><sup>3</sup>',
            nudge: '(D) is the field inside a solid sphere, not a shell. Confusing shell with solid sphere is the classic error.',
          },
        ],
        correct: 2,
        solution: 'By the shell theorem, the contributions from all parts of a uniform shell cancel exactly at any interior point, giving zero field everywhere inside. (The potential inside is a non-zero constant, but the field — the negative of its gradient — is zero.)',
      },
      {
        t: 'mcq',
        q: 'For a uniform solid sphere, the gravitational field is maximum at:',
        opts: [
          { label: 'the centre', nudge: '(A) gives zero (symmetry).' },
          { label: 'the surface', nudge: null },
          { label: 'infinity', nudge: '(C) gives zero (field dies at infinity).' },
          { label: 'halfway to the surface', nudge: '(D) gives only half the surface value (<i>E</i> = <i>GM</i>/(2<i>R</i><sup>2</sup>)).' },
        ],
        correct: 1,
        solution: 'Inside, <i>E</i> = <i>GMr</i>/<i>R</i><sup>3</sup> rises linearly with <i>r</i>; outside, <i>E</i> = <i>GM</i>/<i>r</i><sup>2</sup> falls. The two meet — and the field peaks — exactly at the surface, <i>E</i> = <i>GM</i>/<i>R</i><sup>2</sup>. The “rise then fall, peak at surface” shape is the key takeaway.',
      },
      {
        t: 'mcq',
        q: 'The gravitational field on the axis of a uniform ring is zero at:',
        opts: [
          { label: 'the centre of the ring', nudge: null },
          { label: '<i>x</i> = <i>a</i>/√2', nudge: '(B) is where the field is maximum, not zero.' },
          {
            label: '<i>x</i> = <i>a</i>',
            nudge: '(C) and (D) are wrong — the field is non-zero everywhere on the axis except the centre.',
          },
          {
            label: 'nowhere',
            nudge: '(C) and (D) are wrong — the field is non-zero everywhere on the axis except the centre.',
          },
        ],
        correct: 0,
        solution: 'At the centre, every element’s pull is exactly balanced by the element diametrically opposite, so the net axial field is zero. (The potential at the centre is −<i>GM</i>/<i>a</i>, its most negative value along the axis — another reminder that zero field ≠ zero potential.)',
      },
      {
        t: 'mcq',
        q: 'A particle is placed at the centre of the line joining two equal point masses <i>M</i> separated by distance 2<i>d</i>. The gravitational field and potential at that midpoint are, respectively:',
        opts: [
          { label: 'zero and zero', nudge: '(A) wrongly sets the potential to zero too.' },
          { label: 'zero and −2<i>GM</i>/<i>d</i>', nudge: null },
          { label: '2<i>GM</i>/<i>d</i><sup>2</sup> and zero', nudge: '(C) wrongly adds the fields as scalars.' },
          { label: 'zero and −<i>GM</i>/<i>d</i>', nudge: '(D) forgets one of the two contributions to potential.' },
        ],
        correct: 1,
        solution: 'The two field vectors at the midpoint are equal and opposite, so the <b>field cancels to zero</b>. But potential is a scalar that adds: <i>V</i> = −<i>GM</i>/<i>d</i> − <i>GM</i>/<i>d</i> = −2<i>GM</i>/<i>d</i> — non-zero. The lesson once more: <b>field is a vector (can cancel); potential is a scalar (accumulates).</b>',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing shell with solid sphere inside.</b> Inside a shell, field = 0 everywhere. Inside a solid sphere, field = <i>GMr</i>/<i>R</i><sup>3</sup> rises linearly. Drawing the wrong E–r graph is a frequent, avoidable mistake.',
          '<b>Adding field magnitudes instead of vectors.</b> Field is a vector; two equal fields in opposite directions cancel. (Potential, a scalar, would add in the same situation.) Always resolve into components.',
          '<b>“Zero field means zero potential.”</b> No — inside a shell the field is zero but the potential is a constant −<i>GM</i>/<i>R</i>; at a ring’s centre the field is zero but the potential is −<i>GM</i>/<i>a</i>. Field is the slope of potential, not its value.',
          '<b>Forgetting the only-enclosed-mass rule.</b> Inside a sphere, only the mass within your radius pulls you; the outer shells contribute nothing. This single rule generates the entire interior field.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — use <i>E⃗</i><sub><i>g</i></sub> = −(4/3)π<i>Gρ</i> <i>r⃗</i> for any uniform-sphere interior.</b> It instantly handles cavity problems by superposition: full sphere minus the sphere that fills the hole. The position vector cancels, leaving a uniform field of magnitude (4/3)π<i>Gρd</i> across the cavity, directed toward the big sphere’s centre.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — for symmetric bodies, think “outside = point mass, inside = enclosed mass only.”</b> This converts almost every shell/sphere question into a one-line answer without integration.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: '<i>E⃗</i><sub><i>g</i></sub> = <i>F⃗</i>/<i>m</i><sub>0</sub>; units N/kg = m/s<sup>2</sup>; dimensions [LT<sup>−2</sup>]. At Earth’s surface, <i>E</i><sub><i>g</i></sub> = <i>g</i>.',
          },
          { f: 'Point mass / outside any sphere', note: '<i>E</i><sub><i>g</i></sub> = <i>GM</i>/<i>r</i><sup>2</sup>.' },
          {
            f: 'Ring (axis)',
            note: '<i>E</i><sub><i>g</i></sub> = <i>GMx</i>/(<i>a</i><sup>2</sup> + <i>x</i><sup>2</sup>)<sup>3/2</sup>; zero at centre, <b>max at</b> <i>x</i> = <i>a</i>/√2.',
          },
          { f: 'Shell', note: 'inside = 0; surface = <i>GM</i>/<i>R</i><sup>2</sup>; outside = <i>GM</i>/<i>r</i><sup>2</sup>.' },
          {
            f: 'Solid sphere',
            note: 'inside = <i>GMr</i>/<i>R</i><sup>3</sup> (linear); outside = <i>GM</i>/<i>r</i><sup>2</sup>; <b>peak at the surface.</b>',
          },
          {
            f: 'Field–potential',
            note: '<i>E</i><sub><i>g</i></sub> = −d<i>V</i>/d<i>r</i>. <b>Field is a vector (can cancel); potential is a scalar (adds).</b>',
          },
          {
            f: 'Cavity in uniform sphere',
            note: 'field is <b>uniform,</b> of magnitude (4/3)π<i>Gρd</i>, directed toward the main centre.',
          },
        ],
        aids: [
          '“Outside, a sphere is a point; inside, only what’s beneath you counts.”',
          '“Shell hollow ⇒ field zero; solid ⇒ field grows with <i>r</i>.”',
          '“Ring field peaks at <i>a</i>/√2.”',
        ],
      },
    ],
  },
];
