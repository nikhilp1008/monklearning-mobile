import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 11: Trigonometric Series: Sums in AP and Telescoping Products,
 * pp. 301–315 of the Class 11 Mathematics Master Reference (October 2026 edition),
 * word for word: the "Additional Topics" part's Subtopic 11. It begins on p. 301
 * after Subtopic 10's cheat sheet and its cheat sheet ends at the top of p. 315,
 * where Subtopic 12 begins. The topic opens with its "Exam Relevance:" box as a
 * part of its own, then is split at its Sections 1 to 8.
 * The book's one drawing, its "Figure 3" (the four telescoping rows, p. 303), is
 * the unnumbered drawing m11-03-11-d1, placed where its caption is printed, at the
 * end of "Concept intuition".
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const half = (n: string) => fr(n, '2');
const B2 = half('<i>β</i>');
const NB2 = half('<i>nβ</i>');
const N1B2 = half('(<i>n</i> − 1)<i>β</i>');
const TN = (k: string) => fr(`${k}π`, '13');
const SV = (k: string) => fr(`${k}π`, '7');
const S01 = '∑<sub><i>r</i>=0</sub><sup><i>n</i>−1</sup>';
const AP_FACTOR = fr(`sin(${NB2})`, `sin(${B2})`);
const CASCADE = fr('sin(2<sup><i>n</i></sup><i>θ</i>)', '2<sup><i>n</i></sup> sin <i>θ</i>');
const COS_PROD = 'cos <i>θ</i> · cos 2<i>θ</i> · cos 4<i>θ</i> ⋯ cos(2<sup><i>n</i>−1</sup><i>θ</i>)';
const TAN_SUM = `${S01} 2<sup><i>r</i></sup> tan(2<sup><i>r</i></sup><i>θ</i>) = cot <i>θ</i> − 2<sup><i>n</i></sup> cot(2<sup><i>n</i></sup><i>θ</i>)`;
const SEC_SUM = `∑<sub><i>r</i>=1</sub><sup><i>n</i></sup> ${fr('1', 'cos <i>rθ</i> cos(<i>r</i> + 1)<i>θ</i>')} = ${fr('tan(<i>n</i> + 1)<i>θ</i> − tan <i>θ</i>', 'sin <i>θ</i>')}`;
const SEC_BRIDGE = `tan(<i>r</i> + 1)<i>θ</i> − tan <i>rθ</i> = ${fr('sin <i>θ</i>', 'cos(<i>r</i> + 1)<i>θ</i> cos <i>rθ</i>')}`;
const VANISH = `${S01} cos(<i>a</i> + ${fr('2π<i>r</i>', '<i>n</i>')}) = 0 = ${S01} sin(<i>a</i> + ${fr('2π<i>r</i>', '<i>n</i>')})`;
const P7 = `cos ${SV('')} cos ${SV('2')} cos ${SV('4')}`;
const P16 = `tan ${fr('π', '16')} + 2 tan ${fr('π', '8')} + 4 tan ${fr('π', '4')}`;
const ITEM = (x: string) => `item ${x} of the Key formulas and definitions part`;
const T05 = (x: string) => `Topic 05’s Identity master reference part, item ${x}`;
const T03 = (x: string) => `Topic 03’s Reference tables: standard values, even/odd and allied angles part, item ${x}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 11 · pp. 301–315 ────────────────
  {
    n: '11',
    title: 'Trigonometric Series: Sums in AP and Telescoping Products',
    kalam: 'Never add the terms; find the multiplier that makes neighbours cancel, and read off the two survivors.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is NCERT’s own hidden requirement. Miscellaneous Exercise on Chapter 3 opens with 2 cos ${TN('')} cos ${TN('9')} + cos ${TN('3')} + cos ${TN('5')} = 0 and asks at Question 5 for sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i> + sin 7<i>x</i> = 4 cos <i>x</i> cos 2<i>x</i> sin 4<i>x</i>: both are series problems, and both are standard 4–6 mark board questions (the book’s estimate from past papers, not official figures). JEE Main lifts the same machinery for “find the sum to <i>n</i> terms” and for products such as ${P7}. JEE Advanced uses the telescoping forms (cot <i>θ</i> − tan <i>θ</i> = 2 cot 2<i>θ</i> and its relatives) which convert a sum of <i>n</i> awkward terms into a difference of two. (NEET does not test mathematics.) Topic 05’s Identity master reference part, items (G)–(H), gave you product-to-sum and sum-to-product as identities; this topic turns them into a summation technique, which is a different skill and is examined separately.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>The Diwali lights that cancel.</b> String a line of lamps around a circular courtyard at equal angular spacing and switch them all on. Stand at the centre and ask for the net sideways pull of the light: the sum of the horizontal components. It is zero, and it is zero for a reason that has nothing to do with the individual lamps: with an even count every lamp has an opposite partner that cancels it, and even when the count is odd the cancellation still completes because the directions are equally spread around a full turn.`,
      },
      {
        t: 'p',
        html: `That is the whole of trigonometric series in one image. <b>A sum of sines or cosines whose angles are in arithmetic progression is never evaluated term by term; it is collapsed, by finding a single multiplier that makes consecutive terms cancel.</b> The multiplier is always of the form 2 sin ${B2}, where <i>β</i> is the common difference.`,
      },
      {
        t: 'p',
        html: `<b>Why that multiplier and no other.</b> Take the sum <i>S</i> = cos <i>a</i> + cos(<i>a</i> + <i>β</i>) + cos(<i>a</i> + 2<i>β</i>) + ⋯. Multiply a single term by 2 sin ${B2} and use product-to-sum (${T05('(G)')}):<br>2 sin ${B2} cos(<i>a</i> + <i>rβ</i>) = sin(<i>a</i> + <i>rβ</i> + ${B2}) − sin(<i>a</i> + <i>rβ</i> − ${B2}).<br>Every term has become a difference of two neighbouring sines. When you add them up, the second half of one term destroys the first half of the next, and only the extreme ends survive. This is telescoping, and 2 sin ${B2} is the multiplier that produces it, because its two output angles are exactly half a step either side of the input.`,
      },
      {
        t: 'p',
        html: `<b>Indian-context analogy: the antakshari chain.</b> In a chain of players, each one ends on the syllable the next one must begin with. Whatever happens in the middle, only the very first syllable and the very last one are visible from outside the chain. A telescoping sum is that chain: the interior is entirely internal bookkeeping, and the answer depends only on the two ends.`,
      },
      {
        t: 'p',
        html: `<b>Second idea: the same trick, one level up, for products.</b> For a product of cosines whose angles double each time, multiply by 2 sin <i>θ</i> and cascade the double-angle formula:<br>2 sin <i>θ</i> cos <i>θ</i> = sin 2<i>θ</i>, 2 sin 2<i>θ</i> cos 2<i>θ</i> = sin 4<i>θ</i>, 2 sin 4<i>θ</i> cos 4<i>θ</i> = sin 8<i>θ</i>, …<br>Each cosine is consumed by the sine that the previous step produced. After <i>n</i> steps a single sin(2<sup><i>n</i></sup><i>θ</i>) is left standing. <b>The chapter already used this once, for cos 20° cos 40° cos 80° in the seventh worked example of Topic 05; what was presented there as a clever move is in fact a general formula, and treating it as a formula is what makes it fast.</b>`,
      },
      {
        t: 'p',
        html: `<b>Where this breaks down, and it is examined.</b> The multiplier 2 sin ${B2} is useless when sin ${B2} = 0, that is when <i>β</i> is a multiple of 2π. In that degenerate case every term of the series is identical and the sum is simply <i>n</i> times one term. Similarly the product cascade divides by sin <i>θ</i>, so it says nothing when <i>θ</i> is a multiple of π. Quoting a formula through a zero denominator is the standard way to lose an otherwise correct question.`,
      },
      { t: 'fig', id: 'm11-03-11-d1' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `Throughout, <i>n</i> is a positive integer, <i>a</i> is the first angle and <i>β</i> the common difference of the arithmetic progression of angles.`,
      },
      {
        t: 'p',
        html: `<b>(A) Sums of sines and cosines whose angles are in AP.</b> For <i>β</i> ≠ 2<i>m</i>π (<i>m</i> ∈ ℤ), so that sin ${B2} ≠ 0:`,
      },
      {
        t: 'formula',
        kicker: 'Sums of sines and cosines whose angles are in AP',
        main: `${S01} sin(<i>a</i> + <i>rβ</i>)<br>= ${AP_FACTOR} sin(<i>a</i>\u00a0+\u00a0${N1B2})<br>${S01} cos(<i>a</i> + <i>rβ</i>)<br>= ${AP_FACTOR} cos(<i>a</i>\u00a0+\u00a0${N1B2})`,
        legend: [
          `<i>a</i> = the first angle`,
          `<i>β</i> = the common difference (<i>β</i> not a multiple of 2π)`,
          `<i>n</i> = the number of terms (a positive integer)`,
          `<i>r</i> = the term index (0 to <i>n</i> − 1)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• The two formulas are identical except for the trailing function. Both carry <i>n</i> terms, indexed <i>r</i> = 0 to <i>r</i> = <i>n</i> − 1; if a question indexes from <i>r</i> = 1, shift <i>a</i> by <i>β</i> first.<br>• <i>a</i> + ${N1B2} is the <b>average of the first and last angles</b>. That is the memory hook: the answer is a scaled sine (or cosine) of the mean angle.<br>• <b>Degenerate case:</b> if <i>β</i> = 2<i>m</i>π then every term equals the first, and the sum is <i>n</i> sin <i>a</i> (or <i>n</i> cos <i>a</i>). The formula must not be quoted here.<br>• <b>The vanishing case:</b> if ${NB2} is a multiple of π but ${B2} is not, the numerator is zero and the whole sum is zero. In particular, for <i>n</i> ≥ 2,`,
      },
      {
        t: 'formula',
        kicker: 'The vanishing case',
        main: VANISH,
        legend: [
          `<i>a</i> = any first angle`,
          `<i>n</i> = the number of terms (<i>n</i> ≥ 2)`,
          `<i>r</i> = the term index (0 to <i>n</i> − 1)`,
        ],
        note: null,
      },
      { t: 'p', html: `which is the Diwali-lights fact of the Concept intuition part made precise.` },
      { t: 'p', html: `<b>(B) The doubling product (cascade formula).</b> For sin <i>θ</i> ≠ 0:` },
      {
        t: 'formula',
        kicker: 'The doubling product (cascade formula)',
        main: `${COS_PROD} = ${CASCADE}`,
        legend: [`<i>θ</i> = the first angle (sin <i>θ</i> ≠ 0)`, `<i>n</i> = the number of cosine factors`],
        note: null,
      },
      {
        t: 'p',
        html: `• <i>n</i> factors, angles doubling each time. The exponent in 2<sup><i>n</i></sup> counts the factors, not the last angle.<br>• The sign of the answer is decided by ${fr('sin(2<sup><i>n</i></sup><i>θ</i>)', 'sin <i>θ</i>')} and is <b>not</b> always positive. With <i>θ</i> = 20° and <i>n</i> = 3: sin 160° = sin 20°, giving +${fr('1', '8')}. With <i>θ</i> = ${SV('')} and <i>n</i> = 3: sin ${SV('8')} = −sin ${SV('')}, giving −${fr('1', '8')}.`,
      },
      { t: 'p', html: `<b>(C) Telescoping with the tangent–cotangent bridge.</b> The identity` },
      {
        t: 'formula',
        kicker: 'The tangent–cotangent bridge',
        main: `cot <i>θ</i> − tan <i>θ</i> = 2 cot 2<i>θ</i> ⟺ tan <i>θ</i> = cot <i>θ</i> − 2 cot 2<i>θ</i>`,
        legend: [`<i>θ</i> = any angle with sin 2<i>θ</i> ≠ 0`],
        note: null,
      },
      { t: 'p', html: `(valid whenever sin 2<i>θ</i> ≠ 0) telescopes on doubling angles:` },
      {
        t: 'formula',
        kicker: 'Telescoping with the tangent–cotangent bridge',
        main: TAN_SUM,
        legend: [
          `<i>θ</i> = the first angle (sin(2<sup><i>n</i></sup><i>θ</i>) ≠ 0)`,
          `<i>n</i> = the number of terms`,
          `<i>r</i> = the term index (0 to <i>n</i> − 1)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• The sum holds whenever sin(2<sup><i>n</i></sup><i>θ</i>) ≠ 0, which makes every term defined (sin 2<i>θ</i> ≠ 0 is not enough: <i>θ</i> = ${fr('π', '8')}, <i>n</i> = 3 fails).<br>• The classical examination form writes the last term on the left as a cotangent: tan <i>θ</i> + 2 tan 2<i>θ</i> + 4 tan 4<i>θ</i> + 8 cot 8<i>θ</i> = cot <i>θ</i>, which is the case <i>n</i> = 3 with 8 cot 8<i>θ</i> moved across.<br>• Choosing <i>θ</i> so that 2<sup><i>n</i></sup><i>θ</i> = ${half('π')} kills the second term entirely, because cot ${half('π')} = 0.`,
      },
      { t: 'p', html: `<b>(D) Telescoping with the secant bridge.</b> For sin <i>θ</i> ≠ 0 and every cosine non-zero:` },
      {
        t: 'formula',
        kicker: 'Telescoping with the secant bridge',
        main: `${SEC_BRIDGE}<br>⟹ ${SEC_SUM}`,
        legend: [
          `<i>θ</i> = the common step (sin <i>θ</i> ≠ 0 and every cos <i>rθ</i> ≠ 0)`,
          `<i>n</i> = the number of terms`,
          `<i>r</i> = the term index (1 to <i>n</i>)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• The bridge is just tan <i>A</i> − tan <i>B</i> = ${fr('sin(<i>A</i> − <i>B</i>)', 'cos <i>A</i> cos <i>B</i>')}, which is the tangent difference formula (${T05('(A)')}) written over a common denominator.<br>• The companion for cotangents is cot <i>A</i> − cot <i>B</i> = ${fr('sin(<i>B</i> − <i>A</i>)', 'sin <i>A</i> sin <i>B</i>')}.`,
      },
      {
        t: 'p',
        html: `<b>(E) The pairing shortcut for short sums.</b> For four or fewer terms it is usually quicker to pair the outermost terms with sum-to-product than to invoke item (A):<br>sin <i>x</i> + sin 7<i>x</i> = 2 sin 4<i>x</i> cos 3<i>x</i>, sin 3<i>x</i> + sin 5<i>x</i> = 2 sin 4<i>x</i> cos <i>x</i>,<br>so sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i> + sin 7<i>x</i> = 2 sin 4<i>x</i> (cos 3<i>x</i> + cos <i>x</i>) = 4 sin 4<i>x</i> cos 2<i>x</i> cos <i>x</i>, which is NCERT’s Miscellaneous Question 5, done in two lines.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: `<b>Derivation: the sum of <i>n</i> cosines in arithmetic progression</b>` },
      {
        t: 'p',
        html: `<b>Step 1.</b> Write <i>S</i> = ${S01} cos(<i>a</i> + <i>rβ</i>) and assume sin ${B2} ≠ 0. <b>Reason:</b> the multiplier we are about to use is 2 sin ${B2}, and multiplying by zero destroys the information.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Multiply both sides by 2 sin ${B2}:<br>2 sin ${B2} <i>S</i> = ${S01} 2 sin ${B2} cos(<i>a</i> + <i>rβ</i>).<br><b>Reason:</b> we may multiply an equation by a non-zero constant, and this particular constant is chosen because it is the one that produces a difference of neighbouring sines.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Apply 2 cos <i>A</i> sin <i>B</i> = sin(<i>A</i> + <i>B</i>) − sin(<i>A</i> − <i>B</i>) (${T05('(G)')}) to each term, with <i>A</i> = <i>a</i> + <i>rβ</i> and <i>B</i> = ${B2}:<br>2 sin ${B2} cos(<i>a</i> + <i>rβ</i>) = sin(<i>a</i> + <i>rβ</i> + ${B2}) − sin(<i>a</i> + <i>rβ</i> − ${B2}).<br><b>Reason:</b> product-to-sum is the only tool that converts a product into a difference, and a difference is what telescoping needs.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Write out the terms for <i>r</i> = 0, 1, …, <i>n</i> − 1 and observe the cancellation:<br>[sin(<i>a</i> + ${B2}) − sin(<i>a</i> − ${B2})] + [sin(<i>a</i> + ${half('3<i>β</i>')}) − sin(<i>a</i> + ${B2})] + ⋯<br>Every positive entry is destroyed by the negative entry of the next bracket. <b>Reason:</b> the <i>r</i>-th positive angle <i>a</i> + <i>rβ</i> + ${B2} equals the (<i>r</i> + 1)-th negative angle <i>a</i> + (<i>r</i> + 1)<i>β</i> − ${B2} exactly.`,
      },
      {
        t: 'p',
        html: `<b>Step 5.</b> Only the two ends survive:<br>2 sin ${B2} <i>S</i> = sin(<i>a</i> + (<i>n</i> − 1)<i>β</i> + ${B2}) − sin(<i>a</i> − ${B2}) = sin(<i>a</i> + ${half('(2<i>n</i> − 1)<i>β</i>')}) − sin(<i>a</i> − ${B2}).<br><b>Reason:</b> the largest positive angle and the smallest negative angle have no partners.`,
      },
      {
        t: 'p',
        html: `<b>Step 6.</b> Convert that difference back into a product by sin <i>C</i> − sin <i>D</i> = 2 cos ${half('<i>C</i> + <i>D</i>')} sin ${half('<i>C</i> − <i>D</i>')} (${T05('(H)')}). With <i>C</i> = <i>a</i> + ${half('(2<i>n</i> − 1)<i>β</i>')} and <i>D</i> = <i>a</i> − ${B2}:<br>${half('<i>C</i> + <i>D</i>')} = <i>a</i> + ${N1B2}, ${half('<i>C</i> − <i>D</i>')} = ${NB2},<br>so 2 sin ${B2} <i>S</i> = 2 cos(<i>a</i> + ${N1B2}) sin(${NB2}). <b>Reason:</b> sum-to-product is the exact inverse of Step 3 and returns the answer to closed form.`,
      },
      {
        t: 'p',
        html: `<b>Step 7.</b> Divide by 2 sin ${B2}:<br><i>S</i> = ${AP_FACTOR} cos(<i>a</i> + ${N1B2}).<br><b>Reason:</b> legitimate because of the Step 1 assumption. The sine version is identical with cos replaced by sin throughout, because Step 3 would instead use 2 sin <i>A</i> sin <i>B</i> = cos(<i>A</i> − <i>B</i>) − cos(<i>A</i> + <i>B</i>) and Step 6 the cosine-difference formula.`,
      },
      {
        t: 'p',
        html: `<b>Step 8: check on a case you already know.</b> Take <i>a</i> = <i>x</i>, <i>β</i> = 2<i>x</i>, <i>n</i> = 4 in the sine version: the factor is ${fr('sin 4<i>x</i>', 'sin <i>x</i>')} and the trailing sine is sin(<i>x</i> + 3<i>x</i>) = sin 4<i>x</i>, giving ${fr('sin<sup>2</sup> 4<i>x</i>', 'sin <i>x</i>')}. Since ${fr('sin 4<i>x</i>', 'sin <i>x</i>')} = ${fr('2 sin 2<i>x</i> cos 2<i>x</i>', 'sin <i>x</i>')} = 4 cos <i>x</i> cos 2<i>x</i>, this equals 4 cos <i>x</i> cos 2<i>x</i> sin 4<i>x</i>: NCERT’s Miscellaneous Question 5 exactly. <b>Reason:</b> a formula that reproduces a known result on the first try is a formula you can use under pressure.`,
      },
      { t: 'p', html: `<b>Derivation: the doubling product cos <i>θ</i> cos 2<i>θ</i> ⋯ cos(2<sup><i>n</i>−1</sup><i>θ</i>)</b>` },
      {
        t: 'p',
        html: `<b>Step 1.</b> Let <i>P</i> denote the product and assume sin <i>θ</i> ≠ 0. <b>Reason:</b> the multiplier is 2<sup><i>n</i></sup> sin <i>θ</i>, and it must be non-zero.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Multiply by 2 sin <i>θ</i> and use 2 sin <i>ϕ</i> cos <i>ϕ</i> = sin 2<i>ϕ</i> on the first two factors only:<br>2 sin <i>θ</i> · <i>P</i> = (2 sin <i>θ</i> cos <i>θ</i>) cos 2<i>θ</i> cos 4<i>θ</i> ⋯ = sin 2<i>θ</i> · cos 2<i>θ</i> cos 4<i>θ</i> ⋯<br><b>Reason:</b> the double-angle formula of ${T05('(C)')} consumes one cosine and produces a sine whose angle matches the next cosine, which is what allows the cascade to continue.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Multiply by 2 again and repeat: 4 sin <i>θ</i> <i>P</i> = (2 sin 2<i>θ</i> cos 2<i>θ</i>) cos 4<i>θ</i> ⋯ = sin 4<i>θ</i> cos 4<i>θ</i> ⋯. <b>Reason:</b> the situation after Step 2 is structurally identical to the situation before it, with <i>θ</i> replaced by 2<i>θ</i> and one fewer factor.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> After <i>n</i> such steps every cosine has been consumed:<br>2<sup><i>n</i></sup> sin <i>θ</i> · <i>P</i> = sin(2<sup><i>n</i></sup><i>θ</i>).<br><b>Reason:</b> each step doubles the accumulated power of 2 and eliminates exactly one cosine, and there are <i>n</i> cosines.`,
      },
      {
        t: 'p',
        html: `<b>Step 5.</b> Divide: <i>P</i> = ${CASCADE}. <b>Reason:</b> Step 1’s assumption. Note that the result can be negative: nothing in the derivation forces a sign.`,
      },
      {
        t: 'proc',
        title: 'Procedure A: recognising and summing a trigonometric series',
        steps: [
          `<b>Check whether the angles are in AP.</b> List them and take differences. <b>Why:</b> if the common difference is constant, ${ITEM('(A)')} applies verbatim; if the angles double, you want ${ITEM('(B) or (C)')} instead.`,
          `<b>If the series has four terms or fewer, pair the outermost terms</b> with sum-to-product rather than invoking the general formula. <b>Why:</b> the pairing route takes two lines, factors out a common term, and usually produces the exact product form the question demands.`,
          `<b>If the series is long or has <i>n</i> terms, quote ${ITEM('(A)')}</b> with <i>a</i> = first angle, <i>β</i> = common difference, <i>n</i> = number of terms. <b>Why:</b> the general formula is the only route that handles a symbolic <i>n</i>.`,
          `<b>Before quoting, verify sin ${B2} ≠ 0.</b> <b>Why:</b> the degenerate case <i>β</i> = 2<i>m</i>π gives <i>n</i> copies of the first term, and quoting the formula there is a division by zero.`,
          `<b>If the angles double rather than increase by a constant, look for a cascade.</b> Products of cosines go to ${ITEM('(B)')}; sums of tangents with a factor 2<sup><i>r</i></sup> go to item (C); sums of reciprocals of cosine products go to item (D). <b>Why:</b> these three are the telescoping patterns the syllabus tests most, and each has a distinctive fingerprint.`,
          `<b>Check numerically at one convenient value.</b> <b>Why:</b> a closed-form answer is either right or badly wrong, and one substitution distinguishes the two. This is especially worth doing when a sign could have slipped.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: forcing a telescope when no formula fits',
        steps: [
          `Write the general term <i>T</i><sub><i>r</i></sub> and try to express it as <i>f</i>(<i>r</i> + 1) − <i>f</i>(<i>r</i>) for some function <i>f</i>. <b>Why:</b> if you can, the sum is <i>f</i>(<i>n</i> + 1) − <i>f</i>(1) and the problem is over.`,
          `For a <b>product</b> of two trigonometric factors whose arguments differ by <i>β</i>, multiply and divide by 2 sin ${B2}: half the gap between the arguments. <b>Why:</b> this is precisely what the derivation of ${ITEM('(A)')} did, and it works whenever the arguments differ by a constant.`,
          `For <b>tangents at doubling angles</b>, use tan <i>θ</i> = cot <i>θ</i> − 2 cot 2<i>θ</i>. <b>Why:</b> it is the rearrangement that expresses a tangent as a difference of cotangents at the two relevant angles.`,
          `For a <b>reciprocal of a product of two cosines</b>, use ${fr('sin <i>θ</i>', 'cos <i>A</i> cos <i>B</i>')} = tan <i>A</i> − tan <i>B</i> when <i>A</i> − <i>B</i> = <i>θ</i>. <b>Why:</b> the numerator you need can always be manufactured by multiplying and dividing by sin <i>θ</i> (sin <i>θ</i> ≠ 0).`,
          `Write out the first two and the last two terms explicitly before cancelling. <b>Why:</b> the commonest telescoping error is being off by one term at an end, and writing four terms makes the pattern of survivors visible.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Prove that 2 cos ${TN('')} cos ${TN('9')} + cos ${TN('3')} + cos ${TN('5')} = 0. (NCERT, Miscellaneous Exercise on Chapter 3, Question 1.)`,
        steps: [
          `<b>Step 1: flatten the product.</b> By 2 cos <i>A</i> cos <i>B</i> = cos(<i>A</i> + <i>B</i>) + cos(<i>A</i> − <i>B</i>) with <i>A</i> = ${TN('')}, <i>B</i> = ${TN('9')}:<br>2 cos ${TN('')} cos ${TN('9')} = cos ${TN('10')} + cos(−${TN('8')}) = cos ${TN('10')} + cos ${TN('8')},<br>using that cosine is even (${T03('(B)')}).`,
          `<b>Step 2: the whole left side is now a sum of four cosines.</b><br>LHS = cos ${TN('10')} + cos ${TN('8')} + cos ${TN('3')} + cos ${TN('5')}.`,
          `<b>Step 3: pair by supplementary angles.</b> Note that ${TN('10')} + ${TN('3')} = π and ${TN('8')} + ${TN('5')} = π. By the allied-angle rule cos(π − <i>ϕ</i>) = −cos <i>ϕ</i> (${T03('(C)')}):<br>cos ${TN('10')} = −cos ${TN('3')}, cos ${TN('8')} = −cos ${TN('5')}.`,
          `<b>Step 4: cancel.</b><br>LHS = −cos ${TN('3')} + (−cos ${TN('5')}) + cos ${TN('3')} + cos ${TN('5')} = 0. ■`,
          `<b>Numerical check.</b> 2(0.97094)(−0.56806) + 0.74851 + 0.35460 = −1.10311 + 1.10311 = 0 to five decimal places. Verified.`,
          `<b>The lesson.</b> The whole problem is Step 1: the product must be flattened into single-angle cosines before any structure is visible. Once flattened, the four angles pair off as supplements of each other, and the answer follows without a single value being computed. Flatten first; look for structure second.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the sum of <i>n</i> terms of the series cos <i>θ</i> + cos 3<i>θ</i> + cos 5<i>θ</i> + ⋯, and hence evaluate it for <i>θ</i> = ${fr('π', '6')}, <i>n</i> = 3.`,
        steps: [
          `<b>Step 1: identify the AP.</b> First angle <i>a</i> = <i>θ</i>; the angles increase by <i>β</i> = 2<i>θ</i>; there are <i>n</i> terms. Check the third angle: <i>θ</i> + 2(2<i>θ</i>) = 5<i>θ</i>. Correct.`,
          `<b>Step 2: check the degenerate condition.</b> We need sin ${B2} = sin <i>θ</i> ≠ 0, so assume <i>θ</i> ≠ <i>m</i>π.`,
          `<b>Step 3: quote ${ITEM('(A)')}.</b><br><i>S</i> = ${fr(`sin(${half('<i>n</i> · 2<i>θ</i>')})`, `sin(${half('2<i>θ</i>')})`)} cos(<i>θ</i> + ${half('(<i>n</i> − 1)2<i>θ</i>')}) = ${fr('sin <i>nθ</i>', 'sin <i>θ</i>')} cos(<i>θ</i> + (<i>n</i> − 1)<i>θ</i>) = ${fr('sin <i>nθ</i> cos <i>nθ</i>', 'sin <i>θ</i>')}.`,
          `<b>Step 4: tidy with the double angle.</b> Since sin <i>nθ</i> cos <i>nθ</i> = ${fr('1', '2')} sin 2<i>nθ</i>,<br><i>S</i> = ${fr('sin 2<i>nθ</i>', '2 sin <i>θ</i>')}.`,
          `<b>Step 5: evaluate at <i>θ</i> = ${fr('π', '6')}, <i>n</i> = 3.</b> The series is cos ${fr('π', '6')} + cos ${fr('π', '2')} + cos ${fr('5π', '6')} = ${fr('√3', '2')} + 0 − ${fr('√3', '2')} = 0, and the formula gives<br><i>S</i> = ${fr('sin π', `2 sin ${fr('π', '6')}`)} = ${fr('0', '1')} = 0. ✓`,
          `<b>Note the shape of the answer.</b> The mean of the first and last angles is ${half('<i>θ</i> + (2<i>n</i> − 1)<i>θ</i>')} = <i>nθ</i>, which is exactly the argument of the trailing cosine in Step 3. Recognising that lets you write Step 3 straight down without substituting into the formula letter by letter.`,
        ],
        ans: `cos <i>θ</i> + cos 3<i>θ</i> + ⋯ + cos(2<i>n</i> − 1)<i>θ</i> = ${fr('sin 2<i>nθ</i>', '2 sin <i>θ</i>')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Evaluate ${P7}.`,
        steps: [
          `<b>The trap.</b> Every student has met cos 20° cos 40° cos 80° = ${fr('1', '8')} (Topic 05, seventh worked example). The angles here also double, there are also three of them, and the pattern-match fires: the pen writes ${fr('1', '8')}. The magnitude is right and <b>the sign is wrong</b>.`,
          `<b>Why.</b> Use the cascade formula of ${ITEM('(B)')} with <i>θ</i> = ${SV('')} and <i>n</i> = 3:<br>${P7} = ${fr(`sin(2<sup>3</sup> · ${SV('')})`, `2<sup>3</sup> sin ${SV('')}`)} = ${fr(`sin ${SV('8')}`, `8 sin ${SV('')}`)}.`,
          `Now reduce sin ${SV('8')}. Since ${SV('8')} = π + ${SV('')} lies in the third quadrant, sin ${SV('8')} = −sin ${SV('')} (${T03('(C)')}). Therefore<br>${P7} = ${fr(`−sin ${SV('')}`, `8 sin ${SV('')}`)} = −${fr('1', '8')}.`,
          `<b>Why the familiar case came out positive.</b> With <i>θ</i> = 20° and <i>n</i> = 3 the final angle is 2<sup>3</sup> · 20° = 160° = 180° − 20°, which lies in the second quadrant, where sine is positive: sin 160° = +sin 20°, and the ratio is +${fr('1', '8')}. The two problems differ by nothing except which quadrant 2<sup><i>n</i></sup><i>θ</i> lands in, and that single fact flips the answer.`,
          `<b>Verification without the formula.</b> cos ${SV('')} ≈ 0.90097, cos ${SV('2')} ≈ 0.62349, cos ${SV('4')} ≈ −0.22252. The product is ≈ −0.12500. The negative sign was visible from the start: ${SV('4')} exceeds ${fr('π', '2')}, so one factor is negative and the product of three factors must be negative.`,
          `<b>Seductive wrong answer: +${fr('1', '8')}.</b> The defence takes three seconds: <b>before quoting the cascade, ask which quadrant each factor lies in and count the negative ones.</b> Here exactly one factor is negative, so the answer must be negative, whatever the algebra says. A sign predicted independently of the calculation is a sign you cannot lose.`,
        ],
        ans: `${P7} = −${fr('1', '8')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that for <i>n</i> ≥ 1<br>tan <i>θ</i> + 2 tan 2<i>θ</i> + 4 tan 4<i>θ</i> + ⋯ + 2<sup><i>n</i>−1</sup> tan(2<sup><i>n</i>−1</sup><i>θ</i>) = cot <i>θ</i> − 2<sup><i>n</i></sup> cot(2<sup><i>n</i></sup><i>θ</i>),<br>and hence evaluate ${P16}.`,
        steps: [
          `<b>Step 1: build the bridge.</b> For any <i>ϕ</i> with sin 2<i>ϕ</i> ≠ 0,<br>cot <i>ϕ</i> − tan <i>ϕ</i> = ${fr('cos <i>ϕ</i>', 'sin <i>ϕ</i>')} − ${fr('sin <i>ϕ</i>', 'cos <i>ϕ</i>')} = ${fr('cos<sup>2</sup> <i>ϕ</i> − sin<sup>2</sup> <i>ϕ</i>', 'sin <i>ϕ</i> cos <i>ϕ</i>')} = ${fr('cos 2<i>ϕ</i>', `${fr('1', '2')} sin 2<i>ϕ</i>`)} = 2 cot 2<i>ϕ</i>,<br>using cos 2<i>ϕ</i> = cos<sup>2</sup> <i>ϕ</i> − sin<sup>2</sup> <i>ϕ</i> and sin 2<i>ϕ</i> = 2 sin <i>ϕ</i> cos <i>ϕ</i> (${T05('(C)')}). Rearranged: tan <i>ϕ</i> = cot <i>ϕ</i> − 2 cot 2<i>ϕ</i>.`,
          `<b>Step 2: apply it at every doubling angle.</b> Put <i>ϕ</i> = 2<sup><i>r</i></sup><i>θ</i> and multiply through by 2<sup><i>r</i></sup>:<br>2<sup><i>r</i></sup> tan(2<sup><i>r</i></sup><i>θ</i>) = 2<sup><i>r</i></sup> cot(2<sup><i>r</i></sup><i>θ</i>) − 2<sup><i>r</i>+1</sup> cot(2<sup><i>r</i>+1</sup><i>θ</i>).`,
          `<b>This is the whole proof.</b> The right-hand side is <i>g</i>(<i>r</i>) − <i>g</i>(<i>r</i> + 1) with <i>g</i>(<i>r</i>) = 2<sup><i>r</i></sup> cot(2<sup><i>r</i></sup><i>θ</i>): a perfect telescoping term, and the factor 2<sup><i>r</i></sup> on the left is precisely what makes it one.`,
          `<b>Step 3: sum from <i>r</i> = 0 to <i>r</i> = <i>n</i> − 1.</b><br>${S01} 2<sup><i>r</i></sup> tan(2<sup><i>r</i></sup><i>θ</i>) = ${S01} [<i>g</i>(<i>r</i>) − <i>g</i>(<i>r</i> + 1)] = <i>g</i>(0) − <i>g</i>(<i>n</i>) = cot <i>θ</i> − 2<sup><i>n</i></sup> cot(2<sup><i>n</i></sup><i>θ</i>). ■`,
          `<b>Step 4: choose <i>θ</i> to kill the tail.</b> Take <i>θ</i> = ${fr('π', '16')} and <i>n</i> = 3. Then 2<sup><i>n</i></sup><i>θ</i> = 8 · ${fr('π', '16')} = ${fr('π', '2')}, and cot ${fr('π', '2')} = 0. The identity collapses to<br>${P16} = cot ${fr('π', '16')}.`,
          `<b>Step 5: confirm numerically.</b> tan ${fr('π', '16')} = tan 11.25° ≈ 0.198912; 2 tan ${fr('π', '8')} = 2(√2 − 1) ≈ 0.828427; 4 tan ${fr('π', '4')} = 4. Their sum is ≈ 5.027339. And cot ${fr('π', '16')} = ${fr('1', `tan ${fr('π', '16')}`)} ≈ 5.027339. Agreement to six decimal places.`,
          `<b>What made this Advanced.</b> Two separate insights had to arrive. First, that cot <i>ϕ</i> − tan <i>ϕ</i> = 2 cot 2<i>ϕ</i> is not a curiosity but a telescoping bridge: that the coefficient 2<sup><i>r</i></sup> in the question is a hint, not decoration, because it is exactly the weight needed to make consecutive terms cancel. Second, that the free parameter <i>θ</i> can be chosen so that the surviving tail vanishes: setting 2<sup><i>n</i></sup><i>θ</i> = ${fr('π', '2')} turns a two-term answer into a one-term answer. A student who proves the identity but does not see the choice in Step 4 will grind at cot ${fr('π', '2')} numerically and never notice it is zero.`,
        ],
        ans: `${P16} = cot ${fr('π', '16')} = ${fr('1', `tan(${fr('π', '16')})`)} ≈ 5.02734.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the sum sin <i>x</i> + sin 2<i>x</i> + ⋯ + sin <i>nx</i>.`,
            a: `<i>a</i> = <i>x</i>, <i>β</i> = <i>x</i>, so <i>S</i> = ${fr(`sin(${half('<i>nx</i>')})`, `sin(${half('<i>x</i>')})`)} sin ${half('(<i>n</i> + 1)<i>x</i>')}, valid for <i>x</i> ≠ 2<i>m</i>π.`,
          },
          {
            q: `Show that cos ${SV('2')} + cos ${SV('4')} + cos ${SV('6')} = −${fr('1', '2')}.`,
            a: `Cleanest route: apply Question 7 with <i>n</i> = 7, <i>a</i> = 0, giving ∑<sub><i>r</i>=0</sub><sup>6</sup> cos ${fr('2π<i>r</i>', '7')} = 0. The seven terms are 1 together with three pairs, since cos ${SV('12')} = cos ${SV('2')}, cos ${SV('10')} = cos ${SV('4')} and cos ${SV('8')} = cos ${SV('6')}. Hence 1 + 2(cos ${SV('2')} + cos ${SV('4')} + cos ${SV('6')}) = 0, so the required sum is −${fr('1', '2')}.`,
          },
          {
            q: `Evaluate cos ${SV('')} cos ${SV('2')} cos ${SV('3')}.`,
            a: `${fr('1', '8')}. (Note cos ${SV('3')} = −cos ${SV('4')}, so this is −1 times the answer of the third worked example of this topic.)`,
          },
          {
            q: `Evaluate tan ${fr('π', '32')} + 2 tan ${fr('π', '16')} + 4 tan ${fr('π', '8')} + 8 tan ${fr('π', '4')}.`,
            a: `<i>θ</i> = ${fr('π', '32')}, <i>n</i> = 4, and 2<sup>4</sup><i>θ</i> = ${fr('π', '2')} so the tail vanishes: the sum is cot ${fr('π', '32')} ≈ 10.15317.`,
          },
          {
            q: `Prove that sin 20° sin 40° sin 60° sin 80° = ${fr('3', '16')}.`,
            a: `Group sin 20° sin 40° sin 80° = ${fr('1', '4')} sin 60° = ${fr('√3', '8')} by the product identity sin <i>A</i> sin(60° − <i>A</i>) sin(60° + <i>A</i>) = ${fr('1', '4')} sin 3<i>A</i> (Example C3 of Additional topic C, with <i>A</i> = 20°), then multiply by sin 60° = ${fr('√3', '2')} to get ${fr('3', '16')}.`,
          },
          {
            q: `Prove that ${fr('(sin 7<i>x</i> + sin 5<i>x</i>) + (sin 9<i>x</i> + sin 3<i>x</i>)', '(cos 7<i>x</i> + cos 5<i>x</i>) + (cos 9<i>x</i> + cos 3<i>x</i>)')} = tan 6<i>x</i>. (NCERT, Miscellaneous Exercise, Question 6.)`,
            a: `Numerator = 2 sin 6<i>x</i> cos <i>x</i> + 2 sin 6<i>x</i> cos 3<i>x</i> = 2 sin 6<i>x</i> (cos <i>x</i> + cos 3<i>x</i>); denominator = 2 cos 6<i>x</i> cos <i>x</i> + 2 cos 6<i>x</i> cos 3<i>x</i> = 2 cos 6<i>x</i> (cos <i>x</i> + cos 3<i>x</i>); the bracket cancels, leaving tan 6<i>x</i>.`,
          },
          {
            q: `Show that for every integer <i>n</i> ≥ 2 and every real <i>a</i>, ${S01} cos(<i>a</i> + ${fr('2π<i>r</i>', '<i>n</i>')}) = 0.`,
            a: `Here <i>β</i> = ${fr('2π', '<i>n</i>')}, so ${NB2} = π and the numerator sin(${NB2}) = sin π = 0, while sin(${B2}) = sin ${fr('π', '<i>n</i>')} ≠ 0 because <i>n</i> ≥ 2. The sum is therefore 0.`,
          },
          {
            q: `Find the sum ∑<sub><i>r</i>=1</sub><sup><i>n</i></sup> ${fr('1', 'cos <i>rθ</i> cos(<i>r</i> + 1)<i>θ</i>')}.`,
            a: `Assuming sin <i>θ</i> ≠ 0 and no cos <i>rθ</i> (<i>r</i> = 1, …, <i>n</i> + 1) is zero: multiply and divide by sin <i>θ</i> and use tan(<i>r</i> + 1)<i>θ</i> − tan <i>rθ</i> = ${fr('sin <i>θ</i>', 'cos <i>rθ</i> cos(<i>r</i> + 1)<i>θ</i>')}; the sum telescopes to ${fr('tan(<i>n</i> + 1)<i>θ</i> − tan <i>θ</i>', 'sin <i>θ</i>')}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For sin <i>θ</i> ≠ 0, cos <i>θ</i> cos 2<i>θ</i> cos 4<i>θ</i> ⋯ cos(2<sup><i>n</i>−1</sup><i>θ</i>) equals`,
        opts: [
          { label: CASCADE, nudge: null },
          {
            label: fr('sin(2<sup><i>n</i>−1</sup><i>θ</i>)', '2<sup><i>n</i></sup> sin <i>θ</i>'),
            nudge: `<b>(B)</b> uses the last angle 2<sup><i>n</i>−1</sup><i>θ</i> in the numerator instead of its double. Test <i>n</i> = 1: the product is just cos <i>θ</i>, and <b>(A)</b> gives ${fr('sin 2<i>θ</i>', '2 sin <i>θ</i>')} = cos <i>θ</i> correctly, while <b>(B)</b> gives ${fr('1', '2')}.`,
          },
          {
            label: fr('sin(2<sup><i>n</i></sup><i>θ</i>)', '2<sup><i>n</i>−1</sup> sin <i>θ</i>'),
            nudge: `<b>(C)</b> counts the factors of 2 one short. The same <i>n</i> = 1 test gives 2 cos <i>θ</i>.`,
          },
          {
            label: fr('cos(2<sup><i>n</i></sup><i>θ</i>)', '2<sup><i>n</i></sup> sin <i>θ</i>'),
            nudge: `<b>(D)</b> confuses the cascade’s output: the double-angle formula produces a sine, never a cosine, at each step.`,
          },
        ],
        correct: 0,
        solution: `Multiply by 2 sin <i>θ</i> and cascade 2 sin <i>ϕ</i> cos <i>ϕ</i> = sin 2<i>ϕ</i> through all <i>n</i> cosines: 2<sup><i>n</i></sup> sin <i>θ</i> · <i>P</i> = sin(2<sup><i>n</i></sup><i>θ</i>).`,
      },
      {
        t: 'mcq',
        q: `${P7} equals`,
        opts: [
          {
            label: fr('1', '8'),
            nudge: `<b>(A)</b> is the classic error: importing the sign of cos 20° cos 40° cos 80° without checking the quadrant of 2<sup><i>n</i></sup><i>θ</i>. Counting negative factors settles it: cos ${SV('4')} < 0 and the other two are positive, so the product is negative.`,
          },
          { label: `−${fr('1', '8')}`, nudge: null },
          {
            label: fr('1', '16'),
            nudge: `<b>(C)</b> divides by 2<sup><i>n</i></sup> with <i>n</i> = 4, having miscounted three cosines as four.`,
          },
          {
            label: fr('√3', '8'),
            nudge: `<b>(D)</b> is sin 20° sin 40° sin 80°, a different product with a different cascade (the sine version, which produces ${fr('1', '4')} sin 3<i>A</i>, not ${fr('1', '2<sup><i>n</i></sup>')}).`,
          },
        ],
        correct: 1,
        solution: `${fr(`sin(${SV('8')})`, `8 sin(${SV('')})`)} = ${fr(`−sin(${SV('')})`, `8 sin(${SV('')})`)} = −${fr('1', '8')}.`,
      },
      {
        t: 'mcq',
        q: `${S01} cos(<i>a</i> + <i>rβ</i>), with sin ${B2} ≠ 0, equals`,
        opts: [
          { label: `${AP_FACTOR} cos(<i>a</i> + ${N1B2})`, nudge: null },
          {
            label: `${fr(`cos(${NB2})`, `sin(${B2})`)} cos(<i>a</i> + ${N1B2})`,
            nudge: `<b>(B)</b> puts a cosine in the scaling factor. Test <i>n</i> = 1: the sum is cos <i>a</i>, which <b>(A)</b> reproduces but <b>(B)</b> does not: <b>(B)</b> returns cot ${B2} cos <i>a</i>.`,
          },
          {
            label: `${AP_FACTOR} cos(<i>a</i> + ${NB2})`,
            nudge: `<b>(C)</b> uses ${NB2} instead of ${N1B2} in the trailing cosine: the mean of the first and last angles is <i>a</i> + ${N1B2}, not <i>a</i> + ${NB2}. The <i>n</i> = 1 test again refutes it.`,
          },
          {
            label: `${fr('sin(<i>nβ</i>)', 'sin <i>β</i>')} cos(<i>a</i> + ${N1B2})`,
            nudge: `<b>(D)</b> forgets both halvings. It survives the <i>n</i> = 1 test by accident, since ${fr('sin <i>β</i>', 'sin <i>β</i>')} = 1; use <i>n</i> = 2 instead, where <b>(D)</b> gives 2 cos <i>β</i> cos(<i>a</i> + ${B2}) but the true sum is 2 cos ${B2} cos(<i>a</i> + ${B2}).`,
          },
        ],
        correct: 0,
        solution: `Item (A) of the Key formulas and definitions part: the factor ${AP_FACTOR} times the cosine of the mean angle <i>a</i> + ${N1B2}; at <i>n</i> = 1 it returns cos <i>a</i>.`,
      },
      {
        t: 'mcq',
        q: `The value of 2 cos ${TN('')} cos ${TN('9')} + cos ${TN('3')} + cos ${TN('5')} is`,
        opts: [
          {
            label: '1',
            nudge: `<b>(A)</b> and <b>(B)</b> are guesses from students who cannot flatten the product and reach for a plausible small integer. Neither survives a numerical estimate: cos ${TN('9')} is negative, so the product term is negative and roughly −1.103, while the two remaining cosines total roughly +1.103.`,
          },
          {
            label: '−1',
            nudge: `<b>(A)</b> and <b>(B)</b> are guesses from students who cannot flatten the product and reach for a plausible small integer. Neither survives a numerical estimate: cos ${TN('9')} is negative, so the product term is negative and roughly −1.103, while the two remaining cosines total roughly +1.103.`,
          },
          { label: '0', nudge: null },
          {
            label: fr('1', '2'),
            nudge: `<b>(D)</b> comes from mis-pairing: using cos ${TN('10')} = −cos ${TN('3')} but leaving cos ${TN('8')} unmatched, then guessing. Both supplementary pairs must be spotted, not one.`,
          },
        ],
        correct: 2,
        solution: `The product flattens to cos ${TN('10')} + cos ${TN('8')}, and these are the negatives of cos ${TN('3')} and cos ${TN('5')} respectively.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Quoting the AP formula when sin ${B2} = 0.</b> If the common difference is a multiple of 2π, every term is the same and the sum is <i>n</i> times one term. <b>Correction:</b> check the denominator before you write it.`,
          `<b>Getting the trailing angle wrong.</b> It is <i>a</i> + ${N1B2}, the mean of the first and last angles, not <i>a</i> + ${NB2}. <b>Correction:</b> test your formula at <i>n</i> = 1; it must return the single term sin <i>a</i> or cos <i>a</i>.`,
          `<b>Off-by-one in the number of terms.</b> The formula as written sums <i>r</i> = 0 to <i>r</i> = <i>n</i> − 1. A series presented as “from <i>θ</i> to <i>nθ</i>” has <i>n</i> terms with <i>a</i> = <i>θ</i> and <i>β</i> = <i>θ</i>; a series presented as “<i>r</i> = 1 to <i>n</i>” needs <i>a</i> shifted. <b>Correction:</b> count the terms explicitly, then set <i>a</i> to the first angle.`,
          `<b>Assuming a doubling product is positive.</b> The product cos <i>θ</i> cos 2<i>θ</i> ⋯ takes the sign of ${fr('sin(2<sup><i>n</i></sup><i>θ</i>)', 'sin <i>θ</i>')} (the sign of sin(2<sup><i>n</i></sup><i>θ</i>) when sin <i>θ</i> > 0). <b>Correction:</b> count how many factors lie in a quadrant where cosine is negative; an odd count means a negative answer, and that prediction is independent of the algebra.`,
          `<b>Dropping the weights in a telescoping tangent sum.</b> The identity is ∑ 2<sup><i>r</i></sup> tan(2<sup><i>r</i></sup><i>θ</i>), not ∑ tan(2<sup><i>r</i></sup><i>θ</i>). The powers of 2 are what make the terms cancel. <b>Correction:</b> if a question hands you coefficients 1, 2, 4, 8, that is the identity announcing itself.`,
          `<b>Telescoping to the wrong endpoints.</b> After cancellation, the survivors are <i>g</i>(0) and −<i>g</i>(<i>n</i>), not <i>g</i>(1) and −<i>g</i>(<i>n</i>). <b>Correction:</b> write four terms out in full before cancelling anything.`,
          `<b>Using the general formula on a four-term series.</b> It works, but the pairing route (${ITEM('(E)')}) is twice as fast and lands directly on the product form the question wants. <b>Correction:</b> count the terms first; four or fewer means pair the outermost.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• The answer to an AP sum always has the shape ${fr('sin(half the total span + half a step)', 'sin(half a step)')} × (same function of the mean angle). Reconstructing it from that sentence is faster and safer than memorising the symbols.<br>• When the angles double, three telescoping patterns cover almost everything the syllabus asks: products of cosines (${ITEM('(B)')}), weighted tangents (item (C)), reciprocal cosine products (item (D)). Learn the fingerprint of each and you will rarely need to invent a method.<br>• Whenever a question leaves a parameter free, ask whether it can be chosen to annihilate the tail. Setting 2<sup><i>n</i></sup><i>θ</i> = ${fr('π', '2')} makes cot(2<sup><i>n</i></sup><i>θ</i>) = 0 and is the intended move far more often than not (the book’s estimate from past papers, not official figures).<br>• Predict the sign of any product answer before computing it, by counting how many factors are negative. It costs three seconds and is the surest defence against the trap of the third worked example.<br>• Every closed-form answer in this topic can be checked in fifteen seconds by substituting a convenient angle (<i>θ</i> = ${fr('π', '6')} or <i>n</i> = 1) and comparing with the series written out. Do it every time; the failure mode here is a silently wrong sign or an off-by-one, and both show up instantly.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `AP sums (<i>n</i> terms, first angle <i>a</i>, common difference <i>β</i>, requires sin ${B2} ≠ 0)`,
            note: `${S01} sin(<i>a</i> + <i>rβ</i>) = ${AP_FACTOR} sin(<i>a</i> + ${N1B2}), ${S01} cos(<i>a</i> + <i>rβ</i>) = ${AP_FACTOR} cos(<i>a</i> + ${N1B2})`,
          },
          { f: 'The trailing angle is the mean of the first and last.', note: 'Check any version at <i>n</i> = 1.' },
          {
            f: 'Degenerate',
            note: '<i>β</i> = 2<i>m</i>π ⇒ sum = <i>n</i> sin <i>a</i> or <i>n</i> cos <i>a</i>; do not quote the formula.',
          },
          {
            f: 'Vanishing',
            note: `${S01} cos(<i>a</i> + ${fr('2π<i>r</i>', '<i>n</i>')}) = 0 for <i>n</i> ≥ 2 (same for sine).`,
          },
          {
            f: 'Doubling product',
            note: `cos <i>θ</i> cos 2<i>θ</i> ⋯ cos(2<sup><i>n</i>−1</sup><i>θ</i>) = ${CASCADE}. <b>Sign can be negative:</b> ${P7} = −${fr('1', '8')} while cos 20° cos 40° cos 80° = +${fr('1', '8')}.`,
          },
          {
            f: 'Tangent bridge',
            note: `cot <i>θ</i> − tan <i>θ</i> = 2 cot 2<i>θ</i>, hence ${TAN_SUM}. Choose 2<sup><i>n</i></sup><i>θ</i> = ${fr('π', '2')} to kill the tail.`,
          },
          { f: 'Secant bridge', note: `${SEC_BRIDGE}, hence ${SEC_SUM}.` },
          {
            f: 'Four terms or fewer',
            note: 'pair the outermost with sum-to-product. E.g. sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i> + sin 7<i>x</i> = 4 cos <i>x</i> cos 2<i>x</i> sin 4<i>x</i>.',
          },
          {
            f: 'Supplementary pairing',
            note: `cos(π − <i>ϕ</i>) = −cos <i>ϕ</i> collapses sums such as the ${fr('π', '13')} family to zero.`,
          },
          {
            f: 'Golden rule',
            note: 'never add the terms; find the multiplier that makes neighbours cancel, and read off the two survivors.',
          },
        ],
        aids: [],
      },
    ],
  },
];
