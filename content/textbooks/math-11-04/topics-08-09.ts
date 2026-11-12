import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 08 and 09, from the "Additional Topics" part of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word:
 * Topic 08 "Transformation of Equations and Functions of the Roots" (pp. 397–407;
 * its cheat sheet ends on p. 408) and Topic 09 "Complex Numbers as Vectors:
 * Perpendicularity, Dot and Cross Products" (pp. 408–413).
 * The part heading "Chapter 4: Complex Numbers and Quadratic Equations —
 * Additional Topics" (p. 397) is not copied; its opening text and its table of
 * Subtopics 08–09 open Topic 08's Exam relevance part, with "Subtopic" → "Topic"
 * (decision 17). Topic 08 opens with its "Exam Relevance:" box as a part of its
 * own, then is split at its Sections 1 to 8. Topic 09 has no numbered sections:
 * the book sets it as "Method", worked examples, "Practice Exercises" and a
 * "Cheat Sheet Box", and its parts follow those headings.
 * Each topic's own unnumbered figure, "Figure 1" (p. 400) and "Figure 2"
 * (p. 410), is m11-04-08-d1 and m11-04-09-d1, placed where its caption is
 * printed.
 * Every fraction is stacked (<frac>), except inside a raised run; no em dashes.
 * A conjugate is the letter followed by U+0305; a bar over a whole expression is
 * a U+0305 after every character under it (spaces left out of the barred run).
 */

