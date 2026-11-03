import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topic 05: pp. 114–121 of the Class 12 Physics Master Reference,
 * word for word: Combination of Capacitors, split at its Sections 1 to 8.
 * Figure 2.6 (referred to p. 115, drawn p. 116) and Figure 2.7 (referred to
 * p. 117, drawn p. 118) are redrawn in lib/diagrams/physics-12-02.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 114–121 ─────────────────────────
  {
    n: '05',
    title: 'Combination of Capacitors',
    kalam: 'A single capacitor rarely gives exactly the capacitance (or voltage rating) a circuit needs, so capacitors are wired together.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Among the most reliably tested topics in the chapter. CBSE Boards ask the series and parallel derivations and a numerical on equivalent capacitance. JEE Main almost guarantees a network-reduction problem (often with charge/voltage on individual capacitors). NEET keeps it lighter — equivalent capacitance and the “series gives less” idea. JEE Advanced reaches for mixed networks, symmetry, and the energy lost when charged capacitors are reconnected.',
      },
      {
        t: 'p',
        html: 'A single capacitor rarely gives exactly the capacitance (or voltage rating) a circuit needs, so capacitors are wired together. There are two basic ways, and they behave like opposites.',
      },
      {
        t: 'p',
        html: '<b>Series — capacitors in a single-file queue.</b> Connect capacitors end to end so the same charging path runs through all of them. Here’s the key physical fact: when the battery pushes charge +<i>Q</i> onto the first plate, that plate induces −<i>Q</i> on the facing plate, which (since the inner plates are connected and isolated) pushes +<i>Q</i> onto the next, and so on. <b>Every capacitor in series carries the same charge <i>Q</i>.</b> The battery’s voltage gets shared out across them — each takes a slice, and the slices add up to the total. Because each capacitor only sees a fraction of the voltage but holds the full charge, the combination stores that charge at a higher total voltage, which means <b>less</b> capacitance overall. Series capacitance is always smaller than the smallest member — like adding pipes end to end makes the flow harder.',
      },
      {
        t: 'p',
        html: '<b>Parallel — capacitors side by side.</b> Connect all the left plates together and all the right plates together, straight across the battery. Now <b>every capacitor sees the same voltage</b> <i>V</i> (they’re all clipped to the same two terminals), and each grabs as much charge as its own capacitance allows. The charges add up. More plates in parallel means more total area to store charge, so <b>parallel capacitance is the simple sum</b> — always larger than the largest member, like widening a road.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Spot which quantity is shared and the rest follows. <b>Series shares charge</b> (same <i>Q</i>, voltages add) ⇒ reciprocals add, like resistors in parallel. <b>Parallel shares voltage</b> (same <i>V</i>, charges add) ⇒ capacitances add directly, like resistors in series. Capacitors are the mirror image of resistors — if you remember one, you get the other by flipping “series” and “parallel.”',
      },
      {
        t: 'p',
        html: 'There’s a third situation worth flagging now: <b>reconnecting two already-charged capacitors.</b> Join them and charge sloshes from the higher-potential one to the lower until they settle at a <b>common potential</b>. Crucially, some energy is <b>lost</b> in the process unless the two potentials were already equal (as heat in the wires and a little radiation) — total charge is conserved, but total energy is not. This surprises students every year.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The series “same charge” rule assumes the inner plates start <b>uncharged and isolated</b> — true for a normal battery-charged series chain.<br>• These results assume <b>ideal</b> capacitors and connecting wires (no leakage, no resistance affecting the final state).<br>• “<i>C</i><sub>series</sub> < smallest” and “<i>C</i><sub>parallel</sub> > largest” are reliable sanity checks — if your answer violates them, you’ve mixed up the formulas.<br>• The common-potential and energy-loss results assume the two capacitors are connected <b>like plate to like plate</b> (positive to positive) unless stated otherwise.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Capacitors in series',
        main: '(same charge <i>Q</i> on each; voltages add):<br>1/<i>C</i><sub>series</sub> = 1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub> + ⋯ + 1/<i>C</i><sub><i>n</i></sub><br>For two: <i>C</i><sub>series</sub> = <i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)<br>For <i>n</i> equal capacitors <i>C</i>: <i>C</i><sub>series</sub> = <i>C</i>/<i>n</i><br>Charge common: <i>Q</i> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> = ⋯<br>Total voltage: <i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + ⋯',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Capacitors in parallel',
        main: '(same voltage <i>V</i> across each; charges add):<br><i>C</i><sub>parallel</sub> = <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + ⋯ + <i>C</i><sub><i>n</i></sub><br>Voltage common; total charge: <i>Q</i> = <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub> + ⋯<br><i>Q</i><sub><i>i</i></sub> = <i>C</i><sub><i>i</i></sub><i>V</i><br>For <i>n</i> equal: <i>C</i><sub>parallel</sub> = <i>nC</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Common potential',
        main: '(two capacitors, charges <i>Q</i><sub>1</sub>, <i>Q</i><sub>2</sub>, joined like-to-like):<br><i>V</i><sub>common</sub> = (<i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) = (<i>C</i><sub>1</sub><i>V</i><sub>1</sub> + <i>C</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Energy lost on redistribution',
        main: 'Δ<i>U</i><sub>lost</sub> = ½[<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)](<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup>',
        legend: [],
        note: 'Always ≥ 0: energy decreases whenever <i>V</i><sub>1</sub> ≠ <i>V</i><sub>2</sub>. Charge is conserved; energy is not.',
      },
      {
        t: 'p',
        html: '<b>Energy of the combination:</b> total stored energy adds, <i>U</i> = Σ<sub><i>i</i></sub> ½<i>C</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub><sup>2</sup> (each capacitor with its own <i>V</i><sub><i>i</i></sub>), or compute from the equivalent capacitor.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation A — Capacitors in series.</b>' },
      { t: 'fig', id: 'p12-02-fig-2.6' },
      {
        t: 'p',
        html: '<b>Setup:</b> Connect <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>, <i>C</i><sub>3</sub> end to end across a source of voltage <i>V</i>. The battery deposits +<i>Q</i> on the first plate and −<i>Q</i> on the last; by induction every capacitor carries the <b>same charge</b> <i>Q</i>.',
      },
      {
        t: 'p',
        html: '<b>The voltages add.</b> The total applied voltage is the sum of the individual drops:<br><i>V</i> = <i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> + <i>V</i><sub>3</sub>.<br>For each capacitor, <i>V</i><sub><i>i</i></sub> = <i>Q</i>/<i>C</i><sub><i>i</i></sub>. Substituting,<br><i>V</i> = <i>Q</i>/<i>C</i><sub>1</sub> + <i>Q</i>/<i>C</i><sub>2</sub> + <i>Q</i>/<i>C</i><sub>3</sub> = <i>Q</i>(1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub> + 1/<i>C</i><sub>3</sub>).',
      },
      {
        t: 'p',
        html: '<b>The equivalent capacitor</b> stores the same charge <i>Q</i> at the same total voltage <i>V</i>, so <i>V</i> = <i>Q</i>/<i>C</i><sub>series</sub>. Comparing,<br>1/<i>C</i><sub>series</sub> = 1/<i>C</i><sub>1</sub> + 1/<i>C</i><sub>2</sub> + 1/<i>C</i><sub>3</sub><br>Because we add reciprocals, <i>C</i><sub>series</sub> is smaller than the smallest capacitor.',
      },
      { t: 'p', html: '<b>Derivation B — Capacitors in parallel.</b>' },
      { t: 'fig', id: 'p12-02-fig-2.7' },
      {
        t: 'p',
        html: '<b>Setup:</b> Connect <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>, <i>C</i><sub>3</sub> side by side across the source, so each has the <b>same voltage</b> <i>V</i> across it.',
      },
      {
        t: 'p',
        html: '<b>The charges add.</b> Each capacitor draws its own charge <i>Q</i><sub><i>i</i></sub> = <i>C</i><sub><i>i</i></sub><i>V</i>, and the battery supplies the total:<br><i>Q</i> = <i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub> + <i>Q</i><sub>3</sub> = <i>C</i><sub>1</sub><i>V</i> + <i>C</i><sub>2</sub><i>V</i> + <i>C</i><sub>3</sub><i>V</i> = (<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub>)<i>V</i>.',
      },
      {
        t: 'p',
        html: '<b>The equivalent capacitor</b> holds this total charge at the same voltage <i>V</i>, so <i>Q</i> = <i>C</i><sub>parallel</sub><i>V</i>. Comparing,<br><i>C</i><sub>parallel</sub> = <i>C</i><sub>1</sub> + <i>C</i><sub>2</sub> + <i>C</i><sub>3</sub><br>Capacitances add directly, so the parallel value exceeds the largest member.',
      },
      { t: 'p', html: '<b>Derivation C — Common potential and energy loss.</b>' },
      {
        t: 'p',
        html: 'Two capacitors with charges <i>Q</i><sub>1</sub> = <i>C</i><sub>1</sub><i>V</i><sub>1</sub> and <i>Q</i><sub>2</sub> = <i>C</i><sub>2</sub><i>V</i><sub>2</sub> are joined like-to-like. Charge is conserved and they end at one common voltage <i>V</i><sub><i>c</i></sub>:<br><i>V</i><sub><i>c</i></sub> = (<i>Q</i><sub>1</sub> + <i>Q</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) = (<i>C</i><sub>1</sub><i>V</i><sub>1</sub> + <i>C</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>).<br>The energy before is ½<i>C</i><sub>1</sub><i>V</i><sub>1</sub><sup>2</sup> + ½<i>C</i><sub>2</sub><i>V</i><sub>2</sub><sup>2</sup>; after, it is ½(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)<i>V</i><sub><i>c</i></sub><sup>2</sup>. Subtracting and simplifying:<br>Δ<i>U</i><sub>lost</sub> = ½[<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)](<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup> ≥ 0.<br>The loss is unavoidable (dissipated as heat/radiation) and vanishes only if <i>V</i><sub>1</sub> = <i>V</i><sub>2</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Three capacitors of 2 μF, 3 μF, and 6 μF are available. Find the equivalent capacitance when they are connected (a) all in series, (b) all in parallel.',
        steps: [
          '(a) Series:<br>1/<i>C</i><sub><i>s</i></sub> = 1/2 + 1/3 + 1/6 = (3 + 2 + 1)/6 = 6/6 = 1',
          '(b) Parallel:<br><i>C</i><sub><i>p</i></sub> = 2 + 3 + 6',
        ],
        ans: '<i>C</i><sub><i>s</i></sub> = 1 μF (less than the smallest), <i>C</i><sub><i>p</i></sub> = 11 μF (more than the largest) — the sanity checks both hold.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Four identical capacitors, each of 4 μF, are connected first all in series, then all in parallel. Find both equivalent capacitances.',
        steps: [
          'The trap is adding series values directly (getting 16 μF for series). For <i>n</i> <b>equal</b> capacitors there’s no arithmetic to do:<br><i>C</i><sub>series</sub> = <i>C</i>/<i>n</i> = 4/4,   <i>C</i><sub>parallel</sub> = <i>nC</i> = 4 × 4',
          '<b>Speed rule:</b> <i>n</i> equal capacitors give <i>C</i>/<i>n</i> in series and <i>nC</i> in parallel — a factor of <i>n</i><sup>2</sup> between the two.',
        ],
        ans: 'series = 1 μF, parallel = 16 μF',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '(network reduction + charge/voltage on each capacitor) Capacitors <i>C</i><sub>1</sub> = 3 μF and <i>C</i><sub>2</sub> = 6 μF are in series, and this series pair is in parallel with <i>C</i><sub>3</sub> = 4 μF. The whole network is connected to a 12 V battery. Find (a) the equivalent capacitance, (b) the charge on <i>C</i><sub>3</sub>, and (c) the voltage across <i>C</i><sub>1</sub> and <i>C</i><sub>2</sub>.',
        steps: [
          '(a) Series pair: <i>C</i><sub>12</sub> = <i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) = (3 × 6)/(3 + 6) = 2 μF. In parallel with <i>C</i><sub>3</sub>:<br><i>C</i><sub>eq</sub> = <i>C</i><sub>12</sub> + <i>C</i><sub>3</sub> = 2 + 4',
          '(b) <i>C</i><sub>3</sub> has the full 12 V across it (parallel branch):<br><i>Q</i><sub>3</sub> = <i>C</i><sub>3</sub><i>V</i> = (4 μF)(12 V)',
          '(c) The series branch also has 12 V across it, storing charge <i>Q</i><sub>12</sub> = <i>C</i><sub>12</sub><i>V</i> = (2 μF)(12) = 24 μC — and this same charge sits on <b>both</b> <i>C</i><sub>1</sub> and <i>C</i><sub>2</sub>:<br><i>V</i><sub>1</sub> = <i>Q</i><sub>12</sub>/<i>C</i><sub>1</sub> = 24/3 = 8 V,   <i>V</i><sub>2</sub> = <i>Q</i><sub>12</sub>/<i>C</i><sub>2</sub> = 24/6 = 4 V   (<i>V</i><sub>1</sub> + <i>V</i><sub>2</sub> = 12 V ✓).',
        ],
        ans: '<i>C</i><sub>eq</sub> = 6 μF; <i>Q</i><sub>3</sub> = 48 μC; <i>V</i><sub>1</sub> = 8 V, <i>V</i><sub>2</sub> = 4 V',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '(common potential + energy loss on reconnection) A 4 μF capacitor charged to 100 V is connected (positive plate to positive plate) across a 6 μF capacitor charged to 50 V. Find (a) the common potential, (b) the final charge on each, (c) the energy lost.',
        steps: [
          '(a) Conserving charge:<br><i>V</i><sub><i>c</i></sub> = (<i>C</i><sub>1</sub><i>V</i><sub>1</sub> + <i>C</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) = ((4)(100) + (6)(50))/(4 + 6) = (400 + 300)/10',
          '(b) Final charges:<br><i>Q</i>′<sub>1</sub> = <i>C</i><sub>1</sub><i>V</i><sub><i>c</i></sub> = (4 μF)(70) = 280 μC,   <i>Q</i>′<sub>2</sub> = <i>C</i><sub>2</sub><i>V</i><sub><i>c</i></sub> = (6 μF)(70) = 420 μC.<br>(Check: total 700 μC = initial 400 + 300 μC ✓.)',
          '(c) Energy lost:<br>Δ<i>U</i> = ½[<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)](<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup> = ½ · (4)(6)/10 × 10<sup>−6</sup> × (50)<sup>2</sup> = ½(2.4 × 10<sup>−6</sup>)(2500)',
        ],
        ans: '<i>V</i><sub><i>c</i></sub> = 70 V; <i>Q</i>′<sub>1</sub> = 280 μC, <i>Q</i>′<sub>2</sub> = 420 μC; energy lost = 3 mJ (gone to heat — charge is conserved, energy is not).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two capacitors of 4 μF and 12 μF are connected (a) in series and (b) in parallel. Find each equivalent capacitance.',
            a: 'Series = 3 μF; parallel = 16 μF.',
          },
          {
            q: '[NEET] Three identical 9 μF capacitors are connected all in series, then all in parallel. Find both equivalent capacitances.',
            a: 'Series = 3 μF; parallel = 27 μF.',
          },
          {
            q: '[JEE Main] Capacitors of 2 μF and 4 μF are connected in series across a 6 V battery. Find the equivalent capacitance, the charge on each, and the voltage across each.',
            a: '<i>C</i><sub>eq</sub> = 4/3 μF; <i>Q</i> = 8 μC on each; <i>V</i><sub>2μF</sub> = 4 V, <i>V</i><sub>4μF</sub> = 2 V.',
          },
          {
            q: '[JEE Main] Capacitors of 5 μF, 10 μF, and 15 μF are connected in parallel across 20 V. Find the total charge and the charge on the 10 μF capacitor.',
            a: 'Total <i>Q</i> = 600 μC; on 10 μF: 200 μC.',
          },
          {
            q: '[JEE Advanced] A 2 μF capacitor charged to 200 V is connected across an uncharged 3 μF capacitor. Find the common potential and the energy lost.',
            a: '<i>V</i><sub><i>c</i></sub> = 80 V; energy lost = 0.024 J = 24 mJ.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'When capacitors are connected in series, the equivalent capacitance is:',
        opts: [
          { label: 'larger than the largest', nudge: '<b>(a)</b> and <b>(c)</b> have no basis for series.' },
          { label: 'smaller than the smallest', nudge: null },
          { label: 'the average of the values', nudge: '<b>(a)</b> and <b>(c)</b> have no basis for series.' },
          { label: 'the sum of the values', nudge: '<b>(d)</b> is the parallel rule, the most common mix-up.' },
        ],
        correct: 1,
        solution: 'Adding reciprocals always yields a value below the smallest member.',
      },
      {
        t: 'mcq',
        q: 'Three capacitors are connected in series across a battery. Which quantity is the same for all three?',
        opts: [
          { label: 'the voltage across each', nudge: '<b>(a)</b> is the parallel property.' },
          { label: 'the charge on each', nudge: null },
          { label: 'the energy in each', nudge: '<b>(c)</b> and <b>(d)</b> hold only for identical capacitors, not in general.' },
          { label: 'the capacitance of each', nudge: '<b>(c)</b> and <b>(d)</b> hold only for identical capacitors, not in general.' },
        ],
        correct: 1,
        solution: 'Series capacitors carry identical charge; the voltage is what gets shared.',
      },
      {
        t: 'mcq',
        q: 'Capacitors in parallel across a source all share the same:',
        opts: [
          { label: 'charge', nudge: '<b>(a)</b> is the series property — the classic inversion.' },
          { label: 'voltage', nudge: null },
          { label: 'energy', nudge: '<b>(c)</b> and <b>(d)</b> are not shared quantities.' },
          { label: 'reciprocal capacitance', nudge: '<b>(c)</b> and <b>(d)</b> are not shared quantities.' },
        ],
        correct: 1,
        solution: 'Being clipped across the same two terminals, every parallel capacitor sees the same voltage; charges differ according to <i>Q</i><sub><i>i</i></sub> = <i>C</i><sub><i>i</i></sub><i>V</i>.',
      },
      {
        t: 'mcq',
        q: 'Two capacitors charged to different potentials are connected together. Compared with before, the total stored energy:',
        opts: [
          { label: 'increases', nudge: '<b>(a)</b> violates energy conservation; <b>(d)</b> would need all charge to vanish.' },
          { label: 'stays the same', nudge: '<b>(b)</b> is the seductive “conservation” trap — charge is conserved, energy is not.' },
          { label: 'decreases', nudge: null },
          { label: 'becomes zero', nudge: '<b>(a)</b> violates energy conservation; <b>(d)</b> would need all charge to vanish.' },
        ],
        correct: 2,
        solution: 'Charge is conserved but some energy is always dissipated as heat/radiation, given by ½[<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)](<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the series and parallel formulas.</b> Capacitors are the opposite of resistors: capacitors <b>add in parallel</b>, add <b>reciprocally in series</b>. Anchor it with the shared quantity — series shares charge, parallel shares voltage.',
          '<b>Forgetting “same charge” in series / “same voltage” in parallel.</b> This is what lets you find the voltage or charge on an individual capacitor inside a network. Get it backwards and every per-capacitor value is wrong.',
          '<b>Skipping the sanity check.</b> Series must come out below the smallest; parallel above the largest. A quick glance catches most slips.',
          '<b>Assuming energy is conserved on reconnection.</b> It isn’t — only charge is. There’s always a loss unless the two voltages were already equal.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & sanity):</b> Reduce networks in stages, redrawing after each step, and label the charge/voltage you know at every node. For two capacitors, memorise <i>C</i><sub><i>s</i></sub> = <i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) (“product over sum”) — far faster than reciprocals. And for <i>n</i> equal capacitors, jump straight to <i>C</i>/<i>n</i> (series) or <i>nC</i> (parallel).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Series',
            note: '1/<i>C</i><sub><i>s</i></sub> = Σ<sub><i>i</i></sub> 1/<i>C</i><sub><i>i</i></sub>; same <b>charge</b> <i>Q</i> on each; voltages add; <i>C</i><sub><i>s</i></sub> < smallest. Two: <i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>).',
          },
          {
            f: 'Parallel',
            note: '<i>C</i><sub><i>p</i></sub> = Σ<sub><i>i</i></sub> <i>C</i><sub><i>i</i></sub>; same <b>voltage</b> <i>V</i> across each; charges add; <i>C</i><sub><i>p</i></sub> > largest.',
          },
          { f: 'Mirror of resistors', note: 'capacitors add in parallel, reciprocally in series.' },
          {
            f: 'Common potential',
            note: '<i>V</i><sub><i>c</i></sub> = (<i>C</i><sub>1</sub><i>V</i><sub>1</sub> + <i>C</i><sub>2</sub><i>V</i><sub>2</sub>)/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>) (charge conserved).',
          },
          {
            f: 'Energy lost on reconnection',
            note: 'Δ<i>U</i> = ½[<i>C</i><sub>1</sub><i>C</i><sub>2</sub>/(<i>C</i><sub>1</sub> + <i>C</i><sub>2</sub>)](<i>V</i><sub>1</sub> − <i>V</i><sub>2</sub>)<sup>2</sup> ≥ 0.',
          },
          { f: '<i>n</i> equal capacitors', note: '<i>C</i>/<i>n</i> (series), <i>nC</i> (parallel).' },
        ],
        aids: [
          '“Series shares charge; parallel shares voltage.”',
          '“Capacitors are upside-down resistors.”',
          '“Series < smallest; parallel > largest.”',
          '“Reconnect ⇒ charge conserved, energy lost.”',
        ],
      },
    ],
  },
];
