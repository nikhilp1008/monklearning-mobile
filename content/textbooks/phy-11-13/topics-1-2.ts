import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Topics 01 and 02: pp. 886–899 of the Class 11 Physics Master
 * Reference, word for word: SHM Concepts and Kinematics (pp. 886–892) and
 * SHM Energy (pp. 893–899). The chapter’s title page and contents
 * (pp. 883–885) are not copied. Each is split at its Sections 1 to 8.
 * Figure 13.1 (caption p. 895, drawn on p. 896) is redrawn in
 * lib/diagrams/physics-11-13.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 886–892 ─────────────────────────
  {
    n: '01',
    title: 'SHM Concepts and Kinematics',
    kalam: 'Simple Harmonic Motion (SHM) is the cleanest, most fundamental kind of oscillation.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the bedrock of the entire Oscillations chapter. JEE Main asks 1–2 direct questions every year on the <i>x</i>–<i>v</i>–<i>a</i> relations and phase. NEET reliably places 1 question on identifying SHM or on max-speed/max-acceleration. JEE Advanced rarely asks it in isolation but assumes perfect command of this kinematics inside energy, spring, and pendulum problems. CBSE Boards expect the definition, the <i>a</i> = −<i>ω</i><sup>2</sup><i>x</i> relation, and a clean derivation of velocity from displacement.',
      },
      {
        t: 'p',
        html: 'Think of the last time you sat on a jhula (swing) in a courtyard. Someone gives you a gentle push, and you sail forward. But you don’t fly off — you slow down, stop, and come right back. Push too far one way and something always pulls you back toward the middle. That “something always pulling you back home” is the single most important idea in this entire chapter.',
      },
      {
        t: 'p',
        html: 'Let us build it up slowly. A motion that repeats itself after a fixed interval of time is called <b>periodic motion</b> — the hands of a wall clock, the Earth around the Sun, the needle of your mother’s sewing machine. Now, among periodic motions, some go to-and-fro about a central point: the swing, a tuning fork’s prong, a loaded truck bouncing on its springs after hitting an Indian-road pothole. This back-and-forth, repeating, about-a-fixed-point motion is called an <b>oscillation</b> (or vibration).',
      },
      {
        t: 'p',
        html: '<b>Simple Harmonic Motion (SHM)</b> is the cleanest, most fundamental kind of oscillation. It happens whenever the force trying to drag the body back to the centre is directly proportional to how far the body has strayed. Stray a little, get pulled a little; stray twice as far, get pulled twice as hard. In symbols, the <b>restoring force</b> obeys<br><i>F</i> = −<i>kx</i><br>The minus sign is the soul of SHM. It says: the force always points opposite to the displacement — always back toward the mean position. When you’re to the right, it pulls left; when you’re to the left, it pushes right. It never lets you settle anywhere except the centre, and it never lets you stay at the centre because you arrive there with speed.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a rubber band tied to your finger and stretched. The further you pull, the harder it tugs back, and the tug is always toward your finger, never away. A particle in SHM lives its whole life inside such a tug. At the mean position the tug is zero (so it speeds through fastest there), and at the turning points the tug is largest (so it momentarily freezes and reverses). Speed is maximum where force is zero; speed is zero where force is maximum. Hold that picture — almost every SHM question is a variation of it.',
      },
      {
        t: 'p',
        html: 'Because force is mass times acceleration, <i>F</i> = −<i>kx</i> immediately becomes the <b>defining kinematic signature</b> of SHM:<br><i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>   (<i>ω</i><sup>2</sup> = <i>k</i>/<i>m</i>)<br>Read this as the official “ID card” of SHM. Any motion whose acceleration is (i) proportional to displacement and (ii) opposite in direction (the minus sign) is SHM — no exceptions, no matter what dressing the problem wears.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> SHM is an idealisation, and exams love to test where it breaks:<br>• The restoring force must be <b>exactly linear</b> in displacement (<i>F</i> ∝ <i>x</i>). A real spring obeys this only within its <b>elastic limit</b> (Hooke’s law region). Stretch it too far and the motion is no longer simple harmonic.<br>• A <b>simple pendulum</b> performs SHM only for <b>small angular amplitudes</b> (roughly <i>θ</i> < 10°), because we approximate sin <i>θ</i> ≈ <i>θ</i>. At large swings, the period itself starts depending on amplitude and the motion ceases to be simple harmonic.<br>• “Ideal” SHM assumes <b>no damping</b> — constant amplitude forever. Real oscillations lose energy to friction and air resistance, so amplitude slowly decays. We study that under damped oscillations later.<br>• The motion must be about a <b>single fixed mean position</b> with a single angular frequency. A sum of two different frequencies (in a rational ratio) is periodic but not simple harmonic.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Displacement (general equation of SHM)',
        main: '<i>x</i>(<i>t</i>) = <i>A</i> sin(<i>ωt</i> + <i>φ</i>)',
        legend: [],
        note: '(<i>A</i> cos(<i>ωt</i> + <i>φ</i>) is equally valid — it is just SHM started a quarter-cycle earlier.)',
      },
      {
        t: 'formula',
        kicker: 'Velocity',
        main: '<i>v</i>(<i>t</i>) = d<i>x</i>/d<i>t</i> = <i>Aω</i> cos(<i>ωt</i> + <i>φ</i>) ⇒ <i>v</i> = ±<i>ω</i>√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Acceleration',
        main: '<i>a</i>(<i>t</i>) = d<i>v</i>/d<i>t</i> = −<i>Aω</i><sup>2</sup> sin(<i>ωt</i> + <i>φ</i>) = −<i>ω</i><sup>2</sup><i>x</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angular frequency, period, frequency',
        main: '<i>ω</i> = 2π/<i>T</i> = 2π<i>f</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Maximum values',
        main: '<i>v</i><sub>max</sub> = <i>Aω</i> (at mean position, <i>x</i> = 0),<br><i>a</i><sub>max</sub> = <i>Aω</i><sup>2</sup> (at extremes, <i>x</i> = ±<i>A</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation and definitions:</b><br>• <i>x</i> — <b>Displacement:</b> position measured from the mean position. SI unit: m. Dimensional formula: [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>].<br>• <i>A</i> — <b>Amplitude:</b> maximum magnitude of displacement, |<i>x</i>|<sub>max</sub>. SI unit: m. [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>].<br>• <i>T</i> — <b>Time Period:</b> smallest time for one complete oscillation. SI unit: s. [M<sup>0</sup> L<sup>0</sup> T<sup>1</sup>].<br>• <i>f</i> (or <i>n</i>) — <b>Frequency:</b> number of oscillations per second, <i>f</i> = 1/<i>T</i>. SI unit: hertz (Hz). [M<sup>0</sup> L<sup>0</sup> T<sup>−1</sup>].<br>• <i>ω</i> — <b>Angular frequency:</b> rate of phase change. SI unit: rad s<sup>−1</sup>. [M<sup>0</sup> L<sup>0</sup> T<sup>−1</sup>].<br>• (<i>ωt</i> + <i>φ</i>) — <b>Phase:</b> the argument of the sine; it fixes the state (position and direction) of the particle. Dimensionless: [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>].<br>• <i>φ</i> — <b>Phase constant / initial phase / epoch:</b> the phase at <i>t</i> = 0. Dimensionless.<br>• <i>k</i> — <b>Force constant:</b> restoring force per unit displacement. SI unit: N m<sup>−1</sup>. [M<sup>1</sup> L<sup>0</sup> T<sup>−2</sup>].',
      },
      {
        t: 'p',
        html: '<b>A relation worth memorising:</b> dividing <i>a</i><sub>max</sub> by <i>v</i><sub>max</sub> gives <i>ω</i>, while <i>v</i><sub>max</sub><sup>2</sup>/<i>a</i><sub>max</sub> gives <i>A</i>. These two shortcuts crack a surprising number of objective questions in seconds.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      { t: 'p', html: '<b>Derivation 1 — Velocity and acceleration from the displacement equation.</b>' },
      {
        t: 'p',
        html: '<b>Assumption:</b> Let a particle execute SHM along a straight line about the mean position, described by<br><i>x</i> = <i>A</i> sin(<i>ωt</i> + <i>φ</i>).',
      },
      {
        t: 'p',
        html: 'Velocity is the time-rate of change of displacement, so we differentiate once. The amplitude <i>A</i> and phase constant <i>φ</i> are constants:<br><i>v</i> = d<i>x</i>/d<i>t</i> = <i>Aω</i> cos(<i>ωt</i> + <i>φ</i>).   (i)',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> velocity carries a cosine while displacement carries a sine. Since cosine peaks where sine is zero, the particle moves <b>fastest at the mean position</b> and is <b>momentarily at rest at the extremes</b> — exactly the swing intuition from Concept intuition.',
      },
      {
        t: 'p',
        html: 'Acceleration is the time-rate of change of velocity, so we differentiate once more:<br><i>a</i> = d<i>v</i>/d<i>t</i> = −<i>Aω</i><sup>2</sup> sin(<i>ωt</i> + <i>φ</i>).   (ii)<br>But <i>A</i> sin(<i>ωt</i> + <i>φ</i>) is just <i>x</i>, so<br><i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>.',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> this is why the motion is “simple harmonic” in the first place — acceleration is proportional to displacement and directed oppositely. The maths has handed back the defining property we started with, which is a good consistency check.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Velocity as a function of position, <i>v</i> = <i>ω</i>√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>).</b>',
      },
      {
        t: 'p',
        html: 'We want <i>v</i> in terms of <i>x</i> (time eliminated), because most problems give position, not time. From the equations above:<br><i>x</i>/<i>A</i> = sin(<i>ωt</i> + <i>φ</i>),   <i>v</i>/(<i>Aω</i>) = cos(<i>ωt</i> + <i>φ</i>).<br>Using the identity sin<sup>2</sup> <i>θ</i> + cos<sup>2</sup> <i>θ</i> = 1:<br><i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> + <i>v</i><sup>2</sup>/(<i>A</i><sup>2</sup><i>ω</i><sup>2</sup>) = 1.<br>Multiply through by <i>A</i><sup>2</sup><i>ω</i><sup>2</sup> and rearrange:<br><i>v</i><sup>2</sup> = <i>ω</i><sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) ⇒ <i>v</i> = ±<i>ω</i>√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> at <i>x</i> = 0 this gives <i>v</i> = <i>ωA</i> = <i>v</i><sub>max</sub> (fastest at the centre); at <i>x</i> = ±<i>A</i> it gives <i>v</i> = 0 (frozen at the turning points). The ± simply records that the particle passes each point once moving forward and once moving back.',
      },
      { t: 'p', html: '<b>Derivation 3 — Angular frequency from the force law.</b>' },
      {
        t: 'p',
        html: '<b>Assumption:</b> a particle of mass <i>m</i> feels a linear restoring force <i>F</i> = −<i>kx</i>. By Newton’s second law, <i>F</i> = <i>ma</i>, so<br><i>ma</i> = −<i>kx</i> ⇒ <i>a</i> = −(<i>k</i>/<i>m</i>) <i>x</i>.<br>Comparing this with the SHM signature <i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>, we read off<br><i>ω</i> = √(<i>k</i>/<i>m</i>),   <i>T</i> = 2π√(<i>m</i>/<i>k</i>).',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> a <b>stiffer</b> spring (large <i>k</i>) pulls harder and oscillates <b>faster</b>; a <b>heavier</b> mass (large <i>m</i>) is more sluggish and oscillates <b>slower</b>. The recipe — “write the net force, show it equals −(constant) × (displacement), read off <i>ω</i><sup>2</sup> as that constant” — is the universal procedure for finding the time period of any SHM system.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A particle executes SHM described by <i>x</i> = 0.05 sin(20π<i>t</i>) (all quantities in SI units). Find its amplitude, time period, frequency, maximum speed and maximum acceleration.',
        steps: [
          '<b>Given:</b> comparing with <i>x</i> = <i>A</i> sin(<i>ωt</i> + <i>φ</i>):<br><i>A</i> = 0.05 m,   <i>ω</i> = 20π rad s<sup>−1</sup>,   <i>φ</i> = 0.',
          '<b>Solution:</b><br><i>T</i> = 2π/<i>ω</i> = 2π/(20π),   <i>f</i> = 1/<i>T</i>.<br><i>v</i><sub>max</sub> = <i>Aω</i> = 0.05 × 20π = π.<br><i>a</i><sub>max</sub> = <i>Aω</i><sup>2</sup> = 0.05 × (20π)<sup>2</sup> = 20π<sup>2</sup>.',
          'Note the clean presentation: identify constants by comparison, substitute, attach units.',
        ],
        ans: '<i>A</i> = 5 cm, <i>T</i> = 0.1 s, <i>f</i> = 10 Hz, <i>v</i><sub>max</sub> ≈ 3.14 m s<sup>−1</sup>, <i>a</i><sub>max</sub> ≈ 197.4 m s<sup>−2</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A particle in SHM has a maximum speed of 8π cm s<sup>−1</sup> and a maximum acceleration of 16π<sup>2</sup> cm s<sup>−2</sup>. Find its amplitude and time period — in under thirty seconds.',
        steps: [
          '<b>The trap:</b> a student instinctively writes <i>v</i><sub>max</sub> = <i>Aω</i> and <i>a</i><sub>max</sub> = <i>Aω</i><sup>2</sup> and then tries to solve two messy equations. Don’t.',
          '<b>The shortcut:</b> divide and you isolate <i>ω</i> instantly; that is the whole game.<br><i>ω</i> = <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> = 16π<sup>2</sup>/(8π) = 2π rad s<sup>−1</sup> ⇒ <i>T</i> = 2π/<i>ω</i><br><i>A</i> = <i>v</i><sub>max</sub>/<i>ω</i> = 8π/(2π)',
          'The ratio <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> giving <i>ω</i> is the single most reused trick in NEET oscillation MCQs.',
        ],
        ans: '<i>A</i> = 4 cm, <i>T</i> = 1 s',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle executing SHM has speed 16 cm s<sup>−1</sup> when it is 3 cm from the mean position, and speed 12 cm s<sup>−1</sup> when it is 4 cm from the mean position. Find the amplitude and the period of oscillation.',
        steps: [
          '<b>Approach:</b> this links the position equation to the <i>v</i>–<i>x</i> relation <i>v</i> = <i>ω</i>√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>). Squaring removes the root and lets us eliminate the unknown <i>A</i> cleanly.',
          'At <i>x</i><sub>1</sub> = 3:<br>16<sup>2</sup> = <i>ω</i><sup>2</sup>(<i>A</i><sup>2</sup> − 3<sup>2</sup>) ⇒ 256 = <i>ω</i><sup>2</sup>(<i>A</i><sup>2</sup> − 9).   (1)',
          'At <i>x</i><sub>2</sub> = 4:<br>12<sup>2</sup> = <i>ω</i><sup>2</sup>(<i>A</i><sup>2</sup> − 4<sup>2</sup>) ⇒ 144 = <i>ω</i><sup>2</sup>(<i>A</i><sup>2</sup> − 16).   (2)',
          'Subtract (2) from (1):<br>256 − 144 = <i>ω</i><sup>2</sup>[(<i>A</i><sup>2</sup> − 9) − (<i>A</i><sup>2</sup> − 16)] ⇒ 112 = 7<i>ω</i><sup>2</sup> ⇒ <i>ω</i> = 4 rad s<sup>−1</sup>.',
          'Substitute back into (1): 256 = 16(<i>A</i><sup>2</sup> − 9) ⇒ <i>A</i><sup>2</sup> − 9 = 16<br><i>T</i> = 2π/<i>ω</i> = 2π/4',
          'The subtract-to-eliminate-<i>A</i> move is the standard route for any “two speeds at two positions” problem.',
        ],
        ans: '<i>A</i> = 5 cm, <i>T</i> = π/2 s',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle executes SHM of amplitude <i>A</i> and angular frequency <i>ω</i> along the <i>x</i>-axis about the origin. Prove that the fraction of one complete period during which the magnitude of its displacement is <b>less than</b> <i>A</i>/2 equals exactly 1/3.',
        steps: [
          '<b>Reasoning:</b> take <i>x</i> = <i>A</i> sin <i>θ</i> with <i>θ</i> = <i>ωt</i> sweeping from 0 to 2π over one period. The condition |<i>x</i>| < <i>A</i>/2 becomes |sin <i>θ</i>| < ½. We must find the total angular span of <i>θ</i> in [0, 2π] for which this holds, since time is proportional to <i>θ</i> (because <i>θ</i> = <i>ωt</i>, equal angles take equal times).',
          '|sin <i>θ</i>| < ½ is satisfied in three windows around the points where sin <i>θ</i> = 0 (i.e. near <i>θ</i> = 0, π, 2π — these are the mean-position crossings):<br><i>θ</i> ∈ [0, π/6] ∪ [5π/6, 7π/6] ∪ [11π/6, 2π].',
          'Total favourable angular span:<br>Δ<i>θ</i> = π/6 + (7π/6 − 5π/6) + (2π − 11π/6) = π/6 + 2π/6 + π/6 = 4π/6 = 2π/3.',
          'Since the full period corresponds to 2π,<br>Required fraction = Δ<i>θ</i>/(2π) = (2π/3)/(2π) = 1/3.   ■',
          '<b>Why it’s deep:</b> it forces you to abandon “plug into a formula” and instead reason about time-on-a-phase-circle. The inner zone |<i>x</i>| < <i>A</i>/2 is half the length of the path, yet the particle spends only one-third of the period there, because it moves fastest near the mean position and so lingers less per unit length; the outer half of the path takes the remaining two-thirds. The geometry and the kinematics conspire to give the clean 1/3.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A body in SHM has displacement <i>x</i> = 6 sin(4π<i>t</i> + π/3) cm. Write its amplitude, angular frequency, time period and initial phase.',
            a: '<i>A</i> = 6 cm, <i>ω</i> = 4π rad s<sup>−1</sup>, <i>T</i> = 0.5 s, <i>φ</i> = π/3.',
          },
          {
            q: '[NEET] The maximum acceleration of a particle in SHM is 0.5π<sup>2</sup> m s<sup>−2</sup> and its amplitude is 2 cm. Find its time period.',
            a: '<i>T</i> = 0.4 s.',
          },
          {
            q: '[JEE Main] A particle in SHM has speed <i>v</i> at displacement <i>x</i> and speed <i>v</i>/2 at displacement 2<i>x</i> (with 2<i>x</i> < <i>A</i>). Express the amplitude <i>A</i> in terms of <i>x</i>.',
            a: '<i>A</i> = √5 <i>x</i> (from 4 = (<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)/(<i>A</i><sup>2</sup> − 4<i>x</i><sup>2</sup>) ⇒ 3<i>A</i><sup>2</sup> = 15<i>x</i><sup>2</sup>).',
          },
          {
            q: '[JEE Main] A particle moves such that its acceleration is <i>a</i> = −16<i>x</i> (SI units), starting from rest at <i>x</i> = 5 cm. Find its speed as it passes the mean position.',
            a: '<i>v</i> = 0.20 m s<sup>−1</sup> (here <i>ω</i> = 4 rad s<sup>−1</sup>, <i>A</i> = 5 cm, so <i>v</i><sub>max</sub> = <i>ωA</i> = 4 × 0.05).',
          },
          {
            q: '[JEE Advanced] A particle starts from the mean position and moves in the positive direction with SHM of period <i>T</i>. Find the time it takes to travel from <i>x</i> = <i>A</i>/2 to <i>x</i> = <i>A</i> during this first quarter-cycle.',
            a: '<i>t</i> = <i>T</i>/6.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following functions of time represents simple harmonic motion?',
        opts: [
          { label: '<i>x</i> = sin(<i>ωt</i>) − cos(<i>ωt</i>)', nudge: null },
          {
            label: '<i>x</i> = sin<sup>3</sup>(<i>ωt</i>)',
            nudge: '<b>(B) is a trap:</b> using sin<sup>3</sup> <i>θ</i> = ¼(3 sin <i>θ</i> − sin 3<i>θ</i>), this is a superposition of two different frequencies (<i>ω</i> and 3<i>ω</i>) — periodic but not simple harmonic. Students who only check “does it oscillate?” fall for it.',
          },
          {
            label: '<i>x</i> = sin(<i>ωt</i>) + sin(2<i>ωt</i>) + sin(3<i>ωt</i>)',
            nudge: '<b>(C) is a trap:</b> three different frequencies; periodic but not SHM. Picked by those who assume “any sum of sines is SHM.”',
          },
          {
            label: '<i>x</i> = 1 + <i>ωt</i> + <i>ω</i><sup>2</sup><i>t</i><sup>2</sup>',
            nudge: '<b>(D) is a trap:</b> a polynomial in <i>t</i> grows without bound and never repeats — not even periodic. Chosen by students rushing without checking for repetition.',
          },
        ],
        correct: 0,
        solution: 'A sum (or difference) of a sine and a cosine of the same angular frequency can be written as a single sinusoid, <i>R</i> sin(<i>ωt</i> + <i>φ</i>), which satisfies <i>a</i> = −<i>ω</i><sup>2</sup><i>x</i> — genuine SHM.',
      },
      {
        t: 'mcq',
        q: 'In SHM, the velocity of the particle leads its displacement in phase by, and the acceleration leads the displacement by, respectively:',
        opts: [
          { label: 'π/2 and π', nudge: null },
          { label: 'π and π/2', nudge: '<b>(B)</b> swaps the two — a memory slip.' },
          {
            label: 'π/2 and π/2',
            nudge: '<b>(C)</b> wrongly treats acceleration like velocity; forgets that <i>a</i> = −<i>ω</i><sup>2</sup><i>x</i> is anti-phase, not quarter-phase.',
          },
          { label: '0 and π', nudge: '<b>(D)</b> confuses leading by π (acceleration) with zero lead.' },
        ],
        correct: 0,
        solution: 'With <i>x</i> = <i>A</i> sin(<i>ωt</i>), velocity <i>v</i> = <i>Aω</i> cos(<i>ωt</i>) = <i>Aω</i> sin(<i>ωt</i> + π/2), so velocity is ahead of displacement by π/2. Acceleration <i>a</i> = −<i>Aω</i><sup>2</sup> sin(<i>ωt</i>) = <i>Aω</i><sup>2</sup> sin(<i>ωt</i> + π), so acceleration is ahead of (in fact, opposite to) displacement by π.',
      },
      {
        t: 'mcq',
        q: 'For a particle in SHM, the graph of acceleration <i>a</i> against displacement <i>x</i> is:',
        opts: [
          {
            label: 'a parabola',
            nudge: '<b>(A)</b> mistakes it for an energy-vs-displacement graph (which is parabolic).',
          },
          { label: 'an ellipse', nudge: '<b>(B)</b> is the shape of the <i>v</i>–<i>x</i> graph, not the <i>a</i>–<i>x</i> graph.' },
          {
            label: 'a straight line of positive slope',
            nudge: '<b>(C)</b> gets the line right but ignores the all-important minus sign — the classic error.',
          },
          { label: 'a straight line of negative slope', nudge: null },
        ],
        correct: 3,
        solution: 'Since <i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>, the relation is linear in <i>x</i> with slope −<i>ω</i><sup>2</sup>, which is negative. The magnitude of the slope gives <i>ω</i><sup>2</sup>.',
      },
      {
        t: 'mcq',
        q: 'A particle in SHM has its kinetic energy maximum and its acceleration minimum at:',
        opts: [
          {
            label: 'the extreme positions',
            nudge: '<b>(A)</b> describes the opposite situation — at extremes, KE is zero and acceleration is maximum.',
          },
          { label: 'the mean position', nudge: null },
          {
            label: 'midway between mean and extreme',
            nudge: '<b>(C)</b> and <b>(D)</b> are distractors with no basis; KE-max and <i>a</i>-min always lock to the mean position regardless of amplitude.',
          },
          {
            label: 'it depends on amplitude',
            nudge: '<b>(C)</b> and <b>(D)</b> are distractors with no basis; KE-max and <i>a</i>-min always lock to the mean position regardless of amplitude.',
          },
        ],
        correct: 1,
        solution: 'At the mean position <i>x</i> = 0: speed is maximum (so KE is maximum) and <i>a</i> = −<i>ω</i><sup>2</sup><i>x</i> = 0 (acceleration is zero/minimum). These two facts coincide exactly at the centre.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Dropping the minus sign in <i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>.</b> The minus sign is the physics — it encodes “restoring.” Writing <i>a</i> = <i>ω</i><sup>2</sup><i>x</i> describes a runaway motion, not an oscillation. Always keep it.',
          '<b>Confusing “fastest” with “most accelerated.”</b> At the mean position speed is maximum but acceleration is zero; at the extremes speed is zero but acceleration is maximum. They are never maximum at the same place.',
          '<b>Assuming any periodic motion is SHM.</b> Earth orbiting the Sun is periodic but not SHM. A sum of two different frequencies (in a rational ratio) is periodic but not SHM. SHM demands a single frequency and a linear restoring force.',
          '<b>Mixing up <i>ω</i> (rad s<sup>−1</sup>) with <i>f</i> (Hz).</b> They differ by a factor of 2π. A huge fraction of numerical slips trace back to this. Sanity-check units: if the answer needs hertz, you should have divided by 2π somewhere.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “max-speed and max-acceleration given” problems, never solve simultaneous equations. Use <i>ω</i> = <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> and <i>A</i> = <i>v</i><sub>max</sub><sup>2</sup>/<i>a</i><sub>max</sub> directly. For “two speeds at two positions,” square <i>v</i> = <i>ω</i>√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) for each and subtract to eliminate <i>A</i> in one line.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'SHM ID card',
            note: '<i>a</i> = −<i>ω</i><sup>2</sup><i>x</i> — acceleration ∝ displacement, opposite in direction. If this holds, it’s SHM.',
          },
          {
            f: 'Displacement',
            note: '<i>x</i> = <i>A</i> sin(<i>ωt</i> + <i>φ</i>) → <b>Velocity:</b> <i>v</i> = <i>Aω</i> cos(<i>ωt</i> + <i>φ</i>) = ±<i>ω</i>√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) → <b>Acceleration:</b> <i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>.',
          },
          {
            f: 'Maxima',
            note: '<i>v</i><sub>max</sub> = <i>Aω</i> at mean position; <i>a</i><sub>max</sub> = <i>Aω</i><sup>2</sup> at extremes.',
          },
          {
            f: 'Links',
            note: '<i>ω</i> = 2π/<i>T</i> = 2π<i>f</i>; from a force law <i>F</i> = −<i>kx</i> ⇒ <i>ω</i> = √(<i>k</i>/<i>m</i>).',
          },
          {
            f: 'Instant shortcuts',
            note: '<i>ω</i> = <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub>, <i>A</i> = <i>v</i><sub>max</sub><sup>2</sup>/<i>a</i><sub>max</sub>.',
          },
          {
            f: 'Phase facts',
            note: 'velocity leads displacement by π/2; acceleration leads (is anti-phase to) displacement by π.',
          },
        ],
        aids: [
          '<b>Memory aid — “MAX at MEAN”:</b> speed is <b>M</b>aximum at the <b>M</b>ean; acceleration is maximum at the e<b>X</b>tremes. And remember the sign with “<i>a</i> opposes <i>x</i>” — acceleration always points home.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 893–899 ─────────────────────────
  {
    n: '02',
    title: 'SHM Energy',
    kalam: 'In SHM the restoring force is conservative (F = −kx), so as the particle moves, energy sloshes between two forms.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. JEE Main almost always carries 1–2 questions on <i>E</i> ∝ <i>A</i><sup>2</sup>, the position where kinetic and potential energies are equal, or the “double frequency” of the energy curves. NEET reliably places 1 question, usually on max-KE/max-PE locations or an energy ratio. JEE Advanced folds it into spring and graph problems and loves the time-average vs position-average subtlety. For CBSE Boards, the derivation of total energy <i>E</i> = ½<i>kA</i><sup>2</sup> is a standard 3-mark question.',
      },
      {
        t: 'p',
        html: 'Picture a marble rolling back and forth inside a smooth steel katori (bowl). At the very bottom it whizzes through fastest. As it climbs the side it slows, stops for an instant at the highest point it reaches, then rolls back down. Now ask a simple question: where did its speed go at the top, and where did it come from at the bottom? Nothing was lost — the energy simply changed costume. At the bottom it wore the costume of motion (kinetic energy); at the top it wore the costume of position (potential energy). This continuous changing of costumes, with the total never changing, is the entire story of energy in SHM.',
      },
      {
        t: 'p',
        html: 'In SHM the restoring force is conservative (<i>F</i> = −<i>kx</i>), so as the particle moves, energy sloshes between two forms:<br>• <b>Kinetic energy</b> <i>K</i> — the energy of motion, largest where the particle moves fastest.<br>• <b>Potential energy</b> <i>U</i> — the energy stored in the deformation (a stretched spring, a displaced bob), largest where the particle is farthest from the mean position.',
      },
      {
        t: 'p',
        html: 'At the <b>mean position</b> (<i>x</i> = 0) the particle moves fastest, so energy is <b>entirely kinetic</b> and <i>U</i> = 0. At the <b>extreme positions</b> (<i>x</i> = ±<i>A</i>) the particle is momentarily frozen, so energy is <b>entirely potential</b> and <i>K</i> = 0. Everywhere in between, the two trade off — one rises exactly as much as the other falls.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine your total savings is fixed at, say, ₹10,000, split between a current account (instantly spendable — that’s kinetic energy) and a fixed deposit (locked up — that’s potential energy). Money shuttles between the two accounts as the particle moves, but your net worth never changes. That fixed net worth is the <b>total mechanical energy</b>:<br><i>E</i> = <i>K</i> + <i>U</i> = ½<i>kA</i><sup>2</sup> = constant.',
      },
      {
        t: 'p',
        html: 'Two consequences flow from this and they are tested endlessly. First, <b>total energy depends on the square of amplitude</b>, <i>E</i> ∝ <i>A</i><sup>2</sup> — double the amplitude and the energy quadruples. Second, <b>the energy curves “blink” at twice the oscillation frequency</b>: in one full to-and-fro, the particle passes the fast mean position twice and the frozen extremes twice, so <i>K</i> peaks twice and <i>U</i> peaks twice per period. The energies oscillate with frequency 2<i>f</i>, i.e. period <i>T</i>/2 — a fact students forget under exam pressure.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• The result <i>E</i> = ½<i>kA</i><sup>2</sup> = constant holds only because the restoring force is <b>conservative and undamped</b>. With friction or air drag, energy leaks away and amplitude — hence <i>E</i> — decays over time.<br>• <i>U</i> is measured <b>relative to a chosen zero</b>, conventionally <i>U</i> = 0 at the mean position. If a different reference is chosen, a constant gets added to <i>U</i> (and to <i>E</i>), but all differences and the physics stay the same.<br>• These expressions describe <b>ideal linear SHM</b>. Beyond the elastic limit, or for a pendulum at large angles, the simple ½<i>kx</i><sup>2</sup> form of <i>U</i> no longer applies.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: 'Using <i>ω</i><sup>2</sup> = <i>k</i>/<i>m</i> and the kinematic results from Topic 01:',
      },
      {
        t: 'formula',
        kicker: 'Kinetic energy',
        main: '<i>K</i> = ½<i>mv</i><sup>2</sup> = ½<i>mω</i><sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) = ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup> cos<sup>2</sup>(<i>ωt</i> + <i>φ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Potential energy',
        main: '(taking <i>U</i> = 0 at the mean position):<br><i>U</i> = ½<i>kx</i><sup>2</sup> = ½<i>mω</i><sup>2</sup><i>x</i><sup>2</sup> = ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup> sin<sup>2</sup>(<i>ωt</i> + <i>φ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Total mechanical energy',
        main: '<i>E</i> = <i>K</i> + <i>U</i> = ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup> = ½<i>kA</i><sup>2</sup> (independent of <i>x</i> and <i>t</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Key derived relations',
        main: '<i>E</i> ∝ <i>A</i><sup>2</sup>,<br><i>E</i> ∝ <i>ω</i><sup>2</sup> (∝ <i>f</i><sup>2</sup>),<br><i>K</i>/<i>U</i> = (<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)/<i>x</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Position where the two are equal',
        main: '(<i>K</i> = <i>U</i>):<br><i>x</i> = ±<i>A</i>/√2 ≈ ±0.707 <i>A</i>, at which <i>K</i> = <i>U</i> = <i>E</i>/2.',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Time-averaged values over one period',
        main: '⟨<i>K</i>⟩<sub><i>t</i></sub> = ⟨<i>U</i>⟩<sub><i>t</i></sub> = <i>E</i>/2 = ¼<i>mω</i><sup>2</sup><i>A</i><sup>2</sup> = ¼<i>kA</i><sup>2</sup>.',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation, units, dimensions:</b><br>• <i>K</i>, <i>U</i>, <i>E</i> — energies. SI unit: joule (J). Dimensional formula: [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>].<br>• <i>k</i> — force constant. SI unit: N m<sup>−1</sup>. [M<sup>1</sup> L<sup>0</sup> T<sup>−2</sup>].<br>• <i>m</i> — mass: [M<sup>1</sup> L<sup>0</sup> T<sup>0</sup>]; <i>A</i>, <i>x</i> — length: [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]; <i>ω</i> — angular frequency: [T<sup>−1</sup>].',
      },
      {
        t: 'p',
        html: '<b>Frequency note:</b> displacement oscillates at frequency <i>f</i>; both <i>K</i> and <i>U</i> oscillate at 2<i>f</i> (period <i>T</i>/2), because they contain cos<sup>2</sup> and sin<sup>2</sup> terms.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Total mechanical energy of an SHM oscillator is ½<i>kA</i><sup>2</sup>.</b>',
      },
      {
        t: 'p',
        html: '<b>Assumption:</b> a particle of mass <i>m</i> executes SHM, <i>x</i> = <i>A</i> sin(<i>ωt</i> + <i>φ</i>), under a conservative restoring force <i>F</i> = −<i>kx</i> with <i>ω</i><sup>2</sup> = <i>k</i>/<i>m</i>. Take <i>U</i> = 0 at the mean position.',
      },
      {
        t: 'p',
        html: '<b>Kinetic energy.</b> From Topic 01, <i>v</i> = <i>Aω</i> cos(<i>ωt</i> + <i>φ</i>), so<br><i>K</i> = ½<i>mv</i><sup>2</sup> = ½<i>mA</i><sup>2</sup><i>ω</i><sup>2</sup> cos<sup>2</sup>(<i>ωt</i> + <i>φ</i>) = ½<i>kA</i><sup>2</sup> cos<sup>2</sup>(<i>ωt</i> + <i>φ</i>),<br>using <i>mω</i><sup>2</sup> = <i>k</i>.',
      },
      {
        t: 'p',
        html: '<b>Potential energy.</b> The work done against the restoring force in displacing the particle from 0 to <i>x</i> is stored as PE:<br><i>U</i> = −∫<sub>0</sub><sup><i>x</i></sup> <i>F</i> d<i>x</i>′ = ∫<sub>0</sub><sup><i>x</i></sup> <i>kx</i>′ d<i>x</i>′ = ½<i>kx</i><sup>2</sup> = ½<i>kA</i><sup>2</sup> sin<sup>2</sup>(<i>ωt</i> + <i>φ</i>).',
      },
      {
        t: 'p',
        html: '<b>Add them.</b><br><i>E</i> = <i>K</i> + <i>U</i> = ½<i>kA</i><sup>2</sup> [cos<sup>2</sup>(<i>ωt</i> + <i>φ</i>) + sin<sup>2</sup>(<i>ωt</i> + <i>φ</i>)].<br>The bracket equals 1 by the Pythagorean identity, so<br><i>E</i> = ½<i>kA</i><sup>2</sup> = ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> every trace of time has vanished — <i>E</i> is a pure constant. This is exactly what we expect for motion under a conservative force: the see-saw between <i>K</i> and <i>U</i> is perfectly balanced so their sum stands still even while each one swings.',
      },
      { t: 'p', html: '<b>Derivation 2 — Why the energies oscillate at double frequency.</b>' },
      {
        t: 'p',
        html: 'Use the power-reduction identities cos<sup>2</sup> <i>θ</i> = (1 + cos 2<i>θ</i>)/2 and sin<sup>2</sup> <i>θ</i> = (1 − cos 2<i>θ</i>)/2 with <i>θ</i> = <i>ωt</i> + <i>φ</i>:<br><i>K</i> = ½<i>kA</i><sup>2</sup> · (1 + cos 2(<i>ωt</i> + <i>φ</i>))/2 = <i>E</i>/2 + (<i>E</i>/2) cos 2(<i>ωt</i> + <i>φ</i>),<br><i>U</i> = ½<i>kA</i><sup>2</sup> · (1 − cos 2(<i>ωt</i> + <i>φ</i>))/2 = <i>E</i>/2 − (<i>E</i>/2) cos 2(<i>ωt</i> + <i>φ</i>).',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> each energy is a constant <i>E</i>/2 plus a term oscillating at angular frequency 2<i>ω</i> — hence <b>double the frequency</b> of the displacement, period <i>T</i>/2. The two oscillating parts are equal and opposite, so they cancel in the sum, leaving <i>E</i> constant. It also shows at a glance that the <b>time-average of each energy is</b> <i>E</i>/2 (the oscillating part averages to zero).',
      },
      { t: 'fig', id: 'p11-13-fig-13.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A block of mass 0.5 kg is attached to a spring of force constant 200 N m<sup>−1</sup> on a frictionless surface and set into SHM with amplitude 4 cm. Find (i) the total mechanical energy, (ii) the maximum kinetic energy, (iii) the maximum potential energy, and (iv) the maximum speed.',
        steps: [
          '<b>Given:</b> <i>m</i> = 0.5 kg, <i>k</i> = 200 N m<sup>−1</sup>, <i>A</i> = 4 cm = 0.04 m.',
          '<b>Solution:</b><br>(i) <i>E</i> = ½<i>kA</i><sup>2</sup> = ½(200)(0.04)<sup>2</sup> = 100 × 0.0016.',
          '(ii) Maximum KE occurs at the mean position, where all energy is kinetic: <i>K</i><sub>max</sub> = <i>E</i>.<br>(iii) Maximum PE occurs at the extremes, where all energy is potential: <i>U</i><sub>max</sub> = <i>E</i>.',
          '(iv) From ½<i>mv</i><sub>max</sub><sup>2</sup> = <i>E</i>:<br><i>v</i><sub>max</sub> = √(2<i>E</i>/<i>m</i>) = √((2 × 0.16)/0.5) = √0.64',
        ],
        ans: '<i>E</i> = <i>K</i><sub>max</sub> = <i>U</i><sub>max</sub> = 0.16 J, <i>v</i><sub>max</sub> = 0.8 m s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'At what displacement from the mean position (as a fraction of amplitude) is the kinetic energy of an SHM particle exactly equal to its potential energy?',
        steps: [
          '<b>The trap:</b> the tempting wrong answer is <i>x</i> = <i>A</i>/2. But “halfway in displacement” is not “halfway in energy” — energy goes as the square of displacement, so the split happens later than you’d guess.',
          '<b>The shortcut:</b> set <i>K</i> = <i>U</i> and use <i>K</i> = ½<i>k</i>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>), <i>U</i> = ½<i>kx</i><sup>2</sup>:<br><i>A</i><sup>2</sup> − <i>x</i><sup>2</sup> = <i>x</i><sup>2</sup> ⇒ 2<i>x</i><sup>2</sup> = <i>A</i><sup>2</sup> ⇒ <i>x</i> = <i>A</i>/√2 ≈ 0.707 <i>A</i>.',
          'At this point each energy equals <i>E</i>/2.',
          'Memorise this — it is asked almost every year. (A useful cousin to know: <i>U</i> = <i>E</i>/4 at <i>x</i> = <i>A</i>/2, and <i>U</i> = ¾<i>E</i> at <i>x</i> = (√3/2)<i>A</i>.)',
        ],
        ans: '<i>x</i> = <i>A</i>/√2',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle of mass 0.1 kg executes SHM of amplitude 10 cm with angular frequency 10 rad s<sup>−1</sup>. Find its kinetic and potential energies when it is 6 cm from the mean position, and verify their ratio.',
        steps: [
          '<b>Approach:</b> compute the total energy first, then split it using position.<br><i>E</i> = ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup> = ½(0.1)(10)<sup>2</sup>(0.10)<sup>2</sup> = ½(0.1)(100)(0.01) = 0.05 J.',
          'At <i>x</i> = 6 cm = 0.06 m:<br><i>U</i> = ½<i>mω</i><sup>2</sup><i>x</i><sup>2</sup> = ½(0.1)(100)(0.06)<sup>2</sup> = 5 × 0.0036,<br><i>K</i> = <i>E</i> − <i>U</i> = 0.05 − 0.018.',
          '<b>Verify with the position ratio:</b><br><i>K</i>/<i>U</i> = (<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)/<i>x</i><sup>2</sup> = (10<sup>2</sup> − 6<sup>2</sup>)/6<sup>2</sup> = 64/36 = 16/9,   0.032/0.018 = 16/9. ✓',
        ],
        ans: '<i>K</i> = 0.032 J, <i>U</i> = 0.018 J, with <i>K</i> ∶ <i>U</i> = 16 ∶ 9',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For a particle in SHM of amplitude <i>A</i> and total energy <i>E</i>, show that the <b>time-averaged</b> kinetic energy over one period equals <i>E</i>/2, but the kinetic energy <b>averaged over position</b> (from −<i>A</i> to +<i>A</i>) equals 2<i>E</i>/3. Explain physically why the two averages differ.',
        steps: [
          '<b>Time average.</b> With <i>K</i> = <i>E</i> cos<sup>2</sup>(<i>ωt</i>) and using ⟨cos<sup>2</sup>⟩ = ½ over a full period:<br>⟨<i>K</i>⟩<sub><i>t</i></sub> = (1/<i>T</i>)∫<sub>0</sub><sup><i>T</i></sup> <i>E</i> cos<sup>2</sup>(<i>ωt</i>) d<i>t</i> = <i>E</i> · ½ = <i>E</i>/2.',
          '<b>Position average.</b> With <i>K</i> = (<i>E</i>/<i>A</i><sup>2</sup>)(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>), average uniformly over <i>x</i> ∈ [−<i>A</i>, <i>A</i>]:<br>⟨<i>K</i>⟩<sub><i>x</i></sub> = (1/(2<i>A</i>))∫<sub>−<i>A</i></sub><sup><i>A</i></sup> (<i>E</i>/<i>A</i><sup>2</sup>)(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>) d<i>x</i> = (<i>E</i>/(2<i>A</i><sup>3</sup>))[<i>A</i><sup>2</sup><i>x</i> − <i>x</i><sup>3</sup>/3]<sub>−<i>A</i></sub><sup><i>A</i></sup> = (<i>E</i>/(2<i>A</i><sup>3</sup>)) · (4<i>A</i><sup>3</sup>/3) = 2<i>E</i>/3.',
          '<b>Why they differ:</b> the time average and the position average weight the motion differently. The particle moves <b>slowly near the extremes</b> (where <i>K</i> is small) and <b>quickly near the mean</b> (where <i>K</i> is large), so it spends more time in the low-KE regions. Time-weighting therefore drags the average down to <i>E</i>/2, whereas position-weighting (which treats every centimetre equally regardless of how long the particle dawdles there) gives the larger 2<i>E</i>/3. The lesson: <b>“average” is meaningless until you say averaged with respect to what.</b> This distinction is a classic JEE Advanced trap.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A spring of force constant 100 N m<sup>−1</sup> undergoes SHM of amplitude 5 cm. Find the total mechanical energy of the oscillation.',
            a: '<i>E</i> = 0.125 J.',
          },
          {
            q: '[NEET] At what displacement (as a fraction of amplitude) is the potential energy of an SHM particle three times its kinetic energy?',
            a: '<i>U</i> = 3<i>K</i> ⇒ <i>x</i> = (√3/2)<i>A</i> ≈ 0.866 <i>A</i>.',
          },
          {
            q: '[JEE Main] If the amplitude of an SHM is doubled while mass and force constant are unchanged, by what factor does (a) the total energy and (b) the maximum speed change?',
            a: '(a) total energy ×4 (since <i>E</i> ∝ <i>A</i><sup>2</sup>); (b) maximum speed ×2 (since <i>v</i><sub>max</sub> = <i>Aω</i>).',
          },
          {
            q: '[JEE Main] Express the kinetic energy of an SHM particle at displacement <i>x</i> = <i>A</i>/2 as a fraction of its total energy.',
            a: '<i>K</i> = ¾<i>E</i>.',
          },
          {
            q: '[JEE Advanced] For a particle in SHM, find the fraction of one complete period during which its kinetic energy is greater than its potential energy.',
            a: '<i>K</i> > <i>U</i> when |<i>x</i>| < <i>A</i>/√2, which holds for exactly <b>half</b> the period (½).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A particle executes SHM with frequency <i>f</i>. The frequency with which its kinetic energy oscillates is:',
        opts: [
          { label: '<i>f</i>', nudge: '<b>(A)</b> is the most common error — assuming energy tracks displacement frequency.' },
          { label: '2<i>f</i>', nudge: null },
          { label: '<i>f</i>/2', nudge: '<b>(C)</b> and <b>(D)</b> are unmotivated distractors for students guessing factors of two.' },
          { label: '4<i>f</i>', nudge: '<b>(C)</b> and <b>(D)</b> are unmotivated distractors for students guessing factors of two.' },
        ],
        correct: 1,
        solution: 'Kinetic energy contains cos<sup>2</sup>(<i>ωt</i> + <i>φ</i>) = (1 + cos 2(<i>ωt</i> + <i>φ</i>))/2, whose oscillating part has angular frequency 2<i>ω</i> — so KE oscillates at 2<i>f</i>. It peaks each time the particle crosses the mean position, which happens twice per cycle.',
      },
      {
        t: 'mcq',
        q: 'The total energy of an SHM particle is <i>E</i>. At a displacement equal to half the amplitude, its kinetic energy is:',
        opts: [
          {
            label: '<i>E</i>/4',
            nudge: '<b>(A)</b> is the potential energy at <i>x</i> = <i>A</i>/2 (<i>U</i> = <i>Ex</i><sup>2</sup>/<i>A</i><sup>2</sup> = <i>E</i>/4) — chosen by students who compute <i>U</i> when asked for <i>K</i>.',
          },
          {
            label: '<i>E</i>/2',
            nudge: '<b>(B)</b> assumes <i>K</i> = <i>U</i> = <i>E</i>/2, which is true only at <i>x</i> = <i>A</i>/√2, not <i>A</i>/2.',
          },
          { label: '3<i>E</i>/4', nudge: null },
          { label: '<i>E</i>', nudge: '<b>(D)</b> forgets that the particle is not at the mean position.' },
        ],
        correct: 2,
        solution: '<i>K</i> = <i>E</i>(1 − <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup>) = <i>E</i>(1 − 1/4) = 3<i>E</i>/4.',
      },
      {
        t: 'mcq',
        q: 'If the amplitude of a simple harmonic oscillator is increased by 50%, its total energy increases by:',
        opts: [
          { label: '50%', nudge: '<b>(A)</b> wrongly treats <i>E</i> ∝ <i>A</i> (linear).' },
          { label: '100%', nudge: '<b>(B)</b> is a guess unconnected to the square law.' },
          { label: '125%', nudge: null },
          { label: '225%', nudge: '<b>(D)</b> confuses the new value (225%) with the increase.' },
        ],
        correct: 2,
        solution: 'Since <i>E</i> ∝ <i>A</i><sup>2</sup>, new energy = (1.5)<sup>2</sup> = 2.25 times the old, i.e. 225% of the original, which is an <b>increase</b> of 125%.',
      },
      {
        t: 'mcq',
        q: 'The graph of potential energy versus displacement for a particle in SHM is:',
        opts: [
          {
            label: 'a straight line',
            nudge: '<b>(A)</b> is the shape of the acceleration–displacement graph (<i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>).',
          },
          { label: 'a parabola', nudge: null },
          { label: 'an ellipse', nudge: '<b>(C)</b> is the velocity–displacement graph.' },
          { label: 'a horizontal line', nudge: '<b>(D)</b> is the total-energy–displacement graph (constant).' },
        ],
        correct: 1,
        solution: '<i>U</i> = ½<i>kx</i><sup>2</sup> is quadratic in <i>x</i>, so the graph is an upward-opening parabola centred at the mean position. Each distractor is a real SHM graph for a different quantity — the trap is matching the wrong one.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the double frequency.</b> Both <i>K</i> and <i>U</i> oscillate at 2<i>f</i> (period <i>T</i>/2), not at <i>f</i>. The particle passes the fast mean position twice and the frozen extremes twice in one cycle.',
          '<b>Putting <i>K</i> = <i>U</i> at <i>x</i> = <i>A</i>/2.</b> Energy goes as <i>x</i><sup>2</sup>, so equality of <i>K</i> and <i>U</i> happens at <i>x</i> = <i>A</i>/√2 ≈ 0.707<i>A</i>, noticeably past the halfway mark.',
          '<b>Writing <i>E</i> ∝ <i>A</i> instead of <i>E</i> ∝ <i>A</i><sup>2</sup>.</b> A huge source of lost marks in “amplitude changed by…” problems. Always square the amplitude ratio.',
          '<b>Confusing the two averages.</b> Time-averaged <i>K</i> and <i>U</i> are each <i>E</i>/2; this does not mean <i>K</i> = <i>U</i> at every instant. They are equal only on average and only at the specific points <i>x</i> = ±<i>A</i>/√2.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Skip re-deriving energies at a given position — use the ready ratios <i>K</i>/<i>E</i> = 1 − <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> and <i>U</i>/<i>E</i> = <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> directly. And lock in two landmark facts: <i>K</i> = <i>U</i> at <i>x</i> = <i>A</i>/√2, and <i>E</i> ∝ <i>A</i><sup>2</sup> — between them they answer the majority of objective questions on this topic.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Energies',
            note: '<i>K</i> = ½<i>mω</i><sup>2</sup>(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>), <i>U</i> = ½<i>mω</i><sup>2</sup><i>x</i><sup>2</sup> = ½<i>kx</i><sup>2</sup>, <i>E</i> = <i>K</i> + <i>U</i> = ½<i>kA</i><sup>2</sup> = ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup> (constant).',
          },
          { f: 'Scaling', note: '<i>E</i> ∝ <i>A</i><sup>2</sup> and <i>E</i> ∝ <i>ω</i><sup>2</sup> — double <i>A</i> ⇒ energy ×4.' },
          {
            f: 'Locations',
            note: '<i>K</i><sub>max</sub> = <i>E</i> at the mean (<i>x</i> = 0); <i>U</i><sub>max</sub> = <i>E</i> at the extremes (<i>x</i> = ±<i>A</i>).',
          },
          { f: 'Equal point', note: '<i>K</i> = <i>U</i> = <i>E</i>/2 at <i>x</i> = ±<i>A</i>/√2 ≈ ±0.707<i>A</i>.' },
          {
            f: 'Position ratios',
            note: '<i>K</i>/<i>E</i> = 1 − <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup>, <i>U</i>/<i>E</i> = <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup>, <i>K</i>/<i>U</i> = (<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>)/<i>x</i><sup>2</sup>.',
          },
          {
            f: 'Frequency',
            note: '<i>K</i> and <i>U</i> oscillate at 2<i>f</i> (period <i>T</i>/2); time-average of each = <i>E</i>/2.',
          },
        ],
        aids: [
          '<b>Memory aid — “Square the swing”:</b> energy follows the square of amplitude (<i>E</i> ∝ <i>A</i><sup>2</sup>) and the square of position for PE (<i>U</i> ∝ <i>x</i><sup>2</sup>). And <b>“half-energy at A-over-root-2”</b> — the <i>K</i> = <i>U</i> crossover lives at <i>A</i>/√2, not <i>A</i>/2.',
        ],
      },
    ],
  },
];
