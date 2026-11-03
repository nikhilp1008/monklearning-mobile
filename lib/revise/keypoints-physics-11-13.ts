/**
 * KEY POINTS for Physics Class 11, Chapter 13 (Oscillations).
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
 * sheet's memory aid, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Subscripts
 * that are words or labels stay upright (<i>v</i><sub>max</sub>,
 * <i>g</i><sub>eff</sub>, <i>m</i><sub>s</sub>); a subscript the book sets
 * italic stays italic (<i>b</i><sub><i>c</i></sub>, <i>ω</i><sub><i>r</i></sub>,
 * <i>A</i><sub><i>n</i></sub>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · SHM Concepts and Kinematics ──
  // pp. 886–887, 892
  {
    topic: 0,
    kind: 'remember',
    q: 'The “ID card” of SHM: what must the acceleration do?',
    a: '<i>a</i> = −<i>ω</i><sup>2</sup><i>x</i>: proportional to the displacement and opposite in direction. From a force law <i>F</i> = −<i>kx</i>, <i>ω</i> = √(<i>k</i>/<i>m</i>)',
    why: 'The restoring force must be exactly linear: a real spring only within its elastic limit, a simple pendulum only for small angles (roughly <i>θ</i> < 10°).',
    say: '<i>a</i> opposes <i>x</i> — acceleration always points home.',
  },
  // pp. 887, 892
  {
    topic: 0,
    kind: 'remember',
    q: 'Where in SHM is the speed greatest, and where is the acceleration greatest?',
    a: '<i>v</i><sub>max</sub> = <i>Aω</i> at the mean position (<i>x</i> = 0); <i>a</i><sub>max</sub> = <i>Aω</i><sup>2</sup> at the extremes (<i>x</i> = ±<i>A</i>)',
    why: 'In between, <i>v</i> = ±<i>ω</i>√(<i>A</i><sup>2</sup> − <i>x</i><sup>2</sup>). Speed and acceleration are never maximum at the same place.',
    say: 'MAX at MEAN: speed is Maximum at the Mean; acceleration is maximum at the eXtremes.',
  },
  // pp. 887, 892
  {
    topic: 0,
    kind: 'mixup',
    q: '<i>ω</i> and <i>f</i>: how are they related, and what is the unit of each?',
    a: '<i>ω</i> = 2π<i>f</i> = 2π/<i>T</i>, with <i>ω</i> in rad s<sup>−1</sup> and <i>f</i> in hertz: they differ by a factor of 2π',
    why: 'A huge fraction of numerical slips trace back to this. If the answer needs hertz, you should have divided by 2π somewhere.',
    say: null,
  },
  // pp. 887, 892
  {
    topic: 0,
    kind: 'mistake',
    q: 'A motion repeats itself after a fixed interval. Is it SHM?',
    a: 'Not necessarily: the Earth orbiting the Sun is periodic but not SHM, and so is a sum of two different frequencies in a rational ratio',
    why: 'SHM demands a single frequency and a linear restoring force.',
    say: null,
  },
  // pp. 887, 892
  {
    topic: 0,
    kind: 'shortcut',
    q: '<i>v</i><sub>max</sub> and <i>a</i><sub>max</sub> are given. The fast way to <i>ω</i> and <i>A</i>?',
    a: '<i>ω</i> = <i>a</i><sub>max</sub>/<i>v</i><sub>max</sub> and <i>A</i> = <i>v</i><sub>max</sub><sup>2</sup>/<i>a</i><sub>max</sub>, directly: never solve simultaneous equations',
    why: 'Both come straight from <i>v</i><sub>max</sub> = <i>Aω</i> and <i>a</i><sub>max</sub> = <i>Aω</i><sup>2</sup>.',
    say: null,
  },

  // ── Topic 02 · SHM Energy ──
  // pp. 893–894, 899
  {
    topic: 1,
    kind: 'remember',
    q: 'The total mechanical energy of an SHM oscillator, and how does it scale?',
    a: '<i>E</i> = <i>K</i> + <i>U</i> = ½<i>kA</i><sup>2</sup> = ½<i>mω</i><sup>2</sup><i>A</i><sup>2</sup>, independent of <i>x</i> and <i>t</i>: double <i>A</i> and the energy goes ×4',
    why: 'It holds only for a conservative, undamped restoring force, with <i>U</i> = 0 taken at the mean position.',
    say: 'Square the swing: energy follows the square of amplitude (<i>E</i> ∝ <i>A</i><sup>2</sup>) and the square of position for PE (<i>U</i> ∝ <i>x</i><sup>2</sup>).',
  },
  // pp. 894, 899
  {
    topic: 1,
    kind: 'remember',
    q: 'The time-averaged kinetic and potential energies over one period?',
    a: '⟨<i>K</i>⟩<sub><i>t</i></sub> = ⟨<i>U</i>⟩<sub><i>t</i></sub> = <i>E</i>/2 = ¼<i>kA</i><sup>2</sup>',
    why: 'This does not mean <i>K</i> = <i>U</i> at every instant: they are equal only on average, and only at the points <i>x</i> = ±<i>A</i>/√2.',
    say: null,
  },
  // pp. 893–894, 899
  {
    topic: 1,
    kind: 'mixup',
    q: 'The displacement oscillates at frequency <i>f</i>. At what frequency do <i>K</i> and <i>U</i> oscillate?',
    a: 'At 2<i>f</i> (period <i>T</i>/2), because they contain cos<sup>2</sup> and sin<sup>2</sup> terms',
    why: 'In one cycle the particle passes the fast mean position twice and the frozen extremes twice.',
    say: null,
  },
  // pp. 894, 899
  {
    topic: 1,
    kind: 'mistake',
    q: 'Are the kinetic and potential energies equal at <i>x</i> = <i>A</i>/2?',
    a: 'No: at <i>x</i> = ±<i>A</i>/√2 ≈ ±0.707<i>A</i>, where <i>K</i> = <i>U</i> = <i>E</i>/2',
    why: 'Energy goes as <i>x</i><sup>2</sup>, so the crossover lies noticeably past the halfway mark.',
    say: 'Half-energy at A-over-root-2 — the <i>K</i> = <i>U</i> crossover lives at <i>A</i>/√2, not <i>A</i>/2.',
  },
  // pp. 894, 899
  {
    topic: 1,
    kind: 'shortcut',
    q: 'The kinetic or potential energy at a given <i>x</i>. The fast way?',
    a: 'Skip re-deriving and use the ready ratios: <i>K</i>/<i>E</i> = 1 − <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> and <i>U</i>/<i>E</i> = <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup>',
    why: 'With two landmarks, <i>K</i> = <i>U</i> at <i>x</i> = <i>A</i>/√2 and <i>E</i> ∝ <i>A</i><sup>2</sup>, they answer most objective questions on this topic.',
    say: null,
  },

  // ── Topic 03 · Pendulums and Mass-Spring Systems ──
  // pp. 901, 906–907
  {
    topic: 2,
    kind: 'remember',
    q: 'The period of a simple pendulum, and of a mass on a spring?',
    a: 'Pendulum: <i>T</i> = 2π√(<i>L</i>/<i>g</i>), for small amplitude. Spring: <i>T</i> = 2π√(<i>m</i>/<i>k</i>), horizontal or vertical',
    why: 'The pendulum’s period is independent of the bob’s mass (and, for small angles, of the amplitude); the spring’s is independent of <i>g</i>.',
    say: 'Pendulum feels gravity, spring feels stiffness.',
  },
  // pp. 901, 907
  {
    topic: 2,
    kind: 'remember',
    q: 'A pendulum hangs in a lift or a car accelerating at <i>a</i>. What replaces <i>g</i>?',
    a: '<i>g</i><sub>eff</sub>: lift going up, <i>g</i> + <i>a</i>; lift going down, <i>g</i> − <i>a</i>; car accelerating horizontally, √(<i>g</i><sup>2</sup> + <i>a</i><sup>2</sup>), with the mean position tilted by tan<sup>−1</sup>(<i>a</i>/<i>g</i>) from the vertical',
    why: 'Accelerating up shortens the period, down lengthens it; in free fall (<i>a</i> = <i>g</i>) there is no oscillation.',
    say: null,
  },
  // pp. 901, 906–907
  {
    topic: 2,
    kind: 'mixup',
    q: 'Springs in series and springs in parallel: which combination is stiffer?',
    a: 'Parallel: <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>, stiffer, shorter <i>T</i>. Series: 1/<i>k</i><sub>eff</sub> = 1/<i>k</i><sub>1</sub> + 1/<i>k</i><sub>2</sub>, softer, longer <i>T</i>',
    why: 'This is the reverse of the resistor rule: do not borrow that intuition.',
    say: 'Parallel = Powerful (stiffer), Series = Soft.',
  },
  // pp. 901, 906
  {
    topic: 2,
    kind: 'mistake',
    q: 'A spring of constant <i>k</i> is cut into <i>n</i> equal pieces. Is each piece weaker?',
    a: 'No, stiffer: <i>k</i><sub>piece</sub> = <i>nk</i>',
    why: 'Each piece stretches only 1/<i>n</i> as much under the same force.',
    say: null,
  },
  // pp. 901, 907
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A vertical spring’s static stretch <i>x</i><sub>0</sub> is given, but not <i>m</i> or <i>k</i>. The period?',
    a: '<i>T</i> = 2π√(<i>x</i><sub>0</sub>/<i>g</i>), directly',
    why: 'At equilibrium <i>mg</i> = <i>kx</i><sub>0</sub>, so <i>m</i>/<i>k</i> = <i>x</i><sub>0</sub>/<i>g</i>: it sidesteps the missing data.',
    say: null,
  },

  // ── Topic 04 · Damped and Forced Oscillations ──
  // pp. 908–909, 914–915
  {
    topic: 3,
    kind: 'remember',
    q: 'A lightly damped oscillator: its displacement, and does its frequency change noticeably?',
    a: '<i>x</i> = <i>A</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup> cos(<i>ω</i>′<i>t</i> + <i>φ</i>), with <i>ω</i>′ = √(<i>ω</i><sub>0</sub><sup>2</sup> − (<i>b</i>/(2<i>m</i>))<sup>2</sup>) ≈ <i>ω</i><sub>0</sub>: the frequency barely changes',
    why: 'The visible effect of light damping is a shrinking amplitude, not a slower oscillation: the frequency shift goes as <i>b</i><sup>2</sup>.',
    say: null,
  },
  // pp. 909, 914–915
  {
    topic: 3,
    kind: 'remember',
    q: 'A forced oscillator: its steady-state amplitude, and where is it largest?',
    a: '<i>A</i> = (<i>F</i><sub>0</sub>/<i>m</i>)/√((<i>ω</i><sup>2</sup> − <i>ω</i><sub>0</sub><sup>2</sup>)<sup>2</sup> + (<i>bω</i>/<i>m</i>)<sup>2</sup>). For light damping it peaks at resonance, <i>ω</i> ≈ <i>ω</i><sub>0</sub>, where <i>A</i><sub>res</sub> ≈ <i>F</i><sub>0</sub>/(<i>bω</i><sub>0</sub>)',
    why: 'In the steady state the system vibrates at the driving frequency, never at its own natural frequency.',
    say: 'Resonance = matching rhythm: biggest amplitude when the drive matches the natural frequency.',
  },
  // pp. 909, 914–915
  {
    topic: 3,
    kind: 'mixup',
    q: 'Underdamped, critically damped, overdamped (<i>b</i><sub><i>c</i></sub> = 2√(<i>mk</i>)): what does each do?',
    a: 'Underdamped (<i>b</i> < <i>b</i><sub><i>c</i></sub>): oscillates with decaying amplitude. Critical (<i>b</i> = <i>b</i><sub><i>c</i></sub>): the fastest return to equilibrium without oscillating. Overdamped (<i>b</i> > <i>b</i><sub><i>c</i></sub>): no oscillation, but a slower return',
    why: 'A door-closer, a galvanometer needle and a car shock absorber all need critical damping.',
    say: null,
  },
  // pp. 909, 914–915
  {
    topic: 3,
    kind: 'mistake',
    q: 'A damped oscillator’s amplitude decays as <i>e</i><sup>−<i>bt</i>/(2<i>m</i>)</sup>. Does its energy decay at the same rate?',
    a: 'No: <i>E</i> = <i>E</i><sub>0</sub><i>e</i><sup>−<i>bt</i>/<i>m</i></sup>, twice as fast, because <i>E</i> ∝ <i>A</i><sup>2</sup>',
    why: 'The energy time-constant is half the amplitude time-constant: an amplitude down to 1/√2 means the energy is down to ½.',
    say: 'Energy is amplitude squared, so it fades twice as fast.',
  },
  // pp. 914–915
  {
    topic: 3,
    kind: 'shortcut',
    q: 'An “amplitude falls to a fraction” problem. The fast way?',
    a: 'Use the equal-interval property of exponentials: each fixed-ratio drop takes the same time, so you rarely need to solve for <i>b</i> at all',
    why: 'For sharpness under light damping, <i>Q</i> = <i>mω</i><sub>0</sub>/<i>b</i> = 2π/(fractional energy lost per cycle), and the oscillator rings for about <i>Q</i>/(2π) cycles before its energy falls to 1/<i>e</i>.',
    say: null,
  },

  // ── Topic 05 · Reference Circle, Superposition & More SHM Systems ──
  // pp. 917, 922–923
  {
    topic: 4,
    kind: 'remember',
    q: 'Two perpendicular SHMs of equal frequency, <i>x</i> = <i>A</i> cos <i>ωt</i> and <i>y</i> = <i>B</i> cos(<i>ωt</i> + <i>δ</i>). What path does the particle trace?',
    a: '<i>δ</i> = 0 or π: a straight line. <i>δ</i> = π/2: the ellipse <i>x</i><sup>2</sup>/<i>A</i><sup>2</sup> + <i>y</i><sup>2</sup>/<i>B</i><sup>2</sup> = 1, a circle if <i>A</i> = <i>B</i>',
    why: 'Unequal frequencies give Lissajous figures; the frequency ratio sets the number of loops.',
    say: null,
  },
  // pp. 917, 922–923
  {
    topic: 4,
    kind: 'remember',
    q: 'The look-alike periods of a simple pendulum, a floating body and a tunnel through the Earth?',
    a: '2π√(<i>L</i>/<i>g</i>); 2π√(<i>h</i>/<i>g</i>), with <i>h</i> the equilibrium submerged depth; 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min. Same skeleton, different length',
    why: 'A U-tube is 2π√(<i>L</i>/(2<i>g</i>)), <i>L</i> the total length of the liquid column. All assume ideal conditions: uniform cross-section, uniform Earth density, no friction or drag.',
    say: 'The period-twins: √(<i>L</i>/<i>g</i>), √(<i>h</i>/<i>g</i>), √(<i>R</i>/<i>g</i>) — pendulum, float, planet.',
  },
  // pp. 916–917, 922
  {
    topic: 4,
    kind: 'mixup',
    q: 'On the reference circle, which moves at constant speed: the bead, or its shadow on the diameter?',
    a: 'The bead, which circulates uniformly at angular speed <i>ω</i>. Its shadow, the SHM, speeds up and slows down',
    why: 'Radius = amplitude, circulation rate = <i>ω</i>, swept angle = phase. Over a cycle the shadow’s average speed is 4<i>A</i>/<i>T</i> = 2<i>Aω</i>/π.',
    say: null,
  },
  // pp. 917, 922
  {
    topic: 4,
    kind: 'mistake',
    q: 'Two collinear SHMs of the same frequency, amplitudes 3 and 4, are added. Is the resultant amplitude 7?',
    a: 'Only if they are in phase. In general it lies between 1 and 7: <i>A</i> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>δ</i>)',
    why: 'In phase (<i>δ</i> = 0): <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>. Anti-phase (<i>δ</i> = π): |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>|. Quadrature (<i>δ</i> = π/2): √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup>).',
    say: null,
  },
  // pp. 917, 922–923
  {
    topic: 4,
    kind: 'shortcut',
    q: 'An unfamiliar oscillating system. How do you find its period without a memorised formula?',
    a: 'Run the universal recipe: displace by <i>x</i>, find the net restoring force (or write the energy and differentiate), force it into the shape d<sup>2</sup><i>x</i>/d<i>t</i><sup>2</sup> = −<i>ω</i><sup>2</sup><i>x</i>, and read off <i>ω</i>',
    why: 'The test certifies SHM only for small displacements, where the restoring effect stays linear.',
    say: 'One test rules them all: a motion is SHM exactly when acceleration = −<i>ω</i><sup>2</sup> × displacement.',
  },

  // ── Additional A · Energy Method for Time Period & The Potential-Energy Curve ──
  // pp. 924–925
  {
    topic: 5,
    kind: 'remember',
    q: 'The energy method for the period of a 1-D conservative system?',
    a: 'Write <i>E</i> = <i>K</i> + <i>U</i> in one coordinate <i>q</i>, set d<i>E</i>/d<i>t</i> = 0 and factor out <i>q̇</i>: the remaining bracket has the form <i>q̈</i> + <i>ω</i><sup>2</sup><i>q</i> = 0 (for small <i>q</i>). Read off <i>ω</i>',
    why: 'It is the universal backup when the forces are messy but the energy is clean: a piston compressing gas, a rolling cylinder, a particle in a potential well.',
    say: null,
  },
  // pp. 925–927
  {
    topic: 5,
    kind: 'remember',
    q: 'A particle of mass <i>m</i> moves in a potential <i>U</i>(<i>x</i>) with a stable equilibrium at <i>x</i> = 0. Its angular frequency of small oscillations?',
    a: '<i>ω</i> = √(<i>U</i>″(0)/<i>m</i>), from <i>U</i>(<i>x</i>) ≈ <i>U</i>(0) + ½<i>U</i>″(0)<i>x</i><sup>2</sup>: no force calculation needed',
    why: 'Only the curvature at the bottom matters: for <i>U</i> = <i>U</i><sub>0</sub>(<i>x</i><sup>2</sup>/<i>a</i><sup>2</sup> − <i>x</i><sup>4</sup>/<i>b</i><sup>4</sup>), <i>ω</i> = √(2<i>U</i><sub>0</sub>/(<i>ma</i><sup>2</sup>)), independent of <i>b</i>.',
    say: null,
  },

  // ── Additional B · Spring Systems Beyond Series and Parallel ──
  // pp. 929–930, 932
  {
    topic: 6,
    kind: 'remember',
    q: 'A uniform spring of mass <i>m</i><sub>s</sub> and constant <i>k</i> carries a load <i>M</i>. Its period?',
    a: '<i>T</i> = 2π√((<i>M</i> + <i>m</i><sub>s</sub>/3)/<i>k</i>): the spring behaves as if an extra mass <i>m</i><sub>s</sub>/3 were added to the load',
    why: 'This assumes the spring stretches uniformly. Hung vertically, gravity shifts the equilibrium but not the period.',
    say: null,
  },
  // p. 930
  {
    topic: 6,
    kind: 'mixup',
    q: 'A mass held between two springs <i>k</i><sub>1</sub> and <i>k</i><sub>2</sub> fixed to opposite walls, and a mass on the end of the same two springs joined end to end: <i>k</i><sub>eff</sub> for each?',
    a: 'Between the walls: <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>, like parallel. Joined end to end: <i>k</i><sub>eff</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>), series',
    why: 'Displace the middle mass by <i>x</i> and both springs pull it back: <i>F</i> = −(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)<i>x</i>.',
    say: null,
  },

  // ── Additional C · Phase, Time, and Fraction-of-Period Calculations ──
  // pp. 932–933
  {
    topic: 7,
    kind: 'remember',
    q: 'Starting from the mean position, how long does a particle in SHM take to reach <i>A</i>/2, <i>A</i>/√2 and <i>A</i>?',
    a: '<i>T</i>/12, <i>T</i>/8 and <i>T</i>/4 (phase spans π/6, π/4 and π/2)',
    why: 'Time = phase difference ÷ <i>ω</i>, so <i>A</i>/2 to <i>A</i> takes <i>T</i>/4 − <i>T</i>/12 = <i>T</i>/6.',
    say: null,
  },
  // pp. 933–934
  {
    topic: 7,
    kind: 'remember',
    q: 'What fraction of each period does a particle in SHM spend with |<i>x</i>| > <i>A</i>/2?',
    a: '2/3 of the period (2<i>T</i>/3); it spends only 1/3 with |<i>x</i>| < <i>A</i>/2',
    why: 'Fraction of period = phase span ÷ 2π, here 4π/3 out of 2π. By the same method, the speed exceeds <i>v</i><sub>max</sub>/√2 for half of each period.',
    say: null,
  },

  // ── Additional D · Superposition of Different Frequencies: Beats and Amplitude Modulation ──
  // p. 935
  {
    topic: 8,
    kind: 'remember',
    q: 'Two equal-amplitude SHMs of slightly different frequencies <i>ω</i><sub>1</sub> ≈ <i>ω</i><sub>2</sub> are added. What do you get?',
    a: 'A fast oscillation at <i>ω</i><sub>avg</sub> = (<i>ω</i><sub>1</sub> + <i>ω</i><sub>2</sub>)/2 inside a slow envelope 2<i>A</i>|cos(Δ<i>ω t</i>/2)|. The beat frequency is <i>f</i><sub>beat</sub> = <i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>',
    why: 'The factor cos(Δ<i>ω t</i>/2) goes from maximum to zero to maximum in half its own period (2π/Δ<i>ω</i>), so the beat angular frequency is Δ<i>ω</i>, not Δ<i>ω</i>/2.',
    say: null,
  },
  // p. 935
  {
    topic: 8,
    kind: 'remember',
    q: 'Beats with unequal amplitudes <i>A</i><sub>1</sub> ≠ <i>A</i><sub>2</sub>: between what limits does the envelope swing?',
    a: 'Between |<i>A</i><sub>1</sub> − <i>A</i><sub>2</sub>| and <i>A</i><sub>1</sub> + <i>A</i><sub>2</sub>, with <i>A</i><sub>env</sub><sup>2</sup> = <i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos(Δ<i>ω t</i>)',
    why: 'There is no complete cancellation. This is the amplitude modulation formula: the carrier is at <i>ω</i><sub>avg</sub>, the modulation at Δ<i>ω</i>.',
    say: null,
  },

  // ── Additional E · Damped Oscillations: Logarithmic Decrement, Resonance Nuances, and Power Absorption ──
  // p. 938
  {
    topic: 9,
    kind: 'remember',
    q: 'The logarithmic decrement of a damped oscillator, and its link to <i>Q</i>?',
    a: '<i>δ</i> = ln(<i>A</i><sub><i>n</i></sub>/<i>A</i><sub><i>n</i>+1</sub>) = <i>bT</i>′/(2<i>m</i>); for light damping, <i>δ</i> ≈ π/<i>Q</i>',
    why: '<i>A</i><sub><i>n</i></sub> and <i>A</i><sub><i>n</i>+1</sub> are successive maxima, one period <i>T</i>′ apart: measure <i>δ</i> from them to find <i>b</i>/<i>m</i> or <i>Q</i>.',
    say: null,
  },
  // p. 938
  {
    topic: 9,
    kind: 'mixup',
    q: 'Amplitude resonance and velocity resonance: at what driving frequency does each occur?',
    a: 'Amplitude: <i>ω</i><sub><i>r</i></sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>b</i><sup>2</sup>/(2<i>m</i><sup>2</sup>)), just below <i>ω</i><sub>0</sub>. Velocity (maximum speed, kinetic energy and power absorbed): exactly <i>ω</i><sub>0</sub>, for any damping',
    why: 'The power curve’s full width at half maximum is Δ<i>ω</i> = <i>b</i>/<i>m</i> = <i>ω</i><sub>0</sub>/<i>Q</i>.',
    say: null,
  },

  // ── Additional F · The “Prove It’s SHM” Laboratory: Potential Expansion and Non-Standard Systems ──
  // pp. 940–941
  {
    topic: 10,
    kind: 'remember',
    q: 'A body with <i>I</i> = <i>cmR</i><sup>2</sup> rolls without slipping in a small-oscillation problem. Its effective mass?',
    a: '<i>m</i><sub>eff</sub> = <i>m</i> + <i>I</i>/<i>R</i><sup>2</sup> = <i>m</i>(1 + <i>c</i>): ring 2<i>m</i>, disc or cylinder 1.5<i>m</i>, solid sphere 1.4<i>m</i>, hollow sphere 1.67<i>m</i>',
    why: 'Then <i>ω</i><sup>2</sup> = <i>U</i>″(<i>q</i><sub>0</sub>)/<i>m</i><sub>eff</sub>: a solid sphere of radius <i>r</i> rolling in a bowl of radius <i>R</i> has <i>T</i> = 2π√(7(<i>R</i> − <i>r</i>)/(5<i>g</i>)).',
    say: null,
  },
  // p. 942
  {
    topic: 10,
    kind: 'remember',
    q: 'A frictionless piston of mass <i>M</i>, with vacuum above it, rests on gas at height <i>h</i><sub>0</sub> in a vertical cylinder. Its period of small oscillations if the gas changes isothermally?',
    a: '<i>T</i> = 2π√(<i>h</i><sub>0</sub>/<i>g</i>): that of a simple pendulum of length <i>h</i><sub>0</sub>, independent of the properties of the gas',
    why: 'For an adiabatic gas the period is shorter by the factor 1/√<i>γ</i>.',
    say: null,
  },
];
