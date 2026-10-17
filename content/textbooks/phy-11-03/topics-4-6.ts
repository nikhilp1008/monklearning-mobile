import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topics 04 to 06, word for word from pp. 157–181 of the Class 11
 * Physics Master Reference: Sub-topic 04, Projectile Motion (pp. 157 to 164),
 * Sub-topic 05, Relative Velocity in Two Dimensions (pp. 165 to 172), and
 * Sub-topic 06, Circular Motion Dynamics (pp. 173 to 181). Figures 3.4
 * (p. 159, drawn on p. 160), 3.5 (p. 167, drawn on p. 168), 3.6 (p. 175, drawn
 * on p. 176) and 3.7 (p. 178, inside Example 4, drawn on p. 179).
 */
export const TOPICS: Topic[] = [
  {
    n: '04',
    title: 'Projectile Motion',
    kalam:
      'The crucial idea is independence: what happens horizontally has zero effect on what happens vertically, and vice-versa.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the single most-tested topics in all of Class 11 mechanics. CBSE Boards reliably ask a derivation (time of flight, range, or maximum height) plus a numerical. JEE Main carries 1–2 questions every year — trajectory, range/height relations, velocity at an instant, or horizontal projectiles from a height. NEET loves the conceptual traps (velocity and acceleration at the top, complementary angles). JEE Advanced layers it with inclined planes, radius of curvature, and target-hitting constraints.',
      },
      {
        t: 'p',
        html: 'Throw a cricket ball across the maidan and it traces a graceful arch before landing. That arch — the <b>trajectory</b> — looks complicated, but the secret of projectile motion is that it is really two simple, independent motions happening at the same time, stitched together only by the clock.',
      },
      {
        t: 'p',
        html: 'Once the ball leaves your hand, the only force on it (ignoring air) is gravity, and gravity pulls <b>straight down</b>. It has no sideways component at all. So think of the motion in two separate channels:<br>• <b>Horizontally:</b> there is no force, so by Newton’s first law the horizontal velocity never changes. The ball drifts sideways at a perfectly constant speed — uniform motion.<br>• <b>Vertically:</b> gravity acts fully, so the vertical motion is exactly <b>free fall</b> — the ball rises, slows, stops momentarily, and comes back down, all governed by <i>g</i>.',
      },
      {
        t: 'p',
        html: 'The crucial idea is <b>independence</b>: what happens horizontally has zero effect on what happens vertically, and vice-versa. They share only one thing — the elapsed <b>time</b> <i>t</i>. This is why you resolve the launch velocity <i>u</i> into <i>u</i> cos <i>θ</i> (horizontal) and <i>u</i> sin <i>θ</i> (vertical) and then treat each channel with the tools you already know: constant-velocity motion sideways, the free-fall equations up-and-down.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Fire one bullet horizontally from a gun and, at the very same instant, simply drop a second bullet from the same height. Which lands first? They land together. The fired bullet’s huge horizontal speed does nothing to delay its fall, because horizontal motion and vertical motion don’t talk to each other. Gravity pulls both downward identically. The fired one merely travels far sideways while falling the same way the dropped one does. Internalise this and projectile motion stops being scary — it’s just “free fall with a sideways drift.”',
      },
      {
        t: 'p',
        html: 'When you combine uniform horizontal drift with accelerated vertical fall, the path that emerges is a <b>parabola</b> — that’s the shape of every (air-free) fountain jet, hose stream, and basketball shot. The familiar quantities follow naturally: how long it stays up (<b>time of flight</b>), how high it climbs (<b>maximum height</b>), and how far it travels (<b>horizontal range</b>), with the celebrated result that range is greatest at a launch angle of 45°.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>Air resistance is neglected.</b> In reality drag reduces both range and height and breaks the up–down symmetry; the ideal parabola assumes a vacuum-like situation.<br>• <i>g</i> is taken <b>constant</b> (uniform near the Earth’s surface) and the Earth flat over the flight.<br>• The standard symmetric formulas (<i>T</i>, <i>H</i>, <i>R</i>) assume <b>launch and landing at the same height</b>. If the projectile lands higher or lower, you must go back to the component equations.<br>• Horizontal velocity is constant <b>only</b> because there’s no horizontal force — introduce wind or thrust and this breaks.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: 'For a projectile launched from ground level with speed <i>u</i> at angle <i>θ</i> above the horizontal (take up as positive, <i>a</i><sub><i>x</i></sub> = 0, <i>a</i><sub><i>y</i></sub> = −<i>g</i>):',
      },
      {
        t: 'formula',
        kicker: 'Velocity components (initial)',
        main: '<i>u</i><sub><i>x</i></sub> = <i>u</i> cos <i>θ</i> (constant throughout)<br><i>u</i><sub><i>y</i></sub> = <i>u</i> sin <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Velocity at time t',
        main: '<i>v</i><sub><i>x</i></sub> = <i>u</i> cos <i>θ</i><br><i>v</i><sub><i>y</i></sub> = <i>u</i> sin <i>θ</i> − <i>gt</i><br>|<i>v⃗</i>| = √(<i>v</i><sub><i>x</i></sub><sup>2</sup> + <i>v</i><sub><i>y</i></sub><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Position at time t',
        main: '<i>x</i> = (<i>u</i> cos <i>θ</i>) <i>t</i><br><i>y</i> = (<i>u</i> sin <i>θ</i>) <i>t</i> − ½<i>gt</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equation of trajectory (a parabola)',
        main: '<i>y</i> = <i>x</i> tan <i>θ</i> − <i>gx</i><sup>2</sup>/(2<i>u</i><sup>2</sup> cos<sup>2</sup> <i>θ</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Time of flight',
        main: '<i>T</i> = (2<i>u</i> sin <i>θ</i>)/<i>g</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Maximum height',
        main: '<i>H</i> = (<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>)/(2<i>g</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Horizontal range',
        main: '<i>R</i> = (<i>u</i><sup>2</sup> sin 2<i>θ</i>)/<i>g</i><br><i>R</i><sub>max</sub> = <i>u</i><sup>2</sup>/<i>g</i> at <i>θ</i> = 45°',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Handy relations',
        main: 'Complementary angles <i>θ</i> and (90° − <i>θ</i>) give the <b>same range</b>.<br>For complementary angles, <i>H</i><sub>1</sub> + <i>H</i><sub>2</sub> = <i>u</i><sup>2</sup>/(2<i>g</i>) (independent of <i>θ</i>).<br><i>R</i> = 4<i>H</i> cot <i>θ</i>; at 45°, <i>R</i><sub>max</sub> = 4<i>H</i>.',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Horizontal projectile from a height h',
        main: '<i>T</i> = √(2<i>h</i>/<i>g</i>)<br><i>R</i> = <i>u</i>√(2<i>h</i>/<i>g</i>)<br><i>y</i> = <i>gx</i><sup>2</sup>/(2<i>u</i><sup>2</sup>) (<i>y</i> measured downward from the launch point)',
        legend: ['<i>u</i> = the horizontal launch speed'],
        note: '<i>u</i><sub><i>y</i></sub> = 0',
      },
      {
        t: 'p',
        html: 'All quantities SI: <i>u</i> in m/s, <i>g</i> in m/s<sup>2</sup>, <i>H</i>, <i>R</i>, <i>h</i> in m, <i>T</i> in s.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: 'Set up axes with the origin at the launch point, <i>x</i> horizontal, <i>y</i> vertical (up positive). The launch velocity resolves into <i>u</i><sub><i>x</i></sub> = <i>u</i> cos <i>θ</i> and <i>u</i><sub><i>y</i></sub> = <i>u</i> sin <i>θ</i>, with <i>a</i><sub><i>x</i></sub> = 0 and <i>a</i><sub><i>y</i></sub> = −<i>g</i>. Horizontal and vertical motions are then handled separately, sharing only the time <i>t</i>.',
      },
      { t: 'fig', id: 'p11-03-fig-3.4' },
      {
        t: 'p',
        html: '<b>Time of flight <i>T</i>.</b> The projectile returns to launch level when <i>y</i> = 0 again:<br><i>y</i> = (<i>u</i> sin <i>θ</i>) <i>t</i> − ½<i>gt</i><sup>2</sup> = 0 ⇒ <i>t</i> (<i>u</i> sin <i>θ</i> − ½<i>gt</i>) = 0.<br>The root <i>t</i> = 0 is the launch instant; the other gives the flight time:<br><i>T</i> = (2<i>u</i> sin <i>θ</i>)/<i>g</i>.<br>Why: the vertical motion is symmetric free fall — time up equals time down, so the total is twice the time to the top.',
      },
      {
        t: 'p',
        html: '<b>Maximum height <i>H</i>.</b> At the apex the vertical velocity is momentarily zero, <i>v</i><sub><i>y</i></sub> = <i>u</i> sin <i>θ</i> − <i>gt</i><sub>1</sub> = 0, giving <i>t</i><sub>1</sub> = (<i>u</i> sin <i>θ</i>)/<i>g</i> (exactly <i>T</i>/2). Substituting into the vertical displacement:<br><i>H</i> = (<i>u</i> sin <i>θ</i>)<i>t</i><sub>1</sub> − ½<i>gt</i><sub>1</sub><sup>2</sup> = (<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>)/<i>g</i> − (<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>)/(2<i>g</i>) = (<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>)/(2<i>g</i>).<br>Why: only the vertical channel determines how high it climbs; the horizontal drift is irrelevant to height.',
      },
      {
        t: 'p',
        html: '<b>Horizontal range <i>R</i>.</b> Horizontal motion is uniform, so distance = (horizontal speed) × (time of flight):<br><i>R</i> = (<i>u</i> cos <i>θ</i>) <i>T</i> = (<i>u</i> cos <i>θ</i>) · (2<i>u</i> sin <i>θ</i>)/<i>g</i> = (2<i>u</i><sup>2</sup> sin <i>θ</i> cos <i>θ</i>)/<i>g</i> = (<i>u</i><sup>2</sup> sin 2<i>θ</i>)/<i>g</i>.<br>Since sin 2<i>θ</i> is largest (= 1) at 2<i>θ</i> = 90°, the range is maximum at <i>θ</i> = 45°, where <i>R</i><sub>max</sub> = <i>u</i><sup>2</sup>/<i>g</i>.',
      },
      {
        t: 'p',
        html: '<b>Equation of trajectory.</b> Eliminate <i>t</i> between the two position equations. From <i>x</i> = (<i>u</i> cos <i>θ</i>)<i>t</i>, we get <i>t</i> = <i>x</i>/(<i>u</i> cos <i>θ</i>). Substitute into <i>y</i> = (<i>u</i> sin <i>θ</i>)<i>t</i> − ½<i>gt</i><sup>2</sup>:<br><i>y</i> = (<i>u</i> sin <i>θ</i>) <i>x</i>/(<i>u</i> cos <i>θ</i>) − (<i>g</i>/2)(<i>x</i>/(<i>u</i> cos <i>θ</i>))<sup>2</sup> = <i>x</i> tan <i>θ</i> − <i>gx</i><sup>2</sup>/(2<i>u</i><sup>2</sup> cos<sup>2</sup> <i>θ</i>).<br>This has the form <i>y</i> = <i>ax</i> − <i>bx</i><sup>2</sup> — the equation of a <b>parabola</b>, confirming the arched path.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A ball is projected from the ground with a speed of 20 m/s at 30° above the horizontal. Taking <i>g</i> = 10 m/s<sup>2</sup>, find (a) the time of flight, (b) the maximum height, and (c) the horizontal range.',
        steps: [
          '<b>Given:</b> <i>u</i> = 20 m/s, <i>θ</i> = 30°, <i>g</i> = 10 m/s<sup>2</sup>. (sin 30° = 0.5, sin 60° ≈ 0.866.)',
          '<b>Solution:</b> (a) <i>T</i> = (2<i>u</i> sin <i>θ</i>)/<i>g</i> = 2(20)(0.5)/10 = 20/10 = 2 s.',
          '(b) <i>H</i> = (<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>)/(2<i>g</i>) = (400)(0.25)/20 = 100/20 = 5 m.',
          '(c) <i>R</i> = (<i>u</i><sup>2</sup> sin 2<i>θ</i>)/<i>g</i> = (400) sin 60°/10 = (400 × 0.866)/10 ≈ 34.6 m.',
        ],
        ans: '<i>T</i> = 2 s,   <i>H</i> = 5 m,   <i>R</i> ≈ 34.6 m',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A ball is thrown at 20 m/s at 30° to the horizontal. Its speed at the highest point of the trajectory is:<br>(A) 0   (B) 10 m/s   (C) 10√3 m/s   (D) 20 m/s',
        steps: [
          '<b>The trap:</b> students recall that “velocity is zero at the top” — but that’s only true for a ball thrown straight up. For an angled projectile, only the <b>vertical</b> part vanishes at the apex; the <b>horizontal</b> part sails on unchanged.',
          '<b>Fast solution:</b> At the highest point <i>v</i><sub><i>y</i></sub> = 0, but <i>v</i><sub><i>x</i></sub> = <i>u</i> cos <i>θ</i> = 20 cos 30° = 20 × √3/2 = 10√3 ≈ 17.3 m/s.',
          'Speed cue: at the top of any angled projectile, speed = <i>u</i> cos <i>θ</i> (never zero unless launched vertically). Option (A) is the trap for those who forget the horizontal motion continues; (D) forgets that the vertical part is lost.',
        ],
        ans: '(C) 10√3 m/s',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A ball is launched from the ground at 20 m/s at 53° above the horizontal (sin 53° = 0.8, cos 53° = 0.6, <i>g</i> = 10 m/s<sup>2</sup>). Find (a) the magnitude and direction of its velocity 1 s after launch, and (b) its height at that instant.',
        steps: [
          '<b>Why it’s multi-concept:</b> it combines velocity-component tracking with the vertical kinematic equation, rather than just plugging into the standard <i>T</i>/<i>H</i>/<i>R</i> formulas.',
          '<b>Solution:</b> Resolve: <i>u</i><sub><i>x</i></sub> = 20(0.6) = 12 m/s, <i>u</i><sub><i>y</i></sub> = 20(0.8) = 16 m/s.',
          '(a) At <i>t</i> = 1 s: <i>v</i><sub><i>x</i></sub> = 12 m/s (unchanged), <i>v</i><sub><i>y</i></sub> = <i>u</i><sub><i>y</i></sub> − <i>gt</i> = 16 − 10(1) = 6 m/s.<br>|<i>v⃗</i>| = √(12<sup>2</sup> + 6<sup>2</sup>) = √(144 + 36) = √180 ≈ 13.4 m/s.<br>tan <i>ϕ</i> = <i>v</i><sub><i>y</i></sub>/<i>v</i><sub><i>x</i></sub> = 6/12 = 0.5 ⇒ <i>ϕ</i> ≈ 26.6° above the horizontal.',
          '(b) <i>y</i> = <i>u</i><sub><i>y</i></sub><i>t</i> − ½<i>gt</i><sup>2</sup> = 16(1) − ½(10)(1)<sup>2</sup> = 16 − 5 = 11 m.',
          'Note the velocity now points at a smaller angle than the launch — the projectile is climbing more gently as gravity erodes its upward speed while the horizontal speed stays fixed.',
        ],
        ans: '|<i>v⃗</i>| ≈ 13.4 m/s at 26.6° above horizontal,   <i>y</i> = 11 m',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two balls are projected from the same point with the same speed 20 m/s (<i>g</i> = 10 m/s<sup>2</sup>), one at 30° and the other at 60° to the horizontal. (a) Show that their horizontal ranges are equal. (b) Find the maximum height of each, and verify that the sum of the two heights equals <i>u</i><sup>2</sup>/2<i>g</i>, independent of angle.',
        steps: [
          '<b>Reasoning:</b> 30° and 60° are <b>complementary</b> (30° + 60° = 90°), which is exactly the condition for equal range — a fact worth proving cleanly.',
          '<b>Solution:</b> (a) <i>R</i> = (<i>u</i><sup>2</sup> sin 2<i>θ</i>)/<i>g</i>. For <i>θ</i> = 30°: sin 60°. For <i>θ</i> = 60°: sin 120° = sin 60°. Since sin 2<i>θ</i> is identical, the ranges match:<br><i>R</i><sub>30</sub> = <i>R</i><sub>60</sub> = (400 × 0.866)/10 ≈ 34.6 m. ✓',
          '(More generally, sin (2(90° − <i>θ</i>)) = sin(180° − 2<i>θ</i>) = sin 2<i>θ</i>, so complementary angles always share a range.)',
          '(b) <i>H</i> = (<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>)/(2<i>g</i>):<br><i>H</i><sub>30</sub> = 400(0.25)/20 = 5 m,   <i>H</i><sub>60</sub> = 400(0.75)/20 = 15 m.<br>Sum: <i>H</i><sub>30</sub> + <i>H</i><sub>60</sub> = 20 m. Compare with <i>u</i><sup>2</sup>/(2<i>g</i>) = 400/20 = 20 m. ✓',
          '<b>General proof:</b> for complementary angles <i>θ</i> and 90° − <i>θ</i>,<br><i>H</i><sub>1</sub> + <i>H</i><sub>2</sub> = (<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>)/(2<i>g</i>) + (<i>u</i><sup>2</sup> sin<sup>2</sup> (90° − <i>θ</i>))/(2<i>g</i>) = <i>u</i><sup>2</sup>(sin<sup>2</sup> <i>θ</i> + cos<sup>2</sup> <i>θ</i>)/(2<i>g</i>) = <i>u</i><sup>2</sup>/(2<i>g</i>),<br>which is independent of <i>θ</i>.',
        ],
        ans: '<i>R</i><sub>30</sub> = <i>R</i><sub>60</sub> ≈ 34.6 m;   <i>H</i><sub>30</sub> + <i>H</i><sub>60</sub> = 20 m = <i>u</i><sup>2</sup>/(2<i>g</i>)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A projectile is fired from the ground at 40 m/s at 30° (<i>g</i> = 10 m/s<sup>2</sup>). Find its maximum height and horizontal range.',
            a: '<i>H</i> = 20 m, <i>R</i> ≈ 138.6 m',
          },
          {
            q: '[NEET] A projectile launched at 45° has a horizontal range of 80 m. Find its maximum height.',
            a: '<i>H</i> = 20 m (since <i>R</i> = 4<i>H</i> at 45°)',
          },
          {
            q: '[JEE Main] A stone is thrown horizontally at 20 m/s from the top of a 45 m tower (<i>g</i> = 10 m/s<sup>2</sup>). Find the time to reach the ground and the horizontal distance from the base.',
            a: '<i>T</i> = 3 s, <i>R</i> = 60 m',
          },
          {
            q: '[JEE Main] A projectile’s horizontal range is 3 times its maximum height. Find the angle of projection.',
            a: 'tan <i>θ</i> = 4/3, <i>θ</i> ≈ 53°',
          },
          {
            q: '[JEE Advanced] A ball is projected at 30 m/s at 37° (sin 37° = 0.6, cos 37° = 0.8, <i>g</i> = 10 m/s<sup>2</sup>). Find the radius of curvature of its path at the highest point.',
            a: 'at the top, speed = <i>u</i> cos <i>θ</i> = 24 m/s, <i>a</i> = <i>g</i> (centripetal), so <i>R</i> = <i>v</i><sup>2</sup>/<i>g</i> = 576/10 = 57.6 m.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'At the highest point of its trajectory, the velocity of a projectile (launched at an angle) is:',
        opts: [
          {
            label: 'zero',
            nudge: '(A) zero is true only for a vertically thrown body, not an angled projectile — the most common trap.',
          },
          { label: 'horizontal', nudge: null },
          { label: 'vertical', nudge: '(C) vertical is possible only for a straight-up throw.' },
          { label: 'directed at 45°', nudge: '(D) has no general basis.' },
        ],
        correct: 1,
        solution:
          'At the apex the vertical component is zero, leaving only the constant horizontal component <i>u</i> cos <i>θ</i> — so the velocity is purely horizontal.',
      },
      {
        t: 'mcq',
        q: 'The horizontal range of a projectile is maximum when the angle of projection is:',
        opts: [
          { label: '30°', nudge: '(A) and (C) are complementary and give equal — but sub-maximal — ranges.' },
          { label: '45°', nudge: null },
          { label: '60°', nudge: '(A) and (C) are complementary and give equal — but sub-maximal — ranges.' },
          {
            label: '90°',
            nudge: '(D) 90° is a vertical throw: range zero. Students sometimes pick 90° thinking “steeper = farther,” which is exactly backwards.',
          },
        ],
        correct: 1,
        solution:
          '<i>R</i> = (<i>u</i><sup>2</sup> sin 2<i>θ</i>)/<i>g</i> is greatest when sin 2<i>θ</i> = 1, i.e. 2<i>θ</i> = 90° ⇒ <i>θ</i> = 45°.',
      },
      {
        t: 'mcq',
        q: 'Two projectiles thrown with the same speed cover equal horizontal ranges. If one is launched at 25°, the other is launched at:',
        opts: [
          { label: '25°', nudge: '(A) is the same projectile, not a distinct one.' },
          { label: '50°', nudge: '(B) comes from doubling the angle — a misremembered rule.' },
          { label: '65°', nudge: null },
          { label: '75°', nudge: '(D) doesn’t sum to 90° with 25°.' },
        ],
        correct: 2,
        solution:
          'Equal ranges (same speed) require complementary angles: 90° − 25° = 65°. The key is <i>θ</i> + <i>θ</i>′ = 90°.',
      },
      {
        t: 'mcq',
        q: 'Neglecting air resistance, the acceleration of a projectile during its flight is:',
        opts: [
          {
            label: 'zero at the highest point',
            nudge: '(A) confuses zero velocity component with zero acceleration — gravity never switches off.',
          },
          { label: '<i>g</i> directed downward throughout', nudge: null },
          { label: 'reversed in direction at the top', nudge: '(C) gravity always points down; it never reverses.' },
          { label: 'greatest at the moment of launch', nudge: '(D) acceleration is constant, not “greatest at launch.”' },
        ],
        correct: 1,
        solution:
          'Gravity is the only force, so the acceleration is constant: <i>g</i> downward at every instant, including the apex. This is the same misconception family as “<i>v</i> = 0 ⇒ <i>a</i> = 0” from free fall.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Velocity is zero at the top.”</b> Only the vertical component vanishes; the horizontal component <i>u</i> cos <i>θ</i> continues. The total speed is least at the top, where the vertical component is zero.',
          '<b>“Acceleration is zero at the top.”</b> It’s always <i>g</i> downward. Velocity and acceleration are independent — one can be (partly) zero while the other isn’t.',
          '<b>Coupling the two motions.</b> Horizontal and vertical motions are independent; they share only the time <i>t</i>. Never let a horizontal quantity leak into a vertical equation or vice-versa.',
          '<b>Mixing the <i>H</i> and <i>R</i> formulas</b> (sin<sup>2</sup> <i>θ</i> vs sin 2<i>θ</i>). Keep them distinct: height uses sin<sup>2</sup> <i>θ</i>, range uses sin 2<i>θ</i>.',
          '<b>Forgetting <i>u</i><sub><i>y</i></sub> = 0 for a horizontal launch.</b> A body fired horizontally from a height starts with zero vertical velocity — its fall is identical to a dropped object.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Solve every projectile by <b>splitting into two channels</b>: horizontal (constant velocity, <i>x</i> = <i>u</i> cos <i>θ</i> · <i>t</i>) and vertical (free fall, <i>y</i> = <i>u</i> sin <i>θ</i> · <i>t</i> − ½<i>gt</i><sup>2</sup>), linked only by <i>t</i>. Find the time of flight from the vertical channel, then feed it into the horizontal one for range. Keep the shortcuts handy — complementary angles share a range, <i>R</i> = 4<i>H</i> cot <i>θ</i>, and <i>R</i><sub>max</sub> = 4<i>H</i> at 45° — they turn many problems into one-liners.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Components',
            note: '<i>u</i><sub><i>x</i></sub> = <i>u</i> cos <i>θ</i> (constant); <i>u</i><sub><i>y</i></sub> = <i>u</i> sin <i>θ</i>; acceleration <i>g</i> downward always.',
          },
          {
            f: 'Time of flight',
            note: '<i>T</i> = (2<i>u</i> sin <i>θ</i>)/<i>g</i>;   max height: <i>H</i> = (<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i>)/(2<i>g</i>);   range: <i>R</i> = (<i>u</i><sup>2</sup> sin 2<i>θ</i>)/<i>g</i>.',
          },
          {
            f: 'Max range = <i>u</i><sup>2</sup>/<i>g</i> at <i>θ</i> = 45° (and then <i>R</i><sub>max</sub> = 4<i>H</i>).',
            note: '',
          },
          {
            f: 'Trajectory',
            note: '<i>y</i> = <i>x</i> tan <i>θ</i> − <i>gx</i><sup>2</sup>/(2<i>u</i><sup>2</sup> cos<sup>2</sup> <i>θ</i>) (a parabola).',
          },
          {
            f: 'Complementary angles <i>θ</i>, 90° − <i>θ</i>',
            note: 'same range; <i>H</i><sub>1</sub> + <i>H</i><sub>2</sub> = <i>u</i><sup>2</sup>/(2<i>g</i>);   <i>R</i> = 4<i>H</i> cot <i>θ</i>.',
          },
          {
            f: 'Horizontal launch from height <i>h</i>',
            note: '<i>T</i> = √(2<i>h</i>/<i>g</i>), <i>R</i> = <i>u</i>√(2<i>h</i>/<i>g</i>).',
          },
          {
            f: 'At the apex',
            note: '<i>v</i><sub><i>y</i></sub> = 0, speed = <i>u</i> cos <i>θ</i>, acceleration still <i>g</i>.',
          },
        ],
        aids: ['Mnemonic: <b>“Horizontal coasts, vertical falls — time ties them together.”</b>'],
      },
    ],
  },
  {
    n: '05',
    title: 'Relative Velocity in Two Dimensions',
    kalam:
      'In a plane it becomes far richer, because now the velocities point in different directions and must be combined as vectors.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A classic, heavily tested application of vectors. CBSE Boards ask the river-boat crossing (time and drift) and the rain-umbrella problem (2–4 marks). JEE Main reliably carries one question — shortest path across a river, minimum time, or relative velocity of two moving bodies. NEET tests the rain-man angle and basic crossing. JEE Advanced layers it with closest-approach problems and currents stronger than the boat’s own speed.',
      },
      {
        t: 'p',
        html: 'We met relative velocity in one dimension in Chapter 2 — same line, just add or subtract. In a plane it becomes far richer, because now the velocities point in different directions and must be combined as <b>vectors</b>. The governing rule, though, is exactly the same:<br><i>v⃗</i><sub><i>AB</i></sub> = <i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub>,<br>the velocity of A as seen from B. The only new skill is doing that subtraction as a vector operation — by components or by the triangle law — rather than with signs alone.',
      },
      {
        t: 'p',
        html: 'Two beautiful real-world problems capture everything in this topic. The first is the <b>river-boat problem</b>. A boat’s engine drives it at some velocity relative to the water, but the water itself is flowing relative to the ground. What an observer on the bank sees is the <b>vector sum</b> of these two: <i>v⃗</i><sub>boat,ground</sub> = <i>v⃗</i><sub>boat,water</sub> + <i>v⃗</i><sub>water,ground</sub>. This single equation answers every river question — how long to cross, where you land, which way to aim.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture rowing straight across the Ganga toward a temple on the far bank. You point the boat dead ahead, perpendicular to the flow — yet you drift downstream and land well past the temple. Why? Because while your oars carry you across, the current simultaneously carries the whole boat downstream, and these two motions are independent (just like the <i>x</i> and <i>y</i> motions of the last sub-topic). To actually reach the temple, you must aim upstream at an angle, so that your across-velocity still carries you over while your upstream-component exactly cancels the current. There’s a genuine trade-off: aim straight for the <b>least time</b>, or aim upstream for the <b>straightest path</b> — you can’t always have both.',
      },
      {
        t: 'p',
        html: 'The second classic is the <b>rain-man problem</b>. Rain falling vertically looks slanted to someone walking, which is why you tilt your umbrella forward into your direction of motion. The rain’s velocity relative to you is <i>v⃗</i><sub>rain</sub> − <i>v⃗</i><sub>you</sub>, and the umbrella must point along that relative velocity. Walk faster and the rain appears to come more horizontally, so you tilt the umbrella further forward. Both problems are the same physics — a vector subtraction — dressed in different clothes.',
      },
      {
        t: 'p',
        html: 'Finally, relative velocity lets us answer “<b>how close do two moving objects get?</b>” Two ships, two cars, an aircraft and a target — by sitting in one object’s frame, the other appears to move in a straight line at the relative velocity, and the <b>closest approach</b> is just the perpendicular distance from your position to that straight line.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• The combining rule is <b>Galilean</b> vector addition, valid at everyday speeds (<i>v</i> ≪ <i>c</i>).<br>• To reach a point <b>directly across</b> a river, the boat’s own speed must exceed the current (<i>v</i><sub><i>b</i></sub> > <i>v</i><sub><i>r</i></sub>); if the current is faster, you cannot avoid some downstream drift, and the goal shifts to minimising it.<br>• “Minimum time” and “shortest path (zero drift)” are generally <b>different</b> strategies requiring different headings — don’t conflate them.<br>• All velocities must be expressed relative to a <b>common reference</b> (usually the ground) before combining.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'General rule',
        main: '<i>v⃗</i><sub><i>AB</i></sub> = <i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub> (velocity of A relative to B)<br><i>v⃗</i><sub><i>AB</i></sub> = −<i>v⃗</i><sub><i>BA</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Chained (frame) relation',
        main: '<i>v⃗</i><sub><i>Ag</i></sub> = <i>v⃗</i><sub><i>Ab</i></sub> + <i>v⃗</i><sub><i>bg</i></sub> (A relative to ground = A relative to b + b relative to ground)<br>For the boat: <i>v⃗</i><sub>boat,ground</sub> = <i>v⃗</i><sub>boat,water</sub> + <i>v⃗</i><sub>water,ground</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>River-boat</b> — river width <i>d</i>, boat speed in still water <i>v</i><sub><i>b</i></sub>, current speed <i>v</i><sub><i>r</i></sub>:',
      },
      {
        t: 'formula',
        kicker: 'Minimum-time crossing (boat aimed straight across)',
        main: '<i>t</i><sub>min</sub> = <i>d</i>/<i>v</i><sub><i>b</i></sub><br>drift downstream = <i>v</i><sub><i>r</i></sub> <i>t</i><sub>min</sub> = <i>v</i><sub><i>r</i></sub> <i>d</i>/<i>v</i><sub><i>b</i></sub><br><i>v</i><sub>ground</sub> = √(<i>v</i><sub><i>b</i></sub><sup>2</sup> + <i>v</i><sub><i>r</i></sub><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Shortest-path crossing',
        main: 'aim upstream at angle <i>θ</i> from the straight-across direction with<br>sin <i>θ</i> = <i>v</i><sub><i>r</i></sub>/<i>v</i><sub><i>b</i></sub><br><i>v</i><sub>across</sub> = √(<i>v</i><sub><i>b</i></sub><sup>2</sup> − <i>v</i><sub><i>r</i></sub><sup>2</sup>)<br><i>t</i> = <i>d</i>/√(<i>v</i><sub><i>b</i></sub><sup>2</sup> − <i>v</i><sub><i>r</i></sub><sup>2</sup>)',
        legend: ['needs <i>v</i><sub><i>b</i></sub> > <i>v</i><sub><i>r</i></sub>'],
        note: 'land directly opposite, zero drift',
      },
      {
        t: 'formula',
        kicker: 'Rain-man',
        main: 'the rain relative to the man is <i>v⃗</i><sub><i>rm</i></sub> = <i>v⃗</i><sub>rain</sub> − <i>v⃗</i><sub><i>m</i></sub>; the umbrella points along <i>v⃗</i><sub><i>rm</i></sub><br>For vertical rain (speed <i>v</i><sub>rain</sub>) and horizontal walking (speed <i>v</i><sub><i>m</i></sub>), the umbrella tilts forward from the vertical by<br>tan <i>α</i> = <i>v</i><sub><i>m</i></sub>/<i>v</i><sub>rain</sub>',
        legend: ['<i>v⃗</i><sub>rain</sub> = rain velocity (relative to ground)', '<i>v⃗</i><sub><i>m</i></sub> = walking velocity'],
        note: null,
      },
      {
        t: 'def',
        term: 'Closest approach of two bodies',
        html: 'in B’s frame, A moves in a straight line at <i>v⃗</i><sub><i>AB</i></sub>; the closest distance is the perpendicular distance from B to that line (or minimise |<i>r⃗</i><sub><i>AB</i></sub>(<i>t</i>)|).',
      },
      {
        t: 'p',
        html: 'All SI: velocities m/s, distances m, time s.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There’s no single grand derivation here; the skill is setting up the vectors correctly. Three procedures cover almost every problem.',
      },
      {
        t: 'proc',
        title: 'Procedure A — The river-boat problem',
        steps: [
          '<b>Set axes:</b> let <i>x</i> be along the current (downstream +) and <i>y</i> straight across the river.',
          '<b>Write the boat’s ground velocity</b> as the vector sum <i>v⃗</i><sub>ground</sub> = <i>v⃗</i><sub><i>b</i></sub> + <i>v⃗</i><sub><i>r</i></sub> (boat relative to water plus current), resolving the boat’s heading into components.',
          '<b>Crossing time depends only on the across (<i>y</i>) component</b>, because only <i>y</i>-motion covers the width: <i>t</i> = <i>d</i>/(<i>v</i><sub>ground</sub>)<sub><i>y</i></sub>.',
          '<b>Drift depends on the net downstream (<i>x</i>) velocity</b> times the crossing time.',
          '<b>Choose the strategy:</b><br>• Minimum time → maximise the across-component → aim <b>straight across</b> (<i>v</i><sub>across</sub> = <i>v</i><sub><i>b</i></sub>). Drift is then unavoidable.<br>• Zero drift / land opposite → make the net <i>x</i>-velocity zero → aim <b>upstream</b> so <i>v</i><sub><i>b</i></sub> sin <i>θ</i> = <i>v</i><sub><i>r</i></sub>, giving sin <i>θ</i> = <i>v</i><sub><i>r</i></sub>/<i>v</i><sub><i>b</i></sub> (possible only if <i>v</i><sub><i>b</i></sub> > <i>v</i><sub><i>r</i></sub>).',
        ],
      },
      { t: 'fig', id: 'p11-03-fig-3.5' },
      {
        t: 'proc',
        title: 'Procedure B — The rain-man problem',
        steps: [
          'Write the rain’s velocity relative to the ground, <i>v⃗</i><sub>rain</sub> (often straight down, sometimes slanted).',
          'Write the man’s velocity <i>v⃗</i><sub><i>m</i></sub> (horizontal).',
          'Compute the rain’s velocity <b>relative to the man</b>: <i>v⃗</i><sub><i>rm</i></sub> = <i>v⃗</i><sub>rain</sub> − <i>v⃗</i><sub><i>m</i></sub> (subtract the man’s velocity — equivalently, add the reverse of his velocity to the rain).',
          'The umbrella must point <b>along</b> <i>v⃗</i><sub><i>rm</i></sub> (into the apparent rain). Its angle from the vertical satisfies tan <i>α</i> = <i>v</i><sub><i>m</i></sub>/<i>v</i><sub>rain</sub> for vertical rain.',
          'Reasoning: in the man’s own frame he is at rest, so the rain appears to approach along <i>v⃗</i><sub><i>rm</i></sub> — that apparent direction is exactly what the umbrella must face.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure C — Closest approach.</b> Move into one body’s frame so it is at rest; the other travels in a straight line at the relative velocity <i>v⃗</i><sub><i>AB</i></sub>. Either drop a perpendicular from the stationary body to that line, or write the separation |<i>r⃗</i><sub><i>AB</i></sub>(<i>t</i>)|<sup>2</sup> as a function of time and minimise it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A river is 100 m wide and flows at 3 m/s. A boat that can move at 5 m/s in still water is steered straight across (perpendicular to the bank). Find (a) the time to cross, (b) how far downstream it drifts, and (c) its speed relative to the ground.',
        steps: [
          '<b>Given:</b> <i>d</i> = 100 m, <i>v</i><sub><i>r</i></sub> = 3 m/s, <i>v</i><sub><i>b</i></sub> = 5 m/s, boat aimed straight across.',
          '<b>Solution:</b> (a) Only the across-velocity (the full 5 m/s) covers the width:<br><i>t</i> = <i>d</i>/<i>v</i><sub><i>b</i></sub> = 100/5 = 20 s.',
          '(b) During this time the current carries the boat downstream:<br>drift = <i>v</i><sub><i>r</i></sub> <i>t</i> = (3)(20) = 60 m.',
          '(c) The ground velocity is the vector sum of the perpendicular parts:<br><i>v</i><sub>ground</sub> = √(<i>v</i><sub><i>b</i></sub><sup>2</sup> + <i>v</i><sub><i>r</i></sub><sup>2</sup>) = √(5<sup>2</sup> + 3<sup>2</sup>) = √34 ≈ 5.83 m/s.',
          'Aiming straight across gives the <b>shortest crossing time</b>, but the price is a 60 m downstream drift.',
        ],
        ans: '<i>t</i> = 20 s,   drift = 60 m,   <i>v</i><sub>ground</sub> ≈ 5.83 m/s',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Rain is falling vertically at 4 m/s. A man walks horizontally at 3 m/s. At what angle to the vertical should he tilt his umbrella?<br>(A) 37° forward   (B) 53° forward   (C) 37° backward   (D) 90°',
        steps: [
          '<b>The trap:</b> students either tilt the umbrella backward (against motion) or invert the ratio to tan <i>α</i> = <i>v</i><sub>rain</sub>/<i>v</i><sub><i>m</i></sub>.',
          '<b>Fast solution:</b> The umbrella points along the rain’s velocity relative to the man, tilted <b>forward</b> (into the walking direction) by<br>tan <i>α</i> = <i>v</i><sub><i>m</i></sub>/<i>v</i><sub>rain</sub> = 3/4 = 0.75 ⇒ <i>α</i> = 37°.',
          'Speed cue: always <b>forward</b>, into your motion (the faster you walk, the more the rain seems to come at your face). The ratio is “walking speed over rain speed.” Option (C) gets the magnitude right but the direction wrong — a classic half-credit trap.',
        ],
        ans: '(A) 37° forward',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A river is 80 m wide and flows at 6 m/s. A boat moves at 10 m/s in still water. The boatman wants to reach the point directly opposite his start. (a) In which direction must he steer, and (b) how long does the crossing take?',
        steps: [
          '<b>Why it’s multi-concept:</b> it combines vector resolution with the relative-velocity sum and the zero-drift condition.',
          '<b>Solution:</b> To land directly opposite, the net downstream velocity must be zero, so the boat’s upstream component must cancel the current. Aiming upstream at angle <i>θ</i> from the straight-across direction:<br><i>v</i><sub><i>b</i></sub> sin <i>θ</i> = <i>v</i><sub><i>r</i></sub> ⇒ sin <i>θ</i> = <i>v</i><sub><i>r</i></sub>/<i>v</i><sub><i>b</i></sub> = 6/10 = 0.6 ⇒ <i>θ</i> = 37° upstream of straight-across.',
          '(b) The effective across-speed is the remaining component:<br><i>v</i><sub>across</sub> = <i>v</i><sub><i>b</i></sub> cos <i>θ</i> = √(<i>v</i><sub><i>b</i></sub><sup>2</sup> − <i>v</i><sub><i>r</i></sub><sup>2</sup>) = √(100 − 36) = √64 = 8 m/s.<br><i>t</i> = <i>d</i>/<i>v</i><sub>across</sub> = 80/8 = 10 s.',
          'Note this crossing (10 s) takes longer than the minimum-time route would (80/10 = 8 s) — the cost of arriving with zero drift.',
        ],
        ans: 'Steer 37° upstream of straight-across; <i>t</i> = 10 s',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Ship A sails due north at 10 km/h. At a certain instant, ship B is 20 km due east of A and sails due west at 10 km/h. Find (a) the time of closest approach and (b) the minimum distance between the ships.',
        steps: [
          '<b>Reasoning:</b> Work in A’s frame: B moves in a straight line at the relative velocity, and the closest approach is the minimum of the separation over time.',
          '<b>Solution:</b> Take east as +<i>x</i>, north as +<i>y</i>, with A at the origin at <i>t</i> = 0.<br><i>v⃗</i><sub><i>A</i></sub> = (0, 10),   <i>v⃗</i><sub><i>B</i></sub> = (−10, 0),   <i>v⃗</i><sub><i>BA</i></sub> = <i>v⃗</i><sub><i>B</i></sub> − <i>v⃗</i><sub><i>A</i></sub> = (−10, −10) km/h.',
          'Initial position of B relative to A: <i>r⃗</i><sub><i>BA</i></sub>(0) = (20, 0) km. At time <i>t</i> (hours):<br><i>r⃗</i><sub><i>BA</i></sub>(<i>t</i>) = (20 − 10<i>t</i>, −10<i>t</i>).',
          'The separation squared:<br><i>s</i><sup>2</sup>(<i>t</i>) = (20 − 10<i>t</i>)<sup>2</sup> + (10<i>t</i>)<sup>2</sup> = 400 − 400<i>t</i> + 100<i>t</i><sup>2</sup> + 100<i>t</i><sup>2</sup> = 200<i>t</i><sup>2</sup> − 400<i>t</i> + 400.',
          'Minimise: d(<i>s</i><sup>2</sup>)/d<i>t</i> = 400<i>t</i> − 400 = 0 ⇒ <i>t</i> = 1 h.',
          'At <i>t</i> = 1 h: <i>r⃗</i><sub><i>BA</i></sub> = (10, −10), so<br><i>s</i><sub>min</sub> = √(10<sup>2</sup> + 10<sup>2</sup>) = √200 = 10√2 ≈ 14.1 km.',
          'In A’s frame, B slides along a straight line heading south-west; the ships never collide, closing only to about 14.1 km before drawing apart again.',
        ],
        ans: '<i>t</i> = 1 h,   <i>s</i><sub>min</sub> = 10√2 ≈ 14.1 km',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 120 m wide river flows at 4 m/s. A swimmer who manages 3 m/s in still water heads straight across. Find the time to cross and the downstream drift.',
            a: '<i>t</i> = 40 s, drift = 160 m',
          },
          {
            q: '[NEET] Rain falls vertically at 10 m/s. A cyclist rides at 10 m/s. Find the angle from the vertical at which she should hold her umbrella.',
            a: '45° forward',
          },
          {
            q: '[JEE Main] A boat moving at 13 m/s in still water must cross a 60 m river flowing at 5 m/s to land directly opposite. Find the steering angle (from straight-across) and the crossing time.',
            a: 'sin <i>θ</i> = 5/13, <i>θ</i> ≈ 22.6° upstream; crossing speed 12 m/s, <i>t</i> = 5 s',
          },
          {
            q: '[JEE Main] To a man walking east at 5 m/s, the wind appears to blow from the north at 5 m/s. Find the actual velocity of the wind (magnitude and direction).',
            a: 'wind blows from the north-west at 5√2 ≈ 7.07 m/s (i.e. velocity 5<i>î</i> − 5<i>ĵ</i> m/s, toward south-east)',
          },
          {
            q: '[JEE Advanced] Car A moves east at 20 m/s; car B, initially 100 m north of A, moves south at 20 m/s. Find their closest approach distance and the time at which it occurs.',
            a: 'relative velocity (−20, −20) m/s; closest approach 50√2 ≈ 70.7 m at <i>t</i> = 2.5 s.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A boat is steered straight across a flowing river. Compared with still water, its time to cross is:',
        opts: [
          { label: 'longer', nudge: '(A) and (B) wrongly assume the current affects the crossing time.' },
          { label: 'shorter', nudge: '(A) and (B) wrongly assume the current affects the crossing time.' },
          { label: 'the same', nudge: null },
          { label: 'zero', nudge: '(D) is nonsensical.' },
        ],
        correct: 2,
        solution:
          'The current acts purely downstream and does nothing to the across-component, so the crossing time <i>d</i>/<i>v</i><sub><i>b</i></sub> is unchanged — the current only causes drift, not delay. The independence of perpendicular motions is the key: downstream flow can’t speed up or slow down the across-progress.',
      },
      {
        t: 'mcq',
        q: 'A man walking forward tilts his umbrella to keep dry. The umbrella should be tilted:',
        opts: [
          {
            label: 'backward, against his motion',
            nudge: '(A) backward would expose him completely — a frequent wrong answer.',
          },
          { label: 'forward, into his motion', nudge: null },
          { label: 'vertically', nudge: '(C) vertical only works when standing still.' },
          { label: 'horizontally', nudge: '(D) horizontal would need an impossibly fast walk.' },
        ],
        correct: 1,
        solution:
          'In the man’s frame the rain appears to come from the front, so the umbrella tilts forward into the apparent rain. The faster he walks, the more forward the tilt.',
      },
      {
        t: 'mcq',
        q: 'To cross a river and land at the point directly opposite the start, the boat’s speed in still water must be:',
        opts: [
          {
            label: 'less than the current speed',
            nudge: '(A) if the boat is slower than the current, it cannot fully oppose the drift and must land downstream.',
          },
          {
            label: 'equal to the current speed',
            nudge: '(B) equal speeds would require <i>θ</i> = 90° (heading straight upstream), giving zero across-progress — it never crosses.',
          },
          { label: 'greater than the current speed', nudge: null },
          { label: 'exactly zero', nudge: '(D) zero speed means no motion at all.' },
        ],
        correct: 2,
        solution:
          'Cancelling the downstream drift requires an upstream component <i>v</i><sub><i>b</i></sub> sin <i>θ</i> = <i>v</i><sub><i>r</i></sub>, which has a solution only if <i>v</i><sub><i>b</i></sub> > <i>v</i><sub><i>r</i></sub>.',
      },
      {
        t: 'mcq',
        q: 'Two objects move with the same constant velocity in the same direction. The velocity of one relative to the other is:',
        opts: [
          { label: 'double their speed', nudge: '(A) double would apply to opposite velocities.' },
          { label: 'zero', nudge: null },
          { label: 'equal to their speed', nudge: '(C) and (D) have no basis.' },
          { label: 'perpendicular to their motion', nudge: '(C) and (D) have no basis.' },
        ],
        correct: 1,
        solution:
          '<i>v⃗</i><sub><i>AB</i></sub> = <i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub> = 0⃗ when the velocities are identical — each sees the other as stationary. This is why two vehicles cruising side by side at the same speed appear motionless to each other.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing “minimum time” with “shortest path.”</b> Aiming straight across minimises time (but drifts); aiming upstream gives zero drift (but takes longer). They need different headings — decide which the question asks.',
          '<b>Tilting the umbrella the wrong way.</b> It always tilts forward, into the direction of motion, along the rain’s velocity relative to you.',
          '<b>Inverting the rain-angle ratio.</b> For vertical rain and horizontal walking, tan <i>α</i> = <i>v</i><sub><i>m</i></sub>/<i>v</i><sub>rain</sub> (walking over rain), measured from the vertical — not the reverse.',
          '<b>Thinking the current changes the crossing time.</b> For a straight-across heading it doesn’t; the downstream flow only produces drift.',
          '<b>Mixing reference frames.</b> Express all velocities relative to a common frame (usually the ground) before adding or subtracting; the chain <i>v⃗</i><sub><i>Ag</i></sub> = <i>v⃗</i><sub><i>Ab</i></sub> + <i>v⃗</i><sub><i>bg</i></sub> keeps the bookkeeping straight.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Set up clean perpendicular axes — <b>along the current and across the river</b> — and the river problem splits into two independent 1-D problems: the across-component sets the crossing time, the downstream-component sets the drift. For closest-approach questions, jump into one body’s frame so the other moves in a straight line at the relative velocity, then it’s pure geometry (perpendicular distance). And for rain: always tilt forward, ratio = walking speed over rain speed.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'General',
            note: '<i>v⃗</i><sub><i>AB</i></sub> = <i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub>;   chain <i>v⃗</i><sub><i>Ag</i></sub> = <i>v⃗</i><sub><i>Ab</i></sub> + <i>v⃗</i><sub><i>bg</i></sub>.',
          },
          {
            f: 'River, straight across (min time)',
            note: '<i>t</i> = <i>d</i>/<i>v</i><sub><i>b</i></sub>, drift = <i>v</i><sub><i>r</i></sub><i>d</i>/<i>v</i><sub><i>b</i></sub>, ground speed = √(<i>v</i><sub><i>b</i></sub><sup>2</sup> + <i>v</i><sub><i>r</i></sub><sup>2</sup>).',
          },
          {
            f: 'River, land opposite (zero drift, needs <i>v</i><sub><i>b</i></sub> > <i>v</i><sub><i>r</i></sub>)',
            note: 'sin <i>θ</i> = <i>v</i><sub><i>r</i></sub>/<i>v</i><sub><i>b</i></sub>, <i>v</i><sub>across</sub> = √(<i>v</i><sub><i>b</i></sub><sup>2</sup> − <i>v</i><sub><i>r</i></sub><sup>2</sup>), <i>t</i> = <i>d</i>/√(<i>v</i><sub><i>b</i></sub><sup>2</sup> − <i>v</i><sub><i>r</i></sub><sup>2</sup>).',
          },
          {
            f: 'Rain-man',
            note: 'umbrella along <i>v⃗</i><sub>rain</sub> − <i>v⃗</i><sub><i>m</i></sub>; for vertical rain, tan <i>α</i> = <i>v</i><sub><i>m</i></sub>/<i>v</i><sub>rain</sub> (forward from vertical).',
          },
          {
            f: 'Closest approach',
            note: 'in one body’s frame, the other moves straight at <i>v⃗</i><sub><i>AB</i></sub>; minimise |<i>r⃗</i><sub><i>AB</i></sub>(<i>t</i>)|.',
          },
        ],
        aids: ['Mnemonic: <b>“Straight across = least time; angle upstream = no drift; umbrella tilts forward.”</b>'],
      },
    ],
  },
  {
    n: '06',
    title: 'Circular Motion Dynamics',
    kalam:
      'This is the single most important idea of the topic, and it’s worth stating bluntly: circular motion is impossible without a real, inward force.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A rich, high-yield topic that also seeds Rotational Motion and Gravitation later. CBSE Boards ask the centripetal-acceleration derivation and definitions of angular quantities (2–3 marks). JEE Main reliably carries a question on centripetal force, angular kinematics, or banking. NEET tests the conceptual core hard — direction of acceleration, “constant speed yet accelerating,” the centrifugal-force misconception. JEE Advanced layers it with non-uniform circular motion, vertical circles, and banking-with-friction.',
      },
      {
        t: 'p',
        html: 'Swing a stone tied to a string in a horizontal circle at a steady rate. Its speed is constant — yet, surprisingly, the stone is <b>accelerating</b> the entire time. How can that be? Because velocity is a <b>vector</b>, and acceleration responds to any change in that vector — including a change in <b>direction</b>, not just in magnitude. The stone’s direction of motion is changing every instant, so its velocity is changing every instant, so it must be accelerating, even with the speedometer reading frozen.',
      },
      {
        t: 'p',
        html: 'Which way does this acceleration point? Toward the <b>centre</b> of the circle. We call it <b>centripetal acceleration</b> — Latin for “centre-seeking.” And by Newton’s second law, an acceleration toward the centre demands a <b>force</b> toward the centre: the <b>centripetal force</b>. This is the single most important idea of the topic, and it’s worth stating bluntly: circular motion is impossible without a real, inward force. The string’s tension supplies it for the whirling stone; friction supplies it for a car rounding a bend; gravity supplies it for a satellite orbiting Earth; the road’s normal force helps on a banked turn. Remove that inward force and the object obeys Newton’s first law — it flies off in a <b>straight line along the tangent</b>, not outward along the radius.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a gilli (or a ball) on a string being whirled overhead. People wrongly imagine that if you let go, it shoots straight outward, away from your hand. It doesn’t. The instant you release it, the inward pull vanishes and the stone simply continues in the straight line it was already travelling — the <b>tangent</b> — like mud flinging off a spinning bicycle tyre, always sideways, never radially out. The famous “outward” feeling you sense while spinning is the <b>centrifugal force</b>, and it is not a real force at all — it’s an illusion of being in a rotating frame. In the honest ground-frame view, there is only one force here, and it points <b>inward</b>.',
      },
      {
        t: 'p',
        html: 'To describe circular motion precisely we use <b>angular quantities</b>, mirrors of the linear ones: <b>angular displacement</b> <i>θ</i> (the angle swept, in radians), <b>angular velocity</b> <i>ω</i> = d<i>θ</i>/d<i>t</i> (how fast the angle changes), and <b>angular acceleration</b> <i>α</i> = d<i>ω</i>/d<i>t</i>. They connect to the linear quantities through the radius: <i>v</i> = <i>ωr</i> and (for changing speed) <i>a</i><sub><i>t</i></sub> = <i>αr</i>. When the speed is constant we have <b>uniform circular motion (UCM)</b>: <i>ω</i> constant, <i>α</i> = 0, and only the centripetal acceleration acts. When the speed also changes, the motion is <b>non-uniform</b>, and there’s an additional <b>tangential</b> acceleration along the direction of travel.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• In <b>uniform</b> circular motion the speed is constant but the velocity is not, and the centripetal acceleration’s magnitude is constant while its direction continuously rotates.<br>• Centripetal force is <b>not a new kind of force</b> — it’s the net of real forces (tension, friction, gravity, normal) that happens to point toward the centre. Always identify the physical source.<br>• <b>Centrifugal force</b> is a pseudo-force, valid only inside a rotating (non-inertial) frame; it has no place in a ground-frame analysis.<br>• The relations <i>v</i> = <i>ωr</i>, <i>a</i><sub><i>t</i></sub> = <i>αr</i> require <i>θ</i> and <i>ω</i> in <b>radians</b> — never degrees.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Angular quantities and linear links',
        main: '<i>s</i> = <i>rθ</i><br><i>v</i> = <i>ωr</i><br><i>a</i><sub><i>t</i></sub> = <i>αr</i><br><i>ω</i> = d<i>θ</i>/d<i>t</i><br><i>α</i> = d<i>ω</i>/d<i>t</i>',
        legend: [],
        note: 'Units: <i>θ</i> in radian (dimensionless), <i>ω</i> in rad/s, <i>α</i> in rad/s<sup>2</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Uniform circular motion (period T, frequency f)',
        main: '<i>ω</i> = 2π/<i>T</i> = 2π<i>f</i><br><i>v</i> = 2π<i>r</i>/<i>T</i> = <i>ωr</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Centripetal acceleration (directed toward the centre)',
        main: '<i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i> = <i>vω</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Centripetal force',
        main: '<i>F</i><sub><i>c</i></sub> = <i>mv</i><sup>2</sup>/<i>r</i> = <i>mω</i><sup>2</sup><i>r</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Non-uniform circular motion — two perpendicular acceleration components',
        main: '<i>a</i><sub><i>t</i></sub> = <i>αr</i> (tangential, changes speed)<br><i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> (radial, changes direction)<br><i>a</i> = √(<i>a</i><sub><i>t</i></sub><sup>2</sup> + <i>a</i><sub><i>c</i></sub><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angular kinematics (constant α) — exact analogues of the linear equations',
        main: '<i>ω</i> = <i>ω</i><sub>0</sub> + <i>αt</i><br><i>θ</i> = <i>ω</i><sub>0</sub><i>t</i> + ½<i>αt</i><sup>2</sup><br><i>ω</i><sup>2</sup> = <i>ω</i><sub>0</sub><sup>2</sup> + 2<i>αθ</i>',
        legend: [],
        note: null,
      },
      { t: 'p', html: '<b>Applications:</b>' },
      {
        t: 'formula',
        kicker: 'Banking of a road (frictionless)',
        main: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/(<i>rg</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Maximum safe speed on an unbanked road',
        main: '<i>v</i><sub>max</sub> = √(<i>μrg</i>)',
        legend: ['<i>μ</i> = coefficient of (static) friction'],
        note: 'friction <i>μ</i>',
      },

      { t: 'part', title: 'CBSE board derivation — centripetal acceleration' },
      {
        t: 'p',
        html: '<b>First, the linear–angular link <i>v</i> = <i>ωr</i>.</b> The arc length swept is <i>s</i> = <i>rθ</i>. Differentiating with respect to time (with <i>r</i> constant):<br><i>v</i> = d<i>s</i>/d<i>t</i> = <i>r</i> d<i>θ</i>/d<i>t</i> = <i>rω</i> ⇒ <i>v</i> = <i>ωr</i>.',
      },
      {
        t: 'p',
        html: '<b>Now the centripetal acceleration <i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i>.</b> Consider a particle in uniform circular motion. In a small time Δ<i>t</i> it moves from <i>P</i> to <i>Q</i>, turning through a small angle Δ<i>θ</i>. Its speed is unchanged, but the velocity vector rotates from <i>v⃗</i><sub>1</sub> to <i>v⃗</i><sub>2</sub> — also through the angle Δ<i>θ</i>, since velocity is always tangent to the circle (and the tangent turns by the same angle as the radius).',
      },
      { t: 'fig', id: 'p11-03-fig-3.6' },
      {
        t: 'p',
        html: 'Place <i>v⃗</i><sub>1</sub> and <i>v⃗</i><sub>2</sub> tail-to-tail. They have equal length <i>v</i> and a small angle Δ<i>θ</i> between them, forming an isosceles triangle whose third side is the change in velocity Δ<i>v⃗</i>. For a small angle, the length of this third side is<br>|Δ<i>v⃗</i>| = <i>v</i> Δ<i>θ</i>.<br>The magnitude of the acceleration is therefore<br><i>a</i><sub><i>c</i></sub> = lim<sub>Δ<i>t</i>→0</sub> |Δ<i>v⃗</i>|/Δ<i>t</i> = lim<sub>Δ<i>t</i>→0</sub> <i>v</i> Δ<i>θ</i>/Δ<i>t</i> = <i>vω</i>.<br>Using <i>v</i> = <i>ωr</i> to rewrite this:<br><i>a</i><sub><i>c</i></sub> = <i>vω</i> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i>.',
      },
      {
        t: 'p',
        html: '<b>Direction.</b> As Δ<i>t</i> → 0, the vector Δ<i>v⃗</i> becomes perpendicular to the velocity and points <b>toward the centre</b> of the circle — hence “centripetal.”',
      },
      {
        t: 'p',
        html: 'Why each step matters: the speed staying constant is exactly why the velocity triangle is isosceles; the velocity vector turning by the same Δ<i>θ</i> as the radius is what links the geometry of the path to the geometry of the velocity change; and taking the limit converts the average rate into the instantaneous centripetal acceleration.',
      },
      {
        t: 'p',
        html: 'Multiplying by mass gives the <b>centripetal force</b> <i>F</i><sub><i>c</i></sub> = <i>ma</i><sub><i>c</i></sub> = <i>mv</i><sup>2</sup>/<i>r</i> = <i>mω</i><sup>2</sup><i>r</i>, directed toward the centre.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A particle of mass 0.5 kg moves in a horizontal circle of radius 2 m with a constant angular speed of 3 rad/s. Find (a) its linear speed, (b) its centripetal acceleration, and (c) the centripetal force acting on it.',
        steps: [
          '<b>Given:</b> <i>m</i> = 0.5 kg, <i>r</i> = 2 m, <i>ω</i> = 3 rad/s.',
          '<b>Solution:</b> (a) <i>v</i> = <i>ωr</i> = (3)(2) = 6 m/s.',
          '(b) <i>a</i><sub><i>c</i></sub> = <i>ω</i><sup>2</sup><i>r</i> = (3)<sup>2</sup>(2) = 18 m/s<sup>2</sup> (toward the centre). [Check: <i>v</i><sup>2</sup>/<i>r</i> = 36/2 = 18. ✓]',
          '(c) <i>F</i><sub><i>c</i></sub> = <i>ma</i><sub><i>c</i></sub> = (0.5)(18) = 9 N (toward the centre).',
        ],
        ans: '<i>v</i> = 6 m/s,   <i>a</i><sub><i>c</i></sub> = 18 m/s<sup>2</sup>,   <i>F</i><sub><i>c</i></sub> = 9 N',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A car rounds a circular curve of fixed radius. If its speed is doubled, the centripetal force required to keep it on the curve becomes:<br>(A) half   (B) double   (C) four times   (D) unchanged',
        steps: [
          '<b>The trap:</b> “double the speed → double the force” feels right, but the force depends on the <b>square</b> of the speed.',
          '<b>Fast solution:</b> <i>F</i><sub><i>c</i></sub> = <i>mv</i><sup>2</sup>/<i>r</i> ∝ <i>v</i><sup>2</sup> (radius fixed). Doubling <i>v</i> multiplies <i>F</i><sub><i>c</i></sub> by 2<sup>2</sup> = 4.',
          'Speed cue: this is the same ∝ <i>v</i><sup>2</sup> scaling as stopping distance — whenever a quantity goes as <i>v</i><sup>2</sup>, doubling the speed quadruples it. It’s also why taking a bend too fast is so dangerous: the friction needed quadruples while the friction available stays the same.',
        ],
        ans: '(C) four times',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle moves in a circle of radius 0.5 m, starting from rest, with its speed increasing uniformly at 4 m/s<sup>2</sup>. At <i>t</i> = 1 s, find (a) its tangential acceleration, (b) its centripetal acceleration, and (c) the magnitude of its net (total) acceleration.',
        steps: [
          '<b>Why it’s multi-concept:</b> non-uniform circular motion has two perpendicular acceleration components that must be found separately and then combined.',
          '<b>Solution:</b> The “speed increasing at 4 m/s<sup>2</sup>” is the tangential acceleration: <i>a</i><sub><i>t</i></sub> = 4 m/s<sup>2</sup> (constant).',
          'At <i>t</i> = 1 s, the speed is <i>v</i> = <i>a</i><sub><i>t</i></sub> <i>t</i> = (4)(1) = 4 m/s.',
          '(a) <i>a</i><sub><i>t</i></sub> = 4 m/s<sup>2</sup> (along the direction of motion).',
          '(b) <i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> = 16/0.5 = 32 m/s<sup>2</sup> (toward the centre).',
          '(c) Since <i>a</i><sub><i>t</i></sub> ⊥ <i>a</i><sub><i>c</i></sub>:<br><i>a</i> = √(<i>a</i><sub><i>t</i></sub><sup>2</sup> + <i>a</i><sub><i>c</i></sub><sup>2</sup>) = √(4<sup>2</sup> + 32<sup>2</sup>) = √(16 + 1024) = √1040 ≈ 32.2 m/s<sup>2</sup>.',
          'Notice the centripetal part dominates once the particle is moving quickly — the net acceleration points almost straight at the centre, tilted only slightly forward by the small tangential part.',
        ],
        ans: '<i>a</i><sub><i>t</i></sub> = 4 m/s<sup>2</sup>,   <i>a</i><sub><i>c</i></sub> = 32 m/s<sup>2</sup>,   <i>a</i> ≈ 32.2 m/s<sup>2</sup>',
      },
      {
        t: 'ex',
        fig: 'p11-03-fig-3.7',
        tag: 'JEE Advanced Level',
        q: 'A car of mass 1000 kg negotiates a circular turn of radius 50 m (take <i>g</i> = 10 m/s<sup>2</sup>). (a) On a flat (unbanked) road with coefficient of friction <i>μ</i> = 0.5, find the maximum speed for a safe turn. (b) The road is instead banked (frictionless) for a design speed of 15 m/s. Find the required banking angle.',
        steps: [
          '<b>Solution:</b> (a) On a flat road, friction alone supplies the centripetal force. At the limit of safety, friction is maximal:<br><i>μmg</i> = <i>mv</i><sub>max</sub><sup>2</sup>/<i>r</i> ⇒ <i>v</i><sub>max</sub> = √(<i>μrg</i>) = √((0.5)(50)(10)) = √250 ≈ 15.8 m/s.',
          '(The mass cancels — the safe speed is independent of how heavy the car is.)',
          '(b) On a frictionless banked road, the normal force <i>N</i> tilts inward. Resolving:<br><i>N</i> sin <i>θ</i> = <i>mv</i><sup>2</sup>/<i>r</i> (horizontal, toward centre),   <i>N</i> cos <i>θ</i> = <i>mg</i> (vertical).<br>Dividing the two equations eliminates <i>N</i> and <i>m</i>:<br>tan <i>θ</i> = <i>v</i><sup>2</sup>/(<i>rg</i>) = (15)<sup>2</sup>/((50)(10)) = 225/500 = 0.45 ⇒ <i>θ</i> = tan<sup>−1</sup>(0.45) ≈ 24.2°.',
          'The banked design lets the road itself supply the inward force, so a car can corner safely even with no friction at all — the principle behind every highway interchange and velodrome.',
        ],
        ans: '<i>v</i><sub>max</sub> ≈ 15.8 m/s;   banking angle <i>θ</i> ≈ 24.2°',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A body moves in a circle of radius 4 m at a constant speed of 8 m/s. Find its centripetal acceleration.',
            a: '<i>a</i><sub><i>c</i></sub> = 16 m/s<sup>2</sup>',
          },
          {
            q: '[NEET] A particle in uniform circular motion completes 300 revolutions per minute in a circle of radius 0.2 m. Find its angular velocity and linear speed.',
            a: '<i>f</i> = 5 rev/s, <i>ω</i> = 10π ≈ 31.4 rad/s, <i>v</i> = 2π ≈ 6.28 m/s',
          },
          {
            q: '[JEE Main] A wheel starts from rest with a constant angular acceleration of 2 rad/s<sup>2</sup>. Find its angular velocity and the total angle turned after 5 s.',
            a: '<i>ω</i> = 10 rad/s, <i>θ</i> = 25 rad',
          },
          {
            q: '[JEE Main] A 2 kg stone is whirled in a vertical circle of radius 1 m. At the topmost point its speed is 5 m/s (<i>g</i> = 10 m/s<sup>2</sup>). Find the tension in the string at the top.',
            a: '<i>T</i> = <i>mv</i><sup>2</sup>/<i>r</i> − <i>mg</i> = 50 − 20 = 30 N',
          },
          {
            q: '[JEE Advanced] A car rounds an unbanked curve of radius 80 m with coefficient of friction <i>μ</i> = 0.4 (<i>g</i> = 10 m/s<sup>2</sup>). Find the maximum safe speed.',
            a: '<i>v</i><sub>max</sub> = √(<i>μrg</i>) = √320 ≈ 17.9 m/s.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In uniform circular motion, which of the following remains constant?',
        opts: [
          { label: 'velocity', nudge: '(A) velocity changes because its direction continuously changes.' },
          {
            label: 'acceleration',
            nudge: '(B) the acceleration has constant magnitude but its direction (always toward the centre) keeps rotating, so the acceleration vector is not constant.',
          },
          { label: 'speed', nudge: null },
          {
            label: 'the direction of the centripetal force',
            nudge: '(D) the centripetal force points toward the centre, a direction that rotates as the particle moves.',
          },
        ],
        correct: 2,
        solution:
          'The speed (magnitude of velocity) is constant by definition of uniform circular motion. Only the scalar speed is truly fixed.',
      },
      {
        t: 'mcq',
        q: 'The centripetal acceleration of a particle in uniform circular motion is directed:',
        opts: [
          {
            label: 'along the velocity',
            nudge: '(A) and (B) describe tangential directions — those would change the speed, but in UCM the speed is constant.',
          },
          {
            label: 'opposite to the velocity',
            nudge: '(A) and (B) describe tangential directions — those would change the speed, but in UCM the speed is constant.',
          },
          { label: 'toward the centre', nudge: null },
          {
            label: 'away from the centre',
            nudge: '(D) “away from the centre” is the centrifugal misconception; no real acceleration points outward here.',
          },
        ],
        correct: 2,
        solution:
          'Centripetal means “centre-seeking”; the acceleration points radially inward, perpendicular to the (tangential) velocity.',
      },
      {
        t: 'mcq',
        q: 'A stone is whirled in a horizontal circle at the end of a string. If the string suddenly breaks, the stone flies off:',
        opts: [
          {
            label: 'radially outward',
            nudge: '(A) radially outward is the single most common wrong answer, born of the centrifugal illusion.',
          },
          { label: 'along the tangent to the circle', nudge: null },
          { label: 'toward the centre', nudge: '(C) toward the centre would need a force that no longer exists.' },
          { label: 'spiralling outward', nudge: '(D) spiralling has no physical basis once all force is removed.' },
        ],
        correct: 1,
        solution:
          'With the inward force gone, the stone obeys Newton’s first law and continues in a straight line along the <b>tangent</b> — the direction it was moving at the instant of release.',
      },
      {
        t: 'mcq',
        q: 'A particle in uniform circular motion has its speed doubled while the radius is kept the same. Its centripetal acceleration becomes:',
        opts: [
          { label: 'double', nudge: '(A) assumes linear scaling, ignoring the square.' },
          { label: 'half', nudge: '(B) and (D) contradict the direct dependence on <i>v</i><sup>2</sup>.' },
          { label: 'four times', nudge: null },
          { label: 'unchanged', nudge: '(B) and (D) contradict the direct dependence on <i>v</i><sup>2</sup>.' },
        ],
        correct: 2,
        solution:
          '<i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> ∝ <i>v</i><sup>2</sup> at fixed <i>r</i>, so doubling <i>v</i> gives 2<sup>2</sup> = 4 times the acceleration. The same <i>v</i><sup>2</sup> law governs the centripetal force, which is why cornering speed is so safety-critical.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Constant speed means no acceleration.”</b> In UCM the direction of velocity changes constantly, so there is always a centripetal acceleration — even though the speed never changes.',
          '<b>Treating centrifugal force as real.</b> In the ground (inertial) frame there is only the inward centripetal force. “Centrifugal force” is a pseudo-force that appears solely in the rotating frame — don’t put it in a free-body diagram drawn from the ground.',
          '<b>Thinking a released object flies outward.</b> It leaves along the <b>tangent</b>, not along the radius. The inward force simply stops acting.',
          '<b>Forgetting the tangential component in non-uniform motion.</b> When the speed changes, there are two accelerations — tangential (<i>a</i><sub><i>t</i></sub> = <i>αr</i>, changes speed) and centripetal (<i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i>, changes direction) — and the net is their perpendicular combination.',
          '<b>Using degrees for <i>ω</i> or <i>θ</i>.</b> The relations <i>v</i> = <i>ωr</i> and <i>a</i><sub><i>t</i></sub> = <i>αr</i> hold only with angles in <b>radians</b>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For every circular-motion problem, first ask: what real force is supplying the centripetal requirement? — tension, friction, gravity, the normal force, or a combination. Then set that inward force equal to <i>mv</i><sup>2</sup>/<i>r</i> and solve. Keep two facts at your fingertips: <i>a</i><sub><i>c</i></sub> ∝ <i>v</i><sup>2</sup> (so speed changes hit hard), and in non-uniform motion the tangential and centripetal accelerations are perpendicular, combining as √(<i>a</i><sub><i>t</i></sub><sup>2</sup> + <i>a</i><sub><i>c</i></sub><sup>2</sup>). Always work angles in radians.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Links',
            note: '<i>s</i> = <i>rθ</i>, <i>v</i> = <i>ωr</i>, <i>a</i><sub><i>t</i></sub> = <i>αr</i>;   <i>ω</i> = d<i>θ</i>/d<i>t</i>, <i>α</i> = d<i>ω</i>/d<i>t</i> (radians!).',
          },
          {
            f: 'UCM',
            note: '<i>ω</i> = 2π/<i>T</i> = 2π<i>f</i>;   <i>v</i> = 2π<i>r</i>/<i>T</i>.',
          },
          {
            f: 'Centripetal',
            note: '<i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i> = <i>ω</i><sup>2</sup><i>r</i> = <i>vω</i> (toward centre);   <i>F</i><sub><i>c</i></sub> = <i>mv</i><sup>2</sup>/<i>r</i> = <i>mω</i><sup>2</sup><i>r</i>.',
          },
          {
            f: 'Non-uniform',
            note: 'tangential <i>a</i><sub><i>t</i></sub> = <i>αr</i> and radial <i>a</i><sub><i>c</i></sub> = <i>v</i><sup>2</sup>/<i>r</i>; net <i>a</i> = √(<i>a</i><sub><i>t</i></sub><sup>2</sup> + <i>a</i><sub><i>c</i></sub><sup>2</sup>).',
          },
          {
            f: 'Angular kinematics (const <i>α</i>)',
            note: '<i>ω</i> = <i>ω</i><sub>0</sub> + <i>αt</i>; <i>θ</i> = <i>ω</i><sub>0</sub><i>t</i> + ½<i>αt</i><sup>2</sup>; <i>ω</i><sup>2</sup> = <i>ω</i><sub>0</sub><sup>2</sup> + 2<i>αθ</i>.',
          },
          {
            f: 'Banking (frictionless)',
            note: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/(<i>rg</i>);   max speed (unbanked): <i>v</i><sub>max</sub> = √(<i>μrg</i>).',
          },
          {
            f: 'Centrifugal force = pseudo-force (rotating frame only); the real force is centripetal (inward).',
            note: '',
          },
        ],
        aids: ['Mnemonic: <b>“Speed steady, direction never — that’s why it accelerates inward.”</b>'],
      },
    ],
  },
];
