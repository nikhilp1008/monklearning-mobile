import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 08: pp. 219–229 of the Class 12 Physics Master Reference,
 * word for word: Wheatstone Bridge & Measuring Instruments, split at its
 * Sections 1 to 8. Figure 3.19 (referred to p. 221, drawn p. 222) is redrawn
 * in lib/diagrams/physics-12-03.ts. The Master Appendix that follows (p. 230)
 * is not part of this topic.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 08 · pp. 219–229 ─────────────────────────
  {
    n: '08',
    title: 'Wheatstone Bridge & Measuring Instruments',
    kalam: 'A measurement made at zero current is a measurement that doesn’t disturb what it measures.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. CBSE Boards regularly ask for the meter-bridge and potentiometer principles plus the internal-resistance derivation (3–5 marks total). JEE Main sets numericals on balance length and potential gradient every cycle; JEE Advanced loves the sum-and-difference potentiometer method and balance-point shifts. NEET reliably tests “why potentiometer beats a voltmeter” and meter-bridge sensitivity as one-liners.',
      },
      {
        t: 'p',
        html: 'How do you measure a resistance you can’t see inside, or the true voltage of a cell without disturbing it? You could clip on an ohmmeter or a voltmeter — but every such meter steals a little current from the circuit, and that theft changes the very quantity you’re trying to read. The clever idea behind all the instruments in this topic is to measure by <b>balancing</b>, not by deflecting: arrange the circuit so that, at the moment of measurement, <b>no current flows through the detector at all</b>. A measurement made at zero current is a measurement that doesn’t disturb what it measures. This is the “null method,” and it is the soul of the Wheatstone bridge, the meter bridge, and the potentiometer.',
      },
      {
        t: 'p',
        html: '<b>The Wheatstone bridge</b> is the parent idea (we derived its balance condition <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> in full under Kirchhoff’s laws). Think of it as a see-saw for potentials: a battery drives current down two parallel ladders of resistors, and a galvanometer bridges the midpoints. When the two ladders divide the voltage in exactly the same ratio, the two midpoints sit at equal potential, the galvanometer reads zero, and the four resistances lock into a fixed proportion. The unknown resistance is then pinned down by three known ones — and crucially, the answer doesn’t depend on the battery or the galvanometer at all.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine two identical staircases side by side, and you’re checking whether two people standing on them are at the same height. You don’t need to know how tall the staircases are or how the people climbed — you just look across: if a level plank laid between them stays horizontal (galvanometer reads zero), they’re at equal height. The bridge “weighs” an unknown resistance against known ones the way a balance scale weighs an unknown mass against standard weights — by seeking the point of perfect equilibrium.',
      },
      {
        t: 'p',
        html: '<b>The meter bridge</b> is simply the Wheatstone bridge made practical and cheap: two of its resistor arms are replaced by a single uniform 1-metre wire, and a sliding contact (jockey) lets you tune the ratio continuously until the galvanometer nulls. Slide, listen for zero, read the length — done.',
      },
      {
        t: 'p',
        html: '<b>The potentiometer</b> takes the null idea to its most elegant extreme. A steady current through a long uniform wire creates a perfectly even “potential ramp” along its length — so much potential drop per centimetre, the same everywhere. To measure an EMF, you tap the ramp at the exact point where it pushes back equally hard against the cell, so that no current flows from the cell. At that balance point, the cell isn’t being loaded at all, so what you read is its <b>true EMF</b>, not the diminished terminal voltage a voltmeter would report.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The bridge balance condition holds only in the steady state with all four arms purely resistive. The meter-bridge relation assumes a <b>perfectly uniform wire</b> of constant cross-section — non-uniformity and contact resistances at the ends cause “end errors” that need correction. The potentiometer’s beautiful linearity (<i>V</i> ∝ <i>l</i>) requires a <b>uniform wire</b> and a <b>constant primary current</b> — if the driver cell runs down mid-experiment, the calibration drifts. And a potentiometer can only balance an EMF smaller than the total potential drop across its wire; the driver must be the stronger source, or there is no null point.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Wheatstone bridge — balance condition (derived under Kirchhoff’s laws)',
        main: '<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> ⟺ <i>PS</i> = <i>QR</i><br><i>I</i><sub>g</sub> = 0 at balance',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Meter bridge — balance relation',
        main: '<i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>) ⟹ <i>X</i> = <i>R</i>((100 − <i>l</i>)/<i>l</i>)',
        legend: [
          '<i>R</i> = known resistance (one gap)',
          '<i>X</i> = unknown resistance (other gap)',
          '<i>l</i> = balance length from the <i>R</i> end, cm',
        ],
        note: 'Known resistance <i>R</i> in one gap, unknown <i>X</i> in the other; balance length <i>l</i> (in cm) measured from the end on the <i>R</i> side of a 100 cm wire.',
      },
      {
        t: 'formula',
        kicker: 'Potentiometer — potential gradient (potential drop per unit length)',
        main: '<i>k</i> = <i>V</i>/<i>L</i> = <i>IR</i><sub>wire</sub>/<i>L</i><br><i>V</i><sub><i>l</i></sub> = <i>k l</i> (so <i>V</i> ∝ <i>l</i>)',
        legend: [
          '<i>k</i> = potential gradient, V m<sup>−1</sup>',
          '<i>L</i> = wire length',
          '<i>R</i><sub>wire</sub> = wire resistance',
        ],
        note: '<i>k</i>: SI unit V m<sup>−1</sup>, dimension [M<sup>1</sup> L<sup>1</sup> T<sup>−3</sup> A<sup>−1</sup>] (same as electric field).',
      },
      {
        t: 'formula',
        kicker: 'Comparing two EMFs (balance lengths <i>l</i><sub>1</sub>, <i>l</i><sub>2</sub>)',
        main: '<i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Internal resistance of a cell (balance length <i>l</i><sub>1</sub> for open cell, <i>l</i><sub>2</sub> with shunt resistance <i>R</i> across it)',
        main: '<i>r</i> = <i>R</i>((<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>) = <i>R</i>(<i>l</i><sub>1</sub>/<i>l</i><sub>2</sub> − 1)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Quantities:</b> <i>P</i>, <i>Q</i>, <i>R</i>, <i>S</i>, <i>X</i> resistances (Ω); <i>l</i> balance/balancing length (cm or m); <i>k</i> potential gradient (V m<sup>−1</sup>); <i>E</i> emf, <i>V</i> terminal p.d. (V); <i>r</i> internal resistance (Ω).',
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: '<b>3.1 Meter Bridge — Balance Length Relation</b><br><b>Set up:</b> A meter bridge is a Wheatstone bridge in which two arms are a single uniform wire AC of length 100 cm. A known resistance <i>R</i> sits in the left gap, the unknown <i>X</i> in the right gap; a galvanometer connects the top junction B to the jockey at D, and a cell drives current across A–C.',
      },
      { t: 'fig', id: 'p12-03-fig-3.19' },
      {
        t: 'p',
        html: 'Because the wire is uniform, its resistance is proportional to length: let <i>σ</i> be the resistance per unit length. Then the two wire arms are AD = <i>σl</i> and DC = <i>σ</i>(100 − <i>l</i>). These play the roles of the lower two Wheatstone arms. Applying the balance condition <i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i> with <i>P</i> = <i>R</i>, <i>Q</i> = <i>X</i>, and the wire arms below:<br><i>R</i>/<i>X</i> = <i>σl</i>/(<i>σ</i>(100 − <i>l</i>)) = <i>l</i>/(100 − <i>l</i>).<br>The unknown <i>σ</i> cancels — that is why the wire need only be uniform, not of any particular resistivity. Solving,<br><i>X</i> = <i>R</i>((100 − <i>l</i>)/<i>l</i>).',
      },
      {
        t: 'p',
        html: '<b>Sensitivity note:</b> The bridge responds most sharply to a small imbalance when the null sits near the <b>middle of the wire</b> (<i>l</i> ≈ 50 cm). In practice you choose the known <i>R</i> to be comparable to <i>X</i> so that the balance point lands centrally, where a tiny jockey movement produces the largest galvanometer kick.',
      },
      {
        t: 'p',
        html: '<b>3.2 Potentiometer — Principle and Potential Gradient</b><br>A steady current <i>I</i> flows through a uniform wire AB of length <i>L</i> and total resistance <i>R</i><sub>wire</sub>. The potential drops uniformly along it, so the drop across any length <i>l</i> from A is<br><i>V</i><sub><i>l</i></sub> = <i>I</i> × (resistance of length <i>l</i>) = <i>I σl</i> = (<i>IR</i><sub>wire</sub>/<i>L</i>) <i>l</i> = <i>k l</i>,<br>where <i>k</i> = <i>IR</i><sub>wire</sub>/<i>L</i> is the <b>constant potential gradient</b>. Since <i>k</i> is fixed (uniform wire, constant current), <i>V</i><sub><i>l</i></sub> ∝ <i>l</i>. This proportionality is the entire principle: length becomes a precise proxy for potential difference.',
      },
      {
        t: 'p',
        html: '<b>3.3 Comparing Two EMFs</b><br>Each cell is balanced in turn (galvanometer null). For cell 1, the balancing length <i>l</i><sub>1</sub> satisfies <i>E</i><sub>1</sub> = <i>k l</i><sub>1</sub>; for cell 2, <i>E</i><sub>2</sub> = <i>k l</i><sub>2</sub>. Dividing eliminates the gradient:<br><i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>.<br><b>Why this is exact:</b> at the null point no current is drawn from the cell, so the balanced potential equals the cell’s true EMF — no internal-resistance drop sneaks in.',
      },
      {
        t: 'p',
        html: '<b>3.4 Measuring Internal Resistance</b><br>First balance the cell alone (key across it open): no current is drawn, so the full EMF balances at length <i>l</i><sub>1</sub>, giving <i>E</i> = <i>k l</i><sub>1</sub>. Now close a known resistance <i>R</i> across the cell’s terminals. The cell now drives current <i>I</i> = <i>E</i>/(<i>R</i> + <i>r</i>) through <i>R</i>, so its terminal voltage falls to <i>V</i> = <i>IR</i> = <i>ER</i>/(<i>R</i> + <i>r</i>), which balances at a shorter length <i>l</i><sub>2</sub>: <i>V</i> = <i>k l</i><sub>2</sub>. Dividing,<br><i>E</i>/<i>V</i> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>,   but   <i>E</i>/<i>V</i> = <i>E</i>/(<i>IR</i>) = <i>I</i>(<i>R</i> + <i>r</i>)/(<i>IR</i>) = (<i>R</i> + <i>r</i>)/<i>R</i>.<br>Therefore (<i>R</i> + <i>r</i>)/<i>R</i> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>, which rearranges to<br><i>r</i> = <i>R</i>((<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>).<br>Note <i>l</i><sub>2</sub> < <i>l</i><sub>1</sub> always (terminal voltage is less than EMF), so <i>r</i> comes out positive — a built-in sanity check.',
      },
      {
        t: 'p',
        html: '<b>3.5 Why the Potentiometer Beats a Voltmeter</b><br>A voltmeter of finite resistance draws current <i>I</i> from the cell, so it reads the terminal voltage <i>V</i> = <i>E</i> − <i>Ir</i>, which is less than the EMF. The potentiometer at balance draws <b>zero</b> current from the cell, so it reads the true EMF <i>E</i>. It behaves like an <b>ideal voltmeter of infinite resistance</b>. To make it more sensitive (resolve smaller voltages), reduce the potential gradient <i>k</i> — use a longer wire and a smaller primary current (larger series rheostat) — so that a given voltage spreads over a longer, more precisely measurable balancing length.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'In a meter bridge, a known resistance <i>R</i> = 5 Ω is placed in the left gap and an unknown resistance <i>X</i> in the right gap. The galvanometer shows null when the jockey is at 40 cm from the left end. Find <i>X</i>.',
        steps: [
          '<b>Given:</b> <i>R</i> = 5 Ω, <i>l</i> = 40 cm, wire length = 100 cm.',
          '<b>Formula:</b> <i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>), so <i>X</i> = <i>R</i>((100 − <i>l</i>)/<i>l</i>).',
          '<b>Substitution:</b><br><i>X</i> = 5 × (100 − 40)/40 = 5 × 60/40 = 5 × 1.5',
          '<b>Check:</b> The balance point lies left of centre, meaning the left arm of wire is “shorter” (lower resistance), so the right-gap resistance must be larger than the left-gap one — and indeed 7.5 Ω > 5 Ω. Consistent.',
        ],
        ans: '<i>X</i> = 7.5 Ω',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A cell balances at <i>l</i><sub>1</sub> = 300 cm on a potentiometer. When a 4 Ω resistor is connected across the cell’s terminals, the balancing length drops to <i>l</i><sub>2</sub> = 250 cm. Find the internal resistance.',
        steps: [
          '<b>The trap:</b> Students reach for the potential gradient <i>k</i> (“I don’t know the current or the wire resistance, so I’m stuck!”), or they flip the formula to <i>r</i> = <i>R</i>(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>)/<i>l</i><sub>1</sub> and get a negative number.',
          '<b>The fast move:</b> <i>k</i> cancels — you never need it. Use the length-only formula:<br><i>r</i> = <i>R</i>((<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>) = 4 × (300 − 250)/250 = 4 × 50/250 = 4 × 0.2',
          '<b>Why the length dropped:</b> Adding the shunt <i>R</i> makes the cell deliver current, so its terminal voltage falls below its EMF — and a smaller voltage balances over a shorter length. Always expect <i>l</i><sub>2</sub> < <i>l</i><sub>1</sub>. If your arithmetic gives <i>l</i><sub>2</sub> > <i>l</i><sub>1</sub>, you’ve mixed up the two readings.',
        ],
        ans: '<i>r</i> = 0.8 Ω',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: potential gradient + EMF',
        q: 'A potentiometer wire is 4 m long with total resistance 8 Ω. It is driven by a primary cell of EMF 2.0 V (negligible internal resistance) in series with a rheostat <i>R</i><sub>s</sub>. (a) Find <i>R</i><sub>s</sub> so that the potential gradient is exactly 0.40 V m<sup>−1</sup>. (b) With this setting, at what length does a secondary cell of EMF 1.0 V balance?',
        steps: [
          'This links the circuit current (Ohm’s law on the primary loop) to the potential gradient and then to a balance length.',
          '<b>(a)</b> Primary current <i>I</i> = 2.0/(<i>R</i><sub>s</sub> + <i>R</i><sub>wire</sub>), and the drop across the wire is <i>V</i><sub>wire</sub> = <i>IR</i><sub>wire</sub>, so<br><i>k</i> = <i>V</i><sub>wire</sub>/<i>L</i> = 2.0 <i>R</i><sub>wire</sub>/((<i>R</i><sub>s</sub> + <i>R</i><sub>wire</sub>) <i>L</i>) = (2.0 × 8)/((<i>R</i><sub>s</sub> + 8) × 4).',
          'Set <i>k</i> = 0.40:<br>16/(4(<i>R</i><sub>s</sub> + 8)) = 0.40 ⇒ 4/(<i>R</i><sub>s</sub> + 8) = 0.40 ⇒ <i>R</i><sub>s</sub> + 8 = 10',
          '<b>(b)</b> A balance length <i>l</i> satisfies <i>E</i> = <i>k l</i>:<br><i>l</i> = <i>E</i>/<i>k</i> = 1.0/0.40',
          'So the 1.0 V cell balances at 2.5 m — comfortably within the 4 m wire, confirming a valid null point exists.',
        ],
        ans: '(a) <i>R</i><sub>s</sub> = 2 Ω; (b) <i>l</i> = 2.5 m',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: sum-and-difference method',
        q: 'Two cells of EMF <i>E</i><sub>1</sub> and <i>E</i><sub>2</sub> (<i>E</i><sub>1</sub> > <i>E</i><sub>2</sub>) are tested on a potentiometer with a constant potential gradient <i>k</i> = 0.050 V cm<sup>−1</sup>. When the cells are connected <b>in series, aiding</b> each other in the secondary loop, the balance length is <i>l</i><sub>s</sub> = 80 cm. When connected in <b>opposition</b> (one reversed), the balance length is <i>l</i><sub>d</sub> = 20 cm. Find the ratio <i>E</i><sub>1</sub> ∶ <i>E</i><sub>2</sub> and the individual EMFs.',
        steps: [
          '<b>Key insight:</b> The potentiometer balances the net EMF present in the secondary loop. Aiding gives a net <i>E</i><sub>1</sub> + <i>E</i><sub>2</sub>; opposing gives a net <i>E</i><sub>1</sub> − <i>E</i><sub>2</sub>. Each net EMF balances at <i>k</i> × (length):<br><i>E</i><sub>1</sub> + <i>E</i><sub>2</sub> = <i>k l</i><sub>s</sub> = 0.050 × 80 = 4.0 V,   (1)<br><i>E</i><sub>1</sub> − <i>E</i><sub>2</sub> = <i>k l</i><sub>d</sub> = 0.050 × 20 = 1.0 V.   (2)',
          '<b>Ratio</b> (divide, <i>k</i> cancels — works even if <i>k</i> were unknown):<br><i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = (<i>l</i><sub>s</sub> + <i>l</i><sub>d</sub>)/(<i>l</i><sub>s</sub> − <i>l</i><sub>d</sub>) = (80 + 20)/(80 − 20) = 100/60',
          '<b>Individual values</b> (add and subtract (1), (2)):<br><i>E</i><sub>1</sub> = (4.0 + 1.0)/2 = 2.5 V,   <i>E</i><sub>2</sub> = (4.0 − 1.0)/2 = 1.5 V.',
          '<b>Sanity:</b> <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = 2.5/1.5 = 5/3. ✓ The opposition length is the shorter one, as it must be, since the difference of two EMFs is smaller than their sum.',
        ],
        ans: '<i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = 5/3',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In a meter bridge, a known resistance <i>R</i> = 6 Ω is in the left gap and the balance point is found at 60 cm from the left end. Find the unknown resistance <i>X</i> in the right gap.',
            a: '<i>X</i> = 4 Ω',
          },
          {
            q: '[NEET] On a potentiometer, a cell of EMF 1.2 V balances at 240 cm. A second cell balances at 360 cm under the same settings. Find the EMF of the second cell.',
            a: '1.8 V',
          },
          {
            q: '[JEE Main] A potentiometer wire is 10 m long, and the potential difference across its full length is 5.0 V. Find the potential gradient and the EMF of a cell that balances at 4.0 m.',
            a: '<i>k</i> = 0.5 V m<sup>−1</sup>, EMF = 2.0 V',
          },
          {
            q: '[JEE Main] A cell balances at 250 cm on a potentiometer. When a 5 Ω resistor is connected across it, the balance shifts to 200 cm. Find the internal resistance of the cell.',
            a: '<i>r</i> = 1.25 Ω',
          },
          {
            q: '[JEE Advanced] In a meter bridge the balance point is at 25 cm from the left end. The two gap resistances are then interchanged. Find the new balance point and the ratio of the two resistances (left : right, original arrangement).',
            a: 'New balance at 75 cm; ratio 1 ∶ 3',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A potentiometer is preferred over a voltmeter for measuring the EMF of a cell because:',
        opts: [
          {
            label: 'it has a very low resistance.',
            nudge: '<b>(A)</b> is backwards: it’s the effective infinite resistance at balance that matters, not low resistance (a low-resistance meter would load the cell badly).',
          },
          { label: 'it draws no current from the cell at balance, so it reads the true EMF.', nudge: null },
          { label: 'it is cheaper and smaller.', nudge: '<b>(C)</b> is irrelevant to accuracy.' },
          { label: 'it amplifies the EMF.', nudge: '<b>(D)</b> no amplification occurs; the instrument compares, it doesn’t boost.' },
        ],
        correct: 1,
        solution: 'At the null point no current flows from the cell, so there is no <i>Ir</i> drop and the reading equals the true EMF — the potentiometer acts as an ideal infinite-resistance voltmeter.',
      },
      {
        t: 'mcq',
        q: 'A meter bridge gives the most sensitive (sharpest) balance when the null point is located:',
        opts: [
          {
            label: 'near the left end (~10 cm).',
            nudge: '<b>(A)</b> and <b>(B)</b> sit near the ends, where the wire arms are very unequal and the balance is mushy and error-prone.',
          },
          {
            label: 'near the right end (~90 cm).',
            nudge: '<b>(A)</b> and <b>(B)</b> sit near the ends, where the wire arms are very unequal and the balance is mushy and error-prone.',
          },
          { label: 'near the middle (~50 cm).', nudge: null },
          {
            label: 'anywhere; position doesn’t matter.',
            nudge: '<b>(D)</b> is the common misconception that any null is equally good; experimentally you deliberately choose the comparison resistance to centre the balance.',
          },
        ],
        correct: 2,
        solution: 'Bridge sensitivity is greatest when the four arms are comparable, which places the null near the centre — there a small jockey shift produces the largest galvanometer response.',
      },
      {
        t: 'mcq',
        q: 'The wire of a potentiometer is usually made of manganin or constantan because these alloys have:',
        opts: [
          {
            label: 'very high resistivity and a large temperature coefficient.',
            nudge: '<b>(A)</b> a large coefficient would ruin stability; this option pairs a half-truth (decent resistivity) with the fatal wrong property.',
          },
          { label: 'a negligibly small temperature coefficient of resistance.', nudge: null },
          {
            label: 'very high conductivity like copper.',
            nudge: '<b>(C)</b> high conductivity (copper) would give too small and temperature-sensitive a gradient.',
          },
          { label: 'a very low melting point.', nudge: '<b>(D)</b> melting point is irrelevant to measurement stability.' },
        ],
        correct: 1,
        solution: 'A near-zero temperature coefficient means the wire’s resistance — and hence the potential gradient <i>k</i> — stays constant even as the current warms the wire, keeping the calibration steady.',
      },
      {
        t: 'mcq',
        q: 'A cell balances at 150 cm on a potentiometer. When a 3 Ω resistance is connected across its terminals, the balance length becomes 100 cm. The internal resistance of the cell is:',
        opts: [
          { label: '0.5 Ω', nudge: '<b>(A)</b> drops the factor of <i>R</i>.' },
          { label: '1.5 Ω', nudge: null },
          { label: '3.0 Ω', nudge: '<b>(C)</b> simply echoes the given 3 Ω — a no-work trap.' },
          {
            label: '4.5 Ω',
            nudge: '<b>(D)</b> 4.5 Ω comes from using <i>l</i><sub>1</sub> in place of (<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>) in the numerator, i.e. computing 3 × 150/100.',
          },
        ],
        correct: 1,
        solution: '<i>r</i> = <i>R</i>((<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>) = 3 × (150 − 100)/100 = 3 × 0.5 = 1.5 Ω.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Flipping the internal-resistance formula.</b> It is <i>r</i> = <i>R</i>(<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub> — open-cell length minus loaded length, divided by the loaded length. Writing (<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>)/<i>l</i><sub>1</sub> gives a negative, nonsensical answer.',
          '<b>Forgetting the driver must be the stronger source.</b> A potentiometer can only balance an EMF smaller than the total drop across its wire. If the cell under test exceeds it, the galvanometer never nulls — there’s no balance point. (This is why a battery of larger, steady EMF — not the cell under test — drives the primary.)',
          '<b>Mismatching the meter-bridge length with the gap.</b> <i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>) pairs the length measured from the <i>R</i>-side end with <i>R</i>. Reading <i>l</i> from the wrong end silently inverts your answer.',
          '<b>Treating a voltmeter reading as the EMF.</b> A voltmeter loads the cell and reads <i>E</i> − <i>Ir</i>. Don’t equate it with EMF in problems that hinge on the difference.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> In any potentiometer ratio question — comparing EMFs, finding internal resistance, sum-and-difference — the potential gradient <i>k</i> <b>cancels</b>. Never compute <i>k</i> unless the question asks for an absolute voltage. Work directly with the length ratios and you’ll finish in one line.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Wheatstone balance',
            note: '<i>P</i>/<i>Q</i> = <i>R</i>/<i>S</i>, <i>I</i><sub>g</sub> = 0; most sensitive when all arms are comparable.',
          },
          {
            f: 'Meter bridge',
            note: '<i>R</i>/<i>X</i> = <i>l</i>/(100 − <i>l</i>) ⇒ <i>X</i> = <i>R</i>(100 − <i>l</i>)/<i>l</i>; aim for null near 50 cm.',
          },
          {
            f: 'Potentiometer principle',
            note: 'uniform wire + steady current ⇒ <i>V</i> ∝ <i>l</i>, gradient <i>k</i> = <i>IR</i><sub>wire</sub>/<i>L</i> constant.',
          },
          { f: 'Compare EMFs', note: '<i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = <i>l</i><sub>1</sub>/<i>l</i><sub>2</sub>.' },
          {
            f: 'Internal resistance',
            note: '<i>r</i> = <i>R</i>((<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>) (open length <i>l</i><sub>1</sub>, loaded length <i>l</i><sub>2</sub>).',
          },
          {
            f: 'Sum & difference',
            note: '<i>E</i><sub>1</sub> + <i>E</i><sub>2</sub> = <i>k l</i><sub>s</sub>, <i>E</i><sub>1</sub> − <i>E</i><sub>2</sub> = <i>k l</i><sub>d</sub> ⇒ <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub> = (<i>l</i><sub>s</sub> + <i>l</i><sub>d</sub>)/(<i>l</i><sub>s</sub> − <i>l</i><sub>d</sub>).',
          },
        ],
        aids: [
          '“Null means no theft” — zero current at balance ⇒ true EMF, no loading.',
          '“Potentiometer = infinite-resistance ideal voltmeter.”',
          '“<i>k</i> cancels in every ratio” — only compute it for an absolute voltage.',
          'Internal resistance: “open minus loaded, over loaded” ((<i>l</i><sub>1</sub> − <i>l</i><sub>2</sub>)/<i>l</i><sub>2</sub>).',
        ],
      },
    ],
  },
];
