import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 01 to 03: pp. 195–224 of the Class 11 Physics Master
 * Reference, word for word: Subtopic 1, Newton’s Laws and Impulse (pp. 196 to
 * 204), Subtopic 2, Momentum Conservation (pp. 205 to 213), and Subtopic 3,
 * Concurrent Forces and Equilibrium (pp. 214 to 224). p. 195 is the chapter
 * opener (title and contents only), so the chapter has no introduction of its
 * own. Figures 4.1 (p. 217, drawn on p. 218), 4.2 and 4.3 (p. 219, drawn on
 * p. 220) are printed inside Topic 03’s worked examples.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 196–204 ─────────────────────────
  {
    n: '01',
    title: 'Newton’s Laws and Impulse',
    kalam: 'A force is not a thing a body “has” — it’s an interaction that changes a body’s momentum.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the spine of all of mechanics. JEE Main reliably pulls 1–2 questions a year from impulse and conservation of momentum, often disguised inside collision or variable-mass problems. NEET leans on the conceptual side — inertia, action–reaction, and the impulse “area under the graph” idea. JEE Advanced rarely asks it standalone but weaves it into multi-body and variable-mass setups. CBSE Board exams almost always carry a 2–3 mark numerical on the impulse–momentum theorem.',
      },
      {
        t: 'p',
        html: 'Imagine you’re standing in a crowded Mumbai local train, no handrail in reach, when the train suddenly jerks forward to leave the platform. Your feet move with the floor, but your upper body — for just a heartbeat — stays exactly where it was. You lurch backward relative to the train. Nobody pushed you. So what threw you?<br><br>Nothing did. That backward lurch is the whole of Newton’s First Law. Your body was at rest, and a body at rest genuinely wants to stay at rest. It has no built-in desire to speed up just because the floor underneath it did. We give this stubbornness a name: <b>inertia</b> — the reluctance of matter to change whatever state of motion it’s already in. The train pulling away didn’t push you backward; it simply ran out from under your lazy upper body.<br><br>Newton’s First Law says: a body continues in its state of rest or of uniform motion in a straight line unless compelled by a net external force to change that state. Notice the law isn’t really about motion — it’s about <b>change</b>. Constant velocity (including zero velocity) is the “free” state that needs no force to maintain. You only need a force to change it.<br><br>How much inertia a body has is measured by its <b>mass</b>. A loaded goods wagon is far harder to get rolling — and far harder to stop — than an empty handcart. Same idea when a cricket bowler bowls: a cork-and-leather ball can be redirected with a flick of the bat, but try redirecting a shot-put with that same flick and you’ll hurt your wrists. More mass, more inertia, more stubbornness.<br><br>Now bring in motion and you get <b>momentum</b>, written <i>p⃗</i> = <i>mv⃗</i> — literally “how much motion” a body carries, accounting for both how heavy it is and how fast it’s going. A truck crawling at 5 km/h and a motorbike racing at 80 km/h can carry comparable momentum because the truck makes up in mass what it lacks in speed. Momentum is the quantity Newton actually cared about.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A force is not a thing a body “has” — it’s an interaction that changes a body’s momentum. Newton’s Second Law, in its truest form, says force is the <b>rate at which momentum changes</b>: push twice as hard, momentum changes twice as fast. And when that change happens over a very short, violent instant — a bat meeting a ball, a foot meeting a football, a car meeting a crash barrier — we stop caring about the exact force at each microsecond and care only about the total kick delivered. That total kick is <b>impulse</b>, and impulse is simply the change in momentum.',
      },
      {
        t: 'p',
        html: 'Newton’s Third Law completes the picture: forces never come alone. When the bat pushes the ball forward, the ball pushes back on the bat with an equal and opposite force. These two forces act on different bodies, which is exactly why they don’t cancel — a point worth tattooing on your brain before exam day.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• Newton’s laws hold only in <b>inertial frames</b> (frames not accelerating). Inside that jerking train, you seem to be pushed backward by a phantom force — that’s because the train is a non-inertial frame, and the “force” is fictitious.<br>• The simple form <i>F⃗</i> = <i>ma⃗</i> assumes <b>constant mass</b>. For rockets, falling chains, or sand piling onto a belt, you must return to the parent form <i>F⃗</i> = d<i>p⃗</i>/d<i>t</i>.<br>• All of this is non-relativistic: it assumes speeds far below the speed of light, where mass stays constant.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Linear Momentum',
        main: '<i>p⃗</i> = <i>mv⃗</i>',
        legend: ['<i>m</i> = mass (kg)', '<i>v⃗</i> = velocity (m/s)'],
        note: 'SI unit: kg · m · s<sup>−1</sup> (equivalently N · s)<br>Dimensional formula: [M<sup>1</sup> L<sup>1</sup> T<sup>−1</sup>]',
      },
      {
        t: 'formula',
        kicker: 'Newton’s Second Law (fundamental form)',
        main: '<i>F⃗</i><sub>net</sub> = d<i>p⃗</i>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Newton’s Second Law (constant-mass form)',
        main: '<i>F⃗</i><sub>net</sub> = <i>ma⃗</i>',
        legend: ['<i>a⃗</i> = acceleration (m/s<sup>2</sup>)'],
        note: 'SI unit of force: newton, N = kg · m · s<sup>−2</sup><br>Dimensional formula of force: [M<sup>1</sup> L<sup>1</sup> T<sup>−2</sup>]',
      },
      {
        t: 'formula',
        kicker: 'Impulse (constant force)',
        main: '<i>J⃗</i> = <i>F⃗</i> Δ<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Impulse (variable force)',
        main: '<i>J⃗</i> = ∫<sub><i>t</i>₁</sub><sup><i>t</i>₂</sup> <i>F⃗</i> d<i>t</i> = area under the force–time graph',
        legend: [],
        note: 'SI unit: N · s = kg · m · s<sup>−1</sup><br>Dimensional formula: [M<sup>1</sup> L<sup>1</sup> T<sup>−1</sup>] — <b>identical to momentum</b> (a fact NEET loves to test).',
      },
      {
        t: 'formula',
        kicker: 'Impulse–Momentum Theorem',
        main: '<i>J⃗</i> = Δ<i>p⃗</i> = <i>mv⃗</i><sub><i>f</i></sub> − <i>mv⃗</i><sub><i>i</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Average Force during an impact',
        main: '<i>F⃗</i><sub>avg</sub> = Δ<i>p⃗</i>/Δ<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conservation of Linear Momentum',
        main: 'if <i>F⃗</i><sub>ext</sub> = 0:<br><i>p⃗</i><sub>initial</sub> = <i>p⃗</i><sub>final</sub> ⇒ ∑ <i>m</i><sub><i>i</i></sub><i>v⃗</i><sub><i>i</i></sub> = constant',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Newton’s Third Law',
        main: '<i>F⃗</i><sub><i>AB</i></sub> = −<i>F⃗</i><sub><i>BA</i></sub>',
        legend: [],
        note: '(force by A on B equals minus the force by B on A — same line of action, opposite directions, acting on different bodies).',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Recovering <i>F⃗</i> = <i>ma⃗</i> from the momentum definition of force.</b><br>Begin with the fundamental statement of the Second Law:<br><i>F⃗</i> = d<i>p⃗</i>/d<i>t</i> = d(<i>mv⃗</i>)/d<i>t</i><br>Why this form first? Because momentum, not acceleration, is the quantity that force genuinely controls. We now make one explicit assumption: the <b>mass of the body is constant</b>. This is true for almost every Board-level body — a block, a ball, a car of fixed load. With <i>m</i> constant, it slides out of the derivative:<br><i>F⃗</i> = <i>m</i> d<i>v⃗</i>/d<i>t</i><br>The rate of change of velocity is, by definition, acceleration <i>a⃗</i> = d<i>v⃗</i>/d<i>t</i>, so:<br><i>F⃗</i> = <i>ma⃗</i><br>This also quietly proves that the First Law lives inside the Second Law: set <i>F⃗</i> = 0 and you get <i>a⃗</i> = 0, i.e. velocity stays constant — exactly the First Law’s claim.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — The Impulse–Momentum Theorem.</b><br>Take the fundamental form again and multiply both sides by d<i>t</i>:<br><i>F⃗</i> d<i>t</i> = d<i>p⃗</i><br>Now integrate over the duration of the interaction, from the instant contact begins (<i>t</i><sub>1</sub>) to the instant it ends (<i>t</i><sub>2</sub>):<br>∫<sub><i>t</i>₁</sub><sup><i>t</i>₂</sup> <i>F⃗</i> d<i>t</i> = ∫ d<i>p⃗</i> (from <i>p⃗</i><sub><i>i</i></sub> to <i>p⃗</i><sub><i>f</i></sub>)<br>The left side is, by definition, the impulse <i>J⃗</i>. The right side integrates cleanly to the change in momentum:<br><i>J⃗</i> = <i>p⃗</i><sub><i>f</i></sub> − <i>p⃗</i><sub><i>i</i></sub> = <i>mv⃗</i><sub><i>f</i></sub> − <i>mv⃗</i><sub><i>i</i></sub><br>Physical reading: we never needed to know the force at each microsecond of the collision. We only needed the endpoints of momentum. That’s the entire power of the theorem — it lets us sidestep a messy, spiky, unmeasurable force.',
      },
      {
        t: 'p',
        html: '<b>Derivation 3 — Conservation of Momentum from the Third Law.</b><br>Consider two bodies A and B interacting with each other and nothing else (an isolated system). During their interaction, A exerts <i>F⃗</i><sub><i>AB</i></sub> on B, and by the Third Law, B exerts <i>F⃗</i><sub><i>BA</i></sub> = −<i>F⃗</i><sub><i>AB</i></sub> on A.<br><br>Apply the Second Law to each:<br><i>F⃗</i><sub><i>AB</i></sub> = d<i>p⃗</i><sub><i>B</i></sub>/d<i>t</i>, <i>F⃗</i><sub><i>BA</i></sub> = d<i>p⃗</i><sub><i>A</i></sub>/d<i>t</i><br>Add them. The right side vanishes because the forces are equal and opposite:<br>d<i>p⃗</i><sub><i>A</i></sub>/d<i>t</i> + d<i>p⃗</i><sub><i>B</i></sub>/d<i>t</i> = <i>F⃗</i><sub><i>BA</i></sub> + <i>F⃗</i><sub><i>AB</i></sub> = 0<br>d/d<i>t</i> (<i>p⃗</i><sub><i>A</i></sub> + <i>p⃗</i><sub><i>B</i></sub>) = 0 ⇒ <i>p⃗</i><sub><i>A</i></sub> + <i>p⃗</i><sub><i>B</i></sub> = constant<br>So when no external force acts, the <b>total</b> momentum of the system is conserved — even though the individual momenta change wildly during the interaction. This is the law you’ll reach for in every recoil, explosion, and collision problem.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A cricket ball of mass 0.16 kg is moving toward a batsman at 30 m/s. The batsman hits it straight back along the same line at 40 m/s. If the bat and ball are in contact for 0.01 s, find (a) the impulse imparted to the ball, and (b) the average force exerted by the bat.',
        steps: [
          '<b>Given:</b> <i>m</i> = 0.16 kg, <i>v</i><sub><i>i</i></sub> = 30 m/s, <i>v</i><sub><i>f</i></sub> = 40 m/s (opposite direction), Δ<i>t</i> = 0.01 s.',
          '<b>Step 1 — Fix a sign convention.</b> Take the direction away from the batsman (the final direction) as positive. Then the incoming velocity is <i>v</i><sub><i>i</i></sub> = −30 m/s and the outgoing velocity is <i>v</i><sub><i>f</i></sub> = +40 m/s.',
          '<b>Step 2 — Apply the impulse–momentum theorem.</b><br><i>J</i> = <i>mv</i><sub><i>f</i></sub> − <i>mv</i><sub><i>i</i></sub> = 0.16(+40) − 0.16(−30)<br><i>J</i> = 6.4 + 4.8 = 11.2 N · s',
          '<b>Step 3 — Average force.</b><br><i>F</i><sub>avg</sub> = <i>J</i>/Δ<i>t</i> = 11.2/0.01 = 1120 N',
          '<b>Presentation note:</b> the marks here are won by the sign convention. A student who writes <i>J</i> = 0.16(40 − 30) = 1.6 N · s has forgotten the ball reversed direction and will lose almost everything.',
        ],
        ans: 'Impulse = 11.2 N · s, directed away from the batsman; average force = 1120 N.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A rifle of mass 4 kg fires a bullet of mass 20 g with a muzzle speed of 400 m/s. What is the recoil speed of the rifle?',
        steps: [
          '<b>The trap:</b> students start writing energy equations or hunting for the force. Don’t. The word “fires” with no external horizontal force screams <b>conservation of momentum</b>.',
          '<b>Mental solve:</b> total momentum before firing is zero (everything at rest). So after firing, the two momenta must cancel:<br><i>m</i><sub>bullet</sub><i>v</i><sub>bullet</sub> = <i>m</i><sub>rifle</sub><i>v</i><sub>rifle</sub><br><i>v</i><sub>rifle</sub> = (0.02 × 400)/4 = 8/4 = 2 m/s',
          '<b>Speed tip:</b> convert 20 g = 0.02 kg instantly, and notice 0.02 × 400 = 8 is a clean number. The whole thing is a 10-second problem if you spot conservation of momentum on sight. If an option says “2 m/s in the same direction as the bullet,” eliminate it on physics alone — recoil is always backward.',
        ],
        ans: '2 m/s, in the direction opposite the bullet.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A ball of mass 0.5 kg is dropped from a height of 5 m onto a hard floor and rebounds to a height of 1.8 m. Find the magnitude of the impulse delivered to the ball by the floor. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'This links <b>kinematics</b> (finding speeds from heights) with the <b>impulse–momentum theorem</b>.',
          '<b>Step 1 — Speed just before impact</b> (free fall through 5 m):<br><i>v</i><sub>1</sub> = √(2<i>gh</i><sub>1</sub>) = √(2 × 10 × 5) = √100 = 10 m/s (downward)',
          '<b>Step 2 — Speed just after impact</b> (rises to 1.8 m):<br><i>v</i><sub>2</sub> = √(2<i>gh</i><sub>2</sub>) = √(2 × 10 × 1.8) = √36 = 6 m/s (upward)',
          '<b>Step 3 — Apply the impulse–momentum theorem with signs.</b> Take upward as positive, so <i>v</i><sub>1</sub> = −10 m/s and <i>v</i><sub>2</sub> = +6 m/s:<br><i>J</i> = <i>mv</i><sub>2</sub> − <i>mv</i><sub>1</sub> = 0.5(+6) − 0.5(−10) = 3 + 5 = 8 N · s',
          '<b>Insight:</b> note this impulse already accounts for the energy lost in the bounce — we never assumed the speeds were equal, because they weren’t. The impulse from gravity during the brief contact is negligible compared to the floor’s impulse, which is why we ignore it.',
        ],
        ans: 'The impulse from the floor has magnitude 8 N · s, directed upward.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Dry sand falls vertically at a steady rate of 3 kg/s from a stationary hopper onto a horizontal conveyor belt that moves at a constant 2 m/s. (a) What horizontal force must the belt’s motor supply to keep the belt moving at constant speed? (b) At what rate is kinetic energy being delivered to the sand, and (c) at what rate is the motor doing work? Explain any discrepancy.',
        steps: [
          'This is a <b>variable-mass / momentum-flux</b> problem — the kind where <i>F⃗</i> = <i>ma⃗</i> fails and you must use <i>F⃗</i> = d<i>p⃗</i>/d<i>t</i>.',
          '<b>Step 1 — Set up the horizontal momentum.</b> Each second 3 kg of sand lands (d<i>m</i>/d<i>t</i> = 3 kg/s). The instant it lands it has zero horizontal velocity; the belt must accelerate it up to <i>u</i> = 2 m/s. The horizontal momentum gained per second is:<br><i>F</i> = d<i>p</i>/d<i>t</i> = <i>u</i> d<i>m</i>/d<i>t</i> = 2 × 3 = 6 N<br>(The belt moves at constant speed, so there’s no <i>m</i> d<i>v</i>/d<i>t</i> term — all the force goes into accelerating new sand.)',
          '<b>(a) Answer:</b> The motor must supply 6 N.',
          '<b>Step 2 — Rate of KE gain by the sand.</b> The sand ends up moving at 2 m/s, so KE delivered per second:<br>d<i>KE</i>/d<i>t</i> = ½ (d<i>m</i>/d<i>t</i>) <i>u</i><sup>2</sup> = ½(3)(2)<sup>2</sup> = 6 W',
          '<b>(b) Answer:</b> Sand gains kinetic energy at 6 W.',
          '<b>Step 3 — Rate of work by the motor.</b> The motor’s force 6 N acts on a belt surface moving at 2 m/s:<br><i>P</i><sub>motor</sub> = <i>F u</i> = 6 × 2 = 12 W',
        ],
        ans: '<b>(c) Answer & explanation:</b> The motor does 12 W of work, but the sand gains only 6 W of kinetic energy. The missing 6 W is dissipated as <b>heat by friction</b> during the brief slipping while each sand grain is dragged up to belt speed. This factor-of-two split (exactly half the work lost to friction) is the signature result of this problem class and a favorite Advanced “gotcha.”',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A force of 20 N acts on a body of mass 4 kg initially at rest for 3 s. Find the impulse delivered and the final velocity of the body.',
            a: '<i>J</i> = 60 N · s; <i>v</i> = 15 m/s',
          },
          {
            q: '[NEET] A 0.05 kg ball strikes a vertical wall horizontally at 10 m/s and rebounds at 8 m/s. What is the magnitude of the change in its momentum?',
            a: '0.9 kg · m/s',
          },
          {
            q: '[JEE Main] A machine gun fires 25 g bullets at a speed of 500 m/s, releasing 4 bullets per second. What average force must the shooter exert to hold the gun steady?',
            a: '50 N',
          },
          {
            q: '[JEE Main] A variable force acts on a 2 kg body initially at rest. The force–time graph is a triangle: it rises linearly from 0 to 12 N over the first 4 s, then falls linearly back to 0 over the next 2 s. Find the speed of the body at <i>t</i> = 6 s.',
            a: '18 m/s (impulse = area of triangle = ½ × 6 × 12 = 36 N · s; <i>v</i> = 36/2)',
          },
          {
            q: '[JEE Advanced] A trolley of mass <i>M</i> = 8 kg moves frictionlessly at 3 m/s. Rain falls vertically and water collects in the open trolley at a steady 0.5 kg/s. Assuming the rain has no horizontal velocity, find the speed of the trolley after 4 s of collecting water.',
            a: '2.4 m/s (horizontal momentum conserved: <i>Mv</i><sub>0</sub> = (<i>M</i> + <i>m</i>)<i>v</i>, with <i>m</i> = 0.5 × 4 = 2 kg)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A passenger standing in a bus falls forward when the bus suddenly stops. The best explanation is:',
        opts: [
          {
            label: 'A forward force acts on the passenger due to braking.',
            nudge: '(a) is the classic trap: there is no forward force; the lurch is the absence of a stopping force on the upper body, not the presence of a forward one.',
          },
          { label: 'The lower body stops with the bus while the upper body tends to continue moving forward due to inertia.', nudge: null },
          {
            label: 'The friction between feet and floor pushes the passenger forward.',
            nudge: '(c) is backward — friction at the feet actually decelerates the lower body, it doesn’t push the person forward.',
          },
          { label: 'The passenger’s weight increases momentarily.', nudge: '(d) confuses inertia with weight; weight is unrelated here.' },
        ],
        correct: 1,
        solution: 'When the bus decelerates, the feet (gripped to the floor by friction) stop with it, but the upper body, obeying inertia of motion, keeps moving forward — so the body pitches forward.',
      },
      {
        t: 'mcq',
        q: 'Two forces produce the same impulse on a body. Force A is large and acts for a short time; Force B is small and acts for a long time. Which quantity is necessarily the same for both?',
        opts: [
          {
            label: 'The acceleration produced',
            nudge: '(a) is wrong because a large force gives large acceleration; the accelerations differ even when impulse matches.',
          },
          {
            label: 'The distance moved by the body while the force acts',
            nudge: '(b) is a strong distractor — the long, gentle push B lasts longer and the body covers more ground during it; equal impulse fixes Δ<i>p</i>, not the distance.',
          },
          { label: 'The change in momentum', nudge: null },
          { label: 'The maximum force', nudge: '(d) the peak forces are clearly different (one is “large,” one is “small”).' },
        ],
        correct: 2,
        solution: 'Impulse equals change in momentum by definition, so equal impulses mean equal Δ<i>p</i> regardless of how the force is spread over time.',
      },
      {
        t: 'mcq',
        q: 'A shell at rest explodes into two fragments of masses in the ratio 1 : 3. The ratio of the magnitudes of their velocities (lighter : heavier) is:',
        opts: [
          {
            label: '1 : 3',
            nudge: '(a) picks the mass ratio directly — the most common error, forgetting momentum (not velocity) is what’s equal.',
          },
          { label: '3 : 1', nudge: null },
          {
            label: '1 : 9',
            nudge: '(c) and (d) come from squaring the ratio, as if conserving kinetic energy — but KE is created in an explosion, not conserved.',
          },
          {
            label: '9 : 1',
            nudge: '(c) and (d) come from squaring the ratio, as if conserving kinetic energy — but KE is created in an explosion, not conserved.',
          },
        ],
        correct: 1,
        solution: 'Initial momentum is zero, so the fragments carry equal and opposite momenta: <i>m</i><sub>1</sub><i>v</i><sub>1</sub> = <i>m</i><sub>2</sub><i>v</i><sub>2</sub>. With <i>m</i><sub>1</sub> : <i>m</i><sub>2</sub> = 1 : 3, we get <i>v</i><sub>1</sub> : <i>v</i><sub>2</sub> = <i>m</i><sub>2</sub> : <i>m</i><sub>1</sub> = 3 : 1. The lighter fragment flies off faster.',
      },
      {
        t: 'mcq',
        q: 'A ball of mass <i>m</i> hits a wall normally with speed <i>v</i> and rebounds with the same speed <i>v</i>. The magnitude of impulse on the ball is:',
        opts: [
          {
            label: 'zero',
            nudge: '(a) is the trap for students who reason “same speed in and out, so no change” — forgetting velocity is a vector and the direction flipped.',
          },
          { label: '<i>mv</i>', nudge: '(b) forgets the reversal and computes only <i>mv</i>.' },
          { label: '2<i>mv</i>', nudge: null },
          { label: '½<i>mv</i>', nudge: '(d) has no physical basis; it’s a pure distractor.' },
        ],
        correct: 2,
        solution: 'Taking the rebound direction as positive, the velocity changes from −<i>v</i> to +<i>v</i>, a change of 2<i>v</i>. So |<i>J</i>| = |<i>mv</i> − <i>m</i>(−<i>v</i>)| = 2<i>mv</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting that momentum and impulse are vectors.</b> The single biggest source of lost marks. When a ball reverses direction, its speed may be unchanged but its velocity changes sign — so Δ<i>p</i> can be as large as 2<i>mv</i>, not zero. Always fix a positive direction before substituting numbers.',
          '<b>Believing action–reaction forces cancel.</b> They are equal and opposite, yes — but they act on two different bodies, so they never cancel on a single body. The forces on the bat and on the ball are a Third-Law pair; neither one is “cancelled.”',
          '<b>Using <i>F⃗</i> = <i>ma⃗</i> when mass changes.</b> Rockets, falling chains, sand-on-belts, leaking trolleys — the moment mass is variable, retreat to <i>F⃗</i> = d<i>p⃗</i>/d<i>t</i>. Plugging into <i>ma⃗</i> here is a guaranteed wrong answer.',
          '<b>Confusing inertia with weight.</b> Inertia depends only on mass and is the same on the Moon as on Earth; weight is the gravitational force and changes with <i>g</i>. A heavy crate is hard to push in space too — that’s inertia, not weight.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the units sanity check.</b> Impulse and momentum share the dimensional formula [M L T<sup>−1</sup>], so N · s and kg · m/s are the same unit. If you ever derive an “impulse” that comes out in joules or newtons, you’ve made an algebra error — stop and recheck before committing the answer. This 5-second check catches more mistakes than any other in this chapter.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Momentum', note: '<i>p⃗</i> = <i>mv⃗</i>; kg · m/s; [M L T<sup>−1</sup>]' },
          { f: 'Force', note: '<i>F⃗</i> = d<i>p⃗</i>/d<i>t</i> = <i>ma⃗</i>; N; [M L T<sup>−2</sup>]' },
          { f: 'Impulse', note: '<i>J⃗</i> = <i>F⃗</i>Δ<i>t</i> = ∫ <i>F⃗</i> d<i>t</i>; N · s; [M L T<sup>−1</sup>]' },
          {
            f: '<b>First Law</b> defines inertia & force; <b>Second Law</b> quantifies force as rate of change of momentum; <b>Third Law</b> makes forces come in equal-and-opposite pairs on different bodies.',
            note: '',
          },
          {
            f: '<b>Impulse = change in momentum = area under the F–t graph.</b> Use it whenever a force is large, brief, or unknown.',
            note: '',
          },
          { f: '<b>Conservation of momentum</b> applies whenever net external force is zero (recoils, explosions, collisions).', note: '' },
          { f: 'Impulse and momentum have <b>identical units</b>', note: 'your built-in error detector.' },
        ],
        aids: [
          '“Inertia In, Force Changes, Pairs Push back” — for the three laws in order.',
          'And for impulse: “Big force, short time, same total kick.”',
        ],
      },
    ],
  },
  // ───────────────────────── Topic 02 · pp. 205–213 ─────────────────────────
  {
    n: '02',
    title: 'Momentum Conservation',
    kalam: 'In every case, you push something one way and the system pushes you the other way so the total momentum is unchanged.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is one of the most heavily examined ideas in all of physics. JEE Main asks 1–2 questions almost every year, usually through collisions or recoil. NEET leans conceptual — “is momentum conserved here?” and coefficient-of-restitution numericals. JEE Advanced builds it into multi-body, 2D, and variable-mass problems. CBSE Board exams typically carry a 2–3 mark recoil or perfectly-inelastic-collision numerical.',
      },
      {
        t: 'p',
        html: 'You’ve seen this on every Diwali. A rocket sits still on the ground, then a jet of hot gas blasts downward and the rocket streaks up. Nobody is pushing the rocket from above. So where does its upward motion come from?<br><br>Here’s the secret: the total “amount of motion” of the rocket-plus-gas was zero before lighting, and it stays zero after — but it gets redistributed. The gas rushes down carrying a big chunk of downward momentum, so the rocket must carry an equal chunk of upward momentum to keep the books balanced. The grand total never changes. This is the <b>principle of conservation of linear momentum</b>, and it is arguably the single most powerful problem-solving tool you will meet in mechanics.<br><br>We already saw why it’s true in the last subtopic: when no net external force acts on a system, the total momentum stays constant, because internal forces always come in equal-and-opposite Third-Law pairs that cancel. Here we focus on using it.<br><br>The everyday version: stand on a skateboard (or a wheely office chair) and throw a heavy bag forward — you roll backward. Step off a small wooden boat onto a jetty and the boat scoots away behind you. Fire a rifle and it kicks into your shoulder. In every case, you push something one way and the system pushes you the other way so the total momentum is unchanged.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture momentum as money in a sealed room with no doors (an isolated system). People inside can hand cash to each other all day — that’s the internal forces — but not a single rupee can enter or leave. So the total cash in the room is fixed, even though individual wallets fatten and thin. The “no doors” condition is the crucial one: it’s the requirement that <b>no net external force acts</b>.',
      },
      {
        t: 'p',
        html: 'This single idea cracks open three big families of problems:<br>• <b>Recoil and explosions</b> — one body becomes two (or more) that fly apart.<br>• <b>Collisions</b> — two bodies meet, interact briefly, and separate (or stick together).<br>• <b>Variable-mass systems</b> — rockets, falling chains, raindrops growing as they fall.<br><br>A vital companion idea is <b>elastic versus inelastic</b>. Momentum is conserved in every collision (as long as external forces are negligible during the brief impact). <b>Kinetic energy</b> is a different matter — it is conserved only in a perfectly elastic collision (think two carrom coins, or near-ideal billiard balls). In a real-world crunch — two cars crumpling, a ball of clay hitting a wall — some kinetic energy converts to heat, sound, and deformation. The collision is <b>inelastic</b>, and if the bodies stick together it’s <b>perfectly inelastic</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• Conservation of momentum needs <b>zero net external force</b> on the system. During a quick collision or explosion the internal impulsive forces are enormous compared to gravity or friction, so we treat the system as effectively isolated for that instant — but over longer times, external forces (gravity, friction) do change momentum.<br>• It applies <b>component-wise</b>: if the net external force is zero only along one axis, momentum is conserved along that axis alone. A projectile-explosion conserves horizontal momentum even while gravity changes the vertical.<br>• Choosing the <b>system</b> correctly is everything. Pick the system so the troublesome forces become internal.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Conservation of Linear Momentum',
        main: '(when <i>F⃗</i><sub>ext</sub> = 0):<br>∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub><i>u⃗</i><sub><i>i</i></sub> = ∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub><i>v⃗</i><sub><i>i</i></sub>',
        legend: ['<i>u⃗</i><sub><i>i</i></sub> = velocities before the interaction', '<i>v⃗</i><sub><i>i</i></sub> = velocities after the interaction'],
        note: 'SI unit of momentum: kg · m · s<sup>−1</sup> — Dimensional formula: [M<sup>1</sup> L<sup>1</sup> T<sup>−1</sup>]',
      },
      {
        t: 'formula',
        kicker: 'Recoil / Explosion (two bodies, system initially at rest)',
        main: '<i>m</i><sub>1</sub><i>v⃗</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v⃗</i><sub>2</sub> = 0 ⇒ <i>v⃗</i><sub>2</sub> = −(<i>m</i><sub>1</sub>/<i>m</i><sub>2</sub>)<i>v⃗</i><sub>1</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Perfectly Inelastic Collision (bodies stick together)',
        main: '<i>v</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: '1D Elastic Collision — final velocities',
        main: '<i>v</i><sub>1</sub> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>u</i><sub>1</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) + 2<i>m</i><sub>2</sub><i>u</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br><i>v</i><sub>2</sub> = (<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)<i>u</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) + 2<i>m</i><sub>1</sub><i>u</i><sub>1</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Coefficient of Restitution',
        main: '<i>e</i> = (velocity of separation)/(velocity of approach) = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)',
        legend: [],
        note: 'Dimensionless: [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]. Perfectly elastic ⇒ <i>e</i> = 1; perfectly inelastic ⇒ <i>e</i> = 0.',
      },
      {
        t: 'formula',
        kicker: 'Velocity of the Centre of Mass',
        main: '<i>v⃗</i><sub>cm</sub> = (∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub><i>v⃗</i><sub><i>i</i></sub>)/(∑<sub><i>i</i></sub> <i>m</i><sub><i>i</i></sub>)',
        legend: [],
        note: '(constant if <i>F⃗</i><sub>ext</sub> = 0)',
      },
      {
        t: 'formula',
        kicker: 'Thrust on a Variable-Mass Body (e.g., a rocket)',
        main: '<i>F⃗</i><sub>thrust</sub> = <i>v⃗</i><sub>rel</sub> d<i>m</i>/d<i>t</i>',
        legend: [
          '<i>v⃗</i><sub>rel</sub> = the velocity of ejected mass relative to the body',
          'd<i>m</i>/d<i>t</i> = rate of change of the body’s mass (negative — the body loses mass)',
        ],
        note: 'd<i>m</i>/d<i>t</i> < 0 (the body loses mass).',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Final velocities in a one-dimensional elastic collision.</b><br>Setup: Two bodies of masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> move along a line with initial velocities <i>u</i><sub>1</sub>, <i>u</i><sub>2</sub>. After a head-on elastic collision their velocities are <i>v</i><sub>1</sub>, <i>v</i><sub>2</sub>. Two things are conserved: momentum (always) and kinetic energy (because it’s elastic).<br><br><b>Momentum:</b><br><i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub> = <i>m</i><sub>1</sub><i>v</i><sub>1</sub> + <i>m</i><sub>2</sub><i>v</i><sub>2</sub><br>Rearrange to group each mass:<br><i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>) ...(i)<br><b>Kinetic energy:</b><br>½<i>m</i><sub>1</sub><i>u</i><sub>1</sub><sup>2</sup> + ½<i>m</i><sub>2</sub><i>u</i><sub>2</sub><sup>2</sup> = ½<i>m</i><sub>1</sub><i>v</i><sub>1</sub><sup>2</sup> + ½<i>m</i><sub>2</sub><i>v</i><sub>2</sub><sup>2</sup><br>Cancel the ½ and group:<br><i>m</i><sub>1</sub>(<i>u</i><sub>1</sub><sup>2</sup> − <i>v</i><sub>1</sub><sup>2</sup>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub><sup>2</sup> − <i>u</i><sub>2</sub><sup>2</sup>)<br>Factor each side as a difference of squares:<br><i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>)(<i>u</i><sub>1</sub> + <i>v</i><sub>1</sub>) = <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>)(<i>v</i><sub>2</sub> + <i>u</i><sub>2</sub>) ...(ii)<br><b>The clever step:</b> divide equation (ii) by equation (i). The mass-and-bracket factors <i>m</i><sub>1</sub>(<i>u</i><sub>1</sub> − <i>v</i><sub>1</sub>) and <i>m</i><sub>2</sub>(<i>v</i><sub>2</sub> − <i>u</i><sub>2</sub>) cancel cleanly, leaving:<br><i>u</i><sub>1</sub> + <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> + <i>u</i><sub>2</sub> ⇒ <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub><br>This is a beautiful intermediate result: in an elastic collision, <b>the relative velocity of approach equals the relative velocity of separation</b> (i.e. <i>e</i> = 1). It also tells us why the coefficient of restitution is defined the way it is.',
      },
      {
        t: 'p',
        html: 'Now solve this together with the momentum equation (i). Substituting and simplifying gives the standard pair:<br><i>v</i><sub>1</sub> = (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>u</i><sub>1</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) + 2<i>m</i><sub>2</sub><i>u</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>),<br><i>v</i><sub>2</sub> = 2<i>m</i><sub>1</sub><i>u</i><sub>1</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) + (<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)<i>u</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br>Sanity check — equal masses (<i>m</i><sub>1</sub> = <i>m</i><sub>2</sub>): the (<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>) and (<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>) fractions vanish and <i>v</i><sub>1</sub> = <i>u</i><sub>2</sub>, <i>v</i><sub>2</sub> = <i>u</i><sub>1</sub>. The bodies simply <b>swap velocities</b> — exactly what you see when one carrom coin strikes another head-on.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Thrust on a rocket (variable-mass system).</b><br>Setup: At time <i>t</i> a rocket has mass <i>m</i> and velocity <i>v</i>. In a short time d<i>t</i> it ejects gas of mass |d<i>m</i>| at velocity <i>v</i><sub>rel</sub> relative to the rocket, and the rocket’s speed increases to <i>v</i> + d<i>v</i>.<br><br>Apply Newton’s second law to the whole system (rocket + ejected gas), whose total momentum changes only due to external forces. Conserving momentum of the system in the absence of external force:<br><i>mv</i> = (<i>m</i> + d<i>m</i>)(<i>v</i> + d<i>v</i>) + (−d<i>m</i>)(<i>v</i> − <i>v</i><sub>rel</sub>)<br>Here d<i>m</i> is negative (the rocket loses mass), and the ejected gas (−d<i>m</i>) leaves at velocity (<i>v</i> − <i>v</i><sub>rel</sub>) in the ground frame. Expanding and discarding the second-order term d<i>m</i> d<i>v</i>:<br>0 = <i>m</i> d<i>v</i> + <i>v</i><sub>rel</sub> d<i>m</i><br><i>m</i> d<i>v</i>/d<i>t</i> = −<i>v</i><sub>rel</sub> d<i>m</i>/d<i>t</i><br>The right-hand side is the <b>thrust</b> — the effective forward force the engine provides — and it equals the exhaust speed times the rate at which mass is burnt. Integrating (ignoring gravity) from initial mass <i>m</i><sub>0</sub> to final mass <i>m</i> gives the celebrated rocket equation:<br><i>v</i> − <i>v</i><sub>0</sub> = <i>v</i><sub>rel</sub> ln(<i>m</i><sub>0</sub>/<i>m</i>)<br>Physical reading: a rocket speeds up not by pushing on air, but purely by throwing mass backward — momentum conservation in its rawest form.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A railway wagon of mass 8000 kg moving at 2 m/s on a straight, level track collides with and automatically couples to a stationary wagon of mass 12000 kg. Find their common velocity just after coupling.',
        steps: [
          '<b>Given:</b> <i>m</i><sub>1</sub> = 8000 kg, <i>u</i><sub>1</sub> = 2 m/s, <i>m</i><sub>2</sub> = 12000 kg, <i>u</i><sub>2</sub> = 0.',
          'Coupling means the wagons move together — a <b>perfectly inelastic</b> collision. The track is level and the impact is brief, so external horizontal forces are negligible and momentum is conserved.',
          '<b>Apply conservation of momentum:</b><br><i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub> = (<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<i>v</i><br>8000(2) + 12000(0) = (20000)<i>v</i><br>16000 = 20000<i>v</i> ⇒ <i>v</i> = 0.8 m/s',
          '<b>Note:</b> check whether KE is conserved — initial KE = ½(8000)(2)<sup>2</sup> = 16000 J; final = ½(20000)(0.8)<sup>2</sup> = 6400 J. Exactly 60% of the kinetic energy (9600 J of 16000 J) was lost to the coupling — proof that this collision is inelastic.',
        ],
        ans: 'The coupled wagons move off together at 0.8 m/s in the original direction.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A carrom striker of mass 15 g moving at 4 m/s strikes an identical stationary coin head-on. Assuming a perfectly elastic collision, what are the velocities of the striker and the coin immediately afterward?',
        steps: [
          '<b>The trap:</b> students start plugging into the full elastic-collision formulas, burning a minute on algebra under exam pressure.',
          '<b>The shortcut:</b> the masses are <b>equal</b> and the collision is <b>elastic and head-on</b> — so the two bodies simply exchange velocities. The striker takes on the coin’s velocity (zero) and the coin takes on the striker’s (4 m/s).',
          '<b>Speed tip:</b> memorize the three elastic special cases as instant answers — (1) <b>equal masses:</b> swap velocities; (2) <b>heavy hits light at rest:</b> heavy continues almost unchanged, light shoots off at ≈ 2<i>u</i>; (3) <b>light hits heavy at rest:</b> light bounces back at nearly <i>u</i>, heavy barely moves. Any option claiming the striker keeps moving forward here is wrong on sight.',
        ],
        ans: 'Striker stops (0 m/s); coin moves off at 4 m/s.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A bullet of mass 10 g travelling at 200 m/s embeds itself into a wooden block of mass 1.99 kg resting on a frictionless horizontal surface. The block is attached to a spring of force constant 800 N/m. Find the maximum compression of the spring.',
        steps: [
          'This links <b>momentum conservation</b> (collision) with <b>energy conservation</b> (spring) — and the order matters.',
          '<b>Step 1 — The collision (use momentum, not energy).</b> The bullet embeds, so it’s perfectly inelastic. Just after impact, bullet + block move together at <i>v</i>:<br><i>m</i><sub><i>b</i></sub><i>u</i> = (<i>m</i><sub><i>b</i></sub> + <i>M</i>)<i>v</i><br>0.01 × 200 = (0.01 + 1.99)<i>v</i> = 2.00<i>v</i><br><i>v</i> = 2/2.00 = 1 m/s',
          '<b>Step 2 — The spring (now use energy).</b> After the collision, the combined mass compresses the spring. Surface is frictionless, so all the kinetic energy converts to spring potential energy at maximum compression <i>x</i>:<br>½(<i>m</i><sub><i>b</i></sub> + <i>M</i>)<i>v</i><sup>2</sup> = ½<i>kx</i><sup>2</sup><br>½(2.00)(1)<sup>2</sup> = ½(800)<i>x</i><sup>2</sup><br>1 = 400<i>x</i><sup>2</sup> ⇒ <i>x</i><sup>2</sup> = 0.0025 ⇒ <i>x</i> = 0.05 m',
          '<b>Critical insight:</b> you <b>cannot</b> apply energy conservation through the collision — the embedding loses kinetic energy to heat. Momentum carries you through the impact; energy carries you through the spring. Mixing them up is the classic way this problem is failed.',
        ],
        ans: 'Maximum compression = 0.05 m = 5 cm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A shell of mass 3 kg moving horizontally at 10 m/s suddenly explodes into two fragments. Immediately after the explosion, a fragment of mass 1 kg is observed moving vertically upward at 20 m/s. Find the velocity (magnitude and direction) of the other fragment of mass 2 kg immediately after the explosion. Neglect gravity during the explosion.',
        steps: [
          'An explosion is internal, so <b>momentum is conserved separately along each axis</b>. Set up axes: <i>x</i> horizontal (original direction), <i>y</i> vertical (up).',
          '<b>Step 1 — Initial momentum of the shell.</b><br><i>p</i><sub><i>x</i></sub> = 3 × 10 = 30 kg · m/s, <i>p</i><sub><i>y</i></sub> = 0',
          '<b>Step 2 — Fragment 1 (1 kg, straight up at 20 m/s).</b><br><i>p</i><sub>1<i>x</i></sub> = 0, <i>p</i><sub>1<i>y</i></sub> = 1 × 20 = 20 kg · m/s',
          '<b>Step 3 — Conserve each component for fragment 2 (2 kg).</b><br>Horizontal:<br>30 = 0 + 2<i>v</i><sub>2<i>x</i></sub> ⇒ <i>v</i><sub>2<i>x</i></sub> = 15 m/s<br>Vertical:<br>0 = 20 + 2<i>v</i><sub>2<i>y</i></sub> ⇒ <i>v</i><sub>2<i>y</i></sub> = −10 m/s (i.e. downward)',
          '<b>Step 4 — Combine.</b><br>|<i>v⃗</i><sub>2</sub>| = √(15<sup>2</sup> + 10<sup>2</sup>) = √(225 + 100) = √325 = 5√13 ≈ 18.0 m/s<br><i>θ</i> = tan<sup>−1</sup>(10/15) = tan<sup>−1</sup>(0.667) ≈ 33.7° below the horizontal',
          '<b>Insight:</b> the centre of mass keeps moving exactly as the un-exploded shell would have — horizontally at 10 m/s, then on a normal projectile path under gravity. The explosion rearranges the pieces but cannot shift the centre of mass’s motion, because the blast forces are internal.',
        ],
        ans: 'The 2 kg fragment moves at about 18.0 m/s, directed 33.7° below the horizontal (forward and downward).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A boy of mass 60 kg standing on a stationary boat of mass 140 kg jumps horizontally off the boat with a speed of 2 m/s relative to the ground. Find the recoil speed of the boat. (Neglect water resistance.)',
            a: '0.86 m/s (opposite to the boy’s jump); from 60 × 2 = 140 × <i>v</i>',
          },
          {
            q: '[NEET] A body of mass <i>m</i> moving at 6 m/s collides head-on and elastically with an identical stationary body. State the velocities of both bodies after the collision.',
            a: 'First body stops; second moves at 6 m/s (equal-mass elastic swap)',
          },
          {
            q: '[JEE Main] A 5 g bullet moving at 400 m/s passes straight through a 0.995 kg block resting on a frictionless surface, emerging at 100 m/s. Find the speed acquired by the block.',
            a: '1.51 m/s; from 0.005 × 400 = 0.005 × 100 + 0.995<i>v</i>',
          },
          {
            q: '[JEE Main] A 2 kg body moving at 3 m/s collides head-on with a 3 kg body moving at 2 m/s in the opposite direction. If they stick together, find their common velocity after the collision.',
            a: '0 m/s — they come to rest; momenta +6 and −6 cancel',
          },
          {
            q: '[JEE Advanced] A ball is dropped from a height of 10 m onto a hard floor with which it has a coefficient of restitution <i>e</i> = 0.8. Find the maximum height reached after the <b>second</b> bounce.',
            a: '<i>h</i><sub>2</sub> = <i>e</i><sup>4</sup><i>h</i> = (0.8)<sup>4</sup>(10) = 4.096 m ≈ 4.1 m',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'An astronaut floating at rest in deep space (far from any gravity) wants to move toward her spacecraft. With nothing to push against, her best option is to:',
        opts: [
          { label: 'Swing her arms and legs vigorously like swimming.', nudge: '(a) swimming needs a medium to push on; empty space offers none.' },
          { label: 'Throw a heavy tool in the direction away from the spacecraft.', nudge: null },
          {
            label: 'Blow air from her mouth toward the spacecraft.',
            nudge: '(c) blowing air toward the craft pushes her away from it — wrong direction (and feeble).',
          },
          {
            label: 'Wait, since motion is impossible without an external force.',
            nudge: '(d) the trap of over-applying “no external force = no motion.” External force is needed to change the system’s momentum, not to rearrange it internally.',
          },
        ],
        correct: 1,
        solution: 'With no external force, her total momentum is fixed at zero. Throwing a tool away from the craft gives the tool momentum in that direction, so she recoils toward the craft, total momentum still summing to zero.',
      },
      {
        t: 'mcq',
        q: 'Which statement about a perfectly inelastic collision between two bodies (no external forces) is correct?',
        opts: [
          { label: 'Both momentum and kinetic energy are conserved.', nudge: '(a) describes a perfectly elastic collision, not an inelastic one.' },
          { label: 'Momentum is conserved but kinetic energy is not.', nudge: null },
          {
            label: 'Kinetic energy is conserved but momentum is not.',
            nudge: '(c) reverses the truth — momentum conservation is the robust one here.',
          },
          { label: 'Neither is conserved.', nudge: '(d) wrong because momentum conservation holds regardless of collision type.' },
        ],
        correct: 1,
        solution: 'Momentum is conserved in every collision with no external force. In a perfectly inelastic collision the bodies stick together and some kinetic energy is lost to heat and deformation, so KE is not conserved.',
      },
      {
        t: 'mcq',
        q: 'A ball dropped from height <i>h</i> rebounds from the floor to a height of <i>h</i>/4. The coefficient of restitution between the ball and the floor is:',
        opts: [
          {
            label: '0.25',
            nudge: '(a) takes the ratio of heights directly, forgetting that restitution compares speeds, which go as the square root of height — the single most common error here.',
          },
          { label: '0.5', nudge: null },
          { label: '0.75', nudge: '(c) and (d) are unmotivated distractors.' },
          { label: '0.125', nudge: '(c) and (d) are unmotivated distractors.' },
        ],
        correct: 1,
        solution: 'Speed before impact ∝ √<i>h</i> and speed after ∝ √(<i>h</i>/4), so<br><i>e</i> = <i>v</i><sub>after</sub>/<i>v</i><sub>before</sub> = √(<i>h</i>/4)/√<i>h</i> = √(1/4) = 0.5',
      },
      {
        t: 'mcq',
        q: 'A bomb initially at rest explodes into three fragments. Which of the following must be true immediately after the explosion?',
        opts: [
          {
            label: 'The three fragments fly off along the same straight line.',
            nudge: '(a) is false — three fragments generally spread out in a plane, not a line (only two fragments are forced collinear).',
          },
          { label: 'The vector sum of the three momenta is zero.', nudge: null },
          {
            label: 'The total kinetic energy of the fragments is zero.',
            nudge: '(c) is false — chemical energy is converted into kinetic energy; the fragments definitely move.',
          },
          {
            label: 'The heaviest fragment is at rest.',
            nudge: '(d) has no basis; mass distribution doesn’t force any fragment to be stationary.',
          },
        ],
        correct: 1,
        solution: 'The bomb started at rest, so total initial momentum is zero. The explosion’s forces are internal, so total momentum stays zero — the three momentum vectors must add (as vectors) to zero, meaning they lie in a single plane and balance.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Applying kinetic-energy conservation to an inelastic collision.</b> Momentum is conserved in every collision (absent external forces); kinetic energy is conserved only when the collision is perfectly elastic. When a bullet embeds, cars crumple, or clay sticks, KE is lost — use momentum for the impact, never energy.',
          '<b>Forgetting momentum is a vector.</b> In head-on problems with bodies moving in opposite directions, you must assign opposite signs. In 2D (explosions, oblique collisions), conserve the <i>x</i> and <i>y</i> components separately. Treating speeds as if they simply add is a guaranteed wrong answer.',
          '<b>Conserving momentum when external forces are not negligible.</b> Momentum is conserved only when the net external force on your chosen system is zero. During a brief collision, gravity and friction are swamped by the impulsive internal forces — fine. But over a falling-and-bouncing sequence, gravity changes momentum between bounces. Apply conservation only across the instant of impact.',
          '<b>Misusing the coefficient of restitution.</b> <i>e</i> compares speeds of separation and approach, not heights and not energies. For a bounce off the floor, <i>e</i> = √(<i>h</i><sub>rebound</sub>/<i>h</i><sub>drop</sub>) — note the square root.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the centre-of-mass sanity check.</b> Since internal forces can’t move the centre of mass, <i>v⃗</i><sub>cm</sub> is identical before and after any collision or explosion. After solving, compute <i>v⃗</i><sub>cm</sub> both ways — if they don’t match, you’ve made a sign or arithmetic error. This catches mistakes faster than re-doing the whole problem.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'General (no ext. force)',
            note: '∑ <i>m</i><sub><i>i</i></sub><i>u⃗</i><sub><i>i</i></sub> = ∑ <i>m</i><sub><i>i</i></sub><i>v⃗</i><sub><i>i</i></sub>',
          },
          { f: 'Recoil / explosion from rest', note: '<i>m</i><sub>1</sub><i>v⃗</i><sub>1</sub> = −<i>m</i><sub>2</sub><i>v⃗</i><sub>2</sub>' },
          {
            f: 'Perfectly inelastic',
            note: '<i>v</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
          },
          {
            f: 'Coefficient of restitution',
            note: '<i>e</i> = (<i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>)/(<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>) (0 ≤ <i>e</i> ≤ 1)',
          },
          { f: 'Rocket thrust', note: '<i>F</i> = <i>v</i><sub>rel</sub> |d<i>m</i>/d<i>t</i>|' },
          { f: '<b>Momentum is conserved in every collision</b> with no external force; <b>KE only in elastic</b> ones.', note: '' },
          { f: '<b>Conserve components separately</b> in 2D', note: 'momentum is a vector.' },
          { f: '<b>Equal-mass elastic head-on = swap velocities</b> (instant answer).', note: '' },
          {
            f: '<i>e</i> = 1 elastic, <i>e</i> = 0 perfectly inelastic; for a floor bounce <i>e</i> = √(<i>h</i><sub>up</sub>/<i>h</i><sub>down</sub>).',
            note: '',
          },
          { f: 'The <b>centre of mass keeps moving unchanged</b> through any internal interaction', note: 'use it as your error check.' },
        ],
        aids: [
          '“Momentum Many, Energy Elastic” — momentum survives many (all) collisions; energy survives only elastic ones.',
          'For restitution: “separate over approach.”',
        ],
      },
    ],
  },
  // ───────────────────────── Topic 03 · pp. 214–224 ─────────────────────────
  {
    n: '03',
    title: 'Concurrent Forces and Equilibrium',
    kalam: 'Most of these everyday situations involve concurrent forces — forces whose lines of action all pass through a single common point.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favorite. JEE Main reliably asks 1–2 questions on string-tension equilibrium, blocks on inclines, or Lami’s theorem. NEET leans on quick resolution and “which string breaks first” reasoning. JEE Advanced builds it into non-inertial-frame (pseudo-force) problems and multi-body equilibrium. CBSE Board exams frequently set a 2–3 mark numerical on a hanging mass supported by two strings.',
      },
      {
        t: 'p',
        html: 'Walk through any Indian market and look up: a heavy signboard hangs from two chains bolted into the wall, a row of decorative bulbs sags between two poles, a fruit-seller’s weighing pan dangles from three cords meeting at a hook. None of these are moving. Yet each is being pulled in several directions at once — by gravity, by tension in every chain, by the wall. The fact that they hang there, perfectly still, is telling us something deep: <b>all those pulls are cancelling out.</b><br><br>That is the entire idea of <b>equilibrium</b>. A body is in (translational) equilibrium when the <b>net force on it is zero</b>, so it has no acceleration — it either stays at rest or keeps moving at constant velocity. The forces don’t have to be small or few; they just have to balance.<br><br>Most of these everyday situations involve <b>concurrent forces</b> — forces whose lines of action all pass through a single common point. The hook holding the weighing pan feels three cords pulling on it, and all three pulls act at the hook. Because they share a point, we can treat that point as a single particle and ask one clean question: do the force vectors add up to zero?',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine three friends playing tug-of-war on a ring, each pulling a rope tied to the same ring, in three different directions. If the ring doesn’t move, their three pulls must perfectly cancel. Now here’s the elegant part: if you drew their three force arrows head to tail, the arrows would close up into a triangle with no gap. A closed triangle means “you ended up exactly where you started” — i.e. zero net displacement in force-space, i.e. zero resultant. This is the <b>triangle law of forces</b>, and it’s the geometric soul of equilibrium.',
      },
      {
        t: 'p',
        html: 'To actually solve such problems, we use one powerful trick: <b>resolution</b>. Any force pointing at an awkward angle can be split into two perpendicular pieces — typically horizontal (<i>x</i>) and vertical (<i>y</i>), though on a slope we cleverly choose axes along and perpendicular to the slope. Once split, equilibrium becomes two simple scalar statements:<br>∑ <i>F</i><sub><i>x</i></sub> = 0 and ∑ <i>F</i><sub><i>y</i></sub> = 0<br>Balance the rightward pulls against the leftward ones, and the upward pulls against the downward ones. That’s it.<br><br>For the special and very common case of <b>exactly three</b> concurrent forces, there’s an even faster tool — <b>Lami’s theorem</b> — which we’ll meet shortly.<br><br>One subtlety that trips up students: equilibrium is <b>frame-dependent in appearance</b>. A pendulum bob hanging tilted inside an accelerating bus looks “in equilibrium” to a passenger but is clearly accelerating to someone on the road. To make the passenger’s intuitive “it’s balanced” picture mathematically correct, we add a <b>pseudo-force</b> — a bookkeeping force that accounts for the frame’s acceleration. More on this in the examples.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• The equilibrium condition ∑ <i>F⃗</i> = 0 guarantees only <b>translational</b> equilibrium. A body can have zero net force yet still rotate (a couple). Full rigid-body equilibrium also needs zero net torque — but for a <b>particle</b> or a <b>point of concurrency</b>, force balance alone is enough.<br>• Resolution and Lami’s theorem assume the forces are <b>concurrent and coplanar</b>.<br>• Strings and cords can only <b>pull</b> (tension), never push. If your maths gives a negative tension, the string would have gone slack — the configuration is physically impossible.<br>• In <b>non-inertial frames</b>, ∑ <i>F⃗</i> = 0 holds only after adding the pseudo-force.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Condition for equilibrium of a particle',
        main: '∑ <i>F⃗</i> = 0 ⟺ ∑ <i>F</i><sub><i>x</i></sub> = 0, ∑ <i>F</i><sub><i>y</i></sub> = 0',
        legend: [],
        note: 'Force SI unit: newton, N — Dimensional formula: [M<sup>1</sup> L<sup>1</sup> T<sup>−2</sup>]',
      },
      {
        t: 'formula',
        kicker: 'Resolution of a force',
        main: '<i>F⃗</i> at angle <i>θ</i> to the <i>x</i>-axis:<br><i>F</i><sub><i>x</i></sub> = <i>F</i> cos <i>θ</i>, <i>F</i><sub><i>y</i></sub> = <i>F</i> sin <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Equilibrant',
        html: 'the single force that balances all others; equal in magnitude and opposite in direction to the resultant <i>R⃗</i>:<br><i>F⃗</i><sub>equilibrant</sub> = −<i>R⃗</i>',
      },
      {
        t: 'def',
        term: 'Triangle Law of Forces',
        html: 'if three forces acting at a point are in equilibrium, they can be represented in magnitude and direction by the three sides of a triangle taken in order.',
      },
      {
        t: 'formula',
        kicker: 'Lami’s Theorem',
        main: '(for three concurrent coplanar forces <i>P</i>, <i>Q</i>, <i>R</i> in equilibrium):<br><i>P</i>/sin <i>α</i> = <i>Q</i>/sin <i>β</i> = <i>R</i>/sin <i>γ</i>',
        legend: ['<i>α</i> = the angle between the other two forces <i>Q</i> and <i>R</i> (i.e. the angle opposite <i>P</i>), and similarly for <i>β</i>, <i>γ</i>'],
        note: 'Note <i>α</i> + <i>β</i> + <i>γ</i> = 360°.',
      },
      {
        t: 'formula',
        kicker: 'Apparent Weight in a lift',
        main: '(reading of a scale, person mass <i>m</i>):<br><i>R</i> = <i>m</i>(<i>g</i> + <i>a</i>) (lift accelerating up)<br><i>R</i> = <i>m</i>(<i>g</i> − <i>a</i>) (accelerating down)',
        legend: [],
        note: '<i>R</i> = <i>mg</i> at constant velocity; <i>R</i> = 0 in free fall (weightlessness).',
      },
      {
        t: 'formula',
        kicker: 'Pseudo-force',
        main: 'in a frame accelerating at <i>a⃗</i><sub>0</sub>:<br><i>F⃗</i><sub>pseudo</sub> = −<i>ma⃗</i><sub>0</sub>',
        legend: [],
        note: '(magnitude <i>ma</i><sub>0</sub>, directed opposite to the frame’s acceleration).',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Lami’s Theorem.</b><br>Setup: Three concurrent, coplanar forces <i>P</i>, <i>Q</i>, <i>R</i> act on a particle in equilibrium. Let <i>α</i> be the angle between <i>Q</i> and <i>R</i>, <i>β</i> between <i>R</i> and <i>P</i>, and <i>γ</i> between <i>P</i> and <i>Q</i>.<br><br>Since the three forces are in equilibrium, by the <b>triangle law</b> they can be drawn head-to-tail to form a closed triangle, whose sides are parallel to and proportional in magnitude to <i>P</i>, <i>Q</i>, and <i>R</i>.<br><br>Now examine the geometry. Consider the side representing <i>P</i>. In the original “star” arrangement, the angle between <i>Q</i> and <i>R</i> is <i>α</i>. When we lay the forces head-to-tail, the interior angle of the triangle opposite the side <i>P</i> turns out to be (180° − <i>α</i>) — because the head-to-tail construction reverses the relative orientation. Likewise the interior angles opposite <i>Q</i> and <i>R</i> are (180° − <i>β</i>) and (180° − <i>γ</i>).<br><br>Apply the <b>sine rule</b> to this triangle (side ÷ sine of opposite angle is constant):<br><i>P</i>/sin(180° − <i>α</i>) = <i>Q</i>/sin(180° − <i>β</i>) = <i>R</i>/sin(180° − <i>γ</i>)<br>Using the identity sin(180° − <i>θ</i>) = sin <i>θ</i>:<br><i>P</i>/sin <i>α</i> = <i>Q</i>/sin <i>β</i> = <i>R</i>/sin <i>γ</i><br>Why it’s useful: it lets you solve a three-force equilibrium in <b>one line</b>, with no axis-choosing or component algebra — provided you correctly pair each force with the angle between the other two.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Tension and Normal Reaction on a smooth incline.</b><br>Setup: A block of mass <i>m</i> rests on a frictionless incline of angle <i>θ</i>, held in place by a light string running parallel to the incline surface. Find the string tension <i>T</i> and the normal reaction <i>N</i>.<br><br>Why choose tilted axes? Two of the three forces (tension along the incline, normal perpendicular to it) already lie along natural directions of the slope. By choosing the <i>x</i>-axis <b>along</b> the incline and the <i>y</i>-axis <b>perpendicular</b> to it, only gravity needs resolving — minimizing algebra. This axis choice is the single most valuable habit in incline problems.<br><br>Resolve gravity <i>mg</i> (which points straight down) into these tilted axes:<br>• Component along the incline (down-slope): <i>mg</i> sin <i>θ</i><br>• Component perpendicular to the incline (into surface): <i>mg</i> cos <i>θ</i><br><br><b>Equilibrium along the incline</b> (string pulls up-slope, gravity component pulls down-slope):<br><i>T</i> = <i>mg</i> sin <i>θ</i><br><b>Equilibrium perpendicular to the incline</b> (normal reaction balances the perpendicular weight component):<br><i>N</i> = <i>mg</i> cos <i>θ</i><br>Sanity checks: at <i>θ</i> = 0 (flat ground), <i>T</i> = 0 and <i>N</i> = <i>mg</i> — nothing pulls the block and the floor carries full weight. At <i>θ</i> = 90° (vertical wall), <i>T</i> = <i>mg</i> and <i>N</i> = 0 — the string carries the entire weight and the wall presses nothing. Both extremes match intuition, confirming the result.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        fig: 'p11-04-fig-4.1',
        q: 'A decorative lamp of weight 100 N is suspended from a horizontal ceiling beam by two ropes, each making an angle of 30° with the beam (the horizontal). Find the tension in each rope.',
        steps: [
          '<b>Given:</b> <i>W</i> = 100 N; each rope at 30° to the horizontal; by symmetry both tensions are equal, call it <i>T</i>.',
          '<b>Step 1 — Free body diagram of the junction point.</b> Three concurrent forces: weight <i>W</i> downward, and two tensions <i>T</i> along the ropes, each 30° above the horizontal.',
          '<b>Step 2 — Horizontal balance.</b> The horizontal components of the two tensions point in opposite directions and cancel automatically by symmetry — confirming the setup is consistent.',
          '<b>Step 3 — Vertical balance.</b> Each rope contributes an upward component <i>T</i> sin 30°:<br>2<i>T</i> sin 30° = <i>W</i><br>2<i>T</i>(0.5) = 100 ⇒ <i>T</i> = 100 N',
          '<b>Teaching point:</b> notice the tension in each rope equals the full weight, not half of it — because each rope is only 30° above the horizontal, only half of each tension (<i>T</i> sin 30°) does the lifting. The flatter the ropes, the larger the tension. This is why a tightly stretched clothesline sags only slightly under a shirt yet pulls hard on its posts.',
        ],
        ans: 'The tension in each rope is 100 N.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two forces, 5 N directed east and 12 N directed north, act on a particle. What single force must be applied to keep the particle in equilibrium?',
        steps: [
          '<b>The trap:</b> students rush to add 5 + 12 = 17 N, or they find the resultant and forget that the balancing force points the other way.',
          '<b>The fast route:</b> the two given forces are perpendicular, so their resultant is found by Pythagoras in one step:<br><i>R</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = √(25 + 144) = √169 = 13 N',
          'The force needed for equilibrium is the <b>equilibrant</b> — equal in magnitude but opposite in direction to this resultant.',
          '<b>Speed tip:</b> memorize the Pythagorean triples — (3, 4, 5), (5, 12, 13), (8, 15, 17). The instant you see “5 N and 12 N perpendicular,” write 13 and move on. And always remember: <b>equilibrant = minus resultant</b> — the single most common slip in NEET equilibrium questions.',
        ],
        ans: 'A force of 13 N directed opposite to the resultant (i.e. into the third quadrant — south-of-west), making the same angle with the axes as the resultant does.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'p11-04-fig-4.2',
        q: 'A block of mass 5 kg rests on a smooth incline of 30°. It is held in equilibrium by a <b>horizontal</b> string attached to a wall. Find the tension in the string and the normal reaction from the incline. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'The string is horizontal — not parallel to the incline — so all three forces point in genuinely different directions. This makes it a true multi-component problem.',
          '<b>Step 1 — Choose axes.</b> Here the horizontal/vertical axes are cleaner, because two of the forces (weight, tension) already lie along them; only the normal reaction needs resolving. Normal <i>N</i> is perpendicular to the incline, so it makes angle <i>θ</i> = 30° with the vertical.',
          '<b>Step 2 — Resolve the normal reaction.</b><br>• Vertical component: <i>N</i> cos <i>θ</i> (upward)<br>• Horizontal component: <i>N</i> sin <i>θ</i> (pointing away from the wall)',
          '<b>Step 3 — Vertical equilibrium</b> (normal’s vertical part supports the weight):<br><i>N</i> cos <i>θ</i> = <i>mg</i><br><i>N</i> = <i>mg</i>/cos 30° = (5 × 10)/(√3/2) = (50 × 2)/√3 = 100/√3 ≈ 57.7 N',
          '<b>Step 4 — Horizontal equilibrium</b> (tension balances the normal’s horizontal part):<br><i>T</i> = <i>N</i> sin <i>θ</i> = (100/√3) × 0.5 = 50/√3 ≈ 28.9 N',
          '<b>Cross-check via the slope-axis method:</b> you can also write <i>T</i> cos <i>θ</i> = <i>mg</i> sin <i>θ</i> (along incline) giving <i>T</i> = <i>mg</i> tan <i>θ</i> = 50 tan 30° ≈ 28.9 N — same answer, fewer steps. The clever takeaway: <b>horizontal string</b> ⇒ <i>T</i> = <i>mg</i> tan <i>θ</i> <b>and</b> <i>N</i> = <i>mg</i>/cos <i>θ</i>, both larger than in the string-parallel case, because the horizontal string fights gravity less efficiently.',
        ],
        ans: '<i>N</i> ≈ 57.7 N and <i>T</i> ≈ 28.9 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p11-04-fig-4.3',
        q: 'A small bob of mass 2 kg hangs from a string fixed to the roof of a truck. When the truck accelerates uniformly along a straight horizontal road, the string settles at a steady angle of 37° from the vertical. Find (a) the acceleration of the truck and (b) the tension in the string. Solve it in <b>both</b> the ground frame and the truck’s frame to show they agree. Take <i>g</i> = 10 m/s<sup>2</sup>, sin 37° = 0.6, cos 37° = 0.8.',
        steps: [
          '<b>Method 1 — Ground frame (inertial).</b> Here the bob is genuinely accelerating horizontally with the truck. Only two real forces act: tension <i>T</i> and weight <i>mg</i>. Their resultant must equal <i>ma⃗</i>, horizontal.',
          'Vertical (no vertical acceleration):<br><i>T</i> cos 37° = <i>mg</i> ⇒ <i>T</i>(0.8) = 2 × 10 = 20<br><i>T</i> = 20/0.8 = 25 N',
          'Horizontal (provides the acceleration):<br><i>T</i> sin 37° = <i>ma</i> ⇒ 25(0.6) = 2<i>a</i> ⇒ 15 = 2<i>a</i> ⇒ <i>a</i> = 7.5 m/s<sup>2</sup>',
          '<b>Method 2 — Truck frame (non-inertial).</b> To the passenger, the bob is in equilibrium — but only after adding a <b>pseudo-force</b> <i>ma</i> pointing backward (opposite the truck’s acceleration). Now the three forces <i>T</i>, <i>mg</i>, and <i>ma</i> balance, and we can use simple equilibrium:',
          'Vertical: <i>T</i> cos 37° = <i>mg</i><br>Horizontal: <i>T</i> sin 37° = <i>ma</i> (tension’s horizontal part balances the pseudo-force)',
          'Dividing the two equations:<br>tan 37° = <i>ma</i>/<i>mg</i> = <i>a</i>/<i>g</i> ⇒ <i>a</i> = <i>g</i> tan 37° = 10 × 0.75 = 7.5 m/s<sup>2</sup><br>and <i>T</i> = <i>mg</i>/cos 37° = 20/0.8 = 25 N.',
          '<b>Deep insight:</b> the elegant result tan <i>θ</i> = <i>a</i>/<i>g</i> means the string aligns with the <b>effective gravity</b> <i>g⃗</i><sub>eff</sub> = <i>g⃗</i> − <i>a⃗</i> felt in the accelerating frame, of magnitude √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>). The tension is then simply <i>T</i> = <i>m g</i><sub>eff</sub> = <i>m</i>√(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>) = 2√(100 + 56.25) = 2(12.5) = 25 N — a third route to the same number, and the one to reach for in any accelerating-frame equilibrium problem.',
        ],
        ans: '<i>a</i> = 7.5 m/s<sup>2</sup> and <i>T</i> = 25 N — identical from both frames, as they must be.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A lantern of weight 30 N hangs from a string. A steady horizontal wind pushes it so the string makes 37° with the vertical. Find the horizontal wind force and the tension in the string. (sin 37° = 0.6, cos 37° = 0.8)',
            a: 'Wind force = 22.5 N; tension = 37.5 N (from <i>T</i> cos 37° = 30)',
          },
          {
            q: '[NEET] Forces of 8 N (east) and 15 N (north) act on a particle. What is the magnitude of the single force that will keep the particle in equilibrium?',
            a: '17 N (the 8–15–17 triple)',
          },
          {
            q: '[JEE Main] A weight <i>W</i> = 40 N hangs from a knot. The knot is also tied to a horizontal string fixed to a wall and to a second string running to the ceiling at 53° above the horizontal. Find the tensions in both strings. (sin 53° = 0.8, cos 53° = 0.6)',
            a: 'Ceiling string = 50 N; horizontal string = 30 N',
          },
          {
            q: '[JEE Main] A 4 kg block rests on a smooth incline of 37°, held by a string running parallel to the incline. Find the tension and the normal reaction. (<i>g</i> = 10 m/s<sup>2</sup>, sin 37° = 0.6, cos 37° = 0.8)',
            a: '<i>T</i> = 24 N; <i>N</i> = 32 N',
          },
          {
            q: '[JEE Advanced] A pendulum bob of mass 1 kg hangs from the roof of a car moving along a horizontal road with acceleration 5 m/s<sup>2</sup>. Find the angle the string makes with the vertical and the tension in the string. (<i>g</i> = 10 m/s<sup>2</sup>)',
            a: '<i>θ</i> = tan<sup>−1</sup>(0.5) ≈ 26.6°; <i>T</i> = √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>)(1) = √125 ≈ 11.2 N',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Three coplanar forces acting at a point hold it in equilibrium. Which statement must be true?',
        opts: [
          {
            label: 'The three forces are equal in magnitude.',
            nudge: '(a) and (d) assume equal magnitudes, which is only a special symmetric case, not a requirement.',
          },
          {
            label: 'The three forces are mutually perpendicular.',
            nudge: '(b) perpendicularity is also a special case (and three forces can never all be mutually perpendicular in a plane anyway).',
          },
          {
            label: 'They can be represented in magnitude and direction by the three sides of a triangle taken in order.',
            nudge: null,
          },
          {
            label: 'Their magnitudes are in the ratio 1 : 1 : 1.',
            nudge: '(a) and (d) assume equal magnitudes, which is only a special symmetric case, not a requirement.',
          },
        ],
        correct: 2,
        solution: 'This is exactly the triangle law of forces — equilibrium of three concurrent forces means they close into a triangle when drawn head-to-tail.',
      },
      {
        t: 'mcq',
        q: 'Lami’s theorem can be applied to a system of:',
        opts: [
          {
            label: 'Any number of concurrent forces in equilibrium.',
            nudge: '(a) and (d) fail because the theorem has exactly three terms — it cannot accommodate four or more forces.',
          },
          { label: 'Exactly three concurrent, coplanar forces in equilibrium.', nudge: null },
          {
            label: 'Three parallel forces.',
            nudge: '(c) parallel forces are not concurrent (their lines never meet at a point), so the theorem does not apply.',
          },
          {
            label: 'Four concurrent forces in equilibrium.',
            nudge: '(a) and (d) fail because the theorem has exactly three terms — it cannot accommodate four or more forces.',
          },
        ],
        correct: 1,
        solution: 'Lami’s theorem is specifically a three-force relation derived from the sine rule of the force triangle.',
      },
      {
        t: 'mcq',
        q: 'A weight hangs in equilibrium from two strings attached to a ceiling: string A makes 30° with the horizontal and string B makes 60° with the horizontal, on opposite sides. Which string carries the greater tension?',
        opts: [
          { label: 'String A (30°)', nudge: '(a) reverses the logic — the flatter string actually carries less.' },
          { label: 'String B (60°)', nudge: null },
          { label: 'Both carry equal tension.', nudge: '(c) equal tensions occur only for symmetric angles, not here.' },
          {
            label: 'Cannot be determined without the weight.',
            nudge: '(d) the ratio of tensions depends only on the angles, not on the weight, so it is fully determined.',
          },
        ],
        correct: 1,
        solution: 'Horizontal balance gives <i>T</i><sub><i>A</i></sub> cos 30° = <i>T</i><sub><i>B</i></sub> cos 60°, so <i>T</i><sub><i>A</i></sub>(0.866) = <i>T</i><sub><i>B</i></sub>(0.5), meaning <i>T</i><sub><i>B</i></sub> ≈ 1.7<i>T</i><sub><i>A</i></sub>. The steeper string (closer to vertical) carries more tension because it shoulders more of the vertical load.',
      },
      {
        t: 'mcq',
        q: 'A person stands on a weighing scale inside a lift. The scale will read <b>more</b> than the person’s true weight when the lift is:',
        opts: [
          {
            label: 'Moving upward at constant velocity.',
            nudge: '(a) constant velocity means zero acceleration, so <i>R</i> = <i>mg</i> — true weight.',
          },
          { label: 'Accelerating upward.', nudge: null },
          {
            label: 'Accelerating downward.',
            nudge: '(c) downward acceleration gives <i>R</i> = <i>m</i>(<i>g</i> − <i>a</i>) < <i>mg</i> — the scale reads less.',
          },
          { label: 'In free fall.', nudge: '(d) free fall (<i>a</i> = <i>g</i>) gives <i>R</i> = 0 — apparent weightlessness.' },
        ],
        correct: 1,
        solution: 'Apparent weight <i>R</i> = <i>m</i>(<i>g</i> + <i>a</i>) when accelerating upward, which exceeds <i>mg</i>. The floor must push harder to both support and accelerate the person upward.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding forces at angles without resolving them.</b> You cannot just add 5 N and 12 N to get 17 N if they point in different directions. Always resolve into perpendicular components first, then balance each direction separately. Skipping resolution is the number-one source of wrong equilibrium answers.',
          '<b>Misreading the angles in Lami’s theorem.</b> Each force is paired with the angle between the other two, not the angle the force itself makes with something. Mislabeling these angles silently produces a wrong but plausible-looking answer. Sketch the three forces from the common point and read each “opposite” angle carefully.',
          '<b>Forgetting strings can only pull.</b> A string tension must come out positive. If your algebra yields a negative tension, that string would be slack and the assumed configuration is impossible — rethink the geometry rather than reporting a negative number.',
          '<b>Mishandling pseudo-force.</b> Add it only in a non-inertial (accelerating) frame, and always opposite to the frame’s acceleration. Adding it in the ground frame, or pointing it the wrong way, are both common and fatal errors.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — pick smart axes.</b> On an incline, resolve along and perpendicular to the slope; against a wall, use horizontal and vertical. The right axis choice often leaves only one force needing resolution, cutting the algebra in half. And for exactly three forces, reach for <b>Lami’s theorem</b> before grinding through components — it’s usually a one-line solution.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Equilibrium of a particle', note: '∑ <i>F</i><sub><i>x</i></sub> = 0, ∑ <i>F</i><sub><i>y</i></sub> = 0' },
          { f: 'Force resolution', note: '<i>F</i><sub><i>x</i></sub> = <i>F</i> cos <i>θ</i>, <i>F</i><sub><i>y</i></sub> = <i>F</i> sin <i>θ</i>' },
          { f: 'Lami’s theorem (3 forces)', note: '<i>P</i>/sin <i>α</i> = <i>Q</i>/sin <i>β</i> = <i>R</i>/sin <i>γ</i>' },
          { f: 'Block on smooth incline (string ∥ incline)', note: '<i>T</i> = <i>mg</i> sin <i>θ</i>, <i>N</i> = <i>mg</i> cos <i>θ</i>' },
          { f: 'Apparent weight in lift', note: '<i>R</i> = <i>m</i>(<i>g</i> ± <i>a</i>)' },
          { f: 'Pseudo-force (non-inertial)', note: '<i>F</i><sub>pseudo</sub> = <i>ma</i><sub>0</sub>, opposite to <i>a⃗</i><sub>0</sub>' },
          { f: '<b>Concurrent forces</b> act through one point; equilibrium means their vector sum is zero.', note: '' },
          { f: '<b>Resolve, then balance</b> each perpendicular direction separately.', note: '' },
          { f: '<b>Lami’s theorem</b> = sine rule for three forces; pair each force with the angle between the other two.', note: '' },
          { f: '<b>Strings only pull</b>', note: 'negative tension means slack/impossible.' },
          {
            f: 'In accelerating frames, add a <b>pseudo-force</b> <i>ma</i><sub>0</sub> opposite the acceleration; the string aligns with <b>effective gravity</b> √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>).',
            note: '',
          },
        ],
        aids: [
          '“Resolve, Right & Up, set to zero.”',
          'For Lami: “each force loves the angle across from it.”',
          'For lifts: “Up adds, Down subtracts, Free-fall floats.”',
        ],
      },
    ],
  },
];
