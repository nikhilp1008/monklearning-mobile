import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topics 01 and 02: pp. 73–87 of the Class 11 Chemistry Master
 * Reference, word for word. The chapter’s title page (p. 72) and contents
 * (top of p. 73) are not copied. Topic 01, Subatomic Particles & Early Atomic
 * Models (starts under the contents on p. 73, ends p. 80), and Topic 02,
 * Electromagnetic Radiation, Planck’s Quantum Theory & the Photoelectric
 * Effect (pp. 81–87), are each split at their Sections 1 to 8. Neither topic
 * prints a figure or any other drawing.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 73–80 ─────────────────────────
  {
    n: '01',
    title: 'Subatomic Particles & Early Atomic Models',
    kalam: 'Everything we know about subatomic particles was deduced from how atoms responded when poked with electricity, magnetism, and fast-moving projectiles.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A guaranteed scoring zone. CBSE Boards lift 1–2 mark definitions and “identify the species” questions straight from here. NEET asks 1 question almost every year — usually on specific charge (<i>e</i>/<i>m</i>), discovery credits, or iso-classification. JEE Main keeps it factual-plus-numerical (Millikan, closest approach), and JEE Advanced occasionally hides a Rutherford-scattering reasoning question inside a larger problem. Lock the discovery facts cold; they are free marks.',
      },
      {
        t: 'p',
        html: 'Imagine you are handed a sealed, shiny steel tiffin box and told there is something inside, but you may never open it. How would you figure out what is in there? You would shake it, weigh it, tilt it, maybe hold a magnet near it — you would infer the contents from how the box behaves. This is exactly the situation early scientists faced with the atom. Nobody has ever “seen” an electron the way you see a cricket ball. Everything we know about subatomic particles was deduced from how atoms responded when poked with electricity, magnetism, and fast-moving projectiles.',
      },
      {
        t: 'p',
        html: 'For a long time, the atom was thought to be the final, indivisible full-stop of matter — Dalton’s 1808 idea that an atom is the smallest particle that takes part in a chemical reaction. That picture cracked the moment electricity was passed through gases at very low pressure inside a glass tube. A glowing beam shot from the negative electrode (the cathode) to the positive one. These <b>cathode rays</b> travelled in straight lines, were deflected by electric and magnetic fields toward the positive plate, and — crucially — behaved identically no matter which gas filled the tube or what metal the electrodes were made of. That last fact was the giveaway: whatever these rays were made of, the same thing was present in every kind of matter. The atom was not indivisible after all. It had pieces.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the cathode ray tube as a railway platform announcement system. If you stand at New Delhi, Chennai, or Howrah and the same voice gives the same announcement, you conclude the voice is not local to any one station — it is piped in from a common source. Likewise, because the negative particle was the same regardless of the “station” (the gas or electrode), scientists concluded it was a universal building block of all atoms. That universal negative particle is the <b>electron</b>.',
      },
      {
        t: 'p',
        html: 'Once you accept a negative particle exists, neutrality forces the rest of the story. Atoms are electrically neutral, so there must be an equal amount of positive charge somewhere. Hunting for it (using rays moving in the opposite direction) revealed the <b>proton</b>. And atomic masses simply did not add up using protons and electrons alone, which eventually forced the existence of a heavy, neutral particle — the <b>neutron</b>.',
      },
      {
        t: 'p',
        html: 'The harder question was arrangement. Knowing a samosa contains potato, peas, and spice does not tell you how they are packed inside the pastry. Two competing “packings” were proposed. Thomson’s <b>plum-pudding model</b> smeared the positive charge uniformly through the whole atom like the sweetness dissolved through a rasgulla, with electrons studded in like seeds. Rutherford’s gold-foil experiment then shattered this: most of an atom is empty space, with nearly all the mass and all the positive charge crushed into a tiny central <b>nucleus</b>, electrons whirling far outside — the structure of our solar system in miniature.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions you must respect:</b><br>• Cathode-ray and positive-ray behaviour was studied at <b>very low gas pressure</b>; at ordinary pressure the beams are absorbed and never form.<br>• Rutherford’s model is a <b>classical mechanical</b> picture. It works for explaining scattering and the existence of a nucleus, but it cannot explain why atoms are stable or why they emit line spectra — limitations we will fix in later topics with the Bohr and quantum models. Do not over-extend it.<br>• Treating the nucleus as a stationary point charge (used in the closest-approach calculation) assumes the nucleus is <b>far heavier</b> than the incoming projectile, so its recoil is ignored.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Specific charge (charge-to-mass ratio)',
        main: '<i>e</i>/<i>m</i> = (charge of the particle)/(mass of the particle)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'For the electron, <i>e</i>/<i>m</i> = 1.758 × 10<sup>11</sup> C kg<sup>−1</sup> (Thomson). It is the same for any electron, independent of gas or electrode.<br>• SI unit: C kg<sup>−1</sup><br>• Dimensional formula: charge = [A T], so <i>e</i>/<i>m</i> = [M<sup>−1</sup> T A]. (This is the one quantity in this topic where the dimensional formula genuinely helps — it tells you the ratio scales down with mass, which is why the electron’s value is enormous and a proton’s is tiny.)',
      },
      {
        t: 'formula',
        kicker: 'Millikan’s quantisation of charge',
        main: 'every measured droplet charge is an integer multiple of one elementary charge:<br><i>q</i> = <i>ne</i>, <i>n</i> = 1, 2, 3, …<br><i>e</i> = 1.602 × 10<sup>−19</sup> C',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mass of the electron (combining Millikan’s <i>e</i> with Thomson’s <i>e</i>/<i>m</i>)',
        main: '<i>m</i><sub>e</sub> = <i>e</i>/(<i>e</i>/<i>m</i>) = (1.602 × 10<sup>−19</sup>)/(1.758 × 10<sup>11</sup>) = 9.11 × 10<sup>−31</sup> kg ≈ 1/1837 of an H atom',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mass number and atomic number',
        main: '<i>A</i> = <i>Z</i> + <i>N</i> ⟹ <i>N</i> = <i>A</i> − <i>Z</i>',
        legend: ['<i>Z</i> = number of protons (atomic number)', '<i>N</i> = number of neutrons', '<i>A</i> = mass number'],
        note: 'A species is written <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i>.',
      },
      {
        t: 'p',
        html: '<b>Number of electrons</b> in an ion <i>X</i><sup><i>q</i>±</sup>: start from <i>Z</i>, then subtract for a cation / add for an anion.',
      },
      {
        t: 'formula',
        kicker: 'Distance of closest approach (head-on, projectile of charge <i>z</i><sub>1</sub><i>e</i> at a nucleus of charge <i>Ze</i>)',
        main: '<i>r</i><sub>0</sub> = (1/(4πε<sub>0</sub>))(<i>z</i><sub>1</sub><i>Ze</i><sup>2</sup>/(KE))',
        legend: [],
        note: 'For an <i>α</i>-particle, <i>z</i><sub>1</sub> = 2.',
      },
      {
        t: 'formula',
        kicker: 'Average atomic mass from isotopic abundances',
        main: '<i>Ā</i> = (∑ <i>a</i><sub><i>i</i></sub><i>A</i><sub><i>i</i></sub>)/100',
        legend: ['<i>a</i><sub><i>i</i></sub> = the percentage abundance', '<i>A</i><sub><i>i</i></sub> = the isotopic mass'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>The iso-family (memorise the “same/different” pattern):</b><br>• <b>Isotopes</b> — same <i>Z</i>, different <i>A</i> (same element). Example: <sup>1</sup><sub>1</sub>H, <sup>2</sup><sub>1</sub>H, <sup>3</sup><sub>1</sub>H.<br>• <b>Isobars</b> — same <i>A</i>, different <i>Z</i> (different elements). Example: <sup>40</sup><sub>18</sub>Ar, <sup>40</sup><sub>19</sub>K, <sup>40</sup><sub>20</sub>Ca.<br>• <b>Isotones</b> — same <i>N</i>, different <i>Z</i> and <i>A</i>.<br>• <b>Isoelectronic</b> — same number of electrons (e.g. Na<sup>+</sup> and Mg<sup>2+</sup> both have 10).',
      },
      {
        t: 'p',
        html: 'Standard particle data: electron, charge −1.602 × 10<sup>−19</sup> C, mass 9.11 × 10<sup>−31</sup> kg; proton, charge +1.602 × 10<sup>−19</sup> C, mass 1.672 × 10<sup>−27</sup> kg ≈ 1.0073 u; neutron, charge 0, mass 1.675 × 10<sup>−27</sup> kg ≈ 1.0087 u.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This topic has one true derivation (closest approach) and several reasoning chains that examiners love. Take them in order.',
      },
      {
        t: 'p',
        html: '<b>3.1 How Thomson got <i>e</i>/<i>m</i>, conceptually.</b> Inside the tube, the cathode-ray beam is sent through a region with both an electric field (which pushes the beam) and a magnetic field (which pushes it the other way). Thomson tuned the two fields until the beam went perfectly straight — meaning the electric and magnetic forces exactly cancelled. From that balance he extracted the speed of the particles, and from the leftover deflection he extracted <i>e</i>/<i>m</i>. <b>Why this matters:</b> he could only ever get the ratio, never <i>e</i> and <i>m</i> separately. The geometry gives you a single number, and one equation cannot solve for two unknowns. This is the logical reason a second, independent experiment was unavoidable.',
      },
      {
        t: 'p',
        html: '<b>3.2 How Millikan closed the gap.</b> Millikan watched tiny charged oil droplets float between charged plates, balancing gravity against the electric pull. The charge on every droplet always came out as a whole-number multiple of 1.602 × 10<sup>−19</sup> C — never a fraction of it. <b>Why this matters:</b> the smallest common unit is the charge on one electron. Feed this <i>e</i> back into Thomson’s <i>e</i>/<i>m</i> and the electron’s mass falls out. Two limited experiments, combined, give you the full answer — a pattern you will reuse in JEE numericals.',
      },
      {
        t: 'p',
        html: '<b>3.3 Why Rutherford abandoned plum-pudding.</b> Rutherford fired <i>α</i>-particles (fast, heavy, positive) at a wafer-thin gold foil and recorded where they landed. Observations and the logic they force:<br>1. Most <i>α</i>-particles passed straight through. → The atom is mostly <b>empty space</b>. (If the positive charge were smeared everywhere as Thomson said, every particle would feel a small push and bend slightly — none would pass cleanly.)<br>2. A small fraction were deflected through large angles. → They came near a concentrated lump of positive charge.<br>3. A very few (~1 in 20000) bounced almost straight back. → They scored a near head-on hit on something tiny, dense, massive, and positively charged: the <b>nucleus</b>.',
      },
      {
        t: 'p',
        html: 'He concluded the positive charge and essentially all the mass sit in a nucleus of diameter ∼ 10<sup>−13</sup> to 10<sup>−12</sup> cm, while the atom itself is ∼ 10<sup>−8</sup> cm across — a 4–5-order-of-magnitude gulf. If the nucleus were a cricket ball at the pitch, the atom’s edge would be kilometres away.',
      },
      {
        t: 'p',
        html: '<b>3.4 Derivation — distance of closest approach.</b> Consider a single <i>α</i>-particle of charge +2<i>e</i> fired head-on at a stationary nucleus of charge +<i>Ze</i>. As it approaches, the Coulomb repulsion does negative work on it, converting kinetic energy into electrostatic potential energy. At the closest point the particle is momentarily at rest (all KE spent). Setting initial kinetic energy equal to the potential energy at separation <i>r</i><sub>0</sub>:<br>KE = (1/(4πε<sub>0</sub>))((2<i>e</i>)(<i>Ze</i>)/<i>r</i><sub>0</sub>)<br>Solving for <i>r</i><sub>0</sub>:<br><i>r</i><sub>0</sub> = (1/(4πε<sub>0</sub>))(2<i>Ze</i><sup>2</sup>/KE)',
      },
      {
        t: 'p',
        html: '<b>Physical reading of each step:</b> we ignore the nucleus’s recoil because it is thousands of times heavier (assumption 3 from Concept intuition); we use energy conservation rather than force-and-acceleration because we only care about the turning point, not the full trajectory; and the answer scales inversely with KE — fire the <i>α</i> harder and it punches closer in.',
      },
      {
        t: 'p',
        html: '<b>3.5 Why Rutherford’s model still failed.</b> A revolving electron is an accelerating charge. Classical electromagnetism insists an accelerating charge radiates energy continuously. Losing energy, the electron would spiral inward and crash into the nucleus in a fraction of a second — atoms would be unstable, which they manifestly are not. The model also predicts a continuous smear of emitted frequencies, contradicting the sharp line spectra of real atoms. These two failures are the doorway to the Bohr model in Topic 03.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A cation <i>M</i><sup>3+</sup> is found to contain 23 electrons and 30 neutrons. Identify the element and write its complete symbol.',
        steps: [
          '<b>Given:</b> electrons in <i>M</i><sup>3+</sup> = 23; neutrons <i>N</i> = 30; charge = +3.',
          '<b>Step 1 — find protons.</b> The ion lost 3 electrons relative to the neutral atom, so the neutral atom had 23 + 3 = 26 electrons, hence 26 protons.<br><i>Z</i> = 26',
          '<b>Step 2 — identify the element.</b> <i>Z</i> = 26 is <b>iron, Fe</b>.',
          '<b>Step 3 — find the mass number.</b><br><i>A</i> = <i>Z</i> + <i>N</i> = 26 + 30 = 56',
          '<b>Presentation tip for the boards:</b> always write the charge adjustment line explicitly (“lost 3 electrons → 26 protons”). Examiners award a step mark for it even if the final symbol is correct.',
        ],
        ans: 'The species is <sup>56</sup><sub>26</sub>Fe<sup>3+</sup>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Among the following, which has the <b>highest</b> specific charge <i>e</i>/<i>m</i>: a proton <sup>1</sup><sub>1</sub>H<sup>+</sup>, a deuteron <sup>2</sup><sub>1</sub>H<sup>+</sup>, an <i>α</i>-particle <sup>4</sup><sub>2</sub>He<sup>2+</sup>, or an electron?',
        steps: [
          '<b>The trap:</b> students start computing <i>e</i>/<i>m</i> for each ion and forget the electron is even an option.',
          '<b>Fast reasoning:</b> <i>e</i>/<i>m</i> is charge ÷ mass. For the ions (in units of elementary charge and amu): proton = 1/1 = 1, deuteron = 1/2, <i>α</i> = 2/4 = 1/2. So the proton beats the other ions. But the <b>electron</b> has roughly the same unit charge with a mass about 1837 times smaller than a proton — its <i>e</i>/<i>m</i> is larger by that same factor.',
          'The 5-second version: smallest mass with a unit charge wins, and nothing here is lighter than an electron.',
        ],
        ans: 'The <b>electron</b> has the highest <i>e</i>/<i>m</i> by a huge margin.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (two concepts: Millikan quantisation + Thomson ratio)',
        q: 'In a Millikan-style experiment, four oil droplets carry charges 4.8 × 10<sup>−19</sup> C, 6.4 × 10<sup>−19</sup> C, 8.0 × 10<sup>−19</sup> C, and 3.2 × 10<sup>−19</sup> C. (a) Determine the elementary charge. (b) Given the electron’s <i>e</i>/<i>m</i> = 1.76 × 10<sup>11</sup> C kg<sup>−1</sup>, find its mass.',
        steps: [
          '<b>Step 1 — elementary charge as the highest common factor.</b> Divide each by 1.6 × 10<sup>−19</sup>: the charges are 3<i>e</i>, 4<i>e</i>, 5<i>e</i>, 2<i>e</i>. The largest common unit is<br><i>e</i> = 1.6 × 10<sup>−19</sup> C',
          '<b>Step 2 — bring in the second concept.</b> Thomson’s experiment gives only the ratio, so<br><i>m</i><sub>e</sub> = <i>e</i>/(<i>e</i>/<i>m</i>) = (1.6 × 10<sup>−19</sup>)/(1.76 × 10<sup>11</sup>)',
          'Notice neither experiment alone could deliver the mass — this “combine two limited measurements” structure is the whole point of the question.',
        ],
        ans: '(a) <i>e</i> = 1.6 × 10<sup>−19</sup> C; (b) <i>m</i><sub>e</sub> ≈ 9.1 × 10<sup>−31</sup> kg',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An <i>α</i>-particle of kinetic energy 5.0 MeV is fired head-on at a stationary gold nucleus (<i>Z</i> = 79). (a) Find the distance of closest approach. (b) Given that a gold nucleus has a radius of about 7 fm, comment on whether the <i>α</i>-particle physically touches the nucleus. Take 1/(4πε<sub>0</sub>) = 8.99 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup> and <i>e</i> = 1.6 × 10<sup>−19</sup> C.',
        steps: [
          '<b>Step 1 — convert the energy to joules.</b><br>KE = 5.0 × 10<sup>6</sup> × 1.6 × 10<sup>−19</sup> = 8.0 × 10<sup>−13</sup> J',
          '<b>Step 2 — apply the closest-approach formula with <i>z</i><sub>1</sub> = 2.</b><br><i>r</i><sub>0</sub> = (1/(4πε<sub>0</sub>))(2<i>Ze</i><sup>2</sup>/KE) = (8.99 × 10<sup>9</sup>)(2)(79)(1.6 × 10<sup>−19</sup>)<sup>2</sup>/(8.0 × 10<sup>−13</sup>)',
          '<b>Step 3 — evaluate.</b> Numerator: (8.99 × 10<sup>9</sup>)(158)(2.56 × 10<sup>−38</sup>) = 3.64 × 10<sup>−26</sup>. Then<br><i>r</i><sub>0</sub> = (3.64 × 10<sup>−26</sup>)/(8.0 × 10<sup>−13</sup>)',
          '<b>Step 4 — interpret.</b> The closest approach (45 fm) is far larger than the gold nucleus radius (7 fm). The <i>α</i>-particle is turned back by pure Coulomb repulsion well before it can reach the nuclear surface — confirming that, at 5 MeV, the scattering is purely electrostatic and never probes the nuclear force. (This is precisely why Rutherford could treat the nucleus as a point charge.)',
        ],
        ans: '<i>r</i><sub>0</sub> ≈ 4.5 × 10<sup>−14</sup> m = 45 fm',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Classify each pair as isotopes, isobars, or isotones: (i) <sup>14</sup><sub>6</sub>C and <sup>14</sup><sub>7</sub>N; (ii) <sup>16</sup><sub>8</sub>O and <sup>18</sup><sub>8</sub>O; (iii) <sup>39</sup><sub>19</sub>K and <sup>40</sup><sub>20</sub>Ca.',
            a: '(i) isobars, (ii) isotopes, (iii) isotones.',
          },
          {
            q: '[NEET] Arrange in increasing order of specific charge: <sup>4</sup><sub>2</sub>He<sup>2+</sup>, <sup>1</sup><sub>1</sub>H<sup>+</sup>, <sup>12</sup><sub>6</sub>C<sup>6+</sup>, and a neutron.',
            a: 'neutron < <sup>4</sup><sub>2</sub>He<sup>2+</sup> = <sup>12</sup><sub>6</sub>C<sup>6+</sup> < <sup>1</sup><sub>1</sub>H<sup>+</sup> (neutron = 0; He<sup>2+</sup> and C<sup>6+</sup> both = 1/2 per amu; H<sup>+</sup> = 1).',
          },
          {
            q: '[JEE Main] Chlorine occurs as two isotopes of masses 34.97 u (abundance 75.8%) and 36.97 u (abundance 24.2%). Calculate its average atomic mass.',
            a: '35.45 u.',
          },
          {
            q: '[JEE Main] In a charge-measurement experiment, three droplets carry 9.6 × 10<sup>−19</sup> C, 6.4 × 10<sup>−19</sup> C, and 1.12 × 10<sup>−18</sup> C. Find the elementary charge and the number of excess electrons on the heaviest-charged droplet.',
            a: '<i>e</i> = 1.6 × 10<sup>−19</sup> C; heaviest droplet carries 7 excess electrons.',
          },
          {
            q: '[JEE Advanced] Two projectiles — a proton and an <i>α</i>-particle — are fired head-on at the same nucleus with the same kinetic energy. Find the ratio of their distances of closest approach, <i>r</i><sub>0</sub>(proton) ∶ <i>r</i><sub>0</sub>(<i>α</i>).',
            a: '<i>r</i><sub>0</sub> ∝ <i>z</i><sub>1</sub> at fixed KE, so the ratio is 1 ∶ 2.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The value of <i>e</i>/<i>m</i> for the particles forming cathode rays is found to be:',
        opts: [
          {
            label: 'dependent on the gas in the tube',
            nudge: '<b>(a)</b> and <b>(b)</b> describe the behaviour of <b>positive (anode) rays</b>, whose <i>e</i>/<i>m</i> does depend on the gas; a student who mixes up the two ray types falls here.',
          },
          {
            label: 'dependent on the cathode material',
            nudge: '<b>(a)</b> and <b>(b)</b> describe the behaviour of <b>positive (anode) rays</b>, whose <i>e</i>/<i>m</i> does depend on the gas; a student who mixes up the two ray types falls here.',
          },
          { label: 'the same for all gases and electrodes', nudge: null },
          { label: 'zero', nudge: '<b>(d)</b> is the property of the neutron’s <i>e</i>/<i>m</i>, not the electron’s.' },
        ],
        correct: 2,
        solution: 'Thomson’s defining result was that <i>e</i>/<i>m</i> stayed constant whatever the gas or electrode — proving the electron is a universal constituent of matter.',
      },
      {
        t: 'mcq',
        q: 'A species <i>X</i> has 17 protons, 18 neutrons, and 18 electrons. The species is:',
        opts: [
          {
            label: 'a neutral atom of mass number 35',
            nudge: '<b>(a)</b> ignores the proton–electron mismatch (the classic “forgot to compare <i>p</i> and <i>e</i>” error).',
          },
          { label: 'an anion <sup>35</sup><sub>17</sub><i>X</i><sup>−</sup>', nudge: null },
          {
            label: 'a cation <sup>35</sup><sub>17</sub><i>X</i><sup>+</sup>',
            nudge: '<b>(c)</b> gets the sign of the charge backwards — extra electrons mean negative, not positive.',
          },
          {
            label: 'an isotope of argon',
            nudge: '<b>(d)</b> is false: its atomic number is 17 (chlorine), so it is isoelectronic with argon (18 electrons), not an isotope of it.',
          },
        ],
        correct: 1,
        solution: 'With 17 protons but 18 electrons, there is one extra negative charge → a −1 anion; <i>A</i> = 17 + 18 = 35, so <sup>35</sup><sub>17</sub>Cl<sup>−</sup>.',
      },
      {
        t: 'mcq',
        q: 'In Rutherford’s <i>α</i>-scattering experiment, the observation that a very small number of <i>α</i>-particles bounced almost straight back primarily established that:',
        opts: [
          {
            label: 'the atom is electrically neutral',
            nudge: '<b>(a)</b> and <b>(b)</b> are features of the model Rutherford built afterward, not direct conclusions from the rebound itself.',
          },
          {
            label: 'electrons revolve around the nucleus',
            nudge: '<b>(a)</b> and <b>(b)</b> are features of the model Rutherford built afterward, not direct conclusions from the rebound itself.',
          },
          { label: 'the positive charge and mass are concentrated in a tiny nucleus', nudge: null },
          {
            label: 'the atom is mostly empty space',
            nudge: '<b>(d)</b> is established by the opposite observation (most particles passing straight through), so it is the most seductive trap; read which observation the question names.',
          },
        ],
        correct: 2,
        solution: 'A near head-on rebound requires collision with something tiny, dense, and like-charged — the nucleus.',
      },
      {
        t: 'mcq',
        q: 'Which statement is <b>incorrect</b>?',
        opts: [
          {
            label: 'The neutron was discovered after the structure of the atom was already broadly understood.',
            nudge: '<b>(a)</b> is true (the neutron was the last of the three, confirmed in 1932).',
          },
          {
            label: 'The proton’s <i>e</i>/<i>m</i> is smaller than the electron’s <i>e</i>/<i>m</i>.',
            nudge: '<b>(b)</b> is true — the proton is ~1837× heavier, so its <i>e</i>/<i>m</i> is far smaller.',
          },
          {
            label: 'An electron and a proton carry charges that are equal in magnitude and opposite in sign.',
            nudge: '<b>(c)</b> is the textbook definition and is correct.',
          },
          { label: 'A proton and a neutron have exactly equal masses.', nudge: null },
        ],
        correct: 3,
        solution: 'The neutron (1.675 × 10<sup>−27</sup> kg) is slightly heavier than the proton (1.672 × 10<sup>−27</sup> kg) — “nearly equal” is not “exactly equal,” and exam-setters punish the word exactly.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1 — scrambling the iso-family.</b> Students blur isotopes, isobars, and isotones under exam pressure. Anchor each to the quantity held constant: iso<b>top</b>es → same proto<b>n</b>s (<i>Z</i>); iso<b>bar</b>s → same mass (think bar = bar of weight, <i>A</i>); iso<b>ton</b>es → same neutro<b>n</b>s (<i>N</i>).',
          '<b>Pitfall 2 — forgetting to adjust electrons for charge.</b> For ions, students reflexively set electrons = <i>Z</i>. A cation has fewer electrons than protons, an anion has more. Always write the adjustment as its own line.',
          '<b>Pitfall 3 — swapping electron and proton ray properties.</b> Cathode-ray <i>e</i>/<i>m</i> is gas-independent; positive-ray <i>e</i>/<i>m</i> depends on the gas (maximum for hydrogen). Don’t transplant a property of one onto the other.',
          '<b>Pitfall 4 — matching the wrong observation to the wrong conclusion.</b> “Mostly empty space” comes from particles passing through; “tiny dense nucleus” comes from particles bouncing back. MCQs deliberately offer both as options.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any specific-charge comparison, never compute full values. Just write each as (charge in units of <i>e</i>) ÷ (mass in u) and compare fractions mentally. And remember the electron, if listed, almost always wins — its mass is ~1837× smaller than a proton’s.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Electron',
            note: 'charge −1.602 × 10<sup>−19</sup> C, mass 9.11 × 10<sup>−31</sup> kg, <i>e</i>/<i>m</i> = 1.758 × 10<sup>11</sup> C kg<sup>−1</sup> (constant for all matter). Named by Stoney; <i>e</i>/<i>m</i> by Thomson; charge by Millikan.',
          },
          {
            f: 'Proton',
            note: 'charge +1.602 × 10<sup>−19</sup> C, mass 1.672 × 10<sup>−27</sup> kg (≈ 1.0073 u). From positive (anode) rays; named by Rutherford.',
          },
          {
            f: 'Neutron',
            note: 'charge 0, mass 1.675 × 10<sup>−27</sup> kg (≈ 1.0087 u), slightly heavier than the proton. Discovered by Chadwick (1932), Be + <i>α</i> → C + <i>n</i>.',
          },
          {
            f: 'Core relation',
            note: '<i>A</i> = <i>Z</i> + <i>N</i>; species written <sup><i>A</i></sup><sub><i>Z</i></sub><i>X</i>; for ions, adjust electrons for the charge.',
          },
          {
            f: 'Models',
            note: 'Thomson = uniform positive sphere with embedded electrons (fails <i>α</i>-scattering). Rutherford = tiny dense nucleus + mostly empty space; fails on <b>stability</b> and <b>line spectra</b>.',
          },
          {
            f: 'Closest approach',
            note: '<i>r</i><sub>0</sub> = (1/(4πε<sub>0</sub>))(<i>z</i><sub>1</sub><i>Ze</i><sup>2</sup>/KE) — scales as <i>z</i><sub>1</sub>, inversely as KE.',
          },
        ],
        aids: [
          '“toP → Proton (<i>Z</i>) / Bar → mAss (<i>A</i>) / toN → Neutron (<i>N</i>)” for the iso-family.',
          '“Straight through = empty; bounced back = nucleus” for Rutherford.',
          '“Stoney named it, Thomson weighed the ratio, Millikan caught the charge” for the electron’s discovery chain.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 81–87 ─────────────────────────
  {
    n: '02',
    title: 'Electromagnetic Radiation, Planck’s Quantum Theory & the Photoelectric Effect',
    kalam: 'To fix the atom, scientists first had to understand the light atoms give off.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield topic across all exams. CBSE Boards ask <i>c</i> = <i>νλ</i>, photon-energy, and short photoelectric numericals (2–3 marks). NEET asks 1–2 questions yearly, almost always on the photoelectric effect or photon energy. JEE Main treats it as a numerical mine (photon counting, stopping potential, threshold), and JEE Advanced layers two-wavelength photoelectric data with de Broglie or energy conservation. The single equation to own cold: <i>hν</i> = <i>W</i><sub>0</sub> + KE<sub>max</sub>.',
      },
      {
        t: 'p',
        html: 'We left Topic 01 with Rutherford’s atom in crisis: he had found the nucleus, but his model could neither explain why atoms are stable nor why they emit those puzzling sharp coloured lines instead of a smooth rainbow. To fix the atom, scientists first had to understand the light atoms give off. And light, it turned out, was hiding a double life.',
      },
      {
        t: 'p',
        html: 'For most of the 1800s, light was understood as a <b>wave</b> — and a very successful picture it was. James Clerk Maxwell showed that light is <b>electromagnetic radiation</b>: oscillating electric and magnetic fields marching through space together, perpendicular to each other and to the direction of travel, needing no medium (which is why sunlight crosses the vacuum of space). Like any wave, it is described by its <b>wavelength</b> <i>λ</i> (crest-to-crest distance), its <b>frequency</b> <i>ν</i> (oscillations per second), and its speed, which in vacuum is the universal constant <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>. These are tied by the simplest relation in the chapter: <i>c</i> = <i>νλ</i>. Visible light is just a thin slice of a vast <b>electromagnetic spectrum</b> running from radio waves (long <i>λ</i>, low energy) through microwaves, infrared, visible, ultraviolet, X-rays, up to gamma rays (tiny <i>λ</i>, huge energy). The wave model beautifully explained interference and diffraction — but it walked into two brick walls.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine paying for chai at a railway stall. You can hand over ₹10, ₹20, ₹30 — whole coins — but never ₹10.473. Money comes in indivisible units. Max Planck discovered that energy behaves the same way. Studying the glow of hot objects (black-body radiation), he found that the wave theory predicted hot bodies should blast out infinite ultraviolet energy — the absurd “ultraviolet catastrophe.” Planck’s radical fix (1900): energy is not emitted or absorbed continuously but in discrete packets, or <b>quanta</b>, each carrying energy<br><i>E</i> = <i>hν</i><br>where <i>h</i> is Planck’s constant. Energy comes in coins of size <i>hν</i>, and you can only exchange whole coins. This was the birth of quantum theory.',
      },
      {
        t: 'p',
        html: 'Einstein (1905) pushed the idea further and harder: light itself is not just quantised in exchange — it actually travels as a stream of energy particles, later named <b>photons</b>, each one carrying energy <i>E</i> = <i>hν</i>. This second, particle face of light is what cracks the <b>photoelectric effect</b>: shine light on a metal and electrons fly off. The wave model made three predictions that all turned out wrong — it said any colour of light should work if bright enough, that brighter light should give faster electrons, and that dim light should take time to “build up” enough energy. Experiment said otherwise: below a certain <b>threshold frequency</b> no electrons ever come out no matter how intense the light, the electrons’ speed depends on the frequency (colour) not the brightness, and emission is instantaneous. Einstein’s one-photon-one-electron picture explains all three at a stroke: each photon delivers its whole packet <i>hν</i> to one electron; part pays the “exit fee” of the metal (the <b>work function</b> <i>W</i><sub>0</sub>) and the rest becomes the electron’s kinetic energy.',
      },
      {
        t: 'p',
        html: 'Finally, the bridge back to the atom: when atoms are energised, they emit light not as a continuous band but as a set of sharp <b>spectral lines</b> at fixed wavelengths — a barcode unique to each element. A line spectrum can only mean one thing: the energy inside an atom is also quantised, available only at certain fixed levels. That single realisation is the launch-pad for Bohr’s model in Topic 03.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions you must respect:</b><br>• The wave model (<i>c</i> = <i>νλ</i>, interference, diffraction) is correct for propagation but fails for exchange of energy with matter at small scales — there you need photons.<br>• Photoelectric emission requires <i>ν</i> ≥ <i>ν</i><sub>0</sub> (the threshold). Below it, intensity is irrelevant — a brighter “wrong colour” still ejects nothing.<br>• A photon has zero rest mass but carries momentum <i>p</i> = <i>h</i>/<i>λ</i>; never assign it a rest mass.<br>• <i>E</i> = <i>hν</i> applies per single quantum; for <i>N</i> photons the energy is <i>Nhν</i>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Wave relations',
        main: '<i>c</i> = <i>νλ</i><br><i>ν̄</i> = 1/<i>λ</i>',
        legend: [
          '<i>c</i> = speed of light = 3 × 10<sup>8</sup> m s<sup>−1</sup> (vacuum)',
          '<i>ν</i> = frequency, SI unit hertz (Hz = s<sup>−1</sup>), dimensional formula [T<sup>−1</sup>]',
          '<i>λ</i> = wavelength, unit m, [L]',
          '<i>ν̄</i> = <b>wavenumber</b> (number of waves per unit length), unit m<sup>−1</sup> (often cm<sup>−1</sup>), [L<sup>−1</sup>]',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Planck’s quantum theory',
        main: '<i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i> = <i>hcν̄</i><br><i>E</i><sub>total</sub> = <i>nhν</i> (<i>n</i> = number of quanta)<br>Handy shortcut: <i>E</i>(eV) = 1240/<i>λ</i>(nm)',
        legend: ['<i>h</i> = Planck’s constant = 6.626 × 10<sup>−34</sup> J s, dimensional formula [M L<sup>2</sup> T<sup>−1</sup>] (same as angular momentum/action)'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Photon momentum and “mass”',
        main: '<i>p</i> = <i>h</i>/<i>λ</i> = <i>E</i>/<i>c</i><br><i>m</i><sub>photon (relativistic)</sub> = <i>E</i>/<i>c</i><sup>2</sup> = <i>h</i>/(<i>λc</i>) (rest mass = 0)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Photoelectric effect (Einstein’s equation)',
        main: '<i>hν</i> = <i>W</i><sub>0</sub> + KE<sub>max</sub> ⟹ KE<sub>max</sub> = <i>hν</i> − <i>W</i><sub>0</sub> = <i>h</i>(<i>ν</i> − <i>ν</i><sub>0</sub>)',
        legend: [
          '<i>W</i><sub>0</sub> = <b>work function</b> = minimum energy to free an electron from the metal surface = <i>hν</i><sub>0</sub>',
          '<i>ν</i><sub>0</sub> = <b>threshold frequency</b>',
          '<i>λ</i><sub>0</sub> = threshold wavelength, <i>c</i>/<i>ν</i><sub>0</sub> = <i>hc</i>/<i>W</i><sub>0</sub>',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Stopping potential <i>V</i><sub>0</sub>',
        main: 'the reverse voltage that just halts the fastest electron:<br>KE<sub>max</sub> = <i>eV</i><sub>0</sub> ⟹ <i>eV</i><sub>0</sub> = <i>h</i>(<i>ν</i> − <i>ν</i><sub>0</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Photon counting (power problems)',
        main: '<i>N</i> = (Power × time)/(energy per photon) = <i>Pt</i>/(<i>hν</i>) = <i>Ptλ</i>/(<i>hc</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Definitions to know:</b> quantum/photon — an indivisible packet of radiation energy <i>hν</i>; work function — the metal’s “exit fee” for an electron; threshold frequency — the minimum frequency that causes emission; stopping potential — the retarding voltage that reduces the photocurrent to zero.',
      },
      {
        t: 'p',
        html: '<b>Types of spectra (qualitative):</b> a continuous spectrum is an unbroken band (e.g. white light through a prism); an emission line spectrum is bright lines on a dark background (excited atoms emitting); an absorption line spectrum is dark lines on a bright background (cool atoms absorbing specific wavelengths from white light). Line spectra are the fingerprint evidence that atomic energy is quantised.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single derivation here; the skill is choosing the right relation and reasoning cleanly about the photoelectric effect and spectra.',
      },
      {
        t: 'proc',
        title: '3.1 Solving photon-energy problems',
        steps: [
          'Identify what you are given — frequency <i>ν</i>, wavelength <i>λ</i>, or wavenumber <i>ν̄</i>.',
          'Pick the matching form: <i>E</i> = <i>hν</i> (given <i>ν</i>), <i>E</i> = <i>hc</i>/<i>λ</i> (given <i>λ</i>), or <i>E</i> = <i>hcν̄</i>.',
          'Watch units: keep <i>λ</i> in metres for SI joules, or use the shortcut <i>E</i>(eV) = 1240/<i>λ</i>(nm) to skip the constants.',
          'For <i>N</i> photons or a beam of power <i>P</i>, multiply: total energy = <i>Nhν</i>, and <i>N</i> = <i>Pt</i>/(<i>hν</i>).',
        ],
      },
      {
        t: 'p',
        html: '<b>Why the shortcut works:</b> <i>hc</i> = (6.626 × 10<sup>−34</sup>)(3 × 10<sup>8</sup>) = 1.988 × 10<sup>−25</sup> J m; dividing by 1.602 × 10<sup>−19</sup> J/eV and converting metres to nanometres bundles all the constants into the single number 1240 eV nm. Memorise it and most photon questions become one division.',
      },
      {
        t: 'proc',
        title: '3.2 Solving photoelectric problems',
        steps: [
          'Find the incoming photon energy <i>hν</i> (or <i>hc</i>/<i>λ</i>).',
          'If you need it, get the work function from the threshold: <i>W</i><sub>0</sub> = <i>hν</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>0</sub>.',
          'Apply Einstein’s equation: KE<sub>max</sub> = <i>hν</i> − <i>W</i><sub>0</sub>. If this is negative or zero, <b>no emission occurs</b>.',
          'If asked for stopping potential, use <i>V</i><sub>0</sub> = KE<sub>max</sub>/<i>e</i> (so KE<sub>max</sub> in eV equals <i>V</i><sub>0</sub> in volts numerically).',
        ],
      },
      {
        t: 'p',
        html: '<b>The reasoning that defeated the wave model:</b> (i) Threshold — a single photon must carry at least <i>W</i><sub>0</sub> to free an electron; a low-frequency photon simply cannot, however many arrive. (ii) KE depends on frequency, not intensity — raising intensity sends more photons (more electrons), but each photon still carries the same <i>hν</i>, so the energy per electron is unchanged. (iii) Instantaneous emission — one photon hands its packet to one electron in a single event; there is no “charging up.” Each fact falls straight out of the one-photon-one-electron picture.',
      },
      {
        t: 'p',
        html: '<b>3.3 Reading spectra.</b> A hot, dense source (a glowing filament) gives a continuous spectrum. A hot, low-density gas of excited atoms emits only at sharp wavelengths — its emission line spectrum. The same cool gas placed in front of a continuous source absorbs exactly those same wavelengths, giving an absorption line spectrum (dark lines where the bright ones were). The fact that the lines are sharp and fixed for each element is the experimental proof that an atom’s electron can hold only certain discrete energies — the idea Bohr will quantify next.',
      },
      {
        t: 'p',
        html: '<b>3.4 Black-body radiation and the four laws of the photoelectric effect.</b> Two experiments forced the quantum idea, and both are examinable.',
      },
      {
        t: 'p',
        html: '<b>Black-body radiation:</b> a perfect absorber/emitter (a “black body”) glows with a characteristic spread of wavelengths that shifts toward blue as it heats up — think of iron going from dull red to white-hot. Classical wave theory predicted the emitted intensity should rise without limit at short wavelengths (the <b>ultraviolet catastrophe</b>) — an absurd result, since a warm object does not blast out infinite UV. Planck resolved it in 1900 by assuming the oscillators in the body can only emit energy in whole quanta <i>E</i> = <i>hν</i>; this single assumption reproduced the observed curve exactly and launched quantum theory.',
      },
      {
        t: 'p',
        html: 'The photoelectric effect, experimentally, obeys four laws that a good answer should be able to state:<br>1. <b>Threshold frequency:</b> for each metal there is a minimum frequency <i>ν</i><sub>0</sub> below which no electrons are emitted, whatever the intensity.<br>2. <b>Instantaneous emission:</b> above <i>ν</i><sub>0</sub>, electrons appear with no measurable time lag (less than 10<sup>−9</sup> s).<br>3. <b>KE<sub>max</sub> depends on frequency, not intensity:</b> the maximum kinetic energy (and hence the stopping potential) rises linearly with <i>ν</i> and is completely independent of how bright the light is.<br>4. <b>Photocurrent depends on intensity:</b> at fixed frequency, the number of electrons ejected per second (the saturation photocurrent) is directly proportional to the intensity.',
      },
      {
        t: 'p',
        html: '<b>The two graphs to remember:</b> a plot of stopping potential <i>V</i><sub>0</sub> against frequency <i>ν</i> is a <b>straight line</b> of slope <i>h</i>/<i>e</i>, crossing the axis at <i>ν</i><sub>0</sub> (this is how Millikan measured <i>h</i>); and a plot of photocurrent against intensity is a straight line through the origin. Both fall straight out of Einstein’s equation <i>eV</i><sub>0</sub> = <i>hν</i> − <i>W</i><sub>0</sub> — the slope is <i>h</i>/<i>e</i> and the intercept fixes <i>ν</i><sub>0</sub> = <i>W</i><sub>0</sub>/<i>h</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An FM radio station broadcasts at a frequency of 95.0 MHz. Calculate (a) the wavelength of the waves and (b) the energy of one photon of this radiation. (Take <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>, <i>h</i> = 6.626 × 10<sup>−34</sup> J s.)',
        steps: [
          '<b>Step 1 — wavelength</b> from <i>c</i> = <i>νλ</i>:<br><i>λ</i> = <i>c</i>/<i>ν</i> = (3 × 10<sup>8</sup>)/(95.0 × 10<sup>6</sup>)',
          '<b>Step 2 — photon energy</b> from <i>E</i> = <i>hν</i>:<br><i>E</i> = (6.626 × 10<sup>−34</sup>)(95.0 × 10<sup>6</sup>)',
          '(The tiny energy per photon is why radio waves are harmless — each packet is feeble.)',
        ],
        ans: '(a) <i>λ</i> = 3.16 m; (b) <i>E</i> = 6.29 × 10<sup>−26</sup> J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The work function of a metal is 2.0 eV. Will light of wavelength 700 nm eject photoelectrons from it?',
        steps: [
          '<b>The trap:</b> students convert to joules, compute threshold wavelength, and burn a minute — or worse, assume “bright enough light always works.”',
          '<b>Fast reasoning:</b> use the shortcut for the photon energy:<br><i>E</i> = 1240/700 = 1.77 eV<br>Since 1.77 eV < 2.0 eV = <i>W</i><sub>0</sub>, a single photon cannot pay the exit fee.',
          'The whole decision is one division (1240/<i>λ</i>) compared against <i>W</i><sub>0</sub>.',
        ],
        ans: '<b>No emission</b> — regardless of how intense the light is.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (combining photon energy + power)',
        q: 'A helium–neon laser emits red light of wavelength 632.8 nm at a power of 5.0 mW. How many photons does it emit per second? (Take <i>hc</i> = 1240 eV nm, 1 eV = 1.602 × 10<sup>−19</sup> J.)',
        steps: [
          '<b>Step 1 — energy per photon.</b><br><i>E</i> = 1240/632.8 = 1.96 eV = 1.96 × 1.602 × 10<sup>−19</sup> = 3.14 × 10<sup>−19</sup> J',
          '<b>Step 2 — photons per second</b> (power is energy per second):<br><i>N</i> = <i>P</i>/<i>E</i> = (5.0 × 10<sup>−3</sup>)/(3.14 × 10<sup>−19</sup>) = 1.59 × 10<sup>16</sup> photons s<sup>−1</sup>',
          'The structure — convert wavelength to photon energy, then divide power by it — is the template for every “photons per second / per pulse” question.',
        ],
        ans: 'About 1.6 × 10<sup>16</sup> photons every second.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'When light of wavelength 300 nm falls on a metal, the stopping potential is 1.85 V; for 400 nm light it is 0.82 V. From these data, (a) verify the value of Planck’s constant, and (b) determine the work function of the metal. (Take <i>hc</i> = 1240 eV nm.)',
        steps: [
          '<b>Set up Einstein’s equation as a stopping-potential pair</b> (<i>eV</i><sub>0</sub> in eV equals <i>V</i><sub>0</sub> in volts):<br><i>eV</i><sub>1</sub> = <i>hc</i>/<i>λ</i><sub>1</sub> − <i>W</i><sub>0</sub>, <i>eV</i><sub>2</sub> = <i>hc</i>/<i>λ</i><sub>2</sub> − <i>W</i><sub>0</sub>',
          '<b>Step 1 — subtract to eliminate <i>W</i><sub>0</sub>.</b><br><i>e</i>(<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>) = <i>hc</i>(1/<i>λ</i><sub>1</sub> − 1/<i>λ</i><sub>2</sub>)<br>1.85 − 0.82 = <i>hc</i>(1/300 − 1/400) = 1240 × (400 − 300)/(300 × 400) = 1240 × 100/120000 = 1.03 eV<br>The left side is 1.03 V, the right side 1.03 eV — they match, confirming the data are consistent with <i>h</i> = 6.626 × 10<sup>−34</sup> J s (which is baked into <i>hc</i> = 1240 eV nm).',
          '<b>Step 2 — work function</b> from the 300 nm equation:<br><i>W</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>1</sub> − <i>eV</i><sub>1</sub> = 1240/300 − 1.85 = 4.13 − 1.85',
          '(Quick check via threshold wavelength: <i>λ</i><sub>0</sub> = 1240/2.28 = 544 nm — so only light shorter than 544 nm ejects electrons, consistent with both 300 and 400 nm working.)',
          'The “subtract two stopping-potential equations to kill <i>W</i><sub>0</sub>” trick is the signature JEE Advanced move here.',
        ],
        ans: 'The data confirm Planck’s constant and give <i>W</i><sub>0</sub> = 2.28 eV.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Yellow sodium light has a wavelength of 580 nm. Calculate its frequency and wavenumber.',
            a: '<i>ν</i> = 5.17 × 10<sup>14</sup> Hz, <i>ν̄</i> = 1.72 × 10<sup>6</sup> m<sup>−1</sup>.',
          },
          {
            q: '[NEET] Calculate the energy (in kJ) of one mole of photons of radiation of wavelength 300 nm.',
            a: '<i>E</i> = (1240/300) eV = 4.13 eV per photon ⇒ ≈ 399 kJ mol<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] A 100 W sodium lamp emits monochromatic light of wavelength 589 nm. How many photons does it emit per second?',
            a: '≈ 2.96 × 10<sup>20</sup> photons s<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] Light of wavelength 250 nm falls on a metal of work function 3.0 eV. Find the maximum kinetic energy of the ejected electrons and the stopping potential.',
            a: 'KE<sub>max</sub> = (1240/250) − 3.0 = 1.96 eV; <i>V</i><sub>0</sub> = 1.96 V.',
          },
          {
            q: '[JEE Advanced] Photoelectrons of maximum kinetic energy 1.5 eV are ejected from a metal by light of wavelength 350 nm. Find (a) the work function of the metal and (b) the de Broglie wavelength of the fastest photoelectron. (Take <i>m</i><sub>e</sub> = 9.1 × 10<sup>−31</sup> kg, <i>h</i> = 6.626 × 10<sup>−34</sup> J s.)',
            a: '(a) <i>W</i><sub>0</sub> = (1240/350) − 1.5 = 2.04 eV; (b) <i>λ</i> ≈ 1.0 nm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'When the intensity of incident light (above threshold frequency) on a metal is increased while keeping the frequency constant, which quantity increases?',
        opts: [
          {
            label: 'the maximum kinetic energy of photoelectrons',
            nudge: '<b>(a)</b> and <b>(b)</b> are the classic wave-theory misconception that “brighter = faster electrons.”',
          },
          {
            label: 'the stopping potential',
            nudge: '<b>(a)</b> and <b>(b)</b> are the classic wave-theory misconception that “brighter = faster electrons.”',
          },
          { label: 'the number of photoelectrons emitted per second', nudge: null },
          { label: 'the threshold frequency', nudge: '<b>(d)</b> is a metal property fixed by <i>W</i><sub>0</sub>; light intensity cannot change it.' },
        ],
        correct: 2,
        solution: 'Higher intensity at fixed frequency means more photons per second, hence more ejected electrons — but each photon still carries the same <i>hν</i>, so the energy per electron (and thus KE<sub>max</sub> and stopping potential) is unchanged.',
      },
      {
        t: 'mcq',
        q: 'The energy of a photon of wavelength 620 nm is approximately:',
        opts: [
          { label: '1.0 eV', nudge: '<b>(a)</b> and <b>(d)</b> from arithmetic slips or using 1240 in the wrong place.' },
          { label: '2.0 eV', nudge: null },
          { label: '3.1 eV', nudge: '<b>(c)</b> comes from using 400 nm (blue) by mistake.' },
          { label: '0.5 eV', nudge: '<b>(a)</b> and <b>(d)</b> from arithmetic slips or using 1240 in the wrong place.' },
        ],
        correct: 1,
        solution: 'Using <i>E</i> = 1240/<i>λ</i>(nm) = 1240/620 = 2.0 eV. The shortcut makes this a five-second question.',
      },
      {
        t: 'mcq',
        q: 'For the photoelectric effect to occur, the incident radiation must have:',
        opts: [
          { label: 'high intensity only', nudge: '<b>(a)</b> is the wave-theory trap (intensity alone never helps below threshold).' },
          { label: 'frequency greater than the threshold frequency', nudge: null },
          { label: 'a long wavelength', nudge: '<b>(c)</b> is wrong for the same reason as (d): long wavelength = low frequency = no emission.' },
          {
            label: 'wavelength greater than the threshold wavelength',
            nudge: '<b>(d)</b> gets the wavelength inequality backwards — shorter wavelength means higher frequency, which is what is required.',
          },
        ],
        correct: 1,
        solution: 'Emission needs <i>ν</i> ≥ <i>ν</i><sub>0</sub>, equivalently <i>λ</i> ≤ <i>λ</i><sub>0</sub>.',
      },
      {
        t: 'mcq',
        q: 'Which one of the following has the highest energy per photon?',
        opts: [
          { label: 'red light (<i>λ</i> ≈ 700 nm)', nudge: '<b>(a)</b> red light sits in between.' },
          {
            label: 'microwaves (<i>λ</i> ≈ 1 cm)',
            nudge: '<b>(b)</b> microwaves and <b>(d)</b> infrared have the longest wavelengths and least energy.',
          },
          { label: 'X-rays (<i>λ</i> ≈ 0.1 nm)', nudge: null },
          {
            label: 'infrared (<i>λ</i> ≈ 1000 nm)',
            nudge: '<b>(b)</b> microwaves and <b>(d)</b> infrared have the longest wavelengths and least energy.',
          },
        ],
        correct: 2,
        solution: 'Since <i>E</i> = <i>hc</i>/<i>λ</i>, energy is inversely proportional to wavelength, so the shortest wavelength (X-rays) carries the most energy per photon. The trap is associating “energy” with intensity or familiarity rather than wavelength.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Pitfall 1 — confusing what intensity vs frequency controls.</b> Frequency sets the energy per electron (KE<sub>max</sub>, stopping potential); intensity sets the number of electrons. Mixing these is the most-tested misconception in the whole topic.',
          '<b>Pitfall 2 — ignoring the threshold.</b> If <i>hν</i> < <i>W</i><sub>0</sub>, no electrons are emitted, however intense the beam. Always compare photon energy with <i>W</i><sub>0</sub> before computing KE.',
          '<b>Pitfall 3 — unit slips in <i>E</i> = <i>hc</i>/<i>λ</i>.</b> Keep <i>λ</i> in metres for joules, or use <i>E</i>(eV) = 1240/<i>λ</i>(nm) — but never mix the two. Reporting “joules” after using the eV·nm shortcut is a frequent error.',
          '<b>Pitfall 4 — confusing wavenumber with frequency.</b> <i>ν̄</i> = 1/<i>λ</i> has units m<sup>−1</sup> (a spatial count), while <i>ν</i> = <i>c</i>/<i>λ</i> has units Hz (a temporal count). They differ by a factor of <i>c</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Burn <i>E</i>(eV) = 1240/<i>λ</i>(nm) into memory — it converts almost every photon or photoelectric question into a single division, and <i>eV</i><sub>0</sub> (in volts) equals KE<sub>max</sub> (in eV) numerically, so stopping potential needs no extra step.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Wave relations',
            note: '<i>c</i> = <i>νλ</i> (<i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>); wavenumber <i>ν̄</i> = 1/<i>λ</i> (unit m<sup>−1</sup>).',
          },
          { f: 'EM spectrum (increasing energy)', note: 'radio < microwave < IR < visible < UV < X-ray < <i>γ</i>-ray.' },
          {
            f: 'Planck',
            note: '<i>E</i> = <i>hν</i> = <i>hc</i>/<i>λ</i>; <i>h</i> = 6.626 × 10<sup>−34</sup> J s; total = <i>nhν</i>. Shortcut: <i>E</i>(eV) = 1240/<i>λ</i>(nm).',
          },
          { f: 'Photon', note: 'momentum <i>p</i> = <i>h</i>/<i>λ</i> = <i>E</i>/<i>c</i>; rest mass = 0.' },
          {
            f: 'Photoelectric',
            note: '<i>hν</i> = <i>W</i><sub>0</sub> + KE<sub>max</sub>; <i>W</i><sub>0</sub> = <i>hν</i><sub>0</sub> = <i>hc</i>/<i>λ</i><sub>0</sub>; KE<sub>max</sub> = <i>h</i>(<i>ν</i> − <i>ν</i><sub>0</sub>) = <i>eV</i><sub>0</sub>.',
          },
          { f: 'Photon count', note: '<i>N</i> = <i>Pt</i>/(<i>hν</i>) = <i>Ptλ</i>/(<i>hc</i>).' },
          {
            f: 'Spectra',
            note: 'continuous (hot dense source) · emission lines (excited atoms emit) · absorption lines (cool gas absorbs). Sharp lines ⇒ atomic energy is quantised.',
          },
        ],
        aids: [
          '“Frequency feeds the electron’s speed; intensity feeds the crowd” (frequency → KE, intensity → number).',
          '“1240 over lambda-in-nm gives energy in eV” — the one shortcut to rule them all.',
          '“Below threshold, brightness is worthless.”',
        ],
      },
    ],
  },
];
