import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Additional topics A–E, pp. 165–178 of the Class 12 Mathematics
 * Master Reference (October 2026 edition), word for word: the "Chapter 2:
 * Inverse Trigonometric Functions — Additional Topics" part's Addenda A to E,
 * with the book's letters (decision 3). Its heading is not copied; its p. 165
 * opening paragraphs ("The chapter gave you the six cages …") are A's
 * "Introduction" part. Each addendum then follows its own headings: Method
 * (C also "The completed tables"), the run of "Example X.N" worked examples
 * (one part, "Worked examples", as Chapter 1's additional topics), and
 * "Practice — Addendum X" ("Practice", answers set against their questions).
 * E's practice answers run onto the top of p. 178; Addendum P starts lower on
 * that page. The example numbers are dropped from the tags (as Chapter 1);
 * the book's example numbers in running text are reworded to what the reader
 * shows. Untitled numbered method lists stay numbered lines of a paragraph;
 * E's "Finding a domain." and "Finding a range." are procedures. A fraction
 * the book sets inside a fraction (A.1's check) is written with ÷. No
 * drawings on these pages. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar. */
const WJ = '⁠';
/** Two line breaks: keeps two stacked fractions off neighbouring lines. */
const BB = '<br><br>';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = I('x');
const y = I('y');
const z = I('z');
const t = I('t');
const u = I('u');
const v = I('v');
const a = I('a');
const c = I('c');
const j = I('j');
const k = I('k');
const m = I('m');
const th = I('θ');
const A = I('A');
const B = I('B');
const C = I('C');
const S = I('S');
const f = I('f');
const g = I('g');
const h = I('h');
const q = I('q');
const XY = I('xy');
const XYZ = I('xyz');
const UV = I('uv');
const sq = (b: string) => `${b}<sup>2</sup>`;
const X2 = sq(x);
const Y2 = sq(y);
const Z2 = sq(z);
/** |s|, the word joiner keeping the opening bar with its letter. */
const abs = (s: string) => `|${WJ}${s}|`;
const ABSX = abs(x);
/** A short relation, kept on one line. */
const rl = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;

const inv = (fn: string) => `${fn}<sup>−1</sup>`;
const SIN = inv('sin');
const COS = inv('cos');
const TAN = inv('tan');
const COT = inv('cot');
const SEC = inv('sec');
const CSC = inv('cosec');
/** An inverse (or trig) function and its argument, glued: sin⁻¹ x. */
const of = (F: string, arg: string) => `${F}${NB}${arg}`;
const tf = (fn: string, arg: string) => `${fn}${NB}${arg}`;
const cosA = tf('cos', A);
const COS3 = `${cosA} ${tf('cos', B)} ${tf('cos', C)}`;

const P2 = fr('π', '2');
const P3 = fr('π', '3');
const P4 = fr('π', '4');
const P6 = fr('π', '6');
const P12 = fr('π', '12');
const P2_3 = fr('2π', '3');
const P3_2 = fr('3π', '2');
const P3_4 = fr('3π', '4');
const P4_3 = fr('4π', '3');
const P5_2 = fr('5π', '2');
const P5_4 = fr('5π', '4');
const P7_2 = fr('7π', '2');
const P7_4 = fr('7π', '4');
const P9_4 = fr('9π', '4');
const H = fr('1', '2');
const R3 = fr('1', '√3');
const R2 = fr('1', '√2');

/** An interval, its comma glued: [a, b]. */
const iv = (lo: string, hi: string, o = '[', cl = ']') => `${o}${lo},${NB}${hi}${cl}`;
const SINB = iv(`−${P2}`, P2);
const TANB = iv(`−${P2}`, P2, '(', ')');
const M11 = iv('−1', '1');
const ZPI = iv('0', 'π');
const ZPI2 = iv('0', P2);
const Z01 = iv('0', '1');
const Z02 = iv('0', '2');
const Z2PI = iv('0', '2π');
const PI2PI = iv('π', '2π');
const OPEN3 = iv('0', P3_2, '(', ')');

const SUM3 = `${of(TAN, x)} + ${of(TAN, y)} + ${of(TAN, z)}`;
const XYZPOS = `${x}, ${y}, ${rl(z, '>', '0')}`;
const R1X2 = `√(1 − ${X2})`;
const R1Y2 = `√(1 − ${Y2})`;
const R1Z2 = `√(1 − ${Z2})`;
const F2X_P = fr(`2${x}`, `1 + ${X2}`);
const F2X_M = fr(`2${x}`, `1 − ${X2}`);
const F1MX_P = fr(`1 − ${X2}`, `1 + ${X2}`);
const F3X = fr(`3${x} − ${x}<sup>3</sup>`, `1 − 3${X2}`);
const TANX = of(TAN, x);
const SINX = of(SIN, x);
const COSX = of(COS, x);
const T2 = `2${NB}${TANX}`;
const T3 = `3${NB}${TANX}`;
const FSIN = I('f') + '(' + x + ')';
const GX = `${g}(${x})`;
const HX = `${h}(${x})`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 165–168 ────────────────
  {
    n: 'A',
    title: 'Solving Inverse Trigonometric Equations',
    extra: true,
    kalam: 'An unverified root in this topic is not a risk; it is usually a planted trap.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter gave you the six cages, the self-map identities, the combination formulas with their ±π corrections, and the triangle-and-substitution toolkit. Five examinable skills still stand outside its door. First, the chapter evaluates expressions but never solves equations built from them, yet “solve for ${x}” is a near-guaranteed CBSE question and a JEE Main staple ${ESTIMATE}, and it carries an extraneous-root trap that costs entire questions. Second, it mostly proves identities left-to-right; exams just as often hand you a condition on a sum of inverse functions and demand the hidden algebraic relation, or the converse of one. Third, its multiple-angle table stops at each identity’s validity window; JEE wants the same expressions simplified for every real ${x}, piecewise. Fourth, it folds individual angles but never studies ${SIN}(sin${NB}${x}) as a function of ${x} over the whole real line: the triangular wave on which JEE Advanced counts solutions. Fifth, it never hunts domains and ranges of functions assembled around inverse trigonometric parts, a CBSE 2-marker and a CUET favourite ${ESTIMATE}. Additional topics A to E supply exactly these, each built only from machinery the chapter already constructed.`,
      },
      {
        t: 'p',
        html: `One convention warning before you start. This book follows NCERT and locks ${COT} to the branch ${iv('0', 'π', '(', ')')}. Some JEE preparation sources use the rival branch ${iv(`−${P2}`, P2, '(', ']')}, under which ${COT} of a negative argument comes out negative. Any expression containing ${COT} of a negative number changes value between the two conventions; until your paper specifies otherwise, stay with NCERT.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'An inverse trigonometric equation mixes angles and algebra. The universal route back to algebra has five steps.',
      },
      {
        t: 'p',
        html: `1. <b>Narrow the domain first.</b> Every inverse term imposes a constraint: arguments of ${SIN} and ${COS} must lie in ${M11}; arguments of ${SEC} and ${CSC} must satisfy ${rl(abs(t), '≥', '1')}; ${TAN} and ${COT} accept anything. Intersect all the constraints before touching the equation: half your candidates usually die here, for free.<br>2. <b>Isolate one inverse term</b> (or recognise a sum whose correction case you can decide early).<br>3. <b>Apply the matching forward function to both sides.</b> Taking the tangent, sine or cosine of both sides converts the equation into ordinary algebra. Remember what this step costs you: a forward trig function is not one-to-one, so the algebraic equation can admit candidates the original rejects.<br>4. <b>Solve the algebraic equation completely.</b><br>5. <b>Verify every candidate in the original equation</b>: both its domain constraints and its branch behaviour. An unverified root in this topic is not a risk; it is usually a planted trap.`,
      },
      {
        t: 'p',
        html: '<b>Why verification is not optional.</b> When you take the cosine of both sides of an equation whose two sides are angles, you replace “the angles are equal” by “the angles have equal cosine”: a weaker statement, because angles differing by a sign or a reflection share a cosine. Step 5 exists to kill the impostors this creates.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: `Solve<br>${of(TAN, fr(`${x} − 1`, `${x} − 2`))} + ${of(TAN, fr(`${x} + 1`, `${x} + 2`))} = ${P4}.`,
        steps: [
          `Domains: ${rl(x, '≠', '2')} and ${rl(x, '≠', '−2')}. Name the two arguments ${u} and ${v}, and compute their sum and product, since the addition formula consumes exactly those:${BB}${u} + ${v} = ${fr(`(${x} − 1)(${x} + 2) + (${x} + 1)(${x} − 2)`, `${X2} − 4`)}${BB}= ${fr(`2${X2} − 4`, `${X2} − 4`)} = ${fr(`2(${X2} − 2)`, `${X2} − 4`)},${BB}${UV} = ${fr(`(${x} − 1)(${x} + 1)`, `(${x} − 2)(${x} + 2)`)} = ${fr(`${X2} − 1`, `${X2} − 4`)}.`,
          `Because the target sum is ${P4}, which sits inside the cage ${TANB}, any genuine solution must live in the clean case ${rl(UV, '<', '1')}: the ±π corrections produce sums past ±${P2} and cannot reach ${P4}. Apply the tangent:${BB}${fr(`${u} + ${v}`, `1 − ${UV}`)} = ${fr(`2(${X2} − 2)`, `${X2} − 4`)} · ${fr(`${X2} − 4`, '−3')}${BB}= ${fr(`2(2 − ${X2})`, '3')}.`,
          `Setting this equal to tan${NB}${P4} = 1:<br>2(2 − ${X2}) = 3 ⟹ ${X2} = ${H}<br>⟹ ${x} = ±${R2}.`,
          `<b>Verify.</b> For ${X2} = ${H}: ${UV} = (−${H}) ÷ (−${fr('7', '2')}) = ${fr('1', '7')} < 1: the clean case holds, so both roots are genuine.`,
          `Numerical spot-check at ${x} ≈ 0.7071: the arguments are approximately 0.2265 and 0.6306, whose arctangents sum to about 0.7854 ≈ ${P4}.`,
        ],
        ans: `${x} = ±${R2}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Solve<br>${SINX} + ${SIN}(1 − ${x}) = ${COSX}.`,
        steps: [
          `<b>Step 1, domains.</b> ${x} ∈ ${M11} and 1 − ${x} ∈ ${M11}, i.e. ${x} ∈ ${Z02}. Intersection: ${x} ∈ ${Z01}.`,
          `<b>Step 3.</b> Take the cosine of both sides. Both ${SINX} and ${SIN}(1 − ${x}) lie in ${SINB}, so their cosines are the non-negative roots ${R1X2} and √(1 − (1 − ${x})<sup>2</sup>) = √(2${x} − ${X2}). The right side gives cos(${COSX}) = ${x}:<br>√[(1 − ${X2})(2${x} − ${X2})] − ${x}(1 − ${x}) = ${x}.`,
          `<b>Step 4.</b> Rearranged:<br>√[(1 − ${x})(1 + ${x}) ${x} (2 − ${x})]<br>= 2${x} − ${X2} = ${x}(2 − ${x}).`,
          `On the domain ${Z01} both sides are non-negative, so squaring is safe. Try ${x} = 0 first: it does not survive the division below (we divide by ${x}), so test it directly later. For ${x} ∈ ${iv('0', '1', '(', ']')} divide both sides by the positive quantity ${x}(2 − ${x}):<br>(1 − ${x})(1 + ${x}) = ${x}(2 − ${x})<br>⟹ 1 − ${X2} = 2${x} − ${X2} ⟹ ${x} = ${H}.`,
          `<b>Step 5, verify.</b> At ${x} = 0: the left side is 0 + ${P2} = ${P2} and ${of(COS, '0')} = ${P2}: valid. At ${x} = ${H}: ${of(SIN, H)} + ${of(SIN, H)} = ${P3} and ${of(COS, H)} = ${P3}: valid.`,
          `The root ${x} = 0 is exactly the kind a careless solver loses: it dies in the division step, so only a direct substitution rescues it.`,
        ],
        ans: `${x} = 0 or ${x} = ${H}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Solve the system<br>${SINX} + ${of(SIN, y)} = ${P2_3},<br>${COSX} − ${of(COS, y)} = ${P3}.`,
        steps: [
          `The move that unlocks the system is converting the second equation to arcsines via the complementary law ${of(COS, t)} = ${P2} − ${of(SIN, t)}, valid for every ${t} ∈ ${M11}:${BB}(${P2} − ${SINX}) − (${P2} − ${of(SIN, y)}) = ${P3}${BB}⟹ ${of(SIN, y)} − ${SINX} = ${P3}.`,
          `Add this to the first equation:<br>2${NB}${of(SIN, y)} = π ⟹ ${of(SIN, y)} = ${P2}<br>⟹ ${y} = 1.`,
          `Back-substitute: ${SINX} = ${P2_3} − ${P2} = ${P6}, so ${x} = ${H}.`,
          `<b>Verify in the untouched second equation:</b> ${of(COS, H)} − ${of(COS, '1')} = ${P3} − 0 = ${P3}.`,
        ],
        ans: `(${x},${NB}${y}) = (${H},${NB}1)`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Solve ${TANX} + ${of(TAN, `2${x}`)} = ${of(TAN, '3')}.`,
            a: `Taking the tangent gives ${fr(`3${x}`, `1 − 2${X2}`)} = 3, i.e. 2${X2} + ${x} − 1 = 0, so ${x} = ${H} or ${x} = −1. Check: the two arguments are ${x} and 2${x}, with product 2${X2}. At ${x} = ${H} the product is 2${X2} = ${H} < 1 and the sum reads off as ${of(TAN, '3')}: valid. At ${x} = −1 the product is 2${X2} = 2 > 1 with both arguments negative, so the true sum is −π + ${of(TAN, fr('−3', '−1'))} ≈ −1.89 rad, not ${of(TAN, '3')}: <b>extraneous</b>, killed by Step 5. Answer ${x} = ${H} only.`,
          },
          {
            q: `Solve 2${NB}${TAN}(cos${NB}${x}) = ${TAN}(2${NB}cosec${NB}${x}) for ${x} ∈ ${iv('0', '2π', '(', ')')}.`,
            a: `Take the tangent of both sides: ${fr(`2${NB}cos${NB}${x}`, `1 − cos<sup>2</sup>${NB}${x}`)} = ${fr('2', `sin${NB}${x}`)}, which simplifies to cos${NB}${x} = sin${NB}${x}, i.e. ${x} ≡ ${P4} (mod π). Both candidates in ${iv('0', '2π', '(', ')')} survive verification: at ${x} = ${P4} both sides equal ${TAN}(2√2); at ${x} = ${P5_4} both cosine and sine turn negative together, so both sides equal −${TAN}(2√2). Answer ${x} = ${P4}, ${P5_4}.`,
          },
          {
            q: `Solve ${of(TAN, fr(`1 − ${x}`, `1 + ${x}`))} = ${H}${NB}${TANX} for ${rl(x, '>', '−1')}.`,
            a: `Put ${x} = ${tf('tan', th)} with ${th} = ${TANX} ∈ ${TANB}. Then ${fr(`1 − ${x}`, `1 + ${x}`)} = tan(${P4} − ${th}), and for ${rl(x, '>', '−1')} the angle ${P4} − ${th} sits inside the cage, so the left side is ${P4} − ${th}. The equation becomes ${P4} − ${th} = ${fr(th, '2')}, giving ${th} = ${P6} and ${x} = ${R3}. Check: ${TAN}(2 − √3) = ${P12} = ${H} · ${P6}.`,
          },
          {
            q: `Solve ${T3} + ${of(COT, x)} = π.`,
            a: `Use ${of(COT, x)} = ${P2} − ${TANX}: then ${T2} = ${P2}, so ${x} = 1. Check: 3 · ${P4} + ${P4} = π.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 168–171 ────────────────
  {
    n: 'B',
    title: 'Conditional Identities: Reading the Relation Backwards',
    extra: true,
    kalam: 'Note the direction of travel: the angle condition implies the algebraic relation.',
    blocks: [
      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `A standing exam pattern hands you a condition like<br>${SUM3} = π<br>and asks for the purely algebraic relation between ${x}, ${y}, ${z}, or the reverse. The engine is a pair of identities that decompose the sine and cosine of a three-angle sum into products. Let ${A} = ${TANX}, ${B} = ${of(TAN, y)}, ${C} = ${of(TAN, z)}, and expand sin(${A} + ${B} + ${C}) and cos(${A} + ${B} + ${C}) with the addition formulas, then divide through by ${COS3}:${BB}sin(${A} + ${B} + ${C})<br>= ${COS3} (${x} + ${y} + ${z} − ${XYZ}),${BB}cos(${A} + ${B} + ${C})<br>= ${COS3} (1 − ${XY} − ${I('yz')} − ${I('zx')}).`,
      },
      {
        t: 'p',
        html: `Every term of the expansion divides cleanly: ${tf('sin', A)} ${tf('cos', B)} ${tf('cos', C)} contributes ${x}, and so on. Check each of the eight terms yourself; the minus signs come from cos(${A} + ${B}) = ${cosA} ${tf('cos', B)} − ${tf('sin', A)} ${tf('sin', B)}.`,
      },
      {
        t: 'p',
        html: `Two consequences fall out instantly, because ${COS3} > 0 whenever ${XYZPOS}:`,
      },
      {
        t: 'formula',
        kicker: 'Three arctangents adding to π',
        main: `For ${XYZPOS}:<br>${SUM3} = π<br>⟺ ${x} + ${y} + ${z} = ${XYZ}`,
        legend: [`${x}, ${y}, ${z} = positive real numbers`],
        note: `(sin of the sum vanishes but cos of the sum is −1 ≠ 0, so the first identity fires alone; conversely sin = 0 with the sum trapped in ${OPEN3} forces exactly π, since sin and cos cannot vanish together.)`,
      },
      {
        t: 'formula',
        kicker: 'Three arctangents adding to a right angle',
        main: `For ${XYZPOS}:<br>${SUM3} = ${P2}<br>⟺ ${XY} + ${I('yz')} + ${I('zx')} = 1`,
        legend: [`${x}, ${y}, ${z} = positive real numbers`],
        note: null,
      },
      {
        t: 'p',
        html: 'The same decomposition runs any conditional problem: write the angle sum, take the sine or cosine of both sides, expand, and read off the algebraic statement, minding which of sin and cos is allowed to vanish.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `If ${x}, ${y}, ${z} are positive and ${x} + ${y} + ${z} = ${XYZ}, prove that ${SUM3} = π.`,
        steps: [
          `Call the sum ${S} and the angles ${A}, ${B}, ${C}; each lies in ${iv('0', P2, '(', ')')}, so ${S} ∈ ${OPEN3} and every cosine is strictly positive. From the first identity,<br>sin${NB}${S} = ${COS3} (${x} + ${y} + ${z} − ${XYZ})<br>= 0.`,
          `Since sin${NB}${S} = 0 and ${S} ∈ ${OPEN3}, the only possibility is that ${S} is the one zero of sin inside that interval:<br>${S} = π. ■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Show that ${of(TAN, '1')} + ${of(TAN, '2')} + ${of(TAN, '3')} = π, and connect it to the chapter.`,
        steps: [
          `Here ${x} + ${y} + ${z} = 1 + 2 + 3 = 6 and ${XYZ} = 6, so the first result (three arctangents adding to π) applies directly and the sum is π. Cross-check against the chapter’s own third worked example in Topic 03, which computed ${of(TAN, '2')} + ${of(TAN, '3')} = ${P3_4} via the +π correction; adding ${of(TAN, '1')} = ${P4} gives π. One classic, two independent routes.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `If ${COSX} + ${of(COS, y)} + ${of(COS, z)} = π, prove that<br>${X2} + ${Y2} + ${Z2} + 2${XYZ} = 1.`,
        steps: [
          `Let ${A} = ${COSX}, ${B} = ${of(COS, y)}, ${C} = ${of(COS, z)}; each lies in ${ZPI}, so <b>all sines involved are non-negative</b>: this is what makes the derivation sign-safe, unlike the arcsine version. From ${A} + ${B} + ${C} = π we get ${A} + ${B} = π − ${C}, hence<br>cos(${A} + ${B}) = −cos${NB}${C} = −${z},<br>sin(${A} + ${B}) = sin${NB}${C} = ${R1Z2}.`,
          `Expand the left sides with ${x} = ${cosA}, ${R1X2} = ${tf('sin', A)}, and similarly for ${y}:<br>${XY} − ${R1X2}${R1Y2} = −${z}<br>⟹ ${R1X2}${R1Y2} = ${XY} + ${z},<br><br>${x}${R1Y2} + ${y}${R1X2} = ${R1Z2}.`,
          `Square the second equation only, substituting ${R1X2}${R1Y2} = ${XY} + ${z} in the cross term:<br>${X2}(1 − ${Y2}) + ${Y2}(1 − ${X2}) + 2${XY}(${XY} + ${z})<br>= 1 − ${Z2}.`,
          `The middle terms collapse: −${X2}${Y2} − ${X2}${Y2} + 2${X2}${Y2} = 0, leaving<br>${X2} + ${Y2} + 2${XYZ} = 1 − ${Z2}<br>⟹ ${X2} + ${Y2} + ${Z2} + 2${XYZ} = 1. ■`,
          'Note the direction of travel: the angle condition implies the algebraic relation. The converse needs extra hypotheses and is not claimed; quoting it backwards is a known Advanced-level trap.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `If ${TANX} + ${of(TAN, y)} = ${P2} with ${x}, ${rl(y, '>', '0')}, show that ${XY} = 1.`,
            a: `With ${A} = ${TANX} and ${B} = ${of(TAN, y)}, cos of the left side is cos(${P2}) = 0; expanding cos(${A} + ${B}) = ${cosA} ${tf('cos', B)} − ${tf('sin', A)} ${tf('sin', B)} and dividing by the positive product ${cosA} ${tf('cos', B)} (so that ${tf('tan', A)} = ${x}, ${tf('tan', B)} = ${y}) leaves 1 − ${XY} = 0.`,
          },
          {
            q: `If ${SINX} + ${of(SIN, y)} = ${P2}, show that ${X2} + ${Y2} = 1.`,
            a: `Convert: ${of(SIN, y)} = ${P2} − ${SINX} = ${COSX}, so ${y} = sin(${COSX}) = ${R1X2}. Squaring gives ${X2} + ${Y2} = 1. Since ${of(SIN, y)} = ${COSX} lies in ${ZPI2}, both ${rl(x, '≥', '0')} and ${rl(y, '≥', '0')} are forced: the relation is ${X2} + ${Y2} = 1 with ${x}, ${rl(y, '≥', '0')}.`,
          },
          {
            q: `If ${COSX} + ${of(COS, y)} = ${P2}, show that ${X2} + ${Y2} = 1.`,
            a: `Since ${of(COS, y)} = ${P2} − ${COSX}, take the cosine of both sides:<br>${y} = cos(${P2} − ${COSX})<br>= sin(${COSX}) = ${R1X2},<br>giving ${X2} + ${Y2} = 1.`,
          },
          {
            q: `If ${XYZPOS} and ${XY} + ${I('yz')} + ${I('zx')} = 1, prove ${SUM3} = ${P2}.`,
            a: `This is the second result (three arctangents adding to a right angle), converse direction. cos${NB}${S} = ${COS3} (1 − ${XY} − ${I('yz')} − ${I('zx')}) = 0 with every factor cosine positive, so cos${NB}${S} = 0; since ${S} ∈ ${OPEN3} and sin${NB}${S} ≠ 0 (else both vanish), the only possibility is ${S} = ${P2}. Sanity check at ${x} = ${y} = ${z} = ${R3}: the sum is three copies of ${P6}.`,
          },
          {
            q: `If ${SINX} + ${of(COS, y)} = π, find the relation between ${x} and ${y}, with all restrictions.`,
            a: `Domains force ${x} ∈ ${Z01}: from ${of(COS, y)} = π − ${SINX} ≤ π we need ${rl(SINX, '≥', '0')}. Then<br>${y} = cos(π − ${SINX})<br>= −cos(${SINX}) = −${R1X2}.<br>Relation: ${X2} + ${Y2} = 1 with ${x} ∈ ${Z01} and ${y} ∈ ${iv('−1', '0')}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 171–173 ────────────────
  {
    n: 'C',
    title: 'Multiple Angles Over the Whole Real Line',
    extra: true,
    kalam: 'The lesson generalises: whenever an exam equates two such expressions, do not manipulate; tabulate.',
    blocks: [
      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `The chapter’s multiple-angle table states, for instance, ${T2} = ${of(TAN, F2X_M)} only for ${rl(ABSX, '<', '1')}. JEE repeatedly asks for the simplification of the reverse direction ${ESTIMATE}, expressing ${of(TAN, F2X_M)} in terms of ${TANX}, for <b>all</b> admissible real ${x}. The recipe is pure Topic 01 range-folding, run with a variable angle.`,
      },
      {
        t: 'p',
        html: `1. Put ${th} = ${TANX}, so ${th} ∈ ${TANB} and ${tf('tan', th)} = ${x}.<br>2. Rewrite the argument as a trig function of ${m}${th} using the double/triple angle formulas: e.g. ${F2X_P} = sin${NB}2${th}.<br>3. Locate the interval containing ${m}${th}; the breakpoints occur where ${m}${th} hits an odd multiple of ${P2} (for an outer ${SIN} or ${TAN}; for an outer ${COS}, a multiple of π), i.e. where ${x} = ${tf('tan', th)} crosses ±tan${NB}${fr(`(2${j} + 1)π`, `2${m}`)}.<br>4. Fold ${m}${th} into the outer function’s cage using a value-preserving identity, exactly as in Topic 01.<br>5. Translate back: ${th} = ${TANX}.`,
      },

      { t: 'part', title: 'The completed tables' },
      {
        t: 'p',
        html: `With ${th} = ${TANX} throughout, and noting 2${th} ∈ ${iv('−π', 'π', '(', ')')}, 3${th} ∈ ${iv(`−${P3_2}`, P3_2, '(', ')')}:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Expression', 'Condition on x', 'Value'],
        rows: [
          [of(SIN, F2X_P), rl(ABSX, '≤', '1'), T2],
          ['', rl(x, '>', '1'), `π − ${T2}`],
          ['', rl(x, '<', '−1'), `−π − ${T2}`],
          [of(COS, F1MX_P), rl(x, '≥', '0'), T2],
          ['', rl(x, '<', '0'), `−${T2}`],
          [`${of(TAN, F2X_M)}, ${rl(x, '≠', '±1')}`, rl(ABSX, '<', '1'), T2],
          ['', rl(x, '>', '1'), `${T2} − π`],
          ['', rl(x, '<', '−1'), `${T2} + π`],
          [`${of(TAN, F3X)}, ${rl(x, '≠', `±${R3}`)}`, rl(ABSX, '<', R3), T3],
          ['', rl(x, '>', R3), `${T3} − π`],
          ['', rl(x, '<', `−${R3}`), `${T3} + π`],
        ],
      },
      {
        t: 'p',
        html: `<b>Where each row comes from.</b> For the sine row: ${rl(ABSX, '≤', '1')} puts 2${th} inside the ${SIN} cage, giving 2${th} directly; ${rl(x, '>', '1')} puts 2${th} ∈ ${iv(P2, 'π', '(', ')')}, and sin(π − 2${th}) = sin${NB}2${th} with π − 2${th} ∈ ${iv('0', P2, '(', ')')} legal, so fold to π − 2${th}; the case ${rl(x, '<', '−1')} mirrors it by oddness. The cosine row breaks at ${x} = 0, not at ${x} = ±1, because the cage ${ZPI} already contains all of ${iv('0', 'π', '[', ')')}: only negative 2${th} needs reflecting to −2${th} ∈ ${iv('0', 'π', '(', ')')} via cos(−${t}) = cos${NB}${t}. For the tangent triples: ${rl(x, '>', R3)} pushes 3${th} past ${P2}, and the fold 3${th} ↦ 3${th} − π stays legal across both remaining sub-intervals, which is why the table needs only one row for all ${rl(x, '>', R3)}.`,
      },
      {
        t: 'p',
        html: `Spot-checks you can run in seconds: at ${x} = √3, row one predicts π − ${P2_3} = ${P3}, and indeed ${of(SIN, fr('√3', '2'))} = ${P3}. As ${x} → 1<sup>+</sup>, the tangent-double row predicts 2 · ${P4} − π = −${P2}, and indeed the argument ${F2X_M} → −∞, so ${of(TAN, F2X_M)} → −${P2}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${of(SIN, fr(`2${a}`, `1 + ${sq(a)}`))} + ${of(COS, fr(`1 − ${sq(a)}`, `1 + ${sq(a)}`))} for ${rl(a, '>', '1')}.`,
        steps: [
          `Row one, case ${rl(a, '>', '1')}: the first term is π − 2${NB}${of(TAN, a)}. Cosine row, case ${rl(a, '>', '0')}: the second term is 2${NB}${of(TAN, a)}. The variable parts annihilate:<br>(π − 2${NB}${of(TAN, a)}) + 2${NB}${of(TAN, a)}<br>= π.`,
          `<b>Numeric confirmation at ${a} = 2:</b> ${of(SIN, fr('4', '5'))} ≈ 0.9273 and ${COS}(−${fr('3', '5')}) ≈ 2.2143; the sum is ≈ 3.1416. The answer is π for every ${rl(a, '>', '1')}: a constancy that is invisible without the piecewise table, since for 0 ≤ ${a} ≤ 1 the same sum equals 4${NB}${of(TAN, a)} and varies.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find all real ${x} satisfying<br>${T2} = ${of(SIN, F2X_P)}.`,
        steps: [
          `Read the table as a comparison of two functions of ${x}. The two sides agree exactly on the row where both entries coincide, namely ${rl(ABSX, '≤', '1')}. For ${rl(x, '>', '1')} the right side is π − ${T2}, strictly smaller than the left side ${T2} (the left side minus the right side is 4${NB}${TANX} − π > 0 because ${rl(TANX, '>', P4)} there); for ${rl(x, '<', '−1')} the mismatch mirrors by oddness. Neither side is ever undefined, so nothing is excluded.`,
          `The lesson generalises: whenever an exam equates two such expressions, do not manipulate; tabulate. Each side is piecewise linear in ${TANX}, and the solution set is read off row by row.`,
        ],
        ans: `${x} ∈ ${M11}`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Express ${of(SIN, fr('4', '5'))} in terms of ${of(TAN, '2')}.`,
            a: `Since 2 > 1, row one gives π − 2${NB}${of(TAN, '2')}. Check numerically: π − 2(1.1071) ≈ 0.9273 = ${of(SIN, '0.8')}.`,
          },
          {
            q: `Express ${COS}(−${fr('4', '5')}) in terms of ${of(TAN, '3')}.`,
            a: `With ${x} = 3 > 0 the cosine row gives 2${NB}${of(TAN, '3')}; and indeed ${COS}(−0.8) ≈ 2.4981 ≈ 2(1.2490).`,
          },
          {
            q: `Express ${of(TAN, fr('3', '4'))} in terms of ${of(TAN, '3')}.`,
            a: `Recognise ${fr('3', '4')} = ${fr('2(−3)', '1 − (−3)<sup>2</sup>')}, so ${x} = −3 < −1 and the tangent-double row gives<br>2${NB}${TAN}(−3) + π<br>= π − 2${NB}${of(TAN, '3')} ≈ 0.6435.`,
          },
          {
            q: `Find all real ${x} with ${of(COS, F1MX_P)} = −${T2}.`,
            a: `The two sides match precisely on the row ${rl(x, '<', '0')}, and at ${x} = 0 both sides equal 0. Answer: ${rl(x, '≤', '0')}.`,
          },
          {
            q: `Find all real ${x} satisfying ${of(TAN, F3X)} = ${T3} − π.`,
            a: `The right-hand pattern holds exactly for ${rl(x, '>', R3)} (the expression is undefined at ${x} = ±${R3}, and ${x} = ${R3} is excluded by the strict inequality anyway). Answer: ${rl(x, '>', R3)}. Spot-check at ${x} = 2: left side ${of(TAN, fr('2', '11'))} ≈ 0.1799; right side 3(1.1071) − π ≈ 0.1799.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 174–176 ────────────────
  {
    n: 'D',
    title: 'The Folded Composites as Functions: Waves and Solution Counts',
    extra: true,
    kalam: 'Bound the search space before sweeping, and reject any piecewise candidate that lands outside the piece that produced it.',
    blocks: [
      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Topic 01 folds a fixed angle into a branch. Promote the angle to a variable and the fold becomes a function of ${x}, and these three functions dominate JEE Advanced solution-counting questions ${ESTIMATE} because each is piecewise linear: a triangle wave or a sawtooth.`,
      },
      {
        t: 'p',
        html: `<b>1. ${FSIN} = ${SIN}(sin${NB}${x}): the triangular wave.</b> Odd, and periodic with period 2π because sin is. The chapter already derived its two core pieces: ${FSIN} = ${x} on ${SINB} and ${FSIN} = π − ${x} on ${iv(P2, P3_2)} (Topic 01’s fourth worked example, part (b)). Translating by the period gives, for every integer ${k}:${BB}${FSIN} = ${x} − 2${k}π<br>on ${iv(`−${P2} + 2${k}π`, `${P2} + 2${k}π`)},${BB}${FSIN} = (2${k} + 1)π − ${x}<br>on ${iv(`${P2} + 2${k}π`, `${P3_2} + 2${k}π`)}.`,
      },
      {
        t: 'p',
        html: `Continuity at the joins is immediate: at ${x} = ${P2} + 2${k}π both formulas return ${P2}; at ${x} = ${P3_2} + 2${k}π both return −${P2}. The graph is a zigzag of slope ±1 with corners at ${x} = ${P2} + ${k}π, range ${SINB}.`,
      },
      {
        t: 'p',
        html: `<b>2. ${GX} = ${COS}(cos${NB}${x}): the second triangular wave.</b> Even, period 2π, and on the fundamental period:<br>${GX} = ${x} on ${ZPI},<br>${GX} = 2π − ${x} on ${PI2PI},<br>since cos(2π − ${x}) = cos${NB}${x}. Corners at multiples of π; range ${ZPI}.`,
      },
      {
        t: 'p',
        html: `<b>3. ${HX} = ${TAN}(tan${NB}${x}): the sawtooth.</b> Period π; on each open strip ${iv(`−${P2} + ${k}π`, `${P2} + ${k}π`, '(', ')')} it equals ${x} − ${k}π, slope 1, jumping from +${P2} down to −${P2} at every ${x} = ${P2} + ${k}π, where it is undefined. Range ${TANB}.`,
      },
      {
        t: 'p',
        html: `<b>Counting principle.</b> Because each function is monotonic on each linear piece, an equation like ${FSIN} = ${c} is solved per piece,<br>and the count follows.`,
      },
      {
        t: 'p',
        html: `For ${abs(c)} < ${P2}, the equation ${FSIN} = ${c} has exactly two solutions per period; at ${c} = ±${P2} the two solutions fuse at a corner into one.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Function', 'Period', 'Range', 'Shape'],
        rows: [
          [`${SIN}(sin${NB}${x})`, '2π', SINB, `triangle wave, slopes ±1, corners at ${P2} + ${k}π`],
          [`${COS}(cos${NB}${x})`, '2π', ZPI, `triangle wave, slopes ±1, corners at ${k}π`],
          [`${TAN}(tan${NB}${x})`, 'π', TANB, `sawtooth, slope 1, jumps at ${P2} + ${k}π`],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `(a) Evaluate ${SIN}(sin${NB}10). (b) Count the solutions of ${SIN}(sin${NB}${x}) = ${P4} in ${Z2PI}.`,
        steps: [
          `<b>(a)</b> Locate 10 in the piece map. Since 10 ∈ ${iv(`${P2} + 2π`, `${P3_2} + 2π`)} (as ${P5_2} ≈ 7.85 and ${P7_2} ≈ 11.00), use the falling piece with ${k} = 1:<br>${f}(10) = 3π − 10 ≈ −0.575.`,
          `<b>Check:</b> sin(3π − 10) = sin(π − 10) = sin${NB}10 ≈ −0.544, and 3π − 10 ≈ −0.575 lies inside ${SINB}. Answer 3π − 10.`,
          `<b>(b)</b> Sweep the three pieces covering ${Z2PI}: on ${ZPI2}, ${x} = ${P4}: one hit. On ${iv(P2, P3_2)}, π − ${x} = ${P4} gives ${x} = ${P3_4}: one hit. On ${iv(P3_2, '2π')} the rising piece reads ${x} − 2π = ${P4}, giving ${x} = ${P9_4}, outside the interval: no hit. Total: <b>two solutions</b>, ${x} = ${P4} and ${x} = ${P3_4}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the number of real solutions of<br>${COS}(cos${NB}${x}) = ${fr(ABSX, '2')}.`,
        steps: [
          `Both sides are even, so solve for ${rl(x, '≥', '0')} and reflect. Also, ${GX} ≤ π everywhere, while ${fr(x, '2')} ≤ π forces ${x} ≤ 2π: the search space closes automatically. On ${Z2PI} the wave is ${GX} = ${x} then ${GX} = 2π − ${x}.`,
          `Piece one, ${ZPI}: ${x} = ${fr(x, '2')} gives ${x} = 0: valid, since ${g}(0) = ${of(COS, '1')} = 0.`,
          `Piece two, ${PI2PI}: 2π − ${x} = ${fr(x, '2')} gives ${x} = ${P4_3} ≈ 4.19, which does lie in ${PI2PI}: valid.`,
          `Past 2π the search is closed, so the non-negative solutions are 0 and ${P4_3}; reflection adds −${P4_3}.`,
          `The mark-winning habits: bound the search space before sweeping (here ${x} ≤ 2π came free from the range), and reject any piecewise candidate that lands outside the piece that produced it.`,
        ],
        ans: `three solutions: ${x} = 0, ±${P4_3}`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `State the period, range, and corner positions of ${SIN}(sin${NB}${x}).`,
            a: `Period 2π; range ${SINB}; corners at ${x} = ${P2} + ${k}π for every integer ${k}.`,
          },
          {
            q: `Evaluate ${COS}(cos${NB}4), working in radians.`,
            a: `Since π ≈ 3.14 < 4 < 2π ≈ 6.28, the falling piece applies: ${g}(4) = 2π − 4 ≈ 2.283.`,
          },
          {
            q: `Evaluate ${TAN}(tan${NB}${P7_4}).`,
            a: `${P7_4} lies in the strip ${iv(P3_2, P5_2, '(', ')')}, where ${HX} = ${x} − 2π = −${P4}; answer −${P4}. (Equivalent fold: tan${NB}${P7_4} = −1.)`,
          },
          {
            q: `How many solutions does ${SIN}(sin${NB}${x}) = 0.6 have in ${iv('−2π', '2π')}?`,
            a: `Two solutions per period for a level strictly between the corner heights, and the interval spans two full periods: <b>four</b> solutions, namely ${x} = 0.6, π − 0.6 and their translates by −2π: ${x} = 0.6 − 2π, −π − 0.6.`,
          },
          {
            q: `Solve ${COS}(cos${NB}${x}) = ${fr(x, '2')} for ${x} ∈ ${Z2PI}.`,
            a: `On ${ZPI}: ${x} = ${fr(x, '2')} forces ${x} = 0. On ${PI2PI}: 2π − ${x} = ${fr(x, '2')} gives ${x} = ${P4_3}. Answer ${x} = 0 and ${x} = ${P4_3}: the even-reflection of this topic’s second worked example cut off at the origin.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic E · pp. 176–178 ────────────────
  {
    n: 'E',
    title: 'Domains and Ranges of Composite Inverse Trigonometric Functions',
    extra: true,
    kalam: 'The chapter lists the six bare domains but never builds functions out of them.',
    blocks: [
      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'The chapter lists the six bare domains but never builds functions out of them. Two reflexes cover nearly every exam question of this type.',
      },
      {
        t: 'proc',
        title: 'Finding a domain',
        steps: [
          `Write one constraint per inverse part: argument of ${SIN} or ${COS} in ${M11}; argument of ${SEC} or ${CSC} with modulus at least 1; ${TAN} and ${COT} free; plus whatever the surrounding algebra demands (radicals, denominators, logarithms).`,
          `Intersect the constraints. For a quadratic argument, complete the square before solving the two-sided inequality −1 ≤ ${q}(${x}) ≤ 1; one side is often automatic.`,
          'For a fractional argument, split on the sign of the denominator rather than multiplying blindly.',
        ],
      },
      {
        t: 'proc',
        title: 'Finding a range',
        steps: [
          `Reduce the expression to a single inverse function using the complementary laws ${SINX} + ${COSX} = ${P2} and friends: this is the single most profitable move in range problems.`,
          `Use monotonicity: each inverse function is increasing or decreasing on its domain (${SEC} and ${CSC} on each of their two pieces separately; the chapter’s graph table, in Topic 04’s Key results, conversions and graph properties part), so a sum of same-direction monotonic functions on an interval attains its extreme values at the endpoints of that interval.`,
          'State the range as the image of the endpoints, adjusted for open domains.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: `Find the domain and range of ${I('F')}(${x}) = ${COS}(${X2} − 4${x} + 3).`,
        steps: [
          `Constraint: −1 ≤ ${X2} − 4${x} + 3 ≤ 1. Upper side:<br>${X2} − 4${x} + 2 ≤ 0 ⟺ (${x} − 2)<sup>2</sup> ≤ 2<br>⟺ 2 − √2 ≤ ${x} ≤ 2 + √2.`,
          `Lower side:<br>${X2} − 4${x} + 4 ≥ 0 ⟺ (${x} − 2)<sup>2</sup> ≥ 0,<br>true for every real ${x}: automatic, as promised. Domain: ${iv('2 − √2', '2 + √2')}.`,
          `Range: on this domain the argument equals (${x} − 2)<sup>2</sup> − 1, which runs continuously from −1 at the centre ${x} = 2 up to 2 − 1 = 1 at both endpoints. So the argument attains every value in ${M11}, and ${COS}, being continuous and decreasing, delivers every value of ${ZPI}. Range: ${ZPI}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the largest domain of ${I('G')}(${x}) = ${of(SIN, fr(`${x} + 1`, `${x} − 2`))}.`,
        steps: [
          `Rewrite the argument ${t} as 1 + ${fr('3', `${x} − 2`)} and impose −1 ≤ ${t} ≤ 1.`,
          `Condition ${rl(t, '≤', '1')}: ${fr('3', `${x} − 2`)} ≤ 0, which forces ${rl(x, '<', '2')}.`,
          `Condition ${rl(t, '≥', '−1')}: ${fr('3', `${x} − 2`)} ≥ −2; multiplying by the negative quantity ${x} − 2 reverses the inequality:<br>3 ≤ −2(${x} − 2) ⟺ 3 ≤ −2${x} + 4<br>⟺ ${x} ≤ ${H}.`,
          `Intersecting: domain ${iv('−∞', H, '(', ']')}. Spot-check: at ${x} = 0 the argument is −${H}: legal; at ${x} = 1 it is −2: illegal, correctly excluded since 1 > ${H}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the range of ${I('H')}(${x}) = ${SINX} + ${TANX} on its natural domain.`,
        steps: [
          `Both parts are defined on ${M11}, so that is the domain. Both parts are increasing there (chapter graph table), so ${I('H')} is increasing, and its range runs from endpoint to endpoint:${BB}${I('H')}(−1) = −${P2} − ${P4} = −${P3_4},${BB}${I('H')}(1) = ${P2} + ${P4} = ${P3_4}.`,
          `Range: ${iv(`−${P3_4}`, P3_4)}. No calculus was needed: monotonicity of the two pieces is a stated graph property of the chapter.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the domain of ${SIN}(2${x} − 1).`,
            a: `−1 ≤ 2${x} − 1 ≤ 1 gives 0 ≤ 2${x} ≤ 2, so ${x} ∈ ${Z01}.`,
          },
          {
            q: `Find the largest domain of ${of(SEC, x)} + ${TANX}.`,
            a: `${TAN} accepts anything; ${SEC} demands ${rl(ABSX, '≥', '1')}. Domain ${iv('−∞', '−1', '(', ']')} ∪ ${iv('1', '∞', '[', ')')}.`,
          },
          {
            q: `Find the range of ${I('K')}(${x}) = 2${NB}${SINX} − ${COSX}.`,
            a: `Deploy the complementary law, ${COSX} = ${P2} − ${SINX}:<br>${I('K')}(${x}) = 2${NB}${SINX} − ${P2} + ${SINX}<br>= 3${NB}${SINX} − ${P2},<br>and ${SINX} ∈ ${SINB}, so the range is<br>${iv(`−${P3_2} − ${P2}`, `${P3_2} − ${P2}`)}<br>= ${iv('−2π', 'π')}.`,
          },
          {
            q: `For how many integers ${x} is ${COS}(${x} − 1) + ${SIN}(1 − ${x}) defined?`,
            a: `First part needs −1 ≤ ${x} − 1 ≤ 1, i.e. ${x} ∈ ${Z02}; second part needs −1 ≤ 1 − ${x} ≤ 1, i.e. ${x} ∈ ${Z02}. Intersection ${Z02} contains the integers 0, 1, 2: <b>three</b> integers.`,
          },
          {
            q: `Find the domain of ${of(SIN, F2X_P)}.`,
            a: `Every real ${x}: the claim ${fr(`2${ABSX}`, `1 + ${X2}`)} ≤ 1 is equivalent to (${ABSX} − 1)<sup>2</sup> ≥ 0. Domain ℝ: the same fact that makes Additional topic C’s sine row defined everywhere.`,
          },
          {
            q: `Find the range of ${I('P')}(${x}) = ${SINX} + ${of(SEC, x)}.`,
            a: `The domain is the intersection ${M11} ∩ {${rl(ABSX, '≥', '1')}} = {−1, 1}: two points. Evaluate both: ${I('P')}(1) = ${P2} + 0 = ${P2} and ${I('P')}(−1) = −${P2} + π = ${P2}. Range: the singleton {${P2}}. The function is constant: the kind of answer no amount of formula-pushing anticipates, and exactly why the domain gate comes first.`,
          },
        ],
      },
    ],
  },
];
