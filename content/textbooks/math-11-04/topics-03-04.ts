import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 03 and 04: The Argand Plane and Polar Representation
 * (pp. 352–358) and Quadratic Equations with Complex Roots (pp. 359–365) of
 * the Class 11 Mathematics Master Reference (October 2026 edition), word for
 * word. Each sub-topic opens with an untitled box and its "1. Exam Relevance"
 * section, which together make the "Exam relevance" part; the sections 2 to 7
 * are parts titled from the book's own section names in sentence case ("&" as
 * "and"), and section 8 is two parts, "Common pitfalls and pro-tips" and
 * "Cheat sheet". The displayed key formulas are formula blocks, so they reach
 * the Formula sheet.
 * Figures 4.3 (p. 354) and 4.4 (p. 360) stand where the book prints their
 * captions in the text (pp. 353, 359), at the end of each Concept intuition
 * part; both are redrawn in lib/diagrams/mathematics-11-04.ts. Neither topic
 * has an unnumbered drawing. The conjugate is the combining overline U+0305
 * after the barred letter. Every fraction is stacked (<frac>); no em dashes.
 * The MCQ Q5 analysis of Topic 03 is as printed (errata p. 1243, resolved).
 */

const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const PI2 = fr('π', '2');
const PI3 = fr('π', '3');
const PI4 = fr('π', '4');
const PI6 = fr('π', '6');
const YX = fr('<i>y</i>', '<i>x</i>');
const ZB = '<i>z</i>̅';
const CIS = 'cos <i>θ</i> + <i>i</i> sin <i>θ</i>';
const MB_A = `−${fr('<i>b</i>', '<i>a</i>')}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 352–358 ────────────────
  {
    n: '03',
    title: 'The Argand Plane and Polar Representation',
    kalam: 'Modulus = distance, argument = bearing.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Topics 01–02 treated complex numbers algebraically. Here they become <b>points and arrows in a plane</b>: the modulus (already defined in Topic 02) gains its geometric meaning as a length, and a new quantity, the argument, supplies direction. Together they give the polar form, the launchpad for rotation and De Moivre’s theorem.',
      },
      {
        t: 'p',
        html: '• <b>CBSE Boards:</b> Direct questions on writing a number in polar form <i>r</i>(cos <i>θ</i> + <i>i</i> sin <i>θ</i>), and on finding modulus and (principal) argument. The four-quadrant argument calculation is a standard 2–3 mark item (the book’s estimate from past papers, not official figures).<br>• <b>JEE Main:</b> Argument algebra, polar conversions, and simple De Moivre powers appear every year (the book’s estimate from past papers, not official figures).<br>• <b>JEE Advanced:</b> The geometric viewpoint (multiplication as rotation + scaling, loci via |<i>z</i> − <i>z</i><sub>0</sub>| and arg) underlies most of the hard problems (the book’s estimate from past papers, not official figures). Polar form is the single most leveraged idea in the chapter.',
      },
      {
        t: 'p',
        html: `Common trap: blindly returning tan<sup>−1</sup>(${YX}) without fixing the quadrant.`,
      },

      { t: 'part', title: 'Concept intuition (Indian-context analogies)' },
      {
        t: 'p',
        html: '<b>The Argand plane makes the “address” literal.</b> In Topic 01 we read <i>z</i> = <i>x</i> + <i>iy</i> as a grid address. The <b>Argand plane</b> (complex plane) simply draws it: the horizontal axis is real, the vertical axis is imaginary, and <i>z</i> is the point (<i>x</i>, <i>y</i>), or the arrow from the origin to that point.',
      },
      {
        t: 'p',
        html: '<b>Modulus = distance, argument = bearing.</b> Flying a kite from a Sankranti rooftop, two numbers fix the kite: the <b>length of string</b> <i>r</i> (how far: this is |<i>z</i>|) and the <b>angle</b> the string makes with the horizon <i>θ</i> (which way: this is arg <i>z</i>). An auto-rickshaw direction works the same way: “5 km at 30° north-of-east” is polar; “5 km east, then north a bit” is Cartesian. Same point, two descriptions.',
      },
      {
        t: 'p',
        html: '<b>Polar form is the bearing description.</b> Converting <i>x</i> + <i>iy</i> to <i>r</i>(cos <i>θ</i> + <i>i</i> sin <i>θ</i>) is just translating grid coordinates into distance-and-bearing. The conversion back uses <i>x</i> = <i>r</i> cos <i>θ</i>, <i>y</i> = <i>r</i> sin <i>θ</i>.',
      },
      {
        t: 'p',
        html: '<b>Multiplication is rotation.</b> Multiplying by a number of modulus <i>r</i> and argument <i>ϕ</i> <b>scales by <i>r</i> and rotates by <i>ϕ</i></b>. Multiplying by <i>i</i> (<i>r</i> = 1, <i>ϕ</i> = 90°) is a pure quarter-turn: exactly the picture from Topic 01, now made precise. Repeated rotation is De Moivre’s theorem.',
      },
      { t: 'fig', id: 'm11-04-fig-4.3' },

      { t: 'part', title: 'Key formulas and definitions (with validity / domain conditions)' },
      {
        t: 'p',
        html: '<b>Argand plane.</b> <i>z</i> = <i>x</i> + <i>iy</i> is represented by the point (<i>x</i>, <i>y</i>) (equivalently, the vector <i>OP⃗</i>). The horizontal axis is the <b>real axis</b>, the vertical the <b>imaginary axis</b>.',
      },
      {
        t: 'p',
        html: '<b>Modulus (geometric).</b> |<i>z</i>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) is the <b>distance of <i>P</i> from the origin</b>, |<i>z</i>| ≥ 0. (Algebraic properties were established in Topic 02.)',
      },
      {
        t: 'p',
        html: '<b>Argument / amplitude.</b> If <i>OP⃗</i> makes angle <i>θ</i> with the positive real axis, <i>θ</i> is an <b>argument</b> of <i>z</i>:',
      },
      {
        t: 'formula',
        kicker: 'Argument of <i>z</i>',
        main: `tan <i>θ</i> = ${YX}`,
        legend: [
          '<i>θ</i> = an argument of <i>z</i> (the angle of <i>OP⃗</i> with the positive real axis)',
          '<i>x</i> = the real part of <i>z</i>',
          '<i>y</i> = the imaginary part of <i>z</i>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• The argument is <b>many-valued</b>: if <i>θ</i> works, so does <i>θ</i> + 2<i>n</i>π, <i>n</i> ∈ ℤ. Any two arguments differ by a multiple of 2π.<br>• The <b>principal value</b> (amplitude), written arg <i>z</i>, is the unique <i>θ</i> with<br>−π < <i>θ</i> ≤ π.',
      },
      {
        t: 'p',
        html: `<b>Validity conditions.</b><br>• arg(0) is <b>undefined</b>: the origin has a modulus but no direction.<br>• The principal value must lie in (−π, π]; a value outside this range is not the principal argument.<br>• tan<sup>−1</sup>(${YX}) on a calculator returns an angle in (−${PI2}, ${PI2}) only: you <b>must</b> correct by quadrant.`,
      },
      {
        t: 'p',
        html: `<b>Finding the principal argument by quadrant.</b> Let <i>α</i> = tan<sup>−1</sup>|${YX}| be the acute reference angle. Then:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Quadrant of (<i>x</i>, <i>y</i>)', 'Signs', 'Principal arg <i>z</i>'],
        rows: [
          ['I', '<i>x</i> > 0, <i>y</i> > 0', '<i>α</i>'],
          ['II', '<i>x</i> < 0, <i>y</i> > 0', 'π − <i>α</i>'],
          ['III', '<i>x</i> < 0, <i>y</i> < 0', '−(π − <i>α</i>) = <i>α</i> − π'],
          ['IV', '<i>x</i> > 0, <i>y</i> < 0', '−<i>α</i>'],
        ],
      },
      {
        t: 'p',
        html: `Axis cases: arg <i>z</i> = 0 if <i>z</i> is real > 0; arg <i>z</i> = π if real < 0; arg <i>z</i> = ${PI2} if purely imaginary with <i>y</i> > 0; arg <i>z</i> = −${PI2} if <i>y</i> < 0.`,
      },
      { t: 'p', html: '<b>Polar (trigonometric) form.</b> With <i>r</i> = |<i>z</i>| and <i>θ</i> = arg <i>z</i>,' },
      {
        t: 'formula',
        kicker: 'Polar (trigonometric) form',
        main: `<i>z</i> = <i>r</i>(${CIS})<br>often written <i>z</i> = <i>r</i> cis <i>θ</i>`,
        legend: [
          '<i>z</i> = a non-zero complex number (<i>x</i> + <i>iy</i>)',
          '<i>r</i> = the modulus (|<i>z</i>|)',
          '<i>θ</i> = the argument (arg <i>z</i>)',
          '<i>x</i> = the real part (<i>r</i> cos <i>θ</i>)',
          '<i>y</i> = the imaginary part (<i>r</i> sin <i>θ</i>)',
          '<i>i</i> = the imaginary unit',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'where <i>x</i> = <i>r</i> cos <i>θ</i>, <i>y</i> = <i>r</i> sin <i>θ</i>. The standard form uses a + between cosine and sine; <i>r</i>(cos <i>θ</i> − <i>i</i> sin <i>θ</i>) is <b>not</b> standard polar: rewrite it as <i>r</i>(cos(−<i>θ</i>) + <i>i</i> sin(−<i>θ</i>)).',
      },
      { t: 'p', html: '<b>Argument algebra</b> (equalities hold up to multiples of 2π):' },
      {
        t: 'formula',
        kicker: 'Argument algebra (up to multiples of 2π)',
        main: `arg(<i>z</i><sub>1</sub><i>z</i><sub>2</sub>) = arg <i>z</i><sub>1</sub> + arg <i>z</i><sub>2</sub><br>arg(${fr('<i>z</i><sub>1</sub>', '<i>z</i><sub>2</sub>')}) = arg <i>z</i><sub>1</sub> − arg <i>z</i><sub>2</sub><br>arg(${ZB}) = −arg <i>z</i>`,
        legend: [
          '<i>z</i><sub>1</sub>, <i>z</i><sub>2</sub> = non-zero complex numbers',
          '<i>z</i> = a non-zero complex number',
          `${ZB} = the conjugate of <i>z</i>`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Conjugate in polar form.</b> ${ZB} = <i>r</i>(cos <i>θ</i> − <i>i</i> sin <i>θ</i>) = <i>r</i>(cos(−<i>θ</i>) + <i>i</i> sin(−<i>θ</i>)): same modulus, <b>negated</b> argument (<i>r</i>∠−<i>θ</i>).`,
      },
      {
        t: 'p',
        html: '<b>De Moivre’s theorem</b> (JEE-Advanced tier; beyond strict NCERT Class-11 scope). For integer <i>n</i>,',
      },
      {
        t: 'formula',
        kicker: 'De Moivre’s theorem',
        main: `(${CIS})<sup><i>n</i></sup> = cos <i>nθ</i> + <i>i</i> sin <i>nθ</i><br>so <i>z</i><sup><i>n</i></sup> = <i>r</i><sup><i>n</i></sup>(cos <i>nθ</i> + <i>i</i> sin <i>nθ</i>)`,
        legend: [
          '<i>n</i> = any integer',
          '<i>r</i> = the modulus of <i>z</i>',
          '<i>θ</i> = any real angle (an argument of <i>z</i>)',
          '<i>i</i> = the imaginary unit',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `For rational <i>n</i> = ${fr('<i>p</i>', '<i>q</i>')} (in lowest terms), cos <i>nθ</i> + <i>i</i> sin <i>nθ</i> is <b>one of</b> the <i>q</i> values of (${CIS})<sup><i>n</i></sup>.`,
      },
      {
        t: 'p',
        html: `<b>Cube roots of unity</b> (application of De Moivre). The roots of <i>z</i><sup>3</sup> = 1 are 1, <i>ω</i>, <i>ω</i><sup>2</sup> with<br><i>ω</i> = cos ${fr('2π', '3')} + <i>i</i> sin ${fr('2π', '3')}<br>= −${fr('1', '2')} + ${fr('√3', '2')}<i>i</i><br><i>ω</i><sup>3</sup> = 1<br>1 + <i>ω</i> + <i>ω</i><sup>2</sup> = 0`,
      },

      { t: 'part', title: 'Theorems, proofs and standard methods' },
      {
        t: 'p',
        html: `<b>Theorem 1 (Polar form exists for every <i>z</i> ≠ 0).</b> Any non-zero <i>z</i> = <i>x</i> + <i>iy</i> can be written as <i>r</i>(${CIS}) with <i>r</i> = |<i>z</i>| > 0 and some real <i>θ</i>. <b>Proof.</b> Set <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) > 0. Since (${fr('<i>x</i>', '<i>r</i>')})<sup>2</sup> + (${fr('<i>y</i>', '<i>r</i>')})<sup>2</sup> = 1, there is an angle <i>θ</i> with cos <i>θ</i> = ${fr('<i>x</i>', '<i>r</i>')}, sin <i>θ</i> = ${fr('<i>y</i>', '<i>r</i>')}. Then <i>r</i>(${CIS}) = <i>x</i> + <i>iy</i> = <i>z</i>. ■`,
      },
      {
        t: 'p',
        html: '<b>Theorem 2 (Multiplication = rotation + scaling).</b> If <i>z</i><sub>1</sub> = <i>r</i><sub>1</sub>(cos <i>θ</i><sub>1</sub> + <i>i</i> sin <i>θ</i><sub>1</sub>) and <i>z</i><sub>2</sub> = <i>r</i><sub>2</sub>(cos <i>θ</i><sub>2</sub> + <i>i</i> sin <i>θ</i><sub>2</sub>), then<br><i>z</i><sub>1</sub><i>z</i><sub>2</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>(cos(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>) + <i>i</i> sin(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>)).<br><b>Proof.</b> Multiply and group:<br><i>z</i><sub>1</sub><i>z</i><sub>2</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>[(cos <i>θ</i><sub>1</sub> cos <i>θ</i><sub>2</sub> − sin <i>θ</i><sub>1</sub> sin <i>θ</i><sub>2</sub>) + <i>i</i>(sin <i>θ</i><sub>1</sub> cos <i>θ</i><sub>2</sub> + cos <i>θ</i><sub>1</sub> sin <i>θ</i><sub>2</sub>)].<br>The bracketed real and imaginary parts are cos(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>) and sin(<i>θ</i><sub>1</sub> + <i>θ</i><sub>2</sub>) by the angle-sum identities. ■ So moduli <b>multiply</b> and arguments <b>add</b>: the algebraic root of “multiplication is rotation.”',
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (De Moivre, integer <i>n</i>).</b> (${CIS})<sup><i>n</i></sup> = cos <i>nθ</i> + <i>i</i> sin <i>nθ</i> for all <i>n</i> ∈ ℤ. <b>Proof (<i>n</i> ≥ 0, induction).</b> Base <i>n</i> = 0: both sides = 1. Assume true for <i>n</i> = <i>k</i>. Then by Theorem 2,<br>(${CIS})<sup><i>k</i>+1</sup><br>= (cos <i>kθ</i> + <i>i</i> sin <i>kθ</i>)(${CIS})<br>= cos(<i>k</i> + 1)<i>θ</i> + <i>i</i> sin(<i>k</i> + 1)<i>θ</i>.<br>For <i>n</i> < 0, write <i>n</i> = −<i>m</i> and use (${CIS})<sup>−1</sup> = cos <i>θ</i> − <i>i</i> sin <i>θ</i> = cos(−<i>θ</i>) + <i>i</i> sin(−<i>θ</i>). ■`,
      },
      {
        t: 'p',
        html: `<b>Standard Method: Cartesian → polar.</b> (1) Compute <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>). (2) Compute the reference angle <i>α</i> = tan<sup>−1</sup>|${YX}|. (3) Place <i>θ</i> in the correct quadrant using the table. (4) Write <i>z</i> = <i>r</i>(${CIS}). The quadrant step (3) is where most marks are lost.`,
      },

      { t: 'part', title: 'Worked examples (CBSE → JEE Main → JEE Advanced)' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Find the modulus and principal argument of <i>z</i> = 1 + <i>i</i>, and write it in polar form.',
        steps: [
          `<i>r</i> = √(1<sup>2</sup> + 1<sup>2</sup>) = √2; the point is in Q1 with <i>α</i> = tan<sup>−1</sup> 1 = ${PI4}, so arg <i>z</i> = ${PI4}.`,
          `Polar: <i>z</i> = √2 (cos ${PI4} + <i>i</i> sin ${PI4}).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Express <i>z</i> = −1 + <i>i</i> in polar form.',
        steps: [
          `<i>r</i> = √2; point in Q2, <i>α</i> = tan<sup>−1</sup> 1 = ${PI4}, so arg <i>z</i> = π − ${PI4} = ${fr('3π', '4')}.`,
          `Polar: <i>z</i> = √2 (cos ${fr('3π', '4')} + <i>i</i> sin ${fr('3π', '4')}).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Find the modulus and principal argument of each of ±1 ± <i>i</i>√3.',
        steps: [
          `All four have <i>r</i> = √(1 + 3) = 2 and reference angle <i>α</i> = tan<sup>−1</sup> √3 = ${PI3}. By quadrant:`,
          `arg(1 + <i>i</i>√3) = ${PI3},<br>arg(−1 + <i>i</i>√3) = ${fr('2π', '3')},<br>arg(−1 − <i>i</i>√3) = −${fr('2π', '3')},<br>arg(1 − <i>i</i>√3) = −${PI3}.`,
          'This single example exercises every row of the quadrant table.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Write the polar form of <i>z</i> = −√3 + <i>i</i> and hence find <i>z</i><sup>6</sup>.',
        steps: [
          `<i>r</i> = √(3 + 1) = 2; <i>α</i> = tan<sup>−1</sup> ${fr('1', '√3')} = ${PI6}, so arg <i>z</i> = π − ${PI6} = ${fr('5π', '6')}. Thus <i>z</i> = 2 (cos ${fr('5π', '6')} + <i>i</i> sin ${fr('5π', '6')}).`,
          `By De Moivre,<br><i>z</i><sup>6</sup> = 2<sup>6</sup> (cos 6 · ${fr('5π', '6')} + <i>i</i> sin 6 · ${fr('5π', '6')})<br>= 64(cos 5π + <i>i</i> sin 5π)<br>= 64(−1 + 0<i>i</i>) = −64.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Use De Moivre to evaluate (1 + <i>i</i>)<sup>20</sup>.',
        steps: [
          `1 + <i>i</i> = √2 (cos ${PI4} + <i>i</i> sin ${PI4}), so<br>(1 + <i>i</i>)<sup>20</sup> = (√2)<sup>20</sup> (cos ${fr('20π', '4')} + <i>i</i> sin ${fr('20π', '4')})<br>= 2<sup>10</sup>(cos 5π + <i>i</i> sin 5π)<br>= 1024(−1) = −1024.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Show that 1 + <i>ω</i> + <i>ω</i><sup>2</sup> = 0 for the cube roots of unity, and simplify (1 + <i>ω</i>)<sup>3</sup>.',
        steps: [
          'The roots of <i>z</i><sup>3</sup> − 1 = (<i>z</i> − 1)(<i>z</i><sup>2</sup> + <i>z</i> + 1) = 0 are 1 and the roots of <i>z</i><sup>2</sup> + <i>z</i> + 1 = 0, namely <i>ω</i>, <i>ω</i><sup>2</sup>. By the sum of roots of <i>z</i><sup>2</sup> + <i>z</i> + 1, <i>ω</i> + <i>ω</i><sup>2</sup> = −1, hence 1 + <i>ω</i> + <i>ω</i><sup>2</sup> = 0.',
          'Then 1 + <i>ω</i> = −<i>ω</i><sup>2</sup>, so<br>(1 + <i>ω</i>)<sup>3</sup> = (−<i>ω</i><sup>2</sup>)<sup>3</sup> = −<i>ω</i><sup>6</sup> = −(<i>ω</i><sup>3</sup>)<sup>2</sup> = −1. ■',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find modulus and principal argument: (a) −√3 − <i>i</i>, (b) −2<i>i</i>, (c) 3.',
            a: `(a) <i>r</i> = 2, Q3, <i>α</i> = ${PI6}, arg = −${fr('5π', '6')}; (b) <i>r</i> = 2, arg = −${PI2}; (c) <i>r</i> = 3, arg = 0.`,
          },
          {
            q: 'Express in polar form: (a) 1 − <i>i</i>, (b) −3.',
            a: `(a) √2 (cos(−${PI4}) + <i>i</i> sin(−${PI4})); (b) 3(cos π + <i>i</i> sin π).`,
          },
          {
            q: `Convert <i>z</i> = 4 (cos ${fr('2π', '3')} + <i>i</i> sin ${fr('2π', '3')}) to <i>a</i> + <i>ib</i> form.`,
            a: `4 (−${fr('1', '2')} + <i>i</i>${fr('√3', '2')}) = −2 + 2√3<i>i</i>.`,
          },
          {
            q: `Using De Moivre, evaluate (cos ${PI3} + <i>i</i> sin ${PI3})<sup>9</sup>.`,
            a: 'cos 3π + <i>i</i> sin 3π = −1.',
          },
          {
            q: `Find the principal argument of ${fr('1 + <i>i</i>', '1 − <i>i</i>')}.`,
            a: `${fr('1 + <i>i</i>', '1 − <i>i</i>')} = <i>i</i>, so principal argument = ${PI2}.`,
          },
          {
            q: `If <i>z</i> = <i>r</i>(${CIS}), write ${ZB} and ${fr('1', '<i>z</i>')} in polar form.`,
            a: `${ZB} = <i>r</i>(cos <i>θ</i> − <i>i</i> sin <i>θ</i>) = <i>r</i>(cos(−<i>θ</i>) + <i>i</i> sin(−<i>θ</i>));<br>${fr('1', '<i>z</i>')} = ${fr('1', '<i>r</i>')}(cos(−<i>θ</i>) + <i>i</i> sin(−<i>θ</i>)).`,
          },
          {
            q: 'Evaluate (1 + <i>i</i>√3)<sup>6</sup> via polar form.',
            a: `<i>r</i> = 2, arg = ${PI3}; (2)<sup>6</sup>(cos 2π + <i>i</i> sin 2π) = 64.`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'The principal argument of <i>z</i> = −1 − <i>i</i> is:',
        opts: [
          { label: PI4, nudge: '<b>(A)</b> ignores the quadrant.' },
          { label: fr('5π', '4'), nudge: '<b>(B)</b> is outside (−π, π].' },
          { label: `−${fr('3π', '4')}`, nudge: null },
          { label: fr('3π', '4'), nudge: '<b>(D)</b> is the quadrant II answer.' },
        ],
        correct: 2,
        solution: `Quadrant III, <i>α</i> = ${PI4}, arg = <i>α</i> − π = −${fr('3π', '4')}.`,
      },
      {
        t: 'mcq',
        q: 'The polar form of −1 is:',
        opts: [
          { label: 'cos 0 + <i>i</i> sin 0', nudge: '<b>(A)</b> is cos 0 + <i>i</i> sin 0 = 1, argument 0, not −1.' },
          { label: 'cos π + <i>i</i> sin π', nudge: null },
          {
            label: `cos ${PI2} + <i>i</i> sin ${PI2}`,
            nudge: `<b>(C)</b> is cos ${PI2} + <i>i</i> sin ${PI2} = <i>i</i>, not −1.`,
          },
          { label: '−(cos 0 + <i>i</i> sin 0)', nudge: '<b>(D)</b> is not in standard polar form.' },
        ],
        correct: 1,
        solution: '|−1| = 1, arg = π.',
      },
      {
        t: 'mcq',
        q: 'arg(0) is:',
        opts: [
          { label: '0', nudge: '<b>(A)</b> is the argument of a positive real number; 0 has no direction.' },
          { label: PI2, nudge: '<b>(B)</b> is the argument of a positive imaginary number; 0 has no direction.' },
          { label: 'π', nudge: '<b>(C)</b> is the argument of a negative real number; 0 has no direction.' },
          { label: 'undefined', nudge: null },
        ],
        correct: 3,
        solution: '|0| = 0, and no angle points from the origin to itself: arg(0) is undefined.',
      },
      {
        t: 'mcq',
        q: `(cos ${PI6} + <i>i</i> sin ${PI6})<sup>6</sup> =`,
        opts: [
          {
            label: '1',
            nudge: `<b>(A)</b> keeps only the modulus, 1<sup>6</sup> = 1, and forgets that the argument becomes 6 · ${PI6} = π.`,
          },
          { label: '−1', nudge: null },
          { label: '<i>i</i>', nudge: `<b>(C)</b> is the point at argument ${PI2}, but 6 · ${PI6} = π.` },
          { label: `${fr('√3', '2')} + ${fr('<i>i</i>', '2')}`, nudge: '<b>(D)</b> is the un-powered base.' },
        ],
        correct: 1,
        solution: 'De Moivre: cos π + <i>i</i> sin π = −1.',
      },
      {
        t: 'mcq',
        q: `If <i>z</i> = <i>r</i>(${CIS}), then ${ZB} =`,
        opts: [
          { label: `<i>r</i>(${CIS})`, nudge: '<b>(A)</b> is <i>z</i> itself; the conjugate negates the argument.' },
          { label: `−<i>r</i>(${CIS})`, nudge: '<b>(B)</b> is −<i>z</i>.' },
          { label: '<i>r</i>(cos <i>θ</i> − <i>i</i> sin <i>θ</i>)', nudge: null },
          {
            label: `${fr('1', '<i>r</i>')}(${CIS})`,
            nudge: `<b>(D)</b> is ${fr('1', ZB)}, the conjugate’s reciprocal, not ${fr('1', '<i>z</i>')} = ${fr('1', '<i>r</i>')}(cos <i>θ</i> − <i>i</i> sin <i>θ</i>): the sin <i>θ</i> sign is flipped.`,
          },
        ],
        correct: 2,
        solution: 'Conjugate negates the argument: <i>r</i>∠−<i>θ</i>.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Reporting tan<sup>−1</sup>(${YX}) without fixing the quadrant.</b> The calculator value lives in (−${PI2}, ${PI2}); always place <i>θ</i> by quadrant.`,
          '<b>Principal value outside (−π, π].</b> Reduce by adding/subtracting 2π.',
          '<b>Assigning an argument to 0.</b> arg(0) is undefined.',
          '<b>Calling <i>r</i>(cos <i>θ</i> − <i>i</i> sin <i>θ</i>) “polar form.”</b> Standard polar uses +; convert via cos(−<i>θ</i>), sin(−<i>θ</i>).',
          '<b>Mixing degrees and radians</b> inside De Moivre.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Sketch the point first: the quadrant is then obvious and the argument almost writes itself.<br>• Multiplication adds arguments and multiplies moduli; division subtracts and divides. Use this instead of expanding.<br>• For any integer power, go to polar form and apply De Moivre: far faster than the binomial theorem (the fourth and fifth worked examples of this topic; the seventh practice question).<br>• Memorise 1 + <i>i</i> = √2∠${PI4}, 1 + <i>i</i>√3 = 2∠${PI3}, √3 + <i>i</i> = 2∠${PI6}: they recur constantly.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Argand plane',
            note: '<i>z</i> = <i>x</i> + <i>iy</i> ↔ (<i>x</i>, <i>y</i>); real axis horizontal, imaginary vertical',
          },
          { f: '|<i>z</i>| = <i>r</i> = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) = distance from origin', note: '' },
          { f: 'arg <i>z</i> = <i>θ</i>, principal value in (−π, π]; arg(0) undefined', note: '' },
          {
            f: `Reference angle <i>α</i> = tan<sup>−1</sup>|${YX}|; then Q1 → <i>α</i>, Q2 → π − <i>α</i>, Q3 → <i>α</i> − π, Q4 → −<i>α</i>`,
            note: '',
          },
          {
            f: 'Polar',
            note: `<i>z</i> = <i>r</i>(${CIS}) = <i>r</i> cis <i>θ</i>; <i>x</i> = <i>r</i> cos <i>θ</i>, <i>y</i> = <i>r</i> sin <i>θ</i>`,
          },
          {
            f: `arg(<i>z</i><sub>1</sub><i>z</i><sub>2</sub>) = arg <i>z</i><sub>1</sub> + arg <i>z</i><sub>2</sub>; arg(${fr('<i>z</i><sub>1</sub>', '<i>z</i><sub>2</sub>')}) = arg <i>z</i><sub>1</sub> − arg <i>z</i><sub>2</sub>; arg ${ZB} = −arg <i>z</i>`,
            note: '',
          },
          {
            f: `${ZB} = <i>r</i>∠(−<i>θ</i>); ${fr('1', '<i>z</i>')} = ${fr('1', '<i>r</i>')}∠(−<i>θ</i>)`,
            note: '',
          },
          {
            f: 'De Moivre',
            note: '<i>z</i><sup><i>n</i></sup> = <i>r</i><sup><i>n</i></sup>(cos <i>nθ</i> + <i>i</i> sin <i>nθ</i>), <i>n</i> ∈ ℤ',
          },
          {
            f: 'Cube roots of unity',
            note: '1, <i>ω</i>, <i>ω</i><sup>2</sup>; <i>ω</i><sup>3</sup> = 1; 1 + <i>ω</i> + <i>ω</i><sup>2</sup> = 0',
          },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 359–365 ────────────────
  {
    n: '04',
    title: 'Quadratic Equations with Complex Roots',
    kalam: 'Every quadratic now has two roots, counted with multiplicity.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Topics 01–03 built complex numbers (algebra, modulus/conjugate, polar). Here they pay off: the quadratic formula, which “failed” whenever the discriminant was negative, now succeeds for every quadratic; the missing roots were complex all along.',
      },
      {
        t: 'p',
        html: '• <b>CBSE Boards:</b> The core skill is solving <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 with real coefficients when the discriminant is negative, giving a complex-conjugate pair. Staples like <i>x</i><sup>2</sup> + 1 = 0 and <i>x</i><sup>2</sup> + <i>x</i> + 1 = 0 are exam-standard (the book’s estimate from past papers, not official figures).<br>• <b>JEE Main:</b> Forming a quadratic from a given complex root, the conjugate-root theorem, and finding the square root of a complex number all appear regularly (the book’s estimate from past papers, not official figures).<br>• <b>JEE Advanced:</b> Quadratics with <b>complex coefficients</b> (whose roots need not be a conjugate pair) and Vieta-based manipulation are the harder targets.',
      },
      {
        t: 'p',
        html: 'Common traps: misreading the sign of the discriminant, and assuming roots come in conjugate pairs even when the coefficients are not real. Note also that √(<i>D</i>) = <i>i</i>·√(|<i>D</i>|) when <i>D</i> < 0.',
      },

      { t: 'part', title: 'Concept intuition (Indian-context analogies)' },
      {
        t: 'p',
        html: '<b>Every quadratic now has exactly two roots (a repeated root counted twice).</b> Over the reals, <i>x</i><sup>2</sup> + 1 = 0 had none. Over ℂ it has two, ±<i>i</i>. This is the first glimpse of a deep fact (the Fundamental Theorem of Algebra): a polynomial of degree <i>n</i> ≥ 1 has exactly <i>n</i> roots, counted with multiplicity, once you allow complex numbers. Complex numbers make this true.',
      },
      {
        t: 'p',
        html: '<b>The discriminant is a weather forecast.</b> Before solving a quadratic with real coefficients, <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i> tells you what kind of roots to expect, the way a monsoon forecast tells you whether to carry an umbrella: <i>D</i> > 0 → two distinct real roots (clear skies, both on the number line); <i>D</i> = 0 → one repeated real root (borderline); <i>D</i> < 0 → two complex-conjugate roots (the roots have “left the real line” into the plane).',
      },
      {
        t: 'p',
        html: '<b>Complex roots travel as mirror-image pairs, but only with real coefficients.</b> Recall from Topic 02 that the conjugate is a reflection across the real axis. When a quadratic has real coefficients and a complex root <i>p</i> + <i>iq</i>, its mirror image <i>p</i> − <i>iq</i> is forced to be a root too. Change the coefficients to complex and this symmetry breaks: the roots can be any two complex numbers.',
      },
      { t: 'fig', id: 'm11-04-fig-4.4' },

      { t: 'part', title: 'Key formulas and definitions (with validity / domain conditions)' },
      {
        t: 'p',
        html: '<b>Quadratic equation and formula.</b> For <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 with <i>a</i> ≠ 0,',
      },
      {
        t: 'formula',
        kicker: 'Quadratic formula',
        main: `<i>x</i> = ${fr('−<i>b</i> ± √<i>D</i>', '2<i>a</i>')}<br><i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i>`,
        legend: [
          '<i>a</i>, <i>b</i>, <i>c</i> = the coefficients (<i>a</i> ≠ 0)',
          '<i>x</i> = a root',
          '<i>D</i> = the discriminant',
        ],
        note: null,
      },
      { t: 'p', html: '<b>Nature of roots (real coefficients <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ):</b>' },
      {
        t: 'table',
        title: null,
        head: ['Discriminant', 'Roots'],
        rows: [
          ['<i>D</i> > 0', 'real and distinct'],
          ['<i>D</i> = 0', `real and equal (repeated): <i>x</i> = −${fr('<i>b</i>', '2<i>a</i>')}`],
          ['<i>D</i> < 0', '<b>complex conjugate pair</b> (non-real)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Validity condition.</b> This table assumes <b>real</b> coefficients. If <i>a</i>, <i>b</i>, <i>c</i> are themselves complex, the “<i>D</i> < 0” classification is meaningless and the roots need not be conjugates.',
      },
      {
        t: 'p',
        html: '<b>Complex roots when <i>D</i> < 0 (real coefficients).</b> Since √<i>D</i> = √(−(4<i>ac</i> − <i>b</i><sup>2</sup>)) = <i>i</i>√(4<i>ac</i> − <i>b</i><sup>2</sup>),',
      },
      {
        t: 'formula',
        kicker: 'Complex roots when <i>D</i> < 0 (real coefficients)',
        main: `<i>x</i> = ${fr('−<i>b</i> ± <i>i</i>√(4<i>ac</i> − <i>b</i><sup>2</sup>)', '2<i>a</i>')}   (<i>D</i> < 0)`,
        legend: [
          '<i>a</i>, <i>b</i>, <i>c</i> = the real coefficients (<i>a</i> ≠ 0)',
          '<i>D</i> = the discriminant (<i>b</i><sup>2</sup> − 4<i>ac</i>)',
          '<i>x</i> = a root',
          '<i>i</i> = the imaginary unit',
        ],
        note: null,
      },
      { t: 'p', html: 'The two roots are conjugates of each other.' },
      {
        t: 'p',
        html: '<b>Conjugate-root theorem.</b> If a quadratic (indeed any polynomial) has <b>real coefficients</b> and <i>p</i> + <i>iq</i> (<i>q</i> ≠ 0) is a root, then <i>p</i> − <i>iq</i> is also a root.',
      },
      { t: 'p', html: 'Holds <b>only</b> for real coefficients. With complex coefficients it need not hold.' },
      {
        t: 'p',
        html: '<b>Relations between roots and coefficients (Vieta).</b> If <i>α</i>, <i>β</i> are the roots of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0,',
      },
      {
        t: 'formula',
        kicker: 'Relations between roots and coefficients (Vieta)',
        main: `<i>α</i> + <i>β</i> = ${MB_A}<br><i>αβ</i> = ${fr('<i>c</i>', '<i>a</i>')}`,
        legend: [
          '<i>α</i>, <i>β</i> = the roots',
          '<i>a</i>, <i>b</i>, <i>c</i> = the coefficients of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0',
        ],
        note: null,
      },
      { t: 'p', html: 'Mind the <b>minus sign</b> on the sum.' },
      { t: 'p', html: '<b>Forming a quadratic from its roots.</b>' },
      {
        t: 'formula',
        kicker: 'Forming a quadratic from its roots',
        main: '<i>x</i><sup>2</sup> − (<i>α</i> + <i>β</i>)<i>x</i> + <i>αβ</i> = 0<br>i.e. <i>x</i><sup>2</sup> − (sum)<i>x</i> + (product) = 0',
        legend: ['<i>α</i>, <i>β</i> = the given roots', '<i>x</i> = the variable'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Square root of a complex number.</b> To find √(<i>a</i> + <i>ib</i>) = <i>x</i> + <i>iy</i>, square and equate parts:',
      },
      {
        t: 'formula',
        kicker: 'Square root of a complex number',
        main: `<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = <i>a</i><br>2<i>xy</i> = <i>b</i><br><i>x</i><sup>2</sup> = ${fr('|<i>z</i>| + <i>a</i>', '2')}<br><i>y</i><sup>2</sup> = ${fr('|<i>z</i>| − <i>a</i>', '2')}`,
        legend: [
          '<i>a</i> + <i>ib</i> = the given complex number (<i>a</i>, <i>b</i> real)',
          '<i>x</i> + <i>iy</i> = a square root (<i>x</i>, <i>y</i> real)',
          '|<i>z</i>| = the modulus of <i>a</i> + <i>ib</i> (√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>))',
          '<i>i</i> = the imaginary unit',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `which gives <i>x</i><sup>2</sup> = ${fr('|<i>z</i>| + <i>a</i>', '2')}, <i>y</i><sup>2</sup> = ${fr('|<i>z</i>| − <i>a</i>', '2')} with |<i>z</i>| = √(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), and the sign of <i>xy</i> matching the sign of <i>b</i>. Every non-zero complex number has exactly <b>two</b> square roots, ±(<i>x</i> + <i>iy</i>).`,
      },

      { t: 'part', title: 'Theorems, proofs and standard methods' },
      {
        t: 'p',
        html: `<b>Theorem 1 (Quadratic formula).</b> The roots of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 (<i>a</i> ≠ 0) are ${fr('−<i>b</i> ± √(<i>b</i><sup>2</sup> − 4<i>ac</i>)', '2<i>a</i>')}. <b>Proof (completing the square).</b> Divide by <i>a</i> and complete the square:<br><i>x</i><sup>2</sup> + ${fr('<i>b</i>', '<i>a</i>')}<i>x</i> + ${fr('<i>c</i>', '<i>a</i>')} = 0<br>⇒ (<i>x</i> + ${fr('<i>b</i>', '2<i>a</i>')})<sup>2</sup> = ${fr('<i>b</i><sup>2</sup> − 4<i>ac</i>', '4<i>a</i><sup>2</sup>')}<br>⇒ <i>x</i> + ${fr('<i>b</i>', '2<i>a</i>')} = ±${fr('√(<i>b</i><sup>2</sup> − 4<i>ac</i>)', '2<i>a</i>')}.<br>Rearranging gives the formula. Crucially, the square root is now defined for <b>every</b> value of <i>b</i><sup>2</sup> − 4<i>ac</i>, real or complex, so the formula yields two roots in all cases (equal when <i>b</i><sup>2</sup> − 4<i>ac</i> = 0). ■`,
      },
      {
        t: 'p',
        html: '<b>Theorem 2 (Conjugate-root theorem for real coefficients).</b> If <i>p</i> + <i>iq</i> is a root of <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0 with <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ, then <i>p</i> − <i>iq</i> is also a root. <b>Proof.</b> Suppose <i>az</i><sup>2</sup> + <i>bz</i> + <i>c</i> = 0 with <i>z</i> = <i>p</i> + <i>iq</i>. Take the conjugate of the whole equation. Since <i>a</i>, <i>b</i>, <i>c</i> are real, <i>a</i>̅ = <i>a</i> etc., and conjugation distributes over sums and products (Topic 02):<br><i>a</i>̅<i>z</i>̅<sup>2̅</sup> ̅+̅ ̅<i>b</i>̅<i>z</i>̅ ̅+̅ ̅<i>c</i>̅ = <i>az</i>̅<sup>2</sup> + <i>bz</i>̅ + <i>c</i> = 0̅ = 0.<br>Hence <i>z</i>̅ = <i>p</i> − <i>iq</i> also satisfies the equation. ■ The proof uses <i>a</i>̅ = <i>a</i>: exactly where real coefficients are required, and exactly why the theorem need not hold otherwise.',
      },
      {
        t: 'p',
        html: `<b>Standard Method: Square root of a complex number.</b> To solve, say, √(3 + 4<i>i</i>): set √(3 + 4<i>i</i>) = <i>x</i> + <i>iy</i>, so <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = 3 and 2<i>xy</i> = 4. With |3 + 4<i>i</i>| = 5, get <i>x</i><sup>2</sup> = ${fr('5 + 3', '2')} = 4, <i>y</i><sup>2</sup> = ${fr('5 − 3', '2')} = 1, and <i>xy</i> > 0 (since <i>b</i> = 4 > 0), giving ±(2 + <i>i</i>). This method is what makes the quadratic formula usable when <i>D</i> is complex.`,
      },

      { t: 'part', title: 'Worked examples (CBSE → JEE Main → JEE Advanced)' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Solve <i>x</i><sup>2</sup> + 1 = 0 and <i>x</i><sup>2</sup> + <i>x</i> + 1 = 0.',
        steps: [
          '<i>x</i><sup>2</sup> + 1 = 0 ⇒ <i>x</i><sup>2</sup> = −1 ⇒ <i>x</i> = ±<i>i</i>.',
          `For <i>x</i><sup>2</sup> + <i>x</i> + 1 = 0: <i>D</i> = 1 − 4 = −3 < 0, so <i>x</i> = ${fr('−1 ± <i>i</i>√3', '2')}: the complex cube roots of unity <i>ω</i>, <i>ω</i><sup>2</sup> from Topic 03.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Solve √2<i>x</i><sup>2</sup> + <i>x</i> + √2 = 0.',
        steps: [
          `<i>D</i> = 1 − 4(√2)(√2) = 1 − 8 = −7 < 0, so <i>x</i> = ${fr('−1 ± <i>i</i>√7', '2√2')}. The roots are a conjugate pair.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Form a quadratic with real coefficients, one of whose roots is 2 − 3<i>i</i>.',
        steps: [
          'By the conjugate-root theorem the other root is 2 + 3<i>i</i>. Sum = 4, product = (2 − 3<i>i</i>)(2 + 3<i>i</i>) = 4 + 9 = 13. Hence <i>x</i><sup>2</sup> − 4<i>x</i> + 13 = 0.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Find √(−15 − 8<i>i</i>).',
        steps: [
          'Let √(−15 − 8<i>i</i>) = <i>x</i> + <i>iy</i>: <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = −15, 2<i>xy</i> = −8.',
          `With |−15 − 8<i>i</i>| = √(225 + 64) = 17, <i>x</i><sup>2</sup> = ${fr('17 − 15', '2')} = 1, <i>y</i><sup>2</sup> = ${fr('17 + 15', '2')} = 16, and <i>xy</i> < 0. So √(−15 − 8<i>i</i>) = ±(1 − 4<i>i</i>).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Solve <i>x</i><sup>2</sup> − (3 + <i>i</i>)<i>x</i> + (2 + <i>i</i>) = 0 and verify the roots are not conjugates.',
        steps: [
          '<i>D</i> = (3 + <i>i</i>)<sup>2</sup> − 4(2 + <i>i</i>)<br>= (8 + 6<i>i</i>) − (8 + 4<i>i</i>) = 2<i>i</i>.',
          'Now √(2<i>i</i>): <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = 0, 2<i>xy</i> = 2, |2<i>i</i>| = 2, so <i>x</i><sup>2</sup> = <i>y</i><sup>2</sup> = 1, <i>xy</i> > 0 ⇒ √(2<i>i</i>) = ±(1 + <i>i</i>).',
          `Then<br><i>x</i> = ${fr('(3 + <i>i</i>) ± (1 + <i>i</i>)', '2')} ⇒ <i>x</i> = 2 + <i>i</i> or <i>x</i> = 1.`,
          'The roots 2 + <i>i</i> and 1 are <b>not</b> conjugates, consistent with the coefficients being complex, where the conjugate-root theorem does not apply. (<b>Check:</b> sum = 3 + <i>i</i>, product = 2 + <i>i</i>. ✓)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'State the nature of the roots: (a) <i>x</i><sup>2</sup> − 4<i>x</i> + 5 = 0, (b) 2<i>x</i><sup>2</sup> − 3<i>x</i> + 1 = 0, (c) <i>x</i><sup>2</sup> − 6<i>x</i> + 9 = 0.',
            a: '(a) <i>D</i> = −4 < 0, complex conjugate; (b) <i>D</i> = 1 > 0, real distinct; (c) <i>D</i> = 0, real equal.',
          },
          {
            q: 'Solve <i>x</i><sup>2</sup> − 2<i>x</i> + 5 = 0.',
            a: `<i>D</i> = 4 − 20 = −16, <i>x</i> = ${fr('2 ± 4<i>i</i>', '2')} = 1 ± 2<i>i</i>.`,
          },
          {
            q: `Solve 3<i>x</i><sup>2</sup> − 4<i>x</i> + ${fr('20', '3')} = 0.`,
            a: `<i>D</i> = 16 − 80 = −64, <i>x</i> = ${fr('4 ± 8<i>i</i>', '6')} = ${fr('2 ± 4<i>i</i>', '3')}.`,
          },
          {
            q: 'Form a quadratic with real coefficients one of whose roots is −1 + <i>i</i>√2.',
            a: 'Other root −1 − <i>i</i>√2; sum = −2, product = 1 + 2 = 3; <i>x</i><sup>2</sup> + 2<i>x</i> + 3 = 0.',
          },
          {
            q: 'Find √(7 + 24<i>i</i>).',
            a: '<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = 7, 2<i>xy</i> = 24, |<i>z</i>| = 25: <i>x</i><sup>2</sup> = 16, <i>y</i><sup>2</sup> = 9, <i>xy</i> > 0 ⇒ ±(4 + 3<i>i</i>).',
          },
          {
            q: 'If <i>α</i>, <i>β</i> are the roots of <i>x</i><sup>2</sup> + 2<i>x</i> + 5 = 0, find <i>α</i> + <i>β</i> and <i>αβ</i>, and confirm they are conjugates.',
            a: '<i>α</i> + <i>β</i> = −2, <i>αβ</i> = 5; roots −1 ± 2<i>i</i>, a conjugate pair (real coefficients).',
          },
          {
            q: 'Solve <i>ix</i><sup>2</sup> − 2<i>x</i> + (2 − <i>i</i>) = 0 (complex coefficients).',
            a: `<i>D</i> = 4 − 4<i>i</i>(2 − <i>i</i>)<br>= 4 − 8<i>i</i> + 4<i>i</i><sup>2</sup> = −8<i>i</i>;<br>√(−8<i>i</i>) = ±(2 − 2<i>i</i>);<br><i>x</i> = ${fr('2 ± (2 − 2<i>i</i>)', '2<i>i</i>')}, giving <i>x</i> = ${fr('4 − 2<i>i</i>', '2<i>i</i>')} = −1 − 2<i>i</i> or <i>x</i> = ${fr('2<i>i</i>', '2<i>i</i>')} = 1. (Not conjugates.)`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'The roots of <i>x</i><sup>2</sup> − 2<i>x</i> + 2 = 0 are:',
        opts: [
          { label: '1 ± <i>i</i>', nudge: null },
          {
            label: '−1 ± <i>i</i>',
            nudge: '<b>(B)</b> has the wrong sign on the real part: these are the roots of <i>x</i><sup>2</sup> + 2<i>x</i> + 2 = 0.',
          },
          { label: '2 ± <i>i</i>', nudge: `<b>(C)</b> halves only the imaginary part: ${fr('2 ± 2<i>i</i>', '2')} = 1 ± <i>i</i>.` },
          { label: 'real', nudge: '<b>(D)</b> misreads <i>D</i>.' },
        ],
        correct: 0,
        solution: `<i>D</i> = 4 − 8 = −4, <i>x</i> = ${fr('2 ± 2<i>i</i>', '2')} = 1 ± <i>i</i>.`,
      },
      {
        t: 'mcq',
        q: 'A quadratic with real coefficients has one root 3 + 4<i>i</i>. Its other root is:',
        opts: [
          { label: '3 + 4<i>i</i>', nudge: '<b>(A)</b> repeats the given root; the other root is its conjugate.' },
          { label: '−3 − 4<i>i</i>', nudge: '<b>(B)</b> negates instead of conjugating.' },
          { label: '3 − 4<i>i</i>', nudge: null },
          { label: '4 + 3<i>i</i>', nudge: '<b>(D)</b> swaps the real and imaginary parts; that is not the conjugate.' },
        ],
        correct: 2,
        solution: 'With real coefficients, non-real roots come in conjugate pairs, so the other root is 3 − 4<i>i</i>.',
      },
      {
        t: 'mcq',
        q: 'For <i>x</i><sup>2</sup> − (2 + <i>i</i>)<i>x</i> + (2<i>i</i>) = 0 with <b>complex</b> coefficients, the roots:',
        opts: [
          {
            label: 'must be conjugates',
            nudge: '<b>(A)</b> applies the conjugate-root theorem, which needs real coefficients; here the roots are 2 and <i>i</i>.',
          },
          { label: 'need not be conjugates', nudge: null },
          {
            label: 'are always real',
            nudge: '<b>(C)</b> fails: <i>i</i> is a root, since <i>i</i><sup>2</sup> − (2 + <i>i</i>)<i>i</i> + 2<i>i</i> = 0.',
          },
          {
            label: 'are always equal',
            nudge: '<b>(D)</b> fails: <i>D</i> = (2 + <i>i</i>)<sup>2</sup> − 8<i>i</i> = 3 − 4<i>i</i> ≠ 0.',
          },
        ],
        correct: 1,
        solution:
          'The conjugate-root theorem needs real coefficients; here the roots are 2 and <i>i</i> (sum 2 + <i>i</i>, product 2<i>i</i>), not conjugates.',
      },
      {
        t: 'mcq',
        q: 'If <i>α</i>, <i>β</i> are roots of <i>x</i><sup>2</sup> + <i>px</i> + <i>q</i> = 0, then <i>α</i> + <i>β</i> =',
        opts: [
          { label: '<i>p</i>', nudge: '<b>(A)</b> drops the sign.' },
          { label: '−<i>p</i>', nudge: null },
          { label: '<i>q</i>', nudge: '<b>(C)</b> is the product <i>αβ</i>, not the sum.' },
          { label: '−<i>q</i>', nudge: '<b>(D)</b> is minus the product; the sum is −<i>p</i>.' },
        ],
        correct: 1,
        solution: `<i>α</i> + <i>β</i> = ${MB_A} = −<i>p</i>.`,
      },
      {
        t: 'mcq',
        q: '√(−5 + 12<i>i</i>) =',
        opts: [
          { label: '±(2 + 3<i>i</i>)', nudge: null },
          { label: '±(3 + 2<i>i</i>)', nudge: '<b>(B)</b> swaps <i>x</i>, <i>y</i>.' },
          {
            label: '±(2 − 3<i>i</i>)',
            nudge: '<b>(C)</b> takes the wrong sign branch: (2 − 3<i>i</i>)<sup>2</sup> = −5 − 12<i>i</i>; <i>b</i> = 12 > 0 needs <i>xy</i> > 0.',
          },
          { label: '±(3 − 2<i>i</i>)', nudge: '<b>(D)</b> swaps <i>x</i>, <i>y</i> and the sign: (3 − 2<i>i</i>)<sup>2</sup> = 5 − 12<i>i</i>.' },
        ],
        correct: 0,
        solution:
          '<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = −5, 2<i>xy</i> = 12, |<i>z</i>| = 13: <i>x</i><sup>2</sup> = 4, <i>y</i><sup>2</sup> = 9, <i>xy</i> > 0 ⇒ ±(2 + 3<i>i</i>).',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Misreading the discriminant’s sign</b>, or declaring “no roots” when <i>D</i> < 0: over ℂ there are always two.',
          '<b>Applying the conjugate-root theorem to complex-coefficient equations</b>: it requires real coefficients.',
          '<b>Forgetting √<i>D</i> = <i>i</i>√|<i>D</i>| when <i>D</i> < 0.</b>',
          '<b>Dropping a square root of a complex number, or getting the sign branch wrong</b>: a non-zero number has exactly two, and sgn(<i>xy</i>) = sgn(<i>b</i>).',
          `<b>Sign error in Vieta’s sum:</b> <i>α</i> + <i>β</i> = ${MB_A}, not ${fr('<i>b</i>', '<i>a</i>')}.`,
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tips.</b><br>• Check <i>D</i> first: it tells you the root type before any computation.<br>• With real coefficients, you only ever need to find one complex root; the other is its conjugate.<br>• For complex coefficients, the quadratic formula still works: you just need √(<i>a</i> + <i>ib</i>) (the <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = <i>a</i>, 2<i>xy</i> = <i>b</i> method).<br>• To build a real quadratic from a complex root <i>p</i> + <i>iq</i>: sum = 2<i>p</i>, product = <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup>, so <i>x</i><sup>2</sup> − 2<i>px</i> + (<i>p</i><sup>2</sup> + <i>q</i><sup>2</sup>) = 0.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `<i>x</i> = ${fr('−<i>b</i> ± √<i>D</i>', '2<i>a</i>')}, <i>D</i> = <i>b</i><sup>2</sup> − 4<i>ac</i>`,
            note: '',
          },
          {
            f: 'Real coeff',
            note: '<i>D</i> > 0 real distinct · <i>D</i> = 0 real equal · <i>D</i> < 0 complex conjugate pair',
          },
          {
            f: '<i>D</i> < 0',
            note: `<i>x</i> = ${fr('−<i>b</i> ± <i>i</i>√(4<i>ac</i> − <i>b</i><sup>2</sup>)', '2<i>a</i>')}`,
          },
          { f: 'Conjugate-root theorem', note: '<b>real coefficients only</b>' },
          { f: 'Vieta', note: `<i>α</i> + <i>β</i> = ${MB_A}, <i>αβ</i> = ${fr('<i>c</i>', '<i>a</i>')}` },
          { f: 'From roots', note: '<i>x</i><sup>2</sup> − (<i>α</i> + <i>β</i>)<i>x</i> + <i>αβ</i> = 0' },
          {
            f: 'Real quadratic from root <i>p</i> + <i>iq</i>',
            note: '<i>x</i><sup>2</sup> − 2<i>px</i> + (<i>p</i><sup>2</sup> + <i>q</i><sup>2</sup>) = 0',
          },
          {
            f: '√(<i>a</i> + <i>ib</i>) = ±(<i>x</i> + <i>iy</i>)',
            note: `<i>x</i><sup>2</sup> = ${fr('|<i>z</i>| + <i>a</i>', '2')}, <i>y</i><sup>2</sup> = ${fr('|<i>z</i>| − <i>a</i>', '2')}, sgn(<i>xy</i>) = sgn(<i>b</i>)`,
          },
        ],
        aids: [],
      },
    ],
  },
];
