import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Topic 02: pp. 878–889 of the Class 12 Physics Master Reference,
 * word for word: the book's sub-topic "p-n Junction Diode and Applications",
 * split at its Sections 1 to 8. The book prints Figures 14.4 (caption p. 878,
 * drawn p. 879), 14.5 (881/882), 14.6 (883/884) and 14.7 (883/884) on
 * "CHAPTER 14 · FIGURES" pages and never refers to them; each is set beside the
 * text it illustrates (14.4 after the depletion-region paragraph, 14.5 after
 * Derivation A, 14.6 after Derivation B, 14.7 after the filter paragraph),
 * redrawn in lib/diagrams/physics-12-14.ts. The one cross-reference ("from
 * Section 3") is rewritten to the part's name.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 878–889 ─────────────────────────
  {
    n: '02',
    title: 'p-n Junction Diode and Applications',
    kalam:
      'Take a single crystal of silicon and, by doping, make one half p-type (rich in holes) and the other half n-type (rich in free electrons).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The workhorse of the chapter. CBSE Boards almost guarantee a 2–3 mark question on junction formation, biasing, or the rectifier (often a circuit/waveform). NEET leans on quick conceptual traps — biasing direction, reverse saturation current, rectifier frequency. JEE Main loves circuit numericals (current with a barrier drop, rectifier efficiency); JEE Advanced reaches for the ideal-diode exponential and depletion-region electrostatics.',
      },
      {
        t: 'p',
        html: 'Take a single crystal of silicon and, by doping, make one half p-type (rich in holes) and the other half n-type (rich in free electrons). The boundary where they meet is a <b>p-n junction</b> — and almost every semiconductor device you will ever meet is built on this one idea. NCERT calls the p-n junction “the key to all semiconductor devices,” and that is not an exaggeration.',
      },
      {
        t: 'p',
        html: 'The instant the two regions sit side by side, something dramatic happens at the boundary. The n-side is crowded with electrons; the p-side is crowded with holes. Nature hates a concentration gradient, so electrons go tumbling from the n-side into the p-side, and holes move the other way — this is <b>diffusion</b>, driven purely by crowding, exactly like a drop of ink spreading in still water. But every electron that leaves the n-side abandons a fixed, positively charged donor ion; every hole that leaves the p-side leaves behind a fixed, negative acceptor ion. These immobile ions cannot move — they are locked into the lattice.',
      },
      {
        t: 'p',
        html: 'So a thin zone right at the junction empties out of mobile carriers and fills with fixed charge: positive ions on the n-side, negative ions on the p-side. This carrier-free zone is the <b>depletion region</b>. The exposed ions set up an internal electric field pointing from the n-side to the p-side, and a built-in voltage called the <b>barrier potential</b> (<i>V</i><sub>b</sub>) — about 0.3 V for germanium and 0.7 V for silicon.',
      },
      { t: 'fig', id: 'p12-14-fig-14.4' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture two adjacent neighbourhoods, one packed with people who want to spread out (electrons), one with lots of empty plots (holes). At first people rush across the border. But every person who crosses is “registered” at a checkpoint — building up a wall of paperwork (the fixed ions) that makes the next crossing harder. Eventually the wall (barrier potential) is tall enough that the flood of border-crossers (diffusion) is exactly balanced by the trickle pushed back by the wall’s field (drift of minority carriers). The border settles into a quiet equilibrium with a deserted “no-man’s-land” — the depletion region — right at the line.',
      },
      {
        t: 'p',
        html: 'Now the magic: this junction behaves like a <b>one-way valve</b> for current. Connect a battery so the p-side goes to + and the n-side to − (<b>forward bias</b>). The battery’s field opposes the built-in field, so the effective barrier shrinks to <i>V</i><sub>b</sub> − <i>V</i>, the depletion region narrows, and once <i>V</i> crosses the barrier, majority carriers come flooding across — current rises steeply. Flip the battery (<b>reverse bias</b>, n-side to +): now the external field adds to the barrier, the depletion region widens, and majority carriers are pushed away from the junction. Almost no current flows — only a tiny <b>reverse saturation current</b> carried by the few thermally generated minority carriers. That asymmetry — easy flow one way, blocked the other — is the whole basis of the diode.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> You cannot make a junction by pressing a p-slab against an n-slab; the surfaces are rough on a scale thousands of times bigger than atomic spacing, so the contact is a broken discontinuity, not a junction — it must be grown as a single crystal. The barrier values (0.3 V, 0.7 V) are room-temperature approximations and drift with temperature. The “no current in reverse” picture holds only below the <b>breakdown voltage</b> (<i>V</i><sub>br</sub>); beyond it, reverse current shoots up and an unprotected diode is destroyed by overheating. And the clean “ideal diode” (zero forward resistance, infinite reverse resistance) is an idealisation we use to simplify circuits.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Effective barrier under bias',
        main: '<i>V</i><sub>eff</sub> = <i>V</i><sub>b</sub> − <i>V</i> (forward)<br><i>V</i><sub>eff</sub> = <i>V</i><sub>b</sub> + <i>V</i> (reverse)',
        legend: [
          '<i>V</i><sub>b</sub> = barrier (built-in) potential (V)',
          '<i>V</i> = applied bias voltage (V)',
          '<i>V</i><sub>eff</sub> = effective barrier height (V)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Current in a simple diode circuit (with barrier drop and forward resistance)',
        main: '<i>I</i> = (<i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>)/(<i>R</i> + <i>r</i><sub>f</sub>)',
        legend: [
          '<i>V</i><sub>b</sub> = barrier (built-in) potential (V)',
          '<i>r</i><sub>f</sub> = diode forward resistance (Ω)',
          '<i>V</i><sub>battery</sub> = battery voltage (V)',
          '<i>R</i> = series resistance (Ω)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Dynamic (a.c.) resistance of the diode',
        main: '<i>r</i><sub>d</sub> = Δ<i>V</i>/Δ<i>I</i>',
        legend: [
          '<i>r</i><sub>d</sub> = dynamic resistance (Ω)',
          'Δ<i>V</i>, Δ<i>I</i> = small changes in diode voltage and current',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Electric field in the depletion region (uniform-field model)',
        main: '<i>E</i> = <i>V</i><sub>b</sub>/<i>d</i>',
        legend: [
          '<i>E</i> = electric field in the depletion region (V m<sup>−1</sup>)',
          '<i>V</i><sub>b</sub> = barrier (built-in) potential (V)',
          '<i>d</i> = depletion-region width (m)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Ideal (Shockley) diode equation',
        main: '<i>I</i> = <i>I</i><sub>S</sub>(exp(<i>eV</i>/(<i>k</i><sub>B</sub><i>T</i>)) − 1)<br><i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> ≈ 25.9 mV at 300 K',
        legend: [
          '<i>I</i><sub>S</sub> = reverse saturation current (A)',
          '<i>V</i><sub>T</sub> = thermal voltage (V)',
          '<i>V</i> = forward voltage (V)',
          '<i>k</i><sub>B</sub> = Boltzmann constant',
          '<i>e</i> = elementary charge, 1.6 × 10<sup>−19</sup> C',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rectifier metrics',
        main: 'Half-wave: <i>η</i><sub>max</sub> = 40.6%, <i>f</i><sub>out</sub> = <i>f</i><sub>in</sub>, <i>η</i> = 0.406 <i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>)<br>Full-wave: <i>η</i><sub>max</sub> = 81.2%, <i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub>, <i>η</i> = 0.812 <i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>)<br><i>I</i><sub>dc</sub><sup>(half)</sup> = <i>I</i><sub>m</sub>/π<br><i>I</i><sub>dc</sub><sup>(full)</sup> = 2<i>I</i><sub>m</sub>/π<br><i>I</i><sub>rms</sub><sup>(half)</sup> = <i>I</i><sub>m</sub>/2',
        legend: [
          '<i>η</i> = rectifier efficiency',
          '<i>r</i><sub>f</sub> = diode forward resistance (Ω)',
          '<i>R</i><sub>L</sub> = load resistance (Ω)',
          '<i>f</i><sub>in</sub> = input frequency (Hz)',
          '<i>f</i><sub>out</sub> = output frequency (Hz)',
          '<i>I</i><sub>m</sub> = peak load current',
          '<i>I</i><sub>dc</sub> = d.c. (average) load current (A)',
          '<i>I</i><sub>rms</sub> = r.m.s. load current (A)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Symbol dictionary:</b><br>• <i>V</i><sub>b</sub> — barrier (built-in) potential (V); <i>V</i><sub>br</sub> — breakdown voltage (V)<br>• <i>r</i><sub>f</sub> — diode forward resistance; <i>r</i><sub>d</sub> — dynamic resistance (Ω)<br>• <i>I</i><sub>S</sub> — reverse saturation current (A); <i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> — thermal voltage (V)<br>• <i>d</i> — depletion-region width (m); <i>E</i> — electric field in the depletion region (V m<sup>−1</sup>)<br>• <i>η</i> — rectifier efficiency; <i>I</i><sub>m</sub> — peak load current; <i>f</i><sub>in</sub>, <i>f</i><sub>out</sub> — input/output frequency (Hz)<br>• <i>I</i><sub>dc</sub>, <i>I</i><sub>rms</sub> — d.c. (average) and r.m.s. load currents (A)',
      },
      {
        t: 'p',
        html: '<b>Dimensional formulae (core quantities):</b><br>• Barrier potential <i>V</i><sub>b</sub> (potential): [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]<br>• Electric field <i>E</i>: [M L T<sup>−3</sup> A<sup>−1</sup>]<br>• Dynamic resistance <i>r</i><sub>d</sub>: [M L<sup>2</sup> T<sup>−3</sup> A<sup>−2</sup>]<br>• Thermal voltage <i>V</i><sub>T</sub> (potential): [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]<br>• Efficiency <i>η</i>: dimensionless, [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      {
        t: 'p',
        html: '<b>Assumption:</b> an abrupt junction in a single crystal, p and n uniformly doped, at thermal equilibrium with no external bias.',
      },
      {
        t: 'proc',
        title: 'Derivation A — Origin of the barrier potential at equilibrium',
        steps: [
          '<b>Diffusion begins.</b> Because <i>n</i><sub>e</sub> is huge on the n-side and tiny on the p-side (and vice-versa for holes), the concentration gradient drives electrons n→p and holes p→n. This <b>diffusion current</b> flows, by convention, from p to n.',
          '<b>Fixed charge appears.</b> Each departing electron uncovers a fixed positive donor ion on the n-side; each departing hole uncovers a fixed negative acceptor ion on the p-side. The junction now has a dipole layer of immobile charge — the depletion region — with no mobile carriers left inside it.',
          '<b>A field opposes further diffusion.</b> This fixed dipole sets up an electric field <i>E⃗</i> from n to p. The field pushes any stray minority carrier across the junction, producing a small <b>drift current</b> from n to p (opposite in sense to diffusion).',
          '<b>Equilibrium.</b> Diffusion empties carriers across; drift pushes them back. The barrier grows until <b>diffusion current exactly cancels drift current</b>, giving zero net current. The potential difference built up at this balance point is the <b>barrier potential</b> <i>V</i><sub>b</sub>. The physical reasoning is the whole point: <i>V</i><sub>b</sub> is not imposed from outside — it is the self-built voltage at which the crystal stops its own diffusion.',
        ],
      },
      { t: 'fig', id: 'p12-14-fig-14.5' },
      {
        t: 'proc',
        title: 'Derivation B — Why forward bias lowers, and reverse bias raises, the barrier',
        steps: [
          '<b>Forward bias</b> (p → +, n → −): the battery field points p→n, opposing the internal field. Net barrier drops to <i>V</i><sub>b</sub> − <i>V</i>. With a lower wall, vastly more majority carriers have enough energy to diffuse across, so current grows — and because the population able to cross rises exponentially with the lowered barrier, the forward I-V curve climbs <b>exponentially</b> past the knee voltage. The depletion region also narrows (less exposed fixed charge needed), lowering resistance.',
          '<b>Reverse bias</b> (n → +, p → −): the battery field aids the internal field. Net barrier rises to <i>V</i><sub>b</sub> + <i>V</i>. Majority carriers are pulled away from the junction, the depletion region <b>widens</b>, and only the trickle of thermally generated minority carriers crosses — the reverse saturation current, nearly independent of voltage until breakdown.',
        ],
      },
      { t: 'fig', id: 'p12-14-fig-14.6' },
      { t: 'p', html: '<b>Procedure — Solving a diode circuit (the exam-safe method)</b>' },
      {
        t: 'p',
        html: 'A diode is <b>non-ohmic</b>, so never write <i>V</i> = <i>IR</i> across the diode itself. Instead: (i) decide bias direction from the polarity; (ii) if reverse-biased, treat the branch as an open circuit (no current); (iii) if forward-biased, replace the diode by a constant voltage drop equal to <i>V</i><sub>b</sub> (0.3 V Ge, 0.7 V Si) — a “battery in the wire”; (iv) apply Kirchhoff/Ohm to the rest of the circuit. This reduces almost any board/JEE-Main diode circuit to ordinary series–parallel resistor algebra.',
      },
      { t: 'p', html: '<b>The filter — turning pulsating output into steady DC</b>' },
      {
        t: 'p',
        html: 'A rectifier alone gives pulsating DC, not the smooth DC a circuit actually needs. The fix is a <b>filter</b>: a large capacitor placed across the load. During each output pulse the capacitor charges up to the peak voltage; when the pulse falls, the capacitor discharges slowly through the load, holding the voltage up until the next pulse tops it off again. The small residual fluctuation that remains is called the <b>ripple</b>. The rate of discharge is set by the time constant <i>τ</i> = <i>R</i><sub>L</sub><i>C</i> — a large <i>C</i> makes <i>τ</i> large, the discharge slow, and the output closer to a flat line near the peak value. This is why power-supply filters use big capacitors, and why a full-wave rectifier (whose pulses arrive twice as often) is far easier to smooth than a half-wave one.',
      },
      { t: 'fig', id: 'p12-14-fig-14.7' },
      {
        t: 'p',
        html: '<b>Two ways to build a full-wave rectifier</b><br>• <b>Centre-tap rectifier:</b> uses a centre-tapped transformer and <b>two</b> diodes, each conducting on alternate half-cycles. Simple, but needs the special transformer.<br>• <b>Bridge rectifier:</b> uses <b>four</b> diodes in a bridge and needs no centre-tapped transformer — on each half-cycle two diodes conduct in series to send current the same way through the load. It is the most widely used arrangement in practice. Both produce identical full-wave output (<i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub>, <i>η</i><sub>max</sub> = 81.2%).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A silicon diode (barrier potential 0.7 V, negligible forward resistance) is connected in series with a resistor <i>R</i> = 430 Ω across a 5 V battery, with the p-side toward the positive terminal. Find the current in the circuit.',
        steps: [
          '<b>Given:</b> <i>V</i><sub>battery</sub> = 5 V, <i>V</i><sub>b</sub> = 0.7 V, <i>R</i> = 430 Ω, <i>r</i><sub>f</sub> ≈ 0.',
          '<b>Reasoning:</b> p-side to +, so the diode is forward biased and conducts. Of the 5 V, 0.7 V is dropped across the diode; the rest drives current through <i>R</i>.',
          '<b>Formula & substitution:</b><br><i>I</i> = (<i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>)/<i>R</i> = (5 − 0.7)/430 = 4.3/430 = 0.010 A',
          '<b>Sanity check:</b> had we forgotten the barrier drop we’d get 5/430 ≈ 11.6 mA — the 0.7 V subtraction is exactly the marks-losing step students skip.',
        ],
        ans: 'The current is 10 mA.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A germanium diode (<i>V</i><sub>b</sub> = 0.3 V) and a silicon diode (<i>V</i><sub>b</sub> = 0.7 V) are connected <b>in parallel</b>, both forward-biased, in series with a resistor across a battery. Which diode actually conducts?',
        steps: [
          '<b>The trap:</b> “both are forward biased, so both conduct.” Wrong.',
          '<b>Speed reasoning:</b> the two diodes share the same voltage (they’re in parallel). As the voltage rises, the <b>germanium</b> diode reaches its 0.3 V threshold first and starts conducting. Once it conducts, it clamps the shared voltage at ∼0.3 V — which never lets the silicon diode reach its 0.7 V threshold. So the Si diode stays effectively off.',
          '<b>General rule worth banking:</b> among parallel forward diodes, the one with the <b>lowest barrier potential wins</b> and holds the others off. (In series the logic is different: the same current flows through both, so both must conduct and their barriers add, 0.3 V + 0.7 V = 1.0 V.)',
        ],
        ans: '<b>Only the germanium diode conducts.</b>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A half-wave rectifier uses a diode of forward resistance <i>r</i><sub>f</sub> = 20 Ω feeding a load <i>R</i><sub>L</sub> = 980 Ω. The peak voltage of the a.c. source is <i>V</i><sub>m</sub> = 10 V. Find (a) the peak load current, (b) the d.c. (average) load current, and (c) the rectification efficiency.',
        steps: [
          '<b>(a) Peak current</b> — Ohm’s law at the crest:<br><i>I</i><sub>m</sub> = <i>V</i><sub>m</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>) = 10/(20 + 980) = 10/1000 = 0.010 A = 10 mA',
          '<b>(b) D.C. current</b> — for a half-wave rectifier, <i>I</i><sub>dc</sub> = <i>I</i><sub>m</sub>/π:<br><i>I</i><sub>dc</sub> = (10 mA)/π = 3.18 mA',
          '<b>(c) Efficiency</b> — combine the rectifier metric with the resistance ratio:<br><i>η</i> = 0.406 <i>R</i><sub>L</sub>/(<i>r</i><sub>f</sub> + <i>R</i><sub>L</sub>) = (0.406 × 980)/1000 = 0.398 = 39.8%',
          'Two ideas linked: forward-bias Ohmic behaviour (for <i>I</i><sub>m</sub>) and the rectifier’s averaging/efficiency relations. Note <i>η</i> sits just under the 40.6% ceiling because <i>r</i><sub>f</sub> is not zero.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A germanium junction at <i>T</i> = 300 K obeys the ideal diode equation <i>I</i> = <i>I</i><sub>S</sub>(<i>e</i><sup><i>eV</i>/(<i>k</i><sub>B</sub><i>T</i>)</sup> − 1) with reverse saturation current <i>I</i><sub>S</sub> = 2.0 × 10<sup>−9</sup> A. (a) Find the forward current at <i>V</i> = 0.30 V. (b) Show that, in the strongly-forward regime, the voltage increase needed to double the current is independent of the current, and compute it.',
        steps: [
          '<b>Setup — thermal voltage:</b><br><i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> = ((1.38 × 10<sup>−23</sup>)(300))/(1.6 × 10<sup>−19</sup>) = 0.0259 V = 25.9 mV',
          '<b>(a)</b> With <i>V</i> = 0.30 V, the exponent is <i>V</i>/<i>V</i><sub>T</sub> = 0.30/0.0259 = 11.6. Since <i>e</i><sup>11.6</sup> ≈ 1.09 × 10<sup>5</sup> ≫ 1, drop the −1:<br><i>I</i> ≈ <i>I</i><sub>S</sub><i>e</i><sup><i>V</i>/<i>V</i><sub>T</sub></sup> = (2.0 × 10<sup>−9</sup>)(1.09 × 10<sup>5</sup>) = 2.2 × 10<sup>−4</sup> A ≈ 0.22 mA',
          '<b>(b)</b> In the regime <i>I</i> ≈ <i>I</i><sub>S</sub><i>e</i><sup><i>V</i>/<i>V</i><sub>T</sub></sup>, doubling the current requires<br><i>I</i><sub>2</sub>/<i>I</i><sub>1</sub> = <i>e</i><sup>(<i>V</i><sub>2</sub> − <i>V</i><sub>1</sub>)/<i>V</i><sub>T</sub></sup> = 2 ⇒ Δ<i>V</i> = <i>V</i><sub>T</sub> ln 2 = (25.9 mV)(0.693) = 18 mV',
          'Δ<i>V</i> contains no reference to the actual current — so <b>every</b> doubling, anywhere on the steep part of the curve, costs the same ∼18 mV. (Equivalently, ∼60 mV per tenfold rise, since <i>V</i><sub>T</sub> ln 10 ≈ 59.6 mV.) This logarithmic stiffness is exactly why a forward diode behaves like an almost-fixed voltage drop — the cornerstone of the “replace the diode with <i>V</i><sub>b</sub>” trick from CBSE board derivations / key procedures.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define the depletion region and the barrier potential of a p-n junction, and state typical barrier-potential values for germanium and silicon diodes.',
            a: 'Depletion region = carrier-free zone of fixed ions at the junction; barrier potential = built-in voltage opposing diffusion. <i>V</i><sub>b</sub> ≈ 0.3 V (Ge), ≈ 0.7 V (Si).',
          },
          {
            q: '[NEET] A full-wave rectifier is supplied with 60 Hz a.c. State the fundamental ripple frequency of its output, and state which is more efficient — a half-wave or a full-wave rectifier — giving the maximum efficiency of each.',
            a: '<i>f</i><sub>out</sub> = 120 Hz; full-wave is more efficient (<i>η</i><sub>max</sub> = 81.2% vs 40.6% for half-wave).',
          },
          {
            q: '[JEE Main] The depletion region of a p-n junction is 2.0 μm wide and the barrier potential is 0.30 V. Assuming a uniform field, find the magnitude and direction of the electric field at the junction.',
            a: '<i>E</i> = <i>V</i><sub>b</sub>/<i>d</i> = 0.30/(2.0 × 10<sup>−6</sup>) = 1.5 × 10<sup>5</sup> V m<sup>−1</sup>, directed from the n-side to the p-side.',
          },
          {
            q: '[JEE Main] A germanium diode (<i>V</i><sub>b</sub> = 0.3 V, forward resistance <i>r</i><sub>f</sub> = 15 Ω) is forward-biased by a 6 V battery in series with <i>R</i> = 285 Ω. Find the current in the circuit.',
            a: '<i>I</i> = (6 − 0.3)/(285 + 15) = 5.7/300 = 19 mA.',
          },
          {
            q: '[JEE Advanced] An ideal diode at 300 K (<i>V</i><sub>T</sub> = 25.9 mV) carries current <i>I</i><sub>1</sub> at a forward voltage of 0.20 V. By what factor does the current increase when the forward voltage is raised to 0.26 V at the same temperature?',
            a: 'Factor = <i>e</i><sup>(0.26 − 0.20)/0.0259</sup> = <i>e</i><sup>2.317</sup> ≈ 10.1 — roughly a tenfold increase (one “decade” per ∼60 mV).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'When a p-n junction is reverse biased, the width of the depletion region and the barrier potential respectively:',
        opts: [
          {
            label: 'decrease, decrease',
            nudge: '<b>(A)</b> is the forward-bias behaviour — chosen by students who swap the two cases.',
          },
          { label: 'increase, increase', nudge: null },
          {
            label: 'increase, decrease',
            nudge: '<b>(C)</b> and <b>(D)</b> mix one correct half with one wrong half, catching anyone who reasons about width and barrier independently instead of recognising they move together.',
          },
          {
            label: 'stay the same, increase',
            nudge: '<b>(C)</b> and <b>(D)</b> mix one correct half with one wrong half, catching anyone who reasons about width and barrier independently instead of recognising they move together.',
          },
        ],
        correct: 1,
        solution: 'The external field aids the built-in field, sweeping majority carriers away from the junction; more fixed ions are exposed (wider depletion region) and the effective barrier rises to <i>V</i><sub>b</sub> + <i>V</i>.',
      },
      {
        t: 'mcq',
        q: 'A half-wave rectifier is operated from a 50 Hz a.c. mains. The frequency of the output (rectified) voltage is:',
        opts: [
          { label: '25 Hz', nudge: '<b>(A)</b> would need one output pulse every two input cycles; no rectifier halves the frequency.' },
          { label: '50 Hz', nudge: null },
          {
            label: '100 Hz',
            nudge: '<b>(C)</b> is the full-wave answer (2<i>f</i> = 100 Hz) — the single most common slip, from misremembering which rectifier doubles the frequency.',
          },
          {
            label: 'zero',
            nudge: '<b>(D)</b> tempts students who confuse “d.c. output” with “zero frequency,” forgetting the output is pulsating d.c.',
          },
        ],
        correct: 1,
        solution: 'A half-wave rectifier passes one pulse per input cycle, so the output pulse frequency equals the input frequency, 50 Hz.',
      },
      {
        t: 'mcq',
        q: 'The small current that flows through a p-n junction under reverse bias (below breakdown) is due to:',
        opts: [
          {
            label: 'majority carriers',
            nudge: '<b>(A)</b> reverses the logic — majority carriers are precisely what reverse bias suppresses.',
          },
          { label: 'minority carriers', nudge: null },
          {
            label: 'breakdown of covalent bonds in the depletion region only',
            nudge: '<b>(C)</b> describes breakdown, a different, higher-voltage regime in which the field itself rips electrons from bonds; below breakdown the minority carriers come from bonds broken by heat throughout the crystal, not only in the depletion region.',
          },
          {
            label: 'the barrier potential',
            nudge: '<b>(D)</b> confuses the cause (minority carriers) with the field that drives them.',
          },
        ],
        correct: 1,
        solution: 'Reverse bias blocks majority carriers but helps the thermally generated minority carriers across, producing the small, nearly voltage-independent reverse saturation (leakage) current.',
      },
      {
        t: 'mcq',
        q: 'For an ideal diode, the forward and reverse resistances are respectively:',
        opts: [
          {
            label: 'infinite and zero',
            nudge: '<b>(A)</b> flips the two — the classic error from forgetting which bias conducts.',
          },
          { label: 'zero and infinite', nudge: null },
          {
            label: 'zero and zero',
            nudge: '<b>(C)</b> would make it a plain wire (conducts both ways), <b>(D)</b> an insulator (conducts neither) — both destroy the one-way-valve property that defines a diode.',
          },
          {
            label: 'infinite and infinite',
            nudge: '<b>(C)</b> would make it a plain wire (conducts both ways), <b>(D)</b> an insulator (conducts neither) — both destroy the one-way-valve property that defines a diode.',
          },
        ],
        correct: 1,
        solution: 'An ideal diode is a perfect closed switch when forward biased (zero resistance) and a perfect open switch when reverse biased (infinite resistance).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating the diode as ohmic.</b> Never apply <i>V</i> = <i>IR</i> across the diode. It is non-ohmic; model it as a fixed <i>V</i><sub>b</sub> drop (forward) or an open circuit (reverse), then use Ohm’s law on everything else.',
          '<b>Forgetting the barrier drop.</b> In a forward circuit the usable driving voltage is <i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>, not the full battery voltage. Dropping the −<i>V</i><sub>b</sub> is the most frequent numerical error.',
          '<b>Swapping forward/reverse effects on the depletion region.</b> Forward bias narrows it (lower barrier, more current); reverse bias widens it (higher barrier, almost no current).',
          '<b>Mixing up rectifier numbers.</b> Half-wave: <i>f</i><sub>out</sub> = <i>f</i><sub>in</sub>, <i>η</i><sub>max</sub> = 40.6%. Full-wave: <i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub>, <i>η</i><sub>max</sub> = 81.2%. Memorise them as a pair so you never half-remember one.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any diode circuit, redraw it twice using the switch model — “forward = wire (or 0.7 V battery), reverse = gap.” The problem collapses into resistor algebra in seconds, and you’ll instantly spot which branches are dead.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Junction at equilibrium',
            note: 'diffusion vs drift balance → <b>depletion region</b> (fixed ions, no mobile carriers) + <b>barrier potential</b> <i>V</i><sub>b</sub> (Ge ≈ 0.3 V, Si ≈ 0.7 V); internal field points <b>n → p</b>',
          },
          {
            f: 'Forward bias (p → +)',
            note: 'barrier → <i>V</i><sub>b</sub> − <i>V</i>, region narrows, current rises <b>exponentially</b> past the knee',
          },
          {
            f: 'Reverse bias (n → +)',
            note: 'barrier → <i>V</i><sub>b</sub> + <i>V</i>, region widens, only tiny <b>reverse saturation current</b> (minority carriers) until <b>breakdown</b> <i>V</i><sub>br</sub>',
          },
          {
            f: 'Circuit current',
            note: '<i>I</i> = (<i>V</i><sub>battery</sub> − <i>V</i><sub>b</sub>)/(<i>R</i> + <i>r</i><sub>f</sub>) — always subtract the barrier',
          },
          {
            f: 'Ideal diode equation',
            note: '<i>I</i> = <i>I</i><sub>S</sub>(<i>e</i><sup><i>V</i>/<i>V</i><sub>T</sub></sup> − 1), <i>V</i><sub>T</sub> = <i>k</i><sub>B</sub><i>T</i>/<i>e</i> ≈ 25.9 mV at 300 K; <b>∼60 mV per decade</b> of current',
          },
          {
            f: 'Rectifier',
            note: 'half-wave <i>η</i><sub>max</sub> = 40.6%, <i>f</i><sub>out</sub> = <i>f</i><sub>in</sub>; full-wave <i>η</i><sub>max</sub> = 81.2%, <i>f</i><sub>out</sub> = 2<i>f</i><sub>in</sub>; <i>I</i><sub>dc</sub><sup>half</sup> = <i>I</i><sub>m</sub>/π, <i>I</i><sub>dc</sub><sup>full</sup> = 2<i>I</i><sub>m</sub>/π',
          },
          {
            f: 'Filter & bridge',
            note: 'capacitor across load smooths pulsating DC (large <i>C</i> → small ripple, <i>τ</i> = <i>R</i><sub>L</sub><i>C</i>); bridge rectifier = 4 diodes, no centre-tap needed',
          },
        ],
        aids: [
          '“Forward = Friendly, barrier Falls; Reverse = Resists, barrier Rises.”',
          '“Diode = one-way valve: zero <i>R</i> forward, infinite <i>R</i> reverse.”',
          '“Full wave is Fully better — double the frequency, double the efficiency.”',
        ],
      },
    ],
  },
];
