/**
 * KEY POINTS for Physics Class 12, Chapter 2 (Electrostatic Potential and
 * Capacitance).
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
 * that are words or labels stay upright (<i>C</i><sub>series</sub>,
 * <i>W</i><sub>ext</sub>, ε<sub>0</sub>); a subscript the book sets italic
 * stays italic (<i>q</i><sub><i>i</i></sub>, <i>V</i><sub><i>i</i></sub>);
 * vectors keep their arrows (<i>E⃗</i>, <i>p⃗</i>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Electrostatic Potential and Equipotential Surfaces ──
  // pp. 81–82, 90
  {
    topic: 0,
    kind: 'remember',
    q: 'The potential of a point charge, and of a system of charges: is it a vector?',
    a: 'No, a scalar: <i>V</i> = (1/(4πε<sub>0</sub>))<i>Q</i>/<i>r</i>, carrying the sign of <i>Q</i>. For several charges, <i>V</i> = (1/(4πε<sub>0</sub>))Σ<i>q</i><sub><i>i</i></sub>/<i>r</i><sub><i>i</i></sub>, an algebraic sum',
    why: 'The formula assumes a point charge (or a spherically symmetric charge, seen from outside) and <i>V</i> = 0 at infinity.',
    say: 'Potential is a scalar — just add with signs.',
  },
  // pp. 81–83, 89–90
  {
    topic: 0,
    kind: 'remember',
    q: 'How are the field and the potential related, and which way does the field point?',
    a: '<i>E</i> = −d<i>V</i>/d<i>r</i>: the field points toward decreasing potential, perpendicular to the equipotential surfaces',
    why: 'Crowded equipotentials mean a strong field; where <i>V</i> is constant, <i>E</i> = 0.',
    say: 'Field flows downhill in potential.',
  },
  // pp. 82, 88–89
  {
    topic: 0,
    kind: 'mixup',
    q: 'At the midpoint between +<i>q</i> and −<i>q</i>, and between two equal like charges: which of <i>V</i> and <i>E</i> is zero?',
    a: 'Between +<i>q</i> and −<i>q</i>: <i>V</i> = 0 but <i>E</i> ≠ 0. Between equal like charges: <i>E</i> = 0 but <i>V</i> ≠ 0',
    why: '<i>V</i> = 0 does not mean <i>E</i> = 0, nor the reverse: the single most exam-tested confusion in the chapter.',
    say: '<i>V</i> and <i>E</i> are different questions — answer each on its own.',
  },
  // pp. 82, 89–90
  {
    topic: 0,
    kind: 'mistake',
    q: 'A charge is carried along a long, winding path that stays on one equipotential surface. How much work is done?',
    a: 'Zero, full stop: any path on an equipotential surface costs zero work',
    why: '<i>W</i> = <i>q</i>Δ<i>V</i> with Δ<i>V</i> = 0; the field is perpendicular to the surface everywhere.',
    say: 'On an equipotential, you ride free.',
  },
  // p. 90
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Finding <i>V</i> at a symmetric point. The fast way, and the sign check?',
    a: 'Use the ratio method: compare distances rather than recomputing <i>k</i> each time. Then check that the sign of <i>V</i> matches whichever charge dominates',
    why: 'Positive charges raise potential, negative charges lower it. A system of equal-and-opposite charges giving a non-zero <i>V</i> at its symmetry point means an arithmetic slip.',
    say: null,
  },

  // ── Topic 02 · Electrostatic Potential Energy ──
  // pp. 91–92, 98
  {
    topic: 1,
    kind: 'remember',
    q: 'The potential energy of two point charges, and what does its sign tell you?',
    a: '<i>U</i> = (1/(4πε<sub>0</sub>))<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub>, signs included: like charges give <i>U</i> > 0, unlike charges <i>U</i> < 0, a bound system',
    why: '<i>U</i> = 0 is chosen at infinite separation. <i>U</i> is the work to assemble the charges slowly from infinity, and depends only on the final arrangement.',
    say: 'Like charges, positive PE — bound systems are negative.',
  },
  // pp. 92, 98
  {
    topic: 1,
    kind: 'remember',
    q: 'The potential energy of one charge, and of two charges, placed in an external potential <i>V</i>?',
    a: 'One charge: <i>U</i> = <i>qV</i>. Two charges: <i>U</i> = <i>q</i><sub>1</sub><i>V</i>(<i>r⃗</i><sub>1</sub>) + <i>q</i><sub>2</sub><i>V</i>(<i>r⃗</i><sub>2</sub>) + (1/(4πε<sub>0</sub>))<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub>',
    why: 'The last term is their mutual interaction. <i>U</i> = <i>qV</i> is the bridge between joules and volts.',
    say: null,
  },
  // pp. 92, 97–98
  {
    topic: 1,
    kind: 'mixup',
    q: 'How do the force and the potential energy between two charges depend on <i>r</i>?',
    a: 'Force (and field): as 1/<i>r</i><sup>2</sup>. Potential energy (and potential): as 1/<i>r</i>',
    why: 'Energy is the integral of force over distance, which lifts the power from −2 to −1. Mixing them up is the most common arithmetic disaster in this topic.',
    say: 'PE goes as 1/<i>r</i>, force as 1/<i>r</i><sup>2</sup>.',
  },
  // pp. 92, 97–98
  {
    topic: 1,
    kind: 'mistake',
    q: 'A dipole in a uniform field: is <i>θ</i> = 180° its lowest-energy position?',
    a: 'No: that is the unstable maximum, <i>U</i> = +<i>pE</i>. Stable rest is <i>θ</i> = 0 (<i>p⃗</i> ∥ <i>E⃗</i>), the minimum <i>U</i> = −<i>pE</i>',
    why: 'From <i>U</i> = −<i>p⃗</i> · <i>E⃗</i> = −<i>pE</i> cos <i>θ</i>, with <i>U</i> = 0 at <i>θ</i> = 90°: turning it from aligned to perpendicular takes <i>W</i> = <i>pE</i>.',
    say: 'A dipole rests aligned.',
  },
  // p. 98
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A charge is released from rest and you need its final speed. The fast way?',
    a: 'Skip the forces entirely and go straight to Δ<i>K</i> = −Δ<i>U</i>',
    why: 'Keep the signs straight: <i>W</i><sub>field</sub> = −Δ<i>U</i> and <i>W</i><sub>ext</sub> = +Δ<i>U</i>, so dismantling a bound system takes −<i>U</i><sub>system</sub>, a positive number.',
    say: 'Released from rest? Use Δ<i>K</i> = −Δ<i>U</i>, not forces.',
  },

  // ── Topic 03 · Capacitance and Dielectrics ──
  // pp. 99–100, 106
  {
    topic: 2,
    kind: 'remember',
    q: 'The capacitance of a parallel-plate capacitor, with air and with a dielectric filling the gap?',
    a: '<i>C</i><sub>0</sub> = ε<sub>0</sub><i>A</i>/<i>d</i> (air); <i>C</i> = <i>K</i>ε<sub>0</sub><i>A</i>/<i>d</i> = <i>KC</i><sub>0</sub> (dielectric-filled)',
    why: 'This assumes an ideal capacitor: <i>d</i> tiny compared with the plates, so the field is uniform and fringing negligible. Since <i>K</i> ≥ 1, a dielectric can only increase <i>C</i>.',
    say: 'A dielectric only ever boosts <i>C</i> (by <i>K</i>).',
  },
  // pp. 100, 105–106
  {
    topic: 2,
    kind: 'remember',
    q: 'The energy stored in a capacitor, and how much of the battery’s energy does it keep when charged?',
    a: '<i>U</i> = ½<i>CV</i><sup>2</sup> = <i>Q</i><sup>2</sup>/(2<i>C</i>) = ½<i>QV</i>. It keeps half: the battery does work <i>QV</i> = <i>CV</i><sup>2</sup>',
    why: 'The other half is dissipated as heat in the connecting resistance, whatever its value.',
    say: 'Energy goes as <i>V</i>-squared — and charging wastes half.',
  },
  // pp. 99, 101, 105–106
  {
    topic: 2,
    kind: 'mixup',
    q: 'A dielectric is slid in to fill the gap. What happens to <i>Q</i>, <i>V</i>, <i>E</i> and <i>U</i> if the battery was disconnected, and if it stays connected?',
    a: 'Disconnected (<i>Q</i> fixed): <i>V</i>, <i>E</i> and <i>U</i> all ÷<i>K</i>. Connected (<i>V</i> fixed): <i>Q</i> and <i>U</i> both ×<i>K</i>, <i>E</i> unchanged',
    why: 'Decide “is the battery still connected?” first, every single time: skipping it is the number-one error in this topic.',
    say: 'Disconnected? <i>Q</i> is king. Connected? <i>V</i> is king.',
  },
  // pp. 105–106
  {
    topic: 2,
    kind: 'mistake',
    q: 'The charge on a capacitor is doubled. Does its capacitance double?',
    a: 'No, it stays the same: <i>V</i> doubles too, so <i>Q</i>/<i>V</i> is unchanged',
    why: '<i>C</i> is fixed by plate area, separation and dielectric: it changes only if the geometry or the dielectric changes.',
    say: 'Capacitance is geometry, not charge.',
  },
  // p. 106
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Any dielectric question. The two-branch reflex?',
    a: 'Disconnected? Write <i>Q</i> as a constant, then <i>V</i> = <i>Q</i>/<i>C</i>, <i>E</i> = <i>V</i>/<i>d</i>, <i>U</i> = <i>Q</i><sup>2</sup>/(2<i>C</i>), all scaling as 1/<i>K</i>. Connected? Write <i>V</i> as a constant, then <i>Q</i> = <i>CV</i>, <i>U</i> = ½<i>CV</i><sup>2</sup>, both scaling as <i>K</i>',
    why: 'Picking the energy formula that holds the fixed quantity makes the <i>K</i>-scaling obvious; the wrong one buries it.',
    say: null,
  },

  // ── Topic 04 · Electrostatics of Conductors ──
  // pp. 107–108, 113
  {
    topic: 3,
    kind: 'remember',
    q: 'A conductor in electrostatic equilibrium: the field inside, where the excess charge sits, and its potential?',
    a: '<i>E⃗</i> = 0 inside the material, all excess charge on the surface, and the whole conductor, interior and surface, at one potential',
    why: 'This holds only in equilibrium, with charges at rest; and <i>E</i> = 0 refers to the conducting material, not to a cavity that contains a charge.',
    say: 'Inside a conductor, nothing happens — <i>E</i> = 0, charge on the skin.',
  },
  // pp. 108, 112–113
  {
    topic: 3,
    kind: 'remember',
    q: 'The capacitance of an isolated conducting sphere of radius <i>R</i>, and of a spherical capacitor with shells of radii <i>a</i> < <i>b</i>?',
    a: 'Isolated sphere: <i>C</i> = 4πε<sub>0</sub><i>R</i>, with <i>V</i> = <i>kQ</i>/<i>R</i>. Spherical capacitor: <i>C</i> = 4πε<sub>0</sub><i>ab</i>/(<i>b</i> − <i>a</i>)',
    why: 'A small gap <i>b</i> − <i>a</i> gives a large capacitance: the same lesson as the parallel plate’s 1/<i>d</i>.',
    say: null,
  },
  // pp. 107–108, 113
  {
    topic: 3,
    kind: 'mixup',
    q: 'The field just outside a conductor’s surface and the field of an isolated charged sheet, for the same <i>σ</i>?',
    a: 'Conductor: <i>E</i> = <i>σ</i>/ε<sub>0</sub>, normal to the surface. Isolated sheet: <i>σ</i>/(2ε<sub>0</sub>), half as much',
    why: 'A conductor’s charge is one-sided, with zero field on the metal side.',
    say: '<i>σ</i>/ε<sub>0</sub> outside (conductor), <i>σ</i>/(2ε<sub>0</sub>) for a lone sheet.',
  },
  // pp. 107, 113
  {
    topic: 3,
    kind: 'mistake',
    q: 'A charge +<i>q</i> sits inside the cavity of a neutral conductor. Is it shielded from the outside?',
    a: 'No: it induces −<i>q</i> on the cavity wall and +<i>q</i> on the outer surface, so it is detectable outside. Shielding works one way only',
    why: 'An empty cavity, though, has zero field however strong the field outside: the Faraday cage.',
    say: 'Cage shields in, not out.',
  },
  // p. 113
  {
    topic: 3,
    kind: 'shortcut',
    q: 'The potential due to concentric charged shells. The rule?',
    a: 'A shell of charge <i>q</i> contributes <i>kq</i>/<i>r</i><sub>shell</sub> at points inside or on it (a constant), and <i>kq</i>/<i>r</i> at points outside it',
    why: 'Treat any charged conductor as a single equipotential, and find interior charge by drawing a Gaussian surface there: enclosed = 0.',
    say: null,
  },

  // ── Topic 05 · Combination of Capacitors ──
  // pp. 114–115, 121
  {
    topic: 4,
    kind: 'remember',
    q: 'Capacitors in series: the equivalent capacitance, and what is shared?',
    a: '1/<i>C</i><sub>series</sub> = 1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub> + ⋯ + 1/<i>C</i><sub><i>n</i></sub>. Each carries the same charge <i>Q</i>, and the voltages add. <i>C</i><sub>series</sub> is smaller than the smallest',
    why: 'The same-charge rule assumes the inner plates start uncharged and isolated, as in a normal battery-charged chain.',
    say: 'Series shares charge; parallel shares voltage.',
  },
  // pp. 114–115, 121
  {
    topic: 4,
    kind: 'remember',
    q: 'Capacitors in parallel: the equivalent capacitance, and what is shared?',
    a: '<i>C</i><sub>parallel</sub> = <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + ⋯ + <i>C</i><sub><i>n</i></sub>. Each sees the same voltage <i>V</i>, and the charges add, <i>Q</i><sub><i>i</i></sub> = <i>C</i><sub><i>i</i></sub><i>V</i>. <i>C</i><sub>parallel</sub> is larger than the largest',
    why: 'If a series answer is not below the smallest, or a parallel one not above the largest, you have mixed up the formulas.',
    say: 'Series < smallest; parallel > largest.',
  },
  // pp. 114, 121
  {
    topic: 4,
    kind: 'mixup',
    q: 'Capacitors and resistors: in which combination does each add directly?',
    a: 'Capacitors add directly in parallel and reciprocally in series: the opposite of resistors',
    why: 'Series capacitors share charge, like resistors in parallel; parallel capacitors share voltage, like resistors in series.',
    say: 'Capacitors are upside-down resistors.',
  },
  // pp. 114–115, 120–121
  {
    topic: 4,
    kind: 'mistake',
    q: 'Two capacitors charged to different potentials are joined, like plate to like plate. Is the total energy conserved?',
    a: 'No, only the charge is. They reach <i>V</i><sub>common</sub> = (<i>C</i><sub>1</sub><i>V</i><sub>1</sub> + <i>C</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) and lose Δ<i>U</i> = ½(<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>))(<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup>',
    why: 'The loss, as heat in the wires and a little radiation, is zero only if the two voltages were already equal.',
    say: 'Reconnect ⇒ charge conserved, energy lost.',
  },
  // p. 121
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Two capacitors in series, or <i>n</i> equal ones. The fast way to the equivalent capacitance?',
    a: 'Two in series: “product over sum”, <i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>), far faster than reciprocals. <i>n</i> equal capacitors: <i>C</i>/<i>n</i> in series, <i>nC</i> in parallel',
    why: 'Reduce networks in stages, redrawing after each step, and label the charge or voltage you know at every node.',
    say: null,
  },

  // ── Additional A · Energy of Charge Systems: The ½ Σ qV Method ──
  // pp. 92, 122–123
  {
    topic: 5,
    kind: 'remember',
    q: 'The energy of a system of <i>n</i> point charges as ½Σ<i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>: what is <i>V</i><sub><i>i</i></sub>, and why the ½?',
    a: '<i>V</i><sub><i>i</i></sub> is the potential at charge <i>i</i> due to all the other charges. Without the ½, each pair would be counted twice',
    why: 'It equals the sum over the <i>n</i>(<i>n</i> − 1)/2 distinct pairs, (1/(4πε<sub>0</sub>))Σ<sub><i>i</i><<i>j</i></sub> <i>q</i><sub><i>i</i></sub><i>q</i><sub><i>j</i></sub>/<i>r</i><sub><i>ij</i></sub>, with signs carried through: 3 pairs for 3 charges, 6 for 4.',
    say: null,
  },
  // pp. 123–124
  {
    topic: 5,
    kind: 'remember',
    q: 'The work an external agent must do to assemble four equal charges <i>q</i> at the corners of a square of side <i>a</i>?',
    a: 'It equals the final <i>U</i>, from 6 pairs: 4 sides, each <i>kq</i><sup>2</sup>/<i>a</i>, and 2 diagonals, each <i>kq</i><sup>2</sup>/(<i>a</i>√2)',
    why: 'It is positive because like charges repel: the energy is stored in the configuration and given back if the charges are released.',
    say: null,
  },

  // ── Additional B · Potential of Continuous Charge Distributions ──
  // pp. 125–126, 128
  {
    topic: 6,
    kind: 'remember',
    q: 'The potential on the axis of a uniformly charged ring of radius <i>R</i>, at distance <i>x</i> from its centre?',
    a: '<i>V</i> = (1/(4πε<sub>0</sub>))<i>Q</i>/√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>): every element is at the same distance, so it factors out of the integral',
    why: 'Unlike the field, the potential needs no components. At the centre <i>V</i> = <i>kQ</i>/<i>R</i>; a ring with no net charge, <i>λ</i> = <i>λ</i><sub>0</sub> cos <i>θ</i>, has <i>V</i> = 0 there.',
    say: null,
  },
  // pp. 127–128
  {
    topic: 6,
    kind: 'remember',
    q: 'The potential on the axis of a uniformly charged disc, at the surface and far away?',
    a: '<i>V</i> = (<i>σ</i>/(2ε<sub>0</sub>))(√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) − <i>x</i>). At the surface it tends to <i>σR</i>/(2ε<sub>0</sub>); far away to <i>Q</i>/(4πε<sub>0</sub><i>x</i>), a point charge',
    why: 'The disc is built from rings of radius <i>r</i> and charge 2π<i>σr</i> d<i>r</i>, each at distance √(<i>r</i><sup>2</sup> + <i>x</i><sup>2</sup>).',
    say: null,
  },

  // ── Additional C · Partial Dielectrics and Force on Dielectrics ──
  // pp. 128–129
  {
    topic: 7,
    kind: 'remember',
    q: 'Which way does a capacitor pull a partly inserted dielectric slab, and how big is the force?',
    a: 'Always inward, the way that increases <i>C</i>. Isolated (<i>Q</i> fixed): <i>F</i> = (<i>Q</i><sup>2</sup>/(2<i>C</i><sup>2</sup>))(d<i>C</i>/d<i>x</i>). Battery connected (<i>V</i> fixed): <i>F</i> = (<i>V</i><sup>2</sup>/2)(d<i>C</i>/d<i>x</i>)',
    why: 'With the slab a length <i>x</i> into plates of width <i>W</i> and length <i>L</i>, the two parts act in parallel: <i>C</i>(<i>x</i>) = (ε<sub>0</sub><i>W</i>/<i>d</i>)[(<i>K</i> − 1)<i>x</i> + <i>L</i>].',
    say: null,
  },
  // pp. 130–131
  {
    topic: 7,
    kind: 'mixup',
    q: 'Two dielectric layouts: two slabs side by side, each over half the plate area; or one slab <i>K</i> over the whole area, filling half the gap. Parallel or series?',
    a: 'Side by side: parallel, <i>C</i> = ε<sub>0</sub><i>A</i>(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)/(2<i>d</i>). Half the gap: series with the air layer, <i>C</i> = 2<i>KC</i><sub>0</sub>/(<i>K</i> + 1)',
    why: 'Each region acts as its own capacitor; in the half-gap case each layer has thickness <i>d</i>/2, so <i>C</i><sub>1</sub> = 2<i>KC</i><sub>0</sub> and <i>C</i><sub>2</sub> = 2<i>C</i><sub>0</sub>.',
    say: null,
  },

  // ── Additional D · Spherical and Cylindrical Capacitors ──
  // pp. 132–135
  {
    topic: 8,
    kind: 'remember',
    q: 'A spherical capacitor (radii <i>a</i> < <i>b</i>) with its gap filled by a dielectric <i>K</i>: its capacitance, and the limit <i>b</i> ≫ <i>a</i>?',
    a: '<i>C</i> = 4πε<sub>0</sub><i>Kab</i>/(<i>b</i> − <i>a</i>), <i>K</i> times the vacuum value. For <i>b</i> ≫ <i>a</i>, <i>C</i> → 4πε<sub>0</sub><i>Ka</i>',
    why: 'With the outer sphere far away, the inner one acts as an isolated sphere of radius <i>a</i> in a dielectric.',
    say: null,
  },
  // pp. 133–134
  {
    topic: 8,
    kind: 'remember',
    q: 'The capacitance of a cylindrical capacitor of length <i>L</i>, radii <i>a</i> < <i>b</i>, with a dielectric <i>K</i> in the gap?',
    a: '<i>C</i> = 2πε<sub>0</sub><i>KL</i>/ln(<i>b</i>/<i>a</i>), for <i>L</i> ≫ <i>b</i> − <i>a</i> (end effects neglected)',
    why: 'In the gap <i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>Kr</i>), strongest at the inner cylinder: setting it equal to the dielectric strength gives the most charge per unit length it can hold.',
    say: null,
  },

  // ── Additional E · Coalescing Charged Drops: The n^(2/3) Scaling ──
  // pp. 135–136
  {
    topic: 9,
    kind: 'remember',
    q: '<i>n</i> identical charged drops, each of radius <i>r</i>, charge <i>q</i> and potential <i>V</i>, coalesce into one. Its radius, charge and potential?',
    a: '<i>R</i> = <i>n</i><sup>1/3</sup><i>r</i>, <i>Q</i> = <i>nq</i>, <i>V</i>′ = <i>n</i><sup>2/3</sup><i>V</i>. Capacitance, surface charge density and surface field all scale as <i>n</i><sup>1/3</sup>',
    why: 'Volume and charge are conserved. The tempting wrong answers are <i>nV</i> (forgetting that the radius grew) and <i>n</i><sup>1/3</sup><i>V</i>.',
    say: null,
  },
  // pp. 136–137
  {
    topic: 9,
    kind: 'mistake',
    q: 'When <i>n</i> charged drops coalesce, is the electrostatic energy conserved?',
    a: 'No, it rises: <i>U</i>′ = <i>n</i><sup>5/3</sup><i>U</i><sub>one</sub> = <i>n</i><sup>2/3</sup><i>U</i><sub>total</sub>',
    why: 'Surface tension pays for it: the total surface area falls to <i>n</i><sup>−1/3</sup> of its initial value. 512 drops give 64 times the initial total.',
    say: null,
  },
];
