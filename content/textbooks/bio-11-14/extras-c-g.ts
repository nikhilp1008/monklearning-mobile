import type { Topic } from '@/lib/textbooks';

/**
 * Biology 11 Chapter 14 (Breathing and Exchange of Gases), Additional topics C to G, word for word from the
 * Class 11 Biology Master Reference (book pp. 861 to 885): C "CO2 Transport: The Haldane Effect and Chloride Shift"
 * (opens at the foot of p. 861, after Addendum B's practice answers; its practice answers end on p. 864),
 * D "Ventilation–Perfusion Matching and Diffusion Capacity" (p. 864 to p. 867), E "Lung Compliance and Surfactant"
 * (p. 868 to p. 871), F "Respiratory Adaptations in Different Environments" (p. 871 to p. 875) and G "What NEET
 * Actually Asks" (the book's "Addendum P", p. 875 to p. 885). Page 886 is the next chapter.
 *
 * Topic indexes: C = 7, D = 8, E = 9, F = 10, G = 11. The book's example headings ("Example C.1 - [NEET Level]
 * Tracing the Chloride Shift") become the example's tag (the bracket) and a bold lead on its question. A table the book
 * prints inside a question (a Column I / Column II list) is set as lines of cells separated by " | ". Scientific names
 * do not occur in these pages. Where the book prints no answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 861–864 ─────────────────────────
  {
    n: 'C',
    title: 'CO2 Transport: The Haldane Effect and Chloride Shift',
    extra: true,
    kalam: 'The chapter gives the bicarbonate reaction and names the Haldane effect and chloride shift as enrichments.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the bicarbonate reaction and names the Haldane effect and chloride shift as enrichments. Both can be asked by name, and the Haldane effect has a specific numerical implication that the chapter states qualitatively but does not quantify: deoxygenated blood carries more CO<sub>2</sub> than oxygenated blood. This additional topic makes both mechanisms examinable.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The Haldane effect (CO<sub>2</sub> side of the Bohr relationship).</b><br>Deoxygenated haemoglobin (Hb) binds CO<sub>2</sub> and H<sup>+</sup> more readily than oxyhaemoglobin (HbO<sub>2</sub>). Specifically:<br>• Deoxygenated Hb is a better H<sup>+</sup> acceptor, so it buffers the H<sup>+</sup> released by the carbonic anhydrase reaction: Hb<sup>−</sup> + H<sup>+</sup> → HHb.<br>• Deoxygenated Hb also forms carbaminohaemoglobin more readily: Hb-NH<sub>2</sub> + CO<sub>2</sub> ⇌ Hb-NHCOO<sup>−</sup> + H<sup>+</sup>.<br>• Both abilities are reduced when Hb is oxygenated.',
      },
      {
        t: 'p',
        html: '<b>Physiological consequence:</b> At the tissues: Blood arriving is deoxygenated → Hb can buffer more H<sup>+</sup> from the carbonic anhydrase reaction and bind more CO<sub>2</sub> → more CO<sub>2</sub> can be transported as bicarbonate and carbaminohaemoglobin.<br><br>At the lungs: Blood arriving is oxygenated → HbO<sub>2</sub> has less capacity to buffer H<sup>+</sup> and to carry CO<sub>2</sub> → the reaction shifts back: HCO<sub>3</sub><sup>−</sup> + H<sup>+</sup> → CO<sub>2</sub> + H<sub>2</sub>O → CO<sub>2</sub> is released for exhalation.',
      },
      {
        t: 'p',
        html: '<b>Quantitative Haldane effect.</b> Each 100 mL of blood unloads about 4 mL of CO<sub>2</sub> in the lungs (the figure NCERT gives). Roughly half of this (about 2 mL per 100 mL) is attributable to the Haldane effect: at the same <i>p</i>CO<sub>2</sub>, deoxygenated blood carries more CO<sub>2</sub> than oxygenated blood. Without it, the net CO<sub>2</sub> transport would fall to about half.',
      },
      {
        t: 'p',
        html: '<b>Chloride shift (Hamburger’s phenomenon).</b><br>As bicarbonate (HCO<sub>3</sub><sup>−</sup>) builds up inside the red blood cell at the tissues, it must leave to maintain electrochemical balance. The chloride shift describes what happens:<br>1. Carbonic anhydrase converts CO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>CO<sub>3</sub> → H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup> inside the RBC.<br>2. HCO<sub>3</sub><sup>−</sup> diffuses out of the RBC into plasma (down its concentration gradient).<br>3. Cl<sup>−</sup> moves into the RBC from plasma to maintain electrical neutrality (the “shift”).<br>4. At the lungs, the process reverses: HCO<sub>3</sub><sup>−</sup> moves back into the RBC, Cl<sup>−</sup> moves out.',
      },
      {
        t: 'p',
        html: 'This exchange is rapid (completes in less than a second) and maintains the Gibbs-Donnan equilibrium across the RBC membrane. Both the chloride shift and the Gibbs-Donnan wording go beyond the NCERT text, which covers only the formation of bicarbonate by carbonic anhydrase.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Tracing the Chloride Shift.</b> At resting tissues, CO<sub>2</sub> diffuses into the blood from cells. Trace the sequence of chemical events inside a red blood cell, naming the enzyme and the ions that move across the membrane.',
        steps: [
          '<b>Step 1: CO<sub>2</sub> enters RBC and is converted.</b><br>CO<sub>2</sub> + H<sub>2</sub>O →<sup>carbonic anhydrase</sup> H<sub>2</sub>CO<sub>3</sub> → H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup>',
          '<b>Step 2: H<sup>+</sup> is buffered by haemoglobin.</b> Deoxygenated Hb acts as a buffer: H<sup>+</sup> + Hb<sup>−</sup> → HHb. This prevents the pH from falling sharply.',
          '<b>Step 3: HCO<sub>3</sub><sup>−</sup> leaves the RBC.</b> HCO<sub>3</sub><sup>−</sup> diffuses out into plasma (down its concentration gradient). This is the chloride shift: to maintain charge balance, Cl<sup>−</sup> moves into the RBC from plasma.',
          '<b>Step 4: At the lungs, all steps reverse.</b> Oxygen binds to Hb, releasing H<sup>+</sup>. H<sup>+</sup> combines with HCO<sub>3</sub><sup>−</sup> (entering from plasma) to form H<sub>2</sub>CO<sub>3</sub>. Carbonic anhydrase converts H<sub>2</sub>CO<sub>3</sub> → CO<sub>2</sub> + H<sub>2</sub>O. CO<sub>2</sub> diffuses out into the alveolus.',
          '<b>Net result.</b> CO<sub>2</sub> from tissues is efficiently carried as HCO<sub>3</sub><sup>−</sup> in plasma, with the chloride shift maintaining ionic balance throughout.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Haldane Effect Calculation.</b> Venous blood carries about 52 mL CO<sub>2</sub> per 100 mL and arterial blood about 48 mL. Of the CO<sub>2</sub> transported (4 mL per 100 mL), about 70% travels as bicarbonate, 20–25% as carbaminohaemoglobin and 7% dissolved. Calculate the CO<sub>2</sub> transported per 100 mL blood and explain how the Haldane effect contributes to this compared with blood that remained oxygenated throughout.',
        steps: [
          '<b>Step 1: CO<sub>2</sub> transported per 100 mL.</b><br>CO<sub>2</sub> in venous blood = 52 mL/100 mL blood<br>CO<sub>2</sub> in arterial blood = 48 mL/100 mL blood<br>Net CO<sub>2</sub> transported = 52 − 48 = 4 mL/100 mL blood',
          '<b>Step 2: Haldane contribution.</b> If blood remained fully oxygenated throughout (no deoxygenation at tissues), the buffering and carbamino-binding capacity of Hb would be reduced. The Haldane effect accounts for roughly half of the net transport, about 2 mL per 100 mL of the 4 mL; without it the net CO<sub>2</sub> transport would fall to about 2 mL per 100 mL. The Haldane effect is therefore a part of the 4 mL actually exchanged, not an extra reserve on top of it.',
          '<b>Clinical check.</b> The Haldane effect means that breathing pure oxygen (which fully saturates haemoglobin) slightly reduces CO<sub>2</sub> carrying capacity, but this is normally compensated by increased ventilation.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Integrated Gas Exchange at Alveolus.</b> Using the Haldane and Bohr effects together, explain why gas exchange at the alveolus is so efficient despite the relatively small pressure gradients.',
        steps: [
          '<b>Step 1: O<sub>2</sub> side (Bohr effect at tissues → unloading).</b> High tissue <i>p</i>CO<sub>2</sub> and H<sup>+</sup> right-shifts the O<sub>2</sub>-Hb curve. At the alveolus (low <i>p</i>CO<sub>2</sub>, higher pH), the curve shifts left. This left shift means Hb has higher affinity for O<sub>2</sub>, facilitating loading even when alveolar <i>p</i>O<sub>2</sub> is not maximal.',
          '<b>Step 2: CO<sub>2</sub> side (Haldane effect at lungs → unloading).</b> Arriving deoxygenated blood (from tissues) has maximal CO<sub>2</sub>-carrying capacity. At the lungs, oxygenation of Hb causes the Haldane effect in reverse: HbO<sub>2</sub> releases its bound CO<sub>2</sub> and H<sup>+</sup>, pushing the carbonic anhydrase reaction toward CO<sub>2</sub> production. This “pushes” CO<sub>2</sub> out of the blood and into the alveolus.',
          '<b>Step 3: Combined efficiency.</b> The Bohr and Haldane effects work as a coordinated pair:<br>• At tissues: CO<sub>2</sub> promotes O<sub>2</sub> unloading (Bohr) AND deoxy-Hb promotes CO<sub>2</sub> loading (Haldane).<br>• At lungs: O<sub>2</sub> promotes CO<sub>2</sub> unloading (Haldane) AND low CO<sub>2</sub> promotes O<sub>2</sub> loading (Bohr).',
          'This cross-coupling means a small pressure gradient achieves a large gas exchange.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the Haldane effect. How does it facilitate CO<sub>2</sub> transport from tissues to lungs?',
            a: 'The Haldane effect: deoxygenated haemoglobin carries more CO<sub>2</sub> (and binds more H<sup>+</sup>) than oxygenated haemoglobin. At tissues, deoxygenated blood has greater capacity to accept CO<sub>2</sub> and H<sup>+</sup>, increasing CO<sub>2</sub> transport. At lungs, oxygenation of Hb promotes release of the bound CO<sub>2</sub> and H<sup>+</sup>, facilitating CO<sub>2</sub> elimination.',
          },
          {
            q: '[CUET] Name the ion that enters red blood cells during the chloride shift. State whether this movement occurs at the tissues or at the lungs.',
            a: 'Chloride ion (Cl<sup>−</sup>) enters the RBC during the chloride shift. This occurs at the tissues as HCO<sub>3</sub><sup>−</sup> leaves the RBC; the process reverses at the lungs.',
          },
          {
            q: '[NEET] Which enzyme catalyzes the conversion of CO<sub>2</sub> and water to carbonic acid? Where is this enzyme located?',
            a: 'Carbonic anhydrase, located inside red blood cells (erythrocytes).',
          },
          {
            q: '[NEET A-R] Assertion: The chloride shift is important for maintaining electrical neutrality during bicarbonate transport. Reason: As HCO<sub>3</sub><sup>−</sup> leaves the RBC, Cl<sup>−</sup> enters to replace it, maintaining the Gibbs-Donnan equilibrium. <b>(a)</b> A and R true, R correctly explains A <b>(b)</b> A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
            a: '(a) Both true and R correctly explains A. The chloride shift maintains electrical neutrality by exchanging HCO<sub>3</sub><sup>−</sup> (out) for Cl<sup>−</sup> (in) across the RBC membrane.',
          },
          {
            q: '[NEET] A patient has blood that remains fully oxygenated throughout circulation. Predict the effect on (a) CO<sub>2</sub> transport capacity and (b) O<sub>2</sub> delivery to tissues.',
            a: '(a) CO<sub>2</sub> transport capacity would decrease, because the Haldane effect (the extra CO<sub>2</sub> and H<sup>+</sup> binding of deoxygenated Hb) would be lost, roughly half of the ≈4 mL CO<sub>2</sub> normally exchanged per 100 mL of blood. (b) O<sub>2</sub> delivery to the tissues would fall sharply: blood that never becomes deoxygenated has no O<sub>2</sub> unloaded, so the tissues become hypoxic despite 100% arterial saturation.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 864–867 ─────────────────────────
  {
    n: 'D',
    title: 'Ventilation–Perfusion Matching and Diffusion Capacity',
    extra: true,
    kalam: 'V/Q mismatch is the most common cause of impaired gas exchange in lung disease, and it goes beyond the NCERT text.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter lists the three factors affecting diffusion rate (gradient, solubility, thickness) but never brings the ventilation–perfusion ratio (V/Q) onto the stage. V/Q mismatch is the most common cause of impaired gas exchange in lung disease, and it goes beyond the NCERT text. This additional topic fills the gap.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Ventilation–Perfusion ratio (V/Q).</b><br>• Ventilation (<i>V</i>) = fresh air reaching alveoli per minute (about 4.2 L/min at rest, from Additional topic A).<br>• Perfusion (<i>Q</i>) = blood flow through pulmonary capillaries per minute (≈ 5 L/min at rest).<br>• Normal <i>V</i>/<i>Q</i> = <frac><num>4.2</num><den>5</den></frac> ≈ 0.8. (Normal <i>V</i>/<i>Q</i> is usually quoted as about 0.8; a ventilation of 4.5 L/min would give 0.9.)',
      },
      {
        t: 'p',
        html: 'The ratio summarizes how well-matched ventilation and perfusion are at each alveolus.',
      },
      {
        t: 'table',
        title: 'Interpretation of V/Q',
        head: ['V/Q', 'Condition', 'Alveolar <i>p</i>O<sub>2</sub>', 'Alveolar <i>p</i>CO<sub>2</sub>', 'Gas Exchange'],
        rows: [
          ['0.8 (normal)', 'Ideal', '~104 mmHg', '~40 mmHg', 'Optimal'],
          ['0 (shunt)', 'Blood to unventilated alveolus', 'Low (mixes with venous)', 'High', 'No O<sub>2</sub> gain, no CO<sub>2</sub> loss'],
          ['∞ (dead space)', 'Ventilated but no blood flow', 'High (~inspired air)', 'Low (~inspired air)', 'No exchange possible'],
        ],
      },
      {
        t: 'p',
        html: '<b>Shunt (V/Q = 0).</b> Blood passes through an alveolus that is not ventilated (blocked airway or collapsed lung). No O<sub>2</sub> can be added and no CO<sub>2</sub> removed. A true shunt is refractory to oxygen therapy: it cannot be corrected by increasing inspired O<sub>2</sub> alone, because the blood simply bypasses the gas exchange surface.',
      },
      {
        t: 'p',
        html: '<b>Dead space (V/Q = ∞).</b> An alveolus is ventilated but not perfused (no blood flow, e.g., pulmonary embolism). Fresh air reaches it but cannot exchange with blood. Dead space ventilation is “wasted” ventilation.',
      },
      {
        t: 'p',
        html: '<b>Normal values.</b> In a healthy lung, ventilation and perfusion are well matched (V/Q ≈ 0.8), with only a small shunt (about 2% of the cardiac output). Separately, the anatomical dead space takes up about 30% of each breath (150 mL of a 500 mL breath, as in Additional topic A).',
      },
      {
        t: 'p',
        html: '<b>Diffusing capacity (DLCO).</b> The lung’s ability to transfer gas across the membrane is measured as DLCO, the volume of gas (traditionally CO, which binds haemoglobin like O<sub>2</sub> but with known kinetics) transferred per minute per mmHg pressure gradient. Normal DLCO ≈ 25 mL CO/min/mmHg. It decreases in:<br>• Emphysema (surface area loss)<br>• Pulmonary fibrosis (membrane thickening)<br>• Anaemia (less Hb to bind the gas)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Identifying V/Q Abnormalities.</b> A patient with pulmonary embolism has a blocked pulmonary artery branch. Describe what happens to V/Q ratio in the affected region and explain why this causes hypoxaemia.',
        steps: [
          '<b>Step 1: V/Q at the affected region.</b> No blood flows through the blocked vessel → perfusion (Q) = 0. Ventilation (V) continues → V is normal.<br><i>V</i>/<i>Q</i> = <frac><num><i>V</i></num><den>0</den></frac> = ∞ (dead space)',
          '<b>Step 2: Gas composition in dead space alveolus.</b> Since no blood reaches the alveolus, no gas exchange occurs. The alveolar gas composition approaches inspired air: <i>p</i>O<sub>2</sub> ≈ 150 mmHg (humidified inspired), <i>p</i>CO<sub>2</sub> ≈ 0 mmHg.',
          '<b>Step 3: Effect on systemic oxygenation.</b> This dead-space region is “wasted”: it ventilates but does not oxygenate blood. The blood it should have carried is pushed through the rest of the lung, where perfusion now exceeds ventilation (low <i>V</i>/<i>Q</i>); that poorly oxygenated blood lowers the systemic O<sub>2</sub> (hypoxaemia). The body raises ventilation and cardiac output to compensate.',
          '<b>Clinical note.</b> Pulmonary embolism causes increased physiological dead space (V/Q = ∞ regions), not shunt. This is why measuring dead space (e.g., via the Bohr method using CO<sub>2</sub>) can help diagnose embolism.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Asthma: V/Q Mismatch.</b> In an asthma attack, airway obstruction causes uneven ventilation across different alveoli. Describe how this creates V/Q mismatch and why giving supplemental oxygen alone may not fully correct hypoxaemia in severe asthma.',
        steps: [
          '<b>Step 1: V/Q in obstructed regions.</b> Airways are narrowed or blocked → ventilation reduced or absent in affected regions → V decreases. Blood flow (Q) continues (heart keeps pumping).<br><i>V</i>/<i>Q</i> < 0.8 (low V/Q, approaches shunt)',
          '<b>Step 2: Gas composition in low V/Q regions.</b> Reduced ventilation means less fresh air reaches these alveoli. Alveolar <i>p</i>O<sub>2</sub> falls (approaches mixed venous <i>p</i>O<sub>2</sub> of ~40 mmHg) and <i>p</i>CO<sub>2</sub> rises. Blood leaving these regions is poorly oxygenated.',
          '<b>Step 3: The supplemental O<sub>2</sub> problem.</b> Giving 100% O<sub>2</sub> raises alveolar <i>p</i>O<sub>2</sub> even in low-V/Q regions and usually improves oxygenation. However, if bronchoconstriction is severe, regions that receive almost no fresh air behave like a shunt and are not corrected by O<sub>2</sub>. The underlying obstruction itself must be relieved. This is why severe asthma requires bronchodilators (to open airways) AND oxygen therapy, not oxygen alone.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>DLCO in Disease.</b> Explain why DLCO is reduced in (a) emphysema, (b) pulmonary fibrosis, and (c) anaemia, even though all three conditions affect gas exchange differently.',
        steps: [
          '<b>Step 1: Emphysema.</b> Emphysema destroys alveolar walls → surface area available for diffusion decreases. DLCO measures how much gas crosses the membrane per unit time per mmHg gradient; with fewer alveoli, fewer molecules cross → DLCO falls.',
          '<b>Step 2: Pulmonary fibrosis.</b> Fibrosis thickens the diffusion membrane. As per the chapter’s own principle (rate ∝ <frac><num>1</num><den>thickness</den></frac>), a thicker barrier slows diffusion → DLCO falls.',
          '<b>Step 3: Anaemia.</b> DLCO is measured using carbon monoxide (CO), which binds haemoglobin inside RBCs. In anaemia there are fewer RBCs and less haemoglobin available to accept the CO molecules at the far end of the diffusion path. Even though the membrane is normal and perfusion is normal, the “sink” for CO is reduced → DLCO falls proportionally to [Hb].',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define the ventilation-perfusion (V/Q) ratio. What is its normal value in a healthy adult lung?',
            a: 'V/Q = <frac><num>alveolar ventilation</num><den>pulmonary blood flow</den></frac> (both in mL/min). Normal value ≈ 0.8 (approximately 4.2 L/min alveolar ventilation ÷ 5 L/min cardiac output).',
          },
          {
            q: '[NEET] Distinguish between shunt and physiological dead space, giving one example of each.',
            a: 'Shunt (V/Q = 0): blood reaches alveoli that are not ventilated. Example: complete blockage of an airway (for example by a foreign body) or a collapsed lung segment that is still perfused. An asthma attack gives a low V/Q, not zero. Physiological dead space (V/Q = ∞): alveoli are ventilated but not perfused. Example: pulmonary embolism (blocked pulmonary artery branch).',
          },
          {
            q: '[CUET] State two conditions that reduce DLCO and explain the mechanism in each case.',
            a: '(a) Emphysema: destruction of alveolar walls reduces surface area for diffusion. (b) Pulmonary fibrosis: thickening of the diffusion membrane increases diffusion distance. (c) Anaemia: reduced [Hb] means fewer binding sites for the test gas (CO), reducing the “sink” at the capillary end.',
          },
          {
            q: '[NEET] A patient with COPD has areas of both airway obstruction (low V/Q) and destroyed alveolar walls (increased dead space). Explain why this causes more severe hypoxaemia than either abnormality alone.',
            a: 'Airway obstruction creates regions with low V/Q (blood passes through but is poorly oxygenated). Destroyed alveolar walls create dead space (ventilation goes to regions with no perfusion). Both problems reduce the overall effectiveness of gas exchange, and the body cannot compensate as easily because both ventilation and perfusion are compromised. The combination both lowers blood O<sub>2</sub> (hypoxaemia) and hinders the removal of CO<sub>2</sub>.',
          },
          {
            q: '[NEET A-R] Assertion: In a pulmonary embolism, increasing inspired oxygen concentration fully corrects hypoxaemia. Reason: Dead-space alveoli are ventilated but not perfused. <b>(a)</b> A and R true, R correctly explains A <b>(b)</b> A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
            a: '(d) A is false, R is true. Increasing inspired O<sub>2</sub> does NOT fully correct hypoxaemia in PE, it only partially compensates, because the problem is the loss of blood flow and the resulting V/Q inequality in the remaining lung. R is true: dead-space alveoli are ventilated but not perfused, so they exchange no gas with the blood (the hypoxaemia comes from the V/Q inequality elsewhere).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 868–871 ─────────────────────────
  {
    n: 'E',
    title: 'Lung Compliance and Surfactant',
    extra: true,
    kalam: 'Surfactant production begins around the 24th week of gestation but reaches adequate levels only around the 35th week.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter explains the mechanism of inspiration and expiration (volume change → pressure change → airflow) but mentions <b>lung compliance</b> (how easily the lungs expand under pressure) only in passing (fibrosis “reducing compliance”) and never defines it, and it does not address why <b>surfactant</b> is essential. These are examinable, especially for understanding why premature babies develop Infant Respiratory Distress Syndrome (IRDS), a topic that builds directly on the chapter’s physics of breathing.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Compliance (<i>C</i>).</b><br>Lung compliance is defined as the change in lung volume per unit change in transpulmonary pressure (the pressure difference between inside and outside the lung):<br><i>C</i> = <frac><num>Δ<i>V</i></num><den>Δ<i>P</i></den></frac><br>Normal lung compliance ≈ 200 mL/cm H<sub>2</sub>O (the lungs expand 200 mL for every 1 cm H<sub>2</sub>O increase in pressure).',
      },
      {
        t: 'p',
        html: '<b>High compliance (distensible lung).</b> The lung expands easily with small pressure changes. Seen in emphysema: the walls are destroyed and the lung is overly stretchy, like an overinflated balloon. The problem is not that the lung won’t expand, but that it collapses back inefficiently (reduced elastic recoil) and airway collapse occurs during expiration.',
      },
      {
        t: 'p',
        html: '<b>Low compliance (stiff lung).</b> The lung resists expansion. Seen in pulmonary fibrosis (scarred, thickened lung tissue): it takes more pressure to inflate, so breathing requires significantly more work.',
      },
      {
        t: 'p',
        html: '<b>Surfactant: the physics.</b><br>The inner surface of every alveolus is covered with a thin liquid film. Surface tension (the cohesive force between liquid molecules at an air–liquid interface) acts to collapse the alveolus: smaller alveoli experience greater inward force (Law of Laplace: pressure ∝ <frac><num>surface tension</num><den>radius</den></frac>). Without intervention, small alveoli would empty into large ones during expiration, and the lungs would be very hard to reinflate.',
      },
      {
        t: 'p',
        html: 'Surfactant (a mixture of phospholipids, mainly dipalmitoylphosphatidylcholine, and proteins) reduces surface tension. Its critical properties:<br>• <b>Surface tension reduction</b>: reduces the inward collapsing force, lowering the pressure needed to keep alveoli open.<br>• <b>Variability with radius</b>: surfactant concentration is inversely proportional to alveolar surface area. Smaller alveoli (higher Laplace pressure) receive more concentrated surfactant → surface tension falls MORE in small alveoli, equalizing pressure across all alveolar sizes.<br>• <b>Prevents alveolar collapse</b>: allows alveoli to remain stable at end-expiration, so the lung does not have to be fully reinflated from zero with every breath.',
      },
      {
        t: 'p',
        html: '<b>Why premature babies cannot breathe (IRDS).</b><br>Surfactant production begins around the 24th week of gestation but reaches adequate levels only around the 35th week. A baby born at 28 weeks has insufficient surfactant. The lungs are stiff (low compliance), and alveoli collapse at end-expiration. Each breath requires enormous muscular effort just to reopen the alveoli, and the baby simply exhausts. Treatment: exogenous surfactant given via endotracheal tube, plus mechanical ventilation support.',
      },
      {
        t: 'p',
        html: '<b>Law of Laplace for alveoli:</b><br><i>P</i> = <frac><num>2<i>T</i></num><den><i>r</i></den></frac><br>where <i>P</i> is the pressure inside the alveolus, <i>T</i> is surface tension, and <i>r</i> is the radius. Without surfactant, as <i>r</i> decreases (small alveoli), <i>P</i> increases, meaning small alveoli have higher pressure than large ones, and they empty into large alveoli. Surfactant prevents this by reducing <i>T</i> in proportion to the surface area change. This is a simplified account, enough for NEET; real alveoli also steady one another by being joined to their neighbours.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>Compliance in Emphysema vs Fibrosis.</b> A patient with emphysema has lung compliance of 350 mL/cm H<sub>2</sub>O, while a patient with pulmonary fibrosis has compliance of 100 mL/cm H<sub>2</sub>O. Explain why their compliance values differ and how this affects their breathing effort.',
        steps: [
          '<b>Step 1: Normal compliance.</b> Normal ≈ 200 mL/cm H<sub>2</sub>O.',
          '<b>Step 2: Emphysema compliance = 350 mL/cm H<sub>2</sub>O (high/distensible).</b> Emphysema destroys elastic tissue in alveolar walls → lungs are overdistensible. Small pressure changes cause large volume changes: the lungs are “floppy.” However, the elastic recoil that normally drives expiration is lost, so expiration becomes difficult (air trapping). Breathing effort is increased during expiration.',
          '<b>Step 3: Fibrosis compliance = 100 mL/cm H<sub>2</sub>O (low/stiff).</b> Fibrosis thickens the lung tissue and makes it rigid. The lungs resist expansion → it takes more pressure to achieve the same volume change. Breathing effort is increased during inspiration (the diaphragm and intercostals must work harder against a stiff wall).',
          '<b>Comparison.</b> Both conditions impair breathing, but for opposite mechanical reasons: emphysema is an expiration problem (loss of recoil), fibrosis is an inspiration problem (stiff tissue). Both reduce the efficiency of ventilation.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Why Surfactant Matters.</b> Explain, using the Law of Laplace, why surfactant is essential for preventing alveolar collapse at end-expiration.',
        steps: [
          '<b>Step 1: Without surfactant.</b> By Laplace: <i>P</i> = <frac><num>2<i>T</i></num><den><i>r</i></den></frac>. At end-expiration, alveolar radius <i>r</i> decreases. Without surfactant, surface tension <i>T</i> remains constant → pressure <i>P</i> increases as radius decreases. A small alveolus (small <i>r</i>) has higher internal pressure than a large alveolus. Air flows from high to low pressure → small alveoli empty into large ones → progressive alveolar collapse.',
          '<b>Step 2: With surfactant.</b> Surfactant reduces <i>T</i> in inverse proportion to surface area. Smaller alveoli have greater surfactant concentration per unit area → <i>T</i> decreases more in small alveoli. Applying Laplace to a small alveolus with reduced <i>T</i>: even with smaller <i>r</i>, the reduced <i>T</i> compensates, keeping <i>P</i> approximately equal in alveoli of different sizes. No net flow between alveoli → stability is maintained.',
          '<b>Step 3: Clinical consequence.</b> Without surfactant, alveoli would require enormous pressure to reinflate after each expiration. The first breath after birth would need a far greater opening pressure; surfactant lowers it, so normal breathing is feasible from the very first breath.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>IRDS Pathophysiology.</b> A premature infant born at 28 weeks gestation develops Infant Respiratory Distress Syndrome (IRDS). Explain the sequence of events that leads to breathing difficulty in this infant.',
        steps: [
          '<b>Step 1: Surfactant deficiency.</b> Type II pneumocytes (alveolar epithelial cells) produce surfactant. These cells mature around weeks 24–35. At 28 weeks, surfactant production is insufficient.',
          '<b>Step 2: High surface tension.</b> Without adequate surfactant, surface tension in the alveoli is high → by Laplace, alveoli with small radius have very high internal pressure → alveoli collapse at end-expiration.',
          '<b>Step 3: Low compliance.</b> Collapsed alveoli require very high inspiratory pressure to reopen. The infant’s diaphragm and intercostals (immature and weak) cannot generate sufficient pressure → inadequate lung expansion.',
          '<b>Step 4: Hypoxaemia and exhaustion.</b> Poorly expanded lungs mean reduced gas exchange surface → hypoxaemia and hypercapnia develop rapidly. The infant spends enormous energy on each labored breath → respiratory muscles fatigue → respiratory failure without intervention.',
          '<b>Management.</b> Exogenous surfactant therapy (via endotracheal tube) and mechanical ventilation (to maintain alveolar patency until the infant’s own surfactant production matures). Antenatal corticosteroids given to the mother can accelerate fetal surfactant production when preterm delivery is anticipated.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define lung compliance. State whether compliance is increased or decreased in emphysema and give one reason for this change.',
            a: 'Lung compliance = change in lung volume per unit change in transpulmonary pressure (<i>C</i> = <frac><num>Δ<i>V</i></num><den>Δ<i>P</i></den></frac>). In emphysema, compliance is increased (lungs are overdistensible) because elastic tissue in the alveolar walls is destroyed.',
          },
          {
            q: '[NEET] State two functions of pulmonary surfactant.',
            a: '(a) Reduces surface tension in the alveoli, preventing alveolar collapse. (b) More concentrated in small alveoli than large ones, equalizing pressure and preventing air flow from small to large alveoli.',
          },
          {
            q: '[CUET] Using the Law of Laplace (<i>P</i> = <frac><num>2<i>T</i></num><den><i>r</i></den></frac>), explain why surfactant is necessary for maintaining alveolar stability.',
            a: 'Without surfactant, surface tension <i>T</i> is constant. By <i>P</i> = <frac><num>2<i>T</i></num><den><i>r</i></den></frac>, smaller alveoli have higher internal pressure and would empty into larger ones, causing collapse. Surfactant reduces <i>T</i> more in small alveoli, keeping <i>P</i> equal across sizes and maintaining alveolar stability.',
          },
          {
            q: '[NEET] At what gestational age does surfactant production reach adequate levels? What respiratory disorder does premature birth cause?',
            a: 'Adequate surfactant production is reached around 35 weeks of gestation. Premature birth causes Infant Respiratory Distress Syndrome (IRDS).',
          },
          {
            q: '[NEET A-R] Assertion: A premature infant with IRDS has low lung compliance. Reason: Lack of surfactant causes increased surface tension, making the lungs stiff and difficult to inflate. <b>(a)</b> A and R true, R correctly explains A <b>(b)</b> A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
            a: '(a) Both true and R correctly explains A. Low surfactant → high surface tension → stiff lungs (low compliance) → difficult inflation. This is the pathophysiology of IRDS exactly.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 871–875 ─────────────────────────
  {
    n: 'F',
    title: 'Respiratory Adaptations in Different Environments',
    extra: true,
    kalam: 'Birds have one of the most efficient respiratory systems among vertebrates.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter names the respiratory organs across the animal kingdom (earthworm, insects, fish, birds, mammals) and meets high altitude in Topic 04 (thin air and acclimatisation). It does not systematically compare the adaptations that allow different animals to thrive in radically different environments: deep sea, high altitude, apnea diving. These comparisons go beyond the NCERT text but help with comparative-physiology questions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'Respiratory solutions to three challenges',
        head: ['Environment', 'Primary Challenge', 'Key Adaptation'],
        rows: [
          ['High altitude (thin air)', 'Low atmospheric <i>p</i>O<sub>2</sub>', '↑RBC count, ↑Hb, ↑ventilation, ↑2,3-BPG'],
          ['Deep sea (high pressure)', 'High ambient pressure (nitrogen absorption, lung compression)', '↓ lung volume, ↓ O<sub>2</sub> consumption, breath-hold diving'],
          ['Flight at altitude (birds)', 'Efficient O<sub>2</sub> delivery during flight', 'Unidirectional airflow through lungs, air sacs'],
        ],
      },
      {
        t: 'p',
        html: '<b>High-altitude adaptations:</b><br>1. <b>Immediate (hours):</b> Hyperventilation in low-O<sub>2</sub> conditions: increased respiratory rate and depth driven by the carotid bodies sensing low arterial <i>p</i>O<sub>2</sub>. Normally CO<sub>2</sub> and H<sup>+</sup> dominate the drive to breathe and the role of O<sub>2</sub> is minor, so this is the exception.<br>2. <b>Early and sustained (within 1–2 days):</b> Increased concentration of 2,3-bisphosphoglycerate (2,3-BPG) in RBCs, which shifts the O<sub>2</sub>-Hb dissociation curve right, facilitating O<sub>2</sub> unloading at the tissues despite reduced arterial <i>p</i>O<sub>2</sub>.<br>3. <b>Short-term (days):</b> Increased cardiac output and heart rate to deliver more blood.<br>4. <b>Medium-term (weeks):</b> Increased RBC production (stimulated by erythropoietin from kidneys) → increased [Hb] → increased O<sub>2</sub>-carrying capacity.<br>5. <b>Long-term:</b> Increased capillary density in muscles.',
      },
      {
        t: 'p',
        html: '<b>Diving mammals (apnea adaptation):</b><br>Mammals that dive (whales, dolphins, seals, humans during breath-hold diving) face a different problem: they must carry all their oxygen with them and use it sparingly.<br>1. <b>Bradycardia:</b> Heart rate drops dramatically (from about 100 to about 10–20 beats/min in a diving seal): the “diving reflex.”<br>2. <b>Peripheral vasoconstriction:</b> Blood flow is shunted away from the skin, gut, kidneys and muscles to the brain and heart; the muscles work largely on the O<sub>2</sub> stored in their myoglobin.<br>3. <b>Myoglobin-bound O<sub>2</sub>:</b> High concentrations of myoglobin (an O<sub>2</sub>-binding protein similar to Hb but in muscle) release O<sub>2</sub> during extended dives.<br>4. <b>Lung collapse:</b> Diving mammals’ rib cages are flexible enough to allow lung collapse at depth, preventing nitrogen absorption (which causes decompression sickness) and protecting against pressure effects. Air is compressed into the upper airways.<br>5. <b>Low metabolic rate:</b> Seals (and other diving mammals) can reduce metabolic rate by 20–30% during dives, extending dive duration.',
      },
      {
        t: 'p',
        html: '<b>Bird respiratory system: one of the most efficient</b><br>Birds have one of the most efficient respiratory systems among vertebrates. Unlike mammalian lungs (which have dead-end alveoli), bird lungs have rigid parabronchi through which air flows in one direction. Air sacs act as bellows, creating unidirectional flow. Key advantages:<br>• Air flows through the parabronchi in the same direction during both inspiration and expiration: there is no dead-end back-and-forth mixing of stale and fresh air.<br>• Blood capillaries cross the parabronchi in a cross-current arrangement with the one-way airflow, so the air reaching the exchange surface is always fresh and O<sub>2</sub>-rich; this makes the avian lung more efficient than the mammalian lung.<br>• Birds can fly at altitudes where mammals would be hypoxic because their O<sub>2</sub> extraction is so efficient.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level',
        q: '<b>High-Altitude Acclimatization.</b> A mountaineer ascends from sea level to 5000 m altitude over 10 days. Describe the sequence of physiological adaptations, identifying the time scale of each and the underlying mechanism.',
        steps: [
          '<b>Step 1: Immediate (hours after ascent).</b> Atmospheric <i>p</i>O<sub>2</sub> falls from ~159 mmHg to roughly half that value at 5000 m. Alveolar <i>p</i>O<sub>2</sub> drops to about 40–45 mmHg (from 104 mmHg). Carotid bodies detect falling arterial <i>p</i>O<sub>2</sub> → hyperventilation: respiratory rate and tidal volume increase. This is the body’s first line of defense.',
          '<b>Step 2: First 1–2 days.</b> Continued hyperventilation. Blood <i>p</i>CO<sub>2</sub> falls (from ~40 to ~25 mmHg), causing respiratory alkalosis (blood becomes more alkaline). The kidneys compensate by excreting bicarbonate over several days. Within these first days the 2,3-BPG concentration in RBCs also rises; 2,3-BPG binds to Hb and shifts the O<sub>2</sub>-Hb dissociation curve right, reducing Hb’s affinity for O<sub>2</sub> and facilitating O<sub>2</sub> unloading at tissues despite the lower arterial <i>p</i>O<sub>2</sub>.',
          '<b>Step 3: First 1–4 weeks.</b> Erythropoietin (EPO) secretion from kidneys increases in response to tissue hypoxia. Bone marrow produces more red blood cells → [Hb] rises from ~14–15 g/dL to ~18–20 g/dL. Total oxygen-carrying capacity of blood increases proportionally.',
          '<b>Step 4: Several weeks onward.</b> At the tissue level, capillary density in muscles may also increase.',
          '<b>Result.</b> A fully acclimatized person at 5000 m regains a near-normal arterial O<sub>2</sub> content (because [Hb] is higher), although arterial saturation stays below normal (about 80–85%) and maximal exercise capacity remains reduced compared to sea level.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Diving Mammal Adaptations.</b> Explain why a seal can hold its breath for 20–30 minutes while a human struggles for 2–3 minutes, listing at least four structural or functional adaptations.',
        steps: [
          '<b>Step 1: Oxygen storage.</b> The seal has higher [Hb] and dramatically higher myoglobin concentration in muscle (5–10× human levels). Myoglobin releases O<sub>2</sub> only under very low <i>p</i>O<sub>2</sub> conditions, making it available during the late stages of a long dive when blood O<sub>2</sub> is nearly depleted.',
          '<b>Step 2: Oxygen conservation (diving reflex).</b> Upon submersion, the seal experiences:<br>• Bradycardia: heart rate drops from about 100 to about 10–20 beats/min.<br>• Massive peripheral vasoconstriction: blood flow to skin, kidneys, and gut ceases almost entirely.<br>• Blood is shunted mainly to the brain and heart (organs most sensitive to hypoxia); the working muscles rely largely on their myoglobin store.<br>This dramatically reduces total O<sub>2</sub> consumption.',
          '<b>Step 3: Lung adaptations.</b> The seal’s flexible rib cage allows the lungs to collapse at depth, forcing air into the upper respiratory tract (trachea and nasal passages) where no gas exchange occurs. This prevents:<br>• Decompression sickness (nitrogen not absorbed under pressure)<br>• Pressure-related lung damage',
          '<b>Step 4: Metabolic suppression.</b> Seals can reduce their metabolic rate by 20–30% during voluntary dives, further stretching their O<sub>2</sub> stores.',
          '<b>Result.</b> Combined, these adaptations allow the seal to use its stored O<sub>2</sub> over 20–30 minutes rather than 2–3 minutes. Human breath-hold divers (trained) can reach 5–10 minutes through voluntary bradycardia and splenic contraction (releasing stored RBCs), but they lack the myoglobin and structural adaptations of true diving mammals.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Why Bird Lungs Are Superior.</b> Compare the avian and mammalian respiratory systems, explaining why birds can sustain higher metabolic rates (and fly at higher altitudes) than mammals.',
        steps: [
          '<b>Step 1: Mammalian lung design.</b> In mammals, air enters through bronchioles → dead-end alveoli where gas exchange occurs → air is exhaled back through the same pathway. Fresh air and stale air mix in the airways, so the air reaching the alveoli is already partly mixed with air left over from the last breath.',
          '<b>Step 2: Avian lung design.</b> Air flows through parabronchi in one direction. Air sacs at the front and back act as bellows. A single breath of fresh air takes two cycles to pass through: it enters the posterior air sacs on the first inspiration, passes through the parabronchi on the first expiration, moves to the anterior air sacs on the next inspiration, and is expelled on the next expiration. Air therefore flows through the parabronchi in the same direction during both inspiration and expiration.',
          '<b>Step 3: Cross-current exchange.</b> In the parabronchi, blood capillaries cross the airflow rather than running back and forth with it. This means:<br>• Air reaching the exchange surface is continuously renewed and stays rich in O<sub>2</sub>, because air never reverses direction through the parabronchi.<br>• A gradient is maintained for O<sub>2</sub> along the whole parabronchus, so the blood can be loaded efficiently.',
          '<b>Step 4: Efficiency comparison.</b> Because of this arrangement, the avian lung extracts O<sub>2</sub> more efficiently than the mammalian lung. This efficiency allows:<br>• Sustained high metabolic rates (flight burns enormous energy).<br>• High-altitude flight: birds can fly at heights where mammals become hypoxic.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name two physiological adaptations that help a person acclimatize to high altitude over days to weeks.',
            a: '(a) Increased RBC production (triggered by erythropoietin), raising [Hb] and O<sub>2</sub>-carrying capacity. (b) Increased 2,3-BPG in RBCs, shifting the O<sub>2</sub>-Hb dissociation curve right to facilitate O<sub>2</sub> unloading at tissues.',
          },
          {
            q: '[NEET] List three adaptations of diving mammals that conserve oxygen during extended breath-hold diving.',
            a: '(a) Bradycardia (heart rate drops to 10–20 beats per minute): reduces cardiac O<sub>2</sub> consumption. (b) Peripheral vasoconstriction: shunts blood away from non-essential tissues, conserving O<sub>2</sub> for brain and heart. (c) High myoglobin concentration in muscle: stores O<sub>2</sub> in muscle tissue for release during extended dives.',
          },
          {
            q: '[CUET] Compare the pathway of air in mammalian and avian respiratory systems, identifying one structural feature that makes the avian system more efficient.',
            a: 'Mammals: air enters → dead-end alveoli → exhaled through same pathway (bidirectional, some mixing). Birds: air enters posterior air sac → passes through parabronchi (unidirectional) → anterior air sac → exhaled (over two breath cycles). The structural advantage: unidirectional airflow combined with cross-current exchange means fresh, O<sub>2</sub>-rich air keeps meeting the blood along the parabronchus, extracting more O<sub>2</sub>.',
          },
          {
            q: '[NEET] What is the role of 2,3-BPG in high-altitude adaptation?',
            a: '2,3-BPG binds to deoxyhaemoglobin (not oxyhaemoglobin) and reduces Hb’s affinity for O<sub>2</sub>, shifting the dissociation curve right. At high altitude (low arterial <i>p</i>O<sub>2</sub>), this allows tissues to extract more O<sub>2</sub> from the blood despite reduced O<sub>2</sub> loading at the lungs.',
          },
          {
            q: '[NEET A-R] Assertion: Birds can fly at higher altitudes than mammals. Reason: Bird lungs have unidirectional airflow through parabronchi with cross-current exchange, allowing more efficient oxygen extraction. <b>(a)</b> A and R true, R correctly explains A <b>(b)</b> A and R true, R does not explain A <b>(c)</b> A true, R false <b>(d)</b> A false, R true',
            a: '(a) Both true and R correctly explains A. The avian parabronchial system with unidirectional flow and cross-current exchange is biomechanically superior to the mammalian alveoli system, enabling birds to sustain the extreme metabolic demands of flight and to fly at altitudes where mammals cannot maintain adequate oxygenation.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G (the book’s Addendum P) · pp. 875–885 ─────────────────────────
  {
    n: 'G',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET recycles a handful of question shapes across sessions.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Across the NEET/AIPMT questions analysed from this chapter, the distribution across the chapter’s topics is uneven and revealing (the book’s estimate from past papers, not official figures).',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Weighting signal'],
        rows: [
          [
            '<b>Respiratory volumes & capacities</b> (TV, IRV, ERV, RV, IC, EC, FRC, VC, TLC)',
            'Highest',
          ],
          [
            '<b>Gas transport</b> (O<sub>2</sub>–Hb, CO<sub>2</sub> as bicarbonate, carbonic anhydrase, Bohr effect, percentages)',
            'Very high',
          ],
          [
            '<b>Regulation of respiration</b> (medulla, pons, CO<sub>2</sub>/H<sup>+</sup> drive, chemosensitive area)',
            'Moderate–high',
          ],
          ['<b>Disorders</b> (asthma, emphysema, occupational fibrosis)', 'Moderate'],
          [
            '<b>Mechanism of breathing</b> (inspiration active, expiration passive; diaphragm; pressure gradients)',
            'Moderate',
          ],
          [
            '<b>Anatomy of airway & thoracic cage</b> (epiglottis, cartilaginous rings, thoracic boundaries, diffusion membrane)',
            'Moderate',
          ],
          ['<b>Partial pressures & diffusion direction</b>', 'Lower, but high-stakes when it appears'],
          ['<b>Animal respiratory organs</b>', 'Lower'],
        ],
      },
      {
        t: 'p',
        html: '<b>Key observation:</b> Volumes/capacities and gas-transport percentages are the two largest clusters in the book’s estimate from past papers (not official figures), so they repay revision first.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: 'NEET recycles a handful of question shapes across sessions. Recognising the shape tells you the approach before you read the stem.',
      },
      { t: 'p', html: '<b>Archetype 1: Direct Recall / Fact-Definition</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A one-line question asking for a single correct value, label, or definition. No manipulation required.<br><b>Approach:</b> These are pure-memory items. The distractors are usually plausible wrong numbers or near-synonyms.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Every 100 mL of oxygenated blood delivers approximately how many mL of O<sub>2</sub> to the tissues under normal physiological conditions?<br>(a) 5 mL<br>(b) 25 mL<br>(c) 50 mL<br>(d) More than 50 mL',
        steps: ['NCERT canon states ~5 mL O<sub>2</sub> per 100 mL oxygenated blood. The other three values are inflated distractors.'],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 2: “Which Statement Is Correct / Incorrect”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A statement is given and the option set is “correct/incorrect.” Several consecutive items in a paper are often of this type. Exactly one statement in the stem is right or wrong.<br><b>Approach:</b> Read the stem and hold it up against the NCERT table or definition. The distractors are typically single-term substitutions (e.g., “carbaminohaemoglobin 90 %” instead of 20–25 %).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following statements is correct?<br>(a) About 90 % of CO<sub>2</sub> is carried by haemoglobin as carbaminohaemoglobin.<br>(b) Cigarette smoking may lead to inflammation of bronchi.<br>(c) Neural signals from the pneumotaxic centre can increase the duration of inspiration.<br>(d) Alveolar ventilation is more than pulmonary ventilation.',
        steps: [
          '(a) False: only 20–25 % is carbaminohaemoglobin; 70 % is bicarbonate.',
          '(b) True: smoking irritates bronchial mucosa, causing chronic bronchitis (inflammation of bronchi).',
          '(c) False: the pneumotaxic centre reduces inspiration duration (the “switch-off point”), not increases it.',
          '(d) False: alveolar ventilation is less than pulmonary ventilation, because the dead-space volume (≈150 mL of each breath) is included in pulmonary ventilation but takes no part in exchange.',
        ],
        ans: '(b)',
      },

      { t: 'p', html: '<b>Archetype 3: Assertion–Reason</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements (A) and (R) linked; four answer choices: <b>(a)</b> both true and R explains A; <b>(b)</b> both true but R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.<br><b>Approach:</b> Evaluate A and R independently first, before matching them. The most common error is assuming R explains A just because both happen to be true: always check the causal link.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Assertion (A): A rise in <i>p</i>CO<sub>2</sub>, H<sup>+</sup> ions and temperature shifts the HbO<sub>2</sub> dissociation curve to the right.<br>Reason (R): A rise in <i>p</i>CO<sub>2</sub> or fall in pH decreases oxygen affinity of haemoglobin.<br>Choose: <b>(a)</b> Both true, R explains A. <b>(b)</b> Both true, R not the explanation. <b>(c)</b> A true, R false. <b>(d)</b> A false, R true.',
        steps: [
          'A is true: high <i>p</i>CO<sub>2</sub>, high H<sup>+</sup> (low pH), and high temperature all right-shift the curve (Bohr effect).',
          'R is true: decreased affinity is exactly why the curve shifts right; more O<sub>2</sub> is released.',
          'R correctly explains A: the right shift occurs because affinity drops.',
          '<b>Common trap:</b> Students who know the right-shift factors but cannot connect them causally to affinity will wrongly pick (b).',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>Archetype 4: Matching (Column I ↔ Column II)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns to be paired. Usually 4–5 items per column; one option combination is fully correct.<br><b>Approach:</b> Match the easiest pair first and eliminate options that contradict it. Most can be solved by recall alone.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Match disorders in Column I with symptoms in Column II.<br><br>Column I | Column II<br>A. Asthma | I. Inflammation of nasal tract<br>B. Bronchitis | II. Spasm of bronchial muscles<br>C. Rhinitis | III. Fully blown-out alveoli<br>D. Emphysema | IV. Inflammation of bronchi<br><br>(a) A–IV, B–II, C–III, D–I<br>(b) A–I, B–III, C–II, D–IV<br>(c) A–III, B–I, C–IV, D–II<br>(d) A–II, B–IV, C–I, D–III',
        steps: [
          'Asthma = airway bronchospasm (spasm of bronchial muscles) → A–II.',
          'Bronchitis = inflammation of bronchi → B–IV.',
          'Rhinitis = inflammation of nasal tract → C–I.',
          'Emphysema = alveolar walls destroyed, air spaces enlarged (“fully blown-out alveoli”) → D–III.',
        ],
        ans: '(d)',
      },

      { t: 'p', html: '<b>Archetype 5: Diagram Identification</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A labelled diagram (or its description) of the respiratory system; the question asks to identify a structure or its function.<br><b>Approach:</b> Trace the airway in order and match the labelled part to its NCERT description. The NCERT textbook’s diagram of the human respiratory system (its own Figure 14.1, not Figure 14.1 of this chapter) is the reference.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'In a diagram of the human respiratory system, a flap-like structure X covers the glottis during swallowing. What is the function of X?<br>(a) To prevent food from entering into the trachea<br>(b) To filter and warm the incoming air<br>(c) To allow exchange of gases with the blood<br>(d) To trap dust particles in mucus',
        steps: [
          'X is the epiglottis, a cartilaginous flap that prevents food from entering the trachea (windpipe). The other choices (filter/warm air = nasal functions; gas exchange = alveoli; trap dust = mucus) are wrong functions for this structure.',
        ],
        ans: '(a) To prevent food from entering into trachea.',
      },

      { t: 'p', html: '<b>Archetype 6: Volume/Capacity Formula Selection</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A definition is given in words; the student must select the correct symbolic formula from four options.<br><b>Approach:</b> Translate the verbal definition into a sum of the four primary volumes (TV, ERV, RV, IRV). The easiest way is to note which volumes are mentioned in the definition and add the correct pair or group.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The amount of air remaining in the lungs after a normal expiration is called __________ and is represented as __________.<br>(a) Residual volume, RV<br>(b) Functional residual capacity, ERV + RV<br>(c) Expiratory reserve volume, TV + ERV<br>(d) Vital capacity, ERV + TV + IRV',
        steps: ['“Remaining after a normal expiration” = ERV + RV. This is precisely FRC. Only option (b) expresses this correctly.'],
        ans: '(b)',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: 'The examiners build specific confusions into the distractors. The most frequent traps are:',
      },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'The distractor', 'The correction'],
        rows: [
          [
            '<b>“Cartilage rings = complete rings”</b>',
            'Options list “complete bony/cartilaginous rings”',
            'Tracheal rings are <b>C-shaped and incomplete</b>: the gap is posterior, against the oesophagus',
          ],
          [
            '<b>“CO<sub>2</sub> transport = mostly carbaminohaemoglobin”</b>',
            '~70 % carbaminohaemoglobin option',
            'CO<sub>2</sub> is <b>≈70 % bicarbonate</b>, 20–25 % carbamino, 7 % dissolved',
          ],
          [
            '<b>“Pneumotaxic centre = increases inspiration”</b>',
            '“Increases duration of inspiration”',
            'Pneumotaxic centre <b>reduces</b> inspiration duration (switch-off point)',
          ],
          [
            '<b>“Emphysema = allergy / infection”</b>',
            'Allergy (asthma), infection options given',
            'Emphysema = <b>cigarette smoking</b> (alveolar destruction)',
          ],
          [
            '<b>“Asthma = alveolar problem”</b>',
            'Destruction of alveolar walls as cause',
            'Asthma = <b>bronchial/bronchiolar inflammation and spasm</b> (airways, not alveoli)',
          ],
          [
            '<b>“Venous O<sub>2</sub> reserve”</b>',
            '“More than 50 mL” or “25 mL”',
            '<b>5 mL</b> per 100 mL is delivered at rest; ≈20 mL per 100 mL is carried when fully saturated; the delivery rises during heavy exercise',
          ],
          [
            '<b>“H<sup>+</sup> favours oxyhaemoglobin formation”</b>',
            '“High conc. of H<sup>+</sup> favours oxyhaemoglobin formation”',
            'H<sup>+</sup> (low pH) <b>favours dissociation</b> (Bohr effect): the opposite',
          ],
          [
            '<b>“Larynx contributes to breathing movements”</b>',
            'Larynx listed as contributing',
            'Larynx is airway; <b>ribs, diaphragm, intercostals</b> drive chest volume change',
          ],
          [
            '<b>“Residual air = in trachea/nostrils”</b>',
            'Trachea or nostrils as location',
            'Residual air <b>remains in alveoli</b> after maximal expiration',
          ],
          [
            '<b>“Functional residual capacity = TV + ERV”</b>',
            'TV + ERV option',
            'FRC = <b>ERV + RV</b>; TV + ERV is Expiratory Capacity',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Level 1: Direct Recall] Which of the following is the primary respiratory centre that generates the normal breathing rhythm?<br>(a) Pons varolii<br>(b) Medulla oblongata<br>(c) Hypothalamus<br>(d) Cerebrum',
            a: '(b) Medulla oblongata. The respiratory rhythm centre lies in the medulla; the pneumotaxic centre in the pons only modulates inspiration duration.',
          },
          {
            q: '[Level 1: Direct Recall] The enzyme carbonic anhydrase is found in highest concentration in:<br>(a) Blood plasma<br>(b) Erythrocytes<br>(c) Leukocytes<br>(d) Lymph',
            a: '(b) Erythrocytes. Carbonic anhydrase catalyses CO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>CO<sub>3</sub> → H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup> inside red blood cells, enabling ≈70 % of CO<sub>2</sub> transport as bicarbonate.',
          },
          {
            q: '[Level 2: Concept Application] During inspiration in quiet breathing, which of the following occurs? (i) Diaphragm contracts and flattens. (ii) External intercostal muscles relax. (iii) Intrapulmonary pressure falls below atmospheric. (iv) Air moves from lungs to atmosphere.<br>(a) (i) and (ii)<br>(b) (i) and (iii)<br>(c) (ii) and (iv)<br>(d) (iii) and (iv)',
            a: '(b): Inspiration requires diaphragm contraction (increases vertical dimension) and external intercostal contraction (raises ribs, increases anteroposterior dimension), together enlarging thoracic volume and dropping intrapulmonary pressure below atmospheric, drawing air in. (ii) and (iv) describe expiration.',
          },
          {
            q: '[Level 2: Concept Application] Functional Residual Capacity (FRC) cannot be measured directly by a spirometer because:<br>(a) The spirometer records only inspired air.<br>(b) FRC contains Residual Volume, which never leaves the lungs.<br>(c) FRC values are too large for the instrument.<br>(d) The spirometer measures pressure, not volume.',
            a: '(b): Any capacity containing Residual Volume (FRC = ERV + RV, and TLC = VC + RV) cannot be measured by spirometry, because RV never exits the lungs to be recorded.',
          },
          {
            q: '[Level 3: Numerical / Percentage] In a healthy adult, approximately what percentage of CO<sub>2</sub> is transported as bicarbonate ions in the blood?<br>(a) 7 %<br>(b) 20–25 %<br>(c) 70 %<br>(d) 90 %',
            a: '(c) 70 %. The three modes are: bicarbonate ≈70 %; carbaminohaemoglobin ≈20–25 %; dissolved in plasma ≈7 %. The trap option (d) is inflated: no form of CO<sub>2</sub> transport comes near 90 % (it is oxygen that is carried about 97 % as oxyhaemoglobin).',
          },
          {
            q: '[Level 3: Numerical / Percentage] Each haemoglobin molecule can bind a maximum of how many molecules of oxygen?<br>(a) 1<br>(b) 2<br>(c) 4<br>(d) 8',
            a: '(c) 4. Haemoglobin has four haem groups, each binding one O<sub>2</sub> reversibly. (d) = 8 is the distractor for students who count oxygen atoms (4 O<sub>2</sub> = 8 O atoms) instead of oxygen molecules.',
          },
          {
            q: '[Level 4: Assertion–Reason] Assertion (A): Workers in grinding and stone-breaking industries are prone to a serious lung condition.<br>Reason (R): Prolonged inhalation of dust provokes proliferation of fibrous tissue in the lungs.<br>(a) Both A and R are true and R correctly explains A.<br>(b) Both A and R are true but R does not explain A.<br>(c) A is true, R is false.<br>(d) A is false, R is true.',
            a: '(a): Both are true. Chronic dust inhalation (silica, asbestos) triggers the body’s defence response: fibrous tissue proliferation → lung fibrosis, which thickens the diffusion membrane and reduces compliance. R is the direct mechanism behind A.',
          },
          {
            q: '[Level 4: Assertion–Reason] Assertion (A): The urge to breathe when holding one’s breath is primarily triggered by falling oxygen levels in the blood.<br>Reason (R): The chemosensitive area next to the respiratory rhythm centre is highly sensitive to CO<sub>2</sub> and H<sup>+</sup>.<br>(a) Both A and R are true and R correctly explains A.<br>(b) Both A and R are true but R does not explain A.<br>(c) A is true, R is false.<br>(d) A is false, R is true.',
            a: '(d): A is false: under normal conditions the urge to breathe is triggered by rising CO<sub>2</sub> (and rising H<sup>+</sup>), not by falling O<sub>2</sub>. R is true: the chemosensitive area beside the rhythm centre is highly sensitive to CO<sub>2</sub> and H<sup>+</sup>, and the role of O<sub>2</sub> in the normal rhythm is quite insignificant.',
          },
          {
            q: '[Level 5: Matching] Match the respiratory capacities in Column I with their correct compositions in Column II.<br><br>Column I | Column II<br>A. Inspiratory Capacity | I. ERV + RV<br>B. Vital Capacity | II. TV + IRV<br>C. Functional Residual Capacity | III. TV + ERV<br>D. Expiratory Capacity | IV. ERV + TV + IRV<br><br>(a) A–I, B–II, C–III, D–IV<br>(b) A–II, B–IV, C–I, D–III<br>(c) A–III, B–I, C–IV, D–II<br>(d) A–IV, B–II, C–I, D–III',
            a: '(b): IC = TV + IRV (A–II); VC = ERV + TV + IRV (B–IV); FRC = ERV + RV (C–I); EC = TV + ERV (D–III).',
          },
          {
            q: '[Level 6: Diagram / Applied] In a spirogram of a normal adult, if tidal volume is 500 mL, IRV is 3000 mL, ERV is 1100 mL and RV is 1200 mL, what is the Inspiratory Capacity?<br>(a) 1600 mL<br>(b) 3500 mL<br>(c) 4600 mL<br>(d) 5800 mL',
            a: '(b) 3500 mL: IC = TV + IRV = 500 + 3000 = 3500 mL. (a) = TV + ERV = 500 + 1100 = 1600 mL (EC); (c) = ERV + TV + IRV = 1100 + 500 + 3000 = 4600 mL (VC); (d) = VC + RV = 4600 + 1200 = 5800 mL (TLC). Note: these values give a VC of 4600 mL, the top of the range that the chapter’s volumes give (about 4000–4600 mL).',
          },
          {
            q: '[Level 6: Diagram / Applied] A patient has permanently enlarged air spaces beyond the terminal bronchioles, with destruction of alveolar walls. The surface area for gas exchange is drastically decreased. The most likely cause is:<br>(a) Allergic reaction to pollen<br>(b) Spasm of bronchial smooth muscle<br>(c) Cigarette smoking<br>(d) Bacterial infection of the trachea',
            a: '(c) Cigarette smoking: this describes emphysema: permanent enlargement of the air spaces beyond the terminal bronchioles (alveolar ducts and alveoli) with destruction of alveolar walls, reducing the surface area for gas exchange. Options (a) and (b) describe asthma (reversible, airway-narrowing, not alveolar destruction); (d) describes tracheitis.',
          },
          {
            q: '[Level 6: Diagram / Applied] The partial pressure of oxygen in the alveolar air is approximately 104 mmHg while that in the deoxygenated blood entering the pulmonary capillaries is 40 mmHg. Which gas and in which direction will diffuse across the respiratory membrane?<br>(a) O<sub>2</sub> from alveoli to blood; CO<sub>2</sub> from blood to alveoli simultaneously.<br>(b) CO<sub>2</sub> from alveoli to blood; O<sub>2</sub> from blood to alveoli simultaneously.<br>(c) Only O<sub>2</sub> diffuses; CO<sub>2</sub> does not diffuse at the same point.<br>(d) Both gases diffuse from alveoli to blood.',
            a: '(a): Each gas follows its own partial-pressure gradient independently. O<sub>2</sub>: 104 (alveoli) → 40 (blood); CO<sub>2</sub>: 45 (blood) → 40 (alveoli). They move in opposite directions across the same membrane at the same time.',
          },
        ],
      },

      { t: 'part', title: 'Key Things to Master' },
      {
        t: 'p',
        html: 'Three things are worth being able to state without hesitation: (1) the exact percentages of CO<sub>2</sub> transport: about 70 % as bicarbonate, 20–25 % as carbaminohaemoglobin and 7 % dissolved in plasma, because distractors swap these numbers (for example, a “70 % carbaminohaemoglobin” option); (2) the directional logic of the Bohr effect and its precise link to affinity reduction (the conditions that shift the curve right, and why that lowers Hb’s affinity for O<sub>2</sub>), which is exactly the cause–effect chain an assertion–reason item demands; and (3) the <b>distinction between the conducting zone end-point and the respiratory zone start-point</b>, a subtlety that NEET exploits in diagram-based and definition-based questions where students cannot distinguish terminal bronchioles from respiratory bronchioles or cannot say where conduction stops. (Respiratory bronchioles are beyond the NCERT text, which takes the conducting part to end at the terminal bronchioles.)',
      },
    ],
  },
];
