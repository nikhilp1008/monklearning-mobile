import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4's four Additional Topics, word for word from the Master Reference
 * book, pages 269 to 281: the addenda's shared opening (p. 269, set at the
 * head of Addendum A), A Constraint Relations Beyond the Single Pulley
 * (pp. 269 to 272), B Stacked Blocks: When Does Friction Say “Together”?
 * (pp. 272 to 275), C The Complete Force Budget on a Rough Incline (pp. 275 to
 * 278) and D Chains and Rockets: Variable Mass Done Exactly (pp. 278 to 281),
 * with the book's closing note (p. 281) at the end of D. No drawings in these
 * pages.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Constraint Relations Beyond the Single Pulley',
    extra: true,
    kalam:
      'The reliable technique is mechanical and always works: name a coordinate for every moving piece, write the string’s total length, and differentiate twice.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s eight topics taught you the five pillars — impulse, momentum conservation, equilibrium, friction, circular motion — and closed the syllabus gaps with FBDs, connected bodies, and the vertical circle. Four examinable patterns are still standing outside the door, and each one is a marriage of two things the chapter already teaches separately. Addendum A extends the single-pulley constraint of Subtopic 7 to the multi-pulley rigs that JEE Advanced actually draws. Addendum B puts Subtopic 4’s friction on top of Subtopic 7’s connected bodies: stacked blocks, where friction itself decides who moves with whom. Addendum C finishes Subtopic 4’s incline story — the chapter gives you the sliding acceleration, but not the range of forces that hold a block still, nor the optimally angled hold and haul. Addendum D returns to Subtopic 1’s variable mass and does chains and rockets exactly, deriving results the chapter quotes. Nothing here is new theory; every method is Newton’s second law plus a constraint, applied one layer deeper.',
      },
      {
        t: 'p',
        html: 'Subtopic 7 derives the Atwood machine and states the movable-pulley rule (“the load moves at half the free-end speed”) without proving it. Real JEE Advanced rigs chain two or three pulleys together, where the factor of two compounds and guessing fails. The reliable technique is mechanical and always works: name a coordinate for every moving piece, write the string’s total length, and differentiate twice. The constraint falls out as algebra, not intuition.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Assign coordinates.</b> Give every moving body a position variable, measured from a fixed datum along that body’s own line of motion. Fix a positive direction for each now.',
          '<b>Write the string length.</b> Express the total length <i>L</i> of the string as a sum of its straight segments. Fixed spans and the arcs wrapped on pulleys are constants.',
          '<b>Differentiate twice.</b> Since the string is inextensible,<br>d<i>L</i>/d<i>t</i> = 0   ⇒   d<sup>2</sup><i>L</i>/d<i>t</i><sup>2</sup> = 0,<br>giving a linear relation among the accelerations. Constants die in the differentiation — that is why step 2 can afford to ignore them.',
          '<b>Write ∑ <i>F⃗</i> = <i>ma⃗</i> for every body</b>, each with its own positive direction from step 1, plus <i>T</i><sub>1</sub> = 2<i>T</i><sub>2</sub> type bookkeeping at every massless pulley (the forces on a massless pulley must sum to zero).',
          '<b>Power audit (check).</b> An ideal string stores no energy, so the total power it delivers at all its contact points is zero:<br>∑<sub><i>j</i></sub> <i>T⃗</i><sub><i>j</i></sub> · <i>v⃗</i><sub><i>j</i></sub> = 0   (all attachment points <i>j</i>).<br>Thirty seconds of multiplication catches almost every sign error.',
        ],
      },
      {
        t: 'p',
        html: '<b>The <i>n</i>-segment rule, proved.</b> If a string runs over a moving pulley with <i>n</i> segments stretching between the pulley and fixed points, and the free portions shorten by <i>s</i>, each of the <i>n</i> segments lengthens by the pulley’s displacement <i>x</i>. Length conservation gives <i>nx</i> = <i>s</i>, so <i>x</i> = <i>s</i>/<i>n</i>; in rates,<br><i>v</i><sub>load</sub> = <i>v</i><sub>string</sub>/<i>n</i>,<br>and since each segment carries the same tension <i>T</i>, the string supports the load with a force <i>nT</i>. This is the general factor-of-two (for <i>n</i> = 2) that Subtopic 7 asserted.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A block <i>A</i> of mass 4 kg rests on a smooth table. A string from <i>A</i> runs horizontally to a fixed pulley at the table edge, descends, passes under a movable pulley carrying block <i>B</i> of mass 4 kg, and its other end is tied to the ceiling. Find the acceleration of each block and the tension. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Let <i>x</i> be the displacement of <i>A</i> toward the edge and <i>y</i> the descent of <i>B</i>. When <i>B</i> descends by <i>y</i>, both vertical segments flanking the movable pulley grow by <i>y</i>, while the horizontal segment shrinks by <i>x</i>. Length conservation:<br>−<i>x</i> + 2<i>y</i> = 0   ⇒   <i>x</i> = 2<i>y</i>   ⇒   <i>a</i><sub><i>A</i></sub> = 2<i>a</i><sub><i>B</i></sub>.',
          'This is the constraint — note it took one line of counting, not a picture of the machine.',
          'Equations of motion, each body positive along its actual tendency (<i>T</i> is uniform; ideal string and pulleys):',
          'Block <i>A</i> (horizontal, pulled by tension):<br><i>T</i> = <i>m</i><sub><i>A</i></sub><i>a</i><sub><i>A</i></sub> = 4(2<i>a</i><sub><i>B</i></sub>) = 8<i>a</i><sub><i>B</i></sub>.',
          'Block <i>B</i> (vertical, pulled up by two strands, so 2<i>T</i> upward):<br><i>m</i><sub><i>B</i></sub><i>g</i> − 2<i>T</i> = <i>m</i><sub><i>B</i></sub><i>a</i><sub><i>B</i></sub>.',
          'Substitute <i>T</i> = 8<i>a</i><sub><i>B</i></sub> into the second equation:<br>40 − 16<i>a</i><sub><i>B</i></sub> = 4<i>a</i><sub><i>B</i></sub>   ⇒   20<i>a</i><sub><i>B</i></sub> = 40   ⇒   <i>a</i><sub><i>B</i></sub> = 2 m/s<sup>2</sup>.',
          'Then <i>a</i><sub><i>A</i></sub> = 4 m/s<sup>2</sup> and <i>T</i> = 8(2) = 16 N.',
          '<b>Check.</b> Block <i>A</i>: the only horizontal force is <i>T</i> = 16 N, and <i>m</i><sub><i>A</i></sub><i>a</i><sub><i>A</i></sub> = 4 × 4 = 16 N. Block <i>B</i>: net force 40 − 32 = 8 N = <i>m</i><sub><i>B</i></sub><i>a</i><sub><i>B</i></sub> = 4 × 2. The general result for this rig is <i>a</i><sub><i>B</i></sub> = <i>m</i><sub><i>B</i></sub><i>g</i>/(4<i>m</i><sub><i>A</i></sub> + <i>m</i><sub><i>B</i></sub>); notice that <i>T</i> = 16 N lies between 0 and <i>m</i><sub><i>B</i></sub><i>g</i> = 40 N, as it must.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A fixed pulley hangs from the ceiling. Over it passes string 1, holding a mass <i>m</i><sub>1</sub> = 2 kg on one side and a light movable pulley <i>P</i> on the other. Over <i>P</i> passes string 2 holding <i>m</i><sub>2</sub> = 1 kg and <i>m</i><sub>3</sub> = 3 kg. Find every acceleration and both tensions. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Define: <i>a</i> = downward acceleration of <i>m</i><sub>1</sub>; <i>a</i>′ = downward acceleration of <i>P</i>; <i>b</i> = downward acceleration of <i>m</i><sub>2</sub> relative to <i>P</i>. String 1 constrains its two ends oppositely, so<br><i>a</i>′ = −<i>a</i>.',
          'Then the ground-frame accelerations from string 2 are: <i>m</i><sub>2</sub> descends at <i>a</i>′ + <i>b</i>, and <i>m</i><sub>3</sub> descends at <i>a</i>′ − <i>b</i>.',
          'Massless pulley <i>P</i> demands (string 1 pulls up with <i>T</i><sub>1</sub>; two strands of string 2 pull down with <i>T</i><sub>2</sub> each):<br><i>T</i><sub>1</sub> = 2<i>T</i><sub>2</sub>.',
          'Three equations of motion (downward positive throughout):<br><i>m</i><sub>1</sub><i>g</i> − <i>T</i><sub>1</sub> = <i>m</i><sub>1</sub><i>a</i> ⇒ 20 − <i>T</i><sub>1</sub> = 2<i>a</i><br><i>m</i><sub>2</sub><i>g</i> − <i>T</i><sub>2</sub> = <i>m</i><sub>2</sub>(<i>a</i>′ + <i>b</i>) ⇒ 10 − <i>T</i><sub>2</sub> = −<i>a</i> + <i>b</i><br><i>m</i><sub>3</sub><i>g</i> − <i>T</i><sub>2</sub> = <i>m</i><sub>3</sub>(<i>a</i>′ − <i>b</i>) ⇒ 30 − <i>T</i><sub>2</sub> = 3(−<i>a</i> − <i>b</i>)',
          'From the <i>m</i><sub>1</sub> equation together with <i>T</i><sub>1</sub> = 2<i>T</i><sub>2</sub>, we get 20 − 2<i>T</i><sub>2</sub> = 2<i>a</i>, so <i>T</i><sub>2</sub> = 10 − <i>a</i>. Feed this into the <i>m</i><sub>2</sub> equation:<br>10 − (10 − <i>a</i>) = −<i>a</i> + <i>b</i>   ⇒   <i>b</i> = 2<i>a</i>.',
          'Feed both into the <i>m</i><sub>3</sub> equation:<br>30 − 10 + <i>a</i> = −3<i>a</i> − 6<i>a</i>   ⇒   20 + <i>a</i> = −9<i>a</i>   ⇒   <i>a</i> = −2 m/s<sup>2</sup>.',
          '<b>Read the minus sign.</b> We guessed <i>m</i><sub>1</sub> descends; the algebra says it ascends at 2 m/s<sup>2</sup>. Completing the set:<br><i>T</i><sub>2</sub> = 10 − (−2) = 12 N,   <i>T</i><sub>1</sub> = 24 N,   <i>b</i> = −4 m/s<sup>2</sup>.',
          'So <i>P</i> descends at 2 m/s<sup>2</sup>, <i>m</i><sub>2</sub> accelerates upward at <i>a</i>′ + <i>b</i> = 2 − 4, i.e. 2 m/s<sup>2</sup>, and <i>m</i><sub>3</sub> accelerates downward at <i>a</i>′ − <i>b</i> = 2 + 4 = 6 m/s<sup>2</sup>. Physically: the heavy <i>m</i><sub>3</sub> wins the inner contest, hauling <i>m</i><sub>2</sub> up over <i>P</i>, and the imbalance drags <i>P</i> down — which lifts <i>m</i><sub>1</sub>.',
          '<b>Check (power audit).</b> Shortly after release from rest, take <i>v</i><sub>1</sub> = 2<i>t</i> up, <i>v</i><sub><i>P</i></sub> = 2<i>t</i> down, <i>v</i><sub>2</sub> = 2<i>t</i> up, <i>v</i><sub>3</sub> = 6<i>t</i> down. String 1 delivers <i>T</i><sub>1</sub><i>v</i><sub>1</sub> + <i>T</i><sub>1</sub>(−<i>v</i><sub><i>P</i></sub>) = 24(2<i>t</i>) − 24(2<i>t</i>) = 0. String 2 delivers <i>T</i><sub>2</sub><i>v</i><sub>2</sub> − <i>T</i><sub>2</sub><i>v</i><sub>3</sub> + 2<i>T</i><sub>2</sub><i>v</i><sub><i>P</i></sub> = 12(2<i>t</i>) − 12(6<i>t</i>) + 24(2<i>t</i>) = 0 (watch signs: the two strands pull <i>P</i> down while <i>P</i> moves down). Both audits close to zero. Also <i>T</i><sub>2</sub> sits strictly between <i>m</i><sub>2</sub><i>g</i> = 10 N and <i>m</i><sub>3</sub><i>g</i> = 30 N, as an inner-string tension must.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A load of mass 20 kg hangs from a single movable pulley. The rope’s free end is pulled up at a steady 1.5 m/s. Find the load’s speed and the rope tension. Take <i>g</i> = 10 m/s<sup>2</sup>.',
            a: 'Load rises at 0.75 m/s (half the free-end speed); steady speed means equilibrium, so 2<i>T</i> = <i>mg</i> = 200 N, giving <i>T</i> = 100 N.',
          },
          {
            q: 'A mass of 4 kg hangs from a movable pulley whose rope runs up over two fixed pulleys; both free ends are pulled down with a force of 30 N each. Find the mass’s upward acceleration. Take <i>g</i> = 10 m/s<sup>2</sup>.',
            a: 'Two strands pull up: 2(30) − 4(10) = 4<i>a</i>, so <i>a</i> = 20/4 = 5 m/s<sup>2</sup> upward.',
          },
          {
            q: 'A rope has one end fixed to the ceiling, passes under a movable pulley that carries a load, and then goes over a fixed pulley. Its free end is pulled downward with acceleration 4 m/s<sup>2</sup>. Find the acceleration of the load on the movable pulley.',
            a: 'By the <i>n</i>-segment rule with <i>n</i> = 2, the load moves at half the free end: 2 m/s<sup>2</sup> (direction: upward, opposite the pull).',
          },
          {
            q: 'A double Atwood machine has <i>m</i><sub>1</sub> = 4 kg on the main string and <i>m</i><sub>2</sub> = <i>m</i><sub>3</sub> = 2 kg on the movable pulley’s string. Show the system can hang at rest, and find both tensions. Take <i>g</i> = 10 m/s<sup>2</sup>.',
            a: 'The inner pair is balanced (<i>m</i><sub>2</sub> = <i>m</i><sub>3</sub>), so <i>b</i> = 0 and <i>P</i>’s string behaves as a single mass <i>m</i><sub>2</sub> + <i>m</i><sub>3</sub> = 4 kg balancing <i>m</i><sub>1</sub> = 4 kg: everything at rest, <i>T</i><sub>2</sub> = <i>m</i><sub>2</sub><i>g</i> = 20 N and <i>T</i><sub>1</sub> = <i>m</i><sub>1</sub><i>g</i> = 40 N.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Stacked Blocks: When Does Friction Say “Together”?',
    extra: true,
    kalam:
      'The question “do they move together or does the top one slip?” is a hypothesis test, and the chapter’s tools run it in three lines.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Subtopic 4 treats one block on one surface, and Subtopic 7 treats blocks joined by strings. But the most common Advanced configuration is two blocks in contact, where the coupling is friction — a self-adjusting force with a ceiling. The question “do they move together or does the top one slip?” is a hypothesis test, and the chapter’s tools run it in three lines. CBSE rarely asks it; NEET asks the conceptual core; JEE Main and Advanced ask it nearly every year.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Draw two FBDs.</b> Mark the interface friction explicitly as a Third-Law pair: <i>f</i> on one block, <i>f</i> oppositely on the other. The normal force between them is <i>N</i> = <i>m</i><sub>top</sub><i>g</i> (plus any applied vertical component).',
          '<b>Hypothesize “together.”</b> Treat the stack as one body of mass <i>M</i> + <i>m</i> to get the common acceleration <i>a</i>. Then ask: what friction does the driven block need? Compute the required <i>f</i><sub>req</sub> from the driven block’s own equation.',
          '<b>Test the ceiling.</b> If<br><i>f</i><sub>req</sub> ≤ <i>μ</i><sub>s</sub><i>N</i>,<br>the hypothesis stands — static friction obliges, and the actual friction is <i>f</i><sub>req</sub>. If it fails, the blocks slip.',
          '<b>If slipping,</b> replace interface friction by kinetic <i>μ</i><sub>k</sub><i>N</i> on each block (opposite directions), solve the two equations independently, and report both accelerations and their difference — the relative acceleration that governs how long the top block takes to slide off.',
          '<b>Critical applied force.</b> Slipping begins exactly when <i>f</i><sub>req</sub> = <i>μ</i><sub>s</sub><i>N</i>; solve that equality for <i>F</i>.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 2 kg block sits on a 4 kg block on a frictionless floor. Between the blocks <i>μ</i><sub>s</sub> = 0.5 and <i>μ</i><sub>k</sub> = 0.4. A horizontal force <i>F</i> is applied to the lower block. Take <i>g</i> = 10 m/s<sup>2</sup>. (a) For <i>F</i> = 12 N, find the acceleration and the friction force. (b) Find the largest <i>F</i> for which no slipping occurs. (c) For <i>F</i> = 42 N, find both accelerations.',
        steps: [
          'Interface ceiling: <i>f</i><sub>max</sub> = <i>μ</i><sub>s</sub><i>mg</i> = 0.5 × 2 × 10 = 10 N.',
          '<b>(a)</b> Together-hypothesis: <i>a</i> = <i>F</i>/(<i>M</i> + <i>m</i>) = 12/6 = 2 m/s<sup>2</sup>. The top block is driven only by friction, so <i>f</i><sub>req</sub> = <i>ma</i> = 2 × 2 = 4 N. Since 4 N ≤ 10 N, they move together and the friction actually acting is 4 N.',
          '<b>(b)</b> Slip begins when <i>f</i><sub>req</sub> = 10 N, i.e. <i>a</i> = <i>f</i><sub>max</sub>/<i>m</i> = 10/2 = 5 m/s<sup>2</sup>. Note this is exactly <i>μ</i><sub>s</sub><i>g</i> — the mass of the top block cancels. Then<br><i>F</i><sub>max</sub> = (<i>M</i> + <i>m</i>) <i>μ</i><sub>s</sub><i>g</i> = 6 × 5 = 30 N.',
          '<b>(c)</b> <i>F</i> = 42 N > 30 N, so they slip. Kinetic friction = <i>μ</i><sub>k</sub><i>mg</i> = 0.4 × 2 × 10 = 8 N, forward on the top block, backward on the bottom:',
          'Top block (driven by friction alone):<br><i>a</i><sub>top</sub> = <i>μ</i><sub>k</sub><i>mg</i>/<i>m</i> = <i>μ</i><sub>k</sub><i>g</i> = 4 m/s<sup>2</sup>.',
          'Bottom block:<br><i>a</i><sub>bot</sub> = (<i>F</i> − <i>μ</i><sub>k</sub><i>mg</i>)/<i>M</i> = (42 − 8)/4 = 8.5 m/s<sup>2</sup>.',
          'Relative acceleration: 8.5 − 4 = 4.5 m/s<sup>2</sup>.',
          '<b>Check.</b> Adding the two slipped equations reproduces the whole-system one: <i>F</i> = <i>Ma</i><sub>bot</sub> + <i>ma</i><sub>top</sub> = 34 + 8 = 42 N. And <i>a</i><sub>top</sub> = 4 m/s<sup>2</sup> is bounded by <i>μ</i><sub>s</sub><i>g</i> = 5 — friction can never accelerate the top block faster than <i>μ</i><sub>s</sub><i>g</i>, whatever <i>F</i> does.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The same pair (<i>m</i> = 2 kg on <i>M</i> = 4 kg, <i>μ</i><sub>s</sub> = 0.5, <i>μ</i><sub>k</sub> = 0.4 between blocks) now rests on a floor with friction coefficient 0.1. The force is applied to the top block. Map the motion completely as <i>F</i> grows, and analyse <i>F</i> = 18 N. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Floor friction ceiling (whole stack pressing): 0.1 × 6 × 10 = 6 N. Interface ceilings as before: static 10 N, kinetic 8 N.',
          '<b>Regime 1: <i>F</i> ≤ 6 N.</b> The push transmits through the interface to the floor, whose static friction can absorb up to 6 N. Nothing moves.',
          '<b>Regime 2: 6 N < <i>F</i> ≤ 12 N — together.</b> Whole-system equation:<br><i>F</i> − 6 = 6<i>a</i>   ⇒   <i>a</i> = (<i>F</i> − 6)/6 m/s<sup>2</sup>.',
          'Bottom block’s own equation (friction <i>f</i> forward from the top block, floor friction 6 N backward):<br><i>f</i> − 6 = 4<i>a</i>   ⇒   <i>f</i> = 6 + 4(<i>F</i> − 6)/6 = (2<i>F</i> + 6)/3 N.',
          'Slip when <i>f</i> > 10: (2<i>F</i> + 6)/3 > 10 gives <i>F</i> > 12 N. So the together-regime ends at <i>F</i> = 12 N, where <i>f</i> = 10 N = <i>μ</i><sub>s</sub><i>mg</i> exactly.',
          '<b>Regime 3: <i>F</i> > 12 N — slipping.</b> Interface friction drops to 8 N. For <i>F</i> = 18 N:',
          'Top block:<br><i>a</i><sub>top</sub> = (<i>F</i> − <i>μ</i><sub>k</sub><i>mg</i>)/<i>m</i> = (18 − 8)/2 = 5 m/s<sup>2</sup>.',
          'Bottom block (pushed forward by 8 N, held back by 6 N of floor friction):<br><i>a</i><sub>bot</sub> = (<i>μ</i><sub>k</sub><i>mg</i> − 0.1(<i>M</i> + <i>m</i>)<i>g</i>)/<i>M</i> = (8 − 6)/4 = 0.5 m/s<sup>2</sup>.',
          'Relative acceleration = 5 − 0.5 = 4.5 m/s<sup>2</sup>: the top block walks forward off the bottom one.',
          '<b>Why it is Advanced-level.</b> Driving from the top inverts the logic of Example B.1: the interface friction must simultaneously accelerate the bottom block and defeat floor friction, so the no-slip window collapses from <i>F</i> ≤ 30 N (bottom-driven, smooth floor) to <i>F</i> ≤ 12 N (top-driven, rough floor). The mark-winning habit is computing all three ceilings — interface static, interface kinetic, floor — before choosing a regime, and checking each regime boundary by substituting it back until two ceilings coincide.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A 1 kg block sits on a 3 kg block on a frictionless floor; <i>μ</i><sub>s</sub> = 0.4 between them. <i>F</i> is applied to the lower block. Find the largest <i>F</i> with no slipping, and the friction force at that instant. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>F</i><sub>max</sub> = (1 + 3)(0.4)(10) = 16 N; friction then = <i>μ</i><sub>s</sub><i>mg</i> = 4 N.',
          },
          {
            q: 'The same pair, with <i>μ</i><sub>k</sub> = 0.3 between blocks and <i>F</i> = 30 N on the lower block. Find both accelerations and the relative acceleration. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>a</i><sub>top</sub> = <i>μ</i><sub>k</sub><i>g</i> = 3 m/s<sup>2</sup>; <i>a</i><sub>bot</sub> = (30 − 0.3 × 1 × 10)/3 = 9 m/s<sup>2</sup>; relative 6 m/s<sup>2</sup>.',
          },
          {
            q: 'A 2 kg block on a 4 kg block, smooth floor, <i>μ</i><sub>s</sub> = 0.5, force applied to the top block. Find the largest <i>F</i> for which they move together. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: 'Together requires <i>Ma</i> ≤ <i>μ</i><sub>s</sub><i>mg</i>, so <i>a</i><sub>max</sub> = 10/4 = 2.5 m/s<sup>2</sup> and <i>F</i><sub>max</sub> = 6 × 2.5 = 15 N — half the bottom-driven value of 30 N from Example B.1.',
          },
          {
            q: 'In one sentence, explain why driving the stack from the top gives a smaller no-slip force range than driving it from the bottom.',
            a: 'The interface ceiling <i>μ</i><sub>s</sub><i>mg</i> is fixed, but when the top block drives, that same friction must accelerate the entire lower mass (and beat floor friction if any), whereas bottom-driving uses it only to accelerate the light top mass.',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'The Complete Force Budget on a Rough Incline',
    extra: true,
    kalam:
      'All of it is the impending-motion idea — set static friction to its ceiling, oriented against the impending slip — applied twice, once per slip direction.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Subtopic 4 gives you the block that slides down a rough incline, and the minimum horizontal-pull trick on a flat floor. What boards and JEE both mine further is the full budget: the range of forces that hold a block stationary, and the least possible force to hold it or haul it up when you may choose the direction. All of it is the impending-motion idea — set static friction to its ceiling, oriented against the impending slip — applied twice, once per slip direction.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Throughout: incline angle <i>θ</i>, coefficients <i>μ</i><sub>s</sub> (and <i>μ</i><sub>k</sub> if it slides), mass <i>m</i>. Define the angle of friction <i>λ</i> by tan <i>λ</i> = <i>μ</i><sub>s</sub>, so that<br>sin <i>λ</i> = <i>μ</i><sub>s</sub>/√(1 + <i>μ</i><sub>s</sub><sup>2</sup>),   cos <i>λ</i> = 1/√(1 + <i>μ</i><sub>s</sub><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Step 0 — will it stay alone?</b> If tan <i>θ</i> ≤ <i>μ</i><sub>s</sub>, i.e. <i>θ</i> ≤ <i>θ</i><sub>r</sub> (the angle of repose, defined by tan <i>θ</i><sub>r</sub> = <i>μ</i><sub>s</sub>, so <i>θ</i><sub>r</sub> = <i>λ</i>), the block holds itself and the force range opens at 0.',
      },
      {
        t: 'p',
        html: '<b>Range of a force parallel to the incline.</b> Impending slip down (friction up, at its ceiling):<br><i>F</i><sub>low</sub> = <i>mg</i>(sin <i>θ</i> − <i>μ</i><sub>s</sub> cos <i>θ</i>).<br>Impending slip up (friction down):<br><i>F</i><sub>high</sub> = <i>mg</i>(sin <i>θ</i> + <i>μ</i><sub>s</sub> cos <i>θ</i>).<br>Every <i>F</i> in [<i>F</i><sub>low</sub>, <i>F</i><sub>high</sub>] holds the block; outside it, the block accelerates the way the imbalance points.',
      },
      {
        t: 'p',
        html: '<b>Least force to hold it (any angle allowed).</b> Apply <i>F</i> at angle <i>ϕ</i> above the up-slope direction (positive <i>ϕ</i> tilts the force off the surface, reducing <i>N</i>; negative <i>ϕ</i> presses into it). Perpendicular balance: <i>N</i> = <i>mg</i> cos <i>θ</i> − <i>F</i> sin <i>ϕ</i>. With slip impending downward,<br><i>F</i> cos <i>ϕ</i> + <i>μ</i><sub>s</sub>(<i>mg</i> cos <i>θ</i> − <i>F</i> sin <i>ϕ</i>) = <i>mg</i> sin <i>θ</i>,<br><i>F</i> = <i>mg</i>(sin <i>θ</i> − <i>μ</i><sub>s</sub> cos <i>θ</i>)/(cos <i>ϕ</i> − <i>μ</i><sub>s</sub> sin <i>ϕ</i>).<br>Maximising the denominator: cos <i>ϕ</i> − <i>μ</i><sub>s</sub> sin <i>ϕ</i> peaks at √(1 + <i>μ</i><sub>s</sub><sup>2</sup>) when tan <i>ϕ</i> = −<i>μ</i><sub>s</sub>, i.e. the force is aimed up-slope but pressed into the plane at angle <i>λ</i>. Hence, for <i>θ</i> > <i>θ</i><sub>r</sub>,<br><i>F</i><sub>hold,min</sub> = <i>mg</i>(sin <i>θ</i> − <i>μ</i><sub>s</sub> cos <i>θ</i>)/√(1 + <i>μ</i><sub>s</sub><sup>2</sup>) = <i>mg</i> sin(<i>θ</i> − <i>λ</i>).<br>Pressing into the plane buys normal force, and normal force buys friction — exactly what a holding force wants.',
      },
      {
        t: 'p',
        html: '<b>Least force to drag it up.</b> Same geometry, slip impending upward, friction reversed:<br><i>F</i> = <i>mg</i>(sin <i>θ</i> + <i>μ</i><sub>s</sub> cos <i>θ</i>)/(cos <i>ϕ</i> + <i>μ</i><sub>s</sub> sin <i>ϕ</i>),<br>the denominator is maximised at tan <i>ϕ</i> = +<i>μ</i><sub>s</sub> (tilted away from the plane, stealing normal force to starve the friction opposing you), so <i>F</i> is least:<br><i>F</i><sub>drag,min</sub> = <i>mg</i> sin(<i>θ</i> + <i>λ</i>).',
      },
      {
        t: 'p',
        html: '<b>The unified picture worth memorising.</b> Horizontal floor (<i>θ</i> = 0): drag needs <i>mg</i> sin <i>λ</i> — Subtopic 4’s result. Hold on an incline: <i>mg</i> sin(<i>θ</i> − <i>λ</i>). Haul up: <i>mg</i> sin(<i>θ</i> + <i>λ</i>). One formula family; the angle <i>λ</i> always enters, only the sign of the combination changes with which way friction is helping you.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 5 kg block rests on a rough incline of 37° with <i>μ</i><sub>s</sub> = 0.5. Find the range of forces applied parallel to the incline that keep it in equilibrium. Take <i>g</i> = 10 m/s<sup>2</sup>, sin 37° = 0.6, cos 37° = 0.8.',
        steps: [
          'First check self-holding: tan 37° = 0.75 > 0.5, so the block slides unaided — a nonzero lower bound exists. Weight components along and perpendicular:<br><i>mg</i> sin <i>θ</i> = 5 × 10 × 0.6 = 30 N,   <i>μ</i><sub>s</sub><i>mg</i> cos <i>θ</i> = 0.5 × 5 × 10 × 0.8 = 20 N.',
          'Range:<br><i>F</i><sub>low</sub> = 30 − 20 = 10 N,   <i>F</i><sub>high</sub> = 30 + 20 = 50 N.',
          '<b>Check.</b> At <i>F</i> = 30 N (midpoint) the needed friction is 0 — the force alone balances the weight component, and static friction idles at zero, comfortably legal since 0 ≤ <i>μ</i><sub>s</sub><i>N</i>.',
        ],
        // The book's "Answer:" paragraph, which it prints before the Check.
        ans: 'Any parallel force from 10 N to 50 N holds it. Below 10 N it slides down; above 50 N it accelerates up.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'On the same style of incline, take <i>θ</i> = 53°, <i>μ</i><sub>s</sub> = 0.75, and a block of mass 2 kg (<i>g</i> = 10 m/s<sup>2</sup>, so <i>mg</i> = 20 N; sin 53° = 0.8, cos 53° = 0.6). (a) Find the least force that prevents the block sliding down, and the angle at which it must be applied. (b) Find the least force that drags it up. (c) Compare both with purely parallel forces.',
        steps: [
          'Here tan <i>λ</i> = 0.75 gives the 3-4-5 triangle: sin <i>λ</i> = 0.6, cos <i>λ</i> = 0.8, √(1 + <i>μ</i><sub>s</sub><sup>2</sup>) = 1.25. Also tan <i>θ</i> = 4/3 > 0.75, so the block cannot hold itself.',
          '<b>(a) Least holding force.</b><br><i>F</i><sub>hold,min</sub> = <i>mg</i>(sin <i>θ</i> − <i>μ</i><sub>s</sub> cos <i>θ</i>)/√(1 + <i>μ</i><sub>s</sub><sup>2</sup>) = 20 (0.8 − 0.75 × 0.6)/1.25 = (20 × 0.35)/1.25 = 5.6 N.<br>Applied up-slope, tilted 36.87° below the incline surface — pressing the block into the plane.',
          '<b>(b) Least hauling force.</b> Using the sine addition with <i>θ</i> + <i>λ</i> = 53.13° + 36.87° = 90° (with sin <i>θ</i> = 0.8, <i>θ</i> is 53.13°), or directly:<br><i>F</i><sub>drag,min</sub> = <i>mg</i>(sin <i>θ</i> + <i>μ</i><sub>s</sub> cos <i>θ</i>)/√(1 + <i>μ</i><sub>s</sub><sup>2</sup>) = 20 (0.8 + 0.45)/1.25 = 25/1.25 = 20 N.<br>(Elegance check via <i>mg</i> sin(<i>θ</i> + <i>λ</i>): sin <i>θ</i> cos <i>λ</i> + cos <i>θ</i> sin <i>λ</i> = 0.8 × 0.8 + 0.6 × 0.6 = 1.00 exactly — the sum lands on 90° and the answer is exactly one weight.) Applied up-slope, tilted 36.87° above the surface.',
          '<b>(c) Comparison with parallel forces.</b> Purely parallel: holding needs <i>mg</i>(sin <i>θ</i> − <i>μ</i><sub>s</sub> cos <i>θ</i>) = 7 N versus 5.6 N optimal; hauling needs <i>mg</i>(sin <i>θ</i> + <i>μ</i><sub>s</sub> cos <i>θ</i>) = 25 N versus 20 N optimal. The optimally angled hold saves 20%, the angled haul saves 20%.',
          '<b>Check.</b> For (a), verify the perpendicular bookkeeping at the optimum: <i>N</i> = <i>mg</i> cos <i>θ</i> − <i>F</i> sin <i>ϕ</i> with <i>ϕ</i> = −36.87° (pressed in), so <i>N</i> = 20 × 0.6 + 5.6 × 0.6 = 12 + 3.36 = 15.36 N, and available friction = 0.75 × 15.36 = 11.52 N. Along-slope balance: <i>F</i> cos 36.87° + 11.52 = 5.6 × 0.8 + 11.52 = 4.48 + 11.52 = 16 N, which equals <i>mg</i> sin <i>θ</i> = 20 × 0.8 = 16 N.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A 4 kg block rests on a 30° incline with <i>μ</i><sub>s</sub> = 0.6. Does it hold itself? Find the full range of parallel forces maintaining equilibrium. (<i>g</i> = 10 m/s<sup>2</sup>, cos 30° = 0.866.)',
            a: 'Yes: tan 30° ≈ 0.58 < 0.6, so <i>F</i><sub>low</sub> = 0. Upper limit <i>mg</i>(sin 30° + <i>μ</i><sub>s</sub> cos 30°) = 40(0.5 + 0.5196) ≈ 40.8 N; range [0, 40.8] N.',
          },
          {
            q: 'A 2 kg block rests on a 45° incline with <i>μ</i><sub>s</sub> = 0.75. Find the least force preventing it from sliding, and the angle of application. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>F</i> = <i>mg</i> sin(45° − 36.87°) = 20 sin 8.13° = 20 × 0.1414 ≈ 2.83 N, applied up-slope tilted 36.87° into the plane.',
          },
          {
            q: 'For the block of Question 2, find the least force that drags it up the incline.',
            a: '<i>F</i> = 20(sin 45° + 0.75 cos 45°)/1.25 = 20 × 1.2374/1.25 ≈ 19.8 N, applied up-slope tilted 36.87° off the plane.',
          },
          {
            q: 'Explain physically why the optimal holding force presses into the plane while the optimal hauling force lifts away from it.',
            a: 'When holding, friction is your ally and must be near its ceiling, so maximise <i>N</i> by pressing in; when hauling, friction is your adversary, so minimise <i>N</i> by lifting, shrinking <i>μN</i> at the cost of wasting some force vertically — the optimum balances the trade at exactly <i>λ</i> either way.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Chains and Rockets: Variable Mass Done Exactly',
    extra: true,
    kalam:
      'Addendum D returns to Subtopic 1’s variable mass and does chains and rockets exactly, deriving results the chapter quotes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Subtopic 1 showed the conveyor-belt flux calculation, Subtopic 4 quoted the chain overhang fraction <i>y</i>/<i>L</i> = <i>μ</i>/(1 + <i>μ</i>) without deriving it, and Subtopic 2 derived the rocket equation in gravity-free space only. Boards ask the overhang derivation as a 2-mark question; JEE Advanced turns chains into scale-reading and snap-speed problems that punish anyone relying on <i>F</i> = <i>ma</i> reflexes. Here is the machinery, used four ways.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Fix the system boundary.</b> Decide precisely which matter is “inside” at time <i>t</i> and which bit crosses during the next d<i>t</i>.',
          '<b>Apply the parent law</b> to that system:<br><i>F⃗</i><sub>ext</sub> = d<i>p⃗</i><sub>system</sub>/d<i>t</i>,<br>never the constant-mass shortcut. The crossing matter contributes a momentum-flux term of the form <i>v</i> (d<i>m</i>/d<i>t</i>).',
          '<b>Chains:</b> the moving mass is the whole chain <i>λL</i>, the driving force is the weight of the hanging part <i>λxg</i>, where <i>λ</i> is the mass per unit length (kg/m).',
          '<b>Speeds from energy</b> when the geometry is a clean height change — but only after confirming no dissipation mechanism (snapping links, slipping) hides in the process.',
          '<b>Carry units ruthlessly:</b> <i>λxg</i> is (kg/m)(m)(m/s<sup>2</sup>) = N, every time.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — chain off a smooth table',
        q: 'A uniform chain of length <i>L</i> = 1 m and mass 1 kg lies on a smooth horizontal table with a length <i>x</i><sub>0</sub> = 25 cm hanging over the edge. Find (a) the acceleration at the instant of release and (b) the speed when the chain finally leaves the table. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Linear density: <i>λ</i> = 1 kg/1 m = 1 kg/m.',
          '<b>(a) Instantaneous acceleration.</b> The driving force is the hanging part’s weight:<br><i>F</i> = <i>λxg</i> = 1 × 0.25 × 10 = 2.5 N.<br>The whole chain of mass <i>λL</i> = 1 kg accelerates:<br><i>a</i> = <i>λxg</i>/(<i>λL</i>) = <i>gx</i>/<i>L</i> = (10 × 0.25)/1 = 2.5 m/s<sup>2</sup>.<br>Note the structure: <i>a</i> = <i>gx</i>/<i>L</i> grows as <i>x</i> grows, so this is not constant acceleration — the SUVAT kit is invalid across the motion, though valid instantaneously.',
          '<b>(b) Speed at exit, by energy.</b> Measure heights below the tabletop. Initially the hanging length <i>x</i><sub>0</sub> has its centre of mass at <i>x</i><sub>0</sub>/2; finally the whole chain hangs with its centre at <i>L</i>/2. Potential energy lost:<br>Δ<i>U</i> = <i>λg</i>[<i>L</i><sup>2</sup>/2 − <i>x</i><sub>0</sub><sup>2</sup>/2] = 1 × 10 × (1 − 0.0625)/2 = 4.6875 J.<br>All of it becomes kinetic energy of the whole chain:<br>½<i>λLv</i><sup>2</sup> = Δ<i>U</i>   ⇒   <i>v</i> = √(<i>g</i>(<i>L</i><sup>2</sup> − <i>x</i><sub>0</sub><sup>2</sup>)/<i>L</i>) = √(10 × 0.9375/1) ≈ 3.06 m/s.',
          '<b>Check.</b> The acceleration grew from 2.5 m/s<sup>2</sup> at release toward <i>g</i> = 10 m/s<sup>2</sup> as the chain emptied off the table; the chain slides <i>s</i> = <i>L</i> − <i>x</i><sub>0</sub> = 0.75 m, and <i>v</i><sup>2</sup> = 2<i>ās</i> gives <i>ā</i> = 9.375/(2 × 0.75) = 6.25 m/s<sup>2</sup> (this equals <i>g</i>(<i>x</i><sub>0</sub> + <i>L</i>)/2<i>L</i>, the average of <i>a</i> = <i>gx</i>/<i>L</i> over the distance). That lies between 2.5 and 10 m/s<sup>2</sup>, as it must.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — the scale that reads triple',
        q: 'A uniform chain of linear density <i>λ</i> = 1.0 kg/m is released from rest just touching a weighing scale’s pan, and piles up on it. Find the scale reading when a length <i>x</i> = 0.5 m has landed. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Each link falls freely from rest; when a length <i>x</i> has landed, the still-falling chain has dropped through a distance <i>x</i>, so a falling link strikes the pan at speed<br><i>v</i> = √(2<i>gx</i>).',
          'During a time d<i>t</i>, a mass d<i>m</i> = <i>λv</i> d<i>t</i> arrives moving at <i>v</i> and stops dead. Its momentum changes by d<i>p</i> = d<i>m</i> · <i>v</i> = <i>λv</i><sup>2</sup> d<i>t</i>, so the pan must exert an extra upward force<br><i>F</i><sub>flux</sub> = d<i>p</i>/d<i>t</i> = <i>λv</i><sup>2</sup> = <i>λ</i>(2<i>gx</i>).',
          'By the Third Law this arrives as extra downward force on the pan. The reading is dead weight plus flux:<br><i>R</i> = <i>λxg</i> (pile’s weight) + <i>λv</i><sup>2</sup> (stopping the arrivals) = <i>λxg</i> + 2<i>λxg</i> = 3<i>λxg</i>.',
          'Numerically:<br><i>R</i> = 3 × 1.0 × 10 × 0.5 = 15 N,<br>of which only 5 N is the pile’s actual weight — the impulsive term is twice the static term.',
          '<b>Check.</b> Units of <i>λv</i><sup>2</sup>: (kg/m)(m<sup>2</sup>/s<sup>2</sup>) = kg · m/s<sup>2</sup> = N, and the factor of two comes from <i>v</i><sup>2</sup> = 2<i>gx</i>: each arriving link’s momentum flux is twice the weight already landed.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — rocket with gravity switched on',
        q: 'A rocket of initial mass <i>m</i><sub>0</sub> = 1000 kg burns fuel at <i>b</i> = 10 kg/s with exhaust speed <i>v</i><sub>rel</sub> = 1500 m/s relative to the rocket. Find its speed 10 s after launch (a) ignoring gravity, (b) including uniform gravity. Take <i>g</i> = 10 m/s<sup>2</sup>.',
        steps: [
          'Thrust first: <i>F</i><sub>thrust</sub> = <i>v</i><sub>rel</sub><i>b</i> = 1500 × 10 = 15000 N, comfortably above the launch weight <i>m</i><sub>0</sub><i>g</i> = 10000 N — it lifts.',
          'Mass at time <i>t</i>: <i>m</i> = <i>m</i><sub>0</sub> − <i>bt</i> = 1000 − 10<i>t</i>; at <i>t</i> = 10 s, <i>m</i> = 900 kg.',
          '<b>(a)</b> Subtopic 2’s equation:<br><i>v</i> = <i>v</i><sub>rel</sub> ln(<i>m</i><sub>0</sub>/<i>m</i>) = 1500 × ln(10/9) = 1500 × 0.10536 ≈ 158 m/s.',
          '<b>(b)</b> Newton’s parent law on the rocket alone:<br><i>m</i> d<i>v</i>/d<i>t</i> = <i>v</i><sub>rel</sub><i>b</i> − <i>mg</i>   ⇒   d<i>v</i>/d<i>t</i> = <i>v</i><sub>rel</sub><i>b</i>/(<i>m</i><sub>0</sub> − <i>bt</i>) − <i>g</i>.<br>Integrating from 0 to <i>t</i> (the first term integrates to the logarithm, the second to <i>gt</i>):<br><i>v</i> = <i>v</i><sub>rel</sub> ln(<i>m</i><sub>0</sub>/<i>m</i>) − <i>gt</i> = 158 − 10 × 10 = 58 m/s.',
          'Gravity has eaten more than half the gain. The thrust-to-weight ratio is only 1.5 at launch, so the initial acceleration is 15 − 10 = 5 m/s<sup>2</sup>, a third of the gravity-free value of 15 m/s<sup>2</sup>.',
          '<b>Check.</b> Dimensionally, <i>v</i><sub>rel</sub> ln(·) is m/s and <i>gt</i> is m/s. Limit check: if <i>b</i> → 0 (the engine stops burning) the log term vanishes and <i>v</i> → −<i>gt</i>, the free-fall result for an unsupported body. (A rocket still sitting on the pad would be held up by the ground, so this limit applies only once it is in the air.)',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A chain of length <i>L</i> = 2 m lies on a smooth table with <i>x</i><sub>0</sub> = 0.5 m hanging. Find its acceleration at release and its speed as it leaves the table. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>a</i><sub>0</sub> = <i>gx</i><sub>0</sub>/<i>L</i> = 10 × 0.25 = 2.5 m/s<sup>2</sup>; <i>v</i> = √(<i>g</i>(<i>L</i><sup>2</sup> − <i>x</i><sub>0</sub><sup>2</sup>)/<i>L</i>) = √(10 × 3.75/2) = √18.75 ≈ 4.33 m/s.',
          },
          {
            q: 'A chain lies on a rough table with <i>μ</i><sub>s</sub> = 0.4. Derive and evaluate the maximum fraction of its length that can hang over the edge without sliding.',
            a: 'At the verge, <i>λxg</i> = <i>μ</i><sub>s</sub><i>λ</i>(<i>L</i> − <i>x</i>)<i>g</i>, so <i>x</i>/(<i>L</i> − <i>x</i>) = <i>μ</i><sub>s</sub> and <i>x</i>/<i>L</i> = <i>μ</i><sub>s</sub>/(1 + <i>μ</i><sub>s</sub>) = 0.4/1.4 = 2/7 ≈ 28.6%.',
          },
          {
            q: 'A chain with <i>λ</i> = 0.5 kg/m falls onto a scale pan from rest at pan level. Find the reading when <i>x</i> = 0.3 m has piled up. (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>R</i> = 3<i>λxg</i> = 3 × 0.5 × 10 × 0.3 = 4.5 N (dead weight only 1.5 N of it).',
          },
          {
            q: 'A rocket has <i>m</i><sub>0</sub> = 2000 kg, burns at <i>b</i> = 20 kg/s with <i>v</i><sub>rel</sub> = 1500 m/s. Find its speed at <i>t</i> = 30 s including gravity. Is the thrust-to-weight ratio at launch greater than 1? (<i>g</i> = 10 m/s<sup>2</sup>.)',
            a: '<i>m</i> = 1400 kg, ln(2000/1400) = ln(10/7) ≈ 0.3567, so <i>v</i> = 1500 × 0.3567 − 300 = 535 − 300 = 235 m/s; launch thrust 1500 × 20 = 30000 N versus weight 20000 N — ratio 1.5 > 1, it lifts.',
          },
        ],
      },

      { t: 'part', title: 'Closing note' },
      {
        t: 'p',
        html: 'Every addendum above ran the same two engines the chapter built: Newton’s second law written honestly (parent form whenever mass crosses a boundary, per-body otherwise), and one constraint or ceiling that closes the system of equations — string length, static-friction limit, or impending-slip condition. When a new problem looks unfamiliar, name the engine before touching algebra; in this chapter, it is always one of the two.',
      },
    ],
  },
];
