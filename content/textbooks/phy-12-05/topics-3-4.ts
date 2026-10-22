import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 03 and 04: pp. 349–364 of the Class 12 Physics Master
 * Reference, word for word: Magnetic Properties of Materials (pp. 349–357) and
 * Magnetism and Gauss’s Law (pp. 358–364), each split at its Sections 1 to 8.
 * Figures 5.5 (caption p. 350, drawn p. 351), 5.6 (caption p. 353, drawn
 * p. 354) and 5.7 (caption p. 359, drawn p. 360) are redrawn in
 * lib/diagrams/physics-12-05.ts. The book's layout defects are undone: the
 * four numbered steps of Topic 03's Section 3(B) set one per line, the MCQ
 * options split, and each practice answer paired with its question.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 349–357 ─────────────────────────
  {
    n: '03',
    title: 'Magnetic Properties of Materials',
    kalam: 'Every material on Earth responds to a magnetic field; they just whisper at wildly different volumes.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield topics of the chapter. NEET loves single-fact items on dia/para/ferro classification, Curie temperature, and the meaning of the hysteresis-loop area. JEE Main asks numericals on <i>χ</i>, <i>μ</i><sub>r</sub>, <i>B</i> and Curie’s law. JEE Advanced reaches for domain/saturation estimates and hysteresis energy loss. CBSE Boards reliably carry a 3-mark distinguish-the-three-types or hysteresis question.',
      },
      {
        t: 'p',
        html: '<b>Notation (from Topics 01–02):</b> <i>m⃗</i> = dipole moment, <i>B</i>, μ<sub>0</sub> as before. <b>New here:</b> <i>H</i> = magnetic intensity (the magnetising field), <i>M</i> = magnetisation (dipole moment per unit volume), <i>χ</i> = susceptibility, <i>μ</i><sub>r</sub> = relative permeability, <i>μ</i> = permeability, <i>T</i><sub>c</sub> = Curie temperature, <i>C</i> = Curie constant. Note <i>H</i> (magnetic intensity) is not the Earth’s horizontal component — that was deliberately written <i>B</i><sub>H</sub> in Topic 02 to keep <i>H</i> free for exactly this use.',
      },
      {
        t: 'p',
        html: 'Bring a magnet near an iron nail and it leaps to it. Bring the same magnet near a copper coin, a drop of water, or a wooden ruler and… almost nothing. Yet “almost nothing” is not “nothing” — the copper is very faintly pushed away, the water too, and the iron is yanked in with vastly more force. Every material on Earth responds to a magnetic field; they just whisper at wildly different volumes. This topic is the grammar of that response.',
      },
      {
        t: 'p',
        html: 'The key idea is that matter is built from atoms, and each atom is a swarm of moving charges — orbiting and spinning electrons — so each atom is potentially a tiny magnet. What a material does in a field depends entirely on what these atomic magnets are up to. That splits all substances into three families.',
      },
      {
        t: 'p',
        html: '<b>Diamagnetic</b> materials (copper, water, bismuth, gold, diamond) have atoms with no permanent magnetic moment — the electrons pair up and cancel. When you switch on an external field, the orbiting electrons readjust to oppose the change (a Lenz’s-law-like reflex), creating a feeble moment pointing against the field. So a diamagnet is weakly <b>repelled</b> and drifts from strong field toward weak. This effect is tiny and present in every material — diamagnetism is universal — but it’s usually drowned out when stronger effects are present.',
      },
      {
        t: 'p',
        html: '<b>Paramagnetic</b> materials (aluminium, sodium, oxygen, platinum) do have atoms with permanent moments, but thermal jostling keeps them pointing randomly, so the bulk shows nothing. Apply a field and the moments partly line up with it, so the paramagnet is weakly <b>attracted</b> and drifts from weak field toward strong. Crucially, heat fights this alignment, so paramagnetism weakens as temperature rises.',
      },
      {
        t: 'p',
        html: '<b>Ferromagnetic</b> materials (iron, cobalt, nickel, gadolinium) are the loud ones. Their atomic moments don’t just have the option to align — they force their neighbours to align too, locking into large blocks called <b>domains</b>, each holding ~10<sup>11</sup> atoms already pointing the same way. An external field merely nudges these pre-aligned domains to grow and rotate, producing enormous magnetisation. That cooperation is why iron is “strongly attracted,” why it can stay magnetised after you remove the field, and why it shows hysteresis.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a stadium crowd. In a <b>diamagnet</b>, everyone is seated and indifferent; shout “wave!” and they only lean slightly away in annoyance. In a <b>paramagnet</b>, individuals are willing to do the wave but keep getting distracted (thermal noise) — only with a strong, insistent announcer (a strong field) do they loosely join in. In a <b>ferromagnet</b>, whole sections have already linked arms and rehearsed; the faintest cue sets off a massive, self-reinforcing wave. Raise the “temperature” (rowdiness) too high and even the rehearsed sections break apart — that’s the Curie point.',
      },
      {
        t: 'p',
        html: 'To do physics with this, we separate cause from effect. The <b>magnetising field</b> <i>H</i> is what you apply; the <b>magnetisation</b> <i>M</i> is how the material responds; and the total field inside, <i>B</i>, is the sum of both contributions. Their ratio <i>χ</i> = <i>M</i>/<i>H</i> — the <b>susceptibility</b> — is the single number that sorts the three families: small and negative for diamagnets, small and positive for paramagnets, huge for ferromagnets.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) <i>M</i> = <i>χH</i> with constant <i>χ</i> holds only for linear materials — dia and para. Ferromagnets are wildly <b>non-linear</b>: <i>χ</i> depends on <i>H</i> and on past history, which is hysteresis. (2) <b>Curie’s law</b> (<i>χ</i> ∝ 1/<i>T</i>) applies to paramagnets far from saturation; once all dipoles are aligned, increasing <i>H</i> does nothing more. (3) A ferromagnet obeys these rules only below its Curie temperature — above <i>T</i><sub>c</sub> it surrenders and becomes an ordinary paramagnet.',
      },
      { t: 'fig', id: 'p12-05-fig-5.5' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Magnetic intensity (magnetising field) <i>H</i>',
        main: 'the externally applied field, independent of the medium:<br><i>H</i> = <i>B</i><sub>0</sub>/μ<sub>0</sub>',
        legend: [],
        note: 'SI unit: A·m<sup>−1</sup>. Dimensional formula: [M<sup>0</sup> L<sup>−1</sup> T<sup>0</sup> A<sup>1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Magnetisation <i>M</i>',
        main: 'net magnetic dipole moment per unit volume:<br><i>M</i> = <i>m</i><sub>net</sub>/<i>V</i>',
        legend: [],
        note: 'SI unit: A·m<sup>−1</sup>. Dimensional formula: [M<sup>0</sup> L<sup>−1</sup> T<sup>0</sup> A<sup>1</sup>] (same as <i>H</i>).',
      },
      {
        t: 'formula',
        kicker: 'Total field inside the material',
        main: '<i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>M</i>)',
        legend: ['<i>H</i> = magnetic intensity (the magnetising field)', '<i>M</i> = magnetisation (dipole moment per unit volume)'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Magnetic susceptibility <i>χ</i> (for linear materials)',
        main: '<i>χ</i> = <i>M</i>/<i>H</i><br><i>M</i> = <i>χH</i>',
        legend: [],
        note: 'Dimensionless.',
      },
      {
        t: 'formula',
        kicker: 'Permeability relations',
        main: '<i>μ</i><sub>r</sub> = 1 + <i>χ</i><br><i>μ</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><br><i>B</i> = <i>μH</i>',
        legend: ['<i>μ</i><sub>r</sub> = relative permeability', '<i>μ</i> = permeability', '<i>χ</i> = susceptibility'],
        note: '<i>μ</i><sub>r</sub> is dimensionless; <i>μ</i> has units T·m·A<sup>−1</sup> (or H·m<sup>−1</sup>), dimensional formula [M<sup>1</sup> L<sup>1</sup> T<sup>−2</sup> A<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Curie’s law (paramagnets, far from saturation)',
        main: '<i>χ</i> = <i>C</i>/<i>T</i><br><i>M</i> = <i>χH</i> = <i>CB</i><sub>0</sub>/(μ<sub>0</sub><i>T</i>) ⇒ <i>χ</i> ∝ 1/<i>T</i>',
        legend: ['<i>C</i> = Curie constant'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Curie–Weiss law (ferromagnet above its Curie temperature <i>T</i><sub>c</sub>, now paramagnetic)',
        main: '<i>χ</i> = <i>C</i>/(<i>T</i> − <i>T</i><sub>c</sub>)   (<i>T</i> > <i>T</i><sub>c</sub>)',
        legend: ['<i>C</i> = Curie constant', '<i>T</i><sub>c</sub> = Curie temperature'],
        note: null,
      },
      {
        t: 'table',
        title: 'The three families at a glance',
        head: ['Property', 'Diamagnetic', 'Paramagnetic', 'Ferromagnetic'],
        rows: [
          [
            'Susceptibility <i>χ</i>',
            'small, <b>negative</b> (∼ −10<sup>−5</sup>)',
            'small, <b>positive</b> (∼ +10<sup>−5</sup>)',
            '<b>large</b>, positive (∼ 10<sup>3</sup>)',
          ],
          ['Relative permeability <i>μ</i><sub>r</sub>', 'slightly < 1', 'slightly > 1', '≫ 1'],
          ['Behaviour in a field', 'feebly repelled; strong→weak', 'feebly attracted; weak→strong', 'strongly attracted; weak→strong'],
          ['Temperature dependence', 'nearly independent', '<i>χ</i> ∝ 1/<i>T</i> (Curie)', 'complex; → para above <i>T</i><sub>c</sub>'],
          ['Atomic moment', 'zero (induced, opposing)', 'permanent, randomised', 'permanent, domain-aligned'],
          ['Examples', 'Cu, Bi, water, diamond, Au', 'Al, Na, O<sub>2</sub>, Pt, Cr', 'Fe, Co, Ni, Gd'],
        ],
      },
      {
        t: 'p',
        html: 'A <b>superconductor</b> is a perfect diamagnet: <i>χ</i> = −1, <i>μ</i><sub>r</sub> = 0, expelling the field completely (Meissner effect).',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>(A) Deriving the Permeability–Susceptibility Relation</b>' },
      {
        t: 'p',
        html: 'Start from the definition of the total field inside a magnetised material:<br><i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>M</i>).<br>For a linear material, the magnetisation is proportional to the magnetising field, <i>M</i> = <i>χH</i>. Substitute:<br><i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>χH</i>) = μ<sub>0</sub><i>H</i>(1 + <i>χ</i>).<br>But by definition <i>B</i> = <i>μH</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>H</i>. Comparing the two expressions for <i>B</i>:<br>μ<sub>0</sub><i>μ</i><sub>r</sub><i>H</i> = μ<sub>0</sub><i>H</i>(1 + <i>χ</i>) ⇒ <i>μ</i><sub>r</sub> = 1 + <i>χ</i>.',
      },
      {
        t: 'p',
        html: 'This compact relation is the bridge between the microscopic response (<i>χ</i>) and the bulk magnetic property (<i>μ</i><sub>r</sub>). It instantly explains the classification: <i>χ</i> < 0 ⇒ <i>μ</i><sub>r</sub> < 1 (diamagnet), <i>χ</i> small positive ⇒ <i>μ</i><sub>r</sub> just above 1 (paramagnet), <i>χ</i> huge ⇒ <i>μ</i><sub>r</sub> ≫ 1 (ferromagnet).',
      },
      {
        t: 'p',
        html: 'Given any one of <i>χ</i>, <i>μ</i><sub>r</sub>, or the field behaviour, you can place a material in seconds:',
      },
      {
        t: 'proc',
        title: '(B) Logical framework: classifying an unknown material',
        steps: [
          '<b>Check the sign of <i>χ</i></b> (or whether <i>μ</i><sub>r</sub> ≶ 1). Negative <i>χ</i> / <i>μ</i><sub>r</sub> < 1 → <b>diamagnetic</b>. Positive → para or ferro.',
          '<b>Check the magnitude.</b> <i>χ</i> ∼ 10<sup>−5</sup> → <b>paramagnetic</b>; <i>χ</i> ∼ 10<sup>3</sup> → <b>ferromagnetic</b>.',
          '<b>Confirm with behaviour.</b> Repelled and moves to weaker field → dia; weakly attracted → para; strongly attracted and retains magnetism → ferro.',
          '<b>Check temperature response if given.</b> Independent → dia; ∝ 1/<i>T</i> → para; loses magnetism sharply at <i>T</i><sub>c</sub> → ferro.',
        ],
      },
      {
        t: 'p',
        html: 'When you cycle a ferromagnet’s magnetising field <i>H</i> up and down and plot <i>B</i> (or <i>M</i>) against it, the curve does not retrace itself — it traces a loop. Read it like this:',
      },
      {
        t: 'proc',
        title: '(C) Reading a hysteresis loop (procedure)',
        steps: [
          '<b>Saturation:</b> as <i>H</i> grows, <i>B</i> levels off — all domains aligned.',
          '<b>Retentivity (remanence):</b> the value of <i>B</i> left when <i>H</i> is brought back to <b>zero</b>. The material “remembers.”',
          '<b>Coercivity:</b> the reverse <i>H</i> you must apply to drive <i>B</i> back to <b>zero</b>. A measure of how stubbornly it holds its magnetisation.',
          '<b>Loop area:</b> for the <i>B</i>–<i>H</i> loop, equals the <b>energy dissipated per unit volume per cycle</b>, lost as heat (for an <i>M</i>–<i>H</i> loop, multiply its area by μ<sub>0</sub>). (Compare the stress–strain hysteresis of rubber — same idea, different physics.)',
        ],
      },
      {
        t: 'p',
        html: 'The shape dictates the use. A <b>soft</b> material (soft iron) has a thin loop — low coercivity, low retentivity, small area, so little energy is wasted per cycle; ideal for electromagnets and transformer cores that flip polarity many times a second. A <b>hard</b> material (steel, alnico) has a fat loop — high coercivity and retentivity; ideal for permanent magnets that must keep their field.',
      },
      { t: 'p', html: '<b>(D) Curie’s law and the Curie point</b>' },
      {
        t: 'p',
        html: 'In a paramagnet, alignment energy competes with thermal energy. Cooler means easier alignment, so <i>χ</i> rises as <i>T</i> falls — quantitatively <i>χ</i> = <i>C</i>/<i>T</i>. A ferromagnet’s domains are a cooperative lock; heat them past the <b>Curie temperature</b> <i>T</i><sub>c</sub> and the lock breaks, the domains dissolve, and the material drops to ordinary paramagnetic behaviour following <i>χ</i> = <i>C</i>/(<i>T</i> − <i>T</i><sub>c</sub>). (Representative <i>T</i><sub>c</sub>: iron ≈ 1043 K, nickel ≈ 631 K, gadolinium ≈ 317 K.)',
      },
      { t: 'p', html: '<b>(E) Why soft iron is everywhere: shielding and electromagnets</b>' },
      {
        t: 'p',
        html: 'Two more applications fall straight out of high permeability and a thin hysteresis loop:<br>• <b>Magnetic shielding.</b> A sensitive instrument can be protected from stray fields by enclosing it in a box of <b>soft iron of high permeability</b>. Because field lines vastly prefer the high-<i>μ</i> path, they crowd into the iron walls and largely bypass the hollow interior, leaving the enclosed region nearly field-free. (This is the magnetic analogue of how a conductor shields against electric fields.)<br>• <b>Electromagnets.</b> Wrap a coil around a soft-iron core and the core’s huge <i>μ</i><sub>r</sub> amplifies the coil’s field enormously — yet because soft iron has low retentivity, the magnetism collapses the instant the current stops. That on/off controllability is exactly what cranes, relays, and doorbells need, and it’s why the core is never made of steel (which would stay magnetised). Permanent magnets, by contrast, demand the opposite: hard materials like <b>Alnico</b> or steel with high coercivity and retentivity.',
      },
      { t: 'fig', id: 'p12-05-fig-5.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A magnetising field of <i>H</i> = 1500 A·m<sup>−1</sup> produces a magnetisation <i>M</i> = 6.0 × 10<sup>5</sup> A·m<sup>−1</sup> in a material. Find (a) the susceptibility <i>χ</i>, (b) the relative permeability <i>μ</i><sub>r</sub>, and (c) the magnetic field <i>B</i> inside.',
        steps: [
          '<b>Given:</b> <i>H</i> = 1500 A·m<sup>−1</sup>, <i>M</i> = 6.0 × 10<sup>5</sup> A·m<sup>−1</sup>.',
          '(a) <i>χ</i> = <i>M</i>/<i>H</i> = (6.0 × 10<sup>5</sup>)/1500',
          '(b) <i>μ</i><sub>r</sub> = 1 + <i>χ</i> = 1 + 400',
          '(c) <i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>M</i>) = (4π × 10<sup>−7</sup>)(1500 + 6.0 × 10<sup>5</sup>) = (1.257 × 10<sup>−6</sup>)(6.015 × 10<sup>5</sup>)',
          'The enormous <i>χ</i> marks this as a <b>ferromagnet</b> — note how <i>M</i> dwarfs <i>H</i>, so <i>B</i> ≈ μ<sub>0</sub><i>M</i> to good approximation.',
        ],
        ans: '(a) <i>χ</i> = 400; (b) <i>μ</i><sub>r</sub> = 401; (c) <i>B</i> ≈ 0.76 T',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Three materials have relative permeabilities 0.9996, 1.0004, and 850. Classify each.',
        steps: [
          '<b>No calculation — just read against unity.</b> <i>μ</i><sub>r</sub> = 0.9996 < 1 ⇒ <i>χ</i> < 0 ⇒ <b>diamagnetic</b>. <i>μ</i><sub>r</sub> = 1.0004, just above 1 ⇒ <i>χ</i> small positive ⇒ <b>paramagnetic</b>. <i>μ</i><sub>r</sub> = 850 ≫ 1 ⇒ <b>ferromagnetic</b>.',
          'The trap is misreading <i>μ</i><sub>r</sub> < 1 as paramagnetic. Anchor the rule: <b>below 1 → dia, a hair above 1 → para, far above 1 → ferro.</b> A second trap: thinking a <i>μ</i><sub>r</sub> very close to 1 must be “non-magnetic” — diamagnetism is real, just feeble.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Curie’s law)',
        q: 'A paramagnetic salt has susceptibility <i>χ</i> = 4.0 × 10<sup>−3</sup> at 300 K. (a) Find its susceptibility at 200 K. (b) At what temperature would the susceptibility fall to 2.0 × 10<sup>−3</sup>?',
        steps: [
          'Curie’s law gives <i>χ</i> ∝ 1/<i>T</i>, so <i>χ</i><sub>1</sub><i>T</i><sub>1</sub> = <i>χ</i><sub>2</sub><i>T</i><sub>2</sub>.',
          '(a) <i>χ</i><sub>2</sub> = <i>χ</i><sub>1</sub><i>T</i><sub>1</sub>/<i>T</i><sub>2</sub> = 4.0 × 10<sup>−3</sup> × 300/200',
          '(b) <i>T</i><sub>2</sub> = <i>T</i><sub>1</sub><i>χ</i><sub>1</sub>/<i>χ</i><sub>2</sub> = 300 × (4.0 × 10<sup>−3</sup>)/(2.0 × 10<sup>−3</sup>)',
          'The common slip is to treat <i>χ</i> as proportional to <i>T</i> rather than 1/<i>T</i>, which would wrongly increase <i>χ</i> on heating.',
        ],
        ans: '(a) <i>χ</i><sub>2</sub> = 6.0 × 10<sup>−3</sup> (colder → more aligned → larger <i>χ</i>, as expected); (b) <i>T</i><sub>2</sub> = 600 K',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (domain and saturation magnetisation)',
        q: 'A single domain of iron is a cube of side 1.5 μm. Iron has density 7.9 × 10<sup>3</sup> kg·m<sup>−3</sup> and molar mass 56 g·mol<sup>−1</sup>, and each iron atom carries a magnetic moment of 9.3 × 10<sup>−24</sup> A·m<sup>2</sup>. Estimate the maximum (saturation) magnetisation of the domain.',
        steps: [
          '<b>Step 1 — Volume.</b> <i>V</i> = (1.5 × 10<sup>−6</sup>)<sup>3</sup> = 3.375 × 10<sup>−18</sup> m<sup>3</sup>.',
          '<b>Step 2 — Mass, then moles.</b> mass = <i>ρV</i> = (7.9 × 10<sup>3</sup>)(3.375 × 10<sup>−18</sup>) = 2.67 × 10<sup>−14</sup> kg = 2.67 × 10<sup>−11</sup> g.<br>moles = (2.67 × 10<sup>−11</sup>)/56 = 4.76 × 10<sup>−13</sup> mol.',
          '<b>Step 3 — Number of atoms.</b> <i>N</i> = (4.76 × 10<sup>−13</sup>)(6.022 × 10<sup>23</sup>) ≈ 2.87 × 10<sup>11</sup> atoms.',
          '<b>Step 4 — Maximum moment</b> (all atomic moments aligned): <i>m</i><sub>max</sub> = <i>N</i> × (9.3 × 10<sup>−24</sup>) = (2.87 × 10<sup>11</sup>)(9.3 × 10<sup>−24</sup>) ≈ 2.67 × 10<sup>−12</sup> A·m<sup>2</sup>.',
          '<b>Step 5 — Saturation magnetisation:</b><br><i>M</i><sub>s</sub> = <i>m</i><sub>max</sub>/<i>V</i> = (2.67 × 10<sup>−12</sup>)/(3.375 × 10<sup>−18</sup>)',
          'The result is a huge magnetisation — orders of magnitude beyond what any paramagnet reaches — which is exactly why ferromagnets are the “loud” family. The full sample shows much less only because its domains start out pointing every which way.',
        ],
        ans: '<i>M</i><sub>s</sub> ≈ 7.9 × 10<sup>5</sup> A·m<sup>−1</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A material has susceptibility <i>χ</i> = 499. Find its relative permeability <i>μ</i><sub>r</sub> and permeability <i>μ</i>.',
            a: '<i>μ</i><sub>r</sub> = 500, <i>μ</i> ≈ 6.3 × 10<sup>−4</sup> T·m·A<sup>−1</sup>',
          },
          {
            q: '[NEET] Classify each material by its susceptibility: (i) <i>χ</i> = −1.2 × 10<sup>−5</sup>, (ii) <i>χ</i> = +2.1 × 10<sup>−5</sup>, (iii) <i>χ</i> = 1200.',
            a: '(i) diamagnetic (ii) paramagnetic (iii) ferromagnetic',
          },
          {
            q: '[JEE Main] A paramagnetic material has <i>χ</i> = 3.0 × 10<sup>−4</sup> at 250 K. Find its susceptibility at 400 K.',
            a: '1.875 × 10<sup>−4</sup>',
          },
          {
            q: '[JEE Main] The hysteresis loop of a transformer core encloses an area equivalent to an energy of 250 J·m<sup>−3</sup> per cycle. The core has volume 8.0 × 10<sup>−4</sup> m<sup>3</sup> and operates at 50 Hz. Find the power dissipated as hysteresis loss.',
            a: '10 W',
          },
          {
            q: '[JEE Advanced] A magnetising field <i>H</i> = 2000 A·m<sup>−1</sup> produces a magnetic flux of 3.0 × 10<sup>−5</sup> Wb through an iron bar of cross-section 0.25 cm<sup>2</sup>. Find the relative permeability and susceptibility of the iron.',
            a: '<i>μ</i><sub>r</sub> ≈ 477, <i>χ</i> ≈ 476',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Above its Curie temperature, a ferromagnetic material becomes:',
        opts: [
          {
            label: 'diamagnetic',
            nudge: '<b>(a)</b> a common confusion — diamagnetism is a separate, orbital effect, not what thermal disorder produces.',
          },
          { label: 'paramagnetic', nudge: null },
          { label: 'completely non-magnetic', nudge: '<b>(c)</b> the atomic moments don’t vanish, only their cooperative ordering.' },
          { label: 'more strongly ferromagnetic', nudge: '<b>(d)</b> backwards — heat weakens, not strengthens, ferromagnetism.' },
        ],
        correct: 1,
        solution: 'Heat past <i>T</i><sub>c</sub> destroys the domain alignment; the permanent atomic moments survive but are now randomised by thermal motion — the textbook definition of a paramagnet, obeying <i>χ</i> = <i>C</i>/(<i>T</i> − <i>T</i><sub>c</sub>).',
      },
      {
        t: 'mcq',
        q: 'Which magnetic property is exhibited by <b>all</b> materials?',
        opts: [
          { label: 'paramagnetism', nudge: '<b>(a),(b)</b> require permanent atomic moments, which many materials lack.' },
          { label: 'ferromagnetism', nudge: '<b>(a),(b)</b> require permanent atomic moments, which many materials lack.' },
          { label: 'diamagnetism', nudge: null },
          { label: 'hysteresis', nudge: '<b>(d)</b> is exclusive to ferromagnets.' },
        ],
        correct: 2,
        solution: 'Diamagnetism arises from the universal Lenz-like response of orbiting electrons, so it is present in every substance — though it’s masked whenever stronger para/ferro effects coexist.',
      },
      {
        t: 'mcq',
        q: 'The area enclosed by the <i>B</i>–<i>H</i> hysteresis loop of a ferromagnet represents:',
        opts: [
          { label: 'the retentivity', nudge: '<b>(a)</b> retentivity is a single intercept (<i>B</i> at <i>H</i> = 0), not an area.' },
          { label: 'the coercivity', nudge: '<b>(b)</b> coercivity is the reverse <i>H</i> intercept (<i>B</i> = 0), also not an area.' },
          { label: 'the permeability', nudge: '<b>(c)</b> permeability is a slope-like ratio, unrelated to the enclosed area.' },
          { label: 'the energy dissipated per unit volume per cycle', nudge: null },
        ],
        correct: 3,
        solution: 'The loop area has units of energy density and equals the heat lost each cycle as domains are dragged back and forth.',
      },
      {
        t: 'mcq',
        q: 'The most suitable material for the core of a transformer is one with:',
        opts: [
          {
            label: 'high retentivity and high coercivity',
            nudge: '<b>(a)</b> describes a <b>permanent magnet</b> (steel/alnico) — exactly the wrong choice, it would bleed energy as heat.',
          },
          { label: 'low retentivity and low coercivity', nudge: null },
          {
            label: 'high retentivity and low coercivity',
            nudge: '<b>(c),(d)</b> mix soft and hard traits incoherently; real soft materials are low in both.',
          },
          {
            label: 'low retentivity and high coercivity',
            nudge: '<b>(c),(d)</b> mix soft and hard traits incoherently; real soft materials are low in both.',
          },
        ],
        correct: 1,
        solution: 'A transformer core flips polarity 50–60 times a second, so it must waste as little energy per cycle as possible — a thin loop, meaning low coercivity and low retentivity (soft iron).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing <i>H</i> with <i>B</i> (and with the Earth’s <i>B</i><sub>H</sub>).</b> <i>H</i> is the magnetising field you apply (the cause); <i>B</i> is the total field inside (the effect); <i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>M</i>). And <i>H</i> here has nothing to do with the horizontal component of the Earth’s field from Topic 02 — different quantity, which is why that one was written <i>B</i><sub>H</sub>.',
          '<b>Dropping the sign of <i>χ</i> for diamagnets.</b> Diamagnetic <i>χ</i> is negative; this is the whole reason <i>μ</i><sub>r</sub> < 1 and the material is repelled. Writing it as a small positive number gets the physics backwards.',
          '<b>The “+1” is not optional.</b> <i>μ</i><sub>r</sub> = 1 + <i>χ</i>, not <i>μ</i><sub>r</sub> = <i>χ</i>. The “+1” matters enormously for dia/para (where <i>χ</i> is tiny) — forget it and a diamagnet’s <i>μ</i><sub>r</sub> ≈ 0.99999 becomes nonsense.',
          '<b>Curie law vs. Curie–Weiss law.</b> Paramagnet: <i>χ</i> ∝ 1/<i>T</i>. Ferromagnet above <i>T</i><sub>c</sub>: <i>χ</i> ∝ 1/(<i>T</i> − <i>T</i><sub>c</sub>). Using the wrong one near a transition is a classic JEE trap.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> To classify any material in one glance, look only at <i>χ</i> (or <i>μ</i><sub>r</sub> vs 1): <b>sign first, size second.</b> Negative → dia; small positive → para; huge → ferro. For application questions, translate “needs to stay magnetised” → hard/high-coercivity → permanent magnet, and “needs to switch cheaply” → soft/low-coercivity → transformer/electromagnet.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Core relations',
            note: '<i>H</i> = <i>B</i><sub>0</sub>/μ<sub>0</sub>; <i>M</i> = moment/volume; <i>B</i> = μ<sub>0</sub>(<i>H</i> + <i>M</i>); <i>M</i> = <i>χH</i>; <i>μ</i><sub>r</sub> = 1 + <i>χ</i>; <i>μ</i> = μ<sub>0</sub><i>μ</i><sub>r</sub>; <i>B</i> = <i>μH</i>. (<i>H</i>, <i>M</i> in A·m<sup>−1</sup>, dimension [L<sup>−1</sup> A].)',
          },
          {
            f: 'Diamagnetic',
            note: '<i>χ</i> small −ve, <i>μ</i><sub>r</sub> < 1, repelled, universal, <i>T</i>-independent; superconductor is perfect (<i>χ</i> = −1).',
          },
          { f: 'Paramagnetic', note: '<i>χ</i> small +ve, <i>μ</i><sub>r</sub> ≳ 1, weakly attracted, Curie’s law <i>χ</i> = <i>C</i>/<i>T</i>.' },
          {
            f: 'Ferromagnetic',
            note: '<i>χ</i> large +ve, <i>μ</i><sub>r</sub> ≫ 1, domains, hysteresis; above <i>T</i><sub>c</sub> → paramagnet, <i>χ</i> = <i>C</i>/(<i>T</i> − <i>T</i><sub>c</sub>).',
          },
          {
            f: 'Hysteresis',
            note: 'retentivity = <i>B</i> at <i>H</i> = 0; coercivity = reverse <i>H</i> for <i>B</i> = 0; <b>loop area = energy lost per unit volume per cycle</b>.',
          },
          {
            f: 'Applications',
            note: 'soft (iron, thin loop) → transformers/electromagnets; hard (steel/alnico, fat loop) → permanent magnets.',
          },
        ],
        aids: [
          '“Dia Dodges, Para Pulls in a little, Ferro Forces.”',
          '“Sign first, size second” for <i>χ</i>.',
          '“<i>μ</i><sub>r</sub> = 1 + <i>χ</i> — never forget the 1.”',
          '“Soft for Switching, Hard for Holding.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 358–364 ─────────────────────────
  {
    n: '04',
    title: 'Magnetism and Gauss’s Law',
    kalam: 'By Gauss’s law for magnetism the net flux is zero regardless of what is enclosed, because magnetic field lines form closed loops.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A short but genuinely high-yield topic. CBSE Boards favour a 1–2 mark statement-or-meaning question. NEET loves assertion–reason and single-statement MCQs (“net magnetic flux through a closed surface is…”). JEE Main asks the occasional flux-bookkeeping numerical. Conceptually it underpins the flux idea that returns in full force in Electromagnetic Induction, and it is one of Maxwell’s four equations.',
      },
      {
        t: 'p',
        html: '<b>Notation (from Topics 01–03):</b> <i>B⃗</i>, μ<sub>0</sub> carry their earlier meanings. New here: Φ<sub>B</sub> = magnetic flux, d<i>A⃗</i> = vector area element (direction along the outward normal), <i>E⃗</i> and <i>q</i> for the electric comparison. We lean directly on the “field lines are continuous closed loops / no monopoles” fact established in Topic 01 — this topic turns that picture into a precise law.',
      },
      {
        t: 'p',
        html: 'Back in Topic 01 we noticed something quietly remarkable about a bar magnet’s field lines: they form <b>continuous closed loops</b> with no beginning and no end. Every line that leaves the north pole loops around the outside, dives back in at the south pole, and threads through the magnet to close on itself. Electric field lines don’t do this — they are born on a positive charge and die on a negative one. That single structural difference is the entire content of Gauss’s law for magnetism, dressed up in the language of flux.',
      },
      {
        t: 'p',
        html: 'First, what is <b>flux</b>? Picture holding a wire ring in a breeze. The amount of “wind passing through the ring” depends on the wind’s strength, the ring’s area, and how you tilt it — hold it edge-on and almost nothing passes; hold it face-on and you catch the maximum. Magnetic flux Φ<sub>B</sub> measures exactly this for magnetic field: how much field “passes through” a surface, counting orientation. Mathematically it is the field times the area times the cosine of the tilt angle.',
      },
      {
        t: 'p',
        html: 'Now imagine not a flat ring but a closed surface — a balloon, a sealed box, any surface with a definite inside and outside. Ask: what is the net flux out of it? For an electric field, if you trap a charge inside the balloon, field lines stream outward and never return, so there’s a net outward flux proportional to the trapped charge — that’s electric Gauss’s law. But for a magnetic field, every line is a closed loop. A loop that pokes out of the balloon must poke back in somewhere else, because it has nowhere to end. <b>Every line that exits is a line that re-enters.</b> The outward and inward contributions cancel perfectly, so the net magnetic flux through any closed surface is exactly zero:<br>∮<sub><i>S</i></sub> <i>B⃗</i> · d<i>A⃗</i> = 0.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Suppose you try to trap “just a north pole” by sealing a bag tightly around the N end of a bar magnet. Field lines burst outward through the bag near the pole — surely that’s a net outflow? No. Those very lines curve around and re-enter the bag’s far side (and inside the magnet they run S→N to close the loop). Tally every line and as many leave as return: net flux zero. You can never bag a lone north pole, because there is no such thing as an isolated magnetic charge — no <b>magnetic monopole</b>. Cut the magnet to try, and you only ever get another complete magnet, exactly as we saw in Topic 01.',
      },
      {
        t: 'p',
        html: 'This is why the law is so powerful despite looking almost trivial: it is the formal, exact statement that magnetic monopoles do not exist. It is not an approximation, not a special case — it holds for every magnetic field, every closed surface, everywhere, always.',
      },
      {
        t: 'p',
        html: 'Is the “no monopoles” rule truly unbreakable? That’s an open question physicists take seriously. In 1931 Paul Dirac showed that if even a single magnetic monopole existed anywhere in the universe, it would elegantly explain why electric charge always comes in neat integer multiples of <i>e</i> — a tantalising hint that monopoles should exist. Decades of dedicated searches — in cosmic rays, in particle accelerators, in ancient rock and lunar samples — have nonetheless never found one. So Gauss’s law for magnetism stands as one of the most precisely tested statements in physics: as far as every experiment can tell, the right-hand side is exactly zero. If a monopole were ever found, a source term would appear here, perfectly mirroring the electric case — but until then, the zero is as solid as physics gets.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) The “zero” applies only to <b>closed</b> surfaces. Through an open surface (like a single coil or one face of a box), the flux can be — and usually is — nonzero; a change in that open-surface flux is precisely what drives electromagnetic induction in the next chapter. Don’t confuse the two. (2) The law is universal and assumption-free as long as no magnetic monopole exists; should one ever be discovered, a source term would appear (mirroring the electric case), but none has ever been found. (3) Flux is a signed scalar — outward positive, inward negative — so careful sign bookkeeping is essential whenever you split a closed surface into parts.',
      },
      { t: 'fig', id: 'p12-05-fig-5.7' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Magnetic flux through a surface',
        main: 'Φ<sub>B</sub> = ∫<sub><i>S</i></sub> <i>B⃗</i> · d<i>A⃗</i> = ∫<sub><i>S</i></sub> <i>B</i> d<i>A</i> cos <i>θ</i>',
        legend: ['<i>θ</i> = the angle between <i>B⃗</i> and the area’s outward normal d<i>A⃗</i>'],
        note: 'SI unit: <b>weber</b> (Wb); 1 Wb = 1 T·m<sup>2</sup> = 1 V·s. Dimensional formula: [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup> A<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Flux through a flat area in a uniform field',
        main: 'Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Gauss’s law for magnetism (the central result)',
        main: '∮<sub><i>S</i></sub> <i>B⃗</i> · d<i>A⃗</i> = 0',
        legend: [],
        note: 'for every closed surface <i>S</i>.',
      },
      {
        t: 'formula',
        kicker: 'For comparison — Gauss’s law for electrostatics',
        main: '∮<sub><i>S</i></sub> <i>E⃗</i> · d<i>A⃗</i> = <i>q</i><sub>enc</sub>/ε<sub>0</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'The crucial difference is the right-hand side: electric fields have sources (charges), magnetic fields do <b>not</b> (no monopoles), so the magnetic version is always zero.',
      },
      {
        t: 'formula',
        kicker: 'Relation between field and flux density',
        main: '<i>B</i> = Φ<sub>B</sub>/<i>A</i> (uniform, normal incidence)',
        legend: [],
        note: 'which is why <i>B⃗</i> is also called <b>magnetic flux density</b>; 1 T = 1 Wb·m<sup>−2</sup>.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'Gauss’s law for magnetism is a fundamental postulate (one of Maxwell’s equations), so there is no derivation “from something deeper.” Instead, the skill is the logical reasoning behind it and the procedures for using it.',
      },
      {
        t: 'proc',
        title: '(A) Why it follows from “no monopoles” — the logical chain',
        steps: [
          'Experiment shows magnetic poles always come in N–S pairs; cutting a magnet never isolates a single pole (Topic 01).',
          'Therefore magnetic field lines have no points to start from or end on — they must be <b>continuous closed loops</b>.',
          'For any closed surface, a closed loop that crosses the boundary outward must cross back inward an equal number of times.',
          'Hence inward and outward flux contributions cancel exactly, giving ∮ <i>B⃗</i> · d<i>A⃗</i> = 0.',
        ],
      },
      {
        t: 'p',
        html: 'Equivalently: the “net magnetic charge” enclosed by any surface is always zero, because such charge does not exist.',
      },
      {
        t: 'proc',
        title: '(B) Procedure: computing magnetic flux through a surface',
        steps: [
          'Identify the surface and choose a consistent direction for the normal d<i>A⃗</i> (for a closed surface, always <b>outward</b>).',
          'Find <i>B⃗</i> over the surface. If <i>B⃗</i> is uniform and the surface flat, use Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i> directly.',
          'For non-uniform fields or curved surfaces, integrate ∫ <i>B⃗</i> · d<i>A⃗</i>, breaking the surface into patches where <i>B⃗</i> is nearly constant.',
          'Keep the sign: flux out is positive, flux in is negative.',
        ],
      },
      { t: 'p', html: '<b>(C) Procedure: using the closed-surface law to find an unknown flux</b>' },
      {
        t: 'p',
        html: 'When a closed surface is split into faces (e.g., the two caps and curved side of a cylinder, or the six faces of a box), the law says their signed fluxes must sum to zero:<br>Φ<sub>1</sub> + Φ<sub>2</sub> + ⋯ + Φ<sub><i>n</i></sub> = 0.<br>So if you know all but one, the last is fixed: it equals minus the sum of the rest. This is the single most common exam application.',
      },
      { t: 'p', html: '<b>(D) Key consequence: flux through an open surface depends only on its boundary</b>' },
      {
        t: 'p',
        html: 'Take two different open surfaces <i>S</i><sub>1</sub> and <i>S</i><sub>2</sub> that share the <b>same boundary loop</b> <i>C</i>. Together they enclose a region — they form one closed surface. By Gauss’s law the total flux out of that closed surface is zero, which forces<br>Φ<sub>B</sub>(<i>S</i><sub>1</sub>) = Φ<sub>B</sub>(<i>S</i><sub>2</sub>)<br>(with orientations matched to the loop). In words: <b>the magnetic flux linked with a loop is well-defined — it doesn’t matter which surface you stretch across the loop to compute it.</b> This is the quiet foundation on which “flux through a circuit” in Electromagnetic Induction rests.',
      },
      {
        t: 'table',
        title: 'Contrast table',
        head: ['Feature', 'Electric (Gauss)', 'Magnetic (Gauss)'],
        rows: [
          ['Closed-surface law', '∮ <i>E⃗</i> · d<i>A⃗</i> = <i>q</i><sub>enc</sub>/ε<sub>0</sub>', '∮ <i>B⃗</i> · d<i>A⃗</i> = 0'],
          ['Sources / sinks', 'charges (+, −)', 'none (no monopoles)'],
          ['Field lines', 'start on +<i>q</i>, end on −<i>q</i>', 'continuous closed loops'],
          ['Net flux through closed surface', '∝ enclosed charge', 'always zero'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A circular coil of radius 5.0 cm is placed in a uniform magnetic field of 0.40 T. The normal to the coil makes an angle of 60° with the field. Find the magnetic flux through the coil.',
        steps: [
          '<b>Given:</b> <i>r</i> = 0.050 m, <i>B</i> = 0.40 T, <i>θ</i> = 60°.',
          'Area <i>A</i> = π<i>r</i><sup>2</sup> = π(0.050)<sup>2</sup> = 7.85 × 10<sup>−3</sup> m<sup>2</sup>.',
          'Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i> = (0.40)(7.85 × 10<sup>−3</sup>) cos 60° = (0.40)(7.85 × 10<sup>−3</sup>)(0.5)',
          'A clean single-surface flux calculation — note the angle is measured from the normal, so cos 60° is correct. (Had the problem given the angle with the plane of the coil, you’d use the complement.)',
        ],
        ans: 'Φ<sub>B</sub> ≈ 1.6 × 10<sup>−3</sup> Wb',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A bar magnet is placed entirely inside a closed spherical surface. What is the net magnetic flux through the sphere?',
        steps: [
          '<b>Don’t compute anything.</b> Gauss’s law for magnetism says the net flux through any closed surface is exactly zero:<br>∮ <i>B⃗</i> · d<i>A⃗</i> = 0',
          'The trap is to reason “the north pole inside pumps flux outward, so it should be positive.” But the south pole is inside too, and more fundamentally every field line is a closed loop that re-enters as often as it exits. Even a tiny fragment of magnet enclosed gives zero — there is no isolated pole to act as a net source. A ten-second answer once you spot the words “closed surface.”',
        ],
        ans: 'Φ<sub>net</sub> = 0',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (flux bookkeeping)',
        q: 'A closed cylindrical surface is placed in a magnetic field. The flux entering through one flat end-cap is 8.0 mWb, and the flux leaving through the curved side is 3.0 mWb. Find the magnitude and direction of the flux through the other end-cap.',
        steps: [
          'Adopt the convention <b>outward flux positive</b>. Then:<br>Entering end-cap: flux is inward ⇒ Φ<sub>1</sub> = −8.0 mWb.<br>Curved side: leaving ⇒ Φ<sub>curved</sub> = +3.0 mWb.<br>Other end-cap: Φ<sub>2</sub> = ?',
          'Gauss’s law requires the signed total to vanish:<br>Φ<sub>1</sub> + Φ<sub>curved</sub> + Φ<sub>2</sub> = 0 ⇒ −8.0 + 3.0 + Φ<sub>2</sub> = 0',
          'So the flux through the other end-cap is <b>5.0</b> mWb, directed <b>outward</b>. The whole problem is sign-careful arithmetic enforced by ∮ <i>B⃗</i> · d<i>A⃗</i> = 0.',
        ],
        ans: 'Φ<sub>2</sub> = +5.0 mWb',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (surface independence of flux)',
        q: 'A flat circular disc and a hemispherical cap share the <b>same</b> circular rim, which bounds a region of magnetic field. The magnetic flux through the flat disc is measured to be 7.0 mWb. (a) Find the flux through the hemispherical cap. (b) Justify the result rigorously using Gauss’s law.',
        steps: [
          '(a) Because the two surfaces share the same boundary rim, they link the same flux:',
          '(b) The disc and the cap, taken together with consistent outward orientation, form a single <b>closed</b> surface enclosing the volume between them. Gauss’s law for magnetism gives<br>∮ <i>B⃗</i> · d<i>A⃗</i> = Φ<sub>cap</sub><sup>(out)</sup> + Φ<sub>disc</sub><sup>(out)</sup> = 0.',
          'The two outward normals point in opposite senses relative to the shared rim, so converting both to the same orientation through the loop flips one sign and yields Φ<sub>cap</sub> = Φ<sub>disc</sub>. This is exactly the surface-independence result of (D) in Key procedures and logical framework: the flux through a loop depends only on the loop, not on the surface you choose — the principle that lets “flux through a circuit” be unambiguous in Electromagnetic Induction.',
        ],
        ans: '(a) Φ<sub>cap</sub> = Φ<sub>disc</sub> = 7.0 mWb',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define magnetic flux and state its SI unit and dimensional formula.',
            a: 'Φ<sub>B</sub> = ∫ <i>B⃗</i> · d<i>A⃗</i>; weber (Wb); [M L<sup>2</sup> T<sup>−2</sup> A<sup>−1</sup>]',
          },
          {
            q: '[NEET] A small bar magnet is enclosed within a closed cubical box. State the net magnetic flux emerging from the box.',
            a: '0',
          },
          {
            q: '[JEE Main] A square loop of side 10 cm lies in a uniform field of 0.20 T, with its normal making 45° with the field. Find the magnetic flux through the loop.',
            a: '≈ 1.4 × 10<sup>−3</sup> Wb',
          },
          {
            q: '[JEE Main] Over a closed surface, the outward flux through region A is 12 mWb and the inward flux through region B is 5 mWb. Find the flux through the remaining region C, with direction.',
            a: '7 mWb, directed inward',
          },
          {
            q: '[JEE Advanced] Two open surfaces share a common boundary loop (normals taken in the same sense through the loop). The flux through the first (a flat surface) is 9.0 mWb. State the flux through the second (a curved surface on the same loop), and name the law that guarantees your answer.',
            a: '9.0 mWb (Gauss’s law for magnetism / surface-independence of flux)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The relation ∮ <i>B⃗</i> · d<i>A⃗</i> = 0 for any closed surface implies that:',
        opts: [
          {
            label: 'the magnetic field is always zero',
            nudge: '<b>(a)</b> zero net flux does not mean zero field — the field can be large, with inflow balancing outflow.',
          },
          { label: 'isolated magnetic monopoles do not exist', nudge: null },
          { label: 'the field is always uniform', nudge: '<b>(c)</b> the law holds for any field, uniform or not.' },
          {
            label: 'magnetic flux is always positive',
            nudge: '<b>(d)</b> flux is signed; the law says contributions cancel, not that they’re all positive.',
          },
        ],
        correct: 1,
        solution: 'Zero net flux through every closed surface means there is no enclosed magnetic “charge” to act as a source — i.e., no monopoles; field lines are closed loops.',
      },
      {
        t: 'mcq',
        q: 'The SI unit of magnetic flux is the:',
        opts: [
          { label: 'tesla', nudge: '<b>(a)</b> tesla is the unit of magnetic field (flux density).' },
          { label: 'weber', nudge: null },
          { label: 'gauss', nudge: '<b>(c)</b> gauss is the CGS unit of field, not flux.' },
          { label: 'henry', nudge: '<b>(d)</b> henry is the unit of inductance.' },
        ],
        correct: 1,
        solution: 'Flux is measured in webers, where 1 Wb = 1 T·m<sup>2</sup>.',
      },
      {
        t: 'mcq',
        q: 'A bar magnet of pole strength <i>q</i><sub>m</sub> is sealed inside a closed surface. The net magnetic flux through the surface is:',
        opts: [
          {
            label: 'μ<sub>0</sub><i>q</i><sub>m</sub>',
            nudge: '<b>(a),(b),(d)</b> all assume a “magnetic-charge” source term analogous to <i>q</i>/ε<sub>0</sub> in electrostatics — but no such term exists for magnetism.',
          },
          {
            label: '<i>q</i><sub>m</sub>/μ<sub>0</sub>',
            nudge: '<b>(a),(b),(d)</b> all assume a “magnetic-charge” source term analogous to <i>q</i>/ε<sub>0</sub> in electrostatics — but no such term exists for magnetism.',
          },
          { label: 'zero', nudge: null },
          {
            label: 'proportional to <i>q</i><sub>m</sub>',
            nudge: '<b>(a),(b),(d)</b> all assume a “magnetic-charge” source term analogous to <i>q</i>/ε<sub>0</sub> in electrostatics — but no such term exists for magnetism.',
          },
        ],
        correct: 2,
        solution: 'By Gauss’s law for magnetism the net flux is zero regardless of what is enclosed, because magnetic field lines form closed loops.',
      },
      {
        t: 'mcq',
        q: 'Gauss’s law for magnetism differs fundamentally from Gauss’s law for electrostatics because:',
        opts: [
          { label: 'magnetic fields are weaker than electric fields', nudge: '<b>(a)</b> field strength is irrelevant to the structure of the law.' },
          { label: 'magnetic monopoles do not exist', nudge: null },
          {
            label: 'magnetic field lines are always straight',
            nudge: '<b>(c)</b> magnetic field lines are typically curved closed loops, not straight.',
          },
          { label: 'magnetic flux cannot be measured', nudge: '<b>(d)</b> flux is readily measurable (e.g., via induced EMF).' },
        ],
        correct: 1,
        solution: 'The electric law has a source term (<i>q</i><sub>enc</sub>/ε<sub>0</sub>) because isolated charges exist; the magnetic law is zero because isolated magnetic poles do not.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing closed surfaces with open surfaces.</b> ∮ <i>B⃗</i> · d<i>A⃗</i> = 0 is only for closed surfaces. Through an open surface (a coil, one face), flux is generally nonzero — and the rate of change of that value is exactly what matters for induced EMF later. Mixing these up is the number-one error.',
          '<b>Thinking an enclosed pole gives net flux.</b> Sealing a surface around a north pole does not give positive flux — the lines loop back in. No isolated pole, no net source.',
          '<b>Dropping signs in flux bookkeeping.</b> Outward positive, inward negative. In split-surface problems, a missing sign flips the answer’s direction (and often its value).',
          '<b>Confusing weber with tesla.</b> Tesla is field (flux density); weber is flux = field × area. Remember 1 Wb = 1 T·m<sup>2</sup>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> The instant you read “net flux through a <b>closed</b> surface,” write 0 — never integrate. Save the actual Φ = <i>BA</i> cos <i>θ</i> work for open surfaces. And for split-closed-surface problems, just enforce “signed fluxes sum to zero” and solve for the unknown.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Magnetic flux',
            note: 'Φ<sub>B</sub> = ∫ <i>B⃗</i> · d<i>A⃗</i> = <i>BA</i> cos <i>θ</i>; unit <b>weber</b> (Wb) = T·m<sup>2</sup>; dimension [M L<sup>2</sup> T<sup>−2</sup> A<sup>−1</sup>].',
          },
          { f: 'Gauss’s law (magnetism)', note: '∮<sub><i>S</i></sub> <i>B⃗</i> · d<i>A⃗</i> = 0 — for <b>every</b> closed surface, always.' },
          {
            f: 'Meaning',
            note: 'no magnetic monopoles; field lines are continuous closed loops; no net “magnetic charge” can be enclosed.',
          },
          {
            f: 'Contrast',
            note: 'electric ∮ <i>E⃗</i> · d<i>A⃗</i> = <i>q</i><sub>enc</sub>/ε<sub>0</sub> (has sources) vs magnetic = 0 (no sources).',
          },
          { f: 'Closed vs open', note: 'closed-surface flux = 0; open-surface flux generally ≠ 0 (its change drives induction).' },
          { f: 'Surface independence', note: 'flux through a loop depends only on the loop, not the spanning surface.' },
          { f: 'Status', note: 'one of <b>Maxwell’s four equations</b>; <i>B⃗</i> is also called magnetic flux density.' },
        ],
        aids: [
          '“Closed surface? Flux is zero — full stop.”',
          '“E has ends (on charges); B is a loop (no ends).”',
          '“Weber = Tesla × Area” — flux is field caught by an area.',
        ],
      },
    ],
  },
];
