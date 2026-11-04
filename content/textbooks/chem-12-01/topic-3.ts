import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topic 03 · Solubility & Henry’s Law: pp. 19–27 of the Class 12
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8.
 * Figure 1.2 (the Henry’s law plot, drawn p. 24) sits after the inverse-relation
 * paragraph it shows; Figure 1.1 (the sealed cylinders, drawn p. 22) after the
 * equilibrium argument for pressure. Both are redrawn in
 * lib/diagrams/chemistry-12-01.ts; these pages draw nothing else. Label subscripts
 * are upright (<i>K</i><sub>H</sub>, though the book slants the H), and dimension
 * symbols upright. A formula inside a subscript uses Unicode digits
 * (<i>n</i><sub>CO₂</sub>) because a nested <sub> is flattened. The book’s
 * "subtopic" is "topic" here, and its "Section 2" the part of that name.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 19–27 ─────────────────────────
  {
    n: '03',
    title: 'Solubility & Henry’s Law',
    kalam: 'Solubility is not a fixed personality trait of a substance; it is a relationship between solute, solvent, and the conditions.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. CBSE Boards lift 1–2 mark definitions or a short Henry’s-law numerical from here almost every year. NEET loves the inverse <i>K</i><sub>H</sub>–solubility trap and the “aquatic species in cold water” reasoning. JEE Main poses 1–2 clean numericals linking Henry’s law to mole fraction or mass; JEE Advanced occasionally fuses it with Dalton’s law for gas mixtures or probes the limitations of the law.',
      },
      {
        t: 'p',
        html: 'Imagine you are at a crowded Mumbai local railway platform during rush hour. People (the gas molecules) keep pushing into a packed compartment (the liquid solvent), and an equal number keep spilling out at every stop. When the rate of people entering exactly matches the rate of people leaving, the crowd inside the compartment stops changing — even though individuals are constantly swapping in and out. That steady, busy balance is exactly what chemists call <b>dynamic equilibrium</b>, and it is the heart of dissolving.',
      },
      {
        t: 'p',
        html: '<b>Solubility</b> is simply the answer to the question: how much of a substance can you cram into a fixed amount of solvent before the compartment is “full” — that is, before it becomes a <b>saturated solution</b>? A saturated solution is one in dynamic equilibrium with undissolved solute, holding the maximum amount it can at that temperature and pressure. Add a little less, and it is <b>unsaturated</b> (there is still room). The concentration of solute in a saturated solution is its solubility.',
      },
      {
        t: 'p',
        html: 'Solubility is not a fixed personality trait of a substance; it is a relationship between solute, solvent, and the conditions. The first rule of thumb every Indian kitchen already knows: <b>“like dissolves like.”</b> Sugar (polar) vanishes into water (polar); ghee (non-polar) does not. Salt dissolves in water but sulphur prefers carbon disulphide. Match the intermolecular forces, and dissolution happens.',
      },
      {
        t: 'p',
        html: 'But two dials really control the show: <b>temperature</b> and <b>pressure</b> — and crucially, they act differently on solids than on gases.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture two very different guests at a Diwali gathering. A solid solute (say sugar) is a relaxed guest — heat the room (raise temperature) and, for most solids whose dissolving absorbs heat, more of them happily mingle in. Squeeze the room (raise pressure) and the sugar shrugs: solids and liquids are nearly incompressible, so pressure barely touches their solubility. Now picture a gas solute — a flighty guest who would rather escape out the window. Heat the room and it bolts (gas solubility falls with temperature). But crowd the doorway with more of the same gas at high pressure, and you physically force more of it back inside (gas solubility rises sharply with pressure). That single asymmetry — pressure matters enormously for gases but not for solids, while temperature usually helps solids dissolve but hurts gases — is the most examined idea in this entire topic.',
      },
      {
        t: 'p',
        html: 'The pressure–solubility story for gases was pinned down quantitatively by <b>William Henry</b>: at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of that gas above the liquid. Double the pressure of CO<sub>2</sub> over a cold drink and you roughly double how much dissolves. Release the pressure (open the bottle) and the gas rushes back out — the familiar fizz.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Henry’s law is an ideal-dilute law, and like all such laws it has fine print:<br>• The <b>pressure must not be too high</b> and the <b>temperature must not be too low</b> — push either extreme and the simple proportionality bends.<br>• The gas <b>must not chemically react with, dissociate in, or associate within the solvent.</b> This is why ammonia and HCl dissolve far more in water than Henry’s law predicts — they react (NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup>), so the “free dissolved gas” picture breaks. Oxygen in blood is another famous violator: haemoglobin chemically binds it, so its uptake hugely exceeds the physical-solubility estimate.<br>• It applies to the dissolved gas as molecules in equilibrium — a genuinely dynamic, reversible equilibrium that must obey <b>Le Chatelier’s principle</b>, the engine behind every temperature and pressure trend below.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Henry’s law (mole-fraction form)',
        html: 'the partial pressure of a gas in the vapour phase is proportional to its mole fraction in solution.',
      },
      {
        t: 'formula',
        kicker: 'Henry’s law (mole-fraction form)',
        main: '<i>p</i> = <i>K</i><sub>H</sub> <i>x</i>',
        legend: [
          '<i>p</i> = partial pressure of the gas above the solution (SI unit: Pa; commonly bar or atm)',
          '<i>x</i> = mole fraction of the gas dissolved in the liquid (dimensionless; this is the measure of solubility)',
          '<i>K</i><sub>H</sub> = Henry’s law constant (units of pressure)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Since <i>x</i> is dimensionless, <i>K</i><sub>H</sub> carries the <b>units of pressure</b> (Pa, bar, kbar).',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Henry’s constant', '<i>K</i><sub>H</sub>', 'Pa', '[M L<sup>−1</sup> T<sup>−2</sup>]'],
          ['Partial pressure', '<i>p</i>', 'Pa', '[M L<sup>−1</sup> T<sup>−2</sup>]'],
          ['Mole fraction (solubility)', '<i>x</i>', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>The single most important inference:</b> rearranging, <i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>. So at a given pressure, <b>the larger the <i>K</i><sub>H</sub>, the smaller the solubility.</b> <i>K</i><sub>H</sub> and solubility are inversely related. A gas with a huge <i>K</i><sub>H</sub> is a poor dissolver.',
      },
      { t: 'fig', id: 'c12-01-fig-1.2' },
      {
        t: 'p',
        html: '<b>Temperature behaviour of <i>K</i><sub>H</sub>:</b> <i>K</i><sub>H</sub> increases with temperature, which is just another way of stating that gas solubility decreases as the liquid warms.',
      },
      {
        t: 'def',
        term: 'Solubility of a solid (definition)',
        html: 'the maximum mass of solid that dissolves in a specified amount of solvent at a specified temperature, governed by the dissolution equilibrium<br>Solute + Solvent ⇌ Solution',
      },
      {
        t: 'p',
        html: '<b>Pressure–solubility ratio for a gas (constant <i>T</i>):</b> because solubility ∝ pressure, if solubility is <i>s</i><sub>1</sub> at pressure <i>p</i><sub>1</sub> and <i>s</i><sub>2</sub> at pressure <i>p</i><sub>2</sub>,',
      },
      {
        t: 'formula',
        kicker: 'Pressure–solubility ratio for a gas (constant <i>T</i>)',
        main: '<i>s</i><sub>1</sub>/<i>s</i><sub>2</sub> = <i>p</i><sub>1</sub>/<i>p</i><sub>2</sub>',
        legend: [
          '<i>s</i><sub>1</sub> = solubility at pressure <i>p</i><sub>1</sub>',
          '<i>s</i><sub>2</sub> = solubility at pressure <i>p</i><sub>2</sub>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'a handy shortcut that avoids recomputing <i>K</i><sub>H</sub>.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'Henry’s law is an empirical law, not something derived from Newtonian first principles — so this section lays out the <b>physical logic</b> that makes each trend inevitable, plus a clean calculation procedure.',
      },
      {
        t: 'proc',
        title: 'Why pressure raises gas solubility (the equilibrium argument)',
        steps: [
          'Place a gas over a liquid in a closed vessel. At equilibrium, the rate of gas molecules entering the liquid equals the rate leaving it — a dynamic equilibrium.',
          'Now compress the gas into a smaller volume. This increases the number of gas molecules per unit volume above the surface, which increases the rate at which they strike and enter the liquid.',
          'The “entering” rate now exceeds the “leaving” rate, so net dissolution occurs until a new equilibrium is reached at the higher pressure — with more gas dissolved. Hence solubility rises with pressure, and the proportionality <i>p</i> ∝ <i>x</i> captures it.',
        ],
      },
      { t: 'fig', id: 'c12-01-fig-1.1' },
      {
        t: 'proc',
        title: 'Why temperature lowers gas solubility (Le Chatelier)',
        steps: [
          'Dissolving a gas is like a mini-condensation: the gas molecules settle into the liquid phase and release heat. Dissolution of a gas is therefore typically <b>exothermic</b>.',
          'Write it as Gas + Liquid ⇌ Solution + heat.',
          'By Le Chatelier’s principle, adding heat (raising <i>T</i>) shifts equilibrium backward, expelling dissolved gas. So gas solubility falls as temperature rises — which is why warm soda goes flat and why fish are more comfortable in cold water (cold water holds more dissolved O<sub>2</sub>).',
        ],
      },
      {
        t: 'proc',
        title: 'Why temperature usually raises solid solubility — but pressure does not',
        steps: [
          'For a solid whose dissolution is <b>endothermic</b> (Δ<sub>sol</sub><i>H</i> > 0), Le Chatelier says adding heat shifts equilibrium forward: solubility increases with temperature. If dissolution is <b>exothermic</b> (Δ<sub>sol</sub><i>H</i> < 0), solubility decreases with temperature.',
          'Three real salts make the rule concrete. <b>Sodium nitrate</b> (NaNO<sub>3</sub>) dissolves endothermically, so its solubility climbs steeply as water is heated. <b>Sodium chloride</b> (NaCl) has a near-zero dissolution enthalpy, so its solubility is almost flat across temperature — which is why common salt behaves much the same in hot or cold water. <b>Sodium sulphate</b> (Na<sub>2</sub>SO<sub>4</sub>) is the famous trickster: its solubility rises up to about 32.4 °C and then falls beyond it, because below that transition temperature the solid in equilibrium is the hydrate Na<sub>2</sub>SO<sub>4</sub>·10H<sub>2</sub>O (endothermic dissolution), whereas above it the anhydrous salt takes over (exothermic). The sign of Δ<sub>sol</sub><i>H</i> — not a universal rule — decides the direction.',
          'Pressure has essentially no effect on solids dissolved in liquids, because solids and liquids are nearly incompressible — squeezing them changes almost nothing.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why the identities of gas and solvent matter too.</b> Temperature and pressure are not the whole story — chemistry sets the baseline. Gases that are <b>easily liquefied</b> (such as CO<sub>2</sub> and NH<sub>3</sub>) dissolve far more readily than “permanent” gases like H<sub>2</sub> or He, because they bring stronger intermolecular attractions to the table. Gases that <b>react with the solvent</b> dissolve well beyond the Henry’s-law estimate (HCl and NH<sub>3</sub> in water). And a point examiners love: dissolved <b>electrolytes lower gas solubility</b> — the <b>salting-out effect</b>. A gas is less soluble in salt water than in pure water, because the ions strongly bind water molecules (hydration), leaving fewer free water molecules to surround the gas; even a non-electrolyte like sugar depresses gas solubility somewhat. It is one reason organisms in highly saline water work with tighter dissolved-oxygen budgets.',
      },
      {
        t: 'proc',
        title: 'Standard Henry’s-law calculation procedure',
        steps: [
          'Identify the gas’s partial pressure <i>p</i> above the solution and its <i>K</i><sub>H</sub> at the stated temperature. Keep pressure <b>units consistent</b> with <i>K</i><sub>H</sub>.',
          'Compute the dissolved mole fraction: <i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>.',
          'If a quantity is needed (moles, mass, molality), convert <i>x</i> using <i>x</i> ≈ <i>n</i><sub>gas</sub>/<i>n</i><sub>solvent</sub> for dilute solutions (since <i>n</i><sub>gas</sub> ≪ <i>n</i><sub>solvent</sub>), then <i>n</i><sub>gas</sub> = <i>x</i> · <i>n</i><sub>solvent</sub>.',
          'Convert moles to the requested unit (mass = moles × molar mass; or volume at STP via the ideal-gas relation).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'At 293 K, the partial pressure of pure oxygen maintained over water in a sealed vessel is 0.80 bar. If Henry’s law constant for O<sub>2</sub> in water at this temperature is <i>K</i><sub>H</sub> = 35 kbar, calculate the mole fraction of oxygen dissolved in the water.',
        steps: [
          '<b>Given:</b> <i>p</i> = 0.80 bar, <i>K</i><sub>H</sub> = 35 kbar = 35 000 bar.',
          'By Henry’s law, <i>p</i> = <i>K</i><sub>H</sub> <i>x</i>, so<br><i>x</i> = <i>p</i>/<i>K</i><sub>H</sub> = (0.80 bar)/(35 000 bar)',
          'Notice how a large <i>K</i><sub>H</sub> forces a tiny <i>x</i> — oxygen is only sparingly soluble.',
        ],
        ans: '<b>The dissolved mole fraction of oxygen is 2.3 × 10<sup>−5</sup></b> (dimensionless, as solubility-as-mole-fraction should be).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'At 298 K, the Henry’s law constants (in kbar) for four gases in water are: gas P = 0.40, gas Q = 1.7, gas R = 40, gas S = 145. Arrange them in order of <b>increasing solubility</b> in water.',
        steps: [
          '<b>Speed approach.</b> Do <b>not</b> compute anything. The trap is to read big <i>K</i><sub>H</sub> as “more soluble.” Remember the inverse rule: <i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>, so <b>larger <i>K</i><sub>H</sub> ⇒ smaller solubility.</b> Increasing solubility therefore means decreasing <i>K</i><sub>H</sub>.',
          '<b>Mental-elimination tip:</b> any option that places the highest-<i>K</i><sub>H</sub> gas as “most soluble” is instantly wrong — eliminate it on sight.',
          'Order of decreasing <i>K</i><sub>H</sub>: S (145) > R (40) > Q (1.7) > P (0.40). So increasing solubility is the reverse:',
        ],
        ans: 'S < R < Q < P',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A carbonated drink is bottled so that the partial pressure of CO<sub>2</sub> above the liquid is 4.0 bar at 298 K. Given <i>K</i><sub>H</sub>(CO<sub>2</sub>) = 1.6 × 10<sup>3</sup> bar at 298 K, estimate the mass of CO<sub>2</sub> dissolved in 500 mL of the drink (treat it as water, density 1.0 g mL<sup>−1</sup>). (Molar masses: H<sub>2</sub>O = 18, CO<sub>2</sub> = 44 g mol<sup>−1</sup>.)',
        steps: [
          'This links Henry’s law with mole-fraction-to-mass conversion — two ideas in one.',
          '<b>Step 1 — mole fraction of dissolved CO<sub>2</sub>:</b><br><i>x</i> = <i>p</i>/<i>K</i><sub>H</sub> = 4.0/(1.6 × 10<sup>3</sup>) = 2.5 × 10<sup>−3</sup>',
          '<b>Step 2 — moles of water in 500 mL:</b><br><i>n</i><sub>water</sub> = (500 g)/(18 g mol<sup>−1</sup>) = 27.78 mol',
          '<b>Step 3 —</b> for a dilute solution <i>x</i> ≈ <i>n</i><sub>CO₂</sub>/<i>n</i><sub>water</sub>, so<br><i>n</i><sub>CO₂</sub> = <i>x</i> · <i>n</i><sub>water</sub> = (2.5 × 10<sup>−3</sup>)(27.78) = 6.94 × 10<sup>−2</sup> mol',
          '<b>Step 4 — mass:</b><br><i>m</i><sub>CO₂</sub> = 6.94 × 10<sup>−2</sup> mol × 44 g mol<sup>−1</sup> ≈ 3.06 g',
          'When the cap is removed, <i>p</i><sub>CO₂</sub> above the liquid drops to its atmospheric trace value, <i>x</i> collapses accordingly, and most of this gas escapes as fizz.',
        ],
        ans: '<b>About 3.1 g of CO<sub>2</sub> is dissolved.</b>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Dry air above water in a sealed tank exerts a total pressure of 5.0 bar at 293 K. Air is 79% N<sub>2</sub> and 21% O<sub>2</sub> by mole. Given <i>K</i><sub>H</sub>(N<sub>2</sub>) = 76 kbar and <i>K</i><sub>H</sub>(O<sub>2</sub>) = 35 kbar at 293 K, find the <b>ratio</b> of dissolved moles <i>n</i><sub>N₂</sub> ∶ <i>n</i><sub>O₂</sub> in the water. Compare it with the N<sub>2</sub> ∶ O<sub>2</sub> ratio in the air, and comment.',
        steps: [
          'The key insight: Henry’s law applies to <b>each gas independently using its own partial pressure</b> (a consequence pairing Henry’s law with Dalton’s law of partial pressures).',
          '<b>Step 1 — partial pressures (Dalton):</b><br><i>p</i><sub>N₂</sub> = 0.79 × 5.0 = 3.95 bar,   <i>p</i><sub>O₂</sub> = 0.21 × 5.0 = 1.05 bar',
          '<b>Step 2 — dissolved mole fractions (same solvent, so the mole-fraction ratio equals the dissolved-mole ratio):</b><br><i>x</i><sub>N₂</sub> = 3.95/76 000 = 5.20 × 10<sup>−5</sup>,   <i>x</i><sub>O₂</sub> = 1.05/35 000 = 3.00 × 10<sup>−5</sup>',
          '<b>Step 3 — dissolved ratio:</b><br><i>n</i><sub>N₂</sub>/<i>n</i><sub>O₂</sub> = <i>x</i><sub>N₂</sub>/<i>x</i><sub>O₂</sub> = (5.20 × 10<sup>−5</sup>)/(3.00 × 10<sup>−5</sup>) ≈ 1.73',
          '<b>Step 4 — comparison.</b> In the air the ratio is 79 ∶ 21 ≈ 3.76 (3.8 to two significant figures). In the dissolved phase it has fallen to ≈ 1.73 (1.7 to two significant figures).',
          '<b>Comment:</b> although nitrogen dominates the air almost four-to-one, the water is comparatively enriched in oxygen because O<sub>2</sub> has the smaller <i>K</i><sub>H</sub> (higher solubility). So about 37% of the dissolved gas is O<sub>2</sub> (3.00/8.20), against 21% in the air, which helps aquatic life even though the atmosphere is mostly nitrogen.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define solubility of a gas in a liquid. State Henry’s law and write its mathematical form, identifying each symbol.',
            a: 'The solubility of a gas in a liquid is the amount of gas dissolved in a given amount of liquid when the solution is saturated, at a stated temperature and pressure. Henry’s law: at constant temperature, the partial pressure of a gas is proportional to its mole fraction in solution, <i>p</i> = <i>K</i><sub>H</sub> <i>x</i>, where <i>p</i> is the gas’s partial pressure above the solution, <i>x</i> its mole fraction in the liquid, and <i>K</i><sub>H</sub> Henry’s law constant (units of pressure).',
          },
          {
            q: '[NEET] A sealed bottle of soda water is taken from a refrigerator and left on a warm kitchen counter for an hour, then opened. State, with reason, whether more or less gas escapes compared with opening it straight from the fridge.',
            a: 'More gas escapes; warming lowers CO<sub>2</sub> solubility, so more comes out of solution.',
          },
          {
            q: '[JEE Main] At 300 K, <i>K</i><sub>H</sub> for methane in water is 4.1 × 10<sup>4</sup> bar. Find the mole fraction of methane dissolved when the partial pressure of methane above the water is 2.05 bar.',
            a: '<i>x</i> = 5.0 × 10<sup>−5</sup>.',
          },
          {
            q: '[JEE Main] The solubility of a gas in water is 1.5 × 10<sup>−3</sup> mol L<sup>−1</sup> at 2.0 bar. Using the pressure–solubility ratio, find its solubility at 5.0 bar (same temperature).',
            a: '3.75 × 10<sup>−3</sup> mol L<sup>−1</sup> (3.8 × 10<sup>−3</sup> mol L<sup>−1</sup> to two significant figures).',
          },
          {
            q: '[JEE Advanced] Ammonia is found to be enormously more soluble in water than its <i>K</i><sub>H</sub> would predict. Explain why, and state which assumption of Henry’s law is violated.',
            a: 'NH<sub>3</sub> reacts with water forming NH<sub>4</sub><sup>+</sup> and OH<sup>−</sup>; the “no chemical reaction with solvent” assumption fails, so the simple proportionality underestimates solubility.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'At a fixed temperature, which statement about Henry’s law constant <i>K</i><sub>H</sub> is correct?',
        opts: [
          {
            label: 'Larger <i>K</i><sub>H</sub> means greater solubility of the gas',
            nudge: '<b>(a)</b> inverts the relationship — the single most common error here.',
          },
          { label: 'Larger <i>K</i><sub>H</sub> means lower solubility of the gas', nudge: null },
          {
            label: '<i>K</i><sub>H</sub> is the same for all gases in a given solvent',
            nudge: '<b>(c)</b> is false: <i>K</i><sub>H</sub> depends on the nature of the gas, so different gases have different values.',
          },
          {
            label: '<i>K</i><sub>H</sub> is dimensionless',
            nudge: '<b>(d)</b> is false: since <i>x</i> is dimensionless, <i>K</i><sub>H</sub> carries the units of pressure.',
          },
        ],
        correct: 1,
        solution: 'From <i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>, a larger <i>K</i><sub>H</sub> gives a smaller dissolved mole fraction, i.e. lower solubility.',
      },
      {
        t: 'mcq',
        q: 'A student claims that the solubility of both oxygen gas and solid potassium nitrate in water increases when the water is heated. The claim is:',
        opts: [
          {
            label: 'Correct for both',
            nudge: '<b>(a)</b> carries the classic confusion that gases behave like solids on heating.',
          },
          {
            label: 'Correct for O<sub>2</sub> only',
            nudge: '<b>(b)</b> swaps the two trends: heating lowers O<sub>2</sub> solubility and raises KNO<sub>3</sub> solubility.',
          },
          { label: 'Correct for KNO<sub>3</sub> only', nudge: null },
          {
            label: 'Incorrect for both',
            nudge: '<b>(d)</b> wrongly denies the standard endothermic-solid trend.',
          },
        ],
        correct: 2,
        solution: 'Dissolving most solids like KNO<sub>3</sub> is endothermic, so heating shifts the equilibrium forward and solubility rises. But gas dissolution is exothermic, so heating expels O<sub>2</sub> — its solubility falls.',
      },
      {
        t: 'mcq',
        q: 'Increasing the external pressure will most significantly increase the solubility of:',
        opts: [
          {
            label: 'Sugar in water',
            nudge: '<b>(a)</b> misapplies gas behaviour to a solid.',
          },
          {
            label: 'Sodium chloride in water',
            nudge: '<b>(b)</b> misapplies gas behaviour to a solid.',
          },
          { label: 'Carbon dioxide in water', nudge: null },
          {
            label: 'All three equally',
            nudge: '<b>(d)</b> ignores the gas-versus-solid asymmetry that this whole topic is built on.',
          },
        ],
        correct: 2,
        solution: 'Pressure strongly affects gases (Henry’s law) but barely touches solids, which are nearly incompressible.',
      },
      {
        t: 'mcq',
        q: 'Which of the following gases would deviate most from Henry’s law in water?',
        opts: [
          {
            label: 'Helium',
            nudge: '<b>(a)</b> is an inert, non-reacting gas that obeys the law well under ordinary conditions; picking it suggests confusing simple physical solubility with chemical reaction.',
          },
          {
            label: 'Nitrogen',
            nudge: '<b>(b)</b> is an inert, non-reacting gas that obeys the law well under ordinary conditions; picking it suggests confusing simple physical solubility with chemical reaction.',
          },
          { label: 'Hydrogen chloride', nudge: null },
          {
            label: 'Argon',
            nudge: '<b>(d)</b> is an inert, non-reacting gas that obeys the law well under ordinary conditions; picking it suggests confusing simple physical solubility with chemical reaction.',
          },
        ],
        correct: 2,
        solution: 'HCl reacts with water (ionises into H<sup>+</sup> and Cl<sup>−</sup>), violating the “no reaction with solvent” assumption, so its real solubility far exceeds the law’s prediction.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Inverting the <i>K</i><sub>H</sub>–solubility relationship.</b> Students routinely read “high <i>K</i><sub>H</sub>” as “high solubility.” It is the opposite: <i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>, so high <i>K</i><sub>H</sub> = stubborn, low-solubility gas.',
          '<b>Applying the solid temperature-trend to gases.</b> “Heating dissolves more” is true for most solids but false for gases. Anchor it with: warm soda goes flat.',
          '<b>Unit mismatch.</b> <i>K</i><sub>H</sub> is often quoted in kbar while pressure is given in bar or atm — convert before dividing, or the answer is off by 10<sup>3</sup>. Always confirm <i>p</i> and <i>K</i><sub>H</sub> share the same pressure unit.',
          '<b>Treating mole fraction as a molarity.</b> <i>x</i> is a mole fraction, not a molarity. To reach moles or mass you must multiply by moles of solvent and use molar masses.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> for “compare/order solubility” questions, never plug numbers — just rank <i>K</i><sub>H</sub> and flip the order. For “find new solubility at new pressure,” skip <i>K</i><sub>H</sub> entirely and use the ratio <i>s</i><sub>1</sub>/<i>s</i><sub>2</sub> = <i>p</i><sub>1</sub>/<i>p</i><sub>2</sub>. Both save 30–40 seconds in NEET/JEE Main.',
      },
      {
        t: 'protip',
        html: '<b>Sanity check:</b> dissolved gas mole fractions are tiny (typically 10<sup>−5</sup> to 10<sup>−3</sup>). If your <i>x</i> comes out near 1, you have almost certainly divided by the wrong quantity or mismatched units.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Henry’s law', note: '<i>p</i> = <i>K</i><sub>H</sub> <i>x</i> → solubility (mole fraction) <i>x</i> = <i>p</i>/<i>K</i><sub>H</sub>.' },
          { f: 'Inverse rule', note: 'larger <i>K</i><sub>H</sub> → <b>lower</b> solubility.' },
          { f: '<i>K</i><sub>H</sub> units', note: 'pressure (Pa / bar / kbar); dimensional formula [M L<sup>−1</sup> T<sup>−2</sup>].' },
          {
            f: 'Temperature',
            note: '<i>K</i><sub>H</sub> ↑ with <i>T</i> → <b>gas</b> solubility ↓ with <i>T</i> (exothermic; Le Chatelier). Most solids: solubility ↑ with <i>T</i> (endothermic).',
          },
          { f: 'Pressure', note: 'strong effect on <b>gases</b>, negligible on <b>solids/liquids</b> (incompressible).' },
          { f: 'Pressure ratio (gas, const <i>T</i>)', note: '<i>s</i><sub>1</sub>/<i>s</i><sub>2</sub> = <i>p</i><sub>1</sub>/<i>p</i><sub>2</sub>.' },
          {
            f: 'Law fails when',
            note: 'pressure too high, temperature too low, or gas <b>reacts/dissociates/associates</b> with solvent (NH<sub>3</sub>, HCl, O<sub>2</sub> in blood).',
          },
          {
            f: 'Nature matters',
            note: 'easily-liquefied gases (CO<sub>2</sub>, NH<sub>3</sub>) are more soluble than H<sub>2</sub>/He; reacting gases dissolve more.',
          },
          {
            f: 'Salting-out',
            note: 'dissolved electrolytes (and sugar) lower gas solubility — gas is less soluble in salt water than pure water.',
          },
          {
            f: 'Solid trend is enthalpy-driven',
            note: 'NaNO<sub>3</sub> ↑, NaCl ~flat, Na<sub>2</sub>SO<sub>4</sub> ↑ then ↓ above 32.4 °C.',
          },
          { f: 'Like dissolves like', note: 'match polarity / intermolecular forces for solid–liquid solubility.' },
        ],
        aids: ['“<b>H</b>igh <b>K</b> → gas wants to e<b>K</b>scape.”'],
      },
    ],
  },
];
