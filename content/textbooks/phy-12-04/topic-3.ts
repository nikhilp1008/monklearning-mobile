import type { Topic } from '@/lib/textbooks';

/**
 * Class 12 Chapter 4, Topic 03: pp. 281–295 of the Class 12 Physics Master
 * Reference, word for word: Force on Charged Particles and Torque on Current
 * Loops, split at its Sections 1 to 8. Figures 4.8 (caption p. 283, drawn on
 * p. 284), 4.9 (285–286), 4.10 (287–288), 4.11 (289–290) and 4.12 (291–292)
 * are redrawn in lib/diagrams/physics-12-04.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 281–295 ─────────────────────────
  {
    n: '03',
    title: 'Force on Charged Particles and Torque on Current Loops',
    kalam: 'The magnetic force has a strange and beautiful property: because of the cross product, it is always perpendicular to the velocity.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the most heavily weighted topics in the chapter. CBSE Boards reliably ask the torque-on-loop or parallel-wire-force derivation (3–5 marks) and a galvanometer short-answer. JEE Main pulls 2–3 questions — circular-motion period, velocity selector, force between wires. JEE Advanced favours multi-step problems: loop-near-a-wire net force, cyclotron energy, equilibrium/levitation. NEET leans conceptual: “does the magnetic force do work,” cyclotron frequency, attract-vs-repel.',
      },
      {
        t: 'p',
        html: 'This topic looks like a grab-bag — charged particles spiralling, wires pushing on each other, coils twisting in a galvanometer. But there is a single idea underneath all of it:',
      },
      {
        t: 'p',
        html: '<b>A magnetic field exerts a force on moving charge: <i>F⃗</i> = <i>qv⃗</i> × <i>B⃗</i>. Everything else in this topic is just this one law, applied either to free charges or to the charges flowing inside a wire.</b>',
      },
      {
        t: 'p',
        html: 'Hold onto that, and the whole landscape organises itself into two halves.',
      },
      {
        t: 'p',
        html: '<b>Part A — Free charges: the force that only steers</b><br>The magnetic force has a strange and beautiful property: because of the cross product, it is <b>always perpendicular to the velocity</b>. A force perpendicular to motion can never speed a particle up or slow it down — it can only bend the path. So a magnetic field does <b>zero work</b> on a charge; the particle’s speed and kinetic energy stay exactly constant. The field is a steering wheel, never an accelerator.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine swinging a stone on a string in a circle over your head. The string’s tension always points inward, perpendicular to the stone’s motion; it never makes the stone faster, only forces it to curve. The magnetic force on a charge moving across a field is exactly that “string” — which is why a charge fired perpendicular to a uniform field traces a perfect circle, and why a charge fired at an angle traces a <b>helix</b> (the along-field part of its velocity coasts straight through, untouched, while the across-field part circles).',
      },
      {
        t: 'p',
        html: 'Two machines exploit this steering:<br>• A <b>velocity selector</b> uses crossed electric and magnetic fields so that only charges of one particular speed sail through undeflected — the electric push exactly cancels the magnetic push.<br>• A <b>cyclotron</b> uses the remarkable fact that the time for one circle doesn’t depend on the speed, so a fixed-frequency electric “kick” can keep accelerating a particle on every lap, spiralling it outward to enormous energies.',
      },
      {
        t: 'p',
        html: '<b>Part B — Charges in a wire: forces and twists</b><br>A current is just charges in motion, so a current-carrying wire in a magnetic field feels the sum of the magnetic forces on all its moving charges. That sum is the <b>force on a conductor</b>, <i>F⃗</i> = <i>IL⃗</i> × <i>B⃗</i>. From this single result, two consequences follow:<br>• <b>Two parallel wires push or pull on each other.</b> Each wire sits in the magnetic field of the other and feels a force. The lovely twist (and a favourite exam trap): <b>like currents attract</b> — opposite to what charges do. This mutual force is so fundamental it was once used to define the ampere itself.<br>• <b>A current loop in a uniform field doesn’t move — it twists.</b> Opposite sides of the loop feel equal and opposite forces (no net force), but those forces act along different lines, producing a <b>torque</b> that tries to rotate the loop until its face squarely catches the field. This torque is what spins the coil in every electric motor and what deflects the needle in a <b>moving-coil galvanometer</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b><br>• <i>F⃗</i> = <i>qv⃗</i> × <i>B⃗</i> gives <b>zero force when</b> <i>v⃗</i> ∥ <i>B⃗</i> (the charge coasts straight through) and maximum force when <i>v⃗</i> ⊥ <i>B⃗</i>.<br>• The clean circular-motion results assume a <b>uniform</b> field and <b>non-relativistic</b> speeds; near light-speed the particle’s effective mass grows and the cyclotron’s timing drifts out of step (the practical ceiling on cyclotron energy).<br>• Torque <i>τ</i> = <i>NIAB</i> sin <i>θ</i> assumes a <b>uniform</b> field; in a non-uniform field a loop can feel a net force as well as a torque.<br>• The parallel-wire formula assumes <b>long, thin, straight</b> wires.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Force on a moving charge (Lorentz, magnetic part)',
        main: '<i>F⃗</i> = <i>qv⃗</i> × <i>B⃗</i><br><i>F</i> = <i>qvB</i> sin <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'When both an electric and a magnetic field are present, the <b>total Lorentz force</b> is the sum of the electric and magnetic parts:',
      },
      {
        t: 'formula',
        kicker: 'Total Lorentz force',
        main: '<i>F⃗</i> = <i>q</i>(<i>E⃗</i> + <i>v⃗</i> × <i>B⃗</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'The electric part <i>qE⃗</i> acts along <i>E⃗</i> (and does work, changing speed); the magnetic part <i>qv⃗</i> × <i>B⃗</i> acts perpendicular to <i>v⃗</i> (and does no work). The velocity selector below is exactly the case where these two parts cancel.',
      },
      {
        t: 'formula',
        kicker: 'Circular motion (charge fired with <i>v⃗</i> ⊥ <i>B⃗</i>)',
        main: '<i>r</i> = <i>mv</i>/(<i>qB</i>) = <i>p</i>/(<i>qB</i>)<br><i>T</i> = 2π<i>m</i>/(<i>qB</i>)<br><i>f</i><sub>c</sub> = <i>qB</i>/(2π<i>m</i>)<br><i>ω</i> = <i>qB</i>/<i>m</i>',
        legend: [],
        note: 'Note <i>T</i>, <i>f</i><sub>c</sub>, <i>ω</i> are <b>independent of</b> <i>v</i> <b>and</b> <i>r</i> — the cyclotron’s secret.',
      },
      {
        t: 'formula',
        kicker: 'Helical motion (velocity at angle <i>θ</i> to <i>B⃗</i>)',
        main: 'radius from: <i>v</i><sub>⊥</sub> = <i>v</i> sin <i>θ</i><br>pitch = <i>v</i><sub>∥</sub><i>T</i> = (<i>v</i> cos <i>θ</i>)(2π<i>m</i>/(<i>qB</i>))',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Velocity selector (crossed <i>E⃗</i> ⊥ <i>B⃗</i>)',
        main: 'undeflected if <i>qE</i> = <i>qvB</i>, i.e. <i>v</i> = <i>E</i>/<i>B</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Cyclotron maximum energy (exit radius <i>R</i>)',
        main: '<i>K</i><sub>max</sub> = <i>q</i><sup>2</sup><i>B</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>m</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Force on a current-carrying conductor',
        main: '<i>F⃗</i> = <i>IL⃗</i> × <i>B⃗</i><br><i>F</i> = <i>BIL</i> sin <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'The direction is given by <b>Fleming’s left-hand rule</b>: stretch the thumb, forefinger and middle finger of the left hand mutually perpendicular — forefinger points along the <b>field</b> <i>B⃗</i>, middle finger along the <b>current</b> <i>I</i>, and the <b>thumb</b> then points along the <b>force</b> <i>F⃗</i>. (It is just a hand-mnemonic for the cross product <i>IL⃗</i> × <i>B⃗</i>.)',
      },
      {
        t: 'formula',
        kicker: 'Force per unit length between two long parallel wires (separation <i>d</i>)',
        main: '<i>F</i>/<i>L</i> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub>/(2π<i>d</i>)',
        legend: [],
        note: '(attractive if currents are parallel, repulsive if antiparallel).',
      },
      {
        t: 'formula',
        kicker: 'Torque on a current loop / coil (<i>N</i> turns, area <i>A</i>)',
        main: '<i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i><br><i>τ</i> = <i>NIAB</i> sin <i>θ</i>',
        legend: [
          '<i>m⃗</i> = magnetic dipole moment, <i>NIA⃗</i> (unit A·m<sup>2</sup>, dimensions [A L<sup>2</sup>])',
          '<i>θ</i> = angle between <i>m⃗</i> (the loop’s normal) and <i>B⃗</i>',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Potential energy of the dipole',
        main: '<i>U</i> = −<i>m⃗</i> · <i>B⃗</i> = −<i>mB</i> cos <i>θ</i>',
        legend: [],
        note: '(minimum, stable, when <i>m⃗</i> ∥ <i>B⃗</i>).',
      },
      {
        t: 'formula',
        kicker: 'Moving-coil galvanometer',
        main: '<i>NIAB</i> = <i>kφ</i><br><i>φ</i> = (<i>NAB</i>/<i>k</i>)<i>I</i><br>current sensitivity: <i>φ</i>/<i>I</i> = <i>NAB</i>/<i>k</i><br>voltage sensitivity: <i>φ</i>/<i>V</i> = <i>NAB</i>/(<i>kR</i>)',
        legend: ['<i>k</i> = torsional spring constant (N·m/rad)', '<i>R</i> = galvanometer resistance'],
        note: 'With a radial field, <i>θ</i> = 90° always.',
      },
      {
        t: 'p',
        html: 'Symbols: <i>q</i> charge (C), <i>v</i> speed, <i>B</i> field (T), <i>m</i> mass, <i>p</i> momentum, <i>I</i> current, <i>L⃗</i> length-vector along current, <i>d</i> separation, <i>A</i> area, <i>k</i> torsional spring constant (N·m/rad), <i>R</i> galvanometer resistance.',
      },

      { t: 'part', title: 'Derivations' },
      { t: 'p', html: '<b>Derivation A — Circular motion and the cyclotron condition</b>' },
      {
        t: 'p',
        html: '<b>Setup.</b> A charge <i>q</i>, mass <i>m</i>, enters a uniform field <i>B⃗</i> with velocity <i>v⃗</i> ⊥ <i>B⃗</i>.',
      },
      { t: 'fig', id: 'p12-04-fig-4.8' },
      {
        t: 'p',
        html: '<b>Step 1 — the force supplies centripetal force.</b> Since <i>v⃗</i> ⊥ <i>B⃗</i>, the force magnitude is <i>qvB</i> and points perpendicular to <i>v⃗</i> at every instant — exactly a centripetal force. So<br><i>qvB</i> = <i>mv</i><sup>2</sup>/<i>r</i>   ⇒   <i>r</i> = <i>mv</i>/(<i>qB</i>).',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> faster or heavier particles bend less (larger circle); stronger fields or bigger charges bend more.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — the period is speed-independent.</b> Time for one loop:<br><i>T</i> = 2π<i>r</i>/<i>v</i> = (2π/<i>v</i>) · <i>mv</i>/(<i>qB</i>) = 2π<i>m</i>/(<i>qB</i>).<br>The <i>v</i> cancels — a fast particle traces a bigger circle but covers it in the same time as a slow one. This is the <b>cyclotron resonance condition</b>: an oscillating accelerating voltage tuned to the fixed frequency <i>f</i><sub>c</sub> = <i>qB</i>/(2π<i>m</i>) will kick the particle forward on every half-loop, regardless of how fast it has become.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — how the cyclotron uses this.</b> The machine has two hollow, D-shaped electrodes (“dees”) in the uniform field, with a small gap between them across which an oscillating voltage is applied.',
      },
      { t: 'fig', id: 'p12-04-fig-4.9' },
      {
        t: 'p',
        html: 'Inside each dee there is no electric field, so the particle simply coasts in a semicircle (the magnetic force steering it). In the gap, the electric field gives it a forward kick, increasing its speed — and hence its radius for the next semicircle. Because the period <i>T</i> is the same for every semicircle no matter how fast the particle has become, an alternating voltage of fixed frequency <i>f</i><sub>c</sub> = <i>qB</i>/(2π<i>m</i>) stays perfectly in step, kicking the particle every single time it crosses the gap. The particle therefore spirals outward, gaining energy lap after lap.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — maximum energy.</b> At the outermost radius <i>R</i>, <i>v</i> = <i>qBR</i>/<i>m</i>, so<br><i>K</i><sub>max</sub> = ½<i>mv</i><sup>2</sup> = <i>q</i><sup>2</sup><i>B</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>m</i>).',
      },
      {
        t: 'p',
        html: '<b>Limitation:</b> as <i>v</i> → <i>c</i>, relativistic mass growth makes <i>T</i> creep upward, the kicks fall out of step, and acceleration stalls — the reason high-energy machines use synchrotrons (which vary the field/frequency) instead.',
      },
      { t: 'p', html: '<b>Derivation B — Torque on a rectangular current loop</b>' },
      {
        t: 'p',
        html: '<b>Setup.</b> A rectangular loop of sides <i>a</i> (length) and <i>b</i> (breadth), carrying current <i>I</i>, sits in a uniform field <i>B⃗</i> that lies in the plane of the loop initially. Let the loop’s normal <i>n̂</i> make angle <i>θ</i> with <i>B⃗</i>.',
      },
      { t: 'fig', id: 'p12-04-fig-4.10' },
      {
        t: 'p',
        html: '<b>Step 1 — forces on the sides.</b> The two sides of length <i>b</i> feel equal and opposite forces along the same line, so they contribute no torque (at <i>θ</i> = 90° they lie along <i>B⃗</i> and feel no force at all). The two sides of length <i>a</i> carry current perpendicular to <i>B⃗</i> and feel forces<br><i>F</i><sub>1</sub> = <i>F</i><sub>2</sub> = <i>BIa</i>,<br>equal in magnitude, opposite in direction — so <b>net force is zero</b>, but they don’t share a line of action.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — they form a couple.</b> The perpendicular distance between the two forces’ lines of action is <i>b</i> sin <i>θ</i> (where <i>θ</i> is between <i>n̂</i> and <i>B⃗</i>). The torque of a couple is force × arm:<br><i>τ</i> = (<i>BIa</i>)(<i>b</i> sin <i>θ</i>) = <i>BI</i>(<i>ab</i>) sin <i>θ</i> = <i>BIA</i> sin <i>θ</i>,<br>with <i>A</i> = <i>ab</i>. For <i>N</i> turns:<br><i>τ</i> = <i>NIAB</i> sin <i>θ</i> = <i>mB</i> sin <i>θ</i>,   <i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>,   <i>m⃗</i> = <i>NIA⃗</i>.',
      },
      {
        t: 'p',
        html: '<b>Physical reading:</b> torque is <b>maximum</b> (<i>NIAB</i>) when the loop’s plane is parallel to <i>B⃗</i> (<i>θ</i> = 90°) and <b>zero</b> when the plane is perpendicular to <i>B⃗</i> (<i>θ</i> = 0, <i>n̂</i> ∥ <i>B⃗</i>) — the loop’s stable resting orientation.',
      },
      { t: 'p', html: '<b>Derivation C — Force between two parallel wires; the ampere</b>' },
      {
        t: 'p',
        html: 'Wire 1 (current <i>I</i><sub>1</sub>) creates at the location of wire 2 (distance <i>d</i>) a field <i>B</i><sub>1</sub> = μ<sub>0</sub><i>I</i><sub>1</sub>/(2π<i>d</i>) (from Topic 02). Wire 2, carrying <i>I</i><sub>2</sub> over length <i>L</i>, then feels <i>F</i> = <i>B</i><sub>1</sub><i>I</i><sub>2</sub><i>L</i>:<br><i>F</i>/<i>L</i> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub>/(2π<i>d</i>).',
      },
      {
        t: 'p',
        html: 'The right-hand rule shows the forces are <b>attractive for parallel currents, repulsive for antiparallel</b>. Historically (pre-2019), this defined the ampere: 1 A is the current that, in two infinitely long parallel wires 1 m apart in vacuum, produces a force of exactly 2 × 10<sup>−7</sup> N per metre. (Since the 2019 SI revision the ampere is instead fixed by defining the elementary charge <i>e</i> = 1.602176634 × 10<sup>−19</sup> C; the parallel-wire relation is now a derived result, but it remains the standard exam derivation.)',
      },
      { t: 'p', html: '<b>Derivation D — The moving-coil galvanometer</b>' },
      {
        t: 'p',
        html: '<b>The problem it solves.</b> A bare current loop in a uniform field has torque <i>τ</i> = <i>NIAB</i> sin <i>θ</i> — but that sin <i>θ</i> is a nuisance: as the coil rotates, <i>θ</i> changes, so the deflection would not be proportional to the current, and the scale would be hopelessly non-linear.',
      },
      {
        t: 'p',
        html: '<b>The fix — a radial field.</b> The coil is wound on a soft-iron cylinder and placed between concave pole pieces. This shapes the field so it is always <b>radial</b> — at every angle of the coil, the field lies in the plane of the coil, so <i>θ</i> = 90° and sin <i>θ</i> = 1 permanently. The deflecting torque becomes simply<br><i>τ</i><sub>def</sub> = <i>NIAB</i>   (independent of orientation).',
      },
      { t: 'fig', id: 'p12-04-fig-4.11' },
      {
        t: 'p',
        html: '<b>Balance against the spring.</b> As the coil turns through angle <i>φ</i>, an attached spiral spring provides a restoring torque <i>kφ</i> (with <i>k</i> the torsional constant). At equilibrium:<br><i>NIAB</i> = <i>kφ</i>   ⇒   <i>φ</i> = (<i>NAB</i>/<i>k</i>)<i>I</i>.',
      },
      {
        t: 'p',
        html: 'The deflection is <b>exactly proportional to the current</b> — a linear scale. Two figures of merit follow:<br>• <b>Current sensitivity</b> <i>φ</i>/<i>I</i> = <i>NAB</i>/<i>k</i> (deflection per unit current).<br>• <b>Voltage sensitivity</b> <i>φ</i>/<i>V</i> = <i>NAB</i>/(<i>kR</i>), where <i>R</i> is the galvanometer resistance.',
      },
      {
        t: 'p',
        html: 'Note that increasing <i>N</i> raises current sensitivity but also raises <i>R</i>, so it does not automatically raise voltage sensitivity — a subtle point examiners love.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A circular coil of 40 turns and radius 6.0 cm carries a current of 2.5 A. It is placed in a uniform field of 0.30 T such that the plane of the coil makes 30° with the field. Find the torque on the coil.',
        steps: [
          '<b>Given:</b> <i>N</i> = 40, <i>R</i> = 0.060 m, <i>I</i> = 2.5 A, <i>B</i> = 0.30 T. <b>Careful with the angle:</b> the plane makes 30° with <i>B⃗</i>, so the normal makes <i>θ</i> = 60° with <i>B⃗</i>. <b>Area:</b> <i>A</i> = π<i>R</i><sup>2</sup> = π(0.060)<sup>2</sup> = 1.131 × 10<sup>−2</sup> m<sup>2</sup>.',
          '<i>τ</i> = <i>NIAB</i> sin <i>θ</i> = (40)(2.5)(1.131 × 10<sup>−2</sup>)(0.30) sin 60°',
        ],
        ans: '<i>τ</i> ≈ 0.29 N·m.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A proton and an alpha particle, accelerated through the same potential difference, enter a uniform field perpendicular to their velocities. Compare the radii of their circular paths. (Take <i>m</i><sub>α</sub> = 4<i>m</i><sub>p</sub>, <i>q</i><sub>α</sub> = 2<i>q</i><sub>p</sub>.)',
        steps: [
          '<b>The trap:</b> reaching for <i>r</i> = <i>mv</i>/(<i>qB</i>) with the same <i>v</i> — but they were accelerated through the same voltage, so they have the same kinetic energy gain <i>qV</i>, not the same speed.',
          '<b>Speed move — use <i>r</i> in terms of energy.</b> From <i>qV</i> = ½<i>mv</i><sup>2</sup>, <i>v</i> = √(2<i>qV</i>/<i>m</i>), so<br><i>r</i> = <i>mv</i>/(<i>qB</i>) = √(2<i>mV</i>/<i>q</i>)/<i>B</i> ∝ √<i>m</i>/√<i>q</i> = √(<i>m</i>/<i>q</i>).<br><i>r</i><sub>α</sub>/<i>r</i><sub>p</sub> = √((<i>m</i><sub>α</sub>/<i>q</i><sub>α</sub>)/(<i>m</i><sub>p</sub>/<i>q</i><sub>p</sub>)) = √((4/2)/(1/1))',
        ],
        ans: '<i>r</i><sub>α</sub> = √2 <i>r</i><sub>p</sub> ≈ 1.41 <i>r</i><sub>p</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — two concepts',
        q: 'Singly-charged ions pass undeflected through a velocity selector with <i>E</i> = 3.0 × 10<sup>4</sup> V/m and <i>B</i> = 0.20 T. They then enter a region of pure magnetic field <i>B</i>′ = 0.50 T perpendicular to their motion, where an ion of mass <i>m</i> = 3.3 × 10<sup>−26</sup> kg (<i>q</i> = 1.6 × 10<sup>−19</sup> C) curves in a circle. Find its radius.',
        steps: [
          '<b>Concept 1 — velocity selector</b> fixes the speed:<br><i>v</i> = <i>E</i>/<i>B</i> = (3.0 × 10<sup>4</sup>)/0.20 = 1.5 × 10<sup>5</sup> m/s.',
          '<b>Concept 2 — circular motion</b> in <i>B</i>′:<br><i>r</i> = <i>mv</i>/(<i>qB</i>′) = (3.3 × 10<sup>−26</sup>)(1.5 × 10<sup>5</sup>)/((1.6 × 10<sup>−19</sup>)(0.50))',
          '(This is exactly how a mass spectrometer separates ions.)',
        ],
        ans: '<i>r</i> ≈ 6.2 cm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A square loop of side <i>a</i> carries current <i>I</i><sub>2</sub> and lies in the same plane as a long straight wire carrying <i>I</i><sub>1</sub> (currents parallel). The nearest side of the loop is parallel to the wire at distance <i>d</i>. Find the net force on the loop.',
        fig: 'p12-04-fig-4.12',
        steps: [
          '<b>Identify which sides matter.</b> The two sides parallel to the wire sit in different fields (∝ 1/<i>r</i>) and feel unequal forces along the same line — these don’t cancel. The two sides perpendicular to the wire carry currents in opposite senses through symmetric field regions; their forces cancel.',
          '<b>Near side</b> (distance <i>d</i>, current parallel to <i>I</i><sub>1</sub> ⇒ attraction toward wire):<br><i>F</i><sub>near</sub> = (μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub>/(2π<i>d</i>)) <i>a</i>.',
          '<b>Far side</b> (distance <i>d</i> + <i>a</i>, current antiparallel ⇒ repulsion, i.e. away from wire):<br><i>F</i><sub>far</sub> = (μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub>/(2π(<i>d</i> + <i>a</i>))) <i>a</i>.',
          '<b>Net force</b> (toward the wire, since the near side wins):<br><i>F</i><sub>net</sub> = (μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub><i>a</i>/(2π))(1/<i>d</i> − 1/(<i>d</i> + <i>a</i>))',
          'The net force is <b>attractive</b>, and falls off rapidly as the loop moves away (∼ 1/<i>d</i><sup>2</sup> for <i>d</i> ≫ <i>a</i>) — a clean illustration that a current loop behaves like a magnetic dipole at large distance.',
        ],
        ans: '<i>F</i><sub>net</sub> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub><i>a</i><sup>2</sup>/(2π<i>d</i>(<i>d</i> + <i>a</i>)).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A 25 cm length of wire carrying 4.0 A lies perpendicular to a 0.40 T field. Find the force on it.',
            a: '<i>F</i> = <i>BIL</i> = 0.40 N.',
          },
          {
            q: '[NEET] An electron moves at 2 × 10<sup>6</sup> m/s perpendicular to a 0.50 T field. Find the radius of its path and the period. (<i>m</i><sub>e</sub> = 9.1 × 10<sup>−31</sup> kg, <i>e</i> = 1.6 × 10<sup>−19</sup> C.)',
            a: '<i>r</i> = 2.3 × 10<sup>−5</sup> m ≈ 23 μm; <i>T</i> = 7.1 × 10<sup>−11</sup> s.',
          },
          {
            q: '[JEE Main] Two long parallel wires 5.0 cm apart carry 10 A and 15 A in the same direction. Find the force per metre and state its nature.',
            a: '<i>F</i>/<i>L</i> = 6.0 × 10<sup>−4</sup> N/m, attractive.',
          },
          {
            q: '[JEE Main] A 50-turn circular coil of radius 4.0 cm carries 3.0 A in a 0.25 T field. Find the maximum torque and the coil’s magnetic moment.',
            a: '<i>m</i> = <i>NIA</i> = 0.754 A·m<sup>2</sup>; <i>τ</i><sub>max</sub> = <i>mB</i> ≈ 0.19 N·m.',
          },
          {
            q: '[JEE Advanced] A proton enters a 0.80 T field with speed 5 × 10<sup>5</sup> m/s at 30° to the field. Find the radius and the pitch of its helical path. (<i>m</i><sub>p</sub> = 1.67 × 10<sup>−27</sup> kg, <i>e</i> = 1.6 × 10<sup>−19</sup> C.)',
            a: '<i>r</i> = <i>mv</i> sin 30°/(<i>qB</i>) ≈ 3.3 × 10<sup>−3</sup> m; pitch = <i>v</i> cos 30° · 2π<i>m</i>/(<i>qB</i>) ≈ 3.5 × 10<sup>−2</sup> m.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A charged particle moves through a uniform magnetic field. Which quantity is necessarily unchanged?',
        opts: [
          {
            label: 'velocity',
            nudge: '<b>(a)</b>, <b>(b)</b> wrong: unless <i>v⃗</i> ∥ <i>B⃗</i>, the direction of velocity (and momentum) changes continuously even though magnitude doesn’t.',
          },
          {
            label: 'momentum',
            nudge: '<b>(a)</b>, <b>(b)</b> wrong: unless <i>v⃗</i> ∥ <i>B⃗</i>, the direction of velocity (and momentum) changes continuously even though magnitude doesn’t.',
          },
          { label: 'kinetic energy', nudge: null },
          {
            label: 'acceleration',
            nudge: '<b>(d)</b> wrong: unless <i>v⃗</i> ∥ <i>B⃗</i>, the acceleration is perpendicular to <i>v⃗</i> (toward the centre of the circle, or the axis of the helix) and constantly changes direction.',
          },
        ],
        correct: 2,
        solution: 'The force is always ⊥ <i>v⃗</i>, so it does no work — speed and kinetic energy are constant.',
      },
      {
        t: 'mcq',
        q: 'In a cyclotron, if the speed of the particle is doubled, its period of revolution:',
        opts: [
          {
            label: 'doubles',
            nudge: '<b>(b)</b> tempts those who reason “faster ⇒ shorter period” without recalling that the radius grows too; <b>(a)</b> and <b>(d)</b> are unsupported guesses.',
          },
          {
            label: 'halves',
            nudge: '<b>(b)</b> tempts those who reason “faster ⇒ shorter period” without recalling that the radius grows too; <b>(a)</b> and <b>(d)</b> are unsupported guesses.',
          },
          { label: 'is unchanged', nudge: null },
          {
            label: 'quadruples',
            nudge: '<b>(b)</b> tempts those who reason “faster ⇒ shorter period” without recalling that the radius grows too; <b>(a)</b> and <b>(d)</b> are unsupported guesses.',
          },
        ],
        correct: 2,
        solution: '<i>T</i> = 2π<i>m</i>/(<i>qB</i>) contains no <i>v</i>. A faster particle simply orbits a larger circle in the same time — the principle the cyclotron is built on.',
      },
      {
        t: 'mcq',
        q: 'A current loop of moment <i>m⃗</i> sits in a uniform field <i>B⃗</i>. The torque is maximum when:',
        opts: [
          {
            label: '<i>m⃗</i> ∥ <i>B⃗</i>',
            nudge: '<b>(a)</b>, <b>(d)</b> give sin <i>θ</i> = 0 → zero torque (these are the equilibria).',
          },
          { label: 'the plane of the loop is parallel to <i>B⃗</i>', nudge: null },
          {
            label: 'the plane of the loop is perpendicular to <i>B⃗</i>',
            nudge: '<b>(c)</b> is the classic angle-reference trap: plane ⊥ <i>B⃗</i> means <i>m⃗</i> ∥ <i>B⃗</i>, which is minimum torque.',
          },
          {
            label: '<i>m⃗</i> is antiparallel to <i>B⃗</i>',
            nudge: '<b>(a)</b>, <b>(d)</b> give sin <i>θ</i> = 0 → zero torque (these are the equilibria).',
          },
        ],
        correct: 1,
        solution: '<i>τ</i> = <i>mB</i> sin <i>θ</i> is maximum at <i>θ</i> = 90° (angle between <i>m⃗</i> and <i>B⃗</i>), which means the normal is perpendicular to <i>B⃗</i>, i.e. the plane contains <i>B⃗</i>.',
      },
      {
        t: 'mcq',
        q: 'Two long parallel wires carry currents in opposite directions. They:',
        opts: [
          {
            label: 'attract',
            nudge: '<b>(a)</b> is the most common error, over-applying the “likes repel” intuition from electrostatics.',
          },
          { label: 'repel', nudge: null },
          { label: 'exert no force', nudge: '<b>(c)</b> wrong: there’s always a force unless a current is zero.' },
          { label: 'twist but don’t translate', nudge: '<b>(d)</b> confuses this with the torque on a loop.' },
        ],
        correct: 1,
        solution: 'Antiparallel currents repel (parallel currents attract — the reverse of static charges).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Believing the magnetic force speeds a charge up.</b> It never does work; speed and KE are invariant. Any change is in direction only.',
          '<b>Forgetting the force vanishes for <i>v⃗</i> ∥ <i>B⃗</i>.</b> A charge moving along the field feels nothing and goes straight; only the perpendicular velocity component curves.',
          '<b>Wrong angle in <i>τ</i> = <i>NIAB</i> sin <i>θ</i>.</b> <i>θ</i> is between the <b>normal</b> <i>m⃗</i> and <i>B⃗</i>, not between the plane and <i>B⃗</i>. If a problem gives “plane makes angle <i>α</i> with <i>B</i>,” then <i>θ</i> = 90° − <i>α</i>.',
          '<b>Getting attract/repel backwards.</b> Parallel (like) currents <b>attract</b> — opposite to like charges.',
          '<b>Galvanometer angle.</b> The radial field is engineered so the coil’s plane is always parallel to <i>B⃗</i> (sin <i>θ</i> = 1), making deflection linear in current; don’t insert a sin <i>θ</i> factor.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “charge in a field” problem, first ask what was held constant — same speed, same voltage, or same momentum? Same voltage ⇒ use <i>r</i> ∝ √<i>m</i>/√<i>q</i>; same momentum ⇒ <i>r</i> ∝ 1/<i>q</i>. Choosing the right proportionality up front turns a messy numerical into a one-line ratio.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Master equation',
            note: '<i>F⃗</i> = <i>qv⃗</i> × <i>B⃗</i> — perpendicular to <i>v⃗</i>, does <b>no work</b>.',
          },
          {
            f: 'Circular motion',
            note: '<i>r</i> = <i>mv</i>/(<i>qB</i>), <i>T</i> = 2π<i>m</i>/(<i>qB</i>) (speed-independent), <i>f</i><sub>c</sub> = <i>qB</i>/(2π<i>m</i>).',
          },
          {
            f: 'Velocity selector',
            note: '<i>v</i> = <i>E</i>/<i>B</i>. <b>Cyclotron max KE:</b> <i>q</i><sup>2</sup><i>B</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>m</i>).',
          },
          {
            f: 'Force on conductor',
            note: '<i>F⃗</i> = <i>IL⃗</i> × <i>B⃗</i>, <i>F</i> = <i>BIL</i> sin <i>θ</i>.',
          },
          {
            f: 'Parallel wires',
            note: '<i>F</i>/<i>L</i> = μ<sub>0</sub><i>I</i><sub>1</sub><i>I</i><sub>2</sub>/(2π<i>d</i>) — like currents <b>attract</b>.',
          },
          {
            f: 'Torque on loop',
            note: '<i>τ⃗</i> = <i>m⃗</i> × <i>B⃗</i>, <i>τ</i> = <i>NIAB</i> sin <i>θ</i>, <i>m⃗</i> = <i>NIA⃗</i> (A·m<sup>2</sup>, [A L<sup>2</sup>]); <i>U</i> = −<i>m⃗</i> · <i>B⃗</i>.',
          },
          {
            f: 'Galvanometer',
            note: '<i>φ</i> = (<i>NAB</i>/<i>k</i>)<i>I</i> (radial field ⇒ deflection ∝ current).',
          },
        ],
        aids: [
          '“Magnetic force only steers, never speeds”',
          '“like currents cuddle” (parallel attract)',
          '“theta is to the normal, not the plane.”',
        ],
      },
    ],
  },
];
