import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topics 01 and 02: pp. 819–833 of the Class 11 Physics Master
 * Reference, word for word: Molecular Nature of Matter (the book's Sub-topic 0,
 * pp. 819–825; it opens on the lower half of p. 819, under the contents) and
 * Ideal Gas and Gas Laws (Sub-topic 1, pp. 826–833). The chapter's title and
 * contents (top of p. 819) are not copied. Each is split at its Sections 1 to 8.
 * The one drawing, the intermolecular force and potential-energy curves (p. 822),
 * is redrawn in lib/diagrams/physics-11-12.ts as p11-12-01-d1.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 819–825 ─────────────────────────
  {
    n: '01',
    title: 'Molecular Nature of Matter',
    kalam: 'All matter is made of enormous numbers of tiny particles — atoms and molecules — in perpetual motion.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Mostly a CBSE Board section — expect 1–2 mark short-answer or assertion-reason questions on intermolecular forces, the solid/liquid/gas distinction, or Avogadro’s hypothesis. NEET occasionally asks the molecular-size / number-density estimation. JEE rarely asks it directly but assumes it as the conceptual bedrock for everything that follows in the chapter.',
      },
      {
        t: 'p',
        html: 'Before we can talk about how gases push on walls or how fast their molecules fly, we have to accept one founding idea: <b>all matter is made of enormous numbers of tiny particles — atoms and molecules — in perpetual motion.</b> This is the atomic hypothesis, and although it now feels obvious, it was hard-won. The Indian thinker Kanada and the Greek Democritus speculated about indivisible particles millennia ago, but it was John Dalton in the early 1800s who turned the idea into testable chemistry with his atomic theory: matter is built from atoms, atoms of a given element are identical, and they combine in small whole-number ratios to form compounds. The physicist Richard Feynman once remarked that if all of science had to be compressed into a single statement, the most valuable one would be that everything is made of atoms — tiny particles in perpetual motion, attracting when a little apart and repelling when squeezed together. That one sentence, he noted, contains an enormous amount of information about the world; almost this entire chapter is its unpacking.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine zooming into a steel rod, a cup of water, and the air above it. In all three you would find the same kind of building blocks — molecules — but arranged utterly differently. In the steel, the molecules are packed shoulder-to-shoulder, locked into a rigid lattice, only able to jiggle in place. In the water, they are still touching but can slide past one another, which is why a liquid flows and takes the shape of its container. In the air, they are flung far apart — on average about ten times farther apart than in the solid or liquid — racing around almost independently, meeting only in brief collisions. Same particles, three states of matter, and the only thing that has changed is how close the molecules are and how strongly they feel one another.',
      },
      {
        t: 'p',
        html: 'What decides that closeness is the <b>intermolecular force</b>. Two molecules attract each other weakly when they are a moderate distance apart (this attraction is what holds liquids and solids together), but if you try to push them too close, they repel each other very strongly (you cannot force two molecules to occupy the same space). Somewhere in between there is a special separation — call it <i>r</i><sub>0</sub> — where the attraction and repulsion exactly balance and the net force is zero. This is the comfortable equilibrium spacing that molecules in a solid settle into.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture two molecules joined by an imaginary spring that is also slightly sticky. Pull them apart and the attraction (the sticky part) tugs them back. Push them together past <i>r</i><sub>0</sub> and the spring’s stiffness shoves them apart, harder and harder the closer you push. At <i>r</i><sub>0</sub> the molecule is content. In a solid, every molecule sits near its own <i>r</i><sub>0</sub> and merely vibrates about it; add heat and the vibrations grow until the lattice breaks down into a liquid, and more heat frees the molecules entirely into a gas.',
      },
      {
        t: 'p',
        html: 'This picture immediately tells you why a gas is the natural home of kinetic theory. In a gas the molecules are so far apart that, for almost all of their lives, they are beyond the reach of these forces — they feel essentially nothing until the instant they collide. That is exactly the assumption (“no intermolecular forces except during collisions”) that makes the ideal-gas model work. The molecular nature of matter, in other words, is the bedrock on which the rest of the chapter is built.',
      },
      {
        t: 'p',
        html: 'How do we know molecules are really moving, since we cannot see them? The most direct everyday evidence is <b>Brownian motion</b>. In 1827 the botanist Robert Brown noticed that tiny pollen grains suspended in water jiggled around ceaselessly in random, erratic paths, even though the water was perfectly still. The grains are far too big to move on their own; what jostles them is the relentless bombardment by invisible water molecules striking them unevenly from all sides. The smaller the suspended particle and the higher the temperature, the more violent the dance. Brownian motion is therefore a visible fingerprint of the unseen molecular motion that kinetic theory assumes — a bridge from the microscopic world straight to something you can watch under a microscope. The same idea explains how a drop of ink spreads through still water, or a whiff of perfume crosses a room: <b>diffusion</b>, the gradual mixing of molecules driven purely by their random thermal motion.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean “free molecules, brief collisions” picture holds for gases at ordinary and low pressures. Compress a gas hard and the molecules are forced close enough that intermolecular forces (and their finite size) stop being negligible — the gas starts behaving like a real, non-ideal gas, and eventually condenses into a liquid where the forces dominate. Likewise, the idea that molecules are tiny hard spheres is itself an approximation: real molecules have fuzzy electron clouds and (for polyatomic molecules) shapes, but the hard-sphere picture is good enough for counting collisions and estimating sizes.',
      },

      { t: 'part', title: 'Key facts and definitions' },
      {
        t: 'def',
        term: 'Atomic hypothesis & Dalton’s atomic theory',
        html: 'Matter is composed of atoms; atoms of an element are identical in mass and properties; compounds form when atoms combine in simple whole-number ratios. This explains the laws of definite proportions (a compound always contains the same elements in the same mass ratio) and multiple proportions.',
      },
      {
        t: 'def',
        term: 'Gay-Lussac’s law of combining volumes',
        html: 'When gases react, the volumes of the reacting gases and of the gaseous products bear simple whole-number ratios to one another (at the same temperature and pressure). For example, two volumes of hydrogen combine with one volume of oxygen to give two volumes of water vapour (2 ∶ 1 ∶ 2).',
      },
      {
        t: 'def',
        term: 'Avogadro’s hypothesis (law)',
        html: 'Equal volumes of all gases, under the same conditions of temperature and pressure, contain equal numbers of molecules. This single idea reconciles Dalton’s atoms with Gay-Lussac’s volume ratios, and leads directly to:<br>• <b>Avogadro’s number</b> <i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup> — the number of particles in one mole.<br>• <b>Mole</b>: the amount of substance containing <i>N</i><sub>A</sub> entities; <i>n</i> = <i>N</i>/<i>N</i><sub>A</sub> = <i>m</i>/<i>M</i>.',
      },
      {
        t: 'p',
        html: '<b>Intermolecular force — qualitative form:</b><br>• Strongly <b>repulsive</b> at very small separation (<i>r</i> < <i>r</i><sub>0</sub>): molecules resist being squeezed together.<br>• Weakly <b>attractive</b> at larger separation (<i>r</i> > <i>r</i><sub>0</sub>): pulls molecules together.<br>• <b>Zero net force</b> at the equilibrium separation <i>r</i> = <i>r</i><sub>0</sub> (the minimum of the intermolecular potential energy).<br>• Negligible at large <i>r</i> (a few molecular diameters), which is the situation in a dilute gas.',
      },
      {
        t: 'p',
        html: '<b>Scales worth remembering:</b><br>• Typical molecular <b>diameter</b> <i>d</i> ∼ 1–3 Å ∼ 10<sup>−10</sup> m.<br>• In solids/liquids, neighbours are about one diameter apart.<br>• In a gas at ordinary conditions, the mean intermolecular separation is roughly <b>10 times</b> the spacing in solids/liquids; the <b>mean free path</b> is about <b>20 times</b> that separation and about <b>200 times</b> the molecular size — which is precisely why gases are dilute and (nearly) ideal.',
      },
      {
        t: 'p',
        html: '<b>Evidence that matter is molecular and in motion:</b><br>• <b>Brownian motion</b> — the ceaseless random jiggling of microscopic particles suspended in a fluid, caused by uneven molecular bombardment; visible, though indirect, evidence of molecular motion.<br>• <b>Diffusion</b> — gases and liquids spontaneously intermix (ink in water, scent across a room) because their molecules wander randomly.<br>• <b>The oil-film experiment</b> — a drop of oil spreading to a one-molecule-thick layer lets us estimate molecular size (∼ 10<sup>−9</sup>–10<sup>−10</sup> m).<br>• <b>Definite chemical proportions and combining volumes</b> — the simple whole-number ratios in which substances react are explained only if matter comes in discrete atomic units.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — Estimating the number density and intermolecular spacing of a gas',
        steps: [
          'From the ideal gas law, the number of molecules per unit volume is <i>n</i><sub>0</sub> = <i>N</i>/<i>V</i> = <i>P</i>/(<i>k</i><sub>B</sub><i>T</i>) (or use 1 mole = 22.4 L at STP).',
          'The average volume “owned” by one molecule is 1/<i>n</i><sub>0</sub>.',
          'The mean separation between molecules is roughly the cube root of that volume, <i>ℓ</i> ≈ (1/<i>n</i><sub>0</sub>)<sup>1/3</sup> = (<i>V</i>/<i>N</i>)<sup>1/3</sup>.',
          'Compare <i>ℓ</i> with the molecular diameter <i>d</i>: for a gas at STP, <i>ℓ</i> comes out about ten times <i>d</i>, confirming that the molecules are mostly far apart.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Estimating the fraction of space actually occupied by molecules',
        steps: [
          'Model each molecule as a sphere of radius <i>r</i> = <i>d</i>/2; its volume is (4/3)π<i>r</i><sup>3</sup>.',
          'Multiply by <i>N</i><sub>A</sub> to get the molecular volume in one mole: <i>V</i><sub>mol</sub> = <i>N</i><sub>A</sub> · (4/3)π<i>r</i><sup>3</sup>.',
          'Divide by the actual molar volume (22.4 L at STP): the ratio (typically ∼ 10<sup>−3</sup>–10<sup>−4</sup>) is the fraction of the container actually filled by molecular matter. Its tininess is the quantitative statement of “a gas is mostly empty space.”',
        ],
      },
      {
        t: 'p',
        html: '<b>The logic of the force–separation curve.</b> Why must the force be attractive far out but repulsive close in? If molecules only attracted, all matter would collapse to a point; if they only repelled, no solid or liquid could ever form. The existence of stable solids and liquids requires an equilibrium separation <i>r</i><sub>0</sub> — a balance point. At <i>r</i><sub>0</sub> the potential energy is a minimum (most stable), the net force is zero, and small displacements produce a restoring force, which is exactly why atoms in a solid vibrate about fixed sites rather than drifting away or collapsing inward. Formally, the force is the negative slope of the potential energy, <i>F</i> = −d<i>U</i>/d<i>r</i>: the curve of <i>U</i>(<i>r</i>) dips to a minimum at <i>r</i><sub>0</sub>, and the force (minus its slope) passes through zero there, turning repulsive on the steep inner wall and attractive on the gentle outer side.',
      },
      {
        t: 'p',
        html: 'A classic way to “measure” a molecule without seeing it:',
      },
      {
        t: 'proc',
        title: 'Procedure C — Estimating molecular size by the oil-film (monolayer) method',
        steps: [
          'Take a tiny drop of oil of known volume <i>V</i> and let it spread on a clean water surface dusted with fine powder.',
          'The oil spreads until it is just <b>one molecule thick</b> — a monomolecular layer — covering a measured area <i>A</i>.',
          'If the film is one molecule thick, that thickness is the molecular diameter: <i>d</i> ≈ <i>V</i>/<i>A</i> (volume = area × thickness).',
          'Typical results give <i>d</i> ∼ 10<sup>−9</sup>–10<sup>−10</sup> m, confirming the nanometre-to-Ångström scale of molecules. The beauty of the method is that it converts an invisible length into two easily measured quantities, a volume and an area.',
        ],
      },
      { t: 'fig', id: 'p11-12-01-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Estimate the fraction of the total volume that is actually occupied by the molecules themselves in one mole of oxygen gas at STP. Take the diameter of an oxygen molecule to be 3 Å.',
        steps: [
          '<b>Given:</b> <i>d</i> = 3 Å ⇒ <i>r</i> = 1.5 Å = 1.5 × 10<sup>−10</sup> m; molar volume at STP = 22.4 L = 22.4 × 10<sup>−3</sup> m<sup>3</sup>; <i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup>.',
          '<b>Molecular volume in one mole:</b><br><i>V</i><sub>mol</sub> = <i>N</i><sub>A</sub> · (4/3)π<i>r</i><sup>3</sup> = 6.022 × 10<sup>23</sup> × (4/3)π(1.5 × 10<sup>−10</sup>)<sup>3</sup><br>= 6.022 × 10<sup>23</sup> × 1.41 × 10<sup>−29</sup> ≈ 8.5 × 10<sup>−6</sup> m<sup>3</sup>',
          '<b>Fraction:</b><br><i>V</i><sub>mol</sub>/<i>V</i><sub>molar</sub> = (8.5 × 10<sup>−6</sup>)/(22.4 × 10<sup>−3</sup>) ≈ 3.8 × 10<sup>−4</sup>',
          'A gas is, overwhelmingly, empty space; this is the quantitative justification for treating molecules as point masses.',
        ],
        ans: 'Only about 4 × 10<sup>−4</sup> — roughly 0.04% — of the gas’s volume is actually molecules.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Under the same temperature and pressure, 3 litres of hydrogen react completely with a certain volume of oxygen to form water vapour. Using Avogadro’s law and Gay-Lussac’s law of combining volumes (2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O), find the volume of oxygen consumed and the volume of water vapour produced.',
        steps: [
          '<b>Speed method:</b> volumes react in the same ratio as molecules (Avogadro), i.e. 2 ∶ 1 ∶ 2. So oxygen = ½ × 3 = 1.5 L, and water vapour = 3 L (same as the hydrogen, by the 2 ∶ 2 ratio).',
          '<b>The trap:</b> students often forget that the 2 ∶ 1 ∶ 2 ratio applies to volumes only because of Avogadro’s law (equal volumes ⟹ equal molecules), and may wrongly conserve volume (expecting 3 + 1.5 = 4.5 L of product). Volume is not conserved in gaseous reactions — molecule count and the balanced equation rule.',
        ],
        ans: 'Oxygen = 1.5 L; water vapour = 3 L.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Estimate the mean separation between molecules of an ideal gas at STP, and compare it with a molecular diameter of 3 Å.',
        steps: [
          '<b>Concept — number density then cube-root spacing.</b> At STP one mole (<i>N</i><sub>A</sub> molecules) occupies 22.4 × 10<sup>−3</sup> m<sup>3</sup>, so the volume per molecule is<br><i>V</i>/<i>N</i> = (22.4 × 10<sup>−3</sup>)/(6.022 × 10<sup>23</sup>) = 3.72 × 10<sup>−26</sup> m<sup>3</sup>',
          'The mean separation is the cube root:<br><i>ℓ</i> ≈ (3.72 × 10<sup>−26</sup>)<sup>1/3</sup> ≈ 3.34 × 10<sup>−9</sup> m = 33.4 Å',
          '<b>Comparison:</b> <i>ℓ</i>/<i>d</i> = 33.4/3 ≈ 11.',
          'This is the concrete meaning of the statement that gas spacing is “about ten times” the spacing in condensed matter, and why intermolecular forces are negligible in a gas.',
        ],
        ans: 'The molecules sit, on average, about 11 molecular diameters apart — an order of magnitude more than in a solid or liquid.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The density of liquid nitrogen is about 810 kg m<sup>−3</sup> and its molar mass is 28 g mol<sup>−1</sup>. Estimate (a) the number of molecules per unit volume in the liquid, and (b) the mean spacing between molecules, and hence (c) comment on how this spacing compares with that of nitrogen gas at STP (from worked example 3, ∼ 33 Å).',
        steps: [
          '<b>Part (a).</b> Number density = <i>ρN</i><sub>A</sub>/<i>M</i> = (810 × 6.022 × 10<sup>23</sup>)/(28 × 10<sup>−3</sup>) ≈ 1.74 × 10<sup>28</sup> m<sup>−3</sup>.',
          '<b>Part (b).</b> Mean spacing <i>ℓ</i> ≈ (1/<i>n</i><sub>0</sub>)<sup>1/3</sup> = (1/(1.74 × 10<sup>28</sup>))<sup>1/3</sup> = (5.75 × 10<sup>−29</sup>)<sup>1/3</sup> ≈ 3.86 × 10<sup>−10</sup> m ≈ 3.9 Å.',
          '<b>Part (c).</b> In the liquid the molecules are about 3.9 Å apart — essentially touching, since that is close to a molecular diameter. In the gas at STP they were about 33 Å apart, roughly <b>8–9 times</b> farther. <b>Liquefaction collapses the molecules from “far apart and free” to “touching and interacting”</b> — which is precisely why the ideal-gas model fails for liquids: the intermolecular forces that were negligible in the gas now dominate completely.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State Avogadro’s hypothesis and use it to explain why equal volumes of hydrogen and oxygen at the same temperature and pressure contain equal numbers of molecules.',
            a: 'equal volumes ⟹ equal molecule count, so the volume ratio equals the molecule-number ratio',
          },
          {
            q: '[NEET] At STP, one mole of any ideal gas occupies 22.4 L. How many molecules are present in 5.6 L of an ideal gas at STP?',
            a: '1.5 × 10<sup>23</sup> molecules (5.6/22.4 = 0.25 mol)',
          },
          {
            q: '[JEE Main] A vessel contains 1.0 g of hydrogen (<i>M</i> = 2) at STP. Find the number of molecules and estimate the volume occupied.',
            a: '0.5 mol × <i>N</i><sub>A</sub> = 3.0 × 10<sup>23</sup> molecules; ≈ 11.2 L',
          },
          {
            q: '[JEE Main] Sketch (qualitatively) the variation of intermolecular force with separation <i>r</i>, and mark the equilibrium separation <i>r</i><sub>0</sub>. State the sign of the force on either side of <i>r</i><sub>0</sub>.',
            a: 'repulsive for <i>r</i> < <i>r</i><sub>0</sub>, attractive for <i>r</i> > <i>r</i><sub>0</sub>, zero at <i>r</i><sub>0</sub>',
          },
          {
            q: '[JEE Advanced] The diameter of a water molecule is about 3 Å. Using the density of water (1000 kg m<sup>−3</sup>, <i>M</i> = 18 g mol<sup>−1</sup>), estimate the mean spacing between molecules in liquid water and compare it with the molecular diameter.',
            a: '<i>n</i><sub>0</sub> = <i>ρN</i><sub>A</sub>/<i>M</i> ≈ 3.34 × 10<sup>28</sup> m<sup>−3</sup>, <i>ℓ</i> ≈ 3.1 Å — about one molecular diameter (molecules touching).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The net intermolecular force between two molecules is zero when their separation is:',
        opts: [
          { label: 'zero', nudge: '<b>Trap (A):</b> at <i>r</i> → 0 the repulsive force is maximal, not zero.' },
          { label: 'equal to the equilibrium separation <i>r</i><sub>0</sub>', nudge: null },
          {
            label: 'infinite',
            nudge: '<b>(C):</b> at infinite separation the force approaches zero but is never the defining equilibrium point, and molecules there are not bound.',
          },
          {
            label: 'equal to one molecular diameter',
            nudge: '<b>(D):</b> a molecular diameter is a rough scale, but the exact zero-force point is <i>r</i><sub>0</sub>, defined by the force balance, not by the diameter.',
          },
        ],
        correct: 1,
        solution: 'At <i>r</i><sub>0</sub> the attractive and repulsive contributions exactly cancel; this is the stable equilibrium separation (potential-energy minimum).',
      },
      {
        t: 'mcq',
        q: 'Which statement best explains why a gas can be compressed far more easily than a liquid?',
        opts: [
          {
            label: 'Gas molecules are smaller than liquid molecules',
            nudge: '<b>Trap (A):</b> same molecules form the liquid and gas; size is unchanged.',
          },
          { label: 'In a gas the molecules are far apart with much empty space between them', nudge: null },
          { label: 'Gas molecules have no mass', nudge: '<b>(C):</b> molecules certainly have mass.' },
          {
            label: 'Gas molecules attract each other strongly',
            nudge: '<b>(D):</b> strong attraction characterises the liquid, not the gas — gas molecules are too far apart to attract each other strongly, so attraction cannot be what makes a gas easy to compress.',
          },
        ],
        correct: 1,
        solution: 'A gas is mostly empty space (molecular volume ∼ 10<sup>−4</sup> of the total), so compression mainly reduces the gaps between molecules. In a liquid the molecules already touch, leaving little to compress.',
      },
      {
        t: 'mcq',
        q: 'Two volumes of gas A combine with one volume of gas B to form two volumes of a gaseous compound, all measured at the same <i>T</i> and <i>P</i>. This is a direct illustration of:',
        opts: [
          {
            label: 'Boyle’s law',
            nudge: '<b>Trap (A)/(B):</b> Boyle’s and Charles’ laws describe how a fixed gas sample responds to pressure or temperature, not reacting-volume ratios.',
          },
          {
            label: 'Charles’ law',
            nudge: '<b>Trap (A)/(B):</b> Boyle’s and Charles’ laws describe how a fixed gas sample responds to pressure or temperature, not reacting-volume ratios.',
          },
          { label: 'Gay-Lussac’s law of combining volumes together with Avogadro’s hypothesis', nudge: null },
          {
            label: 'Dalton’s law of partial pressures',
            nudge: '<b>(D):</b> Dalton’s law concerns the pressures of a non-reacting mixture, not combining volumes.',
          },
        ],
        correct: 2,
        solution: 'Simple whole-number volume ratios in a gaseous reaction are Gay-Lussac’s law of combining volumes; interpreting those volumes as proportional to molecule numbers requires Avogadro’s hypothesis.',
      },
      {
        t: 'mcq',
        q: 'The mean free path of a gas molecule is roughly:',
        opts: [
          {
            label: 'equal to the molecular diameter',
            nudge: '<b>Trap (A)/(B):</b> these badly underestimate it — they describe spacings, not the free-flight distance.',
          },
          {
            label: 'about 10 times the molecular diameter',
            nudge: '<b>Trap (A)/(B):</b> these badly underestimate it — they describe spacings, not the free-flight distance.',
          },
          { label: 'about 200 times the molecular diameter', nudge: null },
          {
            label: 'about the size of the container, always',
            nudge: '<b>(D):</b> the mean free path equals the container size only in a strong vacuum (very low density), not in general.',
          },
        ],
        correct: 2,
        solution: 'In an ordinary gas the mean free path is of order a few-hundred molecular diameters (about 20 times the typical gas spacing), which is why a gas is dilute and behaves nearly ideally.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing molecular spacing with mean free path.</b> The mean separation between neighbours in a gas (~10× a diameter) is much smaller than the mean free path (~200× a diameter, the average distance flown between collisions). They are different quantities.',
          '<b>Expecting volume to be conserved in gaseous reactions.</b> Combining-volume ratios follow the balanced equation and Avogadro’s law, not conservation of total volume. Two volumes plus one volume need not give three.',
          '<b>Thinking molecules only attract.</b> Without short-range repulsion, matter would collapse. The force is repulsive below <i>r</i><sub>0</sub> and attractive above it — both are essential.',
          '<b>Treating the gas as “full” of molecules.</b> A gas is ~99.96% empty space at STP. Picturing it as densely packed leads to wrong intuitions about compressibility and the validity of the point-mass assumption.',
          '<b>Misattributing Brownian motion.</b> The jiggling particle you observe is not a molecule — it is a much larger suspended grain being kicked around by molecules. Brownian motion is indirect evidence: you see the effect (the grain’s dance), not the molecules themselves.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (orders of magnitude):</b> carry three numbers in your head — molecular size ∼ 10<sup>−10</sup> m, gas spacing ∼ 10× that, mean free path ~200× that. Most conceptual questions in this topic can be answered just by comparing these scales.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Atomic hypothesis / Dalton', note: 'matter is atoms; atoms combine in simple whole-number ratios.' },
          { f: 'Gay-Lussac (combining volumes)', note: 'reacting gas volumes are in simple whole-number ratios at the same <i>T</i>, <i>P</i>.' },
          {
            f: 'Avogadro’s law',
            note: 'equal volumes (same <i>T</i>, <i>P</i>) ⟹ equal numbers of molecules; <i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>.',
          },
          {
            f: 'Intermolecular force',
            note: 'repulsive for <i>r</i> < <i>r</i><sub>0</sub>, attractive for <i>r</i> > <i>r</i><sub>0</sub>, zero at <i>r</i><sub>0</sub> (PE minimum).',
          },
          {
            f: 'States of matter',
            note: 'solid (touching, fixed, vibrating) → liquid (touching, mobile) → gas (far apart, free) as separation grows and forces weaken.',
          },
          {
            f: 'Evidence of molecules in motion',
            note: 'Brownian motion (visible jiggling), diffusion (spontaneous mixing), oil-film monolayer (gives molecular size).',
          },
          {
            f: 'Scales',
            note: 'molecule ∼ 10<sup>−10</sup> m; gas spacing ∼ 10×; mean free path ~200×; molecular volume ∼ 10<sup>−4</sup> of container at STP.',
          },
        ],
        aids: ['“Close and caged (solid), close and loose (liquid), far and free (gas).”'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 826–833 ─────────────────────────
  {
    n: '02',
    title: 'Ideal Gas and Gas Laws',
    kalam: 'A real gas behaves ideally when its molecules are far apart and moving fast — that is, at low pressure and high temperature.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A guaranteed scorer. CBSE Boards almost always carry a 1–3 mark gas-law or <i>PV</i> = <i>nRT</i> application. NEET asks 1 direct numerical nearly every year (often density–molar-mass or a mixture). JEE Main treats it as a calculation backbone, and JEE Advanced hides it inside multi-bulb or piston problems where mole-conservation is the real test.',
      },
      {
        t: 'p',
        html: 'Picture a Mumbai local at 9 a.m. The compartment is packed, people are shoving against the doors, and the “pressure” on the walls is enormous. Now imagine the same compartment at 2 p.m. — a handful of passengers, drifting around, barely touching the sides. A gas is exactly this crowd of commuters, except the passengers are molecules, the shoving is molecular collisions, and the push felt by the walls is what we call <b>pressure</b>.',
      },
      {
        t: 'p',
        html: 'A real gas is messy: molecules have size, they tug on one another, and they occasionally clump. To make the physics tractable, we invent a clean idealisation — the <b>ideal gas</b> — by stripping away those complications. An ideal gas is a crowd of point-like particles that take up no real volume, exert no force on one another except during instantaneous collisions, and otherwise fly in straight lines. Because nothing is “sticking” the molecules together, an ideal gas has no potential energy of interaction; all of its internal energy is the kinetic energy of motion.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> an ideal gas is like a hall full of perfectly smooth marbles that never attract and never deform — they only knock about and bounce off the walls. The “ideal” in ideal gas isn’t a comment on quality; it just means the gas obeys one beautifully simple law, <i>PV</i> = <i>nRT</i>, at every temperature and pressure. No real substance does this perfectly, but every real gas comes very close in the right regime.',
      },
      {
        t: 'p',
        html: 'It is worth naming the assumptions hidden inside this picture, because every later result in the chapter rests on them. An ideal gas is built from these idealisations: the molecules are treated as <b>point masses</b> whose own volume is utterly negligible compared with the container, so the volume of the gas is effectively the volume of the container; there are <b>no intermolecular forces</b> except during collisions, which makes the potential energy of the gas zero and its internal energy purely the kinetic energy of motion; all collisions (molecule–molecule and molecule–wall) are <b>perfectly elastic</b>, so no kinetic energy is lost; between collisions the molecules move freely in <b>straight lines</b>, spending negligible time actually colliding; the gas is a <b>pure substance</b> with all molecules identical; and <b>gravity is ignored</b>, so the density is taken uniform throughout the container. Strip any one of these away and you are back to a real gas with all its complications.',
      },
      {
        t: 'p',
        html: 'And what is that regime? A real gas behaves ideally when its molecules are <b>far apart and moving fast</b> — that is, at <b>low pressure and high temperature</b>. At low pressure the molecules are so spread out that the time they spend near each other (where attractions matter) is negligible. At high temperature their kinetic energy so overwhelms any intermolecular pull that the stickiness simply doesn’t register. Squeeze a gas hard (high pressure) or chill it (low temperature) and the idealisation breaks: molecules crowd together, attractions bite, the finite size of molecules starts to matter, and deviations appear — eventually the gas condenses to a liquid, something an ideal gas can never do.',
      },
      {
        t: 'p',
        html: 'So keep these <b>limiting conditions</b> in mind. The ideal-gas description is excellent for everyday air, but it fails (a) near condensation, (b) at very high pressure where molecular volume is no longer negligible compared to the container, and (c) at very low temperature where attractive forces dominate. Hydrogen and helium — small, weakly-interacting molecules — stay “ideal” over a wide range; water vapour near 100 °C or carbon dioxide near room temperature deviate noticeably.',
      },
      {
        t: 'p',
        html: 'One more intuition worth locking in: for a fixed amount of gas, only three numbers describe its state — pressure <i>P</i>, volume <i>V</i>, and absolute temperature <i>T</i>. Change any one and at least one other must respond. The “gas laws” are simply the rules for that bookkeeping when you hold one variable fixed, and <i>PV</i> = <i>nRT</i> is the master equation that contains all of them at once.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'table',
        title: 'The four experimental gas laws (each for a fixed mass of gas)',
        head: ['Law', 'Held constant', 'Statement', 'Equation'],
        rows: [
          [
            'Boyle’s',
            '<i>T</i>',
            '<i>V</i> ∝ 1/<i>P</i>',
            '<i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>',
          ],
          [
            'Charles’',
            '<i>P</i>',
            '<i>V</i> ∝ <i>T</i>',
            '<i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>',
          ],
          [
            'Gay-Lussac’s (pressure)',
            '<i>V</i>',
            '<i>P</i> ∝ <i>T</i>',
            '<i>P</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub>/<i>T</i><sub>2</sub>',
          ],
          ['Avogadro’s', '<i>P</i>, <i>T</i>', '<i>V</i> ∝ <i>n</i>', 'equal <i>V</i> ⟹ equal <i>N</i>'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Combined gas law (fixed mass)',
        main: '<i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Ideal gas equation (the master relation)',
        main: '<i>PV</i> = <i>nRT</i><br>Equivalent forms you must recognise instantly:<br><i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i><br><i>PV</i> = <i>Nk</i><sub>B</sub><i>T</i><br><i>P</i> = <i>ρRT</i>/<i>M</i>',
        legend: [
          '<i>n</i> = the number of moles',
          '<i>m</i> = total mass of gas',
          '<i>M</i> = molar mass, so <i>n</i> = <i>m</i>/<i>M</i>',
          '<i>N</i> = number of molecules, with <i>N</i> = <i>nN</i><sub>A</sub>',
          '<i>ρ</i> = <i>m</i>/<i>V</i> = density (the density form is the one to reach for whenever density or molar mass appears)',
          '<i>R</i> = universal gas constant, 8.314 J mol<sup>−1</sup> K<sup>−1</sup>',
          '<i>k</i><sub>B</sub> = Boltzmann constant, <i>R</i>/<i>N</i><sub>A</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A quick naming convention that prevents confusion in problems: <i>PV</i> = <i>nRT</i> is the <b>container form</b> of the gas law — used whenever the gas is enclosed in a vessel of definite volume — while <i>P</i> = <i>ρRT</i>/<i>M</i> is the <b>atmospheric form</b>, used when you are handed a density rather than a volume (open air, a gas column, an unconfined region). They are the same physics; pick the form that matches the data you are given.',
      },
      {
        t: 'p',
        html: 'Graham’s law, listed below, is really a consequence of the kinetic picture rather than a fourth state variable, but it lives naturally here because it is phrased entirely in terms of the macroscopic quantities density and molar mass.',
      },
      {
        t: 'formula',
        kicker: 'Dalton’s law of partial pressures',
        main: 'for a non-reacting mixture in a common volume at common temperature:<br><i>P</i><sub>total</sub> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> + ⋯ + <i>P</i><sub><i>n</i></sub> = (<i>RT</i>/<i>V</i>)(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub> + ⋯)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Graham’s law of diffusion',
        main: 'at fixed <i>T</i>, <i>P</i>:<br>rate of diffusion ∝ 1/√<i>ρ</i> ∝ 1/√<i>M</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Constants, units and dimensional formulae:</b><br>• <b>Universal gas constant</b> <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup> ≈ 2.0 cal mol<sup>−1</sup> K<sup>−1</sup>. Dimensional formula: [<i>R</i>] = [M L<sup>2</sup> T<sup>−2</sup> mol<sup>−1</sup> K<sup>−1</sup>].<br>• <b>Boltzmann constant</b> <i>k</i><sub>B</sub> = <i>R</i>/<i>N</i><sub>A</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup> — the gas constant per molecule. [<i>k</i><sub>B</sub>] = [M L<sup>2</sup> T<sup>−2</sup> K<sup>−1</sup>].<br>• <b>Avogadro number</b> <i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>.<br>• Pressure [<i>P</i>] = [M L<sup>−1</sup> T<sup>−2</sup>] (SI: Pa); Volume [<i>V</i>] = [L<sup>3</sup>] (SI: m<sup>3</sup>).<br>• <b>STP</b>: <i>T</i> = 273.15 K, <i>P</i> = 1 atm = 1.013 × 10<sup>5</sup> Pa, molar volume = 22.4 L mol<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: 'The molar volume figure is worth committing to memory: because Avogadro’s law guarantees that equal moles of any ideal gas occupy equal volumes at the same <i>P</i> and <i>T</i>, that single number 22.4 L mol<sup>−1</sup> works for every gas at STP and turns many “find the moles / find the molar mass” questions into one-line arithmetic. A second small but exam-relevant fact: for an ideal gas the volume-expansion coefficient and the pressure-expansion coefficient are equal, <i>α</i> = <i>β</i> = 1/273 per °C, a direct consequence of <i>V</i> ∝ <i>T</i> at constant <i>P</i> and <i>P</i> ∝ <i>T</i> at constant <i>V</i> sharing the same absolute-temperature scale.',
      },

      { t: 'part', title: 'Key procedures and derivation' },
      {
        t: 'p',
        html: '<b>Deriving the ideal gas equation by stitching the laws together.</b><br>We have three “one-variable-fixed” laws. The trick is to change the state in two stages and let only one law act at a time, so that we never break any of the experimental rules.',
      },
      {
        t: 'p',
        html: '<b>Setup.</b> Take a fixed mass of gas in state (<i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub>). We want to reach state (<i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>). Introduce an <b>intermediate state</b> (<i>P</i><sub>2</sub>, <i>V</i>′, <i>T</i><sub>1</sub>) — same final pressure, but still at the initial temperature.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — change pressure at constant temperature (Boyle’s law).</b> Going from (<i>P</i><sub>1</sub>, <i>V</i><sub>1</sub>, <i>T</i><sub>1</sub>) to (<i>P</i><sub>2</sub>, <i>V</i>′, <i>T</i><sub>1</sub>), temperature is held fixed, so Boyle’s law applies:<br><i>P</i><sub>1</sub><i>V</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i>′ ⇒ <i>V</i>′ = <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>P</i><sub>2</sub><br><b>Why this step:</b> by fixing <i>T</i> first, we isolate the pressure–volume trade-off with no temperature interference.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — change temperature at constant pressure (Charles’ law).</b> Now go from (<i>P</i><sub>2</sub>, <i>V</i>′, <i>T</i><sub>1</sub>) to (<i>P</i><sub>2</sub>, <i>V</i><sub>2</sub>, <i>T</i><sub>2</sub>). Pressure is held at <i>P</i><sub>2</sub>, so Charles’ law applies:<br><i>V</i>′/<i>T</i><sub>1</sub> = <i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> ⇒ <i>V</i>′ = <i>V</i><sub>2</sub><i>T</i><sub>1</sub>/<i>T</i><sub>2</sub><br><b>Why this step:</b> with <i>P</i> now fixed, the only remaining trade-off is volume against temperature.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — eliminate the intermediate <i>V</i>′.</b> Both steps gave an expression for <i>V</i>′; set them equal:<br><i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>P</i><sub>2</sub> = <i>V</i><sub>2</sub><i>T</i><sub>1</sub>/<i>T</i><sub>2</sub> ⇒ <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub><br>This is the combined gas law: the quantity <i>PV</i>/<i>T</i> is a constant for a fixed mass of gas.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — fix the constant using Avogadro’s law.</b> The constant must be proportional to the amount of gas, because Avogadro’s law says volume scales with the number of moles at fixed <i>P</i>, <i>T</i>. Writing the constant as <i>nR</i>, where <i>R</i> is the same for every gas (this universality is the experimental discovery — <i>PV</i>/(<i>nT</i>) → <i>R</i> for all gases as <i>P</i> → 0):<br><i>PV</i>/<i>T</i> = <i>nR</i> ⇒ <i>PV</i> = <i>nRT</i>',
      },
      {
        t: 'p',
        html: '<b>Why <i>R</i> is “universal.”</b> The remarkable experimental fact is that the same constant <i>R</i> works for every gas. If you measure the quantity <i>PV</i>/(<i>nT</i>) for any gas and let the pressure approach zero (the ideal limit), the ratio approaches one and the same value, 8.314 J mol<sup>−1</sup> K<sup>−1</sup>, regardless of whether the gas is hydrogen, oxygen, or argon. This universality is precisely why <i>R</i> earns the name universal gas constant — it encodes nothing about the identity of the gas, only the shared low-density behaviour of all gases.',
      },
      {
        t: 'p',
        html: '<b>A short derivation of Dalton’s law from <i>PV</i> = <i>nRT</i>.</b> Suppose a vessel of volume <i>V</i> at temperature <i>T</i> holds a non-reacting mixture of gases with <i>n</i><sub>1</sub>, <i>n</i><sub>2</sub>, … moles. Each component, behaving ideally, ignores the others (no intermolecular forces between unlike molecules either), so each would individually exert a partial pressure<br><i>P</i><sub><i>i</i></sub> = <i>n</i><sub><i>i</i></sub><i>RT</i>/<i>V</i><br>Adding these contributions, the total pressure on the wall is<br><i>P</i><sub>total</sub> = ∑<sub><i>i</i></sub> <i>P</i><sub><i>i</i></sub> = (<i>RT</i>/<i>V</i>) ∑<sub><i>i</i></sub> <i>n</i><sub><i>i</i></sub> = <i>n</i><sub>total</sub><i>RT</i>/<i>V</i><br>which is exactly Dalton’s law. A neat corollary drops out immediately: dividing <i>P</i><sub><i>i</i></sub> by <i>P</i><sub>total</sub>,<br><i>P</i><sub><i>i</i></sub>/<i>P</i><sub>total</sub> = <i>n</i><sub><i>i</i></sub>/<i>n</i><sub>total</sub> = <i>x</i><sub><i>i</i></sub><br>so each gas’s share of the pressure equals its <b>mole fraction</b> <i>x</i><sub><i>i</i></sub>. This is the single most useful mixture result for exams.',
      },
      {
        t: 'proc',
        title: 'Procedure — choosing the right form in a problem',
        steps: [
          'If the amount of gas is fixed and only <i>P</i>, <i>V</i>, <i>T</i> change → use the combined law <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub>. (Units of <i>P</i> and <i>V</i> can be any consistent pair; <i>T</i> <b>must</b> be in kelvin.)',
          'If mass or density or molar mass appears → use <i>PV</i> = (<i>m</i>/<i>M</i>)<i>RT</i> or <i>P</i> = <i>ρRT</i>/<i>M</i>.',
          'If number of molecules appears → use <i>PV</i> = <i>Nk</i><sub>B</sub><i>T</i>.',
          'If a mixture is involved → add partial pressures (Dalton), i.e. work with total moles.',
        ],
      },
      {
        t: 'p',
        html: 'The single most common slip: leaving temperature in Celsius. Every form above demands <b>absolute temperature in kelvin</b>, <i>T</i> (K) = <i>t</i>(°C) + 273.15.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A sealed cylinder holds 2.0 L of an ideal gas at 27 °C and a pressure of 1.0 atm. The gas is compressed to 0.50 L and simultaneously heated to 127 °C. Find the new pressure.',
        steps: [
          '<b>Given:</b> <i>P</i><sub>1</sub> = 1.0 atm, <i>V</i><sub>1</sub> = 2.0 L, <i>T</i><sub>1</sub> = 27 + 273 = 300 K; <i>V</i><sub>2</sub> = 0.50 L, <i>T</i><sub>2</sub> = 127 + 273 = 400 K.',
          'The amount of gas is fixed, so apply the combined gas law:<br><i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> ⇒ <i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> · <i>V</i><sub>1</sub>/<i>V</i><sub>2</sub> · <i>T</i><sub>2</sub>/<i>T</i><sub>1</sub><br><i>P</i><sub>2</sub> = 1.0 × 2.0/0.50 × 400/300 = 1.0 × 4 × 4/3 = 5.33 atm',
          'Note we never converted litres to m<sup>3</sup> — in a ratio equation the volume units cancel, but the temperatures still had to be in kelvin.',
        ],
        ans: 'The new pressure is ≈ 5.3 atm.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'At STP, a certain gas has a density of 1.25 g L<sup>−1</sup>. Identify its molar mass (and hence the likely gas).',
        steps: [
          '<b>Speed method:</b> At STP, one mole of any ideal gas occupies 22.4 L. So molar mass is just density times molar volume:<br><i>M</i> = <i>ρ</i> × <i>V</i><sub><i>m</i></sub> = 1.25 g L<sup>−1</sup> × 22.4 L mol<sup>−1</sup>',
          '<b>The trap:</b> the formula <i>M</i> = <i>ρRT</i>/<i>P</i> tempts students into a full plug-in. If you do go that route, the killer mistake is using <i>T</i> = 0 (reading “STP” as 0 °C and forgetting the +273), which makes <i>M</i> = 0 — an instant red flag. At STP, always shortcut through <i>M</i> = 22.4 <i>ρ</i> and skip <i>R</i>, <i>T</i>, <i>P</i> entirely.',
        ],
        ans: '<i>M</i> = 28 g mol<sup>−1</sup> → nitrogen (N<sub>2</sub>) or carbon monoxide (CO).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A rigid 10.0 L vessel contains 4.0 g of oxygen (O<sub>2</sub>, <i>M</i> = 32) and 2.0 g of helium (He, <i>M</i> = 4) at 300 K. Find (a) the total pressure exerted on the walls, and (b) the partial pressure of helium.',
        steps: [
          '<b>Concept 1 — moles from mass:</b><br><i>n</i><sub>O₂</sub> = 4.0/32 = 0.125 mol, <i>n</i><sub>He</sub> = 2.0/4 = 0.50 mol<br><i>n</i><sub>total</sub> = 0.625 mol',
          '<b>Concept 2 — Dalton + ideal gas equation.</b> Total pressure uses total moles (convert <i>V</i> = 10.0 L = 1.0 × 10<sup>−2</sup> m<sup>3</sup>):<br><i>P</i><sub>total</sub> = <i>n</i><sub>total</sub><i>RT</i>/<i>V</i> = (0.625 × 8.314 × 300)/(1.0 × 10<sup>−2</sup>) ≈ 1.56 × 10<sup>5</sup> Pa ≈ 1.54 atm',
          '(b) Helium’s partial pressure scales with its mole fraction, <i>x</i><sub>He</sub> = 0.50/0.625 = 0.80:<br><i>P</i><sub>He</sub> = <i>x</i><sub>He</sub> <i>P</i><sub>total</sub> = 0.80 × 1.56 × 10<sup>5</sup>',
          'The lesson: each gas fills the whole vessel independently; pressures add, masses do not tell you pressure until converted to moles.',
        ],
        ans: '(a) <i>P</i><sub>total</sub> ≈ 1.56 × 10<sup>5</sup> Pa; (b) <i>P</i><sub>He</sub> ≈ 1.25 × 10<sup>5</sup> Pa',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two identical glass bulbs, each of volume <i>V</i>, are joined by a thin tube of negligible volume and contain an ideal gas at a common pressure <i>P</i><sub>0</sub> and temperature <i>T</i><sub>0</sub> = 300 K throughout. One bulb is now immersed in a bath at <i>T</i><sub>1</sub> = 400 K while the other is held at <i>T</i><sub>2</sub> = 300 K. Find the new common pressure <i>P</i> in the connected system.',
        steps: [
          '<b>The key idea:</b> the bulbs are connected, so gas flows until the <b>pressure is common</b> — but the <b>total number of moles is conserved</b>. Temperature differs between bulbs, so each contributes a different number of moles at the same <i>P</i>.',
          '<b>Initial total moles</b> (both bulbs at <i>T</i><sub>0</sub>, pressure <i>P</i><sub>0</sub>):<br><i>n</i> = <i>P</i><sub>0</sub><i>V</i>/(<i>RT</i><sub>0</sub>) + <i>P</i><sub>0</sub><i>V</i>/(<i>RT</i><sub>0</sub>) = 2<i>P</i><sub>0</sub><i>V</i>/(<i>RT</i><sub>0</sub>)',
          '<b>Final total moles</b> (common pressure <i>P</i>; one bulb at <i>T</i><sub>1</sub>, one at <i>T</i><sub>2</sub>):<br><i>n</i> = <i>PV</i>/(<i>RT</i><sub>1</sub>) + <i>PV</i>/(<i>RT</i><sub>2</sub>) = (<i>PV</i>/<i>R</i>)(1/<i>T</i><sub>1</sub> + 1/<i>T</i><sub>2</sub>)',
          '<b>Conserve moles</b> and cancel <i>V</i>/<i>R</i>:<br>2<i>P</i><sub>0</sub>/<i>T</i><sub>0</sub> = <i>P</i>(1/<i>T</i><sub>1</sub> + 1/<i>T</i><sub>2</sub>)<br><i>P</i> = (2<i>P</i><sub>0</sub>/<i>T</i><sub>0</sub>) · 1/(1/<i>T</i><sub>1</sub> + 1/<i>T</i><sub>2</sub>) = (2<i>P</i><sub>0</sub>/<i>T</i><sub>0</sub>) · <i>T</i><sub>1</sub><i>T</i><sub>2</sub>/(<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)',
          'Substitute <i>T</i><sub>0</sub> = 300, <i>T</i><sub>1</sub> = 400, <i>T</i><sub>2</sub> = 300:<br><i>P</i> = (2<i>P</i><sub>0</sub>/300) · (400 × 300)/700 = (2<i>P</i><sub>0</sub>/300) · 120000/700 = 2<i>P</i><sub>0</sub> × 400/700',
          'Heating one half drives gas into the cooler bulb, and the system settles at a higher common pressure. The whole problem turns on the phrase “total moles conserved” — write that equation first and the algebra follows.',
        ],
        ans: 'The pressure rises to 8<i>P</i><sub>0</sub>/7 ≈ 1.14 <i>P</i><sub>0</sub>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A gas occupies 500 mL at 300 K and 1.0 atm. To what temperature must it be heated at constant pressure to occupy 750 mL?',
            a: '450 K',
          },
          {
            q: '[NEET] The density of a gas at 546 K and 2.0 atm is 0.90 g L<sup>−1</sup>. Find its molar mass. (Use <i>R</i> = 0.0821 L atm mol<sup>−1</sup> K<sup>−1</sup>.)',
            a: '≈ 20.2 g mol<sup>−1</sup>',
          },
          {
            q: '[JEE Main] A 5.0 L flask contains 1.4 g of nitrogen (<i>M</i> = 28) and 3.2 g of oxygen (<i>M</i> = 32) at 290 K. Find the total pressure (in Pa) and the mole fraction of oxygen.',
            a: '<i>P</i><sub>total</sub> ≈ 7.23 × 10<sup>4</sup> Pa, <i>x</i><sub>O₂</sub> ≈ 0.667',
          },
          {
            q: '[JEE Main] An open flask is heated from 27 °C to 327 °C at constant atmospheric pressure. What fraction of the air originally present escapes?',
            a: '½ (half the air escapes)',
          },
          {
            q: '[JEE Advanced] A vertical cylinder closed at the bottom and fitted with a frictionless, massless piston of area <i>A</i> contains an ideal gas. Atmospheric pressure is <i>P</i><sub>0</sub>. A mass <i>m</i> is placed on the piston and the gas, initially of length <i>L</i><sub>0</sub> at temperature <i>T</i><sub>0</sub>, is then heated to <i>T</i>. Find the new gas column length <i>L</i> in terms of the given quantities. (Hint: with the mass on top, the gas pressure stays constant — this is an isobaric change.)',
            a: '<i>L</i> = <i>L</i><sub>0</sub>(<i>T</i>/<i>T</i><sub>0</sub>) (pressure is constant at <i>P</i><sub>0</sub> + <i>mg</i>/<i>A</i>, so <i>L</i> ∝ <i>T</i>).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A real gas most closely approaches ideal behaviour at:',
        opts: [
          {
            label: 'high pressure and low temperature',
            nudge: '<b>Trap (A):</b> the reverse condition; high pressure + low temperature is where a gas condenses, the worst case for ideality.',
          },
          { label: 'low pressure and high temperature', nudge: null },
          {
            label: 'high pressure and high temperature',
            nudge: '<b>(C):</b> high pressure alone reintroduces finite-molecular-volume effects even if <i>T</i> is high.',
          },
          { label: 'low pressure and low temperature', nudge: '<b>(D):</b> low temperature lets attractions dominate.' },
        ],
        correct: 1,
        solution: 'Low pressure keeps molecules far apart (intermolecular forces negligible) and high temperature makes kinetic energy dominate any residual attraction — exactly the ideal-gas regime. Students who memorise “extremes are good” without the physics fall for these.',
      },
      {
        t: 'mcq',
        q: 'A fixed mass of ideal gas at 27 °C is heated at constant volume until its pressure doubles. The final temperature is:',
        opts: [
          {
            label: '54 °C',
            nudge: '<b>Trap (A):</b> doubling the Celsius value (27 → 54) — the classic Celsius error; pressure is proportional to absolute temperature, not Celsius.',
          },
          { label: '327 °C', nudge: null },
          {
            label: '600 °C',
            nudge: '<b>(C):</b> doubling 300 correctly to get 600 but then forgetting to convert back to Celsius.',
          },
          { label: '273 °C', nudge: '<b>(D):</b> confusing the +273 offset with the answer itself.' },
        ],
        correct: 1,
        solution: 'At constant volume, <i>P</i> ∝ <i>T</i> (in kelvin). <i>T</i><sub>1</sub> = 300 K, and doubling pressure needs <i>T</i><sub>2</sub> = 600 K = 327 °C.',
      },
      {
        t: 'mcq',
        q: 'Equal masses of helium (<i>M</i> = 4) and oxygen (<i>M</i> = 32) are mixed in a container. The ratio of the partial pressure of helium to that of oxygen is:',
        opts: [
          {
            label: '1 ∶ 1',
            nudge: '<b>Trap (A):</b> assuming equal mass ⟹ equal pressure (ignores molar mass).',
          },
          {
            label: '1 ∶ 8',
            nudge: '<b>(B):</b> inverting the ratio — using <i>M</i> directly instead of 1/<i>M</i>.',
          },
          { label: '8 ∶ 1', nudge: null },
          {
            label: '4 ∶ 32',
            nudge: '<b>(D):</b> quoting the molar-mass ratio 4 ∶ 32 which again forgets that lighter molecules give more moles per gram.',
          },
        ],
        correct: 2,
        solution: 'Partial pressure is set by moles, and for equal masses <i>n</i> = <i>m</i>/<i>M</i>, so <i>n</i><sub>He</sub> ∶ <i>n</i><sub>O₂</sub> = 1/4 ∶ 1/32 = 8 ∶ 1. Pressures share this ratio.',
      },
      {
        t: 'mcq',
        q: 'Two gases A and B diffuse through a porous plug under identical conditions. Gas A diffuses 1.5 times as fast as gas B. The ratio of their molar masses <i>M</i><sub><i>A</i></sub> ∶ <i>M</i><sub><i>B</i></sub> is:',
        opts: [
          { label: '3 ∶ 2', nudge: '<b>(A):</b> using the rate ratio directly without squaring.' },
          { label: '2 ∶ 3', nudge: '<b>(B):</b> inverting the rate ratio and not squaring.' },
          { label: '4 ∶ 9', nudge: null },
          {
            label: '9 ∶ 4',
            nudge: '<b>Trap (D):</b> squaring but forgetting to invert — gives <i>M</i><sub><i>B</i></sub> ∶ <i>M</i><sub><i>A</i></sub> instead of <i>M</i><sub><i>A</i></sub> ∶ <i>M</i><sub><i>B</i></sub>.',
          },
        ],
        correct: 2,
        solution: 'By Graham’s law, <i>r</i><sub><i>A</i></sub>/<i>r</i><sub><i>B</i></sub> = √(<i>M</i><sub><i>B</i></sub>/<i>M</i><sub><i>A</i></sub>) = 1.5. Squaring: <i>M</i><sub><i>B</i></sub>/<i>M</i><sub><i>A</i></sub> = 2.25, so <i>M</i><sub><i>A</i></sub>/<i>M</i><sub><i>B</i></sub> = 1/2.25 = 4/9. The lighter gas diffuses faster, so the faster gas A must be the lighter one — a quick sanity check that rules out <b>(D)</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>The kelvin sin.</b> Forgetting to convert °C to K wrecks any gas-law calculation. Pressure and volume can stay in any consistent units inside a ratio, but <i>T</i> must be absolute. Build a reflex: the instant you see Celsius, add 273.',
          '<b>Mass is not moles.</b> Pressure, Dalton’s law, and Avogadro’s law all care about the number of molecules, never the mass. Equal masses of two gases give different pressures; always convert mass to moles first.',
          '<b>Mixing up Charles’ and Gay-Lussac’s.</b> Charles’ law (<i>V</i>/<i>T</i>) holds at constant <b>pressure</b>; the pressure law (<i>P</i>/<i>T</i>) holds at constant <b>volume</b>. Tag the constant variable before writing anything.',
          '<b>Treating SI as optional in <i>PV</i> = <i>nRT</i>.</b> When you use <i>R</i> = 8.314, pressure must be in pascal and volume in m<sup>3</sup>. If you prefer litres and atmospheres, switch to <i>R</i> = 0.0821 L atm mol<sup>−1</sup> K<sup>−1</sup>. Mismatching <i>R</i> with the units is a silent error.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (ratio over plug-in):</b> for “before/after” problems with fixed mass, never compute <i>n</i>. Just write <i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> and cancel whatever stays constant. It is faster and immune to unit-conversion mistakes — a genuine NEET time-saver.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Master equation',
            note: '<i>PV</i> = <i>nRT</i> = (<i>m</i>/<i>M</i>)<i>RT</i> = <i>Nk</i><sub>B</sub><i>T</i>; density form <i>P</i> = <i>ρRT</i>/<i>M</i>.',
          },
          {
            f: 'Fixed-mass shortcut',
            note: '<i>P</i><sub>1</sub><i>V</i><sub>1</sub>/<i>T</i><sub>1</sub> = <i>P</i><sub>2</sub><i>V</i><sub>2</sub>/<i>T</i><sub>2</sub> — kelvin only.',
          },
          {
            f: 'The four laws',
            note: 'Boyle <i>PV</i> = const (<i>T</i> fixed); Charles <i>V</i>/<i>T</i> = const (<i>P</i> fixed); Gay-Lussac <i>P</i>/<i>T</i> = const (<i>V</i> fixed); Avogadro <i>V</i> ∝ <i>n</i>.',
          },
          {
            f: 'Mixtures',
            note: 'Dalton — <i>P</i><sub>total</sub> = ∑<i>P</i><sub><i>i</i></sub>, work with total moles; partial pressure = mole fraction × total.',
          },
          { f: 'Diffusion', note: 'Graham — rate ∝ 1/√<i>M</i> (lighter = faster).' },
          {
            f: 'Constants',
            note: '<i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>; <i>k</i><sub>B</sub> = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>; molar volume at STP = 22.4 L.',
          },
          { f: 'Quick check at STP', note: '<i>M</i> = 22.4 × (density in g/L).' },
        ],
        aids: ['Ideal regime: “Low <i>P</i>, high <i>T</i> — molecules free and flighty.”'],
      },
    ],
  },
];
