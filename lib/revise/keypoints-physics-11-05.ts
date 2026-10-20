/**
 * KEY POINTS for Physics Class 11, Chapter 5 (Work, Energy and Power).
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
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. A vector
 * carries its arrow (<i>A⃗</i>), as in the chapter; î, ĵ, k̂ are the axis
 * unit vectors.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Foundations: The Scalar (Dot) Product ──
  // pp. 284–285, 288
  {
    topic: 0,
    kind: 'remember',
    q: 'The geometric and the component form of <i>A⃗</i> · <i>B⃗</i>?',
    a: '<i>AB</i> cos <i>θ</i> = <i>A</i><sub><i>x</i></sub><i>B</i><sub><i>x</i></sub> + <i>A</i><sub><i>y</i></sub><i>B</i><sub><i>y</i></sub> + <i>A</i><sub><i>z</i></sub><i>B</i><sub><i>z</i></sub>',
    why: 'Unit vectors: <i>î</i> · <i>î</i> = 1, <i>î</i> · <i>ĵ</i> = 0 (like = 1, unlike = 0).',
    say: 'Like unit vectors = 1, unlike = 0.',
  },
  // pp. 285, 288
  {
    topic: 0,
    kind: 'remember',
    q: 'The projection (component) of <i>A⃗</i> along <i>B⃗</i>?',
    a: '<i>A</i> cos <i>θ</i> = <i>A⃗</i> · <i>B⃗</i>/<i>B</i>',
    why: 'And the angle between them: cos <i>θ</i> = <i>A⃗</i> · <i>B⃗</i>/(<i>AB</i>).',
    say: null,
  },
  // p. 288
  {
    topic: 0,
    kind: 'mixup',
    q: 'Dot product or cross product: which one does work use?',
    a: 'The dot product: a scalar, <i>AB</i> cos <i>θ</i>',
    why: 'The cross product gives a vector, <i>AB</i> sin <i>θ</i>, perpendicular to both.',
    say: 'Dot gives a scalar; cross gives a vector.',
  },
  // pp. 284, 288
  {
    topic: 0,
    kind: 'mistake',
    q: '<i>A⃗</i> · <i>B⃗</i> = 0. Does that mean one of the vectors is zero?',
    a: 'Almost never: it means the vectors are perpendicular',
    why: 'If neither vector is zero, <i>A⃗</i> · <i>B⃗</i> = 0 ⟺ <i>A⃗</i> ⊥ <i>B⃗</i>.',
    say: 'Zero dot = right angle.',
  },
  // p. 288
  {
    topic: 0,
    kind: 'shortcut',
    q: '“Find the angle” or “are these perpendicular?”: what do you compute first?',
    a: 'The dot product: if it is zero, the angle is 90° and you’re done',
    why: 'Its sign tells you to expect an acute (+), right (0) or obtuse (−) angle.',
    say: null,
  },

  // ── Topic 02 · Work and the Work–Energy Theorem ──
  // pp. 291, 298
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the work–energy theorem?',
    a: '<i>W</i><sub>net</sub> = Δ<i>K</i> = ½<i>mv</i><sub><i>f</i></sub><sup>2</sup> − ½<i>mv</i><sub><i>i</i></sub><sup>2</sup>',
    why: 'The net work done by all forces equals the change in kinetic energy.',
    say: null,
  },
  // pp. 291, 298
  {
    topic: 1,
    kind: 'remember',
    q: 'The work done by a variable force, and what it is on a graph?',
    a: '<i>W</i> = ∫ <i>F⃗</i> · d<i>r⃗</i>; in 1-D, ∫ <i>F</i> d<i>x</i>, the area under the <i>F</i>–<i>x</i> curve',
    why: '<i>W</i> = <i>FS</i> cos <i>θ</i> needs a constant force.',
    say: null,
  },
  // pp. 292, 298
  {
    topic: 1,
    kind: 'mixup',
    q: 'The sign of the work for <i>θ</i> < 90°, <i>θ</i> > 90° and <i>θ</i> = 90°?',
    a: 'Positive, negative, zero',
    why: '<i>θ</i> is the angle between the force and the displacement.',
    say: 'SAD angles: Same direction = positive, Against = negative, Dead perpendicular = zero.',
  },
  // p. 298
  {
    topic: 1,
    kind: 'mistake',
    q: 'Friction and tension also act on a falling body. Is <i>W</i><sub>gravity</sub> = Δ<i>K</i>?',
    a: 'No: the theorem uses the net work, the sum over all forces',
    why: 'Always tally every force, or use the single net force.',
    say: null,
  },
  // p. 298
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A body’s speed is unchanged. The net work done on it?',
    a: 'Zero: you already know <i>W</i><sub>net</sub> = 0 without computing anything',
    why: 'Ask the sign first: “force along motion → +, against → −, perpendicular → 0.”',
    say: null,
  },

  // ── Topic 03 · Mechanical Energy — Kinetic and Potential ──
  // pp. 300, 307
  {
    topic: 2,
    kind: 'remember',
    q: 'Kinetic energy in terms of momentum?',
    a: '<i>K</i> = <i>p</i><sup>2</sup>/(2<i>m</i>), so <i>p</i> = √(2<i>mK</i>)',
    why: '<i>K</i> ∝ <i>p</i><sup>2</sup>: doubling the speed doubles the momentum but quadruples the kinetic energy.',
    say: 'K goes as p-squared',
  },
  // pp. 301, 307
  {
    topic: 2,
    kind: 'remember',
    q: 'Where on a potential energy curve is the equilibrium stable, and where unstable?',
    a: 'Stable at a valley, d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup> > 0; unstable at a hilltop, d<sup>2</sup><i>U</i>/d<i>x</i><sup>2</sup> < 0',
    why: 'Equilibrium itself is where d<i>U</i>/d<i>x</i> = 0; neutral if <i>U</i> is flat over a region (d<i>U</i>/d<i>x</i> = 0 on both sides).',
    say: 'valley = stable, hilltop = unstable',
  },
  // pp. 300, 307
  {
    topic: 2,
    kind: 'mixup',
    q: '<i>U</i> = <i>mgh</i> or <i>U</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i>: when do you use which?',
    a: '<i>mgh</i> only near Earth’s surface, where <i>g</i> is constant; −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i> for large distances',
    why: 'Satellites, escape velocity, large heights: reaching for <i>mgh</i> there is a classic error.',
    say: null,
  },
  // pp. 301, 307
  {
    topic: 2,
    kind: 'mistake',
    q: 'A spring’s stretch goes from <i>x</i><sub>1</sub> to <i>x</i><sub>2</sub>. Is the work ½<i>k</i>(<i>x</i><sub>2</sub> − <i>x</i><sub>1</sub>)<sup>2</sup>?',
    a: 'No: <i>W</i> = ½<i>k</i>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>), the difference of the squares',
    why: 'Squaring the difference is wrong; this catches people constantly.',
    say: null,
  },
  // p. 307
  {
    topic: 2,
    kind: 'shortcut',
    q: '“<i>U</i>(<i>x</i>) given: find force, equilibrium, stability.” The three-line drill?',
    a: '<i>F</i> = −<i>U</i>′(<i>x</i>); set <i>F</i> = 0 for equilibrium; check the sign of <i>U</i>″(<i>x</i>)',
    why: 'Positive means a valley means stable.',
    say: null,
  },

  // ── Topic 04 · Conservative and Non-Conservative Forces ──
  // pp. 309, 315–316
  {
    topic: 3,
    kind: 'remember',
    q: 'The work done by a conservative force, in terms of potential energy?',
    a: '<i>W</i><sub>cons</sub> = −Δ<i>U</i> = <i>U</i><sub><i>i</i></sub> − <i>U</i><sub><i>f</i></sub>',
    why: 'Positive conservative work means potential energy decreases (a falling stone).',
    say: null,
  },
  // pp. 309, 315–316
  {
    topic: 3,
    kind: 'remember',
    q: 'The modified work–energy theorem, when non-conservative forces are present?',
    a: '<i>W</i><sub>nc</sub> = Δ<i>E</i> = (<i>K</i><sub><i>f</i></sub> + <i>U</i><sub><i>f</i></sub>) − (<i>K</i><sub><i>i</i></sub> + <i>U</i><sub><i>i</i></sub>)',
    why: 'If any non-conservative force does work, <i>K</i> + <i>U</i> is not constant.',
    say: null,
  },
  // pp. 311, 316
  {
    topic: 3,
    kind: 'mixup',
    q: 'Conservative or non-conservative: which has a potential energy and does zero work round a closed loop?',
    a: 'Conservative (gravity, spring, electrostatic); non-conservative forces (friction, viscous drag, air resistance) have neither',
    why: 'The 2-D test for a conservative force: ∂<i>F</i><sub><i>y</i></sub>/∂<i>x</i> = ∂<i>F</i><sub><i>x</i></sub>/∂<i>y</i>.',
    say: 'Conservative gives it back; non-conservative burns it as heat.',
  },
  // p. 315
  {
    topic: 3,
    kind: 'mistake',
    q: 'A block is pushed up a rough incline and slides back to its start. Is friction’s total work zero?',
    a: 'No: friction does negative work on every leg, so the round-trip total is negative',
    why: 'The “closed loop → zero work” rule is exclusive to conservative forces.',
    say: 'Closed-loop zero is a conservative-only privilege.',
  },
  // p. 316
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Before writing a single equation in an energy problem, what do you scan?',
    a: 'The forces: all conservative → <i>E</i><sub><i>i</i></sub> = <i>E</i><sub><i>f</i></sub>; friction or drag → <i>E</i><sub><i>i</i></sub> = <i>E</i><sub><i>f</i></sub> + (heat)',
    why: 'Heat = <i>f</i> × <i>d</i><sub>sliding</sub>, the whole distance slid, not the displacement.',
    say: null,
  },

  // ── Topic 05 · Various Forms of Energy & the Law of Conservation of Energy ──
  // pp. 317–318, 322
  {
    topic: 4,
    kind: 'remember',
    q: 'The mechanical equivalent of heat?',
    a: '1 cal = 4.186 J (≈ 4.2 J)',
    why: 'James Joule proved the conversion is exact: a fixed amount of work always produces a fixed amount of heat.',
    say: null,
  },
  // pp. 318, 322
  {
    topic: 4,
    kind: 'remember',
    q: 'The energy released by a mass change Δ<i>m</i>?',
    a: 'Δ<i>E</i> = (Δ<i>m</i>)<i>c</i><sup>2</sup>, with <i>c</i> = 3 × 10<sup>8</sup> m/s',
    why: 'Significant only in nuclear processes; in chemical or mechanical events the mass change is far too small to detect.',
    say: null,
  },
  // pp. 317, 321–322
  {
    topic: 4,
    kind: 'mixup',
    q: 'Which forms of energy are mechanical, and which are not?',
    a: 'Mechanical: kinetic and potential. Not: heat, chemical, electrical, nuclear, light (radiant)',
    why: 'Energy is neither created nor destroyed, only transformed from one form to another.',
    say: 'Energy changes costume, never quantity.',
  },
  // pp. 321–322
  {
    topic: 4,
    kind: 'mistake',
    q: 'The energy equivalent of 1 kg of mass: 3 × 10<sup>8</sup> J?',
    a: 'No: <i>E</i> = <i>mc</i><sup>2</sup> = (1)(3 × 10<sup>8</sup>)<sup>2</sup> = 9 × 10<sup>16</sup> J',
    why: 'Using <i>c</i> instead of <i>c</i><sup>2</sup> under-estimates the answer by a factor of 3 × 10<sup>8</sup>.',
    say: '<i>E</i> = <i>mc</i><sup>2</sup> — don’t forget to square <i>c</i>.',
  },
  // p. 322
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A mass defect is given in atomic mass units. The fastest route to the energy?',
    a: 'Multiply by 931.5 MeV/u: the answer in MeV in one line, skipping SI units',
    why: 'For joules, remember the anchor 1 kg ↔ 9 × 10<sup>16</sup> J, then scale by the given mass.',
    say: null,
  },

  // ── Topic 06 · Power ──
  // pp. 324, 331
  {
    topic: 5,
    kind: 'remember',
    q: 'The instantaneous power delivered by a force?',
    a: '<i>P</i> = d<i>W</i>/d<i>t</i> = <i>F⃗</i> · <i>v⃗</i> = <i>Fv</i> cos <i>θ</i>',
    why: '<i>θ</i> is the angle between the force and the velocity; average power is <i>W</i><sub>total</sub>/<i>t</i><sub>total</sub>.',
    say: null,
  },
  // pp. 326, 331
  {
    topic: 5,
    kind: 'remember',
    q: 'A particle starts from rest under constant power <i>P</i>. How do its speed and distance grow?',
    a: '<i>v</i> = √(2<i>Pt</i>/<i>m</i>) ∝ √<i>t</i>, and <i>x</i> ∝ <i>t</i><sup>3/2</sup>',
    why: 'All the power goes into kinetic energy, so <i>K</i> = <i>Pt</i>.',
    say: null,
  },
  // pp. 324, 331
  {
    topic: 5,
    kind: 'mixup',
    q: 'The kilowatt and the kilowatt-hour: which one is energy?',
    a: 'The kilowatt-hour: 1 kWh = 3.6 × 10<sup>6</sup> J. The kilowatt is a unit of power',
    why: 'Your electricity bill charges for energy (kWh), not power.',
    say: 'Power = how FAST you work, not how MUCH.',
  },
  // pp. 326–327, 330
  {
    topic: 5,
    kind: 'mistake',
    q: 'A constant force acts on a body starting from rest. Is its power constant?',
    a: 'No: <i>P</i> = <i>Fv</i>, so the power grows linearly with time as the body speeds up',
    why: 'The final instantaneous power is twice the average: <i>P</i><sub>avg</sub> = ½<i>P</i><sub>instantaneous (final)</sub>.',
    say: 'Constant force ≠ constant power (<i>P</i> grows with <i>v</i>).',
  },
  // p. 331
  {
    topic: 5,
    kind: 'shortcut',
    q: 'A vehicle moves at constant speed against resistance. Its power, the fast way?',
    a: 'Skip Newton’s laws: <i>P</i> = <i>F</i><sub>opposing</sub> × <i>v</i>',
    why: 'At constant velocity, all the engine’s power goes into fighting resistance (and, on a slope, into raising potential energy).',
    say: null,
  },

  // ── Topic 07 · Collisions ──
  // pp. 333, 340
  {
    topic: 6,
    kind: 'remember',
    q: 'The final velocities in a 1-D elastic collision?',
    a: '<i>v</i><sub>1</sub> = [(<i>m</i><sub>1</sub> − <i>m</i><sub>2</sub>)<i>u</i><sub>1</sub> + 2<i>m</i><sub>2</sub><i>u</i><sub>2</sub>]/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>v</i><sub>2</sub> = [(<i>m</i><sub>2</sub> − <i>m</i><sub>1</sub>)<i>u</i><sub>2</sub> + 2<i>m</i><sub>1</sub><i>u</i><sub>1</sub>]/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
    why: 'Elastic shortcut, no masses needed: <i>u</i><sub>1</sub> − <i>u</i><sub>2</sub> = <i>v</i><sub>2</sub> − <i>v</i><sub>1</sub>.',
    say: 'Momentum always; energy only if elastic.',
  },
  // pp. 335, 340
  {
    topic: 6,
    kind: 'remember',
    q: 'Two bodies collide and stick. The kinetic energy lost?',
    a: 'Δ<i>K</i> = ½[<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)](<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>)<sup>2</sup>',
    why: 'Perfectly inelastic (<i>e</i> = 0): bodies stick, maximum KE loss.',
    say: null,
  },
  // pp. 335, 339–340
  {
    topic: 6,
    kind: 'mixup',
    q: 'Elastic, target at rest: what happens for equal masses, heavy hitting light, light hitting heavy?',
    a: 'Equal: velocities are exchanged. Heavy on light: <i>v</i><sub>2</sub> ≈ 2<i>u</i><sub>1</sub>. Light on heavy: <i>v</i><sub>1</sub> ≈ −<i>u</i><sub>1</sub>',
    why: 'Equal masses: <i>v</i><sub>1</sub> = 0, <i>v</i><sub>2</sub> = <i>u</i><sub>1</sub>; heavy on light: <i>v</i><sub>1</sub> ≈ <i>u</i><sub>1</sub>; light on heavy: <i>v</i><sub>2</sub> ≈ 0.',
    say: 'Equal-mass elastic = swap.',
  },
  // p. 340
  {
    topic: 6,
    kind: 'mistake',
    q: 'An oblique collision with restitution <i>e</i>: do you apply <i>e</i> to the total speeds?',
    a: 'No: only to the velocity components along the line of impact',
    why: 'The perpendicular components don’t change at all.',
    say: null,
  },
  // p. 340
  {
    topic: 6,
    kind: 'shortcut',
    q: 'An oblique elastic collision between equal masses, one at rest. The angle between them afterwards?',
    a: '90°: the bodies fly apart at right angles',
    why: 'It often hands you an angle for free.',
    say: null,
  },

  // ── Topic 08 · Application: Motion in a Vertical Circle ──
  // pp. 342, 347
  {
    topic: 7,
    kind: 'remember',
    q: 'The string tension at angle <i>θ</i> from the lowest point of a vertical circle?',
    a: '<i>T</i> = <i>mv</i><sup>2</sup>/<i>R</i> + <i>mg</i> cos <i>θ</i>',
    why: 'The speed there: <i>v</i><sup>2</sup> = <i>v</i><sub>bottom</sub><sup>2</sup> − 2<i>gh</i>, with <i>h</i> = <i>R</i>(1 − cos <i>θ</i>).',
    say: null,
  },
  // pp. 342, 347
  {
    topic: 7,
    kind: 'remember',
    q: 'A string just completes the loop: the speeds at the top, the side and the bottom?',
    a: '<i>v</i><sub>top</sub> = √(<i>gR</i>), <i>v</i><sub>side</sub> = √(3<i>gR</i>), <i>v</i><sub>bottom</sub> = √(5<i>gR</i>)',
    why: 'A rigid rod can push, so its top speed can be 0, giving <i>v</i><sub>bottom</sub> = 2√(<i>gR</i>).',
    say: 'Top needs √(<i>gR</i>), bottom needs √(5<i>gR</i>).',
  },
  // pp. 342, 346–347
  {
    topic: 7,
    kind: 'mixup',
    q: 'Launch speed <i>u</i> at the bottom, on a string: when does the bob complete the circle, oscillate, or leave it?',
    a: '<i>u</i> ≥ √(5<i>gR</i>) completes; <i>u</i> ≤ √(2<i>gR</i>) oscillates; in between, the string goes slack in the upper half',
    why: 'At <i>u</i> = √(2<i>gR</i>) the bob just reaches the horizontal level, where its speed becomes zero.',
    say: null,
  },
  // pp. 346–347
  {
    topic: 7,
    kind: 'mistake',
    q: 'Do you need the speed to find <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub>?',
    a: 'No: <i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i> at any speed that completes the circle',
    why: 'Energy over the height 2<i>R</i> gives 4<i>mg</i>; the weight’s change of side gives the other 2<i>mg</i>.',
    say: '<i>T</i><sub>bottom</sub> − <i>T</i><sub>top</sub> = 6<i>mg</i>, whenever it loops.',
  },
  // p. 346
  {
    topic: 7,
    kind: 'shortcut',
    q: 'The order that tackles every vertical-circle problem?',
    a: 'Radial equation at the point; energy conservation, <i>v</i><sup>2</sup> = <i>u</i><sup>2</sup> − 2<i>gh</i>; the critical condition, <i>T</i> = 0 at the top',
    why: 'Keep √(<i>gR</i>), √(3<i>gR</i>), √(5<i>gR</i>) and 6<i>mg</i> on instant recall: they alone answer most MCQs.',
    say: null,
  },

  // ── Additional A · Spring–Block Systems: Compression, Collision, Release ──
  // p. 349
  {
    topic: 8,
    kind: 'remember',
    q: 'Two blocks collide through a light spring. The maximum compression?',
    a: '<i>x</i><sub>max</sub> = √(<i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>k</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))) |<i>u</i><sub>1</sub> − <i>u</i><sub>2</sub>|',
    why: 'At maximum compression the blocks share one velocity, <i>V</i> = (<i>m</i><sub>1</sub><i>u</i><sub>1</sub> + <i>m</i><sub>2</sub><i>u</i><sub>2</sub>)/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>).',
    say: null,
  },
  // p. 349
  {
    topic: 8,
    kind: 'remember',
    q: 'A block falls a height <i>h</i> onto a vertical spring. The energy balance at maximum compression <i>x</i>?',
    a: '<i>mg</i>(<i>h</i> + <i>x</i>) = ½<i>kx</i><sup>2</sup>: gravity keeps working during the compression',
    why: 'Setting <i>mgh</i> = ½<i>kx</i><sup>2</sup>, forgetting the <i>mgx</i> term, is the most common error in this family.',
    say: null,
  },

  // ── Additional B · Continuous Mass: Chains, Sand and Conveyor Belts ──
  // p. 352
  {
    topic: 9,
    kind: 'remember',
    q: 'Sand falls at rate <i>μ</i> onto a belt moving at <i>v</i>. The force on the sand, and the motor’s power?',
    a: '<i>F</i> = <i>μv</i>, <i>P</i><sub>motor</sub> = <i>μv</i><sup>2</sup>',
    why: 'Half, ½<i>μv</i><sup>2</sup>, becomes kinetic energy; the other half is heat from friction between belt and sand.',
    say: null,
  },
  // p. 352
  {
    topic: 9,
    kind: 'remember',
    q: 'A chain of length <i>L</i> slides off a smooth table, with a length <i>l</i> hanging at the start. Its speed as the last link leaves?',
    a: '<i>v</i> = √(<i>g</i>(<i>L</i><sup>2</sup> − <i>l</i><sup>2</sup>)/<i>L</i>)',
    why: 'For <i>l</i> → 0 this gives <i>v</i> = √(<i>gL</i>).',
    say: null,
  },

  // ── Additional C · Restitution Past the First Bounce: Series, Moving Walls, General e ──
  // pp. 354–355
  {
    topic: 10,
    kind: 'remember',
    q: 'A ball dropped from <i>h</i> with restitution <i>e</i>: the height after <i>n</i> bounces, and the total distance until rest?',
    a: '<i>h</i><sub><i>n</i></sub> = <i>e</i><sup>2<i>n</i></sup><i>h</i>; <i>D</i> = <i>h</i> + 2<i>he</i><sup>2</sup>/(1 − <i>e</i><sup>2</sup>)',
    why: 'Total time: <i>T</i> = <i>t</i><sub>0</sub>(1 + <i>e</i>)/(1 − <i>e</i>), with <i>t</i><sub>0</sub> = √(2<i>h</i>/<i>g</i>).',
    say: null,
  },
  // p. 355
  {
    topic: 10,
    kind: 'remember',
    q: 'A ball at speed <i>u</i> hits a massive wall moving toward it at <i>V</i>. Its speed after the bounce?',
    a: '<i>v</i><sub>ball</sub> = <i>e</i>(<i>u</i> + <i>V</i>) + <i>V</i>, directed back the way it came',
    why: 'For <i>e</i> = 1 this is <i>u</i> + 2<i>V</i>; if the wall recedes, replace <i>V</i> → −<i>V</i>.',
    say: null,
  },

  // ── Additional D · Oblique Collisions: The Line-of-Impact Procedure ──
  // p. 357
  {
    topic: 11,
    kind: 'shortcut',
    q: 'The procedure for any oblique collision?',
    a: 'Resolve along the line of impact (n) and across it (t): <i>v</i><sub>t</sub> = <i>u</i><sub>t</sub>; run the 1-D collision on the n-components alone',
    why: 'The line of impact is the common normal at contact: the line joining the centres, or the normal to a wall.',
    say: null,
  },
  // pp. 357–358
  {
    topic: 11,
    kind: 'remember',
    q: 'A ball hits a smooth fixed wall at speed <i>u</i>, at angle <i>θ</i> to the normal. Its rebound speed and angle?',
    a: '<i>v</i> = <i>u</i>√(sin<sup>2</sup> <i>θ</i> + <i>e</i><sup>2</sup> cos<sup>2</sup> <i>θ</i>), tan <i>φ</i> = tan <i>θ</i>/<i>e</i>',
    why: '<i>φ</i> is measured from the normal: for <i>e</i> < 1, a dead ball rebounds wider.',
    say: null,
  },

  // ── Additional E · Connected Bodies: Strings, Pulleys and Cancelled Work ──
  // p. 360
  {
    topic: 12,
    kind: 'remember',
    q: 'The total work done by the tensions of an ideal string on the whole system it connects?',
    a: 'Zero',
    why: 'So with gravity the only other force doing work, ∑(loss in PE) = ∑(gain in <i>K</i>) = ∑ ½<i>m</i><sub><i>i</i></sub><i>v</i><sub><i>i</i></sub><sup>2</sup>.',
    say: null,
  },
  // p. 360
  {
    topic: 12,
    kind: 'remember',
    q: 'When does the string-work cancellation fail?',
    a: 'If the pulley has mass, the axle rubs, or the string stretches or slips',
    why: 'Then account for the pulley’s kinetic energy, friction losses, or elastic storage explicitly.',
    say: null,
  },
];
