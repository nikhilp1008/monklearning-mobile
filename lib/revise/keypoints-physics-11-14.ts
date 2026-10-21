/**
 * KEY POINTS for Physics Class 11, Chapter 14 (Waves).
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
 * sheet's memory aids, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Subscripts
 * that are words or labels stay upright (<i>f</i><sub>beat</sub>,
 * <i>L</i><sub>eff</sub>); a subscript the book sets italic stays italic
 * (<i>v</i><sub><i>s</i></sub>, <i>v</i><sub><i>o</i></sub>, <i>f</i><sub><i>n</i></sub>,
 * <i>T</i><sub><i>A</i></sub>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Wave Characteristics and Speed ──
  // pp. 947, 954
  {
    topic: 0,
    kind: 'remember',
    q: 'The master relation for wave speed, and the equation of a harmonic wave moving in the +<i>x</i> direction?',
    a: '<i>v</i> = <i>fλ</i> = <i>λ</i>/<i>T</i> = <i>ω</i>/<i>k</i>, with <i>ω</i> = 2π<i>f</i> and <i>k</i> = 2π/<i>λ</i>; <i>y</i> = <i>A</i> sin(<i>ωt</i> − <i>kx</i> + <i>φ</i>)',
    why: 'For motion in the −<i>x</i> direction, the sign between <i>ωt</i> and <i>kx</i> flips to +.',
    say: null,
  },
  // pp. 947, 954
  {
    topic: 0,
    kind: 'remember',
    q: 'The speed of a transverse wave on a stretched string: what does it depend on?',
    a: '<i>v</i> = √(<i>T</i>/<i>μ</i>): only on the medium (the tension <i>T</i> and the mass per unit length <i>μ</i>), never on the amplitude or the frequency',
    why: 'The formula assumes a perfectly flexible, uniform string under constant tension.',
    say: 'Tight and light goes fast — high tension <i>T</i>, low density <i>μ</i> ⇒ high <i>v</i>.',
  },
  // pp. 948, 953–954
  {
    topic: 0,
    kind: 'mixup',
    q: 'Wave velocity and particle velocity: what does each measure?',
    a: 'The wave speed <i>v</i> = <i>ω</i>/<i>k</i> is how fast the pattern moves. The particle velocity <i>v</i><sub><i>p</i></sub> = ∂<i>y</i>/∂<i>t</i> = <i>Aω</i> cos(<i>ωt</i> − <i>kx</i>), at most <i>Aω</i>, is how fast a bit of the medium moves',
    why: 'They are different quantities with different formulas.',
    say: null,
  },
  // pp. 948, 953–954
  {
    topic: 0,
    kind: 'mistake',
    q: 'A sound wave passes from air into water. Does its frequency change?',
    a: 'No: the source sets <i>f</i>, and it stays the same across media. <i>v</i> and <i>λ</i> change together',
    why: 'Sound is faster in water, so with <i>f</i> fixed the wavelength increases.',
    say: 'Source sets the frequency, medium sets the speed.',
  },
  // pp. 953–954
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Two strings of the same material but different thickness. The fast way to compare their wave speeds?',
    a: 'Go straight to ratios: <i>v</i> ∝ √(<i>T</i>/<i>r</i><sup>2</sup>) = √<i>T</i>/<i>r</i>',
    why: 'For the same material, <i>μ</i> ∝ <i>d</i><sup>2</sup> ∝ <i>r</i><sup>2</sup>: ignoring this is the most common error in two-string ratio questions.',
    say: 'Same material? Then <i>μ</i> ∝ <i>r</i><sup>2</sup> — don’t forget the radius.',
  },

  // ── Topic 02 · Superposition and Beats ──
  // pp. 956, 962
  {
    topic: 1,
    kind: 'remember',
    q: 'Two waves of the same frequency meet with phase difference <i>φ</i>. The resultant amplitude, and the conditions for constructive and destructive interference?',
    a: '<i>A</i><sub>res</sub> = √(<i>A</i><sub>1</sub><sup>2</sup> + <i>A</i><sub>2</sub><sup>2</sup> + 2<i>A</i><sub>1</sub><i>A</i><sub>2</sub> cos <i>φ</i>). Constructive: <i>φ</i> = 2<i>n</i>π, or path difference Δ<i>x</i> = <i>nλ</i>. Destructive: <i>φ</i> = (2<i>n</i> + 1)π, or Δ<i>x</i> = (2<i>n</i> + 1)<i>λ</i>/2',
    why: 'A steady interference pattern needs coherent sources: the same frequency and a constant phase relationship.',
    say: null,
  },
  // pp. 956, 962
  {
    topic: 1,
    kind: 'remember',
    q: 'The resultant intensity of two coherent waves, and its maximum and minimum?',
    a: '<i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos <i>φ</i>; <i>I</i><sub>max</sub> = (√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)<sup>2</sup>, <i>I</i><sub>min</sub> = (√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>)<sup>2</sup>',
    why: 'This follows from <i>I</i> ∝ <i>A</i><sup>2</sup>. Only for incoherent sources do intensities simply add.',
    say: null,
  },
  // pp. 962–963
  {
    topic: 1,
    kind: 'mixup',
    q: 'Interference and beats: which do you get when?',
    a: 'Same frequency: an interference pattern in space. Nearly equal frequencies: beats in time',
    why: 'They are different phenomena with different formulas.',
    say: 'Same <i>f</i> → pattern in space; close <i>f</i> → throb in time.',
  },
  // pp. 956, 962–963
  {
    topic: 1,
    kind: 'mistake',
    q: 'Two sources of frequencies <i>f</i><sub>1</sub> and <i>f</i><sub>2</sub> sound together. Is the beat frequency |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|/2?',
    a: 'No: <i>f</i><sub>beat</sub> = |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>|. The half belongs to the amplitude envelope; the loudness throbs at twice that',
    why: 'Beats need close frequencies: if |<i>f</i><sub>1</sub> − <i>f</i><sub>2</sub>| exceeds about 10 Hz, the throbs come too fast for the ear and you hear a blur.',
    say: 'Beat = the difference, plain and simple — no halving.',
  },
  // pp. 962–963
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A fork is loaded with wax and the number of beats with a standard fork changes. Which candidate frequency was it?',
    a: 'Wax lowers the frequency. If the beats decrease after loading, the fork was above the standard (take the higher candidate); if they increase, it was below (take the lower)',
    why: 'Faster, once you trust it: just ask “did the fork move toward or away from the standard?”',
    say: 'Wax weighs it down — wax lowers frequency; filing files it up.',
  },

  // ── Topic 03 · Standing Waves and Acoustics ──
  // pp. 965–966, 972
  {
    topic: 2,
    kind: 'remember',
    q: 'The natural frequencies of a string fixed at both ends or an open pipe, and of a closed pipe, each of length <i>L</i>?',
    a: 'String or open pipe: <i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>), all harmonics (<i>n</i> = 1, 2, 3, …). Closed pipe: <i>f</i><sub><i>n</i></sub> = (2<i>n</i> − 1)<i>v</i>/(4<i>L</i>), odd harmonics only',
    why: 'For the same length, open ∶ closed fundamental = 2 ∶ 1: the closed pipe is one octave lower.',
    say: 'Closed = odd only; open = all.',
  },
  // pp. 965–966, 971–972
  {
    topic: 2,
    kind: 'remember',
    q: 'A resonance tube resonates first at length <i>l</i><sub>1</sub>, then at <i>l</i><sub>2</sub>. The wavelength, the speed of sound and the end correction?',
    a: '<i>λ</i> = 2(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>), <i>v</i> = 2<i>f</i>(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>), <i>e</i> = (<i>l</i><sub>2</sub> − 3<i>l</i><sub>1</sub>)/2',
    why: 'The antinode lies beyond the open end by <i>e</i> ≈ 0.6<i>r</i>, but the difference of two resonance lengths cancels it.',
    say: 'Subtract the resonance lengths — the end correction disappears.',
  },
  // pp. 965, 971–972
  {
    topic: 2,
    kind: 'mixup',
    q: 'At the closed end of a pipe: a displacement node or antinode? A pressure node or antinode?',
    a: 'A displacement node but a pressure antinode. The two patterns are always opposite',
    why: 'Spacing is the other common mix-up: node to node is <i>λ</i>/2, node to the nearest antinode <i>λ</i>/4.',
    say: null,
  },
  // pp. 966, 971–972
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the first overtone of a closed pipe its 2nd harmonic?',
    a: 'No: it is the 3rd harmonic, 3<i>f</i><sub>1</sub>. A closed pipe allows only odd harmonics, so its overtones skip the evens',
    why: 'For an open pipe or a string, the first overtone is the 2nd harmonic.',
    say: 'Closed pipe’s first overtone leapfrogs to 3<i>f</i><sub>1</sub>.',
  },
  // p. 971
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Three successive resonance frequencies of a pipe are given. Open or closed, and what is the fundamental?',
    a: 'Take the common difference Δ. If the smallest frequency ÷ Δ is a whole number, it is an open pipe with <i>f</i><sub>1</sub> = Δ; if not, a closed pipe with <i>f</i><sub>1</sub> = Δ/2',
    why: 'A closed pipe has only odd harmonics, so its successive resonances differ by 2<i>f</i><sub>1</sub>.',
    say: null,
  },

  // ── Topic 04 · Doppler Effect ──
  // pp. 974, 980–981
  {
    topic: 3,
    kind: 'remember',
    q: 'The general Doppler formula for sound, and its sign rule?',
    a: '<i>f</i>′ = <i>f</i>(<i>v</i> ± <i>v</i><sub><i>o</i></sub>)/(<i>v</i> ∓ <i>v</i><sub><i>s</i></sub>): +<i>v</i><sub><i>o</i></sub> if the observer moves toward the source, −<i>v</i><sub><i>s</i></sub> if the source moves toward the observer',
    why: 'It holds for motion along the line joining source and observer, with <i>v</i><sub><i>s</i></sub> < <i>v</i>; at or above the speed of sound a shock wave forms and the formula no longer applies.',
    say: 'Toward raises, away lowers — the universal sanity check.',
  },
  // pp. 980–981
  {
    topic: 3,
    kind: 'remember',
    q: 'The Doppler shift for light from a source moving at <i>u</i> ≪ <i>c</i>?',
    a: '<i>f</i>′ = <i>f</i>(1 ± <i>u</i>/<i>c</i>) and Δ<i>λ</i>/<i>λ</i> = <i>u</i>/<i>c</i>: a redshift (longer wavelength) means receding, a blueshift approaching',
    why: 'A Doppler shift is not a thermal (blackbody) colour change: that is different physics entirely.',
    say: 'Red runs away — redshift means receding.',
  },
  // pp. 974, 980–981
  {
    topic: 3,
    kind: 'mixup',
    q: 'For sound, does a moving source give the same shift as an observer moving at the same speed?',
    a: 'No, they give different answers: <i>v</i><sub><i>s</i></sub> goes in the denominator, <i>v</i><sub><i>o</i></sub> in the numerator. Never swap them',
    why: 'For sound the medium is the reference frame: a wind <i>w</i> blowing from source to observer replaces <i>v</i> with <i>v</i> + <i>w</i> everywhere.',
    say: '<i>v</i><sub><i>s</i></sub> down below, <i>v</i><sub><i>o</i></sub> up top — source in denominator, observer in numerator.',
  },
  // pp. 974, 980
  {
    topic: 3,
    kind: 'mistake',
    q: 'A source moves at an angle to the line of sight. Does its full speed go into the Doppler formula?',
    a: 'No: only the component of its velocity along the line joining source and observer counts',
    why: 'Sound emitted while the motion is purely sideways (at closest approach) has no shift; from a moving source it reaches you a moment later.',
    say: null,
  },
  // p. 980
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A car moving at <i>u</i> toward a wall sounds its horn of frequency <i>f</i>. The echo frequency the driver hears, and the beats with the direct sound?',
    a: '<i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>); <i>f</i><sub>beat</sub> = 2<i>uf</i>/(<i>v</i> − <i>u</i>)',
    why: 'Recognising the wall as a “stationary mirror” turns a messy double-Doppler into one clean line.',
    say: null,
  },

  // ── Additional A · Power and Energy in a Travelling Wave on a String ──
  // pp. 983, 985
  {
    topic: 4,
    kind: 'remember',
    q: 'The average power carried by a harmonic wave on a string?',
    a: '<i>P</i><sub>avg</sub> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup><i>v</i>; the average energy per unit length is <i>P</i><sub>avg</sub>/<i>v</i> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup>',
    why: 'So <i>P</i> ∝ <i>A</i><sup>2</sup><i>ω</i><sup>2</sup>: doubling the amplitude and halving the frequency leaves the power unchanged.',
    say: null,
  },
  // p. 983
  {
    topic: 4,
    kind: 'remember',
    q: 'In a travelling wave on a string, how do the kinetic and potential energy densities compare?',
    a: 'They are equal at every point and every instant: the equipartition result for a travelling wave',
    why: 'It follows from ∂<i>y</i>/∂<i>t</i> = ∓<i>v</i> ∂<i>y</i>/∂<i>x</i> and <i>T</i> = <i>μv</i><sup>2</sup>.',
    say: null,
  },

  // ── Additional B · Reflection and Transmission at a Junction of Two Strings ──
  // pp. 986–987
  {
    topic: 5,
    kind: 'remember',
    q: 'A wave on string 1 reaches a junction with string 2, under the same tension. The amplitude reflection and transmission coefficients?',
    a: '<i>R</i> = (<i>Z</i><sub>1</sub> − <i>Z</i><sub>2</sub>)/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>), <i>T</i><sub><i>A</i></sub> = 2<i>Z</i><sub>1</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>), with the impedance <i>Z</i> = √(<i>Tμ</i>)',
    why: 'A fixed end (<i>Z</i><sub>2</sub> → ∞) gives <i>R</i> → −1, a phase reversal; a free end (<i>Z</i><sub>2</sub> → 0) gives <i>R</i> → +1.',
    say: null,
  },
  // pp. 986–987
  {
    topic: 5,
    kind: 'remember',
    q: 'At the same junction, what fractions of the incident power are reflected and transmitted?',
    a: '<i>R</i><sub><i>E</i></sub> = <i>R</i><sup>2</sup>; <i>T</i><sub><i>E</i></sub> = 4<i>Z</i><sub>1</sub><i>Z</i><sub>2</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup>, and <i>R</i><sub><i>E</i></sub> + <i>T</i><sub><i>E</i></sub> = 1',
    why: 'Power ∝ <i>ZA</i><sup>2</sup>, so <i>T</i><sub><i>E</i></sub> = (<i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub>)<i>T</i><sub><i>A</i></sub><sup>2</sup>, not <i>T</i><sub><i>A</i></sub><sup>2</sup>.',
    say: null,
  },

  // ── Additional C · The Wave Equation, General Solution, and Non-Sinusoidal Pulses ──
  // p. 989
  {
    topic: 6,
    kind: 'remember',
    q: 'The wave equation for a string, and its general solution?',
    a: '∂<sup>2</sup><i>y</i>/∂<i>t</i><sup>2</sup> = <i>v</i><sup>2</sup> ∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup>, with <i>v</i><sup>2</sup> = <i>T</i>/<i>μ</i>; <i>y</i>(<i>x</i>, <i>t</i>) = <i>f</i>(<i>x</i> − <i>vt</i>) + <i>g</i>(<i>x</i> + <i>vt</i>)',
    why: '<i>f</i> is a right-moving wave and <i>g</i> a left-moving one; any twice-differentiable functions will do.',
    say: null,
  },
  // pp. 990–991
  {
    topic: 6,
    kind: 'remember',
    q: 'A string is pulled into a shape <i>φ</i>(<i>x</i>) and released from rest. What happens to the pulse?',
    a: 'It splits into two half-amplitude copies travelling in opposite directions: <i>y</i>(<i>x</i>, <i>t</i>) = ½<i>φ</i>(<i>x</i> − <i>vt</i>) + ½<i>φ</i>(<i>x</i> + <i>vt</i>)',
    why: 'This is the standard way to handle non-sinusoidal pulses: a Gaussian or a triangle becomes two of half the height.',
    say: null,
  },

  // ── Additional D · Longitudinal Standing Waves: Rods, End Correction, and Pressure–Displacement Duality ──
  // p. 993
  {
    topic: 7,
    kind: 'remember',
    q: 'The longitudinal harmonics of a rod of length <i>L</i>, fixed–fixed, free–free and fixed–free?',
    a: 'Fixed–fixed and free–free: <i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>), all harmonics. Fixed–free: <i>f</i><sub><i>n</i></sub> = (2<i>n</i> − 1)<i>v</i>/(4<i>L</i>), odd harmonics only. Here <i>v</i> = √(<i>Y</i>/<i>ρ</i>)',
    why: 'A fixed end is a displacement node and a free end a displacement antinode, exactly like the closed and open ends of a pipe.',
    say: null,
  },
  // p. 994
  {
    topic: 7,
    kind: 'remember',
    q: 'The end correction of an open pipe of radius <i>r</i>, and the effective lengths of open and closed pipes?',
    a: '<i>e</i> ≈ 0.6<i>r</i> (unflanged pipe). Open pipe: <i>L</i><sub>eff</sub> = <i>L</i> + 2<i>e</i> = <i>L</i> + 1.2<i>r</i>. Closed pipe: <i>L</i><sub>eff</sub> = <i>L</i> + <i>e</i> = <i>L</i> + 0.6<i>r</i>',
    why: 'The air just outside an open end is also set in motion, so the effective length exceeds the geometric length; resonance frequencies use <i>L</i><sub>eff</sub>.',
    say: null,
  },
];
