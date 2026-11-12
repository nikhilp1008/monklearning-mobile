import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional topic C: "Addendum: Exercises for Product-to-Sum and
 * Triple-Angle", pp. 271–276 of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word. The book prints it after Topic 08's
 * cheat sheet; it practises Topic 05's formulas, and its examples are lettered
 * C1–C4 (Topic 11 cites "Example C3"), so it is Additional topic C, before D
 * (founder, 2026-11-10). Parts: Introduction, Worked examples, Practice set.
 * Every fraction is stacked (<frac>); no em dashes.
 */

const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const half = (n: string) => fr(n, '2');
const H = half('1');
const x2 = (k: string) => half(`${k}<i>x</i>`);

export const TOPICS: Topic[] = [
  {
    n: 'C',
    title: 'Exercises for Product-to-Sum and Triple-Angle',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The product-to-sum formulas (Topic 05’s Identity master reference part, item (G), derived in its Derivations of the core formulas part, item (f)) and the triple-angle formulas (the Identity master reference part, item (F), derived in the Derivations of the core formulas part, item (e)) are already established. This additional topic gives worked practice in using them.',
      },
      {
        t: 'p',
        html: 'Keep the two trigger conditions in view as you read:<br>• <b>Reach for product-to-sum</b> when you face a <b>product</b> of two sines/cosines whose arguments are unequal, and the target is a sum or difference, or when a chain of products needs terms to cancel against each other.<br>• <b>Reach for triple-angle</b> when an expression contains a <b>cube</b> of a sine or cosine, or when three angles in a problem sit in the pattern <i>θ</i>, 60° − <i>θ</i>, 60° + <i>θ</i>: that trio is a triple-angle formula in disguise.',
      },
      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'C1: JEE Main Level (Product-to-Sum)',
        q: `Prove that cos 2<i>x</i> cos ${x2('')} − cos 3<i>x</i> cos ${x2('9')} = sin 5<i>x</i> sin ${x2('5')}.`,
        steps: [
          `<b>Step 1: double both products so the formula applies cleanly.</b> Using 2 cos <i>A</i> cos <i>B</i> = cos(<i>A</i> + <i>B</i>) + cos(<i>A</i> − <i>B</i>) on each term:<br>2 cos 2<i>x</i> cos ${x2('')} = cos(2<i>x</i> + ${x2('')}) + cos(2<i>x</i> − ${x2('')}) = cos ${x2('5')} + cos ${x2('3')}<br>2 cos 3<i>x</i> cos ${x2('9')} = cos(3<i>x</i> + ${x2('9')}) + cos(3<i>x</i> − ${x2('9')}) = cos ${x2('15')} + cos ${x2('3')}<br><b>Reason for the second line:</b> cos(−${x2('3')}) = cos ${x2('3')}, since cosine is even (Topic 03).`,
          `<b>Step 2: subtract.</b> Doubling the whole left-hand side:<br>2 LHS = (cos ${x2('5')} + cos ${x2('3')}) − (cos ${x2('15')} + cos ${x2('3')}) = cos ${x2('5')} − cos ${x2('15')}.<br><b>The cos ${x2('3')} terms cancel exactly</b>: that cancellation is the entire reason the problem was constructed with these particular arguments.`,
          `<b>Step 3: convert the surviving difference back to a product.</b> By cos <i>C</i> − cos <i>D</i> = −2 sin ${half('<i>C</i> + <i>D</i>')} sin ${half('<i>C</i> − <i>D</i>')} with <i>C</i> = ${x2('5')}, <i>D</i> = ${x2('15')}:<br><i>C</i> + <i>D</i> = ${x2('5')} + ${x2('15')} = 10<i>x</i> ⇒ ${half('<i>C</i> + <i>D</i>')} = 5<i>x</i>,<br><i>C</i> − <i>D</i> = ${x2('5')} − ${x2('15')} = −5<i>x</i> ⇒ ${half('<i>C</i> − <i>D</i>')} = −${x2('5')},<br>2 LHS = −2 sin 5<i>x</i> sin(−${x2('5')}) = 2 sin 5<i>x</i> sin ${x2('5')},<br>using that sine is odd.`,
          `<b>Step 4: divide by 2.</b><br>LHS = sin 5<i>x</i> sin ${x2('5')} = RHS. ■`,
          '<b>Numerical spot-check at <i>x</i> = 1 radian:</b> LHS = (−0.41615)(0.87758) − (−0.98999)(−0.21080) = −0.57389; RHS = (−0.95892)(0.59847) = −0.57389. ✓',
          `<b>The takeaway:</b> you cannot factor cos 2<i>x</i> cos ${x2('')} against cos 3<i>x</i> cos ${x2('9')} directly; the arguments share nothing. Product-to-sum flattens both into cosines of single angles, at which point the common term becomes visible and cancels. Flatten first, look for cancellation second.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'C2: JEE Advanced Level (Product-to-Sum)',
        q: 'Evaluate sin 10° sin 30° sin 50° sin 70°.',
        steps: [
          `<b>Step 1: set aside the known factor.</b> sin 30° = ${H}, so the problem reduces to evaluating <i>P</i> = sin 10° sin 50° sin 70° and halving it.`,
          `<b>Step 2: collapse the pair whose angles sum to 120°.</b> Using 2 sin <i>A</i> sin <i>B</i> = cos(<i>A</i> − <i>B</i>) − cos(<i>A</i> + <i>B</i>) on sin 50° sin 70°:<br>2 sin 50° sin 70° = cos 20° − cos 120° = cos 20° + ${H},<br>since cos 120° = −${H}. Therefore<br><i>P</i> = sin 10° · ${fr(`cos 20° + ${H}`, '2')} = ${fr('sin 10° cos 20°', '2')} + ${fr('sin 10°', '4')}.`,
          `<b>Step 3: apply product-to-sum a second time</b> to the surviving product, using 2 sin <i>A</i> cos <i>B</i> = sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>):<br>2 sin 10° cos 20° = sin 30° + sin(−10°) = ${H} − sin 10°,<br>so sin 10° cos 20° = ${fr('1', '4')} − ${fr('sin 10°', '2')}.`,
          `<b>Step 4: substitute and watch the awkward term die.</b><br><i>P</i> = ${H}(${fr('1', '4')} − ${fr('sin 10°', '2')}) + ${fr('sin 10°', '4')} = ${fr('1', '8')} − ${fr('sin 10°', '4')} + ${fr('sin 10°', '4')} = ${fr('1', '8')}.<br><b>The sin 10° terms cancel completely</b>, which is why the answer is a clean rational number even though no individual factor is.`,
          `<b>Step 5: restore the set-aside factor.</b><br>sin 10° sin 30° sin 50° sin 70° = ${H} · ${fr('1', '8')} = ${fr('1', '16')}. ■`,
          `<b>Numerical check:</b> (0.17365)(0.5)(0.76604)(0.93969) = 0.0625 = ${fr('1', '16')}. ✓`,
          '<b>Why this is Advanced.</b> Two things had to be chosen well. First, which pair to collapse: pairing 50° with 70° produces cos 120°, a standard value, whereas pairing 10° with 50° produces cos 60° and cos 40°, one standard value and one dead end. Second, the willingness to carry an irrational term (sin 10°) through two steps on faith that it will cancel. Students abandon this problem at Step 2 because the expression looks worse than when they started. It is supposed to.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'C3: JEE Main Level (Triple-Angle)',
        q: `Prove that sin <i>A</i> sin(60° − <i>A</i>) sin(60° + <i>A</i>) = ${fr('1', '4')} sin 3<i>A</i>, and hence evaluate sin 20° sin 40° sin 80°.`,
        steps: [
          `<b>Step 1: collapse the symmetric pair.</b> By the standard product of compound angles (Topic 05’s Identity master reference part, item (B)), sin(<i>X</i> + <i>Y</i>) sin(<i>X</i> − <i>Y</i>) = sin<sup>2</sup> <i>X</i> − sin<sup>2</sup> <i>Y</i>. With <i>X</i> = 60° and <i>Y</i> = <i>A</i>:<br>sin(60° − <i>A</i>) sin(60° + <i>A</i>) = sin<sup>2</sup> 60° − sin<sup>2</sup> <i>A</i> = ${fr('3', '4')} − sin<sup>2</sup> <i>A</i>.`,
          `<b>Step 2: multiply by the remaining factor.</b><br>sin <i>A</i>(${fr('3', '4')} − sin<sup>2</sup> <i>A</i>) = ${fr('3 sin <i>A</i> − 4 sin<sup>3</sup> <i>A</i>', '4')}.`,
          `<b>Step 3: recognise the triple-angle formula.</b> The numerator is exactly sin 3<i>A</i> (Topic 05’s Identity master reference part, item (F)):<br>sin <i>A</i> sin(60° − <i>A</i>) sin(60° + <i>A</i>) = ${fr('sin 3<i>A</i>', '4')}. ■`,
          `<b>Step 4: apply it.</b> The trio 20°, 40°, 80° fits the pattern with <i>A</i> = 20°, because 40° = 60° − 20° and 80° = 60° + 20°:<br>sin 20° sin 40° sin 80° = ${fr('sin 60°', '4')} = ${fr(half('√3'), '4')} = ${fr('√3', '8')}.`,
          `<b>Numerical check:</b> (0.34202)(0.64279)(0.98481) = 0.21651, and ${fr('√3', '8')} = 0.21651. ✓`,
          `<b>Recognising the trigger.</b> The whole problem is spotting that {20°, 40°, 80°} is really {<i>A</i>, 60° − <i>A</i>, 60° + <i>A</i>}. Whenever a product of three sines has angles that are symmetric about 60° once you subtract, this identity applies (for three cosines, its companion cos <i>A</i> cos(60° − <i>A</i>) cos(60° + <i>A</i>) = ${fr('1', '4')} cos 3<i>A</i>, the fourth practice question), and turns the product into a single value in one step.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'C4: JEE Advanced Level (Triple-Angle)',
        q: 'Prove that cos 3<i>x</i> cos<sup>3</sup> <i>x</i> + sin 3<i>x</i> sin<sup>3</sup> <i>x</i> = cos<sup>3</sup> 2<i>x</i>.',
        steps: [
          `<b>Step 1: invert the triple-angle formulas to express the cubes.</b> From cos 3<i>θ</i> = 4 cos<sup>3</sup> <i>θ</i> − 3 cos <i>θ</i> and sin 3<i>θ</i> = 3 sin <i>θ</i> − 4 sin<sup>3</sup> <i>θ</i>:<br>cos<sup>3</sup> <i>θ</i> = ${fr('cos 3<i>θ</i> + 3 cos <i>θ</i>', '4')},   sin<sup>3</sup> <i>θ</i> = ${fr('3 sin <i>θ</i> − sin 3<i>θ</i>', '4')}.<br><b>Reason:</b> this “power-reduction for cubes” reading is the most useful form of the triple-angle formulas, and it is the move the problem is testing.`,
          `<b>Step 2: substitute both into the left-hand side.</b><br>LHS = cos 3<i>x</i> · ${fr('cos 3<i>x</i> + 3 cos <i>x</i>', '4')} + sin 3<i>x</i> · ${fr('3 sin <i>x</i> − sin 3<i>x</i>', '4')}<br>= ${fr('cos<sup>2</sup> 3<i>x</i> + 3 cos 3<i>x</i> cos <i>x</i> + 3 sin 3<i>x</i> sin <i>x</i> − sin<sup>2</sup> 3<i>x</i>', '4')}.`,
          `<b>Step 3: group the terms in two natural pairs.</b><br>• cos<sup>2</sup> 3<i>x</i> − sin<sup>2</sup> 3<i>x</i> = cos 6<i>x</i>, by the double-angle formula applied to the angle 3<i>x</i>.<br>• 3(cos 3<i>x</i> cos <i>x</i> + sin 3<i>x</i> sin <i>x</i>) = 3 cos(3<i>x</i> − <i>x</i>) = 3 cos 2<i>x</i>, by the master key cos(<i>A</i> − <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>.<br>Hence<br>LHS = ${fr('cos 6<i>x</i> + 3 cos 2<i>x</i>', '4')}.`,
          `<b>Step 4: recognise the right-hand side.</b> Apply the cube formula of Step 1 with <i>θ</i> = 2<i>x</i>, so that 3<i>θ</i> = 6<i>x</i>:<br>cos<sup>3</sup> 2<i>x</i> = ${fr('cos 6<i>x</i> + 3 cos 2<i>x</i>', '4')}.`,
          '<b>Step 5: conclude.</b> The two sides are identical expressions:<br>cos 3<i>x</i> cos<sup>3</sup> <i>x</i> + sin 3<i>x</i> sin<sup>3</sup> <i>x</i> = cos<sup>3</sup> 2<i>x</i>. ■',
          '<b>Numerical check at <i>x</i> = 0.3 radians:</b> LHS = (0.62161)(0.87190) + (0.78333)(0.025808) = 0.56220; RHS = (0.82534)<sup>3</sup> = 0.56220, agreeing to rounding. ✓',
          '<b>Why this is Advanced.</b> The identity is used in both directions in the same proof: forwards in Step 4 to build cos<sup>3</sup> 2<i>x</i>, and backwards in Step 1 to dissolve cos<sup>3</sup> <i>x</i> and sin<sup>3</sup> <i>x</i>. Most students know the triple-angle formulas only left-to-right, as a way of expanding cos 3<i>A</i>. The genuinely powerful reading is right-to-left: <b>a cube of a sine or cosine is always a disguised combination of the single and triple angles.</b> That is the reading that makes this proof three lines instead of thirty.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice set' },
      {
        t: 'practice',
        items: [
          {
            q: 'Express 2 cos 5<i>x</i> cos 3<i>x</i> as a sum of cosines.',
            a: 'cos 8<i>x</i> + cos 2<i>x</i>.',
          },
          {
            q: 'Evaluate 2 sin 75° cos 15° exactly.',
            a: `2 sin 75° cos 15° = sin 90° + sin 60° = 1 + ${half('√3')} = ${half('2 + √3')} ≈ 1.86603.`,
          },
          {
            q: 'Prove that cos 4<i>x</i> cos <i>x</i> − cos 5<i>x</i> cos 2<i>x</i> = sin 6<i>x</i> sin <i>x</i>.',
            a: 'Double both products: 2 cos 4<i>x</i> cos <i>x</i> = cos 5<i>x</i> + cos 3<i>x</i> and 2 cos 5<i>x</i> cos 2<i>x</i> = cos 7<i>x</i> + cos 3<i>x</i>. Subtracting, the cos 3<i>x</i> terms cancel and 2 LHS = cos 5<i>x</i> − cos 7<i>x</i> = −2 sin 6<i>x</i> sin(−<i>x</i>) = 2 sin 6<i>x</i> sin <i>x</i>, so LHS = sin 6<i>x</i> sin <i>x</i>.',
          },
          {
            q: `Prove that cos <i>A</i> cos(60° − <i>A</i>) cos(60° + <i>A</i>) = ${fr('1', '4')} cos 3<i>A</i>, and hence evaluate cos 20° cos 40° cos 80°.`,
            a: `cos(60° − <i>A</i>) cos(60° + <i>A</i>) = cos<sup>2</sup> 60° − sin<sup>2</sup> <i>A</i> = ${fr('1', '4')} − sin<sup>2</sup> <i>A</i>; multiplying by cos <i>A</i> and using sin<sup>2</sup> <i>A</i> = 1 − cos<sup>2</sup> <i>A</i> gives ${fr('4 cos<sup>3</sup> <i>A</i> − 3 cos <i>A</i>', '4')} = ${fr('cos 3<i>A</i>', '4')}. With <i>A</i> = 20°: cos 20° cos 40° cos 80° = ${fr('cos 60°', '4')} = ${fr('1', '8')}, matching Topic 05’s seventh worked example by a completely different route.`,
          },
          {
            q: `If sin <i>θ</i> = ${fr('1', '3')}, find the exact value of sin 3<i>θ</i>.`,
            a: `sin 3<i>θ</i> = 3 sin <i>θ</i> − 4 sin<sup>3</sup> <i>θ</i> = 3(${fr('1', '3')}) − 4(${fr('1', '27')}) = 1 − ${fr('4', '27')} = ${fr('23', '27')} ≈ 0.85185.`,
          },
          {
            q: 'Find the general solution of cos 3<i>x</i> = cos <i>x</i>.',
            a: `By triple-angle, 4 cos<sup>3</sup> <i>x</i> − 3 cos <i>x</i> = cos <i>x</i> ⇒ 4 cos <i>x</i> (cos<sup>2</sup> <i>x</i> − 1) = 0 ⇒ cos <i>x</i> = 0 or sin <i>x</i> = 0. Combining <i>x</i> = (2<i>n</i> + 1)${half('π')} with <i>x</i> = <i>n</i>π gives the single family<br><i>x</i> = ${half('<i>n</i>π')},   <i>n</i> ∈ ℤ.<br>(The same answer follows from cos 3<i>x</i> − cos <i>x</i> = −2 sin 2<i>x</i> sin <i>x</i> = 0: a useful check that the triple-angle route and the sum-to-product route agree.)`,
          },
        ],
      },
    ],
  },
];
