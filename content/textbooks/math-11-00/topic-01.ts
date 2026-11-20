import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 0, Topic 01, pp. 10–22 of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word: the chapter's opening paragraph (the
 * part "Introduction") and its Sections 1 to 11, each a part named from the
 * book's own heading. The chapter has no subtopics, so all of it is one Topic.
 * Section 11 runs on to the top of p. 22; Addendum P begins on p. 23.
 * No figures: the pages hold no drawing (only fraction bars, radical bars, table
 * rules and the section rules). Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner: no line break at this point, and no space drawn. */
const WJ = '\u2060';
/** The combining overline: one after every character under a bar (bar notation). */
const BAR = '̅';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const i = (s: string) => `<i>${s}</i>`;
const sup = (s: string) => `<sup>${s}</sup>`;
const a = i('a');
const b = i('b');
const c = i('c');
const e = i('e');
const k = i('k');
const m = i('m');
const n = i('n');
const p = i('p');
const q = i('q');
const x = i('x');
const y = i('y');
const N = i('N');
const P = i('P');
const Q = i('Q');
const f = (s: string) => `${i('f')}(${s})`;
const ab = i('ab');
const mn = i('mn');
const pw = (base: string, ex: string) => `${base}<sup>${ex}</sup>`;
const x2 = pw(x, '2');
/** log with its base, then (no-break space) its argument; a bracketed argument follows directly. */
const lg = (base: string, arg = '') => `log<sub>${base}</sub>${arg === '' ? '' : arg.startsWith('(') ? arg : NB + arg}`;
const ln = (arg: string) => `ln${NB}${arg}`;
/** A root with its index raised, the radicand bracketed when it is more than one character. */
const rt = (index: string, rad: string) => `<sup>${index}</sup>√${rad}`;
/** Display lines: a single break, a blank line between two lines that both hold a stacked fraction. */
const disp = (...lines: string[]) =>
  lines.map((l, j) => (j === 0 ? l : (lines[j - 1].includes('<frac>') && l.includes('<frac>') ? '<br><br>' : '<br>') + l)).join('');

/** Display lines inside a worked-example card: single breaks (the card's own leading already spaces fraction rows). */
const tight = (...lines: string[]) => lines.join('<br>');

const LA = (arg = '') => lg(a, arg);
const LB = (arg = '') => lg(b, arg);
const LC = (arg = '') => lg(c, arg);
const L10 = (arg = '') => lg('10', arg);
const L2 = (arg = '') => lg('2', arg);
const L3 = (arg = '') => lg('3', arg);
/** a with a raised log: a^(log_b c) */
const plog = (base: string, lbase: string, arg: string) => `${base}<sup>log<sub>${lbase}</sub> ${arg}</sup>`;
const A_LOGB_C = plog(a, b, c);
const C_LOGB_A = plog(c, b, a);
/** k + 1 under a bar. */
const KBAR = `${k}${BAR}+${BAR}1${BAR}`;

const PART_EXP = '“Indices and the laws of exponents”';
const PART_DEF = '“Logarithms: definition and domain”';
const PART_LAWS = '“The laws of logarithms”';
const PART_CHANGE = '“Change of base and its consequences”';
const PART_COMMON = '“Common logarithms: characteristic and mantissa”';
const PART_EQ = '“Logarithmic equations”';
const PART_INEQ = '“Logarithmic inequalities (the base matters)”';
const PART_WORKED = '“Worked examples”';

