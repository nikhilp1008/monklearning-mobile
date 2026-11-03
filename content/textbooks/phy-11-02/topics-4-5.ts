import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topics 04 and 05, word for word from the Master Reference book:
 * Sub-topic 04, Relative Velocity (pp. 103 to 110), and Sub-topic 05, Motion
 * with Variable Acceleration (Calculus Methods) (pp. 111 to 118). Figures 2.7
 * (p. 106, drawn on p. 107) and 2.8 (p. 113, drawn on p. 114).
 */
export const TOPICS: Topic[] = [
  {
    n: '04',
    title: 'Relative Velocity',
    kalam:
      'That is the whole idea of relative velocity: velocity is never absolute — it is always measured with respect to some observer, some frame of reference.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A compact but reliable scorer. CBSE Boards ask a 1–2 mark conceptual or short numerical (relative velocity of two trains). JEE Main carries roughly 1 question — usually a pursuit/overtaking problem or two bodies meeting. NEET tests the same-direction-subtract / opposite-direction-add idea as a quick MCQ. JEE Advanced uses relative velocity as a time-saving lens for two-body problems, especially the elegant free-fall result where relative acceleration vanishes. (The 2-D river-boat and rain problems build on this same idea but are taught in Motion in a Plane.)',
      },
      {
        t: 'p',
        html: 'Sit in a moving train and watch a second train on the next track. If both crawl forward at nearly the same speed, the other train seems almost frozen beside you — even though a person on the platform sees both racing past. If the other train moves the opposite way, it appears to whoosh by at a frightening rate. Nothing about either train’s actual motion changed; what changed is <b>who is watching</b>. That is the whole idea of <b>relative velocity</b>: velocity is never absolute — it is always measured with respect to some observer, some <b>frame of reference</b>.<br><br>When we quote a car’s speed as “60 km/h,” we silently mean relative to the ground. The ground is just our default frame. But we are free to ask how fast one object moves <b>as seen from another object</b>, and that is the velocity of one relative to the other. The velocity of A with respect to B — written <i>v⃗</i><sub><i>AB</i></sub> — is what an observer riding on B would measure for A:<br><i>v⃗</i><sub><i>AB</i></sub> = <i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub>.<br>In words: to find how A moves in B’s eyes, subtract B’s velocity from A’s. Because we are in this chapter restricting ourselves to a single straight line, this vector subtraction collapses to ordinary subtraction of signed numbers once a positive direction is fixed.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine two motorcyclists on a long, straight highway. If both ride north at 80 and 80 km/h, each sees the other parked alongside — relative velocity zero. If one rides north at 80 and the other south at 80, each sees the other approaching at 160 km/h. Same individual speeds; wildly different relative speeds. The rule falls out naturally: <b>same direction → subtract</b> (the speeds partly cancel), <b>opposite directions → add</b> (they pile up).',
      },
      {
        t: 'p',
        html: 'Two more ideas complete the picture. First, relative velocity comes in two flavours by what it does to the gap between the bodies: a <b>relative velocity of approach</b> shrinks their separation (they’re closing in), while a <b>relative velocity of separation</b> grows it. Second, just as positions and velocities are relative, so is acceleration: the <b>relative acceleration</b> of A with respect to B is <i>a⃗</i><sub><i>AB</i></sub> = <i>a⃗</i><sub><i>A</i></sub> − <i>a⃗</i><sub><i>B</i></sub>. This yields one of the most beautiful shortcuts in kinematics — if two bodies have the same acceleration (for instance, both in free fall, each accelerating at <i>g</i>), their relative acceleration is <b>zero</b>, so one sees the other moving at a constant relative velocity, no matter how fast both are actually accelerating.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• This treatment is <b>one-dimensional</b> — motion along a common straight line — so direction reduces to + / −. The full vector version (river-boat, rain-umbrella) lives in Motion in a Plane.<br>• <i>v⃗</i><sub><i>AB</i></sub> = −<i>v⃗</i><sub><i>BA</i></sub> always; A’s view of B is the exact opposite of B’s view of A.<br>• Velocities add the simple Galilean way only at everyday speeds (<i>v</i> ≪ <i>c</i>). Near the speed of light this breaks down (relativistic velocity addition) — not in the JEE/NEET syllabus, but worth knowing the rule has a domain.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Relative velocity of A with respect to B',
        main: '<i>v⃗</i><sub><i>AB</i></sub> = <i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub>',
        legend: [],
        note: '(1-D: <i>v</i><sub><i>AB</i></sub> = <i>v</i><sub><i>A</i></sub> − <i>v</i><sub><i>B</i></sub>, with signs.)',
      },
      {
        t: 'formula',
        kicker: 'Antisymmetry',
        main: '<i>v⃗</i><sub><i>AB</i></sub> = −<i>v⃗</i><sub><i>BA</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Same direction',
        main: 'speeds <i>v</i><sub><i>A</i></sub>, <i>v</i><sub><i>B</i></sub>: relative speed = |<i>v</i><sub><i>A</i></sub> − <i>v</i><sub><i>B</i></sub>|',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Opposite directions',
        main: 'speeds <i>v</i><sub><i>A</i></sub>, <i>v</i><sub><i>B</i></sub>: relative speed = <i>v</i><sub><i>A</i></sub> + <i>v</i><sub><i>B</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Relative acceleration',
        main: '<i>a⃗</i><sub><i>AB</i></sub> = <i>a⃗</i><sub><i>A</i></sub> − <i>a⃗</i><sub><i>B</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equations of motion in relative form',
        main: '<i>v</i><sub>rel</sub> = <i>u</i><sub>rel</sub> + <i>a</i><sub>rel</sub><i>t</i><br><i>s</i><sub>rel</sub> = <i>u</i><sub>rel</sub><i>t</i> + ½<i>a</i><sub>rel</sub><i>t</i><sup>2</sup><br><i>v</i><sub>rel</sub><sup>2</sup> = <i>u</i><sub>rel</sub><sup>2</sup> + 2<i>a</i><sub>rel</sub><i>s</i><sub>rel</sub>',
        legend: [
          '<i>u</i><sub>rel</sub> = the initial relative velocity',
          '<i>v</i><sub>rel</sub> = final relative velocity',
          '<i>a</i><sub>rel</sub> = relative acceleration',
          '<i>s</i><sub>rel</sub> = relative displacement (separation)',
        ],
        note: 'valid when relative acceleration is constant',
      },
      {
        t: 'formula',
        kicker: 'Time to meet',
        main: '<i>t</i><sub>meet</sub> = (initial separation)/(relative speed of approach)',
        legend: [],
        note: 'two bodies closing along a line',
      },
      {
        t: 'def',
        term: 'Crossing / overtaking (objects of finite length)',
        html: 'the relevant relative displacement is the <b>sum of the lengths</b> (two trains crossing) or one length (a train passing a point), covered at the relative speed.',
      },
      {
        t: 'p',
        html: 'All quantities SI: velocity m/s, acceleration m/s<sup>2</sup>, separation m, time s. Dimensions are those of ordinary velocity/acceleration: [L T<sup>−1</sup>], [L T<sup>−2</sup>].',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '<b>The logical core — where the relations come from.</b> Let A and B have positions <i>x</i><sub><i>A</i></sub> and <i>x</i><sub><i>B</i></sub> measured in the ground frame. The position of A as seen from B is the separation <i>x</i><sub><i>AB</i></sub> = <i>x</i><sub><i>A</i></sub> − <i>x</i><sub><i>B</i></sub>. Differentiate once with respect to time:<br><i>v</i><sub><i>AB</i></sub> = (d/d<i>t</i>)(<i>x</i><sub><i>A</i></sub> − <i>x</i><sub><i>B</i></sub>) = <i>v</i><sub><i>A</i></sub> − <i>v</i><sub><i>B</i></sub>,<br>and once more:<br><i>a</i><sub><i>AB</i></sub> = (d/d<i>t</i>)(<i>v</i><sub><i>A</i></sub> − <i>v</i><sub><i>B</i></sub>) = <i>a</i><sub><i>A</i></sub> − <i>a</i><sub><i>B</i></sub>.',
      },
      {
        t: 'p',
        html: 'Why this matters: the relative quantities obey the <b>same</b> equations of motion as ordinary ones, because they’re just differences of quantities that each obey those equations. So you may treat B as a stationary “lab” and analyse A’s motion using <i>u</i><sub>rel</sub>, <i>a</i><sub>rel</sub>, <i>s</i><sub>rel</sub> exactly as you’d treat a single particle.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Solving a 1-D relative-velocity problem',
        steps: [
          '<b>Fix a positive direction</b> (say, rightward = +) and write every velocity/acceleration with its correct sign in the ground frame.',
          '<b>Choose the frame</b> you’ll work in — usually the ground, or one of the two bodies. Stick to it.',
          'If working in B’s frame, compute <i>u</i><sub>rel</sub> = <i>v</i><sub><i>A</i></sub> − <i>v</i><sub><i>B</i></sub> and <i>a</i><sub>rel</sub> = <i>a</i><sub><i>A</i></sub> − <i>a</i><sub><i>B</i></sub>.',
          '<b>Translate the question into the relative quantity.</b> “When do they meet?” → relative displacement equals the initial separation. “When are they <i>d</i> apart?” → relative displacement equals ±<i>d</i>.',
          'Apply the relative-form equation, solve, and <b>check signs/roots</b> against the physics (reject negative times, etc.).',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Approach vs separation (sign-free quick method)',
        steps: [
          'Same direction: subtract speeds; opposite directions: add speeds — this gives the magnitude of relative velocity.',
          'Decide approach or separation by asking whether the gap is currently shrinking or growing.',
          'For “time to meet,” divide the initial gap by the relative speed of approach. For overtaking a finite-length object, use the total length that must pass.',
          'Sanity check: a faster follower always eventually catches a slower leader; two bodies moving apart never meet.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two trains run on parallel straight tracks. Train A moves at 72 km/h and train B at 54 km/h. Find the velocity of A relative to B when they move (a) in the same direction and (b) in opposite directions.',
        steps: [
          '<b>Given:</b> <i>v</i><sub><i>A</i></sub> = 72 km/h = 20 m/s, <i>v</i><sub><i>B</i></sub> = 54 km/h = 15 m/s. Take A’s direction of travel as positive.',
          '<b>Solution:</b> (a) Same direction: <i>v</i><sub><i>B</i></sub> = +15 m/s.<br><i>v</i><sub><i>AB</i></sub> = <i>v</i><sub><i>A</i></sub> − <i>v</i><sub><i>B</i></sub> = 20 − 15 = +5 m/s (in A’s direction).',
          '(b) Opposite directions: now <i>v</i><sub><i>B</i></sub> = −15 m/s.<br><i>v</i><sub><i>AB</i></sub> = 20 − (−15) = +35 m/s (in A’s direction).',
          'The opposite-direction case is much larger because the two motions reinforce rather than cancel.',
        ],
        ans: '(a) 5 m/s, (b) 35 m/s',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two cars travel toward each other along a straight road, one at 54 km/h and the other at 36 km/h. The speed of one car relative to the other is:<br>(A) 18 km/h   (B) 45 km/h   (C) 90 km/h   (D) 72 km/h',
        steps: [
          '<b>The trap:</b> the eye sees two speeds and subtracts — 54 − 36 = 18 — but subtraction is the <b>same-direction</b> rule. These cars move toward each other.',
          '<b>Fast solution:</b> Opposite directions → <b>add</b>:<br><i>v</i><sub>rel</sub> = 54 + 36 = 90 km/h.',
          'Speed cue: burn in the one-liner — “<b>same way, subtract; opposite, add.</b>” The instant a problem says toward each other or opposite directions, add the speeds without hesitation. Option (A) is there precisely to catch the reflexive subtractor.',
        ],
        ans: '(C) 90 km/h',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'On a straight road, car A moves at a constant 20 m/s. At the same instant, car B — which is 75 m behind A on the same road — starts at 10 m/s and accelerates uniformly at 2 m/s<sup>2</sup> in the same direction. After how long does B catch A, and how far has B then travelled?',
        steps: [
          '<b>Why it’s multi-concept:</b> it combines relative velocity, relative acceleration, and the equations of motion in one setup.',
          '<b>Solution:</b> Work in <b>A’s frame</b> (A is unaccelerated, so it’s a valid inertial lab). Take the common direction of travel as positive.<br><i>u</i><sub>rel</sub> = <i>v</i><sub><i>B</i></sub> − <i>v</i><sub><i>A</i></sub> = 10 − 20 = −10 m/s,   <i>a</i><sub>rel</sub> = <i>a</i><sub><i>B</i></sub> − <i>a</i><sub><i>A</i></sub> = 2 − 0 = 2 m/s<sup>2</sup>.',
          'B must close the 75 m gap, i.e. achieve a relative displacement of +75 m:<br><i>s</i><sub>rel</sub> = <i>u</i><sub>rel</sub><i>t</i> + ½<i>a</i><sub>rel</sub><i>t</i><sup>2</sup> ⇒ 75 = −10<i>t</i> + <i>t</i><sup>2</sup> ⇒ <i>t</i><sup>2</sup> − 10<i>t</i> − 75 = 0.<br>(<i>t</i> − 15)(<i>t</i> + 5) = 0 ⇒ <i>t</i> = 15 s.',
          'Distance B travels in the ground frame:<br><i>s</i><sub><i>B</i></sub> = (10)(15) + ½(2)(15)<sup>2</sup> = 150 + 225 = 375 m.',
          '(Check: A is 75 + 20 × 15 = 375 m from B’s start — they coincide. ✓) Notice that early on, <i>u</i><sub>rel</sub> being negative means the gap actually widens at first; B only overhauls A once its acceleration has overcome that initial deficit.',
        ],
        ans: '<i>t</i> = 15 s,   <i>s</i><sub><i>B</i></sub> = 375 m',
      },
      {
        t: 'ex',
        fig: 'p11-02-fig-2.7',
        tag: 'JEE Advanced Level',
        q: 'A ball is thrown vertically upward from the ground with 25 m/s. At the very same instant, a second ball is released from rest from a height of 100 m, directly above the first, along the same vertical line. Taking <i>g</i> = 10 m/s<sup>2</sup>, find when and at what height above the ground the two balls meet.',
        steps: [
          '<b>Reasoning — the elegant part:</b> both balls are in free fall, so each accelerates at <i>g</i> downward. Their <b>relative acceleration is zero</b>, which means their relative velocity is constant and the gap closes uniformly — no quadratic needed.',
          '<b>Solution:</b> Take <b>up as positive</b>. In the ground frame, <i>u</i><sub>1</sub> = +25, <i>u</i><sub>2</sub> = 0, and both have <i>a</i> = −<i>g</i>.<br><i>u</i><sub>rel</sub> = <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = 25 − 0 = 25 m/s,   <i>a</i><sub>rel</sub> = (−<i>g</i>) − (−<i>g</i>) = 0.',
          'With zero relative acceleration, the separation of 100 m closes at a steady 25 m/s:<br><i>t</i><sub>meet</sub> = 100/25 = 4 s.',
          'Height of ball 1 above the ground at <i>t</i> = 4 s:<br><i>y</i><sub>1</sub> = <i>u</i><sub>1</sub><i>t</i> − ½<i>gt</i><sup>2</sup> = 25(4) − ½(10)(16) = 100 − 80 = 20 m.',
          '(Check with ball 2: <i>y</i><sub>2</sub> = 100 − ½(10)(16) = 20 m. ✓)',
          'Both balls are still airborne (ball 1’s flight lasts 5 s), so the meeting is genuine. The lesson: spotting <i>a</i><sub>rel</sub> = 0 turned a messy two-body free-fall problem into a one-line division.',
        ],
        ans: '<i>t</i> = 4 s,   at 20 m above the ground',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two cyclists ride directly toward each other on a straight road at 5 m/s and 7 m/s. Find their relative speed of approach.',
            a: '12 m/s',
          },
          {
            q: '[NEET] A boy runs at 3 m/s in the same direction as a bus moving at 12 m/s. Find the boy’s velocity relative to the bus.',
            a: '9 m/s opposite to the bus’s motion (i.e. −9 m/s)',
          },
          {
            q: '[JEE Main] Two cars, 120 m apart on a straight road, move toward each other at 8 m/s and 12 m/s. How long before they meet?',
            a: '6 s',
          },
          {
            q: '[JEE Main] A train 200 m long, moving at 20 m/s, overtakes a man walking at 2 m/s in the same direction along the track. How long does the train take to completely pass him?',
            a: '≈ 11.1 s (200/18)',
          },
          {
            q: '[JEE Advanced] From the top of a 60 m tower a stone is dropped from rest. At the same instant another stone is thrown vertically upward from the ground at 20 m/s along the same line (<i>g</i> = 10 m/s<sup>2</sup>). Find when and at what height they meet.',
            a: '<i>t</i> = 3 s, at 15 m above the ground.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The velocity of a body A relative to body B is correctly written as:',
        opts: [
          {
            label: '<i>v⃗</i><sub><i>A</i></sub> + <i>v⃗</i><sub><i>B</i></sub>',
            nudge: '(A) gives only the magnitude in the special opposite-direction case, not the general definition.',
          },
          { label: '<i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub>', nudge: null },
          {
            label: '<i>v⃗</i><sub><i>B</i></sub> − <i>v⃗</i><sub><i>A</i></sub>',
            nudge: '(C) is the velocity of B relative to A (<i>v⃗</i><sub><i>BA</i></sub>) — the exact negative, a sign trap.',
          },
          {
            label: '½(<i>v⃗</i><sub><i>A</i></sub> + <i>v⃗</i><sub><i>B</i></sub>)',
            nudge: '(D) is an average, which has no meaning here.',
          },
        ],
        correct: 1,
        solution: 'By definition <i>v⃗</i><sub><i>AB</i></sub> = <i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub>.',
      },
      {
        t: 'mcq',
        q: 'Two particles move along the same straight line in opposite directions with speeds <i>v</i><sub>1</sub> and <i>v</i><sub>2</sub>. The magnitude of their relative velocity is:',
        opts: [
          {
            label: '|<i>v</i><sub>1</sub> − <i>v</i><sub>2</sub>|',
            nudge: '(A) is the <b>same-direction</b> result — picked by students who memorise “subtract” without checking direction.',
          },
          { label: '<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>', nudge: null },
          {
            label: '½(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>)',
            nudge: '(C) and (D) have no physical basis here; (D) would require equal velocities in the same direction.',
          },
          {
            label: 'zero',
            nudge: '(C) and (D) have no physical basis here; (D) would require equal velocities in the same direction.',
          },
        ],
        correct: 1,
        solution: 'Opposite directions add: relative speed = <i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>.',
      },
      {
        t: 'mcq',
        q: 'Two stones are dropped from rest from the top of a tall tower, the second released a short moment after the first. As both fall, the distance between them:',
        opts: [
          {
            label: 'remains constant',
            nudge: '(A) is the seductive trap: “same acceleration must mean a fixed gap.” Same acceleration fixes the relative velocity, not the separation — the gap widens at a constant rate.',
          },
          { label: 'increases', nudge: null },
          {
            label: 'decreases',
            nudge: '(C) and (D) contradict the steadily increasing separation between the stones.',
          },
          {
            label: 'first increases, then decreases',
            nudge: '(C) and (D) contradict the steadily increasing separation between the stones.',
          },
        ],
        correct: 1,
        solution: 'Both fall with the same acceleration <i>g</i>, so <i>a</i><sub>rel</sub> = 0; but the first stone is always faster (it had a head start), giving a constant non-zero relative velocity. A constant relative velocity makes the separation grow <b>steadily</b>.',
      },
      {
        t: 'mcq',
        q: 'Two trains, each 100 m long, travel toward each other on parallel tracks at 15 m/s and 25 m/s. The time taken for them to completely cross each other is:',
        opts: [
          { label: '5 s', nudge: null },
          { label: '10 s', nudge: '(B) 10 s is 100/10, one length over the speed difference;' },
          { label: '2.5 s', nudge: '(C) 2.5 s is 100/40, one length only;' },
          { label: '8 s', nudge: '(D) 8 s is 200/25, faster train only.' },
        ],
        correct: 0,
        solution: 'Relative speed (opposite directions) = 15 + 25 = 40 m/s. To fully cross, the trains’ fronts-to-tails must sweep the <b>sum of the lengths</b>, 100 + 100 = 200 m. Time = 200/40 = 5 s. The distractors miss the key point: crossing needs the total length to pass.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding when you should subtract (and vice-versa).</b> Same direction → subtract; opposite → add. The fix is to assign +/− signs in the ground frame before combining, so the rule takes care of itself.',
          '<b>Confusing <i>v⃗</i><sub><i>AB</i></sub> with <i>v⃗</i><sub><i>BA</i></sub>.</b> They’re equal in size but opposite in sign. State clearly which body is the “observer.”',
          '<b>Treating a crossing as a point event.</b> Overtaking or crossing a finite-length object requires the whole length (or sum of lengths) to pass at the relative speed, not just a single meeting point.',
          '<b>“Same acceleration ⇒ constant gap.”</b> False. Equal accelerations make the relative velocity constant; the separation then changes linearly, not stays fixed.',
          '<b>Mixing frames mid-solution.</b> Switching between the ground frame and a moving body’s frame partway through scrambles the signs.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Commit to <b>one frame</b> for the whole problem — usually the ground, or a non-accelerating body treated as a stationary lab. The single most powerful shortcut: for two bodies in free fall, <i>a</i><sub>rel</sub> = 0, so they drift apart or together at a constant relative velocity — time to meet is just (initial separation) ÷ (relative speed of approach), no quadratic required. Reach for that whenever two projectiles share gravity as their only acceleration.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: '<i>v⃗</i><sub><i>AB</i></sub> = <i>v⃗</i><sub><i>A</i></sub> − <i>v⃗</i><sub><i>B</i></sub> (velocity of A as seen from B); and <i>v⃗</i><sub><i>AB</i></sub> = −<i>v⃗</i><sub><i>BA</i></sub>.',
          },
          { f: 'Same direction → subtract speeds; opposite direction → add speeds.', note: '' },
          {
            f: 'Relative acceleration',
            note: '<i>a⃗</i><sub><i>AB</i></sub> = <i>a⃗</i><sub><i>A</i></sub> − <i>a⃗</i><sub><i>B</i></sub>. Two free-falling bodies ⇒ <i>a</i><sub>rel</sub> = 0 ⇒ constant relative velocity.',
          },
          {
            f: 'Relative-form equations',
            note: '<i>v</i><sub>rel</sub> = <i>u</i><sub>rel</sub> + <i>a</i><sub>rel</sub><i>t</i>,   <i>s</i><sub>rel</sub> = <i>u</i><sub>rel</sub><i>t</i> + ½<i>a</i><sub>rel</sub><i>t</i><sup>2</sup>.',
          },
          { f: 'Time to meet = (initial separation)/(relative speed of approach).', note: '' },
          { f: 'Crossing two trains', note: 'distance = sum of lengths, at the relative speed.' },
        ],
        aids: ['Mnemonic: <b>“Same way, subtract; opposite, add.”</b>'],
      },
    ],
  },

  {
    n: '05',
    title: 'Motion with Variable Acceleration (Calculus Methods)',
    kalam:
      'So the entire strategy reduces to a single question you ask at the start of every problem: what does the acceleration depend on?',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Exam Relevance: This is where kinematics grows up. CBSE Boards occasionally ask a 2–3 mark numerical with acceleration given as a function of time (integrate to get velocity and position). JEE Main reliably carries 1 question built on a variable acceleration — usually <i>a</i> as a function of velocity or position, where the three constant-<i>a</i> equations silently fail. NEET sets the occasional “<i>v</i> given as a function of <i>x</i>, find <i>a</i>” trap. JEE Advanced loves this slice: resistive forces (<i>a</i> ∝ −<i>v</i> or −<i>v</i><sup>2</sup>), position-dependent acceleration, and problems that hinge on choosing the right calculus relation. The single skill that unlocks all of it is knowing which form of acceleration to use — d<i>v</i>/d<i>t</i> or <i>v</i> d<i>v</i>/d<i>x</i> — for the data you are given.',
      },
      {
        t: 'p',
        html: 'The three equations of motion you met in Sub-topic 03 are a beautiful shortcut — but read the fine print stamped on them: constant acceleration only. The instant acceleration changes with time, with speed, or with position, those equations stop being laws and become traps. Real motion is full of changing acceleration: a parachutist meets more air drag the faster she falls, a charged particle feels a force that grows as it nears a plate, a rocket’s acceleration climbs as it burns fuel and lightens. To handle any of these you must return to the two definitions that are always true — <i>v</i> = d<i>x</i>/d<i>t</i> and <i>a</i> = d<i>v</i>/d<i>t</i> — and use the calculus they contain.<br><br>Recall the ladder from the graphs sub-topic: differentiation steps you down the chain (<i>x</i> → <i>v</i> → <i>a</i>), and integration carries you back up (<i>a</i> → <i>v</i> → <i>x</i>). With constant acceleration, climbing that ladder gave the three tidy equations. With variable acceleration, you climb the very same ladder — you just have to do the integral honestly instead of reading off a formula. Nothing new in spirit; only the arithmetic is heavier.',
      },
      {
        t: 'p',
        html: 'Here is the one genuinely new idea, and it is a small masterpiece. Sometimes acceleration is handed to you as a function of position, not time — say <i>a</i> grows with <i>x</i>. You cannot integrate <i>a</i> d<i>t</i> because you do not know <i>a</i> as a function of <i>t</i>. The escape is a chain-rule trick: write <i>a</i> = d<i>v</i>/d<i>t</i> = d<i>v</i>/d<i>x</i> · d<i>x</i>/d<i>t</i> = <i>v</i> d<i>v</i>/d<i>x</i>. That single rewrite, <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>, converts a position-dependent acceleration into something you can integrate against <i>x</i>. It is the master key of this whole sub-topic.',
      },
      {
        t: 'p',
        html: 'Think about it this way… Remember the disciplined auto-rickshaw driver from Sub-topic 03, pressing the accelerator by exactly the same amount the whole way? The three equations described him. This sub-topic is about the erratic driver — easing off, flooring it, braking, speeding up again. His motion is still perfectly governed by physics; it is just that the rule changes moment to moment, so we must track it with calculus rather than a one-line formula. The good news: once you can read off whether the changing acceleration depends on <i>t</i>, <i>v</i>, or <i>x</i>, the right tool snaps into place almost automatically.',
      },
      {
        t: 'p',
        html: 'A velocity-dependent acceleration also explains one of the most familiar facts of everyday physics: <b>terminal velocity</b>. A raindrop or a skydiver falls under gravity but meets air drag that grows with speed, so the net acceleration is something like <i>a</i> = <i>g</i> − <i>kv</i>. As speed rises, the drag term climbs until it exactly cancels gravity; at that point <i>a</i> = 0 and the speed stops increasing. Setting <i>a</i> = 0 gives the terminal speed <i>v</i><sub>term</sub> = <i>g</i>/<i>k</i> — the steady value the body coasts at. You did not need to solve the full motion to read off this limiting speed; you just asked “when does the velocity-dependent acceleration vanish?” That is the kind of physical insight a calculus treatment of <i>a</i> = <i>f</i>(<i>v</i>) unlocks.<br><br>So the entire strategy reduces to a single question you ask at the start of every problem: <b>what does the acceleration depend on?</b> If it depends on time, integrate with respect to time. If it depends on velocity, you may integrate against time or position depending on what is asked. If it depends on position, reach for <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>. Diagnose first; integrate second.',
      },
      {
        t: 'p',
        html: 'Limiting conditions & assumptions.<br>• The three equations of motion (<i>v</i> = <i>u</i> + <i>at</i>, etc.) are <b>forbidden</b> here whenever <i>a</i> is not constant. Using them is the cardinal sin of this sub-topic.<br>• The definitions <i>v</i> = d<i>x</i>/d<i>t</i>, <i>a</i> = d<i>v</i>/d<i>t</i> = <i>v</i> d<i>v</i>/d<i>x</i> hold for all one-dimensional motion, uniform or not — they are the safe ground.<br>• Every integration produces a constant; you must fix it from an initial condition (<i>v</i><sub>0</sub>, <i>x</i><sub>0</sub>, or a stated value of <i>v</i> at some <i>x</i>). Forgetting the constant is the second most common error.<br>• This is still one-dimensional motion; a sign (+/−) carries the direction, so choose a positive direction first.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'The always-true definitions',
        main: '<i>v</i> = d<i>x</i>/d<i>t</i><br><i>a</i> = d<i>v</i>/d<i>t</i> = d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The master chain-rule relation',
        main: '<i>a</i> = d<i>v</i>/d<i>t</i> = d<i>v</i>/d<i>x</i> · d<i>x</i>/d<i>t</i> = <i>v</i> d<i>v</i>/d<i>x</i>',
        legend: [],
        note: 'use when <i>a</i> depends on <i>x</i> or <i>v</i>',
      },
      {
        t: 'p',
        html: '<b>The three integration templates</b> — chosen by what the acceleration depends on:',
      },
      {
        t: 'formula',
        kicker: 'Case 1 — acceleration depends on time, a = f(t)',
        main: 'Integrate directly with respect to time:<br><i>v</i> = <i>v</i><sub>0</sub> + ∫<sub>0</sub><sup><i>t</i></sup> <i>f</i>(<i>t</i>) d<i>t</i><br><i>x</i> = <i>x</i><sub>0</sub> + ∫<sub>0</sub><sup><i>t</i></sup> <i>v</i> d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Case 2 — acceleration depends on velocity, a = f(v)',
        main: 'Pick the pairing by what you want:<br>want <i>v</i>(<i>t</i>): ∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i></sup> d<i>v</i>/<i>f</i>(<i>v</i>) = ∫<sub>0</sub><sup><i>t</i></sup> d<i>t</i><br>want <i>v</i>(<i>x</i>): ∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i></sup> <i>v</i> d<i>v</i>/<i>f</i>(<i>v</i>) = ∫<sub><i>x</i><sub>0</sub></sub><sup><i>x</i></sup> d<i>x</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Case 3 — acceleration depends on position, a = f(x)',
        main: 'Use <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i> and separate:<br>∫<sub><i>v</i><sub>0</sub></sub><sup><i>v</i></sup> <i>v</i> d<i>v</i> = ∫<sub><i>x</i><sub>0</sub></sub><sup><i>x</i></sup> <i>f</i>(<i>x</i>) d<i>x</i> ⟹ (<i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup>)/2 = ∫<sub><i>x</i><sub>0</sub></sub><sup><i>x</i></sup> <i>f</i>(<i>x</i>) d<i>x</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Consistency check.</b> Putting <i>f</i>(<i>x</i>) = <i>a</i> = const in Case 3 gives (<i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup>)/2 = <i>a</i>(<i>x</i> − <i>x</i><sub>0</sub>), i.e. <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i> — the familiar third equation of motion is just the constant-acceleration special case of <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i>.',
      },
      {
        t: 'p',
        html: '<b>Going the other way (differentiation).</b> If position is given as <i>x</i>(<i>t</i>), then <i>v</i>(<i>t</i>) = d<i>x</i>/d<i>t</i> and <i>a</i>(<i>t</i>) = d<i>v</i>/d<i>t</i> — no integration, just differentiate. If <i>v</i> is given as a function of <i>x</i>, the acceleration is <b>not</b> d<i>v</i>/d<i>x</i> but <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>.',
      },
      {
        t: 'p',
        html: 'All quantities are SI: <i>x</i> in m, <i>v</i> in m s<sup>−1</sup>, <i>a</i> in m s<sup>−2</sup>, with dimensions [L T<sup>−1</sup>] and [L T<sup>−2</sup>].',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '<b>The logic behind <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>.</b> Acceleration is by definition d<i>v</i>/d<i>t</i>. But velocity may be known as a function of position rather than time. By the chain rule, d<i>v</i>/d<i>t</i> = d<i>v</i>/d<i>x</i> · d<i>x</i>/d<i>t</i>, and since d<i>x</i>/d<i>t</i> = <i>v</i>, this becomes <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>. Why it matters: it lets you relate velocity and position <b>without ever solving for time</b> — exactly what stopping-distance and energy-like problems need.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Going down the ladder (given x(t))',
        steps: [
          'Differentiate once: <i>v</i>(<i>t</i>) = d<i>x</i>/d<i>t</i>.',
          'Differentiate again: <i>a</i>(<i>t</i>) = d<i>v</i>/d<i>t</i>.',
          'Answer the question — “at rest” means <i>v</i> = 0; “acceleration zero” means <i>a</i> = 0; substitute the relevant instant.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Acceleration depends on time, a = f(t)',
        steps: [
          'Integrate <i>a</i> with respect to <i>t</i> and add <i>v</i><sub>0</sub>: <i>v</i>(<i>t</i>) = <i>v</i><sub>0</sub> + ∫<sub>0</sub><sup><i>t</i></sup> <i>f</i>(<i>t</i>) d<i>t</i>.',
          'Integrate <i>v</i> with respect to <i>t</i> and add <i>x</i><sub>0</sub>: <i>x</i>(<i>t</i>) = <i>x</i><sub>0</sub> + ∫<sub>0</sub><sup><i>t</i></sup> <i>v</i> d<i>t</i>.',
          'Anchor both constants from the initial conditions before substituting.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — Acceleration depends on velocity, a = f(v)',
        steps: [
          'Decide what the question wants. Time involved? Use d<i>v</i>/d<i>t</i> = <i>f</i>(<i>v</i>), so ∫ d<i>v</i>/<i>f</i>(<i>v</i>) = ∫ d<i>t</i>.',
          'Position/distance involved (no time)? Use <i>v</i> d<i>v</i>/d<i>x</i> = <i>f</i>(<i>v</i>), so ∫ <i>v</i> d<i>v</i>/<i>f</i>(<i>v</i>) = ∫ d<i>x</i>.',
          'Apply limits and solve. Why the choice matters: picking the wrong pairing forces an integral you cannot evaluate.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure D — Acceleration depends on position, a = f(x)',
        steps: [
          'Write <i>v</i> d<i>v</i> = <i>f</i>(<i>x</i>) d<i>x</i> (the chain-rule relation rearranged).',
          'Integrate both sides with limits: (<i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup>)/2 = ∫<sub><i>x</i><sub>0</sub></sub><sup><i>x</i></sup> <i>f</i>(<i>x</i>) d<i>x</i>.',
          'Solve for <i>v</i> as a function of <i>x</i>; if you then need time, integrate d<i>x</i>/<i>v</i>(<i>x</i>) = d<i>t</i>.',
        ],
      },
      { t: 'fig', id: 'p11-02-fig-2.8' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A particle starts from rest at the origin. Its acceleration varies with time as <i>a</i> = 4<i>t</i> m s<sup>−2</sup>. Find its velocity and displacement at <i>t</i> = 3 s.',
        steps: [
          '<b>Given:</b> <i>v</i><sub>0</sub> = 0, <i>x</i><sub>0</sub> = 0, <i>a</i> = 4<i>t</i> (acceleration depends on time ⇒ Case 1).',
          '<b>Solution:</b> Integrate the acceleration for velocity:<br><i>v</i> = <i>v</i><sub>0</sub> + ∫<sub>0</sub><sup><i>t</i></sup> 4<i>t</i> d<i>t</i> = 0 + 2<i>t</i><sup>2</sup> ⇒ <i>v</i>(3) = 2(3)<sup>2</sup> = 18 m s<sup>−1</sup>.',
          'Integrate the velocity for displacement:<br><i>x</i> = <i>x</i><sub>0</sub> + ∫<sub>0</sub><sup><i>t</i></sup> 2<i>t</i><sup>2</sup> d<i>t</i> = (2/3)<i>t</i><sup>3</sup> ⇒ <i>x</i>(3) = (2/3)(27) = 18 m.',
          'Note we could <b>not</b> have used <i>v</i> = <i>u</i> + <i>at</i>, because <i>a</i> is not constant — integration is the only honest route.',
        ],
        ans: '<i>v</i>(3) = 18 m s<sup>−1</sup>,   <i>x</i>(3) = 18 m',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A particle moves along the <i>x</i>-axis so that its velocity depends on position as <i>v</i> = 4√<i>x</i> (SI units). Its acceleration is:<br>(A) not constant, growing with <i>x</i>   (B) 8 m s<sup>−2</sup>, constant   (C) 4 m s<sup>−2</sup>   (D) 2 m s<sup>−2</sup>',
        steps: [
          '<b>The trap:</b> seeing <i>v</i> = 4√<i>x</i>, the hasty student writes <i>a</i> = d<i>v</i>/d<i>x</i> = 2/√<i>x</i> and concludes the acceleration depends on <i>x</i>. But d<i>v</i>/d<i>x</i> is <b>not</b> acceleration — the correct relation is <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>.',
          '<b>Fast solution:</b><br><i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i> = (4√<i>x</i>) · (4/(2√<i>x</i>)) = (4√<i>x</i>) · 2/√<i>x</i> = 8 m s<sup>−2</sup>.',
          '<b>Speed cue:</b> whenever <i>v</i><sup>2</sup> is linear in <i>x</i> (here <i>v</i><sup>2</sup> = 16<i>x</i>), the acceleration is constant — because <i>v</i> d<i>v</i>/d<i>x</i> = ½ d(<i>v</i><sup>2</sup>)/d<i>x</i>, half the slope of the <i>v</i><sup>2</sup>-vs-<i>x</i> line. Option (A) is the trap for anyone who forgets the factor of <i>v</i>.',
        ],
        ans: '(B) 8 m s<sup>−2</sup>, constant',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A particle starts from rest at <i>x</i> = 1 m and moves along the <i>x</i>-axis with a position-dependent acceleration <i>a</i> = 4<i>x</i> m s<sup>−2</sup>. Find its speed as it passes <i>x</i> = 3 m.',
        steps: [
          '<b>Why it’s multi-concept:</b> acceleration depends on position, so the constant-<i>a</i> equations are useless; you must deploy <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i>.',
          '<b>Solution:</b> With <i>v</i><sub>0</sub> = 0 at <i>x</i><sub>0</sub> = 1, apply Case 3:<br>∫<sub>0</sub><sup><i>v</i></sup> <i>v</i> d<i>v</i> = ∫<sub>1</sub><sup>3</sup> 4<i>x</i> d<i>x</i> ⇒ <i>v</i><sup>2</sup>/2 = [2<i>x</i><sup>2</sup>]<sub>1</sub><sup>3</sup> = 2(9) − 2(1) = 16.<br><i>v</i><sup>2</sup> = 32 ⇒ <i>v</i> = √32 ≈ 5.66 m s<sup>−1</sup>.',
          'The whole problem turned on recognising “<i>a</i> depends on <i>x</i>” and reaching for <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i> instead of a forbidden formula.',
        ],
        ans: '<i>v</i> ≈ 5.66 m s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle is projected along the <i>x</i>-axis with initial velocity <i>u</i>. It experiences a resistive acceleration <i>a</i> = −<i>kv</i><sup>2</sup> (with <i>k</i> > 0 constant). Find its velocity (a) as a function of distance <i>x</i> travelled, and (b) as a function of time <i>t</i>.',
        steps: [
          '<b>Reasoning — the elegant part:</b> acceleration depends on velocity, so this is Case 2 — and the two parts demand the two different pairings. Distance wants <i>v</i> d<i>v</i>/d<i>x</i>; time wants d<i>v</i>/d<i>t</i>.',
          '<b>Solution:</b> (a) Velocity vs distance. Use <i>v</i> d<i>v</i>/d<i>x</i> = −<i>kv</i><sup>2</sup>:<br>d<i>v</i>/<i>v</i> = −<i>k</i> d<i>x</i> ⇒ ∫<sub><i>u</i></sub><sup><i>v</i></sup> d<i>v</i>/<i>v</i> = −<i>k</i> ∫<sub>0</sub><sup><i>x</i></sup> d<i>x</i> ⇒ ln(<i>v</i>/<i>u</i>) = −<i>kx</i>.',
          '(b) Velocity vs time. Use d<i>v</i>/d<i>t</i> = −<i>kv</i><sup>2</sup>:<br>−d<i>v</i>/<i>v</i><sup>2</sup> = <i>k</i> d<i>t</i> ⇒ ∫<sub><i>u</i></sub><sup><i>v</i></sup> −d<i>v</i>/<i>v</i><sup>2</sup> = <i>k</i> ∫<sub>0</sub><sup><i>t</i></sup> d<i>t</i> ⇒ 1/<i>v</i> − 1/<i>u</i> = <i>kt</i>.',
          'Why this is “Advanced”: the same physical law gives two genuinely different-looking answers, and the only way to get each is to pair the acceleration with the right variable. Velocity falls exponentially with distance but only reciprocally (hyperbolically) with time — a distinction that surprises students and is a favourite Advanced discriminator.',
        ],
        ans: '(a) <i>v</i> = <i>u</i> <i>e</i><sup>−<i>kx</i></sup>;   (b) <i>v</i> = <i>u</i>/(1 + <i>ukt</i>)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A particle starts with velocity 2 m s<sup>−1</sup> at the origin and has acceleration <i>a</i> = 6<i>t</i> m s<sup>−2</sup>. Find its velocity and position at <i>t</i> = 2 s.',
            a: '<i>v</i> = 2 + 3<i>t</i><sup>2</sup>, so <i>v</i>(2) = 14 m s<sup>−1</sup>; <i>x</i> = 2<i>t</i> + <i>t</i><sup>3</sup>, so <i>x</i>(2) = 12 m.',
          },
          {
            q: '[NEET] A particle moves so that <i>v</i> = 3<i>x</i> (SI units). Find its acceleration at <i>x</i> = 2 m.',
            a: '<i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i> = 3<i>x</i> · 3 = 9<i>x</i> = 18 m s<sup>−2</sup>.',
          },
          {
            q: '[JEE Main] A particle starts from rest at <i>x</i> = 2 m with acceleration <i>a</i> = 2<i>x</i> m s<sup>−2</sup>. Find its speed at <i>x</i> = 4 m.',
            a: '<i>v</i><sup>2</sup>/2 = ∫<sub>2</sub><sup>4</sup> 2<i>x</i> d<i>x</i> = 12 ⇒ <i>v</i> = √24 ≈ 4.90 m s<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] A body moving at 12 m s<sup>−1</sup> decelerates with <i>a</i> = −3<i>v</i> (SI units). Find the total distance it travels before (effectively) stopping.',
            a: '<i>v</i> d<i>v</i>/d<i>x</i> = −3<i>v</i> ⇒ d<i>v</i> = −3 d<i>x</i> ⇒ <i>v</i> = 12 − 3<i>x</i>; <i>v</i> = 0 at <i>x</i> = 4 m.',
          },
          {
            q: '[JEE Advanced] A particle of initial velocity <i>u</i> has acceleration <i>a</i> = −<i>kv</i> (with <i>k</i> > 0). Find (a) its velocity as a function of time and (b) the total distance it covers before stopping.',
            a: '(a) <i>v</i> = <i>u</i> <i>e</i><sup>−<i>kt</i></sup>; (b) <i>v</i> d<i>v</i>/d<i>x</i> = −<i>kv</i> ⇒ d<i>v</i> = −<i>k</i> d<i>x</i> ⇒ distance = <i>u</i>/<i>k</i>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'When the acceleration of a particle is given as a function of its position, <i>a</i> = <i>f</i>(<i>x</i>), the most efficient relation to find velocity is:',
        opts: [
          {
            label: '<i>a</i> = d<i>v</i>/d<i>t</i>',
            nudge: '(A) is true but useless here — you cannot integrate <i>f</i>(<i>x</i>) d<i>t</i> without knowing <i>x</i>(<i>t</i>).',
          },
          { label: '<i>v</i> = d<i>x</i>/d<i>t</i>', nudge: '(B) is just the definition of velocity.' },
          { label: '<i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>', nudge: null },
          { label: '<i>v</i> = <i>u</i> + <i>at</i>', nudge: '(D) is forbidden: <i>a</i> is not constant.' },
        ],
        correct: 2,
        solution: 'With <i>a</i> known as a function of <i>x</i>, <i>v</i> d<i>v</i> = <i>f</i>(<i>x</i>) d<i>x</i> integrates directly in the <i>x</i>-variable.',
      },
      {
        t: 'mcq',
        q: 'A particle’s velocity varies with position as <i>v</i> = <i>c</i>√<i>x</i> for a constant <i>c</i>. Its acceleration is:',
        opts: [
          { label: 'zero', nudge: '(A) ignores the motion entirely.' },
          { label: 'constant', nudge: null },
          {
            label: 'proportional to <i>x</i>',
            nudge: '(C) and (D) come from mistaking d<i>v</i>/d<i>x</i> for acceleration.',
          },
          {
            label: 'proportional to √<i>x</i>',
            nudge: '(C) and (D) come from mistaking d<i>v</i>/d<i>x</i> for acceleration.',
          },
        ],
        correct: 1,
        solution: '<i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i> = <i>c</i>√<i>x</i> · <i>c</i>/(2√<i>x</i>) = <i>c</i><sup>2</sup>/2, a constant. This <i>v</i> ∝ √<i>x</i> pattern is exactly uniformly accelerated motion from rest.',
      },
      {
        t: 'mcq',
        q: 'For motion with a time-dependent acceleration <i>a</i> = <i>f</i>(<i>t</i>), the change in velocity over [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>] equals:',
        opts: [
          {
            label: '<i>f</i>(<i>t</i><sub>2</sub>) − <i>f</i>(<i>t</i><sub>1</sub>)',
            nudge: '(A) wrongly subtracts acceleration values.',
          },
          { label: '∫<sub><i>t</i><sub>1</sub></sub><sup><i>t</i>₂</sup> <i>f</i>(<i>t</i>) d<i>t</i>', nudge: null },
          {
            label: '<i>f</i>(<i>t</i>) (<i>t</i><sub>2</sub> − <i>t</i><sub>1</sub>)',
            nudge: '(C) assumes constant acceleration.',
          },
          {
            label: 'the slope of the <i>a</i>–<i>t</i> graph',
            nudge: '(D) confuses area (the integral) with slope (the derivative).',
          },
        ],
        correct: 1,
        solution: 'Change in velocity is the area under the <i>a</i>–<i>t</i> graph, i.e. the integral of <i>a</i> over time.',
      },
      {
        t: 'mcq',
        q: 'A particle moves with <i>x</i>(<i>t</i>) = <i>t</i><sup>3</sup> − 6<i>t</i><sup>2</sup> + 9<i>t</i> (SI). The magnitude of its acceleration at the instant it is momentarily at rest for the second time is:',
        opts: [
          { label: '6 m s<sup>−2</sup>', nudge: null },
          { label: '12 m s<sup>−2</sup>', nudge: '(B) is |<i>a</i>| at <i>t</i> = 0 wrongly read;' },
          { label: '0', nudge: '(C) assumes “at rest” forces <i>a</i> = 0 — false;' },
          { label: '3 m s<sup>−2</sup>', nudge: '(D) is the bare coefficient.' },
        ],
        correct: 0,
        solution: '<i>v</i> = 3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3), zero at <i>t</i> = 1 and <i>t</i> = 3 s; the second is <i>t</i> = 3 s. Then <i>a</i> = 6<i>t</i> − 12, so <i>a</i>(3) = 6 m s<sup>−2</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using the three equations of motion when <i>a</i> is not constant.</b> This is the defining error of the sub-topic. The moment <i>a</i> depends on <i>t</i>, <i>v</i>, or <i>x</i>, those formulas are invalid — integrate from the definitions instead.',
          '<b>Mistaking d<i>v</i>/d<i>x</i> for acceleration.</b> When <i>v</i> is given as a function of <i>x</i>, the acceleration is <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>, never just d<i>v</i>/d<i>x</i>. Forgetting the factor of <i>v</i> is the most common single slip here.',
          '<b>Choosing the wrong pairing for <i>a</i> = <i>f</i>(<i>v</i>).</b> If the question mentions time, pair with d<i>v</i>/d<i>t</i>; if it mentions distance or position, pair with <i>v</i> d<i>v</i>/d<i>x</i>. Pick wrong and you face an unsolvable integral.',
          '<b>Dropping the constant of integration.</b> Every indefinite integral needs an initial condition (<i>v</i><sub>0</sub>, <i>x</i><sub>0</sub>, or a stated <i>v</i>-at-<i>x</i>) to pin it down. Use definite integrals with proper limits to sidestep this entirely.',
        ],
      },
      {
        t: 'protip',
        html: 'Pro-Tip: Open every problem with one diagnosis — “<b>does <i>a</i> depend on <i>t</i>, <i>v</i>, or <i>x</i>?</b>” — and the correct relation follows immediately: <i>t</i> ⇒ integrate <i>a</i> d<i>t</i>; <i>v</i> with time ⇒ ∫ d<i>v</i>/<i>f</i>(<i>v</i>) = ∫ d<i>t</i>; <i>v</i> or <i>x</i> without time ⇒ <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i>. A second habit pays off constantly: <i>v</i> d<i>v</i>/d<i>x</i> = ½ d(<i>v</i><sup>2</sup>)/d<i>x</i>, so whenever you see acceleration in terms of <i>x</i>, think in <i>v</i><sup>2</sup> — it linearises stopping-distance and “speed-at-a-point” problems in one stroke.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Always true',
            note: '<i>v</i> = d<i>x</i>/d<i>t</i>,  <i>a</i> = d<i>v</i>/d<i>t</i> = d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> = <i>v</i> d<i>v</i>/d<i>x</i>.',
          },
          {
            f: 'Master key',
            note: '<i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i> — use it whenever <i>a</i> or <i>v</i> is a function of position (relates <i>v</i> and <i>x</i> with no time).',
          },
          {
            f: '<i>a</i> = <i>f</i>(<i>t</i>)',
            note: '<i>v</i> = <i>v</i><sub>0</sub> + ∫ <i>a</i> d<i>t</i>, then <i>x</i> = <i>x</i><sub>0</sub> + ∫ <i>v</i> d<i>t</i>.',
          },
          {
            f: '<i>a</i> = <i>f</i>(<i>v</i>)',
            note: 'want <i>v</i>(<i>t</i>) → ∫ d<i>v</i>/<i>f</i>(<i>v</i>) = ∫ d<i>t</i>; want <i>v</i>(<i>x</i>) → ∫ <i>v</i> d<i>v</i>/<i>f</i>(<i>v</i>) = ∫ d<i>x</i>.',
          },
          {
            f: '<i>a</i> = <i>f</i>(<i>x</i>)',
            note: '<i>v</i> d<i>v</i> = <i>f</i>(<i>x</i>) d<i>x</i>, so (<i>v</i><sup>2</sup> − <i>v</i><sub>0</sub><sup>2</sup>)/2 = ∫ <i>f</i>(<i>x</i>) d<i>x</i>.',
          },
          {
            f: 'Consistency',
            note: 'constant <i>a</i> in <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i> gives back <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> + 2<i>as</i>.',
          },
          {
            f: '<i>v</i> given as <i>v</i>(<i>x</i>)',
            note: 'acceleration is <i>a</i> = <i>v</i> d<i>v</i>/d<i>x</i>, <b>not</b> d<i>v</i>/d<i>x</i>.',
          },
          { f: 'Constants', note: 'every integration needs an initial condition; prefer definite integrals with limits.' },
        ],
        aids: [
          '<b>Mnemonic:</b> “Diagnose the dependence (<i>t</i>, <i>v</i>, or <i>x</i>), then integrate. Position-dependent? <i>v</i> d<i>v</i> = <i>a</i> d<i>x</i>.”',
        ],
      },
    ],
  },
];
