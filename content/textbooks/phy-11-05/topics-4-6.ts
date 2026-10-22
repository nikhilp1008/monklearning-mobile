import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 04 to 06: pp. 308–331 of the Class 11 Physics Master
 * Reference, word for word: Sub-topic 3, Conservative and Non-Conservative
 * Forces (pp. 308 to 316), Sub-topic 3.5, Various Forms of Energy & the Law of
 * Conservation of Energy (pp. 317 to 322), and Sub-topic 4, Power (pp. 323 to
 * 331). Figure 5.4 (caption p. 309, drawn on p. 310) and Figure 5.5 (caption
 * p. 324, drawn on p. 325) are placed where the book prints their captions.
 * A worked example’s boxed result is its answer; the NEET examples’ “Answer:”
 * paragraphs are their answers.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 308–316 ─────────────────────────
  {
    n: '04',
    title: 'Conservative and Non-Conservative Forces',
    kalam: 'A conservative force gives back every joule.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This sub-topic is the conceptual heart of the chapter, and its payoff — the <b>conservation of mechanical energy</b> — is one of the most-used tools in all of JEE/NEET physics. CBSE Boards ask the definition and distinction (2–3 marks) and the derivation of conservation of mechanical energy. JEE Main reliably asks <b>1–2 questions</b> on energy accounting with friction (the “modified” theorem). NEET tests the path-independence / closed-loop ideas as quick MCQs. JEE Advanced loves the subtle traps: friction’s round-trip work, testing whether a 2-D force is conservative, and energy lost as heat using sliding distance rather than displacement.',
      },
      {
        t: 'p',
        html: 'Imagine two different shopkeepers. The first is scrupulously honest: whatever you deposit with him, you can withdraw later, down to the last rupee. The second skims a little every time money passes through his hands — you never get back quite what you put in. In physics, forces split into exactly these two personalities. The honest ones are called <b>conservative</b>; the skimmers are <b>non-conservative</b>.<br><br>A <b>conservative force</b> gives back every joule. Lift a stone and gravity does negative work on it (you store energy in the stone–Earth system); let it fall and gravity does an exactly equal positive work, handing all of it back as kinetic energy. The springs in a pen, a stretched bow, the pull of the Earth — these all play fair. Because they give energy back, we can sensibly store energy “in” them — which is why, as we saw last sub-topic, <b>only conservative forces have a potential energy.</b><br><br>A <b>non-conservative force</b> skims. Friction is the textbook villain. Slide a book across a table and friction does negative work, turning the book’s kinetic energy into heat. Push it back to the start and friction does negative work again — it never reverses sign to refund you. The energy isn’t destroyed (it warms the table and book), but it’s gone from the mechanical budget forever. You can’t build a potential energy for friction because there’s nothing stored to retrieve.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture two routes from your house to the local market — a short straight lane and a long winding one. If you carry a heavy bag, the gravitational work to get there is identical on both routes (it depends only on the height difference between home and market, not the path). That’s <b>path independence</b>, the signature of a conservative force. But the friction/effort you fight depends entirely on the distance walked — the long winding route tires you far more. That’s the path-dependence of a non-conservative force. And here’s the cleanest test of all: take a <b>round trip</b> — go to the market and come straight back home. Gravity’s total work is exactly <b>zero</b> (you ended where you started, same height). Friction’s total work is decidedly not zero — you’re exhausted, and all that effort became heat.',
      },
      {
        t: 'p',
        html: 'So the three equivalent tests for a conservative force are:<br>1. <b>Work is path-independent</b> (depends only on endpoints).<br>2. <b>Work over any closed loop is zero.</b><br>3. <b>The energy it transfers is fully recoverable</b> (and so it has an associated potential energy).<br><br>All three always agree. If a force passes one, it passes all; if it fails one, it fails all.',
      },
      {
        t: 'p',
        html: 'Now for the big consequence. If only conservative forces do work on a system, then nothing skims energy away — kinetic and potential energy just trade back and forth, but their <b>sum stays exactly constant.</b> That constant sum is the <b>mechanical energy</b>, <i>E</i> = <i>K</i> + <i>U</i>, and its constancy is the <b>principle of conservation of mechanical energy.</b> A pendulum trades <i>U</i> for <i>K</i> on the way down and <i>K</i> back into <i>U</i> on the way up, swinging forever (in an ideal, frictionless world) because the total never leaks. The moment friction enters, it skims a little each swing, and the pendulum slowly dies — its mechanical energy bleeding away as heat.',
      },
      { t: 'fig', id: 'p11-05-fig-5.4' },
      {
        t: 'p',
        html: 'But here is the subtlety students must internalise: even when mechanical energy isn’t conserved, <b>total energy always is.</b> When friction “destroys” 40 J of kinetic energy, that energy hasn’t vanished — measure carefully and you’ll find the block and surface have warmed up by exactly 40 J worth of heat. Rub your palms together on a cold morning and you feel this directly: the mechanical work of rubbing converts into thermal energy in your skin. So the broader <b>law of conservation of energy</b> says energy only ever changes form — mechanical into heat, sound, or deformation — and the grand total across all forms is fixed. “Mechanical energy is lost” is shorthand for “mechanical energy has been converted into a non-mechanical form we’re no longer tracking.”',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>1. Conservation of mechanical energy holds <b>only when non-conservative forces do no net work</b> (frictionless, or friction present but not doing work).<br>2. The “lost” mechanical energy is never truly lost — it becomes heat, sound, deformation. The total energy of the universe is always conserved (the broader <b>law of conservation of energy</b>).<br>3. Friction’s energy loss uses the <b>actual sliding distance</b>, not the net displacement — a round trip dissipates heat over the whole path.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Work done by a conservative force (the link to potential energy)',
        main: '<i>W</i><sub>cons</sub> = −Δ<i>U</i> = <i>U</i><sub><i>i</i></sub> − <i>U</i><sub><i>f</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Force from potential energy (carried over from Topic 03)',
        main: '<i>F</i> = −d<i>U</i>/d<i>x</i> (1-D), <i>F⃗</i> = −∇<i>U</i> (3-D)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conservation of mechanical energy (only conservative forces do work)',
        main: '<i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub> = <i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub> ⟺ Δ<i>E</i> = Δ<i>K</i> + Δ<i>U</i> = 0',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Modified work–energy theorem (when non-conservative forces are also present)',
        main: '<i>W</i><sub>nc</sub> = Δ<i>E</i> = (<i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub>) − (<i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'For friction specifically, the mechanical energy lost equals the heat produced:<br>|<i>W</i><sub>friction</sub>| = <i>f</i> × <i>d</i><sub>sliding</sub> = heat generated',
      },
      {
        t: 'p',
        html: '<b>Variable definitions:</b> <i>K</i> = kinetic energy, <i>U</i> = potential energy, <i>E</i> = <i>K</i> + <i>U</i> = mechanical energy, <i>W</i><sub>nc</sub> = work by all non-conservative forces, <i>f</i> = friction force, <i>d</i><sub>sliding</sub> = total path length over which sliding occurs.',
      },
      {
        t: 'p',
        html: '<b>Vector test for a conservative force</b> (3-D): the curl vanishes,<br>∇ × <i>F⃗</i> = 0.<br>In two dimensions with <i>F⃗</i> = <i>F</i><sub><i>x</i></sub><i>î</i> + <i>F</i><sub><i>y</i></sub><i>ĵ</i>, this reduces to the handy condition<br>∂<i>F</i><sub><i>y</i></sub>/∂<i>x</i> = ∂<i>F</i><sub><i>x</i></sub>/∂<i>y</i>.',
      },
      {
        t: 'p',
        html: '<b>Examples to memorise:</b> Conservative — gravitational, spring (elastic), electrostatic. Non-conservative — friction, viscous drag, air resistance (all velocity- or path-dependent and dissipative).',
      },
      {
        t: 'p',
        html: '<b>A note on the sign of potential energy.</b> Because <i>U</i> is defined relative to a chosen zero (usually at infinity), its sign carries physical meaning about the nature of the force field. For an <b>attractive</b> field (like gravity between two masses, or opposite charges), <i>U</i> is taken <b>negative</b> — you’d have to supply energy to pull the bodies apart to the zero-reference at infinity. For a <b>repulsive</b> field (like two charges of the same sign), <i>U</i> is <b>positive</b> — energy was spent pushing the bodies together against their mutual repulsion, and it’s stored, ready to fling them apart. This is why the general gravitational PE, <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>, wears a minus sign: gravity is always attractive.',
      },

      { t: 'part', title: 'Key derivations and procedures' },
      {
        t: 'p',
        html: '<b>(A) Conservation of mechanical energy</b><br><b>Assumptions:</b> A system on which the only forces doing work are conservative.<br><br><b>Step 1 — Work–energy theorem</b> (from Topic 02): the net work equals the change in kinetic energy.<br><i>W</i><sub>net</sub> = Δ<i>K</i><br><br><b>Step 2 — All the work is conservative</b>, and conservative work is −Δ<i>U</i>:<br><i>W</i><sub>net</sub> = <i>W</i><sub>cons</sub> = −Δ<i>U</i><br>Why: this is the defining property of a conservative force — its work is stored as (minus) the change in potential energy.<br><br><b>Step 3 — Equate the two expressions</b> for <i>W</i><sub>net</sub>:<br>−Δ<i>U</i> = Δ<i>K</i> ⇒ Δ<i>K</i> + Δ<i>U</i> = 0 ⇒ Δ(<i>K</i> + <i>U</i>) = 0<br><i>K</i> + <i>U</i> = <i>E</i> = constant<br>The sum is unchanging: energy merely shuttles between kinetic and potential form. This single line lets us relate the state of a system at two instants <b>without knowing anything about the messy details in between</b> — no need to track forces or solve Newton’s equations along the path.',
      },
      {
        t: 'p',
        html: '<b>(B) The modified work–energy theorem (when friction is present)</b><br><b>Step 1 — Split the net work</b> into conservative and non-conservative parts:<br><i>W</i><sub>net</sub> = <i>W</i><sub>cons</sub> + <i>W</i><sub>nc</sub> = Δ<i>K</i><br><br><b>Step 2 — Substitute <i>W</i><sub>cons</sub> = −Δ<i>U</i>:</b><br>−Δ<i>U</i> + <i>W</i><sub>nc</sub> = Δ<i>K</i><br><br><b>Step 3 — Rearrange:</b><br><i>W</i><sub>nc</sub> = Δ<i>K</i> + Δ<i>U</i> = Δ<i>E</i><br><br>So the work done by non-conservative forces is the change in mechanical energy. Since friction always opposes the sliding, <i>W</i><sub>nc</sub> < 0, and the mechanical energy decreases by exactly the heat generated. This is the everyday version of energy bookkeeping: <b>(mechanical energy at start) = (mechanical energy at end) + (heat lost to friction).</b>',
      },
      {
        t: 'p',
        html: 'Given a force law <i>F⃗</i>(<i>x</i>, <i>y</i>), decide if it’s conservative and, if so, find <i>U</i>:',
      },
      {
        t: 'proc',
        title: '(C) Procedure — testing whether a force is conservative',
        steps: [
          '<b>Apply the cross-derivative test:</b> check whether ∂<i>F</i><sub><i>y</i></sub>/∂<i>x</i> = ∂<i>F</i><sub><i>x</i></sub>/∂<i>y</i>. If they’re unequal, the force is non-conservative — stop. If equal, it’s conservative — proceed.',
          '<b>Find <i>U</i> by integrating</b> <i>F</i><sub><i>x</i></sub> = −∂<i>U</i>/∂<i>x</i> with respect to <i>x</i> (treating <i>y</i> as constant), which leaves an unknown function of <i>y</i>.',
          '<b>Pin down that function</b> by demanding <i>F</i><sub><i>y</i></sub> = −∂<i>U</i>/∂<i>y</i>.',
          '<b>Sanity-check</b> by computing work along two different paths between the same endpoints — for a conservative force, both must give the same answer.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A 0.5 kg ball is released from rest at a height of 5 m above the ground. Neglecting air resistance, use conservation of mechanical energy to find its speed just before it hits the ground. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>Given:</b> <i>m</i> = 0.5 kg, <i>h</i> = 5 m, initial speed = 0.',
          '<b>Set up conservation of mechanical energy</b> (only gravity does work):<br><i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub> = <i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub>',
          'Taking the ground as the reference (<i>U</i><sub><i>f</i></sub> = 0) and noting <i>K</i><sub><i>i</i></sub> = 0:<br>0 + <i>mgh</i> = ½<i>mv</i><sup>2</sup> + 0',
          '<b>Solve for <i>v</i></b> (mass cancels — a hallmark of free-fall energy problems):<br><i>v</i> = √(2<i>gh</i>) = √(2(10)(5)) = √100 = 10 m/s',
          '<b>Comment:</b> All 25 J of potential energy (<i>mgh</i> = 0.5 × 10 × 5) converted cleanly into kinetic energy. No path details were needed — just the start and end states.',
        ],
        ans: '10 m/s',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A block is pushed up a rough ramp from the floor onto a shelf and then slid back down the same ramp to its original spot on the floor. Over this complete round trip, the work done by gravity and the work done by kinetic friction (on the way up and on the way down) are, respectively: (a) zero, zero (b) zero, negative (c) negative, zero (d) positive, negative',
        steps: [
          '<b>The trap:</b> Students who memorised “closed loop → zero work” blindly apply it to both forces and pick (a).',
          '<b>The fast reasoning:</b> Gravity is <b>conservative</b> — over any closed path (you end where you started, same height) its total work is exactly <b>zero</b>. Friction is <b>non-conservative</b> — it opposes motion the whole way up and the whole way down, doing negative work in both directions, so its round-trip total is <b>negative</b>, never zero.',
        ],
        ans: '(b) zero, negative. Speed tip: “closed loop → zero work” applies <b>only</b> to conservative forces. The instant friction or drag appears in a round trip, that contribution is negative.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 5 kg block starts from rest and slides down a <b>smooth</b> curved ramp from a height of 1.8 m. At the bottom it slides onto a <b>rough</b> horizontal floor with coefficient of kinetic friction <i>μ</i> = 0.4. How far does it travel on the floor before stopping? Take <i>g</i> = 10 m/s<sup>2</sup>. (Combines: conservation of mechanical energy on the smooth part + modified work–energy theorem on the rough part.)',
        steps: [
          '<b>Stage 1 — The smooth ramp (energy conserved).</b> All the potential energy becomes kinetic energy at the bottom:<br><i>K</i><sub>bottom</sub> = <i>mgh</i> = (5)(10)(1.8) = 90 J<br>(So <i>v</i> = √(2<i>gh</i>) = √36 = 6 m/s, though we won’t even need the speed.)',
          '<b>Stage 2 — The rough floor (mechanical energy bled away by friction).</b> The block stops when friction has dissipated all 90 J. The friction force is<br><i>f</i> = <i>μmg</i> = (0.4)(5)(10) = 20 N',
          'Setting heat generated equal to the kinetic energy to be removed:<br><i>f</i> · <i>s</i> = <i>K</i><sub>bottom</sub> ⇒ 20 <i>s</i> = 90 ⇒ <i>s</i> = 4.5 m',
          '<b>Why this is JEE Main:</b> it stitches two different energy regimes together — a conservative stretch where <i>E</i> is conserved, and a dissipative stretch where the modified theorem applies. Notice we never had to analyse the shape of the curved ramp; energy methods don’t care about the path.',
        ],
        ans: '<i>s</i> = 4.5 m',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle is acted on by a force <i>F⃗</i> = (<i>yî</i> + <i>xĵ</i>) N, with <i>x</i>, <i>y</i> in metres. (a) Determine whether the force is conservative. (b) Verify your conclusion by computing the work done from (0, 0) to (1, 1) along two different paths. (c) If conservative, find the potential energy function <i>U</i>(<i>x</i>, <i>y</i>).',
        steps: [
          '<b>(a) Cross-derivative test.</b> With <i>F</i><sub><i>x</i></sub> = <i>y</i> and <i>F</i><sub><i>y</i></sub> = <i>x</i>:<br>∂<i>F</i><sub><i>y</i></sub>/∂<i>x</i> = ∂<i>x</i>/∂<i>x</i> = 1,   ∂<i>F</i><sub><i>x</i></sub>/∂<i>y</i> = ∂<i>y</i>/∂<i>y</i> = 1.<br>They are equal, so the force <b>is conservative.</b>',
          '<b>(b) Two-path verification.</b> Work is <i>W</i> = ∫(<i>F</i><sub><i>x</i></sub> d<i>x</i> + <i>F</i><sub><i>y</i></sub> d<i>y</i>) = ∫(<i>y</i> d<i>x</i> + <i>x</i> d<i>y</i>).',
          'Path 1: (0, 0) → (1, 0) → (1, 1).<br>• Leg 1 (along <i>x</i>, <i>y</i> = 0): ∫<sub>0</sub><sup>1</sup> <i>y</i> d<i>x</i> = ∫<sub>0</sub><sup>1</sup> 0 d<i>x</i> = 0.<br>• Leg 2 (along <i>y</i>, <i>x</i> = 1): ∫<sub>0</sub><sup>1</sup> <i>x</i> d<i>y</i> = ∫<sub>0</sub><sup>1</sup> 1 d<i>y</i> = 1.<br>• Total: <i>W</i><sub>1</sub> = 0 + 1 = 1 J.',
          'Path 2: (0, 0) → (0, 1) → (1, 1).<br>• Leg 1 (along <i>y</i>, <i>x</i> = 0): ∫<sub>0</sub><sup>1</sup> <i>x</i> d<i>y</i> = ∫<sub>0</sub><sup>1</sup> 0 d<i>y</i> = 0.<br>• Leg 2 (along <i>x</i>, <i>y</i> = 1): ∫<sub>0</sub><sup>1</sup> <i>y</i> d<i>x</i> = ∫<sub>0</sub><sup>1</sup> 1 d<i>x</i> = 1.<br>• Total: <i>W</i><sub>2</sub> = 0 + 1 = 1 J.',
          'Both paths give 1 J — <b>path independence confirmed</b>, exactly as a conservative force demands.',
          '<b>(c) Potential energy.</b> Since <i>F⃗</i> = −∇<i>U</i>, we need −∂<i>U</i>/∂<i>x</i> = <i>y</i> and −∂<i>U</i>/∂<i>y</i> = <i>x</i>. Integrating the first gives <i>U</i> = −<i>xy</i> + <i>g</i>(<i>y</i>); the second then requires <i>g</i>′(<i>y</i>) = 0. Hence<br><i>U</i>(<i>x</i>, <i>y</i>) = −<i>xy</i> + constant',
          'A quick check: −∂<i>U</i>/∂<i>x</i> = <i>y</i> ✓ and −∂<i>U</i>/∂<i>y</i> = <i>x</i> ✓.',
          '<b>Why this is JEE Advanced:</b> it fuses the cross-derivative test, explicit line integrals along chosen paths, and recovery of <i>U</i> — the full toolkit for handling an arbitrary force field.',
        ],
        ans: '<i>U</i>(<i>x</i>, <i>y</i>) = −<i>xy</i> + constant',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 2 kg stone is dropped from a height of 20 m. Using conservation of mechanical energy, find its speed just before hitting the ground. (Neglect air resistance, <i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '20 m/s',
          },
          {
            q: '[NEET] What is the work done by the gravitational force on a body taken once around any closed path? Justify in one line.',
            a: '0 (gravity is conservative, so closed-loop work vanishes)',
          },
          {
            q: '[JEE Main] A 1 kg block slides from rest down a smooth incline of height 2.5 m, then moves onto a rough horizontal floor (<i>μ</i> = 0.5). Find the distance it travels on the floor before stopping.',
            a: '5 m',
          },
          {
            q: '[JEE Main] The work done by a conservative force in moving a body from A to B is +30 J. If the potential energy at A is 50 J, find the potential energy at B.',
            a: '<i>U</i><sub><i>B</i></sub> = 20 J (since <i>W</i><sub>cons</sub> = <i>U</i><sub><i>A</i></sub> − <i>U</i><sub><i>B</i></sub>)',
          },
          {
            q: '[JEE Advanced] A force <i>F⃗</i> = (2<i>xy</i>)<i>î</i> + (<i>x</i><sup>2</sup>)<i>ĵ</i> acts on a particle. Determine whether it is conservative, and if so, find the potential energy function <i>U</i>(<i>x</i>, <i>y</i>).',
            a: 'Conservative (∂<i>F</i><sub><i>y</i></sub>/∂<i>x</i> = ∂<i>F</i><sub><i>x</i></sub>/∂<i>y</i> = 2<i>x</i>); <i>U</i> = −<i>x</i><sup>2</sup><i>y</i> + constant',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is a non-conservative force?',
        opts: [
          {
            label: 'gravitational force',
            nudge: '(a), (b), and (d) are the three standard conservative forces; each is path-independent, does zero work on a closed loop, and possesses a well-defined potential energy. Friction has none of these properties.',
          },
          {
            label: 'spring force',
            nudge: '(a), (b), and (d) are the three standard conservative forces; each is path-independent, does zero work on a closed loop, and possesses a well-defined potential energy. Friction has none of these properties.',
          },
          { label: 'kinetic friction', nudge: null },
          {
            label: 'electrostatic force',
            nudge: '(a), (b), and (d) are the three standard conservative forces; each is path-independent, does zero work on a closed loop, and possesses a well-defined potential energy. Friction has none of these properties.',
          },
        ],
        correct: 2,
        solution: 'It is non-conservative and dissipative — its work depends on the path and it converts mechanical energy irreversibly into heat.',
      },
      {
        t: 'mcq',
        q: 'The work done by a conservative force around a closed path is:',
        opts: [
          { label: 'maximum', nudge: '(a) is meaningless here.' },
          { label: 'always positive', nudge: '(b) ignores that work can be negative on parts of the loop.' },
          { label: 'zero', nudge: null },
          {
            label: 'dependent on the path taken',
            nudge: '(d) describes a non-conservative force; the whole point of “conservative” is path independence.',
          },
        ],
        correct: 2,
        solution: 'This is one of the three defining tests of a conservative force — over any closed loop, the energy given out on one part is taken back on another, netting exactly zero.',
      },
      {
        t: 'mcq',
        q: 'A block is pushed up a rough incline and then slides back down to its starting point. Over this complete round trip, the work done by friction is:',
        opts: [
          {
            label: 'zero',
            nudge: '(a) is the classic trap — wrongly applying the “closed loop → zero work” rule (which holds only for conservative forces) to friction.',
          },
          { label: 'positive', nudge: '(b) is impossible since friction always opposes sliding.' },
          { label: 'negative', nudge: null },
          { label: 'cannot be determined', nudge: '(d) underestimates how determinate the situation is.' },
        ],
        correct: 2,
        solution: 'Friction opposes motion on the way up (negative work) and on the way down (negative work again). Two negatives add to a larger negative — never zero.',
      },
      {
        t: 'mcq',
        q: 'When only conservative forces do work on a system, which quantity necessarily stays constant?',
        opts: [
          {
            label: 'kinetic energy alone',
            nudge: '(a) and (b) each change continuously as energy shuttles between the two forms — only the sum is invariant.',
          },
          {
            label: 'potential energy alone',
            nudge: '(a) and (b) each change continuously as energy shuttles between the two forms — only the sum is invariant.',
          },
          { label: 'the sum <i>K</i> + <i>U</i>', nudge: null },
          {
            label: 'linear momentum',
            nudge: '(d) confuses energy conservation with momentum conservation, which is governed by a different condition (zero net external force), not by forces being conservative.',
          },
        ],
        correct: 2,
        solution: '<b>the sum <i>K</i> + <i>U</i> (mechanical energy).</b> Conservative forces let kinetic and potential energy interconvert, but their total is fixed.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating friction’s round-trip work as zero.</b> The “closed loop → zero work” rule is exclusive to conservative forces. Kinetic friction does negative work on every leg of a journey, so its round-trip total is always negative.',
          '<b>Applying conservation of mechanical energy when friction is present.</b> If any non-conservative force does work, <i>K</i> + <i>U</i> is <b>not</b> constant. Switch to the modified theorem <i>W</i><sub>nc</sub> = Δ<i>E</i> and account for the heat lost.',
          '<b>Forgetting the minus sign in <i>W</i><sub>cons</sub> = −Δ<i>U</i>.</b> Positive conservative work means potential energy decreases (a falling stone), not increases. Mixing up the sign flips every energy balance.',
          '<b>Using displacement instead of path length for friction heat.</b> Friction heat is <i>f</i> × (total sliding distance). On a back-and-forth path the displacement may be small or zero, but the heat dissipated depends on the whole distance slid.',
          '<b>Saying friction “destroys” energy.</b> Energy is never destroyed. Friction converts mechanical energy into heat — the total energy is conserved. In exam answers, write “converted to heat,” not “lost,” to show you understand the broader conservation law.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (choosing your tool):</b> Before writing a single equation, scan the forces. If everything doing work is conservative (gravity, springs, smooth surfaces), jump straight to <i>E</i><sub><i>i</i></sub> = <i>E</i><sub><i>f</i></sub> — fast, and the path is irrelevant. If friction or drag is in play, use <i>E</i><sub><i>i</i></sub> = <i>E</i><sub><i>f</i></sub> + (heat), with heat = <i>f</i> × <i>d</i><sub>sliding</sub>. Picking the right framework up front saves you from grinding through Newton’s laws along a complicated path.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Conservative',
            note: 'path-independent · closed-loop work = 0 · energy recoverable · has a PE · ∇ × <i>F⃗</i> = 0. Examples: gravity, spring, electrostatic.',
          },
          {
            f: 'Non-conservative',
            note: 'path-dependent · closed-loop work ≠ 0 · dissipative (heat) · no PE. Examples: friction, viscous drag, air resistance.',
          },
          {
            f: 'Conservative work–PE link',
            note: '<i>W</i><sub>cons</sub> = −Δ<i>U</i> = <i>U</i><sub><i>i</i></sub> − <i>U</i><sub><i>f</i></sub>',
          },
          { f: 'Force from PE', note: '<i>F</i> = −d<i>U</i>/d<i>x</i> (3-D: <i>F⃗</i> = −∇<i>U</i>)' },
          {
            f: 'Conservation of mechanical energy (conservative forces only)',
            note: '<i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub> = <i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub>',
          },
          {
            f: 'Modified work–energy theorem',
            note: '<i>W</i><sub>nc</sub> = Δ<i>E</i> = (<i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub>) − (<i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub>); friction heat = <i>f</i> × <i>d</i><sub>sliding</sub>',
          },
          {
            f: '2-D conservative test',
            note: '∂<i>F</i><sub><i>y</i></sub>/∂<i>x</i> = ∂<i>F</i><sub><i>x</i></sub>/∂<i>y</i>',
          },
          {
            f: 'Law of conservation of energy',
            note: 'energy is never destroyed — mechanical energy “lost” becomes heat/sound.',
          },
        ],
        aids: ['“Conservative gives it back; non-conservative burns it as heat.”', '“Closed-loop zero is a conservative-only privilege.”'],
      },
    ],
  },
  // ───────────────────────── Topic 05 · pp. 317–322 ─────────────────────────
  {
    n: '05',
    title: 'Various Forms of Energy & the Law of Conservation of Energy',
    kalam: 'The total energy of an isolated system stays constant forever.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the chapter’s big-picture, high-yield conceptual section. CBSE Boards regularly ask 1–3 mark questions on the forms of energy, the law of conservation of energy, and the <b>mass–energy relation</b> <i>E</i> = <i>mc</i><sup>2</sup> (a named NCERT result). NEET asks <b>1 question</b> on energy transformations or the value of <i>E</i> = <i>mc</i><sup>2</sup> or of the mechanical equivalent of heat. JEE Main occasionally folds <i>E</i> = <i>mc</i><sup>2</sup> into a numerical (mass converted, energy released). JEE Advanced uses these ideas as the conceptual bridge into Modern Physics (nuclear energy, binding energy).',
      },
      {
        t: 'p',
        html: 'So far this chapter has lived entirely in the world of mechanical energy — kinetic and potential. But energy is far bigger than that. Look around: the food you ate this morning, the petrol in a scooter, the charge in a phone battery, the warmth of sunlight, the rumble of a loudspeaker, the colossal output of a nuclear reactor — every one of these is <b>energy in a different costume.</b>',
      },
      {
        t: 'p',
        html: 'The forms you should know:<br>• <b>Mechanical energy</b> — kinetic (<i>K</i>) and potential (<i>U</i>), the subject of the rest of this chapter.<br>• <b>Heat (thermal) energy</b> — the energy of the random, jiggling motion of the molecules inside matter. A hot cup of chai has more thermal energy than a cold one because its molecules move faster.<br>• <b>Chemical energy</b> — energy locked in the bonds between atoms, released or absorbed in reactions. This powers your body (food), vehicles (fuel), and devices (batteries).<br>• <b>Electrical energy</b> — energy carried by moving charges; what flows through every wire in your home.<br>• <b>Nuclear energy</b> — energy stored in the nucleus of an atom, released in fission (atom bombs, reactors) and fusion (the Sun and stars).<br>• <b>Radiant (light) energy</b> and <b>sound energy</b> — energy carried by electromagnetic waves and by pressure waves in a medium.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture energy as money that can be exchanged between different currencies. You can convert rupees to dollars to yen, but the total wealth (at a fixed exchange rate) never changes in the exchange itself. Energy is the same: a hydroelectric dam converts the <b>potential energy</b> of stored water into <b>kinetic energy</b> as it falls, then into <b>electrical energy</b> in the turbine, which becomes <b>light and heat</b> in your home. At every step the form changes, but the total amount is preserved. That preservation is the deepest law in all of physics — the <b>law of conservation of energy:</b> energy can neither be created nor destroyed; it can only be transformed from one form to another. The total energy of an isolated system stays constant forever.',
      },
      {
        t: 'p',
        html: 'This is why, back in the topic on conservative and non-conservative forces, the kinetic energy that “disappeared” wasn’t destroyed — it was converted into heat. James Joule proved this conversion is exact: a fixed amount of mechanical work always produces a fixed amount of heat. This <b>mechanical equivalent of heat</b> is about 1 cal = 4.186 J.<br><br>And then comes the most astonishing twist of twentieth-century physics. Einstein showed that <b>mass itself is a form of energy.</b> A lump of matter, just sitting still, holds an enormous reserve of energy frozen in its mass, given by the most famous equation in science:<br><i>E</i> = <i>mc</i><sup>2</sup>.<br>Because the speed of light <i>c</i> is so vast, even a tiny mass is equivalent to a staggering amount of energy. This is the source of the Sun’s power and of nuclear energy: in nuclear reactions, a sliver of mass vanishes and reappears as a flood of energy. With this insight, the conservation law is generalised to the <b>conservation of mass–energy:</b> it is the combined total of mass and energy that nature keeps constant.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>1. The conservation law applies to an <b>isolated system</b> (no energy crossing its boundary). Energy can flow between a system and its surroundings.<br>2. Converting “lost” mechanical energy to heat does <b>not</b> violate conservation — the heat is real, measurable energy.<br>3. <i>E</i> = <i>mc</i><sup>2</sup> becomes practically significant only where mass actually changes — chiefly <b>nuclear</b> processes; in ordinary chemical or mechanical events the mass change is far too small to detect.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Law of conservation of energy',
        main: 'for an isolated system, the total energy (summed over all forms) is constant:<br><i>E</i><sub>total</sub> = <i>K</i> + <i>U</i> + (heat) + (chemical) + (electrical) + ⋯ = constant',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mechanical equivalent of heat (Joule’s constant)',
        main: '1 cal = 4.186 J (≈ 4.2 J)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mass–energy equivalence (Einstein)',
        main: '<i>E</i> = <i>mc</i><sup>2</sup>',
        legend: ['<i>E</i> = energy equivalent of a mass <i>m</i>', '<i>c</i> = speed of light in vacuum (3 × 10<sup>8</sup> m/s)'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Energy released from a mass change Δm (e.g., the mass defect in a nuclear reaction)',
        main: 'Δ<i>E</i> = (Δ<i>m</i>)<i>c</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Quantity reference table',
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Energy (any form)', '<i>E</i>', 'joule (J)', '[M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]'],
          ['Mass', '<i>m</i>', 'kilogram (kg)', '[M<sup>1</sup> L<sup>0</sup> T<sup>0</sup>]'],
          ['Speed of light', '<i>c</i>', 'm·s<sup>−1</sup>', '[M<sup>0</sup> L<sup>1</sup> T<sup>−1</sup>]'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Useful energy conversions',
        main: '1 eV = 1.6 × 10<sup>−19</sup> J<br>1 u (atomic mass unit) ↔ 931.5 MeV<br>1 kWh = 3.6 × 10<sup>6</sup> J',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'The relation 1 u ↔ 931.5 MeV is just <i>E</i> = <i>mc</i><sup>2</sup> applied to one atomic mass unit — a result used constantly in nuclear physics.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single “derivation” here, but two procedures recur in exams.',
      },
      {
        t: 'proc',
        title: '(A) Tracking an energy transformation chain',
        steps: [
          '<b>Identify the starting form</b> of energy (e.g., chemical energy in fuel).',
          '<b>Follow each conversion</b> device by device, naming the form at every stage.',
          '<b>Apply conservation:</b> the total energy in equals the total energy out, including any “wasted” heat. Real machines are never 100% efficient — the shortfall always shows up as heat or sound, never as destroyed energy.',
        ],
      },
      {
        t: 'p',
        html: 'Example chain (thermal power plant): chemical energy (coal) → heat energy (combustion) → kinetic energy (steam turbine) → electrical energy (generator) → light + heat (your home).',
      },
      {
        t: 'proc',
        title: '(B) Computing energy from a mass change (E = mc²)',
        steps: [
          'Find the mass that is converted, Δ<i>m</i> (in kg, or in atomic mass units u).',
          'If in kg, multiply by <i>c</i><sup>2</sup> = 9 × 10<sup>16</sup> m<sup>2</sup> s<sup>−2</sup> to get joules.',
          'If in atomic mass units, multiply directly by 931.5 MeV/u to get the energy in MeV — far quicker for nuclear problems.',
          'Convert units as the question demands (J ↔ eV ↔ MeV).',
        ],
      },
      {
        t: 'p',
        html: 'The key conceptual point: a measurable mass change requires a nuclear-scale energy release. That is why <i>E</i> = <i>mc</i><sup>2</sup> rules nuclear physics but is invisible in everyday chemistry.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A 10 kg wooden crate sliding across a rough floor at 5 m/s is brought to rest by friction. How much heat energy is generated, and which conservation principle does this illustrate?',
        steps: [
          '<b>Given:</b> <i>m</i> = 10 kg, <i>v</i> = 5 m/s, final speed = 0.',
          'By the law of conservation of energy, the lost kinetic energy is fully converted into heat:<br>Heat generated = <i>K</i><sub><i>i</i></sub> = ½<i>mv</i><sup>2</sup> = ½(10)(5)<sup>2</sup> = ½(10)(25) = 125 J',
          '<b>Comment:</b> This illustrates the <b>law of conservation of energy</b> — the 125 J of mechanical energy was not destroyed but transformed into thermal energy in the crate and floor.',
        ],
        ans: '125 J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The energy equivalent of 1 gram of matter (taking <i>c</i> = 3 × 10<sup>8</sup> m/s) is: (a) 9 × 10<sup>13</sup> J (b) 9 × 10<sup>16</sup> J (c) 3 × 10<sup>5</sup> J (d) 9 × 10<sup>10</sup> J',
        steps: [
          '<b>The trap:</b> Forgetting to convert grams to kilograms — using <i>m</i> = 1 gives 9 × 10<sup>16</sup> (option b), the common error.',
          '<b>The fast reasoning:</b> Convert first: 1 g = 10<sup>−3</sup> kg. Then<br><i>E</i> = <i>mc</i><sup>2</sup> = (10<sup>−3</sup>)(3 × 10<sup>8</sup>)<sup>2</sup> = (10<sup>−3</sup>)(9 × 10<sup>16</sup>) = 9 × 10<sup>13</sup> J.',
        ],
        ans: '(a) 9 × 10<sup>13</sup> J. Speed tip: in any <i>E</i> = <i>mc</i><sup>2</sup> problem, the unit slip is the mass unit — convert grams (and atomic mass units) to kilograms before squaring <i>c</i>. Note how even one gram holds a city-scale amount of energy.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In a nuclear reaction, the total mass of the products is less than that of the reactants by Δ<i>m</i> = 0.02 u. Calculate the energy released, in MeV. (Combines: mass defect + mass–energy equivalence.)',
        steps: [
          '<b>Step 1 — Use the atomic-mass-unit shortcut</b> (1 u ↔ 931.5 MeV), which already bakes in <i>E</i> = <i>mc</i><sup>2</sup>:<br>Δ<i>E</i> = (Δ<i>m</i>) × 931.5 MeV/u = (0.02)(931.5)<br>Δ<i>E</i> ≈ 18.63 MeV',
          '<b>Why this is JEE Main:</b> it links the idea of a mass defect (mass “missing” after the reaction) to the energy released via <i>E</i> = <i>mc</i><sup>2</sup>, using the practical 931.5 MeV/u conversion rather than grinding through SI units. This is the bread-and-butter calculation of nuclear energetics.',
        ],
        ans: 'Δ<i>E</i> ≈ 18.63 MeV',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The Sun radiates energy at a power of about 3.8 × 10<sup>26</sup> W. (a) At what rate (in kg/s) is the Sun losing mass? (b) Roughly how much mass does it convert in one full day? (Take <i>c</i> = 3 × 10<sup>8</sup> m/s.)',
        steps: [
          '<b>(a) Rate of mass loss.</b> Power is energy per second, and <i>E</i> = <i>mc</i><sup>2</sup> gives <i>m</i> = <i>E</i>/<i>c</i><sup>2</sup>, so the rate of mass loss is power divided by <i>c</i><sup>2</sup>:<br>d<i>m</i>/d<i>t</i> = <i>P</i>/<i>c</i><sup>2</sup> = (3.8 × 10<sup>26</sup>)/(9 × 10<sup>16</sup>) ≈ 4.2 × 10<sup>9</sup> kg/s',
          '<b>(b) Mass converted in one day</b> (<i>t</i> = 86400 s):<br>Δ<i>m</i> = (d<i>m</i>/d<i>t</i>) × <i>t</i> = (4.2 × 10<sup>9</sup>)(8.64 × 10<sup>4</sup>) ≈ 3.6 × 10<sup>14</sup> kg',
          '<b>Why this is JEE Advanced:</b> it applies <i>E</i> = <i>mc</i><sup>2</sup> to a rate (power → mass-loss rate) on an astrophysical scale, and demands clean handling of large powers of ten. Despite losing four billion kilograms every second, the Sun is so massive that this is utterly negligible over its lifetime — a satisfying check on the numbers.',
        ],
        ans: '4.2 × 10<sup>9</sup> kg/s',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 2 kg ball is dropped from rest and on striking the ground loses 40 J of mechanical energy to a dent and to sound. Where did this energy go, and what principle does this demonstrate?',
            a: 'Converted to heat, sound, and deformation energy; demonstrates the <b>law of conservation of energy</b>',
          },
          {
            q: '[NEET] Convert 500 calories of heat energy into joules. (Take 1 cal = 4.2 J.)',
            a: '2100 J',
          },
          {
            q: '[JEE Main] How much mass (in kg) is converted into energy when 9 × 10<sup>12</sup> J of energy is released? (Take <i>c</i> = 3 × 10<sup>8</sup> m/s.)',
            a: '<i>m</i> = <i>E</i>/<i>c</i><sup>2</sup> = (9 × 10<sup>12</sup>)/(9 × 10<sup>16</sup>) = 10<sup>−4</sup> kg',
          },
          {
            q: '[JEE Main] Identify the sequence of energy transformations in a battery-powered electric fan.',
            a: 'chemical → electrical → mechanical (kinetic) + heat/sound',
          },
          {
            q: '[JEE Advanced] A mass defect of 0.5 u occurs in a fusion reaction. Find the energy released in (a) MeV and (b) joules. (Use 1 u ↔ 931.5 MeV, 1 MeV = 1.6 × 10<sup>−13</sup> J.)',
            a: '(a) 465.75 MeV, (b) ≈ 7.45 × 10<sup>−11</sup> J',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'According to the law of conservation of energy, energy can:',
        opts: [
          {
            label: 'be created but not destroyed',
            nudge: '(a) and (b) each violate one half of the law.',
          },
          {
            label: 'be destroyed but not created',
            nudge: '(a) and (b) each violate one half of the law.',
          },
          { label: 'neither be created nor destroyed, only transformed', nudge: null },
          {
            label: 'be both created and destroyed',
            nudge: '(d) abandons it entirely.',
          },
        ],
        correct: 2,
        solution: 'Energy only changes form; the total in an isolated system is constant. The law is symmetric: no creation and no destruction.',
      },
      {
        t: 'mcq',
        q: 'The energy equivalent of 1 kg of mass is approximately:',
        opts: [
          {
            label: '3 × 10<sup>8</sup> J',
            nudge: '(a) uses <i>c</i> instead of <i>c</i><sup>2</sup> (forgetting to square).',
          },
          { label: '9 × 10<sup>16</sup> J', nudge: null },
          {
            label: '9 × 10<sup>8</sup> J',
            nudge: '(c) and (d) are partial powers-of-ten slips.',
          },
          {
            label: '3 × 10<sup>16</sup> J',
            nudge: '(c) and (d) are partial powers-of-ten slips.',
          },
        ],
        correct: 1,
        solution: '<i>E</i> = <i>mc</i><sup>2</sup> = (1)(3 × 10<sup>8</sup>)<sup>2</sup> = 9 × 10<sup>16</sup> J. The defining step is <b>squaring</b> the speed of light.',
      },
      {
        t: 'mcq',
        q: 'Which of the following lists only non-mechanical forms of energy?',
        opts: [
          {
            label: 'kinetic, potential, heat',
            nudge: '(a), (c), and (d) each include kinetic or potential energy, which are mechanical forms.',
          },
          { label: 'chemical, electrical, nuclear', nudge: null },
          {
            label: 'potential, chemical, sound',
            nudge: '(a), (c), and (d) each include kinetic or potential energy, which are mechanical forms.',
          },
          {
            label: 'kinetic, nuclear, electrical',
            nudge: '(a), (c), and (d) each include kinetic or potential energy, which are mechanical forms.',
          },
        ],
        correct: 1,
        solution: 'None of these is kinetic or potential (mechanical) energy. Read every item in the list before choosing.',
      },
      {
        t: 'mcq',
        q: 'In a hydroelectric power station, the main energy transformation is:',
        opts: [
          {
            label: 'electrical → mechanical → potential',
            nudge: '(a) reverses the direction.',
          },
          { label: 'potential → kinetic → electrical', nudge: null },
          {
            label: 'chemical → heat → electrical',
            nudge: '(c) describes a thermal (coal/gas) plant.',
          },
          {
            label: 'nuclear → heat → electrical',
            nudge: '(d) describes a nuclear plant.',
          },
        ],
        correct: 1,
        solution: 'Stored water’s gravitational PE becomes KE as it falls, then electrical energy in the turbine-generator. Match the energy chain to the actual source.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Saying energy is “lost” or “used up.”</b> Energy is never destroyed — it is transformed (often into heat). In answers, write “converted to heat/sound,” not “lost,” to show you understand conservation.',
          '<b>Forgetting to square <i>c</i> in <i>E</i> = <i>mc</i><sup>2</sup>.</b> The energy uses <i>c</i><sup>2</sup> = 9 × 10<sup>16</sup> m<sup>2</sup> s<sup>−2</sup>, not <i>c</i>. Dropping the square under-estimates the answer by a factor of 3 × 10<sup>8</sup>.',
          '<b>Unit slips in mass.</b> Convert grams and atomic mass units to kilograms before using <i>E</i> = <i>mc</i><sup>2</sup> in SI — or use the 1 u ↔ 931.5 MeV shortcut directly for nuclear problems.',
          '<b>Expecting measurable mass loss in chemical/mechanical events.</b> The mass change there is far below detection. <i>E</i> = <i>mc</i><sup>2</sup> matters in practice only at the nuclear scale.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For nuclear energy questions, skip SI units entirely — multiply the mass defect in atomic mass units by 931.5 MeV/u to get the answer in MeV in one line. For “energy equivalent” questions in joules, remember the anchor value: 1 kg ↔ 9 × 10<sup>16</sup> J, then just scale by the given mass.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Forms of energy', note: 'mechanical (K, U), heat (thermal), chemical, electrical, nuclear, light (radiant), sound' },
          {
            f: 'Law of conservation of energy',
            note: 'energy is neither created nor destroyed, only transformed; total energy of an isolated system is constant',
          },
          { f: 'Mechanical equivalent of heat', note: '1 cal = 4.186 J ≈ 4.2 J' },
          {
            f: 'Mass–energy equivalence',
            note: '<i>E</i> = <i>mc</i><sup>2</sup>, with <i>c</i> = 3 × 10<sup>8</sup> m/s, <i>c</i><sup>2</sup> = 9 × 10<sup>16</sup> m<sup>2</sup> s<sup>−2</sup>',
          },
          { f: 'Anchor value', note: '1 kg ↔ 9 × 10<sup>16</sup> J; <b>nuclear shortcut:</b> 1 u ↔ 931.5 MeV' },
          { f: 'From a mass change', note: 'Δ<i>E</i> = (Δ<i>m</i>)<i>c</i><sup>2</sup> — significant only in nuclear processes' },
          { f: 'Dimensions of energy', note: '[M L<sup>2</sup> T<sup>−2</sup>], SI unit <b>joule</b>' },
        ],
        aids: [
          '“Energy changes costume, never quantity.”',
          '“<i>E</i> = <i>mc</i><sup>2</sup> — don’t forget to square <i>c</i>.”',
          '“Measurable mass loss means nuclear.”',
        ],
      },
    ],
  },
  // ───────────────────────── Topic 06 · pp. 323–331 ─────────────────────────
  {
    n: '06',
    title: 'Power',
    kalam: 'That “rate of doing work” is what physics calls power.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Power is a high-frequency, low-difficulty scorer — you cannot afford to drop these marks. CBSE Boards ask the definition, units, and a clean <i>P</i> = <i>W</i>/<i>t</i> numerical (1–2 marks). NEET asks <b>1 question</b> almost every year, very often a <i>P</i> = <i>Fv</i> problem with a sneaky <b>km/h → m/s</b> unit conversion. JEE Main reliably asks <b>1–2 questions</b> combining power with force balance on an incline or pump problems. JEE Advanced favours the <b>constant-power kinematics</b> result (<i>v</i> ∝ √<i>t</i>, <i>x</i> ∝ <i>t</i><sup>3/2</sup>), which catches students who never derived it.',
      },
      {
        t: 'p',
        html: 'Two labourers are each asked to carry 100 bricks up to the first floor. Ramesh finishes in 10 minutes; Suresh takes 30. They did <b>exactly the same work</b> — same bricks, same height, same energy transferred. So what’s different? Speed. Ramesh worked three times faster. That “rate of doing work” is what physics calls <b>power.</b><br><br>This is the single idea you must hold onto: <b>power is not about how much work you do, it’s about how fast you do it.</b> Two engines that both lift a lift-car to the tenth floor do identical work against gravity; the more powerful one simply gets there sooner. Energy answers “how much?”; power answers “how quickly?”.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine two taps filling identical buckets. Both eventually deliver the same litres of water (the same “work”), but the wide-open tap fills the bucket in seconds while the dripping tap takes an hour. The flow rate of the tap is the analogy for power — litres per second versus joules per second. A 100-watt motor pours out 100 joules of energy every second; a 2000-watt motor pours out 2000 joules every second and so finishes any given job twenty times faster.',
      },
      {
        t: 'p',
        html: 'Now, work gets done as a force pushes something along. If you do that pushing quickly, you’re powerful; slowly, less so. There are two ways to package this. Over a whole job, we care about the <b>average power</b> — total work divided by total time. But at any single instant, the rate can be changing (a car accelerates, its engine delivering more power as it speeds up), so we also need <b>instantaneous power</b> — the rate right now. A sprinter, for example, might average 400 W over a race, yet hit a peak instantaneous output far higher during the explosive start and far lower while coasting — the average smooths over a story that the instantaneous value tells moment by moment.',
      },
      {
        t: 'p',
        html: 'Here’s the most useful insight in the whole sub-topic. Instantaneous power can be written as force times velocity:<br><i>P</i> = <i>F⃗</i> · <i>v⃗</i> = <i>Fv</i> cos <i>θ</i>.<br>Why? Because in a tiny time d<i>t</i> the object moves d<i>x</i> = <i>v</i> d<i>t</i>, so the little bit of work is d<i>W</i> = <i>F</i> d<i>x</i> = <i>Fv</i> d<i>t</i>, and dividing by d<i>t</i> gives <i>P</i> = <i>Fv</i>. This formula is gold: it tells you that to deliver power, you need both force and motion. A weightlifter straining to hold a barbell perfectly still delivers <b>zero</b> power (no velocity, just like he did zero work) — however much his muscles burn. And the cos <i>θ</i> reminds us only the part of the force along the velocity delivers power; a sideways force is powerless.',
      },
      {
        t: 'p',
        html: 'This also explains an everyday fact: a car’s engine has a maximum power. Since <i>P</i> = <i>Fv</i>, at high speed (large <i>v</i>) the available pushing force <i>F</i> = <i>P</i>/<i>v</i> shrinks — which is exactly why your car accelerates briskly at low speeds but struggles to gain the last few km/h near its top speed. Same engine power, but it’s spread over a faster motion, leaving less force to push harder.<br><br>And just as work can be negative, <b>power can be negative</b> too. When you brake, the braking force points opposite to the velocity (<i>θ</i> = 180°, cos <i>θ</i> = −1), so <i>P</i> = <i>Fv</i> cos <i>θ</i> is negative — the brakes are removing energy from the car at some rate (and dumping it as heat in the brake pads). Positive power feeds energy in; negative power drains it out. The sign of the power tells you which way energy is flowing.',
      },
      {
        t: 'p',
        html: 'A quick word on the units, because they have a charming history that makes them stick. The SI unit, the <b>watt</b>, honours James Watt, who improved the steam engine during the Industrial Revolution. To sell his engines, Watt needed to tell buyers how many horses each could replace — so he measured how fast a strong horse could do work and coined the <b>horsepower</b>. That’s why 1 hp ≈ 746 W: it’s literally an estimate of one hard-working horse’s output. When a bike is advertised as “15 hp,” it’s claiming the muscle of fifteen horses. Keeping this picture in mind makes the otherwise-arbitrary number 746 easy to recall.',
      },
      { t: 'fig', id: 'p11-05-fig-5.5' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>1. <i>P</i> = <i>Fv</i> gives instantaneous power; using it with an average velocity gives average power only if the force is constant.<br>2. Power is a <b>scalar</b> (it’s a dot product of two vectors), but it can be negative — a braking force delivers negative power, removing energy.<br>3. Don’t confuse the <b>kilowatt-hour</b> (a unit of energy, = 3.6 × 10<sup>6</sup> J) with the <b>kilowatt</b> (a unit of power). Your electricity bill charges for energy (kWh), not power.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Average power',
        main: '<i>P</i><sub>avg</sub> = <i>W</i><sub>total</sub>/<i>t</i><sub>total</sub> = Δ<i>W</i>/Δ<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Instantaneous power',
        main: '<i>P</i> = d<i>W</i>/d<i>t</i> = <i>F⃗</i> · <i>v⃗</i> = <i>Fv</i> cos <i>θ</i>',
        legend: ['<i>θ</i> = angle between the force and the velocity'],
        note: null,
      },
      {
        t: 'table',
        title: 'Quantity reference table',
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Power', '<i>P</i>', 'watt (W) = J/s', '[M<sup>1</sup> L<sup>2</sup> T<sup>−3</sup>]'],
          ['Work / Energy', '<i>W</i>', 'joule (J)', '[M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>]'],
          ['Time', '<i>t</i>', 'second (s)', '[M<sup>0</sup> L<sup>0</sup> T<sup>1</sup>]'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Useful unit relations',
        main: '1 watt = 1 J/s<br>1 horsepower (hp) = 746 W<br>1 kWh = 3.6 × 10<sup>6</sup> J (energy)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'The kilowatt-hour deserves a second look because it trips up so many students: it is power × time = energy, not power. A 2 kW heater run for 3 hours consumes 2 × 3 = 6 kWh of energy, which in joules is 6 × 3.6 × 10<sup>6</sup> = 2.16 × 10<sup>7</sup> J. This is exactly what your electricity meter records and bills — “units” of energy, each unit being one kWh.',
      },
      {
        t: 'p',
        html: '<b>Graphical relations:</b><br>• The <b>area under a power–time (<i>P</i>–<i>t</i>) graph</b> gives the work done: <i>W</i> = ∫ <i>P</i> d<i>t</i>.<br>• The <b>slope of a work–time (<i>W</i>–<i>t</i>) graph</b> gives the instantaneous power.',
      },
      {
        t: 'p',
        html: '<b>Standard results worth memorising:</b><br>• A machine lifting mass <i>m</i> at constant velocity <i>v</i>: <i>P</i> = <i>mgv</i>.<br>• A vehicle moving at constant velocity against a resistive force <i>F</i><sub>res</sub>: <i>P</i> = <i>F</i><sub>res</sub><i>v</i>.<br>• For motion from rest under a constant force: <i>P</i><sub>avg</sub> = ½<i>P</i><sub>instantaneous</sub> (at the final instant).',
      },

      { t: 'part', title: 'Key derivations and procedures' },
      {
        t: 'p',
        html: '<b>(A) Motion under constant power (the JEE Advanced favourite)</b><br><b>Setup:</b> A particle of mass <i>m</i> starts from rest and is driven by a constant power <i>P</i>. Find how speed and distance grow with time.<br><br><b>Step 1 — Power is the rate of change of kinetic energy.</b> Since all the delivered power goes into kinetic energy here,<br><i>P</i> = d<i>K</i>/d<i>t</i> ⇒ <i>K</i> = <i>Pt</i>   (integrating, with <i>K</i> = 0 at <i>t</i> = 0).<br>Why: constant <i>P</i> means energy is fed in at a steady rate, so the kinetic energy simply accumulates linearly with time.<br><br><b>Step 2 — Solve for speed:</b><br>½<i>mv</i><sup>2</sup> = <i>Pt</i> ⇒ <i>v</i> = √(2<i>Pt</i>/<i>m</i>) ∝ √<i>t</i><br>So speed grows as the square root of time — not linearly. The particle speeds up rapidly at first, then more sluggishly (consistent with the “less force at high speed” idea from the Concept intuition).<br><br><b>Step 3 — Integrate speed to get distance:</b><br><i>x</i> = ∫<sub>0</sub><sup><i>t</i></sup> <i>v</i> d<i>t</i> = √(2<i>P</i>/<i>m</i>) ∫<sub>0</sub><sup><i>t</i></sup> <i>t</i><sup>1/2</sup> d<i>t</i> = √(2<i>P</i>/<i>m</i>) · (2/3)<i>t</i><sup>3/2</sup><br><i>x</i> = (2/3)√(2<i>P</i>/<i>m</i>) <i>t</i><sup>3/2</sup> ∝ <i>t</i><sup>3/2</sup><br>Memorise the two scalings — <i>v</i> ∝ √<i>t</i> and <i>x</i> ∝ <i>t</i><sup>3/2</sup> — they answer a whole family of exam questions instantly.',
      },
      {
        t: 'proc',
        title: '(B) Procedure — choosing average vs instantaneous power',
        steps: [
          '<b>Read what’s asked.</b> “Total/over the whole trip/on average” → average power, <i>W</i><sub>total</sub>/<i>t</i><sub>total</sub>. “At this moment/at <i>t</i> = …/when speed is …” → instantaneous power, <i>F⃗</i> · <i>v⃗</i>.',
          '<b>For instantaneous power, find the force and the velocity at that instant</b> and take their dot product (mind the angle <i>θ</i>).',
          '<b>For “constant velocity” problems, set the driving force equal to the total opposing force</b> (no net force, since <i>a</i> = 0), then use <i>P</i> = <i>F</i><sub>drive</sub><i>v</i>.',
          '<b>Always check units before multiplying</b> — convert km/h to m/s (÷3.6) and remember 1 hp = 746 W.',
        ],
      },
      {
        t: 'p',
        html: '<b>(C) Power in mass-delivery systems (pumps, streams, machine guns)</b><br>A whole class of JEE problems involves a machine that throws mass at a steady rate — a pump ejecting water, a hose hitting a wall, a gun firing bullets, sand falling on a conveyor belt. The trick is to think in terms of <b>energy delivered per unit time.</b><br><br>Suppose mass is delivered at a rate d<i>m</i>/d<i>t</i> = <i>μ</i> (in kg/s), each bit leaving with speed <i>v</i>. The kinetic energy handed out per second is the power:<br><i>P</i> = d/d<i>t</i> (½<i>mv</i><sup>2</sup>) = ½<i>μv</i><sup>2</sup>.<br>If the machine also lifts the mass through a height <i>h</i> before ejecting it (a pump raising water from a well), add the gravitational rate:<br><i>P</i> = <i>μ</i>(<i>gh</i> + ½<i>v</i><sup>2</sup>).<br>For a machine gun firing <i>n</i> bullets of mass <i>m</i> each in time <i>t</i>, the same logic gives <i>P</i> = <i>n</i>(½<i>mv</i><sup>2</sup>)/<i>t</i>. The recurring idea: <b>identify the energy given to each unit of mass, then multiply by how many units leave per second.</b><br><br>Quick illustration: a hose ejects water at <i>μ</i> = 5 kg/s with speed <i>v</i> = 20 m/s onto a wall. The power the pump must supply just to give this water its kinetic energy is <i>P</i> = ½<i>μv</i><sup>2</sup> = ½(5)(20)<sup>2</sup> = ½(5)(400) = 1000 W. If the same pump first lifted that water 4 m from a sump, you would add <i>μgh</i> = 5 × 10 × 4 = 200 W, for 1200 W total. Notice how the two energy “costs” — lifting and launching — simply add.',
      },
      {
        t: 'p',
        html: '<b>(D) A handy result — average is half the final power</b><br>For a body starting from rest under a constant force, the velocity rises linearly (<i>v</i> = <i>at</i>) while the instantaneous power <i>P</i> = <i>Fv</i> rises linearly too. A quantity that climbs steadily from zero averages to half its final value, so<br><i>P</i><sub>avg</sub> = ½<i>P</i><sub>instantaneous (final)</sub>.<br>This one-liner lets you jump between the two without integrating — useful in MCQs.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A crane lifts a load of 200 kg to a height of 15 m in 30 s at a steady rate. Calculate the average power developed by the crane. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          '<b>Given:</b> <i>m</i> = 200 kg, <i>h</i> = 15 m, <i>t</i> = 30 s.',
          '<b>Work done against gravity:</b><br><i>W</i> = <i>mgh</i> = (200)(10)(15) = 30000 J',
          '<b>Average power:</b><br><i>P</i><sub>avg</sub> = <i>W</i>/<i>t</i> = 30000/30 = 1000 W = 1 kW',
          '<b>Comment:</b> The method has three steps — work first, then divide by time, then state the unit. The crane delivers one kilowatt of mechanical power. As a quick cross-check in familiar units, 1000 W ÷ 746 ≈ 1.34 hp — about the rating of a small workshop motor, which is physically sensible for this load.',
        ],
        ans: '1000 W = 1 kW',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A car engine keeps the car moving at a constant speed of 72 km/h against a total resistive force of 800 N. The power developed by the engine is: (a) 16 kW (b) 57.6 kW (c) 16 W (d) 11.1 kW',
        steps: [
          '<b>The trap:</b> Students plug 72 straight into <i>P</i> = <i>Fv</i> and get 800 × 72 = 57600 W = 57.6 kW — option (b), the tempting wrong answer.',
          '<b>The fast reasoning:</b> Power formulas need SI units, so <b>convert first</b>: 72 km/h = 72/3.6 = 20 m/s. At constant speed the engine force just balances the resistance, so <i>F</i> = 800 N. Then<br><i>P</i> = <i>Fv</i> = 800 × 20 = 16000 W = 16 kW.',
        ],
        ans: '(a) 16 kW. Speed tip: the instant you see km/h in a power or energy problem, divide by 3.6 before doing anything else. This single habit saves a guaranteed mark in NEET.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A car of mass 1000 kg climbs a road inclined at 1 in 10 (i.e. sin <i>θ</i> = 0.1) at a constant speed of 20 m/s. A constant friction force of 500 N opposes the motion. Find the power developed by the engine. Take <i>g</i> = 10 m/s<sup>2</sup>. (Combines: force balance on an incline + power.)',
        steps: [
          '<b>Step 1 — Force the engine must supply</b> (constant speed ⇒ zero acceleration ⇒ engine force balances gravity-component plus friction):<br><i>F</i><sub>engine</sub> = <i>mg</i> sin <i>θ</i> + <i>f</i> = (1000)(10)(0.1) + 500 = 1000 + 500 = 1500 N',
          '<b>Step 2 — Power at this constant speed:</b><br><i>P</i> = <i>F</i><sub>engine</sub><i>v</i> = 1500 × 20 = 30000 W = 30 kW',
          '<b>Why this is JEE Main:</b> you can’t find the power without first resolving forces along the incline — two concepts stitched together. A common error is to forget the friction term (giving 20 kW) or the gravity-component term (giving 10 kW).',
        ],
        ans: '30 kW',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle of mass 2 kg, initially at rest, is acted upon by a constant power source of 12 W. (a) Find its speed at <i>t</i> = 3 s. (b) Find the distance it has travelled in this time. (Assume all the power goes into kinetic energy.)',
        steps: [
          '<b>(a) Speed at <i>t</i> = 3 s.</b> Since power is constant and feeds kinetic energy, <i>K</i> = <i>Pt</i>:<br>½<i>mv</i><sup>2</sup> = <i>Pt</i> ⇒ ½(2)<i>v</i><sup>2</sup> = (12)(3) = 36 ⇒ <i>v</i><sup>2</sup> = 36<br><i>v</i> = 6 m/s',
          '<b>(b) Distance travelled.</b> Using the constant-power result derived above:<br><i>x</i> = (2/3)√(2<i>P</i>/<i>m</i>) <i>t</i><sup>3/2</sup> = (2/3)√(2(12)/2) (3)<sup>3/2</sup> = (2/3)√12 (3√3)',
          'Now √12 = 2√3, so<br><i>x</i> = (2/3)(2√3)(3√3) = (2/3)(2 × 3 × 3) = (2/3)(18) = 12 m',
          '<b>Why this is JEE Advanced:</b> the constant-power condition (not constant force) forces you to integrate — <i>v</i> comes from energy accumulation, and <i>x</i> from integrating <i>v</i> ∝ √<i>t</i>. Students who reflexively use <i>v</i> = <i>at</i> or <i>s</i> = ½<i>at</i><sup>2</sup> (constant-acceleration formulas) get it wrong, because under constant power the acceleration is not constant. To see this explicitly, differentiate <i>v</i> = √(2<i>Pt</i>/<i>m</i>): the acceleration <i>a</i> = d<i>v</i>/d<i>t</i> = √(<i>P</i>/(2<i>mt</i>)) actually decreases with time (it blows up at <i>t</i> = 0 and fades thereafter). That is the mathematical fingerprint of a constant-power drive — huge initial push, gently easing off — and it’s exactly why the standard kinematic equations don’t apply.',
        ],
        ans: '<i>v</i> = 6 m/s;   12 m',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A water pump raises 100 kg of water to a tank 20 m above in 25 s. Find the power of the pump. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '800 W',
          },
          {
            q: '[NEET] An engine of power 10 kW pulls a train at a constant speed of 5 m/s. Find the tractive (pulling) force exerted.',
            a: '2000 N',
          },
          {
            q: '[JEE Main] A vehicle of mass 800 kg ascends an incline of 1 in 20 (sin <i>θ</i> = 0.05) at a constant 15 m/s against a resistive force of 300 N. Find the engine power. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '10.5 kW',
          },
          {
            q: '[JEE Main] A pump lifts 600 kg of water per minute from a depth of 25 m and ejects it with a speed of 10 m/s. Find the power of the pump (account for both lifting and the kinetic energy of the ejected water; <i>g</i> = 10 m/s<sup>2</sup>).',
            a: '3 kW (mass rate 10 kg/s; <i>P</i> = 10 × (<i>gh</i> + ½<i>v</i><sup>2</sup>) = 10 × (250 + 50))',
          },
          {
            q: '[JEE Advanced] A particle of mass 1 kg starts from rest under a constant power of 9 W. Find (a) its speed at <i>t</i> = 2 s and (b) the distance it has covered by then.',
            a: '(a) 6 m/s, (b) 8 m',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The dimensional formula of power is:',
        opts: [
          {
            label: '[M L<sup>2</sup> T<sup>−2</sup>]',
            nudge: '(a) is the dimension of work/energy — the most common slip, forgetting the extra division by time.',
          },
          { label: '[M L<sup>2</sup> T<sup>−3</sup>]', nudge: null },
          { label: '[M L T<sup>−2</sup>]', nudge: '(c) is force.' },
          {
            label: '[M L<sup>2</sup> T<sup>−1</sup>]',
            nudge: '(d) is angular momentum / action.',
          },
        ],
        correct: 1,
        solution: 'Power = work/time = [M L<sup>2</sup> T<sup>−2</sup>]/[T] = [M L<sup>2</sup> T<sup>−3</sup>]. Always carry the “per second” through.',
      },
      {
        t: 'mcq',
        q: 'A body starts from rest and moves under a constant force. Its instantaneous power:',
        opts: [
          {
            label: 'remains constant',
            nudge: '(a) is the classic conceptual error — assuming “constant force” means “constant power.” It doesn’t: as the body speeds up, the same force delivers more power.',
          },
          { label: 'increases linearly with time', nudge: null },
          { label: 'increases as the square of time', nudge: '(c) and (d) misread the linear <i>v</i>–<i>t</i> dependence.' },
          { label: 'decreases with time', nudge: '(c) and (d) misread the linear <i>v</i>–<i>t</i> dependence.' },
        ],
        correct: 1,
        solution: 'With constant force, <i>v</i> = <i>at</i>, so <i>P</i> = <i>Fv</i> = <i>F</i>(<i>at</i>) = (<i>Fa</i>)<i>t</i> ∝ <i>t</i>.',
      },
      {
        t: 'mcq',
        q: 'One horsepower is approximately equal to:',
        opts: [
          { label: '746 W', nudge: null },
          {
            label: '550 W',
            nudge: '(b) is the value in ft·lb/s (the imperial definition), not watts.',
          },
          { label: '1000 W', nudge: '(c) confuses hp with the kilowatt.' },
          { label: '100 W', nudge: '(d) has no basis.' },
        ],
        correct: 0,
        solution: 'This is a standard defined conversion you should simply know. Memorise: <b>1 hp ≈ 746 W</b>.',
      },
      {
        t: 'mcq',
        q: 'A particle starts from rest and moves under constant power. Its speed varies with time as:',
        opts: [
          {
            label: '<i>v</i> ∝ <i>t</i>',
            nudge: '(a) is the constant-force answer (<i>v</i> = <i>at</i>) — the trap for students who don’t distinguish constant force from constant power.',
          },
          { label: '<i>v</i> ∝ <i>t</i><sup>2</sup>', nudge: '(b) has no basis.' },
          { label: '<i>v</i> ∝ √<i>t</i>', nudge: null },
          {
            label: '<i>v</i> ∝ <i>t</i><sup>3/2</sup>',
            nudge: '(d) is actually the distance dependence (<i>x</i> ∝ <i>t</i><sup>3/2</sup>), a tempting mismatch.',
          },
        ],
        correct: 2,
        solution: 'From <i>K</i> = <i>Pt</i>, ½<i>mv</i><sup>2</sup> = <i>Pt</i> ⇒ <i>v</i> = √(2<i>Pt</i>/<i>m</i>) ∝ √<i>t</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing power with work/energy.</b> A more powerful machine does the same job faster — it doesn’t necessarily do more total work. Power is the rate; energy is the amount. Keep their dimensions distinct: power carries an extra T<sup>−1</sup>.',
          '<b>Forgetting unit conversions.</b> km/h must become m/s (÷3.6) before using <i>P</i> = <i>Fv</i>, and hp must become watts (×746). The kilowatt-hour is energy, not power — never mix kWh into a <i>P</i> = <i>Fv</i> calculation.',
          '<b>Assuming constant force means constant power.</b> Since <i>P</i> = <i>Fv</i>, a constant force delivers growing power as the object accelerates. This single misconception drives several MCQ traps.',
          '<b>Dropping cos <i>θ</i> in <i>P</i> = <i>F⃗</i> · <i>v⃗</i>.</b> Only the force component along the velocity delivers power. A force perpendicular to the motion (like the normal reaction, or centripetal force) delivers zero power.',
          '<b>Mixing up average and instantaneous power.</b> <i>P</i> = <i>Fv</i> at a chosen instant gives instantaneous power; dividing total work by total time gives average power. They coincide only when the power is constant. In a constant-force, from-rest problem, the final instantaneous power is twice the average — don’t quote one when the question wants the other.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For “constant speed” problems, skip Newton’s laws — set the driving force equal to the total opposing force and write <i>P</i> = <i>F</i><sub>opposing</sub> × <i>v</i> directly. For “constant power from rest” problems, recall the two memorised scalings, <i>v</i> = √(2<i>Pt</i>/<i>m</i>) and <i>x</i> ∝ <i>t</i><sup>3/2</sup>, instead of re-deriving. And whenever a body moves at constant velocity, its kinetic energy isn’t changing, so all the engine’s power goes into fighting resistance (and, on a slope, into raising potential energy) — a quick sanity anchor. For pump, hose, or machine-gun problems, go straight to “energy per unit mass × mass per second” rather than tracking individual forces — it collapses an intimidating problem into one line.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Definition', note: 'power = rate of doing work (rate of energy transfer). <b>Scalar.</b>' },
          { f: 'Average power', note: '<i>P</i><sub>avg</sub> = <i>W</i><sub>total</sub>/<i>t</i><sub>total</sub>' },
          { f: 'Instantaneous power', note: '<i>P</i> = d<i>W</i>/d<i>t</i> = <i>F⃗</i> · <i>v⃗</i> = <i>Fv</i> cos <i>θ</i>' },
          { f: 'Dimensions', note: '[M L<sup>2</sup> T<sup>−3</sup>]; SI unit <b>watt</b> (W) = J/s; 1 hp = 746 W' },
          { f: 'Watch the units', note: '1 kWh = 3.6 × 10<sup>6</sup> J is energy, not power; km/h → m/s by ÷3.6' },
          { f: 'Constant velocity', note: '<i>P</i> = <i>F</i><sub>resist</sub><i>v</i>; crane/lift: <i>P</i> = <i>mgv</i>' },
          {
            f: 'Constant power from rest',
            note: '<i>K</i> = <i>Pt</i>, <i>v</i> = √(2<i>Pt</i>/<i>m</i>) ∝ √<i>t</i>, <i>x</i> ∝ <i>t</i><sup>3/2</sup>',
          },
          { f: 'Graphs', note: 'area under <i>P</i>–<i>t</i> = work; slope of <i>W</i>–<i>t</i> = instantaneous power' },
        ],
        aids: [
          '“Power = how FAST you work, not how MUCH.”',
          '“Constant force ≠ constant power (<i>P</i> grows with <i>v</i>).”',
          '“See km/h? Divide by 3.6 first.”',
        ],
      },
    ],
  },
];
