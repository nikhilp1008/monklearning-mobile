import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topics 01 and 02: pp. 81–98 of the Class 12 Physics Master
 * Reference, word for word: Electrostatic Potential and Equipotential
 * Surfaces (pp. 81–90) and Electrostatic Potential Energy (pp. 91–98). The
 * chapter’s title page and contents (p. 80) are not copied. Each is split at
 * its Sections 1 to 8. Figures 2.1 (pp. 83–84), 2.2 (pp. 85–86) and 2.3
 * (pp. 93–94) are redrawn in lib/diagrams/physics-12-02.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 81–90 ─────────────────────────
  {
    n: '01',
    title: 'Electrostatic Potential and Equipotential Surfaces',
    kalam:
      'Every point in an electric field has a number attached to it that says: how much work would it take to haul one unit of positive charge up to here, all the way from infinitely far away?',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This topic is the conceptual gateway to the whole chapter. CBSE Boards reliably ask a 2–3 mark definition or the <i>E</i> = −d<i>V</i>/d<i>r</i> derivation, plus equipotential-surface diagrams. JEE Main asks 1–2 numericals on potential due to charge systems and the field–potential relation. NEET loves the “is it <i>V</i> or is it <i>E</i> that’s zero here?” conceptual trap. JEE Advanced uses it as a hidden first step inside larger energy and field problems.',
      },
      {
        t: 'p',
        html: 'Imagine you’re trekking up to a hill station — say the climb from Dehradun up to Mussoorie. The higher you go, the more effort you’ve stored: let go of a stone at the top and it comes crashing down all on its own. <b>Altitude</b> here is doing something quietly powerful — it’s telling you how much “potential to do work” a position holds, before you’ve even placed a stone there. Notice that altitude is a property of the location on the mountain, not of the stone. A pebble and a boulder both sit at “2000 metres”; how much energy each actually carries depends on its mass, but the 2000 metres belongs to the spot.',
      },
      {
        t: 'p',
        html: '<b>Electrostatic potential is exactly this “electrical altitude.”</b> Every point in an electric field has a number attached to it that says: how much work would it take to haul one unit of positive charge up to here, all the way from infinitely far away? That number is the potential <i>V</i> at that point. Formally:<br><i>V</i> = <i>W</i><sub>∞→<i>P</i></sub>/<i>q</i><sub>0</sub><br>where <i>W</i><sub>∞→<i>P</i></sub> is the work done by an external agent in bringing a tiny positive test charge <i>q</i><sub>0</sub> from infinity to the point <i>P</i>, moving it slowly so it never picks up speed. Divide out <i>q</i><sub>0</sub> and what’s left is a property of the point in space, just like altitude is a property of the spot on the mountain.',
      },
      { t: 'p', html: 'Two consequences fall out immediately, and they’re the source of most exam confusion:' },
      {
        t: 'p',
        html: 'First, <b>potential is a scalar.</b> It has no direction. When several charges are present, you simply add up their individual potentials — with their plus and minus signs — like entries in a bank passbook. A +5 V contribution and a −5 V contribution cancel to 0. This is gloriously easier than adding electric fields, which are vectors and demand you track directions and angles.',
      },
      {
        t: 'p',
        html: 'Second, the difference in potential between two points is what actually drives charges around. Just as water flows from a higher tank to a lower one, positive charge “wants” to slide from high potential to low potential. The potential difference is<br><i>V</i><sub><i>B</i></sub> − <i>V</i><sub><i>A</i></sub> = −∫<sub><i>A</i></sub><sup><i>B</i></sup> <i>E⃗</i> · d<i>l⃗</i> = <i>W</i><sub><i>A</i>→<i>B</i></sub>/<i>q</i><sub>0</sub>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the field around a positive charge as a hill, with the charge sitting on the peak. The potential is the height of the ground at each point — steep and tall near the charge, flattening out as you walk away. Now draw the contour lines you’d see on a trekking map: each line joins points of equal height. Walk along a contour line and you neither climb nor descend — you do zero work against gravity. Those contour lines are <b>equipotential surfaces</b>: the locus of all points sitting at the same potential. Move a charge anywhere along one and the field does no work on it, because there’s no “height difference” to roll down. And just as the steepest descent on a hill is always perpendicular to the contour lines, the electric field is always <b>perpendicular to the equipotential surface</b> — it points straight “downhill,” toward decreasing potential.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The clean formula <i>V</i> = 1/(4πε<sub>0</sub>) · <i>Q</i>/<i>r</i> assumes a <b>point charge</b> (or a spherically symmetric charge, treated from outside) and <i>V</i> = 0 <b>at infinity</b> as the reference. Choose a different reference and every number shifts by a constant.<br>• The whole framework is <b>electrostatic</b> — charges at rest. Once charges move and currents flow, “potential” needs more careful handling.<br>• <i>V</i> = 0 at a point does <b>not</b> mean <i>E</i> = 0 there, and <i>E</i> = 0 does <b>not</b> mean <i>V</i> = 0. They answer different questions. Burn this in — it is the single most exam-tested confusion in the chapter.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Electrostatic potential at a point (due to a point charge <i>Q</i>)',
        main: '<i>V</i> = 1/(4πε<sub>0</sub>) · <i>Q</i>/<i>r</i>',
        legend: [
          '<i>Q</i> = source charge (C, carries its own sign)',
          '<i>r</i> = distance from charge to the point (m)',
          'ε<sub>0</sub> = permittivity of free space',
        ],
        note: 'SI unit of <i>V</i>: <b>volt</b> (V = J C<sup>−1</sup>). Dimensional formula of potential: [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Potential difference',
        main: '<i>V</i><sub><i>B</i></sub> − <i>V</i><sub><i>A</i></sub> = −∫<sub><i>A</i></sub><sup><i>B</i></sup> <i>E⃗</i> · d<i>l⃗</i>',
        legend: [],
        note: 'Same unit and dimensions as potential. It is a property of the <b>two points</b>, never of the charge being moved.',
      },
      {
        t: 'formula',
        kicker: 'Work done in moving a charge <i>q</i> between two points',
        main: '<i>W</i><sub><i>A</i>→<i>B</i></sub> = <i>q</i>(<i>V</i><sub><i>B</i></sub> − <i>V</i><sub><i>A</i></sub>) = <i>q</i> Δ<i>V</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Potential due to a system / continuous distribution (superposition — algebraic sum)',
        main: '<i>V</i> = 1/(4πε<sub>0</sub>) · Σ<sub><i>i</i></sub> <i>q</i><sub><i>i</i></sub>/<i>r</i><sub><i>i</i></sub><br>Continuous distribution: <i>V</i> = 1/(4πε<sub>0</sub>) · ∫ d<i>q</i>/<i>r</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Potential due to a short dipole at distance <i>r</i> (<i>r</i> ≫ size), at angle <i>θ</i> from the axis',
        main: '<i>V</i> = 1/(4πε<sub>0</sub>) · (<i>p</i> cos <i>θ</i>)/<i>r</i><sup>2</sup><br>Axial point (<i>θ</i> = 0°): <i>V</i> = 1/(4πε<sub>0</sub>) · <i>p</i>/<i>r</i><sup>2</sup> (maximum)<br>Equatorial point (<i>θ</i> = 90°): <i>V</i> = 0',
        legend: [],
        note: 'Dipole moment <i>p</i> = <i>q</i>(2<i>a</i>); unit C · m; dimensional formula [M<sup>0</sup> L<sup>1</sup> T<sup>1</sup> A<sup>1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Relation between field and potential',
        main: '<i>E</i> = −d<i>V</i>/d<i>r</i><br>or, in full: <i>E⃗</i> = −(∂<i>V</i>/∂<i>x</i> <i>î</i> + ∂<i>V</i>/∂<i>y</i> <i>ĵ</i> + ∂<i>V</i>/∂<i>z</i> <i>k̂</i>)',
        legend: [],
        note: 'The minus sign says the field points toward <b>decreasing</b> potential. Electric field unit: V m<sup>−1</sup> = N C<sup>−1</sup>; dimensional formula [M L T<sup>−3</sup> A<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Reference constant',
        main: '1/(4πε<sub>0</sub>) = 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup><br>with ε<sub>0</sub> = 8.85 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>',
        legend: [],
        note: 'Dimensional formula of ε<sub>0</sub>: [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>].',
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation A — Potential due to a point charge.</b>' },
      {
        t: 'p',
        html: '<b>Setup and assumptions:</b> Let a point charge +<i>Q</i> sit at the origin. We bring a positive test charge <i>q</i><sub>0</sub> from infinity to a point <i>P</i> at distance <i>r</i>, taking <i>V</i> = 0 at infinity and moving <i>q</i><sub>0</sub> so slowly that it has no kinetic energy at any instant.',
      },
      {
        t: 'p',
        html: 'At an intermediate distance <i>x</i> from <i>Q</i>, the field magnitude is<br><i>E</i> = 1/(4πε<sub>0</sub>) · <i>Q</i>/<i>x</i><sup>2</sup>.<br>This field pushes the test charge outward. To move it inward without acceleration, an external agent must apply a force equal and opposite to the electric force. By definition, the potential is the work done per unit charge against the field:<br><i>V</i> = −∫<sub>∞</sub><sup><i>r</i></sup> <i>E⃗</i> · d<i>l⃗</i>.',
      },
      {
        t: 'p',
        html: '<b>Why the minus sign and why this integral?</b> The dot product picks out the component of <i>E⃗</i> along the path. Because the field is radial, along a radial path <i>E⃗</i> · d<i>l⃗</i> = <i>E</i> d<i>x</i>, and the leading minus converts “work done against the field” into the potential. So<br><i>V</i> = −∫<sub>∞</sub><sup><i>r</i></sup> 1/(4πε<sub>0</sub>) · <i>Q</i>/<i>x</i><sup>2</sup> d<i>x</i> = −<i>Q</i>/(4πε<sub>0</sub>) [−1/<i>x</i>]<sub>∞</sub><sup><i>r</i></sup> = −<i>Q</i>/(4πε<sub>0</sub>) (−1/<i>r</i> + 0).<br><i>V</i> = 1/(4πε<sub>0</sub>) · <i>Q</i>/<i>r</i>',
      },
      {
        t: 'p',
        html: 'A negative source charge simply carries its sign through, giving a negative potential — consistent with potential being a signed scalar.',
      },
      { t: 'p', html: '<b>Derivation B — Relation between electric field and potential, <i>E</i> = −d<i>V</i>/d<i>r</i>.</b>' },
      { t: 'fig', id: 'p12-02-fig-2.1' },
      {
        t: 'p',
        html: '<b>Setup:</b> Consider two very close equipotential surfaces. Let surface <i>A</i> be at potential <i>V</i> and surface <i>B</i> at potential <i>V</i> + δ<i>V</i>, separated by a small perpendicular distance δ<i>l</i>. The field <i>E⃗</i> points along this perpendicular (it must — field is always normal to an equipotential surface).',
      },
      {
        t: 'p',
        html: 'Move a unit positive charge from <i>B</i> to <i>A</i>, against the field, through the distance δ<i>l</i>. The work done is<br><i>W</i> = |<i>E⃗</i>| δ<i>l</i>.',
      },
      {
        t: 'p',
        html: 'But work done in moving a unit charge equals the potential difference it climbs:<br>|<i>E⃗</i>| δ<i>l</i> = <i>V</i><sub><i>A</i></sub> − <i>V</i><sub><i>B</i></sub> = <i>V</i> − (<i>V</i> + δ<i>V</i>) = −δ<i>V</i>.<br>Therefore (δ<i>V</i> < 0) since potential falls along the field:<br>|<i>E⃗</i>| = −δ<i>V</i>/δ<i>l</i>,   and in the limit δ<i>l</i> → 0,   <i>E</i> = −d<i>V</i>/d<i>r</i>.',
      },
      {
        t: 'p',
        html: '<b>Physical reading of the two conclusions:</b> (i) the field points in the direction in which potential <b>decreases most steeply</b>; (ii) the magnitude of the field equals the <b>potential gradient</b> — so where equipotential surfaces crowd together, the field is strong, and where they spread apart, it is weak.',
      },
      { t: 'p', html: '<b>Derivation C — Potential due to an electric dipole.</b>' },
      { t: 'fig', id: 'p12-02-fig-2.2' },
      {
        t: 'p',
        html: '<b>Setup and assumptions:</b> A dipole has charges +<i>q</i> and −<i>q</i> separated by 2<i>a</i>, with dipole moment <i>p</i> = <i>q</i>(2<i>a</i>) pointing from −<i>q</i> to +<i>q</i>. We find the potential at a point <i>P</i> a distance <i>r</i> from the centre <i>O</i>, where <i>OP</i> makes angle <i>θ</i> with the axis, in the <b>far field</b> <i>r</i> ≫ <i>a</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — superpose the two point-charge potentials.</b> Potential is a scalar, so<br><i>V</i> = 1/(4πε<sub>0</sub>) · (<i>q</i>/<i>r</i><sub>1</sub> − <i>q</i>/<i>r</i><sub>2</sub>) = <i>q</i>/(4πε<sub>0</sub>) · (<i>r</i><sub>2</sub> − <i>r</i><sub>1</sub>)/(<i>r</i><sub>1</sub><i>r</i><sub>2</sub>),<br>where <i>r</i><sub>1</sub> and <i>r</i><sub>2</sub> are the distances of <i>P</i> from +<i>q</i> and −<i>q</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — approximate for a short dipole.</b> Dropping perpendiculars from the charges onto the line <i>OP</i>, the distances are approximately <i>r</i><sub>1</sub> ≈ <i>r</i> − <i>a</i> cos <i>θ</i> and <i>r</i><sub>2</sub> ≈ <i>r</i> + <i>a</i> cos <i>θ</i>. Hence<br><i>r</i><sub>2</sub> − <i>r</i><sub>1</sub> ≈ 2<i>a</i> cos <i>θ</i>,   <i>r</i><sub>1</sub><i>r</i><sub>2</sub> ≈ <i>r</i><sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — assemble.</b> Substituting and using <i>p</i> = 2<i>aq</i>:<br><i>V</i> = <i>q</i>/(4πε<sub>0</sub>) · (2<i>a</i> cos <i>θ</i>)/<i>r</i><sup>2</sup> = 1/(4πε<sub>0</sub>) · (<i>p</i> cos <i>θ</i>)/<i>r</i><sup>2</sup> = 1/(4πε<sub>0</sub>) · (<i>p⃗</i> · <i>r̂</i>)/<i>r</i><sup>2</sup>.<br><i>V</i> = 1/(4πε<sub>0</sub>) · (<i>p</i> cos <i>θ</i>)/<i>r</i><sup>2</sup>',
      },
      {
        t: 'p',
        html: '<b>Two physical checks.</b> The dipole potential falls off as 1/<i>r</i><sup>2</sup> — <b>faster</b> than a point charge’s 1/<i>r</i>, because the opposite charges’ potentials nearly cancel at large distance. And it depends on <b>direction</b>: maximum on the axis (<i>θ</i> = 0, <i>V</i> = <i>p</i>/(4πε<sub>0</sub><i>r</i><sup>2</sup>)) and exactly <b>zero</b> on the equatorial plane (<i>θ</i> = 90°), where every point is equidistant from both charges.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A small charged sphere carries a charge of +25 nC. (a) Find the electrostatic potential at a point <i>P</i> located 0.30 m from its centre. (b) How much work must be done to bring a charge of +2 nC from infinity to <i>P</i>?',
        steps: [
          '<b>Given:</b> <i>Q</i> = +25 × 10<sup>−9</sup> C, <i>r</i> = 0.30 m, <i>q</i><sub>0</sub> = +2 × 10<sup>−9</sup> C.',
          '(a) Using <i>V</i> = 1/(4πε<sub>0</sub>) · <i>Q</i>/<i>r</i>:<br><i>V</i> = (9 × 10<sup>9</sup>)(25 × 10<sup>−9</sup>)/0.30 = 225/0.30 = 750 V.',
          '(b) Work to bring the charge from infinity (where <i>V</i> = 0) to <i>P</i>:<br><i>W</i> = <i>q</i><sub>0</sub>(<i>V</i><sub><i>P</i></sub> − <i>V</i><sub>∞</sub>) = <i>q</i><sub>0</sub><i>V</i> = (2 × 10<sup>−9</sup>)(750) = 1.5 × 10<sup>−6</sup> J',
          '(Notice the clean discipline: state givens, write the formula, substitute, end with units.)',
        ],
        ans: '<i>V</i> = 750 V; <i>W</i> = 1.5 μJ',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two charges +4 μC and −4 μC are fixed 0.20 m apart. At the exact midpoint of the line joining them, what are the potential <i>V</i> and the field magnitude <i>E</i>?',
        steps: [
          'The instinct that snares students: “the charges are equal and opposite, so everything cancels — <i>V</i> = 0 and <i>E</i> = 0.” <b>Half right, and that’s the trap.</b>',
          '<b>Potential (scalar — add with signs):</b> the midpoint is 0.10 m from each charge; here <i>k</i> = 1/(4πε<sub>0</sub>).<br><i>V</i> = <i>kq</i><sub>1</sub>/<i>r</i> + <i>kq</i><sub>2</sub>/<i>r</i> = <i>k</i>(+4 μC)/0.10 + <i>k</i>(−4 μC)/0.10 = 0.',
          '<b>Field (vector — add with directions):</b> the field from +4 μC points away from it (toward the negative charge); the field from −4 μC points toward it (also toward the negative charge). Both point the <b>same way</b>, so they add:<br><i>E</i> = 2 × <i>kq</i>/<i>r</i><sup>2</sup> = 2 × (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)/(0.10)<sup>2</sup> = 2 × (3.6 × 10<sup>6</sup>)',
          'Zero potential, very much non-zero field. <b>Speed rule:</b> potential cancels (scalar, opposite signs); field reinforces (vectors, same direction).',
        ],
        ans: '<i>V</i> = 0, but <i>E</i> = 7.2 × 10<sup>6</sup> N C<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '(combines: axial potential of a ring + work–potential relation) A thin ring of radius <i>R</i> = 0.4 m carries a uniformly distributed charge <i>Q</i> = +8 nC. (a) Find the potential at the centre <i>O</i> and at a point <i>P</i> on the axis at <i>x</i> = 0.3 m from the centre. (b) Find the work done in carrying a charge of +5 nC from <i>P</i> to <i>O</i>.',
        steps: [
          'The potential on the axis of a ring (every element is at the same distance √(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) from <i>P</i>, so superposition is a single division):<br><i>V</i><sub>axis</sub> = 1/(4πε<sub>0</sub>) · <i>Q</i>/√(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>).',
          '(a) At the centre, <i>x</i> = 0:<br><i>V</i><sub><i>O</i></sub> = (9 × 10<sup>9</sup>)(8 × 10<sup>−9</sup>)/0.4 = 72/0.4 = 180 V.<br>At <i>P</i>, √(<i>R</i><sup>2</sup> + <i>x</i><sup>2</sup>) = √(0.4<sup>2</sup> + 0.3<sup>2</sup>) = √0.25 = 0.5 m (a 3–4–5 triangle):<br><i>V</i><sub><i>P</i></sub> = 72/0.5 = 144 V.',
          '(b) Work done by the external agent in moving the charge from <i>P</i> to <i>O</i>:<br><i>W</i> = <i>q</i>(<i>V</i><sub><i>O</i></sub> − <i>V</i><sub><i>P</i></sub>) = (5 × 10<sup>−9</sup>)(180 − 144) = (5 × 10<sup>−9</sup>)(36) = 1.8 × 10<sup>−7</sup> J',
        ],
        ans: '<i>V</i><sub><i>O</i></sub> = 180 V, <i>V</i><sub><i>P</i></sub> = 144 V, <i>W</i> = 0.18 μJ',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '(field from a potential function + equipotential geometry) In a region the electrostatic potential is given by <i>V</i>(<i>x</i>, <i>y</i>) = <i>α</i>(<i>x</i><sup>2</sup> − <i>y</i><sup>2</sup>), with <i>α</i> = 50 V m<sup>−2</sup> and coordinates in metres. (a) Find <i>E⃗</i> as a function of position. (b) Find the field magnitude at the point (2, 1) m. (c) Identify the shape of the equipotential surfaces. (d) Where, if anywhere, is the field zero?',
        steps: [
          '(a) Use <i>E⃗</i> = −∇<i>V</i>, taking partial derivatives:<br><i>E</i><sub><i>x</i></sub> = −∂<i>V</i>/∂<i>x</i> = −2<i>αx</i>,   <i>E</i><sub><i>y</i></sub> = −∂<i>V</i>/∂<i>y</i> = +2<i>αy</i>,   <i>E</i><sub><i>z</i></sub> = 0.<br><i>E⃗</i> = −2<i>αx</i> <i>î</i> + 2<i>αy</i> <i>ĵ</i>.',
          '(b) At (2, 1): <i>E</i><sub><i>x</i></sub> = −2(50)(2) = −200 V m<sup>−1</sup>, <i>E</i><sub><i>y</i></sub> = 2(50)(1) = +100 V m<sup>−1</sup>.<br>|<i>E⃗</i>| = √((−200)<sup>2</sup> + (100)<sup>2</sup>) = √(40000 + 10000) = √50000 ≈ 224 V m<sup>−1</sup>.',
          '(c) Equipotential surfaces satisfy <i>V</i> = constant, i.e. <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = constant — a family of <b>rectangular hyperbolas</b> (in 3-D, hyperbolic cylinders); the constant 0 gives the pair of planes <i>x</i> = ±<i>y</i>, crossing where <i>E⃗</i> = 0. This is the kind of “uncommon geometry” Advanced rewards: not every equipotential is a sphere or a plane.',
          '(d) The field vanishes where both components are zero: −2<i>αx</i> = 0 and 2<i>αy</i> = 0, i.e. at the <b>origin</b> (0, 0) only. Note that <i>V</i>(0, 0) = 0 too here — but that is a coincidence of this particular function, not a rule.',
        ],
        ans: '<i>E⃗</i> = −2<i>αx</i> <i>î</i> + 2<i>αy</i> <i>ĵ</i>; |<i>E⃗</i>| ≈ 224 V m<sup>−1</sup> at (2, 1); equipotentials are rectangular hyperbolas; <i>E⃗</i> = 0 at the origin',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A point charge of +40 nC is placed in vacuum. Find the potential at a point 0.20 m away, and the work needed to bring a +5 nC charge from infinity to that point.',
            a: '<i>V</i> = 1800 V, <i>W</i> = 9 μJ.',
          },
          {
            q: '[NEET] Four equal charges, each +5 μC, are fixed at the corners of a square such that each corner is 1 m from the centre. Find the potential and the field magnitude at the centre.',
            a: '<i>V</i> = 1.8 × 10<sup>5</sup> V, <i>E</i> = 0 (by symmetry).',
          },
          {
            q: '[JEE Main] Three charges +2 μC, +2 μC and −2 μC are placed at the vertices of an equilateral triangle of side 0.30 m. Find the potential at the centroid.',
            a: '<i>V</i> ≈ 1.04 × 10<sup>5</sup> V.',
          },
          {
            q: '[JEE Main] In a region the potential varies as <i>V</i> = 4<i>x</i><sup>2</sup> (volt, with <i>x</i> in metres). Find the magnitude and direction of the electric field at <i>x</i> = 2 m.',
            a: '<i>E</i> = 16 V m<sup>−1</sup>, directed along −<i>x</i>.',
          },
          {
            q: '[JEE Advanced] An infinitely long straight wire carries a uniform linear charge density <i>λ</i> = 5 × 10<sup>−9</sup> C m<sup>−1</sup>. Find the potential difference between two points at perpendicular distances <i>r</i><sub>1</sub> = 0.10 m and <i>r</i><sub>2</sub> = 0.40 m from the wire. (Use <i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>).)',
            a: '<i>V</i>(<i>r</i><sub>1</sub>) − <i>V</i>(<i>r</i><sub>2</sub>) = 2<i>kλ</i> ln(<i>r</i><sub>2</sub>/<i>r</i><sub>1</sub>) ≈ 125 V, with <i>r</i><sub>1</sub> at the higher potential.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'At the midpoint of the line joining a +<i>q</i> and a −<i>q</i> charge, the electrostatic potential <i>V</i> and the field <i>E</i> are:',
        opts: [
          {
            label: '<i>V</i> = 0, <i>E</i> = 0',
            nudge: '<b>(a)</b> assumes “everything cancels” — the classic confusion of treating the vector field like the scalar potential.',
          },
          { label: '<i>V</i> = 0, <i>E</i> ≠ 0', nudge: null },
          {
            label: '<i>V</i> ≠ 0, <i>E</i> = 0',
            nudge: '<b>(c)</b> is the exact inversion of the truth — picked by reversing which quantity cancels.',
          },
          {
            label: '<i>V</i> ≠ 0, <i>E</i> ≠ 0',
            nudge: '<b>(d)</b> forgets that potential is a signed scalar and that the two contributions are exactly opposite.',
          },
        ],
        correct: 1,
        solution: 'Potentials from equal-and-opposite charges at equal distance cancel (<i>V</i> = 0), but the two field vectors point the same way and reinforce (<i>E</i> ≠ 0).',
      },
      {
        t: 'mcq',
        q: 'Which statement about equipotential surfaces is <b>FALSE</b>?',
        opts: [
          {
            label: 'No work is done in moving a charge along an equipotential surface.',
            nudge: '<b>(a)</b> and <b>(b)</b> are core properties; rejecting them means missing the definition.',
          },
          {
            label: 'The electric field is everywhere perpendicular to the surface.',
            nudge: '<b>(a)</b> and <b>(b)</b> are core properties; rejecting them means missing the definition.',
          },
          { label: 'Two equipotential surfaces at different potentials can intersect.', nudge: null },
          {
            label: 'Equipotential surfaces are closer together where the field is stronger.',
            nudge: '<b>(d)</b> follows directly from <i>E</i> = −d<i>V</i>/d<i>r</i> and is true — the trap here is mistaking a correct statement for the false one.',
          },
        ],
        correct: 2,
        solution: 'Equipotential surfaces at different potentials never intersect — a crossing point would have two different potentials at once, which is impossible. (A single equipotential can cross itself where <i>E</i> = 0, as <i>x</i><sup>2</sup> − <i>y</i><sup>2</sup> = 0 does at the origin in worked example 4.)',
      },
      {
        t: 'mcq',
        q: 'In a region of space the potential is constant (and non-zero). The electric field in that region is:',
        opts: [
          { label: 'zero', nudge: null },
          { label: 'constant but non-zero', nudge: '<b>(b)</b> confuses “constant potential” with “constant field.”' },
          { label: 'infinite', nudge: '<b>(c)</b> has no basis.' },
          {
            label: 'larger where <i>V</i> is larger',
            nudge: '<b>(d)</b> is the deep-rooted error of thinking a big potential means a big field. Field depends on how fast <i>V</i> changes, not on its size.',
          },
        ],
        correct: 0,
        solution: '<i>E</i> = −d<i>V</i>/d<i>r</i>; if <i>V</i> doesn’t change, its gradient is zero, so <i>E</i> = 0.',
      },
      {
        t: 'mcq',
        q: 'A point charge −<i>Q</i> produces, at a distance <i>r</i>, a potential that is:',
        opts: [
          { label: 'positive', nudge: '<b>(a)</b> ignores the sign of the source.' },
          { label: 'negative', nudge: null },
          { label: 'zero', nudge: '<b>(c)</b> would need either <i>Q</i> = 0 or <i>r</i> → ∞.' },
          {
            label: 'dependent on the test charge placed there',
            nudge: '<b>(d)</b> is the conceptual trap: potential is a property of the source and the point, completely independent of any test charge you may or may not place there.',
          },
        ],
        correct: 1,
        solution: '<i>V</i> = 1/(4πε<sub>0</sub>) · (−<i>Q</i>)/<i>r</i> is negative; potential carries the sign of the source charge.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“<i>V</i> = 0 therefore <i>E</i> = 0” (and the reverse).</b> These are independent questions. Midpoint of two equal-and-opposite charges: <i>V</i> = 0, <i>E</i> ≠ 0. Midpoint of two equal like charges: <i>E</i> = 0, <i>V</i> ≠ 0. Always evaluate each separately.',
          '<b>Forgetting potential is a scalar.</b> Students drag in angles and components as if adding fields. Don’t — just add <i>kq</i><sub><i>i</i></sub>/<i>r</i><sub><i>i</i></sub> terms with their signs. It’s a one-line algebraic sum.',
          '<b>Dropping the minus sign in <i>E</i> = −d<i>V</i>/d<i>r</i>.</b> The sign tells you the field points “downhill” toward lower potential. Without it, your field direction is backwards.',
          '<b>Treating work along an equipotential as path-dependent.</b> Any path on an equipotential surface costs zero work, full stop.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & sanity):</b> For “find <i>V</i> at a symmetric point,” use the <b>ratio method</b> — compare distances rather than recomputing <i>k</i> each time. And run a sign check: positive charges raise potential, negative charges lower it, so the sign of your final <i>V</i> should match whichever charge dominates. If a “system of equal-and-opposite charges” gives you a non-zero potential at the symmetry point, you’ve made an arithmetic slip.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Point charge',
            note: '<i>V</i> = 1/(4πε<sub>0</sub>) · <i>Q</i>/<i>r</i> — scalar, in volts, sign of <i>Q</i> carries through.',
          },
          {
            f: 'System of charges',
            note: '<i>V</i> = 1/(4πε<sub>0</sub>) · Σ<sub><i>i</i></sub> <i>q</i><sub><i>i</i></sub>/<i>r</i><sub><i>i</i></sub> — algebraic sum, no vectors.',
          },
          {
            f: 'Dipole',
            note: '<i>V</i> = 1/(4πε<sub>0</sub>) · (<i>p</i> cos <i>θ</i>)/<i>r</i><sup>2</sup> — max on axis, <b>zero</b> on the equatorial plane.',
          },
          {
            f: 'Work',
            note: '<i>W</i><sub><i>A</i>→<i>B</i></sub> = <i>q</i> Δ<i>V</i>; <b>potential difference:</b> <i>V</i><sub><i>B</i></sub> − <i>V</i><sub><i>A</i></sub> = −∫<sub><i>A</i></sub><sup><i>B</i></sup> <i>E⃗</i> · d<i>l⃗</i>.',
          },
          {
            f: 'Field–potential link',
            note: '<i>E</i> = −d<i>V</i>/d<i>r</i> — field points toward decreasing <i>V</i>; crowded equipotentials ⇒ strong field.',
          },
          {
            f: 'Equipotential surface',
            note: '⊥ to <i>E⃗</i> everywhere · zero work to move along it · surfaces at different potentials <b>never</b> intersect.',
          },
          { f: 'Dimensions', note: '<i>V</i> → [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>].' },
        ],
        aids: [
          '“Potential is a scalar — just add with signs.”',
          '“Field flows downhill in potential.” (that’s the minus sign)',
          '“On an equipotential, you ride free.” (zero work)',
          '“<i>V</i> and <i>E</i> are different questions — answer each on its own.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 91–98 ─────────────────────────
  {
    n: '02',
    title: 'Electrostatic Potential Energy',
    kalam: 'The sign of U tells you the story of the system.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial scorer. CBSE Boards routinely ask the 3-mark derivation of the PE of a two-charge system or the dipole-in-a-field energy <i>U</i> = −<i>p⃗</i> · <i>E⃗</i>. JEE Main loves system-of-charges numericals and energy-conservation “find the speed” problems. NEET hammers the 1/<i>r</i> versus 1/<i>r</i><sup>2</sup> trap and sign questions. JEE Advanced folds it inside larger problems — released charges, rotating dipoles, work to assemble or dismantle.',
      },
      {
        t: 'p',
        html: 'Picture trying to seat a big, quarrelsome joint family for a wedding feast. Some relatives can’t stand each other — push two of them close together and you have to actively work to keep them there; the moment you let go, they fly apart. Other relatives are inseparable — they want to sit together, and you’d have to do work to pull them apart. The total “tension stored” in any seating plan depends only on who ends up next to whom, not on the order in which they walked in. That stored tension, ready to be released the instant you stop holding things in place, is exactly what <b>electrostatic potential energy</b> measures.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we said potential <i>V</i> is the “electrical altitude” of a point — work per unit charge to haul a test charge there from infinity. <b>Potential energy <i>U</i> is the actual energy bill for the whole arrangement</b> — the total work an external agent must do to assemble a configuration of charges by bringing each one in slowly from infinity, fighting (or being helped by) the forces of those already placed. Because the electrostatic force is <b>conservative</b>, this bill depends only on the final arrangement, never on the path or the order of assembly. That path-independence is what makes “potential energy” a meaningful idea at all — if the work depended on the route taken, you couldn’t attach a single number to a configuration.',
      },
      { t: 'p', html: 'Two consequences anchor everything that follows:' },
      {
        t: 'p',
        html: '<b>The sign of <i>U</i> tells you the story of the system.</b> Bring two like charges together and you push against repulsion — the external agent does positive work, so <i>U</i> > 0. The system is “wound up” like a compressed spring, eager to fly apart. Bring two unlike charges together and the attraction does the work for you — the external agent does negative work, so <i>U</i> < 0. The system is bound, like a fixed deposit: you’d have to invest energy to break it apart. This is why every bound system in nature — an electron orbiting a proton, a planet orbiting the Sun — carries negative potential energy.',
      },
      {
        t: 'p',
        html: '<b>Energy is conserved, and <i>U</i> is one half of the ledger.</b> If only electrostatic forces act, then kinetic plus potential energy stays constant:<br><i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub> = <i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub>.<br>Release a charge and watch <i>U</i> convert into <i>K</i>: the charge speeds up exactly as much as the potential energy falls. This single line solves a huge fraction of exam problems.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The relationship between work, field, and energy hangs on one signed equation: <i>W</i><sub>field</sub> = −Δ<i>U</i>. When the field does positive work on a charge (the charge “falls downhill” in energy), <i>U</i> decreases — just like a stone losing gravitational PE as it drops. When an external agent does positive work (dragging the charge “uphill” against the field), <i>U</i> increases. Keep a firm grip on who is doing the work and the sign sorts itself out: <i>W</i><sub>external</sub> = +Δ<i>U</i>, while <i>W</i><sub>field</sub> = −Δ<i>U</i>.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <i>U</i> = 0 is <b>chosen</b> at infinite separation. Only differences in <i>U</i> are physically meaningful; you may add any constant without changing the physics.<br>• The clean pairwise formula assumes <b>point charges</b> and a <b>quasi-static</b> assembly (brought in infinitely slowly, so no kinetic energy is generated during assembly).<br>• <i>U</i> ∝ 1/<i>r</i>, <b>not</b> 1/<i>r</i><sup>2</sup>. The 1/<i>r</i><sup>2</sup> belongs to force and field. Confusing the two is the single most common arithmetic disaster in this topic.<br>• The dipole result <i>U</i> = −<i>p⃗</i> · <i>E⃗</i> assumes a <b>uniform</b> external field (no net force, only a torque); in a uniform field it holds exactly for a dipole of any length.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'PE of a system of two point charges',
        main: '<i>U</i> = 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub>',
        legend: [
          '<i>q</i><sub>1</sub>, <i>q</i><sub>2</sub> = the two charges',
          '<i>r</i><sub>12</sub> = separation (m)',
        ],
        note: '<i>q</i><sub>1</sub>, <i>q</i><sub>2</sub> carry their own signs. SI unit: <b>joule (J)</b>. Dimensional formula of energy: [M L<sup>2</sup> T<sup>−2</sup>]. <i>U</i> > 0 for like charges, <i>U</i> < 0 for unlike charges; <i>U</i> = 0 at <i>r</i><sub>12</sub> = ∞.',
      },
      {
        t: 'formula',
        kicker: 'PE of a system of <i>n</i> point charges (sum over all distinct pairs)',
        main: '<i>U</i> = 1/(4πε<sub>0</sub>) · Σ<sub><i>i</i> < <i>j</i></sub> <i>q</i><sub><i>i</i></sub><i>q</i><sub><i>j</i></sub>/<i>r</i><sub><i>ij</i></sub> = ½ Σ<sub><i>i</i></sub> <i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>',
        legend: ['<i>V</i><sub><i>i</i></sub> = potential at charge <i>i</i> due to <b>all the others</b>'],
        note: 'The factor ½ prevents counting each pair twice. Number of pairs = <i>n</i>(<i>n</i> − 1)/2.',
      },
      {
        t: 'formula',
        kicker: 'PE of a single charge <i>q</i> in an external field (potential <i>V</i>)',
        main: '<i>U</i> = <i>qV</i>',
        legend: [],
        note: 'This is the link between <i>U</i> (joules, a property of the charge-plus-field) and <i>V</i> (volts, a property of the point).',
      },
      {
        t: 'formula',
        kicker: 'PE of two charges in an external field',
        main: '<i>U</i> = <i>q</i><sub>1</sub><i>V</i>(<i>r⃗</i><sub>1</sub>) + <i>q</i><sub>2</sub><i>V</i>(<i>r⃗</i><sub>2</sub>) + 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub>',
        legend: [],
        note: '(the two charges’ energies in the external field, <b>plus</b> their mutual interaction).',
      },
      {
        t: 'formula',
        kicker: 'Torque and PE of a dipole in a uniform external field',
        main: '<i>τ⃗</i> = <i>p⃗</i> × <i>E⃗</i><br><i>τ</i> = <i>pE</i> sin <i>θ</i><br><i>U</i>(<i>θ</i>) = −<i>p⃗</i> · <i>E⃗</i> = −<i>pE</i> cos <i>θ</i>',
        legend: ['<i>θ</i> = angle between dipole moment <i>p⃗</i> and field <i>E⃗</i>'],
        note: '<b>Stable</b> equilibrium at <i>θ</i> = 0 (<i>U</i> = −<i>pE</i>, minimum); <b>unstable</b> at <i>θ</i> = 180° (<i>U</i> = +<i>pE</i>, maximum); <i>U</i> = 0 at <i>θ</i> = 90° (the chosen reference). Dipole moment <i>p</i>: unit C · m, dimensional formula [M<sup>0</sup> L<sup>1</sup> T<sup>1</sup> A<sup>1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Work and energy relations',
        main: '<i>W</i><sub>field</sub> = −Δ<i>U</i><br><i>W</i><sub>external</sub> = +Δ<i>U</i><br><i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub> = <i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Useful conversion',
        main: '1 eV = 1.6 × 10<sup>−19</sup> J',
        legend: [],
        note: '(energy gained by one electron across 1 V).',
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation A — Potential energy of a system of two point charges.</b>' },
      {
        t: 'p',
        html: '<b>Setup and assumptions:</b> We assemble the system on an empty stage, taking <i>U</i> = 0 when the charges are infinitely apart, and bringing each charge in infinitely slowly so no kinetic energy appears.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — bring in <i>q</i><sub>1</sub>.</b> The stage is empty; there is no field and no force to fight. Work done = 0.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — bring in <i>q</i><sub>2</sub>.</b> Now <i>q</i><sub>1</sub> sits at the origin and produces, at the destination point a distance <i>r</i><sub>12</sub> away, a potential<br><i>V</i><sub>1</sub> = 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub>/<i>r</i><sub>12</sub>.<br><b>Why this is the key step:</b> the work done by an external agent in bringing a charge <i>q</i><sub>2</sub> to a point where the existing potential is <i>V</i><sub>1</sub> is, by the very definition of potential, <i>W</i> = <i>q</i><sub>2</sub><i>V</i><sub>1</sub>. (Recall <i>U</i> = <i>qV</i> for a charge in an existing potential.) Therefore<br><i>U</i> = <i>W</i><sub>step 1</sub> + <i>W</i><sub>step 2</sub> = 0 + <i>q</i><sub>2</sub><i>V</i><sub>1</sub> = 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub>.<br><i>U</i> = 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub>',
      },
      {
        t: 'p',
        html: '<b>Two physical checks.</b> First, had we brought <i>q</i><sub>2</sub> in <b>first</b> and <i>q</i><sub>1</sub> <b>second</b>, we’d get <i>q</i><sub>1</sub><i>V</i><sub>2</sub> = 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sub>12</sub> — identical, confirming path/order independence. Second, the sign: for like charges <i>q</i><sub>1</sub><i>q</i><sub>2</sub> > 0 so <i>U</i> > 0 (we worked against repulsion); for unlike charges <i>U</i> < 0 (attraction did the work for us). Both match intuition.',
      },
      { t: 'p', html: '<b>Derivation B — Potential energy of a dipole in a uniform external field.</b>' },
      { t: 'fig', id: 'p12-02-fig-2.3' },
      {
        t: 'p',
        html: '<b>Setup:</b> A short dipole of moment <i>p</i> = <i>q</i>(2<i>a</i>) sits in a <b>uniform</b> field <i>E⃗</i>. In a uniform field the two equal-and-opposite forces on +<i>q</i> and −<i>q</i> cancel, so there is <b>no net force</b> — only a <b>torque</b> that tries to align the dipole with the field:<br><i>τ</i> = <i>pE</i> sin <i>θ</i>.',
      },
      {
        t: 'p',
        html: '<b>Rotating it quasi-statically:</b> Suppose an external agent applies just enough torque to rotate the dipole — without angular acceleration — from an initial angle <i>θ</i><sub>0</sub> to a final angle <i>θ</i><sub>1</sub>. The work done against the field’s torque is<br><i>W</i><sub>ext</sub> = ∫<sub><i>θ</i>₀</sub><sup><i>θ</i>₁</sup> <i>τ</i> d<i>θ</i> = ∫<sub><i>θ</i>₀</sub><sup><i>θ</i>₁</sup> <i>pE</i> sin <i>θ</i> d<i>θ</i> = <i>pE</i>(cos <i>θ</i><sub>0</sub> − cos <i>θ</i><sub>1</sub>).',
      },
      {
        t: 'p',
        html: '<b>Why integrate the torque?</b> Rotating through a small angle d<i>θ</i> against torque <i>τ</i> costs work <i>τ</i> d<i>θ</i>, exactly the rotational analogue of “force times distance.” This stored work <b>is</b> the change in potential energy: <i>U</i>(<i>θ</i><sub>1</sub>) − <i>U</i>(<i>θ</i><sub>0</sub>) = <i>pE</i>(cos <i>θ</i><sub>0</sub> − cos <i>θ</i><sub>1</sub>).',
      },
      {
        t: 'p',
        html: '<b>Choosing the reference:</b> It is natural (and standard) to set <i>U</i> = 0 at <i>θ</i><sub>0</sub> = 90°, since at 90° the dipole is “neutral” — neither helped nor hindered. With cos 90° = 0:<br><i>U</i>(<i>θ</i>) = −<i>pE</i> cos <i>θ</i> = −<i>p⃗</i> · <i>E⃗</i>.<br><i>U</i> = −<i>p⃗</i> · <i>E⃗</i>',
      },
      {
        t: 'p',
        html: '<b>Reading the result:</b> <i>U</i> is <b>minimum</b> (−<i>pE</i>) at <i>θ</i> = 0 — the dipole’s preferred, stable rest position, like a compass needle settling along the Earth’s field. It is <b>maximum</b> (+<i>pE</i>) at <i>θ</i> = 180° — unstable, the slightest nudge flips it.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two point charges, +3 μC and −5 μC, are held 0.60 m apart in vacuum. Find the electrostatic potential energy of the system.',
        steps: [
          '<b>Given:</b> <i>q</i><sub>1</sub> = +3 × 10<sup>−6</sup> C, <i>q</i><sub>2</sub> = −5 × 10<sup>−6</sup> C, <i>r</i> = 0.60 m.',
          '<i>U</i> = 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i> = (9 × 10<sup>9</sup>)(+3 × 10<sup>−6</sup>)(−5 × 10<sup>−6</sup>)/0.60.<br><i>U</i> = (9 × 10<sup>9</sup>)(−15 × 10<sup>−12</sup>)/0.60 = −0.135/0.60',
          'The negative sign signals a <b>bound</b> (attractive) system — energy must be supplied to separate the charges.',
        ],
        ans: '<i>U</i> = −0.225 J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two charges, each +4 μC, are placed 0.20 m apart. What is the electrostatic potential energy of the pair?',
        steps: [
          'The trap is hiding in plain sight: under exam pressure students reach for the force/field habit and divide by <i>r</i><sup>2</sup>. <b>Potential energy goes as 1/<i>r</i>, not 1/<i>r</i><sup>2</sup>.</b><br><i>U</i> = 1/(4πε<sub>0</sub>) · <i>q</i><sup>2</sup>/<i>r</i> = (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)<sup>2</sup>/0.20 = (9 × 10<sup>9</sup>)(16 × 10<sup>−12</sup>)/0.20 = 0.144/0.20',
          'The seductive wrong answer is (9 × 10<sup>9</sup>)(16 × 10<sup>−12</sup>)/(0.20)<sup>2</sup> = 3.6 J — exactly five times too big, because (0.20)<sup>2</sup> = 0.04 instead of 0.20.',
          '<b>Speed rule:</b> PE ∝ 1/<i>r</i>; if your exponent matches the force law, you’ve slipped.',
        ],
        ans: '<i>U</i> = +0.72 J (positive — like charges, a “wound-up” system)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '(combines: system PE + conservation of energy) A charge <i>q</i><sub>1</sub> = +5 μC is fixed in place. A second charge <i>q</i><sub>2</sub> = +2 μC of mass <i>m</i> = 5 g is released from rest at a distance <i>r</i><sub>1</sub> = 0.10 m from it. Find the speed of <i>q</i><sub>2</sub> when it has moved very far away.',
        steps: [
          'The two like charges repel, so <i>q</i><sub>2</sub> accelerates outward, converting electrostatic PE into kinetic energy. Apply conservation of mechanical energy between the start (distance <i>r</i><sub>1</sub>, at rest) and the end (infinity, moving):<br><i>U</i><sub><i>i</i></sub> + <i>K</i><sub><i>i</i></sub> = <i>U</i><sub><i>f</i></sub> + <i>K</i><sub><i>f</i></sub>.',
          'Initial PE:<br><i>U</i><sub><i>i</i></sub> = (9 × 10<sup>9</sup>)(5 × 10<sup>−6</sup>)(2 × 10<sup>−6</sup>)/0.10 = (9 × 10<sup>9</sup>)(10 × 10<sup>−12</sup>)/0.10 = 0.090/0.10 = 0.90 J.',
          'At infinity, <i>U</i><sub><i>f</i></sub> = 0, and the charge started from rest so <i>K</i><sub><i>i</i></sub> = 0. Hence all the PE becomes kinetic:<br><i>K</i><sub><i>f</i></sub> = <i>U</i><sub><i>i</i></sub> = 0.90 J = ½<i>mv</i><sup>2</sup>.<br><i>v</i> = √(2<i>K</i><sub><i>f</i></sub>/<i>m</i>) = √(2(0.90)/(5 × 10<sup>−3</sup>)) = √360',
          '(Two ideas stitched together: the 1/<i>r</i> potential energy, then mechanical-energy conservation.)',
        ],
        ans: '<i>v</i> ≈ 19 m s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '(dipole-in-field PE + rotational energy conservation) An electric dipole of moment <i>p</i> = 4 × 10<sup>−9</sup> C · m and moment of inertia <i>I</i> = 1.0 × 10<sup>−6</sup> kg · m<sup>2</sup> is free to rotate about an axis through its centre, in a uniform field <i>E</i> = 2 × 10<sup>4</sup> N C<sup>−1</sup>. It is released from rest when <i>p⃗</i> is perpendicular to <i>E⃗</i> (<i>θ</i> = 90°). Find its angular speed when it becomes aligned with the field (<i>θ</i> = 0).',
        steps: [
          'Only the field’s torque does work, so rotational mechanical energy is conserved: the drop in potential energy reappears as rotational kinetic energy.',
          'Potential energies using <i>U</i> = −<i>pE</i> cos <i>θ</i>, with <i>pE</i> = (4 × 10<sup>−9</sup>)(2 × 10<sup>4</sup>) = 8 × 10<sup>−5</sup> J:<br><i>U</i><sub>90°</sub> = −<i>pE</i> cos 90° = 0,   <i>U</i><sub>0°</sub> = −<i>pE</i> cos 0° = −8 × 10<sup>−5</sup> J.',
          'Energy conservation (<i>K</i><sub><i>i</i></sub> = 0):<br><i>U</i><sub>90°</sub> + 0 = <i>U</i><sub>0°</sub> + ½<i>Iω</i><sup>2</sup> ⇒ ½<i>Iω</i><sup>2</sup> = <i>U</i><sub>90°</sub> − <i>U</i><sub>0°</sub> = 0 − (−8 × 10<sup>−5</sup>) = 8 × 10<sup>−5</sup> J.<br><i>ω</i> = √(2(8 × 10<sup>−5</sup>)/(1.0 × 10<sup>−6</sup>)) = √160',
          'The dipole swings toward alignment exactly the way a released pendulum swings to its lowest point — minimum PE, maximum KE.',
        ],
        ans: '<i>ω</i> ≈ 12.6 rad s<sup>−1</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two charges +6 nC and +9 nC are placed 0.03 m apart. Find the electrostatic potential energy of the system.',
            a: '<i>U</i> = 1.62 × 10<sup>−5</sup> J.',
          },
          {
            q: '[NEET] A charge −2 μC and a charge +3 μC are separated by 0.50 m. Compute the potential energy and state whether the system is bound or unbound.',
            a: '<i>U</i> = −0.108 J; bound (negative PE).',
          },
          {
            q: '[JEE Main] Three equal charges of +1 μC each are fixed at the corners of an equilateral triangle of side 1.0 m. Find the total electrostatic potential energy of the system.',
            a: '<i>U</i> = 0.027 J (three pairs, each <i>kq</i><sup>2</sup>/<i>a</i>).',
          },
          {
            q: '[JEE Main] A charge +2 μC of mass 2 g is released from rest at a point where the external potential is 500 V and moves freely to a point where the potential is 100 V. Find its final speed.',
            a: '<i>v</i> ≈ 0.89 m s<sup>−1</sup> (from ½<i>mv</i><sup>2</sup> = <i>q</i> Δ<i>V</i>).',
          },
          {
            q: '[JEE Advanced] A dipole of moment <i>p</i> = 5 × 10<sup>−8</sup> C · m sits in a uniform field <i>E</i> = 3 × 10<sup>4</sup> N C<sup>−1</sup>, initially aligned with the field. Find the work required to rotate it to a position perpendicular to the field.',
            a: '<i>W</i> = <i>pE</i> = 1.5 × 10<sup>−3</sup> J (from <i>U</i><sub>90°</sub> − <i>U</i><sub>0°</sub> = 0 − (−<i>pE</i>)).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The electrostatic potential energy of a system of two point charges varies with their separation <i>r</i> as:',
        opts: [
          { label: '∝ 1/<i>r</i>', nudge: null },
          {
            label: '∝ 1/<i>r</i><sup>2</sup>',
            nudge: '<b>(b)</b> is <b>the</b> classic trap: it’s the dependence of the force (and field), not the energy. Energy is the integral of force over distance, which lifts the power from −2 to −1.',
          },
          { label: '∝ <i>r</i>', nudge: '<b>(c)</b> and <b>(d)</b> invert the relationship entirely.' },
          { label: '∝ <i>r</i><sup>2</sup>', nudge: '<b>(c)</b> and <b>(d)</b> invert the relationship entirely.' },
        ],
        correct: 0,
        solution: '<i>U</i> = 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i> — inverse first power.',
      },
      {
        t: 'mcq',
        q: 'The electrostatic potential energy of a system of two equal positive charges is:',
        opts: [
          { label: 'positive', nudge: null },
          { label: 'negative', nudge: '<b>(b)</b> is the sign for unlike charges.' },
          { label: 'zero', nudge: '<b>(c)</b> would require infinite separation or a zero charge.' },
          {
            label: 'dependent on the path used to assemble them',
            nudge: '<b>(d)</b> contradicts the conservative nature of the electrostatic force — PE depends only on the final configuration, never the assembly path. Picking this means missing the core idea of the whole topic.',
          },
        ],
        correct: 0,
        solution: 'Like charges repel; an external agent must do positive work to bring them together, so <i>U</i> > 0.',
      },
      {
        t: 'mcq',
        q: 'An electric dipole is placed in a uniform external field. Its potential energy is <b>minimum</b> (stable equilibrium) when the dipole moment <i>p⃗</i> is:',
        opts: [
          { label: 'parallel to <i>E⃗</i>', nudge: null },
          { label: 'perpendicular to <i>E⃗</i>', nudge: '<b>(b)</b> gives <i>U</i> = 0, neither extreme.' },
          {
            label: 'antiparallel to <i>E⃗</i>',
            nudge: '<b>(c)</b> is the maximum-energy, <b>unstable</b> position (<i>θ</i> = 180°, <i>U</i> = +<i>pE</i>) — the most-chosen wrong answer, from confusing the energy minimum with the maximum.',
          },
          { label: 'at 45° to <i>E⃗</i>', nudge: '<b>(d)</b> has no special significance.' },
        ],
        correct: 0,
        solution: '<i>U</i> = −<i>pE</i> cos <i>θ</i> is least (−<i>pE</i>) at <i>θ</i> = 0, i.e. <i>p⃗</i> ∥ <i>E⃗</i>.',
      },
      {
        t: 'mcq',
        q: 'The work done in moving a point charge once around a closed loop in an electrostatic field is:',
        opts: [
          { label: 'zero', nudge: null },
          {
            label: '<i>qV</i>',
            nudge: '<b>(b)</b> misapplies <i>U</i> = <i>qV</i> — there is no net potential difference around a closed loop.',
          },
          { label: 'dependent on the shape of the loop', nudge: '<b>(c)</b> would be true only for a non-conservative force.' },
          { label: 'infinite', nudge: '<b>(d)</b> has no basis.' },
        ],
        correct: 0,
        solution: 'The electrostatic field is conservative; over any closed path the net work is zero, because start and end points coincide (Δ<i>U</i> = 0).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using 1/<i>r</i><sup>2</sup> instead of 1/<i>r</i> for energy.</b> Force and field go as 1/<i>r</i><sup>2</sup>; potential and potential energy go as 1/<i>r</i>. Tattoo this distinction on your formula sheet.',
          '<b>Sign slips.</b> Always plug charges with their signs. A quick sanity check: like charges ⇒ <i>U</i> > 0; unlike charges ⇒ <i>U</i> < 0. If your final sign disagrees with the type of charges, hunt for the error.',
          '<b>Confusing <i>U</i>, <i>V</i>, and <i>E</i>.</b> <i>E</i> (vector, N/C) is force per charge; <i>V</i> (scalar, volt) is energy per charge at a point; <i>U</i> (scalar, joule) is the energy of a charge-in-field or a whole system. The bridge is <i>U</i> = <i>qV</i>.',
          '<b>Pair-counting errors in multi-charge systems.</b> A system of <i>n</i> charges has <i>n</i>(<i>n</i> − 1)/2 distinct pairs — 3 pairs for 3 charges, 6 for 4 charges. Miss one and your total is wrong.',
          '<b>Dipole min/max confusion.</b> Stable rest is <i>θ</i> = 0 (<i>U</i> minimum, −<i>pE</i>); <i>θ</i> = 180° is unstable (<i>U</i> maximum, +<i>pE</i>).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & sanity):</b> For “released from rest, find the speed/angular speed,” skip the forces entirely — go straight to Δ<i>K</i> = −Δ<i>U</i>. And for assembling/dismantling a configuration, remember <b>work by the external agent</b> = +Δ<i>U</i>, so the work to dismantle a bound system (drag everything back to infinity) is just 0 − <i>U</i><sub>system</sub> = −<i>U</i><sub>system</sub>, a positive number whenever <i>U</i> is negative.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two charges',
            note: '<i>U</i> = 1/(4πε<sub>0</sub>) · <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i> — ∝ 1/<i>r</i>, sign carries; like ⇒ <i>U</i> > 0, unlike ⇒ <i>U</i> < 0.',
          },
          {
            f: 'System of <i>n</i>',
            note: '<i>U</i> = 1/(4πε<sub>0</sub>) · Σ<sub><i>i</i> < <i>j</i></sub> <i>q</i><sub><i>i</i></sub><i>q</i><sub><i>j</i></sub>/<i>r</i><sub><i>ij</i></sub> = ½ Σ<sub><i>i</i></sub> <i>q</i><sub><i>i</i></sub><i>V</i><sub><i>i</i></sub>; pairs = <i>n</i>(<i>n</i> − 1)/2.',
          },
          { f: 'Charge in external field', note: '<i>U</i> = <i>qV</i> (the bridge between joules and volts).' },
          {
            f: 'Dipole in field',
            note: '<i>U</i> = −<i>p⃗</i> · <i>E⃗</i> = −<i>pE</i> cos <i>θ</i>; <i>τ</i> = <i>pE</i> sin <i>θ</i>; <b>stable</b> <i>θ</i> = 0, <b>unstable</b> <i>θ</i> = 180°.',
          },
          {
            f: 'Energy bookkeeping',
            note: '<i>W</i><sub>field</sub> = −Δ<i>U</i>, <i>W</i><sub>ext</sub> = +Δ<i>U</i>, and <i>K</i> + <i>U</i> = constant.',
          },
          { f: 'Units', note: '[<i>U</i>] = [M L<sup>2</sup> T<sup>−2</sup>], joule; 1 eV = 1.6 × 10<sup>−19</sup> J.' },
        ],
        aids: [
          '“PE goes as 1/<i>r</i>, force as 1/<i>r</i><sup>2</sup>.”',
          '“Like charges, positive PE — bound systems are negative.”',
          '“A dipole rests aligned” (<i>θ</i> = 0, minimum energy).',
          '“Released from rest? Use Δ<i>K</i> = −Δ<i>U</i>, not forces.”',
        ],
      },
    ],
  },
];
