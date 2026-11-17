import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Additional topics A–E, pp. 354–371 of the Class 12 Mathematics
 * Master Reference (October 2026 edition), word for word: the "Chapter 5:
 * Continuity and Differentiability — Additional Topics" part's Addenda A to E,
 * with the book's letters. Its heading is not copied; its p. 354 opening
 * paragraphs are the first paragraphs of A's "Introduction". Each addendum's
 * opening text is its "Introduction" part, then its own headings as parts
 * (A: "The generating principle", "The six standard limits, derived"; B: its
 * three lemmas and the companion rule; C: Theorems C.1 and C.2; D: "Cauchy’s
 * Mean Value Theorem", "The Rolle cascade: counting roots"; E: "The
 * criterion"), the run of "Example X.N" worked examples (one part, "Worked
 * examples"), and "Practice — Addendum X" ("Practice", answers set against
 * their questions). E's answers end on p. 371, where Addendum P starts. The
 * book's cross-references to the main chapter are reworded to its topics. The
 * displayed equations stay in the prose; eight formula cards were added after
 * review rm125b (DECISIONS-M12 item 26). The book's brace is written one line per piece;
 * the table inside Example E.1 is written as lines of its step. No drawings on
 * these pages. d upright in d/dx, e upright, LHL/RHL/LHD/RHD upright. Every
 * fraction is stacked (<frac>); a fraction inside a fraction is written with
 * ÷; no em dashes.
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
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const s = I('s');
const t = I('t');
const u = I('u');
const x = I('x');
const y = I('y');
const C = I('C');
const F = I('F');
const ph = I('φ');
const lam = I('λ');
const eps = I('ε');

const of = (fn: string, arg: string) => `${fn}(${arg})`;
const abs = (s2: string) => `|${WJ}${s2}|`;
const fl = (s2: string) => `⌊${s2}⌋`;
const sq = (s2: string) => `${s2}<sup>2</sup>`;
const cu = (s2: string) => `${s2}<sup>3</sup>`;
const sb = (base: string, s2: string) => `${base}<sub>${s2}</sub>`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
const lim = (s2: string) => `lim<sub>${s2}</sub>`;
/** A limit glued to its operand. */
const L = (s2: string, op: string) => `${lim(s2)}${NB}${op}`;
/** e raised to a run, e upright. */
const ex = (pw: string) => `e<sup>${pw}</sup>`;
/** An interval, its comma glued. */
const iv = (lo: string, hi: string, o = '(', cl = ')') => `${o}${lo},${NB}${hi}${cl}`;

