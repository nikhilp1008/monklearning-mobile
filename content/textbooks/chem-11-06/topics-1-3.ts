import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 01 to 03: pp. 252–269 of the Class 11 Chemistry Master
 * Reference, word for word. The chapter’s title page (p. 251) and contents
 * (top of p. 252) are not copied. The book prints its sub-topics in the order
 * Sub-01, Sub-04, Sub-05, Sub-02, Sub-03; the app keeps that page order, so
 * Topic 01 is the book’s Sub-01, Physical & Chemical Equilibrium — The
 * Equilibrium Constants Kc and Kp (starts under the contents on p. 252, ends
 * p. 259), Topic 02 is Sub-04, Equilibrium Constant, Reaction Quotient & Gibbs
 * Energy (pp. 260–264), and Topic 03 is Sub-05, Le Chatelier’s Principle &
 * Factors Affecting Equilibria (pp. 265–269). Each is split at its Sections 1
 * to 8, and every cross-reference to the book’s numbering is rewritten to the
 * app’s (Sub-01 → Topic 01, Sub-04 → Topic 02, Sub-05 → Topic 03). Figure 6.1
 * (cited p. 253, drawn on the figures page p. 254) is redrawn in
 * lib/diagrams/chemistry-11-06.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 (book Sub-01) · pp. 252–259 ─────────────────────────
  {
    n: '01',
    title: 'Physical & Chemical Equilibrium — The Equilibrium Constants Kc and Kp',
    kalam: 'Equilibrium is not a dead stop.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation stone of the entire chapter. CBSE Boards lift 1–3 marks here on writing <i>K</i><sub>c</sub>/<i>K</i><sub>p</sub> expressions and the <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>Δ<i>n</i><sub>g</sub></sup> relation. NEET reliably plants 1 question on units of <i>K</i> or a quick <i>K</i><sub>p</sub>–<i>K</i><sub>c</sub> conversion. JEE Main asks numerical <i>K</i><sub>c</sub> from an ICE table, and JEE Advanced loves combining equilibria (reverse/multiply/add rules). Master this topic and half the chapter becomes bookkeeping.',
      },
      {
        t: 'p',
        html: 'Picture the Howrah–New Delhi Rajdhani standing at a busy platform during the morning rush. Passengers are getting in through some doors and getting out through others, all at once. If exactly as many board as alight every minute, the <b>number of people inside the coach stays constant</b> — even though the doors are never still. To a person standing on the platform glancing at the window, nothing seems to change. But step inside and you see furious two-way traffic. That is dynamic equilibrium: constant on the outside, busy on the inside.',
      },
      {
        t: 'p',
        html: 'Equilibrium is <b>not</b> a dead stop. It is a balance of two opposing rates.',
      },
      {
        t: 'p',
        html: '<b>Physical equilibrium first</b><br>Before any chemical bonds break, equilibrium already shows up in plain physical changes. Seal a half-filled water bottle and leave it. Water molecules keep escaping the surface (evaporation) while vapour molecules keep returning (condensation). Soon the rate of escape equals the rate of return, and the vapour pressure above the liquid locks to a fixed value at that temperature:<br>H<sub>2</sub>O(l) ⇌ H<sub>2</sub>O(g)',
      },
      {
        t: 'p',
        html: 'The same balance governs everyday Indian-kitchen and bazaar scenes:<br>• <b>Solid–liquid:</b> at 0 °C and 1 atm, ice melts at exactly the rate water freezes — H<sub>2</sub>O(s) ⇌ H<sub>2</sub>O(l). The slush sits forever at 0 °C.<br>• <b>Dissolution of a solid:</b> keep stirring sugar into a glass of nimbu paani until no more dissolves. That saturated solution is an equilibrium — sugar crystals dissolve as fast as dissolved sugar re-crystallises: sugar(s) ⇌ sugar(aq).<br>• <b>Dissolution of a gas:</b> the fizz trapped in a sealed Thums-Up bottle is CO<sub>2</sub>(g) ⇌ CO<sub>2</sub>(aq) at equilibrium under pressure. Crack the cap, pressure drops, the balance breaks, and the gas rushes out.',
      },
      { t: 'fig', id: 'c11-06-fig-6.1' },
      {
        t: 'p',
        html: '<b>From physical to chemical</b><br>Now let the molecules actually react. Take a sealed flask of hydrogen and iodine vapour. They combine to give HI; simultaneously HI breaks back apart. Both reactions run together:<br>H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g)',
      },
      {
        t: 'p',
        html: 'A reaction like this — one that can go both ways and never fully finishes in a closed vessel — is <b>reversible</b>, and a reversible reaction in a closed system always settles into equilibrium. The beautiful experimental fact is this: you reach the <b>same</b> equilibrium mixture whether you start with pure H<sub>2</sub> + I<sub>2</sub> or with pure HI. Equilibrium doesn’t care which gate you entered from.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A reaction’s thermodynamic destination (how far it ends up going) is set by the equilibrium constant, while its speed of arrival is a kinetics question. A large <i>K</i> tells you the reaction goes nearly to completion — it says nothing about whether that takes a microsecond or a millennium.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions</b><br>• <b>Closed system.</b> Open the flask and let products escape, and equilibrium can never establish — the train coach must have its doors and walls.<br>• <b>Constant temperature.</b> <i>K</i> is a constant only at fixed <i>T</i>. Change <i>T</i> and you get a different <i>K</i>.<br>• <b>No bulk disturbance.</b> Equilibrium is reached spontaneously and is maintained only while nothing is added or removed.<br>• The neat constant-ratio law (next section) assumes the species behave <b>ideally</b> (dilute solutions, ideal gases). Real high-pressure or concentrated systems need activities, not raw concentrations — a refinement you meet later.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Law of mass action',
        html: 'For a reversible reaction<br><i>a</i>A + <i>b</i>B ⇌ <i>c</i>C + <i>d</i>D<br>the rate of an elementary step is proportional to the product of the active masses (molar concentrations) of the reactants, each raised to its stoichiometric coefficient.',
      },
      {
        t: 'formula',
        kicker: 'Concentration equilibrium constant (<i>K</i><sub>c</sub>)',
        main: '<i>K</i><sub>c</sub> = [C]<sup><i>c</i></sup>[D]<sup><i>d</i></sup>/([A]<sup><i>a</i></sup>[B]<sup><i>b</i></sup>)',
        legend: [
          '[ · ] = the <b>equilibrium</b> molar concentration, in mol L<sup>−1</sup>',
          '<i>a</i>, <i>b</i>, <i>c</i>, <i>d</i> = the stoichiometric coefficients',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Pressure equilibrium constant (<i>K</i><sub>p</sub>)',
        main: 'for gaseous equilibria:<br><i>K</i><sub>p</sub> = <i>p</i><sub>C</sub><sup><i>c</i></sup><i>p</i><sub>D</sub><sup><i>d</i></sup>/(<i>p</i><sub>A</sub><sup><i>a</i></sup><i>p</i><sub>B</sub><sup><i>b</i></sup>)',
        legend: ['<i>p</i><sub><i>i</i></sub> = equilibrium partial pressures'],
        note: null,
      },
      {
        t: 'formula',
        kicker: '<i>K</i><sub>p</sub>–<i>K</i><sub>c</sub> relationship',
        main: '<i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>Δ<i>n</i><sub>g</sub></sup>',
        legend: [
          'Δ<i>n</i><sub>g</sub> = (moles of gaseous products) − (moles of gaseous reactants)',
          '<i>R</i> = 0.0821 L atm mol<sup>−1</sup> K<sup>−1</sup> (when pressures are in atm)',
          '<i>T</i> = temperature, in kelvin',
        ],
        note: '<b>Only gaseous species count toward</b> Δ<i>n</i><sub>g</sub> — solids and liquids are excluded.',
      },
      {
        t: 'def',
        term: 'Reaction quotient (<i>Q</i>)',
        html: 'identical algebraic form to <i>K</i><sub>c</sub> (call it <i>Q</i><sub>c</sub>) or <i>K</i><sub>p</sub> (<i>Q</i><sub>p</sub>), but evaluated at any arbitrary instant, not necessarily equilibrium.',
      },
      {
        t: 'p',
        html: '<b>Units and “dimensional formula”</b><br>Unlike a fixed physical constant, the equilibrium constant has <b>no fixed dimension</b> — its units depend on Δ<i>n</i><sub>g</sub>:<br>[<i>K</i><sub>c</sub>] = (mol L<sup>−1</sup>)<sup>Δ<i>n</i><sub>g</sub></sup>,   [<i>K</i><sub>p</sub>] = (atm)<sup>Δ<i>n</i><sub>g</sub></sup><br>So for N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub> (Δ<i>n</i><sub>g</sub> = −2), <i>K</i><sub>c</sub> carries units of mol<sup>−2</sup> L<sup>2</sup>. When Δ<i>n</i><sub>g</sub> = 0, <i>K</i> is dimensionless. (Strictly, <i>K</i> defined via activities is always dimensionless; the unit-bearing form above is the working convention in JEE/NEET numerics.)',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI / working unit'],
        rows: [
          ['Concentration eq. constant', '<i>K</i><sub>c</sub>', '(mol L<sup>−1</sup>)<sup>Δ<i>n</i><sub>g</sub></sup>'],
          ['Pressure eq. constant', '<i>K</i><sub>p</sub>', '(atm)<sup>Δ<i>n</i><sub>g</sub></sup> (or bar/Pa)'],
          ['Partial pressure', '<i>p</i><sub><i>i</i></sub>', 'atm, bar, Pa'],
          ['Gas constant', '<i>R</i>', '0.0821 L atm mol<sup>−1</sup> K<sup>−1</sup>'],
        ],
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>3.1 Deriving <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>Δ<i>n</i><sub>g</sub></sup></b><br>Start from the ideal gas law for any gaseous species <i>i</i> in the mixture:<br><i>p</i><sub><i>i</i></sub><i>V</i> = <i>n</i><sub><i>i</i></sub><i>RT</i>  ⇒  <i>p</i><sub><i>i</i></sub> = (<i>n</i><sub><i>i</i></sub>/<i>V</i>)<i>RT</i> = [<i>i</i>]<i>RT</i><br>since <i>n</i><sub><i>i</i></sub>/<i>V</i> is exactly the molar concentration [<i>i</i>]. Substitute <i>p</i><sub><i>i</i></sub> = [<i>i</i>]<i>RT</i> into the <i>K</i><sub>p</sub> expression for <i>a</i>A + <i>b</i>B ⇌ <i>c</i>C + <i>d</i>D:<br><i>K</i><sub>p</sub> = ([C]<i>RT</i>)<sup><i>c</i></sup>([D]<i>RT</i>)<sup><i>d</i></sup>/(([A]<i>RT</i>)<sup><i>a</i></sup>([B]<i>RT</i>)<sup><i>b</i></sup>) = [C]<sup><i>c</i></sup>[D]<sup><i>d</i></sup>/([A]<sup><i>a</i></sup>[B]<sup><i>b</i></sup>) (= <i>K</i><sub>c</sub>) · (<i>RT</i>)<sup>(<i>c</i>+<i>d</i>)−(<i>a</i>+<i>b</i>)</sup>',
      },
      {
        t: 'p',
        html: 'The leftover power of <i>RT</i> is precisely Δ<i>n</i><sub>g</sub>, giving <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>Δ<i>n</i><sub>g</sub></sup>. <b>Why this matters physically:</b> the (<i>RT</i>)<sup>Δ<i>n</i><sub>g</sub></sup> factor is just the conversion cost of switching the “currency” from concentration to pressure; if the gas-mole count is unchanged across the arrow (Δ<i>n</i><sub>g</sub> = 0), there is no conversion cost and <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub> outright.',
      },
      {
        t: 'p',
        html: 'These follow directly from the <i>K</i><sub>c</sub> definition and are the engine of every Advanced combine-reaction problem.',
      },
      {
        t: 'proc',
        title: '3.2 The four manipulation rules (memorise as a toolkit)',
        steps: [
          '<b>Reverse the reaction</b> → invert the constant: <i>K</i><sub>rev</sub> = 1/<i>K</i>.',
          '<b>Multiply all coefficients by</b> <i>n</i> → raise to the power <i>n</i>: <i>K</i>′ = <i>K</i><sup><i>n</i></sup>.',
          '<b>Divide all coefficients by</b> <i>n</i> → take the <i>n</i><sup>th</sup> root: <i>K</i>′ = <i>K</i><sup>1/<i>n</i></sup>.',
          '<b>Add two reactions</b> → multiply their constants: <i>K</i> = <i>K</i><sub>1</sub> × <i>K</i><sub>2</sub>.',
        ],
      },
      {
        t: 'p',
        html: 'The reasoning: <i>K</i> is a ratio of concentration terms with stoichiometric exponents. Reversing swaps numerator and denominator (rule 1). Scaling every coefficient by <i>n</i> scales every exponent by <i>n</i>, i.e. raises the whole ratio to the power <i>n</i> (rules 2–3). Adding reactions multiplies their ratios, and any species common to both sides cancels (rule 4).',
      },
      {
        t: 'p',
        html: '<b>3.3 Heterogeneous equilibria — the “pure phase” rule</b><br>When more than one phase is present, the equilibrium is <b>heterogeneous</b>. The molar concentration (active mass) of a pure solid or pure liquid is fixed by its density and is independent of how much you have — so it is folded into the constant and <b>omitted</b> from the expression. For thermal decomposition of limestone:<br>CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g)   <i>K</i><sub>p</sub> = <i>p</i><sub>CO₂</sub><br>Both solids vanish from the expression; the constant depends only on the pressure of CO<sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>3.4 Judging the extent of a reaction from <i>K</i></b><br>The magnitude of <i>K</i> reads off how far a reaction goes:<br>• <i>K</i><sub>c</sub> > 10<sup>3</sup> → products dominate; reaction nearly complete.<br>• <i>K</i><sub>c</sub> < 10<sup>−3</sup> → reactants dominate; reaction barely proceeds.<br>• 10<sup>−3</sup> < <i>K</i><sub>c</sub> < 10<sup>3</sup> → appreciable amounts of both at equilibrium.',
      },
      {
        t: 'p',
        html: '<b>3.5 Predicting direction with <i>Q</i></b><br>Compute <i>Q</i> from the current concentrations and compare with <i>K</i>:<br>• <i>Q</i> < <i>K</i> → too few products → reaction runs <b>forward</b>.<br>• <i>Q</i> > <i>K</i> → too many products → reaction runs <b>backward</b>.<br>• <i>Q</i> = <i>K</i> → already at equilibrium; no net change.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A 2 L sealed vessel at equilibrium for N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g) contains 1.0 mol N<sub>2</sub>, 2.0 mol H<sub>2</sub> and 0.80 mol NH<sub>3</sub>. Find <i>K</i><sub>c</sub> with units.',
        steps: [
          'First convert moles to molar concentrations (divide by <i>V</i> = 2 L):<br>[N<sub>2</sub>] = 0.50 M,  [H<sub>2</sub>] = 1.0 M,  [NH<sub>3</sub>] = 0.40 M',
          'Substitute into the expression:<br><i>K</i><sub>c</sub> = [NH<sub>3</sub>]<sup>2</sup>/([N<sub>2</sub>][H<sub>2</sub>]<sup>3</sup>) = (0.40)<sup>2</sup>/((0.50)(1.0)<sup>3</sup>) = 0.16/0.50',
          'Here Δ<i>n</i><sub>g</sub> = 2 − (1 + 3) = −2, so the units are (mol L<sup>−1</sup>)<sup>−2</sup>.',
        ],
        ans: '<i>K</i><sub>c</sub> = 0.32 mol<sup>−2</sup> L<sup>2</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'At 717 K, <i>K</i><sub>c</sub> = 49 for H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g). Without a calculator, state <i>K</i><sub>p</sub>.',
        steps: [
          '<b>The trap.</b> A panicking student reaches for <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>Δ<i>n</i><sub>g</sub></sup> and starts multiplying 0.0821 × 717. <b>Stop and read Δ<i>n</i><sub>g</sub> first:</b> moles of gas are 2 on each side, so Δ<i>n</i><sub>g</sub> = 2 − 2 = 0. Then (<i>RT</i>)<sup>0</sup> = 1 and',
          '<b>Lesson:</b> every time a <i>K</i><sub>p</sub>–<i>K</i><sub>c</sub> question appears, glance at Δ<i>n</i><sub>g</sub> before touching the calculator. If Δ<i>n</i><sub>g</sub> = 0, the answer is already in front of you.',
        ],
        ans: '<i>K</i><sub>p</sub> = <i>K</i><sub>c</sub> = 49',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'PCl<sub>5</sub>(g) is taken in a closed vessel and dissociates: PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g). If the degree of dissociation is <i>α</i> at total equilibrium pressure <i>P</i>, derive <i>K</i><sub>p</sub> in terms of <i>α</i> and <i>P</i>, then evaluate it for <i>α</i> = 0.50 and <i>P</i> = 1.5 atm.',
        steps: [
          'Start with 1 mol PCl<sub>5</sub> (ICE in moles):<br>• Initial: PCl<sub>5</sub> 1, PCl<sub>3</sub> 0, Cl<sub>2</sub> 0<br>• Equilibrium: PCl<sub>5</sub> 1 − <i>α</i>, PCl<sub>3</sub> <i>α</i>, Cl<sub>2</sub> <i>α</i>',
          'Total moles = 1 + <i>α</i>. Partial pressure = mole fraction × <i>P</i>:<br><i>p</i><sub>PCl₅</sub> = ((1 − <i>α</i>)/(1 + <i>α</i>))<i>P</i>,  <i>p</i><sub>PCl₃</sub> = <i>p</i><sub>Cl₂</sub> = (<i>α</i>/(1 + <i>α</i>))<i>P</i>',
          '<i>K</i><sub>p</sub> = <i>p</i><sub>PCl₃</sub><i>p</i><sub>Cl₂</sub>/<i>p</i><sub>PCl₅</sub> = ((<i>α</i>/(1 + <i>α</i>))<i>P</i>)<sup>2</sup>/(((1 − <i>α</i>)/(1 + <i>α</i>))<i>P</i>) = <i>α</i><sup>2</sup><i>P</i>/((1 + <i>α</i>)(1 − <i>α</i>))',
          'Plug in <i>α</i> = 0.50, <i>P</i> = 1.5:<br><i>K</i><sub>p</sub> = (0.50)<sup>2</sup>(1.5)/(1 − (0.50)<sup>2</sup>) = 0.375/0.75 = 0.50 atm',
          '(This <i>α</i><sup>2</sup><i>P</i>/(1 − <i>α</i><sup>2</sup>) form is worth memorising — it recurs for every “single reactant → two gaseous products” dissociation.)',
        ],
        ans: '<i>K</i><sub>p</sub> = <i>α</i><sup>2</sup><i>P</i>/(1 − <i>α</i><sup>2</sup>)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Given, at temperature <i>T</i>:<br>(1)  C(s) + CO<sub>2</sub>(g) ⇌ 2CO(g),   <i>K</i><sub>1</sub> = 0.50<br>(2)  COCl<sub>2</sub>(g) ⇌ CO(g) + Cl<sub>2</sub>(g),   <i>K</i><sub>2</sub> = 0.10<br>Find <i>K</i> for C(s) + CO<sub>2</sub>(g) + 2Cl<sub>2</sub>(g) ⇌ 2COCl<sub>2</sub>(g).',
        steps: [
          '<b>Build the target by stacking the toolkit (Key procedures and derivations, 3.2).</b> We want 2COCl<sub>2</sub> as a product, so reaction (2) must be <b>reversed</b> and <b>used twice</b>:<br>• Reverse (2): CO(g) + Cl<sub>2</sub>(g) ⇌ COCl<sub>2</sub>(g), constant = 1/<i>K</i><sub>2</sub>.<br>• Use it twice (multiply coefficients by 2): 2CO(g) + 2Cl<sub>2</sub>(g) ⇌ 2COCl<sub>2</sub>(g), constant = (1/<i>K</i><sub>2</sub>)<sup>2</sup>.',
          'Now <b>add</b> this to reaction (1):<br>C(s) + CO<sub>2</sub> + 2CO + 2Cl<sub>2</sub> ⇌ 2CO + 2COCl<sub>2</sub>',
          'The 2CO cancels, so the sum is exactly the target reaction, and its constant is the product of the two. Therefore<br><i>K</i> = <i>K</i><sub>1</sub> × (1/<i>K</i><sub>2</sub>)<sup>2</sup> = <i>K</i><sub>1</sub>/<i>K</i><sub>2</sub><sup>2</sup> = 0.50/(0.10)<sup>2</sup> = 0.50/0.01',
          '<b>Note</b> C(s) is a pure solid and never enters any expression (Key procedures and derivations, 3.3). For the target, Δ<i>n</i><sub>g</sub> = 2 − (1 + 2) = −1, so if the constants are <i>K</i><sub>p</sub> values the answer carries units of atm<sup>−1</sup>.',
        ],
        ans: '<i>K</i> = 50',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the <i>K</i><sub>c</sub> and <i>K</i><sub>p</sub> expressions for 2NaHCO<sub>3</sub>(s) ⇌ Na<sub>2</sub>CO<sub>3</sub>(s) + H<sub>2</sub>O(g) + CO<sub>2</sub>(g), and state the <i>K</i><sub>p</sub>–<i>K</i><sub>c</sub> relation.',
            a: '<i>K</i><sub>c</sub> = [H<sub>2</sub>O][CO<sub>2</sub>], <i>K</i><sub>p</sub> = <i>p</i><sub>H₂O</sub> · <i>p</i><sub>CO₂</sub>, <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>2</sup>.',
          },
          {
            q: '[NEET] For N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g), <i>K</i><sub>c</sub> = 4.0 × 10<sup>−3</sup> mol L<sup>−1</sup> at 298 K. Find <i>K</i><sub>p</sub>.',
            a: '<i>K</i><sub>p</sub> ≈ 9.8 × 10<sup>−2</sup> atm.',
          },
          {
            q: '[JEE Main] 2.0 mol of a gas X is placed in a 1 L flask where it decomposes as X(g) ⇌ 2Y(g). At equilibrium 25% of X has decomposed. Calculate <i>K</i><sub>c</sub>.',
            a: '<i>K</i><sub>c</sub> ≈ 0.67 mol L<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] For A(g) + B(g) ⇌ C(g), <i>K</i><sub>c</sub> = 4.0. A mixture has [A] = [B] = [C] = 0.10 M. Predict the direction of net reaction.',
            a: '<i>Q</i><sub>c</sub> = 10 > <i>K</i><sub>c</sub> = 4.0 ⇒ reaction proceeds <b>backward</b> (toward reactants).',
          },
          {
            q: '[JEE Advanced] Given A ⇌ B, <i>K</i><sub>1</sub> = 2 and B ⇌ C, <i>K</i><sub>2</sub> = 3 (same <i>T</i>), find <i>K</i> for (i) A ⇌ C and (ii) 2A ⇌ 2C.',
            a: '(i) 6 (ii) 36.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'For N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g), the units of <i>K</i><sub>c</sub> are:',
        opts: [
          {
            label: 'mol L<sup>−1</sup>',
            nudge: '<b>(a)</b> is what Δ<i>n</i><sub>g</sub> = +1 would give; it ignores that the gas moles fall from 4 to 2.',
          },
          { label: 'mol<sup>−2</sup> L<sup>2</sup>', nudge: null },
          {
            label: 'dimensionless',
            nudge: '<b>(c)</b> is the reflex “<i>K</i> is always dimensionless” error — true only when Δ<i>n</i><sub>g</sub> = 0.',
          },
          {
            label: 'mol<sup>2</sup> L<sup>−2</sup>',
            nudge: '<b>(d)</b> is the right magnitude but <b>wrong sign</b> on the exponent: students forget that products minus reactants is negative here.',
          },
        ],
        correct: 1,
        solution: 'Δ<i>n</i><sub>g</sub> = 2 − 4 = −2, so units = (mol L<sup>−1</sup>)<sup>−2</sup> = mol<sup>−2</sup> L<sup>2</sup>.',
      },
      {
        t: 'mcq',
        q: 'Which one of the following changes the value of <i>K</i><sub>c</sub> for a reaction?',
        opts: [
          {
            label: 'Adding a catalyst',
            nudge: '<b>(a)</b> A catalyst speeds up forward and reverse equally — it changes how fast equilibrium is reached, never <i>K</i>.',
          },
          {
            label: 'Increasing the pressure',
            nudge: '<b>(b)</b>/<b>(d)</b> Pressure changes or inert-gas addition can shift the position of equilibrium (Le Chatelier), but the constant itself is untouched. Confusing “shift” with “change in <i>K</i>” is the single most common conceptual slip in this chapter.',
          },
          { label: 'Raising the temperature', nudge: null },
          {
            label: 'Adding an inert gas at constant volume',
            nudge: '<b>(d)</b> Inert gas at constant volume leaves every partial pressure unchanged — it does not even shift the position, let alone change <i>K</i>. Only temperature changes <i>K</i>.',
          },
        ],
        correct: 2,
        solution: '<i>K</i> is a function of temperature alone.',
      },
      {
        t: 'mcq',
        q: 'For 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g), <i>K</i><sub>c</sub> = 10. A vessel currently holds [SO<sub>2</sub>] = 0.10 M, [O<sub>2</sub>] = 0.10 M, [SO<sub>3</sub>] = 0.20 M. The reaction will:',
        opts: [
          {
            label: 'proceed forward',
            nudge: '<b>(a)</b> results from assuming “reactants present ⇒ goes forward” without computing <i>Q</i>.',
          },
          { label: 'proceed backward', nudge: null },
          { label: 'already be at equilibrium', nudge: '<b>(c)</b> assumes any stated mixture is at equilibrium.' },
          { label: 'cannot be decided', nudge: '<b>(d)</b> forgets that <i>Q</i> vs <i>K</i> always settles the direction.' },
        ],
        correct: 1,
        solution: '<i>Q</i><sub>c</sub> = [SO<sub>3</sub>]<sup>2</sup>/([SO<sub>2</sub>]<sup>2</sup>[O<sub>2</sub>]) = (0.20)<sup>2</sup>/((0.10)<sup>2</sup>(0.10)) = 0.04/0.001 = 40. Since <i>Q</i><sub>c</sub> = 40 > <i>K</i><sub>c</sub> = 10, there are too many products → reaction runs <b>backward</b>.',
      },
      {
        t: 'mcq',
        q: 'Assuming <i>RT</i> > 1, for which reaction is <i>K</i><sub>p</sub> < <i>K</i><sub>c</sub>?',
        opts: [
          {
            label: 'H<sub>2</sub> + I<sub>2</sub> ⇌ 2HI',
            nudge: '<b>(a)</b> and <b>(b)</b> have Δ<i>n</i><sub>g</sub> = 0 ⇒ <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>.',
          },
          {
            label: 'N<sub>2</sub> + O<sub>2</sub> ⇌ 2NO',
            nudge: '<b>(a)</b> and <b>(b)</b> have Δ<i>n</i><sub>g</sub> = 0 ⇒ <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>.',
          },
          { label: '2SO<sub>2</sub> + O<sub>2</sub> ⇌ 2SO<sub>3</sub>', nudge: null },
          {
            label: 'N<sub>2</sub>O<sub>4</sub> ⇌ 2NO<sub>2</sub>',
            nudge: '<b>(d)</b> has Δ<i>n</i><sub>g</sub> = +1 ⇒ <i>K</i><sub>p</sub> > <i>K</i><sub>c</sub> — the opposite, a classic sign trap.',
          },
        ],
        correct: 2,
        solution: '<i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>Δ<i>n</i><sub>g</sub></sup>; for <i>K</i><sub>p</sub> < <i>K</i><sub>c</sub> we need Δ<i>n</i><sub>g</sub> < 0. Reaction (c) has Δ<i>n</i><sub>g</sub> = 2 − 3 = −1 < 0. ✓',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Putting pure solids/liquids into the <i>K</i> expression.</b> In CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g), both solids drop out; <i>K</i><sub>p</sub> = <i>p</i><sub>CO₂</sub> only. Writing [CaO] or [CaCO<sub>3</sub>] is the most penalised error in Boards.',
          '<b>Believing pressure, concentration, inert gas, or a catalyst changes <i>K</i>.</b> Only <b>temperature</b> changes <i>K</i>. Pressure, concentration and inert gas can shift the position but leave the constant alone; a catalyst does neither.',
          '<b>Counting solids/liquids in Δ<i>n</i><sub>g</sub>.</b> Δ<i>n</i><sub>g</sub> uses <b>gaseous</b> moles only. In C(s) + CO<sub>2</sub>(g) ⇌ 2CO(g), Δ<i>n</i><sub>g</sub> = 2 − 1 = +1, not 2 − 2.',
          '<b>Flipping the <i>Q</i> vs <i>K</i> logic.</b> Anchor it once: <i>Q</i> too big (excess products) ⇒ go backward; <i>Q</i> too small ⇒ go forward.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before any <i>K</i><sub>p</sub>–<i>K</i><sub>c</sub> numeric, compute Δ<i>n</i><sub>g</sub> in your head. If Δ<i>n</i><sub>g</sub> = 0, write <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub> and move on — no <i>RT</i> arithmetic needed. For dissociation problems, recall the ready-made result <i>K</i><sub>p</sub> = <i>α</i><sup>2</sup><i>P</i>/(1 − <i>α</i><sup>2</sup>) rather than rebuilding the ICE table each time.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<i>K</i><sub>c</sub> = [C]<sup><i>c</i></sup>[D]<sup><i>d</i></sup>/([A]<sup><i>a</i></sup>[B]<sup><i>b</i></sup>)',
            note: 'equilibrium concentrations only; pure solids/liquids omitted.',
          },
          {
            f: '<i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>Δ<i>n</i><sub>g</sub></sup>, Δ<i>n</i><sub>g</sub> = (gaseous product moles) − (gaseous reactant moles). Δ<i>n</i><sub>g</sub> = 0 ⇒ <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>.',
            note: '',
          },
          {
            f: 'Units',
            note: '[<i>K</i><sub>c</sub>] = (mol L<sup>−1</sup>)<sup>Δ<i>n</i><sub>g</sub></sup>, [<i>K</i><sub>p</sub>] = (atm)<sup>Δ<i>n</i><sub>g</sub></sup>.',
          },
          {
            f: 'Toolkit',
            note: 'reverse → 1/<i>K</i>; ×<i>n</i> coefficients → <i>K</i><sup><i>n</i></sup>; ÷<i>n</i> → <i>K</i><sup>1/<i>n</i></sup>; add reactions → <i>K</i><sub>1</sub> × <i>K</i><sub>2</sub>.',
          },
          {
            f: 'Extent',
            note: '<i>K</i> > 10<sup>3</sup> → products win; <i>K</i> < 10<sup>−3</sup> → reactants win.',
          },
          {
            f: 'Direction',
            note: '<i>Q</i> < <i>K</i> → forward; <i>Q</i> > <i>K</i> → backward; <i>Q</i> = <i>K</i> → at equilibrium.',
          },
          {
            f: 'Only temperature changes <i>K</i>.',
            note: 'Catalyst, pressure, inert gas, and concentration do not.',
          },
        ],
        aids: [
          '“<b>R</b>everse <b>I</b>nverts, <b>M</b>ultiply <b>P</b>owers, <b>A</b>dd <b>M</b>ultiplies” for the four toolkit rules; and “<b>Q low, go; Q high, bye</b>” for direction.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 (book Sub-04) · pp. 260–264 ─────────────────────────
  {
    n: '02',
    title: 'Equilibrium Constant, Reaction Quotient & Gibbs Energy',
    kalam: 'This topic explains why equilibrium sits where it does.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The bridge between thermodynamics (Chapter 5) and equilibrium. CBSE Boards ask the Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> relation and a 2–3 mark numerical. JEE Main reliably sets one Δ<i>G</i>° ↔ <i>K</i> conversion; JEE Advanced fuses it with Hess’s law or the van’t Hoff temperature dependence. NEET asks the sign-reasoning version (is <i>K</i> greater or less than 1?). This topic explains why equilibrium sits where it does.',
      },
      {
        t: 'p',
        html: 'Topic 01 told you where a reaction stops (the value of <i>K</i>) and which way it moves (compare <i>Q</i> with <i>K</i>). This topic answers the deeper question: <b>why does it stop there at all?</b> The answer is the most important idea in chemical thermodynamics — a reaction runs in whatever direction lowers the system’s <b>Gibbs energy</b> <i>G</i>, and it halts when <i>G</i> can fall no further.',
      },
      {
        t: 'p',
        html: '<b>The valley analogy</b><br>Imagine the reaction mixture as a ball rolling on a curved landscape, where height represents Gibbs energy and horizontal position represents “how far the reaction has gone” (from all-reactants on the left to all-products on the right). The ball always rolls downhill. It does not stop at the far right (pure products) or far left (pure reactants) — it settles at the <b>lowest point of the valley</b>, which lies somewhere in between. That valley floor is equilibrium, and at the floor the ground is flat: the slope is zero, meaning Δ<i>G</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The position of the valley floor is fixed by the standard Gibbs energy change Δ<i>G</i>°. If Δ<i>G</i>° is large and negative, the valley sits far to the right — products dominate and <i>K</i> is huge. If Δ<i>G</i>° is large and positive, the valley sits to the left — reactants dominate and <i>K</i> is tiny. So Δ<i>G</i>° and <i>K</i> are two ways of saying the same thing.',
      },
      {
        t: 'p',
        html: '<b>Two different quantities — don’t confuse them</b><br>• Δ<i>G</i> (no degree sign) is the <b>slope of the landscape at the current composition</b>. Its sign tells you which way the ball will roll right now: Δ<i>G</i> < 0 → forward, Δ<i>G</i> > 0 → backward, Δ<i>G</i> = 0 → you’re at the bottom (equilibrium).<br>• Δ<i>G</i>° (with the degree sign) is a <b>fixed number for the reaction at a given temperature</b> — the Gibbs energy change when everything is in its standard state. It locates the valley and fixes <i>K</i>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions</b><br>• Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> uses <i>K</i> expressed in terms of <b>activities</b> (dimensionless), so always feed in the unitless <i>K</i>; never carry concentration units into the logarithm.<br>• The relation holds at the temperature for which Δ<i>G</i>° is quoted. Because Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>°, both Δ<i>G</i>° and <i>K</i> change with temperature — the quantitative basis for Le Chatelier’s temperature effect (Topic 03).<br>• It assumes ideal behaviour; real systems at high concentration need activity corrections.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'General Gibbs energy change at any composition',
        main: 'Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i>',
        legend: [
          'Δ<i>G</i> = the Gibbs energy change at the current composition',
          'Δ<i>G</i>° = the standard Gibbs energy change, in J mol<sup>−1</sup>',
          '<i>Q</i> = the reaction quotient (same form as <i>K</i>, evaluated at current conditions — see Topic 01)',
          '<i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>',
          '<i>T</i> = temperature, in kelvin',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'At equilibrium',
        main: 'Δ<i>G</i> = 0 and <i>Q</i> = <i>K</i>, so:<br>0 = Δ<i>G</i>° + <i>RT</i> ln <i>K</i> ⇒ Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> = −2.303 <i>RT</i> log <i>K</i>',
        legend: [
          '<i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>',
          '<i>T</i> = temperature, in kelvin',
          'Δ<i>G</i>° = the standard Gibbs energy change, in J mol<sup>−1</sup>',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Solving for <i>K</i>',
        main: '<i>K</i> = <i>e</i><sup>−Δ<i>G</i>°/(<i>RT</i>)</sup>',
        legend: [
          '<i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>',
          '<i>T</i> = temperature, in kelvin',
          'Δ<i>G</i>° = the standard Gibbs energy change, in J mol<sup>−1</sup>',
        ],
        note: null,
      },
      {
        t: 'table',
        title: 'Sign-and-magnitude map',
        head: ['ΔG°', 'ln K', 'K', 'Position of equilibrium'],
        rows: [
          ['< 0 (negative)', '> 0', '> 1', 'products favoured'],
          ['= 0', '0', '= 1', 'comparable amounts'],
          ['> 0 (positive)', '< 0', '< 1', 'reactants favoured'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Link to enthalpy and entropy',
        main: 'combining with Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>°:<br>ln <i>K</i> = −Δ<i>H</i>°/(<i>RT</i>) + Δ<i>S</i>°/<i>R</i>',
        legend: [
          'Δ<i>H</i>° = standard enthalpy change, in J mol<sup>−1</sup>',
          'Δ<i>S</i>° = standard entropy change, in J K<sup>−1</sup> mol<sup>−1</sup>',
          '<i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>',
          '<i>T</i> = temperature, in kelvin',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'van’t Hoff (two temperatures)',
        main: 'ln(<i>K</i><sub>2</sub>/<i>K</i><sub>1</sub>) = −(Δ<i>H</i>°/<i>R</i>)(1/<i>T</i><sub>2</sub> − 1/<i>T</i><sub>1</sub>)',
        legend: [
          '<i>K</i><sub>1</sub>, <i>K</i><sub>2</sub> = the equilibrium constants at <i>T</i><sub>1</sub>, <i>T</i><sub>2</sub>',
          '<i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>',
          '<i>T</i> = temperature, in kelvin',
          'Δ<i>H</i>° = standard enthalpy change, in J mol<sup>−1</sup>',
        ],
        note: 'Δ<i>G</i>° and Δ<i>H</i>° in J mol<sup>−1</sup>. <i>K</i>, <i>Q</i>, ln <i>K</i> are dimensionless.',
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>3.1 Deriving Δ<i>G</i>° = −<i>RT</i> ln <i>K</i></b><br>Begin with the master relation Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i>, which expresses how the actual Gibbs energy change depends on the standard value plus a correction for the current composition. As the reaction proceeds toward the valley floor, <i>Q</i> marches toward <i>K</i> and the slope Δ<i>G</i> flattens to zero. Imposing the equilibrium condition Δ<i>G</i> = 0, <i>Q</i> = <i>K</i>:<br>0 = Δ<i>G</i>° + <i>RT</i> ln <i>K</i> ⇒ Δ<i>G</i>° = −<i>RT</i> ln <i>K</i>',
      },
      {
        t: 'p',
        html: '<b>Why this is profound:</b> a single thermodynamic quantity (Δ<i>G</i>°), obtainable from tabulated Δ<i>H</i>° and Δ<i>S</i>° data, predicts the entire equilibrium composition, with no need to run the reaction. The logarithm is the reason <i>K</i> can span dozens of orders of magnitude while Δ<i>G</i>° stays a modest number of kJ mol<sup>−1</sup>.',
      },
      {
        t: 'proc',
        title: '3.2 Converting between ΔG° and K (procedure)',
        steps: [
          'Confirm units: Δ<i>G</i>° in J mol<sup>−1</sup> (convert from kJ!), <i>T</i> in kelvin, <i>R</i> = 8.314.',
          'To get <i>K</i>: compute −Δ<i>G</i>°/(<i>RT</i>), then exponentiate, <i>K</i> = <i>e</i><sup>−Δ<i>G</i>°/(<i>RT</i>)</sup>.',
          'To get Δ<i>G</i>°: compute ln <i>K</i> (or 2.303 log <i>K</i>), then Δ<i>G</i>° = −<i>RT</i> ln <i>K</i>.',
          'Sanity check the sign against the map in Key formulas and definitions — a negative Δ<i>G</i>° must give <i>K</i> > 1.',
        ],
      },
      {
        t: 'p',
        html: '<b>3.3 Why <i>Q</i> vs <i>K</i> and the sign of Δ<i>G</i> agree</b><br>Subtracting the two relations gives Δ<i>G</i> = <i>RT</i> ln(<i>Q</i>/<i>K</i>). If <i>Q</i> < <i>K</i>, the log is negative, Δ<i>G</i> < 0, reaction goes forward — exactly the direction rule from Topic 01, now with a thermodynamic reason behind it. The <i>Q</i>-versus-<i>K</i> test and the sign of Δ<i>G</i> are the same statement in two languages.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'For a reaction at 298 K, Δ<i>G</i>° = −11.4 kJ mol<sup>−1</sup>. Calculate the equilibrium constant <i>K</i>.',
        steps: [
          'Convert to joules: Δ<i>G</i>° = −11400 J mol<sup>−1</sup>.',
          'ln <i>K</i> = −Δ<i>G</i>°/(<i>RT</i>) = −(−11400)/(8.314 × 298) = 11400/2477.6 = 4.60',
          'The negative Δ<i>G</i>° gives <i>K</i> > 1 — products favoured, as the sign map promises.',
        ],
        ans: '<i>K</i> = <i>e</i><sup>4.60</sup> ≈ 100',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Without computing, rank these by increasing <i>K</i> at the same temperature: reaction P (Δ<i>G</i>° = +20 kJ mol<sup>−1</sup>), Q (Δ<i>G</i>° = 0), R (Δ<i>G</i>° = −20 kJ mol<sup>−1</sup>).',
        steps: [
          '<b>The trap.</b> Students start exponentiating three times. Don’t — the <b>sign alone</b> orders them. More negative Δ<i>G</i>° ⟹ larger <i>K</i>. So increasing <i>K</i>:',
          '<b>Speed cue:</b> Δ<i>G</i>° sign instantly places <i>K</i> relative to 1; only compute the number if the question demands it.',
        ],
        ans: 'P < Q < R, with <i>K</i><sub>P</sub> < 1, <i>K</i><sub>Q</sub> = 1, <i>K</i><sub>R</sub> > 1.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'The equilibrium constant of a reaction is <i>K</i> = 10 at 300 K. Calculate Δ<i>G</i>°.',
        steps: [
          'Use the base-10 form to exploit log 10 = 1:<br>Δ<i>G</i>° = −2.303 <i>RT</i> log <i>K</i> = −2.303 × 8.314 × 300 × log 10<br>= −2.303 × 8.314 × 300 × 1',
          'A modest negative value for a tenfold preference toward products — note how the logarithm compresses the scale.',
        ],
        ans: '−5744 J mol<sup>−1</sup> ≈ −5.74 kJ mol<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For a reaction, <i>K</i><sub>1</sub> = 1.0 × 10<sup>−4</sup> at 300 K and <i>K</i><sub>2</sub> = 1.0 × 10<sup>−3</sup> at 320 K. Determine Δ<i>H</i>°, and state whether the forward reaction is exothermic or endothermic.',
        steps: [
          '<i>K</i> rises with temperature, which already signals an <b>endothermic</b> forward reaction (heating helps it — a preview of Le Chatelier). Quantify with van’t Hoff:<br>ln(<i>K</i><sub>2</sub>/<i>K</i><sub>1</sub>) = −(Δ<i>H</i>°/<i>R</i>)(1/<i>T</i><sub>2</sub> − 1/<i>T</i><sub>1</sub>) = (Δ<i>H</i>°/<i>R</i>)(1/<i>T</i><sub>1</sub> − 1/<i>T</i><sub>2</sub>)',
          'ln(10<sup>−3</sup>/10<sup>−4</sup>) = ln 10 = 2.303;   1/300 − 1/320 = 20/96000 = 2.08 × 10<sup>−4</sup> K<sup>−1</sup>',
          'Δ<i>H</i>° = <i>R</i> ln(<i>K</i><sub>2</sub>/<i>K</i><sub>1</sub>)/(1/<i>T</i><sub>1</sub> − 1/<i>T</i><sub>2</sub>) = (8.314 × 2.303)/(2.08 × 10<sup>−4</sup>)',
          'The positive sign confirms the endothermic forward reaction, consistent with <i>K</i> increasing on heating.',
        ],
        ans: 'Δ<i>H</i>° ≈ +92 kJ mol<sup>−1</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the relation between Δ<i>G</i>° and <i>K</i>, and state the sign of Δ<i>G</i>° when <i>K</i> > 1.',
            a: 'Δ<i>G</i>° = −<i>RT</i> ln <i>K</i>; Δ<i>G</i>° < 0 when <i>K</i> > 1.',
          },
          { q: '[NEET] At 298 K, a reaction has <i>K</i> = 1. What is Δ<i>G</i>°?', a: 'Δ<i>G</i>° = 0.' },
          {
            q: '[JEE Main] For a reaction at 500 K, Δ<i>G</i>° = −19.15 kJ mol<sup>−1</sup>. Find <i>K</i>. (Take 2.303 <i>R</i> = 19.15 J mol<sup>−1</sup> K<sup>−1</sup>.)',
            a: 'log <i>K</i> = 19150/(19.15 × 500) = 2.0, so <i>K</i> = 100.',
          },
          {
            q: '[JEE Main] Two reactions have Δ<i>G</i>°<sub>1</sub> = −10 kJ mol<sup>−1</sup> and Δ<i>G</i>°<sub>2</sub> = −5 kJ mol<sup>−1</sup>. For the overall reaction (their sum, at the same temperature), find Δ<i>G</i>° and state how its <i>K</i> relates to <i>K</i><sub>1</sub> and <i>K</i><sub>2</sub>.',
            a: 'Δ<i>G</i>° = −15 kJ mol<sup>−1</sup>; <i>K</i> = <i>K</i><sub>1</sub> × <i>K</i><sub>2</sub> (Gibbs energies add, constants multiply).',
          },
          {
            q: '[JEE Advanced] <i>K</i> = 4.0 at 400 K and <i>K</i> = 16.0 at 500 K. Estimate Δ<i>H</i>°.',
            a: 'ln(16/4) = 1.386; (1/400 − 1/500) = 5.0 × 10<sup>−4</sup>; Δ<i>H</i>° ≈ +23 kJ mol<sup>−1</sup>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'If Δ<i>G</i>° for a reaction is zero, then:',
        opts: [
          { label: '<i>K</i> = 0', nudge: '<b>(a)</b> and <b>(c)</b> confuse “zero Gibbs energy” with zero/infinite extent.' },
          { label: '<i>K</i> = 1', nudge: null },
          { label: '<i>K</i> = ∞', nudge: '<b>(a)</b> and <b>(c)</b> confuse “zero Gibbs energy” with zero/infinite extent.' },
          { label: '<i>K</i> < 1', nudge: '<b>(d)</b> would require Δ<i>G</i>° > 0.' },
        ],
        correct: 1,
        solution: 'Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> = 0 ⇒ ln <i>K</i> = 0 ⇒ <i>K</i> = 1.',
      },
      {
        t: 'mcq',
        q: 'A reaction has a very large positive Δ<i>G</i>°. Its equilibrium constant is:',
        opts: [
          { label: 'very large', nudge: '<b>(a)</b> is the case for large negative Δ<i>G</i>°.' },
          { label: 'close to 1', nudge: '<b>(b)</b> needs Δ<i>G</i>° ≈ 0.' },
          { label: 'very small', nudge: null },
          {
            label: 'negative',
            nudge: '<b>(d)</b> is impossible — <i>K</i> is a ratio of positive quantities and can never be negative.',
          },
        ],
        correct: 2,
        solution: 'Large positive Δ<i>G</i>° ⇒ large negative ln <i>K</i> ⇒ <i>K</i> ≪ 1.',
      },
      {
        t: 'mcq',
        q: 'For Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i>, the reaction proceeds spontaneously in the forward direction when:',
        opts: [
          { label: '<i>Q</i> > <i>K</i>', nudge: '<b>(a)</b> gives Δ<i>G</i> > 0 → backward.' },
          { label: '<i>Q</i> = <i>K</i>', nudge: '<b>(b)</b> is equilibrium (Δ<i>G</i> = 0).' },
          { label: '<i>Q</i> < <i>K</i>', nudge: null },
          { label: 'Δ<i>G</i> > 0', nudge: '<b>(d)</b> is the non-spontaneous (backward) condition.' },
        ],
        correct: 2,
        solution: 'Δ<i>G</i> = <i>RT</i> ln(<i>Q</i>/<i>K</i>); for <i>Q</i> < <i>K</i>, Δ<i>G</i> < 0 → forward.',
      },
      {
        t: 'mcq',
        q: 'The equilibrium constant of a reaction increases when temperature is raised. The forward reaction is:',
        opts: [
          { label: 'exothermic', nudge: '<b>(a)</b> An exothermic reaction’s <i>K</i> decreases on heating.' },
          { label: 'endothermic', nudge: null },
          {
            label: 'athermal',
            nudge: '<b>(c)</b>/<b>(d)</b> An athermal (Δ<i>H</i>° = 0) reaction’s <i>K</i> would be temperature-independent; the trend given rules that out and determines the sign.',
          },
          {
            label: 'cannot be determined',
            nudge: '<b>(c)</b>/<b>(d)</b> An athermal (Δ<i>H</i>° = 0) reaction’s <i>K</i> would be temperature-independent; the trend given rules that out and determines the sign.',
          },
        ],
        correct: 1,
        solution: 'By van’t Hoff, <i>K</i> rising with <i>T</i> requires Δ<i>H</i>° > 0 — endothermic.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to convert kJ to J.</b> <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>, so Δ<i>G</i>° must be in joules before dividing. Mixing kJ with <i>R</i> in J makes ln <i>K</i> 1000 times too small.',
          '<b>Confusing Δ<i>G</i> with Δ<i>G</i>°.</b> Δ<i>G</i>° fixes <i>K</i>; Δ<i>G</i> (which depends on <i>Q</i>) fixes the current direction. Only Δ<i>G</i>° goes into −<i>RT</i> ln <i>K</i>.',
          '<b>Reporting a negative <i>K</i>.</b> <i>K</i> = <i>e</i><sup>−Δ<i>G</i>°/(<i>RT</i>)</sup> is always positive. A negative answer means an algebra/sign error.',
          '<b>Mixing ln and log.</b> Use Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> or −2.303 <i>RT</i> log <i>K</i> — never −<i>RT</i> log <i>K</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Read the sign of Δ<i>G</i>° first and place <i>K</i> relative to 1 before any arithmetic. For tidy numbers, use the base-10 form when <i>K</i> is a power of ten (so log <i>K</i> is an integer). For temperature problems, remember <i>K</i> up with <i>T</i> ⟹ endothermic; <i>K</i> down with <i>T</i> ⟹ exothermic.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Master relation', note: 'Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i>.' },
          {
            f: 'At equilibrium',
            note: 'Δ<i>G</i> = 0, <i>Q</i> = <i>K</i> ⟹ Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> = −2.303 <i>RT</i> log <i>K</i>.',
          },
          { f: 'Solve for <i>K</i>', note: '<i>K</i> = <i>e</i><sup>−Δ<i>G</i>°/(<i>RT</i>)</sup>.' },
          {
            f: 'Sign map',
            note: 'Δ<i>G</i>° < 0 ⇒ <i>K</i> > 1; Δ<i>G</i>° = 0 ⇒ <i>K</i> = 1; Δ<i>G</i>° > 0 ⇒ <i>K</i> < 1.',
          },
          {
            f: 'Direction',
            note: 'Δ<i>G</i> = <i>RT</i> ln(<i>Q</i>/<i>K</i>) — <i>Q</i> < <i>K</i> forward, <i>Q</i> > <i>K</i> backward.',
          },
          {
            f: 'Temperature',
            note: 'ln(<i>K</i><sub>2</sub>/<i>K</i><sub>1</sub>) = −(Δ<i>H</i>°/<i>R</i>)(1/<i>T</i><sub>2</sub> − 1/<i>T</i><sub>1</sub>); <i>K</i> rises with <i>T</i> ⟹ endothermic.',
          },
          { f: '<i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>; convert Δ<i>G</i>° to joules.', note: '' },
        ],
        aids: [
          '“<b>negative G, big K</b>” (spontaneous → products)',
          '“<b>hotter helps the endo</b>” (<i>K</i> up with <i>T</i> ⟹ endothermic).',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 (book Sub-05) · pp. 265–269 ─────────────────────────
  {
    n: '03',
    title: 'Le Chatelier’s Principle & Factors Affecting Equilibria',
    kalam: 'A system at equilibrium is balanced but responsive.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Among the most heavily tested ideas in the whole chapter. CBSE Boards ask 3–5 marks on predicting shifts and on the Haber/Contact process conditions. NEET plants the notorious “inert gas at constant volume vs constant pressure” trap almost every year. JEE Main/Advanced combine pressure, temperature, and the Δ<i>n</i><sub>g</sub> logic into multi-factor yield questions. Conceptual mastery here is nearly free marks.',
      },
      {
        t: 'p',
        html: 'A system at equilibrium is balanced but responsive. <b>Le Chatelier’s principle</b> states it crisply: if a system at equilibrium is subjected to a change in concentration, pressure, or temperature, the equilibrium shifts in the direction that tends to counteract (partially undo) that change. The system pushes back.',
      },
      {
        t: 'p',
        html: '<b>The marketplace analogy</b><br>Picture a vegetable mandi at price equilibrium. Flood the market with extra tomatoes (add a reactant) and the system responds by “consuming” them — prices drop, more get bought (shift forward). Pull tomatoes off the shelves (remove a product) and the system replaces them (shift forward again). Squeeze everyone into a smaller stall (raise the pressure) and the crowd rearranges to take up less room (shift toward fewer gas molecules). The equilibrium never prevents the disturbance — it just leans against it.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A shift changes the amounts of species, i.e. the position of equilibrium. It does <b>not</b> change the equilibrium constant <i>K</i> — with one single exception: <b>temperature</b>. Only heating or cooling actually rewrites the value of <i>K</i> (Topic 02). Concentration, pressure, volume, inert gas, and catalyst all leave <i>K</i> untouched; they merely move the system along the fixed <i>K</i> curve.',
      },
      {
        t: 'p',
        html: '<b>The five levers (preview)</b><br>Concentration, pressure, volume, inert gas (at constant pressure), and temperature shift the position; a catalyst does not shift it at all. The rest of this topic is just applying the “counteract the change” rule, lever by lever, ending with how industry exploits it in the Haber and Contact processes.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions</b><br>• Pressure and volume effects act <b>only through gaseous species</b>, and only matter when the number of gas moles differs across the arrow (Δ<i>n</i><sub>g</sub> ≠ 0).<br>• “Adding a reactant shifts forward” assumes the reactant is actually part of the equilibrium expression — adding a pure solid or pure liquid (constant activity, Topic 01) does nothing.<br>• A catalyst speeds the approach to equilibrium equally in both directions; it changes neither the position nor <i>K</i> nor the yield.',
      },

      { t: 'part', title: 'Key relationships and summary of effects' },
      {
        t: 'table',
        title: null,
        head: ['Disturbance', 'Equilibrium shifts…', 'Does K change?'],
        rows: [
          ['Add reactant (or remove product)', 'forward (→)', 'No'],
          ['Remove reactant (or add product)', 'backward (←)', 'No'],
          ['Increase pressure / decrease volume', 'toward the side with <b>fewer</b> gas moles', 'No'],
          ['Decrease pressure / increase volume', 'toward the side with <b>more</b> gas moles', 'No'],
          ['Inert gas at <b>constant volume</b>', 'no shift', 'No'],
          ['Inert gas at <b>constant pressure</b>', 'toward the side with <b>more</b> gas moles (no shift if Δ<i>n</i><sub>g</sub> = 0)', 'No'],
          ['Increase temperature', 'in the <b>endothermic</b> direction', '<b>Yes</b>'],
          ['Decrease temperature', 'in the <b>exothermic</b> direction', '<b>Yes</b>'],
          ['Add catalyst', 'no shift (reaches equilibrium faster)', 'No'],
        ],
      },
      {
        t: 'p',
        html: '<b>Pressure rule precisely:</b> for <i>a</i>A(g) ⇌ <i>b</i>B(g) with Δ<i>n</i><sub>g</sub> = <i>b</i> − <i>a</i>, raising pressure favours the side with the smaller mole count; if Δ<i>n</i><sub>g</sub> = 0, pressure has <b>no effect</b> on the position.',
      },
      {
        t: 'p',
        html: '<b>Temperature and <i>K</i></b> (from Topic 02): heating an endothermic reaction increases <i>K</i>; heating an exothermic reaction decreases <i>K</i>.',
      },

      { t: 'part', title: 'Key procedures — lever by lever, and industrial applications' },
      {
        t: 'p',
        html: '<b>3.1 Concentration</b><br>Add more of any species and the system consumes part of it; remove a species and the system replenishes it. Continuously removing a product is the chemist’s trick to drive a reversible reaction “to completion” without ever violating equilibrium — each removal nudges <i>Q</i> below <i>K</i>, so the forward reaction restarts.',
      },
      {
        t: 'p',
        html: '<b>3.2 Pressure and volume</b><br>Compressing a gaseous equilibrium (raising pressure) crowds the molecules; the system relieves the crowding by shifting toward whichever side has fewer gas molecules. Expanding does the reverse. For N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub> (4 mol gas → 2 mol gas), high pressure pushes forward toward ammonia. For H<sub>2</sub> + I<sub>2</sub> ⇌ 2HI (Δ<i>n</i><sub>g</sub> = 0), pressure does nothing.',
      },
      {
        t: 'p',
        html: '<b>3.3 The inert-gas subtlety</b><br>• <b>At constant volume:</b> adding an inert gas raises the total pressure but leaves each reacting gas’s <b>partial pressure and concentration unchanged</b>. <i>Q</i> is unchanged, so <b>no shift</b>.<br>• <b>At constant pressure:</b> to keep total pressure fixed, the volume must expand; that dilutes every reacting gas, lowering their partial pressures. The system responds exactly as it would to a pressure decrease — shifting toward the side with <b>more</b> gas moles.<br>This single distinction is the most common exam trap in the chapter.',
      },
      {
        t: 'p',
        html: '<b>3.4 Temperature</b><br>Treat heat as a participant. For an <b>exothermic</b> reaction, write “reactants ⇌ products + heat”; adding heat (raising <i>T</i>) shifts it backward, lowering yield and lowering <i>K</i>. For an <b>endothermic</b> reaction, heat is a “reactant,” so raising <i>T</i> shifts it forward, raising <i>K</i>. Temperature is the only lever that changes <i>K</i> itself.',
      },
      {
        t: 'p',
        html: '<b>3.5 Catalyst</b><br>A catalyst lowers the activation energy of forward and reverse reactions equally. It lets equilibrium arrive faster but moves neither its position nor its constant — a catalyst cannot improve the equilibrium yield, only the speed of reaching it.',
      },
      {
        t: 'p',
        html: '<b>3.6 Industrial application: the Haber process</b><br>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g),   Δ<i>H</i> = −92.4 kJ mol<sup>−1</sup><br>The reaction is exothermic and reduces gas moles (4 → 2). Le Chatelier says ammonia yield is favoured by <b>high pressure</b> and <b>low temperature</b>. In practice:<br>• <b>Pressure ∼200 atm</b> — high, to push the 4-mol side toward the 2-mol side.<br>• <b>Temperature ∼700 K</b> — a compromise: low temperature maximises equilibrium yield (exothermic), but makes the reaction unworkably slow, so a moderate temperature is chosen to get a usable rate.<br>• <b>Catalyst</b> — finely divided iron with K<sub>2</sub>O/Al<sub>2</sub>O<sub>3</sub> promoters, to reach equilibrium quickly at that compromise temperature.<br>• <b>Continuous removal of NH<sub>3</sub></b> (by liquefaction) keeps <i>Q</i> < <i>K</i> and drives the forward reaction.',
      },
      {
        t: 'p',
        html: '<b>3.7 Industrial application: the Contact process</b><br>2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g),   Δ<i>H</i> = −197 kJ mol<sup>−1</sup><br>Again exothermic with fewer product gas moles (3 → 2). Favoured by high pressure and low temperature, run at a moderate temperature (∼720 K) with a V<sub>2</sub>O<sub>5</sub> catalyst and excess air (O<sub>2</sub>) to push SO<sub>3</sub> formation. Pressure near 1–2 atm already gives high conversion, so extreme pressure is not economically necessary.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'For N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g), Δ<i>H</i> < 0, predict the direction of shift on: (i) increasing pressure, (ii) adding N<sub>2</sub>, (iii) raising temperature.',
        steps: [
          '<b>(i)</b> Increasing pressure shifts toward fewer gas moles — the product side (2 mol < 4 mol): <b>forward</b>.',
          '<b>(ii)</b> Adding N<sub>2</sub> raises a reactant; system consumes it: <b>forward</b>.',
          '<b>(iii)</b> Raising <i>T</i> on an exothermic reaction shifts in the endothermic (reverse) direction, and <i>K</i> decreases: <b>backward</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'An inert gas (argon) is added to the equilibrium PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g). Predict the shift if added (a) at constant volume, (b) at constant pressure.',
        steps: [
          '<b>The trap.</b> Students reflexively say “more gas → adding gas shifts it.” Wrong on both counts.',
          '<b>(a) At constant volume</b>, partial pressures of PCl<sub>5</sub>, PCl<sub>3</sub>, Cl<sub>2</sub> are unchanged ⟹ <b>no shift</b>.',
          '<b>(b) At constant pressure</b>, the system must expand to fit the argon, diluting the reacting gases; the equilibrium shifts toward <b>more</b> gas moles — the <b>product side (forward)</b>, increasing dissociation.',
          '<b>Speed cue:</b> inert gas at constant <i>V</i> = nothing; at constant <i>P</i> = behaves like dilution.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g) (Δ<i>H</i> < 0), a student wants to maximise the equilibrium yield of SO<sub>3</sub>. Evaluate each proposed change: (i) high pressure, (ii) high temperature, (iii) adding a catalyst, (iv) excess O<sub>2</sub>.',
        steps: [
          '<b>(i)</b> High pressure → fewer gas moles favoured (3 → 2): <b>increases yield</b>. ✓',
          '<b>(ii)</b> High temperature → exothermic reaction shifts backward, <i>K</i> falls: <b>decreases yield</b>. ✗ (used only to gain rate)',
          '<b>(iii)</b> Catalyst → faster equilibrium but <b>no change in yield</b>. ✗ for yield',
          '<b>(iv)</b> Excess O<sub>2</sub> → adds a reactant, shifts forward: <b>increases yield</b>. ✓ So genuine yield boosters are (i) and (iv); (ii) and (iii) only help kinetics.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For the dissociation PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g), the degree of dissociation <i>α</i> at total pressure <i>P</i> satisfies <i>K</i><sub>p</sub> = <i>α</i><sup>2</sup><i>P</i>/(1 − <i>α</i><sup>2</sup>) (from Topic 01). Use this to show quantitatively that increasing <i>P</i> at constant <i>T</i> decreases <i>α</i>, consistent with Le Chatelier.',
        steps: [
          '<i>K</i><sub>p</sub> depends only on temperature, so at fixed <i>T</i> it is a constant. Rearranging,<br><i>α</i><sup>2</sup>/(1 − <i>α</i><sup>2</sup>) = <i>K</i><sub>p</sub>/<i>P</i>  ⇒  <i>α</i><sup>2</sup> = <i>K</i><sub>p</sub>/(<i>P</i> + <i>K</i><sub>p</sub>)  ⇒  <i>α</i> = √(<i>K</i><sub>p</sub>/(<i>P</i> + <i>K</i><sub>p</sub>))',
          'As <i>P</i> increases with <i>K</i><sub>p</sub> held constant, the denominator <i>P</i> + <i>K</i><sub>p</sub> grows, so <i>α</i> <b>decreases</b>. The algebra confirms the qualitative prediction: compressing the system suppresses dissociation, shifting toward the side with fewer gas moles (PCl<sub>5</sub>). Le Chatelier and the equilibrium expression tell one consistent story.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State Le Chatelier’s principle and name the only factor that changes the value of <i>K</i>.',
            a: '(Statement as in Concept intuition); only <b>temperature</b> changes <i>K</i>.',
          },
          {
            q: '[NEET] For H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g), what is the effect of increasing pressure on the equilibrium position?',
            a: 'No effect (Δ<i>n</i><sub>g</sub> = 0).',
          },
          {
            q: '[JEE Main] For CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g) (Δ<i>H</i> > 0), predict the effect of (i) increasing temperature and (ii) removing CO<sub>2</sub>.',
            a: '(i) shifts forward (endothermic, more decomposition); (ii) shifts forward (product removed).',
          },
          {
            q: '[JEE Main] In the Haber process, list the conditions chosen for pressure, temperature, and catalyst, and justify the temperature being a “compromise.”',
            a: '∼200 atm, ∼700 K, Fe catalyst; low <i>T</i> favours yield but is too slow, so a moderate <i>T</i> balances yield against rate.',
          },
          {
            q: '[JEE Advanced] For N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g), an inert gas is added at constant pressure. State and justify the direction of shift.',
            a: 'Shifts <b>forward</b> (toward more gas moles, 1 → 2): constant-pressure inert-gas addition dilutes the reacting gases, equivalent to a pressure decrease.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Adding an inert gas at <b>constant volume</b> to a gaseous equilibrium:',
        opts: [
          {
            label: 'shifts it forward',
            nudge: '<b>(a)</b>/<b>(b)</b> confuse total pressure with the partial pressures that actually drive the equilibrium.',
          },
          {
            label: 'shifts it backward',
            nudge: '<b>(a)</b>/<b>(b)</b> confuse total pressure with the partial pressures that actually drive the equilibrium.',
          },
          { label: 'causes no shift', nudge: null },
          { label: 'always increases <i>K</i>', nudge: '<b>(d)</b> only temperature changes <i>K</i>.' },
        ],
        correct: 2,
        solution: 'Partial pressures and concentrations of the reacting gases are unchanged, so <i>Q</i> is unchanged.',
      },
      {
        t: 'mcq',
        q: 'For an exothermic reaction at equilibrium, increasing the temperature will:',
        opts: [
          { label: 'increase <i>K</i> and yield', nudge: '<b>(a)</b> describes an endothermic reaction.' },
          { label: 'decrease <i>K</i> and yield', nudge: null },
          { label: 'not change <i>K</i>', nudge: '<b>(c)</b> is the catalyst/pressure case, not temperature.' },
          { label: 'increase yield only', nudge: '<b>(d)</b> ignores that a position shift here lowers, not raises, yield.' },
        ],
        correct: 1,
        solution: 'Heat shifts an exothermic reaction backward and lowers <i>K</i>.',
      },
      {
        t: 'mcq',
        q: 'Pressure change has <b>no effect</b> on the position of which equilibrium?',
        opts: [
          {
            label: 'N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>',
            nudge: '<b>(a)</b> Δ<i>n</i><sub>g</sub> = −2, <b>(b)</b> Δ<i>n</i><sub>g</sub> = −1, <b>(d)</b> Δ<i>n</i><sub>g</sub> = +1 — all respond to pressure.',
          },
          {
            label: '2SO<sub>2</sub> + O<sub>2</sub> ⇌ 2SO<sub>3</sub>',
            nudge: '<b>(a)</b> Δ<i>n</i><sub>g</sub> = −2, <b>(b)</b> Δ<i>n</i><sub>g</sub> = −1, <b>(d)</b> Δ<i>n</i><sub>g</sub> = +1 — all respond to pressure.',
          },
          { label: 'H<sub>2</sub> + I<sub>2</sub> ⇌ 2HI', nudge: null },
          {
            label: 'PCl<sub>5</sub> ⇌ PCl<sub>3</sub> + Cl<sub>2</sub>',
            nudge: '<b>(a)</b> Δ<i>n</i><sub>g</sub> = −2, <b>(b)</b> Δ<i>n</i><sub>g</sub> = −1, <b>(d)</b> Δ<i>n</i><sub>g</sub> = +1 — all respond to pressure.',
          },
        ],
        correct: 2,
        solution: 'Δ<i>n</i><sub>g</sub> = 2 − 2 = 0, so pressure cannot shift it.',
      },
      {
        t: 'mcq',
        q: 'A catalyst added to a reaction at equilibrium:',
        opts: [
          {
            label: 'increases the yield of products',
            nudge: '<b>(a)</b>/<b>(b)</b>/<b>(c)</b> each wrongly credit a catalyst with thermodynamic power it does not have.',
          },
          {
            label: 'shifts equilibrium forward',
            nudge: '<b>(a)</b>/<b>(b)</b>/<b>(c)</b> each wrongly credit a catalyst with thermodynamic power it does not have.',
          },
          {
            label: 'increases <i>K</i>',
            nudge: '<b>(a)</b>/<b>(b)</b>/<b>(c)</b> each wrongly credit a catalyst with thermodynamic power it does not have.',
          },
          { label: 'only speeds up attainment of equilibrium', nudge: null },
        ],
        correct: 3,
        solution: 'A catalyst accelerates forward and reverse equally — position, yield, and <i>K</i> are all unchanged.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>The inert-gas trap.</b> Constant volume → no shift (partial pressures unchanged). Constant pressure → shifts toward more gas moles if Δ<i>n</i><sub>g</sub> ≠ 0 (acts like dilution). Always check which is held fixed.',
          '<b>Thinking a catalyst raises yield or <i>K</i>.</b> It changes only the rate of reaching equilibrium, never the position or constant.',
          '<b>Applying a pressure shift when Δ<i>n</i><sub>g</sub> = 0.</b> Reactions like H<sub>2</sub> + I<sub>2</sub> ⇌ 2HI are pressure-insensitive in position.',
          '<b>Saying <i>K</i> is unchanged by temperature.</b> Temperature is the one factor that does change <i>K</i> — increasing it raises <i>K</i> for endothermic and lowers <i>K</i> for exothermic reactions.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Write heat explicitly as a product (exothermic) or reactant (endothermic), then treat temperature changes like any concentration change. For pressure, glance at Δ<i>n</i><sub>g</sub> first — if it’s zero, skip the question. For “maximise yield” problems, separate the genuine yield levers (pressure, concentration, temperature) from the rate-only lever (catalyst).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Le Chatelier', note: 'a disturbed equilibrium shifts to counteract the change.' },
          { f: 'Concentration', note: 'add reactant / remove product → forward; and vice versa.' },
          { f: 'Pressure ↑ (volume ↓)', note: 'shift toward fewer gas moles; no effect if Δ<i>n</i><sub>g</sub> = 0.' },
          { f: 'Inert gas', note: 'constant <i>V</i> → no shift; constant <i>P</i> → toward more gas moles (if Δ<i>n</i><sub>g</sub> ≠ 0).' },
          {
            f: 'Temperature ↑',
            note: 'shift in the endothermic direction; <b>only temperature changes</b> <i>K</i> (up for endo, down for exo).',
          },
          { f: 'Catalyst', note: 'faster equilibrium, no shift, no change in <i>K</i> or yield.' },
          {
            f: 'Haber (N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>, exo)',
            note: '∼200 atm, ∼700 K (compromise), Fe catalyst, remove NH<sub>3</sub>.',
          },
          {
            f: 'Contact (2SO<sub>2</sub> + O<sub>2</sub> ⇌ 2SO<sub>3</sub>, exo)',
            note: 'moderate <i>P</i>, ∼720 K, V<sub>2</sub>O<sub>5</sub>, excess air.',
          },
        ],
        aids: [
          '“<b>system fights the change</b>”',
          '“<b>fewer moles win under pressure</b>”',
          '“<b>only heat moves K</b>”',
          '“<b>catalyst = speed, not yield</b>”.',
        ],
      },
    ],
  },
];
