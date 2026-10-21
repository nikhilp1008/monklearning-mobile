/**
 * KEY POINTS for Physics Class 11, Chapter 8 (Mechanical Properties of
 * Solids).
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
 * that are words or labels stay upright (<i>k</i><sub>eq</sub>,
 * <i>x</i><sub>static</sub>); a subscript that is a symbol is italic
 * (<i>σ</i><sub><i>y</i></sub>, <i>I</i><sub><i>g</i></sub>).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Elasticity, Stress, and Strain ──
  // pp. 548, 555
  {
    topic: 0,
    kind: 'remember',
    q: 'Stress and strain: what are they, and what are their units?',
    a: 'Stress <i>σ</i> = <i>F</i>/<i>A</i>, in Pa, [M L<sup>−1</sup> T<sup>−2</sup>]; strain = (change in dimension)/(original dimension), with no unit',
    why: 'Hooke’s law, within the elastic limit: <i>σ</i> = <i>Eε</i>, where <i>E</i> depends on the material only.',
    say: 'Stress is the squeeze, strain is the change.',
  },
  // pp. 548, 555
  {
    topic: 0,
    kind: 'remember',
    q: 'The milestones on a stress–strain curve, in order?',
    a: 'Proportional → Elastic → Yield → Ultimate → Fracture',
    why: 'Push a material past its elastic limit and it no longer fully returns to its original shape (a permanent “set”).',
    say: 'Proportional → Elastic → Yield → Ultimate → Fracture → Please Eat Your Usual Food.',
  },
  // pp. 548–549, 555
  {
    topic: 0,
    kind: 'mixup',
    q: 'Young’s, bulk and rigidity modulus: what ratio is each?',
    a: '<i>Y</i> = longitudinal stress/strain = <i>FL</i>/(<i>A</i>Δ<i>L</i>); <i>B</i> = −<i>P</i>/(Δ<i>V</i>/<i>V</i>); <i>η</i> = <i>τ</i>/<i>φ</i>, with <i>φ</i> in radians',
    why: 'Solids possess all three; liquids and gases possess only the bulk modulus, since they cannot sustain shear.',
    say: null,
  },
  // p. 554
  {
    topic: 0,
    kind: 'mistake',
    q: 'The question quotes the wire’s diameter. What happens if you square it as the radius?',
    a: 'Your area is off by a factor of 4, and your <i>Y</i> along with it',
    why: 'Underline “radius” or “diameter” the moment you read the question.',
    say: null,
  },
  // pp. 548, 554
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Two wires of the same material: how do you compare their stretches?',
    a: 'Never compute <i>Y</i>: cancel it and use Δ<i>L</i> ∝ <i>FL</i>/<i>r</i><sup>2</sup> (or <i>L</i>/<i>r</i><sup>2</sup> for the same load)',
    why: 'It follows from <i>Y</i> = <i>MgL</i>/(<i>πr</i><sup>2</sup>Δ<i>L</i>); a 30-second ratio replaces a messy two-line calculation.',
    say: null,
  },

  // ── Topic 02 · Elastic Moduli ──
  // pp. 557, 562
  {
    topic: 1,
    kind: 'remember',
    q: 'Compressibility, and how a pressure rise Δ<i>P</i> changes the volume and the density?',
    a: '<i>k</i> = 1/<i>B</i> (unit Pa<sup>−1</sup>); Δ<i>V</i>/<i>V</i> = −Δ<i>P</i>/<i>B</i>, Δ<i>ρ</i>/<i>ρ</i> = +Δ<i>P</i>/<i>B</i>',
    why: 'Stiffness against compression: <i>B</i><sub>solids</sub> > <i>B</i><sub>liquids</sub> ≫ <i>B</i><sub>gases</sub>.',
    say: null,
  },
  // pp. 558, 562
  {
    topic: 1,
    kind: 'remember',
    q: 'How are <i>Y</i>, <i>B</i>, <i>η</i> and <i>ν</i> related for an isotropic material?',
    a: '<i>Y</i> = 2<i>η</i>(1 + <i>ν</i>) = 3<i>B</i>(1 − 2<i>ν</i>); 9/<i>Y</i> = 1/<i>B</i> + 3/<i>η</i>',
    why: 'Only two of the four are independent: given any two, the other two are already determined.',
    say: 'Two knowns rule them all.',
  },
  // pp. 558, 562
  {
    topic: 1,
    kind: 'mixup',
    q: 'The bulk modulus of a gas: isothermal or adiabatic?',
    a: 'It depends on the process: isothermal (slow) <i>B</i> = <i>P</i>; adiabatic (fast) <i>B</i> = <i>γP</i>',
    why: 'A gas has no single bulk modulus; using the wrong one is an instant error.',
    say: 'Slow gas is soft, fast gas is stiff.',
  },
  // pp. 557, 562
  {
    topic: 1,
    kind: 'mistake',
    q: 'Two rods of equal length and area, moduli <i>Y</i><sub>1</sub> and <i>Y</i><sub>2</sub>, are joined end to end. Is the equivalent modulus their average?',
    a: 'No: <i>Y</i><sub>eq</sub> = 2<i>Y</i><sub>1</sub><i>Y</i><sub>2</sub>/(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>), not ½(<i>Y</i><sub>1</sub> + <i>Y</i><sub>2</sub>)',
    why: 'Series = stretches add = reciprocals add.',
    say: null,
  },
  // pp. 557, 562
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Wires are connected in series or in parallel. The fast way in?',
    a: 'Redraw each wire as a spring, <i>k</i> = <i>YA</i>/<i>L</i>: series 1/<i>k</i><sub>eq</sub> = ∑ 1/<i>k</i><sub><i>i</i></sub>, parallel <i>k</i><sub>eq</sub> = ∑ <i>k</i><sub><i>i</i></sub>',
    why: '<i>k</i> depends on geometry, <i>Y</i> does not: cutting or rejoining a wire changes <i>k</i>, never <i>Y</i>.',
    say: 'Short and fat is stiff.',
  },

  // ── Topic 03 · Poisson's Ratio and Elastic Energy ──
  // pp. 564, 569
  {
    topic: 2,
    kind: 'remember',
    q: 'Poisson’s ratio: its definition and its range?',
    a: '<i>ν</i> = −(lateral strain)/(longitudinal strain); 0 to 0.5 in practice (theoretically −1 to 0.5)',
    why: 'Typical values: steel ≈ 0.28–0.30, rubber ≈ 0.5, cork ≈ 0.',
    say: 'Stretch it, it slims.',
  },
  // pp. 564, 569
  {
    topic: 2,
    kind: 'remember',
    q: 'The elastic energy stored in a stretched wire, and the energy density?',
    a: '<i>U</i> = ½<i>F</i>Δ<i>L</i> = ½ × stress × strain × volume; <i>u</i> = ½<i>σε</i> = ½<i>Yε</i><sup>2</sup> = <i>σ</i><sup>2</sup>/(2<i>Y</i>)',
    why: 'The ½ comes from the average force: the force builds up from zero.',
    say: 'Half the force, half the story.',
  },
  // pp. 564, 568
  {
    topic: 2,
    kind: 'mixup',
    q: 'The area under a stress–strain curve and under a force–extension curve: which is the total energy?',
    a: 'The force–extension area. The stress–strain area is energy per unit volume: multiply by the volume for the total',
    why: 'Within the elastic limit, the stress–strain area is <i>u</i> = ½<i>σε</i>.',
    say: null,
  },
  // pp. 564, 568
  {
    topic: 2,
    kind: 'mistake',
    q: 'A metal rod is stretched. Does its volume stay the same?',
    a: 'No: for small strain Δ<i>V</i>/<i>V</i> = (1 − 2<i>ν</i>)Δ<i>L</i>/<i>L</i>, so for metals (<i>ν</i> ≈ 0.3) the volume increases',
    why: 'Volume stays fixed only if <i>ν</i> = 0.5 (incompressible).',
    say: null,
  },
  // pp. 564, 568–569
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A load is applied to a wire suddenly. Its maximum stretch, without the algebra?',
    a: 'Twice the gentle-loading stretch: <i>x</i><sub>max</sub> = 2<i>x</i><sub>static</sub>',
    why: 'On settling at the static stretch, half the work done by the load (<i>F</i><i>x</i><sub>static</sub>) has become heat.',
    say: 'Drop it and it doubles.',
  },

  // ── Topic 04 · Ductility, Malleability and Yielding ──
  // pp. 571, 577
  {
    topic: 3,
    kind: 'remember',
    q: 'What does crossing the yield point do, and what is permanent set?',
    a: 'Yielding is the onset of permanent deformation, not breaking. Permanent set is the residual strain left after loading past yield and unloading',
    why: 'A material can yield and continue carrying load for a long plastic range before it finally fractures.',
    say: null,
  },
  // pp. 571, 577
  {
    topic: 3,
    kind: 'remember',
    q: 'Rubber’s loading and unloading curves enclose a loop. What is its area?',
    a: 'The energy lost as heat per cycle: elastic hysteresis',
    why: 'This is why rubber is chosen for vehicle tyres and shock absorbers.',
    say: 'Loop = lost heat.',
  },
  // pp. 576–577
  {
    topic: 3,
    kind: 'mixup',
    q: 'Ductile or malleable: which is drawn into wires, which hammered into sheets?',
    a: 'Ductile: drawn into wires, in tension (copper). Malleable: hammered into sheets, in compression (gold, aluminium)',
    why: 'Brittle is different again: it breaks just after the elastic limit (glass).',
    say: 'Ductile draws wires, malleable makes sheets.',
  },
  // pp. 571, 576–577
  {
    topic: 3,
    kind: 'mistake',
    q: 'On a stress–strain curve, what gives stiffness: the slope or an area?',
    a: 'The slope of the linear part: Young’s modulus. Areas are energies: area to yield is resilience, total area to fracture is toughness',
    why: 'Mixing these up is the single most common graph-question error.',
    say: 'Slope is stiff, area is energy, length is ductility.',
  },
  // p. 577
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Two stress–strain curves to compare. The fixed order to read them?',
    a: 'Slope → stiffness (<i>Y</i>); height of fracture point → strength; horizontal extent past yield → ductility; total enclosed area → toughness',
    why: 'It stops you bundling “stiff,” “strong” and “tough” into one material when the graph is separating them.',
    say: null,
  },

  // ── Topic 05 · Applications of Elastic Behaviour ──
  // pp. 579, 584
  {
    topic: 4,
    kind: 'remember',
    q: 'The depression of a cantilever loaded at its free end, and of a beam on two supports with a central load?',
    a: 'Cantilever: <i>δ</i> = <i>WL</i><sup>3</sup>/(3<i>YI</i><sub><i>g</i></sub>). Central load: <i>δ</i> = <i>WL</i><sup>3</sup>/(48<i>YI</i><sub><i>g</i></sub>)',
    why: '<i>I</i><sub><i>g</i></sub> = <i>bd</i><sup>3</sup>/12 for a rectangle (breadth <i>b</i>, depth <i>d</i>), <i>πr</i><sup>4</sup>/4 for a circle.',
    say: null,
  },
  // pp. 579, 584–585
  {
    topic: 4,
    kind: 'remember',
    q: 'The thermal stress in a rod rigidly clamped at both ends and heated by Δ<i>T</i>?',
    a: '<i>σ</i> = <i>Yα</i>Δ<i>T</i>, and the force <i>F</i> = <i>YAα</i>Δ<i>T</i>: both independent of the rod’s length',
    why: 'Length decides how much the rod would expand, not the stress when that expansion is fully prevented.',
    say: 'Heat builds stress, not by the metre.',
  },
  // p. 584
  {
    topic: 4,
    kind: 'mixup',
    q: 'The “moment of inertia” in beam formulas: is it the rotational ∑<i>mr</i><sup>2</sup>?',
    a: 'No: it is the area moment of the cross-section, <i>I</i><sub><i>g</i></sub> = ∫ <i>y</i><sup>2</sup> d<i>A</i>, in m<sup>4</sup>',
    why: 'Same name, different quantity.',
    say: null,
  },
  // pp. 584–585
  {
    topic: 4,
    kind: 'mistake',
    q: 'To stiffen a rectangular beam, is doubling its depth as good as doubling its breadth?',
    a: 'No: depression goes as 1/<i>d</i><sup>3</sup> but only as 1/<i>b</i>, so doubling the depth is four times as effective',
    why: 'Always orient the larger dimension vertically.',
    say: 'Depth cubed, breadth single.',
  },
  // pp. 579, 584–585
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A solid shaft’s radius is doubled. Its torsional rigidity, in one line?',
    a: '16 times: <i>c</i> = <i>πηr</i><sup>4</sup>/(2<i>L</i>) ∝ <i>r</i><sup>4</sup>',
    why: 'Write the power law (<i>δ</i> ∝ 1/<i>d</i><sup>3</sup>, <i>C</i> ∝ <i>r</i><sup>4</sup>), take the ratio: most questions here test only the exponent.',
    say: 'Twist loves the fourth power.',
  },

  // ── Additional A · Elongation by Integration: One Master Formula for Non-Uniform Loading ──
  // pp. 586–587
  {
    topic: 5,
    kind: 'remember',
    q: 'A rod shaped as a circular frustum, end radii <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub>, is pulled by a force <i>F</i>. Its elongation?',
    a: 'Δ<i>L</i> = <i>FL</i>/(<i>πR</i><sub>1</sub><i>R</i><sub>2</sub><i>Y</i>): it stretches like a uniform wire of radius √(<i>R</i><sub>1</sub><i>R</i><sub>2</sub>)',
    why: 'Not the uniform rod of average radius: thin regions dominate because strain goes as 1/<i>A</i>.',
    say: null,
  },
  // pp. 587–588
  {
    topic: 5,
    kind: 'remember',
    q: 'A wire of mass <i>m</i> hangs with a mass <i>M</i> at its lower end. Its total elongation?',
    a: 'Δ<i>L</i> = <i>MgL</i>/(<i>AY</i>) + <i>mgL</i>/(2<i>AY</i>)',
    why: 'The load and the wire’s own weight simply superpose, because Hooke’s law is linear.',
    say: null,
  },

  // ── Additional B · Constrained Thermal Stress: Gaps and Dissimilar Rods ──
  // p. 589
  {
    topic: 6,
    kind: 'remember',
    q: 'A rod of length <i>L</i> is heated by Δ<i>T</i> with a gap <i>s</i> before a rigid wall. The stress?',
    a: '<i>σ</i> = <i>Y</i>(<i>α</i>Δ<i>T</i> − <i>s</i>/<i>L</i>), provided <i>α</i>Δ<i>T</i> > <i>s</i>/<i>L</i>; otherwise it never touches the wall and <i>σ</i> = 0',
    why: 'The rod first fills the gap freely; only the excess expansion is suppressed.',
    say: null,
  },
  // pp. 589–590
  {
    topic: 6,
    kind: 'remember',
    q: 'Two different rods are welded end to end, clamped between rigid walls and heated. Do they carry the same force, and the same stress?',
    a: 'The same force <i>F</i>, from <i>F</i>(<i>L</i><sub>1</sub>/(<i>A</i><sub>1</sub><i>Y</i><sub>1</sub>) + <i>L</i><sub>2</sub>/(<i>A</i><sub>2</sub><i>Y</i><sub>2</sub>)) = (<i>α</i><sub>1</sub><i>L</i><sub>1</sub> + <i>α</i><sub>2</sub><i>L</i><sub>2</sub>)Δ<i>T</i>; generally different stresses, <i>σ</i><sub><i>i</i></sub> = <i>F</i>/<i>A</i><sub><i>i</i></sub>',
    why: 'The mechanical compressions must cancel the prevented thermal expansions.',
    say: null,
  },

  // ── Additional C · The Wire as a Spring, Set in Motion ──
  // pp. 591–592
  {
    topic: 7,
    kind: 'remember',
    q: 'A mass <i>M</i> on a wire (length <i>L</i>, area <i>A</i>) oscillates vertically. Its period?',
    a: '<i>T</i> = 2<i>π</i>√(<i>M</i>/<i>k</i>) = 2<i>π</i>√(<i>ML</i>/(<i>YA</i>))',
    why: 'Gravity only shifts the centre of oscillation, by <i>x</i><sub>st</sub> = <i>Mg</i>/<i>k</i>: <i>g</i> never appears in the period.',
    say: null,
  },
  // p. 591
  {
    topic: 7,
    kind: 'remember',
    q: 'A mass is released a height <i>h</i> above the unstretched wire. The equation for its maximum stretch <i>x</i>?',
    a: '<i>Mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup>',
    why: '<i>h</i> = 0 gives the sudden-load result, <i>x</i> = 2<i>Mg</i>/<i>k</i> = 2<i>x</i><sub>st</sub>; for <i>h</i> large compared with <i>x</i>, <i>x</i> ≈ √(2<i>Mgh</i>/<i>k</i>).',
    say: null,
  },

  // ── Additional D · Two Wires Sharing a Load Through a Rigid Bar ──
  // pp. 593–594
  {
    topic: 8,
    kind: 'remember',
    q: 'Two wires, <i>k</i><sub>1</sub> and <i>k</i><sub>2</sub>, hold a light rigid bar that stays horizontal under a load <i>W</i>. The tensions?',
    a: '<i>T</i><sub>1</sub> = <i>Wk</i><sub>1</sub>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>), <i>T</i><sub>2</sub> = <i>Wk</i><sub>2</sub>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>): the stiffer wire carries the larger share',
    why: 'Horizontality forces equal extensions, Δ<i>L</i><sub>1</sub> = Δ<i>L</i><sub>2</sub>.',
    say: null,
  },
  // p. 594
  {
    topic: 8,
    kind: 'remember',
    q: 'The load hangs from the midpoint of the light bar instead. Equal tensions or equal extensions?',
    a: 'Equal tensions, whatever the stiffness: the bar tilts, so the extensions differ',
    why: 'Never assume equal extensions unless horizontality is given or forced.',
    say: null,
  },

  // ── Additional E · The Interatomic Potential Made Quantitative ──
  // p. 595
  {
    topic: 9,
    kind: 'remember',
    q: 'Given a pair potential <i>U</i>(<i>r</i>), how do you find the equilibrium separation and the bond stiffness?',
    a: 'Equilibrium: <i>F</i> = −d<i>U</i>/d<i>r</i> = 0 at <i>r</i><sub>0</sub>. Stiffness: <i>κ</i> = d<sup>2</sup><i>U</i>/d<i>r</i><sup>2</sup> at <i>r</i><sub>0</sub>',
    why: 'The binding energy is |<i>U</i>(<i>r</i><sub>0</sub>)|; near <i>r</i><sub>0</sub>, <i>F</i> ≈ −<i>κx</i>, which is Hooke’s law.',
    say: null,
  },
  // p. 595
  {
    topic: 9,
    kind: 'remember',
    q: 'Two atoms of masses <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> are bonded with stiffness <i>κ</i>. Their vibration angular frequency?',
    a: '<i>ω</i> = √(<i>κ</i>/<i>μ</i>), with the reduced mass <i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
    why: 'For identical atoms, <i>μ</i> = <i>m</i>/2.',
    say: null,
  },

  // ── Additional F · Error Propagation in Searle's Experiment ──
  // p. 597
  {
    topic: 10,
    kind: 'remember',
    q: 'The maximum relative error in <i>Y</i> = <i>MgL</i>/(<i>πr</i><sup>2</sup>Δ<i>L</i>)?',
    a: '<i>δY</i>/<i>Y</i> = <i>δM</i>/<i>M</i> + <i>δL</i>/<i>L</i> + 2<i>δr</i>/<i>r</i> + <i>δ</i>(Δ<i>L</i>)/Δ<i>L</i>',
    why: 'The radius enters squared, so its relative error counts double (with <i>δr</i>/<i>r</i> = <i>δD</i>/<i>D</i>); errors in <i>g</i> and <i>π</i> are negligible.',
    say: null,
  },
  // p. 598
  {
    topic: 10,
    kind: 'shortcut',
    q: 'Δ<i>L</i> is the difference of two micrometer readings. Why keep it large?',
    a: 'Its error is about twice the least count, so a small Δ<i>L</i> gives a large relative error',
    why: 'For Δ<i>L</i> = 0.20 mm and a least count of 0.01 mm, that is 10%: use heavier loads (within the elastic limit).',
    say: null,
  },
];
