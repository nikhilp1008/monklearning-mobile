import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Topic 01: pp. 816–824 of the Class 12 Physics Master Reference,
 * word for word. The book's sub-topic 1, “Composition and Size of the Nucleus,
 * Mass-Energy Equivalence”, split at its Sections 1 to 8. Figure 13.1 is
 * captioned at the end of Section 1 (p. 817) and drawn on the “Chapter 13 ·
 * Figures” page (p. 818); Figure 13.2 is captioned after procedure 3.3 (p. 820)
 * and drawn on p. 821. The book never refers to either, so each is set beside
 * the text it illustrates: 13.1 after the paragraph on what the nucleus is made
 * of, 13.2 after the paragraph on the missing mass (both in Concept intuition).
 * They are redrawn in lib/diagrams/physics-12-13.ts. The topic has no
 * unnumbered drawings.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 816–824 ─────────────────────────
  {
    n: '01',
    title: 'Composition and Size of the Nucleus, Mass-Energy Equivalence',
    kalam: 'Nuclear density is the same for every nucleus.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic is a quiet workhorse. CBSE Boards almost always carry a 1–2 mark question on isotopes/isobars/isotones or the nuclear radius relation. NEET reliably plants one conceptual trap on “nuclear density is independent of mass number.” JEE Main asks direct radius-ratio and mass-energy numericals, while JEE Advanced folds nuclear size or density into multi-step estimation problems (often disguised as astrophysics). Master this and you also build the launchpad for binding energy in Topic 02.',
      },
      {
        t: 'p',
        html: 'Picture the atom as a vast, almost empty stadium. The electrons are like a few spectators wandering the highest, farthest seats, and somewhere down at the very centre of the pitch sits a tiny, impossibly dense pebble — the <b>nucleus</b>. Almost the entire mass of the atom is crammed into that pebble, even though it occupies a laughably small fraction of the atom’s volume. If the atom were blown up to the size of a cricket stadium, the nucleus would be roughly the size of a single grain of rice on the centre pitch. That mental image — enormous emptiness wrapped around a dense core — is the single most important intuition in all of nuclear physics.',
      },
      {
        t: 'p',
        html: 'What is this core made of? Two kinds of particles, collectively called <b>nucleons</b>: positively charged <b>protons</b> and electrically neutral <b>neutrons</b>. The number of protons, the <b>atomic number</b> <i>Z</i>, is the fingerprint of the chemical element — change <i>Z</i> and you have literally turned one element into another. The number of neutrons is <i>N</i>, and the total count of nucleons is the <b>mass number</b> <i>A</i> = <i>Z</i> + <i>N</i>. We write a nuclide compactly as <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i>, for example <sup>12</sup><sub>6</sub>C or <sup>238</sup><sub>92</sub>U.',
      },
      { t: 'fig', id: 'p12-13-fig-13.1' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a railway platform where every coach is identical in size, no matter how long the train. If one coach takes up a fixed length of track, then a 10-coach train is exactly twice as long as a 5-coach train along that one dimension — but pack the coaches into a cube and the density of “train per cubic metre” never changes. The nucleus behaves astonishingly like this. Each nucleon claims a fixed little volume, so as you add nucleons the nucleus simply swells to make room, and the matter inside stays packed at the same crushing density. This is why the nuclear radius does not grow in proportion to <i>A</i>, but to <i>A</i><sup>1/3</sup> — volume grows with <i>A</i>, and radius is the cube root of volume.',
      },
      {
        t: 'p',
        html: 'Once we accept that all that mass is locked inside, a deeper surprise appears. When you weigh a nucleus on a hyper-precise scale, it comes out lighter than the sum of its separate protons and neutrons. Mass has gone missing. Einstein’s relation <i>E</i> = <i>mc</i><sup>2</sup> tells us where it went: that “missing mass” was converted into the energy that glues the nucleons together. This is <b>mass-energy equivalence</b>, the idea that mass and energy are two currencies for the same underlying quantity, exchangeable at the fixed rate of <i>c</i><sup>2</sup>.',
      },
      { t: 'fig', id: 'p12-13-fig-13.2' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean radius formula <i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup> treats the nucleus as a uniformly dense sphere with a sharp edge. Real nuclei have fuzzy surfaces and are not perfectly spherical (some are rugby-ball shaped), so the formula is an excellent order-of-magnitude and trend tool, not a microscopically exact one. The value <i>R</i><sub>0</sub> ≈ 1.2 fm is itself an empirical fit and varies slightly (1.1–1.3 fm) depending on how “radius” is measured. Likewise, <i>E</i> = <i>mc</i><sup>2</sup> as a clean mass-energy conversion is exact, but the everyday statement “mass is conserved” is only an excellent approximation — it quietly fails the moment energies become large, which is exactly the regime nuclear physics lives in.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Nuclide notation',
        main: '<sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i><br><i>N</i> = <i>A</i> − <i>Z</i>',
        legend: [
          '<i>Z</i> = atomic number (number of protons)',
          '<i>A</i> = mass number (number of nucleons)',
          '<i>N</i> = neutron number',
          '<i>X</i> = chemical symbol of the element',
        ],
        note: null,
      },
      {
        t: 'defgrid',
        title: 'Classification of nuclides',
        rows: [
          {
            k: 'Isotopes',
            v: 'same <i>Z</i>, different <i>A</i> (e.g. <sup>1</sup><sub>1</sub>H, <sup>2</sup><sub>1</sub>H, <sup>3</sup><sub>1</sub>H). Same element, different mass.',
          },
          { k: 'Isobars', v: 'same <i>A</i>, different <i>Z</i> (e.g. <sup>3</sup><sub>1</sub>H and <sup>3</sup><sub>2</sub>He).' },
          {
            k: 'Isotones',
            v: 'same <i>N</i>, different <i>Z</i> (e.g. <sup>3</sup><sub>1</sub>H and <sup>4</sup><sub>2</sub>He, both with <i>N</i> = 2).',
          },
        ],
      },
      {
        t: 'formula',
        kicker: 'Nuclear radius',
        main: '<i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup><br><i>R</i><sub>0</sub> ≈ 1.2 fm = 1.2 × 10<sup>−15</sup> m',
        legend: [
          '<i>R</i> = nuclear radius (m)',
          '<i>A</i> = mass number (dimensionless)',
          '<i>R</i><sub>0</sub> = empirical constant',
        ],
        note: 'SI unit of <i>R</i>: metre. Dimensional formula: [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]. The femtometre (fermi), 1 fm = 10<sup>−15</sup> m, is the natural unit.',
      },
      {
        t: 'formula',
        kicker: 'Nuclear density',
        main: '<i>ρ</i> = mass/volume = <i>Am</i><sub>N</sub>/((4/3)π<i>R</i><sub>0</sub><sup>3</sup><i>A</i>) = <i>m</i><sub>N</sub>/((4/3)π<i>R</i><sub>0</sub><sup>3</sup>) ≈ 2.3 × 10<sup>17</sup> kg m<sup>−3</sup>',
        legend: [
          '<i>ρ</i> = nuclear density',
          '<i>m</i><sub>N</sub> = mean mass of one nucleon ≈ 1.66 × 10<sup>−27</sup> kg',
          '<i>R</i><sub>0</sub> = empirical radius constant, ≈ 1.2 fm',
          '<i>A</i> = mass number (number of nucleons)',
        ],
        note: 'The <i>A</i> cancels — <b>density is independent of mass number.</b> SI unit: kg m<sup>−3</sup>. Dimensional formula: [M<sup>1</sup> L<sup>−3</sup> T<sup>0</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Atomic mass unit',
        main: '1 u = (1/12) <i>m</i>(<sup>12</sup><sub>6</sub>C atom) = 1.660539 × 10<sup>−27</sup> kg',
        legend: ['u = atomic mass unit', '<i>m</i>(<sup>12</sup><sub>6</sub>C atom) = mass of one neutral carbon-12 atom'],
        note: 'Dimensional formula of mass: [M<sup>1</sup> L<sup>0</sup> T<sup>0</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Mass-energy equivalence',
        main: '<i>E</i> = <i>mc</i><sup>2</sup><br>1 u ↔ 931.5 MeV',
        legend: ['<i>E</i> = energy (J)', '<i>m</i> = mass (kg)', '<i>c</i> = speed of light in vacuum, 3 × 10<sup>8</sup> m s<sup>−1</sup>'],
        note: 'Dimensional formula of energy: [M<sup>1</sup> L<sup>2</sup> T<sup>−2</sup>] (check: [M][L T<sup>−1</sup>]<sup>2</sup> = [M L<sup>2</sup> T<sup>−2</sup>] ✓).',
      },
      {
        t: 'p',
        html: '<b>Useful masses:</b> <i>m</i><sub>p</sub> = 1.007276 u (proton), <i>m</i><sub>n</sub> = 1.008665 u (neutron), <i>m</i><sub>e</sub> = 0.000549 u (electron), <i>m</i>(<sup>1</sup><sub>1</sub>H atom) = 1.007825 u.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>3.1 Why the nuclear radius goes as <i>A</i><sup>1/3</sup></b><br><b>Setup and physical reasoning.</b> Electron-scattering experiments — firing high-energy electrons at nuclei and reading how they bounce off — reveal that nucleons are packed at an essentially constant density throughout the nuclear interior. The key physical statement is therefore: <b>the volume of a nucleus is directly proportional to the number of nucleons it contains.</b> Each nucleon, in effect, demands the same fixed parcel of space.',
      },
      {
        t: 'p',
        html: '<b>Step 1.</b> Treat the nucleus as a sphere of radius <i>R</i>, so its volume is<br><i>V</i> = (4/3)π<i>R</i><sup>3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Impose the experimental fact that volume scales with nucleon count:<br><i>V</i> ∝ <i>A</i> ⇒ (4/3)π<i>R</i><sup>3</sup> ∝ <i>A</i>.<br>We take this step because constant density means equal volume per nucleon — the geometry must obey the physics.',
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> Since the constant factor (4/3)π does not depend on <i>A</i>, the proportionality passes straight to <i>R</i><sup>3</sup>:<br><i>R</i><sup>3</sup> ∝ <i>A</i> ⇒ <i>R</i> ∝ <i>A</i><sup>1/3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 4.</b> Introduce the proportionality constant <i>R</i><sub>0</sub>, fixed by experiment:<br><i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup>, <i>R</i><sub>0</sub> ≈ 1.2 fm.<br>The cube root is not algebraic decoration — it is the geometric signature of incompressible, uniformly packed nuclear matter.',
      },
      { t: 'p', html: '<b>3.2 Why nuclear density is independent of <i>A</i></b>' },
      {
        t: 'p',
        html: '<b>Step 1.</b> Mass of the nucleus ≈ <i>Am</i><sub>N</sub>, where <i>m</i><sub>N</sub> is the mean nucleon mass.',
      },
      {
        t: 'p',
        html: '<b>Step 2.</b> Volume from 3.1: <i>V</i> = (4/3)π<i>R</i><sup>3</sup> = (4/3)π<i>R</i><sub>0</sub><sup>3</sup><i>A</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 3.</b> Form the density and watch <i>A</i> cancel:<br><i>ρ</i> = <i>Am</i><sub>N</sub>/((4/3)π<i>R</i><sub>0</sub><sup>3</sup><i>A</i>) = <i>m</i><sub>N</sub>/((4/3)π<i>R</i><sub>0</sub><sup>3</sup>).',
      },
      {
        t: 'p',
        html: '<b>Step 4.</b> The right-hand side contains no <i>A</i>, so every nucleus — from hydrogen to uranium — carries the same nuclear density, about 2.3 × 10<sup>17</sup> kg m<sup>−3</sup>. That is roughly 10<sup>14</sup> times denser than water. This single result is the conceptual heart of the whole topic.',
      },
      {
        t: 'proc',
        title: '3.3 Procedure: converting a mass defect into energy',
        steps: [
          'Compute the missing mass in atomic mass units: Δ<i>m</i> (in u).',
          'Multiply by the conversion factor: <i>E</i> = Δ<i>m</i> × 931.5 MeV.',
          'To get joules instead, use <i>E</i> = Δ<i>m</i> × (1.66 × 10<sup>−27</sup>) × (3 × 10<sup>8</sup>)<sup>2</sup> J, or simply convert MeV using 1 MeV = 1.6 × 10<sup>−13</sup> J. The reasoning: <i>E</i> = <i>mc</i><sup>2</sup> is the exact bridge, and 931.5 MeV/u is just that bridge pre-evaluated for the convenient unit of one atomic mass unit.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Estimate the radius of an aluminium-27 nucleus, <sup>27</sup><sub>13</sub>Al. Take <i>R</i><sub>0</sub> = 1.2 fm.',
        steps: [
          '<b>Given:</b> <i>A</i> = 27, <i>R</i><sub>0</sub> = 1.2 fm.',
          '<b>Formula:</b> <i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup>.',
          '<b>Substitution:</b> <i>A</i><sup>1/3</sup> = 27<sup>1/3</sup> = 3, so<br><i>R</i> = 1.2 × 3 = 3.6 fm = 3.6 × 10<sup>−15</sup> m.',
          'Note how a perfect cube under the root keeps the arithmetic clean — examiners love mass numbers like 8, 27, 64, 125, 216 for exactly this reason.',
        ],
        ans: '<i>R</i> ≈ 3.6 fm.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two nuclei have mass numbers in the ratio 1 ∶ 27. What is the ratio of (a) their radii and (b) their densities?',
        steps: [
          '<b>The trap:</b> a hurried student writes radius ratio = 1 ∶ 27 and density ratio = 1 ∶ 27 (assuming the bigger nucleus is denser). Both are wrong.',
          '<b>(a)</b> <i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = (<i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>)<sup>1/3</sup> = (1/27)<sup>1/3</sup> = 1/3, so the radii are in ratio <b>1 ∶ 3</b>.',
          '<b>(b)</b> Nuclear density is independent of <i>A</i>, so the densities are in ratio <b>1 ∶ 1</b>.',
          '<b>Mental shortcut:</b> radius questions → take the cube root of the <i>A</i>-ratio; density questions → answer “equal” before you even pick up the pen.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For <sup>238</sup><sub>92</sub>U (atomic mass 238.05 u): (a) estimate its nuclear radius, and (b) find the energy equivalent of its rest mass, in both MeV and joules. (This links nuclear size with mass-energy equivalence.)',
        steps: [
          '<b>(a)</b> <i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup> = 1.2 × 238<sup>1/3</sup> fm. Since 6.2<sup>3</sup> ≈ 238.3, take 238<sup>1/3</sup> ≈ 6.2:<br><i>R</i> ≈ 1.2 × 6.2 = 7.44 fm ≈ 7.4 × 10<sup>−15</sup> m.',
          '<b>(b)</b> Using 1 u ↔ 931.5 MeV:<br><i>E</i> = 238.05 × 931.5 ≈ 2.22 × 10<sup>5</sup> MeV.<br>Converting with 1 MeV = 1.6 × 10<sup>−13</sup> J:<br><i>E</i> = 2.22 × 10<sup>5</sup> × 1.6 × 10<sup>−13</sup> ≈ 3.55 × 10<sup>−8</sup> J.',
          '<b>Sanity check via <i>E</i> = <i>mc</i><sup>2</sup> directly:</b> <i>m</i> = 238.05 × 1.66 × 10<sup>−27</sup> ≈ 3.95 × 10<sup>−25</sup> kg, and <i>mc</i><sup>2</sup> ≈ 3.95 × 10<sup>−25</sup> × 9 × 10<sup>16</sup> ≈ 3.6 × 10<sup>−8</sup> J ✓.',
        ],
        ans: '<i>R</i> ≈ 7.4 fm; <i>E</i> ≈ 2.22 × 10<sup>5</sup> MeV ≈ 3.6 × 10<sup>−8</sup> J.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A neutron star can be modelled as one gigantic nucleus of closely packed nucleons at ordinary nuclear density. Estimate the radius of a neutron star of mass 1.5 <i>M</i><sub>⊙</sub>, where <i>M</i><sub>⊙</sub> = 2 × 10<sup>30</sup> kg. Take nuclear density <i>ρ</i> = 2.3 × 10<sup>17</sup> kg m<sup>−3</sup>.',
        steps: [
          '<b>Method 1 — straight from density.</b><br><i>M</i> = 1.5 × 2 × 10<sup>30</sup> = 3 × 10<sup>30</sup> kg, <i>V</i> = <i>M</i>/<i>ρ</i> = (3 × 10<sup>30</sup>)/(2.3 × 10<sup>17</sup>) ≈ 1.30 × 10<sup>13</sup> m<sup>3</sup>.',
          'From <i>V</i> = (4/3)π<i>R</i><sup>3</sup>:<br><i>R</i><sup>3</sup> = 3<i>V</i>/(4π) = (3 × 1.30 × 10<sup>13</sup>)/12.57 ≈ 3.11 × 10<sup>12</sup> m<sup>3</sup>,<br><i>R</i> = (3.11 × 10<sup>12</sup>)<sup>1/3</sup> ≈ 1.46 × 10<sup>4</sup> m ≈ 14.6 km.',
          '<b>Method 2 — via <i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup> (elegant cross-check).</b> Number of nucleons <i>A</i> = <i>M</i>/<i>m</i><sub>N</sub> = (3 × 10<sup>30</sup>)/(1.66 × 10<sup>−27</sup>) ≈ 1.81 × 10<sup>57</sup>. Then<br><i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup> =1.2 × 10<sup>−15</sup> × (1.81 × 10<sup>57</sup>)<sup>1/3</sup> ≈ 1.2 × 10<sup>−15</sup> × 1.22 × 10<sup>19</sup> ≈ 1.46 × 10<sup>4</sup> m.',
          'Both methods agree because “treat it as one big nucleus” and “use the constant nuclear density” are the same physical statement viewed two ways.',
        ],
        ans: '<i>R</i> ≈ 15 km — remarkably close to the radii of real neutron stars.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Identify each pair as isotopes, isobars, or isotones: (i) <sup>14</sup><sub>6</sub>C and <sup>14</sup><sub>7</sub>N; (ii) <sup>40</sup><sub>18</sub>Ar and <sup>40</sup><sub>20</sub>Ca; (iii) <sup>13</sup><sub>6</sub>C and <sup>14</sup><sub>7</sub>N.',
            a: '(i) isobars, (ii) isobars, (iii) isotones.',
          },
          {
            q: '[NEET] The radius of a <sup>64</sup><sub>29</sub>Cu nucleus is measured to be 4.8 fm. Using <i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup>, find <i>R</i><sub>0</sub>.',
            a: '<i>R</i><sub>0</sub> = 1.2 fm.',
          },
          {
            q: '[JEE Main] A nucleus has a radius of 6.0 fm. Taking <i>R</i><sub>0</sub> = 1.2 fm, find its mass number <i>A</i> and hence its approximate mass in kg.',
            a: '<i>A</i> = 125, mass ≈ 2.08 × 10<sup>−25</sup> kg.',
          },
          {
            q: '[JEE Main] Calculate the energy (in MeV and in J) equivalent to the rest mass of one neutron, given <i>m</i><sub>n</sub> = 1.008665 u.',
            a: '≈ 939.6 MeV ≈ 1.50 × 10<sup>−10</sup> J.',
          },
          {
            q: '[JEE Advanced] Estimate the ratio of the density of nuclear matter to the mean density of a hydrogen atom, modelling the atom as a sphere of radius 0.53 × 10<sup>−10</sup> m containing one proton. Comment on the order of magnitude.',
            a: 'Ratio ∼ 10<sup>14</sup> (nuclear matter is about a hundred trillion times denser than the atom as a whole, because nearly all the mass sits in ∼ 10<sup>−14</sup> of the atom’s volume).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The nuclei of two atoms have mass numbers 16 and 128. The ratio of their nuclear radii is:',
        opts: [
          {
            label: '1 ∶ 8',
            nudge: 'Distractor <b>(a)</b> comes from using the raw ratio <i>A</i><sub>1</sub> ∶ <i>A</i><sub>2</sub> = 1 ∶ 8 and forgetting the cube root entirely — the most common error.',
          },
          {
            label: '1 ∶ 4',
            nudge: 'Distractor <b>(b)</b> comes from squaring the correct ratio, (1/2)<sup>2</sup> = 1/4.',
          },
          { label: '1 ∶ 2', nudge: null },
          {
            label: '1 ∶ 2√2',
            nudge: 'Distractor <b>(d)</b> comes from taking a square root instead of a cube root: 1/(2√2).',
          },
        ],
        correct: 2,
        solution: '<i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = (16/128)<sup>1/3</sup> = (1/8)<sup>1/3</sup> = 1/2.',
      },
      {
        t: 'mcq',
        q: 'As the mass number <i>A</i> of a nucleus increases, the nuclear density:',
        opts: [
          {
            label: 'increases linearly with <i>A</i>',
            nudge: 'Distractor <b>(a)</b> tempts students who reason “more nucleons ⇒ more mass ⇒ denser,” forgetting the volume grows too.',
          },
          { label: 'decreases as 1/<i>A</i>', nudge: 'Distractor <b>(b)</b> lets the volume grow ∝ <i>A</i> but forgets that the mass grows ∝ <i>A</i> too.' },
          {
            label: 'increases as <i>A</i><sup>1/3</sup>',
            nudge: 'Distractor <b>(c)</b> wrongly carries the <i>A</i><sup>1/3</sup> from the radius formula into density.',
          },
          { label: 'remains nearly constant', nudge: null },
        ],
        correct: 3,
        solution: 'Volume ∝ <i>A</i> and mass ∝ <i>A</i>, so density (mass/volume) is independent of <i>A</i>.',
      },
      {
        t: 'mcq',
        q: 'The energy equivalent of one atomic mass unit is approximately:',
        opts: [
          { label: '0.511 MeV', nudge: 'Distractor <b>(a)</b> is the rest energy of an electron, not 1 u.' },
          { label: '931.5 MeV', nudge: null },
          {
            label: '938.3 MeV',
            nudge: 'Distractor <b>(c)</b> is the rest energy of a proton (<i>m</i><sub>p</sub> ≈ 1.0073 u, not exactly 1 u) — a subtle trap.',
          },
          {
            label: '1.6 × 10<sup>−13</sup> J',
            nudge: 'Distractor <b>(d)</b> is the joule value of 1 MeV, not of 1 u.',
          },
        ],
        correct: 1,
        solution: '1 u = 1.66 × 10<sup>−27</sup> kg, and <i>E</i> = <i>mc</i><sup>2</sup> = 931.5 MeV.',
      },
      {
        t: 'mcq',
        q: 'Which pair represents isotones?',
        opts: [
          {
            label: '<sup>12</sup><sub>6</sub>C and <sup>14</sup><sub>6</sub>C',
            nudge: 'Distractor <b>(a)</b> is <b>isotopes</b> (same <i>Z</i> = 6).',
          },
          {
            label: '<sup>3</sup><sub>1</sub>H and <sup>3</sup><sub>2</sub>He',
            nudge: 'Distractors <b>(b)</b> and <b>(d)</b> are <b>isobars</b> (same <i>A</i>).',
          },
          { label: '<sup>18</sup><sub>8</sub>O and <sup>19</sup><sub>9</sub>F', nudge: null },
          {
            label: '<sup>40</sup><sub>18</sub>Ar and <sup>40</sup><sub>19</sub>K',
            nudge: 'Distractors <b>(b)</b> and <b>(d)</b> are <b>isobars</b> (same <i>A</i>).',
          },
        ],
        correct: 2,
        solution: 'Isotones share neutron number <i>N</i> = <i>A</i> − <i>Z</i>: for <sup>18</sup><sub>8</sub>O, <i>N</i> = 10; for <sup>19</sup><sub>9</sub>F, <i>N</i> = 10. ✓ Students who blur the three definitions pick whichever “looks paired.”',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the cube root in radius ratios.</b> The most frequent slip: writing <i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = <i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>. The correct relation is <i>R</i> ∝ <i>A</i><sup>1/3</sup> — always cube-root the mass-number ratio.',
          '<b>Believing heavier nuclei are denser.</b> Nuclear density is the same for every nucleus. If a question asks for a density ratio between two nuclei, the answer is 1 ∶ 1 unless something other than <i>A</i> changes.',
          '<b>Mixing up isotopes / isobars / isotones.</b> Anchor each to its constant: isoto<b>p</b>es → same <b>proton</b> count <i>Z</i>; iso<b>bar</b>s → same mass number <i>A</i> (think “bar” = balance = same total weight); isoto<b>n</b>es → same <b>neutron</b> count <i>N</i>.',
          '<b>Confusing atomic mass with nuclear mass.</b> Tabulated masses are usually atomic (they include <i>Z</i> electrons). When precision matters, be explicit about whether you are using <i>m</i><sub>p</sub>, <i>m</i><sub>n</sub>, or the neutral-atom mass <i>m</i>(<sup>1</sup>H).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For mass-energy conversions, never re-derive through <i>E</i> = <i>mc</i><sup>2</sup> in joules under exam pressure. Memorise the one-line bridge 1 u ↔ 931.5 MeV and multiply. For radii, memorise the perfect cubes (2<sup>3</sup> = 8, 3<sup>3</sup> = 27, 4<sup>3</sup> = 64, 5<sup>3</sup> = 125, 6<sup>3</sup> = 216) — examiners pick mass numbers near these so the cube root is instant.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Notation',
            note: '<sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i> — <i>Z</i> protons, <i>N</i> = <i>A</i> − <i>Z</i> neutrons, <i>A</i> nucleons.',
          },
          {
            f: 'Isotopes / Isobars / Isotones',
            note: 'same <i>Z</i> / same <i>A</i> / same <i>N</i>. <b>Mnemonic:</b> “<b>P</b>roton, <b>A</b>=bar, <b>N</b>eutron.”',
          },
          {
            f: 'Nuclear radius',
            note: '<i>R</i> = <i>R</i><sub>0</sub><i>A</i><sup>1/3</sup>, <i>R</i><sub>0</sub> ≈ 1.2 fm. Radius ratio = cube root of <i>A</i>-ratio.',
          },
          {
            f: 'Nuclear density',
            note: '<i>ρ</i> ≈ 2.3 × 10<sup>17</sup> kg m<sup>−3</sup> — <b>independent of <i>A</i></b>, about 10<sup>14</sup>× water.',
          },
          { f: 'Atomic mass unit', note: '1 u = 1.66 × 10<sup>−27</sup> kg.' },
          {
            f: 'Mass-energy bridge',
            note: '<i>E</i> = <i>mc</i><sup>2</sup>, 1 u ↔ 931.5 MeV. Rest energies: e<sup>−</sup> = 0.511 MeV, p = 938.3 MeV, n = 939.6 MeV.',
          },
          {
            f: 'One-liner',
            note: 'Volume scales with <i>A</i>, so radius scales with <i>A</i><sup>1/3</sup> and density doesn’t scale at all.',
          },
        ],
        aids: [],
      },
    ],
  },
];
