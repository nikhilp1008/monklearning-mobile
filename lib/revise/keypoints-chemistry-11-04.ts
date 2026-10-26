/**
 * KEY POINTS for Chemistry Class 11, Chapter 4 (Chemical Bonding and
 * Molecular Structure).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic (Topics 01 and 02 have one each).
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–E are 4–8; Additional
 * topic F, What JEE and NEET Actually Ask (the book's Addendum P), is 9.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key parameters and definitions and Cheat sheet.
 * Common mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip.
 * `say`: the cheat sheet's mnemonics, word for word (quotation marks and
 * labels dropped). Additional topics: the addenda's methods, worked examples
 * and the "Answers to Practice (Addenda A–E)", each with its own addendum.
 * Additional topic F: its distribution, archetypes and traps. Topic 04's
 * Drago's-rule electronegativity cut-off (printed "≲ 1.3", now "≲ 2.5" in the
 * topic after the expert review) is not used.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Element
 * symbols, formulas and ions are upright (NH<sub>4</sub><sup>+</sup>,
 * O<sub>2</sub><sup>2−</sup>); so are generic stand-in element letters (X–Y),
 * by Nikhil's decision (upright everywhere in the chapter). Maths italic:
 * <i>V</i>, <i>L</i>, <i>B</i>, <i>μ</i>, <i>q</i>, <i>d</i>, <i>e</i>,
 * <i>θ</i>, <i>H</i>, <i>M</i>, <i>C</i>, <i>A</i>, <i>N</i><sub>b</sub>,
 * <i>N</i><sub>a</sub> (label subscripts upright). Orbital, hybrid and MO
 * labels upright, as in NCERT: 2p, sp<sup>3</sup>d<sup>2</sup>, σ2p<sub><i>z</i></sub>,
 * π*2p<sub><i>x</i></sub>, p<sub><i>z</i></sub>; σ and π bonds upright
 * (1σ + 2π, pπ–dπ). Bond labels 2c–2e and 3c–2e as printed.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Kossel–Lewis Approach, Ionic & Covalent Bonds, and Dipole Moment ──
  // pp. 165–167, 172
  {
    topic: 0,
    kind: 'remember',
    q: 'Formal charge: the formula, the built-in check, and how it picks the best Lewis structure?',
    a: 'FC = <i>V</i> − <i>L</i> − ½<i>B</i> (valence electrons of the free atom, lone-pair electrons, bonding electrons). The formal charges sum to the species’ charge; the best structure has charges nearest zero, with any negative charge on the most electronegative atom',
    why: 'O<sub>3</sub> (18 valence electrons): central O 6 − 2 − 3 = +1, double-bonded O 6 − 4 − 2 = 0, single-bonded O 6 − 6 − 1 = −1; sum 0.',
    say: null,
  },
  // pp. 165–166, 169, 172–173
  {
    topic: 0,
    kind: 'remember',
    q: 'Dipole moment and percentage ionic character?',
    a: '<i>μ</i> = <i>q</i> × <i>d</i>, a vector pointing from + to −; 1 D = 3.336 × 10<sup>−30</sup> C m. % ionic character = <i>μ</i><sub>observed</sub>/<i>μ</i><sub>ionic</sub> × 100, with <i>μ</i><sub>ionic</sub> = <i>e</i> × <i>d</i> (<i>e</i> = 1.6 × 10<sup>−19</sup> C)',
    why: 'X–Y, 130 pm, 1.10 D: <i>μ</i><sub>ionic</sub> = (1.6 × 10<sup>−19</sup>)(130 × 10<sup>−12</sup>) = 2.08 × 10<sup>−29</sup> C m ≈ 6.24 D, so 1.10/6.24 ≈ 17.6% ionic.',
    say: null,
  },
  // pp. 165, 167, 169, 172
  {
    topic: 0,
    kind: 'mixup',
    q: 'Polar bonds or polar molecule: what decides whether <i>μ</i> = 0?',
    a: 'The vector sum of the bond dipoles, not the bonds themselves: in symmetric CCl<sub>4</sub> (tetrahedral), BF<sub>3</sub> (trigonal planar) and CO<sub>2</sub> (linear) they cancel to <i>μ</i> = 0. Replace one Cl of CCl<sub>4</sub> by H and the symmetry breaks: CHCl<sub>3</sub> is polar',
    why: 'NH<sub>3</sub> (1.47 D) and NF<sub>3</sub> (0.23 D) are both pyramidal: in NH<sub>3</sub> the lone-pair dipole adds to the N–H resultant; in NF<sub>3</sub> the N–F dipoles point away from N and largely cancel it.',
    say: null,
  },
  // pp. 171–173
  {
    topic: 0,
    kind: 'mistake',
    q: 'Fajans’ rules: does a large cation with a small anion give the most covalent character?',
    a: 'No, the reverse: a small, highly charged cation polarises a large, easily deformed anion and drags electron density into the bonding region. Small cation, large anion, high charge and a pseudo-noble-gas (<i>n</i> − 1)d<sup>10</sup><i>n</i>s<sup>0</sup> cation all mean more covalent character',
    why: 'Increasing covalent character: KCl < NaCl < MgCl<sub>2</sub> < AlCl<sub>3</sub>.',
    say: 'SHaPe: Small cation, High charge, Pseudo-noble-gas config ⇒ covalent character.',
  },
  // pp. 169, 171–172
  {
    topic: 0,
    kind: 'shortcut',
    q: 'H–Br is 141 pm long with <i>μ</i> = 0.79 D. Its percentage ionic character? The fast way?',
    a: 'Use the yardstick <i>e</i> × (100 pm) ≈ 4.8 D and scale linearly with bond length: 4.8 × 1.41 ≈ 6.77 D, so 0.79/6.77 ≈ 11.7% ionic',
    why: 'The observed moment must be smaller than the fully ionic one; a ratio above 100% means a power of ten slipped in the bond length. For polarity alone, never calculate: sketch the shape and look for a centre of symmetry.',
    say: null,
  },

  // ── Topic 02 · VSEPR Theory, Valence Bond Theory & Hybridization ──
  // pp. 175, 178–179, 182
  {
    topic: 1,
    kind: 'remember',
    q: 'Steric number, hybridisation, electron-pair geometry and ideal angle?',
    a: 'SN = σ-bonded atoms + lone pairs on the central atom. SN 2, 3, 4, 5, 6 → sp, sp<sup>2</sup>, sp<sup>3</sup>, sp<sup>3</sup>d, sp<sup>3</sup>d<sup>2</sup> → linear (180°), trigonal planar (120°), tetrahedral (109.5°), trigonal bipyramidal (90°, 120°), octahedral (90°). Shortcut: <i>H</i> = ½[<i>V</i> + <i>M</i> − <i>C</i> + <i>A</i>]',
    why: '<i>V</i>: valence electrons of the central atom; <i>M</i>: monovalent atoms attached; <i>C</i>, <i>A</i>: cationic and anionic charge. XeF<sub>2</sub>: ½[8 + 2] = 5, sp<sup>3</sup>d; SF<sub>4</sub>: ½[6 + 4] = 5, sp<sup>3</sup>d.',
    say: 'Some People Sit Properly During Prayer: sp → linear, sp<sup>2</sup> → trigonal Planar, sp<sup>3</sup> → tetrahedral, sp<sup>3</sup>d → trigonal bipyramidal, sp<sup>3</sup>d<sup>2</sup> → octahedral.',
  },
  // pp. 176, 179–182
  {
    topic: 1,
    kind: 'remember',
    q: 'The shapes of AB<sub>3</sub>E, AB<sub>2</sub>E<sub>2</sub>, AB<sub>4</sub>E, AB<sub>3</sub>E<sub>2</sub>, AB<sub>2</sub>E<sub>3</sub> and AB<sub>4</sub>E<sub>2</sub>?',
    a: 'Pyramidal (NH<sub>3</sub>, 107°), bent (H<sub>2</sub>O, 104.5°), see-saw (SF<sub>4</sub>), T-shaped (ClF<sub>3</sub>), linear (XeF<sub>2</sub>), square planar (XeF<sub>4</sub>). Repulsion runs lp–lp > lp–bp > bp–bp',
    why: 'In a trigonal bipyramid lone pairs go equatorial (two neighbours at 90° there, three if axial); in an octahedron two lone pairs sit trans. SF<sub>4</sub>’s axial F–S–F bends away from the lone pair to about 173°.',
    say: null,
  },
  // pp. 178, 181, 210
  {
    topic: 1,
    kind: 'mixup',
    q: 'Is H<sub>2</sub>O tetrahedral or bent?',
    a: 'Both, describing different things: its electron-pair geometry (all four pairs) is tetrahedral; its molecular shape (the atoms only) is bent. Likewise XeF<sub>4</sub> is octahedral in electron geometry, square planar in shape',
    why: 'Shape and hybridisation come from different counts: XeF<sub>2</sub> is linear, yet sp<sup>3</sup>d, not sp, because its three lone pairs need hybrid orbitals too.',
    say: null,
  },
  // pp. 179, 181
  {
    topic: 1,
    kind: 'mistake',
    q: 'H<sub>2</sub>O, H<sub>2</sub>S and H<sub>2</sub>Se all have SN = 4. Do they share one bond angle?',
    a: 'No: 104.5° > ~92° > ~91°. The steric number sets only the ideal angle. Down the group the central atom is less electronegative, so the bonding pairs drift outward and repel less, and its bonds carry less s-character; the angle collapses toward 90°',
    why: 'Lone pairs shrink angles too: CH<sub>4</sub> (109.5°) > NH<sub>3</sub> (107°) > H<sub>2</sub>O (104.5°).',
    say: null,
  },
  // pp. 175, 177–179, 182
  {
    topic: 1,
    kind: 'shortcut',
    q: 'The hybridisation of xenon in XeF<sub>4</sub>, and the fast way to compare bond angles?',
    a: 'Count the atoms bonded to the centre and add the lone pairs: 4 + 2 = 6, so sp<sup>3</sup>d<sup>2</sup> with octahedral electron geometry. For angles remember the two shrinking forces: more lone pairs, and a less electronegative central atom',
    why: 'Single bond 1σ, double 1σ + 1π, triple 1σ + 2π. More s-character (sp 50% > sp<sup>2</sup> 33% > sp<sup>3</sup> 25%) means a larger angle and a shorter, stronger bond: C–C runs 154 → 134 → ~120 pm.',
    say: null,
  },

  // ── Topic 03 · Molecular Orbital Theory (MOT) & Hydrogen Bonding ──
  // pp. 184, 186, 189–190
  {
    topic: 2,
    kind: 'remember',
    q: 'MO bond order, and the two energy orderings of the second-period diatomics?',
    a: 'Bond order = ½(<i>N</i><sub>b</sub> − <i>N</i><sub>a</sub>): > 0 exists, 0 does not; higher means shorter and stronger. Up to N<sub>2</sub> (≤ 14 electrons) … σ*2s < (π2p<sub><i>x</i></sub> = π2p<sub><i>y</i></sub>) < σ2p<sub><i>z</i></sub> < (π*2p<sub><i>x</i></sub> = π*2p<sub><i>y</i></sub>) < σ*2p<sub><i>z</i></sub>; for O<sub>2</sub> and F<sub>2</sub>, σ2p<sub><i>z</i></sub> drops below the π pair',
    why: 'O<sub>2</sub> (16 electrons): <i>N</i><sub>b</sub> = 10, <i>N</i><sub>a</sub> = 6, bond order 2, with two unpaired π* electrons: paramagnetic, the result VBT could not explain.',
    say: null,
  },
  // pp. 185, 187, 190
  {
    topic: 2,
    kind: 'remember',
    q: 'The bond orders, and magnetism, of H<sub>2</sub> to F<sub>2</sub>?',
    a: 'H<sub>2</sub> 1, He<sub>2</sub> 0 (does not exist), Li<sub>2</sub> 1, Be<sub>2</sub> 0, B<sub>2</sub> 1 (paramagnetic: two electrons singly in the π pair), C<sub>2</sub> 2 (diamagnetic), N<sub>2</sub> 3 (diamagnetic), O<sub>2</sub> 2 (paramagnetic), F<sub>2</sub> 1',
    why: 'He<sub>2</sub><sup>+</sup> exists, weakly: ½(2 − 1) = 0.5. C<sub>2</sub>’s double bond is two π bonds with σ2p<sub><i>z</i></sub> empty: ½(8 − 4) = 2.',
    say: null,
  },
  // pp. 185–188, 190
  {
    topic: 2,
    kind: 'mixup',
    q: 'Intermolecular or intramolecular hydrogen bonding: which raises the boiling point?',
    a: 'Intermolecular H-bonds link molecules and raise boiling point and solubility. An intramolecular H-bond ties a molecule into itself and lowers them, compared with an isomer that can bond only between molecules',
    why: 'ortho-Nitrophenol (intramolecular, m.p. 45 °C) is steam-volatile; para-nitrophenol (intermolecular, m.p. 114 °C) is not.',
    say: 'H-bond donors are FON: only F, O, N bonded to H qualify.',
  },
  // pp. 185–186, 189
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does removing an electron always weaken a bond?',
    a: 'No: if it leaves an antibonding orbital, <i>N</i><sub>a</sub> drops and the bond order rises. NO (15 electrons, bond order 2.5, paramagnetic) → NO<sup>+</sup> (14, 3, diamagnetic): stronger and shorter',
    why: 'The same holds for O<sub>2</sub> → O<sub>2</sub><sup>+</sup>; always ask which orbital lost the electron. And keep the ½: a bond order of “6” for N<sub>2</sub> is the tell-tale slip.',
    say: null,
  },
  // pp. 186–187, 189–190
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Bond orders of O<sub>2</sub><sup>+</sup>, O<sub>2</sub>, O<sub>2</sub><sup>−</sup> and O<sub>2</sub><sup>2−</sup>? The fast way?',
    a: 'Start from O<sub>2</sub> (2) and adjust: each electron added goes into π* and drops the bond order by 0.5; each removed comes from π* and raises it by 0.5. So 2.5, 2, 1.5, 1, and bond length runs the other way: O<sub>2</sub><sup>+</sup> < O<sub>2</sub> < O<sub>2</sub><sup>−</sup> < O<sub>2</sub><sup>2−</sup>',
    why: 'For hydrogen bonding the first reflex is “is there an N–H, O–H or F–H?”: no donor, no hydrogen bond. Hence boiling points H<sub>2</sub>O ≫ H<sub>2</sub>Se > H<sub>2</sub>S.',
    say: 'For the O<sub>2</sub> family: add to π*, drop by half; remove from π*, gain a half.',
  },

  // ── Topic 04 · Coordinate Bonding, Back Bonding & Advanced Bond-Angle Concepts ──
  // pp. 191–192, 194, 197–198
  {
    topic: 3,
    kind: 'remember',
    q: 'A coordinate bond: what is it, and does it stay different once formed?',
    a: 'Both shared electrons come from one atom: a donor’s lone pair (Lewis base) into an acceptor’s vacant orbital (Lewis acid), drawn as an arrow from donor to acceptor. Once formed it is identical to an ordinary covalent bond: NH<sub>4</sub><sup>+</sup> has four equivalent N–H bonds, tetrahedral',
    why: 'Examples: NH<sub>4</sub><sup>+</sup>, H<sub>3</sub>O<sup>+</sup>, O<sub>3</sub>, CO, H<sub>3</sub>N → BF<sub>3</sub>, and the two bridging Cl → Al bonds that dimerise AlCl<sub>3</sub> to Al<sub>2</sub>Cl<sub>6</sub>.',
    say: null,
  },
  // pp. 193–194, 196–198
  {
    topic: 3,
    kind: 'remember',
    q: 'Diborane: why is it electron-deficient, and how is it bonded?',
    a: 'B<sub>2</sub>H<sub>6</sub> has 2(3) + 6(1) = 12 valence electrons; seven ordinary bonds would need 14. Four terminal B–H bonds are 2c–2e (8 electrons, ≈ 119 pm); two bridging B–H–B bonds are 3c–2e “banana” bonds (4 electrons, B–H ≈ 133 pm). Each B is sp<sup>3</sup>',
    why: 'The four terminal H and both B lie in one plane, the bridging H above and below it. There are only two 3c–2e bonds: miscounting bridge and terminal bonds is the classic slip.',
    say: null,
  },
  // pp. 192–193, 196–198
  {
    topic: 3,
    kind: 'mixup',
    q: 'NH<sub>3</sub> 107° but NF<sub>3</sub> 102°; NH<sub>3</sub> 107° but PH<sub>3</sub> 93.5°. Which rule explains each?',
    a: 'Same central atom, different substituent: Bent’s rule. Electronegative F draws p-character into the N–F bonds, which close up. Same substituent, heavier central atom: Drago’s rule. Large, weakly electronegative P barely hybridises and bonds with nearly pure p orbitals, near 90°',
    why: 'Bent’s rule again: PF<sub>3</sub> (≈ 97°) < PCl<sub>3</sub> (≈ 100°) < PBr<sub>3</sub> (≈ 101°), as the halogen grows less electronegative.',
    say: 'Bent → eNegative gets P (electronegative substituents get p-character, smaller angle).',
  },
  // pp. 191–192, 197–198
  {
    topic: 3,
    kind: 'mistake',
    q: 'PH<sub>3</sub>, H<sub>2</sub>S and AsH<sub>3</sub> are like NH<sub>3</sub> and H<sub>2</sub>O. Are their angles near 107° and 104.5°?',
    a: 'No: by Drago’s rule, in hydrides of the heavier p-block elements (period 3 and below), with a large, weakly electronegative central atom, effective hybridisation does not occur; nearly pure p orbitals pin the angles near 90°: PH<sub>3</sub> 93.5°, H<sub>2</sub>S 92°, AsH<sub>3</sub> 91.8°',
    why: 'So H<sub>2</sub>S (≈ 92°) sits far below H<sub>2</sub>O (104.5°): oxygen hybridises (sp<sup>3</sup>) and stays near tetrahedral.',
    say: 'Drago → Down the group Drops to 90°.',
  },
  // pp. 191–192, 194–198
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Order BF<sub>3</sub>, BCl<sub>3</sub>, BBr<sub>3</sub>, BI<sub>3</sub> by Lewis acid strength. The fast way?',
    a: 'Ask “is back bonding possible?”, a lone pair beside an empty orbital. F(2p) → B(2p) pπ–pπ back donation is strongest in BF<sub>3</sub> and satisfies boron’s empty orbital, so BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub>, the reverse of what electronegativity predicts',
    why: 'The same reflex explains planar N(SiH<sub>3</sub>)<sub>3</sub> (N 2p → Si 3d, pπ–dπ, N sp<sup>2</sup>) against pyramidal N(CH<sub>3</sub>)<sub>3</sub>, and the S=O π bonds of SO<sub>4</sub><sup>2−</sup> (O 2p → S 3d).',
    say: null,
  },

  // ── Additional A · The Electron-Count Lens: Bond Order, Length, Energy and Magnetism Without the Full Diagram ──
  // pp. 199–200
  {
    topic: 4,
    kind: 'remember',
    q: 'Bond order and magnetism of a diatomic species from its electron count alone?',
    a: 'Total electrons → anchor: 10 (B<sub>2</sub>) BO 1, two unpaired; 12 (C<sub>2</sub>) 2, diamagnetic; 13 (N<sub>2</sub><sup>+</sup>, CN) 2.5, one; 14 (N<sub>2</sub>, CO, CN<sup>−</sup>, NO<sup>+</sup>, C<sub>2</sub><sup>2−</sup>) 3, diamagnetic; 15 (NO, N<sub>2</sub><sup>−</sup>, O<sub>2</sub><sup>+</sup>) 2.5, one; 16 (O<sub>2</sub>, NO<sup>−</sup>) 2, two; 17 (O<sub>2</sub><sup>−</sup>) 1.5, one; 18 (O<sub>2</sub><sup>2−</sup>, F<sub>2</sub>) 1, diamagnetic',
    why: 'Isoelectronic species share bond order. NO<sup>+</sup>, NO and NO<sup>−</sup> have 14, 15 and 16 electrons, BO 3, 2.5 and 2, so bond length NO<sup>+</sup> < NO < NO<sup>−</sup>.',
    say: null,
  },
  // pp. 200–201, 208
  {
    topic: 4,
    kind: 'remember',
    q: 'Bond orders come out the same in either MO ordering. Where does the choice still matter?',
    a: 'In the magnetism of the light diatomics (14 electrons or fewer): C<sub>2</sub> fills π2p completely and is diamagnetic, while the O<sub>2</sub> ordering would wrongly give two unpaired electrons. Never export the O<sub>2</sub> ordering to anything with 14 or fewer electrons',
    why: 'HOMO of N<sub>2</sub>: σ2p<sub><i>z</i></sub>, 2 electrons. HOMO of O<sub>2</sub>: the degenerate π*2p<sub><i>x</i></sub>, π*2p<sub><i>y</i></sub> pair, 2 electrons, one in each.',
    say: null,
  },

  // ── Additional B · Counting Exercises: Sigma/Pi Bonds, Lone Pairs, Coordinate Bonds, Covalency ──
  // pp. 202–203, 208
  {
    topic: 5,
    kind: 'remember',
    q: 'σ and π bonds in hex-1-en-4-yne, CH<sub>2</sub>=CH–CH<sub>2</sub>–C≡C–CH<sub>3</sub>?',
    a: 'Every link between two atoms is one σ; a double bond adds one π, a triple two. C–C σ: 5; C–H σ: 2 + 1 + 2 + 0 + 0 + 3 = 8; π: 1 + 2 = 3. Total 13 σ, 3 π',
    why: 'Hex-1,3-dien-5-yne (CH<sub>2</sub>=CH–CH=CH–C≡CH) gives 11 σ, 4 π. A resonance hybrid is counted from one Lewis form: CO<sub>3</sub><sup>2−</sup> has 3 σ, 1 π.',
    say: null,
  },
  // pp. 203–204
  {
    topic: 5,
    kind: 'remember',
    q: 'Lone pairs on the central atoms of XeF<sub>3</sub><sup>+</sup>, SF<sub>3</sub><sup>+</sup>, CF<sub>3</sub><sup>+</sup> and I<sub>3</sub><sup>−</sup>?',
    a: 'Lone pairs = <i>H</i> − (σ bonds), with <i>H</i> = ½[<i>V</i> + <i>M</i> − <i>C</i> + <i>A</i>]: XeF<sub>3</sub><sup>+</sup> ½(8 + 3 − 1) = 5, so 2; SF<sub>3</sub><sup>+</sup> 4, so 1; CF<sub>3</sub><sup>+</sup> 3, so 0; I<sub>3</sub><sup>−</sup> ½(7 + 2 + 1) = 5, so 3. Sum 6',
    why: 'Shapes: T-shaped, pyramidal, trigonal planar, linear. Covalency is a count, oxidation state a charge: B in BF<sub>4</sub><sup>−</sup> has covalency 4 and oxidation state +3, sum 7.',
    say: null,
  },

  // ── Additional C · Dipole Moment as a Vector ──
  // pp. 204–205
  {
    topic: 6,
    kind: 'remember',
    q: 'The resultant of two bond dipoles, and the dipole moment of water?',
    a: '<i>μ</i><sub>R</sub> = √(<i>μ</i><sub>1</sub><sup>2</sup> + <i>μ</i><sub>2</sub><sup>2</sup> + 2<i>μ</i><sub>1</sub><i>μ</i><sub>2</sub> cos <i>θ</i>); for two equal dipoles <i>μ</i><sub>R</sub> = 2<i>μ</i><sub>b</sub> cos(<i>θ</i>/2). Water: 2(1.51) cos 52.25° = 2(1.51)(0.612) ≈ 1.85 D',
    why: 'Sum vectors, never count polar bonds: CH<sub>2</sub>Cl<sub>2</sub> (1.60 D) exceeds CHCl<sub>3</sub> (1.04 D), and CCl<sub>4</sub> is zero.',
    say: null,
  },
  // pp. 205, 208
  {
    topic: 6,
    kind: 'remember',
    q: 'With identical terminal atoms, which VSEPR shapes are non-polar?',
    a: 'Those where every bond dipole has an equal and opposite partner: linear (CO<sub>2</sub>, XeF<sub>2</sub>), trigonal planar (BF<sub>3</sub>), tetrahedral (CCl<sub>4</sub>), trigonal bipyramidal (PCl<sub>5</sub>), octahedral (SF<sub>6</sub>), square planar (XeF<sub>4</sub>). Bent, pyramidal, see-saw, T-shaped and square pyramidal shapes are polar',
    why: 'So of AsF<sub>5</sub>, XeF<sub>4</sub>, SF<sub>4</sub>, BrF<sub>5</sub>, PCl<sub>5</sub> and ClF<sub>3</sub>, only AsF<sub>5</sub>, XeF<sub>4</sub> and PCl<sub>5</sub> have zero dipole moment.',
    say: null,
  },

  // ── Additional D · Resonance Decides Bond Lengths: Ranking Real Bonds ──
  // pp. 206–208, 211
  {
    topic: 7,
    kind: 'remember',
    q: 'The C–O bond orders and lengths in CO<sub>3</sub><sup>2−</sup> and in HCO<sub>3</sub><sup>−</sup>?',
    a: 'CO<sub>3</sub><sup>2−</sup>: the double bond is shared over three positions, BO 4/3 each, all three equal. HCO<sub>3</sub><sup>−</sup>: the proton pins C–OH as a single bond (BO 1, longest); the other two share the double bond (BO 1.5 each, equal and shorter)',
    why: 'Measured: C–OH 136 pm, the other two about 126 pm. HNO<sub>3</sub> follows the same “one pinned, two shared” pattern; acetate’s two C–O bonds are both BO 1.5, equal.',
    say: null,
  },
  // pp. 206–208
  {
    topic: 7,
    kind: 'remember',
    q: 'N<sub>2</sub>O: which resonance form dominates, and which bond is shorter?',
    a: 'N≡N<sup>+</sup>–O<sup>−</sup> (formal charges 0, +1, −1) beats N<sup>−</sup>=N<sup>+</sup>=O (−1, +1, 0): negative formal charge prefers the more electronegative oxygen. So N–N (≈ 112 pm, near N≡N at 109 pm) is shorter than N–O (≈ 119 pm)',
    why: 'The central atom is N, never O: a central O would force greater formal-charge separation and put the negative charge on N.',
    say: null,
  },

  // ── Additional E · Which Atomic Orbitals May Combine; the F–F Bond-Enthalpy Anomaly ──
  // pp. 207–209
  {
    topic: 8,
    kind: 'remember',
    q: 'With the internuclear axis along <i>z</i>, which atomic orbital pairs may combine into MOs?',
    a: 's + s, s + p<sub><i>z</i></sub> and p<sub><i>z</i></sub> + p<sub><i>z</i></sub> give σ; p<sub><i>x</i></sub> + p<sub><i>x</i></sub> and p<sub><i>y</i></sub> + p<sub><i>y</i></sub> give π. s + p<sub><i>x</i></sub>, p<sub><i>z</i></sub> + p<sub><i>x</i></sub> and p<sub><i>x</i></sub> + p<sub><i>y</i></sub> cannot: opposite symmetry about the axis makes the net overlap zero',
    why: 'The conditions: comparable energy, appreciable overlap, the same symmetry about the axis. With the axis along <i>x</i> instead, p<sub><i>x</i></sub> + p<sub><i>x</i></sub> and s + p<sub><i>x</i></sub> give σ, p<sub><i>y</i></sub> + p<sub><i>y</i></sub> gives π, s + p<sub><i>y</i></sub> is forbidden.',
    say: null,
  },
  // pp. 208–209
  {
    topic: 8,
    kind: 'remember',
    q: 'The F–F bond (144 pm) is shorter than Cl–Cl (199 pm). Is it the stronger bond?',
    a: 'No: Cl<sub>2</sub> 242 kJ mol<sup>−1</sup> against F<sub>2</sub> ≈ 159 kJ mol<sup>−1</sup>. Fluorine is so small that the three lone pairs on each atom crowd one another across the short bond, and their repulsion weakens it',
    why: '“Shorter bond ⇒ stronger bond” is safe only within one family of bonds, not across bonds between different atoms; the same caution applies to O–O against S–S.',
    say: null,
  },

  // ── Additional F · What JEE and NEET Actually Ask ──
  // p. 209
  {
    topic: 9,
    kind: 'remember',
    q: 'Where does the weight of this chapter’s exam questions fall?',
    a: 'MOT (bond order, magnetism, HOMO/LUMO, electron-count species) ~30%; VSEPR, hybridisation and bond angles ~25%; Fajans, formal charge, covalency, diborane and H-bonding ~22%; dipole moment and polarity ~15%; σ/π and lone-pair counting ~8%',
    why: 'MOT questions now compress to an electron count plus one output; hybridisation questions arrive as match-the-column items mixing in complex ions.',
    say: null,
  },
  // pp. 210–212
  {
    topic: 9,
    kind: 'mistake',
    q: 'C<sub>2</sub>’s highest electrons occupy a degenerate π pair. Must it be paramagnetic?',
    a: 'No: degeneracy alone does not create unpaired electrons; filling does. C<sub>2</sub> (12 electrons) fills π2p completely (π2p<sup>4</sup>) and is diamagnetic. B<sub>2</sub> (10 electrons, π2p<sup>2</sup>) is the paramagnetic one',
    why: 'Two more traps: removing a π* electron strengthens the bond (O<sub>2</sub><sup>+</sup>, NO<sup>+</sup>); XeF<sub>4</sub> is octahedral in electron geometry, square planar in shape.',
    say: null,
  },
];
