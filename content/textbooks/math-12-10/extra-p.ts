import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Additional topic P, pp. 678–684 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Addendum P — What
 * JEE Actually Asks", kept with the book's letter as the chapter's last additional
 * topic (decision 2). It opens partway down p. 678, below the rule that closes
 * Addendum D's answers, and ends on p. 684; Chapter 11 starts on p. 685. The
 * numbered headings "P.1 How to read this section" … "P.6 Where to spend extra
 * practice" are the parts, without their numbers (P.1 opens the topic, so there is
 * no separate Introduction). The share table is a table block as printed; the
 * "Concrete return visits" list is one paragraph of "•" items, each run of papers
 * a count ("Papers cited: 7 (JEE 4, Main 2, Adv 1)"; a paper before 2013 is "JEE",
 * "2002S" included; a bare year after 2012 is "exam not named"), every other paper
 * name without its year, date and shift. Each archetype A1–A5 is a worked example
 * tagged with its heading: its "Shape / Method" text and its worked example's data
 * are the question, the working the steps, its "Answer:" or closing boxed result
 * the answer box (a remark printed after the answer is the last step); A1 and A5
 * box a result mid-working and keep it in the steps. The sixth-shape remark after
 * A5 is a paragraph. The traps 1–10 are one mistakes block; the graded practice set
 * P1–P12 is one practice block, the working after each question its answer. Every
 * share or frequency of past questions carries the estimate label; italic words in
 * print are plain here, the "Shape:" and "Method:" labels bold. These pages print
 * no drawing and no formula card (vector shapes: only the rules between sections
 * and the boxes round results). A vector is its italic letter carrying the
 * combining arrow (escaped ARW) inside the <i> (decision 36), unit vectors
 * i, j, k and n with hats (the combining hat escaped), the dot product ·, the
 * cross product ×, the scalar triple product [a b c] as printed; the cross-product determinant a <vmat>; the
 * binomial coefficient a <binom>. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const grid = (tag: string, rows: string[][]) =>
  `<${tag}>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</${tag}>`;
/** A determinant: one array per row, one string per cell. */
const vm = (...rows: string[][]) => grid('vmat', rows);
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
/** The combining right arrow over a vector's letter. */
const ARW = '\u20d7';
/** The combining hat over a unit vector's letter. */
const HAT = '\u0302';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

/** A vector: its italic letter(s) carrying the arrow. */
const V = (s: string) => I(`${s}${ARW}`);
const va = V('a');
const vb = V('b');
const vc = V('c');
const vr = V('r');
const ZERO = `0${ARW}`;
/** Unit vectors i, j, k, n with hats (escaped). */
const ii = I('\u00ee');
const jj = I('\u0135');
const kk = I(`k${HAT}`);
const nh = I(`n${HAT}`);

const c = I('c');
const k = I('k');
const l = I('l');
const m = I('m');
const n = I('n');
const p = I('p');
const t = I('t');
const u = I('u');
const x = I('x');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const E = I('E');
const P = I('P');
const la = I('λ');
const al = I('α');
const be = I('β');
const th = I('θ');

const sq = (s: string) => `${s}<sup>2</sup>`;
// A short |…| is one unit: its inner spaces never break (Android check of Ch 10, "|a⃗" / "+ b⃗|").
const glueShort = (s: string) => (s.replace(/<[^>]*>/g, '').length <= 24 ? s.replace(/ (?![^<]*>)/g, NB) : s);
const abs = (s: string) => `|${WJ}${glueShort(s)}|`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** A point or triple, its commas glued: (1, −1, 3). */
const pt = (...s: string[]) => `(${s.join(`,${NB}`)})`;
/** Dot and cross products, spaced. */
const dot = (a: string, b: string) => `${a}${NB}·${NB}${b}`;
const cross = (a: string, b: string) => `${a} × ${b}`;
/** The scalar triple product [a b c]. */
const TRIPLE = `[${va}${NB}${vb}${NB}${vc}]`;
/** A ratio a ∶ b, glued. */
const ratio = (a: string, b: string) => `${a}${NB}∶${NB}${b}`;
/** A mass in the mass-point method, m(A). */
const mass = (s: string) => `${m}(${s})`;
/** A signed term: '+3' → "+ 3", '−' → "−". */
const term = (s: string) => `${s[0]} ${s.slice(1)}`;
/** Coefficients and unit vectors: ijk('2', '+', '−2') is 2i + j − 2k with hats. */
const ijk = (a: string, b: string, cc: string) => `${a}${ii} ${term(b)}${jj} ${term(cc)}${kk}`;

