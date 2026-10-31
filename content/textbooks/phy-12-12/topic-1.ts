import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topic 01: pp. 762–771 of the Class 12 Physics Master Reference,
 * word for word. The book's “Subtopic 01 — Alpha-particle Scattering and
 * Rutherford’s Nuclear Model”, split at its Sections 1 to 8. Figures 12.1–12.4
 * are captioned together after the cheat sheet (p. 770) and drawn on the
 * “Chapter 12 · Figures” page (p. 771); the book never refers to them, so (on
 * the expert review) each is set beside the text it illustrates: 12.1 in
 * Concept intuition, 12.4 after the scattering proportionalities, 12.3 after
 * derivation Step 2, 12.2 after the impact-parameter reasoning. They are
 * redrawn in lib/diagrams/physics-12-12.ts. The topic has no unnumbered drawings.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 762–771 ─────────────────────────
  {
    n: '01',
    title: 'Alpha-particle Scattering and Rutherford’s Nuclear Model',
    kalam: 'Almost the entire atom is empty space, which is why most alpha particles felt nothing.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A near-guaranteed scorer. CBSE Boards almost always carry a 2–3 mark question on the experiment, observations, or the two drawbacks of Rutherford’s model. NEET typically asks one conceptual MCQ (often on distance of closest approach or “what does undeviated passage prove”). JEE Main loves the impact-parameter and <i>d</i> ∝ <i>Z</i>/<i>K</i> numericals; JEE Advanced layers in nuclear recoil or combines closest approach with momentum/energy conservation.',
      },
      {
        t: 'p',
        html: 'Picture this. You walk into a completely dark room and you are told that somewhere inside hangs a single, tiny, very heavy iron ball — but you cannot see it and you are not allowed to touch the walls. How would you locate it and figure out how big it is?',
      },
      {
        t: 'p',
        html: 'Here is a clever trick: stand at the doorway and roll dozens of carrom strikers across the floor in a wide, flat beam. Most of them will sail straight across and clatter into the far wall — they met nothing. But every so often, one striker will hit the hidden iron ball and ricochet off at a sharp angle. And on a very rare occasion, a striker aimed almost dead-centre will smack the ball head-on and come bouncing right back at you. By counting how many strikers bounce back and at what angles, you can deduce two things: that the iron ball is tiny (because hits are rare, so it occupies very little of the room) and that it is heavy and hard (because it can throw a striker straight back instead of being knocked aside itself).',
      },
      {
        t: 'p',
        html: 'This is almost exactly what Geiger and Marsden did in 1911, on Rutherford’s suggestion. Their “strikers” were fast-moving <b>alpha particles</b> (helium nuclei, charge +2<i>e</i>) fired at a wafer-thin sheet of gold foil. Their “dark room” was the gold atom, whose internal structure nobody could see.',
      },
      { t: 'fig', id: 'p12-12-fig-12.1' },
      {
        t: 'p',
        html: 'At the time, the accepted picture was <b>Thomson’s “plum-pudding” model</b>: the atom was imagined as a soft sphere of positive charge with electrons sprinkled through it like raisins in a kaju barfi. If that were true, the positive charge would be smeared thinly over the whole atom, the electric field anywhere inside would be weak, and an alpha particle ploughing through should barely be nudged — a few degrees at most. Like rolling a cricket ball through a cloud of mist.',
      },
      {
        t: 'p',
        html: 'What Geiger and Marsden actually saw shocked everyone. <b>Most</b> alpha particles did pass nearly straight through — consistent with mist. But a small fraction were deflected through large angles, and about <b>1 in 8000 came bouncing back by more than 90°</b>, some almost straight back. Rutherford famously compared it to firing an artillery shell at a sheet of tissue paper and having it rebound into your face.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A thin smear of charge can never turn a fast, heavy alpha particle around. To reverse it, you need a concentrated, intense electric field — which means all the positive charge must be packed into a minuscule volume, not spread out. That tiny, dense lump is the <b>nucleus</b>. The rare backward bounces are the carrom strikers that happened to be aimed straight at the iron ball.',
      },
      {
        t: 'p',
        html: 'From the frequency of large-angle scattering, Rutherford concluded the nucleus is fantastically small — roughly 10<sup>−14</sup> m across, about one ten-thousandth the size of the whole atom (∼ 10<sup>−10</sup> m). If the atom were the size of a cricket stadium, the nucleus would be a grain of rice at the centre pitch. Almost the entire atom is empty space, which is why most alpha particles felt nothing.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions</b> (where this analysis applies — and fails):<br>• The foil must be <b>thin enough</b> that each alpha scatters off one nucleus only (single scattering). Thick foils give multiple scattering and the simple picture collapses.<br>• The force is assumed to be <b>pure Coulomb repulsion</b> between +2<i>e</i> and +<i>Ze</i>. This holds only while the alpha stays outside the nucleus. At very high energies the alpha gets close enough for short-range nuclear forces to act, and Rutherford’s predictions start to deviate — which is itself how nuclear sizes were later measured.<br>• The nucleus is taken as <b>stationary</b> (it is far heavier than the alpha). For light target nuclei this assumption breaks, and recoil must be included (see worked example 4).<br>• Atomic electrons are ignored — they are far too light (about 7300 times lighter than an alpha) to deflect it, just as a swarm of mosquitoes cannot deflect a thrown stone.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Distance of closest approach <i>d</i> (head-on collision, stationary nucleus)',
        html: 'the minimum centre-to-centre separation reached when all the alpha’s kinetic energy has converted to electrostatic potential energy.',
      },
      {
        t: 'formula',
        kicker: 'Distance of closest approach',
        main: '<i>d</i> = (1/(4πε<sub>0</sub>)) (2<i>e</i>)(<i>Ze</i>)/<i>K</i> = 2<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>)',
        legend: [
          '<i>Z</i> = atomic number of target nucleus (dimensionless)',
          '<i>e</i> = elementary charge, 1.6 × 10<sup>−19</sup> C',
          '2<i>e</i> = alpha charge',
          '<i>K</i> = kinetic energy of the alpha particle (J), ½<i>mv</i><sup>2</sup>',
          '1/(4πε<sub>0</sub>) = 9.0 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>',
        ],
        note: '<i>d</i> in metres, <b>SI unit: m</b>',
      },
      {
        t: 'p',
        html: 'Equivalently, <i>d</i> = <i>Ze</i><sup>2</sup>/(πε<sub>0</sub><i>mv</i><sup>2</sup>). Note the key proportionalities:',
      },
      {
        t: 'formula',
        kicker: 'Closest approach: key proportionalities',
        main: '<i>d</i> ∝ <i>Z</i><br><i>d</i> ∝ 1/<i>K</i><br><i>d</i> ∝ 1/<i>v</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Impact parameter <i>b</i>',
        html: 'the perpendicular distance between the alpha’s initial velocity line and the centre of the nucleus.',
      },
      {
        t: 'formula',
        kicker: 'Impact parameter',
        main: '<i>b</i> = (<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>)) cot(<i>θ</i>/2)',
        legend: ['<i>θ</i> = scattering angle (dimensionless, radians/degrees)'],
        note: '<i>b</i> in metres, <b>SI unit: m</b><br>Limits: <i>b</i> → 0 ⇒ <i>θ</i> → 180° (head-on, rebounds); <i>b</i> → ∞ ⇒ <i>θ</i> → 0° (undeviated).',
      },
      {
        t: 'formula',
        kicker: 'Rutherford scattering law',
        main: 'number <i>N</i>(<i>θ</i>) per unit detector area at angle <i>θ</i>:<br><i>N</i>(<i>θ</i>) = <i>N</i><sub>i</sub><i>n</i><sub>v</sub><i>tZ</i><sup>2</sup><i>e</i><sup>4</sup>/((8πε<sub>0</sub>)<sup>2</sup><i>r</i><sup>2</sup><i>K</i><sup>2</sup> sin<sup>4</sup>(<i>θ</i>/2))',
        legend: [
          '<i>N</i><sub>i</sub> = incident alpha count',
          '<i>n</i><sub>v</sub> = foil atoms per unit volume (m<sup>−3</sup>)',
          '<i>t</i> = foil thickness (m)',
          '<i>r</i> = detector distance (m)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rutherford law: exam-critical proportionalities',
        main: '<i>N</i> ∝ 1/sin<sup>4</sup>(<i>θ</i>/2)<br><i>N</i> ∝ <i>Z</i><sup>2</sup><br><i>N</i> ∝ <i>t</i><br><i>N</i> ∝ 1/<i>K</i><sup>2</sup> (∝ 1/<i>v</i><sup>4</sup>)',
        legend: [],
        note: null,
      },
      { t: 'fig', id: 'p12-12-fig-12.4' },
      {
        t: 'formula',
        kicker: 'Dimensional formula (core quantity — permittivity of free space)',
        main: '[ε<sub>0</sub>] = [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>]',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Quick dimensional check on <i>d</i>: the group <i>e</i><sup>2</sup>/(4πε<sub>0</sub>) has dimensions of (energy × length) = [M L<sup>3</sup> T<sup>−2</sup>]. Dividing by <i>K</i> = [M L<sup>2</sup> T<sup>−2</sup>] gives [L] — correct, <i>d</i> is a length.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      { t: 'p', html: '<b>(A) Distance of closest approach (head-on collision)</b>' },
      {
        t: 'p',
        html: '<b>Assumptions:</b> A single alpha particle (charge +2<i>e</i>, mass <i>m</i>, speed <i>v</i>) is fired directly at a nucleus (charge +<i>Ze</i>) assumed stationary and far heavier than the alpha. Only the conservative Coulomb force acts; total mechanical energy is conserved.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Set up the two states.</b> Take the alpha very far away (separation → ∞) as the initial state, where potential energy is zero and all energy is kinetic. At the turning point (closest approach, separation <i>d</i>), the alpha has momentarily stopped — kinetic energy is zero and all energy is now electrostatic potential energy.',
      },
      {
        t: 'p',
        html: '<b>Why this step:</b> “Closest approach” is precisely where the velocity reverses, so <i>v</i> = 0 there; this lets us equate one pure-KE state to one pure-PE state.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Write conservation of energy.</b><br><i>K</i> (initial KE) + 0 = 0 + (1/(4πε<sub>0</sub>)) (2<i>e</i>)(<i>Ze</i>)/<i>d</i> (PE at closest approach)',
      },
      { t: 'fig', id: 'p12-12-fig-12.3' },
      {
        t: 'p',
        html: '<b>Step 3 — Solve for <i>d</i>.</b><br><i>K</i> = (1/(4πε<sub>0</sub>)) 2<i>Ze</i><sup>2</sup>/<i>d</i> ⇒ <i>d</i> = 2<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>)',
      },
      {
        t: 'p',
        html: '<b>Why this matters:</b> Substituting a 7.7 MeV alpha (the energy NCERT uses) onto gold (<i>Z</i> = 79) gives <i>d</i> ≈ 3 × 10<sup>−14</sup> m. Since the alpha clearly turns around without penetrating, this sets an <b>upper bound on the nuclear radius</b>. (The true gold radius is about 6 fm — smaller — because the alpha reverses well before “touching”.)',
      },
      { t: 'p', html: '<b>(B) Impact parameter relation (statement of result)</b>' },
      {
        t: 'p',
        html: 'For a non-head-on trajectory, the alpha follows a hyperbola in the nucleus’s Coulomb field. Applying conservation of energy and angular momentum about the nucleus through the encounter yields:<br><i>b</i> = (<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>)) cot(<i>θ</i>/2)',
      },
      {
        t: 'p',
        html: '<b>Reasoning behind the form:</b> a smaller <i>b</i> means the alpha drives deeper into the repulsive field, feels a larger sideways push, and emerges at a larger <i>θ</i> — hence the inverse (cotangent) relationship between <i>b</i> and <i>θ</i>.',
      },
      { t: 'fig', id: 'p12-12-fig-12.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An alpha particle of kinetic energy 6.4 MeV is fired head-on at a silver nucleus (<i>Z</i> = 47). Find the distance of closest approach.',
        steps: [
          '<b>Given:</b> <i>K</i> = 6.4 MeV = 6.4 × 10<sup>6</sup> × 1.6 × 10<sup>−19</sup> J = 1.024 × 10<sup>−12</sup> J, <i>Z</i> = 47.',
          '<i>d</i> = 2<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>) = (9.0 × 10<sup>9</sup>)(2)(47)(1.6 × 10<sup>−19</sup>)<sup>2</sup>/(1.024 × 10<sup>−12</sup>)',
          'Numerator = 9.0 × 10<sup>9</sup> × 94 × 2.56 × 10<sup>−38</sup> = 2.166 × 10<sup>−26</sup>.<br><i>d</i> = (2.166 × 10<sup>−26</sup>)/(1.024 × 10<sup>−12</sup>)',
        ],
        ans: '<i>d</i> ≈ 2.1 × 10<sup>−14</sup> m (about 21 fm).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'An alpha particle and a proton are accelerated through the <b>same</b> potential difference <i>V</i>, then fired head-on at identical gold nuclei. What is the ratio of their distances of closest approach?',
        steps: [
          '<b>Trap:</b> Most students rush to write <i>d</i> ∝ <i>z</i> (projectile charge) and answer 2 ∶ 1. Stop and think about how each particle got its energy.',
          'A particle of charge <i>q</i> accelerated through <i>V</i> gains <i>K</i> = <i>qV</i>. So:<br>• Proton: <i>q</i> = <i>e</i>, <i>K</i> = <i>eV</i>.<br>• Alpha: <i>q</i> = 2<i>e</i>, <i>K</i> = 2<i>eV</i>.',
          'Now use <i>d</i> = (<i>q</i> · <i>Ze</i>)/(4πε<sub>0</sub><i>K</i>) with <i>K</i> = <i>qV</i>:<br><i>d</i> = <i>qZe</i>/(4πε<sub>0</sub>(<i>qV</i>)) = <i>Ze</i>/(4πε<sub>0</sub><i>V</i>)',
          'The charge <i>q</i> <b>cancels completely.</b> Both particles stop at the same distance.',
          '<b>Mental check:</b> extra charge means extra push and extra energy — they exactly offset when the energy comes from the same <i>V</i>.',
        ],
        ans: '<i>d</i><sub>proton</sub> ∶ <i>d</i><sub>α</sub> = 1 ∶ 1.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Alpha particles of kinetic energy 5 MeV are scattered by a gold foil (<i>Z</i> = 79). (a) Find the impact parameter for a scattering angle of 90°. (b) For what scattering angle is the impact parameter twice this value?',
        steps: [
          '<b>Given:</b> <i>K</i> = 5 MeV = 8 × 10<sup>−13</sup> J, <i>Z</i> = 79.',
          '<b>(a)</b> At <i>θ</i> = 90°, cot(<i>θ</i>/2) = cot 45° = 1:<br><i>b</i> = <i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>) = (9.0 × 10<sup>9</sup>)(79)(1.6 × 10<sup>−19</sup>)<sup>2</sup>/(8 × 10<sup>−13</sup>)<br>Numerator = 9.0 × 10<sup>9</sup> × 79 × 2.56 × 10<sup>−38</sup> = 1.820 × 10<sup>−26</sup>.<br><i>b</i> = (1.820 × 10<sup>−26</sup>)/(8 × 10<sup>−13</sup>)',
          '<b>(b)</b> To double <i>b</i> we need cot(<i>θ</i>/2) = 2, so <i>θ</i>/2 = cot<sup>−1</sup>(2) ≈ 26.6°.',
          '<b>Sensible:</b> a larger impact parameter means a gentler, smaller-angle deflection.',
        ],
        ans: '(a) <i>b</i> ≈ 2.3 × 10<sup>−14</sup> m; (b) <i>θ</i> ≈ 53°.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An alpha particle (<i>m</i><sub>α</sub> = 4u) of kinetic energy 3 MeV makes a head-on collision with a stationary lithium-7 nucleus (<i>M</i> = 7u, <i>Z</i> = 3). Accounting for the recoil of the lithium nucleus, find the distance of closest approach. Compare with the naive “fixed nucleus” estimate.',
        steps: [
          '<b>Key insight:</b> When the target can recoil, the alpha does not fully stop at closest approach. At minimum separation, both particles move with a <b>common velocity</b> <i>V</i><sub>cm</sub> (their separation is momentarily not changing). Use momentum conservation, then energy conservation.',
          '<b>Step 1 — Common velocity (momentum conservation):</b><br><i>m</i><sub>α</sub><i>v</i> = (<i>m</i><sub>α</sub> + <i>M</i>)<i>V</i><sub>cm</sub> ⇒ <i>V</i><sub>cm</sub> = <i>m</i><sub>α</sub><i>v</i>/(<i>m</i><sub>α</sub> + <i>M</i>)',
          '<b>Step 2 — Energy conservation:</b><br>½<i>m</i><sub>α</sub><i>v</i><sup>2</sup> = ½(<i>m</i><sub>α</sub> + <i>M</i>)<i>V</i><sub>cm</sub><sup>2</sup> + (1/(4πε<sub>0</sub>)) 2<i>Ze</i><sup>2</sup>/<i>d</i><br>The available (“effective”) energy that goes into potential energy is:<br>½<i>m</i><sub>α</sub><i>v</i><sup>2</sup>(1 − <i>m</i><sub>α</sub>/(<i>m</i><sub>α</sub> + <i>M</i>)) = <i>K</i> · <i>M</i>/(<i>m</i><sub>α</sub> + <i>M</i>)',
          '<b>Step 3 — Solve for <i>d</i>:</b><br><i>d</i> = 2<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>) · (<i>m</i><sub>α</sub> + <i>M</i>)/<i>M</i> = <i>d</i><sub>0</sub>(1 + <i>m</i><sub>α</sub>/<i>M</i>)<br>where <i>d</i><sub>0</sub> is the fixed-nucleus result.',
          '<b>Step 4 — Numbers.</b> <i>d</i><sub>0</sub> = (9.0 × 10<sup>9</sup>)(2)(3)(1.6 × 10<sup>−19</sup>)<sup>2</sup>/(3 × 10<sup>6</sup> × 1.6 × 10<sup>−19</sup>) = (1.382 × 10<sup>−27</sup>)/(4.8 × 10<sup>−13</sup>) ≈ 2.88 × 10<sup>−15</sup> m.<br>Recoil factor = (4 + 7)/7 = 11/7 ≈ 1.57.<br><i>d</i> = 2.88 × 10<sup>−15</sup> × 1.57',
          'Recoil matters most for light targets. <b>Note:</b> 4.5 fm is only ∼ 2× the lithium nuclear radius, so the pure-Coulomb assumption is already on the edge of validity here — precisely the regime where Rutherford scattering begins to “feel” the nucleus and reveal its size.',
        ],
        ans: '<i>d</i> ≈ 4.5 fm, about 57% larger than the naive 2.9 fm.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] An alpha particle of energy 7.7 MeV is fired head-on at a gold nucleus (<i>Z</i> = 79). Find the distance of closest approach.',
            a: '≈ 3.0 × 10<sup>−14</sup> m',
          },
          {
            q: '[NEET] If the kinetic energy of an alpha particle is doubled, by what factor does its distance of closest approach to a fixed nucleus change?',
            a: 'halved (× ½)',
          },
          {
            q: '[JEE Main] Alpha particles of 6 MeV are scattered by gold (<i>Z</i> = 79). Find the impact parameter corresponding to a scattering angle of 60°. (Take cot 30° = 1.73.)',
            a: '≈ 3.3 × 10<sup>−14</sup> m',
          },
          {
            q: '[JEE Main] In a scattering experiment, <i>N</i> alpha particles per minute are detected at 60°. Using <i>N</i>(<i>θ</i>) ∝ 1/sin<sup>4</sup>(<i>θ</i>/2), how many per minute are detected at 90°?',
            a: '<i>N</i>/4',
          },
          {
            q: '[JEE Advanced] An alpha particle and a proton, both carrying the <b>same momentum</b>, are fired head-on at the same nucleus. Find the ratio <i>d</i><sub>α</sub> ∶ <i>d</i><sub>proton</sub> of their distances of closest approach. (Take <i>m</i><sub>α</sub> = 4<i>m</i><sub>p</sub>.) (Treat the nucleus as fixed.)',
            a: '8 ∶ 1',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The fact that most alpha particles pass through the gold foil almost undeviated indicates that:',
        opts: [
          {
            label: 'the nucleus is positively charged',
            nudge: '<b>(A)</b> is true but is shown by large-angle scattering, not by undeviated passage — a classic “right fact, wrong evidence” trap.',
          },
          { label: 'the atom is mostly empty space', nudge: null },
          {
            label: 'electrons have negligible mass',
            nudge: '<b>(C)</b> is a separate true fact (why electrons don’t deflect the alpha), but the undeviated observation is about empty space, not electron mass.',
          },
          {
            label: 'the nucleus is extremely dense',
            nudge: '<b>(D)</b> is inferred from the rare backward bounces, not the straight-through majority.',
          },
        ],
        correct: 1,
        solution: 'Undeviated passage means most alphas encountered nothing — the atom’s mass and charge occupy a tiny fraction of its volume.',
      },
      {
        t: 'mcq',
        q: 'An alpha particle is fired at a nucleus. If the atomic number <i>Z</i> is doubled and the kinetic energy <i>K</i> is halved, the distance of closest approach changes by a factor of:',
        opts: [
          { label: '2', nudge: '<b>(A)</b> counts only the <i>Z</i> doubling and forgets the energy change.' },
          { label: '4', nudge: null },
          { label: '1', nudge: '<b>(C)</b> wrongly assumes the two effects cancel.' },
          { label: '1/4', nudge: '<b>(D)</b> inverts the whole ratio (<i>d</i> ∝ <i>K</i>/<i>Z</i> instead of <i>Z</i>/<i>K</i>), giving (½)/2 = 1/4.' },
        ],
        correct: 1,
        solution: 'Since <i>d</i> ∝ <i>Z</i>/<i>K</i>, new <i>d</i> = 2<i>Z</i>/(<i>K</i>/2) = 4× old.',
      },
      {
        t: 'mcq',
        q: 'For a head-on collision between an alpha particle and a nucleus, the impact parameter <i>b</i> and scattering angle <i>θ</i> are respectively:',
        opts: [
          {
            label: '<i>b</i> = 0, <i>θ</i> = 0°',
            nudge: '<b>(A)</b> assumes head-on means “no deflection” — confusing aiming at the centre with grazing past.',
          },
          {
            label: '<i>b</i> = max, <i>θ</i> = 180°',
            nudge: '<b>(B)</b> pairs the head-on angle with the wrong impact parameter: a large <i>b</i> means a distant pass and a small deflection, never 180°.',
          },
          { label: '<i>b</i> = 0, <i>θ</i> = 180°', nudge: null },
          {
            label: '<i>b</i> = max, <i>θ</i> = 0°',
            nudge: '<b>(D)</b> describes a distant grazing pass, the large-<i>b</i> limit.',
          },
        ],
        correct: 2,
        solution: 'Head-on means aiming straight at the centre (<i>b</i> = 0); the alpha rebounds straight back (<i>θ</i> = 180°).',
      },
      {
        t: 'mcq',
        q: 'Using Rutherford’s law <i>N</i>(<i>θ</i>) ∝ 1/sin<sup>4</sup>(<i>θ</i>/2), the ratio of particles scattered at 90° to those scattered at 180° is:',
        opts: [
          { label: '1', nudge: '<b>(A)</b> assumes the count is angle-independent.' },
          {
            label: '2',
            nudge: '<b>(B)</b> comes from using 1/sin<sup>2</sup>(<i>θ</i>/2) instead of the fourth power.',
          },
          { label: '4', nudge: null },
          {
            label: '16',
            nudge: '<b>(D)</b> comes from squaring the correct factor again, using 1/sin<sup>8</sup>(<i>θ</i>/2).',
          },
        ],
        correct: 2,
        solution: '<i>N</i>(90°)/<i>N</i>(180°) = (1/sin<sup>4</sup> 45°)/(1/sin<sup>4</sup> 90°) = sin<sup>4</sup> 90°/sin<sup>4</sup> 45° = 1/(1/√2)<sup>4</sup> = 1/(1/4) = 4.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing <i>b</i> with <i>d</i>.</b> The impact parameter <i>b</i> is the sideways offset before the collision; the distance of closest approach <i>d</i> is the minimum separation during it. They are different quantities with different formulas — never interchange them.',
          '<b>Forgetting the alpha’s charge is 2<i>e</i>.</b> The closest-approach formula carries a factor for (2<i>e</i>): writing <i>Ze</i><sup>2</sup> instead of 2<i>Ze</i><sup>2</sup> in <i>d</i> silently halves your answer. (In the impact-parameter formula the 2 has already cancelled, <i>b</i> = (<i>d</i>/2) cot(<i>θ</i>/2), so <i>b</i> correctly has <i>Ze</i><sup>2</sup>: do not double it.)',
          '<b>Blaming electrons for large-angle scattering.</b> Electrons are ~7300× lighter than an alpha; they cannot turn it back. All the deflection is due to the nucleus.',
          '<b>Mishandling the energy dependence.</b> <i>d</i> ∝ 1/<i>K</i> (not 1/√<i>K</i>, not 1/<i>K</i><sup>2</sup>). And watch the “same accelerating potential” trap — there the projectile charge cancels (worked example 2).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Never plug in full numbers for ratio or comparison questions. Memorise the proportionalities — <i>d</i> ∝ <i>Z</i>/<i>K</i>, <i>b</i> ∝ (<i>Z</i>/<i>K</i>) cot(<i>θ</i>/2), <i>N</i> ∝ <i>Z</i><sup>2</sup><i>t</i>/(<i>K</i><sup>2</sup> sin<sup>4</sup>(<i>θ</i>/2)) — and divide. Two extreme-case sanity checks catch most errors instantly: <i>b</i> = 0 ⇔ <i>θ</i> = 180° (head-on) and <i>b</i> → ∞ ⇔ <i>θ</i> → 0° (no scatter).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Experiment',
            note: '5.5 MeV alphas → thin gold foil; ZnS scintillation detector. Most pass straight; ~1 in 8000 deflect > 90°; a few rebound. ⇒ atom is mostly empty, with a tiny dense <b>positive nucleus</b>.',
          },
          {
            f: 'Closest approach (head-on)',
            note: '<i>d</i> = 2<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>) ⇒ <i>d</i> ∝ <i>Z</i>, <i>d</i> ∝ 1/<i>K</i>, <i>d</i> ∝ 1/<i>v</i><sup>2</sup>',
          },
          { f: 'Impact parameter', note: '<i>b</i> = (<i>Ze</i><sup>2</sup>/(4πε<sub>0</sub><i>K</i>)) cot(<i>θ</i>/2)' },
          {
            f: 'Scattering law',
            note: '<i>N</i>(<i>θ</i>) ∝ 1/sin<sup>4</sup>(<i>θ</i>/2), <i>N</i> ∝ <i>Z</i><sup>2</sup>, <i>N</i> ∝ <i>t</i>, <i>N</i> ∝ 1/<i>K</i><sup>2</sup>',
          },
          {
            f: 'Two failures of Rutherford’s model',
            note: '(i) <b>Stability</b> — an orbiting electron accelerates, radiates, and should spiral into the nucleus in ∼ 10<sup>−11</sup> s (NCERT Chemistry quotes 10<sup>−8</sup> s); (ii) <b>Spectra</b> — cannot explain the sharp, discrete line spectra of atoms. (Both motivate the Bohr model next.)',
          },
        ],
        aids: [
          '“Big <i>b</i>, small bend” (large impact parameter → small angle).',
          '“Head-on heads back” (<i>b</i> = 0 ⇒ <i>θ</i> = 180°).',
          '“Sin-four says far-few” (large angles are rare, ∝ 1/sin<sup>4</sup>).',
        ],
      },
    ],
  },
];
