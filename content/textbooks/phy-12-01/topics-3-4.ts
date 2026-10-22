import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 03 and 04: pp. 27–47 of the Class 12 Physics Master
 * Reference, word for word: Electric Field and Dipoles (pp. 27–38; p. 38
 * holds only the cheat sheet's "Memory aids" line) and Continuous Charge
 * Distribution (pp. 39–47; "The three charge densities:" at the foot of
 * p. 39 is the title of the table on p. 40). Each is split at its Sections
 * 1 to 8. Figures 1.4 (caption p. 29, drawn p. 30), 1.5 and 1.6 (captions
 * p. 31, drawn p. 32), 1.7 (caption p. 34, drawn p. 35), 1.8 (caption p. 40,
 * drawn p. 41) and 1.9 (caption p. 42, drawn p. 43) are redrawn in
 * lib/diagrams/physics-12-01.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 27–38 ─────────────────────────
  {
    n: '03',
    title: 'Electric Field and Dipoles',
    kalam: 'The electric field is that ever-present disturbance a charge creates in space.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield topic in every exam. <b>CBSE Boards</b> love the axial and equatorial field derivations (a guaranteed 3–5 mark question) and the torque expression. <b>JEE Main</b> mixes field superposition with dipole torque/energy numericals (1–2 questions). <b>NEET</b> favours quick conceptual traps — field-line properties, the 1/<i>r</i><sup>3</sup> falloff, and dipole stability. <b>JEE Advanced</b> pushes into fields from continuous distributions and dipoles in non-uniform fields.',
      },
      { t: 'p', html: '<b>Part A — The Electric Field: charges talking through empty space</b>' },
      {
        t: 'p',
        html: 'In Topic 02, Coulomb’s Law told us the force between two charges. But that picture has something slightly uncomfortable about it: how does charge A “know” charge B is sitting three metres away? They never touch. Physicists resolved this discomfort with one of the most powerful ideas in all of science — the <b>field</b>.',
      },
      {
        t: 'p',
        html: 'The idea is to split the interaction into two stages. A charge doesn’t reach out and grab another charge directly. Instead, a charge modifies the space around it — it sets up an <b>electric field</b> everywhere, a sort of invisible “tension” filling the region. Any second charge that wanders in simply responds to the field at its own location. The source charge and the test charge never need to know about each other; they only ever deal with the field at the point where they sit.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a still pond. Drop a stone and ripples spread outward, filling the whole surface. A leaf floating far away bobs up and down — not because it “feels” the stone directly, but because it responds to the ripple that has arrived at its spot. The stone creates the disturbance (the field); the leaf reacts to the local disturbance. The electric field is that ever-present disturbance a charge creates in space.',
      },
      {
        t: 'p',
        html: 'Quantitatively, we define the field <i>E⃗</i> at a point as the force per unit positive charge that a tiny <b>test charge</b> <i>q</i><sub>0</sub> would feel there:<br><i>E⃗</i> = <i>F⃗</i>/<i>q</i><sub>0</sub><br>Because the field is a property of space set up by the source, it exists whether or not a test charge is actually present. And like Coulomb forces, fields obey <b>superposition</b> — the field from many sources is just the vector sum of the individual fields.',
      },
      { t: 'p', html: '<b>Part B — The Electric Dipole: a tiny pair of opposite charges</b>' },
      {
        t: 'p',
        html: 'Now meet a special, enormously important arrangement: two equal and opposite charges, +<i>q</i> and −<i>q</i>, held a small distance 2<i>a</i> apart. This is an <b>electric dipole</b>. It seems almost trivial — the total charge is zero! — yet dipoles are everywhere and they matter immensely. A water molecule is a dipole. The membranes of every cell in your body hold dipole layers. The behaviour of insulators in a field is the behaviour of countless tiny dipoles.',
      },
      {
        t: 'p',
        html: 'The key descriptor is the <b>dipole moment</b> <i>p⃗</i>, a vector pointing <b>from the negative charge to the positive charge</b>, with magnitude <i>p</i> = <i>q</i> × 2<i>a</i>. Think of it as an arrow that captures both “how much charge” and “how far apart” in a single quantity. Two molecules with the same <i>p</i> behave identically at a distance, even if one has large charges close together and the other small charges far apart.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A dipole is like a compass needle made of charge. Drop a compass needle into Earth’s magnetic field and it doesn’t get pushed across the table — it rotates to line up. A dipole in a uniform electric field does exactly this: it feels no net push, only a twist (torque) that swings <i>p⃗</i> into alignment with <i>E⃗</i>.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• The <b>test charge must be vanishingly small</b> (<i>q</i><sub>0</sub> → 0). A real test charge would itself disturb the source distribution; the definition <i>E⃗</i> = <i>F⃗</i>/<i>q</i><sub>0</sub> is strictly a limiting one.<br>• The neat dipole field formulas are valid in the <b>far region</b> (<i>r</i> ≫ <i>a</i>). Up close, the full two-charge expression is needed.<br>• A dipole feels <b>zero net force only in a uniform field</b>. In a non-uniform field the two ends sit in slightly different fields and a net force survives — this is why a charged comb attracts neutral (but polarisable) bits of paper.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Electric field (definition)',
        main: '<i>E⃗</i> = <i>F⃗</i>/<i>q</i><sub>0</sub>',
        legend: [],
        note: 'SI unit: N/C (equivalently V/m); dimensional formula [M L T<sup>−3</sup> A<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Field due to a point charge Q at distance r',
        main: '<i>E⃗</i> = (1/(4πε<sub>0</sub>)) (<i>Q</i>/<i>r</i><sup>2</sup>) <i>r̂</i>',
        legend: [],
        note: 'Directed away from +<i>Q</i>, towards −<i>Q</i>.',
      },
      {
        t: 'formula',
        kicker: 'Superposition',
        main: '<i>E⃗</i><sub>net</sub> = Σ<sub><i>i</i></sub> (1/(4πε<sub>0</sub>)) (<i>q</i><sub><i>i</i></sub>/<i>r</i><sub><i>i</i></sub><sup>2</sup>) <i>r̂</i><sub><i>i</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Dipole moment',
        main: '<i>p⃗</i> = <i>q</i> (2<i>a⃗</i>)<br>magnitude: <i>p</i> = <i>q</i> · 2<i>a</i>',
        legend: [],
        note: 'Directed from −<i>q</i> to +<i>q</i>. SI unit: C·m; dimensional formula [L T A].',
      },
      {
        t: 'formula',
        kicker: 'Field on the axial line (end-on), at distance r from centre',
        main: '<i>E</i><sub>axial</sub> = (1/(4πε<sub>0</sub>)) 2<i>pr</i>/(<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)<sup>2</sup><br><i>r</i> ≫ <i>a</i>: (1/(4πε<sub>0</sub>)) 2<i>p</i>/<i>r</i><sup>3</sup> (along <i>p⃗</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Field on the equatorial line (broadside-on), at distance r from centre',
        main: '<i>E</i><sub>eq</sub> = (1/(4πε<sub>0</sub>)) <i>p</i>/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)<sup>3/2</sup><br><i>r</i> ≫ <i>a</i>: (1/(4πε<sub>0</sub>)) <i>p</i>/<i>r</i><sup>3</sup> (opposite to <i>p⃗</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Axial-to-equatorial ratio',
        main: 'at the same large distance: <i>E</i><sub>axial</sub> = 2<i>E</i><sub>eq</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Torque on a dipole in a uniform field E⃗',
        main: '<i>τ⃗</i> = <i>p⃗</i> × <i>E⃗</i><br>|<i>τ⃗</i>| = <i>pE</i> sin <i>θ</i>',
        legend: [],
        note: 'SI unit: N·m; dimensional formula [M L<sup>2</sup> T<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Potential energy of a dipole',
        main: '<i>U</i> = −<i>p⃗</i> · <i>E⃗</i> = −<i>pE</i> cos <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Work to rotate from <i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub>',
        main: '<i>W</i> = <i>pE</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Net force in a non-uniform field (1-D)',
        main: '<i>F</i> = <i>p</i> d<i>E</i>/d<i>r</i>',
        legend: [],
        note: '(pointing toward stronger field if <i>p⃗</i> ∥ <i>E⃗</i>).',
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation 1 — Field on the axial line of a dipole</b>' },
      { t: 'fig', id: 'p12-01-fig-1.4' },
      {
        t: 'p',
        html: 'Place −<i>q</i> at A and +<i>q</i> at B, separated by 2<i>a</i>, centre O. Take point P on the axis, distance <i>r</i> from O, on the +<i>q</i> side.',
      },
      {
        t: 'p',
        html: 'The +<i>q</i> charge is at distance (<i>r</i> − <i>a</i>) from P; its field points <b>away</b> from +<i>q</i> (along <i>p⃗</i>):<br><i>E</i><sub>+</sub> = (1/(4πε<sub>0</sub>)) <i>q</i>/(<i>r</i> − <i>a</i>)<sup>2</sup>',
      },
      {
        t: 'p',
        html: 'The −<i>q</i> charge is at distance (<i>r</i> + <i>a</i>); its field points <b>towards</b> −<i>q</i> (opposite to <i>p⃗</i>):<br><i>E</i><sub>−</sub> = (1/(4πε<sub>0</sub>)) <i>q</i>/(<i>r</i> + <i>a</i>)<sup>2</sup>',
      },
      {
        t: 'p',
        html: 'Since <i>E</i><sub>+</sub> and <i>E</i><sub>−</sub> are antiparallel, the net field along <i>p⃗</i> is their difference:<br><i>E</i><sub>axial</sub> = <i>E</i><sub>+</sub> − <i>E</i><sub>−</sub> = (<i>q</i>/(4πε<sub>0</sub>)) [1/(<i>r</i> − <i>a</i>)<sup>2</sup> − 1/(<i>r</i> + <i>a</i>)<sup>2</sup>]',
      },
      {
        t: 'p',
        html: 'Combine the fractions. The numerator (<i>r</i> + <i>a</i>)<sup>2</sup> − (<i>r</i> − <i>a</i>)<sup>2</sup> = 4<i>ar</i>, and the denominator is (<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)<sup>2</sup>:<br><i>E</i><sub>axial</sub> = (<i>q</i>/(4πε<sub>0</sub>)) · 4<i>ar</i>/(<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)<sup>2</sup> = (1/(4πε<sub>0</sub>)) · (2(<i>q</i> · 2<i>a</i>) <i>r</i>)/(<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)<sup>2</sup> = (1/(4πε<sub>0</sub>)) 2<i>pr</i>/(<i>r</i><sup>2</sup> − <i>a</i><sup>2</sup>)<sup>2</sup>',
      },
      {
        t: 'p',
        html: 'For a far point, <i>r</i> ≫ <i>a</i>, so <i>r</i><sup>2</sup> − <i>a</i><sup>2</sup> ≈ <i>r</i><sup>2</sup>:<br><i>E</i><sub>axial</sub> = (1/(4πε<sub>0</sub>)) 2<i>p</i>/<i>r</i><sup>3</sup>   (directed along <i>p⃗</i>)',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> the field falls as 1/<i>r</i><sup>3</sup>, faster than a point charge’s 1/<i>r</i><sup>2</sup> — because at a distance the +<i>q</i> and −<i>q</i> nearly cancel, leaving only a residual that dies off quickly.',
      },
      { t: 'p', html: '<b>Derivation 2 — Field on the equatorial line of a dipole</b>' },
      { t: 'fig', id: 'p12-01-fig-1.5' },
      {
        t: 'p',
        html: 'Now put P on the equatorial line, distance <i>r</i> from O. Each charge is the same distance √(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>) from P, so the two field magnitudes are equal:<br><i>E</i><sub>+</sub> = <i>E</i><sub>−</sub> = (1/(4πε<sub>0</sub>)) <i>q</i>/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)',
      },
      {
        t: 'p',
        html: 'Resolve each into components parallel and perpendicular to the dipole axis. By symmetry, the <b>perpendicular components cancel</b>, while the <b>components along the axis add</b> (both point antiparallel to <i>p⃗</i>). If <i>θ</i> is the angle each field makes with the axis, then cos <i>θ</i> = <i>a</i>/√(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>), and:<br><i>E</i><sub>eq</sub> = 2<i>E</i><sub>+</sub> cos <i>θ</i> = 2 · (1/(4πε<sub>0</sub>)) (<i>q</i>/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)) · <i>a</i>/√(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>) = (1/(4πε<sub>0</sub>)) (<i>q</i> · 2<i>a</i>)/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)<sup>3/2</sup><br><i>E</i><sub>eq</sub> = (1/(4πε<sub>0</sub>)) <i>p</i>/(<i>r</i><sup>2</sup> + <i>a</i><sup>2</sup>)<sup>3/2</sup> →<sup><i>r</i> ≫ <i>a</i></sup> (1/(4πε<sub>0</sub>)) <i>p</i>/<i>r</i><sup>3</sup>   (opposite to <i>p⃗</i>)',
      },
      {
        t: 'p',
        html: 'Comparing the two results: <i>E</i><sub>axial</sub> = 2<i>E</i><sub>eq</sub> at the same distance, and the equatorial field points opposite to <i>p⃗</i> while the axial field points along it. These two facts are exam gold.',
      },
      { t: 'p', html: '<b>Derivation 3 — Torque on a dipole in a uniform field</b>' },
      { t: 'fig', id: 'p12-01-fig-1.6' },
      {
        t: 'p',
        html: 'In a <b>uniform</b> field <i>E⃗</i>, the charge +<i>q</i> feels +<i>qE⃗</i> and −<i>q</i> feels −<i>qE⃗</i>. These are equal and opposite, so the <b>net force is zero</b> — the dipole won’t translate. But the two forces don’t share a line of action, so they form a <b>couple</b> that produces a torque.',
      },
      {
        t: 'p',
        html: 'With the dipole axis at angle <i>θ</i> to <i>E⃗</i>, the perpendicular distance between the two forces is 2<i>a</i> sin <i>θ</i>:<br><i>τ</i> = (force) × (perpendicular distance) = (<i>qE</i>)(2<i>a</i> sin <i>θ</i>) = (<i>q</i> · 2<i>a</i>)<i>E</i> sin <i>θ</i> = <i>pE</i> sin <i>θ</i>',
      },
      {
        t: 'p',
        html: 'In vector form, this twist is captured exactly by:<br><i>τ⃗</i> = <i>p⃗</i> × <i>E⃗</i>',
      },
      {
        t: 'p',
        html: 'The torque is <b>maximum at <i>θ</i> = 90°</b> (<i>p⃗</i> ⊥ <i>E⃗</i>) and <b>zero at <i>θ</i> = 0° or 180°</b>. Only <i>θ</i> = 0° (with <i>p⃗</i> ∥ <i>E⃗</i>) is stable — nudge it and the torque pushes it back. At <i>θ</i> = 180° the torque is also zero, but any nudge swings it right around: that’s unstable equilibrium. The two positions are the minimum (<i>θ</i> = 0°) and the maximum (<i>θ</i> = 180°) of the potential energy <i>U</i> = −<i>pE</i> cos <i>θ</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A point charge <i>Q</i> = +4 μC sets up an electric field. (a) Find the field magnitude at a point 20 cm away. (b) What force acts on a charge <i>q</i><sub>0</sub> = −3 nC placed at that point?',
        steps: [
          '<b>(a)</b> Given <i>Q</i> = 4 × 10<sup>−6</sup> C, <i>r</i> = 0.20 m:<br><i>E</i> = (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>r</i><sup>2</sup> = (9 × 10<sup>9</sup>) (4 × 10<sup>−6</sup>)/(0.20)<sup>2</sup> = (9 × 10<sup>9</sup>) (4 × 10<sup>−6</sup>)/0.04 = 9 × 10<sup>5</sup> N/C<br>directed radially outward (away from +<i>Q</i>).',
          '<b>(b)</b> <i>F</i> = |<i>q</i><sub>0</sub>|<i>E</i> = (3 × 10<sup>−9</sup>)(9 × 10<sup>5</sup>) = 2.7 × 10<sup>−3</sup> N. Since <i>q</i><sub>0</sub> is negative, the force points <b>opposite</b> to <i>E⃗</i> — i.e. back towards <i>Q</i> (attraction).',
        ],
        ans: '<i>E</i> = 9 × 10<sup>5</sup> N/C outward; <i>F</i> = 2.7 × 10<sup>−3</sup> N directed towards <i>Q</i>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'At a fixed distance <i>r</i> ≫ <i>a</i> from a short dipole, the field on the axial line is <i>E</i><sub><i>a</i></sub> and on the equatorial line is <i>E</i><sub><i>e</i></sub>. A student computes <i>E</i><sub><i>a</i></sub> = 1.8 × 10<sup>4</sup> N/C. What is <i>E</i><sub><i>e</i></sub> at the same distance, and along which direction relative to <i>p⃗</i>?',
        steps: [
          '<b>The trap:</b> Students who half-remember the formulas often write <i>E</i><sub><i>e</i></sub> = <i>E</i><sub><i>a</i></sub> (forgetting the factor of 2) or get the direction backwards. Lock in two facts: <i>E</i><sub>axial</sub> = 2<i>E</i><sub>equatorial</sub>, and the equatorial field points opposite to <i>p⃗</i>.',
          '<b>Quick solve:</b> <i>E</i><sub><i>e</i></sub> = <i>E</i><sub><i>a</i></sub>/2 = (1.8 × 10<sup>4</sup>)/2 = 9 × 10<sup>3</sup> N/C, directed <b>antiparallel to <i>p⃗</i></b>.',
          'No formula plugging needed — the 2:1 ratio is the whole shortcut.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (torque + energy)',
        q: 'A dipole of moment <i>p</i> = 5 × 10<sup>−9</sup> C·m sits in a uniform field <i>E</i> = 2 × 10<sup>4</sup> N/C. (a) Find the torque when <i>p⃗</i> makes 30° with <i>E⃗</i>. (b) Find the work needed to rotate the dipole from the stable equilibrium position to <i>θ</i> = 90°.',
        steps: [
          '<b>(a)</b> <i>τ</i> = <i>pE</i> sin <i>θ</i> = (5 × 10<sup>−9</sup>)(2 × 10<sup>4</sup>) sin 30° = (10<sup>−4</sup>)(0.5)',
          '<b>(b)</b> Stable equilibrium is <i>θ</i><sub>1</sub> = 0°. Rotating to <i>θ</i><sub>2</sub> = 90°:<br><i>W</i> = <i>pE</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>) = <i>pE</i>(cos 0° − cos 90°) = <i>pE</i>(1 − 0) = <i>pE</i><br><i>W</i> = (5 × 10<sup>−9</sup>)(2 × 10<sup>4</sup>)',
          '(<b>Sanity check:</b> rotating away from the stable position should cost positive work — it does.)',
        ],
        ans: '(a) <i>τ</i> = 5 × 10<sup>−5</sup> N·m; (b) <i>W</i> = 1 × 10<sup>−4</sup> J.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (field of a charged ring + optimisation)',
        q: 'A thin ring of radius <i>R</i> carries total charge <i>Q</i> spread uniformly. (a) Derive the electric field at a point P on the axis, distance <i>x</i> from the centre. (b) At what distance <i>x</i> is this axial field a maximum?',
        fig: 'p12-01-fig-1.7',
        steps: [
          '<b>(a) Setting up the integral.</b> Slice the ring into elements d<i>q</i>. Each element is the same distance <i>s</i> = √(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>) from P, producing a field d<i>E</i> = (1/(4πε<sub>0</sub>)) d<i>q</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>).',
          'Here is the symmetry payoff: for every element, there’s a diametrically opposite one. Their components perpendicular to the axis cancel in pairs; only the components along the axis survive. Each axial component is d<i>E</i> cos <i>α</i>, where cos <i>α</i> = <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>). So:<br><i>E</i> = ∫ d<i>E</i> cos <i>α</i> = (1/(4πε<sub>0</sub>)) (1/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)) · (<i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)) ∫ d<i>q</i>',
          '<b>Checks:</b> at the centre (<i>x</i> = 0), <i>E</i> = 0 — correct, by symmetry. Far away (<i>x</i> ≫ <i>R</i>), <i>E</i> → <i>kQ</i>/<i>x</i><sup>2</sup> — the ring looks like a point charge.',
          '<b>(b) Maximising.</b> Set d<i>E</i>/d<i>x</i> = 0. Differentiating the function <i>x</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>:<br>d<i>E</i>/d<i>x</i> ∝ [(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup> − <i>x</i> · (3/2)(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>1/2</sup>(2<i>x</i>)]/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3</sup> = [(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>) − 3<i>x</i><sup>2</sup>]/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>5/2</sup> = (<i>R</i><sup>2</sup> − 2<i>x</i><sup>2</sup>)/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>5/2</sup>',
          'Setting the numerator to zero: <i>R</i><sup>2</sup> = 2<i>x</i><sup>2</sup>',
          'This is a hallmark JEE Advanced result — the field grows away from the centre, peaks at <i>R</i>/√2, then decays.',
        ],
        ans: '(a) <i>E</i>(<i>x</i>) = (1/(4πε<sub>0</sub>)) <i>Qx</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>; (b) The axial field is maximum at <i>x</i> = <i>R</i>/√2.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two point charges +5 nC and −5 nC are 4 mm apart. Find the magnitude and direction of the dipole moment.',
            a: '<i>p</i> = 2 × 10<sup>−11</sup> C·m, directed from −5 nC to +5 nC.',
          },
          {
            q: '[NEET] A dipole is placed in a uniform field. At which orientation is the torque on it maximum, and what is the net force on it in that orientation?',
            a: 'Torque max at <i>θ</i> = 90° (<i>p⃗</i> ⊥ <i>E⃗</i>); net force = 0 (uniform field).',
          },
          {
            q: '[JEE Main] A short dipole has <i>p</i> = 2 × 10<sup>−8</sup> C·m. Find the electric field at a point 10 cm from its centre on the equatorial line.',
            a: '<i>E</i> = <i>kp</i>/<i>r</i><sup>3</sup> = (9 × 10<sup>9</sup>) (2 × 10<sup>−8</sup>)/(0.10)<sup>3</sup> = 1.8 × 10<sup>5</sup> N/C, opposite to <i>p⃗</i>.',
          },
          {
            q: '[JEE Main] A dipole of moment <i>p</i> is in equilibrium (stable) in a uniform field <i>E</i>. Find the work done in rotating it through 180°.',
            a: '<i>W</i> = 2<i>pE</i>.',
          },
          {
            q: '[JEE Advanced] A point charge +<i>q</i> is placed on the axis of a uniformly charged ring (radius <i>R</i>, charge <i>Q</i>) at distance <i>x</i> = <i>R</i> from the centre. Find the force on the charge.',
            a: '<i>F</i> = (1/(4πε<sub>0</sub>)) <i>qQR</i>/(2<i>R</i><sup>2</sup>)<sup>3/2</sup> = (1/(4πε<sub>0</sub>)) <i>qQ</i>/(2√2 <i>R</i><sup>2</sup>), along the axis away from the ring (for <i>Q</i> > 0; towards it if <i>Q</i> < 0).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which statement about electric field lines is <b>incorrect</b>?',
        opts: [
          {
            label: 'The tangent to a field line gives the field direction.',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all genuine, correct properties — students who skim “incorrect” in the stem may pick one of these true statements by mistake.',
          },
          { label: 'Two field lines can intersect where the field is strong.', nudge: null },
          {
            label: 'Field lines start on positive and end on negative charges.',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all genuine, correct properties — students who skim “incorrect” in the stem may pick one of these true statements by mistake.',
          },
          {
            label: 'Closely spaced lines indicate a stronger field.',
            nudge: '<b>(A)</b>, <b>(C)</b>, <b>(D)</b> are all genuine, correct properties — students who skim “incorrect” in the stem may pick one of these true statements by mistake.',
          },
        ],
        correct: 1,
        solution: 'Two field lines can <b>never</b> cross — at a crossing point the field would have two directions at once, which is impossible. The statement is the incorrect one (and so the answer to “which is incorrect”). <b>(B)</b> tempts those who recall lines crowding in strong-field regions and wrongly extend that to crossing.',
      },
      {
        t: 'mcq',
        q: 'The electric field of a short dipole at a large distance <i>r</i> varies as:',
        opts: [
          { label: '1/<i>r</i>', nudge: '<b>(A)</b> and <b>(D)</b> are off by a power in either direction — common when guessing.' },
          { label: '1/<i>r</i><sup>2</sup>', nudge: '<b>(B)</b> traps students who reflexively apply the point-charge dependence.' },
          { label: '1/<i>r</i><sup>3</sup>', nudge: null },
          { label: '1/<i>r</i><sup>4</sup>', nudge: '<b>(A)</b> and <b>(D)</b> are off by a power in either direction — common when guessing.' },
        ],
        correct: 2,
        solution: 'A dipole’s far field falls as 1/<i>r</i><sup>3</sup> — faster than a single point charge’s 1/<i>r</i><sup>2</sup>, because the opposite charges nearly cancel at a distance.',
      },
      {
        t: 'mcq',
        q: 'A dipole is placed in a uniform electric field. The orientation of <b>stable</b> equilibrium and the potential energy there are:',
        opts: [
          { label: '<i>θ</i> = 0°, <i>U</i> = −<i>pE</i>', nudge: null },
          {
            label: '<i>θ</i> = 0°, <i>U</i> = +<i>pE</i>',
            nudge: '<b>(B)</b> swaps the sign of <i>U</i> — a frequent error from dropping the minus in <i>U</i> = −<i>pE</i> cos <i>θ</i>.',
          },
          {
            label: '<i>θ</i> = 180°, <i>U</i> = −<i>pE</i>',
            nudge: '<b>(C)</b> gives the right energy value but the wrong orientation — <i>θ</i> = 180° is unstable (energy maximum, <i>U</i> = +<i>pE</i>).',
          },
          {
            label: '<i>θ</i> = 90°, <i>U</i> = 0',
            nudge: '<b>(D)</b> confuses the zero-energy reference orientation (<i>θ</i> = 90°, where <i>U</i> = 0 but the torque is maximum) with the stable one.',
          },
        ],
        correct: 0,
        solution: 'Stable equilibrium is <i>p⃗</i> ∥ <i>E⃗</i> (<i>θ</i> = 0°), where <i>U</i> = −<i>pE</i> cos 0° = −<i>pE</i> — the minimum (most negative) energy.',
      },
      {
        t: 'mcq',
        q: 'The dimensional formula of electric field strength is:',
        opts: [
          { label: '[M L T<sup>−3</sup> A<sup>−1</sup>]', nudge: null },
          {
            label: '[M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]',
            nudge: '<b>(B)</b> is the dimensional formula of electric potential (V) — a one-power-of-length slip.',
          },
          { label: '[M L T<sup>−2</sup>]', nudge: '<b>(C)</b> is just force — for students who forget to divide by charge.' },
          {
            label: '[L T A]',
            nudge: '<b>(D)</b> is the dimensional formula of dipole moment — a tempting distractor in a dipole-heavy chapter.',
          },
        ],
        correct: 0,
        solution: '<i>E</i> = <i>F</i>/<i>q</i>, so [<i>E</i>] = [M L T<sup>−2</sup>]/[A T] = [M L T<sup>−3</sup> A<sup>−1</sup>] (units N/C or V/m).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing 1/<i>r</i><sup>2</sup> with 1/<i>r</i><sup>3</sup>.</b> A point charge’s field is 1/<i>r</i><sup>2</sup>; a dipole’s far field is 1/<i>r</i><sup>3</sup>. Mixing these is the single most common dipole error. Anchor it: a dipole is less far-reaching because its charges cancel.',
          '<b>Forgetting the axial : equatorial factor of 2.</b> <i>E</i><sub>axial</sub> = 2<i>E</i><sub>equatorial</sub> at equal distance — and the directions are opposite (axial along <i>p⃗</i>, equatorial against it). Many students remember one fact but not both.',
          '<b>Assuming “no net force” always.</b> Net force on a dipole is zero only in a uniform field. In a non-uniform field, <i>F</i> = <i>p</i> (d<i>E</i>/d<i>r</i>) ≠ 0. This is conceptually how a charged rod picks up paper bits.',
          '<b>Sign errors in potential energy.</b> <i>U</i> = −<i>pE</i> cos <i>θ</i>. The stable position (<i>θ</i> = 0) is the energy minimum −<i>pE</i>, not a maximum. Drawing the <i>U</i> vs <i>θ</i> curve once fixes this for good.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “field due to a symmetric distribution” problem (ring, arc, line), don’t integrate blindly — first ask which components cancel by symmetry. On a ring’s axis, only axial components survive, collapsing a hard vector integral into a one-line scalar one. Spotting the cancellation is worth more marks than the calculus. And for dipole numericals at <i>r</i> ≫ <i>a</i>, always use the compact <i>kp</i>/<i>r</i><sup>3</sup> forms rather than the full two-charge expression — faster and less error-prone.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Field definition',
            note: '<i>E⃗</i> = <i>F⃗</i>/<i>q</i><sub>0</sub> (N/C); point charge: <i>E</i> = (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>r</i><sup>2</sup>. Fields <b>superpose</b> as vectors.',
          },
          {
            f: 'Field lines',
            note: 'start on +, end on −; never cross; tangent = field direction; density = field strength.',
          },
          {
            f: 'Dipole moment',
            note: '<i>p⃗</i> = <i>q</i>(2<i>a⃗</i>), from −<i>q</i> to +<i>q</i>; unit C·m; [L T A].',
          },
          {
            f: 'Axial field',
            note: '<i>E</i><sub><i>a</i></sub> = (1/(4πε<sub>0</sub>)) 2<i>p</i>/<i>r</i><sup>3</sup> (along <i>p⃗</i>). <b>Equatorial:</b> <i>E</i><sub><i>e</i></sub> = (1/(4πε<sub>0</sub>)) <i>p</i>/<i>r</i><sup>3</sup> (against <i>p⃗</i>). <i>E</i><sub><i>a</i></sub> = 2<i>E</i><sub><i>e</i></sub>.',
          },
          {
            f: 'Torque',
            note: '<i>τ⃗</i> = <i>p⃗</i> × <i>E⃗</i>, <i>τ</i> = <i>pE</i> sin <i>θ</i> (max at 90°, zero at 0°/180°).',
          },
          {
            f: 'Energy',
            note: '<i>U</i> = −<i>p⃗</i> · <i>E⃗</i> = −<i>pE</i> cos <i>θ</i>; stable at <i>θ</i> = 0 (<i>U</i><sub>min</sub> = −<i>pE</i>). Work: <i>W</i> = <i>pE</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>).',
          },
          {
            f: 'Non-uniform field',
            note: 'net force <i>F</i> = <i>p</i> d<i>E</i>/d<i>r</i> ≠ 0.',
          },
        ],
        aids: [
          '“Dipole dies as 1/<i>r</i><sup>3</sup> — opposites cancel.”',
          '“Axial is twice equatorial, and they point opposite ways.”',
          '“Uniform field: only twist, no push.”',
          '“<i>p</i> points minus-to-plus.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 39–47 ─────────────────────────
  {
    n: '04',
    title: 'Continuous Charge Distribution',
    kalam: 'Real charged objects — a metal wire, a plastic disc, a glass sphere — don’t carry a handful of point charges.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A bridge topic that powers most “field from an extended object” problems. <b>CBSE Boards</b> ask for the definitions of linear/surface/volume charge density and the integral set-up. <b>JEE Main & Advanced</b> lean on it heavily — fields of rings, discs, arcs, and rods are perennial favourites, and the charged-disc result connects directly to the infinite-sheet field from Gauss’s law. <b>NEET</b> keeps it conceptual (symmetry-based zero-field arguments).',
      },
      {
        t: 'p',
        html: 'Real charged objects — a metal wire, a plastic disc, a glass sphere — don’t carry a handful of point charges. They carry unimaginably many (recall 1 μC is already ∼ 6 × 10<sup>12</sup> electrons). Tracking each one with Coulomb’s law is hopeless. So we do what physicists always do with the very numerous: we stop counting individuals and start describing a <b>density</b>.',
      },
      {
        t: 'p',
        html: 'Just as a city’s population is better described by “people per square kilometre” than by listing every resident, a charged object is described by <b>charge density</b> — how much charge sits per unit length, area, or volume. There are three flavours, depending on the object’s shape:<br>• <b>Linear charge density</b> <i>λ</i> — for thin wires and rings (charge per metre).<br>• <b>Surface charge density</b> <i>σ</i> — for sheets, discs, and shells (charge per square metre).<br>• <b>Volume charge density</b> <i>ρ</i> — for solid bodies (charge per cubic metre).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine spreading a fixed amount of ghee over a roti. If you describe it as “grams per square centimetre,” you can find the ghee on any patch by multiplying density by that patch’s area. Charge works identically: pick any tiny piece of the object, and its charge is (density) × (size of the piece). That tiny charge, d<i>q</i>, is small enough to treat as a point charge — so Coulomb’s law applies to it — and the total field is the <b>vector sum (integral)</b> of the contributions from all the pieces.',
      },
      {
        t: 'p',
        html: 'That is the entire game: <b>chop the object into infinitesimal point-charge elements d<i>q</i>, write the field d<i>E⃗</i> of each, then add them up by integration</b>, using symmetry to kill the components that cancel.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• The continuum (density) description is an approximation — valid because charge granularity (<i>e</i>) is fantastically small compared to the object. At truly atomic scales it breaks down.<br>• The integral ∫ d<i>q</i>/<i>r</i><sup>2</sup> is straightforward only when <b>symmetry</b> makes most components cancel (rings, discs, arcs, infinite lines/sheets). Without symmetry, the vector integral can be brutal.<br>• Densities may be <b>uniform</b> (constant) or <b>non-uniform</b> (a function of position); the set-up is the same, but the integration differs.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'table',
        title: 'The three charge densities',
        head: ['Density', 'Definition', 'SI unit', 'Dimensional formula'],
        rows: [
          ['Linear, <i>λ</i>', '<i>λ</i> = d<i>q</i>/d<i>l</i>', 'C/m', '[L<sup>−1</sup> T A]'],
          ['Surface, <i>σ</i>', '<i>σ</i> = d<i>q</i>/d<i>A</i>', 'C/m<sup>2</sup>', '[L<sup>−2</sup> T A]'],
          ['Volume, <i>ρ</i>', '<i>ρ</i> = d<i>q</i>/d<i>V</i>', 'C/m<sup>3</sup>', '[L<sup>−3</sup> T A]'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Charge of an element',
        main: 'd<i>q</i> = <i>λ</i> d<i>l</i> = <i>σ</i> d<i>A</i> = <i>ρ</i> d<i>V</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Total charge',
        main: '<i>Q</i> = ∫ <i>λ</i> d<i>l</i> = ∫ <i>σ</i> d<i>A</i> = ∫ <i>ρ</i> d<i>V</i>',
        legend: [],
        note: '(for uniform density, just density × total size).',
      },
      {
        t: 'formula',
        kicker: 'Electric field of a continuous distribution',
        main: '<i>E⃗</i> = (1/(4πε<sub>0</sub>)) ∫ (d<i>q</i>/<i>r</i><sup>2</sup>) <i>r̂</i>',
        legend: [
          '<i>r</i> = the distance from the element d<i>q</i> to the field point',
          '<i>r̂</i> = points from d<i>q</i> to that point',
        ],
        note: null,
      },
      {
        t: 'table',
        title: 'Key standard results (to keep alongside the Gauss results)',
        head: ['Configuration', 'Field', 'Where'],
        rows: [
          [
            'Ring (charge <i>Q</i>, radius <i>R</i>), on axis',
            '<i>E</i> = (1/(4πε<sub>0</sub>)) <i>Qx</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>',
            'distance <i>x</i> on axis',
          ],
          [
            'Disc (density <i>σ</i>, radius <i>R</i>), on axis',
            '<i>E</i> = (<i>σ</i>/(2ε<sub>0</sub>)) (1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>))',
            'distance <i>x</i> on axis',
          ],
          [
            'Semicircular arc (density <i>λ</i>, radius <i>R</i>)',
            '<i>E</i> = (1/(4πε<sub>0</sub>)) 2<i>λ</i>/<i>R</i> = 2<i>kλ</i>/<i>R</i>',
            'at the centre',
          ],
        ],
      },

      { t: 'part', title: 'Derivations and logical framework' },
      {
        t: 'proc',
        title: 'The universal recipe',
        steps: [
          'Pick an element d<i>q</i> matched to the geometry (d<i>q</i> = <i>λ</i>d<i>l</i> for a wire/arc, <i>σ</i>d<i>A</i> for a disc, etc.).',
          'Write d<i>E⃗</i> from that element using Coulomb’s law.',
          'Use <b>symmetry</b> to identify which components cancel; keep only the surviving direction.',
          'Express everything in one variable and <b>integrate</b> over the whole object.',
        ],
      },
      { t: 'p', html: '<b>Derivation 1 — Field on the axis of a uniformly charged disc</b>' },
      { t: 'fig', id: 'p12-01-fig-1.8' },
      {
        t: 'p',
        html: 'Treat the disc (surface density <i>σ</i>, radius <i>R</i>) as a nest of thin concentric <b>rings</b>. A ring of radius <i>r</i> and width d<i>r</i> has area d<i>A</i> = 2π<i>r</i> d<i>r</i> and charge d<i>q</i> = <i>σ</i> 2π<i>r</i> d<i>r</i>.',
      },
      {
        t: 'p',
        html: 'We already know a ring’s axial field. The ring of radius <i>r</i> contributes, at axial distance <i>x</i>:<br>d<i>E</i> = (1/(4πε<sub>0</sub>)) (<i>x</i> d<i>q</i>)/(<i>x</i><sup>2</sup> + <i>r</i><sup>2</sup>)<sup>3/2</sup> = (1/(4πε<sub>0</sub>)) (<i>x σ</i> 2π<i>r</i> d<i>r</i>)/(<i>x</i><sup>2</sup> + <i>r</i><sup>2</sup>)<sup>3/2</sup>',
      },
      {
        t: 'p',
        html: 'All contributions point along the axis (off-axis components cancel by the disc’s circular symmetry), so we integrate <i>r</i> from 0 to <i>R</i>:<br><i>E</i> = (<i>σx</i>/(2ε<sub>0</sub>)) ∫<sub>0</sub><sup><i>R</i></sup> (<i>r</i> d<i>r</i>)/(<i>x</i><sup>2</sup> + <i>r</i><sup>2</sup>)<sup>3/2</sup>',
      },
      {
        t: 'p',
        html: 'Substitute <i>u</i> = <i>x</i><sup>2</sup> + <i>r</i><sup>2</sup>, d<i>u</i> = 2<i>r</i> d<i>r</i>:<br>∫<sub>0</sub><sup><i>R</i></sup> (<i>r</i> d<i>r</i>)/(<i>x</i><sup>2</sup> + <i>r</i><sup>2</sup>)<sup>3/2</sup> = [−1/√(<i>x</i><sup>2</sup> + <i>r</i><sup>2</sup>)]<sub>0</sub><sup><i>R</i></sup> = 1/<i>x</i> − 1/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)',
      },
      {
        t: 'p',
        html: 'Therefore:<br><i>E</i> = (<i>σ</i>/(2ε<sub>0</sub>)) (1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>))',
      },
      {
        t: 'p',
        html: '<b>Two beautiful limits:</b><br>• <b>Infinite sheet</b> (<i>R</i> → ∞, or <i>x</i> ≪ <i>R</i>): the second term → 0, giving <i>E</i> = <i>σ</i>/(2ε<sub>0</sub>) — exactly the infinite-sheet result from Gauss’s law. The disc “becomes” an infinite plane up close.<br>• <b>Far away</b> (<i>x</i> ≫ <i>R</i>): expanding gives <i>E</i> ≈ <i>σR</i><sup>2</sup>/(4ε<sub>0</sub><i>x</i><sup>2</sup>) = (1/(4πε<sub>0</sub>)) <i>Q</i>/<i>x</i><sup>2</sup> with <i>Q</i> = <i>σ</i>π<i>R</i><sup>2</sup> — the disc shrinks to a point charge.',
      },
      { t: 'p', html: '<b>Derivation 2 — Field at the centre of a semicircular arc</b>' },
      { t: 'fig', id: 'p12-01-fig-1.9' },
      {
        t: 'p',
        html: 'Take a wire bent into a semicircle of radius <i>R</i>, linear density <i>λ</i>, centred at <i>O</i>. An element subtending angle d<i>θ</i> at the centre has length d<i>l</i> = <i>R</i> d<i>θ</i> and charge d<i>q</i> = <i>λR</i> d<i>θ</i>. Its field at <i>O</i> has magnitude:<br>d<i>E</i> = (1/(4πε<sub>0</sub>)) d<i>q</i>/<i>R</i><sup>2</sup> = (1/(4πε<sub>0</sub>)) (<i>λ</i> d<i>θ</i>)/<i>R</i>',
      },
      {
        t: 'p',
        html: 'By symmetry about the central axis, the components <b>parallel to the diameter cancel</b> in pairs; only the components <b>perpendicular to the diameter</b> (along the symmetry axis) survive. With <i>θ</i> measured from the diameter, the surviving component of each element is d<i>E</i> sin <i>θ</i>, integrated over the semicircle (<i>θ</i>: 0 → π):<br><i>E</i> = (<i>λ</i>/(4πε<sub>0</sub><i>R</i>)) ∫<sub>0</sub><sup>π</sup> sin <i>θ</i> d<i>θ</i> = (<i>λ</i>/(4πε<sub>0</sub><i>R</i>)) [−cos <i>θ</i>]<sub>0</sub><sup>π</sup> = (<i>λ</i>/(4πε<sub>0</sub><i>R</i>))(2)<br><i>E</i> = (1/(4πε<sub>0</sub>)) 2<i>λ</i>/<i>R</i> = 2<i>kλ</i>/<i>R</i><br>directed along the symmetry axis, pointing away from the arc (for positive <i>λ</i>). Note that a full ring would give <i>E</i> = 0 at the centre — the two halves cancel — which is the symmetry insight behind many quick MCQs.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A thin rod of length 50 cm carries a uniform linear charge density <i>λ</i> = 4 μC/m. Find the total charge on the rod.',
        steps: [
          '<i>Q</i> = <i>λL</i> = (4 × 10<sup>−6</sup>)(0.50)',
          '(For uniform density, total charge is simply density × size.)',
        ],
        ans: '<i>Q</i> = 2.0 μC.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A uniformly charged full ring and a uniformly charged semicircular arc (same radius <i>R</i>, same <i>λ</i>) are compared. What is the electric field at the centre of each?',
        steps: [
          '<b>The trap:</b> Students reflexively compute an integral for both. But symmetry settles the ring instantly.',
          '<b>Quick reasoning:</b> For the <b>full ring</b>, every element has a diametrically opposite twin pushing the opposite way — all contributions cancel, so <i>E</i><sub>centre</sub> = 0. For the <b>semicircle</b>, the cancellation is incomplete; the surviving field is <i>E</i> = 2<i>kλ</i>/<i>R</i>.',
          'No integration needed for the ring.',
        ],
        ans: 'Full ring → 0; semicircle → 2<i>kλ</i>/<i>R</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (using the disc result)',
        q: 'A disc of radius <i>R</i> = 10 cm carries uniform surface charge density <i>σ</i> = 8.85 × 10<sup>−7</sup> C/m<sup>2</sup>. Find the electric field on its axis at a distance <i>x</i> = <i>R</i> from the centre.',
        steps: [
          'Use <i>E</i> = (<i>σ</i>/(2ε<sub>0</sub>)) (1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)) with <i>x</i> = <i>R</i>:<br><i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>) = <i>R</i>/√(<i>R</i><sup>2</sup> + <i>R</i><sup>2</sup>) = 1/√2 ≈ 0.707<br><i>σ</i>/(2ε<sub>0</sub>) = (8.85 × 10<sup>−7</sup>)/(2(8.85 × 10<sup>−12</sup>)) = 5.0 × 10<sup>4</sup> N/C<br><i>E</i> = (5.0 × 10<sup>4</sup>)(1 − 0.707) = (5.0 × 10<sup>4</sup>)(0.293)',
        ],
        ans: '<i>E</i> ≈ 1.46 × 10<sup>4</sup> N/C, directed along the axis away from the disc.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (quarter ring, two surviving components)',
        q: 'A wire is bent into a quarter circle of radius <i>R</i> in the first quadrant, carrying uniform linear density <i>λ</i>. Find the magnitude of the electric field at the centre <i>O</i>.',
        steps: [
          '<b>Setup.</b> Element at angle <i>θ</i> (from the <i>x</i>-axis, 0 → π/2): d<i>q</i> = <i>λR</i> d<i>θ</i>, giving field magnitude d<i>E</i> = (<i>kλ</i> d<i>θ</i>)/<i>R</i> at <i>O</i>, directed away from d<i>q</i>, i.e. with components (−cos <i>θ</i>, −sin <i>θ</i>).',
          'Unlike the symmetric semicircle, here <b>both</b> components survive:<br><i>E</i><sub><i>x</i></sub> = −(<i>kλ</i>/<i>R</i>) ∫<sub>0</sub><sup>π/2</sup> cos <i>θ</i> d<i>θ</i> = −<i>kλ</i>/<i>R</i>,   <i>E</i><sub><i>y</i></sub> = −(<i>kλ</i>/<i>R</i>) ∫<sub>0</sub><sup>π/2</sup> sin <i>θ</i> d<i>θ</i> = −<i>kλ</i>/<i>R</i>',
          'Both have magnitude <i>kλ</i>/<i>R</i>, so the resultant is:<br><i>E</i> = √(<i>E</i><sub><i>x</i></sub><sup>2</sup> + <i>E</i><sub><i>y</i></sub><sup>2</sup>) = (<i>kλ</i>/<i>R</i>)√2',
          '<b>Check:</b> two perpendicular quarter-arcs would combine to give the semicircle’s 2<i>kλ</i>/<i>R</i> along the axis — consistent.',
        ],
        ans: '<i>E</i> = √2 <i>kλ</i>/<i>R</i>, directed along the line <i>y</i> = <i>x</i> (pointing away from the quarter arc, along its bisector).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A spherical surface of radius 5 cm carries a uniform surface charge density <i>σ</i> = 2 μC/m<sup>2</sup>. Find the total charge on it.',
            a: '<i>Q</i> = <i>σ</i>(4π<i>R</i><sup>2</sup>) = (2 × 10<sup>−6</sup>)(4π)(0.05)<sup>2</sup> ≈ 6.28 × 10<sup>−8</sup> C.',
          },
          {
            q: '[NEET] State the SI units and dimensional formulae of <i>λ</i>, <i>σ</i>, and <i>ρ</i>.',
            a: '<i>λ</i>: C/m, [L<sup>−1</sup> T A]; <i>σ</i>: C/m<sup>2</sup>, [L<sup>−2</sup> T A]; <i>ρ</i>: C/m<sup>3</sup>, [L<sup>−3</sup> T A].',
          },
          {
            q: '[JEE Main] For the charged disc of worked example 3, find the field very close to the surface (<i>x</i> → 0) and compare it with the infinite-sheet result.',
            a: '<i>E</i> → <i>σ</i>/(2ε<sub>0</sub>) = 5.0 × 10<sup>4</sup> N/C, identical to an infinite sheet.',
          },
          {
            q: '[JEE Main] A ring of radius <i>R</i> carries charge <i>Q</i>. At what axial distance is the field maximum, and what is that maximum field?',
            a: 'Max at <i>x</i> = <i>R</i>/√2; <i>E</i><sub>max</sub> = (1/(4πε<sub>0</sub>)) <i>Q</i>/((3√3/2) <i>R</i><sup>2</sup>) = 2<i>Q</i>/(3√3 · 4πε<sub>0</sub><i>R</i><sup>2</sup>).',
          },
          {
            q: '[JEE Advanced] A rod of length <i>L</i> with uniform density <i>λ</i> lies along the <i>x</i>-axis. Find the field at a point on the perpendicular bisector, at distance <i>d</i> from the rod.',
            a: '<i>E</i> = (1/(4πε<sub>0</sub>)) <i>λL</i>/(<i>d</i>√(<i>d</i><sup>2</sup> + (<i>L</i>/2)<sup>2</sup>)), directed perpendicular to the rod.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The electric field at the centre of a uniformly charged <b>full ring</b> is:',
        opts: [
          {
            label: '<i>kQ</i>/<i>R</i><sup>2</sup>',
            nudge: '<b>(A)</b> is the field a point charge <i>Q</i> would give at distance <i>R</i> — wrong model.',
          },
          { label: '2<i>kQ</i>/<i>R</i><sup>2</sup>', nudge: '<b>(B)</b>, <b>(D)</b> are arbitrary multiples with no symmetry justification.' },
          { label: 'zero', nudge: null },
          { label: '<i>kQ</i>/(2<i>R</i><sup>2</sup>)', nudge: '<b>(B)</b>, <b>(D)</b> are arbitrary multiples with no symmetry justification.' },
        ],
        correct: 2,
        solution: 'Every element is balanced by a diametrically opposite one; the contributions cancel, giving zero field at the centre.',
      },
      {
        t: 'mcq',
        q: 'As the axial distance <i>x</i> of a charged disc satisfies <i>x</i> ≪ <i>R</i>, the axial field tends to:',
        opts: [
          {
            label: '<i>σ</i>/ε<sub>0</sub>',
            nudge: '<b>(A)</b> is the conductor-surface field (<i>σ</i>/ε<sub>0</sub>) — the recurring factor-of-2 trap.',
          },
          { label: '<i>σ</i>/(2ε<sub>0</sub>)', nudge: null },
          { label: 'zero', nudge: '<b>(C)</b> confuses “centre of a ring” (zero) with “surface of a disc” (non-zero).' },
          { label: '<i>kQ</i>/<i>x</i><sup>2</sup>', nudge: '<b>(D)</b> is the far-field point-charge limit, the opposite regime.' },
        ],
        correct: 1,
        solution: 'Close to the surface, the disc looks infinite and <i>E</i> → <i>σ</i>/(2ε<sub>0</sub>) — the infinite-sheet value.',
      },
      {
        t: 'mcq',
        q: 'The dimensional formula of surface charge density <i>σ</i> is:',
        opts: [
          {
            label: '[L<sup>−1</sup> T A]',
            nudge: '<b>(A)</b> is linear density <i>λ</i>; <b>(C)</b> is volume density <i>ρ</i> — adjacent traps.',
          },
          { label: '[L<sup>−2</sup> T A]', nudge: null },
          {
            label: '[L<sup>−3</sup> T A]',
            nudge: '<b>(A)</b> is linear density <i>λ</i>; <b>(C)</b> is volume density <i>ρ</i> — adjacent traps.',
          },
          { label: '[L<sup>−2</sup> T<sup>−1</sup> A]', nudge: '<b>(D)</b> has the wrong power of time.' },
        ],
        correct: 1,
        solution: '<i>σ</i> = charge/area = [A T]/[L<sup>2</sup>] = [L<sup>−2</sup> T A].',
      },
      {
        t: 'mcq',
        q: 'To find the field of an extended charged body, the correct general expression is:',
        opts: [
          {
            label: '<i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> using total charge as a point',
            nudge: '<b>(A)</b> is valid only far away or for spherical symmetry, not in general.',
          },
          { label: '<i>E⃗</i> = (1/(4πε<sub>0</sub>)) ∫ (d<i>q</i>/<i>r</i><sup>2</sup>) <i>r̂</i>', nudge: null },
          { label: '<i>E</i> = <i>Q</i>/ε<sub>0</sub>', nudge: '<b>(C)</b> is flux, not field.' },
          { label: '<i>E</i> = <i>σ</i>/(2ε<sub>0</sub>) always', nudge: '<b>(D)</b> holds only for an infinite sheet, not “always.”' },
        ],
        correct: 1,
        solution: 'The field is the vector integral of point-charge contributions from each element d<i>q</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding magnitudes instead of vectors.</b> Field contributions are vectors. Always resolve into components and use symmetry to cancel before integrating — never sum the |d<i>E⃗</i>| blindly.',
          '<b>Treating an extended body as a point too early.</b> <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> is only valid far away (or for spherical symmetry). Near a disc, rod, or ring, you must integrate.',
          '<b>Mixing up the densities.</b> <i>λ</i> (per length), <i>σ</i> (per area), <i>ρ</i> (per volume) — match the density to the geometry, and the element d<i>q</i> to the density.',
          '<b>Forgetting the ring-vs-arc distinction.</b> Full ring centre: <i>E</i> = 0. Semicircle centre: <i>E</i> = 2<i>kλ</i>/<i>R</i>. Don’t let one overwrite the other.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before integrating anything, ask “which components cancel?” For a full loop, everything cancels at the centre (field = 0). For a disc on its axis, only the axial part survives — turning a vector integral into a one-variable scalar one. The symmetry step saves more marks than the calculus. And sanity-check every result with a limit: discs should become infinite sheets up close and point charges far away.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Densities',
            note: '<i>λ</i> = d<i>q</i>/d<i>l</i> (C/m), <i>σ</i> = d<i>q</i>/d<i>A</i> (C/m<sup>2</sup>), <i>ρ</i> = d<i>q</i>/d<i>V</i> (C/m<sup>3</sup>); element d<i>q</i> = <i>λ</i>d<i>l</i> = <i>σ</i>d<i>A</i> = <i>ρ</i>d<i>V</i>.',
          },
          {
            f: 'Master formula',
            note: '<i>E⃗</i> = (1/(4πε<sub>0</sub>)) ∫ (d<i>q</i>/<i>r</i><sup>2</sup>) <i>r̂</i> — chop, write d<i>E⃗</i>, cancel by symmetry, integrate.',
          },
          {
            f: 'Ring (axis)',
            note: '<i>E</i> = <i>kQx</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>; max at <i>x</i> = <i>R</i>/√2; centre <i>E</i> = 0.',
          },
          {
            f: 'Disc (axis)',
            note: '<i>E</i> = (<i>σ</i>/(2ε<sub>0</sub>)) (1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)) → <i>σ</i>/(2ε<sub>0</sub>) (sheet) up close, point charge far away.',
          },
          {
            f: 'Semicircular arc (centre)',
            note: '<i>E</i> = 2<i>kλ</i>/<i>R</i>; <b>quarter arc:</b> <i>E</i> = √2 <i>kλ</i>/<i>R</i>.',
          },
        ],
        aids: [
          '“Chop, cancel, integrate.”',
          '“Full loop → zero at centre; half loop → 2<i>kλ</i>/<i>R</i>.”',
          '“A disc up close is just an infinite sheet.”',
          '“<i>λ</i> length, <i>σ</i> surface, <i>ρ</i> volume.”',
        ],
      },
    ],
  },
];