export const TOPICS: Topic[] = [
  {
    n: '01',
    title: 'Basic Mathematics: Indices, Surds and Logarithms',
    kalam: 'If any of this feels shaky, this chapter is the toolkit built to fix it, once, before you need it fifty pages from now.',
    blocks: [
      // ──────────────── Introduction · p. 10 ────────────────
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Every chapter that follows this one assumes you can already do three things without thinking: manipulate exponents, simplify surds, and read a logarithm the instant you see one. None of these is a Class 11 topic in its own right (the NCERT syllabus treats indices and surds as revision from earlier classes and never gives logarithms a chapter of their own), yet the rest of this book leans on all three constantly. Sequences and series turn geometric-progression problems into logarithmic equations the moment a question asks “after how many terms”. Domain-of-a-function problems routinely hide behind log(·) and demand that you know, instantly and without hesitation, what makes the expression inside a logarithm legal. Limits and derivatives use log and ln as some of their most important building blocks, and logarithmic differentiation is a named technique of calculus (Chapter 12 mentions it; it is taught in Class 12). If any of this feels shaky, this chapter is the toolkit built to fix it, once, before you need it fifty pages from now. Treat it as a reference you return to, not a chapter you read and file away.`,
      },

      // ──────────────── Section 1 · pp. 10–11 ────────────────
      { t: 'part', title: 'Indices and the laws of exponents' },
      {
        t: 'p',
        html: `An index (or exponent) records repeated multiplication: ${pw(a, n)} = ${a} · ${a} ⋯ ${a} (${n} factors) for a positive integer ${n}. Everything else (negative exponents, fractional exponents, irrational exponents) is a definition, chosen so that the same algebraic laws keep working. That is worth sitting with for a moment: ${pw(a, '−3')} does not mean “multiply ${a} by itself −3 times”, which is meaningless. It means “whatever number makes ${pw(a, '−3')} · ${pw(a, '3')} = ${pw(a, '0')} = 1 true”, which forces ${pw(a, '−3')} = ${fr('1', pw(a, '3'))}. The laws come first; the definitions are built to obey them.`,
      },
      {
        t: 'p',
        html: `<b>The laws.</b> For ${a}, ${b}${NB}>${NB}0 and real exponents ${m}, ${n} (the restriction to positive bases is explained below):<br><br>${disp(
          `${pw(a, m)} · ${pw(a, n)} = ${pw(a, `${m}+${n}`)},`,
          `${fr(pw(a, m), pw(a, n))} = ${pw(a, `${m}−${n}`)},`,
          `(${pw(a, m)})<sup>${n}</sup> = ${pw(a, `${i('mn')}`)},`,
          `(${ab})<sup>${n}</sup> = ${pw(a, n)}${pw(b, n)},`,
          `(${fr(a, b)})<sup>${n}</sup> = ${fr(pw(a, n), pw(b, n))} (${b}${NB}≠${NB}0),`,
          `${pw(a, '0')} = 1 (${a}${NB}≠${NB}0),`,
          `${pw(a, `−${n}`)} = ${fr('1', pw(a, n))}.`,
        )}`,
      },
      {
        t: 'p',
        html: `Rational exponents extend the same idea to roots: ${pw(a, `1/${n}`)} = ${rt(n, a)} for ${a}${NB}>${NB}0, and more generally ${pw(a, `${p}/${q}`)} = ${rt(q, `(${pw(a, p)})`)} = (${rt(q, a)})<sup>${p}</sup>.`,
      },
      {
        t: 'p',
        html: `<b>Why the base is restricted to positive numbers.</b> Everything above is airtight when ${a}${NB}>${NB}0. The moment ${a}${NB}<${NB}0, rational exponents stop being unambiguous, and this is a genuine trap, not a technicality. Consider (−8)<sup>2/6</sup>. Written as (${rt('6', '(−8)')})<sup>2</sup> it involves a sixth root of a negative number, which has no real value. But ${fr('2', '6')} reduces to ${fr('1', '3')}, and (−8)<sup>1/3</sup> = −2 is perfectly real. Worse, if you instead compute ((−8)<sup>2</sup>)<sup>1/6</sup> = 64<sup>1/6</sup> = 2, you get a different real answer with the opposite sign. Three routes to “the same” exponent give no answer, one answer, and another answer. The resolution is not a trick: it is the discipline of restricting the law ${pw(a, `${p}/${q}`)} = (${rt(q, a)})<sup>${p}</sup> to ${a}${NB}>${NB}0, and handling negative bases with integer exponents or explicit odd roots only, one at a time. For JEE purposes: whenever you manipulate an exponential expression algebraically (splitting, combining, or reducing exponents), assume the base is positive unless the exponent is a plain integer. This single habit prevents an entire category of sign errors.`,
      },
      {
        t: 'p',
        html: `A quick illustration of the laws in combined use: ${fr(`${pw(x, '2/3')} · ${pw(x, '1/2')}`, pw(x, '1/6'))} has exponent<br><br>${disp(
          `${fr('2', '3')} + ${fr('1', '2')} − ${fr('1', '6')}`,
          `= ${fr('4', '6')} + ${fr('3', '6')} − ${fr('1', '6')}`,
          `= ${fr('6', '6')} = 1,`,
        )}<br><br>so the whole expression simplifies to ${x}. This kind of collapsing is exactly what indices are for: trade a cluttered expression for a clean exponent arithmetic problem.`,
      },
      {
        t: 'p',
        html: `A second illustration, purely numerical, shows negative and fractional exponents working together: evaluate (${fr('27', '8')})<sup>−2/3</sup>. Flip the fraction to clear the negative sign, then take the cube root before squaring (smaller numbers are easier to square):<br><br>${disp(
          `(${fr('27', '8')})<sup>−2/3</sup>`,
          `= (${fr('8', '27')})<sup>2/3</sup>`,
          `= (${rt('3', `(${fr('8', '27')})`)})<sup>2</sup>`,
          `= (${fr('2', '3')})<sup>2</sup>`,
          `= ${fr('4', '9')}.`,
        )}`,
      },
      {
        t: 'p',
        html: `Taking the root first and squaring second, rather than squaring ${fr('27', '8')} first and then trying to cube-root a much larger fraction, is the standard efficiency habit for this kind of expression, and it matters more as the numbers grow.`,
      },
      {
        t: 'p',
        html: `Indices also underlie scientific notation, which JEE and NEET both use freely in numerical answers: a number is written as ${m} × 10<sup>${n}</sup> with 1${NB}≤${NB}${m}${NB}<${NB}10, and comparing two such numbers is just comparing the exponents ${n} first (the larger exponent is the larger number), and the parts ${m} only when the exponents are equal. This is a preview of exactly the characteristic/mantissa idea that the part ${PART_COMMON} develops formally for logarithms: the two conventions are close cousins.`,
      },

      // ──────────────── Section 2 · pp. 11–12 ────────────────
      { t: 'part', title: 'Surds and rationalisation' },
      {
        t: 'p',
        html: `A <b>surd</b> is an irrational root of a rational number: √2 and ${rt('3', '5')} are surds; √4 = 2 is not, because it simplifies to a rational number. An expression such as 2 + √3, a rational number plus a surd, is called a <b>binomial surd</b>. The <b>order</b> of a surd ${rt(n, a)} is ${n}; two surds are <b>like surds</b> if they have the same order and the same radicand after simplification (e.g. 3√2 and 7√2), and only like surds can be combined by addition or subtraction, exactly as with algebraic like terms.`,
      },
      {
        t: 'p',
        html: `<b>Laws for combining surds</b> (for ${a}, ${b}${NB}≥${NB}0):<br><br>${disp(
          `${rt(n, a)} · ${rt(n, b)} = ${rt(n, `(${ab})`)},`,
          `${fr(rt(n, a), rt(n, b))} = ${rt(n, `(${fr(a, b)})`)} (${b}${NB}≠${NB}0).`,
        )}`,
      },
      {
        t: 'p',
        html: `<b>Rationalisation</b> removes surds from a denominator, using the fact that multiplying a binomial surd by its conjugate clears the square root via the difference-of-squares identity (${x} − ${y})(${x} + ${y}) = ${pw(x, '2')} − ${pw(y, '2')}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Denominator', 'Multiply by', 'Result'],
        rows: [
          [`√${a}`, `√${a}`, a],
          [`√${a} + √${b}`, `√${a} − √${b}`, `${a} − ${b}`],
          [`√${a} − √${b}`, `√${a} + √${b}`, `${a} − ${b}`],
          [`${a} + √${b}`, `${a} − √${b}`, `${pw(a, '2')} − ${b}`],
        ],
      },
      {
        t: 'p',
        html: `For example, to rationalise ${fr('1', '√5 − √3')}, multiply top and bottom by the conjugate √5 + √3:<br><br>${disp(
          `${fr('1', '√5 − √3')} · ${fr('√5 + √3', '√5 + √3')}`,
          `= ${fr('√5 + √3', '5 − 3')}`,
          `= ${fr('√5 + √3', '2')}.`,
        )}`,
      },
      {
        t: 'p',
        html: `<b>Numerical check:</b> √5 ≈ 2.236, √3 ≈ 1.732, so the right-hand side is about ${fr('3.968', '2')} ≈ 1.984; directly, ${fr('1', '2.236 − 1.732')} = ${fr('1', '0.504')} ≈ 1.984. They agree.`,
      },
      {
        t: 'p',
        html: `<b>Combining like surds</b> is ordinary collection of terms once each surd is reduced to its simplest form. For instance, √50 + √18 − √8 looks like three unrelated terms until each is factored to pull out its largest perfect-square factor: √50 = √(25 · 2) = 5√2, √18 = √(9 · 2) = 3√2, and √8 = √(4 · 2) = 2√2. All three are now like surds, so 5√2 + 3√2 − 2√2 = 6√2. (Numerically, √50 + √18 − √8 ≈ 7.071 + 4.243 − 2.828 = 8.486, and 6√2 ≈ 8.485, matching up to rounding.) The lesson generalises: never add or compare surds before reducing each one to its simplest radicand.`,
      },
      {
        t: 'p',
        html: `When three surds sit in the denominator, rationalise in two passes: group two of them, rationalise once, then rationalise again against the remaining term. This two-step technique is often called <b>double rationalisation</b>. Its first step, multiplying by a conjugate, reappears in limit problems in Chapter 12, where an expression like √(${x} + 1) − √${x} in a denominator is cleared by one multiplication by √(${x} + 1) + √${x}. As a worked instance, rationalise ${fr('1', '1 + √2 + √3')}. Group the first two terms and treat √3 as the term to remove first, multiplying by the conjugate (1 + √2) − √3:<br><br>${disp(
          `${fr('1', '(1 + √2) + √3')} · ${fr('(1 + √2) − √3', '(1 + √2) − √3')}`,
          `= ${fr('1 + √2 − √3', `(1 + √2)${sup('2')} − 3`)}`,
          `= ${fr('1 + √2 − √3', '(3 + 2√2) − 3')}`,
          `= ${fr('1 + √2 − √3', '2√2')}.`,
        )}`,
      },
      {
        t: 'p',
        html: `A single surd, 2√2, now remains in the denominator, so rationalise once more by multiplying through by √2:<br><br>${disp(
          `${fr('(1 + √2 − √3)√2', '2√2 · √2')}`,
          `= ${fr('√2 + 2 − √6', '4')}.`,
        )}`,
      },
      {
        t: 'p',
        html: `<b>Numerical check:</b> the original expression is<br><br>${disp(
          `${fr('1', '1 + 1.41421 + 1.73205')} = ${fr('1', '4.14626')} ≈ 0.24118;`,
        )}<br><br>the final form is<br><br>${disp(`${fr('1.41421 + 2 − 2.44949', '4')} = ${fr('0.96472', '4')} ≈ 0.24118.`)}<br><br>They agree.`,
      },

      // ──────────────── Section 3 · p. 13 ────────────────
      { t: 'part', title: 'Logarithms: definition and domain' },
      {
        t: 'p',
        html: `A logarithm is nothing more than the question “to what power must I raise this base to get this number?”, packaged as a function. Formally,<br>${LA(x)} = ${y} ⟺ ${pw(a, y)} = ${x}.`,
      },
      {
        t: 'p',
        html: `Logarithms and exponentials are inverse operations: ${LA(x)} undoes ${pw(a, '(·)')}, and ${pw(a, '(·)')} undoes ${LA('(·)')}. Every property of logarithms you will ever use is a translation, into “logarithm language”, of a property of exponents from the part ${PART_EXP}.`,
      },
      {
        t: 'p',
        html: `<b>The domain restriction: the single most important fact in this chapter.</b> The equation ${LA(x)} = ${y} is only meaningful when<br>${a}${NB}>${NB}0,${NB}${NB}${NB}${a}${NB}≠${NB}1,${NB}${NB}${NB}${x}${NB}>${NB}0.`,
      },
      {
        t: 'p',
        html: `Each restriction has a concrete reason, and losing sight of any one of them is the number one source of lost marks on logarithm questions in JEE ${ESTIMATE}.<br>• ${a}${NB}>${NB}0: if ${a} were negative, ${pw(a, y)} is not a real number for most real ${y} (e.g. (−2)<sup>1/2</sup> is not real), so ${lg('−2', x)} cannot be defined as a real-valued function at all.<br>• ${a}${NB}≠${NB}1: if ${a}${NB}=${NB}1, then 1<sup>${y}</sup> = 1 for every ${y}. The equation 1<sup>${y}</sup> = ${x} has no solution unless ${x}${NB}=${NB}1, and if ${x}${NB}=${NB}1 it has infinitely many solutions. A relation that is either unsolvable or infinitely ambiguous cannot be called a function, so ${a}${NB}=${NB}1 is excluded outright.<br>• ${x}${NB}>${NB}0: since ${a}${NB}>${NB}0, every power ${pw(a, y)} is strictly positive, no matter what real number ${y} is. So ${pw(a, y)} = ${x} can never happen if ${x}${NB}≤${NB}0. Hence zero and the negative numbers have no logarithm to a positive base: there is no real number ${y} with ${pw(a, y)} equal to zero or to a negative number.`,
      },
      {
        t: 'p',
        html: `<b>The shape of ${y} = ${LA(x)}.</b> Because ${lg(a)} is the inverse of ${y} = ${pw(a, x)}, its graph is the mirror image of the exponential graph in the line ${y} = ${x}. Every such graph passes through (1, 0) (since ${LA('1')} = 0 for any valid base) and through (${a}, 1) (since ${LA(a)} = 1) and it hugs the ${y}-axis as ${x} → 0<sup>+</sup> without ever touching it, because ${x}${NB}=${NB}0 is outside the domain (it runs down towards −∞ when ${a}${NB}>${NB}1 and up towards +∞ when 0${NB}<${NB}${a}${NB}<${NB}1). For ${a}${NB}>${NB}1 the curve rises, steeply near ${x}${NB}=${NB}0 and ever more slowly as ${x} grows; for 0${NB}<${NB}${a}${NB}<${NB}1 it falls instead (steeply near ${x}${NB}=${NB}0, then ever more slowly), mirroring the decay of ${pw(a, x)} in that case. This rising-versus-falling behaviour is not a side note: it is the entire content of the rule for inequalities in the part ${PART_INEQ}, restated here in picture form before it is used algebraically.`,
      },
      {
        t: 'p',
        html: `<b>Practical consequence.</b> Before doing a single line of algebra on any expression containing ${LA('(stuff)')}, write down the condition stuff${NB}>${NB}0 (and, if the base itself involves the variable, also base${NB}>${NB}0 and base${NB}≠${NB}1). This domain statement is not optional bookkeeping: it is frequently what a JEE question’s mark depends on ${ESTIMATE}, and the parts ${PART_EQ} and ${PART_INEQ} will show exactly how algebraic manipulation can silently generate roots that violate it.`,
      },
      {
        t: 'p',
        html: `For instance, the domain of ${f(x)} = ${L10(`(${x2} − 5${x} + 6)`)} requires ${x2} − 5${x} + 6${NB}>${NB}0, i.e. (${x} − 2)(${x} − 3)${NB}>${NB}0, giving ${x}${NB}<${NB}2 or ${x}${NB}>${NB}3. The domain is not “all real ${x}” just because the formula ${x2} − 5${x} + 6 itself is defined everywhere: the logarithm imposes its own condition on top.`,
      },

      // ──────────────── Section 4 · p. 14 ────────────────
      { t: 'part', title: 'The laws of logarithms' },
      {
        t: 'p',
        html: `Because ${lg(a)} is the inverse of ${pw(a, '(·)')}, every law of exponents in the part ${PART_EXP} translates directly into a law of logarithms. For ${a}${NB}>${NB}0, ${a}${NB}≠${NB}1, and ${m}, ${n}${NB}>${NB}0:<br><br>${disp(
          `${LA(`(${mn})`)} = ${LA(m)} + ${LA(n)}${NB}${NB}${NB}(product law)`,
          `${LA(`(${fr(m, n)})`)} = ${LA(m)} − ${LA(n)}${NB}${NB}${NB}(quotient law)`,
          `${LA(`(${pw(m, p)})`)} = ${p} ${LA(m)}${NB}${NB}${NB}(power law)`,
        )}`,
      },
      {
        t: 'p',
        html: `<b>Where these come from.</b> Let ${LA(m)} = ${x} and ${LA(n)} = ${y}, so ${m} = ${pw(a, x)} and ${n} = ${pw(a, y)}. Then ${mn} = ${pw(a, x)} · ${pw(a, y)} = ${pw(a, `${x}+${y}`)}, and taking ${lg(a)} of both sides gives ${LA(`(${mn})`)} = ${x} + ${y} = ${LA(m)} + ${LA(n)}. The quotient and power laws follow the same way from ${fr(m, n)} = ${pw(a, `${x}−${y}`)} and ${pw(m, p)} = ${pw(a, `${p}${x}`)}. Nothing new is being assumed: the product law for logarithms is the addition law for exponents, seen from the other side.`,
      },
      {
        t: 'p',
        html: `<b>Three immediate identities</b>, all provable directly from the definition:<br>${plog(a, a, x)} = ${x} (${x}${NB}>${NB}0),<br>${LA('1')} = 0,<br>${LA(a)} = 1.`,
      },
      {
        t: 'p',
        html: `The first says applying ${lg(a)} and then ${pw(a, '(·)')} (or the reverse) returns the original number, the defining property of inverse functions. The second and third are the special cases ${x}${NB}=${NB}1 (since ${pw(a, '0')} = 1) and ${x}${NB}=${NB}${a} (since ${pw(a, '1')} = ${a}).`,
      },
      {
        t: 'p',
        html: `<b>Critical caveat: the classic JEE trap.</b> The power law ${LA(`(${pw(m, p)})`)} = ${p} ${LA(m)} was proved above <b>only for ${m}${NB}>${NB}0</b>. It is extremely tempting to apply it to ${LA(`(${x2})`)} and write 2 ${LA(x)}, but if ${x} is negative, ${LA(x)} is not even defined, while ${LA(`(${x2})`)} is perfectly fine, because ${x2}${NB}>${NB}0 whenever ${x}${NB}≠${NB}0. The correct statement, valid for all ${x}${NB}≠${NB}0, is<br>${LA(`(${x2})`)} = 2 ${LA(`|${x}|`)}.<br>The two expressions 2 ${LA(x)} and 2 ${LA(`|${x}|`)} agree when ${x}${NB}>${NB}0 and disagree (indeed, one is undefined) when ${x}${NB}<${NB}0. Any time you are tempted to pull an even power out of a logarithm’s argument, the exponent must land on |${x}|, not on ${x} itself, unless the sign of ${x} has already been pinned down by the surrounding problem. The third example in the part ${PART_WORKED} shows exactly how many solutions this distinction can cost you.`,
      },
      {
        t: 'p',
        html: `The same caution applies in reverse: the product law ${LA(`(${mn})`)} = ${LA(m)} + ${LA(n)} needs both ${m}${NB}>${NB}0 and ${n}${NB}>${NB}0 individually: it is not enough that ${mn}${NB}>${NB}0. For instance ${L10('((−2)(−3))')} = ${L10('6')} is defined, but “splitting” it as ${L10('(−2)')} + ${L10('(−3)')} is nonsense, since neither term on the right exists. Whenever you split or combine logarithms, the individual pieces must independently satisfy the domain rule of the part ${PART_DEF}, not merely their product or quotient.`,
      },

      // ──────────────── Section 5 · p. 15 ────────────────
      { t: 'part', title: 'Change of base and its consequences' },
      {
        t: 'p',
        html: `Calculators and log tables only give logarithms to base 10 (or base ${e}), so every other base must be converted. For ${a}, ${c}${NB}>${NB}0, ${a}, ${c}${NB}≠${NB}1, and ${b}${NB}>${NB}0:<br><br>${LA(b)} = ${fr(LC(b), LC(a))}.`,
      },
      {
        t: 'p',
        html: `<b>Derivation.</b> Let ${y} = ${LA(b)}, so ${pw(a, y)} = ${b}. Take ${lg(c)} of both sides: ${LC(`(${pw(a, y)})`)} = ${LC(b)}, and by the power law this is ${y}${NB}${LC(a)} = ${LC(b)}. Dividing by ${LC(a)} (nonzero since ${a}${NB}≠${NB}1) gives ${y} = ${fr(LC(b), LC(a))}, which is exactly the change-of-base formula. ■`,
      },
      { t: 'p', html: 'Two consequences follow immediately and are used constantly.' },
      {
        t: 'p',
        html: `<b>1. The reciprocal relation.</b> Setting ${c}${NB}=${NB}${b} in the formula (this needs ${b}${NB}≠${NB}1 as well as ${b}${NB}>${NB}0, since ${b} becomes the new base):<br><br>${LA(b)} = ${fr(LB(b), LB(a))} = ${fr('1', LB(a))}, i.e.<br>${LA(b)} · ${LB(a)} = 1 (valid for ${a}, ${b}${NB}>${NB}0 and ${a}, ${b}${NB}≠${NB}1).<br>For instance, since ${L2('8')} = 3, it must be that ${lg('8', '2')} = ${fr('1', '3')}; and indeed 3 × ${fr('1', '3')} = 1.`,
      },
      {
        t: 'p',
        html: `<b>2. Change of base with powers on both sides.</b> For ${p},${NB}${q}${NB}≠${NB}0,<br><br>${lg(`${a}<sup>${p}</sup>`, `(${pw(b, q)})`)} = ${fr(q, p)} ${LA(b)}.`,
      },
      {
        t: 'p',
        html: `This follows from the formula by writing<br><br>${disp(
          `${lg(`${a}<sup>${p}</sup>`, `(${pw(b, q)})`)} = ${fr(LA(`(${pw(b, q)})`), LA(`(${pw(a, p)})`))}`,
          `= ${fr(`${q} ${LA(b)}`, `${p} ${LA(a)}`)}`,
          `= ${fr(q, p)} ${LA(b)}.`,
        )}<br><br>For example, if ${L2('5')} = ${m}, then ${lg('4', '25')} = ${lg('2²', '(5<sup>2</sup>)')} = ${fr('2', '2')}${NB}${L2('5')} = ${m}: the exponents cancel exactly, so squaring both the base and the argument leaves the logarithm unchanged.`,
      },
      {
        t: 'p',
        html: `<b>One further identity worth proving</b>, because it recurs in JEE Advanced ${ESTIMATE}: for ${a}, ${b}, ${c}${NB}>${NB}0 (and ${b}${NB}≠${NB}1),<br>${A_LOGB_C} = ${C_LOGB_A}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Take ${lg(b)} of both sides. The left side gives ${LB(`(${A_LOGB_C})`)} = ${LB(c)} · ${LB(a)} by the power law. The right side gives ${LB(`(${C_LOGB_A})`)} = ${LB(a)} · ${LB(c)}, the same product in the other order. Since ${lg(b)} is a one-to-one function on positive numbers, equal logarithms mean equal originals, so ${A_LOGB_C} = ${C_LOGB_A}. ■`,
      },

      // ──────────────── Section 6 · pp. 15–16 ────────────────
      { t: 'part', title: 'Common logarithms: characteristic and mantissa' },
      {
        t: 'p',
        html: `The <b>common logarithm</b> is ${lg('10')}, usually written log with no base shown; the <b>natural logarithm</b> is ${lg(e)}, written ln, where ${e} ≈ 2.71828 is Euler’s number. Unless a problem states otherwise, an unadorned “log” in an Indian JEE/CBSE context means base 10, while ln always means base ${e}. (In calculus, and in many JEE Advanced questions, log ${x} written without a base can also mean the natural logarithm; the question or its answer options show which is meant, and ln is never ambiguous.) Do not confuse the two: a formula written with ln cannot be evaluated using common-log tables without a change of base.`,
      },
      {
        t: 'p',
        html: `For any positive real number ${N}, write ${L10(N)} as an integer plus a fractional part, the integer being the greatest integer not exceeding ${L10(N)}:<br>${L10(N)} = (integer part) + (fractional part),`,
      },
      {
        t: 'p',
        html: `where the integer part is called the <b>characteristic</b> and the fractional part the <b>mantissa</b>, and by convention the <b>mantissa is always taken to be non-negative</b> (0${NB}≤${NB}mantissa${NB}<${NB}1), even if this forces the characteristic to be negative.`,
      },
      {
        t: 'p',
        html: `<b>Rule for ${N}${NB}≥${NB}1.</b> If ${N} has ${k} digits to the left of the decimal point, then<br>characteristic = ${k} − 1.`,
      },
      {
        t: 'p',
        html: `This is immediate: a ${k}-digit number satisfies 10<sup>${k}−1</sup> ≤ ${N} < 10<sup>${k}</sup>, so ${k} − 1 ≤ ${L10(N)} < ${k}, and the integer part of ${L10(N)} is exactly ${k} − 1.`,
      },
      {
        t: 'p',
        html: `<b>Rule for 0${NB}<${NB}${N}${NB}<${NB}1.</b> If ${N} has ${k} zeros immediately after the decimal point before its first non-zero digit (e.g. ${N} = 0.0034 has ${k} = 2 zeros after the decimal point), then<br>characteristic = −(${k} + 1),`,
      },
      {
        t: 'p',
        html: `written in <b>bar notation</b> as ${KBAR} to keep the mantissa separately non-negative: ${L10(N)} = ${KBAR}.${WJ}(mantissa) means ${L10(N)} = −(${k} + 1) + mantissa, not −(${k} + 1 + mantissa). This distinction is exactly why the bar notation exists: it keeps the “shape” of the digits (the mantissa) separate from the position of the decimal point (the characteristic), which is the entire point of common logarithms in an era of log tables.`,
      },
      {
        t: 'p',
        html: `<b>Why the mantissa is the useful part.</b> The mantissa depends only on the sequence of digits of ${N}, never on where its decimal point sits: moving the decimal point only ever changes the characteristic. Take ${N} = 43700: this is a 5-digit number, so its characteristic is 4, and ${L10('43700')} = 4.6405 (mantissa 0.6405). Now take ${N} = 0.000437, the same digit string 437 but with ${k} = 3 zeros immediately after the decimal point before the first non-zero digit, so its characteristic is −(3 + 1) = −4, written 4${BAR}, and ${L10('(0.000437)')} = 4${BAR}.6405, the <b>same mantissa</b>, 0.6405, as before. This is precisely why historical log tables needed to store the mantissa of only the digit pattern 437 once: the characteristic could always be recovered separately, by inspection, from the position of the decimal point.`,
      },
      {
        t: 'p',
        html: `<b>The standard application: counting digits.</b> The number of digits in a positive integer ${N} equals (characteristic of ${L10(N)}) + 1. This turns “how many digits does 2<sup>100</sup> have?” from a computation you cannot do by hand into a two-line logarithm problem, worked out in full in the sixth example of the part ${PART_WORKED}.`,
      },

      // ──────────────── Section 7 · pp. 16–17 ────────────────
      { t: 'part', title: 'Logarithmic equations' },
      {
        t: 'p',
        html: `The general strategy for solving an equation involving logarithms has three steps:`,
      },
      {
        t: 'p',
        html: `1. <b>State the domain first.</b> Write down every condition that makes each logarithm in the equation meaningful (every argument positive, every variable base positive and not equal to 1) before touching the algebra.`,
      },
      {
        t: 'p',
        html: `2. <b>Combine and convert.</b> Use the laws of the part ${PART_LAWS} to reduce the equation to a single logarithm on each side (or a single logarithm equal to a constant), then remove the logarithm using ${LA(P)} = ${LA(Q)} ⟺ ${P} = ${Q} (valid once ${P}, ${Q}${NB}>${NB}0 are already known from step 1), or ${LA(P)} = ${k} ⟺ ${P} = ${pw(a, k)}.`,
      },
      {
        t: 'p',
        html: `3. <b>Solve, then check every root against the domain from step 1.</b>`,
      },
      {
        t: 'p',
        html: `Step 3 is not a formality. <b>Extraneous roots are common in this topic, so always check.</b> The reason is structural: combining two logarithms into one (say, via the product law) can widen the domain: ${L2(`(${x} − 1)`)} + ${L2(`(${x} + 1)`)} needs ${x}${NB}>${NB}1, but ${L2(`(${x2} − 1)`)} is defined for ${x}${NB}>${NB}1 and for ${x}${NB}<${NB}−1. The reverse step, splitting log(${x2}) into 2 log ${x}, narrows the domain and can lose a root (see the third example in the part ${PART_WORKED}). Squaring, clearing denominators, and combining logs are all operations that can manufacture solutions to the transformed equation that do not solve the original one. A formally correct piece of algebra can still hand you a number that makes an original logarithm’s argument zero or negative, and such a number must be discarded, no matter how cleanly it fell out of the algebra. The seventh example in the part ${PART_WORKED} works through exactly this situation in full, including the rejection step.`,
      },

      // ──────────────── Section 8 · pp. 17–18 ────────────────
      { t: 'part', title: 'Logarithmic inequalities (the base matters)' },
      {
        t: 'p',
        html: `This is the single most important idea in the chapter, because it is the idea students most often get backwards under exam pressure: <b>the direction of a logarithmic inequality depends on whether the base is bigger or smaller than 1.</b>`,
      },
      {
        t: 'p',
        html: `<b>The rule.</b>`,
      },
      {
        t: 'p',
        html: `• If ${a}${NB}>${NB}1: ${LA(x)} > ${LA(y)} ⟺ ${x} > ${y}: the inequality’s direction is <b>preserved</b>.`,
      },
      {
        t: 'p',
        html: `• If 0${NB}<${NB}${a}${NB}<${NB}1: ${LA(x)} > ${LA(y)} ⟺ ${x} < ${y}: the inequality’s direction is <b>reversed</b>.`,
      },
      {
        t: 'p',
        html: `• In both cases, <b>both arguments must be strictly positive to begin with</b>: check the domain before you touch the inequality sign at all.`,
      },
      {
        t: 'p',
        html: `<b>Why the base flips the direction.</b> For ${a}${NB}>${NB}1, the function ${y} = ${pw(a, x)} is increasing, so its inverse ${LA(x)} is also increasing: larger input, larger output, larger argument gives a larger logarithm: direction preserved. For 0${NB}<${NB}${a}${NB}<${NB}1, the function ${y} = ${pw(a, x)} is decreasing (each higher power of a proper fraction is smaller, e.g. (0.5)<sup>1</sup> = 0.5 > (0.5)<sup>2</sup> = 0.25), so its inverse ${LA(x)} is decreasing too: as ${x} grows, ${LA(x)} shrinks, hence the inequality flips.`,
      },
      {
        t: 'p',
        html: `A one-line mnemonic that captures both cases at once: <b>multiplying (or dividing) an inequality by ${LA(b)}, where ${b}${NB}>${NB}1, behaves exactly like multiplying by a number that has the same sign as (${a} − 1).</b> When ${a}${NB}>${NB}1, ${LA(b)} (with ${b}${NB}>${NB}1) is positive, so the direction is kept; when 0${NB}<${NB}${a}${NB}<${NB}1, it is negative, which is precisely why the direction reverses. (If 0${NB}<${NB}${b}${NB}<${NB}1 the sign of ${LA(b)} is the opposite, and for ${b}${NB}=${NB}1 it is 0, so check ${b} first.) This is the same rule you already know from ordinary inequalities and negative numbers, transplanted into logarithms.`,
      },
      {
        t: 'p',
        html: `<b>Worked mini-cases</b>, both re-verified in full as the eighth example in the part ${PART_WORKED}:`,
      },
      {
        t: 'p',
        html: `• Base greater than 1: ${L3(`(${x} − 1)`)} < 2, domain ${x}${NB}>${NB}1; since 3 > 1, direction preserved, giving ${x} − 1 < 9, so 1${NB}<${NB}${x}${NB}<${NB}10.`,
      },
      {
        t: 'p',
        html: `• Base between 0 and 1: ${lg('0.5', `(2${x} − 3)`)} ≥ −2, domain ${x}${NB}>${NB}1.5; since 0 < 0.5 < 1, direction reverses, giving 2${x} − 3 ≤ (0.5)<sup>−2</sup> = 4, so 1.5${NB}<${NB}${x}${NB}≤${NB}3.5.`,
      },
      {
        t: 'p',
        html: `If the base itself contains ${x}, split the work into the two cases base${NB}>${NB}1 and 0${NB}<${NB}base${NB}<${NB}1, apply the rule above in each case, and keep the conditions base${NB}>${NB}0 and base${NB}≠${NB}1 in the domain as well.`,
      },

      // ──────────────── Section 9 · pp. 18–20 ────────────────
      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main',
        q: `Solve ${lg(x, '81')} = 4 for ${x}.`,
        steps: [
          `By the definition of a logarithm, ${lg(x, '81')} = 4${NB}⟺ ${pw(x, '4')} = 81. Solving, ${x} = ±81<sup>1/4</sup> = ±3. But the base of a logarithm must satisfy ${x}${NB}>${NB}0 and ${x}${NB}≠${NB}1 (the part ${PART_DEF}), so ${x}${NB}=${NB}−3 is rejected outright, regardless of the fact that it algebraically satisfies ${pw(x, '4')} = 81.`,
          `<b>Check:</b> ${L3('81')} = ${L3(`(3<sup>4</sup>)`)} = 4. Correct.`,
        ],
        ans: `${x} = 3`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Given ${L10('2')} = 0.3010 and ${L10('3')} = 0.4771, evaluate ${L10('72')}.`,
        steps: [
          `Factorise: 72 = 8 × 9 = 2<sup>3</sup> × 3<sup>2</sup>. By the product and power laws,<br>${L10('72')} = ${L10('(2<sup>3</sup>)')} + ${L10('(3<sup>2</sup>)')}<br>= 3 ${L10('2')} + 2 ${L10('3')}<br>= 3(0.3010) + 2(0.4771)<br>= 0.9030 + 0.9542<br>= 1.8572.`,
          `<b>Check:</b> the true value of ${L10('72')} (to four decimal places) is 1.8573; the tiny discrepancy is only the rounding built into the four-decimal constants supplied.`,
        ],
        ans: `${L10('72')} ≈ 1.8572`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Solve ${L10(`(${x2})`)} = 2.`,
        steps: [
          `<b>The trap.</b> It is tempting to apply the power law directly as 2 ${L10(x)} = 2, giving ${L10(x)} = 1, so ${x} = 10, and to stop there. This is wrong, and it is wrong for exactly the reason flagged in the part ${PART_LAWS}: the power law ${LA(`(${pw(x, p)})`)} = ${p} ${LA(x)} requires ${x}${NB}>${NB}0, and the original equation ${L10(`(${x2})`)} = 2 never assumed that. The correct law here is ${L10(`(${x2})`)} = 2 ${L10(`|${x}|`)}, valid for all ${x}${NB}≠${NB}0.`,
          `<b>Solution.</b> Work directly from the definition instead: ${L10(`(${x2})`)} = 2 ⟺ ${x2} = 10<sup>2</sup> = 100. The domain requirement is simply ${x2}${NB}>${NB}0, i.e. ${x}${NB}≠${NB}0: no restriction on the sign of ${x} itself. Solving ${x2} = 100 gives ${x} = ±10, and both values satisfy ${x}${NB}≠${NB}0, so both are valid.`,
          `<b>Check:</b> ${L10('((10)<sup>2</sup>)')} = ${L10('100')} = 2, and equally ${L10('((−10)<sup>2</sup>)')} = ${L10('100')} = 2. Both check out. The naive method silently discarded the valid solution ${x}${NB}=${NB}−10 by quietly assuming ${x}${NB}>${NB}0 when it wrote 2 ${L10(x)} instead of 2 ${L10(`|${x}|`)}.`,
        ],
        ans: `${x} = ±10`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Evaluate ${L2('3')} · ${L3('4')} · ${lg('4', '5')} · ${lg('5', '6')} · ${lg('6', '7')} · ${lg('7', '8')}.`,
        steps: [
          `Convert every factor to natural logarithms using the change-of-base formula of the part ${PART_CHANGE}:<br>${tight(
            `${L2('3')} · ${L3('4')} · ${lg('4', '5')} · ${lg('5', '6')} · ${lg('6', '7')} · ${lg('7', '8')}`,
            `= ${fr(ln('3'), ln('2'))} · ${fr(ln('4'), ln('3'))} · ${fr(ln('5'), ln('4'))}${NB}·`,
            `${fr(ln('6'), ln('5'))} · ${fr(ln('7'), ln('6'))} · ${fr(ln('8'), ln('7'))}.`,
          )}`,
          `Every numerator cancels the denominator of the next factor except the very first denominator and the very last numerator, leaving<br>${fr(ln('8'), ln('2'))} = ${L2('8')} = ${L2('(2<sup>3</sup>)')} = 3.`,
        ],
        ans: '3',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Prove that ${A_LOGB_C} = ${C_LOGB_A} for ${a}, ${b}, ${c}${NB}>${NB}0, ${b}${NB}≠${NB}1, and verify it numerically for ${a}${NB}=${NB}4, ${b}${NB}=${NB}2, ${c}${NB}=${NB}8.`,
        steps: [
          `The proof is given in the part ${PART_CHANGE}: take ${lg(b)} of both sides and use the power law, which turns each side into the product ${LB(c)} · ${LB(a)}, in one order or the other; since ${lg(b)} is one-to-one on the positive reals, equal logarithms force equal originals.`,
          `<b>Numerical verification.</b> With ${a}${NB}=${NB}4, ${b}${NB}=${NB}2, ${c}${NB}=${NB}8:<br>${L2('8')} = 3, so the left side is<br>4<sup>log₂ 8</sup> = 4<sup>3</sup> = 64.<br>Also ${L2('4')} = 2, so the right side is<br>8<sup>log₂ 4</sup> = 8<sup>2</sup> = 64.<br>Both equal 64.`,
        ],
        ans: `identity confirmed; 4<sup>log₂ 8</sup> = 8<sup>log₂ 4</sup> = 64`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Characteristic and Mantissa',
        q: `(a) How many digits does 2<sup>100</sup> have? (b) (${fr('1', '2')})<sup>100</sup> is written as a decimal; how many zeros appear immediately after the decimal point before its first non-zero digit? Use ${L10('2')} = 0.3010 throughout.`,
        steps: [
          `(a) By the power law, ${L10('(2<sup>100</sup>)')} = 100${NB}${L10('2')} = 100(0.3010) = 30.10. The characteristic (integer part) is 30, so by the digit-counting rule of the part ${PART_COMMON}, the number of digits is 30 + 1 = 31.`,
          `<b>Check:</b> direct computation gives 2<sup>100</sup> = 1267650600228229401496703205376, which on counting has exactly 31 digits, confirming the log-based method exactly.`,
          `(b) ${L10(`((${fr('1', '2')})<sup>100</sup>)`)} = −100${NB}${L10('2')} = −30.10. Write this in bar notation with a non-negative mantissa: −30.10 = −31 + 0.90, i.e. ${L10(`((${fr('1', '2')})<sup>100</sup>)`)} = 3${BAR}1${BAR}.90. The bar characteristic is 31, so by the rule for 0${NB}<${NB}${N}${NB}<${NB}1 in the part ${PART_COMMON}, the number of zeros right after the decimal point is ${k} = 31 − 1 = 30.`,
          `<b>Check by direct estimate:</b><br>${tight(
            `(${fr('1', '2')})<sup>100</sup> = ${fr('1', '2<sup>100</sup>')}`,
            `≈ ${fr('1', '1.2677 × 10<sup>30</sup>')}`,
            `≈ 7.89 × 10<sup>−31</sup>.`,
          )}<br>Writing this out, the decimal point is followed by thirty 0s and then the digits 788 … (7.89 when rounded to three figures), confirming ${k}${NB}=${NB}30 independently.`,
        ],
        ans: '(a) 31 digits. (b) 30 zeros.',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Extraneous Root',
        q: `Solve ${L2(`(${x} − 1)`)} + ${L2(`(${x} + 1)`)} = 3.`,
        steps: [
          `<b>Domain first:</b> both ${x} − 1${NB}>${NB}0 and ${x} + 1${NB}>${NB}0 are required, and the stricter of the two is ${x}${NB}>${NB}1.`,
          `<b>Combine:</b> by the product law, ${L2(`[(${x}${NB}−${NB}1)${WJ}(${x}${NB}+${NB}1)]`)} = 3, i.e. ${L2(`(${x2} − 1)`)} = 3.`,
          `<b>Convert and solve:</b> ${x2} − 1 = 2<sup>3</sup> = 8, so ${x2} = 9, so ${x} = ±3.`,
          `<b>Check against the domain:</b> the domain established at the start was ${x}${NB}>${NB}1. The root ${x}${NB}=${NB}−3 fails this (it makes ${x} − 1 = −4 < 0, so ${L2(`(${x} − 1)`)} is not even defined there) and must be <b>rejected</b>, despite being a perfectly valid solution of the algebraic equation ${x2} = 9. The root ${x}${NB}=${NB}3 satisfies ${x}${NB}>${NB}1 and is accepted.`,
          `<b>Final check:</b> ${L2('(3 − 1)')} + ${L2('(3 + 1)')} = ${L2('2')} + ${L2('4')} = 1 + 2 = 3. Correct.`,
        ],
        ans: `${x} = 3 (the root ${x} = −3 is extraneous and rejected)`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Inequalities, Both Base Cases',
        q: `Solve (a) ${L3(`(${x} − 1)`)} < 2, and (b) ${lg('0.5', `(2${x} − 3)`)} ≥ −2.`,
        steps: [
          `(a) Base 3 > 1. Domain: ${x} − 1${NB}>${NB}0, so ${x}${NB}>${NB}1. Since the base exceeds 1, the direction of the inequality is preserved when the logarithm is removed:<br>${x} − 1 < 3<sup>2</sup> = 9 ⇒ ${x} < 10.`,
          `Combined with the domain, the solution is 1${NB}<${NB}${x}${NB}<${NB}10.`,
          `(b) Base 0.5, which is between 0 and 1. Domain: 2${x} − 3${NB}>${NB}0, so ${x}${NB}>${NB}1.5. Since the base is less than 1, the direction reverses:<br>2${x} − 3 ≤ (0.5)<sup>−2</sup> = ${fr('1', '0.25')} = 4 ⇒ 2${x} ≤ 7 ⇒ ${x} ≤ 3.5.`,
          `Combined with the domain, the solution is 1.5${NB}<${NB}${x}${NB}≤${NB}3.5.`,
          `<b>Check (b) at the boundary:</b> at ${x}${NB}=${NB}3.5, 2${x} − 3 = 4, and ${lg('0.5', '4')} = ${fr(ln('4'), ln('0.5'))} = ${fr(`2 ${ln('2')}`, `−${ln('2')}`)} = −2, matching the equality case exactly.`,
        ],
        ans: `(a) 1 < ${x} < 10. (b) 1.5 < ${x} ≤ 3.5.`,
      },

      // ──────────────── Section 10 · p. 21 ────────────────
      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `Simplify ${fr(`${pw(x, '2/3')} · ${pw(x, '1/2')}`, pw(x, '1/6'))}.`, a: `${x} (for ${x}${NB}>${NB}0)` },
          { q: `Rationalise ${fr('3', '2√3 − √5')}.`, a: fr('6√3 + 3√5', '7') },
          { q: `Find the domain of ${f(x)} = ${L10(`(${x2} − 5${x} + 6)`)}.`, a: `${x}${NB}<${NB}2 or ${x}${NB}>${NB}3` },
          { q: `Evaluate ${L2('64')} + ${L3(`(${fr('1', '27')})`)}.`, a: `3 (since ${L2('64')} = 6 and ${L3(`(${fr('1', '27')})`)} = −3)` },
          { q: `Evaluate ${L10('(0.0001)')}.`, a: '−4' },
          { q: `Using ${L10('2')} = 0.3010, find the number of digits in 2<sup>40</sup>.`, a: '13 digits (since 40 × 0.3010 = 12.04, characteristic 12)' },
          { q: `Solve ${lg('4', `(${x} + 3)`)} + ${lg('4', `(${x} − 3)`)} = 2.`, a: `${x} = 5 (root ${x} = −5 rejected: domain requires ${x}${NB}>${NB}3)` },
          {
            q: `Solve ${lg('1/3', `(${x} − 2)`)} > 1.`,
            a: `2${NB}<${NB}${x}${NB}<${NB}${fr('7', '3')} (base ${fr('1', '3')} < 1, so the inequality reverses: ${x} − 2 < ${fr('1', '3')})`,
          },
          { q: `Find ${x} if ${lg(x, '625')} = 4.`, a: `${x} = 5 (root ${x} = −5 rejected: the base of a logarithm must be positive)` },
          {
            q: `Prove that ${LA(b)} · ${LB(c)} · ${LC(a)} = 1 for ${a},${NB}${b},${NB}${c}${NB}>${NB}0, all ≠ 1.`,
            a: `Change every term to a common base (say ln): the product is ${fr(ln(b), ln(a))} · ${fr(ln(c), ln(b))} · ${fr(ln(a), ln(c))} = 1, since every factor cancels.`,
          },
          {
            q: `If ${a}, ${b}, ${c} are consecutive terms of a geometric progression, all positive, show that log ${a}, log ${b}, log ${c} are in arithmetic progression.`,
            a: `${a}, ${b}, ${c} in GP means ${pw(b, '2')} = ${i('ac')}; taking log of both sides (valid since all three are positive) gives 2 log ${b} = log ${a} + log ${c}, which is exactly the condition for log ${a}, log ${b}, log ${c} to be in AP.`,
          },
          { q: `Using ${L10('2')} = 0.3010 and ${L10('3')} = 0.4771, evaluate ${L10('108')}.`, a: `${L10('108')} = ${L10('(2<sup>2</sup> · 3<sup>3</sup>)')} = 2(0.3010) + 3(0.4771) = 0.6020 + 1.4313 = 2.0333.` },
        ],
      },

      // ──────────────── Section 11 · pp. 21–22 ────────────────
      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting the domain before manipulating a logarithmic expression.</b> Every logarithmic argument must be checked positive, and every variable base must be checked positive and ≠ 1, before the laws of the part ${PART_LAWS} are applied, not after. Correction: write the domain as the very first line of your working, always.`,
          `<b>Writing ${LA(`(${x2})`)} = 2 ${LA(x)} unconditionally.</b> The correct identity is ${LA(`(${x2})`)} = 2 ${LA(`|${x}|`)}, valid for all ${x}${NB}≠${NB}0; the version without the modulus is only valid once ${x}${NB}>${NB}0 is already known. Correction: the moment an even power sits inside a logarithm, reach for the modulus by reflex.`,
          `<b>Splitting ${LA(`(${mn})`)} into ${LA(m)} + ${LA(n)} when only the product ${mn} is known to be positive.</b> Both ${m}${NB}>${NB}0 and ${n}${NB}>${NB}0 must hold individually. Correction: never split a logarithm’s argument without first confirming both pieces are positive on their own.`,
          `<b>Ignoring extraneous roots after solving a logarithmic equation.</b> Combining logarithms algebraically can create solutions that do not satisfy the original domain. Correction: substitute every candidate root back into the original equation’s domain conditions, not just into the final polynomial equation.`,
          `<b>Forgetting to check the direction of a logarithmic inequality against the base.</b> The inequality preserves direction only for ${a}${NB}>${NB}1; for 0${NB}<${NB}${a}${NB}<${NB}1 it reverses. Correction: write the base’s relationship to 1 explicitly before removing the logarithm from an inequality.`,
          `<b>Confusing log (base 10) with ln (base ${e}).</b> A formula quoted in one base cannot be evaluated using tables or constants built for the other without a change of base. Correction: check which symbol a formula actually uses before substituting numbers (in calculus a plain log often means ln, so read the context).`,
          `<b>Mixing up characteristic and mantissa sign conventions.</b> The mantissa is always taken non-negative, even when the characteristic (in bar notation) is negative; 3${BAR}1${BAR}.90 means −31 + 0.90, not −(31.90). Correction: convert to the form (negative integer) + (positive fraction less than 1) explicitly before reading off the characteristic.`,
        ],
      },
      { t: 'protip', html: 'Treat “state the domain” as the mandatory first line of every logarithmic problem (equation or inequality), not an afterthought to be added if time permits.' },
      {
        t: 'protip',
        html: `When a question gives you ${L10('2')} and/or ${L10('3')}, the expected method is almost always to factorise the argument into powers of 2, 3, and 5 (recall ${L10('5')} = 1 − ${L10('2')}) and apply the laws of the part ${PART_LAWS} term by term.`,
      },
      {
        t: 'protip',
        html: `For “how many digits” or “how many leading zeros” questions, the entire solution is: take ${lg('10')}, split off the characteristic, and read the answer straight off the rules of the part ${PART_COMMON}: no other technique is needed.`,
      },
      {
        t: 'protip',
        html: `Any time you see a chain of logarithms with the pattern ${LA(b)} · ${LB(c)} · ${LC(i('d'))} ⋯, suspect telescoping via change of base before attempting anything else.`,
      },
      {
        t: 'protip',
        html: 'After solving any logarithmic equation, the fastest verification is direct substitution into the original form of the equation, not the simplified polynomial form: this is exactly what catches an extraneous root before you write it down as a final answer.',
      },
      {
        t: 'protip',
        html: `Keep the identity ${plog(a, a, x)} = ${x} in your working memory; it is the standard move for removing an “exponent of a logarithm” or “logarithm of an exponent” in a single step, and it underlies the proof of ${A_LOGB_C} = ${C_LOGB_A}, an identity JEE Advanced questions return to ${ESTIMATE}.`,
      },
    ],
  },
];
