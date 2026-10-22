import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional topic H: the book's "Chapter Synthesis & Master
 * Revision", pp. 431–435 of the Class 12 Physics Master Reference, word for
 * word. Its sections 1 and 3 to 7 are kept, each as a part; section 2, the
 * Master formula compendium (pp. 431–433, with its "Common units &
 * dimensions" line), is not copied (founder decision, 2026-10-22: the app has
 * its own Formula sheet). The section's opening "How to use this section"
 * paragraph opens the first part. Figure 6.8 (caption p. 431, drawn p. 432)
 * is redrawn in lib/diagrams/physics-12-06.ts.
 */
export const TOPICS: Topic[] = [
  // ──────────────────── Additional topic H · pp. 431–435 ────────────────────
  {
    n: 'H',
    title: 'Chapter Synthesis & Master Revision',
    extra: true,
    kalam: 'If you can work through this section comfortably, you know Chapter 6.',
    blocks: [
      { t: 'part', title: 'The one idea behind the whole chapter' },
      {
        t: 'p',
        html: '<b>How to use this section:</b> Everything before this taught the chapter piece by piece. This section is the “zoom out” — it shows how the pieces are really one idea, drills the traps that span topics, and finishes with boss-level problems that combine topics the way real exams do. If you can work through this section comfortably, you know Chapter 6.',
      },
      {
        t: 'p',
        html: 'Every result in this chapter is a consequence of a single sentence:<br><b>A changing magnetic flux induces an emf:</b> <i>ε</i> = −<i>N</i> dΦ<sub>B</sub>/d<i>t</i>, and the induced effects oppose the change that produced them (Lenz / energy conservation).',
      },
      {
        t: 'p',
        html: 'Flux is Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i>. There are exactly <b>three</b> things you can change to make flux vary — and each one is a “topic” of this chapter:<br>• <b>Change</b> <i>B</i> (the field) → mutual & self-induction, transformers (Topic 03).<br>• <b>Change</b> <i>A</i> (the area, by moving a conductor) → motional emf, the rod-on-rails generator (Topic 02).<br>• <b>Change</b> <i>θ</i> (the orientation, by rotating the coil) → the AC generator (Topic 04).',
      },
      {
        t: 'p',
        html: 'And one bonus case: when the conductor is a <b>solid block</b> rather than a wire, the induced currents swirl as <b>eddy currents</b> (Topic 02). That is the entire chapter on one page.',
      },
      { t: 'fig', id: 'p12-06-fig-6.8' },

      { t: 'part', title: 'Choosing the right tool in a problem' },
      {
        t: 'p',
        html: 'A fast diagnostic when you face an unfamiliar question:<br>• <b>Is something moving?</b> If a conductor sweeps area, reach for motional emf <i>ε</i> = <i>Bvl</i> (or ½<i>Bωl</i><sup>2</sup> if it rotates about an end).<br>• <b>Is a current changing in a coil?</b> Reach for inductance: <i>ε</i> = −<i>L</i> d<i>I</i>/d<i>t</i> (same coil) or <i>ε</i><sub>2</sub> = −<i>M</i> d<i>I</i><sub>1</sub>/d<i>t</i> (neighbouring coil).<br>• <b>Is a coil rotating in a field?</b> It is an AC generator: <i>ε</i> = <i>NBAω</i> sin <i>ωt</i>.<br>• <b>Is the field itself changing in time?</b> Go straight to Faraday: <i>ε</i> = −<i>N</i> dΦ/d<i>t</i>, differentiating Φ = <i>BA</i> cos <i>θ</i> with whatever is time-dependent.<br>• <b>Asked only for total charge?</b> Skip emf and current — use <i>q</i> = <i>N</i>ΔΦ/<i>R</i>.<br>• <b>Need a direction or a sign?</b> That is always Lenz’s law (oppose the change).',
      },

      { t: 'part', title: 'Cross-topic traps (the ones that span topics)' },
      {
        t: 'mistakes',
        items: [
          '<b>Flux vs rate of flux.</b> A large constant flux gives zero emf. The most-failed idea in the chapter.',
          '<b>The angle <i>θ</i>.</b> Always measured from the <b>area vector (normal)</b>, not the plane. “Field at angle <i>α</i> to the plane” ⇒ <i>θ</i> = 90° − <i>α</i>, so Φ = <i>BA</i> sin <i>α</i>.',
          '<b>Flux and emf are 90° out of phase</b> (vivid in the AC generator): emf peaks when flux is zero.',
          '<i>L</i> ∝ <i>N</i><sup>2</sup>, <i>U</i> ∝ <i>I</i><sup>2</sup>, <i>ε</i><sub>0</sub> ∝ <i>ω</i> — square and linear laws are easy to mix up; check the power of each variable.',
          '<b>The minus sign is direction, not magnitude.</b> Compute size first, assign direction (Lenz) second.',
          '<b>Conductor type matters for eddy currents.</b> Insulators have none; that is why a magnet falls fast through a PVC tube and slowly through a copper one.',
          '<b>Slip rings (AC) vs split ring (DC).</b> The lone structural difference between an AC and DC generator.',
        ],
      },

      { t: 'part', title: 'Synthesis problems (boss level)' },
      {
        t: 'p',
        html: 'These deliberately combine topics, as exam problems do. Try each before reading the solution.',
      },
      {
        t: 'ex',
        tag: 'Synthesis Problem 1 (Topics 01 + 02)',
        q: 'A square loop of side <i>a</i> = 0.10 m, resistance <i>R</i> = 0.20 Ω, is pulled out of a region of uniform field <i>B</i> = 0.50 T (field perpendicular to the loop) at a constant <i>v</i> = 2.0 m/s as it crosses the boundary. Find (a) the induced emf, (b) the current, (c) the force required, (d) the total charge that flows as the loop fully exits, and (e) the heat generated.',
        steps: [
          '<b>Solution.</b> While the loop straddles the boundary, only one side cuts field lines, so it is a motional-emf problem.',
          '(a) <i>ε</i> = <i>Bva</i> = (0.50)(2.0)(0.10) = 0.10 V.',
          '(b) <i>I</i> = <i>ε</i>/<i>R</i> = 0.10/0.20 = 0.50 A.',
          '(c) <i>F</i> = <i>BIa</i> = (0.50)(0.50)(0.10) = 0.025 N.',
          '(d) Total flux lost = <i>Ba</i><sup>2</sup>, so <i>q</i> = ΔΦ/<i>R</i> = (0.50)(0.10)<sup>2</sup>/0.20 = 0.025 C (using the time-independent charge result from Topic 01).',
          '(e) Exit time <i>t</i> = <i>a</i>/<i>v</i> = 0.05 s; heat = <i>I</i><sup>2</sup><i>Rt</i> = (0.50)<sup>2</sup>(0.20)(0.05) = 2.5 × 10<sup>−3</sup> J — equal to the mechanical work <i>Fvt</i>, as energy conservation demands.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'Synthesis Problem 2 (Topics 03 + 04)',
        q: 'Two coaxial solenoids have mutual inductance <i>M</i> = 2.0 mH. The primary carries an alternating current <i>i</i><sub>p</sub> = <i>I</i><sub>0</sub> sin <i>ωt</i> with <i>I</i><sub>0</sub> = 3.0 A and <i>f</i> = 50 Hz. Find the peak emf induced in the secondary.',
        steps: [
          '<b>Solution.</b> <i>ε</i><sub>2</sub> = −<i>M</i> d<i>i</i><sub>p</sub>/d<i>t</i> = −<i>MI</i><sub>0</sub><i>ω</i> cos <i>ωt</i>, so the peak is',
          '(Note the structural echo of the AC generator: a sinusoidal drive gives a sinusoidal, 90°-shifted output.)',
        ],
        ans: '<i>ε</i><sub>2,peak</sub> = <i>MI</i><sub>0</sub><i>ω</i> = (2.0 × 10<sup>−3</sup>)(3.0)(2π × 50) = (2.0 × 10<sup>−3</sup>)(3.0)(314.16) ≈ 1.9 V',
      },
      {
        t: 'ex',
        tag: 'Synthesis Problem 3 (Topic 04 + AC power)',
        q: 'An AC generator has a coil of <i>N</i> = 50 turns, area <i>A</i> = 0.020 m<sup>2</sup>, in a field <i>B</i> = 0.30 T, rotating at <i>f</i> = 50 Hz, connected across <i>R</i> = 20 Ω. Find (a) the peak emf, (b) the rms current, and (c) the average power delivered.',
        steps: [
          '<b>Solution.</b> (a) <i>ε</i><sub>0</sub> = <i>NBAω</i> = (50)(0.30)(0.020)(2π × 50) = (50)(0.30)(0.020)(314.16) ≈ 94 V.',
          '(b) <i>I</i><sub>rms</sub> = <i>ε</i><sub>0</sub>/(√2 <i>R</i>) = 94.25/((1.414)(20)) ≈ 3.3 A.',
          '(c) <i>P</i><sub>avg</sub> = <i>ε</i><sub>0</sub><sup>2</sup>/(2<i>R</i>) = (94.25)<sup>2</sup>/40 ≈ 222 W.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Exam weightage map' },
      {
        t: 'table',
        title: null,
        head: ['Exam', 'Highest-yield from this chapter'],
        rows: [
          [
            'CBSE Boards',
            'Derivations: Faraday/Lenz, motional emf <i>ε</i> = <i>Bvl</i>, solenoid <i>L</i> / coaxial <i>M</i>, AC generator <i>ε</i> = <i>NBAω</i> sin <i>ωt</i>; short answers on eddy-current uses and Lenz’s law.',
          ],
          [
            'NEET',
            'Concept questions: flux-vs-emf, Lenz direction, eddy-current applications (laminations, magnetic braking, the pipe demo), coil position for max/zero emf.',
          ],
          [
            'JEE Main',
            'Numericals: induced charge, rod-on-rails chain, terminal velocity, self/mutual inductance and energy, peak/instantaneous generator emf.',
          ],
          [
            'JEE Advanced',
            'Flux by integration (loop near a wire), rotating-rod and coupled-circuit problems, multi-concept fusions with mechanics and AC power.',
          ],
        ],
      },

      { t: 'part', title: 'Final revision checklist' },
      {
        t: 'p',
        html: 'Tick each only if you can do it without notes:<br>• State and apply Φ = <i>BA</i> cos <i>θ</i>, getting the angle from the <b>normal</b>.<br>• State Faraday’s and Lenz’s laws and explain Lenz as energy conservation.<br>• Derive <i>ε</i> = <i>Bvl</i> two ways (Lorentz force and flux), and the rod-on-rails force/power chain.<br>• Find terminal velocity by balancing gravity against magnetic drag.<br>• Explain eddy currents, their uses, and why laminations reduce the loss.<br>• Derive the solenoid self-inductance and the coaxial-solenoid mutual inductance.<br>• Use <i>L</i> ∝ <i>N</i><sup>2</sup>, <i>U</i> = ½<i>LI</i><sup>2</sup>, <i>u</i><sub>B</sub> = <i>B</i><sup>2</sup>/(2μ<sub>0</sub>), and <i>M</i> = <i>k</i>√(<i>L</i><sub>1</sub><i>L</i><sub>2</sub>).<br>• Use the time-independent charge <i>q</i> = <i>N</i>ΔΦ/<i>R</i>.<br>• Derive the AC-generator emf and state when it is maximum/zero (flux–emf phase).<br>• Distinguish slip rings (AC) from a split-ring commutator (DC).<br>• Solve a multi-topic problem like the three above end to end.',
      },
    ],
  },
];
