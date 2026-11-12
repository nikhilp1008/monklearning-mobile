import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 05: Trigonometric Identities and Compound Angle Formulas,
 * pp. 222–233 of the Class 11 Mathematics Master Reference (October 2026
 * edition), word for word. The topic opens with its "1. Exam Relevance"
 * section as a part of its own, then is split at its Sections 2 to 8; the
 * "CHEAT SHEET BOX" inside Section 8 is a part of its own, "Cheat sheet".
 * Section 3, the "Identity Master Reference", keeps the book's letters (A) to
 * (J) on its bold headings (other topics cite "Topic 05’s Identity master
 * reference part, item (G)"); each lettered group of identities is a formula
 * block, so it reaches the Formula sheet.
 * Figures 3.12 (p. 224) and 3.13 (p. 228) stand where the book prints their
 * captions in the text (pp. 223, 227); both are redrawn in
 * lib/diagrams/mathematics-11-03.ts. The topic has no unnumbered drawing.
 * Every fraction is stacked (<frac>); no em dashes.
 */

const half = (n: string) => `<frac><num>${n}</num><den>2</den></frac>`;
const A2 = half('<i>A</i>');
const CpD2 = half('<i>C</i> + <i>D</i>');
const CmD2 = half('<i>C</i> − <i>D</i>');
const ROOT = '√(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 05 · pp. 222–233 ────────────────
  {
    n: '05',
    title: 'Trigonometric Identities and Compound Angle Formulas',
    kalam: 'One master key, many duplicates.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'This is the <b>engine room</b> of the chapter and one of the highest-yield topics in all of Class 11 algebra-trigonometry (the book’s estimate from past papers, not official figures). Almost every trigonometric equation, every inverse-trig manipulation, every integral of a trig product in Class 12, and a large slice of Complex Numbers (de Moivre’s theorem) sit directly on the identities built here. A student fluent with compound-angle formulas solves in two lines what a memoriser grinds through in a page.',
      },
      {
        t: 'p',
        html: 'For the exams:<br>• <b>CBSE Boards:</b> Guaranteed marks. Expect a 1–2 mark exact-value question (cos 15°, tan 75°), a 3-mark “prove the identity,” and often a 5-mark conditional-identity proof in a triangle (<i>A</i> + <i>B</i> + <i>C</i> = π). NCERT §3.4 and Exercise 3.3 are lifted near-verbatim (the book’s estimate from past papers, not official figures).<br>• <b>NEET:</b> Used for fast simplification inside physics (superposition of waves, AC phasors) and for evaluating awkward angles.<br>• <b>JEE Main:</b> A reliable 1–2 questions every year (the book’s estimate from past papers, not official figures): maximum/minimum of <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i>, value of a product like cos 20° cos 40° cos 80°, or a transformation-formula simplification.<br>• <b>JEE Advanced:</b> The identities become tools inside harder problems: telescoping sums of sines, conditional identities, and elegant product evaluations. Mastery here is non-negotiable for Advanced.',
      },
      {
        t: 'p',
        html: 'The strategic point: there are many formulas, but they all descend from <b>one</b> parent identity. Learn the derivation tree and you never memorise blindly: you reconstruct. That is exactly what this topic teaches.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>One master key, many duplicates.</b> It looks like a forest of formulas: sum, difference, double, half, triple, product-to-sum, sum-to-product. The liberating truth: <b>every one of them is cut from a single master key</b>, the cosine difference formula<br>cos(<i>A</i> − <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>.<br>Replace <i>B</i> with −<i>B</i> and you get cos(<i>A</i> + <i>B</i>). Use the cofunction shift sin <i>θ</i> = cos(<frac><num>π</num><den>2</den></frac> − <i>θ</i>) and you get sin(<i>A</i> ± <i>B</i>). Set <i>B</i> = <i>A</i> and you get the double-angle formulas. Halve the angle and you get half-angle. Add and subtract pairs and you get product-to-sum. The whole topic is one idea wearing eight costumes.',
      },
      { t: 'fig', id: 'm11-03-fig-3.12' },
      {
        t: 'p',
        html: '<b>What a “compound angle” even means.</b> A compound angle is just an angle built from two others: <i>A</i> + <i>B</i> or <i>A</i> − <i>B</i>. The naïve guess sin(<i>A</i> + <i>B</i>) = sin <i>A</i> + sin <i>B</i> is <b>flatly wrong</b> (test <i>A</i> = <i>B</i> = 30°: sin 60° = <frac><num>√3</num><den>2</den></frac> ≈ 0.87, but sin 30° + sin 30° = 1). Trigonometric functions are not linear. The compound-angle formulas are the correct, exact replacements, and internalising “sin does not distribute over +” prevents the most common error in the entire chapter.',
      },
      {
        t: 'p',
        html: `<b>Indian-context analogy: two sitar strings and the beat.</b> Pluck two strings tuned a hair apart and you hear a slow throb: a beat. Physically, two pure tones cos(2π<i>f</i><sub>1</sub><i>t</i>) and cos(2π<i>f</i><sub>2</sub><i>t</i>) add, and the <b>sum-to-product</b> identity rewrites their sum as a single tone at the average frequency, amplitude-modulated at the difference frequency:<br>cos <i>C</i> + cos <i>D</i> = 2 cos ${CpD2} cos ${CmD2}.<br>The ${CpD2} is the note you hear; the ${CmD2} is the throb. So sum-to-product is not abstract algebra: it is literally why a slightly-detuned tanpura “beats.” Product-to-sum runs the same physics backwards.`,
      },
      {
        t: 'p',
        html: `<b>Second analogy: combining two pushes into one.</b> If you push a swing partly sideways (<i>a</i> cos <i>x</i>) and partly forward (<i>b</i> sin <i>x</i>), the net effect is a single push of strength <i>R</i> = ${ROOT} in one combined direction:<br><i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> = <i>R</i> cos(<i>x</i> − <i>α</i>),   <i>R</i> = ${ROOT}.<br>Two component oscillations always collapse into one of amplitude ${ROOT}, which instantly gives the maximum (+<i>R</i>) and minimum (−<i>R</i>) without calculus.`,
      },
      {
        t: 'p',
        html: '<b>Why this matters.</b> Errors here are structural, not arithmetic: writing cos(<i>A</i> + <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i> (wrong sign) means the derivation was memorised rather than understood. Re-derive it from cos(<i>A</i> − <i>B</i>) instead of drilling more problems. That sign error is the commonest trap in this topic.',
      },

      { t: 'part', title: 'Identity master reference' },
      {
        t: 'p',
        html: 'This is the complete catalogue. Every formula in (A) to (I) below is an identity over all admissible angles; those in (J) hold only under their stated condition. Memorise the structure; reconstruct the rest from the Derivations of the core formulas part.',
      },
      { t: 'p', html: '<b>(A) Sum & Difference (compound angle).</b>' },
      {
        t: 'formula',
        kicker: 'Sine and cosine of a sum and difference',
        main: 'cos(<i>A</i> − <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i><br>cos(<i>A</i> + <i>B</i>) = cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i><br>sin(<i>A</i> + <i>B</i>) = sin <i>A</i> cos <i>B</i> + cos <i>A</i> sin <i>B</i><br>sin(<i>A</i> − <i>B</i>) = sin <i>A</i> cos <i>B</i> − cos <i>A</i> sin <i>B</i>',
        legend: ['<i>A</i>, <i>B</i> = any two admissible angles'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Tangent of a sum and difference',
        main: 'tan(<i>A</i> + <i>B</i>) = <frac><num>tan <i>A</i> + tan <i>B</i></num><den>1 − tan <i>A</i> tan <i>B</i></den></frac><br>tan(<i>A</i> − <i>B</i>) = <frac><num>tan <i>A</i> − tan <i>B</i></num><den>1 + tan <i>A</i> tan <i>B</i></den></frac>',
        legend: ['<i>A</i>, <i>B</i> = any two admissible angles'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Cotangent of a sum and difference',
        main: 'cot(<i>A</i> + <i>B</i>) = <frac><num>cot <i>A</i> cot <i>B</i> − 1</num><den>cot <i>B</i> + cot <i>A</i></den></frac><br>cot(<i>A</i> − <i>B</i>) = <frac><num>cot <i>A</i> cot <i>B</i> + 1</num><den>cot <i>B</i> − cot <i>A</i></den></frac>',
        legend: ['<i>A</i>, <i>B</i> = any two admissible angles'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Sign mnemonic:</b> for cosine the sign flips (cos(<i>A</i> + <i>B</i>) takes the −); for sine the sign follows (sin(<i>A</i> + <i>B</i>) takes the +); for tangent the denominator sign is opposite the numerator’s.',
      },
      { t: 'p', html: '<b>(B) Useful products of compound angles.</b>' },
      {
        t: 'formula',
        kicker: 'Useful products of compound angles',
        main: 'sin(<i>A</i> + <i>B</i>) sin(<i>A</i> − <i>B</i>) = sin<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>B</i> = cos<sup>2</sup> <i>B</i> − cos<sup>2</sup> <i>A</i><br>cos(<i>A</i> + <i>B</i>) cos(<i>A</i> − <i>B</i>) = cos<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>B</i> = cos<sup>2</sup> <i>B</i> − sin<sup>2</sup> <i>A</i>',
        legend: ['<i>A</i>, <i>B</i> = any two admissible angles'],
        note: null,
      },
      { t: 'p', html: '<b>(C) Double-angle.</b>' },
      {
        t: 'formula',
        kicker: 'Double-angle formulas',
        main: 'sin 2<i>A</i> = 2 sin <i>A</i> cos <i>A</i> = <frac><num>2 tan <i>A</i></num><den>1 + tan<sup>2</sup> <i>A</i></den></frac><br>cos 2<i>A</i> = cos<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>A</i> = 2 cos<sup>2</sup> <i>A</i> − 1 = 1 − 2 sin<sup>2</sup> <i>A</i> = <frac><num>1 − tan<sup>2</sup> <i>A</i></num><den>1 + tan<sup>2</sup> <i>A</i></den></frac><br>tan 2<i>A</i> = <frac><num>2 tan <i>A</i></num><den>1 − tan<sup>2</sup> <i>A</i></den></frac>',
        legend: ['<i>A</i> = any admissible angle'],
        note: null,
      },
      { t: 'p', html: '<b>(D) Half-angle / power-reduction.</b>' },
      {
        t: 'formula',
        kicker: 'Half-angle and power-reduction formulas',
        main: `1 + cos <i>A</i> = 2 cos<sup>2</sup> ${A2}<br>1 − cos <i>A</i> = 2 sin<sup>2</sup> ${A2}<br>sin <i>A</i> = 2 sin ${A2} cos ${A2}<br>tan ${A2} = <frac><num>sin <i>A</i></num><den>1 + cos <i>A</i></den></frac> = <frac><num>1 − cos <i>A</i></num><den>sin <i>A</i></den></frac>`,
        legend: ['<i>A</i> = any admissible angle'],
        note: null,
      },
      {
        t: 'p',
        html: `<b>(E) The <i>t</i> = tan ${A2} substitution</b> (turns any rational trig expression into a rational function of <i>t</i>):`,
      },
      {
        t: 'formula',
        kicker: 'The half-angle tangent substitution',
        main: 'sin <i>A</i> = <frac><num>2<i>t</i></num><den>1 + <i>t</i><sup>2</sup></den></frac><br>cos <i>A</i> = <frac><num>1 − <i>t</i><sup>2</sup></num><den>1 + <i>t</i><sup>2</sup></den></frac><br>tan <i>A</i> = <frac><num>2<i>t</i></num><den>1 − <i>t</i><sup>2</sup></den></frac>',
        legend: [
          `<i>t</i> = the tangent of the half angle, tan ${A2}`,
          '<i>A</i> = any angle except (2<i>n</i> + 1)π',
          '<i>n</i> = any integer (<i>n</i> ∈ ℤ)',
        ],
        note: null,
      },
      { t: 'p', html: '<b>(F) Triple-angle.</b>' },
      {
        t: 'formula',
        kicker: 'Triple-angle formulas',
        main: 'sin 3<i>A</i> = 3 sin <i>A</i> − 4 sin<sup>3</sup> <i>A</i><br>cos 3<i>A</i> = 4 cos<sup>3</sup> <i>A</i> − 3 cos <i>A</i><br>tan 3<i>A</i> = <frac><num>3 tan <i>A</i> − tan<sup>3</sup> <i>A</i></num><den>1 − 3 tan<sup>2</sup> <i>A</i></den></frac>',
        legend: ['<i>A</i> = any admissible angle'],
        note: null,
      },
      { t: 'p', html: '<b>(G) Product → Sum.</b>' },
      {
        t: 'formula',
        kicker: 'Product to sum',
        main: '2 sin <i>A</i> cos <i>B</i> = sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>)<br>2 cos <i>A</i> sin <i>B</i> = sin(<i>A</i> + <i>B</i>) − sin(<i>A</i> − <i>B</i>)<br>2 cos <i>A</i> cos <i>B</i> = cos(<i>A</i> + <i>B</i>) + cos(<i>A</i> − <i>B</i>)<br>2 sin <i>A</i> sin <i>B</i> = cos(<i>A</i> − <i>B</i>) − cos(<i>A</i> + <i>B</i>)',
        legend: ['<i>A</i>, <i>B</i> = any two angles'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>(H) Sum → Product</b> (write <i>C</i> = <i>A</i> + <i>B</i>, <i>D</i> = <i>A</i> − <i>B</i>):',
      },
      {
        t: 'formula',
        kicker: 'Sum to product',
        main: `sin <i>C</i> + sin <i>D</i> = 2 sin ${CpD2} cos ${CmD2}<br>sin <i>C</i> − sin <i>D</i> = 2 cos ${CpD2} sin ${CmD2}<br>cos <i>C</i> + cos <i>D</i> = 2 cos ${CpD2} cos ${CmD2}<br>cos <i>C</i> − cos <i>D</i> = −2 sin ${CpD2} sin ${CmD2}`,
        legend: ['<i>C</i>, <i>D</i> = any two angles'],
        note: null,
      },
      { t: 'p', html: '<b>(I) Linear combination (amplitude form).</b>' },
      {
        t: 'formula',
        kicker: 'Linear combination (amplitude form)',
        main: `<i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> = <i>R</i> cos(<i>x</i> − <i>α</i>)<br><i>R</i> = ${ROOT}<br>tan <i>α</i> = <frac><num><i>b</i></num><den><i>a</i></den></frac><br>Range: [−${ROOT}, ${ROOT}]`,
        legend: [
          '<i>a</i> = the coefficient of cos <i>x</i>',
          '<i>b</i> = the coefficient of sin <i>x</i>',
          '<i>R</i> = the amplitude of the combined form',
          '<i>α</i> = the phase angle (with cos <i>α</i> = <frac><num><i>a</i></num><den><i>R</i></den></frac> and sin <i>α</i> = <frac><num><i>b</i></num><den><i>R</i></den></frac>)',
          '<i>x</i> = the variable angle',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>(J) Conditional identities</b> (hold when <i>A</i> + <i>B</i> + <i>C</i> = π, i.e. angles of a triangle; the first two hold whenever <i>A</i> + <i>B</i> + <i>C</i> is a multiple of π):',
      },
      {
        t: 'formula',
        kicker: 'Conditional identities (angles of a triangle)',
        main: `tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i><br>cot <i>A</i> cot <i>B</i> + cot <i>B</i> cot <i>C</i> + cot <i>C</i> cot <i>A</i> = 1<br>sin 2<i>A</i> + sin 2<i>B</i> + sin 2<i>C</i> = 4 sin <i>A</i> sin <i>B</i> sin <i>C</i><br>cos 2<i>A</i> + cos 2<i>B</i> + cos 2<i>C</i> = −1 − 4 cos <i>A</i> cos <i>B</i> cos <i>C</i><br>sin <i>A</i> + sin <i>B</i> + sin <i>C</i> = 4 cos ${A2} cos ${half('<i>B</i>')} cos ${half('<i>C</i>')}<br>cos <i>A</i> + cos <i>B</i> + cos <i>C</i> = 1 + 4 sin ${A2} sin ${half('<i>B</i>')} sin ${half('<i>C</i>')}`,
        legend: ['<i>A</i>, <i>B</i>, <i>C</i> = the angles of a triangle (sum π)'],
        note: null,
      },

      { t: 'part', title: 'Derivations of the core formulas' },
      {
        t: 'p',
        html: '<b>(a) The master key: cos(<i>A</i> − <i>B</i>) from the unit circle (the NCERT derivation).</b><br>Place four points on the unit circle: <i>P</i><sub>1</sub> = (cos <i>A</i>, sin <i>A</i>), <i>P</i><sub>2</sub> = (cos <i>B</i>, sin <i>B</i>), <i>P</i><sub>3</sub> = (cos(<i>A</i> − <i>B</i>), sin(<i>A</i> − <i>B</i>)), and <i>P</i><sub>4</sub> = (1, 0). The chord <i>P</i><sub>1</sub><i>P</i><sub>2</sub> subtends the angle <i>A</i> − <i>B</i> at the centre; so does the chord <i>P</i><sub>3</sub><i>P</i><sub>4</sub>. Equal central angles ⇒ equal chords, so <i>P</i><sub>1</sub><i>P</i><sub>2</sub> = <i>P</i><sub>3</sub><i>P</i><sub>4</sub>, hence <i>P</i><sub>1</sub><i>P</i><sub>2</sub><sup>2</sup> = <i>P</i><sub>3</sub><i>P</i><sub>4</sub><sup>2</sup>.',
      },
      { t: 'fig', id: 'm11-03-fig-3.13' },
      {
        t: 'p',
        html: 'Compute both squared lengths:<br><i>P</i><sub>1</sub><i>P</i><sub>2</sub><sup>2</sup> = (cos <i>A</i> − cos <i>B</i>)<sup>2</sup> + (sin <i>A</i> − sin <i>B</i>)<sup>2</sup> = 2 − 2(cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>),<br><i>P</i><sub>3</sub><i>P</i><sub>4</sub><sup>2</sup> = (cos(<i>A</i> − <i>B</i>) − 1)<sup>2</sup> + sin<sup>2</sup>(<i>A</i> − <i>B</i>) = 2 − 2 cos(<i>A</i> − <i>B</i>).<br>Setting them equal and cancelling:<br><b>cos(<i>A</i> − <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>.</b>',
      },
      {
        t: 'p',
        html: '<b>(b) Everything else, from the master key.</b><br><b>Cosine sum:</b> replace <i>B</i> → −<i>B</i> (using cos(−<i>B</i>) = cos <i>B</i>, sin(−<i>B</i>) = −sin <i>B</i>):<br>cos(<i>A</i> + <i>B</i>) = cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i>.',
      },
      {
        t: 'p',
        html: '<b>Sine sum:</b> use the cofunction identity sin <i>θ</i> = cos(<frac><num>π</num><den>2</den></frac> − <i>θ</i>):<br>sin(<i>A</i> + <i>B</i>) = cos(<frac><num>π</num><den>2</den></frac> − (<i>A</i> + <i>B</i>)) = cos((<frac><num>π</num><den>2</den></frac> − <i>A</i>) − <i>B</i>) = cos(<frac><num>π</num><den>2</den></frac> − <i>A</i>) cos <i>B</i> + sin(<frac><num>π</num><den>2</den></frac> − <i>A</i>) sin <i>B</i><br>= sin <i>A</i> cos <i>B</i> + cos <i>A</i> sin <i>B</i>.<br>Replace <i>B</i> → −<i>B</i> for sin(<i>A</i> − <i>B</i>) = sin <i>A</i> cos <i>B</i> − cos <i>A</i> sin <i>B</i>.',
      },
      {
        t: 'p',
        html: '<b>Tangent sum:</b> divide sin(<i>A</i> + <i>B</i>) by cos(<i>A</i> + <i>B</i>), then divide numerator and denominator by cos <i>A</i> cos <i>B</i>:<br>tan(<i>A</i> + <i>B</i>) = <frac><num>sin <i>A</i> cos <i>B</i> + cos <i>A</i> sin <i>B</i></num><den>cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i></den></frac> = <frac><num>tan <i>A</i> + tan <i>B</i></num><den>1 − tan <i>A</i> tan <i>B</i></den></frac>.',
      },
      {
        t: 'p',
        html: '<b>(c) Double-angle (set <i>B</i> = <i>A</i>).</b><br>sin 2<i>A</i> = sin(<i>A</i> + <i>A</i>) = 2 sin <i>A</i> cos <i>A</i>,<br>cos 2<i>A</i> = cos(<i>A</i> + <i>A</i>) = cos<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>A</i>.<br>Using sin<sup>2</sup> <i>A</i> + cos<sup>2</sup> <i>A</i> = 1 gives the two alternative forms 2 cos<sup>2</sup> <i>A</i> − 1 and 1 − 2 sin<sup>2</sup> <i>A</i>. Dividing through by cos<sup>2</sup> <i>A</i> gives the tan-forms <frac><num>1 − tan<sup>2</sup> <i>A</i></num><den>1 + tan<sup>2</sup> <i>A</i></den></frac> and <frac><num>2 tan <i>A</i></num><den>1 + tan<sup>2</sup> <i>A</i></den></frac>.',
      },
      {
        t: 'p',
        html: `<b>(d) Half-angle / power-reduction (rearrange double-angle).</b> From cos 2<i>A</i> = 2 cos<sup>2</sup> <i>A</i> − 1: cos<sup>2</sup> <i>A</i> = <frac><num>1 + cos 2<i>A</i></num><den>2</den></frac>. From cos 2<i>A</i> = 1 − 2 sin<sup>2</sup> <i>A</i>: sin<sup>2</sup> <i>A</i> = <frac><num>1 − cos 2<i>A</i></num><den>2</den></frac>. Writing <i>A</i> → ${A2} gives 1 + cos <i>A</i> = 2 cos<sup>2</sup> ${A2} and 1 − cos <i>A</i> = 2 sin<sup>2</sup> ${A2}. Dividing the latter by sin <i>A</i> = 2 sin ${A2} cos ${A2} gives tan ${A2} = <frac><num>1 − cos <i>A</i></num><den>sin <i>A</i></den></frac>.`,
      },
      {
        t: 'p',
        html: '<b>(e) Triple-angle (use 3<i>A</i> = 2<i>A</i> + <i>A</i>).</b><br>sin 3<i>A</i> = sin 2<i>A</i> cos <i>A</i> + cos 2<i>A</i> sin <i>A</i> = 2 sin <i>A</i> cos<sup>2</sup> <i>A</i> + (1 − 2 sin<sup>2</sup> <i>A</i>) sin <i>A</i><br>= 2 sin <i>A</i>(1 − sin<sup>2</sup> <i>A</i>) + sin <i>A</i> − 2 sin<sup>3</sup> <i>A</i> = 3 sin <i>A</i> − 4 sin<sup>3</sup> <i>A</i>.<br>cos 3<i>A</i> = cos 2<i>A</i> cos <i>A</i> − sin 2<i>A</i> sin <i>A</i> = (2 cos<sup>2</sup> <i>A</i> − 1) cos <i>A</i> − 2 sin<sup>2</sup> <i>A</i> cos <i>A</i> = 4 cos<sup>3</sup> <i>A</i> − 3 cos <i>A</i>.',
      },
      {
        t: 'p',
        html: '<b>(f) Product → Sum (add/subtract the sine/cosine sum & difference formulas).</b><br>Adding sin(<i>A</i> + <i>B</i>) and sin(<i>A</i> − <i>B</i>) cancels the cos <i>A</i> sin <i>B</i> terms:<br>sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>) = 2 sin <i>A</i> cos <i>B</i>.<br>The other three follow identically.',
      },
      {
        t: 'p',
        html: `<b>(g) Sum → Product (substitution).</b> In the product-to-sum formulas, set <i>C</i> = <i>A</i> + <i>B</i>, <i>D</i> = <i>A</i> − <i>B</i>, so <i>A</i> = ${CpD2}, <i>B</i> = ${CmD2}. Then sin <i>C</i> + sin <i>D</i> = 2 sin ${CpD2} cos ${CmD2}, and the rest similarly. The <b>minus sign</b> in cos <i>C</i> − cos <i>D</i> = −2 sin ${CpD2} sin ${CmD2} is the one to watch.`,
      },
      {
        t: 'p',
        html: `<b>(h) Amplitude form.</b> Expand <i>R</i> cos(<i>x</i> − <i>α</i>) = <i>R</i> cos <i>x</i> cos <i>α</i> + <i>R</i> sin <i>x</i> sin <i>α</i>. Match with <i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i>: <i>R</i> cos <i>α</i> = <i>a</i>, <i>R</i> sin <i>α</i> = <i>b</i>. Square and add: <i>R</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>, so <i>R</i> = ${ROOT} and tan <i>α</i> = <frac><num><i>b</i></num><den><i>a</i></den></frac>. Since cos(<i>x</i> − <i>α</i>) ∈ [−1, 1], the expression ranges over [−<i>R</i>, <i>R</i>].`,
      },

      { t: 'part', title: 'Worked examples (difficulty-laddered)' },
      {
        t: 'ex',
        tag: 'CBSE Board level (exact value)',
        q: 'Find cos 15°.',
        steps: [
          'cos 15° = cos(45° − 30°) = cos 45° cos 30° + sin 45° sin 30° = <frac><num>1</num><den>√2</den></frac> · <frac><num>√3</num><den>2</den></frac> + <frac><num>1</num><den>√2</den></frac> · <frac><num>1</num><den>2</den></frac> = <frac><num>√6 + √2</num><den>4</den></frac>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level (prove an identity)',
        q: 'Prove cos(<i>A</i> + <i>B</i>) cos(<i>A</i> − <i>B</i>) = cos<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>B</i>.',
        steps: [
          'LHS = (cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i>)(cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>) = cos<sup>2</sup> <i>A</i> cos<sup>2</sup> <i>B</i> − sin<sup>2</sup> <i>A</i> sin<sup>2</sup> <i>B</i>.',
          'Write cos<sup>2</sup> <i>B</i> = 1 − sin<sup>2</sup> <i>B</i> and sin<sup>2</sup> <i>A</i> = 1 − cos<sup>2</sup> <i>A</i>:<br>= cos<sup>2</sup> <i>A</i>(1 − sin<sup>2</sup> <i>B</i>) − (1 − cos<sup>2</sup> <i>A</i>) sin<sup>2</sup> <i>B</i> = cos<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>B</i> = RHS. ■',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET level (awkward angle)',
        q: 'Evaluate sin <frac><num>7π</num><den>12</den></frac>.',
        steps: [
          '<frac><num>7π</num><den>12</den></frac> = <frac><num>π</num><den>4</den></frac> + <frac><num>π</num><den>3</den></frac>,   sin(<frac><num>π</num><den>4</den></frac> + <frac><num>π</num><den>3</den></frac>) = <frac><num>1</num><den>√2</den></frac> · <frac><num>1</num><den>2</den></frac> + <frac><num>1</num><den>√2</den></frac> · <frac><num>√3</num><den>2</den></frac> = <frac><num>√2 + √6</num><den>4</den></frac>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (signs + compound angle)',
        q: 'If sin <i>A</i> = <frac><num>3</num><den>5</den></frac> with <i>A</i> acute, and cos <i>B</i> = −<frac><num>12</num><den>13</den></frac> with <i>B</i> obtuse, find sin(<i>A</i> + <i>B</i>).',
        steps: [
          '<i>A</i> acute (Q I): cos <i>A</i> = <frac><num>4</num><den>5</den></frac>. <i>B</i> obtuse (Q II): sin <i>B</i> = +<frac><num>5</num><den>13</den></frac>.',
          'sin(<i>A</i> + <i>B</i>) = sin <i>A</i> cos <i>B</i> + cos <i>A</i> sin <i>B</i> = <frac><num>3</num><den>5</den></frac> · (−<frac><num>12</num><den>13</den></frac>) + <frac><num>4</num><den>5</den></frac> · <frac><num>5</num><den>13</den></frac> = <frac><num>−36 + 20</num><den>65</den></frac> = −<frac><num>16</num><den>65</den></frac>.',
          '(The whole difficulty is the sign of sin <i>B</i>: connects directly to Topic 02’s “sign from quadrant” rule.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (sum-to-product)',
        q: 'Prove <frac><num>sin 3<i>A</i> + sin <i>A</i></num><den>cos 3<i>A</i> + cos <i>A</i></den></frac> = tan 2<i>A</i>.',
        steps: [
          'sin 3<i>A</i> + sin <i>A</i> = 2 sin 2<i>A</i> cos <i>A</i>,   cos 3<i>A</i> + cos <i>A</i> = 2 cos 2<i>A</i> cos <i>A</i>.',
          '∴ <frac><num>2 sin 2<i>A</i> cos <i>A</i></num><den>2 cos 2<i>A</i> cos <i>A</i></den></frac> = tan 2<i>A</i>. ■',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (max/min)',
        q: 'Find the maximum and minimum of 7 cos <i>x</i> + 24 sin <i>x</i> + 5.',
        steps: [
          '<i>R</i> = √(7<sup>2</sup> + 24<sup>2</sup>) = 25, so 7 cos <i>x</i> + 24 sin <i>x</i> ∈ [−25, 25] and max = 30, min = −20.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (elegant product)',
        q: 'Prove cos 20° cos 40° cos 80° = <frac><num>1</num><den>8</den></frac>.',
        steps: [
          'Multiply/divide by 2 sin 20° and cascade 2 sin <i>θ</i> cos <i>θ</i> = sin 2<i>θ</i>:',
          'cos 20° cos 40° cos 80° = <frac><num>sin 40° cos 40° cos 80°</num><den>2 sin 20°</den></frac> = <frac><num>sin 80° cos 80°</num><den>4 sin 20°</den></frac> = <frac><num>sin 160°</num><den>8 sin 20°</den></frac> = <frac><num>sin 20°</num><den>8 sin 20°</den></frac> = <frac><num>1</num><den>8</den></frac>,<br>using sin 160° = sin 20°. ■',
          '(The “advanced” move is the deliberate × <frac><num>2 sin 20°</num><den>2 sin 20°</den></frac> to start a double-angle cascade: a signature JEE technique that does not appear by pattern-matching.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (conditional identity)',
        q: 'If <i>A</i> + <i>B</i> + <i>C</i> = π, prove tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>.',
        steps: [
          'From <i>A</i> + <i>B</i> = π − <i>C</i>: tan(<i>A</i> + <i>B</i>) = tan(π − <i>C</i>) = −tan <i>C</i>, so<br><frac><num>tan <i>A</i> + tan <i>B</i></num><den>1 − tan <i>A</i> tan <i>B</i></den></frac> = −tan <i>C</i> ⟹ tan <i>A</i> + tan <i>B</i> = −tan <i>C</i> + tan <i>A</i> tan <i>B</i> tan <i>C</i>,<br>∴ tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>. ■',
          '(The condition <i>A</i> + <i>B</i> + <i>C</i> = π is used at the very first step: drop it and the identity is false.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the exact value of tan 75°.',
            a: 'tan(45° + 30°) = <frac><num>1 + <frac><num>1</num><den>√3</den></frac></num><den>1 − <frac><num>1</num><den>√3</den></frac></den></frac> = <frac><num>√3 + 1</num><den>√3 − 1</den></frac> = 2 + √3.',
          },
          {
            q: 'Prove: sin(<i>A</i> + <i>B</i>) sin(<i>A</i> − <i>B</i>) = sin<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>B</i>.',
            a: '(sin <i>A</i> cos <i>B</i> + cos <i>A</i> sin <i>B</i>)(sin <i>A</i> cos <i>B</i> − cos <i>A</i> sin <i>B</i>) = sin<sup>2</sup> <i>A</i> cos<sup>2</sup> <i>B</i> − cos<sup>2</sup> <i>A</i> sin<sup>2</sup> <i>B</i>, then write cos<sup>2</sup> <i>B</i> = 1 − sin<sup>2</sup> <i>B</i> and cos<sup>2</sup> <i>A</i> = 1 − sin<sup>2</sup> <i>A</i>: sin<sup>2</sup> <i>A</i>(1 − sin<sup>2</sup> <i>B</i>) − (1 − sin<sup>2</sup> <i>A</i>) sin<sup>2</sup> <i>B</i> = sin<sup>2</sup> <i>A</i> − sin<sup>2</sup> <i>B</i>.',
          },
          {
            q: 'If tan <i>A</i> = <frac><num>1</num><den>2</den></frac> and tan <i>B</i> = <frac><num>1</num><den>3</den></frac>, find tan(<i>A</i> + <i>B</i>).',
            a: '<frac><num><frac><num>1</num><den>2</den></frac> + <frac><num>1</num><den>3</den></frac></num><den>1 − <frac><num>1</num><den>6</den></frac></den></frac> = <frac><num><frac><num>5</num><den>6</den></frac></num><den><frac><num>5</num><den>6</den></frac></den></frac> = 1.',
          },
          {
            q: 'Express sin 5<i>x</i> + sin 3<i>x</i> as a product and simplify <frac><num>sin 5<i>x</i> + sin 3<i>x</i></num><den>cos 5<i>x</i> + cos 3<i>x</i></den></frac>.',
            a: 'sin 5<i>x</i> + sin 3<i>x</i> = 2 sin 4<i>x</i> cos <i>x</i>; cos 5<i>x</i> + cos 3<i>x</i> = 2 cos 4<i>x</i> cos <i>x</i>; ratio = tan 4<i>x</i>.',
          },
          {
            q: 'Find the maximum value of 3 sin <i>x</i> + 4 cos <i>x</i> + 10.',
            a: '<i>R</i> = 5; max = 15.',
          },
          {
            q: 'Prove: <frac><num>sin 2<i>A</i></num><den>1 + cos 2<i>A</i></den></frac> = tan <i>A</i>.',
            a: '<frac><num>2 sin <i>A</i> cos <i>A</i></num><den>2 cos<sup>2</sup> <i>A</i></den></frac> = tan <i>A</i>.',
          },
          {
            q: `In a triangle <i>ABC</i>, prove cos <i>A</i> + cos <i>B</i> + cos <i>C</i> = 1 + 4 sin ${A2} sin ${half('<i>B</i>')} sin ${half('<i>C</i>')}.`,
            a: `Pair cos <i>A</i> + cos <i>B</i> = 2 cos ${half('<i>A</i> + <i>B</i>')} cos ${half('<i>A</i> − <i>B</i>')}; use ${half('<i>A</i> + <i>B</i>')} = <frac><num>π</num><den>2</den></frac> − ${half('<i>C</i>')} so cos ${half('<i>A</i> + <i>B</i>')} = sin ${half('<i>C</i>')}; then cos <i>C</i> = 1 − 2 sin<sup>2</sup> ${half('<i>C</i>')}; factor 2 sin ${half('<i>C</i>')}.`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'cos(<i>A</i> + <i>B</i>) =',
        opts: [
          {
            label: 'cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>',
            nudge: '<b>(A)</b> is cos(<i>A</i> − <i>B</i>): the <b>sign-flip trap</b>, the single most common error.',
          },
          { label: 'cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i>', nudge: null },
          { label: 'cos <i>A</i> sin <i>B</i> + sin <i>A</i> cos <i>B</i>', nudge: '<b>(C)</b> is sin(<i>A</i> + <i>B</i>).' },
          { label: 'sin <i>A</i> sin <i>B</i> − cos <i>A</i> cos <i>B</i>', nudge: '<b>(D)</b> is −cos(<i>A</i> + <i>B</i>).' },
        ],
        correct: 1,
        solution:
          'Replace <i>B</i> by −<i>B</i> in the master key cos(<i>A</i> − <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>: cos(<i>A</i> + <i>B</i>) = cos <i>A</i> cos <i>B</i> − sin <i>A</i> sin <i>B</i>.',
      },
      {
        t: 'mcq',
        q: 'If tan <i>A</i> = <frac><num>1</num><den>2</den></frac>, tan <i>B</i> = <frac><num>1</num><den>3</den></frac> (<i>A</i>, <i>B</i> acute), then <i>A</i> + <i>B</i> =',
        opts: [
          {
            label: '<frac><num>π</num><den>6</den></frac>',
            nudge:
              '<b>(A)</b> <frac><num>π</num><den>6</den></frac> would need tan(<i>A</i> + <i>B</i>) = <frac><num>1</num><den>√3</den></frac>; the formula gives 1.',
          },
          { label: '<frac><num>π</num><den>4</den></frac>', nudge: null },
          {
            label: '<frac><num>π</num><den>3</den></frac>',
            nudge: '<b>(C)</b> <frac><num>π</num><den>3</den></frac> would need tan(<i>A</i> + <i>B</i>) = √3; the formula gives 1.',
          },
          {
            label: '<frac><num>π</num><den>2</den></frac>',
            nudge:
              '<b>(D)</b> <frac><num>π</num><den>2</den></frac> would need 1 − tan <i>A</i> tan <i>B</i> = 0, but tan <i>A</i> tan <i>B</i> = <frac><num>1</num><den>6</den></frac>.',
          },
        ],
        correct: 1,
        solution:
          'tan(<i>A</i> + <i>B</i>) = <frac><num><frac><num>1</num><den>2</den></frac> + <frac><num>1</num><den>3</den></frac></num><den>1 − <frac><num>1</num><den>6</den></frac></den></frac> = 1 ⇒ <i>A</i> + <i>B</i> = <frac><num>π</num><den>4</den></frac>. Using 1 + tan <i>A</i> tan <i>B</i> below (wrong sign) breaks the clean answer.',
      },
      {
        t: 'mcq',
        q: 'The maximum value of 5 sin <i>x</i> + 12 cos <i>x</i> is:',
        opts: [
          { label: '17', nudge: '<b>(A)</b> adds the coefficients: the amplitude trap.' },
          { label: '13', nudge: null },
          { label: '√17', nudge: '<b>(C)</b> takes √(<i>a</i> + <i>b</i>).' },
          { label: '7', nudge: '<b>(D)</b> subtracts.' },
        ],
        correct: 1,
        solution: '<i>R</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13.',
      },
      {
        t: 'mcq',
        q: 'cos <i>C</i> − cos <i>D</i> =',
        opts: [
          { label: `2 sin ${CpD2} sin ${CmD2}`, nudge: '<b>(A)</b> drops the minus.' },
          { label: `−2 sin ${CpD2} sin ${CmD2}`, nudge: null },
          { label: `2 cos ${CpD2} cos ${CmD2}`, nudge: '<b>(C)</b> is cos <i>C</i> + cos <i>D</i>.' },
          {
            label: `−2 cos ${CpD2} sin ${CmD2}`,
            nudge: '<b>(D)</b> is −(sin <i>C</i> − sin <i>D</i>), that is sin <i>D</i> − sin <i>C</i>.',
          },
        ],
        correct: 1,
        solution: 'The cos difference carries a leading <b>minus</b>.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>The cosine/tangent sign flip.</b> cos(<i>A</i> + <i>B</i>) takes −, cos(<i>A</i> − <i>B</i>) takes +; tan(<i>A</i> + <i>B</i>) has 1 − tan <i>A</i> tan <i>B</i> below, tan(<i>A</i> − <i>B</i>) has 1+. Cosine “disagrees” with the angle sign; sine “agrees.”',
          '<b>Assuming sin/cos distribute.</b> sin(<i>A</i> + <i>B</i>) ≠ sin <i>A</i> + sin <i>B</i>. Always use the formula.',
          '<b>Wrong cos 2<i>A</i> form.</b> If given sin <i>A</i> use 1 − 2 sin<sup>2</sup> <i>A</i>; if given cos <i>A</i> use 2 cos<sup>2</sup> <i>A</i> − 1; if given tan <i>A</i> use <frac><num>1 − tan<sup>2</sup> <i>A</i></num><den>1 + tan<sup>2</sup> <i>A</i></den></frac>.',
          '<b>Dropping the factor 2 in product↔sum.</b> 2 sin <i>A</i> cos <i>B</i> = sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>): the leading 2 is part of the formula.',
          `<b>The minus in cos <i>C</i> − cos <i>D</i>.</b> It is −2 sin ${CpD2} sin ${CmD2}.`,
          '<b>Conditional identities without the condition.</b> tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i> holds <b>only</b> when <i>A</i> + <i>B</i> + <i>C</i> is a multiple of π (for a triangle, <i>A</i> + <i>B</i> + <i>C</i> = π).',
          `<b>Amplitude as <i>a</i> + <i>b</i>.</b> For <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i>, amplitude is ${ROOT}, not <i>a</i> + <i>b</i> (the two agree only when one coefficient is 0).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Memorise cos(<i>A</i> − <i>B</i>) and the derivation tree in the Concept intuition part; reconstruct the rest under pressure: 20 seconds, never fails.<br>• For exact angles, decompose into 30°, 45°, 60°: 15° = 45° − 30°, 75° = 45° + 30°, <frac><num>7π</num><den>12</den></frac> = <frac><num>π</num><den>4</den></frac> + <frac><num>π</num><den>3</den></frac>.<br>• For a ratio of sums of sines/cosines, convert top and bottom to products: the common factor cancels to a clean tan.<br>• For products like cos 20° cos 40° cos 80°, multiply by <frac><num>2 sin(smallest)</num><den>2 sin(same)</den></frac> and cascade double-angle.<br>• For max/min of <i>a</i> sin <i>x</i> + <i>b</i> cos <i>x</i> + <i>c</i>, the answer is <i>c</i> ± ${ROOT}: no calculus.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Master key',
            note: 'cos(<i>A</i> − <i>B</i>) = cos <i>A</i> cos <i>B</i> + sin <i>A</i> sin <i>B</i>. All else descends from it.',
          },
          {
            f: 'Sum/diff',
            note: 'cos(<i>A</i> ± <i>B</i>) = cos <i>A</i> cos <i>B</i> ∓ sin <i>A</i> sin <i>B</i>; sin(<i>A</i> ± <i>B</i>) = sin <i>A</i> cos <i>B</i> ± cos <i>A</i> sin <i>B</i>.',
          },
          {
            f: 'Tan',
            note: 'tan(<i>A</i> ± <i>B</i>) = <frac><num>tan <i>A</i> ± tan <i>B</i></num><den>1 ∓ tan <i>A</i> tan <i>B</i></den></frac>.',
          },
          {
            f: 'Double',
            note: 'sin 2<i>A</i> = 2 sin <i>A</i> cos <i>A</i>; cos 2<i>A</i> = 1 − 2 sin<sup>2</sup> <i>A</i> = 2 cos<sup>2</sup> <i>A</i> − 1; tan 2<i>A</i> = <frac><num>2 tan <i>A</i></num><den>1 − tan<sup>2</sup> <i>A</i></den></frac>.',
          },
          {
            f: 'Half',
            note: `1 + cos <i>A</i> = 2 cos<sup>2</sup> ${A2}, 1 − cos <i>A</i> = 2 sin<sup>2</sup> ${A2}, tan ${A2} = <frac><num>1 − cos <i>A</i></num><den>sin <i>A</i></den></frac>.`,
          },
          {
            f: `<i>t</i> = tan ${A2}`,
            note: 'sin <i>A</i> = <frac><num>2<i>t</i></num><den>1 + <i>t</i><sup>2</sup></den></frac>, cos <i>A</i> = <frac><num>1 − <i>t</i><sup>2</sup></num><den>1 + <i>t</i><sup>2</sup></den></frac>, tan <i>A</i> = <frac><num>2<i>t</i></num><den>1 − <i>t</i><sup>2</sup></den></frac>.',
          },
          {
            f: 'Triple',
            note: 'sin 3<i>A</i> = 3 sin <i>A</i> − 4 sin<sup>3</sup> <i>A</i>; cos 3<i>A</i> = 4 cos<sup>3</sup> <i>A</i> − 3 cos <i>A</i>.',
          },
          {
            f: 'Prod→sum',
            note: '2 sin <i>A</i> cos <i>B</i> = sin(<i>A</i> + <i>B</i>) + sin(<i>A</i> − <i>B</i>) (and the other three).',
          },
          {
            f: 'Sum→prod',
            note: `cos <i>C</i> − cos <i>D</i> = −2 sin ${CpD2} sin ${CmD2} (watch the minus).`,
          },
          {
            f: 'Amplitude',
            note: `<i>a</i> cos <i>x</i> + <i>b</i> sin <i>x</i> = <i>R</i> cos(<i>x</i> − <i>α</i>), <i>R</i> = ${ROOT}; range [−<i>R</i>, <i>R</i>].`,
          },
          {
            f: 'Conditional (<i>A</i> + <i>B</i> + <i>C</i> = π)',
            note: '∑ tan <i>A</i> = ∏ tan <i>A</i>; ∑ cot <i>A</i> cot <i>B</i> = 1 (cyclic).',
          },
          {
            f: 'Golden rule',
            note: `reconstruct from cos(<i>A</i> − <i>B</i>); watch every ±; amplitude is ${ROOT}.`,
          },
        ],
        aids: [],
      },
    ],
  },
];
