import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Additional topic P, pp. 630–637 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 630, below the rule that closes
 * Addendum D's closing note, and ends on p. 637; Chapter 10 starts on p. 638. The
 * "Scope." paragraph is the "Introduction"; the numbered headings "1. The
 * distribution" … "5. Reflexes worth drilling" are the parts, without their
 * numbers. The distribution table is a table block, its "Evidence" column now
 * "Papers cited": the papers it names, counted by exam (a paper before 2013 is
 * "JEE"; "Online" is "Main Online"), and its runs of years told without the years.
 * Each archetype A–G is a worked example tagged with its heading: its method text
 * and its "Representative" problem are the question, the working the steps, its
 * boxed result (where printed) the answer box. The traps 1–8 are one mistakes
 * block; the graded practice set P1–P12 is one practice block, each "Solution."
 * its answer. Exam years, dates and shifts are dropped from every tag ("[Main Jan
 * 8, 2020 (II)]" → "[Main]"; "[2005]" → "[JEE]"; "[JEE 2011]" → "[JEE]"), and
 * every share or frequency of past questions carries the estimate label. Italic
 * words in print are plain here. These pages print no drawing and no formula card
 * (vector shapes: only the rules between sections and the boxes round results).
 * d/dx with an upright d; y′ as printed; IF upright, its exponent integral
 * plain inside the raised run (a slash kept there, dy/y). Every fraction is
 * stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const b = I('b');
const c = I('c');
const e = 'e';
const g = I('g');
const t = I('t');
const u = I('u');
const v = I('v');
const x = I('x');
const y = I('y');
const C = I('C');
const al = I('α');

