import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11, Topics 01 and 02: pp. 716–733 of the Class 12 Physics Master
 * Reference, word for word. Topic 01, Electron Emission, the Photoelectric
 * Experiments & the Photon (book “Subtopic 00”, pp. 716–724), and Topic 02, The
 * Photoelectric Effect and Einstein’s Equation (book “Subtopic 01”, pp. 725–733),
 * are each split at their Sections 1 to 8. Figures 11.1–11.3 (captions p. 718,
 * drawn p. 719), 11.4 (caption p. 720, drawn p. 721) and 11.5–11.6 (captions
 * p. 728, drawn p. 729) are redrawn in lib/diagrams/physics-12-11.ts. The book’s
 * “Subtopic 01” is this app’s Topic 02.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 716–724 ─────────────────────────
  {
    n: '01',
    title: 'Electron Emission, the Photoelectric Experiments & the Photon',
    kalam: 'Light carries energy, and if a packet of light is energetic enough, it can knock an electron out.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Pure foundation marks. CBSE asks the four types of electron emission and the failure of wave theory as guaranteed 1–3 mark questions, and the photoelectric characteristic graphs almost every year. NEET loves photon energy/momentum and “number of photons per second” numericals. JEE Main/Advanced extend the photon to intensity, photon flux, and radiation force. Nothing here is optional — it is the bedrock the rest of the chapter stands on.',
      },
      {
        t: 'p',
        html: 'Metals are full of electrons that drift around almost freely — that is why they conduct electricity so well. So here is a fair question: if these electrons are “free,” why don’t they just leak out of the metal and drip off the surface like water off a wet cloth?',
      },
      {
        t: 'p',
        html: 'The answer is that “free” means free to roam inside the metal, not free to leave it. Picture a pond full of fish. The fish swim wherever they like within the water, but to actually jump out of the pond and into the air, a fish needs a sudden burst of energy — and even then, the surface of the water seems to “pull it back.” A metal’s surface behaves like that water surface: it sets up an invisible energy barrier that holds the electrons in. The minimum energy an electron must be given to just escape this barrier is called the <b>work function</b>, <i>φ</i><sub>0</sub>. Different metals hold their electrons with different tightness, so each has its own work function (caesium is “leaky,” with a low <i>φ</i><sub>0</sub>; platinum holds on hard, with a high <i>φ</i><sub>0</sub>).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> If electrons need an energy kick of at least <i>φ</i><sub>0</sub> to escape, then the whole game becomes: how do we deliver that kick? Nature offers four delivery services, and these are the four <b>types of electron emission</b>:<br>• <b>Thermionic emission</b> — heat the metal (as in the filament of an old TV picture tube or a vacuum tube). Hot electrons jiggle violently and the most energetic ones leap out.<br>• <b>Photoelectric emission</b> — shine light on the metal. Light carries energy, and if a packet of light is energetic enough, it can knock an electron out. This is the type that occupies most of this chapter.<br>• <b>Field emission (cold-cathode emission)</b> — apply a very strong external electric field (∼ 10<sup>8</sup> V/m). The field literally pulls electrons out of the surface, no heat needed.<br>• <b>Secondary emission</b> — bombard the surface with fast-moving particles (electrons or ions). The incoming particles transfer their energy and splash electrons out, like a cricket ball smashing into a stack of marbles.',
      },
      {
        t: 'p',
        html: 'In 1887 Heinrich Hertz noticed, almost by accident, that a spark jumped more easily across a gap when ultraviolet light fell on the metal electrodes. Hallwachs and Lenard then studied this <b>photoelectric emission</b> carefully — and what they found broke classical physics wide open, as we will see.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Photoelectric emission happens only if the incoming energy per packet is at least <i>φ</i><sub>0</sub>; below that threshold, nothing happens no matter how long or how brightly you illuminate the surface. The surface must be clean (oxide layers change <i>φ</i><sub>0</sub>) and usually in vacuum, so emitted electrons aren’t reabsorbed by air molecules.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Work function',
        main: '<i>φ</i><sub>0</sub> = <i>hν</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>0</sub>',
        legend: [
          '<i>φ</i><sub>0</sub> = minimum energy to free a surface electron',
          '<i>ν</i><sub>0</sub> = threshold frequency',
          '<i>λ</i><sub>0</sub> = threshold wavelength',
        ],
        note: 'Usually quoted in electron-volts (1 eV = 1.6 × 10<sup>−19</sup> J).',
      },
      {
        t: 'formula',
        kicker: 'The photon — a quantum (packet) of light',
        main: '<i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i><br><i>p</i> = <i>E</i>/<i>c</i> = <i>hν</i>/<i>c</i> = <i>h</i>/<i>λ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Properties of a photon (particle nature of light):</b><br>• Travels at speed <i>c</i> in vacuum; carries energy <i>E</i> = <i>hν</i> and momentum <i>p</i> = <i>h</i>/<i>λ</i>.<br>• Has <b>zero rest mass</b>; it cannot exist at rest. (Its “effective” or dynamic mass is <i>m</i> = <i>E</i>/<i>c</i><sup>2</sup> = <i>hν</i>/<i>c</i><sup>2</sup>.)<br>• Electrically <b>neutral</b> — undeflected by electric or magnetic fields.<br>• In a photon–particle collision, total energy and total momentum are conserved (but photon number need not be).<br>• The <b>intensity</b> of monochromatic light of a given frequency is set by the number of photons crossing unit area per unit time; each photon’s energy <i>hν</i> is fixed by the frequency, not by the intensity.',
      },
      {
        t: 'formula',
        kicker: 'Intensity and photon flux',
        main: 'for monochromatic light of power <i>P</i> spread over area <i>A</i>:<br><i>I</i> = <i>P</i>/<i>A</i> = <i>n</i><sub>ph</sub><i>hν</i>/<i>A</i><br><i>n</i><sub>ph</sub> = <i>P</i>/(<i>hν</i>) = <i>Pλ</i>/(<i>hc</i>)',
        legend: ['<i>n</i><sub>ph</sub> = number of photons emitted per second'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Radiation force (momentum delivered per second)',
        main: 'when a beam of power <i>P</i> strikes a surface normally:<br><i>F</i><sub>absorbed</sub> = <i>P</i>/<i>c</i><br><i>F</i><sub>reflected</sub> = 2<i>P</i>/<i>c</i>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Quantity reference table',
        head: ['Symbol', 'Quantity', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['<i>φ</i><sub>0</sub>', 'Work function', 'J (or eV)', '[M L<sup>2</sup> T<sup>−2</sup>]'],
          ['<i>E</i>', 'Photon energy', 'J (or eV)', '[M L<sup>2</sup> T<sup>−2</sup>]'],
          ['<i>p</i>', 'Photon momentum', 'kg·m·s<sup>−1</sup>', '[M L T<sup>−1</sup>]'],
          ['<i>I</i>', 'Intensity', 'W·m<sup>−2</sup>', '[M T<sup>−3</sup>]'],
          ['<i>n</i><sub>ph</sub>', 'Photon emission rate', 's<sup>−1</sup>', '[T<sup>−1</sup>]'],
        ],
      },

      { t: 'part', title: 'Key procedures — the experimental study of the photoelectric effect' },
      {
        t: 'p',
        html: 'There is no algebraic “derivation” here; the heart of this topic is an experiment and the graphs it produces. Master the setup and the three characteristic curves and you have mastered the section.',
      },
      {
        t: 'p',
        html: '<b>The apparatus.</b> An evacuated glass tube contains two metal plates: a photosensitive <b>emitter</b> (cathode, C) and a <b>collector</b> (anode, A). Monochromatic light of adjustable intensity and frequency enters through a quartz window and strikes the emitter. A battery with a sliding contact applies a variable potential between the plates (which can be made positive or negative on the collector), and a sensitive microammeter reads the resulting <b>photocurrent</b>.',
      },
      { t: 'fig', id: 'p12-11-fig-11.1' },
      {
        t: 'p',
        html: '<b>Study 1 — Effect of intensity (frequency and collector potential fixed).</b> Keep the light’s frequency (above threshold) and the accelerating potential fixed, and vary the brightness. The photocurrent is found to be <b>directly proportional to the intensity</b>. More light means more photons per second, hence more electrons knocked out per second.',
      },
      { t: 'fig', id: 'p12-11-fig-11.2' },
      {
        t: 'p',
        html: '<b>Study 2 — Effect of collector potential (frequency and intensity fixed).</b> Now sweep the collector potential.<br>• Making the collector more positive increases the photocurrent until it levels off at a <b>saturation current</b> — the stage where every emitted electron is being collected.<br>• Making the collector negative (a retarding potential) opposes the electrons; the current falls. At a particular negative value, −<i>V</i><sub>0</sub> (<i>V</i><sub>0</sub> is the <b>stopping potential</b>), even the fastest electron is turned back and the current becomes zero: <i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub>.<br>• Repeating at higher intensity (same frequency) gives a higher saturation current but the <b>same stopping potential</b>. This is the crucial observation: intensity controls how many electrons, not how energetic they are.',
      },
      { t: 'fig', id: 'p12-11-fig-11.3' },
      {
        t: 'p',
        html: '<b>Study 3 — Effect of frequency (intensity fixed).</b> Vary the frequency of the light at fixed intensity.<br>• Higher frequency gives a larger stopping potential — the electrons come out more energetic.<br>• Below a certain <b>threshold frequency</b> <i>ν</i><sub>0</sub>, no current flows at all, however intense the light.<br>• A graph of stopping potential versus frequency is a <b>straight line</b>, the same slope (<i>h</i>/<i>e</i>) for every metal, cutting the frequency axis at that metal’s <i>ν</i><sub>0</sub>.',
      },
      { t: 'fig', id: 'p12-11-fig-11.4' },
      {
        t: 'p',
        html: '<b>The three laws of the photoelectric effect (summary of the experiments):</b><br>1. For light above threshold, photocurrent (number of electrons per second) is proportional to intensity.<br>2. The maximum kinetic energy of photoelectrons depends only on the frequency of light, not on its intensity.<br>3. There is a threshold frequency below which no emission occurs, and emission is essentially instantaneous (≲ 10<sup>−9</sup> s).',
      },
      {
        t: 'p',
        html: '<b>Why the wave theory of light fails.</b> Classical wave theory treats light energy as spread smoothly over the wavefront, so a brighter wave should pour in more energy. It runs into three flat contradictions:<br>1. It predicts <i>K</i><sub>max</sub> should rise with intensity (a stronger wave shakes electrons harder) — but experiment shows <i>K</i><sub>max</sub> depends only on frequency.<br>2. It predicts no threshold frequency — given enough intensity or time, any frequency should eventually free electrons — but a sharp threshold <i>ν</i><sub>0</sub> exists.<br>3. It predicts a measurable time lag for dim light (energy must accumulate gradually) — but emission is instantaneous.',
      },
      {
        t: 'p',
        html: 'These three failures are exactly what Einstein’s photon equation (Topic 02) resolves at a single stroke.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the energy (in joules and eV) and the momentum of a photon of light of wavelength 500 nm.',
        steps: [
          '<b>Step 1 — Energy:</b><br><i>E</i> = <i>hc</i>/<i>λ</i> = (1240 eV·nm)/(500 nm) = 2.48 eV = 2.48 × 1.6 × 10<sup>−19</sup> = 3.97 × 10<sup>−19</sup> J.',
          '<b>Step 2 — Momentum:</b><br><i>p</i> = <i>h</i>/<i>λ</i> = (6.63 × 10<sup>−34</sup>)/(500 × 10<sup>−9</sup>)',
        ],
        ans: '<i>E</i> = 2.48 eV = 3.97 × 10<sup>−19</sup> J, <i>p</i> = 1.33 × 10<sup>−27</sup> kg·m/s.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A 20 W source emits monochromatic light of wavelength 600 nm. How many photons does it emit per second?',
        steps: [
          '<b>The trap:</b> plugging power straight into a wavelength formula, or forgetting to convert nm. Use <i>n</i><sub>ph</sub> = <i>P</i>/(<i>hν</i>) = <i>Pλ</i>/(<i>hc</i>).',
          '<b>Fast computation</b> (with <i>hc</i> = 1.99 × 10<sup>−25</sup> J·m):<br><i>n</i><sub>ph</sub> = <i>Pλ</i>/(<i>hc</i>) = (20)(600 × 10<sup>−9</sup>)/(1.99 × 10<sup>−25</sup>) = (1.2 × 10<sup>−5</sup>)/(1.99 × 10<sup>−25</sup>) ≈ 6.0 × 10<sup>19</sup> photons/s.',
          '<b>Speed-tip:</b> each 600 nm photon carries about 2.07 eV ≈ 3.3 × 10<sup>−19</sup> J; dividing 20 W by that energy gives the count directly.',
        ],
        ans: '≈ 6.0 × 10<sup>19</sup> photons per second.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A point source of power 100 W emits monochromatic light of wavelength 500 nm uniformly in all directions. Find the number of photons crossing a unit area (1 m<sup>2</sup>) held normal to the light per second at a distance of 2 m from the source.',
        steps: [
          'This combines photon counting with the inverse-square spreading of light.',
          '<b>Step 1 — Total photons emitted per second:</b><br><i>n</i><sub>total</sub> = <i>Pλ</i>/(<i>hc</i>) = (100)(500 × 10<sup>−9</sup>)/(1.99 × 10<sup>−25</sup>) = (5 × 10<sup>−5</sup>)/(1.99 × 10<sup>−25</sup>) ≈ 2.51 × 10<sup>20</sup> s<sup>−1</sup>.',
          '<b>Step 2 — Spread over a sphere of radius 2 m</b> (surface area 4π<i>r</i><sup>2</sup>):<br>flux = <i>n</i><sub>total</sub>/(4π<i>r</i><sup>2</sup>) = (2.51 × 10<sup>20</sup>)/(4π(2)<sup>2</sup>) = (2.51 × 10<sup>20</sup>)/50.3',
        ],
        ans: '≈ 5.0 × 10<sup>18</sup> photons per square metre per second.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A parallel laser beam of power 30 W falls normally on a surface. Find the force exerted on the surface if it is (a) a perfect absorber and (b) a perfect reflector. (c) Comment on the photon momentum picture behind these results.',
        steps: [
          '<b>Part (a) — perfect absorber.</b> Each photon delivers momentum <i>p</i> = <i>E</i>/<i>c</i>. In one second the beam delivers total energy <i>P</i>, hence total momentum <i>P</i>/<i>c</i>, all of which is absorbed:<br><i>F</i><sub>absorbed</sub> = <i>P</i>/<i>c</i> = 30/(3 × 10<sup>8</sup>) = 1.0 × 10<sup>−7</sup> N.',
          '<b>Part (b) — perfect reflector.</b> A reflected photon reverses its momentum, so it transfers twice as much:<br><i>F</i><sub>reflected</sub> = 2<i>P</i>/<i>c</i> = 2(30)/(3 × 10<sup>8</sup>) = 2.0 × 10<sup>−7</sup> N.',
          '<b>Part (c) — the picture.</b> Force is momentum delivered per second. Absorption transfers each photon’s momentum once; reflection transfers it twice (incoming +<i>p</i> becomes outgoing −<i>p</i>, a change of 2<i>p</i>). This is the basis of radiation pressure and the concept of solar sails.',
        ],
        ans: '(a) 1.0 × 10<sup>−7</sup> N; (b) 2.0 × 10<sup>−7</sup> N.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Calculate the energy of a photon of wavelength 620 nm in electron-volts.',
            a: '2.0 eV',
          },
          {
            q: '[NEET] Find the momentum of a photon whose energy is 3.1 eV.',
            a: '≈ 1.65 × 10<sup>−27</sup> kg·m/s',
          },
          {
            q: '[JEE Main] A 60 W bulb converts 2% of its power into light of wavelength 500 nm. How many such photons does it emit per second?',
            a: '≈ 3.0 × 10<sup>18</sup> s<sup>−1</sup>',
          },
          {
            q: '[JEE Main] Name the type of electron emission occurring in (a) the heated filament of a vacuum tube and (b) a metal plate exposed to ultraviolet light.',
            a: '(a) thermionic, (b) photoelectric',
          },
          {
            q: '[JEE Advanced] Calculate the force exerted by a 10 W laser beam falling normally on a perfectly reflecting mirror.',
            a: '≈ 6.7 × 10<sup>−8</sup> N',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Electron emission produced by applying a very strong external electric field to a metal surface is called:',
        opts: [
          { label: 'thermionic emission', nudge: '<b>(A)</b> needs heat.' },
          { label: 'photoelectric emission', nudge: '<b>(B)</b> needs light.' },
          { label: 'field emission', nudge: null },
          { label: 'secondary emission', nudge: '<b>(D)</b> needs bombardment by particles.' },
        ],
        correct: 2,
        solution:
          'A strong field (∼ 10<sup>8</sup> V/m) drags electrons out directly — “cold-cathode” or field emission. Each is a different energy-delivery mechanism; the question is testing whether you can match cause to type.',
      },
      {
        t: 'mcq',
        q: 'The momentum of a photon of wavelength <i>λ</i> is:',
        opts: [
          {
            label: '<i>hλ</i>',
            nudge: '<b>(A)</b> and <b>(D)</b> are dimensionally wrong — quick unit checking eliminates both instantly.',
          },
          { label: '<i>h</i>/<i>λ</i>', nudge: null },
          {
            label: '<i>hc</i>/<i>λ</i>',
            nudge: '<b>(C)</b> is the photon’s energy (<i>E</i> = <i>hc</i>/<i>λ</i>), a classic energy-for-momentum swap.',
          },
          {
            label: '<i>hλ</i>/<i>c</i>',
            nudge: '<b>(A)</b> and <b>(D)</b> are dimensionally wrong — quick unit checking eliminates both instantly.',
          },
        ],
        correct: 1,
        solution: 'By definition <i>p</i> = <i>h</i>/<i>λ</i>.',
      },
      {
        t: 'mcq',
        q: 'In a photocurrent-versus-collector-potential graph, two curves are drawn for the same frequency but different intensities. They differ in:',
        opts: [
          {
            label: 'stopping potential only',
            nudge: '<b>(A)</b> and <b>(C)</b> assume intensity shifts the stopping potential — the single most common graph-reading error.',
          },
          { label: 'saturation current only', nudge: null },
          {
            label: 'both stopping potential and saturation current',
            nudge: '<b>(A)</b> and <b>(C)</b> assume intensity shifts the stopping potential — the single most common graph-reading error.',
          },
          {
            label: 'neither',
            nudge: '<b>(D)</b> misses that the higher-intensity curve saturates at a higher current, so the two curves do differ.',
          },
        ],
        correct: 1,
        solution:
          'Same frequency means the same maximum electron energy, hence the <b>same</b> stopping potential; higher intensity means more electrons, hence a higher <b>saturation current</b>. Stopping potential moves only when frequency changes.',
      },
      {
        t: 'mcq',
        q: 'The wave theory of light fails to explain the photoelectric effect because it cannot account for:',
        opts: [
          {
            label: 'the proportionality of photocurrent to intensity',
            nudge: '<b>(A)</b> and <b>(C)</b> are actually consistent with the wave picture (more energy → more current → saturation), so they are not the failure.',
          },
          { label: 'the existence of a threshold frequency', nudge: null },
          {
            label: 'the saturation of photocurrent',
            nudge: '<b>(A)</b> and <b>(C)</b> are actually consistent with the wave picture (more energy → more current → saturation), so they are not the failure.',
          },
          { label: 'the reflection of light', nudge: '<b>(D)</b> is unrelated to the photoelectric effect altogether.' },
        ],
        correct: 1,
        solution:
          'Classical waves predict that any frequency, given enough intensity, should eventually free electrons — yet a sharp threshold frequency exists.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Zero rest mass means zero momentum.”</b> False. A photon has no rest mass yet carries momentum <i>p</i> = <i>h</i>/<i>λ</i> and an effective mass <i>E</i>/<i>c</i><sup>2</sup>. Mass and momentum are not the same thing for a photon.',
          '<b>Swapping the two graph readings.</b> Lock this in: <b>saturation current ↔ intensity; stopping potential ↔ frequency.</b> Curves at different intensities (same frequency) share a stopping potential; curves at different frequencies (same intensity) have different stopping potentials.',
          '<b>Confusing the four emission types.</b> Heat → thermionic, light → photoelectric, strong field → field, particle bombardment → secondary. One word triggers the right type.',
          '<b>Energy-versus-momentum slip for photons.</b> <i>E</i> = <i>hc</i>/<i>λ</i> but <i>p</i> = <i>h</i>/<i>λ</i> — they differ by a factor of <i>c</i>. Mixing them ruins both numericals and MCQs.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> To count photons from a source, find the energy of one photon in joules (<i>E</i> = <i>hc</i>/<i>λ</i>) and divide the power by it: <i>n</i><sub>ph</sub> = <i>P</i>/<i>E</i>. One division replaces a messy formula, and it makes the physics — “power = photons per second × energy each” — obvious.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Four emissions',
            note: 'thermionic (heat), photoelectric (light), field (strong E-field), secondary (particle bombardment).',
          },
          {
            f: 'Work function',
            note: '<i>φ</i><sub>0</sub> = <i>hν</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>0</sub> (a property of the metal).',
          },
          {
            f: 'Photon',
            note: '<i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i>, <i>p</i> = <i>h</i>/<i>λ</i>, rest mass = 0, effective mass = <i>E</i>/<i>c</i><sup>2</sup>, neutral, speed <i>c</i>.',
          },
          {
            f: 'Intensity = photon count',
            note: '<i>n</i><sub>ph</sub> = <i>P</i>/(<i>hν</i>) = <i>Pλ</i>/(<i>hc</i>).',
          },
          { f: 'Radiation force', note: 'absorber <i>P</i>/<i>c</i>, reflector 2<i>P</i>/<i>c</i>.' },
          {
            f: 'Three graphs',
            note: 'current ∝ intensity; current–potential gives saturation current (↑ with intensity) and stopping potential (fixed by frequency); <i>V</i><sub>0</sub> vs <i>ν</i> is a straight line, slope <i>h</i>/<i>e</i>, intercept <i>ν</i><sub>0</sub> on the <i>ν</i>-axis.',
          },
          {
            f: 'Wave theory fails on',
            note: '(1) <i>K</i><sub>max</sub> vs frequency not intensity, (2) existence of threshold <i>ν</i><sub>0</sub>, (3) instantaneous emission (no time lag).',
          },
        ],
        aids: ['Mnemonic — “Heat, Light, Field, Hit” for the four emissions; and “Count for current, Colour for energy” for the graphs.'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 725–733 ─────────────────────────
  {
    n: '02',
    title: 'The Photoelectric Effect and Einstein’s Equation',
    kalam: 'The brightness of light controls how many electrons come out; the colour (frequency) of light controls how energetic each one is.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is one of the highest-yield topics in all of Class 12. NEET asks 1–2 questions almost every year (usually a conceptual trap on intensity vs. frequency, or a one-step numerical). JEE Main reliably has 1 question, often a graph-slope or two-wavelength numerical. JEE Advanced folds it into multi-part problems on photon flux and saturation current. CBSE Boards include a guaranteed derivation or a 2–3 mark numerical. If you master nothing else in this chapter, master this.',
      },
      {
        t: 'p',
        html: 'Imagine you’re standing on the platform of a Mumbai local station at the gated exit. To get out, you must touch your smart card to the turnstile, and the gate will only open if your card has at least the minimum fare loaded. Have less than that, and no amount of waving the card harder will let you through. Have more than the minimum, and the leftover balance stays in your pocket as you walk out briskly.',
      },
      {
        t: 'p',
        html: 'A metal surface holds its free electrons in much the same way. The electrons are “loosely” free to roam inside the metal, but they are still bound — there’s a kind of energy “exit fee” they must pay to escape the surface entirely. We call that minimum exit fee the <b>work function</b>, <i>φ</i><sub>0</sub>. The photoelectric effect is simply this: when light of the right “denomination” strikes a metal, electrons absorb energy from the light and, if they receive enough to cover the exit fee, they leap out of the surface. The escaped electrons are called <b>photoelectrons</b>, and the resulting current is the <b>photocurrent</b>.',
      },
      {
        t: 'p',
        html: 'Now here’s where physics gets genuinely strange, and where most students stumble. You’d expect, intuitively, that brighter light (more intense) should kick electrons out harder and faster — more energy in, more energy out, right? <b>That is not what happens.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a fast bowler in a cricket net. The speed of each ball he bowls is like the <b>frequency</b> (<i>ν</i>) of the light — it decides how hard a single ball hits. The number of balls he bowls per minute is like the <b>intensity</b> of the light — it decides how many deliveries land. Now suppose each stump can only be knocked over by a ball travelling above some minimum speed.<br>• Bowl more balls at the same speed (higher intensity, same frequency): you knock over more stumps, but each stump falls with the same impact. → <b>More photoelectrons (more current), but each has the same maximum energy.</b><br>• Bowl faster balls (higher frequency): each ball hits harder, so every stump it knocks gets flung with more energy. → <b>Each photoelectron escapes with more kinetic energy.</b><br>• Bowl balls below the minimum speed (frequency below threshold): no matter how many you bowl, not a single stump moves. → <b>No emission at all, however intense the light.</b>',
      },
      {
        t: 'p',
        html: 'This is the heart of the matter. The brightness of light controls how many electrons come out; the colour (frequency) of light controls how energetic each one is. The classical wave picture of light could not explain this at all — and that failure is precisely what forced Einstein to reinvent what light is.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> The clean photoelectric relations we’ll write down assume: (1) a single photon is absorbed by a single electron — a one-to-one transaction, not a pooling of many weak photons; (2) the electron emitted with maximum kinetic energy is one that escapes from the very surface without losing energy to internal collisions (most electrons come out slower); (3) the metal surface is clean and in vacuum (oxide layers or gas change <i>φ</i><sub>0</sub>); and (4) we ignore relativistic corrections, valid because photoelectron speeds are well below <i>c</i>. When light is extremely intense (laser-class), multi-photon absorption can occur and the simple threshold rule bends — but that is far beyond the exam scope.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Energy of a photon',
        main: '<i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i>',
        legend: [
          '<i>h</i> = Planck’s constant',
          '<i>ν</i> = the frequency of light',
          '<i>λ</i> = wavelength of the light',
          '<i>c</i> = the speed of light',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Momentum of a photon',
        main: '<i>p</i> = <i>hν</i>/<i>c</i> = <i>h</i>/<i>λ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Einstein’s photoelectric equation',
        main: '<i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub><br>⟺ ½<i>mv</i><sub>max</sub><sup>2</sup> = <i>hν</i> − <i>φ</i><sub>0</sub>',
        legend: [
          '<i>ν</i> = frequency of the light',
          '<i>v</i><sub>max</sub> = maximum speed of the electron',
          '<i>m</i> = mass of the electron',
          '<i>φ</i><sub>0</sub> = work function',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation watch (used in this chapter):</b> <i>ν</i> (Greek “nu”) is the <b>frequency</b> of light; <i>v</i> (italic vee) is the <b>speed</b> of the electron. They appear in the same equation above — do not confuse them. We write <i>v</i><sub>max</sub> for the maximum electron speed throughout.',
      },
      {
        t: 'formula',
        kicker: 'Work function and threshold',
        main: '<i>φ</i><sub>0</sub> = <i>hν</i><sub>0</sub><br><i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i><br><i>λ</i><sub>0</sub> = <i>hc</i>/<i>φ</i><sub>0</sub> = <i>c</i>/<i>ν</i><sub>0</sub>',
        legend: [
          '<i>ν</i><sub>0</sub> = threshold frequency (minimum frequency for emission)',
          '<i>λ</i><sub>0</sub> = threshold wavelength (maximum wavelength for emission)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Stopping potential <i>V</i><sub>0</sub>',
        main: '<i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub><br>⟹ <i>V</i><sub>0</sub> = (<i>h</i>/<i>e</i>)<i>ν</i> − <i>φ</i><sub>0</sub>/<i>e</i>',
        legend: ['<i>V</i><sub>0</sub> = the reverse voltage that just halts the most energetic photoelectron'],
        note: null,
      },
      {
        t: 'table',
        title: 'Quantity reference table',
        head: ['Symbol', 'Quantity', 'SI Unit', 'Dimensional Formula'],
        rows: [
          ['<i>h</i>', 'Planck’s constant', 'J·s', '[M L<sup>2</sup> T<sup>−1</sup>]'],
          ['<i>E</i>', 'Photon energy', 'J (or eV)', '[M L<sup>2</sup> T<sup>−2</sup>]'],
          ['<i>φ</i><sub>0</sub>', 'Work function', 'J (or eV)', '[M L<sup>2</sup> T<sup>−2</sup>]'],
          ['<i>ν</i>, <i>ν</i><sub>0</sub>', 'Frequency, threshold frequency', 'Hz', '[T<sup>−1</sup>]'],
          ['<i>p</i>', 'Photon momentum', 'kg·m·s<sup>−1</sup>', '[M L T<sup>−1</sup>]'],
          ['<i>V</i><sub>0</sub>', 'Stopping potential', 'V', '[M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]'],
        ],
      },
      {
        t: 'p',
        html: '<b>Constants worth memorising:</b> <i>h</i> = 6.63 × 10<sup>−34</sup> J·s, <i>hc</i> = 1240 eV·nm (the single most useful shortcut in this chapter), 1 eV = 1.6 × 10<sup>−19</sup> J, <i>m</i><sub>e</sub> = 9.1 × 10<sup>−31</sup> kg, <i>e</i> = 1.6 × 10<sup>−19</sup> C.',
      },

      { t: 'part', title: 'CBSE board derivation — Einstein’s photoelectric equation' },
      {
        t: 'p',
        html: '<b>The setup and the physical reasoning.</b> Einstein’s leap was to abandon the idea that light energy spreads smoothly like a wave and instead treat a beam of light as a stream of discrete energy packets — <b>photons</b> — each carrying energy <i>E</i> = <i>hν</i>. The photoelectric effect, he proposed, is a one-on-one collision: a single photon hands its entire energy to a single electron in the metal. There is no partial absorption and no accumulation of energy from many photons over time.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Account for the energy the electron receives.</b> When one photon of frequency <i>ν</i> is absorbed by one electron, that electron gains energy exactly<br><i>E</i><sub>absorbed</sub> = <i>hν</i>.<br><b>Why this step:</b> we are invoking the quantum hypothesis — energy arrives in indivisible lumps, not in a continuous trickle. This is the assumption that makes everything else follow.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Subtract the energy spent escaping the metal.</b> Before the electron can leave, it must spend at least <i>φ</i><sub>0</sub> (the work function) to break free of the surface’s binding forces. An electron sitting right at the surface spends exactly <i>φ</i><sub>0</sub>; an electron deeper inside must additionally lose energy to collisions on its way out, so it spends more (and electrons bound more tightly than the most loosely held ones need more than <i>φ</i><sub>0</sub> even at the surface). <b>Why this step:</b> energy is conserved. Whatever the photon delivers either pays the exit fee or becomes kinetic energy of the freed electron.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Write the energy-conservation balance.</b> For a surface electron (which loses the least, hence carries away the most kinetic energy):<br><i>hν</i> (energy in) = <i>φ</i><sub>0</sub> (exit fee) + <i>K</i><sub>max</sub> (max KE out)<br>Rearranging gives <b>Einstein’s photoelectric equation</b>:<br><i>K</i><sub>max</sub> = ½<i>mv</i><sub>max</sub><sup>2</sup> = <i>hν</i> − <i>φ</i><sub>0</sub><br>Electrons emitted from deeper layers come out with less than <i>K</i><sub>max</sub>, which is why the photocurrent contains electrons of a range of energies, with <i>K</i><sub>max</sub> as the ceiling.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Recover the threshold condition.</b> Emission requires <i>K</i><sub>max</sub> ≥ 0, i.e. <i>hν</i> ≥ <i>φ</i><sub>0</sub>. The minimum frequency for which emission just begins is found by setting <i>K</i><sub>max</sub> = 0:<br><i>hν</i><sub>0</sub> = <i>φ</i><sub>0</sub> ⟹ <i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i>.<br>Below <i>ν</i><sub>0</sub>, the photon simply cannot cover the exit fee, and <b>no electron escapes regardless of how intense or how prolonged the illumination is.</b> This is the single most important consequence — and exactly the observation classical physics could never explain.',
      },
      {
        t: 'p',
        html: '<b>How this one equation explains every experimental law:</b><br>• <b>Instantaneous emission:</b> a single photon transfers energy in one collision, so there is no waiting for energy to build up — emission begins within ∼ 10<sup>−9</sup> s.<br>• <b>Existence of a threshold frequency:</b> baked directly into <i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i>.<br>• <b><i>K</i><sub>max</sub> rises with frequency but is independent of intensity:</b> the equation contains <i>ν</i> but no intensity term, so brighter light cannot raise <i>K</i><sub>max</sub>.<br>• <b>Photocurrent rises with intensity:</b> more photons per second means more one-to-one absorptions, hence more emitted electrons per second.',
      },
      { t: 'fig', id: 'p12-11-fig-11.5' },
      {
        t: 'p',
        html: '<b>Step 5 — Millikan’s verification via stopping potential.</b> Substituting <i>K</i><sub>max</sub> = <i>eV</i><sub>0</sub>:<br><i>V</i><sub>0</sub> = (<i>h</i>/<i>e</i>)<i>ν</i> − <i>φ</i><sub>0</sub>/<i>e</i>.<br>A plot of <i>V</i><sub>0</sub> against <i>ν</i> is a <b>straight line</b> whose slope is <i>h</i>/<i>e</i> — the same for all metals — and whose x-intercept is <i>ν</i><sub>0</sub>, which differs by metal. Millikan measured this slope and obtained Planck’s constant independently, confirming Einstein’s theory; Einstein received the 1921 Nobel Prize for the law of the photoelectric effect.',
      },
      { t: 'fig', id: 'p12-11-fig-11.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A metal surface has a work function of 2.5 eV. Monochromatic light of wavelength 400 nm is incident on it. Find (a) the maximum kinetic energy of the emitted photoelectrons and (b) the stopping potential.',
        steps: [
          '<b>Given:</b> <i>φ</i><sub>0</sub> = 2.5 eV, <i>λ</i> = 400 nm.',
          '<b>Step 1 — Photon energy</b> (using the shortcut <i>hc</i> = 1240 eV·nm):<br><i>E</i> = <i>hc</i>/<i>λ</i> = (1240 eV·nm)/(400 nm) = 3.10 eV.',
          '<b>Step 2 — Maximum kinetic energy</b> (Einstein’s equation):<br><i>K</i><sub>max</sub> = <i>E</i> − <i>φ</i><sub>0</sub> = 3.10 − 2.50 = 0.60 eV = 0.60 × 1.6 × 10<sup>−19</sup> = 9.6 × 10<sup>−20</sup> J.',
          '<b>Step 3 — Stopping potential:</b> since <i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub>,<br><i>V</i><sub>0</sub> = <i>K</i><sub>max</sub>/<i>e</i> = (0.60 eV)/<i>e</i> = 0.60 V.',
          '<b>Note the neat trick:</b> when <i>K</i><sub>max</sub> is expressed in electron-volts, the stopping potential in volts is numerically identical.',
        ],
        ans: '<i>K</i><sub>max</sub> = 0.60 eV = 9.6 × 10<sup>−20</sup> J; <i>V</i><sub>0</sub> = 0.60 V.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'When light of frequency <i>ν</i> falls on a metal, the stopping potential is <i>V</i><sub>0</sub>. If the frequency is doubled to 2<i>ν</i> (intensity unchanged), the new stopping potential is — (1) <i>V</i><sub>0</sub> (2) 2<i>V</i><sub>0</sub> (3) more than 2<i>V</i><sub>0</sub> (4) less than 2<i>V</i><sub>0</sub>.',
        steps: [
          '<b>The trap:</b> the eye sees “double the frequency” and instinctively reaches for 2<i>V</i><sub>0</sub>. Resist it.',
          '<b>Fast reasoning (no full calculation needed):</b><br><i>eV</i><sub>0</sub> = <i>hν</i> − <i>φ</i><sub>0</sub> ⟹ <i>hν</i> = <i>eV</i><sub>0</sub> + <i>φ</i><sub>0</sub>.<br>At 2<i>ν</i>:<br><i>eV</i>′<sub>0</sub> = <i>h</i>(2<i>ν</i>) − <i>φ</i><sub>0</sub> = 2(<i>eV</i><sub>0</sub> + <i>φ</i><sub>0</sub>) − <i>φ</i><sub>0</sub> = 2<i>eV</i><sub>0</sub> + <i>φ</i><sub>0</sub>.<br><i>V</i>′<sub>0</sub> = 2<i>V</i><sub>0</sub> + <i>φ</i><sub>0</sub>/<i>e</i> > 2<i>V</i><sub>0</sub>.',
          'Because the constant exit fee <i>φ</i><sub>0</sub> is subtracted only once, doubling <i>ν</i> more than doubles the net energy left over as KE.',
          '<b>Pro speed-tip:</b> stopping potential is linear in <i>ν</i> but does <b>not</b> pass through the origin — it has a negative intercept −<i>φ</i><sub>0</sub>/<i>e</i> — so scaling <i>ν</i> never scales <i>V</i><sub>0</sub> by the same factor.',
        ],
        ans: '(3) more than 2<i>V</i><sub>0</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In a photoelectric experiment, light of wavelength 400 nm gives a stopping potential of 0.90 V, and light of wavelength 250 nm gives 2.76 V, on the same metal. From these two data points, determine (a) Planck’s constant and (b) the work function of the metal.',
        steps: [
          'This links two ideas: the stopping-potential equation written at two wavelengths, solved simultaneously (effectively finding the slope and intercept of the <i>V</i><sub>0</sub> vs. 1/<i>λ</i> line).',
          '<b>Step 1 — Write the equation at each wavelength</b> (<i>eV</i><sub>0</sub> = <i>hc</i>/<i>λ</i> − <i>φ</i><sub>0</sub>):<br><i>eV</i><sub>0,1</sub> = <i>hc</i>/<i>λ</i><sub>1</sub> − <i>φ</i><sub>0</sub><br><i>eV</i><sub>0,2</sub> = <i>hc</i>/<i>λ</i><sub>2</sub> − <i>φ</i><sub>0</sub>.',
          '<b>Step 2 — Subtract to eliminate <i>φ</i><sub>0</sub>:</b><br><i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>) = <i>hc</i>(1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>).<br>Compute the bracket: 1/(400 × 10<sup>−9</sup>) − 1/(250 × 10<sup>−9</sup>) = (2.5 − 4.0) × 10<sup>6</sup> = −1.5 × 10<sup>6</sup> m<sup>−1</sup>.<br>And <i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub> = 0.90 − 2.76 = −1.86 V.',
          '<b>Step 3 — Solve for <i>hc</i>, then <i>h</i>:</b><br><i>hc</i> = (<i>e</i>(<i>V</i><sub>0,1</sub> − <i>V</i><sub>0,2</sub>))/(1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>) = (1.6 × 10<sup>−19</sup>)(−1.86)/(−1.5 × 10<sup>6</sup>) = 1.98 × 10<sup>−25</sup> J·m.<br><i>h</i> = <i>hc</i>/<i>c</i> = (1.98 × 10<sup>−25</sup>)/(3 × 10<sup>8</sup>) = 6.6 × 10<sup>−34</sup> J·s.',
          '<b>Step 4 — Back-substitute for <i>φ</i><sub>0</sub></b> (use <i>λ</i><sub>1</sub>):<br><i>φ</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>1</sub> − <i>eV</i><sub>0,1</sub> = (1.98 × 10<sup>−25</sup>)/(400 × 10<sup>−9</sup>) − (1.6 × 10<sup>−19</sup>)(0.90).<br><i>φ</i><sub>0</sub> = 4.96 × 10<sup>−19</sup> − 1.44 × 10<sup>−19</sup> = 3.52 × 10<sup>−19</sup> J',
        ],
        ans: '<i>h</i> ≈ 6.6 × 10<sup>−34</sup> J·s, <i>φ</i><sub>0</sub> ≈ 2.2 eV.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A monochromatic source emits light of wavelength 620 nm at a power of 3.2 mW, all of which falls on a clean metal plate of work function 1.90 eV. Exactly 0.10% of the incident photons succeed in ejecting a photoelectron. Find (a) the saturation photocurrent, (b) the maximum speed of the emitted electrons, and (c) the stopping potential.',
        steps: [
          'This needs photon-counting, the photon–electron one-to-one rule, Einstein’s equation, and the KE-to-speed conversion — chained together.',
          '<b>Step 1 — Energy per photon:</b><br><i>E</i> = (1240 eV·nm)/(620 nm) = 2.00 eV = 2.00 × 1.6 × 10<sup>−19</sup> = 3.2 × 10<sup>−19</sup> J.',
          '<b>Step 2 — Photons striking the plate per second:</b><br><i>n</i> = <i>P</i>/<i>E</i> = (3.2 × 10<sup>−3</sup> W)/(3.2 × 10<sup>−19</sup> J) = 1.0 × 10<sup>16</sup> photons/s.',
          '<b>Step 3 — Electrons emitted per second</b> (only 0.10% are effective):<br><i>n</i><sub>e</sub> = 0.0010 × 1.0 × 10<sup>16</sup> = 1.0 × 10<sup>13</sup> electrons/s.',
          '<b>Step 4 — Saturation current</b> (each electron carries charge <i>e</i>):<br><i>i</i><sub>sat</sub> = <i>n</i><sub>e</sub><i>e</i> = (1.0 × 10<sup>13</sup>)(1.6 × 10<sup>−19</sup>) = 1.6 × 10<sup>−6</sup> A = 1.6 μA.',
          '<b>Step 5 — Maximum kinetic energy and speed:</b><br><i>K</i><sub>max</sub> = <i>E</i> − <i>φ</i><sub>0</sub> = 2.00 − 1.90 = 0.10 eV = 1.6 × 10<sup>−20</sup> J.<br><i>v</i><sub>max</sub> = √(2<i>K</i><sub>max</sub>/<i>m</i><sub>e</sub>) = √(2(1.6 × 10<sup>−20</sup>)/(9.1 × 10<sup>−31</sup>)) = √(3.52 × 10<sup>10</sup>) ≈ 1.9 × 10<sup>5</sup> m/s.',
          '<b>Step 6 — Stopping potential:</b> <i>V</i><sub>0</sub> = <i>K</i><sub>max</sub>/<i>e</i> = 0.10 V.',
          '<b>Reasoning check:</b> the saturation current depends on the photon <b>rate</b> (intensity), while <i>v</i><sub>max</sub> and <i>V</i><sub>0</sub> depend only on the photon <b>energy</b> (frequency) — the two halves of the problem are independent, exactly as the physics demands.',
        ],
        ans: '<i>i</i><sub>sat</sub> = 1.6 μA, <i>v</i><sub>max</sub> ≈ 1.9 × 10<sup>5</sup> m/s, <i>V</i><sub>0</sub> = 0.10 V.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A metal has a work function of 4.2 eV. Calculate its threshold wavelength.',
            a: '≈ 295 nm',
          },
          {
            q: '[NEET] Light of wavelength 500 nm is incident on a metal of work function 1.8 eV. Find the maximum kinetic energy of the photoelectrons in eV.',
            a: '0.68 eV',
          },
          {
            q: '[JEE Main] In a <i>V</i><sub>0</sub> vs. <i>ν</i> experiment, the straight-line graph has a slope of 4.14 × 10<sup>−15</sup> V·s. Determine Planck’s constant.',
            a: '6.62 × 10<sup>−34</sup> J·s',
          },
          {
            q: '[JEE Main] The threshold wavelength of a metal is 600 nm. If light of wavelength 400 nm is incident on it, find the maximum kinetic energy of the emitted electrons.',
            a: '≈ 1.03 eV',
          },
          {
            q: '[JEE Advanced] A 1.5 mW source of 400 nm light falls on a metal, and every incident photon ejects an electron. Calculate the maximum possible saturation current.',
            a: '≈ 0.48 mA',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a photoelectric experiment, if the intensity of incident light is increased while keeping the frequency fixed (above threshold), which quantity increases?',
        opts: [
          {
            label: 'Maximum kinetic energy of photoelectrons',
            nudge: '<b>(A)</b> and <b>(B)</b> tempt students who believe “more light = more energetic electrons” — but <i>K</i><sub>max</sub> and <i>V</i><sub>0</sub> depend only on frequency, not intensity.',
          },
          {
            label: 'Stopping potential',
            nudge: '<b>(A)</b> and <b>(B)</b> tempt students who believe “more light = more energetic electrons” — but <i>K</i><sub>max</sub> and <i>V</i><sub>0</sub> depend only on frequency, not intensity.',
          },
          { label: 'Saturation photocurrent', nudge: null },
          {
            label: 'Threshold frequency',
            nudge: '<b>(D)</b> is a pure conceptual error: threshold frequency is a property of the metal (<i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i>) and is completely independent of the incident light.',
          },
        ],
        correct: 2,
        solution:
          'Higher intensity means more photons per second, hence more one-to-one emissions per second, raising the saturation current.',
      },
      {
        t: 'mcq',
        q: 'The threshold frequency of a metal depends on:',
        opts: [
          { label: 'the intensity of incident light', nudge: '<b>(A)</b> repeats the classic intensity confusion.' },
          { label: 'the work function of the metal', nudge: null },
          {
            label: 'the frequency of incident light',
            nudge: '<b>(C)</b> muddles the incident frequency (which we choose) with the threshold frequency (fixed by the metal).',
          },
          {
            label: 'the time of exposure',
            nudge: '<b>(D)</b> appeals to the discredited classical idea that energy accumulates over time.',
          },
        ],
        correct: 1,
        solution: 'Directly from <i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i> — a smaller exit fee means a lower threshold.',
      },
      {
        t: 'mcq',
        q: 'The graph of maximum kinetic energy <i>K</i><sub>max</sub> of photoelectrons versus the frequency <i>ν</i> of incident light is:',
        opts: [
          {
            label: 'a straight line through the origin',
            nudge: '<b>(A)</b> forgets the −<i>φ</i><sub>0</sub> term — the line does not pass through the origin.',
          },
          { label: 'a straight line with positive slope and a negative intercept on the <i>K</i><sub>max</sub>-axis', nudge: null },
          { label: 'a curve concave upward', nudge: '<b>(C)</b> imagines a non-linear dependence that simply isn’t there.' },
          {
            label: 'a horizontal line',
            nudge: '<b>(D)</b> confuses this with the intensity-independence of <i>K</i><sub>max</sub> (it’s flat against intensity, not against frequency).',
          },
        ],
        correct: 1,
        solution:
          'From <i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub>: slope = <i>h</i> (positive), and at <i>ν</i> = 0 the intercept is −<i>φ</i><sub>0</sub> (negative). The line crosses the <i>ν</i>-axis at <i>ν</i><sub>0</sub>.',
      },
      {
        t: 'mcq',
        q: 'Light of energy 4.0 eV ejects photoelectrons from a metal of work function 2.0 eV. If the photon energy is now doubled to 8.0 eV, the maximum kinetic energy of the photoelectrons becomes:',
        opts: [
          {
            label: '4.0 eV',
            nudge: '<b>(A)</b> doubles the original <i>K</i><sub>max</sub> (2 × 2.0) — the same “doubling” fallacy as worked example 2, ignoring that <i>φ</i><sub>0</sub> is subtracted only once.',
          },
          { label: '6.0 eV', nudge: null },
          { label: '8.0 eV', nudge: '<b>(C)</b> forgets to subtract the work function at all.' },
          {
            label: '12.0 eV',
            nudge: '<b>(D)</b> is impossible: 12.0 eV is more than the 8.0 eV photon energy itself, and an electron can never leave with more energy than one photon gives it.',
          },
        ],
        correct: 1,
        solution:
          'Originally <i>K</i><sub>max</sub> = 4.0 − 2.0 = 2.0 eV. After doubling the photon energy: <i>K</i>′<sub>max</sub> = 8.0 − 2.0 = 6.0 eV.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Believing intensity affects electron energy.</b> This is the number-one error, designed into nearly every exam. Burn it in: <b>intensity → number of electrons (current); frequency → energy per electron (<i>K</i><sub>max</sub>, <i>V</i><sub>0</sub>).</b> Never cross the wires.',
          '<b>The “doubling” fallacy.</b> Doubling the frequency does not double <i>K</i><sub>max</sub> or <i>V</i><sub>0</sub>, because the work function offset is subtracted only once. Always go back to <i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub> and recompute — never scale the previous answer.',
          '<b>Confusing threshold quantities with incident quantities.</b> <i>ν</i><sub>0</sub> and <i>λ</i><sub>0</sub> belong to the metal; <i>ν</i> and <i>λ</i> belong to the light you shine. And remember the inversion: emission needs <i>ν</i> > <i>ν</i><sub>0</sub> but <i>λ</i> < <i>λ</i><sub>0</sub> (higher frequency = shorter wavelength).',
          '<b>Unit slips between eV and joules.</b> Mixing <i>φ</i><sub>0</sub> in eV with energies in joules wrecks the arithmetic. Pick one system. For speed, work entirely in eV using <i>hc</i> = 1240 eV·nm, and convert to joules only at the very end if a numerical answer in SI is required.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any “does it emit?” question, skip the full energy balance. Just compare wavelengths: if <i>λ</i><sub>incident</sub> < <i>λ</i><sub>0</sub>, emission happens; if <i>λ</i><sub>incident</sub> > <i>λ</i><sub>0</sub>, it doesn’t. One comparison, no calculator.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Einstein’s equation',
            note: '<i>K</i><sub>max</sub> = <i>hν</i> − <i>φ</i><sub>0</sub> = ½<i>mv</i><sub>max</sub><sup>2</sup>',
          },
          {
            f: 'Stopping potential',
            note: '<i>eV</i><sub>0</sub> = <i>K</i><sub>max</sub> ⇒ <i>V</i><sub>0</sub> = (<i>h</i>/<i>e</i>)<i>ν</i> − <i>φ</i><sub>0</sub>/<i>e</i> (straight line, slope <i>h</i>/<i>e</i>, intercept <i>ν</i><sub>0</sub> on the <i>ν</i>-axis)',
          },
          {
            f: 'Threshold',
            note: '<i>ν</i><sub>0</sub> = <i>φ</i><sub>0</sub>/<i>h</i>, <i>λ</i><sub>0</sub> = <i>hc</i>/<i>φ</i><sub>0</sub>',
          },
          { f: 'Photon', note: '<i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i>, <i>p</i> = <i>h</i>/<i>λ</i>' },
          { f: 'The golden rule', note: 'Intensity controls <b>current</b>; frequency controls <b>energy</b>.' },
          {
            f: 'Master shortcut',
            note: '<i>hc</i> = 1240 eV·nm, so <i>E</i>(eV) = 1240/<i>λ</i>(nm).',
          },
        ],
        aids: [
          'Mnemonic — “Brightness for Number, Colour for Energy”: brighter light = more electrons; bluer (higher-frequency) light = faster electrons.',
          'Emission test (fastest): <i>λ</i><sub>incident</sub> < <i>λ</i><sub>0</sub> ⇒ emission; otherwise none.',
        ],
      },
    ],
  },
];
