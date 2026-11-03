/**
 * KEY POINTS for Physics Class 12, Chapter 7 (Alternating Current).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic` follows the app's order, which is the book's page order (the book
 * numbers its sub-topics 00, 01, 04, 02, 03): 0 = Topic 01 AC Fundamentals
 * (book Subtopic 00), 1 = Topic 02 AC Voltage across R, L, C and LCR (book
 * 01), 2 = Topic 03 LC Oscillations (book 04), 3 = Topic 04 Resonance and
 * Q-Factor (book 02), 4 = Topic 05 Power in AC Circuits and Transformers
 * (book 03); Additional topics A–E are 5–9. Cross-references use the app's
 * numbers.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's mnemonic, word for word. Additional topics: the Supplement's
 * addenda (the p. 516 Summary of Key Results is not used).
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Label
 * subscripts are upright (<i>V</i><sub>rms</sub>, <i>X</i><sub>L</sub>,
 * <i>X</i><sub>C</sub>, <i>i</i><sub>m</sub>, <i>ω</i><sub>0</sub>,
 * <i>P</i><sub>avg</sub>, <i>V</i><sub>s</sub>); a subscript that is an index
 * stays italic. Circuit names (LCR, LC, RLC) are upright, as printed. π is
 * upright; the phase angle is φ; the imaginary unit is <i>j</i>, as in the
 * Supplement; the exponential <i>e</i> is italic.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · AC Fundamentals: Average & RMS Values and Phasors ──
  // pp. 460–461, 465–466
  {
    topic: 0,
    kind: 'remember',
    q: 'The rms value and the half-cycle mean value of a sinusoidal current <i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i>?',
    a: '<i>I</i><sub>rms</sub> = <i>i</i><sub>m</sub>/√2 = 0.707 <i>i</i><sub>m</sub>, the DC-equivalent heating value that meters read; <i>I</i><sub>avg</sub> = 2<i>i</i><sub>m</sub>/π = 0.637 <i>i</i><sub>m</sub>, averaged over the positive half cycle',
    why: 'For a pure sinusoid only: a square, triangular or rectified wave has different factors. Form factor <i>I</i><sub>rms</sub>/<i>I</i><sub>avg</sub> = π/(2√2) = 1.11; peak factor <i>i</i><sub>m</sub>/<i>I</i><sub>rms</sub> = √2 = 1.414.',
    say: null,
  },
  // pp. 463–466
  {
    topic: 0,
    kind: 'remember',
    q: 'A current <i>i</i> = (3 + 4 sin <i>ωt</i>) A, a steady 3 A with a 4 A peak AC on top, flows through a 5 Ω resistor. Its rms value and average power?',
    a: 'Mean squares add: ⟨<i>i</i><sup>2</sup>⟩ = 9 + 0 + 8 = 17, so <i>I</i><sub>rms</sub> = √17 ≈ 4.12 A and <i>P</i><sub>avg</sub> = 17 × 5 = 85 W. Adding the rms values directly is wrong',
    why: 'The DC and AC parts heat independently because the cross term 24 sin <i>ωt</i> averages to zero over a cycle. So do sin <i>ωt</i> and cos <i>ωt</i> of one frequency: 2 + 3 sin <i>ωt</i> + 4 cos <i>ωt</i> (A) has <i>I</i><sub>rms</sub> = √16.5 = 4.06 A.',
    say: null,
  },
  // pp. 461, 464–466
  {
    topic: 0,
    kind: 'mixup',
    q: 'For <i>i</i> = <i>i</i><sub>m</sub> sin <i>ωt</i>: which is 2<i>i</i><sub>m</sub>/π, which is <i>i</i><sub>m</sub>/√2, and which is zero?',
    a: '2<i>i</i><sub>m</sub>/π is the mean over a half cycle, <i>i</i><sub>m</sub>/√2 is the rms value, and zero is the average over a complete cycle',
    why: 'Always say which “average” you mean. Sanity check for a sinusoid: the rms sits between the half-cycle mean and the peak, 0.637 <i>i</i><sub>m</sub> < 0.707 <i>i</i><sub>m</sub> < <i>i</i><sub>m</sub>.',
    say: null,
  },
  // pp. 461, 463, 465–466
  {
    topic: 0,
    kind: 'mistake',
    q: 'An AC source is labelled “220 V”. Is that its peak voltage?',
    a: 'No: every AC rating is an rms value unless it is explicitly called “peak”. The peak is 220√2 ≈ 311 V',
    why: 'So home wiring insulation must withstand 311 V, not 220 V. Indian mains: <i>f</i> = 50 Hz, <i>T</i> = 0.02 s, <i>ω</i> = 100π ≈ 314 rad s<sup>−1</sup>.',
    say: 'Rate by RMS, build for the peak.',
  },
  // pp. 463, 465
  {
    topic: 0,
    kind: 'shortcut',
    q: 'The average power a sinusoidal current of peak <i>i</i><sub>m</sub> dissipates in a resistor <i>R</i>. The fast way?',
    a: '<i>P</i> = ½<i>v</i><sub>m</sub><i>i</i><sub>m</sub> = ½<i>i</i><sub>m</sub><sup>2</sup><i>R</i>: the ½ is just (1/√2)<sup>2</sup> in disguise, so you never need to compute the rms separately',
    why: '<i>i</i> = 4 sin(100π<i>t</i>) A through 100 Ω: ½(16)(100) = 800 W, the same as <i>I</i><sub>rms</sub><sup>2</sup><i>R</i> = (2.83)<sup>2</sup> × 100.',
    say: null,
  },

  // ── Topic 02 · AC Voltage across R, L, C and LCR Series Circuits ──
  // pp. 468, 475
  {
    topic: 1,
    kind: 'remember',
    q: 'Across <i>v</i> = <i>v</i><sub>m</sub> sin <i>ωt</i>: the phase of the current, and the opposition, for a pure resistor, a pure inductor and a pure capacitor?',
    a: 'Resistor: in phase, <i>R</i>. Inductor: the voltage leads the current by 90°, <i>X</i><sub>L</sub> = <i>ωL</i> = 2π<i>fL</i>. Capacitor: the voltage lags the current by 90°, <i>X</i><sub>C</sub> = 1/(<i>ωC</i>) = 1/(2π<i>fC</i>)',
    why: 'Both reactances are in ohms; <i>X</i><sub>L</sub> rises with <i>f</i>, <i>X</i><sub>C</sub> falls. For DC an inductor is a short (<i>X</i><sub>L</sub> = 0) and a capacitor an open circuit (<i>X</i><sub>C</sub> → ∞, it blocks DC).',
    say: 'ELI the ICE man.',
  },
  // pp. 468, 470–471, 475
  {
    topic: 1,
    kind: 'remember',
    q: 'A series LCR circuit is driven by a sinusoidal source of one frequency. Its impedance and phase angle in the steady state?',
    a: '<i>Z</i> = √(<i>R</i><sup>2</sup> + (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)<sup>2</sup>), <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>Z</i> and tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i>, where <i>φ</i> is the angle by which the source voltage leads the current',
    why: '<i>φ</i> > 0: inductive (voltage leads); <i>φ</i> < 0: capacitive (current leads); <i>φ</i> = 0 when <i>X</i><sub>L</sub> = <i>X</i><sub>C</sub>, where <i>Z</i> = <i>R</i> is a minimum: the gateway to resonance.',
    say: null,
  },
  // p. 475
  {
    topic: 1,
    kind: 'mixup',
    q: 'tan <i>φ</i> = (<i>X</i><sub>C</sub> − <i>X</i><sub>L</sub>)/<i>R</i> or tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i>: which is right?',
    a: 'Both, in opposite conventions. NCERT writes <i>i</i> = <i>i</i><sub>m</sub> sin(<i>ωt</i> + <i>φ</i>), the current’s phase relative to the voltage, with tan <i>φ</i> = (<i>X</i><sub>C</sub> − <i>X</i><sub>L</sub>)/<i>R</i>; many JEE books, and this chapter, give the voltage’s phase, tan <i>φ</i> = (<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>)/<i>R</i>',
    why: 'The same physics with opposite signs: pick one convention, state it, and never flip mid-solution.',
    say: null,
  },
  // pp. 472, 474–475
  {
    topic: 1,
    kind: 'mistake',
    q: 'In a series LCR circuit a voltmeter reads 80 V across the resistor, 120 V across the inductor and 60 V across the capacitor. Is the source voltage 260 V?',
    a: 'No, 100 V: the voltages are out of phase and add as phasors, <i>V</i> = √(<i>V</i><sub>R</sub><sup>2</sup> + (<i>V</i><sub>L</sub> − <i>V</i><sub>C</sub>)<sup>2</sup>) = √(80<sup>2</sup> + 60<sup>2</sup>)',
    why: 'So one reactive element can read more than the source: with <i>R</i> = 30 Ω, <i>X</i><sub>L</sub> = 50 Ω and <i>X</i><sub>C</sub> = 20 Ω on 120 V (rms), <i>V</i><sub>L</sub> ≈ 141 V. Only the phasor sum must equal the source.',
    say: null,
  },
  // pp. 473, 475
  {
    topic: 1,
    kind: 'shortcut',
    q: 'An LCR numerical gives <i>R</i>, <i>X</i><sub>L</sub> and <i>X</i><sub>C</sub>. The fast way to <i>Z</i>?',
    a: 'Sketch the impedance right triangle, <i>R</i> horizontal, <i>X</i><sub>L</sub> − <i>X</i><sub>C</sub> vertical, <i>Z</i> the hypotenuse, and look for a 3-4-5, 5-12-13 or 8-15-17 triangle in disguise',
    why: '<i>R</i> = 8 Ω, <i>X</i><sub>L</sub> = 30 Ω and <i>X</i><sub>C</sub> = 24 Ω give sides 8 and 6, so <i>Z</i> = 10 Ω, and 5 A (rms) needs 50 V.',
    say: null,
  },

  // ── Topic 03 · LC Oscillations ──
  // pp. 477, 481
  {
    topic: 2,
    kind: 'remember',
    q: 'A capacitor charged to <i>q</i><sub>0</sub> is connected across an ideal inductor at <i>t</i> = 0, with no initial current. Its natural frequency, charge and current?',
    a: '<i>ω</i><sub>0</sub> = 1/√(<i>LC</i>), <i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>)), <i>T</i> = 2π√(<i>LC</i>); <i>q</i> = <i>q</i><sub>0</sub> cos <i>ω</i><sub>0</sub><i>t</i> and <i>i</i> = d<i>q</i>/d<i>t</i> = −<i>q</i><sub>0</sub><i>ω</i><sub>0</sub> sin <i>ω</i><sub>0</sub><i>t</i>',
    why: 'For an ideal circuit (<i>R</i> = 0); other starting conditions only shift the phase. This <i>ω</i><sub>0</sub> is the same as the resonant frequency of Topic 04.',
    say: null,
  },
  // pp. 477–479, 481
  {
    topic: 2,
    kind: 'remember',
    q: 'How is the energy shared in an ideal LC circuit as it oscillates?',
    a: '<i>q</i><sup>2</sup>/(2<i>C</i>) + ½<i>Li</i><sup>2</sup> = <i>q</i><sub>0</sub><sup>2</sup>/(2<i>C</i>) = ½<i>Li</i><sub>max</sub><sup>2</sup>, constant: all electric when <i>q</i> = <i>q</i><sub>0</sub>, all magnetic when <i>i</i> = <i>i</i><sub>max</sub>',
    why: 'Starting fully charged, the transfer to the inductor is complete at <i>T</i>/4; the energy is shared equally at <i>T</i>/8, when <i>q</i> = <i>q</i><sub>0</sub>/√2. Nothing is created: an LC circuit is not a power source.',
    say: null,
  },
  // pp. 478, 480–481
  {
    topic: 2,
    kind: 'mixup',
    q: 'The charge in an ideal LC circuit oscillates at <i>f</i><sub>0</sub>. At what frequency does the energy in the capacitor oscillate?',
    a: 'At 2<i>f</i><sub>0</sub>: the energies go as cos<sup>2</sup> and sin<sup>2</sup>, which repeat twice per charge cycle. The charge and current oscillate at <i>f</i><sub>0</sub>',
    why: 'And keep <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>), in rad s<sup>−1</sup>, apart from <i>f</i><sub>0</sub> = <i>ω</i><sub>0</sub>/(2π), in Hz.',
    say: null,
  },
  // pp. 479, 481
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the peak current in an ideal LC circuit <i>q</i><sub>0</sub>/<i>C</i>?',
    a: 'No: <i>q</i><sub>0</sub>/<i>C</i> is the initial voltage <i>V</i><sub>0</sub>. The peak current is <i>i</i><sub>max</sub> = <i>q</i><sub>0</sub><i>ω</i><sub>0</sub> = <i>q</i><sub>0</sub>/√(<i>LC</i>), or by energy <i>i</i><sub>max</sub> = <i>V</i><sub>0</sub>√(<i>C</i>/<i>L</i>)',
    why: 'It must come out in amperes. 8 μF charged to 100 V across a 2 mH inductor gives 100√(4 × 10<sup>−3</sup>) = 6.32 A.',
    say: null,
  },
  // pp. 479–481
  {
    topic: 2,
    kind: 'shortcut',
    q: 'In an ideal LC circuit, the current at the instant the charge is <i>q</i><sub>0</sub>/2. The fast way?',
    a: 'Translate SHM with <i>x</i> → <i>q</i>, <i>v</i> → <i>i</i>, <i>ω</i> → <i>ω</i><sub>0</sub>, <i>A</i> → <i>q</i><sub>0</sub>: as a particle at <i>x</i> = <i>A</i>/2 moves at (√3/2)<i>v</i><sub>max</sub>, <i>i</i> = (√3/2)<i>i</i><sub>max</sub> ≈ 0.87 <i>i</i><sub>max</sub>',
    why: 'In the analogy <i>L</i> is the mass and 1/<i>C</i> the spring constant: “charge fully present, current zero” is the turning point, “charge zero, current maximum” the centre.',
    say: 'L is mass, one-over-C is the spring.',
  },

  // ── Topic 04 · Resonance and Q-Factor ──
  // pp. 482–483, 490
  {
    topic: 3,
    kind: 'remember',
    q: 'The resonant frequency of a series LCR circuit, and what happens there?',
    a: '<i>X</i><sub>L</sub> = <i>X</i><sub>C</sub> gives <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>), <i>f</i><sub>0</sub> = 1/(2π√(<i>LC</i>)). At resonance <i>Z</i> = <i>R</i> (minimum), <i>i</i><sub>m</sub> = <i>v</i><sub>m</sub>/<i>R</i> (maximum), <i>φ</i> = 0 and the power factor is 1: the circuit is purely resistive',
    why: 'Resonance needs both <i>L</i> and <i>C</i>: a pure RL or RC circuit has nothing for its one reactance to cancel against. Tuning a radio changes <i>C</i> (or <i>L</i>), sliding <i>ω</i><sub>0</sub> to the station.',
    say: null,
  },
  // pp. 483, 486, 490
  {
    topic: 3,
    kind: 'remember',
    q: 'The Q-factor of a series LCR circuit, its bandwidth and its half-power frequencies?',
    a: '<i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = 1/(<i>ω</i><sub>0</sub><i>CR</i>) = (1/<i>R</i>)√(<i>L</i>/<i>C</i>) = <i>ω</i><sub>0</sub>/Δ<i>ω</i>, with bandwidth Δ<i>ω</i> = <i>ω</i><sub>2</sub> − <i>ω</i><sub>1</sub> = <i>R</i>/<i>L</i>. At the half-power frequencies |<i>X</i><sub>L</sub> − <i>X</i><sub>C</sub>| = <i>R</i>',
    why: '<i>ω</i><sub>0</sub> is their geometric mean, <i>ω</i><sub>1</sub><i>ω</i><sub>2</sub> = <i>ω</i><sub>0</sub><sup>2</sup>; only for high <i>Q</i> do they sit almost symmetrically, at <i>ω</i><sub>0</sub> ∓ Δ<i>ω</i>/2. Small <i>R</i>: tall, narrow, selective peak.',
    say: 'Low R, high Q, sharp tune.',
  },
  // pp. 482–484, 489–490
  {
    topic: 3,
    kind: 'mixup',
    q: 'At resonance <i>V</i><sub>L</sub> − <i>V</i><sub>C</sub> = 0. Is the voltage across the inductor zero?',
    a: 'No: <i>V</i><sub>L</sub> and <i>V</i><sub>C</sub> cancel as phasors, but each is <i>Q</i> times the source voltage, <i>V</i><sub>L</sub> = <i>V</i><sub>C</sub> = <i>QV</i><sub>source</sub>, and can far exceed the supply',
    why: 'At resonance the source voltage equals <i>V</i><sub>R</sub> alone. A 25 V (rms) source with 200 V across the inductor means <i>Q</i> = 8, and the capacitor also reads 200 V.',
    say: null,
  },
  // pp. 483, 487–489
  {
    topic: 3,
    kind: 'mistake',
    q: 'The resistance of a series LCR circuit is doubled. Does its resonant frequency change?',
    a: 'No: <i>ω</i><sub>0</sub> = 1/√(<i>LC</i>) has no <i>R</i> in it. Resistance changes how tall and sharp the peak is (Δ<i>ω</i> = <i>R</i>/<i>L</i> doubles, <i>Q</i> halves), never where it sits',
    why: 'Only the <i>LC</i> product fixes the peak. To halve the bandwidth without moving it, halve <i>R</i>, or keep <i>R</i> and double <i>L</i> while halving <i>C</i>.',
    say: null,
  },
  // pp. 488, 490
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A sharpness or selectivity question gives the resonant frequency and the bandwidth. The fast way to <i>Q</i>?',
    a: 'Reach straight for <i>Q</i> = <i>f</i><sub>0</sub>/Δ<i>f</i> = <i>ω</i><sub>0</sub>/Δ<i>ω</i>; with <i>R</i> given, <i>L</i> = <i>R</i>/Δ<i>ω</i>',
    why: 'Half-power points at 480 and 520 rad s<sup>−1</sup> with <i>R</i> = 8.0 Ω: <i>ω</i><sub>0</sub> = √(480 × 520) ≈ 499.6 rad s<sup>−1</sup>, <i>Q</i> ≈ 12.5, <i>L</i> = 0.20 H. A high <i>Q</i> must pair with a small <i>R</i> and a narrow band.',
    say: null,
  },

  // ── Topic 05 · Power in AC Circuits and Transformers ──
  // pp. 492, 499
  {
    topic: 4,
    kind: 'remember',
    q: 'For a single-frequency sinusoidal source: the average power in an AC circuit, and what is the power factor?',
    a: '<i>P</i><sub>avg</sub> = <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> cos <i>φ</i>, with power factor cos <i>φ</i> = <i>R</i>/<i>Z</i> = true power/apparent power. The apparent power <i>V</i><sub>rms</sub><i>I</i><sub>rms</sub> is in volt-amperes (VA), the true power in watts',
    why: 'Pure <i>R</i>: cos <i>φ</i> = 1. Pure <i>L</i> or <i>C</i>: cos <i>φ</i> = 0, zero power. At resonance cos <i>φ</i> = 1. The wattless current is <i>I</i><sub>rms</sub> sin <i>φ</i>.',
    say: null,
  },
  // pp. 491–492, 494–495, 497, 499
  {
    topic: 4,
    kind: 'remember',
    q: 'For an ideal transformer: how do the voltage and current scale with the turns?',
    a: '<i>V</i><sub>s</sub>/<i>V</i><sub>p</sub> = <i>N</i><sub>s</sub>/<i>N</i><sub>p</sub> = <i>k</i> and <i>I</i><sub>s</sub>/<i>I</i><sub>p</sub> = <i>N</i><sub>p</sub>/<i>N</i><sub>s</sub> = 1/<i>k</i>, from <i>V</i><sub>p</sub><i>I</i><sub>p</sub> = <i>V</i><sub>s</sub><i>I</i><sub>s</sub>. The frequency is unchanged, and it works only on AC',
    why: 'Step-up voltage means step-down current, never step-up power. For a fixed power the line loss <i>P</i><sup>2</sup><i>R</i><sub>line</sub>/<i>V</i><sup>2</sup> ∝ 1/<i>V</i><sup>2</sup>: hence transmission at high voltage and low current.',
    say: 'High voltage, low loss.',
  },
  // pp. 495, 498–499
  {
    topic: 4,
    kind: 'mixup',
    q: 'Which transformer loss does laminating the core reduce, and how are the others reduced?',
    a: 'Laminating cuts the eddy-current loss in the core. Hysteresis loss, also in the core, is cut by a soft magnetic material with a narrow loop (e.g. silicon steel); copper loss, <i>I</i><sup>2</sup><i>R</i> in the windings, by thick copper wire',
    why: 'Flux leakage is cut by winding the coils close together, one over the other. Keep the location and the fix paired.',
    say: null,
  },
  // pp. 495–496, 499
  {
    topic: 4,
    kind: 'mistake',
    q: 'An ideal inductor draws 2.0 A (rms) from a 220 V, 50 Hz supply. Is the power 440 W?',
    a: 'No, zero: 440 VA is the apparent power. For a pure inductor <i>φ</i> = 90°, so cos <i>φ</i> = 0 and the current is entirely wattless',
    why: 'Always find the power factor before reporting power. A choke coil (large <i>L</i>, tiny <i>r</i>) uses this to limit AC current with almost no power loss, which is why fluorescent tubes use one instead of a resistor.',
    say: null,
  },
  // pp. 496, 499
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A coil of resistance 30 Ω and inductive reactance 40 Ω is on a 200 V (rms) source. The fast way to the average power?',
    a: 'Skip the power factor: only the resistance dissipates, so <i>P</i> = <i>I</i><sub>rms</sub><sup>2</sup><i>R</i>. Here <i>Z</i> = 50 Ω, <i>I</i><sub>rms</sub> = 4 A and <i>P</i> = 16 × 30 = 480 W',
    why: 'For transformers: “voltage and turns go together; current goes the opposite way; power stays the same.” From primary to secondary, power can only stay equal (ideal) or drop (real).',
    say: null,
  },

  // ── Additional A · Parallel AC Circuits and the Admittance Method ──
  // pp. 500, 502
  {
    topic: 5,
    kind: 'remember',
    q: 'A branch has impedance <i>Z</i> = <i>R</i> + <i>jX</i>. Its admittance, and how do branches in parallel combine?',
    a: '<i>Y</i> = 1/<i>Z</i> = (<i>R</i> − <i>jX</i>)/(<i>R</i><sup>2</sup> + <i>X</i><sup>2</sup>) = <i>G</i> + <i>jB</i>, in siemens. Parallel admittances add, <i>Y</i><sub>eq</sub> = <i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>, and <i>Z</i><sub>eq</sub> = 1/<i>Y</i><sub>eq</sub>',
    why: 'The conductance <i>G</i> = <i>R</i>/|<i>Z</i>|<sup>2</sup> dissipates power, so <i>P</i> = <i>V</i><sub>rms</sub><sup>2</sup><i>G</i><sub>eq</sub>; the susceptance <i>B</i> = −<i>X</i>/|<i>Z</i>|<sup>2</sup> stores energy.',
    say: null,
  },
  // pp. 500–501
  {
    topic: 5,
    kind: 'remember',
    q: 'The signs of the susceptances of a pure inductor and a pure capacitor, and what does the sign of the net susceptance tell you?',
    a: '<i>B</i><sub>L</sub> = −1/(<i>ωL</i>) < 0 and <i>B</i><sub>C</sub> = +<i>ωC</i> > 0. A negative net susceptance means the line current lags the voltage: a lagging power factor',
    why: '50 Ω in parallel with 0.16 H on 230 V, 50 Hz: <i>Y</i><sub>eq</sub> = 0.0200 − <i>j</i>0.01992 S, so |<i>Z</i><sub>eq</sub>| = 35.4 Ω, 6.49 A, power factor 0.708 lagging.',
    say: null,
  },

  // ── Additional B · Parallel Resonance (Anti-Resonance) ──
  // pp. 503–505
  {
    topic: 6,
    kind: 'remember',
    q: 'A coil (inductance <i>L</i>, series resistance <i>R</i>) is in parallel with a capacitor <i>C</i>. Its parallel-resonant frequency, and its impedance there?',
    a: 'The net susceptance is zero when <i>ω</i><sub>p</sub><sup>2</sup> = 1/(<i>LC</i>) − <i>R</i><sup>2</sup>/<i>L</i><sup>2</sup>, slightly below 1/√(<i>LC</i>); the impedance is then purely resistive, <i>R</i><sub>eq</sub> = <i>L</i>/(<i>RC</i>)',
    why: 'The line current <i>V</i>/<i>R</i><sub>eq</sub> is in phase with the voltage and small: 0.10 H, 5 Ω and 100 μF give 312 rad s<sup>−1</sup> and 200 Ω, so 50 V (rms) draws only 0.25 A.',
    say: null,
  },
  // pp. 504–506
  {
    topic: 6,
    kind: 'remember',
    q: 'What does the Q-factor of a parallel tank circuit measure?',
    a: 'The circulating (branch) current over the line current: <i>Q</i><sub>parallel</sub> = <i>I</i><sub>branch</sub>/<i>I</i><sub>line</sub> = <i>ω</i><sub>p</sub><i>L</i>/<i>R</i>, which for <i>R</i> ≪ <i>ω</i><sub>0</sub><i>L</i> is ≈ <i>ω</i><sub>0</sub><i>L</i>/<i>R</i>, the series value, with the same bandwidth <i>R</i>/<i>L</i>',
    why: 'Series resonance magnifies voltage (<i>V</i><sub>L</sub>/<i>V</i><sub>source</sub>), the tank magnifies current: with 0.10 H and 5 Ω, <i>Q</i> = 6.24, and 1.56 A flows in the capacitor while the line carries 0.25 A.',
    say: null,
  },

  // ── Additional C · Power Factor Correction ──
  // pp. 507–508
  {
    topic: 7,
    kind: 'remember',
    q: 'A load draws real power <i>P</i> at a lagging power factor cos <i>φ</i><sub>1</sub> from a supply <i>V</i> at <i>ω</i>. What shunt capacitor raises it to cos <i>φ</i><sub>2</sub>?',
    a: '<i>C</i> = <i>P</i>(tan <i>φ</i><sub>1</sub> − tan <i>φ</i><sub>2</sub>)/(<i>ωV</i><sup>2</sup>), from <i>V</i><sup>2</sup><i>ωC</i> = <i>Q</i><sub>required</sub>, the reactive power the capacitor must supply',
    why: 'The power triangle: <i>S</i><sup>2</sup> = <i>P</i><sup>2</sup> + <i>Q</i><sup>2</sup>, cos <i>φ</i> = <i>P</i>/<i>S</i>, <i>Q</i> = <i>P</i> tan <i>φ</i>. A 10 kW motor at 0.707 on 230 V, 50 Hz needs 602 μF for unity.',
    say: null,
  },
  // pp. 507–509
  {
    topic: 7,
    kind: 'remember',
    q: 'What does power factor correction change, and what does it leave unchanged?',
    a: 'The real power <i>P</i> is unchanged (a capacitor supplies none). The capacitor supplies the reactive current locally, so the line current falls, to <i>P</i>/<i>V</i> at unity power factor',
    why: 'The 10 kW motor’s line current drops from 61.5 A to 43.5 A, a 29% cut. Low power factor is penalised because wattless current heats cables without doing useful work.',
    say: null,
  },

  // ── Additional D · Damped LC Oscillations ──
  // pp. 509–510, 512
  {
    topic: 8,
    kind: 'remember',
    q: 'A charged capacitor discharges through a series RLC circuit. When does it oscillate, and at what frequency?',
    a: 'When it is underdamped, <i>α</i> = <i>R</i>/(2<i>L</i>) < <i>ω</i><sub>0</sub>, i.e. <i>R</i> < 2√(<i>L</i>/<i>C</i>), equivalently <i>Q</i> > ½. It then oscillates at <i>ω</i><sub>d</sub> = √(<i>ω</i><sub>0</sub><sup>2</sup> − <i>α</i><sup>2</sup>) = √(1/(<i>LC</i>) − <i>R</i><sup>2</sup>/(4<i>L</i><sup>2</sup>)), below <i>ω</i><sub>0</sub>',
    why: '<i>α</i> = <i>ω</i><sub>0</sub> is critically damped, the fastest decay without overshoot; <i>α</i> > <i>ω</i><sub>0</sub> is overdamped, with no oscillation. 0.50 H and 2.0 μF are critically damped by 1000 Ω.',
    say: null,
  },
  // pp. 510–511
  {
    topic: 8,
    kind: 'remember',
    q: 'For weak damping, how fast do the charge amplitude and the energy of the oscillation decay?',
    a: 'The amplitude as <i>q</i><sub>0</sub><i>e</i><sup>−<i>αt</i></sup>, the energy as <i>U</i><sub>0</sub><i>e</i><sup>−2<i>αt</i></sup>, with energy time constant <i>τ</i><sub>E</sub> = <i>L</i>/<i>R</i>: the energy halves in half the time the amplitude takes',
    why: '0.10 H, 100 μF and 10 Ω: <i>α</i> = 50 s<sup>−1</sup>, so the amplitude halves in ln 2/<i>α</i> = 13.9 ms and the energy in 6.93 ms; <i>Q</i> = <i>ω</i><sub>0</sub><i>L</i>/<i>R</i> = 3.16.',
    say: null,
  },

  // ── Additional E · Series-Parallel AC Circuit Analysis ──
  // pp. 513, 516
  {
    topic: 9,
    kind: 'remember',
    q: 'How do you analyse a series-parallel AC circuit at a given frequency?',
    a: 'Reduce each parallel group to one impedance by admittances (convert each branch to <i>Y</i> = 1/<i>Z</i>, add, invert), then add the series impedances as complex numbers: <i>Z</i><sub>total</sub> = <i>Z</i><sub>eq,parallel</sub> + <i>Z</i><sub>series</sub>',
    why: 'Then <i>I</i> = <i>V</i>/|<i>Z</i><sub>total</sub>| and <i>φ</i> = tan<sup>−1</sup>(Im(<i>Z</i><sub>total</sub>)/Re(<i>Z</i><sub>total</sub>)), a positive <i>φ</i> meaning the current lags. Only resistance dissipates: <i>P</i> = <i>I</i><sub>rms</sub><sup>2</sup> Re(<i>Z</i><sub>total</sub>).',
    say: null,
  },
  // p. 516
  {
    topic: 9,
    kind: 'remember',
    q: 'Branches of 8 + <i>j</i>6 Ω and 8 − <i>j</i>6 Ω are in parallel. The equivalent impedance and power factor?',
    a: '<i>Y</i><sub>eq</sub> = (0.08 − <i>j</i>0.06) + (0.08 + <i>j</i>0.06) = 0.16 S, so <i>Z</i><sub>eq</sub> = 6.25 Ω, purely resistive, and the power factor is 1',
    why: 'The equal and opposite susceptances cancel exactly; only the conductances, 8/100 = 0.08 S each, remain.',
    say: null,
  },
];
