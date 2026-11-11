import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 12: Higher Multiple Angles and the Sum of Three or More Angles,
 * pp. 315–330 of the Class 11 Mathematics Master Reference (October 2026 edition),
 * word for word: the "Additional Topics" part's Subtopic 12. It begins on p. 315
 * below Subtopic 11's cheat sheet, and its cheat sheet ends at the top of p. 330,
 * where Topic D begins. The topic opens with its "Exam Relevance:" box as a part of
 * its own, then is split at its Sections 1 to 8.
 * The book's one drawing, its "Figure 4" (the multiple-angle ladder, p. 317), is the
 * unnumbered drawing m11-03-12-d1, placed where its caption is printed, at the end
 * of "Concept intuition".
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const half = (n: string) => fr(n, '2');
const PI2 = half('π');
const S = (k: string) => `<i>S</i><sub>${k}</sub>`;
const ABC = '<i>A</i> + <i>B</i> + <i>C</i>';
const T3 = fr(`${S('1')} − ${S('3')}`, `1 − ${S('2')}`);
const T3S1 = fr(S('1'), `1 − ${S('2')}`);
const TAB = fr('tan <i>A</i> + tan <i>B</i>', '1 − tan <i>A</i> tan <i>B</i>');
const TNA = fr(`${S('1')} − ${S('3')} + ${S('5')} − ⋯`, `1 − ${S('2')} + ${S('4')} − ⋯`);
const SDEF = `${S('1')} = ∑ tan <i>A</i>, ${S('2')} = ∑ tan <i>A</i> tan <i>B</i>, ${S('3')} = tan <i>A</i> tan <i>B</i> tan <i>C</i>`;
const SIN4 = 'sin 4<i>x</i> = 4 sin <i>x</i> cos <i>x</i> cos 2<i>x</i>';
const COS4C = '8 cos<sup>4</sup> <i>x</i> − 8 cos<sup>2</sup> <i>x</i> + 1';
const COS4M = '1 − 8 sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i>';
const COS4S = '1 − 8 sin<sup>2</sup> <i>x</i> + 8 sin<sup>4</sup> <i>x</i>';
const COS4 = `cos 4<i>x</i> = ${COS4C} = ${COS4M} = ${COS4S}`;
const TAN4 = fr('4 tan <i>x</i> (1 − tan<sup>2</sup> <i>x</i>)', '1 − 6 tan<sup>2</sup> <i>x</i> + tan<sup>4</sup> <i>x</i>');
const SIN5 = 'sin 5<i>x</i> = 16 sin<sup>5</sup> <i>x</i> − 20 sin<sup>3</sup> <i>x</i> + 5 sin <i>x</i>';
const COS5 = 'cos 5<i>x</i> = 16 cos<sup>5</sup> <i>x</i> − 20 cos<sup>3</sup> <i>x</i> + 5 cos <i>x</i>';
const COS6R = '32 cos<sup>6</sup> <i>x</i> − 48 cos<sup>4</sup> <i>x</i> + 18 cos<sup>2</sup> <i>x</i> − 1';
const COS6 = `cos 6<i>x</i> = ${COS6R}`;
const T5T = fr('5<i>t</i> − 10<i>t</i><sup>3</sup> + <i>t</i><sup>5</sup>', '1 − 10<i>t</i><sup>2</sup> + 5<i>t</i><sup>4</sup>');
const nC = (r: string) => `<sup><i>n</i></sup>C<sub>${r}</sub>`;
const C5 = (r: string) => `<sup>5</sup>C<sub>${r}</sub>`;
const SIN3 = `sin(${ABC}) = cos <i>A</i> cos <i>B</i> cos <i>C</i> (${S('1')} − ${S('3')})`;
const COS3 = `cos(${ABC}) = cos <i>A</i> cos <i>B</i> cos <i>C</i> (1 − ${S('2')})`;
const INV = 'tan<sup>−1</sup> 1 + tan<sup>−1</sup> 2 + tan<sup>−1</sup> 3';
const TT = '<i>t</i><sup>2</sup>';
const NEST4 = fr(fr('4<i>t</i>', `1 − ${TT}`), `1 − ${fr(`4${TT}`, `(1 − ${TT})<sup>2</sup>`)}`);
const CLEAR4 = fr(`4<i>t</i>(1 − ${TT})`, `(1 − ${TT})<sup>2</sup> − 4${TT}`);
const ITEM = (x: string) => `item ${x} of the Key formulas and definitions part`;
const T05 = (x: string) => `Topic 05’s Identity master reference part, item ${x}`;
const T06 = 'Topic 06’s Solution-set reference and root-validity check part';
const third = fr('1', '3');
const ninth = fr('1', '9');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 12 · pp. 315–330 ────────────────
  {
    n: '12',
    title: 'Higher Multiple Angles and the Sum of Three or More Angles',
    kalam: 'Multiple-angle formulas are not a list to be learnt; they are a single recursion run the required number of times.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `NCERT Exercise 3.3 ends with three questions that need the multiple-angle ladder built in this topic:<br>Question 23 asks for tan 4<i>x</i>,<br>Question 24 for cos 4<i>x</i> = ${COS4M}, and<br>Question 25 for ${COS6}.<br>All three are fair game as 3–4 mark board questions, and all three are pure bookkeeping once you know the ladder. JEE Main uses tan 4<i>x</i> and cos 4<i>x</i> inside longer problems and asks directly for tan(${ABC}). JEE Advanced uses the ${S('1')}, ${S('2')}, ${S('3')} form of the three-angle tangent formula as a bridge to quadratic and cubic equations (“if tan <i>A</i>, tan <i>B</i>, tan <i>C</i> are the roots of <i>x</i><sup>3</sup> − <i>px</i><sup>2</sup> + <i>qx</i> − <i>r</i> = 0, find ${ABC}”) and as the cleanest derivation of the conditional identities of ${T05('(J)')}. (NEET does not test mathematics.) Topic 05 stopped at the triple angle; this topic climbs the rest of the ladder.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>The ladder, not the leap.</b> There is no separate formula to memorise for cos 4<i>x</i>. There is a ladder, and cos 4<i>x</i> is the fourth rung:<br>cos 4<i>x</i> = cos(2 · 2<i>x</i>) = 2 cos<sup>2</sup> 2<i>x</i> − 1,   cos 2<i>x</i> = 2 cos<sup>2</sup> <i>x</i> − 1.<br>Substitute the second into the first and expand. That is the entire derivation, and the same two-step move produces cos 8<i>x</i>, cos 16<i>x</i>, and anything else whose index is a power of two. <b>Multiple-angle formulas are not a list to be learnt; they are a single recursion run the required number of times.</b> Where the index is not a power of two (cos 6<i>x</i>, say) you split it the other way, 6<i>x</i> = 2(3<i>x</i>), and use the triple angle you already have.`,
      },
      {
        t: 'p',
        html: `<b>Indian-context analogy: the compound interest ladder.</b> A bank does not have a separate formula for four years’ compound interest. It has one formula for one year, and it applies it four times. Asking “what is the four-year formula?” is asking for the expanded version of a repeated one-step rule. cos 4<i>x</i> in terms of cos <i>x</i> is exactly that expanded version, and like the compound-interest expansion it looks ugly and means nothing on its own.`,
      },
      {
        t: 'p',
        html: `<b>Which route to take.</b> For an index <i>n</i> there are always two decompositions worth trying, and one is much shorter:<br>• 4<i>x</i> = 2(2<i>x</i>): double a double. Shortest for 4, 8, 16.<br>• 6<i>x</i> = 2(3<i>x</i>): double a triple. Shortest for 6.<br>• 5<i>x</i> = 3<i>x</i> + 2<i>x</i>: add a triple to a double. The usual route for 5 (4<i>x</i> + <i>x</i> also works).`,
      },
      {
        t: 'p',
        html: `<b>The shape of the answer is predictable and is itself a check.</b> cos <i>nx</i> expanded in powers of cos <i>x</i> always comes out as a polynomial of degree <i>n</i> with leading coefficient 2<sup><i>n</i>−1</sup>, containing only powers of the same parity as <i>n</i>. So cos 4<i>x</i> must start 8 cos<sup>4</sup> <i>x</i> and contain only even powers; cos 6<i>x</i> must start 32 cos<sup>6</sup> <i>x</i> and contain only even powers; cos 5<i>x</i> must start 16 cos<sup>5</sup> <i>x</i> and contain only odd powers. <b>If your expansion has the wrong leading coefficient or a term of the wrong parity, it is wrong, and you know it before checking a single algebra step.</b>`,
      },
      {
        t: 'p',
        html: `<b>Second idea: three angles at once, and the symmetric functions that organise it.</b> For tan(<i>A</i> + <i>B</i>) the answer had two ingredients, tan <i>A</i> + tan <i>B</i> above and tan <i>A</i> tan <i>B</i> below. For three angles the pattern continues, using the three elementary symmetric functions of tan <i>A</i>, tan <i>B</i>, tan <i>C</i>:<br>${SDEF},<br>and then tan(${ABC}) = ${T3}. The alternating signs and the alternating degrees are not a coincidence: they are the real and imaginary parts of the product (1 + <i>i</i> tan <i>A</i>)(1 + <i>i</i> tan <i>B</i>)(1 + <i>i</i> tan <i>C</i>), which is the Complex Numbers chapter’s de Moivre theorem showing through.`,
      },
      {
        t: 'p',
        html: `<b>Why the <i>S</i>-notation is worth the trouble.</b> Because a cubic equation <i>x</i><sup>3</sup> − <i>px</i><sup>2</sup> + <i>qx</i> − <i>r</i> = 0 has ${S('1')} = <i>p</i>, ${S('2')} = <i>q</i>, ${S('3')} = <i>r</i> by Vieta’s relations. So a question that hands you a cubic whose roots are three tangents has already handed you tan(${ABC}). That bridge, from a polynomial to an angle sum, is the reason JEE Advanced cares about this formula at all.`,
      },
      {
        t: 'p',
        html: `<b>Where it breaks down.</b> The three-angle tangent formula is meaningless if any of <i>A</i>, <i>B</i>, <i>C</i> or their sum is an odd multiple of ${PI2}: some tangent is undefined, or the denominator 1 − ${S('2')} vanishes. That vanishing is not a defect but information: it says the sum is an odd multiple of ${PI2}, and it is the fastest proof of the conditional identity ∑ tan <i>A</i> tan <i>B</i> = 1 when ${ABC} = ${PI2}.`,
      },
      { t: 'fig', id: 'm11-03-12-d1' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: 'Throughout, <i>x</i>, <i>A</i>, <i>B</i>, <i>C</i> are real and every formula is stated with the values at which it fails.',
      },
      { t: 'p', html: '<b>(A) The fourth multiple.</b>' },
      {
        t: 'formula',
        kicker: 'The fourth multiple',
        main: `${SIN4} = 4 sin <i>x</i> cos<sup>3</sup> <i>x</i> − 4 cos <i>x</i> sin<sup>3</sup> <i>x</i><br>${COS4}<br>tan 4<i>x</i> = ${fr('4 tan <i>x</i> − 4 tan<sup>3</sup> <i>x</i>', '1 − 6 tan<sup>2</sup> <i>x</i> + tan<sup>4</sup> <i>x</i>')} = ${TAN4}`,
        legend: ['<i>x</i> = the angle (any real value where each side is defined)'],
        note: null,
      },
      {
        t: 'p',
        html: `• The tangent form requires cos <i>x</i> ≠ 0 and cos 4<i>x</i> ≠ 0, i.e. <i>x</i> ≠ <i>k</i>π + ${PI2} and <i>x</i> ≠ ${fr('<i>k</i>π', '4')} + ${fr('π', '8')} (<i>k</i> ∈ ℤ); the derivation through tan 2<i>x</i> also needs cos 2<i>x</i> ≠ 0, but at <i>x</i> = ${fr('<i>k</i>π', '2')} + ${fr('π', '4')} both sides are 0.<br>• cos 4<i>x</i> = ${COS4M} is NCERT Exercise 3.3 Question 24; tan 4<i>x</i> is Question 23.`,
      },
      { t: 'p', html: '<b>(B) The fifth and sixth multiples.</b>' },
      {
        t: 'formula',
        kicker: 'The fifth and sixth multiples',
        main: `${SIN5}<br>${COS5}<br>tan 5<i>x</i> = ${fr('5 tan <i>x</i> − 10 tan<sup>3</sup> <i>x</i> + tan<sup>5</sup> <i>x</i>', '1 − 10 tan<sup>2</sup> <i>x</i> + 5 tan<sup>4</sup> <i>x</i>')}<br>${COS6}`,
        legend: ['<i>x</i> = the angle (any real value where each side is defined)'],
        note: null,
      },
      {
        t: 'p',
        html: '• cos 6<i>x</i> is NCERT Exercise 3.3 Question 25.<br>• Note the pleasing symmetry of the fifth multiple: the coefficient list 16, −20, 5 is identical for sine and cosine. This happens when <i>n</i> ≡ 1 (mod 4) (as for <i>n</i> = 5 and <i>n</i> = 9); for <i>n</i> = 3 the signs are reversed, since sin 3<i>x</i> = 3 sin <i>x</i> − 4 sin<sup>3</sup> <i>x</i> but cos 3<i>x</i> = 4 cos<sup>3</sup> <i>x</i> − 3 cos <i>x</i>.',
      },
      {
        t: 'p',
        html: '<b>(C) The general multiple (de Moivre form).</b> Writing <i>t</i> = tan <i>x</i> and using (cos <i>x</i> + <i>i</i> sin <i>x</i>)<sup><i>n</i></sup> = cos <i>nx</i> + <i>i</i> sin <i>nx</i> (Complex Numbers, de Moivre’s theorem):',
      },
      {
        t: 'formula',
        kicker: 'The general multiple (de Moivre form)',
        main: `cos <i>nx</i> = ∑<sub><i>k</i>≥0</sub> (−1)<sup><i>k</i></sup> ${nC('2<i>k</i>')} cos<sup><i>n</i>−2<i>k</i></sup> <i>x</i> sin<sup>2<i>k</i></sup> <i>x</i><br>sin <i>nx</i> = ∑<sub><i>k</i>≥0</sub> (−1)<sup><i>k</i></sup> ${nC('2<i>k</i>+1')} cos<sup><i>n</i>−2<i>k</i>−1</sup> <i>x</i> sin<sup>2<i>k</i>+1</sup> <i>x</i><br>tan <i>nx</i> = ${fr(`${nC('1')}<i>t</i> − ${nC('3')}<i>t</i><sup>3</sup> + ${nC('5')}<i>t</i><sup>5</sup> − ⋯`, `1 − ${nC('2')}<i>t</i><sup>2</sup> + ${nC('4')}<i>t</i><sup>4</sup> − ⋯`)}`,
        legend: [
          '<i>n</i> = the multiple (a positive integer)',
          '<i>x</i> = the angle',
          '<i>t</i> = the tangent of the angle (tan <i>x</i>)',
          '<i>k</i> = the summation index (<i>k</i> ≥ 0)',
          '<sup><i>n</i></sup>C<sub><i>r</i></sub> = the binomial coefficient (<i>n</i> choose <i>r</i>)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• <b>Structural checks:</b> cos <i>nx</i> written purely in cos <i>x</i> is a polynomial of degree <i>n</i> with leading coefficient 2<sup><i>n</i>−1</sup>, containing only powers of the same parity as <i>n</i>; the sum of all its coefficients is cos(<i>n</i> · 0) = 1 (put cos <i>x</i> = 1). For cos 6<i>x</i>: 32 − 48 + 18 − 1 = 1. Correct.<br>• The tangent version is valid wherever every tangent involved is defined and the denominator is non-zero.',
      },
      {
        t: 'p',
        html: `<b>(D) The sum of three angles.</b> With<br>${S('1')} = tan <i>A</i> + tan <i>B</i> + tan <i>C</i>, ${S('2')} = tan <i>A</i> tan <i>B</i> + tan <i>B</i> tan <i>C</i> + tan <i>C</i> tan <i>A</i>, ${S('3')} = tan <i>A</i> tan <i>B</i> tan <i>C</i>,`,
      },
      {
        t: 'formula',
        kicker: 'The sum of three angles',
        main: `tan(${ABC}) = ${T3}<br>${SIN3} = ∑ sin <i>A</i> cos <i>B</i> cos <i>C</i> − sin <i>A</i> sin <i>B</i> sin <i>C</i><br>${COS3} = cos <i>A</i> cos <i>B</i> cos <i>C</i> − ∑ cos <i>A</i> sin <i>B</i> sin <i>C</i>`,
        legend: [
          '<i>A</i>, <i>B</i>, <i>C</i> = the three angles',
          `${S('1')} = the sum of the tangents (tan <i>A</i> + tan <i>B</i> + tan <i>C</i>)`,
          `${S('2')} = the sum of the pairwise products of the tangents`,
          `${S('3')} = the product of the three tangents (tan <i>A</i> tan <i>B</i> tan <i>C</i>)`,
          '∑ = the cyclic sum over the three angles',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• The ∑ denotes the cyclic sum over the three ways of choosing which angle supplies the sine (respectively, the cosine).<br>• The tangent form requires cos <i>A</i>, cos <i>B</i>, cos <i>C</i> and cos(<i>A</i> + <i>B</i> + <i>C</i>) all non-zero; the sine and cosine forms in expanded shape are valid for <b>all</b> real <i>A</i>, <i>B</i>, <i>C</i>.',
      },
      {
        t: 'p',
        html: '<b>(E) The general <i>n</i>-angle tangent.</b> For angles <i>A</i><sub>1</sub>, …, <i>A</i><sub><i>n</i></sub>, with <i>S</i><sub><i>k</i></sub> the <i>k</i>-th elementary symmetric function of tan <i>A</i><sub>1</sub>, …, tan <i>A</i><sub><i>n</i></sub>:',
      },
      {
        t: 'formula',
        kicker: 'The general <i>n</i>-angle tangent',
        main: `tan(<i>A</i><sub>1</sub> + <i>A</i><sub>2</sub> + ⋯ + <i>A</i><sub><i>n</i></sub>) = ${TNA}`,
        legend: [
          '<i>A</i><sub>1</sub>, …, <i>A</i><sub><i>n</i></sub> = the angles',
          '<i>S</i><sub><i>k</i></sub> = the <i>k</i>-th elementary symmetric function of the tangents',
          '<i>n</i> = the number of angles',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• Setting <i>n</i> = 2 recovers tan(<i>A</i> + <i>B</i>) = ${T3S1} = ${TAB}, which is ${T05('(A)')}. The general formula must reduce to the known case; that is the check that you have the signs right.`,
      },
      { t: 'p', html: `<b>(F) Two corollaries that recover ${T05('(J)')}.</b>` },
      {
        t: 'table',
        title: null,
        head: ['Condition', 'Consequence for the formula', 'Identity obtained'],
        rows: [
          [
            `${ABC} = π`,
            `tan(${ABC}) = 0, so the numerator vanishes`,
            `${S('1')} = ${S('3')}, i.e. ∑ tan <i>A</i> = ∏ tan <i>A</i>`,
          ],
          [
            `${ABC} = ${PI2}`,
            `tan(${ABC}) is undefined, so the denominator vanishes`,
            `${S('2')} = 1, i.e. ∑ tan <i>A</i> tan <i>B</i> = 1`,
          ],
        ],
      },
      {
        t: 'p',
        html: `• The second row, applied to ${PI2} − <i>A</i>, ${PI2} − <i>B</i>, ${PI2} − <i>C</i> when ${ABC} = π (tan(${PI2} − <i>A</i>) = cot <i>A</i>), gives cot <i>A</i> cot <i>B</i> + cot <i>B</i> cot <i>C</i> + cot <i>C</i> cot <i>A</i> = 1, the form Topic 05 states.<br>• Applying the second row to the half-angles of a triangle (where ${half('<i>A</i>')} + ${half('<i>B</i>')} + ${half('<i>C</i>')} = ${PI2}) gives ∑ tan ${half('<i>A</i>')} tan ${half('<i>B</i>')} = 1 immediately: a one-line proof of a result that is otherwise a page of manipulation.<br>• <b>A cubic connection (Vieta).</b> If tan <i>A</i>, tan <i>B</i>, tan <i>C</i> are the roots of <i>x</i><sup>3</sup> − <i>px</i><sup>2</sup> + <i>qx</i> − <i>r</i> = 0, then ${S('1')} = <i>p</i>, ${S('2')} = <i>q</i>, ${S('3')} = <i>r</i>, so tan(${ABC}) = ${fr('<i>p</i> − <i>r</i>', '1 − <i>q</i>')}, with no need to find the roots at all.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>Derivation: cos 4<i>x</i>, three ways, from one recursion</b>' },
      {
        t: 'p',
        html: `<b>Step 1.</b> Apply the double-angle formula to the angle 2<i>x</i>: cos 4<i>x</i> = cos(2 · 2<i>x</i>) = 1 − 2 sin<sup>2</sup> 2<i>x</i>. <b>Reason:</b> ${T05('(C)')}, holds for any angle, and 2<i>x</i> is an angle; choosing the sin-only form is what will produce NCERT’s stated shape.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Replace sin 2<i>x</i> = 2 sin <i>x</i> cos <i>x</i>:<br>cos 4<i>x</i> = 1 − 2(2 sin <i>x</i> cos <i>x</i>)<sup>2</sup> = ${COS4M}.<br><b>Reason:</b> one substitution, and NCERT Exercise 3.3 Question 24 is finished.`,
      },
      {
        t: 'p',
        html: `<b>Step 3: the cosine-only form.</b> Start again from cos 4<i>x</i> = 2 cos<sup>2</sup> 2<i>x</i> − 1 and substitute cos 2<i>x</i> = 2 cos<sup>2</sup> <i>x</i> − 1:<br>cos 4<i>x</i> = 2(2 cos<sup>2</sup> <i>x</i> − 1)<sup>2</sup> − 1 = 2(4 cos<sup>4</sup> <i>x</i> − 4 cos<sup>2</sup> <i>x</i> + 1) − 1 = ${COS4C}.<br><b>Reason:</b> choosing the cos-only version of the double angle at both rungs is what keeps sines out entirely.`,
      },
      {
        t: 'p',
        html: `<b>Step 4: the sine-only form.</b> From Step 2, put cos<sup>2</sup> <i>x</i> = 1 − sin<sup>2</sup> <i>x</i>:<br>cos 4<i>x</i> = 1 − 8 sin<sup>2</sup> <i>x</i> (1 − sin<sup>2</sup> <i>x</i>) = ${COS4S}.<br><b>Reason:</b> the same expression re-expressed; which of the three you quote depends only on what the question gives you.`,
      },
      {
        t: 'p',
        html: '<b>Step 5: structural check.</b> The cosine-only form has degree 4, leading coefficient 8 = 2<sup>4−1</sup>, only even powers, and coefficient sum 8 − 8 + 1 = 1 = cos 0. All four structural predictions hold. <b>Reason:</b> four independent checks, none of which requires redoing the algebra.',
      },
      { t: 'p', html: '<b>Derivation: tan 4<i>x</i> (NCERT Exercise 3.3, Question 23)</b>' },
      {
        t: 'p',
        html: `<b>Step 1.</b> Write tan 4<i>x</i> = tan(2 · 2<i>x</i>) = ${fr('2 tan 2<i>x</i>', '1 − tan<sup>2</sup> 2<i>x</i>')}. <b>Reason:</b> the double-angle tangent formula of ${T05('(C)')}, applied at the angle 2<i>x</i>.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Substitute tan 2<i>x</i> = ${fr('2<i>t</i>', `1 − ${TT}`)}, where <i>t</i> = tan <i>x</i>:<br>tan 4<i>x</i> = ${NEST4}.<br><b>Reason:</b> the same formula one rung lower; nothing new is needed.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Multiply numerator and denominator by (1 − ${TT})<sup>2</sup>:<br>tan 4<i>x</i> = ${CLEAR4}.<br><b>Reason:</b> clearing the nested fraction in one move, rather than two, avoids the commonest algebra slip in this derivation.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Expand the denominator:<br>(1 − ${TT})<sup>2</sup> − 4${TT} = 1 − 2${TT} + <i>t</i><sup>4</sup> − 4${TT} = 1 − 6${TT} + <i>t</i><sup>4</sup>.<br><b>Reason:</b> the −4${TT} merges with the −2${TT}, producing the characteristic −6.`,
      },
      { t: 'p', html: `<b>Step 5.</b> Conclude<br>tan 4<i>x</i> = ${TAN4}.` },
      {
        t: 'p',
        html: `<b>Step 6: numerical check.</b> Take tan <i>x</i> = ${third}. Numerator: 4(${third})(1 − ${ninth}) = ${fr('4', '3')} · ${fr('8', '9')} = ${fr('32', '27')}. Denominator: 1 − ${fr('6', '9')} + ${fr('1', '81')} = ${fr('81 − 54 + 1', '81')} = ${fr('28', '81')}. Ratio: ${fr('32', '27')} · ${fr('81', '28')} = ${fr('96', '28')} = ${fr('24', '7')}. Independently: tan 2<i>x</i> = ${fr(fr('2', '3'), fr('8', '9'))} = ${fr('3', '4')}, then tan 4<i>x</i> = ${fr(fr('3', '2'), `1 − ${fr('9', '16')}`)} = ${fr(fr('3', '2'), fr('7', '16'))} = ${fr('24', '7')}. <b>Reason:</b> two routes, one answer: the derivation is sound.`,
      },
      { t: 'p', html: '<b>Derivation: the sum of three angles</b>' },
      {
        t: 'p',
        html: `<b>Step 1.</b> Group as (<i>A</i> + <i>B</i>) + <i>C</i> and apply the two-angle tangent formula:<br>tan(${ABC}) = ${fr('tan(<i>A</i> + <i>B</i>) + tan <i>C</i>', '1 − tan(<i>A</i> + <i>B</i>) tan <i>C</i>')}.<br><b>Reason:</b> three angles are two angles once you bracket; no new principle is required.`,
      },
      {
        t: 'p',
        html: `<b>Step 2.</b> Substitute tan(<i>A</i> + <i>B</i>) = ${TAB}:<br>tan(${ABC})<br>= ${fr(`${TAB} + tan <i>C</i>`, `1 − ${fr('(tan <i>A</i> + tan <i>B</i>) tan <i>C</i>', '1 − tan <i>A</i> tan <i>B</i>')}`)}.<br><b>Reason:</b> the only substitution available, and it is exactly the one that makes the symmetric functions appear.`,
      },
      {
        t: 'p',
        html: `<b>Step 3.</b> Multiply numerator and denominator by (1 − tan <i>A</i> tan <i>B</i>):<br>tan(${ABC})<br>= ${fr('tan <i>A</i> + tan <i>B</i> + tan <i>C</i> − tan <i>A</i> tan <i>B</i> tan <i>C</i>', '1 − tan <i>A</i> tan <i>B</i> − tan <i>B</i> tan <i>C</i> − tan <i>C</i> tan <i>A</i>')}.<br><b>Reason:</b> the clearing produces four terms above and four below, and, remarkably, both are fully symmetric in <i>A</i>, <i>B</i>, <i>C</i>, even though the grouping in Step 1 was not.`,
      },
      {
        t: 'p',
        html: `<b>Step 4.</b> Recognise the symmetric functions:<br>tan(${ABC}) = ${T3}.<br><b>Reason:</b> the numerator is (sum of tangents) minus (product of all three); the denominator is 1 minus (sum of pairwise products). That the answer is symmetric is a proof that the bracketing choice in Step 1 did not matter.`,
      },
      {
        t: 'p',
        html: `<b>Step 5: the sine and cosine versions.</b> Write tan(${ABC}) = ${fr(`sin(${ABC})`, `cos(${ABC})`)} and multiply numerator and denominator of Step 4 by cos <i>A</i> cos <i>B</i> cos <i>C</i>:<br>${SIN3},   ${COS3}.<br><b>Reason:</b> multiplying ${S('1')} by cos <i>A</i> cos <i>B</i> cos <i>C</i> turns each tan into sin × the other two cosines, giving the expanded forms of ${ITEM('(D)')}. Those expanded forms carry no denominators and are therefore valid even where a tangent is undefined.`,
      },
      {
        t: 'p',
        html: `<b>Step 6: verify on a case you know.</b> Put <i>C</i> = 0: then tan <i>C</i> = 0, so ${S('1')} = tan <i>A</i> + tan <i>B</i>, ${S('2')} = tan <i>A</i> tan <i>B</i>, ${S('3')} = 0, and the formula returns ${TAB} = tan(<i>A</i> + <i>B</i>). <b>Reason:</b> a three-angle formula that does not collapse to the two-angle one has a sign error somewhere.`,
      },
      {
        t: 'proc',
        title: 'Procedure A: expanding cos nx or sin nx',
        steps: [
          '<b>Factor <i>n</i> and choose the shortest route.</b> If <i>n</i> = 2<i>m</i>, write <i>nx</i> = 2(<i>mx</i>) and use the double angle on the already-known <i>m</i>-th multiple. If <i>n</i> is odd and greater than 3, write <i>nx</i> = (<i>n</i> − 2)<i>x</i> + 2<i>x</i>. <b>Why:</b> the doubling route squares an expression you already have, which is one line; the additive route needs the full compound-angle formula, which is three.',
          '<b>Decide up front which function you want in the answer</b> and pick the matching form of the double angle: 2 cos<sup>2</sup> <i>ϕ</i> − 1 if the answer must be in cosines, 1 − 2 sin<sup>2</sup> <i>ϕ</i> if in sines. <b>Why:</b> choosing wrongly forces a Pythagorean conversion at the end and doubles the algebra.',
          '<b>Expand and collect.</b> <b>Why:</b> nothing subtle happens here; it is a binomial square or cube.',
          `<b>Run the four structural checks</b> (for cos <i>nx</i> in powers of cos <i>x</i>). Degree = <i>n</i>; leading coefficient = 2<sup><i>n</i>−1</sup>; only powers of the parity of <i>n</i>; and the coefficients must sum to 1. (For sin <i>nx</i> in powers of sin <i>x</i>, <i>n</i> odd, the leading coefficient is ±2<sup><i>n</i>−1</sup> and the coefficients sum to sin ${fr('<i>n</i>π', '2')} = ±1: + for <i>n</i> = 1, 5, 9, …, − for <i>n</i> = 3, 7, 11, ….) <b>Why:</b> four independent tests, all free, and together they catch essentially every algebra slip.`,
          `<b>Spot-check numerically at one angle,</b> for instance <i>x</i> = ${fr('π', '6')}. <b>Why:</b> the structural checks cannot detect two compensating errors; a numerical value can.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: using the three-angle formula',
        steps: [
          `<b>Compute ${S('1')}, ${S('2')}, ${S('3')} explicitly</b> and write them down before assembling anything. <b>Why:</b> the formula is short but the three ingredients are easy to conflate under pressure, and ${S('2')} in particular has three terms, not two.`,
          `<b>If the tangents are the roots of a cubic, read ${S('1')}, ${S('2')}, ${S('3')} straight off by Vieta.</b> For <i>x</i><sup>3</sup> − <i>px</i><sup>2</sup> + <i>qx</i> − <i>r</i> = 0 they are <i>p</i>, <i>q</i>, <i>r</i>. <b>Why:</b> the roots themselves are never needed, which is the whole point of the question type.`,
          `<b>Assemble</b> tan(${ABC}) = ${T3}, keeping the minus sign in the numerator. <b>Why:</b> dropping ${S('3')} is the classic error of the topic.`,
          `<b>Interpret a zero numerator or a zero denominator as information, not as failure.</b> Numerator zero means the sum is a multiple of π; denominator zero means it is an odd multiple of ${PI2}. <b>Why:</b> the two conditional identities of ${ITEM('(F)')} are exactly these two cases.`,
          `<b>Pin down the actual angle, not just its tangent.</b> tan <i>θ</i> = 0 allows <i>θ</i> = 0, π, 2π, …; use the sizes of the individual angles to choose. <b>Why:</b> ${INV} has tangent 0, but the answer is π, not 0, and only a size argument decides that.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Prove that cos 4<i>x</i> = ${COS4M}. (NCERT, Exercise 3.3, Question 24.)`,
        steps: [
          '<b>Step 1: climb one rung.</b> Treat 4<i>x</i> as twice the angle 2<i>x</i> and use the sin-only form of the double-angle formula, cos 2<i>ϕ</i> = 1 − 2 sin<sup>2</sup> <i>ϕ</i>, with <i>ϕ</i> = 2<i>x</i>:<br>cos 4<i>x</i> = 1 − 2 sin<sup>2</sup> 2<i>x</i>.<br>The sin-only form is chosen deliberately: the target contains sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i>, and only this form puts a sin 2<i>x</i> in place to be expanded.',
          '<b>Step 2: expand the inner double angle.</b> sin 2<i>x</i> = 2 sin <i>x</i> cos <i>x</i>, so<br>sin<sup>2</sup> 2<i>x</i> = 4 sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i>.',
          `<b>Step 3: substitute.</b><br>cos 4<i>x</i> = 1 − 2(4 sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i>) = ${COS4M}. ■`,
          `<b>Step 4: check at <i>x</i> = ${fr('π', '6')}.</b> Left side: cos ${fr('2π', '3')} = −${fr('1', '2')}. Right side: 1 − 8(${fr('1', '4')})(${fr('3', '4')}) = 1 − ${fr('3', '2')} = −${fr('1', '2')}. Agreed.`,
          `<b>A useful corollary in one more line.</b> Since 2 sin <i>x</i> cos <i>x</i> = sin 2<i>x</i>, the same statement reads cos 4<i>x</i> = 1 − 2 sin<sup>2</sup> 2<i>x</i>, and using sin<sup>2</sup> <i>ϕ</i> = ${fr('1 − cos 2<i>ϕ</i>', '2')} gives cos 4<i>x</i> = cos 4<i>x</i>: a tautology, which is the reassurance that no step lost information.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Prove that tan 4<i>x</i> = ${TAN4} (NCERT, Exercise 3.3, Question 23), and hence find tan 4<i>θ</i> when tan <i>θ</i> = ${third}.`,
        steps: [
          `<b>Step 1: the identity.</b> This is the derivation in the CBSE board derivations and key procedures part; the four lines are<br>tan 4<i>x</i> = ${fr('2 tan 2<i>x</i>', '1 − tan<sup>2</sup> 2<i>x</i>')} = ${NEST4} = ${CLEAR4} = ${fr(`4<i>t</i>(1 − ${TT})`, `1 − 6${TT} + <i>t</i><sup>4</sup>`)},<br>where <i>t</i> = tan <i>x</i>.`,
          `<b>Step 2: apply it.</b> With <i>t</i> = ${third}:<br>numerator = 4 · ${third} (1 − ${ninth}) = ${fr('4', '3')} · ${fr('8', '9')} = ${fr('32', '27')},<br>denominator = 1 − 6 · ${ninth} + ${fr('1', '81')} = ${fr('81 − 54 + 1', '81')} = ${fr('28', '81')}.`,
          `<b>Step 3: divide.</b><br>tan 4<i>θ</i> = ${fr('32', '27')} ÷ ${fr('28', '81')} = ${fr('32', '27')} · ${fr('81', '28')} = ${fr('32 · 3', '28')} = ${fr('96', '28')} = ${fr('24', '7')}.`,
          `<b>Step 4: confirm by the ladder.</b> tan 2<i>θ</i> = ${fr(`2(${third})`, `1 − ${ninth}`)} = ${fr(fr('2', '3'), fr('8', '9'))} = ${fr('3', '4')}, and then tan 4<i>θ</i> = ${fr(`2(${fr('3', '4')})`, `1 − ${fr('9', '16')}`)} = ${fr(fr('3', '2'), fr('7', '16'))} = ${fr('24', '7')}. Same answer by a completely different arithmetic path.`,
          '<b>Which route to use in the exam.</b> For a numerical tan <i>θ</i>, climb the ladder: two easy fractions beat one messy quartic. For a symbolic answer, quote the quartic form. The identity is worth knowing precisely because NCERT asks for it in that shape.',
        ],
        ans: `tan 4<i>θ</i> = ${fr('24', '7')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'If <i>A</i> = <i>B</i> = <i>C</i> = 15°, use the three-angle formula to find tan(<i>A</i> + <i>B</i> + <i>C</i>), and check your answer.',
        steps: [
          `<b>The trap.</b> The two-angle formula is ${TAB}: sum on top, one-minus-product below. The hand generalises it to ${T3S1} (sum on top, one minus the pairwise products below) and the missing −${S('3')} is invisible, because it is a subtraction of a small number and the answer still looks plausible.`,
          `<b>The correct work.</b><br><b>Step 1: the three symmetric functions.</b> With tan 15° = 2 − √3 ≈ 0.267949:<br>${S('1')} = 3 tan 15° ≈ 0.803848,   ${S('2')} = 3 tan<sup>2</sup> 15° ≈ 0.215390,   ${S('3')} = tan<sup>3</sup> 15° ≈ 0.019238.`,
          `<b>Step 2: assemble, keeping ${S('3')}.</b><br>tan(${ABC}) = ${T3} ≈ ${fr('0.803848 − 0.019238', '1 − 0.215390')} = ${fr('0.784610', '0.784610')} = 1.`,
          '<b>Step 3: the independent check.</b> <i>A</i> + <i>B</i> + <i>C</i> = 45°, and tan 45° = 1 exactly. The formula is correct to every digit computed, which is not a coincidence: the numerator and denominator came out equal because they must.',
          `<b>Seductive wrong answer: ${T3S1} ≈ ${fr('0.803848', '0.784610')} ≈ 1.02452.</b> It is close enough to 1 to be mistaken for rounding error, which is exactly what makes it dangerous: a student who has forgotten −${S('3')} will “confirm” the wrong formula against a decimal check and carry the error into every later question.`,
          `<b>The defence. Count the degrees.</b> The two-angle formula has degree 1 on top and degree 2 below. The three-angle formula must reach degree 3 on top and degree 2 below, alternating in sign: ${S('1')} − ${S('3')} over 1 − ${S('2')}. The general pattern of ${ITEM('(E)')} is ${TNA}: odd degrees above, even below, signs alternating from the start. Reconstructing it from that sentence is faster than remembering it and is much harder to get wrong.`,
        ],
        ans: `tan(${ABC}) = 1.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Suppose tan <i>A</i>, tan <i>B</i>, tan <i>C</i> are the roots of <i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup> + 11<i>x</i> − 6 = 0, with <i>A</i>, <i>B</i>, <i>C</i> all in (0, ${PI2}). Find ${ABC}. Deduce the value of ${INV}.`,
        steps: [
          `<b>Step 1: read off the symmetric functions by Vieta.</b> For <i>x</i><sup>3</sup> − <i>px</i><sup>2</sup> + <i>qx</i> − <i>r</i> = 0 the elementary symmetric functions of the roots are <i>p</i>, <i>q</i>, <i>r</i>. Here<br>${S('1')} = 6,   ${S('2')} = 11,   ${S('3')} = 6.<br>Note that we have not solved the cubic, and will not need to for the first part.`,
          `<b>Step 2: apply the three-angle formula.</b><br>tan(${ABC}) = ${T3} = ${fr('6 − 6', '1 − 11')} = ${fr('0', '−10')} = 0.`,
          `<b>Step 3: from the tangent to the angle.</b> tan <i>θ</i> = 0 gives <i>θ</i> = <i>n</i>π (${T06}, item (A)), so ${ABC} is a multiple of π. Which one?`,
          `<b>Step 4: bound the sum.</b> Each of <i>A</i>, <i>B</i>, <i>C</i> lies strictly in (0, ${PI2}), so 0 < ${ABC} < ${fr('3π', '2')}. The only multiple of π in that range is π itself. Hence<br>${ABC} = π.`,
          '<b>This bounding step is the whole difficulty of the problem.</b> The algebra gave a tangent; only an inequality can convert a tangent into an angle.',
          `<b>Step 5: identify the roots for the deduction.</b> The cubic factors as <i>x</i><sup>3</sup> − 6<i>x</i><sup>2</sup> + 11<i>x</i> − 6 = (<i>x</i> − 1)(<i>x</i> − 2)(<i>x</i> − 3), so the roots are 1, 2, 3 and the angles are tan<sup>−1</sup> 1, tan<sup>−1</sup> 2, tan<sup>−1</sup> 3, all in (0, ${PI2}), as required.`,
          `<b>Step 6: conclude.</b><br>${INV} = π.`,
          '<b>Step 7: numerical confirmation.</b> 0.785398 + 1.107149 + 1.249046 = 3.141593 = π to six decimal places.',
          `<b>What made this Advanced.</b> Three separate ideas had to combine. First, that Vieta’s relations and the <i>S</i>-notation are the same three numbers, so a cubic is a disguised angle sum and the roots never need to be found. Second, that tan <i>θ</i> = 0 underdetermines <i>θ</i>, so the answer requires a bound and not just algebra: a student who writes “${ABC} = 0” has done every calculation correctly and still has the wrong answer. Third, that ${S('1')} = ${S('3')} is precisely the condition ∑ tan <i>A</i> = ∏ tan <i>A</i> from ${T05('(J)')}, which holds exactly when the angles sum to a multiple of π: the problem was engineered around that identity, and recognising it makes the answer visible from Step 1.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `Prove that ${COS6}. (NCERT, Exercise 3.3, Question 25.)`,
            a: 'cos 6<i>x</i> = 2 cos<sup>2</sup> 3<i>x</i> − 1 and cos 3<i>x</i> = 4 cos<sup>3</sup> <i>x</i> − 3 cos <i>x</i>, so cos 6<i>x</i> = 2(4<i>c</i><sup>3</sup> − 3<i>c</i>)<sup>2</sup> − 1 = 2(16<i>c</i><sup>6</sup> − 24<i>c</i><sup>4</sup> + 9<i>c</i><sup>2</sup>) − 1 = 32<i>c</i><sup>6</sup> − 48<i>c</i><sup>4</sup> + 18<i>c</i><sup>2</sup> − 1 with <i>c</i> = cos <i>x</i>. Structural check: leading coefficient 32 = 2<sup>5</sup>, only even powers, coefficients sum to 32 − 48 + 18 − 1 = 1.',
          },
          {
            q: 'Express sin 5<i>θ</i> as a polynomial in sin <i>θ</i>.',
            a: 'sin 5<i>θ</i> = 16 sin<sup>5</sup> <i>θ</i> − 20 sin<sup>3</sup> <i>θ</i> + 5 sin <i>θ</i>. (Route: sin 5<i>θ</i> = sin(3<i>θ</i> + 2<i>θ</i>), then expand both multiples.)',
          },
          {
            q: 'Prove that sin 4<i>x</i> = 4 sin <i>x</i> cos<sup>3</sup> <i>x</i> − 4 cos <i>x</i> sin<sup>3</sup> <i>x</i>.',
            a: '4 sin <i>x</i> cos <i>x</i> (cos<sup>2</sup> <i>x</i> − sin<sup>2</sup> <i>x</i>) = 2 sin 2<i>x</i> cos 2<i>x</i> = sin 4<i>x</i>.',
          },
          {
            q: `If ${ABC} = ${PI2}, prove that tan <i>A</i> tan <i>B</i> + tan <i>B</i> tan <i>C</i> + tan <i>C</i> tan <i>A</i> = 1.`,
            a: `${ABC} = ${PI2} makes tan(${ABC}) undefined, so the denominator 1 − ${S('2')} of ${T3} must vanish (the numerator is finite), giving ${S('2')} = 1.`,
          },
          {
            q: `Prove that tan<sup>−1</sup> ${fr('1', '2')} + tan<sup>−1</sup> ${fr('1', '5')} + tan<sup>−1</sup> ${fr('1', '8')} = ${fr('π', '4')}.`,
            a: `${S('1')} = ${fr('1', '2')} + ${fr('1', '5')} + ${fr('1', '8')} = ${fr('33', '40')}; ${S('2')} = ${fr('1', '10')} + ${fr('1', '40')} + ${fr('1', '16')} = ${fr('8 + 2 + 5', '80')} = ${fr('15', '80')} = ${fr('3', '16')}; ${S('3')} = ${fr('1', '80')}. Then tan(sum) = ${fr(`${fr('33', '40')} − ${fr('1', '80')}`, `1 − ${fr('3', '16')}`)} = ${fr(fr('65', '80'), fr('13', '16'))} = ${fr(fr('13', '16'), fr('13', '16'))} = 1. Each angle is less than tan<sup>−1</sup> 1 = ${fr('π', '4')} and all are positive, so the sum lies in (0, ${fr('3π', '4')}); the only value there with tangent 1 is ${fr('π', '4')}.`,
          },
          {
            q: 'Write tan 5<i>θ</i> as a rational function of <i>t</i> = tan <i>θ</i>.',
            a: `tan 5<i>θ</i> = ${T5T}, the binomial coefficients being ${C5('1')}, ${C5('3')}, ${C5('5')} above and ${C5('2')}, ${C5('4')} below.`,
          },
          {
            q: 'Deduce the conditional identity tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i> for <i>A</i> + <i>B</i> + <i>C</i> = π directly from the three-angle formula, and state the values of <i>A</i>, <i>B</i>, <i>C</i> for which the deduction is invalid.',
            a: `${ABC} = π ⇒ tan(${ABC}) = 0 ⇒ ${S('1')} − ${S('3')} = 0, i.e. ∑ tan <i>A</i> = ∏ tan <i>A</i>. The deduction is invalid if any of <i>A</i>, <i>B</i>, <i>C</i> is an odd multiple of ${PI2} (in a triangle, a right angle), since that tangent is undefined and neither ${S('1')} nor ${S('3')} exists. (For a right-angled triangle the identity is therefore vacuous, not false.)`,
          },
          {
            q: `In a triangle <i>ABC</i>, prove that tan ${half('<i>A</i>')} tan ${half('<i>B</i>')} + tan ${half('<i>B</i>')} tan ${half('<i>C</i>')} + tan ${half('<i>C</i>')} tan ${half('<i>A</i>')} = 1.`,
            a: `Since ${ABC} = π, the half-angles satisfy ${half('<i>A</i>')} + ${half('<i>B</i>')} + ${half('<i>C</i>')} = ${PI2}, so Question 4 applies directly with the half-angles in place of <i>A</i>, <i>B</i>, <i>C</i>. No half-angle equals ${PI2}, since each is strictly less than ${PI2}, so every tangent is defined.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'cos 4<i>x</i> equals',
        opts: [
          { label: COS4C, nudge: null },
          {
            label: '4 cos<sup>3</sup> <i>x</i> − 3 cos <i>x</i>',
            nudge: '<b>(B)</b> is cos 3<i>x</i>, one rung too low. The leading-coefficient check exposes it instantly: cos 4<i>x</i> must lead with 2<sup>4−1</sup> = 8, and <b>(B)</b> leads with 4 = 2<sup>3−1</sup>.',
          },
          { label: '2 cos<sup>2</sup> <i>x</i> − 1', nudge: '<b>(C)</b> is cos 2<i>x</i>, two rungs too low.' },
          {
            label: '1 − 8 sin<sup>4</sup> <i>x</i>',
            nudge: `<b>(D)</b> is the sine-only form with a term dropped; the correct version is ${COS4S}. Test <i>x</i> = ${PI2}: <b>(D)</b> gives 1 − 8 = −7, but cos 2π = 1.`,
          },
        ],
        correct: 0,
        solution: 'Double the double angle: 2(2 cos<sup>2</sup> <i>x</i> − 1)<sup>2</sup> − 1.',
      },
      {
        t: 'mcq',
        q: `With ${S('1')} = ∑ tan <i>A</i>, ${S('2')} = ∑ tan <i>A</i> tan <i>B</i>, ${S('3')} = tan <i>A</i> tan <i>B</i> tan <i>C</i>, tan(${ABC}) equals`,
        opts: [
          {
            label: T3S1,
            nudge: `<b>(A)</b> drops ${S('3')}: the classic error, and the trap of the third worked example. It is refuted by <i>A</i> = <i>B</i> = <i>C</i> = 15°, where the true answer is tan 45° = 1 and <b>(A)</b> gives ≈ 1.0245.`,
          },
          { label: T3, nudge: null },
          {
            label: fr(`${S('1')} + ${S('3')}`, `1 − ${S('2')}`),
            nudge: `<b>(C)</b> gets the degree pattern right but the sign wrong. The signs alternate from the start: ${S('1')} − ${S('3')} + ${S('5')} − ⋯.`,
          },
          {
            label: fr(`${S('1')} − ${S('3')}`, `1 + ${S('2')}`),
            nudge: `<b>(D)</b> flips the denominator sign. Setting <i>C</i> = 0 must recover tan(<i>A</i> + <i>B</i>) = ${TAB}; <b>(D)</b> returns ${fr('tan <i>A</i> + tan <i>B</i>', '1 + tan <i>A</i> tan <i>B</i>')}, which has the wrong denominator sign and is neither the sum formula nor the difference formula.`,
          },
        ],
        correct: 1,
        solution: `Bracket (<i>A</i> + <i>B</i>) + <i>C</i> and clear the inner fraction: the numerator is tan <i>A</i> + tan <i>B</i> + tan <i>C</i> − tan <i>A</i> tan <i>B</i> tan <i>C</i> = ${S('1')} − ${S('3')}, the denominator 1 − ${S('2')}.`,
      },
      {
        t: 'mcq',
        q: `${INV} equals`,
        opts: [
          {
            label: '0',
            nudge: '<b>(A)</b> is the answer of a student who computes tan(sum) = 0 and stops. It is the commonest wrong answer here, and it is refuted by observing that all three terms are positive, so the sum cannot be zero.',
          },
          {
            label: PI2,
            nudge: `<b>(B)</b> would need the denominator 1 − ${S('2')} to vanish, i.e. ${S('2')} = 1; here ${S('2')} = 11.`,
          },
          {
            label: fr('3π', '4'),
            nudge: `<b>(C)</b> is a plausible-looking fraction of π but has tangent −1, not 0. Estimating numerically (tan<sup>−1</sup> 1 = ${fr('π', '4')} and the other two terms each exceed 1 radian) puts the sum above 2.78, which already exceeds ${fr('3π', '4')} ≈ 2.36, ruling <b>(C)</b> out.`,
          },
          { label: 'π', nudge: null },
        ],
        correct: 3,
        solution: `${S('1')} = 6, ${S('2')} = 11, ${S('3')} = 6, so the tangent of the sum is 0; and since each term is positive and less than ${PI2}, the sum lies in (0, ${fr('3π', '2')}), forcing π.`,
      },
      {
        t: 'mcq',
        q: `If ${ABC} = ${PI2}, then tan <i>A</i> tan <i>B</i> + tan <i>B</i> tan <i>C</i> + tan <i>C</i> tan <i>A</i> equals`,
        opts: [
          {
            label: '0',
            nudge: `<b>(A)</b> confuses “the tangent is undefined” with “the tangent is zero”. A zero numerator would give ${S('1')} = ${S('3')}; it is the denominator that vanishes here.`,
          },
          { label: '1', nudge: null },
          {
            label: '−1',
            nudge: `<b>(C)</b> has the sign of the rearrangement wrong: 1 − ${S('2')} = 0 gives ${S('2')} = +1.`,
          },
          {
            label: 'tan <i>A</i> tan <i>B</i> tan <i>C</i>',
            nudge: `<b>(D)</b> is the ${ABC} = π identity (${S('1')} = ${S('3')}) imported into the wrong condition. The two corollaries of ${ITEM('(F)')} are easy to swap; the discriminator is whether the sum is π (numerator vanishes) or ${PI2} (denominator vanishes).`,
          },
        ],
        correct: 1,
        solution: `tan ${PI2} is undefined, so the denominator 1 − ${S('2')} must be zero.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Dropping ${S('3')} from the three-angle tangent.</b> The numerator is ${S('1')} − ${S('3')}, not ${S('1')}. <b>Correction:</b> count degrees. Odd degrees above (1, 3, 5, …), even below (0, 2, 4, …), signs alternating from the start.`,
          '<b>Treating cos 4<i>x</i> as a formula to memorise.</b> It is two applications of the double angle. <b>Correction:</b> learn the ladder, not the rungs; you will never mis-remember a formula you can rebuild in fifteen seconds.',
          '<b>Choosing the wrong form of the double angle at the first rung.</b> If the target is in cosines, use 2 cos<sup>2</sup> <i>ϕ</i> − 1 at both rungs; if in sines, use 1 − 2 sin<sup>2</sup> <i>ϕ</i>. <b>Correction:</b> decide the target function before writing anything.',
          '<b>Concluding <i>θ</i> = 0 from tan <i>θ</i> = 0.</b> The tangent determines the angle only up to π. <b>Correction:</b> bound the sum using the sizes of the individual angles, then pick the unique multiple of π inside that range.',
          `<b>Swapping the two conditional corollaries.</b> ${ABC} = π kills the numerator (${S('1')} = ${S('3')}); ${ABC} = ${PI2} kills the denominator (${S('2')} = 1). <b>Correction:</b> ask whether the target tangent is 0 or undefined, and let that pick the equation.`,
          '<b>Applying the tangent formulas where a tangent is undefined.</b> In a right-angled triangle, ∑ tan <i>A</i> = ∏ tan <i>A</i> is vacuous. <b>Correction:</b> state the exclusions; NCERT and JEE both attach them to the formula, and marks follow.',
          '<b>Not checking the expansion structurally.</b> A wrong leading coefficient or an odd power in cos 6<i>x</i> is a guaranteed error. <b>Correction:</b> degree <i>n</i>, leading coefficient 2<sup><i>n</i>−1</sup>, parity matching <i>n</i>, coefficients summing to 1. Four free checks.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• For a numerical multiple angle, climb the ladder one rung at a time: tan <i>θ</i> → tan 2<i>θ</i> → tan 4<i>θ</i> is two easy fractions. Reserve the expanded quartic for symbolic answers and for questions that explicitly demand it.<br>• The coefficient sum test (cos(<i>n</i> · 0) = 1, i.e. put cos <i>x</i> = 1) takes three seconds and catches almost every slip. For cos 6<i>x</i>: 32 − 48 + 18 − 1 = 1. For cos 4<i>x</i>: 8 − 8 + 1 = 1.<br>• Whenever a question hands you a cubic whose roots are described as tangents, write down ${S('1')}, ${S('2')}, ${S('3')} by Vieta before reading the rest of the question. The angle sum is then one substitution away and the roots are never needed.<br>• The three-angle formulas are the source of the conditional identities in ${T05('(J)')}, not a separate topic. Deriving ∑ tan <i>A</i> = ∏ tan <i>A</i> from tan(${ABC}) = 0 is one line and is far more reliable than recalling the identity.<br>• Set <i>C</i> = 0 in any three-angle formula you have just written. It must collapse to the corresponding two-angle formula. It catches errors in the terms without <i>C</i>, but not a dropped or wrongly signed ${S('3')}, which vanishes at <i>C</i> = 0: for that, also try <i>A</i> = <i>B</i> = <i>C</i> = 15°, where the answer must be tan 45° = 1.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Ladder, not list',
            note: 'cos 4<i>x</i> = 2 cos<sup>2</sup> 2<i>x</i> − 1; cos 6<i>x</i> = 2 cos<sup>2</sup> 3<i>x</i> − 1; cos 5<i>x</i> = cos(3<i>x</i> + 2<i>x</i>).',
          },
          { f: 'Fourth multiple', note: `${SIN4}; ${COS4}; tan 4<i>x</i> = ${TAN4}.` },
          {
            f: 'Fifth and sixth',
            note: `${SIN5}; ${COS5}; tan 5<i>x</i> = ${T5T} with <i>t</i> = tan <i>x</i>; ${COS6}.`,
          },
          {
            f: 'Structural checks for cos <i>nx</i> in powers of cos <i>x</i>',
            note: 'degree <i>n</i>; leading coefficient 2<sup><i>n</i>−1</sup>; only powers of the parity of <i>n</i>; coefficients sum to 1.',
          },
          {
            f: 'General multiple (de Moivre)',
            note: `tan <i>nx</i> = ${fr(`${nC('1')}<i>t</i> − ${nC('3')}<i>t</i><sup>3</sup> + ⋯`, `1 − ${nC('2')}<i>t</i><sup>2</sup> + ${nC('4')}<i>t</i><sup>4</sup> − ⋯`)}, <i>t</i> = tan <i>x</i>.`,
          },
          {
            f: `Three angles (${SDEF})`,
            note: `tan(${ABC}) = ${T3}, ${SIN3}, ${COS3}.`,
          },
          {
            f: '<i>n</i> angles',
            note: `tan(∑ <i>A</i><sub><i>i</i></sub>) = ${TNA}. Odd degrees above, even below, alternating signs.`,
          },
          {
            f: 'Corollaries',
            note: `${ABC} = π ⇒ ${S('1')} = ${S('3')} (numerator dies); ${ABC} = ${PI2} ⇒ ${S('2')} = 1 (denominator dies). Applied to half-angles of a triangle, the second gives ∑ tan ${half('<i>A</i>')} tan ${half('<i>B</i>')} = 1.`,
          },
          {
            f: 'Vieta bridge',
            note: `roots of <i>x</i><sup>3</sup> − <i>px</i><sup>2</sup> + <i>qx</i> − <i>r</i> = 0 give ${S('1')} = <i>p</i>, ${S('2')} = <i>q</i>, ${S('3')} = <i>r</i>, so tan(∑ <i>A</i>) = ${fr('<i>p</i> − <i>r</i>', '1 − <i>q</i>')} without solving the cubic.`,
          },
          {
            f: 'From tangent to angle',
            note: `tan <i>θ</i> = 0 gives <i>θ</i> = <i>n</i>π; bound the sum from the sizes of the individual angles to pick <i>n</i>. (${INV} = π, not 0.)`,
          },
          {
            f: 'Golden rule',
            note: 'never memorise a high multiple: rebuild it from the double or triple angle, then run the four structural checks.',
          },
        ],
        aids: [],
      },
    ],
  },
];
