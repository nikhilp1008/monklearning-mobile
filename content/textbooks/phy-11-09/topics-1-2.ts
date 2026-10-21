import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 01 and 02: pp. 600–620 of the Class 11 Physics Master
 * Reference, word for word: Fluid Pressure and Pascal’s Law (pp. 600–610) and
 * Buoyancy and Floatation (pp. 611–620). The chapter’s title and contents
 * (p. 599) are not copied. Each is split at its Sections 1 to 8. Figures 9.1
 * to 9.5 (drawn on pp. 603, 605, 607, 614 and 617) are redrawn in
 * lib/diagrams/physics-11-09.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 600–610 ─────────────────────────
  {
    n: '01',
    title: 'Fluid Pressure and Pascal’s Law',
    kalam: 'Pressure is not a vector, even though force is.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation stone of the entire fluids chapter. CBSE Boards almost always carry a 1–3 mark question on gauge vs. absolute pressure, the barometer, or a depth-pressure calculation. JEE Main reliably asks 1–2 questions on manometers, hydraulic lifts, or the <i>P</i> = <i>P</i><sub>0</sub> + <i>ρgh</i> relation. JEE Advanced rarely tests it alone but folds it into multi-liquid U-tube and accelerated-fluid problems. NEET typically asks one conceptual MCQ on the scalar/isotropic nature of pressure or a clean depth substitution.',
      },
      {
        t: 'p',
        html: 'Imagine you are standing in a crowded Mumbai local train at peak hour. People are pressed against you from every side — front, back, left, right. You do not feel a push in just one direction; you feel squeezed inward from all directions at once. This is almost exactly what a tiny water droplet feels when it sits deep inside a tank. The surrounding fluid presses on it from every direction. That inward squeeze, measured per unit area, is what we call <b>pressure</b>.<br><br>Let us be precise. Take any small flat surface of area <i>A</i> submerged in a fluid at rest. The fluid pushes on that surface with a force. The crucial observation is that this force is always perpendicular (normal) to the surface — never sideways. If there were a sideways (tangential) component, the fluid would simply slide and flow, and it would no longer be “at rest.” So for a static fluid, only the normal force survives. Pressure is the magnitude of this normal force divided by the area it acts on.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Pressure is not a vector, even though force is. A diver’s eardrum at a depth of 10 m feels the same pressure whether the eardrum faces up, down, or sideways — turn your head however you like, the water still pushes equally. Because pressure has no single direction of its own (it acts perpendicular to whatever surface you place in the fluid), it is a <b>scalar</b>. This is one of the most tested conceptual points in the whole chapter: force is a vector, pressure is a scalar.',
      },
      {
        t: 'p',
        html: 'Now, why does pressure increase as you go deeper? Picture a tall column of water like the overhead tank on a building rooftop. The water at the bottom of the tank has to support the weight of all the water sitting above it. The deeper you go, the taller the column of fluid pressing down, so the greater the pressure. This gives us the single most important idea of the topic: pressure grows linearly with depth. At the free surface you only feel the atmosphere pushing down (<i>P</i><sub>0</sub>); a depth <i>h</i> below that, you feel the atmosphere plus the weight of the fluid column above you.<br><br>A beautifully counter-intuitive consequence is the <b>hydrostatic paradox</b>. Take three vessels of wildly different shapes — one narrow and tall, one wide and squat, one funnel-shaped — and fill all three with water to the same height. The pressure at the base is identical in all three, even though they hold completely different amounts of water. Students find this shocking: surely more water means more pressure? No. Pressure at a point depends only on the depth below the free surface and the fluid’s density — not on the total volume or the shape of the container. It is like how the depth of your debt depends on how far below zero your balance is, not on how wide your bank account “container” happens to be.<br><br>This leads to a second great idea, due to Blaise Pascal. Suppose you press down on an enclosed fluid — say you push a piston into a sealed bottle of water. That extra pressure does not stay near the piston; it spreads undiminished to every single point in the fluid and onto every wall of the container. Squeeze one end of a toothpaste tube and the paste shoots out the far end — that is <b>Pascal’s law</b> in everyday action.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> All of this clean behaviour rests on a few assumptions. (1) The fluid is at rest — these results fail the moment the fluid accelerates or flows. (2) The fluid is <b>incompressible</b>, so its density <i>ρ</i> stays constant with depth. This is excellent for liquids but fails for gases, whose density changes a lot with pressure — which is exactly why “how high does the atmosphere extend” cannot be answered with a single <i>ρgh</i>. (3) We neglect surface tension and the fluid’s own internal stresses. (4) For Pascal’s law, the fluid must be enclosed — an open fluid simply spills rather than transmitting pressure.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Pressure (at a point)',
        main: '<i>P</i> = lim<sub>Δ<i>A</i>→0</sub> Δ<i>F</i><sub>⊥</sub>/Δ<i>A</i> = d<i>F</i><sub>⊥</sub>/d<i>A</i>',
        legend: ['<i>F</i><sub>⊥</sub> = the normal force on area <i>A</i>'],
        note: '<b>SI unit:</b> pascal, 1 Pa = 1 N m<sup>−2</sup><br><b>Dimensional formula:</b> [<i>P</i>] = [M L T<sup>−2</sup>]/[L<sup>2</sup>] = [M L<sup>−1</sup> T<sup>−2</sup>]',
      },
      {
        t: 'formula',
        kicker: 'Variation of pressure with depth (incompressible fluid)',
        main: 'd<i>P</i>/d<i>h</i> = <i>ρg</i> ⟹ <i>P</i> = <i>P</i><sub>0</sub> + <i>ρgh</i>',
        legend: [
          '<i>P</i> = absolute pressure at depth <i>h</i>',
          '<i>P</i><sub>0</sub> = pressure at the free surface (atmospheric)',
          '<i>ρ</i> = fluid density',
          '<i>g</i> = acceleration due to gravity',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Gauge pressure and absolute pressure',
        main: '<i>P</i><sub><i>g</i></sub> = <i>P</i> − <i>P</i><sub>0</sub> = <i>ρgh</i> ⟹ <i>P</i><sub>abs</sub> = <i>P</i><sub>0</sub> + <i>P</i><sub><i>g</i></sub>',
        legend: [],
        note: 'Absolute pressure ≥ 0 always; gauge pressure may be <b>positive or negative</b> (negative when the point is at lower pressure than the atmosphere, e.g. sucking on a straw).',
      },
      {
        t: 'def',
        term: 'Pascal’s Law',
        html: 'A change in pressure applied to an enclosed incompressible fluid is transmitted undiminished to every point of the fluid and to the walls of its container.',
      },
      {
        t: 'formula',
        kicker: 'Hydraulic lift (Pascal’s law in action)',
        main: 'With input piston area <i>A</i><sub>1</sub>, force <i>F</i><sub>1</sub>, and output piston area <i>A</i><sub>2</sub>, force <i>F</i><sub>2</sub>:<br><i>F</i><sub>1</sub>/<i>A</i><sub>1</sub> = <i>F</i><sub>2</sub>/<i>A</i><sub>2</sub> ⟹ <i>F</i><sub>2</sub> = <i>F</i><sub>1</sub><i>A</i><sub>2</sub>/<i>A</i><sub>1</sub><br>Since the same volume of fluid is displaced at both pistons, <i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub>, giving:<br><i>h</i><sub>2</sub> = <i>h</i><sub>1</sub><i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mechanical advantage',
        main: 'Mechanical advantage = <i>F</i><sub>2</sub>/<i>F</i><sub>1</sub> = <i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Useful pressure conversions',
        main: '1 atm = 1.013 × 10<sup>5</sup> Pa = 760 torr = 760 mm Hg<br>1 bar = 10<sup>5</sup> Pa<br>1 torr = 133 Pa',
        legend: [],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Variation of pressure with depth.</b><br><b>Assumption:</b> Consider an incompressible fluid of uniform density <i>ρ</i> at rest in a container, open to the atmosphere at the top.',
      },
      { t: 'fig', id: 'p11-09-fig-9.1' },
      {
        t: 'p',
        html: 'Isolate an imaginary thin cylindrical column of fluid of cross-sectional area <i>A</i>, with its top face at depth <i>h</i><sub>1</sub> and bottom face at depth <i>h</i><sub>2</sub>. Because the fluid is at rest, this column is in equilibrium, so the net vertical force on it is zero.<br><br>Three vertical forces act on the column:<br>• Downward force on the top face: <i>P</i><sub>1</sub><i>A</i> (fluid above pushes down)<br>• Upward force on the bottom face: <i>P</i><sub>2</sub><i>A</i> (fluid below pushes up)<br>• Weight of the column acting downward: <i>W</i> = <i>mg</i> = (<i>ρ</i> · <i>A</i> · (<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>)) <i>g</i><br><br><b>Physical reasoning:</b> the upward push from below must support both the downward push from above and the column’s own weight. Setting net force to zero:<br><i>P</i><sub>2</sub><i>A</i> = <i>P</i><sub>1</sub><i>A</i> + <i>ρA</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>) <i>g</i><br>Cancelling <i>A</i>:<br><i>P</i><sub>2</sub> − <i>P</i><sub>1</sub> = <i>ρg</i>(<i>h</i><sub>2</sub> − <i>h</i><sub>1</sub>)<br>Now choose the top face at the free surface, where <i>h</i><sub>1</sub> = 0 and <i>P</i><sub>1</sub> = <i>P</i><sub>0</sub>, and let the bottom face be at depth <i>h</i> where <i>P</i><sub>2</sub> = <i>P</i>:<br><i>P</i> = <i>P</i><sub>0</sub> + <i>ρgh</i><br>Notice the result depends only on depth <i>h</i>, not on the horizontal cross-section or the container’s shape — this is precisely the origin of the hydrostatic paradox.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Pascal’s Law (demonstration).</b><br><b>Assumption:</b> An enclosed incompressible liquid in a cylinder fitted with a piston of area <i>A</i>.<br><br>The pressure at any interior point <i>B</i> lying a vertical distance <i>z</i> below the piston is<br><i>P</i><sub><i>B</i></sub> = <i>P</i><sub>piston</sub> + <i>ρgz</i><br>Now apply an extra external force <i>F</i> on the piston, increasing the pressure just below it by Δ<i>P</i><sub>piston</sub> = <i>F</i>/<i>A</i>. <b>Physical reasoning:</b> because the liquid is incompressible, the geometry does not change — <i>z</i> stays the same, <i>ρ</i> stays the same, <i>g</i> stays the same. Differencing the pressure equation before and after:<br>Δ<i>P</i><sub><i>B</i></sub> = Δ<i>P</i><sub>piston</sub> + <i>ρg</i> Δ<i>z</i> (= 0) = Δ<i>P</i><sub>piston</sub> = <i>F</i>/<i>A</i><br>So the pressure increase at <i>B</i> is exactly equal to the increase at the piston — independent of how deep <i>B</i> is. Since <i>B</i> was arbitrary, the change is transmitted undiminished to every point. That is Pascal’s law.',
      },
      { t: 'p', html: '<b>Derivation 3 — Hydraulic lift force multiplication.</b>' },
      { t: 'fig', id: 'p11-09-fig-9.2' },
      {
        t: 'p',
        html: 'Push the small input piston (area <i>A</i><sub>1</sub>) with force <i>F</i><sub>1</sub>. By Pascal’s law the pressure increase Δ<i>P</i> = <i>F</i><sub>1</sub>/<i>A</i><sub>1</sub> is transmitted to the large output piston (area <i>A</i><sub>2</sub>), producing an upward force<br><i>F</i><sub>2</sub> = Δ<i>P</i> · <i>A</i><sub>2</sub> = <i>F</i><sub>1</sub><i>A</i><sub>2</sub>/<i>A</i><sub>1</sub><br>Because <i>A</i><sub>2</sub> > <i>A</i><sub>1</sub>, a small input force lifts a large load. Energy is not created — the input piston travels a larger distance (<i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub>), so the work done stays equal: <i>F</i><sub>1</sub><i>h</i><sub>1</sub> = <i>F</i><sub>2</sub><i>h</i><sub>2</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A cylindrical overhead tank in a hostel is filled with water to a height of 2.5 m. The flat circular base of the tank has an area of 0.80 m<sup>2</sup>. Taking atmospheric pressure <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa, water density <i>ρ</i> = 1000 kg m<sup>−3</sup> and <i>g</i> = 10 m s<sup>−2</sup>, find (a) the gauge pressure at the base, (b) the absolute pressure at the base, and (c) the total downward force exerted by the water on the base.',
        steps: [
          '<b>Given:</b> <i>h</i> = 2.5 m, <i>A</i> = 0.80 m<sup>2</sup>, <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa, <i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.',
          '(a) Gauge pressure:<br><i>P</i><sub><i>g</i></sub> = <i>ρgh</i> = 1000 × 10 × 2.5 = 2.5 × 10<sup>4</sup> Pa',
          '(b) Absolute pressure:<br><i>P</i> = <i>P</i><sub>0</sub> + <i>P</i><sub><i>g</i></sub> = 1.0 × 10<sup>5</sup> + 0.25 × 10<sup>5</sup> = 1.25 × 10<sup>5</sup> Pa',
          '(c) Total force on the base uses the absolute pressure (the atmosphere also presses down, transmitted through the water):<br><i>F</i> = <i>P</i> × <i>A</i> = 1.25 × 10<sup>5</sup> × 0.80',
        ],
        ans: '<i>F</i> = 1.0 × 10<sup>5</sup> N',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A scuba diver descends into seawater of density <i>ρ</i> = 1030 kg m<sup>−3</sup>. At approximately what depth is the gauge pressure equal to 2 atm? (Take <i>g</i> = 10 m s<sup>−2</sup>, 1 atm ≈ 1.0 × 10<sup>5</sup> Pa.)',
        steps: [
          '<b>The traps to avoid:</b> (i) Using absolute pressure instead of gauge — the question asks for gauge, so use <i>P</i><sub><i>g</i></sub> = <i>ρgh</i> directly, no <i>P</i><sub>0</sub> term. (ii) Using freshwater density 1000 instead of seawater 1030.',
          '<b>Speed approach.</b> Gauge pressure = 2 atm = 2.0 × 10<sup>5</sup> Pa. Then<br><i>h</i> = <i>P</i><sub><i>g</i></sub>/(<i>ρg</i>) = (2.0 × 10<sup>5</sup>)/(1030 × 10) = (2.0 × 10<sup>5</sup>)/(1.03 × 10<sup>4</sup>) ≈ 19.4 m',
          '<b>Mental shortcut:</b> in water <i>ρg</i> ≈ 10<sup>4</sup>, so every 1 atm (10<sup>5</sup> Pa) of gauge pressure costs about 10 m of depth. Two atmospheres ⇒ roughly 20 m, nudged slightly down to ≈ 19.4 m because seawater is denser than fresh water.',
        ],
        ans: '≈ 19.4 m',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (combines Pascal’s law force-ratio + volume conservation)',
        q: 'A hydraulic car lift has an input piston of radius 2 cm and an output piston of radius 20 cm. A car of mass 1200 kg rests on the output piston. (a) What minimum force must be applied to the input piston to support the car? (b) Through what distance must the input piston be pushed to raise the car by 5 cm? (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '(a) The output force needed equals the car’s weight:<br><i>F</i><sub>2</sub> = <i>mg</i> = 1200 × 10 = 1.2 × 10<sup>4</sup> N',
          'The area ratio (areas scale as radius squared):<br><i>A</i><sub>2</sub>/<i>A</i><sub>1</sub> = (<i>r</i><sub>2</sub>/<i>r</i><sub>1</sub>)<sup>2</sup> = (20/2)<sup>2</sup> = 100',
          'By Pascal’s law:<br><i>F</i><sub>1</sub> = <i>F</i><sub>2</sub><i>A</i><sub>1</sub>/<i>A</i><sub>2</sub> = (1.2 × 10<sup>4</sup>)/100',
          '(b) The same fluid volume is displaced at both pistons, so <i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub>:<br><i>h</i><sub>1</sub> = <i>h</i><sub>2</sub><i>A</i><sub>2</sub>/<i>A</i><sub>1</sub> = 5 cm × 100',
          '<b>Sanity check on energy:</b> <i>F</i><sub>1</sub><i>h</i><sub>1</sub> = 120 × 5 = 600 J and <i>F</i><sub>2</sub><i>h</i><sub>2</sub> = 1.2 × 10<sup>4</sup> × 0.05 = 600 J. Equal, as they must be — the lift multiplies force but never energy.',
        ],
        ans: '(a) 120 N; (b) 500 cm = 5 m',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (multi-liquid U-tube, requires the “both arms move” insight)',
        fig: 'p11-09-fig-9.3',
        q: 'A U-tube of uniform cross-section, with both arms open to the atmosphere, contains mercury of density <i>ρ</i><sub><i>Hg</i></sub> = 13.6 × 10<sup>3</sup> kg m<sup>−3</sup>. A column of water (density <i>ρ</i><sub><i>w</i></sub> = 1.0 × 10<sup>3</sup> kg m<sup>−3</sup>) of height <i>H</i> = 13.6 cm is then poured slowly into the left arm so that it floats on top of the mercury. By how much does the mercury level rise in the right arm?',
        steps: [
          '<b>The key insight (the trap):</b> when mercury is pushed down by <i>x</i> in the left arm, the same mercury reappears in the right arm, rising by <i>x</i>. So the <b>difference in mercury levels</b> between the two arms is 2<i>x</i>, not <i>x</i>. Students who write <i>x</i> for the level difference get an answer twice the correct one (1.0 cm instead of 0.5 cm).',
          'Set up a pressure balance at the level of the lower mercury surface (in the left arm). Pressures from both sides must be equal at the same horizontal level within the connected mercury.<br>• <b>Left side</b> (going down through atmosphere, then water column <i>H</i>): <i>P</i><sub>0</sub> + <i>ρ</i><sub><i>w</i></sub><i>gH</i><br>• <b>Right side</b> (going down through atmosphere, then a mercury column of height 2<i>x</i> down to the same level): <i>P</i><sub>0</sub> + <i>ρ</i><sub><i>Hg</i></sub><i>g</i>(2<i>x</i>)',
          'Equating:<br><i>P</i><sub>0</sub> + <i>ρ</i><sub><i>w</i></sub><i>gH</i> = <i>P</i><sub>0</sub> + <i>ρ</i><sub><i>Hg</i></sub><i>g</i>(2<i>x</i>)<br><i>ρ</i><sub><i>w</i></sub><i>H</i> = <i>ρ</i><sub><i>Hg</i></sub>(2<i>x</i>)<br>2<i>x</i> = <i>H</i>(<i>ρ</i><sub><i>w</i></sub>/<i>ρ</i><sub><i>Hg</i></sub>) = 13.6 × (1.0 × 10<sup>3</sup>)/(13.6 × 10<sup>3</sup>) = 1.0 cm',
          'The mercury rises 0.5 cm in the right arm (and falls 0.5 cm in the left). The numbers were chosen so the ratio <i>ρ</i><sub><i>w</i></sub>/<i>ρ</i><sub><i>Hg</i></sub> exactly cancels <i>H</i> — a clean way to confirm you handled the 2<i>x</i> correctly.',
        ],
        ans: '<i>x</i> = 0.5 cm',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A swimming pool is 3.0 m deep. Find the gauge pressure and the absolute pressure at the bottom. (Take <i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>, <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa.)',
            a: '<i>P</i><sub><i>g</i></sub> = 3.0 × 10<sup>4</sup> Pa; <i>P</i> = 1.3 × 10<sup>5</sup> Pa',
          },
          {
            q: '[NEET] Three open vessels of different shapes — conical, cylindrical, and inverted-conical — are each filled with the same oil to the same height <i>h</i>. The bases all have equal area. Rank the pressures at the three bases.',
            a: 'All three equal',
          },
          {
            q: '[JEE Main] A hydraulic press has pistons of diameters 5 cm and 30 cm. A force of 90 N is applied to the smaller piston. Find the maximum load the larger piston can support.',
            a: '3240 N',
          },
          {
            q: '[JEE Main] An open-tube mercury manometer is connected to a gas cylinder. The mercury level in the open arm is 18 cm higher than in the arm connected to the cylinder. Find the gauge pressure and the absolute pressure of the gas. (Take <i>ρ</i><sub><i>Hg</i></sub> = 13.6 × 10<sup>3</sup> kg m<sup>−3</sup>, <i>g</i> = 9.8 m s<sup>−2</sup>, <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa.)',
            a: '<i>P</i><sub><i>g</i></sub> ≈ 2.4 × 10<sup>4</sup> Pa; <i>P</i><sub>abs</sub> ≈ 1.24 × 10<sup>5</sup> Pa',
          },
          {
            q: '[JEE Advanced] A vertical cylindrical container of base radius 10 cm holds water to a height of 40 cm, with a layer of oil (relative density 0.8) of height 20 cm floating on top. Find (a) the gauge pressure at the bottom and (b) the total force on the base. (Take <i>g</i> = 10 m s<sup>−2</sup>, <i>ρ</i><sub><i>w</i></sub> = 1000 kg m<sup>−3</sup>.)',
            a: '(a) 5.6 × 10<sup>3</sup> Pa; (b) ≈ 176 N (liquids only). Including the atmosphere (<i>P</i><sub>0</sub><i>A</i> ≈ 3.1 × 10<sup>3</sup> N for <i>P</i><sub>0</sub> = 1.0 × 10<sup>5</sup> Pa) gives ≈ 3.3 × 10<sup>3</sup> N.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Two points <i>A</i> and <i>B</i> lie at the same depth in a tank of water, but <i>A</i> is near the centre and <i>B</i> is right next to the slanted side wall. The pressures satisfy:',
        opts: [
          {
            label: '<i>P</i><sub><i>A</i></sub> > <i>P</i><sub><i>B</i></sub>',
            nudge: '<b>(a)</b>/<b>(b)</b> tempt students who imagine the wall “adds” or “removes” pressure, or that the centre has “more water above.” Neither is true; the column height above each point is the same.',
          },
          {
            label: '<i>P</i><sub><i>A</i></sub> < <i>P</i><sub><i>B</i></sub>',
            nudge: '<b>(a)</b>/<b>(b)</b> tempt students who imagine the wall “adds” or “removes” pressure, or that the centre has “more water above.” Neither is true; the column height above each point is the same.',
          },
          { label: '<i>P</i><sub><i>A</i></sub> = <i>P</i><sub><i>B</i></sub>', nudge: null },
          {
            label: 'Cannot be determined',
            nudge: '<b>(d)</b> tempts those who feel the geometry is too vague — but the depth alone fully determines it.',
          },
        ],
        correct: 2,
        solution: 'Pressure in a static fluid depends only on depth below the free surface, not on horizontal position or proximity to a wall. Same depth ⇒ same pressure.',
      },
      {
        t: 'mcq',
        q: 'Which of the following can be <b>negative</b>?',
        opts: [
          {
            label: 'Absolute pressure',
            nudge: '<b>(a)</b> Absolute pressure is measured from a perfect vacuum and is always ≥ 0. Students who pick <b>(a)</b> confuse absolute with gauge — the most common error here.',
          },
          { label: 'Gauge pressure', nudge: null },
          { label: 'Atmospheric pressure', nudge: '<b>(c)</b> Atmospheric pressure is a positive physical quantity.' },
          { label: 'Density', nudge: '<b>(d)</b> Density is intrinsically positive.' },
        ],
        correct: 1,
        solution: 'Gauge pressure = <i>P</i> − <i>P</i><sub>0</sub>, which is negative whenever a point is at lower pressure than the atmosphere (e.g. inside the mouth while sucking through a straw).',
      },
      {
        t: 'mcq',
        q: 'A hydraulic lift multiplies the input force by a factor of 25. If the output piston is raised by 4 cm, the input piston must move through:',
        opts: [
          { label: '0.16 cm', nudge: '<b>(a)</b> comes from dividing instead of multiplying (4/25), the classic inverse error.' },
          { label: '1 cm', nudge: '<b>(b)</b> has no working behind it: volume conservation (<i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub>) makes the small input piston move farther than the output piston, so no answer below 4 cm can be right.' },
          { label: '100 cm', nudge: null },
          { label: '4 cm', nudge: '<b>(d)</b> comes from assuming both pistons move equally — ignoring the area difference.' },
        ],
        correct: 2,
        solution: 'Force multiplication = <i>A</i><sub>2</sub>/<i>A</i><sub>1</sub> = 25. Volume conservation gives <i>h</i><sub>1</sub> = <i>h</i><sub>2</sub>(<i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>) = 4 × 25 = 100 cm. The input piston moves the larger distance.',
      },
      {
        t: 'mcq',
        q: 'A barometer reads 76 cm of mercury at sea level. If the same barometer is taken to the top of a tall mountain, the mercury column will:',
        opts: [
          { label: 'Rise above 76 cm', nudge: '<b>(a)</b> reverses the relationship — a common slip under exam pressure.' },
          { label: 'Fall below 76 cm', nudge: null },
          { label: 'Stay at 76 cm', nudge: '<b>(c)</b> tempts students who think the barometer reading is a fixed constant.' },
          { label: 'Drop to zero', nudge: '<b>(d)</b> overstates it; pressure decreases but does not vanish on an ordinary mountain.' },
        ],
        correct: 1,
        solution: 'Atmospheric pressure decreases with altitude (less air column above), so the supported mercury height <i>h</i> = <i>P</i><sub>0</sub>/(<i>ρ</i><sub><i>Hg</i></sub><i>g</i>) falls.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating pressure as a vector.</b> Pressure is a scalar; it has no direction. Only the force due to pressure is a vector (and it always acts perpendicular to the surface). Writing pressure with a direction is a guaranteed mark-loser in CBSE theory questions.',
          '<b>Confusing gauge and absolute pressure.</b> “Pressure on the submarine window,” “tyre pressure,” and “blood pressure” are almost always gauge values. Read the question: if it asks for the net force on a submerged window whose interior is at atmospheric pressure, you use <b>gauge</b> pressure (<i>ρgh</i>), because the atmosphere pushes on both sides and cancels.',
          '<b>Falling for the hydrostatic paradox.</b> More liquid does not mean more pressure. Pressure at the base depends only on <i>ρ</i>, <i>g</i>, and the height <i>h</i> — never on the volume or the container’s shape.',
          '<b>Forgetting the factor of 2 in U-tube problems.</b> When fluid in one arm drops by <i>x</i>, it rises by <i>x</i> in the other arm, so the level difference is 2<i>x</i>. This single oversight is the most common reason Advanced-level U-tube answers come out wrong by exactly a factor of 2.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For depth problems in water, memorise that <i>ρg</i> ≈ 10<sup>4</sup> Pa m<sup>−1</sup>, i.e. roughly <b>1 atm of gauge pressure per 10 m of depth</b>. This lets you estimate or sanity-check any answer mentally before grinding through the arithmetic — and it instantly flags a wrong order of magnitude on the OMR.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Pressure <i>P</i> = <i>F</i><sub>⊥</sub>/<i>A</i>',
            note: 'a <b>scalar</b>, SI unit <b>Pa</b> = N m<sup>−2</sup>, dimensions [M L<sup>−1</sup> T<sup>−2</sup>].',
          },
          {
            f: '<b>Acts perpendicular</b> to any surface; at a given depth it is the <b>same in all directions</b> (isotropic) and the <b>same at all points on a horizontal level</b>.',
            note: '',
          },
          {
            f: 'Depth law',
            note: '<i>P</i> = <i>P</i><sub>0</sub> + <i>ρgh</i> — depends only on depth, not on container shape (<b>hydrostatic paradox</b>).',
          },
          {
            f: 'Gauge vs. absolute',
            note: '<i>P</i><sub><i>g</i></sub> = <i>P</i> − <i>P</i><sub>0</sub> = <i>ρgh</i>; absolute ≥ 0, gauge can be <b>negative</b>.',
          },
          {
            f: 'Pascal’s law',
            note: 'pressure change in an enclosed fluid is transmitted <b>undiminished</b> everywhere ⇒ <b>Hydraulic lift:</b> <i>F</i><sub>2</sub> = <i>F</i><sub>1</sub><i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>, with <i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub> (force multiplied, energy conserved).',
          },
          {
            f: 'Conversions',
            note: '1 atm = 1.013 × 10<sup>5</sup> Pa = 760 mm Hg; 1 bar = 10<sup>5</sup> Pa; 1 torr = 133 Pa.',
          },
        ],
        aids: [
          '“Pressure is a scalar, Force is a vector.”',
          '“Deeper = denser-times-g-times-depth” for <i>ρgh</i>.',
          '“Big piston, big force, small distance” for the hydraulic lift trade-off.',
          'In water: <b>10 m ≈ 1 atm</b>.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 611–620 ─────────────────────────
  {
    n: '02',
    title: 'Buoyancy and Floatation',
    kalam: 'Buoyancy depends on the displaced fluid, not on the body.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite across every exam. CBSE Boards routinely ask a 2–3 mark Archimedes’-principle statement or an apparent-weight calculation. JEE Main almost always carries a numerical on fraction-submerged, two-liquid floatation, or a body held by a string. NEET loves the conceptual traps here — the ice-melting question and the anomalous-expansion buoyancy question recur year after year. JEE Advanced folds buoyancy into accelerating-frame and oscillating-float problems.',
      },
      {
        t: 'p',
        html: 'Have you ever tried to push a beach ball or a sealed water bottle down to the bottom of a swimming pool? It fights back — hard. The deeper you push it, the more stubbornly it shoves upward against your hand, and the instant you let go it rockets to the surface. That upward shove is <b>buoyancy</b>, and understanding where it comes from is the whole game.<br><br>Buoyancy is not some new mysterious force. It is simply the net effect of fluid pressure that you already met in Topic 01. Recall that pressure increases with depth: <i>P</i> = <i>P</i><sub>0</sub> + <i>ρgh</i>. Now picture any object submerged in water. The fluid presses on it from all sides — but the pressure on its <b>bottom</b> face is larger than the pressure on its <b>top</b> face, because the bottom is deeper. So the upward push from below beats the downward push from above. The leftover, the net upward force, is buoyancy. Buoyancy exists only because pressure varies with depth — in a weightless, pressure-uniform fluid, there would be no buoyancy at all.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine you scoop out the object and replace it with an identical blob of the same fluid — a “water-shaped lump of water” sitting where the object was. That blob just floats there in equilibrium; it does not sink or rise, because it is part of the fluid. What holds it up? The surrounding fluid pushes on its boundary with exactly enough upward force to balance the blob’s own weight. But the surrounding fluid does not “know” what is inside that boundary — it pushes the same way whether the boundary encloses water or an iron block. So the upward force on any object equals the weight of the fluid that would have occupied its space. This is <b>Archimedes’ principle</b>:<br>The buoyant force on a body, partially or fully submerged in a fluid, equals the weight of the fluid displaced by the body, and acts vertically upward through the centre of the displaced fluid.',
      },
      {
        t: 'p',
        html: 'Now comes the most important consequence for exams. Buoyancy depends on the <b>displaced fluid</b>, not on the body. <i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i> — it uses the fluid’s density and the submerged volume. The body’s own density never appears in the buoyant force itself. The body’s density only decides what happens: if the body is denser than the fluid, its weight beats the maximum possible buoyancy and it sinks; if it is lighter, buoyancy wins and it rises until just enough of it pokes out of the surface that the reduced submerged volume gives a buoyant force exactly equal to its weight. That balance point is <b>floatation</b>.<br><br>This is why a giant steel ship floats while a small steel nail sinks. The nail is solid steel — denser than water, period. The ship is mostly hollow; averaged over its huge hull-and-air volume, its effective density is less than water. Same material, opposite fate, decided entirely by the average density relative to the fluid. A floating body settles so that the fraction submerged equals the ratio of densities: a block of relative density 0.6 floats with 60% of itself underwater — which is exactly why roughly 90% of an iceberg hides below the surface.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) The fluid must be in equilibrium in an inertial frame for the simple “<i>F</i><sub><i>B</i></sub> = weight of displaced fluid” form; in an accelerating lift or a turning car, you must replace <i>g</i> with the effective gravity <i>g</i><sub>eff</sub>. (2) The fluid is treated as incompressible with well-defined density <i>ρ</i><sub><i>f</i></sub> — and note <i>ρ</i><sub><i>f</i></sub> itself changes with temperature (water is densest at 4°C), so buoyancy is temperature-sensitive. (3) We ignore surface tension and assume the body is fully wetted. (4) “Weight of displaced fluid” assumes fluid actually surrounds the body — if a flat-bottomed block is stuck to the floor with no water underneath, there is no upward pressure on its base and no buoyancy.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Buoyant force (Archimedes’ principle)',
        main: '<i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i>',
        legend: [
          '<i>ρ</i><sub><i>f</i></sub> = density of fluid',
          '<i>V</i><sub>sub</sub> = volume of the body submerged (= volume of fluid displaced)',
          '<i>g</i> = acceleration due to gravity',
        ],
        note: 'SI unit: newton (N); dimensions [M L T<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Apparent weight (body fully submerged)',
        main: '<i>W</i><sub>app</sub> = <i>W</i> − <i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>b</i></sub><i>Vg</i> − <i>ρ</i><sub><i>f</i></sub><i>Vg</i> = <i>Vg</i>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)',
        legend: [],
        note: 'The “loss of weight” equals the buoyant force, i.e. the weight of the displaced fluid.',
      },
      {
        t: 'p',
        html: '<b>Condition for floatation</b> — for a body of density <i>ρ</i><sub><i>b</i></sub>, volume <i>V</i> in a fluid of density <i>ρ</i><sub><i>f</i></sub> (with <i>W</i> = <i>ρ</i><sub><i>b</i></sub><i>Vg</i> and maximum buoyancy <i>F</i><sub><i>B</i>,max</sub> = <i>ρ</i><sub><i>f</i></sub><i>Vg</i>):<br>• <i>ρ</i><sub><i>b</i></sub> > <i>ρ</i><sub><i>f</i></sub>: weight wins ⇒ body <b>sinks</b>.<br>• <i>ρ</i><sub><i>b</i></sub> = <i>ρ</i><sub><i>f</i></sub>: neutral ⇒ body floats <b>fully submerged</b>, in equilibrium anywhere.<br>• <i>ρ</i><sub><i>b</i></sub> < <i>ρ</i><sub><i>f</i></sub>: body <b>floats</b> partially submerged.',
      },
      {
        t: 'formula',
        kicker: 'Fraction submerged (floating body)',
        main: 'equilibrium <i>ρ</i><sub><i>b</i></sub><i>Vg</i> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i> gives:<br><i>V</i><sub>sub</sub>/<i>V</i> = <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub> ⟹ <i>V</i><sub>out</sub>/<i>V</i> = 1 − <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Relative density (specific gravity)',
        main: 'a pure ratio, dimensionless:<br>RD = <i>ρ</i><sub>substance</sub>/<i>ρ</i><sub>water</sub> = (weight in air)/(loss of weight in water) = <i>W</i><sub>air</sub>/(<i>W</i><sub>air</sub> − <i>W</i><sub>app</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Buoyancy in an accelerating frame',
        main: 'replace <i>g</i> by the effective gravity <i>g</i><sub>eff</sub>:<br><i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i><sub>eff</sub>',
        legend: [],
        note: 'e.g. a lift accelerating up with <i>a</i>: <i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i>; accelerating down: <i>g</i><sub>eff</sub> = <i>g</i> − <i>a</i>.',
      },
      {
        t: 'def',
        term: 'Stability',
        html: 'the buoyant force acts at the <b>centre of buoyancy</b> <i>B</i> (centroid of displaced fluid); weight acts at the <b>centre of gravity</b> <i>G</i>. The vertical through the shifted centre of buoyancy <i>B</i>′ after a small tilt meets the body axis at the <b>metacentre</b> <i>M</i>. The body is <b>stable</b> if <i>M</i> lies above <i>G</i> (restoring torque) and <b>unstable</b> if <i>M</i> lies below <i>G</i>.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Archimedes’ principle (the “displaced-fluid replacement” argument).</b><br><b>Assumption:</b> a body of arbitrary shape fully submerged in a fluid of density <i>ρ</i><sub><i>f</i></sub>, which is in equilibrium in an inertial frame.',
      },
      { t: 'fig', id: 'p11-09-fig-9.4' },
      {
        t: 'p',
        html: '<b>Step 1 — Replace the body with fluid.</b> Imagine removing the body and filling the exact same boundary with the surrounding fluid. This “substituting fluid” is now an ordinary part of the bulk fluid, hence in equilibrium.<br><br><b>Step 2 — Forces on the substituting fluid.</b> Only two forces act on it: its own weight <i>m</i><sub><i>f</i></sub><i>g</i> (downward, where <i>m</i><sub><i>f</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i> is the mass of displaced fluid) and the net contact force from all the surrounding fluid pressing on its boundary. Call this net contact force <i>F</i><sub><i>B</i></sub>.<br><br><b>Step 3 — Apply equilibrium.</b> Since the substituting fluid neither rises nor sinks:<br><i>F</i><sub><i>B</i></sub> = <i>m</i><sub><i>f</i></sub><i>g</i> = <i>ρ</i><sub><i>f</i></sub><i>Vg</i> (directed vertically upward).<br><br><b>Step 4 — Transfer back to the real body.</b> The surrounding fluid presses on the boundary purely according to its shape and depth — it does not care what is inside the boundary. So when the real body occupies that same boundary, the fluid exerts the identical net contact force. <b>Physical reasoning:</b> the pressure distribution over the boundary is set by the boundary’s geometry and depth alone, which are unchanged. Therefore the buoyant force on the body equals the weight of the displaced fluid:<br><i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i><br>This is Archimedes’ principle.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Law of floatation and fraction submerged.</b><br>A body of density <i>ρ</i><sub><i>b</i></sub>, total volume <i>V</i>, floats in a fluid of density <i>ρ</i><sub><i>f</i></sub> with volume <i>V</i><sub>sub</sub> below the surface. Two vertical forces act: weight <i>W</i> = <i>ρ</i><sub><i>b</i></sub><i>Vg</i> down, buoyancy <i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i> up. For floating equilibrium the net force is zero:<br><i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i> = <i>ρ</i><sub><i>b</i></sub><i>Vg</i><br><b>Physical reasoning:</b> the body sinks only until the displaced fluid weighs exactly as much as the body — at that instant the upward push balances the pull of gravity. Cancelling <i>g</i> and rearranging:<br><i>V</i><sub>sub</sub>/<i>V</i> = <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub><br>Since a body floating at the surface needs <i>ρ</i><sub><i>b</i></sub> < <i>ρ</i><sub><i>f</i></sub>, this fraction is less than 1, as it must be (it reaches 1 only in the neutral case <i>ρ</i><sub><i>b</i></sub> = <i>ρ</i><sub><i>f</i></sub>). The fraction above the surface is 1 − <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>Key procedure — Finding relative density by weighing.</b><br>Weigh the body in air to get <i>W</i><sub>air</sub> = <i>ρ</i><sub><i>b</i></sub><i>Vg</i>. Fully submerge it in water and read the apparent weight <i>W</i><sub>app</sub> = (<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>w</i></sub>)<i>Vg</i>. The loss of weight equals the buoyant force, <i>ρ</i><sub><i>w</i></sub><i>Vg</i>. Dividing:<br>RD = <i>W</i><sub>air</sub>/(<i>W</i><sub>air</sub> − <i>W</i><sub>app</sub>) = (<i>ρ</i><sub><i>b</i></sub><i>Vg</i>)/(<i>ρ</i><sub><i>w</i></sub><i>Vg</i>) = <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>w</i></sub><br>This is exactly how a laboratory determines specific gravity, and the principle behind the hydrometer (which floats deeper in less dense liquids and reads density off a calibrated stem).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A solid iron block of volume 500 cm<sup>3</sup> and density 7800 kg m<sup>−3</sup> is fully submerged in water. Find (a) its weight in air, (b) the buoyant force on it, and (c) its apparent weight in water. (Take <i>ρ</i><sub><i>w</i></sub> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>Given:</b> <i>V</i> = 500 cm<sup>3</sup> = 5 × 10<sup>−4</sup> m<sup>3</sup>, <i>ρ</i><sub><i>b</i></sub> = 7800 kg m<sup>−3</sup>.',
          '(a) Mass <i>m</i> = <i>ρ</i><sub><i>b</i></sub><i>V</i> = 7800 × 5 × 10<sup>−4</sup> = 3.9 kg, so weight in air:<br><i>W</i> = <i>mg</i> = 3.9 × 10 = 39 N',
          '(b) Buoyant force uses fluid density and submerged (= full) volume:<br><i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>w</i></sub><i>Vg</i> = 1000 × 5 × 10<sup>−4</sup> × 10 = 5 N',
          '(c) Apparent weight:<br><i>W</i><sub>app</sub> = <i>W</i> − <i>F</i><sub><i>B</i></sub> = 39 − 5',
          'Notice the block still sinks (<i>W</i> > <i>F</i><sub><i>B</i></sub>, consistent with <i>ρ</i><sub><i>b</i></sub> > <i>ρ</i><sub><i>w</i></sub>), but it feels lighter by exactly the weight of the water it displaces.',
        ],
        ans: '<i>W</i><sub>app</sub> = 34 N',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A wooden block floats in water with 75% of its volume submerged. (a) Find the block’s density. (b) The same block is now placed in a denser liquid of relative density 1.2. What percentage of it is submerged now?',
        steps: [
          '<b>The traps to avoid:</b> (i) thinking the block’s density changes when the fluid changes — it does not; only <i>ρ</i><sub><i>f</i></sub> changes. (ii) Confusing the submerged fraction with the fraction above the surface.',
          '<b>Speed approach.</b> The submerged fraction equals the density ratio:<br><i>V</i><sub>sub</sub>/<i>V</i> = <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub>',
          '(a) In water: 0.75 = <i>ρ</i><sub><i>b</i></sub>/1000 ⇒ <i>ρ</i><sub><i>b</i></sub> = 750 kg m<sup>−3</sup>.',
          '(b) In the liquid of density 1200 kg m<sup>−3</sup>:<br><i>V</i><sub>sub</sub>/<i>V</i> = 750/1200 = 0.625',
          '<b>Mental check:</b> denser fluid ⇒ less of the block needs to be submerged to generate the same buoyant force, so the submerged fraction drops from 75% to 62.5%. Anything that increased it would be wrong by inspection.',
        ],
        ans: '62.5%',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (combines two-fluid buoyancy + floatation condition)',
        fig: 'p11-09-fig-9.5',
        q: 'A cube of density 900 kg m<sup>−3</sup> floats at the interface of two immiscible liquids: oil of density 800 kg m<sup>−3</sup> on top and water of density 1000 kg m<sup>−3</sup> below. What fraction of the cube’s volume lies in the water?',
        steps: [
          'Let the fraction in water be <i>f</i>, so the fraction in oil is (1 − <i>f</i>). Each liquid contributes its own buoyancy on the portion of the cube inside it. For floating equilibrium:<br><i>ρ</i><sub><i>b</i></sub><i>Vg</i> (weight) = <i>ρ</i><sub><i>w</i></sub>(<i>fV</i>)<i>g</i> (buoyancy from water) + <i>ρ</i><sub><i>o</i></sub>((1 − <i>f</i>)<i>V</i>)<i>g</i> (buoyancy from oil)',
          'Cancel <i>Vg</i>:<br><i>ρ</i><sub><i>b</i></sub> = <i>ρ</i><sub><i>w</i></sub><i>f</i> + <i>ρ</i><sub><i>o</i></sub>(1 − <i>f</i>)<br>900 = 1000<i>f</i> + 800(1 − <i>f</i>) = 800 + 200<i>f</i><br>200<i>f</i> = 100',
          'Exactly half the cube sits in the water and half in the oil. (Sanity: the cube’s density 900 is the simple average of 800 and 1000, so a 50:50 split is exactly right.)',
        ],
        ans: '<i>f</i> = 0.5',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (buoyancy in an accelerating frame)',
        q: 'A cork of volume <i>V</i> = 100 cm<sup>3</sup> and density 250 kg m<sup>−3</sup> is held submerged at the bottom of a beaker of water by a light string tied to the base. The entire beaker is placed in a lift that accelerates upward at <i>a</i> = 5 m s<sup>−2</sup>. Find the tension in the string. (Take <i>ρ</i><sub><i>w</i></sub> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>Key idea:</b> in a frame accelerating upward, the effective gravity grows to <i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i>. Both the buoyant force and the effective weight scale with <i>g</i><sub>eff</sub>, so the whole problem can be solved as a static one with <i>g</i> → <i>g</i><sub>eff</sub>.',
          '<i>g</i><sub>eff</sub> = <i>g</i> + <i>a</i> = 10 + 5 = 15 m s<sup>−2</sup><br><i>V</i> = 100 cm<sup>3</sup> = 1 × 10<sup>−4</sup> m<sup>3</sup>',
          'Working in the lift frame, three vertical forces act on the cork: buoyancy up, effective weight down, and string tension <i>T</i> down (the string ties the cork to the base, so it pulls down). Equilibrium in the lift frame:<br><i>F</i><sub><i>B</i></sub> = <i>mg</i><sub>eff</sub> + <i>T</i><br><i>ρ</i><sub><i>w</i></sub><i>Vg</i><sub>eff</sub> = <i>ρ</i><sub><i>b</i></sub><i>Vg</i><sub>eff</sub> + <i>T</i><br><i>T</i> = <i>Vg</i><sub>eff</sub>(<i>ρ</i><sub><i>w</i></sub> − <i>ρ</i><sub><i>b</i></sub>) = 1 × 10<sup>−4</sup> × 15 × (1000 − 250)<br><i>T</i> = 1 × 10<sup>−4</sup> × 15 × 750',
          '<b>Insight:</b> the tension is simply <i>Vg</i><sub>eff</sub>(<i>ρ</i><sub><i>w</i></sub> − <i>ρ</i><sub><i>b</i></sub>) — it scales directly with <i>g</i><sub>eff</sub>. If the lift were in free fall (<i>a</i> = −<i>g</i>, so <i>g</i><sub>eff</sub> = 0), the tension would vanish entirely: with no effective gravity there is no pressure gradient, hence no buoyancy, and the string goes slack.',
        ],
        ans: '<i>T</i> = 1.125 N',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A stone weighs 5.0 N in air and 3.2 N when fully immersed in water. Find (a) the buoyant force, (b) the volume of the stone, and (c) its relative density. (Take <i>g</i> = 10 m s<sup>−2</sup>, <i>ρ</i><sub><i>w</i></sub> = 1000 kg m<sup>−3</sup>.)',
            a: '(a) 1.8 N; (b) 1.8 × 10<sup>−4</sup> m<sup>3</sup>; (c) RD ≈ 2.78',
          },
          {
            q: '[NEET] An ice cube floats in a glass of water filled to the brim. As the ice melts completely, the water level in the glass will: rise, fall, or stay the same? Justify in one line.',
            a: 'Stays the same (floating ice displaces its own weight; melt-water exactly fills that volume)',
          },
          {
            q: '[JEE Main] A block of wood of relative density 0.5 and volume 2000 cm<sup>3</sup> floats in water. What minimum mass must be placed on top of it to make it just fully submerged? (Take <i>ρ</i><sub><i>w</i></sub> = 1000 kg m<sup>−3</sup>.)',
            a: '1.0 kg',
          },
          {
            q: '[JEE Main] A body floats in water with one-third of its volume above the surface. When placed in another liquid, it floats with one-quarter of its volume above the surface. Find the relative density of (a) the body and (b) the second liquid.',
            a: '(a) 2/3 ≈ 0.667; (b) ≈ 0.889',
          },
          {
            q: '[JEE Advanced] A wooden cylinder of cross-sectional area <i>A</i> and length <i>L</i>, density <i>ρ</i><sub><i>b</i></sub>, floats vertically in water of density <i>ρ</i><sub><i>w</i></sub>. It is pushed down slightly and released. Show that it executes SHM and find its time period in terms of <i>L</i>, <i>ρ</i><sub><i>b</i></sub>, <i>ρ</i><sub><i>w</i></sub>, and <i>g</i>.',
            a: '<i>T</i> = 2π√(<i>ρ</i><sub><i>b</i></sub><i>L</i>/(<i>ρ</i><sub><i>w</i></sub><i>g</i>))',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A piece of ice floats in a glass of water. When the ice melts completely, the level of water in the glass:',
        opts: [
          {
            label: 'Rises',
            nudge: '<b>(a)</b> tempts students who think melting “adds” water — but that water was already accounted for by the displaced volume.',
          },
          {
            label: 'Falls',
            nudge: '<b>(b)</b> tempts those who recall ice is less dense and expect a drop on melting — true for the ice’s volume, but irrelevant to displaced volume.',
          },
          { label: 'Remains unchanged', nudge: null },
          { label: 'First rises, then falls', nudge: '<b>(d)</b> is a nonsense distractor with no physical basis.' },
        ],
        correct: 2,
        solution: 'A floating ice cube displaces a volume of water whose weight equals the ice’s weight. When it melts, it turns into exactly that same weight of water, which occupies precisely the volume it was displacing. Level unchanged.',
      },
      {
        t: 'mcq',
        q: 'A solid aluminium sphere is weighed first in water at 0°C and then in water at 4°C. The buoyant force is:',
        opts: [
          { label: 'Greater at 0°C', nudge: '<b>(a)</b> reverses the anomalous-expansion fact — the classic trap.' },
          { label: 'Greater at 4°C', nudge: null },
          {
            label: 'Equal in both',
            nudge: '<b>(c)</b> tempts students who forget that <i>ρ</i><sub><i>w</i></sub> itself varies with temperature.',
          },
          {
            label: 'Depends on the sphere’s radius',
            nudge: '<b>(d)</b> is wrong because the radius cancels in any comparison (same sphere, same <i>V</i>).',
          },
        ],
        correct: 1,
        solution: 'Buoyancy <i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>w</i></sub><i>Vg</i> depends on water’s density. Due to water’s anomalous expansion, density is <b>maximum at 4°C</b>, so buoyancy is greater at 4°C than at 0°C.',
      },
      {
        t: 'mcq',
        q: 'Two solid balls of the same volume — one of iron, one of aluminium — are fully submerged in water. The buoyant force on them:',
        opts: [
          {
            label: 'Is greater on iron',
            nudge: '<b>(a)</b> tempts students who think “heavier ⇒ more buoyancy” — confusing weight with upthrust.',
          },
          { label: 'Is greater on aluminium', nudge: '<b>(b)</b>/<b>(d)</b> misapply density of the body to the buoyancy formula.' },
          { label: 'Is equal', nudge: null },
          { label: 'Is zero on the denser ball', nudge: '<b>(b)</b>/<b>(d)</b> misapply density of the body to the buoyancy formula.' },
        ],
        correct: 2,
        solution: 'Buoyancy depends only on the displaced fluid — same volume submerged in the same water means <i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>w</i></sub><i>Vg</i> is identical. The balls’ own densities do not enter the buoyant force. The body’s density decides whether it sinks, not how much it is buoyed.',
      },
      {
        t: 'mcq',
        q: 'A hydrometer floats in a liquid. Compared with a less dense liquid, in a denser liquid the hydrometer:',
        opts: [
          { label: 'Floats higher (sinks less)', nudge: null },
          {
            label: 'Floats lower (sinks more)',
            nudge: '<b>(b)</b> reverses the logic — denser liquid means the device needs to go less deep, not more.',
          },
          {
            label: 'Floats at the same level',
            nudge: '<b>(c)</b> ignores that submerged depth must change to keep displaced weight constant.',
          },
          {
            label: 'Sinks completely',
            nudge: '<b>(d)</b> contradicts floating equilibrium; a calibrated hydrometer is designed to float across its range.',
          },
        ],
        correct: 0,
        solution: 'A floating hydrometer always displaces fluid weighing its own (fixed) weight. In a denser liquid, that same weight is provided by a smaller displaced volume, so the hydrometer sinks less and floats higher.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Putting the body’s density into the buoyancy formula.</b> Buoyancy is <i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i> — fluid density, submerged volume. The body’s own density only decides sink-vs-float, never the magnitude of the upthrust. Mixing these up is the single most common buoyancy error.',
          '<b>Inverting the fraction-submerged ratio.</b> The submerged fraction is <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub>, not <i>ρ</i><sub><i>f</i></sub>/<i>ρ</i><sub><i>b</i></sub>. A quick sanity check: a floating body has <i>ρ</i><sub><i>b</i></sub> < <i>ρ</i><sub><i>f</i></sub>, so the fraction must come out less than 1. If you get something above 1, you flipped it.',
          '<b>The ice-melting trap.</b> Floating ice melting in its own water leaves the level unchanged. But watch the variations: ice with a stone embedded, or ice floating in a different liquid (e.g. mercury or a salt solution), do change the level — don’t apply the “unchanged” rule blindly.',
          '<b>Forgetting <i>g</i><sub>eff</sub> in accelerating frames.</b> In a lift, rotating, or free-falling fluid, buoyancy scales with <i>g</i><sub>eff</sub>, not <i>g</i>. In free fall (<i>g</i><sub>eff</sub> = 0) buoyancy vanishes entirely — a submerged cork would no longer rise.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any floating-body problem, write the master equation “weight of body = weight of displaced fluid” first, then substitute. This one line — <i>ρ</i><sub><i>b</i></sub><i>V</i> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub> — handles fraction-submerged, two-liquid, and loaded-raft problems alike, and stops you from reaching for the wrong density. For RD by weighing, remember: <b>RD = weight in air ÷ loss of weight in water</b>, a ratio that needs no volume at all.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Buoyant force <i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i>',
            note: 'depends on <b>fluid density</b> and <b>submerged volume</b>, never on the body’s density. Acts upward through the <b>centre of buoyancy</b>.',
          },
          {
            f: 'Archimedes',
            note: 'upthrust = weight of displaced fluid. <b>Apparent weight</b> <i>W</i><sub>app</sub> = <i>W</i> − <i>F</i><sub><i>B</i></sub> = <i>Vg</i>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>).',
          },
          {
            f: 'Floatation rule',
            note: '<i>ρ</i><sub><i>b</i></sub> > <i>ρ</i><sub><i>f</i></sub> sinks; <i>ρ</i><sub><i>b</i></sub> = <i>ρ</i><sub><i>f</i></sub> fully submerged (neutral); <i>ρ</i><sub><i>b</i></sub> < <i>ρ</i><sub><i>f</i></sub> floats.',
          },
          {
            f: '<b>Fraction submerged</b> <i>V</i><sub>sub</sub>/<i>V</i> = <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub> (always < 1 for a floater).',
            note: '',
          },
          {
            f: 'Relative density = <i>ρ</i><sub>body</sub>/<i>ρ</i><sub>water</sub> = <i>W</i><sub>air</sub>/(<i>W</i><sub>air</sub> − <i>W</i><sub>app</sub>)',
            note: 'dimensionless.',
          },
          {
            f: 'Accelerating frame',
            note: 'use <i>g</i><sub>eff</sub> (lift up: <i>g</i> + <i>a</i>; down: <i>g</i> − <i>a</i>; free fall: 0). <b>Stability:</b> stable if metacentre <i>M</i> is <b>above</b> centre of gravity <i>G</i>.',
          },
        ],
        aids: [
          '“Buoyancy belongs to the fluid, not the body.”',
          '“Submerged fraction = density ratio (body over fluid).”',
          '“Floating ice melts to a draw — level unchanged.”',
          '“No g, no buoyancy” (free fall).',
        ],
      },
    ],
  },
];
