import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 06 to 08 (the book's "Part II"), word for word from pp. 248
 * to 268 of the Class 11 Physics Master Reference: Subtopic 6, Common Forces in
 * Mechanics & Free-Body Diagrams (pp. 248 to 254), Subtopic 7, Connected
 * Bodies, Pulleys & Constraint Relations (pp. 255 to 261), and Subtopic 8,
 * Vertical Circular Motion (pp. 262 to 268). Part II's own introduction ("Why
 * this part exists", p. 247) opens Topic 06. No drawings on these pages.
 */
export const TOPICS: Topic[] = [
  {
    n: '06',
    title: 'Common Forces in Mechanics & Free-Body Diagrams',
    kalam:
      'That picture is a free-body diagram (FBD), and the arrows are drawn from a small, fixed menu of forces.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Why Topics 6–8 exist.</b> Topics 1–5 built the five pillars of this chapter: impulse, momentum conservation, equilibrium, friction and banking. Topics 6–8 add the three topics that the CBSE, JEE and NEET syllabi also expect: the forces behind every free-body diagram, connected bodies with pulleys and constraints, and vertical circular motion. They use the same eight-section template, the same difficulty ladder (CBSE Board → NEET Speed Trap → JEE Main → JEE Advanced), and the same study-first style:<br>• <b>Subtopic 6 — Common Forces in Mechanics & Free-Body Diagrams:</b> the “vocabulary” of every mechanics problem (weight, normal, tension, spring, contact forces, rolling friction) and the FBD method that all of Subtopics 1–5 silently assumed.<br>• <b>Subtopic 7 — Connected Bodies, Pulleys & Constraint Relations:</b> Atwood machines, blocks in contact, string-and-pulley systems, and constraint equations — the single most heavily tested problem family in JEE/NEET mechanics.<br>• <b>Subtopic 8 — Vertical Circular Motion:</b> the loop, the rod-vs-string distinction, critical speeds, and “leaving the track” — the circular-motion case Topic 5 (banking) did not cover.',
      },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the toolkit every other mechanics problem is built from. JEE Main rarely asks it “naked,” but a wrong normal force or a misdrawn FBD silently wrecks 1–2 questions a year. NEET loves direct conceptual items: “which forces are contact forces,” “normal reaction is not always <i>mg</i>,” spring combinations, and the origin of contact forces. JEE Advanced assumes flawless FBDs as a prerequisite and tests spring networks and angled-force normal reactions. CBSE Board exams regularly set a 2–3 mark question on resolving forces, Hooke’s law, or the normal reaction in a lift.',
      },
      {
        t: 'p',
        html: 'Every problem in Subtopics 1–5 quietly drew the same picture before solving: a body, isolated, with arrows for every force acting on it. That picture is a <b>free-body diagram (FBD)</b>, and the arrows are drawn from a small, fixed menu of forces. Master the menu and the FBD habit, and mechanics stops being a memory game.<br><br>At the deepest level there are only four fundamental forces in nature — gravitational, electromagnetic, and the strong and weak nuclear forces. But in everyday mechanics you meet just two faces of these: <b>gravity</b> (the long-range pull that gives a body its weight) and the <b>contact forces</b> (normal reaction, friction, tension, the push of a spring). Here is a fact that surprises students: every contact force — the floor pushing up on your feet, a rope pulling a crate, a spring resisting compression — is electromagnetic in origin. When two surfaces “touch,” their atoms never really meet; the electron clouds repel, and that repulsion, summed over a vast number of atoms, is what we feel as a solid push.',
      },
      {
        t: 'p',
        html: '<b>Weight</b> (<i>W⃗</i> = <i>mg⃗</i>) is the gravitational pull of the Earth, always vertically downward, effectively acting at the body’s centre of mass. It is the one force that needs no contact.',
      },
      {
        t: 'p',
        html: '<b>Normal reaction</b> (<i>N</i>) is the push a surface exerts perpendicular (“normal”) to itself. A surface can only push, never pull — so the normal arrow always points away from the surface, into the body. The single biggest beginner error is to assume <i>N</i> = <i>mg</i>. It is true only in the special case of a body resting on flat ground with nothing else pressing it. On an incline <i>N</i> = <i>mg</i> cos <i>θ</i>; in a lift accelerating up <i>N</i> = <i>m</i>(<i>g</i> + <i>a</i>); if you press down on a block at an angle, <i>N</i> grows; if you pull up on it, <i>N</i> shrinks. The normal force is self-adjusting, exactly like static friction: it takes whatever value the “no-penetration” condition demands.',
      },
      {
        t: 'p',
        html: '<b>Tension</b> (<i>T</i>) is the pull transmitted along a string, rope, or cable. A string, like a hand, can only pull — never push. For an ideal string (massless and inextensible) the tension is the same at every point, and it is unchanged as the string runs over an ideal pulley (massless, frictionless). That single fact — “tension is the same on both sides of an ideal pulley” — is the workhorse of Subtopic 7.',
      },
      {
        t: 'p',
        html: '<b>Spring force</b> obeys <b>Hooke’s law</b>: a spring stretched or compressed by <i>x</i> pushes back with <i>F⃗</i> = −<i>kx⃗</i>, a restoring force whose magnitude is <i>kx</i>. Unlike a string, a spring can both pull (when stretched) and push (when compressed). The constant <i>k</i> measures stiffness. Springs in series get softer; springs in parallel get stiffer — a result we derive below.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A normal force and a string tension are like two very different employees. The string is a “puller”: ask it to push and it simply goes slack (negative tension is nature’s way of saying “this rope isn’t doing what your equation claims”). The floor is a “pusher”: ask it to pull you down and it can’t — the body just lifts off (<i>N</i> = 0). Whenever your algebra produces a negative <i>N</i> or a negative <i>T</i>, the body has lost contact or the string has gone slack, and your assumed picture is wrong.',
      },
      {
        t: 'p',
        html: 'Finally, a quick word on <b>rolling friction</b>. Subtopic 4 covered static and kinetic friction (sliding). When a wheel rolls instead of slides, the resistance is far smaller: <i>f</i><sub><i>r</i></sub> = <i>μ</i><sub><i>r</i></sub><i>N</i> with <i>μ</i><sub><i>r</i></sub> ≪ <i>μ</i><sub><i>k</i></sub>. This tiny coefficient is the whole reason we put wheels under heavy loads — rolling sidesteps the much larger sliding friction.',
      },
      {
        t: 'proc',
        title: 'The FBD method (use it every single time)',
        steps: [
          '<b>Isolate</b> one body. Mentally cut it free from everything touching it.',
          '<b>Draw only the forces acting on that body</b> — never the forces it exerts on others. Weight first (always present), then one force for every object in contact.',
          '<b>Choose smart axes</b> (horizontal/vertical, or along/perpendicular to an incline).',
          '<b>Resolve</b> slanted forces into components.',
          '<b>Apply</b> ∑<i>F</i><sub><i>x</i></sub> = <i>ma</i><sub><i>x</i></sub> and ∑<i>F</i><sub><i>y</i></sub> = <i>ma</i><sub><i>y</i></sub> (equilibrium is the special case <i>a</i> = 0).',
          '<b>Solve, then sanity-check</b> signs and limiting cases.',
        ],
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• Strings are taken as ideal: massless and inextensible, so tension is uniform. A massive rope has tension that varies along its length.<br>• Pulleys are taken as ideal: massless and frictionless, so they merely redirect tension without changing its magnitude.<br>• Springs are taken as massless and ideal (Hooke’s law holds), valid within the elastic limit only.<br>• Bodies are treated as point masses or rigid bodies; we ignore deformation and rotation unless stated.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Weight',
        main: '<i>W⃗</i> = <i>mg⃗</i>',
        legend: [],
        note: 'magnitude <i>mg</i>, vertically downward.',
      },
      {
        t: 'formula',
        kicker: 'Normal reaction',
        main: '<i>N</i> = <i>mg</i> (flat, nothing else)<br><i>N</i> = <i>mg</i> cos <i>θ</i> (incline)<br><i>N</i> = <i>m</i>(<i>g</i> + <i>a</i>) (lift up)<br><i>N</i> = <i>m</i>(<i>g</i> − <i>a</i>) (lift down)<br><i>N</i> = <i>mg</i> − <i>F</i> sin <i>θ</i> (pull at angle <i>θ</i>)',
        legend: [],
        note: '(context-dependent — never assume <i>mg</i>)',
      },
      {
        t: 'def',
        term: 'Tension',
        html: 'along the string, away from the body; uniform in an ideal massless string and across an ideal pulley.',
      },
      {
        t: 'formula',
        kicker: 'Hooke’s law (spring force)',
        main: '<i>F⃗</i> = −<i>kx⃗</i><br>|<i>F</i>| = <i>kx</i><br>[<i>k</i>] = N m<sup>−1</sup> = [M T<sup>−2</sup>]',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Springs in series',
        main: '1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub> (softer than either)',
        legend: [],
        note: '(same force, extensions add)',
      },
      {
        t: 'formula',
        kicker: 'Springs in parallel',
        main: '<i>k</i><sub>eq</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> (stiffer than either)',
        legend: [],
        note: '(same extension, forces add)',
      },
      {
        t: 'formula',
        kicker: 'Rolling friction',
        main: '<i>f</i><sub><i>r</i></sub> = <i>μ</i><sub><i>r</i></sub><i>N</i><br><i>μ</i><sub><i>r</i></sub> ≪ <i>μ</i><sub><i>k</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Apparent weight',
        main: '<i>R</i> = <i>m</i>(<i>g</i> + <i>a</i>) up<br><i>R</i> = <i>m</i>(<i>g</i> − <i>a</i>) down<br><i>R</i> = <i>mg</i> constant velocity<br><i>R</i> = 0 free fall',
        legend: [],
        note: '(scale reading <i>R</i>, person of mass <i>m</i>)',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Equivalent stiffness of springs in series and in parallel.</b> Series. Two springs <i>k</i><sub>1</sub>, <i>k</i><sub>2</sub> joined end to end carry the same force <i>F</i> (the force is transmitted undiminished through the chain). Their extensions add:<br><i>x</i> = <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> = <i>F</i>/<i>k</i><sub>1</sub> + <i>F</i>/<i>k</i><sub>2</sub>.<br>For the single equivalent spring, <i>x</i> = <i>F</i>/<i>k</i><sub>eq</sub>. Equating,<br><i>F</i>/<i>k</i><sub>eq</sub> = <i>F</i>/<i>k</i><sub>1</sub> + <i>F</i>/<i>k</i><sub>2</sub> ⇒ 1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub>.<br>Because reciprocals add, <i>k</i><sub>eq</sub> is smaller than either spring — a series combination is softer.',
      },
      {
        t: 'p',
        html: 'Parallel. Two springs side by side share the same extension <i>x</i> but each carries its own force; the forces add:<br><i>F</i> = <i>F</i><sub>1</sub> + <i>F</i><sub>2</sub> = <i>k</i><sub>1</sub><i>x</i> + <i>k</i><sub>2</sub><i>x</i> = (<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)<i>x</i>.<br>Comparing with <i>F</i> = <i>k</i><sub>eq</sub><i>x</i> gives <i>k</i><sub>eq</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> — a parallel combination is stiffer.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — The normal reaction is not always <i>mg</i>.</b> Claim: <i>N</i> adjusts to whatever the geometry and the other forces demand. We show three canonical cases from a single principle: <i>N</i> balances the net push of everything else perpendicular to the surface.',
      },
      {
        t: 'p',
        html: '(i) Block in a lift accelerating upward at <i>a</i>. The only vertical forces are <i>N</i> (up) and <i>mg</i> (down), and the block shares the lift’s upward acceleration:<br><i>N</i> − <i>mg</i> = <i>ma</i> ⇒ <i>N</i> = <i>m</i>(<i>g</i> + <i>a</i>) > <i>mg</i>.<br>A downward acceleration replaces +<i>a</i> by −<i>a</i>, giving <i>N</i> = <i>m</i>(<i>g</i> − <i>a</i>) < <i>mg</i>; in free fall <i>a</i> = <i>g</i> and <i>N</i> = 0 (weightlessness).',
      },
      {
        t: 'p',
        html: '(ii) Block pulled by a rope at angle <i>θ</i> above the horizontal. Vertical balance (block stays on the floor) reads<br><i>N</i> + <i>F</i> sin <i>θ</i> = <i>mg</i> ⇒ <i>N</i> = <i>mg</i> − <i>F</i> sin <i>θ</i> < <i>mg</i>.<br>The upward pull “unweights” the block — exactly why lifting the handle of a suitcase reduces the friction you fight (Subtopic 4).',
      },
      {
        t: 'p',
        html: '(iii) Block pushed at angle <i>θ</i> below the horizontal. Now the vertical component of the push adds to the weight:<br><i>N</i> = <i>mg</i> + <i>F</i> sin <i>θ</i> > <i>mg</i>.',
      },
      {
        t: 'p',
        html: 'Moral: always write the perpendicular balance for the actual situation. Substituting <i>N</i> = <i>mg</i> by reflex is the most common single mistake in all of mechanics.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A spring of force constant <i>k</i> = 200 N/m hangs vertically. A block of mass 2 kg is attached and lowered gently until it hangs in equilibrium. (a) Find the extension. (b) The whole arrangement is now placed in a lift accelerating upward at 2 m/s<sup>2</sup>; find the new extension. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Step 1 — Equilibrium on the ground. The spring force balances the weight:<br><i>kx</i><sub>1</sub> = <i>mg</i> ⇒ <i>x</i><sub>1</sub> = <i>mg</i>/<i>k</i> = (2 × 10)/200 = 0.10 m = 10 cm.',
          'Step 2 — In the accelerating lift. The block now accelerates upward at <i>a</i>, so the spring must supply <i>m</i>(<i>g</i> + <i>a</i>):<br><i>kx</i><sub>2</sub> = <i>m</i>(<i>g</i> + <i>a</i>) ⇒ <i>x</i><sub>2</sub> = 2(10 + 2)/200 = 24/200 = 0.12 m = 12 cm.',
        ],
        ans: '(a) 10 cm;   (b) 12 cm. The spring stretches more because the apparent weight rose to <i>m</i>(<i>g</i> + <i>a</i>).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A 2 kg block on a frictionless floor is pushed by a force of 10 N directed at 30° below the horizontal. What is the normal reaction from the floor? Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>The trap:</b> write <i>N</i> = <i>mg</i> = 20 N on autopilot. The downward-slanted push presses the block harder into the floor, so <i>N</i> must exceed <i>mg</i>.',
          'Perpendicular balance:<br><i>N</i> = <i>mg</i> + <i>F</i> sin 30° = 20 + 10(0.5) = 25 N.',
          '<b>Speed tip:</b> the instant a force is applied at an angle, ask “does its vertical part add to or subtract from the weight?” Pushing down ⇒ <i>N</i> = <i>mg</i> + <i>F</i> sin <i>θ</i>; pulling up ⇒ <i>N</i> = <i>mg</i> − <i>F</i> sin <i>θ</i>. Any option equal to <i>mg</i> is the bait.',
        ],
        ans: '<i>N</i> = 25 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Two blocks <i>m</i><sub>1</sub> = 2 kg and <i>m</i><sub>2</sub> = 3 kg rest in contact on a frictionless floor. A horizontal force <i>F</i> = 10 N is applied to <i>m</i><sub>1</sub>, pushing both. Find (a) the common acceleration and (b) the contact force between the blocks.',
        steps: [
          'Step 1 — Treat the pair as one system to get the acceleration:<br><i>a</i> = <i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 10/5 = 2 m/s<sup>2</sup>.',
          'Step 2 — FBD of the rear block alone is messy; FBD of the front block <i>m</i><sub>2</sub> is clean. The only horizontal force on <i>m</i><sub>2</sub> is the contact push <i>N</i><sub><i>c</i></sub> from <i>m</i><sub>1</sub>:<br><i>N</i><sub><i>c</i></sub> = <i>m</i><sub>2</sub><i>a</i> = 3 × 2 = 6 N.',
          '<b>Cross-check (Newton’s third law):</b> the contact force on <i>m</i><sub>1</sub> from <i>m</i><sub>2</sub> is also 6 N, backward. Apply ∑<i>F</i> to <i>m</i><sub>1</sub>: 10 − 6 = 4 = <i>m</i><sub>1</sub><i>a</i> = 2 × 2. Consistent. Note that if <i>F</i> were applied to <i>m</i><sub>2</sub> instead, the contact force would be <i>m</i><sub>1</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 4 N, not 6 N — the contact force depends on which block you push. That asymmetry is a favourite trap.',
        ],
        ans: '<i>a</i> = 2 m/s<sup>2</sup>, contact force = 6 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Blocks <i>m</i><sub>1</sub> = 1 kg and <i>m</i><sub>2</sub> = 3 kg sit on a frictionless floor connected by a spring of force constant <i>k</i> = 400 N/m. A constant horizontal force <i>F</i> = 8 N is applied to <i>m</i><sub>1</sub>, pulling the pair (with the spring between them). At an instant when the two blocks have the same acceleration, find (a) that common acceleration and (b) the extension of the spring.',
        steps: [
          'Step 1 — Common acceleration (when both blocks share one acceleration, the pair can be treated as one body):<br><i>a</i> = <i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 8/4 = 2 m/s<sup>2</sup>.',
          'Step 2 — FBD of the trailing block <i>m</i><sub>2</sub>. The only horizontal force on <i>m</i><sub>2</sub> is the spring force <i>F</i><sub><i>s</i></sub> = <i>kx</i>, which must produce its acceleration:<br><i>kx</i> = <i>m</i><sub>2</sub><i>a</i> ⇒ <i>x</i> = <i>m</i><sub>2</sub><i>a</i>/<i>k</i> = (3 × 2)/400 = 0.015 m = 1.5 cm.',
          '<b>Deep insight:</b> the spring force is set by the mass it must drag, not by the applied <i>F</i>. Whichever block the spring is “responsible for” (here <i>m</i><sub>2</sub>) fixes <i>F</i><sub><i>s</i></sub> = <i>m</i><sub>2</sub><i>a</i>. This is the spring twin of the contact-force result in Example 3 — a spring is just a contact force you can see stretch.',
        ],
        ans: '<i>a</i> = 2 m/s<sup>2</sup>; spring extension = 1.5 cm.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 5 kg block rests on a horizontal floor. A rope pulls it with 30 N at 30° above the horizontal. Find the normal reaction. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>N</i> = <i>mg</i> − <i>F</i> sin 30° = 50 − 15 = 35 N.',
          },
          {
            q: '[NEET] Two springs of constants 300 N/m and 600 N/m are combined. Find <i>k</i><sub>eq</sub> in (a) series and (b) parallel.',
            a: '(a) series <i>k</i> = (300 × 600)/900 = 200 N/m;   (b) parallel <i>k</i> = 900 N/m.',
          },
          {
            q: '[JEE Main] A 2 kg block hangs from a spring inside a lift. The spring reads an extension corresponding to a force of 26 N. What is the lift’s acceleration and its direction? (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>kx</i> = <i>m</i>(<i>g</i> + <i>a</i>) ⇒ 26 = 2(10 + <i>a</i>) ⇒ <i>a</i> = 3 m/s<sup>2</sup>, upward.',
          },
          {
            q: '[JEE Main] Three blocks of 1, 2, 3 kg rest in contact in a line on a frictionless floor. A force <i>F</i> = 12 N pushes the 1 kg block. Find the force the 2 kg block exerts on the 3 kg block.',
            a: '<i>a</i> = <i>F</i>/6 = 2 m/s<sup>2</sup>; force on 3 kg block = 3<i>a</i> = 6 N.',
          },
          {
            q: '[JEE Advanced] A block on a frictionless incline of 30° is held by a spring (<i>k</i> = 500 N/m) running parallel to the incline. If the block has mass 5 kg, find the spring’s extension at equilibrium. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>kx</i> = <i>mg</i> sin <i>θ</i> ⇒ <i>x</i> = (5 × 10 × 0.5)/500 = 0.05 m = 5 cm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The normal reaction on a body resting on a horizontal surface is equal to its weight only when:',
        opts: [
          { label: 'the surface is rough.', nudge: '(a) roughness is irrelevant to <i>N</i>.' },
          {
            label: 'no other vertical force (besides weight and <i>N</i>) acts and there is no vertical acceleration.',
            nudge: null,
          },
          { label: 'the body is moving.', nudge: '(c) motion is irrelevant.' },
          {
            label: 'always, by definition.',
            nudge: '(d) the “always” fallacy — <i>N</i> changes on inclines, in lifts, and under angled forces.',
          },
        ],
        correct: 1,
        solution: '<i>N</i> equals <i>mg</i> only when nothing else presses or lifts vertically and <i>a</i><sub><i>y</i></sub> = 0.',
      },
      {
        t: 'mcq',
        q: 'An ideal string passes over an ideal (massless, frictionless) pulley. The tension:',
        opts: [
          { label: 'is larger on the side of the heavier mass.', nudge: '(a) confuses tension with weight.' },
          { label: 'is the same throughout the string.', nudge: null },
          { label: 'is zero on the lighter side.', nudge: '(c) and (d) have no basis for an ideal system.' },
          { label: 'depends on the pulley’s radius.', nudge: '(c) and (d) have no basis for an ideal system.' },
        ],
        correct: 1,
        solution: 'A massless string over a frictionless pulley has one uniform tension.',
      },
      {
        t: 'mcq',
        q: 'Two identical springs each of constant <i>k</i> are connected in parallel and support a load. Compared with a single spring, the combination is:',
        opts: [
          {
            label: 'softer, with <i>k</i><sub>eq</sub> = <i>k</i>/2.',
            nudge: 'The <i>k</i>/2 answer is the series result — the classic swap.',
          },
          { label: 'stiffer, with <i>k</i><sub>eq</sub> = 2<i>k</i>.', nudge: null },
          {
            label: 'unchanged, <i>k</i><sub>eq</sub> = <i>k</i>.',
            nudge: '(c) treats the pair as one spring — side by side, each spring carries its own force at the same extension, so the forces add.',
          },
          {
            label: 'undefined.',
            nudge: '(d) has no basis — two springs in parallel simply add their constants, giving a perfectly definite <i>k</i><sub>eq</sub>.',
          },
        ],
        correct: 1,
        solution: 'Parallel springs add: <i>k</i><sub>eq</sub> = 2<i>k</i> (stiffer).',
      },
      {
        t: 'mcq',
        q: 'Contact forces such as the normal reaction and tension are, at the microscopic level, manifestations of:',
        opts: [
          {
            label: 'the gravitational force.',
            nudge: '(a) gravity is the one force here that needs no contact — it gives the weight, while a surface’s push comes from electron clouds repelling.',
          },
          { label: 'the electromagnetic force.', nudge: null },
          {
            label: 'the strong nuclear force.',
            nudge: '(c) the strong force acts only inside atomic nuclei; when surfaces touch, it is their electron clouds that repel.',
          },
          {
            label: 'a separate “contact force” fundamental to nature.',
            nudge: '(d) is the misconception — contact force is not a fundamental force.',
          },
        ],
        correct: 1,
        solution: 'Contact forces arise from electromagnetic repulsion between surface electrons.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Setting <i>N</i> = <i>mg</i> by reflex.</b> The normal reaction is self-adjusting. Write the actual perpendicular balance every time — inclines, lifts, and angled forces all change it.',
          '<b>Drawing the wrong forces in an FBD.</b> Put only forces acting on the chosen body. The force the body exerts on something else belongs in that object’s diagram.',
          '<b>Letting tension vary across an ideal pulley.</b> For massless string + frictionless pulley, tension is one number throughout. It only differs across a pulley that has mass (rotational inertia) or friction.',
          '<b>Confusing series and parallel springs.</b> Reciprocals add in series (softer); constants add in parallel (stiffer). Quick check: more springs “side by side” must be harder to stretch.',
          '<b>Ignoring negative answers.</b> A negative <i>N</i> means the body left the surface; a negative <i>T</i> means the string went slack. Both signal a wrong assumed configuration, not a real answer.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the FBD is non-negotiable.</b> Spend the first ten seconds of any mechanics problem drawing one clean free-body diagram per body, weight arrow first. Ninety percent of “hard” problems become routine the moment the diagram is correct; almost every wrong answer traces back to a missing or misdirected arrow.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Weight', note: '<i>W</i> = <i>mg</i>, downward' },
          { f: 'Normal (general)', note: 'balances perpendicular forces; not always <i>mg</i>' },
          { f: 'Normal on incline', note: '<i>N</i> = <i>mg</i> cos <i>θ</i>' },
          { f: 'Normal in lift', note: '<i>N</i> = <i>m</i>(<i>g</i> ± <i>a</i>)' },
          { f: 'Tension (ideal string)', note: 'uniform; same across ideal pulley' },
          { f: 'Spring (Hooke)', note: '<i>F</i> = −<i>kx</i>, |<i>F</i>| = <i>kx</i>' },
          {
            f: 'Springs in series',
            note: '1/<i>k</i><sub>eq</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub> (softer)',
          },
          { f: 'Springs in parallel', note: '<i>k</i><sub>eq</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> (stiffer)' },
          {
            f: 'Rolling friction',
            note: '<i>f</i><sub><i>r</i></sub> = <i>μ</i><sub><i>r</i></sub><i>N</i>, <i>μ</i><sub><i>r</i></sub> ≪ <i>μ</i><sub><i>k</i></sub>',
          },
          {
            f: 'Two faces of force in mechanics',
            note: 'gravity (weight) and contact forces (normal, tension, spring, friction) — all contact forces are electromagnetic at root.',
          },
          {
            f: 'The normal reaction and tension are self-adjusting; strings only pull, surfaces only push.',
            note: '',
          },
          { f: 'Series springs soften, parallel springs stiffen.', note: '' },
          {
            f: 'Draw one clean FBD per body — only forces on that body — before writing a single equation.',
            note: '',
          },
        ],
        aids: [
          '“Gravity pulls, surfaces push, strings tug, springs snap back.” For the normal: “<i>N</i> is whatever balance demands — never assume <i>mg</i>.”',
        ],
      },
    ],
  },

  {
    n: '07',
    title: 'Connected Bodies, Pulleys & Constraint Relations',
    kalam:
      'The skill here is not new physics; it is Newton’s second law applied carefully to each body, plus one extra idea: a constraint.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is arguably the most heavily tested problem family in mechanics. JEE Main reliably asks 1–2 questions a year on Atwood machines, blocks-on-table-with-hanging-mass, blocks in contact, or pulley systems. NEET favours quick conceptual and one-step numerical versions (equal-mass Atwood, tension between connected blocks). JEE Advanced layers in movable pulleys, constraint relations, and connected systems inside accelerating (non-inertial) frames. CBSE Board exams regularly set a 3 mark Atwood-machine or two-block numerical.',
      },
      {
        t: 'p',
        html: 'Real machines are rarely a lone block. A lift counterweight, a crane, a tow-truck, two wagons coupled on a track — all are <b>connected bodies</b>, linked by strings, rods, or simple contact, forced to move together in a related way. The skill here is not new physics; it is Newton’s second law applied carefully to each body, plus one extra idea: a <b>constraint</b>.<br><br>A constraint is a relationship the connection forces upon the motions. The cleanest example: two blocks joined by an inextensible string over a fixed pulley. Because the string cannot stretch, whatever length leaves one side arrives on the other — so if one block moves down by 1 cm, the other moves up by 1 cm. Their speeds are equal, and so are the magnitudes of their accelerations. That single sentence, “the accelerations have equal magnitude,” is the constraint that makes the two equations solvable.',
      },
      {
        t: 'proc',
        title: 'The universal recipe for connected bodies',
        steps: [
          'Decide the direction of motion (which way will the system actually go?).',
          'Draw an FBD of each body separately.',
          'Write ∑<i>F</i> = <i>ma</i> for each, taking the direction of motion as positive for that body.',
          'Add the constraint linking the accelerations (for a single fixed pulley, <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> = <i>a</i>).',
          'Solve the simultaneous equations for <i>a</i> and the tension(s).',
        ],
      },
      {
        t: 'p',
        html: 'Three classic configurations recur:<br><br><b>(1) Blocks in contact, pushed by a force.</b> Treat the train as one body to find the common <i>a</i> = <i>F</i>/<i>M</i><sub>total</sub>; then isolate one block to find the internal contact force. The contact force depends on which end you push — pushing a light block that drives a heavy one needs a large internal force, and vice versa.<br><br><b>(2) The Atwood machine.</b> Two masses <i>m</i><sub>1</sub> > <i>m</i><sub>2</sub> hang from a string over a fixed pulley. The heavier descends, the lighter rises, with a shared acceleration smaller than <i>g</i> — the genius of the device is that it “dilutes” gravity so the motion is slow enough to time.<br><br><b>(3) Block on a table joined over a pulley to a hanging mass.</b> The hanging weight drives the system; the table block is dragged along. (Subtopic 4 did the rough-table version; the frictionless case is the clean limit.)',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> An inextensible string is like a rigid promise: “for every metre I give to one side, I take a metre from the other.” That promise is the constraint. The moment you trust it — equal speeds, equal accelerations for a simple pulley — the algebra collapses from four unknowns to two. Movable pulleys make a richer promise (one side moves twice as fast as the pulley), but it is the same idea: count the string.',
      },
      {
        t: 'p',
        html: '<b>Movable pulleys</b> deserve a note. If a pulley is itself free to move and a string runs under it with both ends going up, then the load hanging from that pulley moves at half the speed of the string’s free end — equivalently, the free end moves twice as far. This “factor of two” (and the matching force advantage: the load is shared by two string segments, so the tension needed is halved) is the basis of every block-and-tackle and a staple of JEE Advanced constraint problems.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• Strings ideal (massless, inextensible) and pulleys ideal (massless, frictionless), so tension is uniform and the simple constraints hold.<br>• The string stays taut throughout. If your solution gives a negative tension, the string has gone slack and the bodies move independently — re-examine the setup.<br>• For blocks in contact, the surfaces must stay pressed together; if the contact force comes out negative, the blocks separate.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'System acceleration (no friction)',
        main: '<i>a</i> = (net driving force)/(total mass)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Blocks in contact (F applied to m₁, frictionless)',
        main: '<i>a</i> = <i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br><i>N</i><sub>contact</sub> = <i>m</i><sub>2</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Atwood machine (m₁ > m₂)',
        main: '<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br><i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
        legend: [],
        note: '(fixed ideal pulley)',
      },
      {
        t: 'formula',
        kicker: 'Table block + hanging mass',
        main: '<i>a</i> = <i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br><i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
        legend: ['<i>m</i><sub>1</sub> = block on the table', '<i>m</i><sub>2</sub> = hanging block'],
        note: '(frictionless table)',
      },
      {
        t: 'formula',
        kicker: 'Block on a frictionless incline + hanging mass over a pulley',
        main: '<i>a</i> = (<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub> sin <i>θ</i>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br><i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>(1 + sin <i>θ</i>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
        legend: ['<i>m</i><sub>1</sub> = block on the incline', '<i>m</i><sub>2</sub> = hanging block (<i>m</i><sub>2</sub><i>g</i> > <i>m</i><sub>1</sub><i>g</i> sin <i>θ</i>)'],
        note: '(incline of angle <i>θ</i>)',
      },
      {
        t: 'formula',
        kicker: 'Constraint (single fixed pulley)',
        main: '<i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> (equal magnitudes)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Constraint (one movable pulley)',
        main: 'the load moves at half the free-end speed: <i>a</i><sub>free end</sub> = 2 <i>a</i><sub>load</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Connected system inside a frame accelerating at a₀',
        main: 'replace <i>g</i> by the effective gravity <i>g</i><sub>eff</sub> in the formulas above:<br><i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i><sub>0</sub> (frame accelerating up)<br><i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i><sub>0</sub> (frame accelerating down)',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — The Atwood machine.</b> Setup: masses <i>m</i><sub>1</sub> > <i>m</i><sub>2</sub> hang from the two ends of a light inextensible string over a fixed, frictionless pulley. Let <i>a</i> be the common acceleration magnitude (<i>m</i><sub>1</sub> down, <i>m</i><sub>2</sub> up) and <i>T</i> the (uniform) tension.',
      },
      {
        t: 'p',
        html: 'FBD of <i>m</i><sub>1</sub> (taking downward positive for it):<br><i>m</i><sub>1</sub><i>g</i> − <i>T</i> = <i>m</i><sub>1</sub><i>a</i>.   (i)<br>FBD of <i>m</i><sub>2</sub> (taking upward positive for it):<br><i>T</i> − <i>m</i><sub>2</sub><i>g</i> = <i>m</i><sub>2</sub><i>a</i>.   (ii)<br>Add (i) and (ii) to eliminate <i>T</i>:<br>(<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i> = (<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>a</i> ⇒ <i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>).<br>Substitute back into (ii):<br><i>T</i> = <i>m</i><sub>2</sub>(<i>g</i> + <i>a</i>) = <i>m</i><sub>2</sub>(<i>g</i> + (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)) = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: 'Sanity checks: if <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub>, then <i>a</i> = 0 and <i>T</i> = <i>mg</i> — the system balances. If <i>m</i><sub>2</sub> → 0, then <i>a</i> → <i>g</i> and <i>T</i> → 0 — <i>m</i><sub>1</sub> is in free fall, as it should be. Note also that <i>T</i> < <i>m</i><sub>1</sub><i>g</i> and <i>T</i> > <i>m</i><sub>2</sub><i>g</i>: the string tension always lies between the two weights, which is why the heavier side wins.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Contact force between two blocks (Newton’s third law in action).</b> Setup: blocks <i>m</i><sub>1</sub> (rear) and <i>m</i><sub>2</sub> (front) in contact on a frictionless floor; a horizontal force <i>F</i> pushes <i>m</i><sub>1</sub>.',
      },
      {
        t: 'p',
        html: 'Whole system: <i>F</i> = (<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>a</i> ⇒ <i>a</i> = <i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>).<br>Isolate the front block <i>m</i><sub>2</sub>. The only horizontal force on it is the contact push <i>N</i><sub><i>c</i></sub> from <i>m</i><sub>1</sub>:<br><i>N</i><sub><i>c</i></sub> = <i>m</i><sub>2</sub><i>a</i> = <i>m</i><sub>2</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>).<br>Isolate the rear block <i>m</i><sub>1</sub> as a check. Forces are <i>F</i> forward and the third-law reaction <i>N</i><sub><i>c</i></sub> backward:<br><i>F</i> − <i>N</i><sub><i>c</i></sub> = <i>m</i><sub>1</sub><i>a</i> ⇒ <i>F</i> − <i>m</i><sub>2</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = <i>m</i><sub>1</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = <i>m</i><sub>1</sub><i>a</i>. ✓',
      },
      {
        t: 'p',
        html: 'Key consequence: push the light block so it drives the heavy one and the contact force is large (<i>N</i><sub><i>c</i></sub> = <i>m</i><sub>2</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) with <i>m</i><sub>2</sub> heavy); reverse it and the contact force is small. The force “felt” at the interface is always the share needed to accelerate everything ahead of that interface — never the full <i>F</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'In an Atwood machine, masses 5 kg and 3 kg hang over a light frictionless pulley. Find the acceleration of the system and the tension in the string. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = (5 − 3)(10)/(5 + 3) = 20/8 = 2.5 m/s<sup>2</sup>.',
          '<i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 2(5)(3)(10)/8 = 300/8 = 37.5 N.',
          '<b>Check:</b> <i>T</i> lies between the two weights (30 N and 50 N) — good. If you ever get <i>T</i> outside that range, you have a sign error.',
        ],
        ans: '<i>a</i> = 2.5 m/s<sup>2</sup>, <i>T</i> = 37.5 N.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Three blocks of masses 1 kg, 2 kg and 3 kg are connected by light strings and pulled along a frictionless floor by a force <i>F</i> = 12 N applied to the 1 kg block. Find the tension in the string between the 2 kg and 3 kg blocks.',
        steps: [
          '<b>The trap:</b> grinding through three coupled equations. Don’t.',
          'Shortcut — “tension drags the mass behind it.” First the common acceleration:<br><i>a</i> = <i>F</i>/(1 + 2 + 3) = 12/6 = 2 m/s<sup>2</sup>.',
          'The string between the 2 and 3 kg blocks only has to accelerate the 3 kg block (everything behind that string):<br><i>T</i> = 3 × <i>a</i> = 3 × 2 = 6 N.',
          '<b>Speed tip:</b> the tension at any cut equals (mass on the far side of the cut) × <i>a</i>. The last string pulls the last block; the first string pulls everything except the front block. This turns a system of equations into one multiplication.',
        ],
        ans: '6 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A block of mass <i>m</i><sub>1</sub> = 4 kg rests on a frictionless incline of 30°. A light string from it runs up the slope, over a pulley at the top, and down to a freely hanging block <i>m</i><sub>2</sub> = 3 kg. Find the acceleration of the system and the tension. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Step 1 — Which way does it move? Hanging weight <i>m</i><sub>2</sub><i>g</i> = 30 N versus the down-slope pull on <i>m</i><sub>1</sub>, <i>m</i><sub>1</sub><i>g</i> sin 30° = 4(10)(0.5) = 20 N. Since 30 > 20, <i>m</i><sub>2</sub> descends and <i>m</i><sub>1</sub> slides up the incline.',
          'Step 2 — Equations of motion.<br>Hanging block: <i>m</i><sub>2</sub><i>g</i> − <i>T</i> = <i>m</i><sub>2</sub><i>a</i> ⇒ 30 − <i>T</i> = 3<i>a</i>.<br>Incline block: <i>T</i> − <i>m</i><sub>1</sub><i>g</i> sin 30° = <i>m</i><sub>1</sub><i>a</i> ⇒ <i>T</i> − 20 = 4<i>a</i>.',
          'Step 3 — Add to eliminate <i>T</i>:<br>30 − 20 = 7<i>a</i> ⇒ <i>a</i> = 10/7 ≈ 1.43 m/s<sup>2</sup>.<br><i>T</i> = 20 + 4<i>a</i> = 20 + 40/7 = 180/7 ≈ 25.7 N.',
        ],
        ans: '<i>a</i> ≈ 1.43 m/s<sup>2</sup>, <i>T</i> ≈ 25.7 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An Atwood machine with masses <i>m</i><sub>1</sub> = 3 kg and <i>m</i><sub>2</sub> = 1 kg hangs from the ceiling of a lift. The lift accelerates upward at <i>a</i><sub>0</sub> = 2 m/s<sup>2</sup>. Find (a) the acceleration of the masses relative to the lift and (b) the string tension. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Step 1 — Work in the lift’s frame. It is non-inertial, accelerating up at <i>a</i><sub>0</sub>, so each mass feels a pseudo-force <i>ma</i><sub>0</sub> downward. The effect is exactly as if gravity were stronger:<br><i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i><sub>0</sub> = 10 + 2 = 12 m/s<sup>2</sup>.',
          'Step 2 — Apply the Atwood results with <i>g</i> → <i>g</i><sub>eff</sub>:<br><i>a</i><sub>rel</sub> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i><sub>eff</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = (2)(12)/4 = 6 m/s<sup>2</sup>.<br><i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i><sub>eff</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 2(3)(1)(12)/4 = 18 N.',
          '<b>Deep insight:</b> an accelerating lift simply rescales gravity to <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i><sub>0</sub> for everything riding inside it. The same trick handles a pendulum, a spring scale, or a connected system in any uniformly accelerating frame — replace <i>g</i> and reuse the inertial-frame formula. A lift in free fall (<i>a</i><sub>0</sub> = −<i>g</i>) gives <i>g</i><sub>eff</sub> = 0: the Atwood masses float, <i>T</i> = 0, and <i>a</i><sub>rel</sub> = 0.',
        ],
        ans: 'relative acceleration = 6 m/s<sup>2</sup>; tension = 18 N.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] An Atwood machine has masses 6 kg and 4 kg. Find the acceleration and the tension. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>a</i> = (6 − 4)(10)/10 = 2 m/s<sup>2</sup>; <i>T</i> = 2(6)(4)(10)/10 = 48 N.',
          },
          {
            q: '[NEET] Two blocks 2 kg and 4 kg in contact on a frictionless floor are pushed by <i>F</i> = 18 N applied to the 2 kg block. Find the contact force between them.',
            a: '<i>a</i> = <i>F</i>/6 = 3 m/s<sup>2</sup>; contact force = 4<i>a</i> = 12 N.',
          },
          {
            q: '[JEE Main] A 4 kg block on a frictionless table is connected over a pulley at the edge to a hanging 2 kg block. Find the acceleration and tension. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>a</i> = <i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 2(10)/6 = 3.33 m/s<sup>2</sup>; <i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 4(2)(10)/6 = 13.3 N.',
          },
          {
            q: '[JEE Main] A 2 kg block on a frictionless incline of 37° is connected over a pulley to a hanging 3 kg block. Find the system’s acceleration. (<i>g</i> = 10 m/s<sup>2</sup>, sin 37° = 0.6)',
            a: 'driving = 3(10) = 30 N; opposing = 2(10)(0.6) = 12 N; <i>a</i> = (30 − 12)/5 = 3.6 m/s<sup>2</sup>.',
          },
          {
            q: '[JEE Advanced] An Atwood machine (5 kg and 3 kg) hangs in a lift accelerating downward at 2 m/s<sup>2</sup>. Find the acceleration of the masses relative to the lift and the tension. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i><sub>0</sub> = 8; <i>a</i><sub>rel</sub> = (2)(8)/8 = 2 m/s<sup>2</sup>; <i>T</i> = 2(5)(3)(8)/8 = 30 N.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In an Atwood machine with two equal masses <i>m</i>, when released the system:',
        opts: [
          { label: 'accelerates at <i>g</i>.', nudge: 'The others assume a net driving force that does not exist.' },
          { label: 'accelerates at <i>g</i>/2.', nudge: 'The others assume a net driving force that does not exist.' },
          { label: 'remains at rest or moves at constant velocity, with <i>T</i> = <i>mg</i>.', nudge: null },
          { label: 'has zero tension.', nudge: 'The others assume a net driving force that does not exist.' },
        ],
        correct: 2,
        solution: 'Equal masses give <i>a</i> = 0 and <i>T</i> = <i>mg</i> — the string simply balances the two equal weights.',
      },
      {
        t: 'mcq',
        q: 'A light inextensible string connects two blocks over an ideal pulley. The magnitudes of their accelerations are related by:',
        opts: [
          { label: '<i>a</i><sub>1</sub> = <i>a</i><sub>2</sub> (equal).', nudge: null },
          { label: '<i>a</i><sub>1</sub> = 2<i>a</i><sub>2</sub>.', nudge: '(b) is the movable-pulley relation.' },
          { label: '<i>a</i><sub>1</sub><i>m</i><sub>1</sub> = <i>a</i><sub>2</sub><i>m</i><sub>2</sub>.', nudge: '(c) and (d) are unfounded.' },
          { label: 'unrelated.', nudge: '(c) and (d) are unfounded.' },
        ],
        correct: 0,
        solution: 'An inextensible string over a single fixed pulley forces equal-magnitude accelerations — this is the constraint.',
      },
      {
        t: 'mcq',
        q: 'Two blocks <i>m</i> and 2<i>m</i> are in contact on a frictionless floor. The contact force is larger when the applied force pushes:',
        opts: [
          { label: 'the block of mass <i>m</i> (so it drives 2<i>m</i>).', nudge: null },
          {
            label: 'the block of mass 2<i>m</i> (so it drives <i>m</i>).',
            nudge: '(b) gives the smaller contact force — pushing 2<i>m</i> leaves only <i>m</i> ahead of the interface, so the push there is just ⅓<i>F</i>.',
          },
          { label: 'the same either way.', nudge: '(c) is the symmetry trap.' },
          {
            label: 'cannot be determined.',
            nudge: '(d) it can be — the contact force is (mass ahead of the interface) × <i>a</i>, and <i>a</i> = <i>F</i>/3<i>m</i> whichever block is pushed.',
          },
        ],
        correct: 0,
        solution: 'The contact force equals (mass ahead of the interface) × <i>a</i>. Pushing <i>m</i> makes the heavy 2<i>m</i> the “mass ahead,” so the interface force is ⅔<i>F</i>; pushing 2<i>m</i> makes it only ⅓<i>F</i>.',
      },
      {
        t: 'mcq',
        q: 'An Atwood machine is taken into a lift in free fall. The tension in the string becomes:',
        opts: [
          {
            label: 'unchanged.',
            nudge: '(a) ignores the lift — the tension is proportional to <i>g</i><sub>eff</sub>, and in free fall <i>g</i><sub>eff</sub> = 0.',
          },
          {
            label: 'doubled.',
            nudge: '(b) would need <i>g</i><sub>eff</sub> = 2<i>g</i>, i.e. a lift accelerating upward at <i>g</i>, not one falling freely.',
          },
          { label: 'zero.', nudge: null },
          {
            label: 'infinite.',
            nudge: '(d) has it backwards — free fall removes the effective gravity, so the tension drops to zero instead of growing.',
          },
        ],
        correct: 2,
        solution: 'In free fall <i>g</i><sub>eff</sub> = 0, so <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i><sub>eff</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) = 0 — the masses float and the string goes slack.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the constraint.</b> Two bodies, two equations, but three unknowns (<i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, <i>T</i>) unless you add the constraint. For a single fixed pulley it is simply <i>a</i><sub>1</sub> = <i>a</i><sub>2</sub>; without it the system is unsolvable.',
          '<b>Inconsistent positive directions.</b> Choose “the direction this body actually moves” as positive for each body, then the signs in ∑<i>F</i> = <i>ma</i> take care of themselves. Mixing conventions flips a sign and ruins the answer.',
          '<b>Using the full applied force as the contact/tension force.</b> The internal force at any junction only accelerates the mass beyond that junction — never the whole load.',
          '<b>Letting tension differ across an ideal pulley.</b> It does not, for a massless string and frictionless pulley. Tension differs across a pulley only if the pulley has mass.',
          '<b>Mishandling the movable-pulley factor of two.</b> A load on a movable pulley moves at half the free-end speed, and because it is held up by two string segments, the tension needed is only half the load. Count the string segments to get the relation right.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — “add the equations.”</b> For any two connected bodies, write ∑<i>F</i> = <i>ma</i> for each with consistent signs and simply add them: the tension cancels and the acceleration falls out in one line. Then back-substitute for <i>T</i>. This single move solves almost every two-body problem in the chapter.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Blocks in contact (<i>F</i> on <i>m</i><sub>1</sub>)',
            note: '<i>a</i> = <i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>N</i><sub><i>c</i></sub> = <i>m</i><sub>2</sub><i>F</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
          },
          {
            f: 'Atwood (<i>m</i><sub>1</sub> > <i>m</i><sub>2</sub>)',
            note: '<i>a</i> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>T</i> = 2<i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
          },
          {
            f: 'Table + hanging mass (smooth)',
            note: '<i>a</i> = <i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub><i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
          },
          {
            f: 'Incline + hanging (smooth)',
            note: '<i>a</i> = (<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub> sin <i>θ</i>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>T</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>(1 + sin <i>θ</i>)<i>g</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
          },
          { f: 'Constraint (fixed pulley)', note: '<i>a</i><sub>1</sub> = <i>a</i><sub>2</sub>' },
          { f: 'Constraint (movable pulley)', note: '<i>a</i><sub>free end</sub> = 2 <i>a</i><sub>load</sub>' },
          { f: 'Accelerating frame', note: 'replace <i>g</i> by <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i><sub>0</sub>' },
          {
            f: 'FBD each body, pick the direction of motion as positive, add the equations to cancel tension.',
            note: '',
          },
          { f: 'An inextensible string over a fixed pulley forces equal-magnitude accelerations.', note: '' },
          { f: 'Internal force at a junction = (mass beyond the junction) × <i>a</i>.', note: '' },
          {
            f: 'Inside an accelerating frame, use <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i><sub>0</sub> and reuse the standard formulas.',
            note: '',
          },
        ],
        aids: ['“Cut, draw, add — tension falls out.” For Atwood: “difference over sum times <i>g</i>.”'],
      },
    ],
  },

  {
    n: '08',
    title: 'Vertical Circular Motion',
    kalam: 'The speed is no longer constant; it is largest at the bottom and smallest at the top.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The vertical-circle case that Topic 5 (banking) did not cover, and a perennial high-yield topic. JEE Main asks 1–2 questions a year on critical speed, tension at top/bottom, or a body leaving a curved surface. NEET favours the conceptual side — why a bucket of water doesn’t spill, the minimum speed at the top, the string-vs-rod distinction. JEE Advanced builds it into “leaving the track” problems on spheres and combined energy-plus-circular-motion setups. CBSE Board exams set the critical-velocity derivation or a tension numerical for 3 marks.',
      },
      {
        t: 'p',
        html: 'Subtopic 5 handled horizontal circles — a car on a banked road, a leaning cyclist, the well of death — where gravity points along the axis and the speed stays constant. A <b>vertical</b> circle is different in one decisive way: gravity now lies in the plane of the motion, so it speeds the body up on the way down and slows it on the way up. The speed is no longer constant; it is largest at the bottom and smallest at the top. That single fact reshapes the whole problem.<br><br>Picture a stone tied to a string, whirled in a vertical circle, or a motorcyclist on a loop-the-loop, or a bucket of water swung over your head. At every point the net inward (toward the centre) force must supply the centripetal requirement <i>mv</i><sup>2</sup>/<i>r</i>. But the cast of inward forces changes around the loop. At the <b>bottom</b>, tension pulls up (inward) while gravity pulls down (outward), so <i>T</i> − <i>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i> — the string is working hardest here. At the <b>top</b>, both tension and gravity point downward, which is now inward, so they cooperate: <i>T</i> + <i>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i>. The string can therefore afford to pull less at the top — and in the limiting case it pulls nothing at all.',
      },
      {
        t: 'p',
        html: 'That limit is the heart of the topic. At the very top, if the speed is just barely enough, the string tension drops to zero and <b>gravity alone</b> provides the centripetal force:<br><i>mg</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>r</i> ⇒ <i>v</i><sub>top,min</sub> = √(<i>gr</i>).<br>Go any slower than √(<i>gr</i>) at the top and gravity would supply more inward force than the circle needs — the body falls inward, the string goes slack, and it leaves the circular path (becoming a projectile). This is exactly why a bucket of water, swung fast enough, keeps the water in even when it is upside down: at the top the water needs a net downward (inward) force of exactly <i>mv</i><sup>2</sup>/<i>r</i>; gravity supplies <i>mg</i> of it, and as long as <i>v</i> ≥ √(<i>gr</i>) that is no more than is needed, so the bucket bottom only ever pushes down on the water (or not at all) and never has to “hold the water up.”',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> At the top of the loop, gravity is not the enemy — it is the helper. It points toward the centre, so it does part (or, at minimum speed, all) of the centripetal job. The danger is going too slow, not too fast: if <i>v</i><sub>top</sub> < √(<i>gr</i>), the body cannot stay on the circle because even “free” gravity is more inward force than a slow circle can use, and the string buckles. Counterintuitively, in vertical circular motion (as in the well of death), faster is safer.',
      },
      {
        t: 'p',
        html: 'The top and bottom are linked by <b>energy conservation</b>. The body climbs a height 2<i>r</i> from bottom to top, so<br><i>v</i><sub>bottom</sub><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gr</i>.<br>Combining this with the minimum top speed <i>v</i><sub>top</sub><sup>2</sup> = <i>gr</i> gives the famous <b>minimum speed at the bottom</b> to just complete the loop:<br><i>v</i><sub>bottom,min</sub><sup>2</sup> = <i>gr</i> + 4<i>gr</i> = 5<i>gr</i> ⇒ <i>v</i><sub>bottom,min</sub> = √(5<i>gr</i>).',
      },
      {
        t: 'p',
        html: '<b>String versus rod — a crucial distinction.</b> The √(<i>gr</i>) and √(5<i>gr</i>) results assume the connector can act only toward the centre (a string can only pull inward; the inside of a circular track can only push inward). If instead the body is fixed to a rigid <b>rod</b> (or rides inside a tube), the connector can also push outward, so it can support the body at the top even at zero speed. Then the minimum condition at the top is merely <i>v</i><sub>top</sub> ≥ 0, and the minimum bottom speed drops to<br><i>v</i><sub>bottom,min</sub> = √(4<i>gr</i>) = 2√(<i>gr</i>).<br>Spotting whether the problem says “string” or “rod” is worth a full mark.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• The track or string is taken as ideal and the motion is in a single vertical plane; air resistance is neglected so energy is conserved.<br>• “Just completes the circle” for a string/track means <i>T</i> = 0 (or <i>N</i> = 0) at the top; for a rod it means <i>v</i><sub>top</sub> = 0.<br>• If the speed at the bottom is below √(5<i>gr</i>) but above √(2<i>gr</i>), a string body goes slack and leaves the path in the upper half (between the horizontal and the top), then follows projectile motion; if it is √(2<i>gr</i>) or less, it never rises above the horizontal diameter and simply swings to and fro in the lower half.<br>• The body is treated as a point mass; we ignore its own size and rotation.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Centripetal requirement',
        main: 'net inward force = <i>mv</i><sup>2</sup>/<i>r</i>',
        legend: [],
        note: '(everywhere on the circle)',
      },
      {
        t: 'formula',
        kicker: 'Tension at the lowest point',
        main: '<i>T</i><sub>bottom</sub> = <i>mv</i><sub>bottom</sub><sup>2</sup>/<i>r</i> + <i>mg</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Tension at the highest point',
        main: '<i>T</i><sub>top</sub> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>r</i> − <i>mg</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Tension at a general angle θ measured from the lowest point',
        main: '<i>T</i> = <i>mv</i><sup>2</sup>/<i>r</i> + <i>mg</i> cos <i>θ</i><br><i>v</i><sup>2</sup> = <i>v</i><sub>bottom</sub><sup>2</sup> − 2<i>gr</i>(1 − cos <i>θ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Energy link (bottom to top, height 2r)',
        main: '<i>v</i><sub>bottom</sub><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gr</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Critical (minimum) speeds — string or inside a track (can only pull/push inward)',
        main: '<i>v</i><sub>top,min</sub> = √(<i>gr</i>)<br><i>v</i><sub>bottom,min</sub> = √(5<i>gr</i>)<br><i>v</i><sub>mid,min</sub> = √(3<i>gr</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Critical (minimum) speeds — rigid rod or tube (can push outward too)',
        main: '<i>v</i><sub>top,min</sub> = 0<br><i>v</i><sub>bottom,min</sub> = 2√(<i>gr</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Tension difference',
        main: '<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>',
        legend: [],
        note: '(for any speed at which the body completes the circle with the string taut; energy conserved)',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Critical speeds for a body on a string (vertical circle).</b> Setup: a body of mass <i>m</i> on a string of length <i>r</i> moves in a vertical circle. We seek the minimum speed to “just complete” the loop.',
      },
      {
        t: 'p',
        html: 'At the top, both tension <i>T</i> and weight <i>mg</i> act downward, i.e. toward the centre:<br><i>T</i> + <i>mg</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>r</i>.<br>A string cannot push, so the smallest it can do is <i>T</i> = 0. Setting <i>T</i> = 0 gives the minimum top speed:<br><i>mg</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>r</i> ⇒ <i>v</i><sub>top,min</sub> = √(<i>gr</i>).',
      },
      {
        t: 'p',
        html: 'Energy conservation from bottom to top (the body rises by 2<i>r</i>, no friction):<br>½<i>mv</i><sub>bottom</sub><sup>2</sup> = ½<i>mv</i><sub>top</sub><sup>2</sup> + <i>mg</i>(2<i>r</i>) ⇒ <i>v</i><sub>bottom</sub><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gr</i>.<br>Insert the minimum top speed <i>v</i><sub>top</sub><sup>2</sup> = <i>gr</i>:<br><i>v</i><sub>bottom,min</sub><sup>2</sup> = <i>gr</i> + 4<i>gr</i> = 5<i>gr</i> ⇒ <i>v</i><sub>bottom,min</sub> = √(5<i>gr</i>).',
      },
      {
        t: 'p',
        html: 'Tension difference (a clean bonus result). Subtract the top relation from the bottom relation, using <i>v</i><sub>bottom</sub><sup>2</sup> − <i>v</i><sub>top</sub><sup>2</sup> = 4<i>gr</i>:<br><i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = <i>m</i>(<i>v</i><sub>bottom</sub><sup>2</sup> − <i>v</i><sub>top</sub><sup>2</sup>)/<i>r</i> + 2<i>mg</i> = <i>m</i>(4<i>gr</i>)/<i>r</i> + 2<i>mg</i> = 6<i>mg</i>.<br>Remarkably this holds at any speed (as long as the body stays on the circle), not just the minimum — a favourite one-line exam result.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — The rigid-rod case, and why it differs from the string.</b> Setup: the body is now attached to a light rigid rod of length <i>r</i> instead of a string. A rod can both pull and push, so at the top it can provide an upward (outward) force to support the body. The top equation becomes<br><i>mg</i> − <i>N</i> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>r</i>,<br>where <i>N</i> is the rod’s outward push (it replaces tension and can be positive). The body can therefore move arbitrarily slowly at the top; the limiting condition is simply <i>v</i><sub>top</sub> ≥ 0. Setting <i>v</i><sub>top</sub> = 0 and using energy conservation:<br><i>v</i><sub>bottom,min</sub><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gr</i> = 0 + 4<i>gr</i> ⇒ <i>v</i><sub>bottom,min</sub> = 2√(<i>gr</i>).',
      },
      {
        t: 'p',
        html: 'Physical reading: a string must maintain √(<i>gr</i>) at the top to stay taut; a rod needs nothing, because it can hold the body up. This is why a “string” loop demands √(5<i>gr</i>) at the bottom while a “rod” loop demands only 2√(<i>gr</i>) — the connector’s ability to push is the entire difference.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A stone of mass 0.5 kg tied to a string of length 1 m is whirled in a vertical circle at the minimum speed needed to complete the loop. Find (a) the speed at the top, (b) the speed at the bottom, and (c) the tension at the bottom. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '(a) <i>v</i><sub>top</sub> = √(<i>gr</i>) = √(10 × 1) = √10 ≈ 3.16 m/s.',
          '(b) <i>v</i><sub>bottom</sub> = √(5<i>gr</i>) = √50 ≈ 7.07 m/s.',
          '(c) <i>T</i><sub>bottom</sub> = <i>mv</i><sub>bottom</sub><sup>2</sup>/<i>r</i> + <i>mg</i> = (0.5 × 50)/1 + 0.5 × 10 = 25 + 5 = 30 N.',
          '<b>Check:</b> at minimum speed <i>T</i><sub>top</sub> = 0, so <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 30 − 0 = 30 N = 6<i>mg</i> = 6(0.5)(10). The 6<i>mg</i> rule confirms the arithmetic.',
        ],
        ans: '<i>v</i><sub>top</sub> ≈ 3.16 m/s, <i>v</i><sub>bottom</sub> ≈ 7.07 m/s, <i>T</i><sub>bottom</sub> = 30 N.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A body moves in a vertical circle on a string, just completing the loop. What is the ratio of its speed at the bottom to its speed at the top?',
        steps: [
          '<b>The trap:</b> reaching for energy equations with numbers. The ratio is universal.',
          'At the minimum, <i>v</i><sub>top</sub> = √(<i>gr</i>) and <i>v</i><sub>bottom</sub> = √(5<i>gr</i>), so<br><i>v</i><sub>bottom</sub>/<i>v</i><sub>top</sub> = √(5<i>gr</i>)/√(<i>gr</i>) = √5 ≈ 2.24.',
          '<b>Speed tip:</b> memorize the trio for a just-completing string loop — <i>v</i><sub>top</sub> : <i>v</i><sub>mid</sub> : <i>v</i><sub>bottom</sub> = √(<i>gr</i>) : √(3<i>gr</i>) : √(5<i>gr</i>) = 1 : √3 : √5. Any ratio question collapses to picking two of these.',
        ],
        ans: '√5 : 1.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A small bead is attached to the end of a light rigid rod of length <i>r</i> = 2.5 m and swung in a vertical circle. (a) Find the minimum speed at the lowest point to complete the circle. (b) Compare with the value required if a string of the same length were used instead. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '(a) Rod case (top speed may be zero):<br><i>v</i><sub>bottom,min</sub> = 2√(<i>gr</i>) = 2√(10 × 2.5) = 2√25 = 2 × 5 = 10 m/s.',
          '(b) String case (top speed must be at least √(<i>gr</i>)):<br><i>v</i><sub>bottom,min</sub> = √(5<i>gr</i>) = √(5 × 10 × 2.5) = √125 ≈ 11.18 m/s.',
        ],
        ans: 'rod needs 10 m/s; the string needs about 11.18 m/s — the rod is the easier loop because it can push the bead through the top.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A small block is placed at the top of a smooth (frictionless) sphere of radius <i>R</i>, given a negligibly small push, and slides down the outside. At what angle <i>θ</i> (measured from the top, at the centre) does it leave the surface, and what is its speed there?',
        steps: [
          'Step 1 — Forces toward the centre. On the outside of the sphere the normal reaction <i>N</i> points outward (away from centre); the inward component of gravity at angle <i>θ</i> from the top is <i>mg</i> cos <i>θ</i>. The net inward force supplies the centripetal force:<br><i>mg</i> cos <i>θ</i> − <i>N</i> = <i>mv</i><sup>2</sup>/<i>R</i>.',
          'Step 2 — Condition for leaving the surface. The block leaves when the surface can no longer push, i.e. <i>N</i> = 0:<br><i>mg</i> cos <i>θ</i> = <i>mv</i><sup>2</sup>/<i>R</i> ⇒ <i>v</i><sup>2</sup> = <i>gR</i> cos <i>θ</i>.',
          'Step 3 — Energy conservation from the top (height drop = <i>R</i> − <i>R</i> cos <i>θ</i> = <i>R</i>(1 − cos <i>θ</i>)):<br>½<i>mv</i><sup>2</sup> = <i>mgR</i>(1 − cos <i>θ</i>) ⇒ <i>v</i><sup>2</sup> = 2<i>gR</i>(1 − cos <i>θ</i>).',
          'Step 4 — Combine the two expressions for <i>v</i><sup>2</sup>:<br><i>gR</i> cos <i>θ</i> = 2<i>gR</i>(1 − cos <i>θ</i>) ⇒ cos <i>θ</i> = 2 − 2 cos <i>θ</i> ⇒ 3 cos <i>θ</i> = 2 ⇒ cos <i>θ</i> = 2/3.',
          'So <i>θ</i> = cos<sup>−1</sup>(2/3) ≈ 48.2°, and the speed at that instant is<br><i>v</i> = √(<i>gR</i> cos <i>θ</i>) = √(⅔<i>gR</i>).',
          '<b>Deep insight:</b> the result is independent of mass and of <i>R</i> — every block leaves a smooth sphere at the same universal angle cos<sup>−1</sup>(2/3). This “leaving the track” logic (<i>N</i> = 0 plus energy conservation) is the single most important Advanced technique for curved-surface problems, and it is the outside-the-circle cousin of the <i>T</i> = 0 condition at the top of a vertical loop.',
        ],
        ans: 'the block leaves the sphere at <i>θ</i> = cos<sup>−1</sup>(2/3) ≈ 48.2° from the top, with speed √(2<i>gR</i>/3).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A ball of mass 0.2 kg on a string of length 0.5 m moves in a vertical circle. Find the minimum speed at the top to keep the string taut. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>v</i><sub>top</sub> = √(<i>gr</i>) = √(10 × 0.5) = √5 ≈ 2.24 m/s.',
          },
          {
            q: '[NEET] For a body just completing a vertical circle on a string, the ratio of the speed at the lowest point to that at the highest point is ?',
            a: '√5 : 1.',
          },
          {
            q: '[JEE Main] A stone of mass 1 kg is whirled in a vertical circle of radius 1 m. Its speed at the top is 5 m/s. Find the tension at the top. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>T</i><sub>top</sub> = <i>mv</i><sup>2</sup>/<i>r</i> − <i>mg</i> = (1 × 25)/1 − 10 = 15 N.',
          },
          {
            q: '[JEE Main] A bead on a rigid rod of length 0.4 m is moved in a vertical circle. Find the minimum speed at the lowest point to complete the circle. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>v</i><sub>bottom,min</sub> = 2√(<i>gr</i>) = 2√(10 × 0.4) = 2 × 2 = 4 m/s.',
          },
          {
            q: '[JEE Advanced] A particle slides from rest down the inside of a smooth vertical circular track of radius <i>r</i>, starting from the level of the centre (i.e. the 3 o’clock position). Find its speed at the lowest point and the normal reaction there, in terms of <i>m</i>, <i>g</i>, <i>r</i>.',
            a: 'Drop = <i>r</i>, so <i>v</i><sup>2</sup> = 2<i>gr</i> ⇒ <i>v</i> = √(2<i>gr</i>); at the bottom <i>N</i> − <i>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i> = 2<i>mg</i> ⇒ <i>N</i> = 3<i>mg</i>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The minimum speed of a body at the highest point of a vertical circle on a string of radius <i>r</i> is:',
        opts: [
          { label: 'zero.', nudge: '(a) is the rod answer.' },
          { label: '√(<i>gr</i>).', nudge: null },
          { label: '√(5<i>gr</i>).', nudge: '(c) is the speed at the bottom.' },
          {
            label: '√(2<i>gr</i>).',
            nudge: '(d) √(2<i>gr</i>) is the speed at the bottom that just carries the body up to the level of the centre (the horizontal diameter); it is not the top speed.',
          },
        ],
        correct: 1,
        solution: 'At the top, <i>T</i> = 0 gives <i>mg</i> = <i>mv</i><sup>2</sup>/<i>r</i>, so <i>v</i> = √(<i>gr</i>).',
      },
      {
        t: 'mcq',
        q: 'A bucket of water is swung in a vertical circle fast enough that no water spills at the top. At the top, the water stays in the bucket because:',
        opts: [
          {
            label: 'the bucket pushes the water up.',
            nudge: '(a) is backward — at the top the bucket bottom can only push down on the water (or not at all); it never holds the water up.',
          },
          {
            label: 'gravity provides all or part of the centripetal force, directed inward (downward) toward the centre.',
            nudge: null,
          },
          { label: 'there is no gravity at the top of the swing.', nudge: '(c) is false.' },
          { label: 'centrifugal force holds it in.', nudge: '(d) misuses a pseudo-force in the ground frame.' },
        ],
        correct: 1,
        solution: 'At the top the required inward force is downward, and gravity supplies it (plus the bucket’s normal push if speed exceeds the minimum).',
      },
      {
        t: 'mcq',
        q: 'For a body just completing a vertical circle on a string, the tension at the lowest point exceeds that at the highest point by:',
        opts: [
          {
            label: '2<i>mg</i>.',
            nudge: '(a) keeps only the 2<i>mg</i> from the weight terms and forgets the 4<i>gr</i> speed difference, which adds 4<i>mg</i> more.',
          },
          {
            label: '4<i>mg</i>.',
            nudge: '(b) keeps only the 4<i>mg</i> from the speed difference and drops the 2<i>mg</i> from the weight terms.',
          },
          { label: '6<i>mg</i>.', nudge: null },
          {
            label: '<i>mg</i>.',
            nudge: '(d) is a single weight — the two weight terms already give 2<i>mg</i>, and the speed difference adds 4<i>mg</i> more.',
          },
        ],
        correct: 2,
        solution: '<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> for any speed at which the body completes the circle, from the 4<i>gr</i> speed difference plus 2<i>mg</i> from the weight terms.',
      },
      {
        t: 'mcq',
        q: 'A body needs less speed to complete a vertical circle when it is attached to a rigid rod rather than a string because:',
        opts: [
          {
            label: 'the rod is heavier.',
            nudge: '(a) the connector’s mass is not what matters — the minimum speeds come from what the connector can do (push as well as pull), not from its weight.',
          },
          {
            label: 'the rod can push outward and support the body at the top, so <i>v</i><sub>top</sub> can be zero.',
            nudge: null,
          },
          {
            label: 'the rod reduces gravity.',
            nudge: '(c) nothing reduces gravity — <i>mg</i> is the same either way; the rod simply adds an outward push at the top.',
          },
          {
            label: 'the rod increases the radius.',
            nudge: '(d) the radius is the same length <i>r</i> in both cases; only the connector’s ability to push differs.',
          },
        ],
        correct: 1,
        solution: 'A rod supplies an outward push, removing the <i>T</i> ≥ 0 restriction; the minimum bottom speed falls from √(5<i>gr</i>) (string) to 2√(<i>gr</i>) (rod).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Assuming constant speed.</b> In a vertical circle the speed changes continuously — fastest at the bottom, slowest at the top. Always link the two with energy conservation (<i>v</i><sub>bottom</sub><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gr</i>).',
          '<b>Using √(<i>gr</i>) for a rod (or 0 for a string).</b> The minimum top speed is √(<i>gr</i>) for a string/track but 0 for a rod/tube. Read the connector carefully; it changes the bottom requirement from √(5<i>gr</i>) to 2√(<i>gr</i>).',
          '<b>Treating tension as the centripetal force by itself.</b> The centripetal force is the net inward force — tension combined with the inward component of gravity. At the top they add; at the bottom they oppose.',
          '<b>Forgetting the body can leave the circle.</b> Below the critical speed a string body does not simply slow down on the loop — if <i>u</i><sup>2</sup> > 2<i>gr</i> (<i>u</i> = speed at the bottom) it goes slack in the upper half and becomes a projectile; if <i>u</i><sup>2</sup> ≤ 2<i>gr</i> it only swings in the lower half. “It stops at the top” is wrong for a string.',
          '<b>Mis-placing the leaving angle on a sphere.</b> A body sliding outside a smooth sphere leaves at cos <i>θ</i> = 2/3 (from the top), found by <i>N</i> = 0 plus energy conservation — not at the top and not at 90°.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — two equations crack every vertical-circle problem.</b> Write Newton’s law toward the centre at the point of interest (combine the connector force with gravity’s radial component), and write energy conservation between two points. Almost every question — critical speed, tension anywhere, leaving the track — is just these two equations solved together.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Tension at bottom',
            note: '<i>T</i><sub>bottom</sub> = <i>mv</i><sub>bottom</sub><sup>2</sup>/<i>r</i> + <i>mg</i>',
          },
          { f: 'Tension at top', note: '<i>T</i><sub>top</sub> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>r</i> − <i>mg</i>' },
          { f: 'General angle <i>θ</i> (from bottom)', note: '<i>T</i> = <i>mv</i><sup>2</sup>/<i>r</i> + <i>mg</i> cos <i>θ</i>' },
          {
            f: 'Energy link (bottom→top)',
            note: '<i>v</i><sub>bottom</sub><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gr</i>',
          },
          {
            f: 'Min speeds: string/track',
            note: '<i>v</i><sub>top</sub> = √(<i>gr</i>), <i>v</i><sub>bottom</sub> = √(5<i>gr</i>)',
          },
          { f: 'Min speeds: rigid rod/tube', note: '<i>v</i><sub>top</sub> = 0, <i>v</i><sub>bottom</sub> = 2√(<i>gr</i>)' },
          { f: 'Tension difference', note: '<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>' },
          { f: 'Leaving a smooth sphere (from top)', note: 'cos <i>θ</i> = 2/3, <i>v</i> = √(2<i>gR</i>/3)' },
          { f: 'Speed varies around a vertical circle; couple top and bottom with energy conservation.', note: '' },
          {
            f: 'Centripetal force is the net inward force',
            note: 'combine connector force and gravity’s radial part.',
          },
          {
            f: 'String/track',
            note: '<i>v</i><sub>top,min</sub> = √(<i>gr</i>), <i>v</i><sub>bottom,min</sub> = √(5<i>gr</i>). Rod/tube: 0 and 2√(<i>gr</i>).',
          },
          {
            f: '<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> whenever the body completes the circle; a body leaves a smooth sphere at cos<sup>−1</sup>(2/3).',
            note: '',
          },
        ],
        aids: [
          '“Top needs root-gr, bottom needs root-5gr; the difference in tension is six <i>mg</i>.” For curved surfaces: “it lets go when the push hits zero.”',
        ],
      },
    ],
  },
];
