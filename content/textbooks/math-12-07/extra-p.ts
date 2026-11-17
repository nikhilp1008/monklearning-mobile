import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional topic P, pp. 522–529 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 522, below the rule that closes
 * Addendum F's answers, and ends on p. 529; Chapter 8 starts on p. 530. The
 * opening sentence is the "Introduction"; the numbered headings "P.1 The
 * distribution — where the marks actually sit" … "P.5 Where to focus" are the
 * parts, without their numbers, em dash → colon. The distribution's bullet list is
 * one paragraph of "•" items; each run of papers becomes a count ("Papers cited: 10
 * (JEE 5, Main 4, Adv 1)"; a paper before 2013 is "JEE"), and every other paper
 * name loses its year, date and shift. Each archetype 1–7 is a worked example
 * tagged with its heading: its "Looks like / Cracks it" text and its worked
 * example's data are the question, the working the steps; only Archetype 2 prints
 * an "Answer:" line (its closing remark is the last step), so the other answer
 * boxes are empty; Archetype 7's second worked example stays in its steps. The
 * traps are one mistakes block; the graded practice set Q1–Q12 is one practice
 * block, the working after each question its answer. Every share or frequency of
 * past questions carries the estimate label. These pages print no drawing and no
 * formula card. ∫ upright with its limits as a sub and sup (a slash kept inside a
 * raised limit, π/2), d upright and glued to its variable, + C italic, e upright.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const f = I('f');
const g = I('g');
const h = I('h');
const n = I('n');
const t = I('t');
const u = I('u');
const x = I('x');
const C = I('C');
const F = I('F');
const H = I('H');
const T = I('T');
const II = I('I');
const phi = I('φ');
const psi = I('ψ');

/** Differentials: an upright d glued to the integrand. */
const DX = `${NB}d${x}`;
const DT = `${NB}d${t}`;
const DU = `${NB}d${u}`;
const PLUS_C = ` + ${C}`;
/** ∫ with its limits, the lower as a sub and the upper as a sup. */
const INT = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;
/** The evaluation bar [F(x)] from lo to hi. */
const EV = (s: string, lo: string, hi: string) => `[${s}]<sub>${lo}</sub><sup>${hi}</sup>`;

const of = (fn: string, s: string) => `${fn}(${s})`;
const abs = (s: string) => `|${WJ}${s}|`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const pw = (s: string, e: string) => `${s}<sup>${e}</sup>`;
/** A trigonometric function of an argument, with an optional power: sin² x. */
const TR = (fn: string, arg: string = x, p = '') => `${fn}${p ? `<sup>${p}</sup>` : ''}${NB}${arg}`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** An interval or pair, its comma glued: [0, a]. */
const iv = (lo: string, hi: string, o = '[', cl = ']') => `${o}${lo},${NB}${hi}${cl}`;

const fx = of(f, x);
const gx = of(g, x);
const X2 = sq(x);
const SINX = TR('sin');
const COSX = TR('cos');
const TANX = TR('tan');
const SIN2X = TR('sin', x, '2');
const COS2X = TR('cos', x, '2');
const SEC2X = TR('sec', x, '2');
const SIN3X = TR('sin', x, '3');
const ABS_SINX = abs(SINX);
const EX = `e<sup>${x}</sup>`;
const LNX = `ln${NB}${x}`;
const COS_LN = `cos(${LNX})`;
const SIN_LN = `sin(${LNX})`;
const TAN_INV = `tan<sup>−1</sup>${NB}${x}`;
const HALF = fr('1', '2');
const PI2 = fr('π', '2');
const PI4 = fr('π', '4');
const TH2 = fr('3', '2');
/** The 0 to a limits of Archetype 1. */
const INT0A = INT('0', a);
const INT0PI = INT('0', 'π');
const INT0PI2 = INT('0', 'π/2');
const INT0PI4 = INT('0', 'π/4');
const INTSYM = INT('−π/2', 'π/2');
const fax = of(f, `${a} − ${x}`);
const gax = of(g, `${a} − ${x}`);
const SQRT_SIN = `√(${SINX})`;
const SQRT_COS = `√(${COSX})`;
const R2 = '√2';
/** x² + x⁻¹ of Archetype 7 (i). */
const XXINV = `${X2} + ${pw(x, '−1')}`;
const Fp = (s: string) => `${F}′(${s})`;
const Fpp = (s: string) => `${F}″(${s})`;
const GIF = (s: string) => `[${s}]`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 522–529 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section summarises the patterns that recur in JEE Main and Advanced questions on integrals, with the standard method for each and a graded practice set.',
      },

      { t: 'part', title: 'The distribution: where the marks actually sit' },
      {
        t: 'p',
        html: `Across past JEE papers, the weight is overwhelmingly on the <b>definite</b> side of the chapter ${ESTIMATE}:`,
      },
      {
        t: 'p',
        html: `• <b>Properties of definite integrals (king / parity / periodicity): the single biggest cluster of definite-integral questions</b> ${ESTIMATE}. The signature move “write ${II}, transform the variable, add the two copies, solve 2${II} = easy” appears in papers spanning four decades. Papers cited: 16 (JEE 9, Main 4, exam not named 3). The specific template “${fx} = ${fax} with ${gx}${NB}+${NB}${gax} constant” was examined twice nearly identically: JEE (as a proof, sum = 2) and Main (sum = 4).<br>• <b>Even/odd deletion on symmetric limits</b> recurs constantly ${ESTIMATE}: five JEE papers (one with an explicit even/odd split in the solution) and a Main paper (where ${GIF(`−${x}`)} = −1 − ${GIF(x)} is used to prove oddness), among others. Papers cited: 6 (JEE 5, Main 1).<br>• <b>Periodicity, especially with a modulus:</b> JEE (period-independence proof), JEE (${INT(a, `${a}+3${T}`)} = 3${II}), JEE (Assertion–Reason on the antiderivative of ${SIN2X}), JEE (period-2 function on ${iv('−10', '10')}), Advanced (periodicity of sin<sup>6</sup> + cos<sup>6</sup>). Papers cited: 5 (JEE 4, Adv 1).<br>• <b>Greatest-integer / fractional-part integrands</b> are a reliable fixture ${ESTIMATE}. Papers cited: 10 (JEE 5, Main 4, Adv 1).<br>• <b>Differentiation of variable-limit integrals (Leibniz/chain-rule FTC)</b> appears often ${ESTIMATE}. Papers cited: 11 (JEE 5, Main 2, Adv${NB}4). Recent Main loves dressing this up with a local-minima classification (Main: answer “point of local minima”).<br>• <b>Indefinite integrals proper</b> cluster in Main sessions and are almost always recognition problems, not grinding ${ESTIMATE}: the ${fr(`${f}′`, f)} logarithmic pattern (Main; several other Main sessions), “power of a function times its derivative” (Main, three papers), parts with a cycling integral (Main: ∫${COS_LN}${DX}), and substitution-into-rational-form (three Main Online papers).<br>• <b>Limit of a sum</b> is now rare ${ESTIMATE}: it lives mainly in older JEE papers (one converted a series into log${NB}6 this way) and occasionally Advanced. Know the mechanics; do not over-invest.<br>• <b>Format shift worth noting:</b> recent Advanced and Main numericals in this chapter land on small clean numbers: the answers include 0, 1, 2, 4, 7, 9, 21, 0.50, 1.50. If your answer is ugly, you have almost certainly missed a symmetry.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'Archetype 1: The king property: “add the flip”',
        q: `<b>Looks like:</b> any ${INT(a, b)}${NB}${f} where ${f} contains trigonometric functions on ${iv('0', PI2)} or ${iv('0', 'π')}, or an abstract ${fx} = ${of(f, `${a} + ${b} − ${x}`)}; denominators of the form ${fx} + ${f}(flip) are the tell.<br><b>Cracks it:</b> substitute ${x} ↦ ${a} + ${b} − ${x}, add the two copies of ${II}, solve 2${II} = (easy), then divide by two.<br><br><b>Worked example</b> (pattern of JEE Main): ${f},${NB}${g} continuous on ${iv('0', a)} with ${fx} = ${fax} and ${gx} + ${gax} = 4. Show<br>${INT0A}${NB}${fx}${gx}${DX} = 2${INT0A}${NB}${fx}${DX}.`,
        steps: [
          `${II} = ${INT0A}${NB}${fx}${gx}${DX}`,
          `Apply ${x} ↦ ${a} − ${x} (limits unchanged):<br>${II} = ${INT0A}${NB}${fax}${NB}${gax}${DX}<br>= ${INT0A}${NB}${fx}(4 − ${gx})${DX}`,
          `Add the two copies:<br>2${II} = ${INT0A}${NB}${fx}[${gx} + 4 − ${gx}]${DX}<br>= 4${INT0A}${NB}${fx}${DX}`,
          `so ${II} = 2${INT0A}${NB}${fx}${DX}. Notice no antiderivative was ever needed.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 2: Parity deletion on symmetric limits',
        q: `<b>Looks like:</b> limits of the form ${iv(`−${a}`, a)} with a sum of terms of mixed parity.<br><b>Cracks it:</b> classify each term before integrating anything: even×even and odd×odd are even; even×odd (mixed parity) is odd and integrates to 0 on ${iv(`−${a}`, a)}.<br><br><b>Worked example:</b> evaluate<br>${INTSYM}(${x}${NB}${SINX}${NB}+${NB}${COS2X})${DX}.`,
        steps: [
          `${x}${NB}${SINX} is odd×odd = even; ${COS2X} is even. Nothing cancels, so both double:<br>${INTSYM}${NB}${x}${NB}${SINX}${DX} = 2${INT0PI2}${NB}${x}${NB}${SINX}${DX}<br>= 2${EV(`−${x}${NB}${COSX} + ${SINX}`, '0', 'π/2')} = 2<br>${INTSYM}${NB}${COS2X}${DX} = 2${INT0PI2}${NB}${fr(`1 + ${TR('cos', `2${x}`)}`, '2')}${DX} = ${PI2}`,
          `Contrast with the destructive version examined in a JEE paper and a Main paper: when every term is odd (e.g. an ${pw(x, '3')} or a lone ${SINX} against symmetric limits), the whole integral is 0 and the MCQ distractors are the values obtained by grinding out antiderivatives.`,
        ],
        ans: `2 + ${PI2}.`,
      },
      {
        t: 'ex',
        tag: 'Archetype 3: Periodic collapse (mind the modulus)',
        q: `<b>Looks like:</b> ${INT('0', `${n}${T}`)} or ${INT('0', 'large')} of ${ABS_SINX}, ${abs(COSX)}, sin<sup>6</sup> + cos<sup>6</sup>, etc.<br><b>Cracks it:</b> find the true period of the integrand (the modulus halves the period of sine/cosine to π; ${TR('sin', x, '6')} + ${TR('cos', x, '6')} = 1 − ${fr('3', '4')}${NB}${TR('sin', `2${x}`, '2')} has period ${PI2}), then use ${INT('0', `${n}${T}`)} = ${n}${INT('0', T)}.<br><br><b>Worked example:</b> ${INT('0', '3π/2')}${NB}${ABS_SINX}${DX}.`,
        steps: [
          `Since ${abs(`sin(${x} + π)`)} = ${ABS_SINX}, the period is π; the interval holds 1.5 periods, and ${INT0PI}${NB}${ABS_SINX}${DX} = 2. Hence the value is ${TH2}${NB}⋅${NB}2 = 3.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 4: Greatest-integer / piecewise splitting',
        q: `<b>Looks like:</b> ∫[⋅] or ∫{${x}} over a modest interval; also modulus integrals.<br><b>Cracks it:</b> locate every breakpoint where the inside of the GIF crosses an integer (or the modulus changes sign), split with additivity, integrate the clean pieces.<br><br><b>Worked example:</b> ${INT('0', '3/2')}${GIF(X2)}${DX}.`,
        steps: [
          `On ${iv('0', TH2)} we have ${X2} ≤ ${fr('9', '4')} < 3, so ${X2} reaches only the integers 1 and 2: at ${rel(x, '=', '1')} and ${x} = √2 (the value 3 would need ${x} = √3 ≈ 1.73 > ${TH2}, outside the interval). So ${GIF(X2)} = 0 on ${iv('0', '1', '[', ')')}, 1 on ${iv('1', R2, '[', ')')}, and 2 on ${iv(R2, TH2)}:`,
          `${INT('0', '3/2')}${GIF(X2)}${DX} = 0 ⋅ 1 + 1(√2 − 1) + 2(${TH2} − √2)<br>= 2 − √2`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 5: Variable limits: differentiate, don’t integrate',
        q: `<b>Looks like:</b> ${of(F, x)} = ${INT(of(phi, x), of(psi, x))}(⋯)${DT} followed by “classify the point”, “find ${of(g, '2')}”, “show${NB}${f}′…”.<br><b>Cracks it:</b> Fundamental Theorem with the chain rule:<br>${fr('d', `d${x}`)}${NB}${INT(of(phi, x), of(psi, x))}${NB}${of(h, t)}${DT} = ${of(h, psi)}${psi}′ − ${of(h, phi)}${phi}′.<br>Never attempt the integral itself.<br><br><b>Worked example</b> (pattern of JEE Main): let ${of(F, x)} = ${INT('1', x)}${NB}${sq(t)}${of(g, t)}${DT} where ${of(g, t)} = ${INT('1', t)}${NB}${of(f, u)}${DU} and ${f} is continuous with ${of(f, '1')} = 3. Classify ${rel(x, '=', '1')} for ${F}.`,
        steps: [
          `By the FTC, ${Fp(x)} = ${X2}${gx}, so ${Fp('1')} = ${of(g, '1')} = 0: a critical point. Differentiate again:<br>${Fpp(x)} = 2${x}${gx} + ${X2}${g}′(${x})<br>= 2${x}${gx} + ${X2}${fx}`,
          `so ${Fpp('1')} = 0 + ${of(f, '1')} = 3 > 0. Hence ${rel(x, '=', '1')} is a point of strict local minimum.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 6: Definite substitution: change the limits, exploit algebra',
        q: `<b>Looks like:</b> a trigonometric integrand on ${iv('0', PI4)} or ${iv('0', PI2)} that factors as “(function of ${TANX})× ${SEC2X}”, or any integrand where the numerator is built from the derivative of an inner function.<br><b>Cracks it:</b> convert limits immediately (${x} = ${a} ↦ ${u} = ${of(g, a)}) and finish in ${u}; look first for factorisations that produce ${SEC2X}${DX}.<br><br><b>Worked example</b> (Advanced): evaluate<br>${II} = ${INT0PI4}(7${NB}${TR('tan', x, '8')} + 7${NB}${TR('tan', x, '6')} −${NB}3${NB}${TR('tan', x, '4')}${NB}−${NB}3${NB}${TR('tan', x, '2')})${DX}`,
        steps: [
          `Factor out ${SEC2X}: the integrand is (7${NB}${TR('tan', x, '6')} − 3${NB}${TR('tan', x, '2')})${NB}${SEC2X}. To check, expand<br>(7${NB}${TR('tan', x, '6')} − 3${NB}${TR('tan', x, '2')})(1 + ${TR('tan', x, '2')})<br>= 7${NB}${TR('tan', x, '8')} + 7${NB}${TR('tan', x, '6')} −${NB}3${NB}${TR('tan', x, '4')} − 3${NB}${TR('tan', x, '2')}.`,
          `With ${u} = ${TANX}, limits 0 ↦ 0, ${PI4} ↦ 1:<br>${II} = ${INT('0', '1')}(7${pw(u, '6')} − 3${sq(u)})${DU} = 1 − 1 = 0`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype 7: Indefinite integrals as recognition tests',
        q: `<b>Looks like:</b> a strange-looking quotient, or a lone transcendental, or ${EX} times a sum.<br><b>Cracks them, in order of frequency in past JEE papers</b> ${ESTIMATE}<b>:</b><br>1. <b>Numerator is (a multiple of) the derivative of the denominator</b> ⇒ ln${NB}|${WJ}⋅${NB}| instantly.<br>2. <b>Power of a function times its derivative</b> ⇒ power rule in the inner function.<br>3. <b>Lone</b> ${LNX}<b>,</b> ${TAN_INV} ⇒ pair with an invisible “×1” and use parts.<br>4. <b>Integral reappears after two rounds of parts</b> ⇒ solve for ${II} algebraically.<br><br><b>Worked examples</b> (patterns of two JEE Main papers):<br>(i) JEE Main: ∫${fr(`2${x} − ${pw(x, '−2')}`, XXINV)}${DX}.`,
        steps: [
          `The numerator is exactly the derivative of ${XXINV}, so with ${u} = ${XXINV}:<br>${II} = ∫${fr(`d${u}`, u)} = ln${abs(XXINV)}${PLUS_C}`,
          `(ii) JEE Main: ${II} = ∫${COS_LN}${DX}. Parts with ${u} = ${COS_LN}, then parts again on the ${SIN_LN} remainder:<br>${II} = ${x}${NB}${COS_LN} + ∫${SIN_LN}${DX}<br>= ${x}${NB}${COS_LN} + ${x}${NB}${SIN_LN} − ${II}`,
          `so 2${II} = ${x}(${COS_LN} + ${SIN_LN}) and<br>${II} = ${fr(x, '2')}(${COS_LN} + ${SIN_LN})${PLUS_C}`,
          `(Differentiate to confirm: the ${fr(x, '2')} and the inner derivatives conspire to return ${COS_LN}.)`,
        ],
        ans: '',
      },

      { t: 'part', title: 'The traps: what the distractors are built to punish' },
      {
        t: 'mistakes',
        items: [
          `<b>Reporting 2${II} as ${II}.</b> After “add the flip”, forgetting the final halving doubles every king-property answer. Several option sets (JEE, Main) contain exactly the doubled value as a distractor.`,
          `<b>Parity on non-symmetric limits.</b> Oddness kills an integral only on ${iv(`−${a}`, a)}. On ${iv('0', '2')} or ${iv('1', '3')} it tells you nothing; past JEE papers contain GIF and modulus questions specifically designed so the reflex cancellation gives a wrong sign or a wrong zero.`,
          `<b>Keeping old limits after substitution.</b> Switching to ${u} while leaving ${x}-limits in place (or changing limits and back-substituting) corrupts the bounds. This is the most common error class in the substitution-based definite questions throughout past papers ${ESTIMATE}.`,
          `<b>Dropping the modulus / wrong period.</b> Integrating ${SINX} where ${ABS_SINX} is written lets humps cancel; using period 2π for ${ABS_SINX} miscounts blocks. The JEE and Main GIF items and the JEE Assertion–Reason both hinge on this family of errors. Related subtlety: <b>an antiderivative of a periodic function need not be periodic</b>:<br>${of(F, x)} = ${fr(x, '2')} − ${fr(TR('sin', `2${x}`), '4')}${PLUS_C}<br>for ${SIN2X} satisfies ${of(F, `${x} + π`)} = ${of(F, x)} + ${PI2}, which is why Statement-1 of the JEE Assertion–Reason item is false while Statement-2 is true.`,
          `<b>Power rule on functions.</b> ∫${TR('tan', x, '4')}${DX} ≠ ${fr(TR('tan', x, '5'), '5')} unless a ${SEC2X} is present (Main made students find the pairing ${II}<sub>4</sub>${NB}+${NB}${II}<sub>6</sub>${NB}=${NB}∫${TR('tan', x, '4')}${NB}${SEC2X}${DX} = ${fr(TR('tan', x, '5'), '5')}). Same disease: treating ${SIN2X} like ${X2}.`,
          '<b>Improper fractions without division</b>, and <b>missing the repeated-factor term</b> in partial fractions: punished whenever a rational integrand appears (three Main Online sessions).',
          `<b>Principal branches of inverse trigonometric functions under substitution.</b> An Advanced paper states explicitly that ${TAN_INV} takes only principal values: a substitution that ignores branch cuts silently changes the integrand.`,
          `<b>Blind computation on inequality/bounding items.</b> Three Advanced papers ask you to bound an integral (squeeze estimates, monotonicity of ${fr(`${f}′`, f)}-type ratios), not evaluate it. Grinding for an antiderivative is the trap.`,
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate ∫${fr(`2${x} − 1`, `${X2} − ${x} + 3`)}${DX}.`,
            a: `The numerator is the derivative of ${X2} − ${x} + 3:<br>${II} = ln(${X2} − ${x} + 3)${PLUS_C}`,
          },
          {
            q: `Evaluate ${INT0PI2}${NB}${COSX}${NB}e<sup>sin${NB}${x}</sup>${DX}.`,
            a: `With ${u} = ${SINX}, limits 0 ↦ 0, ${PI2} ↦ 1:<br>${II} = ${INT('0', '1')}${NB}e<sup>${u}</sup>${DU} = e − 1`,
          },
          {
            q: `Evaluate ${INT('−1', '1')}(${pw(x, '3')} + ${X2} + ${TAN_INV})${DX}.`,
            a: `Symmetric limits: ${pw(x, '3')} and ${TAN_INV} are odd ⇒ contribute 0. Only ${X2} survives:<br>${II} = 2${INT('0', '1')}${NB}${X2}${DX} = ${fr('2', '3')}`,
          },
          {
            q: `Evaluate ${INT('0', '3/2')}${GIF(x)}${DX} where [⋅] is the greatest-integer function.`,
            a: `Only the breakpoint ${rel(x, '=', '1')} lies inside ${iv('0', TH2)} (the next one, ${rel(x, '=', '2')}, is outside):<br>${II} = ${INT('0', '1')}${NB}0${DX} + ${INT('1', '3/2')}${NB}1${DX} = 0 + ${HALF} = ${HALF}`,
          },
          {
            q: `Evaluate ${II} = ∫${EX}${NB}${SINX}${DX}.`,
            a: `Two rounds of parts bring ${II} back:<br>${II} = ${EX}${NB}${SINX} − ∫${EX}${NB}${COSX}${DX}<br>= ${EX}${NB}${SINX} − ${EX}${NB}${COSX} − ${II}<br>so 2${II} = ${EX}(${SINX} − ${COSX}) and<br>${II} = ${fr(EX, '2')}(${SINX} − ${COSX})${PLUS_C}`,
          },
          {
            q: `Evaluate ${INT('0', '3π/2')}${NB}${ABS_SINX}${DX}.`,
            a: `${ABS_SINX} has period π and ${INT0PI}${NB}${ABS_SINX}${DX} = 2. The interval holds ${TH2} periods:<br>${II} = ${TH2} ⋅ 2 = 3`,
          },
          {
            q: `Evaluate ${INT0PI2}${NB}${fr(SQRT_SIN, `${SQRT_SIN} + ${SQRT_COS}`)}${DX}.`,
            a: `King: replace ${x} ↦ ${PI2} − ${x}; the integrand becomes its complement. Adding:<br>2${II} = ${INT0PI2}${NB}${fr(`${SQRT_SIN} + ${SQRT_COS}`, `${SQRT_SIN} + ${SQRT_COS}`)}${DX}<br>= ${PI2}<br>so ${II} = ${PI4}. (No antiderivative is needed: symmetry is the shortest route.)`,
          },
          {
            q: `Evaluate ${INT0PI2}${NB}${fr(`d${x}`, `1 + (${TANX})<sup>√2</sup>`)}.`,
            a: `Same mechanism as Q7, and this is why the mechanism matters: the flip sends tan ↦ cot, and<br>${fr('1', `1 + ${TR('cot', x, '√2')}`)} + ${fr('1', `1 + ${TR('tan', x, '√2')}`)} = 1<br>identically. Hence 2${II} = ${PI2} and ${II} = ${PI4}, for any positive exponent.`,
          },
          {
            q: `Evaluate ${INT0PI4}${NB}${TR('tan', x, '3')}${DX}.`,
            a: `Peel one tan and use sec<sup>2</sup> = 1 + tan<sup>2</sup>:<br>${II} = ${INT0PI4}${NB}${TANX}${NB}(${SEC2X} − 1)${DX}<br>= ${EV(fr(TR('tan', x, '2'), '2'), '0', 'π/4')} + ${EV(`ln${NB}${COSX}`, '0', 'π/4')}<br>= ${HALF} − ${HALF}${NB}ln${NB}2`,
          },
          {
            q: `Let ${of(H, x)} = ${INT(x, X2)}${NB}sin(${sq(t)})${DT}. Find ${H}′(${x}).`,
            a: `Fundamental Theorem with moving both limits (sin${NB}${sq(t)} has no elementary antiderivative: that is the point):<br>${H}′(${x}) = 2${x}${NB}sin(${pw(x, '4')}) − sin(${X2})`,
          },
          {
            q: `Evaluate ${II} = ${INT0PI}${NB}${x}${NB}${SIN3X}${DX}.`,
            a: `King peels off the lone ${x}: replacing ${x} ↦ π − ${x} leaves sin<sup>3</sup> intact,<br>${II} = ${INT0PI}(π − ${x})${NB}${SIN3X}${DX}<br>= π${INT0PI}${NB}${SIN3X}${DX} − ${II}<br>so 2${II} = π${INT0PI}${NB}${SIN3X}${DX}.<br>By symmetry about ${PI2},<br>${INT0PI}${NB}${SIN3X}${DX} = 2${NB}⋅${NB}${fr('2', '3')} = ${fr('4', '3')}. Therefore<br>${II} = ${PI2} ⋅ ${fr('4', '3')} = ${fr('2π', '3')}`,
          },
          {
            q: `Evaluate ${II} = ${INT0PI}${NB}${fr(`${x}${NB}${SINX}`, `1 + ${COS2X}`)}${DX}.`,
            a: `King: the flip turns ${x} into π − ${x} and leaves the rest untouched, so<br>2${II} = π${INT0PI}${NB}${fr(SINX, `1 + ${COS2X}`)}${DX}<br>Substitute ${u} = ${COSX}, d${u} = −${SINX}${DX}; the limits sweep 1 ↦ −1:<br>${INT0PI}${NB}${fr(SINX, `1 + ${COS2X}`)}${DX} = ${INT('−1', '1')}${NB}${fr(`d${u}`, `1 + ${sq(u)}`)}<br>= 2${NB}arctan(1) = ${PI2}<br>Hence 2${II} = π ⋅ ${PI2} and<br>${II} = ${fr('π<sup>2</sup>', '4')}`,
          },
        ],
      },

      { t: 'part', title: 'Where to focus' },
      {
        t: 'p',
        html: `The additional topics above cover the topics that the main chapter only touches lightly and that recur most in JEE Main and Advanced ${ESTIMATE}: <b>differentiation of integrals with variable or functionally defined limits</b> (the Leibniz/chain-rule machinery behind local-minima classifications and hidden-equation problems), <b>greatest-integer and fractional-part integrands</b>, <b>reduction formulas</b> and the “prove the identity, then use it” long-answer style of the older JEE papers, and <b>the limit of a sum read as an integral</b>, which appears rarely but does appear at Advanced level.`,
      },
    ],
  },
];
