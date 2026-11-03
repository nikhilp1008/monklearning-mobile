import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topic 04: pp. 423–430 of the Class 12 Physics Master Reference,
 * word for word: AC Generator, split at its Sections 1 to 8. Figure 6.7
 * (caption p. 425, drawn p. 426) is redrawn in lib/diagrams/physics-12-06.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 423–430 ─────────────────────────
  {
    n: '04',
    title: 'AC Generator',
    kalam: 'An AC generator converts mechanical energy into electrical energy (it is, in effect, an electric motor run in reverse).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A guaranteed CBSE Boards favourite — the derivation of <i>ε</i> = <i>NBAω</i> sin <i>ωt</i> together with principle and construction is a perennial 3-mark question. NEET asks crisp conceptuals on the coil position for maximum/zero emf and on slip rings. JEE Main carries numericals on peak and instantaneous emf and on the link between rotation speed and output frequency. JEE Advanced occasionally fuses it with AC-circuit power.',
      },
      {
        t: 'p',
        html: 'Everything so far has been about detecting induced emf. The AC generator is where we harness it — it is the machine that lights your home, and it is nothing more than Faraday’s law put to work on an industrial scale. An <b>AC generator converts mechanical energy into electrical energy</b> (it is, in effect, an electric motor run in reverse).',
      },
      {
        t: 'p',
        html: 'The most relatable version is the old <b>bicycle dynamo</b> that powers a cycle lamp. As you pedal, a small coil spins inside a magnet; the faster you pedal, the brighter the lamp glows. That is the entire principle: spin a coil in a magnetic field and an emf appears across its ends.',
      },
      {
        t: 'p',
        html: 'Why does spinning produce emf? Recall flux is Φ = <i>BA</i> cos <i>θ</i>. In Topics 01–03 we changed flux by changing <i>B</i> (inductance) or by changing the area <i>A</i> (motional emf). The generator changes the <b>third</b> variable — the <b>angle</b> <i>θ</i>. As the coil rotates, <i>θ</i> = <i>ωt</i> sweeps continuously, so cos <i>ωt</i> oscillates, the flux oscillates, and Faraday’s law delivers a continuously varying emf. Because the rotation is steady and the field uniform, the output is a clean <b>sine wave</b> — alternating current.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the coil as a swinging gate in a stream of field lines. When the coil’s plane is parallel to the field (its sides slicing straight across the field lines), it is cutting lines as fast as possible — the flux is momentarily zero but changing fastest, so the emf is at its <b>peak</b>. A quarter-turn later, when the coil’s plane is perpendicular to the field, the flux is maximum but momentarily not changing (the sides are gliding along the lines, not cutting them), so the emf is <b>zero</b>. This is the single most important and most counter-intuitive fact of the topic: <b>emf is maximum exactly when flux is zero, and zero exactly when flux is maximum</b> — they are a quarter-cycle (90°) out of step.',
      },
      {
        t: 'p',
        html: 'The construction follows directly. A rectangular <b>armature coil</b> of many turns is mounted on an axle between the poles of a strong <b>field magnet</b>. The axle is turned by some prime mover (water in a hydro dam, steam in a thermal plant, wind in a turbine). The two ends of the coil connect to two <b>slip rings</b> that rotate with it, and stationary carbon <b>brushes</b> press against the rings to tap the output. The slip rings are what keep the output alternating: each end of the coil stays connected to the same external terminal, so as the emf in the coil reverses every half-turn, the output reverses too. (Replace the slip rings with a single split ring — a commutator — and you would instead get pulsating DC: that is the only construction difference between an AC and a DC generator.)',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The clean <i>ε</i> = <i>ε</i><sub>0</sub> sin <i>ωt</i> output assumes a <b>uniform field</b> and <b>uniform angular velocity</b> <i>ω</i>. Non-uniform rotation or a non-uniform field distorts the waveform.<br>• Peak emf <i>ε</i><sub>0</sub> = <i>NBAω</i> depends on <i>ω</i>, so the output <b>amplitude and frequency rise together</b> with rotation speed — you cannot raise one without the other.<br>• “Maximum emf” always refers to the amplitude <i>ε</i><sub>0</sub>, reached when the coil plane is parallel to <i>B⃗</i>.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Instantaneous flux linkage (area vector at angle <i>θ</i> = <i>ωt</i> to the field)',
        main: 'Φ = <i>NBA</i> cos <i>ωt</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Instantaneous induced emf',
        main: '<i>ε</i> = −dΦ/d<i>t</i> = <i>NBAω</i> sin <i>ωt</i> = <i>ε</i><sub>0</sub> sin <i>ωt</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Peak (maximum) emf',
        main: '<i>ε</i><sub>0</sub> = <i>NBAω</i> = <i>NBA</i>(2π<i>f</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angular frequency and output current (across resistance <i>R</i>)',
        main: '<i>ω</i> = 2π<i>f</i><br><i>I</i> = (<i>ε</i><sub>0</sub>/<i>R</i>) sin <i>ωt</i> = <i>I</i><sub>0</sub> sin <i>ωt</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'RMS and average-power bridge to AC circuits',
        main: '<i>ε</i><sub>rms</sub> = <i>ε</i><sub>0</sub>/√2<br><i>P</i><sub>avg</sub> = <i>ε</i><sub>0</sub><sup>2</sup>/(2<i>R</i>) = <i>ε</i><sub>rms</sub><i>I</i><sub>rms</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation key:</b><br>• <i>ε</i> — instantaneous emf; <i>ε</i><sub>0</sub> — peak emf (amplitude)<br>• <i>N</i> — number of turns; <i>A</i> — area of the coil; <i>B</i> — magnetic field<br>• <i>ω</i> — angular velocity of rotation; <i>f</i> — frequency of the generated AC; <i>t</i> — time<br>• <i>θ</i> = <i>ωt</i> — angle between the coil’s area vector and <i>B⃗</i><br>• <i>I</i><sub>0</sub> — peak current; <i>R</i> — load resistance; <i>ε</i><sub>rms</sub>, <i>I</i><sub>rms</sub> — root-mean-square values',
      },
      {
        t: 'p',
        html: '<b>Units & dimensions:</b> emf in volt (V); <i>ω</i> in rad/s; <i>f</i> in hertz (Hz). In India the mains frequency is <i>f</i> = 50 Hz, so <i>ω</i> = 100π ≈ 314 rad/s. Peak emf carries the usual emf dimension [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>].',
      },

      { t: 'part', title: 'CBSE board derivation and construction' },
      {
        t: 'p',
        html: '<b>Derivation of the sinusoidal emf.</b> Consider a coil of <i>N</i> turns and area <i>A</i> rotating with constant angular velocity <i>ω</i> in a uniform magnetic field <i>B</i>, the rotation axis perpendicular to <i>B⃗</i>. Let the coil’s area vector make angle <i>θ</i> with <i>B⃗</i>. With uniform rotation, <i>θ</i> = <i>ωt</i> (taking the area vector along <i>B⃗</i> at <i>t</i> = 0).',
      },
      {
        t: 'p',
        html: 'The flux through one turn is Φ<sub>1</sub> = <i>BA</i> cos <i>ωt</i>, so the total flux linkage is<br>Φ = <i>NBA</i> cos <i>ωt</i>.',
      },
      {
        t: 'p',
        html: 'By Faraday’s law the induced emf is the negative rate of change of this linkage:<br><i>ε</i> = −dΦ/d<i>t</i> = −<i>NBA</i> d/d<i>t</i>(cos <i>ωt</i>) = <i>NBAω</i> sin <i>ωt</i>.',
      },
      {
        t: 'p',
        html: 'Writing the amplitude as <i>ε</i><sub>0</sub> = <i>NBAω</i>, this is the clean sinusoid<br><i>ε</i> = <i>ε</i><sub>0</sub> sin <i>ωt</i>,   <i>ε</i><sub>0</sub> = <i>NBAω</i>.',
      },
      {
        t: 'p',
        html: '<b>Reading the physics off the result.</b> The sin <i>ωt</i> factor confirms the intuition: <i>ε</i> peaks when sin <i>ωt</i> = 1, i.e. <i>ωt</i> = 90°, when the coil’s plane is parallel to <i>B⃗</i> (flux zero, changing fastest); <i>ε</i> = 0 when <i>ωt</i> = 0° or 180°, when the plane is perpendicular to <i>B⃗</i> (flux maximum, momentarily constant). The emf reverses sign every half-rotation — which is precisely why the output is alternating.',
      },
      { t: 'fig', id: 'p12-06-fig-6.7' },
      {
        t: 'p',
        html: '<b>Construction recap (for the descriptive marks):</b><br>• <b>Armature</b> — a coil of many turns wound on a soft-iron core (the core concentrates flux and raises <i>ε</i><sub>0</sub>); it is the rotating part.<br>• <b>Field magnet</b> — supplies the uniform field <i>B</i> (a permanent magnet in small units, an electromagnet in power-station alternators).<br>• <b>Slip rings</b> — two conducting rings rotating with the coil; they keep the output alternating.<br>• <b>Brushes</b> — fixed carbon contacts that tap current from the slip rings to the external circuit.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A rectangular coil of <i>N</i> = 100 turns and area <i>A</i> = 0.020 m<sup>2</sup> rotates at <i>f</i> = 50 Hz in a uniform magnetic field <i>B</i> = 0.50 T. Find the peak emf generated.',
        steps: [
          '<b>Given:</b> <i>N</i> = 100, <i>A</i> = 0.020 m<sup>2</sup>, <i>B</i> = 0.50 T, <i>f</i> = 50 Hz.',
          'First, <i>ω</i> = 2π<i>f</i> = 2π(50) = 100π = 314.16 rad/s.',
          '<i>ε</i><sub>0</sub> = <i>NBAω</i> = (100)(0.50)(0.020)(314.16)',
        ],
        ans: 'The peak emf is about 314 V — close to the peak of India’s 220 V (rms) mains supply, since 220√2 ≈ 311 V.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A simple AC generator produces a peak emf <i>ε</i><sub>0</sub> at output frequency <i>f</i>. The prime mover is then adjusted so the coil spins at <b>twice</b> the angular speed. What happens to (a) the peak emf and (b) the frequency of the output?',
        steps: [
          '<b>The trap:</b> students change the peak emf but forget the frequency also changes — or they over-correct and quadruple the emf.',
          '<b>The fast, correct read:</b> both the amplitude and the output frequency are tied to the same <i>ω</i>. Since <i>ε</i><sub>0</sub> = <i>NBAω</i> and the output frequency is the rotation frequency,<br>• (a) peak emf <b>doubles</b> (<i>ε</i><sub>0</sub> ∝ <i>ω</i>),<br>• (b) output frequency <b>doubles</b> (<i>f</i> ∝ <i>ω</i>).',
          '<b>The one-line rule:</b> spin faster and you get a bigger AND a faster-alternating output, in lock-step.',
        ],
        ans: 'Doubling the speed doubles both.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'The coil of worked example 1 (<i>ε</i><sub>0</sub> = 314 V at 50 Hz) is connected across a load resistor <i>R</i> = 100 Ω. Find the rms emf, the rms current, and the average power delivered.',
        steps: [
          'This bridges the generator output to AC-circuit power.',
          '<i>ε</i><sub>rms</sub> = <i>ε</i><sub>0</sub>/√2 = 314.16/1.414 = 222 V.<br><i>I</i><sub>rms</sub> = <i>ε</i><sub>rms</sub>/<i>R</i> = 222/100 = 2.22 A.<br><i>P</i><sub>avg</sub> = <i>ε</i><sub>rms</sub><i>I</i><sub>rms</sub> = (222)(2.22) ≈ 493 W.',
          '(<b>Check via the peak form:</b> <i>P</i><sub>avg</sub> = <i>ε</i><sub>0</sub><sup>2</sup>/(2<i>R</i>) = (314.16)<sup>2</sup>/200 ≈ 493 W — they agree.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For an AC generator with peak emf <i>ε</i><sub>0</sub>, find (a) the angle of rotation <i>θ</i> (measured from the maximum-flux position) at which the instantaneous emf equals <b>half</b> its peak value, and (b) the fraction of the peak flux that links the coil at that same instant. Comment on the relationship.',
        steps: [
          '(a) The emf is <i>ε</i> = <i>ε</i><sub>0</sub> sin <i>θ</i>. Setting <i>ε</i> = ½<i>ε</i><sub>0</sub>:<br>sin <i>θ</i> = ½ ⇒ <i>θ</i> = 30°.',
          '(b) The flux linkage is Φ = Φ<sub>0</sub> cos <i>θ</i> where Φ<sub>0</sub> = <i>NBA</i> is the peak linkage. At <i>θ</i> = 30°:<br>Φ/Φ<sub>0</sub> = cos 30° = √3/2 ≈ 0.866.',
          '<b>Comment:</b> when the emf has dropped to just half its peak, the flux is still <b>86.6%</b> of its maximum. This is the quantitative face of the 90° phase difference between flux and emf — small emf coincides with large flux, and vice versa. (At this instant, into a resistor <i>R</i>, the delivered power is <i>ε</i><sup>2</sup>/<i>R</i> = (<i>ε</i><sub>0</sub>/2)<sup>2</sup>/<i>R</i>, i.e. only one-quarter of the peak instantaneous power.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A coil of 200 turns and area 0.015 m<sup>2</sup> rotates at <i>ω</i> = 120 rad/s in a field of 0.40 T. Find the peak emf.',
            a: '<i>ε</i><sub>0</sub> = <i>NBAω</i> = (200)(0.40)(0.015)(120) = 144 V',
          },
          {
            q: '[NEET] State the position of the coil (relative to the field) at which the induced emf in an AC generator is maximum, and explain in one line why.',
            a: 'Maximum when the <b>plane of the coil is parallel to</b> <i>B⃗</i> (area vector perpendicular to <i>B⃗</i>) — the flux is then changing at its fastest rate.',
          },
          {
            q: '[JEE Main] An AC generator produces a peak emf of 200 V at 50 Hz. Find the instantaneous emf at a time 1/600 s after the emf passes through zero (going positive).',
            a: '<i>ωt</i> = 2π(50)(1/600) = π/6 = 30°; <i>ε</i> = 200 sin 30° = 100 V',
          },
          {
            q: '[JEE Main] The peak emf of a generator across a 50 Ω resistor is 150 V. Find the average power delivered.',
            a: '<i>P</i><sub>avg</sub> = <i>ε</i><sub>0</sub><sup>2</sup>/(2<i>R</i>) = (150)<sup>2</sup>/100 = 225 W',
          },
          {
            q: '[JEE Advanced] A coil of <i>N</i> turns and area <i>A</i> rotates at angular speed <i>ω</i> in a field <i>B</i>. Show that, at a general instant, the ratio of the instantaneous emf to the instantaneous flux linkage equals <i>ω</i> tan <i>ωt</i>.',
            a: '<i>ε</i>/Φ = (<i>NBAω</i> sin <i>ωt</i>)/(<i>NBA</i> cos <i>ωt</i>) = <i>ω</i> tan <i>ωt</i>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The peak emf of an AC generator with <i>N</i> turns, coil area <i>A</i>, field <i>B</i>, rotating at angular speed <i>ω</i> is:',
        opts: [
          {
            label: '<i>NBA</i>',
            nudge: '<b>(A)</b> omits <i>ω</i> — that is the peak flux linkage Φ<sub>0</sub> = <i>NBA</i>, not the emf.',
          },
          { label: '<i>NBAω</i>', nudge: null },
          {
            label: '<i>NBAω</i><sup>2</sup>',
            nudge: '<b>(C)</b> has an extra power of <i>ω</i>; emf is linear in <i>ω</i>, not quadratic.',
          },
          { label: '<i>BAω</i>', nudge: '<b>(D)</b> drops the turn-count <i>N</i>.' },
        ],
        correct: 1,
        solution: 'From <i>ε</i> = <i>NBAω</i> sin <i>ωt</i>, the amplitude is <i>ε</i><sub>0</sub> = <i>NBAω</i>.',
      },
      {
        t: 'mcq',
        q: 'The slip rings in an AC generator serve to:',
        opts: [
          {
            label: 'convert the alternating emf to direct current',
            nudge: '<b>(A)</b> describes a <b>split-ring commutator</b> (the DC-generator part) — the classic AC/DC trap.',
          },
          {
            label: 'keep the rotating coil electrically connected to the external circuit while preserving the alternating output',
            nudge: null,
          },
          {
            label: 'increase the magnitude of the emf',
            nudge: '<b>(C)</b> Rings do not amplify emf; that depends on <i>N</i>, <i>B</i>, <i>A</i>, <i>ω</i>.',
          },
          {
            label: 'suppress eddy currents in the core',
            nudge: '<b>(D)</b> Eddy currents are handled by laminating the core, not by the rings.',
          },
        ],
        correct: 1,
        solution:
          'Slip rings rotate with the coil and let brushes tap the output without tangling the leads, and crucially they keep each coil end tied to the same terminal, so the output alternates.',
      },
      {
        t: 'mcq',
        q: 'In an AC generator, the induced emf is <b>zero</b> at the instant when:',
        opts: [
          {
            label: 'the plane of the coil is parallel to <i>B⃗</i>',
            nudge: '<b>(A)</b> is the maximum-emf condition (flux zero, changing fastest) — the most common reversal error.',
          },
          { label: 'the plane of the coil is perpendicular to <i>B⃗</i>', nudge: null },
          {
            label: 'the coil plane makes 45° with the field',
            nudge: '<b>(C)</b> is false: at 45° the emf is 0.707 <i>ε</i><sub>0</sub>, not zero.',
          },
          {
            label: 'the flux through the coil is zero',
            nudge: '<b>(D)</b> “flux zero” actually coincides with maximum emf — a direct trap exploiting the flux–emf phase confusion.',
          },
        ],
        correct: 1,
        solution:
          'When the plane is perpendicular to <i>B⃗</i>, the flux is maximum and momentarily not changing, so <i>ε</i> = −dΦ/d<i>t</i> = 0.',
      },
      {
        t: 'mcq',
        q: 'If the angular speed of an AC generator is doubled (all else unchanged), then:',
        opts: [
          { label: 'only the peak emf doubles', nudge: '<b>(A)</b> forgets that frequency is set by the same <i>ω</i>.' },
          { label: 'the peak emf doubles and the output frequency doubles', nudge: null },
          { label: 'the peak emf quadruples', nudge: '<b>(C)</b> mistakes the linear <i>ω</i>-dependence for a quadratic one.' },
          { label: 'neither changes', nudge: '<b>(D)</b> ignores the <i>ω</i>-dependence entirely.' },
        ],
        correct: 1,
        solution: 'Both <i>ε</i><sub>0</sub> = <i>NBAω</i> and the output frequency scale linearly with <i>ω</i>, so each doubles.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing maximum flux with maximum emf.</b> They are 90° out of phase: emf peaks when flux is zero (coil plane parallel to <i>B⃗</i>) and is zero when flux is maximum (coil plane perpendicular). Burn this in.',
          '<b>Forgetting that <i>ε</i><sub>0</sub> depends on <i>ω</i>.</b> Speed up the rotation and the output grows in amplitude and in frequency together — you cannot change one alone.',
          '<b>AC vs DC generator mix-up.</b> Slip rings → AC; a split-ring commutator → pulsating DC. That ring is the entire structural difference; everything else is identical.',
          '<b>Dropping the 2π.</b> When frequency is given in Hz, you must use <i>ω</i> = 2π<i>f</i> before plugging into <i>ε</i><sub>0</sub> = <i>NBAω</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Memorize the output in one breath — <i>ε</i> = <i>NBAω</i> sin <i>ωt</i>, with <i>ε</i><sub>0</sub> = <i>NBA</i>(2π<i>f</i>). Whenever a question says “maximum emf,” it means the amplitude <i>ε</i><sub>0</sub>, and at that instant the coil is edge-on to the field (plane parallel to <i>B⃗</i>). For power questions, jump straight to <i>P</i><sub>avg</sub> = <i>ε</i><sub>0</sub><sup>2</sup>/(2<i>R</i>).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Flux & emf',
            note: 'Φ = <i>NBA</i> cos <i>ωt</i>, <i>ε</i> = <i>NBAω</i> sin <i>ωt</i> = <i>ε</i><sub>0</sub> sin <i>ωt</i>.',
          },
          {
            f: 'Peak emf',
            note: '<i>ε</i><sub>0</sub> = <i>NBAω</i> = <i>NBA</i>(2π<i>f</i>) — depends on <i>N</i>, <i>B</i>, <i>A</i>, and rotation speed.',
          },
          { f: 'Frequency', note: '<i>ω</i> = 2π<i>f</i>; Indian mains <i>f</i> = 50 Hz (<i>ω</i> ≈ 314 rad/s).' },
          {
            f: 'Power into load <i>R</i>',
            note: '<i>ε</i><sub>rms</sub> = <i>ε</i><sub>0</sub>/√2, <i>P</i><sub>avg</sub> = <i>ε</i><sub>0</sub><sup>2</sup>/(2<i>R</i>).',
          },
          { f: 'Phase fact', note: 'emf and flux are 90° out of step — max emf at zero flux, zero emf at max flux.' },
          {
            f: 'Construction',
            note: 'armature + field magnet + <b>slip rings</b> (→ AC) + brushes. Split ring instead → DC.',
          },
        ],
        aids: [
          '“Edge-on for max emf” (coil plane parallel to field).',
          '“Slip rings sing AC; split ring barks DC.”',
          '“Faster spin = bigger and quicker.”',
        ],
      },
    ],
  },
];
