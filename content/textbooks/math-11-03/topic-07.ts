import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 07: Sub-Multiple Angles and the Half-Angle Family, pp. 243–257
 * of the Class 11 Mathematics Master Reference (October 2026 edition), word for
 * word: the supplement's Subtopic 07. The supplement's heading "Chapter 3:
 * Trigonometric Functions — Supplement" (p. 243) is not copied; the topic's cheat
 * sheet ends at the top of p. 257, where Subtopic 08 begins. The topic opens with
 * its "Exam Relevance:" box as a part of its own, then is split at its Sections 1
 * to 8. Its procedures keep the book's own letters A and B.
 * Figure 3.15 (caption p. 244, drawn p. 245) stands at the end of "Concept
 * intuition", where the book prints its caption; Figure 3.16 (caption p. 249,
 * drawn p. 250) follows the derivation of sin 18° and cos 36°, likewise. Both are
 * redrawn in lib/diagrams/mathematics-11-03.ts. The topic has no unnumbered drawing.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const half = (n: string) => fr(n, '2');
const A2 = half('<i>A</i>');
const X2 = half('<i>x</i>');
const T2 = half('<i>θ</i>');
const R5M = fr('√5 − 1', '4');
const R5P = fr('√5 + 1', '4');
const SIN_T = fr('2<i>t</i>', '1 + <i>t</i><sup>2</sup>');
const COS_T = fr('1 − <i>t</i><sup>2</sup>', '1 + <i>t</i><sup>2</sup>');
const TAN_T = fr('2<i>t</i>', '1 − <i>t</i><sup>2</sup>');
const SIN_RAD = `±√(${half('1 − cos <i>A</i>')})`;
const COS_RAD = `±√(${half('1 + cos <i>A</i>')})`;
const TAN_RAD = `±√(${fr('1 − cos <i>A</i>', '1 + cos <i>A</i>')})`;
const SF1 = fr('sin <i>A</i>', '1 + cos <i>A</i>');
const SF2 = fr('1 − cos <i>A</i>', 'sin <i>A</i>');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 07 · pp. 243–257 ────────────────
  {
    n: '07',
    title: 'Sub-Multiple Angles and the Half-Angle Family',
    kalam: 'You must halve the interval, not the quadrant label.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards lift this pattern almost verbatim from NCERT’s Miscellaneous Exercise on Chapter 3 (Questions 8–10): you are handed cos <i>x</i> (or sin <i>x</i>, or tan <i>x</i>) together with a quadrant, and asked for sin ${X2}, cos ${X2} and tan ${X2}. It is a reliable 3–4 mark question (the book’s estimate from past papers, not official figures) and the marking scheme awards a full step for the sign decision alone. JEE Main uses the same machinery differently: the <i>t</i> = tan ${A2} substitution collapses any rational trigonometric expression or equation into ordinary algebra in <i>t</i>, and it is the standard alternative route through <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i>. JEE Advanced pushes into the pentagon-angle family (sin 18°, cos 36° and their relatives), which are built by turning the sub-multiple relation 5<i>θ</i> = 90° into a quadratic. (NEET does not test mathematics.) The formulas themselves are already in Topic 05’s Identity master reference part, items (D)–(E); what this topic gives you is the missing half: the ± radical forms, and the discipline that decides the sign.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>The Mumbai local tells you the speed, not the direction.</b> Stand on the platform at Dadar and the indicator board tells you a fast train is approaching at 80 km/h. That number is real and useful, but it does not tell you whether the train is Churchgate-bound or Virar-bound. For that you need one extra piece of information: which platform you are standing on.`,
      },
      {
        t: 'p',
        html: `A square root behaves exactly like that board. When you write<br>sin<sup>2</sup> ${A2} = ${half('1 − cos <i>A</i>')},<br>and take the square root, you recover the <b>size</b> of sin ${A2} and nothing else. Squaring destroyed the sign, and no amount of algebra will bring it back. <b>The ± in front of the radical is not decoration and it is not a hedge: it is an honest admission that the algebra has run out, and that the sign must come from geometry instead.</b> The geometry you need is the quadrant in which ${A2} lands.`,
      },
      {
        t: 'p',
        html: `Think about it this way. The double-angle formula cos <i>A</i> = 1 − 2 sin<sup>2</sup> ${A2} is a machine that eats ${A2} and produces <i>A</i>. That machine is not reversible on its own, because it squares its input on the way through: ${A2} and −${A2} (and π − ${A2}, and more) all come out as the same cos <i>A</i>. Running the machine backwards therefore returns a whole family, and the quadrant of ${A2} is the ticket that selects one member of it.`,
      },
      {
        t: 'p',
        html: `<b>The trap that this topic exists to kill.</b> Students read “<i>x</i> lies in the third quadrant” and immediately write “so sine is negative.” That reasoning is about <i>x</i>. You are being asked about ${X2}, which lives somewhere else entirely. If 180° < <i>x</i> < 270°, then halving every part of that inequality gives 90° < ${X2} < 135°: the second quadrant, where sine is positive. <b>You must halve the interval, not the quadrant label.</b>`,
      },
      {
        t: 'p',
        html: `There is a pleasant consequence worth memorising. For any <i>x</i> in the first revolution, 0° < <i>x</i> < 360°, the half-angle satisfies 0° < ${X2} < 180°, so ${X2} can only be in Quadrant I or Quadrant II, and sin ${X2} is therefore always positive. That is a genuine shortcut, but notice its limiting condition: it fails the moment <i>x</i> is allowed past 360°. If 540° < <i>x</i> < 630° (still “third quadrant” by the usual loose phrasing), then 270° < ${X2} < 315°, Quadrant IV, and sin ${X2} is negative. This is why the interval matters and the quadrant label alone does not.`,
      },
      {
        t: 'p',
        html: `<b>Second idea: one dial instead of three.</b> A mixer-grinder with three separate switches is harder to operate than one with a single speed dial. The substitution <i>t</i> = tan ${A2} is that single dial. Set it, and every trigonometric function of <i>A</i> follows:<br>sin <i>A</i> = ${SIN_T}, cos <i>A</i> = ${COS_T}, tan <i>A</i> = ${TAN_T}.<br>Any expression built from sin <i>A</i> and cos <i>A</i> by adding, multiplying and dividing becomes a rational function of the single variable <i>t</i>, and rational functions are algebra, not trigonometry. That is the whole point of the substitution: it converts a trigonometric problem into a polynomial one. Its limiting condition is sharp and you must respect it: tan ${A2} is undefined when ${A2} is an odd multiple of ${half('π')}, that is when <i>A</i> = (2<i>n</i> + 1)π. Those values of <i>A</i> are invisible to the substitution and have to be tested separately.`,
      },
      {
        t: 'p',
        html: `<b>Third idea: halving is what builds the exotic angles.</b> The chapter has so far reached exact values only by adding standard angles (15° = 45° − 30°, 75° = 45° + 30°). Sub-multiple relations open a second door. Because 5 × 18° = 90°, the angle 18° satisfies 2<i>θ</i> = 90° − 3<i>θ</i>, and forcing double-angle to agree with triple-angle produces a quadratic equation in sin <i>θ</i>. Solve it and you get sin 18° = ${R5M} exactly. The √5 is not an accident: 18° and 36° are angles of the regular pentagon and decagon (the decagon’s central angle is 36°, half the pentagon’s 72°), and √5 is the golden ratio’s fingerprint.`,
      },
      { t: 'fig', id: 'm11-03-fig-3.15' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Sub-multiple angle',
        html: `If <i>A</i> is an angle, then ${A2}, ${fr('<i>A</i>', '3')}, ${fr('<i>A</i>', '4')}, … are its sub-multiple angles. This topic is about ${A2}, the case the syllabus actually tests.`,
      },
      { t: 'p', html: `<b>(A) The three ± radical forms.</b> These are the reversed double-angle formulas.` },
      {
        t: 'formula',
        kicker: 'Half-angle radical forms',
        main: `sin ${A2} = ${SIN_RAD}<br>cos ${A2} = ${COS_RAD}<br>tan ${A2} = ${TAN_RAD}`,
        legend: [
          `<i>A</i> = any angle for which cos <i>A</i> is known`,
          `${A2} = the half-angle (its quadrant fixes each sign)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• <i>A</i> is any angle for which cos <i>A</i> is known.<br>• The sign in each formula is chosen <b>independently</b> from the quadrant of ${A2}: not from the quadrant of <i>A</i>, and not the same sign in all three.<br>• The tan form additionally requires cos <i>A</i> ≠ −1 (otherwise the denominator vanishes and tan ${A2} is undefined).`,
      },
      {
        t: 'p',
        html: `<b>(B) The two sign-free forms for tan ${A2}.</b> These carry their own sign automatically and are the safer choice whenever sin <i>A</i> is available.`,
      },
      {
        t: 'formula',
        kicker: 'Sign-free half-angle tangent',
        main: `tan ${A2} = ${SF1} (cos <i>A</i> ≠ −1)<br>tan ${A2} = ${SF2} (sin <i>A</i> ≠ 0)`,
        legend: [`<i>A</i> = the angle (sin <i>A</i> carries the sign)`],
        note: null,
      },
      {
        t: 'p',
        html: `• No ± appears because no squaring was performed: the sign is already carried by sin <i>A</i>.<br>• Use the first when cos <i>A</i> = −1 is not a risk; use the second when sin <i>A</i> = 0 is not a risk. Wherever tan ${A2} is defined, at least one of the two is usable.`,
      },
      {
        t: 'p',
        html: `<b>(C) The power-reduction pair</b> (the same statements read left to right, already in Topic 05’s Identity master reference part, item (D)):`,
      },
      {
        t: 'p',
        html: `1 − cos <i>A</i> = 2 sin<sup>2</sup> ${A2}<br>1 + cos <i>A</i> = 2 cos<sup>2</sup> ${A2}<br>sin <i>A</i> = 2 sin ${A2} cos ${A2}`,
      },
      { t: 'p', html: `<b>(D) The <i>t</i> = tan ${A2} (Weierstrass) substitution.</b>` },
      {
        t: 'p',
        html: `sin <i>A</i> = ${SIN_T}<br>cos <i>A</i> = ${COS_T}<br>tan <i>A</i> = ${TAN_T}<br>where <i>t</i> = tan ${A2}.`,
      },
      {
        t: 'p',
        html: `• Valid for all <i>A</i> ≠ (2<i>n</i> + 1)π, <i>n</i> ∈ ℤ; the tan <i>A</i> form additionally needs <i>t</i><sup>2</sup> ≠ 1.<br>• Two by-products worth remembering: 1 + cos <i>A</i> = ${fr('2', '1 + <i>t</i><sup>2</sup>')} and 1 − cos <i>A</i> = ${fr('2<i>t</i><sup>2</sup>', '1 + <i>t</i><sup>2</sup>')}.`,
      },
      {
        t: 'p',
        html: `<b>(E) Sign table: reading the quadrant of ${A2}.</b> Halve the interval, then read the row.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Interval for <i>A</i>', `Interval for ${A2}`, `Quadrant of ${A2}`, `sin ${A2}`, `cos ${A2}`, `tan ${A2}`],
        rows: [
          ['0° < <i>A</i> < 90°', `0° < ${A2} < 45°`, 'I', '+', '+', '+'],
          ['90° < <i>A</i> < 180°', `45° < ${A2} < 90°`, 'I', '+', '+', '+'],
          ['180° < <i>A</i> < 270°', `90° < ${A2} < 135°`, 'II', '+', '−', '−'],
          ['270° < <i>A</i> < 360°', `135° < ${A2} < 180°`, 'II', '+', '−', '−'],
          ['360° < <i>A</i> < 450°', `180° < ${A2} < 225°`, 'III', '−', '−', '+'],
          ['450° < <i>A</i> < 540°', `225° < ${A2} < 270°`, 'III', '−', '−', '+'],
          ['540° < <i>A</i> < 630°', `270° < ${A2} < 315°`, 'IV', '−', '+', '−'],
          ['630° < <i>A</i> < 720°', `315° < ${A2} < 360°`, 'IV', '−', '+', '−'],
        ],
      },
      {
        t: 'p',
        html: `Read the first four rows together: <b>for <i>A</i> anywhere in (0°, 360°), sin ${A2} > 0 always.</b> Read the last four and you see why that shortcut cannot be promoted to a rule.`,
      },
      { t: 'p', html: `<b>(F) The pentagon family: exact values.</b>` },
      {
        t: 'formula',
        kicker: 'Pentagon family exact values',
        main: `sin 18° = cos 72° = ${R5M}<br>cos 36° = sin 54° = ${R5P}<br>cos 18° = sin 72° = ${fr('√(10 + 2√5)', '4')}<br>sin 36° = cos 54° = ${fr('√(10 − 2√5)', '4')}`,
        legend: [`18° = one fifth of a right angle (5 × 18° = 90°)`],
        note: null,
      },
      {
        t: 'p',
        html: `• Numerically: sin 18° ≈ 0.30902, cos 36° ≈ 0.80902, cos 18° ≈ 0.95106, sin 36° ≈ 0.58779. Always sanity-check a remembered surd against these.<br>• The two headline values differ only in one sign, and that is the whole memory load: ${fr('√5 ∓ 1', '4')}, minus for the smaller angle’s sine.<br>• Two consequences that appear constantly in JEE Advanced (the book’s estimate from past papers, not official figures): sin 18° · cos 36° = ${fr('1', '4')} and cos 36° − sin 18° = ${fr('1', '2')}.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: `<b>Derivation: the ± radical forms for sin ${A2} and cos ${A2}</b>` },
      {
        t: 'p',
        html: `<b>Step 1.</b> Start from the double-angle identity in its sin-only form, proved in Topic 05’s Derivations of the core formulas part, item (c): cos 2<i>θ</i> = 1 − 2 sin<sup>2</sup> <i>θ</i>. <b>Reason:</b> it is the form that contains only the function we want to isolate.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Put <i>θ</i> = ${A2}, so that 2<i>θ</i> = <i>A</i>: cos <i>A</i> = 1 − 2 sin<sup>2</sup> ${A2}. <b>Reason:</b> the substitution is legitimate for every real <i>A</i>, since the identity holds for all <i>θ</i>.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Rearrange: sin<sup>2</sup> ${A2} = ${half('1 − cos <i>A</i>')}. <b>Reason:</b> pure algebra; nothing has been lost yet.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Take square roots: sin ${A2} = ${SIN_RAD}. <b>Reason:</b> for any real <i>u</i>, <i>u</i><sup>2</sup> = <i>k</i> gives <i>u</i> = ±√<i>k</i>. This is the step where the sign information is destroyed, and the ± records that loss honestly.`,
      },
      {
        t: 'p',
        html: `<b>Step 5.</b> Repeat from cos <i>A</i> = 2 cos<sup>2</sup> ${A2} − 1 to get cos ${A2} = ${COS_RAD}, and divide the two results for tan ${A2} = ${TAN_RAD}. <b>Reason:</b> the quotient of the two radical forms is the tangent by definition.`,
      },
      {
        t: 'p',
        html: `<b>Step 6.</b> Recover the sign externally. Locate the interval for ${A2}, read its quadrant, and apply the standard quadrant signs of Topic 02. <b>Reason:</b> the sign is a fact about where the angle sits, and only the geometry knows it.`,
      },
      { t: 'p', html: `<b>Derivation: the sign-free forms for tan ${A2}</b>` },
      {
        t: 'p',
        html: `<b>Step 1.</b> Write 1 − cos <i>A</i> = 2 sin<sup>2</sup> ${A2} and sin <i>A</i> = 2 sin ${A2} cos ${A2}. <b>Reason:</b> the first is Step 3 of the previous derivation, read forwards; the second is the sine double-angle formula.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Divide the first by the second:<br>${SF2} = ${fr(`2 sin<sup>2</sup> ${A2}`, `2 sin ${A2} cos ${A2}`)} = tan ${A2}.<br><b>Reason:</b> the factor 2 sin ${A2} cancels when sin ${A2} ≠ 0; the quotient exists when sin <i>A</i> ≠ 0.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Similarly divide sin <i>A</i> = 2 sin ${A2} cos ${A2} by 1 + cos <i>A</i> = 2 cos<sup>2</sup> ${A2} to get ${SF1} = tan ${A2}. <b>Reason:</b> same cancellation, this time of 2 cos ${A2}, valid whenever cos <i>A</i> ≠ −1.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Observe that no square root was taken anywhere. <b>Reason:</b> therefore no ± is needed; these forms deliver the correct sign by themselves, and that is exactly why they are the safer tool in an examination.`,
      },
      { t: 'p', html: `<b>Derivation: the <i>t</i> = tan ${A2} substitution</b>` },
      {
        t: 'p',
        html: `<b>Step 1.</b> Write sin <i>A</i> = 2 sin ${A2} cos ${A2} and multiply and divide by cos ${A2}:<br>sin <i>A</i> = 2 tan ${A2} cos<sup>2</sup> ${A2} = ${fr('2<i>t</i>', `sec<sup>2</sup> ${A2}`)}.<br><b>Reason:</b> sin <i>θ</i> = tan <i>θ</i> cos <i>θ</i>, and cos<sup>2</sup> <i>θ</i> = ${fr('1', 'sec<sup>2</sup> <i>θ</i>')}.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Use sec<sup>2</sup> ${A2} = 1 + tan<sup>2</sup> ${A2} = 1 + <i>t</i><sup>2</sup> to obtain sin <i>A</i> = ${SIN_T}. <b>Reason:</b> the Pythagorean identity of Topic 02.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> For cosine, start from cos <i>A</i> = cos<sup>2</sup> ${A2} − sin<sup>2</sup> ${A2} = cos<sup>2</sup> ${A2} (1 − <i>t</i><sup>2</sup>) = ${COS_T}. <b>Reason:</b> factor out cos<sup>2</sup> ${A2} and use Step 2’s value for it.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Divide: tan <i>A</i> = ${TAN_T}, which is just the double-angle tangent formula. <b>Reason:</b> consistency check; the substitution is not new mathematics, only new bookkeeping.`,
      },
      { t: 'p', html: `<b>Derivation: sin 18° and cos 36°</b>` },
      {
        t: 'p',
        html: `<b>Step 1.</b> Let <i>θ</i> = 18°. Then 5<i>θ</i> = 90°, so 2<i>θ</i> = 90° − 3<i>θ</i>. <b>Reason:</b> this is the sub-multiple relation that makes 18° special; nothing else about 18° is used.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Take sine of both sides: sin 2<i>θ</i> = sin(90° − 3<i>θ</i>) = cos 3<i>θ</i>. <b>Reason:</b> the cofunction identity of Topic 03.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Expand each side by the double- and triple-angle formulas of Topic 05’s Identity master reference part, items (C) and (F):<br>2 sin <i>θ</i> cos <i>θ</i> = 4 cos<sup>3</sup> <i>θ</i> − 3 cos <i>θ</i> = cos <i>θ</i> (4 cos<sup>2</sup> <i>θ</i> − 3).`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Since <i>θ</i> = 18°, cos <i>θ</i> ≠ 0, so we may cancel cos <i>θ</i>: 2 sin <i>θ</i> = 4 cos<sup>2</sup> <i>θ</i> − 3. <b>Reason:</b> cancellation of a non-zero factor. Stating why it is non-zero is worth a mark.`,
      },
      {
        t: 'p',
        html: `<b>Step 5.</b> Replace cos<sup>2</sup> <i>θ</i> = 1 − sin<sup>2</sup> <i>θ</i> and collect:<br>2 sin <i>θ</i> = 4 − 4 sin<sup>2</sup> <i>θ</i> − 3 ⟹ 4 sin<sup>2</sup> <i>θ</i> + 2 sin <i>θ</i> − 1 = 0.`,
      },
      {
        t: 'p',
        html: `<b>Step 6.</b> Solve the quadratic in sin <i>θ</i>:<br>sin <i>θ</i> = ${fr('−2 ± √(4 + 16)', '8')} = ${fr('−2 ± 2√5', '8')} = ${fr('−1 ± √5', '4')}.`,
      },
      {
        t: 'p',
        html: `<b>Step 7.</b> Reject the negative root. 18° is in Quadrant I, so sin 18° > 0, forcing<br>sin 18° = ${R5M}<br><b>Reason:</b> the quadrant supplies the sign, the same principle as the half-angle radicals, one level up.`,
      },
      {
        t: 'p',
        html: `<b>Step 8.</b> Deduce cos 36° from cos 36° = 1 − 2 sin<sup>2</sup> 18°:<br>cos 36° = 1 − 2 · ${fr('(√5 − 1)<sup>2</sup>', '16')} = 1 − ${fr('6 − 2√5', '8')} = ${fr('2 + 2√5', '8')} = ${R5P}.`,
      },
      { t: 'fig', id: 'm11-03-fig-3.16' },
      {
        t: 'proc',
        title: 'Procedure A: given cos A (or sin A, or tan A) and an interval for A, find the half-angle values',
        steps: [
          `<b>Write the interval for <i>A</i> as an explicit inequality</b>, e.g. 180° < <i>A</i> < 270° or π < <i>A</i> < ${half('3π')}. <b>Why:</b> the phrase “third quadrant” is ambiguous once you leave the first revolution, and the whole question turns on this.`,
          `<b>Divide every part of the inequality by 2</b> to obtain the interval for ${A2}. <b>Why:</b> this, and only this, tells you the quadrant of the half-angle.`,
          `<b>Read off the three signs</b> for sin ${A2}, cos ${A2}, tan ${A2} from that quadrant. Write them down before computing anything. <b>Why:</b> deciding the sign after you see a number invites you to rationalise the wrong one.`,
          `<b>If cos <i>A</i> was not given, compute it</b> from what was, using the quadrant of <i>A</i> (not of ${A2}) to fix its sign. <b>Why:</b> the radical formulas are written in terms of cos <i>A</i> alone.`,
          `<b>Substitute into the radical forms and attach the signs from Step 3.</b> <b>Why:</b> magnitude from algebra, sign from geometry: the two arrive separately.`,
          `<b>Verify with two independent checks:</b> confirm sin<sup>2</sup> ${A2} + cos<sup>2</sup> ${A2} = 1, and confirm that 2 sin ${A2} cos ${A2} reproduces sin <i>A</i> with the correct sign. <b>Why:</b> the second check catches a wrong sign choice, which the first cannot.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: solving a cos θ + b sin θ = c by the t-substitution',
        steps: [
          `<b>Set</b> <i>t</i> = tan ${T2} and substitute cos <i>θ</i> = ${COS_T}, sin <i>θ</i> = ${SIN_T}. <b>Why:</b> it converts the equation into a polynomial one.`,
          `<b>Multiply through by</b> 1 + <i>t</i><sup>2</sup> (never zero) and collect:<br>(<i>a</i> + <i>c</i>) <i>t</i><sup>2</sup> − 2<i>b</i> <i>t</i> + (<i>c</i> − <i>a</i>) = 0.<br><b>Why:</b> 1 + <i>t</i><sup>2</sup> > 0 always, so no roots are gained or lost at this step.`,
          `<b>Check the discriminant.</b> Δ = 4<i>b</i><sup>2</sup> − 4(<i>c</i> + <i>a</i>)(<i>c</i> − <i>a</i>) = 4 (<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>), so real roots exist exactly when <i>c</i><sup>2</sup> ≤ <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>. <b>Why:</b> this reproduces the solvability condition |<i>c</i>| ≤ √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) from Topic 06’s Solution-set reference and root-validity check part, item (E): a reassuring cross-check that the two methods agree.`,
          `<b>Solve for <i>t</i>, then invert</b> using tan ${T2} = <i>t</i> ⇒ ${T2} = <i>n</i>π + tan<sup>−1</sup> <i>t</i> ⇒ <i>θ</i> = 2<i>n</i>π + 2 tan<sup>−1</sup> <i>t</i>, <i>n</i> ∈ ℤ. <b>Why:</b> this is the general solution of tan <i>x</i> = tan <i>α</i> from Topic 06’s Solution-set reference and root-validity check part, item (B), applied to ${T2}.`,
          `<b>Test</b> <i>θ</i> = (2<i>n</i> + 1)π <b>separately.</b> At these angles <i>t</i> is undefined, so the substitution cannot see them. Substituting directly gives <i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = −<i>a</i>, so they are solutions if and only if <i>c</i> = −<i>a</i>. <b>Why:</b> this is the one place the method silently loses roots, and examiners know it.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `If cos <i>x</i> = −${fr('1', '3')} and <i>x</i> lies in the third quadrant, find sin ${X2}, cos ${X2} and tan ${X2}.`,
        steps: [
          `<b>Step 1: the interval.</b> <i>x</i> in the third quadrant means π < <i>x</i> < ${half('3π')} (in the first revolution).`,
          `<b>Step 2: halve it.</b> Dividing throughout by 2:<br>${half('π')} < ${X2} < ${fr('3π', '4')},<br>so ${X2} lies in the <b>second quadrant</b>.`,
          `<b>Step 3: the signs.</b> In Quadrant II: sin ${X2} > 0, cos ${X2} < 0, tan ${X2} < 0.`,
          `<b>Step 4: the magnitudes.</b><br>sin ${X2} = +√(${half('1 − cos <i>x</i>')}) = √(${half(`1 + ${fr('1', '3')}`)}) = √(${half(fr('4', '3'))}) = √(${fr('2', '3')}) = ${fr('√6', '3')}<br>cos ${X2} = −√(${half('1 + cos <i>x</i>')}) = −√(${half(`1 − ${fr('1', '3')}`)}) = −√(${half(fr('2', '3'))}) = −√(${fr('1', '3')}) = −${fr('√3', '3')}<br>tan ${X2} = ${fr(`sin ${X2}`, `cos ${X2}`)} = ${fr(fr('√6', '3'), `−${fr('√3', '3')}`)} = −${fr('√6', '√3')} = −√2`,
          `<b>Step 5: verification.</b> First, sin<sup>2</sup> ${X2} + cos<sup>2</sup> ${X2} = ${fr('2', '3')} + ${fr('1', '3')} = 1. Second, since <i>x</i> is in Quadrant III, sin <i>x</i> = −√(1 − ${fr('1', '9')}) = −${fr('2√2', '3')}, and the sign-free form gives<br>tan ${X2} = ${fr('sin <i>x</i>', '1 + cos <i>x</i>')} = ${fr(`−${fr('2√2', '3')}`, fr('2', '3'))} = −√2,<br>agreeing with Step 4. Two independent routes, one answer.`,
        ],
        ans: `sin ${X2} = ${fr('√6', '3')}, cos ${X2} = −${fr('√3', '3')}, tan ${X2} = −√2. ■`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Solve 3 cos <i>x</i> + 4 sin <i>x</i> = 5 using the substitution <i>t</i> = tan ${X2}.`,
        steps: [
          `<b>Step 1: substitute.</b> With cos <i>x</i> = ${COS_T} and sin <i>x</i> = ${SIN_T}:<br>3 · ${COS_T} + 4 · ${SIN_T} = 5.`,
          `<b>Step 2: clear the denominator.</b> Multiplying by 1 + <i>t</i><sup>2</sup> (which is never zero, so nothing is lost):<br>3 − 3<i>t</i><sup>2</sup> + 8<i>t</i> = 5 + 5<i>t</i><sup>2</sup> ⟹ 8<i>t</i><sup>2</sup> − 8<i>t</i> + 2 = 0 ⟹ 4<i>t</i><sup>2</sup> − 4<i>t</i> + 1 = 0.`,
          `<b>Step 3: solve.</b> This factorises as (2<i>t</i> − 1)<sup>2</sup> = 0, a repeated root: <i>t</i> = ${fr('1', '2')}.`,
          `<b>Step 4: invert.</b> tan ${X2} = ${fr('1', '2')}, so ${X2} = <i>n</i>π + tan<sup>−1</sup> ${fr('1', '2')}, giving<br><i>x</i> = 2<i>n</i>π + 2 tan<sup>−1</sup> ${fr('1', '2')}, <i>n</i> ∈ ℤ.`,
          `<b>Step 5: the excluded angles.</b> At <i>x</i> = (2<i>n</i> + 1)π the substitution is blind. Direct substitution there gives 3(−1) + 4(0) = −3 ≠ 5, so no solutions were lost.`,
          `<b>Step 6: cross-check against the amplitude form.</b> By Topic 05’s Identity master reference part, item (I), 3 cos <i>x</i> + 4 sin <i>x</i> = 5 cos(<i>x</i> − <i>α</i>) with tan <i>α</i> = ${fr('4', '3')}, and the equation forces cos(<i>x</i> − <i>α</i>) = 1, i.e. <i>x</i> = 2<i>n</i>π + tan<sup>−1</sup> ${fr('4', '3')}. The two answers agree because 2 tan<sup>−1</sup> ${fr('1', '2')} = tan<sup>−1</sup> ${fr('4', '3')}: indeed tan(2 tan<sup>−1</sup> ${fr('1', '2')}) = ${fr(`2 · ${fr('1', '2')}`, `1 − ${fr('1', '4')}`)} = ${fr('1', fr('3', '4'))} = ${fr('4', '3')}.`,
          `The repeated root is not a coincidence: <i>c</i> = 5 = √(3<sup>2</sup> + 4<sup>2</sup>) sits exactly at the boundary of solvability, so the discriminant in Procedure B Step 3 is precisely zero. ■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Given cos <i>θ</i> = −${fr('7', '25')} with 180° < <i>θ</i> < 270°, find sin ${T2}.`,
        steps: [
          `<b>The trap.</b> The eye reads “<i>θ</i> is in Quadrant III,” the hand writes “sine is negative there,” and the answer comes out −${fr('4', '5')}. That reasoning applies the quadrant of <i>θ</i> to a question about ${T2}. It is the single most common error in this entire pattern, and it is worth zero marks even though the magnitude is right.`,
          `<b>The correct work.</b><br><b>Step 1.</b> Halve the interval: 180° < <i>θ</i> < 270° ⇒ 90° < ${T2} < 135°. So ${T2} is in <b>Quadrant II</b>, where sine is <b>positive</b>.`,
          `<b>Step 2.</b><br>sin ${T2} = +√(${half('1 − cos <i>θ</i>')}) = √(${half(`1 + ${fr('7', '25')}`)}) = √(${half(fr('32', '25'))}) = √(${fr('16', '25')}) = ${fr('4', '5')}.`,
          `<b>Step 3: verify.</b> Quadrant II also gives cos ${T2} = −√(${half(`1 − ${fr('7', '25')}`)}) = −${fr('3', '5')}. Then cos <i>θ</i> = 1 − 2(${fr('4', '5')})<sup>2</sup> = 1 − ${fr('32', '25')} = −${fr('7', '25')}, as given, and sin <i>θ</i> = 2(${fr('4', '5')})(−${fr('3', '5')}) = −${fr('24', '25')}, correctly negative for Quadrant III. Everything is consistent.`,
          `<b>Seductive wrong answer: −${fr('4', '5')}.</b> It survives the Pythagorean check and the value of cos <i>θ</i>, because both involve only squares, which is exactly why you must run the sin <i>θ</i> = 2 sin ${T2} cos ${T2} check instead.`,
          `<b>The second layer.</b> Suppose the interval had instead been 540° < <i>θ</i> < 630°, with the same cos <i>θ</i> = −${fr('7', '25')}. That is still loosely “the third quadrant,” but halving gives 270° < ${T2} < 315° (Quadrant IV), and now sin ${T2} = −${fr('4', '5')} genuinely is the answer. The quadrant name did not decide it; the interval did.`,
        ],
        ans: `sin ${T2} = ${fr('4', '5')} (and cos ${T2} = −${fr('3', '5')}, tan ${T2} = −${fr('4', '3')}). ■`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that sin 18° = ${R5M}, deduce cos 36°, and hence evaluate sin 18° · cos 36°.`,
        steps: [
          `<b>Step 1: force double-angle to meet triple-angle.</b> Let <i>θ</i> = 18°, so 5<i>θ</i> = 90° and therefore 2<i>θ</i> = 90° − 3<i>θ</i>. Taking sines and using sin(90° − <i>ϕ</i>) = cos <i>ϕ</i>:<br>sin 2<i>θ</i> = cos 3<i>θ</i>.`,
          `<b>Step 2: expand both sides.</b><br>2 sin <i>θ</i> cos <i>θ</i> = 4 cos<sup>3</sup> <i>θ</i> − 3 cos <i>θ</i> = cos <i>θ</i> (4 cos<sup>2</sup> <i>θ</i> − 3).`,
          `<b>Step 3: cancel.</b> cos 18° ≠ 0, so dividing by cos <i>θ</i> is legal:<br>2 sin <i>θ</i> = 4 cos<sup>2</sup> <i>θ</i> − 3 = 4(1 − sin<sup>2</sup> <i>θ</i>) − 3 = 1 − 4 sin<sup>2</sup> <i>θ</i>.`,
          `<b>Step 4: solve the quadratic.</b> Rearranging, 4 sin<sup>2</sup> <i>θ</i> + 2 sin <i>θ</i> − 1 = 0, so<br>sin <i>θ</i> = ${fr('−2 ± √(4 + 16)', '8')} = ${fr('−1 ± √5', '4')}.`,
          `<b>Step 5: choose the root by quadrant.</b> 18° is acute, so sin 18° > 0 and the negative root ${fr('−1 − √5', '4')} is rejected:<br>sin 18° = ${R5M} ≈ 0.30902. ✓`,
          `<b>Step 6: deduce cos 36°.</b> Since 36° = 2 × 18°, use cos 2<i>θ</i> = 1 − 2 sin<sup>2</sup> <i>θ</i>:<br>cos 36° = 1 − 2(${R5M})<sup>2</sup> = 1 − ${fr('2(6 − 2√5)', '16')} = 1 − ${fr('6 − 2√5', '8')} = ${fr('8 − 6 + 2√5', '8')} = ${R5P} ≈ 0.80902. ✓`,
          `<b>Step 7: the product.</b> The two surds are conjugates, so the product collapses:<br>sin 18° · cos 36° = ${R5M} · ${R5P} = ${fr('5 − 1', '16')} = ${fr('4', '16')} = ${fr('1', '4')}. ■`,
          `<b>Why this is an Advanced-level move.</b> Nothing here is pattern-matching. The whole proof rests on spotting that 5<i>θ</i> = 90° can be split as 2<i>θ</i> + 3<i>θ</i>, which is the only reason a double-angle formula and a triple-angle formula can be set equal to each other. Once you see that, the exotic value √5 appears inevitably: it is the discriminant √(4 + 16) of a quadratic you were forced into. The same trick with 7<i>θ</i> = 180° leads to a cubic, not a quadratic, which is precisely why sin 18° is a standard value and sin(${fr('180°', '7')}) is not.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `If sin <i>x</i> = ${fr('1', '4')} and <i>x</i> lies in the second quadrant, find sin ${X2}, cos ${X2} and tan ${X2}.`,
            a: `${X2} lies in Quadrant I (since 90° < <i>x</i> < 180° ⇒ 45° < ${X2} < 90°), so all three are positive. cos <i>x</i> = −${fr('√15', '4')}; sin ${X2} = √(${fr('4 + √15', '8')}) = ${fr('√5 + √3', '4')}, cos ${X2} = √(${fr('4 − √15', '8')}) = ${fr('√5 − √3', '4')}, tan ${X2} = 4 + √15.`,
          },
          {
            q: `If cos <i>θ</i> = ${fr('3', '5')} and 270° < <i>θ</i> < 360°, find sin ${T2}, cos ${T2} and tan ${T2}.`,
            a: `135° < ${T2} < 180°, Quadrant II. sin ${T2} = ${fr('1', '√5')}, cos ${T2} = −${fr('2', '√5')}, tan ${T2} = −${fr('1', '2')}.`,
          },
          {
            q: `If tan ${T2} = ${fr('5', '12')}, find sin <i>θ</i>, cos <i>θ</i> and tan <i>θ</i>.`,
            a: `sin <i>θ</i> = ${fr('120', '169')}, cos <i>θ</i> = ${fr('119', '169')}, tan <i>θ</i> = ${fr('120', '119')}.`,
          },
          {
            q: `Prove that cosec <i>θ</i> − cot <i>θ</i> = tan ${T2}, stating the values of <i>θ</i> for which the statement is meaningful.`,
            a: `cosec <i>θ</i> − cot <i>θ</i> = ${fr('1 − cos <i>θ</i>', 'sin <i>θ</i>')} = tan ${T2}; meaningful for sin <i>θ</i> ≠ 0, i.e. <i>θ</i> ≠ <i>n</i>π.`,
          },
          {
            q: `Prove that ${fr('1 + cos <i>A</i> + sin <i>A</i>', '1 + cos <i>A</i> − sin <i>A</i>')} = tan(${fr('π', '4')} + ${A2}).`,
            a: `Write 1 + cos <i>A</i> = 2 cos<sup>2</sup> ${A2} and sin <i>A</i> = 2 sin ${A2} cos ${A2}; cancel the common factor 2 cos ${A2} to get ${fr(`cos ${A2} + sin ${A2}`, `cos ${A2} − sin ${A2}`)} = ${fr(`1 + tan ${A2}`, `1 − tan ${A2}`)} = tan(${fr('π', '4')} + ${A2}).`,
          },
          {
            q: `Find the exact value of sin 18° + cos 36°.`,
            a: `${R5M} + ${R5P} = ${fr('2√5', '4')} = ${fr('√5', '2')} ≈ 1.11803.`,
          },
          {
            q: `Given sin 18° = ${R5M}, find the exact value of cos 18°.`,
            a: `cos 18° = √(1 − ${fr('6 − 2√5', '16')}) = ${fr('√(10 + 2√5)', '4')} ≈ 0.95106.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `If 180° < <i>θ</i> < 270°, then sin ${T2} is`,
        opts: [
          { label: 'positive', nudge: null },
          {
            label: 'negative',
            nudge: `<b>(B)</b> applies the quadrant of <i>θ</i> instead of the quadrant of ${T2}: the signature error of this topic.`,
          },
          {
            label: 'zero',
            nudge: `<b>(C)</b> confuses the interval’s endpoints with the interval itself; sin ${T2} = 0 would need ${T2} to be a multiple of 180°, which the open interval excludes.`,
          },
          {
            label: 'impossible to determine without cos <i>θ</i>',
            nudge: `<b>(D)</b> assumes the ± can never be resolved. The sign depends only on the interval, never on the value of cos <i>θ</i>.`,
          },
        ],
        correct: 0,
        solution: `Halving gives 90° < ${T2} < 135°, Quadrant II, where sine is positive.`,
      },
      {
        t: 'mcq',
        q: `Wherever both sides are defined, tan ${A2} equals`,
        opts: [
          {
            label: fr('sin <i>A</i>', '1 − cos <i>A</i>'),
            nudge: `<b>(A)</b> is cot ${A2}: the student inverted the correct fraction, a slip that survives every magnitude check.`,
          },
          {
            label: fr('1 + cos <i>A</i>', 'sin <i>A</i>'),
            nudge: `<b>(B)</b> is also cot ${A2}, produced by pairing 1 + cos <i>A</i> = 2 cos<sup>2</sup> ${A2} with sin <i>A</i> in the wrong order.`,
          },
          { label: SF2, nudge: null },
          {
            label: fr('1 − cos <i>A</i>', '1 + cos <i>A</i>'),
            nudge: `<b>(D)</b> is tan<sup>2</sup> ${A2}: the student stopped one step early, before taking the square root of ${fr('1 − cos <i>A</i>', '1 + cos <i>A</i>')}.`,
          },
        ],
        correct: 2,
        solution: `1 − cos <i>A</i> = 2 sin<sup>2</sup> ${A2} and sin <i>A</i> = 2 sin ${A2} cos ${A2}, so ${SF2} = tan ${A2}.`,
      },
      {
        t: 'mcq',
        q: 'sin 18° equals',
        opts: [
          { label: R5M, nudge: null },
          {
            label: R5P,
            nudge: `<b>(B)</b> is cos 36° ≈ 0.809: the two values differ by one sign and are constantly swapped. Guard against it by remembering that sin 18° must be small, since 18° is a small angle.`,
          },
          {
            label: fr('1 − √5', '4'),
            nudge: `<b>(C)</b> is −sin 18°, the right magnitude with the wrong sign; 18° lies in Quadrant I, so its sine must be positive and a one-second sign check kills it.`,
          },
          {
            label: fr('√5 − 1', '2'),
            nudge: `<b>(D)</b> is twice the correct value (≈ 0.618): it comes from simplifying ${fr('−2 + 2√5', '8')} by dividing the numerator by 2 but the denominator by 4.`,
          },
        ],
        correct: 0,
        solution: `Since ${fr('2.236 − 1', '4')} ≈ 0.309 = sin 18°.`,
      },
      {
        t: 'mcq',
        q: `Solving 3 cos <i>x</i> + 4 sin <i>x</i> = 5 by <i>t</i> = tan ${X2} produces`,
        opts: [
          { label: `<i>t</i> = ${fr('1', '2')} as a repeated root`, nudge: null },
          {
            label: '<i>t</i> = 2 as a repeated root',
            nudge: `<b>(B)</b> inverts <i>t</i>, usually by writing cot ${X2} in place of tan ${X2} somewhere in the substitution.`,
          },
          {
            label: 'two distinct real roots',
            nudge: `<b>(C)</b> assumes every quadratic yields two roots. Here the discriminant is 4(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> − <i>c</i><sup>2</sup>) = 4(9 + 16 − 25) = 0: the equation sits exactly at the boundary of solvability.`,
          },
          {
            label: 'no real root',
            nudge: `<b>(D)</b> comes from believing 5 > √(3<sup>2</sup> + 4<sup>2</sup>). In fact √25 = 5 exactly, so a solution exists and is unique modulo 2π.`,
          },
        ],
        correct: 0,
        solution: 'The quadratic is 4<i>t</i><sup>2</sup> − 4<i>t</i> + 1 = (2<i>t</i> − 1)<sup>2</sup> = 0.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Using the quadrant of <i>A</i> to sign the half-angle.</b> “<i>A</i> is in Quadrant III, so sin ${A2} < 0” is wrong. <b>Correction:</b> halve the interval first, then read the quadrant of ${A2}. This is the highest-frequency error in the whole pattern.`,
          `<b>Taking the same sign for all three functions.</b> The three signs are chosen independently. In Quadrant II you need +, −, − respectively. <b>Correction:</b> write the three signs down before you compute any magnitude.`,
          `<b>Trusting the “quadrant name” past one revolution.</b> 180° < <i>A</i> < 270° and 540° < <i>A</i> < 630° are both “Quadrant III,” but their half-angles land in Quadrant II and Quadrant IV. <b>Correction:</b> work with the numeric interval you were actually given, never the label.`,
          `<b>Dropping the ± entirely.</b> Writing sin ${A2} = √(${half('1 − cos <i>A</i>')}) as though it were an identity is false for every <i>A</i> whose half-angle is in Quadrant III or IV. <b>Correction:</b> the ± is part of the formula; only a stated interval may remove it.`,
          `<b>Losing roots with the <i>t</i>-substitution.</b> <i>t</i> = tan ${T2} cannot represent <i>θ</i> = (2<i>n</i> + 1)π. <b>Correction:</b> always test those angles in the original equation before declaring the solution set complete.`,
          `<b>Squaring-only verification.</b> Checking sin<sup>2</sup> + cos<sup>2</sup> = 1 cannot detect a wrong sign, because squares are blind to it. <b>Correction:</b> verify with sin <i>A</i> = 2 sin ${A2} cos ${A2}, which is sign-sensitive.`,
          `<b>Confusing sin 18° with cos 36°.</b> They are ${R5M} and ${R5P}. <b>Correction:</b> 18° is a small angle, so its sine must be small: about 0.31, not 0.81.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• When sin <i>A</i> is available, prefer the sign-free forms tan ${A2} = ${SF1} = ${SF2}. They eliminate the sign decision for the tangent entirely, and in a board answer they save you a paragraph of quadrant argument.<br>• For any <i>A</i> in (0°, 360°), sin ${A2} is positive. That single fact answers a large fraction of board questions on sight (the book’s estimate from past papers, not official figures), but state the halved interval anyway, because the marking scheme rewards it.<br>• The check 2 sin ${A2} cos ${A2} =<sup>?</sup> sin <i>A</i> takes eight seconds and catches a sign mismatch between sin ${A2} and cos ${A2}; the halved interval catches a wrong quadrant.<br>• Reach for the <i>t</i>-substitution whenever an equation is a rational combination of sin <i>θ</i> and cos <i>θ</i> with no obvious factorisation. It never requires insight, only algebra: the ideal fallback when a clever route does not present itself.<br>• sin 18° · cos 36° = ${fr('1', '4')} and cos 36° − sin 18° = ${fr('1', '2')} turn several nasty-looking Advanced expressions into one line. Memorise the pair alongside the values themselves.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `Radical forms (sign from the quadrant of ${A2})`,
            note: `sin ${A2} = ${SIN_RAD},<br>cos ${A2} = ${COS_RAD},<br>tan ${A2} = ${TAN_RAD}.`,
          },
          { f: 'Sign-free tangent (no ± needed)', note: `tan ${A2} = ${SF1} = ${SF2}.` },
          {
            f: 'Sign rule',
            note: `halve the interval, not the quadrant label. 180° < <i>A</i> < 270° ⇒ 90° < ${A2} < 135° (Quadrant II: +, −, −).`,
          },
          { f: 'Free shortcut', note: `0° < <i>A</i> < 360° ⇒ sin ${A2} > 0 always. Fails past one revolution.` },
          {
            f: 'Power reduction',
            note: `1 − cos <i>A</i> = 2 sin<sup>2</sup> ${A2}, 1 + cos <i>A</i> = 2 cos<sup>2</sup> ${A2}, sin <i>A</i> = 2 sin ${A2} cos ${A2}.`,
          },
          {
            f: `<i>t</i> = tan ${A2}`,
            note: `sin <i>A</i> = ${SIN_T}, cos <i>A</i> = ${COS_T}, tan <i>A</i> = ${TAN_T}. Blind to <i>A</i> = (2<i>n</i> + 1)π: test separately.`,
          },
          {
            f: 'Linear equation by <i>t</i>',
            note: `<i>a</i> cos <i>θ</i> + <i>b</i> sin <i>θ</i> = <i>c</i> ⇒ (<i>a</i> + <i>c</i>)<i>t</i><sup>2</sup> − 2<i>bt</i> + (<i>c</i> − <i>a</i>) = 0; real roots iff <i>c</i><sup>2</sup> ≤ <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>; then <i>θ</i> = 2<i>n</i>π + 2 tan<sup>−1</sup> <i>t</i>.`,
          },
          {
            f: 'Pentagon values',
            note: `sin 18° = cos 72° = ${R5M}; cos 36° = sin 54° = ${R5P}; cos 18° = ${fr('√(10 + 2√5)', '4')}; sin 36° = ${fr('√(10 − 2√5)', '4')}.`,
          },
          { f: 'Pentagon consequences', note: `sin 18° cos 36° = ${fr('1', '4')}; cos 36° − sin 18° = ${fr('1', '2')}.` },
          {
            f: 'How sin 18° is built',
            note: `5<i>θ</i> = 90° ⇒ sin 2<i>θ</i> = cos 3<i>θ</i> ⇒ 4 sin<sup>2</sup> <i>θ</i> + 2 sin <i>θ</i> − 1 = 0.`,
          },
          {
            f: 'Golden rule',
            note: 'the radical gives the size, the interval gives the sign. Never let one do the other’s job.',
          },
        ],
        aids: [],
      },
    ],
  },
];