const X0 = `${x}→0`;
const H0 = `${h}→0`;
const H0P = `${h}→0<sup>+</sup>`;
const X0P = `${x}→0<sup>+</sup>`;
const X0M = `${x}→0<sup>−</sup>`;
const SINX = `sin${NB}${x}`;
const COSX = `cos${NB}${x}`;
const TANX = `tan${NB}${x}`;
const HALF = fr('1', '2');
const P2 = fr('π', '2');
const X2 = sq(x);
const X3 = cu(x);
const fx = of(f, x);
const fc = of(f, c);
const fp = (s2: string) => `${f}′(${s2})`;
const gp = (s2: string) => `${g}′(${s2})`;
const PIECE = (rule: string, cond: string) => `${fx} = ${rule},${NB}${NB}${cond}`;
const R1 = `√(1${NB}+${NB}${I('kx')})`;
const R2 = `√(1${NB}−${NB}${I('kx')})`;
const D = fr('d', `d${x}`);
const SLN2 = `ln${NB}2`;
const ZPI = iv('0', '2π');

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 354–358 ────────────────
  {
    n: 'A',
    title: 'Standard Limits: the Engine Behind Every Continuity Question',
    extra: true,
    kalam: 'Every standard limit is a derivative in disguise.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter taught you the definitions, the bridge theorem, the full differentiation toolkit, and both Mean Value Theorems, but five examinable patterns stand a step beyond it. Additional topic A derives the standard limits that every continuity question leans on (Topic 01’s own practice exercise 5 needs ${L(X0, fr(`1 − ${COSX}`, X2))}). Additional topic B proves the modulus-differentiability rules that Topic 01’s third worked example states without proof. Additional topic C builds the functional-equation machinery that appears at JEE Advanced. Additional topic D adds Cauchy’s Mean Value Theorem (the parent of both Rolle’s and Lagrange’s theorems) and the Rolle cascade for counting roots. Additional topic E handles compositions with the greatest integer function, where the slogan “jumps at every integer” is not enough to count correctly. Additional topic P closes with what JEE actually asks.<br><br>Nothing here is new theory beyond the chapter’s own tools: every derivation runs on the limit definition, the squeeze theorem, or Rolle’s theorem, applied one step more carefully than the chapter needed.`,
      },
      {
        t: 'p',
        html: `A “find ${k} so that ${f} is continuous” question reduces to evaluating one limit. When the piece containing the junction is a quotient like ${fr(`sin${NB}5${x}`, `3${x}`)} or ${fr(`${ex(`3${x}`)} − 1`, `ln(1 + 2${x})`)}, neither LHL nor RHL can be found by substitution: you need a stock of standard limits. The chapter uses ${L(X0, fr(SINX, x))} = 1 in passing; here is the full stock, each one derived, plus the single principle that generates all of them.`,
      },

      { t: 'part', title: 'The generating principle' },
      {
        t: 'p',
        html: `Every standard limit is a derivative in disguise. If ${f} is differentiable at ${a}, then by definition<br>${L(H0, fr(`${of(f, `${a} + ${h}`)} − ${of(f, a)}`, h))} = ${fp(a)}.<br>Read the other way: whenever you meet a limit of the form “small change in ${f} over small change in input,” the answer is simply ${fp(a)}. The six limits below are this formula applied at chosen points.`,
      },

      { t: 'part', title: 'The six standard limits, derived' },
      {
        t: 'p',
        html: `<b>L1.</b> ${L(X0, fr(SINX, x))} = 1<br>Take a sector of the unit circle with angle ${x}, for 0 < ${x} < ${P2}. Compare three areas: the inner triangle has area ${HALF}${NB}${SINX}, the sector has area ${fr(x, '2')}, and the outer triangle (built on the tangent) has area ${HALF}${NB}${TANX}. Nesting them:<br>${HALF}${NB}${SINX} < ${fr(x, '2')} < ${HALF}${NB}${TANX}.<br>Divide through by the positive number ${HALF}${NB}${SINX}:<br>1 < ${fr(x, SINX)} < ${fr('1', COSX)}<br>⟹ ${COSX} < ${fr(SINX, x)} < 1.<br>As ${x} → 0<sup>+</sup>, ${COSX} → 1, so the squeeze theorem forces ${fr(SINX, x)} → 1. Replacing ${x} by −${x} changes nothing (both sides are even), so the two-sided limit holds. ■`,
      },
      {
        t: 'p',
        html: `<b>L2.</b> ${L(X0, fr(`1 − ${COSX}`, X2))} = ${HALF}<br>Use the half-angle identity 1 − ${COSX} = 2${NB}sin<sup>2</sup>${NB}${fr(x, '2')}:<br>${fr(`1 − ${COSX}`, X2)} = 2${NB}sin<sup>2</sup>(${fr(x, '2')}) ÷ ${X2}<br>= ${HALF}(sin(${fr(x, '2')}) ÷ ${fr(x, '2')})<sup>2</sup><br>⟶ ${HALF} · 1<sup>2</sup> = ${HALF}. ■`,
      },
      {
        t: 'p',
        html: `<b>L3.</b> ${L(X0, fr(`${ex(x)} − 1`, x))} = 1<br>This is exactly the difference quotient of ${fx} = ${ex(x)} at ${a} = 0:<br>${L(H0, fr(`${ex(`0+${h}`)} − ${ex('0')}`, h))} = ${fp('0')} = ${ex('0')} = 1. ■`,
      },
      {
        t: 'p',
        html: `<b>L4.</b> ${L(X0, fr(`ln(1 + ${x})`, x))} = 1<br>This is the difference quotient of ${of(f, t)} = ln${NB}${t} at ${a} = 1, since ln(1 + ${x}) − ln${NB}1 = ln(1 + ${x}):<br>${L(X0, fr(`ln(1 + ${x}) − ln${NB}1`, x))} = ${fp('1')} = ${fr('1', '1')} = 1. ■`,
      },
      {
        t: 'p',
        html: `<b>L5.</b> ${L(X0, fr(`${a}<sup>${x}</sup> − 1`, x))} = ln${NB}${a}<br>Write ${a}<sup>${x}</sup> = ${ex(`${x}${NB}ln${NB}${a}`)} and substitute ${u} = ${x}${NB}ln${NB}${a}, so ${u} → 0 as ${x} → 0:<br>${fr(`${a}<sup>${x}</sup> − 1`, x)} = ${fr(`${ex(`${x}${NB}ln${NB}${a}`)} − 1`, `${x}${NB}ln${NB}${a}`)} · ln${NB}${a}<br>⟶ 1 · ln${NB}${a},<br>by L3 applied to ${u}. ■`,
      },
      {
        t: 'p',
        html: `<b>L6.</b> ${L(X0, fr(`(1 + ${x})<sup>${n}</sup> − 1`, x))} = ${n}<br>This is the difference quotient of ${of(f, t)} = ${t}<sup>${n}</sup> at ${a} = 1:<br>${L(X0, fr(`(1 + ${x})<sup>${n}</sup> − 1`, x))} = ${fp('1')}<br>= ${n}(1)<sup>${n}−1</sup> = ${n}.<br>It works for every real ${n}, not just integers. ■`,
      },
      {
        t: 'formula',
        kicker: 'The six standard limits',
        main: `${L(X0, fr(SINX, x))} = 1<br>${L(X0, fr(`1 − ${COSX}`, X2))} = ${HALF}<br>${L(X0, fr(`${ex(x)} − 1`, x))} = 1<br>${L(X0, fr(`ln(1 + ${x})`, x))} = 1<br>${L(X0, fr(`${a}<sup>${x}</sup> − 1`, x))} = ln${NB}${a}<br>${L(X0, fr(`(1 + ${x})<sup>${n}</sup> − 1`, x))} = ${n}`,
        legend: [`${x} = an angle in radians (in the first two)`, `${a} = a positive constant`, `${n} = any real number`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Shifting the centre.</b> The same principle works away from 0. To evaluate<br>${L(`${x}→π`, fr(SINX, `${x} − π`))},<br>substitute ${u} = ${x} − π, so ${u} → 0 and sin(${u} + π) = −${NB}sin${NB}${u}:<br>${L(`${u}→0`, fr(`−${NB}sin${NB}${u}`, u))} = −1.<br>Equivalently, the answer is cos${NB}π = −1: the numerator vanishes at π and the denominator is ${x} − π, so the limit is the derivative of the numerator at π, namely (sin${NB}${x})′|<sub>${x}=π</sub> = cos${NB}π = −1. (General fact: if ${of(f, a)} = 0 and ${f} is differentiable at ${a}, then ${L(`${x}→${a}`, fr(fx, `${x} − ${a}`))} = ${fp(a)}.)`,
      },
      {
        t: 'formula',
        kicker: 'A limit read as a derivative',
        main: `${L(`${x}→${a}`, fr(fx, `${x} − ${a}`))} = ${fp(a)}`,
        legend: [`${f} = differentiable at ${a}, with ${of(f, a)} = 0`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>On L’Hôpital’s rule.</b> At JEE you may differentiate numerator and denominator separately once a limit is genuinely in ${fr('0', '0')} or ${fr('∞', '∞')} form, and repeat while the form persists. L’Hôpital’s rule is not part of the CBSE syllabus, however, so in board answers show the standard-limit working and treat L’Hôpital as a checking device, not a replacement for L1–L6.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find ${k} so that the following is continuous at ${x} = 0:<br>${PIECE(fr(`${R1} − ${R2}`, x), `−1${NB}≤${NB}${x}${NB}<${NB}0`)}<br>${PIECE(fr(`2${x} + 1`, `${x} − 2`), `0${NB}≤${NB}${x}${NB}≤${NB}1`)}`,
        steps: [
          `<b>RHL.</b> The second piece is a rational function, continuous at 0:<br>${L(X0P, fr(`2${x} + 1`, `${x} − 2`))} = ${fr('1', '−2')} = −${HALF}.`,
          `<b>LHL.</b> Substitution gives ${fr('0', '0')}, so rationalise the numerator: multiply top and bottom by ${R1} + ${R2}:<br>${fr(`${R1} − ${R2}`, x)}<br>= ${fr(`(1 + ${I('kx')}) − (1 − ${I('kx')})`, `${x}(${R1} + ${R2})`)}<br>= ${fr(`2${k}`, `${R1} + ${R2}`)}.`,
          `Now the limit is safe to read off:<br>${L(X0M, fr(`2${k}`, `${R1} + ${R2}`))}<br>= ${fr(`2${k}`, '1 + 1')} = ${k}.`,
          `<b>Impose continuity:</b> ${k} = −${HALF}.`,
          `<b>Check.</b> With ${k} = −${HALF} and ${x} = −0.01: the numerator is √1.005 − √0.995 ≈ 0.0050, and dividing by −0.01 gives approximately −0.50, agreeing with the RHL.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find ${k} so that ${fx} = ${fr(`${ex(`3${x}`)} − 1`, `ln(1 + 2${x})`)} for ${rel(x, '≠', '0')}, ${of(f, '0')} = ${k}, is continuous at 0.`,
        steps: [
          `Direct substitution gives ${fr('0', '0')}. Split the fraction so each piece matches a standard limit:<br>${fr(`${ex(`3${x}`)} − 1`, `ln(1 + 2${x})`)}<br>= ${fr(`${ex(`3${x}`)} − 1`, `3${x}`)} · ${fr(`2${x}`, `ln(1 + 2${x})`)} · ${fr(`3${x}`, `2${x}`)}.`,
          `The first factor tends to 1 by L3, the second tends to 1 by L4, and the third is the constant ${fr('3', '2')}. Hence<br>${L(X0, fx)} = ${fr('3', '2')},${NB}${NB}so${NB}${NB}${k} = ${fr('3', '2')}.`,
          `<b>Check.</b> For ${x} = 0.001: ${ex('0.003')} − 1 ≈ 0.0030045 and ln(1.002) ≈ 0.001998; the quotient is approximately 1.5038, drifting toward 1.5.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Evaluate ${L(X0, fr(`${TANX} − ${SINX}`, X3))}.`,
        steps: [
          `Factor the numerator rather than expanding anything:<br>${TANX} − ${SINX} = ${TANX}${NB}(1 − ${COSX})<br>= ${fr(SINX, COSX)}(1 − ${COSX}).`,
          `Therefore<br>${fr(`${TANX} − ${SINX}`, X3)}<br>= ${fr(SINX, x)} · ${fr('1', COSX)} · ${fr(`1 − ${COSX}`, X2)}.`,
          `Each factor now has a known limit, by L1, continuity of cos at 0, and L2:<br>${L(X0, fr(`${TANX} − ${SINX}`, X3))}<br>= 1 · 1 · ${HALF} = ${HALF}.`,
          '<b>Why this beats L’Hôpital here.</b> Applying L’Hôpital three times to this expression produces progressively messier trigonometric quotients and two opportunities for sign slips. The factorisation route is three lines and every step is verifiable against L1 and L2.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find ${k} so that ${fx} = ${fr(`sin${NB}5${x}`, `3${x}`)} for ${rel(x, '≠', '0')}, ${of(f, '0')} = ${k}, is continuous at 0.`,
            a: `${fr(`sin${NB}5${x}`, `3${x}`)} = ${fr('5', '3')} · ${fr(`sin${NB}5${x}`, `5${x}`)} → ${fr('5', '3')}, so ${k} = ${fr('5', '3')}.`,
          },
          {
            q: `Evaluate ${L(X0, fr(`√(1${NB}+${NB}${x}) − 1`, x))}.`,
            a: `Rationalise: ${fr(x, `${x}(√(1${NB}+${NB}${x}) + 1)`)} → ${HALF} (equivalently L6 with ${n} = ${HALF}).`,
          },
          {
            q: `Evaluate ${L(`${x}→π`, fr(SINX, `${x} − π`))}.`,
            a: `Substitute ${u} = ${x} − π: ${fr(`−${NB}sin${NB}${u}`, u)} → −1.`,
          },
          {
            q: `Evaluate ${L(X0, fr(`${a}<sup>${x}</sup> − ${b}<sup>${x}</sup>`, x))} for ${a},${NB}${b}${NB}>${NB}0.`,
            a: `Split as ${fr(`${a}<sup>${x}</sup> − 1`, x)} − ${fr(`${b}<sup>${x}</sup> − 1`, x)} → ln${NB}${a} − ln${NB}${b} = ln${NB}${fr(a, b)} by L5.`,
          },
          {
            q: `Evaluate ${L(X0, fr(`1 − cos${NB}2${x}`, `${x}${NB}${SINX}`))}.`,
            a: `1 − cos${NB}2${x} = 2${NB}sin<sup>2</sup>${NB}${x},<br>so the expression is 2 · ${fr(SINX, x)} → 2.`,
          },
          {
            q: `Evaluate ${L(X0, fr(`ln(1 + 3${x})`, `${ex(`2${x}`)} − 1`))}.`,
            a: `${fr(`ln(1 + 3${x})`, `3${x}`)} · ${fr(`2${x}`, `${ex(`2${x}`)} − 1`)} · ${fr(`3${x}`, `2${x}`)}<br>→ 1 · 1 · ${fr('3', '2')} = ${fr('3', '2')}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 358–362 ────────────────
  {
    n: 'B',
    title: 'Differentiating Through Moduli: the General Rules',
    extra: true,
    kalam: 'The only possible non-differentiability points of |f| are the zeros of f.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 01’s third worked example gives you a counting rule for corners of ${abs(of(g, x))}, and Topic 01’s third pitfall warns you how to misuse it, but neither is proved, and neither tells you what happens when moduli are multiplied, nested, or raised to powers. JEE Main asks for the exact number of non-differentiability points of such expressions; JEE Advanced asks whether a specific point survives. Three lemmas settle every case.`,
      },

      { t: 'part', title: 'Lemma B.1: Away from zeros, |\u2060f\u2060| inherits smoothness' },
      {
        t: 'p',
        html: `<b>Claim.</b> If ${f} is differentiable at ${c} and ${rel(fc, '≠', '0')}, then ${abs(f)} is differentiable at ${c}, with derivative ${fp(c)} if ${rel(fc, '>', '0')} and −${fp(c)} if ${rel(fc, '<', '0')}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Suppose ${rel(fc, '>', '0')}. By continuity of ${f} at ${c} (which differentiability provides), taking ${eps} = ${fr(fc, '2')} gives a neighbourhood of ${c} in which<br>${abs(`${fx} − ${fc}`)} < ${fr(fc, '2')}<br>⟹ ${fx} > ${fr(fc, '2')} > 0.<br>Throughout that neighbourhood ${abs(f)} = ${f}, so ${abs(f)} is differentiable at ${c} with derivative ${fp(c)}. The case ${rel(fc, '<', '0')} is identical with ${abs(f)} = −${f}. ■`,
      },
      {
        t: 'p',
        html: `<b>Consequence.</b> The only possible non-differentiability points of ${abs(f)} are the zeros of ${f}. Everything else is settled without computation.`,
      },

      { t: 'part', title: 'Lemma B.2: At a zero of f, the corner test' },
      {
        t: 'p',
        html: `<b>Claim.</b> Let ${f} be differentiable at ${c} with ${fc} = 0. Then ${abs(f)} is differentiable at ${c} if and only if ${fp(c)} = 0; and when it is differentiable, ${abs(f)}′(${c}) = 0.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Compute the two one-sided derivatives of ${abs(f)} at ${c}. For the right-hand derivative, use ${abs(fc)} = 0 and ${abs(of(f, `${c} + ${h}`))} = ${abs(`${of(f, `${c} + ${h}`)} − ${fc}`)}:<br>${L(H0P, fr(`${abs(of(f, `${c} + ${h}`))} − ${abs(fc)}`, h))}<br>= ${L(H0P, abs(fr(`${of(f, `${c} + ${h}`)} − ${fc}`, h)))} = ${abs(fp(c))}.<br>For the left-hand derivative, the denominator −${h} is negative, so it pulls out a minus sign:<br>${L(H0P, fr(`${abs(of(f, `${c} − ${h}`))} − ${abs(fc)}`, `−${h}`))}<br>= −${NB}${L(H0P, abs(fr(`${of(f, `${c} − ${h}`)} − ${fc}`, h)))} = −${abs(fp(c))}.`,
      },
      {
        t: 'p',
        html: `Both one-sided limits always exist (they are magnitudes of the same number ${fp(c)}), so ${abs(f)} fails at ${c} only by corner, never by blow-up. They agree exactly when ${abs(fp(c))} = −${abs(fp(c))}, i.e. ${fp(c)} = 0, in which case the common value is 0. ■`,
      },
      {
        t: 'formula',
        kicker: 'The corner test at a zero',
        main: `${abs(f)} differentiable at ${c} ⟺ ${fp(c)} = 0`,
        legend: [`${f} = differentiable at ${c}, with ${fc} = 0`, `when it is differentiable there, ${abs(f)}′(${c}) = 0`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Corollary (proving the chapter’s counting rule).</b> The corners of ${abs(f)} are exactly the zeros of ${f} at which ${rel(fp(c), '≠', '0')}, that is, the points where ${f} crosses the axis with a nonzero slope. A zero with ${fp(c)} = 0 is not a corner, whether ${f} merely touches the axis there (e.g. ${x} = 0 for ${fx} = ${X2}, or ${x} = 2 for ${fx} = (${x} − 2)<sup>2</sup>) or crosses it flat (${x} = 0 for ${fx} = ${X3}): ${abs(f)} arrives flat and Lemma B.2 certifies differentiability. (For ${fx} = ${X2} − 4 the zeros are ${x} = ±2, where ${fp('±2')} = ±4${NB}≠${NB}0, so both are corners of ${abs(`${X2} − 4`)}; its vertex ${x} = 0 is not a zero of ${f} at all.)`,
      },

      { t: 'part', title: 'Lemma B.3: Powers of the modulus: the smoothness ladder' },
      {
        t: 'p',
        html: `Consider ${sb(g, n)}(${x}) = ${abs(x)}<sup>${n}</sup> at ${x} = 0.<br>• ${n} = 1: ${sb(g, '1')} = ${abs(x)}, not differentiable at 0 (LHD −1, RHD +1).<br>• ${n} = 2: ${sb(g, '2')} = ${X2}, a polynomial, infinitely differentiable.<br>• ${n} = 3: for ${rel(h, '≠', '0')},<br>${fr(`${sb(g, '3')}(${h}) − ${sb(g, '3')}(0)`, h)} = ${fr(`${abs(h)}<sup>3</sup>`, h)} = ${h}${abs(h)} ⟶ 0,<br>so ${g}′<sub>3</sub>(0) = 0, and indeed ${g}′<sub>3</sub>(${x}) = 3${x}${abs(x)} for all ${x}. Differentiate once more at 0:<br>${g}″<sub>3</sub>(0) = ${L(H0, fr(`${g}′<sub>3</sub>(${h}) − ${g}′<sub>3</sub>(0)`, h))}<br>= ${L(H0, fr(`3${h}${abs(h)}`, h))} = ${L(H0, `3${abs(h)}`)} = 0.`,
      },
      {
        t: 'p',
        html: `But ${g}″<sub>3</sub>(${x}) = 6${abs(x)} for every ${x}, and 6${abs(x)} has a corner at 0 (its left and right derivatives there are −6 and +6), so ${g}‴<sub>3</sub>(0) does not exist. So ${abs(x)}<sup>3</sup> is twice differentiable at the origin but not three times.<br><br>In general, for odd ${n}, ${abs(x)}<sup>${n}</sup> is differentiable exactly ${n} − 1 times at the origin: each differentiation strips one power of ${abs(x)}, and the process halts when a lone ${abs(x)} remains. (For even ${n}, ${abs(x)}<sup>${n}</sup> = ${x}<sup>${n}</sup> is a polynomial, hence infinitely differentiable.)`,
      },

      { t: 'part', title: 'Companion rule: f(|x|) at the origin' },
      {
        t: 'p',
        html: `If ${f} is differentiable at 0, then ${of(f, abs(x))} is differentiable at 0 if and only if ${fp('0')} = 0. Indeed,<br>${L(H0P, fr(`${of(f, h)} − ${of(f, '0')}`, h))} = ${fp('0')},<br>${L(H0P, fr(`${of(f, h)} − ${of(f, '0')}`, `−${h}`))} = −${fp('0')},<br>and these agree exactly when ${fp('0')} = 0. Geometrically: reflecting the graph of ${f} into an even function creates a corner at the fold unless the graph arrives flat.`,
      },
      {
        t: 'formula',
        kicker: 'f(|x|) at the origin',
        main: `${of(f, abs(x))} differentiable at 0 ⟺ ${fp('0')} = 0`,
        legend: [`${f} = differentiable at 0`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Examine the differentiability of ${fx} = ${abs(x)}(${x} − 1) at ${x} = 0 and ${x} = 1.`,
        steps: [
          `<b>At ${x} = 1:</b> the factor ${abs(x)} is differentiable at 1 with value 1${NB}≠${NB}0 (Lemma B.1), and ${x} − 1 is a polynomial, so the product is differentiable at 1. Nothing to compute.`,
          `<b>At ${x} = 0:</b> Lemma B.1 does not apply since ${abs('0')} = 0. Work from the piecewise form. For ${rel(h, '>', '0')}:<br>${of(f, h)} = ${h}(${h} − 1) = ${sq(h)} − ${h},<br>${of(f, `−${h}`)} = ${abs(`−${h}`)}(−${h} − 1) = ${h}(−${h} − 1) = −${h} − ${sq(h)}.`,
          `Then<br>RHD = ${L(H0P, fr(`${sq(h)} − ${h}`, h))} = ${L(H0P, `(${h} − 1)`)} = −1,<br>LHD = ${L(H0P, fr(`−${h} − ${sq(h)}`, `−${h}`))} = ${L(H0P, `(1 + ${h})`)} = 1.`,
          `Since −1${NB}≠${NB}1, ${f} is not differentiable at 0.`,
          `<b>Check.</b> The modulus contributes a corner candidate only at 0; multiplying by the smooth, non-vanishing factor (${x} − 1) cannot remove it (near 0 the factor is close to −1, so it rescales the V but does not flatten it), consistent with the computation.`,
        ],
        ans: `The sole point of non-differentiability is ${x} = 0.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find all points where ${fx} = ${abs(`${abs(x)} − 1`)} fails to be differentiable.`,
        steps: [
          'Peel the nesting from the inside out, applying Lemma B.1 then B.2 at each layer.',
          `<b>Inner layer</b> ${of(ph, x)} = ${abs(x)} − 1: differentiable everywhere except ${x} = 0.`,
          `<b>Outer layer</b> ${f} = ${abs(ph)}: by Lemma B.1, candidates are only the zeros of ${ph}, namely ${abs(x)} = 1, i.e. ${x} = ±1. At those points ${ph}′(${x}) = ±1${NB}≠${NB}0, so by Lemma B.2 both are genuine corners.`,
          `<b>What about ${x} = 0, the inner corner?</b> Here ${of(ph, '0')} = −1${NB}≠${NB}0, so by continuity of ${ph} (the sign argument in the proof of Lemma B.1, which needs only continuity) the outer modulus is locally inert: for ${rel(abs(x), '<', '1')} we have ${rel(ph, '<', '0')}, hence<br>${fx} = −${of(ph, x)} = 1 − ${abs(x)},<br>which still has the inner corner at 0. Nesting does not heal a corner sitting away from the outer zeros.`,
          `<b>Full piecewise confirmation.</b><br>${PIECE(`${x} − 1`, `${x}${NB}≥${NB}1`)}<br>${PIECE(`1 − ${x}`, `0${NB}≤${NB}${x}${NB}<${NB}1`)}<br>${PIECE(`1 + ${x}`, `−1${NB}<${NB}${x}${NB}<${NB}0`)}<br>${PIECE(`−${x} − 1`, `${x}${NB}≤${NB}−1`)}`,
          `The slopes across the joins, reading left to right, are −1 → 1 at ${x} = −1, 1 → −1 at ${x} = 0, and −1 → 1 at ${x} = 1: three corners.`,
        ],
        ans: `${f} is non-differentiable at exactly ${x} = −1, 0, 1.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed',
        q: `How many points of non-differentiability does ${fx} = ${abs(SINX)} + ${abs(COSX)} have in ${ZPI}?`,
        steps: [
          `Candidates are the zeros of sin and cos in the interval: ${P2}, π, ${fr('3π', '2')}. At each of these, exactly one summand has a zero (with derivative ±1${NB}≠${NB}0, so a corner by Lemma B.2) while the other summand is smooth and non-zero there (Lemma B.1). A corner plus a smooth term cannot cancel, so all three survive.`,
        ],
        ans: `3 points: ${x} = ${P2}, π, ${fr('3π', '2')}.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Show that ${fx} = ${x}${abs(x)} is differentiable at 0 and find ${fp('0')}.`,
            a: `For ${rel(h, '>', '0')}: ${fr(`${of(f, h)} − ${of(f, '0')}`, h)} = ${fr(sq(h), h)} = ${h} → 0 and ${fr(`${of(f, `−${h}`)} − ${of(f, '0')}`, `−${h}`)} = ${fr(`−${sq(h)}`, `−${h}`)} = ${h} → 0. Differentiable with ${fp('0')} = 0: the factor ${x} flattens the V (indeed ${x}${abs(x)} is a third of the derivative 3${x}${abs(x)} of ${abs(x)}<sup>3</sup> in Lemma B.3).`,
          },
          {
            q: `Find all points of non-differentiability of ${abs(`${X2} − 4`)}.`,
            a: `Only ${x} = ±2: the zeros of the inside, where its derivative ±4${NB}≠${NB}0. The vertex ${x} = 0 is not included (inside stays negative there).`,
          },
          {
            q: `Find all points of non-differentiability of ${abs(`${x} − 1`)} + ${abs(`${x} − 2`)} + ${abs(`${x} − 3`)}.`,
            a: `Exactly ${x} = 1, 2, 3: at each join only one summand kinks, so no cancellation is possible.`,
          },
          {
            q: `Is ${of(g, x)} = ${abs(x)}<sup>3</sup> twice differentiable at 0? Is it three times differentiable?`,
            a: `Twice differentiable, with ${g}″(0) = 0 (shown in Lemma B.3); not three times differentiable, since ${g}″(${x}) = 6${abs(x)} has a corner at 0.`,
          },
          {
            q: `Show that ${fx} = (${SINX})${NB}${abs(SINX)} is differentiable at every real ${x}.`,
            a: `Near any zero of ${SINX}, the function equals sin<sup>2</sup>${NB}${x} on one side and −${NB}sin<sup>2</sup>${NB}${x} on the other; both vanish at the zero with derivative 0 there, so the one-sided derivatives agree; elsewhere it is a product of smooth functions. Differentiable everywhere.`,
          },
          {
            q: `Is ${of(h, x)} = cos${NB}${abs(x)} differentiable at 0?`,
            a: `Yes. cos${NB}${abs(x)} = ${COSX} for every real ${x}, since cosine is even: the fold is invisible. A student who applies the companion rule blindly answers “no” and is wrong; the rule needs ${rel(fp('0'), '≠', '0')} to predict a corner, and here ${fp('0')} = −${NB}sin${NB}0 = 0.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 362–365 ────────────────
  {
    n: 'C',
    title: 'Functional Equations: Continuity Propagated from a Single Point',
    extra: true,
    kalam: 'Two master theorems cover nearly every instance.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Functional equations are a recurring JEE Advanced genre (Topic 01’s Exam relevance note flags them) ${ESTIMATE}. The genre is rigidly formulaic: a function satisfying an identity for all inputs, known to be continuous at one point, and you must extract its explicit form. Two master theorems cover nearly every instance, and both are proved with the chapter’s own tools (plus, in Step 6 of Theorem C.1, a limit along a sequence).`,
      },

      { t: 'part', title: 'Theorem C.1: Additive functions (Cauchy’s equation)' },
      {
        t: 'p',
        html: `<b>Claim.</b> Let ${f} : ℝ → ℝ satisfy<br>${of(f, `${x} + ${y}`)} = ${fx} + ${of(f, y)} for all real ${x},${NB}${y},<br>and suppose ${f} is continuous at even one point ${sb(x, '0')}. Then ${f} is continuous on all of ℝ, and<br>${fx} = ${I('cx')} where ${c} = ${of(f, '1')}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b><br><b>Step 1: the origin.</b> Put ${x} = ${y} = 0: ${of(f, '0')} = ${of(f, '0')} + ${of(f, '0')}, so ${of(f, '0')} = 0.`,
      },
      {
        t: 'p',
        html: `<b>Step 2: continuity at 0, harvested from ${sb(x, '0')}.</b> Since ${f} is continuous at ${sb(x, '0')},<br>${L(H0, of(f, `${sb(x, '0')} + ${h}`))} = ${of(f, sb(x, '0'))}<br>⟹ ${L(H0, `[${of(f, `${sb(x, '0')} + ${h}`)} − ${of(f, sb(x, '0'))}]`)} = 0.<br>By the functional equation the bracket equals ${of(f, h)}, so ${L(H0, of(f, h))} = 0 = ${of(f, '0')}: continuity at 0.`,
      },
      {
        t: 'p',
        html: `<b>Step 3: continuity everywhere.</b> For any fixed ${x},<br>${L(H0, of(f, `${x} + ${h}`))} = ${L(H0, `[${fx} + ${of(f, h)}]`)}<br>= ${fx} + 0 = ${fx}.`,
      },
      {
        t: 'p',
        html: `<b>Step 4: integers.</b> By induction, ${of(f, n)} = ${n}${of(f, '1')} for positive integers ${n}. Also ${of(f, n)} + ${of(f, `−${n}`)} = ${of(f, '0')} = 0, so ${of(f, `−${n}`)} = −${of(f, n)}.`,
      },
      {
        t: 'p',
        html: `<b>Step 5: rationals.</b> Writing 1 = ${n} · ${fr('1', n)} and applying Step 4 backwards: ${of(f, '1')} = ${n}${NB}${of(f, fr('1', n))}, so ${of(f, fr('1', n))} = ${fr(of(f, '1'), n)}. Hence for any rational ${fr(m, n)},<br>${of(f, fr(m, n))} = ${m}${NB}${of(f, fr('1', n))} = ${fr(m, n)}${of(f, '1')}.`,
      },
      {
        t: 'p',
        html: `<b>Step 6: reals, by continuity.</b> Take any real ${x} and any sequence of rationals ${sb(q, k)} → ${x}. By Step 5, ${of(f, sb(q, k))} = ${c}${sb(q, k)} → ${I('cx')}; by Step 3, ${of(f, sb(q, k))} → ${fx}. Uniqueness of limits gives ${fx} = ${I('cx')}. ■`,
      },
      {
        t: 'formula',
        kicker: 'Cauchy’s additive equation',
        main: `${of(f, `${x} + ${y}`)} = ${fx} + ${of(f, y)}<br>⟹ ${fx} = ${I('cx')}`,
        legend: [`${f} = continuous at one point at least`, `${c} = ${of(f, '1')}`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Remark.</b> Without the continuity hypothesis the conclusion genuinely fails: pathological non-linear additive functions exist (they are wildly discontinuous everywhere). The single-point continuity assumption is doing all the work; examiners know it and will strip it to build traps.',
      },

      { t: 'part', title: 'Theorem C.2: Multiplicative functions (the exponential equation)' },
      {
        t: 'p',
        html: `<b>Claim.</b> Let ${f} : ℝ → ℝ satisfy<br>${of(f, `${x} + ${y}`)} = ${fx}${NB}${of(f, y)} for all real ${x},${NB}${y},<br>with ${f} continuous at some point and ${f} not identically zero. Then ${of(f, '0')} = 1, ${rel(fx, '>', '0')} for all ${x}, and<br>${fx} = ${a}<sup>${x}</sup> where ${a} = ${of(f, '1')} > 0.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b><br><b>Step 1: the origin.</b> Put ${y} = 0: ${fx} = ${fx}${of(f, '0')} for all ${x}. Since ${f} is not identically zero, some ${x} has ${rel(fx, '≠', '0')}, forcing ${of(f, '0')} = 1.`,
      },
      {
        t: 'p',
        html: `<b>Step 2: positivity.</b> First, ${fx} = ${of(f, `${fr(x, '2')} + ${fr(x, '2')}`)} = ${of(f, fr(x, '2'))}<sup>2</sup> ≥ 0. Second, ${fx}${of(f, `−${x}`)} = ${of(f, '0')} = 1, so ${rel(fx, '≠', '0')} for every ${x}. Together: ${rel(fx, '>', '0')} everywhere.`,
      },
      {
        t: 'p',
        html: `<b>Step 3: reduce to Cauchy.</b> Define ${of(g, x)} = ln${NB}${fx}. Since ${f} is continuous (at one point, hence everywhere, by the same propagation as Steps 2–3 of Theorem C.1: ${of(f, `${sb(x, '0')} + ${h}`)} = ${of(f, sb(x, '0'))}${of(f, h)} and ${rel(of(f, sb(x, '0')), '≠', '0')} force ${of(f, h)} → 1 = ${of(f, '0')}, and then ${of(f, `${x} + ${h}`)} = ${fx}${of(f, h)} → ${fx} at every ${x}) and positive, ${g} is well defined and continuous, and<br>${of(g, `${x} + ${y}`)} = ln[${fx}${of(f, y)}]<br>= ln${NB}${fx} + ln${NB}${of(f, y)} = ${of(g, x)} + ${of(g, y)}.<br>By Theorem C.1, ${of(g, x)} = ${I('cx')} with ${c} = ${of(g, '1')} = ln${NB}${of(f, '1')}.`,
      },
      {
        t: 'p',
        html: `<b>Step 4: conclude.</b> ${fx} = ${ex(of(g, x))} = ${ex(I('cx'))} = (${ex(c)})<sup>${x}</sup> = ${a}<sup>${x}</sup> with ${a} = ${of(f, '1')}. ■`,
      },
      {
        t: 'formula',
        kicker: 'The exponential equation',
        main: `${of(f, `${x} + ${y}`)} = ${fx}${NB}${of(f, y)}<br>⟹ ${fx} = ${a}<sup>${x}</sup>`,
        legend: [`${f} = continuous at one point at least, not identically zero`, `${a} = ${of(f, '1')} > 0`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Differentiable shortcut.</b> If additionally ${f} is differentiable at 0, then for every ${x} we have ${of(f, `${x} + ${h}`)} − ${fx} = ${fx}${NB}[${of(f, h)} − ${of(f, '0')}]; divide by ${h} and let ${h} → 0 (this also shows ${f} is differentiable at every ${x}):<br>${fp(x)} = ${fx}${NB}${fp('0')}.<br>Solving: ${D}${NB}ln${NB}${fx} = ${fp('0')}, so ln${NB}${fx} = ${fp('0')}${NB}${x} + constant, and the constant is forced by ${of(f, '0')} = 1 to be 0. Same answer, one line less.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Suppose ${of(f, `${x} + ${y}`)} = ${fx} + ${of(f, y)} for all reals, ${f} is continuous at 0, and ${of(f, '2')} = 10. Find ${fx}, ${of(f, '−5')}, and ${L(H0, fr(`${of(f, `3 + ${h}`)} − ${of(f, '3')}`, h))}.`,
        steps: [
          `By Theorem C.1, ${fx} = ${I('cx')}. Now ${of(f, '2')} = 2${c} = 10, so ${c} = 5 and<br>${fx} = 5${x},${NB}${NB}${of(f, '−5')} = −25.`,
          `For the limit, Theorem C.1 gives continuity everywhere, so the difference quotient is the honest derivative of the line 5${x}:<br>${L(H0, fr(`${of(f, `3 + ${h}`)} − ${of(f, '3')}`, h))} = ${fp('3')} = 5.`,
          'Notice the logic: the functional equation plus one continuity seed produced an explicit function, after which calculus questions become trivial.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${of(f, `${x} + ${y}`)} = ${fx}${of(f, y)} for all reals, with ${f} differentiable at 0, ${fp('0')} = ${k}${NB}≠${NB}0, and ${of(f, '1')} = 2. Show that ${fx} = 2<sup>${x}</sup> and that ${fp(x)} = ${fx}${NB}${SLN2}.`,
        steps: [
          `First, ${f} is not identically zero (it takes the value 2), so by Theorem C.2, ${of(f, '0')} = 1 and ${rel(fx, '>', '0')}. Fix ${x} and use the identity<br>${of(f, `${x} + ${h}`)} = ${fx}${of(f, h)}<br>inside the difference quotient, letting ${h} → 0:<br>${fp(x)} = ${L(H0, fr(`${of(f, `${x} + ${h}`)} − ${fx}`, h))}<br>= ${fx}${NB}${L(H0, fr(`${of(f, h)} − ${of(f, '0')}`, h))}<br>= ${fx}${NB}${fp('0')} = ${k}${NB}${fx}.`,
          `So ${D}[ln${NB}${fx}] = ${k}, giving ln${NB}${fx} = ${I('kx')} + ${C}; substituting ${x} = 0 and ${of(f, '0')} = 1 forces ${C} = 0. Hence<br>${fx} = ${ex(I('kx'))}.`,
          `Finally ${of(f, '1')} = ${ex(k)} = 2, so ${k} = ${SLN2}, and<br>${fx} = ${ex(`${x}${NB}ln${NB}2`)} = 2<sup>${x}</sup>,<br>${fp(x)} = 2<sup>${x}</sup>${NB}${SLN2} = ${fx}${NB}${SLN2}.`,
          `<b>Check.</b> 2<sup>${x}+${y}</sup> = 2<sup>${x}</sup>2<sup>${y}</sup> verifies the original identity, and ${fp('0')} = ${SLN2} = ${k} verifies the data.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${f} : (0,${NB}∞) → ℝ satisfy ${of(f, I('xy'))} = ${fx} + ${of(f, y)} for all ${x},${NB}${y}${NB}>${NB}0, with ${f} continuous at 1 and ${of(f, 'e')} = 1. Find ${f}.`,
        steps: [
          `Convert to the additive equation by reparametrising. Define ${of(g, t)} = ${of(f, ex(t))} for ${t} ∈ ℝ. Then<br>${of(g, `${s} + ${t}`)} = ${of(f, ex(`${s}+${t}`))} = ${of(f, `${ex(s)}${ex(t)}`)}<br>= ${of(f, ex(s))} + ${of(f, ex(t))} = ${of(g, s)} + ${of(g, t)},<br>and ${g} is continuous wherever ${f} is, in particular at ${t} = 0 (corresponding to ${x} = 1). By Theorem C.1, ${of(g, t)} = ${I('ct')} with ${c} = ${of(g, '1')} = ${of(f, 'e')} = 1. Therefore<br>${fx} = ${of(g, `ln${NB}${x}`)} = ln${NB}${x}.`,
          `<b>Check.</b> ln(${I('xy')}) = ln${NB}${x} + ln${NB}${y} and ln${NB}e = 1: both conditions hold.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `${f} is additive and continuous, with ${of(f, '1')} = 7. Find ${of(f, '2024')} and ${of(f, '−3')}.`,
            a: `${fx} = 7${x}; ${of(f, '2024')} = 14168; ${of(f, '−3')} = −21.`,
          },
          {
            q: `${f} is additive and continuous, and ${fp('1')} = 4. Find ${fx}.`,
            a: `For additive ${f}, ${fp(x)} = ${L(H0, fr(of(f, h), h))} is independent of ${x}, so ${f}′ ≡ ${c} with ${c} = ${fp('1')} = 4; integrating and using ${of(f, '0')} = 0: ${fx} = 4${x}.`,
          },
          {
            q: `${of(f, `${x} + ${y}`)} = ${fx}${of(f, y)}, ${f} is continuous, ${rel(fx, '>', '0')} for all ${x}, and ${of(f, '2')} = 9. Find ${fx} and ${of(f, HALF)}.`,
            a: `${of(f, '2')} = ${of(f, '1')}<sup>2</sup> gives ${of(f, '1')} = 3 (positive branch); by Theorem C.2, ${fx} = 3<sup>${x}</sup>,<br>and ${of(f, HALF)} = √3.`,
          },
          {
            q: `${of(f, I('xy'))} = ${fx}${of(f, y)} for all ${x},${NB}${y}${NB}>${NB}0, ${f} continuous at 1, and ${of(f, '4')} = 16. Find ${fx}.`,
            a: `First ${rel(f, '>', '0')}: ${of(f, '4')} = ${of(f, '4')}${of(f, '1')} gives ${of(f, '1')} = 1, so ${fx}${NB}${of(f, fr('1', x))} = 1 and ${fx} = ${of(f, `√${x}`)}<sup>2</sup> > 0. Then set ${of(g, t)} = ln${NB}${of(f, ex(t))}: additive and continuous, so ${of(g, t)} = ${I('ct')}; hence ${fx} = ${x}<sup>${c}</sup>, and 4<sup>${c}</sup> = 16 gives ${c} = 2, i.e. ${fx} = ${X2}.`,
          },
          {
            q: `True or false: an additive function that is continuous at even one point must be of the form ${fx} = ${I('cx')}.`,
            a: `True: by Theorem C.1 (Steps 2–3), continuity at even one point propagates to all of ℝ, and then ${fx} = ${I('cx')}. (In particular, no additive function is continuous at exactly one point: it is continuous either nowhere or everywhere.)`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 365–369 ────────────────
  {
    n: 'D',
    title: 'Cauchy’s Mean Value Theorem and the Arithmetic of Roots',
    extra: true,
    kalam: 'Rolle’s and Lagrange’s theorems are both special cases of a single result.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Rolle’s and Lagrange’s theorems are both special cases of a single result. Cauchy’s Mean Value Theorem (CMVT) is not named in the JEE Advanced syllabus (Rolle’s and Lagrange’s are), but it is a standard tool at JEE Advanced level ${ESTIMATE}: it appears both as a direct verification question and as the engine behind inequalities and root-counting arguments that Lagrange cannot reach. Alongside it, this additional topic systematises the root-counting consequence of Rolle that Topic 07 uses only in passing (its fourth MCQ and a pro-tip).`,
      },

      { t: 'part', title: 'Cauchy’s Mean Value Theorem' },
      {
        t: 'p',
        html: `<b>Statement.</b> Let ${f} and ${g} be continuous on ${iv(a, b, '[', ']')} and differentiable on ${iv(a, b)}, with ${rel(gp(x), '≠', '0')} for all ${x} ∈ ${iv(a, b)}. Then there exists ${c} ∈ ${iv(a, b)} such that<br>${fr(fp(c), gp(c))} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${of(g, b)} − ${of(g, a)}`)}.`,
      },
      {
        t: 'formula',
        kicker: 'Cauchy’s Mean Value Theorem',
        main: `${fr(fp(c), gp(c))} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${of(g, b)} − ${of(g, a)}`)}`,
        legend: [`${f}, ${g} = continuous on ${iv(a, b, '[', ']')}, differentiable on ${iv(a, b)}`, `${gp(x)} ≠ 0 for every ${x} in ${iv(a, b)}`, `${c} = some point of ${iv(a, b)}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Why the denominator is safe.</b> If ${of(g, b)} = ${of(g, a)}, Rolle’s theorem applied to ${g} would give some point with ${g}′ = 0, contradicting the hypothesis. So ${of(g, b)} − ${of(g, a)}${NB}≠${NB}0 and the fraction is defined.`,
      },
      {
        t: 'p',
        html: `<b>Derivation from Rolle.</b> Define the auxiliary function<br>${of(F, x)} = ${fx} − ${lam}${NB}${of(g, x)},<br>${lam} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${of(g, b)} − ${of(g, a)}`)}.<br>${F} is continuous on ${iv(a, b, '[', ']')} and differentiable on ${iv(a, b)}, being a combination of such functions. At the endpoints:<br>${of(F, b)} − ${of(F, a)}<br>= [${of(f, b)} − ${of(f, a)}] − ${lam}[${of(g, b)} − ${of(g, a)}] = 0<br>by the choice of ${lam}, so ${of(F, a)} = ${of(F, b)}. All three Rolle hypotheses hold, so there exists ${c} ∈ ${iv(a, b)} with<br>${F}′(${c}) = ${fp(c)} − ${lam}${NB}${gp(c)} = 0.<br>Since ${rel(gp(c), '≠', '0')}, divide:<br>${fr(fp(c), gp(c))} = ${lam} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${of(g, b)} − ${of(g, a)}`)}. ■`,
      },
      {
        t: 'p',
        html: `<b>Recovering Lagrange.</b> Take ${of(g, x)} = ${x}: then ${gp(c)} = 1 and the conclusion reads ${fp(c)} = ${fr(`${of(f, b)} − ${of(f, a)}`, `${b} − ${a}`)}. Lagrange is CMVT with the simplest possible companion: one more reason to learn the general form.`,
      },

      { t: 'part', title: 'The Rolle cascade: counting roots' },
      {
        t: 'p',
        html: `<b>Lemma.</b> If ${f} is continuous on ${iv(p, q, '[', ']')}, differentiable on ${iv(p, q)}, and ${of(f, p)} = ${of(f, q)} = 0, then ${f}′ has at least one zero strictly between ${p} and ${q}.`,
      },
      {
        t: 'p',
        html: `This is Rolle restated, but its systematic use is a counting machine:<br>• Two roots of ${f} force a root of ${f}′ between them.<br>• Consequently, if ${f}′ has <b>no</b> zeros in an interval, ${f} has <b>at most one</b> root there (two roots would manufacture a zero of ${f}′).<br>• For a polynomial ${p} of degree ${n} with ${n} distinct real roots, ${p}′ has at least ${n} − 1 distinct real roots, one in each gap, and being of degree ${n} − 1, exactly one per gap.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Verify CMVT for ${fx} = ${X2} and ${of(g, x)} = ${X3} on ${iv('1', '2', '[', ']')}, and find ${c}.`,
        steps: [
          `Hypotheses: polynomials are continuous and differentiable everywhere; ${gp(x)} = 3${X2}${NB}≠${NB}0 on ${iv('1', '2')}. Compute both sides:<br>${fr(`${of(f, '2')} − ${of(f, '1')}`, `${of(g, '2')} − ${of(g, '1')}`)} = ${fr('4 − 1', '8 − 1')} = ${fr('3', '7')},<br>${fr(fp(c), gp(c))} = ${fr(`2${c}`, `3${sq(c)}`)} = ${fr('2', `3${c}`)}.`,
          `Set equal and solve:<br>${fr('2', `3${c}`)} = ${fr('3', '7')} ⟹ 14 = 9${c} ⟹ ${c} = ${fr('14', '9')}.`,
          `Since ${fr('14', '9')} ≈ 1.56 lies strictly inside ${iv('1', '2')}, CMVT is verified.`,
          `<b>Check.</b> 2 ÷ (3 · ${fr('14', '9')}) = 2 ÷ ${fr('14', '3')} = ${fr('6', '14')} = ${fr('3', '7')}. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Suppose ${f} and ${g} are continuous on [0,${NB}∞), differentiable on (0,${NB}∞), with ${of(f, '0')} = ${of(g, '0')} and ${fp(x)} > ${gp(x)} for all ${rel(x, '>', '0')}. Prove that ${fx} > ${of(g, x)} for all ${rel(x, '>', '0')}, and deduce that ${ex(x)} > 1 + ${x} for ${rel(x, '>', '0')}.`,
        steps: [
          `Let ${h} = ${f} − ${g}. Then ${h} is continuous on ${iv('0', x, '[', ']')} for any ${rel(x, '>', '0')}, differentiable on ${iv('0', x)}, and ${of(h, '0')} = ${of(f, '0')} − ${of(g, '0')} = 0. Lagrange’s MVT on ${iv('0', x, '[', ']')} gives some ${c} ∈ ${iv('0', x)} with<br>${of(h, x)} = ${of(h, x)} − ${of(h, '0')} = ${h}′(${c})${NB}(${x} − 0)<br>= [${fp(c)} − ${gp(c)}]${NB}${x} > 0,<br>since both factors are positive. Hence ${fx} > ${of(g, x)} for every ${rel(x, '>', '0')}. ■`,
          `<b>Deduction.</b> Take ${fx} = ${ex(x)} and ${of(g, x)} = 1 + ${x}. Then ${of(f, '0')} = ${of(g, '0')} = 1 and ${fp(x)} = ${ex(x)} > 1 = ${gp(x)} for ${rel(x, '>', '0')}. The theorem immediately gives ${ex(x)} > 1 + ${x} for all ${rel(x, '>', '0')}: no series, no graphs.`,
          '<b>Remark.</b> This “compare the derivatives, compare the functions” pattern is the standard rigorous weapon for inequality questions at JEE Advanced, and it is the same idea the chapter uses in Topic 07’s fourth worked example to prove a logarithmic inequality.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `<b>(a)</b> The polynomial ${of(p, x)} = (${x} − 1)(${x} − 2)(${x} − 3)(${x} − 4) has four distinct real roots. Show that ${p}′ has exactly one real root in each of the intervals ${iv('1', '2')}, ${iv('2', '3')}, ${iv('3', '4')}.<br><b>(b)</b> Show that the equation 2${X3} − 3${X2} + 6${x} + 6 = 0 has exactly one real root.`,
        steps: [
          `<b>(a)</b> ${p}′ is a cubic, so it has at most three real roots. Applying Rolle to ${p} on each of the three gaps ${iv('1', '2', '[', ']')}, ${iv('2', '3', '[', ']')}, ${iv('3', '4', '[', ']')} (where ${p} vanishes at both ends of each), ${p}′ has at least one root in each open gap: at least three in total. At most three meets at least three: exactly one per gap. ■`,
          `<b>(b)</b> Let ${of(q, x)} = 2${X3} − 3${X2} + 6${x} + 6. Its derivative is<br>${q}′(${x}) = 6${X2} − 6${x} + 6 = 6(${X2} − ${x} + 1),<br>whose discriminant is (−1)<sup>2</sup> − 4 = −3 < 0. So ${q}′(${x}) > 0 for all real ${x}: ${q} is strictly increasing and can cross the axis at most once (two roots would force a zero of ${q}′ by Rolle). For existence, evaluate:<br>${of(q, '−1')} = −2 − 3 − 6 + 6 = −5 < 0,<br>${of(q, '0')} = 6 > 0.`,
          `By the intermediate value theorem (valid since ${q} is continuous), a root exists in ${iv('−1', '0')}. Combined with uniqueness: <b>exactly one real root</b>. ■`,
          '<b>The template.</b> Uniqueness comes from the sign of the derivative (via Rolle); existence comes from two opposite-signed samples (via continuity). Keep the two jobs separate in your answer: students who merge them usually prove neither.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Verify CMVT for ${fx} = ${SINX}, ${of(g, x)} = ${COSX} on ${iv('0', P2, '[', ']')}, and find ${c}.`,
            a: `[${of(f, P2)} − ${of(f, '0')}] ÷ [${of(g, P2)} − ${of(g, '0')}] = ${fr('1 − 0', '0 − 1')} = −1; and ${fr(fp(c), gp(c))} = ${fr(`cos${NB}${c}`, `−${NB}sin${NB}${c}`)} = −${NB}cot${NB}${c}. Setting −${NB}cot${NB}${c} = −1 gives ${c} = ${fr('π', '4')} ∈ ${iv('0', P2)}. Verified.`,
          },
          {
            q: `Using Lagrange’s MVT on ${of(f, t)} = ln(1 + ${t}) over ${iv('0', x, '[', ']')}, prove that ln(1 + ${x}) > ${fr(x, `1 + ${x}`)} for ${rel(x, '>', '0')}.`,
            a: `MVT gives ${c} ∈ ${iv('0', x)} with ${fr(`ln(1 + ${x})`, x)} = ${fr('1', `1 + ${c}`)}. Since 0 < ${c} < ${x}, reciprocating gives ${fr('1', `1 + ${c}`)} > ${fr('1', `1 + ${x}`)}, hence ln(1 + ${x}) > ${fr(x, `1 + ${x}`)}.`,
          },
          {
            q: `Show that ${X3} + ${x} − 1 = 0 has exactly one real root.`,
            a: `Let ${of(q, x)} = ${X3} + ${x} − 1. Then ${q}′(${x}) = 3${X2} + 1 > 0 always, so ${q} has at most one root; ${of(q, '0')} = −1 < 0 < ${of(q, '1')} = 1 gives existence in ${iv('0', '1')}. Exactly one.`,
          },
          {
            q: `A polynomial ${p} of degree 5 has five distinct real roots. What is the minimum number of distinct real roots of ${p}″, and where do they lie?`,
            a: `At least 3 distinct real roots: Rolle applied to ${p} gives ${p}′ at least 4 distinct roots (one per gap), and Rolle applied to ${p}′ between consecutive roots of ${p}′ gives ${p}″ at least 3, each lying between two roots of ${p}′.`,
          },
          {
            q: `If ${f} is continuous on ${iv(a, b, '[', ']')} and ${fp(x)} > 0 on ${iv(a, b)}, show ${f} has at most one zero in ${iv(a, b, '[', ']')}.`,
            a: `Contrapositive of Rolle: two distinct zeros ${p} < ${q} in ${iv(a, b, '[', ']')} would force some ${c} ∈ ${iv(p, q)} with ${fp(c)} = 0, contradicting ${f}′ > 0.`,
          },
          {
            q: `Verify CMVT for ${fx} = ${x}, ${of(g, x)} = ${X2} on ${iv('0', '1', '[', ']')}, and find ${c}.`,
            a: `${fr(`${of(f, '1')} − ${of(f, '0')}`, `${of(g, '1')} − ${of(g, '0')}`)} = ${fr('1', '1')} = 1; ${fr(fp(c), gp(c))} = ${fr('1', `2${c}`)} = 1 gives ${c} = ${HALF} ∈ ${iv('0', '1')}. Verified.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 369–371 ────────────────
  {
    n: 'E',
    title: 'Greatest Integer Compositions: Counting Discontinuities Correctly',
    extra: true,
    kalam: 'Touching an integer from above is harmless; touching from below, or crossing, is fatal.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter notes that ${fl(x)} “jumps at every integer.” But JEE Main’s actual question is almost never about ${fl(x)} itself ${ESTIMATE}; it is about ${fl(of(g, x))} for a continuous ${g}, and the naive instruction “count where ${g} hits an integer” is wrong: sometimes ${g} hitting an integer causes no jump at all. This additional topic gives the correct criterion, with the counterexample that punishes the naive version.`,
      },

      { t: 'part', title: 'The criterion' },
      {
        t: 'p',
        html: `Let ${g} be continuous and ${fx} = ${fl(of(g, x))}. Fix a point ${c} and write ${m} = ${fl(of(g, c))}.`,
      },
      {
        t: 'p',
        html: `<b>Case 1: ${of(g, c)} is not an integer.</b> Then ${m} < ${of(g, c)} < ${m} + 1, and by continuity of ${g} there is a neighbourhood of ${c} where ${g} stays inside ${iv(m, `${m} + 1`)}. There ${fl(of(g, x))} = ${m} constantly, so ${f} is continuous at ${c}.`,
      },
      {
        t: 'p',
        html: `<b>Case 2: ${of(g, c)} = ${m}, an integer.</b> Two sub-cases, and the asymmetry is the whole game:<br>• If every punctured neighbourhood of ${c} contains points with ${rel(of(g, x), '<', m)}, then along those points ${fl(of(g, x))} ≤ ${m} − 1 while ${of(f, c)} = ${m}: ${f} is <b>discontinuous</b> at ${c}.<br>• If ${rel(of(g, x), '≥', m)} throughout some neighbourhood of ${c}, then near ${c} all values lie in ${iv(m, `${m} + 1`, '[', ')')}, so ${fl(of(g, x))} = ${m} = ${of(f, c)}: ${f} is <b>continuous</b> at ${c}.`,
      },
      {
        t: 'formula',
        kicker: 'Floor of a continuous function',
        main: `${fl(of(g, x))} is discontinuous at ${c} ⟺<br>${of(g, c)} is an integer ${m} and ${rel(g, '<', m)}<br>at points arbitrarily close to ${c}`,
        legend: [`${g} = continuous near ${c}`, `${g} touching ${m} from above (a minimum on the level) leaves ${fl(g)} continuous`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Reading the asymmetry.</b> The floor function rounds down. So a dip below the integer level breaks continuity, while hovering above it does not. A strict local maximum of ${g} sitting exactly on an integer is a discontinuity (everything nearby is strictly lower); a local minimum sitting exactly on an integer is not (everything nearby is at or above the level, and floors agree). Crossing the level transversally counts as the first sub-case, since one side dips below.`,
      },
      {
        t: 'p',
        html: `<b>Monotonic shortcut.</b> If ${g} is continuous and strictly monotonic on an interval, every solution of ${of(g, x)} = integer inside it is a genuine crossing, so the discontinuities of ${fl(g)} there are exactly those solutions of ${of(g, x)} = ${n} over the integers ${n} in the range of ${g}; an endpoint needs its own one-sided check, as in practice question 3.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the number of points of discontinuity of ${fx} = ${fl(`2${NB}${SINX}`)} in ${ZPI}.`,
        steps: [
          `Here ${of(g, x)} = 2${NB}${SINX} ranges over ${iv('−2', '2', '[', ']')}, so the integer levels to test are ${m} = −2, −1, 0, 1, 2. Solve 2${NB}${SINX} = ${m} inside ${ZPI} and classify each solution by the criterion (level ${m}; solutions in ${ZPI}; behaviour at the point; verdict):<br>2: ${x} = ${P2}; local maximum touching level 2, neighbours strictly below; discontinuous<br>1: ${fr('π', '6')}, ${fr('5π', '6')}; transversal crossing; discontinuous<br>0: ${x} = π; transversal crossing; discontinuous<br>−1: ${fr('7π', '6')}, ${fr('11π', '6')}; transversal crossing; discontinuous<br>−2: ${x} = ${fr('3π', '2')}; local minimum touching level −2, neighbours strictly above; <b>continuous</b>`,
          `The last row deserves the check: for ${x} near ${fr('3π', '2')} (but not equal), −2 < 2${NB}${SINX} < −1, so ${fl(`2${NB}${SINX}`)} = −2 = ${of(f, fr('3π', '2'))} throughout the neighbourhood: no jump. Meanwhile at ${P2}, values nearby lie in ${iv('1', '2')} with floor 1, while ${of(f, P2)} = ${fl('2')} = 2: a jump down.`,
          `A student who counts all seven solutions of 2${NB}${SINX} = integer gets 7 and loses the mark: the minimum-touch at ${fr('3π', '2')} is the designed trap.`,
        ],
        ans: `6 points of discontinuity:<br>${x} = ${fr('π', '6')}, ${P2}, ${fr('5π', '6')}, π, ${fr('7π', '6')}, ${fr('11π', '6')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Trap',
        q: `Show that ${fx} = ${fl(X2)} is continuous at ${x} = 0 but discontinuous at ${x} = 1.`,
        steps: [
          `<b>At ${x} = 0:</b> here ${of(g, x)} = ${X2} attains the integer level 0 at a strict local minimum. For ${rel(abs(x), '<', '1')} we have 0 ≤ ${X2} < 1, so<br>${fl(X2)} = 0 = ${of(f, '0')}<br>throughout the whole neighbourhood. Continuous, despite ${X2} hitting an integer dead-on. This is the counterexample to “discontinuities occur where ${g} hits an integer.”`,
          `<b>At ${x} = 1:</b> ${X2} crosses the level 1 transversally. From the left, ${X2} ∈ ${iv('0', '1')} so ${fl(X2)} = 0; from the right, ${X2} ∈ ${iv('1', '2')} so ${fl(X2)} = 1; and ${of(f, '1')} = 1. The left limit 0 disagrees with ${of(f, '1')} = 1: discontinuous.`,
          '<b>Moral.</b> Touching an integer from above is harmless; touching from below, or crossing, is fatal. Always locate the point relative to the level before counting.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the number of points of discontinuity of ${fl(SINX)} in ${ZPI}.`,
            a: `2 points: ${x} = ${P2} (maximum touching level 1 from below: discontinuous) and ${x} = π (crossing level 0). The minimum-touch at ${fr('3π', '2')} (level −1) is continuous, by the same argument as this topic’s first worked example.`,
          },
          {
            q: `Find the number of points of discontinuity of ${fl(x)} in ${iv('−2', '2')}.`,
            a: `3 points: ${x} = −1, 0, 1, each an interior crossing of an integer level.`,
          },
          {
            q: `Find the number of points of discontinuity of ${fl(`2${x} + 1`)} on ${iv('0', '2', '[', ')')}.`,
            a: `3 points: 2${x} + 1 is an integer exactly at ${x} = ${HALF}, 1, ${fr('3', '2')} inside ${iv('0', '2', '[', ')')}, each a transversal crossing. At the endpoint ${x} = 0 the function is right-continuous (values to the right have 2${x} + 1 > 1, floors equal to ${of(f, '0')} = 1), so it does not count.`,
          },
          {
            q: `Is ${fl(COSX)} continuous at ${x} = 0?`,
            a: `No. cos${NB}0 = 1 is an integer attained at a local maximum, and every punctured neighbourhood has ${COSX} < 1, so the floor drops to 0 nearby while ${of(f, '0')} = 1: discontinuous at 0.`,
          },
          {
            q: `Find the number of points of discontinuity of ${fl(X2)} in ${iv('−2', '2')}.`,
            a: `6 points: ${X2} = ${m} for ${m} = 1, 2, 3 gives ${x} = ±1, ±√2, ±√3, all transversal crossings. The level ${m} = 0 at ${x} = 0 is a minimum-touch and is continuous, as established in this topic’s second worked example.`,
          },
        ],
      },
    ],
  },
];
