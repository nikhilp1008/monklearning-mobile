/**
 * KEY POINTS for Physics Class 12, Chapter 8 (Electromagnetic Waves).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–D are 4–7.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aids, word for word (quotation marks dropped). Additional
 * topics: the Supplement's addenda. Addendum D's points use only the node and
 * antinode positions and f<sub>n</sub> = nc/(2L), which the errata says hold
 * whichever way the incident wave travels.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. μ<sub>0</sub>
 * and ε<sub>0</sub> are upright; flux Φ is upright as the book prints it.
 * Label subscripts are upright (<i>I</i><sub>d</sub>, <i>I</i><sub>c</sub>,
 * Φ<sub>E</sub>, <i>E</i><sub>rms</sub>, <i>u</i><sub>B</sub>,
 * <i>θ</i><sub>B</sub>); vectors keep their arrows (<i>E⃗</i>, <i>B⃗</i>,
 * <i>S⃗</i>, d<i>l⃗</i>, d<i>A⃗</i>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Displacement Current and Maxwell’s Equations ──
  // pp. 519–521, 525
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the displacement current, and how big is it in the gap of a charging parallel-plate capacitor?',
    a: '<i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>, the current attributed to a changing electric flux. In the gap it equals the conduction current in the wire, <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub> = d<i>q</i>/d<i>t</i>',
    why: 'No charge crosses the gap: the changing flux mimics a current’s magnetic effect. A fully charged capacitor on steady DC has dΦ<sub>E</sub>/d<i>t</i> = 0, so <i>I</i><sub>d</sub> = 0.',
    say: 'Changing flux IS a current → <i>I</i><sub>d</sub> = ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>.',
  },
  // pp. 519–521, 525
  {
    topic: 0,
    kind: 'remember',
    q: 'The Ampère–Maxwell law, and why did Ampère’s law need the extra term?',
    a: '∮<i>B⃗</i> · d<i>l⃗</i> = μ<sub>0</sub>(<i>I</i><sub>c</sub> + <i>I</i><sub>d</sub>) = μ<sub>0</sub><i>I</i><sub>c</sub> + μ<sub>0</sub>ε<sub>0</sub> dΦ<sub>E</sub>/d<i>t</i>. Without <i>I</i><sub>d</sub>, a flat disc pierced by the wire and a balloon surface through the capacitor gap, on the same loop, gave different answers',
    why: 'With the term both give μ<sub>0</sub><i>I</i><sub>c</sub>. A changing electric field is a real source of magnetic field, even in vacuum; the original law still works for steady currents.',
    say: 'Maxwell’s four, in order: Charge, No-pole, Faraday, Ampère (G-E, G-B, F, A-M).',
  },
  // pp. 520, 525
  {
    topic: 0,
    kind: 'mixup',
    q: 'Which of Maxwell’s four equations says isolated magnetic poles do not exist?',
    a: 'Gauss’s law for magnetism, ∮<i>B⃗</i> · d<i>A⃗</i> = 0. Gauss’s law for electricity is ∮<i>E⃗</i> · d<i>A⃗</i> = <i>q</i><sub>enc</sub>/ε<sub>0</sub>; Faraday’s law is ∮<i>E⃗</i> · d<i>l⃗</i> = −dΦ<sub>B</sub>/d<i>t</i>',
    why: 'Zero net magnetic flux through any closed surface: field lines always close on themselves. The fourth, Ampère–Maxwell, gives the sources of <i>B</i>.',
    say: null,
  },
  // pp. 522–523, 525
  {
    topic: 0,
    kind: 'mistake',
    q: 'Between circular plates of radius <i>R</i>, with the displacement current <i>I</i><sub>d</sub> spread uniformly, is the field at radius <i>r</i> < <i>R</i> equal to μ<sub>0</sub><i>I</i><sub>d</sub>/(2π<i>r</i>)?',
    a: 'No: only the enclosed fraction <i>I</i><sub>d</sub><i>r</i><sup>2</sup>/<i>R</i><sup>2</sup> counts, so <i>B</i> = μ<sub>0</sub><i>I</i><sub>d</sub><i>r</i>/(2π<i>R</i><sup>2</sup>). Using the whole <i>I</i><sub>d</sub> overestimates <i>B</i>',
    why: 'Plates of radius 8.0 cm charging at 0.20 A: 5.0 × 10<sup>−7</sup> T at the edge, 2.5 × 10<sup>−7</sup> T at 4.0 cm from the axis.',
    say: null,
  },
  // pp. 523, 525
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A displacement-current numerical. The fast first move?',
    a: 'Pick the rate the data give: charge given, use d<i>q</i>/d<i>t</i>; voltage given, <i>C</i> d<i>V</i>/d<i>t</i>; field rate given, ε<sub>0</sub><i>A</i> d<i>E</i>/d<i>t</i>. In the gap <i>I</i><sub>d</sub> = <i>I</i><sub>c</sub>, so <i>A</i>, <i>d</i> and ε<sub>0</sub> often never appear',
    why: '<i>q</i> = <i>q</i><sub>0</sub> sin <i>ωt</i> with <i>q</i><sub>0</sub> = 8.0 nC at 50 Hz: peak <i>I</i><sub>d</sub> = <i>q</i><sub>0</sub>(2π<i>f</i>) ≈ 2.5 μA, with no area needed.',
    say: null,
  },

  // ── Topic 02 · Sources and Experimental Discovery of Electromagnetic Waves ──
  // pp. 526–527, 530
  {
    topic: 1,
    kind: 'remember',
    q: 'Which charges radiate electromagnetic waves, and at what frequency?',
    a: 'Only accelerating charges. A charge at rest, or moving at constant velocity (a steady current), does not radiate; a charge oscillating at <i>ν</i> radiates at exactly that frequency, <i>ν</i><sub>wave</sub> = <i>ν</i><sub>charge</sub>',
    why: 'An LC circuit is a tunable source, <i>ν</i> = 1/(2π√(<i>LC</i>)): 0.50 μH with 2.0 pF radiates about 1.6 × 10<sup>8</sup> Hz, radio (VHF). The waves need no medium.',
    say: 'Shake a charge, make a wave — acceleration is the source.',
  },
  // pp. 527–528, 530
  {
    topic: 1,
    kind: 'remember',
    q: 'The energy flow of an EM wave, and the intensity at distance <i>r</i> from an isotropic source of power <i>P</i>?',
    a: 'The Poynting vector <i>S⃗</i> = (1/μ<sub>0</sub>)<i>E⃗</i> × <i>B⃗</i>, along the direction of travel, with |<i>S⃗</i>|<sub>avg</sub> = <i>I</i> = <i>E</i><sub>rms</sub><sup>2</sup>/(μ<sub>0</sub><i>c</i>). For a point source <i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>)',
    why: 'The energy spreads over a sphere: 60 W radiated isotropically gives about 5.3 × 10<sup>−3</sup> W m<sup>−2</sup> at 30 m.',
    say: 'Point source: double the distance, quarter the intensity (<i>I</i> ∝ 1/<i>r</i><sup>2</sup>).',
  },
  // pp. 527–528, 530
  {
    topic: 1,
    kind: 'mixup',
    q: 'Maxwell or Hertz: who predicted electromagnetic waves, and who demonstrated them?',
    a: 'Maxwell predicted them theoretically (1865); Hertz produced and detected them experimentally (1887), with a spark-gap transmitter and a separate receiving loop. Bose and Marconi then applied them',
    why: 'Hertz found the wavelength from standing waves and got <i>v</i> = <i>νλ</i> equal to <i>c</i>. Bose made microwaves in Kolkata; Marconi built long-range radio.',
    say: 'Predicted, Proved, Applied = Maxwell, Hertz, Bose/Marconi.',
  },
  // pp. 529–530
  {
    topic: 1,
    kind: 'mistake',
    q: 'The distance from an isotropic source grows from 10 m to 40 m. Does the rms electric field fall to one-sixteenth?',
    a: 'No, to one-quarter: the intensity falls as 1/<i>r</i><sup>2</sup>, to one-sixteenth, but the field falls as 1/<i>r</i>, since <i>E</i><sub>rms</sub> = √(<i>I</i>/(ε<sub>0</sub><i>c</i>))',
    why: 'Students often apply the wrong power. The field ratio is 4 ∶ 1 and the intensity ratio 16 ∶ 1.',
    say: null,
  },
  // pp. 528, 530
  {
    topic: 1,
    kind: 'shortcut',
    q: 'An isotropic source of power <i>P</i>, and a small surface at distance <i>r</i>. The fast way to the field and the radiation pressure?',
    a: 'Walk one ladder: <i>P</i> → <i>I</i> = <i>P</i>/(4π<i>r</i><sup>2</sup>) → <i>E</i><sub>rms</sub> = √(<i>I</i>/(ε<sub>0</sub><i>c</i>)) → pressure <i>I</i>/<i>c</i> (or 2<i>I</i>/<i>c</i> if reflecting)',
    why: '1.0 kW at 10 m gives 0.80 W m<sup>−2</sup>; on a perfectly absorbing 1.0 cm<sup>2</sup> disc that is <i>IA</i>/<i>c</i> ≈ 2.7 × 10<sup>−13</sup> N, double if it reflects.',
    say: null,
  },

  // ── Topic 03 · Nature and Properties of Electromagnetic Waves ──
  // pp. 531, 533–534, 536
  {
    topic: 2,
    kind: 'remember',
    q: 'The speed of a plane EM wave in vacuum, and how are its <i>E⃗</i> and <i>B⃗</i> related?',
    a: '<i>c</i> = 1/√(μ<sub>0</sub>ε<sub>0</sub>) ≈ 3 × 10<sup>8</sup> m s<sup>−1</sup>, with <i>E</i>/<i>B</i> = <i>c</i> at every instant (<i>E</i><sub>0</sub> = <i>cB</i><sub>0</sub>). <i>E⃗</i> and <i>B⃗</i> are perpendicular to each other and to the direction of travel, which is along <i>E⃗</i> × <i>B⃗</i>',
    why: 'The wave is transverse, which is why EM waves can be polarised. Its speed is set entirely by μ<sub>0</sub> and ε<sub>0</sub>, not by frequency, amplitude or intensity.',
    say: 'E cross B shows the way — propagation along <i>E⃗</i> × <i>B⃗</i>.',
  },
  // pp. 531, 533–534, 536
  {
    topic: 2,
    kind: 'remember',
    q: 'How is the energy of a plane EM wave shared between its fields, and what is its intensity?',
    a: 'Equally: <i>u</i><sub>E</sub> = ½ε<sub>0</sub><i>E</i><sup>2</sup> equals <i>u</i><sub>B</sub> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>), so ⟨<i>u</i>⟩ = ½ε<sub>0</sub><i>E</i><sub>0</sub><sup>2</sup> = ε<sub>0</sub><i>E</i><sub>rms</sub><sup>2</sup> and <i>I</i> = ⟨<i>u</i>⟩<i>c</i> = ½ε<sub>0</sub><i>cE</i><sub>0</sub><sup>2</sup>',
    why: '<i>B</i> = <i>E</i>/<i>c</i> is numerically tiny, yet the magnetic field carries exactly half the energy: magnetic energy is never negligible.',
    say: 'Equal energy, in phase, perpendicular — the three core properties.',
  },
  // pp. 533, 535–536
  {
    topic: 2,
    kind: 'mixup',
    q: 'Light of intensity <i>I</i> falls normally on a surface. The radiation pressure on a perfect absorber, and on a perfect reflector?',
    a: 'Absorber: <i>I</i>/<i>c</i>. Perfect reflector: 2<i>I</i>/<i>c</i>, because reflection reverses the momentum and doubles the transfer. Energy <i>U</i> fully absorbed delivers momentum <i>U</i>/<i>c</i>',
    why: 'Read the surface carefully. A perfectly reflecting 50 m<sup>2</sup>, 2.0 kg sail facing sunlight of 1.36 kW m<sup>−2</sup> feels 2<i>IA</i>/<i>c</i> ≈ 4.5 × 10<sup>−4</sup> N.',
    say: 'Reflect = double: 2<i>I</i>/<i>c</i>. Absorb = single: <i>I</i>/<i>c</i>.',
  },
  // pp. 531, 535–536
  {
    topic: 2,
    kind: 'mistake',
    q: 'In a travelling EM wave, are <i>E</i> and <i>B</i> 90° out of phase?',
    a: 'No: in a travelling EM wave they are in phase, peaking and passing through zero together. The 90° idea leaks in from LC circuits, different physics',
    why: 'Nor is <i>E</i> = <i>cB</i> used inside a medium: there <i>v</i> = <i>c</i>/<i>n</i> = 1/√(<i>με</i>) and <i>E</i> = <i>vB</i>; the frequency stays the same and the wavelength shrinks.',
    say: null,
  },
  // pp. 535–536
  {
    topic: 2,
    kind: 'shortcut',
    q: 'An intensity problem asks for <i>E</i><sub>0</sub>, <i>B</i><sub>0</sub> and the pressure. The fast way?',
    a: 'Anchor to one formula, <i>I</i> = ½ε<sub>0</sub><i>cE</i><sub>0</sub><sup>2</sup>. From <i>E</i><sub>0</sub> get <i>B</i><sub>0</sub> = <i>E</i><sub>0</sub>/<i>c</i>; the pressure is just <i>I</i>/<i>c</i> (or 2<i>I</i>/<i>c</i>)',
    why: 'A laser of average intensity 5.0 × 10<sup>3</sup> W m<sup>−2</sup> has <i>E</i><sub>0</sub> ≈ 1.9 × 10<sup>3</sup> V m<sup>−1</sup> and <i>B</i><sub>0</sub> ≈ 6.5 × 10<sup>−6</sup> T.',
    say: null,
  },

  // ── Topic 04 · The Electromagnetic Spectrum ──
  // pp. 537–538, 541
  {
    topic: 3,
    kind: 'remember',
    q: 'The electromagnetic spectrum, in order of rising frequency?',
    a: 'Radio → microwave → infrared → visible → ultraviolet → X-ray → gamma. Frequency and photon energy <i>E</i> = <i>hf</i> = <i>hc</i>/<i>λ</i> rise, the wavelength falls, and in vacuum all travel at <i>c</i> = <i>fλ</i>',
    why: 'The band boundaries are approximate and overlap, so bands are classified by how they are produced and detected. Visible light is 400–700 nm.',
    say: 'Running Men In Vans Use eXtra Gas — Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, Gamma.',
  },
  // pp. 538, 541
  {
    topic: 3,
    kind: 'remember',
    q: 'How is each band of the spectrum produced?',
    a: 'Radio: accelerated charges in antennas (LC oscillators). Microwave: klystrons, magnetrons, Gunn diodes. Infrared: hot bodies, vibrating molecules. Visible: electron transitions in atoms. UV: very hot bodies (the Sun), special lamps. X-rays: sudden deceleration of fast electrons on a metal target. Gamma: radioactive nuclei',
    why: 'More energetic waves need more energetic production: circuit oscillations at the bottom, nuclear processes at the top.',
    say: 'Higher frequency, shorter wave, stronger punch — the whole spectrum in six words.',
  },
  // pp. 539–540
  {
    topic: 3,
    kind: 'mixup',
    q: 'Gamma rays, microwaves, visible light, X-rays: in order of increasing wavelength?',
    a: 'Gamma < X-rays < visible < microwaves: increasing wavelength means decreasing frequency, the reverse of the frequency order',
    why: 'Don’t copy the frequency sequence for wavelength. And UV is higher in energy than IR: UV sits above visible, IR below.',
    say: null,
  },
  // pp. 540–541
  {
    topic: 3,
    kind: 'mistake',
    q: 'A radio wave and a gamma ray cross vacuum. Does the more energetic gamma ray travel faster?',
    a: 'No: in vacuum every band travels at <i>c</i>, whatever its frequency. Speed changes only in a medium, <i>v</i> = <i>c</i>/<i>n</i>, and the frequency itself never changes',
    why: 'Energy and speed are unrelated here, and the amplitude sets the intensity, not the speed.',
    say: null,
  },
  // pp. 537, 539, 541
  {
    topic: 3,
    kind: 'shortcut',
    q: 'The energy of a photon of wavelength <i>λ</i>, in electron-volts. The fast way?',
    a: '<i>E</i>(eV) = 1240/<i>λ</i>(nm): 200 nm gives 6.2 eV, in the ultraviolet',
    why: 'The same <i>hc</i>/<i>e</i> = 1240 V·nm gives an X-ray tube’s voltage from its shortest wavelength, <i>eV</i> = <i>hc</i>/<i>λ</i><sub>min</sub>: 0.10 nm needs 12.4 kV.',
    say: null,
  },

  // ── Additional A · Radiation Pressure on Moving and Rotating Bodies ──
  // pp. 542–544
  {
    topic: 4,
    kind: 'remember',
    q: 'A beam of intensity <i>I</i> strikes a surface of reflectance <i>R</i> at incidence angle <i>θ</i> from the normal. The radiation pressure?',
    a: '(<i>I</i>/<i>c</i>) cos<sup>2</sup><i>θ</i> (1 + <i>R</i>). At normal incidence <i>P</i><sub>rad</sub> = (<i>I</i>/<i>c</i>)(1 + <i>R</i>): <i>I</i>/<i>c</i> for an absorber (<i>R</i> = 0), 2<i>I</i>/<i>c</i> for a perfect reflector (<i>R</i> = 1)',
    why: 'One cos <i>θ</i> for the projected area <i>A</i> cos <i>θ</i>, one because only the normal component of the momentum counts. A disc absorbing 80% and reflecting 20% feels 1.20<i>I</i>/<i>c</i>.',
    say: null,
  },
  // pp. 542–543, 545
  {
    topic: 4,
    kind: 'remember',
    q: 'A perfectly reflecting sail of area <i>A</i> and mass <i>m</i> faces sunlight of intensity <i>I</i> head-on. Its acceleration, and does it stay constant?',
    a: '<i>a</i> = 2<i>IA</i>/(<i>mc</i>). It changes as the sail moves: from an isotropic source <i>I</i>(<i>r</i>) = <i>P</i><sub>source</sub>/(4π<i>r</i><sup>2</sup>), so the acceleration is not constant',
    why: '2000 m<sup>2</sup> and 50 kg at 1360 W m<sup>−2</sup>: <i>F</i> = 1.81 × 10<sup>−2</sup> N and <i>a</i> = 3.6 × 10<sup>−4</sup> m s<sup>−2</sup>, directed away from the Sun.',
    say: null,
  },

  // ── Additional B · Poynting Vector and Energy Flow in Circuits ──
  // pp. 545–546, 548
  {
    topic: 5,
    kind: 'remember',
    q: 'A straight wire carries a steady current <i>I</i>. Which way does the Poynting vector at its surface point, and how much power flows in?',
    a: 'Radially inward: <i>E⃗</i> is along the wire, <i>B⃗</i> azimuthal, <i>S⃗</i> = (1/μ<sub>0</sub>)<i>E⃗</i> × <i>B⃗</i>. Into a length <i>l</i> flows (<i>EB</i>/μ<sub>0</sub>)(2π<i>rl</i>) = <i>I</i><sup>2</sup><i>R</i>',
    why: 'The Joule heat enters from the surrounding fields, not along the wire. At the surface <i>S</i> = <i>ρI</i><sup>2</sup>/(2π<sup>2</sup><i>r</i><sup>3</sup>).',
    say: null,
  },
  // pp. 546–549
  {
    topic: 5,
    kind: 'remember',
    q: 'A parallel-plate capacitor at voltage <i>V</i> is being charged by a current <i>I</i>. How does the energy get into the gap?',
    a: 'Through the rim, along a radially inward Poynting vector: at the edge <i>S</i> = <i>EB</i>(<i>R</i>)/μ<sub>0</sub> with <i>E</i> = <i>V</i>/<i>d</i> and <i>B</i>(<i>R</i>) = μ<sub>0</sub><i>I</i>/(2π<i>R</i>), and the flux through the strip 2π<i>Rd</i> is exactly <i>VI</i>',
    why: 'Independent of the plate radius <i>R</i> and gap <i>d</i>, and equal to d<i>U</i>/d<i>t</i>: 220 V at 0.50 A puts in 110 W. A solenoid with a growing current likewise takes its energy in through its side surface.',
    say: null,
  },

  // ── Additional C · Polarization: Malus’s Law and Brewster’s Angle ──
  // pp. 549–551
  {
    topic: 6,
    kind: 'remember',
    q: 'Unpolarized light of intensity <i>I</i><sub>0</sub> passes a polarizer, then an analyzer at <i>θ</i> to it. The intensities?',
    a: 'After the polarizer <i>I</i><sub>0</sub>/2; after the analyzer (<i>I</i><sub>0</sub>/2) cos<sup>2</sup><i>θ</i>, by Malus’s law <i>I</i> = <i>I</i><sub>in</sub> cos<sup>2</sup><i>θ</i>',
    why: 'Crossed polarizers pass nothing, but one inserted at 45° between them lets <i>I</i><sub>0</sub>/8 through. Axes at 0°, 30° and 60° pass 9<i>I</i><sub>0</sub>/32 ≈ 0.281 <i>I</i><sub>0</sub>, more than the <i>I</i><sub>0</sub>/8 of 0° and 60° alone.',
    say: null,
  },
  // pp. 549–550
  {
    topic: 6,
    kind: 'remember',
    q: 'At what angle of incidence is light reflected from a dielectric completely polarized?',
    a: 'At Brewster’s angle, tan <i>θ</i><sub>B</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>, when the reflected and refracted rays are at 90°. The reflected light is polarized perpendicular to the plane of incidence',
    why: 'Glass of <i>n</i> = 1.50 in air: <i>θ</i><sub>B</sub> = 56.3°. Unpolarized light still reflects there (about 7% here): only light polarized in the plane of incidence is not reflected.',
    say: null,
  },

  // ── Additional D · Standing Electromagnetic Waves and Resonant Cavities ──
  // pp. 552–554
  {
    topic: 7,
    kind: 'remember',
    q: 'A plane EM wave reflects normally from a perfect conductor and forms a standing wave. Where are the nodes and antinodes of <i>E</i> and <i>B</i>?',
    a: '<i>E</i> has a node at the conductor (the tangential <i>E</i> must vanish there) and every <i>λ</i>/2 from it, with antinodes halfway between; <i>B</i> has its antinodes at the conductor and its nodes where <i>E</i> has antinodes',
    why: 'The boundary inverts the reflected wave, a 180° phase change. Between plates 15 cm apart, in the fundamental mode, <i>E</i> peaks at 7.5 cm and <i>B</i> at the walls.',
    say: null,
  },
  // pp. 552–554
  {
    topic: 7,
    kind: 'remember',
    q: 'The resonant frequencies of a cavity of length <i>L</i> between conducting walls?',
    a: '<i>f</i><sub><i>n</i></sub> = <i>nc</i>/(2<i>L</i>), since <i>L</i> = <i>nλ</i><sub><i>n</i></sub>/2 puts an <i>E</i> node at each wall; <i>k</i><sub><i>n</i></sub> = <i>n</i>π/<i>L</i>',
    why: 'Plates 4.0 cm apart resonate at 3.75, 7.50 and 11.25 GHz, all microwaves. Plates 6.0 cm apart: fundamental <i>λ</i> = 12 cm, <i>f</i> = 2.5 GHz.',
    say: null,
  },
];
