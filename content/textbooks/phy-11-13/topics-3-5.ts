import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Topics 03 to 05, pp. 900–923 of the Class 11 Physics Master
 * Reference, word for word: Pendulums and Mass-Spring Systems (pp. 900 to
 * 907), Damped and Forced Oscillations (pp. 908 to 915) and Reference Circle,
 * Superposition & More SHM Systems (pp. 916 to 923), each split at the book's
 * Sections 1 to 8. Figure 13.2 (caption p. 903, drawn on p. 904), Figure 13.3
 * (caption p. 910, drawn on p. 911) and Figure 13.4 (caption p. 919, drawn on
 * p. 920).
 */
export const TOPICS: Topic[] = [
  {
    n: '03',
    title: 'Pendulums and Mass-Spring Systems',
    kalam: 'Gravity, for a vertical spring, only shifts the mean position downward; it never touches the period.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The most question-dense topic in the whole chapter. JEE Main reliably carries 1–2 questions every year — pendulum in a lift or accelerating car, spring combinations (series/parallel), and the vertical-spring period. NEET asks 1–2 on the factors affecting a simple pendulum and effective gravity. JEE Advanced reaches for the physical (compound) pendulum and multi-spring systems. For CBSE Boards, the derivation of <i>T</i> = 2π√(<i>L</i>/<i>g</i>) for a simple pendulum is an almost-guaranteed 3-mark question.',
      },
      {
        t: 'p',
        html: 'There are two great workhorses of SHM, and almost every oscillation problem you will ever solve is one of them in disguise: the <b>pendulum</b> (driven by gravity) and the <b>mass-spring system</b> (driven by elasticity). They look completely different — one swings, one bounces — yet both obey the same master rule from Topic 01: a restoring force proportional to displacement. The fun is in seeing why each one obeys it, because the “why” is different in each case.',
      },
      {
        t: 'p',
        html: 'Take the <b>simple pendulum</b> first — a small heavy bob on a light string, like the clapper of a temple bell or a stone tied to a thread. Pull it aside and gravity tries to drag it straight down, but the string only lets it move along an arc. The part of gravity along the arc (the tangential component, <i>mg</i> sin <i>θ</i>) is what hauls the bob back toward the bottom. For <b>small swings</b>, sin <i>θ</i> ≈ <i>θ</i>, so this restoring force becomes proportional to the displacement — and that, precisely, is SHM. Out of this falls one of the most beautiful facts in physics:<br><i>T</i> = 2π√(<i>L</i>/<i>g</i>)   ⟹   period depends only on <i>L</i> and <i>g</i>.',
      },
      {
        t: 'p',
        html: 'Not on the mass of the bob. Not on the amplitude (for small angles). A heavy bob and a light bob on strings of equal length keep perfect time together — this is <b>isochronism</b>, the property Galileo spotted watching a swinging lamp in a cathedral, and the reason pendulum clocks work at all.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> why does mass cancel for a pendulum but matter for a spring? In a pendulum, a heavier bob feels a stronger pull (more gravity) but is also more sluggish (more inertia) — the two effects cancel exactly, so mass drops out. In a spring, the elastic force is set by the spring’s stiffness <i>k</i> alone and does not care about the mass hanging on it; so a heavier mass just makes the system more sluggish without any compensating extra force, and the period grows:<br><i>T</i> = 2π√(<i>m</i>/<i>k</i>)   ⟹   period depends only on <i>m</i> and <i>k</i>.',
      },
      {
        t: 'p',
        html: 'Here the surprise runs the other way: the spring’s period does <b>not depend on <i>g</i> at all</b>. Hang the same spring-mass system on the Moon and it oscillates with exactly the same period — a favourite trap that contrasts directly with the pendulum, which would slow down on the Moon. Gravity, for a vertical spring, only shifts the mean position downward; it never touches the period.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• The simple-pendulum formula assumes <b>small angular amplitude</b> (roughly <i>θ</i> < 10°) so that sin <i>θ</i> ≈ <i>θ</i>. At large swings the period grows with amplitude and the motion is no longer simple harmonic.<br>• The ideal simple pendulum assumes a <b>point-mass bob</b> on a <b>massless, inextensible string</b>. A real rod or extended body is a physical pendulum with a different formula.<br>• The spring formula assumes a <b>massless spring</b> obeying <b>Hooke’s law within its elastic limit</b>. A heavy spring adds an effective <i>m</i><sub>spring</sub>/3 correction to the oscillating mass.<br>• In non-inertial frames (lifts, accelerating cars), gravity must be replaced by an <b>effective gravity</b> <i>g</i><sub>eff</sub>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Simple pendulum (small amplitude)',
        main: '<i>T</i> = 2π√(<i>L</i>/<i>g</i>)<br><i>ω</i> = √(<i>g</i>/<i>L</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mass-spring system (horizontal or vertical — same period)',
        main: '<i>T</i> = 2π√(<i>m</i>/<i>k</i>)<br><i>ω</i> = √(<i>k</i>/<i>m</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Static elongation shortcut',
        main: '<i>T</i> = 2π√(<i>x</i><sub>0</sub>/<i>g</i>)',
        legend: ['<i>x</i><sub>0</sub> = the static stretch of the vertical spring at equilibrium (<i>mg</i> = <i>kx</i><sub>0</sub>)'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Spring combinations',
        main: 'Series: 1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub> (softer, longer <i>T</i>)<br>Parallel: <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> (stiffer, shorter <i>T</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Cutting a spring of constant <i>k</i> into <i>n</i> equal pieces makes each piece <b>stiffer</b>: <i>k</i><sub>piece</sub> = <i>nk</i>.',
      },
      {
        t: 'formula',
        kicker: 'Effective gravity',
        main: 'Lift accelerating <b>up</b> with <i>a</i>: <i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i> (period shortens)<br>Lift accelerating <b>down</b> with <i>a</i>: <i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i> (period lengthens; free fall <i>a</i> = <i>g</i> ⇒ no oscillation)<br>Car accelerating <b>horizontally</b> with <i>a</i>: <i>g</i><sub>eff</sub> = √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>), mean position tilts by <i>θ</i><sub>0</sub> = tan<sup>−1</sup>(<i>a</i>/<i>g</i>) from the vertical',
        legend: [],
        note: '(replace <i>g</i> with <i>g</i><sub>eff</sub> in the pendulum formula)',
      },
      {
        t: 'formula',
        kicker: 'Physical (compound) pendulum — rigid body pivoted at distance d from its centre of mass',
        main: '<i>T</i> = 2π√(<i>I</i>/(<i>mgd</i>))<br><i>L</i><sub>eq</sub> = <i>I</i>/(<i>md</i>) = (<i>k</i><sub><i>g</i></sub><sup>2</sup> + <i>d</i><sup>2</sup>)/<i>d</i>',
        legend: [
          '<i>I</i> = the moment of inertia about the pivot',
          '<i>k</i><sub><i>g</i></sub> = the radius of gyration about the centre of mass (<i>I</i> = <i>mk</i><sub><i>g</i></sub><sup>2</sup> + <i>md</i><sup>2</sup>)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Torsional pendulum (disc/wire)',
        main: '<i>T</i> = 2π√(<i>I</i>/<i>κ</i>)',
        legend: ['<i>κ</i> = the torsional constant (restoring torque per unit twist), unit N m rad<sup>−1</sup>'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation, units, dimensions:</b><br>• <i>L</i>, <i>x</i><sub>0</sub>, <i>d</i> — lengths: [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]; <i>g</i> — acceleration: [L T<sup>−2</sup>]; <i>T</i> — period: [T].<br>• <i>k</i> — spring constant: N m<sup>−1</sup>, [M<sup>1</sup> L<sup>0</sup> T<sup>−2</sup>].<br>• <i>I</i> — moment of inertia: kg m<sup>2</sup>, [M<sup>1</sup> L<sup>2</sup> T<sup>0</sup>]; <i>κ</i> — torsional constant: N m rad<sup>−1</sup>, [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>].',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      { t: 'p', html: '<b>Derivation 1 — Period of a simple pendulum, <i>T</i> = 2π√(<i>L</i>/<i>g</i>).</b>' },
      {
        t: 'p',
        html: '<b>Assumption:</b> a point-mass bob of mass <i>m</i> hangs from a light, inextensible string of length <i>L</i>, displaced by a small angle <i>θ</i> from the vertical.',
      },
      {
        t: 'p',
        html: 'The forces on the bob are gravity <i>mg</i> (down) and string tension <i>T</i><sub><i>s</i></sub> (along the string). Resolve gravity into a component along the string (<i>mg</i> cos <i>θ</i>, balanced by tension) and a component along the arc (<i>mg</i> sin <i>θ</i>) directed back toward the lowest point. This tangential component is the <b>restoring force</b>:<br><i>F</i> = −<i>mg</i> sin <i>θ</i>.<br>For <b>small angles</b>, sin <i>θ</i> ≈ <i>θ</i> (in radians), and the arc displacement is <i>s</i> = <i>Lθ</i>, so <i>θ</i> = <i>s</i>/<i>L</i>:<br><i>F</i> = −<i>mgθ</i> = −<i>mg</i>(<i>s</i>/<i>L</i>) = −(<i>mg</i>/<i>L</i>)<i>s</i>.<br>This is exactly the SHM form <i>F</i> = −<i>ks</i> with effective stiffness <i>k</i> = <i>mg</i>/<i>L</i>. Comparing with <i>ω</i><sup>2</sup> = <i>k</i>/<i>m</i> (Topic 01):<br><i>ω</i><sup>2</sup> = (<i>mg</i>/<i>L</i>)/<i>m</i> = <i>g</i>/<i>L</i>   ⟹   <i>T</i> = 2π/<i>ω</i> = 2π√(<i>L</i>/<i>g</i>).',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> the mass <i>m</i> cancels — the agent that supplies the restoring force (gravity) scales with <i>m</i> in just the same way as the inertia that resists it, so the bob’s weight is irrelevant to its timing.',
      },
      { t: 'p', html: '<b>Derivation 2 — Mass-spring period, and why vertical equals horizontal.</b>' },
      {
        t: 'p',
        html: '<b>Horizontal spring:</b> displacing the mass by <i>x</i> produces a restoring force <i>F</i> = −<i>kx</i> directly. Comparing with <i>F</i> = −<i>kx</i> = <i>ma</i> gives <i>ω</i> = √(<i>k</i>/<i>m</i>), so <i>T</i> = 2π√(<i>m</i>/<i>k</i>).',
      },
      {
        t: 'p',
        html: '<b>Vertical spring:</b> at equilibrium the spring is already stretched by <i>x</i><sub>0</sub> where <i>kx</i><sub>0</sub> = <i>mg</i>. Measure displacement <i>y</i> from this new equilibrium. The net force is<br><i>F</i><sub>net</sub> = <i>mg</i> − <i>k</i>(<i>x</i><sub>0</sub> + <i>y</i>) = (<i>mg</i> − <i>kx</i><sub>0</sub>) − <i>ky</i> = 0 − <i>ky</i> = −<i>ky</i>.<br>The gravity term is exactly cancelled by the initial stretch, leaving the same <i>F</i> = −<i>ky</i>. Hence <i>T</i> = 2π√(<i>m</i>/<i>k</i>) — <b>identical to the horizontal case</b>. Gravity merely relocated the mean position by <i>x</i><sub>0</sub> = <i>mg</i>/<i>k</i>; it left the period untouched.',
      },
      { t: 'p', html: '<b>Derivation 3 — Series and parallel spring constants.</b>' },
      {
        t: 'p',
        html: '<b>Parallel</b> (both springs stretch by the same <i>x</i>): each pulls back, total force <i>F</i> = −(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)<i>x</i>, so<br><i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Series</b> (same tension <i>F</i> through both; stretches add): <i>x</i> = <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> = <i>F</i>/<i>k</i><sub>1</sub> + <i>F</i>/<i>k</i><sub>2</sub>, so the effective constant satisfies<br>1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> parallel springs share the load and act <b>stiffer</b>; series springs each take the full load and stretch more, acting <b>softer</b>. (Note this is the opposite of how resistors combine — a frequent source of confusion.)',
      },
      { t: 'fig', id: 'p11-13-fig-13.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A simple pendulum has length 1.0 m. Taking <i>g</i> = π<sup>2</sup> ≈ 9.87 m s<sup>−2</sup>, find its time period. What is the new period if the length is made four times as large?',
        steps: [
          '<b>Solution:</b><br><i>T</i> = 2π√(<i>L</i>/<i>g</i>) = 2π√(1.0/π<sup>2</sup>) = 2π · (1/π)',
          'A pendulum of period 2 s is called a <b>seconds pendulum</b> (each one-way swing takes 1 s), and its length is about 1 m — worth memorising.',
          'For <i>L</i>′ = 4<i>L</i>:<br><i>T</i>′ = 2π√(4<i>L</i>/<i>g</i>) = 2 × 2π√(<i>L</i>/<i>g</i>) = 2<i>T</i>',
        ],
        ans: '<i>T</i> = 2 s; quadrupling the length <b>doubles</b> the period to 4 s (since <i>T</i> ∝ √<i>L</i>)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A simple pendulum has period 2 s in a stationary lift. The lift now accelerates <b>downward</b> at ¾<i>g</i>. Find the new period.',
        steps: [
          '<b>The trap:</b> students either ignore the lift’s acceleration entirely, or add it when they should subtract. The bob in a downward-accelerating lift feels lighter, so effective gravity <b>decreases</b>.',
          '<b>The shortcut:</b> replace <i>g</i> by <i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i> = <i>g</i> − ¾<i>g</i> = ¼<i>g</i>, and use the ratio form so <i>L</i> cancels:<br><i>T</i>′/<i>T</i> = √(<i>g</i>/<i>g</i><sub>eff</sub>) = √(<i>g</i>/(<i>g</i>/4)) = √4 = 2   ⟹   <i>T</i>′ = 2 × 2',
          '(<b>Sanity check:</b> if the lift were in free fall, <i>a</i> = <i>g</i>, then <i>g</i><sub>eff</sub> = 0 and <i>T</i>′ → ∞ — the bob floats and never swings. Our answer moves correctly in that direction.)',
        ],
        ans: '<i>T</i>′ = 4 s',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A block of mass 2 kg is connected to two springs of force constants 6 N m<sup>−1</sup> and 3 N m<sup>−1</sup>. Find the period of oscillation when the springs are connected (a) in series and (b) in parallel.',
        steps: [
          '<b>Approach:</b> find <i>k</i><sub>eff</sub> for each configuration, then apply <i>T</i> = 2π√(<i>m</i>/<i>k</i><sub>eff</sub>).',
          '(a) <b>Series:</b><br>1/<i>k</i><sub>eff</sub> = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 ⇒ <i>k</i><sub>eff</sub> = 2 N m<sup>−1</sup>.<br><i>T</i><sub>series</sub> = 2π√(2/2) = 2π',
          '(b) <b>Parallel:</b><br><i>k</i><sub>eff</sub> = 6 + 3 = 9 N m<sup>−1</sup>,   <i>T</i><sub>parallel</sub> = 2π√(2/9) = (2π√2)/3',
          'The series combination is softer (smaller <i>k</i><sub>eff</sub>) and so oscillates more slowly — exactly as intuition predicts.',
        ],
        ans: '<i>T</i><sub>series</sub> ≈ 6.28 s, <i>T</i><sub>parallel</sub> ≈ 2.96 s',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A uniform rod of mass <i>M</i> and length <i>L</i> is pivoted at one end and swings freely in a vertical plane as a physical pendulum (small amplitude). Find its period of oscillation and the length of the equivalent simple pendulum. Compare its period with that of a simple pendulum of the same length <i>L</i>.',
        steps: [
          '<b>Set-up:</b> for a physical pendulum, <i>T</i> = 2π√(<i>I</i>/(<i>Mgd</i>)), where <i>I</i> is the moment of inertia about the pivot and <i>d</i> is the pivot-to-centre-of-mass distance.',
          'For a uniform rod pivoted at one end:<br><i>I</i> = <i>ML</i><sup>2</sup>/3,   <i>d</i> = <i>L</i>/2.',
          'Therefore:<br><i>T</i> = 2π√((<i>ML</i><sup>2</sup>/3)/(<i>Mg</i>(<i>L</i>/2))) = 2π√((<i>L</i><sup>2</sup>/3)/(<i>gL</i>/2))',
          'The <b>equivalent simple pendulum length</b> is the <i>L</i><sub>eq</sub> for which 2π√(<i>L</i><sub>eq</sub>/<i>g</i>) gives this same period:<br><i>L</i><sub>eq</sub> = <i>I</i>/(<i>Md</i>) = (<i>ML</i><sup>2</sup>/3)/(<i>M</i>(<i>L</i>/2))',
          '<b>Comparison:</b> a simple pendulum of length <i>L</i> has period 2π√(<i>L</i>/<i>g</i>), whereas the rod behaves like a simple pendulum of length 2<i>L</i>/3. Since 2<i>L</i>/3 < <i>L</i>, the rod swings <b>faster</b> than a simple pendulum of equal physical length — its mass is distributed closer to the pivot on average, lowering its effective length.',
        ],
        ans: '<i>T</i> = 2π√(2<i>L</i>/(3<i>g</i>)), <i>L</i><sub>eq</sub> = 2<i>L</i>/3; the rod oscillates faster than a same-length simple pendulum by a factor √(3/2)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Find the length of a seconds pendulum (period 2 s) at a place where <i>g</i> = 9.8 m s<sup>−2</sup>.',
            a: '<i>L</i> = <i>gT</i><sup>2</sup>/(4π<sup>2</sup>) = (9.8 × 4)/(4π<sup>2</sup>) ≈ 0.99 m',
          },
          {
            q: '[NEET] A simple pendulum has period <i>T</i> on Earth. If it is taken to the Moon, where gravity is one-sixth of Earth’s, what is its new period?',
            a: '<i>T</i><sub>moon</sub> = <i>T</i>√6 ≈ 2.45 <i>T</i>',
          },
          {
            q: '[JEE Main] A spring of force constant <i>k</i> is cut into two equal halves and a mass <i>m</i> is suspended from one half. Find the ratio of the new period to the period of the original (uncut) spring with the same mass.',
            a: 'Cutting halves the spring, so each half has constant 2<i>k</i>; <i>T</i><sub>new</sub>/<i>T</i><sub>old</sub> = √(<i>k</i>/(2<i>k</i>)) = 1/√2',
          },
          {
            q: '[JEE Main] A mass hung from a vertical spring stretches it by 5 cm at equilibrium. Find its period of vertical oscillation. (Take <i>g</i> = 9.8 m s<sup>−2</sup>.)',
            a: '<i>T</i> = 2π√(<i>x</i><sub>0</sub>/<i>g</i>) = 2π√(0.05/9.8) ≈ 0.45 s',
          },
          {
            q: '[JEE Advanced] A simple pendulum of length <i>L</i> hangs from the ceiling of a car that accelerates horizontally with <i>a</i> = <i>g</i>. Find the new period and the angle the equilibrium string makes with the vertical.',
            a: '<i>g</i><sub>eff</sub> = √(<i>g</i><sup>2</sup> + <i>g</i><sup>2</sup>) = <i>g</i>√2, so <i>T</i>′ = 2π√(<i>L</i>/(<i>g</i>√2)) = <i>T</i>/2<sup>1/4</sup> ≈ 0.84 <i>T</i>; the string tilts tan<sup>−1</sup>(<i>a</i>/<i>g</i>) = 45° from the vertical',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The time period of a simple pendulum (small amplitude) depends on:',
        opts: [
          { label: 'the mass of the bob', nudge: '<b>(A)</b> and <b>(D)</b> fail because mass cancels out: <i>T</i> does not depend on <i>m</i>.' },
          {
            label: 'the amplitude of swing',
            nudge: '<b>(B)</b> fails for small angles (the regime of SHM); amplitude only matters once swings become large and the motion stops being simple harmonic. Students who recall the large-angle correction over-apply it here.',
          },
          { label: 'the length and local <i>g</i>', nudge: null },
          { label: 'the material of the bob', nudge: '<b>(A)</b> and <b>(D)</b> fail because mass cancels out: <i>T</i> does not depend on <i>m</i>.' },
        ],
        correct: 2,
        solution: '<i>T</i> = 2π√(<i>L</i>/<i>g</i>) involves only length and gravitational field strength.',
      },
      {
        t: 'mcq',
        q: 'A spring-mass system has period <i>T</i> on Earth. On the Moon (gravity <i>g</i>/6), its period becomes:',
        opts: [
          { label: '<i>T</i>', nudge: null },
          { label: '<i>T</i>/√6', nudge: '<b>(B)</b> and <b>(D)</b> are further <i>g</i>-dependent distractors for students guessing.' },
          {
            label: '<i>T</i>√6',
            nudge: '<b>(C)</b> is the <b>pendulum</b> answer applied to a spring — the single most common trap on this topic, testing whether you know which system depends on <i>g</i>.',
          },
          { label: '6<i>T</i>', nudge: '<b>(B)</b> and <b>(D)</b> are further <i>g</i>-dependent distractors for students guessing.' },
        ],
        correct: 0,
        solution: 'The spring period <i>T</i> = 2π√(<i>m</i>/<i>k</i>) contains no <i>g</i> — it is identical anywhere.',
      },
      {
        t: 'mcq',
        q: 'A spring of force constant <i>k</i> is cut into three equal pieces. The force constant of each piece is:',
        opts: [
          { label: '<i>k</i>/3', nudge: '<b>(A)</b> wrongly treats the pieces as sharing the constant like a series division.' },
          { label: '<i>k</i>', nudge: '<b>(B)</b> assumes cutting changes nothing.' },
          { label: '3<i>k</i>', nudge: null },
          { label: '<i>k</i>/9', nudge: '<b>(D)</b> squares the factor for no reason.' },
        ],
        correct: 2,
        solution: 'A shorter spring is stiffer; cutting into <i>n</i> equal pieces multiplies the constant by <i>n</i>, so each piece has 3<i>k</i>. (Each piece stretches one-third as much under the same force.)',
      },
      {
        t: 'mcq',
        q: 'A pendulum clock keeps accurate time at ground level. Carried to the top of a very tall tower, the clock will:',
        opts: [
          { label: 'run fast', nudge: '<b>(A)</b> gets the direction backwards (that would need larger <i>g</i>).' },
          { label: 'run slow', nudge: null },
          { label: 'keep correct time', nudge: '<b>(C)</b> ignores the altitude dependence of <i>g</i>.' },
          { label: 'stop', nudge: '<b>(D)</b> confuses a slower period with stopping.' },
        ],
        correct: 1,
        solution: 'Gravity weakens with altitude, so <i>g</i> decreases, <i>T</i> = 2π√(<i>L</i>/<i>g</i>) increases — each “second” of the clock now takes longer than a real second, so it <b>runs slow</b>. A spring-driven (balance-wheel) clock, by contrast, would be unaffected — a nice contrast to keep in mind.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Thinking the pendulum period depends on the bob’s mass.</b> It does not (small angles) — mass cancels. Equally, do not let amplitude into <i>T</i> = 2π√(<i>L</i>/<i>g</i>); it is amplitude-independent in the SHM regime.',
          '<b>Assuming a vertical spring has a different period from a horizontal one.</b> Both give <i>T</i> = 2π√(<i>m</i>/<i>k</i>). Gravity only shifts the mean position; it never changes the period — and the spring period is independent of <i>g</i> entirely.',
          '<b>Swapping series and parallel.</b> Parallel springs are stiffer (<i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>, shorter <i>T</i>); series springs are softer (1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub>, longer <i>T</i>). This is the reverse of the resistor mnemonic — do not borrow that intuition.',
          '<b>Cutting a spring the wrong way.</b> A cut piece is <b>stiffer</b>, not weaker: <i>k</i><sub>piece</sub> = <i>nk</i> for <i>n</i> equal pieces.',
          '<b>Forgetting effective gravity in non-inertial frames.</b> In a lift or accelerating car, replace <i>g</i> with <i>g</i><sub>eff</sub> — and get the sign right (up ⟹ add, down ⟹ subtract, horizontal ⟹ Pythagoras).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any non-inertial-frame pendulum, picture the <b>apparent gravity</b> the bob feels — the vector sum of <i>g⃗</i> and the pseudo-acceleration −<i>a⃗</i> — and feed its magnitude into <i>T</i> = 2π√(<i>L</i>/<i>g</i><sub>eff</sub>). And when a vertical spring’s static stretch <i>x</i><sub>0</sub> is given but <i>m</i> and <i>k</i> are not, use <i>T</i> = 2π√(<i>x</i><sub>0</sub>/<i>g</i>) directly — it sidesteps the missing data instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Simple pendulum', note: '<i>T</i> = 2π√(<i>L</i>/<i>g</i>) — independent of mass and (small) amplitude; <i>T</i> ∝ √<i>L</i>.' },
          {
            f: 'Mass-spring (vertical or horizontal)',
            note: '<i>T</i> = 2π√(<i>m</i>/<i>k</i>) — independent of <i>g</i>; static-stretch form <i>T</i> = 2π√(<i>x</i><sub>0</sub>/<i>g</i>).',
          },
          {
            f: 'Springs',
            note: 'parallel <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub> (stiffer); series 1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub> (softer); cut into <i>n</i> pieces ⟹ each is <i>nk</i>.',
          },
          {
            f: 'Effective gravity',
            note: 'lift up <i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i>; lift down <i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i>; car horizontal <i>g</i><sub>eff</sub> = √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>), mean tilts tan<sup>−1</sup>(<i>a</i>/<i>g</i>).',
          },
          { f: 'Physical pendulum', note: '<i>T</i> = 2π√(<i>I</i>/(<i>mgd</i>)), <i>L</i><sub>eq</sub> = <i>I</i>/(<i>md</i>).' },
          { f: 'Torsional pendulum', note: '<i>T</i> = 2π√(<i>I</i>/<i>κ</i>).' },
        ],
        aids: [
          '<b>Memory aid — “Pendulum feels gravity, spring feels stiffness”:</b> swap <i>g</i> for <i>g</i><sub>eff</sub> in pendulum problems, and remember the spring doesn’t care about <i>g</i> at all. For combinations: <b>“Parallel = Powerful (stiffer), Series = Soft.”</b>',
        ],
      },
    ],
  },

  {
    n: '04',
    title: 'Damped and Forced Oscillations',
    kalam: 'Every real oscillation in the world eventually dies.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The most conceptual topic of the chapter. JEE Main typically asks 1 question on the resonance condition, the exponential decay of amplitude or energy, or the type of damping. NEET leans on definitions (resonance, damping) and assertion–reason items. JEE Advanced reaches for the quality factor, energy decay, and damping regimes. For CBSE Boards, the definitions of free/damped/forced oscillations and everyday examples of resonance are frequent short-answer questions.',
      },
      {
        t: 'p',
        html: 'Strike a tabla and the note swells, then fades. Pluck a sitar string and it sings, then falls silent. Set a child’s jhula swinging and walk away — within a minute or two it slows and stops. Every real oscillation in the world eventually dies. The idealised SHM of the first three topics, with its forever-constant amplitude, is a beautiful fiction; reality always leaks energy. Understanding how it leaks, and how we can pump energy back in, is the whole of this topic.',
      },
      {
        t: 'p',
        html: 'There are three storylines for an oscillator, and you must keep them straight:<br>• <b>Free oscillation:</b> the idealised case — give the system one push and leave it alone with no friction. It oscillates forever at its own <b>natural frequency</b> <i>ω</i><sub>0</sub> = √(<i>k</i>/<i>m</i>) with constant amplitude. This is the SHM of Topics 01–03.<br>• <b>Damped oscillation:</b> the realistic “left alone” case. A resistive force (air drag, internal friction, viscosity of the medium) opposes the motion and steadily drains energy. The system still oscillates near its natural frequency, but its <b>amplitude shrinks exponentially</b> until it dies out.<br>• <b>Forced oscillation:</b> we refuse to let it die — we apply an external periodic force to keep pushing. After an initial confused “transient” stage, the system stops oscillating at its own frequency and instead <b>marches in step with the driving frequency</b>, settling to a steady amplitude where the energy we pump in each cycle exactly replaces what damping removes.',
      },
      {
        t: 'p',
        html: 'The damping force is taken to be proportional to velocity, <i>F</i><sub>damp</sub> = −<i>bv</i> — the faster the motion, the harder the medium resists. Because it always opposes velocity, it always does negative work, so mechanical energy only ever decreases.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> pushing a child on a swing. If you shove at random moments, sometimes you help and sometimes you fight the motion — the swing never gets very high. But if you time each push to arrive exactly as the swing starts moving away from you — pushing at the swing’s own natural rhythm — every push adds energy and the swing climbs higher and higher. That perfect timing is <b>resonance</b>: when the driving frequency matches the natural frequency, the amplitude grows dramatically. It is the most important idea here, and it cuts both ways — it is how a radio tuner selects one station out of many (electrical resonance), and it is why soldiers are ordered to break step when crossing a bridge, lest their rhythmic marching match the bridge’s natural frequency and shake it apart.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• The linear damping model <i>F</i> = −<i>bv</i> holds for <b>slow motion in a viscous medium</b>; at high speeds drag becomes quadratic in velocity and the simple exponential decay no longer applies.<br>• The clean steady-state amplitude formula describes the system <b>after the transient has died away</b>; immediately after switching on the drive, both frequencies coexist briefly.<br>• Resonance amplitude is <b>large but finite</b> only because real systems always have some damping. With zero damping the formula predicts infinite amplitude — an unphysical idealisation.<br>• “Light damping” (<i>b</i> small) is assumed for most exam results: then the damped frequency <i>ω</i>′ ≈ <i>ω</i><sub>0</sub> and resonance occurs essentially at the natural frequency.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Damped oscillation (underdamped)',
        main: 'Displacement with an exponentially decaying envelope:<br><i>x</i>(<i>t</i>) = <i>A</i><sub>0</sub> <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> cos(<i>ω</i>′<i>t</i> + <i>φ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Damped (shifted) angular frequency',
        main: '<i>ω</i>′ = √(<i>ω</i><sub>0</sub><sup>2</sup> − (<i>b</i>/(2<i>m</i>))<sup>2</sup>)<br><i>ω</i><sub>0</sub> = √(<i>k</i>/<i>m</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Amplitude and energy decay',
        main: '<i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub> <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup><br><i>E</i>(<i>t</i>) = <i>E</i><sub>0</sub> <i>e</i><sup>−<i>bt</i>/<i>m</i></sup>',
        legend: [],
        note: '(Energy decays <b>twice as fast</b> as amplitude, because <i>E</i> ∝ <i>A</i><sup>2</sup> — a direct link back to Topic 02.)',
      },
      {
        t: 'formula',
        kicker: 'Forced oscillation',
        main: 'Steady-state amplitude, driving force <i>F</i><sub>0</sub> cos <i>ωt</i>:<br><i>A</i> = (<i>F</i><sub>0</sub>/<i>m</i>)/√((<i>ω</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>)<sup>2</sup> + (<i>bω</i>/<i>m</i>)<sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Resonance (amplitude maximum)',
        main: '<i>ω</i><sub><i>r</i></sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>b</i><sup>2</sup>/(2<i>m</i><sup>2</sup>)) ≈ <i>ω</i><sub>0</sub> (light damping)<br><i>A</i><sub>res</sub> ≈ <i>F</i><sub>0</sub>/(<i>bω</i><sub>0</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Limiting cases of the driven amplitude',
        main: 'Very low driving frequency (<i>ω</i> → 0): <i>A</i> → <i>F</i><sub>0</sub>/(<i>mω</i><sub>0</sub><sup>2</sup>) = <i>F</i><sub>0</sub>/<i>k</i><br>At resonance (<i>ω</i> ≈ <i>ω</i><sub>0</sub>): <i>A</i> ≈ <i>F</i><sub>0</sub>/(<i>bω</i><sub>0</sub>)',
        legend: [],
        note: '(stiffness-controlled at low frequency; damping-controlled at resonance — large for small <i>b</i>)',
      },
      {
        t: 'formula',
        kicker: 'Quality factor (sharpness of resonance)',
        main: '<i>Q</i> = <i>mω</i><sub>0</sub>/<i>b</i> = 2π (energy stored)/(energy lost per cycle)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Damping regimes</b> (let <i>b</i><sub><i>c</i></sub> = 2√(<i>mk</i>) be critical damping):<br>• <b>Underdamped</b> (<i>b</i> < <i>b</i><sub><i>c</i></sub>): oscillates with decaying amplitude.<br>• <b>Critically damped</b> (<i>b</i> = <i>b</i><sub><i>c</i></sub>): returns to equilibrium in the <b>shortest time without oscillating</b>.<br>• <b>Overdamped</b> (<i>b</i> > <i>b</i><sub><i>c</i></sub>): returns to equilibrium slowly, without oscillating.',
      },
      {
        t: 'p',
        html: '<b>Notation, units, dimensions:</b><br>• <i>b</i> — damping constant (from <i>F</i> = −<i>bv</i>): SI unit kg s<sup>−1</sup> (or N s m<sup>−1</sup>). Dimensional formula [M<sup>1</sup> L<sup>0</sup> T<sup>−1</sup>].<br>• <i>ω</i><sub>0</sub>, <i>ω</i>′, <i>ω</i> — angular frequencies: [T<sup>−1</sup>]. <i>F</i><sub>0</sub> — force amplitude: [M<sup>1</sup> L<sup>1</sup> T<sup>−2</sup>]. <i>Q</i> — dimensionless.',
      },

      { t: 'part', title: 'Key derivations and logical framework' },
      { t: 'p', html: '<b>Framework 1 — The damped oscillator and exponential decay.</b>' },
      {
        t: 'p',
        html: '<b>Set-up:</b> a mass <i>m</i> on a spring (constant <i>k</i>) moves through a medium that exerts a velocity-proportional drag −<i>bv</i>. Newton’s second law gives the governing equation:<br><i>m</i> d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> = −<i>kx</i> − <i>b</i> d<i>x</i>/d<i>t</i>   ⟹   <i>m</i> d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> + <i>b</i> d<i>x</i>/d<i>t</i> + <i>kx</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>Reasoning about the solution:</b> for light damping the system still oscillates, but each swing is a little smaller than the last — so we expect “an oscillation multiplied by a shrinking factor.” That is exactly the form<br><i>x</i>(<i>t</i>) = <i>A</i><sub>0</sub> <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> cos(<i>ω</i>′<i>t</i> + <i>φ</i>).<br>The cosine carries the to-and-fro; the exponential <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> is the shrinking envelope. Substituting this back into the equation fixes the frequency at<br><i>ω</i>′ = √(<i>k</i>/<i>m</i> − <i>b</i><sup>2</sup>/(4<i>m</i><sup>2</sup>)) = √(<i>ω</i><sub>0</sub><sup>2</sup> − (<i>b</i>/(2<i>m</i>))<sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> damping does two things — it shrinks the amplitude and slightly slows the oscillation (<i>ω</i>′ < <i>ω</i><sub>0</sub>). But the frequency shift depends on <i>b</i><sup>2</sup>, so for light damping it is negligible; the conspicuous effect is the amplitude decay, not a frequency change. Because mechanical energy is <i>E</i> = ½<i>kA</i><sup>2</sup> (Topic 02) and <i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup>,<br><i>E</i>(<i>t</i>) = ½<i>kA</i><sub>0</sub><sup>2</sup> <i>e</i><sup>−<i>bt</i>/<i>m</i></sup> = <i>E</i><sub>0</sub> <i>e</i><sup>−<i>bt</i>/<i>m</i></sup>,<br>so <b>energy falls off with half the time-constant of amplitude</b> — a favourite exam catch.',
      },
      { t: 'p', html: '<b>Framework 2 — Forced oscillation, steady state, and resonance.</b>' },
      {
        t: 'p',
        html: '<b>Set-up:</b> now add an external periodic force <i>F</i><sub>0</sub> cos <i>ωt</i>:<br><i>m</i> d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> + <i>b</i> d<i>x</i>/d<i>t</i> + <i>kx</i> = <i>F</i><sub>0</sub> cos <i>ωt</i>.',
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> after the transient dies, the only sustainable rhythm is the one the driver imposes, so the steady-state motion must be <i>x</i> = <i>A</i> cos(<i>ωt</i> − <i>δ</i>) at the <b>driving frequency</b> <i>ω</i>, lagging the force by a phase <i>δ</i>. Substituting and balancing the spring, damping, and inertial terms yields the amplitude<br><i>A</i> = (<i>F</i><sub>0</sub>/<i>m</i>)/√((<i>ω</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>)<sup>2</sup> + (<i>bω</i>/<i>m</i>)<sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Reading the formula as a procedure:</b> look at the denominator. The first term (<i>ω</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>)<sup>2</sup> vanishes when the drive matches the natural frequency — that is what makes the amplitude shoot up at <b>resonance</b>. The second term (<i>bω</i>/<i>m</i>)<sup>2</sup> is the only thing keeping the denominator from hitting zero, so it is the damping alone that caps the resonant amplitude at <i>A</i><sub>res</sub> ≈ <i>F</i><sub>0</sub>/(<i>bω</i><sub>0</sub>). Set <i>ω</i> → 0 and the amplitude collapses to <i>F</i><sub>0</sub>/<i>k</i> — a slow push just statically stretches the spring. This single denominator therefore encodes the entire resonance story.',
      },
      { t: 'fig', id: 'p11-13-fig-13.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A block of mass 0.2 kg attached to a spring oscillates in a viscous medium with damping constant <i>b</i> = 0.04 kg s<sup>−1</sup>. Find the time in which the amplitude of oscillation drops to half its initial value. (Take ln 2 = 0.693.)',
        steps: [
          '<b>Solution:</b> the amplitude obeys <i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub> <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup>. Set <i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub>/2:<br><i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> = 1/2 ⇒ <i>bt</i>/(2<i>m</i>) = ln 2 ⇒ <i>t</i> = (2<i>m</i>/<i>b</i>) ln 2.<br><i>t</i> = (2(0.2)/0.04) × 0.693 = 10 × 0.693 = 6.93 s.',
          '(<b>Note:</b> it will halve again in the next 6.9 s — equal times for equal fractional drops, the signature of exponential decay.)',
        ],
        ans: 'the amplitude halves in about 6.9 s',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A spring-mass system has a natural frequency of 5 Hz. A small periodic driving force is applied to it. At approximately what driving frequency will the amplitude of oscillation be largest, and what is this phenomenon called?',
        steps: [
          '<b>The trap:</b> a student may try to compute the exact resonant frequency <i>ω</i><sub><i>r</i></sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>b</i><sup>2</sup>/(2<i>m</i><sup>2</sup>)) and get bogged down — or, worse, guess that maximum amplitude occurs at twice or half the natural frequency.',
          '<b>The shortcut:</b> for light damping (the usual case), the correction term is negligible, so the amplitude peaks essentially <b>at the natural frequency</b>:<br><i>f</i><sub>drive</sub> ≈ <i>f</i><sub>0</sub> = 5 Hz.<br>This is <b>resonance</b>.',
          'Maximum amplitude always sits at (near) the natural frequency, never at a multiple of it.',
        ],
        ans: '≈ 5 Hz; the phenomenon is resonance',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A damped oscillator has mass 0.5 kg, spring constant 50 N m<sup>−1</sup>, and damping constant 0.1 kg s<sup>−1</sup>. Find (a) its natural and damped angular frequencies, (b) the time for the amplitude to fall to 1/<i>e</i> of its initial value, and (c) the fraction of mechanical energy remaining at that instant.',
        steps: [
          '<b>Solution:</b> (a) <i>ω</i><sub>0</sub> = √(<i>k</i>/<i>m</i>) = √(50/0.5) = √100 = 10 rad s<sup>−1</sup>. With <i>b</i>/(2<i>m</i>) = 0.1/(2(0.5)) = 0.1 s<sup>−1</sup>:<br><i>ω</i>′ = √(<i>ω</i><sub>0</sub><sup>2</sup> − (<i>b</i>/(2<i>m</i>))<sup>2</sup>) = √(100 − 0.01) = √99.99 ≈ 10.0 rad s<sup>−1</sup>.',
          'The frequency is essentially unchanged — confirming the damping is light.',
          '(b) Amplitude <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> = <i>A</i><sub>0</sub>/<i>e</i> requires <i>bt</i>/(2<i>m</i>) = 1, so<br><i>t</i> = 2<i>m</i>/<i>b</i> = 2(0.5)/0.1',
          '(c) Energy decays as <i>E</i>(<i>t</i>) = <i>E</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/<i>m</i></sup>. At <i>t</i> = 10 s: <i>bt</i>/<i>m</i> = (0.1 × 10)/0.5 = 2, so<br><i>E</i> = <i>E</i><sub>0</sub> <i>e</i><sup>−2</sup> ≈ 0.135 <i>E</i><sub>0</sub>.',
          '(<b>Cross-check:</b> when <i>A</i> = <i>A</i><sub>0</sub>/<i>e</i>, <i>E</i> ∝ <i>A</i><sup>2</sup> = <i>E</i><sub>0</sub>/<i>e</i><sup>2</sup> = 0.135 <i>E</i><sub>0</sub> — consistent.)',
        ],
        ans: '<i>ω</i><sub>0</sub> = 10 rad s<sup>−1</sup>, <i>ω</i>′ ≈ 10 rad s<sup>−1</sup>; amplitude reaches 1/<i>e</i> at <i>t</i> = 10 s; about 13.5% of the energy remains',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A lightly damped oscillator has natural angular frequency <i>ω</i><sub>0</sub> = 200 rad s<sup>−1</sup> and quality factor <i>Q</i> = 100. (a) Find the ratio <i>b</i>/<i>m</i>. (b) Estimate the number of oscillations the system makes before its energy falls to 1/<i>e</i> of its initial value, and show this number equals <i>Q</i>/(2π).',
        steps: [
          '<b>Solution:</b> (a) Using <i>Q</i> = <i>mω</i><sub>0</sub>/<i>b</i>:<br><i>b</i>/<i>m</i> = <i>ω</i><sub>0</sub>/<i>Q</i> = 200/100',
          '(b) Energy falls to 1/<i>e</i> when <i>E</i><sub>0</sub><i>e</i><sup>−(<i>b</i>/<i>m</i>)<i>t</i></sup> = <i>E</i><sub>0</sub>/<i>e</i>, i.e. (<i>b</i>/<i>m</i>)<i>t</i> = 1, so <i>t</i> = <i>m</i>/<i>b</i> = 0.5 s. With period <i>T</i> = 2π/<i>ω</i>′ ≈ 2π/<i>ω</i><sub>0</sub> = 2π/200 ≈ 0.0314 s, the number of oscillations is<br><i>N</i> = <i>t</i>/<i>T</i> = (<i>m</i>/<i>b</i>)/(2π/<i>ω</i><sub>0</sub>) = <i>mω</i><sub>0</sub>/(2π<i>b</i>) = <i>Q</i>/(2π) = 100/(2π) ≈ 15.9.',
          'This is the deep meaning of the quality factor: <b>a high-<i>Q</i> oscillator rings for many cycles before its energy decays</b>, which is exactly why a high-<i>Q</i> tuning circuit gives a sharp, selective resonance.',
        ],
        ans: '<i>b</i>/<i>m</i> = 2 s<sup>−1</sup>; the system makes about 16 oscillations, and in general <i>N</i> = <i>Q</i>/(2π)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] The amplitude of a damped oscillator falls to half its initial value in 10 s. After how much total time will it fall to one-fourth of the initial value?',
            a: '20 s (equal times for each halving in exponential decay)',
          },
          {
            q: '[NEET] The amplitude of a damped oscillator becomes 1/3 of its initial value in 2 s. What fraction of the initial amplitude remains after 6 s?',
            a: '(1/3)<sup>3</sup> = 1/27',
          },
          {
            q: '[JEE Main] For a damped oscillator, when the amplitude has fallen to half its initial value, what fraction of the original mechanical energy remains?',
            a: '<i>E</i> ∝ <i>A</i><sup>2</sup> ⇒ remaining energy = 1/4 (i.e. 75% lost)',
          },
          {
            q: '[JEE Main] A driven oscillator has natural angular frequency <i>ω</i><sub>0</sub>. State (a) the driving frequency for maximum amplitude (light damping) and (b) the amplitude in the limit of a very slowly varying driving force (<i>ω</i> → 0).',
            a: '(a) <i>ω</i> ≈ <i>ω</i><sub>0</sub>; (b) <i>A</i> → <i>F</i><sub>0</sub>/<i>k</i> = <i>F</i><sub>0</sub>/(<i>mω</i><sub>0</sub><sup>2</sup>)',
          },
          {
            q: '[JEE Advanced] A lightly damped oscillator loses 2% of its energy in each cycle. Estimate its quality factor.',
            a: '<i>Q</i> = 2π/(Δ<i>E</i>/<i>E</i>) = 2π/0.02 = 100π ≈ 314',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a damped harmonic oscillation, which of the following quantities decreases continuously with time?',
        opts: [
          {
            label: 'the frequency',
            nudge: '<b>(A)</b> and <b>(C)</b> form the classic trap — students picture damping as “the motion slowing down” and assume the frequency drops noticeably. It does not, to leading order.',
          },
          { label: 'the amplitude', nudge: null },
          {
            label: 'the time period',
            nudge: '<b>(A)</b> and <b>(C)</b> form the classic trap — students picture damping as “the motion slowing down” and assume the frequency drops noticeably. It does not, to leading order.',
          },
          { label: 'the phase', nudge: '<b>(D)</b> the phase (<i>ω</i>′<i>t</i> + <i>φ</i>) steadily increases with time; it does not decrease.' },
        ],
        correct: 1,
        solution: 'The defining feature of damping is the exponential decay of amplitude, <i>A</i>(<i>t</i>) = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup>. The frequency and period change only by a tiny <i>b</i><sup>2</sup>-dependent amount and are essentially constant for light damping.',
      },
      {
        t: 'mcq',
        q: 'The amplitude of a forced oscillator is maximum when the driving frequency is approximately equal to:',
        opts: [
          { label: 'zero', nudge: '<b>(A)</b> gives the static limit <i>A</i> = <i>F</i><sub>0</sub>/<i>k</i>, not the maximum.' },
          {
            label: 'twice the natural frequency',
            nudge: '<b>(B)</b> and <b>(D)</b> are distractors for students who confuse resonance with harmonics/overtones from the waves chapter.',
          },
          { label: 'the natural frequency', nudge: null },
          {
            label: 'half the natural frequency',
            nudge: '<b>(B)</b> and <b>(D)</b> are distractors for students who confuse resonance with harmonics/overtones from the waves chapter.',
          },
        ],
        correct: 2,
        solution: 'Resonance occurs when the driving frequency matches the natural frequency (for light damping, <i>ω</i><sub><i>r</i></sub> ≈ <i>ω</i><sub>0</sub>), making the term (<i>ω</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>)<sup>2</sup> in the amplitude denominator vanish.',
      },
      {
        t: 'mcq',
        q: 'For a damped oscillator the energy varies as the square of the amplitude. If the amplitude reduces to 1/√2 of its initial value, the energy becomes what fraction of the initial energy?',
        opts: [
          { label: '1/2', nudge: null },
          { label: '1/√2', nudge: '<b>(B)</b> forgets to square — applies the amplitude ratio directly to energy.' },
          { label: '1/4', nudge: '<b>(C)</b> squares the wrong factor (would be right if amplitude fell to 1/2).' },
          { label: '1/(2√2)', nudge: '<b>(D)</b> mixes up the powers.' },
        ],
        correct: 0,
        solution: 'Since <i>E</i> ∝ <i>A</i><sup>2</sup>, energy becomes (1/√2)<sup>2</sup> = 1/2 of the initial.',
      },
      {
        t: 'mcq',
        q: 'A hydraulic door-closer is designed so that, after the door is released, it returns to the closed position in the shortest possible time without swinging past and oscillating. This is an example of:',
        opts: [
          { label: 'underdamping', nudge: '<b>(A)</b> underdamping would let the door swing past and oscillate before settling.' },
          { label: 'critical damping', nudge: null },
          { label: 'overdamping', nudge: '<b>(C)</b> overdamping returns the door without oscillating but <b>too slowly</b>.' },
          { label: 'forced oscillation', nudge: '<b>(D)</b> there is no external periodic drive here, so it is not forced oscillation.' },
        ],
        correct: 1,
        solution: 'Critical damping (<i>b</i> = 2√(<i>mk</i>)) returns a system to equilibrium in the minimum time with no oscillation — exactly the requirement for a door-closer (and for a galvanometer needle or car shock absorber).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Believing damping noticeably slows the frequency.</b> For light damping <i>ω</i>′ ≈ <i>ω</i><sub>0</sub>; the visible effect is shrinking amplitude, not a slower oscillation. The frequency shift goes as <i>b</i><sup>2</sup> and is usually negligible.',
          '<b>Confusing transient and steady state.</b> In the steady state of a forced oscillation, the system vibrates at the <b>driving frequency</b>, never at its own natural frequency. Its natural-frequency motion belongs only to the brief transient.',
          '<b>Thinking resonance amplitude is infinite.</b> It is finite because real systems always have some damping; only the idealised zero-damping formula blows up.',
          '<b>Forgetting that energy decays twice as fast as amplitude.</b> <i>A</i> ∝ <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> but <i>E</i> ∝ <i>e</i><sup>−<i>bt</i>/<i>m</i></sup> — the energy time-constant is half the amplitude time-constant, because <i>E</i> ∝ <i>A</i><sup>2</sup>.',
          '<b>Mixing up the damping regimes.</b> Critical damping gives the fastest no-oscillation return; overdamping is also non-oscillatory but slower; underdamping still oscillates.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “amplitude falls to a fraction” problems, exploit the equal-interval property of exponentials — each fixed ratio drop takes the same time, so you rarely need to solve for <i>b</i> at all. And memorise two resonance-sharpness shortcuts: <i>Q</i> = 2π/(fractional energy lost per cycle), and the oscillator rings for about <i>N</i> = <i>Q</i>/(2π) cycles before its energy falls to 1/<i>e</i>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three regimes',
            note: 'free (constant <i>A</i>, at <i>ω</i><sub>0</sub>) → damped (shrinking <i>A</i>, left alone) → forced (steady <i>A</i>, at the <b>driving</b> frequency).',
          },
          {
            f: 'Damped motion',
            note: '<i>x</i> = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> cos(<i>ω</i>′<i>t</i> + <i>φ</i>), with <i>ω</i>′ = √(<i>ω</i><sub>0</sub><sup>2</sup> − (<i>b</i>/(2<i>m</i>))<sup>2</sup>) ≈ <i>ω</i><sub>0</sub> (light damping).',
          },
          {
            f: 'Decay',
            note: 'amplitude <i>A</i> ∝ <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup>; energy <i>E</i> ∝ <i>e</i><sup>−<i>bt</i>/<i>m</i></sup> (energy decays <b>twice as fast</b>).',
          },
          {
            f: 'Driven amplitude',
            note: '<i>A</i> = (<i>F</i><sub>0</sub>/<i>m</i>)/√((<i>ω</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>)<sup>2</sup> + (<i>bω</i>/<i>m</i>)<sup>2</sup>); peaks at resonance <i>ω</i> ≈ <i>ω</i><sub>0</sub>, where <i>A</i><sub>res</sub> ≈ <i>F</i><sub>0</sub>/(<i>bω</i><sub>0</sub>).',
          },
          {
            f: 'Quality factor',
            note: '<i>Q</i> = <i>mω</i><sub>0</sub>/<i>b</i> = 2π (energy stored)/(energy lost per cycle); rings for ∼ <i>Q</i>/(2π) cycles.',
          },
          {
            f: 'Damping types',
            note: 'under (<i>b</i> < 2√(<i>mk</i>), oscillates) · critical (<i>b</i> = 2√(<i>mk</i>), fastest no-oscillation return) · over (<i>b</i> > 2√(<i>mk</i>), slow return).',
          },
        ],
        aids: [
          '<b>Memory aid — “Resonance = matching rhythm”:</b> biggest amplitude when the drive matches the natural frequency (the swing-push picture). And <b>“energy is amplitude squared, so it fades twice as fast”</b> — the one-line link back to SHM energy.',
        ],
      },
    ],
  },

  {
    n: '05',
    title: 'Reference Circle, Superposition & More SHM Systems',
    kalam: 'The projection of uniform circular motion onto a diameter is SHM.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the “everything that ties the chapter together” topic. The reference-circle picture is a guaranteed CBSE 1–2 mark item and the conceptual backbone JEE uses for phasors. JEE Main and Advanced love the standard non-obvious SHM systems — liquid in a U-tube, a floating block, the tunnel through the Earth — because they test whether you can prove a motion is SHM rather than recall a formula. Superposition of SHMs (collinear and perpendicular) and Lissajous figures appear in JEE Advanced and in NEET assertion–reason questions. Temperature error of a pendulum clock is a perennial favourite across all three exams.',
      },
      {
        t: 'p',
        html: 'Everything so far has treated SHM as algebra — a sine in time. This topic gives you the three tools that turn that algebra into deep understanding and let you handle any oscillator the examiner invents.',
      },
      {
        t: 'p',
        html: '<b>The reference circle — SHM is a shadow.</b> Imagine a bead glued to the rim of a turntable spinning at a steady angular speed <i>ω</i>, radius <i>A</i>. Shine a light from the side and watch the bead’s <b>shadow</b> on a wall. As the bead goes round and round at constant speed, its shadow runs back and forth in a straight line — and that shadow is executing exactly simple harmonic motion. This is not an analogy; it is a mathematical identity. The projection of uniform circular motion onto a diameter <b>is</b> SHM. Suddenly the three SHM constants have a picture: <i>A</i> is the radius of the circle, <i>ω</i> is how fast the bead circulates, and the phase (<i>ωt</i> + <i>φ</i>) is literally the angle the radius has swept. A “phasor” is just this rotating radius — and that is why we can add SHMs like vectors.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the bead moves at constant speed, but its shadow does not. When the bead is at the top or bottom of the circle (the turning points of the shadow), the shadow is momentarily still; when the bead crosses the horizontal (the shadow at its centre), the shadow is sprinting. Constant circular speed, varying shadow speed — that is the whole story of why SHM speeds up near the middle and freezes at the ends, drawn in one picture.',
      },
      {
        t: 'p',
        html: '<b>The differential-equation test — what makes a motion SHM.</b> Forget formulas for a second. A motion is SHM if and only if its acceleration is proportional to displacement and points back toward the centre:<br>d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> = −<i>ω</i><sup>2</sup><i>x</i>.<br>This is the real, rigorous definition. To prove that some strange new system (a wobbling test-tube, a sloshing liquid, a body falling through the Earth) is SHM, you do not need to recognise it — you displace it a little, find its restoring force or its energy, and show the acceleration comes out as −(positive constant) × <i>x</i>. That constant is <i>ω</i><sup>2</sup>, and the period drops out as <i>T</i> = 2π/<i>ω</i>. One method, every system.',
      },
      {
        t: 'p',
        html: '<b>Superposition — adding oscillations.</b> Real objects often feel two SHMs at once (two tuning forks, a particle pushed by two springs). If they act <b>along the same line</b>, the results add like phasors (vectors) and you get another SHM. If they act <b>at right angles</b>, the particle traces a 2-D path — a straight line, an ellipse, a circle, or, for unequal frequencies, the beautiful looping <b>Lissajous figures</b> you see on an oscilloscope.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• The reference-circle equivalence is exact only for <b>uniform</b> circular motion (constant <i>ω</i>).<br>• The “<i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>” test certifies SHM only for <b>small displacements</b>, where the restoring effect stays linear; large swings make every real system anharmonic.<br>• Collinear superposition gives a single clean SHM only when the two components share the <b>same frequency</b>; different frequencies give beats, not SHM.<br>• The standard system periods below (U-tube, floating body, tunnel) assume <b>ideal</b> conditions: incompressible non-viscous liquid, uniform cross-section, uniform Earth density, no friction or drag.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Reference circle (projection of uniform circular motion)',
        main: '<i>x</i> = <i>A</i> cos(<i>ωt</i> + <i>φ</i>)<br><i>v</i> = −<i>Aω</i> sin(<i>ωt</i> + <i>φ</i>)<br><i>a</i> = −<i>Aω</i><sup>2</sup> cos(<i>ωt</i> + <i>φ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'The radius <i>A</i> = amplitude; circular speed <i>ω</i> = angular frequency; swept angle (<i>ωt</i> + <i>φ</i>) = phase. The two perpendicular projections of the same circular motion are <i>x</i> = <i>A</i> cos(<i>ωt</i> + <i>φ</i>) and <i>y</i> = <i>A</i> sin(<i>ωt</i> + <i>φ</i>) — two SHMs 90° out of phase.',
      },
      {
        t: 'formula',
        kicker: 'Defining differential equation of SHM',
        main: 'd<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> + <i>ω</i><sup>2</sup><i>x</i> = 0   ⟹   <i>x</i> = <i>A</i> cos(<i>ωt</i> + <i>φ</i>)<br><i>ω</i> = √((restoring constant)/inertia)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Superposition of two collinear SHMs',
        main: '(<i>x</i><sub>1</sub> = <i>A</i><sub>1</sub> cos <i>ωt</i>, <i>x</i><sub>2</sub> = <i>A</i><sub>2</sub> cos(<i>ωt</i> + <i>δ</i>)), resultant <i>x</i> = <i>A</i> cos(<i>ωt</i> + <i>φ</i>):<br><i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>δ</i>)<br>tan <i>φ</i> = (<i>A</i><sub>2</sub> sin <i>δ</i>)/(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> cos <i>δ</i>)<br>In phase (<i>δ</i> = 0): <i>A</i> = <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> (maximum)<br>Anti-phase (<i>δ</i> = π): <i>A</i> = |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>| (minimum)<br>Quadrature (<i>δ</i> = π/2): <i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Superposition of two perpendicular SHMs',
        main: '(<i>x</i> = <i>A</i> cos <i>ωt</i>, <i>y</i> = <i>B</i> cos(<i>ωt</i> + <i>δ</i>)), equal frequency:<br><i>δ</i> = 0: straight line <i>y</i> = (<i>B</i>/<i>A</i>)<i>x</i><br><i>δ</i> = π: straight line <i>y</i> = −(<i>B</i>/<i>A</i>)<i>x</i><br><i>δ</i> = π/2: ellipse <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> + <i>y</i><sup>2</sup>/<i>B</i><sup>2</sup> = 1 (a <b>circle</b> if <i>A</i> = <i>B</i>)<br>Unequal frequencies → <b>Lissajous figures</b>; the frequency ratio sets the number of loops',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Periods of standard SHM systems',
        main: 'Liquid column (U-tube): <i>T</i> = 2π√(<i>L</i>/(2<i>g</i>)) (<i>L</i> = total length of liquid column)<br>Floating body: <i>T</i> = 2π√(<i>h</i>/<i>g</i>) = 2π√(<i>m</i>/(<i>Aρg</i>)) (<i>h</i> = equilibrium submerged depth)<br>Tunnel through Earth: <i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min (<i>R</i> = radius of the Earth)<br>Bead sliding in a smooth bowl: <i>T</i> = 2π√(<i>R</i>/<i>g</i>) (<i>R</i> = radius of the bowl)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Pendulum fine points',
        main: 'Temperature error: <i>L</i> = <i>L</i><sub>0</sub>(1 + <i>α</i> Δ<i>θ</i>) ⇒ Δ<i>T</i>/<i>T</i> = ½<i>α</i> Δ<i>θ</i>; time lost/gained per day = ½<i>α</i> Δ<i>θ</i> × 86400 s<br>Charged bob in field <i>E</i>: vertical field <i>g</i><sub>eff</sub> = <i>g</i> ± <i>qE</i>/<i>m</i>; horizontal field <i>g</i><sub>eff</sub> = √(<i>g</i><sup>2</sup> + (<i>qE</i>/<i>m</i>)<sup>2</sup>)<br>Large amplitude (anharmonic) correction: <i>T</i> ≈ 2π√(<i>L</i>/<i>g</i>)(1 + <i>θ</i><sub>0</sub><sup>2</sup>/16) (<i>θ</i><sub>0</sub> in radians)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Time-averaged motion over one cycle',
        main: '⟨speed⟩ = 4<i>A</i>/<i>T</i> = 2<i>Aω</i>/π<br>⟨<i>v</i>⟩<sub>cycle</sub> = 0<br><i>v</i><sub>rms</sub> = <i>Aω</i>/√2',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation, units, dimensions:</b> <i>A</i>, <i>B</i>, <i>L</i>, <i>h</i>, <i>R</i> — lengths [L] (in the U-tube and floating-body formulas <i>A</i> is the cross-sectional area, [L<sup>2</sup>]); <i>ω</i> — [T<sup>−1</sup>]; <i>δ</i>, <i>φ</i>, <i>θ</i><sub>0</sub> — radians (dimensionless); <i>ρ</i> — density [M L<sup>−3</sup>]; <i>α</i> — [K<sup>−1</sup>]; <i>q</i> — charge [A T]; <i>E</i> — field [M L T<sup>−3</sup> A<sup>−1</sup>].',
      },

      { t: 'part', title: 'Key derivations and procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — SHM is the projection of uniform circular motion.</b> A particle moves anticlockwise on a circle of radius <i>A</i> at constant angular speed <i>ω</i>; at time <i>t</i> its radius makes angle (<i>ωt</i> + <i>φ</i>) with the <i>x</i>-axis. Its coordinates are <i>x</i> = <i>A</i> cos(<i>ωt</i> + <i>φ</i>) and <i>y</i> = <i>A</i> sin(<i>ωt</i> + <i>φ</i>). Differentiating the <i>x</i>-projection twice gives <i>ẍ</i> = −<i>ω</i><sup>2</sup><i>A</i> cos(<i>ωt</i> + <i>φ</i>) = −<i>ω</i><sup>2</sup><i>x</i> — the SHM equation. So the shadow on the <i>x</i>-axis is SHM with amplitude <i>A</i> (the radius) and angular frequency <i>ω</i> (the circulation rate). The centripetal acceleration <i>ω</i><sup>2</sup><i>A</i> of the circular motion projects to the SHM acceleration <i>ω</i><sup>2</sup><i>x</i>, and the circular speed <i>ωA</i> projects to the SHM speed.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — The phasor (vector) method for adding collinear SHMs.</b> Represent <i>x</i><sub>1</sub> = <i>A</i><sub>1</sub> cos <i>ωt</i> and <i>x</i><sub>2</sub> = <i>A</i><sub>2</sub> cos(<i>ωt</i> + <i>δ</i>) as two rotating radius vectors of lengths <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub> with a fixed angle <i>δ</i> between them. Since both rotate at the same <i>ω</i>, the angle between them never changes, so they add like ordinary vectors. The resultant length follows from the parallelogram law (<i>δ</i> is the angle between the two phasors):<br><i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>δ</i>),<br>and the resultant’s phase <i>φ</i> from resolving components: tan <i>φ</i> = (<i>A</i><sub>2</sub> sin <i>δ</i>)/(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> cos <i>δ</i>). The resultant is again an SHM of the same frequency — this is why a phasor diagram turns trigonometry into geometry.',
      },
      {
        t: 'p',
        html: '<b>Derivation 3 — The universal recipe (force or energy) for any SHM system.</b> <b>Force method:</b> displace the system by a small <i>x</i>, find the net restoring force. If it comes out as <i>F</i> = −<i>k</i><sub>eff</sub><i>x</i>, then <i>mẍ</i> = −<i>k</i><sub>eff</sub><i>x</i>, so <i>ω</i> = √(<i>k</i><sub>eff</sub>/<i>m</i>). <b>Energy method:</b> write the total energy <i>E</i> = ½<i>mẋ</i><sup>2</sup> + ½<i>k</i><sub>eff</sub><i>x</i><sup>2</sup>. Because <i>E</i> is constant, d<i>E</i>/d<i>t</i> = <i>mẋẍ</i> + <i>k</i><sub>eff</sub><i>xẋ</i> = 0, which gives <i>ẍ</i> + (<i>k</i><sub>eff</sub>/<i>m</i>)<i>x</i> = 0 — the SHM equation again, with <i>ω</i> = √(<i>k</i><sub>eff</sub>/<i>m</i>). Use whichever is cleaner for the system in front of you.',
      },
      { t: 'p', html: '<b>Derivation 4 — Three classic systems, each in three lines.</b>' },
      {
        t: 'p',
        html: '<b>Liquid column in a U-tube.</b> Total liquid length <i>L</i>, tube area <i>A</i>, density <i>ρ</i>. Push the liquid down one arm by <i>y</i>; it rises <i>y</i> in the other, creating a height difference 2<i>y</i>. The unbalanced weight is <i>F</i> = −(2<i>y</i>)<i>Aρg</i>, and the moving mass is <i>LAρ</i>. Hence <i>ÿ</i> = −(2<i>g</i>/<i>L</i>)<i>y</i>, giving <i>T</i> = 2π√(<i>L</i>/(2<i>g</i>)).',
      },
      {
        t: 'p',
        html: '<b>Floating body.</b> A body floats with submerged depth <i>h</i> (equilibrium: <i>mg</i> = <i>Ahρg</i>, so <i>m</i> = <i>Ahρ</i>). Push it down by <i>x</i>; the extra buoyant force is <i>Aρgx</i> upward. Then <i>ẍ</i> = −(<i>Aρg</i>/<i>m</i>)<i>x</i> = −(<i>g</i>/<i>h</i>)<i>x</i>, giving <i>T</i> = 2π√(<i>h</i>/<i>g</i>).',
      },
      {
        t: 'p',
        html: '<b>Tunnel through the Earth.</b> For a uniform Earth, gravity at depth (distance <i>r</i> from centre) is <i>g</i>(<i>r</i>) = <i>gr</i>/<i>R</i>, always pointing to the centre. A body dropped into a straight tunnel feels <i>r̈</i> = −(<i>g</i>/<i>R</i>)<i>r</i>, giving <i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min. (A particle sliding inside a smooth hemispherical bowl obeys the same equation for small swings, with <i>R</i> now the bowl’s radius.)',
      },
      { t: 'fig', id: 'p11-13-fig-13.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two SHMs act on a particle along the same line: <i>x</i><sub>1</sub> = 3 sin <i>ωt</i> cm and <i>x</i><sub>2</sub> = 4 sin(<i>ωt</i> + π/2) cm. Find the amplitude and initial phase of the resultant motion.',
        steps: [
          '<b>Solution:</b> the phase difference is <i>δ</i> = π/2, so cos <i>δ</i> = 0. The resultant amplitude is<br><i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>δ</i>) = √(3<sup>2</sup> + 4<sup>2</sup> + 0) = √25',
          'The phase is tan <i>φ</i> = (<i>A</i><sub>2</sub> sin <i>δ</i>)/(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> cos <i>δ</i>) = 4(1)/(3 + 0) = 4/3, so <i>φ</i> = tan<sup>−1</sup>(4/3)',
          '(The 3–4–5 right triangle is the phasor diagram itself — perpendicular phasors add by Pythagoras.)',
        ],
        ans: 'amplitude 5 cm, phase ≈ 53°',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A wooden cylinder floats upright in water with 16 cm of its length submerged. It is pushed down slightly and released. Find its period of small vertical oscillations. (Take <i>g</i> = 9.8 m s<sup>−2</sup>.)',
        steps: [
          '<b>The trap:</b> students hunt for the mass, density, or area — none is needed. For a floating body the period depends only on the <b>equilibrium submerged depth</b>.',
          '<b>The shortcut:</b><br><i>T</i> = 2π√(<i>h</i>/<i>g</i>) = 2π√(0.16/9.8) = 2π√0.01633 = 2π(0.1278)',
          'The formula <i>T</i> = 2π√(<i>h</i>/<i>g</i>) is identical in form to a simple pendulum of length <i>h</i> — memorise that twin.',
        ],
        ans: '<i>T</i> ≈ 0.80 s',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A U-tube contains mercury; the total length of the mercury column is 1.0 m. The mercury is displaced slightly and released. Find the period of oscillation. (Take <i>g</i> = 9.8 m s<sup>−2</sup>.)',
        steps: [
          '<b>Solution:</b> for a liquid column of total length <i>L</i>,<br><i>T</i> = 2π√(<i>L</i>/(2<i>g</i>)) = 2π√(1.0/(2 × 9.8)) = 2π√0.05102 = 2π(0.2259)',
          'Note the period is <b>independent of the density</b> of the liquid (mercury, water, oil — all give the same period for the same column length), because both the restoring force and the inertia scale with <i>ρ</i> and it cancels.',
        ],
        ans: '<i>T</i> ≈ 1.42 s, independent of which liquid fills the tube',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A pendulum clock keeps perfect time at 20°C. The pendulum rod has a linear expansion coefficient <i>α</i> = 1.2 × 10<sup>−5</sup> K<sup>−1</sup>. In summer the temperature rises to 40°C. Does the clock run fast or slow, and by how many seconds per day?',
        steps: [
          '<b>Solution:</b> the rod lengthens, so <i>T</i> ∝ √<i>L</i> increases — each tick now takes longer, so the clock <b>runs slow</b> (loses time). The fractional change of period is<br>Δ<i>T</i>/<i>T</i> = ½<i>α</i> Δ<i>θ</i> = ½(1.2 × 10<sup>−5</sup>)(20) = 1.2 × 10<sup>−4</sup>.',
          'Over one day (86400 s) the time lost is<br>Δ<i>t</i> = (Δ<i>T</i>/<i>T</i>) × 86400 = (1.2 × 10<sup>−4</sup>)(86400)',
          '(A cooler rod would shorten and the clock would gain — this is why precision pendulum clocks use temperature-compensated rods.)',
        ],
        ans: 'the clock runs <b>slow</b>, losing about 10.4 s per day',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A particle in SHM is described as the projection of uniform circular motion of radius 5 cm and angular speed 4 rad s<sup>−1</sup>. Write its amplitude, angular frequency and maximum speed.',
            a: '<i>A</i> = 5 cm, <i>ω</i> = 4 rad s<sup>−1</sup>, <i>v</i><sub>max</sub> = <i>Aω</i> = 20 cm s<sup>−1</sup>',
          },
          {
            q: '[NEET] Two collinear SHMs of equal amplitude <i>a</i> differ in phase by 2π/3. Find the amplitude of their resultant.',
            a: '<i>A</i><sub>res</sub> = √(<i>a</i><sup>2</sup> + <i>a</i><sup>2</sup> + 2<i>a</i><sup>2</sup> cos(2π/3)) = √(<i>a</i><sup>2</sup> + <i>a</i><sup>2</sup> − <i>a</i><sup>2</sup>) = <i>a</i>',
          },
          {
            q: '[JEE Main] A test-tube of cross-section <i>A</i> loaded with lead floats vertically in water with 12 cm submerged. Find its period of small vertical oscillation. (Take <i>g</i> = 9.8 m s<sup>−2</sup>.)',
            a: '<i>T</i> = 2π√(0.12/9.8) ≈ 0.695 s',
          },
          {
            q: '[JEE Main] Estimate the time a stone would take to fall from one end of a straight smooth tunnel bored through the centre of the Earth to the far end. (Take <i>R</i> = 6.4 × 10<sup>6</sup> m, <i>g</i> = 9.8 m s<sup>−2</sup>.)',
            a: 'Half the period: <i>t</i> = π√(<i>R</i>/<i>g</i>) = π√(6.53 × 10<sup>5</sup>) ≈ 2538 s ≈ 42.3 min',
          },
          {
            q: '[JEE Advanced] Two perpendicular SHMs <i>x</i> = <i>A</i> cos <i>ωt</i> and <i>y</i> = <i>A</i> cos(<i>ωt</i> + π/2) are combined. Identify the path traced by the particle.',
            a: 'A <b>circle</b> of radius <i>A</i> (equal amplitudes, quadrature phase), traced clockwise',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The projection of a particle in uniform circular motion onto a diameter of the circle executes:',
        opts: [
          { label: 'uniform motion', nudge: '<b>(A)</b> the shadow’s speed varies (fast at the centre, zero at the ends), so it is not uniform.' },
          {
            label: 'non-uniform circular motion',
            nudge: '<b>(B)</b> and <b>(D)</b> describe two-dimensional motions; the projection is strictly one-dimensional.',
          },
          { label: 'simple harmonic motion', nudge: null },
          {
            label: 'projectile motion',
            nudge: '<b>(B)</b> and <b>(D)</b> describe two-dimensional motions; the projection is strictly one-dimensional.',
          },
        ],
        correct: 2,
        solution: 'Differentiating the projection <i>x</i> = <i>A</i> cos(<i>ωt</i> + <i>φ</i>) twice gives <i>ẍ</i> = −<i>ω</i><sup>2</sup><i>x</i>, the defining equation of SHM. This equivalence is the reference-circle theorem.',
      },
      {
        t: 'mcq',
        q: 'Two collinear SHMs of equal amplitude <i>a</i> and the same frequency combine. For their resultant amplitude to be <i>a</i>√2, their phase difference must be:',
        opts: [
          { label: '0', nudge: '<b>(A)</b> gives 2<i>a</i> (maximum).' },
          { label: 'π/4', nudge: '<b>(B)</b> gives an intermediate value, not <i>a</i>√2.' },
          { label: 'π/2', nudge: null },
          { label: 'π', nudge: '<b>(D)</b> gives 0 (cancellation).' },
        ],
        correct: 2,
        solution: '<i>A</i> = √(<i>a</i><sup>2</sup> + <i>a</i><sup>2</sup> + 2<i>a</i><sup>2</sup> cos <i>δ</i>). Setting this equal to <i>a</i>√2 gives 2<i>a</i><sup>2</sup> + 2<i>a</i><sup>2</sup> cos <i>δ</i> = 2<i>a</i><sup>2</sup>, so cos <i>δ</i> = 0, i.e. <i>δ</i> = π/2.',
      },
      {
        t: 'mcq',
        q: 'Which of these systems does <b>not</b> execute simple harmonic motion for small displacements?',
        opts: [
          {
            label: 'liquid oscillating in a U-tube',
            nudge: '<b>(A)</b>, <b>(B)</b>, <b>(C)</b> all yield a restoring acceleration of the form −<i>ω</i><sup>2</sup><i>x</i> for small displacements, so all three are SHM.',
          },
          {
            label: 'a ball rolling back and forth at the bottom of a spherical bowl',
            nudge: '<b>(A)</b>, <b>(B)</b>, <b>(C)</b> all yield a restoring acceleration of the form −<i>ω</i><sup>2</sup><i>x</i> for small displacements, so all three are SHM.',
          },
          {
            label: 'a body dropped into a tunnel through the Earth',
            nudge: '<b>(A)</b>, <b>(B)</b>, <b>(C)</b> all yield a restoring acceleration of the form −<i>ω</i><sup>2</sup><i>x</i> for small displacements, so all three are SHM.',
          },
          { label: 'a ball bouncing elastically off the floor', nudge: null },
        ],
        correct: 3,
        solution: 'A bouncing ball has a constant downward acceleration <i>g</i> between bounces — its acceleration is not proportional to (nor opposite) the displacement, so it is periodic but <b>not</b> SHM.',
      },
      {
        t: 'mcq',
        q: 'Two perpendicular SHMs of equal amplitude and equal frequency, with a phase difference of π/2, trace a:',
        opts: [
          { label: 'straight line', nudge: '<b>(A)</b> arises for <i>δ</i> = 0 or π.' },
          { label: 'parabola', nudge: '<b>(B)</b> never arises for equal-frequency perpendicular SHMs.' },
          { label: 'circle', nudge: null },
          { label: 'figure-of-eight', nudge: '<b>(D)</b> needs a 2 ∶ 1 frequency ratio (a Lissajous figure), not equal frequencies.' },
        ],
        correct: 2,
        solution: 'With <i>x</i> = <i>A</i> cos <i>ωt</i> and <i>y</i> = <i>A</i> cos(<i>ωt</i> + π/2) = −<i>A</i> sin <i>ωt</i>, we get <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = <i>A</i><sup>2</sup> — a circle.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding SHM amplitudes arithmetically regardless of phase.</b> Two SHMs of amplitude 3 and 4 give a resultant between 1 and 7 depending on their phase difference — only <b>in phase</b> does it reach 7. Always use the phasor formula.',
          '<b>Using the wrong length in the U-tube formula.</b> <i>L</i> is the <b>total length of the liquid column</b>, not the length in one arm and not the displacement.',
          '<b>Plugging the body’s full length into the floating-body period.</b> The period uses the <b>equilibrium submerged depth</b> <i>h</i>, not the total length of the floating object.',
          '<b>Forgetting that the reference-circle speed is constant but the SHM speed is not.</b> The bead circulates uniformly; its shadow accelerates and decelerates.',
          '<b>Getting the temperature sign backwards.</b> A temperature rise lengthens the rod, increasing the period, so the clock runs <b>slow</b> (loses time); a temperature drop makes it run fast.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Whenever you meet an unfamiliar oscillating system, do not look for a memorised formula — run the universal recipe: displace by <i>x</i>, find the net restoring force (or write the energy and differentiate), force it into the shape <i>ẍ</i> = −<i>ω</i><sup>2</sup><i>x</i>, and read off <i>ω</i>. Three of the “hardest-looking” JEE systems — U-tube, floating block, Earth tunnel — collapse to one line each this way. And remember the family of look-alike periods: simple pendulum 2π√(<i>L</i>/<i>g</i>), floating body 2π√(<i>h</i>/<i>g</i>), Earth tunnel 2π√(<i>R</i>/<i>g</i>) — same skeleton, different length.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Reference circle',
            note: 'SHM = projection of uniform circular motion; radius → amplitude, circulation rate → <i>ω</i>, swept angle → phase. Two perpendicular projections are SHMs 90° apart.',
          },
          {
            f: 'SHM test / definition',
            note: '<i>ẍ</i> + <i>ω</i><sup>2</sup><i>x</i> = 0; prove any system is SHM by showing <i>ẍ</i> = −(const)<i>x</i>, then <i>ω</i> = √const.',
          },
          {
            f: 'Collinear superposition',
            note: '<i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>δ</i>); max <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> (<i>δ</i> = 0), min |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>| (<i>δ</i> = π), √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup>) (<i>δ</i> = π/2).',
          },
          {
            f: 'Perpendicular superposition (equal freq)',
            note: 'line (<i>δ</i> = 0, π), ellipse (<i>δ</i> = π/2), circle (equal amplitudes, <i>δ</i> = π/2); unequal freq → Lissajous.',
          },
          {
            f: 'Standard periods',
            note: 'U-tube <i>T</i> = 2π√(<i>L</i>/(2<i>g</i>)) (<i>L</i> = total column); floating body <i>T</i> = 2π√(<i>h</i>/<i>g</i>) (<i>h</i> = submerged depth); Earth tunnel <i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min; bead in a smooth bowl 2π√(<i>R</i>/<i>g</i>), <i>R</i> = bowl radius.',
          },
          {
            f: 'Pendulum extras',
            note: 'temperature Δ<i>T</i>/<i>T</i> = ½<i>α</i>Δ<i>θ</i> (rise ⇒ slow); charged bob <i>g</i><sub>eff</sub> = <i>g</i> ± <i>qE</i>/<i>m</i> (vertical) or √(<i>g</i><sup>2</sup> + (<i>qE</i>/<i>m</i>)<sup>2</sup>) (horizontal); large amplitude <i>T</i> ≈ 2π√(<i>L</i>/<i>g</i>)(1 + <i>θ</i><sub>0</sub><sup>2</sup>/16).',
          },
          {
            f: 'Cycle averages',
            note: '⟨speed⟩ = 4<i>A</i>/<i>T</i> = 2<i>Aω</i>/π; ⟨<i>v</i>⟩<sub>cycle</sub> = 0; <i>v</i><sub>rms</sub> = <i>Aω</i>/√2.',
          },
        ],
        aids: [
          '<b>Memory aid — “One test rules them all”:</b> a motion is SHM exactly when acceleration = −<i>ω</i><sup>2</sup> × displacement. Find that line for any system and the period falls out. And the period-twins to keep on a sticky note: √(<i>L</i>/<i>g</i>), √(<i>h</i>/<i>g</i>), √(<i>R</i>/<i>g</i>) — pendulum, float, planet.',
        ],
      },
    ],
  },
];
