import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10 Vector Algebra, Additional topics A–D, pp. 664–678 of the Class
 * 12 Mathematics Master Reference (October 2026 edition), word for word: the
 * "Chapter 10: Vector Algebra — Additional Topics" part's Addenda A to D, with
 * the book's letters. Its heading is not copied; its p. 664 opening paragraph
 * is the first paragraph of A's "Introduction". Each addendum's opening text
 * is its "Introduction" part, then its own headings as parts ("Method", the
 * run of "Example X.N" worked examples as one part "Worked examples", and
 * "Practice — Addendum X" as "Practice", answers set against their
 * questions). D's answers end on p. 678, above the rule where Addendum P
 * starts (not here). The method items A1–D4 are bold run-in paragraphs as
 * printed ("A1 — …" → "A1: …"); the formula cards after them repeat their
 * formulas for the Formula sheet. "Subtopic 0N" → "Topic 0N"; "Addendum X" →
 * "Additional topic X". No drawings on these pages (every vector path is a
 * section rule, a page rule, a fraction bar, a radical, a big bracket or bar,
 * a determinant bar, an underbrace, C2's box or the ■ marks).
 * A vector is its italic letter carrying the combining arrow (escaped ARW),
 * the arrow inside the <i> run as Physics 11 Ch 6 writes it (the reader's
 * arrow spacing reads it there); a two-letter vector (AB) carries the arrow on
 * its last letter (the book's long arrow covers both). Unit vectors i, j, k
 * and the hatted a, b as printed (the combining hat escaped). Dot ·, cross ×,
 * the box product [a b c] as printed; determinants are <vmat>. Every fraction
 * is stacked (<frac>); a fraction inside a fraction's numerator is written
 * with ÷; underbraces become bracketed notes; φ (U+03C6); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const grid = (tag: string, rows: string[][]) =>
  `<${tag}>${rows.map((r) => `<r>${r.map((c) => `<c>${c}</c>`).join('')}</r>`).join('')}</${tag}>`;
/** A determinant: one array per row, one string per cell. */
const vm = (...rows: string[][]) => grid('vmat', rows);
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
/** The combining right arrow over a vector's letter. */
const ARW = '\u20d7';
/** The combining hat over a unit vector's letter. */
const HAT = '\u0302';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

/** A vector: its italic letter(s) with the arrow. */
const V = (s: string) => I(`${s}${ARW}`);
const va = V('a');
const vb = V('b');
const vc = V('c');
const vd = V('d');
const vg = V('g');
const vh = V('h');
const vi = V('i');
const vm2 = V('m');
const vp = V('p');
const vr = V('r');
const vs = V('s');
const vt = V('t');
const vu = V('u');
const vv = V('v');
const vx = V('x');
/** The zero vector. */
const ZERO = `0${ARW}`;
/** Unit vectors with hats (escaped). */
const ii = I('\u00ee');
const jj = I('\u0135');
const kk = I(`k${HAT}`);
const ah = I('\u00e2');
const bh = I(`b${HAT}`);
/** The bisector directions of A.3, e-hat int and e-hat ext (rm1210b O11). */
const eh = I(`e${HAT}`);

const a = I('a');
const b = I('b');
const c = I('c');
const l = I('l');
const m = I('m');
const n = I('n');
const r = I('r');
const s = I('s');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const G = I('G');
const H = I('H');
const L = I('L');
const O = I('O');
const P = I('P');
const R = I('R');
/** D4's S = (b − a) × (c − a), a vector (rm1210b O3). */
const S = V('S');
const T = I('T');
const lam = I('λ');
const th = I('θ');
const ph = I('φ');

// A short |…| is one unit: its inner spaces never break (Android check of Ch 10, "|a⃗" / "+ b⃗|").
const glueShort = (s: string) => (s.replace(/<[^>]*>/g, '').length <= 24 ? s.replace(/ (?![^<]*>)/g, NB) : s);
const abs = (v: string) => `|${WJ}${glueShort(v)}|`;
const sq = (v: string) => `${v}<sup>2</sup>`;
/** A dot or cross product, glued at its operator. */
const dot = (p: string, q: string) => `${p}${NB}·${NB}${q}`;
const crs = (p: string, q: string) => `${p}${NB}×${NB}${q}`;
/** The scalar triple (box) product [p q r]. */
const box = (...v: string[]) => `[${v.join(NB)}]`;
const rel = (p: string, op: string, q: string) => `${p}${NB}${op}${NB}${q}`;
/** A pair or a triple, its commas glued. */
const pr = (p: string, q: string) => `(${p},${NB}${q})`;
const tri = (p: string, q: string, t: string) => `(${p},${NB}${q},${NB}${t})`;
const SUM = (p: string, q: string) => `${p} + ${q}`;
const DIF = (p: string, q: string) => `${p} − ${q}`;

const ABC = box(va, vb, vc);
const AB_PLUS = SUM(va, vb);
const AB_MINUS = DIF(va, vb);
const MOD_A2 = sq(abs(va));
const MOD_B2 = sq(abs(vb));
const ADOTB = dot(va, vb);
const HALF = fr('1', '2');
const TH2 = fr(th, '2');
const COS = (arg: string, pow = '') => `cos${pow ? `<sup>${pow}</sup>` : ''}${NB}${arg}`;
const SIN = (arg: string) => `sin${NB}${arg}`;
/** a/|a|, the unit vector written as a fraction. */
const UNIT = (v: string) => fr(v, abs(v));
const INT = (v: string) => `${v}<sub>int</sub>`;
const EXT = (v: string) => `${v}<sub>ext</sub>`;
const PAR = `${vr}<sub>∥</sub>`;
const PERP = `${vr}<sub>⟂</sub>`;
/** A triangle's area in square brackets, [△PBC]. */
const AR = (t: string) => `[△${I(t)}]`;
const SQB = (t: string) => `[${I(t)}]`;
const RT = (t: string) => `${I(t)}${NB}∶${NB}`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 664–668 ────────────────
  {
    n: 'A',
    title: 'Resolution Along Oblique Directions and Angle Bisectors',
    extra: true,
    kalam: 'Nothing here is new theory; every method is a dot, a cross, or a section formula applied one layer deeper than the chapter took it.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter hands you the machinery (components, both products, the triple products, and their headline formulas) and drills each formula on clean inputs. Four examinable families sit just outside it. Additional topic A resolves a vector along oblique directions (components parallel/perpendicular to a given vector, coordinates in a non-orthogonal basis, angle bisectors), which JEE uses constantly ${ESTIMATE} and the chapter sets up only as far as the projection vector. Additional topic B builds the magnitude algebra (${sq(abs(`${va} ± ${vb}`))}, the parallelogram law, Cauchy–Schwarz, the triangle inequality) and shows how constraint problems reduce to counting dot products. Additional topic C develops nested cross-product algebra beyond BAC–CAB and solves vector equations of the form ${crs(va, vx)} = ${vb}. Additional topic D does position-vector triangle geometry: incenter, the circumcenter–orthocenter identity, and area ratios via barycentric weights. Nothing here is new theory; every method is a dot, a cross, or a section formula applied one layer deeper than the chapter took it.`,
      },
      {
        t: 'p',
        html: `The chapter resolves vectors along ${ii}, ${jj}, ${kk}: directions that are perpendicular and unit length. Exams rarely grant you that luxury ${ESTIMATE}. You will be asked for the part of ${vr} along an arbitrary ${va}, for the coordinates of ${vr} in a tilted basis, or for the direction that bisects the angle between two vectors. Each is a short derivation from the definitions you already have.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>A1: Split relative to one direction.</b> Any vector ${vr} can be written uniquely as a part parallel to a non-zero ${va} plus a part perpendicular to it. To see this, assume the split exists and force the coefficient out:<br>${vr} = ${lam}${va} + ${vu},${NB}${NB}${dot(vu, va)} = 0.<br>Dot both sides with ${va}. The term ${dot(vu, va)} dies, leaving<br>${dot(vr, va)} = ${lam}${MOD_A2}${NB}⟹${NB}${lam} = ${fr(dot(vr, va), MOD_A2)}.<br>So the split is<br>${vr} = ${fr(dot(vr, va), MOD_A2)}${NB}${va} (parallel part)<br>+ (${vr} − ${fr(dot(vr, va), MOD_A2)}${NB}${va}) (perpendicular part).`,
      },
      {
        t: 'p',
        html: `Existence is now automatic: define the two pieces by these formulas and check (${vr} − ${lam}${va})${NB}·${NB}${va} = ${dot(vr, va)} − ${lam}${MOD_A2}${NB}=${NB}0. Uniqueness: if ${lam}<sub>1</sub>${va} + ${vu}<sub>1</sub> = ${lam}<sub>2</sub>${va} + ${vu}<sub>2</sub> with both remainders perpendicular to ${va}, dotting with ${va} forces ${lam}<sub>1</sub> = ${lam}<sub>2</sub>, hence ${vu}<sub>1</sub> = ${vu}<sub>2</sub>. When ${va} happens to be a unit vector, the parallel part is simply (${dot(vr, ah)})${NB}${ah}: the projection vector of Topic 02, recovered as a special case.`,
      },
      {
        t: 'formula',
        kicker: 'Resolution along a vector',
        main: `Parallel part: ${fr(dot(vr, va), MOD_A2)}${NB}${va}<br>Perpendicular part: ${vr} − ${fr(dot(vr, va), MOD_A2)}${NB}${va}`,
        legend: [`${vr} = the vector being resolved`, `${va} = the non-zero direction`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>A2: Coordinates in a non-orthogonal basis.</b> Let ${ABC} ≠ 0 and suppose<br>${vr} = ${x}${va} + ${y}${vb} + ${z}${vc}.<br>Take the scalar triple product of both sides with ${vb} and ${vc}, in that order. By linearity of the box product (Topic 03) every term containing a repeated vector vanishes:<br>${box(vr, vb, vc)} = ${x}${ABC} + ${y}${box(vb, vb, vc)} (= 0)<br>+ ${z}${box(vc, vb, vc)} (= 0) = ${x}${ABC}.<br>Dividing, and cycling the same argument for ${y} and ${z}:<br>${x} = ${fr(box(vr, vb, vc), ABC)},<br>${y} = ${fr(box(va, vr, vc), ABC)},<br>${z} = ${fr(box(va, vb, vr), ABC)}.<br>This is Cramer’s rule wearing vector clothing, and it explains why non-coplanarity (${ABC} ≠ 0) is exactly the condition for the basis to work.`,
      },
      {
        t: 'formula',
        kicker: 'Coordinates in a non-orthogonal basis',
        main: `${vr} = ${x}${va} + ${y}${vb} + ${z}${vc}<br>${x} = ${fr(box(vr, vb, vc), ABC)}<br>${y} = ${fr(box(va, vr, vc), ABC)}<br>${z} = ${fr(box(va, vb, vr), ABC)}`,
        legend: [
          `${va}, ${vb}, ${vc} = the basis (${ABC} ≠ 0)`,
          `${x}, ${y}, ${z} = the coordinates of ${vr} in that basis`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>A3: Angle bisectors.</b> Let ${va}, ${vb} be non-zero and not parallel (if they are opposite, ${ah} + ${bh} = ${ZERO}; if they point the same way, ${ah} − ${bh} = ${ZERO}). Consider the unit vectors ${ah} and ${bh} placed tail-to-tail. They form two adjacent sides of a rhombus (equal lengths!), and the diagonal ${ah} + ${bh} of a rhombus bisects the angle between the sides. Hence<br>internal bisector direction ∝ ${UNIT(va)} + ${UNIT(vb)},<br>external bisector direction ∝ ${UNIT(va)} − ${UNIT(vb)}.`,
      },
      {
        t: 'p',
        html: `The external claim: ${ah} − ${bh} is the other diagonal, which bisects the supplementary angle; equivalently, it makes equal angles with ${ah} and −${bh}. Normalise either expression to get a unit vector. Shortcut worth memorising: if ${abs(va)} = ${abs(vb)}, the units are ${UNIT(va)} and ${UNIT(vb)} with the same denominator, so the bisector directions are simply proportional to ${AB_PLUS} and ${AB_MINUS}.`,
      },
      {
        t: 'formula',
        kicker: 'Angle bisector directions',
        main: `Internal: ∝ ${UNIT(va)} + ${UNIT(vb)}<br>External: ∝ ${UNIT(va)} − ${UNIT(vb)}`,
        legend: [`${va}, ${vb} = non-zero vectors that are not parallel`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main Level',
        q: `Resolve ${vr} = 2${ii} + 3${jj} + 6${kk} into components parallel and perpendicular to ${va} = ${ii} + 2${jj} + 2${kk}.`,
        steps: [
          `Here ${dot(vr, va)} = 2 + 6 + 12 = 20 and ${MOD_A2}${NB}=${NB}1${NB}+${NB}4${NB}+${NB}4${NB}=${NB}9. So ${lam} = ${fr('20', '9')} and<br>${PAR} = ${fr('20', '9')}${NB}(${ii} + 2${jj} + 2${kk}),<br>${PERP} = ${vr} − ${PAR}.`,
          `Componentwise subtraction for ${PERP}:<br>${PERP} = (2 − ${fr('20', '9')})${ii} + (3 − ${fr('40', '9')})${jj} + (6 − ${fr('40', '9')})${kk}<br>= −${fr('2', '9')}${ii} − ${fr('13', '9')}${jj} + ${fr('14', '9')}${kk}.`,
          `<b>Check 1 (perpendicularity).</b> ${dot(PERP, va)}${NB}=${NB}${fr('−2 − 26 + 28', '9')}${NB}=${NB}0.`,
          `<b>Check 2 (Pythagoras).</b> ${sq(abs(vr))}${NB}=${NB}4${NB}+${NB}9${NB}+${NB}36${NB}=${NB}49. Also<br>${sq(abs(PAR))} = ${fr('400', '9')},<br>${sq(abs(PERP))} = ${fr('4 + 169 + 196', '81')} = ${fr('369', '81')} = ${fr('41', '9')},<br>and ${fr('400', '9')} + ${fr('41', '9')} = ${fr('441', '9')} = 49. The split conserves length, as it must.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Express ${vr} = ${ii} + 2${jj} + 3${kk} in terms of ${va} = ${ii} + ${jj}, ${vb} = ${jj} + ${kk}, ${vc} = ${kk} + ${ii}.`,
        steps: [
          `<b>Method 1: direct comparison.</b> Write ${vr} = ${x}${va} + ${y}${vb} + ${z}${vc} and match components:<br>${x} + ${z} = 1,${NB}${NB}${x} + ${y} = 2,${NB}${NB}${y} + ${z} = 3.<br>Adding all three: 2(${x} + ${y} + ${z}) = 6, so ${x} + ${y} + ${z} = 3. Subtracting each original equation from this: ${rel(y, '=', '2')}, ${rel(z, '=', '1')}, ${rel(x, '=', '0')}. Hence ${vr} = 2${vb} + ${vc}.`,
          `<b>Method 2: the triple-product formula, as a check.</b> From the chapter’s own practice set, ${ABC} = 2. Then<br>${box(vr, vb, vc)} = ${vm(['1', '2', '3'], ['0', '1', '1'], ['1', '0', '1'])}<br>= 1(1 − 0) − 2(0 − 1) + 3(0 − 1)<br>= 1 + 2 − 3 = 0${NB}⟹${NB}${rel(x, '=', '0')},<br>${box(va, vr, vc)} = ${vm(['1', '1', '0'], ['1', '2', '3'], ['1', '0', '1'])}<br>= 1(2) − 1(1 − 3) + 0 = 4${NB}⟹${NB}${rel(y, '=', '2')},<br>${box(va, vb, vr)} = ${vm(['1', '1', '0'], ['0', '1', '1'], ['1', '2', '3'])}<br>= 1(3 − 2) − 1(0 − 1) + 0 = 2${NB}⟹${NB}${rel(z, '=', '1')}.`,
          `Both methods agree: ${vr} = 2${vb} + ${vc}. Note the zero coefficient: nothing forbids it, and Method 1 finds it faster while Method 2 generalises to bases where direct comparison is messy.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find unit vectors along the internal and external bisectors of the angle between ${va} = ${ii} + 2${jj} + 2${kk} and ${vb} = 2${ii} + ${jj} − 2${kk}.`,
        steps: [
          `Both magnitudes equal 3, so the shortcut applies: the bisector directions are proportional to ${va} ± ${vb}.`,
          `Internal: ${AB_PLUS} = 3${ii} + 3${jj}, of magnitude 3√2, giving<br>${INT(eh)} = ${fr('1', '√2')}${NB}(${ii} + ${jj}).`,
          `External: ${AB_MINUS} = −${ii} + ${jj} + 4${kk}, of magnitude √(1 + 1 + 16) = 3√2, giving<br>${EXT(eh)} = ${fr('1', '3√2')}${NB}(−${ii} + ${jj} + 4${kk}).`,
          `<b>Checks.</b> Dot each bisector with each original unit vector; the two values must agree.<br>${ah} = ${fr('1', '3')}${tri('1', '2', '2')},${NB}${NB}${bh} = ${fr('1', '3')}${tri('2', '1', '−2')}.<br>${dot(INT(eh), ah)} = ${fr('1 + 2', '3√2')} = ${fr('1', '√2')},<br>${dot(INT(eh), bh)} = ${fr('2 + 1', '3√2')} = ${fr('1', '√2')}. ✓<br>${dot(EXT(eh), ah)} = ${fr('−1 + 2 + 8', '9√2')} = ${fr('1', '√2')},<br>${dot(EXT(eh), bh)} = ${fr('−2 + 1 − 8', '9√2')} = −${fr('1', '√2')}. ✓`,
          `The internal bisector makes equal acute angles with both: correct. The external bisector makes equal-magnitude but opposite-sign cosines, i.e. equal angles with ${ah} and −${bh}: exactly the supplementary-angle bisection claimed in A3. As a bonus,<br>${dot(INT(eh), EXT(eh))} = ${fr(`${tri('1', '1', '0')} · ${tri('−1', '1', '4')}`, '√2 · 3√2')}<br>= ${fr('−1 + 1 + 0', '6')} = 0:<br>internal and external bisectors of two non-parallel vectors are always perpendicular (proved in practice question 4).`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Resolve ${vr} = ${ii} + 2${jj} + 2${kk} into parts parallel and perpendicular to ${va} = 2${ii} + ${jj} + 2${kk}.`,
            a: `Parallel part ${fr('8', '9')}${NB}(2${ii} + ${jj} + 2${kk}); perpendicular part −${fr('7', '9')}${ii} + ${fr('10', '9')}${jj} + ${fr('2', '9')}${kk} (check: its dot with ${va} is ${fr('−14 + 10 + 4', '9')} = 0).`,
          },
          {
            q: `Express ${vr} = 5${ii} + 3${jj} + 4${kk} in terms of ${ii} + ${jj}, ${jj} + ${kk}, ${kk} + ${ii}.`,
            a: `2(${ii} + ${jj}) + (${jj} + ${kk}) + 3(${kk} + ${ii}): solve ${x} + ${z} = 5, ${x} + ${y} = 3, ${y} + ${z} = 4; the sum gives ${x} + ${y} + ${z} = 6, whence ${rel(x, '=', '2')}, ${rel(y, '=', '1')}, ${rel(z, '=', '3')}.`,
          },
          {
            q: `Find a unit vector along the internal bisector of the angle between ${va} = ${ii} + ${jj} and ${vb} = ${jj} + ${kk}.`,
            a: `Units are ${fr('1', '√2')}${tri('1', '1', '0')} and ${fr('1', '√2')}${tri('0', '1', '1')}; their sum is ${fr('1', '√2')}${tri('1', '2', '1')}, of magnitude √3, so the answer is ${fr('1', '√6')}${NB}(${ii} + 2${jj} + ${kk}).`,
          },
          {
            q: 'Prove that the internal and external bisector directions of the angle between any two non-zero, non-parallel vectors are perpendicular.',
            a: `Dot the two directions:<br>(${UNIT(va)} + ${UNIT(vb)})${NB}·${NB}(${UNIT(va)} − ${UNIT(vb)})<br>= ${sq(abs(ah))} − ${sq(abs(bh))}${NB}=${NB}1 − 1 = 0.`,
          },
          {
            q: `If ${va}, ${vb} are unit vectors with angle ${th} between them, show that ${abs(AB_PLUS)}${NB}=${NB}2${NB}${COS(TH2)}, and explain why this confirms that ${AB_PLUS} points along the bisector.`,
            a: `${sq(abs(AB_PLUS))}${NB}=${NB}2 + 2${NB}${COS(th)} = 4${NB}${COS(TH2, '2')},<br>and ${COS(TH2)} ≥ 0 for 0${NB}≤${NB}${th}${NB}≤${NB}π,<br>so the positive root is 2${NB}${COS(TH2)}. For the direction, let ${ph} be the angle between ${AB_PLUS} and ${va}. Then<br>${va}${NB}·${NB}(${AB_PLUS}) = 1 + ${COS(th)} = 2${NB}${COS(TH2, '2')}<br>equals ${abs(AB_PLUS)}${NB}${COS(ph)} = 2${NB}${COS(TH2)}${NB}${COS(ph)},<br>so, for ${th} < π, ${COS(ph)} = ${COS(TH2)} and ${ph} = ${TH2}. The same computation with ${vb} gives the same angle, so ${AB_PLUS} makes equal angles ${TH2} with both: it sits on the bisector.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 668–671 ────────────────
  {
    n: 'B',
    title: 'Magnitude Algebra and Constraint Problems',
    extra: true,
    kalam: 'What JEE actually asks is a second-order game: square a magnitude, expand, and discover that the unknowns are dot products.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 states the definitions and Lagrange’s identity, then computes. What JEE actually asks is a second-order game: square a magnitude, expand, and discover that the unknowns are dot products. This additional topic derives the small stock of identities that run that game, plus the inequalities that bound answers before you compute them.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>B1: The fundamental expansions.</b> From distributivity and ${dot(va, va)} = ${MOD_A2}:<br>${sq(abs(AB_PLUS))} = (${AB_PLUS})${NB}·${NB}(${AB_PLUS})<br>= ${MOD_A2} + ${MOD_B2} + 2${ADOTB},<br>${sq(abs(AB_MINUS))} = ${MOD_A2} + ${MOD_B2} − 2${ADOTB}.<br><br>Adding and subtracting these two lines:<br>${sq(abs(AB_PLUS))} + ${sq(abs(AB_MINUS))}${NB}=${NB}2(${MOD_A2} + ${MOD_B2}) (parallelogram law),<br>${sq(abs(AB_PLUS))} − ${sq(abs(AB_MINUS))}${NB}=${NB}4${ADOTB}.<br><br>Also,<br>(${AB_PLUS})${NB}·${NB}(${AB_MINUS}) = ${MOD_A2} − ${MOD_B2},<br>since the cross terms ∓${ADOTB} cancel.`,
      },
      {
        t: 'formula',
        kicker: 'The fundamental expansions',
        main: `${sq(abs(AB_PLUS))} = ${MOD_A2} + ${MOD_B2} + 2${ADOTB}<br>${sq(abs(AB_MINUS))} = ${MOD_A2} + ${MOD_B2} − 2${ADOTB}<br>(${AB_PLUS})${NB}·${NB}(${AB_MINUS}) = ${MOD_A2} − ${MOD_B2}`,
        legend: [`${va}, ${vb} = any two vectors`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Parallelogram law',
        main: `${sq(abs(AB_PLUS))} + ${sq(abs(AB_MINUS))}${NB}=${NB}2(${MOD_A2} + ${MOD_B2})<br>Difference: ${sq(abs(AB_PLUS))} − ${sq(abs(AB_MINUS))}${NB}=${NB}4${ADOTB}`,
        legend: [`${va}, ${vb} = adjacent sides of a parallelogram`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>B2: The geometric dictionary.</b> In a parallelogram with adjacent sides ${va}, ${vb}, the diagonals are ${AB_PLUS} and ${AB_MINUS}. Two instant consequences, each a one-line derivation:<br>• <b>Equal diagonals:</b> ${sq(abs(AB_PLUS))} = ${sq(abs(AB_MINUS))}${NB}⟺${NB}4${ADOTB} = 0${NB}⟺${NB}${rel(va, '⟂', vb)}, i.e. the parallelogram is a <b>rectangle</b>.<br>• <b>Perpendicular diagonals:</b> (${AB_PLUS})${NB}·${NB}(${AB_MINUS}) = 0${NB}⟺${NB}${MOD_A2} = ${MOD_B2}, i.e. the parallelogram is a <b>rhombus</b>.`,
      },
      {
        t: 'p',
        html: `<b>B3: Cauchy–Schwarz and the triangle inequality.</b> Lagrange’s identity (Topic 02, Theorem 3) reads<br>(${ADOTB})<sup>2</sup> + ${sq(abs(crs(va, vb)))} = ${MOD_A2}${MOD_B2}.<br>The second term is a squared magnitude, hence non-negative, so<br>(${ADOTB})<sup>2</sup> ≤ ${MOD_A2}${MOD_B2},<br>equality${NB}⟺${NB}${crs(va, vb)} = ${ZERO}${NB}⟺${NB}${rel(va, '∥', vb)}.<br>That is Cauchy–Schwarz. For the triangle inequality, start from B1 and inject 2${ADOTB} ≤ 2${abs(ADOTB)} ≤ 2${abs(va)}${abs(vb)}:<br>${sq(abs(AB_PLUS))} ≤ ${MOD_A2} + ${MOD_B2} + 2${abs(va)}${abs(vb)}<br>= (${abs(va)} + ${abs(vb)})<sup>2</sup>,<br>so ${abs(AB_PLUS)} ≤ ${abs(va)} + ${abs(vb)}, with equality iff ${va}, ${vb} point the same way. Running the same argument with −2${abs(ADOTB)} gives the lower bound ${abs(AB_PLUS)} ≥ ${abs(`${abs(va)} − ${abs(vb)}`)}. Together:<br>${abs(`${abs(va)} − ${abs(vb)}`)} ≤ ${abs(AB_PLUS)} ≤ ${abs(va)} + ${abs(vb)}.`,
      },
      {
        t: 'formula',
        kicker: 'Cauchy–Schwarz and the triangle inequality',
        main: `(${ADOTB})<sup>2</sup> ≤ ${MOD_A2}${MOD_B2}<br>${abs(`${abs(va)} − ${abs(vb)}`)} ≤ ${abs(AB_PLUS)} ≤ ${abs(va)} + ${abs(vb)}`,
        legend: [`${va}, ${vb} = any two vectors`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>B4: Strategy for constraint problems.</b> Every magnitude becomes a square; every square expands via B1; the unknowns of the problem are then dot products. Before computing, count equations against unknown dot products: if the count fails, some symmetry or inequality (B3) must close the gap.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Given ${abs(va)}${NB}=${NB}3, ${abs(vb)}${NB}=${NB}4 and ${ADOTB} = 6, find ${abs(AB_PLUS)}, ${abs(AB_MINUS)}, the angle between ${va} and ${vb}, and the area of the parallelogram they span.`,
        steps: [
          `From B1:<br>${sq(abs(AB_PLUS))}${NB}=${NB}9 + 16 + 12 = 37,<br>${sq(abs(AB_MINUS))}${NB}=${NB}9 + 16 − 12 = 13,<br>so ${abs(AB_PLUS)}${NB}=${NB}√37 and ${abs(AB_MINUS)}${NB}=${NB}√13.`,
          `Angle: ${COS(th)} = ${fr('6', '3 · 4')} = ${HALF}, so ${th} = 60°. Area via Lagrange’s identity:<br>${sq(abs(crs(va, vb)))}${NB}= ${MOD_A2}${MOD_B2}${NB}−${NB}(${ADOTB})<sup>2</sup>${NB}= 144${NB}−${NB}36${NB}=${NB}108,<br>Area = 6√3.`,
          `<b>Check.</b> ${th} = 60° reproduces ${ADOTB}${NB}=${NB}12${NB}${COS('60°')}${NB}=${NB}6 and ${abs(crs(va, vb))}${NB}=${NB}12${NB}${SIN('60°')}${NB}=${NB}6√3. Consistent.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `${va} and ${vb} are unit vectors with ${abs(AB_PLUS)}${NB}=${NB}√3. Find ${abs(AB_MINUS)} and the angle between them, without ever computing a dot product directly.`,
        steps: [
          `Parallelogram law with ${abs(va)} = ${abs(vb)}${NB}=${NB}1:<br>3 + ${sq(abs(AB_MINUS))}${NB}=${NB}2(1 + 1) = 4${NB}⟹${NB}${sq(abs(AB_MINUS))}${NB}=${NB}1, so ${abs(AB_MINUS)}${NB}=${NB}1.`,
          `For the angle, use the sum form of B1 on ${sq(abs(AB_PLUS))}:<br>3 = 1 + 1 + 2${NB}${COS(th)}<br>⟹${NB}${COS(th)}${NB}=${NB}${HALF}${NB}⟹${NB}${rel(th, '=', '60°')}.`,
          `<b>Check.</b> ${sq(abs(AB_MINUS))}${NB}=${NB}2 − 2${NB}${COS('60°')}${NB}=${NB}1. Consistent. The whole problem is two substitutions into B1: the skill being which identity, not arithmetic.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `${va}, ${vb}, ${vc} are unit vectors, ${rel(va, '⟂', vb)}, and ${abs(`${va} + ${vb} + ${vc}`)}${NB}=${NB}1. Find the angle between ${vc} and ${AB_PLUS}.`,
        steps: [
          `<b>Step 1: expand the given magnitude.</b> Writing ${vs} = ${va} + ${vb} + ${vc}:<br>${sq(abs(vs))}${NB}=${NB}3 + 2(${ADOTB} + ${dot(vb, vc)} + ${dot(vc, va)}) = 1,<br>so the pairwise dot products sum to −1. Since ${ADOTB} = 0:<br>${vc}${NB}·${NB}(${AB_PLUS}) = −1.`,
          `<b>Step 2: size the target vector.</b> Because ${rel(va, '⟂', vb)} and both are unit,<br>${sq(abs(AB_PLUS))}${NB}=${NB}1 + 1 + 0 = 2,${NB}${NB}${abs(AB_PLUS)}${NB}=${NB}√2.`,
          `<b>Step 3: read off the angle.</b> If ${ph} is the angle between ${vc} and ${AB_PLUS}:<br>${COS(ph)} = ${fr(`${vc}${NB}·${NB}(${AB_PLUS})`, `${abs(vc)}${abs(AB_PLUS)}`)} = ${fr('−1', '√2')},${NB}${NB}${ph} = 135°.`,
          `<b>Why the data suffice.</b> One might worry that individual angles of ${vc} with ${va} and with ${vb} are not pinned down, and they are not. But the question asks only about the combined vector ${AB_PLUS}, and Step 1 determines the combined dot product completely. Recognising which aggregate is determined is the entire marks-earning move.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Minimise ${I('f')}(${vx}) = ${sq(abs(DIF(vx, va)))} + ${sq(abs(DIF(vx, vb)))} over all vectors ${vx}, where ${abs(va)}${NB}=${NB}2, ${abs(vb)}${NB}=${NB}4 and the angle between ${va} and ${vb} is 60°. Where is the minimum attained?`,
        steps: [
          `Expand both squares by B1:<br>${I('f')}(${vx}) = 2${sq(abs(vx))} − 2${vx}${NB}·${NB}(${AB_PLUS}) + ${MOD_A2} + ${MOD_B2}.`,
          `Complete the square around the midpoint ${vm2} = ${fr(AB_PLUS, '2')}:<br>2${sq(abs(DIF(vx, vm2)))}${NB}=${NB}2${sq(abs(vx))} − 4${dot(vx, vm2)} + 2${sq(abs(vm2))}<br>= 2${sq(abs(vx))} − 2${vx}${NB}·${NB}(${AB_PLUS}) + ${fr(sq(abs(AB_PLUS)), '2')}.`,
          `Comparing with ${I('f')}, the leftover constant${NB}is<br>${MOD_A2} + ${MOD_B2} − ${fr(sq(abs(AB_PLUS)), '2')}<br>= ${fr(`2${MOD_A2} + 2${MOD_B2} − ${sq(abs(AB_PLUS))}`, '2')} = ${fr(sq(abs(AB_MINUS)), '2')},<br>where the last step is the parallelogram law rearranged. Hence<br>${I('f')}(${vx}) = 2${sq(abs(`${vx} − ${fr(AB_PLUS, '2')}`))}${NB}+${NB}${fr(sq(abs(AB_MINUS)), '2')}${NB}≥${NB}${fr(sq(abs(AB_MINUS)), '2')},<br>with equality exactly at the midpoint. Numerically: ${sq(abs(AB_MINUS))}${NB}= 4${NB}+${NB}16${NB}−${NB}2(2)${WJ}(4)${NB}${COS('60°')}${NB}=${NB}12, so the minimum value is 6, attained at ${vx} = ${fr(AB_PLUS, '2')}.`,
          '<b>Reading the result.</b> The sum of squared distances to two fixed points is minimised at their midpoint: the vector proof of the classical fact, delivered by completing one square.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `${abs(va)}${NB}=${NB}2, ${abs(vb)}${NB}=${NB}3, angle 60°. Find ${abs(AB_PLUS)} and ${abs(AB_MINUS)}.`,
            a: `${ADOTB} = 3; ${abs(AB_PLUS)} = √(4 + 9 + 6) = √19, ${abs(AB_MINUS)} = √(4 + 9 − 6) = √7.`,
          },
          {
            q: `${va}, ${vb} are unit vectors with ${abs(AB_PLUS)}${NB}=${NB}1. Find the angle between them and ${abs(AB_MINUS)}.`,
            a: `1 = 2 + 2${NB}${COS(th)} gives ${COS(th)} = −${HALF}, ${th} = 120°; then ${sq(abs(AB_MINUS))}${NB}=${NB}2 − 2(−${HALF}) = 3, so ${abs(AB_MINUS)}${NB}=${NB}√3.`,
          },
          {
            q: 'Prove that a parallelogram whose diagonals are equal is a rectangle, quoting the identity you use.',
            a: `Diagonals are ${AB_PLUS}, ${AB_MINUS}; equality of squared lengths forces 4${ADOTB} = 0 by B1, so adjacent sides are perpendicular.`,
          },
          {
            q: `If ${abs(va)}${NB}=${NB}2 and ${sq(abs(AB_PLUS))} + ${sq(abs(AB_MINUS))}${NB}=${NB}20, find ${abs(vb)}.`,
            a: `Parallelogram law: 20 = 2(4 + ${MOD_B2}), so ${MOD_B2}${NB}=${NB}6 and ${abs(vb)}${NB}=${NB}√6.`,
          },
          {
            q: `[Advanced] ${va}, ${vb} are perpendicular unit vectors and ${vc} ranges over all unit vectors. Find the minimum and maximum possible values of ${abs(`${va} + ${vb} + ${vc}`)}.`,
            a: `${abs(AB_PLUS)}${NB}=${NB}√2 is fixed; by the two-sided triangle inequality applied to (${AB_PLUS}) + ${vc}, the magnitude ranges over [√2 − 1,${NB}√2 + 1], both ends attained (for ${vc} anti-parallel and parallel to ${AB_PLUS} respectively).`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 671–674 ────────────────
  {
    n: 'C',
    title: 'Nested Cross Products and Vector Equations',
    extra: true,
    kalam: 'The square erases the orientation of the original triad and always returns +1 for orthonormal inputs.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 03 gives you BAC–CAB for ${va}${NB}×${NB}(${crs(vb, vc)}) and stops. JEE Advanced routinely nests one level further (cross products of cross products) ${ESTIMATE} and asks you to solve equations in which the unknown is a vector. Both skills are two applications of what you already own.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>C1: Cross of two cross products.</b> Claim:<br>(${crs(va, vb)})${NB}×${NB}(${crs(vc, vd)}) = ${box(va, vb, vd)}${NB}${vc} − ${box(va, vb, vc)}${NB}${vd}.<br><br>Derivation. Name ${vp} = ${crs(va, vb)} and apply BAC–CAB to ${vp}${NB}×${NB}(${crs(vc, vd)}):<br>${vp}${NB}×${NB}(${crs(vc, vd)}) = (${dot(vp, vd)})${NB}${vc} − (${dot(vp, vc)})${NB}${vd}.<br><br>Now decode each dot: (${crs(va, vb)})${NB}·${NB}${vd} = ${box(va, vb, vd)} and (${crs(va, vb)})${NB}·${NB}${vc} = ${box(va, vb, vc)} by definition of the box product. Substitute to get the claim. A second, equally useful form follows by swapping the pairs (note the overall sign flip from anticommutativity):<br>(${crs(va, vb)})${NB}×${NB}(${crs(vc, vd)}) = ${box(va, vc, vd)}${NB}${vb} − ${box(vb, vc, vd)}${NB}${va}.`,
      },
      {
        t: 'p',
        html: `<b>Verification on the standard basis.</b> Take ${va} = ${ii}, ${vb} = ${jj}, ${vc} = ${jj}, ${vd} = ${kk}. Left side: ${crs(kk, ii)} = ${jj}. Right side: ${box(ii, jj, kk)}${jj} − ${box(ii, jj, jj)}${kk} = ${jj} − ${ZERO} = ${jj}. Agreement.`,
      },
      {
        t: 'formula',
        kicker: 'Cross of two cross products',
        main: `(${crs(va, vb)})${NB}×${NB}(${crs(vc, vd)}) =<br>${box(va, vb, vd)}${NB}${vc}${NB}−${NB}${box(va, vb, vc)}${NB}${vd}<br>(${crs(va, vb)})${NB}×${NB}(${crs(vc, vd)}) =<br>${box(va, vc, vd)}${NB}${vb}${NB}−${NB}${box(vb, vc, vd)}${NB}${va}`,
        legend: [`${va}, ${vb}, ${vc}, ${vd} = any four vectors`, `${box(vp, V('q'), vr)} = the box product ${vp}${NB}·${NB}(${crs(V('q'), vr)})`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>C2: Solving ${crs(va, vx)} = ${vb}.</b> First, existence. Dotting both sides with ${va} gives ${ADOTB} = 0: a necessary condition, since the left side is perpendicular to ${va}. It is also sufficient, and the full solution set when ${rel(va, '≠', ZERO)}, ${ADOTB} = 0 is<br>${vx} = ${fr(crs(vb, va), MOD_A2)} + ${lam}${va},${NB}${NB}${rel(lam, '∈', 'ℝ')}.`,
      },
      {
        t: 'p',
        html: `<b>Verification.</b> Apply BAC–CAB to ${va}${NB}×${NB}(${crs(vb, va)}):<br>${va}${NB}×${NB}(${crs(vb, va)}) = (${dot(va, va)})${NB}${vb} − (${ADOTB})${NB}${va} = ${MOD_A2}${NB}${vb},<br>since ${ADOTB} = 0. Dividing by ${MOD_A2} shows the candidate particular solution works. For the homogeneous part: ${crs(va, vh)} = ${ZERO} forces ${rel(vh, '∥', va)} (Topic 02), i.e. ${vh} = ${lam}${va}: a whole line of solutions, exactly as a cross product cannot see components along itself.`,
      },
      {
        t: 'formula',
        kicker: `Solving ${crs(va, vx)} = ${vb}`,
        main: `${vx} = ${fr(crs(vb, va), MOD_A2)} + ${lam}${va},${NB}${NB}${rel(lam, '∈', 'ℝ')}<br>Condition: ${ADOTB} = 0,${NB}${rel(va, '≠', ZERO)}`,
        legend: [`${vx} = the unknown vector in ${crs(va, vx)} = ${vb}`, `${lam} = any real number`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>C3: The squared box product.</b> Claim:<br>[${crs(va, vb)}, ${crs(vb, vc)}, ${crs(vc, va)}] = ${ABC}<sup>2</sup>.<br><br>Derivation. Write the left side as a dot with a cross and apply C1 to the inner pair:<br>(${crs(vb, vc)})${NB}×${NB}(${crs(vc, va)}) = ${box(vb, vc, va)}${NB}${vc} − ${box(vb, vc, vc)}${NB}${va}<br>= ${ABC}${NB}${vc} − ${ZERO},<br>using cyclic invariance ${box(vb, vc, va)} = ${ABC}. Therefore<br>[${crs(va, vb)}, ${crs(vb, vc)}, ${crs(vc, va)}]<br>= (${crs(va, vb)})${NB}·${NB}(${ABC}${NB}${vc})<br>= ${ABC}[(${crs(va, vb)})${NB}·${NB}${vc}] = ${ABC}<sup>2</sup>. ■`,
      },
      {
        t: 'p',
        html: `<b>Check on the basis:</b> ${va} = ${ii}, ${vb} = ${jj}, ${vc} = ${kk} gives left side ${box(kk, ii, jj)} = 1 and right side 1<sup>2</sup>. Immediate corollary: if ${va}, ${vb}, ${vc} are non-coplanar, then so are ${crs(va, vb)}, ${crs(vb, vc)}, ${crs(vc, va)}, and after dividing by ${ABC}, these are precisely the reciprocal triad of Topic 03. The identity explains why the reciprocal system is again non-coplanar.`,
      },
      {
        t: 'formula',
        kicker: 'The squared box product',
        main: `[${crs(va, vb)}, ${crs(vb, vc)}, ${crs(vc, va)}] = ${ABC}<sup>2</sup>`,
        legend: [`${ABC} = the box product of ${va}, ${vb}, ${vc}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>C4: Direction of a plane-intersection line.</b> The vector (${crs(va, vb)})${NB}×${NB}(${crs(vc, vd)}) is perpendicular to ${crs(va, vb)}, hence lies in the plane of ${va}, ${vb}; and perpendicular to ${crs(vc, vd)}, hence lies in the plane of ${vc}, ${vd}. So it points along the intersection of the two planes, and the two expansions in C1 exhibit it explicitly as a combination of ${vc}, ${vd} and of ${va}, ${vb} respectively. This is the engine behind the “line of intersection of two planes” formula you will meet in Three-Dimensional Geometry.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Solve ${crs(va, vx)} = ${vb} where ${va} = ${ii} + ${jj} + ${kk} and ${vb} = ${ii} − ${jj}.`,
        steps: [
          `Compatibility: ${ADOTB} = 1 − 1 + 0 = 0, so solutions exist. Compute the particular piece:<br>${crs(vb, va)} = ${vm([ii, jj, kk], ['1', '−1', '0'], ['1', '1', '1'])}<br>= ${ii}(−1 − 0) − ${jj}(1 − 0) + ${kk}(1 + 1)<br>= −${ii} − ${jj} + 2${kk}.`,
          `Since ${MOD_A2}${NB}=${NB}3, the general solution is<br>${vx} = ${fr('1', '3')}${NB}(−${ii} − ${jj} + 2${kk}) + ${lam}(${ii} + ${jj} + ${kk}),${NB}${NB}${rel(lam, '∈', 'ℝ')}.`,
          `<b>Direct check at ${rel(lam, '=', '0')}.</b><br>${va} × ${fr(tri('−1', '−1', '2'), '3')} = ${fr('1', '3')}${vm([ii, jj, kk], ['1', '1', '1'], ['−1', '−1', '2'])}<br>= ${fr('1', '3')}[${ii}(2 + 1) − ${jj}(2 + 1) + ${kk}(−1 + 1)]<br>= ${ii} − ${jj} = ${vb}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Prove that [${crs(va, vb)}, ${crs(vb, vc)}, ${crs(vc, va)}] = ${ABC}<sup>2</sup>, and deduce that if ${va}, ${vb}, ${vc} are non-coplanar, then ${crs(va, vb)}, ${crs(vb, vc)}, ${crs(vc, va)} are also non-coplanar; and that when ${va}, ${vb}, ${vc} are mutually perpendicular unit vectors the box product of the crossed triad equals 1.`,
        steps: [
          `The identity is C3, derived above. For the deduction: non-coplanarity of ${va}, ${vb}, ${vc} means ${ABC} ≠ 0, and the identity then forces the crossed triad’s box product to be the non-zero number ${ABC}<sup>2</sup> > 0, so the crossed triad is non-coplanar. Now take ${va}, ${vb}, ${vc} mutually perpendicular unit vectors. They span a unit cube, so ${ABC} = ±1 (the signed volume), and the crossed triad has box product exactly 1: it is a positively oriented basis of the same volume. Unit length alone is not enough: for ${va} = ${ii},<br>${vb} = ${fr('1', '√2')}${NB}(${ii} + ${jj}), ${vc} = ${kk} we get ${ABC} = ${fr('1', '√2')},<br>so the crossed triad has box product ${HALF}. Dividing each vector by ${ABC} recovers the reciprocal system of Topic 03, and this computation shows that the reciprocal system is again non-coplanar: its box product is ${fr(`${ABC}<sup>2</sup>`, `${ABC}<sup>3</sup>`)}${NB}=${NB}${fr('1', ABC)}.`,
          `<b>Sanity check.</b> Right-handed orthonormal ${ii}, ${jj}, ${kk}: crossed triad is ${kk}, ${ii}, ${jj}, box product ${box(kk, ii, jj)} = 1 = ${box(ii, jj, kk)}<sup>2</sup>. Left-handed choice ${vc} = −${kk}: box product of originals is −1, crossed triad is ${kk}, −${ii}, −${jj} with box product ${box(kk, `(−${ii})`, `(−${jj})`)} = ${box(kk, ii, jj)} = 1 = (−1)<sup>2</sup>. The square erases the orientation of the original triad and always returns +1 for orthonormal inputs.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Show that (${AB_MINUS})${NB}×${NB}(${AB_PLUS}) = 2${crs(va, vb)}, and deduce that the area of the parallelogram spanned by the diagonals ${AB_PLUS}, ${AB_MINUS} is twice the area of the parallelogram spanned by ${va}, ${vb}.`,
        steps: [
          `Expand by distributivity, killing the ${crs(va, va)} and ${crs(vb, vb)} terms:<br>(${AB_MINUS})${NB}×${NB}(${AB_PLUS})<br>= ${crs(va, va)} (= ${ZERO}) + ${crs(va, vb)} − ${crs(vb, va)} − ${crs(vb, vb)} (= ${ZERO})<br>= ${crs(va, vb)} + ${crs(va, vb)} = 2${crs(va, vb)}.`,
          `Taking magnitudes: ${abs(`(${AB_MINUS})${NB}×${NB}(${AB_PLUS})`)}${NB}=${NB}2${abs(crs(va, vb))}. The left side is the parallelogram area spanned by the diagonals; the right side is twice the original area. This reconciles with the fourth worked example of Topic 02, where the diagonal-computation for a specific parallelogram returned exactly the side-vector area: there the factor ${HALF} from the diagonal formula cancelled the factor 2 found here.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Evaluate (${crs(ii, jj)})${NB}×${NB}(${crs(jj, kk)}) two ways: directly, and via the C1 expansion.`,
            a: `Directly: ${crs(kk, ii)} = ${jj}. By C1: ${box(ii, jj, kk)}${jj} − ${box(ii, jj, jj)}${kk} = ${jj}.`,
          },
          {
            q: `Solve ${crs(va, vx)} = ${vb} for ${va} = 2${ii} − ${jj} + 2${kk}, ${vb} = ${ii} + 2${jj}.`,
            a: `Compatibility: ${ADOTB} = 2 − 2 + 0 = 0. Particular solution<br>${fr(crs(vb, va), MOD_A2)} = ${fr('1', '9')}${NB}(4${ii} − 2${jj} − 5${kk})<br>(expand ${tri('1', '2', '0')} × ${tri('2', '−1', '2')} = ${tri('4', '−2', '−5')}); general solution<br>${vx} = ${fr('1', '9')}${NB}(4${ii} − 2${jj} − 5${kk}) + ${lam}(2${ii} − ${jj} + 2${kk}).<br>Check: ${tri('2', '−1', '2')} × ${tri('4', '−2', '−5')} = ${tri('9', '18', '0')}, divided by 9 gives ${tri('1', '2', '0')} = ${vb}.`,
          },
          {
            q: `Prove that a vector perpendicular to both ${crs(va, vb)} and ${crs(va, vc)} must be parallel to ${va}, provided ${va}, ${vb}, ${vc} are non-coplanar.`,
            a: `Both ${crs(va, vb)} and ${crs(va, vc)} are perpendicular to ${va}, so ${va} itself is perpendicular to both. The directions perpendicular to two non-parallel vectors ${vu}, ${vv} form a single line along ${crs(vu, vv)}; here ${crs(vu, vv)} = (${crs(va, vb)})${NB}×${NB}(${crs(va, vc)}), which by C1 (with the roles (${va}, ${vb}, ${vc}, ${vd}) → (${va}, ${vb}, ${va}, ${vc})) equals ${ABC}${NB}${va} − ${box(va, vb, va)}${NB}${vc} = ${ABC}${NB}${va}, a non-zero multiple of ${va} precisely when ${ABC} ≠ 0.`,
          },
          {
            q: `Using C1, show that (${crs(va, vb)})${NB}×${NB}(${crs(vc, va)}) = −${ABC}${NB}${va}, and verify it for ${va} = ${ii}, ${vb} = ${jj}, ${vc} = ${kk}.`,
            a: `By C1 with ${vd} = ${va}: the first term carries ${box(va, vb, va)} = 0 and the second gives −${ABC}${NB}${va}. Verification: left side ${kk}${NB}×${NB}(${crs(kk, ii)}) = ${crs(kk, jj)} = −${ii}; right side −(1)${ii} = −${ii}.`,
          },
          {
            q: `[Advanced] ${va}, ${vb}, ${vc} are mutually perpendicular unit vectors. Evaluate [${crs(va, vb)}, ${crs(vb, vc)}, ${crs(vc, va)}] and justify why the answer cannot be negative.`,
            a: `By C3 it equals ${ABC}<sup>2</sup> = (±1)<sup>2</sup> = 1; a square is never negative, regardless of the handedness of the original triad.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 675–678 ────────────────
  {
    n: 'D',
    title: 'Position-Vector Geometry of the Triangle',
    extra: true,
    kalam: 'Any point assembled by the section formula has its three sub-areas read off from its coefficients, with no geometry at all.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter proves the centroid concurrence and stops. JEE reaches further: the incenter formula, the circumcenter–orthocenter identity, and area ratios for points built from section formulas (none of these is in the NCERT book or the current CBSE syllabus, as far as we know). All of it is the section formula and the cross-product area formula, chained.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>D1: Notation.</b> Vertices ${A}, ${B}, ${C} have position vectors ${va}, ${vb}, ${vc}; side lengths opposite them are ${a} = ${abs(V('BC'))}, ${b} = ${abs(V('CA'))}, ${c} = ${abs(V('AB'))}; area of the triangle is Δ.`,
      },
      {
        t: 'p',
        html: `<b>D2: Incenter.</b> Claim:<br>${vi} = ${fr(`${a}${NB}${va} + ${b}${NB}${vb} + ${c}${NB}${vc}`, `${a} + ${b} + ${c}`)}.<br><br>Derivation, in three moves.`,
      },
      {
        t: 'p',
        html: `<b>Move 1: where the bisector from ${A} meets ${I('BC')}.</b> By the angle bisector theorem, the point ${T} on ${I('BC')} satisfies ${RT('BT')}${I('TC')} = ${RT('AB')}${I('AC')} = ${RT('c')}${b}. The section formula (internal, ratio ${RT('c')}${b} from ${B}) gives<br>${vt} = ${fr(`${c}${NB}${vc} + ${b}${NB}${vb}`, `${b} + ${c}`)}.`,
      },
      {
        t: 'p',
        html: `<b>Move 2: how far down ${I('AT')} the incenter sits.</b> Let ${r} be the inradius. Each of ${SQB('IBC')}, ${SQB('ICA')}, ${SQB('IAB')} has height ${r} over bases ${a}, ${b}, ${c}, so<br>${SQB('IBC')} = ${HALF}${I('ar')},${NB}${NB}${SQB('ICA')} = ${HALF}${I('br')},${NB}${NB}${SQB('IAB')} = ${HALF}${I('cr')},<br>Δ = ${HALF}${r}(${a} + ${b} + ${c}) = ${I('rs')}, where ${s} = ${fr(`${a} + ${b} + ${c}`, '2')} is the semi-perimeter.<br><br>Now compare areas along the cevian ${I('AT')}. Triangles ${I('ABI')} and ${I('IBT')} share the altitude from ${B} to line ${I('AT')}, so<br>${fr(SQB('ABI'), SQB('IBT'))} = ${fr(I('AI'), I('IT'))};<br>likewise ${fr(SQB('ACI'), SQB('ICT'))} = ${fr(I('AI'), I('IT'))}.<br>Adding numerators and denominators (equal ratios combine):<br>${fr(I('AI'), I('IT'))} = ${fr(`${SQB('ABI')} + ${SQB('ACI')}`, `${SQB('IBT')} + ${SQB('ICT')}`)}<br>= ${fr(`Δ − ${SQB('IBC')}`, SQB('IBC'))} = (${I('rs')} − ${HALF}${I('ar')}) ÷ (${HALF}${I('ar')})<br>= ${fr(`2${s} − ${a}`, a)} = ${fr(`${b} + ${c}`, a)}.`,
      },
      {
        t: 'p',
        html: `<b>Move 3: one more section formula.</b> ${I('I')} divides ${I('AT')} internally in ratio (${b} + ${c})${NB}∶${NB}${a}:<br>${vi} = ${fr(`(${b} + ${c})${vt} + ${a}${NB}${va}`, `(${b} + ${c}) + ${a}`)}<br>= ((${b} + ${c}) · ${fr(`${I('b')}${vb} + ${I('c')}${vc}`, `${b} + ${c}`)} + ${a}${NB}${va}) ÷ (${a} + ${b} + ${c})<br>= ${fr(`${a}${NB}${va} + ${b}${NB}${vb} + ${c}${NB}${vc}`, `${a} + ${b} + ${c}`)}. ■`,
      },
      {
        t: 'formula',
        kicker: 'Incenter',
        main: `${vi} = ${fr(`${a}${NB}${va} + ${b}${NB}${vb} + ${c}${NB}${vc}`, `${a} + ${b} + ${c}`)}`,
        legend: [
          `${va}, ${vb}, ${vc} = position vectors of ${A}, ${B}, ${C}`,
          `${a}, ${b}, ${c} = side lengths opposite ${A}, ${B}, ${C}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The excentres follow the same template with one sign flipped each; recorded for reference:<br>${vi}<sub>${A}</sub> = ${fr(`−${a}${NB}${va} + ${b}${NB}${vb} + ${c}${NB}${vc}`, `−${a} + ${b} + ${c}`)},<br>${vi}<sub>${B}</sub> = ${fr(`${a}${NB}${va} − ${b}${NB}${vb} + ${c}${NB}${vc}`, `${a} − ${b} + ${c}`)},<br>${vi}<sub>${C}</sub> = ${fr(`${a}${NB}${va} + ${b}${NB}${vb} − ${c}${NB}${vc}`, `${a} + ${b} − ${c}`)},<br>each obtained by running Move 2 with the corresponding exradius and external division on the appropriate bisector.`,
      },
      {
        t: 'formula',
        kicker: 'Excentres',
        main: `${vi}<sub>${A}</sub> = ${fr(`−${a}${NB}${va} + ${b}${NB}${vb} + ${c}${NB}${vc}`, `−${a} + ${b} + ${c}`)}<br>${vi}<sub>${B}</sub> = ${fr(`${a}${NB}${va} − ${b}${NB}${vb} + ${c}${NB}${vc}`, `${a} − ${b} + ${c}`)}<br>${vi}<sub>${C}</sub> = ${fr(`${a}${NB}${va} + ${b}${NB}${vb} − ${c}${NB}${vc}`, `${a} + ${b} − ${c}`)}`,
        legend: [
          `${vi}<sub>${A}</sub> = the excentre opposite ${A}`,
          `${vi}<sub>${B}</sub>, ${vi}<sub>${C}</sub> = the excentres opposite ${B}, ${C}`,
          `${a}, ${b}, ${c} = side lengths opposite ${A}, ${B}, ${C}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>D3: Circumcenter at the origin: the orthocenter identity.</b> Claim: if the circumcenter ${O} is the origin and ${abs(va)} = ${abs(vb)} = ${abs(vc)} = ${R}, the orthocenter is<br>${vh} = ${va} + ${vb} + ${vc}.<br><br>Derivation. It suffices to show the point ${vh} lies on all three altitudes. Test the altitude from ${A}: we need ${rel(V('AH'), '⟂', V('BC'))}, i.e.<br>(${DIF(vh, va)})${NB}·${NB}(${DIF(vb, vc)}) = (${SUM(vb, vc)})${NB}·${NB}(${DIF(vb, vc)})<br>= ${MOD_B2} − ${sq(abs(vc))} = ${sq(R)} − ${sq(R)}${NB}=${NB}0. ✓<br><br>The other two altitudes are identical computations with letters cycled. Hence ${H} with ${vh} = ${va} + ${vb} + ${vc} is the orthocenter. Corollary (Euler line): the centroid has ${vg} = ${fr(`${va} + ${vb} + ${vc}`, '3')} = ${fr(vh, '3')}, so ${O}, ${G}, ${H} are collinear with ${V('OH')} = 3${V('OG')}, i.e. ${RT('OG')}${I('GH')} = 1${NB}∶${NB}2.`,
      },
      {
        t: 'formula',
        kicker: 'Orthocenter with the circumcenter at the origin',
        main: `${vh} = ${va} + ${vb} + ${vc}<br>Centroid: ${vg} = ${fr(vh, '3')}`,
        legend: [
          `${vh} = position vector of the orthocenter`,
          `${va}, ${vb}, ${vc} = position vectors of vertices on a circle of radius ${R} centred at the origin ${O}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>D4: Area ratios from affine combinations.</b> Claim: if<br>${vp} = ${fr(`${l}${NB}${va} + ${m}${NB}${vb} + ${n}${NB}${vc}`, `${l} + ${m} + ${n}`)},${NB}${NB}${l} + ${m} + ${n} ≠ 0,<br>then<br>${fr(AR('PBC'), AR('ABC'))} = ${fr(abs(l), abs(`${l} + ${m} + ${n}`))},<br><br>${fr(AR('PCA'), AR('ABC'))} = ${fr(abs(m), abs(`${l} + ${m} + ${n}`))},<br><br>${fr(AR('PAB'), AR('ABC'))} = ${fr(abs(n), abs(`${l} + ${m} + ${n}`))}.<br>When ${l}, ${m}, ${n} are all positive (${P} inside the triangle), the bars can be dropped.`,
      },
      {
        t: 'p',
        html: `Derivation of the first ratio (others cycle). Write ${L} = ${l} + ${m} + ${n} and form the two edge vectors of △${I('PBC')} from ${P}:<br>${DIF(vb, vp)} = ${fr(`${l}(${DIF(vb, va)}) + ${n}(${DIF(vb, vc)})`, L)},<br><br>${DIF(vc, vp)} = ${fr(`${l}(${DIF(vc, va)}) + ${m}(${DIF(vc, vb)})`, L)}.<br><br>Cross them. Distributing over the four term-pairs, three simplifications do all the work: each of the following equals ${S} ∶= (${DIF(vb, va)})${NB}×${NB}(${DIF(vc, va)}), as direct expansion confirms:<br>(${DIF(vb, va)})${NB}×${NB}(${DIF(vc, va)}) = ${S},<br>(${DIF(vb, va)})${NB}×${NB}(${DIF(vc, vb)}) = ${S},<br>(${DIF(vb, vc)})${NB}×${NB}(${DIF(vc, va)}) = ${S},<br>while (${DIF(vb, vc)})${NB}×${NB}(${DIF(vc, vb)}) = ${ZERO}. Collecting coefficients:<br>(${DIF(vb, vp)})${NB}×${NB}(${DIF(vc, vp)}) = ${fr(`${sq(l)} + ${I('lm')} + ${I('ln')}`, sq(L))}${NB}${S} = ${fr(l, L)}${NB}${S}.`,
      },
      {
        t: 'p',
        html: `But ${S} = (${DIF(vb, va)})${NB}×${NB}(${DIF(vc, va)}) has magnitude twice the area of △${I('ABC')}, and the left side, ${fr(l, L)}${NB}${S}, has magnitude twice the area of △${I('PBC')}. Taking magnitudes gives the claim. Note the power of the statement: any point assembled by the section formula has its three sub-areas read off from its coefficients, with no geometry at all.`,
      },
      {
        t: 'formula',
        kicker: 'Area ratios from affine combinations',
        main: `${vp} = ${fr(`${l}${NB}${va} + ${m}${NB}${vb} + ${n}${NB}${vc}`, `${l} + ${m} + ${n}`)}<br>${fr(AR('PBC'), AR('ABC'))} = ${fr(abs(l), abs(`${l} + ${m} + ${n}`))}`,
        legend: [
          `${va}, ${vb}, ${vc} = position vectors of ${A}, ${B}, ${C}`,
          `${l}, ${m}, ${n} = the weights (${l} + ${m} + ${n} ≠ 0)`,
          `${AR('PBC')} = the area of triangle ${I('PBC')} (likewise ${AR('ABC')})`,
        ],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the incenter of the triangle with vertices ${A}${pr('0', '0')}, ${B}${pr('4', '0')}, ${C}${pr('0', '3')}.`,
        steps: [
          `Side lengths: ${a} = ${abs(I('BC'))} = √(16 + 9) = 5, ${b}${NB}=${NB}${abs(I('CA'))}${NB}=${NB}3, ${c}${NB}=${NB}${abs(I('AB'))}${NB}=${NB}4. Apply D2:<br>${vi} = ${fr(`5${pr('0', '0')} + 3${pr('4', '0')} + 4${pr('0', '3')}`, '5 + 3 + 4')}<br>= ${fr(pr('12', '12'), '12')} = ${pr('1', '1')}.`,
          `<b>Check.</b> The triangle is right-angled at ${A} with inradius ${r} = ${fr(`${b} + ${c} − ${a}`, '2')} = ${fr('3 + 4 − 5', '2')} = 1; directly, ${r} = ${fr('Δ', s)} = ${fr('6', '6')} = 1, and the incenter of a right triangle at the origin with legs on the axes sits at ${pr(r, r)} = ${pr('1', '1')}. Agreement.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `The vertices ${A}${pr('5', '0')}, ${B}${pr('0', '5')}, ${C}${pr('−3', '−4')} all lie on the circle ${sq(x)} + ${sq(y)}${NB}=${NB}25. Taking the circumcenter as origin, find the orthocenter and verify it lies on two altitudes.`,
        steps: [
          `By D3, ${vh} = ${va} + ${vb} + ${vc} = (5${NB}+${NB}0${NB}−${NB}3,${NB}0${NB}+${NB}5${NB}−${NB}4)${NB}=${NB}${pr('2', '1')}.`,
          `<b>Altitude from ${A}:</b> ${V('BC')} = ${pr('−3', '−9')} and ${V('AH')} = ${pr('−3', '1')}; dot product = 9 − 9 = 0. ✓`,
          `<b>Altitude from ${B}:</b> ${V('AC')} = ${pr('−8', '−4')} and ${V('BH')} = ${pr('2', '−4')}; dot product = −16 + 16 = 0. ✓`,
          `The centroid is ${vg} = ${fr(pr('2', '1'), '3')}, confirming the Euler-line ratio ${RT('OG')}${I('GH')} = 1${NB}∶${NB}2 for this triangle:<br>${abs(I('OG'))} = ${fr('√5', '3')} and<br>${abs(I('GH'))} = ${abs(`${pr('2', '1')} − ${fr(pr('2', '1'), '3')}`)} = ${fr('2√5', '3')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `${P} lies on the median ${I('AD')} of △${I('ABC')} with ${RT('AP')}${I('PD')} = 3${NB}∶${NB}1. Find ${fr(AR('PBC'), AR('ABC'))} without drawing anything.`,
        steps: [
          `Chain two section formulas. Midpoint of ${I('BC')}: ${vd} = ${fr(SUM(vb, vc), '2')}. Then ${P} divides ${I('AD')} internally in ratio 3${NB}∶${NB}1:<br>${vp} = ${fr(`3${vd} + 1 · ${va}`, '4')}<br>= (${va} + ${fr('3', '2')}(${SUM(vb, vc)})) ÷ 4<br>= ${fr(`2${va} + 3${vb} + 3${vc}`, '8')}.`,
          `The coefficients of ${va}, ${vb}, ${vc} are 2, 3, 3 over denominator 8, so by D4:<br>${fr(AR('PBC'), AR('ABC'))} = ${fr('2', '8')} = ${fr('1', '4')}.`,
          `<b>Consistency checks.</b> The other two ratios come out ${fr('3', '8')} each, and<br>${fr('1', '4')} + ${fr('3', '8')} + ${fr('3', '8')} = 1:<br>the three sub-triangles tile the whole, so their fractions must sum to 1; they do. Also, as ${P} moves from ${A} (where ${fr(AR('PBC'), AR('ABC'))} = 1) to ${D} (where it is 0), the ratio falls linearly. ${RT('AP')}${I('PD')} = 3${NB}∶${NB}1 puts ${P} at fraction ${fr('3', '4')} of the way from ${A}, so the ratio is<br>1 − ${fr('3', '4')}(1 − 0) = ${fr('1', '4')}.<br>Agreement from a third direction.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the incenter of the triangle with vertices ${A}${pr('0', '0')}, ${B}${pr('6', '0')}, ${C}${pr('0', '8')}.`,
            a: `Sides ${a} = 10, ${b} = 8, ${c} = 6;<br>${vi} = ${fr(`8${pr('6', '0')} + 6${pr('0', '8')}`, '24')} = ${pr('2', '2')};<br>check ${r} = ${fr('Δ', s)} = ${fr('24', '12')} = 2 and a right triangle at the origin has incenter ${pr(r, r)}.`,
          },
          {
            q: `${A}${pr('5', '12')}, ${B}${pr('−13', '0')}, ${C}${pr('0', '−13')} lie on ${sq(x)} + ${sq(y)}${NB}=${NB}169. Using D3, write down the orthocenter and verify it lies on the altitude from ${A}.`,
            a: `${vh} = (5 − 13 + 0,${NB}12 + 0 − 13) = ${pr('−8', '−1')}; altitude check: ${V('BC')} = ${pr('13', '−13')}, ${V('AH')} = ${pr('−13', '−13')}, dot = −169 + 169 = 0.`,
          },
          {
            q: `Prove that the centroid divides the segment from the orthocenter to the circumcenter in the ratio 1${NB}∶${NB}2 (from the circumcenter end), assuming the circumcenter is at the origin.`,
            a: `With ${abs(va)} = ${abs(vb)} = ${abs(vc)} = ${R}: ${vh} = ${va} + ${vb} + ${vc} by D3 and ${vg} = ${fr(vh, '3')}, so ${V('OH')} = 3${V('OG')}, i.e. ${G} trisects ${I('OH')} with ${RT('OG')}${I('GH')} = 1${NB}∶${NB}2.`,
          },
          {
            q: `${P} divides the median from ${A} internally in the ratio ${m}${NB}∶${NB}1 (from ${A}). Find ${fr(AR('PBC'), AR('ABC'))} as a function of ${m}, and check it gives ${fr('1', '3')} at ${rel(m, '=', '2')}.`,
            a: `${vp} = ${fr(`${m}${NB}${vd} + ${va}`, `${m} + 1`)}<br>= (${va} + ${fr(m, '2')}(${SUM(vb, vc)})) ÷ (${m} + 1)<br>= ${fr(`2${va} + ${m}${vb} + ${m}${vc}`, `2(${m} + 1)`)},<br>so the ratio is ${fr('2', `2(${m} + 1)`)} = ${fr('1', `${m} + 1`)}; at ${rel(m, '=', '2')} this is ${fr('1', '3')}, matching the centroid.`,
          },
          {
            q: `[Advanced] Given ${vp} = ${fr(`${va} + 2${vb} + 3${vc}`, '6')}, find ${AR('PBC')}${NB}∶${NB}${AR('PCA')}${NB}∶${NB}${AR('PAB')}, and state what must be true of ${va}, ${vb}, ${vc} for ${P} to lie strictly inside the triangle.`,
            a: `By D4 the ratio is 1${NB}∶${NB}2${NB}∶${NB}3; ${P} lies strictly inside exactly when ${A}, ${B}, ${C} are non-collinear (a genuine triangle) and all three coefficients 1, 2, 3 are positive, which they are, so interiority is automatic once the vertices form a proper triangle.`,
          },
        ],
      },
    ],
  },
];
