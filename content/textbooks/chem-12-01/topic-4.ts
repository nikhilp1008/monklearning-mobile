import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topic 04: pp. 28–35 of the Class 12 Chemistry Master Reference,
 * word for word. Vapour Pressure & Raoult’s Law, split at its Sections 1 to 8.
 * Figures 1.3 and 1.4 are cited on p. 30 and drawn on the figures page p. 31;
 * each sits where p. 30 cites it, in Theorems, proofs and key procedures. They
 * are redrawn in lib/diagrams/chemistry-12-01.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 28–35 ─────────────────────────
  {
    n: '04',
    title: 'Vapour Pressure & Raoult’s Law',
    kalam: 'The pressure exerted by the vapour sitting in equilibrium above its own liquid is the liquid’s vapour pressure.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield topics in the chapter. CBSE Boards almost always carry a 2–3 mark Raoult’s-law numerical (total vapour pressure or relative lowering) plus a definition. NEET favours the conceptual deviation/azeotrope identification and “which has the highest boiling point” traps. JEE Main poses 1–2 numericals on vapour-phase composition or molar-mass determination; JEE Advanced fuses Raoult’s law with Dalton’s law to probe liquid-versus-vapour composition.',
      },
      {
        t: 'p',
        html: 'Picture a sealed steel tiffin half-filled with water, left to sit. Some water molecules at the surface have enough energy to escape into the empty space above, and some vapour molecules fall back in. Very soon the rate of escaping equals the rate of returning — a familiar <b>dynamic equilibrium</b> (the same balance we met with dissolving gases in liquids). The pressure exerted by the vapour sitting in equilibrium above its own liquid is the liquid’s <b>vapour pressure</b>. A liquid that evaporates easily (petrol, acetone) has a high vapour pressure; a sluggish one (glycerine) has a low one.',
      },
      {
        t: 'p',
        html: 'Now stir a spoon of sugar — a <b>non-volatile</b> solute that has no desire to evaporate — into the water. Something quietly important happens at the surface. Earlier, every spot on the surface was a water molecule that could potentially escape. Now some of those surface spots are occupied by sugar molecules that simply sit there. Fewer water molecules line the surface, so fewer escape per second, so the vapour pressure of the solution drops below that of pure water. <b>A non-volatile solute always lowers the vapour pressure of the solvent</b>, and the more solute particles crowd the surface, the greater the drop.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine the liquid surface as the doorway of a packed Mumbai local at rush hour. If you replace some of the would-be passengers (water) standing at the door with stationary luggage (sugar), fewer people can jump out at each stop. The “escape rate” — the vapour pressure — falls in direct proportion to how much of the doorway the luggage occupies. That single mental image is Raoult’s law: the vapour pressure contributed by a component is proportional to the fraction of the doorway it occupies, i.e. its mole fraction.',
      },
      {
        t: 'p',
        html: 'The French chemist <b>François-Marie Raoult</b> turned this into a quantitative rule. For a mixture of <b>volatile</b> liquids, each component contributes a partial vapour pressure equal to its pure-liquid vapour pressure scaled by its mole fraction in the liquid. For a <b>non-volatile</b> solute, only the solvent contributes, and the relative drop in vapour pressure equals the mole fraction of the solute.',
      },
      {
        t: 'p',
        html: 'Solutions that obey Raoult’s law across the whole composition range are called <b>ideal solutions</b> — they form when the new solute–solvent attractions (A–B) are about as strong as the original A–A and B–B attractions, so molecules escape just as readily as before mixing. Real solutions often misbehave: if A–B attractions are weaker than average, molecules escape more easily and the vapour pressure runs higher than Raoult predicts (<b>positive deviation</b>); if A–B attractions are stronger (say, new hydrogen bonds form), molecules are held back and the vapour pressure runs lower (<b>negative deviation</b>). Push these deviations far enough and you get an <b>azeotrope</b> — a mixture that boils at a constant temperature with identical liquid and vapour compositions, which is why you cannot purify ethanol beyond ~95% by ordinary distillation.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• Raoult’s law in its simple form assumes an <b>ideal solution</b> (or the dilute limit). Strongly interacting real mixtures deviate.<br>• The <b>relative-lowering</b> form (Δ<i>p</i>/<i>p</i>° = <i>x</i><sub>solute</sub>) requires the solute to be <b>non-volatile</b> (it contributes no vapour) and <b>non-dissociating/non-associating</b> — if the solute splits into ions or pairs up, the effective particle count changes and the simple form fails (that correction is the van’t Hoff factor, Topic 05).<br>• It is a surface/equilibrium law for a <b>closed</b> system at constant temperature.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Raoult’s law — volatile binary mixture (A and B both volatile)',
        main: '<i>p</i><sub>A</sub> = <i>x</i><sub>A</sub><i>p</i>°<sub>A</sub>, <i>p</i><sub>B</sub> = <i>x</i><sub>B</sub><i>p</i>°<sub>B</sub><br><i>p</i><sub>total</sub> = <i>p</i><sub>A</sub> + <i>p</i><sub>B</sub> = <i>x</i><sub>A</sub><i>p</i>°<sub>A</sub> + <i>x</i><sub>B</sub><i>p</i>°<sub>B</sub> = <i>p</i>°<sub>A</sub> + (<i>p</i>°<sub>B</sub> − <i>p</i>°<sub>A</sub>)<i>x</i><sub>B</sub>',
        legend: [
          '<i>p</i><sub>A</sub>, <i>p</i><sub>B</sub> = partial vapour pressures of A and B above the solution',
          '<i>p</i>°<sub>A</sub>, <i>p</i>°<sub>B</sub> = vapour pressures of the pure liquids at the same temperature',
          '<i>x</i><sub>A</sub>, <i>x</i><sub>B</sub> = mole fractions in the <b>liquid</b> phase, with <i>x</i><sub>A</sub> + <i>x</i><sub>B</sub> = 1',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Raoult’s law — non-volatile solute (solute = 2, solvent = 1)',
        main: '<i>p</i><sub>solution</sub> = <i>x</i><sub>solvent</sub><i>p</i>°<sub>solvent</sub>',
        legend: [
          '<i>p</i><sub>solution</sub> = vapour pressure of the solution',
          '<i>x</i><sub>solvent</sub> = mole fraction of solvent',
          '<i>p</i>°<sub>solvent</sub> = vapour pressure of the pure solvent',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Relative lowering of vapour pressure (RLVP)',
        main: '(<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>x</i><sub>solute</sub>',
        legend: [
          '<i>p</i>° = pure-solvent vapour pressure',
          '<i>p</i><sub>s</sub> = the solution’s vapour pressure',
          '<i>x</i><sub>solute</sub> = mole fraction of solute',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>The relative lowering equals the mole fraction of the solute</b> — but the solution pressure itself is <i>p</i>° times the mole fraction of the solvent. Keeping these two straight is the single most common slip in this topic.',
      },
      {
        t: 'formula',
        kicker: 'Molar-mass determination (dilute solution, <i>n</i><sub>2</sub> ≪ <i>n</i><sub>1</sub>)',
        main: '(<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>n</i><sub>2</sub>/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>) ≈ <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = (<i>w</i><sub>2</sub>/<i>M</i><sub>2</sub>)/(<i>w</i><sub>1</sub>/<i>M</i><sub>1</sub>)<br>⇒ <i>M</i><sub>2</sub> = (<i>w</i><sub>2</sub><i>M</i><sub>1</sub><i>p</i>°)/(<i>w</i><sub>1</sub>(<i>p</i>° − <i>p</i><sub>s</sub>))',
        legend: [
          '<i>p</i>° = pure-solvent vapour pressure',
          '<i>p</i><sub>s</sub> = the solution’s vapour pressure',
          '<i>n</i><sub>1</sub>, <i>w</i><sub>1</sub>, <i>M</i><sub>1</sub> = moles, mass, molar mass of solvent',
          '<i>n</i><sub>2</sub>, <i>w</i><sub>2</sub>, <i>M</i><sub>2</sub> = moles, mass, molar mass of solute',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Vapour-phase composition (Raoult + Dalton)',
        main: '<i>y</i><sub>A</sub> = <i>p</i><sub>A</sub>/<i>p</i><sub>total</sub>, <i>y</i><sub>B</sub> = <i>p</i><sub>B</sub>/<i>p</i><sub>total</sub>',
        legend: [
          '<i>y</i><sub>A</sub>, <i>y</i><sub>B</sub> = mole fractions in the <b>vapour</b>',
          '<i>p</i><sub>A</sub>, <i>p</i><sub>B</sub> = partial vapour pressures',
          '<i>p</i><sub>total</sub> = total vapour pressure',
        ],
        note: 'For an ideal solution, the vapour is always richer in the more volatile component than the liquid; at an azeotrope the two compositions are the same.',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['Vapour pressure', '<i>p</i>, <i>p</i>°', 'Pa', '[M L<sup>−1</sup> T<sup>−2</sup>]'],
          ['Mole fraction', '<i>x</i>, <i>y</i>', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]'],
          ['Relative lowering', 'Δ<i>p</i>/<i>p</i>°', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]'],
        ],
      },
      {
        t: 'def',
        term: 'Ideal solution criteria',
        html: 'obeys Raoult’s law at all concentrations, with Δ<sub>mix</sub><i>H</i> = 0 and Δ<sub>mix</sub><i>V</i> = 0.',
      },

      { t: 'part', title: 'Theorems, proofs and key procedures' },
      {
        t: 'p',
        html: '<b>Chaining to Henry’s law — Raoult’s law as a special case of Henry’s law.</b> Earlier, we established Henry’s law for a dilute gaseous solute, <i>p</i> = <i>K</i><sub>H</sub><i>x</i>. Raoult’s law for a volatile component reads <i>p</i> = <i>p</i>°<i>x</i>. They are the same kind of straight line through the origin, with different slopes: Henry’s slope is <i>K</i><sub>H</sub>, Raoult’s is <i>p</i>°. So <b>Raoult’s law is the special case of Henry’s law in which <i>K</i><sub>H</sub> = <i>p</i>°.</b> In a real dilute solution the solvent (in excess) obeys Raoult’s law while the solute obeys Henry’s law — the two laws apply at opposite ends of the composition axis: Raoult’s law as a component’s mole fraction nears 1, Henry’s law as it nears 0. We will reuse, not re-derive, the <i>p</i> = <i>K</i><sub>H</sub><i>x</i> result here.',
      },
      {
        t: 'proc',
        title: 'Deriving the relative-lowering form (non-volatile solute)',
        steps: [
          '<b>Set-up.</b> Let the solvent (1) be volatile and the solute (2) be non-volatile. Only the solvent contributes vapour, so by Raoult’s law <i>p</i><sub>s</sub> = <i>x</i><sub>1</sub><i>p</i>°, where <i>p</i>° is the pure-solvent vapour pressure.',
          '<b>Why this step.</b> The solute occupies surface sites but cannot evaporate, so the solution’s vapour pressure is the pure value scaled by the fraction of surface that is still solvent — its mole fraction <i>x</i><sub>1</sub>.',
          '<b>Form the lowering.</b> Subtract from <i>p</i>°:<br><i>p</i>° − <i>p</i><sub>s</sub> = <i>p</i>° − <i>x</i><sub>1</sub><i>p</i>° = <i>p</i>°(1 − <i>x</i><sub>1</sub>).',
          '<b>Use <i>x</i><sub>1</sub> + <i>x</i><sub>2</sub> = 1.</b> Since 1 − <i>x</i><sub>1</sub> = <i>x</i><sub>2</sub>,<br>(<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>x</i><sub>2</sub> = <i>x</i><sub>solute</sub>.<br>The relative lowering depends only on how many solute particles are present (their mole fraction), not on what they are — the seed of every colligative property to come.',
        ],
      },
      {
        t: 'proc',
        title: 'Deriving the total-pressure form (volatile binary mixture)',
        steps: [
          'Each volatile component independently obeys Raoult’s law: <i>p</i><sub>A</sub> = <i>x</i><sub>A</sub><i>p</i>°<sub>A</sub> and <i>p</i><sub>B</sub> = <i>x</i><sub>B</sub><i>p</i>°<sub>B</sub>.',
          'By <b>Dalton’s law of partial pressures</b>, the total pressure is their sum: <i>p</i><sub>total</sub> = <i>p</i><sub>A</sub> + <i>p</i><sub>B</sub>.',
          'Substitute and replace <i>x</i><sub>A</sub> = 1 − <i>x</i><sub>B</sub>:<br><i>p</i><sub>total</sub> = <i>x</i><sub>A</sub><i>p</i>°<sub>A</sub> + <i>x</i><sub>B</sub><i>p</i>°<sub>B</sub> = <i>p</i>°<sub>A</sub> + (<i>p</i>°<sub>B</sub> − <i>p</i>°<sub>A</sub>)<i>x</i><sub>B</sub>.<br>This is a straight line in <i>x</i><sub>B</sub>: total vapour pressure varies linearly between the two pure values — the signature of an ideal solution.',
        ],
      },
      { t: 'fig', id: 'c12-01-fig-1.3' },
      {
        t: 'p',
        html: '<b>Logical framework — classifying a real solution.</b><br>• Compare A–B attraction with the average of A–A and B–B.<br>• <b>A–B weaker</b> ⇒ easier escape ⇒ <i>p</i> > <i>p</i><sub>Raoult</sub> ⇒ <b>positive deviation</b> ⇒ Δ<sub>mix</sub><i>H</i> > 0, Δ<sub>mix</sub><i>V</i> > 0 (e.g. ethanol + acetone, ethanol + cyclohexane). Ethanol + water also deviates positively, although it mixes with a slight contraction and slight release of heat at room temperature, so the signs are not read from it. Large positive deviation ⇒ <b>minimum-boiling azeotrope</b>.<br>• <b>A–B stronger</b> (often new H-bonds) ⇒ molecules held back ⇒ <i>p</i> < <i>p</i><sub>Raoult</sub> ⇒ <b>negative deviation</b> ⇒ Δ<sub>mix</sub><i>H</i> < 0, Δ<sub>mix</sub><i>V</i> < 0 (e.g. chloroform + acetone, water + HNO<sub>3</sub>, water + HCl). Large negative deviation ⇒ <b>maximum-boiling azeotrope</b>.',
      },
      { t: 'fig', id: 'c12-01-fig-1.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two volatile liquids P and Q form an ideal solution. At 300 K the vapour pressures of the pure liquids are <i>p</i>°<sub>P</sub> = 120 mmHg and <i>p</i>°<sub>Q</sub> = 75 mmHg. A solution is made by mixing 3 mol of P with 2 mol of Q. Calculate the total vapour pressure of the solution.',
        steps: [
          'Mole fractions in the liquid: <i>x</i><sub>P</sub> = 3/(3 + 2) = 0.60, <i>x</i><sub>Q</sub> = 0.40.',
          'Partial pressures by Raoult’s law:<br><i>p</i><sub>P</sub> = <i>x</i><sub>P</sub><i>p</i>°<sub>P</sub> = 0.60 × 120 = 72 mmHg, <i>p</i><sub>Q</sub> = 0.40 × 75 = 30 mmHg',
          'Total (Dalton):<br><i>p</i><sub>total</sub> = 72 + 30',
        ],
        ans: '<i>p</i><sub>total</sub> = 102 mmHg',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of these mixtures shows <b>negative</b> deviation from Raoult’s law?<br>(a) Ethanol + water<br>(b) Acetone + chloroform<br>(c) n-Hexane + n-heptane<br>(d) Ethanol + acetone',
        steps: [
          '<b>Speed approach.</b> Do not compute. Ask one question: do new, stronger A–B attractions form on mixing? Negative deviation needs A–B <b>stronger</b> than A–A/B–B — classically a new hydrogen bond. Acetone + chloroform is the textbook case: the chloroform H bonds to the acetone carbonyl, holding molecules back.',
          '• <b>(a)</b> and <b>(d)</b> involve breaking ethanol’s own H-bonds ⇒ easier escape ⇒ positive deviation.<br>• <b>(c)</b> is two similar alkanes ⇒ nearly ideal. <b>Elimination tip:</b> “new H-bond on mixing” ⇒ negative; “H-bonds broken on mixing” ⇒ positive; “look-alike molecules” ⇒ ideal.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'When 5.4 g of a non-volatile, non-electrolyte solute is dissolved in 90 g of water, the vapour pressure of water at 298 K falls from 23.8 mmHg to 23.4 mmHg. Determine the molar mass of the solute. (Molar mass of water = 18 g mol<sup>−1</sup>.)',
        steps: [
          'This links Raoult’s law (RLVP) with the mole concept — two ideas in one.',
          '<b>Step 1 — relative lowering:</b><br>(<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = (23.8 − 23.4)/23.8 = 0.4/23.8 = 1.681 × 10<sup>−2</sup>',
          '<b>Step 2 — moles of solvent:</b><br><i>n</i><sub>1</sub> = 90/18 = 5.0 mol',
          '<b>Step 3 — dilute approximation, (<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° ≈ <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>:</b><br><i>n</i><sub>2</sub> = 1.681 × 10<sup>−2</sup> × 5.0 = 8.40 × 10<sup>−2</sup> mol',
          '<b>Step 4 — molar mass:</b><br><i>M</i><sub>2</sub> = <i>w</i><sub>2</sub>/<i>n</i><sub>2</sub> = 5.4/(8.40 × 10<sup>−2</sup>)',
          '<b>A sanity check:</b> the lowering is tiny (∼ 1.7%), consistent with the dilute approximation we used.',
        ],
        ans: '<i>M</i><sub>2</sub> ≈ 64.3 g mol<sup>−1</sup> (6 × 10<sup>1</sup> g mol<sup>−1</sup> to one significant figure, since the 0.4 mmHg drop has one)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two volatile liquids A and B form an ideal solution. At 350 K, <i>p</i>°<sub>A</sub> = 400 mmHg and <i>p</i>°<sub>B</sub> = 100 mmHg. A liquid mixture has <i>x</i><sub>A</sub> = 0.40. Find (i) the total vapour pressure and (ii) the composition of the <b>vapour</b> in equilibrium with it. (iii) If that vapour were fully condensed to a new liquid and re-equilibrated, would the new vapour be richer or poorer in A? Justify qualitatively.',
        steps: [
          'The key insight: Raoult gives liquid-phase pressures; Dalton converts them to <b>vapour-phase</b> mole fractions — which differ from the liquid.',
          '<b>(i)</b> Partial and total pressures:<br><i>p</i><sub>A</sub> = 0.40 × 400 = 160 mmHg, <i>p</i><sub>B</sub> = 0.60 × 100 = 60 mmHg<br><i>p</i><sub>total</sub> = 160 + 60 = 220 mmHg',
          '<b>(ii)</b> Vapour composition (Dalton):<br><i>y</i><sub>A</sub> = <i>p</i><sub>A</sub>/<i>p</i><sub>total</sub> = 160/220 = 0.727, <i>y</i><sub>B</sub> = 1 − 0.727 = 0.273<br>So although the liquid is only 40% A, the vapour is about 73% A — the vapour is <b>enriched in the more volatile component</b> (A, the higher-<i>p</i>° liquid).',
          '<b>(iii)</b> Condensing that vapour gives a new liquid with <i>x</i><sub>A</sub> = 0.727. Re-equilibrating, its vapour will be even richer in A still (repeat the calculation and <i>y</i><sub>A</sub> rises further toward 1). <b>This step-by-step enrichment is exactly how fractional distillation separates volatile liquids</b> — and it is precisely the enrichment that fails at an azeotrope, where liquid and vapour compositions coincide.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define vapour pressure of a liquid and state Raoult’s law for a solution of two volatile liquids.',
            a: 'Vapour pressure is the pressure exerted by the vapour in equilibrium with its liquid at a given temperature. Raoult’s law: each volatile component’s partial vapour pressure equals its pure-liquid vapour pressure times its mole fraction in the liquid: <i>p</i><sub>A</sub> = <i>x</i><sub>A</sub><i>p</i>°<sub>A</sub>, <i>p</i><sub>B</sub> = <i>x</i><sub>B</sub><i>p</i>°<sub>B</sub>, and <i>p</i><sub>total</sub> = <i>p</i><sub>A</sub> + <i>p</i><sub>B</sub>.',
          },
          {
            q: '[NEET] A mixture of two liquids boils at a temperature higher than the boiling point of either pure liquid. State, with reason, the type of deviation and the type of azeotrope it can form.',
            a: 'Negative deviation: A–B attractions are stronger than A–A and B–B, so the vapour pressure falls below Raoult’s law and a higher temperature is needed to reach atmospheric pressure. It can form a maximum-boiling azeotrope.',
          },
          {
            q: '[JEE Main] At 298 K, the vapour pressure of pure benzene is 100 mmHg. When 1.0 mol of a non-volatile solute is dissolved in 9.0 mol of benzene, find the vapour pressure of the solution.',
            a: '90 mmHg.',
          },
          {
            q: '[JEE Main] Liquids X (<i>p</i>° = 300 mmHg) and Y (<i>p</i>° = 150 mmHg) form an ideal solution with <i>x</i><sub>X</sub> = 0.5. Find the mole fraction of X in the vapour.',
            a: '<i>y</i><sub>X</sub> = 0.667.',
          },
          {
            q: '[JEE Advanced] A solution of two volatile liquids shows a total vapour pressure greater than that predicted by Raoult’s law at every composition. State the sign of Δ<sub>mix</sub><i>H</i> and Δ<sub>mix</sub><i>V</i>, describe the relative strength of A–B interactions, and name the type of azeotrope formed at large deviation.',
            a: 'Δ<sub>mix</sub><i>H</i> > 0, Δ<sub>mix</sub><i>V</i> > 0; A–B weaker than A–A/B–B; minimum-boiling azeotrope.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'For a solution of a non-volatile solute, the relative lowering of vapour pressure (<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° equals:',
        opts: [
          {
            label: 'mole fraction of solvent',
            nudge: '<b>(a)</b> is the classic swap — the solution pressure equals <i>p</i>° × (solvent mole fraction), but the relative lowering equals the solute mole fraction.',
          },
          { label: 'mole fraction of solute', nudge: null },
          { label: 'the vapour pressure of pure solvent', nudge: '<b>(c)</b> confuses a pressure with a dimensionless ratio.' },
          { label: 'molality of the solute', nudge: '<b>(d)</b> confuses mole fraction with molality.' },
        ],
        correct: 1,
        solution: 'From <i>p</i><sub>s</sub> = <i>x</i><sub>1</sub><i>p</i>°, the relative lowering reduces to <i>x</i><sub>2</sub>, the solute mole fraction.',
      },
      {
        t: 'mcq',
        q: 'Which mixture is expected to behave most nearly as an ideal solution?',
        opts: [
          { label: 'Ethanol + water', nudge: '<b>(a)</b> breaks ethanol H-bonds (positive deviation).' },
          { label: 'Acetone + chloroform', nudge: '<b>(b)</b> forms new H-bonds (negative).' },
          { label: 'Benzene + toluene', nudge: null },
          { label: 'Nitric acid + water', nudge: '<b>(d)</b> is the classic maximum-boiling azeotrope (strong negative).' },
        ],
        correct: 2,
        solution: 'Benzene and toluene are structurally similar, so A–A, B–B and A–B attractions are nearly equal ⇒ Δ<sub>mix</sub><i>H</i> ≈ 0, obeys Raoult’s law.',
      },
      {
        t: 'mcq',
        q: 'A large <b>positive</b> deviation from Raoult’s law leads to:',
        opts: [
          { label: 'a maximum-boiling azeotrope', nudge: '<b>(a)</b> reverses the mapping — that belongs to negative deviation.' },
          { label: 'a minimum-boiling azeotrope', nudge: null },
          { label: 'no azeotrope', nudge: '<b>(c)</b> ignores that a large deviation is exactly what produces an azeotrope.' },
          { label: 'an ideal solution', nudge: '<b>(d)</b> is the opposite case: an ideal solution shows no deviation.' },
        ],
        correct: 1,
        solution: 'Positive deviation means higher vapour pressure ⇒ lower boiling point ⇒ a minimum-boiling azeotrope (e.g. 95% ethanol–water).',
      },
      {
        t: 'mcq',
        q: 'For an ideal binary solution of volatile liquids, the vapour in equilibrium is:',
        opts: [
          { label: 'identical in composition to the liquid', nudge: '<b>(a)</b> is true only at an azeotrope, not for an ideal solution.' },
          { label: 'richer in the component with the higher pure vapour pressure', nudge: null },
          { label: 'richer in the component with the lower pure vapour pressure', nudge: '<b>(c)</b> inverts the volatility logic.' },
          { label: 'always pure in the more volatile component', nudge: '<b>(d)</b> overstates it — the vapour is enriched, not pure (that needs repeated distillation).' },
        ],
        correct: 1,
        solution: 'Since <i>y</i><sub><i>i</i></sub> = <i>p</i><sub><i>i</i></sub>/<i>p</i><sub>total</sub> and <i>p</i><sub><i>i</i></sub> = <i>x</i><sub><i>i</i></sub><i>p</i>°<sub><i>i</i></sub>, the component with larger <i>p</i>° contributes disproportionately to the vapour.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mixing up the two Raoult forms.</b> Use <i>p</i> = <i>xp</i>° for each volatile component; use the relative-lowering form only for a non-volatile solute. Check first whether the solute can evaporate.',
          '<b>Solute vs solvent mole fraction.</b> <i>p</i><sub>solution</sub> = <i>p</i>° × <i>x</i><sub>solvent</sub>, but Δ<i>p</i>/<i>p</i>° = <i>x</i><sub>solute</sub>. Write down which mole fraction before plugging in.',
          '<b>Deviation sign reversed.</b> “A–B weaker ⇒ positive; A–B stronger (new H-bond) ⇒ negative.” Anchor with acetone+chloroform = negative.',
          '<b>Azeotrope mapping flipped.</b> Positive deviation → minimum-boiling; negative deviation → maximum-boiling.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> for “type of deviation/azeotrope” questions, never compute — reason from the attractions on mixing, usually hydrogen bonds broken or formed. For vapour-composition questions, remember that for an ideal solution the vapour is always richer in the higher-<i>p</i>° liquid, which eliminates half the options instantly.',
      },
      {
        t: 'protip',
        html: '<b>Sanity check:</b> total vapour pressure of an ideal mixture must lie between <i>p</i>°<sub>A</sub> and <i>p</i>°<sub>B</sub>. If your answer falls outside that range, you have a sign or arithmetic error.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Volatile mixture', note: '<i>p</i><sub>total</sub> = <i>x</i><sub>A</sub><i>p</i>°<sub>A</sub> + <i>x</i><sub>B</sub><i>p</i>°<sub>B</sub> (linear in composition).' },
          { f: 'Non-volatile solute', note: '<i>p</i><sub>s</sub> = <i>x</i><sub>solvent</sub><i>p</i>°; <b>RLVP</b> (<i>p</i>° − <i>p</i><sub>s</sub>)/<i>p</i>° = <i>x</i><sub>solute</sub>.' },
          { f: 'Molar mass', note: '<i>M</i><sub>2</sub> = (<i>w</i><sub>2</sub><i>M</i><sub>1</sub><i>p</i>°)/(<i>w</i><sub>1</sub>(<i>p</i>° − <i>p</i><sub>s</sub>)) (dilute).' },
          { f: 'Vapour composition', note: '<i>y</i><sub><i>i</i></sub> = <i>p</i><sub><i>i</i></sub>/<i>p</i><sub>total</sub> — for an ideal solution, vapour richer in the higher-<i>p</i>° component.' },
          { f: 'Ideal solution', note: 'obeys Raoult at all <i>x</i>; Δ<sub>mix</sub><i>H</i> = 0, Δ<sub>mix</sub><i>V</i> = 0; A–A ≈ B–B ≈ A–B (benzene+toluene, hexane+heptane).' },
          { f: 'Positive deviation', note: 'A–B weaker; Δ<sub>mix</sub><i>H</i>, Δ<sub>mix</sub><i>V</i> > 0; <b>min-boiling</b> azeotrope (95% ethanol–water).' },
          { f: 'Negative deviation', note: 'A–B stronger (new H-bond); Δ<sub>mix</sub><i>H</i>, Δ<sub>mix</sub><i>V</i> < 0; <b>max-boiling</b> azeotrope (68% HNO<sub>3</sub>–water).' },
          { f: 'Link to Henry', note: 'Raoult is Henry’s law with <i>K</i><sub>H</sub> = <i>p</i>°.' },
        ],
        aids: ['“weak makes it leak (↑VP, +ve); strong holds it back (↓VP, −ve).”'],
      },
    ],
  },
];
