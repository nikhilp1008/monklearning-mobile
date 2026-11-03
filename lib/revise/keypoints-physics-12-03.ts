/**
 * KEY POINTS for Physics Class 12, Chapter 3 (Current Electricity).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic` 0 is the Chapter guide (no key points); Topics 01–08 are 1–8;
 * Additional topics A–F are 9–14, and G (the Integrated Problem Set) is 15.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aids, word for word. Additional topics: the Supplement's
 * addenda and the Integrated Problem Set.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Subscripts
 * that are words or labels stay upright (<i>v</i><sub>d</sub>,
 * <i>E</i><sub>eq</sub>, <i>I</i><sub>g</sub>, <i>R</i><sub>s</sub>); a
 * subscript that is a variable or an index stays italic
 * (<i>R</i><sub><i>T</i></sub>, <i>R</i><sub><i>n</i></sub>,
 * <i>I</i><sub><i>i</i></sub>); vectors keep their arrows (<i>J⃗</i>,
 * <i>E⃗</i>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Electric Current, Ohm’s Law & Drift Velocity ──
  // pp. 147, 160
  {
    topic: 1,
    kind: 'remember',
    q: 'The drift velocity of free electrons in a field <i>E</i>, and the current it carries?',
    a: '<i>v</i><sub>d</sub> = <i>eEτ</i>/<i>m</i>, and <i>I</i> = <i>neAv</i><sub>d</sub>, where <i>n</i> is the free-electron number density and <i>τ</i> the relaxation time',
    why: 'This is the Drude free-electron model, good for ordinary metals; <i>I</i> = <i>neAv</i><sub>d</sub> assumes a single type of carrier with uniform number density across the section.',
    say: null,
  },
  // pp. 149, 160
  {
    topic: 1,
    kind: 'remember',
    q: 'The resistance of a wire, and what sets the resistivity of its material?',
    a: '<i>R</i> = <i>ρL</i>/<i>A</i>, with <i>ρ</i> = 1/<i>σ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>): a material property, independent of size or shape',
    why: 'Stretching, recasting or cutting a wire changes <i>R</i>, never <i>ρ</i>. In microscopic form Ohm’s law <i>V</i> = <i>IR</i> reads <i>J⃗</i> = <i>σE⃗</i>.',
    say: '<i>ρ</i> is the material’s fingerprint — only <i>R</i> feels geometry.',
  },
  // pp. 147, 149, 160
  {
    topic: 1,
    kind: 'mixup',
    q: 'Current <i>I</i> and current density <i>J⃗</i>: which is a vector?',
    a: 'Only <i>J⃗</i> = <i>σE⃗</i>, in A m<sup>−2</sup>, with magnitude <i>J</i> = <i>I</i>/<i>A</i> = <i>nev</i><sub>d</sub>. Current <i>I</i> is a scalar, in A',
    why: 'Current has a direction along the wire, but at a junction currents add algebraically, not by the parallelogram law. A quantity with a direction in space and units per area is <i>J⃗</i>.',
    say: '<i>J</i> is the vector, <i>I</i> is not.',
  },
  // pp. 146, 160
  {
    topic: 1,
    kind: 'mistake',
    q: 'Electrons drift at only about 10<sup>−4</sup> m s<sup>−1</sup>. So why does a bulb light the instant you flip the switch?',
    a: 'Not because of the drift: the field is set up along the whole wire at nearly the speed of light, and every electron, including those in the filament, starts drifting almost at once',
    why: 'The signal is fast; the carriers are slow. Don’t quote <i>v</i><sub>d</sub> when asked why a light turns on instantly.',
    say: 'Slow snails, fast switch.',
  },
  // p. 160
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A wire is stretched or recast at constant volume. The fast way to its new resistance?',
    a: 'Use <i>R</i> ∝ <i>L</i><sup>2</sup>: square the length ratio and multiply <i>R</i>. Doubling the length gives 4<i>R</i>; halving it gives <i>R</i>/4',
    why: 'Before committing to any <i>v</i><sub>d</sub> or <i>τ</i>, check orders of magnitude: <i>v</i><sub>d</sub> ∼ 10<sup>−4</sup> m s<sup>−1</sup> and <i>τ</i> ∼ 10<sup>−14</sup> s for metals.',
    say: 'Stretch rule: constant volume ⇒ <i>R</i> ∝ <i>L</i><sup>2</sup>.',
  },

  // ── Topic 02 · Resistivity, Temperature Dependence & Material Classification ──
  // pp. 161–162, 168
  {
    topic: 2,
    kind: 'remember',
    q: 'How does resistance change with temperature, and what is the temperature coefficient <i>α</i>?',
    a: '<i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>[1 + <i>α</i>(<i>T</i> − <i>T</i><sub>0</sub>)], so <i>α</i> = (<i>R</i><sub><i>T</i></sub> − <i>R</i><sub>0</sub>)/(<i>R</i><sub>0</sub>(<i>T</i> − <i>T</i><sub>0</sub>)): the fractional change in resistance per degree, in K<sup>−1</sup>',
    why: 'The linear law is a first-order approximation, valid over moderate temperature ranges. For metals, typically <i>α</i> ∼ 4 × 10<sup>−3</sup> K<sup>−1</sup>.',
    say: null,
  },
  // pp. 162–163, 167–168
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you read a 4-band resistor colour code?',
    a: 'With the gold or silver tolerance band on the right: <i>R</i> = (<i>d</i><sub>1</sub><i>d</i><sub>2</sub>) × 10<sup><i>m</i></sup> Ω ± tolerance. Two digit bands, a multiplier band, then Gold ±5%, Silver ±10% (no band ±20%)',
    why: 'Digits 0 to 9: Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White. Green, Blue, Brown, Gold reads 56 × 10 = 560 Ω ± 5%.',
    say: 'B B ROY of Great Britain had a Very Good Wife — Black0…White9.',
  },
  // pp. 161, 163, 168
  {
    topic: 2,
    kind: 'mixup',
    q: 'On heating, why does a metal’s resistance rise but a semiconductor’s fall?',
    a: 'Metal (<i>α</i> > 0): <i>n</i> is fixed, but stronger lattice vibrations cut the relaxation time <i>τ</i>. Semiconductor (<i>α</i> < 0): <i>n</i> rises exponentially and outweighs the fall in <i>τ</i>',
    why: 'Both follow from <i>ρ</i> = <i>m</i>/(<i>ne</i><sup>2</sup><i>τ</i>). Alloys such as manganin and constantan have <i>α</i> ≈ 0, which is why they make standard resistors.',
    say: 'Metal hates heat (<i>R</i> ↑); semiconductor loves heat (<i>R</i> ↓).',
  },
  // pp. 167–168
  {
    topic: 2,
    kind: 'mistake',
    q: 'A resistor is heated through Δ<i>T</i>. Is its new resistance <i>R</i><sub>0</sub><i>α</i>Δ<i>T</i>?',
    a: 'No, that is only the change. The new value is <i>R</i><sub><i>T</i></sub> = <i>R</i><sub>0</sub>(1 + <i>α</i>Δ<i>T</i>): the 1 keeps the original resistance',
    why: 'Get the sign of <i>α</i> right too: + for metals, − for semiconductors. Mixing them up flips the entire answer.',
    say: null,
  },
  // p. 168
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A temperature problem, or a colour code. The fast way?',
    a: 'Temperature: work with the ratio <i>R</i><sub><i>T</i></sub>/<i>R</i><sub>0</sub> = 1 + <i>α</i>Δ<i>T</i>, one line, with no absolute values until the end',
    why: 'Colour codes: remember the BBROY mnemonic, and that the third band is “how many zeros”.',
    say: 'Third band = number of zeros.',
  },

  // ── Topic 03 · Combination of Resistors (Series & Parallel) ──
  // pp. 169–171, 178
  {
    topic: 3,
    kind: 'remember',
    q: 'Resistors in series: the equivalent resistance, and what is shared?',
    a: '<i>R</i><sub>s</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + ⋯ + <i>R</i><sub><i>n</i></sub>. The same current flows through each, and the voltage divides, <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + ⋯. The result exceeds the largest resistor',
    why: 'They are genuinely in series only with no junction between them: then charge conservation forces the same current through each.',
    say: 'Series adds, parallel eases.',
  },
  // pp. 169–171, 178
  {
    topic: 3,
    kind: 'remember',
    q: 'Resistors in parallel: the equivalent resistance, and what is shared?',
    a: '1/<i>R</i><sub>p</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + ⋯ + 1/<i>R</i><sub><i>n</i></sub>. Each has the same voltage, and the current divides, <i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + ⋯. For two, <i>R</i><sub>p</sub> = <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>), “product over sum”',
    why: 'The result is always below the smallest resistor. Σ1/<i>R</i><sub><i>i</i></sub> gives 1/<i>R</i><sub>p</sub>, not <i>R</i><sub>p</sub>: take the reciprocal at the end.',
    say: 'Parallel is always less than the least.',
  },
  // pp. 169–171, 178
  {
    topic: 3,
    kind: 'mixup',
    q: 'The voltage divider and the current divider for two resistors: which resistor goes on top?',
    a: 'Voltage divider (series): <i>V</i><sub>1</sub> = <i>VR</i><sub>1</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>), its own resistor. Current divider (parallel): <i>I</i><sub>1</sub> = <i>IR</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>), the other resistor',
    why: 'In series each resistor drops a share of the voltage in proportion to its size; in parallel more current takes the smaller resistor.',
    say: 'Current divider: the other one rides on top.',
  },
  // pp. 169, 178
  {
    topic: 3,
    kind: 'mistake',
    q: 'Two resistors are drawn side by side on the page. Are they in parallel?',
    a: 'Only if they share both end nodes: check the actual connections, not the drawing’s layout',
    why: 'A network with a bridging resistor between two midpoints is usually not reducible by series and parallel at all: use the balance check or Kirchhoff’s laws.',
    say: null,
  },
  // pp. 170, 173–174, 178
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Combining <i>n</i> equal resistors <i>R</i>. The fast results, and the sanity check on any combination?',
    a: 'Series <i>nR</i>, parallel <i>R</i>/<i>n</i>, ratio <i>n</i><sup>2</sup>: the largest and smallest values using all <i>n</i>. Four 12 Ω resistors give 48 Ω and 3 Ω',
    why: 'Predict the direction first: a series result must exceed the largest resistor, a parallel one must be below the smallest. Finish with a current-conservation check, Σ<i>I</i><sub>branch</sub> = <i>I</i><sub>total</sub>.',
    say: null,
  },

  // ── Topic 04 · Electrical Energy & Power ──
  // pp. 179–180, 186
  {
    topic: 4,
    kind: 'remember',
    q: 'The power in a resistor, and the heat it produces in time <i>t</i>?',
    a: '<i>P</i> = <i>VI</i> = <i>I</i><sup>2</sup><i>R</i> = <i>V</i><sup>2</sup>/<i>R</i>, and the heat is <i>H</i> = <i>I</i><sup>2</sup><i>Rt</i> (Joule’s law of heating)',
    why: '<i>P</i> = <i>VI</i> holds for any two-terminal device; the forms <i>I</i><sup>2</sup><i>R</i> and <i>V</i><sup>2</sup>/<i>R</i> assume an ohmic element with constant <i>R</i>.',
    say: null,
  },
  // pp. 179–180, 186
  {
    topic: 4,
    kind: 'remember',
    q: 'A bulb is rated “60 W, 240 V”. What does the rating give you, and at what voltage?',
    a: 'Its resistance, <i>R</i> = <i>V</i><sub>rated</sub><sup>2</sup>/<i>P</i><sub>rated</sub>, but only at 240 V: a rated wattage applies only at its rated voltage',
    why: 'A filament’s resistance rises sharply as it heats, so the cold filament has a much lower resistance.',
    say: null,
  },
  // pp. 179, 186
  {
    topic: 4,
    kind: 'mixup',
    q: 'Two bulbs connected in series, then in parallel: which one glows brighter?',
    a: 'Series (same current): <i>P</i> = <i>I</i><sup>2</sup><i>R</i>, so the bigger <i>R</i> is brighter. Parallel (same voltage): <i>P</i> = <i>V</i><sup>2</sup>/<i>R</i>, so the smaller <i>R</i> is brighter',
    why: 'For bulbs rated at the same voltage, the lower-wattage bulb has the bigger <i>R</i> (<i>R</i> = <i>V</i><sub>rated</sub><sup>2</sup>/<i>P</i><sub>rated</sub>), so it is the brighter one in series.',
    say: 'Series — weaker bulb wins; parallel — stronger bulb wins.',
  },
  // pp. 179–180, 186–187
  {
    topic: 4,
    kind: 'mistake',
    q: 'A cell of EMF <i>E</i> and internal resistance <i>r</i> delivers maximum power to a load <i>R</i>. Is its efficiency then highest too?',
    a: 'No: maximum power is at <i>R</i> = <i>r</i>, <i>P</i><sub>max</sub> = <i>E</i><sup>2</sup>/(4<i>r</i>), with an efficiency of only 50%. Maximum efficiency needs <i>R</i> ≫ <i>r</i>',
    why: 'From <i>P</i><sub>load</sub> = <i>E</i><sup>2</sup><i>R</i>/(<i>R</i> + <i>r</i>)<sup>2</sup>, for a fixed source EMF and internal resistance with a variable load.',
    say: 'Max power ≠ max efficiency (<i>R</i> = <i>r</i> gives only 50%).',
  },
  // pp. 180, 186
  {
    topic: 4,
    kind: 'shortcut',
    q: 'An electricity-bill question. The fast way?',
    a: 'Keep energy in kWh end to end, power in kW × time in hours, and cost = kWh × rate. Never convert to joules unless asked',
    why: 'If you must: 1 kWh = 1000 W × 3600 s = 3.6 × 10<sup>6</sup> J.',
    say: null,
  },

  // ── Topic 05 · EMF, Terminal Voltage & Internal Resistance ──
  // pp. 188–190, 195
  {
    topic: 5,
    kind: 'remember',
    q: 'A cell of EMF <i>E</i> and internal resistance <i>r</i> drives a load <i>R</i>. The current and the terminal voltage?',
    a: '<i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>) and <i>V</i> = <i>E</i> − <i>Ir</i> = <i>IR</i> = <i>ER</i>/(<i>R</i> + <i>r</i>). <i>V</i> equals <i>E</i> only on open circuit',
    why: 'This models the cell as an ideal EMF in series with a constant <i>r</i>, at a steady current; a real <i>r</i> rises as the battery ages or runs down.',
    say: 'Draw current, lose voltage — terminal voltage sags by <i>Ir</i>.',
  },
  // pp. 188–189, 195
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the EMF of a cell, and what is its unit?',
    a: '<i>E</i> = <i>W</i>/<i>q</i>, the energy the source gives each coulomb, in volts (J C<sup>−1</sup>). It is the open-circuit terminal voltage',
    why: 'Despite its name it is not a force: calling it one is a frequent definition-mark loss in boards.',
    say: null,
  },
  // pp. 188–190, 194–195
  {
    topic: 5,
    kind: 'mixup',
    q: 'A cell discharging, and the same cell being charged: how does its terminal voltage compare with its EMF?',
    a: 'Discharging: <i>V</i> = <i>E</i> − <i>Ir</i>, less than <i>E</i>. Charging: <i>V</i> = <i>E</i> + <i>Ir</i>, more than <i>E</i>',
    why: 'While charging, the source must overcome both the EMF and the internal drop: a 12 V battery with <i>r</i> = 0.4 Ω charged at 1 A has <i>V</i> = 12.4 V.',
    say: 'Charging adds, discharging subtracts (the <i>Ir</i> sign).',
  },
  // pp. 188–189, 194–195
  {
    topic: 5,
    kind: 'mistake',
    q: 'A cell is short-circuited. Is the current infinite?',
    a: 'No: <i>I</i><sub>max</sub> = <i>E</i>/<i>r</i>, finite, set by the internal resistance, and <i>V</i> = 0',
    why: 'A 2 V cell with <i>r</i> = 0.1 Ω gives 20 A: dangerously large, enough to overheat the cell, but finite.',
    say: 'Short-circuit current is <i>E</i>/<i>r</i>, not infinity.',
  },
  // pp. 189–190, 195
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Finding a cell’s internal resistance from data. The fast way?',
    a: '<i>r</i> = (<i>E</i> − <i>V</i>)/<i>I</i> = <i>R</i>(<i>E</i>/<i>V</i> − 1): lost voltage over current drawn. With two loads, write <i>E</i> = <i>I</i>(<i>R</i> + <i>r</i>) for each and equate',
    why: 'The EMF cancels and <i>r</i> falls out in one step. Sanity check: a discharging cell must have <i>V</i> < <i>E</i>.',
    say: null,
  },

  // ── Topic 06 · Combination of Cells (Series, Parallel & Mixed) ──
  // pp. 197, 205
  {
    topic: 6,
    kind: 'remember',
    q: '<i>n</i> identical cells (<i>E</i>, <i>r</i>) in series, all aiding, across a load <i>R</i>?',
    a: '<i>E</i><sub>eq</sub> = <i>nE</i>, <i>r</i><sub>eq</sub> = <i>nr</i>, so <i>I</i> = <i>nE</i>/(<i>R</i> + <i>nr</i>). Best for a large <i>R</i>',
    why: 'If <i>k</i> of the <i>n</i> cells are reversed, the net EMF is (<i>n</i> − 2<i>k</i>)<i>E</i>.',
    say: 'Series stacks voltage; parallel stacks stamina.',
  },
  // pp. 197, 204–205
  {
    topic: 6,
    kind: 'remember',
    q: '<i>n</i> identical cells (<i>E</i>, <i>r</i>) in parallel across a load <i>R</i>?',
    a: '<i>E</i><sub>eq</sub> = <i>E</i>, <i>r</i><sub>eq</sub> = <i>r</i>/<i>n</i>, so <i>I</i> = <i>nE</i>/(<i>nR</i> + <i>r</i>). Best for a small <i>R</i>',
    why: 'The EMF stays <i>E</i>, not <i>nE</i>: only series stacks EMFs. Parallel cuts the internal resistance, which is what limits the current when <i>R</i> is small.',
    say: 'Parallel keeps EMF, cuts resistance.',
  },
  // pp. 197, 204–205
  {
    topic: 6,
    kind: 'mixup',
    q: 'Two different cells (<i>E</i><sub>1</sub>, <i>r</i><sub>1</sub>) and (<i>E</i><sub>2</sub>, <i>r</i><sub>2</sub>) in parallel: can you use <i>r</i>/<i>n</i>?',
    a: 'No, that needs identical cells. Use <i>E</i><sub>eq</sub> = (<i>E</i><sub>1</sub><i>r</i><sub>2</sub> + <i>E</i><sub>2</sub><i>r</i><sub>1</sub>)/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>) and <i>r</i><sub>eq</sub> = <i>r</i><sub>1</sub><i>r</i><sub>2</sub>/(<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>)',
    why: 'For cells joined with the same polarity. The EMF is a weighted one: (<i>E</i><sub>1</sub>/<i>r</i><sub>1</sub> + <i>E</i><sub>2</sub>/<i>r</i><sub>2</sub>)/(1/<i>r</i><sub>1</sub> + 1/<i>r</i><sub>2</sub>).',
    say: null,
  },
  // pp. 204–205
  {
    topic: 6,
    kind: 'mistake',
    q: 'One cell in a series row is reversed. By how much does the net EMF change?',
    a: 'By 2<i>E</i>, not <i>E</i>: that cell goes from +<i>E</i> to −<i>E</i>',
    why: 'Three 2 V cells with one reversed give (3 − 2 · 1) × 2 = 2 V, not 4 V.',
    say: null,
  },
  // pp. 197, 204–205
  {
    topic: 6,
    kind: 'shortcut',
    q: '<i>N</i> identical cells grouped as <i>m</i> rows of <i>n</i>, for the most current through <i>R</i>. The fast way?',
    a: 'Jump straight to <i>mR</i> = <i>nr</i> (the load matches <i>r</i><sub>eq</sub> = <i>nr</i>/<i>m</i>) together with <i>mn</i> = <i>N</i>, and solve. Then <i>I</i><sub>max</sub> = <i>nE</i>/(2<i>R</i>)',
    why: 'Reduce any grouping to one equivalent cell first, then use <i>I</i> = <i>E</i><sub>eq</sub>/(<i>R</i> + <i>r</i><sub>eq</sub>); for mixed grouping, <i>I</i> = <i>mnE</i>/(<i>mR</i> + <i>nr</i>).',
    say: 'Max current ⇒ match <i>R</i> to <i>r</i><sub>eq</sub>.',
  },

  // ── Topic 07 · Kirchhoff’s Laws & Electrical Networks ──
  // pp. 207, 209, 218
  {
    topic: 7,
    kind: 'remember',
    q: 'Kirchhoff’s junction rule, and what is it based on?',
    a: 'Σ<i>I</i> = 0 at a junction, i.e. Σ<i>I</i><sub>in</sub> = Σ<i>I</i><sub>out</sub>: conservation of charge',
    why: 'No charge can pile up at a junction: whatever flows in per second must flow out.',
    say: 'Junction = no pile-up (charge in = charge out).',
  },
  // pp. 207, 209, 218
  {
    topic: 7,
    kind: 'remember',
    q: 'Kirchhoff’s loop rule, and what is it based on?',
    a: 'ΣΔ<i>V</i> = 0 around a closed loop, i.e. Σ<i>E</i> = Σ<i>IR</i>: conservation of energy, since electric potential is single-valued',
    why: 'The form Σ<i>E</i> = Σ<i>IR</i> assumes the only potential changes come from cells and resistors.',
    say: 'Loop = back home, zero net climb.',
  },
  // pp. 207, 217–218
  {
    topic: 7,
    kind: 'mixup',
    q: 'Writing the loop rule: what decides the sign of an <i>IR</i> term, and of an EMF term?',
    a: 'Resistor: −<i>IR</i> moving along the assumed current, +<i>IR</i> against it. EMF: +<i>E</i> crossing from the − to the + terminal, −<i>E</i> from + to −',
    why: 'The EMF sign depends only on the terminals you cross, never on the current direction. Sign chaos here is the #1 error.',
    say: null,
  },
  // pp. 209, 217–218
  {
    topic: 7,
    kind: 'mistake',
    q: 'Solving a network gives a negative current. Did you go wrong?',
    a: 'No: the real direction is just opposite to the one you assumed. Keep the magnitude, flip the arrow, move on; never re-solve',
    why: 'Count equations before you start: <i>b</i> branches and <i>n</i> nodes give <i>n</i> − 1 independent junction equations and <i>b</i> − <i>n</i> + 1 independent loops.',
    say: null,
  },
  // pp. 209, 217–218
  {
    topic: 7,
    kind: 'shortcut',
    q: 'A bridge network of five resistors. What do you check first?',
    a: 'Balance: if <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> (<i>PS</i> = <i>QR</i>), then <i>I</i><sub>g</sub> = 0, so delete the bridge arm and reduce by series and parallel',
    why: 'With <i>P</i> = 2 Ω, <i>Q</i> = 4 Ω, <i>R</i> = 3 Ω, <i>S</i> = 6 Ω it is balanced, so the equivalent resistance is just 6 Ω in parallel with 9 Ω, 3.6 Ω.',
    say: 'Balanced bridge: cross-products equal — <i>PS</i> = <i>QR</i>.',
  },

  // ── Topic 08 · Wheatstone Bridge & Measuring Instruments ──
  // pp. 220, 228
  {
    topic: 8,
    kind: 'remember',
    q: 'A meter bridge balances at a length <i>l</i> (in cm), measured from the end on the side of the known <i>R</i>. The unknown <i>X</i>?',
    a: '<i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>), so <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>',
    why: 'This assumes a perfectly uniform wire; aim for the null near 50 cm. Reading <i>l</i> from the wrong end silently inverts the answer.',
    say: null,
  },
  // pp. 220, 228
  {
    topic: 8,
    kind: 'remember',
    q: 'The principle of the potentiometer, and how does it compare two EMFs?',
    a: 'A uniform wire with a steady current gives <i>V</i> ∝ <i>l</i>, with a constant gradient <i>k</i> = <i>V</i>/<i>L</i> = <i>IR</i><sub>wire</sub>/<i>L</i>. Then <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>',
    why: 'The driver must be the stronger source: a potentiometer can balance only an EMF smaller than the total drop across its wire.',
    say: null,
  },
  // pp. 219–220, 228
  {
    topic: 8,
    kind: 'mixup',
    q: 'A voltmeter and a potentiometer are each used on a cell. Which one reads its true EMF?',
    a: 'The potentiometer: at balance no current flows from the cell, so it reads the true EMF. A voltmeter draws current and reads <i>E</i> − <i>Ir</i>',
    why: 'Don’t equate a voltmeter reading with the EMF in a problem that hinges on the difference.',
    say: 'Null means no theft — zero current at balance ⇒ true EMF, no loading.',
  },
  // pp. 220, 228–229
  {
    topic: 8,
    kind: 'mistake',
    q: 'A cell balances at <i>l</i><sub>1</sub> on open circuit and at <i>l</i><sub>2</sub> with a resistance <i>R</i> across it. Its internal resistance?',
    a: '<i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>: open length minus loaded length, over the loaded length',
    why: 'Writing (<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>)/<i>l</i><sub>1</sub> gives a negative, nonsensical answer.',
    say: 'Internal resistance: open minus loaded, over loaded.',
  },
  // p. 228
  {
    topic: 8,
    kind: 'shortcut',
    q: 'A potentiometer ratio question: comparing EMFs, internal resistance, sum and difference. Do you need <i>k</i>?',
    a: 'No: the gradient <i>k</i> cancels in every ratio. Work directly with the balance lengths, and compute <i>k</i> only for an absolute voltage',
    why: 'Sum and difference: <i>E</i><sub>1</sub> + <i>E</i><sub>2</sub> = <i>kl</i><sub>s</sub> and <i>E</i><sub>1</sub> − <i>E</i><sub>2</sub> = <i>kl</i><sub>d</sub>, so <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = (<i>l</i><sub>s</sub> + <i>l</i><sub>d</sub>)/(<i>l</i><sub>s</sub> − <i>l</i><sub>d</sub>).',
    say: '<i>k</i> cancels in every ratio — only compute it for an absolute voltage.',
  },

  // ── Additional A · Delta-Star (Y-Δ) Transformation ──
  // pp. 235–236
  {
    topic: 9,
    kind: 'remember',
    q: 'A delta of resistors <i>R</i><sub>12</sub>, <i>R</i><sub>23</sub>, <i>R</i><sub>31</sub> is converted to a star. Each star arm?',
    a: 'The product of the two delta resistors meeting at its node, over the sum of all three: <i>R</i><sub>1</sub> = <i>R</i><sub>12</sub><i>R</i><sub>31</sub>/(<i>R</i><sub>12</sub> + <i>R</i><sub>23</sub> + <i>R</i><sub>31</sub>), and so on. An equal delta <i>R</i><sub>Δ</sub> gives arms of <i>R</i><sub>Δ</sub>/3',
    why: 'The reverse, star to delta: <i>R</i><sub>12</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/<i>R</i><sub>3</sub>, and so on; the two transformations undo each other.',
    say: null,
  },
  // pp. 235–236
  {
    topic: 9,
    kind: 'remember',
    q: 'When do you need the delta-star transformation, and which way do you convert?',
    a: 'When a triangle (delta) or a star of resistors has no series or parallel reduction. Convert whichever shape lets the rest of the network reduce by series and parallel',
    why: 'A delta whose three corners all connect to the rest of the circuit usually becomes a star: its arms then fall in series with resistors already at those corners.',
    say: null,
  },

  // ── Additional B · Infinite Resistor Networks and Symmetric Grids ──
  // p. 239
  {
    topic: 10,
    kind: 'remember',
    q: 'How does symmetry find points at equal potential in a resistor network?',
    a: 'If a reflection or rotation maps the network onto itself and leaves the entry and exit nodes in place, nodes carried into one another are at equal potential, and can be joined by a wire without changing any current',
    why: 'If the symmetry instead exchanges the entry and exit nodes, every node on its mirror plane sits exactly midway in potential between them.',
    say: null,
  },
  // p. 239
  {
    topic: 10,
    kind: 'remember',
    q: 'The resistance between two adjacent nodes A and B of an infinite square grid of resistors <i>R</i>?',
    a: '<i>R</i>/2. Superpose “<i>I</i> enters at A, leaves at infinity” and “<i>I</i> enters from infinity, leaves at B”: each sends <i>I</i>/4 along the bond AB, so it carries <i>I</i>/2',
    why: 'Then <i>V</i><sub>AB</sub> = (<i>I</i>/2)<i>R</i> and <i>R</i><sub>AB</sub> = <i>V</i><sub>AB</sub>/<i>I</i> = <i>R</i>/2. Superposition works because the currents in a resistor network are linear in the applied currents.',
    say: null,
  },

  // ── Additional C · Mesh Analysis (Systematic Loop Current Method) ──
  // pp. 242–243
  {
    topic: 11,
    kind: 'remember',
    q: 'Mesh analysis: how many equations, and what current does a resistor shared by two meshes carry?',
    a: 'One KVL equation for each independent mesh, <i>m</i> = <i>b</i> − <i>n</i> + 1 for a planar circuit, and no junction equations. A shared resistor carries the difference of the two mesh currents, <i>I</i><sub><i>i</i></sub> − <i>I</i><sub><i>j</i></sub>',
    why: 'Mesh currents satisfy the junction rule automatically; each actual branch current is the algebraic sum of the mesh currents through that branch.',
    say: null,
  },
  // pp. 243, 245
  {
    topic: 11,
    kind: 'remember',
    q: 'A current source sits in the branch shared by two meshes. How do you write the equations?',
    a: 'Use a supermesh: KVL around the outer boundary that avoids the source, plus the constraint that the two mesh currents differ by the source current',
    why: 'The voltage across the current source is unknown, which makes the two separate mesh equations useless.',
    say: null,
  },

  // ── Additional D · Advanced Potentiometry ──
  // pp. 245–248
  {
    topic: 12,
    kind: 'remember',
    q: 'A known <i>R</i><sub>1</sub> balances at <i>l</i><sub>1</sub> and an unknown <i>R</i><sub>X</sub> at <i>l</i><sub>X</sub> on a potentiometer. <i>R</i><sub>X</sub>, and the condition?',
    a: '<i>R</i><sub>X</sub> = <i>R</i><sub>1</sub><i>l</i><sub>X</sub>/<i>l</i><sub>1</sub>, provided the same current flows through each: connect them in series in the secondary circuit',
    why: 'For a very small resistance this beats a Wheatstone bridge: at balance the potential leads carry no current, so lead and contact resistances do not enter.',
    say: null,
  },
  // pp. 246–247
  {
    topic: 12,
    kind: 'remember',
    q: 'A wire balances at <i>l</i><sub>1</sub> at temperature <i>T</i><sub>1</sub> and at <i>l</i><sub>2</sub> at <i>T</i><sub>2</sub>, with the same current each time. Its temperature coefficient?',
    a: '<i>α</i> = (<i>l</i><sub>2</sub>/<i>l</i><sub>1</sub> − 1)/(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>), since <i>R</i><sub>2</sub>/<i>R</i><sub>1</sub> = <i>l</i><sub>2</sub>/<i>l</i><sub>1</sub>',
    why: 'The lengths give only the ratio: <i>T</i><sub>2</sub> − <i>T</i><sub>1</sub> must still be known. 50 cm at 0 °C and 70 cm in steam at 100 °C give <i>α</i> = 0.4/100 = 4 × 10<sup>−3</sup> °C<sup>−1</sup>.',
    say: null,
  },

  // ── Additional E · Unbalanced Bridge and Galvanometer Current ──
  // pp. 248–249
  {
    topic: 13,
    kind: 'remember',
    q: 'A Wheatstone bridge with arms <i>P</i> = AB, <i>Q</i> = BC, <i>R</i> = AD, <i>S</i> = DC is unbalanced. The current through the galvanometer <i>G</i>, from B to D?',
    a: '<i>I</i><sub>g</sub> = <i>E</i>(<i>QR</i> − <i>PS</i>)/[<i>G</i>(<i>P</i> + <i>Q</i>)(<i>R</i> + <i>S</i>) + <i>PQ</i>(<i>R</i> + <i>S</i>) + <i>RS</i>(<i>P</i> + <i>Q</i>)]',
    why: 'For a source of negligible internal resistance across A and C. The numerator vanishes exactly at balance, <i>QR</i> = <i>PS</i>; a negative <i>I</i><sub>g</sub> flows from D to B.',
    say: null,
  },
  // pp. 249–250
  {
    topic: 13,
    kind: 'remember',
    q: 'A balanced bridge, all four arms <i>R</i><sub>0</sub>, has <i>S</i> raised slightly to <i>R</i><sub>0</sub>(1 + <i>δ</i>). The galvanometer current?',
    a: '<i>I</i><sub>g</sub> ≈ −<i>Eδ</i>/(4(<i>G</i> + <i>R</i><sub>0</sub>)), for |<i>δ</i>| ≪ 1: proportional to <i>δ</i>, and flowing from D to B',
    why: 'The sensitivity |d<i>I</i><sub>g</sub>/d<i>δ</i>| ≈ <i>E</i>/(4(<i>G</i> + <i>R</i><sub>0</sub>)) reduces to <i>E</i>/(4<i>G</i>) only for <i>G</i> ≫ <i>R</i><sub>0</sub>.',
    say: null,
  },

  // ── Additional F · Non-Identical Cells: Maximum Power and Optimal Grouping ──
  // pp. 251–253
  {
    topic: 14,
    kind: 'remember',
    q: 'A pack of non-identical cells drives a fixed load <i>R</i><sub>L</sub>. How do you pick the best grouping?',
    a: 'Find <i>E</i><sub>eq</sub> and <i>r</i><sub>eq</sub> for each grouping and choose the one with the largest current <i>E</i><sub>eq</sub>/(<i>R</i><sub>L</sub> + <i>r</i><sub>eq</sub>), since <i>P</i> = <i>I</i><sup>2</sup><i>R</i><sub>L</sub>',
    why: 'Only a load that can be varied is best matched at <i>R</i><sub>L</sub> = <i>r</i><sub>eq</sub>, with <i>P</i><sub>max</sub> = <i>E</i><sub>eq</sub><sup>2</sup>/(4<i>r</i><sub>eq</sub>); for a fixed load, <i>E</i><sub>eq</sub><sup>2</sup>/<i>r</i><sub>eq</sub> can rank the groupings wrongly.',
    say: null,
  },
  // pp. 253–255
  {
    topic: 14,
    kind: 'mistake',
    q: 'Two cells with <i>E</i><sub>1</sub> > <i>E</i><sub>2</sub> are joined in parallel across a load <i>R</i>. Does the weaker cell always help?',
    a: 'No: when <i>R</i> > <i>E</i><sub>2</sub><i>r</i><sub>1</sub>/(<i>E</i><sub>1</sub> − <i>E</i><sub>2</sub>), the stronger cell pushes current backwards through the weaker one, charging it',
    why: 'That current wastes energy as heat in both internal resistances; for equal internal resistances, the pair then delivers less power than the stronger cell alone.',
    say: null,
  },

  // ── Additional G · Integrated Problem Set ──
  // p. 232
  {
    topic: 15,
    kind: 'remember',
    q: 'A 4 Ω wire is stretched until its length doubles, then cut into two equal halves joined in parallel. The final resistance?',
    a: '4 Ω, back where it started: stretching gives 4 × 2<sup>2</sup> = 16 Ω, each half is 8 Ω, and two 8 Ω in parallel give 4 Ω',
    why: 'Stretching keeps the volume constant, so <i>R</i> ∝ <i>L</i><sup>2</sup>.',
    say: null,
  },
  // p. 232
  {
    topic: 15,
    kind: 'remember',
    q: 'A battery (12 V, 0.5 Ω) feeds 4 Ω in series with 6 Ω ∥ 3 Ω. The battery current and its terminal voltage?',
    a: 'External <i>R</i> = 4 + 2 = 6 Ω, so <i>I</i> = 12/6.5 ≈ 1.85 A and <i>V</i> = <i>E</i> − <i>Ir</i> ≈ 11.08 V',
    why: 'The power lost inside the battery is <i>I</i><sup>2</sup><i>r</i> ≈ 1.70 W, and the 6 Ω carries 3.69/6 ≈ 0.62 A.',
    say: null,
  },
];
