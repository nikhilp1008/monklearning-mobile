import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8 Application of Integrals, Additional topics A–E, pp. 560–573 of
 * the Class 12 Mathematics Master Reference (October 2026 edition), word for
 * word: the "Chapter 8: Application of Integrals — Additional Topics" part's
 * Addenda A to E, with the book's letters. Its heading is not copied; its
 * p. 560 opening paragraph is the first paragraph of A's "Introduction". Each
 * addendum's opening text is its "Introduction" part, then its own headings as
 * parts ("Method", the run of "Example X.N" worked examples as one part
 * "Worked examples", and "Practice — Addendum X" as "Practice", answers set
 * against their questions). E's answers end on p. 573, where Addendum P
 * starts (not here). The numbered method steps of A and D are `proc` blocks
 * titled "Method" (as Physics 11 Chapter 8's extras). The book's references to
 * the main chapter ("Subtopic 01/02", "Sub-01", "Sub-02") are reworded to its
 * topics. The book's lemmas, facts and tools stay in the prose; the formula
 * cards after them repeat their formulas for the Formula sheet. No drawings
 * on these pages (every vector path is a rule, a fraction bar, a radical, a
 * bracket or E.2's underbrace). ∫ upright, d upright and glued to its
 * variable, + C italic, e upright, φ (U+03C6). Every fraction is stacked
 * (<frac>); a slash stays only inside a raised limit or power (π/2, 1/√2,
 * x^(2/3)); no em dashes.
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
const c = I('c');
const e = 'e';
const f = I('f');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const q = I('q');
const r = I('r');
const t = I('t');
const u = I('u');
const x = I('x');
const y = I('y');
const A = I('A');
const B = I('B');
const C = I('C');
const F = I('F');
const G = I('G');
const L = I('L');
const R = I('R');
const S = I('S');
const T = I('T');
const X = I('X');
const Y = I('Y');
/** The integral called I (the italic letter; I() is the italic helper). */
const II = I('I');
const ph = I('φ');

/** Differentials: an upright d glued to the integrand. */
const DX = `${NB}d${x}`;
const DT = `${NB}d${t}`;
const DU = `${NB}d${u}`;
const DY = `${NB}d${y}`;
const PLUS_C = ` + ${C}`;

const of = (fn: string, arg: string) => `${fn}(${arg})`;
const abs = (s2: string) => `|${WJ}${s2}|`;
const sb = (base: string, s2: string) => `${base}<sub>${s2}</sub>`;
const sq = (s2: string) => `${s2}<sup>2</sup>`;
const cu = (s2: string) => `${s2}<sup>3</sup>`;
const rel = (l: string, op: string, r2: string) => `${l}${NB}${op}${NB}${r2}`;
/** A definite integral sign with its limits (the reader stacks them). */
const INT = (lo: string, hi: string) => `∫<sub>${lo}</sub><sup>${hi}</sup>`;
/** [F(x)] evaluated from lo to hi. */
const EV = (ex: string, lo: string, hi: string) => `[${ex}]<sub>${lo}</sub><sup>${hi}</sup>`;
/** A trigonometric function of an argument, with an optional power: sin² x. */
const TR = (fn: string, arg: string = x, pow = '') => `${fn}${pow ? `<sup>${pow}</sup>` : ''}${NB}${arg}`;
/** An inverse trigonometric function: sin⁻¹ x. */
const INV = (fn: string, arg: string = x) => `${fn}<sup>−1</sup>${NB}${arg}`;
/** A point or a pair, its comma glued. */
const pt = (p1: string, p2: string) => `(${p1},${NB}${p2})`;
/** A closed interval, its comma glued. */
const iv = (lo: string, hi: string, o = '[', cl = ']') => `${o}${lo},${NB}${hi}${cl}`;

const X2 = sq(x);
const X3 = cu(x);
const Y2 = sq(y);
const A2 = sq(a);
const R2 = sq(r);
const SINX = TR('sin');
const COSX = TR('cos');
const SINT = TR('sin', t);
const COST = TR('cos', t);
const SIN2X = TR('sin', `2${x}`);
const ASIN = INV('sin');
const ACOS = INV('cos');
const ATAN = INV('tan');
const ACOT = INV('cot');
const HALF = fr('1', '2');
const PI2 = fr('π', '2');
const PI3 = fr('π', '3');
const PI4 = fr('π', '4');
const PI6 = fr('π', '6');
const R1 = `${r}<sub>1</sub>`;
const R2s = `${r}<sub>2</sub>`;
const Q = sb(A, 'Q');
/** √(1 − x²), the companion of the inverse-sine toolkit. */
const RT1 = `√(1${NB}−${NB}${X2})`;
const RS = (s2: string) => `1/√2${s2}`;
const ROOT2 = fr('1', '√2');
const PI4R2 = fr('π', '4√2');
/** The parametric x′(t). */
const XP = `${x}′(${t})`;
const In = (s2: string) => `${II}<sub>${s2}</sub>`;
const Xab = `${x}<sup>2/3</sup>`;
const Yab = `${y}<sup>2/3</sup>`;
const Aab = `${a}<sup>2/3</sup>`;
const X13 = `${x}<sup>1/3</sup>`;
const ELLIPSE = (p: string, q2: string) => `${fr(X2, p)}${NB}+${NB}${fr(Y2, q2)} = 1`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 560–563 ────────────────
  {
    n: 'A',
    title: 'Segments of Conics: Chords, Tangents and the Latus Rectum',
    extra: true,
    kalam: 'The new skills are rejecting extraneous intersection roots, remembering that a sideways parabola has two branches, and checking the answer against elementary geometry.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter taught you to decode a boundary (corners, sides, switch points) and then run top-minus-bottom. That settles most of the paper, but five examinable patterns go beyond it. Additional topic A handles segments of conics cut off by chords, tangents and the latus rectum, where Archimedes’ triangle gives you a free check the chapter never mentions. Additional topic B covers curves you cannot solve for ${y} at all (the astroid and the cycloid), which arrive as parametric equations and are permanent JEE fixtures ${ESTIMATE}. Additional topic C develops areas built on inverse functions, including the mirror trick that halves the work. Additional topic D reverses the arrow of the whole chapter: the area is given and a parameter is the unknown. Additional topic E systematises multi-hump periodic areas, where blind integration across several periods guarantees a wrong answer. Nothing here is new calculus; every method is the chapter’s strip idea wearing a new disguise.`,
      },
      {
        t: 'p',
        html: `Topic 02 finds areas between whole curves. Exams frequently cut a conic with a line (the latus rectum of a parabola, a chord, a tangent) and ask for the smaller piece ${ESTIMATE}. The mechanics are Topic 02’s; the new skills are rejecting extraneous intersection roots, remembering that a sideways parabola has <b>two</b> branches, and checking the answer against elementary geometry.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          `<b>Find the cutting line and the conic.</b> Write the conic’s branches explicitly: ${y} = ±2√(${I('ax')}) for ${Y2} = 4${I('ax')}, or ${y} = ±${fr(b, a)}√(${A2}${NB}−${NB}${X2}) for the ellipse.`,
          '<b>Intersect.</b> Substitute and solve. If you squared anything on the way, test each root in the original equations: squaring manufactures roots.',
          '<b>Decide the region.</b> “Smaller segment” or “cut off by” tells you which side of the line to keep. Sample one interior point.',
          '<b>Integrate top minus bottom</b> (or right minus left), exploiting symmetry about the conic’s axis wherever the chord respects it.',
          '<b>Check with geometry</b>: the lemmas below.',
        ],
      },
      {
        t: 'p',
        html: `<b>Lemma A.1 (circle segment).</b> The smaller segment of ${X2} + ${Y2} = ${R2} lying to the right of the chord ${rel(x, '=', c)}, where 0${NB}≤${NB}${c}${NB}≤${NB}${r}, has area<br>${S} = ${R2}${NB}${INV('cos', fr(c, r))} − ${c}√(${R2}${NB}−${NB}${sq(c)}).`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> By symmetry about the ${x}-axis,<br>${S} = 2${INT(c, r)}${NB}√(${R2}${NB}−${NB}${X2})${DX}.<br>Using the catalogue antiderivative with ${rel(a, '=', r)}:<br>${INT(c, r)}${NB}√(${R2}${NB}−${NB}${X2})${DX}<br>= ${EV(`${fr(x, '2')}√(${R2}${NB}−${NB}${X2}) + ${fr(R2, '2')}${NB}${INV('sin', fr(x, r))}`, c, r)}.<br>At ${rel(x, '=', r)} this is ${fr(R2, '2')} · ${PI2}. At ${rel(x, '=', c)} it is ${fr(c, '2')}√(${R2}${NB}−${NB}${sq(c)}) + ${fr(R2, '2')}${NB}${INV('sin', fr(c, r))}. Doubling and using ${PI2} − ${INV('sin', fr(c, r))} = ${INV('cos', fr(c, r))} gives the stated formula. ■`,
      },
      {
        t: 'formula',
        kicker: 'Circle segment',
        main: `${S} = ${R2}${NB}${INV('cos', fr(c, r))} − ${c}√(${R2}${NB}−${NB}${sq(c)})`,
        legend: [
          `${S} = area of the smaller segment beyond the chord`,
          `${r} = radius of the circle`,
          `${c} = distance of the chord from the centre (0${NB}≤${NB}${c}${NB}≤${NB}${r})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Lemma A.2 (ellipse segment by scaling).</b> The map ${pt(x, y)} ↦ ${pt(X, Y)} with ${X} = ${fr(x, a)}, ${Y} = ${fr(y, b)} sends the ellipse ${ELLIPSE(A2, sq(b))} to the unit circle, and every area is divided by ${I('ab')}: a thin rectangle of size d${x}${NB}×${NB}d${y} becomes one of size d${X}${NB}×${NB}d${Y} = ${fr(`d${x}`, a)} · ${fr(`d${y}`, b)}, so d${x}${NB}d${y} = ${I('ab')}${NB}d${X}${NB}d${Y}. Therefore the ellipse segment cut by ${rel(x, '=', h)} is ${I('ab')} times the unit-circle segment cut by ${X} = ${fr(h, a)}:<br>${S} = ${I('ab')}[${INV('cos', fr(h, a))} − ${fr(h, A2)}√(${A2}${NB}−${NB}${sq(h)})].`,
      },
      {
        t: 'formula',
        kicker: 'Ellipse segment',
        main: `${S} = ${I('ab')}[${INV('cos', fr(h, a))} − ${fr(h, A2)}√(${A2}${NB}−${NB}${sq(h)})]`,
        legend: [
          `${S} = area of the segment beyond the line ${rel(x, '=', h)} (0${NB}≤${NB}${h}${NB}≤${NB}${a})`,
          `${a} = semi-axis along the ${x}-axis`,
          `${b} = the other semi-axis`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Lemma A.3 (Archimedes’ parabolic segment).</b> For the parabola ${Y2} = 4${I('ax')}, the segment cut off by the chord ${rel(x, '=', h)} has area exactly ${fr('4', '3')} of the triangle whose base is that chord and whose apex is the vertex.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The chord meets the parabola at (${h},${NB}±2√(${I('ah')})). The segment between chord and arc is, by vertical strips,<br>${S} = ${INT('0', h)}${NB}(2√(${I('ax')}) − (−2√(${I('ax')})))${DX}<br>= 4√${a} · ${fr('2', '3')}${h}<sup>3/2</sup> = ${fr('8', '3')}√${a}${NB}${h}<sup>3/2</sup>.<br>The triangle with vertices ${pt('0', '0')}, ${pt(h, `2√(${I('ah')})`)}, ${pt(h, `−2√(${I('ah')})`)} has base 4√(${I('ah')}) and height ${h}:<br>${T} = ${HALF} · 4√(${I('ah')}) · ${h} = 2√${a}${NB}${h}<sup>3/2</sup>.<br>Then ${S} = ${fr('4', '3')}${T}. The tangent parallel to a vertical chord is the vertical tangent ${rel(x, '=', '0')}, touching at the vertex, which is why the vertex is the apex. The ratio ${fr('4', '3')} survives any affine change of coordinates, so it holds for every chord of a parabola, not just vertical ones. ■`,
      },
      {
        t: 'formula',
        kicker: 'Archimedes’ parabolic segment',
        main: `${S} = ${fr('4', '3')}${NB}${T}<br>${S} = ${fr('8', '3')}√${a}${NB}${h}<sup>3/2</sup>`,
        legend: [
          `${S} = area of the segment of ${Y2} = 4${I('ax')} cut off by the chord ${rel(x, '=', h)}`,
          `${T} = area of the triangle on that chord with its apex at the vertex`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'This lemma is a two-line check on almost any parabola-segment answer, and it exposes the single most common slip in this pattern: forgetting the lower branch and reporting half the segment.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main Level',
        q: `Find the area bounded by the parabola ${Y2} = 4${x} and its latus rectum.`,
        steps: [
          `Here ${rel(a, '=', '1')}, so the latus rectum is the vertical line ${rel(x, '=', '1')}, meeting the parabola where ${Y2} = 4, i.e. at ${pt('1', '2')} and ${pt('1', '−2')}.`,
          `<b>The trap.</b> The region is not bounded by the ${x}-axis. It spans both branches, so reporting only the area under the upper branch, above the axis, would be wrong: that is half the region. The strip runs from the lower branch to the upper branch:<br>${A} = ${INT('0', '1')}${NB}(2√${x} − (−2√${x}))${DX}<br>= 4${INT('0', '1')}${NB}${x}<sup>1/2</sup>${DX} = 4 · ${fr('2', '3')} = ${fr('8', '3')}.`,
          `<b>Geometric check.</b> By Lemma A.3 with ${rel(a, '=', '1')}, ${rel(h, '=', '1')}: the triangle on the latus rectum as base has area ${HALF}(4)(1) = 2, and the segment is ${fr('4', '3')} × 2 = ${fr('8', '3')}. Agreement.`,
        ],
        ans: `Area = ${fr('8', '3')} square units.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the area bounded by the parabola ${y} = 4${x} − ${X2} and the chord joining ${pt('1', '3')} and ${pt('3', '3')}.`,
        steps: [
          `The chord is ${rel(y, '=', '3')}. Intersections: 4${x} − ${X2} = 3 gives ${X2} − 4${x} + 3 = 0, so ${x} = 1, 3: matching the given points, no extraneous roots. Test ${rel(x, '=', '2')}: parabola gives 4, chord gives 3, so the parabola is on top.`,
          `${A} = ${INT('1', '3')}${NB}(4${x} − ${X2} − 3)${DX}<br>= ${EV(`2${X2} − ${fr(X3, '3')} − 3${x}`, '1', '3')}<br>= 0 − (−${fr('4', '3')}) = ${fr('4', '3')}.`,
          `<b>Archimedes check.</b> The tangent parallel to the horizontal chord sits where ${fr(`d${y}`, `d${x}`)} = 4 − 2${x} = 0, i.e. at the apex ${pt('2', '4')}. Triangle: base 2 (from ${pt('1', '3')} to ${pt('3', '3')}), height 1, area 1. Segment = ${fr('4', '3')}(1) = ${fr('4', '3')}. Agreement.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area of the smaller region into which the line ${rel(x, '=', '2')} cuts the ellipse ${ELLIPSE('16', '9')}.`,
        steps: [
          `Here ${rel(a, '=', '4')}, ${rel(b, '=', '3')}, ${rel(h, '=', '2')}. The smaller piece is the cap to the right of the line. By symmetry about the ${x}-axis, take the upper half and double:<br>${A} = 2${INT('2', '4')}${NB}${fr('3', '4')}√(16${NB}−${NB}${X2})${DX}<br>= ${fr('3', '2')}${EV(`${fr(x, '2')}√(16${NB}−${NB}${X2}) + 8${NB}${INV('sin', fr(x, '4'))}`, '2', '4')}.`,
          `At ${rel(x, '=', '4')}: 0 + 8 · ${PI2} = 4π. At ${rel(x, '=', '2')}: ${fr('2', '2')}√12 + 8${NB}${INV('sin', HALF)} = 2√3 + ${fr('4π', '3')}. So<br>${A} = ${fr('3', '2')}(4π − 2√3 − ${fr('4π', '3')})<br>= ${fr('3', '2')}(${fr('8π', '3')} − 2√3) = 4π − 3√3.`,
          `<b>Independent check by scaling (Lemma A.2).</b> Scale to the unit circle; the line becomes ${X} = ${HALF} and areas scale by ${I('ab')} = 12. The unit-circle segment beyond ${X} = ${HALF} is, by Lemma A.1 with ${rel(r, '=', '1')}, ${c} = ${HALF}:<br>${INV('cos', HALF)} − ${HALF}√(${fr('3', '4')}) = ${PI3} − ${fr('√3', '4')}.<br>Multiplying by 12: 4π − 3√3. Two routes, one answer.`,
          `<b>Sanity check.</b> The cap is the whole piece to the right of ${rel(x, '=', '2')}, above and below the axis. The right half of the ellipse has area ${fr(`π${I('ab')}`, '2')} = 6π ≈ 18.85, and the cap 4π − 3√3 ≈ 7.37 is a little under 40% of it: plausible, since the line ${rel(x, '=', '2')} sits at half the semi-major axis, so the cap is well short of half of the right half.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the area bounded by ${Y2} = 8${x} and its latus rectum.`,
            a: `Here ${rel(a, '=', '2')}; by Lemma A.3 the triangle on the latus rectum has area ${HALF}(8)(2) = 8, so the segment is ${fr('32', '3')}.`,
          },
          {
            q: `Find the area bounded by ${y} = 6${x} − ${X2} and the chord joining ${pt('1', '5')} and ${pt('5', '5')}.`,
            a: `Intersections ${x} = 1, 5; parabola on top; ${INT('1', '5')}${NB}(6${x} − ${X2} − 5)${DX} = ${fr('32', '3')}. Check: apex ${pt('3', '9')}, triangle ${HALF}(4)(4) = 8, and ${fr('4', '3')} × 8 = ${fr('32', '3')}.`,
          },
          {
            q: `Find the area of the smaller segment of the circle ${X2} + ${Y2} = 25 cut off by the line ${rel(x, '=', '3')}.`,
            a: `Lemma A.1 with ${rel(r, '=', '5')}, ${rel(c, '=', '3')}: 25${NB}${INV('cos', fr('3', '5'))} − 3(4) = 25${NB}${INV('cos', fr('3', '5'))} − 12.`,
          },
          {
            q: `Find the area between ${Y2} = 4${x} and the double ordinate ${rel(x, '=', '4')}.`,
            a: `Lemma A.3 with ${rel(a, '=', '1')}, ${rel(h, '=', '4')}: triangle ${HALF}(8)(4) = 16, segment ${fr('64', '3')}.`,
          },
          {
            q: `Find the area of the smaller region into which ${rel(y, '=', '1')} cuts the ellipse ${ELLIPSE('4', '9')}.`,
            a: `Swap roles in Lemma A.2 (vertical semi-axis ${rel(b, '=', '3')} carries the cut):<br>6[${INV('cos', fr('1', '3'))} − ${fr('1', '9')}√8] = 6${NB}${INV('cos', fr('1', '3'))} − ${fr('4√2', '3')}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 563–565 ────────────────
  {
    n: 'B',
    title: 'Parametric Areas: the Astroid and the Cycloid',
    extra: true,
    kalam: 'A method that reproduces a known result on a known shape is safe to trust on a new one.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Some of the most famous area answers in JEE (the astroid’s ${fr(`3π${A2}`, '8')}, the cycloid arch’s 3π${A2}) belong to curves that are miserable or impossible to write as ${y} = ${of(f, x)}. They arrive as parametric equations, and the strip idea converts to ${t} in one line. This additional topic assumes nothing the chapter did not prove; it only changes the variable the strips are counted in.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Suppose a curve is given as ${x} = ${of(x, t)}, ${y} = ${of(y, t)} for α${NB}≤${NB}${t}${NB}≤${NB}β, traced exactly once, with ${rel(y, '≥', '0')} and ${x} increasing. Partition ${t}; the strip at ${t} has height ${of(y, t)} and width Δ${x} ≈ ${XP}${NB}Δ${t}, so<br>${A} = ${INT('α', 'β')}${NB}${of(y, t)}${NB}${XP}${DT}.<br><br>If ${x} decreases as ${t} increases, the integral comes out negative: take the absolute value, or reverse the limits. Multiply by the symmetry multiplier as usual.`,
      },
      {
        t: 'formula',
        kicker: 'Area under a parametric curve',
        main: `${A} = ${INT('α', 'β')}${NB}${of(y, t)}${NB}${XP}${DT}`,
        legend: [
          `${of(x, t)}, ${of(y, t)} = the curve traced once with ${rel(y, '≥', '0')} and ${x} increasing`,
          'α, β = the parameter’s limits',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Tool (Wallis’ formulas).</b> For ${rel(n, '≥', '2')},<br>${In(n)} = ${INT('0', 'π/2')}${NB}${TR('sin', t, n)}${DT} = ${fr(`${n} − 1`, n)}${NB}${In(`${n}−2`)},<br>${In('0')} = ${PI2},${NB}${NB}${In('1')} = 1.`,
      },
      {
        t: 'p',
        html: `<b>Proof of the reduction.</b> Integrate by parts with ${u} = ${TR('sin', t, `${n}−1`)}, d${I('v')} = ${SINT}${DT}:<br>${In(n)} = ${EV(`−${NB}${COST}${NB}${TR('sin', t, `${n}−1`)}`, '0', 'π/2')}<br>+ (${n} − 1)${INT('0', 'π/2')}${NB}${TR('sin', t, `${n}−2`)}${NB}${TR('cos', t, '2')}${DT}.<br>The bracket vanishes at both ends. Writing ${TR('cos', t, '2')} = 1 − ${TR('sin', t, '2')}:<br>${In(n)} = (${n} − 1)(${In(`${n}−2`)} − ${In(n)})<br>⟹ ${n}${NB}${In(n)} = (${n} − 1)${NB}${In(`${n}−2`)}. ■<br>So ${In('2')} = ${PI4}, ${In('4')} = ${fr('3', '4')} · ${PI4} = ${fr('3π', '16')}, ${In('6')} = ${fr('5', '6')} · ${fr('3π', '16')} = ${fr('5π', '32')}.`,
      },
      {
        t: 'formula',
        kicker: 'Wallis’ formulas',
        main: `${In(n)} = ${INT('0', 'π/2')}${NB}${TR('sin', t, n)}${DT} = ${fr(`${n} − 1`, n)}${NB}${In(`${n}−2`)}<br>${In('0')} = ${PI2},${NB}${NB}${In('1')} = 1`,
        legend: [`${n} = the power of sin${NB}${t} (${rel(n, '≥', '2')})`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main / Advanced Level',
        q: `Find the area enclosed by the astroid ${Xab} + ${Yab} = ${Aab}, ${rel(a, '>', '0')}.`,
        steps: [
          `Parametrise: ${x} = ${a}${NB}${TR('cos', t, '3')}, ${y} = ${a}${NB}${TR('sin', t, '3')}. Check it satisfies the equation:<br>${Xab} + ${Yab} = ${Aab}${NB}${TR('cos', t, '2')} + ${Aab}${NB}${TR('sin', t, '2')} = ${Aab}. ✓`,
          `The curve is unchanged by ${x} → −${x} and by ${y} → −${y}, so compute the first-quadrant part and multiply by 4. There ${t} runs from ${PI2} (where ${rel(x, '=', '0')}) down to 0 (where ${rel(x, '=', a)}), and ${XP} = −3${a}${NB}${TR('cos', t, '2')}${NB}${SINT}. Since ${x} decreases with ${t}, flip the limits:<br>${Q} = ${INT('0', 'π/2')}${NB}${a}${NB}${TR('sin', t, '3')} · 3${a}${NB}${TR('cos', t, '2')}${NB}${SINT}${DT}<br>= 3${A2}${INT('0', 'π/2')}${NB}${TR('sin', t, '4')}${NB}${TR('cos', t, '2')}${DT}.`,
          `Write ${TR('cos', t, '2')} = 1 − ${TR('sin', t, '2')} and apply Wallis:<br>${INT('0', 'π/2')}${NB}${TR('sin', t, '4')}${DT} − ${INT('0', 'π/2')}${NB}${TR('sin', t, '6')}${DT}<br>= ${fr('3π', '16')} − ${fr('5π', '32')} = ${fr('π', '32')}.`,
          `So ${Q} = ${fr(`3π${A2}`, '32')}, and<br>${A} = 4 · ${fr(`3π${A2}`, '32')} = ${fr(`3π${A2}`, '8')}.`,
          `<b>Check.</b> The astroid sits inside the circle ${X2} + ${Y2} = ${A2} of area π${A2}, and ${fr(`3π${A2}`, '8')} = 0.375${NB}π${A2} < π${A2}. Plausible: the astroid is much thinner than its circumscribed circle.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area under one arch of the cycloid ${x} = ${a}(${t} − ${SINT}), ${y} = ${a}(1 − ${COST}), 0${NB}≤${NB}${t}${NB}≤${NB}2π, above the ${x}-axis.`,
        steps: [
          `Here ${XP} = ${a}(1 − ${COST}) ≥ 0, so ${x} increases from 0 to 2π${a} and ${y} = ${a}(1 − ${COST}) ≥ 0 throughout. No flipping, no splitting:<br>${A} = ${INT('0', '2π')}${NB}${a}(1 − ${COST}) · ${a}(1 − ${COST})${DT}<br>= ${A2}${INT('0', '2π')}${NB}(1 − ${COST})<sup>2</sup>${DT}.`,
          `Expand and integrate term by term. ${INT('0', '2π')}${NB}1${DT} = 2π; ${INT('0', '2π')}${NB}${COST}${DT} = 0; and by the half-angle identity ${TR('cos', t, '2')} = ${fr(`1 + ${TR('cos', `2${t}`)}`, '2')},<br>${INT('0', '2π')}${NB}${TR('cos', t, '2')}${DT} = π + 0 = π.`,
          `Hence<br>${A} = ${A2}(2π − 0 + π) = 3π${A2}.`,
          `<b>Check.</b> The arch spans a rectangle of width 2π${a} and height 2${a}, area 4π${A2}. The answer 3π${A2} is ${fr('3', '4')} of that: a famously tidy fraction, and comfortably inside the bounding rectangle.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Consistency check, JEE Main Level',
        q: 'Recover the ellipse area parametrically.',
        steps: [
          `With ${x} = ${a}${NB}${COST}, ${y} = ${b}${NB}${SINT}, the first quadrant corresponds to ${t} running from ${PI2} to 0:<br>${Q} = ${INT('0', 'π/2')}${NB}${b}${NB}${SINT} · ${a}${NB}${SINT}${DT}<br>= ${I('ab')}${INT('0', 'π/2')}${NB}${TR('sin', t, '2')}${DT} = ${I('ab')} · ${PI4},<br>using ${In('2')} = ${PI4}.`,
          `Total = π${I('ab')}, agreeing with Theorem 3 of Topic 01. A method that reproduces a known result on a known shape is safe to trust on a new one.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the area enclosed by ${Xab} + ${Yab} = 4<sup>2/3</sup>.`,
            a: `Astroid with ${rel(a, '=', '4')}: ${fr('3π(16)', '8')} = 6π.`,
          },
          {
            q: `Find the area under one arch of ${x} = 2(${t} − ${SINT}), ${y} = 2(1 − ${COST}).`,
            a: 'Scale factor 2 on the standard cycloid: 3π(2)<sup>2</sup> = 12π.',
          },
          {
            q: `Find the area enclosed by ${x} = ${TR('cos', t, '3')}, ${y} = ${TR('sin', t, '3')}, 0${NB}≤${NB}${t}${NB}≤${NB}2π.`,
            a: `Astroid with ${rel(a, '=', '1')}: ${fr('3π', '8')}.`,
          },
          {
            q: `Using ${x} = 3${NB}${COST}, ${y} = 2${NB}${SINT}, find the area of ${ELLIPSE('9', '4')}.`,
            a: 'π(3)(2) = 6π.',
          },
          {
            q: `Find the area under one arch of ${x} = ${a}(${t} + ${SINT}), ${y} = ${a}(1 − ${COST}), 0${NB}≤${NB}${t}${NB}≤${NB}2π. (It is not 3π${A2}: this is a different curve.)`,
            a: `Here ${XP} = ${a}(1 + ${COST}), so<br>${A} = ${A2}${INT('0', '2π')}${NB}(1 − ${COST})(1 + ${COST})${DT}<br>= ${A2}${INT('0', '2π')}${NB}${TR('sin', t, '2')}${DT} = π${A2}:<br>the factor (1 − ${TR('cos', t, '2')}) kills the 3π term. Always expand before you assume.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 566–568 ────────────────
  {
    n: 'C',
    title: 'Inverse Functions and the Mirror Trick',
    extra: true,
    kalam: 'One geometric fact about reflection does most of the work.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter integrates functions as given. JEE regularly builds areas on ${ASIN}, ${ATAN}, logarithms and cube roots (functions whose inverses are the familiar ones) and on pairs like ${y} = ${X3} and ${y} = ${X13} that are inverses of each other ${ESTIMATE}. One geometric fact about reflection does most of the work.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Fact C.1 (the mirror).</b> The graph of ${f}<sup>−1</sup> is the reflection of the graph of ${f} in the line ${rel(y, '=', x)}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> ${pt(a, b)} lies on the graph of ${f} means ${of(f, a)} = ${b}, which means ${f}<sup>−1</sup>(${b}) = ${a}, which means ${pt(b, a)} lies on the graph of ${f}<sup>−1</sup>. Reflection in ${rel(y, '=', x)} is exactly the map ${pt(a, b)} ↦ ${pt(b, a)}. ■`,
      },
      {
        t: 'p',
        html: `<b>Proposition C.2 (mirror trick).</b> Let ${f} be continuous and strictly increasing with ${of(f, a)} = ${a} and ${of(f, b)} = ${b}, ${rel(a, '<', b)}, and suppose ${of(f, x)} ≥ ${x} on ${iv(a, b)}. Then the area enclosed between ${y} = ${of(f, x)} and ${y} = ${f}<sup>−1</sup>(${x}) equals<br>2${INT(a, b)}${NB}(${of(f, x)} − ${x})${DX}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The diagonal ${rel(y, '=', x)} cuts the enclosed region into two pieces. Reflection in ${rel(y, '=', x)} fixes the diagonal pointwise and swaps the two graphs (Fact C.1), so it maps the piece above the diagonal exactly onto the piece below it: the two pieces are congruent. The piece above the diagonal is bounded above by ${y} = ${of(f, x)} and below by ${rel(y, '=', x)}, with area ${INT(a, b)}${NB}(${of(f, x)} − ${x})${DX}. Double it. ■`,
      },
      {
        t: 'formula',
        kicker: 'The mirror trick',
        main: `Area between ${y} = ${of(f, x)} and ${y} = ${f}<sup>−1</sup>(${x}):<br>${A} = 2${INT(a, b)}${NB}(${of(f, x)} − ${x})${DX}`,
        legend: [
          `${f} = continuous and strictly increasing with ${of(f, x)} ≥ ${x} on ${iv(a, b)}`,
          `${a}, ${b} = the points where ${of(f, a)} = ${a} and ${of(f, b)} = ${b} (${rel(a, '<', b)})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Antiderivative toolkit</b>, each by one integration by parts with ${u} = ${ASIN} (etc.), d${I('v')} = d${x}:<br>∫${ASIN}${DX} = ${x}${NB}${ASIN} + ${RT1}${PLUS_C},<br>∫${ACOS}${DX} = ${x}${NB}${ACOS} − ${RT1}${PLUS_C},<br>∫${ATAN}${DX} = ${x}${NB}${ATAN} − ${HALF}${NB}ln(1 + ${X2})${PLUS_C}.`,
      },
      {
        t: 'formula',
        kicker: 'Antiderivative toolkit',
        main: `∫${ASIN}${DX} = ${x}${NB}${ASIN} + ${RT1}${PLUS_C}<br>∫${ACOS}${DX} = ${x}${NB}${ACOS} − ${RT1}${PLUS_C}<br>∫${ATAN}${DX} = ${x}${NB}${ATAN} − ${HALF}${NB}ln(1 + ${X2})${PLUS_C}`,
        legend: [`${C} = the constant of integration`],
        note: null,
      },
      {
        t: 'p',
        html: `For instance, ∫${fr(x, RT1)}${DX} = −${RT1}${PLUS_C} by the substitution ${u} = 1 − ${X2}, which produces the first line.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the area of the region bounded by ${y} = ${ASIN}, ${y} = ${ACOS} and the ${x}-axis.`,
        steps: [
          `Both curves live over 0${NB}≤${NB}${x}${NB}≤${NB}1 and are non-negative there. ${y} = ${ASIN} starts at the origin and ${y} = ${ACOS} ends at ${pt('1', '0')}, so the ${x}-axis closes the region only underneath the lower of the two curves. They cross where ${ASIN} = ${ACOS}, i.e. at ${x} = ${ROOT2} (both equal ${PI4}). Sampling ${rel(x, '=', '0')}: ${INV('sin', '0')} = 0 < ${PI2} = ${INV('cos', '0')}, so ${ASIN} is the lower curve on the left piece, and ${ACOS} is the lower curve on the right piece. The region is the curvilinear triangle with vertices ${pt('0', '0')}, ${pt('1', '0')} and ${pt(ROOT2, PI4)}.<br>${A} = ${INT('0', RS(''))}${NB}${ASIN}${DX}<br>+ ${INT(RS(''), '1')}${NB}${ACOS}${DX}.`,
          `First piece, with ${of(G, x)} = ${x}${NB}${ASIN} + ${RT1}:<br>${G}(${ROOT2}) − ${of(G, '0')} = (${PI4R2} + ${ROOT2}) − 1<br>= ${PI4R2} + ${ROOT2} − 1.`,
          `Second piece, with ${of(F, x)} = ${x}${NB}${ACOS} − ${RT1}:<br>${of(F, '1')} − ${F}(${ROOT2}) = 0 − (${PI4R2} − ${ROOT2})<br>= −${PI4R2} + ${ROOT2}.`,
          `Adding, the ${PI4R2} terms cancel:<br>${A} = ${fr('2', '√2')} − 1 = √2 − 1.`,
          `<b>Check.</b> Numerically √2 − 1 ≈ 0.414. The region is a curvilinear triangle of base 1 and peak height ${PI4} ≈ 0.785; a straight-sided triangle with the same vertices has area ${HALF} · 1 · ${PI4} ≈ 0.393, so 0.414 is close, as it should be. A value near 1.16 (that is, ${PI2} + 1 − √2) would signal that you integrated the upper envelope instead of the lower one, and ${PI2} that you added the full areas under both curves.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the area enclosed between ${y} = ${X3} and ${y} = ${X13}.`,
        steps: [
          `These are mutual inverses, meeting on the diagonal at ${x} = −1, 0, 1. Two lobes, symmetric about the origin. On ${pt('0', '1')}, ${X13} ≥ ${x} ≥ ${X3}, so by Proposition C.2 each lobe has area<br>2${INT('0', '1')}${NB}(${X13} − ${x})${DX} = 2(${fr('3', '4')} − ${HALF}) = ${HALF}.`,
          `Total area = 2 × ${HALF} = 1.`,
          `<b>Direct check.</b> 2${INT('0', '1')}${NB}(${X13} − ${X3})${DX} = 2(${fr('3', '4')} − ${fr('1', '4')}) = 1. Agreement, and notice how the mirror trick replaced the awkward ${X13} versus ${X3} comparison with the easy ${X13} versus ${x}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area bounded by ${y} = ${ATAN}, ${y} = ${ACOT} and the ${y}-axis.`,
        steps: [
          `Use the identity ${ACOT} = ${PI2} − ${ATAN} for ${rel(x, '>', '0')}: both sides lie in ${pt('0', PI2)} and both have tangent equal to ${fr('1', x)}, so they are equal. The curves meet where ${ATAN} = ${PI4}, i.e. at ${rel(x, '=', '1')}. On ${iv('0', '1')} the cotangent curve is on top (at ${rel(x, '=', '0')}: ${PI2} versus 0).`,
          `${A} = ${INT('0', '1')}${NB}(${ACOT} − ${ATAN})${DX}<br>= ${INT('0', '1')}${NB}(${PI2} − 2${NB}${ATAN})${DX}.`,
          `Using the toolkit antiderivative:<br>${A} = ${PI2} − 2${EV(`${x}${NB}${ATAN} − ${HALF}${NB}ln(1 + ${X2})`, '0', '1')}<br>= ${PI2} − 2(${PI4} − ${HALF}${NB}ln${NB}2) = ln${NB}2.`,
          `<b>Check.</b> Numerically ≈ 0.693. The gap starts at ${PI2} ≈ 1.57 at the ${y}-axis and closes to 0 at ${rel(x, '=', '1')}; averaging roughly ${PI4} over a width of 1 predicts about 0.7. Agreement.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the area enclosed between ${y} = ${X2} and ${y} = √${x}.`,
            a: `Mutual inverses on ${iv('0', '1')}; mirror trick: 2${INT('0', '1')}${NB}(√${x} − ${x})${DX} = 2(${fr('2', '3')} − ${HALF}) = ${fr('1', '3')}.`,
          },
          {
            q: `Find the area bounded by ${y} = ${ATAN}, the ${y}-axis, and ${y} = ${PI4}.`,
            a: `Rewrite as ${x} = ${TR('tan', y)} and integrate horizontally:<br>${INT('0', 'π/4')}${NB}${TR('tan', y)}${DY} = ${EV(`−${NB}ln(cos${NB}${y})`, '0', 'π/4')}<br>= ln${NB}√2 = ${HALF}${NB}ln${NB}2.`,
          },
          {
            q: `Find the area bounded by ${y} = ln${NB}${x}, ${rel(y, '=', '1')} and ${rel(x, '=', '1')}.`,
            a: `${INT('1', e)}${NB}(1 − ln${NB}${x})${DX} = (${e} − 1) − 1 = ${e} − 2, since ${INT('1', e)}${NB}ln${NB}${x}${DX} = 1.`,
          },
          {
            q: `Find the area bounded by ${y} = ${ACOS}, the ${x}-axis, ${rel(x, '=', '0')} and ${rel(x, '=', '1')}.`,
            a: `${EV(`${x}${NB}${ACOS} − ${RT1}`, '0', '1')} = 0 − (−1) = 1.`,
          },
          {
            q: `Find the area bounded by ${y} = ${ASIN}, ${y} = ${PI2} and the ${y}-axis, and explain its relation to Question 4.`,
            a: `${INT('0', '1')}${NB}(${PI2} − ${ASIN})${DX} = ${PI2} − (${PI2} − 1) = 1, the same area, because the second region is the mirror image of the first in the horizontal line ${y} = ${PI4}: the map ${y} ↦ ${PI2} − ${y} sends ${ACOS} to ${PI2} − ${ACOS} = ${ASIN} and the ${x}-axis to the line ${y} = ${PI2}, so it carries Question 4’s region exactly onto this one.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 568–570 ────────────────
  {
    n: 'D',
    title: 'When the Area Is the Unknown: Hunting a Parameter',
    extra: true,
    kalam: 'The skill is to write the area as a function of the parameter (limits usually depend on it), then solve.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Every problem so far handed you the curves and asked for a number. JEE Main and Advanced frequently reverse this ${ESTIMATE}: the area is specified, and a coefficient, a cutting line, or a point of tangency is the unknown. The skill is to write the area as a function of the parameter (limits usually depend on it), then solve. One tool carries most instances.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          `<b>Name the parameter</b> ${k} and write every boundary in terms of it.`,
          `<b>Find the limits as functions of</b> ${k} by solving the relevant intersections. Do not plug numbers yet.`,
          `<b>Form ${of(A, k)} and impose the condition</b> (${A} = target, or ${A} maximal, or a ratio).`,
          `<b>Solve, then sanity-check</b>: confirm ${of(A, k)} moves in the right direction as ${k} changes, and that the answer’s location is geometrically sensible.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Tool (root-gap lemma).</b> If ${of(q, x)} = ${c}${NB}(${x} − ${R1})(${x} − ${R2s}) with ${R1} < ${R2s}, then<br>${INT(`${r}₁`, `${r}₂`)}${NB}${of(q, x)}${DX} = −${fr(`${c}${NB}(${R2s} − ${R1})<sup>3</sup>`, '6')}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Substitute ${t} = ${x} − ${R1}, so ${t} runs from 0 to ${L} = ${R2s} − ${R1}:<br>${INT('0', L)}${NB}${c}${NB}${t}${NB}(${t} − ${L})${DT} = ${c}${NB}(${fr(cu(L), '3')} − ${fr(cu(L), '2')}) = −${fr(`${c}${cu(L)}`, '6')}. ■`,
      },
      {
        t: 'p',
        html: 'Consequence: whenever the region between a line and a parabola is bounded by their two intersection points, its area depends only on the parabola’s leading coefficient and the <b>gap between the roots</b>: a one-line computation that replaces the full antiderivative.',
      },
      {
        t: 'formula',
        kicker: 'Root-gap lemma',
        main: `${INT(`${r}₁`, `${r}₂`)}${NB}${of(q, x)}${DX} = −${fr(`${c}${NB}(${R2s} − ${R1})<sup>3</sup>`, '6')}`,
        legend: [
          `${of(q, x)} = the quadratic ${c}${NB}(${x} − ${R1})(${x} − ${R2s})`,
          `${R1}, ${R2s} = its roots (${R1} < ${R2s})`,
        ],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find ${k} such that the line ${rel(y, '=', k)} divides the region {${pt(x, y)} ∶ 0 ≤ ${y} ≤ 4 − ${X2}} into two parts of equal area.`,
        steps: [
          `Total area first:<br>${sb(A, 'tot')} = ${INT('−2', '2')}${NB}(4 − ${X2})${DX} = 2${EV(`4${x} − ${fr(X3, '3')}`, '0', '2')}<br>= 2(8 − ${fr('8', '3')}) = ${fr('32', '3')}.`,
          `The line ${rel(y, '=', k)} (with 0${NB}<${NB}${k}${NB}<${NB}4) meets the parabola where 4 − ${X2} = ${k}, i.e. at ${x} = ±${u} where ${u} = √(4${NB}−${NB}${k}). The upper part is the cap between the line and the parabola:<br>${sb(A, 'up')} = ${INT(`−${u}`, u)}${NB}(4 − ${X2} − ${k})${DX}<br>= 2[(4 − ${k})${NB}${u} − ${fr(cu(u), '3')}].`,
          `Since 4 − ${k} = ${sq(u)}, this collapses:<br>${sb(A, 'up')} = 2(${cu(u)} − ${fr(cu(u), '3')}) = ${fr(`4${cu(u)}`, '3')}.`,
          `Set it equal to half the total, ${fr('16', '3')}:<br>${fr(`4${cu(u)}`, '3')} = ${fr('16', '3')} ⟹ ${cu(u)} = 4 ⟹ ${u} = <sup>3</sup>√4.`,
          `Therefore<br>${k} = 4 − ${sq(u)} = 4 − 4<sup>2/3</sup> = 4 − <sup>3</sup>√16 ≈ 1.48.`,
          `<b>Sanity checks.</b> As ${k} rises from 0 to 4, the cap shrinks continuously from the whole region to nothing, so the solution is unique. And the answer sits below the region’s mean height ${I('ȳ')} = 1.6 (computable as ${fr('1', A)}∬${NB}${y}${NB}d${A}): the region is wider near its base, so the equal-area line must sit below the balance point. Both directions agree.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Among all lines ${y} = ${I('mx')} + 3, find the one that minimises the area enclosed between it and the parabola ${y} = ${X2}, and find that minimum area.`,
        steps: [
          `Intersections: ${X2} = ${I('mx')} + 3, i.e. ${X2} − ${I('mx')} − 3 = 0. Its discriminant ${sq(m)} + 12 is always positive, so there are always two roots ${R1} < ${R2s} with gap ${R2s} − ${R1} = √(${sq(m)}${NB}+${NB}12). Between them the line is on top (test ${rel(x, '=', '0')}: line gives 3, parabola gives 0). By the root-gap lemma with ${rel(c, '=', '−1')} applied to ${q} = line − parabola:<br>${of(A, m)} = ${fr(`(${R2s} − ${R1})<sup>3</sup>`, '6')} = ${fr(`(${sq(m)} + 12)<sup>3/2</sup>`, '6')}.`,
          `This is minimised when ${sq(m)} + 12 is, i.e. at ${rel(m, '=', '0')}:<br>${sb(A, 'min')} = ${fr('12<sup>3/2</sup>', '6')} = ${fr('24√3', '6')} = 4√3.`,
          `<b>Why it is Advanced-level.</b> The parameter appears inside the limits, not just the integrand, and the winning move is refusing to write the roots out at all: the root-gap lemma shows the area depends on ${m} only through the discriminant. A student who grinds through ${R1} and ${R2s} explicitly will get there, slowly; the lemma gets there in two lines and generalises instantly.`,
          `<b>Check.</b> 4√3 ≈ 6.93. The horizontal line ${rel(y, '=', '3')} cuts the parabola at ±√3, and the lens is exactly a parabolic segment of base 2√3 and height 3, so by Lemma A.3 its area is ${fr('4', '3')} × ${HALF} × 2√3 × 3 = 4√3. Agreement.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find ${rel(k, '>', '0')} such that ${rel(y, '=', k)} bisects the region 0${NB}≤${NB}${y}${NB}≤${NB}9 − ${X2}.`,
            a: `Total ${fr('4·27', '3')} = 36; cap = ${fr(`4${cu(u)}`, '3')} with ${sq(u)} = 9 − ${k}; setting ${fr(`4${cu(u)}`, '3')} = 18 gives ${cu(u)} = ${fr('27', '2')}, so ${u} = ${fr('3', '<sup>3</sup>√2')} and<br>${k} = 9 − ${fr('9', '<sup>3</sup>√4')} = 9${NB}(1 − 2<sup>−2/3</sup>) ≈ 3.33.`,
          },
          {
            q: `Find all ${m} for which the area between ${y} = ${X2} and ${y} = ${I('mx')} + 3 equals ${fr('32', '3')}.`,
            a: `${fr(`(${sq(m)} + 12)<sup>3/2</sup>`, '6')} = ${fr('32', '3')} gives (${sq(m)} + 12)<sup>3/2</sup> = 64, so ${sq(m)} + 12 = 16 and ${m} = ±2.`,
          },
          {
            q: `Find ${rel(a, '>', '0')} such that the area bounded by ${y} = ${I('ax')} − ${X2} and the ${x}-axis equals ${fr('9', '2')}.`,
            a: `Roots 0 and ${a}; area = ${fr(cu(a), '6')}; setting ${fr(cu(a), '6')} = ${fr('9', '2')} gives ${rel(a, '=', '3')}.`,
          },
          {
            q: `The line ${rel(y, '=', c)} (with 0${NB}<${NB}${c}${NB}<${NB}2) cuts the diamond ${abs(x)} + ${abs(y)} ≤ 2 into a lower and an upper part. Find ${c} if their areas are in ratio 3${NB}∶${NB}1 (lower : upper).`,
            a: `The diamond has area 8; the cap above ${rel(y, '=', c)} is a triangle with base 2(2 − ${c}) and height 2 − ${c}, area (2 − ${c})<sup>2</sup>; ratio 3${NB}∶${NB}1 forces the cap to be 2, so (2 − ${c})<sup>2</sup> = 2 and ${c} = 2 − √2.`,
          },
          {
            q: `Find ${a} such that the area enclosed between ${y} = ${X2} and ${y} = ${a} − ${X2} equals 9.`,
            a: `Curves meet at ${x} = ±√(${fr(a, '2')}); area = ${INT(`−√(${a}/2)`, `√(${a}/2)`)}${NB}(${a} − 2${X2})${DX} = ${fr(`4${a}`, '3')}√(${fr(a, '2')}); setting this to 9 gives ${a}<sup>3/2</sup> = ${fr('27√2', '4')}, hence ${a} = ${fr('9', '2')} (check: ${fr('4·4.5', '3')} × 1.5 = 9 ✓).`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 571–573 ────────────────
  {
    n: 'E',
    title: 'Multi-Hump Periodic Areas',
    extra: true,
    kalam: 'Three structural facts replace the casework.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter splits a trig integral at each sign change: correct, and hopeless at scale. Asked for the area between ${SINX} and ${COSX} over ${iv('0', '2π')}, listing every crossing and computing four integrals wastes minutes and invites slips. Three structural facts replace the casework.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Fact E.1 (hump counting).</b> Each arch of ${y} = ${SINX} between consecutive multiples of π has area<br>${INT('0', 'π')}${NB}${SINX}${DX} = ${EV(`−${NB}${COSX}`, '0', 'π')} = 2.<br>Since ${abs(`sin(${x} + π)`)} = ${abs(SINX)}, every arch of ${abs(SINX)} is a translate of the first, so over any interval made of ${n} full half-periods,<br>area under ${abs(SINX)} = 2${n}.<br>The same holds for ${abs(COSX)}.`,
      },
      {
        t: 'formula',
        kicker: 'Hump counting',
        main: `${INT('0', 'π')}${NB}${SINX}${DX} = 2<br>area under ${abs(SINX)} = 2${n}`,
        legend: [`${n} = number of full arches (pieces of length π) in the interval`],
        note: `The same holds for ${abs(COSX)}.`,
      },
      {
        t: 'p',
        html: `<b>Fact E.2 (shift invariance).</b> If ${f} has period ${T}, then ${INT(a, `${a}+${T}`)}${NB}${f} is the same for every ${a}. <b>Proof:</b> split ${INT(a, `${a}+${T}`)} = ${INT(a, T)} + ${INT(T, `${a}+${T}`)} and substitute ${u} = ${t} − ${T} in the second piece; periodicity makes it ${INT('0', a)}${NB}${f}, so the whole is ${INT(a, T)}${NB}${f} + ${INT('0', a)}${NB}${f} = ${INT('0', T)}${NB}${f}, whatever ${a} is. ■`,
      },
      {
        t: 'p',
        html: `<b>Fact E.3 (amplitude shift).</b> Any expression ${A}${NB}${SINX} + ${B}${NB}${COSX} can be written as ${R}${NB}sin(${x} + ${ph}) with ${R} = √(${sq(A)}${NB}+${NB}${sq(B)}). In particular<br>${SINX} − ${COSX} = √2${NB}sin(${x} − ${PI4}),<br>which follows by expanding the right side with the subtraction formulas. This converts “area between sine and cosine” into “scaled area under a single modulus sine”: Fact E.1 finishes it.`,
      },
      {
        t: 'formula',
        kicker: 'Amplitude shift',
        main: `${A}${NB}${SINX} + ${B}${NB}${COSX} = ${R}${NB}sin(${x} + ${ph})<br>${SINX} − ${COSX} = √2${NB}sin(${x} − ${PI4})`,
        legend: [`${R} = the amplitude √(${sq(A)}${NB}+${NB}${sq(B)})`, `${ph} = the angle with cos${NB}${ph} = ${fr(A, R)} and sin${NB}${ph} = ${fr(B, R)}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Odd-function reminder.</b> For odd ${f} on ${iv(`−${a}`, a)}, the signed integral is 0 but the area is 2${INT('0', a)}${NB}${abs(f)}${DX}: the Topic 01 trap, restated because periodic problems love symmetric intervals.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the area bounded by ${y} = ${SINX} and the ${x}-axis for 0${NB}≤${NB}${x}${NB}≤${NB}${fr('5π', '2')}.`,
        steps: [
          `The interval holds two full arches (${iv('0', 'π')}, ${iv('π', '2π')}) plus the rising half of a third (${iv('2π', fr('5π', '2'))}):<br>${A} = 2 + 2 + ${INT('2π', '5π/2')}${NB}${SINX}${DX}<br>= 4 + ${EV(`−${NB}${COSX}`, '2π', '5π/2')} = 4 + (0 + 1) = 5.`,
          `<b>Check.</b> Never report ${INT('0', '5π/2')}${NB}${SINX}${DX} = 1: that is the signed value after cancellations, and it is the single most common wrong answer to this pattern.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main / Advanced Level',
        q: `Find the area of the region between ${y} = ${SINX} and ${y} = ${COSX} for 0${NB}≤${NB}${x}${NB}≤${NB}2π.`,
        steps: [
          `By Fact E.3 the gap is ${SINX} − ${COSX} = √2${NB}sin(${x} − ${PI4}), so<br>${A} = √2${INT('0', '2π')}${NB}${abs(`sin(${x} − ${PI4})`)}${DX}.`,
          `Substitute ${u} = ${x} − ${PI4}; the interval shifts to ${iv(`−${PI4}`, fr('7π', '4'))}, still of length 2π. By Fact E.2 the integral of the periodic function ${abs(TR('sin', u))} (period π) over any window of length 2π equals two full periods’ worth:<br>${A} = √2 × 2 × ${INT('0', 'π')}${NB}${abs(TR('sin', u))}${DU} = 4√2<br>(${INT('0', 'π')}${NB}${abs(TR('sin', u))}${DU} = 2).`,
          `<b>Brute-force check.</b> The curves cross at ${x} = ${PI4} and ${x} = ${fr('5π', '4')}. On ${iv(PI4, fr('5π', '4'))}, sine is on top:<br>${INT('π/4', '5π/4')}${NB}(${SINX} − ${COSX})${DX}<br>= ${EV(`−${NB}${COSX} − ${SINX}`, 'π/4', '5π/4')}<br>= √2 − (−√2) = 2√2.`,
          `The two end-pieces, where cosine is on top, are<br>${INT('0', 'π/4')}${NB}(${COSX} − ${SINX})${DX}<br>= ${EV(`${SINX} + ${COSX}`, '0', 'π/4')} = √2 − 1<br>and<br>${INT('5π/4', '2π')}${NB}(${COSX} − ${SINX})${DX}<br>= ${EV(`${SINX} + ${COSX}`, '5π/4', '2π')}<br>= 1 − (−√2) = 1 + √2.`,
          'Total: (√2 − 1) + 2√2 + (1 + √2) = 4√2. Agreement, but the amplitude-shift route took three lines, not three integrals.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the area enclosed between ${y} = ${SIN2X} and ${y} = ${SINX} for 0${NB}≤${NB}${x}${NB}≤${NB}π.`,
        steps: [
          `Intersections: ${SIN2X} = ${SINX} gives ${SINX}${NB}(2${NB}${COSX} − 1) = 0, so ${x} = 0, ${PI3}, π. Sample between: at ${x} = ${PI6}, sin${NB}${PI3} = ${fr('√3', '2')} > ${HALF} = sin${NB}${PI6}, so ${SIN2X} is on top on ${pt('0', PI3)} and beneath on ${pt(PI3, 'π')} (check ${x} = ${PI2}: 0 < 1).<br>${A} = ${INT('0', 'π/3')}${NB}(${SIN2X} − ${SINX})${DX}<br>+ ${INT('π/3', 'π')}${NB}(${SINX} − ${SIN2X})${DX}.`,
          `First piece: ${EV(`−${fr(TR('cos', `2${x}`), '2')} + ${COSX}`, '0', 'π/3')}<br>= (${fr('1', '4')} + ${HALF}) − (−${HALF} + 1)<br>= ${fr('3', '4')} − ${HALF} = ${fr('1', '4')}.`,
          `Second piece: ${EV(`−${NB}${COSX} + ${fr(TR('cos', `2${x}`), '2')}`, 'π/3', 'π')}<br>= (1 + ${HALF}) − (−${HALF} − ${fr('1', '4')})<br>= ${fr('3', '2')} + ${fr('3', '4')} = ${fr('9', '4')}.`,
          `${A} = ${fr('1', '4')} + ${fr('9', '4')} = ${fr('5', '2')}.`,
          `<b>Check.</b> Over ${iv('0', 'π')} we have ∫${abs(SINX)} = 2 and ∫${abs(SIN2X)} = ${HALF}${INT('0', '2π')}${NB}${abs(TR('sin', u))}${DU} = 2, so the area between the curves cannot exceed 4; ${fr('5', '2')} sits comfortably inside. Missing the interior crossing at ${PI3} (the classic error here) would produce a wrong, partly negative total.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the area bounded by ${y} = ${SINX} and the ${x}-axis for 0${NB}≤${NB}${x}${NB}≤${NB}3π.`,
            a: 'Three full arches: 3 × 2 = 6.',
          },
          {
            q: `Find the area between ${y} = ${SINX} and ${y} = ${COSX} for 0${NB}≤${NB}${x}${NB}≤${NB}π.`,
            a: `Shift ${u} = ${x} − ${PI4}: window of length π = one full period of ${abs(TR('sin', u))}, so ${A} = √2 × 2 = 2√2.`,
          },
          {
            q: `Find the area between ${y} = ${abs(SINX)} and ${y} = ${abs(COSX)} for 0${NB}≤${NB}${x}${NB}≤${NB}${PI2}.`,
            a: `They cross at ${PI4}; by symmetry about that point, ${A} = 2${INT('0', 'π/4')}${NB}(${COSX} − ${SINX})${DX} = 2(√2 − 1).`,
          },
          {
            q: `Find the area enclosed between ${y} = ${SIN2X} and ${y} = ${SINX} for 0${NB}≤${NB}${x}${NB}≤${NB}2π.`,
            a: `Crossings at 0, ${PI3}, π, ${fr('5π', '3')}, 2π; the four pieces evaluate to ${fr('1', '4')}, ${fr('9', '4')}, ${fr('9', '4')}, ${fr('1', '4')} respectively (same antiderivatives as this topic’s third worked example, with the third piece taking ${SIN2X} on top and the fourth ${SINX}), totalling 5.`,
          },
          {
            q: `Find the area under ${y} = ${abs(COSX)} for 0${NB}≤${NB}${x}${NB}≤${NB}${fr('3π', '2')}.`,
            a: `The interval ${iv('0', fr('3π', '2'))} splits into three pieces of length ${PI2}, and each contributes ${INT('0', 'π/2')}${NB}${abs(COSX)}${DX} = 1 (by the symmetry of ${abs(COSX)}, each of these pieces of length ${PI2} has the same area), so the area is 3.`,
          },
        ],
      },
    ],
  },
];
