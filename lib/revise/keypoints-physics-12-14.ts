/**
 * KEY POINTS for Physics Class 12, Chapter 14 (Semiconductor Electronics:
 * Materials, Devices and Simple Circuits).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: 0 is the '00' syllabus opening (no key points); Topics 01–04 are
 * 1–4 (the book's Subtopics 1–4); Additional topics A–E are 5–9.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's Memory aids, word for word (quotation marks dropped). Additional
 * topics: the Supplement's addenda.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Label
 * subscripts are upright (<i>n</i><sub>e</sub>, <i>n</i><sub>h</sub>,
 * <i>n</i><sub>i</sub>, <i>E</i><sub>g</sub>, <i>k</i><sub>B</sub>,
 * <i>V</i><sub>b</sub>, <i>V</i><sub>T</sub>, <i>I</i><sub>S</sub>,
 * <i>V</i><sub>Z</sub>, <i>I</i><sub>SC</sub>, <i>V</i><sub>OC</sub>,
 * <i>C</i><sub>j</sub>, <i>r</i><sub>d</sub>). An exponent that holds a
 * subscript is written exp(…), as the Supplement writes it. The ideality
 * factor is the Supplement's <i>n</i>. NOT is an overline: U+0305 after each
 * character it covers (<i>A</i>̅, <i>A</i>̅+̅<i>B</i>̅). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Energy Bands and Intrinsic / Extrinsic Semiconductors ──
  // pp. 866–867, 869, 876–877
  {
    topic: 1,
    kind: 'remember',
    q: 'Conductor, semiconductor and insulator: how do their energy bands differ?',
    a: 'Conductor: the conduction band overlaps the valence band or is partly filled, <i>E</i><sub>g</sub> ≈ 0. Semiconductor: a small gap, <i>E</i><sub>g</sub> < 3 eV (silicon ≈ 1.1 eV, germanium ≈ 0.7 eV), so thermal energy lifts a few electrons across. Insulator: <i>E</i><sub>g</sub> > 3 eV (diamond ≈ 5.4 eV), so none cross at room temperature',
    why: 'Each electron that crosses leaves a hole, a mobile positive vacancy, so a pure semiconductor conducts by electrons and holes in equal numbers. At 0 K its valence band is full and its conduction band empty: a perfect insulator.',
    say: null,
  },
  // pp. 867–869, 871, 876–877
  {
    topic: 1,
    kind: 'remember',
    q: 'The law of mass action, and the conductivity of a semiconductor?',
    a: '<i>n</i><sub>e</sub><i>n</i><sub>h</sub> = <i>n</i><sub>i</sub><sup>2</sup> in thermal equilibrium, for pure and doped samples alike, where <i>n</i><sub>i</sub> ∝ <i>T</i><sup>3/2</sup> exp(−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)) depends only on the material and the temperature. Two carriers conduct: <i>σ</i> = <i>e</i>(<i>n</i><sub>e</sub><i>μ</i><sub>e</sub> + <i>n</i><sub>h</sub><i>μ</i><sub>h</sub>), and <i>ρ</i> = 1/<i>σ</i>',
    why: 'Silicon with <i>n</i><sub>i</sub> = 1.5 × 10<sup>16</sup> m<sup>−3</sup> doped to <i>n</i><sub>e</sub> = 5 × 10<sup>22</sup> m<sup>−3</sup>: <i>n</i><sub>h</sub> = 2.25 × 10<sup>32</sup>/(5 × 10<sup>22</sup>) = 4.5 × 10<sup>9</sup> m<sup>−3</sup>.',
    say: null,
  },
  // pp. 870–872, 876–877
  {
    topic: 1,
    kind: 'mixup',
    q: 'Pentavalent and trivalent impurities: which gives which type, and where does each put its energy level?',
    a: 'Pentavalent (P, As, Sb) is a donor: its fifth electron is loosely bound (about 0.01 eV in germanium, 0.05 eV in silicon), in a donor level just below the conduction band, so the crystal is n-type, <i>n</i><sub>e</sub> ≫ <i>n</i><sub>h</sub>, Fermi level near the conduction band. Trivalent (B, Al, In, Ga) is an acceptor: one bond is left short, an acceptor level about 0.01–0.05 eV above the valence band, so the crystal is p-type, <i>n</i><sub>h</sub> ≫ <i>n</i><sub>e</sub>, Fermi level near the valence band',
    why: 'Doping is about one impurity atom per 10<sup>6</sup> host atoms (≈ 1 ppm). Germanium doped with indium is p-type, with holes the majority carriers.',
    say: 'PeNtavalent → N-type (the N in peNtavalent flags N-type).',
  },
  // pp. 871, 875–876
  {
    topic: 1,
    kind: 'mistake',
    q: 'Is an n-type semiconductor negatively charged, and has doping changed its <i>n</i><sub>i</sub>?',
    a: 'No to both. Every doped crystal stays electrically neutral: each extra mobile electron is balanced by a fixed, positively charged donor ion, and “n” and “p” name only the sign of the majority mobile carrier. Doping changes <i>n</i><sub>e</sub> and <i>n</i><sub>h</sub> individually, but their product stays <i>n</i><sub>i</sub><sup>2</sup>',
    why: 'And the temperature coefficient of a semiconductor’s resistance is negative: heating makes more electron–hole pairs, so resistance falls, the opposite of a metal.',
    say: 'Trivalent gives a hole because it’s one bond short.',
  },
  // pp. 873–874, 876
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Ranking samples by their carrier numbers at different band gaps or temperatures. The fast way?',
    a: 'Do not compute: compare the exponent in exp(−<i>E</i><sub>g</sub>/(2<i>k</i><sub>B</sub><i>T</i>)). A smaller gap or a higher temperature always means more carriers, so you can rank options by inspection',
    why: 'Pure samples with gaps of 0.7, 1.1 and 5.4 eV: the 0.7 eV one has the most carriers; the 5.4 eV one is effectively an insulator. Intrinsic conductivity that quadruples from 300 K to 320 K gives <i>E</i><sub>g</sub> ≈ 1.15 eV, keeping only the exponential.',
    say: null,
  },

  // ── Topic 02 · p-n Junction Diode and Applications ──
  // pp. 878–881, 889
  {
    topic: 2,
    kind: 'remember',
    q: 'How do the depletion region and the barrier potential of a p-n junction form?',
    a: 'Electrons diffuse from the n-side to the p-side and holes the other way, uncovering fixed positive donor ions on the n-side and fixed negative acceptor ions on the p-side. This carrier-free depletion region sets up a field from n to p, which drives a drift current back; the barrier stops growing when diffusion and drift cancel. Barrier potential <i>V</i><sub>b</sub> ≈ 0.3 V for germanium, 0.7 V for silicon',
    why: 'A junction cannot be made by pressing a p-slab against an n-slab: it must be grown as a single crystal. The barrier values are room-temperature approximations.',
    say: null,
  },
  // pp. 880–881, 884–886, 889
  {
    topic: 2,
    kind: 'remember',
    q: 'Half-wave and full-wave rectifiers: their maximum efficiencies, output frequencies and d.c. currents?',
    a: 'Half-wave: <i>η</i><sub>max</sub> = 40.6%, <i>f</i><sub>out</sub> = <i>f</i><sub>in</sub>, <i>I</i><sub>dc</sub> = <i>I</i><sub>m</sub>/π, <i>η</i> = 0.406<i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>). Full-wave: <i>η</i><sub>max</sub> = 81.2%, <i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub>, <i>I</i><sub>dc</sub> = 2<i>I</i><sub>m</sub>/π, <i>η</i> = 0.812<i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>). A centre-tap rectifier uses two diodes; a bridge uses four and no centre-tapped transformer',
    why: 'A large capacitor across the load turns the pulsating output into nearly steady d.c.; the full-wave output, with pulses twice as often, is easier to smooth. <i>r</i><sub>f</sub> = 20 Ω, <i>R</i><sub>L</sub> = 980 Ω, <i>V</i><sub>m</sub> = 10 V, half-wave: <i>I</i><sub>m</sub> = 10 mA, <i>I</i><sub>dc</sub> = 3.18 mA, <i>η</i> = 39.8%.',
    say: 'Full wave is Fully better — double the frequency, double the efficiency.',
  },
  // pp. 879–880, 883, 887–889
  {
    topic: 2,
    kind: 'mixup',
    q: 'Forward and reverse bias of a p-n junction: what happens to the barrier, the depletion region and the current?',
    a: 'Forward (p-side to +): the barrier falls to <i>V</i><sub>b</sub> − <i>V</i>, the depletion region narrows, and past the knee majority carriers flood across, the current rising exponentially. Reverse (n-side to +): the barrier rises to <i>V</i><sub>b</sub> + <i>V</i>, the depletion region widens, and only a tiny, nearly constant reverse saturation current of minority carriers flows, until breakdown',
    why: 'An ideal diode has zero forward resistance and infinite reverse resistance. Above the breakdown voltage the reverse current shoots up and an unprotected diode is destroyed by overheating.',
    say: 'Forward = Friendly, barrier Falls; Reverse = Resists, barrier Rises.',
  },
  // pp. 884–885, 888
  {
    topic: 2,
    kind: 'mistake',
    q: 'A silicon diode (barrier 0.7 V, negligible forward resistance) in series with 430 Ω across a 5 V battery, forward biased. Is the current 5/430 A?',
    a: 'No: the diode is non-ohmic, so never apply <i>V</i> = <i>IR</i> across it. Forward biased it takes a fixed 0.7 V drop, and only the rest drives the resistor: <i>I</i> = (<i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>)/(<i>R</i> + <i>r</i><sub>f</sub>) = 4.3/430 = 10 mA, not 11.6 mA',
    why: 'Dropping the −<i>V</i><sub>b</sub> is the most frequent numerical error. A germanium diode (0.3 V, <i>r</i><sub>f</sub> = 15 Ω) with 285 Ω across 6 V: 5.7/300 = 19 mA.',
    say: null,
  },
  // pp. 883, 885, 889
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Any diode circuit with several diodes. The fast way to the currents?',
    a: 'Redraw it with the switch model: a forward diode is a wire (or a 0.7 V battery), a reverse diode is a gap. The circuit becomes resistor algebra, and the dead branches show at once',
    why: 'A germanium (0.3 V) and a silicon (0.7 V) diode in parallel, both forward biased: the germanium conducts first and clamps the voltage near 0.3 V, so the silicon diode stays off.',
    say: null,
  },

  // ── Topic 03 · Special-Purpose Diodes: Zener, Photodiode, LED and Solar Cell ──
  // pp. 890–891, 893, 896, 901
  {
    topic: 3,
    kind: 'remember',
    q: 'How does a Zener diode regulate a voltage, and what sets the series resistor?',
    a: 'Heavy doping on both sides makes the depletion region very thin (under 10<sup>−6</sup> m), so the field is huge and breakdown is sharp at <i>V</i><sub>Z</sub>. Reverse biased in parallel with the load, behind a series resistor, it holds <i>V</i><sub>out</sub> = <i>V</i><sub>Z</sub>: with <i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>, <i>R</i><sub>S</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>)/(<i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>). A rise in <i>V</i><sub>in</sub> just sends more current through the Zener',
    why: '<i>V</i><sub>Z</sub> = 6.0 V, <i>V</i><sub>in</sub> = 12 V, <i>I</i><sub>L</sub> = 10 mA, <i>I</i><sub>Z</sub> = 20 mA: <i>R</i><sub>S</sub> = 6.0 V/30 mA = 200 Ω. It regulates only while in breakdown.',
    say: 'Zener clamps like a weir — extra current spills, voltage stays.',
  },
  // pp. 890–891, 893–895, 899, 901
  {
    topic: 3,
    kind: 'remember',
    q: 'The LED, the photodiode and the solar cell: how is each biased, and what links each to the band gap?',
    a: 'LED: forward biased; electrons and holes recombine and emit photons of <i>hν</i> ≈ <i>E</i><sub>g</sub>, so visible light needs <i>E</i><sub>g</sub> ≈ 1.8–3.1 eV and Si and Ge give only infrared. Photodiode: reverse biased; photons of <i>hν</i> ≥ <i>E</i><sub>g</sub> make electron–hole pairs, a photocurrent proportional to intensity. Solar cell: no bias, a large-area junction that makes its own emf, best with <i>E</i><sub>g</sub> ~1.1–1.5 eV',
    why: 'A photodiode passes far more current forward, but in reverse bias the dark current is tiny, so light makes a large fractional change: reverse bias is chosen for sensitivity, not size of current.',
    say: null,
  },
  // pp. 890–891, 899–901
  {
    topic: 3,
    kind: 'mixup',
    q: 'A photodiode and a solar cell are both illuminated junctions. What tells them apart?',
    a: 'The external supply. A photodiode is reverse biased by an external supply and works as a detector; a solar cell has no external bias and works as a generator, its built-in field driving the current through the load',
    why: 'The full bias map: Zener (as regulator) and photodiode reverse, LED forward, solar cell none. A Zener used forward is just an ordinary diode.',
    say: 'Bias map: Zener & Photodiode = Reverse; LED = Forward; Solar = None.',
  },
  // pp. 898–900
  {
    topic: 3,
    kind: 'mistake',
    q: 'Sizing the series resistor so a Zener stays within its power rating: which input voltage and which load do you take?',
    a: 'The worst case, never the average: maximum input voltage and minimum load (no load), when all the line current flows through the Zener. Then (<i>V</i><sub>in,max</sub> − <i>V</i><sub>Z</sub>)/<i>R</i><sub>S</sub> ≤ <i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub>',
    why: 'A 2.0 W, 10 V Zener on a line of 15–20 V: <i>I</i><sub>Z,max</sub> = 0.20 A, so <i>R</i><sub>S</sub> ≥ (20 − 10)/0.20 = 50 Ω.',
    say: null,
  },
  // pp. 893, 895, 898, 901
  {
    topic: 3,
    kind: 'shortcut',
    q: 'From a band gap to a wavelength and colour. The fast way?',
    a: 'Skip joules: <i>λ</i>(nm) = 1240/<i>E</i><sub>g</sub>(eV), since <i>hc</i> ≈ 1240 eV nm. About 620 nm is red, 590 nm yellow, 470 nm blue: a larger gap gives a shorter, bluer wavelength',
    why: 'A gap of 2.1 eV: 1240/2.1 ≈ 590 nm, yellow-orange. An LED and a photodiode of that material share it: the LED emits at 590 nm, and the photodiode detects nothing longer than 590 nm.',
    say: null,
  },

  // ── Topic 04 · Digital Electronics and Logic Gates ──
  // pp. 902–903, 907, 910
  {
    topic: 4,
    kind: 'remember',
    q: 'The Boolean expressions of OR, AND, NOT, NAND, NOR and XOR, and when each output is 1?',
    a: 'OR: <i>Y</i> = <i>A</i> + <i>B</i>, 1 if any input is 1. AND: <i>Y</i> = <i>A</i> · <i>B</i>, 1 only if all inputs are 1. NOT: <i>Y</i> = <i>A</i>̅, it inverts. NAND: <i>Y</i> = <i>A</i>̅·̅<i>B</i>̅ (AND then NOT). NOR: <i>Y</i> = <i>A</i>̅+̅<i>B</i>̅ (OR then NOT). XOR: <i>Y</i> = <i>AB</i>̅ + <i>A</i>̅<i>B</i>, 1 only when the inputs differ; XNOR is its complement',
    why: 'With <i>n</i> inputs a truth table has 2<sup><i>n</i></sup> rows. XOR is built from basic gates as two ANDs, each with one input inverted, feeding an OR.',
    say: null,
  },
  // pp. 902, 905, 907, 909, 911
  {
    topic: 4,
    kind: 'remember',
    q: 'Which gates are universal, and how does NAND alone give NOT, AND and OR?',
    a: 'NAND and NOR: either alone builds any logic circuit. From NAND: NOT is one NAND with its inputs tied (<i>A</i>̅·̅<i>A</i>̅ = <i>A</i>̅); AND is a NAND followed by a NAND-inverter (2 gates); OR is each input inverted, then NANDed (3 gates), since by De Morgan the NAND of <i>A</i>̅ and <i>B</i>̅ is <i>A</i> + <i>B</i>',
    why: 'NOR works the same way: an AND from NORs alone needs 3 gates, each input inverted and then NORed. A tied-input NOR is also a NOT.',
    say: 'NAND & NOR are the universal twins; tied inputs make them NOT.',
  },
  // pp. 905, 909–911
  {
    topic: 4,
    kind: 'mixup',
    q: 'De Morgan’s two theorems?',
    a: '<i>A</i>̅+̅<i>B</i>̅ = <i>A</i>̅ · <i>B</i>̅ and <i>A</i>̅·̅<i>B</i>̅ = <i>A</i>̅ + <i>B</i>̅: the bar is broken over each variable and the operation flips, + to · and · to +. Writing <i>A</i>̅+̅<i>B</i>̅ = <i>A</i>̅ + <i>B</i>̅ forgets the flip, the top error',
    why: 'Keep the two apart: the complement of a sum is the product of the complements, and the complement of a product is the sum of the complements.',
    say: 'De Morgan: break the bar, change the sign.',
  },
  // pp. 903, 910
  {
    topic: 4,
    kind: 'mistake',
    q: 'In Boolean algebra, what are 1 + 1 and <i>A</i> + <i>A</i>?',
    a: '1 + 1 = 1 and <i>A</i> + <i>A</i> = <i>A</i>: the “+” is OR and the “·” is AND, logic and never sums. The OR of two highs is still high. Answers of 2 or 10 treat + as ordinary or binary addition; 0 confuses OR with XOR, where 1 ⊕ 1 = 0',
    why: 'The other identities: <i>A</i> + 0 = <i>A</i>, <i>A</i> + 1 = 1, <i>A</i> + <i>A</i>̅ = 1; <i>A</i> · 0 = 0, <i>A</i> · 1 = <i>A</i>, <i>A</i> · <i>A</i> = <i>A</i>, <i>A</i> · <i>A</i>̅ = 0.',
    say: null,
  },
  // p. 910
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Identifying an unknown two-input gate. The fast way?',
    a: 'Test only the inputs (0,0), (1,1) and (0,1), and read the outputs in that order: OR 0, 1, 1; AND 0, 1, 0; NAND 1, 0, 1; NOR 1, 0, 0; XOR 0, 0, 1. Two or three rows pin the gate down',
    why: 'A NAND or NOR with its inputs tied together is always a NOT: answer that on sight.',
    say: null,
  },

  // ── Additional A · The Full Diode Equation: Temperature, Ideality Factor, and Reverse Breakdown ──
  // pp. 912–915
  {
    topic: 5,
    kind: 'remember',
    q: 'The full diode equation, and how temperature changes a diode?',
    a: '<i>I</i> = <i>I</i><sub>S</sub>(exp(<i>eV</i>/(<i>nk</i><sub>B</sub><i>T</i>)) − 1), with ideality factor <i>n</i> = 1 for an ideal junction and 1.1–1.5 for real silicon diodes; <i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> ≈ 25.9 mV at 300 K. <i>I</i><sub>S</sub> ∝ <i>T</i><sup>3</sup> exp(−<i>E</i><sub>g</sub>/(<i>k</i><sub>B</sub><i>T</i>)) grows fast with temperature, and the barrier potential and the forward voltage at fixed current fall by about 2 mV/°C',
    why: 'A silicon diode at 10 mA and 0.70 V, warmed from 300 K to 330 K at the same voltage: <i>I</i><sub>S</sub> grows about 63-fold but the exponential falls to about 0.085, so the current rises only about 5.4 times, to about 54 mA.',
    say: null,
  },
  // pp. 913, 915
  {
    topic: 5,
    kind: 'remember',
    q: 'Zener breakdown and avalanche breakdown: how do you tell which is operating?',
    a: 'By the sign of the temperature coefficient of <i>V</i><sub>Z</sub>. Zener breakdown: heavy doping, a thin junction, low <i>V</i><sub>Z</sub> (≲ 5 V), quantum tunnelling, d<i>V</i><sub>Z</sub>/d<i>T</i> < 0. Avalanche breakdown: light doping, a wide junction, high <i>V</i><sub>Z</sub> (≳ 7 V), impact ionisation, d<i>V</i><sub>Z</sub>/d<i>T</i> > 0',
    why: '5.6 V at 25 °C falling to 5.5 V at 75 °C is −2 mV/°C: Zener breakdown. 8.0 V at 20 °C rising to 8.2 V at 80 °C is +3.3 mV/°C: avalanche.',
    say: null,
  },

  // ── Additional B · Junction Capacitance and Diode Resistance ──
  // pp. 916–919
  {
    topic: 6,
    kind: 'remember',
    q: 'The capacitance of a reverse-biased junction, and how it changes with the reverse voltage?',
    a: 'The depletion region is a capacitor, <i>C</i><sub>j</sub> = <i>εA</i>/<i>W</i>, and for an abrupt junction <i>W</i> grows as √(<i>V</i><sub>b</sub> + <i>V</i>) (<i>V</i> the reverse voltage), so <i>C</i><sub>j</sub> ∝ (<i>V</i><sub>b</sub> + <i>V</i>)<sup>−1/2</sup>: more reverse voltage, less capacitance. In forward bias the stored minority carriers add a diffusion capacitance <i>C</i><sub>d</sub> = <i>τI</i><sub>D</sub>/<i>V</i><sub>T</sub> (for <i>n</i> = 1), which dominates',
    why: '<i>C</i><sub>j</sub> = 50 pF at 2 V reverse with <i>V</i><sub>b</sub> = 0.7 V becomes 50 × √(2.7/8.7) ≈ 28 pF at 8 V.',
    say: null,
  },
  // pp. 917–919
  {
    topic: 6,
    kind: 'remember',
    q: 'The dynamic resistance of a forward-biased diode?',
    a: '<i>r</i><sub>d</sub> = d<i>V</i>/d<i>I</i> = <i>nk</i><sub>B</sub><i>T</i>/(<i>eI</i><sub>D</sub>) = <i>nV</i><sub>T</sub>/<i>I</i><sub>D</sub>: at 300 K with <i>n</i> = 1, about 26 Ω at 1 mA and 2.6 Ω at 10 mA. It falls as the current rises, as the I-V curve steepens',
    why: 'A Zener with dynamic resistance 5 Ω whose current drops by 5 mA shifts its voltage by only 25 mV, which is why it regulates. <i>n</i> = 1.2 at 5 mA: <i>r</i><sub>d</sub> = 1.2 × 25.9/5 ≈ 6.2 Ω.',
    say: null,
  },

  // ── Additional C · Solar Cell: Short-Circuit Current, Open-Circuit Voltage, Fill Factor, and Efficiency ──
  // pp. 920–922
  {
    topic: 7,
    kind: 'remember',
    q: 'The short-circuit current and open-circuit voltage of a solar cell?',
    a: 'With <i>I</i> = <i>I</i><sub>L</sub> − <i>I</i><sub>S</sub>(exp(<i>eV</i>/(<i>nk</i><sub>B</sub><i>T</i>)) − 1): at <i>V</i> = 0, <i>I</i><sub>SC</sub> = <i>I</i><sub>L</sub>, proportional to light intensity and to area. At <i>I</i> = 0, <i>V</i><sub>OC</sub> ≈ (<i>nk</i><sub>B</sub><i>T</i>/<i>e</i>) ln(<i>I</i><sub>L</sub>/<i>I</i><sub>S</sub>): it grows only logarithmically with intensity, falls with temperature, and stays below <i>E</i><sub>g</sub>/<i>e</i>',
    why: '<i>I</i><sub>SC</sub> = 1 A and <i>I</i><sub>S</sub> = 10<sup>−8</sup> A with <i>n</i> = 1: <i>V</i><sub>OC</sub> = 25.9 mV × ln(10<sup>8</sup>) ≈ 477 mV, far below the 1.5 V of a 1.5 eV gap. Typical silicon gives 0.55–0.7 V.',
    say: null,
  },
  // pp. 920–922
  {
    topic: 7,
    kind: 'remember',
    q: 'The fill factor and the efficiency of a solar cell?',
    a: 'FF = <i>P</i><sub>max</sub>/(<i>I</i><sub>SC</sub><i>V</i><sub>OC</sub>), with <i>P</i><sub>max</sub> = <i>I</i><sub>mp</sub><i>V</i><sub>mp</sub> at the knee of the I-V curve; between 0 and 1, typically 0.7–0.85 for good cells. <i>η</i> = <i>P</i><sub>max</sub>/<i>P</i><sub>in</sub> = (<i>I</i><sub>SC</sub><i>V</i><sub>OC</sub> · FF)/<i>P</i><sub>in</sub>. Photons below <i>E</i><sub>g</sub> are not absorbed and the excess above it is lost as heat, so the best gap is near 1.4 eV',
    why: '<i>I</i><sub>SC</sub> = 3 A, <i>V</i><sub>OC</sub> = 0.60 V, <i>P</i><sub>max</sub> = 1.4 W on 100 cm<sup>2</sup> at 1000 W/m<sup>2</sup>: FF ≈ 0.78 and <i>η</i> = 1.4/10 = 14%.',
    say: null,
  },

  // ── Additional D · Boolean Algebra Mastery and Complex Gate Realizations ──
  // pp. 923–924
  {
    topic: 8,
    kind: 'remember',
    q: 'Reading the output of a multi-gate circuit: the method?',
    a: 'Label every wire with its Boolean expression, work gate by gate from left to right without skipping one (AND = ·, OR = +, NOT = bar), and apply De Morgan wherever a bar sits over a bracketed expression',
    why: '<i>A</i>̅ and <i>B</i>̅ into a NAND give <i>A</i> + <i>B</i>; a second NAND of that and <i>C</i> gives <i>Y</i> = (̅<i>A</i>̅+̅<i>B</i>̅)̅·̅<i>C</i>̅ = <i>A</i>̅ · <i>B</i>̅ + <i>C</i>̅, LOW only when <i>C</i> = 1 and <i>A</i> or <i>B</i> is 1.',
    say: null,
  },
  // pp. 925, 928
  {
    topic: 8,
    kind: 'remember',
    q: 'How do four NAND gates make an XOR?',
    a: '<i>T</i><sub>1</sub> = NAND(<i>A</i>, <i>B</i>), <i>T</i><sub>2</sub> = NAND(<i>A</i>, <i>T</i><sub>1</sub>), <i>T</i><sub>3</sub> = NAND(<i>B</i>, <i>T</i><sub>1</sub>), and <i>Y</i> = NAND(<i>T</i><sub>2</sub>, <i>T</i><sub>3</sub>) = <i>A</i>̅<i>B</i> + <i>AB</i>̅ = <i>A</i> ⊕ <i>B</i>. Built from basic gates XOR needs five (two NOTs, two ANDs, one OR); the NAND-only version uses four identical gates',
    why: 'Check: <i>A</i> = <i>B</i> = 1 gives <i>T</i><sub>1</sub> = 0, <i>T</i><sub>2</sub> = <i>T</i><sub>3</sub> = 1, <i>Y</i> = 0; <i>A</i> = 1, <i>B</i> = 0 gives <i>T</i><sub>1</sub> = 1, <i>T</i><sub>2</sub> = 0, <i>T</i><sub>3</sub> = 1, <i>Y</i> = 1.',
    say: null,
  },

  // ── Additional E · Reading Timing Waveforms: Gate Identification from Pulse Trains ──
  // pp. 926–927
  {
    topic: 9,
    kind: 'remember',
    q: 'Naming a gate from its input and output waveforms: the method?',
    a: 'Slice the time axis at every input transition, read <i>A</i>, <i>B</i> and <i>Y</i> in the middle of each slice, and build a mini truth table. Compare its <i>Y</i> column in the order 00, 01, 10, 11: OR 0111, AND 0001, NAND 1110, NOR 1000, XOR 0110, XNOR 1001',
    why: 'All six columns differ, so a waveform in which all four input combinations occur names the gate uniquely. A repeated combination must give the same <i>Y</i> each time.',
    say: null,
  },
  // pp. 926–927
  {
    topic: 9,
    kind: 'remember',
    q: 'The traps in reading timing waveforms?',
    a: 'Reading a trace at an edge instead of mid-slice; naming the gate from a single slice (AND and OR agree on 11, NAND and NOR on 00, so collect every distinct combination first); and overlooking XOR and XNOR: <i>Y</i> HIGH for 01 and 10 but LOW for 00 and 11 means the inputs differ, XOR',
    why: '<i>A</i>: 0 1 1 0 0 1, <i>B</i>: 0 0 1 1 0 1, <i>Y</i>: 1 1 0 1 1 0 gives 00 → 1, 01 → 1, 10 → 1, 11 → 0: a NAND gate.',
    say: null,
  },
];
