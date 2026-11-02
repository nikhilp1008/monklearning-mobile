import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, the opening and Topic 01: pp. 865–877 of the Class 12 Physics
 * Master Reference, word for word. The chapter’s title page, contents, “How
 * to Use This Chapter” text and its four-item list (p. 865) are not copied;
 * the opening (n “00”, shown as “Start here”) keeps ONLY the book’s “Syllabus
 * scope (read this first)” box on p. 865 (the founder’s decision, 2026-10-30),
 * with “Subtopic N” read as “Topic 0N”. Topic 01, Energy Bands and Intrinsic /
 * Extrinsic Semiconductors (pp. 866–877), is split at its Sections 1 to 8.
 * Figures 14.1 (captioned p. 867, drawn p. 868), 14.2 (pp. 869–870) and 14.3
 * (pp. 871–872) are set beside the text they illustrate: 14.1 after the
 * band classification of solids, 14.2 after reasoning (A) on band splitting,
 * 14.3 after reasoning (B) on doping. They are redrawn in
 * lib/diagrams/physics-12-14.ts. The topic has no unnumbered drawings.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Opening · p. 865 ─────────────────────────
  {
    n: '00',
    title: 'Syllabus scope',
    kalam: 'This guide covers the full current syllabus across CBSE Boards, JEE Main and NEET 2026.',
    blocks: [
      { t: 'part', title: 'Syllabus scope' },
      {
        t: 'p',
        html: 'This guide covers the full current syllabus across CBSE Boards, JEE Main and NEET 2026. A few boundaries are worth knowing: Topics 01 and 02 are common to all three exams. Special-purpose diodes (Topic 03) and logic gates (Topic 04) are in <b>JEE Main and NEET</b> but have been <b>removed from the current CBSE</b> syllabus. <b>Junction transistors, transistor amplifiers and oscillators have been removed from all three</b> (CBSE, JEE Main and NEET 2026) and are therefore not part of this guide — if you meet them in an older textbook or past paper, they are no longer examinable.',
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 866–877 ─────────────────────────
  {
    n: '01',
    title: 'Energy Bands and Intrinsic / Extrinsic Semiconductors',
    kalam: 'Semiconductors get more conductive when heated — the opposite of metals.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual bedrock of the entire chapter and shows up everywhere. CBSE Boards almost always carry a 1–3 mark question on band classification, the meaning of doping, or carrier types. NEET reliably asks 1–2 single-line conceptual questions (carrier type, Fermi level, temperature behaviour). JEE Main folds it into numericals on the mass-action law and conductivity, and JEE Advanced occasionally pushes it into exponential temperature-dependence and band-gap estimation.',
      },
      {
        t: 'p',
        html: 'Imagine a single, isolated silicon atom floating in empty space. Its electrons are only allowed to sit at very specific, sharply defined energy levels — like marked seats in an otherwise empty hall. Now bring billions of these atoms together to form a solid crystal. Suddenly every atom’s neighbours are crowding in, and no two electrons in the whole crystal experience exactly the same electrical surroundings. Pauli’s exclusion principle forbids any two electrons from occupying the identical quantum state, so nature resolves the crowding by splitting each sharp atomic level into an enormous number of very closely spaced levels. There are so many of them, packed so tightly, that they smear into what we call an <b>energy band</b> — a near-continuous range of allowed energies.',
      },
      {
        t: 'p',
        html: 'Two of these bands matter for us. The <b>valence band</b> holds the energies of the outermost (valence) electrons — the ones involved in bonding. The <b>conduction band</b> sits just above it and is normally empty; an electron that reaches it is no longer tied to any single atom and is free to drift through the crystal and carry current. Between the top of the valence band and the bottom of the conduction band there is often a stretch of forbidden energies where no electron is allowed to exist. The width of this no-man’s-land is the <b>energy band gap</b>, <i>E</i><sub>g</sub>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a Mumbai local train at peak hour. The valence band is the jam-packed general compartment — every spot taken, bodies pressed together, nobody able to actually move even though everyone is technically “there.” The conduction band is the empty luggage section above, where anyone who climbs up can walk around freely. The band gap is the height you must climb to get from the packed floor to that empty deck. If that climb is small, a few determined passengers (electrons) will make it up and start moving around. If it is enormous, nobody climbs, and the train carries no internal “traffic” at all.',
      },
      {
        t: 'p',
        html: 'This single picture classifies every solid:<br>• <b>Conductors (metals):</b> the conduction band either overlaps the valence band or is already partially filled. There is effectively no climb at all — electrons move freely even at the slightest push. <i>E</i><sub>g</sub> ≈ 0.<br>• <b>Insulators:</b> the gap is huge (<i>E</i><sub>g</sub> > 3 eV; diamond is about 5.4 eV). Thermal energy at room temperature is nowhere near enough to lift electrons across, so no conduction occurs.<br>• <b>Semiconductors:</b> the gap is small (<i>E</i><sub>g</sub> < 3 eV; silicon ≈ 1.1 eV, germanium ≈ 0.7 eV). A modest amount of thermal energy lets a small but meaningful number of electrons jump the gap. Their conductivity therefore sits between metals and insulators — and crucially, it rises with temperature.',
      },
      { t: 'fig', id: 'p12-14-fig-14.1' },
      {
        t: 'p',
        html: 'Two families of semiconductors are worth distinguishing. <b>Elemental semiconductors</b> are single elements from Group 14 — silicon and germanium — and dominate everyday electronics. <b>Compound semiconductors</b> are made from two or more elements, such as gallium arsenide (GaAs), gallium phosphide (GaP), cadmium sulphide (CdS) and indium phosphide (InP). Their band gaps can be engineered across a wide range, which is exactly why they (not Si or Ge) are used for light-emitting devices like LEDs, and why some of them (GaAs, CdS) join silicon in light-absorbing devices like solar cells, encountered later in this chapter.',
      },
      {
        t: 'p',
        html: 'When an electron does jump up, it leaves behind a vacancy in the valence band. This vacancy is a <b>hole</b>, and it behaves like a real, mobile, positively charged particle. Here is the beautiful part: a neighbouring valence electron can slide into the vacancy, which moves the vacancy to where that electron came from. Repeat this and the hole appears to travel through the crystal — exactly like a single empty seat “moving backward” through a row at a cinema as people shuffle over one by one. So a pure semiconductor conducts via <b>two</b> carriers at once: electrons in the conduction band and holes in the valence band, always created in equal numbers.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean band picture and the <i>E</i><sub>g</sub> < 3 eV cut-off are useful approximations, not sharp laws. At absolute zero (<i>T</i> = 0 K) a pure semiconductor has a completely filled valence band and an empty conduction band — it behaves as a perfect insulator. The “free to move” language assumes a perfect periodic crystal; real defects and impurities change the story. Finally, the idea that a hole is a positive particle is a powerful bookkeeping device — the charge that actually moves is still the negative electron sliding into vacancies — yet it works so well that in p-type material the sign of the Hall voltage is that of a positive carrier, as experiments confirm.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Intrinsic carrier relation (pure semiconductor)',
        main: '<i>n</i><sub>e</sub> = <i>n</i><sub>h</sub> = <i>n</i><sub>i</sub>',
        legend: [
          '<i>n</i><sub>e</sub> = electron number density in the conduction band (m<sup>−3</sup>)',
          '<i>n</i><sub>h</sub> = hole number density in the valence band (m<sup>−3</sup>)',
          '<i>n</i><sub>i</sub> = intrinsic carrier concentration (m<sup>−3</sup>)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Law of mass action (holds for pure and doped samples in thermal equilibrium)',
        main: '<i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup>',
        legend: [
          '<i>n</i><sub>e</sub> = electron number density in the conduction band (m<sup>−3</sup>)',
          '<i>n</i><sub>h</sub> = hole number density in the valence band (m<sup>−3</sup>)',
          '<i>n</i><sub>i</sub> = intrinsic carrier concentration (m<sup>−3</sup>)',
        ],
        note: '<i>n</i><sub>i</sub> depends only on material and temperature, <b>not</b> on doping',
      },
      {
        t: 'formula',
        kicker: 'Temperature dependence of intrinsic carrier concentration',
        main: '<i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup> <i>e</i><sup>−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)</sup>',
        legend: [
          '<i>n</i><sub>i</sub> = intrinsic carrier concentration (m<sup>−3</sup>)',
          '<i>E</i><sub>g</sub> = energy band gap (J or eV)',
          '<i>k</i><sub>B</sub> = Boltzmann constant, 1.38 × 10<sup>−23</sup> J K<sup>−1</sup> = 8.62 × 10<sup>−5</sup> eV K<sup>−1</sup>',
          '<i>T</i> = absolute temperature (K)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conductivity of a semiconductor (two carriers)',
        main: '<i>σ</i> = <i>e</i>(<i>n</i><sub>e</sub><i>μ</i><sub>e</sub> + <i>n</i><sub>h</sub><i>μ</i><sub>h</sub>)<br><i>ρ</i> = 1/<i>σ</i>',
        legend: [
          '<i>σ</i> = conductivity (S m<sup>−1</sup>)',
          '<i>ρ</i> = resistivity (Ω m)',
          '<i>e</i> = elementary charge, 1.6 × 10<sup>−19</sup> C',
          '<i>n</i><sub>e</sub> = electron number density in the conduction band (m<sup>−3</sup>)',
          '<i>n</i><sub>h</sub> = hole number density in the valence band (m<sup>−3</sup>)',
          '<i>μ</i><sub>e</sub> = electron mobility (m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>)',
          '<i>μ</i><sub>h</sub> = hole mobility (m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Symbol dictionary:</b><br>• <i>n</i><sub>e</sub> — electron number density in conduction band (m<sup>−3</sup>)<br>• <i>n</i><sub>h</sub> — hole number density in valence band (m<sup>−3</sup>)<br>• <i>n</i><sub>i</sub> — intrinsic carrier concentration (m<sup>−3</sup>); depends only on material and temperature, <b>not</b> on doping<br>• <i>E</i><sub>g</sub> — energy band gap (J or eV); 1 eV = 1.6 × 10<sup>−19</sup> J<br>• <i>k</i><sub>B</sub> — Boltzmann constant = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup> = 8.62 × 10<sup>−5</sup> eV K<sup>−1</sup><br>• <i>μ</i><sub>e</sub>, <i>μ</i><sub>h</sub> — electron and hole mobilities (m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>)<br>• <i>σ</i> — conductivity (S m<sup>−1</sup>); <i>ρ</i> — resistivity (Ω m)<br>• <i>e</i> — elementary charge = 1.6 × 10<sup>−19</sup> C',
      },
      {
        t: 'p',
        html: '<b>Dimensional formulae (core quantities):</b><br>• Energy gap <i>E</i><sub>g</sub>: [M L<sup>2</sup> T<sup>−2</sup>]<br>• Carrier concentration <i>n</i>: [L<sup>−3</sup>]<br>• Conductivity <i>σ</i>: [M<sup>−1</sup> L<sup>−3</sup> T<sup>3</sup> A<sup>2</sup>]<br>• Mobility <i>μ</i>: [M<sup>−1</sup> T<sup>2</sup> A]<br>• Boltzmann constant <i>k</i><sub>B</sub>: [M L<sup>2</sup> T<sup>−2</sup> Θ<sup>−1</sup>] (where Θ is the dimension of temperature)',
      },
      {
        t: 'formula',
        kicker: 'Empirical band-gap temperature laws (useful for Advanced-level problems)',
        main: '<i>E</i><sub>g</sub>(Si) = 1.21 − 3.60 × 10<sup>−4</sup> <i>T</i> (eV)<br><i>E</i><sub>g</sub>(Ge) = 0.785 − 2.23 × 10<sup>−4</sup> <i>T</i> (eV)',
        legend: [
          '<i>E</i><sub>g</sub> = energy band gap (eV)',
          '<i>T</i> = absolute temperature (K)',
        ],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single grand derivation here in the Gauss’s-law sense, but three pieces of reasoning are routinely examined. Treat each as a logical chain rather than a formula to memorise.',
      },
      {
        t: 'p',
        html: '<b>(A) Why bands split into exactly the right number of states.</b> Consider a crystal of <i>N</i> atoms of Si or Ge. Each free atom contributes 4 valence electrons (two <i>s</i> and two <i>p</i>), so the crystal holds 4<i>N</i> valence electrons. When the atoms bond, the available outer levels split into two bands, each capable of holding 4<i>N</i> states. <b>Why this matters:</b> the lower band (valence band) takes all 4<i>N</i> electrons and is therefore completely filled, while the upper band (conduction band) is left empty. A completely filled band cannot carry net current — for every electron drifting one way there is one drifting the other — which is precisely why a perfect semiconductor at 0 K is an insulator. The reasoning, not the count, is the point.',
      },
      { t: 'fig', id: 'p12-14-fig-14.2' },
      {
        t: 'p',
        html: '<b>(B) Why doping works — the donor/acceptor logic.</b> Doping means deliberately adding about 1 impurity atom per 10<sup>6</sup> host atoms (≈ 1 ppm). The reasoning runs through valency:<br>1. Pentavalent impurity (P, As, Sb) substitutes for a tetravalent Si/Ge atom. Four of its five valence electrons form covalent bonds; the <b>fifth is left over</b>, loosely bound (binding energy only ~0.01 eV in Ge, ~0.05 eV in Si). This creates a filled <b>donor level</b> just below the conduction band. At room temperature thermal energy easily kicks that electron up, so electrons dominate → <b>n-type</b>, with <i>n</i><sub>e</sub> ≫ <i>n</i><sub>h</sub>.<br>2. Trivalent impurity (B, Al, In, Ga) has only three bonding electrons, so one covalent bond is left <b>incomplete</b> — a ready-made hole. This creates an empty <b>acceptor level</b> just above the valence band (~0.01–0.05 eV). Valence electrons hop up to fill it, leaving holes behind, so holes dominate → <b>p-type</b>, with <i>n</i><sub>h</sub> ≫ <i>n</i><sub>e</sub>.',
      },
      { t: 'fig', id: 'p12-14-fig-14.3' },
      {
        t: 'p',
        html: '<b>(C) Why the mass-action law <i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup> survives doping.</b> Doping floods the crystal with one carrier type (say electrons in n-type). But more electrons means a hole is far more likely to meet and recombine with an electron, so the hole population is driven down. The two effects balance such that the <b>product</b> <i>n</i><sub>e</sub><i>n</i><sub>h</sub> stays pinned at <i>n</i><sub>i</sub><sup>2</sup>, fixed only by material and temperature. The crystal also remains <b>overall electrically neutral</b> at all times — the extra mobile carriers are exactly balanced by the fixed, ionised impurity cores in the lattice. (A frequent exam trap is forgetting that doping changes <i>n</i><sub>e</sub> and <i>n</i><sub>h</sub> individually but never <i>n</i><sub>i</sub>.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A pure silicon sample has intrinsic carrier concentration <i>n</i><sub>i</sub> = 1.5 × 10<sup>16</sup> m<sup>−3</sup> at room temperature. It is doped with a pentavalent donor so that the electron concentration becomes <i>n</i><sub>e</sub> = 5 × 10<sup>22</sup> m<sup>−3</sup>. Find the hole concentration <i>n</i><sub>h</sub> and state the type of semiconductor.',
        steps: [
          '<b>Given:</b> <i>n</i><sub>i</sub> = 1.5 × 10<sup>16</sup> m<sup>−3</sup>, <i>n</i><sub>e</sub> = 5 × 10<sup>22</sup> m<sup>−3</sup>.',
          '<b>Formula:</b> Law of mass action, <i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup> ⇒ <i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup>/<i>n</i><sub>e</sub>.',
          '<b>Substitution:</b><br><i>n</i><sub>h</sub> = (1.5 × 10<sup>16</sup>)<sup>2</sup>/(5 × 10<sup>22</sup>) = (2.25 × 10<sup>32</sup>)/(5 × 10<sup>22</sup>) = 4.5 × 10<sup>9</sup> m<sup>−3</sup>',
          'Since <i>n</i><sub>e</sub> ≫ <i>n</i><sub>h</sub>, this is an <b>n-type</b> semiconductor. Electrons are the majority carriers; holes are the minority carriers.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Three pure samples at room temperature have band gaps: A (0.7 eV), B (1.1 eV), C (5.4 eV). Which has the <b>largest</b> intrinsic carrier concentration <i>n</i><sub>i</sub>?',
        steps: [
          '<b>The trap:</b> many students reason “bigger gap → more energy → more carriers” and pick C, or assume a linear relationship. Both are wrong.',
          '<b>Speed approach — don’t calculate, compare exponents.</b> From <i>n</i><sub>i</sub> ∝ <i>e</i><sup>−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)</sup>, the carrier count falls exponentially as <i>E</i><sub>g</sub> rises. The smallest gap gives the largest exponent and therefore the most carriers. No arithmetic needed:<br>smallest <i>E</i><sub>g</sub> ⇒ largest <i>n</i><sub>i</sub>',
          'Sample C (5.4 eV, diamond-like) is effectively an insulator with essentially zero carriers. Eliminating C and B on the exponential argument alone takes a few seconds.',
        ],
        ans: '<b>A</b> (0.7 eV, germanium-like).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An intrinsic germanium sample has <i>n</i><sub>i</sub> = 2.4 × 10<sup>19</sup> m<sup>−3</sup>, with mobilities <i>μ</i><sub>e</sub> = 0.39 m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup> and <i>μ</i><sub>h</sub> = 0.19 m<sup>2</sup> V<sup>−1</sup> s<sup>−1</sup>. The sample is doped n-type so that <i>n</i><sub>e</sub> = 4.8 × 10<sup>20</sup> m<sup>−3</sup>. Find (a) the hole concentration and (b) the conductivity of the doped sample.',
        steps: [
          '<b>(a) Hole concentration</b> (mass-action law):<br><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup>/<i>n</i><sub>e</sub> = (2.4 × 10<sup>19</sup>)<sup>2</sup>/(4.8 × 10<sup>20</sup>) = (5.76 × 10<sup>38</sup>)/(4.8 × 10<sup>20</sup>) = 1.2 × 10<sup>18</sup> m<sup>−3</sup>',
          '<b>(b) Conductivity</b> (two-carrier conduction):<br><i>σ</i> = <i>e</i>(<i>n</i><sub>e</sub><i>μ</i><sub>e</sub> + <i>n</i><sub>h</sub><i>μ</i><sub>h</sub>)<br>= 1.6 × 10<sup>−19</sup>[(4.8 × 10<sup>20</sup>)(0.39) + (1.2 × 10<sup>18</sup>)(0.19)]<br>= 1.6 × 10<sup>−19</sup>[1.872 × 10<sup>20</sup> + 2.28 × 10<sup>17</sup>]<br>≈ 1.6 × 10<sup>−19</sup> × 1.874 × 10<sup>20</sup> ≈ 30 S m<sup>−1</sup>',
          'Resistivity <i>ρ</i> = 1/<i>σ</i> ≈ 0.033 Ω m. Notice the hole term contributes barely 0.1% — once doped, the minority carrier is almost irrelevant to conduction.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The conductivity of an intrinsic silicon sample is found to <b>quadruple</b> when its temperature is raised from <i>T</i><sub>1</sub> = 300 K to <i>T</i><sub>2</sub> = 320 K. Estimate the band gap <i>E</i><sub>g</sub>. State the approximations you make and justify why they are reasonable over this temperature range.',
        steps: [
          '<b>Reasoning.</b> Conductivity tracks carrier concentration, <i>σ</i> ∝ <i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup><i>e</i><sup>−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)</sup>. Over a small 20 K interval the slowly-varying <i>T</i><sup>3/2</sup> prefactor and the mild temperature dependence of mobility change by only about 10%, while the exponential changes by a factor of several. So to leading order we keep only the exponential:<br><i>σ</i><sub>2</sub>/<i>σ</i><sub>1</sub> ≈ exp[(<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub>))(1/<i>T</i><sub>1</sub> − 1/<i>T</i><sub>2</sub>)]',
          '<b>Solve.</b> Take logs with <i>σ</i><sub>2</sub>/<i>σ</i><sub>1</sub> = 4:<br>ln 4 = (<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub>))(1/300 − 1/320)<br>1/300 − 1/320 = (320 − 300)/(300 × 320) = 20/96000 = 2.083 × 10<sup>−4</sup> K<sup>−1</sup><br><i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub>) = ln 4/(2.083 × 10<sup>−4</sup>) = 1.386/(2.083 × 10<sup>−4</sup>) = 6654 K<br><i>E</i><sub>g</sub> = 2<i>k</i><sub>B</sub> × 6654 = 2 × (8.62 × 10<sup>−5</sup> eV K<sup>−1</sup>) × 6654 ≈ 1.15 eV',
          '<b>Evaluate.</b> The estimate ≈ 1.15 eV lands right on silicon’s known ∼ 1.1 eV, confirming the dropped factors were safe to ignore over 20 K. The deeper lesson: the band gap is buried in the slope of ln <i>σ</i> versus 1/<i>T</i> — measuring conductivity at two temperatures is a genuine experimental route to <i>E</i><sub>g</sub>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw and label the energy-band diagrams for a conductor, an insulator and a semiconductor, and state the approximate band gap of each category.',
            a: 'Conductor <i>E</i><sub>g</sub> ≈ 0 (overlap); insulator <i>E</i><sub>g</sub> > 3 eV; semiconductor <i>E</i><sub>g</sub> < 3 eV.',
          },
          {
            q: '[NEET] A tetravalent germanium crystal is doped with traces of indium. State the resulting type of semiconductor, identify the majority carriers, and say where the Fermi level shifts relative to the mid-gap.',
            a: 'p-type; majority carriers are holes; Fermi level shifts down, towards the valence band.',
          },
          {
            q: '[JEE Main] A silicon sample has <i>n</i><sub>i</sub> = 1.5 × 10<sup>16</sup> m<sup>−3</sup>. It is doped p-type so that <i>n</i><sub>h</sub> = 4.5 × 10<sup>22</sup> m<sup>−3</sup>. Find <i>n</i><sub>e</sub> and state whether electrons or holes are the minority carriers.',
            a: '<i>n</i><sub>e</sub> = 5 × 10<sup>9</sup> m<sup>−3</sup>; electrons are the minority carriers.',
          },
          {
            q: '[JEE Main] An intrinsic semiconductor at 300 K has conductivity <i>σ</i><sub>1</sub>. Using <i>σ</i> ∝ <i>e</i><sup>−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)</sup>, by what factor does the conductivity change when the temperature rises to 330 K, given <i>E</i><sub>g</sub> = 0.72 eV? (Take <i>k</i><sub>B</sub> = 8.62 × 10<sup>−5</sup> eV K<sup>−1</sup>.)',
            a: 'Conductivity increases by a factor ≈ 3.5.',
          },
          {
            q: '[JEE Advanced] The intrinsic carrier concentration of a semiconductor is <i>n</i><sub>i1</sub> at <i>T</i><sub>1</sub> = 290 K and <i>n</i><sub>i2</sub> at <i>T</i><sub>2</sub> = 350 K. Using the full expression <i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup><i>e</i><sup>−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)</sup> with <i>E</i><sub>g</sub> = 1.1 eV, compute the ratio <i>n</i><sub>i2</sub>/<i>n</i><sub>i1</sub>.',
            a: '<i>n</i><sub>i2</sub>/<i>n</i><sub>i1</sub> ≈ 58 (prefactor contributes ≈ 1.33; exponential contributes ≈ 43).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'At absolute zero (0 K), a pure (intrinsic) semiconductor behaves as:',
        opts: [
          {
            label: 'a perfect conductor',
            nudge: '<b>(A)</b> tempts students who memorise “semiconductors conduct” without the temperature caveat.',
          },
          { label: 'a perfect insulator', nudge: null },
          {
            label: 'a superconductor',
            nudge: '<b>(C)</b> confuses “zero temperature” with superconductivity, a different phenomenon entirely.',
          },
          {
            label: 'an n-type semiconductor',
            nudge: '<b>(D)</b> wrongly treats a pure sample as doped: n-type needs a pentavalent impurity, and an intrinsic sample has no impurity at all.',
          },
        ],
        correct: 1,
        solution:
          'At 0 K there is no thermal energy to lift any electron across the gap, so the valence band is completely full and the conduction band completely empty — no free carriers, hence a perfect insulator.',
      },
      {
        t: 'mcq',
        q: 'A pure silicon crystal is doped with phosphorus (pentavalent). The resulting material has:',
        opts: [
          {
            label: 'a net negative charge',
            nudge: '<b>(A)</b> is the classic misconception that “n-type = negative.”',
          },
          { label: 'a net positive charge', nudge: '<b>(B)</b> over-corrects in the wrong direction.' },
          { label: 'zero net charge with electrons as majority carriers', nudge: null },
          {
            label: 'zero net charge with holes as majority carriers',
            nudge: '<b>(D)</b> gets the neutrality right but flips the carrier type — pentavalent doping gives electrons, not holes, as the majority.',
          },
        ],
        correct: 2,
        solution:
          'Phosphorus donates a loosely bound fifth electron, making the sample n-type. The crystal stays electrically neutral overall — every mobile electron is balanced by a fixed positive donor ion core.',
      },
      {
        t: 'mcq',
        q: 'For an intrinsic semiconductor, the Fermi level lies:',
        opts: [
          {
            label: 'inside the conduction band',
            nudge: '<b>(A)</b> puts the Fermi level inside the conduction band, which happens only in a very heavily doped n-type sample (or a metal), never in an intrinsic semiconductor.',
          },
          {
            label: 'inside the valence band',
            nudge: '<b>(B)</b> puts the Fermi level inside the valence band, which happens only in a very heavily doped p-type sample, never in an intrinsic semiconductor.',
          },
          { label: 'approximately at the middle of the forbidden gap', nudge: null },
          {
            label: 'above the conduction band',
            nudge: '<b>(D)</b> is unphysical: a Fermi level above the conduction band would mean that band is almost completely full of electrons — the opposite of an intrinsic semiconductor, whose conduction band is nearly empty.',
          },
        ],
        correct: 2,
        solution:
          'With electrons and holes generated in equal numbers, the Fermi level sits essentially mid-gap for an intrinsic semiconductor. A student who memorises only the doped cases (near CB for n-type, near VB for p-type) may panic on the intrinsic case; the answer is the symmetric middle.',
      },
      {
        t: 'mcq',
        q: 'As temperature increases, the resistance of a pure semiconductor and that of a metallic conductor respectively:',
        opts: [
          {
            label: 'both increase',
            nudge: '<b>(A)</b> applies the familiar “metal heats up, resistance rises” rule to the semiconductor too — the single most common slip.',
          },
          {
            label: 'both decrease',
            nudge: '<b>(B)</b> gives the metal the semiconductor’s falling resistance.',
          },
          { label: 'semiconductor decreases, conductor increases', nudge: null },
          {
            label: 'semiconductor increases, conductor decreases',
            nudge: '<b>(D)</b> reverses both behaviours, giving the semiconductor the metal’s rising resistance and the metal the semiconductor’s falling one.',
          },
        ],
        correct: 2,
        solution:
          'In a semiconductor, heating generates more electron–hole pairs, so conductivity rises and resistance falls (negative temperature coefficient). In a metal, the carrier number is fixed but more lattice vibrations scatter electrons, so resistance rises.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Doping changes <i>n</i><sub>i</sub>.”</b> No. <i>n</i><sub>i</sub> depends only on the material and temperature. Doping changes <i>n</i><sub>e</sub> and <i>n</i><sub>h</sub> individually, but their product stays locked at <i>n</i><sub>i</sub><sup>2</sup>.',
          '<b>“n-type is negatively charged, p-type is positively charged.”</b> Both are electrically neutral overall. The “n” and “p” refer only to the sign of the majority mobile carrier, not the net charge.',
          '<b>Confusing donor/acceptor valency.</b> Pentavalent → donor → n-type; trivalent → acceptor → p-type. Mixing these up flips the entire answer.',
          '<b>Forgetting the temperature coefficient is negative.</b> Semiconductors get more conductive when heated — the opposite of metals.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any temperature or band-gap comparison, work with the exponent of <i>e</i><sup>−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)</sup> and never the full number. A smaller gap or higher temperature always means a larger carrier population — you can rank options or eliminate distractors by inspection, before touching a calculator.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Band classification',
            note: 'conductor <i>E</i><sub>g</sub> ≈ 0 · semiconductor <i>E</i><sub>g</sub> < 3 eV (Si ≈ 1.1, Ge ≈ 0.7) · insulator <i>E</i><sub>g</sub> > 3 eV (diamond ≈ 5.4)',
          },
          {
            f: 'Intrinsic',
            note: 'pure; <i>n</i><sub>e</sub> = <i>n</i><sub>h</sub> = <i>n</i><sub>i</sub>; conducts via electrons <b>and</b> holes',
          },
          {
            f: 'Mass-action law (always true)',
            note: '<i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup>',
          },
          {
            f: 'Doping (≈1 ppm)',
            note: 'pentavalent (P, As, Sb) → <b>donor</b> → <b>n-type</b> (<i>n</i><sub>e</sub> ≫ <i>n</i><sub>h</sub>, Fermi near CB); trivalent (B, Al, In) → <b>acceptor</b> → <b>p-type</b> (<i>n</i><sub>h</sub> ≫ <i>n</i><sub>e</sub>, Fermi near VB)',
          },
          {
            f: 'Temperature',
            note: '<i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup><i>e</i><sup>−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)</sup> — carriers rise with <i>T</i>, so <b>resistance falls</b> (negative temperature coefficient)',
          },
          {
            f: 'Conductivity',
            note: '<i>σ</i> = <i>e</i>(<i>n</i><sub>e</sub><i>μ</i><sub>e</sub> + <i>n</i><sub>h</sub><i>μ</i><sub>h</sub>)',
          },
          { f: 'Always neutral', note: 'every doped crystal stays electrically neutral overall' },
        ],
        aids: [
          '“PeNtavalent → N-type” (the N in peNtavalent flags N-type).',
          '“Trivalent gives a hole because it’s one bond short.”',
          '<b>Fermi follows the majority:</b> electrons up high (n-type, near CB), holes down low (p-type, near VB).',
        ],
      },
    ],
  },
];
