import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topics 03 and 04: pp. 183–198 of the Class 11 Chemistry Master
 * Reference, word for word: Molecular Orbital Theory (MOT) & Hydrogen Bonding
 * (pp. 183–190) and Coordinate Bonding, Back Bonding & Advanced Bond-Angle
 * Concepts (pp. 191–198), each split at its Sections 1 to 8. Figures 4.6
 * (p. 188, nitrophenols), 4.7 (p. 195, diborane) and 4.8 (p. 195, NH₃ + H⁺)
 * are redrawn in lib/diagrams/chemistry-11-04b.ts.
 *
 * MO notation: σ and π upright (the book sets both in maths italic), the star
 * of an antibonding orbital a plain asterisk, not <sup> (σ*1s, π*2p<sub><i>x</i></sub>:
 * the reader cannot raise "*", so <sup>*</sup> would fall to the baseline),
 * orbital labels upright with italic axis subscripts (2p<sub><i>z</i></sub>),
 * occupancy as a superscript after the label. Hybrid labels upright (sp<sup>3</sup>),
 * as are pπ–pπ and pπ–dπ. <i>N</i><sub>b</sub> and <i>N</i><sub>a</sub> carry upright
 * label subscripts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 183–190 ─────────────────────────
  {
    n: '03',
    title: 'Molecular Orbital Theory (MOT) & Hydrogen Bonding',
    kalam: 'Two atomic orbitals always make exactly two molecular orbitals — one bonding, one antibonding.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> MOT is a guaranteed scorer — JEE Main almost always has a bond-order or magnetic-behaviour question, NEET asks 1–2 on bond order and paramagnetism, and CBSE Boards expect an MO configuration with bond order (2–3 marks). Hydrogen bonding appears as boiling-point/anomaly reasoning across all four exams and is a favourite for assertion–reason items.',
      },
      {
        t: 'p',
        html: 'Valence bond theory gave us a comfortable picture: a bond is two atoms sharing an overlapping pair of electrons, each electron staying loyal to its parent atom. That picture works beautifully — until it meets oxygen. Liquid oxygen, poured between the poles of a magnet, sticks to the magnetic field; O<sub>2</sub> is paramagnetic, meaning it has unpaired electrons. But every Lewis and VBT structure of O<sub>2</sub> pairs all the electrons up neatly. The theory predicts the wrong magnetism. Something deeper is going on.',
      },
      {
        t: 'p',
        html: '<b>Molecular Orbital Theory (MOT)</b> is that deeper picture. Its central idea is radical: when atoms combine, their atomic orbitals don’t just overlap locally — they merge into brand-new orbitals that belong to the whole molecule. Electrons no longer “belong” to one atom; they occupy these <b>molecular orbitals</b> spread across both nuclei.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine two musicians each humming a note. Bring them together and the sound waves combine two ways: in phase, where crests reinforce crests and the sound swells (a <b>bonding</b> molecular orbital, lower energy, electron density piled up between the nuclei where it glues them together), and out of phase, where crest meets trough and they partly cancel (an <b>antibonding</b> molecular orbital, higher energy, with a node between the nuclei that pushes the atoms apart). Two atomic orbitals always make exactly two molecular orbitals — one bonding, one antibonding. When the overlap is head-on along the internuclear axis, the result is a σ molecular orbital, cylindrically symmetric about that axis; when two parallel p orbitals overlap sidewise, the result is a π molecular orbital, which carries a nodal plane running through both nuclei. For O<sub>2</sub> and F<sub>2</sub>, a σ molecular orbital from a given shell is stabilised more than the corresponding π one; in the lighter diatomics (Li<sub>2</sub> to N<sub>2</sub>) s–p mixing lifts σ2p<sub><i>z</i></sub> above π2p. Fill the bonding ones and the molecule is stable; pour electrons into antibonding ones and you undo the bonding.',
      },
      {
        t: 'p',
        html: 'This bookkeeping gives us one gloriously simple number — the <b>bond order</b> — that tells us whether a molecule exists, how strong its bond is, and how long it is. And because MOT tracks every electron individually, it predicts magnetism correctly: O<sub>2</sub> turns out to have two unpaired electrons sitting in antibonding orbitals, exactly explaining the magnet experiment that defeated VBT.',
      },
      {
        t: 'p',
        html: 'The second half of this topic is gentler but everywhere in daily life: the <b>hydrogen bond</b>. When hydrogen is bonded to a small, greedy (highly electronegative) atom — fluorine, oxygen, or nitrogen — the shared electrons are dragged so far toward that atom that the hydrogen is left almost as a bare, partially positive proton (<i>δ</i><sup>+</sup>). This exposed proton reaches out and clings to a lone pair on a neighbouring F, O, or N atom. That attraction is the hydrogen bond. It is far weaker than a covalent bond, yet it is why water is liquid (not gas) at room temperature, why ice floats, and why the DNA in every cell of your body holds its two strands together.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a crowded Indian wedding where guests (molecules) keep loosely linking arms with neighbours. Each link is flimsy, easily broken — but with thousands of them, the whole crowd moves as one sticky mass and is hard to disperse. Hydrogen bonds are those linked arms: individually weak, collectively responsible for water’s stubbornly high boiling point.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> MOT as taught here applies cleanly to <b>homonuclear diatomic molecules</b> of the second period; heteronuclear and polyatomic cases need adjustments beyond this level. The simple energy-level ordering even changes between the lighter (Li<sub>2</sub> to N<sub>2</sub>) and heavier (O<sub>2</sub>, F<sub>2</sub>) diatomics — a crossover you must not forget. Hydrogen bonding requires both a small, highly electronegative atom and an available lone pair; it does not form with Cl despite chlorine’s electronegativity, because Cl is too large and diffuse for effective bonding.',
      },

      { t: 'part', title: 'Key parameters, formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Bond order (MO definition)',
        main: 'Bond order = ½(<i>N</i><sub>b</sub> − <i>N</i><sub>a</sub>)',
        legend: ['<i>N</i><sub>b</sub> = number of electrons in bonding MOs', '<i>N</i><sub>a</sub> = number in antibonding MOs'],
        note: 'A bond order > 0 means the species exists; = 0 means it does not. <b>Higher bond order ⇒ greater bond dissociation energy, greater stability, and shorter bond length.</b>',
      },
      {
        t: 'p',
        html: '<b>Energy-level ordering of molecular orbitals.</b> For molecules <b>up to N<sub>2</sub></b> (i.e. Li<sub>2</sub> to N<sub>2</sub>, ≤ 14 electrons), the π orbitals lie below σ2p<sub><i>z</i></sub>:<br>σ1s < σ*1s < σ2s < σ*2s < (π2p<sub><i>x</i></sub> = π2p<sub><i>y</i></sub>) < σ2p<sub><i>z</i></sub> < (π*2p<sub><i>x</i></sub> = π*2p<sub><i>y</i></sub>) < σ*2p<sub><i>z</i></sub><br>For molecules <b>after N<sub>2</sub></b> (O<sub>2</sub>, F<sub>2</sub>), σ2p<sub><i>z</i></sub> drops below the π orbitals:<br>σ1s < σ*1s < σ2s < σ*2s < σ2p<sub><i>z</i></sub> < (π2p<sub><i>x</i></sub> = π2p<sub><i>y</i></sub>) < (π*2p<sub><i>x</i></sub> = π*2p<sub><i>y</i></sub>) < σ*2p<sub><i>z</i></sub>',
      },
      {
        t: 'def',
        term: 'Magnetic behaviour',
        html: 'Unpaired electron(s) in any MO ⇒ <b>paramagnetic</b> (attracted by a magnetic field). All electrons paired ⇒ <b>diamagnetic</b>.',
      },
      {
        t: 'def',
        term: 'Conditions for atomic orbitals to combine (LCAO)',
        html: 'The combining atomic orbitals must have (i) comparable energies, (ii) significant spatial overlap, and (iii) the same symmetry about the molecular axis.',
      },
      {
        t: 'def',
        term: 'Hydrogen bond',
        html: 'An attractive force binding the <i>δ</i><sup>+</sup> hydrogen of one molecule (where H is covalently bonded to F, O, or N) to the lone pair of an electronegative F, O, or N atom. Strength is roughly 10–40 kJ mol<sup>−1</sup> — about a tenth of a covalent bond, but far stronger than ordinary van der Waals attraction. Two structural types: <b>intermolecular</b> (between separate molecules) and <b>intramolecular</b> (within a single molecule).',
      },

      { t: 'part', title: 'Key procedures and logical frameworks' },
      {
        t: 'proc',
        title: 'Procedure A — Building an MO diagram and bond order',
        steps: [
          '<b>Count the total electrons</b> in the molecule or ion (adjust for charge: add for anions, subtract for cations).',
          '<b>Choose the correct ordering</b> — the “up to N<sub>2</sub>” scheme for ≤ 14 electrons, the “after N<sub>2</sub>” scheme for O<sub>2</sub>, F<sub>2</sub>. <b>Why this matters:</b> the position of σ2p<sub><i>z</i></sub> relative to the π orbitals decides which orbital fills last and therefore the magnetism.',
          '<b>Fill the MOs</b> following the Aufbau principle (lowest energy first), the Pauli exclusion principle (max two electrons per orbital, opposite spins), and Hund’s rule (singly occupy degenerate π orbitals before pairing).',
          '<b>Compute bond order</b> = ½(<i>N</i><sub>b</sub> − <i>N</i><sub>a</sub>).',
          '<b>Read off magnetism</b> from any unpaired electrons.',
        ],
      },
      {
        t: 'p',
        html: 'For example, N<sub>2</sub> (14 electrons, “up to N<sub>2</sub>” scheme) fills through σ2p<sub><i>z</i></sub> with all electrons paired: <i>N</i><sub>b</sub> = 10, <i>N</i><sub>a</sub> = 4, bond order = 3, diamagnetic — consistent with its famously inert triple bond and the highest bond enthalpy among homonuclear diatomics.',
      },
      {
        t: 'p',
        html: '<b>The second-period diatomic series — reading the pattern</b><br>Filling the same scheme across the period reveals a clean pattern worth committing to memory. H<sub>2</sub> has bond order 1; He<sub>2</sub> has bond order 0 and therefore does not exist. Li<sub>2</sub> (bond order 1) and Be<sub>2</sub> (bond order 0, non-existent) repeat that pattern one shell up. Then comes the most instructive case, B<sub>2</sub>: with 10 electrons in the “up to N<sub>2</sub>” scheme, its last two electrons enter the degenerate π2p<sub><i>x</i></sub> and π2p<sub><i>y</i></sub> orbitals singly by Hund’s rule, making B<sub>2</sub> <b>paramagnetic</b> with bond order 1. This is possible only because the π orbitals lie below σ2p<sub><i>z</i></sub> in the light diatomics — the very crossover noted above. C<sub>2</sub> (bond order 2, diamagnetic) and N<sub>2</sub> (bond order 3) complete the rising trend.<br><br>The deeper point is why MOT earns its place beside VBT. Valence bond theory cannot explain the paramagnetism of O<sub>2</sub> or B<sub>2</sub>, cannot say why He<sub>2</sub> refuses to form, and has no clean account of odd-electron species like NO. MOT settles all of these from a single recipe — fill the molecular orbitals, then count. That economy is the reason the theory survives despite its abstraction.',
      },
      {
        t: 'p',
        html: '<b>Procedure B — Why ionisation can strengthen a bond</b><br>A counter-intuitive but exam-favourite result: removing an electron does not always weaken a bond. If the electron is pulled from an <b>antibonding</b> orbital, <i>N</i><sub>a</sub> drops, so bond order rises. <b>Reasoning:</b> antibonding electrons work against the bond; evicting one removes a destabilising influence. This is why NO<sup>+</sup> (bond order 3) has a stronger, shorter bond than neutral NO (bond order 2.5) — the lost electron came from a π* orbital. Always check which orbital loses the electron before predicting the effect.',
      },
      {
        t: 'proc',
        title: 'Procedure C — Classifying and reasoning about hydrogen bonds',
        steps: [
          '<b>Check the donor:</b> is H covalently bonded to F, O, or N? If not, no hydrogen bond.',
          '<b>Check for an acceptor lone pair</b> on a nearby F, O, or N.',
          '<b>Decide the type:</b> if the donor and acceptor are on different molecules, the bond is <b>intermolecular</b> — it links molecules together, raising boiling point, melting point, and viscosity, and promoting association and water-solubility. If donor and acceptor lie within the same molecule (geometrically close, as in an ortho-substituted ring), the bond is <b>intramolecular</b> — it ties the molecule into itself, reducing intermolecular association and therefore lowering boiling point and water-solubility relative to an isomer that can only H-bond between molecules.',
        ],
      },
      {
        t: 'p',
        html: 'The structural consequence framework: intermolecular H-bonding builds networks (high H<sub>2</sub>O boiling point, the open hexagonal cage that makes ice less dense than liquid water), while intramolecular H-bonding isolates molecules (steam-volatility of ortho isomers).',
      },
      {
        t: 'p',
        html: '<b>Consequences of hydrogen bonding</b><br>The flimsy hydrogen bond, multiplied across countless molecules, produces some of chemistry’s most consequential anomalies. Water boils at 100 °C rather than the far lower temperature its modest molar mass would predict, because each molecule engages in an extended three-dimensional network of hydrogen bonds that must be torn apart to vaporise it. The same network gives water its unusually high specific heat — which moderates climate and the temperature of living organisms — and explains why <b>ice floats</b>: on freezing, molecules lock into an open hexagonal cage held rigid by hydrogen bonds, so solid water is less dense than the liquid, a reversal of the normal solid-denser-than-liquid rule and the reason ponds freeze top-down and aquatic life survives the winter. Hydrogen bonding also dictates solubility — ammonia and the lower alcohols dissolve freely in water precisely because they can hydrogen-bond with it. And in biology the same weak interaction is structural bedrock: it pairs the bases of the DNA double helix and holds proteins in their folded shapes, weak enough to be unzipped during replication yet collectively strong enough to safeguard the genetic code.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Write the molecular orbital electronic configuration of the oxygen molecule O<sub>2</sub>, calculate its bond order, and predict its magnetic behaviour.',
        steps: [
          '<b>Step 1 — electron count:</b> O<sub>2</sub> has 8 + 8 = 16 electrons.',
          '<b>Step 2 — ordering:</b> oxygen is after N<sub>2</sub>, so σ2p<sub><i>z</i></sub> fills before the π orbitals.',
          '<b>Step 3 — configuration:</b><br>σ1s<sup>2</sup> σ*1s<sup>2</sup> σ2s<sup>2</sup> σ*2s<sup>2</sup> σ2p<sub><i>z</i></sub><sup>2</sup> π2p<sub><i>x</i></sub><sup>2</sup> π2p<sub><i>y</i></sub><sup>2</sup> π*2p<sub><i>x</i></sub><sup>1</sup> π*2p<sub><i>y</i></sub><sup>1</sup>',
          '<b>Step 4 — bond order:</b> <i>N</i><sub>b</sub> = 10 (the σ1s, σ2s, σ2p<sub><i>z</i></sub>, π2p<sub><i>x</i></sub>, π2p<sub><i>y</i></sub> pairs) and <i>N</i><sub>a</sub> = 6 (the two σ* pairs plus the two single π* electrons): bond order = ½(10 − 6)',
          '<b>Step 5 — magnetism:</b> the last two electrons singly occupy the degenerate π*2p<sub><i>x</i></sub> and π*2p<sub><i>y</i></sub> orbitals (Hund’s rule). <b>Two unpaired electrons.</b>',
        ],
        ans: 'Bond order 2, paramagnetic — the very result VBT could not explain.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Arrange the boiling points of H<sub>2</sub>O, H<sub>2</sub>S and H<sub>2</sub>Se in decreasing order.',
        steps: [
          '<b>Speed approach.</b> Tempting trap: “boiling point rises with molar mass, so H<sub>2</sub>Se > H<sub>2</sub>S > H<sub>2</sub>O.” That reasoning is correct only when hydrogen bonding is absent. Here the key flag is the central atom: <b>oxygen is small and highly electronegative, so H<sub>2</sub>O has strong intermolecular hydrogen bonding</b> — sulphur and selenium do not. The hydrogen-bond network in water overwhelms the mass trend and shoots its boiling point far above the others. Among H<sub>2</sub>S and H<sub>2</sub>Se (no H-bonding), the normal mass trend applies.',
          '<b>Trap:</b> the molar-mass rule alone gives the wrong ranking; always check for an F/O/N–H donor first.',
        ],
        ans: 'H<sub>2</sub>O ≫ H<sub>2</sub>Se > H<sub>2</sub>S.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Nitric oxide, NO, loses an electron to form NO<sup>+</sup>. Determine the bond order and magnetic nature of both species, and state how the bond length changes.',
        steps: [
          'This combines odd-electron MO filling, bond-order arithmetic, and the antibonding-removal idea.',
          'For NO (7 + 8 = 15 electrons): filling gives <i>N</i><sub>b</sub> = 10 and <i>N</i><sub>a</sub> = 5, with the fifteenth (odd) electron in a π* orbital. Bond order = ½(10 − 5) = 2.5; one unpaired electron ⇒ <b>paramagnetic</b>.',
          'Removing one electron to form NO<sup>+</sup> (14 electrons) takes it from the singly-occupied <b>antibonding</b> π* orbital. Now <i>N</i><sub>b</sub> = 10, <i>N</i><sub>a</sub> = 4: bond order = ½(10 − 4) = 3; all electrons paired ⇒ <b>diamagnetic</b>.',
          'Because bond order rises from 2.5 to 3, the bond in NO<sup>+</sup> is <b>stronger and shorter</b> than in NO.',
        ],
        ans: 'NO — bond order 2.5, paramagnetic; NO<sup>+</sup> — bond order 3, diamagnetic, with a shorter bond. Ionisation strengthened the bond because the electron left an antibonding orbital.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'c11-04-fig-4.6',
        q: 'ortho-Nitrophenol melts at 45 °C and is appreciably steam-volatile, whereas para-nitrophenol melts at 114 °C and is not steam-volatile. Account for this difference in terms of hydrogen bonding.',
        steps: [
          'Both isomers carry an –OH group (H-bond donor) and an –NO<sub>2</sub> group (H-bond acceptor); the difference lies entirely in geometry.',
          'In the ortho isomer the –OH and –NO<sub>2</sub> groups are adjacent, close enough for the phenolic hydrogen to bend over and bond to an oxygen of the same molecule’s nitro group. This is an <b>intramolecular</b> hydrogen bond (a chelate-like ring). Each molecule satisfies its own H-bonding internally, so very little <b>intermolecular</b> association remains — the molecules are effectively independent, easily separated, hence low melting point and ready volatility with steam.',
          'In the para isomer the two groups sit on opposite ends of the ring, far too far apart to bond internally. The only option is <b>intermolecular</b> hydrogen bonding, which links many molecules into an extended network. Breaking that network costs energy, giving a high melting point and no steam-volatility.',
        ],
        ans: 'ortho-nitrophenol forms an <b>intramolecular</b> H-bond (low melting point, steam-volatile); para-nitrophenol can form only <b>intermolecular</b> H-bonds (high melting point, non-volatile). The deep lesson: intramolecular H-bonding lowers the physical-property values that intermolecular H-bonding raises.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the MO electronic configuration of N<sub>2</sub>, give its bond order, and state its magnetic behaviour.',
            a: 'σ1s<sup>2</sup> σ*1s<sup>2</sup> σ2s<sup>2</sup> σ*2s<sup>2</sup> π2p<sub><i>x</i></sub><sup>2</sup> π2p<sub><i>y</i></sub><sup>2</sup> σ2p<sub><i>z</i></sub><sup>2</sup>; <i>N</i><sub>b</sub> = 10, <i>N</i><sub>a</sub> = 4, bond order 3, diamagnetic.',
          },
          {
            q: '[NEET] Why does He<sub>2</sub> not exist while He<sub>2</sub><sup>+</sup> does? Support your answer with bond orders.',
            a: 'He<sub>2</sub>: bond order ½(2 − 2) = 0 ⇒ does not exist; He<sub>2</sub><sup>+</sup>: bond order ½(2 − 1) = 0.5 ⇒ exists (weakly).',
          },
          {
            q: '[JEE Main] Calculate the bond orders of O<sub>2</sub>, O<sub>2</sub><sup>+</sup>, O<sub>2</sub><sup>−</sup> and O<sub>2</sub><sup>2−</sup> and arrange them in order of increasing bond length.',
            a: 'Bond orders: O<sub>2</sub><sup>+</sup> (2.5) > O<sub>2</sub> (2) > O<sub>2</sub><sup>−</sup> (1.5) > O<sub>2</sub><sup>2−</sup> (1); increasing bond length is the reverse: O<sub>2</sub><sup>+</sup> < O<sub>2</sub> < O<sub>2</sub><sup>−</sup> < O<sub>2</sub><sup>2−</sup>.',
          },
          {
            q: '[JEE Main] Explain why hydrogen fluoride (HF) has a higher boiling point than hydrogen chloride (HCl), even though HCl has a larger molar mass.',
            a: 'HF forms strong intermolecular hydrogen bonds (F is small and highly electronegative); HCl cannot, so only weak dipole/van der Waals forces operate.',
          },
          {
            q: '[JEE Advanced] The species C<sub>2</sub> has a bond order of 2. Show, using its MO configuration, that this double bond is unusual in being composed of two π bonds with no net σ2p contribution.',
            a: 'C<sub>2</sub> (12 e<sup>−</sup>, “up to N<sub>2</sub>” scheme): σ1s<sup>2</sup> σ*1s<sup>2</sup> σ2s<sup>2</sup> σ*2s<sup>2</sup> π2p<sub><i>x</i></sub><sup>2</sup> π2p<sub><i>y</i></sub><sup>2</sup> with σ2p<sub><i>z</i></sub> empty; bond order = ½(8 − 4) = 2, arising from two filled π bonds and no occupied σ2p<sub><i>z</i></sub>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following species is paramagnetic?',
        opts: [
          { label: 'N<sub>2</sub>', nudge: '<b>(a)</b> N<sub>2</sub>, <b>(c)</b> F<sub>2</sub> and <b>(d)</b> CO all have every electron paired (diamagnetic).' },
          { label: 'O<sub>2</sub>', nudge: null },
          { label: 'F<sub>2</sub>', nudge: '<b>(a)</b> N<sub>2</sub>, <b>(c)</b> F<sub>2</sub> and <b>(d)</b> CO all have every electron paired (diamagnetic).' },
          { label: 'CO', nudge: '<b>(a)</b> N<sub>2</sub>, <b>(c)</b> F<sub>2</sub> and <b>(d)</b> CO all have every electron paired (diamagnetic).' },
        ],
        correct: 1,
        solution: 'Its two highest electrons singly occupy the degenerate π* orbitals (Hund’s rule), giving two unpaired electrons. Even with the N<sub>2</sub> ordering, O<sub>2</sub>’s last two electrons go singly into π*, so this answer survives the classic ordering slip — but other questions do not.',
      },
      {
        t: 'mcq',
        q: 'The bond order of the species with the configuration giving <i>N</i><sub>b</sub> = 8, <i>N</i><sub>a</sub> = 4 is:',
        opts: [
          { label: '1', nudge: '<b>(a)</b> 1 and <b>(c)</b> 3 match no consistent slip — ½(8 − 4) is 2; the usual slips give 4 (forgetting the ½) or 6 (adding instead of subtracting), neither of which is offered.' },
          { label: '2', nudge: null },
          { label: '3', nudge: '<b>(a)</b> 1 and <b>(c)</b> 3 match no consistent slip — ½(8 − 4) is 2; the usual slips give 4 (forgetting the ½) or 6 (adding instead of subtracting), neither of which is offered.' },
          { label: '0', nudge: '<b>(d)</b> 0 is from wrongly setting <i>N</i><sub>b</sub> = <i>N</i><sub>a</sub>.' },
        ],
        correct: 1,
        solution: 'Bond order = ½(8 − 4) = 2.',
      },
      {
        t: 'mcq',
        q: 'Which molecule shows intramolecular hydrogen bonding?',
        opts: [
          { label: 'water', nudge: '<b>(a)</b> water and <b>(d)</b> HF form intermolecular H-bonds (between molecules).' },
          { label: 'ortho-nitrophenol', nudge: null },
          {
            label: 'para-nitrophenol',
            nudge: '<b>(c)</b> para-nitrophenol can only H-bond between molecules because its groups are too far apart for an internal bond.',
          },
          { label: 'HF', nudge: '<b>(a)</b> water and <b>(d)</b> HF form intermolecular H-bonds (between molecules).' },
        ],
        correct: 1,
        solution: 'Its adjacent –OH and –NO<sub>2</sub> groups bond within the same molecule.',
      },
      {
        t: 'mcq',
        q: 'Among O<sub>2</sub>, O<sub>2</sub><sup>+</sup> and O<sub>2</sub><sup>−</sup>, the order of decreasing bond dissociation energy is:',
        opts: [
          {
            label: 'O<sub>2</sub> > O<sub>2</sub><sup>+</sup> > O<sub>2</sub><sup>−</sup>',
            nudge: '<b>(a)</b> misreads O<sub>2</sub><sup>+</sup> as weaker (forgetting the electron is removed from antibonding π*, which raises bond order).',
          },
          { label: 'O<sub>2</sub><sup>+</sup> > O<sub>2</sub> > O<sub>2</sub><sup>−</sup>', nudge: null },
          { label: 'O<sub>2</sub><sup>−</sup> > O<sub>2</sub> > O<sub>2</sub><sup>+</sup>', nudge: '<b>(c)</b> reverses the trend.' },
          { label: 'all equal', nudge: '<b>(d)</b> ignores the bond-order differences entirely.' },
        ],
        correct: 1,
        solution: 'Bond dissociation energy tracks bond order, which is 2.5, 2, 1.5 respectively.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using one MO ordering for everything.</b> The σ2p<sub><i>z</i></sub>/π2p crossover means O<sub>2</sub> and F<sub>2</sub> use a different order from B<sub>2</sub>–N<sub>2</sub>. Memorise both, and pick by electron count (≤ 14 vs above).',
          '<b>Dropping the ½ in bond order.</b> Bond order is half the difference <i>N</i><sub>b</sub> − <i>N</i><sub>a</sub>, not the difference itself. A bond order of “6” for N<sub>2</sub> is the tell-tale sign of this slip.',
          '<b>Assuming ionisation always weakens a bond.</b> Removing an electron from an antibonding orbital (π* in NO or O<sub>2</sub>) raises bond order. Always identify which orbital loses the electron.',
          '<b>Getting the intramolecular effect backwards.</b> Intramolecular H-bonding lowers boiling point and solubility (the molecule satisfies itself), whereas intermolecular H-bonding raises them. Students often credit any H-bond with raising boiling point.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any O<sub>2</sub>-family ion, you needn’t rebuild the whole diagram — start from O<sub>2</sub> (bond order 2) and adjust: every electron added (up to O<sub>2</sub><sup>2−</sup>) goes into π* and drops bond order by 0.5; every electron removed comes from π* and raises it by 0.5. For H-bonding questions, the first reflex is “is there an N–H, O–H or F–H?” — no donor, no hydrogen bond.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Bond order</b> = ½(<i>N</i><sub>b</sub> − <i>N</i><sub>a</sub>). > 0 ⇒ exists; higher ⇒ shorter, stronger bond.', note: '' },
          {
            f: 'Ordering up to N<sub>2</sub>',
            note: 'σ1s, σ*1s, σ2s, σ*2s, (π2p<sub><i>x</i></sub> = π2p<sub><i>y</i></sub>), σ2p<sub><i>z</i></sub>, (π*, π*), σ*2p<sub><i>z</i></sub>. <b>After N<sub>2</sub> (O<sub>2</sub>, F<sub>2</sub>):</b> σ2p<sub><i>z</i></sub> moves before the π pair.',
          },
          {
            f: 'Magnetism',
            note: 'any unpaired electron ⇒ paramagnetic; all paired ⇒ diamagnetic. O<sub>2</sub> is paramagnetic (two π* electrons) — MOT’s signature triumph.',
          },
          {
            f: 'Key bond orders',
            note: 'N<sub>2</sub> = 3, O<sub>2</sub> = 2, F<sub>2</sub> = 1, NO = 2.5, NO<sup>+</sup> = 3, He<sub>2</sub> = 0 (doesn’t exist).',
          },
          {
            f: 'Hydrogen bond',
            note: 'H attached to F/O/N, attracted to a lone pair on F/O/N; ∼ 10–40 kJ mol<sup>−1</sup>. <b>Intermolecular</b> ↑ boiling point/solubility; <b>intramolecular</b> ↓ them.',
          },
        ],
        aids: [
          'H-bond donors are “FON”: only <b>F</b>, <b>O</b>, <b>N</b> bonded to H qualify.',
          'For the O<sub>2</sub> family: “add to π*, drop by half; remove from π*, gain a half.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 191–198 ─────────────────────────
  {
    n: '04',
    title: 'Coordinate Bonding, Back Bonding & Advanced Bond-Angle Concepts',
    kalam: 'A coordinate bond requires a donor with an available lone pair and an acceptor with a vacant orbital — no empty orbital, no dative bond.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic separates a Board-level student from a rank-holder. CBSE asks the coordinate bond as a 1–2 mark definition. NEET reliably tests back bonding (boron halide acidity, trisilylamine). JEE Main leans on Bent’s and Drago’s rules for bond-angle ordering, and JEE Advanced loves electron-deficient bonding (diborane) and back-bonding-driven geometry as assertion–reason or matrix-match items.',
      },
      {
        t: 'p',
        html: 'In the last three topics you built a powerful toolkit: Lewis structures, VSEPR shapes, hybridisation, MOT. But nature keeps a few cards up its sleeve that those rules, applied naively, get wrong. This topic is about those refinements — the concepts that explain the molecules that “shouldn’t” behave the way they do.',
      },
      {
        t: 'p',
        html: 'Start with a gentler idea. In an ordinary covalent bond, each atom contributes one electron to the shared pair — a fair fifty-fifty partnership. But sometimes one atom brings the entire electron pair and the other brings only an empty orbital. That is a <b>coordinate bond</b> (also called a dative bond). Picture two friends starting a shop: in a normal covalent bond both put in capital; in a coordinate bond one friend funds the whole thing while the other merely provides the empty premises. Crucially, once the shop is running, you cannot tell which partner paid — and likewise, once a coordinate bond forms, it is completely indistinguishable from an ordinary covalent bond. The four N–H bonds in the ammonium ion are identical, even though one of them began life as a coordinate bond.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the formation of NH<sub>4</sub><sup>+</sup> is a perfect tiny drama. Ammonia has a lone pair sitting idle on nitrogen. A bare proton H<sup>+</sup> drifts by — all empty orbital, no electrons of its own. Nitrogen donates its lone pair into that emptiness, and a new bond snaps into place. Donor, acceptor, done. The same script plays out in H<sub>3</sub>O<sup>+</sup>, in ozone, and whenever an electron-rich atom meets an electron-poor one.',
      },
      {
        t: 'p',
        html: 'Now the subtler idea: <b>back bonding</b>. Imagine an electron-deficient atom that still has an empty orbital, sitting next to a neighbour with a spare lone pair. The neighbour can “return the favour” by donating that lone pair sideways into the empty orbital — a secondary π-type bond layered on top of the original σ bond. This back-donation quietly rewrites a molecule’s properties: it shortens bonds, stiffens them with partial double-bond character, and can even flatten a molecule that VSEPR insists should be pyramidal. It is why boron trifluoride is a weaker Lewis acid than boron triiodide (exactly backwards from what electronegativity predicts), and why trisilylamine is flat while trimethylamine is a pyramid.',
      },
      {
        t: 'p',
        html: 'Two more refinements fix the bond angles. <b>Bent’s rule</b> tells us that an atom is smart about where it puts its s- and p-character: it aims its fatter, lower-energy s-rich orbitals at electropositive partners and lone pairs, and its p-rich orbitals at electronegative partners — and since p orbitals sit closer to 90°, bonds to electronegative atoms pinch to smaller angles. <b>Drago’s rule</b> goes further: for the heavy hydrides (think PH<sub>3</sub>, H<sub>2</sub>S), the central atom is so large and unenthusiastic that it barely hybridises at all, bonding with nearly pure p orbitals — which is why their angles hug 90° rather than the 107° angle of ammonia.',
      },
      {
        t: 'p',
        html: 'Finally, some molecules simply do not have enough electrons to go around. Diborane (B<sub>2</sub>H<sub>6</sub>) needs fourteen electrons for seven ordinary bonds but owns only twelve. Nature’s solution is the <b>three-centre two-electron bond</b> — a single electron pair smeared across three atoms — a genuinely new kind of bond that the two-centre Lewis picture cannot draw.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> A coordinate bond requires a donor with an available lone pair and an acceptor with a vacant orbital — no empty orbital, no dative bond. Back bonding requires the same geometric adjacency plus an energy/size match for good overlap (it is strong for 2p–2p in BF<sub>3</sub>, weaker as orbitals grow mismatched). The classic pπ–dπ explanation invokes d-orbital participation by third-period atoms — a model that is pedagogically standard and exam-required, though modern computation debates how literally the d-orbitals are involved. Treat these as reliable predictive rules while remembering they are refinements layered onto the simpler theories, not replacements for them.',
      },

      { t: 'part', title: 'Key parameters, definitions and rules' },
      {
        t: 'def',
        term: 'Coordinate (dative) bond',
        html: 'A covalent bond in which both shared electrons are supplied by one atom (the <b>donor</b>, a Lewis base with a lone pair) to another (the <b>acceptor</b>, a Lewis acid with a vacant orbital). Once formed it is identical to a normal covalent bond. Conventionally drawn as an arrow (→) pointing from donor to acceptor. Examples: NH<sub>4</sub><sup>+</sup>, H<sub>3</sub>O<sup>+</sup>, O<sub>3</sub>, CO, the H<sub>3</sub>N → BF<sub>3</sub> adduct, and the bridging bonds in Al<sub>2</sub>Cl<sub>6</sub>.',
      },
      {
        t: 'def',
        term: 'Back bonding',
        html: 'A secondary π-type donation from a filled orbital (a lone pair) of one atom into a vacant orbital of an adjacent atom already joined by a σ bond. Two types:<br>• <b>pπ–pπ:</b> donor and acceptor both use p orbitals — e.g. F(2p) → B(2p) in BF<sub>3</sub>.<br>• <b>pπ–dπ:</b> the acceptor uses a vacant d orbital — e.g. N(2p) → Si(3d) in N(SiH<sub>3</sub>)<sub>3</sub>; also the S=O bonds of SO<sub>4</sub><sup>2−</sup>, SO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>.<br><b>Effects:</b> shorter, stronger bonds (partial double-bond character), altered geometry (planarity), and altered reactivity (basicity/acidity).',
      },
      {
        t: 'p',
        html: '<b>Boron trihalide Lewis acidity (a back-bonding consequence).</b><br>BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub><br>Back bonding is strongest in BF<sub>3</sub> (best 2p–2p overlap), making boron least electron-deficient and the weakest acid; it weakens down the group, so BI<sub>3</sub> is the strongest. (This is the exam-standard explanation; current research attributes the trend partly to reorganisation energy/electrostatics, but give the back-bonding reasoning in exams.)',
      },
      {
        t: 'def',
        term: 'Bent’s rule',
        html: 'Atomic s-character concentrates in hybrid orbitals directed toward electropositive substituents (and lone pairs); p-character concentrates in orbitals directed toward electronegative substituents. Consequence: bonds to more electronegative atoms acquire more p-character and so subtend smaller angles.',
      },
      {
        t: 'def',
        term: 'Drago’s rule',
        html: 'For hydrides of heavier p-block elements (period 3 and below) whose central atom has low electronegativity (≲ 2.5) and large size, effective hybridisation does not occur; bonding uses nearly pure p orbitals, giving bond angles close to 90° (e.g. PH<sub>3</sub> ≈ 93.5°, H<sub>2</sub>S ≈ 92°, AsH<sub>3</sub> ≈ 91.8°).',
      },
      {
        t: 'def',
        term: 'Three-centre two-electron (3c–2e) bond',
        html: 'A single bonding electron pair shared among three atoms, as in the B–H–B bridges of diborane. The hallmark of electron-deficient molecules.',
      },

      { t: 'part', title: 'Key procedures and logical frameworks' },
      {
        t: 'proc',
        title: 'Procedure A — Spotting a coordinate bond',
        steps: [
          '<b>Mentally dissect the species</b> into a neutral donor molecule plus an acceptor. NH<sub>4</sub><sup>+</sup> = NH<sub>3</sub> + H<sup>+</sup>; H<sub>3</sub>O<sup>+</sup> = H<sub>2</sub>O + H<sup>+</sup>; an adduct = Lewis base + Lewis acid.',
          '<b>Locate the lone pair</b> that was donated and the <b>vacant orbital</b> that received it. The bond formed between them is the coordinate bond.',
          '<b>Remember the erasure rule:</b> after formation, that bond is identical to the others. So NH<sub>4</sub><sup>+</sup> has four equivalent N–H bonds, not “three covalent and one different.”',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Predicting back bonding',
        steps: [
          'Find an atom carrying a <b>lone pair</b> bonded to an atom bearing a <b>vacant orbital</b> (an electron-deficient centre such as B, or a third-period atom such as Si, P, S with empty d orbitals).',
          'Check the <b>overlap quality</b> — similar size/energy favours strong back bonding (2p–2p in BF<sub>3</sub>); growing size mismatch weakens it.',
          '<b>Apply the consequences:</b> bond shortening, raised bond order, and — when back bonding rehybridises the donor — a flatter geometry (sp<sup>3</sup> → sp<sup>2</sup> at nitrogen in trisilylamine) and reduced basicity.',
        ],
      },
      {
        t: 'p',
        html: '<b>More faces of back bonding</b><br>Back bonding is not a niche curiosity; it quietly governs a whole family of familiar molecules. <b>Boric acid</b>, B(OH)<sub>3</sub>, is a weak monobasic acid that does not donate a proton at all — its electron-deficient boron instead accepts a hydroxide ion from water, and the same pπ–pπ donation from oxygen lone pairs into boron strengthens the B–O bonds. In the <b>oxyacids and oxyanions of third-period elements</b> — H<sub>2</sub>SO<sub>4</sub>, SO<sub>3</sub>, SO<sub>4</sub><sup>2−</sup>, H<sub>3</sub>PO<sub>4</sub>, HClO<sub>4</sub> — the central atom’s vacant 3d orbitals accept oxygen lone pairs (pπ–dπ), which is why their S=O and P=O bonds are so short and these species so stable. The same principle underlies the toughness of the silicon–oxygen framework in silicones and silicates. So when a question shows a lone-pair donor beside an electron-poor or d-orbital-bearing centre, back bonding is very often the intended key.',
      },
      {
        t: 'p',
        html: 'When a question asks you to compare bond angles, run through these factors in order; the first that distinguishes the molecules usually wins:',
      },
      {
        t: 'proc',
        title: 'Procedure C — The consolidated bond-angle framework',
        steps: [
          '<b>Hybridisation / s-character:</b> more s-character ⇒ larger angle (sp 180° > sp<sup>2</sup> 120° > sp<sup>3</sup> 109.5°).',
          '<b>Lone pairs:</b> each lone pair compresses the angle (lp–bp > bp–bp repulsion); CH<sub>4</sub> > NH<sub>3</sub> > H<sub>2</sub>O.',
          '<b>Electronegativity of the central atom (down a group):</b> lower ⇒ bonding pairs held loosely ⇒ smaller angle; H<sub>2</sub>O > H<sub>2</sub>S.',
          '<b>Drago’s rule (heavy hydrides):</b> near-pure-p bonding pins the angle near 90°; NH<sub>3</sub> (107°) ≫ PH<sub>3</sub> (93.5°).',
          '<b>Electronegativity of the surrounding atoms (Bent’s rule):</b> more electronegative substituents draw p-character and shrink the angle; NH<sub>3</sub> (107°) > NF<sub>3</sub> (102°).',
          '<b>Back bonding / steric size:</b> partial double bonds and bulky substituents can widen angles.',
        ],
      },
      {
        t: 'p',
        html: '<b>A worked framework: the structure of diborane</b><br>Diborane, B<sub>2</sub>H<sub>6</sub>, has only 2(3) + 6(1) = 12 valence electrons, yet a Lewis structure with seven normal two-electron bonds would need fourteen. It is <b>electron-deficient</b>. The actual structure resolves this elegantly:<br>• <b>Four terminal B–H bonds</b> are ordinary two-centre two-electron (2c–2e) bonds, using 8 electrons.<br>• <b>Two bridging B–H–B bonds</b> are three-centre two-electron (3c–2e) “banana” bonds, each a single pair spread over two borons and one hydrogen — using the remaining 4 electrons.',
      },
      {
        t: 'p',
        html: 'Each boron is sp<sup>3</sup> hybridised. The four terminal hydrogens and the two borons lie in one plane; the two bridging hydrogens sit above and below it. The bridge B–H bonds are longer and weaker (≈ 133 pm) than the terminal ones (≈ 119 pm).',
      },
      { t: 'fig', id: 'c11-04-fig-4.7' },
      {
        t: 'p',
        html: 'This is the payoff of the topic: a bond type invisible to the Lewis/VSEPR picture, demanded by the electron count itself.<br><br>Diborane is not alone. The same electron deficiency drives <b>aluminium chloride</b> to dimerise into Al<sub>2</sub>Cl<sub>6</sub> through two bridging chlorine atoms that each donate a lone pair to the electron-poor aluminium, and it makes solid <b>beryllium chloride</b> form long bridged chains. Recognising electron deficiency — a central atom short of an octet with no lone pair to spare — is the cue to look for bridging or multi-centre bonding rather than a tidy two-centre Lewis structure. Together with coordinate bonding and back bonding, it completes the picture of how real molecules bend the simple rules to satisfy their electron budgets.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        fig: 'c11-04-fig-4.8',
        q: 'Identify the coordinate bond in the ammonium ion NH<sub>4</sub><sup>+</sup>, and explain why all four N–H bonds are nevertheless identical.',
        steps: [
          'Begin by dissecting: NH<sub>4</sub><sup>+</sup> = NH<sub>3</sub> + H<sup>+</sup>. In ammonia, nitrogen has three normal N–H covalent bonds and one lone pair. The incoming proton H<sup>+</sup> has no electrons and an empty 1s orbital. Nitrogen <b>donates its lone pair</b> into that empty orbital, forming the fourth N–H bond — a <b>coordinate bond</b>.',
          'Once formed, this bond is electronically identical to the other three: the same two electrons in the same kind of N–H σ overlap. Because electrons are indistinguishable, <b>all four N–H bonds become equivalent</b> in length, strength, and the perfect tetrahedral 109.5° geometry. The “coordinate” label describes only the bond’s origin, not any lasting difference.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Arrange the boron trihalides BF<sub>3</sub>, BCl<sub>3</sub>, BBr<sub>3</sub>, BI<sub>3</sub> in increasing order of Lewis acid strength.',
        steps: [
          '<b>Speed approach.</b> The trap is to reason from electronegativity: “F is most electronegative, so it pulls electron density hardest, leaving B most electron-deficient — BF<sub>3</sub> should be the strongest acid.” That gives the <b>wrong</b> answer. The deciding factor is <b>back bonding</b>: BF<sub>3</sub> has the best 2p–2p overlap, so the strongest back donation fills boron’s empty orbital and makes it the least hungry for an external electron pair. Back bonding weakens as the halogen grows, so acidity rises down the group.',
          '<b>Trap:</b> electronegativity predicts the exact reverse; back bonding overrides it.',
        ],
        ans: 'BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Account for the following bond-angle facts: (i) NH<sub>3</sub> is 107° but NF<sub>3</sub> is 102°; (ii) NH<sub>3</sub> is 107° but PH<sub>3</sub> is only 93.5°.',
        steps: [
          'This needs two different rules — recognising which applies is the skill being tested.',
          '(i) NH<sub>3</sub> vs NF<sub>3</sub> — same central atom (N), same number of lone pairs, both sp<sup>3</sup>. The difference is the substituent. By <b>Bent’s rule</b>, the highly electronegative fluorines pull p-character into the N–F bonds, leaving those bonds more p-like and therefore closer together — so the F–N–F angle (102°) is smaller than the H–N–H angle (107°).',
          '(ii) NH<sub>3</sub> vs PH<sub>3</sub> — same substituent (H), different central atom going down the group. Here <b>Drago’s rule</b> dominates: phosphorus is large and weakly electronegative, so it scarcely hybridises and bonds with nearly pure p orbitals, driving the angle toward 90° (93.5°). Nitrogen, being small, hybridises fully and keeps the angle near tetrahedral (107°).',
        ],
        ans: '(i) Bent’s rule (electronegative substituent shrinks the angle); (ii) Drago’s rule (heavy central atom resists hybridisation, angle near 90°).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Diborane B<sub>2</sub>H<sub>6</sub> has only 12 valence electrons. (a) Explain why it cannot be drawn with normal two-electron bonds, (b) describe its actual bonding, counting each bond type, and (c) state the hybridisation of boron.',
        steps: [
          '(a) Seven B–H/B–B linkages drawn as ordinary 2c–2e bonds would require 7 × 2 = 14 electrons, but the molecule owns only 2(3) + 6(1) = 12. With two electrons missing, a conventional Lewis structure is impossible — the molecule is <b>electron-deficient</b>.',
          '(b) The resolution uses two bond types:<br>• <b>Four terminal B–H bonds</b>, each a normal <b>2c–2e</b> bond (4 × 2 = 8 electrons).<br>• <b>Two bridging B–H–B bonds</b>, each a <b>3c–2e</b> “banana” bond in which one electron pair is delocalised over two borons and one bridging hydrogen (2 × 2 = 4 electrons).',
          'Total: 8 + 4 = 12 electrons — exactly what is available.',
          '(c) Each boron is sp<sup>3</sup> hybridised: two hybrids form the terminal B–H bonds, and the other two point toward the bridging hydrogens to build the 3c–2e bonds.',
        ],
        ans: 'Electron deficiency (12 vs 14 needed) forces two 3c–2e bridge bonds alongside four 2c–2e terminal bonds; boron is sp<sup>3</sup>. Diborane is the textbook demonstration that bonding need not be confined to two atoms per electron pair.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a coordinate bond and identify the coordinate bond in the hydronium ion H<sub>3</sub>O<sup>+</sup>.',
            a: 'A bond where both electrons come from one atom; in H<sub>3</sub>O<sup>+</sup> the third O–H bond is coordinate (water’s oxygen donates a lone pair to H<sup>+</sup>), though all three O–H bonds become equivalent.',
          },
          {
            q: '[NEET] Explain why trisilylamine N(SiH<sub>3</sub>)<sub>3</sub> is planar whereas trimethylamine N(CH<sub>3</sub>)<sub>3</sub> is pyramidal.',
            a: 'In N(SiH<sub>3</sub>)<sub>3</sub> the N lone pair is delocalised into empty Si 3d orbitals (pπ–dπ back bonding); N becomes sp<sup>2</sup> and the molecule is planar. In N(CH<sub>3</sub>)<sub>3</sub> carbon has no suitable empty orbital, so N stays sp<sup>3</sup> and pyramidal.',
          },
          {
            q: '[JEE Main] Arrange PF<sub>3</sub>, PCl<sub>3</sub> and PBr<sub>3</sub> in order of increasing X–P–X bond angle and justify using Bent’s rule.',
            a: 'PF<sub>3</sub> (≈ 97°) < PCl<sub>3</sub> (≈ 100°) < PBr<sub>3</sub> (≈ 101°): as the halogen becomes less electronegative, it draws less p-character, so the angle widens (Bent’s rule).',
          },
          {
            q: '[JEE Main] Account for the bond angle of H<sub>2</sub>S (≈ 92°) being much smaller than that of H<sub>2</sub>O (104.5°).',
            a: 'Drago’s rule — sulphur is large and weakly electronegative, bonds with nearly pure p orbitals, so the angle sits near 90°; oxygen hybridises (sp<sup>3</sup>) and stays near tetrahedral.',
          },
          {
            q: '[JEE Advanced] Aluminium chloride exists as the dimer Al<sub>2</sub>Cl<sub>6</sub> in the vapour phase. Identify the coordinate bonds in the dimer and explain why dimerisation occurs.',
            a: 'Each Al completes its octet by accepting a lone pair from a chlorine of the other AlCl<sub>3</sub> unit, forming two bridging Cl→Al coordinate bonds; dimerisation relieves Al’s electron deficiency.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The π part of the S=O bonds in the sulphate ion SO<sub>4</sub><sup>2−</sup> (drawn with two S=O and two S–O<sup>−</sup>) is best described as:',
        opts: [
          { label: 'pπ–pπ only', nudge: '<b>(a)</b> sulphur’s bonding here invokes its 3d orbitals, not pure p–p.' },
          { label: 'pπ–dπ back bonding', nudge: null },
          { label: 'ionic bonding', nudge: '<b>(c)</b> the S–O bonds are covalent/dative, not purely ionic.' },
          { label: 'hydrogen bonding', nudge: '<b>(d)</b> there is no H to hydrogen-bond.' },
        ],
        correct: 1,
        solution: 'The S=O π bonds form by donation from filled O 2p orbitals into empty S 3d orbitals.',
      },
      {
        t: 'mcq',
        q: 'Which molecule is planar?',
        opts: [
          {
            label: 'NH<sub>3</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> all keep N sp<sup>3</sup> with a localised lone pair, giving pyramidal shapes.',
          },
          {
            label: 'NF<sub>3</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> all keep N sp<sup>3</sup> with a localised lone pair, giving pyramidal shapes.',
          },
          {
            label: 'N(CH<sub>3</sub>)<sub>3</sub>',
            nudge: '<b>(a)</b>, <b>(b)</b> and <b>(c)</b> all keep N sp<sup>3</sup> with a localised lone pair, giving pyramidal shapes. A student who credits carbon, like silicon, with an empty orbital for back bonding picks (c); carbon has none.',
          },
          { label: 'N(SiH<sub>3</sub>)<sub>3</sub>', nudge: null },
        ],
        correct: 3,
        solution: 'Back bonding of the N lone pair into Si 3d orbitals makes N sp<sup>2</sup> and the skeleton planar.',
      },
      {
        t: 'mcq',
        q: 'Using Bent’s rule, the correct order of bond angle is:',
        opts: [
          { label: 'NF<sub>3</sub> > NH<sub>3</sub>', nudge: '<b>(a)</b> reverses the rule.' },
          { label: 'NH<sub>3</sub> > NF<sub>3</sub>', nudge: null },
          { label: 'NH<sub>3</sub> = NF<sub>3</sub>', nudge: '<b>(c)</b> ignores the substituent effect.' },
          { label: 'cannot be predicted', nudge: '<b>(d)</b> Bent’s rule predicts it cleanly.' },
        ],
        correct: 1,
        solution: 'Electronegative F draws p-character into the N–F bonds, shrinking the F–N–F angle to 102° versus 107° in NH<sub>3</sub>.',
      },
      {
        t: 'mcq',
        q: 'The number of three-centre two-electron bonds in diborane B<sub>2</sub>H<sub>6</sub> is:',
        opts: [
          { label: '1', nudge: '<b>(a)</b> counts only one bridge.' },
          { label: '2', nudge: null },
          {
            label: '3',
            nudge: '<b>(c)</b> 3 adds a bridge that does not exist — diborane has only two B–H–B bridges.',
          },
          {
            label: '4',
            nudge: '<b>(d)</b> 4 confuses the bridge bonds with the four terminal B–H bonds, which are ordinary 2c–2e.',
          },
        ],
        correct: 1,
        solution: 'The two B–H–B bridges are 3c–2e bonds; the four terminal B–H bonds are ordinary 2c–2e bonds.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating a coordinate bond as different or weaker.</b> Its origin is special, but once formed it is identical to a normal covalent bond — NH<sub>4</sub><sup>+</sup> has four equivalent N–H bonds, not “three plus a special one.”',
          '<b>Applying raw electronegativity to boron-halide acidity.</b> Electronegativity predicts BF<sub>3</sub> strongest; the real order is the reverse because back bonding (strongest in BF<sub>3</sub>) satisfies boron’s empty orbital. Always invoke back bonding here.',
          '<b>Forcing sp<sup>3</sup>/tetrahedral angles on heavy hydrides.</b> PH<sub>3</sub>, H<sub>2</sub>S, AsH<sub>3</sub> are not 107°/104.5° — Drago’s rule pins them near 90° because the central atom barely hybridises.',
          '<b>Miscounting diborane’s bridge vs terminal bonds.</b> There are four terminal (2c–2e) and only two bridging (3c–2e) bonds. Mixing these up is the classic slip.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Two reflexes win marks. First, for any boron-halide or silicon/phosphorus/sulphur-oxygen species, ask “is back bonding possible?” — if a lone pair sits beside an empty orbital, expect a shorter bond, an unexpected planarity, or an inverted acidity trend. Second, for bond-angle comparisons, identify what changed: same central atom, different substituent ⇒ <b>Bent’s rule</b>; same substituent, heavier central atom ⇒ <b>Drago’s rule</b>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Coordinate (dative) bond',
            note: 'both electrons from one atom (donor lone pair → acceptor empty orbital); drawn as →; identical to covalent once formed. Examples: NH<sub>4</sub><sup>+</sup>, H<sub>3</sub>O<sup>+</sup>, O<sub>3</sub>, CO, H<sub>3</sub>N → BF<sub>3</sub>, Al<sub>2</sub>Cl<sub>6</sub>.',
          },
          {
            f: 'Back bonding',
            note: 'filled orbital → adjacent empty orbital. pπ–pπ (BF<sub>3</sub>); pπ–dπ (N(SiH<sub>3</sub>)<sub>3</sub>, SO<sub>4</sub><sup>2−</sup>, H<sub>2</sub>SO<sub>4</sub>). Effects: shorter bonds, planarity, altered acidity/basicity.',
          },
          {
            f: 'Boron-halide Lewis acidity',
            note: 'BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub> (back bonding decreases down the group).',
          },
          {
            f: 'Bent’s rule',
            note: 'p-character → electronegative substituents (smaller angle); s-character → electropositive substituents and lone pairs. So NH<sub>3</sub> > NF<sub>3</sub>.',
          },
          {
            f: 'Drago’s rule',
            note: 'heavy, weakly electronegative central atom ⇒ no hybridisation ⇒ angle ≈ 90° (PH<sub>3</sub> 93.5°, H<sub>2</sub>S 92°, AsH<sub>3</sub> 91.8°).',
          },
          {
            f: '3c–2e bond',
            note: 'electron-deficient bonding; diborane B<sub>2</sub>H<sub>6</sub> = four terminal 2c–2e + two bridging 3c–2e (“banana”) bonds; B is sp<sup>3</sup>.',
          },
        ],
        aids: [
          '“<b>B</b>ent → e<b>N</b>egative gets <b>P</b>” (electronegative substituents get p-character, smaller angle)',
          '“<b>D</b>rago → <b>D</b>own the group <b>D</b>rops to 90°.”',
        ],
      },
    ],
  },
];