const AD = I('AD');
const BE = I('BE');
const BC = I('BC');
const AC = I('AC');
const BP = I('BP');
const PE = I('PE');
const BD = I('BD');
const DC = I('DC');
const AE = I('AE');
const EC = I('EC');
const TRI = `△${I('ABC')}`;
const SIXTH = fr('1', '6');
const HALF = fr('1', '2');
const AXB = cross(va, vb);
const ADOTB = dot(va, vb);
const VEC8 = `8${ii} − 8${jj} + 4${kk}`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 678–684 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'How to read this section' },
      {
        t: 'p',
        html: 'The patterns below come from a review of past JEE Main and Advanced vector-algebra questions. What the review gives reliably is <b>which concept each question tests</b>, <b>the year and session</b>, and the <b>numerical answers</b> of many items. Everything printed here is classified from that evidence; every worked example and practice problem has been solved from scratch.',
      },

      { t: 'part', title: 'Where the questions come from' },
      {
        t: 'p',
        html: `Past papers spanning more than four decades give roughly <b>135 questions</b> on this chapter ${ESTIMATE}, falling into three blocks that map onto the chapter’s topics:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Block', 'Approx. share of questions', 'Dominant content'],
        rows: [
          ['Position-vector geometry', '~16% (≈21 questions)', 'Collinearity, section formula, ratios in triangles, quadrilateral identification'],
          ['Products of two vectors', '~22% (≈30 questions)', 'Projections, perpendicular/parallel conditions, areas, angles'],
          ['Triple products & applications', '~62% (≈84 questions)', 'Coplanarity, parallelepiped/tetrahedron volumes, BAC–CAB, basis/reciprocal systems'],
        ],
      },
      {
        t: 'p',
        html: `Concrete return visits recorded in past papers:<br>• <b>Coplanarity with a parameter:</b> two JEE papers, then JEE (${I('abc')} = −1), JEE (answer: ${c} is the geometric mean), JEE (<b>two</b> distinct values of ${la}), Main (${rel(la, '=', '1')}). Papers cited: 6 (JEE 5, Main 1). This is one of the most repeated shapes in past papers ${ESTIMATE}.<br>• <b>Volume of a parallelepiped/tetrahedron:</b> two JEE papers, JEE (minimum-volume ${I('a')}), another JEE paper, Adv (match-list on scaled volumes), Main, Main (${n} from volume 158). Papers cited: 7 (JEE 4, Main 2, Adv 1).<br>• <b>Projections:</b> six JEE papers, two Adv papers, Main (numeric answer 8), and two more Main papers. Papers cited: 11 (JEE 6, Main 3, Adv 2). No other idea appears in more sessions ${ESTIMATE}.<br>• <b>Vector perpendicular to two given vectors, often with a prescribed magnitude:</b> four JEE papers and Main (magnitude 12, answer of the form ±4(⋯)). Papers cited: 5 (JEE 4, Main 1).<br>• <b>Angles from dot/cross data:</b> two JEE papers, a later paper, Main (${abs(`${al} − ${be}`)} = 30°), and another Main paper. Papers cited: 5 (JEE 2, Main 2, exam not named 1).<br>• <b>Position-vector ratios and cevians:</b> a run of 4–8 mark proofs in older JEE papers (one of them ${ratio(BP, PE)} = ${ratio('8', '3')}); the modern descendant is the short section-formula numeric (Main, answer 0.8). Papers cited: 8 (JEE 7, Main 1).<br>• <b>Counting / independence arguments:</b> Adv (non-coplanar choices from the eight ${pt('±1', '±1', '±1')} vectors; answer 32 = 2<sup>5</sup>, so ${rel(p, '=', '5')}). Papers cited: 1 (Adv 1).`,
      },
      {
        t: 'p',
        html: `<b>Frequency verdict.</b> In recent Main sessions there is at least one question from this chapter in essentially every slot of the latest years surveyed ${ESTIMATE}: typically <b>one to two questions per paper</b>, almost always a fast computation (projection, coplanarity determinant, volume, angle). Advanced spreads the ideas inside larger multi-constraint problems.`,
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'ex',
        tag: 'A1: The parameter hunt via a vanishing condition',
        q: `<b>Shape:</b> “${la} such that these vectors are perpendicular / parallel / coplanar.” <b>Method:</b> Perpendicular${NB}⇒${NB}${ADOTB} = 0; parallel${NB}⇒${NB}components proportional (or ${AXB} = ${ZERO}); coplanar${NB}⇒${NB}determinant = 0. Solve the resulting equation. Watch for “no such ${la}” and “exactly two values.”<br><br><b>Worked example:</b> find ${la} such that ${va} = ${la}${ii} + 2${jj} − ${kk} and ${vb} = 3${ii} − ${jj} + ${la}${kk} are (i) perpendicular, (ii) parallel.`,
        steps: [
          `(i) ${ADOTB} = 3${la} − 2 − ${la} = 2${la} − 2 = 0${NB}⇒${NB}${rel(la, '=', '1')}.`,
          `(ii) Parallel needs proportional components: ${fr(la, '3')} = ${fr('2', '−1')} = ${fr('−1', la)}. The middle ratio is −2, so we would need ${la} = −6 from the first ratio and, from the last, −${fr('1', la)} = −2, i.e. ${la} = ${HALF}: inconsistent, hence <b>no</b> ${la} <b>exists</b>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'A2: Projection, forward and inverted',
        q: `<b>Shape:</b> “projection of ${va} on ${vb}”, or a projection equality, or projection of a segment on a line. <b>Method:</b> proj<sub>${vb}</sub>${NB}${va}${NB}=${NB}${fr(ADOTB, abs(vb))}: divide by the magnitude of the vector you land on. Equality of projections converts to a linear equation in unknown components.<br><br><b>Worked example</b> (the shape of a Main question): “Projection of the segment joining ${pt('1', '−1', '3')} and ${pt('2', '−4', '11')} on the line joining ${pt('−1', '2', '3')} and ${pt('3', '−2', '10')}.”`,
        steps: [
          `${V('PQ')} = ${ijk('', '−3', '+8')}, ${V('RS')} = ${ijk('4', '−4', '+7')}`,
          `${dot(V('PQ'), V('RS'))} = 4 + 12 + 56 = 72, ${abs(V('RS'))}${NB}=${NB}√(16${NB}+${NB}16${NB}+${NB}49)${NB}=${NB}9`,
          `Projection = ${fr('72', '9')}`,
        ],
        ans: '8.',
      },
      {
        t: 'ex',
        tag: 'A3: Perpendicular vector with a prescribed magnitude',
        q: `<b>Shape:</b> “find a vector of magnitude ${k} perpendicular to both ${va} and ${vb}.” <b>Method:</b> take ${la}(${AXB}), impose ${abs(la)}${abs(AXB)} = ${k}, read off ${la}; expect a ± pair.<br><br><b>Worked example:</b> ${va} = ${ijk('2', '+', '−2')}, ${vb} = ${ijk('', '+2', '+2')}, magnitude 12.`,
        steps: [
          `${AXB} = ${vm([ii, jj, kk], ['2', '1', '−2'], ['1', '2', '2'])} = ${ijk('6', '−6', '+3')},<br>${abs(AXB)} = 9`,
          `${nh} = ${fr(ijk('2', '−2', '+'), '3')}, ±12${nh} = ±(${VEC8})`,
          `(Here 9${abs(la)} = 12 gives ${la} = ±${fr('4', '3')}, so ${la}(${AXB}) = ±(${VEC8}). The same skeleton appears in Main.)`,
        ],
        ans: `±(${VEC8}).`,
      },
      {
        t: 'ex',
        tag: 'A4: Coplanarity, volumes and the determinant machine',
        q: `<b>Shape:</b> coplanarity of three vectors or four points; volume of a box or tetrahedron; occasionally “for how many ${la}”. <b>Method:</b> one 3 × 3 determinant decides everything: zero${NB}⇒${NB}flat (coplanar/dependent); nonzero${NB}⇒${NB}volume ${abs(TRIPLE)}, tetrahedron ${SIXTH} of it. For “how many values,” reduce the determinant to a polynomial and <b>count real roots honestly</b> (a JEE paper’s official answer is exactly two).<br><br><b>Worked example</b> (Adv): three non-coplanar vectors are chosen from the eight vectors<br>{${pt('1', '1', '1')}, ${pt('−1', '−1', '−1')}, ${pt('−1', '1', '1')}, ${pt('1', '−1', '−1')},<br>${pt('1', '−1', '1')}, ${pt('−1', '1', '−1')}, ${pt('1', '1', '−1')}, ${pt('−1', '−1', '1')}}<br>in 2<sup>${p}</sup> ways; find ${p}.`,
        steps: [
          `These eight vectors are the four body diagonals of a cube and their negatives. Any three vectors drawn from <b>three distinct</b> diagonal lines are automatically non-coplanar (each such determinant has magnitude 4: e.g. rows ${pt('1', '1', '1')}, ${pt('−1', '1', '1')}, ${pt('1', '−1', '1')} give 4), while two vectors from the same line are dependent. So: choose 3 of the 4 diagonal lines, then one of 2 signs on each:`,
          `${bn('4', '3')} × 2 × 2 × 2 = 32${NB}=${NB}2<sup>5</sup>`,
        ],
        ans: rel(p, '=', '5'),
      },
      {
        t: 'ex',
        tag: 'A5: Ratios inside triangles by position vectors',
        q: `<b>Shape:</b> cevians ${AD}, ${BE} with stated division ratios; find where they meet and in what ratio. Historically 4–8 mark proofs in the older JEE papers; today compressed into section-formula numerics. <b>Method:</b> write the same intersection point two ways with undetermined scalars and compare coefficients of ${va}, ${vb}, ${vc}. (Mass points gives the ratio in seconds: use it as a check.)<br><br><b>Worked example</b> (JEE): In ${TRI}, ${D} ∈ ${BC} with ${ratio(BD, DC)}${NB}=${NB}${ratio('2', '1')}, ${E} ∈ ${AC} with ${ratio(AE, EC)}${NB}=${NB}${ratio('3', '1')}; ${P} = ${AD} ∩ ${BE}; find ${ratio(BP, PE)}.`,
        steps: [
          `Mass points: ${ratio(BD, DC)}${NB}=${NB}${ratio('2', '1')}${NB}⇒ ${ratio(mass(C), mass(B))}${NB}=${NB}${ratio('2', '1')}, so take ${mass(B)}${NB}=${NB}1, ${mass(C)}${NB}=${NB}2. Then ${ratio(AE, EC)}${NB}=${NB}${ratio('3', '1')}${NB}⇒ ${ratio(mass(C), mass(A))}${NB}=${NB}${ratio('3', '1')}${NB}⇒ ${mass(A)}${NB}=${NB}${fr('2', '3')}, so ${mass(E)}${NB}=${NB}${mass(A)}${NB}+${NB}${mass(C)}${NB}=${NB}${fr('8', '3')}. Hence<br>${ratio(BP, PE)}${NB}=${NB}${ratio(mass(E), mass(B))}${NB}= ${ratio(fr('8', '3'), '1')}${NB}=${NB}${ratio('8', '3')}`,
          `Vector check: with ${va}, ${vb}, ${vc} the vertex position vectors, ${D}${NB}=${NB}${fr(`${vb} + 2${vc}`, '3')}, ${E}${NB}=${NB}${fr(`3${vc}${NB}+${NB}${va}`, '4')}; writing ${P}${NB}= (1${NB}−${NB}${t})${vb}${NB}+${NB}${t}${E}${NB}= (1${NB}−${NB}${u})${va}${NB}+${NB}${u}${D} and matching the ${va}-coefficient gives ${fr(t, '4')}${NB}=${NB}1${NB}−${NB}${u}, matching ${vc} gives ${fr(`3${t}`, '4')}${NB}=${NB}${fr(`2${u}`, '3')} (since ${D} carries ${vc} with weight ${fr('2', '3')}), and the ${vb}-coefficient gives 1${NB}−${NB}${t}${NB}=${NB}${fr(u, '3')}. Solving the ${va}- and ${vb}-equations yields ${t}${NB}=${NB}${fr('8', '11')}, ${u}${NB}=${NB}${fr('9', '11')} (check in the ${vc}-equation: ${fr('3', '4')}${NB}⋅${NB}${fr('8', '11')}${NB}=${NB}${fr('6', '11')}${NB}=${NB}${fr('2', '3')}${NB}⋅${NB}${fr('9', '11')}), i.e. ${ratio(BP, PE)}${NB}=${NB}${ratio(t, `(1${NB}−${NB}${t})`)}${NB}=${NB}${ratio('8', '3')}.`,
        ],
        ans: '',
      },
      {
        t: 'p',
        html: `(A sixth recurring shape, pure angle/magnitude algebra from ${abs(`${va} ± ${vb}`)} expansions and Lagrange’s identity (${ADOTB})<sup>2</sup> + ${abs(AXB)}<sup>2</sup> = ${abs(va)}<sup>2</sup>${abs(vb)}<sup>2</sup>, runs from an early JEE paper through a recent Main paper and is drilled in the practice set below.)`,
      },

      { t: 'part', title: 'The traps' },
      {
        t: 'mistakes',
        items: [
          `<b>The zero-condition swap.</b> ${ADOTB}${NB}=${NB}0${NB}⇔${NB}perpendicular; ${va}${NB}×${NB}${vb}${NB}=${NB}${ZERO}${NB}⇔${NB}parallel. Past papers punish this repeatedly (see two JEE papers). It is the single most planted distractor ${ESTIMATE}.`,
          `<b>The missing</b> ${SIXTH}<b>.</b> Tetrahedron volume is ${SIXTH}${abs(TRIPLE)}; the natural wrong answers are the full parallelepiped value (×1) or the triangle’s ${HALF}. Volume MCQs typically carry both decoys.`,
          `<b>Wrong projection denominator.</b> Divide by the magnitude of the vector projected <b>onto</b>. Decoys divide by ${abs(va)} or forget the division entirely (visible in the option sets of two JEE papers).`,
          `<b>Head-minus-tail reversal.</b> ${V('QP')} = −(${V('PQ')}); a reversed subtraction flips every sign while leaving the magnitude: half the options survive elimination purely on sign pattern.`,
          `<b>DR versus DC.</b> Direction cosines must satisfy ${sq(l)} + ${sq(m)} + ${sq(n)} = 1. Square-and-add kills two options of any DC question instantly; distractors offer raw ratios or components divided by ${abs(vr)}<sup>2</sup>.`,
          `<b>Negative determinants reported as volume.</b> ${TRIPLE} may be negative; the volume is its absolute value. An exam asking “the volume is” wants a positive number.`,
          `<b>BAC–CAB bracket blindness.</b> ${va} × (${cross(vb, vc)}) = (${dot(va, vc)})${vb} − (${ADOTB})${vc}, while (${AXB}) × ${vc} expands differently. The result always lives in the plane of the two vectors <b>inside</b> the bracket: an option containing ${va} (outermost) is instantly dead.`,
          `<b>“Obtuse for all ${x}” needs two conditions.</b> The JEE problem (answer an open interval, ${c}${NB}∈${NB}(−${fr('4', '3')},${NB}0)) demands both a negative leading coefficient and a negative discriminant, and strictly excludes the endpoints. Students who imposed only one condition landed on decoy intervals.`,
          `<b>Extraneous roots when counting</b> ${la}<b>.</b> After reducing a coplanarity determinant, count real solutions of the original condition: the JEE paper’s answer (“two”) punishes those who miscount after substitution.`,
          '<b>Coplanar ≠ collinear.</b> Zero triple product means dependence, which is weaker than collinearity; MCQs exploit the converse-direction confusion.',
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      { t: 'p', html: 'The twelve problems below are original, in the shapes documented above; every answer has been re-computed.' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the direction cosines of the vector from ${A}${pt('1', '2', '−2')} to ${B}${pt('3', '1', '0')}.`,
            a: `${V('AB')} = ${ijk('2', '−', '+2')}, ${abs(V('AB'))} = 3. DCs: (${fr('2', '3')},${NB}−${fr('1', '3')},${NB}${fr('2', '3')}). Check: ${fr('4', '9')} + ${fr('1', '9')} + ${fr('4', '9')} = 1.`,
          },
          {
            q: `Find ${k} so that ${A}${pt('2', '3', '4')}, ${B}${pt(k, '6', '10')}, ${C}${pt('4', '9', '16')} are collinear.`,
            a: `${V('AC')} = ${pt('2', '6', '12')} = 2${pt('1', '3', '6')}; collinearity forces ${V('AB')} = ${pt(`${k} − 2`, '3', '6')} ∥ ${pt('1', '3', '6')}, so 3 = 3 ⋅ 1 fixes scale 1, giving ${k} − 2 = 1, i.e. ${rel(k, '=', '3')}.`,
          },
          {
            q: `Find the projection of ${va} = ${ijk('2', '+3', '+2')} on ${vb} = ${ijk('', '+2', '+2')}.`,
            a: `${ADOTB} = 2 + 6 + 4 = 12, ${abs(vb)} = 3: projection = 4.`,
          },
          {
            q: `Find all unit vectors perpendicular to both ${ijk('', '+', '+')} and ${ijk('', '−', '+')}.`,
            a: `Cross product = (1 ⋅ 1 − 1 ⋅ (−1), 1 ⋅ 1 − 1 ⋅ 1, −1 − 1) = ${pt('2', '0', '−2')}, magnitude 2√2.<br>Answer: ±${fr(`${ii} − ${kk}`, '√2')}.`,
          },
          {
            q: `Find the area of the triangle with vertices ${I('O')}${pt('0', '0', '0')}, ${A}${pt('1', '2', '3')}, ${B}${pt('−2', '1', '1')}, and a unit vector normal to its plane.`,
            a: `${cross(V('OA'), V('OB'))} = (−1)${ii} − 7${jj} + 5${kk}, |${NB}·${NB}| = √75 = 5√3. Area = ${fr('5√3', '2')}; normal unit vector<br>±${fr(`−${ii} − 7${jj} + 5${kk}`, '5√3')}.`,
          },
          {
            q: `If ${abs(va)} = 3, ${abs(vb)} = 4, ${ADOTB} = 6, find ${abs(AXB)} and the angle between ${va}, ${vb}.`,
            a: `Lagrange: ${abs(AXB)}<sup>2</sup> = 9 ⋅ 16 − 36 = 108${NB}⇒${NB}${abs(AXB)} = 6√3; cos${NB}${th} = ${fr('6', '12')} = ${HALF}${NB}⇒${NB}${th} = 60°.`,
          },
          {
            q: `${va}, ${vb} are unit vectors with ${abs(`${va} + ${vb}`)} = √3. Find ${abs(`${va} − ${vb}`)}.`,
            a: `3 = 1 + 1 + 2${ADOTB}${NB}⇒${NB}${ADOTB} = ${HALF}; then ${abs(`${va} − ${vb}`)}<sup>2</sup> = 2 − 2 ⋅ ${HALF} = 1, so ${abs(`${va} − ${vb}`)} = 1.`,
          },
          {
            q: `In ${TRI}, ${D} ∈ ${BC} with ${ratio(BD, DC)}${NB}=${NB}${ratio('1', '2')} and ${E} is the midpoint of ${I('CA')}. ${AD} and ${BE} meet at ${P}. Find ${ratio(BP, PE)}.`,
            a: `Mass points: ${ratio(mass(C), mass(B))} = ${ratio('1', '2')}${NB}⇒${NB}${mass(B)} = 2, ${mass(C)} = 1; midpoint ${E} forces ${mass(A)} = ${mass(C)} = 1, so ${mass(E)} = 2. Then ${ratio(BP, PE)} = ${ratio(mass(E), mass(B))} = ${ratio('1', '1')}. Vector confirmation: with ${D} = ${fr(`2${vb} + ${vc}`, '3')}, ${E} = ${fr(`${va} + ${vc}`, '2')}, equating ${P} on ${AD} and ${BE} gives parameter ${t} = ${HALF} on ${BE}, again ratio ${ratio('1', '1')}.`,
          },
          {
            q: `Find all ${la} for which ${pt('1', '2', '3')}, ${pt('2', la, '4')}, ${pt('3', '6', '13')} are coplanar.`,
            a: `Determinant = 1(13${la} − 24) − 2(26 − 12) + 3(12 − 3${la}) = 4${la} − 16. Setting it to zero: ${rel(la, '=', '4')} (unique).`,
          },
          {
            q: `Find the volume of the tetrahedron with vertices ${A}${pt('1', '0', '0')}, ${B}${pt('0', '2', '0')}, ${C}${pt('0', '0', '3')}, ${D}${pt('1', '1', '1')}.`,
            a: `Take the edges from ${A}: ${V('AB')} = ${pt('−1', '2', '0')}, ${V('AC')} = ${pt('−1', '0', '3')}, ${V('AD')} = ${pt('0', '1', '1')}; determinant = (−1)(0 − 3) − 2(−1 − 0) + 0 = 5. Volume = ${fr('5', '6')} cubic units.`,
          },
          {
            q: 'Three vectors each of unit length make pairwise angles 60°. Find the volume of the parallelepiped they span.',
            a: `Gram determinant: 1 + 2(${HALF})<sup>3</sup> − 3(${HALF})<sup>2</sup> = 1 + ${fr('1', '4')} − ${fr('3', '4')} = ${HALF}. Volume = ${fr('1', '√2')} = ${fr('√2', '2')} cubic units. (Same skeleton as a JEE question.)`,
          },
          {
            q: `Find all ${c} such that for every real ${x}, the vectors −${x}${ii} + 2${jj} + ${c}${kk} and ${x}${ii} + ${c}${x}${jj} + ${kk} make an obtuse angle.`,
            a: `Dot product ${I('f')}(${x}) = −${sq(x)} + 2${c}${x} + ${c}. Obtuse for <b>all</b> ${x} requires ${I('f')}(${x}) < 0 everywhere: downward parabola (already satisfied), maximum at ${rel(x, '=', c)} equals ${sq(c)} + ${c}, so we need ${sq(c)} + ${c} < 0, i.e. ${c} ∈ ${pt('−1', '0')}.`,
          },
        ],
      },

      { t: 'part', title: 'Where to spend extra practice' },
      {
        t: 'p',
        html: 'Single-step plug-in drills are not what JEE rewards. Past papers lean on <b>multi-condition systems</b> (several simultaneous dot-product equations solved together), <b>optimization under constraints</b> (extreme values of projections and triple products), <b>finite counting and independence arguments</b>, and <b>long position-vector proofs</b> about cevians and concurrence. Give these extra practice time, and in particular the triple-product machinery (BAC–CAB, coplanarity, reciprocal systems), where the largest block of past questions sits.',
      },
    ],
  },
];
