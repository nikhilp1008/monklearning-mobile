/**
 * KEY POINTS for Physics Class 11, Chapter 9 (Mechanical Properties of
 * Fluids).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's memory aid, word for word.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Subscripts
 * that are words or labels stay upright (<i>V</i><sub>sub</sub>,
 * <i>g</i><sub>eff</sub>); a subscript the book sets italic stays italic
 * (<i>ρ</i><sub><i>f</i></sub>, <i>v</i><sub><i>t</i></sub>). π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Fluid Pressure and Pascal's Law ──
  // pp. 600–601, 610
  {
    topic: 0,
    kind: 'remember',
    q: 'The pressure at a depth <i>h</i> in a liquid at rest: the formula, and what it does not depend on?',
    a: '<i>P</i> = <i>P</i><sub>0</sub> + <i>ρgh</i>: it depends only on the depth, not on the container’s shape or the volume of liquid',
    why: 'This is the hydrostatic paradox. It assumes an incompressible fluid, so <i>ρ</i> stays constant with depth.',
    say: 'Deeper = denser-times-g-times-depth.',
  },
  // pp. 601–602, 610
  {
    topic: 0,
    kind: 'remember',
    q: 'A hydraulic lift: the output force, and how far the output piston rises?',
    a: '<i>F</i><sub>2</sub> = <i>F</i><sub>1</sub><i>A</i><sub>2</sub>/<i>A</i><sub>1</sub>; the same volume moves at both pistons, <i>A</i><sub>1</sub><i>h</i><sub>1</sub> = <i>A</i><sub>2</sub><i>h</i><sub>2</sub>, so <i>h</i><sub>2</sub> = <i>h</i><sub>1</sub><i>A</i><sub>1</sub>/<i>A</i><sub>2</sub>',
    why: 'Pascal’s law: a pressure change in an enclosed fluid is transmitted undiminished everywhere. Force is multiplied, energy conserved.',
    say: null,
  },
  // pp. 600, 609–610
  {
    topic: 0,
    kind: 'mixup',
    q: 'Pressure and the force due to pressure: which is a vector?',
    a: 'Only the force. Pressure is a scalar; the force it produces always acts perpendicular to the surface',
    why: 'At a given depth pressure is the same in all directions, and the same at all points on a horizontal level.',
    say: 'Pressure is a scalar, Force is a vector.',
  },
  // p. 610
  {
    topic: 0,
    kind: 'mistake',
    q: 'In a U-tube of uniform bore, the liquid in one arm drops by <i>x</i>. What is the level difference between the arms?',
    a: '2<i>x</i>, not <i>x</i>: the liquid in the other arm rises by <i>x</i>',
    why: 'Forgetting this factor of 2 is the most common reason U-tube answers come out wrong by exactly a factor of 2.',
    say: null,
  },
  // p. 610
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A depth problem in water. The quick sanity check before any arithmetic?',
    a: '<i>ρg</i> ≈ 10<sup>4</sup> Pa m<sup>−1</sup>: roughly 1 atm of gauge pressure per 10 m of depth',
    why: 'It lets you estimate any answer mentally, and instantly flags a wrong order of magnitude.',
    say: 'In water: 10 m ≈ 1 atm.',
  },

  // ── Topic 02 · Buoyancy and Floatation ──
  // pp. 612, 619–620
  {
    topic: 1,
    kind: 'remember',
    q: 'The buoyant force on a body: what does it depend on?',
    a: '<i>F</i><sub><i>B</i></sub> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub><i>g</i>: the fluid’s density and the submerged volume, never the body’s density',
    why: 'Archimedes: upthrust = weight of the displaced fluid, acting upward through the centre of buoyancy.',
    say: 'Buoyancy belongs to the fluid, not the body.',
  },
  // pp. 612, 620
  {
    topic: 1,
    kind: 'remember',
    q: 'What fraction of a floating body is submerged?',
    a: '<i>V</i><sub>sub</sub>/<i>V</i> = <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub>, always less than 1 for a floater',
    why: 'A block of relative density 0.6 floats with 60% of itself underwater. Above 1 means you flipped the ratio.',
    say: 'Submerged fraction = density ratio (body over fluid).',
  },
  // pp. 612, 620
  {
    topic: 1,
    kind: 'mixup',
    q: 'Centre of buoyancy, centre of gravity, metacentre: which must lie above which for a floating body to be stable?',
    a: 'The metacentre <i>M</i> must lie above the centre of gravity <i>G</i> (restoring torque); <i>M</i> below <i>G</i> is unstable',
    why: 'Buoyancy acts at the centre of buoyancy <i>B</i>, the centroid of the displaced fluid; weight acts at <i>G</i>.',
    say: null,
  },
  // p. 619
  {
    topic: 1,
    kind: 'mistake',
    q: 'Floating ice melting in its own water leaves the level unchanged. Does that hold for ice with a stone in it, or ice floating in salt solution?',
    a: 'No: those variations do change the level. Don’t apply the “unchanged” rule blindly',
    why: 'Only floating ice melting in its own water gives “level unchanged”.',
    say: 'Floating ice melts to a draw — level unchanged.',
  },
  // p. 619
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Fraction submerged, two liquids, a loaded raft. The one line to write first?',
    a: 'Weight of body = weight of displaced fluid: <i>ρ</i><sub><i>b</i></sub><i>V</i> = <i>ρ</i><sub><i>f</i></sub><i>V</i><sub>sub</sub>',
    why: 'For relative density by weighing: RD = weight in air ÷ loss of weight in water, with no volume needed.',
    say: null,
  },

  // ── Topic 03 · Fluids in Accelerated and Rotating Frames ──
  // pp. 621–622, 628–629
  {
    topic: 2,
    kind: 'remember',
    q: 'An open tank accelerates horizontally at a steady <i>a</i>. The tilt of the free surface, and the height difference over its length <i>L</i>?',
    a: 'tan <i>θ</i> = <i>a</i>/<i>g</i>; Δ<i>h</i> = <i>L</i> tan <i>θ</i> = <i>aL</i>/<i>g</i>, with the liquid higher at the rear',
    why: 'The free surface sets itself perpendicular to <i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>); 45° means <i>a</i> = <i>g</i>.',
    say: 'Liquid lags — rises at the rear.',
  },
  // pp. 622, 629
  {
    topic: 2,
    kind: 'remember',
    q: 'Liquid in a cylinder spins steadily at <i>ω</i> about the vertical axis. The surface shape, and the rim–centre height difference?',
    a: 'A paraboloid, <i>y</i> = <i>ω</i><sup>2</sup><i>r</i><sup>2</sup>/(2<i>g</i>); rim–centre difference Δ<i>h</i> = <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>)',
    why: 'The radial pressure gradient d<i>P</i>/d<i>r</i> = <i>ρω</i><sup>2</sup><i>r</i> supplies the centripetal force.',
    say: 'Spin makes a parabola: <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>).',
  },
  // pp. 622, 628–629
  {
    topic: 2,
    kind: 'mixup',
    q: 'The effective gravity under horizontal acceleration and under vertical acceleration?',
    a: 'Horizontal: <i>g</i><sub>eff</sub> = √(<i>a</i><sup>2</sup> + <i>g</i><sup>2</sup>), tilted. Vertical: <i>g</i><sub>eff</sub> = <i>g</i> ± <i>a</i> (+ up, − down), so <i>P</i> = <i>P</i><sub>0</sub> + <i>ρ</i>(<i>g</i> ± <i>a</i>)<i>h</i>',
    why: 'In free fall <i>g</i><sub>eff</sub> = 0: no hydrostatic pressure, and the pressure everywhere equals the surface pressure <i>P</i><sub>0</sub>.',
    say: 'Free fall, no pressure.',
  },
  // pp. 622, 629
  {
    topic: 2,
    kind: 'mistake',
    q: 'The rim–centre difference of a spinning liquid is <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>). Does the rim rise that much above the original level?',
    a: 'No: relative to the original level the rim rises only <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(4<i>g</i>), and the centre falls the same',
    why: 'Volume is conserved (uniform cylinder): don’t confuse the total difference with the rise at one end.',
    say: null,
  },
  // p. 629
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Any accelerating-fluid problem. The fast way in?',
    a: 'Treat it as ordinary statics in a rotated/strengthened gravity: measure depth <i>d</i> perpendicular to the tilted surface, then <i>P</i> = <i>P</i><sub>0</sub> + <i>ρg</i><sub>eff</sub><i>d</i>',
    why: 'With the two benchmarks, tan <i>θ</i> = <i>a</i>/<i>g</i> (tilt) and Δ<i>h</i> = <i>ω</i><sup>2</sup><i>R</i><sup>2</sup>/(2<i>g</i>) (spin), most questions collapse to one substitution.',
    say: null,
  },

  // ── Topic 04 · Fluid Dynamics and Bernoulli's Theorem ──
  // pp. 630–631, 637
  {
    topic: 3,
    kind: 'remember',
    q: 'The equation of continuity, and what does it need?',
    a: '<i>A</i><sub>1</sub><i>v</i><sub>1</sub> = <i>A</i><sub>2</sub><i>v</i><sub>2</sub>: <i>Av</i> = <i>Q</i>, the volume flow rate, is constant, so a narrow pipe means faster flow',
    why: 'It is mass conservation and needs only incompressible, steady flow: more broadly valid than Bernoulli.',
    say: null,
  },
  // pp. 630–631, 637–638
  {
    topic: 3,
    kind: 'remember',
    q: 'Bernoulli’s theorem, and when does it hold?',
    a: '<i>P</i> + ½<i>ρv</i><sup>2</sup> + <i>ρgh</i> = constant along a streamline: energy per unit volume',
    why: 'It needs an ideal fluid: incompressible, non-viscous, steady and irrotational.',
    say: 'Ideal fluid only: no viscosity, no turbulence, one streamline.',
  },
  // p. 637
  {
    topic: 3,
    kind: 'mixup',
    q: 'Through a pipe of changing width: is the volume flow rate conserved, or the speed?',
    a: 'The volume flow rate <i>Q</i> = <i>Av</i> (m<sup>3</sup> s<sup>−1</sup>); the speed <i>v</i> changes as <i>A</i> changes',
    why: 'When a question gives “rate of flow,” check whether it wants <i>Q</i> or <i>v</i>.',
    say: null,
  },
  // p. 637
  {
    topic: 3,
    kind: 'mistake',
    q: 'Along a level pipe the fluid speeds up. Does its pressure rise?',
    a: 'No: faster flow means lower static pressure, because kinetic energy is bought at the cost of pressure energy',
    why: 'Aerofoil lift, the atomizer, the Venturi throat and roof blow-off all follow from it.',
    say: 'Fast and low, slow and high.',
  },
  // p. 637
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A Venturi, nozzle or pipe problem. In which order do you use the two equations?',
    a: 'Continuity first (it hands you the unknown speed), then Bernoulli (it gives the pressure)',
    why: 'Efflux speed = free-fall speed through the depth of the hole below the free surface: √(2<i>g</i>Δ<i>h</i>).',
    say: 'Continuity first, Bernoulli second.',
  },

  // ── Topic 05 · Viscosity and Terminal Velocity ──
  // pp. 639–640, 646
  {
    topic: 4,
    kind: 'remember',
    q: 'Stokes’ law, and the terminal velocity of a sphere falling through a fluid?',
    a: '<i>F</i> = 6π<i>ηrv</i>; <i>v</i><sub><i>t</i></sub> = 2<i>r</i><sup>2</sup>(<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>)<i>g</i>/(9<i>η</i>), from weight = buoyancy + drag',
    why: 'Stokes’ law holds only for a small smooth sphere moving slowly through the fluid.',
    say: 'Weight = buoyancy + drag at terminal velocity.',
  },
  // pp. 640, 646
  {
    topic: 4,
    kind: 'remember',
    q: 'The coefficient of viscosity: its SI unit, CGS unit and dimensions?',
    a: 'SI: Pa·s (= decapoise = poiseuille); CGS: poise, with 1 Pa·s = 10 poise; [M L<sup>−1</sup> T<sup>−1</sup>]',
    why: 'From Newton’s law of viscosity, <i>F</i> = −<i>ηA</i> d<i>v</i>/d<i>x</i>, the minus sign meaning it opposes relative motion.',
    say: null,
  },
  // pp. 640, 645–646
  {
    topic: 4,
    kind: 'mixup',
    q: 'Heat a liquid and heat a gas. What happens to each one’s viscosity?',
    a: 'Liquid: <i>η</i> falls (steeply). Gas: <i>η</i> rises, roughly as √<i>T</i>',
    why: 'Heat loosens a liquid’s cohesive grip, but speeds up a gas’s molecular mixing.',
    say: 'Liquids loosen, gases gum up.',
  },
  // p. 646
  {
    topic: 4,
    kind: 'mistake',
    q: 'In the terminal-velocity formula, is the driving term the body’s density <i>ρ</i><sub><i>b</i></sub>?',
    a: 'No: it is the density difference (<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>), not <i>ρ</i><sub><i>b</i></sub> alone. Forgetting buoyancy overestimates <i>v</i><sub><i>t</i></sub>',
    why: 'For an air bubble in water <i>ρ</i><sub><i>b</i></sub> < <i>ρ</i><sub><i>f</i></sub>, so the term is negative: the bubble rises.',
    say: null,
  },
  // p. 646
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A falling-sphere ratio question. How do you answer it without plugging in numbers?',
    a: 'From the scaling triple: <i>v</i><sub><i>t</i></sub> ∝ <i>r</i><sup>2</sup>, ∝ (<i>ρ</i><sub><i>b</i></sub> − <i>ρ</i><sub><i>f</i></sub>), ∝ 1/<i>η</i>',
    why: 'When drops split or coalesce, first find the new radius from volume conservation, then square the radius ratio.',
    say: 'Terminal velocity goes as r-squared.',
  },

  // ── Topic 06 · Poiseuille's Law and Viscous Flow Resistance ──
  // pp. 647–648, 654
  {
    topic: 5,
    kind: 'remember',
    q: 'Poiseuille’s law: the volume flow rate through a capillary?',
    a: '<i>Q</i> = πΔ<i>P r</i><sup>4</sup>/(8<i>ηl</i>), with Δ<i>P</i> the pressure difference across a tube of radius <i>r</i> and length <i>l</i>',
    why: 'Valid only for steady, laminar, incompressible, Newtonian flow in a long uniform tube (<i>R</i><sub><i>e</i></sub> ≲ 2000).',
    say: 'Flow goes as radius to the fourth.',
  },
  // pp. 648, 654
  {
    topic: 5,
    kind: 'remember',
    q: 'The viscous resistance of a tube, and how tubes combine in series and in parallel?',
    a: '<i>R</i> = Δ<i>P</i>/<i>Q</i> = 8<i>ηl</i>/(π<i>r</i><sup>4</sup>); series <i>R</i><sub>eq</sub> = ∑ <i>R</i><sub><i>i</i></sub> (same <i>Q</i>), parallel 1/<i>R</i><sub>eq</sub> = ∑ 1/<i>R</i><sub><i>i</i></sub> (same Δ<i>P</i>)',
    why: 'The narrow tube (huge <i>R</i> ∝ 1/<i>r</i><sup>4</sup>) dominates a series combination.',
    say: 'Add in series, reciprocal in parallel.',
  },
  // pp. 648, 654
  {
    topic: 5,
    kind: 'mixup',
    q: 'In laminar flow through a tube, the mean speed or the maximum speed: where is each, and which goes in <i>Q</i>?',
    a: 'The maximum is on the axis, <i>v</i><sub>max</sub> = Δ<i>P r</i><sup>2</sup>/(4<i>ηl</i>); the mean is half of it, and is the one in <i>Q</i> = <i>v</i><sub>avg</sub>π<i>r</i><sup>2</sup>',
    why: 'The profile is parabolic: <i>v</i>(<i>s</i>) = Δ<i>P</i>(<i>r</i><sup>2</sup> − <i>s</i><sup>2</sup>)/(4<i>ηl</i>) at distance <i>s</i> from the axis.',
    say: 'Mean is half the max.',
  },
  // pp. 653–654
  {
    topic: 5,
    kind: 'mistake',
    q: 'At the same pressure difference, a tube’s radius is halved. Does the flow drop to a quarter?',
    a: 'No: to 1/16. <i>Q</i> ∝ <i>r</i><sup>4</sup>, not <i>r</i><sup>2</sup> (area) or <i>r</i><sup>3</sup> (volume)',
    why: 'This single slip accounts for most errors in the topic: raise the radius ratio to the fourth power.',
    say: null,
  },
  // p. 654
  {
    topic: 5,
    kind: 'shortcut',
    q: 'A “change the tube” question, or a network of tubes. The fast way?',
    a: 'Work with ratios from <i>Q</i> ∝ Δ<i>P r</i><sup>4</sup>/(<i>ηl</i>); for a network, Δ<i>P</i> ↔ <i>V</i>, <i>Q</i> ↔ <i>I</i>, and solve it as a circuit',
    why: 'You rarely need to plug in the messy constants.',
    say: null,
  },

  // ── Topic 07 · Surface Tension and Capillarity ──
  // pp. 656, 663
  {
    topic: 6,
    kind: 'remember',
    q: 'The excess pressure inside a liquid drop, an air bubble inside a liquid, and a soap bubble in air?',
    a: 'Drop: 2<i>S</i>/<i>r</i>. Air bubble in a liquid: 2<i>S</i>/<i>r</i>. Soap bubble: 4<i>S</i>/<i>r</i>',
    why: 'The drop and the air bubble have one surface; the soap bubble has two.',
    say: 'Bubble = 4, drop = 2.',
  },
  // pp. 655–656, 663
  {
    topic: 6,
    kind: 'remember',
    q: 'The capillary rise in a narrow tube of radius <i>r</i> (Jurin’s law)?',
    a: '<i>h</i> = 2<i>S</i> cos <i>θ</i>/(<i>rρg</i>), so <i>h</i> ∝ 1/<i>r</i>: the narrower the tube, the higher the rise',
    why: 'For <i>θ</i> > 90° (mercury in glass), cos <i>θ</i> < 0 and <i>h</i> is negative: a depression.',
    say: 'Narrow tube, high climb.',
  },
  // pp. 656, 663
  {
    topic: 6,
    kind: 'mixup',
    q: 'An acute and an obtuse angle of contact: which wets, and what meniscus does each give?',
    a: 'Acute (< 90°): wetting, concave meniscus, capillary rise (water–glass). Obtuse (> 90°): non-wetting, convex meniscus, capillary depression (mercury–glass)',
    why: 'Wetting means adhesion > cohesion; non-wetting means cohesion > adhesion.',
    say: 'Acute wets, obtuse won’t.',
  },
  // pp. 656, 663
  {
    topic: 6,
    kind: 'mistake',
    q: 'The work done to blow a soap bubble of radius <i>r</i>: is it <i>S</i> × 4π<i>r</i><sup>2</sup>?',
    a: 'No: <i>S</i> × 2(4π<i>r</i><sup>2</sup>). A soap bubble has an inner and an outer surface',
    why: 'A single-surface drop needs only <i>W</i> = <i>S</i>Δ<i>A</i>. Always ask “how many surfaces?”',
    say: null,
  },
  // p. 663
  {
    topic: 6,
    kind: 'shortcut',
    q: 'Before any surface-tension calculation, the two-second checklist?',
    a: 'How many surfaces (one for a drop or air bubble, two for a soap film or bubble)? Is the angle of contact zero (so tube radius = meniscus radius)?',
    why: 'For ratio questions, lean on Δ<i>P</i> ∝ 1/<i>r</i> and <i>h</i> ∝ 1/<i>r</i>: often you need not compute <i>S</i> at all.',
    say: null,
  },

  // ── Additional A · Hydrostatic Force on Plane Surfaces and Centre of Pressure ──
  // p. 664
  {
    topic: 7,
    kind: 'remember',
    q: 'The hydrostatic force (gauge) on a submerged plane surface of area <i>A</i>, vertical or inclined?',
    a: '<i>F</i> = <i>ρgh̄A</i>: the pressure at the centroid times the area, where <i>h̄</i> is the vertical depth of the centroid',
    why: 'Pressure varies linearly with depth, so the total force is the integral of pressure over the area.',
    say: null,
  },
  // pp. 664–665
  {
    topic: 7,
    kind: 'remember',
    q: 'Where does that force act: the centre of pressure?',
    a: '<i>y</i><sub>CP</sub> = <i>ȳ</i> + <i>I</i><sub><i>xx</i>,<i>C</i></sub>/(<i>ȳA</i>), measured along the plane from the free surface: always below the centroid',
    why: 'For a vertical rectangle with its top edge at the free surface, <i>y</i><sub>CP</sub> = 2<i>H</i>/3.',
    say: null,
  },

  // ── Additional B · Hydrostatic Force on Curved Surfaces ──
  // p. 667
  {
    topic: 8,
    kind: 'remember',
    q: 'The hydrostatic force (gauge) on a curved surface: its horizontal and vertical components?',
    a: '<i>F</i><sub><i>H</i></sub> = the force on the surface’s vertical projection; <i>F</i><sub><i>V</i></sub> = the weight of the fluid vertically above the surface, up to the free surface',
    why: 'Resultant <i>F</i><sub><i>R</i></sub> = √(<i>F</i><sub><i>H</i></sub><sup>2</sup> + <i>F</i><sub><i>V</i></sub><sup>2</sup>), at <i>α</i> = tan<sup>−1</sup>(<i>F</i><sub><i>V</i></sub>/<i>F</i><sub><i>H</i></sub>) from the horizontal.',
    say: null,
  },
  // pp. 667–669
  {
    topic: 8,
    kind: 'shortcut',
    q: 'A gate shaped as a circular arc. Where does the resultant hydrostatic force act?',
    a: 'Through the centre of the circle (the cylinder axis), because every pressure force on the arc acts along a radius',
    why: 'So a hinge on the resultant’s line of action (e.g. at the centre) feels no moment; a hinge off that line does.',
    say: null,
  },

  // ── Additional C · Stability of Floating Bodies: Metacentric Height ──
  // p. 670
  {
    topic: 9,
    kind: 'remember',
    q: 'The metacentric height of a floating body, and the condition for stability?',
    a: '<i>GM</i> = <i>BM</i> − <i>BG</i> (for <i>G</i> above <i>B</i>), with <i>BM</i> = <i>I</i>/<i>V</i><sub>sub</sub>; stable if <i>GM</i> is positive (<i>M</i> above <i>G</i>)',
    why: '<i>I</i> is the second moment of area of the waterplane about the axis of tilt; <i>V</i><sub>sub</sub> is the submerged volume.',
    say: null,
  },
  // p. 670
  {
    topic: 9,
    kind: 'remember',
    q: 'For a small heel angle <i>θ</i>, the righting moment and the period of rolling?',
    a: '<i>M</i><sub><i>R</i></sub> = <i>W</i> · <i>GM</i> · <i>θ</i>; <i>T</i> = 2π√(<i>k</i><sup>2</sup>/(<i>g</i> · <i>GM</i>))',
    why: '<i>W</i> = <i>mg</i> is the body’s weight; <i>k</i> is its radius of gyration about the longitudinal axis.',
    say: null,
  },

  // ── Additional D · Viscous Flow in Non-Circular Ducts: Parallel Plates and Annuli ──
  // pp. 648, 672
  {
    topic: 10,
    kind: 'remember',
    q: 'Steady laminar flow between two parallel plates a gap <i>H</i> apart (width <i>W</i>): the flow rate and the mean speed?',
    a: '<i>Q</i> = (Δ<i>P</i>/<i>L</i>)<i>H</i><sup>3</sup><i>W</i>/(12<i>η</i>); the profile is parabolic with <i>u</i><sub>avg</sub> = 2<i>u</i><sub>max</sub>/3',
    why: 'Compare a circular pipe (Topic 06), where the mean speed is half the maximum.',
    say: null,
  },
  // pp. 673–674
  {
    topic: 10,
    kind: 'remember',
    q: 'Laminar flow through an annulus, inner radius <i>R</i><sub><i>i</i></sub>, outer <i>R</i><sub><i>o</i></sub>: the flow rate?',
    a: '<i>Q</i> = (πΔ<i>P</i>/(8<i>ηL</i>))[<i>R</i><sub><i>o</i></sub><sup>4</sup> − <i>R</i><sub><i>i</i></sub><sup>4</sup> − (<i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup>)<sup>2</sup>/ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>)]',
    why: 'As <i>R</i><sub><i>i</i></sub> → 0, ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>) → ∞ and it reduces to Poiseuille’s law, <i>Q</i> = πΔ<i>P R</i><sub><i>o</i></sub><sup>4</sup>/(8<i>ηL</i>).',
    say: null,
  },
];
