import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 05 and 06 of the Class 11 Mathematics Master Reference
 * (October 2026 edition), word for word:
 * - Topic 05 Euler Form, De Moivre’s Theorem & Roots of a Complex Number,
 *   pp. 366–371 (Figure 4.5, caption p. 366, figure p. 367);
 * - Topic 06 Geometry of Complex Numbers (Argand Geometry & Loci),
 *   pp. 372–378 (Figure 4.6, caption p. 372, figure p. 373).
 * Each topic opens with its "JEE Extension" box and "1. Exam Relevance"
 * section as the "Exam relevance" part, then is split at its Sections 2 to 8;
 * Section 8 is two parts, "Common pitfalls and pro-tips" and "Cheat sheet".
 * Topic 06's collinearity test is the bold item "Collinearity." of its "Key
 * formulas and definitions (with validity / domain conditions)" part (cited
 * by Topic 09). Neither topic has an unnumbered drawing.
 * Every fraction is stacked (<frac>), except inside a raised run; no em
 * dashes. A conjugate is the letter followed by U+0305.
 */

const F = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const BAR = '̅';
const z = (k: string | number) => `<i>z</i><sub>${k}</sub>`;
const zb = (k?: string | number) => (k === undefined ? `<i>z</i>${BAR}` : `<i>z</i>${BAR}<sub>${k}</sub>`);
const e = (x: string) => `<i>e</i><sup>${x}</sup>`;
const EIT = e('<i>iθ</i>');
const EMIT = e('−<i>iθ</i>');
const RE = `<i>re</i><sup><i>iθ</i></sup>`;
/** The conjugate of re^{iθ}, one bar over the whole (a mark after every character under it). */
const W = '<i>ω</i>';
const W2 = '<i>ω</i><sup>2</sup>';
const P2 = F('π', '2');
const ROOT_ANGLE = F('<i>θ</i> + 2<i>k</i>π', '<i>n</i>');
const ROTATION = `${F(`${z(2)} − ${z(1)}`, `${z(3)} − ${z(1)}`)} = |${F(`${z(2)} − ${z(1)}`, `${z(3)} − ${z(1)}`)}|${EIT}`;
const COLLINEAR = F(`${z(3)} − ${z(1)}`, `${z(2)} − ${z(1)}`);
const APOLLONIUS = F(`|<i>z</i> − ${z(1)}|`, `|<i>z</i> − ${z(2)}|`);
const ARG_RATIO = F(`<i>z</i> − ${z(1)}`, `<i>z</i> − ${z(2)}`);
const CIRCLE_FORM = `<i>z</i>${zb()} + <i>a</i>${BAR}<i>z</i> + <i>a</i>${zb()} + <i>b</i> = 0`;
/** The arrow over a two-letter segment sits on its last letter, as Physics writes CP⃗. */
const z1z2v = `${z(1)}<i>z⃗</i><sub>2</sub>`;
const z1z3v = `${z(1)}<i>z⃗</i><sub>3</sub>`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 05 · pp. 366–371 ────────────────
  {
    n: '05',
    title: 'Euler Form, De Moivre’s Theorem & Roots of a Complex Number',
    kalam: 'Euler’s formula packages polar form into one symbol.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: '<b>JEE Extension (beyond NCERT Class 11).</b> This topic develops the exponential form and the theory of roots: the engine room of JEE-Advanced complex numbers. It builds directly on the polar form of Topic 03.',
      },
      {
        t: 'p',
        html: '• <b>CBSE Boards:</b> Not in the Class-11 syllabus; safe to skip for boards only.<br>• <b>JEE Main:</b> Euler-form manipulation, simple De Moivre powers, and cube/fourth roots of unity appear most years (the book’s estimate from past papers, not official figures).<br>• <b>JEE Advanced:</b> The roots-of-unity toolkit and Euler-form algebra are assumed fluent; many problems are unsolvable without them.',
      },
      {
        t: 'p',
        html: 'Common trap: reporting a single root (or the wrong number) when a non-zero number has exactly <i>n</i> <i>n</i>th roots.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Euler’s formula packages polar form into one symbol.</b> Topic 03 wrote <i>z</i> = <i>r</i>(cos <i>θ</i> + <i>i</i> sin <i>θ</i>). Euler’s formula says that bracket is an exponential:<br>${EIT} = cos <i>θ</i> + <i>i</i> sin <i>θ</i>,<br>so <i>z</i> = ${RE}. A unit complex number ${EIT} is simply “the arrow of length 1 pointing at angle <i>θ</i>.” Multiplying two of them adds the angles, and now that is literally the exponent rule ${e('<i>iθ</i>₁')}${e('<i>iθ</i>₂')} = ${e('<i>i</i>(<i>θ</i>₁+<i>θ</i>₂)')}. “Multiplication is rotation” becomes “multiplication adds exponents.”`,
      },
      {
        t: 'p',
        html: `<b>Roots live on a circle, equally spaced.</b> Taking an <i>n</i>th root divides the angle by <i>n</i>, but the angle was only known up to 2π, so there are <i>n</i> legitimate answers, spaced ${F('2π', '<i>n</i>')} apart on a circle of radius <i>r</i><sup>1/<i>n</i></sup>. The <i>n</i> roots are the vertices of a <b>regular <i>n</i>-gon</b>. The <i>n</i>th roots of unity are that polygon inscribed in the unit circle with one vertex at 1.`,
      },
      { t: 'fig', id: 'm11-04-fig-4.5' },

      { t: 'part', title: 'Key formulas and definitions (with validity / domain conditions)' },
      {
        t: 'formula',
        kicker: 'Euler’s formula and exponential form',
        main: `${EIT} = cos <i>θ</i> + <i>i</i> sin <i>θ</i><br><i>z</i> = ${RE} (<i>r</i> = |<i>z</i>|, <i>θ</i> = arg <i>z</i>)`,
        legend: [
          '<i>z</i> = a complex number',
          '<i>r</i> = the modulus of <i>z</i>',
          '<i>θ</i> = the argument of <i>z</i>',
          '<i>i</i> = the imaginary unit',
        ],
        note: null,
      },
      { t: 'p', html: 'Consequences:' },
      {
        t: 'formula',
        kicker: 'Consequences of Euler’s formula',
        main: `${e('<i>iθ</i>₁')}${e('<i>iθ</i>₂')} = ${e('<i>i</i>(<i>θ</i>₁+<i>θ</i>₂)')}<br>${F(e('<i>iθ</i>₁'), e('<i>iθ</i>₂'))} = ${e('<i>i</i>(<i>θ</i>₁−<i>θ</i>₂)')}<br><i>z</i>${BAR} = <i>re</i><sup>−<i>iθ</i></sup> for <i>z</i> = ${RE}<br>${F('1', RE)} = ${F('1', '<i>r</i>')}${EMIT}<br>cos <i>θ</i> = ${F(`${EIT} + ${EMIT}`, '2')}<br>sin <i>θ</i> = ${F(`${EIT} − ${EMIT}`, '2<i>i</i>')} (inverse Euler)`,
        legend: [
          '<i>θ</i>, <i>θ</i>₁, <i>θ</i>₂ = real angles',
          `<i>z</i> = a non-zero complex number (${RE})`,
          `<i>z</i>${BAR} = the conjugate of <i>z</i>`,
          '<i>r</i> = the modulus (<i>r</i> > 0)',
          '<i>i</i> = the imaginary unit',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>De Moivre’s theorem.</b> For <i>z</i> = ${RE} and integer <i>n</i>:<br><i>z</i><sup><i>n</i></sup> = <i>r</i><sup><i>n</i></sup><i>e</i><sup><i>inθ</i></sup><br>= <i>r</i><sup><i>n</i></sup>(cos <i>nθ</i> + <i>i</i> sin <i>nθ</i>)`,
      },
      {
        t: 'p',
        html: `For rational <i>n</i> = ${F('<i>p</i>', '<i>q</i>')} in lowest terms (<i>q</i> > 0), (cos <i>θ</i> + <i>i</i> sin <i>θ</i>)<sup><i>n</i></sup> has <i>q</i> values, and cos <i>nθ</i> + <i>i</i> sin <i>nθ</i> is <b>one of</b> them.`,
      },
      {
        t: 'formula',
        kicker: '<i>n</i>th roots of a complex number',
        main: `The solutions of <i>w</i><sup><i>n</i></sup> = <i>z</i> = ${RE} are:<br><i>w</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup>[cos ${ROOT_ANGLE} + <i>i</i> sin ${ROOT_ANGLE}]<br>= <i>r</i><sup>1/<i>n</i></sup> <i>e</i><sup><i>i</i>(<i>θ</i>+2<i>k</i>π)/<i>n</i></sup><br><i>k</i> = 0, 1, …, <i>n</i> − 1`,
        legend: [
          '<i>w</i><sub><i>k</i></sub> = the <i>k</i>th root',
          '<i>z</i> = the non-zero complex number (<i>re</i><sup><i>iθ</i></sup>)',
          '<i>r</i> = the modulus of <i>z</i> (<i>r</i> > 0)',
          '<i>θ</i> = the argument of <i>z</i>',
          '<i>n</i> = the order of the root',
          '<i>k</i> = the root’s index',
          '<i>i</i> = the imaginary unit',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity / counting condition.</b> A non-zero complex number has <b>exactly</b> <i>n</i> distinct <i>n</i>th roots, given by <i>k</i> = 0 through <i>n</i> − 1. Using <i>k</i> ≥ <i>n</i> repeats roots; reporting fewer than <i>n</i> is the wrong count. The roots lie on a circle of radius <i>r</i><sup>1/<i>n</i></sup>, equally spaced by ${F('2π', '<i>n</i>')}.`,
      },
      {
        t: 'formula',
        kicker: '<i>n</i>th roots of unity',
        main: `Setting <i>z</i> = 1 (<i>r</i> = 1, <i>θ</i> = 0):<br><i>α</i><sub><i>k</i></sub> = <i>e</i><sup>2π<i>ik</i>/<i>n</i></sup> = cos ${F('2<i>k</i>π', '<i>n</i>')} + <i>i</i> sin ${F('2<i>k</i>π', '<i>n</i>')}<br><i>k</i> = 0, …, <i>n</i> − 1<br>Writing <i>α</i> = <i>e</i><sup>2π<i>i</i>/<i>n</i></sup>, the roots are 1, <i>α</i>, <i>α</i><sup>2</sup>, …, <i>α</i><sup><i>n</i>−1</sup>, and:<br>1 + <i>α</i> + <i>α</i><sup>2</sup> + ⋯ + <i>α</i><sup><i>n</i>−1</sup> = 0 (<i>n</i> ≥ 2)<br>∏<sub><i>k</i>=0</sub><sup><i>n</i>−1</sup> <i>α</i><sub><i>k</i></sub> = (−1)<sup><i>n</i>−1</sup>`,
        legend: [
          '<i>α</i><sub><i>k</i></sub> = the <i>k</i>th root of unity',
          '<i>α</i> = the root <i>e</i><sup>2π<i>i</i>/<i>n</i></sup>',
          '<i>n</i> = the number of roots',
          '<i>k</i> = the root’s index',
          '<i>i</i> = the imaginary unit',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Cube roots of unity (the workhorse case)',
        main: `1, ${W}, ${W2} where:<br>${W} = <i>e</i><sup>2π<i>i</i>/3</sup> = −${F('1', '2')} + ${F('√3', '2')}<i>i</i><br>${W2} = <i>ω</i>${BAR} = −${F('1', '2')} − ${F('√3', '2')}<i>i</i><br><i>ω</i><sup>3</sup> = 1<br>1 + ${W} + ${W2} = 0<br><i>ω</i><sup><i>n</i></sup> = <i>ω</i><sup><i>n</i> mod 3</sup>`,
        legend: ['<i>ω</i> = the cube root of unity <i>e</i><sup>2π<i>i</i>/3</sup>', '<i>n</i> = any integer'],
        note: null,
      },
      { t: 'p', html: 'Factorization identities (heavily used):' },
      {
        t: 'formula',
        kicker: 'Factorization identities with <i>ω</i>',
        main: `<i>a</i><sup>2</sup> + <i>ab</i> + <i>b</i><sup>2</sup> = (<i>a</i> − <i>bω</i>)(<i>a</i> − <i>bω</i><sup>2</sup>)<br><i>a</i><sup>2</sup> − <i>ab</i> + <i>b</i><sup>2</sup> = (<i>a</i> + <i>bω</i>)(<i>a</i> + <i>bω</i><sup>2</sup>)<br><i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> = (<i>a</i> + <i>b</i>)(<i>a</i> + <i>bω</i>)(<i>a</i> + <i>bω</i><sup>2</sup>)<br><i>a</i><sup>3</sup> − <i>b</i><sup>3</sup> = (<i>a</i> − <i>b</i>)(<i>a</i> − <i>bω</i>)(<i>a</i> − <i>bω</i><sup>2</sup>)<br><i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i><br>= (<i>a</i> + <i>b</i> + <i>c</i>)(<i>a</i> + <i>bω</i> + <i>cω</i><sup>2</sup>)(<i>a</i> + <i>bω</i><sup>2</sup> + <i>cω</i>)`,
        legend: ['<i>a</i>, <i>b</i>, <i>c</i> = any complex numbers', '<i>ω</i> = a non-real cube root of unity'],
        note: null,
      },

      { t: 'part', title: 'Theorems, proofs and standard methods' },
      {
        t: 'p',
        html: `<b>Theorem 1 (Euler’s formula, sketch).</b> ${EIT} = cos <i>θ</i> + <i>i</i> sin <i>θ</i>. <b>Proof (series).</b> Substituting <i>iθ</i> into <i>e</i><sup><i>x</i></sup> = ∑ ${F('<i>x</i><sup><i>n</i></sup>', '<i>n</i>!')} and using <i>i</i><sup>2</sup> = −1 to split into even/odd powers gives<br>∑(−1)<sup><i>k</i></sup> ${F('<i>θ</i><sup>2<i>k</i></sup>', '(2<i>k</i>)!')} + <i>i</i> ∑(−1)<sup><i>k</i></sup> ${F('<i>θ</i><sup>2<i>k</i>+1</sup>', '(2<i>k</i> + 1)!')}<br>= cos <i>θ</i> + <i>i</i> sin <i>θ</i>. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (<i>n</i>th roots formula).</b> <i>w</i><sup><i>n</i></sup> = ${RE} (<i>r</i> > 0) has exactly the <i>n</i> solutions <i>w</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup><i>e</i><sup><i>i</i>(<i>θ</i>+2<i>k</i>π)/<i>n</i></sup>, <i>k</i> = 0, …, <i>n</i> − 1. <b>Proof.</b> Write <i>w</i> = <i>ρe</i><sup><i>iϕ</i></sup>. Then <i>w</i><sup><i>n</i></sup> = <i>ρ</i><sup><i>n</i></sup><i>e</i><sup><i>inϕ</i></sup> = ${RE} forces <i>ρ</i><sup><i>n</i></sup> = <i>r</i> (so <i>ρ</i> = <i>r</i><sup>1/<i>n</i></sup>) and <i>nϕ</i> = <i>θ</i> + 2<i>k</i>π for some integer <i>k</i> (since arguments are equal up to 2π). Thus <i>ϕ</i> = ${ROOT_ANGLE}. Values <i>k</i> = 0, …, <i>n</i> − 1 give distinct angles; <i>k</i> = <i>n</i> repeats <i>k</i> = 0. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (Sum of <i>n</i>th roots of unity is zero, <i>n</i> ≥ 2).</b> <b>Proof.</b> The roots are 1, <i>α</i>, …, <i>α</i><sup><i>n</i>−1</sup> with <i>α</i> = <i>e</i><sup>2π<i>i</i>/<i>n</i></sup> ≠ 1. This is a geometric series:<br>∑<sub><i>k</i>=0</sub><sup><i>n</i>−1</sup> <i>α</i><sup><i>k</i></sup> = ${F('<i>α</i><sup><i>n</i></sup> − 1', '<i>α</i> − 1')} = ${F('1 − 1', '<i>α</i> − 1')} = 0,<br>since <i>α</i><sup><i>n</i></sup> = 1. ■ (They are also the roots of <i>z</i><sup><i>n</i></sup> − 1 = 0, whose <i>z</i><sup><i>n</i>−1</sup> coefficient is 0: same conclusion by Vieta.)`,
      },
      {
        t: 'proc',
        title: 'Standard Method: finding all nth roots',
        steps: [
          `Put <i>z</i> in polar/Euler form ${RE}.`,
          'Take <i>ρ</i> = <i>r</i><sup>1/<i>n</i></sup>.',
          `List angles ${ROOT_ANGLE} for <i>k</i> = 0, …, <i>n</i> − 1.`,
          'Convert back if <i>a</i> + <i>ib</i> form is required.',
        ],
      },

      { t: 'part', title: 'Worked examples (CBSE → JEE Main → JEE Advanced)' },
      { t: 'p', html: 'This topic is beyond the CBSE syllabus, so these examples are JEE-level.' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Write <i>z</i> = −1 + <i>i</i> in Euler form and find <i>z</i><sup>8</sup>.',
        steps: [
          `<i>r</i> = √2, arg <i>z</i> = ${F('3π', '4')}, so <i>z</i> = √2 <i>e</i><sup><i>i</i>3π/4</sup>.`,
          'Then <i>z</i><sup>8</sup> = (√2)<sup>8</sup><i>e</i><sup><i>i</i>6π</sup> = 16 <i>e</i><sup><i>i</i>6π</sup><br>= 16(cos 6π + <i>i</i> sin 6π) = 16.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Find all the cube roots of 8<i>i</i>.',
        steps: [
          `8<i>i</i> = 8 <i>e</i><sup><i>i</i>π/2</sup>, so <i>ρ</i> = 8<sup>1/3</sup> = 2, angles ${F(`${P2} + 2<i>k</i>π`, '3')} for <i>k</i> = 0, 1, 2: ${F('π', '6')}, ${F('5π', '6')}, ${F('3π', '2')}.`,
          `Roots: 2(cos ${F('π', '6')} + <i>i</i> sin ${F('π', '6')}) = √3 + <i>i</i>;<br>2(cos ${F('5π', '6')} + <i>i</i> sin ${F('5π', '6')}) = −√3 + <i>i</i>;<br>2(cos ${F('3π', '2')} + <i>i</i> sin ${F('3π', '2')}) = −2<i>i</i>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Find the four 4th roots of unity.',
        steps: [
          '<i>α</i><sub><i>k</i></sub> = <i>e</i><sup>2π<i>ik</i>/4</sup> = <i>e</i><sup><i>ik</i>π/2</sup> for <i>k</i> = 0, 1, 2, 3: 1, <i>i</i>, −1, −<i>i</i>. (Sum = 0. ✓)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `If ${W} is a non-real cube root of unity, evaluate (1 + ${W})(1 + ${W2})(1 + <i>ω</i><sup>4</sup>)(1 + <i>ω</i><sup>8</sup>).`,
        steps: [
          `Reduce exponents mod 3: <i>ω</i><sup>4</sup> = ${W}, <i>ω</i><sup>8</sup> = ${W2}.`,
          `So the product is (1 + ${W})(1 + ${W2})(1 + ${W})(1 + ${W2})<br>= [(1 + ${W})(1 + ${W2})]<sup>2</sup>.`,
          `Now (1 + ${W})(1 + ${W2}) = 1 + ${W} + ${W2} + <i>ω</i><sup>3</sup><br>= 0 + 1 = 1.`,
          'Hence the value is 1<sup>2</sup> = 1.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Using cube roots of unity, factor and evaluate <i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i> for <i>a</i> = 1, <i>b</i> = 2, <i>c</i> = 3.',
        steps: [
          '<i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i><br>= (<i>a</i> + <i>b</i> + <i>c</i>)(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>ab</i> − <i>bc</i> − <i>ca</i>).',
          'With <i>a</i> = 1, <i>b</i> = 2, <i>c</i> = 3:<br>(6)(1 + 4 + 9 − 2 − 6 − 3) = (6)(3) = 18.',
          `(The ${W}-factorization gives the same product: the two complex factors (<i>a</i> + <i>bω</i> + <i>cω</i><sup>2</sup>)(<i>a</i> + <i>bω</i><sup>2</sup> + <i>cω</i>) multiply out, using <i>ω</i><sup>3</sup> = 1 and <i>ω</i> + <i>ω</i><sup>2</sup> = −1, to <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> + <i>c</i><sup>2</sup> − <i>ab</i> − <i>bc</i> − <i>ca</i>.)`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'Express 1 + <i>i</i>√3 in Euler form and compute (1 + <i>i</i>√3)<sup>9</sup>.',
            a: '2<i>e</i><sup><i>i</i>π/3</sup>; (2)<sup>9</sup><i>e</i><sup><i>i</i>3π</sup> = 512(cos 3π + <i>i</i> sin 3π) = −512.',
          },
          {
            q: 'Find all square roots of <i>i</i> using the roots formula.',
            a: `<i>i</i> = <i>e</i><sup><i>i</i>π/2</sup>; roots <i>e</i><sup><i>i</i>π/4</sup>, <i>e</i><sup><i>i</i>5π/4</sup> = ±${F('1', '√2')}(1 + <i>i</i>).`,
          },
          {
            q: 'Find all cube roots of unity and verify their sum and product.',
            a: `1, ${W}, ${W2}; sum = 0, product = <i>ω</i><sup>3</sup> = 1.`,
          },
          {
            q: `Find the fifth roots of unity in ${EIT} form and state their sum.`,
            a: '<i>α</i><sub><i>k</i></sub> = <i>e</i><sup>2π<i>ik</i>/5</sup>, <i>k</i> = 0..4; sum = 0.',
          },
          {
            q: `Simplify <i>ω</i><sup>100</sup> + <i>ω</i><sup>200</sup> for a non-real cube root of unity ${W}.`,
            a: `100 ≡ 1, 200 ≡ 2 (mod 3): ${W} + ${W2} = −1.`,
          },
          {
            q: `Prove (1 + ${W})<sup>3</sup> = (1 + ${W2})<sup>3</sup> = −1.`,
            a: `1 + ${W} = −${W2} ⇒ (1 + ${W})<sup>3</sup> = −<i>ω</i><sup>6</sup> = −(<i>ω</i><sup>3</sup>)<sup>2</sup> = −1; (1 + ${W2})<sup>3</sup> = (−${W})<sup>3</sup> = −1.`,
          },
          {
            q: 'Find all solutions of <i>z</i><sup>4</sup> = −16.',
            a: `−16 = 16<i>e</i><sup><i>i</i>π</sup>; <i>ρ</i> = 2, angles ${F('π + 2<i>k</i>π', '4')}: 2<i>e</i><sup><i>i</i>π/4</sup>, 2<i>e</i><sup><i>i</i>3π/4</sup>, 2<i>e</i><sup><i>i</i>5π/4</sup>, 2<i>e</i><sup><i>i</i>7π/4</sup> = ±√2 ± √2 <i>i</i> (all four sign combinations).`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: '<i>e</i><sup><i>i</i>π</sup> =',
        opts: [
          { label: '1', nudge: '<b>(A)</b> is <i>e</i><sup>0</sup> = <i>e</i><sup>2π<i>i</i></sup>; at angle π the unit arrow points to −1.' },
          { label: '−1', nudge: null },
          { label: '<i>i</i>', nudge: '<b>(C)</b> is <i>e</i><sup><i>i</i>π/2</sup>, a quarter-turn; π is a half-turn.' },
          {
            label: '0',
            nudge: '<b>(D)</b> is impossible: |<i>e</i><sup><i>iθ</i></sup>| = 1 for every real <i>θ</i>, so it is never 0.',
          },
        ],
        correct: 1,
        solution: 'cos π + <i>i</i> sin π = −1 (Euler’s identity).',
      },
      {
        t: 'mcq',
        q: 'The number of distinct 6th roots of a non-zero complex number is:',
        opts: [
          { label: '1', nudge: '<b>(A)</b> reports only the principal root; a non-zero number has six distinct 6th roots.' },
          { label: '2', nudge: '<b>(B)</b> is the number of square roots, not 6th roots.' },
          { label: '3', nudge: '<b>(C)</b> is the number of cube roots, not 6th roots.' },
          { label: '6', nudge: null },
        ],
        correct: 3,
        solution: 'Exactly <i>n</i> = 6.',
      },
      {
        t: 'mcq',
        q: `For a non-real cube root of unity ${W}, 1 + ${W} + ${W2} =`,
        opts: [
          { label: '0', nudge: null },
          { label: '1', nudge: '<b>(B)</b> forgets that <i>ω</i> + <i>ω</i><sup>2</sup> = −1 cancels the 1.' },
          { label: '3', nudge: '<b>(C)</b> is 1 + 1 + 1, true only if <i>ω</i> = 1, which is excluded.' },
          {
            label: W,
            nudge: '<b>(D)</b> stops at a partial sum: 1 + <i>ω</i><sup>2</sup> = −<i>ω</i>, so 1 + <i>ω</i> + <i>ω</i><sup>2</sup> = 0.',
          },
        ],
        correct: 0,
        solution:
          '<i>ω</i> is a root of <i>z</i><sup>3</sup> − 1 = (<i>z</i> − 1)(<i>z</i><sup>2</sup> + <i>z</i> + 1) = 0 with <i>ω</i> ≠ 1, so 1 + <i>ω</i> + <i>ω</i><sup>2</sup> = 0.',
      },
      {
        t: 'mcq',
        q: '<i>ω</i><sup>2024</sup> (<i>ω</i> a non-real cube root of unity) equals:',
        opts: [
          { label: '1', nudge: '<b>(A)</b> takes 2024 ≡ 0 (mod 3); but 2024 = 3 × 674 + 2.' },
          { label: W, nudge: '<b>(B)</b> takes 2024 ≡ 1.' },
          { label: W2, nudge: null },
          {
            label: '−1',
            nudge: '<b>(D)</b> treats <i>ω</i> like −1; the powers of <i>ω</i> are only 1, <i>ω</i>, <i>ω</i><sup>2</sup>.',
          },
        ],
        correct: 2,
        solution: '2024 ≡ 2 (mod 3).',
      },
      {
        t: 'mcq',
        q: 'The cube roots of 8 are:',
        opts: [
          { label: '2 only', nudge: '<b>(A)</b> is the trap: 2 is only the real cube root; there are three.' },
          { label: `2, 2${W}, 2${W2}`, nudge: null },
          { label: '±2', nudge: '<b>(C)</b> gives the square roots of 4; (−2)<sup>3</sup> = −8, not 8.' },
          {
            label: '2, −2, 2<i>i</i>',
            nudge: '<b>(D)</b> fails: (−2)<sup>3</sup> = −8 and (2<i>i</i>)<sup>3</sup> = −8<i>i</i>; of these only 2 cubes to 8.',
          },
        ],
        correct: 1,
        solution: 'All three: 2, 2<i>ω</i>, 2<i>ω</i><sup>2</sup> each cube to 8, since <i>ω</i><sup>3</sup> = 1.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reporting one root instead of <i>n</i>.</b> A non-zero number always has <i>n</i> <i>n</i>th roots, <i>k</i> = 0, …, <i>n</i> − 1.',
          `<b>Mishandling ${W} powers</b>: always reduce the exponent mod 3.`,
          `<b>Confusing ${EIT} with <i>e</i><sup><i>θ</i></sup></b> or mixing degrees/radians in the exponent.`,
          `<b>Forgetting</b> ${W2} = <i>ω</i>${BAR} and that ${W}, ${W2} are conjugates.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Euler form makes powers and roots trivial: powers multiply the angle, roots divide it (over <i>n</i> branches).<br>• (1 + ${W}) = −${W2} and (1 + ${W2}) = −${W}: instant simplifiers.<br>• The <i>n</i> roots of unity sum to 0 and form a regular <i>n</i>-gon; use symmetry to kill sums fast.<br>• To take an <i>n</i>th root, go to Euler form first: never expand.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${EIT} = cos <i>θ</i> + <i>i</i> sin <i>θ</i>; <i>z</i> = ${RE}; <i>z</i>${BAR} = <i>re</i><sup>−<i>iθ</i></sup>`, note: '' },
          {
            f: `cos <i>θ</i> = ${F(`${EIT} + ${EMIT}`, '2')}, sin <i>θ</i> = ${F(`${EIT} − ${EMIT}`, '2<i>i</i>')}`,
            note: '',
          },
          { f: 'De Moivre', note: '<i>z</i><sup><i>n</i></sup> = <i>r</i><sup><i>n</i></sup><i>e</i><sup><i>inθ</i></sup>' },
          {
            f: `<i>n</i>th roots of <i>z</i> = ${RE}`,
            note: '<i>w</i><sub><i>k</i></sub> = <i>r</i><sup>1/<i>n</i></sup><i>e</i><sup><i>i</i>(<i>θ</i>+2<i>k</i>π)/<i>n</i></sup>, <i>k</i> = 0 … <i>n</i> − 1 (exactly <i>n</i> when <i>z</i> ≠ 0)',
          },
          {
            f: '<i>n</i>th roots of unity',
            note: '1, <i>α</i>, …, <i>α</i><sup><i>n</i>−1</sup>, <i>α</i> = <i>e</i><sup>2π<i>i</i>/<i>n</i></sup>; sum = 0 (<i>n</i> ≥ 2)',
          },
          {
            f: 'Cube roots of unity',
            note: `1, ${W}, ${W2}; <i>ω</i><sup>3</sup> = 1, 1 + ${W} + ${W2} = 0, ${W2} = <i>ω</i>${BAR}`,
          },
          {
            f: '<i>a</i><sup>3</sup> + <i>b</i><sup>3</sup> + <i>c</i><sup>3</sup> − 3<i>abc</i> = (<i>a</i> + <i>b</i> + <i>c</i>)(<i>a</i> + <i>bω</i> + <i>cω</i><sup>2</sup>)(<i>a</i> + <i>bω</i><sup>2</sup> + <i>cω</i>)',
            note: '',
          },
          {
            f: `Roots of <i>z</i> = ${RE} form a regular polygon, radius <i>r</i><sup>1/<i>n</i></sup>, spacing ${F('2π', '<i>n</i>')}`,
            note: '',
          },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 06 · pp. 372–378 ────────────────
  {
    n: '06',
    title: 'Geometry of Complex Numbers (Argand Geometry & Loci)',
    kalam: 'A complex number is a position vector.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: '<b>JEE Extension (beyond NCERT Class 11).</b> Complex numbers as points and position vectors. This is the heart of JEE-Advanced complex numbers: rotation, loci, and the equations of lines and circles in <i>z</i>. Builds on the Argand plane (Topic 03) and the exponential form (Topic 05).',
      },
      {
        t: 'p',
        html: '• <b>CBSE Boards:</b> Beyond Class-11 scope; skip for boards only.<br>• <b>JEE Main:</b> Distance, simple loci (|<i>z</i> − <i>z</i><sub>0</sub>| = <i>r</i>, perpendicular bisector) and basic rotation appear regularly (the book’s estimate from past papers, not official figures).<br>• <b>JEE Advanced:</b> A core, high-yield area (the book’s estimate from past papers, not official figures): rotation theorem, Apollonius circles, arg-loci, collinear/concyclic conditions, and modulus extrema on a locus.',
      },
      {
        t: 'p',
        html: 'Common traps: getting the rotation direction wrong, or the ratio the wrong way round; and treating the Apollonius locus as a circle when <i>k</i> = 1, where it is a straight line.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>A complex number is a position vector.</b> <i>z</i> = <i>x</i> + <i>iy</i> is the point (<i>x</i>, <i>y</i>) and also the arrow <i>OP⃗</i>. So vector ideas transfer directly: ${z(2)} − ${z(1)} is the displacement from ${z(1)} to ${z(2)}, and |${z(2)} − ${z(1)}| is the distance between them.`,
      },
      {
        t: 'p',
        html: `<b>Rotation = multiply by ${EIT}.</b> To rotate the vector <i>AB⃗</i> about <i>A</i> by angle <i>θ</i>, multiply the displacement ${z('<i>B</i>')} − ${z('<i>A</i>')} by ${EIT}. This single move (the “rotation theorem”) solves a huge class of geometry problems: finding a third vertex, proving a right angle, building a square or equilateral triangle.`,
      },
      {
        t: 'p',
        html: `<b>A locus is a geometric condition on <i>z</i>.</b> “|<i>z</i> − ${z(0)}| = <i>r</i>” reads literally as “all points at distance <i>r</i> from ${z(0)}”: a circle. “|<i>z</i> − ${z(1)}| = |<i>z</i> − ${z(2)}|” reads “equidistant from two points”: the perpendicular bisector. Translating words to a complex equation (and back) is the whole skill.`,
      },
      { t: 'fig', id: 'm11-04-fig-4.6' },

      { t: 'part', title: 'Key formulas and definitions (with validity / domain conditions)' },
      {
        t: 'formula',
        kicker: 'Distance and division of a segment',
        main: `distance(${z(1)}, ${z(2)}) = |${z(1)} − ${z(2)}|<br>midpoint = ${F(`${z(1)} + ${z(2)}`, '2')}<br>point dividing ${z(1)}${z(2)} in ratio <i>m</i> ∶ <i>n</i> = ${F(`<i>n</i>${z(1)} + <i>m</i>${z(2)}`, '<i>m</i> + <i>n</i>')}<br>centroid = ${F(`${z(1)} + ${z(2)} + ${z(3)}`, '3')}`,
        legend: [
          `${z(1)}, ${z(2)}, ${z(3)} = points of the Argand plane`,
          '<i>m</i> ∶ <i>n</i> = the ratio of division',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rotation theorem',
        main: `Rotating ${z1z3v} to the direction of ${z1z2v} through angle <i>θ</i>:<br>${ROTATION}<br><i>θ</i> = arg ${F(`${z(2)} − ${z(1)}`, `${z(3)} − ${z(1)}`)}`,
        legend: [
          `${z(1)} = the common vertex`,
          `${z(2)}, ${z(3)} = the other two points`,
          '<i>θ</i> = the angle of rotation',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The angle is measured <b>at the common vertex</b> ${z(1)}, from ${z1z3v} to ${z1z2v}; reversing the ratio reverses the angle’s sign.`,
      },
      {
        t: 'p',
        html: `<b>Equation of a line.</b> The line through ${z(1)}, ${z(2)}: a point <i>z</i> is on it iff ${F(`<i>z</i> − ${z(1)}`, `${z(2)} − ${z(1)}`)} is real, i.e.<br>${F(`<i>z</i> − ${z(1)}`, `${z(2)} − ${z(1)}`)} = ${F(`${zb()} − ${zb(1)}`, `${zb(2)} − ${zb(1)}`)}.<br>General form: <i>a</i>${BAR}<i>z</i> + <i>a</i>${zb()} + <i>b</i> = 0 with <i>a</i> ∈ ℂ, <i>a</i> ≠ 0, <i>b</i> ∈ ℝ.`,
      },
      {
        t: 'p',
        html: `<b>Collinearity.</b> ${z(1)}, ${z(2)}, ${z(3)} are collinear iff ${COLLINEAR} ∈ ℝ (equivalently arg = 0 or π).`,
      },
      {
        t: 'p',
        html: `<b>Perpendicular bisector.</b> |<i>z</i> − ${z(1)}| = |<i>z</i> − ${z(2)}| is the perpendicular bisector of the segment joining ${z(1)}, ${z(2)}.`,
      },
      {
        t: 'formula',
        kicker: 'Equation of a circle',
        main: `|<i>z</i> − ${z(0)}| = <i>r</i> (centre ${z(0)}, radius <i>r</i>)<br>${CIRCLE_FORM} (<i>a</i> ∈ ℂ, <i>b</i> ∈ ℝ, |<i>a</i>|<sup>2</sup> ≥ <i>b</i>)<br>with centre −<i>a</i> and radius √(|<i>a</i>|<sup>2</sup> − <i>b</i>)`,
        legend: [
          '<i>z</i> = a point of the circle',
          `${z(0)} = the centre`,
          '<i>r</i> = the radius',
          '<i>a</i> = a complex constant',
          '<i>b</i> = a real constant',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Apollonius circle',
        main: `${APOLLONIUS} = <i>k</i><br>if <i>k</i> = 1 → the <b>perpendicular bisector (a straight line)</b>, not a circle<br>if <i>k</i> > 0, <i>k</i> ≠ 1 → a <b>circle</b> (the Apollonius circle)`,
        legend: [
          '<i>z</i> = a point of the locus',
          `${z(1)}, ${z(2)} = two fixed points`,
          '<i>k</i> = the fixed ratio of distances',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `arg <b>locus.</b> arg ${ARG_RATIO} = <i>α</i> (fixed, 0 < |<i>α</i>| < π) is an <b>arc</b> of a circle through ${z(1)}, ${z(2)} (not the whole circle); <i>α</i> = ${P2} gives a semicircle on the diameter ${z(1)}${z(2)} (endpoints excluded).<br>The full circle on that diameter is where the ratio is purely imaginary (arg = ±${P2}).`,
      },
      {
        t: 'p',
        html: `<b>Concyclic condition.</b> ${z(1)}, ${z(2)}, ${z(3)}, ${z(4)} are concyclic (or collinear) iff the cross-ratio ${F(`(${z(1)} − ${z(3)})(${z(2)} − ${z(4)})`, `(${z(1)} − ${z(4)})(${z(2)} − ${z(3)})`)} is real.`,
      },
      {
        t: 'formula',
        kicker: 'Equilateral triangle',
        main: `${z(1)}, ${z(2)}, ${z(3)} (not all equal) form an equilateral triangle iff:<br><i>z</i><sub>1</sub><sup>2</sup> + <i>z</i><sub>2</sub><sup>2</sup> + <i>z</i><sub>3</sub><sup>2</sup> = ${z(1)}${z(2)} + ${z(2)}${z(3)} + ${z(3)}${z(1)}<br>equivalently: ${F('1', `${z(1)} − ${z(2)}`)} + ${F('1', `${z(2)} − ${z(3)}`)} + ${F('1', `${z(3)} − ${z(1)}`)} = 0`,
        legend: [`${z(1)}, ${z(2)}, ${z(3)} = the three vertices (not all equal)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Modulus extrema on a locus.</b> If <i>z</i> lies on the circle |<i>z</i> − ${z(0)}| = <i>r</i>, then ||${z(0)}| − <i>r</i>| ≤ |<i>z</i>| ≤ |${z(0)}| + <i>r</i> (nearest/farthest points lie along the line through <i>O</i> and ${z(0)}).`,
      },

      { t: 'part', title: 'Theorems, proofs and standard methods' },
      {
        t: 'p',
        html: `<b>Theorem 1 (Rotation).</b> If ${z1z2v} makes angle <i>θ</i> with ${z1z3v}, then<br>${F(`${z(2)} − ${z(1)}`, `${z(3)} − ${z(1)}`)} = ${F(`|${z(2)} − ${z(1)}|`, `|${z(3)} − ${z(1)}|`)}${EIT}.<br><b>Proof.</b> Both ${z(2)} − ${z(1)} and ${z(3)} − ${z(1)} are vectors from ${z(1)}. In Euler form ${z(2)} − ${z(1)} = |${z(2)} − ${z(1)}|<i>e</i><sup><i>iϕ</i>₂</sup> and ${z(3)} − ${z(1)} = |${z(3)} − ${z(1)}|<i>e</i><sup><i>iϕ</i>₃</sup>. Their quotient is ${F(`|${z(2)} − ${z(1)}|`, `|${z(3)} − ${z(1)}|`)}<i>e</i><sup><i>i</i>(<i>ϕ</i>₂−<i>ϕ</i>₃)</sup>, and <i>ϕ</i><sub>2</sub> − <i>ϕ</i><sub>3</sub> = <i>θ</i> is exactly the angle between them at ${z(1)}. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (Apollonius locus, <i>k</i> ≠ 1, is a circle).</b> <b>Proof sketch.</b> |<i>z</i> − ${z(1)}| = <i>k</i>|<i>z</i> − ${z(2)}| ⇒ |<i>z</i> − ${z(1)}|<sup>2</sup> = <i>k</i><sup>2</sup>|<i>z</i> − ${z(2)}|<sup>2</sup>. Expanding with |<i>w</i>|<sup>2</sup> = <i>w</i><i>w</i>${BAR} (Topic 02) gives<br><i>z</i>${zb()}(1 − <i>k</i><sup>2</sup>) − <i>z</i>(${zb(1)} − <i>k</i><sup>2</sup>${zb(2)})<br>− ${zb()}(${z(1)} − <i>k</i><sup>2</sup>${z(2)}) + (|${z(1)}|<sup>2</sup> − <i>k</i><sup>2</sup>|${z(2)}|<sup>2</sup>) = 0.<br>For <i>k</i> ≠ 1 the <i>z</i>${zb()} term survives, so (after dividing by 1 − <i>k</i><sup>2</sup>) it has the circle form ${CIRCLE_FORM}. For <i>k</i> = 1 the <i>z</i>${zb()} term vanishes, leaving a <b>line</b>. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (Equilateral triangle condition).</b> ${z(1)}, ${z(2)}, ${z(3)} (not all equal) are the vertices of an equilateral triangle iff <i>z</i><sub>1</sub><sup>2</sup> + <i>z</i><sub>2</sub><sup>2</sup> + <i>z</i><sub>3</sub><sup>2</sup> = ${z(1)}${z(2)} + ${z(2)}${z(3)} + ${z(3)}${z(1)}. <b>Proof idea.</b> Equilateral means each side is the previous one rotated by ±${F('π', '3')} about the shared vertex. Applying the rotation theorem ${z(3)} − ${z(1)} = (${z(2)} − ${z(1)})<i>e</i><sup>±<i>i</i>π/3</sup> and simplifying with <i>e</i><sup><i>i</i>π/3</sup> satisfying <i>t</i><sup>2</sup> − <i>t</i> + 1 = 0 yields the stated symmetric identity. ■`,
      },
      {
        t: 'proc',
        title: 'Standard Method: solve a configuration problem',
        steps: [
          'Place the known points as complex numbers.',
          `Express the unknown via the rotation theorem (multiply a displacement by ${EIT}).`,
          'Read off the answer.',
        ],
      },
      {
        t: 'p',
        html: `For loci: translate the geometric words into a <i>z</i>-equation, simplify with |<i>w</i>|<sup>2</sup> = <i>w</i><i>w</i>${BAR}, and identify the standard form.`,
      },

      { t: 'part', title: 'Worked examples (CBSE → JEE Main → JEE Advanced)' },
      { t: 'p', html: 'This topic is beyond the CBSE syllabus, so these examples are JEE-level.' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Find the locus of <i>z</i> if |<i>z</i> − 2| = |<i>z</i> + 2|.',
        steps: [
          'Equidistant from 2 and −2 → the perpendicular bisector of the segment, which is the imaginary axis: Re(<i>z</i>) = 0.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Identify the curve |<i>z</i> − 3| = 2.',
        steps: ['A circle, centre 3 (i.e. (3, 0)), radius 2.'],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'If <i>z</i> lies on |<i>z</i> − 3 − 4<i>i</i>| = 2, find the greatest and least values of |<i>z</i>|.',
        steps: [
          `Centre ${z(0)} = 3 + 4<i>i</i>, |${z(0)}| = 5, radius 2.`,
          'So |<i>z</i>|<sub>max</sub> = 5 + 2 = 7, |<i>z</i>|<sub>min</sub> = 5 − 2 = 3.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Square <i>ABCD</i> has <i>A</i> = ${z(1)} = 1 + 2<i>i</i> and <i>B</i> = ${z(2)} = 3 + <i>i</i>, labelled anticlockwise. Find <i>C</i>.`,
        steps: [
          `Rotate <i>BA⃗</i> by −90° about <i>B</i> to reach <i>BC⃗</i> (anticlockwise square ⇒ turn <i>AB⃗</i> → <i>BC⃗</i> by +90°; equivalently ${z('<i>C</i>')} − ${z('<i>B</i>')} = (${z('<i>A</i>')} − ${z('<i>B</i>')}) · <i>e</i><sup>−<i>i</i>π/2</sup> = (${z('<i>A</i>')} − ${z('<i>B</i>')})(−<i>i</i>)).`,
          `With ${z('<i>A</i>')} − ${z('<i>B</i>')} = (1 + 2<i>i</i>) − (3 + <i>i</i>) = −2 + <i>i</i>:<br>${z('<i>C</i>')} − ${z('<i>B</i>')} = (−2 + <i>i</i>)(−<i>i</i>) = 2<i>i</i> − <i>i</i><sup>2</sup> = 1 + 2<i>i</i>,<br>so ${z('<i>C</i>')} = (3 + <i>i</i>) + (1 + 2<i>i</i>) = 4 + 3<i>i</i>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Find the locus of <i>z</i> satisfying arg ${F('<i>z</i> − 1', '<i>z</i> + 1')} = ${P2}.`,
        steps: [
          `A constant argument of ${P2} means ${F('<i>z</i> − 1', '<i>z</i> + 1')} is purely imaginary with positive imaginary part, so the segment from −1 to 1 subtends a right angle at <i>z</i>.`,
          `The locus is the semicircle of the unit circle (the circle with diameter joining −1 and 1), excluding the endpoints, on the side where the directed angle is +${P2}: the upper half, Im(<i>z</i>) > 0.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the locus: |<i>z</i> − <i>i</i>| = |<i>z</i> + <i>i</i>|.',
            a: 'Perpendicular bisector of <i>i</i>, −<i>i</i> → the real axis, Im(<i>z</i>) = 0.',
          },
          {
            q: 'Find centre and radius of |<i>z</i> + 2 − <i>i</i>| = 3.',
            a: 'Centre −2 + <i>i</i>, radius 3.',
          },
          {
            q: '<i>z</i> lies on |<i>z</i> − 5| = 3. Find max |<i>z</i>| and min |<i>z</i>|.',
            a: `|${z(0)}| = 5, <i>r</i> = 3: max = 8, min = 2.`,
          },
          {
            q: `Show ${z(1)} = 1, ${z(2)} = 1 + <i>i</i>, ${z(3)} = 2 + <i>i</i>: are they collinear?`,
            a: `${COLLINEAR} = ${F('1 + <i>i</i>', '<i>i</i>')} = 1 − <i>i</i> ∉ ℝ → not collinear.`,
          },
          {
            q: `Equilateral triangle has vertices ${z(1)} = 0, ${z(2)} = 2; find the two possible ${z(3)}.`,
            a: `${z(3)} = (${z(2)})<i>e</i><sup>±<i>i</i>π/3</sup> about ${z(1)} = 0: ${z(3)} = 2<i>e</i><sup>±<i>i</i>π/3</sup> = 1 ± <i>i</i>√3.`,
          },
          {
            q: `Identify the locus ${F('|<i>z</i> − 1|', '|<i>z</i> + 1|')} = 2.`,
            a: `Apollonius circle (<i>k</i> = 2 ≠ 1): solving gives centre −${F('5', '3')}, radius ${F('4', '3')} (a circle).`,
          },
          {
            q: 'Rotate the point <i>z</i> = 2 + <i>i</i> about the origin by 90° anticlockwise.',
            a: 'Multiply by <i>e</i><sup><i>i</i>π/2</sup> = <i>i</i>: (2 + <i>i</i>)<i>i</i> = −1 + 2<i>i</i>.',
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `|<i>z</i> − ${z(1)}| = |<i>z</i> − ${z(2)}| represents:`,
        opts: [
          {
            label: 'a circle',
            nudge: `<b>(A)</b> a circle is a fixed distance from one point, |<i>z</i> − ${z(0)}| = <i>r</i>; here the distances to two points are equal.`,
          },
          { label: `the perpendicular bisector of ${z(1)}${z(2)}`, nudge: null },
          {
            label: 'an ellipse',
            nudge: '<b>(C)</b> an ellipse has a fixed <b>sum</b> of distances to two points; here the distances are equal.',
          },
          {
            label: 'a point',
            nudge: `<b>(D)</b> the midpoint is only one of infinitely many points equidistant from ${z(1)} and ${z(2)}.`,
          },
        ],
        correct: 1,
        solution: `The points equidistant from ${z(1)} and ${z(2)} (${z(1)} ≠ ${z(2)}) form the perpendicular bisector of the segment joining them.`,
      },
      {
        t: 'mcq',
        q: `${F('|<i>z</i> − 1|', '|<i>z</i> − 3|')} = 1 is:`,
        opts: [
          { label: 'a circle', nudge: '<b>(A)</b> is the trap.' },
          { label: 'a line', nudge: null },
          {
            label: 'an ellipse',
            nudge: '<b>(C)</b> an ellipse needs a fixed sum of distances; here their ratio is fixed, and it is 1.',
          },
          {
            label: 'two points',
            nudge: '<b>(D)</b> every point equidistant from 1 and 3 satisfies it: the whole line Re(<i>z</i>) = 2, not two points.',
          },
        ],
        correct: 1,
        solution: '<i>k</i> = 1 ⇒ perpendicular bisector (line), not a circle.',
      },
      {
        t: 'mcq',
        q: 'To rotate vector <i>z</i> about <i>O</i> by angle <i>θ</i> anticlockwise, multiply by:',
        opts: [
          { label: '<i>θ</i>', nudge: '<b>(A)</b> multiplying by the real number <i>θ</i> stretches <i>z</i>; it does not turn it.' },
          { label: EIT, nudge: null },
          { label: EMIT, nudge: '<b>(C)</b> rotates clockwise.' },
          {
            label: 'cos <i>θ</i>',
            nudge: '<b>(D)</b> cos <i>θ</i> is real, so it only scales <i>z</i>; the turn needs cos <i>θ</i> + <i>i</i> sin <i>θ</i>.',
          },
        ],
        correct: 1,
        solution:
          'Multiplying by <i>e</i><sup><i>iθ</i></sup> keeps the modulus (|<i>e</i><sup><i>iθ</i></sup>| = 1) and adds <i>θ</i> to the argument: an anticlockwise turn through <i>θ</i>.',
      },
      {
        t: 'mcq',
        q: 'If |<i>z</i> − 3 − 4<i>i</i>| = 2, the minimum of |<i>z</i>| is:',
        opts: [
          { label: '2', nudge: '<b>(A)</b> is the radius, not a distance from <i>O</i>.' },
          { label: '3', nudge: null },
          { label: '5', nudge: `<b>(C)</b> is |${z(0)}|, the distance to the centre, which is not on the circle.` },
          { label: '7', nudge: '<b>(D)</b> is the maximum.' },
        ],
        correct: 1,
        solution: `|${z(0)}| − <i>r</i> = 5 − 2 = 3.`,
      },
      {
        t: 'mcq',
        q: `arg ${ARG_RATIO} = ${P2} represents:`,
        opts: [
          {
            label: `the full circle on diameter ${z(1)}${z(2)}`,
            nudge: `<b>(A)</b> the other arc of that circle has argument −${P2}, so it is not included.`,
          },
          { label: 'an arc of that circle', nudge: null },
          {
            label: 'a line',
            nudge: `<b>(C)</b> arg = 0 or π would put <i>z</i> on the line through ${z(1)}, ${z(2)}; ${P2} is a right angle at <i>z</i>.`,
          },
          {
            label: 'a parabola',
            nudge: `<b>(D)</b> a fixed angle subtended by the segment ${z(1)}${z(2)} gives an arc of a circle, never a parabola.`,
          },
        ],
        correct: 1,
        solution: 'A fixed argument gives an arc, not the whole circle.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Wrong rotation direction or ratio side.</b> ${EIT} is anticlockwise, ${EMIT} clockwise; the angle sits at the common vertex and the ratio order fixes its sign.`,
          '<b>Calling the <i>k</i> = 1 Apollonius locus a circle</b>: it is the perpendicular-bisector line.',
          '<b>Treating an arg-locus as a full circle</b>: it is only an arc.',
          `<b>Modulus extrema:</b> nearest/farthest points lie on the line through <i>O</i> and ${z(0)}, giving |${z(0)}| + <i>r</i> and ||${z(0)}| − <i>r</i>|; don’t guess.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Translate words to a <i>z</i>-equation: “distance from a point” → |<i>z</i> − ${z(0)}|; “equidistant” → perpendicular bisector; “constant angle” → arc.<br>• For any vertex-finding problem, reach for the rotation theorem: displacement × ${EIT}.<br>• Simplify every locus with |<i>w</i>|<sup>2</sup> = <i>w</i><i>w</i>${BAR} (Topic 02): it linearises the algebra.<br>• For |<i>z</i>| extremes on a circle, use |${z(0)}| + <i>r</i> and ||${z(0)}| − <i>r</i>| immediately.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `Distance = |${z(1)} − ${z(2)}|; midpoint = ${F(`${z(1)} + ${z(2)}`, '2')}; centroid = ${F(`${z(1)} + ${z(2)} + ${z(3)}`, '3')}`,
            note: '',
          },
          { f: 'Rotation', note: `${ROTATION}; multiply by <i>i</i> = +90°` },
          { f: 'Collinear', note: `${COLLINEAR} ∈ ℝ` },
          { f: 'Perp. bisector', note: `|<i>z</i> − ${z(1)}| = |<i>z</i> − ${z(2)}|` },
          {
            f: 'Circle',
            note: `|<i>z</i> − ${z(0)}| = <i>r</i>, or ${CIRCLE_FORM} (centre −<i>a</i>, radius √(|<i>a</i>|<sup>2</sup> − <i>b</i>))`,
          },
          { f: 'Apollonius', note: `${APOLLONIUS} = <i>k</i> → circle if <i>k</i> ≠ 1, line if <i>k</i> = 1` },
          { f: `arg ${ARG_RATIO} = <i>α</i> (0 < |<i>α</i>| < π) → arc of a circle through ${z(1)}, ${z(2)}`, note: '' },
          {
            f: 'Equilateral',
            note: `<i>z</i><sub>1</sub><sup>2</sup> + <i>z</i><sub>2</sub><sup>2</sup> + <i>z</i><sub>3</sub><sup>2</sup> = ${z(1)}${z(2)} + ${z(2)}${z(3)} + ${z(3)}${z(1)}`,
          },
          { f: `On |<i>z</i> − ${z(0)}| = <i>r</i>`, note: `||${z(0)}| − <i>r</i>| ≤ |<i>z</i>| ≤ |${z(0)}| + <i>r</i>` },
        ],
        aids: [],
      },
    ],
  },
];
