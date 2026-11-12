import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 08: Properties of Triangles: Sine Rule, Cosine Rule and
 * Area, pp. 257–276 of the Class 11 Mathematics Master Reference (October 2026
 * edition), word for word: the supplement's Subtopic 08. It starts below the
 * rule on p. 257 (after Topic 07's cheat sheet) and opens with its "Exam
 * Relevance:" box as a part of its own, then is split at its Sections 1 to 8;
 * the "CHEAT SHEET BOX" is the part "Cheat sheet".
 * The book then prints, on pp. 271–276, "Addendum: Exercises for
 * Product-to-Sum and Triple-Angle": it is Additional topic C (extra-c.ts).
 * Figure 3.17 (caption p. 258, drawn p. 259) stands where the book prints its
 * caption, after "That last clause …"; it is redrawn in
 * lib/diagrams/mathematics-11-03.ts. The topic has no unnumbered drawing.
 * Every fraction is stacked (<frac>); no em dashes.
 */

const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const half = (n: string) => fr(n, '2');
const H = half('1');
const A2 = half('<i>A</i>');
const SR = `${fr('<i>a</i>', 'sin <i>A</i>')} = ${fr('<i>b</i>', 'sin <i>B</i>')} = ${fr('<i>c</i>', 'sin <i>C</i>')}`;
const COS_A = fr('<i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>a</i><sup>2</sup>', '2<i>bc</i>');
const COS_B = fr('<i>c</i><sup>2</sup> + <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>', '2<i>ca</i>');
const COS_C = fr('<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>', '2<i>ab</i>');
const SMB = '(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>)';
const SSA = '<i>s</i>(<i>s</i> − <i>a</i>)';
const HERON = '√(<i>s</i>(<i>s</i> − <i>a</i>)(<i>s</i> − <i>b</i>)(<i>s</i> − <i>c</i>))';
const SIN_A2 = `√(${fr(SMB, '<i>bc</i>')})`;
const COS_A2 = `√(${fr(SSA, '<i>bc</i>')})`;
const TAN_A2 = `√(${fr(SMB, SSA)})`;
const ABC4R = fr('<i>abc</i>', '4<i>R</i>');
const ABC4D = fr('<i>abc</i>', '4Δ');
const S_DEF = half('<i>a</i> + <i>b</i> + <i>c</i>');
const ONE_HALF_AB = `${H}<i>ab</i> sin <i>C</i>`;
const SIDES = '<i>a</i>, <i>b</i>, <i>c</i> = the sides <i>BC</i>, <i>CA</i>, <i>AB</i>';
const ANGLES = '<i>A</i>, <i>B</i>, <i>C</i> = the interior angles opposite them';


export const TOPICS: Topic[] = [
  // ──────────────── Topic 08 · pp. 257–276 ────────────────
  {
    n: '08',
    title: 'Properties of Triangles: Sine Rule, Cosine Rule and Area',
    kalam: 'The cosine rule is Pythagoras with a correction term.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Be clear about where this sits. The rationalised NCERT and the current CBSE Class 11 syllabus have <b>dropped</b> this material, so you will not meet it as a direct board question: the closest the board comes is the conditional identities under <i>A</i> + <i>B</i> + <i>C</i> = π in Topic 05’s Identity master reference part, item (J). JEE Main uses it occasionally (the book’s estimate from past papers, not official figures), typically as a one-step cosine-rule or area computation embedded in a coordinate-geometry or vectors question. JEE Advanced, by contrast, lists it explicitly: “relations between sides and angles of a triangle, sine rule, cosine rule, half-angle formula and the area of a triangle” is a named syllabus item, and Advanced problems combine it freely with the identity work of Topic 05. (NEET does not test mathematics.) Treat this topic as compulsory for Advanced, useful for Main, and enrichment for Boards.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>How the height of Everest was measured.</b> In the 1850s, the Great Trigonometrical Survey of India needed the height of a peak nobody could climb. They could not stretch a tape up the mountain. What they could do was stand at two known points on the plains, measure the distance between them, and measure the angle of elevation from each. Three measured quantities, and the mountain’s height fell out of the arithmetic.',
      },
      {
        t: 'p',
        html: 'That is the entire subject in one sentence. <b>A triangle has six parts (three sides <i>a</i>, <i>b</i>, <i>c</i> and three angles <i>A</i>, <i>B</i>, <i>C</i>) and they are not independent: knowing three of them (with at least one side) pins down the other three, up to the SSA ambiguity.</b> The sine rule and the cosine rule are the two conversion machines that do the pinning.',
      },
      {
        t: 'p',
        html: 'Think about it this way. Sides are things you can measure with a tape; angles are things you can measure with a theodolite. In the field, one is often easy and the other impossible. These rules let you trade the measurement you cannot make for measurements you can.',
      },
      {
        t: 'p',
        html: `<b>Which rule when: the shape of the information decides.</b><br>• The <b>sine rule</b> pairs each side with the angle opposite it: ${SR}. Use it when your known data comes in an opposite pair: you know a side and its opposite angle, plus one more thing.<br>• The <b>cosine rule</b> links one angle to all three sides: <i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos <i>A</i>. Use it when you have all three sides (and want an angle), or two sides and the angle between them (and want the third side).`,
      },
      {
        t: 'p',
        html: '<b>The cosine rule is Pythagoras with a correction term.</b> Look at <i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos <i>A</i> and set <i>A</i> = 90°. Then cos <i>A</i> = 0 and the whole thing collapses to <i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>: Pythagoras exactly. So the term −2<i>bc</i> cos <i>A</i> is precisely the penalty you pay for the angle not being a right angle. If <i>A</i> is acute, cos <i>A</i> > 0 and <i>a</i><sup>2</sup> < <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>: the opposite side is shorter than Pythagoras would predict, because the triangle has been squeezed. If <i>A</i> is obtuse, cos <i>A</i> < 0, the correction term is positive, and <i>a</i> is longer. <b>The sign of cos <i>A</i> and the sign of <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>a</i><sup>2</sup> are the same thing, which is why the cosine rule can tell an obtuse angle from an acute one and the sine rule cannot.</b>',
      },
      {
        t: 'p',
        html: 'That last clause is the most exam-relevant sentence in this topic. Because sin(180° − <i>ϕ</i>) = sin <i>ϕ</i>, the sine rule returns a value of sin <i>A</i> that fits two angles (one acute, one obtuse) and by itself cannot choose between them. The cosine rule returns cos <i>A</i>, and cosine is negative in exactly one of the two, so it chooses for you.',
      },
      { t: 'fig', id: 'm11-03-fig-3.17' },
      {
        t: 'p',
        html: `<b>The circumcircle turns the ratio into a length.</b> The sine rule says the three ratios are equal, but equal to what? The answer is beautiful: the common value is 2<i>R</i>, the diameter of the circle passing through all three vertices. So<br>${SR} = 2<i>R</i>.<br>This is not a decoration. It converts every side into an angle statement, <i>a</i> = 2<i>R</i> sin <i>A</i>, which is the standard first move in almost every Advanced problem: substitute <i>a</i> = 2<i>R</i> sin <i>A</i>, <i>b</i> = 2<i>R</i> sin <i>B</i>, <i>c</i> = 2<i>R</i> sin <i>C</i> throughout, watch 2<i>R</i> cancel, and you are left with a pure identity in <i>A</i>, <i>B</i>, <i>C</i> with <i>A</i> + <i>B</i> + <i>C</i> = π, exactly the conditional-identity machinery of Topic 05’s Identity master reference part, item (J).`,
      },
      {
        t: 'p',
        html: `<b>Area: three formulas for three kinds of data.</b> The school formula ${H} × base × height is useless in a survey, because nobody measures the height. So the area gets restated in terms of what you actually have: two sides and the included angle give Δ = ${ONE_HALF_AB}; three sides give Heron’s formula; and the circumradius gives Δ = ${ABC4R}. Same quantity, three doors in.`,
      },
      {
        t: 'p',
        html: '<b>Where this fails.</b> Everything here presupposes a genuine triangle: <i>a</i>, <i>b</i>, <i>c</i> positive and satisfying all three triangle inequalities, and <i>A</i> + <i>B</i> + <i>C</i> = π with each angle strictly between 0 and π. Feed the cosine rule three lengths that cannot form a triangle and it will hand you a “cos <i>A</i>” outside [−1, 1], which is the algebra’s way of telling you the triangle does not exist. That is a useful test, not a failure.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Standard notation.</b> Throughout, <i>ABC</i> is a triangle with<br>• <i>a</i> = <i>BC</i>, <i>b</i> = <i>CA</i>, <i>c</i> = <i>AB</i>: each side named by the <b>opposite</b> vertex.<br>• <i>A</i>, <i>B</i>, <i>C</i>: the interior angles at those vertices, with <i>A</i> + <i>B</i> + <i>C</i> = π and 0 < <i>A</i>, <i>B</i>, <i>C</i> < π.<br>• <i>s</i> = ${S_DEF}: the <b>semi-perimeter</b>. Note <i>s</i> − <i>a</i>, <i>s</i> − <i>b</i>, <i>s</i> − <i>c</i> are all strictly positive, by the triangle inequality.<br>• Δ: the <b>area</b>.<br>• <i>R</i>: the <b>circumradius</b> (radius of the circle through <i>A</i>, <i>B</i>, <i>C</i>); <i>r</i>: the <b>inradius</b>.`,
      },
      { t: 'p', html: '<b>(A) Sine rule and the circumradius relation.</b>' },
      {
        t: 'formula',
        kicker: 'Sine rule and the circumradius relation',
        main: `${SR} = 2<i>R</i><br>⟺ <i>a</i> = 2<i>R</i> sin <i>A</i>, <i>b</i> = 2<i>R</i> sin <i>B</i>, <i>c</i> = 2<i>R</i> sin <i>C</i>`,
        legend: [SIDES, ANGLES, '<i>R</i> = the circumradius (radius of the circle through <i>A</i>, <i>B</i>, <i>C</i>)'],
        note: null,
      },
      {
        t: 'p',
        html: '• Valid in every triangle, acute, right or obtuse.<br>• <b>Limitation:</b> because sin <i>θ</i> = sin(π − <i>θ</i>), solving for an angle from this rule leaves an acute/obtuse ambiguity that the rule itself cannot settle.',
      },
      { t: 'p', html: '<b>(B) Cosine rule</b> (three statements, one per angle):' },
      {
        t: 'formula',
        kicker: 'Cosine rule',
        main: '<i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos <i>A</i><br><i>b</i><sup>2</sup> = <i>c</i><sup>2</sup> + <i>a</i><sup>2</sup> − 2<i>ca</i> cos <i>B</i><br><i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − 2<i>ab</i> cos <i>C</i>',
        legend: [SIDES, ANGLES],
        note: null,
      },
      { t: 'p', html: '<b>Rearranged for the angle</b>, this is the form you actually use:' },
      {
        t: 'formula',
        kicker: 'Cosine rule rearranged for the angle',
        main: `cos <i>A</i> = ${COS_A}<br>cos <i>B</i> = ${COS_B}<br>cos <i>C</i> = ${COS_C}`,
        legend: [SIDES, ANGLES],
        note: null,
      },
      {
        t: 'p',
        html: '• The numerator is “the other two squared, minus the opposite one squared”; the denominator is twice the product of the other two.<br>• Its sign is decisive: cos <i>A</i> < 0 ⟺ <i>a</i><sup>2</sup> > <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> ⟺ <i>A</i> is obtuse.',
      },
      { t: 'p', html: '<b>(C) Projection formulae.</b>' },
      {
        t: 'formula',
        kicker: 'Projection formulae',
        main: '<i>a</i> = <i>b</i> cos <i>C</i> + <i>c</i> cos <i>B</i><br><i>b</i> = <i>c</i> cos <i>A</i> + <i>a</i> cos <i>C</i><br><i>c</i> = <i>a</i> cos <i>B</i> + <i>b</i> cos <i>A</i>',
        legend: [SIDES, ANGLES],
        note: null,
      },
      {
        t: 'p',
        html: '• Each side equals the sum of the projections of the other two onto it.<br>• Read the pattern: to build <i>a</i>, use the other two sides, each multiplied by the cosine of the angle at the far end of that side.',
      },
      {
        t: 'table',
        title: '(D) Area formulas',
        head: ['Formula', 'Use it when you know'],
        rows: [
          [
            `Δ = ${ONE_HALF_AB} = ${H}<i>bc</i> sin <i>A</i> = ${H}<i>ca</i> sin <i>B</i>`,
            'two sides and the <b>included</b> angle',
          ],
          [`Δ = ${HERON} (Heron)`, 'all three sides, no angles'],
          [`Δ = ${ABC4R}`, 'three sides and the circumradius, or to find <i>R</i>'],
          ['Δ = <i>rs</i>', 'the inradius'],
          ['Δ = 2<i>R</i><sup>2</sup> sin <i>A</i> sin <i>B</i> sin <i>C</i>', 'the three angles and <i>R</i>'],
        ],
      },
      {
        t: 'p',
        html: `• All five give the same number; choosing the right one is the entire skill.<br>• Δ = ${ABC4R} rearranges to <i>R</i> = ${ABC4D}, which is the fastest way to get the circumradius once Heron has given you the area.`,
      },
      {
        t: 'formula',
        kicker: 'Area of a triangle',
        main: `Δ = ${ONE_HALF_AB} = ${H}<i>bc</i> sin <i>A</i> = ${H}<i>ca</i> sin <i>B</i><br>Δ = ${HERON} (Heron)<br>Δ = ${ABC4R} = <i>rs</i> = 2<i>R</i><sup>2</sup> sin <i>A</i> sin <i>B</i> sin <i>C</i><br><i>R</i> = ${ABC4D}, <i>r</i> = ${fr('Δ', '<i>s</i>')}`,
        legend: [
          'Δ = the area of the triangle',
          SIDES,
          ANGLES,
          `<i>s</i> = the semi-perimeter, ${S_DEF}`,
          '<i>R</i> = the circumradius (radius of the circle through <i>A</i>, <i>B</i>, <i>C</i>)',
          '<i>r</i> = the inradius (radius of the circle touching all three sides)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>(E) Half-angle formulae of a triangle.</b> These express the half-angles purely in terms of the sides.',
      },
      {
        t: 'formula',
        kicker: 'Half-angle formulae of a triangle',
        main: `sin ${A2} = ${SIN_A2}<br>cos ${A2} = ${COS_A2}<br>tan ${A2} = ${TAN_A2}`,
        legend: [
          '<i>A</i> = the angle at the vertex <i>A</i>',
          '<i>a</i>, <i>b</i>, <i>c</i> = the sides opposite <i>A</i>, <i>B</i>, <i>C</i>',
          `<i>s</i> = the semi-perimeter, ${S_DEF}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• <b>No ± is needed here</b>, unlike the general half-angle formulas of Topic 07. Since 0 < <i>A</i> < π, we have 0 < ${A2} < ${half('π')}, so all three are in Quadrant I and positive. Every quantity under the radicals is positive by the triangle inequality.<br>• The formulas for <i>B</i> and <i>C</i> follow by cycling <i>a</i> → <i>b</i> → <i>c</i> → <i>a</i> and <i>A</i> → <i>B</i> → <i>C</i> → <i>A</i>.<br>• Three equivalent forms of the tangent worth knowing: tan ${A2} = ${fr(SMB, 'Δ')} = ${fr('Δ', SSA)} = ${fr('<i>r</i>', '<i>s</i> − <i>a</i>')}.`,
      },
      { t: 'p', html: '<b>(F) Napier’s analogy</b> (the tangent rule, Advanced only):' },
      {
        t: 'formula',
        kicker: 'Napier’s analogy (the tangent rule)',
        main: `tan ${half('<i>B</i> − <i>C</i>')} = ${fr('<i>b</i> − <i>c</i>', '<i>b</i> + <i>c</i>')} cot ${A2}`,
        legend: ['<i>b</i>, <i>c</i> = the sides opposite <i>B</i> and <i>C</i>', '<i>A</i>, <i>B</i>, <i>C</i> = the interior angles of the triangle'],
        note: null,
      },
      {
        t: 'p',
        html: '• Useful when two sides and the included angle are known and you want the other two angles separately.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>Derivation: the sine rule, and why the common ratio is 2<i>R</i></b>' },
      {
        t: 'p',
        html: '<b>Step 1.</b> In triangle <i>ABC</i>, drop the perpendicular <i>CD</i> from <i>C</i> onto line <i>AB</i>, of length <i>h</i>. <b>Reason:</b> an altitude is the standard device for producing right triangles inside a general triangle.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> In right triangle <i>ADC</i>: <i>h</i> = <i>b</i> sin <i>A</i>. In right triangle <i>BDC</i>: <i>h</i> = <i>a</i> sin <i>B</i>. <b>Reason:</b> in a right triangle, the side opposite an angle equals the hypotenuse times the sine of that angle. If <i>A</i> is obtuse the foot <i>D</i> falls outside segment <i>AB</i> and the angle at <i>A</i> in the right triangle is π − <i>A</i>; since sin(π − <i>A</i>) = sin <i>A</i>, the relation is unchanged.',
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Equate: <i>b</i> sin <i>A</i> = <i>a</i> sin <i>B</i>, hence ${fr('<i>a</i>', 'sin <i>A</i>')} = ${fr('<i>b</i>', 'sin <i>B</i>')}. <b>Reason:</b> both expressions equal the same altitude.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Repeat with the altitude from <i>A</i> to get ${fr('<i>b</i>', 'sin <i>B</i>')} = ${fr('<i>c</i>', 'sin <i>C</i>')}, completing the chain. <b>Reason:</b> symmetry of the argument in the three vertices.`,
      },
      {
        t: 'p',
        html: '<b>Step 5: identifying the constant.</b> Draw the circumcircle, centre <i>O</i>, radius <i>R</i>. The chord <i>BC</i> (length <i>a</i>) subtends the angle <i>A</i> at the circumference and therefore the angle 2<i>A</i> at the centre. <b>Reason:</b> the angle-at-the-centre theorem from Class 9 geometry.',
      },
      {
        t: 'p',
        html: `<b>Step 6.</b> Drop the perpendicular from <i>O</i> to <i>BC</i>. It bisects both the chord and the central angle, producing a right triangle with hypotenuse <i>R</i>, opposite angle <i>A</i>, and opposite side ${half('<i>a</i>')}. Hence ${half('<i>a</i>')} = <i>R</i> sin <i>A</i>, i.e.<br>${fr('<i>a</i>', 'sin <i>A</i>')} = 2<i>R</i>.<br><b>Reason:</b> the perpendicular from a centre to a chord bisects it.`,
      },
      {
        t: 'p',
        html: '<b>Step 7.</b> The same construction on the other two sides gives the full statement. <b>Reason:</b> symmetry again. (If <i>A</i> is obtuse, <i>BC</i> subtends 2π − 2<i>A</i> at the centre on the near side, and the half-angle in the right triangle is π − <i>A</i>; since sin(π − <i>A</i>) = sin <i>A</i>, the conclusion is identical.)',
      },
      { t: 'p', html: '<b>Derivation: the cosine rule</b>' },
      {
        t: 'p',
        html: '<b>Step 1.</b> Place <i>A</i> at the origin with <i>AB</i> along the positive <i>x</i>-axis. Then <i>A</i> = (0, 0), <i>B</i> = (<i>c</i>, 0), and <i>C</i> = (<i>b</i> cos <i>A</i>, <i>b</i> sin <i>A</i>). <b>Reason:</b> coordinates are the cleanest route and handle obtuse <i>A</i> without a separate case.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Compute <i>a</i><sup>2</sup> = <i>BC</i><sup>2</sup> by the distance formula:<br><i>a</i><sup>2</sup> = (<i>b</i> cos <i>A</i> − <i>c</i>)<sup>2</sup> + (<i>b</i> sin <i>A</i> − 0)<sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> Expand:<br><i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> cos<sup>2</sup> <i>A</i> − 2<i>bc</i> cos <i>A</i> + <i>c</i><sup>2</sup> + <i>b</i><sup>2</sup> sin<sup>2</sup> <i>A</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 4.</b> Use cos<sup>2</sup> <i>A</i> + sin<sup>2</sup> <i>A</i> = 1:<br><i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos <i>A</i>.<br><b>Reason:</b> the Pythagorean identity of Topic 02 collapses the two squared terms into <i>b</i><sup>2</sup>.',
      },
      {
        t: 'p',
        html: `<b>Step 5.</b> Rearranging gives the working form cos <i>A</i> = ${COS_A}. <b>Reason:</b> this is the direction you almost always need: sides in, angle out.`,
      },
      { t: 'p', html: '<b>Derivation: the projection formulae</b>' },
      {
        t: 'p',
        html: `<b>Step 1.</b> Take the cosine-rule statements for cos <i>B</i> and cos <i>C</i> and substitute into <i>b</i> cos <i>C</i> + <i>c</i> cos <i>B</i>:<br><i>b</i> cos <i>C</i> + <i>c</i> cos <i>B</i> = <i>b</i> · ${COS_C} + <i>c</i> · ${fr('<i>a</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>b</i><sup>2</sup>', '2<i>ac</i>')}.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Cancel <i>b</i> in the first term and <i>c</i> in the second:<br>= ${fr('<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>', '2<i>a</i>')} + ${fr('<i>a</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>b</i><sup>2</sup>', '2<i>a</i>')}.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Add the numerators; <i>b</i><sup>2</sup> and <i>c</i><sup>2</sup> cancel in pairs:<br>= ${fr('2<i>a</i><sup>2</sup>', '2<i>a</i>')} = <i>a</i>.<br><b>Reason:</b> an entirely algebraic proof, valid for acute and obtuse triangles alike: no diagram cases needed. The geometric reading is that the foot of the altitude from <i>A</i> divides <i>BC</i> into segments <i>c</i> cos <i>B</i> and <i>b</i> cos <i>C</i>.`,
      },
      { t: 'p', html: '<b>Derivation: the half-angle formulae and Heron’s formula</b>' },
      {
        t: 'p',
        html: `<b>Step 1.</b> Start from sin<sup>2</sup> ${A2} = ${half('1 − cos <i>A</i>')} (Topic 07’s CBSE board derivations and key procedures part) and substitute the cosine rule:<br>sin<sup>2</sup> ${A2} = ${H}(1 − ${COS_A}) = ${fr('2<i>bc</i> − <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup> + <i>a</i><sup>2</sup>', '4<i>bc</i>')}.`,
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Recognise the numerator as a difference of squares:<br>2<i>bc</i> − <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup> + <i>a</i><sup>2</sup> = <i>a</i><sup>2</sup> − (<i>b</i> − <i>c</i>)<sup>2</sup> = (<i>a</i> − <i>b</i> + <i>c</i>)(<i>a</i> + <i>b</i> − <i>c</i>).<br><b>Reason:</b> <i>b</i><sup>2</sup> − 2<i>bc</i> + <i>c</i><sup>2</sup> = (<i>b</i> − <i>c</i>)<sup>2</sup>; the rest is <i>X</i><sup>2</sup> − <i>Y</i><sup>2</sup> = (<i>X</i> − <i>Y</i>)(<i>X</i> + <i>Y</i>).',
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Convert to semi-perimeter form. Since <i>a</i> + <i>b</i> + <i>c</i> = 2<i>s</i>: <i>a</i> − <i>b</i> + <i>c</i> = 2<i>s</i> − 2<i>b</i> = 2(<i>s</i> − <i>b</i>) and <i>a</i> + <i>b</i> − <i>c</i> = 2<i>s</i> − 2<i>c</i> = 2(<i>s</i> − <i>c</i>). Therefore<br>sin<sup>2</sup> ${A2} = ${fr(`4${SMB}`, '4<i>bc</i>')} = ${fr(SMB, '<i>bc</i>')} ⟹ sin ${A2} = ${SIN_A2}.<br><b>Reason:</b> the positive root is taken because 0 < ${A2} < ${half('π')} in every triangle.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Identically, from cos<sup>2</sup> ${A2} = ${half('1 + cos <i>A</i>')}, the numerator becomes (<i>b</i> + <i>c</i>)<sup>2</sup> − <i>a</i><sup>2</sup> = (<i>b</i> + <i>c</i> − <i>a</i>)(<i>b</i> + <i>c</i> + <i>a</i>) = 2(<i>s</i> − <i>a</i>) · 2<i>s</i>, giving<br>cos ${A2} = ${COS_A2}, and dividing, tan ${A2} = ${TAN_A2}.`,
      },
      {
        t: 'p',
        html: `<b>Step 5: Heron falls out immediately.</b> Take Δ = ${H}<i>bc</i> sin <i>A</i> and expand sin <i>A</i> = 2 sin ${A2} cos ${A2}:<br>Δ = ${H}<i>bc</i> · 2${SIN_A2}${COS_A2} = <i>bc</i> · ${fr(HERON, '<i>bc</i>')}<br><b>Δ = ${HERON}</b><br><b>Reason:</b> the two radicals share the denominator <i>bc</i>, which cancels the leading <i>bc</i> exactly. Heron’s formula is therefore not an independent result: it is the half-angle formulae in disguise.`,
      },
      {
        t: 'proc',
        title: 'Procedure A: the triangle is fully determined, what to compute first',
        steps: [
          '<b>Count what you are given and identify the case.</b> SSS (three sides), SAS (two sides and the included angle), ASA/AAS (two angles and a side), or SSA (two sides and a non-included angle). <b>Why:</b> the case dictates the tool, and choosing wrongly costs minutes.',
          `<b>SSS → cosine rule.</b> Find the <b>largest</b> angle first, using cos = ${fr('other two squared − this one squared', '2 × product')}. <b>Why:</b> only the largest angle can be obtuse, and the cosine rule reports that correctly via a negative value. Once it is known, every remaining angle is acute and the sine rule is safe.`,
          '<b>SAS → cosine rule for the third side</b>, then proceed as SSS. <b>Why:</b> SAS is the case where the cosine rule delivers the missing length in one step.',
          '<b>ASA/AAS → third angle by <i>A</i> + <i>B</i> + <i>C</i> = π, then sine rule</b> for the remaining sides. <b>Why:</b> with all three angles and one side, the sine rule gives each unknown side in one step; no ambiguity can arise because the angles are already fixed.',
          '<b>SSA → treat as ambiguous until proved otherwise.</b> Solve for the angle, then check whether both the acute and the obtuse candidate leave a positive third angle. <b>Why:</b> SSA is the one configuration that can admit two genuinely different triangles.',
          `<b>Finish with the area, and use it as your check.</b> Compute Δ two ways: once by ${ONE_HALF_AB} and once by Heron. <b>Why:</b> they use disjoint pieces of your work, so agreement is strong evidence that no arithmetic slipped.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: proving an identity in a triangle',
        steps: [
          '<b>Look at what the target contains.</b> If it mixes sides and sines, substitute <i>a</i> = 2<i>R</i> sin <i>A</i> everywhere and watch 2<i>R</i> cancel. If it mixes sides and cosines, substitute the cosine rule instead. <b>Why:</b> the goal is to get everything into one language: all sides, or all angles.',
          '<b>If you land in all-angles form, invoke <i>A</i> + <i>B</i> + <i>C</i> = π</b> and use the conditional identities of Topic 05’s Identity master reference part, item (J). <b>Why:</b> an all-angles identity in a triangle is exactly a conditional identity, which the chapter has already built tools for.',
          '<b>If you land in all-sides form, convert to semi-perimeter form</b> using <i>b</i> + <i>c</i> − <i>a</i> = 2(<i>s</i> − <i>a</i>) and its cyclic partners. <b>Why:</b> symmetric expressions in <i>a</i>, <i>b</i>, <i>c</i> almost always simplify once written in <i>s</i> − <i>a</i>, <i>s</i> − <i>b</i>, <i>s</i> − <i>c</i>.',
          `<b>Test your final identity on the equilateral triangle</b> (<i>a</i> = <i>b</i> = <i>c</i>, <i>A</i> = <i>B</i> = <i>C</i> = 60°, <i>R</i> = ${fr('<i>a</i>', '√3')}). <b>Why:</b> a thirty-second numerical check that catches most algebraic slips. It cannot prove an identity, but it can refute one.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'In triangle <i>ABC</i>, <i>a</i> = 3, <i>b</i> = 5, <i>c</i> = 7. Find angle <i>C</i>, the area, and the circumradius <i>R</i>.',
        steps: [
          '<b>Step 1: check the triangle exists.</b> 3 + 5 = 8 > 7, and the other two inequalities are obvious. Good.',
          `<b>Step 2: the largest angle by the cosine rule.</b> Side <i>c</i> = 7 is the largest, so angle <i>C</i> is the largest:<br>cos <i>C</i> = ${COS_C} = ${fr('9 + 25 − 49', '2(3)(5)')} = ${fr('−15', '30')} = −${H}.<br>The value is negative, so <i>C</i> is obtuse:<br><i>C</i> = 120°.`,
          `<b>Step 3: the area, two ways.</b> Using two sides and the included angle:<br>Δ = ${ONE_HALF_AB} = ${H}(3)(5) sin 120° = ${fr('15', '2')} · ${half('√3')} = ${fr('15√3', '4')} ≈ 6.495.<br>Checking by Heron with <i>s</i> = ${half('3 + 5 + 7')} = ${fr('15', '2')}:<br>Δ = √(${fr('15', '2')} · ${fr('9', '2')} · ${fr('5', '2')} · ${H}) = √(${fr('675', '16')}) = ${fr('15√3', '4')}. ✓`,
          `<b>Step 4: the circumradius.</b> From Δ = ${ABC4R}:<br><i>R</i> = ${ABC4D} = ${fr('3 · 5 · 7', `4 · ${fr('15√3', '4')}`)} = ${fr('105', '15√3')} = ${fr('7', '√3')} = ${fr('7√3', '3')} ≈ 4.041.`,
          `Cross-check with the sine rule: ${fr('<i>c</i>', 'sin <i>C</i>')} = ${fr('7', half('√3'))} = ${fr('14', '√3')} = 2<i>R</i>, so <i>R</i> = ${fr('7', '√3')}. ✓`,
        ],
        ans: `<i>C</i> = 120°, Δ = ${fr('15√3', '4')}, <i>R</i> = ${fr('7√3', '3')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In triangle <i>ABC</i>, <i>A</i> = 30°, <i>B</i> = 45° and <i>a</i> = 10. Find <i>b</i>, <i>c</i> and <i>R</i>.',
        steps: [
          '<b>Step 1: third angle.</b> <i>C</i> = 180° − 30° − 45° = 105°.',
          `<b>Step 2: the circumradius first.</b> It is the cheapest quantity available and makes everything else a one-liner:<br>2<i>R</i> = ${fr('<i>a</i>', 'sin <i>A</i>')} = ${fr('10', 'sin 30°')} = ${fr('10', H)} = 20 ⟹ <i>R</i> = 10.`,
          `<b>Step 3: the sides from <i>x</i> = 2<i>R</i> sin <i>X</i>.</b><br><i>b</i> = 2<i>R</i> sin <i>B</i> = 20 sin 45° = 20 · ${half('√2')} = 10√2 ≈ 14.142.<br>For <i>c</i> we need sin 105°. By the compound-angle formula of Topic 05:<br>sin 105° = sin(60° + 45°) = ${half('√3')} · ${half('√2')} + ${H} · ${half('√2')} = ${fr('√6 + √2', '4')}.<br><i>c</i> = 2<i>R</i> sin <i>C</i> = 20 · ${fr('√6 + √2', '4')} = 5(√6 + √2) ≈ 19.319.`,
          `<b>Step 4: verify by computing the area two ways.</b><br>Δ = ${ONE_HALF_AB} = ${H}(10)(14.142)(0.96593) ≈ 68.30,<br>Δ = ${H}<i>ac</i> sin <i>B</i> = ${H}(10)(19.319)(0.70711) ≈ 68.30. ✓`,
          '<b>Note the technique:</b> with all three angles and one side known, going through 2<i>R</i> once is faster than writing three separate sine-rule proportions.',
        ],
        ans: '<i>b</i> = 10√2, <i>c</i> = 5(√6 + √2), <i>R</i> = 10.',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'In triangle <i>ABC</i>, <i>a</i> = 7, <i>b</i> = 8, <i>c</i> = 13. Find angle <i>C</i>.',
        steps: [
          `<b>The trap.</b> Under time pressure, students reach for whichever rule they have just used. Suppose you have already found cos <i>A</i> = ${COS_A} = ${fr('64 + 169 − 49', '2(8)(13)')} = ${fr('184', '208')} = ${fr('23', '26')}, so sin <i>A</i> = √(1 − ${fr('529', '676')}) = ${fr('√147', '26')} = ${fr('7√3', '26')}. Now apply the sine rule:<br>sin <i>C</i> = ${fr('<i>c</i> sin <i>A</i>', '<i>a</i>')} = ${fr('13', '7')} · ${fr('7√3', '26')} = ${half('√3')}.<br>and the pen writes <i>C</i> = 60°. <b>That is the seductive wrong answer, and it is wrong.</b>`,
          `<b>Why it is wrong.</b> sin <i>C</i> = ${half('√3')} is satisfied by <i>C</i> = 60° and by <i>C</i> = 120°. The sine rule cannot tell them apart. Worse, the wrong branch is detectably absurd: <i>c</i> = 13 is the longest side, so <i>C</i> must be the largest angle. With <i>C</i> = 60° we would get <i>A</i> ≈ 27.8° and <i>B</i> ≈ 92.2°, making <i>B</i> the largest angle even though <i>b</i> = 8 < 13 = <i>c</i>. A triangle cannot do that.`,
          `<b>The correct work: use the cosine rule, which reads the sign.</b><br>cos <i>C</i> = ${COS_C} = ${fr('49 + 64 − 169', '2(7)(8)')} = ${fr('−56', '112')} = −${H} ⟹ <i>C</i> = 120°.`,
          `<b>Verification.</b> With <i>C</i> = 120°: Δ = ${ONE_HALF_AB} = ${H}(7)(8)${half('√3')} = 14√3 ≈ 24.249. Heron with <i>s</i> = 14: Δ = √(14 · 7 · 6 · 1) = √588 = 14√3. ✓ And <i>A</i> ≈ 27.80°, <i>B</i> ≈ 32.20°, <i>C</i> = 120° sum to 180°, with the largest angle opposite the largest side. ■`,
          '<b>The rule to carry away:</b> never determine an angle of a triangle from sin alone when that angle could be obtuse. Either use the cosine rule, or find the two smallest angles by the sine rule (they are guaranteed acute) and get the largest by subtraction from 180°.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'In any triangle <i>ABC</i>, prove that <i>a</i> cos <i>A</i> + <i>b</i> cos <i>B</i> + <i>c</i> cos <i>C</i> = 4<i>R</i> sin <i>A</i> sin <i>B</i> sin <i>C</i>.',
        steps: [
          '<b>Step 1: get everything into one language.</b> The left side mixes sides and angles. Substitute <i>a</i> = 2<i>R</i> sin <i>A</i>, <i>b</i> = 2<i>R</i> sin <i>B</i>, <i>c</i> = 2<i>R</i> sin <i>C</i> from the sine rule:<br>LHS = 2<i>R</i>(sin <i>A</i> cos <i>A</i> + sin <i>B</i> cos <i>B</i> + sin <i>C</i> cos <i>C</i>).<br><b>Reason:</b> this is Procedure B Step 1, the standard opening move.',
          `<b>Step 2: recognise the double-angle pattern.</b> Since 2 sin <i>θ</i> cos <i>θ</i> = sin 2<i>θ</i> (Topic 05’s Identity master reference part, item (C)), each bracketed term is ${H} sin 2<i>θ</i>:<br>LHS = 2<i>R</i> · ${H}(sin 2<i>A</i> + sin 2<i>B</i> + sin 2<i>C</i>) = <i>R</i>(sin 2<i>A</i> + sin 2<i>B</i> + sin 2<i>C</i>).`,
          '<b>Step 3: invoke the conditional identity.</b> Because <i>A</i> + <i>B</i> + <i>C</i> = π, Topic 05’s Identity master reference part, item (J) gives<br>sin 2<i>A</i> + sin 2<i>B</i> + sin 2<i>C</i> = 4 sin <i>A</i> sin <i>B</i> sin <i>C</i>.<br><b>Reason:</b> this identity is false for arbitrary angles and true only under the triangle condition, which is exactly the hypothesis we have.',
          '<b>Step 4: conclude.</b><br>LHS = <i>R</i> · 4 sin <i>A</i> sin <i>B</i> sin <i>C</i> = 4<i>R</i> sin <i>A</i> sin <i>B</i> sin <i>C</i> = RHS. ■',
          `<b>Step 5: sanity check on the equilateral triangle.</b> Take <i>A</i> = <i>B</i> = <i>C</i> = 60° and <i>a</i> = <i>b</i> = <i>c</i>, so <i>R</i> = ${fr('<i>a</i>', '2 sin 60°')} = ${fr('<i>a</i>', '√3')}.<br>LHS = 3<i>a</i> cos 60° = ${fr('3<i>a</i>', '2')},   RHS = 4 · ${fr('<i>a</i>', '√3')} (${half('√3')})<sup>3</sup> = 4 · ${fr('<i>a</i>', '√3')} · ${fr('3√3', '8')} = ${fr('3<i>a</i>', '2')}. ✓`,
          '<b>What made this Advanced.</b> Two separate toolkits had to meet: the sine rule to strip the sides out, and a conditional identity that is only available because <i>A</i> + <i>B</i> + <i>C</i> = π. A student who has learned triangle properties in isolation from Topic 05 cannot finish this problem, and a student who has learned the identities without the sine rule cannot start it.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: 'In triangle <i>ABC</i>, <i>a</i> = 13, <i>b</i> = 14, <i>c</i> = 15. Find cos <i>A</i>, the area Δ, and the circumradius <i>R</i>.',
            a: `cos <i>A</i> = ${fr('196 + 225 − 169', '2(14)(15)')} = ${fr('252', '420')} = ${fr('3', '5')}; <i>s</i> = 21, so Δ = √(21 · 8 · 7 · 6) = √7056 = 84; <i>R</i> = ${ABC4D} = ${fr('2730', '336')} = ${fr('65', '8')} = 8.125.`,
          },
          {
            q: 'In triangle <i>ABC</i>, <i>A</i> = 45°, <i>B</i> = 60° and <i>a</i> = 6. Find <i>b</i> and <i>c</i> in exact surd form.',
            a: `<i>C</i> = 75° and 2<i>R</i> = ${fr('6', 'sin 45°')} = 6√2. Then <i>b</i> = 6√2 sin 60° = 3√6 ≈ 7.348 and <i>c</i> = 6√2 · ${fr('√6 + √2', '4')} = 3(√3 + 1) ≈ 8.196.`,
          },
          {
            q: 'Prove the projection formula <i>a</i> = <i>b</i> cos <i>C</i> + <i>c</i> cos <i>B</i>.',
            a: `Substitute cos <i>C</i> = ${COS_C} and cos <i>B</i> = ${fr('<i>a</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>b</i><sup>2</sup>', '2<i>ac</i>')}; the <i>b</i> and <i>c</i> cancel, the numerators add to 2<i>a</i><sup>2</sup>, and the sum is ${fr('2<i>a</i><sup>2</sup>', '2<i>a</i>')} = <i>a</i>.`,
          },
          {
            q: `In triangle <i>ABC</i>, <i>a</i> = 5, <i>b</i> = 6, <i>c</i> = 7. Find tan ${A2} and the area.`,
            a: `<i>s</i> = 9, so <i>s</i> − <i>a</i> = 4, <i>s</i> − <i>b</i> = 3, <i>s</i> − <i>c</i> = 2. tan ${A2} = √(${fr('3 · 2', '9 · 4')}) = √(${fr('1', '6')}) = ${fr('1', '√6')} ≈ 0.408; Δ = √(9 · 4 · 3 · 2) = √216 = 6√6 ≈ 14.697.`,
          },
          {
            q: `Prove that ${fr('cos <i>A</i>', '<i>a</i>')} + ${fr('cos <i>B</i>', '<i>b</i>')} + ${fr('cos <i>C</i>', '<i>c</i>')} = ${fr('<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup>', '2<i>abc</i>')}.`,
            a: `Each term is ${fr('cos <i>A</i>', '<i>a</i>')} = ${fr('<i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>a</i><sup>2</sup>', '2<i>abc</i>')} after multiplying numerator and denominator by <i>a</i>. Adding the three numerators, every square appears twice positively and once negatively, leaving <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> over the common denominator 2<i>abc</i>.`,
          },
          {
            q: 'In triangle <i>ABC</i>, <i>a</i> = 2, <i>b</i> = 3 and <i>C</i> = 60°. Find <i>c</i> and the area.',
            a: `<i>c</i><sup>2</sup> = 4 + 9 − 2(2)(3) cos 60° = 13 − 6 = 7, so <i>c</i> = √7 ≈ 2.646; Δ = ${H}(2)(3) sin 60° = ${half('3√3')} ≈ 2.598.`,
          },
          {
            q: 'Prove that in any triangle, <i>a</i>(sin <i>B</i> − sin <i>C</i>) + <i>b</i>(sin <i>C</i> − sin <i>A</i>) + <i>c</i>(sin <i>A</i> − sin <i>B</i>) = 0.',
            a: 'Substitute <i>a</i> = 2<i>R</i> sin <i>A</i>, <i>b</i> = 2<i>R</i> sin <i>B</i>, <i>c</i> = 2<i>R</i> sin <i>C</i>. Every product sin <i>X</i> sin <i>Y</i> then appears exactly twice with opposite signs, so the whole expression is 0.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `In triangle <i>ABC</i>, the common value of ${SR} is`,
        opts: [
          {
            label: '<i>R</i>',
            nudge: '<b>(A)</b> remembers “circumradius” and stops there, forgetting that the half-chord, not the full chord, equals <i>R</i> sin <i>A</i>.',
          },
          { label: '2<i>R</i>', nudge: null },
          {
            label: half('<i>R</i>'),
            nudge: `<b>(C)</b> writes <i>a</i> = ${half('<i>R</i>')} sin <i>A</i>; an equilateral triangle kills it: <i>R</i> = ${fr('<i>a</i>', '√3')} gives ${half('<i>R</i>')} sin 60° = ${fr('<i>a</i>', '4')}, not <i>a</i>.`,
          },
          {
            label: '4<i>R</i>',
            nudge: `<b>(D)</b> imports the 4<i>R</i> from Δ = ${ABC4R}, where the 4 has an entirely different origin.`,
          },
        ],
        correct: 1,
        solution: `The perpendicular from the circumcentre to <i>BC</i> gives ${half('<i>a</i>')} = <i>R</i> sin <i>A</i>, so ${fr('<i>a</i>', 'sin <i>A</i>')} = 2<i>R</i>.`,
      },
      {
        t: 'mcq',
        q: 'In triangle <i>ABC</i>, <i>a</i> = 7, <i>b</i> = 8, <i>c</i> = 13. Then <i>C</i> equals',
        opts: [
          {
            label: '60°',
            nudge: `<b>(A)</b> is the sine-rule trap of the third worked example of this topic: sin <i>C</i> = ${half('√3')} has two solutions and the acute one was taken by reflex. It is also produced by dropping the minus sign while evaluating ${fr('−56', '112')}.`,
          },
          {
            label: '90°',
            nudge: '<b>(B)</b> assumes the largest side implies a right angle. Testing 49 + 64 = 113 ≠ 169 refutes it in one line.',
          },
          { label: '120°', nudge: null },
          {
            label: '150°',
            nudge: `<b>(D)</b> would need cos <i>C</i> = −${half('√3')}; the student read the table row for ${half('√3')} instead of ${H}.`,
          },
        ],
        correct: 2,
        solution: `cos <i>C</i> = ${fr('49 + 64 − 169', '112')} = −${H}.`,
      },
      {
        t: 'mcq',
        q: 'The area of a triangle with sides 13, 14, 15 is',
        opts: [
          { label: '84', nudge: null },
          {
            label: '105',
            nudge: `<b>(B)</b> is ${H}(14)(15) = 105: treating two of the sides as perpendicular legs. Since 15 is the longest side and 13<sup>2</sup> + 14<sup>2</sup> = 365 ≠ 225 = 15<sup>2</sup>, the triangle is not right-angled.`,
          },
          {
            label: '91',
            nudge: `<b>(C)</b> is ${H}(13)(14) = 91, the same error with a different pair of sides.`,
          },
          {
            label: '168',
            nudge: `<b>(D)</b> is 2 × 84 = 168: the product base × height (14 × 12) with the factor ${H} forgotten.`,
          },
        ],
        correct: 0,
        solution: '<i>s</i> = 21 and Δ = √(21 · 8 · 7 · 6) = 84.',
      },
      {
        t: 'mcq',
        q: `In triangle <i>ABC</i> with semi-perimeter <i>s</i>, tan ${A2} equals`,
        opts: [
          {
            label: `√(${fr(SSA, '<i>bc</i>')})`,
            nudge: `<b>(A)</b> is cos ${A2}: the student wrote down the cosine formula and never divided the sine formula by it.`,
          },
          { label: TAN_A2, nudge: null },
          {
            label: SIN_A2,
            nudge: `<b>(C)</b> is sin ${A2}, chosen by a student who remembered one formula from the family and assumed it was the tangent.`,
          },
          {
            label: `√(${fr(SSA, SMB)})`,
            nudge: `<b>(D)</b> is cot ${A2}, the reciprocal.`,
          },
        ],
        correct: 1,
        solution: `tan ${A2} = sin ${A2} ÷ cos ${A2} = ${SIN_A2} ÷ ${COS_A2} = ${TAN_A2}. Check on the equilateral triangle (<i>s</i> − <i>a</i> = ${half('<i>a</i>')}, <i>s</i> = ${fr('3<i>a</i>', '2')}): <b>(B)</b> gives √(${fr('1', '3')}) = tan 30°, while <b>(A)</b> gives ${half('√3')}, <b>(C)</b> gives ${H} and <b>(D)</b> gives √3.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Determining an obtuse angle with the sine rule.</b> sin <i>C</i> = ${half('√3')} admits 60° and 120°; the sine rule cannot choose. <b>Correction:</b> use the cosine rule for any angle that might be obtuse, since only cos carries the sign that distinguishes them.`,
          '<b>Mismatching a side with the wrong angle.</b> The sine rule pairs <i>a</i> with <i>A</i>, meaning the side and the angle <b>opposite</b> it. Pairing <i>a</i> with <i>B</i> produces confident nonsense. <b>Correction:</b> label the diagram before writing a single equation.',
          `<b>Using ${ONE_HALF_AB} with a non-included angle.</b> The angle must be the one between the two sides named. ${H}<i>ab</i> sin <i>A</i> is not the area. <b>Correction:</b> read the formula as “half, times the two sides that meet at the angle, times the sine of that angle.”`,
          `<b>Perimeter instead of semi-perimeter in Heron.</b> Using <i>a</i> + <i>b</i> + <i>c</i> where <i>s</i> belongs gives a wrong number, not even a fixed multiple of the area (for the 3–4–5 triangle, √(12 · 9 · 8 · 7) ≈ 77.8 instead of 6). <b>Correction:</b> write <i>s</i> = ${S_DEF} as an explicit first line, every time.`,
          `<b>Sign error in the cosine rule numerator.</b> cos <i>A</i> = ${COS_A}: the subtracted square is the one <b>opposite</b> the angle you want. Getting it wrong flips acute and obtuse. <b>Correction:</b> say the sentence “the odd one out is the opposite side” as you write it.`,
          `<b>Attaching a ± to the triangle half-angle formulae.</b> In Topic 07 the ± was essential; here it is wrong. <b>Correction:</b> in a triangle 0 < ${A2} < 90°, so all three half-angle functions are positive and the radical is unambiguous.`,
          '<b>Not checking that the triangle exists.</b> If the data give |cos <i>A</i>| > 1, or if two sides fail to exceed the third, there is no triangle and every subsequent line is void. <b>Correction:</b> run the triangle inequality before any computation.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Given three sides, always solve for the <b>largest</b> angle first. It is the only one that can be obtuse, so once it is settled the sine rule is safe for everything else.<br>• Compute 2<i>R</i> = ${fr('<i>a</i>', 'sin <i>A</i>')} early. With one number in hand, every other side becomes a single multiplication <i>x</i> = 2<i>R</i> sin <i>X</i> instead of a fresh proportion.<br>• <i>R</i> = ${ABC4D} is the fastest circumradius route when Heron has already given you Δ: no angles required at all.<br>• For any identity mixing sides and angles, substitute <i>a</i> = 2<i>R</i> sin <i>A</i> on sight. The 2<i>R</i> almost always cancels, and you are left with a conditional identity in <i>A</i>, <i>B</i>, <i>C</i> that Topic 05’s Identity master reference part, item (J) already handles.<br>• Verify every numerical triangle by computing the area twice, once with ${ONE_HALF_AB} and once with Heron. The two routes share almost no arithmetic, so agreement is a genuine check rather than a repetition.<br>• Keep a single worked triangle in memory as a test bed: 13–14–15 has <i>s</i> = 21, Δ = 84, <i>R</i> = ${fr('65', '8')}, cos <i>A</i> = ${fr('3', '5')}. Any formula you half-remember can be tested against it in seconds.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Notation',
            note: `<i>a</i> = <i>BC</i>, <i>b</i> = <i>CA</i>, <i>c</i> = <i>AB</i>; <i>A</i> + <i>B</i> + <i>C</i> = π; <i>s</i> = ${S_DEF}; Δ = area; <i>R</i> = circumradius; <i>r</i> = inradius.`,
          },
          {
            f: 'Sine rule',
            note: `${SR} = 2<i>R</i>, i.e. <i>a</i> = 2<i>R</i> sin <i>A</i>. Cannot resolve acute vs obtuse.`,
          },
          {
            f: 'Cosine rule',
            note: `<i>a</i><sup>2</sup> = <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − 2<i>bc</i> cos <i>A</i>, so cos <i>A</i> = ${COS_A}. Negative value ⇒ obtuse. This is the rule that decides.`,
          },
          { f: 'Projection', note: '<i>a</i> = <i>b</i> cos <i>C</i> + <i>c</i> cos <i>B</i> (and cyclic).' },
          {
            f: 'Area',
            note: `Δ = ${ONE_HALF_AB} = ${HERON} = ${ABC4R} = <i>rs</i> = 2<i>R</i><sup>2</sup> sin <i>A</i> sin <i>B</i> sin <i>C</i>.`,
          },
          {
            f: 'Circumradius',
            note: `<i>R</i> = ${ABC4D} = ${fr('<i>a</i>', '2 sin <i>A</i>')}. <b>Inradius:</b> <i>r</i> = ${fr('Δ', '<i>s</i>')}.`,
          },
          {
            f: 'Half-angles (all positive, no ± in a triangle)',
            note: `sin ${A2} = ${SIN_A2}, cos ${A2} = ${COS_A2}, tan ${A2} = ${TAN_A2} = ${fr('<i>r</i>', '<i>s</i> − <i>a</i>')}.`,
          },
          {
            f: 'Napier',
            note: `tan ${half('<i>B</i> − <i>C</i>')} = ${fr('<i>b</i> − <i>c</i>', '<i>b</i> + <i>c</i>')} cot ${A2}.`,
          },
          {
            f: 'Case map',
            note: 'SSS → cosine rule (largest angle first). SAS → cosine rule for the third side. ASA/AAS → third angle, then sine rule. SSA → check for two triangles.',
          },
          {
            f: 'Existence test',
            note: 'each of <i>s</i> − <i>a</i>, <i>s</i> − <i>b</i>, <i>s</i> − <i>c</i> must be positive; |cos <i>A</i>| > 1 means no such triangle.',
          },
          {
            f: 'Golden rule',
            note: 'sides in, angle out ⇒ cosine rule. Opposite pair known ⇒ sine rule. Always cross-check the area two ways.',
          },
        ],
        aids: [],
      },

    ],
  },
];
