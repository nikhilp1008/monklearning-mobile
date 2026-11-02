import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional Topics, word for word from the Class 11 Chemistry
 * Master Reference: the shared opening of "Chapter 6: Equilibrium —
 * Additional Topics" (p. 284, set at the head of Additional topic A's
 * Introduction), then A The Polyprotic Toolkit (pp. 284–286), B Titration
 * Thinking (pp. 286–288; its titration curves, p. 287, captioned "Figure 1" in
 * the book, are c11-06-B-d1, the caption belonging to the diagram), C
 * Precipitation Decisions (pp. 288–289), D Le Chatelier, Quantified
 * (pp. 289–290) and E, the book's "Addendum P — What JEE and NEET Actually
 * Ask" (pp. 291–294), kept as the last Additional topic by Nikhil's decision.
 *
 * The book prints the addenda's practice answers together on pp. 290–291,
 * "Answers to Practice (Addenda A–D)", numbered on from 1 to 10 across the
 * addenda (A 1–3, B 4–6, C 7–8, D 9–10); each answer is set here with its own
 * question. Label subscripts are upright (K with c, p, a1, sp; Q with p, sp),
 * though the book sets c and p in italic; partial-pressure subscripts carry
 * Unicode subscript digits (PCl₅), as in the earlier chapters.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 284–286 ─────────────────────────
  {
    n: 'A',
    title: 'The Polyprotic Toolkit',
    extra: true,
    kalam: 'The pH of a polyprotic acid solution is set almost entirely by the first ionisation; the later steps add negligibly to [H+].',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covered both halves of equilibrium — the gaseous (<i>K</i><sub>c</sub>, <i>K</i><sub>p</sub>, reaction quotient, Le Chatelier, Gibbs energy) and the ionic (pH, <i>K</i><sub>a</sub>/<i>K</i><sub>b</sub>, buffers, <i>K</i><sub>sp</sub>, hydrolysis) — with solid fundamentals in each. What the exam additionally demands is a set of composite routines (some first met in the topics) that sit at the seams between those fundamentals. Addendum A builds the polyprotic toolkit: why the stepwise constants fall off, the pH of amphiprotic salts like NaHCO<sub>3</sub>, and the H<sub>2</sub>S common-ion pattern that NCERT itself sets as an exercise. Addendum B teaches titration thinking: reading a titration curve point by point, the millimole bookkeeping for mixed solutions, and indicator logic. Addendum C turns <i>K</i><sub>sp</sub> into precipitation decisions, including the dilution-on-mixing trap and “which precipitates first”. Addendum D quantifies Le Chatelier — inert gas at constant pressure recomputed properly, pressure versus degree of dissociation, and combined disturbances. Every fact is verifiable against NCERT Class 11 Chemistry, Unit 6 (Equilibrium).',
      },

      { t: 'part', title: 'A.1 Why the steps fall off, and what each step controls' },
      {
        t: 'p',
        html: 'A polyprotic acid ionises one proton at a time, and NCERT gives the reason each step is weaker than the last: removing a positively charged proton from an already negative ion is electrostatically harder. For H<sub>3</sub>PO<sub>4</sub> the constants are roughly <i>K</i><sub>a1</sub> = 7.5 × 10<sup>−3</sup>, <i>K</i><sub>a2</sub> = 6.2 × 10<sup>−8</sup>, <i>K</i><sub>a3</sub> = 4.2 × 10<sup>−13</sup> — each step about five orders of magnitude weaker. Two consequences the exam uses constantly:<br>1. The pH of a polyprotic acid solution is set almost entirely by the <b>first</b> ionisation; the later steps add negligibly to [H<sup>+</sup>].<br>2. The overall constant for a summed process is the product of the step constants:',
      },
      { t: 'p', html: 'For the summed ionisation of hydrogen sulfide:' },
      {
        t: 'formula',
        kicker: 'Summed ionisation of hydrogen sulfide',
        main: 'H<sub>2</sub>S ⇌ 2H<sup>+</sup> + S<sup>2−</sup><br><i>K</i> = <i>K</i><sub>a1</sub><i>K</i><sub>a2</sub>',
        legend: [
          '<i>K</i> = overall constant of the summed ionisation',
          '<i>K</i><sub>a1</sub> = ionisation constant of the first step',
          '<i>K</i><sub>a2</sub> = ionisation constant of the second step',
        ],
        note: null,
      },

      { t: 'part', title: 'A.2 The amphiprotic salt: pH of NaHCO3-type solutions' },
      {
        t: 'p',
        html: 'A salt like NaHCO<sub>3</sub> or NaH<sub>2</sub>PO<sub>4</sub> contains an ion that can both donate and accept a proton. Its pH follows from the two equilibria it sits between:',
      },
      {
        t: 'formula',
        kicker: 'The two equilibria the amphiprotic ion sits between',
        main: '<i>K</i><sub>a1</sub> = ([H<sup>+</sup>][HA<sup>−</sup>])/[H<sub>2</sub>A]<br><i>K</i><sub>a2</sub> = ([H<sup>+</sup>][A<sup>2−</sup>])/[HA<sup>−</sup>]',
        legend: [
          '<i>K</i><sub>a1</sub> = first ionisation constant of H<sub>2</sub>A',
          '<i>K</i><sub>a2</sub> = second ionisation constant of H<sub>2</sub>A',
          'H<sub>2</sub>A = the diprotic acid',
          'HA<sup>−</sup> = the amphiprotic ion',
          'A<sup>2−</sup> = the fully deprotonated ion',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'In a solution of NaHA the proton balance gives [H<sub>2</sub>A] ≈ [A<sup>2−</sup>] (every proton picked up creates one H<sub>2</sub>A, every proton lost creates one A<sup>2−</sup>). Multiplying the two constants:',
      },
      {
        t: 'formula',
        kicker: 'pH of NaHCO<sub>3</sub>-type solutions',
        main: '<i>K</i><sub>a1</sub><i>K</i><sub>a2</sub> = ([H<sup>+</sup>]<sup>2</sup>[A<sup>2−</sup>])/[H<sub>2</sub>A] ≈ [H<sup>+</sup>]<sup>2</sup><br>[H<sup>+</sup>] = √(<i>K</i><sub>a1</sub><i>K</i><sub>a2</sub>)<br>pH = ½(p<i>K</i><sub>a1</sub> + p<i>K</i><sub>a2</sub>)',
        legend: [
          '<i>K</i><sub>a1</sub> = first ionisation constant of H<sub>2</sub>A',
          '<i>K</i><sub>a2</sub> = second ionisation constant of H<sub>2</sub>A',
          '[H<sup>+</sup>] = hydrogen-ion concentration',
          'p<i>K</i><sub>a1</sub> = negative logarithm of the first constant, −log <i>K</i><sub>a1</sub>',
          'p<i>K</i><sub>a2</sub> = negative logarithm of the second constant, −log <i>K</i><sub>a2</sub>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The striking feature: the pH is (to this approximation) <b>independent of the salt’s concentration</b>.',
      },
      {
        t: 'ex',
        tag: '',
        q: 'Find the pH of 0.1 M NaHCO<sub>3</sub> (<i>K</i><sub>a1</sub> = 4.3 × 10<sup>−7</sup>, <i>K</i><sub>a2</sub> = 5.6 × 10<sup>−11</sup> for H<sub>2</sub>CO<sub>3</sub>).',
        steps: [],
        ans: 'pH = ½(6.37 + 10.25) = 8.31',
      },
      {
        t: 'p',
        html: 'Mildly alkaline — exactly why baking soda solution tastes faintly soapy. The same recipe for NaH<sub>2</sub>PO<sub>4</sub> gives ½(2.12 + 7.21) = 4.7, and for Na<sub>2</sub>HPO<sub>4</sub>, ½(7.21 + 12.38) ≈ 9.8. Note the pattern the examiner exploits: NaH<sub>2</sub>PO<sub>4</sub> is acidic while Na<sub>2</sub>HPO<sub>4</sub> is alkaline, because each is pinned between a different pair of constants.',
      },

      { t: 'part', title: 'A.3 The H2S common-ion pattern' },
      {
        t: 'p',
        html: 'NCERT’s own exercise asks: in 0.1 M H<sub>2</sub>S (<i>K</i><sub>a1</sub> = 9.1 × 10<sup>−8</sup>, <i>K</i><sub>a2</sub> = 1.2 × 10<sup>−13</sup>), what is [S<sup>2−</sup>], and what happens if the solution is also 0.1 M in HCl? The routine:<br>• <b>In pure water:</b> [H<sup>+</sup>] comes from step 1, [H<sup>+</sup>] ≈ √(<i>K</i><sub>a1</sub><i>c</i>) = √(9.1 × 10<sup>−8</sup> × 0.1) = 9.5 × 10<sup>−5</sup> M, and [S<sup>2−</sup>] ≈ <i>K</i><sub>a2</sub> = 1.2 × 10<sup>−13</sup> M. (The second step contributes almost nothing to [H<sup>+</sup>].)<br>• <b>With 0.1 M HCl:</b> the strong acid fixes [H<sup>+</sup>] = 0.1 M and suppresses both steps. Use the summed equilibrium:<br>[S<sup>2−</sup>] = (<i>K</i><sub>a1</sub><i>K</i><sub>a2</sub>[H<sub>2</sub>S])/[H<sup>+</sup>]<sup>2</sup> = ((9.1 × 10<sup>−8</sup>)(1.2 × 10<sup>−13</sup>)(0.1))/(0.1)<sup>2</sup> ≈ 1.1 × 10<sup>−19</sup> M',
      },
      {
        t: 'p',
        html: 'The sulfide concentration crashes by a factor of a million. This is not an academic curiosity — it is the working principle behind selective precipitation of metal sulfides in qualitative analysis (group II sulfides precipitate in acid solution; group IV sulfides need an alkaline medium).',
      },

      { t: 'part', title: 'Error patterns with polyprotic acids' },
      {
        t: 'mistakes',
        items: [
          'Adding the stepwise [H<sup>+</sup>] contributions as if the steps were independent; step 1 supplies essentially all the H<sup>+</sup>.',
          'Using ½(p<i>K</i><sub>a1</sub> + p<i>K</i><sub>a2</sub>) for a diprotic acid itself (H<sub>2</sub>CO<sub>3</sub>) — the formula is for the amphiprotic <b>salt</b> (NaHCO<sub>3</sub>). The acid’s own pH comes from <i>K</i><sub>a1</sub> alone.',
          'Forgetting that <i>K</i><sub>a1</sub><i>K</i><sub>a2</sub> governs the summed reaction, and that [S<sup>2−</sup>] scales as 1/[H<sup>+</sup>]<sup>2</sup> — the square is what makes acidification so powerful.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Compute the pH of 0.1 M NaH<sub>2</sub>PO<sub>4</sub> using the H<sub>3</sub>PO<sub>4</sub> constants above.',
            a: 'pH = ½(2.12 + 7.21) = 4.7 — acidic, because the ion sits between <i>K</i><sub>a1</sub> and <i>K</i><sub>a2</sub>.',
          },
          {
            q: 'In a solution saturated with H<sub>2</sub>S (0.1 M) at pH 2, estimate [S<sup>2−</sup>].',
            a: '[S<sup>2−</sup>] = <i>K</i><sub>a1</sub><i>K</i><sub>a2</sub>[H<sub>2</sub>S]/[H<sup>+</sup>]<sup>2</sup> = (1.09 × 10<sup>−20</sup>)(0.1)/(10<sup>−2</sup>)<sup>2</sup> = 1.1 × 10<sup>−17</sup> M. (Between the pure-water 1.2 × 10<sup>−13</sup> and the 0.1 M HCl 1.1 × 10<sup>−19</sup> — the 1/[H<sup>+</sup>]<sup>2</sup> law at work.)',
          },
          {
            q: 'Why is the pH of 0.1 M H<sub>3</sub>PO<sub>4</sub> computed from <i>K</i><sub>a1</sub> alone, and what value results (p<i>K</i><sub>a1</sub> = 2.12)? Is the simple square-root formula safe here?',
            a: '<i>K</i><sub>a1</sub> ≫ <i>K</i><sub>a2</sub>, <i>K</i><sub>a3</sub>, so nearly all H<sup>+</sup> comes from step 1. The simple formula pH = ½(p<i>K</i><sub>a1</sub> − log <i>c</i>) = ½(2.12 + 1) = 1.56 is only approximate here, because <i>K</i><sub>a1</sub> is large enough that about a quarter of the acid ionises (the usual assumption <i>x</i> ≪ <i>c</i> fails). Solving the quadratic <i>x</i><sup>2</sup>/(0.1 − <i>x</i>) = 7.5 × 10<sup>−3</sup> gives <i>x</i> = 0.0239 M and pH = 1.62. Report pH ≈ 1.6; the quadratic is the safer route for a strong-ish weak acid like H<sub>3</sub>PO<sub>4</sub>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 286–288 ─────────────────────────
  {
    n: 'B',
    title: 'Titration Thinking',
    extra: true,
    kalam: 'JEE Main now asks you to identify a titration curve or read a pH off one.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'JEE Main now asks you to identify a titration curve or read a pH off one. The whole skill is computing four landmark points; the curve is then determined.',
      },

      { t: 'part', title: 'The four landmarks (0.1 M acid titrated with 0.1 M NaOH)' },
      {
        t: 'table',
        title: null,
        head: ['Point', 'Strong acid (HCl)', 'Weak acid (CH<sub>3</sub>COOH)'],
        rows: [
          [
            'Start (0% neutralised)',
            'pH = −log 0.1 = 1.0',
            'pH = ½(p<i>K</i><sub>a</sub> − log <i>c</i>) = ½(4.76 + 1) = 2.88 (<i>K</i><sub>a</sub> = 1.74 × 10<sup>−5</sup>)',
          ],
          ['Half-equivalence', 'no special meaning', 'pH = p<i>K</i><sub>a</sub> = 4.76 (buffer, [salt] = [acid])'],
          [
            'Equivalence',
            'pH = 7 (NaCl, no hydrolysis)',
            'pH = 7 + ½(p<i>K</i><sub>a</sub> + log <i>c</i><sub>salt</sub>) = 7 + ½(4.76 − 1.30) = 8.7',
          ],
          ['Excess base', 'set by excess OH<sup>−</sup>', 'identical to strong case'],
        ],
      },
      {
        t: 'p',
        html: 'Three signature differences to spot in a multiple-choice figure: the weak-acid curve <b>starts higher</b> (2.88 vs 1.0), its <b>equivalence point is above 7</b> (sodium acetate hydrolyses), and its pre-equivalence region is a <b>buffer zone</b> — a gentle slope instead of the strong acid’s flat run. For a weak base titrated with strong acid, mirror everything: start below 13, equivalence <b>below</b> 7, and the half-equivalence point gives pOH = p<i>K</i><sub>b</sub>.',
      },
      { t: 'fig', id: 'c11-06-B-d1' },
      {
        t: 'p',
        html: '<b>Indicator logic.</b> An indicator works if its transition range falls on the curve’s vertical jump. The jump of a weak acid–strong base titration sits on the alkaline side (equivalence pH ≈ 8.7), so an alkaline-range indicator (phenolphthalein, transition around pH 8–10) suits it; methyl orange (acidic range) would change colour far too early. For strong acid–weak base, the jump is on the acidic side — methyl orange fits, phenolphthalein does not. For strong–strong, the jump spans several pH units either way and either indicator works.',
      },

      { t: 'part', title: 'Millimole bookkeeping for mixed solutions' },
      {
        t: 'p',
        html: 'Most “pH of the resultant solution” questions are stoichiometry first, equilibrium second. The routine:<br>1. Compute millimoles of H<sup>+</sup> and OH<sup>−</sup> (<i>M</i> × <i>V</i> in mL).<br>2. Neutralise; find what is left over (excess strong acid/base) or what is formed (salt, or buffer mixture).<br>3. Branch: excess strong species → direct pH from the leftover concentration (divide by total volume); salt of weak/strong → hydrolysis formula; weak acid + its salt → Henderson–Hasselbalch.',
      },
      {
        t: 'ex',
        tag: '',
        q: '10 mL of 0.1 M HCl is added to 10 mL of 0.1 M NH<sub>3</sub> solution. Classify the result.',
        steps: [
          'Millimoles: 1 mmol H<sup>+</sup> vs 1 mmol NH<sub>3</sub> → exactly 1 mmol NH<sub>4</sub>Cl in 20 mL, <i>c</i> = 0.05 M. This is a salt of a weak base and strong acid, so hydrolysis governs and the pH is <b>below 7</b> — specifically pH = 7 − ½(p<i>K</i><sub>b</sub> + log <i>c</i>) = 7 − ½(4.74 − 1.30) = 5.28.',
          'The same question with NaOH replacing NH<sub>3</sub> gives NaCl and pH 7; with NaOH against CH<sub>3</sub>COOH it gives CH<sub>3</sub>COONa and pH above 7. One routine, three different answers — that is precisely the match-the-column item this topic appears as.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Error patterns in titration and mixing' },
      {
        t: 'mistakes',
        items: [
          'Forgetting to divide by the <b>total</b> volume after mixing (every concentration halves when equal volumes mix).',
          'Using pH = −log[acid] for a weak acid — that is the strong-acid formula; weak acids need the <i>K</i><sub>a</sub> route.',
          'Placing the weak-acid equivalence point at pH 7 out of habit; only strong–strong lands at 7.',
          'Believing a buffer exists whenever weak acid and strong base are mixed — a buffer forms only when the base is insufficient to consume the acid (anywhere before the equivalence point).',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '20 mL of 0.1 M NaOH is added to 10 mL of 0.1 M HCl. Find the pH.',
            a: '2 mmol OH<sup>−</sup> vs 1 mmol H<sup>+</sup> leaves 1 mmol OH<sup>−</sup> in 30 mL: [OH<sup>−</sup>] = 0.033 M, pOH = 1.48, pH = 12.52.',
          },
          {
            q: '10 mL of 0.1 M NaOH is added to 20 mL of 0.1 M CH<sub>3</sub>COOH. What kind of system results, and what is the pH (p<i>K</i><sub>a</sub> = 4.76)?',
            a: '1 mmol NaOH half-neutralises 2 mmol CH<sub>3</sub>COOH: a buffer with [salt] = [acid], so pH = p<i>K</i><sub>a</sub> = 4.76.',
          },
          {
            q: 'Sketch-read: a titration curve starts at pH 2.9, passes through pH 4.8 at half the equivalence volume, and its equivalence point is at pH 8.7. Identify the titration.',
            a: 'A weak acid titrated with a strong base (e.g. CH<sub>3</sub>COOH vs NaOH): start ≈ 2.9, half-equivalence = p<i>K</i><sub>a</sub> ≈ 4.8, equivalence > 7.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 288–289 ─────────────────────────
  {
    n: 'C',
    title: 'Precipitation Decisions',
    extra: true,
    kalam: 'Precipitation occurs when the ionic product exceeds Ksp.',
    blocks: [
      { t: 'part', title: 'The decision rule, and the dilution trap' },
      {
        t: 'p',
        html: 'Precipitation occurs when the ionic product exceeds <i>K</i><sub>sp</sub>. The rule is simple; the execution has one trap that recent papers exploit: <b>on mixing two solutions, every ion dilutes before you compute the product.</b> Equal volumes halve each concentration.',
      },
      {
        t: 'ex',
        tag: '',
        q: 'Equal volumes of 2.0 × 10<sup>−4</sup> M AgNO<sub>3</sub> and 2.0 × 10<sup>−4</sup> M NaCl are mixed. Does AgCl precipitate (<i>K</i><sub>sp</sub> = 1.8 × 10<sup>−10</sup>)?',
        steps: [
          'After mixing: [Ag<sup>+</sup>] = [Cl<sup>−</sup>] = 1.0 × 10<sup>−4</sup> M. <i>Q</i><sub>sp</sub> = (1.0 × 10<sup>−4</sup>)<sup>2</sup> = 1.0 × 10<sup>−8</sup> > 1.8 × 10<sup>−10</sup> — yes, AgCl precipitates.',
          'Had the stock solutions been 2.0 × 10<sup>−5</sup> M each, the mixed ions would be 1.0 × 10<sup>−5</sup> M and <i>Q</i><sub>sp</sub> = 1.0 × 10<sup>−10</sup> < <i>K</i><sub>sp</sub>, so nothing would form. Note that a student who forgets to halve computes <i>Q</i> = (2.0 × 10<sup>−5</sup>)<sup>2</sup> = 4 × 10<sup>−10</sup> > <i>K</i><sub>sp</sub> in this second case and predicts a precipitate that never appears.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Which precipitates first?' },
      {
        t: 'p',
        html: 'When one reagent can precipitate two ions, compare the reagent concentration each ion needs. Adding Ag<sup>+</sup> to a solution 0.1 M in both Cl<sup>−</sup> and CrO<sub>4</sub><sup>2−</sup>:<br>• AgCl (<i>K</i><sub>sp</sub> = 1.8 × 10<sup>−10</sup>): needs [Ag<sup>+</sup>] = 1.8 × 10<sup>−10</sup>/0.1 = 1.8 × 10<sup>−9</sup> M.<br>• Ag<sub>2</sub>CrO<sub>4</sub> (<i>K</i><sub>sp</sub> = 1.1 × 10<sup>−12</sup>): needs [Ag<sup>+</sup>] = √(1.1 × 10<sup>−12</sup>/0.1) = 3.3 × 10<sup>−6</sup> M.',
      },
      {
        t: 'p',
        html: 'AgCl precipitates first by three orders of magnitude of [Ag<sup>+</sup>] — the smaller <i>K</i><sub>sp</sub> does <b>not</b> decide the order; the required concentration, which depends on the salt’s stoichiometry, does. This is the working basis of the Mohr titration (chromate is the indicator precisely because its red silver salt appears only after chloride is exhausted).',
      },

      { t: 'part', title: 'Error patterns in precipitation' },
      {
        t: 'mistakes',
        items: [
          'Comparing <i>K</i><sub>sp</sub> values of different salt types directly: a 2:1 (A<sub>2</sub>B) salt with a smaller <i>K</i><sub>sp</sub> can be more soluble (compare <i>s</i> values, not <i>K</i><sub>sp</sub> values: AgCl, <i>s</i> = √(1.8 × 10<sup>−10</sup>) = 1.3 × 10<sup>−5</sup>; Ag<sub>2</sub>CrO<sub>4</sub>, <i>s</i> = (1.1 × 10<sup>−12</sup>/4)<sup>1/3</sup> = 6.5 × 10<sup>−5</sup>).',
          'Forgetting the mixing dilution (worked example 1’s trap).',
          'Writing <i>K</i><sub>sp</sub> for the wrong stoichiometry: <i>K</i><sub>sp</sub>(Ag<sub>2</sub>CrO<sub>4</sub>) = [Ag<sup>+</sup>]<sup>2</sup>[CrO<sub>4</sub><sup>2−</sup>] = 4<i>s</i><sup>3</sup>, not <i>s</i><sup>2</sup>.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Will BaSO<sub>4</sub> precipitate when equal volumes of 2 × 10<sup>−5</sup> M BaCl<sub>2</sub> and 2 × 10<sup>−5</sup> M Na<sub>2</sub>SO<sub>4</sub> are mixed (<i>K</i><sub>sp</sub> = 1.1 × 10<sup>−10</sup>)?',
            a: 'Mixed concentrations: 1 × 10<sup>−5</sup> M each; <i>Q</i><sub>sp</sub> = 1 × 10<sup>−10</sup> < 1.1 × 10<sup>−10</sup> — only just below <i>K</i><sub>sp</sub>, so no precipitate. (This borderline case shows why the dilution step matters.)',
          },
          {
            q: 'For Ca(OH)<sub>2</sub>, <i>K</i><sub>sp</sub> = 5.5 × 10<sup>−6</sup>. Compute its molar solubility and compare it with that of AgBr (<i>K</i><sub>sp</sub> = 5.0 × 10<sup>−13</sup>), explaining why <i>K</i><sub>sp</sub> values of salts with different formulas cannot be compared by inspection alone.',
            a: 'Ca(OH)<sub>2</sub>: <i>K</i><sub>sp</sub> = 4<i>s</i><sup>3</sup> ⇒ <i>s</i> = (5.5 × 10<sup>−6</sup>/4)<sup>1/3</sup> = 1.1 × 10<sup>−2</sup> M. AgBr: <i>s</i> = √(5.0 × 10<sup>−13</sup>) = 7.1 × 10<sup>−7</sup> M. Different stoichiometries mean <i>K</i><sub>sp</sub> magnitudes are not directly comparable; solubilities must be computed.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 289–290 ─────────────────────────
  {
    n: 'D',
    title: 'Le Chatelier, Quantified',
    extra: true,
    kalam: 'The exam increasingly asks how much, or asks you to reason quantitatively about partial pressures.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter taught mainly the directions. The exam increasingly asks how much, or asks you to reason quantitatively about partial pressures. Three quantified situations matter.',
      },

      { t: 'part', title: 'D.1 Inert gas at constant pressure, done honestly' },
      {
        t: 'p',
        html: 'Adding inert gas at constant <b>volume</b> changes no partial pressure: no shift. At constant <b>pressure</b> the system expands, every reacting partial pressure falls, and the equilibrium responds to the dilution. Compute, don’t assert:',
      },
      {
        t: 'ex',
        tag: '',
        q: 'PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g) is at equilibrium with <i>K</i><sub>p</sub> = 0.50 atm, total pressure 1.5 atm and <i>α</i> = 0.5 (partial pressures <i>p</i><sub>PCl₅</sub> = 0.50, <i>p</i><sub>PCl₃</sub> = <i>p</i><sub>Cl₂</sub> = 0.50 atm). Inert gas is added at constant total pressure until the volume doubles. Which way does the system shift?',
        steps: [
          'Doubling the volume at constant total pressure halves every reacting mole fraction, so each reactive partial pressure halves: <i>p</i>′<sub>PCl₅</sub> = 0.25, <i>p</i>′<sub>PCl₃</sub> = <i>p</i>′<sub>Cl₂</sub> = 0.25 atm. Then<br><i>Q</i><sub>p</sub> = ((0.25)(0.25))/0.25 = 0.25 atm < <i>K</i><sub>p</sub> = 0.50 atm<br>so the reaction runs <b>forward</b> — toward more gas moles, restoring what dilution removed. The rule “inert gas at constant <i>P</i> shifts toward more moles” is just this arithmetic compressed.',
        ],
        ans: '',
      },

      { t: 'part', title: 'D.2 Pressure versus degree of dissociation' },
      {
        t: 'p',
        html: 'For a single-reactant dissociation A ⇌ B + C with <i>K</i><sub>p</sub> = <i>α</i><sup>2</sup><i>P</i>/(1 − <i>α</i><sup>2</sup>), solving for <i>α</i>:',
      },
      {
        t: 'formula',
        kicker: 'Pressure versus degree of dissociation',
        main: '<i>α</i> = √(<i>K</i><sub>p</sub>/(<i>K</i><sub>p</sub> + <i>P</i>))',
        legend: [
          '<i>α</i> = degree of dissociation',
          '<i>K</i><sub>p</sub> = equilibrium constant in partial pressures',
          '<i>P</i> = total pressure',
          'for a single-reactant dissociation A\u00a0⇌\u00a0B\u00a0+\u00a0C',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<i>α</i> falls as <i>P</i> rises — Le Chatelier turned into a function. With <i>K</i><sub>p</sub> = 0.50 atm: at <i>P</i> = 1 atm, <i>α</i> = √(0.5/1.5) = 0.58; at <i>P</i> = 2 atm, <i>α</i> = √(0.5/2.5) = 0.45. A question asking “does dissociation increase on compression?” is answered by this monotonicity, not by a memorised arrow.',
      },

      { t: 'part', title: 'D.3 Combined disturbances and the fixed point' },
      {
        t: 'p',
        html: 'When two changes act at once, separate the questions: (i) does <i>K</i> change? — only if temperature changes; (ii) which way does <i>Q</i> move? — recompute partial pressures or concentrations for the concentration/volume/inert-gas change. For an exothermic equilibrium that is simultaneously compressed and heated, compression (fewer moles side favoured) and heating (reactants favoured, <i>K</i> falls) can oppose each other — state each effect, then identify the dominant one from the numbers if given. The catalyst, as always, enters neither ledger: it shortens the journey, not the destination.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'For N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g), argon is added (a) at constant volume, (b) at constant pressure. Predict each shift and justify with <i>Q</i><sub>p</sub>.',
            a: '(a) No shift — partial pressures unchanged. (b) Shift toward NO<sub>2</sub> (more gas moles): dilution lowers <i>p</i><sub>N₂O₄</sub> and <i>p</i><sub>NO₂</sub> in the same ratio, and since <i>Q</i><sub>p</sub> = <i>p</i><sub>NO₂</sub><sup>2</sup>/<i>p</i><sub>N₂O₄</sub>, the squared numerator falls faster, so <i>Q</i><sub>p</sub> < <i>K</i><sub>p</sub>.',
          },
          {
            q: 'For PCl<sub>5</sub> dissociation with <i>K</i><sub>p</sub> = 0.50 atm, find <i>α</i> at <i>P</i> = 4 atm and compare with the <i>P</i> = 1 atm value.',
            a: '<i>α</i> = √(0.5/4.5) = 0.33, down from 0.58 at 1 atm — compression suppresses dissociation.',
          },
        ],
      },
    ],
  },

  // ─────────────── Additional topic E (the book's Addendum P) · pp. 291–294 ───────────────
  {
    n: 'E',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'The centre of gravity is clearly ionic: roughly two-thirds of the exam questions on this chapter sit on pH, buffers, Ksp and hydrolysis.',
    blocks: [
      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: 'From an analysis of AIEEE/JEE Main 2002–2025, NTA 2022 and NEET-pattern questions on this chapter:',
      },
      {
        t: 'table',
        title: null,
        head: ['Theme', 'Approx. share', 'Typical question types'],
        rows: [
          [
            'pH of mixed solutions / acid-base stoichiometry',
            '~20%',
            'millimole matching; H<sub>3</sub>PO<sub>4</sub> + NaOH; mixture pH; neutrality vs temperature',
          ],
          [
            '<i>K</i><sub>sp</sub>, solubility, precipitation',
            '~20%',
            'solubility ratios across salt types; precipitation on mixing; ordering by solubility; <i>K</i><sub>sp</sub> numerics',
          ],
          [
            'Buffers and Henderson–Hasselbalch',
            '~12%',
            'buffer + added HCl; pH − p<i>K</i><sub>a</sub> expression; <i>K</i><sub>b</sub> back-calculation',
          ],
          [
            '<i>K</i><sub>c</sub>/<i>K</i><sub>p</sub>, <i>Q</i> vs <i>K</i>, combined equilibria',
            '~15%',
            'units of <i>K</i><sub>c</sub>; direction; <i>K</i><sub>p</sub>–<i>K</i><sub>c</sub> conversions; <i>K</i> algebra; Δ<i>G</i>° from <i>K</i>',
          ],
          [
            'Le Chatelier factors',
            '~12%',
            'inert gas at constant <i>P</i>; temperature and <i>K</i>; catalyst; combined shifts',
          ],
          ['Titration curves and indicators', '~8%', 'curve identification; equivalence pH'],
          [
            'Salt hydrolysis and qualitative analysis',
            '~13%',
            'hydrolysis-based pH; group separation logic; amphiprotic reasoning',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The centre of gravity is clearly ionic: roughly two-thirds of the exam questions on this chapter sit on pH, buffers, <i>K</i><sub>sp</sub> and hydrolysis. Note also the large share of <b>numerical-answer</b> items — JEE Main’s newer format, which punishes approximate methods that MCQs used to forgive.',
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'p',
        html: '<b>Archetype 1 — Millimole mixing.</b> “10 mL of 0.1 M NaOH + 10 mL of 0.1 M CH<sub>3</sub>COOH” asks only for classification: equal millimoles → salt of weak acid and strong base → pH > 7. The whole game is the four-way classification (strong–strong → 7; weak acid salt → above 7; weak base salt → below 7; leftover strong → direct computation). The first worked example of Additional topic B is the template.',
      },
      {
        t: 'p',
        html: '<b>Archetype 2 — Buffer under attack.</b> A buffer of 0.10 mol each of NH<sub>3</sub>/NH<sub>4</sub>Cl receives 0.05 mol HCl. The acid converts base to salt mole-for-mole (NH<sub>3</sub>: 0.10 → 0.05 mol; NH<sub>4</sub>Cl: 0.10 → 0.15 mol), and Henderson–Hasselbalch does the rest: pOH = p<i>K</i><sub>b</sub> + log(0.15/0.05). The trap is re-deriving from <i>K</i><sub>b</sub> instead of adjusting the mole ratio — buffers absorb shocks stoichiometrically.',
      },
      {
        t: 'p',
        html: '<b>Archetype 3 — Cross-stoichiometry <i>K</i><sub>sp</sub> comparison.</b> Typical items compare solubilities of a 2:1 salt with a 3:1 salt, or rank HgS vs PbS vs AgBr vs Ca(OH)<sub>2</sub>. Always convert to <i>s</i> through the right power (<i>s</i><sup>2</sup>, 4<i>s</i><sup>3</sup>, 27<i>s</i><sup>4</sup>, 108<i>s</i><sup>5</sup>) before comparing — the raw <i>K</i><sub>sp</sub> ranking across different salt types is the designed distractor.',
      },
      {
        t: 'p',
        html: '<b>Archetype 4 — Precipitation on mixing.</b> Four combinations of concentrations, which one precipitates? The half-concentration dilution (the first worked example of Additional topic C) followed by <i>Q</i><sub>sp</sub> vs <i>K</i><sub>sp</sub> settles each option in seconds.',
      },
      {
        t: 'p',
        html: '<b>Archetype 5 — Direction from <i>Q</i> vs <i>K</i>.</b> Compute <i>Q</i> from stated concentrations, compare with <i>K</i>, pick “forward”/“backward”. Papers often pair these with <i>K</i><sub>c</sub> units questions — both are one formula deep.',
      },
      {
        t: 'p',
        html: '<b>Archetype 6 — Neutrality versus pH of water.</b> Heating water raises <i>K</i><sub>w</sub>, so pH falls below 7, yet water stays neutral because [H<sup>+</sup>] = [OH<sup>−</sup>] always. The distinction between “neutral” and “pH 7” is the entire question; dissociation of water is endothermic, which is why <i>K</i><sub>w</sub> rises on heating.',
      },
      {
        t: 'p',
        html: '<b>Archetype 7 — Polyprotic and amphiprotic pH.</b> H<sub>3</sub>PO<sub>4</sub> plus one equivalent of NaOH gives NaH<sub>2</sub>PO<sub>4</sub>, which is Addendum A.2 verbatim: pH = ½(p<i>K</i><sub>a1</sub> + p<i>K</i><sub>a2</sub>) ≈ 4.7 (5 to the nearest integer, as numerical-answer items ask). Another frequent item tests <i>K</i> = <i>K</i><sub>a1</sub><i>K</i><sub>a2</sub> for the summed ionisation. Both reward the toolkit over memorised numbers.',
      },

      { t: 'part', title: 'The traps' },
      {
        t: 'defgrid',
        title: 'Trap — correct resolution',
        rows: [
          {
            k: 'pH 7 = neutral at all temperatures',
            v: 'Neutral means [H<sup>+</sup>] = [OH<sup>−</sup>]; at high <i>T</i> neutral water has pH < 7',
          },
          {
            k: 'Equivalence point of any titration is 7',
            v: 'Only strong–strong; weak acid–strong base lands above 7, weak base–strong acid below',
          },
          {
            k: 'Smaller <i>K</i><sub>sp</sub> = less soluble',
            v: 'Only within the same salt type; compute <i>s</i> with the correct power',
          },
          {
            k: 'Forgetting mixing dilution',
            v: 'Equal volumes halve every concentration before <i>Q</i><sub>sp</sub> or pH is computed',
          },
          {
            k: 'Inert gas always shifts equilibrium',
            v: 'Only at constant pressure, and only if Δ<i>n</i><sub>g</sub> ≠ 0 (dilution); at constant volume nothing moves',
          },
          {
            k: '<i>Q</i> > <i>K</i> means more product will form',
            v: 'The reverse: excess products drive the reaction backward',
          },
          {
            k: 'Catalyst shifts equilibrium',
            v: 'It changes only the time to reach equilibrium, never <i>K</i> or the position',
          },
          {
            k: '½(p<i>K</i><sub>a1</sub> + p<i>K</i><sub>a2</sub>) for H<sub>2</sub>CO<sub>3</sub> itself',
            v: 'That formula is for the amphiprotic salt; the acid’s pH comes from <i>K</i><sub>a1</sub>',
          },
        ],
      },

      { t: 'part', title: 'A graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: '[recall] For N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g), the units of <i>K</i><sub>c</sub> are (a) mol L<sup>−1</sup> (b) mol<sup>−2</sup> L<sup>2</sup> (c) dimensionless (d) mol<sup>2</sup> L<sup>−2</sup>.',
            a: '(b). Δ<i>n</i><sub>g</sub> = 2 − 4 = −2, so units are (mol L<sup>−1</sup>)<sup>−2</sup>.',
          },
          {
            q: '[recall] A mixture at 298 K has <i>Q</i> < <i>K</i>. The reaction (a) proceeds forward (b) backward (c) is at equilibrium (d) cannot be decided.',
            a: '(a). <i>Q</i> < <i>K</i> means too few products; the forward direction raises <i>Q</i> toward <i>K</i>.',
          },
          {
            q: '[application] 100 mL of 0.01 M HCl is mixed with 100 mL of 0.01 M NaOH at 298 K. Find the pH.',
            a: 'Equal millimoles of strong acid and base → NaCl + water; pH = 7.',
          },
          {
            q: '[application] A buffer is 0.10 M in CH<sub>3</sub>COOH and 0.20 M in CH<sub>3</sub>COONa (p<i>K</i><sub>a</sub> = 4.76). Find the pH.',
            a: 'pH = 4.76 + log(0.20/0.10) = 4.76 + 0.30 = 5.06.',
          },
          {
            q: '[application] <i>K</i><sub>sp</sub> of AgCl is 1.8 × 10<sup>−10</sup>. Find its solubility in mol L<sup>−1</sup> and in g L<sup>−1</sup> (<i>M</i> = 143.5).',
            a: '<i>s</i> = √(1.8 × 10<sup>−10</sup>) = 1.34 × 10<sup>−5</sup> mol L<sup>−1</sup> = 1.9 × 10<sup>−3</sup> g L<sup>−1</sup>.',
          },
          {
            q: '[analysis] 50 mL of 0.1 M CH<sub>3</sub>COOH is titrated with 0.1 M NaOH. What is the pH after adding 25 mL of base (p<i>K</i><sub>a</sub> = 4.76)?',
            a: '2.5 mmol of base half-neutralises 5 mmol of acid: [salt] = [acid], so pH = p<i>K</i><sub>a</sub> = 4.76. The half-equivalence point always lands on p<i>K</i><sub>a</sub> regardless of concentration.',
          },
          {
            q: '[analysis] For an exothermic equilibrium, state the effect of raising the temperature on <i>K</i>, on the equilibrium position, and on the rates.',
            a: '<i>K</i> decreases (van’t Hoff, Δ<i>H</i> < 0); the position shifts toward reactants; both forward and reverse rates increase — rate and equilibrium position are separate questions.',
          },
          {
            q: '[analysis] Solution A is 0.1 M in Cl<sup>−</sup> and 0.1 M in CrO<sub>4</sub><sup>2−</sup>. AgNO<sub>3</sub> is added gradually. Which precipitates first, AgCl (<i>K</i><sub>sp</sub> = 1.8 × 10<sup>−10</sup>) or Ag<sub>2</sub>CrO<sub>4</sub> (<i>K</i><sub>sp</sub> = 1.1 × 10<sup>−12</sup>)?',
            a: 'AgCl needs [Ag<sup>+</sup>] = 1.8 × 10<sup>−9</sup> M; Ag<sub>2</sub>CrO<sub>4</sub> needs 3.3 × 10<sup>−6</sup> M. AgCl precipitates first — the Mohr-titration ordering (see Addendum C).',
          },
          {
            q: '[synthesis] 10 mL of 0.1 M NaOH is added to 10 mL of 0.1 M H<sub>3</sub>PO<sub>4</sub>. Estimate the pH (p<i>K</i><sub>a1</sub> = 2.12, p<i>K</i><sub>a2</sub> = 7.21).',
            a: 'One equivalent of base converts H<sub>3</sub>PO<sub>4</sub> exactly to NaH<sub>2</sub>PO<sub>4</sub>, an amphiprotic salt: pH = ½(2.12 + 7.21) = 4.7. JEE Main has asked exactly this situation, with the answer to the nearest integer, 5 — same method.',
          },
          {
            q: '[synthesis] PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g) is at equilibrium. Xenon is added at constant pressure. Predict the shift, then show it with <i>Q</i><sub>p</sub>.',
            a: 'Forward (toward more gas moles). At constant total pressure the volume grows, every reacting partial pressure falls by the same factor <i>f</i> < 1, so <i>Q</i><sub>p</sub> = (<i>fp</i><sub>3</sub>)(<i>fp</i><sub>2</sub>)/(<i>fp</i><sub>5</sub>) = <i>fK</i><sub>p</sub> < <i>K</i><sub>p</sub> — the system runs forward to restore <i>Q</i><sub>p</sub> to <i>K</i><sub>p</sub>.',
          },
        ],
      },
    ],
  },
];
