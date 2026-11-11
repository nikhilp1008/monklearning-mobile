import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topic 01: Angle Measurement and Radians, pp. 178–191 of the
 * Class 11 Mathematics Master Reference (October 2026 edition), word for word.
 * The book numbers this sub-topic's sections 1 to 8, the first being "Exam
 * Relevance"; each is a part, titled from the book's own section name in
 * sentence case ("&" as "and"). Section 8 ("Common Pitfalls, Pro-Tips & Cheat
 * Sheet") is two parts: "Common pitfalls and pro-tips" and "Cheat sheet".
 * Figures 3.1 (caption p. 179, drawn p. 180), 3.2 (caption p. 181, drawn
 * p. 182) and 3.3 (caption p. 184, drawn p. 185) stand where the text calls
 * them; they are redrawn in lib/diagrams/mathematics-11-03.ts.
 * Every fraction is stacked (<frac>); no em dashes.
 */
export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 178–191 ────────────────
  {
    n: '01',
    title: 'Angle Measurement and Radians',
    kalam: 'The radian is the circle’s own natural ruler.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Angle measurement is the foundation slab of the entire trigonometry chapter: every later topic (trigonometric functions on the unit circle, identities, equations, inverse functions, and eventually limits and derivatives of sin <i>x</i> and cos <i>x</i> in Class 12) silently assumes you are working in <b>radians</b>. Get this wrong and a calculus answer in Class 12 collapses, because <frac><num>d</num><den>d<i>x</i></den></frac>(sin <i>x</i>) = cos <i>x</i> is only true when <i>x</i> is in radians.',
      },
      {
        t: 'p',
        html: 'For the exams:<br>• <b>CBSE Boards (Class 11):</b> Direct 1–2 mark questions on degree↔radian conversion and 3-mark arc-length / sector problems are almost guaranteed. NCERT Exercise 3.1 is the canonical question bank, and board papers lift problems near-verbatim from it (the book’s estimate from past papers, not official figures).<br>• <b>JEE Main / NEET:</b> Rarely a standalone question (the book’s estimate from past papers, not official figures), but baked into every trigonometry and rotational-motion problem. NEET in particular hides it inside angular-velocity questions (revolutions → radians per second). A student who fumbles units here loses marks on Physics rotational mechanics too.<br>• <b>JEE Advanced:</b> Appears as a trap layer inside multi-step problems: a sector whose perimeter and area are both given, or an arc-length condition shared between two circles. The angle work is never the hard part; it is the silent prerequisite that filters out students who memorised formulas without understanding when <i>θ</i> must be in radians.',
      },
      {
        t: 'p',
        html: 'Weightage is low in raw marks (the book’s estimate from past papers, not official figures) but <b>infinite in leverage</b>: this is a load-bearing concept. The exam reward is indirect: getting it automatic frees attention for the genuinely hard parts of later problems.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>The everyday problem with degrees.</b> A degree is an arbitrary unit. Why 360 parts in a full turn and not 100 or 1000? Historical accident: the Babylonians liked 360 because it divides cleanly. There is nothing about a circle that “wants” to be cut into 360 pieces. Degrees are a convention, like measuring distance in cubits.',
      },
      {
        t: 'p',
        html: '<b>The radian is the circle’s own natural ruler.</b> Instead of inventing a number, the radian measures an angle using the circle itself. Take any circle. Walk along its edge (the arc) a distance exactly equal to its radius. The angle you have swept out, measured from the centre, is defined to be <b>1 radian</b>.',
      },
      { t: 'fig', id: 'm11-03-fig-3.1' },
      {
        t: 'p',
        html: '<b>Indian-context analogy: the giant wheel (ferris wheel) at a mela.</b> Picture a 7-metre-radius giant wheel at a fair. As your cabin rises, two questions could describe how far you’ve gone:<br>• “How many degrees around am I?”: a made-up number.<br>• “How far have I actually travelled along the rim, measured in radius-lengths?”: that distance, divided by the radius, <b>is</b> the angle in radians.',
      },
      {
        t: 'p',
        html: 'So a radian directly answers “how much arc per unit radius.” It is a ratio of two lengths, which is why, and this is the deep point, <b>a radian has no units at all</b>. It is a pure number. (More on this in the Key definitions, units and conversion reference part.)',
      },
      {
        t: 'p',
        html: '<b>Why π shows up everywhere.</b> The full circumference of any circle is 2π<i>r</i>. Walking the entire rim covers 2π radius-lengths. So one full revolution = 2π radians. Half a turn = π radians. A quarter turn (a right angle) = <frac><num>π</num><den>2</den></frac> radians. The π is not decoration: it is literally “how many radius-lengths fit around the circle, halved.”',
      },
      {
        t: 'p',
        html: '<b>Second analogy: the chapati / roti.</b> Slicing a round chapati into 6 equal sectors, each slice’s tip-angle is <frac><num>360°</num><den>6</den></frac> = 60° = <frac><num>π</num><den>3</den></frac> radians. The arc (crust) of each slice is one-sixth of the total crust. Sector area and arc length are just “fractions of the whole,” and radians make those fractions effortless: the fraction of the full turn is simply <frac><num><i>θ</i></num><den>2π</den></frac>.',
      },
      {
        t: 'p',
        html: '<b>Sign of an angle: the clock vs the screw.</b> An angle is rotation, and rotation has a direction.<br>• <b>Anticlockwise</b> rotation → <b>positive</b> angle.<br>• <b>Clockwise</b> rotation → <b>negative</b> angle.',
      },
      { t: 'fig', id: 'm11-03-fig-3.2' },
      {
        t: 'p',
        html: 'This is the chapter-wide convention and it never changes. Think of an old analog clock: the hands move clockwise, which by our convention is the <b>negative</b> direction.',
      },

      { t: 'part', title: 'Key definitions, units and conversion reference' },
      {
        t: 'p',
        html: '<b>Angle (as rotation).</b> An angle is formed by rotating a ray about its endpoint (the <b>vertex</b>) from an <b>initial side</b> to a <b>terminal side</b>. The measure of the angle is the amount of rotation. Anticlockwise is positive; clockwise is negative.',
      },
      {
        t: 'p',
        html: '<b>Degree measure.</b> If a rotation is <frac><num>1</num><den>360</den></frac> of one complete revolution, the angle measures <b>one degree</b> (1°). Subdivisions are base-60:<br>1° = 60′ (60 minutes), 1′ = 60″ (60 seconds).',
      },
      {
        t: 'p',
        html: '<b>Radian measure.</b> The angle subtended at the centre of a circle by an arc whose length equals the radius is <b>one radian</b> (1<sup>c</sup>, though the unit word is almost always omitted).',
      },
      {
        t: 'p',
        html: '<b>The cornerstone definition (arc–radius ratio).</b> For an arc of length <i>s</i> on a circle of radius <i>r</i>, the angle it subtends at the centre is',
      },
      {
        t: 'formula',
        kicker: 'The cornerstone definition (arc–radius ratio)',
        main: '<i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac> (<i>θ</i> in radians)',
        legend: [
          '<i>θ</i> = angle subtended at the centre (in radians)',
          '<i>s</i> = length of the arc',
          '<i>r</i> = radius of the circle',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Why the radian is dimensionless (the math analogue of dimensional analysis).</b> Both <i>s</i> and <i>r</i> are lengths. Their ratio is<br>[<i>θ</i>] = <frac><num>[length]</num><den>[length]</den></frac> = 1.',
      },
      {
        t: 'p',
        html: 'A radian is a <b>pure number</b>: it carries no physical dimension. This is why we are allowed to drop the unit word, why the radian can appear inside power series and derivatives, and why an angular velocity <i>ω</i> = <frac><num><i>θ</i></num><den><i>t</i></den></frac> comes out in s<sup>−1</sup> (radians silently vanish). A degree, by contrast, is not a natural unit in this clean sense: 1° is the pure number <frac><num>π</num><den>180</den></frac> in disguise, so every formula written in degrees secretly carries that factor (as in <i>s</i> = <frac><num>π<i>rθ</i></num><den>180</den></frac>). This single fact resolves half the confusion students carry into Class 12 calculus.',
      },
      { t: 'p', html: '<b>The master conversion relations.</b>' },
      {
        t: 'formula',
        kicker: 'The master conversion relations',
        main: '2π radian = 360°<br>π radian = 180°',
        legend: [
          'radian = angle subtended at the centre by an arc equal in length to the radius',
          '1° = one degree (<frac><num>1</num><den>360</den></frac> of one complete revolution)',
        ],
        note: null,
      },
      { t: 'p', html: 'From these, the two working factors:' },
      {
        t: 'formula',
        kicker: 'The two working factors',
        main: 'Radian measure = <frac><num>π</num><den>180</den></frac> × Degree measure<br>Degree measure = <frac><num>180</num><den>π</den></frac> × Radian measure',
        legend: [
          '<frac><num>π</num><den>180</den></frac> = factor for degree→radian',
          '<frac><num>180</num><den>π</den></frac> = factor for radian→degree',
        ],
        note: null,
      },
      { t: 'p', html: '<b>Numeric values to memorise.</b>' },
      {
        t: 'formula',
        kicker: 'Numeric values to memorise',
        main: '1 radian = <frac><num>180°</num><den>π</den></frac> ≈ 57°17′45″ ≈ 57.2958°<br>1° = <frac><num>π</num><den>180</den></frac> radian ≈ 0.01745 radian',
        legend: ['′ = minute (1° = 60′)', '″ = second (1′ = 60″)'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notational convention.</b> When we write <i>θ</i>° we mean the degree measure <i>θ</i>. When we write a bare <i>β</i> (no degree sign) we mean the radian measure <i>β</i>. So <frac><num>π</num><den>4</den></frac> and 45° refer to the same angle, with <frac><num>π</num><den>4</den></frac> understood to be in radians. <b>A bare number in this chapter is always radians.</b>',
      },
      {
        t: 'p',
        html: '<b>Standard angle conversion table</b> (commit to memory: these are the workhorses):',
      },
      {
        t: 'table',
        title: null,
        head: ['Degree', '30°', '45°', '60°', '90°', '120°', '180°', '270°', '360°'],
        rows: [
          [
            'Radian',
            '<frac><num>π</num><den>6</den></frac>',
            '<frac><num>π</num><den>4</den></frac>',
            '<frac><num>π</num><den>3</den></frac>',
            '<frac><num>π</num><den>2</den></frac>',
            '<frac><num>2π</num><den>3</den></frac>',
            'π',
            '<frac><num>3π</num><den>2</den></frac>',
            '2π',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Radians and real numbers are one and the same.</b> On a unit circle, wrapping the real number line around the rim (anticlockwise for positive numbers, clockwise for negative) assigns to every real number a radian measure, so a real number can be read as an angle and an angle as a real number. This is the bridge that lets us later treat sin and cos as functions of a real variable <i>x</i>, not just of a geometric angle.',
      },

      { t: 'part', title: 'Derivations of the core relations' },
      {
        t: 'p',
        html: '<b>(a) The conversion factor <frac><num>π</num><den>180</den></frac>: derived, not memorised.</b>',
      },
      {
        t: 'p',
        html: 'Start from the one physical fact: a full revolution has circumference 2π<i>r</i>, and the arc for a full revolution is the whole circumference. By the cornerstone definition <i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac>:<br><i>θ</i><sub>full turn</sub> = <frac><num>2π<i>r</i></num><den><i>r</i></den></frac> = 2π radian.<br>But a full turn is also 360° by the degree definition. Hence<br>2π radian = 360° ⟹ π radian = 180° ⟹ 1° = <frac><num>π</num><den>180</den></frac> radian.',
      },
      {
        t: 'p',
        html: 'Everything else is just scaling this single equation. <b>There is exactly one relation to remember; the two factors <frac><num>π</num><den>180</den></frac> and <frac><num>180</num><den>π</den></frac> are reciprocals of each other.</b>',
      },
      { t: 'p', html: '<b>(b) Arc length, <i>s</i> = <i>rθ</i>.</b>' },
      {
        t: 'p',
        html: 'Rearranging the cornerstone definition <i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac> directly gives',
      },
      {
        t: 'formula',
        kicker: 'Arc length',
        main: '<i>s</i> = <i>rθ</i> (<i>θ</i> in radians)',
        legend: [
          '<i>s</i> = length of the arc',
          '<i>r</i> = radius of the circle',
          '<i>θ</i> = angle subtended at the centre (in radians)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Derivation by proportion (the version examiners want to see):</b> arc length is proportional to the angle subtended. The whole circumference 2π<i>r</i> corresponds to the whole angle 2π. So for an angle <i>θ</i>,<br><frac><num><i>s</i></num><den>2π<i>r</i></den></frac> = <frac><num><i>θ</i></num><den>2π</den></frac> ⟹ <i>s</i> = <i>rθ</i>.',
      },
      {
        t: 'p',
        html: 'The 2π cancels cleanly: this only works because <i>θ</i> is in radians. If <i>θ</i> were in degrees you would be forced to write <i>s</i> = <frac><num>π<i>rθ</i></num><den>180</den></frac>, which is exactly why physicists and mathematicians abandon degrees.',
      },
      {
        t: 'p',
        html: '<b>(c) Area of a sector, <i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>r</i><sup>2</sup><i>θ</i>.</b>',
      },
      {
        t: 'p',
        html: 'A sector is the “pizza slice” bounded by two radii and an arc. Its area is the same fraction of the whole disc as its angle is of the full turn:',
      },
      {
        t: 'formula',
        kicker: 'Area of a sector',
        main: '<frac><num><i>A</i><sub>sect</sub></num><den>π<i>r</i><sup>2</sup></den></frac> = <frac><num><i>θ</i></num><den>2π</den></frac> ⟹ <i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>r</i><sup>2</sup><i>θ</i> (<i>θ</i> in radians)<br><i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>rs</i>',
        legend: [
          '<i>A</i><sub>sect</sub> = area of the sector',
          '<i>r</i> = radius of the circle',
          '<i>θ</i> = angle of the sector at the centre (in radians)',
          '<i>s</i> = length of the arc',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A useful equivalent form, using <i>s</i> = <i>rθ</i>:<br><i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>r</i> <i>s</i>.',
      },
      { t: 'fig', id: 'm11-03-fig-3.3' },
      {
        t: 'proc',
        title: 'Procedure: converting a degree-minute-second (DMS) value to radians',
        steps: [
          'Convert minutes and seconds down to a decimal (or fractional) degree: 40°20′ = 40 + <frac><num>20</num><den>60</den></frac> = 40<frac><num>1</num><den>3</den></frac> = <frac><num>121</num><den>3</den></frac>°.',
          'Multiply by <frac><num>π</num><den>180</den></frac>.',
          'Simplify the fraction; leave π symbolic unless a decimal is asked for.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure: converting radians to DMS',
        steps: [
          'Multiply the radian value by <frac><num>180</num><den>π</den></frac> (use π = <frac><num>22</num><den>7</den></frac> if the problem demands a number).',
          'Take the whole-degree part; multiply the fractional part by 60 to get minutes.',
          'Multiply the leftover fraction by 60 again to get seconds.',
        ],
      },

      { t: 'part', title: 'Worked examples (difficulty-laddered)' },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Convert 40°20′ into radian measure.',
        steps: [
          '40°20′ = 40<frac><num>1</num><den>3</den></frac>° = <frac><num>121</num><den>3</den></frac>°.',
          'Multiply by <frac><num>π</num><den>180</den></frac>:<br><frac><num>121</num><den>3</den></frac> × <frac><num>π</num><den>180</den></frac> = <frac><num>121π</num><den>540</den></frac> radian.',
        ],
        ans: '40°20′ = <frac><num>121π</num><den>540</den></frac> radian.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board level',
        q: 'Find the radius of the circle in which a central angle of 60° intercepts an arc of length 37.4 cm. (Use π = <frac><num>22</num><den>7</den></frac>.)',
        steps: [
          'First, the angle <b>must</b> be in radians for <i>s</i> = <i>rθ</i>:<br>60° = 60 × <frac><num>π</num><den>180</den></frac> = <frac><num>π</num><den>3</den></frac> radian.',
          'Now apply <i>s</i> = <i>rθ</i> ⇒ <i>r</i> = <frac><num><i>s</i></num><den><i>θ</i></den></frac>:<br><i>r</i> = <frac><num>37.4</num><den><frac><num>π</num><den>3</den></frac></den></frac> = <frac><num>37.4 × 3</num><den>π</den></frac> = <frac><num>112.2</num><den><frac><num>22</num><den>7</den></frac></den></frac> = <frac><num>112.2 × 7</num><den>22</den></frac> = 35.7 cm.',
          '(<b>Note:</b> forgetting to convert 60° to radians is the signature trap; see the Common pitfalls and pro-tips part.)',
        ],
        ans: '<i>r</i> = 35.7 cm.',
      },
      {
        t: 'ex',
        tag: 'NEET level (angular motion)',
        q: 'A wheel makes 360 revolutions in one minute. Through how many radians does it turn in one second?',
        steps: [
          'Revolutions per second:<br><frac><num>360</num><den>60</den></frac> = 6 rev/s.',
          'Each revolution is 2π radian, so<br>6 × 2π = 12π ≈ 37.7 radian per second.',
          '(This is exactly the bridge to rotational mechanics: <i>ω</i> in rad s<sup>−1</sup> feeds straight into <i>v</i> = <i>rω</i>.)',
        ],
        ans: '<i>ω</i> = 12π rad s<sup>−1</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main level (shared arc condition)',
        q: 'In two circles, arcs of the same length subtend angles 60° and 75° at their centres. Find the ratio of their radii.',
        steps: [
          'Equal arc length: <i>s</i><sub>1</sub> = <i>s</i><sub>2</sub>, i.e. <i>r</i><sub>1</sub><i>θ</i><sub>1</sub> = <i>r</i><sub>2</sub><i>θ</i><sub>2</sub>. The angles can stay in degrees here because they only appear as a ratio (the conversion factor cancels):<br><frac><num><i>r</i><sub>1</sub></num><den><i>r</i><sub>2</sub></den></frac> = <frac><num><i>θ</i><sub>2</sub></num><den><i>θ</i><sub>1</sub></den></frac> = <frac><num>75</num><den>60</den></frac> = <frac><num>5</num><den>4</den></frac>.',
          '(<b>Conceptual point:</b> a bigger angle on the same arc means a smaller radius: tighter curve. The inverse relationship is the discriminator here; students who memorised <i>s</i> = <i>rθ</i> but never internalised it often write 4 ∶ 5.)',
        ],
        ans: '<i>r</i><sub>1</sub> ∶ <i>r</i><sub>2</sub> = 5 ∶ 4.',
      },
      {
        t: 'ex',
        tag: 'JEE Main / chord–arc link',
        q: 'In a circle of diameter 40 cm, a chord is 20 cm long. Find the length of the minor arc cut off by the chord.',
        steps: [
          'Radius <i>r</i> = 20 cm. Drop a perpendicular from the centre to the chord; it bisects the chord, giving a right triangle with hypotenuse <i>r</i> = 20 and opposite side 10:<br>sin(<frac><num><i>θ</i></num><den>2</den></frac>) = <frac><num>10</num><den>20</den></frac> = <frac><num>1</num><den>2</den></frac> ⟹ <frac><num><i>θ</i></num><den>2</den></frac> = <frac><num>π</num><den>6</den></frac> ⟹ <i>θ</i> = <frac><num>π</num><den>3</den></frac> radian.',
          'Minor arc length:<br><i>s</i> = <i>rθ</i> = 20 × <frac><num>π</num><den>3</den></frac> = <frac><num>20π</num><den>3</den></frac> ≈ 20.94 cm.',
          '(This forces the chord–angle relation chord = 2<i>r</i> sin(<frac><num><i>θ</i></num><den>2</den></frac>) before the arc formula: a genuine two-concept chain.)',
        ],
        ans: '<i>s</i> = <frac><num>20π</num><den>3</den></frac> cm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced level (sector inversion)',
        q: 'A sector of a circle has perimeter 16 cm and area 16 cm<sup>2</sup>. Find the radius and the central angle (in radians).',
        steps: [
          'Perimeter of a sector = two radii + arc:<br>2<i>r</i> + <i>s</i> = 16, <i>s</i> = <i>rθ</i>.',
          'Area:<br><i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>r</i><sup>2</sup><i>θ</i> = 16.',
          'From the area equation, <i>r</i><sup>2</sup><i>θ</i> = 32, so <i>s</i> = <i>rθ</i> = <frac><num>32</num><den><i>r</i></den></frac>. Substitute into the perimeter:<br>2<i>r</i> + <frac><num>32</num><den><i>r</i></den></frac> = 16 ⟹ 2<i>r</i><sup>2</sup> − 16<i>r</i> + 32 = 0 ⟹ <i>r</i><sup>2</sup> − 8<i>r</i> + 16 = 0 ⟹ (<i>r</i> − 4)<sup>2</sup> = 0.',
          '<i>r</i> = 4 cm, <i>s</i> = <frac><num>32</num><den>4</den></frac> = 8 cm, <i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac> = <frac><num>8</num><den>4</den></frac> = 2 radian.',
          '(<b>Key idea:</b> two conditions give two unknowns <i>r</i> and <i>θ</i>; eliminate one and solve.)',
        ],
        ans: '<i>r</i> = 4 cm, <i>θ</i> = 2 radian.',
      },

      { t: 'part', title: 'Practice exercises (with answers)' },
      {
        t: 'practice',
        items: [
          {
            q: 'Convert into radians: (a) 25°, (b) −47°30′, (c) 520°.',
            a: '(a) <frac><num>5π</num><den>36</den></frac>; (b) −<frac><num>19π</num><den>72</den></frac>; (c) <frac><num>26π</num><den>9</den></frac>.',
          },
          {
            q: 'Convert into degree measure: (a) <frac><num>11</num><den>16</den></frac> radian, (b) −4 radian, (c) <frac><num>5π</num><den>3</den></frac> radian. (Use π = <frac><num>22</num><den>7</den></frac> where a number is needed.)',
            a: '(a) 39°22′30″; (b) −229°5′27″ (approx.); (c) 300°.',
          },
          {
            q: 'Find the degree measure of the angle subtended at the centre of a circle of radius 100 cm by an arc of length 22 cm. (Use π = <frac><num>22</num><den>7</den></frac>.)',
            a: '<i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac> = <frac><num>22</num><den>100</den></frac> = 0.22 radian = 0.22 × <frac><num>180</num><den>π</den></frac> ≈ 12°36′.',
          },
          {
            q: 'A pendulum of length 75 cm swings so that its tip describes an arc of length 21 cm. Find the angle (in radians) through which it swings.',
            a: '<i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac> = <frac><num>21</num><den>75</den></frac> = 0.28 radian.',
          },
          {
            q: 'The minute hand of a clock is 1.5 cm long. How far does its tip move in 40 minutes? (Use π = 3.14.)',
            a: 'In 40 min the hand sweeps <frac><num>40</num><den>60</den></frac> × 360° = 240° = <frac><num>4π</num><den>3</den></frac> radian; <i>s</i> = <i>rθ</i> = 1.5 × <frac><num>4π</num><den>3</den></frac> = 2π ≈ 6.28 cm.',
          },
          {
            q: 'A sector has radius 5 cm and arc length 9 cm. Find its area.',
            a: '<i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>rs</i> = <frac><num>1</num><den>2</den></frac> × 5 × 9 = 22.5 cm<sup>2</sup>.',
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: 'The radian measure of 75° is:',
        opts: [
          { label: '<frac><num>5π</num><den>12</den></frac>', nudge: null },
          {
            label: '<frac><num>5π</num><den>6</den></frac>',
            nudge: '<b>(B)</b> comes from dividing by 90 instead of 180, a careless reduction.',
          },
          {
            label: '<frac><num>7π</num><den>12</den></frac>',
            nudge: '<b>(C)</b> is 105°, an arithmetic slip in simplifying <frac><num>75</num><den>180</den></frac>.',
          },
          {
            label: '<frac><num>12</num><den>5π</den></frac>',
            nudge: '<b>(D)</b> is the <b>direction-inversion</b> distractor: it is <frac><num>12</num><den>5π</den></frac>, the reciprocal of the correct <frac><num>5π</num><den>12</den></frac>, the whole fraction turned upside down.',
          },
        ],
        correct: 0,
        solution: '75 × <frac><num>π</num><den>180</den></frac> = <frac><num>75π</num><den>180</den></frac> = <frac><num>5π</num><den>12</den></frac>.',
      },
      {
        t: 'mcq',
        q: 'An arc of length 15 cm subtends an angle of <frac><num>π</num><den>4</den></frac> at the centre. The radius is:',
        opts: [
          {
            label: '<frac><num>15π</num><den>4</den></frac> cm',
            nudge: '<b>(A)</b> multiplies instead of dividing by <i>θ</i>: confusing <i>s</i> = <i>rθ</i> with <i>r</i> = <i>sθ</i>.',
          },
          { label: '<frac><num>60</num><den>π</den></frac> cm', nudge: null },
          { label: '<frac><num>4</num><den>15π</den></frac> cm', nudge: '<b>(C)</b> inverts the whole fraction.' },
          {
            label: '60 cm',
            nudge: '<b>(D)</b> is the <b>most tempting</b>: it drops the π, i.e. treats <frac><num>π</num><den>4</den></frac> as just “<frac><num>1</num><den>4</den></frac> of something” or uses <i>θ</i> in a degree-like way.',
          },
        ],
        correct: 1,
        solution: '<i>r</i> = <frac><num><i>s</i></num><den><i>θ</i></den></frac> = <frac><num>15</num><den><frac><num>π</num><den>4</den></frac></den></frac> = <frac><num>60</num><den>π</den></frac> cm.',
      },
      {
        t: 'mcq',
        q: '1 radian is approximately:',
        opts: [
          {
            label: '1°',
            nudge: '<b>(A)</b> is the classic misconception that radian and degree are interchangeable numbers: the deepest error.',
          },
          { label: '57°16′', nudge: null },
          { label: '60°', nudge: '<b>(C)</b> rounds 57° “up to a nice number”: guessing.' },
          { label: '90°', nudge: '<b>(D)</b> confuses 1 radian with <frac><num>π</num><den>2</den></frac>.' },
        ],
        correct: 1,
        solution: '1 radian = <frac><num>180°</num><den>π</den></frac> ≈ 57.3° (57°17′45″), so <b>(B)</b> 57°16′ is the nearest option.',
      },
      {
        t: 'mcq',
        q: 'Using <i>s</i> = <i>rθ</i>, a student computes the arc for <i>r</i> = 6 cm and a 30° angle as <i>s</i> = 6 × 30 = 180 cm. The error is:',
        opts: [
          {
            label: 'should have multiplied by 60',
            nudge: '<b>(A)</b> multiplying by 60 fixes nothing: the error is the angle, which must become <frac><num>π</num><den>6</den></frac> radian before <i>s</i> = <i>rθ</i> is used.',
          },
          { label: 'used <i>θ</i> in degrees instead of radians', nudge: null },
          { label: 'used the wrong radius', nudge: '<b>(C)</b> the radius 6 cm is the one given; it is the angle that was used wrongly.' },
          {
            label: 'no error',
            nudge: '<b>(D)</b> 180 cm is far more than the whole circumference 2π × 6 ≈ 37.7 cm, so there must be an error.',
          },
        ],
        correct: 1,
        solution: 'The correct value is <i>s</i> = 6 × <frac><num>π</num><den>6</den></frac> = π ≈ 3.14 cm. The formula <i>s</i> = <i>rθ</i> requires <i>θ</i> in <b>radians</b>. This is the <b>signature trap</b> of the whole topic. It is the single best discriminator between rote memorisation and conceptual understanding.',
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using degrees in <i>s</i> = <i>rθ</i> or <i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>r</i><sup>2</sup><i>θ</i>.</b> These formulas are defined with <i>θ</i> in radians. Always convert first. A wrong answer roughly 57× too big is the fingerprint of this error.',
          '<b>Flipping the conversion factor.</b> Degree→radian uses <frac><num>π</num><den>180</den></frac>; radian→degree uses <frac><num>180</num><den>π</den></frac>. <b>Memory hook:</b> going to the bigger-looking number (degrees, since 57 > 1) means multiplying by the bigger factor <frac><num>180</num><den>π</den></frac>.',
          '<b>Treating “radian” as a unit you carry through.</b> A radian is dimensionless. In <i>ω</i> = <frac><num><i>θ</i></num><den><i>t</i></den></frac>, the radian disappears and you get s<sup>−1</sup>. Do not “cancel radians” as if they were metres.',
          '<b>DMS base-60 arithmetic.</b> 0.5° is 30′, <b>not</b> 50′. 20′ = <frac><num>20</num><den>60</den></frac>° = <frac><num>1</num><den>3</den></frac>°, not 0.20°. Convert minutes/seconds to fractions of a degree before multiplying.',
          '<b>Sign of rotation.</b> Clockwise is <b>negative</b>. A clock’s hands move in the negative direction.',
          '<b>Calculator in the wrong mode.</b> When you reach numerical trig in later topics, a calculator set to DEG will give nonsense for radian inputs. Make checking the mode a reflex.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tips.</b><br>• Lock the table 30°, 45°, 60°, 90° and their radian twins so cold that you never compute them.<br>• When an angle appears only as a <b>ratio</b> of two angles (like the fourth worked example of this topic), you may leave both in degrees: the conversion factor cancels. This saves time.<br>• <i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac> is the one formula; arc length and conversion both fall out of it. Memorise the definition, not the consequences.<br>• Sanity check: 1 radian ≈ 57°, a bit less than 60°. If your “radian” answer for a small angle is huge, you flipped the factor.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: '<i>θ</i> = <frac><num><i>s</i></num><den><i>r</i></den></frac> (radians): arc length over radius. Radian is <b>dimensionless</b>.',
          },
          { f: 'Master relation', note: 'π radian = 180°. Everything scales from this.' },
          {
            f: 'Convert',
            note: 'deg→rad × <frac><num>π</num><den>180</den></frac>; rad→deg × <frac><num>180</num><den>π</den></frac>.',
          },
          { f: 'Benchmarks', note: '1 rad ≈ 57.3° (57°17′45″); 1° ≈ 0.01745 rad.' },
          { f: 'Arc length', note: '<i>s</i> = <i>rθ</i> (<i>θ</i> in radians).' },
          {
            f: 'Sector area',
            note: '<i>A</i><sub>sect</sub> = <frac><num>1</num><den>2</den></frac><i>r</i><sup>2</sup><i>θ</i> = <frac><num>1</num><den>2</den></frac><i>rs</i> (<i>θ</i> in radians).',
          },
          {
            f: 'Table',
            note: '30° = <frac><num>π</num><den>6</den></frac>, 45° = <frac><num>π</num><den>4</den></frac>, 60° = <frac><num>π</num><den>3</den></frac>, 90° = <frac><num>π</num><den>2</den></frac>, 180° = π, 360° = 2π.',
          },
          { f: 'Sign', note: 'anticlockwise +, clockwise −.' },
          { f: 'DMS', note: '1° = 60′, 1′ = 60″.' },
          {
            f: 'Golden rule',
            note: 'any arc / sector / calculus formula assumes <b>radians</b>. Convert first, always.',
          },
        ],
        aids: [],
      },
    ],
  },
];
