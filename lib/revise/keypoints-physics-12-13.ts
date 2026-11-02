/**
 * KEY POINTS for Physics Class 12, Chapter 13 (Nuclei).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3 (the book's Subtopics 1–4); Additional
 * topics A–E are 4–8.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's mnemonics, word for word (quotation marks dropped; a line with two
 * mnemonics is split into two). Additional topics: the Supplement's addenda.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Nuclides carry
 * the mass number upper left and the atomic number lower left
 * (<sup>235</sup><sub>92</sub>U), element symbols upright; the neutron is the
 * book's italic <i>n</i>. Label subscripts are upright (<i>m</i><sub>n</sub>,
 * <i>m</i><sub>H</sub>, <i>E</i><sub>b</sub>, <i>M</i><sub>atom</sub>,
 * <i>m</i><sub>e</sub>, <i>N</i><sub>A</sub>, <i>a</i><sub>v</sub>,
 * <i>T</i><sub>th</sub>); digit subscripts are upright. A subscript inside a
 * power is a Unicode subscript digit (<i>e</i><sup>−<i>λ</i>₁<i>t</i></sup>).
 * 1 u ↔ 931.5 MeV as the book uses it. π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Composition and Size of the Nucleus, Mass-Energy Equivalence ──
  // pp. 816–817, 819, 824
  {
    topic: 0,
    kind: 'remember',
    q: 'The radius of a nucleus of mass number <i>A</i>, and its density?',
    a: '<i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup>, with <i>R</i><sub>0</sub> ≈ 1.2 fm = 1.2 × 10<sup>−15</sup> m: each nucleon claims a fixed volume, so the volume grows as <i>A</i>. The density <i>ρ</i> = <i>m</i><sub>N</sub>/((4/3)π<i>R</i><sub>0</sub><sup>3</sup>) ≈ 2.3 × 10<sup>17</sup> kg m<sup>−3</sup> has no <i>A</i> in it: it is the same for every nucleus, about 10<sup>14</sup> times that of water',
    why: 'The formula treats the nucleus as a uniform sphere with a sharp edge, so it is an order-of-magnitude and trend tool; <i>R</i><sub>0</sub> itself varies from 1.1 to 1.3 fm with how radius is measured. <sup>27</sup><sub>13</sub>Al: <i>R</i> = 1.2 × 3 = 3.6 fm.',
    say: 'Volume scales with <i>A</i>, so radius scales with <i>A</i><sup>1/3</sup> and density doesn’t scale at all.',
  },
  // pp. 816–818, 820, 824
  {
    topic: 0,
    kind: 'remember',
    q: 'The atomic mass unit, and its energy equivalent?',
    a: '1 u is one twelfth of the mass of a <sup>12</sup><sub>6</sub>C atom, 1.66 × 10<sup>−27</sup> kg, and by <i>E</i> = <i>mc</i><sup>2</sup>, 1 u ↔ 931.5 MeV. Rest energies: electron 0.511 MeV, proton 938.3 MeV, neutron 939.6 MeV',
    why: 'A nucleus weighs less than its separate protons and neutrons; the missing mass is the energy that binds them. With 1 MeV = 1.6 × 10<sup>−13</sup> J, a neutron’s rest energy is about 1.50 × 10<sup>−10</sup> J.',
    say: null,
  },
  // pp. 817, 823–824
  {
    topic: 0,
    kind: 'mixup',
    q: 'Isotopes, isobars and isotones: what does each pair have in common?',
    a: 'Isotopes have the same <i>Z</i>, so they are one element with different <i>A</i> (<sup>1</sup><sub>1</sub>H, <sup>2</sup><sub>1</sub>H, <sup>3</sup><sub>1</sub>H). Isobars have the same mass number <i>A</i> (<sup>3</sup><sub>1</sub>H and <sup>3</sup><sub>2</sub>He). Isotones have the same neutron number <i>N</i> = <i>A</i> − <i>Z</i> (<sup>3</sup><sub>1</sub>H and <sup>4</sup><sub>2</sub>He, both with <i>N</i> = 2)',
    why: '<sup>18</sup><sub>8</sub>O and <sup>19</sup><sub>9</sub>F are isotones (<i>N</i> = 10 each); <sup>40</sup><sub>18</sub>Ar and <sup>40</sup><sub>20</sub>Ca are isobars.',
    say: 'Proton, A=bar, Neutron (isotopes same <i>Z</i>, isobars same <i>A</i>, isotones same <i>N</i>).',
  },
  // pp. 820, 822–823
  {
    topic: 0,
    kind: 'mistake',
    q: 'Two nuclei have mass numbers in the ratio 1 ∶ 27. Are their radii in the ratio 1 ∶ 27, and is the bigger one denser?',
    a: 'No to both. <i>R</i> ∝ <i>A</i><sup>1/3</sup>, so the radii are in the ratio 1 ∶ 3: always cube-root the mass-number ratio. And nuclear density is the same for every nucleus, so the densities are 1 ∶ 1',
    why: 'Mass numbers 16 and 128: <i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = (1/8)<sup>1/3</sup> = 1/2. A density ratio between two nuclei is 1 ∶ 1 unless something other than <i>A</i> changes.',
    say: null,
  },
  // pp. 823–824
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Converting a mass into energy, or working with a nuclear radius. The fast way?',
    a: 'Skip <i>E</i> = <i>mc</i><sup>2</sup> in joules: multiply the mass in u by 931.5 MeV. For radii, know the perfect cubes 8, 27, 64, 125 and 216: examiners pick mass numbers near them so the cube root is instant',
    why: 'A nucleus of radius 6.0 fm: <i>A</i><sup>1/3</sup> = 6.0/1.2 = 5, so <i>A</i> = 125 and its mass is about 125 × 1.66 × 10<sup>−27</sup> ≈ 2.08 × 10<sup>−25</sup> kg.',
    say: null,
  },

  // ── Topic 02 · Nuclear Binding Energy, the Binding-Energy Curve, and the Nuclear Force ──
  // pp. 826, 828–829, 832
  {
    topic: 1,
    kind: 'remember',
    q: 'The mass defect and binding energy of a nucleus, from atomic masses?',
    a: 'Δ<i>m</i> = [<i>Zm</i><sub>H</sub> + (<i>A</i> − <i>Z</i>)<i>m</i><sub>n</sub>] − <i>M</i><sub>atom</sub>, always positive; with neutral-atom masses the electron masses cancel. <i>E</i><sub>b</sub> = Δ<i>m</i> × 931.5 MeV is the energy needed to pull the nucleus apart into free nucleons, and <i>E</i><sub>b</sub>/<i>A</i>, the binding energy per nucleon, measures stability',
    why: '<sup>4</sup><sub>2</sub>He: 2(1.007825) + 2(1.008665) − 4.002603 = 0.030377 u, so <i>E</i><sub>b</sub> = 28.30 MeV, 7.07 MeV per nucleon. The deuteron has only 1.11 MeV per nucleon.',
    say: null,
  },
  // pp. 825, 827–828, 832
  {
    topic: 1,
    kind: 'remember',
    q: 'The shape of the binding-energy-per-nucleon curve, and why it has that shape?',
    a: '<i>E</i><sub>b</sub>/<i>A</i> rises steeply for light nuclei, peaks at about 8.8 MeV near <i>A</i> ≈ 56 (iron) and falls gently to about 7.6 MeV at uranium. Light nuclei have most nucleons on the surface with few neighbours; the short-range force is saturated, so once most nucleons are inside, the binding per nucleon stops rising, and at the peak the surface loss is small while the Coulomb loss is still modest; beyond it the Coulomb energy of the protons’ repulsion grows like <i>Z</i><sup>2</sup>, faster than the nuclear binding',
    why: 'Fusion of light nuclei and fission of heavy nuclei both move towards the peak, so both release energy. The curve is a smooth average: nuclei with magic numbers (2, 8, 20, 28, 50, 82, 126) of protons or neutrons are unusually stable, and <sup>4</sup><sub>2</sub>He sits noticeably above its neighbours.',
    say: 'Per-nucleon is the king of stability; everyone climbs toward iron.',
  },
  // pp. 826, 831
  {
    topic: 1,
    kind: 'mixup',
    q: 'Saturation and charge independence of the nuclear force: what does each explain?',
    a: 'Saturation: each nucleon attracts only its nearest neighbours, so total binding energy grows roughly as <i>A</i>; with the repulsive core below about 0.8 fm it fixes the spacing between nucleons, which is why nuclear density is constant. Charge independence: the attraction is the same for <i>n</i>–<i>n</i>, <i>n</i>–<i>p</i> and <i>p</i>–<i>p</i> pairs; it says nothing about density',
    why: 'The force is also short-range, effective only within about 2–3 fm and essentially zero beyond. A purely attractive force would collapse the nucleus.',
    say: null,
  },
  // pp. 826, 832
  {
    topic: 1,
    kind: 'mistake',
    q: 'Uranium has a far larger total binding energy than iron. Is it more stable?',
    a: 'No: compare <i>E</i><sub>b</sub>/<i>A</i>, never <i>E</i><sub>b</sub>. Total binding energy keeps rising with <i>A</i>; uranium’s is spread thin, about 7.6 MeV per nucleon against iron’s 8.8, which is exactly why uranium can release energy by fissioning',
    why: 'And the mass defect is always positive: the separate constituents are heavier than the bound nucleus. A negative Δ<i>m</i> means you subtracted the wrong way.',
    say: null,
  },
  // pp. 830, 832
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Binding energies are given and you need the energy released in a reaction. The fast way?',
    a: 'Do not recompute masses: energy released = (total binding energy of the products) − (total binding energy of the reactants), with each total = <i>A</i> × (<i>E</i><sub>b</sub>/<i>A</i>). A reaction that raises the binding energy per nucleon releases energy',
    why: '<i>A</i> = 240 at 7.6 MeV per nucleon splitting into two <i>A</i> = 120 fragments at 8.5 MeV: 2040 − 1824 = 216 MeV per fission.',
    say: null,
  },

  // ── Topic 03 · Radioactivity: Decay Modes, the Decay Law, Half-Life and Activity ──
  // pp. 833–834, 836, 840
  {
    topic: 2,
    kind: 'remember',
    q: 'The radioactive decay law, the half-life and the mean life?',
    a: '<i>N</i> = <i>N</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup>, where <i>N</i> is the number of undecayed nuclei and <i>λ</i> is the probability per unit time that a given nucleus decays. <i>T</i><sub>1/2</sub> = ln 2/<i>λ</i> = 0.693/<i>λ</i>, and the mean life <i>τ</i> = 1/<i>λ</i> = 1.44<i>T</i><sub>1/2</sub>. The half-life does not depend on how much sample you start with',
    why: 'It is a statistical law for a large sample: no one can say when one nucleus will decay, and a handful of nuclei decay in random jumps. Heating, pressure and chemical bonding leave <i>λ</i> essentially unchanged.',
    say: null,
  },
  // pp. 834, 837–838, 840
  {
    topic: 2,
    kind: 'remember',
    q: 'The activity of a sample, and its units?',
    a: '<i>R</i> = <i>λN</i> = <i>R</i><sub>0</sub><i>e</i><sup>−<i>λt</i></sup>, with <i>R</i><sub>0</sub> = <i>λN</i><sub>0</sub>: the number of decays per second. It falls by exactly the same factor as the number of nuclei. SI unit the becquerel, 1 Bq = 1 decay s<sup>−1</sup>; 1 curie (Ci) = 3.7 × 10<sup>10</sup> Bq',
    why: '1.0 mg of radon-222 (<i>T</i><sub>1/2</sub> = 3.8 days) holds 2.71 × 10<sup>18</sup> atoms and has <i>λ</i> = 2.11 × 10<sup>−6</sup> s<sup>−1</sup>, so <i>R</i><sub>0</sub> ≈ 5.73 × 10<sup>12</sup> Bq ≈ 155 Ci.',
    say: null,
  },
  // pp. 833–834, 839–840
  {
    topic: 2,
    kind: 'mixup',
    q: 'Alpha, beta-minus, beta-plus and gamma decay: what happens to <i>A</i> and <i>Z</i> in each?',
    a: 'α: <i>A</i> falls by 4 and <i>Z</i> by 2, as a <sup>4</sup><sub>2</sub>He nucleus leaves. β<sup>−</sup>: <i>A</i> unchanged, <i>Z</i> up by 1 (<i>n</i> → <i>p</i> + <i>e</i><sup>−</sup> + <i>ν̄</i>). β<sup>+</sup>: <i>A</i> unchanged, <i>Z</i> down by 1. γ: neither changes; an excited nucleus only sheds energy as a photon',
    why: 'Check any decay equation by balancing: the top numbers (<i>A</i>) and the bottom numbers (<i>Z</i>) must each add up to the same on both sides.',
    say: 'Beta-minus makes a proton (<i>Z</i> up).',
  },
  // pp. 834, 839–840
  {
    topic: 2,
    kind: 'mistake',
    q: 'Which is longer, the mean life or the half-life? Is <i>τ</i> = 0.693<i>T</i><sub>1/2</sub>?',
    a: 'The mean life is always the longer: <i>τ</i> = 1.44<i>T</i><sub>1/2</sub>, while <i>T</i><sub>1/2</sub> = 0.693<i>τ</i>. <i>τ</i> = 0.693<i>T</i><sub>1/2</sub> is the relation written backwards: if your half-life comes out bigger than the mean life, you have flipped it',
    why: '<i>τ</i> = 5.0 × 10<sup>3</sup> s gives <i>λ</i> = 2.0 × 10<sup>−4</sup> s<sup>−1</sup> and <i>T</i><sub>1/2</sub> = 0.693 × 5000 ≈ 3465 s.',
    say: 'Mean life is the long life (×1.44).',
  },
  // pp. 837, 839–840
  {
    topic: 2,
    kind: 'shortcut',
    q: 'The activity of a source falls to 1/16 of its starting value. The fast way to the time taken?',
    a: 'Count half-lives off the ladder instead of using logarithms: 1/2, 1/4, 1/8, 1/16, 1/32 ↔ 1, 2, 3, 4, 5 half-lives, so 1/16 is 4 half-lives. Activity, number of nuclei and mass of undecayed parent all fall by the same factor. Keep ln for ratios off the ladder: <i>t</i> = (1/<i>λ</i>) ln(<i>N</i><sub>0</sub>/<i>N</i>)',
    why: 'With <i>T</i><sub>1/2</sub> = 2 h, 1/16 takes 4 × 2 = 8 h, not 16 half-lives. A wooden tool at 9.0 dpm per gram of carbon against living wood’s 15.0 (<sup>14</sup>C, <i>T</i><sub>1/2</sub> = 5730 years) needs ln: about 4200 years.',
    say: null,
  },

  // ── Topic 04 · Nuclear Energy: Fission, Fusion, and the Power of the Stars ──
  // pp. 842, 845, 847
  {
    topic: 3,
    kind: 'remember',
    q: 'The Q-value of a nuclear reaction, and what its sign means?',
    a: '<i>Q</i> = [(mass of reactants) − (mass of products)]<i>c</i><sup>2</sup> = Δ<i>m</i> × 931.5 MeV, with consistent atomic masses. <i>Q</i> > 0: energy is released, as kinetic energy of the products; <i>Q</i> < 0: energy must be supplied',
    why: '<sup>2</sup><sub>1</sub>H + <sup>3</sup><sub>1</sub>H → <sup>4</sup><sub>2</sub>He + <sup>1</sup><sub>0</sub><i>n</i>: 5.030151 − 5.011268 = 0.018883 u, so <i>Q</i> = 17.6 MeV.',
    say: null,
  },
  // pp. 841–842, 844, 846–847
  {
    topic: 3,
    kind: 'remember',
    q: 'What happens in the fission of uranium-235, and when does the chain reaction sustain itself?',
    a: 'A slow neutron splits <sup>235</sup>U into two medium-mass fragments and 2–3 neutrons, releasing about 200 MeV, mostly as kinetic energy of the fragments and neutrons: <sup>1</sup><sub>0</sub><i>n</i> + <sup>235</sup><sub>92</sub>U → <sup>141</sup><sub>56</sub>Ba + <sup>92</sup><sub>36</sub>Kr + 3 <sup>1</sup><sub>0</sub><i>n</i>. With neutron multiplication factor <i>k</i>: <i>k</i> < 1 dies out, <i>k</i> = 1 is steady (critical), <i>k</i> > 1 runs away',
    why: 'The fragments sit higher on the binding-energy curve (about 8.5 MeV per nucleon) than uranium (about 7.6). The chain also needs the critical mass of fuel, or too many neutrons escape before causing fission.',
    say: 'Slow neutrons split uranium; hot nuclei fuse.',
  },
  // pp. 842, 844, 846–847
  {
    topic: 3,
    kind: 'mixup',
    q: 'The moderator and the control rods of a reactor: what does each do, and what is each made of?',
    a: 'The moderator (light water, heavy water or graphite) slows the fast fission neutrons to thermal speeds, because <sup>235</sup>U fissions most readily with slow neutrons. The control rods (cadmium or boron) absorb excess neutrons to hold <i>k</i> = 1: pushed in, the reaction slows; pulled out, it speeds up',
    why: 'The coolant carries the heat to a boiler, and the shielding (concrete) absorbs radiation. The moderator makes no neutrons: they come from fission.',
    say: 'Moderator slows, control rods soak up.',
  },
  // pp. 841, 843–844, 846–847
  {
    topic: 3,
    kind: 'mistake',
    q: 'Light nuclei are small. Is fusion easier to start than fission?',
    a: 'No: both nuclei are positively charged, and the Coulomb barrier lets them fuse only at temperatures of order 10<sup>7</sup> K (thermonuclear fusion), as in the cores of stars. Fusion is harder to ignite, even though per nucleon it releases more energy than fission',
    why: 'D–T fusion releases 17.6 MeV among 5 nucleons; one fission releases about 200 MeV among about 236. The Sun fuses hydrogen into helium by the proton–proton cycle, about 26.7 MeV per cycle.',
    say: null,
  },
  // pp. 844, 847
  {
    topic: 3,
    kind: 'shortcut',
    q: 'The energy from <i>m</i> grams of fuel, or the fission rate of a reactor. The fast way?',
    a: 'For energy from a mass, find the number of nuclei first, <i>N</i> = (<i>m</i>/<i>M</i>)<i>N</i><sub>A</sub> with <i>M</i> the molar mass, then multiply by the energy per event. For a reactor, run it the other way: divide the power by the energy per fission in joules to get fissions per second',
    why: '1.0 g of <sup>235</sup>U at 200 MeV per fission: 2.56 × 10<sup>21</sup> nuclei, about 8.2 × 10<sup>10</sup> J. A 300 MW reactor: 3.0 × 10<sup>8</sup> W ÷ 3.2 × 10<sup>−11</sup> J ≈ 9.4 × 10<sup>18</sup> fissions per second.',
    say: null,
  },

  // ── Additional A · Sequential Decay and the Equilibrium of Parent–Daughter Chains ──
  // pp. 848–851
  {
    topic: 4,
    kind: 'remember',
    q: 'A parent (decay constant <i>λ</i><sub>1</sub>) decays into a radioactive daughter (<i>λ</i><sub>2</sub>), starting with parent only. The number of daughter nuclei, and when the daughter activity is largest?',
    a: '<i>N</i><sub>2</sub>(<i>t</i>) = <i>λ</i><sub>1</sub><i>N</i><sub>10</sub>(<i>e</i><sup>−<i>λ</i>₁<i>t</i></sup> − <i>e</i><sup>−<i>λ</i>₂<i>t</i></sup>)/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>) for <i>λ</i><sub>1</sub> ≠ <i>λ</i><sub>2</sub>. The daughter activity rises, peaks and falls; it is largest at <i>t</i><sub>max</sub> = ln(<i>λ</i><sub>2</sub>/<i>λ</i><sub>1</sub>)/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>), the instant it equals the parent activity',
    why: 'd<i>N</i><sub>2</sub>/d<i>t</i> = <i>λ</i><sub>1</sub><i>N</i><sub>1</sub> − <i>λ</i><sub>2</sub><i>N</i><sub>2</sub>, the parent activity minus the daughter’s. Parent 10 h, daughter 2 h: <i>t</i><sub>max</sub> = ln 5/(0.2772 h<sup>−1</sup>) ≈ 5.8 h, when the daughter activity is about 0.67 of the parent’s starting activity.',
    say: null,
  },
  // pp. 848–851
  {
    topic: 4,
    kind: 'remember',
    q: 'Secular and transient equilibrium: when does each hold, and what does it give?',
    a: 'Secular (<i>λ</i><sub>1</sub> ≪ <i>λ</i><sub>2</sub>, a very long-lived parent): after a long time the daughter activity equals the parent’s, <i>R</i><sub>2</sub> ≈ <i>R</i><sub>1</sub>, so <i>N</i><sub>2</sub> ≈ <i>R</i><sub>1</sub>/<i>λ</i><sub>2</sub> and <i>N</i><sub>2</sub>/<i>N</i><sub>1</sub> = <i>λ</i><sub>1</sub>/<i>λ</i><sub>2</sub>, the daughter’s half-life over the parent’s. Transient (<i>λ</i><sub>1</sub> < <i>λ</i><sub>2</sub> but comparable), for <i>t</i> ≫ 1/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>): <i>R</i><sub>2</sub> ≈ <i>R</i><sub>1</sub><i>λ</i><sub>2</sub>/(<i>λ</i><sub>2</sub> − <i>λ</i><sub>1</sub>), and the daughter decays at the parent’s rate',
    why: 'At secular equilibrium in the U-238 chain every radioactive member has the parent’s activity: 10<sup>12</sup> uranium nuclei give 4.92 × 10<sup>−6</sup> Bq, carried by only about 15 <sup>234</sup>Th nuclei. A shorter-lived parent reaches neither equilibrium.',
    say: null,
  },

  // ── Additional B · The Geiger–Nuttall Law for Alpha Decay ──
  // pp. 852–854
  {
    topic: 5,
    kind: 'remember',
    q: 'The Q-value of an alpha decay, and how it is shared between the α-particle and the daughter?',
    a: '<i>Q</i><sub>α</sub> = [<i>m</i>(parent) − <i>m</i>(daughter) − <i>m</i>(<sup>4</sup><sub>2</sub>He)] × 931.5 MeV, with atomic masses. From a parent at rest the two products leave with equal and opposite momenta, so their kinetic energies go inversely as their masses: the α-particle takes the fraction (<i>A</i> − 4)/<i>A</i> of <i>Q</i><sub>α</sub>, with <i>A</i> the parent’s mass number, nearly all of it, and the daughter recoils with the rest',
    why: '<sup>226</sup>Ra → <sup>222</sup>Rn + <sup>4</sup><sub>2</sub>He: Δ<i>m</i> = 0.005227 u, <i>Q</i><sub>α</sub> = 4.87 MeV, <i>K</i><sub>α</sub> ≈ 4.78 MeV (about 98%) and <i>K</i><sub>Rn</sub> ≈ 0.09 MeV.',
    say: null,
  },
  // pp. 852–854
  {
    topic: 5,
    kind: 'remember',
    q: 'The Geiger–Nuttall law, and what it says about alpha emitters?',
    a: 'ln <i>λ</i> = <i>a</i> − <i>b</i>/√<i>Q</i><sub>α</sub>, an empirical law with <i>a</i> and <i>b</i> constant for a given isotopic series; it follows from quantum-mechanical tunnelling through the Coulomb barrier. A modest rise in <i>Q</i><sub>α</sub> raises <i>λ</i> enormously: <sup>212</sup>Po (α-energy 8.78 MeV) has a half-life of 0.3 μs, <sup>238</sup>U (α-energy 4.20 MeV) about 4.5 × 10<sup>9</sup> years',
    why: 'From <sup>212</sup>Po and <sup>214</sup>Po (7.69 MeV, 164 μs): <i>b</i> ≈ 273 MeV<sup>1/2</sup> and <i>a</i> ≈ 107. Extrapolated to <sup>210</sup>Po the fit predicts about one day against the real 138 days: a two-point fit is unreliable for another isotope.',
    say: null,
  },

  // ── Additional C · Beta Decay Energy Balance and Electron Capture ──
  // pp. 855–857
  {
    topic: 6,
    kind: 'remember',
    q: 'The Q-values of β<sup>−</sup> decay, β<sup>+</sup> decay and electron capture, from atomic masses?',
    a: '<i>Q</i><sub>β−</sub> = [<i>m</i>(parent) − <i>m</i>(daughter)]<i>c</i><sup>2</sup>, the daughter having <i>Z</i> + 1. With a daughter of <i>Z</i> − 1: <i>Q</i><sub>β+</sub> = [<i>m</i>(parent) − <i>m</i>(daughter) − 2<i>m</i><sub>e</sub>]<i>c</i><sup>2</sup> and <i>Q</i><sub>EC</sub> = [<i>m</i>(parent) − <i>m</i>(daughter)]<i>c</i><sup>2</sup> = <i>Q</i><sub>β+</sub> + 1.022 MeV. So β<sup>+</sup> needs the atomic-mass energy difference to exceed 2<i>m</i><sub>e</sub><i>c</i><sup>2</sup> = 1.022 MeV; electron capture needs only a positive difference',
    why: 'The 2<i>m</i><sub>e</sub> is the created positron plus the one electron the parent atom has over the daughter (the captured electron’s small binding energy is neglected). <sup>13</sup>N → <sup>13</sup>C: <i>Q</i><sub>β+</sub> = 1.198 MeV, <i>Q</i><sub>EC</sub> = 2.221 MeV.',
    say: null,
  },
  // pp. 855–857
  {
    topic: 6,
    kind: 'remember',
    q: 'Why do beta particles come out with a spread of energies, while the α-particles of an alpha decay are mono-energetic?',
    a: 'Beta decay shares its Q-value among three: the beta particle, the (anti)neutrino and the recoiling daughter. The neutrino takes a variable share, so the beta energies form a continuous spectrum; its endpoint (maximum) equals the Q-value, recoil neglected, when the neutrino carries almost nothing; an alpha decay has only two products, so momentum conservation fixes each one’s share',
    why: 'The daughter’s recoil is only tens of eV for MeV beta particles. <sup>64</sup>Cu decays by all three modes: <i>Q</i><sub>β−</sub> ≈ 0.579 MeV, <i>Q</i><sub>β+</sub> ≈ 0.652 MeV, <i>Q</i><sub>EC</sub> ≈ 1.67 MeV, the last carried almost entirely by the neutrino.',
    say: null,
  },

  // ── Additional D · The Semi-Empirical Mass Formula (Liquid Drop Model) ──
  // pp. 858–861
  {
    topic: 7,
    kind: 'remember',
    q: 'The semi-empirical mass formula: its five terms, and the physics of each?',
    a: '<i>B</i> = <i>a</i><sub>v</sub><i>A</i> − <i>a</i><sub>s</sub><i>A</i><sup>2/3</sup> − <i>a</i><sub>c</sub><i>Z</i><sup>2</sup>/<i>A</i><sup>1/3</sup> − <i>a</i><sub>a</sub>(<i>A</i> − 2<i>Z</i>)<sup>2</sup>/<i>A</i> + <i>δ</i>. Volume: each nucleon attracts only its nearest neighbours (saturation). Surface: nucleons at the surface have fewer bonds. Coulomb: proton–proton repulsion. Asymmetry: by the Pauli principle excess neutrons cost energy. Pairing: <i>δ</i> = +<i>a</i><sub>p</sub><i>A</i><sup>−3/4</sup> for even–even nuclei, 0 for odd <i>A</i>, −<i>a</i><sub>p</sub><i>A</i><sup>−3/4</sup> for odd–odd',
    why: 'With <i>a</i><sub>v</sub> = 15.75, <i>a</i><sub>s</sub> = 17.8, <i>a</i><sub>c</sub> = 0.711, <i>a</i><sub>a</sub> = 23.7 and <i>a</i><sub>p</sub> = 34 MeV, <sup>120</sup>Sn (<i>Z</i> = 50) gives <i>B</i>/<i>A</i> = 8.49 MeV against the measured 8.50 MeV, and <sup>238</sup>U gives 7.58 MeV against 7.6 MeV.',
    say: null,
  },
  // pp. 860–861
  {
    topic: 7,
    kind: 'remember',
    q: 'How does the SEMF explain the peak of the <i>B</i>/<i>A</i> curve in the iron region?',
    a: 'Per nucleon, the surface penalty <i>a</i><sub>s</sub><i>A</i><sup>−1/3</sup> is large for small <i>A</i>, where many nucleons sit on the surface, so <i>B</i>/<i>A</i> rises steeply; the Coulomb penalty, (<i>a</i><sub>c</sub>/4)<i>A</i><sup>2/3</sup> for <i>Z</i> = <i>N</i> = <i>A</i>/2, keeps growing and pulls it down at large <i>A</i>. They balance where 2<i>a</i><sub>s</sub> = <i>a</i><sub>c</sub><i>A</i>, at <i>A</i> ≈ 50, close to the observed peak near 56 (pairing neglected)',
    why: 'Real heavy nuclei have <i>N</i> > <i>Z</i>, and the asymmetry term adds to the fall on the heavy side. <sup>16</sup>O, doubly magic, comes out at 7.82 MeV against the measured 7.98: shell stability lies beyond the liquid drop.',
    say: null,
  },

  // ── Additional E · Nuclear Reaction Kinematics and Threshold Energy ──
  // pp. 862–864
  {
    topic: 8,
    kind: 'remember',
    q: 'The Q-value of a reaction <i>X</i> + <i>x</i> → <i>Y</i> + <i>y</i>, in masses and in kinetic energies?',
    a: '<i>Q</i> = (<i>m</i><sub><i>X</i></sub> + <i>m</i><sub><i>x</i></sub> − <i>m</i><sub><i>Y</i></sub> − <i>m</i><sub><i>y</i></sub>)<i>c</i><sup>2</sup> = <i>T</i><sub><i>Y</i></sub> + <i>T</i><sub><i>y</i></sub> − <i>T</i><sub><i>X</i></sub> − <i>T</i><sub><i>x</i></sub>, where <i>T</i> is kinetic energy. <i>Q</i> > 0: exoergic, energy released. <i>Q</i> < 0: endoergic, energy absorbed',
    why: 'D–T fusion is exoergic, <i>Q</i> = +17.6 MeV. <sup>7</sup>Li + <i>p</i> → <sup>7</sup>Be + <i>n</i> is endoergic: (8.023829 − 8.025594) × 931.5 ≈ −1.64 MeV.',
    say: null,
  },
  // pp. 862–864
  {
    topic: 8,
    kind: 'remember',
    q: 'An endoergic reaction on a target at rest: is a projectile kinetic energy of |<i>Q</i>| enough to make it go?',
    a: 'No: the threshold is <i>T</i><sub>th</sub> = −<i>Q</i>(<i>M</i> + <i>m</i>)/<i>M</i>, with <i>M</i> the target mass and <i>m</i> the projectile mass. Momentum must be conserved, so the part <i>Tm</i>/(<i>M</i> + <i>m</i>) of the projectile’s energy stays as motion of the centre of mass and cannot become mass. For a photon (<i>m</i> → 0) the threshold is essentially |<i>Q</i>|',
    why: '<sup>7</sup>Li + <i>p</i> → <sup>7</sup>Be + <i>n</i>: <i>T</i><sub>th</sub> = 1.644 × 8.023829/7.016004 ≈ 1.88 MeV, 0.24 MeV more than |<i>Q</i>|. The exact relativistic result carries a further factor 1 − <i>Q</i>/[2(<i>M</i> + <i>m</i>)<i>c</i><sup>2</sup>], negligible for nuclear masses.',
    say: null,
  },
];
