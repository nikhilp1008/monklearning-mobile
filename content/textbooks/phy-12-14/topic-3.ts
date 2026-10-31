import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Topic 03: pp. 890–901 of the Class 12 Physics Master Reference,
 * word for word: the book's sub-topic "Special-Purpose Diodes: Zener,
 * Photodiode, LED and Solar Cell", split at its Sections 1 to 8. Figures 14.8
 * (caption p. 891, drawn p. 892), 14.9 (caption p. 893, drawn p. 894) and 14.10
 * (caption p. 896, drawn p. 897) are redrawn in lib/diagrams/physics-12-14b.ts
 * and set beside the text each illustrates: 14.8 after the four device
 * paragraphs, 14.9 after Procedure A's "Setup", 14.10 after the solar-cell
 * procedure. Errata (layout): the Section 6 MCQ options, printed run together
 * in one paragraph, are split into their four options. "This subtopic" →
 * "this topic".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 890–901 ─────────────────────────
  {
    n: '03',
    title: 'Special-Purpose Diodes: Zener, Photodiode, LED and Solar Cell',
    kalam: 'An ordinary p-n junction diode is a one-way valve.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Out of current CBSE but firmly in JEE Main and NEET 2026. NEET treats these as high-yield fact/concept questions (which device is reverse/forward biased, photodiode reasoning, LED colour–band-gap link). JEE Main reliably sets a Zener voltage-regulator numerical (find <i>R</i><sub>S</sub> or the safe range). JEE Advanced occasionally probes the emission/absorption symmetry of LED and photodiode, or Zener power-rating limits.',
      },
      {
        t: 'p',
        html: 'An ordinary p-n junction diode is a one-way valve. But once engineers understood the junction deeply, they realised they could tune it — change the doping, the geometry, the operating regime — to make it do special jobs. That is the whole story of this topic: four devices, all just p-n junctions, each exploiting one particular trick the junction can perform.',
      },
      {
        t: 'p',
        html: 'Two of them run <b>forward or unbiased and deal in light coming out or current coming out</b>; two run <b>reverse biased and deal in a controlled, useful “breakdown” or light going in</b>. Hold that map in your head and the four devices stop being a memory-list and become one idea seen from four angles.',
      },
      {
        t: 'p',
        html: '<b>The Zener diode — making breakdown useful.</b> Ordinarily, reverse breakdown destroys a diode. The Zener diode is deliberately built to survive and exploit it. By doping both sides very heavily, the depletion region is made extremely thin (under 10<sup>−6</sup> m), so a huge electric field (∼5 × 10<sup>6</sup> V/m) appears even at a modest reverse voltage of a few volts. At a sharply defined reverse voltage — the <b>Zener voltage</b> <i>V</i><sub>Z</sub> — current rises almost vertically, yet the voltage across the diode barely changes. That flat voltage is the gift: a Zener clamps its terminal voltage to <i>V</i><sub>Z</sub> no matter how the current swings, which makes it a natural <b>voltage regulator</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture an overflow weir on a dam (the kind you see on Indian irrigation tanks). Below the weir level, the water height varies with inflow. But once the water reaches the weir, any extra inflow just spills over — the level stays pinned at the weir height. The Zener voltage is the weir height; extra current “spills” through the diode while the voltage stays locked. Feed a messy, fluctuating DC into a Zener through a series resistor, and out comes a rock-steady <i>V</i><sub>Z</sub>.',
      },
      {
        t: 'p',
        html: '<b>The photodiode — light in, current out.</b> Take a reverse-biased junction and shine light on it through a transparent window. Photons with energy <i>hν</i> ≥ <i>E</i><sub>g</sub> knock electrons across the gap, creating extra electron-hole pairs in the depletion region. These are swept out by the reverse field as a <b>photocurrent proportional to the light intensity</b> — so the device becomes a light meter and optical detector.',
      },
      {
        t: 'p',
        html: '<b>The LED — current in, light out.</b> This is the photodiode run in reverse (conceptually). Forward bias a junction; electrons and holes pour into the junction and <b>recombine</b>, releasing their energy as photons of energy <i>hν</i> ≈ <i>E</i><sub>g</sub>. Choose a material with the right band gap and you choose the colour of the light. That is why a <b>light-emitting diode</b> is, literally, a diode that glows when forward biased.',
      },
      {
        t: 'p',
        html: '<b>The solar cell — light in, power out, no battery.</b> A solar cell is a large-area junction that, when illuminated, generates its own emf — it needs <b>no external bias at all</b>, unlike the photodiode. Sunlight creates pairs; the junction’s built-in field separates them and drives a current through an external load. It is a photodiode turned into a tiny power station.',
      },
      { t: 'fig', id: 'p12-14-fig-14.8' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> A Zener regulates only while it is in breakdown — below <i>V</i><sub>Z</sub> it does nothing useful, and above its rated power it burns out, so the series resistor must keep its current within bounds. A photodiode is useful in reverse bias even though its forward current is far larger, because what matters is the fractional change of current with light, which is sharp in reverse bias. An LED needs a band gap large enough for visible photons — silicon (<i>E</i><sub>g</sub> = 1.1 eV) and germanium (0.7 eV) emit only invisible infrared, so visible LEDs use wider-gap compounds. A solar cell needs a band gap matched to the solar spectrum (∼1.1–1.5 eV) for good efficiency.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Zener voltage regulator (series resistor + Zener ∥ load)',
        main: '<i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub><br><i>V</i><sub>out</sub> = <i>V</i><sub>Z</sub><br><i>R</i><sub>S</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>)/(<i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>)',
        legend: [
          '<i>I</i><sub>in</sub> = total line current (A)',
          '<i>I</i><sub>Z</sub> = current through the Zener (A)',
          '<i>I</i><sub>L</sub> = load current',
          '<i>V</i><sub>out</sub> = regulated output (= <i>V</i><sub>Z</sub>) (V)',
          '<i>V</i><sub>Z</sub> = Zener (breakdown) voltage (V)',
          '<i>R</i><sub>S</sub> = series (regulating) resistor (Ω)',
          '<i>V</i><sub>in</sub> = unregulated input voltage',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Voltage drop across the series resistor',
        main: '<i>V</i><sub>R<sub>S</sub></sub> = <i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub> = (<i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>) <i>R</i><sub>S</sub>',
        legend: [
          '<i>V</i><sub>R<sub>S</sub></sub> = voltage drop across the series resistor',
          '<i>V</i><sub>in</sub> = unregulated input voltage',
          '<i>V</i><sub>Z</sub> = Zener (breakdown) voltage (V)',
          '<i>I</i><sub>Z</sub> = current through the Zener (A)',
          '<i>I</i><sub>L</sub> = load current',
          '<i>R</i><sub>S</sub> = series (regulating) resistor (Ω)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Zener power rating limit (maximum safe Zener current)',
        main: '<i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub>',
        legend: [
          '<i>I</i><sub>Z,max</sub> = maximum safe Zener current (A)',
          '<i>P</i> = Zener power rating (W)',
          '<i>V</i><sub>Z</sub> = Zener (breakdown) voltage (V)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Photon energy ↔ band gap (LED emission / photodiode & solar threshold)',
        main: '<i>hν</i> = <i>hc</i>/<i>λ</i> ≈ <i>E</i><sub>g</sub><br>⇒ <i>λ</i><sub>(threshold/emitted)</sub> = <i>hc</i>/<i>E</i><sub>g</sub>',
        legend: [
          '<i>h</i> = Planck’s constant (6.63 × 10<sup>−34</sup> J s)',
          '<i>ν</i> = frequency',
          '<i>c</i> = speed of light (3 × 10<sup>8</sup> m/s)',
          '<i>λ</i> = wavelength (m)',
          '<i>E</i><sub>g</sub> = band gap (eV or J)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Symbol dictionary:</b><br>• <i>V</i><sub>Z</sub> — Zener (breakdown) voltage (V); <i>I</i><sub>Z</sub> — current through the Zener (A)<br>• <i>R</i><sub>S</sub> — series (regulating) resistor (Ω); <i>I</i><sub>L</sub> — load current; <i>I</i><sub>in</sub> — total line current (A)<br>• <i>V</i><sub>in</sub> — unregulated input voltage; <i>V</i><sub>out</sub> — regulated output (= <i>V</i><sub>Z</sub>) (V)<br>• <i>P</i> — Zener power rating (W); <i>I</i><sub>Z,max</sub> — maximum safe Zener current (A)<br>• <i>h</i> — Planck’s constant (6.63 × 10<sup>−34</sup> J s); <i>ν</i> — frequency; <i>λ</i> — wavelength (m)<br>• <i>E</i><sub>g</sub> — band gap (eV or J); <i>c</i> — speed of light (3 × 10<sup>8</sup> m/s)',
      },
      {
        t: 'p',
        html: '<b>Dimensional formulae (core quantities):</b><br>• Zener voltage <i>V</i><sub>Z</sub> (potential): [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]<br>• Power rating <i>P</i>: [M L<sup>2</sup> T<sup>−3</sup>]<br>• Photon energy <i>hν</i>: [M L<sup>2</sup> T<sup>−2</sup>]<br>• Planck’s constant <i>h</i>: [M L<sup>2</sup> T<sup>−1</sup>]',
      },
      {
        t: 'p',
        html: '<b>Handy constant:</b> <i>hc</i> ≈ 1240 eV·nm, so <i>λ</i>(nm) = 1240/<i>E</i><sub>g</sub>(eV) — the fastest route from band gap to wavelength.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      {
        t: 'p',
        html: '<b>Setup:</b> unregulated DC <i>V</i><sub>in</sub> feeds a series resistor <i>R</i><sub>S</sub>, after which a Zener diode sits in reverse bias, in parallel with the load <i>R</i><sub>L</sub>.',
      },
      { t: 'fig', id: 'p12-14-fig-14.9' },
      {
        t: 'proc',
        title: 'Procedure A — How a Zener regulates voltage (the reasoning, step by step)',
        steps: [
          '<b>Choose the operating regime.</b> The Zener is biased beyond <i>V</i><sub>Z</sub>, so it sits in breakdown, where its voltage is pinned at <i>V</i><sub>Z</sub>. Therefore <i>V</i><sub>out</sub> = <i>V</i><sub>Z</sub> — the load always sees <i>V</i><sub>Z</sub>.',
          '<b>Current bookkeeping.</b> The line current splits: <i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>. The whole of <i>I</i><sub>in</sub> flows through <i>R</i><sub>S</sub>.',
          '<b>Absorb the fluctuation.</b> Suppose <i>V</i><sub>in</sub> rises. Since <i>V</i><sub>out</sub> = <i>V</i><sub>Z</sub> is fixed, the extra voltage must appear across <i>R</i><sub>S</sub>: <i>V</i><sub>R<sub>S</sub></sub> = <i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub> grows. That pushes more current through <i>R</i><sub>S</sub> — and because <i>V</i><sub>Z</sub> can’t rise, the surplus is shunted through the Zener (<i>I</i><sub>Z</sub> increases) while <i>I</i><sub>L</sub> stays put. The load voltage never moved. <b>Why this works:</b> the Zener acts as a controllable “overflow,” dumping excess current to hold <i>V</i><sub>out</sub> constant. The reverse logic handles a drop in <i>V</i><sub>in</sub> — the Zener gives up some current.',
          '<b>Design rule.</b> For good regulation, choose <i>R</i><sub>S</sub> so that <i>I</i><sub>Z</sub> stays above the Zener’s minimum breakdown current even at the lowest <i>V</i><sub>in</sub> and the largest load current, so the Zener never falls out of breakdown when the load draws current (and below <i>I</i><sub>Z,max</sub> at the highest <i>V</i><sub>in</sub> with the least load).',
        ],
      },
      {
        t: 'p',
        html: 'It seems backwards: a photodiode passes far more current in forward bias (mA) than reverse bias (μA), yet we always reverse-bias it. The reasoning is about sensitivity, not magnitude.',
      },
      {
        t: 'proc',
        title: 'Procedure B — Why the photodiode is operated in reverse bias',
        steps: [
          'In reverse bias the dark current is tiny, so a given amount of light produces a <b>large fractional change</b> in current — easy to measure and clearly proportional to intensity.',
          'In forward bias the current is already large from the bias itself, so the light-induced change is a small fraction of a big number — hard to resolve.',
          'Conclusion: reverse bias gives a clean, intensity-proportional signal. The device trades absolute current for measurability.',
        ],
      },
      { t: 'p', html: '<b>Procedure C — Choosing an LED’s colour from its band gap</b>' },
      {
        t: 'p',
        html: 'When a forward-biased LED’s electrons and holes recombine, each event releases a photon of energy <i>hν</i> ≈ <i>E</i><sub>g</sub>. So <i>λ</i> = <i>hc</i>/<i>E</i><sub>g</sub> fixes the colour. To emit visible light (roughly 400–700 nm, i.e. ∼1.8–3.1 eV), the material’s band gap must lie in that window — which immediately explains why Si and Ge (1.1 and 0.7 eV → infrared) make poor visible LEDs, and why wider-gap compounds are used instead. The reasoning generalises: bigger band gap → higher photon energy → shorter wavelength → bluer light.',
      },
      { t: 'p', html: '<b>Two mechanisms of reverse breakdown — Zener vs avalanche</b>' },
      {
        t: 'p',
        html: 'Reverse breakdown comes in two physically distinct flavours, and the distinction is a favourite exam point:<br>• <b>Zener breakdown</b> dominates in heavily doped junctions with a thin depletion region and a low breakdown voltage (typically below ∼6 V). The field is so intense that it directly tears valence electrons out of their bonds — a quantum-mechanical tunnelling process. The breakdown voltage decreases with temperature.<br>• <b>Avalanche breakdown</b> dominates in lightly doped junctions with a wider depletion region and a higher breakdown voltage. Here the thermally generated minority carriers are accelerated by the field until they smash bonds on impact, knocking out more carriers that in turn knock out still more — a chain-reaction impact ionisation. Its breakdown voltage increases with temperature.',
      },
      {
        t: 'p',
        html: 'Both give the sharp, near-vertical reverse current that a Zener diode exploits; the name “Zener diode” is used for the device regardless of which mechanism actually operates.',
      },
      {
        t: 'p',
        html: 'Because a solar cell is not biased, its I-V curve under illumination is the most useful descriptor:',
      },
      {
        t: 'proc',
        title: 'Procedure — Reading a solar cell’s I-V characteristic',
        steps: [
          '<b>Short-circuit current</b> <i>I</i><sub>SC</sub> — the current when the terminals are shorted (<i>V</i> = 0). It is proportional to light intensity and is the maximum current the cell can deliver.',
          '<b>Open-circuit voltage</b> <i>V</i><sub>OC</sub> — the voltage when no current is drawn (terminals open). It is the maximum voltage the cell can produce and grows only weakly (logarithmically) with intensity.',
          '<b>The operating point</b> lies between these extremes; the cell delivers maximum power at a “knee” where the product <i>V</i> × <i>I</i> peaks. <b>Why this matters:</b> a solar panel is rated by this peak-power point, and the curve sits in the fourth quadrant precisely because the cell supplies (rather than consumes) energy.',
        ],
      },
      { t: 'fig', id: 'p12-14-fig-14.10' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A Zener diode with <i>V</i><sub>Z</sub> = 6.0 V is used to regulate the supply to a load drawing <i>I</i><sub>L</sub> = 10 mA. The unregulated input is <i>V</i><sub>in</sub> = 12 V. Choosing the Zener current to be <i>I</i><sub>Z</sub> = 20 mA for good regulation, find the value of the series resistor <i>R</i><sub>S</sub>.',
        steps: [
          '<b>Given:</b> <i>V</i><sub>Z</sub> = 6.0 V, <i>I</i><sub>L</sub> = 10 mA, <i>V</i><sub>in</sub> = 12 V, <i>I</i><sub>Z</sub> = 20 mA.',
          '<b>Step 1 — total line current:</b> <i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub> = 20 + 10 = 30 mA.',
          '<b>Step 2 — voltage across <i>R</i><sub>S</sub>:</b> <i>V</i><sub>R<sub>S</sub></sub> = <i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub> = 12 − 6 = 6.0 V.',
          '<b>Step 3 — series resistor:</b><br><i>R</i><sub>S</sub> = <i>V</i><sub>R<sub>S</sub></sub>/<i>I</i><sub>in</sub> = (6.0 V)/(30 × 10<sup>−3</sup> A)',
        ],
        ans: 'A 200 Ω series resistor delivers a regulated 6.0 V to the load.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A photodiode carries a forward current of a few <b>mA</b> but a reverse current of only a few <b>μA</b>. Despite the reverse current being far smaller, the photodiode is always operated in reverse bias. Why?',
        steps: [
          '<b>The trap:</b> “Use the setting with more current — forward bias — for a stronger signal.”',
          '<b>Speed reasoning:</b> the useful quantity is not the absolute current but how sensitively the current responds to light. In reverse bias the dark current is minuscule, so illumination produces a <b>large fractional change</b> that tracks intensity cleanly. In forward bias the bias current swamps the light-induced change. So reverse bias wins on measurability.',
        ],
        ans: 'Reverse bias gives a current whose change is large compared to the baseline and is proportional to light intensity — exactly what a detector needs. (Eliminate any option that argues from “larger current”; the right answer always argues from fractional change / sensitivity.)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A Zener diode has a power rating of <i>P</i> = 2.0 W and a Zener voltage <i>V</i><sub>Z</sub> = 10 V. It is used to regulate a line whose unregulated voltage fluctuates between 15 V and 20 V. Ignoring the load (worst case), find the <b>minimum</b> series resistance <i>R</i><sub>S</sub> that keeps the Zener within its power rating.',
        steps: [
          '<b>Step 1 — maximum safe Zener current</b> (links power rating to current):<br><i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub> = 2.0/10 = 0.20 A',
          '<b>Step 2 — identify the worst case.</b> The Zener dissipates the most when <i>V</i><sub>in</sub> is highest and the load draws nothing, so all the line current flows through the Zener. Take <i>V</i><sub>in</sub> = 20 V.',
          '<b>Step 3 — current through <i>R</i><sub>S</sub> must not exceed <i>I</i><sub>Z,max</sub>:</b><br><i>I</i> = (<i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>)/<i>R</i><sub>S</sub> ≤ <i>I</i><sub>Z,max</sub> ⇒ <i>R</i><sub>S</sub> ≥ (20 − 10)/0.20',
        ],
        ans: '<i>R</i><sub>S</sub> ≥ 50 Ω. Any smaller and the Zener would exceed 2 W at the top of the input range and be destroyed. (Two concepts: power-rating → current limit, and the regulator’s worst-case circuit analysis.)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A light-emitting diode and a photodiode are both fabricated from the same semiconductor of band gap <i>E</i><sub>g</sub> = 2.1 eV. (a) Find the wavelength and colour of the light the LED emits. (b) Find the longest wavelength of light the photodiode can detect. (c) Explain why the two wavelengths coincide even though the devices run in opposite bias.',
        steps: [
          '<b>(a) LED emission.</b> Recombination gives <i>hν</i> ≈ <i>E</i><sub>g</sub>, so using <i>hc</i> = 1240 eV·nm:<br><i>λ</i> = <i>hc</i>/<i>E</i><sub>g</sub> = (1240 eV·nm)/(2.1 eV) = 590 nm<br>That is yellow-orange light.',
          '<b>(b) Photodiode threshold.</b> To create an electron-hole pair, an incoming photon must satisfy <i>hν</i> ≥ <i>E</i><sub>g</sub>, i.e. <i>λ</i> ≤ <i>hc</i>/<i>E</i><sub>g</sub>. The <b>longest</b> detectable wavelength is therefore the same:<br><i>λ</i><sub>max</sub> = <i>hc</i>/<i>E</i><sub>g</sub> = 590 nm<br>Photons longer than 590 nm (redder, lower energy) cannot bridge the gap and go undetected.',
          '<b>(c) The symmetry.</b> Both processes are governed by the same band gap, because they are time-reverses of each other: the LED <b>emits</b> a photon when an electron drops across <i>E</i><sub>g</sub> (recombination, forward bias driving carriers together); the photodiode <b>absorbs</b> a photon to push an electron across <i>E</i><sub>g</sub> (pair generation, reverse bias sweeping carriers apart). Same energy step <i>E</i><sub>g</sub>, hence same wavelength threshold — only the direction of energy flow and the bias differ. This emission–absorption reciprocity is the deep reason a material’s band gap simultaneously sets the colour it can give and the colour it can see.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] State the bias condition (forward / reverse / none) under which each of the following operates: Zener diode (as regulator), photodiode, LED, and solar cell.',
            a: 'Zener — reverse bias; photodiode — reverse bias; LED — forward bias; solar cell — no external bias (self-generating).',
          },
          {
            q: '[NEET] Why is a Zener diode heavily doped on both sides, and what effect does this have on the width of its depletion region and on its breakdown voltage?',
            a: 'Heavy doping makes the depletion region very thin (<10<sup>−6</sup> m), giving a very high junction field at low reverse voltage and a low, sharply defined breakdown (Zener) voltage.',
          },
          {
            q: '[JEE Main] A Zener regulator uses <i>V</i><sub>Z</sub> = 5.0 V, an unregulated input of 9.0 V, and supplies a load current of 15 mA. If the Zener current is chosen equal to the load current, find the series resistor <i>R</i><sub>S</sub>.',
            a: '<i>I</i><sub>in</sub> = 15 + 15 = 30 mA; <i>R</i><sub>S</sub> = (9.0 − 5.0)/0.030 = 133 Ω.',
          },
          {
            q: '[JEE Main] An LED emits light of wavelength 620 nm. Estimate the band gap of the semiconductor used (take <i>hc</i> = 1240 eV·nm).',
            a: '<i>E</i><sub>g</sub> = 1240/620 = 2.0 eV.',
          },
          {
            q: '[JEE Advanced] A Zener diode rated 1.0 W with <i>V</i><sub>Z</sub> = 8.0 V regulates a line that varies between 11 V and 14 V, with no load connected. Find the minimum permissible series resistance.',
            a: '<i>I</i><sub>Z,max</sub> = 1.0/8.0 = 0.125 A; worst case <i>V</i><sub>in</sub> = 14 V; <i>R</i><sub>S</sub> ≥ (14 − 8)/0.125 = 48 Ω.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A Zener diode used as a voltage regulator is connected:',
        opts: [
          {
            label: 'in forward bias, in series with the load',
            nudge: '<b>(A)</b> and <b>(C)</b> use forward bias, where a Zener is just an ordinary diode and cannot hold the load at <i>V</i><sub>Z</sub>.',
          },
          { label: 'in reverse bias, in parallel with the load', nudge: null },
          {
            label: 'in forward bias, in parallel with the load',
            nudge: '<b>(A)</b> and <b>(C)</b> use forward bias, where a Zener is just an ordinary diode and cannot hold the load at <i>V</i><sub>Z</sub>.',
          },
          {
            label: 'in reverse bias, in series with the load',
            nudge: '<b>(D)</b> gets the bias right but the topology wrong — in series the Zener could not hold the load voltage constant.',
          },
        ],
        correct: 1,
        solution: 'Regulation relies on the flat breakdown region, which occurs in reverse bias, and the Zener must sit across (parallel to) the load so the load sees the clamped <i>V</i><sub>Z</sub>.',
      },
      {
        t: 'mcq',
        q: 'Which special-purpose diode operates <b>without</b> any external bias?',
        opts: [
          {
            label: 'Zener diode',
            nudge: '<b>(A)</b> and <b>(C)</b> both need an external supply (reverse and forward respectively).',
          },
          {
            label: 'photodiode',
            nudge: '<b>(B)</b> the photodiode looks similar but requires reverse bias to work as a detector.',
          },
          {
            label: 'light-emitting diode',
            nudge: '<b>(A)</b> and <b>(C)</b> both need an external supply (reverse and forward respectively).',
          },
          { label: 'solar cell', nudge: null },
        ],
        correct: 3,
        solution: 'A solar cell generates its own emf from incident light, so it needs no external supply — that is what distinguishes it from a photodiode. Confusing solar cell with photodiode is the classic slip — the discriminator is “self-powered vs externally biased.”',
      },
      {
        t: 'mcq',
        q: 'Silicon (<i>E</i><sub>g</sub> = 1.1 eV) is unsuitable for making a visible-light LED because:',
        opts: [
          {
            label: 'silicon cannot be doped',
            nudge: '<b>(A)</b> and <b>(D)</b> are simply false (silicon can be doped n-type or p-type, and has holes in its valence band).',
          },
          { label: 'its band gap is too small, so emitted photons are infrared', nudge: null },
          {
            label: 'its band gap is too large, so emitted photons are ultraviolet',
            nudge: '<b>(C)</b> reverses the logic — a small gap gives long (infrared) wavelengths, not ultraviolet.',
          },
          {
            label: 'silicon has no holes',
            nudge: '<b>(A)</b> and <b>(D)</b> are simply false (silicon can be doped n-type or p-type, and has holes in its valence band).',
          },
        ],
        correct: 1,
        solution: 'Emitted photon energy ≈ <i>E</i><sub>g</sub> = 1.1 eV corresponds to <i>λ</i> ≈ 1130 nm, which is infrared — invisible. Visible light needs <i>E</i><sub>g</sub> ≈ 1.8–3.1 eV.',
      },
      {
        t: 'mcq',
        q: 'In a photodiode, the photocurrent produced is:',
        opts: [
          { label: 'independent of light intensity', nudge: '<b>(A)</b> would make it useless as a light meter.' },
          { label: 'proportional to the light intensity', nudge: null },
          {
            label: 'inversely proportional to the light intensity',
            nudge: '<b>(C)</b> and <b>(D)</b> invent relationships with no physical basis.',
          },
          {
            label: 'proportional to the square of the intensity',
            nudge: '<b>(C)</b> and <b>(D)</b> invent relationships with no physical basis; <b>(D)</b> tempts students who over-associate “intensity” with squared quantities from wave optics, but here it is a one-photon-one-pair count.',
          },
        ],
        correct: 1,
        solution: 'Each suitable photon creates one electron-hole pair, so the number of carriers — and hence the photocurrent — scales linearly with the number of incident photons, i.e. with intensity.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing photodiode and solar cell.</b> Both are illuminated junctions, but the photodiode is reverse biased (a detector) while the solar cell is unbiased (a generator). The discriminator question is always “is there an external supply?”',
          '<b>Getting the LED colour–gap direction backwards.</b> Larger band gap → higher photon energy → shorter wavelength → bluer. Smaller gap → infrared. Si and Ge are infrared-only (and, being indirect-gap materials, poor emitters even there).',
          '<b>Forgetting the worst case in Zener power problems.</b> Maximum Zener dissipation occurs at maximum input voltage with minimum load — that is the condition that sizes the series resistor.',
          '<b>Treating the Zener as forward biased.</b> Regulation lives in the reverse breakdown region; forward, it is just a normal diode.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For wavelength–band-gap conversions, skip Joules entirely — use <i>λ</i>(nm) = 1240/<i>E</i><sub>g</sub>(eV). One division gives the answer, and it instantly tells you the colour (≈ 620 nm red, 590 nm yellow, 470 nm blue). For Zener sizing, always test the extreme of the input range, never the average.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Zener',
            note: 'heavily doped → thin depletion region, high field, sharp <b>reverse</b> breakdown at <i>V</i><sub>Z</sub>; voltage stays pinned → <b>voltage regulator</b> (reverse bias, <b>parallel</b> with load)',
          },
          {
            f: 'Regulator relations',
            note: '<i>V</i><sub>out</sub> = <i>V</i><sub>Z</sub>; <i>I</i><sub>in</sub> = <i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>; <i>R</i><sub>S</sub> = (<i>V</i><sub>in</sub> − <i>V</i><sub>Z</sub>)/(<i>I</i><sub>Z</sub> + <i>I</i><sub>L</sub>); <i>I</i><sub>Z,max</sub> = <i>P</i>/<i>V</i><sub>Z</sub>',
          },
          {
            f: 'Photodiode',
            note: '<b>reverse</b> bias, light in → photocurrent ∝ intensity; reverse bias chosen for sensitivity (large fractional change), not magnitude',
          },
          {
            f: 'LED',
            note: '<b>forward</b> bias, recombination emits <i>hν</i> ≈ <i>E</i><sub>g</sub>; colour set by gap; visible needs <i>E</i><sub>g</sub> ≈ 1.8–3.1 eV (not Si/Ge)',
          },
          {
            f: 'Solar cell',
            note: '<b>no bias</b>, self-generating emf (photovoltaic); large area; gap ∼1.1–1.5 eV',
          },
          {
            f: 'Breakdown types',
            note: 'Zener = heavy doping, thin junction, low <i>V</i><sub>Z</sub>, tunnelling (<i>V</i><sub>Z</sub> falls with <i>T</i>); avalanche = light doping, high <i>V</i><sub>Z</sub>, impact ionisation (<i>V</i><sub>Z</sub> rises with <i>T</i>)',
          },
          {
            f: 'Solar I-V',
            note: 'short-circuit current <i>I</i><sub>SC</sub> (∝ intensity) and open-circuit voltage <i>V</i><sub>OC</sub>; max-power point at the knee (4th-quadrant curve)',
          },
          { f: 'Wavelength shortcut', note: '<i>λ</i>(nm) = 1240/<i>E</i><sub>g</sub>(eV)' },
        ],
        aids: [
          '<b>Bias map:</b> “Zener & Photodiode = Reverse; LED = Forward; Solar = None.”',
          '“Zener clamps like a weir — extra current spills, voltage stays.”',
          '“LED gives light, photodiode/solar take light — same gap, opposite direction.”',
        ],
      },
    ],
  },
];
