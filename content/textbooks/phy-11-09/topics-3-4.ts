import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 03 and 04, pp. 621–638 of the Class 11 Physics Master
 * Reference, word for word: Fluids in Accelerated and Rotating Frames (pp. 621
 * to 629) and Fluid Dynamics and Bernoulli’s Theorem (pp. 630 to 638), each
 * split at the book’s Sections 1 to 8. Figures 9.6 (pp. 622–623), 9.7
 * (pp. 624–625), 9.8 and 9.9 (pp. 632–633).
 */
export const TOPICS: Topic[] = [
  {
    n: '03',
    title: 'Fluids in Accelerated and Rotating Frames',
    kalam: 'Every fluid-statics result you know still works — you just point gravity in the new effective direction and measure depth along it.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A favourite of JEE for testing whether students truly understand pressure rather than memorising <i>P</i> = <i>P</i><sub>0</sub> + <i>ρgh</i>. JEE Main regularly asks the tilted-free-surface angle (tan <i>θ</i> = <i>a</i>/<i>g</i>) and the height difference across an accelerating tank. JEE Advanced builds rotating-fluid (paraboloid) problems and combined accelerating-and-submerged scenarios. CBSE Boards touch it lightly via the effective-gravity idea; NEET asks the occasional conceptual question on surface tilt.',
      },
      {
        t: 'p',
        html: 'Everything in Topic 01 assumed the fluid was perfectly still. But fluids are often on the move with their container — petrol sloshing in an accelerating tanker, tea tilting in a cup as a train pulls away, water climbing the outer wall of a spinning bucket. The free surface is no longer flat, and the pressure no longer depends on depth alone. Yet there is a wonderfully simple trick that handles all of it: replace ordinary gravity with an <b>effective gravity</b> that includes the acceleration.',
      },
      {
        t: 'p',
        html: 'Start with a tank of water on a cart that suddenly accelerates forward. Intuitively, the water “lags behind” — it piles up at the back of the tank and dips at the front, exactly as you lurch backward when a bus jerks forward. The free surface tilts. Why does it settle at a particular angle? Because a liquid surface at rest (in its own frame) must be perpendicular to the net effective gravity. Ordinary gravity pulls down with <i>g</i>; in the accelerating frame, a pseudo-force pulls backward with <i>a</i> (per unit mass). These combine into an <b>effective gravity</b> <i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>), pointing down-and-backward. The surface orients perpendicular to that, so it tilts by an angle <i>θ</i> where tan <i>θ</i> = <i>a</i>/<i>g</i>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine carrying a tray of water and speeding up smoothly. The water tilts up at the back. The faster you accelerate, the steeper the tilt — and if you could accelerate at <i>a</i> = <i>g</i>, the surface would tilt a full 45° (tan <i>θ</i> = 1). The liquid behaves exactly as if “down” had been rotated to a new direction. This is the same effective-gravity idea you already used for buoyancy in a lift (Topic 02), now applied to the shape of the surface and the distribution of pressure. Every fluid-statics result you know still works — you just point gravity in the new effective direction and measure depth along it.',
      },
      {
        t: 'p',
        html: 'Now spin instead of push. Put water in a cylinder and rotate it steadily about its vertical axis. Each parcel of water needs a centripetal force directed inward to travel in its circle, and the only thing that can supply it is a sideways pressure difference — so the pressure must increase outward. Higher pressure at the rim means the water level rises there and sinks at the centre. The free surface curves into a <b>paraboloid</b> — the elegant bowl shape you see in a stirred cup of tea or a spinning bucket. The faster the spin, the deeper the central dip and the higher the rim. (This is precisely why liquid-mirror telescopes spin a dish of mercury: rotation sculpts a perfect parabolic reflector for free.)',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) The fluid must be in equilibrium relative to its container — these results apply once sloshing has settled and the liquid rotates/translates as a rigid body with the vessel. (2) The fluid is incompressible with constant density. (3) For the tilted-surface result, the acceleration is constant and horizontal; for the paraboloid, the rotation is steady about a vertical axis. (4) We neglect surface tension and viscosity (the surface shape is set by pressure balance alone). (5) Volume is conserved — a spinning liquid rises at the rim by exactly as much as it falls at the centre (for a uniform cylinder).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>Horizontal acceleration <i>a</i> (open container):</b>' },
      {
        t: 'formula',
        kicker: 'Tilt of the free surface from the horizontal',
        main: 'tan <i>θ</i> = <i>a</i>/<i>g</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Effective gravity',
        main: '<i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>)',
        legend: [],
        note: '(the free surface is perpendicular to <i>g</i><sub>eff</sub>).',
      },
      {
        t: 'formula',
        kicker: 'Pressure gradients',
        main: 'horizontally: ∂<i>P</i>/∂<i>x</i> = −<i>ρa</i> (pressure rises toward the rear)<br>vertically: ∂<i>P</i>/∂<i>y</i> = −<i>ρg</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Height difference between the rear and front of a tank of horizontal length L',
        main: 'Δ<i>h</i> = <i>L</i> tan <i>θ</i> = <i>aL</i>/<i>g</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Vertical acceleration a',
        main: 'effective gravity becomes <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i> (use + for upward acceleration, − for downward), so the pressure at depth <i>h</i> is:<br><i>P</i> = <i>P</i><sub>0</sub> + <i>ρ</i>(<i>g</i> ± <i>a</i>)<i>h</i>',
        legend: [],
        note: '(In free fall, <i>a</i> = <i>g</i> downward ⇒ <i>g</i><sub>eff</sub> = 0: the fluid becomes “weightless” and exerts no hydrostatic pressure.)',
      },
      { t: 'p', html: '<b>Rotation at angular velocity <i>ω</i> about a vertical axis:</b>' },
      {
        t: 'formula',
        kicker: 'Radial pressure gradient (supplying centripetal force)',
        main: 'd<i>P</i>/d<i>r</i> = <i>ρω</i><sup>2</sup><i>r</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Free-surface shape (paraboloid)',
        main: 'the surface height above the central vertex at radius <i>r</i> is:<br><i>y</i>(<i>r</i>) = <i>ω</i><sup>2</sup><i>r</i><sup>2</sup>/(2<i>g</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Height difference between the rim (radius R) and the centre',
        main: 'Δ<i>h</i> = <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Volume conservation (uniform cylinder)',
        main: 'the liquid rises by <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) at the rim and falls by <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) at the centre, relative to the original level.',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      { t: 'p', html: '<b>Derivation 1 — Tilt of the free surface under horizontal acceleration.</b>' },
      { t: 'fig', id: 'p11-09-fig-9.6' },
      {
        t: 'p',
        html: '<b>Assumption:</b> the liquid has settled and moves as a rigid body with the container, accelerating horizontally at <i>a</i>.',
      },
      {
        t: 'p',
        html: 'Consider a small fluid element of mass <i>m</i> right at the free surface. Work in the accelerating (non-inertial) frame, where the element is in equilibrium under three influences: its weight <i>mg</i> (down), the pseudo-force <i>ma</i> (backward, opposite to the acceleration), and the normal force from the surrounding fluid. <b>Physical reasoning:</b> a fluid surface cannot support a force along itself (that would make it flow), so the net of gravity and pseudo-force must be <b>perpendicular</b> to the surface. The resultant of <i>mg</i> (down) and <i>ma</i> (backward) makes an angle <i>θ</i> with the vertical given by:<br>tan <i>θ</i> = <i>ma</i>/(<i>mg</i>) = <i>a</i>/<i>g</i><br>This <i>θ</i> is exactly the angle by which the surface tilts from the horizontal. Over a tank of length <i>L</i>, the height difference between the ends is Δ<i>h</i> = <i>L</i> tan <i>θ</i> = <i>aL</i>/<i>g</i>.',
      },
      { t: 'p', html: '<b>Derivation 2 — Paraboloid free surface of a rotating liquid.</b>' },
      { t: 'fig', id: 'p11-09-fig-9.7' },
      {
        t: 'p',
        html: '<b>Assumption:</b> the liquid rotates as a rigid body with the vessel at steady <i>ω</i> about a vertical axis.',
      },
      {
        t: 'p',
        html: 'Consider a fluid element at radial distance <i>r</i> on (or just below) the surface. It moves in a circle, so it needs a net inward (centripetal) force d<i>F</i> = (d<i>m</i>) <i>ω</i><sup>2</sup><i>r</i>. The only available source is the pressure difference across it, giving the radial gradient:<br>d<i>P</i>/d<i>r</i> = <i>ρω</i><sup>2</sup><i>r</i><br>Along the free surface the pressure is constant (= <i>P</i><sub>0</sub>). Moving outward by d<i>r</i>, the pressure would rise by <i>ρω</i><sup>2</sup><i>r</i> d<i>r</i>; to keep the surface pressure constant, the surface must climb by d<i>y</i> such that the extra hydrostatic pressure <i>ρg</i> d<i>y</i> cancels it:<br><i>ρg</i> d<i>y</i> = <i>ρω</i><sup>2</sup><i>r</i> d<i>r</i> ⟹ d<i>y</i>/d<i>r</i> = <i>ω</i><sup>2</sup><i>r</i>/<i>g</i><br>Integrate from the central vertex (<i>r</i> = 0, <i>y</i> = 0) outward:<br><i>y</i>(<i>r</i>) = <i>ω</i><sup>2</sup><i>r</i><sup>2</sup>/(2<i>g</i>)<br>The surface is a paraboloid of revolution. The rim-to-centre height difference is <i>y</i>(<i>R</i>) = <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>). <b>Physical reasoning:</b> the quadratic shape arises because the centripetal demand grows linearly with <i>r</i>, and integrating a linear gradient yields a parabola.',
      },
      {
        t: 'p',
        html: '<b>Key procedure — locating the new surface using volume conservation.</b> When a liquid spins, it neither gains nor loses volume. For a uniform cylinder, the average rise of the paraboloid over the base area is half the rim-to-vertex height. Hence the rim rises by <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) and the centre falls by <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) relative to the still-liquid level. Use this to find whether the centre exposes the bottom or the rim overflows.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A tanker truck carrying diesel accelerates uniformly along a straight horizontal road at 3.0 m s<sup>−2</sup>. Find the angle that the free surface of the diesel makes with the horizontal. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>Given:</b> <i>a</i> = 3.0 m s<sup>−2</sup>, <i>g</i> = 10 m s<sup>−2</sup>.',
          'The free surface tilts at an angle <i>θ</i> where:<br>tan <i>θ</i> = <i>a</i>/<i>g</i> = 3.0/10 = 0.30<br><i>θ</i> = tan<sup>−1</sup>(0.30)',
          'The surface rises toward the rear of the tanker (the diesel “lags behind” the acceleration).',
        ],
        ans: '<i>θ</i> ≈ 16.7°',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A beaker of water rests on a cart that accelerates horizontally. The water surface is observed to make an angle of 45° with the horizontal. What is the acceleration of the cart?',
        steps: [
          '<b>The trap to avoid:</b> over-thinking it. The angle depends only on <i>a</i>/<i>g</i>, not on the size or shape of the beaker or the amount of water.',
          '<b>Speed approach.</b> From tan <i>θ</i> = <i>a</i>/<i>g</i>:<br><i>a</i> = <i>g</i> tan 45° = <i>g</i> × 1',
          '<b>Mental check:</b> a 45° tilt means the horizontal and vertical “pulls” are equal, so <i>a</i> = <i>g</i>. Anchor this benchmark: 45° ⇔ <i>a</i> = <i>g</i>. Anything steeper needs <i>a</i> > <i>g</i>.',
        ],
        ans: '<i>a</i> = 10 m s<sup>−2</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (tilt + height difference + spill check)',
        q: 'An open rectangular tank 2.0 m long is filled with water to a depth of 1.0 m (the tank walls are 1.2 m tall). The tank is accelerated horizontally along its length at <i>a</i> = 2.0 m s<sup>−2</sup>. (a) Find the height difference of the water between the two ends. (b) Does the water spill? (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '(a) The surface tilts at tan <i>θ</i> = <i>a</i>/<i>g</i> = 2.0/10 = 0.20. Over the tank length <i>L</i> = 2.0 m, the end-to-end height difference is:<br>Δ<i>h</i> = <i>L</i> tan <i>θ</i> = 2.0 × 0.20 = 0.40 m',
          '(b) The water pivots about the centre (volume conserved), so it rises by Δ<i>h</i>/2 = 0.20 m at the rear and falls by 0.20 m at the front. The rear water level becomes:<br>1.0 + 0.20 = 1.20 m',
          'This exactly reaches the 1.2 m wall height — so the water is <b>on the verge of spilling but does not</b> (any larger acceleration would spill it).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (rotating cylinder — paraboloid + volume conservation)',
        q: 'A cylindrical vessel of radius <i>R</i> = 10 cm contains water to a height <i>H</i> = 20 cm when at rest. It is then rotated steadily about its vertical axis. (a) Derive the angular velocity <i>ω</i> at which the water at the centre just exposes the bottom of the vessel. (b) Find the corresponding height of water at the rim. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>Step 1 — Set up volume conservation.</b> When rotating at <i>ω</i>, the surface is a paraboloid. The vertex (centre) sits at height <i>z</i><sub>0</sub> above the bottom, and the rim sits at <i>z</i><sub>0</sub> + <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>). The average height over the base equals the original <i>H</i>:<br><i>z</i><sub>0</sub> + <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) = <i>H</i><br>(The paraboloid’s mean height is its vertex plus half its rim-to-vertex rise.)',
          '<b>Step 2 — Apply the “centre just touches bottom” condition (<i>z</i><sub>0</sub> = 0):</b><br><i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) = <i>H</i> ⟹ <i>ω</i><sup>2</sup> = 4<i>gH</i>/<i>R</i><sup>2</sup> ⟹ <i>ω</i> = (2/<i>R</i>)√(<i>gH</i>)',
          'Substituting <i>R</i> = 0.10 m, <i>H</i> = 0.20 m:<br><i>ω</i> = (2/0.10)√(10 × 0.20) = 20√2',
          '<b>Step 3 — Rim height.</b> With <i>z</i><sub>0</sub> = 0, the rim height is the full paraboloid depth:<br><i>z</i><sub>rim</sub> = <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>) = (800)(0.01)/(2(10)) = 8/20 = 0.40 m',
          '<b>Insight:</b> at this spin, the water has been flung entirely outward — zero depth at the centre, double the original depth (2<i>H</i> = 40 cm) at the rim. The result <i>z</i><sub>rim</sub> = 2<i>H</i> when <i>z</i><sub>0</sub> = 0 is a clean check: the parabola’s average must still equal <i>H</i>, and the average of 0 and the rim value (weighted for a paraboloid) returns <i>H</i>.',
        ],
        ans: '(a) <i>ω</i> ≈ 28.3 rad s<sup>−1</sup>; (b) <i>z</i><sub>rim</sub> = 40 cm',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A container of water accelerates horizontally at 5.0 m s<sup>−2</sup>. Find the angle the free surface makes with the horizontal. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '≈ 26.6°',
          },
          {
            q: '[NEET] A liquid in a beaker is taken in a lift accelerating downward at 4.0 m s<sup>−2</sup>. Compared with the lift at rest, the pressure at a fixed depth in the liquid is: greater, smaller, or unchanged? Justify in one line. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: 'Smaller; <i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i> = 6 m s<sup>−2</sup>, so <i>P</i> = <i>P</i><sub>0</sub> + <i>ρ</i>(<i>g</i> − <i>a</i>)<i>h</i>',
          },
          {
            q: '[JEE Main] A tank 3.0 m long, open at the top and deep enough not to spill, is partly filled with water and accelerated horizontally so that the free surface makes 30° with the horizontal. Find (a) the acceleration and (b) the height difference between the two ends. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '(a) <i>a</i> = <i>g</i> tan 30° ≈ 5.77 m s<sup>−2</sup>; (b) Δ<i>h</i> = 3.0 tan 30° ≈ 1.73 m',
          },
          {
            q: '[JEE Main] A cylindrical bucket of radius 15 cm is rotated about its axis at 10 rad s<sup>−1</sup>. Find the height difference between the liquid at the rim and at the centre. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: 'Δ<i>h</i> = <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>) = 0.1125 m ≈ 11.3 cm',
          },
          {
            q: '[JEE Advanced] A sealed cubical box of side <i>L</i> is completely filled with water (no air gap) and accelerated horizontally at <i>a</i> along one edge. Find the difference in pressure between the rear-bottom corner and the front-bottom corner of the box.',
            a: 'Δ<i>P</i> = <i>ρaL</i> (horizontal gradient only, since both corners are at the same depth)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A tank of water accelerates horizontally to the right. The free surface of the water:',
        opts: [
          { label: 'Stays horizontal', nudge: '<b>(a)</b> ignores the acceleration.' },
          {
            label: 'Rises at the front (right), falls at the rear',
            nudge: '<b>(b)</b> reverses the direction — a very common slip; the water rises opposite to the direction of motion.',
          },
          { label: 'Rises at the rear (left), falls at the front', nudge: null },
          { label: 'Becomes vertical', nudge: '<b>(d)</b> would require infinite acceleration.' },
        ],
        correct: 2,
        solution: 'The water lags the acceleration and piles up at the rear; the surface tilts with tan <i>θ</i> = <i>a</i>/<i>g</i>, higher at the back.',
      },
      {
        t: 'mcq',
        q: 'A beaker of liquid is in free fall. The pressure at a depth <i>h</i> inside the liquid is:',
        opts: [
          { label: '<i>P</i><sub>0</sub> + <i>ρgh</i>', nudge: '<b>(a)</b> is the static (non-falling) result.' },
          { label: '<i>P</i><sub>0</sub>', nudge: null },
          { label: '<i>ρgh</i>', nudge: '<b>(c)</b> drops the atmospheric term.' },
          {
            label: 'Zero everywhere',
            nudge: '<b>(d)</b> wrongly assumes even the surface pressure vanishes — the atmosphere still presses down with <i>P</i><sub>0</sub>.',
          },
        ],
        correct: 1,
        solution: 'In free fall, <i>g</i><sub>eff</sub> = <i>g</i> − <i>g</i> = 0, so there is no hydrostatic pressure variation; the pressure throughout equals the surface pressure <i>P</i><sub>0</sub>.',
      },
      {
        t: 'mcq',
        q: 'A liquid in a cylinder is rotated steadily about its vertical axis. The free surface takes the shape of:',
        opts: [
          { label: 'A flat horizontal plane', nudge: '<b>(a)</b> describes the non-rotating case.' },
          {
            label: 'A cone',
            nudge: '<b>(b)</b>/<b>(d)</b> have the wrong functional form (the rise goes as <i>r</i><sup>2</sup>, not linearly and not as a circular arc).',
          },
          { label: 'A paraboloid', nudge: null },
          {
            label: 'A hemisphere',
            nudge: '<b>(b)</b>/<b>(d)</b> have the wrong functional form (the rise goes as <i>r</i><sup>2</sup>, not linearly and not as a circular arc).',
          },
        ],
        correct: 2,
        solution: 'The centripetal requirement gives a radial pressure gradient ∝ <i>r</i>; integrating yields a surface height ∝ <i>r</i><sup>2</sup> — a paraboloid.',
      },
      {
        t: 'mcq',
        q: 'A container of water accelerates horizontally such that the free surface makes 45° with the horizontal. The effective gravity experienced by the liquid is:',
        opts: [
          { label: '<i>g</i>', nudge: '<b>(a)</b> ignores the horizontal contribution.' },
          { label: '√2 <i>g</i>', nudge: null },
          { label: '2<i>g</i>', nudge: '<b>(c)</b> adds the magnitudes arithmetically instead of as perpendicular vectors.' },
          { label: '<i>g</i>/√2', nudge: '<b>(d)</b> inverts the relation.' },
        ],
        correct: 1,
        solution: 'At 45°, <i>a</i> = <i>g</i>, so <i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>) = √(<i>g</i><sup>2</sup> + <i>g</i><sup>2</sup>) = √2 <i>g</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Tilting the surface the wrong way.</b> Under forward acceleration, the liquid rises at the <b>rear</b>, not the front — it lags behind the motion, just as you are pushed back into your seat. Always sketch the pseudo-force pointing opposite to the acceleration.',
          '<b>Forgetting volume conservation.</b> The surface pivots about the centre: it rises at one end by the same amount it falls at the other. To check spilling, add only half the total height difference to the original level at the high end — not the full Δ<i>h</i>.',
          '<b>Using <i>g</i> instead of <i>g</i><sub>eff</sub>.</b> Once a fluid accelerates, every pressure/depth calculation should use the effective gravity — <i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>) for horizontal acceleration, <i>g</i> ± <i>a</i> for vertical. In free fall, <i>g</i><sub>eff</sub> = 0 and hydrostatic pressure vanishes.',
          '<b>Mishandling the rotating-surface height.</b> The rim-to-centre difference is <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>), but relative to the original level the rim rises only <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>) and the centre drops the same. Don’t confuse the total difference with the rise at one end.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Treat any accelerating-fluid problem as an ordinary statics problem in a rotated/strengthened gravity. For horizontal acceleration, tilt your mental “down” to point along <i>g</i><sub>eff</sub> and measure depth perpendicular to the (tilted) surface — then <i>P</i> = <i>P</i><sub>0</sub> + <i>ρg</i><sub>eff</sub><i>d</i> works just as before. Memorise the two benchmarks: tan <i>θ</i> = <i>a</i>/<i>g</i> (tilt) and Δ<i>h</i> = <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>) (spin), and most questions collapse to a one-line substitution.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Horizontal acceleration',
            note: 'free surface tilts, tan <i>θ</i> = <i>a</i>/<i>g</i>; height difference over length <i>L</i> is Δ<i>h</i> = <i>aL</i>/<i>g</i>; effective gravity <i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>) (surface ⊥ to it).',
          },
          { f: 'Benchmark', note: '<i>θ</i> = 45° ⇔ <i>a</i> = <i>g</i> ⇔ <i>g</i><sub>eff</sub> = √2 <i>g</i>.' },
          {
            f: 'Vertical acceleration',
            note: '<i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i> (+ up, − down); <i>P</i> = <i>P</i><sub>0</sub> + <i>ρ</i>(<i>g</i> ± <i>a</i>)<i>h</i>. <b>Free fall</b> ⇒ <i>g</i><sub>eff</sub> = 0, no hydrostatic pressure.',
          },
          {
            f: 'Rotation',
            note: 'radial gradient d<i>P</i>/d<i>r</i> = <i>ρω</i><sup>2</sup><i>r</i>; surface is a <b>paraboloid</b> <i>y</i> = <i>ω</i><sup>2</sup><i>r</i><sup>2</sup>/(2<i>g</i>); rim–centre difference <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>).',
          },
          {
            f: 'Volume conservation (spin)',
            note: 'rim rises <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>), centre falls the same, relative to the rest level.',
          },
          {
            f: 'Master idea',
            note: 'all of fluid statics still holds — just use the effective gravity (rotated for horizontal accel, scaled for vertical).',
          },
        ],
        aids: [
          '“Liquid lags — rises at the rear.”',
          '“tan <i>θ</i> = <i>a</i>/<i>g</i>; 45° means <i>a</i> = <i>g</i>.”',
          '“Spin makes a parabola: <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>).”',
          '“Free fall, no pressure.”',
        ],
      },
    ],
  },

  {
    n: '04',
    title: 'Fluid Dynamics and Bernoulli’s Theorem',
    kalam: 'Bernoulli’s theorem is nothing but energy conservation, rewritten per unit volume.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield topics in the chapter. CBSE Boards regularly ask the statement and derivation of Bernoulli’s theorem (3–5 marks) and the continuity equation. JEE Main reliably carries 1–2 numericals on continuity + Bernoulli, Venturi meters, or efflux speed. NEET favours conceptual questions on the speed–pressure relationship and real-life applications (aerofoil, atomizer). JEE Advanced builds tank-draining, efflux-range, and Venturi problems that fuse Bernoulli with calculus and projectile motion.',
      },
      {
        t: 'p',
        html: 'Stand on a railway platform as a fast train rushes past, and you feel a distinct tug towards the train. It feels backwards — surely all that rushing air should push you away? This everyday surprise is the single most important idea of this entire topic, and it comes from Daniel Bernoulli: <b>where a fluid moves fast, its pressure is low.</b> The fast-moving air between you and the train is at lower pressure than the still air on your other side, so the higher pressure behind you nudges you toward the train. (This is exactly why the yellow safety line exists.)',
      },
      {
        t: 'p',
        html: 'Before we can explain why, we need to describe how fluids flow. Picture the morning milk queue flowing smoothly through a narrow gate — everyone moves in an orderly single file, each person tracing the same path as the one before. That is <b>streamline (steady) flow</b>: the velocity of the fluid at any fixed point never changes with time, and the path traced by any particle is a streamline. The tangent to a streamline gives the flow direction there. A crucial property: two streamlines can never cross — if they did, a particle at the crossing would have two different velocities at once, which is impossible. Bundle a set of streamlines together and you get a <b>tube of flow</b>; no fluid leaks across its walls, so whatever enters one end must leave the other. Push the fluid too hard, though, and the orderly queue dissolves into a chaotic scramble — eddies, swirls, unpredictable velocities. That is <b>turbulent flow</b>, like the churning water below a waterfall.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Consider water flowing through a pipe that narrows, like a garden hose you pinch at the end. The same amount of water per second must pass through the wide part and the narrow part — water cannot pile up or vanish. So in the narrow section, where there is less room, the water must move faster to keep the throughput constant. This is the <b>equation of continuity</b>: <i>Av</i> = constant. Pinch the hose, shrink <i>A</i>, and the speed <i>v</i> shoots up — which is why a thumb over the hose end sends water spraying across the garden.',
      },
      {
        t: 'p',
        html: 'Now we can close the loop on the train mystery. A flowing fluid carries three kinds of energy per unit volume: <b>pressure energy</b> (<i>P</i>), <b>kinetic energy</b> (½<i>ρv</i><sup>2</sup>), and <b>gravitational potential energy</b> (<i>ρgh</i>). Bernoulli’s theorem is simply the conservation of energy for a flowing ideal fluid — it says the sum of these three stays constant along a streamline:<br><i>P</i> + ½<i>ρv</i><sup>2</sup> + <i>ρgh</i> = constant<br>The energy can only shuffle between the three forms. So on a level pipe (constant <i>h</i>), if the fluid speeds up (more kinetic energy), it must “pay” for that energy by dropping its pressure energy. Faster flow ⇒ lower pressure. The fast air beside the train has spent its pressure to buy speed.',
      },
      {
        t: 'p',
        html: 'This one principle explains a startling range of phenomena: an aeroplane wing (its shape and tilt make the air flow faster over the curved top ⇒ lower pressure on top ⇒ net upward lift), a perfume atomizer (fast air across a tube mouth lowers the pressure and sucks liquid up), a spinning ball that bends in flight (the Magnus effect), and roofs torn off during a storm (fast wind over the roof lowers the pressure above it, so the higher pressure inside lifts the roof off).',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Bernoulli’s theorem holds only for an <b>ideal fluid</b>: (1) <b>incompressible</b> (constant <i>ρ</i> — fine for liquids, poor for high-speed gases), (2) <b>non-viscous</b> (no internal friction — real viscosity dissipates energy, so downstream pressure is lower than Bernoulli predicts), and (3) <b>steady</b> (streamline, not turbulent). It applies along a single streamline; if the flow is also (4) <b>irrotational</b> (no eddies), the same constant holds between any two points. The continuity equation <i>Av</i> = const needs only incompressibility and steady flow, so it is more broadly valid than Bernoulli.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Equation of continuity (mass conservation; incompressible, steady flow)',
        main: '<i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub> i.e. <i>Av</i> = constant',
        legend: ['<i>A</i> = cross-sectional area', '<i>v</i> = flow speed'],
        note: 'The product <i>Av</i> is the <b>volume flow rate</b> <i>Q</i> (SI unit m<sup>3</sup> s<sup>−1</sup>).',
      },
      {
        t: 'formula',
        kicker: 'Bernoulli’s theorem (energy per unit volume, along a streamline)',
        main: '<i>P</i> + ½<i>ρv</i><sup>2</sup> + <i>ρgh</i> = constant',
        legend: [
          '<i>P</i> = pressure (static pressure)',
          '<i>ρ</i> = density',
          '<i>v</i> = speed',
          '<i>h</i> = elevation above a chosen datum',
          '<i>g</i> = gravity',
        ],
        note: 'Dimensions of each term: [M L<sup>−1</sup> T<sup>−2</sup>] (same as pressure — every term is an energy density).',
      },
      {
        t: 'formula',
        kicker: 'Head form (dividing by ρg)',
        main: '<i>P</i>/(<i>ρg</i>) + <i>v</i><sup>2</sup>/(2<i>g</i>) + <i>h</i> = constant',
        legend: [],
        note: 'the sum of pressure head, velocity head, and gravitational head (each in metres).',
      },
      {
        t: 'p',
        html: '<b>Note on conventions (chapter consistency):</b> here <i>h</i> is height measured upward from a datum, the opposite sign to the depth used in Topic 01’s <i>P</i> = <i>P</i><sub>0</sub> + <i>ρgh</i>. Both are correct in their own context.',
      },
      {
        t: 'formula',
        kicker: 'Static, dynamic, and stagnation pressure (horizontal flow)',
        main: '<i>P</i> + ½<i>ρv</i><sup>2</sup> = <i>P</i><sub>stag</sub> = constant',
        legend: ['<i>P</i> = static', '½<i>ρv</i><sup>2</sup> = dynamic', '<i>P</i><sub>stag</sub> = stagnation (total)'],
        note: '(<i>P</i><sub>stag</sub> here is the total pressure — not the atmospheric <i>P</i><sub>0</sub> from earlier topics.)',
      },
      {
        t: 'formula',
        kicker: 'Torricelli’s law (speed of efflux)',
        main: 'for a hole at depth (<i>H</i> − <i>h</i>) below the free surface of an open tank:<br><i>v</i> = √(2<i>g</i>(<i>H</i> − <i>h</i>))',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Horizontal range of the jet (hole at height h on a tank of liquid-height H)',
        main: '<i>R</i> = 2√(<i>h</i>(<i>H</i> − <i>h</i>))',
        legend: [],
        note: 'maximum <i>R</i><sub>max</sub> = <i>H</i> at <i>h</i> = <i>H</i>/2.',
      },
      {
        t: 'formula',
        kicker: 'Reynolds number (dimensionless — predicts flow type)',
        main: '<i>R</i><sub><i>e</i></sub> = <i>ρvD</i>/<i>η</i>',
        legend: ['<i>ρ</i> = density', '<i>v</i> = speed', '<i>D</i> = pipe diameter', '<i>η</i> = coefficient of viscosity'],
        note: 'Roughly: <i>R</i><sub><i>e</i></sub> ≲ 1000 streamline; <i>R</i><sub><i>e</i></sub> ≳ 2000 turbulent; in between, unstable.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      { t: 'p', html: '<b>Derivation 1 — Equation of Continuity.</b>' },
      { t: 'fig', id: 'p11-09-fig-9.8' },
      {
        t: 'p',
        html: '<b>Assumption:</b> steady, incompressible flow through a tube of flow with no leakage across its walls.',
      },
      {
        t: 'p',
        html: 'In a small time Δ<i>t</i>, the fluid at section 1 (area <i>A</i><sub>1</sub>, speed <i>v</i><sub>1</sub>) advances a distance <i>v</i><sub>1</sub>Δ<i>t</i>, so the volume entering is <i>A</i><sub>1</sub><i>v</i><sub>1</sub>Δ<i>t</i>. <b>Physical reasoning:</b> because the fluid is incompressible and cannot accumulate inside the tube, the volume leaving at section 2 in the same time must be identical:<br><i>A</i><sub>1</sub><i>v</i><sub>1</sub>Δ<i>t</i> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub>Δ<i>t</i><br><i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub><br>This is just conservation of mass (volume, for incompressible flow). It tells us <i>v</i> ∝ 1/<i>A</i>: narrow the pipe and the fluid speeds up.',
      },
      { t: 'p', html: '<b>Derivation 2 — Bernoulli’s Theorem (work–energy method).</b>' },
      { t: 'fig', id: 'p11-09-fig-9.9' },
      {
        t: 'p',
        html: '<b>Assumption:</b> steady, incompressible, non-viscous, irrotational flow. Consider the fluid between sections 1 and 2 moving in time Δ<i>t</i>; let a volume Δ<i>V</i> enter at 1 and an equal Δ<i>V</i> emerge at 2 (equal by continuity/incompressibility). Let <i>m</i> = <i>ρ</i> Δ<i>V</i> be its mass.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Work done by pressure forces.</b> The fluid behind pushes the slug in at section 1, doing positive work <i>W</i><sub>1</sub> = <i>P</i><sub>1</sub><i>A</i><sub>1</sub>(<i>v</i><sub>1</sub>Δ<i>t</i>) = <i>P</i><sub>1</sub> Δ<i>V</i>. At section 2, the fluid ahead pushes back, doing negative work <i>W</i><sub>2</sub> = −<i>P</i><sub>2</sub> Δ<i>V</i>. Net work by pressure:<br><i>W</i><sub>pressure</sub> = (<i>P</i><sub>1</sub> − <i>P</i><sub>2</sub>) Δ<i>V</i>',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Apply the work–energy theorem.</b> The net work by all forces equals the change in kinetic energy. Gravity also does work as the slug rises from <i>h</i><sub>1</sub> to <i>h</i><sub>2</sub>: <i>W</i><sub>gravity</sub> = −<i>mg</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>). So:<br>(<i>P</i><sub>1</sub> − <i>P</i><sub>2</sub>) Δ<i>V</i> − <i>mg</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>) = ½<i>mv</i><sub>2</sub><sup>2</sup> − ½<i>mv</i><sub>1</sub><sup>2</sup>',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Substitute <i>m</i> = <i>ρ</i> Δ<i>V</i> and divide by Δ<i>V</i>.</b> <b>Physical reasoning:</b> dividing by the common volume converts every term into an energy per unit volume:<br><i>P</i><sub>1</sub> − <i>P</i><sub>2</sub> − <i>ρg</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>) = ½<i>ρv</i><sub>2</sub><sup>2</sup> − ½<i>ρv</i><sub>1</sub><sup>2</sup>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Rearrange</b> so all “section 1” terms sit on the left and “section 2” on the right:<br><i>P</i><sub>1</sub> + ½<i>ρv</i><sub>1</sub><sup>2</sup> + <i>ρgh</i><sub>1</sub> = <i>P</i><sub>2</sub> + ½<i>ρv</i><sub>2</sub><sup>2</sup> + <i>ρgh</i><sub>2</sub>',
      },
      {
        t: 'p',
        html: 'Since sections 1 and 2 were arbitrary, the quantity <i>P</i> + ½<i>ρv</i><sup>2</sup> + <i>ρgh</i> is constant along the streamline. Bernoulli’s theorem is nothing but energy conservation, rewritten per unit volume. (Check: set <i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> = 0 and it collapses to the hydrostatic result <i>P</i><sub>2</sub> − <i>P</i><sub>1</sub> = <i>ρg</i>(<i>h</i><sub>1</sub> − <i>h</i><sub>2</sub>) from Topic 01.)',
      },
      { t: 'p', html: '<b>Derivation 3 — Torricelli’s speed of efflux.</b>' },
      {
        t: 'p',
        html: 'A large open tank of liquid is filled to height <i>H</i>; a small hole is punched at height <i>h</i> from the base, i.e. at depth (<i>H</i> − <i>h</i>) below the free surface. Apply Bernoulli between the free surface (point 1) and the hole (point 2). Both are open to the atmosphere, so <i>P</i><sub>1</sub> = <i>P</i><sub>2</sub> = <i>P</i><sub>0</sub>. Because the tank is large, the surface descends very slowly, <i>v</i><sub>1</sub> ≈ 0. Taking the base as datum:<br><i>P</i><sub>0</sub> + 0 + <i>ρgH</i> = <i>P</i><sub>0</sub> + ½<i>ρv</i><sup>2</sup> + <i>ρgh</i><br>The <i>P</i><sub>0</sub> terms cancel; solving for the efflux speed <i>v</i>:<br><i>v</i> = √(2<i>g</i>(<i>H</i> − <i>h</i>))<br><b>Physical reasoning:</b> the result is identical to a body freely falling through the depth (<i>H</i> − <i>h</i>) — the liquid’s pressure energy has been fully converted to kinetic energy, exactly as gravitational PE would be in free fall.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Water flows steadily through a horizontal pipe whose diameter narrows from 6 cm to 2 cm. If the water enters the wide section at 2.0 m s<sup>−1</sup>, find its speed in the narrow section.',
        steps: [
          '<b>Given:</b> <i>d</i><sub>1</sub> = 6 cm, <i>d</i><sub>2</sub> = 2 cm, <i>v</i><sub>1</sub> = 2.0 m s<sup>−1</sup>.',
          'By the equation of continuity, <i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub>. Since area ∝ <i>d</i><sup>2</sup>:<br><i>v</i><sub>2</sub> = <i>v</i><sub>1</sub><i>A</i><sub>1</sub>/<i>A</i><sub>2</sub> = <i>v</i><sub>1</sub>(<i>d</i><sub>1</sub>/<i>d</i><sub>2</sub>)<sup>2</sup> = 2.0 × (6/2)<sup>2</sup> = 2.0 × 9',
          'The speed rises ninefold because the diameter shrank threefold (and area depends on diameter squared).',
        ],
        ans: '<i>v</i><sub>2</sub> = 18 m s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A large water tank is filled to a liquid height of 20 m. A small hole is drilled in its side at a height of 5 m above the base. Find the speed at which water exits the hole. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>The traps to avoid:</b> the efflux speed depends on the <b>depth of the hole below the free surface</b>, not on the tank’s full height (20 m) nor on the hole’s height above the base (5 m). And don’t forget the factor of 2 inside the root.',
          '<b>Speed approach.</b> Depth below surface:<br><i>H</i> − <i>h</i> = 20 − 5 = 15 m<br><i>v</i> = √(2<i>g</i>(<i>H</i> − <i>h</i>)) = √(2 × 10 × 15) = √300',
          '<b>Mental check:</b> it must be the same as a stone dropped from 15 m: <i>v</i> = √(2<i>gh</i>) — Torricelli’s law is free-fall in disguise. A student who plugs in 20 gets 20 m s<sup>−1</sup> (too big) and one who plugs in 5 gets 10 m s<sup>−1</sup> (too small); the correct depth always lies between.',
        ],
        ans: '<i>v</i> ≈ 17.3 m s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (combines continuity + Bernoulli)',
        q: 'Water flows through a horizontal pipe. In the wide section the area is 8 cm<sup>2</sup>, the speed is 3.0 m s<sup>−1</sup>, and the pressure is 2.0 × 10<sup>5</sup> Pa. The pipe then narrows to 2 cm<sup>2</sup>. Find (a) the speed and (b) the pressure in the narrow section. (Take <i>ρ</i> = 1000 kg m<sup>−3</sup>.)',
        steps: [
          '(a) Continuity:<br><i>v</i><sub>2</sub> = <i>v</i><sub>1</sub><i>A</i><sub>1</sub>/<i>A</i><sub>2</sub> = 3.0 × 8/2 = 12 m s<sup>−1</sup>',
          '(b) The pipe is horizontal (<i>h</i><sub>1</sub> = <i>h</i><sub>2</sub>), so Bernoulli reduces to <i>P</i><sub>1</sub> + ½<i>ρv</i><sub>1</sub><sup>2</sup> = <i>P</i><sub>2</sub> + ½<i>ρv</i><sub>2</sub><sup>2</sup>:<br><i>P</i><sub>2</sub> = <i>P</i><sub>1</sub> + ½<i>ρ</i>(<i>v</i><sub>1</sub><sup>2</sup> − <i>v</i><sub>2</sub><sup>2</sup>) = 2.0 × 10<sup>5</sup> + ½ × 1000 × (3<sup>2</sup> − 12<sup>2</sup>)<br><i>P</i><sub>2</sub> = 2.0 × 10<sup>5</sup> + 500 × (9 − 144) = 2.0 × 10<sup>5</sup> − 67 500',
          'The pressure drops in the narrow section precisely because the water sped up there — the central message of Bernoulli, confirmed numerically.',
        ],
        ans: '<i>P</i><sub>2</sub> = 1.325 × 10<sup>5</sup> Pa',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (continuity + Torricelli + calculus: tank draining time)',
        q: 'A cylindrical tank of cross-sectional area <i>A</i> = 1.0 m<sup>2</sup> is filled with water to a height <i>H</i> = 5.0 m. A small hole of area <i>a</i> = 1.0 cm<sup>2</sup> is opened at the bottom. Find the time taken for the tank to empty completely. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          'When the water level is at height <i>y</i> (measured from the hole), Torricelli gives the efflux speed <i>v</i> = √(2<i>gy</i>). The volume leaving per unit time at the hole equals the rate at which the tank level drops:<br><i>a</i>√(2<i>gy</i>) = −<i>A</i> d<i>y</i>/d<i>t</i>',
          '<b>Physical reasoning:</b> the left side is the outflow rate at the hole; the right side is how fast the stored volume shrinks (negative, since <i>y</i> decreases). Separating variables:<br>∫<sub><i>H</i></sub><sup>0</sup> d<i>y</i>/√<i>y</i> = −(<i>a</i>/<i>A</i>)√(2<i>g</i>) ∫<sub>0</sub><sup><i>t</i></sup> d<i>t</i><br>[2√<i>y</i>]<sub><i>H</i></sub><sup>0</sup> = −(<i>a</i>/<i>A</i>)√(2<i>g</i>) <i>t</i> ⟹ −2√<i>H</i> = −(<i>a</i>/<i>A</i>)√(2<i>g</i>) <i>t</i><br><i>t</i> = (<i>A</i>/<i>a</i>)√(2<i>H</i>/<i>g</i>)',
          'Substituting <i>A</i>/<i>a</i> = 1.0/(1.0 × 10<sup>−4</sup>) = 10<sup>4</sup> and √(2<i>H</i>/<i>g</i>) = √(2 × 5/10) = √1 = 1 s:<br><i>t</i> = 10<sup>4</sup> × 1',
          '<b>Insight:</b> the emptying time scales as √<i>H</i>, not <i>H</i> — halving the emptying time requires starting from a quarter of the depth — because the outflow slows as the level falls. The huge <i>A</i>/<i>a</i> ratio (10 000) is why a small hole drains a big tank so slowly.',
        ],
        ans: '<i>t</i> = 10<sup>4</sup> s ≈ 2.8 hours',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State Bernoulli’s theorem and name the physical principle it expresses. In a horizontal pipe carrying water, the speed at point X is twice that at point Y. At which point is the pressure greater, and why? (One-line reasoning.)',
            a: 'Conservation of energy; pressure greater at Y (slower flow ⇒ higher pressure)',
          },
          {
            q: '[NEET] Why does the canvas roof of a fast-moving truck bulge upward? Choose and justify: (a) air inside pushes up, (b) fast air outside lowers the pressure above the roof, (c) the roof material expands, (d) gravity decreases at speed.',
            a: '(b)',
          },
          {
            q: '[JEE Main] Water flows through a pipe of radius 4 cm at 1.5 m s<sup>−1</sup>. The pipe branches into 3 identical smaller pipes each of radius 1 cm. Find the speed of water in each smaller pipe.',
            a: '8.0 m s<sup>−1</sup>',
          },
          {
            q: '[JEE Main] A tank open to the atmosphere is filled with water to a height of 1.25 m. A small hole is made at the bottom. (a) Find the efflux speed. (b) If the hole has area 0.5 cm<sup>2</sup>, find the initial volume flow rate. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '(a) 5.0 m s<sup>−1</sup>; (b) 2.5 × 10<sup>−4</sup> m<sup>3</sup> s<sup>−1</sup>',
          },
          {
            q: '[JEE Advanced] A water tank of height <i>H</i> stands on the ground and is full to the brim. A small hole is to be drilled in the side wall at height <i>h</i> above the ground. (a) Show that the horizontal range of the emerging jet on the ground is <i>R</i> = 2√(<i>h</i>(<i>H</i> − <i>h</i>)). (b) Find the height <i>h</i> that maximises the range and the value of <i>R</i><sub>max</sub>.',
            a: '(b) <i>h</i> = <i>H</i>/2, <i>R</i><sub>max</sub> = <i>H</i>',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Water flows through a horizontal pipe of varying cross-section. At a point where the cross-section is smaller, the water’s:',
        opts: [
          {
            label: 'Speed increases and pressure increases',
            nudge: '<b>(a)</b> is the intuitive-but-wrong answer — students imagine fast water “pushing harder,” confusing momentum with static pressure. This is the central misconception of the topic.',
          },
          { label: 'Speed increases and pressure decreases', nudge: null },
          {
            label: 'Speed decreases and pressure increases',
            nudge: '<b>(c)</b>/<b>(d)</b> get the continuity relation backwards (narrower ⇒ faster, not slower).',
          },
          {
            label: 'Speed decreases and pressure decreases',
            nudge: '<b>(c)</b>/<b>(d)</b> get the continuity relation backwards (narrower ⇒ faster, not slower).',
          },
        ],
        correct: 1,
        solution: 'Continuity (<i>Av</i> = const) forces the speed up in the narrow section; Bernoulli (horizontal) then forces the pressure down to conserve energy.',
      },
      {
        t: 'mcq',
        q: 'Two streamlines in a steady flow:',
        opts: [
          {
            label: 'Always run parallel',
            nudge: '<b>(a)</b> is too strong; streamlines converge and diverge (they bunch up where flow is fast).',
          },
          { label: 'Can cross at exactly one point', nudge: '<b>(b)</b> violates the single-valued-velocity requirement.' },
          { label: 'Can never cross each other', nudge: null },
          {
            label: 'Cross only in turbulent flow',
            nudge: '<b>(d)</b> confuses the definition — turbulent flow has no well-defined streamlines at all.',
          },
        ],
        correct: 2,
        solution: 'If two streamlines crossed, the fluid particle at the intersection would need two different velocity directions simultaneously — impossible in steady flow.',
      },
      {
        t: 'mcq',
        q: 'An aeroplane wing generates lift mainly because:',
        opts: [
          { label: 'Air below the wing moves faster than air above', nudge: '<b>(a)</b> reverses the speed relationship.' },
          { label: 'Air above the wing moves faster, lowering the pressure on top', nudge: null },
          { label: 'The wing is lighter than air', nudge: '<b>(c)</b> is irrelevant — a wing is far denser than air.' },
          {
            label: 'Engine thrust pushes the wing upward',
            nudge: '<b>(d)</b> confuses thrust (horizontal, from engines) with lift (vertical, from pressure difference).',
          },
        ],
        correct: 1,
        solution: 'The wing is shaped so air travels faster over the curved upper surface; by Bernoulli, faster flow means lower pressure on top, so the higher pressure below produces a net upward lift.',
      },
      {
        t: 'mcq',
        q: 'In a Venturi meter, a fluid speeds up as it passes through the constricted throat. Compared with the wide section, the pressure at the throat is:',
        opts: [
          { label: 'Higher', nudge: '<b>(a)</b> repeats the “fast = high pressure” error.' },
          { label: 'Lower', nudge: null },
          { label: 'The same', nudge: '<b>(c)</b> ignores the speed change entirely.' },
          { label: 'Zero', nudge: '<b>(d)</b> wrongly assumes pressure vanishes; it merely decreases.' },
        ],
        correct: 1,
        solution: 'The throat has higher speed (continuity), so lower static pressure (Bernoulli) — and this very pressure drop, read off a manometer, is what lets a Venturi meter measure the flow rate.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Fast fluid = high pressure.”</b> The most damaging misconception in the chapter. Bernoulli says the opposite on a horizontal streamline: faster flow means lower static pressure, because kinetic energy is bought at the cost of pressure energy. Train yourself to expect the inverse.',
          '<b>Applying Bernoulli where it doesn’t hold.</b> Bernoulli needs an ideal fluid — non-viscous, incompressible, steady, irrotational — along a single streamline. For turbulent flow, viscous pipes, or comparing points on two different streamlines of a flow with eddies, it fails. With real viscosity, downstream pressure is lower than Bernoulli predicts because energy is dissipated.',
          '<b>Wrong height in efflux problems.</b> The speed of efflux uses the <b>depth of the hole below the free surface</b>, √(2<i>g</i>(<i>H</i> − <i>h</i>)) — not the tank’s full height and not the hole’s height above the ground. Pinpoint the free surface first.',
          '<b>Confusing volume flow rate with speed.</b> <i>Q</i> = <i>Av</i> (in m<sup>3</sup> s<sup>−1</sup>) is conserved through a pipe; the speed <i>v</i> is not — it changes as <i>A</i> changes. When a question gives “rate of flow,” check whether it wants <i>Q</i> or <i>v</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Solve every flow problem in two moves: <b>continuity first, Bernoulli second.</b> Continuity (<i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub>) hands you the unknown speed; plug that into Bernoulli to get the pressure. Doing them in this order turns almost every Venturi, nozzle, and pipe problem into two clean substitutions. And remember the shortcut: efflux speed = free-fall speed through the depth, √(2<i>g</i> Δ<i>h</i>).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Continuity</b> <i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub> (<i>Av</i> = <i>Q</i> = const)',
            note: 'mass conservation; narrow pipe ⇒ faster flow. Needs only incompressible + steady.',
          },
          {
            f: '<b>Bernoulli</b> <i>P</i> + ½<i>ρv</i><sup>2</sup> + <i>ρgh</i> = constant along a streamline',
            note: 'energy conservation per unit volume; needs an <b>ideal fluid</b> (incompressible, non-viscous, steady, irrotational).',
          },
          {
            f: 'Core consequence',
            note: 'on a level pipe, faster flow ⇒ lower pressure. (Aerofoil lift, atomizer, Venturi, Magnus effect, roof blow-off.)',
          },
          {
            f: 'Static + dynamic = stagnation',
            note: '<i>P</i> + ½<i>ρv</i><sup>2</sup> = <i>P</i><sub>stag</sub> (constant). Each term has pressure dimensions [M L<sup>−1</sup> T<sup>−2</sup>].',
          },
          {
            f: '<b>Torricelli efflux</b> <i>v</i> = √(2<i>g</i>(<i>H</i> − <i>h</i>)) (depth below surface); jet range <i>R</i> = 2√(<i>h</i>(<i>H</i> − <i>h</i>)), max <i>R</i><sub>max</sub> = <i>H</i> at <i>h</i> = <i>H</i>/2.',
            note: '',
          },
          {
            f: '<b>Reynolds number</b> <i>R</i><sub><i>e</i></sub> = <i>ρvD</i>/<i>η</i> (dimensionless)',
            note: '≲ 1000 streamline, ≳ 2000 turbulent.',
          },
        ],
        aids: [
          '“Fast and low, slow and high” (speed vs. pressure).',
          '“Continuity first, Bernoulli second.”',
          '“Efflux = free fall” (√(2<i>gh</i>)).',
          '“Ideal fluid only: no viscosity, no turbulence, one streamline.”',
        ],
      },
    ],
  },
];
