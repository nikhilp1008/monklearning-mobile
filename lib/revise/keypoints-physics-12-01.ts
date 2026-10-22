/**
 * KEY POINTS for Physics Class 12, Chapter 1 (Electric Charges and Fields).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aids, word for word. Additional topics: the Supplement's
 * addenda.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Subscripts
 * that are words or labels stay upright (<i>F</i><sub>med</sub>,
 * <i>Q</i><sub>enc</sub>, <i>E</i><sub>axial</sub>, ε<sub>0</sub>); vectors
 * keep their arrows (<i>E⃗</i>, <i>p⃗</i>, <i>r̂</i>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Electric Charge: Properties, Quantisation & Charging ──
  // pp. 9–10, 12, 14
  {
    topic: 0,
    kind: 'remember',
    q: 'What values can the charge on a body take?',
    a: '<i>q</i> = <i>ne</i>, with <i>n</i> = 0, ±1, ±2, … and <i>e</i> = 1.6 × 10<sup>−19</sup> C: only whole-number multiples of the elementary charge',
    why: 'Quantisation holds for every free charge, at every scale (quarks carry ±<i>e</i>/3 or ±2<i>e</i>/3 but are never found free), but even 1 μC is about 6 × 10<sup>12</sup> electrons, so everyday charge looks continuous.',
    say: 'Divide by <i>e</i> — must be a whole number.',
  },
  // pp. 10, 12–14
  {
    topic: 0,
    kind: 'remember',
    q: 'What does conservation of charge say, and does pair production break it?',
    a: 'The net charge of an isolated system is constant: charge is only transferred, or created and destroyed in equal-and-opposite pairs',
    why: 'In <i>γ</i> → <i>e</i><sup>−</sup> + <i>e</i><sup>+</sup>, a photon with zero charge gives −<i>e</i> and +<i>e</i>: the total is still zero.',
    say: 'Charge moves, never made.',
  },
  // pp. 10–11, 14
  {
    topic: 0,
    kind: 'mixup',
    q: 'Charging by conduction and charging by induction: what sign does the body get, and does the rod lose charge?',
    a: 'Conduction: contact, the same sign as the rod, and the rod loses some charge. Induction: no contact, the opposite sign, and the rod keeps its charge',
    why: 'In induction, earth the conductor while the rod is near, remove the earthing first, then remove the rod.',
    say: 'Induction: no touch, opposite charge, rod unharmed.',
  },
  // pp. 12, 14
  {
    topic: 0,
    kind: 'mistake',
    q: 'A charged body attracts a small light body. Must the light body be charged?',
    a: 'No: a charged object also attracts a neutral conductor, by induction. Only repulsion proves a body is charged',
    why: 'Attraction tells you only that the body is either oppositely charged or neutral.',
    say: 'Repulsion is the only sure test of charge.',
  },
  // pp. 11, 14
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Identical conducting spheres touch and separate. The fast way to the final charges?',
    a: 'Two spheres: each gets the algebraic average (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2. <i>N</i> identical spheres in mutual contact at once: each gets (total charge)/<i>N</i>',
    why: 'Keep the signs: +<i>q</i> and −3<i>q</i> leave −<i>q</i> on each. Always finish with a conservation check: total before must equal total after.',
    say: null,
  },

  // ── Topic 02 · Coulomb’s Law and Electric Forces ──
  // pp. 16, 26
  {
    topic: 1,
    kind: 'remember',
    q: 'Coulomb’s law for the force between two charges, and when does it apply?',
    a: '<i>F</i> = (1/(4πε<sub>0</sub>))|<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup> = <i>k</i>|<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup>, with <i>k</i> ≈ 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>',
    why: 'Only for point charges at rest, in vacuum or air. It is a central, inverse-square force that obeys Newton’s third law.',
    say: 'Product up, distance squared down.',
  },
  // pp. 16–18, 26
  {
    topic: 1,
    kind: 'remember',
    q: 'The vector form of Coulomb’s law: which way does <i>r̂</i><sub>21</sub> point, and how are the signs handled?',
    a: '<i>F⃗</i><sub>21</sub> = (1/(4πε<sub>0</sub>))(<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>)<i>r̂</i><sub>21</sub>, with <i>r̂</i><sub>21</sub> pointing from <i>q</i><sub>1</sub> towards <i>q</i><sub>2</sub>. Put the charges in with their signs',
    why: 'Like charges give a force along <i>r̂</i><sub>21</sub> (repulsion), unlike charges opposite to it (attraction). And <i>F⃗</i><sub>12</sub> = −<i>F⃗</i><sub>21</sub>, however unequal the charges.',
    say: null,
  },
  // pp. 16, 20, 25–26
  {
    topic: 1,
    kind: 'mixup',
    q: 'Two charges move from vacuum into a medium of dielectric constant <i>K</i>. By what factor does the force change, and how must the distance change to restore it?',
    a: 'The force divides by <i>K</i>: <i>F</i><sub>med</sub> = <i>F</i><sub>vac</sub>/<i>K</i>. The distance to restore it divides by √<i>K</i>: <i>r</i>′ = <i>r</i>/√<i>K</i>',
    why: 'Distance enters as <i>r</i><sup>2</sup>: in kerosene (<i>K</i> = 4) the charges must be brought to <i>r</i>/2, not <i>r</i>/4.',
    say: 'Medium divides by <i>K</i>, distance divides by root-<i>K</i>.',
  },
  // pp. 20–21, 25
  {
    topic: 1,
    kind: 'mistake',
    q: 'Three equal charges sit at the corners of an equilateral triangle, each pair exerting a force <i>F</i>. Is the net force on one charge 2<i>F</i>?',
    a: 'No: √3<i>F</i>, directed away from the centroid. The two forces are 60° apart and must be added as vectors',
    why: 'Adding the magnitudes directly is one of the most common JEE Main errors.',
    say: 'Forces are vectors — never just add the numbers.',
  },
  // pp. 21–23, 25
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A problem with several charges. How do you cut the arithmetic?',
    a: 'Write every force as a multiple of one reference force <i>F</i><sub>0</sub> = <i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup>, add the geometry, and substitute numbers only at the very end',
    why: 'Then run a limiting check: a rod of charge <i>Q</i> acts on a charge <i>q</i> on its axis with <i>F</i> = <i>kqQ</i>/(<i>d</i>(<i>d</i> + <i>L</i>)), which must collapse to <i>kqQ</i>/<i>d</i><sup>2</sup> as <i>L</i> → 0.',
    say: null,
  },

  // ── Topic 03 · Electric Field and Dipoles ──
  // pp. 28, 37
  {
    topic: 2,
    kind: 'remember',
    q: 'The fields of a short dipole far away on its axial line and on its equatorial line?',
    a: 'Axial: <i>E</i> = (1/(4πε<sub>0</sub>))(2<i>p</i>/<i>r</i><sup>3</sup>), along <i>p⃗</i>. Equatorial: <i>E</i> = (1/(4πε<sub>0</sub>))(<i>p</i>/<i>r</i><sup>3</sup>), opposite to <i>p⃗</i>',
    why: 'Valid for <i>r</i> ≫ <i>a</i>, with <i>p</i> = <i>q</i> · 2<i>a</i> pointing from −<i>q</i> to +<i>q</i>. At the same large distance, <i>E</i><sub>axial</sub> = 2<i>E</i><sub>eq</sub>.',
    say: 'Axial is twice equatorial, and they point opposite ways.',
  },
  // pp. 29, 35, 37
  {
    topic: 2,
    kind: 'remember',
    q: 'A dipole in a uniform field: its torque, its potential energy, and its stable position?',
    a: '<i>τ⃗</i> = <i>p⃗</i> × <i>E⃗</i>, <i>τ</i> = <i>pE</i> sin <i>θ</i>; <i>U</i> = −<i>p⃗</i> · <i>E⃗</i> = −<i>pE</i> cos <i>θ</i>. Stable at <i>θ</i> = 0, where <i>U</i><sub>min</sub> = −<i>pE</i>',
    why: 'The work to rotate it from <i>θ</i><sub>1</sub> to <i>θ</i><sub>2</sub> is <i>W</i> = <i>pE</i>(cos <i>θ</i><sub>1</sub> − cos <i>θ</i><sub>2</sub>): 2<i>pE</i> to turn it through 180° from stable.',
    say: 'Uniform field: only twist, no push.',
  },
  // pp. 36–37
  {
    topic: 2,
    kind: 'mixup',
    q: 'How do the field of a point charge and the far field of a dipole fall off with distance?',
    a: 'Point charge: as 1/<i>r</i><sup>2</sup>. Dipole: as 1/<i>r</i><sup>3</sup>, faster',
    why: 'A dipole’s opposite charges nearly cancel at a distance. Mixing these up is the single most common dipole error.',
    say: 'Dipole dies as 1/<i>r</i><sup>3</sup> — opposites cancel.',
  },
  // pp. 28–29, 37
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the net force on a dipole always zero?',
    a: 'Only in a uniform field. In a non-uniform field a net force survives, <i>F</i> = <i>p</i>(d<i>E</i>/d<i>r</i>), towards the stronger field when <i>p⃗</i> ∥ <i>E⃗</i>',
    why: 'The two ends sit in slightly different fields. This is how a charged comb attracts neutral (but polarisable) bits of paper.',
    say: null,
  },
  // p. 37
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A field from a symmetric distribution, or from a dipole far away. The fast way?',
    a: 'First ask which components cancel by symmetry: on a ring’s axis only the axial components survive. For a dipole at <i>r</i> ≫ <i>a</i>, use the compact <i>kp</i>/<i>r</i><sup>3</sup> forms, not the full two-charge expression',
    why: 'Spotting the cancellation is worth more marks than the calculus.',
    say: null,
  },

  // ── Topic 04 · Continuous Charge Distribution ──
  // pp. 40, 45, 47
  {
    topic: 3,
    kind: 'remember',
    q: 'The field on the axis of a uniformly charged ring, and where is it largest?',
    a: '<i>E</i> = <i>kQx</i>/(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup> at distance <i>x</i> on the axis: zero at the centre, maximum at <i>x</i> = <i>R</i>/√2',
    why: 'Only the axial parts of the elements’ fields survive. The maximum is <i>E</i><sub>max</sub> = 2<i>Q</i>/(3√3 · 4πε<sub>0</sub><i>R</i><sup>2</sup>).',
    say: null,
  },
  // pp. 40, 46–47
  {
    topic: 3,
    kind: 'remember',
    q: 'The field on the axis of a uniformly charged disc, close up and far away?',
    a: '<i>E</i> = (<i>σ</i>/(2ε<sub>0</sub>))(1 − <i>x</i>/√(<i>x</i><sup>2</sup> + <i>R</i><sup>2</sup>)). Close to the surface (<i>x</i> ≪ <i>R</i>) it tends to <i>σ</i>/(2ε<sub>0</sub>), the infinite-sheet value; far away it acts as a point charge',
    why: 'Not <i>σ</i>/ε<sub>0</sub>: that is the field at a conductor’s surface, the recurring factor-of-2 trap.',
    say: 'A disc up close is just an infinite sheet.',
  },
  // pp. 39–40, 47
  {
    topic: 3,
    kind: 'mixup',
    q: '<i>λ</i>, <i>σ</i> and <i>ρ</i>: what does each measure, and in what unit?',
    a: '<i>λ</i> = d<i>q</i>/d<i>l</i>, charge per length (C/m); <i>σ</i> = d<i>q</i>/d<i>A</i>, per area (C/m<sup>2</sup>); <i>ρ</i> = d<i>q</i>/d<i>V</i>, per volume (C/m<sup>3</sup>)',
    why: 'Match the density to the geometry, and the element to the density: d<i>q</i> = <i>λ</i> d<i>l</i> = <i>σ</i> d<i>A</i> = <i>ρ</i> d<i>V</i>.',
    say: '<i>λ</i> length, <i>σ</i> surface, <i>ρ</i> volume.',
  },
  // pp. 40, 46–47
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is the field at the centre of a uniformly charged semicircular arc zero, like a full ring’s?',
    a: 'No: a full ring gives <i>E</i> = 0 at its centre, but a semicircular arc gives <i>E</i> = 2<i>kλ</i>/<i>R</i>, and a quarter arc √2<i>kλ</i>/<i>R</i>',
    why: 'In a full ring every element is balanced by a diametrically opposite one, so the contributions cancel.',
    say: 'Full loop → zero at centre; half loop → 2<i>kλ</i>/<i>R</i>.',
  },
  // p. 47
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Before and after integrating the field of an extended charge: the two checks that save the most marks?',
    a: 'Before: ask “which components cancel?” and integrate only what survives. After: sanity-check the result with a limit',
    why: 'A full loop gives zero at its centre; on a disc’s axis only the axial part survives. A disc must become an infinite sheet up close and a point charge far away.',
    say: 'Chop, cancel, integrate.',
  },

  // ── Topic 05 · Electric Flux and Gauss’s Law ──
  // pp. 48–49, 57–58
  {
    topic: 4,
    kind: 'remember',
    q: 'Gauss’s law: what does the net flux through a closed surface depend on?',
    a: '∮ <i>E⃗</i> · d<i>A⃗</i> = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>: only the net charge enclosed, not the shape or size of the surface, nor charges outside it',
    why: 'The <i>E⃗</i> in the integral is the total field from all charges, inside and outside: outside charges change the field on the surface but give zero net flux.',
    say: 'Flux counts what’s inside — shape and outsiders don’t matter.',
  },
  // pp. 49, 58
  {
    topic: 4,
    kind: 'remember',
    q: 'The three standard Gauss results: an infinite line charge, an infinite plane sheet, a thin spherical shell?',
    a: 'Line: <i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>), radial. Sheet: <i>E</i> = <i>σ</i>/(2ε<sub>0</sub>), perpendicular and independent of distance. Shell: <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> outside (<i>r</i> > <i>R</i>), zero inside',
    why: 'Each needs the Gaussian surface that matches its symmetry: a cylinder, a pillbox and a sphere.',
    say: 'Match the surface to the symmetry.',
  },
  // pp. 51, 57–59
  {
    topic: 4,
    kind: 'mixup',
    q: 'The field of a thin charged sheet and the field just outside a conductor, for the same <i>σ</i>?',
    a: 'Thin sheet: <i>σ</i>/(2ε<sub>0</sub>), with field on both sides. Conductor’s surface: <i>σ</i>/ε<sub>0</sub>, with field on one side only',
    why: 'Inside the conductor the field is zero, so the pillbox has only one active cap. This factor of 2 is one of the most punished traps in the chapter.',
    say: 'Sheet halves it (<i>σ</i>/(2ε<sub>0</sub>)), conductor doesn’t (<i>σ</i>/ε<sub>0</sub>).',
  },
  // pp. 57–59
  {
    topic: 4,
    kind: 'mistake',
    q: 'Is the field zero inside a uniformly charged solid sphere, as it is inside a charged shell?',
    a: 'No: inside a shell <i>E</i> = 0, but inside a uniformly charged solid sphere <i>E</i> = <i>ρr</i>/(3ε<sub>0</sub>) = <i>kQr</i>/<i>R</i><sup>3</sup>, growing with <i>r</i>',
    why: 'Outside, both act as a point charge at the centre: <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>.',
    say: 'Inside a shell, nothing; inside a solid, linear.',
  },
  // pp. 56–58
  {
    topic: 4,
    kind: 'shortcut',
    q: 'The flux through a closed surface around some charges. The fast way?',
    a: 'Never compute the field: just read off <i>Q</i><sub>enc</sub>/ε<sub>0</sub>',
    why: 'A point charge <i>q</i> at the centre of a cube sends <i>q</i>/(6ε<sub>0</sub>) through each face; with <i>q</i> at a corner, the cube gets <i>q</i>/(8ε<sub>0</sub>).',
    say: null,
  },

  // ── Additional A · Continuous Distributions: Beyond Ring, Disc, Arc ──
  // pp. 61, 63
  {
    topic: 5,
    kind: 'remember',
    q: 'The field at the centre of a uniformly charged arc of radius <i>R</i> that subtends an angle 2<i>θ</i><sub>0</sub>?',
    a: '<i>E</i> = (<i>λ</i>/(2πε<sub>0</sub><i>R</i>)) sin <i>θ</i><sub>0</sub>, along the symmetry axis, away from the arc (for <i>λ</i> > 0)',
    why: 'A semicircle (<i>θ</i><sub>0</sub> = 90°) gives back 2<i>kλ</i>/<i>R</i>; a 120° arc gives √3<i>λ</i>/(4πε<sub>0</sub><i>R</i>).',
    say: null,
  },
  // pp. 61–63
  {
    topic: 5,
    kind: 'remember',
    q: 'A uniformly charged solid sphere (density <i>ρ</i>) has an off-centre spherical cavity. The field inside the cavity?',
    a: '<i>E⃗</i> = (<i>ρ</i>/(3ε<sub>0</sub>))<i>a⃗</i>, uniform, where <i>a⃗</i> runs from the big sphere’s centre to the cavity’s centre',
    why: 'Treat it as a full sphere of density <i>ρ</i> plus a smaller sphere of density −<i>ρ</i> at the cavity, and superpose.',
    say: null,
  },

  // ── Additional B · Conductors: Boundary Conditions, Pressure, Images ──
  // pp. 64–66
  {
    topic: 6,
    kind: 'remember',
    q: 'At the surface of a charged conductor: the field just outside, and the electrostatic pressure on the surface charge?',
    a: 'Tangential <i>E</i> is zero and normal <i>E</i> = <i>σ</i>/ε<sub>0</sub>. The pressure is <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>), directed outward',
    why: 'A patch feels only the field of the rest of the conductor, <i>E</i>/2 = <i>σ</i>/(2ε<sub>0</sub>). On a charged conducting spherical shell this pushes the hemispheres apart with <i>F</i> = <i>kQ</i><sup>2</sup>/(8<i>R</i><sup>2</sup>).',
    say: null,
  },
  // pp. 65–67
  {
    topic: 6,
    kind: 'remember',
    q: 'A point charge <i>q</i> is a distance <i>d</i> from an infinite grounded conducting plane. The force on it, and the total induced charge?',
    a: 'Replace the plane by an image charge −<i>q</i> at distance <i>d</i> behind it: <i>F</i> = <i>q</i><sup>2</sup>/(16πε<sub>0</sub><i>d</i><sup>2</sup>), attraction toward the plane. The total induced charge is −<i>q</i>',
    why: 'The image gives the potential exactly, with <i>V</i> = 0 on the plane, but only in the region where the real charge lives.',
    say: null,
  },

  // ── Additional C · Dipoles in Non-Uniform Fields & Dipole–Dipole Interaction ──
  // pp. 68–69
  {
    topic: 7,
    kind: 'remember',
    q: 'The net force on a dipole in a non-uniform field?',
    a: '<i>F⃗</i> = (<i>p⃗</i> · ∇)<i>E⃗</i>; for a dipole aligned with the field gradient, <i>F</i> = <i>p</i>(d<i>E</i>/d<i>x</i>)',
    why: 'A dipole <i>p⃗</i> = <i>p ẑ</i> at distance <i>z</i> on the axis of a point charge <i>Q</i> feels <i>F⃗</i> = −(2<i>pQ</i>/(4πε<sub>0</sub><i>z</i><sup>3</sup>))<i>ẑ</i>: attractive if <i>p</i> and <i>Q</i> have the same sign.',
    say: null,
  },
  // pp. 69–70
  {
    topic: 7,
    kind: 'mixup',
    q: 'Two identical parallel dipoles a distance <i>r</i> apart: do they attract or repel when head-to-tail on a line, and when side by side?',
    a: 'Head-to-tail: they attract, <i>U</i> = −2<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>3</sup>). Side by side (<i>p⃗</i> ⊥ <i>r⃗</i>): they repel, <i>U</i> = <i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>3</sup>)',
    why: 'The forces, from <i>F</i> = −d<i>U</i>/d<i>r</i>, are 6<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>4</sup>) and 3<i>p</i><sup>2</sup>/(4πε<sub>0</sub><i>r</i><sup>4</sup>).',
    say: null,
  },

  // ── Additional D · Gauss’s Law Advanced: Non-Uniform Densities, Coaxial, Slabs, Cavities ──
  // pp. 70–71
  {
    topic: 8,
    kind: 'remember',
    q: 'A sphere has a non-uniform charge density <i>ρ</i>(<i>r</i>). How do you find its field?',
    a: 'Find the enclosed charge first, <i>Q</i><sub>enc</sub>(<i>r</i>) = ∫<sub>0</sub><sup><i>r</i></sup> <i>ρ</i>(<i>r</i>′)4π<i>r</i>′<sup>2</sup> d<i>r</i>′, then <i>E</i>(<i>r</i>) = <i>Q</i><sub>enc</sub>(<i>r</i>)/(4πε<sub>0</sub><i>r</i><sup>2</sup>)',
    why: 'For <i>ρ</i> = <i>kr</i> (<i>k</i> a constant), <i>E</i> = <i>kr</i><sup>2</sup>/(4ε<sub>0</sub>) inside, and the total charge is π<i>kR</i><sup>4</sup>.',
    say: null,
  },
  // pp. 71–72
  {
    topic: 8,
    kind: 'remember',
    q: 'A charge <i>q</i> sits in a cavity inside a conductor carrying charge <i>Q</i><sub>conductor</sub>. The charge on the cavity wall, and on the outer surface?',
    a: 'Cavity wall: −<i>q</i>. Outer surface: <i>Q</i><sub>conductor</sub> + <i>q</i>. The field in the conductor material is zero',
    why: 'The field in the cavity is that of <i>q</i> plus the induced charges on the wall: not uniform unless the cavity is spherical with <i>q</i> at its centre.',
    say: null,
  },

  // ── Additional E · Electrostatic Energy Density, Self-Energy, and Pressure ──
  // pp. 73–74
  {
    topic: 9,
    kind: 'remember',
    q: 'The energy stored per unit volume of an electric field, and the pressure on a charged conductor?',
    a: '<i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>, so <i>U</i> = ∫ ½ε<sub>0</sub><i>E</i><sup>2</sup> d<i>V</i> over all space. The pressure is <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) = ½ε<sub>0</sub><i>E</i><sup>2</sup>, with <i>E</i> the field just outside',
    why: 'The pressure acts outward, trying to expand the conductor: it is what makes a charged soap bubble expand.',
    say: null,
  },
  // pp. 73–75
  {
    topic: 9,
    kind: 'mixup',
    q: 'The self-energy of a uniformly charged solid sphere and of a thin spherical shell, each of charge <i>Q</i> and radius <i>R</i>?',
    a: 'Solid sphere: <i>U</i> = (3/5)<i>kQ</i><sup>2</sup>/<i>R</i>. Thin shell: <i>U</i> = ½<i>kQ</i><sup>2</sup>/<i>R</i>',
    why: 'The shell has no field inside. The sphere stores extra energy inside, <i>Q</i><sup>2</sup>/(40πε<sub>0</sub><i>R</i>): one fifth of the energy outside.',
    say: null,
  },

  // ── Additional F · JEE Advanced Problem Patterns: Synthesis ──
  // pp. 65, 77–78
  {
    topic: 10,
    kind: 'remember',
    q: 'Two conducting spheres of radii <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub>, far apart, are joined by a thin wire. How is the charge shared, and is energy conserved?',
    a: 'They reach the same potential, so <i>Q</i>′<sub>1</sub>/<i>Q</i>′<sub>2</sub> = <i>R</i><sub>1</sub>/<i>R</i><sub>2</sub>. Charge is conserved, but energy is lost as heat in the wire',
    why: '<i>σ</i><sub>1</sub>/<i>σ</i><sub>2</sub> = <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub>: the smaller sphere has the higher surface charge density and surface field.',
    say: null,
  },
  // p. 76
  {
    topic: 10,
    kind: 'remember',
    q: 'Three charges <i>q</i>, <i>q</i><sub>2</sub>, <i>q</i> sit at <i>x</i> = −<i>a</i>, 0, +<i>a</i>. What <i>q</i><sub>2</sub> puts all three in equilibrium together?',
    a: '<i>q</i><sub>2</sub> = −<i>q</i>/4',
    why: 'If the outer two are held fixed instead, <i>q</i><sub>2</sub> at <i>x</i> = 0 is in equilibrium for any <i>q</i><sub>2</sub>, by symmetry.',
    say: null,
  },
];