const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
const pw = (s: string, k: string) => `${s}<sup>${k}</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** A pair, its comma glued: (1, 1). */
const pt = (a: string, d: string) => `(${a},${NB}${d})`;
/** A function name glued to its argument: "sin x". */
const fn = (name: string, arg: string) => `${name}${NB}${arg}`;
const ex = (s: string) => `${e}<sup>${s}</sup>`;

/** Derivatives: an upright d over an upright d. */
const d = (top: string, bottom: string) => fr(`d${top}`, `d${bottom}`);
const DYDX = d(y, x);
const DXDY = d(x, y);
const DVDX = d(v, x);
const DTDX = d(t, x);
const DUDX = d(u, x);
const DDX = fr('d', `d${x}`);
const DDY = fr('d', `d${y}`);
/** Differentials glued to what precedes them. */
const DX = `${NB}d${x}`;
const DY = `${NB}d${y}`;
const DV = `${NB}d${v}`;

const yp = `${y}′`;
const vp = `${v}′`;
const gp = `${g}′`;
const YP2 = `(${yp})<sup>2</sup>`;
const YYP = `${y}${yp}`;
const X2 = sq(x);
const Y2 = sq(y);
const V2 = sq(v);
const X3 = cube(x);
const T2 = sq(t);
const PLUS_C = ` + ${C}`;
const HALF = fr('1', '2');
const PI2 = fr('π', '2');
const c1 = sb(c, '1');
const c2 = sb(c, '2');
const c3 = sb(c, '3');
const c4 = sb(c, '4');
const c5 = sb(c, '5');
const x0 = sb(x, '0');
const SINX = fn('sin', x);
const COSX = fn('cos', x);
const TAN4X = fn('tan', `4${x}`);
const ATAN = 'arctan';
const gx = `${g}(${x})`;
const gpx = `${gp}(${x})`;
const EG = ex(g);
/** The family x² = 4b(y + b) of Archetype A and P3. */
const FAM = `${X2} = 4${b}(${y} + ${b})`;
/** The equation (x² − y²) dx + 2xy dy = 0 of Archetype C and P5. */
const HOMOG = `(${X2}${NB}−${NB}${Y2})${DX}${NB}+${NB}2${I('xy')}${DY}${NB}=${NB}0`;
/** The equation of Archetype E and P7. */
const FLIP = `${y}${DX} + ${Y2}${DY} = ${x}${DY}`;
/** The equation of Archetype G and P9. */
const SUBEQ = `(${Y2}${NB}−${NB}${X3})${DX}${NB}−${NB}${I('xy')}${DY}${NB}=${NB}0`;
/** The abstract linear equation of Archetype F and P8. */
const ABSTRACT = `${yp} + ${y}${NB}${gpx} = ${gx}${gpx}`;
/** ln|(1 + x − y)/(1 − x + y)|. */
const LNRATIO = `ln${NB}${abs(fr(`1 + ${x} − ${y}`, `1 − ${x} + ${y}`))}`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 630–637 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>Scope.</b> This section summarises the types of differential-equation questions that have appeared in JEE papers over nearly four decades, with a worked representative for each recurring archetype and a graded practice set.',
      },

      { t: 'part', title: 'The distribution' },
      { t: 'p', html: `Judged from roughly 45–50 past JEE questions spanning nearly four decades ${ESTIMATE}:` },
      {
        t: 'table',
        title: null,
        head: ['Cluster', 'Share of questions', 'Papers cited'],
        rows: [
          [
            'Linear ODEs (all disguises)',
            'Close to half',
            'Roughly 20 or more (Main at least 16, JEE 2, Adv across five years): nearly every solvable Mains item over the decade surveyed, most of them from the latest two years. The integrating-factor method appears throughout.',
          ],
          ['Homogeneous / reducible-to-separable', 'About one in five', '9 (JEE 4, Main 3 including one Main Online, Adv 2)'],
          [
            'Formation of a DE from a family',
            'About one in six',
            '8 (JEE 4, Main 3 including two Main Online, Adv 1): steady presence, at least one item in most recent sessions (the cited papers are older ones; the current JEE Main syllabus no longer names formation, as far as we know).',
          ],
          ['Plain separable', 'Small, usually fused with another skill', '3 (Main 2, Adv 1)'],
          [
            'Applications (growth, cooling, tanks, cones)',
            'Clustered in the older JEE papers',
            '5 (JEE 5): cone, hemispherical tank, population, normal-length, tangent-length. Almost absent from recent JEE Main papers.',
          ],
          [
            'Structural / conceptual',
            'A thin but recurring Advanced thread',
            '5 (JEE 2, Main 1, Adv 2): comparing two solutions of one linear ODE (JEE), verify-the-solution MCQ (JEE), functional equations converted to ODEs (Adv twice, Main).',
          ],
        ],
      },
      {
        t: 'p',
        html: `Two facts worth internalising:<br>• <b>Examiners recycle.</b> ${HOMOG} through ${pt('1', '1')} was asked in Main Online <b>and again</b> in a later Main paper. Learning shapes pays better than memorising answers.<br>• <b>Standalone “find the order/degree” MCQs are rarer than the board-style drill suggests.</b> In past JEE papers, order/degree questions almost always arrive inside a formation problem (e.g. the JEE item of practice P1: order 1, degree 3 after squaring) ${ESTIMATE}. The pure “degree not defined” drill is a board/CUET staple, not a JEE Main regular: the evidence for it in past papers is thin.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'Archetype A: Formation from a geometric family (one parameter)',
        q: `Differentiate once, isolate the parameter, substitute back. Predict the order from the parameter count before differentiating.<br><br><b>Representative</b> [Main]: family ${FAM}.`,
        steps: [
          `${X2} = 4${b}${y} + 4${sq(b)}<br>⇒ 2${x} = 4${b}${yp} ⇒ ${b} = ${fr(x, `2${yp}`)}`,
          `Substitute back:<br>${X2} = 4 ⋅ ${fr(x, `2${yp}`)}(${y} + ${fr(x, `2${yp}`)})<br>= ${fr(`2${I('xy')}`, yp)} + ${fr(X2, YP2)}`,
          `Multiply through by ${YP2} and divide by ${x}:`,
        ],
        ans: `${x}${YP2} = 2${YYP} + ${x}`,
      },
      {
        t: 'ex',
        tag: 'Archetype B: Counting independent constants',
        q: `<b>Representative</b> [JEE]: order of the DE whose solution is ${y} = (${c1}${NB}+${NB}${c2})${NB}cos(${x}${NB}+${NB}${c3})${NB}−${NB}${c4}${ex(`${x}+${c5}`)}.`,
        steps: [
          `Expand before counting:<br>cos(${x} + ${c3}) = ${COSX}${NB}cos${NB}${c3} − ${SINX}${NB}sin${NB}${c3}`,
          `so the first term carries two independent constants (coefficients of ${COSX}, ${SINX}), and ${c4}${ex(c5)} collapses to one. Total: 3 independent constants, so the answer is <b>order 3</b>, not the naive 5.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype C: Homogeneous equation, y = vx',
        q: `<b>Representative</b> [Main; Main Online]: solve ${HOMOG} through ${pt('1', '1')}.`,
        steps: [
          `${DYDX} = ${fr(`${Y2} − ${X2}`, `2${I('xy')}`)}`,
          `Put ${y} = ${v}${x}, so ${yp} = ${v} + ${x}${vp}:<br>${v} + ${x}${vp} = ${fr(`${V2} − 1`, `2${v}`)} ⇒ ${x}${DVDX} = −${fr(`1 + ${V2}`, `2${v}`)}`,
          `Separate and integrate:<br>${fr(`2${v}${DV}`, `1 + ${V2}`)} = −${fr(`d${x}`, x)} ⇒ ln(1 + ${V2}) = −ln${NB}${x} + ln${NB}${C}`,
          `Back-substitute ${v} = ${fr(y, x)}: ${X2} + ${Y2} = ${C}${x}. Through ${pt('1', '1')}, ${rel(C, '=', '2')}:`,
        ],
        ans: `(${x} − 1)<sup>2</sup> + ${Y2} = 1, a circle of radius one with centre on the ${x}-axis.`,
      },
      {
        t: 'ex',
        tag: 'Archetype D: Reducible to separable by a linear substitution (t = x ± y)',
        q: `When neither separation nor homogeneity applies, look for a combination whose derivative simplifies.<br><br><b>Representative</b> [Main]: ${DYDX} = (${x} − ${y})<sup>2</sup>, ${y}(1)${NB}=${NB}1.`,
        steps: [
          `Put ${t} = ${x} − ${y}, so ${DTDX} = 1 − ${yp} = 1 − ${T2}:<br>∫${fr(`d${t}`, `1 − ${T2}`)} = ∫d${x} ⇒ ${HALF}${NB}ln${NB}${abs(fr(`1 + ${t}`, `1 − ${t}`))} = ${x}${PLUS_C}`,
          `${rel(t, '=', '0')} at ${rel(x, '=', '1')} gives ${C} = −1, so ${LNRATIO}${NB}=${NB}2(${x}${NB}−${NB}1).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Archetype E: Linear, but in the other variable',
        q: `<b>Representative</b> [JEE]: ${FLIP}, ${rel(y, '>', '0')}, ${y}(1)${NB}=${NB}1; find ${y}(−3).`,
        steps: [
          `As written this is nonlinear in ${y}. Flip to ${DXDY}:<br>${DXDY} − ${fr(x, y)} = −${y}, IF = ${ex(`∫−d${y}/${y}`)} = ${fr('1', y)}<br>${DDY}(${fr(x, y)}) = −1 ⇒ ${fr(x, y)} = −${y}${PLUS_C}`,
          `${y}(1)${NB}=${NB}1 gives ${rel(C, '=', '2')}, so ${x} = 2${y} − ${Y2}. At ${x} = −3: ${Y2} − 2${y} − 3 = 0, giving ${rel(y, '=', '3')} or ${y} = −1; the condition ${rel(y, '>', '0')} selects`,
        ],
        ans: `${y} = 3`,
      },
      {
        t: 'ex',
        tag: 'Archetype F: Abstract linear ODE (structure, not computation)',
        q: `<b>Representative</b> [JEE]: ${ABSTRACT} with ${g}(0)${NB}=${NB}${g}(2)${NB}=${NB}0, ${y}(0)${NB}=${NB}0. Find ${y}(2).`,
        steps: [
          `IF = ${ex(gx)}, so<br>${DDX}(${y}${NB}${EG}) = ${gp}${EG}${NB}${g} ⇒ ${y}${NB}${EG} = ${EG}(${g} − 1)${PLUS_C}<br>using ∫${g}${NB}${EG}${NB}d${g} = ${EG}(${g} − 1).`,
          `Now ${y}(0)${NB}=${NB}0, ${g}(0) = 0 force ${rel(C, '=', '1')}. At ${rel(x, '=', '2')}, ${g}(2) = 0:<br>${y}(2) ⋅ 1 = −1 + 1 = 0`,
          `You never need to know what ${g} is.`,
        ],
        ans: `${y}(2)${NB}=${NB}0`,
      },
      {
        t: 'ex',
        tag: 'Archetype G: Linear in a substituted dependent variable',
        q: `<b>Representative</b> [Main]: ${SUBEQ}.`,
        steps: [
          `Not separable, not homogeneous. Spot that ${y} appears only as ${Y2} and ${y}${DY}. Put ${u} = ${Y2}, d${u} = 2${y}${DY}:<br>${u}${DX} − ${fr(x, '2')}${NB}d${u} = ${X3}${DX} ⇒ ${DUDX} − ${fr(`2${u}`, x)} = −2${X2}`,
          `IF = ${pw(x, '−2')}:<br>${fr(u, X2)} = −2${x}${PLUS_C}`,
        ],
        ans: `${Y2} + 2${X3} = ${C}${X2}`,
      },

      { t: 'part', title: 'The traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Counting written constants, not independent ones.</b> The JEE item in Archetype B hands you five symbols; the answer is 3. Constants summed inside one coefficient, or buried in an exponent, collapse.',
          '<b>Predicting order from a naive parameter count.</b> A family “with two parameters” pinned down by an extra condition (e.g. an ellipse family forced through a point) may retain only one free parameter. Differentiating more times than there are free parameters produces a relation that still annihilates the family but is not the minimal DE the examiner wants. Always do the parameter count first.',
          `<b>Reading order/degree off an uncleared form.</b> In the JEE item ${Y2} = 2${c}${NB}(${x} + √${c}): substituting ${c} = ${YYP} leaves a (${YYP})<sup>3/2</sup> term; you must square to get (${Y2} − 2${I('xy')}${yp})<sup>2</sup> = 4${cube(y)}(${yp})<sup>3</sup>: order 1, <b>degree 3</b>. Students who read degree off the unsquared form say 1.`,
          `<b>Skipping standard form.</b> Multiple recent items arrive as (${X2} + 1)<sup>2</sup>${yp} + 2${x}(${X2} + 1)${y} = 1 or ${x}${yp} = ln${NB}${x}. If the coefficient of ${yp} is not 1, every IF you compute is garbage. Divide first.`,
          `<b>Not noticing the equation is linear in</b> ${x}<b>.</b> ${y}${DX} − (${x} + 3${Y2})${DY} = 0 (Main Online) and the JEE item in Archetype E are both ordinary linear ODEs after flipping to ${DXDY}. Students who fight them in ${y} burn minutes and lose.`,
          `<b>Ignoring domain when rejecting roots.</b> The JEE flip-problem yields ${rel(y, '=', '3')} or ${y} = −1 at ${x} = −3; the stated ${rel(y, '>', '0')} is not decoration: picking −1 gives the common wrong answer.`,
          `<b>Misplacing the constant.</b> In Archetype D, the condition gives ${C} = −1, not 0: a common slip. Apply initial conditions to the general solution, after integrating.`,
          `<b>Absolute values in logs.</b> When integrating ${fr(`d${t}`, `1 − ${T2}`)}, dropping the modulus and the sign discussion lets you accept solution branches outside their validity interval.`,
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>(easy).</b> Find the order and degree of the DE of the family ${Y2} = 2${c}${NB}(${x} + √${c}), ${rel(c, '>', '0')}. [JEE]`,
            a: `2${YYP} = 2${c}, so ${c} = ${YYP}. Substitute:<br>${Y2} = 2${I('xy')}${yp} + 2(${YYP})<sup>3/2</sup><br>⇒ (${Y2} − 2${I('xy')}${yp})<sup>2</sup> = 4${cube(y)}(${yp})<sup>3</sup><br>Polynomial in derivatives now: highest derivative is ${yp}, raised to power 3. <b>Order 1, degree 3.</b>`,
          },
          {
            q: `<b>(easy).</b> Which of ${rel(y, '=', '2')}, ${y} = 2${x}, ${y} = 2${x} − 4, ${y} = 2${X2} − 4 solves ${YP2} − ${x}${yp} + ${y} = 0? [JEE]`,
            a: `Test each: ${rel(y, '=', '2')} gives 2 ≠ 0; ${y} = 2${x} gives 4 ≠ 0; ${y} = 2${X2} − 4 (${yp} = 4${x}) gives 14${X2} − 4 ≠ 0. For ${y} = 2${x} − 4, ${rel(yp, '=', '2')}:<br>4 − 2${x} + (2${x} − 4) = 0. ✓<br><b>Answer:</b> ${y} = 2${x} − 4.`,
          },
          {
            q: `<b>(easy–medium).</b> Form the DE of the family ${FAM}. [Main]`,
            a: `See Archetype A: ${x}${YP2} = 2${YYP} + ${x}.`,
          },
          {
            q: `<b>(medium).</b> Solve (2 + ${SINX})${DYDX} + (${y}${NB}+${NB}1)${NB}${COSX} = 0 with ${y}(0)${NB}=${NB}1; find ${y}(${PI2}) and ${yp}(${PI2}). [Adapted from Main]`,
            a: `Separate:<br>${fr(`d${y}`, `${y} + 1`)} = −${fr(`${COSX}${DX}`, `2 + ${SINX}`)} ⇒ ln(${y} + 1) = −ln(2 + ${SINX}) + ${c}<br>so (${y} + 1)(2 + ${SINX}) = ${C}; ${y}(0)${NB}=${NB}1 gives ${rel(C, '=', '4')}:<br>${y} = ${fr('4', `2 + ${SINX}`)} − 1<br>Hence ${y}(${PI2}) = ${fr('4', '3')} − 1 = ${fr('1', '3')}, and ${yp} = ${fr(`−4${NB}${COSX}`, `(2 + ${SINX})<sup>2</sup>`)} gives ${yp}(${PI2}) = 0, because cos${NB}${PI2} = 0 (consistent with the equation itself: 3${yp} + ${fr('4', '3')} ⋅ 0 = 0).`,
          },
          {
            q: `<b>(medium).</b> Identify the curve ${HOMOG} through ${pt('1', '1')}. [Main]`,
            a: `See Archetype C: ${X2} + ${Y2} = 2${x}, a circle of radius 1 centred at ${pt('1', '0')}.`,
          },
          {
            q: `<b>(medium).</b> Solve ${DYDX} = (${x} − ${y})<sup>2</sup>, ${y}(1)${NB}=${NB}1, and find ${y}(2). [Main, extended]`,
            a: `See Archetype D: ${LNRATIO}${NB}=${NB}2(${x}${NB}−${NB}1). At ${rel(x, '=', '2')}, with ${t} = ${x} − ${y}:<br>${fr(`1 + ${t}`, `1 − ${t}`)} = ${sq(e)} ⇒ ${t} = ${fr(`${sq(e)} − 1`, `${sq(e)} + 1`)}<br>⇒ ${y}(2)${NB}=${NB}2 − ${t} = ${fr(`${sq(e)} + 3`, `${sq(e)} + 1`)}`,
          },
          {
            q: `<b>(medium).</b> ${FLIP}, ${rel(y, '>', '0')}, ${y}(1)${NB}=${NB}1. Find ${y}(−3). [JEE]`,
            a: `See Archetype E: ${x} = 2${y} − ${Y2}, giving ${rel(y, '=', '3')}.`,
          },
          {
            q: `<b>(medium–hard).</b> ${ABSTRACT}, where ${g} is differentiable, ${g}(0)${NB}=${NB}${g}(2)${NB}=${NB}0, and ${y}(0)${NB}=${NB}0. Find ${y}(2). [JEE]`,
            a: `See Archetype F: ${y}(2)${NB}=${NB}0.`,
          },
          {
            q: `<b>(medium–hard).</b> Solve ${SUBEQ}. [Main]`,
            a: `See Archetype G: ${Y2} + 2${X3} = ${C}${X2}.`,
          },
          {
            q: `<b>(hard).</b> Solve (${X2} + ${Y2})${DY} = ${I('xy')}${DX} with ${y}(1)${NB}=${NB}1; find ${x0} such that ${y}(${x0})${NB}=${NB}${e}. [JEE]`,
            a: `Put ${y} = ${v}${x}:<br>${v} + ${x}${vp} = ${fr(v, `1 + ${V2}`)} ⇒ ${x}${DVDX} = −${fr(cube(v), `1 + ${V2}`)}<br>∫(${fr('1', cube(v))} + ${fr('1', v)})${DV} = −∫${fr(`d${x}`, x)} ⇒ ln${NB}${y} − ${fr(X2, `2${Y2}`)} = ${C}<br>${y}(1)${NB}=${NB}1 gives ${C} = −${HALF}. At ${y} = ${e}:<br>1 = ${fr(sq(x0), `2${sq(e)}`)} − ${HALF} ⇒ ${x0} = ${e}√3 (or −${e}√3; the positive value is the one asked for)`,
          },
          {
            q: `<b>(hard).</b> Solve (${X2} + 1)<sup>2</sup>${DYDX} + 2${x}(${X2} + 1)${y} = 1 with ${y}(0)${NB}=${NB}0; find ${y}(1). [Main, adapted]`,
            a: `Standard form: ${yp} + ${fr(`2${x}`, `${X2} + 1`)}${y} = ${fr('1', `(${X2} + 1)<sup>2</sup>`)}. Since ∫${fr(`2${x}${DX}`, `${X2} + 1`)} = ln(${X2} + 1),<br>IF = ${X2} + 1 ⇒ ${DDX}[${y}(${X2} + 1)] = ${fr('1', `${X2} + 1`)}<br>${y}(${X2} + 1) = ${ATAN}${NB}${x}${PLUS_C}; ${y}(0)${NB}=${NB}0 ⇒ ${rel(C, '=', '0')}<br>At ${rel(x, '=', '1')}: 2${y}(1) = ${fr('π', '4')}, so ${y}(1) = ${fr('π', '8')}.`,
          },
          {
            q: `<b>(hard).</b> Find the curve through the origin satisfying ${DYDX} = sin(10${x} + 6${y}). [JEE]`,
            a: `Spot 10${x} + 6${y} = 2(5${x} + 3${y}). Put ${v} = 5${x} + 3${y}, so ${vp} = 5 + 3${yp} = 5 + 3${NB}sin${NB}2${v}:<br>${fr(`d${v}`, `5 + 3${NB}sin${NB}2${v}`)} = d${x}<br>With ${t} = tan${NB}${v}, d${v} = ${fr(`d${t}`, `1 + ${T2}`)} and 5 + 3${NB}sin${NB}2${v} = ${fr(`5${T2} + 6${t} + 5`, `1 + ${T2}`)}:<br>∫${fr(`d${t}`, `5${T2} + 6${t} + 5`)} = ${fr('1', '4')}${NB}${ATAN}(${fr(`5${t} + 3`, '4')}) = ${x}${PLUS_C}<br>The origin (${rel(x, '=', '0')}, ${rel(t, '=', '0')}) fixes the constant: ${C} = ${fr('1', '4')}${NB}${ATAN}${NB}${fr('3', '4')}. Writing ${al} = ${ATAN}${NB}${fr('3', '4')}, we get ${fr(`5${t} + 3`, '4')} = tan(4${x} + ${al}) with tan${NB}${al} = ${fr('3', '4')}; expanding tan(4${x} + ${al}) and solving for ${t} = tan(5${x} + 3${y}),<br>tan(5${x} + 3${y}) = ${fr(`5${NB}${TAN4X}`, `4 − 3${NB}${TAN4X}`)}`,
          },
        ],
      },

      { t: 'part', title: 'Reflexes worth drilling' },
      {
        t: 'p',
        html: `Topics 01 to 05 present differential equations as labelled board routines (“separable”, “homogeneous”, “linear, apply the IF formula”) and Topic 05 leans on orthogonal trajectories, cooling curves and growth word problems that, in past papers, cluster in the older ones and have thinned out of recent Mains ${ESTIMATE}. What JEE actually rewards is type-recognition under disguise: inventing the substitution (${t} = ${x} − ${y}, ${u} = ${Y2}, flipping to ${DXDY}), converting functional equations into ODEs, counting parameters structurally, and comparing solutions of the same linear ODE without ever solving it. Drill those reflexes deliberately, because routine exercises rarely ask for them.`,
      },
    ],
  },
];
