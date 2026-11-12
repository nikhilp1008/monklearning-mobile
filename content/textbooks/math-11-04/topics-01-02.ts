import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 01 and 02: Algebra of Complex Numbers (pp. 337–344) and
 * The Modulus and the Conjugate of a Complex Number (pp. 345–351) of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 * p. 337's title block and contents are not copied. Each topic is split at its
 * numbered Sections 1 to 8, titled from the book's own section names in
 * sentence case ("&" as "and"); Section 8 is two parts, "Common pitfalls and
 * pro-tips" and "Cheat sheet". Topic 02's opening box (before its "1. Exam
 * Relevance") is the first paragraph of its Exam relevance part.
 * Figures 4.1 (caption p. 338, drawn p. 339) and 4.2 (caption p. 346, drawn
 * p. 347) stand where the book prints their captions; they are redrawn in
 * lib/diagrams/mathematics-11-04.ts. Neither topic has an unnumbered drawing.
 * The conjugate bar is U+0305 after the barred character; a bar over a whole
 * expression is a U+0305 after every character under it.
 * Every fraction is stacked (<frac>); no em dashes.
 */

const B = '̅';
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const i = '<i>i</i>';
const z = '<i>z</i>';
const zb = `<i>z</i>${B}`;
const zzb = `<i>zz</i>${B}`;
const z1 = '<i>z</i><sub>1</sub>';
const z2 = '<i>z</i><sub>2</sub>';
const zb1 = `<i>z</i>${B}<sub>1</sub>`;
const zb2 = `<i>z</i>${B}<sub>2</sub>`;
/** A bar over the whole of z₁ and z₂ (the barred subscripts too). */
const zB1 = `<i>z</i>${B}<sub>1</sub>${B}`;
const zB2 = `<i>z</i>${B}<sub>2</sub>${B}`;
const MOD2 = '|<i>z</i>|<sup>2</sup>';
const A2B2 = '<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>';
const AIB = '<i>a</i> + <i>ib</i>';
const AMIB = '<i>a</i> − <i>ib</i>';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 337–344 ────────────────
  {
    n: '01',
    title: 'Algebra of Complex Numbers',
    kalam: 'A complex number is an address.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This topic is the load-bearing wall of the chapter: the four arithmetic operations on complex numbers, the powers of ${i}, and the algebraic structure they form. Everything downstream (modulus and conjugate (Topic 02), the Argand plane and polar form (03), quadratic equations with complex roots (04)) assumes this machinery is automatic.`,
      },
      {
        t: 'p',
        html: `• <b>CBSE Boards:</b> Direct 1–2 mark questions: simplify powers of ${i}, express a number in ${AIB} form, find <i>x</i>, <i>y</i> by equating real and imaginary parts, compute a multiplicative inverse.<br>• <b>JEE Main:</b> Operation fluency is assumed in every complex-number problem; standalone questions usually test powers of ${i} or a condition for a quotient to be purely real/imaginary ${ESTIMATE}.<br>• <b>JEE Advanced:</b> Almost never tested in isolation ${ESTIMATE}, but a single slow step in arithmetic here costs time on the harder geometry/rotation problems.`,
      },

      { t: 'part', title: 'Concept intuition (Indian-context analogies)' },
      {
        t: 'p',
        html: '<b>Why invent complex numbers?</b> The equation <i>x</i><sup>2</sup> + 1 = 0 has no real solution: no real number squares to a negative. This is the same discomfort earlier generations felt with <i>x</i> + 5 = 2, unsolvable until negatives were accepted. Every time a familiar equation refuses to be solved, the number system is enlarged; complex numbers are the enlargement that lets every non-constant polynomial equation have a root.',
      },
      {
        t: 'p',
        html: `<b>${i} is a quarter-turn, not a ghost.</b> “Imaginary” is unfortunate PR. Picture a clock hand pointing right, along the positive real direction. Multiplying by ${i} rotates it 90° anticlockwise, so it points up. Multiply by ${i} again and you have turned 180°: the hand points left, i.e. you have reached −1. That is the entire content of ${i}<sup>2</sup> = −1: <b>two quarter-turns make a half-turn.</b> This also explains why ${i}<sup>4</sup> = 1 (a full turn brings you home) and why the powers of ${i} repeat every four steps.`,
      },
      {
        t: 'p',
        html: `<b>A complex number is an address.</b> In a planned-grid city like Chandigarh, “go 3 sectors east, then 2 sectors north” pins one location. Writing ${z} = 3 + 2${i} does the same: real part = east–west, imaginary part = north–south. Two addresses match only if both coordinates agree, which is exactly why equality of complex numbers needs two conditions, not one.`,
      },
      { t: 'fig', id: 'm11-04-fig-4.1' },

      { t: 'part', title: 'Key formulas and definitions (with validity / domain conditions)' },
      { t: 'p', html: '<b>The imaginary unit.</b>' },
      {
        t: 'formula',
        kicker: 'The imaginary unit',
        main: `${i} = √−1<br>${i}<sup>2</sup> = −1`,
        legend: [`${i} = the imaginary unit`],
        note: null,
      },
      { t: 'p', html: `<b>Powers of ${i} cycle with period 4:</b>` },
      {
        t: 'formula',
        kicker: `Powers of ${i} cycle with period 4`,
        main: `${i}<sup>1</sup> = ${i}<br>${i}<sup>2</sup> = −1<br>${i}<sup>3</sup> = −${i}<br>${i}<sup>4</sup> = 1<br>${i}<sup>4<i>k</i></sup> = 1<br>${i}<sup>4<i>k</i>+1</sup> = ${i}<br>${i}<sup>4<i>k</i>+2</sup> = −1<br>${i}<sup>4<i>k</i>+3</sup> = −${i} (<i>k</i> ∈ ℤ)`,
        legend: [`${i} = the imaginary unit`, '<i>k</i> = any integer (<i>k</i> ∈ ℤ)'],
        note: null,
      },
      {
        t: 'p',
        html: `To evaluate ${i}<sup><i>n</i></sup>, keep only the remainder of <i>n</i> on division by 4. For <b>negative</b> powers, add a multiple of 4 first: ${i}<sup>−1</sup> = ${i}<sup>3</sup> = −${i}, ${i}<sup>−39</sup> = ${i}<sup>−39+40</sup> = ${i}.`,
      },
      { t: 'p', html: `A useful consequence: <b>four consecutive powers of ${i} sum to zero:</b>` },
      {
        t: 'formula',
        kicker: `Four consecutive powers of ${i} sum to zero`,
        main: `${i}<sup><i>n</i></sup> + ${i}<sup><i>n</i>+1</sup> + ${i}<sup><i>n</i>+2</sup> + ${i}<sup><i>n</i>+3</sup><br>= ${i}<sup><i>n</i></sup>(1 + ${i} + ${i}<sup>2</sup> + ${i}<sup>3</sup>)<br>= ${i}<sup><i>n</i></sup>(1 + ${i} − 1 − ${i}) = 0`,
        legend: [`${i} = the imaginary unit`, '<i>n</i> = any integer'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Validity condition (critical).</b> The rule √<i>a</i> √<i>b</i> = √(<i>ab</i>) holds for real <i>a</i>, <i>b</i> <b>only when they are not both negative.</b> For example √−2 √−3 = (<i>i</i>√2)(<i>i</i>√3) = <i>i</i><sup>2</sup>√6 = −√6, <b>not</b> √6. Convert each √negative to <i>i</i>√positive first.',
      },
      { t: 'p', html: '<b>A complex number.</b>' },
      {
        t: 'formula',
        kicker: 'A complex number',
        main: `${z} = ${AIB}<br><i>a</i>, <i>b</i> ∈ ℝ`,
        legend: [
          `<i>a</i> = Re(${z}) (the real part)`,
          `<i>b</i> = Im(${z}) (the imaginary part)`,
          `${i} = the imaginary unit`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `with <i>a</i> = Re(${z}) the <b>real part</b> and <i>b</i> = Im(${z}) the <b>imaginary part</b>.`,
      },
      { t: 'p', html: `<b>Trap:</b> Im(${z}) = <i>b</i>, a real number, not <i>ib</i>.` },
      {
        t: 'p',
        html: `• ${z} is <b>purely real</b> if <i>b</i> = 0; <b>purely imaginary</b> if <i>a</i> = 0, <i>b</i> ≠ 0.<br>• ℕ ⊂ 𝕎 ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ.<br>• <b>Order is undefined.</b> “9 + 6${i} > 3 + 2${i}” is meaningless; <, > do not apply to non-real complex numbers.`,
      },
      { t: 'p', html: '<b>Equality.</b>' },
      {
        t: 'formula',
        kicker: 'Equality',
        main: `${AIB} = <i>c</i> + <i>id</i><br>⟺ <i>a</i> = <i>c</i> <b>and</b> <i>b</i> = <i>d</i>`,
        legend: ['<i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> = real numbers', `${i} = the imaginary unit`],
        note: null,
      },
      { t: 'p', html: 'Both conditions are required; satisfying only one is an error.' },
      {
        t: 'p',
        html: `<b>Operations.</b> Let ${z1} = ${AIB}, ${z2} = <i>c</i> + <i>id</i>.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Operation', 'Formula', 'Condition'],
        rows: [
          ['Addition', `${z1} + ${z2} = (<i>a</i> + <i>c</i>) + ${i}(<i>b</i> + <i>d</i>)`, '–'],
          ['Subtraction', `${z1} − ${z2} = (<i>a</i> − <i>c</i>) + ${i}(<i>b</i> − <i>d</i>)`, '–'],
          ['Multiplication', `${z1}${z2} = (<i>ac</i> − <i>bd</i>) + ${i}(<i>ad</i> + <i>bc</i>)`, `apply ${i}<sup>2</sup> = −1`],
          [
            'Division',
            `${fr(z1, z2)} = ${fr(`(<i>ac</i> + <i>bd</i>) + ${i}(<i>bc</i> − <i>ad</i>)`, '<i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>')}`,
            `${z2} ≠ 0`,
          ],
        ],
      },
      { t: 'p', html: `<b>Multiplicative inverse.</b> For ${z} = ${AIB} ≠ 0,` },
      {
        t: 'formula',
        kicker: 'Multiplicative inverse',
        main: `${z}<sup>−1</sup> = ${fr('1', z)} = ${fr(AMIB, A2B2)}<br>= ${fr('<i>a</i>', A2B2)} − ${i} ${fr('<i>b</i>', A2B2)}`,
        legend: [`${z} = a non-zero complex number (${AIB})`, '<i>a</i>, <i>b</i> = real numbers', `${i} = the imaginary unit`],
        note: null,
      },
      {
        t: 'p',
        html: `The number ${AMIB} used to carry out division is the <b>conjugate</b> of ${z}; the conjugate and the modulus |${z}| = √(${A2B2}), together with their property lists, are developed fully in <b>Topic 02</b>. Here they appear only as the computational device that turns a complex denominator into a real one.`,
      },

      { t: 'part', title: 'Theorems, proofs and standard methods' },
      {
        t: 'p',
        html: `<b>Theorem 1 (Powers of ${i} are periodic with period 4).</b> For every integer <i>n</i>, ${i}<sup><i>n</i></sup> ∈ {1, ${i}, −1, −${i}}, fixed by <i>n</i> mod 4.<br><b>Proof.</b> Write <i>n</i> = 4<i>k</i> + <i>r</i>, <i>r</i> ∈ {0, 1, 2, 3}. Then ${i}<sup><i>n</i></sup> = (${i}<sup>4</sup>)<sup><i>k</i></sup>${i}<sup><i>r</i></sup> = 1<sup><i>k</i></sup>${i}<sup><i>r</i></sup> = ${i}<sup><i>r</i></sup>, since ${i}<sup>4</sup> = (${i}<sup>2</sup>)<sup>2</sup> = (−1)<sup>2</sup> = 1. The four values of ${i}<sup><i>r</i></sup> are 1, ${i}, −1, −${i}. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (ℂ is a field).</b> Under the addition and multiplication defined above, ℂ satisfies the field axioms:<br><b>Addition:</b> closure, commutativity, associativity; additive identity 0 = 0 + ${i}0; additive inverse −${z} = −<i>a</i> + ${i}(−<i>b</i>). <b>Multiplication:</b> closure, commutativity, associativity; multiplicative identity 1 = 1 + ${i}0; and (for ${z} ≠ 0) a multiplicative inverse. Multiplication distributes over addition.<br>The only non-routine axiom is the existence of multiplicative inverses, proved next.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (Existence and uniqueness of the multiplicative inverse).</b> Every ${z} ≠ 0 has a unique <i>s</i> with <i>zs</i> = 1, namely <i>s</i> = ${fr(AMIB, A2B2)}.<br><b>Proof.</b> Let ${z} = ${AIB} ≠ 0, so ${A2B2} > 0. With <i>s</i> = ${fr(AMIB, A2B2)},<br><i>zs</i> = ${fr(`(${AIB})(${AMIB})`, A2B2)} = ${fr(A2B2, A2B2)} = 1.<br>For uniqueness, if <i>zs</i>′ = 1 too, then <i>s</i> = <i>s</i> · 1 = <i>s</i>(<i>zs</i>′) = (<i>sz</i>)<i>s</i>′ = 1 · <i>s</i>′ = <i>s</i>′, using commutativity and associativity. ■`,
      },
      {
        t: 'p',
        html: `<b>Standard Method A: Division (clearing the denominator).</b> To write ${fr(z1, z2)} in ${AIB} form, multiply numerator and denominator by (<i>c</i> − <i>id</i>):<br>${fr(AIB, '<i>c</i> + <i>id</i>')} = ${fr(`(${AIB})(<i>c</i> − <i>id</i>)`, '(<i>c</i> + <i>id</i>)(<i>c</i> − <i>id</i>)')}<br>= ${fr(`(${AIB})(<i>c</i> − <i>id</i>)`, '<i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>')}.<br>The denominator is now the real number <i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>; then separate real and imaginary parts. Leaving a complex denominator is an error.`,
      },
      {
        t: 'p',
        html: `<b>Standard Method B: Equating real and imaginary parts.</b> For an equation <i>A</i>(<i>x</i>, <i>y</i>) + <i>iB</i>(<i>x</i>, <i>y</i>) = <i>C</i> + <i>iD</i> in real unknowns, set <i>A</i> = <i>C</i> <b>and</b> <i>B</i> = <i>D</i>, giving two simultaneous real equations. This is the single most-tested technique in the topic ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Worked examples (CBSE → JEE Main → JEE Advanced)' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: `Express (3 + 2${i}) + (−6 + 5${i}) and (2 + 3${i})(1 − 4${i}) in ${AIB} form.`,
        steps: [
          `(3 + 2${i}) + (−6 + 5${i}) = −3 + 7${i}.`,
          `(2 + 3${i})(1 − 4${i}) = 2 − 8${i} + 3${i} − 12${i}<sup>2</sup><br>= 2 − 5${i} + 12 = 14 − 5${i}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: `Evaluate ${i}<sup>135</sup> + ${i}<sup>−50</sup>.`,
        steps: [
          `135 = 4(33) + 3 ⇒ ${i}<sup>135</sup> = ${i}<sup>3</sup> = −${i}.`,
          `And ${i}<sup>−50</sup> = ${i}<sup>−50+52</sup> = ${i}<sup>2</sup> = −1. Sum = −1 − ${i}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: `Find real <i>x</i>, <i>y</i> if 4<i>x</i> + ${i}(3<i>x</i> − <i>y</i>) = 3 + ${i}(−6).`,
        steps: [
          'Equate parts (Method B): 4<i>x</i> = 3 and 3<i>x</i> − <i>y</i> = −6.',
          `So <i>x</i> = ${fr('3', '4')}, and <i>y</i> = 3<i>x</i> + 6 = ${fr('9', '4')} + 6 = ${fr('33', '4')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Find the multiplicative inverse of ${z} = 3 − 4${i} and verify it.`,
        steps: [
          `<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = 9 + 16 = 25, so ${z}<sup>−1</sup> = ${fr(`3 + 4${i}`, '25')} = ${fr('3', '25')} + ${fr('4', '25')}${i}.`,
          `<b>Check:</b> (3 − 4${i}) · ${fr(`3 + 4${i}`, '25')} = ${fr('9 + 16', '25')} = 1. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `For real <i>θ</i>, when is ${z} = ${fr(`3 + 2${i} sin <i>θ</i>`, `1 − 2${i} sin <i>θ</i>`)} purely real?`,
        steps: [
          `Clear the denominator (Method A) with 1 + 2${i} sin <i>θ</i>:<br>${z} = ${fr(`(3 + 2${i} sin <i>θ</i>)(1 + 2${i} sin <i>θ</i>)`, '1 + 4 sin<sup>2</sup> <i>θ</i>')}<br>= ${fr(`(3 − 4 sin<sup>2</sup> <i>θ</i>) + 8${i} sin <i>θ</i>`, '1 + 4 sin<sup>2</sup> <i>θ</i>')}.`,
          `${z} purely real ⟺ 8 sin <i>θ</i> = 0 ⟺ <i>θ</i> = <i>n</i>π, <i>n</i> ∈ ℤ.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Evaluate <i>S</i> = ∑<sub><i>n</i>=1</sub><sup>100</sup> ${i}<sup><i>n</i>!</sup>.`,
        steps: [
          `For <i>n</i> ≥ 4, <i>n</i>! is a multiple of 4, so ${i}<sup><i>n</i>!</sup> = 1. The first three terms: ${i}<sup>1!</sup> = ${i}<sup>1</sup> = ${i}, ${i}<sup>2!</sup> = ${i}<sup>2</sup> = −1, ${i}<sup>3!</sup> = ${i}<sup>6</sup> = ${i}<sup>2</sup> = −1. Thus`,
          `<i>S</i> = [${i} − 1 − 1]<sub><i>n</i>=1,2,3</sub> + [1 + 1 + ⋯ + 1]<sub>97 terms</sub><br>= (${i} − 2) + 97 = 95 + ${i}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `If (${fr(`1 + ${i}`, `1 − ${i}`)})<sup><i>m</i></sup> = 1, find the least positive integer <i>m</i>.`,
        steps: [
          `First simplify the base (Method A): ${fr(`1 + ${i}`, `1 − ${i}`)} = ${fr(`(1 + ${i})<sup>2</sup>`, `(1 − ${i})(1 + ${i})`)} = ${fr(`2${i}`, '2')} = ${i}.`,
          `So the condition is ${i}<sup><i>m</i></sup> = 1, true exactly when <i>m</i> is a multiple of 4. Least positive <i>m</i> = 4.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: `Express in ${AIB}: (a) (5 − 3${i}) − (2 + 4${i}), (b) (1 + ${i})<sup>2</sup>, (c) (2 + ${i})(2 − ${i}).`,
            a: `(a) 3 − 7${i}; (b) 2${i}; (c) 5.`,
          },
          {
            q: `Evaluate ${i}<sup>−39</sup> + ${i}<sup>16</sup> + ${i}<sup>257</sup>.`,
            a: `${i}<sup>−39</sup> = ${i}<sup>1</sup> = ${i}; ${i}<sup>16</sup> = 1; ${i}<sup>257</sup> = ${i}<sup>1</sup> = ${i}; sum = 1 + 2${i}.`,
          },
          {
            q: `Find real <i>x</i>, <i>y</i> if (<i>x</i> + <i>iy</i>)(2 − 3${i}) = 4 + ${i}.`,
            a: `<i>x</i> + <i>iy</i> = ${fr(`(4 + ${i})(2 + 3${i})`, '13')} = ${fr(`5 + 14${i}`, '13')} ⇒ <i>x</i> = ${fr('5', '13')}, <i>y</i> = ${fr('14', '13')}.`,
          },
          {
            q: `Simplify ${fr(`2 − ${i}`, `1 + ${i}`)} to ${AIB} form and state Re and Im.`,
            a: `${fr(`(2 − ${i})(1 − ${i})`, '2')} = ${fr(`1 − 3${i}`, '2')}; Re = ${fr('1', '2')}, Im = −${fr('3', '2')}.`,
          },
          {
            q: `Find the multiplicative inverse of √5 + 3${i}.`,
            a: `${fr(`√5 − 3${i}`, '5 + 9')} = ${fr(`√5 − 3${i}`, '14')} = ${fr('√5', '14')} − ${fr('3', '14')}${i}.`,
          },
          {
            q: `Show that ${i}<sup><i>n</i></sup> + ${i}<sup><i>n</i>+1</sup> + ${i}<sup><i>n</i>+2</sup> + ${i}<sup><i>n</i>+3</sup> = 0 for every integer <i>n</i>.`,
            a: `Factor ${i}<sup><i>n</i></sup>(1 + ${i} + ${i}<sup>2</sup> + ${i}<sup>3</sup>) = ${i}<sup><i>n</i></sup>(1 + ${i} − 1 − ${i}) = 0.`,
          },
          {
            q: `Find the least positive integer <i>n</i> for which (1 + ${i})<sup><i>n</i></sup> is purely imaginary.`,
            a: `(1 + ${i})<sup>2</sup> = 2${i}, so (1 + ${i})<sup><i>n</i></sup> is purely imaginary first at <i>n</i> = 2.`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `${i}<sup>4<i>k</i>+3</sup> for integer <i>k</i> equals:`,
        opts: [
          { label: '1', nudge: `<b>(A)</b> reads ${i}<sup>4<i>k</i></sup>, dropping the +3.` },
          { label: i, nudge: '<b>(B)</b> reads the remainder as 1.' },
          { label: '−1', nudge: `<b>(C)</b> is ${i}<sup>4<i>k</i>+2</sup>, off by one.` },
          { label: `−${i}`, nudge: null },
        ],
        correct: 3,
        solution: `4<i>k</i> + 3 leaves remainder 3 on division by 4, so ${i}<sup>4<i>k</i>+3</sup> = ${i}<sup>3</sup> = −${i}.`,
      },
      {
        t: 'mcq',
        q: '√−4 · √−9 =',
        opts: [
          { label: '6', nudge: '<b>(A)</b> is the illegal √((−4)(−9)) = 6.' },
          { label: '−6', nudge: null },
          { label: `6${i}`, nudge: `<b>(C)</b> drops a factor of ${i}: (2${i})(3${i}) = 6${i}<sup>2</sup>, not 6${i}.` },
          { label: '36', nudge: '<b>(D)</b> is (−4)(−9) = 36 with the square root forgotten.' },
        ],
        correct: 1,
        solution: `(2${i})(3${i}) = 6${i}<sup>2</sup> = −6.`,
      },
      {
        t: 'mcq',
        q: `The multiplicative inverse of ${i} is:`,
        opts: [
          { label: i, nudge: `<b>(A)</b> assumes ${i} is self-inverse.` },
          { label: `−${i}`, nudge: null },
          { label: '1', nudge: `<b>(C)</b> confuses the inverse with the identity: ${i} · 1 = ${i}, not 1.` },
          { label: '−1', nudge: `<b>(D)</b> confuses inverse with ${i}<sup>2</sup>.` },
        ],
        correct: 1,
        solution: `${fr('1', i)} = ${fr('1', i)} · ${fr(`−${i}`, `−${i}`)} = ${fr(`−${i}`, '1')} = −${i}.`,
      },
      {
        t: 'mcq',
        q: `If ${AIB} = <i>c</i> + <i>id</i> (all real), then necessarily:`,
        opts: [
          { label: '<i>a</i> = <i>c</i> only', nudge: '<b>(A)</b> is the partial-equality trap.' },
          { label: '<i>b</i> = <i>d</i> only', nudge: '<b>(B)</b> is the partial-equality trap.' },
          { label: '<i>a</i> = <i>c</i> and <i>b</i> = <i>d</i>', nudge: null },
          {
            label: '<i>a</i> + <i>b</i> = <i>c</i> + <i>d</i>',
            nudge: '<b>(D)</b> collapses a complex equation into one real equation.',
          },
        ],
        correct: 2,
        solution: 'Equal complex numbers have equal real parts and equal imaginary parts, so both <i>a</i> = <i>c</i> and <i>b</i> = <i>d</i>.',
      },
      {
        t: 'mcq',
        q: `∑<sub><i>n</i>=0</sub><sup>3</sup> ${i}<sup><i>n</i></sup> equals:`,
        opts: [
          { label: '0', nudge: null },
          { label: '1', nudge: `<b>(B)</b> keeps only ${i}<sup>0</sup> = 1, as if ${i} + ${i}<sup>2</sup> + ${i}<sup>3</sup> were 0; it is −1.` },
          { label: i, nudge: `<b>(C)</b> is the <i>n</i> = 1 term alone; all four terms 1, ${i}, −1, −${i} add to 0.` },
          { label: `1 + ${i}`, nudge: `<b>(D)</b> drops only the −1 and −${i}.` },
        ],
        correct: 0,
        solution: `1 + ${i} + ${i}<sup>2</sup> + ${i}<sup>3</sup> = 1 + ${i} − 1 − ${i} = 0.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `Treating ${i}<sup>2</sup> as +1 or leaving it un-simplified: replace ${i}<sup>2</sup> with −1 immediately.`,
          `Combining roots of negatives directly: √−2√−3 ≠ √6; convert to ${i}√2 · ${i}√3 = −√6 first.`,
          `Writing Im(${z}) = <i>bi</i>: the imaginary part is the real number <i>b</i>.`,
          'Applying <, > to complex numbers: order is undefined on ℂ.',
          'Leaving a complex denominator: not standard form.',
          'Equating only the real or only the imaginary part.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• For ${i}<sup><i>n</i></sup>, only <i>n</i> mod 4 matters; for negative <i>n</i>, add a multiple of 4 first.<br>• Any four consecutive powers of ${i} sum to 0; use this to collapse long sums (the sixth practice question). Related: <i>n</i>! is a multiple of 4 for <i>n</i> ≥ 4 (the sixth worked example of this topic).<br>• To show a quotient is purely real/imaginary, clear the denominator first, then read off the part that must vanish.<br>• (1 + ${i})<sup>2</sup> = 2${i} and (1 − ${i})<sup>2</sup> = −2${i} are worth memorising; they shortcut many power problems (the seventh worked example of this topic).`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `${i}<sup>2</sup> = −1; ${i}<sup>4<i>k</i></sup> = 1, ${i}<sup>4<i>k</i>+1</sup> = ${i}, ${i}<sup>4<i>k</i>+2</sup> = −1, ${i}<sup>4<i>k</i>+3</sup> = −${i}`,
            note: '',
          },
          { f: `${i}<sup><i>n</i></sup> + ${i}<sup><i>n</i>+1</sup> + ${i}<sup><i>n</i>+2</sup> + ${i}<sup><i>n</i>+3</sup> = 0`, note: '' },
          { f: `${z} = ${AIB}`, note: `Re(${z}) = <i>a</i>, Im(${z}) = <i>b</i> (both real)` },
          { f: 'Equality', note: `${AIB} = <i>c</i> + <i>id</i> ⟺ <i>a</i> = <i>c</i> and <i>b</i> = <i>d</i>` },
          { f: `${z1}${z2} = (<i>ac</i> − <i>bd</i>) + ${i}(<i>ad</i> + <i>bc</i>)`, note: '' },
          { f: 'Division', note: 'multiply top & bottom by (<i>c</i> − <i>id</i>) to make the denominator real' },
          { f: `${z}<sup>−1</sup> = ${fr(AMIB, A2B2)} (${z} ≠ 0)`, note: '' },
          { f: `(1 + ${i})<sup>2</sup> = 2${i}, (1 − ${i})<sup>2</sup> = −2${i}`, note: '' },
          { f: 'Order undefined on ℂ', note: '' },
          { f: 'Conjugate & modulus theory → Topic 02', note: '' },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 345–351 ────────────────
  {
    n: '02',
    title: 'The Modulus and the Conjugate of a Complex Number',
    kalam: 'The modulus and the conjugate are the algebraic engine of the whole chapter.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Builds directly on Topic 01 (algebra of operations). The conjugate ${AMIB} that appeared there only as a tool for division is now studied as an object in its own right, together with the modulus |${z}| = √(${A2B2}).`,
      },
      {
        t: 'p',
        html: `The modulus and the conjugate are the <b>algebraic engine</b> of the whole chapter. The single identity ${zzb} = ${MOD2} is what converts every “divide by a complex number” or “prove this is real” problem into ordinary real arithmetic, and it is used silently in almost every later problem on rotation, loci, and polynomial roots.`,
      },
      {
        t: 'p',
        html: `• <b>CBSE Boards:</b> Reliable 1–2 mark questions ${ESTIMATE}: find the conjugate and modulus of a given number, find the multiplicative inverse (via ${fr(zb, MOD2)}), or use |${z1}${z2}| = |${z1}||${z2}|.<br>• <b>JEE Main:</b> Conditions for a quotient to be purely real/imaginary, modulus of a product, and modulus inequalities appear every year ${ESTIMATE}.<br>• <b>JEE Advanced:</b> The property toolkit (${zzb} = ${MOD2}, ${zB1}${zB2} = ${zb1}${zb2}, triangle inequality) is assumed fluent; problems rarely state it but always rely on it ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Concept intuition (Indian-context analogies)' },
      {
        t: 'p',
        html: `<b>The conjugate is a mirror reflection.</b> Picture a temple beside a still water tank: the Dal Lake reflecting the Hari Parbat, or any tank-temple at dawn. The reflection sits exactly as far below the waterline as the temple sits above it. The <b>real axis is the waterline</b>: the conjugate ${zb} = ${AMIB} is the reflection of ${z} = ${AIB} across it. The real part (height along the shore) is unchanged; only the imaginary part (height above/below water) flips sign. This is why a number in the first quadrant has its conjugate in the fourth, and why ${z} = ${zb} exactly when ${z} lies on the waterline (is purely real).`,
      },
      {
        t: 'p',
        html: `<b>The modulus is “as the crow flies.”</b> Topic 01 described ${z} = ${AIB} as a grid address (“3 sectors east, 2 north”). The modulus |${z}| = √(${A2B2}) is the <b>straight-line distance</b> from the origin to that address: Pythagoras on the grid. The address tells you how to walk there; the modulus tells you how far it is. (The full geometric picture, the Argand plane, is Topic 03; here we use |${z}| as a magnitude.)`,
      },
      {
        t: 'p',
        html: `<b>Why ${zzb} = ${MOD2} is magic.</b> Multiplying a number by its mirror image cancels the imaginary part entirely: (${AIB})(${AMIB}) = ${A2B2}, a plain non-negative real number equal to the squared distance. That is the trick behind every division and every “show it’s real” proof.`,
      },
      { t: 'fig', id: 'm11-04-fig-4.2' },

      { t: 'part', title: 'Key formulas and definitions (with validity / domain conditions)' },
      { t: 'p', html: `<b>Conjugate.</b> For ${z} = ${AIB},` },
      {
        t: 'formula',
        kicker: 'Conjugate',
        main: `${zb} = ${AMIB}`,
        legend: [
          `${z} = a complex number (${AIB})`,
          `${zb} = the conjugate of ${z}`,
          '<i>a</i>, <i>b</i> = real numbers',
          `${i} = the imaginary unit`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Only the sign of the imaginary part flips. (Contrast: the additive inverse is −${z} = −<i>a</i> − <i>ib</i>, where <b>both</b> signs flip, a common mix-up.)`,
      },
      { t: 'p', html: 'Conjugate properties:' },
      {
        t: 'formula',
        kicker: 'Conjugate properties',
        main: [
          `(${B}<i>z</i>̿)${B} = ${z}`,
          `${z} + ${zb} = 2 Re(${z})`,
          `${z} − ${zb} = 2${i} Im(${z})`,
          `${zzb} = ${A2B2} = ${MOD2} (purely real, ≥ 0)`,
          `${z} = ${zb} ⟺ ${z} purely real`,
          `${z} + ${zb} = 0 ⟺ ${z} purely imaginary or 0`,
          `${zB1} ${B}±${B} ${B}${zB2} = ${zb1} ± ${zb2}`,
          `${zB1}${zB2} = ${zb1} ${zb2}`,
          `<i>w</i>${B} = ${fr(zb1, zb2)} for <i>w</i> = ${fr(z1, z2)} (${z2} ≠ 0)`,
          `<i>z</i>${B}<sup><i>n</i></sup>${B} = (${zb})<sup><i>n</i></sup>`,
        ].join('<br>'),
        legend: [
          `${z} = a complex number (${AIB})`,
          `${zb} = the conjugate of ${z}`,
          '<i>a</i>, <i>b</i> = real numbers',
          `${z1}, ${z2} = any complex numbers`,
          `<i>w</i> = the quotient (${fr(z1, z2)})`,
          '<i>n</i> = an integer (<i>z</i> ≠ 0 if <i>n</i> < 0)',
          `${i} = the imaginary unit`,
        ],
        note: null,
      },
      { t: 'p', html: `<b>Modulus.</b> For ${z} = ${AIB},` },
      {
        t: 'formula',
        kicker: 'Modulus',
        main: `|${z}| = √(${A2B2})<br>= √([Re(${z})]<sup>2</sup> + [Im(${z})]<sup>2</sup>) ≥ 0`,
        legend: [`${z} = a complex number (${AIB})`, '<i>a</i>, <i>b</i> = real numbers'],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity / sign condition.</b> |${z}| is always the <b>non-negative</b> square root. The real-number shortcut |<i>x</i>| = ±<i>x</i> does <b>not</b> carry over: you cannot write |${z}| = ±${z} for complex ${z}.`,
      },
      { t: 'p', html: 'Modulus properties:' },
      {
        t: 'formula',
        kicker: 'Modulus properties',
        main: [
          `|${z}| = 0 ⟺ ${z} = 0`,
          `|${z}| = |${zb}| = |−${z}|`,
          `${zzb} = ${MOD2}`,
          `|${z1}${z2}| = |${z1}||${z2}|`,
          `|${fr(z1, z2)}| = ${fr(`|${z1}|`, `|${z2}|`)} (${z2} ≠ 0)`,
          `|${z}<sup><i>n</i></sup>| = |${z}|<sup><i>n</i></sup>`,
          `|Re(${z})| ≤ |${z}|`,
          `|Im(${z})| ≤ |${z}|`,
        ].join('<br>'),
        legend: [
          `${z} = a complex number`,
          `${zb} = the conjugate of ${z}`,
          `${z1}, ${z2} = any complex numbers`,
          '<i>n</i> = an integer (<i>z</i> ≠ 0 if <i>n</i> < 0)',
        ],
        note: null,
      },
      { t: 'p', html: '<b>Triangle inequality (with equality conditions):</b>' },
      {
        t: 'formula',
        kicker: 'Triangle inequality',
        main: `|${z1} + ${z2}| ≤ |${z1}| + |${z2}|<br>||${z1}| − |${z2}|| ≤ |${z1} − ${z2}|`,
        legend: [`${z1}, ${z2} = any complex numbers`],
        note: null,
      },
      {
        t: 'p',
        html: `Equality in the first holds <b>iff</b> ${z1}, ${z2} <b>point in the same direction</b> (one is a non-negative real multiple of the other). It is <b>not</b> true in general that |${z1} + ${z2}| = |${z1}| + |${z2}|.`,
      },
      { t: 'p', html: '<b>Parallelogram identity:</b>' },
      {
        t: 'formula',
        kicker: 'Parallelogram identity',
        main: `|${z1} + ${z2}|<sup>2</sup> + |${z1} − ${z2}|<sup>2</sup><br>= 2(|${z1}|<sup>2</sup> + |${z2}|<sup>2</sup>)`,
        legend: [`${z1}, ${z2} = any complex numbers`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Multiplicative inverse (restated via the conjugate):</b> ${z}<sup>−1</sup> = ${fr(zb, MOD2)} = ${fr(AMIB, A2B2)} (${z} ≠ 0).`,
      },

      { t: 'part', title: 'Theorems, proofs and standard methods' },
      {
        t: 'p',
        html: `<b>Theorem 1 (${zzb} = ${MOD2}).</b> For ${z} = ${AIB}, ${zzb} = ${A2B2} = ${MOD2}. <b>Proof.</b> ${zzb} = (${AIB})(${AMIB}) = <i>a</i><sup>2</sup> − (<i>ib</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − ${i}<sup>2</sup><i>b</i><sup>2</sup> = ${A2B2} = ${MOD2}. ■ This is the workhorse identity: it turns the complex quantity ${z} into the real quantity ${MOD2}.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (Conjugate of a product).</b> ${zB1}${zB2} = ${zb1} ${zb2}. <b>Proof.</b> Let ${z1} = ${AIB}, ${z2} = <i>c</i> + <i>id</i>. Then ${z1}${z2} = (<i>ac</i> − <i>bd</i>) + ${i}(<i>ad</i> + <i>bc</i>), so ${zB1}${zB2} = (<i>ac</i> − <i>bd</i>) − ${i}(<i>ad</i> + <i>bc</i>). Separately, ${zb1}${zb2} = (${AMIB})(<i>c</i> − <i>id</i>) = (<i>ac</i> − <i>bd</i>) − ${i}(<i>ad</i> + <i>bc</i>). The two agree. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (Modulus is multiplicative).</b> |${z1}${z2}| = |${z1}||${z2}|. <b>Proof.</b> Using Theorems 1 and 2,<br>|${z1}${z2}|<sup>2</sup> = (${z1}${z2})(${B}${zB1}${zB2})${B}<br>= ${z1}${z2} ${zb1}${zb2} = (${z1}${zb1})(${z2}${zb2})<br>= |${z1}|<sup>2</sup>|${z2}|<sup>2</sup>.<br>Both sides are non-negative, so |${z1}${z2}| = |${z1}||${z2}|. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 4 (Triangle inequality).</b> |${z1} + ${z2}| ≤ |${z1}| + |${z2}|. <b>Proof.</b> |${z1} + ${z2}|<sup>2</sup> = (${z1} + ${z2})(${B}${zB1} ${B}+${B} ${B}${zB2})${B} = |${z1}|<sup>2</sup> + |${z2}|<sup>2</sup> + (${z1}${zb2} + ${zb1}${z2}). The bracket equals 2 Re(${z1}${zb2}) ≤ 2|${z1}${zb2}| = 2|${z1}||${z2}|. Hence |${z1} + ${z2}|<sup>2</sup> ≤ (|${z1}| + |${z2}|)<sup>2</sup>, and taking non-negative roots gives the result. Equality requires Re(${z1}${zb2}) = |${z1}||${z2}|, i.e. ${z1}${zb2} is a non-negative real: the two point the same way. ■`,
      },
      {
        t: 'p',
        html: `<b>Standard Method A: Proving a number is real or imaginary using the conjugate.</b> ${z} is purely real ⟺ ${z} = ${zb}; purely imaginary ⟺ ${z} = −${zb} (${z} ≠ 0).<br>Taking the conjugate of a whole expression and comparing is often faster than expanding into ${AIB}.`,
      },
      {
        t: 'p',
        html: `<b>Standard Method B: Modulus of a product/power.</b> Take | · | across factors instead of multiplying out: |∏ <i>z</i><sub><i>k</i></sub>| = ∏ |<i>z</i><sub><i>k</i></sub>| (Theorem 3 iterated). Indispensable for long products.`,
      },

      { t: 'part', title: 'Worked examples (CBSE → JEE Main → JEE Advanced)' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: `Find the conjugate and modulus of ${z} = 3 + ${i} and of <i>w</i> = 2 − 5${i}.`,
        steps: [
          `${zb} = 3 − ${i}, |${z}| = √(3<sup>2</sup> + 1<sup>2</sup>) = √10.`,
          `<i>w</i>${B} = 2 + 5${i}, |<i>w</i>| = √(2<sup>2</sup> + (−5)<sup>2</sup>) = √29.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE',
        q: `Express (5 − 3${i})<sup>3</sup> in ${AIB} form, then state its conjugate.`,
        steps: [
          `(5 − 3${i})<sup>3</sup> = 5<sup>3</sup> − 3(5<sup>2</sup>)(3${i}) + 3(5)(3${i})<sup>2</sup> − (3${i})<sup>3</sup><br>= 125 − 225${i} − 135 + 27${i} = −10 − 198${i}.`,
          `Conjugate = −10 + 198${i}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Find the multiplicative inverse of ${z} = 4 − 3${i} using ${fr(zb, MOD2)}.`,
        steps: [
          `${MOD2} = 16 + 9 = 25, ${zb} = 4 + 3${i}, so ${z}<sup>−1</sup> = ${fr(`4 + 3${i}`, '25')} = ${fr('4', '25')} + ${fr('3', '25')}${i}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `If ${AIB} = ${fr(`<i>c</i> + ${i}`, `<i>c</i> − ${i}`)} where <i>c</i> ∈ ℝ, prove that ${A2B2} = 1.`,
        steps: [
          `Take the modulus of both sides. |${AIB}| = |${fr(`<i>c</i> + ${i}`, `<i>c</i> − ${i}`)}| = ${fr(`|<i>c</i> + ${i}|`, `|<i>c</i> − ${i}|`)} = ${fr('√(<i>c</i><sup>2</sup> + 1)', '√(<i>c</i><sup>2</sup> + 1)')} = 1.`,
          `Hence √(${A2B2}) = 1, so ${A2B2} = 1. ■`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `If ${z} satisfies ${z}<sup>2</sup> = (${zb})<sup>2</sup>, show that ${z} is purely real or purely imaginary.`,
        steps: [
          `With ${z} = <i>x</i> + <i>iy</i>: ${z}<sup>2</sup> = (<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup>) + 2<i>ixy</i> and (${zb})<sup>2</sup> = (<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup>) − 2<i>ixy</i>.`,
          'Equating forces 2<i>xy</i> = −2<i>xy</i>, so 4<i>xy</i> = 0 ⇒ <i>xy</i> = 0. Thus <i>x</i> = 0 (purely imaginary) or <i>y</i> = 0 (purely real). ■',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `If (2 + ${i})(2 + 2${i})(2 + 3${i}) ⋯ (2 + <i>ni</i>) = <i>x</i> + <i>iy</i>, find 5 · 8 · 13 ⋯ (4 + <i>n</i><sup>2</sup>).`,
        steps: [
          `Apply Method B (modulus across factors). |2 + <i>ki</i>| = √(4 + <i>k</i><sup>2</sup>), so<br>∏<sub><i>k</i>=1</sub><sup><i>n</i></sup> √(4 + <i>k</i><sup>2</sup>) = |<i>x</i> + <i>iy</i>| = √(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>).`,
          'Squaring, ∏<sub><i>k</i>=1</sub><sup><i>n</i></sup> (4 + <i>k</i><sup>2</sup>) = <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>. The left side is exactly 5 · 8 · 13 ⋯ (4 + <i>n</i><sup>2</sup>), so the value is',
        ],
        ans: '<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the conjugate and modulus of (a) −3 + 4${i}, (b) ${fr(`1 + ${i}`, `1 − ${i}`)}.`,
            a: `(a) conjugate −3 − 4${i}, modulus 5; (b) ${fr(`1 + ${i}`, `1 − ${i}`)} = ${i}, conjugate −${i}, modulus 1.`,
          },
          {
            q: `If ${z} = ${fr(`(2 + ${i})`, `(1 − ${i})`)}, find ${zzb}.`,
            a: `${z} = ${fr(`(2 + ${i})(1 + ${i})`, '2')} = ${fr(`1 + 3${i}`, '2')}, so ${zzb} = ${MOD2} = ${fr('1 + 9', '4')} = ${fr('10', '4')} = ${fr('5', '2')}.`,
          },
          {
            q: `Prove that |${fr(z1, z2)}| = ${fr(`|${z1}|`, `|${z2}|`)} for ${z2} ≠ 0.`,
            a: `|${fr(z1, z2)}|<sup>2</sup> = ${fr(z1, z2)} · ${fr(zb1, zb2)} = ${fr(`${z1}${zb1}`, `${z2}${zb2}`)} = ${fr(`|${z1}|<sup>2</sup>`, `|${z2}|<sup>2</sup>`)}; take roots.`,
          },
          {
            q: `Show that ${fr(`${z} − 1`, `${z} + 1`)} is purely imaginary ⟺ |${z}| = 1 (with ${z} ≠ ±1).`,
            a: `Let <i>w</i> = ${fr(`${z} − 1`, `${z} + 1`)}. <i>w</i> purely imaginary ⟺ <i>w</i> + <i>w</i>${B} = 0 ⟺ ${fr(`${z} − 1`, `${z} + 1`)} + ${fr(`${zb} − 1`, `${zb} + 1`)} = 0 ⟺ ${zzb} = 1 ⟺ |${z}| = 1.`,
          },
          {
            q: `Verify the parallelogram identity for ${z1} = 3 + ${i}, ${z2} = 1 − 2${i}.`,
            a: `LHS |${z1} + ${z2}|<sup>2</sup> + |${z1} − ${z2}|<sup>2</sup> = |4 − ${i}|<sup>2</sup> + |2 + 3${i}|<sup>2</sup> = 17 + 13 = 30; RHS 2(|${z1}|<sup>2</sup> + |${z2}|<sup>2</sup>) = 2(10 + 5) = 30. ✓`,
          },
          {
            q: `If |${z1}| = |${z2}| = 1 and ${z1}${z2} ≠ −1, show ${fr(`${z1} + ${z2}`, `1 + ${z1}${z2}`)} is real.`,
            a: `The expression equals its own conjugate (use |${z1}| = |${z2}| = 1 ⇒ ${zb1} = ${fr('1', z1)}, ${zb2} = ${fr('1', z2)}); hence real.`,
          },
          {
            q: `Find the modulus of (1 + ${i})<sup>10</sup>.`,
            a: `|(1 + ${i})<sup>10</sup>| = |1 + ${i}|<sup>10</sup> = (√2)<sup>10</sup> = 2<sup>5</sup> = 32.`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `For any complex ${z}, ${zzb} equals:`,
        opts: [
          { label: `|${z}|`, nudge: '<b>(A)</b> drops the square.' },
          { label: MOD2, nudge: null },
          { label: `${zb}<sup>2</sup>`, nudge: `<b>(C)</b> confuses ${zzb} with (${zb})<sup>2</sup>.` },
          { label: `2 Re(${z})`, nudge: `<b>(D)</b> is ${z} + ${zb}.` },
        ],
        correct: 1,
        solution: `${zzb} = (${AIB})(${AMIB}) = ${A2B2} = ${MOD2}.`,
      },
      {
        t: 'mcq',
        q: `If ${z} = −3 − 4${i}, then |${z}| =`,
        opts: [
          { label: '−5', nudge: '<b>(A)</b> wrongly allows a negative modulus.' },
          { label: '5', nudge: null },
          { label: '7', nudge: '<b>(C)</b> adds |−3| + |−4| instead of using Pythagoras.' },
          { label: '√7', nudge: '<b>(D)</b> takes √(|−3| + |−4|) instead of √(9 + 16).' },
        ],
        correct: 1,
        solution: '√(9 + 16) = 5.',
      },
      {
        t: 'mcq',
        q: `${zB1}${zB2} equals:`,
        opts: [
          { label: `${zb1} + ${zb2}`, nudge: '<b>(A)</b> uses the sum rule for a product.' },
          { label: `${zb1} ${zb2}`, nudge: null },
          { label: `${z1}${zb2}`, nudge: '<b>(C)</b> conjugates only one factor.' },
          { label: `${zB1} + ${z2}`, nudge: '<b>(D)</b> uses the sum rule for a product and conjugates only one term.' },
        ],
        correct: 1,
        solution: 'The conjugate of a product is the product of the conjugates (Theorem 2 of this topic).',
      },
      {
        t: 'mcq',
        q: `The conjugate of ${z} = 2 + 3${i} is, and its additive inverse is, respectively:`,
        opts: [
          { label: `−2 − 3${i} and 2 − 3${i}`, nudge: '<b>(A)</b> swaps the two.' },
          { label: `2 − 3${i} and −2 − 3${i}`, nudge: null },
          {
            label: `2 − 3${i} and −2 + 3${i}`,
            nudge: `<b>(C)</b> gets the conjugate right but flips only the real sign for the additive inverse; −${z} = −2 − 3${i}.`,
          },
          {
            label: `−2 + 3${i} and 2 − 3${i}`,
            nudge: `<b>(D)</b> flips the real sign for the conjugate and gives the conjugate 2 − 3${i} as the additive inverse.`,
          },
        ],
        correct: 1,
        solution: `Conjugate flips only the imaginary sign (2 − 3${i}); the additive inverse flips both (−2 − 3${i}).`,
      },
      {
        t: 'mcq',
        q: `For all complex ${z1}, ${z2}, |${z1} + ${z2}| is:`,
        opts: [
          { label: `= |${z1}| + |${z2}|`, nudge: '<b>(A)</b> holds only when they point the same way.' },
          { label: `≥ |${z1}| + |${z2}|`, nudge: '<b>(B)</b> reverses it.' },
          { label: `≤ |${z1}| + |${z2}|`, nudge: null },
          {
            label: `= |${z1}| − |${z2}|`,
            nudge: `<b>(D)</b> is only a lower bound: |${z1} + ${z2}| ≥ |${z1}| − |${z2}|, which can even be negative.`,
          },
        ],
        correct: 2,
        solution: `Triangle inequality: |${z1} + ${z2}| ≤ |${z1}| + |${z2}|, with equality only when they point the same way.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>|${z1} + ${z2}| ≠ |${z1}| + |${z2}| in general:</b> the modulus does not distribute over a sum; in general only ≤ holds (equality exactly when one is a non-negative real multiple of the other).`,
          `<b>Writing |${z}| = ±${z}.</b> The modulus is a non-negative real number; the real-number rule |<i>x</i>| = ±<i>x</i> does not carry over.`,
          `<b>Confusing ${zb} with −${z}.</b> Conjugate flips only the imaginary sign; the additive inverse flips both.`,
          `<b>Confusing ${zzb} with ${zb}<sup>2</sup> or with |${z}|.</b> ${zzb} = ${MOD2}, a non-negative real.`,
          `<b>Conjugating a product as a sum:</b> ${zB1}${zB2} = ${zb1}${zb2}, not ${zb1} + ${zb2}.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Reach for ${zzb} = ${MOD2} to clear denominators, prove realness, and convert moduli into algebra.<br>• To prove “<i>E</i> is real,” show <i>E</i> = <i>E</i>${B}; to prove “imaginary,” show <i>E</i> + <i>E</i>${B} = 0, usually faster than expanding.<br>• For moduli of products, powers, and quotients, take | · | factor-by-factor (the fourth and sixth worked examples of this topic; the seventh practice question).<br>• On the unit circle (|${z}| = 1), ${zb} = ${fr('1', z)}, a powerful substitution (the sixth practice question).`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${zb} = ${AMIB}; reflection across the real axis (1st ↔ 4th quadrant)`, note: '' },
          { f: `${z} + ${zb} = 2 Re(${z}); ${z} − ${zb} = 2${i} Im(${z})`, note: '' },
          { f: `${zzb} = ${MOD2} = ${A2B2}`, note: '' },
          { f: `${z} = ${zb} ⟺ real; ${z} + ${zb} = 0 ⟺ imaginary or 0`, note: '' },
          {
            f: `${zB1}${zB2} = ${zb1}${zb2}; ${zB1} ${B}±${B} ${B}${zB2} = ${zb1} ± ${zb2}; <i>z</i>${B}<sup><i>n</i></sup>${B} = (${zb})<sup><i>n</i></sup>`,
            note: '',
          },
          { f: `|${z}| = √(${A2B2}) ≥ 0; |${z}| = |${zb}| = |−${z}|`, note: '' },
          {
            f: `|${z1}${z2}| = |${z1}||${z2}|; |${fr(z1, z2)}| = ${fr(`|${z1}|`, `|${z2}|`)}; |${z}<sup><i>n</i></sup>| = |${z}|<sup><i>n</i></sup>`,
            note: '',
          },
          { f: `|${z1} + ${z2}| ≤ |${z1}| + |${z2}| (triangle); ||${z1}| − |${z2}|| ≤ |${z1} − ${z2}|`, note: '' },
          { f: `|${z1} + ${z2}|<sup>2</sup> + |${z1} − ${z2}|<sup>2</sup> = 2(|${z1}|<sup>2</sup> + |${z2}|<sup>2</sup>)`, note: '' },
          { f: `${z}<sup>−1</sup> = ${fr(zb, MOD2)}; on |${z}| = 1: ${zb} = ${fr('1', z)}`, note: '' },
        ],
        aids: [],
      },
    ],
  },
];
