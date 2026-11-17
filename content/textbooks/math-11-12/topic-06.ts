import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topic 06: Advanced Limit Techniques, pp. 1098–1114 of the Class
 * 11 Mathematics Master Reference (October 2026 edition), word for word: the
 * supplement's Subtopic 06. The supplement's heading "Chapter 12: Limits and
 * Derivatives — Supplement" (p. 1098) is not copied; its opening paragraphs
 * open the Exam relevance part, before the box text. The topic is then split
 * at its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet" (its
 * box title "ADVANCED LIMIT TECHNIQUES" is not copied). The cheat sheet is
 * printed at the top of p. 1114, where Addendum A starts.
 * Figure 12.7 (caption p. 1099, drawn p. 1100) stands at the end of the
 * Concept intuition part, where the book prints its caption; Figure 12.8
 * (caption p. 1108, drawn p. 1109) is printed at the end of Example 2 and goes
 * on that example. The topic has no unnumbered drawing.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const lim = (s: string) => `lim<sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';

const x = '<i>x</i>';
const h = '<i>h</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const t = '<i>t</i>';
const f = '<i>f</i>';
const g = '<i>g</i>';
const m = '<i>m</i>';
const n = '<i>n</i>';
const u = '<i>u</i>';
const e = '<i>e</i>';
const fp = '<i>f</i>′';
const gp = '<i>g</i>′';
const fx = `${f}(${x})`;
const gx = `${g}(${x})`;
const fpx = `${fp}(${x})`;
const gpx = `${gp}(${x})`;
const X2 = `${x}<sup>2</sup>`;
const X3 = `${x}<sup>3</sup>`;
const X4 = `${x}<sup>4</sup>`;
const X5 = `${x}<sup>5</sup>`;
const XM = `${x}<sup><i>m</i></sup>`;
const XM1 = `${x}<sup><i>m</i>+1</sup>`;
const T2 = `${t}<sup>2</sup>`;
const U2 = `${u}<sup>2</sup>`;
const CM = '<i>c</i><sub><i>m</i></sub>';
const CM1 = '<i>c</i><sub><i>m</i>+1</sub>';
const R = `<i>R</i>(${x})`;
const EX = `${e}<sup><i>x</i></sup>`;
const HALF = fr('1', '2');
const THIRD = fr('1', '3');
const SIXTH = fr('1', '6');
const PI2 = fr('π', '2');
const PI4 = fr('π', '4');
const ZZ = fr('0', '0');
const II = fr('∞', '∞');
const FG = fr(fp, gp);
const XA = `${x}→${a}`;
const H0 = `${h}→0`;
const X0 = `${x}→0`;
const XPI2 = `${x}→π/2`;
const XMINF = `${x}→−∞`;
const XINF = `${x}→∞`;
const SHIFT = `${lim(XA)} ${fx} = ${lim(H0)} ${f}(${a} + ${h})`;
const RT = (s: string) => `√(${s})`;
const SQX = RT(X2);
const SQXX = RT(`${X2} + ${x}`);
const SQXB = RT(`${X2} + <i>bx</i>`);
const SQTT = RT(`${T2} − ${t}`);
const ROOT1T = RT(`1 − ${fr('1', t)}`);
const ROOT1X = RT(`1 + ${fr('1', x)}`);
const ONEX = `(1 + ${x})<sup>1/<i>x</i></sup>`;
const LN1X = `ln(1 + ${x})`;
const TSX = `tan ${x} − sin ${x}`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 06 · pp. 1098–1114 ────────────────
  {
    n: '06',
    title: 'Advanced Limit Techniques',
    kalam: 'Whenever a limit is taken somewhere inconvenient, change the variable so that the inconvenient point becomes zero, and then use the machinery you already have.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This supplement adds one full topic and two additional topics to Chapter 12. Topic 06 collects the limit techniques that the first five topics set up but did not develop as methods: shifting the point of approach (used so far only in the existence test), L’Hopital’s rule, series expansions (used so far only to explain the ${EX} limit), limits at −∞, and the 0 × ∞ form. Additional topic A delivers the functional-equation derivative problems promised in Topic 03’s exam-relevance box. Additional topic B works the “find ${a} and ${b} so that ${f} is differentiable” pattern end to end.<br><br>Read Topic 06 only after you are fluent with Topic 01 (the algebra of limits and its existence rule), Topic 02 (the standard-limit junctions), Topic 04 (the chain rule) and Topic 05 (limits at infinity). Every technique here is built on those.`,
      },
      {
        t: 'p',
        html: `This topic is where the marks hide. CBSE Boards ask limits at a non-zero point directly (NCERT’s own exercise set contains ${lim(XPI2)} ${fr('tan 2<i>x</i>', `${x} − ${PI2}`)}), usually for 2–3 marks. JEE Main leans hard on limits as ${x} → −∞ (the sign trap in surds is one of the most reliable single-question traps in the paper) and on the 0 × ∞ conversion ${ESTIMATE}. JEE Advanced expects the Maclaurin-expansion method as a matter of course for higher-order ${ZZ} limits such as ${lim(X0)} ${fr(`${x} − sin ${x}`, X3)}, which the expansion cracks in one line where L’Hopital needs three rounds. L’Hopital’s rule is not in the NCERT books at all (not even in Class 12), but every serious JEE aspirant uses it from Class 11 onward as a checking and speed tool, much as the Class 12 chain rule was bridged in for you in Topic 04.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `You already own a good toolkit. The trouble is that almost all of it is bolted to a single spot on the number line: <b>zero.</b> Each Topic 02 junction (${fr(`sin ${x}`, x)} → 1, ${fr(`${EX} − 1`, x)} → 1, ${fr(`1 − cos ${x}`, X2)} → ${HALF}) carries the fine print “the argument must go to 0”. So what do you do when the examiner parks the problem at ${x} → ${PI2}, or ${x} → ${PI4}, or ${x} → −∞?`,
      },
      {
        t: 'p',
        html: `Think about it this way… consider the Mumbai suburban network. Every timetable is written in minutes from Churchgate. If you board at Andheri, you do not throw away the timetable and invent a new one; you simply re-zero your watch: “I am at Churchgate-time plus 28 minutes.” Let ${h} be your offset from the reference station, and the whole timetable works again unchanged.`,
      },
      {
        t: 'p',
        html: `That is the single idea that unifies the first half of this topic. <b>Whenever a limit is taken somewhere inconvenient, change the variable so that the inconvenient point becomes zero, and then use the machinery you already have.</b><br>• Limit at ${x} = ${a}? Put ${x} = ${a} + ${h} and let ${h} → 0.<br>• Limit at ${x} → −∞? Put ${x} = −${t} and let ${t} → +∞.<br>• A 0 × ∞ product like ${x} sin ${fr('1', x)} as ${x} → ∞? Put ${t} = ${fr('1', x)} and let ${t} → 0.<br>Three different-looking problems, one move.`,
      },
      {
        t: 'p',
        html: `The second half of this topic is about a different question: <b>how do you resolve a ${ZZ} when both parts vanish to a high order?</b> Take ${fr(`${x} − sin ${x}`, X3)}. Near zero, sin ${x} and ${x} are twins, so the numerator is a difference of two near-identical quantities: it collapses to nothing. Meanwhile the denominator collapses to nothing too, but at a specific rate, namely like ${X3}. The whole answer is a race between two collapses. To judge the race you need to know not just that sin ${x} ≈ ${x}, but by how much sin ${x} misses ${x}.`,
      },
      { t: 'p', html: 'Two instruments read that fine detail:' },
      {
        t: 'p',
        html: `<b>L’Hopital’s rule</b> compares the two collapses by their slopes. If ${f} and ${g} both crash to zero at ${a}, then near ${a} each is approximately its own tangent line through (${a},${NB}0), so the ratio ${fr(fx, gx)} behaves like<br>${fr(`${fp}(${a})(${x} − ${a})`, `${gp}(${a})(${x} − ${a})`)} = ${fr(`${fp}(${a})`, `${gp}(${a})`)}.<br>Differentiating the top and the bottom separately is not an algebraic trick and it is emphatically <b>not</b> the quotient rule: it is a statement about competing rates of vanishing.`,
      },
      {
        t: 'p',
        html: `<b>Series expansion</b> is the high-resolution microscope. Instead of the crude “sin ${x} ≈ ${x}” you carry the full ruler<br>sin ${x} = ${x} − ${fr(X3, '6')} + ${fr(X5, '120')} − ⋯,<br>and the term you need simply appears. For ${fr(`${x} − sin ${x}`, X3)} the numerator is ${fr(X3, '6')} − ⋯ and the answer ${SIXTH} falls out in one line, where L’Hopital would need three rounds of differentiation.`,
      },
      { t: 'p', html: '<b>Limiting conditions and assumptions, where these ideas fail:</b>' },
      {
        t: 'p',
        html: `1. <b>The substitution ${x} = ${a} + ${h} must be exact, not approximate.</b> You must rewrite every occurrence of ${x}, including inside trigonometric arguments, and you must simplify with genuine identities such as tan(${PI2} + ${h}) = −cot ${h}. A half-substituted expression is worthless.`,
      },
      {
        t: 'p',
        html: `2. <b>L’Hopital applies only to ${ZZ} and ${II}.</b> Applied to anything else, including a perfectly ordinary limit that direct substitution would settle, it produces confident nonsense. And if the ratio of derivatives has no limit, the rule tells you nothing; it does not tell you the original limit fails.`,
      },
      {
        t: 'p',
        html: `3. <b>Series expansions are local statements.</b> ${LN1X} = ${x} − ${fr(X2, '2')} + ⋯ is valid only for −1 < ${x} ≤ 1; tan ${x} = ${x} + ${fr(X3, '3')} + ⋯ only for |${x}| < ${PI2}. For a limit as ${x} → 0 that is no obstacle, because ${x} eventually enters any such window. But you may never expand about 0 a function whose expansion does not converge near 0, and you may never expand about 0 when the limit is taken somewhere else: shift first, then expand.`,
      },
      {
        t: 'p',
        html: `4. <b>Truncating too early destroys the answer.</b> Replacing sin ${x} by ${x} inside ${fr(`${x} − sin ${x}`, X3)} gives 0, which is wrong. The rule is: if the denominator vanishes like ${XM}, you must carry the numerator’s expansion to order ${XM} inclusive.`,
      },
      {
        t: 'p',
        html: `5. <b>${SQX} is |${x}|, not ${x}.</b> As ${x} → +∞ these agree and nobody notices. As ${x} → −∞ they differ by a sign, and that sign is the entire question.`,
      },
      { t: 'fig', id: 'm11-12-fig-12.7' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `The payload of this section is four things you must be able to write down cold: the shift identities, the precise statement of L’Hopital’s rule, the standard Maclaurin table with its validity windows, and the ${x} → −∞ sign rule.`,
      },
      {
        t: 'formula',
        kicker: 'The shift substitution (change of variable at a point)',
        main: SHIFT,
        legend: [`${a} = the point being approached (finite)`, `${h} = the offset ${x} − ${a} from that point (a signed quantity with ${h} → 0)`],
        note: `The two-sided limit on the left corresponds to the two-sided limit on the right. For one-sided work use ${h} → 0<sup>+</sup> for the right-hand limit and ${x} = ${a} − ${h} with ${h} → 0<sup>+</sup> for the left-hand limit: exactly the device already used for the existence test in Topic 01.`,
      },
      {
        t: 'table',
        title: 'Trigonometric shift identities (the ones exam problems actually use)',
        head: ['Shift', 'Identity'],
        rows: [
          [`${x} = ${PI2} + ${h}`, `sin ${x} = cos ${h},<br>cos ${x} = −sin ${h},<br>tan ${x} = −cot ${h}`],
          [`${x} = ${PI2} − ${h}`, `sin ${x} = cos ${h},<br>cos ${x} = sin ${h},<br>tan ${x} = cot ${h}`],
          [`${x} = π + ${h}`, `sin ${x} = −sin ${h},<br>cos ${x} = −cos ${h},<br>tan ${x} = tan ${h}`],
          [`${x} = π − ${h}`, `sin ${x} = sin ${h},<br>cos ${x} = −cos ${h},<br>tan ${x} = −tan ${h}`],
          [`${x} = ${PI4} + ${h}`, `tan ${x} = ${fr(`1 + tan ${h}`, `1 − tan ${h}`)},<br><br>sin ${x} = ${fr(`cos ${h} + sin ${h}`, '√2')}`],
          [
            `${x} = 1 + ${h} (for tan ${fr('π<i>x</i>', '2')})`,
            `tan ${fr('π<i>x</i>', '2')} = tan(${PI2} + ${fr('π<i>h</i>', '2')})<br><br>= −cot ${fr('π<i>h</i>', '2')}`,
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>L’Hopital’s rule: precise statement.</b> This theorem is not in the NCERT books (it is proved in college calculus); it is imported here as a bridge tool in the same spirit as the chain rule in Topic 04.',
      },
      {
        t: 'p',
        html: `<b>Form ${ZZ}.</b> Let ${f} and ${g} be differentiable on an open interval containing ${a}, except possibly at ${a} itself. Suppose<br>1. ${lim(XA)} ${fx} = 0 and ${lim(XA)} ${gx} = 0;<br>2. ${gpx} ≠ 0 for all ${x} in that interval other than ${a};<br>3. ${lim(XA)} ${fr(fpx, gpx)} exists as a finite number, or is +∞ or −∞.<br>Then`,
      },
      {
        t: 'formula',
        kicker: 'L’Hopital’s rule',
        main: `For the forms ${ZZ} and ${II} only:<br>${lim(XA)} ${fr(fx, gx)} = ${lim(XA)} ${fr(fpx, gpx)}<br>(${gpx}${NB}≠${NB}0 near ${a}, and the limit on the right exists, finite or ±∞)`,
        legend: [`${f}, ${g} = the numerator and denominator functions`, `${fp}, ${gp} = their derivatives (taken <b>separately</b>; this is not the quotient rule)`, `${a} = the point approached (finite, one-sided or ±∞)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Form ${II}.</b> The same conclusion holds if condition 1 is replaced by |${gx}| → ∞ as ${x} → ${a} (with |${fx}| → ∞ as well, in the usual exam setting), the other two conditions being unchanged.`,
      },
      {
        t: 'p',
        html: `• ${a} may be a finite number, a one-sided approach ${a}<sup>+</sup> or ${a}<sup>−</sup>, or ±∞;<br>• Condition 3 is the one students drop. If ${FG} has no limit, the rule is silent: the original limit may still exist perfectly well.`,
      },
      {
        t: 'p',
        html: '<b>Maclaurin (series) expansions: the JEE Advanced table.</b> Each is an exact identity on the stated set, not an approximation.',
      },
      {
        t: 'table',
        title: null,
        head: ['Function', 'Expansion', 'Valid for'],
        rows: [
          [EX, `1 + ${x} + ${fr(X2, '2!')} + ${fr(X3, '3!')} + ⋯`, `all ${x} ∈ ℝ`],
          [`${a}<sup><i>x</i></sup> (${a} > 0)`, `1 + ${x} ln ${a} + ${fr(`(${x} ln ${a})<sup>2</sup>`, '2!')} + ⋯`, `all ${x} ∈ ℝ`],
          [`sin ${x}`, `${x} − ${fr(X3, '3!')} + ${fr(X5, '5!')} − ⋯`, `all ${x} ∈ ℝ`],
          [`cos ${x}`, `1 − ${fr(X2, '2!')} + ${fr(X4, '4!')} − ⋯`, `all ${x} ∈ ℝ`],
          [`tan ${x}`, `${x} + ${fr(X3, '3')} + ${fr(`2${X5}`, '15')} + ⋯`, `|${x}| < ${PI2}`],
          [LN1X, `${x} − ${fr(X2, '2')} + ${fr(X3, '3')} − ⋯`, `−1 < ${x} ≤ 1`],
          [
            `(1 + ${x})<sup><i>n</i></sup>`,
            `1 + ${n}${x} + ${fr(`${n}(${n} − 1)`, '2!')}${X2}<br><br>+ ${fr(`${n}(${n} − 1)(${n} − 2)`, '3!')}${X3} + ⋯`,
            `|${x}| < 1 for ${n} ∉ {0, 1, 2, …}; a terminating sum (the binomial theorem) for non-negative integer ${n}`,
          ],
          [`sin<sup>−1</sup> ${x}`, `${x} + ${fr(X3, '6')} + ${fr(`3${X5}`, '40')} + ⋯`, `|${x}| ≤ 1`],
          [`tan<sup>−1</sup> ${x}`, `${x} − ${fr(X3, '3')} + ${fr(X5, '5')} − ⋯`, `|${x}| ≤ 1`],
        ],
      },
      {
        t: 'p',
        html: `• ${n}! = factorial; ${n} in the binomial row is any real number;<br>• Every row above is an expansion <b>about</b> ${x} = 0. To use any of them at another point, shift first.<br>• Notice the family resemblance: after its constant term (if it has one), each expansion begins with the term that produced the corresponding standard limit in Topic 02 (for cos ${x} it is −${fr(X2, '2!')}, behind ${fr(`1 − cos ${x}`, X2)} → ${HALF}). The series continue the story.`,
      },
      {
        t: 'p',
        html: `<b>The order-matching rule (how many terms to keep).</b> If the denominator vanishes like ${XM}, expand the numerator up to and including the ${XM} term. Every later term contributes 0 to the limit, because a leftover of size ${XM1} divided by ${XM} still tends to 0.`,
      },
      {
        t: 'formula',
        kicker: `Limits as ${x} → −∞`,
        main: `${lim(XMINF)} ${fx} = ${lim(`${t}→+∞`)} ${f}(−${t})<br>${SQX} = |${x}|<br>|${x}| = ${x}, ${x} ≥ 0<br>|${x}| = −${x}, ${x} < 0`,
        legend: [`${x} = the approaching variable`, `${t} = the substituted variable at infinity (${x} = −${t})`],
        note: null,
      },
      {
        t: 'p',
        html: `Consequently, when you pull an ${x} out of a square root with ${x} < 0:<br>${SQXB} = |${x}|${RT(`1 + ${fr(b, x)}`)}<br><br>= −${x}${NB}${RT(`1 + ${fr(b, x)}`)}${NB}${NB}(${x} < 0).`,
      },
      {
        t: 'formula',
        kicker: 'The surd pair at +∞ and −∞',
        main: `${lim(`${x}→+∞`)} (${SQXB} − ${x}) = ${fr(b, '2')}<br>${lim(XMINF)} (${SQXB} + ${x}) = −${fr(b, '2')}`,
        legend: [`${b} = a constant`, `${x} = the variable`],
        note: null,
      },
      {
        t: 'p',
        html: `At −∞ it is the <b>sum</b> that is the indeterminate ∞ − ∞ form; the difference ${SQXB} − ${x} runs off to +∞ there, because both pieces are positive and large.`,
      },
      {
        t: 'p',
        html: `<b>The 0 × ∞ form.</b> If ${fx} → 0 and ${gx} → ∞ as ${x} → ${a}, the product ${fx}${NB}${gx} is indeterminate. Convert it:`,
      },
      {
        t: 'formula',
        kicker: 'The 0 × ∞ form',
        main: `${f} · ${g} = ${fr(f, fr('1', g))} (form ${ZZ})<br>${f} · ${g} = ${fr(g, fr('1', f))} (form ${II})`,
        legend: [`${f} = the factor that tends to 0`, `${g} = the factor that tends to ∞`],
        note: null,
      },
      {
        t: 'p',
        html: 'Choose whichever version is easier to handle. Once converted, every earlier tool (standard limits, series, L’Hopital) becomes available.',
      },
      {
        t: 'p',
        html: `<b>Variable glossary:</b> ${x} = the approaching variable; ${a} = the finite point approached; ${h} = ${x} − ${a} = the shift offset (${h} → 0); ${t} = the substituted variable at infinity (${x} = −${t} or ${t} = ${fr('1', x)}); ${m} = the order of vanishing of the denominator; ${n} = the binomial exponent.`,
      },

      { t: 'part', title: 'Derivations and key procedures' },
      { t: 'p', html: `<b>Derivation: why the shift ${x} = ${a} + ${h} is legal</b>` },
      {
        t: 'p',
        html: `1. Set ${h} = ${x} − ${a}. This is a one-to-one correspondence between values of ${x} and values of ${h}, with ${x} = ${a} + ${h}. <b>Reason:</b> it is just a relabelling of the axis, invertible in one line.`,
      },
      {
        t: 'p',
        html: `2. As ${x} runs through values close to ${a} but not equal to ${a}, ${h} runs through values close to 0 but not equal to 0, and conversely. <b>Reason:</b> |${x} − ${a}| = |${h}|, so “small distance from ${a}” and “small distance from 0” are literally the same statement.`,
      },
      {
        t: 'p',
        html: '3. A limit depends only on the values of the function on a punctured neighbourhood of the approach point (Topic 01’s Concept intuition part). <b>Reason:</b> this is the definition of a limit: the value at the point is irrelevant.',
      },
      {
        t: 'p',
        html: `4. Steps 2 and 3 together mean ${f} near ${a} and ${f}(${a} + ${h}) near ${h} = 0 carry identical information. Hence ${lim(XA)}${NB}${fx} exists precisely when ${lim(H0)}${NB}${f}(${a} + ${h}) exists, and the two values coincide.`,
      },
      {
        t: 'p',
        html: `This is the same identity the chapter has already used in the existence test ${lim(`${x}→${a}<sup>+</sup>`)} ${fx} = lim ${f}(${a} + ${h}) as ${h} → 0<sup>+</sup>. Here you use it not to test existence but to evaluate.`,
      },
      { t: 'p', html: '<b>Derivation: L’Hopital’s rule in the clean case</b>' },
      {
        t: 'p',
        html: `Assume the strongest convenient hypotheses: ${f} and ${g} are differentiable at ${a}, ${f}(${a}) = ${g}(${a}) = 0, and ${gp}(${a}) ≠ 0.`,
      },
      {
        t: 'p',
        html: `1. For ${x}${NB}≠${NB}${a} near ${a}, write<br>${fr(fx, gx)} = ${fr(`${fx} − ${f}(${a})`, `${gx} − ${g}(${a})`)}.<br><b>Reason:</b> ${f}(${a}) = ${g}(${a}) = 0, so we have subtracted nothing.`,
      },
      {
        t: 'p',
        html: `2. Divide numerator and denominator by (${x} − ${a}):<br>${fr(fx, gx)} = ${fr(`${fx} − ${f}(${a})`, `${x} − ${a}`)}<br><br>÷ ${fr(`${gx} − ${g}(${a})`, `${x} − ${a}`)}.<br><b>Reason:</b> legal because ${x} ≠ ${a} throughout the limit process.`,
      },
      {
        t: 'p',
        html: `3. Let ${x} → ${a}. Each of the two difference quotients is exactly the definition of a derivative at ${a} from Topic 03, so the numerator tends to ${fp}(${a}) and the denominator to ${gp}(${a}).`,
      },
      {
        t: 'p',
        html: `4. Since ${gp}(${a}) ≠ 0, the quotient rule for limits (Topic 01) applies, giving<br>${lim(XA)} ${fr(fx, gx)} = ${fr(`${fp}(${a})`, `${gp}(${a})`)}.`,
      },
      {
        t: 'p',
        html: `That is a complete and honest proof of the case you will meet most often. The general theorem (where you only know ${f}, ${g} → 0 and nothing about differentiability at ${a}, or where the form is ${II}) is proved using Cauchy’s Mean Value Theorem, a college result that NCERT does not teach. Until you meet that theorem, treat the general statement in the Key formulas and definitions part as an imported result, and treat the derivation above as the reason it is believable.`,
      },
      {
        t: 'p',
        html: `<b>A warning you must internalise: L’Hopital cannot prove the standard limits.</b> Applying it to ${lim(X0)} ${fr(`sin ${x}`, x)} requires knowing ${fr('<i>d</i>', '<i>dx</i>')} sin ${x} = cos ${x}, and it was itself established in Topic 03 by using ${fr(`sin ${x}`, x)} → 1. The argument is circular. The same objection applies to ${fr(`${EX} − 1`, x)}. Use L’Hopital to evaluate, never to justify a junction.`,
      },
      { t: 'p', html: '<b>Derivation: why series expansions give the right answer</b>' },
      {
        t: 'p',
        html: `Suppose the denominator vanishes like ${XM} and the numerator’s expansion is ${CM}${XM} + ${CM1}${XM1} + ⋯ with ${CM} ≠ 0.`,
      },
      {
        t: 'p',
        html: `1. Write the numerator as ${CM}${XM} + ${R}, where ${R} collects everything of degree ${m} + 1 and higher. <b>Reason:</b> an expansion may always be split at any chosen order.`,
      },
      {
        t: 'p',
        html: `2. Then<br>${fr(`${CM}${XM} + ${R}`, XM)} = ${CM} + ${fr(R, XM)}. <b>Reason:</b> term-by-term division.`,
      },
      {
        t: 'p',
        html: `3. ${R} is a sum of terms each carrying a factor ${XM1} at least, so ${fr(R, XM)} carries a factor ${x} and tends to 0. <b>Reason:</b> algebra of limits.`,
      },
      {
        t: 'p',
        html: `4. Therefore the limit is ${CM}: <b>the answer is the coefficient of ${XM} in the numerator’s expansion, and nothing else matters.</b>`,
      },
      { t: 'p', html: 'This is exactly why truncating early is fatal and why truncating late is merely wasteful.' },
      {
        t: 'proc',
        title: `Procedure A: shifting the point, put x${NB}=${NB}a${NB}+${NB}h`,
        steps: [
          `Read off ${a}, the point being approached, and write ${x} = ${a} + ${h} with ${h} → 0. <b>Why:</b> it drags the problem to the only place your standard limits live.`,
          `Rewrite <b>every</b> occurrence of ${x} as ${a} + ${h}, including inside every trigonometric, exponential and logarithmic argument. <b>Why:</b> a partial substitution mixes two coordinate systems and gives garbage.`,
          `Simplify all trigonometric functions of ${a} + ${h} using exact identities (use the table in the Key formulas and definitions part). <b>Why:</b> this is the step that converts sin and tan of a large angle into sin and tan of a small one.`,
          `Confirm that the form is still ${ZZ} in the new variable. <b>Why:</b> if it is not, direct substitution now finishes the job in one line.`,
          'Route the expression through a standard limit from Topic 02, matching arguments as usual. <b>Why:</b> the junctions are now legal, since the argument tends to 0.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: applying L’Hopital’s rule safely',
        steps: [
          `Substitute the limiting value. <b>Confirm</b> the form is ${ZZ} or ${II}. If it is anything else, stop: the rule does not apply. <b>Why:</b> this single check kills the most common misuse.`,
          'If the form is 0 × ∞, ∞ − ∞ or 1<sup>∞</sup>, convert first (Procedure E, Topic 05 conjugate trick, or the 1<sup>∞</sup> rule of Topic 02). <b>Why:</b> L’Hopital reads fractions only.',
          `Differentiate the numerator and the denominator <b>separately</b>. Write ${fr(fpx, gpx)}, never (${fr(f, g)})′. <b>Why:</b> the quotient rule answers a different question entirely.`,
          `Substitute again. If you get a number, that is the answer. If you get ${ZZ} or ${II} again, repeat from step 3. <b>Why:</b> the rule may be iterated, but only while the form remains indeterminate at each stage.`,
          `If the successive ratios never settle (if ${FG} oscillates or grows without pattern), abandon L’Hopital and use another method. <b>Why:</b> condition 3 of the theorem has failed, so the rule yields no information at all.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Illustration (${ZZ}, twice).</b> ${lim(X0)} ${fr(`${EX} − 1 − ${x}`, X2)}. At ${x} = 0: 1 − 1 − 0 = 0 over 0, so the form is ${ZZ}.<br>Differentiate: ${fr(`${EX} − 1`, `2${x}`)}, still ${ZZ}.<br>Differentiate again: ${fr(EX, '2')} → ${HALF}.<br>Series confirms it instantly: the numerator is ${fr(X2, '2')} + ⋯, so the answer is the coefficient ${HALF}.`,
      },
      {
        t: 'p',
        html: `<b>Illustration (${II}).</b> ${lim(XINF)} ${fr(`ln ${x}`, x)}. Both parts tend to ∞. Differentiating gives ${fr('1', x)} over 1, that is ${fr('1', x)} → 0. So logarithms lose to powers at infinity: a fact worth carrying.`,
      },
      {
        t: 'p',
        html: '<b>Where L’Hopital belongs in your exam strategy.</b> It is not in the CBSE syllabus (Class 11 or 12), so a Boards answer script must show the syllabus method (factor, rationalise, or route through a junction). Use L’Hopital in three places: to check an answer you obtained the official way, to move fast in a JEE Main MCQ where only the number is scored, and to attack a limit whose algebra is genuinely unpleasant.',
      },
      {
        t: 'proc',
        title: 'Procedure C: the series-expansion method',
        steps: [
          `Confirm the form is ${ZZ} and that the limit is taken at ${x} = 0. If it is taken elsewhere, shift first with Procedure A. <b>Why:</b> the table in the Key formulas and definitions part expands about 0 only.`,
          `Determine ${m}, the order to which the denominator vanishes: the power of ${x} that survives after you expand it. <b>Why:</b> ${m} decides how much of the numerator you need.`,
          `Expand every function in the numerator up to and including the ${XM} term, and no further. <b>Why:</b> this part’s derivation shows higher terms contribute nothing.`,
          `Combine and cancel. Everything below order ${m} must cancel if the limit is finite; if it does not, recheck the algebra first (the constant term must cancel, since the numerator was known to vanish), and if lower terms really survive, the limit is infinite or does not exist. <b>Why:</b> this is a free error check, and you should use it every time.`,
          `The limit is the coefficient of ${XM} in the simplified numerator divided by the coefficient of ${XM} in the denominator.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure D: limits as x → −∞',
        steps: [
          `Substitute ${x} = −${t}, so that ${t} → +∞, and rewrite the whole expression in ${t}. <b>Why:</b> this converts an unfamiliar direction into Topic 05’s familiar one, and it makes every sign explicit rather than remembered.`,
          `Alternatively, work directly in ${x} but write ${SQX} = −${x} wherever you take an ${x} out of a square root, because ${x} is negative. <b>Why:</b> √· is never negative, so the extracted factor must be |${x}|.`,
          'Apply the Topic 05 toolkit: rationalise an ∞ − ∞ surd, then divide by the highest power.',
          'Sanity-check the sign of your answer against the graph’s behaviour. <b>Why:</b> the entire trap in this family is a sign, so a quick plausibility check catches it.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure E: converting a 0 × ∞ form',
        steps: [
          'Identify which factor tends to 0 and which to ∞. <b>Why:</b> you cannot convert what you have not diagnosed.',
          `Move one factor to the denominator as its reciprocal: ${f} · ${g} = ${fr(f, fr('1', g))} gives ${ZZ}, and ${f} · ${g} = ${fr(g, fr('1', f))} gives ${II}. <b>Why:</b> both are legal rewrites; they merely produce different-looking work.`,
          'Prefer the version whose denominator is simple to differentiate or to expand. <b>Why:</b> the wrong choice can make an easy limit harder than the original.',
          'Finish with a standard limit, a series, or L’Hopital.',
        ],
      },
      {
        t: 'p',
        html: `<b>Illustration 1.</b> ${lim(XINF)} ${x} sin ${fr('1', x)} is ∞ × 0. Put ${t} = ${fr('1', x)}, so ${t} → 0<sup>+</sup> and the expression becomes ${fr(`sin ${t}`, t)} → 1. No calculus needed: the substitution alone did it.`,
      },
      {
        t: 'p',
        html: `<b>Illustration 2.</b> ${lim(`${x}→0<sup>+</sup>`)} ${x} ln ${x} is 0 × (−∞). Writing it as ${fr(`ln ${x}`, fr('1', x))} gives ${II}, and L’Hopital gives<br>${fr('1', x)} over (−${fr('1', X2)}), that is −${x} → 0.<br>So the limit is 0. Had you instead written ${fr(x, fr('1', `ln ${x}`))}, differentiating would produce −${x}(ln ${x})<sup>2</sup>, worse than what you started with. That is step 3 of the procedure earning its keep.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate ${lim(XPI2)} ${fr('tan 2<i>x</i>', `${x} − ${PI2}`)}.`,
        steps: [
          `<b>Step 1: Check the form.</b> As ${x} → ${PI2}, the denominator → 0. The numerator is tan 2${x} with 2${x} → π, and tan π = 0. So the form is ${ZZ} and must be resolved. There is nothing to factor and no junction available, because the argument is heading to π, not to 0: this is precisely the situation Procedure A is built for.`,
          `<b>Step 2: Shift the point.</b> Put ${x} = ${PI2} + ${h}, so ${h} → 0. Then<br>${x} − ${PI2} = ${h},${NB}${NB}${NB}2${x} = π + 2${h}.`,
          `<b>Step 3: Simplify with an exact identity.</b> Since tan has period π,<br>tan 2${x} = tan(π + 2${h}) = tan 2${h}.`,
          `<b>Step 4: Rewrite and route through a junction.</b> The limit becomes<br>${lim(H0)} ${fr('tan 2<i>h</i>', h)}<br>= ${lim(H0)} (${fr('tan 2<i>h</i>', '2<i>h</i>')}) · 2.<br>The bracket is the standard limit ${fr('tan(box)', 'box')} → 1 from Topic 02, now legal because 2${h} → 0.`,
          `<b>Step 5: Read off.</b><br>${lim(XPI2)} ${fr('tan 2<i>x</i>', `${x} − ${PI2}`)} = 1 · 2 = 2.`,
          `<b>Presentation note:</b> in a Boards answer, write the substitution line “Let ${x} = ${PI2} + ${h}, so that ${h} → 0 as ${x} → ${PI2}” explicitly. That line carries a method mark on its own.`,
        ],
        ans: '2',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'm11-12-fig-12.8',
        q: `Evaluate ${lim(XMINF)} (${SQXX} + ${x}).`,
        steps: [
          `<b>Step 1: Diagnose.</b> As ${x} → −∞ we have ${X2} + ${x} → +∞, so ${SQXX} → +∞, while ${x} → −∞. The sum is therefore ∞ − ∞: indeterminate. (Note carefully that at ${x} → +∞ it would be the difference ${SQXX} − ${x} that is indeterminate. At −∞ the roles swap.)`,
          `<b>Step 2: Substitute ${x} = −${t} with ${t} → +∞.</b> This is Procedure D, step 1.<br>${SQXX} + ${x} = ${SQTT} − ${t}.<br>Every sign is now explicit and there is nothing left to remember.`,
          `<b>Step 3: Rationalise (the Topic 05 conjugate trick).</b><br>${SQTT} − ${t} = ${fr(`(${T2} − ${t}) − ${T2}`, `${SQTT} + ${t}`)}<br><br>= ${fr(`−${t}`, `${SQTT} + ${t}`)}.`,
          `<b>Step 4: Divide by the highest power.</b> Since ${t} > 0, ${SQTT} = ${t}${ROOT1T}, so dividing numerator and denominator by${NB}${t}:<br>= ${fr('−1', `${ROOT1T} + 1`)}.`,
          `<b>Step 5: Take the limit.</b> As ${t} → ∞, ${fr('1', t)} → 0:<br>${lim(`${t}→∞`)} ${fr('−1', `${ROOT1T} + 1`)}<br><br>= ${fr('−1', '1 + 1')} = −${HALF}.`,
          `<b>Working directly in ${x} (the sign-aware route).</b> Multiply and divide by the conjugate without substituting:<br>${SQXX} + ${x} = ${fr(x, `${SQXX} − ${x}`)}.`,
          `Now extract ${x} from the root. Because ${x} < 0, ${SQXX} = |${x}|${ROOT1X} = −${x}${ROOT1X}. Hence<br>= ${fr(x, `−${x}${ROOT1X} − ${x}`)}<br><br>= ${fr(x, `−${x}(${ROOT1X} + 1)`)}<br><br>= ${fr('−1', `${ROOT1X} + 1`)} ⟶ −${HALF}.`,
          `Same answer. The single place where a student loses this mark is writing ${SQXX} = ${x}${ROOT1X}, which asserts that a square root is negative.`,
        ],
        ans: `−${HALF}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Evaluate<br>${lim(X0)} ${fr(TSX, X3)}.`,
        steps: [
          `<b>The trap: premature approximation.</b> You know that tan ${x} ≈ ${x} and sin ${x} ≈ ${x} for small ${x}. Substituting both into the numerator gives ${x} − ${x} = 0, and the seductive answer is<br>${fr('0', X3)} = 0.<br>That answer is wrong.`,
          `<b>Why it fails.</b> “sin ${x} ≈ ${x}” is a statement about the first term only; the error it hides is of size ${X3}. You are dividing by ${X3}. The thing you threw away is the answer. The rule from Procedure C is unforgiving here: the denominator vanishes to order ${m} = 3, so the numerator must be expanded to order ${X3}, not order ${x}.`,
          `<b>Correct method 1: factor and use junctions (the Topic 02 route).</b><br>${TSX} = ${fr(`sin ${x}`, `cos ${x}`)} − sin ${x}<br><br>= sin ${x}${NB}(${fr(`1 − cos ${x}`, `cos ${x}`)}).`,
          `Therefore<br>${fr(TSX, X3)}<br><br>= ${fr(`sin ${x}`, x)} · ${fr(`1 − cos ${x}`, X2)} · ${fr('1', `cos ${x}`)}<br><br>⟶ 1 · ${HALF} · 1 = ${HALF}.`,
          `<b>Correct method 2: series (the fast route).</b> With ${m} = 3, expand each function to order ${X3}:<br>tan ${x} = ${x} + ${fr(X3, '3')} + ⋯,<br><br>sin ${x} = ${x} − ${fr(X3, '6')} + ⋯.`,
          `Subtracting, the ${x} terms cancel exactly (the free error check of Procedure C, step 4):<br>${TSX} = (${THIRD} + ${SIXTH})${X3} + ⋯<br><br>= ${fr(X3, '2')} + ⋯.<br>The coefficient of ${X3} is ${HALF}, so the limit is ${HALF}.`,
          `<b>Correct method 3: L’Hopital (the verification route).</b> The form is ${ZZ} at each of the three stages differentiated below, which is what makes each step legal; the fourth expression is a number, so you substitute.<br>${fr(TSX, X3)}<br><br>→ ${fr(`sec<sup>2</sup> ${x} − cos ${x}`, `3${X2}`)}<br><br>→ ${fr(`2 sec<sup>2</sup> ${x} tan ${x} + sin ${x}`, `6${x}`)}<br><br>→ ${fr(`cos ${x} − 4 sec<sup>2</sup> ${x} + 6 sec<sup>4</sup> ${x}`, '6')}.`,
          `At ${x} = 0 the last expression is ${fr('1 − 4 + 6', '6')} = ${fr('3', '6')} = ${HALF}. Three rounds of differentiation for what the series gave in one line, which is exactly why JEE Advanced students reach for the expansion first.`,
        ],
        ans: `${lim(X0)} ${fr(TSX, X3)} = ${HALF}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Evaluate<br>${lim(X0)} ${fr(`${ONEX} − ${e}`, x)}.`,
        steps: [
          `<b>Step 1: Diagnose.</b> Topic 02: ${ONEX} → ${e}, so the numerator → 0 and the denominator → 0: form ${ZZ}. This one resists every earlier tool. The 1<sup>∞</sup> rule tells you the value ${e} but says nothing about the rate at which ${ONEX} approaches ${e}, and the rate is the whole question. Expansion is the correct instrument.`,
          `<b>Step 2: Convert the power to an exponential.</b> For ${x} near 0 with ${x} ≠ 0 and 1 + ${x} > 0,<br>${ONEX} = exp(${fr(LN1X, x)}).`,
          `<b>Step 3: Expand the logarithm.</b> For |${x}| < 1 the table gives<br>${LN1X} = ${x} − ${fr(X2, '2')} + ${fr(X3, '3')} − ⋯,<br>so<br>${fr(LN1X, x)} = 1 − ${fr(x, '2')} + ${fr(X2, '3')} − ⋯.`,
          `<b>Step 4: Decide the order needed.</b> The denominator of the original expression is ${x}, so ${m} = 1: we need the numerator only to order ${x}. Write<br>${fr(LN1X, x)} = 1 + ${u},<br><br>${u} = −${fr(x, '2')} + ${fr(X2, '3')} − ⋯,<br>so that ${u} → 0 and ${u} has no constant term.`,
          `<b>Step 5: Expand the exponential.</b> Using ${e}<sup>1+<i>u</i></sup> = ${e} · ${e}<sup><i>u</i></sup> and ${e}<sup><i>u</i></sup> = 1 + ${u} + ${fr(U2, '2!')} + ⋯:<br>${ONEX} = ${e}(1 + ${u} + ${fr(U2, '2')} + ⋯).`,
          `Since ${u} starts at order ${x}, the term ${fr(U2, '2')} starts at order ${X2} and is beyond the order we need. Keeping terms up to ${x}:<br>${ONEX}<br>= ${e}(1 − ${fr(x, '2')} + (terms of order ${X2} and higher))<br><br>= ${e} − ${fr('<i>ex</i>', '2')} + ⋯.`,
          `<b>Step 6: Assemble.</b> The constant ${e} cancels, the error check of Procedure C passing, as it must:<br>${fr(`${ONEX} − ${e}`, x)}<br><br>= ${fr(`−<i>ex</i> + (order ${X2})`, `2${x}`)}<br><br>= −${fr(e, '2')} + (order ${x}).`,
          `<b>Step 7: Read off.</b><br>${lim(X0)} ${fr(`${ONEX} − ${e}`, x)} = −${fr(e, '2')}.`,
          `<b>Deep point.</b> This is the standard first-order correction to the definition of ${e}: ${ONEX} ≈ ${e}(1 − ${fr(x, '2')}) for small ${x}. It also explains a numerical fact: computing ${e} as (1 + ${fr('1', n)})<sup><i>n</i></sup> converges only about as fast as ${fr('1', n)}, which is painfully slow. L’Hopital can be forced through this problem, but differentiating ${ONEX} requires logarithmic differentiation and produces an expression far uglier than the two-line expansion above. When the numerator is a composition of a log inside an exponential, expand.`,
        ],
        ans: `−${fr(e, '2')}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Evaluate ${lim(XPI2)} ${fr(`cos ${x}`, `${x} − ${PI2}`)}.`, a: '−1' },
          { q: `[CBSE] Evaluate ${lim(`${x}→π`)} ${fr(`sin ${x}`, `π − ${x}`)}.`, a: '1' },
          { q: `[JEE Main] Evaluate<br>${lim(`${x}→π/4`)} ${fr(`1 − tan ${x}`, `1 − √2 sin ${x}`)}.`, a: '2' },
          { q: `[JEE Main] Evaluate ${lim(XMINF)} (${RT(`${X2} + 3${x}`)} + ${x}).`, a: `−${fr('3', '2')}` },
          { q: `[JEE Main] Evaluate ${lim(XINF)} ${X2}(1 − cos ${fr('2', x)}). (A ∞ × 0 form: convert it.)`, a: '2' },
          {
            q: `[JEE Main] Evaluate ${lim(`${x}→1`)}(1 − ${x}) tan ${fr('π<i>x</i>', '2')}. (Both a shift and a 0 × ∞ form.)`,
            a: fr('2', 'π'),
          },
          { q: `[JEE Advanced] Evaluate ${lim(X0)} ${fr(`${x} − sin ${x}`, X3)}.`, a: SIXTH },
          {
            q: `[JEE Advanced] Evaluate<br>${lim(X0)} ${fr(`2${NB}ln(1 + ${x}) − 2${x} + ${X2}`, `2${X3}`)}.`,
            a: THIRD,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${lim(XMINF)} (${SQXX} − ${x}) equals`,
        opts: [
          {
            label: HALF,
            nudge: `<b>(A)</b> ${HALF}: the answer to the same expression at +∞. The student memorised “${SQXB} − ${x} → ${fr(b, '2')}” without the direction attached to it. This is the single most-punished reflex in the whole family.`,
          },
          {
            label: `−${HALF}`,
            nudge: `<b>(B)</b> −${HALF}: the answer to ${SQXX} + ${x} at −∞. The student correctly remembered that a sign flips somewhere, and flipped the wrong one.`,
          },
          { label: '+∞', nudge: null },
          { label: '0', nudge: '<b>(D)</b> 0: the “∞ − ∞ = 0” fallacy from Topic 05, applied here to an expression not even of that form.' },
        ],
        correct: 2,
        solution: `As ${x} → −∞, ${SQXX} → +∞ and −${x} → +∞ as well, so this is ∞ + ∞, not an indeterminate form at all: the expression grows without bound. (Substituting ${x} = −${t} makes it obvious: ${SQTT} + ${t} → ∞.)`,
      },
      {
        t: 'mcq',
        q: `${lim(X0)} ${fr(`${X2} + 3${x} + 2`, `${x} + 1`)} equals`,
        opts: [
          { label: '2', nudge: null },
          {
            label: '3',
            nudge: `<b>(B)</b> 3: the classic illegal L’Hopital. Differentiating top and bottom gives ${fr(`2${x} + 3`, '1')} → 3. The rule was applied to a limit that was never ${ZZ}, so the “answer” is meaningless. This is why Procedure B step 1 exists.`,
          },
          { label: '0', nudge: `<b>(C)</b> 0: the student saw ${x} → 0 and reported the value of ${x} rather than the value of the function.` },
          {
            label: 'does not exist',
            nudge: '<b>(D)</b> assumes that any question presented as “evaluate the limit” must be a trick with a non-existent answer.',
          },
        ],
        correct: 0,
        solution: `Direct substitution gives ${fr('0 + 0 + 2', '0 + 1')} = 2. The form is not indeterminate, so no special machinery is needed, and none is permitted.`,
      },
      {
        t: 'mcq',
        q: `${lim(X0)} ${fr(`tan ${x} − ${x}`, X3)} equals`,
        opts: [
          { label: THIRD, nudge: null },
          {
            label: SIXTH,
            nudge: `<b>(B)</b> ${SIXTH}: the answer to ${fr(`${x} − sin ${x}`, X3)}. The student confused the tan expansion (coefficient +${THIRD}) with the sin expansion (coefficient −${SIXTH}). Learn the two coefficients as a contrasting pair.`,
          },
          {
            label: '0',
            nudge: `<b>(C)</b> 0, premature truncation: tan ${x} ≈ ${x} makes the numerator “zero”. Exactly the trap of the third worked example.`,
          },
          {
            label: HALF,
            nudge: `<b>(D)</b> ${HALF}: the answer to<br>${fr(TSX, X3)}, misremembered as belonging to this problem.`,
          },
        ],
        correct: 0,
        solution: `With ${m} = 3, expand tan ${x} = ${x} + ${fr(X3, '3')} + ⋯. The ${x} terms cancel, leaving ${fr(X3, '3')} + ⋯, so the limit is the coefficient ${THIRD}.`,
      },
      {
        t: 'mcq',
        q: `${lim(XPI2)} ${fr(`1 − sin ${x}`, `(${x} − ${PI2})<sup>2</sup>`)} equals`,
        opts: [
          { label: HALF, nudge: null },
          {
            label: '1',
            nudge: `<b>(B)</b> 1: the student reached the correct ${fr(`1 − cos ${h}`, `${h}<sup>2</sup>`)} but quoted its value as 1, confusing it with ${fr(`sin ${h}`, h)} → 1. The half is the whole point of that junction.`,
          },
          {
            label: '0',
            nudge: `<b>(C)</b> 0: the student observed 1 − sin ${x} → 0 and stopped, ignoring that the denominator also vanishes.`,
          },
          {
            label: `−${HALF}`,
            nudge: `<b>(D)</b> −${HALF}, a sign slip in the numerator: writing 1 − sin ${x} as cos ${h} − 1 instead of 1 − cos ${h}. Since sin(${PI2} + ${h}) = cos ${h}, the numerator is positive and the limit is +${HALF}.`,
          },
        ],
        correct: 0,
        solution: `Shift with ${x} = ${PI2} + ${h}. Then sin ${x} = cos ${h} and ${x} − ${PI2} = ${h}, so the expression becomes ${fr(`1 − cos ${h}`, `${h}<sup>2</sup>`)} → ${HALF} by the Topic 02 junction.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Substituting ${x} = ${a} + ${h} in only some places.</b> If a single ${x} survives inside a trigonometric argument, the expression now mixes two variables and is meaningless. <b>Correction:</b> rewrite the entire expression in ${h} before you simplify anything, then check that no ${x} remains.`,
          `<b>Applying L’Hopital to a form that is not indeterminate.</b> This manufactures wrong answers with total confidence, because nothing in the algebra complains. <b>Correction:</b> substitute first, every single time, and write down which of ${ZZ} or ${II} you have before you differentiate.`,
          `<b>Differentiating the quotient instead of the two parts.</b> Writing (${fr(f, g)})′ = ${fr(`${fp}${g} − ${f}${gp}`, `${g}<sup>2</sup>`)} and calling it L’Hopital. <b>Correction:</b> L’Hopital forms ${FG}: top and bottom differentiated independently, no cross terms, no ${g}<sup>2</sup>.`,
          `<b>Forgetting to re-check the form between successive applications.</b> After the first differentiation the form may have become<br>${fr('non-zero number', '0')}, in which case a second application is illegal and the limit is infinite (or does not exist if the sides differ in sign). <b>Correction:</b> treat each round as a fresh problem starting at Procedure B step 1.`,
          `<b>Concluding “no limit” because ${FG} has no limit.</b> For ${lim(XINF)} ${fr(`${x} + sin ${x}`, x)} the ratio of derivatives is 1 + cos ${x}, which oscillates forever, yet the original limit is plainly 1, since<br>${fr(`${x} + sin ${x}`, x)} = 1 + ${fr(`sin ${x}`, x)}<br><br>and |${fr(`sin ${x}`, x)}| ≤ ${fr('1', x)} → 0.<br><b>Correction:</b> when L’Hopital fails to converge, it has told you nothing; switch methods.`,
          `<b>Truncating an expansion below the order of the denominator.</b> The commonest single error in JEE Advanced limit questions. <b>Correction:</b> find ${m} first, expand to ${XM}, and use the cancellation of all lower-order terms as your proof that you did it right.`,
          `<b>Expanding about the wrong point.</b> The table expands about ${x} = 0. You cannot write “sin ${x} = ${x} − ${fr(X3, '6')}” while ${x} → π. <b>Correction:</b> shift with Procedure A first; then the new variable does tend to 0 and the table applies.`,
          `<b>Writing ${SQX} = ${x} when ${x} is negative.</b> <b>Correction:</b> ${SQX} = |${x}| always. When ${x} → −∞, extract −${x} from the root, or dodge the issue entirely by substituting ${x} = −${t}.`,
          `<b>Treating 0 × ∞ as 0.</b> A vanishing factor and an exploding factor can balance at any value whatsoever. <b>Correction:</b> convert to ${ZZ} or ${II} and resolve.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed and accuracy).</b> Build a two-second habit: before doing anything, ask where the limit is taken. If the answer is not “0 or ∞”, your first pen stroke is the substitution line. Second habit: memorise just four expansion coefficients: sin ${x} gives −${SIXTH}, tan ${x} gives +${THIRD}, ${EX} gives +${SIXTH}, and ${LN1X} gives +${THIRD}, each at the cubic term. Those four numbers answer a startling share of JEE Advanced limit questions on sight ${ESTIMATE}. Third habit: in an MCQ, solve by the syllabus method and verify with L’Hopital: two independent routes agreeing is worth more than either route done twice.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Shift the point', note: `${SHIFT}. Rewrite every ${x}; simplify with exact identities.` },
          {
            f: 'Shift table',
            note: `sin(${PI2} + ${h}) = cos ${h}; cos(${PI2} + ${h}) = −sin ${h}; tan(${PI2} + ${h}) = −cot ${h}; tan(π + ${h}) = tan ${h};<br>tan(${PI4} + ${h}) = ${fr(`1 + tan ${h}`, `1 − tan ${h}`)}.`,
          },
          {
            f: 'L’Hopital (a bridge tool beyond the syllabus)',
            note: `for ${ZZ} or ${II} <b>only</b>, with ${f}, ${g} differentiable near ${a}, ${gp} ≠ 0, and lim ${FG} existing; then<br>lim ${fr(f, g)} = lim ${FG}.<br>Differentiate top and bottom <b>separately</b>. Re-check the form before every repeat. Never use it to prove a standard limit (circular).`,
          },
          {
            f: `Maclaurin table (about ${x} = 0)`,
            note: `${EX} = 1 + ${x} + ${fr(X2, '2!')} + ⋯ (all ${x});<br>sin ${x} = ${x} − ${fr(X3, '3!')} + ⋯ (all ${x});<br>cos ${x} = 1 − ${fr(X2, '2!')} + ⋯ (all ${x});<br>tan ${x} = ${x} + ${fr(X3, '3')} + ⋯ (|${x}| < ${PI2});<br>${LN1X} = ${x} − ${fr(X2, '2')} + ${fr(X3, '3')} − ⋯ (−1 < ${x} ≤ 1);<br>(1 + ${x})<sup><i>n</i></sup> = 1 + ${n}${x} + ${fr(`${n}(${n} − 1)`, '2!')}${X2} + ⋯ (|${x}| < 1 unless ${n} is a non-negative integer);<br>tan<sup>−1</sup> ${x} = ${x} − ${fr(X3, '3')} + ⋯, sin<sup>−1</sup> ${x} = ${x} + ${fr(X3, '6')} + ⋯ (|${x}| ≤ 1).`,
          },
          {
            f: 'Order rule',
            note: `denominator vanishes like ${XM} ⇒ expand the numerator to order ${XM}; the answer is the ratio of the ${XM} coefficients. All lower-order terms must cancel (if they do not, the limit is not finite).`,
          },
          {
            f: 'Standard high-order results',
            note: `${fr(`${x} − sin ${x}`, X3)} → ${SIXTH}; ${fr(`tan ${x} − ${x}`, X3)} → ${THIRD};<br>${fr(TSX, X3)} → ${HALF}; ${fr(`${EX} − 1 − ${x}`, X2)} → ${HALF};<br>${fr(`${ONEX} − ${e}`, x)} → −${fr(e, '2')}.`,
          },
          {
            f: 'At −∞',
            note: `put ${x} = −${t}, ${t} → +∞. Always ${SQX} = |${x}| = −${x} for ${x} < 0. Pair to memorise: ${SQXB} − ${x} → ${fr(b, '2')} as ${x} → +∞; ${SQXB} + ${x} → −${fr(b, '2')} as ${x} → −∞.`,
          },
          {
            f: '0 × ∞',
            note: `rewrite as ${fr(f, fr('1', g))} (gives ${ZZ}) or ${fr(g, fr('1', f))} (gives ${II}); pick the easier one, then resolve.`,
          },
        ],
        aids: [
          '“If it isn’t at zero, move zero to it.” (the shift substitution)',
          '“Check the form, then differentiate, separately.” (L’Hopital discipline)',
          '“Expand as deep as the denominator is low.” (the order rule)',
          `“Root of a square wears a modulus.” (${SQX} = |${x}|)`,
          '“Zero times infinity is a question, not zero.”',
        ],
      },
    ],
  },
];
