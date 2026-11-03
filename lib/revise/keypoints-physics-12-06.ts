/**
 * KEY POINTS for Physics Class 12, Chapter 6 (Electromagnetic Induction).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: 0 is the opening Experimental Foundations (two points on the
 * experiments' conclusions); Topics 01–04 are 1–4; Additional topics A–G are
 * 5–11, and H (Chapter Synthesis & Master Revision) is 12, with two points
 * from its tool choice and cross-topic traps.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aids, word for word. Additional topics: the Supplement's
 * addenda and the Chapter Synthesis.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. μ<sub>0</sub>
 * is upright; flux Φ is upright as the book prints it. Subscripts that are
 * words or labels stay upright (Φ<sub>B</sub>, <i>v</i><sub>term</sub>,
 * <i>P</i><sub>avg</sub>, <i>u</i><sub>B</sub>); vectors keep their arrows
 * (<i>B⃗</i>, <i>v⃗</i>, d<i>A⃗</i>, d<i>l⃗</i>). π is upright; the exponential
 * <i>e</i> is italic, as in the chapter.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Experimental Foundations — The Faraday & Henry Experiments ──
  // p. 391
  {
    topic: 0,
    kind: 'remember',
    q: 'Two coils are held fixed and nothing moves. When does the galvanometer on the second coil deflect?',
    a: 'Only while the current in the first coil changes: a momentary kick when the key is pressed, a kick the other way when it is released, and the same when the resistance is varied. While the current is steady it reads zero, however large the current',
    why: 'Faraday’s decisive experiment: what induces an emf is not motion and not the mere presence of a field, but a changing magnetic flux through the circuit.',
    say: null,
  },
  // pp. 390–391
  {
    topic: 0,
    kind: 'remember',
    q: 'A coil carrying a steady current is moved toward or away from a second coil joined to a galvanometer. What happens, and what does it show?',
    a: 'The galvanometer deflects exactly as it does with a bar magnet: a current-carrying coil behaves just like a magnet',
    why: 'So the effect is about the magnetic field linking the coil, not about magnets specifically: the seed of mutual induction (Topic 03). Only the relative motion matters.',
    say: null,
  },

  // ── Topic 01 · Magnetic Flux, Faraday’s and Lenz’s Laws ──
  // pp. 394–395, 402
  {
    topic: 1,
    kind: 'remember',
    q: 'Faraday’s law for a coil of <i>N</i> turns, and the current it drives in a circuit of resistance <i>R</i>?',
    a: '<i>ε</i> = −<i>N</i> dΦ<sub>B</sub>/d<i>t</i> and <i>I</i> = |<i>ε</i>|/<i>R</i>. The flux through a flat area in a uniform field is Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i>; otherwise Φ<sub>B</sub> = ∫<i>B⃗</i> · d<i>A⃗</i>',
    why: 'The emf does not depend on <i>R</i>, the current does: a perfectly insulating loop still has an induced emf, but zero current. The minus sign is a direction rule (Lenz), not a number.',
    say: 'Change, not amount.',
  },
  // pp. 393, 396–397
  {
    topic: 1,
    kind: 'remember',
    q: 'The N pole of a magnet is pushed toward a coil. Which way does the induced current flow, and why must it oppose?',
    a: 'So that the coil’s near face becomes an N pole and repels the magnet: counter-clockwise as seen from the magnet. Pulled away, the near face becomes an S pole and holds it back',
    why: 'If the current aided the change, the magnet would accelerate in and make energy out of nothing. Lenz’s law is energy conservation: your work against the opposition becomes the electrical energy.',
    say: 'Nature is lazy — it opposes change.',
  },
  // pp. 394, 401–402
  {
    topic: 1,
    kind: 'mixup',
    q: 'In Φ = <i>BA</i> cos <i>θ</i>, is <i>θ</i> measured from the plane of the loop or from its normal?',
    a: 'From the normal (the area vector), never the plane. If the field makes an angle <i>α</i> with the plane, <i>θ</i> = 90° − <i>α</i> and Φ = <i>BA</i> sin <i>α</i>',
    why: '0.80 T at 30° to the plane of a square loop of side 0.20 m gives Φ = 0.80 × 0.04 × 0.5 = 1.6 × 10<sup>−2</sup> Wb.',
    say: 'Theta is from the normal, not the plane.',
  },
  // pp. 396, 398, 402
  {
    topic: 1,
    kind: 'mistake',
    q: 'A loop is pushed at 2.0 m/s entirely inside a large uniform field of 0.50 T, never crossing its edge. Is the emf <i>Blv</i>?',
    a: 'No, zero: the flux through the loop stays constant, so dΦ<sub>B</sub>/d<i>t</i> = 0. Only a changing flux induces an emf',
    why: 'A large flux does not mean a large emf. Whenever you see a flux value, ask “is it changing?” before doing anything else.',
    say: null,
  },
  // pp. 396, 399, 401–402
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How much charge flows round a coil when the flux through it changes?',
    a: 'Skip emf and current: <i>q</i> = <i>N</i>|ΔΦ<sub>B</sub>|/<i>R</i>, the same however fast or slow the change',
    why: 'A fast change gives a large current for a short time, a slow one a small current for a long time. Reversing 6.0 × 10<sup>−3</sup> Wb per turn in an 80-turn, 4.0 Ω coil sends 0.24 C.',
    say: null,
  },

  // ── Topic 02 · Motional EMF and Eddy Currents ──
  // pp. 404–406, 412
  {
    topic: 2,
    kind: 'remember',
    q: 'A rod of length <i>l</i> slides at speed <i>v</i> on rails, with <i>v⃗</i>, <i>B⃗</i> and the rod mutually perpendicular, in a circuit of resistance <i>R</i>. The emf, current, retarding force and power?',
    a: '<i>ε</i> = <i>Bvl</i>, <i>I</i> = <i>Bvl</i>/<i>R</i>, <i>F</i> = <i>BIl</i> = <i>B</i><sup>2</sup><i>l</i><sup>2</sup><i>v</i>/<i>R</i> and <i>P</i> = <i>Fv</i> = <i>B</i><sup>2</sup><i>l</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i> = <i>I</i><sup>2</sup><i>R</i>',
    why: 'The mechanical power you supply equals the electrical power dissipated: Lenz’s law as energy bookkeeping. Otherwise only perpendicular components count: <i>ε</i> = ∫(<i>v⃗</i> × <i>B⃗</i>) · d<i>l⃗</i>.',
    say: 'Move a wire, make a battery.',
  },
  // pp. 404, 406, 411
  {
    topic: 2,
    kind: 'remember',
    q: 'A rod of length <i>l</i> rotates at <i>ω</i> about one end, in a field <i>B</i> perpendicular to its plane of rotation. The emf between its ends?',
    a: '<i>ε</i> = ½<i>Bωl</i><sup>2</sup>: an element d<i>x</i> at distance <i>x</i> from the pivot moves at <i>ωx</i> and adds <i>Bωx</i> d<i>x</i>',
    why: 'Note the <i>l</i><sup>2</sup>: doubling the length while halving <i>ω</i> doubles the emf.',
    say: null,
  },
  // pp. 404, 411–412
  {
    topic: 2,
    kind: 'mixup',
    q: 'Laminating a transformer core: does it cut the eddy-current loss or the hysteresis loss?',
    a: 'The eddy-current loss: thin insulated laminae confine eddy currents to narrow, high-resistance paths without disturbing the useful flux. Hysteresis loss is cut by choosing a soft magnetic material',
    why: 'Laminations do not “block magnetism”. Eddy currents need a conductor and a changing flux: an insulator such as PVC or glass shows none.',
    say: 'Laminate to resist, not to block.',
  },
  // pp. 404–405, 411
  {
    topic: 2,
    kind: 'mistake',
    q: 'A single rod moves through a uniform field, joined to nothing. Does it carry a current?',
    a: 'No: it develops a voltage across its ends but no sustained current. Current needs a closed circuit whose enclosed flux changes',
    why: 'The magnetic force <i>qvB</i> piles charge at the ends until the electric field balances it, <i>qE</i> = <i>qvB</i>, so <i>V</i> = <i>Bvl</i>.',
    say: null,
  },
  // pp. 404, 412
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A rod of mass <i>m</i> falls on vertical rails in a horizontal field. The fast way to its terminal velocity?',
    a: 'Don’t solve a differential equation: set gravity equal to the magnetic drag, <i>mg</i> = <i>B</i><sup>2</sup><i>l</i><sup>2</sup><i>v</i>/<i>R</i>, so <i>v</i><sub>term</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>l</i><sup>2</sup>)',
    why: 'For any rod-on-rails problem, anchor everything to <i>ε</i> = <i>Bvl</i> and let the chain cascade to <i>I</i>, <i>F</i> and <i>P</i>.',
    say: null,
  },

  // ── Topic 03 · Self and Mutual Induction ──
  // pp. 414, 416
  {
    topic: 3,
    kind: 'remember',
    q: 'The self-inductance of a long solenoid (<i>N</i> turns, length <i>l</i>, cross-section <i>A</i>), and the emf a changing current induces in it?',
    a: '<i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i> (times <i>μ</i><sub>r</sub> with a core), from <i>N</i>Φ<sub>B</sub> = <i>LI</i>; <i>ε</i> = −<i>L</i> d<i>I</i>/d<i>t</i>',
    why: 'For a long solenoid: uniform interior field, negligible end effects. It stores <i>U</i> = ½<i>LI</i><sup>2</sup>, with energy density <i>u</i><sub>B</sub> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>) in the field.',
    say: 'Inductance = electrical inertia (opposes change of current, not current).',
  },
  // pp. 414–416, 420
  {
    topic: 3,
    kind: 'remember',
    q: 'The mutual inductance of two coaxial solenoids of length <i>l</i>, the inner one of area <i>A</i>, and the emf it gives?',
    a: '<i>M</i> = μ<sub>0</sub><i>n</i><sub>1</sub><i>n</i><sub>2</sub><i>Al</i>, from <i>N</i><sub>2</sub>Φ<sub>2</sub> = <i>MI</i><sub>1</sub>; <i>ε</i><sub>2</sub> = −<i>M</i> d<i>I</i><sub>1</sub>/d<i>t</i>. Reciprocity: <i>M</i><sub>12</sub> = <i>M</i><sub>21</sub>',
    why: 'So compute the easy direction: a small coil (radius <i>r</i>, <i>N</i><sub>2</sub> turns) at the centre of a large coplanar one (radius <i>R</i> ≫ <i>r</i>, <i>N</i><sub>1</sub> turns) has <i>M</i> = μ<sub>0</sub><i>N</i><sub>1</sub><i>N</i><sub>2</sub>π<i>r</i><sup>2</sup>/(2<i>R</i>).',
    say: null,
  },
  // pp. 415, 421–422
  {
    topic: 3,
    kind: 'mixup',
    q: '<i>L</i> = μ<sub>0</sub><i>n</i><sup>2</sup><i>Al</i> and <i>L</i> = μ<sub>0</sub><i>N</i><sup>2</sup><i>A</i>/<i>l</i>: which uses <i>n</i>, and which <i>N</i>?',
    a: 'The first uses turns per unit length <i>n</i>, the second total turns <i>N</i>: the same formula, since <i>n</i> = <i>N</i>/<i>l</i>. Never plug a total-turns number into the <i>n</i><sup>2</sup> version',
    why: 'For a fixed coil geometry <i>L</i> ∝ <i>N</i><sup>2</sup>: rewound on the same former with twice the turns, a coil has 4<i>L</i>, not 2<i>L</i>.',
    say: '<i>L</i> goes as <i>N</i>-squared.',
  },
  // pp. 413, 421–422
  {
    topic: 3,
    kind: 'mistake',
    q: 'A larger current flows through a coil. Does its inductance grow?',
    a: 'No: <i>L</i> and <i>M</i> depend only on geometry and the medium, exactly like capacitance. A larger current gives a larger energy and emf, not a larger <i>L</i>',
    why: 'And a steady current, however large, induces no self or mutual emf: only d<i>I</i>/d<i>t</i> ≠ 0 does.',
    say: null,
  },
  // pp. 418, 422
  {
    topic: 3,
    kind: 'shortcut',
    q: 'The self-inductances of two coils are known and you need their mutual inductance. The fast way?',
    a: 'Skip the geometry: <i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>), 0 ≤ <i>k</i> ≤ 1, taking <i>k</i> = 1 for tightly wound coils',
    why: 'It is the geometric mean, not the sum: 2 mH and 8 mH wound one over the other give <i>M</i> = √16 = 4 mH, not 10 mH or 5 mH.',
    say: null,
  },

  // ── Topic 04 · AC Generator ──
  // pp. 423–424
  {
    topic: 4,
    kind: 'remember',
    q: 'A coil of <i>N</i> turns and area <i>A</i> rotates at <i>ω</i> in a uniform field <i>B</i>, about an axis perpendicular to <i>B⃗</i>. Its flux linkage and emf?',
    a: 'Φ = <i>NBA</i> cos <i>ωt</i> and <i>ε</i> = <i>NBAω</i> sin <i>ωt</i> = <i>ε</i><sub>0</sub> sin <i>ωt</i>, with peak <i>ε</i><sub>0</sub> = <i>NBAω</i> = <i>NBA</i>(2π<i>f</i>)',
    why: 'Taking the area vector along <i>B⃗</i> at <i>t</i> = 0. The clean sine wave assumes a uniform field and uniform <i>ω</i>. Indian mains: <i>f</i> = 50 Hz, <i>ω</i> = 100π ≈ 314 rad/s.',
    say: null,
  },
  // pp. 423, 428–430
  {
    topic: 4,
    kind: 'remember',
    q: 'What do the slip rings of an AC generator do, and what would a split ring do instead?',
    a: 'Slip rings rotate with the coil and keep each coil end tied to the same external terminal, so the output alternates. A split-ring commutator in their place gives pulsating DC',
    why: 'That ring is the entire structural difference between an AC and a DC generator; fixed carbon brushes tap the current from the rings.',
    say: 'Slip rings sing AC; split ring barks DC.',
  },
  // pp. 423, 427–430
  {
    topic: 4,
    kind: 'mixup',
    q: 'At what coil position is the flux maximum, and at what position is the emf maximum?',
    a: 'Flux is maximum when the coil’s plane is perpendicular to <i>B⃗</i>, and the emf is then zero. The emf is maximum when the plane is parallel to <i>B⃗</i>, where the flux is zero but changing fastest',
    why: 'Flux and emf are 90° out of step: 30° from the maximum-flux position, the emf is only half its peak while the flux is still 86.6% of its maximum.',
    say: 'Edge-on for max emf (coil plane parallel to field).',
  },
  // pp. 424, 427, 429
  {
    topic: 4,
    kind: 'mistake',
    q: 'A generator’s coil is spun twice as fast. Does only the peak emf change?',
    a: 'No: the peak emf doubles (<i>ε</i><sub>0</sub> = <i>NBAω</i>) and the output frequency doubles too. You cannot change one alone',
    why: 'Nor does the emf quadruple: it is linear in <i>ω</i>, not quadratic.',
    say: 'Faster spin = bigger and quicker.',
  },
  // pp. 428–429
  {
    topic: 4,
    kind: 'shortcut',
    q: 'The average power a generator delivers to a load <i>R</i>. The fast way?',
    a: 'Jump straight to <i>P</i><sub>avg</sub> = <i>ε</i><sub>0</sub><sup>2</sup>/(2<i>R</i>), with <i>ε</i><sub>0</sub> = <i>NBA</i>(2π<i>f</i>)',
    why: 'With <i>f</i> in hertz, don’t drop the 2π. A peak of 150 V across 50 Ω gives (150)<sup>2</sup>/100 = 225 W.',
    say: null,
  },

  // ── Additional A · Energy Method for Motional EMF Problems ──
  // pp. 437–438
  {
    topic: 5,
    kind: 'remember',
    q: 'A rod (mass <i>m</i>, length <i>ℓ</i>) falls on vertical rails of resistance <i>R</i> in a horizontal field <i>B</i>. Its terminal velocity, and where does the power go?',
    a: '<i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>), and then <i>mgv</i><sub>t</sub> = <i>I</i><sup>2</sup><i>R</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sub>t</sub><sup>2</sup>/<i>R</i>: all the gravitational power becomes heat',
    why: 'A gravity-fed generator, with no external agent: 40 g, 0.40 m, 0.20 Ω and 0.50 T give 2.0 m/s and 0.80 W.',
    say: null,
  },
  // pp. 437–439
  {
    topic: 5,
    kind: 'remember',
    q: 'A rod is pulled at constant speed <i>v</i> on horizontal rails. The power the external agent supplies?',
    a: '<i>P</i><sub>ext</sub> = <i>F</i><sub>ext</sub><i>v</i> = <i>I</i><sup>2</sup><i>R</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i>, all dissipated as heat',
    why: 'Not <i>mgv</i> (gravity does no work on a horizontal rod) and not <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>3</sup>/<i>R</i>: the power goes as <i>v</i><sup>2</sup>.',
    say: null,
  },

  // ── Additional B · LR Circuits: Growth and Decay ──
  // pp. 441, 443
  {
    topic: 6,
    kind: 'remember',
    q: 'A battery of emf <i>ε</i><sub>0</sub> is switched on across a series <i>LR</i> circuit. How does the current grow?',
    a: '<i>I</i>(<i>t</i>) = (<i>ε</i><sub>0</sub>/<i>R</i>)(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>), with time constant <i>τ</i> = <i>L</i>/<i>R</i>: 63.2% of the final value at <i>t</i> = <i>τ</i>',
    why: 'The voltage across the inductor decays as <i>ε</i><sub>0</sub><i>e</i><sup>−<i>t</i>/<i>τ</i></sup>. Reaching 90% takes <i>τ</i> ln 10.',
    say: null,
  },
  // pp. 441–442
  {
    topic: 6,
    kind: 'remember',
    q: 'A current <i>I</i><sub>0</sub> in an inductor is left to decay through a resistor. How does it fall, and how much heat appears in all?',
    a: '<i>I</i>(<i>t</i>) = <i>I</i><sub>0</sub><i>e</i><sup>−<i>t</i>/<i>τ</i></sup>, and the total heat equals the energy stored at the start, ½<i>LI</i><sub>0</sub><sup>2</sup>',
    why: 'During growth only ½<i>LI</i><sub>max</sub><sup>2</sup> is ever stored while the resistor keeps dissipating <i>I</i><sub>max</sub><sup>2</sup><i>R</i>: the 50–50 split belongs to RC charging, not LR growth.',
    say: null,
  },

  // ── Additional C · LC Oscillations: The Electromagnetic Spring-Mass Analogue ──
  // p. 444
  {
    topic: 7,
    kind: 'remember',
    q: 'A charged capacitor <i>C</i> is connected across an inductor <i>L</i>. Its angular frequency, and what is conserved?',
    a: '<i>ω</i> = 1/√(<i>LC</i>), with <i>q</i> = <i>q</i><sub>0</sub> cos <i>ωt</i>. The energy <i>q</i><sup>2</sup>/(2<i>C</i>) + ½<i>LI</i><sup>2</sup> = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>) = ½<i>LI</i><sub>0</sub><sup>2</sup> stays constant, with <i>I</i><sub>0</sub> = <i>q</i><sub>0</sub><i>ω</i>',
    why: 'It is spring-mass SHM, with <i>L</i> as the mass and 1/<i>C</i> as the spring constant. The energy swaps between <i>C</i> and <i>L</i> at frequency 2<i>ω</i>.',
    say: null,
  },
  // pp. 445–446
  {
    topic: 7,
    kind: 'remember',
    q: 'A resistor <i>R</i> is added in series with <i>L</i> and <i>C</i>. When does the circuit still oscillate?',
    a: 'When it is underdamped, <i>R</i>/(2<i>L</i>) < 1/√(<i>LC</i>), i.e. <i>R</i> < 2√(<i>L</i>/<i>C</i>). The amplitude then decays with the envelope time constant <i>τ</i><sub>env</sub> = 2<i>L</i>/<i>R</i>',
    why: '<i>L</i> = 1.0 H and <i>C</i> = 1.0 μF give 2√(<i>L</i>/<i>C</i>) = 2000 Ω; with 10 Ω the frequency stays almost 10<sup>3</sup> rad/s and <i>τ</i><sub>env</sub> = 0.20 s.',
    say: null,
  },

  // ── Additional D · The BLV Chain: Inversions and Extensions ──
  // pp. 447–448
  {
    topic: 8,
    kind: 'remember',
    q: 'A rod on rails dissipates a power <i>P</i> in the resistance <i>R</i>. How do you get back to its speed?',
    a: 'Invert <i>P</i> = <i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup><i>v</i><sup>2</sup>/<i>R</i>: <i>v</i> = √(<i>PR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>)), and the current is <i>I</i> = √(<i>P</i>/<i>R</i>)',
    why: '2.0 W in 0.80 Ω, with <i>B</i> = 0.40 T and <i>ℓ</i> = 0.50 m, needs <i>v</i> = √40 = 6.32 m/s and a pull of <i>BIℓ</i> = 0.316 N.',
    say: null,
  },
  // pp. 447–449
  {
    topic: 8,
    kind: 'remember',
    q: 'A rod of length <i>ℓ</i> makes an angle <i>α</i> with its direction of motion along rails, in a field perpendicular to the plane of the rails. The emf, and the magnetic force?',
    a: '<i>ε</i> = <i>Bℓv</i> sin <i>α</i>: only the velocity component perpendicular to the rod separates charge, so the effective length is <i>ℓ</i> sin <i>α</i>. The force <i>F</i> = <i>BIℓ</i> uses the full <i>ℓ</i>',
    why: 'The force is perpendicular to the rod; its component along the rails opposes the motion. Two rods sliding in opposite directions on the same rails give <i>ε</i> = <i>Bℓ</i>(<i>v</i><sub>1</sub> + <i>v</i><sub>2</sub>).',
    say: null,
  },

  // ── Additional E · Quantitative Eddy Currents and Magnetic Damping ──
  // pp. 450–451
  {
    topic: 9,
    kind: 'remember',
    q: 'How does the eddy-current loss in a laminated core depend on the lamination thickness <i>t</i>?',
    a: 'The loss per unit mass scales as <i>B</i><sub>max</sub><sup>2</sup><i>f</i><sup>2</sup><i>t</i><sup>2</sup>/<i>ρ</i>, with <i>ρ</i> the resistivity: halving the thickness quarters the loss',
    why: 'An order-of-magnitude estimate from <i>P</i><sub>vol</sub> ∼ (1/<i>ρ</i>)(d<i>B</i>/d<i>t</i>)<sup>2</sup><i>t</i><sup>2</sup>; the <i>t</i><sup>2</sup> scaling is exact.',
    say: null,
  },
  // pp. 450–452
  {
    topic: 9,
    kind: 'remember',
    q: 'A conducting plate (mass <i>m</i>, width <i>ℓ</i>, eddy-current resistance <i>R</i>) falls into a uniform field <i>B</i>. How does its speed approach terminal velocity?',
    a: '<i>v</i>(<i>t</i>) = <i>v</i><sub>t</sub>(1 − <i>e</i><sup>−<i>t</i>/<i>τ</i></sup>), with <i>v</i><sub>t</sub> = <i>mgR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>) and magnetic time constant <i>τ</i> = <i>mR</i>/(<i>B</i><sup>2</sup><i>ℓ</i><sup>2</sup>)',
    why: 'Since <i>v</i><sub>t</sub> ∝ 1/<i>B</i><sup>2</sup>, doubling the field cuts the terminal velocity to a quarter. A 50 g copper plate in 0.40 T (idealised eddy-path resistance 0.80 μΩ) settles to about 1 mm/s within about 0.2 ms.',
    say: null,
  },

  // ── Additional F · Flux Linkage Method for Complex Geometries ──
  // pp. 453, 455
  {
    topic: 10,
    kind: 'remember',
    q: 'A long wire carries <i>I</i> = <i>I</i><sub>0</sub> cos <i>ωt</i>; a coplanar rectangular loop of height <i>h</i> has its parallel sides at distances <i>a</i> and <i>b</i> (<i>b</i> > <i>a</i>). The emf in the loop?',
    a: 'Integrate first: Φ = (μ<sub>0</sub><i>Ih</i>/(2π)) ln(<i>b</i>/<i>a</i>). Then differentiate: <i>ε</i> = (μ<sub>0</sub><i>I</i><sub>0</sub><i>ωh</i>/(2π)) ln(<i>b</i>/<i>a</i>) sin <i>ωt</i>',
    why: 'The template: set up Φ = ∫<i>B⃗</i> · d<i>A⃗</i>, integrate over space, differentiate in time by the chain rule, then <i>ε</i> = −<i>N</i> dΦ/d<i>t</i>.',
    say: null,
  },
  // pp. 454–455
  {
    topic: 10,
    kind: 'remember',
    q: 'A single circular loop is coaxial with a long solenoid (radius <i>r</i>, <i>n</i> turns per metre). Its mutual inductance if it encloses the solenoid, and if it lies inside with radius <i>a</i> < <i>r</i>?',
    a: 'Enclosing it: <i>M</i> = μ<sub>0</sub><i>n</i>π<i>r</i><sup>2</sup>, independent of the loop’s own radius. Inside: <i>M</i> = μ<sub>0</sub><i>n</i>π<i>a</i><sup>2</sup>',
    why: 'The field is uniform inside the solenoid and negligible outside, so enlarging a loop that already encloses it adds area only where <i>B</i> ≈ 0.',
    say: null,
  },

  // ── Additional G · The Dot Convention and Combined Inductor Circuits ──
  // pp. 456–457
  {
    topic: 11,
    kind: 'remember',
    q: 'Two coupled inductors <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub>, with mutual inductance <i>M</i>, are connected in series. The total inductance?',
    a: 'Series aiding (current enters both dotted terminals): <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> + 2<i>M</i>. Series opposing (dotted ends joined): <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> − 2<i>M</i>',
    why: '20 mH and 30 mH with <i>M</i> = 15 mH give 80 mH aiding and 20 mH opposing, with <i>k</i> = 15/√600 ≈ 0.61.',
    say: null,
  },
  // pp. 457–458
  {
    topic: 11,
    kind: 'remember',
    q: 'A pair of coils in series measures 120 mH aiding and 40 mH opposing. What can you find?',
    a: 'Subtracting, 4<i>M</i> = 80 mH, so <i>M</i> = 20 mH; adding, <i>L</i><sub>1</sub> + <i>L</i><sub>2</sub> = 80 mH. The separate <i>L</i><sub>1</sub> and <i>L</i><sub>2</sub> need a third measurement',
    why: '<i>M</i> can never exceed √(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>), i.e. <i>k</i> = 1: the stored energy ½<i>L</i><sub>1</sub><i>I</i><sub>1</sub><sup>2</sup> + ½<i>L</i><sub>2</sub><i>I</i><sub>2</sub><sup>2</sup> + <i>MI</i><sub>1</sub><i>I</i><sub>2</sub> can never be negative.',
    say: null,
  },

  // ── Additional H · Chapter Synthesis & Master Revision ──
  // p. 433
  {
    topic: 12,
    kind: 'remember',
    q: 'Facing an unfamiliar induction problem, which tool do you reach for?',
    a: 'Something moving: motional emf <i>Bvl</i> (½<i>Bωl</i><sup>2</sup> if it rotates about an end). A current changing in a coil: −<i>L</i> d<i>I</i>/d<i>t</i> or −<i>M</i> d<i>I</i><sub>1</sub>/d<i>t</i>. A coil rotating: <i>NBAω</i> sin <i>ωt</i>. The field itself changing: −<i>N</i> dΦ/d<i>t</i>',
    why: 'Asked only for total charge? Use <i>q</i> = <i>N</i>ΔΦ/<i>R</i>. A direction or a sign is always Lenz’s law.',
    say: null,
  },
  // p. 433
  {
    topic: 12,
    kind: 'remember',
    q: 'Which grow as a square and which linearly: <i>L</i> with <i>N</i>, <i>U</i> with <i>I</i>, <i>ε</i><sub>0</sub> with <i>ω</i>?',
    a: '<i>L</i> ∝ <i>N</i><sup>2</sup> and <i>U</i> ∝ <i>I</i><sup>2</sup> are square laws; <i>ε</i><sub>0</sub> ∝ <i>ω</i> is linear',
    why: 'They are easy to mix up, so check the power of each variable: doubling the turns quadruples <i>L</i>, but doubling <i>ω</i> only doubles <i>ε</i><sub>0</sub>.',
    say: null,
  },
];
