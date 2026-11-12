import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topic 02, Conductance of Electrolytic Solutions: pp. 68–75 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1
 * to 8. The options of each MCQ, which run on in one block in the book (errata),
 * are written as proper options.
 *
 * Figure 2.2 (caption p. 74, drawn on the figures page p. 75, never cited in
 * the text) sits after 3C, where the text extrapolates the strong electrolyte's
 * line to c = 0 and sends the weak electrolyte to Kohlrausch; it is redrawn in
 * lib/diagrams/chemistry-12-02.ts.
 *
 * Notation: Λ and ° upright, label subscript upright (Λ<sub>m</sub>,
 * Λ°<sub>m</sub>; the book sets the m italic and in places flat, errata); κ, λ, ν,
 * ρ, α, R, G, G*, l, A, c, S italic; <i>K</i><sub>a</sub>, <i>K</i><sub>sp</sub>.
 * Dimension symbols upright (the book sets them italic). Stacked fractions on
 * one line, with their brackets.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 68–75 ─────────────────────────
  {
    n: '02',
    title: 'Conductance of Electrolytic Solutions',
    kalam: 'To measure “how well a solution conducts,” we borrow the language of resistors.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield, almost purely numerical topic. CBSE Boards reliably ask a <b>2–3 mark calculation</b> (<i>κ</i> from resistance, or Λ<sub>m</sub>). NEET leans on the <b>conceptual direction</b> of how <i>κ</i> and Λ<sub>m</sub> change with dilution. JEE Main/Advanced fold in <b>Kohlrausch’s law</b> to extract Λ°<sub>m</sub> and the dissociation constant of a weak acid — 1–2 questions, and a favourite trap on <b>unit conversion</b>.',
      },
      {
        t: 'p',
        html: 'You already know metals conduct electricity. But notice how a metal conducts: the copper atoms stay put while a sea of free electrons drifts through them. Nothing material is carried from one end of the wire to the other — only electrons shuffle along. This is <b>metallic (electronic) conduction</b>.',
      },
      {
        t: 'p',
        html: 'Now dissolve some common salt in water and dip in two electrodes. Current flows again — but the mechanism is completely different. There are no free electrons here. Instead, the dissolved Na<sup>+</sup> and Cl<sup>−</sup> <b>ions themselves migrate</b>: cations crawl toward the cathode, anions toward the anode, physically ferrying charge across the solution. This is <b>electrolytic (ionic) conduction</b>, and it is what this whole topic is about.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the crowd flow at New Delhi railway station during a festival rush. In the metallic case, the platform (atoms) is fixed and only a thin stream of porters (electrons) runs through. In the electrolytic case, it is the entire crowd of passengers (ions) that surges toward the exits. Two consequences follow immediately. First, anything that helps ions move — more ions, faster ions, a less viscous medium, higher temperature — raises the conductance. (Note the reversal from metals: warming a metal makes its lattice vibrate and obstruct electrons, lowering conductance, whereas warming a solution loosens the crowd and raises it.) Second, conduction here is inseparable from chemistry: ions are consumed and released at the electrodes.',
      },
      {
        t: 'p',
        html: 'To measure “how well a solution conducts,” we borrow the language of resistors. A column of solution has a <b>resistance</b> <i>R</i>, and its reciprocal is the <b>conductance</b> <i>G</i>. But <i>R</i> depends on the shape of the column — a fat, short column conducts better than a thin, long one — so we factor the geometry out to get an intrinsic material property, the <b>conductivity</b> <i>κ</i> (kappa), also called specific conductance. Think of <i>κ</i> as “conductance per unit cube of solution.”',
      },
      {
        t: 'p',
        html: 'There is one more subtlety that trips up almost everyone, so meet it now. If you take a strong-salt solution and keep diluting it, the <b>conductivity</b> <i>κ</i> <b>falls</b> — obvious, because you are thinning out the ion crowd, fewer charge-carriers per cubic centimetre. Yet the <b>molar conductivity</b> Λ<sub>m</sub> <b>rises</b>. Why the opposite directions? Because Λ<sub>m</sub> deliberately asks a fairer question: “if I take exactly one mole of the electrolyte, however much water it needs, how well does that fixed amount conduct?” On dilution, that one mole’s ions spread into a larger volume and interact less with each other, so each ion moves more freely — molar conductivity climbs. Holding the amount fixed instead of the volume fixed is the entire trick.',
      },
      {
        t: 'p',
        html: 'One last piece of intuition explains a lot of exam questions: <b>not all ions move equally fast.</b> A proton H<sup>+</sup> and a hydroxide OH<sup>−</sup> conduct far better than their size suggests — they barely move bodily at all. Instead a proton “relays” down a chain of hydrogen-bonded water molecules, like a message whispered along a row of people without anyone changing seats. Ordinary ions such as Na<sup>+</sup> or Cl<sup>−</sup> must shoulder their way through the water themselves, dragging a shell of stuck-on water molecules; smaller-looking ions are sometimes slower because they hold a bigger hydration shell. This is why an acid like HCl out-conducts KCl, which out-conducts CH<sub>3</sub>COONa, at the same concentration — the cation/anion identities, not just their count, set the molar conductivity.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (i) The clean linear law Λ<sub>m</sub> = Λ°<sub>m</sub> − <i>A</i>√<i>c</i> holds only for <b>strong electrolytes</b> at <b>low concentration</b>; weak electrolytes curve sharply and cannot be extrapolated this way. (ii) <b>Kohlrausch’s law</b> of independent ion migration is strictly valid at <b>infinite dilution</b>, where ions are so far apart they ignore each other. (iii) Treating <i>α</i> = Λ<sub>m</sub>/Λ°<sub>m</sub> as the degree of dissociation is meaningful for <b>weak</b> electrolytes — applying it to a strong electrolyte (which is ~fully dissociated already) is a category error.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Resistance and conductance',
        main: '<i>R</i> = <i>ρ</i> <i>l</i>/<i>A</i><br><i>G</i> = 1/<i>R</i>',
        legend: [
          '<i>R</i> = resistance (Ω)',
          '<i>ρ</i> = resistivity (Ω m)',
          '<i>l</i> = distance between electrodes (m)',
          '<i>A</i> = electrode area (m<sup>2</sup>)',
          '<i>G</i> = conductance, unit <b>siemens</b> (S = Ω<sup>−1</sup>, old name mho)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conductivity (specific conductance)',
        main: '<i>κ</i> = 1/<i>ρ</i> = <i>G</i> · <i>l</i>/<i>A</i> = <i>G</i> × <i>G</i>*',
        legend: [
          '<i>κ</i> = conductivity, SI unit S m<sup>−1</sup> (practical S cm<sup>−1</sup>). Dimensional formula: [M<sup>−1</sup>L<sup>−3</sup>T<sup>3</sup>A<sup>2</sup>].',
          '<i>ρ</i> = resistivity',
          '<i>G</i> = conductance',
          '<i>l</i> = distance between electrodes',
          '<i>A</i> = electrode area',
          '<i>G</i>* = the <b>cell constant</b>, <i>l</i>/<i>A</i>, unit m<sup>−1</sup> (or cm<sup>−1</sup>). It is a fixed property of the conductivity cell, found by calibrating with a standard KCl solution of known <i>κ</i>.',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Molar conductivity',
        main: 'Λ<sub>m</sub> = <i>κ</i>/<i>c</i><br>Practical: with <i>κ</i> in S cm<sup>−1</sup> and concentration as molarity (mol L<sup>−1</sup>):<br>Λ<sub>m</sub> (S cm<sup>2</sup> mol<sup>−1</sup>) = (<i>κ</i> (S cm<sup>−1</sup>) × 1000)/(molarity (mol L<sup>−1</sup>))<br>Conversion: 1 S cm<sup>2</sup> mol<sup>−1</sup> = 10<sup>−4</sup> S m<sup>2</sup> mol<sup>−1</sup>',
        legend: [
          'Λ<sub>m</sub> = molar conductivity',
          '<i>κ</i> = conductivity',
          '<i>c</i> = concentration',
          '<b>SI:</b> <i>c</i> in mol m<sup>−3</sup>, then Λ<sub>m</sub> in S m<sup>2</sup> mol<sup>−1</sup>',
        ],
        note: 'The factor 1000 is just 1 L = 1000 cm<sup>3</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Variation with concentration (strong electrolyte, Debye–Hückel–Onsager form)',
        main: 'Λ<sub>m</sub> = Λ°<sub>m</sub> − <i>A</i>√<i>c</i>',
        legend: [
          'Λ<sub>m</sub> = molar conductivity at concentration <i>c</i>',
          'Λ°<sub>m</sub> = <b>limiting molar conductivity</b> (value as <i>c</i> → 0)',
          '<i>A</i> = a constant (not the electrode area) depending on solvent, temperature and electrolyte type',
          '<i>c</i> = concentration',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Kohlrausch’s law of independent migration of ions',
        main: 'Λ°<sub>m</sub> = <i>ν</i><sub>+</sub> <i>λ</i>°<sub>+</sub> + <i>ν</i><sub>−</sub> <i>λ</i>°<sub>−</sub>',
        legend: [
          'Λ°<sub>m</sub> = limiting molar conductivity',
          '<i>λ</i>°<sub>+</sub>, <i>λ</i>°<sub>−</sub> = limiting molar ionic conductivities of cation and anion',
          '<i>ν</i><sub>+</sub>, <i>ν</i><sub>−</sub> = number of each ion per formula unit',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Degree of dissociation and dissociation constant (weak electrolyte)',
        main: '<i>α</i> = Λ<sub>m</sub>/Λ°<sub>m</sub><br><i>K</i><sub>a</sub> = <i>c</i> <i>α</i><sup>2</sup>/(1 − <i>α</i>)',
        legend: [
          '<i>α</i> = degree of dissociation (dimensionless, 0 ≤ <i>α</i> ≤ 1)',
          'Λ<sub>m</sub> = molar conductivity at concentration <i>c</i>',
          'Λ°<sub>m</sub> = limiting molar conductivity',
          '<i>K</i><sub>a</sub> = dissociation constant',
          '<i>c</i> = molar concentration',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Solubility of a sparingly soluble salt (a Kohlrausch application).</b> A saturated solution of, say, AgCl is so dilute that it is effectively at infinite dilution, so Λ<sub>m</sub> ≈ Λ°<sub>m</sub>. Rearranging Λ°<sub>m</sub> = (<i>κ</i> × 1000)/solubility:',
      },
      {
        t: 'formula',
        kicker: 'Solubility of a sparingly soluble salt',
        main: 'Solubility <i>S</i> (mol L<sup>−1</sup>) = (<i>κ</i> × 1000)/(Λ°<sub>m</sub>)<br><i>K</i><sub>sp</sub> = <i>S</i><sup>2</sup> (for a 1:1 salt)',
        legend: [
          '<i>S</i> = solubility',
          '<i>κ</i> = the conductivity of the salt alone (subtract the water’s conductivity)',
          'Λ°<sub>m</sub> = limiting molar conductivity of the salt, from Kohlrausch’s law',
          '<i>K</i><sub>sp</sub> = solubility product',
        ],
        note: null,
      },

      { t: 'part', title: 'Key derivations and procedures' },
      {
        t: 'p',
        html: '<b>3A. Why <i>κ</i> = <i>G</i> × (cell constant)</b><br>Start from the geometry of resistance, <i>R</i> = <i>ρ</i> <i>l</i>/<i>A</i>. <b>Reasoning:</b> a longer ionic path (<i>l</i> ↑) resists more; a wider channel (<i>A</i> ↑) resists less — the same logic as a metal wire. Take reciprocals:<br>1/<i>R</i> = (1/<i>ρ</i>) · (<i>A</i>/<i>l</i>) ⇒ <i>G</i> = <i>κ</i> · <i>A</i>/<i>l</i> ⇒ <i>κ</i> = <i>G</i> · <i>l</i>/<i>A</i> = <i>G</i> × <i>G</i>*<br>The lumped geometric factor <i>l</i>/<i>A</i> is the cell constant. We never measure <i>l</i> and <i>A</i> directly — they are awkward for a real cell with fringing fields — so we run a solution of known <i>κ</i> (standard KCl) through the cell, measure <i>G</i>, and back out <i>G</i>* = <i>κ</i><sub>KCl</sub>/<i>G</i><sub>KCl</sub>. Thereafter the same cell gives any unknown <i>κ</i> from a single resistance reading.',
      },
      {
        t: 'p',
        html: '<b>3B. Why Λ<sub>m</sub> = <i>κ</i>/<i>c</i>, and the unit-conversion logic</b><br><i>κ</i> is conductance per unit volume — but different solutions pack different amounts of electrolyte into that volume, so <i>κ</i> alone is an unfair comparison. To compare electrolytes head-to-head, normalise to <b>one mole</b>. Imagine a slab of solution holding exactly 1 mole of electrolyte between two large parallel plates 1 unit apart; its conductance is Λ<sub>m</sub>.',
      },
      {
        t: 'p',
        html: 'The volume holding 1 mole is <i>V</i> = 1/<i>c</i>. Since conductance scales with the cross-section (here proportional to that volume) while <i>κ</i> is the per-unit-volume conductance:<br>Λ<sub>m</sub> = <i>κ</i> × <i>V</i> = <i>κ</i>/<i>c</i>',
      },
      {
        t: 'p',
        html: 'Now the unit care that costs students marks. If <i>c</i> is in mol cm<sup>−3</sup> and <i>κ</i> in S cm<sup>−1</sup>, then Λ<sub>m</sub> comes out in S cm<sup>2</sup> mol<sup>−1</sup> directly. But concentration is almost always quoted as <b>molarity</b> (mol L<sup>−1</sup>) = mol per <b>1000 cm<sup>3</sup></b>, so <i>c</i> (mol cm<sup>−3</sup>) = molarity/1000. Substituting gives the working formula with the explicit factor of 1000:<br>Λ<sub>m</sub> = (<i>κ</i> × 1000)/molarity',
      },
      {
        t: 'p',
        html: '<b>3C. Procedure — getting Λ°<sub>m</sub> of a weak acid via Kohlrausch</b><br>A strong electrolyte’s Λ°<sub>m</sub> comes from extrapolating the Λ<sub>m</sub>-vs-√<i>c</i> line to <i>c</i> = 0. A <b>weak</b> electrolyte’s curve shoots up steeply near <i>c</i> = 0 (dissociation runs toward completion only at extreme dilution), so extrapolation is hopeless. Kohlrausch rescues us: since each ion contributes independently at infinite dilution, build the weak acid HA from measurable strong electrolytes through a “thermochemical-cycle” style cancellation:',
      },
      {
        t: 'formula',
        kicker: 'Weak acid from strong electrolytes (Kohlrausch)',
        main: 'Λ°<sub>m</sub>(HA) = Λ°<sub>m</sub>(HCl) + Λ°<sub>m</sub>(NaA) − Λ°<sub>m</sub>(NaCl)',
        legend: ['Λ°<sub>m</sub> = limiting molar conductivity', 'HA = the weak acid', 'NaA = its sodium salt'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Reasoning:</b> on the right, Na<sup>+</sup> and Cl<sup>−</sup> contributions cancel, leaving exactly <i>λ</i>°<sub>H⁺</sub> + <i>λ</i>°<sub>A⁻</sub> — the ions of HA.',
      },
      { t: 'fig', id: 'c12-02-fig-2.2' },
      {
        t: 'p',
        html: '<b>3D. Procedure — solubility of a sparingly soluble salt</b><br>For a salt like AgCl or BaSO<sub>4</sub> that barely dissolves, you cannot weigh out a concentration — but you can measure conductivity. The logic runs in three moves. (1) Because the saturated solution is extremely dilute, take Λ<sub>m</sub> ≈ Λ°<sub>m</sub>, and get Λ°<sub>m</sub> for the salt from Kohlrausch’s law using tabulated ionic conductivities. (2) Measure the solution’s conductivity and <b>subtract the conductivity of the pure water</b> — at these tiny concentrations the water’s own ions are not negligible. (3) Invert the molar-conductivity relation to read off the concentration, which is the solubility:<br><i>S</i> = (<i>κ</i><sub>salt</sub> × 1000)/Λ°<sub>m</sub><br>For a 1:1 salt the solubility product follows as <i>K</i><sub>sp</sub> = <i>S</i><sup>2</sup>. This is the standard way conductivity measurements deliver <i>K</i><sub>sp</sub> values too small to obtain by ordinary titration.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A conductivity cell filled with a 0.050 M salt solution has resistance 220 Ω. The cell constant is 1.15 cm<sup>−1</sup>. Calculate the conductivity <i>κ</i> and the molar conductivity Λ<sub>m</sub>.',
        steps: [
          'Conductance: <i>G</i> = 1/<i>R</i> = 1/220 = 4.545 × 10<sup>−3</sup> S.',
          'Conductivity:<br><i>κ</i> = <i>G</i> × <i>G</i>* = (4.545 × 10<sup>−3</sup>)(1.15) = 5.227 × 10<sup>−3</sup> ≈ 5.23 × 10<sup>−3</sup> S cm<sup>−1</sup>',
          'Molar conductivity (mind the 1000):<br>Λ<sub>m</sub> = (<i>κ</i> × 1000)/molarity = (5.227 × 10<sup>−3</sup> × 1000)/0.050',
        ],
        ans: 'Λ<sub>m</sub> = <b>104.5 S cm<sup>2</sup> mol<sup>−1</sup></b> (1.0 × 10<sup>2</sup> S cm<sup>2</sup> mol<sup>−1</sup> to two significant figures)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A student dilutes a strong-electrolyte (KNO<sub>3</sub>) solution to ten times its original volume. What happens to (i) its conductivity <i>κ</i> and (ii) its molar conductivity Λ<sub>m</sub>?',
        steps: [
          '<b>Speed logic.</b> Do not compute — reason about the crowd. (i) Dilution spreads the same ions through 10× the volume, so charge-carriers per cm<sup>3</sup> drop sharply: <i>κ</i> <b>decreases</b>. (ii) Λ<sub>m</sub> fixes the amount at one mole and only asks how freely those ions move; with neighbours farther apart, interionic drag eases slightly, so Λ<sub>m</sub> <b>increases</b> (modestly, toward Λ°<sub>m</sub>).',
          '<b>The trap:</b> because both words contain “conductivity,” students reflexively move them in the same direction. Anchor the one-liner: “Dilute → <i>κ</i> down, Λ<sub>m</sub> up.” Picking “both decrease” is the classic NEET distractor.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Given limiting molar conductivities (S cm<sup>2</sup> mol<sup>−1</sup>): Λ°<sub>m</sub>(HCl) = 426, Λ°<sub>m</sub>(C<sub>2</sub>H<sub>5</sub>COONa) = 86, Λ°<sub>m</sub>(NaCl) = 126. Calculate Λ°<sub>m</sub> for propanoic acid (C<sub>2</sub>H<sub>5</sub>COOH).',
        steps: [
          'Propanoic acid is weak, so we route through Kohlrausch (two concepts: ionic-independence + ion cancellation):<br>Λ°<sub>m</sub>(C<sub>2</sub>H<sub>5</sub>COOH) = Λ°<sub>m</sub>(HCl) + Λ°<sub>m</sub>(C<sub>2</sub>H<sub>5</sub>COONa) − Λ°<sub>m</sub>(NaCl)<br>= 426 + 86 − 126',
          '<b>Check:</b> Na<sup>+</sup> (from the propanoate salt) and Cl<sup>−</sup> (from HCl) are exactly cancelled by NaCl, leaving H<sup>+</sup> + C<sub>2</sub>H<sub>5</sub>COO<sup>−</sup> — the ions of propanoic acid. Correct.',
        ],
        ans: '<b>386 S cm<sup>2</sup> mol<sup>−1</sup></b>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A 0.020 M solution of a monobasic weak acid HA has conductivity <i>κ</i> = 8.0 × 10<sup>−4</sup> S cm<sup>−1</sup> at 298 K. Its limiting molar conductivity is Λ°<sub>m</sub> = 390 S cm<sup>2</sup> mol<sup>−1</sup>. Find the degree of dissociation <i>α</i> and the dissociation constant <i>K</i><sub>a</sub>.',
        steps: [
          '<b>Step 1 — molar conductivity at this concentration:</b><br>Λ<sub>m</sub> = (<i>κ</i> × 1000)/molarity = (8.0 × 10<sup>−4</sup> × 1000)/0.020 = 0.80/0.020 = 40 S cm<sup>2</sup> mol<sup>−1</sup>',
          '<b>Step 2 — degree of dissociation:</b><br><i>α</i> = Λ<sub>m</sub>/Λ°<sub>m</sub> = 40/390 = 0.1026',
          '<b>Step 3 — dissociation constant</b> (Ostwald’s dilution law):<br><i>K</i><sub>a</sub> = <i>c</i> <i>α</i><sup>2</sup>/(1 − <i>α</i>) = (0.020)(0.1026)<sup>2</sup>/(1 − 0.1026) = (0.020)(0.01053)/0.8974 = (2.105 × 10<sup>−4</sup>)/0.8974',
          'The small <i>α</i> (~ 10%) confirms HA is genuinely weak, consistent with Λ<sub>m</sub> ≪ Λ°<sub>m</sub>.',
        ],
        ans: '<i>K</i><sub>a</sub> ≈ <b>2.35 × 10<sup>−4</sup></b> (2.3 × 10<sup>−4</sup> to two significant figures: carrying all digits gives 2.34 × 10<sup>−4</sup>)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] The resistance of a conductivity cell containing a 0.10 M salt solution is 145 Ω. If the cell constant is 1.29 cm<sup>−1</sup>, find the conductivity of the solution.',
            a: '<i>κ</i> = 8.90 × 10<sup>−3</sup> S cm<sup>−1</sup>.',
          },
          {
            q: '[NEET] Arrange in order of increasing molar conductivity at the <b>same</b> concentration, given they are all strong 1:1 electrolytes with ionic conductivities such that H<sup>+</sup> > K<sup>+</sup> > Na<sup>+</sup> and OH<sup>−</sup> > Cl<sup>−</sup> > CH<sub>3</sub>COO<sup>−</sup>: NaCl, KCl, HCl. (Reason qualitatively.)',
            a: 'NaCl < KCl < HCl (H<sup>+</sup> has by far the largest ionic conductivity).',
          },
          {
            q: '[JEE Main] Using Λ°<sub>m</sub> (S cm<sup>2</sup> mol<sup>−1</sup>): HBr = 428, sodium butanoate = 83, NaBr = 128, find Λ°<sub>m</sub> for butanoic acid.',
            a: '428 + 83 − 128 = 383 S cm<sup>2</sup> mol<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] Convert Λ<sub>m</sub> = 124 S cm<sup>2</sup> mol<sup>−1</sup> into SI units (S m<sup>2</sup> mol<sup>−1</sup>).',
            a: '124 × 10<sup>−4</sup> = 1.24 × 10<sup>−2</sup> S m<sup>2</sup> mol<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] A 0.0050 M weak monobasic acid has Λ<sub>m</sub> = 32 S cm<sup>2</sup> mol<sup>−1</sup> and Λ°<sub>m</sub> = 400 S cm<sup>2</sup> mol<sup>−1</sup>. Compute <i>α</i> and <i>K</i><sub>a</sub>.',
            a: '<i>α</i> = 0.080, <i>K</i><sub>a</sub> ≈ 3.5 × 10<sup>−5</sup>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'On progressive dilution of a strong electrolyte solution, which is correct?',
        opts: [
          { label: 'both <i>κ</i> and Λ<sub>m</sub> increase', nudge: '<b>(a)</b>/<b>(b)</b> come from assuming the two move together.' },
          { label: 'both decrease', nudge: '<b>(a)</b>/<b>(b)</b> come from assuming the two move together.' },
          { label: '<i>κ</i> decreases, Λ<sub>m</sub> increases', nudge: null },
          {
            label: '<i>κ</i> increases, Λ<sub>m</sub> decreases',
            nudge: '<b>(d)</b> inverts both — the answer of a student who has memorised the words but not the meaning.',
          },
        ],
        correct: 2,
        solution: 'Fewer ions per unit volume drops <i>κ</i>; normalising to one mole with eased interionic drag raises Λ<sub>m</sub>.',
      },
      {
        t: 'mcq',
        q: 'The cell constant of a conductivity cell depends on:',
        opts: [
          {
            label: 'the concentration of the solution',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all affect <i>κ</i> or <i>G</i>, but never the cell constant; students who confuse “what the cell measures” with “what the cell is” fall for these.',
          },
          {
            label: 'the nature of the electrolyte',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all affect <i>κ</i> or <i>G</i>, but never the cell constant; students who confuse “what the cell measures” with “what the cell is” fall for these.',
          },
          { label: 'the geometry (<i>l</i>/<i>A</i>) of the cell', nudge: null },
          {
            label: 'the temperature',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all affect <i>κ</i> or <i>G</i>, but never the cell constant; students who confuse “what the cell measures” with “what the cell is” fall for these.',
          },
        ],
        correct: 2,
        solution: 'Cell constant = <i>l</i>/<i>A</i> is purely geometric — a fixed feature of the apparatus.',
      },
      {
        t: 'mcq',
        q: 'For which electrolyte does Λ<sub>m</sub> rise most steeply as <i>c</i> → 0?',
        opts: [
          {
            label: 'KCl',
            nudge: 'Strong electrolytes (<b>a, b, d</b>) rise only gently along Λ<sub>m</sub> = Λ°<sub>m</sub> − <i>A</i>√<i>c</i>. Choosing a strong electrolyte means missing the strong/weak distinction.',
          },
          {
            label: 'NaCl',
            nudge: 'Strong electrolytes (<b>a, b, d</b>) rise only gently along Λ<sub>m</sub> = Λ°<sub>m</sub> − <i>A</i>√<i>c</i>. Choosing a strong electrolyte means missing the strong/weak distinction.',
          },
          { label: 'a weak acid like HCN', nudge: null },
          {
            label: 'K<sub>2</sub>SO<sub>4</sub>',
            nudge: 'Strong electrolytes (<b>a, b, d</b>) rise only gently along Λ<sub>m</sub> = Λ°<sub>m</sub> − <i>A</i>√<i>c</i>. Choosing a strong electrolyte means missing the strong/weak distinction.',
          },
        ],
        correct: 2,
        solution: 'A weak acid is barely dissociated at moderate <i>c</i> and dissociates rapidly toward <i>c</i> = 0, so its Λ<sub>m</sub> shoots up sharply — which is exactly why its Λ°<sub>m</sub> cannot be extrapolated and needs Kohlrausch.',
      },
      {
        t: 'mcq',
        q: 'A solution’s <i>κ</i> = 0.012 S cm<sup>−1</sup> at 0.10 M. Its Λ<sub>m</sub> is:',
        opts: [
          { label: '0.12 S cm<sup>2</sup> mol<sup>−1</sup>', nudge: '<b>(a)</b> forgets the ×1000.' },
          { label: '120 S cm<sup>2</sup> mol<sup>−1</sup>', nudge: null },
          { label: '1.2 S cm<sup>2</sup> mol<sup>−1</sup>', nudge: '<b>(c)</b> uses molarity as a factor, not a divisor.' },
          { label: '1200 S cm<sup>2</sup> mol<sup>−1</sup>', nudge: '<b>(d)</b> is ten times too big.' },
        ],
        correct: 1,
        solution: 'Λ<sub>m</sub> = (<i>κ</i> × 1000)/molarity = (0.012 × 1000)/0.10 = 120. This single question is the most common unit-conversion exam casualty.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Moving <i>κ</i> and Λ<sub>m</sub> in the same direction on dilution.</b> They oppose: <i>κ</i> ↓, Λ<sub>m</sub> ↑.',
          '<b>Dropping or misplacing the factor 1000.</b> Λ<sub>m</sub> = <i>κ</i> × 1000/molarity only when <i>κ</i> is in S cm<sup>−1</sup> and concentration in mol L<sup>−1</sup>. Always write units beside every number.',
          '<b>Applying <i>α</i> = Λ<sub>m</sub>/Λ°<sub>m</sub> to a strong electrolyte.</b> That formula is for weak electrolytes; strong ones are essentially fully dissociated, and their Λ<sub>m</sub> < Λ°<sub>m</sub> gap is due to interionic forces, not incomplete dissociation.',
          '<b>Forgetting which ions cancel in Kohlrausch.</b> Set up HA = HCl + NaA − NaCl and verify the spectator ions (Na<sup>+</sup>, Cl<sup>−</sup>) vanish.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (sanity checks):</b> (1) After any Λ<sub>m</sub> calculation, expect a few units to a few hundred S cm<sup>2</sup> mol<sup>−1</sup> for typical solutions — an answer like 0.12 or 120000 almost always signals a 1000-factor slip. (2) For a weak acid, <i>α</i> should come out small (< 0.2 at ordinary concentrations); a large <i>α</i> means you mislabelled it or inverted the ratio.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two conduction types',
            note: 'metallic = drifting electrons, falls with temperature; electrolytic = migrating ions, rises with temperature.',
          },
          {
            f: 'Core chain',
            note: '<i>G</i> = 1/<i>R</i>; <i>κ</i> = <i>G</i> × <i>l</i>/<i>A</i> (cell constant <i>G</i>* = <i>l</i>/<i>A</i>); Λ<sub>m</sub> = (<i>κ</i> × 1000)/molarity.',
          },
          {
            f: 'Units',
            note: '<i>G</i> in S; <i>κ</i> in S cm<sup>−1</sup> (SI S m<sup>−1</sup>); Λ<sub>m</sub> in S cm<sup>2</sup> mol<sup>−1</sup> (= 10<sup>−4</sup> S m<sup>2</sup> mol<sup>−1</sup>); cell constant in cm<sup>−1</sup>.',
          },
          { f: 'On dilution', note: '<i>κ</i> ↓, Λ<sub>m</sub> ↑.' },
          {
            f: 'Strong electrolyte',
            note: 'Λ<sub>m</sub> = Λ°<sub>m</sub> − <i>A</i>√<i>c</i> (extrapolate to get Λ°<sub>m</sub>). <b>Weak:</b> use Kohlrausch Λ°<sub>m</sub>(HA) = Λ°<sub>m</sub>(HCl) + Λ°<sub>m</sub>(NaA) − Λ°<sub>m</sub>(NaCl).',
          },
          {
            f: 'Weak electrolyte',
            note: '<i>α</i> = Λ<sub>m</sub>/Λ°<sub>m</sub>, <i>K</i><sub>a</sub> = <i>c</i><i>α</i><sup>2</sup>/(1 − <i>α</i>).',
          },
          {
            f: 'Sparingly soluble salt',
            note: '<i>S</i> = (<i>κ</i><sub>salt</sub> × 1000)/Λ°<sub>m</sub> (take Λ<sub>m</sub> ≈ Λ°<sub>m</sub>; subtract water’s <i>κ</i>); <i>K</i><sub>sp</sub> = <i>S</i><sup>2</sup> for 1:1.',
          },
        ],
        aids: ['“Dilute → kappa drops, lambda lifts.”'],
      },
    ],
  },
];