const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const BAR = '̅';
const A = '<i>α</i>';
const B = '<i>β</i>';
const PHI = '<i>φ</i>';
const PSI = '<i>ψ</i>';
const QUAD = '<i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i>';
const S = (k: string) => `<i>S</i><sub>${k}</sub>`;
const SN = S('<i>n</i>');
const SN1 = S('<i>n</i>−1');
const SN2 = S('<i>n</i>−2');
const BA = fr('<i>b</i>', '<i>a</i>');
const CA = fr('<i>c</i>', '<i>a</i>');
const NEWTON = `<i>a</i>${SN} + <i>b</i>${SN1} + <i>c</i>${SN2} = 0`;
const NEWTON_SOLVED = `${SN} = −${BA}${SN1} − ${CA}${SN2}`;
const D4A = fr('<i>D</i>', '4<i>a</i>');
const B2A = fr('<i>b</i>', '2<i>a</i>');
const SQ_EQ = '<i>a</i><sup>2</sup><i>y</i><sup>2</sup> + (2<i>ac</i> − <i>b</i><sup>2</sup>)<i>y</i> + <i>c</i><sup>2</sup> = 0';
const SQ_SUM = fr('<i>b</i><sup>2</sup> − 2<i>ac</i>', '<i>a</i><sup>2</sup>');
const SQ_PROD = fr('<i>c</i><sup>2</sup>', '<i>a</i><sup>2</sup>');
const MOB = (r: string) => fr(`<i>p</i>${r} + <i>q</i>`, `<i>r</i>${r} + <i>s</i>`);
const MOB_X = fr('<i>q</i> − <i>sy</i>', '<i>ry</i> − <i>p</i>');
const REDUCE = `<i>g</i>(<i>x</i>) = (${QUAD})<i>q</i>(<i>x</i>) + <i>px</i> + <i>t</i>`;
const R3 = '<i>i</i>√3';
const E = (x: string) => `<i>e</i><sup>${x}</sup>`;
const z = (k: string | number) => `<i>z</i><sub>${k}</sub>`;
const zb = (k: string | number) => `<i>z</i>${BAR}<sub>${k}</sub>`;
const U = '<i>u</i>';
const V = '<i>v</i>';
const UBV = `<i>u</i>${BAR}<i>v</i>`;
const UVB = `<i>u</i><i>v</i>${BAR}`;
const UV = '<i>uv</i>';
const UOV = fr(U, V);
const HALF = fr('1', '2');
const THIRD = fr('1', '3');
const Z123 = `${z(1)} + ${z(2)} + ${z(3)}`;
const AREA1 = `${HALF}|Im[(${zb(2)} − ${zb(1)})(${z(3)} − ${z(1)})]|`;
const AREA2 = `${HALF}|Im(${zb(1)}${z(2)} + ${zb(2)}${z(3)} + ${zb(3)}${z(1)})|`;
/** (H − z₁) under one bar, as the book prints it in the third worked example of Topic 09. */
const HZ1_BAR = `(${BAR}<i>H</i>${BAR}−${BAR}<i>z</i>${BAR}<sub>1${BAR}</sub>)${BAR}`;
/** (z₂ + z₃) under one bar. */
const Z23_BAR = `(${BAR}<i>z</i>${BAR}<sub>2${BAR}</sub>+${BAR}<i>z</i>${BAR}<sub>3${BAR}</sub>)${BAR}`;
/** z̄₂z₃ under one bar (the z of z̄₂ carries two). */
const Z2Z3_BAR = `<i>z</i>${BAR}${BAR}<sub>2${BAR}</sub><i>z</i>${BAR}<sub>3${BAR}</sub>`;
/** (z₁ + z₂ + z₃) under one bar. */
const Z123_BAR = `(${BAR}<i>z</i>${BAR}<sub>1${BAR}</sub>+${BAR}<i>z</i>${BAR}<sub>2${BAR}</sub>+${BAR}<i>z</i>${BAR}<sub>3${BAR}</sub>)${BAR}`;
const T07 = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 08 · pp. 397–408 ────────────────
  {
    n: '08',
    title: 'Transformation of Equations and Functions of the Roots',
    kalam: 'A quadratic equation is a machine for lowering exponents.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Topics 01–07 together cover the whole NCERT syllabus for this chapter and the great majority of what JEE asks. Topic 07 closed the chapter’s largest hole (real quadratics: sign, range, extremum, location of roots, and common roots). Two genuine gaps remain.',
      },
      {
        t: 'p',
        html: 'The first is on the quadratic side. Every topic so far solves a given equation or reads its roots off the coefficients. None of them <b>builds a new equation</b> whose roots are a stated function of the old ones (the transformation family), and none supplies the two machines that make functions of the roots computable without ever finding the roots: Newton’s power-sum recurrence and reduction of a polynomial modulo the quadratic.',
      },
      {
        t: 'p',
        html: `The second is on the complex side. Topic 06 gives you the collinearity test “${fr(`${z(3)} − ${z(1)}`, `${z(2)} − ${z(1)}`)} is real”. Its exact companion, “${fr(`${z(2)} − ${z(1)}`, `${z(4)} − ${z(3)}`)} is purely imaginary if and only if the segments are perpendicular”, appears there only in the special case of a right angle at a point (its semicircle locus and fifth worked example), and the whole dictionary that turns Re(${UBV}) into a dot product and Im(${UBV}) into a cross product is absent. Rotation itself is already covered (Topic 06, Theorem 1 and its fourth worked example) and is <b>not</b> re-taught here.`,
      },
      {
        t: 'p',
        html: 'The book’s “Additional Topics” part adds two items, Topics 08 and 09, continuing the topic numbering:',
      },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Topic', 'Read after'],
        rows: [
          ['Topic 08', 'Transformation of equations; Newton’s recurrence; reduction modulo the quadratic', 'Topic 07'],
          ['Topic 09', 'Complex numbers as vectors: perpendicularity, dot and cross products, area', 'Topic 06'],
        ],
      },
      {
        t: 'p',
        html: 'Wavy-curve and graphical inequality work is deliberately <b>not</b> repeated here: Chapter 5, Unit 4 develops the wavy-curve algorithm in full, and Topic 07’s Procedure B already hands the quadratic case over to it by name.',
      },
      {
        t: 'p',
        html: `CBSE Boards touch only the easy end: “form the equation whose roots are ${A} + 2 and ${B} + 2” style questions worth 2 marks, built directly on the sum-and-product formula of Topic 04. JEE Main tests the transformation substitution itself almost every year ${T07}, most often reciprocal roots, squared roots, or a Möbius combination such as ${fr(A, `${A} − 2`)}; these are pure-speed questions where the substitution route beats computing the roots by a factor of three. JEE Advanced pushes into Newton’s recurrence for ${A}<sup><i>n</i></sup> + ${B}<sup><i>n</i></sup> at large <i>n</i>, and into evaluating a high-degree polynomial at a root by reducing it modulo the quadratic, both of which look impossible until you see the one line that collapses them. NEET does not test mathematics.`,
      },
      {
        t: 'p',
        html: `Everything here assumes ${A}, ${B} are the roots of ${QUAD} = 0 with <i>a</i> ≠ 0, and uses only Vieta’s relations ${A} + ${B} = −${BA}, <i>αβ</i> = ${CA} from Topic 04 and the symmetric-function identities from Topic 07.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Change the ruler, not the object.</b> Suppose the Konkan Railway publishes a timetable in Indian Standard Time and you want the same timetable in Gulf Standard Time, ninety minutes behind. You do not re-survey the track. You take the one rule that converts a time (subtract ninety minutes) and apply it to the timetable itself. Every arrival shifts; the train, the track and the ordering are untouched.',
      },
      {
        t: 'p',
        html: `A transformation of equations is exactly that. You are handed ${QUAD} = 0 and asked for the equation whose roots are ${A} + <i>h</i> and ${B} + <i>h</i>, or ${fr('1', A)} and ${fr('1', B)}, or ${A}<sup>2</sup> and ${B}<sup>2</sup>. <b>The wrong move is to find ${A} and ${B}.</b> They are usually irrational or non-real and you do not need them. The right move is to write down the rule <i>y</i> = ${PHI}(<i>x</i>) that carries an old root to a new one, invert it to get <i>x</i> in terms of <i>y</i>, and substitute that into the equation you already have. What comes out is an equation in <i>y</i>, satisfied by exactly the numbers you wanted.`,
      },
      {
        t: 'p',
        html: `Where it breaks down is instructive, and it breaks down in exactly one place: <b>the substitution must be reversible on the roots you care about.</b> If ${PHI} sends two different old roots to the same new number, or if inverting ${PHI} needs a square root and therefore two branches, the transformed equation can gain roots you did not ask for or lose one you did. That is why the reciprocal transformation carries the rider <i>c</i> ≠ 0 and why the squaring transformation is derived by squaring the equation, never by writing <i>x</i> = √<i>y</i>.`,
      },
      {
        t: 'p',
        html: `<b>Two roots, one recursion.</b> For powers there is a second idea, and it is the more powerful one. You want ${A}<sup>9</sup> + ${B}<sup>9</sup>. You could grind out symmetric-function identities. Instead, notice that ${A} satisfies <i>aα</i><sup>2</sup> = −<i>bα</i> − <i>c</i>: a rule for trading one power of ${A} down to lower powers. Applied over and over, it turns any power of ${A} into a linear expression in ${A}, and it turns the sequence ${SN} = ${A}<sup><i>n</i></sup> + ${B}<sup><i>n</i></sup> into a three-term recurrence you can run on your fingers. <b>A quadratic equation is a machine for lowering exponents.</b> That single sentence is Newton’s theorem and the reduction method both.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>The transformation rule.</b> Let <i>f</i>(<i>x</i>) = ${QUAD} = 0 have roots ${A}, ${B}, and let <i>y</i> = ${PHI}(<i>x</i>) be the required rule. If ${PHI} can be inverted as <i>x</i> = ${PSI}(<i>y</i>) on the relevant values, then the equation with roots ${PHI}(${A}), ${PHI}(${B}) is`,
      },
      {
        t: 'formula',
        kicker: 'The transformation rule',
        main: `<i>f</i>(${PSI}(<i>y</i>)) = 0`,
        legend: [
          `<i>f</i> = the original quadratic (${QUAD})`,
          `${PSI} = the inverse of the rule ${PHI} (<i>x</i> = ${PSI}(<i>y</i>))`,
          `${PHI} = the rule carrying an old root to a new one (<i>y</i> = ${PHI}(<i>x</i>))`,
          `<i>y</i> = the new unknown (a transformed root)`,
        ],
        note: null,
      },
      { t: 'p', html: 'cleared of denominators. Every entry in the table below is one application of this rule.' },
      {
        t: 'table',
        title: null,
        head: ['Required roots', 'Substitute', 'Transformed equation', 'Validity'],
        rows: [
          [
            `${A} + <i>h</i>, ${B} + <i>h</i>`,
            '<i>x</i> = <i>y</i> − <i>h</i>',
            '<i>ay</i><sup>2</sup> + (<i>b</i> − 2<i>ah</i>)<i>y</i> + (<i>ah</i><sup>2</sup> − <i>bh</i> + <i>c</i>) = 0',
            'none',
          ],
          [
            `${A} − <i>h</i>, ${B} − <i>h</i>`,
            '<i>x</i> = <i>y</i> + <i>h</i>',
            '<i>ay</i><sup>2</sup> + (<i>b</i> + 2<i>ah</i>)<i>y</i> + (<i>ah</i><sup>2</sup> + <i>bh</i> + <i>c</i>) = 0',
            'none',
          ],
          [`<i>kα</i>, <i>kβ</i>`, `<i>x</i> = ${fr('<i>y</i>', '<i>k</i>')}`, '<i>ay</i><sup>2</sup> + <i>bky</i> + <i>ck</i><sup>2</sup> = 0', '<i>k</i> ≠ 0'],
          [`−${A}, −${B}`, '<i>x</i> = −<i>y</i>', '<i>ay</i><sup>2</sup> − <i>by</i> + <i>c</i> = 0', 'none'],
          [`${fr('1', A)}, ${fr('1', B)}`, `<i>x</i> = ${fr('1', '<i>y</i>')}`, '<i>cy</i><sup>2</sup> + <i>by</i> + <i>a</i> = 0', '<i>c</i> ≠ 0'],
          [`${A}<sup>2</sup>, ${B}<sup>2</sup>`, 'square the equation', SQ_EQ, 'none'],
          ['no <i>y</i>-term (“depressed”)', `<i>x</i> = <i>y</i> − ${B2A}`, `<i>ay</i><sup>2</sup> − ${D4A} = 0`, 'none'],
          [`${MOB(A)}, ${MOB(B)}`, `<i>x</i> = ${MOB_X}`, 'substitute, then clear', '<i>ps</i> − <i>qr</i> ≠ 0'],
        ],
      },
      {
        t: 'p',
        html: `Symbols: <i>h</i>, <i>k</i>, <i>p</i>, <i>q</i>, <i>r</i>, <i>s</i> are real (or complex) constants; <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i> as in Topic 04. Note that the reciprocal transformation simply <b>reverses the coefficient string</b> <i>a</i>, <i>b</i>, <i>c</i> → <i>c</i>, <i>b</i>, <i>a</i>: it does not change any sign. The depressed form <i>ay</i><sup>2</sup> = ${D4A} is the vertex form of Topic 07 read as an equation, which is the cleanest proof that the two topics are the same picture.`,
      },
      {
        t: 'p',
        html: `<b>Newton’s theorem (power sums).</b> Put ${SN} = ${A}<sup><i>n</i></sup> + ${B}<sup><i>n</i></sup>. Then for every integer <i>n</i> ≥ 2,`,
      },
      {
        t: 'formula',
        kicker: 'Newton’s theorem (power sums)',
        main: `${NEWTON}<br>i.e. ${NEWTON_SOLVED}`,
        legend: [
          `${SN} = the power sum (${A}<sup><i>n</i></sup> + ${B}<sup><i>n</i></sup>)`,
          `${A}, ${B} = the roots of ${QUAD} = 0`,
          '<i>a</i> = the coefficient of <i>x</i><sup>2</sup> (<i>a</i> ≠ 0)',
          '<i>b</i> = the coefficient of <i>x</i>',
          '<i>c</i> = the constant term',
          '<i>n</i> = an integer (<i>n</i> ≥ 2)',
        ],
        note: null,
      },
      { t: 'p', html: 'with the seeds' },
      {
        t: 'formula',
        kicker: 'The seeds of Newton’s recurrence',
        main: `${S('0')} = 2<br>${S('1')} = ${A} + ${B} = −${BA}`,
        legend: [
          `${S('0')} = the power sum at <i>n</i> = 0 (<i>α</i><sup>0</sup> + <i>β</i><sup>0</sup>, one for each root)`,
          `${S('1')} = the power sum at <i>n</i> = 1 (the sum of the roots)`,
          '<i>a</i> = the coefficient of <i>x</i><sup>2</sup>',
          '<i>b</i> = the coefficient of <i>x</i>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Validity: the recurrence needs nothing beyond <i>a</i> ≠ 0 for <i>n</i> ≥ 2. It extends to all integers <i>n</i>, including negative ones, exactly when <i>c</i> ≠ 0 (so that neither root is zero and negative powers exist).',
      },
      {
        t: 'p',
        html: `<b>Reduction modulo the quadratic.</b> If ${A} is a root of ${QUAD} = 0 and <i>g</i>(<i>x</i>) is any polynomial, divide:`,
      },
      {
        t: 'formula',
        kicker: 'Reduction modulo the quadratic',
        main: `${REDUCE}<br>⟹ <i>g</i>(${A}) = <i>pα</i> + <i>t</i>`,
        legend: [
          '<i>g</i>(<i>x</i>) = any polynomial',
          `${A} = a root of ${QUAD} = 0`,
          '<i>q</i>(<i>x</i>) = the quotient',
          '<i>px</i> + <i>t</i> = the remainder (linear)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The remainder <i>px</i> + <i>t</i> is linear because the divisor is quadratic. This is the fastest route to any “evaluate this degree-7 polynomial at a nasty surd” question, and it works verbatim when ${A} is non-real.`,
      },
      { t: 'fig', id: 'm11-04-08-d1' },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'proc',
        title: 'Derivation: the transformation rule, and why the inverse is the thing you substitute',
        steps: [
          `Let ${A} be a root of <i>f</i>(<i>x</i>) = 0 and let <i>Y</i> = ${PHI}(${A}) be the corresponding new number. <b>Reason:</b> this is the definition of the required roots.`,
          `Suppose ${PHI} is invertible near ${A}, with inverse ${PSI}, so ${A} = ${PSI}(<i>Y</i>). <b>Reason:</b> invertibility is precisely the hypothesis we must carry.`,
          `Substitute into the known equation: <i>f</i>(${PSI}(<i>Y</i>)) = <i>f</i>(${A}) = 0. <b>Reason:</b> ${PSI}(<i>Y</i>) is ${A}, so the equation it satisfies is the original one.`,
          `Hence every required root <i>Y</i> satisfies <i>f</i>(${PSI}(<i>Y</i>)) = 0. <b>Reason:</b> steps 1–3 used nothing special about which root we started from, so both ${PHI}(${A}) and ${PHI}(${B}) satisfy it.`,
          `Conversely, if <i>y</i><sub>0</sub> satisfies <i>f</i>(${PSI}(<i>y</i><sub>0</sub>)) = 0, then ${PSI}(<i>y</i><sub>0</sub>) is a root of <i>f</i>, so ${PSI}(<i>y</i><sub>0</sub>) ∈ {${A}, ${B}} and <i>y</i><sub>0</sub> = ${PHI}(${PSI}(<i>y</i><sub>0</sub>)) ∈ {${PHI}(${A}), ${PHI}(${B})}. <b>Reason:</b> this is where invertibility earns its keep; without it the converse fails and extra roots appear.`,
          `Finally, clear denominators so the result is a polynomial equation, and check that the degree is still 2. <b>Reason:</b> if clearing denominators drops the leading coefficient to zero, a root has been lost to infinity, which is exactly what happens to ${fr('1', A)} when ${A} = 0. ■`,
        ],
      },
      {
        t: 'proc',
        title: 'Derivation: the squares transformation, done honestly',
        steps: [
          `Start from ${QUAD} = 0 and isolate the odd-power term: <i>ax</i><sup>2</sup> + <i>c</i> = −<i>bx</i>. <b>Reason:</b> we want only even powers on one side, since <i>y</i> = <i>x</i><sup>2</sup> can only see even powers.`,
          'Square both sides: (<i>ax</i><sup>2</sup> + <i>c</i>)<sup>2</sup> = <i>b</i><sup>2</sup><i>x</i><sup>2</sup>. <b>Reason:</b> squaring is legal in one direction and removes the last odd power.',
          'Expand: <i>a</i><sup>2</sup><i>x</i><sup>4</sup> + 2<i>acx</i><sup>2</sup> + <i>c</i><sup>2</sup> = <i>b</i><sup>2</sup><i>x</i><sup>2</sup>. <b>Reason:</b> direct expansion.',
          `Put <i>y</i> = <i>x</i><sup>2</sup>: ${SQ_EQ}. <b>Reason:</b> every surviving power of <i>x</i> is even. ■`,
          `Sanity check against Vieta: the sum of the new roots is ${SQ_SUM} = ${A}<sup>2</sup> + ${B}<sup>2</sup> and the product is ${SQ_PROD} = (<i>αβ</i>)<sup>2</sup>, both matching Topic 07. Note the sign: the coefficient of <i>y</i> is 2<i>ac</i> − <i>b</i><sup>2</sup>, and the sum of the roots is its negative.`,
        ],
      },
      {
        t: 'p',
        html: 'Squaring in step 2 is a one-way implication, so in principle it could introduce spurious roots. Here it does not, because the degree is still 2 and we have just identified both roots, but that check is the reason step 5 is written down rather than assumed.',
      },
      {
        t: 'proc',
        title: 'Derivation: Newton’s theorem',
        steps: [
          `${A} and ${B} satisfy the equation, so <i>aα</i><sup>2</sup> + <i>bα</i> + <i>c</i> = 0 and <i>aβ</i><sup>2</sup> + <i>bβ</i> + <i>c</i> = 0. <b>Reason:</b> definition of a root.`,
          `Multiply the first by ${A}<sup><i>n</i>−2</sup> and the second by ${B}<sup><i>n</i>−2</sup>: <i>aα</i><sup><i>n</i></sup> + <i>bα</i><sup><i>n</i>−1</sup> + <i>cα</i><sup><i>n</i>−2</sup> = 0 and <i>aβ</i><sup><i>n</i></sup> + <i>bβ</i><sup><i>n</i>−1</sup> + <i>cβ</i><sup><i>n</i>−2</sup> = 0. <b>Reason:</b> multiplying zero by anything is zero; for <i>n</i> ≥ 2 the exponents are non-negative, so no division is involved.`,
          `Add: <i>a</i>(${A}<sup><i>n</i></sup> + ${B}<sup><i>n</i></sup>) + <i>b</i>(${A}<sup><i>n</i>−1</sup> + ${B}<sup><i>n</i>−1</sup>) + <i>c</i>(${A}<sup><i>n</i>−2</sup> + ${B}<sup><i>n</i>−2</sup>) = 0, i.e. ${NEWTON}. <b>Reason:</b> the two lines are added term by term. ■`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure A: transforming an equation',
        steps: [
          `Write the rule as <i>y</i> = ${PHI}(<i>x</i>) with <i>x</i> standing for a generic root. <b>Why:</b> the transformation is a statement about all roots at once, so no subscripts are needed.`,
          `Solve that relation for <i>x</i>, obtaining <i>x</i> = ${PSI}(<i>y</i>). <b>Why:</b> this, not ${PHI}, is what gets substituted. Reversing the two is the single most common error in the topic.`,
          `Substitute ${PSI}(<i>y</i>) for <i>x</i> in the original equation and clear denominators.`,
          `Confirm the result is genuinely quadratic. If the <i>y</i><sup>2</sup> coefficient has vanished, a root has been lost; say so explicitly and identify which one. <b>Why:</b> examiners set this case deliberately, most often ${T07} by giving an equation with <i>c</i> = 0 and asking for reciprocal roots.`,
          `Cross-check with Vieta. Compute the sum and product of the intended new roots from ${A} + ${B} and <i>αβ</i>, and confirm they match the transformed equation. <b>Why:</b> a sign slip in step 3 is invisible until you do this, and the check costs one line.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: evaluating α to the power n plus β to the power n, or g(α), without finding the roots',
        steps: [
          `Read off <i>a</i>, <i>b</i>, <i>c</i> and write the recurrence <i>a</i>${SN} = −<i>b</i>${SN1} − <i>c</i>${SN2} once, at the top of your working. <b>Why:</b> writing it symbolically first prevents arithmetic drift over many steps.`,
          `Seed with ${S('0')} = 2 and ${S('1')} = −${BA}. <b>Why:</b> ${S('0')} counts the roots; forgetting that it is 2 and not 1 derails every later term.`,
          `Step up one index at a time to the target <i>n</i>, writing every intermediate ${S('<i>k</i>')}. <b>Why:</b> the recurrence needs the two previous values, so skipping is impossible and tabulating is free.`,
          `For a polynomial value <i>g</i>(${A}) instead, divide <i>g</i>(<i>x</i>) by ${QUAD} and keep only the remainder <i>px</i> + <i>t</i>; then <i>g</i>(${A}) = <i>pα</i> + <i>t</i>. <b>Why:</b> the quotient is multiplied by something that vanishes at ${A}.`,
          `Verify by a second route: for small <i>n</i> use the symmetric-function identities of Topic 07, and when the coefficients are real and the roots non-real, <i>re</i><sup>±<i>iθ</i></sup>, use the polar form of Topic 05, where ${SN} = 2<i>r</i><sup><i>n</i></sup> cos <i>nθ</i>. <b>Why:</b> two independent routes agreeing is the only cheap proof that a long recursion has no slip in it.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Let ${A}, ${B} be the roots of <i>x</i><sup>2</sup> − 5<i>x</i> + 6 = 0. Form the equation whose roots are (a) ${A} + 2, ${B} + 2; (b) ${fr('1', A)}, ${fr('1', B)}.`,
        steps: [
          '(a) The rule is <i>y</i> = <i>x</i> + 2, so the inverse is <i>x</i> = <i>y</i> − 2. Substitute:<br>(<i>y</i> − 2)<sup>2</sup> − 5(<i>y</i> − 2) + 6<br>= <i>y</i><sup>2</sup> − 4<i>y</i> + 4 − 5<i>y</i> + 10 + 6<br>= <i>y</i><sup>2</sup> − 9<i>y</i> + 20 = 0.',
          `(b) The rule is <i>y</i> = ${fr('1', '<i>x</i>')}, so <i>x</i> = ${fr('1', '<i>y</i>')}; here <i>c</i> = 6 ≠ 0, so no root is zero and the substitution is legal. Substitute and multiply through by <i>y</i><sup>2</sup>:<br>${fr('1', '<i>y</i><sup>2</sup>')} − ${fr('5', '<i>y</i>')} + 6 = 0<br>⟹ 6<i>y</i><sup>2</sup> − 5<i>y</i> + 1 = 0.`,
          'This is the original coefficient string 1, −5, 6 reversed to 6, −5, 1, as the table promises.',
          `<b>Verification.</b> The original roots are 2 and 3. Part (a) should give roots 4 and 5: indeed <i>y</i><sup>2</sup> − 9<i>y</i> + 20 = (<i>y</i> − 4)(<i>y</i> − 5). Part (b) should give ${HALF} and ${THIRD}: indeed 6<i>y</i><sup>2</sup> − 5<i>y</i> + 1 = (2<i>y</i> − 1)(3<i>y</i> − 1). Both confirmed.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `${A} and ${B} are the roots of <i>x</i><sup>2</sup> − 3<i>x</i> + 1 = 0. Find the quadratic equation whose roots are ${fr(A, `${A} − 2`)} and ${fr(B, `${B} − 2`)}, and hence evaluate ${fr(A, `${A} − 2`)} · ${fr(B, `${B} − 2`)}.`,
        steps: [
          `<b>Step 1: invert the rule.</b> Put <i>y</i> = ${fr('<i>x</i>', '<i>x</i> − 2')}. Then <i>y</i>(<i>x</i> − 2) = <i>x</i>, so <i>yx</i> − 2<i>y</i> = <i>x</i>, so <i>x</i>(<i>y</i> − 1) = 2<i>y</i> and<br><i>x</i> = ${fr('2<i>y</i>', '<i>y</i> − 1')} (<i>y</i> ≠ 1).`,
          '<b>Step 2: substitute.</b> Put this into <i>x</i><sup>2</sup> − 3<i>x</i> + 1 = 0 and multiply through by (<i>y</i> − 1)<sup>2</sup>:<br>4<i>y</i><sup>2</sup> − 6<i>y</i>(<i>y</i> − 1) + (<i>y</i> − 1)<sup>2</sup> = 0.',
          '<b>Step 3: expand.</b> 4<i>y</i><sup>2</sup> − 6<i>y</i><sup>2</sup> + 6<i>y</i> + <i>y</i><sup>2</sup> − 2<i>y</i> + 1 = −<i>y</i><sup>2</sup> + 4<i>y</i> + 1, so<br><i>y</i><sup>2</sup> − 4<i>y</i> − 1 = 0.',
          `<b>Step 4: read off the product.</b> By Vieta on the new equation, the product of its roots is ${fr('−1', '1')} = −1.`,
          `<b>Independent check.</b> The original roots are ${A} = ${fr('3 + √5', '2')} and ${B} = ${fr('3 − √5', '2')}. Then ${A} − 2 = ${fr('√5 − 1', '2')} and ${B} − 2 = ${fr('−√5 − 1', '2')}, giving ${fr(A, `${A} − 2`)} = 2 + √5 and ${fr(B, `${B} − 2`)} = 2 − √5. Their sum is 4 and their product is 4 − 5 = −1, matching <i>y</i><sup>2</sup> − 4<i>y</i> − 1 = 0 exactly.`,
          `Note that <i>y</i> = 1 is excluded by the inversion, and correctly so: <i>y</i> = 1 would need ${fr('<i>x</i>', '<i>x</i> − 2')} = 1, i.e. −2 = 0. Nothing was lost.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `If ${A}, ${B} are the roots of 2<i>x</i><sup>2</sup> + 3<i>x</i> − 4 = 0, find the equation whose roots are ${A}<sup>2</sup> and ${B}<sup>2</sup>.`,
        steps: [
          `<b>The trap.</b> The seductive one-liner is: “the new sum is (${A} + ${B})<sup>2</sup> and the new product is (<i>αβ</i>)<sup>2</sup>.” That gives sum = ${fr('9', '4')}, product = 4, and the answer 4<i>y</i><sup>2</sup> − 9<i>y</i> + 16 = 0. It is wrong, and it is wrong for a reason worth naming: <b>the sum of the squares is not the square of the sum.</b> You need ${A}<sup>2</sup> + ${B}<sup>2</sup> = (${A} + ${B})<sup>2</sup> − 2<i>αβ</i>, the very first identity of Topic 07’s symmetric-function list. A second common slip is the sign of the middle coefficient in the memorised form ${SQ_EQ}: that coefficient is 2<i>ac</i> − <i>b</i><sup>2</sup>, whereas the sum of the roots is its negative, <i>b</i><sup>2</sup> − 2<i>ac</i>.`,
          `Here <i>a</i> = 2, <i>b</i> = 3, <i>c</i> = −4, so ${A} + ${B} = −${fr('3', '2')} and <i>αβ</i> = −2. Then<br>${A}<sup>2</sup> + ${B}<sup>2</sup> = (−${fr('3', '2')})<sup>2</sup> − 2(−2)<br>= ${fr('9', '4')} + 4 = ${fr('25', '4')},<br><i>α</i><sup>2</sup><i>β</i><sup>2</sup> = (−2)<sup>2</sup> = 4.`,
          `The required equation is <i>y</i><sup>2</sup> − ${fr('25', '4')}<i>y</i> + 4 = 0, i.e.<br>4<i>y</i><sup>2</sup> − 25<i>y</i> + 16 = 0.`,
          '<b>Second route, independent of Vieta.</b> From 2<i>x</i><sup>2</sup> − 4 = −3<i>x</i>, square both sides: (2<i>x</i><sup>2</sup> − 4)<sup>2</sup> = 9<i>x</i><sup>2</sup>, so 4<i>x</i><sup>4</sup> − 16<i>x</i><sup>2</sup> + 16 = 9<i>x</i><sup>2</sup>, so 4<i>x</i><sup>4</sup> − 25<i>x</i><sup>2</sup> + 16 = 0. With <i>y</i> = <i>x</i><sup>2</sup> this is 4<i>y</i><sup>2</sup> − 25<i>y</i> + 16 = 0. The two routes agree.',
          `<b>Why the discarded answer really is wrong.</b> The original equation has <i>D</i> = 9 + 32 = 41 > 0, so ${A} and ${B} are real and ${A}<sup>2</sup>, ${B}<sup>2</sup> must be real and non-negative. But 4<i>y</i><sup>2</sup> − 9<i>y</i> + 16 = 0 has discriminant 81 − 256 = −175 < 0, so its roots are non-real. The seductive answer fails a test you can run in five seconds, and that test is worth building into your reflexes: <b>after any squares transformation on a real-rooted quadratic, check that the new discriminant is non-negative.</b>`,
        ],
        ans: '4<i>y</i><sup>2</sup> − 25<i>y</i> + 16 = 0.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${A}, ${B} be the roots of <i>x</i><sup>2</sup> − 2<i>x</i> + 4 = 0. (a) Find ${A}<sup>9</sup> + ${B}<sup>9</sup>. (b) Find the value of ${A}<sup>4</sup> − 4${A}<sup>3</sup> + 8${A}<sup>2</sup> + 3${A} + 5.`,
        steps: [
          `Here <i>a</i> = 1, <i>b</i> = −2, <i>c</i> = 4, and <i>D</i> = 4 − 16 = −12 < 0, so the roots are the non-real conjugate pair 1 ± ${R3}. Finding them and raising to the ninth power directly is exactly the work the two machines of this topic exist to avoid.`,
          `<b>(a) Newton’s recurrence.</b> With <i>a</i> = 1, <i>b</i> = −2, <i>c</i> = 4 the recurrence ${NEWTON} reads<br>${SN} = 2${SN1} − 4${SN2},<br>seeded by ${S('0')} = 2 and ${S('1')} = −${BA} = 2. Running it:<br>${S('2')} = 2(2) − 4(2) = −4,<br>${S('3')} = 2(−4) − 4(2) = −16,<br>${S('4')} = 2(−16) − 4(−4) = −16,<br>${S('5')} = 2(−16) − 4(−16) = 32,<br>${S('6')} = 2(32) − 4(−16) = 128,<br>${S('7')} = 2(128) − 4(32) = 128,<br>${S('8')} = 2(128) − 4(128) = −256,<br>${S('9')} = 2(−256) − 4(128) = −1024.`,
          `<b>Independent check by polar form (Topic 05).</b> The roots are 1 ± ${R3}, which have modulus <i>r</i> = √(1 + 3) = 2 and arguments ±${fr('π', '3')}. So ${A} = 2${E('<i>i</i>π/3')}, ${B} = 2${E('−<i>i</i>π/3')} and<br>${SN} = 2<sup><i>n</i></sup>(${E('<i>in</i>π/3')} + ${E('−<i>in</i>π/3')})<br>= 2<sup><i>n</i>+1</sup> cos ${fr('<i>n</i>π', '3')}.<br>At <i>n</i> = 9: ${S('9')} = 2<sup>10</sup> cos 3π = 1024 × (−1) = −1024. The two routes agree, and the formula also reproduces ${S('2')} = 8 cos(${fr('2π', '3')}) = −4 and ${S('6')} = 128 cos 2π = 128.`,
          `<b>(b) Reduction modulo the quadratic.</b> Divide <i>g</i>(<i>x</i>) = <i>x</i><sup>4</sup> − 4<i>x</i><sup>3</sup> + 8<i>x</i><sup>2</sup> + 3<i>x</i> + 5 by <i>x</i><sup>2</sup> − 2<i>x</i> + 4:<br><i>x</i><sup>4</sup> − 4<i>x</i><sup>3</sup> + 8<i>x</i><sup>2</sup> + 3<i>x</i> + 5<br>= (<i>x</i><sup>2</sup> − 2<i>x</i> + 4)(<i>x</i><sup>2</sup> − 2<i>x</i>) + (11<i>x</i> + 5).<br>Since ${A}<sup>2</sup> − 2${A} + 4 = 0, the first product vanishes at <i>x</i> = ${A}, leaving<br><i>g</i>(${A}) = 11${A} + 5.`,
          `<b>Independent check.</b> Take ${A} = 1 + ${R3} = 2${E('<i>i</i>π/3')}. Then ${A}<sup>2</sup> = 4${E('2<i>i</i>π/3')} = −2 + 2${R3}, ${A}<sup>3</sup> = 8${E('<i>i</i>π')} = −8, ${A}<sup>4</sup> = 16${E('4<i>i</i>π/3')} = −8 − 8${R3}. Substituting,<br><i>g</i>(${A}) = (−8 − 8${R3}) + 32<br>+ 8(−2 + 2${R3}) + 3(1 + ${R3}) + 5<br>= 16 + 11${R3},<br>and 11${A} + 5 = 11(1 + ${R3}) + 5 = 16 + 11${R3}. They match.`,
        ],
        ans: `(a) −1024; (b) 11${A} + 5, which equals 16 + 11${R3} for ${A} = 1 + ${R3} and 16 − 11${R3} for the other root.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `${A}, ${B} are the roots of <i>x</i><sup>2</sup> + 7<i>x</i> + 12 = 0. Form the equation whose roots are ${A} − 2 and ${B} − 2.`,
            a: '<i>y</i><sup>2</sup> + 11<i>y</i> + 30 = 0 (roots −5 and −6).',
          },
          {
            q: 'Form the equation whose roots are the reciprocals of the roots of 5<i>x</i><sup>2</sup> − 3<i>x</i> + 2 = 0.',
            a: '2<i>y</i><sup>2</sup> − 3<i>y</i> + 5 = 0.',
          },
          {
            q: 'Form the equation whose roots are the squares of the roots of <i>x</i><sup>2</sup> + 6<i>x</i> + 4 = 0.',
            a: '<i>y</i><sup>2</sup> − 28<i>y</i> + 16 = 0.',
          },
          {
            q: `Remove the <i>x</i>-term from 3<i>x</i><sup>2</sup> − 12<i>x</i> + 5 = 0, stating the substitution used, and check your answer against <i>ay</i><sup>2</sup> = ${D4A}.`,
            a: `Substitute <i>x</i> = <i>y</i> + 2; the equation becomes 3<i>y</i><sup>2</sup> − 7 = 0. Check: <i>D</i> = 144 − 60 = 84 and ${D4A} = ${fr('84', '12')} = 7, so 3<i>y</i><sup>2</sup> = 7, agreeing.`,
          },
          {
            q: `${A}, ${B} are the roots of <i>x</i><sup>2</sup> − 5<i>x</i> + 3 = 0. Use Newton’s recurrence to find ${A}<sup>4</sup> + ${B}<sup>4</sup>, then confirm the value by a symmetric-function identity.`,
            a: `${SN} = 5${SN1} − 3${SN2} with ${S('0')} = 2, ${S('1')} = 5; then ${S('2')} = 19, ${S('3')} = 80, ${S('4')} = 343. Check: ${A}<sup>4</sup> + ${B}<sup>4</sup> = (${A}<sup>2</sup> + ${B}<sup>2</sup>)<sup>2</sup> − 2(<i>αβ</i>)<sup>2</sup> = 19<sup>2</sup> − 2(9) = 343.`,
          },
          {
            q: `${A} is a root of <i>x</i><sup>2</sup> − <i>x</i> − 1 = 0. Show that ${A}<sup>5</sup> = 5${A} + 3.`,
            a: `<i>x</i><sup><i>n</i></sup> ≡ <i>F</i><sub><i>n</i></sub><i>x</i> + <i>F</i><sub><i>n</i>−1</sub> (mod <i>x</i><sup>2</sup> − <i>x</i> − 1), where <i>F</i><sub><i>n</i></sub> is the <i>n</i>-th Fibonacci number (<i>F</i><sub>0</sub> = 0, <i>F</i><sub>1</sub> = 1, <i>F</i><sub>2</sub> = 1, <i>F</i><sub>3</sub> = 2, <i>F</i><sub>4</sub> = 3, <i>F</i><sub>5</sub> = 5); at <i>n</i> = 5 this is 5<i>x</i> + 3. Numerically, ${A} = ${fr('1 + √5', '2')} gives ${A}<sup>5</sup> = ${fr('11 + 5√5', '2')} = 5${A} + 3.`,
          },
          {
            q: `${A}, ${B} are the roots of ${QUAD} = 0 with <i>c</i> ≠ 0. Show that the equation whose roots are ${fr(A, B)} and ${fr(B, A)} is <i>acy</i><sup>2</sup> − (<i>b</i><sup>2</sup> − 2<i>ac</i>)<i>y</i> + <i>ac</i> = 0.`,
            a: `Sum = ${fr(`${A}<sup>2</sup> + ${B}<sup>2</sup>`, '<i>αβ</i>')} = ${fr('<i>b</i><sup>2</sup> − 2<i>ac</i>', '<i>ac</i>')} and product = 1; clearing denominators gives the stated equation.`,
          },
          {
            q: 'tan <i>A</i>, tan <i>B</i> are the roots of <i>x</i><sup>2</sup> − <i>px</i> + <i>q</i> = 0 and cot <i>A</i>, cot <i>B</i> are the roots of <i>x</i><sup>2</sup> − <i>rx</i> + <i>s</i> = 0, with <i>q</i> ≠ 0. Find <i>rs</i> in terms of <i>p</i> and <i>q</i>.',
            a: `Reciprocal transformation of <i>x</i><sup>2</sup> − <i>px</i> + <i>q</i> = 0 gives <i>qy</i><sup>2</sup> − <i>py</i> + 1 = 0, i.e. <i>y</i><sup>2</sup> − ${fr('<i>p</i>', '<i>q</i>')}<i>y</i> + ${fr('1', '<i>q</i>')} = 0. Hence <i>r</i> = ${fr('<i>p</i>', '<i>q</i>')}, <i>s</i> = ${fr('1', '<i>q</i>')} and <i>rs</i> = ${fr('<i>p</i>', '<i>q</i><sup>2</sup>')}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The equation whose roots are each 2 more than the roots of <i>x</i><sup>2</sup> − 4<i>x</i> + 3 = 0 is',
        opts: [
          { label: '<i>y</i><sup>2</sup> − 8<i>y</i> + 15 = 0', nudge: null },
          {
            label: '<i>y</i><sup>2</sup> − 1 = 0',
            nudge: '<b>(B)</b> is what you get from substituting <i>x</i> = <i>y</i> + 2: the direction reversal, which decreases the roots by 2 and gives <i>y</i><sup>2</sup> − 1 = 0 with roots ±1. This is the signature error of the topic and the reason Procedure A step 2 is written as a separate step.',
          },
          {
            label: '<i>y</i><sup>2</sup> − 4<i>y</i> + 15 = 0',
            nudge: '<b>(C)</b> shifts the product correctly but leaves the sum untouched, the mark of a student who computed the new product from Vieta and then copied the old −4 across.',
          },
          {
            label: '<i>y</i><sup>2</sup> − 8<i>y</i> + 3 = 0',
            nudge: '<b>(D)</b> is the mirror slip: sum shifted, product copied.',
          },
        ],
        correct: 0,
        solution: 'The rule is <i>y</i> = <i>x</i> + 2, so substitute <i>x</i> = <i>y</i> − 2: (<i>y</i> − 2)<sup>2</sup> − 4(<i>y</i> − 2) + 3 = <i>y</i><sup>2</sup> − 8<i>y</i> + 15. Check: the original roots are 1 and 3, the new roots are 3 and 5, with sum 8 and product 15.',
      },
      {
        t: 'mcq',
        q: `If ${A}, ${B} are the roots of <i>x</i><sup>2</sup> + <i>px</i> + <i>q</i> = 0 with <i>q</i> ≠ 0, the equation whose roots are ${fr('1', A)} and ${fr('1', B)} is`,
        opts: [
          { label: '<i>qx</i><sup>2</sup> + <i>px</i> + 1 = 0', nudge: null },
          {
            label: '<i>x</i><sup>2</sup> + <i>px</i> + <i>q</i> = 0',
            nudge: '<b>(B)</b> is the palindromic reflex: assuming a reciprocal transformation leaves the equation unchanged. That holds only for special equations such as a palindromic one, with <i>a</i> = <i>c</i>, and <i>x</i><sup>2</sup> + <i>px</i> + <i>q</i> is palindromic only when <i>q</i> = 1.',
          },
          {
            label: '<i>qx</i><sup>2</sup> − <i>px</i> + 1 = 0',
            nudge: '<b>(C)</b> attaches a sign flip to the coefficient reversal. Reversing the string 1, <i>p</i>, <i>q</i> to <i>q</i>, <i>p</i>, 1 changes no signs at all; the belief that “inverting the roots must invert something else too” is exactly the misconception being tested.',
          },
          {
            label: '<i>x</i><sup>2</sup> + <i>qx</i> + <i>p</i> = 0',
            nudge: '<b>(D)</b> swaps <i>p</i> and <i>q</i> in place rather than reversing the whole coefficient string, which coincidentally gives the right answer only when <i>p</i> = <i>q</i> = 1.',
          },
        ],
        correct: 0,
        solution: `Substitute <i>x</i> = ${fr('1', '<i>y</i>')} into <i>x</i><sup>2</sup> + <i>px</i> + <i>q</i> = 0 and multiply by <i>y</i><sup>2</sup>: 1 + <i>py</i> + <i>qy</i><sup>2</sup> = 0. Check by Vieta: ${fr('1', A)} + ${fr('1', B)} = ${fr(`${A} + ${B}`, '<i>αβ</i>')} = −${fr('<i>p</i>', '<i>q</i>')} and ${fr('1', '<i>αβ</i>')} = ${fr('1', '<i>q</i>')}, giving <i>y</i><sup>2</sup> + ${fr('<i>p</i>', '<i>q</i>')}<i>y</i> + ${fr('1', '<i>q</i>')} = 0.`,
      },
      {
        t: 'mcq',
        q: `If ${A}, ${B} are the roots of <i>x</i><sup>2</sup> − 6<i>x</i> + 5 = 0, the equation whose roots are ${A}<sup>2</sup> and ${B}<sup>2</sup> is`,
        opts: [
          { label: '<i>x</i><sup>2</sup> − 26<i>x</i> + 25 = 0', nudge: null },
          {
            label: '<i>x</i><sup>2</sup> − 36<i>x</i> + 25 = 0',
            nudge: `<b>(B)</b> uses ${A}<sup>2</sup> + ${B}<sup>2</sup> = (${A} + ${B})<sup>2</sup> = 36, dropping the −2<i>αβ</i>: the identical error to the third worked example’s trap, and the most tempting wrong answer.`,
          },
          {
            label: '<i>x</i><sup>2</sup> − 26<i>x</i> + 5 = 0',
            nudge: '<b>(C)</b> gets the new sum right (1 + 25 = 26) but forgets to square the product, leaving <i>c</i> = 5 where <i>c</i><sup>2</sup> = 25 belongs.',
          },
          {
            label: '<i>x</i><sup>2</sup> − 12<i>x</i> + 25 = 0',
            nudge: '<b>(D)</b> has the right product, 25, but its sum 12 is twice the old sum, 2 × 6, not the sum of the squares: the slip of a student who confused “roots squared” with “roots doubled” for the sum.',
          },
        ],
        correct: 0,
        solution: `The roots are 1 and 5, so the squares are 1 and 25, with sum 26 and product 25. By the table,<br>${SQ_EQ.replace(' = 0', '')}<br>= <i>y</i><sup>2</sup> + (10 − 36)<i>y</i> + 25<br>= <i>y</i><sup>2</sup> − 26<i>y</i> + 25.`,
      },
      {
        t: 'mcq',
        q: `If ${A}, ${B} are the roots of <i>x</i><sup>2</sup> − <i>x</i> + 1 = 0 and ${SN} = ${A}<sup><i>n</i></sup> + ${B}<sup><i>n</i></sup>, then ${S('5')} equals`,
        opts: [
          { label: '1', nudge: null },
          { label: '−1', nudge: `<b>(B)</b> is ${S('4')}, an off-by-one slip from stopping the table one step early.` },
          {
            label: '2',
            nudge: `<b>(C)</b> is ${S('0')} (and also ${S('6')}): it is the answer of a student who believes the sequence has already returned to its starting value by <i>n</i> = 5; in fact ${SN} = 2 cos(${fr('<i>n</i>π', '3')}) has period 6, so it returns only at <i>n</i> = 6.`,
          },
          { label: '−2', nudge: `<b>(D)</b> is ${S('3')}, the same slip made twice over.` },
        ],
        correct: 0,
        solution: `The recurrence is ${SN} = ${SN1} − ${SN2} with ${S('0')} = 2, ${S('1')} = 1. Then ${S('2')} = −1, ${S('3')} = −2, ${S('4')} = −1, ${S('5')} = 1. Check by polar form: the roots are ${E('±<i>i</i>π/3')}, so ${SN} = 2 cos(${fr('<i>n</i>π', '3')}) and ${S('5')} = 2 cos(${fr('5π', '3')}) = 1.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Substituting ${PHI} instead of ${PSI}.</b> To get roots ${A} + <i>h</i> you substitute <i>x</i> = <i>y</i> − <i>h</i>, not <i>x</i> = <i>y</i> + <i>h</i>. <b>Correction:</b> write the rule, solve it for <i>x</i> on a separate line, and only then substitute. The extra line costs three seconds and prevents the most common error in the topic.`,
          `<b>Squaring the sum instead of summing the squares.</b> ${A}<sup>2</sup> + ${B}<sup>2</sup> is (${A} + ${B})<sup>2</sup> − 2<i>αβ</i>. <b>Correction:</b> never write a squares transformation without writing the −2<i>αβ</i> first.`,
          `<b>Adding a sign flip to the reciprocal transformation.</b> ${QUAD} → <i>cx</i><sup>2</sup> + <i>bx</i> + <i>a</i>. The coefficients reverse; nothing changes sign. <b>Correction:</b> derive it in one line from <i>x</i> = ${fr('1', '<i>y</i>')} rather than recalling it.`,
          '<b>Using the reciprocal transformation when <i>c</i> = 0.</b> Then one root is 0, its reciprocal does not exist, and the transformed “quadratic” collapses to a linear equation. <b>Correction:</b> check <i>c</i> ≠ 0 before inverting, and if <i>c</i> = 0 say plainly that only one reciprocal root exists (none, if <i>b</i> = 0 too).',
          `<b>Seeding Newton’s recurrence with ${S('0')} = 1.</b> ${S('0')} = ${A}<sup>0</sup> + ${B}<sup>0</sup> = 2, because there are two roots. <b>Correction:</b> say “two roots, so ${S('0')} = 2” out loud before starting.`,
          `<b>Running Newton’s recurrence with the wrong signs.</b> The recurrence is ${NEWTON}, so ${NEWTON_SOLVED}. Both signs flip when you move them across. <b>Correction:</b> write the homogeneous form first and rearrange once.`,
          `<b>Keeping the quotient in the reduction method.</b> In ${REDUCE} only the remainder survives. <b>Correction:</b> after dividing, discard <i>q</i>(<i>x</i>) immediately so it cannot contaminate the next line.`,
          '<b>Forgetting to check that the transformed equation is still quadratic.</b> If the <i>y</i><sup>2</sup> coefficient vanished, a root went to infinity. <b>Correction:</b> state which root was lost rather than silently reporting a linear equation.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• The depressed form <i>ay</i><sup>2</sup> = ${D4A} obtained by <i>x</i> = <i>y</i> − ${B2A} is the vertex form of Topic 07 wearing different clothes. Recognising that lets you reuse one derivation for two topics.<br>• For any transformation, the Vieta cross-check is nearly free: compute the intended new sum and product from ${A} + ${B} and <i>αβ</i>, and compare. Do it every time.<br>• When the coefficients are real and the roots non-real (<i>re</i><sup>±<i>iθ</i></sup>), always take the polar form of Topic 05 as your second route: ${SN} = 2<i>r</i><sup><i>n</i></sup> cos <i>nθ</i> turns a nine-step recursion into one cosine.<br>• For <i>g</i>(${A}) with deg <i>g</i> ≥ 3, dividing by the quadratic is always faster than substituting a surd, and it is the only sane method when ${A} is complex.<br>• The relation <i>x</i><sup><i>n</i></sup> ≡ <i>F</i><sub><i>n</i></sub><i>x</i> + <i>F</i><sub><i>n</i>−1</sub> (mod <i>x</i><sup>2</sup> − <i>x</i> − 1), with <i>F</i><sub><i>n</i></sub> the <i>n</i>-th Fibonacci number, is worth recognising on sight; the golden-ratio quadratic is a JEE favourite ${T07} precisely because it hides the Fibonacci numbers.<br>• If a question asks only for the product or only for the sum of the transformed roots, build the transformed equation anyway. It takes one extra line and immunises you against a follow-up part.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${A}, ${B} roots of ${QUAD} = 0, <i>a</i> ≠ 0, <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i>`, note: '' },
          {
            f: 'Master rule',
            note: `Required roots <i>y</i> = ${PHI}(<i>x</i>); invert to <i>x</i> = ${PSI}(<i>y</i>); substitute ${PSI}(<i>y</i>) into <i>f</i>(<i>x</i>) = 0; clear denominators. <b>You substitute the inverse.</b>`,
          },
          {
            f: 'Standard transformations',
            note: `${A} + <i>h</i>: <i>ay</i><sup>2</sup> + (<i>b</i> − 2<i>ah</i>)<i>y</i> + (<i>ah</i><sup>2</sup> − <i>bh</i> + <i>c</i>) = 0 (put <i>x</i> = <i>y</i> − <i>h</i>).<br>${A} − <i>h</i>: <i>ay</i><sup>2</sup> + (<i>b</i> + 2<i>ah</i>)<i>y</i> + (<i>ah</i><sup>2</sup> + <i>bh</i> + <i>c</i>) = 0 (put <i>x</i> = <i>y</i> + <i>h</i>).<br><i>kα</i> (<i>k</i> ≠ 0): <i>ay</i><sup>2</sup> + <i>bky</i> + <i>ck</i><sup>2</sup> = 0.<br>−${A}: <i>ay</i><sup>2</sup> − <i>by</i> + <i>c</i> = 0.<br>${fr('1', A)} (<i>c</i> ≠ 0): <i>cy</i><sup>2</sup> + <i>by</i> + <i>a</i> = 0 (reverse the coefficients, change no sign).<br>${A}<sup>2</sup>: ${SQ_EQ}; new sum = ${SQ_SUM}, new product = ${SQ_PROD}.<br>Depressed (no <i>y</i>-term): <i>x</i> = <i>y</i> − ${B2A} gives <i>ay</i><sup>2</sup> = ${D4A}.<br>Möbius ${MOB(A)} (<i>ps</i> − <i>qr</i> ≠ 0): put <i>x</i> = ${MOB_X}.`,
          },
          {
            f: 'Newton’s theorem',
            note: `${SN} = ${A}<sup><i>n</i></sup> + ${B}<sup><i>n</i></sup> satisfies ${NEWTON} for <i>n</i> ≥ 2 (all integers <i>n</i> if <i>c</i> ≠ 0). Seeds ${S('0')} = 2, ${S('1')} = −${BA}. Real coefficients, non-real roots <i>re</i><sup>±<i>iθ</i></sup>: ${SN} = 2<i>r</i><sup><i>n</i></sup> cos <i>nθ</i>.`,
          },
          {
            f: 'Reduction modulo the quadratic',
            note: `${REDUCE} ⇒ <i>g</i>(${A}) = <i>pα</i> + <i>t</i>. Keep the remainder, discard the quotient.`,
          },
          {
            f: 'Always check',
            note: 'Is the transformed equation still degree 2? Do its sum and product match the intended new roots? For a squares transformation on a real-rooted quadratic, is the new discriminant non-negative?',
          },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 09 · pp. 408–413 ────────────────
  {
    n: '09',
    title: 'Complex Numbers as Vectors: Perpendicularity, Dot and Cross Products',
    kalam: 'The conjugate goes on the first vector.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Read immediately after Topic 06. This topic is short: the method, worked examples, and practice with answers.',
      },
      {
        t: 'p',
        html: `CBSE Boards do not reach this material: it sits beyond Class-11 scope exactly as Topic 06 does. JEE Main uses the perpendicularity criterion in disguise, most often ${T07} as “show that these three points form a right-angled triangle” or “find the area of the triangle with these vertices”, both of which are one-line questions with the dictionary below and three-line questions without it. JEE Advanced is where it earns its place: the circumcentre-orthocentre results, altitude concurrency, and any configuration proof that Topic 06’s rotation theorem sets up but cannot finish, all reduce to the single statement Re(${UBV}) = 0. NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 06 established that ${z(1)}, ${z(2)}, ${z(3)} are collinear if and only if ${fr(`${z(3)} − ${z(1)}`, `${z(2)} − ${z(1)}`)} is real. That test has an exact companion which that topic uses only in a special case (its semicircle locus and fifth worked example) and never states in general, and the pair together is the whole toolkit.`,
      },
      {
        t: 'p',
        html: `Recall from Topic 02 that for any complex <i>w</i> (non-zero in the second statement),<br><i>w</i> is real ⟺ <i>w</i> = <i>w</i>${BAR} ⟺ <i>w</i> − <i>w</i>${BAR} = 0,<br><i>w</i> is purely imaginary ⟺ <i>w</i> + <i>w</i>${BAR} = 0.`,
      },
      {
        t: 'p',
        html: `Apply this to the ratio of two displacements. Let <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i> be the points ${z(1)}, ${z(2)}, ${z(3)}, ${z(4)}, and write ${U} = ${z(2)} − ${z(1)} for the vector <i>AB⃗</i> (from ${z(1)} to ${z(2)}) and ${V} = ${z(4)} − ${z(3)} for the vector <i>CD⃗</i> (from ${z(3)} to ${z(4)}), both non-zero. Then:`,
      },
      {
        t: 'formula',
        kicker: 'The parallel test',
        main: `<i>AB</i> ∥ <i>CD</i> ⟺ ${UOV} ∈ ℝ<br>⟺ ${UBV} − ${UVB} = 0<br>⟺ Im(${UBV}) = 0`,
        legend: [
          `<i>A</i>, <i>B</i>, <i>C</i>, <i>D</i> = the points ${z(1)}, ${z(2)}, ${z(3)}, ${z(4)}`,
          `${U} = the vector <i>AB⃗</i> (${z(2)} − ${z(1)} ≠ 0)`,
          `${V} = the vector <i>CD⃗</i> (${z(4)} − ${z(3)} ≠ 0)`,
          `<i>u</i>${BAR} = the conjugate of ${U}`,
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The perpendicularity test',
        main: `<i>AB</i> ⊥ <i>CD</i> ⟺ ${UOV} is purely imaginary<br>⟺ ${UBV} + ${UVB} = 0<br>⟺ Re(${UBV}) = 0`,
        legend: [
          `<i>A</i>, <i>B</i>, <i>C</i>, <i>D</i> = the points ${z(1)}, ${z(2)}, ${z(3)}, ${z(4)}`,
          `${U} = the vector <i>AB⃗</i> (${z(2)} − ${z(1)} ≠ 0)`,
          `${V} = the vector <i>CD⃗</i> (${z(4)} − ${z(3)} ≠ 0)`,
          `<i>u</i>${BAR} = the conjugate of ${U}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Derivation of the second line.</b> Set <i>w</i> = ${UOV}. Multiplying <i>w</i> + <i>w</i>${BAR} = 0 through by the strictly positive real number <i>v</i><i>v</i>${BAR} = |${V}|<sup>2</sup> gives ${UVB} + ${UBV} = 0, which is 2 Re(${UBV}) = 0. The multiplication is reversible because |${V}|<sup>2</sup> > 0, so the three statements are equivalent, not merely implied. ■`,
      },
      {
        t: 'p',
        html: `<b>The dictionary.</b> Write ${U} = <i>x</i><sub>1</sub> + <i>iy</i><sub>1</sub> and ${V} = <i>x</i><sub>2</sub> + <i>iy</i><sub>2</sub> as plane vectors. Then`,
      },
      {
        t: 'formula',
        kicker: 'The dictionary',
        main: `${UBV} = (<i>x</i><sub>1</sub> − <i>iy</i><sub>1</sub>)(<i>x</i><sub>2</sub> + <i>iy</i><sub>2</sub>)<br>= (<i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>y</i><sub>1</sub><i>y</i><sub>2</sub>) + <i>i</i>(<i>x</i><sub>1</sub><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub><i>x</i><sub>2</sub>)<br>${U} · ${V} = <i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>y</i><sub>1</sub><i>y</i><sub>2</sub><br>${U} × ${V} = <i>x</i><sub>1</sub><i>y</i><sub>2</sub> − <i>y</i><sub>1</sub><i>x</i><sub>2</sub>`,
        legend: [
          `${U} = the first plane vector (<i>x</i><sub>1</sub> + <i>iy</i><sub>1</sub>)`,
          `${V} = the second plane vector (<i>x</i><sub>2</sub> + <i>iy</i><sub>2</sub>)`,
          `<i>u</i>${BAR} = the conjugate of ${U}`,
          `${U} · ${V} = the dot product`,
          `${U} × ${V} = the scalar cross product`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `So Re(${UBV}) is the <b>dot product</b> and Im(${UBV}) is the <b>scalar cross product</b>: every plane-vector fact you already own transfers immediately. In particular`,
      },
      {
        t: 'formula',
        kicker: 'The angle between two vectors',
        main: `cos <i>θ</i> = ${fr(`Re(${UBV})`, `|${U}| |${V}|`)}<br>sin <i>θ</i> = ${fr(`Im(${UBV})`, `|${U}| |${V}|`)}`,
        legend: [
          `<i>θ</i> = the directed angle from ${U} to ${V}`,
          `${U}, ${V} = the two non-zero vectors`,
          `<i>u</i>${BAR} = the conjugate of ${U}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `where <i>θ</i> is the directed angle from ${U} to ${V}, which is arg(${fr(V, U)}), and therefore consistent with the rotation theorem of Topic 06.`,
      },
      {
        t: 'p',
        html: `<b>Critical order-of-factors note.</b> The conjugate goes on the <b>first</b> vector. The quantity Re(${UV}) (no bar) is not the dot product and tests nothing geometric about the pair. The second worked example of this topic shows it giving both a false negative and a false positive.`,
      },
      { t: 'p', html: `<b>Area of a triangle.</b> For vertices ${z(1)}, ${z(2)}, ${z(3)},` },
      {
        t: 'formula',
        kicker: 'Area of a triangle',
        main: `Area = ${AREA1}<br>= ${AREA2}`,
        legend: [
          `${z(1)}, ${z(2)}, ${z(3)} = the vertices`,
          `${zb('<i>k</i>')} = the conjugate of ${z('<i>k</i>')}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The first form is “half the cross product of two edge vectors”; the second is the same quantity expanded, and is the shoelace formula in complex clothing. Dropping the modulus signs gives the <b>signed</b> area, positive exactly when ${z(1)} → ${z(2)} → ${z(3)} runs anticlockwise, which makes the same expression an orientation test.`,
      },
      {
        t: 'p',
        html: `<b>Orthocentre from the circumcentre.</b> If the circumcentre of triangle ${z(1)}${z(2)}${z(3)} is at the origin, the orthocentre is`,
      },
      {
        t: 'formula',
        kicker: 'Orthocentre from the circumcentre',
        main: `<i>H</i> = ${Z123}`,
        legend: [`<i>H</i> = the orthocentre`, `${z(1)}, ${z(2)}, ${z(3)} = the vertices (circumcentre at the origin)`],
        note: null,
      },
      {
        t: 'p',
        html: `For a circumcentre at a general point <i>O</i>, translating gives <i>H</i> = ${Z123} − 2<i>O</i>. Since the centroid is <i>G</i> = ${fr(Z123, '3')}, this rearranges to <i>H</i> − <i>G</i> = 2(<i>G</i> − <i>O</i>): the Euler line, with its 2 ∶ 1 ratio, falls out of the same identity. (The coordinate-geometry treatment of these centres is Chapter 9; this is the complex-number route to the same facts.)`,
      },
      { t: 'fig', id: 'm11-04-09-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'The points <i>A</i> = 1 + <i>i</i>, <i>B</i> = 4 + 2<i>i</i>, <i>C</i> = 5 − <i>i</i> are the vertices of a triangle. Show that the angle at <i>B</i> is a right angle, and find the area of the triangle by two independent methods.',
        steps: [
          `The two edge vectors at <i>B</i> are<br>${U} = <i>z</i><sub><i>A</i></sub> − <i>z</i><sub><i>B</i></sub> = (1 + <i>i</i>) − (4 + 2<i>i</i>) = −3 − <i>i</i>,<br>${V} = <i>z</i><sub><i>C</i></sub> − <i>z</i><sub><i>B</i></sub> = (5 − <i>i</i>) − (4 + 2<i>i</i>) = 1 − 3<i>i</i>.`,
          `<b>Right angle.</b> Compute ${UBV} = (−3 + <i>i</i>)(1 − 3<i>i</i>) = −3 + 9<i>i</i> + <i>i</i> − 3<i>i</i><sup>2</sup> = −3 + 10<i>i</i> + 3 = 10<i>i</i>. Its real part is 0, so ${U} ⊥ ${V} and the angle at <i>B</i> is a right angle. The ratio form says the same thing:<br>${UOV} = ${fr('−3 − <i>i</i>', '1 − 3<i>i</i>')} = ${fr('(−3 − <i>i</i>)(1 + 3<i>i</i>)', '1 + 9')}<br>= ${fr('−3 − 9<i>i</i> − <i>i</i> + 3', '10')} = −<i>i</i>,<br>which is purely imaginary.`,
          `<b>Area, method 1 (half the product of the legs).</b> |${U}| = √(9 + 1) = √10 and |${V}| = √(1 + 9) = √10, so the area is ${HALF}√10 · √10 = 5.`,
          `<b>Area, method 2 (the cross-product formula).</b> Using ${HALF}|Im(${UBV})| with the same ${U}, ${V}: Im(10<i>i</i>) = 10, giving area 5. Using instead the symmetric form,<br>${zb(1)}${z(2)} = (1 − <i>i</i>)(4 + 2<i>i</i>) = 6 − 2<i>i</i>,<br>${zb(2)}${z(3)} = (4 − 2<i>i</i>)(5 − <i>i</i>) = 18 − 14<i>i</i>,<br>${zb(3)}${z(1)} = (5 + <i>i</i>)(1 + <i>i</i>) = 4 + 6<i>i</i>,<br>whose sum is 28 − 10<i>i</i>, so the area is ${HALF}|−10| = 5. All three routes agree.`,
        ],
        ans: 'The angle at <i>B</i> is 90°; the area is 5.',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Decide whether the vectors ${U} = 1 + <i>i</i> and ${V} = 1 − <i>i</i> are perpendicular, and whether ${U} = 1 + <i>i</i> and ${V} = 1 + <i>i</i> are perpendicular. Use the criterion “${U} ⊥ ${V} ⟺ Re(${UV}) = 0” and then the correct criterion, and explain the discrepancy.`,
        steps: [
          `<b>The trap.</b> The criterion with the bar dropped, Re(${UV}) = 0, is memorable, symmetric and wrong. It is not a statement about the angle between ${U} and ${V} at all: since arg(${UV}) = arg ${U} + arg ${V} (up to a multiple of 2π), it says that the sum of the two arguments is ±${fr('π', '2')} up to a multiple of 2π, whereas perpendicularity is about their difference. Because it is a symmetric-looking formula it survives a superficial sanity check, which is precisely why such wrong criteria are tempting.`,
          `<b>First pair,</b> ${U} = 1 + <i>i</i>, ${V} = 1 − <i>i</i>. As plane vectors these are (1, 1) and (1, −1), whose dot product is 1 − 1 = 0: they are genuinely perpendicular. The correct criterion agrees: ${UBV} = (1 − <i>i</i>)(1 − <i>i</i>) = 1 − 2<i>i</i> + <i>i</i><sup>2</sup> = −2<i>i</i>, and Re(−2<i>i</i>) = 0. But the flawed criterion gives ${UV} = (1 + <i>i</i>)(1 − <i>i</i>) = 2, with Re(${UV}) = 2 ≠ 0, and would report <b>not perpendicular</b>: a false negative.`,
          `<b>Second pair,</b> ${U} = ${V} = 1 + <i>i</i>. These are the same vector, so the angle between them is zero and they are as far from perpendicular as possible. The correct criterion agrees: ${UBV} = (1 − <i>i</i>)(1 + <i>i</i>) = 2, real part 2 ≠ 0. But the flawed criterion gives ${UV} = (1 + <i>i</i>)<sup>2</sup> = 2<i>i</i>, with Re(${UV}) = 0, and would report <b>perpendicular</b>: a false positive.`,
          `<b>Why.</b> ${UBV} has argument arg ${V} − arg ${U}, the angle you care about. ${UV} has argument arg ${V} + arg ${U}, which depends on where the pair sits in the plane and not on the angle between them. Rotating both vectors together leaves ${UBV} unchanged but spins ${UV}; only the first can be a valid geometric test.`,
        ],
        ans: `The first pair is perpendicular, the second is not. The criterion Re(${UV}) = 0 gets both wrong; the correct criterion is Re(${UBV}) = 0, equivalently ${UBV} + ${UVB} = 0.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${z(1)}, ${z(2)}, ${z(3)} lie on the circle |<i>z</i>| = <i>r</i>, so that the circumcentre of triangle ${z(1)}${z(2)}${z(3)} is the origin. Prove that <i>H</i> = ${Z123} is the orthocentre, and verify the result on a triangle whose orthocentre you know independently.`,
        steps: [
          'It is enough to show that <i>AH</i> ⊥ <i>BC</i> and <i>BH</i> ⊥ <i>CA</i>; two altitudes determine the orthocentre, and the third then passes through it automatically.',
          `<b>Step 1: the vector along <i>AH</i>.</b> <i>H</i> − ${z(1)} = ${z(2)} + ${z(3)}.`,
          `<b>Step 2: apply the criterion.</b> We must show Re[${HZ1_BAR}(${z(3)} − ${z(2)})] = 0, equivalently that ${Z23_BAR}(${z(3)} − ${z(2)}) is purely imaginary. Expand:<br>(${zb(2)} + ${zb(3)})(${z(3)} − ${z(2)})<br>= ${zb(2)}${z(3)} − ${zb(2)}${z(2)} + ${zb(3)}${z(3)} − ${zb(3)}${z(2)}<br>= ${zb(2)}${z(3)} − |${z(2)}|<sup>2</sup> + |${z(3)}|<sup>2</sup> − ${zb(3)}${z(2)}.`,
          `<b>Step 3: use the circle.</b> Since |${z(2)}| = |${z(3)}| = <i>r</i>, the two modulus terms cancel exactly, leaving<br>${zb(2)}${z(3)} − ${zb(3)}${z(2)} = ${zb(2)}${z(3)} − ${Z2Z3_BAR}<br>= 2<i>i</i> Im(${zb(2)}${z(3)}),<br>which is purely imaginary. Hence Re[${HZ1_BAR}(${z(3)} − ${z(2)})] = 0 and <i>AH</i> ⊥ <i>BC</i>.`,
          `<b>Step 4: the second altitude.</b> The expression ${Z123} is symmetric in the three vertices, so repeating steps 1–3 with the roles of ${z(1)} and ${z(2)} exchanged gives <i>BH</i> ⊥ <i>CA</i> with no new work. Therefore <i>H</i> lies on two altitudes and is the orthocentre. ■`,
          `<b>This is exactly where the cancellation lives:</b> the step that makes the proof work is |${z(2)}| = |${z(3)}|, i.e. the hypothesis that the circumcentre is at the origin. Move the circumcentre and the two modulus terms no longer cancel, which is why the general formula carries the correction term: <i>H</i> = ${Z123} − 2<i>O</i>.`,
          `<b>Independent verification.</b> Take ${z(1)} = 1, ${z(2)} = <i>i</i>, ${z(3)} = −1 on the unit circle. The segment from −1 to 1 is a diameter, so by the angle-in-a-semicircle theorem the angle at ${z(2)} = <i>i</i> is a right angle. The orthocentre of a right-angled triangle is the right-angle vertex itself, namely <i>i</i>. The formula gives ${Z123} = 1 + <i>i</i> − 1 = <i>i</i>. They agree.`,
          `<b>Corollary (worth memorising).</b> Since <i>G</i> = ${THIRD}(${Z123}), the origin-circumcentre case gives <i>H</i> = 3<i>G</i>, so <i>O</i>, <i>G</i>, <i>H</i> are collinear with <i>OH</i> = 3 <i>OG</i>: the Euler line and its 2 ∶ 1 ratio, obtained without a single coordinate.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: 'Show that the segment joining 2 + <i>i</i> to 5 + 5<i>i</i> is perpendicular to the segment joining 1 to −7 + 6<i>i</i>.',
            a: `${U} = 3 + 4<i>i</i>, ${V} = −8 + 6<i>i</i>; ${UBV} = (3 − 4<i>i</i>)(−8 + 6<i>i</i>) = 50<i>i</i>, whose real part is 0. Hence the segments are perpendicular.`,
          },
          {
            q: 'Find the area of the triangle with vertices 1 + 2<i>i</i>, 4 + 6<i>i</i>, −2 + 5<i>i</i>.',
            a: `${zb(1)}${z(2)} = 16 − 2<i>i</i>, ${zb(2)}${z(3)} = 22 + 32<i>i</i>, ${zb(3)}${z(1)} = 8 − 9<i>i</i>; the sum is 46 + 21<i>i</i>, so the area is ${HALF}(21) = ${fr('21', '2')}. (Shoelace on (1, 2), (4, 6), (−2, 5) gives ${HALF}|1(6 − 5) + 4(5 − 2) + (−2)(2 − 6)| = ${fr('21', '2')}, confirming.)`,
          },
          {
            q: `If |${z(1)}| = |${z(2)}| = |${z(3)}| = 1 and ${Z123} = 0, prove that ${z(1)}, ${z(2)}, ${z(3)} are the vertices of an equilateral triangle.`,
            a: `The circumcentre is the origin, so the orthocentre is ${Z123} = 0, which is also the circumcentre. A triangle whose orthocentre and circumcentre coincide is equilateral. (Alternative route: ${zb('<i>k</i>')} = ${fr('1', z('<i>k</i>'))}, so ${z(1)}${z(2)} + ${z(2)}${z(3)} + ${z(3)}${z(1)} = ${z(1)}${z(2)}${z(3)}(${zb(1)} + ${zb(2)} + ${zb(3)}) = ${z(1)}${z(2)}${z(3)}${Z123_BAR} = 0; squaring ${Z123} = 0 gives ${z(1)}<sup>2</sup> + ${z(2)}<sup>2</sup> + ${z(3)}<sup>2</sup> = −2(${z(1)}${z(2)} + ${z(2)}${z(3)} + ${z(3)}${z(1)}) = 0 = ${z(1)}${z(2)} + ${z(2)}${z(3)} + ${z(3)}${z(1)}, which is the equilateral condition of Topic 06.)`,
          },
          {
            q: `For ${U} = 3 + 4<i>i</i> and ${V} = −8 + 6<i>i</i>, compute ${U} · ${V} and ${U} × ${V} using the dictionary, and state the angle between them.`,
            a: `${UBV} = (3 − 4<i>i</i>)(−8 + 6<i>i</i>) = 50<i>i</i>, so ${U} · ${V} = 0 and ${U} × ${V} = 50. The angle is 90°, and since the cross product is positive, ${V} is 90° anticlockwise from ${U}. Check: |${U}||${V}| = 5 × 10 = 50 = |${U} × ${V}|, consistent with sin <i>θ</i> = 1.`,
          },
          {
            q: `Show that two non-zero complex numbers ${z(1)}, ${z(2)} satisfy ${zb(1)}${z(2)} + ${z(1)}${zb(2)} = 0 if and only if their position vectors are perpendicular. Deduce the equation of the line through the origin perpendicular to a fixed non-zero <i>a</i>.`,
            a: `${zb(1)}${z(2)} + ${z(1)}${zb(2)} = 2 Re(${zb(1)}${z(2)}) = 2(${z(1)} · ${z(2)}), which vanishes exactly when the two position vectors are perpendicular. Taking ${z(1)} = <i>a</i> fixed and ${z(2)} = <i>z</i>, the locus is <i>a</i>${BAR}<i>z</i> + <i>a</i><i>z</i>${BAR} = 0: the line through the origin perpendicular to <i>a</i>. (Compare the general line <i>a</i>${BAR}<i>z</i> + <i>a</i><i>z</i>${BAR} + <i>b</i> = 0 of Topic 06: <i>b</i> = 0 is the through-the-origin case.)`,
          },
          {
            q: `A triangle has circumcentre <i>O</i> = 2 − <i>i</i> and vertices ${z(1)}, ${z(2)}, ${z(3)} with ${Z123} = 9 + 3<i>i</i>. Find its orthocentre and its centroid, and verify the 2 ∶ 1 Euler ratio.`,
            a: `<i>H</i> = ${Z123} − 2<i>O</i> = (9 + 3<i>i</i>) − 2(2 − <i>i</i>) = 5 + 5<i>i</i>. <i>G</i> = ${THIRD}(9 + 3<i>i</i>) = 3 + <i>i</i>. Check: <i>H</i> − <i>G</i> = 2 + 4<i>i</i> and <i>G</i> − <i>O</i> = (3 + <i>i</i>) − (2 − <i>i</i>) = 1 + 2<i>i</i>, and indeed <i>H</i> − <i>G</i> = 2(<i>G</i> − <i>O</i>), so <i>O</i>, <i>G</i>, <i>H</i> are collinear in the ratio 2 ∶ 1.`,
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${U} = ${z(2)} − ${z(1)}, ${V} = ${z(4)} − ${z(3)}, both non-zero`, note: '' },
          {
            f: 'The dictionary',
            note: `${UBV} = (${U} · ${V}) + <i>i</i>(${U} × ${V}). The bar goes on the <b>first</b> vector. Re(${UV}) without the bar is not a geometric test.`,
          },
          {
            f: 'The two companion criteria',
            note: `Parallel / collinear: ${UOV} ∈ ℝ ⟺ Im(${UBV}) = 0 ⟺ ${UBV} = ${UVB}.<br>Perpendicular: ${UOV} purely imaginary ⟺ Re(${UBV}) = 0 ⟺ ${UBV} + ${UVB} = 0.`,
          },
          {
            f: 'Angle',
            note: `cos <i>θ</i> = ${fr(`Re(${UBV})`, `|${U}||${V}|`)}, sin <i>θ</i> = ${fr(`Im(${UBV})`, `|${U}||${V}|`)}, <i>θ</i> = arg(${fr(V, U)}).`,
          },
          {
            f: `Area of triangle ${z(1)}${z(2)}${z(3)}`,
            note: `${AREA1} = ${AREA2}. Without the modulus signs it is the signed area: positive means anticlockwise.`,
          },
          {
            f: 'Triangle centres',
            note: `Circumcentre at origin ⇒ orthocentre <i>H</i> = ${Z123}. General circumcentre <i>O</i>: <i>H</i> = ${Z123} − 2<i>O</i>. Centroid <i>G</i> = ${THIRD}(${Z123}), and <i>H</i> − <i>G</i> = 2(<i>G</i> − <i>O</i>) (Euler line, 2 ∶ 1).`,
          },
          {
            f: 'Special case',
            note: `|${z(1)}| = |${z(2)}| = |${z(3)}| = 1 with ${Z123} = 0 ⇒ equilateral, since orthocentre and circumcentre coincide.`,
          },
        ],
        aids: [],
      },
    ],
  },
];
