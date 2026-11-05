import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topic 03, Bonding in Coordination Compounds (VBT & CFT): pp. 213–218
 * of the Class 12 Chemistry Master Reference, word for word, split at its
 * Sections 1 to 8. These pages hold no figure and no drawing. The book's "Sub-01"
 * and "Sub-02" are "Topic 01" and "Topic 02" here. Its plain μ is μ with a label
 * s, as in Chapter 4. The book's n with a subscript t2g (or eg) has a subscript
 * on a subscript, which the reader cannot draw, so it is written flat.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 213–218 ─────────────────────────
  {
    n: '03',
    title: 'Bonding in Coordination Compounds (VBT & CFT)',
    kalam: 'Whether the metal bothers to rearrange its electrons depends on how forcefully the ligand pushes — and that is the bridge to CFT.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The analytical heart of the chapter and a guaranteed scorer across all exams. CBSE Boards ask 3-mark VBT or CFT explanations (hybridisation, magnetic behaviour, colour). NEET reliably tests magnetic moment and high/low-spin counting. JEE Main asks CFSE values and spectrochemical ordering; JEE Advanced pushes into Δ<sub>o</sub>-versus-<i>P</i> spin prediction, CFSE with pairing-energy corrections, and energy↔wavelength conversions.',
      },
      {
        t: 'p',
        html: 'By the end of Topic 01 we could name a complex and count its coordination number, and Topic 02 told us how the same atoms can be arranged differently in space. But two questions were left hanging: why is one complex blue and another green, and why is one strongly magnetic while a chemically similar one is not? Werner’s theory (Topic 01) is silent on both. To answer them we need a picture of the actual bonding — and there are two such pictures at this level: <b>Valence Bond Theory (VBT)</b> and <b>Crystal Field Theory (CFT)</b>.',
      },
      {
        t: 'p',
        html: '<b>VBT — the metal opens up empty rooms for guests.</b> Think of the central metal ion as a hotel with a fixed number of vacant rooms (empty orbitals). Each ligand arrives carrying its own lone pair (Topic 01: a ligand is a Lewis base) and is given a room. But the hotel does not hand out random rooms — it first merges a specific set of empty orbitals into a new set of identical, equivalent rooms, all the same shape and pointing in the right directions. This merging is <b>hybridisation</b>, and the geometry of the complex (Topic 02) is simply the shape of the hybrid set: sp<sup>3</sup> → tetrahedral, dsp<sup>2</sup> → square planar, sp<sup>3</sup>d<sup>2</sup> or d<sup>2</sup>sp<sup>3</sup> → octahedral.',
      },
      {
        t: 'p',
        html: 'The interesting twist is which d-orbitals the metal uses. If it uses the inner (<i>n</i> − 1)d orbitals, it needs two of them empty; for d<sup>4</sup>–d<sup>7</sup> it must first shove its own d-electrons together to free them up — this gives an <b>inner orbital (low-spin)</b> complex, d<sup>2</sup>sp<sup>3</sup>. (With d<sup>1</sup>–d<sup>3</sup>, two inner orbitals are already empty, so nothing is shoved and “low spin” has no meaning.) If it instead reaches for the outer <i>n</i>d orbitals and leaves its own electrons undisturbed, it gives an <b>outer orbital (high-spin)</b> complex, sp<sup>3</sup>d<sup>2</sup>. Whether the metal bothers to rearrange its electrons depends on how forcefully the ligand pushes — and that is the bridge to CFT.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the number of leftover unpaired electrons after hybridisation is what a magnetic balance measures. Pair the electrons up (inner orbital, d<sup>4</sup>–d<sup>7</sup>) and the complex becomes weakly magnetic or diamagnetic; leave them unpaired (outer orbital) and it is strongly paramagnetic. So VBT links a structural choice directly to a measurable magnetic number.',
      },
      {
        t: 'p',
        html: '<b>CFT — the ligands are point charges that push on shelves.</b> CFT throws away the idea of shared electron pairs and treats the metal–ligand bond as purely electrostatic: every ligand is a point negative charge (or the negative end of a dipole). In a free metal ion the five d-orbitals are <b>degenerate</b> (same energy — five shelves at the same height). Surround the ion with ligands in a definite geometry and the shelves no longer stay level: d-orbitals pointing straight at the incoming ligands are pushed up in energy (more repulsion), while those pointing between the ligands are pushed down. The degeneracy is broken — the orbitals <b>split</b>.',
      },
      {
        t: 'p',
        html: 'In an octahedral field the two orbitals aimed along the axes (d<sub><i>x</i>²−<i>y</i>²</sub>, d<sub><i>z</i>²</sub>) rise into the higher e<sub>g</sub> set, and the three aimed between the axes (d<sub><i>xy</i></sub>, d<sub><i>yz</i></sub>, d<sub><i>xz</i></sub>) drop into the lower t<sub>2g</sub> set. The energy gap between them is the <b>crystal field splitting energy,</b> Δ<sub>o</sub>. Colour and magnetism flow largely from the size of this one gap, though the spin state also depends on the pairing energy, and stability depends on much else (Topic 05). The <b>square planar</b> geometry is best pictured as an octahedron with the two ligands on the <i>z</i>-axis pulled away: the orbitals with a <i>z</i>-component sink, leaving d<sub><i>x</i>²−<i>y</i>²</sub> alone at the top, which is why d<sup>8</sup> ions with a strong-field ligand prefer square planar (the lone high orbital can be left empty and all electrons paired).',
      },
      {
        t: 'p',
        html: 'A single concrete case shows the colour idea at work: [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> is a d<sup>1</sup> system with its one electron in t<sub>2g</sub>. It absorbs blue-green light, promoting that electron into the empty e<sub>g</sub> level (t<sub>2g</sub><sup>1</sup> e<sub>g</sub><sup>0</sup> → t<sub>2g</sub><sup>0</sup> e<sub>g</sub><sup>1</sup>), and the complement of the absorbed light is what we see — violet. This single d–d transition is the colour, and its energy is exactly Δ<sub>o</sub>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>VBT</b> explains geometry and magnetic behaviour well, but it gives no quantitative account of magnetic data, says nothing about colour, does not distinguish strong from weak ligands, and cannot reliably predict whether a 4-coordinate complex is tetrahedral or square planar.<br>• <b>CFT</b> explains colour and magnetism beautifully but assumes the bonding is purely ionic (point charges). This is its central weakness: it ignores the genuine covalent character of metal–ligand bonds, which is why, for example, it cannot by itself explain the order of the spectrochemical series. The fuller account needs ligand field / molecular orbital theory, which is beyond this level.<br>• In a <b>tetrahedral</b> field the splitting is <b>inverted</b> (the e set lies below the t<sub>2</sub> set) and much smaller: for the same metal, ligands and distance, Δ<sub>t</sub> = (4/9)Δ<sub>o</sub>. That is so small that pairing is hardly ever forced: low-spin tetrahedral complexes are rarely observed, so treat tetrahedral complexes as <b>high spin</b>.',
      },

      { t: 'part', title: 'Key formulas and relations' },
      {
        t: 'formula',
        kicker: 'Spin-only magnetic moment',
        main: 'μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM',
        legend: ['μ<sub>s</sub> = spin-only magnetic moment', '<i>n</i> = number of unpaired electrons', 'BM = Bohr magneton'],
        note: null,
      },
      {
        t: 'p',
        html: 'Useful values: <i>n</i> = 1, 2, 3, 4, 5 ⇒ μ<sub>s</sub> = 1.73, 2.83, 3.87, 4.90, 5.92 BM.',
      },
      {
        t: 'table',
        title: 'VBT hybridisation ↔ geometry (by coordination number)',
        head: ['CN', 'Hybridisation', 'Geometry', 'Note'],
        rows: [
          ['4', 'sp<sup>3</sup>', 'tetrahedral', 'high spin'],
          ['4', 'dsp<sup>2</sup>', 'square planar', 'low spin (e.g. d<sup>8</sup> strong field)'],
          ['6', 'd<sup>2</sup>sp<sup>3</sup>', 'octahedral', 'inner orbital, <b>low spin</b>'],
          ['6', 'sp<sup>3</sup>d<sup>2</sup>', 'octahedral', 'outer orbital, <b>high spin</b>'],
        ],
      },
      {
        t: 'p',
        html: 'The spin notes apply to octahedral d<sup>4</sup>–d<sup>7</sup>. With d<sup>1</sup>–d<sup>3</sup>, d<sup>2</sup>sp<sup>3</sup> involves no pairing: [Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> in the first worked example keeps three unpaired electrons.',
      },
      {
        t: 'formula',
        kicker: 'CFT splitting energies',
        main: '<i>E</i>(e<sub>g</sub>) = +(3/5)Δ<sub>o</sub> = +0.6 Δ<sub>o</sub><br><i>E</i>(t<sub>2g</sub>) = −(2/5)Δ<sub>o</sub> = −0.4 Δ<sub>o</sub><br>Δ<sub>t</sub> = (4/9)Δ<sub>o</sub><br>(Δ<sub>o</sub> = 10 <i>Dq</i>)',
        legend: [
          '<i>E</i>(e<sub>g</sub>) = energy of the e<sub>g</sub> set',
          '<i>E</i>(t<sub>2g</sub>) = energy of the t<sub>2g</sub> set',
          'Δ<sub>o</sub> = crystal field splitting energy, octahedral',
          'Δ<sub>t</sub> = crystal field splitting energy, tetrahedral; the 4/9 holds for the same metal, ligands and distance',
          '<i>Dq</i> = one-tenth of Δ<sub>o</sub>',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The splitting is <b>barycentric</b> — the average energy is unchanged, so the energy lost by the three t<sub>2g</sub> orbitals exactly balances the energy gained by the two e<sub>g</sub> orbitals.',
      },
      {
        t: 'formula',
        kicker: 'Crystal Field Stabilisation Energy (CFSE)',
        main: 'CFSE = (−0.4 <i>n</i><sub>t2g</sub> + 0.6 <i>n</i><sub>eg</sub>) Δ<sub>o</sub> (+<i>mP</i>)',
        legend: [
          'CFSE = crystal field stabilisation energy',
          '<i>n</i><sub>t2g</sub> = electron occupancy of t<sub>2g</sub>',
          '<i>n</i><sub>eg</sub> = electron occupancy of e<sub>g</sub>',
          'Δ<sub>o</sub> = crystal field splitting energy',
          '<i>mP</i> = pairing-energy correction',
          '<i>m</i> = number of extra electron pairs relative to the free ion (low-spin d<sup>6</sup>: 3 pairs − 1 pair, so <i>m</i> = 2)',
          '<i>P</i> = pairing energy',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Spin state criterion',
        main: 'Δ<sub>o</sub> > <i>P</i> ⇒ low spin (strong field)<br>Δ<sub>o</sub> < <i>P</i> ⇒ high spin (weak field)',
        legend: [
          'Δ<sub>o</sub> = crystal field splitting energy',
          '<i>P</i> = pairing energy',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The energy of the absorbed light is the gap: Δ<sub>o</sub> = <i>E</i> = <i>hc</i>/<i>λ</i>.',
      },
      {
        t: 'formula',
        kicker: 'Spectrochemical series (increasing field strength, experimentally determined)',
        main: 'I<sup>−</sup> < Br<sup>−</sup> < Cl<sup>−</sup> < F<sup>−</sup> < OH<sup>−</sup><br>< C<sub>2</sub>O<sub>4</sub><sup>2−</sup> < H<sub>2</sub>O < NH<sub>3</sub> < en<br>< NO<sub>2</sub><sup>−</sup> < CN<sup>−</sup> < CO',
        legend: ['en = ethane-1,2-diamine', 'NO<sub>2</sub><sup>−</sup> here is bound through N'],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — VBT analysis of a complex',
        steps: [
          'From the formula, find the metal’s oxidation number and hence its d<sup><i>n</i></sup> count (Topic 01: charge bookkeeping).',
          'Read off the coordination number → expected geometry (Topic 01).',
          'Decide whether electrons pair up. VBT cannot settle this by itself, so take it from the ligand’s place in the spectrochemical series (or from measured magnetic data): a strong field ligand forces pairing into (<i>n</i> − 1)d → d<sup>2</sup>sp<sup>3</sup> inner orbital; a weak field ligand leaves them and uses <i>n</i>d → sp<sup>3</sup>d<sup>2</sup> outer orbital. (d<sup>1</sup>–d<sup>3</sup> already have two inner d-orbitals empty: d<sup>2</sup>sp<sup>3</sup> with no pairing.)',
          'Count the leftover unpaired electrons and compute μ<sub>s</sub>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why:</b> the d-count fixes how many electrons must be placed, the ligand strength decides whether they pair, and the leftover unpaired count is the experimentally measurable output.',
      },
      {
        t: 'proc',
        title: 'Procedure B — CFT filling (high vs low spin)',
        steps: [
          'Get d<sup><i>n</i></sup> as above.',
          'Draw the split diagram (t<sub>2g</sub> below, e<sub>g</sub> above for octahedral).',
          'Fill t<sub>2g</sub> singly first (Hund).',
          'At the fourth electron, compare Δ<sub>o</sub> with the pairing energy <i>P</i>: if Δ<sub>o</sub> > <i>P</i> pair within t<sub>2g</sub> (<b>low spin</b>); if Δ<sub>o</sub> < <i>P</i> promote to e<sub>g</sub> (<b>high spin</b>).',
        ],
      },
      {
        t: 'p',
        html: '<b>Why:</b> nature minimises energy — the electron takes whichever route (pay <i>P</i> to pair, or pay Δ<sub>o</sub> to climb) costs less. Note only d<sup>4</sup>–d<sup>7</sup> octahedral ions have a high/low-spin choice at all.',
      },
      {
        t: 'proc',
        title: 'Procedure C — Compute CFSE',
        steps: [
          'Fill the orbitals (Procedure B) to get <i>n</i><sub>t2g</sub> and <i>n</i><sub>eg</sub>.',
          'Substitute into CFSE = (−0.4 <i>n</i><sub>t2g</sub> + 0.6 <i>n</i><sub>eg</sub>) Δ<sub>o</sub>.',
          'If the question supplies a pairing energy and the complex has extra pairs versus the free ion, add <i>mP</i>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why:</b> CFSE is the net energy lowering relative to the hypothetical spherical field — a more negative value means a more stable arrangement.',
      },
      {
        t: 'proc',
        title: 'Procedure D — Predict colour / absorption',
        steps: [
          'Place the ligand on the spectrochemical series → larger field means larger Δ<sub>o</sub>.',
          'Larger Δ<sub>o</sub> means higher absorbed energy, i.e. <b>shorter</b> absorbed wavelength (Δ<sub>o</sub> = <i>hc</i>/<i>λ</i>).',
          'The observed colour is the <b>complement</b> of the absorbed colour.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why:</b> a d–d electronic transition absorbs Δ<sub>o</sub> (exactly for a d<sup>1</sup> ion; for other counts, questions at this level treat it the same way); whatever wavelength is removed from white light, the eye sees what is left.',
      },
      {
        t: 'p',
        html: '<b>Naming the colour.</b> The complement is a guide, not an exact pair, because an absorption band is broad: the colour seen depends on the whole band, not on its peak alone. So [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> (peak 498 nm) looks violet while [Co(NH<sub>3</sub>)<sub>5</sub>(H<sub>2</sub>O)]<sup>3+</sup> (peak 500 nm) looks red, though both absorb blue-green: NCERT’s table, in Additional topic C, lists both. In an exam: about 500 nm absorbed → blue-green → appears red; about 600 nm absorbed → orange-red → appears blue; quote violet for [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> as the known fact.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (VBT)',
        q: 'Using valence bond theory, predict the hybridisation, geometry and spin-only magnetic moment of [Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>.',
        steps: [
          'Oxidation number (Topic 01): Cr + 6(0) = +3 ⇒ Cr<sup>3+</sup>, configuration 3d<sup>3</sup>.',
          'CN = 6 → octahedral. With only three d-electrons, all occupy separate orbitals (Hund) and two inner 3d orbitals are already empty — no pairing decision is even needed.',
          'Hybridisation = d<sup>2</sup>sp<sup>3</sup> (inner orbital), octahedral.',
          'Unpaired electrons <i>n</i> = 3 ⇒ μ<sub>s</sub> = √(3(3 + 2)) = √15 = 3.87 BM. The complex is <b>paramagnetic</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which aqua complex has the highest spin-only magnetic moment: [Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, [Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, or [Ni(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>?',
        steps: [
          '<b>Speed logic:</b> H<sub>2</sub>O is a weak field ligand for these M<sup>2+</sup> ions (it sits mid-series, below NH<sub>3</sub>) → all four have the <b>high-spin</b> count (Ni<sup>2+</sup>, d<sup>8</sup>, has no spin choice anyway), so just count the unpaired electrons straight from d<sup><i>n</i></sup> without any pairing.<br>– Mn<sup>2+</sup> (d<sup>5</sup>): 5 unpaired. Fe<sup>2+</sup> (d<sup>6</sup>): 4. Co<sup>2+</sup> (d<sup>7</sup>): 3. Ni<sup>2+</sup> (d<sup>8</sup>): 2.',
          'Highest unpaired count is Mn<sup>2+</sup> → μ<sub>s</sub> = √(5(7)) = √35 = 5.92 BM.',
          '<b>Trap to avoid:</b> treating H<sub>2</sub>O as strong field and computing low-spin counts (which would wrongly slash the unpaired numbers). Fix the field strength from the spectrochemical series first; for weak-field ions, high-spin counting is instant.',
        ],
        ans: '[Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (CFSE, multi-concept)',
        q: 'Compute the CFSE (in units of Δ<sub>o</sub>) for [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> and [Fe(CN)<sub>6</sub>]<sup>4−</sup>, and state which is more stabilised by the crystal field.',
        steps: [
          'Both are Fe<sup>2+</sup> → d<sup>6</sup> (Topic 01: Fe + 6(0)/6(−1) both give +2).',
          'H<sub>2</sub>O is weak field → high spin: t<sub>2g</sub><sup>4</sup> e<sub>g</sub><sup>2</sup>. CFSE = (−0.4 × 4 + 0.6 × 2) Δ<sub>o</sub> = (−1.6 + 1.2) Δ<sub>o</sub> = −0.4 Δ<sub>o</sub>.',
          'CN<sup>−</sup> is strong field → low spin: t<sub>2g</sub><sup>6</sup> e<sub>g</sub><sup>0</sup>. CFSE = (−0.4 × 6 + 0.6 × 0) Δ<sub>o</sub> = −2.4 Δ<sub>o</sub> (plus a pairing-energy penalty for the two extra pairs, +2<i>P</i>).',
          'The cyanide complex has the far more negative CFSE (and Δ<sub>o</sub> itself is far larger for CN<sup>−</sup>, so the gap is wider still), so it is much more strongly stabilised by the crystal field — consistent with CN<sup>−</sup> lying high in the spectrochemical series.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Δo vs P, energy↔wavelength, colour)',
        q: 'An octahedral d<sup>6</sup> complex [ML<sub>6</sub>]<sup>2+</sup> shows a single d–d absorption at <i>λ</i> = 500 nm, and its pairing energy is <i>P</i> = 19,000 cm<sup>−1</sup>. (i) Convert Δ<sub>o</sub> to cm<sup>−1</sup> and to kJ mol<sup>−1</sup>. (ii) Predict the spin state and the spin-only magnetic moment. (iii) State the observed colour. (<i>h</i> = 6.626 × 10<sup>−34</sup> J s, <i>c</i> = 3.0 × 10<sup>8</sup> m s<sup>−1</sup>, <i>N</i><sub>A</sub> = 6.022 × 10<sup>23</sup> mol<sup>−1</sup>.)',
        steps: [
          '(i) Taking the one absorption band as Δ<sub>o</sub> (the simple picture used at this level; it is exact only for d<sup>1</sup>), in wavenumbers Δ<sub>o</sub> corresponds to 1/<i>λ</i> = 1/(500 × 10<sup>−7</sup> cm) = 20,000 cm<sup>−1</sup>. In energy: <i>E</i> = <i>hc</i>/<i>λ</i><br>= (6.626 × 10<sup>−34</sup>)(3.0 × 10<sup>8</sup>)/(500 × 10<sup>−9</sup>) = 3.98 × 10<sup>−19</sup> J per ion;<br>per mole: 3.98 × 10<sup>−19</sup> × 6.022 × 10<sup>23</sup> ≈ 2.40 × 10<sup>5</sup> J mol<sup>−1</sup> = 240 kJ mol<sup>−1</sup> (239.4 kJ mol<sup>−1</sup> if the 3.98 is not rounded first; 2.4 × 10<sup>2</sup> kJ mol<sup>−1</sup> to the two significant figures of <i>c</i>).',
          '(ii) Δ<sub>o</sub> = 20,000 cm<sup>−1</sup> > <i>P</i> = 19,000 cm<sup>−1</sup>, so the field is (just) strong enough to force pairing → <b>low spin</b>, t<sub>2g</sub><sup>6</sup> e<sub>g</sub><sup>0</sup>, <i>n</i> = 0 unpaired → μ<sub>s</sub> = 0, <b>diamagnetic</b>.',
          '(iii) Absorption at 500 nm removes blue-green light from white; the eye sees the complement, so the complex appears <b>red</b>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Using VBT, predict the hybridisation and magnetic behaviour of [Ni(CN)<sub>4</sub>]<sup>2−</sup> and [NiCl<sub>4</sub>]<sup>2−</sup>, and explain why they differ.',
            a: '[Ni(CN)<sub>4</sub>]<sup>2−</sup>: dsp<sup>2</sup>, square planar, diamagnetic (CN<sup>−</sup> strong field pairs the d<sup>8</sup> electrons); [NiCl<sub>4</sub>]<sup>2−</sup>: sp<sup>3</sup>, tetrahedral, paramagnetic (Cl<sup>−</sup> weak field, 2 unpaired).',
          },
          {
            q: '[NEET] Arrange [CoF<sub>6</sub>]<sup>3−</sup>, [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> and [Co(en)<sub>3</sub>]<sup>3+</sup> in order of increasing Δ<sub>o</sub>.',
            a: '[CoF<sub>6</sub>]<sup>3−</sup> < [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> < [Co(en)<sub>3</sub>]<sup>3+</sup>.',
          },
          {
            q: '[JEE Main] Calculate the CFSE (in Δ<sub>o</sub>) for an octahedral d<sup>3</sup> ion and for a low-spin octahedral d<sup>5</sup> ion.',
            a: 'd<sup>3</sup>: t<sub>2g</sub><sup>3</sup> ⇒ −1.2 Δ<sub>o</sub>; low-spin d<sup>5</sup>: t<sub>2g</sub><sup>5</sup> ⇒ −2.0 Δ<sub>o</sub> (plus 2<i>P</i>).',
          },
          {
            q: '[JEE Main] An octahedral complex absorbs light at 600 nm. Calculate Δ<sub>o</sub> in kJ mol<sup>−1</sup> and state the approximate observed colour. (Use the constants of the last worked example.)',
            a: 'Δ<sub>o</sub> ≈ 199 kJ mol<sup>−1</sup> (199.5 kJ mol<sup>−1</sup> if 3.31 × 10<sup>−19</sup> J is not rounded first; 2.0 × 10<sup>2</sup> kJ mol<sup>−1</sup> to two significant figures); absorbs orange-red → appears blue.',
          },
          {
            q: '[JEE Advanced] For an octahedral d<sup>4</sup> ion, Δ<sub>o</sub> = 12,000 cm<sup>−1</sup> and <i>P</i> = 21,000 cm<sup>−1</sup>. Predict the spin state, the configuration, the number of unpaired electrons, and μ<sub>s</sub>.',
            a: 'Δ<sub>o</sub> < <i>P</i> → high spin, t<sub>2g</sub><sup>3</sup> e<sub>g</sub><sup>1</sup>, <i>n</i> = 4, μ<sub>s</sub> = √(4(6)) = 4.90 BM.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The hybridisation and magnetic nature of [Ni(CN)<sub>4</sub>]<sup>2−</sup> are:',
        opts: [
          { label: 'sp<sup>3</sup>, paramagnetic', nudge: '<b>(a)</b> sp<sup>3</sup> (tetrahedral) is what you get with a weak field ligand like Cl<sup>−</sup> — the standard trap of ignoring CN<sup>−</sup>’s field strength.' },
          { label: 'dsp<sup>2</sup>, diamagnetic', nudge: null },
          { label: 'sp<sup>3</sup>d<sup>2</sup>, paramagnetic', nudge: '<b>(c)</b> is an octahedral hybridisation, impossible for a 4-coordinate complex.' },
          { label: 'd<sup>2</sup>sp<sup>3</sup>, diamagnetic', nudge: '<b>(d)</b> is an octahedral hybridisation, impossible for a 4-coordinate complex.' },
        ],
        correct: 1,
        solution: 'Ni<sup>2+</sup> is d<sup>8</sup>; the strong-field CN<sup>−</sup> pairs the electrons, freeing one 3d orbital for dsp<sup>2</sup> → square planar, no unpaired electrons → diamagnetic.',
      },
      {
        t: 'mcq',
        q: 'Which complex is high spin?',
        opts: [
          { label: '[Co(CN)<sub>6</sub>]<sup>3−</sup>', nudge: '<b>(a)</b> uses CN<sup>−</sup>, a strong ligand → Δ<sub>o</sub> > <i>P</i> → low spin, diamagnetic. Picking it means misreading the spectrochemical position of the ligand.' },
          { label: '[Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>', nudge: '<b>(b)</b> uses NH<sub>3</sub>, a medium-strong ligand → Δ<sub>o</sub> > <i>P</i> → low spin, diamagnetic. Picking it means misreading the spectrochemical position of the ligand.' },
          { label: '[CoF<sub>6</sub>]<sup>3−</sup>', nudge: null },
          { label: '[Co(en)<sub>3</sub>]<sup>3+</sup>', nudge: '<b>(d)</b> uses en, a medium-strong ligand → Δ<sub>o</sub> > <i>P</i> → low spin, diamagnetic. Picking it means misreading the spectrochemical position of the ligand.' },
        ],
        correct: 2,
        solution: 'F<sup>−</sup> is a weak field ligand (low in the series), so Δ<sub>o</sub> < <i>P</i> → high spin (t<sub>2g</sub><sup>4</sup> e<sub>g</sub><sup>2</sup>, paramagnetic).',
      },
      {
        t: 'mcq',
        q: 'The CFSE of an octahedral high-spin d<sup>6</sup> ion (in units of Δ<sub>o</sub>, ignoring pairing) is:',
        opts: [
          { label: '−2.4', nudge: '<b>(a)</b> −2.4 is the low-spin d<sup>6</sup> value (t<sub>2g</sub><sup>6</sup>) — chosen by forgetting the field is weak.' },
          { label: '−0.4', nudge: null },
          { label: '−1.6', nudge: '<b>(c)</b> −1.6 counts only the t<sub>2g</sub> term and drops the e<sub>g</sub> contribution.' },
          { label: '+0.6', nudge: '<b>(d)</b> +0.6 Δ<sub>o</sub> is the energy of a single e<sub>g</sub> electron, not the CFSE of all six d-electrons.' },
        ],
        correct: 1,
        solution: 'High-spin d<sup>6</sup> = t<sub>2g</sub><sup>4</sup> e<sub>g</sub><sup>2</sup>: CFSE = −0.4(4) + 0.6(2) = −1.6 + 1.2 = −0.4 Δ<sub>o</sub>.',
      },
      {
        t: 'mcq',
        q: 'Among octahedral cobalt(III) complexes, the one absorbing the <b>longest</b> wavelength is:',
        opts: [
          { label: '[Co(CN)<sub>6</sub>]<sup>3−</sup>', nudge: '<b>(a)</b> CN<sup>−</sup> is the strongest field → largest Δ<sub>o</sub> → shortest wavelength — the exact opposite, and the most common inversion error.' },
          { label: '[Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>', nudge: '<b>(b)</b> NH<sub>3</sub> lies well above F<sup>−</sup> in the series, so Δ<sub>o</sub> is larger and the absorbed wavelength shorter.' },
          { label: '[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>', nudge: '<b>(c)</b> H<sub>2</sub>O is the tempting “weak” ligand, but F<sup>−</sup> lies below it in the series, so [Co(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> has the larger Δ<sub>o</sub> and absorbs at a shorter wavelength.' },
          { label: '[CoF<sub>6</sub>]<sup>3−</sup>', nudge: null },
        ],
        correct: 3,
        solution: 'Longest wavelength = smallest energy = smallest Δ<sub>o</sub> = weakest field ligand. F<sup>−</sup> is weakest here, so [CoF<sub>6</sub>]<sup>3−</sup> absorbs at the longest <i>λ</i>. Always tie “long wavelength” to “small gap, weak ligand.”',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Counting all the valence electrons as d-electrons, instead of working from the ion.</b> Always apply the oxidation number first (Topic 01): Fe<sup>2+</sup> is d<sup>6</sup> (8 valence electrons − 2), not d<sup>8</sup>. Every downstream answer fails if d<sup><i>n</i></sup> is wrong.',
          '<b>Misjudging ligand field strength.</b> With first-row M<sup>2+</sup> ions, halides and H<sub>2</sub>O are weak field (high spin); CN<sup>−</sup> and CO are strong field; NH<sub>3</sub> and en are medium-strong. The metal matters too: with Co<sup>3+</sup>, H<sub>2</sub>O and NH<sub>3</sub> both give low spin, yet [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup> is high spin, and a 5d ion such as Pt<sup>2+</sup> is low spin even with Cl<sup>−</sup>, in [PtCl<sub>4</sub>]<sup>2−</sup>. Fix the spectrochemical position and the metal before deciding spin.',
          '<b>Forcing pairing in tetrahedral complexes.</b> Because Δ<sub>t</sub> = (4/9)Δ<sub>o</sub> is small, tetrahedral complexes are essentially <b>always high spin</b> — never look for a low-spin tetrahedral configuration.',
          '<b>Computing μ<sub>s</sub> from the wrong quantity.</b> μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) uses the number of unpaired electrons, not the charge, the d-count, or the coordination number.',
          '<b>Inverting the wavelength–gap relationship.</b> Larger Δ<sub>o</sub> → shorter absorbed wavelength. Strong-field complexes absorb high-energy (short-<i>λ</i>) light.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for any magnetic or colour question, the deciding chain is always the same — oxidation number → d<sup><i>n</i></sup> → ligand field strength (spectrochemical) → high or low spin → unpaired count. Lock that chain and most VBT/CFT questions become one line. For CFSE, remember the per-electron tariff (−0.4Δ<sub>o</sub> in t<sub>2g</sub>, +0.6Δ<sub>o</sub> in e<sub>g</sub>) and you never need a table. And note the VBT–CFT dictionary for octahedral d<sup>4</sup>–d<sup>7</sup>: inner orbital = low spin, outer orbital = high spin — examiners switch between the two vocabularies freely.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'VBT hybridisation by CN',
            note: '6 → d<sup>2</sup>sp<sup>3</sup> (inner, low spin) or sp<sup>3</sup>d<sup>2</sup> (outer, high spin); 4 → dsp<sup>2</sup> (square planar) or sp<sup>3</sup> (tetrahedral). Inner = low spin; outer = high spin (octahedral d<sup>4</sup>–d<sup>7</sup>).',
          },
          {
            f: 'Magnetic moment',
            note: 'μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM, <i>n</i> = unpaired electrons (1→1.73, 2→2.83, 3→3.87, 4→4.90, 5→5.92).',
          },
          {
            f: 'CFT octahedral',
            note: 't<sub>2g</sub> at −0.4 Δ<sub>o</sub>, e<sub>g</sub> at +0.6 Δ<sub>o</sub> (barycentric). Δ<sub>t</sub> = (4/9)Δ<sub>o</sub>, inverted → tetrahedral essentially always high spin.',
          },
          {
            f: 'Spin',
            note: 'Δ<sub>o</sub> > <i>P</i> → low spin (strong field); Δ<sub>o</sub> < <i>P</i> → high spin (weak field). High/low choice only for octahedral d<sup>4</sup>–d<sup>7</sup>.',
          },
          {
            f: 'CFSE',
            note: '(−0.4 <i>n</i><sub>t2g</sub> + 0.6 <i>n</i><sub>eg</sub>) Δ<sub>o</sub> (+<i>mP</i>).',
          },
          {
            f: 'Colour',
            note: 'observed = complement of absorbed; Δ<sub>o</sub> = <i>hc</i>/<i>λ</i>; bigger gap → shorter absorbed <i>λ</i>.',
          },
        ],
        aids: [
          'Spectrochemical (weak → strong): “I Br Cl F OH ox — water — NH<sub>3</sub> en NO<sub>2</sub> CN CO” → “If Brothers Could Find Our Hidden Oxen Wandering, Nobody’d Envy No Cunning Cow.”',
          '“Inner = low spin, Outer = high spin” (the VBT–CFT dictionary, for octahedral d<sup>4</sup>–d<sup>7</sup>).',
          '“Big gap, blue end” — strong field → large Δ<sub>o</sub> → absorbs short wavelength.',
          'Per-electron CFSE tariff: “t<sub>2g</sub> pays you 0.4, e<sub>g</sub> costs you 0.6.”',
        ],
      },
    ],
  },
];
