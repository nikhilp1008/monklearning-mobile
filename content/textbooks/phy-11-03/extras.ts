import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3's four Additional Topics, word for word from the Master Reference
 * book, pages 182 to 194: the addenda's shared opening (p. 182, set at the
 * head of Addendum A), A Projectiles That Do Not Land Where They Started
 * (pp. 182 to 185), B The Vertical Circle, Done Properly (pp. 186 to 188),
 * C Banking With Friction: The Complete Safe-Speed Band (pp. 188 to 191) and
 * D When the Current Wins, and Closest Approach by Geometry (pp. 191 to 194).
 * No drawings in these pages.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Projectiles That Do Not Land Where They Started',
    extra: true,
    kalam: 'Sub-topic 04 derives T, H and R under one silent assumption: launch and landing at the same height.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter handed you the full toolkit — resolution, independence of perpendicular motions, the dot and cross products, level-ground projectiles, the river-boat dichotomy, and centripetal dynamics. Four examinable patterns still stand outside its door, and every one of them is a marriage of two things the chapter already teaches separately. Addendum A fires projectiles at targets that are not at launch level — a cliff below, an incline ahead — which is the JEE Main/Advanced staple the chapter’s own limiting-conditions note waves toward but never solves. Addendum B finishes the vertical circle, whose only appearance in the chapter is a practice answer asserting <i>T</i> = <i>mv</i><sup>2</sup>/<i>r</i> − <i>mg</i> with no derivation. Addendum C merges the chapter’s two separate results — frictionless banking and flat-road friction — into the single safe-speed band JEE actually asks for. Addendum D settles the river the boat cannot beat (<i>v</i><sub><i>b</i></sub> ≤ <i>v</i><sub><i>r</i></sub>) and replaces the calculus of closest approach with pure geometry.<br><br>Nothing here is new theory. Every method below is component resolution, the radial form of Newton’s second law, or energy conservation, applied one configuration over.',
      },
      {
        t: 'p',
        html: 'Sub-topic 04 derives <i>T</i>, <i>H</i> and <i>R</i> under one silent assumption: launch and landing at the same height. It then warns that “if the projectile lands higher or lower, you must go back to the component equations” — but never shows the return trip. Boards and JEE both test that return trip constantly: the tower shot (CBSE 2–3 marks), and the projectile on an inclined plane (a guaranteed JEE Main pattern, a recurring Advanced one).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Case 1 — landing a depth <i>h</i> below the launch point.</b> Keep the chapter’s axes: origin at launch, <i>y</i> up, so the landing condition is <i>y</i> = −<i>h</i> instead of <i>y</i> = 0.',
      },
      {
        t: 'p',
        html: 'The vertical position at time <i>t</i> is<br><i>y</i>(<i>t</i>) = (<i>u</i> sin <i>θ</i>) <i>t</i> − ½<i>gt</i><sup>2</sup>.<br>Setting <i>y</i> = −<i>h</i> and multiplying through by −2:<br><i>gt</i><sup>2</sup> − 2<i>u</i> sin <i>θ</i> <i>t</i> − 2<i>h</i> = 0.<br>The quadratic formula gives two roots; only the positive one is physical:<br><i>t</i> = (<i>u</i> sin <i>θ</i> + √(<i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i> + 2<i>gh</i>))/<i>g</i>.',
      },
      {
        t: 'p',
        html: '• <i>u</i> — launch speed in m/s; <i>θ</i> — launch angle above the horizontal; <i>h</i> — depth of the landing point below launch, in m; <i>g</i> in m/s<sup>2</sup>, so <i>t</i> comes out in s.<br>• The quantity under the root, <i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i> + 2<i>gh</i>, is exactly the square of the vertical impact speed, because the vertical channel gives <i>v</i><sub><i>y</i></sub><sup>2</sup> = <i>u</i><sub><i>y</i></sub><sup>2</sup> + 2<i>gh</i>. One square root, two readings.<br>• The horizontal range is then <i>R</i> = (<i>u</i> cos <i>θ</i>) <i>t</i> — the horizontal channel never changes.<br>• Impact speed from energy alone: <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>gh</i>, valid whatever the launch angle.',
      },
      {
        t: 'p',
        html: '<b>Case 2 — the inclined plane.</b> Rotate the axes to sit on the plane. Let the plane rise at angle <i>β</i> above the horizontal and the projectile be launched at angle <i>θ</i> above the horizontal, so the launch angle relative to the incline is <i>θ</i> − <i>β</i>. Along the incline (<i>x</i>′, uphill positive) and perpendicular to it (<i>y</i>′, out of the plane positive), gravity resolves into two pieces:<br><i>a</i><sub><i>x</i>′</sub> = −<i>g</i> sin <i>β</i>,   <i>a</i><sub><i>y</i>′</sub> = −<i>g</i> cos <i>β</i>,<br>and the launch velocity resolves into<br><i>u</i><sub><i>x</i>′</sub> = <i>u</i> cos(<i>θ</i> − <i>β</i>),   <i>u</i><sub><i>y</i>′</sub> = <i>u</i> sin(<i>θ</i> − <i>β</i>).<br>This is the chapter’s independence principle with rotated axes: two 1-D problems sharing the clock <i>t</i>.',
      },
      {
        t: 'p',
        html: '<b>Flight time.</b> The projectile lands when <i>y</i>′ returns to zero:<br>0 = <i>u</i> sin(<i>θ</i> − <i>β</i>) <i>t</i> − ½(<i>g</i> cos <i>β</i>) <i>t</i><sup>2</sup>,<br>so, discarding the root <i>t</i> = 0,<br><i>T</i> = 2<i>u</i> sin(<i>θ</i> − <i>β</i>)/(<i>g</i> cos <i>β</i>).',
      },
      {
        t: 'p',
        html: '<b>Range along the incline.</b> The <i>x</i>′-displacement during time <i>T</i> is<br><i>R</i> = <i>u</i> cos(<i>θ</i> − <i>β</i>) <i>T</i> − ½(<i>g</i> sin <i>β</i>) <i>T</i><sup>2</sup>.<br>Substituting <i>T</i> and factoring out 2<i>u</i><sup>2</sup>/(<i>g</i> cos<sup>2</sup> <i>β</i>):<br><i>R</i> = (2<i>u</i><sup>2</sup>/(<i>g</i> cos<sup>2</sup> <i>β</i>)) sin(<i>θ</i> − <i>β</i>)[cos(<i>θ</i> − <i>β</i>) cos <i>β</i> − sin(<i>θ</i> − <i>β</i>) sin <i>β</i>].<br>The bracket is cos((<i>θ</i> − <i>β</i>) + <i>β</i>) = cos <i>θ</i> by the cosine addition rule, so<br><i>R</i> = 2<i>u</i><sup>2</sup> sin(<i>θ</i> − <i>β</i>) cos <i>θ</i>/(<i>g</i> cos<sup>2</sup> <i>β</i>).',
      },
      {
        t: 'p',
        html: '<b>Maximum range.</b> Using 2 sin <i>A</i> cos <i>B</i> = sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>) with <i>A</i> = <i>θ</i> − <i>β</i>, <i>B</i> = <i>θ</i>:<br><i>R</i> = <i>u</i><sup>2</sup>[sin(2<i>θ</i> − <i>β</i>) − sin <i>β</i>]/(<i>g</i> cos<sup>2</sup> <i>β</i>).<br>This peaks when sin(2<i>θ</i> − <i>β</i>) = 1, i.e. at<br><i>θ</i> = 45° + <i>β</i>/2,   <i>R</i><sub>max</sub> = <i>u</i><sup>2</sup>(1 − sin <i>β</i>)/(<i>g</i> cos<sup>2</sup> <i>β</i>) = <i>u</i><sup>2</sup>/(<i>g</i>(1 + sin <i>β</i>)),<br>where the last step cancels 1 − sin <i>β</i> against cos<sup>2</sup> <i>β</i> = (1 − sin <i>β</i>)(1 + sin <i>β</i>).',
      },
      {
        t: 'p',
        html: '• If the angle <i>α</i> is given from the incline instead of from the horizontal, put <i>θ</i> = <i>α</i> + <i>β</i> throughout.<br>• Sanity anchors: <i>β</i> = 0 collapses everything to the chapter’s level-ground results, and <i>θ</i> = 90° gives <i>R</i> = 0 (fired straight up, lands at your feet on the incline).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'From the top of a tower of height 75 m, a ball is thrown at 20 m/s at 30° above the horizontal (<i>g</i> = 10 m/s<sup>2</sup>). Find (a) the time of flight, (b) the horizontal distance from the base of the tower where it lands, and (c) the impact speed.',
        steps: [
          'Given: <i>u</i> = 20 m/s, <i>θ</i> = 30°, <i>h</i> = 75 m, so <i>u</i> sin <i>θ</i> = 10 m/s and <i>u</i> cos <i>θ</i> = 10√3 m/s ≈ 17.32 m/s.',
          '(a) Apply the depth formula. The quantity under the root is<br><i>u</i><sup>2</sup> sin<sup>2</sup> <i>θ</i> + 2<i>gh</i> = (10)<sup>2</sup> + 2(10)(75) = 100 + 1500 = 1600 m<sup>2</sup>/s<sup>2</sup>,<br>so √1600 = 40 m/s and<br><i>t</i> = (10 + 40)/10 = 5 s.',
          '(b) The horizontal channel runs at constant speed:<br><i>R</i> = (10√3)(5) = 50√3 ≈ 86.6 m.',
          '(c) By energy, <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>gh</i> = 400 + 1500 = 1900 m<sup>2</sup>/s<sup>2</sup>, so<br><i>v</i> = √1900 = 10√19 ≈ 43.6 m/s.',
          '<b>Check.</b> Component route: <i>v</i><sub><i>y</i></sub> = <i>u</i> sin <i>θ</i> − <i>gt</i> = 10 − 50 = −40 m/s, and √((10√3)<sup>2</sup> + (−40)<sup>2</sup>) = √(300 + 1600) = √1900. Same number — the square root in the flight-time formula really was the vertical impact speed. Note the flight lasts longer than the level-ground value 2<i>u</i> sin <i>θ</i>/<i>g</i> = 2 s: falling an extra 75 m buys extra time, hence extra range.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A projectile is fired at 20 m/s at 60° above the horizontal, up a plane inclined at 30° to the horizontal (<i>g</i> = 10 m/s<sup>2</sup>). Find the time of flight and the range along the incline, and verify the range against the maximum-range formula.',
        steps: [
          'Here <i>θ</i> − <i>β</i> = 60° − 30° = 30°, and cos <i>β</i> = √3/2.',
          '(a) Flight time:<br><i>T</i> = 2<i>u</i> sin(<i>θ</i> − <i>β</i>)/(<i>g</i> cos <i>β</i>) = 2(20)(0.5)/(10 × √3/2) = 20/(5√3) = 4/√3 ≈ 2.31 s.',
          '(b) Range along the incline:<br><i>R</i> = 2<i>u</i><sup>2</sup> sin(<i>θ</i> − <i>β</i>) cos <i>θ</i>/(<i>g</i> cos<sup>2</sup> <i>β</i>) = 2(400)(0.5)(0.5)/(10 × 3/4) = 200/7.5 ≈ 26.7 m.',
          '(c) Verification. This angle happens to be the optimum, since 45° + <i>β</i>/2 = 45° + 15° = 60°. The maximum-range formula must therefore agree:<br><i>R</i><sub>max</sub> = <i>u</i><sup>2</sup>/(<i>g</i>(1 + sin <i>β</i>)) = 400/(10 × 1.5) = 400/15 ≈ 26.7 m.✓',
          'Two independent formulas, one number — and the agreement confirms both the rotated-axis setup and the trigonometric reduction in one stroke.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A ball rolls off a 45 m cliff horizontally at 10 m/s (<i>g</i> = 10 m/s<sup>2</sup>). Find its time of fall and where it lands.',
            a: '<i>T</i> = √(2<i>h</i>/<i>g</i>) = √9 = 3 s; <i>R</i> = (10)(3) = 30 m from the base.',
          },
          {
            q: 'A ball is thrown horizontally from a roof and lands 40 m from the base 4 s later (<i>g</i> = 10 m/s<sup>2</sup>). Find the roof’s height and the launch speed.',
            a: '<i>h</i> = ½<i>gt</i><sup>2</sup> = 80 m; <i>u</i> = 40/4 = 10 m/s.',
          },
          {
            q: 'Show that on a 30° incline, the range of a projectile of launch speed <i>u</i> is maximised at <i>θ</i> = 60° from the horizontal, and evaluate that maximum range for <i>u</i> = 10 m/s, <i>g</i> = 10 m/s<sup>2</sup>.',
            a: 'The optimum is <i>θ</i> = 45° + <i>β</i>/2 = 60°; <i>R</i><sub>max</sub> = <i>u</i><sup>2</sup>/[<i>g</i>(1 + sin 30°)] = 100/15 ≈ 6.67 m.',
          },
          {
            q: 'Derive the range formula for a projectile fired down an incline of angle <i>β</i>, launched at angle <i>θ</i> above the horizontal with the same speed <i>u</i>.',
            a: 'Reverse the sign of the along-incline gravity term and of the geometry: <i>R</i> = <i>u</i><sup>2</sup>[sin(2<i>θ</i> + <i>β</i>) + sin <i>β</i>]/(<i>g</i> cos<sup>2</sup> <i>β</i>), obtained by replacing <i>β</i> → −<i>β</i> in the uphill formula.',
          },
          {
            q: 'From a tower of height 20 m a ball is thrown at 15 m/s at 30° above the horizontal (<i>g</i> = 10 m/s<sup>2</sup>). Find the horizontal distance travelled and the impact speed.',
            a: '<i>t</i> = (7.5 + √(56.25 + 400))/10 = (7.5 + 21.36)/10 ≈ 2.89 s; <i>R</i> ≈ (12.99)(2.89) ≈ 37.5 m; <i>v</i> = √(<i>u</i><sup>2</sup> + 2<i>gh</i>) = √625 = 25 m/s exactly — the energy check is the fast route to the impact speed.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'The Vertical Circle, Done Properly',
    extra: true,
    kalam:
      'JEE Main asks for the minimum launch speed to complete a loop nearly every other year; JEE Advanced asks where the string goes slack.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Sub-topic 06 builds all the machinery — centripetal force, real-force identification — but its only vertical-circle item is a practice answer that quotes <i>T</i> = <i>mv</i><sup>2</sup>/<i>r</i> − <i>mg</i> at the top without ever deriving it. JEE Main asks for the minimum launch speed to complete a loop nearly every other year; JEE Advanced asks where the string goes slack. Both come from one radial equation plus one energy statement.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'A particle of mass <i>m</i> on a string of length <i>l</i>, speed <i>u</i> at the lowest point, <i>g</i> downward. Measure position by the angle <i>θ</i> from the bottom.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — the radial equation at any angle.</b> Toward the centre act the tension <i>T</i> (always) and the component of gravity along the radius, which is −<i>mg</i> cos <i>θ</i> — inward when the particle is above the level of the centre (<i>θ</i> > 90°), outward when below. Newton’s second law along the radius:<br><i>T</i> − <i>mg</i> cos <i>θ</i> = <i>mv</i><sup>2</sup>/<i>l</i>   ⟹   <i>T</i> = <i>m</i>(<i>v</i><sup>2</sup>/<i>l</i> + <i>g</i> cos <i>θ</i>).<br>Anchor it at the endpoints: <i>θ</i> = 0 gives <i>T</i> − <i>mg</i> = <i>mv</i><sup>2</sup>/<i>l</i> (bottom, correct); <i>θ</i> = 180° gives <i>T</i> + <i>mg</i> = <i>mv</i><sup>2</sup>/<i>l</i> (top, correct).',
      },
      {
        t: 'p',
        html: '<b>Step 2 — energy ties <i>v</i> to <i>θ</i>.</b> The height above the bottom is <i>l</i>(1 − cos <i>θ</i>), so with speed <i>u</i> at the bottom:<br>½<i>mv</i><sup>2</sup> = ½<i>mu</i><sup>2</sup> − <i>mgl</i>(1 − cos <i>θ</i>)   ⟹   <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> − 2<i>gl</i>(1 − cos <i>θ</i>).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — three headline consequences.</b><br>Minimum speed at the top. A string can pull, never push, so staying on the circle requires <i>T</i> ≥ 0. At the top (<i>θ</i> = 180°):<br><i>T</i> = <i>m</i>(<i>v</i><sub>top</sub><sup>2</sup>/<i>l</i> − <i>g</i>) ≥ 0   ⟹   <i>v</i><sub>top</sub> ≥ √(<i>gl</i>).<br>Energy between bottom and top (height change 2<i>l</i>) gives <i>u</i><sup>2</sup> = <i>v</i><sub>top</sub><sup>2</sup> + 4<i>gl</i>, hence<br><i>u</i><sub>min</sub> = √(5<i>gl</i>).',
      },
      {
        t: 'p',
        html: 'Tension difference. At the bottom <i>T</i><sub>1</sub> = <i>mu</i><sup>2</sup>/<i>l</i> + <i>mg</i>; at the top <i>T</i><sub>2</sub> = <i>mv</i><sub>top</sub><sup>2</sup>/<i>l</i> − <i>mg</i>. Subtracting, and using <i>u</i><sup>2</sup> − <i>v</i><sub>top</sub><sup>2</sup> = 4<i>gl</i>:<br><i>T</i><sub>1</sub> − <i>T</i><sub>2</sub> = <i>m</i>(<i>u</i><sup>2</sup> − <i>v</i><sub>top</sub><sup>2</sup>)/<i>l</i> + 2<i>mg</i> = 4<i>mg</i> + 2<i>mg</i> = 6<i>mg</i>.<br>Independent of <i>l</i>, independent of <i>u</i> — provided the loop is completed. This 6<i>mg</i> is the single most quoted result of the topic.',
      },
      {
        t: 'p',
        html: 'The side point. At <i>θ</i> = 90° gravity has no radial component, so <i>T</i><sub>3</sub> = <i>mv</i><sub>3</sub><sup>2</sup>/<i>l</i> with <i>v</i><sub>3</sub><sup>2</sup> = <i>u</i><sup>2</sup> − 2<i>gl</i>. For the critical launch <i>u</i><sup>2</sup> = 5<i>gl</i>: <i>v</i><sub>3</sub><sup>2</sup> = 3<i>gl</i> and <i>T</i><sub>3</sub> = 3<i>mg</i>.',
      },
      {
        t: 'p',
        html: '<b>Slack condition, generally.</b> Setting <i>T</i> = 0 in Step 1 and substituting Step 2:<br><i>u</i><sup>2</sup> − 2<i>gl</i>(1 − cos <i>θ</i>) = −<i>gl</i> cos <i>θ</i>   ⟹   <i>u</i><sup>2</sup> = 2<i>gl</i> − 3<i>gl</i> cos <i>θ</i>.<br>This root is physical (the particle actually reaches it, with <i>v</i><sup>2</sup> = −<i>gl</i> cos <i>θ</i> ≥ 0, so 90° < <i>θ</i> < 180°) precisely when 2<i>gl</i> < <i>u</i><sup>2</sup> < 5<i>gl</i>: below √(2<i>gl</i>) the particle merely oscillates; above √(5<i>gl</i>) it completes the loop; between, it leaves the circle and becomes a projectile.',
      },
      {
        t: 'p',
        html: '<b>Rod versus string.</b> A rigid rod can push. The loop then needs only <i>v</i><sub>top</sub> > 0, i.e. <i>u</i> > 2√(<i>gl</i>) — and the difference <i>F</i><sub>bottom</sub> − <i>F</i><sub>top</sub> = 6<i>mg</i> still holds if the rod’s force is counted positive when it pulls toward the centre (at the top it may come out negative: a push).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 2 kg stone on a 0.5 m string is whirled in a vertical circle with speed 6 m/s at the lowest point (<i>g</i> = 10 m/s<sup>2</sup>). Does it complete the loop? Find the tension at the top and at the bottom.',
        steps: [
          'First the admission test: <i>u</i><sub>min</sub> = √(5<i>gl</i>) = √(5 × 10 × 0.5) = √25 = 5 m/s. Since 6 > 5, the loop is completed.',
          'Top: energy gives <i>v</i><sub>top</sub><sup>2</sup> = <i>u</i><sup>2</sup> − 4<i>gl</i> = 36 − 20 = 16 m<sup>2</sup>/s<sup>2</sup>. Then<br><i>T</i><sub>top</sub> = <i>m</i>(<i>v</i><sub>top</sub><sup>2</sup>/<i>l</i> − <i>g</i>) = 2(16/0.5 − 10) = 2(32 − 10) = 44 N.',
          'Bottom:<br><i>T</i><sub>bottom</sub> = <i>m</i>(<i>u</i><sup>2</sup>/<i>l</i> + <i>g</i>) = 2(36/0.5 + 10) = 2(72 + 10) = 164 N.',
          '<b>Check.</b> <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 120 N, and indeed 6<i>mg</i> = 6(2)(10) = 120 N.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The stone of Example B.1’s setup (<i>l</i> = 0.5 m, <i>g</i> = 10 m/s<sup>2</sup>) is instead launched from the bottom with <i>u</i> = √(4<i>gl</i>) = √20 ≈ 4.47 m/s. Show it neither oscillates nor completes the loop, and find the angle (from the bottom) at which the string goes slack, together with its speed there.',
        steps: [
          'Since √(2<i>gl</i>) < √(4<i>gl</i>) < √(5<i>gl</i>), the stone climbs past the horizontal but leaves the circle before the top — the intermediate regime.',
          'Apply the slack condition with <i>u</i><sup>2</sup> = 4<i>gl</i>:<br>4<i>gl</i> = 2<i>gl</i> − 3<i>gl</i> cos <i>θ</i>   ⟹   cos <i>θ</i> = −2/3   ⟹   <i>θ</i> ≈ 132°.',
          'Speed at release: from <i>T</i> = 0, <i>v</i><sup>2</sup> = −<i>gl</i> cos <i>θ</i> = 2<i>gl</i>/3 = 2(10)(0.5)/3 = 10/3 ≈ 3.33 m<sup>2</sup>/s<sup>2</sup>, so <i>v</i> ≈ 1.83 m/s.',
          '<b>Sanity checks.</b> The height at release is <i>l</i>(1 − cos <i>θ</i>) = 5<i>l</i>/3 ≈ 0.83 m, less than the diameter 2<i>l</i> = 1 m — consistent with failing to reach the top. And the energy ledger closes: ½<i>u</i><sup>2</sup> = 2<i>gl</i> = 10 J per kilogram, of which <i>gh</i> = 10 × 0.833 ≈ 8.33 J/kg is potential at release, leaving ≈ 1.67 = ½(1.83)<sup>2</sup> J/kg kinetic. From the release instant onward the stone is an ordinary projectile under gravity.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the minimum speed at the bottom needed to complete a vertical loop of radius 0.9 m (<i>g</i> = 10 m/s<sup>2</sup>).',
            a: '√(5<i>gl</i>) = √45 ≈ 6.71 m/s.',
          },
          {
            q: 'A particle on a string completes a vertical loop with <i>u</i><sup>2</sup> = 7<i>gl</i> at the bottom. Express the tension at the top and at the bottom in terms of <i>mg</i>.',
            a: 'Top: <i>v</i><sub>top</sub><sup>2</sup> = 3<i>gl</i>, so <i>T</i><sub>top</sub> = 2<i>mg</i>; bottom: <i>T</i><sub>bottom</sub> = 8<i>mg</i>; difference 6<i>mg</i> as always.',
          },
          {
            q: 'For the critical launch <i>u</i> = √(5<i>gl</i>), find the speed and the tension when the string is horizontal.',
            a: '<i>v</i><sup>2</sup> = 3<i>gl</i>, <i>v</i> = √(3<i>gl</i>); <i>T</i> = 3<i>mg</i> (gravity contributes nothing radially there).',
          },
          {
            q: 'A bead threaded on a rigid circular wire is given <i>u</i> = √(3<i>gl</i>) at the bottom. Does it complete the loop?',
            a: 'No. A rod or wire can push, so the requirement is only <i>u</i> > 2√(<i>gl</i>). Squaring <i>u</i> = √(3<i>gl</i>) gives <i>u</i><sup>2</sup> = 3<i>gl</i> < 4<i>gl</i>, so <i>u</i> < 2√(<i>gl</i>) and the bead does <b>not</b> complete the loop; it rises past the horizontal, stops below the top and slides back (a wire cannot let it go slack), oscillating about the bottom.',
          },
          {
            q: 'Show that <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> contains neither <i>l</i> nor <i>u</i>, and explain physically why.',
            a: 'The difference reduces to <i>m</i>(<i>u</i><sup>2</sup> − <i>v</i><sub>top</sub><sup>2</sup>)/<i>l</i> + 2<i>mg</i>, and energy fixes <i>u</i><sup>2</sup> − <i>v</i><sub>top</sub><sup>2</sup> = 4<i>gl</i> regardless of the actual values — the extra tension at the bottom over the top must supply exactly the centripetal bookkeeping of climbing 2<i>l</i>, which depends only on <i>g</i>.',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Banking With Friction: The Complete Safe-Speed Band',
    extra: true,
    kalam:
      'Real JEE questions put both ingredients on the same road — a banked curve with friction — and ask for the band of legal speeds.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Sub-topic 06 derives two separate results: <i>v</i><sub>max</sub> = √(<i>μrg</i>) on a flat road, and tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i> on a frictionless bank. Real JEE questions put both ingredients on the same road — a banked curve with friction — and ask for the band of legal speeds. Neither chapter result survives alone.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Road banked at <i>θ</i>, coefficient of static friction <i>μ</i>, curve radius <i>r</i>. The normal force <i>N</i> tilts inward from the vertical by <i>θ</i>; friction <i>f</i> acts along the road surface. There are two regimes.',
      },
      {
        t: 'p',
        html: '<b>Upper limit — car tending to slide up and out.</b> Friction opposes the tendency and acts down the slope, contributing an inward radial piece <i>f</i> cos <i>θ</i> and a downward piece <i>f</i> sin <i>θ</i>. At the limit <i>f</i> = <i>μN</i>:<br><i>N</i> sin <i>θ</i> + <i>μN</i> cos <i>θ</i> = <i>mv</i><sup>2</sup>/<i>r</i>,   <i>N</i> cos <i>θ</i> − <i>μN</i> sin <i>θ</i> = <i>mg</i>.<br>Divide the first by the second (<i>N</i> and <i>m</i> both cancel):<br><i>v</i><sub>max</sub> = √(<i>rg</i> (sin <i>θ</i> + <i>μ</i> cos <i>θ</i>)/(cos <i>θ</i> − <i>μ</i> sin <i>θ</i>)) = √(<i>rg</i> (<i>μ</i> + tan <i>θ</i>)/(1 − <i>μ</i> tan <i>θ</i>)).',
      },
      {
        t: 'p',
        html: '<b>Lower limit — car tending to slide down the bank.</b> Friction acts up the slope, outward radially. Repeat with signs flipped:<br><i>v</i><sub>min</sub> = √(<i>rg</i> (sin <i>θ</i> − <i>μ</i> cos <i>θ</i>)/(cos <i>θ</i> + <i>μ</i> sin <i>θ</i>)) = √(<i>rg</i> (tan <i>θ</i> − <i>μ</i>)/(1 + <i>μ</i> tan <i>θ</i>)).',
      },
      {
        t: 'p',
        html: '<b>Four consistency checks you should run every time.</b><br>• <i>μ</i> = 0: both collapse to √(<i>rg</i> tan <i>θ</i>) — the chapter’s frictionless design speed <i>v</i><sub>0</sub>.<br>• <i>θ</i> = 0: <i>v</i><sub>max</sub> = √(<i>μrg</i>) (the chapter’s flat-road result), <i>v</i><sub>min</sub> = 0.<br>• If tan <i>θ</i> ≤ <i>μ</i>, the numerator of <i>v</i><sub>min</sub> is non-positive: the bank is rough enough, for its slope, to hold a stationary car, so the legal band is 0 ≤ <i>v</i> ≤ <i>v</i><sub>max</sub>.<br>• If <i>μ</i> tan <i>θ</i> ≥ 1, the denominator of <i>v</i><sub>max</sub> is non-positive: friction can hold the car at any speed, and there is no upper limit.',
      },
      {
        t: 'p',
        html: '<b>Friction at the design speed.</b> At <i>v</i> = <i>v</i><sub>0</sub> = √(<i>rg</i> tan <i>θ</i>), the pair <i>N</i> sin <i>θ</i> = <i>mv</i><sub>0</sub><sup>2</sup>/<i>r</i> and <i>N</i> cos <i>θ</i> = <i>mg</i> divides to exactly tan <i>θ</i> = <i>v</i><sub>0</sub><sup>2</sup>/<i>rg</i> with <i>f</i> = 0 — the equations are satisfied with no friction at all, so the required friction there is zero however slippery the road.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A curve of radius 20 m is banked at 37° (take sin 37° = 0.6, cos 37° = 0.8). The coefficient of friction is 0.5 and <i>g</i> = 10 m/s<sup>2</sup>. Find <i>v</i><sub>max</sub>, <i>v</i><sub>min</sub> and the friction-free design speed.',
        steps: [
          'With <i>rg</i> = 200 m<sup>2</sup>/s<sup>2</sup>:<br><i>v</i><sub>max</sub><sup>2</sup> = 200 × (0.6 + (0.5)(0.8))/(0.8 − (0.5)(0.6)) = 200 × 1.0/0.5 = 400,<br>so <i>v</i><sub>max</sub> = 20 m/s.',
          '<i>v</i><sub>min</sub><sup>2</sup> = 200 × (0.6 − (0.5)(0.8))/(0.8 + (0.5)(0.6)) = 200 × 0.2/1.1 ≈ 36.4,<br>so <i>v</i><sub>min</sub> ≈ 6.03 m/s. Design speed: <i>v</i><sub>0</sub><sup>2</sup> = <i>rg</i> tan 37° = 200 × 0.75 = 150, so <i>v</i><sub>0</sub> ≈ 12.2 m/s.',
          '<b>Checks.</b> Strip the friction (<i>μ</i> = 0) and both limits become √150 ≈ 12.2 m/s — the band pinches to a point at the design speed, exactly as it must. Flatten the road (<i>θ</i> = 0) and <i>v</i><sub>max</sub> becomes √(<i>μrg</i>) = √100 = 10 m/s. The legal window here is roughly 6.0 m/s to 20 m/s: banking widens the band asymmetrically upward, which is the entire engineering point.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'On the curve of Example C.1, an 800 kg car travels at 10 m/s — below the design speed. Find the friction force on the car: magnitude, direction, and whether the available friction suffices.',
        steps: [
          'Below <i>v</i><sub>0</sub> the car tends to slide down the bank, so assume friction acts up the slope (its radial component then points outward). Newton’s law radially and vertically:<br><i>N</i> sin <i>θ</i> − <i>f</i> cos <i>θ</i> = <i>mv</i><sup>2</sup>/<i>r</i>,   <i>N</i> cos <i>θ</i> + <i>f</i> sin <i>θ</i> = <i>mg</i>.',
          'To isolate <i>f</i>, multiply the first by cos <i>θ</i> and the second by sin <i>θ</i>, then subtract the first from the second:<br><i>f</i> = <i>mg</i> sin <i>θ</i> − <i>mv</i><sup>2</sup> cos <i>θ</i>/<i>r</i> = (800)(10)(0.6) − (800)(100)(0.8)/20 = 4800 − 3200 = 1600 N.',
          'Positive, so the assumed direction is right: friction acts <b>up the slope</b> with magnitude 1600 N.',
          'For feasibility we need <i>N</i>: multiply the first equation by sin <i>θ</i> and the second by cos <i>θ</i>, then add:<br><i>N</i> = <i>mv</i><sup>2</sup> sin <i>θ</i>/<i>r</i> + <i>mg</i> cos <i>θ</i> = (800)(100)(0.6)/20 + (800)(10)(0.8) = 2400 + 6400 = 8800 N.',
          'Required coefficient: <i>f</i>/<i>N</i> = 1600/8800 ≈ 0.18, comfortably below the available 0.5.',
          '<b>Physical reading.</b> Slow cars need friction holding them up the bank; fast cars need friction holding them down. Only at <i>v</i><sub>0</sub> ≈ 12.2 m/s does the road’s geometry do all the work alone — which is why highway curves are banked for the typical traffic speed, not the maximum one.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A frictionless curve of radius 40 m is to be taken safely at 20 m/s (<i>g</i> = 10 m/s<sup>2</sup>). Find the banking angle.',
            a: 'tan <i>θ</i> = <i>v</i><sup>2</sup>/<i>rg</i> = 400/400 = 1, so <i>θ</i> = 45°.',
          },
          {
            q: 'For a curve with <i>r</i> = 50 m, <i>θ</i> = 30° (tan 30° ≈ 0.577, sin 30° = 0.5, cos 30° ≈ 0.866), <i>μ</i> = 0.5, <i>g</i> = 10 m/s<sup>2</sup>: find <i>v</i><sub>max</sub>.',
            a: '<i>v</i><sub>max</sub><sup>2</sup> = 500 (0.5 + 0.433)/(0.866 − 0.25) = 500 × 0.933/0.616 ≈ 757, so <i>v</i><sub>max</sub> ≈ 27.5 m/s (check: (<i>μ</i> + tan <i>θ</i>)/(1 − <i>μ</i> tan <i>θ</i>) = 1.077/0.711 ≈ 1.514, and 500 × 1.514 ≈ 757).',
          },
          {
            q: 'Prove that <i>v</i><sub>min</sub> = 0 if and only if tan <i>θ</i> ≤ <i>μ</i>.',
            a: '<i>v</i><sub>min</sub><sup>2</sup> ∝ (tan <i>θ</i> − <i>μ</i>); the expression under the root is non-negative precisely when tan <i>θ</i> ≥ <i>μ</i>, and otherwise the static-friction balance holds even for <i>v</i> = 0 — a parked car does not slide down a sufficiently rough bank.',
          },
          {
            q: 'A car takes a banked curve at exactly <i>v</i><sub>0</sub>. What friction force acts, and what supplies the centripetal force?',
            a: 'Zero friction; the inward component of the normal force alone supplies <i>mv</i><sub>0</sub><sup>2</sup>/<i>r</i>.',
          },
          {
            q: 'On a banked curve with tan <i>θ</i> = 0.75 and <i>μ</i> = 0.8, what is the lower end of the legal speed band?',
            a: 'Since tan <i>θ</i> = 0.75 ≤ <i>μ</i> = 0.8, <i>v</i><sub>min</sub> = 0 — the car may stop on the bank.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'When the Current Wins, and Closest Approach by Geometry',
    extra: true,
    kalam:
      'Sub-topic 05 handles the river cleanly for vb > vr, and its limiting-conditions box admits that when vb ≤ vr “the goal shifts to minimising” the drift — without doing it.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Sub-topic 05 handles the river cleanly for <i>v</i><sub><i>b</i></sub> > <i>v</i><sub><i>r</i></sub>, and its limiting-conditions box admits that when <i>v</i><sub><i>b</i></sub> ≤ <i>v</i><sub><i>r</i></sub> “the goal shifts to minimising” the drift — without doing it. Meanwhile its closest-approach work minimises |<i>r⃗</i>|<sup>2</sup> by calculus; the geometric shortcut is faster, less error-prone, and worth owning as a second method.',
      },

      // The book's heading reads "when vb ≤ vr"; reworded (approved fix) because a part title is plain text.
      { t: 'part', title: 'Method D.1 — Minimum drift when the boat is no faster than the current' },
      {
        t: 'p',
        html: 'Axes: <i>x</i> along the current, <i>y</i> straight across. The boat heads upstream of straight-across by angle <i>θ</i>. Its velocity components relative to the ground:<br><i>v</i><sub><i>y</i></sub> = <i>v</i><sub><i>b</i></sub> cos <i>θ</i>,   <i>v</i><sub><i>x</i></sub> = <i>v</i><sub><i>r</i></sub> − <i>v</i><sub><i>b</i></sub> sin <i>θ</i>.',
      },
      {
        t: 'p',
        html: 'For any heading short of straight upstream (<i>θ</i> < 90°) both are positive (with <i>v</i><sub><i>b</i></sub> ≤ <i>v</i><sub><i>r</i></sub> the current cannot be fully cancelled while the boat still makes headway across), so the drift is<br><i>x</i>(<i>θ</i>) = ((<i>v</i><sub><i>r</i></sub> − <i>v</i><sub><i>b</i></sub> sin <i>θ</i>)/(<i>v</i><sub><i>b</i></sub> cos <i>θ</i>)) <i>d</i> = <i>d</i>[(<i>v</i><sub><i>r</i></sub>/<i>v</i><sub><i>b</i></sub>) sec <i>θ</i> − tan <i>θ</i>],<br>where <i>d</i> is the river width. Minimise over <i>θ</i>:<br>d<i>x</i>/d<i>θ</i> = <i>d</i>[(<i>v</i><sub><i>r</i></sub>/<i>v</i><sub><i>b</i></sub>) sec <i>θ</i> tan <i>θ</i> − sec<sup>2</sup> <i>θ</i>] = 0   ⟹   (<i>v</i><sub><i>r</i></sub>/<i>v</i><sub><i>b</i></sub>) sin <i>θ</i> = 1   ⟹   sin <i>θ</i> = <i>v</i><sub><i>b</i></sub>/<i>v</i><sub><i>r</i></sub>.',
      },
      {
        t: 'p',
        html: 'With cos <i>θ</i> = √(<i>v</i><sub><i>r</i></sub><sup>2</sup> − <i>v</i><sub><i>b</i></sub><sup>2</sup>)/<i>v</i><sub><i>r</i></sub>, substitution gives<br><i>t</i><sub>cross</sub> = <i>d v</i><sub><i>r</i></sub>/(<i>v</i><sub><i>b</i></sub>√(<i>v</i><sub><i>r</i></sub><sup>2</sup> − <i>v</i><sub><i>b</i></sub><sup>2</sup>)),   <i>x</i><sub>min</sub> = <i>d</i>√(<i>v</i><sub><i>r</i></sub><sup>2</sup> − <i>v</i><sub><i>b</i></sub><sup>2</sup>)/<i>v</i><sub><i>b</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Limit check.</b> As <i>v</i><sub><i>r</i></sub> → <i>v</i><sub><i>b</i></sub>: <i>θ</i> → 90° (head straight upstream), <i>x</i><sub>min</sub> → 0, but <i>t</i><sub>cross</sub> → ∞. You can hold station against an equal current forever and cross it never — the formula’s two limits disagree beautifully, and both are right. Below the critical heading, more upstream angle buys less drift at a growing price in time.',
      },

      { t: 'part', title: 'Method D.2 — Closest approach without calculus' },
      {
        t: 'p',
        html: 'Body B sits at relative position <i>r⃗</i><sub>0</sub> from A at <i>t</i> = 0; their relative velocity is <i>v⃗</i> (constant). Separation squared:<br><i>s</i><sup>2</sup>(<i>t</i>) = |<i>r⃗</i><sub>0</sub> + <i>v⃗ t</i>|<sup>2</sup> = |<i>r⃗</i><sub>0</sub>|<sup>2</sup> + 2(<i>r⃗</i><sub>0</sub> · <i>v⃗</i>) <i>t</i> + |<i>v⃗</i>|<sup>2</sup><i>t</i><sup>2</sup>.<br>This is a quadratic in <i>t</i> with positive leading coefficient, minimised at<br><i>t</i><sub>∗</sub> = −(<i>r⃗</i><sub>0</sub> · <i>v⃗</i>)/|<i>v⃗</i>|<sup>2</sup>.<br>Substituting back and collecting terms as a perfect square:<br><i>s</i><sub>min</sub><sup>2</sup> = |<i>r⃗</i><sub>0</sub>|<sup>2</sup> − (<i>r⃗</i><sub>0</sub> · <i>v⃗</i>)<sup>2</sup>/|<i>v⃗</i>|<sup>2</sup> = |<i>r⃗</i><sub>0</sub> × <i>v⃗</i>|<sup>2</sup>/|<i>v⃗</i>|<sup>2</sup>,<br>using |<i>r⃗</i><sub>0</sub>|<sup>2</sup>|<i>v⃗</i>|<sup>2</sup> = (<i>r⃗</i><sub>0</sub> · <i>v⃗</i>)<sup>2</sup> + |<i>r⃗</i><sub>0</sub> × <i>v⃗</i>|<sup>2</sup>. Hence<br><i>s</i><sub>min</sub> = |<i>r⃗</i><sub>0</sub> × <i>v⃗</i>|/|<i>v⃗</i>|.',
      },
      {
        t: 'p',
        html: 'That is the perpendicular-distance formula: in A’s frame, B moves along the straight line <i>r⃗</i><sub>0</sub> + <i>v⃗t</i>, and the closest approach is the foot of the perpendicular from the origin onto it. Sign discipline: <i>r⃗</i><sub>0</sub> · <i>v⃗</i> > 0 makes <i>t</i><sub>∗</sub> < 0 — the bodies are separating from the outset and the closest approach is at <i>t</i> = 0 itself.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A river is 96 m wide and flows at 5 m/s. A boat manages 4 m/s in still water. Find the heading that minimises the downstream drift, the minimum drift, and the crossing time.',
        steps: [
          'Since <i>v</i><sub><i>b</i></sub> = 4 < <i>v</i><sub><i>r</i></sub> = 5, zero drift is impossible. Aim upstream of straight-across with<br>sin <i>θ</i> = <i>v</i><sub><i>b</i></sub>/<i>v</i><sub><i>r</i></sub> = 4/5 = 0.8   ⟹   <i>θ</i> = 53°,   cos <i>θ</i> = 0.6.',
          'Across-speed: <i>v</i><sub><i>b</i></sub> cos <i>θ</i> = 2.4 m/s. Crossing time:<br><i>t</i> = 96/2.4 = 40 s.',
          'Minimum drift, by formula or directly as <i>v</i><sub><i>x</i></sub><i>t</i> = (5 − 4 sin 53°)(40):<br><i>x</i><sub>min</sub> = <i>d</i>√(<i>v</i><sub><i>r</i></sub><sup>2</sup> − <i>v</i><sub><i>b</i></sub><sup>2</sup>)/<i>v</i><sub><i>b</i></sub> = 96√(25 − 16)/4 = (96 × 3)/4 = 72 m.',
          'Direct check: <i>v</i><sub><i>x</i></sub> = 5 − (4)(0.8) = 1.8 m/s, and (1.8)(40) = 72 m. The best possible outcome is still 72 m adrift — the current wins, and the art is losing by as little as possible.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Re-derive the answer to Sub-topic 05, Example 4, by the geometric method: ship A at the origin sails due north at 10 km/h; ship B is initially at (20, 0) km and sails due west at 10 km/h. Find the time and distance of closest approach.',
        steps: [
          'Relative velocity of B with respect to A, taking east as <i>î</i> and north as <i>ĵ</i>:<br><i>v⃗</i> = <i>v⃗</i><sub><i>B</i></sub> − <i>v⃗</i><sub><i>A</i></sub> = (−10 <i>î</i> − 10 <i>ĵ</i>) km/h,   |<i>v⃗</i>|<sup>2</sup> = 200 km<sup>2</sup>/h<sup>2</sup>.',
          'Initial relative position: <i>r⃗</i><sub>0</sub> = 20 <i>î</i> km.',
          'Dot product: <i>r⃗</i><sub>0</sub> · <i>v⃗</i> = (20)(−10) + (0)(−10) = −200 km<sup>2</sup>/h, so<br><i>t</i><sub>∗</sub> = −(−200)/200 = 1 h.',
          'Cross product (only the <i>k̂</i> component survives): <i>r⃗</i><sub>0</sub> × <i>v⃗</i> = (20)(−10) <i>k̂</i> = −200 <i>k̂</i> km<sup>2</sup>/h, so<br><i>s</i><sub>min</sub> = |−200|/√200 = 200/(10√2) = 10√2 ≈ 14.1 km.',
          'Both values match the chapter’s calculus route exactly. The geometric route took four lines and no derivatives — and in an examination, the cross product doubles as a built-in error check, because a wrong relative velocity almost never produces a clean cancellation.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A river is 96 m wide, flows at 5 m/s, and a boat manages 4 m/s — but now the boatman simply aims straight across. Find the crossing time and drift, and compare with Example D.1.',
            a: '<i>t</i> = 96/4 = 24 s, drift = 5 × 24 = 120 m — sixteen seconds faster than the minimum-drift heading, but 48 m further adrift; the time-versus-drift trade-off made quantitative.',
          },
          {
            q: 'Rain falls at 10 m/s tilted at 30° to the vertical, drifting horizontally in the same direction a man walks. At what walking speed does the rain appear to fall perfectly vertically on him?',
            a: 'The rain’s horizontal component is 10 sin 30° = 5 m/s; walking at exactly 5 m/s cancels it, leaving a purely vertical relative velocity — the apparent rain is vertical.',
          },
          {
            q: 'Ship P sails north at 8 km/h. Ship Q is initially 30 km due east of P and sails with velocity (−6 <i>î</i> − 8 <i>ĵ</i>) km/h. Find the time and distance of closest approach.',
            a: '<i>v⃗</i><sub>rel</sub> = (−6, −16) km/h, |<i>v⃗</i><sub>rel</sub>|<sup>2</sup> = 292; <i>r⃗</i><sub>0</sub> = (30, 0); <i>r⃗</i><sub>0</sub> · <i>v⃗</i><sub>rel</sub> = −180, so <i>t</i><sub>∗</sub> = 180/292 ≈ 0.616 h ≈ 37 min; <i>s</i><sub>min</sub> = |30 × (−16)|/√292 = 480/17.09 ≈ 28.1 km.',
          },
          {
            q: 'Derive <i>t</i><sub>∗</sub> = −(<i>r⃗</i><sub>0</sub> · <i>v⃗</i>)/|<i>v⃗</i>|<sup>2</sup> by differentiating <i>s</i><sup>2</sup>(<i>t</i>), and state what a negative value of <i>t</i><sub>∗</sub> means physically.',
            a: 'Differentiating <i>s</i><sup>2</sup>(<i>t</i>) = |<i>r⃗</i><sub>0</sub>|<sup>2</sup> + 2(<i>r⃗</i><sub>0</sub> · <i>v⃗</i>)<i>t</i> + |<i>v⃗</i>|<sup>2</sup><i>t</i><sup>2</sup> gives 2(<i>r⃗</i><sub>0</sub> · <i>v⃗</i>) + 2|<i>v⃗</i>|<sup>2</sup><i>t</i> = 0 at the minimum; a negative <i>t</i><sub>∗</sub> means <i>r⃗</i><sub>0</sub> · <i>v⃗</i> > 0, i.e. the bodies are separating from the start and the true closest approach occurred at or before <i>t</i> = 0.',
          },
          {
            q: 'A swimmer can manage 2 m/s in still water; the river flows at 2 m/s. Describe the best possible crossing.',
            a: 'With <i>v</i><sub><i>b</i></sub> = <i>v</i><sub><i>r</i></sub>, the minimum-drift heading is straight upstream (<i>θ</i> = 90°), which crosses in infinite time; any finite crossing requires accepting some drift — formally, <i>x</i><sub>min</sub> = 0 is attainable only in the limit of never arriving.',
          },
        ],
      },
    ],
  },
];
