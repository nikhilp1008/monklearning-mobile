import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Additional topics A–D, pp. 987–1008 of the Class 11 Mathematics
 * Master Reference (October 2026 edition), word for word: the Additional Topics
 * part's Addenda A–D. The part's p. 987 opening and its table (its heading
 * is not copied) are A's "Introduction";
 * each addendum's italic "Extends …" line opens its "Introduction" part; the
 * other parts follow the book's own headings (Method, the bold run-in headings
 * at the top level, Limiting conditions, Worked examples, Practice). The book
 * prints FOUR addenda here (A–D: D "Families of conics", pp. 1002–1006) and a
 * closing "Cheat sheet for this addendum" for all four (pp. 1007–1008), which is
 * D's last part. Unnumbered drawings: the book's own "Figure 1" to "Figure 4"
 * (pp. 990, 994, 999, 1004), one per addendum, m11-10-A-d1 … m11-10-D-d1. A
 * determinant is written as its expansion, its rows named in words (decision 34). Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (v: string, s: string) => `<i>${v}</i><sub>${s}</sub>`;
const sq = (v: string) => `${v}<sup>2</sup>`;
/** A no-break space: keeps a short condition on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const e = I('e');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const l = I('l');
const m = I('m');
const n = I('n');
const r = I('r');
const x = I('x');
const y = I('y');
const A = I('A');
const L = I('L');
const P = I('P');
const Q = I('Q');
const S = I('S');
const T = I('T');
const X = I('X');
const Y = I('Y');
const la = I('λ');
const mu = I('μ');
const th = I('θ');
const Sp = '<i>S</i>′';
const Spp = '<i>S</i>″';
const ep = '<i>e</i>′';
const mp = '<i>m</i>′';
const x1 = sb('x', '1');
const y1 = sb('y', '1');
const x2 = sb('x', '2');
const y2 = sb('y', '2');
const t1 = sb('t', '1');
const t2 = sb('t', '2');
const l1 = sb('l', '1');
const l2 = sb('l', '2');
const m1 = sb('m', '1');
const m2 = sb('m', '2');
const n1 = sb('n', '1');
const n2 = sb('n', '2');
const S1 = sb('S', '1');
const S1p = '<i>S</i><sub>1</sub>′';
const X2 = sq(x);
const Y2 = sq(y);
const A2 = sq(a);
const B2 = sq(b);
const R2 = sq(r);
const E2 = sq(e);
const EP2 = '<i>e</i>′<sup>2</sup>';
const X1S = '<i>x</i><sub>1</sub><sup>2</sup>';
const Y1S = '<i>y</i><sub>1</sub><sup>2</sup>';
const T1S = '<i>t</i><sub>1</sub><sup>2</sup>';
const T2S = '<i>t</i><sub>2</sub><sup>2</sup>';
const XX1 = '<i>xx</i><sub>1</sub>';
const YY1 = '<i>yy</i><sub>1</sub>';
const P11 = `(${x1},${NB}${y1})`;
const T12 = `${t1}${t2}`;
const HALF = fr('1', '2');
const BA = fr(b, a);
const lt = (u: string, v: string) => `${u}${NB}<${NB}${v}`;
const gt = (u: string, v: string) => `${u}${NB}>${NB}${v}`;
const neq0 = (v: string) => `${v}${NB}≠${NB}0`;

const ELL = `${fr(X2, A2)}${NB}+${NB}${fr(Y2, B2)}${NB}=${NB}1`;
const HYP = `${fr(X2, A2)}${NB}−${NB}${fr(Y2, B2)}${NB}=${NB}1`;
const HYPL = `${fr(X2, A2)}${NB}−${NB}${fr(Y2, B2)}`;
const CONJ = `${fr(Y2, B2)}${NB}−${NB}${fr(X2, A2)}${NB}=${NB}1`;
const CIRC = `${X2} + ${Y2} = ${R2}`;
const PARA = `${Y2} = 4<i>ax</i>`;
const T0 = `${T} = 0`;
const TS1 = `${T} = ${S1}`;
const S0 = `${S} = 0`;
const FAM = `${S} + ${la}${Sp} = 0`;
const SSA = `${S} + ${Spp} = 2${A}`;
const D_ELL = `${y} = −${fr(B2, `${A2}${m}`)}${x}`;
const D_HYP = `${y} = ${fr(B2, `${A2}${m}`)}${x}`;
const D_PAR = `${y} = ${fr(`2${a}`, m)}`;
const EQUI = `${y} = ±${BA}${x}`;
const SEMI = `√(${fr(`${A2} + ${B2}`, '2')})`;
const POLE_C = `(−${fr(`${l}${R2}`, n)}, −${fr(`${m}${R2}`, n)})`;
const POLE_P = `(${fr(n, l)}, −${fr(`2<i>am</i>`, l)})`;
const POLE_E = `(−${fr(`${A2}${l}`, n)}, −${fr(`${B2}${m}`, n)})`;
const POLE_H = `(−${fr(`${A2}${l}`, n)}, +${fr(`${B2}${m}`, n)})`;
const LINE = `<i>lx</i> + <i>my</i> + ${n} = 0`;
const SUBST = [
  `${X2} → ${XX1},  ${Y2} → ${YY1},`,
  `<i>xy</i> → ${HALF}(<i>xy</i><sub>1</sub> + ${x1}${y})`,
  `${x} → ${HALF}(${x} + ${x1}),  ${y} → ${HALF}(${y} + ${y1}),`,
  'constant → constant,',
].join('<br>');
const CONJ_LINES = `${R2}(${l1}${l2} + ${m1}${m2}) = ${n1}${n2}`;
const E_SUM = `${fr('1', E2)}${NB}+${NB}${fr('1', EP2)}${NB}=${NB}1`;
const PROD = fr(`${A2}${B2}`, `${A2} + ${B2}`);

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 987–992 ────────────────
  {
    n: 'A',
    title: 'The chord bisected at a given point, and the diameter of a conic',
    extra: true,
    kalam: 'The diameter of a conic corresponding to a system of parallel chords of slope m is the locus of the midpoints of those chords.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topics 01–05 (Introduction, The Circle, The Parabola, The Ellipse, The Hyperbola) and Topics 06–09 that follow them (Parametric Forms and the Auxiliary Circle, Tangents to a Conic, Normals to a Conic, Applied Problems) cover the whole NCERT syllabus and the bulk of the JEE conics syllabus. Additional topics A to D close four standing JEE items. Each of them is a different question about the same expression ${T} introduced in Tangents to a Conic.`,
      },
      {
        t: 'p',
        html: `• In Tangents to a Conic, ${T0} has two jobs: the <b>tangent</b> at a point on the conic, and the <b>chord of contact</b> from a point outside it. It has two more: it is the <b>polar</b> of any point, and ${TS1} is the <b>chord bisected at a given point</b>.<br>• From the bisected chord comes the <b>diameter</b> of a conic (the locus of the midpoints of a system of parallel chords) and the idea of conjugate diameters.<br>• The hyperbola’s asymptotes are derived in the main text as a limiting slope. Here they become an object: a pair of lines with its own equation, tied to the <b>conjugate hyperbola</b> by ${SSA}.<br>• ${FAM}, the family through the intersection of two curves, is the last item. NCERT’s own Historical Note credits Lamé (1818) with it: “<i>mE</i> + ${mp}<i>E</i>′ = 0 as the curve passing through the points of intersection of two loci <i>E</i> = 0 and <i>E</i>′ = 0”.`,
      },
      { t: 'p', html: 'The four items are lettered A to D, and each is keyed below to the unit it extends.' },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Topic', 'Read after'],
        rows: [
          ['Additional topic A', `The chord bisected at a given point (${TS1}), and the diameter of a conic`, 'Tangents to a Conic'],
          ['Additional topic B', `Pole and polar: what ${T0} means for any point`, 'Additional topic A'],
          ['Additional topic C', 'Asymptotes as an object, and the conjugate hyperbola', 'The Hyperbola'],
          ['Additional topic D', `Families of conics: ${FAM}`, 'The Circle'],
        ],
      },
      {
        t: 'p',
        html: `Extends Tangents to a Conic (Topic 07): its Concept intuition and Key definitions and formulas parts, the universal ${T} rule. Not in NCERT; a standing JEE Main item ${ESTIMATE} and the foundation of Additional topic B.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Tangents to a Conic built ${T} by the substitution rule<br><br>${SUBST}<br><br>and ${S1} as the value of ${S} at ${P11}. There we used ${T0}; this additional topic uses the other combination.`,
      },
      { t: 'p', html: `<b>The chord of the conic ${S0} whose midpoint is ${P11} is</b>` },
      {
        t: 'formula',
        kicker: 'The chord bisected at a given point',
        main: `${TS1}<br>a chord only if this line meets the conic twice: check ${S1} first`,
        legend: [
          `${P11} = the midpoint of the chord`,
          `${T} = the expression built from ${S} by the substitution rule`,
          `${S1} = the value of ${S} at ${P11}`,
        ],
        note: null,
      },
      { t: 'p', html: 'Three remarks make it usable.' },
      {
        t: 'p',
        html: `1. <b>Why it is true.</b> Substitute the line through ${P11} of slope ${m} into ${S0}. You get a quadratic; demanding that the sum of its roots put the midpoint at ${P11} fixes ${m}, and the resulting line is ${T} − ${S1} = 0. Every quadratic term contributes its share of the “sum of roots”, which is precisely what the halving in the substitution rule encodes.`,
      },
      {
        t: 'p',
        html: `2. <b>The point must be placed correctly.</b> ${TS1} is a genuine chord only if this line meets the conic in two real points, so check where ${P11} sits first, using the same ${S1} that counts tangents, read the other way. For the circle, parabola and ellipse, every point inside (${lt(S1, '0')}) is the midpoint of exactly one chord, except the centre of a circle or ellipse, which bisects every chord through it. The hyperbola needs more care: a point inside a branch (${gt(S1, '0')}) is the midpoint of a chord with both ends on that branch; a point between the two branches, where<br><br>${fr(X1S, A2)} < ${fr(Y1S, B2)}<br><br>(so ${lt(S1, '0')}), is the midpoint of a chord joining the two branches; and a point on an asymptote other than the centre, or in the thin region between a branch and its asymptotes, where<br><br>0 ≤ ${fr(X1S, A2)} − ${fr(Y1S, B2)} < 1,<br><br>is the midpoint of no chord at all. The centre itself bisects every chord through it.`,
      },
      {
        t: 'p',
        html: `3. <b>The three jobs of ${T}, side by side.</b> ${T0} with ${P11} on the conic is the tangent; ${T0} with ${P11} outside is the chord of contact; ${TS1} with ${P11} inside is the bisected chord. One expression, located by where the point sits.`,
      },

      { t: 'part', title: 'The diameter' },
      { t: 'p', html: 'Now let the midpoint vary while the direction stays fixed.' },
      {
        t: 'p',
        html: `<b>Definition.</b> The <b>diameter</b> of a conic corresponding to a system of parallel chords of slope ${m} is the locus of the midpoints of those chords.`,
      },
      {
        t: 'p',
        html: `Deriving each case is one line: write the chord bisected at (${h},${NB}${k}) as ${TS1}, read off its slope, and set that slope equal to ${m}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Conic', `Diameter bisecting chords of slope ${m}`, 'Reading'],
        rows: [
          [CIRC, `${x} + <i>my</i> = 0`, 'a diameter through the centre, perpendicular to the chords'],
          [PARA, D_PAR, 'a horizontal line: <b>every diameter of a parabola is parallel to its axis</b>'],
          [ELL, D_ELL, 'a line through the centre'],
          [HYP, D_HYP, 'a line through the centre'],
        ],
      },
      {
        t: 'p',
        html: 'So a <b>central</b> conic (circle, ellipse, hyperbola) has all its diameters passing through the centre, which is why, for the circle and the ellipse, “diameter” and “chord through the centre” are the same thing (a hyperbola’s diameters also pass through the centre, but those steeper than the asymptotes meet the curve nowhere). A parabola has no centre, and its diameters are a family of parallel lines instead; that is the one place the two definitions part company, and JEE Main tests exactly that.',
      },

      { t: 'part', title: 'Conjugate diameters' },
      {
        t: 'p',
        html: `If the diameter ${y} = ${mp}${x} bisects chords of slope ${m}, and the diameter ${y} = <i>mx</i> bisects chords of slope ${mp}, the two are called <b>conjugate diameters</b>. The condition is read straight off the table:`,
      },
      {
        t: 'formula',
        kicker: 'Conjugate diameters',
        main: `ellipse: <i>mm</i>′ = −${fr(B2, A2)},<br>hyperbola: <i>mm</i>′ = +${fr(B2, A2)},<br>circle (${a} = ${b}): <i>mm</i>′ = −1.`,
        legend: [`${m}, ${mp} = the slopes of the two conjugate diameters`, `${a}, ${b} = the semi-axes`],
        note: null,
      },
      {
        t: 'p',
        html: `The circle case says conjugate diameters of a circle are perpendicular, and every other conjugate-diameter fact is that statement squashed by the factor ${BA} of the auxiliary circle. Two consequences worth memorising:<br>• The <b>major and minor axes are a conjugate pair</b> (${m} = 0 and ${m} → ∞), and they are the only perpendicular conjugate pair of an ellipse (${a} ≠ ${b}).<br>• The <b>equi-conjugate diameters</b> (the conjugate pair of equal length) are ${EQUI}, the diagonals of the rectangle ${x} = ±${a}, ${y} = ±${b}, each of semi-length<br><br>${SEMI}.`,
      },
      { t: 'fig', id: 'm11-10-A-d1' },

      { t: 'part', title: 'Limiting conditions' },
      {
        t: 'p',
        html: `• ${TS1} needs ${P11} placed so that the line meets the conic in two real points (strictly inside for the circle, parabola and ellipse; see remark 2 for the hyperbola). At the centre of a central conic every direction that gives a chord works and the “chord bisected at the centre” is not unique, so the formula degenerates (${TS1} becomes 0 = 0).<br>• The parabola formula ${D_PAR} excludes ${m} = 0: chords parallel to the axis are not a system with a diameter, because a horizontal line meets ${PARA} only once.<br>• The ellipse and hyperbola formulas exclude ${m} = 0 in the same written form, but the limit is honest: as ${m} → 0 the diameter tends to the ${y}-axis, which is the correct answer (the ${y}-axis, the ellipse’s minor axis and the hyperbola’s conjugate axis, bisects all horizontal chords).`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'A1: JEE Main',
        q: `Find the equation of the chord of the ellipse ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 that is bisected at the point (2, 1).`,
        steps: [
          `First check the point is inside, or the chord does not exist:<br><br>${S1} = ${fr('4', '25')} + ${fr('1', '9')} − 1<br><br>= ${fr('36 + 25 − 225', '225')}<br><br>= −${fr('164', '225')} < 0. ✓`,
          `Now write ${T} at ${P11} = (2, 1):<br><br>${T} = ${fr(`2${x}`, '25')} + ${fr(y, '9')} − 1.`,
          `The chord is ${TS1}:<br><br>${fr(`2${x}`, '25')} + ${fr(y, '9')} − 1 = −${fr('164', '225')}.`,
          `Multiply through by 225:<br>18${x} + 25${y} − 225 = −164<br>⟹ 18${x} + 25${y} = 61.`,
          `<b>Check.</b> The point itself: 18(2) + 25(1) = 36 + 25 = 61. ✓ Solving 18${x} + 25${y} = 61 against the ellipse gives the two ends<br><br>(2 ∓ ${fr('10√2501', '183')}, 1 ± ${fr('12√2501', '305')}),<br><br>whose coordinates average to exactly (2, 1). The ends are ugly and the chord is clean, which is the whole point of the formula. Solving for the ends and averaging is three times the work and misses the marks.`,
        ],
        ans: `18${x} + 25${y} = 61`,
      },
      {
        t: 'ex',
        tag: 'A2: JEE Advanced',
        q: `(a) Find the diameter of the parabola ${Y2} = 12${x} that bisects all chords of slope 3, and explain why the answer does not mention where those chords sit.<br>(b) For the ellipse ${fr(X2, '16')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1, find the diameter conjugate to the one of slope ${fr('3', '4')}, and show that this particular pair is the equi-conjugate pair.`,
        steps: [
          `<b>(a)</b> Here 4${a} = 12, so ${a} = 3, and the diameter of ${PARA} for chords of slope ${m} is<br><br>${y} = ${fr(`2${a}`, m)} = ${fr('6', '3')} = 2, i.e. ${y} = 2.`,
          `Direct check: intersect ${y} = 3${x} + ${c} with ${Y2} = 12${x}. Eliminating ${x} gives ${Y2} − 4${y} + 4${c} = 0, whose roots sum to 4 regardless of ${c}, so the midpoint ordinate is 2 for <b>every</b> value of ${c}. That is why the answer carries no ${c}: sliding the chord parallel to itself moves the midpoint along the line ${y} = 2 but never off it. And ${y} = 2 is horizontal, so it is parallel to the axis ${y} = 0: the parabola’s signature.`,
          `<b>(b)</b> Here ${A2} = 16, ${B2} = 9, and the conjugacy condition is <i>mm</i>′ = −${fr(B2, A2)}:<br><br>${mp} = −${fr('9', '16')} ÷ ${fr('3', '4')}<br><br>= −${fr('9', '16')} ⋅ ${fr('4', '3')} = −${fr('3', '4')}.`,
          `So the conjugate diameter is ${y} = −${fr('3', '4')}${x}. Direct check: intersecting ${y} = ${fr('3', '4')}${x} + ${c} with the ellipse and averaging gives midpoints satisfying ${k} = −${fr('3', '4')}${h} for every ${c}. ✓`,
          `<b>Why this pair is the equi-conjugate one.</b> The equi-conjugate diameters are ${EQUI} = ±${fr('3', '4')}${x}: exactly the two lines we have. Their common semi-length: solving ${y} = ${fr('3', '4')}${x} against the ellipse gives (±2√2, ±${fr('3√2', '2')}), at distance<br><br>√(8 + ${fr('9', '2')}) = √(${fr('25', '2')}) = ${fr('5', '√2')}<br><br>= √(${fr('16 + 9', '2')}) = ${SEMI} ✓<br><br>from the centre, and by symmetry the other diameter has the same semi-length. Note that −${fr('3', '4')} × ${fr('3', '4')} = −${fr('9', '16')} ≠ −1: an equi-conjugate pair of a genuine ellipse is never perpendicular. Only the circle, where ${b} = ${a}, makes them so.`,
          `<b>Why it is “Advanced”.</b> Part (a) rewards seeing that the parameter ${c} vanishes from the sum of the roots before you do any work; part (b) rewards recognising ±${BA} on sight instead of setting up a length calculation. Both are the same habit: read the structure of the quadratic rather than solving it, the habit behind ${T12} = −1 in the focal-chord example of The Parabola (the product of the roots of the quadratic in <i>t</i> that a line through the focus gives).`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the chord of the circle ${X2} + ${Y2} = 25 bisected at (2, 3).`,
            a: `${S1} = 4 + 9 − 25 = −12 < 0 (inside); ${T} = 2${x} + 3${y} − 25, so ${TS1} gives 2${x} + 3${y} = 13.`,
          },
          {
            q: `Find the chord of the parabola ${Y2} = 16${x} bisected at (5, 4).`,
            a: `${S1} = 16 − 80 = −64 < 0; ${T} = 4${y} − 8(${x} + 5), so 4${y} − 8${x} − 40 = −64, i.e. 2${x} − ${y} − 6 = 0. (Check: 2(5) − 4 − 6 = 0.)`,
          },
          {
            q: `Find the chord of the ellipse ${fr(X2, '36')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1 bisected at (4, 1).`,
            a: `${S1} = ${fr('16', '36')} + ${fr('1', '9')} − 1 = −${fr('4', '9')}; ${T} = ${fr(`4${x}`, '36')} + ${fr(y, '9')} − 1, giving ${fr(x, '9')} + ${fr(y, '9')} = ${fr('5', '9')}, i.e. ${x} + ${y} = 5.`,
          },
          {
            q: `Find the chord of the hyperbola ${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1 bisected at (6, 2).`,
            a: `${S1} = ${fr('36', '16')} − ${fr('4', '9')} − 1 = ${fr('29', '36')} > 0, which for a hyperbola means inside a branch: a chord exists. ${T} = ${fr(`6${x}`, '16')} − ${fr(`2${y}`, '9')} − 1, and ${TS1} gives 27${x} − 16${y} = 130. (Check: 162 − 32 = 130.)`,
          },
          {
            q: `Find the diameter of the ellipse ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '16')}${NB}=${NB}1 that bisects all chords of slope 2.`,
            a: `${D_ELL} = −${fr('16', '25 ⋅ 2')}${x} = −${fr('8', '25')}${x}.`,
          },
          {
            q: `Find the diameter of the parabola ${Y2} = 20${x} that bisects all chords of slope −${fr('5', '2')}.`,
            a: `4${a} = 20 ⇒ ${a} = 5; ${y} = ${fr(`2${a}`, m)} = ${fr('10', `−${fr('5', '2')}`)} = −4.`,
          },
          {
            q: `Show that (4, 4) cannot be the midpoint of any chord of ${X2} + ${Y2} = 25, and say what goes wrong if you apply ${TS1} anyway.`,
            a: `${S1} = 16 + 16 − 25 = 7 > 0, so (4, 4) lies <b>outside</b> the circle and no chord has it as a midpoint. Applying ${TS1} regardless produces 4${x} + 4${y} = 32, i.e. ${x} + ${y} = 8, whose distance from the origin is ${fr('8', '√2')} = 4√2 ≈ 5.66 > 5: a line that misses the circle altogether. The algebra hands you a line; only the sign of ${S1} tells you whether it is a chord.`,
          },
          {
            q: `Find the diameter of the hyperbola ${fr(X2, '9')}${NB}−${NB}${fr(Y2, '4')}${NB}=${NB}1 conjugate to the diameter ${y} = ${fr('1', '3')}${x}.`,
            a: `<i>mm</i>′ = +${fr(B2, A2)} = ${fr('4', '9')}, so ${mp} = ${fr('4', '9')} ÷ ${fr('1', '3')} = ${fr('4', '3')}: the conjugate diameter is ${y} = ${fr('4', '3')}${x}. One of the pair is flatter and the other steeper than the asymptote slope ${BA} = ${fr('2', '3')}; a diameter whose slope equals ${BA} exactly would be its own conjugate, and that is the asymptote: see Additional topic C.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 993–997 ────────────────
  {
    n: 'B',
    title: 'Pole and polar: what T = 0 means for any point',
    extra: true,
    kalam: 'Focus and directrix are pole and polar of each other, which is the cleanest statement of why they always come in pairs.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Extends Tangents to a Conic, Topic 07’s Key definitions and formulas part, and Additional topic A. Not in NCERT; a standard JEE topic and a recurring JEE Advanced locus device ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Tangents to a Conic gave ${T0} two readings; the general one has not yet been named. Here is the whole picture in one definition.`,
      },
      {
        t: 'p',
        html: `<b>Definition.</b> For any point ${P}${P11} in the plane and any conic ${S0}, the line ${T0} is called the <b>polar</b> of ${P} with respect to the conic, and ${P} is called the <b>pole</b> of that line.`,
      },
      {
        t: 'p',
        html: 'The point does not have to be on the conic, or outside it, or anywhere in particular. What changes with position is only the description of the line:',
      },
      {
        t: 'table',
        title: null,
        head: [`Where ${P} sits`, S1, `What the polar ${T0} is`],
        rows: [
          ['on the conic', `${S1} = 0`, `the <b>tangent</b> at ${P}`],
          ['outside', `${gt(S1, '0')} (hyperbola: ${lt(S1, '0')})`, `the <b>chord of contact</b> of the two tangents from ${P} (hyperbola: from a point on an asymptote only one tangent exists; the polar runs parallel to that asymptote and meets the curve once, at the point of contact)`],
          ['inside', `${lt(S1, '0')} (hyperbola: ${gt(S1, '0')})`, 'a real line that does <b>not</b> meet the conic'],
          ['at the centre of a central conic', '–', 'no polar: the line recedes to infinity'],
        ],
      },
      {
        t: 'p',
        html: 'So the tangent and the chord of contact are the top two rows of one table, and “polar” is the name of the whole column.',
      },

      { t: 'part', title: 'Going the other way: the pole of a given line' },
      {
        t: 'p',
        html: `This is the half that is genuinely new, and it is the half examiners ask. Given ${LINE}, its pole ${P11} is found by forcing ${T0} to be that line, matching the coefficients of ${x}, of ${y} and the constant, up to a common multiplier. The results:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Conic', `Pole of ${LINE}`, 'Needs'],
        rows: [
          [CIRC, POLE_C, neq0(n)],
          [PARA, POLE_P, neq0(l)],
          [ELL, POLE_E, neq0(n)],
          [HYP, POLE_H, neq0(n)],
        ],
      },
      {
        t: 'p',
        html: `Do not memorise four rows. Memorise the move: <b>write ${T0} with unknown ${P11}, then match coefficients with the given line.</b> The rows fall out in two lines each, and the same move handles a general circle or a shifted conic where no table applies.`,
      },

      { t: 'part', title: 'The three properties that make the idea worth having' },
      {
        t: 'p',
        html: `1. <b>Reciprocity (La Hire’s theorem).</b> If the polar of ${P} passes through ${Q}, then the polar of ${Q} passes through ${P}. For the ellipse the condition “${Q}(${x2},${NB}${y2}) lies on the polar of ${P}${P11}” reads<br><br>${fr(`${x1}${x2}`, A2)}${NB}+${NB}${fr(`${y1}${y2}`, B2)}${NB}=${NB}1,<br><br>which is symmetric in the two points, so the statement is the same equation read from the other end. Such a pair is called <b>conjugate points</b>; for ${CIRC} the condition is simply ${x1}${x2} + ${y1}${y2} = ${R2}.`,
      },
      {
        t: 'p',
        html: `2. <b>Conjugate lines.</b> Two lines are <b>conjugate</b> when the pole of each lies on the other. For ${CIRC} the condition on ${l1}${x} + ${m1}${y} + ${n1} = 0 and ${l2}${x} + ${m2}${y} + ${n2} = 0 is`,
      },
      {
        t: 'formula',
        kicker: 'Conjugate lines (circle)',
        main: `${CONJ_LINES}.`,
        legend: [
          `${r} = the radius of the circle ${CIRC}`,
          `${l1}, ${m1}, ${n1} = the coefficients of the first line`,
          `${l2}, ${m2}, ${n2} = the coefficients of the second line`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `3. <b>The polar of a focus is the corresponding directrix.</b> For the ellipse, the polar of ${S}(<i>ae</i>,${NB}0) is ${fr(`${x} ⋅ <i>ae</i>`, A2)} = 1, that is ${x} = ${fr(a, e)}: the directrix the chapter defined by the focus-directrix ratio. Focus and directrix are pole and polar of each other, which is the cleanest statement of why they always come in pairs. The same computation on ${PARA} sends the focus (${a},${NB}0) to ${x} = −${a}.`,
      },
      { t: 'fig', id: 'm11-10-B-d1' },

      { t: 'part', title: 'Limiting conditions' },
      {
        t: 'p',
        html: `• <b>A line through the centre of a central conic has no finite pole.</b> Setting ${n} = 0 in the table divides by zero; geometrically the pole has gone to infinity. In particular the axes, the asymptotes and every diameter are in this class.<br>• <b>A line parallel to a parabola’s axis has no finite pole</b> (${l} = 0 divides by zero), for the same reason: the parabola’s centre is at infinity in that direction.<br>• <b>The polar exists even when no tangent does.</b> For an interior point (${lt(S1, '0')}; for a hyperbola, ${gt(S1, '0')}) there are no real tangents at all, yet ${T0} is a perfectly real line. Calling it “the chord of contact” there is the standard error; it is a polar and nothing more.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'B1: JEE Main',
        q: `(a) Find the polar of (3, 4) with respect to ${X2} + ${Y2} = 9, and say what kind of line it is.<br>(b) Find the pole of the line 3${x} + 4${y} = 12 with respect to ${X2} + ${Y2} = 25.`,
        steps: [
          `<b>(a)</b> For ${CIRC}, ${T} = ${XX1} + ${YY1} − ${R2}, so the polar of (3, 4) is<br>3${x} + 4${y} − 9 = 0.`,
          `Locate the point: ${S1} = 9 + 16 − 9 = 16 > 0, so (3, 4) is <b>outside</b> the circle and this polar is the <b>chord of contact</b> of the two tangents from (3, 4). (Sanity: the distance of 3${x} + 4${y} = 9 from the origin is ${fr('9', '5')} = 1.8 < 3, so the line really does cut the circle.)`,
          `<b>(b)</b> Write the polar of an unknown pole ${P11} and match:<br>${XX1} + ${YY1} − 25 = 0 must be 3${x} + 4${y} − 12 = 0.`,
          `Comparing coefficients up to a multiplier ${mu}:<br>${x1} = 3${mu},  ${y1} = 4${mu},<br>−25 = −12${mu} ⟹ ${mu} = ${fr('25', '12')}.`,
          `So the pole is<br><br>(${fr('75', '12')}, ${fr('100', '12')}) = (${fr('25', '4')}, ${fr('25', '3')}).`,
          `<b>Check.</b> The polar of (${fr('25', '4')}, ${fr('25', '3')}) is ${fr('25', '4')}${x} + ${fr('25', '3')}${y} = 25; multiplying by ${fr('12', '25')} gives 3${x} + 4${y} = 12. ✓ The table entry agrees: with ${l} = 3, ${m} = 4, ${n} = −12, ${R2} = 25,<br><br>(−${fr('3 ⋅ 25', '−12')}, −${fr('4 ⋅ 25', '−12')}) = (${fr('25', '4')}, ${fr('25', '3')}).`,
        ],
        ans: `<b>(b)</b> (${fr('25', '4')}, ${fr('25', '3')})`,
      },
      {
        t: 'ex',
        tag: 'B2: JEE Advanced',
        q: `A variable chord of the parabola ${PARA} subtends a right angle at the vertex. Find the locus of the pole of that chord.`,
        steps: [
          `<b>Step 1: turn “right angle at the vertex” into a condition on parameters.</b> Let the ends be ${P}(<i>a</i>${T1S},${NB}2<i>a</i>${t1}) and ${Q}(<i>a</i>${T2S},${NB}2<i>a</i>${t2}). The vertex is the origin, so <i>OP</i> ⟂ <i>OQ</i> means <i>OP⃗</i> ⋅ <i>OQ⃗</i> = 0:<br><br>${A2}${T1S}${T2S} + 4${A2}${T12} = 0<br>⟹ ${A2}${T12}(${T12} + 4) = 0<br>⟹ ${T12} = −4<br><br>(the root ${T12} = 0 is rejected: it puts an end at the vertex itself, where no angle is subtended). Compare this with the focal-chord condition ${T12} = −1 (The Parabola): same shape, different constant, and the two are worth storing as a pair.`,
          `<b>Step 2: write the chord.</b> The chord joining ${t1} and ${t2} on ${PARA} is<br>2${x} − (${t1} + ${t2})${y} + 2<i>a</i>${T12} = 0,<br>which you can verify in one substitution: putting (<i>a</i>${T1S},${NB}2<i>a</i>${t1}) in gives<br>2<i>a</i>${T1S} − 2<i>a</i>${T1S} − 2<i>a</i>${T12} + 2<i>a</i>${T12} = 0.<br>With ${T12} = −4:<br>2${x} − (${t1} + ${t2})${y} − 8${a} = 0.`,
          `<b>Step 3: take the pole.</b> For ${PARA} the pole of ${LINE} is ${POLE_P}. Here ${l} = 2, ${m} = −(${t1} + ${t2}), ${n} = −8${a}:<br><br>pole = (${fr(`−8${a}`, '2')}, ${fr(`2${a}(${t1} + ${t2})`, '2')})<br><br>= (−4${a}, ${a}(${t1} + ${t2})).`,
          `<b>Step 4: eliminate the parameter.</b> The abscissa is −4${a} whatever ${t1} + ${t2} is, and the ordinate ${a}(${t1} + ${t2}) takes every real value as ${t1} varies. Hence the locus is the whole line ${x} = −4${a}.`,
          `<b>Reading the answer.</b> The chords themselves all pass through the fixed point (4${a},${NB}0); put ${y} = 0 in the chord equation. So the family “all chords through (4${a},${NB}0)” has poles filling the line ${x} = −4${a}, and by La Hire that line is precisely the polar of (4${a},${NB}0): indeed the polar of (4${a},${NB}0) is ${y} ⋅ 0 = 2${a}(${x} + 4${a}), i.e. ${x} = −4${a}. ✓`,
          `<b>Why it is “Advanced”.</b> Three separate ideas chain: a parametric perpendicularity condition, the pole formula, and then the recognition that “the poles of all lines through a fixed point fill that point’s polar”: the reciprocity theorem doing real work rather than sitting in a list. Once you see that last step, the four-step computation above collapses into a single line, and that is exactly the compression JEE Advanced is paying for.`,
        ],
        ans: `${x} = −4${a}`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the polar of (2, −1) with respect to ${fr(X2, '9')}${NB}−${NB}${fr(Y2, '4')}${NB}=${NB}1.`,
            a: `${T} = ${fr(`2${x}`, '9')} + ${fr(y, '4')} − 1 (note the hyperbola’s minus turns ${y1} = −1 into +${fr(y, '4')}); clearing 36 gives 8${x} + 9${y} = 36.`,
          },
          {
            q: `Find the pole of 2${x} + 3${y} = 6 with respect to ${X2} + ${Y2} = 16.`,
            a: `${l} = 2, ${m} = 3, ${n} = −6, ${R2} = 16: (${fr('32', '6')}, ${fr('48', '6')}) = (${fr('16', '3')}, 8).`,
          },
          {
            q: `Find the pole of ${x} − 2${y} + 3 = 0 with respect to ${Y2} = 8${x}.`,
            a: `4${a} = 8 ⇒ ${a} = 2; ${l} = 1, ${m} = −2, ${n} = 3: (${fr('3', '1')}, −${fr('2(2)(−2)', '1')}) = (3, 8). (Check: the polar of (3, 8) is 8${y} = 4(${x} + 3), i.e. ${x} − 2${y} + 3 = 0.)`,
          },
          {
            q: `Find the pole of ${x} + ${y} = 1 with respect to ${fr(X2, '8')}${NB}+${NB}${fr(Y2, '4')}${NB}=${NB}1.`,
            a: `${l} = ${m} = 1, ${n} = −1, ${A2} = 8, ${B2} = 4: (8, 4). (Check: ${fr(`8${x}`, '8')}${NB}+${NB}${fr(`4${y}`, '4')}${NB}=${NB}1 is ${x} + ${y} = 1.)`,
          },
          {
            q: `Show that the polar of the focus (3, 0) of ${fr(X2, '25')}${NB}+${NB}${fr(Y2, '16')}${NB}=${NB}1 is its directrix.`,
            a: `${A2} = 25, ${B2} = 16, so ${c} = 3 and ${e} = ${fr('3', '5')}. The polar of (3, 0) is ${fr(`3${x}`, '25')} = 1, i.e. ${x} = ${fr('25', '3')} = ${fr(a, e)}: the directrix.`,
          },
          {
            q: `Are (1, 2) and (3, 4) conjugate points with respect to ${X2} + ${Y2} = 11?`,
            a: `Condition: ${x1}${x2} + ${y1}${y2} = ${R2}, i.e. 3 + 8 = 11. Yes, they are conjugate.`,
          },
          {
            q: `Why does the line 2${x} − 3${y} = 0 have no pole with respect to ${fr(X2, '4')}${NB}+${NB}${fr(Y2, '9')}${NB}=${NB}1?`,
            a: `It passes through the centre (0, 0), so ${n} = 0 and the pole formula divides by zero. The pole is the point at infinity in the direction conjugate to that diameter; no finite point has this line as its polar.`,
          },
          {
            q: `The polar of a point ${P} with respect to ${X2} + ${Y2} = 9 is ${x} + 2${y} = 3. Find ${P}, and state whether ${P} is inside or outside the circle.`,
            a: `Match ${XX1} + ${YY1} − 9 = 0 with ${x} + 2${y} − 3 = 0: ${x1} = ${mu}, ${y1} = 2${mu}, −9 = −3${mu}, so ${mu} = 3 and ${P} = (3, 6). Then ${S1} = 9 + 36 − 9 = 36 > 0, so ${P} is outside and the given line is the chord of contact from ${P}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 997–1002 ────────────────
  {
    n: 'C',
    title: 'Asymptotes as an object, and the conjugate hyperbola',
    extra: true,
    kalam: 'The hyperbola and its pair of asymptotes differ only in the constant term.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Extends The Hyperbola (Topic 05): its Key definitions and formulas part, its CBSE board derivation part and its Cheat sheet. The main text derives ${EQUI} as a limit and uses the slopes. This additional topic writes the asymptotes as a single second-degree equation, defines the conjugate hyperbola, and handles a hyperbola that is not centred at the origin: all three are JEE Main and Advanced staples ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Start from the observation the main text stopped one line short of. For ${S} ≡ ${HYPL} − 1 = 0, the two asymptotes <i>bx</i> − <i>ay</i> = 0 and <i>bx</i> + <i>ay</i> = 0 multiply together to give one second-degree equation:`,
      },
      {
        t: 'formula',
        kicker: 'Pair of asymptotes',
        main: `${A} ≡ ${HYPL} = 0,<br>i.e. (${fr(x, a)} − ${fr(y, b)})(${fr(x, a)} + ${fr(y, b)}) = 0`,
        legend: [`${A} = the asymptote polynomial`, `${a}, ${b} = the semi-axes of the hyperbola`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>The hyperbola and its pair of asymptotes differ only in the constant term.</b><br><br>Move the right-hand side once more, from 0 to −1, and you get a third curve:',
      },
      {
        t: 'p',
        html: `<b>Definition.</b> The <b>conjugate hyperbola</b> of ${HYP} is<br><br>${HYPL} = −1, that is<br><br>${CONJ}:<br><br>the transverse and conjugate axes have swapped roles.`,
      },
      {
        t: 'p',
        html: `To put all three on one footing, move everything to the left-hand side and write<br><br>${S} ≡ ${HYPL} − 1,<br><br>${A} ≡ ${HYPL},<br><br>${Spp} ≡ ${HYPL} + 1,<br><br>so that ${S} = 0 is the hyperbola, ${A} = 0 its pair of asymptotes and ${Spp} = 0 the conjugate hyperbola. The three polynomials differ only in the constant term, and so they satisfy one identity:`,
      },
      {
        t: 'formula',
        kicker: 'Hyperbola, asymptotes and conjugate',
        main: `${SSA}.`,
        legend: [
          `${S} = the hyperbola’s polynomial`,
          `${A} = the asymptotes’ polynomial`,
          `${Spp} = the conjugate hyperbola’s polynomial`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Everything in this additional topic is a consequence of that line. Three curves, one left-hand side, three right-hand sides 1, 0, −1.',
      },

      { t: 'part', title: 'The comparison table' },
      { t: 'p', html: `Let ${S} = 0 be ${HYP} and ${Spp} = 0 its conjugate, ${CONJ}.` },
      {
        t: 'table',
        title: null,
        head: ['Feature', `Hyperbola ${S}`, `Conjugate hyperbola ${Spp}`],
        rows: [
          ['Transverse axis', `${x}-axis, length 2${a}`, `${y}-axis, length 2${b}`],
          ['Conjugate axis', `${y}-axis, length 2${b}`, `${x}-axis, length 2${a}`],
          ['Vertices', `(±${a},${NB}0)`, `(0,${NB}±${b})`],
          [`${c} (centre to focus)`, `√(${A2} + ${B2})`, `√(${A2} + ${B2}), <b>the same</b>`],
          ['Foci', `(±${c},${NB}0)`, `(0,${NB}±${c})`],
          ['Eccentricity', `${e} = √(1 + ${fr(B2, A2)})`, `${ep} = √(1 + ${fr(A2, B2)})`],
          ['Directrices', `${x} = ±${fr(a, e)}`, `${y} = ±${fr(b, ep)}`],
          ['Latus rectum', fr(`2${B2}`, a), fr(`2${A2}`, b)],
          ['Asymptotes', EQUI, `${EQUI}, <b>the same pair</b>`],
        ],
      },
      { t: 'p', html: 'Two facts from that table earn their own line, because both are examined directly:' },
      {
        t: 'formula',
        kicker: 'A hyperbola and its conjugate',
        main: `${E_SUM},<br>the four foci lie on the circle: ${X2} + ${Y2} = ${A2} + ${B2}.`,
        legend: [
          `${e} = the eccentricity of the hyperbola`,
          `${ep} = the eccentricity of the conjugate`,
          `${a}, ${b} = the semi-axes`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The first follows from<br><br>${fr('1', E2)} = ${fr(A2, `${A2} + ${B2}`)} and ${fr('1', EP2)} = ${fr(B2, `${A2} + ${B2}`)};<br><br>the second from the shared ${c}.`,
      },

      { t: 'part', title: 'Asymptote facts worth carrying' },
      {
        t: 'p',
        html: `• <b>Angle.</b> The asymptotes make an angle 2${th} = 2 tan<sup>−1</sup> ${BA} across the transverse axis, and then ${e} = sec ${th}. (Check on ${a} = ${b}: ${th} = 45°, ${e} = sec 45° = √2: the rectangular hyperbola, exactly as the main text says.)<br>• <b>The axes bisect the angles between the asymptotes</b>, so the asymptotes are symmetric about both axes and pass through the centre.<br>• <b>Product of distances.</b> For any point on the hyperbola, the product of its perpendicular distances to the two asymptotes is the constant ${PROD}. This is why the branches approach the asymptotes without meeting them: as one distance grows the other must shrink, and neither can reach zero.<br>• <b>Tangent facts.</b> The portion of any tangent intercepted between the asymptotes is bisected at the point of contact, and the triangle formed by that tangent and the two asymptotes has constant area <i>ab</i>, independent of where the tangent touches.<br>• <b>A self-conjugate diameter is an asymptote.</b> In Additional topic A the hyperbola’s conjugacy condition was <i>mm</i>′ = ${fr(B2, A2)}; setting ${m} = ${mp} gives ${m} = ±${BA}. The asymptotes are the only diameters that are their own conjugates. (A chord parallel to an asymptote meets the hyperbola only once, so this is a limiting case: the diameter formula still returns a line, but there is no longer a system of genuine chords for it to bisect.)`,
      },

      { t: 'part', title: 'Asymptotes of a hyperbola that is not centred at the origin' },
      {
        t: 'p',
        html: `Since the curve and its asymptotes differ only in the constant, write ${S} + ${la} = 0 and choose ${la} to make it a <b>pair of straight lines</b>, that is, to make the 3 × 3 determinant with rows (${A}, <i>H</i>, <i>G</i>), (<i>H</i>, <i>B</i>, <i>F</i>), (<i>G</i>, <i>F</i>, <i>C</i> + ${la}) vanish, for ${A}${X2} + 2<i>Hxy</i> + <i>B</i>${Y2} + 2<i>Gx</i> + 2<i>Fy</i> + <i>C</i> = 0:<br><br><i>AB</i>(<i>C</i> + ${la}) + 2<i>FGH</i> − <i>AF</i><sup>2</sup><br>− <i>BG</i><sup>2</sup> − (<i>C</i> + ${la})<i>H</i><sup>2</sup> = 0.<br><br>(Here ${A}, <i>B</i>, <i>C</i>, … are the curve’s coefficients, not the asymptote polynomial ${A} of the Method part.) There is exactly one such ${la}, and the factorised result is the asymptote pair ${S} + ${la} = 0. The conjugate hyperbola then comes free from ${Spp} = 2(${S} + ${la}) − ${S}, that is ${Spp} = ${S} + 2${la}.`,
      },
      { t: 'fig', id: 'm11-10-C-d1' },

      { t: 'part', title: 'Limiting conditions' },
      {
        t: 'p',
        html: `• The asymptote pair ${HYPL} = 0 is a <b>degenerate conic</b>: the pair of intersecting lines Topic 01 listed under “plane through the vertex”. It is the boundary case between the hyperbola and its conjugate, sitting at constant 0 between 1 and −1.<br>• “Conjugate hyperbola” and “rectangular hyperbola” are unrelated conditions. Every hyperbola has a conjugate; only ${a} = ${b} makes one rectangular. The main text’s MCQ distractor already flags this confusion.<br>• The relation ${E_SUM} forces both eccentricities above 1 and at least one of them at most √2 (both equal √2 only for the rectangular hyperbola, ${a} = ${b}): a useful reasonableness check.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'C1: JEE Main',
        q: `For the hyperbola 9${X2} − 16${Y2} = 144, find the equations of the asymptotes, the equation of the conjugate hyperbola, the two eccentricities, and verify that ${E_SUM}.`,
        steps: [
          `Divide by 144 to reach standard form:<br><br>${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1,  ${a} = 4, ${b} = 3.`,
          `<b>Asymptotes.</b> Same left side, constant 0:<br><br>${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}0<br>⟹ 9${X2} − 16${Y2} = 0<br>⟹ (3${x} − 4${y})(3${x} + 4${y}) = 0,<br><br>so the asymptotes are 3${x} − 4${y} = 0 and 3${x} + 4${y} = 0, i.e. ${y} = ±${fr('3', '4')}${x}, matching ${EQUI}.`,
          `<b>Conjugate hyperbola.</b> Same left side, constant −1:<br><br>${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}−1<br><br>⟺ ${fr(Y2, '9')}${NB}−${NB}${fr(X2, '16')}${NB}=${NB}1<br><br>⟺ 9${X2} − 16${Y2} = −144.<br><br>Its transverse axis is the ${y}-axis, of length 2${b} = 6; its vertices are (0, ±3).`,
          `<b>Eccentricities.</b><br><br>${e} = √(1 + ${fr('9', '16')}) = ${fr('5', '4')},<br><br>${ep} = √(1 + ${fr('16', '9')}) = ${fr('5', '3')}.<br><br>${fr('1', E2)} + ${fr('1', EP2)} = ${fr('16', '25')}${NB}+${NB}${fr('9', '25')}${NB}=${NB}1. ✓`,
          `<b>Two free checks.</b> Both curves have ${c} = √(16 + 9) = 5: the original’s foci are (±5, 0) and the conjugate’s are (0, ±5), all four on ${X2} + ${Y2} = 25. And<br>${S} + ${Spp} = (9${X2} − 16${Y2} − 144)<br>+ (9${X2} − 16${Y2} + 144)<br>= 2(9${X2} − 16${Y2}) = 2${A}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'C2: JEE Advanced',
        q: `Find the asymptotes of the curve <i>xy</i> − 3${y} − 2${x} = 0, identify the curve, and write down its conjugate hyperbola.`,
        steps: [
          `<b>Step 1: set up ${S} + ${la} = 0.</b> Write ${S} ≡ <i>xy</i> − 3${y} − 2${x}. Comparing with ${A}${X2} + 2<i>Hxy</i> + <i>B</i>${Y2} + 2<i>Gx</i> + 2<i>Fy</i> + <i>C</i> = 0 gives ${A} = 0, <i>H</i> = ${HALF}, <i>B</i> = 0, <i>G</i> = −1, <i>F</i> = −${fr('3', '2')}, <i>C</i> = 0. Demand that ${S} + ${la} = 0 be a pair of lines: the determinant with rows<br>(0, ${HALF}, −1),<br>(${HALF}, 0, −${fr('3', '2')}),<br>(−1, −${fr('3', '2')}, ${la})<br>must be 0. Expanding along the first row:<br><br>0(0 − ${fr('9', '4')}) − ${HALF}(${fr(la, '2')} − ${fr('3', '2')}) − 1(−${fr('3', '4')} − 0)<br><br>= −${fr(la, '4')} + ${fr('3', '4')}${NB}+${NB}${fr('3', '4')}${NB}=${NB}0, so<br><br>${la} = 6.`,
          `<b>Step 2: factorise.</b><br><i>xy</i> − 3${y} − 2${x} + 6 = ${y}(${x} − 3) − 2(${x} − 3)<br>= (${x} − 3)(${y} − 2),<br>so the asymptotes are ${x} = 3 and ${y} = 2.`,
          `<b>Step 3: identify the curve.</b> The asymptotes meet at (3, 2), which must be the centre. Put ${X} = ${x} − 3, ${Y} = ${y} − 2:<br><i>xy</i> − 3${y} − 2${x}<br>= (${X} + 3)(${Y} + 2) − 3(${Y} + 2) − 2(${X} + 3)<br>= <i>XY</i> − 6,<br>so the curve is <i>XY</i> = 6: a <b>rectangular hyperbola</b> <i>XY</i> = ${sq(c)} with ${sq(c)} = 6, centred at (3, 2), with perpendicular asymptotes (hence ${e} = √2, exactly as The Hyperbola’s “rectangular means root-two” fact predicts).`,
          `<b>Step 4: the conjugate.</b> From ${SSA}, with ${A} now the asymptote pair (not the coefficient of Step 1):<br>${Spp} = 2(<i>xy</i> − 3${y} − 2${x} + 6) − (<i>xy</i> − 3${y} − 2${x})<br>= <i>xy</i> − 3${y} − 2${x} + 12,<br>i.e. <i>xy</i> − 2${x} − 3${y} + 12 = 0, which in shifted coordinates is <i>XY</i> = −6: the same rectangular hyperbola turned into the other pair of wedges, as it must be.`,
          `<b>Why it is “Advanced”.</b> The whole solution rests on one structural fact (curve and asymptotes differ only in the constant), used three times: to find ${la}, to locate the centre without completing any square, and to produce the conjugate for free. A student who instead tries to rotate axes or to take limits as ${x} → ∞ will get there eventually and run out of time. Note also that this curve has no ${X2} or ${Y2} term at all, so none of the main text’s standard-form machinery applies directly; the asymptote route is the only fast one.`,
        ],
        ans: `${x} = 3 and ${y} = 2`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the asymptotes of ${fr(X2, '25')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1.`,
            a: `${fr(X2, '25')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}0 ⇒ (3${x} − 5${y})(3${x} + 5${y}) = 0, i.e. ${y} = ±${fr('3', '5')}${x}.`,
          },
          {
            q: `Write the conjugate hyperbola of ${fr(X2, '4')}${NB}−${NB}${fr(Y2, '5')}${NB}=${NB}1 and find both eccentricities.`,
            a: `${fr(Y2, '5')}${NB}−${NB}${fr(X2, '4')}${NB}=${NB}1; ${e} = √(1 + ${fr('5', '4')}) = ${fr('3', '2')} and ${ep} = √(1 + ${fr('4', '5')}) = ${fr('3', '√5')} = ${fr('3√5', '5')}. Check: ${fr('4', '9')}${NB}+${NB}${fr('5', '9')}${NB}=${NB}1. ✓`,
          },
          {
            q: `Find the equation of the hyperbola whose asymptotes are 3${x} − 4${y} = 0 and 3${x} + 4${y} = 0 and which passes through (8, 3√3).`,
            a: `The curve is 9${X2} − 16${Y2} = ${k} for some ${k}; substituting (8, 3√3) gives 9(64) − 16(27) = 576 − 432 = 144, so 9${X2} − 16${Y2} = 144, i.e. ${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1.`,
          },
          {
            q: `The angle between the asymptotes of a hyperbola is 60° (the angle containing the transverse axis). Find ${e} using ${e} = sec ${th}, and check it against The Hyperbola’s fourth worked example.`,
            a: `2${th} = 60° ⇒ ${th} = 30° and ${e} = sec 30° = ${fr('2', '√3')}: the same answer The Hyperbola’s fourth worked example obtained the long way through tan ${th} = ${BA} and ${E2} = 1 + ${fr(B2, A2)}. For the obtuse reading 2${th} = 120°, ${e} = sec 60° = 2.`,
          },
          {
            q: `For ${fr(X2, '9')}${NB}−${NB}${fr(Y2, '16')}${NB}=${NB}1, find the product of the perpendicular distances from any point of the curve to the two asymptotes.`,
            a: `${PROD} = ${fr('9 ⋅ 16', '25')} = ${fr('144', '25')}.`,
          },
          {
            q: `Find the area of the triangle formed by any tangent to ${fr(X2, '16')}${NB}−${NB}${fr(Y2, '9')}${NB}=${NB}1 and its two asymptotes.`,
            a: '<i>ab</i> = 4 × 3 = 12 square units, whatever the point of contact.',
          },
          {
            q: `Find the asymptotes of <i>xy</i> − 2${x} − 4${y} = 0 and the centre of the curve.`,
            a: `${S} = <i>xy</i> − 2${x} − 4${y}; ${A} = <i>B</i> = 0, <i>H</i> = ${HALF}, <i>G</i> = −1, <i>F</i> = −2, and the determinant condition gives ${la} = 8. Then <i>xy</i> − 2${x} − 4${y} + 8 = (${x} − 4)(${y} − 2), so the asymptotes are ${x} = 4 and ${y} = 2 and the centre is (4, 2). (The curve is <i>XY</i> = 8.)`,
          },
          {
            q: `A hyperbola and its conjugate have eccentricities ${e} and ${ep}. If ${e} = ${fr('13', '12')}, find ${ep}.`,
            a: `${fr('1', EP2)} = 1 − ${fr('144', '169')} = ${fr('25', '169')}, so ${ep} = ${fr('13', '5')}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 1002–1008 ────────────────
  {
    n: 'D',
    title: 'Families of conics: S + λS′ = 0',
    extra: true,
    kalam: 'If S = 0 and S′ = 0 are two curves and P is a point common to both, then S + λS′ = 0 also passes through P, for every value of λ.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Extends The Circle (Topic 02): its Key definitions and formulas, CBSE board derivation and Worked examples parts (the three-point method of its fourth worked example), and Tangents to a Conic. NCERT’s Historical Note credits this idea to Lamé; family-of-circles questions are a frequent JEE Main item ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `The Circle found a circle through three points by substituting each point and solving three simultaneous equations for ${g}, ${f}, ${c}. When the points are handed to you as “the intersection of two curves”, there is a far better move.`,
      },
      {
        t: 'p',
        html: `<b>The principle.</b> If ${S0} and ${Sp} = 0 are two curves and ${P} is a point common to both, then ${FAM} also passes through ${P}, for every value of ${la}, because ${S}(${P}) = 0 and ${Sp}(${P}) = 0 make ${S}(${P}) + ${la}${Sp}(${P}) = 0 automatically.`,
      },
      {
        t: 'p',
        html: `That is the entire theory. One unknown constant ${la}, fixed by one extra condition, in place of a three-variable simultaneous system. The standard uses:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Situation', 'Family', 'Fix λ by'],
        rows: [
          [`Circles through the intersection of two circles ${S}, ${Sp}`, `${FAM}, ${la}${NB}≠${NB}−1`, 'one further point, or a centre condition, or a radius'],
          [`Circles through the intersection of a circle ${S} and a line ${L}`, `${S} + ${la}${L} = 0`, 'one further point or condition'],
          [
            'Circles through two given points <i>A</i>, <i>B</i>',
            `(${x} − ${x1})(${x} − ${x2}) + (${y} − ${y1})(${y} − ${y2}) + ${la}<i>L</i><sub>AB</sub> = 0`,
            'one further condition',
          ],
          [`Circle touching a line ${L} = 0 at a given point ${P11}`, `(${x} − ${x1})<sup>2</sup> + (${y} − ${y1})<sup>2</sup> + ${la}${L} = 0`, 'one further condition'],
          ['Conics through the four intersections of two conics', FAM, 'one further point, or “make it a circle”'],
          ['Conics through the four intersections of two line-pairs', `${sb('L', '1')}${sb('L', '2')} + ${la}${sb('L', '3')}${sb('L', '4')} = 0`, 'one further point'],
        ],
      },

      { t: 'part', title: 'Three things to notice, all examinable' },
      {
        t: 'p',
        html: `1. <b>${la} = −1 is special for two circles.</b> Both have ${X2} + ${Y2} with coefficient 1, so those terms cancel and ${S} − ${Sp} = 0 collapses to a straight line:`,
      },
      {
        t: 'formula',
        kicker: 'Radical axis',
        main: `${S} − ${Sp} = 0:<br>2(${sb('g', '1')} − ${sb('g', '2')})${x} + 2(${sb('f', '1')} − ${sb('f', '2')})${y}<br>+ (${sb('c', '1')} − ${sb('c', '2')}) = 0.`,
        legend: [
          `${sb('g', '1')}, ${sb('f', '1')}, ${sb('c', '1')} = the constants of the circle ${S} = 0 (its ${X2} and ${Y2} coefficients 1)`,
          `${sb('g', '2')}, ${sb('f', '2')}, ${sb('c', '2')} = the constants of the circle ${Sp} = 0 (likewise)`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `That is the <b>radical axis</b>, and when the circles meet in two points it is their <b>common chord</b> (when they touch, their common tangent). This is why ${la}${NB}≠${NB}−1 is excluded in the Method part’s table: at that one value the “circle” degenerates into a line. It is also the fastest way to find a common chord: subtract.`,
      },
      {
        t: 'p',
        html: `2. <b>“Make it a circle” is a coefficient condition.</b> In ${FAM} built from two conics, demanding coefficient of ${X2} = coefficient of ${Y2} and coefficient of <i>xy</i> = 0 is one or two linear equations in ${la}. If a ${la} exists, the four intersection points are <b>concyclic</b>: a favourite JEE Advanced way to hide a circle inside an ellipse problem.`,
      },
      {
        t: 'p',
        html: `3. <b>Divide by 1 + ${la} at the end.</b> For two circles, ${FAM} has ${X2}-coefficient 1 + ${la}. Normalise before reading off centre and radius, or the (−${g},${NB}−${f}) rule gives nonsense.`,
      },
      { t: 'fig', id: 'm11-10-D-d1' },

      { t: 'part', title: 'Limiting conditions' },
      {
        t: 'p',
        html: `• The curves must be written with the <b>same leading normalisation</b> for the ${la} = −1 degeneration to be the radical axis; if one circle is 2${X2} + 2${Y2} + …, divide by 2 first.<br>• ${FAM} passes through the common points <b>whether or not those points are real</b>. Two non-intersecting circles still have a radical axis; it is simply a line that meets neither.<br>• The family ${FAM} misses exactly one curve of the pencil, namely ${Sp} = 0 itself. When a question’s answer might be ${Sp}, use ${mu}${S} + ${la}${Sp} = 0 instead.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'D1: JEE Main',
        q: `Find the equation of the circle passing through the points of intersection of<br>${S}: ${X2} + ${Y2} − 4${x} − 6${y} + 8 = 0<br>and<br>${Sp}: ${X2} + ${Y2} − 2${x} − 4${y} + 4 = 0<br>and also through the point (3, 3).`,
        steps: [
          `Write the family<br>${FAM}.`,
          `Substitute (3, 3) and solve for ${la}:<br>${S}(3, 3) = 9 + 9 − 12 − 18 + 8 = −4,<br>${Sp}(3, 3) = 9 + 9 − 6 − 12 + 4 = 4,<br>−4 + 4${la} = 0 ⟹ ${la} = 1.`,
          `So the circle is ${S} + ${Sp} = 0:<br>2${X2} + 2${Y2} − 6${x} − 10${y} + 12 = 0<br>⟹ ${X2} + ${Y2} − 3${x} − 5${y} + 6 = 0<br>after dividing by 1 + ${la} = 2. Its centre is (${fr('3', '2')}, ${fr('5', '2')}) and its radius is<br><br>√(${fr('9', '4')} + ${fr('25', '4')} − 6) = √(${fr('10', '4')}) = ${fr('√10', '2')}.`,
          `<b>Check.</b> The common points of ${S} and ${Sp} are found from the radical axis ${S} − ${Sp} = 0, that is −2${x} − 2${y} + 4 = 0, i.e. ${x} + ${y} = 2; substituting into ${Sp} gives (0, 2) and (1, 1). Both satisfy the answer: 0 + 4 − 0 − 10 + 6 = 0 and 1 + 1 − 3 − 5 + 6 = 0. And (3, 3) gives 9 + 9 − 9 − 15 + 6 = 0. ✓`,
          `<b>Speed note.</b> Doing this by the three-point method of The Circle (solve ${S} = ${Sp} = 0 for the two points, then run the method with (3, 3)) takes three simultaneous equations in ${g}, ${f}, ${c}. The family method took one linear equation in ${la}.`,
        ],
        ans: `${X2} + ${Y2} − 3${x} − 5${y} + 6 = 0`,
      },
      {
        t: 'ex',
        tag: 'D2: JEE Advanced',
        q: `Show that the four points of intersection of the ellipses<br>2${X2} + 3${Y2} = 6 and 3${X2} + 2${Y2} = 6<br>are concyclic, and find the circle on which they lie. What does ${la} = −1 give instead?`,
        steps: [
          `<b>Step 1: write the family.</b> With ${S} = 2${X2} + 3${Y2} − 6 and ${Sp} = 3${X2} + 2${Y2} − 6,<br>${S} + ${la}${Sp}<br>= (2 + 3${la})${X2} + (3 + 2${la})${Y2} − 6(1 + ${la})<br>= 0.<br>There is no <i>xy</i> term to kill, so the only requirement for a circle is that the two squared coefficients agree:<br>2 + 3${la} = 3 + 2${la} ⟹ ${la} = 1.`,
          `<b>Step 2: read off the circle.</b><br><br>5${X2} + 5${Y2} − 12 = 0 ⟹ ${X2} + ${Y2} = ${fr('12', '5')},<br><br>a circle of radius √(${fr('12', '5')}) = ${fr('2√15', '5')} ≈ 1.549. Since a ${la} exists, the four points are concyclic.`,
          `<b>Step 3: verify directly.</b> Adding the two given equations gives 5${X2} + 5${Y2} = 12 immediately, which is the same circle and is the one-line version of the whole argument. Solving the pair: subtracting gives ${X2} = ${Y2}, so ${y} = ±${x}, and then 5${X2} = 6 gives ${x} = ±√(${fr('6', '5')}). The four points are<br><br>(±${fr('√30', '5')}, ±${fr('√30', '5')}),<br><br>each at distance √(${fr('6', '5')} + ${fr('6', '5')}) = √(${fr('12', '5')}) from the origin. ✓`,
          `<b>Step 4: the ${la} = −1 member.</b><br>${S} − ${Sp} = −${X2} + ${Y2} = 0 ⟹ ${y} = ±${x},<br>a <b>pair of straight lines</b> through the four points: the degenerate member of the pencil, and the direct analogue of the radical axis in the two-circle case. Notice it gives the four points’ directions for free, which is how Step 3 got started.`,
          `<b>Why it is “Advanced”.</b> The insight is that “concyclic” is not a geometric fact to be checked point by point but an <b>algebraic condition on one parameter</b>: a circle exists in the pencil exactly when the coefficients can be forced to match. Recognising that turns a four-point verification into solving 2 + 3${la} = 3 + 2${la}. The same move handles the general version: two conics <i>ax</i><sup>2</sup> + 2<i>hxy</i> + <i>by</i><sup>2</sup> + … meet in four concyclic points precisely when the pencil contains a circle, which needs both the <i>xy</i> coefficient to vanish and the two square coefficients to agree: two conditions on one ${la}, so it is genuinely a restriction and not automatic.`,
        ],
        ans: `${X2} + ${Y2} = ${fr('12', '5')}`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the common chord of ${X2} + ${Y2} − 4${x} − 6${y} + 4 = 0 and ${X2} + ${Y2} − 2${x} − 8${y} + 4 = 0.`,
            a: `Subtract: −2${x} + 2${y} = 0, i.e. ${y} = ${x}.`,
          },
          {
            q: `Find the circle through the intersection of ${X2} + ${Y2} = 9 and ${x} + ${y} = 3 that also passes through (1, 1).`,
            a: `Family ${X2} + ${Y2} − 9 + ${la}(${x} + ${y} − 3) = 0; at (1, 1): −7 + ${la}(−1) = 0, so ${la} = −7 and the circle is ${X2} + ${Y2} − 7${x} − 7${y} + 12 = 0. (Check: it passes through (0, 3) and (3, 0), the two points where the line cuts the circle.)`,
          },
          {
            q: `Find the circle that touches the line 3${x} + 4${y} = 25 at the point (3, 4) and passes through the origin.`,
            a: `Family (${x} − 3)<sup>2</sup> + (${y} − 4)<sup>2</sup> + ${la}(3${x} + 4${y} − 25) = 0; at the origin 9 + 16 − 25${la} = 0, so ${la} = 1 and the circle is ${X2} + ${Y2} − 3${x} − 4${y} = 0. (Check: solving it against 3${x} + 4${y} = 25 gives the double point (3, 4), so the contact is genuine.)`,
          },
          {
            q: `Find the radical axis of ${X2} + ${Y2} = 4 and ${X2} + ${Y2} − 6${x} + 8 = 0, and say whether the two circles actually meet.`,
            a: `Subtract: 6${x} − 12 = 0, i.e. ${x} = 2. The circles do meet: ${x} = 2 meets ${X2} + ${Y2} = 4 at the single point (2, 0), and that point satisfies the second circle too, so the circles touch externally at (2, 0) and the radical axis is their common tangent there.`,
          },
          {
            q: `Write the family of circles through (1, 0) and (0, 1), and find the member whose centre lies on the line ${x} + ${y} = 1.`,
            a: `(${x} − 1)(${x} − 0) + (${y} − 0)(${y} − 1) + ${la}(${x} + ${y} − 1) = 0, i.e. ${X2} + ${Y2} + (${la} − 1)${x} + (${la} − 1)${y} − ${la} = 0. The centre is (${fr(`1 − ${la}`, '2')}, ${fr(`1 − ${la}`, '2')}), so it lies on ${x} + ${y} = 1 when 1 − ${la} = 1, that is ${la} = 0, and the circle is ${X2} + ${Y2} − ${x} − ${y} = 0: the circle on the segment joining (1, 0) and (0, 1) as diameter. (Every member has its centre on ${y} = ${x}, because the two given points are symmetric in that line, so that condition alone would not single out a circle.)`,
          },
          {
            q: `Find the equation of the conic through the four points of intersection of ${X2} + 4${Y2} = 4 and 4${X2} + ${Y2} = 4 that is a circle.`,
            a: `Adding the two equations gives 5${X2} + 5${Y2} = 8, i.e. ${X2} + ${Y2} = ${fr('8', '5')}; the corresponding ${la} is 1, from 1 + 4${la} = 4 + ${la}.`,
          },
          {
            q: `Why can the family ${FAM} never produce the circle ${Sp} = 0 itself, and how do you repair that?`,
            a: `Putting ${la} → ∞ would be needed, which is not a value. Repair it by writing the symmetric family ${mu}${S} + ${la}${Sp} = 0 with (${mu},${NB}${la}) ≠ (0, 0), which contains both ${S} = 0 (${la} = 0) and ${Sp} = 0 (${mu} = 0).`,
          },
          {
            q: `Two circles ${S} = 0 and ${Sp} = 0 do not intersect. Does ${S} − ${Sp} = 0 still define a line, and what is it?`,
            a: `Yes, provided the circles are not concentric. The ${X2} and ${Y2} terms cancel regardless of whether the circles meet, so ${S} − ${Sp} = 0 is a line: the <b>radical axis</b>, the locus of points from which the tangent lengths to the two circles are equal (both lengths are √${S1} and √${S1p}, and ${S1} = ${S1p} is exactly this line). It is a common chord only when the circles meet.`,
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet: Additional topics A to D' },
      {
        t: 'p',
        html: `<b>One expression, four jobs.</b> For ${S0} and a point ${P11}, build ${T} by ${X2} → ${XX1}, ${Y2} → ${YY1}, <i>xy</i> → ${HALF}(<i>xy</i><sub>1</sub> + ${x1}${y}), ${x} → ${HALF}(${x} + ${x1}), ${y} → ${HALF}(${y} + ${y1}), and ${S1} = ${S}${P11}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Reading', 'Condition on the point'],
        rows: [
          [`${T0} is the tangent`, 'point on the conic'],
          [`${T0} is the chord of contact`, 'point outside'],
          [`${T0} is the <b>polar</b>`, 'any point (the general name)'],
          [`${TS1} is the <b>chord bisected at the point</b>`, 'point inside'],
          [`Related: <i>SS</i><sub>1</sub> = ${T}<sup>2</sup> is the pair of tangents`, 'point outside (see Tangents to a Conic)'],
        ],
      },
      {
        t: 'snapshot',
        rows: [
          {
            f: `Diameters (locus of midpoints of chords of slope ${m})`,
            note: `circle ${x} + <i>my</i> = 0;<br>parabola ${D_PAR} (parallel to the axis, always);<br>ellipse ${D_ELL};<br>hyperbola ${D_HYP}.<br>Conjugate diameters: <i>mm</i>′ = −${fr(B2, A2)} (ellipse), +${fr(B2, A2)} (hyperbola), −1 (circle).<br>Equi-conjugate: ${EQUI}, semi-length ${SEMI}.`,
          },
          {
            f: `Poles of ${LINE}`,
            note: `circle ${POLE_C};<br>parabola ${POLE_P};<br>ellipse ${POLE_E};<br>hyperbola ${POLE_H}.<br>La Hire: ${Q} on the polar of ${P} ⟺ ${P} on the polar of ${Q}. Conjugate points on a circle: ${x1}${x2} + ${y1}${y2} = ${R2}; conjugate lines: ${CONJ_LINES}. <b>The polar of a focus is its directrix.</b> A line through the centre has no finite pole.`,
          },
          {
            f: 'Hyperbola, asymptotes, conjugate: one constant apart',
            note: `${HYP} (${S}),<br>= 0 (asymptotes ${A}),<br>= −1 (conjugate ${Spp}),<br>${SSA}<br>(with ${S}, ${A}, ${Spp} the left-minus-right polynomials). Shared asymptotes; shared ${c} = √(${A2} + ${B2}); four foci on ${X2} + ${Y2} = ${A2} + ${B2}; ${E_SUM}; conjugate’s latus rectum ${fr(`2${A2}`, b)}. Angle between asymptotes = 2${th} with ${th} = tan<sup>−1</sup> ${BA}, and ${e} = sec ${th}. Product of distances to the asymptotes = ${PROD}. Tangent-and-asymptote triangle has area <i>ab</i>, and the tangent is bisected between them. Off-centre hyperbola: find ${la} making ${S} + ${la} = 0 a line pair.`,
          },
          {
            f: 'Families',
            note: `${FAM} passes through every common point of ${S0} and ${Sp} = 0. Two circles: ${la} = −1 gives the radical axis ${S} − ${Sp} = 0 (the common chord when they meet in two points; when they touch, their common tangent); otherwise divide by 1 + ${la} before reading centre and radius. Circle and line: ${S} + ${la}${L} = 0. Touching a line at a point: (${x} − ${x1})<sup>2</sup> + (${y} − ${y1})<sup>2</sup> + ${la}${L} = 0. Four points concyclic ⟺ some ${la} makes ${S} + ${la}${Sp} a circle.`,
          },
        ],
        aids: [
          `“${T} has four jobs; the point’s position picks which.”`,
          `“Inside gives ${TS1}, outside gives ${T0}.”`,
          '“Every diameter of a central conic goes through the centre; every diameter of a parabola runs parallel to the axis.”',
          '“Focus and directrix are pole and polar.”',
          '“One, zero, minus one: hyperbola, asymptotes, conjugate.”',
          '“Subtract two circles and the curvature falls out.”',
        ],
      },
    ],
  },
];
