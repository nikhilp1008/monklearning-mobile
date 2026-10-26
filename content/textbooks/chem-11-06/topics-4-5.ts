import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 04 and 05: pp. 270–283 of the Class 11 Chemistry Master
 * Reference, word for word. The book prints its sub-topics in the order
 * Sub-01, Sub-04, Sub-05, Sub-02, Sub-03; the app keeps that page order and
 * numbers them Topics 01–05, so these are the book's Sub-02 (Ionic
 * Equilibrium — Acid–Base Concepts, pH, Dissociation & the Common-Ion Effect,
 * pp. 270–277) and Sub-03 (Buffers, Solubility Product (Ksp) & Salt
 * Hydrolysis, pp. 278–283), each split at its Sections 1 to 8. Every
 * cross-reference to the book's numbering is rewritten to the app's
 * ("Sub-01" → "Topic 01", "Sub-02" → "Topic 04"). Figure 6.2 (pp. 272–273,
 * [H⁺] with and without the common ion) is redrawn in
 * lib/diagrams/chemistry-11-06.ts.
 *
 * Notation: <i>K</i> italic with upright label subscripts (<i>K</i><sub>a</sub>,
 * <i>K</i><sub>b</sub>, <i>K</i><sub>w</sub>, <i>K</i><sub>sp</sub>, <i>K</i><sub>h</sub>,
 * <i>K</i><sub>a1</sub>) though the book sets the labels in maths italic; pH,
 * pOH and the p of p<i>K</i><sub>a</sub> upright; <i>α</i>, <i>c</i>, <i>s</i>,
 * <i>h</i>, <i>Q</i>, <i>x</i>, <i>y</i> italic; state symbols upright. A stacked
 * log of a ratio is written log([salt]/[acid]) on one line.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 (book Sub-02) · pp. 270–277 ─────────────────────────
  {
    n: '04',
    title: 'Ionic Equilibrium — Acid–Base Concepts, pH, Dissociation & the Common-Ion Effect',
    kalam: 'The whole of ionic equilibrium is just chemical equilibrium (Topic 01) applied to charged species in water.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A guaranteed scoring zone. CBSE Boards ask 2–3 marks on pH of strong/weak solutions and the conjugate <i>K</i><sub>a</sub>–<i>K</i><sub>b</sub> relation. NEET reliably drops 1–2 questions on quick pH/pOH and the famous “very dilute acid” trap. JEE Main loves degree-of-ionization + pH numericals; JEE Advanced builds buffer and common-ion problems that quietly reuse Topic 01’s equilibrium machinery. This is where the whole chapter turns numerical.',
      },
      {
        t: 'p',
        html: 'Think of a crowded Mumbai local at peak hour. A “strong” acid is like a train where every single passenger gets off at the platform — complete ionization, nobody held back. A “weak” acid is the train where only a handful step out while the rest stay seated — partial ionization, an equilibrium between those who left and those who stayed. The whole of ionic equilibrium is just chemical equilibrium (Topic 01) applied to charged species in water.',
      },
      {
        t: 'p',
        html: '<b>Three lenses on “acid” and “base”</b><br>Chemists sharpened the definition three times, each lens wider than the last:<br>• <b>Arrhenius:</b> an acid releases H<sup>+</sup> in water; a base releases OH<sup>−</sup>. Simple, but it only works in water and can’t explain why ammonia (NH<sub>3</sub>, no OH<sup>−</sup> of its own) is basic.<br>• <b>Brønsted–Lowry:</b> an acid is a <b>proton donor</b>, a base is a <b>proton acceptor</b>. This is the workhorse definition. Every acid, on losing its proton, becomes its <b>conjugate base</b>; every base, on gaining one, becomes its <b>conjugate acid</b>. They come in conjugate pairs differing by exactly one H<sup>+</sup>:<br>HCl (acid) + H<sub>2</sub>O (base) ⇌ H<sub>3</sub>O<sup>+</sup> (conj. acid) + Cl<sup>−</sup> (conj. base)<br>Notice water behaves as a base here. With ammonia it turns into an acid — that dual nature is called <b>amphoteric</b>.<br>• <b>Lewis:</b> the widest lens — an acid is an <b>electron-pair acceptor</b>, a base an <b>electron-pair donor</b>. This explains why BF<sub>3</sub> (no proton at all) is an acid, and why bare metal cations grab lone pairs.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> “Strength” and “concentration” are different ideas, and exams punish students who blur them. Strength asks: of the molecules present, what fraction ionizes? Concentration asks: how many molecules are there per litre? A dilute solution of a strong acid can have a higher pH than a concentrated solution of a weak acid.',
      },
      {
        t: 'p',
        html: '<b>Strong, weak, and “many-proton” acids</b><br>A <b>strong</b> acid (HCl, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>) effectively ionizes completely, so its [H<sup>+</sup>] is read straight off the concentration. A <b>weak</b> acid (acetic, formic, HCN) only partially ionizes and needs <i>K</i><sub>a</sub>. Some acids carry more than one ionizable proton — <b>polyprotic</b> (or polybasic) acids like H<sub>2</sub>CO<sub>3</sub>, H<sub>2</sub>S, and H<sub>3</sub>PO<sub>4</sub> — and they release those protons one step at a time, never all at once. As you will see, each successive step is far harder than the one before, and the reason is a quiet reappearance of the common-ion effect within the same molecule.',
      },
      {
        t: 'p',
        html: '<b>Water’s quiet self-ionization</b><br>Even “pure” water is faintly conducting, because a tiny fraction of molecules swap a proton:<br>2H<sub>2</sub>O(l) ⇌ H<sub>3</sub>O<sup>+</sup>(aq) + OH<sup>−</sup>(aq)<br>At 298 K this gives [H<sup>+</sup>] = [OH<sup>−</sup>] = 10<sup>−7</sup> M. That single number is the origin of the entire pH scale.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions</b><br>• The clean weak-acid formula <i>α</i> = √(<i>K</i><sub>a</sub>/<i>c</i>) assumes <i>α</i> ≪ 1 (typically <i>α</i> < 5%). For moderately strong weak acids or very dilute solutions it <b>fails</b>, and you must solve the full quadratic.<br>• <i>K</i><sub>w</sub> = 10<sup>−14</sup> holds <b>only at 298 K</b>. Water’s self-ionization is endothermic, so <i>K</i><sub>w</sub> — and hence the “neutral” pH — changes with temperature.<br>• For acids more dilute than about 10<sup>−6</sup> M, you can no longer ignore the H<sup>+</sup> supplied by water itself.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Ionic product of water',
        main: '<i>K</i><sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = 1.0 × 10<sup>−14</sup> M<sup>2</sup> (298 K)',
        legend: ['<i>K</i><sub>w</sub> = ionic product of water'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'pH and pOH',
        main: 'pH = −log[H<sup>+</sup>]<br>pOH = −log[OH<sup>−</sup>]<br>pH + pOH = 14 (298 K)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Acid / base ionization constants',
        main: 'for HA ⇌ H<sup>+</sup> + A<sup>−</sup> and BOH ⇌ B<sup>+</sup> + OH<sup>−</sup>:<br><i>K</i><sub>a</sub> = [H<sup>+</sup>][A<sup>−</sup>]/[HA]<br><i>K</i><sub>b</sub> = [B<sup>+</sup>][OH<sup>−</sup>]/[BOH]',
        legend: ['<i>K</i><sub>a</sub> = acid ionization constant', '<i>K</i><sub>b</sub> = base ionization constant'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Ostwald’s dilution law',
        main: '<i>K</i><sub>a</sub> = <i>cα</i><sup>2</sup>/(1 − <i>α</i>) →<sup><i>α</i> ≪ 1</sup> <i>K</i><sub>a</sub> ≈ <i>cα</i><sup>2</sup><br><i>α</i> = √(<i>K</i><sub>a</sub>/<i>c</i>)<br>[H<sup>+</sup>] = <i>cα</i> = √(<i>K</i><sub>a</sub><i>c</i>)',
        legend: ['<i>α</i> = degree of ionization', '<i>c</i> = initial concentration'],
        note: null,
      },
      {
        t: 'p',
        html: 'For a <b>weak base</b> the relations are mirror-symmetric: [OH<sup>−</sup>] = √(<i>K</i><sub>b</sub><i>c</i>), then pOH = −log[OH<sup>−</sup>] and pH = 14 − pOH.',
      },
      {
        t: 'formula',
        kicker: 'Polyprotic acid (stepwise ionization, e.g. H<sub>3</sub>PO<sub>4</sub>)',
        main: 'H<sub>3</sub>PO<sub>4</sub> ⇌<sup><i>K</i>a1</sup> H<sup>+</sup> + H<sub>2</sub>PO<sub>4</sub><sup>−</sup> ⇌<sup><i>K</i>a2</sup> H<sup>+</sup> + HPO<sub>4</sub><sup>2−</sup> ⇌<sup><i>K</i>a3</sup> H<sup>+</sup> + PO<sub>4</sub><sup>3−</sup><br>with <i>K</i><sub>a1</sub> ≫ <i>K</i><sub>a2</sub> ≫ <i>K</i><sub>a3</sub> (for H<sub>3</sub>PO<sub>4</sub>, roughly 7.5 × 10<sup>−3</sup>, 6.2 × 10<sup>−8</sup>, 4.2 × 10<sup>−13</sup>)',
        legend: ['<i>K</i><sub>a1</sub>, <i>K</i><sub>a2</sub>, <i>K</i><sub>a3</sub> = constants of the first, second and third ionization steps'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conjugate pair relationship',
        main: '<i>K</i><sub>a</sub> × <i>K</i><sub>b</sub> = <i>K</i><sub>w</sub><br>p<i>K</i><sub>a</sub> + p<i>K</i><sub>b</sub> = 14 (298 K)',
        legend: ['p<i>K</i><sub>a</sub> = −log <i>K</i><sub>a</sub>', 'p<i>K</i><sub>b</sub> = −log <i>K</i><sub>b</sub>'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Henderson–Hasselbalch (buffer)',
        main: 'acidic buffer of weak acid + its salt:<br>pH = p<i>K</i><sub>a</sub> + log([salt]/[acid])<br>basic buffer: pOH = p<i>K</i><sub>b</sub> + log([salt]/[base])',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Units note</b><br><i>K</i><sub>a</sub>, <i>K</i><sub>b</sub> carry units of mol L<sup>−1</sup> (single-step ionization, Δ<i>n</i> = +1); <i>K</i><sub>w</sub> is mol<sup>2</sup> L<sup>−2</sup>. pH, pOH, p<i>K</i><sub>a</sub>, <i>α</i> are <b>dimensionless</b>. As with all equilibrium constants, these values depend only on temperature.',
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>3.1 pH scale from the ionic product of water</b><br>Because [H<sup>+</sup>][OH<sup>−</sup>] = <i>K</i><sub>w</sub>, taking −log of both sides gives pH + pOH = p<i>K</i><sub>w</sub> = 14 at 298 K. In <b>pure water</b> [H<sup>+</sup>] = [OH<sup>−</sup>], so each is √<i>K</i><sub>w</sub> = 10<sup>−7</sup> M and pH = 7 (neutral). Add acid and [H<sup>+</sup>] rises, pH falls below 7; add base and pH climbs above 7. The two ion concentrations are yoked: push one up and the product law forces the other down.',
      },
      {
        t: 'p',
        html: '<b>3.2 Ostwald’s dilution law (why dilution strengthens a weak acid)</b><br>For HA ⇌ H<sup>+</sup> + A<sup>−</sup> starting at concentration <i>c</i> with degree of ionization <i>α</i>:',
      },
      {
        t: 'table',
        title: null,
        head: ['', 'HA', 'H+', 'A−'],
        rows: [
          ['Initial', '<i>c</i>', '0', '0'],
          ['Equilibrium', '<i>c</i>(1 − <i>α</i>)', '<i>cα</i>', '<i>cα</i>'],
        ],
      },
      {
        t: 'p',
        html: '<i>K</i><sub>a</sub> = (<i>cα</i>)(<i>cα</i>)/(<i>c</i>(1 − <i>α</i>)) = <i>cα</i><sup>2</sup>/(1 − <i>α</i>)<br>For a weak acid <i>α</i> ≪ 1, so 1 − <i>α</i> ≈ 1 and <i>α</i> = √(<i>K</i><sub>a</sub>/<i>c</i>). <b>Physical reading:</b> <i>α</i> ∝ 1/√<i>c</i> — dilute the acid and a larger fraction ionizes (Le Chatelier shifting ionization forward as ions get more “room”). This is why a weak acid’s degree of ionization rises on dilution even though <i>K</i><sub>a</sub> stays fixed.',
      },
      {
        t: 'p',
        html: '<b>3.3 The conjugate <i>K</i><sub>a</sub> × <i>K</i><sub>b</sub> = <i>K</i><sub>w</sub> relation</b><br>Take any conjugate pair, e.g. NH<sub>4</sub><sup>+</sup> (acid) and NH<sub>3</sub> (base):<br>NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + NH<sub>3</sub> (<i>K</i><sub>a</sub>)<br>NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup> (<i>K</i><sub>b</sub>)<br><b>Add</b> the two reactions — the NH<sub>4</sub><sup>+</sup>/NH<sub>3</sub> cancel and you are left with the autoionization of water, whose constant is <i>K</i><sub>w</sub>. By Topic 01’s rule (adding reactions multiplies constants), <i>K</i><sub>a</sub> × <i>K</i><sub>b</sub> = <i>K</i><sub>w</sub>. So the stronger an acid, the weaker its conjugate base — quantitatively, not just qualitatively.',
      },
      {
        t: 'p',
        html: '<b>3.4 Common-ion effect and buffer action</b><br>Add a <b>common ion</b> to a weak-electrolyte equilibrium and Le Chatelier pushes ionization backward. Pour sodium acetate into acetic acid: the flood of CH<sub>3</sub>COO<sup>−</sup> drives<br>CH<sub>3</sub>COOH ⇌ CH<sub>3</sub>COO<sup>−</sup> + H<sup>+</sup><br>to the left, <b>suppressing</b> ionization and lowering [H<sup>+</sup>]. A solution holding both a weak acid and its salt resists pH change — a <b>buffer</b>. Rearranging the <i>K</i><sub>a</sub> expression for such a mixture, [H<sup>+</sup>] = <i>K</i><sub>a</sub>[acid]/[salt], and taking −log gives Henderson–Hasselbalch (Key formulas and definitions).',
      },
      { t: 'fig', id: 'c11-06-fig-6.2' },
      {
        t: 'p',
        html: '<b>3.5 Polyprotic acids — why each step is harder</b><br>A polyprotic acid ionizes in stages, and the constants fall off a cliff: <i>K</i><sub>a1</sub> ≫ <i>K</i><sub>a2</sub> ≫ <i>K</i><sub>a3</sub>. Two effects stack up. First, pulling a positively-charged proton away from an already negative ion (H<sub>2</sub>PO<sub>4</sub><sup>−</sup>, then HPO<sub>4</sub><sup>2−</sup>) is electrostatically harder at every step. Second — and this is the elegant part — the H<sup>+</sup> liberated in the first step is a <b>common ion</b> for the second equilibrium, so it suppresses the second ionization by Le Chatelier. The common-ion effect operates inside the same acid.<br><br>The practical payoff for problem-solving: because <i>K</i><sub>a1</sub> dwarfs the rest, the solution’s [H<sup>+</sup>] (and hence its pH) is governed almost entirely by the <b>first</b> ionization. You rarely need <i>K</i><sub>a2</sub> or <i>K</i><sub>a3</sub> to find the pH of a polyprotic acid solution.',
      },
      {
        t: 'p',
        html: '<b>3.6 Weak bases run the same playbook</b><br>A weak base is just the proton-acceptor mirror of a weak acid. For NH<sub>3</sub> at 0.10 M with <i>K</i><sub>b</sub> = 1.8 × 10<sup>−5</sup>: [OH<sup>−</sup>] = √(<i>K</i><sub>b</sub><i>c</i>) = √(1.8 × 10<sup>−6</sup>) = 1.34 × 10<sup>−3</sup> M, giving pOH = 2.87 and pH = 14 − 2.87 = 11.13. Note this is the exact numerical mirror of the 0.10 M acetic acid in worked example 3 (pH 2.87) — because <i>K</i><sub>a</sub> and <i>K</i><sub>b</sub> here happen to be equal, the answers reflect across pH 7.',
      },
      {
        t: 'p',
        html: '<b>3.7 What makes one acid stronger than another</b><br>Acid strength is set by how readily the H–A bond gives up its proton, which depends on two things: the <b>H–A bond strength</b> and the <b>bond polarity</b>.<br>• Down a group the bond grows longer and weaker, so the proton leaves more easily and acidity increases: HF < HCl < HBr < HI (HI is the strongest hydrohalic acid despite F being the most electronegative — bond strength wins here).<br>• Across a period polarity dominates and acidity increases with the electronegativity of A: CH<sub>4</sub> < NH<sub>3</sub> < H<sub>2</sub>O < HF.<br>• For <b>oxoacids</b> of the same central atom, more oxygen atoms (higher oxidation state) pull electron density away and stabilise the conjugate base, so acidity rises: HClO < HClO<sub>2</sub> < HClO<sub>3</sub> < HClO<sub>4</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the pH of a 0.005 M H<sub>2</sub>SO<sub>4</sub> solution, assuming complete dissociation.',
        steps: [
          'H<sub>2</sub>SO<sub>4</sub> is a strong <b>diprotic</b> acid: each formula unit gives 2 protons.',
          '[H<sup>+</sup>] = 2 × 0.005 = 0.010 = 1.0 × 10<sup>−2</sup> M',
          'pH = −log(1.0 × 10<sup>−2</sup>)',
          'The lesson in clean presentation: never forget the stoichiometric factor of 2 for a diprotic acid.',
        ],
        ans: 'pH = 2.0',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Find the pH of a 1.0 × 10<sup>−8</sup> M HCl solution.',
        steps: [
          '<b>The trap.</b> A hurried student writes pH = −log(10<sup>−8</sup>) = 8 — but pH 8 is basic, and you cannot make a solution basic by adding acid! The flag is the absurd answer. At this extreme dilution the H<sup>+</sup> from <b>water itself</b> (∼ 10<sup>−7</sup> M) dominates and cannot be ignored. Balancing charge and <i>K</i><sub>w</sub> leads to',
          '[H<sup>+</sup>]<sup>2</sup> − (10<sup>−8</sup>)[H<sup>+</sup>] − 10<sup>−14</sup> = 0 ⇒ [H<sup>+</sup>] = 1.05 × 10<sup>−7</sup> M',
          'pH = −log(1.05 × 10<sup>−7</sup>)',
          'Just below 7 — faintly acidic, exactly as physical sense demands. <b>Speed cue:</b> any acid more dilute than ∼ 10<sup>−6</sup> M must include water’s contribution; the answer always sits just under 7.',
        ],
        ans: 'pH ≈ 6.98',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For 0.10 M acetic acid, <i>K</i><sub>a</sub> = 1.8 × 10<sup>−5</sup>. Find the degree of ionization <i>α</i>, the [H<sup>+</sup>], and the pH.',
        steps: [
          'Since acetic acid is weak, use Ostwald’s approximation:',
          '<i>α</i> = √(<i>K</i><sub>a</sub>/<i>c</i>) = √((1.8 × 10<sup>−5</sup>)/0.10) = √(1.8 × 10<sup>−4</sup>) = 1.34 × 10<sup>−2</sup>',
          'So <i>α</i> ≈ 1.34% (comfortably < 5%, approximation valid). Then',
          '[H<sup>+</sup>] = <i>cα</i> = 0.10 × 1.34 × 10<sup>−2</sup> = 1.34 × 10<sup>−3</sup> M',
          'pH = −log(1.34 × 10<sup>−3</sup>) = 3 − log 1.34 = 3 − 0.13',
        ],
        ans: 'pH = 2.87',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'To the 0.10 M acetic acid of worked example 3, enough sodium acetate is added to make the solution 0.10 M in CH<sub>3</sub>COO<sup>−</sup>. Find the new pH, and quantify how much the ionization of acetic acid has been suppressed.',
        steps: [
          'This is now a buffer. By Henderson–Hasselbalch with [salt] = [acid] = 0.10 M:',
          'pH = p<i>K</i><sub>a</sub> + log([salt]/[acid]) = p<i>K</i><sub>a</sub> + log(1) = p<i>K</i><sub>a</sub>',
          'p<i>K</i><sub>a</sub> = −log(1.8 × 10<sup>−5</sup>) = 5 − log 1.8 = 5 − 0.26 = 4.74',
          '<b>Suppression factor.</b> In the buffer, [H<sup>+</sup>] = <i>K</i><sub>a</sub>[acid]/[salt] = 1.8 × 10<sup>−5</sup> M. Compared with the pure-acid value from worked example 3:',
          '[H<sup>+</sup>]<sub>pure</sub>/[H<sup>+</sup>]<sub>buffer</sub> = (1.34 × 10<sup>−3</sup>)/(1.8 × 10<sup>−5</sup>) ≈ 74',
          'Adding the common ion has throttled acetic acid’s ionization roughly <b>74-fold</b>, dragging the pH up from 2.87 to 4.74 — the common-ion effect made fully quantitative.',
        ],
        ans: 'pH = 4.74',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the pH of (i) 0.01 M HCl and (ii) 0.01 M NaOH at 298 K.',
            a: '(i) 2.0, (ii) 12.0.',
          },
          {
            q: '[NEET] A solution has [H<sup>+</sup>] = 4.0 × 10<sup>−5</sup> M. Find its pOH.',
            a: 'pOH ≈ 9.60.',
          },
          {
            q: '[JEE Main] For a 0.20 M weak monoprotic acid, <i>K</i><sub>a</sub> = 4.0 × 10<sup>−5</sup>. Find <i>α</i> and the pH.',
            a: '<i>α</i> ≈ 1.41%, pH ≈ 2.55.',
          },
          {
            q: '[JEE Main] The <i>K</i><sub>b</sub> of NH<sub>3</sub> is 1.8 × 10<sup>−5</sup>. Find the <i>K</i><sub>a</sub> of its conjugate acid NH<sub>4</sub><sup>+</sup> at 298 K.',
            a: '<i>K</i><sub>a</sub> ≈ 5.6 × 10<sup>−10</sup>.',
          },
          {
            q: '[JEE Advanced] A buffer holds 0.50 mol formic acid and 0.50 mol sodium formate in 1 L (<i>K</i><sub>a</sub> = 1.8 × 10<sup>−4</sup>). Find the pH, then the pH after adding 0.10 mol HCl.',
            a: 'pH ≈ 3.74 initially; ≈ 3.57 after HCl (buffer resists the change).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The conjugate base of H<sub>2</sub>PO<sub>4</sub><sup>−</sup> is:',
        opts: [
          { label: 'H<sub>3</sub>PO<sub>4</sub>', nudge: '<b>(a)</b> is the conjugate acid (adding a proton) — the most common reversal error.' },
          { label: 'HPO<sub>4</sub><sup>2−</sup>', nudge: null },
          { label: 'PO<sub>4</sub><sup>3−</sup>', nudge: '<b>(c)</b> removes two protons in one step — not a single conjugate step.' },
          { label: 'H<sub>2</sub>PO<sub>4</sub><sup>−</sup> itself', nudge: '<b>(d)</b> ignores that a conjugate species must differ by one proton.' },
        ],
        correct: 1,
        solution: 'A conjugate base is formed by removing one H<sup>+</sup>: H<sub>2</sub>PO<sub>4</sub><sup>−</sup> → HPO<sub>4</sub><sup>2−</sup> + H<sup>+</sup>.',
      },
      {
        t: 'mcq',
        q: 'The pH of 1.0 × 10<sup>−8</sup> M HCl at 298 K is closest to:',
        opts: [
          { label: '8.00', nudge: '<b>(a)</b> the naive −log(10<sup>−8</sup>) — physically impossible (acid giving basic pH).' },
          { label: '7.00', nudge: '<b>(b)</b> the “very dilute, so just neutral” shortcut — it keeps water’s 10<sup>−7</sup> M but drops the acid’s own 10<sup>−8</sup> M.' },
          { label: '6.98', nudge: null },
          { label: '7.02', nudge: '<b>(d)</b> right idea, wrong side of 7 — an acid can never give pH > 7.' },
        ],
        correct: 2,
        solution: 'Water’s H<sup>+</sup> dominates at this dilution; solving gives [H<sup>+</sup>] ≈ 1.05 × 10<sup>−7</sup>, pH ≈ 6.98.',
      },
      {
        t: 'mcq',
        q: 'Adding solid sodium acetate to an acetic acid solution will:',
        opts: [
          { label: 'increase the ionization of acetic acid', nudge: '<b>(a)</b> is the exact opposite — common ion suppresses ionization.' },
          { label: 'decrease [H<sup>+</sup>]', nudge: null },
          { label: 'decrease the pH', nudge: '<b>(c)</b> pH rises (less acidic), so this has the sign wrong.' },
          { label: 'leave the equilibrium unchanged', nudge: '<b>(d)</b> ignores Le Chatelier entirely.' },
        ],
        correct: 1,
        solution: 'The common acetate ion shifts ionization backward, lowering [H<sup>+</sup>].',
      },
      {
        t: 'mcq',
        q: 'Given <i>K</i><sub>a</sub>(HCN) = 4.9 × 10<sup>−10</sup> at 298 K, the <i>K</i><sub>b</sub> of CN<sup>−</sup> is:',
        opts: [
          { label: '4.9 × 10<sup>−10</sup>', nudge: '<b>(a)</b> assumes a conjugate pair shares the same constant.' },
          { label: '2.0 × 10<sup>−5</sup>', nudge: null },
          { label: '4.9 × 10<sup>−24</sup>', nudge: '<b>(c)</b> multiplies <i>K</i><sub>a</sub> by <i>K</i><sub>w</sub> instead of dividing — a frequent slip.' },
          { label: '2.0 × 10<sup>−4</sup>', nudge: '<b>(d)</b> an order-of-magnitude (exponent) error in the division.' },
        ],
        correct: 1,
        solution: '<i>K</i><sub>b</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub> = 10<sup>−14</sup>/(4.9 × 10<sup>−10</sup>) = 2.0 × 10<sup>−5</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Ignoring water’s H<sup>+</sup> in very dilute acids/bases.</b> Below ∼ 10<sup>−6</sup> M, the naive −log <i>c</i> gives nonsense (e.g. pH 8 for an acid). Always fold in water’s contribution; the answer settles just under (or over) 7.',
          '<b>Dropping the stoichiometric factor for strong polyprotic acids.</b> 0.005 M H<sub>2</sub>SO<sub>4</sub> (taken as fully dissociated) gives [H<sup>+</sup>] = 0.010 M, not 0.005.',
          '<b>Using <i>α</i> = √(<i>K</i><sub>a</sub>/<i>c</i>) when <i>α</i> is not small.</b> If the approximation returns <i>α</i> > 5%, discard it and solve the quadratic <i>K</i><sub>a</sub> = <i>cα</i><sup>2</sup>/(1 − <i>α</i>).',
          '<b>Swapping conjugate acid and base.</b> Conjugate base = remove one H<sup>+</sup>; conjugate acid = add one. And for the pair, <i>K</i><sub>a</sub> × <i>K</i><sub>b</sub> = <i>K</i><sub>w</sub> — divide, never multiply, when converting.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For [H<sup>+</sup>] = <i>m</i> × 10<sup>−<i>n</i></sup>, use pH = <i>n</i> − log <i>m</i> in your head (e.g. 2 × 10<sup>−3</sup> ⇒ pH = 3 − 0.30 = 2.70). And lean on p<i>K</i><sub>a</sub> + p<i>K</i><sub>b</sub> = 14 to skip a full conversion. Sanity check every answer: acid ⇒ pH < 7, base ⇒ pH > 7, and dilution nudges pH toward 7 but never across it.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Water',
            note: '<i>K</i><sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = 10<sup>−14</sup> (298 K); pure water [H<sup>+</sup>] = 10<sup>−7</sup> M.',
          },
          { f: 'pH', note: 'pH = −log[H<sup>+</sup>]; pH + pOH = 14.' },
          {
            f: 'Weak acid',
            note: '<i>K</i><sub>a</sub> = <i>cα</i><sup>2</sup>/(1 − <i>α</i>) ≈ <i>cα</i><sup>2</sup>; <i>α</i> = √(<i>K</i><sub>a</sub>/<i>c</i>); [H<sup>+</sup>] = √(<i>K</i><sub>a</sub><i>c</i>).',
          },
          { f: 'Ostwald', note: '<i>α</i> ∝ 1/√<i>c</i> — dilution raises degree of ionization.' },
          { f: 'Weak base', note: '[OH<sup>−</sup>] = √(<i>K</i><sub>b</sub><i>c</i>); pH = 14 − pOH.' },
          {
            f: 'Polyprotic acids',
            note: 'ionize stepwise, <i>K</i><sub>a1</sub> ≫ <i>K</i><sub>a2</sub> ≫ <i>K</i><sub>a3</sub>; pH set almost entirely by the first step.',
          },
          {
            f: 'Conjugate pair',
            note: '<i>K</i><sub>a</sub> × <i>K</i><sub>b</sub> = <i>K</i><sub>w</sub>; p<i>K</i><sub>a</sub> + p<i>K</i><sub>b</sub> = 14.',
          },
          { f: 'Buffer (Henderson)', note: 'pH = p<i>K</i><sub>a</sub> + log([salt]/[acid]).' },
          { f: 'Common-ion effect', note: 'a shared ion suppresses ionization of a weak electrolyte (Le Chatelier).' },
        ],
        aids: [
          'acid concepts widen “<b>A</b>rrhenius → <b>B</b>rønsted → <b>L</b>ewis” (narrow to wide)',
          '“<b>A</b>dd a proton for the <b>A</b>cid” (conjugate acid = +H<sup>+</sup>)',
          '“<b>dilute weak acid, ionization peaks</b>” for Ostwald’s law.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 05 (book Sub-03) · pp. 278–283 ─────────────────────────
  {
    n: '05',
    title: 'Buffers, Solubility Product (Ksp) & Salt Hydrolysis',
    kalam: 'A buffer is a solution that resists changes in pH when small amounts of acid or base are added.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The chapter’s highest-yield numerical zone. CBSE Boards ask buffer-pH (Henderson) and salt-nature classification for 2–3 marks. NEET drops a <i>K</i><sub>sp</sub>↔solubility one-liner almost every year. JEE Main loves hydrolysis-pH and precipitation (<i>Q</i> vs <i>K</i><sub>sp</sub>) numericals; JEE Advanced fuses common-ion suppression with <i>K</i><sub>sp</sub> into multi-step problems. Everything here reuses the <i>K</i><sub>a</sub>, <i>K</i><sub>b</sub>, common-ion machinery you already built — this topic is where it all pays off.',
      },
      {
        t: 'p',
        html: 'All three ideas in this topic are the same equilibrium logic from earlier, pointed at three practical questions: How do I stop a solution’s pH from drifting? When does a “barely soluble” salt actually precipitate? Why is a solution of common table salt neutral, but baking soda’s solution basic?',
      },
      {
        t: 'p',
        html: '<b>Buffers — the shock absorbers of chemistry</b><br>Think of a buffer like the suspension on an Indian highway bus: the road throws potholes (added acid or base) at it constantly, yet the passengers (the pH) barely feel a jolt. A buffer is a solution that <b>resists changes in pH</b> when small amounts of acid or base are added. It works by keeping a large reserve of both a weak acid and its conjugate base side by side. Add H<sup>+</sup> and the conjugate base mops it up; add OH<sup>−</sup> and the weak acid neutralizes it. Your own blood is a buffer (carbonic acid / bicarbonate) holding pH near 7.4 — drift far from that and you are in serious trouble.',
      },
      {
        t: 'p',
        html: '<b>Solubility product — “insoluble” is never truly zero</b><br>Even salts we call insoluble — AgCl, BaSO<sub>4</sub>, CaF<sub>2</sub> — dissolve a tiny bit. In a saturated solution, undissolved solid sits in equilibrium with a faint trickle of its ions:<br>AgCl(s) ⇌ Ag<sup>+</sup>(aq) + Cl<sup>−</sup>(aq)<br>The equilibrium constant for this — with the pure solid omitted (Topic 01’s heterogeneous rule) — is the <b>solubility product</b> <i>K</i><sub>sp</sub>. It is the ceiling on how concentrated the ions can get before the salt starts crashing out.',
      },
      {
        t: 'p',
        html: '<b>Salt hydrolysis — salts that aren’t as innocent as they look</b><br>A salt is the child of an acid and a base. If a salt’s ion is the conjugate of a weak parent, that ion reacts with water and tips the pH. A useful one-liner: <b>the solution takes the side of the stronger parent.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Sodium acetate (CH<sub>3</sub>COONa) comes from a weak acid (acetic) and a strong base (NaOH). The strong base “wins,” so its solution is basic. NH<sub>4</sub>Cl comes from a strong acid (HCl) and a weak base (NH<sub>3</sub>); the strong acid wins, so its solution is acidic. NaCl, from two strong parents, is a draw — neutral.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions</b><br>• Henderson–Hasselbalch assumes the buffer ratio isn’t extreme — buffers only work well within about p<i>K</i><sub>a</sub> ± 1. Push the ratio past 10:1 and buffering becomes poor.<br>• <i>K</i><sub>sp</sub> as a simple concentration product assumes a dilute, ideal solution; high ionic strength needs activities.<br>• The clean hydrolysis-pH formulas assume the degree of hydrolysis is small. They also assume the salt’s parent ions don’t form complexes or precipitates of their own.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Buffer (Henderson–Hasselbalch)',
        main: 'Acidic buffer: pH = p<i>K</i><sub>a</sub> + log([salt]/[acid])<br>Basic buffer: pOH = p<i>K</i><sub>b</sub> + log([salt]/[base])',
        legend: [],
        note: 'Reusing the result derived with the common-ion effect.',
      },
      {
        t: 'p',
        html: 'Maximum buffer capacity occurs at [salt] = [acid], where pH = p<i>K</i><sub>a</sub>; useful <b>buffer range</b> ≈ p<i>K</i><sub>a</sub> ± 1.',
      },
      {
        t: 'formula',
        kicker: 'Solubility product',
        main: 'for A<sub><i>x</i></sub>B<sub><i>y</i></sub>(s) ⇌ <i>x</i> A<sup><i>y</i>+</sup> + <i>y</i> B<sup><i>x</i>−</sup>:<br><i>K</i><sub>sp</sub> = [A<sup><i>y</i>+</sup>]<sup><i>x</i></sup> [B<sup><i>x</i>−</sup>]<sup><i>y</i></sup>',
        legend: [
          '<i>K</i><sub>sp</sub> = solubility product',
          '<i>x</i>, <i>y</i> = the numbers of cations and anions in the formula A<sub><i>x</i></sub>B<sub><i>y</i></sub>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Relating <i>K</i><sub>sp</sub> to molar solubility <i>s</i> (in mol L<sup>−1</sup>):',
      },
      {
        t: 'table',
        title: null,
        head: ['Salt type', 'Example', 'Ksp in terms of s', 's'],
        rows: [
          ['AB (1:1)', 'AgCl, BaSO<sub>4</sub>', '<i>s</i><sup>2</sup>', '√<i>K</i><sub>sp</sub>'],
          ['AB<sub>2</sub> or A<sub>2</sub>B', 'CaF<sub>2</sub>, Ag<sub>2</sub>CrO<sub>4</sub>', '4<i>s</i><sup>3</sup>', '(<i>K</i><sub>sp</sub>/4)<sup>1/3</sup>'],
          ['AB<sub>3</sub> or A<sub>3</sub>B', 'Fe(OH)<sub>3</sub>', '27<i>s</i><sup>4</sup>', '(<i>K</i><sub>sp</sub>/27)<sup>1/4</sup>'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Precipitation criterion',
        main: '<i>Q</i> > <i>K</i><sub>sp</sub> ⇒ precipitate forms<br><i>Q</i> = <i>K</i><sub>sp</sub> ⇒ just saturated<br><i>Q</i> < <i>K</i><sub>sp</sub> ⇒ unsaturated',
        legend: ['<i>Q</i> = ionic product, the same expression with current concentrations'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Salt hydrolysis</b> — hydrolysis constant <i>K</i><sub>h</sub>, degree of hydrolysis <i>h</i>, concentration <i>c</i>:',
      },
      {
        t: 'table',
        title: null,
        head: ['Salt (acid + base)', 'Nature', 'Kh', 'pH'],
        rows: [
          ['Strong + Strong', 'neutral', '— (no hydrolysis)', '7'],
          ['Weak acid + Strong base', 'basic', '<i>K</i><sub>w</sub>/<i>K</i><sub>a</sub>', '7 + ½(p<i>K</i><sub>a</sub> + log <i>c</i>)'],
          ['Strong acid + Weak base', 'acidic', '<i>K</i><sub>w</sub>/<i>K</i><sub>b</sub>', '7 − ½(p<i>K</i><sub>b</sub> + log <i>c</i>)'],
          ['Weak acid + Weak base', 'depends', '<i>K</i><sub>w</sub>/(<i>K</i><sub>a</sub><i>K</i><sub>b</sub>)', '7 + ½(p<i>K</i><sub>a</sub> − p<i>K</i><sub>b</sub>)'],
        ],
      },
      {
        t: 'p',
        html: 'with <i>h</i> = √(<i>K</i><sub>h</sub>/<i>c</i>) (for a weak acid + weak base salt, <i>h</i> ≈ √<i>K</i><sub>h</sub>). All constants are temperature-dependent; pH, <i>h</i>, p<i>K</i> values are dimensionless. <i>K</i><sub>sp</sub> carries units (mol L<sup>−1</sup>)<sup>(<i>x</i>+<i>y</i>)</sup>.',
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>3.1 Why a buffer holds steady (mechanism)</b><br>In an acetic-acid / acetate buffer, both CH<sub>3</sub>COOH and CH<sub>3</sub>COO<sup>−</sup> are present in bulk. Add a splash of strong acid and the acetate reservoir absorbs it: CH<sub>3</sub>COO<sup>−</sup> + H<sup>+</sup> → CH<sub>3</sub>COOH. Add strong base and the acid reservoir absorbs it: CH<sub>3</sub>COOH + OH<sup>−</sup> → CH<sub>3</sub>COO<sup>−</sup> + H<sub>2</sub>O. Because the ratio [salt]/[acid] changes only slightly while both reservoirs are large, the Henderson equation tells us the pH barely moves. Capacity is greatest when the two are equal — there’s the most cushion in both directions — which is exactly the half-neutralization point where pH = p<i>K</i><sub>a</sub>.',
      },
      {
        t: 'p',
        html: '<b>Buffer in action (numerically).</b> Take the 0.10 M NH<sub>3</sub> / 0.10 M NH<sub>4</sub>Cl buffer of worked example 1 (pH 9.26, in 1 L) and add 0.01 mol of HCl. The acid converts that much base to its salt: NH<sub>3</sub> falls to 0.09 M, NH<sub>4</sub><sup>+</sup> rises to 0.11 M. Then<br>pOH = p<i>K</i><sub>b</sub> + log(0.11/0.09) = 4.74 + 0.09 = 4.83 ⇒ pH = 9.17<br>The pH slipped by less than 0.1 unit. Add that same 0.01 mol HCl to a litre of pure water and the pH would crash from 7 to 2 — a five-unit swing. That contrast is buffering.',
      },
      {
        t: 'p',
        html: '<b>3.2 Linking <i>K</i><sub>sp</sub> to molar solubility</b><br>For Ag<sub>2</sub>CrO<sub>4</sub>(s) ⇌ 2Ag<sup>+</sup> + CrO<sub>4</sub><sup>2−</sup>, if <i>s</i> moles dissolve per litre, then [Ag<sup>+</sup>] = 2<i>s</i> and [CrO<sub>4</sub><sup>2−</sup>] = <i>s</i>. Therefore<br><i>K</i><sub>sp</sub> = (2<i>s</i>)<sup>2</sup>(<i>s</i>) = 4<i>s</i><sup>3</sup> ⇒ <i>s</i> = (<i>K</i><sub>sp</sub>/4)<sup>1/3</sup><br><b>Critical point:</b> the stoichiometric coefficient enters twice — once as a multiplier on the concentration (2<i>s</i>) and once as the exponent (2). Forgetting either is the classic error, and it is why you cannot simply take √<i>K</i><sub>sp</sub> for anything but a 1:1 salt.',
      },
      {
        t: 'p',
        html: '<b>3.3 Common-ion effect on solubility</b><br>Add a common ion and solubility plummets (Le Chatelier, exactly as it suppressed weak-acid ionization in Topic 04). For AgCl in a solution already 0.10 M in Cl<sup>−</sup>, the [Cl<sup>−</sup>] is fixed by the added salt, so <i>K</i><sub>sp</sub> = [Ag<sup>+</sup>][Cl<sup>−</sup>] = <i>s</i>′ × 0.10, forcing <i>s</i>′ far below its pure-water value. This is the principle behind washing a precipitate with a dilute solution of a common ion rather than pure water — it minimizes loss.',
      },
      {
        t: 'p',
        html: '<b>3.4 Deriving the salt-hydrolysis pH (weak acid + strong base)</b><br>The acetate ion is the conjugate base of a weak acid, so it hydrolyses:<br>CH<sub>3</sub>COO<sup>−</sup> + H<sub>2</sub>O ⇌ CH<sub>3</sub>COOH + OH<sup>−</sup>, <i>K</i><sub>h</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub><br>The <i>K</i><sub>h</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub> relation is just the conjugate <i>K</i><sub>a</sub><i>K</i><sub>b</sub> = <i>K</i><sub>w</sub> rule (Topic 04) applied to acetate. With [OH<sup>−</sup>] = √(<i>K</i><sub>h</sub><i>c</i>) = √(<i>K</i><sub>w</sub><i>c</i>/<i>K</i><sub>a</sub>), taking −log and rearranging gives<br>pH = 7 + ½(p<i>K</i><sub>a</sub> + log <i>c</i>)<br>Since <i>c</i> ≫ <i>K</i><sub>a</sub> in practice, p<i>K</i><sub>a</sub> + log <i>c</i> > 0, so the solution is basic — confirming “the salt takes the side of its stronger parent.”',
      },
      {
        t: 'p',
        html: '<b>3.5 Selective (fractional) precipitation</b><br>When one reagent can precipitate two ions, the salt needing less of the added ion saturates first (compare the concentrations needed, not the <i>K</i><sub>sp</sub> values). Suppose a solution holds 0.010 M Cl<sup>−</sup> and 0.010 M CrO<sub>4</sub><sup>2−</sup>, and we add Ag<sup>+</sup> drop by drop. AgCl (<i>K</i><sub>sp</sub> = 1.8 × 10<sup>−10</sup>) begins precipitating when [Ag<sup>+</sup>] = <i>K</i><sub>sp</sub>/[Cl<sup>−</sup>] = 1.8 × 10<sup>−8</sup> M, whereas Ag<sub>2</sub>CrO<sub>4</sub> (<i>K</i><sub>sp</sub> = 1.1 × 10<sup>−12</sup>) needs [Ag<sup>+</sup>] = √(<i>K</i><sub>sp</sub>/[CrO<sub>4</sub><sup>2−</sup>]) ≈ 1.0 × 10<sup>−5</sup> M. Since chloride is satisfied at a far lower [Ag<sup>+</sup>], <b>AgCl precipitates first</b>, and the chromate stays in solution until almost all the chloride is gone. This staggering is exactly how qualitative-analysis groups are separated (controlling [S<sup>2−</sup>] via pH so that only the least-soluble sulphides drop out) and why the red Ag<sub>2</sub>CrO<sub>4</sub> endpoint signals the end of chloride in a Mohr titration.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Find the pH of a basic buffer that is 0.10 M in NH<sub>3</sub> and 0.10 M in NH<sub>4</sub>Cl, given <i>K</i><sub>b</sub>(NH<sub>3</sub>) = 1.8 × 10<sup>−5</sup>.',
        steps: [
          'Using the basic-buffer form with [salt] = [base] = 0.10 M:',
          'pOH = p<i>K</i><sub>b</sub> + log([salt]/[base]) = p<i>K</i><sub>b</sub> + log(1) = p<i>K</i><sub>b</sub>',
          'p<i>K</i><sub>b</sub> = −log(1.8 × 10<sup>−5</sup>) = 5 − 0.26 = 4.74 ⇒ pOH = 4.74',
          'pH = 14 − 4.74',
          'A basic buffer sits on the basic side of 7, as expected.',
        ],
        ans: 'pH = 9.26',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The <i>K</i><sub>sp</sub> of silver chromate Ag<sub>2</sub>CrO<sub>4</sub> is 1.1 × 10<sup>−12</sup>. Find its molar solubility.',
        steps: [
          '<b>The trap.</b> The reflex move is <i>s</i> = √<i>K</i><sub>sp</sub> = √(1.1 × 10<sup>−12</sup>) ≈ 1.0 × 10<sup>−6</sup> M — <b>wrong</b>, because Ag<sub>2</sub>CrO<sub>4</sub> is a 2:1 (A<sub>2</sub>B) salt, not 1:1. The correct expression is <i>K</i><sub>sp</sub> = 4<i>s</i><sup>3</sup>:',
          '<i>s</i> = (<i>K</i><sub>sp</sub>/4)<sup>1/3</sup> = ((1.1 × 10<sup>−12</sup>)/4)<sup>1/3</sup> = (2.75 × 10<sup>−13</sup>)<sup>1/3</sup>',
          '<b>Speed cue:</b> before reaching for a root, read the formula’s subscripts. √ is only for AB salts; A<sub>2</sub>B/AB<sub>2</sub> salts need the cube root of <i>K</i><sub>sp</sub>/4.',
        ],
        ans: '<i>s</i> ≈ 6.5 × 10<sup>−5</sup> M',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Calculate the pH of a 0.10 M sodium acetate solution. <i>K</i><sub>a</sub>(acetic acid) = 1.8 × 10<sup>−5</sup>.',
        steps: [
          'Sodium acetate is the salt of a weak acid and strong base → anionic hydrolysis → basic.',
          '<i>K</i><sub>h</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub> = 10<sup>−14</sup>/(1.8 × 10<sup>−5</sup>) = 5.6 × 10<sup>−10</sup>',
          '<i>h</i> = √(<i>K</i><sub>h</sub>/<i>c</i>) = √((5.6 × 10<sup>−10</sup>)/0.10) = √(5.6 × 10<sup>−9</sup>) = 7.5 × 10<sup>−5</sup>',
          '[OH<sup>−</sup>] = <i>c h</i> = 0.10 × 7.5 × 10<sup>−5</sup> = 7.5 × 10<sup>−6</sup> M ⇒ pOH = 5.13',
          'Cross-check with the direct formula: pH = 7 + ½(p<i>K</i><sub>a</sub> + log <i>c</i>) = 7 + ½(4.74 − 1) = 8.87. ✓',
        ],
        ans: 'pH = 8.87',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '<i>K</i><sub>sp</sub>(AgCl) = 1.8 × 10<sup>−10</sup>. Find the molar solubility of AgCl in (a) pure water and (b) 0.10 M NaCl, and quantify the suppression.',
        steps: [
          '<b>(a) Pure water:</b> <i>K</i><sub>sp</sub> = <i>s</i><sup>2</sup> ⇒ <i>s</i> = √(1.8 × 10<sup>−10</sup>) = 1.34 × 10<sup>−5</sup> M.',
          '<b>(b) In 0.10 M NaCl:</b> the chloride from NaCl swamps the trace from AgCl, so [Cl<sup>−</sup>] ≈ 0.10 M. Then',
          '<i>K</i><sub>sp</sub> = [Ag<sup>+</sup>][Cl<sup>−</sup>] = <i>s</i>′ × 0.10 ⇒ <i>s</i>′ = (1.8 × 10<sup>−10</sup>)/0.10 = 1.8 × 10<sup>−9</sup> M',
          '<b>Suppression factor:</b><br><i>s</i>/<i>s</i>′ = (1.34 × 10<sup>−5</sup>)/(1.8 × 10<sup>−9</sup>) ≈ 7400',
          'The common chloride ion has made AgCl roughly <b>7400 times less soluble</b> — the same Le Chatelier suppression that throttled acetic acid’s ionization in Topic 04, now governing a precipitate. (This is precisely why gravimetric precipitates are washed with a dilute common-ion solution, not pure water.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Classify each salt solution as acidic, basic, or neutral: NH<sub>4</sub>Cl, CH<sub>3</sub>COONa, NaCl, NaCN.',
            a: 'NH<sub>4</sub>Cl acidic, CH<sub>3</sub>COONa basic, NaCl neutral, NaCN basic.',
          },
          {
            q: '[NEET] <i>K</i><sub>sp</sub> of CaF<sub>2</sub> is 3.2 × 10<sup>−11</sup>. Find its molar solubility.',
            a: '<i>s</i> = 2.0 × 10<sup>−4</sup> M.',
          },
          {
            q: '[JEE Main] What mole ratio [salt]/[acid] gives a buffer of pH 5.00 from an acid of p<i>K</i><sub>a</sub> = 4.74?',
            a: 'ratio ≈ 1.8.',
          },
          {
            q: '[JEE Main] Find the pH of 0.010 M NH<sub>4</sub>Cl, given <i>K</i><sub>b</sub>(NH<sub>3</sub>) = 1.8 × 10<sup>−5</sup>.',
            a: 'pH ≈ 5.63.',
          },
          {
            q: '[JEE Advanced] Equal volumes of 0.020 M BaCl<sub>2</sub> and 0.020 M Na<sub>2</sub>SO<sub>4</sub> are mixed. Will BaSO<sub>4</sub> precipitate? <i>K</i><sub>sp</sub>(BaSO<sub>4</sub>) = 1.1 × 10<sup>−10</sup>.',
            a: 'Yes — after mixing [Ba<sup>2+</sup>] = [SO<sub>4</sub><sup>2−</sup>] = 0.010 M, so <i>Q</i> = 1.0 × 10<sup>−4</sup> ≫ <i>K</i><sub>sp</sub>; precipitate forms.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'An aqueous solution of which salt is <b>basic</b>?',
        opts: [
          { label: 'NH<sub>4</sub>Cl', nudge: '<b>(a)</b> and <b>(d)</b> are strong-acid + weak-base salts → acidic.' },
          { label: 'CH<sub>3</sub>COONa', nudge: null },
          {
            label: 'NaCl',
            nudge: '<b>(c)</b> is strong + strong → neutral. The trap is assuming “salt = neutral” by default, which ignores hydrolysis entirely.',
          },
          { label: '(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>', nudge: '<b>(a)</b> and <b>(d)</b> are strong-acid + weak-base salts → acidic.' },
        ],
        correct: 1,
        solution: 'Salt of a weak acid + strong base → anionic hydrolysis → basic.',
      },
      {
        t: 'mcq',
        q: 'If the molar solubility of Ag<sub>2</sub>CrO<sub>4</sub> is <i>s</i>, its <i>K</i><sub>sp</sub> equals:',
        opts: [
          { label: '<i>s</i><sup>2</sup>', nudge: '<b>(a)</b> treats it as a 1:1 salt — the commonest slip.' },
          { label: '4<i>s</i><sup>3</sup>', nudge: null },
          { label: '27<i>s</i><sup>4</sup>', nudge: '<b>(c)</b> is the AB<sub>3</sub> pattern.' },
          { label: '<i>s</i><sup>3</sup>', nudge: '<b>(d)</b> keeps the cube but drops the factor of 2<sup>2</sup> = 4.' },
        ],
        correct: 1,
        solution: '[Ag<sup>+</sup>] = 2<i>s</i>, [CrO<sub>4</sub><sup>2−</sup>] = <i>s</i>, so <i>K</i><sub>sp</sub> = (2<i>s</i>)<sup>2</sup>(<i>s</i>) = 4<i>s</i><sup>3</sup>.',
      },
      {
        t: 'mcq',
        q: 'A buffer has its maximum buffering capacity when:',
        opts: [
          {
            label: '[salt] ≫ [acid]',
            nudge: '<b>(a)</b>/<b>(c)</b> are lopsided — one reservoir is nearly exhausted, so capacity against added base/acid respectively is poor.',
          },
          { label: '[salt] = [acid]', nudge: null },
          {
            label: '[acid] ≫ [salt]',
            nudge: '<b>(a)</b>/<b>(c)</b> are lopsided — one reservoir is nearly exhausted, so capacity against added base/acid respectively is poor.',
          },
          {
            label: 'it is highly diluted',
            nudge: '<b>(d)</b> dilution doesn’t change the ratio (so pH holds) but shrinks both reservoirs, reducing capacity.',
          },
        ],
        correct: 1,
        solution: 'Equal amounts give the most reserve in both directions, and here pH = p<i>K</i><sub>a</sub>.',
      },
      {
        t: 'mcq',
        q: 'The solubility of AgCl is <b>greatest</b> in:',
        opts: [
          {
            label: '0.1 M NaCl',
            nudge: '<b>(a)</b> and <b>(d)</b> add Cl<sup>−</sup>; <b>(b)</b> adds Ag<sup>+</sup>. Picking any of these means forgetting that the common-ion effect lowers solubility.',
          },
          {
            label: '0.1 M AgNO<sub>3</sub>',
            nudge: '<b>(a)</b> and <b>(d)</b> add Cl<sup>−</sup>; <b>(b)</b> adds Ag<sup>+</sup>. Picking any of these means forgetting that the common-ion effect lowers solubility.',
          },
          { label: 'pure water', nudge: null },
          {
            label: '0.1 M HCl',
            nudge: '<b>(a)</b> and <b>(d)</b> add Cl<sup>−</sup>; <b>(b)</b> adds Ag<sup>+</sup>. Picking any of these means forgetting that the common-ion effect lowers solubility.',
          },
        ],
        correct: 2,
        solution: 'Every other option supplies a common ion (Cl<sup>−</sup> from NaCl/HCl, Ag<sup>+</sup> from AgNO<sub>3</sub>) that suppresses solubility.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Assuming every salt solution is neutral.</b> Only strong-acid + strong-base salts are neutral by default (a weak–weak salt such as CH<sub>3</sub>COONH<sub>4</sub> is neutral only because its <i>K</i><sub>a</sub> ≈ <i>K</i><sub>b</sub>). Always identify each parent’s strength first; the solution leans toward the stronger parent.',
          '<b>Using <i>s</i> = √<i>K</i><sub>sp</sub> for non-1:1 salts.</b> CaF<sub>2</sub>, Ag<sub>2</sub>CrO<sub>4</sub> need <i>K</i><sub>sp</sub> = 4<i>s</i><sup>3</sup>; Fe(OH)<sub>3</sub> needs 27<i>s</i><sup>4</sup>. The coefficient enters both as a factor and as an exponent.',
          '<b>Forgetting to halve concentrations on mixing.</b> When equal volumes are combined, every concentration drops by half before you compute <i>Q</i> — a step that silently flips many precipitation answers.',
          '<b>Using a single concentration in Henderson instead of the ratio.</b> Only [salt]/[acid] matters — volume cancels, so moles work just as well as molarities.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For buffers, remember pH = p<i>K</i><sub>a</sub> at the half-equivalence point and that dilution barely moves buffer pH. For <i>K</i><sub>sp</sub>, a fast sanity check on solubility: pure water > any solution sharing a common ion. For hydrolysis, skip the full derivation — classify the salt, then apply the one-line pH formula for its type.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Buffer',
            note: 'pH = p<i>K</i><sub>a</sub> + log([salt]/[acid]) (acidic); pOH = p<i>K</i><sub>b</sub> + log([salt]/[base]) (basic). Range ≈ p<i>K</i><sub>a</sub> ± 1; max capacity at equal amounts (pH = p<i>K</i><sub>a</sub>).',
          },
          {
            f: '<i>K</i><sub>sp</sub>',
            note: 'AB → <i>s</i> = √<i>K</i><sub>sp</sub>; A<sub>2</sub>B/AB<sub>2</sub> → <i>K</i><sub>sp</sub> = 4<i>s</i><sup>3</sup>; AB<sub>3</sub> → 27<i>s</i><sup>4</sup>.',
          },
          {
            f: 'Precipitation',
            note: '<i>Q</i> > <i>K</i><sub>sp</sub> precipitate; <i>Q</i> = <i>K</i><sub>sp</sub> saturated; <i>Q</i> < <i>K</i><sub>sp</sub> unsaturated.',
          },
          { f: 'Common-ion effect', note: 'suppresses both ionization and solubility (Le Chatelier).' },
          {
            f: 'Hydrolysis',
            note: 'WA+SB → basic, pH = 7 + ½(p<i>K</i><sub>a</sub> + log <i>c</i>); SA+WB → acidic, pH = 7 − ½(p<i>K</i><sub>b</sub> + log <i>c</i>); WA+WB → pH = 7 + ½(p<i>K</i><sub>a</sub> − p<i>K</i><sub>b</sub>), independent of <i>c</i>.',
          },
          {
            f: '<i>K</i><sub>h</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub> (or <i>K</i><sub>w</sub>/<i>K</i><sub>b</sub>); <i>h</i> = √(<i>K</i><sub>h</sub>/<i>c</i>) (for a weak acid + weak base salt, <i>h</i> ≈ √<i>K</i><sub>h</sub>).',
            note: '',
          },
        ],
        aids: [
          '“<b>salt sides with the strong parent</b>” for hydrolysis nature',
          '“<b>read the subscripts before the root</b>” for <i>K</i><sub>sp</sub>',
          '“<b>equal is best</b>” for buffer capacity.',
        ],
      },
    ],
  },
];
