import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 01 and 02: pp. 557–576 of the Class 12 Physics Master
 * Reference, word for word. The chapter’s title page and contents (pp.
 * 555–556) are not copied. Topic 01 is the book’s 9.1 Reflection and
 * Spherical Mirrors (pp. 557–566) and Topic 02 its 9.2 Refraction and Total
 * Internal Reflection (pp. 567–576), each split at its sections 9.N.1 to
 * 9.N.8. The figures are redrawn in lib/diagrams/physics-12-09.ts: Figure 9.1
 * (caption p. 559, drawn p. 560), 9.2 and 9.3 (captions p. 561, drawn p. 562),
 * 9.4 (caption p. 568, drawn p. 569), 9.5 (caption p. 570, drawn p. 571) and
 * 9.6 (caption p. 573 at the end of worked example 4, drawn p. 574). The
 * book’s “this subtopic” is rewritten “this topic”.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 557–566 ─────────────────────────
  {
    n: '01',
    title: 'Reflection and Spherical Mirrors',
    kalam: 'Now bend that flat mirror into a piece of a sphere and you get a spherical mirror.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Mirrors are bread-and-butter optics. Expect <b>1–2 questions in JEE Main</b> (mirror formula, magnification, velocity of image, two-mirror geometry) and typically <b>1 question in NEET</b> (nature of image, sign-based magnification). <b>JEE Advanced</b> loves to disguise it inside multi-step problems — moving objects, mirror rotation, combinations. For <b>CBSE Boards</b>, the mirror-formula derivation and ray diagrams are a reliable 2–3 mark target.',
      },
      {
        t: 'p',
        html: 'Think of throwing a rubber ball straight at a smooth wall. It bounces back, and the angle at which it leaves is a mirror-copy of the angle at which it arrived. Light does exactly the same thing. When a ray of light hits a polished surface, it turns back into the same medium, and the geometry of that bounce is captured by the <b>two laws of reflection</b>: the incident ray, the reflected ray, and the normal (the perpendicular at the point of contact) all lie in one flat plane, and the <b>angle of incidence equals the angle of reflection</b> (<i>i</i> = <i>r</i>). That’s it — every mirror trick in this chapter is just this rule applied cleverly.',
      },
      {
        t: 'p',
        html: 'Why does a polished steel thali show your face but a sheet of paper doesn’t, even though both reflect light? Because the thali is smooth at the microscopic level, so parallel incoming rays stay parallel after bouncing — this is <b>regular (specular) reflection</b>, and it builds a crisp image. Paper is microscopically rough; its tiny facets point every which way, so parallel rays scatter in all directions. This is <b>diffuse reflection</b>, and it’s the reason you can read this page from any angle but can’t see your face in it. (Notice that the laws of reflection are never broken in diffuse reflection — each tiny facet obeys <i>i</i> = <i>r</i>; it’s just that the facets are tilted randomly.)',
      },
      {
        t: 'p',
        html: 'Before we curve the mirror, let’s nail down the flat one. A plane mirror always produces a <b>virtual, erect</b> image, the <b>same size</b> as the object (<i>m</i> = +1), sitting <b>as far behind the mirror as the object stands in front</b>. It also performs <b>lateral inversion</b> — your right hand maps to the image’s left — which is why the word <b>AMBULANCE</b> is painted mirror-reversed on the bonnet, so it reads correctly in a driver’s rear-view mirror. One neat consequence of <i>i</i> = <i>r</i>: to see your full height in a plane mirror you need a mirror only <b>half your height</b>, mounted at the correct level, regardless of how far back you stand.',
      },
      {
        t: 'p',
        html: 'Now bend that flat mirror into a piece of a sphere and you get a <b>spherical mirror</b>. Grab a steel spoon. The inner, caved-in surface is a <b>concave mirror</b>; the outer, bulging surface is a <b>convex mirror</b>. Hold the inner surface close to your eye and your face looks big and upright; pull it far away and you suddenly appear upside down. Flip to the outer surface and you’re always small and upright, with a wide sweep of the kitchen visible behind you. Two surfaces of one spoon, two completely different behaviours — and this topic is about predicting them exactly.',
      },
      {
        t: 'p',
        html: 'A few landmarks let us pin down any spherical mirror. The <b>pole (P)</b> is the centre of the mirror’s surface. The <b>centre of curvature (C)</b> is the centre of the sphere the mirror was cut from, and the distance <i>PC</i> is the <b>radius of curvature (R)</b>. The straight line through <i>P</i> and <i>C</i> is the <b>principal axis</b>. The single most useful point is the <b>focus (F)</b>: shine a beam of parallel rays (like sunlight) onto a concave mirror and they all converge to <i>F</i> — which is why a concave mirror can burn a hole in paper and why solar cookers are concave. A convex mirror does the opposite: parallel rays diverge as though they came from a focus behind the mirror, spreading the view out. That spreading is precisely why scooters and cars use convex side mirrors stamped with <b>“objects are closer than they appear.”</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the focus is the meeting point of the “official” rays — those travelling parallel to the axis. For a paraxial mirror (one whose aperture is small compared to <i>R</i>), this focus sits exactly halfway between the pole and the centre of curvature, so <i>f</i> = <i>R</i>/2. Picture the radius as a full ruler from <i>P</i> to <i>C</i>; the focus marks its midpoint.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Every neat formula here rests on the <b>paraxial approximation</b>: we assume rays stay close to the principal axis and make small angles with it. When the aperture is large, rays far from the axis focus at slightly different points — a defect called <b>spherical aberration</b> — and a single sharp focus no longer exists. So <i>f</i> = <i>R</i>/2 and the mirror formula are paraxial results, not exact ones for wide mirrors. We also treat the mirror as thin and the object point as lying near the axis. Push beyond these limits and the simple picture blurs.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Laws of reflection',
        main: '∠<i>i</i> = ∠<i>r</i>, and incident ray, reflected ray, normal are coplanar',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Focal length – radius relation (paraxial)',
        main: '<i>f</i> = <i>R</i>/2',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mirror formula',
        main: '1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>',
        legend: ['<i>u</i> = object distance', '<i>v</i> = image distance', '<i>f</i> = focal length'],
        note: 'all measured from the pole using the New Cartesian convention.',
      },
      {
        t: 'formula',
        kicker: 'Linear (lateral / transverse) magnification',
        main: '<i>m</i> = <i>h</i>′/<i>h</i> = −<i>v</i>/<i>u</i> = <i>f</i>/(<i>f</i> − <i>u</i>) = (<i>f</i> − <i>v</i>)/<i>f</i>',
        legend: ['<i>h</i> = object height', '<i>h</i>′ = image height'],
        note: 'A positive <i>m</i> means an erect (virtual) image; negative <i>m</i> means an inverted (real) image. |<i>m</i>| > 1 enlarged, |<i>m</i>| < 1 diminished.',
      },
      {
        t: 'formula',
        kicker: 'Longitudinal magnification (object lying along the axis, small length)',
        main: '<i>m</i><sub>L</sub> = −(<i>v</i>/<i>u</i>)<sup>2</sup> = −<i>m</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Areal magnification (flat object perpendicular to axis)',
        main: '<i>m</i><sub>A</sub> = <i>m</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Deviation produced by a single reflection',
        main: '<i>δ</i> = 180° − 2<i>i</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mirror-rotation rule',
        main: 'keep the incident ray fixed and rotate a plane mirror by angle <i>θ</i>; the reflected ray turns through 2<i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Number of images formed by two plane mirrors inclined at angle <i>θ</i>',
        main: 'let <i>N</i> = 360°/<i>θ</i><br>If <i>N</i> is even, images = <i>N</i> − 1; if <i>N</i> is odd, images = <i>N</i> − 1 (object on the bisector) or <i>N</i> (object off the bisector)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Newton’s formula (distances <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub> of object and image measured from the focus)',
        main: '<i>x</i><sub>1</sub><i>x</i><sub>2</sub> = <i>f</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Definitions & units.</b> <i>u</i>, <i>v</i>, <i>f</i>, <i>R</i> are lengths — SI unit metre (m), dimensional formula [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]. Magnification <i>m</i> (and <i>m</i><sub>L</sub>, <i>m</i><sub>A</sub>) is a pure ratio — <b>dimensionless</b>, [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]. Angles <i>i</i>, <i>r</i>, <i>δ</i> are in radians/degrees (dimensionless). A handy derived quantity is the mirror’s <b>power</b> <i>P</i> = 1/<i>f</i> (in dioptre, D, when <i>f</i> is in metres), dimensional formula [M<sup>0</sup> L<sup>−1</sup> T<sup>0</sup>].',
      },
      {
        t: 'table',
        title: 'Image formation by a concave mirror (real object)',
        head: ['Object position', 'Image position', 'Nature', 'Size'],
        rows: [
          ['At infinity', 'At <i>F</i>', 'Real, inverted', 'Point/diminished'],
          ['Beyond <i>C</i>', 'Between <i>F</i> and <i>C</i>', 'Real, inverted', 'Diminished'],
          ['At <i>C</i>', 'At <i>C</i>', 'Real, inverted', 'Same size'],
          ['Between <i>C</i> and <i>F</i>', 'Beyond <i>C</i>', 'Real, inverted', 'Magnified'],
          ['At <i>F</i>', 'At infinity', 'Real, inverted', 'Highly magnified'],
          ['Between <i>F</i> and pole', 'Behind the mirror', 'Virtual, erect', 'Magnified'],
        ],
      },
      {
        t: 'p',
        html: 'A <b>convex mirror</b> gives, for every real object, a virtual, erect, diminished image between the pole and <i>F</i> — the same behaviour as a concave (diverging) lens.',
      },
      { t: 'fig', id: 'p12-09-fig-9.1' },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'proc',
        title: 'The New Cartesian Sign Convention (state this before any numerical)',
        steps: [
          'All distances are measured <b>from the pole</b> <i>P</i>.',
          'Distances measured <b>in the direction of the incident light are positive</b>; opposite to it, <b>negative</b>. (Since the object is always placed in front, on the side the light comes from, real-object <i>u</i> is negative.)',
          'Heights measured <b>above the principal axis are positive</b>, below it negative.',
        ],
      },
      {
        t: 'p',
        html: 'A clean consequence: for a real object, <i>u</i> < 0. A concave mirror has <i>f</i> < 0 and <i>R</i> < 0; a convex mirror has <i>f</i> > 0 and <i>R</i> > 0.',
      },
      { t: 'p', html: '<b>Derivation 1 — The mirror formula 1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>.</b>' },
      {
        t: 'p',
        html: '<b>Setup.</b> Take a concave mirror with pole <i>P</i>, focus <i>F</i>, and an extended object <i>AB</i> standing on the axis beyond <i>C</i>, so that a real, inverted image <i>A′B′</i> forms. We use two rays from the tip <i>B</i>: one parallel to the axis (which reflects through <i>F</i>), and one striking the pole <i>P</i> (which reflects with <i>i</i> = <i>r</i>). We assume <b>paraxial rays and a small aperture</b>, so the foot of the perpendicular from the mirror to the axis is effectively the pole.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — similar triangles from the pole ray.</b> The ray <i>BP</i> reflects to <i>B′P</i> with the principal axis as the “mirror line,” so ∆<i>ABP</i> ∼ ∆<i>A′B′P</i>. Therefore<br><i>A′B′</i>/<i>AB</i> = <i>PA′</i>/<i>PA</i>. (i)',
      },
      {
        t: 'p',
        html: '<b>Step 2 — similar triangles from the parallel ray.</b> The parallel ray from <i>B</i> hits the mirror near the pole and reflects through <i>F</i>. The little triangle it makes at the pole is similar to ∆<i>A′B′F</i>, and because the parallel-ray height equals <i>AB</i> (paraxial), we get<br><i>A′B′</i>/<i>AB</i> = <i>FA′</i>/<i>PF</i>. (ii)',
      },
      {
        t: 'p',
        html: '<b>Step 3 — equate and substitute.</b> From (i) and (ii):<br><i>PA′</i>/<i>PA</i> = <i>FA′</i>/<i>PF</i> = (<i>PA′</i> − <i>PF</i>)/<i>PF</i>.<br>Now bring in the sign convention: <i>PA′</i> = −<i>v</i>, <i>PA</i> = −<i>u</i>, <i>PF</i> = −<i>f</i>. Then <i>FA′</i> = <i>PA′</i> − <i>PF</i> = −<i>v</i> − (−<i>f</i>) = <i>f</i> − <i>v</i>. Substituting,<br>(−<i>v</i>)/(−<i>u</i>) = (<i>f</i> − <i>v</i>)/(−<i>f</i>) ⇒ <i>v</i>/<i>u</i> = (<i>v</i> − <i>f</i>)/<i>f</i> ⇒ <i>vf</i> = <i>uv</i> − <i>uf</i>.',
      },
      {
        t: 'p',
        html: 'Divide throughout by <i>uvf</i>:<br>1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>',
      },
      {
        t: 'p',
        html: 'Although derived for a real image in a concave mirror, the formula is valid for <b>all</b> spherical mirrors and image types once signs are applied consistently — this universality is exactly why the sign convention is non-negotiable.',
      },
      { t: 'fig', id: 'p12-09-fig-9.2' },
      { t: 'p', html: '<b>Derivation 2 — Focal length is half the radius, <i>f</i> = <i>R</i>/2.</b>' },
      {
        t: 'p',
        html: 'Consider a single paraxial ray parallel to the axis striking the concave mirror at point <i>M</i>, a small height above the axis. The normal at <i>M</i> is the radius <i>CM</i>, so the angle of incidence is <i>θ</i> = ∠<i>MCP</i> (alternate angles). By the law of reflection the reflected ray <i>MF</i> makes the exterior angle ∠<i>MFP</i> = 2<i>θ</i>. For paraxial rays <i>M</i> is close to <i>P</i>, so<br>tan <i>θ</i> ≈ <i>MP</i>/<i>PC</i>, tan 2<i>θ</i> ≈ <i>MP</i>/<i>PF</i>.<br>For small angles tan 2<i>θ</i> ≈ 2 tan <i>θ</i>, hence<br><i>MP</i>/<i>PF</i> = (2 <i>MP</i>)/<i>PC</i> ⇒ <i>PC</i> = 2 <i>PF</i> ⇒ <i>R</i> = 2<i>f</i> ⇒ <i>f</i> = <i>R</i>/2.',
      },
      {
        t: 'p',
        html: '<b>Derivation 3 — Magnification <i>m</i> = −<i>v</i>/<i>u</i>.</b> From ∆<i>ABP</i> ∼ ∆<i>A′B′P</i> in Derivation 1, <i>A′B′</i>/<i>AB</i> = <i>PA′</i>/<i>PA</i>. With the sign convention, <i>A′B′</i> = −<i>h</i>′ (image below axis), <i>AB</i> = <i>h</i>, <i>PA′</i> = −<i>v</i>, <i>PA</i> = −<i>u</i>, giving (−<i>h</i>′)/<i>h</i> = (−<i>v</i>)/(−<i>u</i>), i.e. <i>m</i> = <i>h</i>′/<i>h</i> = −<i>v</i>/<i>u</i>.',
      },
      {
        t: 'p',
        html: 'To find an image graphically, draw any two of these four standard rays from a point on the object and see where they (or their backward extensions) meet:',
      },
      {
        t: 'proc',
        title: 'Key Procedure — locating an image by ray diagram',
        steps: [
          'A ray <b>parallel to the principal axis</b> reflects through <i>F</i> (concave) or appears to diverge from <i>F</i> behind the mirror (convex).',
          'A ray <b>through (or aimed at)</b> <i>F</i> reflects back <b>parallel</b> to the axis.',
          'A ray <b>through (or aimed at)</b> <i>C</i> strikes the mirror along its normal and <b>retraces</b> its path.',
          'A ray hitting the <b>pole</b> <i>P</i> reflects symmetrically about the principal axis (<i>i</i> = <i>r</i>).',
        ],
      },
      {
        t: 'p',
        html: 'If the reflected rays themselves intersect, the image is <b>real</b>; if only their extensions behind the mirror meet, it is <b>virtual</b>. Two rays are enough to fix the image — the third is a handy cross-check.',
      },
      { t: 'fig', id: 'p12-09-fig-9.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A concave mirror has a radius of curvature of 30 cm. An object is placed 25 cm in front of it. Find the position, size relative to the object, and nature of the image.',
        steps: [
          '<b>Given:</b> <i>R</i> = −30 cm (concave), so <i>f</i> = <i>R</i>/2 = −15 cm; <i>u</i> = −25 cm.',
          '<b>Mirror formula:</b><br>1/<i>v</i> = 1/<i>f</i> − 1/<i>u</i> = 1/(−15) − 1/(−25) = −1/15 + 1/25 = (−5 + 3)/75 = −2/75.<br><i>v</i> = −37.5 cm.',
          '<b>Magnification:</b> <i>m</i> = −<i>v</i>/<i>u</i> = −(−37.5)/(−25) = −1.5.',
          'Always close with the units and the three descriptors — position, orientation, size.',
        ],
        ans: 'The image is formed 37.5 cm in front of the mirror (real, since <i>v</i> < 0), it is <b>inverted</b> (negative <i>m</i>) and <b>magnified</b> 1.5×.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A convex mirror of focal length 20 cm forms an erect image one-third the size of the object. Where is the object? (a) 20 cm (b) 40 cm (c) 60 cm (d) 80 cm, all in front of the mirror.',
        steps: [
          '<b>The trap:</b> a convex mirror <b>always</b> makes a virtual, erect, diminished image of a real object, so <i>m</i> must be positive and between 0 and 1. The “1/3” therefore means <i>m</i> = +1/3 — not −1/3. Anyone who plugs in a negative <i>m</i> (concave-mirror reflex) lands on the wrong root.',
          '<b>Fast route</b> using <i>m</i> = <i>f</i>/(<i>f</i> − <i>u</i>) with <i>f</i> = +20 cm:<br>1/3 = 20/(20 − <i>u</i>) ⇒ 20 − <i>u</i> = 60 ⇒ <i>u</i> = −40 cm.',
          'The <i>m</i> = <i>f</i>/(<i>f</i> − <i>u</i>) form skips solving for <i>v</i> entirely; in NEET that’s 20 seconds saved.',
        ],
        ans: 'Object is 40 cm in front — <b>(b)</b>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An object on the axis of a concave mirror of focal length 20 cm is at 30 cm and moves toward the mirror at 5 cm s<sup>−1</sup>. Find the speed of the image at that instant. (This stitches the mirror formula together with longitudinal magnification.)',
        steps: [
          '<b>Step 1 — locate the image.</b><br>1/<i>v</i> = 1/<i>f</i> − 1/<i>u</i> = 1/(−20) − 1/(−30) = (−3 + 2)/60 = −1/60 ⇒ <i>v</i> = −60 cm.',
          '<b>Step 2 — longitudinal magnification.</b><br><i>m</i><sub>L</sub> = −(<i>v</i>/<i>u</i>)<sup>2</sup> = −((−60)/(−30))<sup>2</sup> = −(2)<sup>2</sup> = −4.',
          '<b>Step 3 — relate speeds.</b> Differentiating the mirror formula gives the axial image velocity <i>v</i><sub>img</sub> = −(<i>v</i>/<i>u</i>)<sup>2</sup> <i>v</i><sub>obj</sub> = <i>m</i><sub>L</sub> <i>v</i><sub>obj</sub>. So the image speed is |<i>m</i><sub>L</sub>| × 5 = 4 × 5',
          'The negative <i>m</i><sub>L</sub> tells us the image moves in the opposite sense — as the object approaches, the image recedes from the mirror (and enlarges).',
          '<b>Sanity check:</b> the object lies between <i>F</i> and <i>C</i>, where image motion is famously amplified — a factor of 4 is reasonable.',
        ],
        ans: '20 cm s<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A point object on the principal axis is 15 cm in front of a concave mirror of focal length 10 cm. At this instant the object moves with velocity components 3 cm s<sup>−1</sup> along the principal axis (toward the mirror) and 4 cm s<sup>−1</sup> perpendicular to it. Find the magnitude of the image’s velocity.',
        steps: [
          '<b>Step 1 — image position and magnifications.</b><br>1/<i>v</i> = 1/(−10) − 1/(−15) = (−3 + 2)/30 = −1/30 ⇒ <i>v</i> = −30 cm.<br>Lateral magnification <i>m</i> = −<i>v</i>/<i>u</i> = −(−30)/(−15) = −2, so <i>m</i><sup>2</sup> = 4.',
          '<b>Step 2 — split the velocity by direction.</b> The two directions transform by different magnifications — this is the heart of the problem.<br>• <b>Axial component</b> uses longitudinal magnification: |<i>v</i><sub>img,∥</sub>| = <i>m</i><sup>2</sup> × 3 = 4 × 3 = 12 cm s<sup>−1</sup>.<br>• <b>Transverse component</b> uses lateral magnification: |<i>v</i><sub>img,⊥</sub>| = |<i>m</i>| × 4 = 2 × 4 = 8 cm s<sup>−1</sup>.',
          '<b>Step 3 — combine (the two image components are perpendicular):</b><br>|<i>v</i><sub>img</sub>| = √(12<sup>2</sup> + 8<sup>2</sup>) = √(144 + 64) = √208 = 4√13',
          'The classic blunder is applying a single magnification to the whole velocity vector. Axial and transverse motions scale by <i>m</i><sup>2</sup> and |<i>m</i>| respectively, so they must be separated, scaled, then recombined.',
        ],
        ans: '|<i>v</i><sub>img</sub>| ≈ 14.4 cm s<sup>−1</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] An object 4 cm tall is placed 18 cm from a concave mirror of focal length 12 cm. Find the position, height, and nature of the image.',
            a: '<i>v</i> = −36 cm, image 8 cm tall, real, inverted, magnified 2×.',
          },
          {
            q: '[NEET] A convex mirror used as a vehicle’s rear-view mirror has a radius of curvature 3.6 m. A bus is 9 m behind. How far behind the mirror does its image appear, and is it diminished or magnified?',
            a: '≈ 1.5 m behind the mirror, diminished (<i>m</i> ≈ +0.167).',
          },
          {
            q: '[JEE Main] A concave mirror produces a real image five times the size of the object placed 24 cm from the pole. Find the focal length of the mirror.',
            a: '<i>f</i> = −20 cm (i.e. 20 cm, concave).',
          },
          {
            q: '[JEE Main] Two plane mirrors are inclined at 60°. A point object is placed symmetrically between them. How many images are formed?',
            a: '5 images.',
          },
          {
            q: '[JEE Advanced] A plane mirror is rotated by 4° about an axis in its plane while the incident ray is held fixed. By what angle does the reflected ray rotate, and how far does the spot of a reflected laser move on a screen 2.5 m away (the screen initially perpendicular to the reflected ray; assume small-angle conditions)?',
            a: 'Reflected ray rotates 8°; spot shifts ≈ 2.5 × tan 8° ≈ 0.35 m = 35 cm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'An object is placed at the centre of curvature of a concave mirror. The image is:',
        opts: [
          {
            label: 'virtual, erect, same size',
            nudge: 'Distractor <b>(a)</b> tempts students who confuse the object-at-<i>C</i> case with the object-inside-<i>F</i> case (the only situation a concave mirror gives a virtual erect image).',
          },
          { label: 'real, inverted, same size', nudge: null },
          {
            label: 'real, inverted, magnified',
            nudge: '<b>(c)</b> is the object-between-<i>F</i>-and-<i>C</i> result — picked by those who memorise “concave magnifies” without checking position.',
          },
          {
            label: 'virtual, inverted, diminished',
            nudge: '<b>(d)</b> mixes “virtual” with “inverted,” which can never co-occur for a single mirror (virtual images here are always erect).',
          },
        ],
        correct: 1,
        solution: 'At <i>u</i> = <i>R</i> = 2<i>f</i> (all negative for a concave mirror), the mirror formula gives <i>v</i> = <i>R</i> too, so the image forms back at <i>C</i>, real and inverted with |<i>m</i>| = 1.',
      },
      {
        t: 'mcq',
        q: 'For a real object, a convex mirror can form an image that is:',
        opts: [
          {
            label: 'real and magnified',
            nudge: '<b>(a)</b> and <b>(d)</b> fail because a convex mirror cannot form a real image of a real object at all.',
          },
          {
            label: 'virtual and magnified',
            nudge: '<b>(b)</b> trips up students who recall “virtual” correctly but forget that convex always shrinks — magnification stays strictly below 1.',
          },
          { label: 'virtual and diminished', nudge: null },
          {
            label: 'real and diminished',
            nudge: '<b>(a)</b> and <b>(d)</b> fail because a convex mirror cannot form a real image of a real object at all.',
          },
        ],
        correct: 2,
        solution: 'A convex mirror sends real-object rays diverging, so the image is always virtual, erect, and smaller.',
      },
      {
        t: 'mcq',
        q: 'The focal length of a spherical mirror made of glass of refractive index 1.5 is <i>f</i> in air. When fully immersed in water, its focal length becomes:',
        opts: [
          { label: '<i>f</i>', nudge: null },
          {
            label: '1.33<i>f</i>',
            nudge: '<b>(b)</b>, <b>(c)</b> are traps for students importing the lens-maker reflex, where focal length genuinely changes with medium.',
          },
          {
            label: '0.75<i>f</i>',
            nudge: '<b>(b)</b>, <b>(c)</b> are traps for students importing the lens-maker reflex, where focal length genuinely changes with medium.',
          },
          { label: '2<i>f</i>', nudge: '<b>(d)</b> is a random scaling.' },
        ],
        correct: 0,
        solution: 'A mirror’s focal length is <i>f</i> = <i>R</i>/2 — it depends only on geometry, never on the surrounding medium or wavelength. Reflection doesn’t care about refractive index, which is also why mirrors show no chromatic aberration.',
      },
      {
        t: 'mcq',
        q: 'An object approaches a concave mirror from far away toward its focus. As it does so, the real image:',
        opts: [
          { label: 'moves toward the mirror and shrinks', nudge: '<b>(a)</b> reverses the true motion.' },
          { label: 'moves away from the mirror and grows, eventually to infinity', nudge: null },
          {
            label: 'stays fixed at the focus',
            nudge: '<b>(c)</b> confuses “rays from infinity focus at <i>F</i>” (a one-off) with all object positions.',
          },
          {
            label: 'moves toward <i>C</i> and stays the same size',
            nudge: '<b>(d)</b> describes only the single instant when the object passes through <i>C</i>.',
          },
        ],
        correct: 1,
        solution: 'From infinity the image starts at <i>F</i>, small; as the object nears <i>F</i>, <i>v</i> → ∞ and the image races outward, growing without bound — the projector/searchlight regime.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Dropping the sign convention.</b> The most expensive mistake. Plugging <i>u</i> = +25 instead of <i>u</i> = −25 flips the whole answer. Write the signed values first, in a separate line, before touching the formula.',
          '<b>Using <i>f</i> = <i>R</i>/2 blindly for wide mirrors.</b> It is a paraxial result. In a problem that explicitly involves a large-aperture mirror or spherical aberration, this relation is only approximate.',
          '<b>Wrong sign of <i>f</i> for convex mirrors.</b> Convex ⇒ <i>f</i> > 0. A surprising number of “real image from a convex mirror” answers trace back to a stray minus sign here.',
          '<b>Mixing up the three magnifications.</b> Lateral is <i>m</i> = −<i>v</i>/<i>u</i>; longitudinal is −<i>m</i><sup>2</sup>; areal is <i>m</i><sup>2</sup>. In velocity-of-image problems, the axial part scales by <i>m</i><sup>2</sup> and the transverse part by |<i>m</i>| — never the same factor.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Skip solving for <i>v</i> when magnification is given: use <i>m</i> = <i>f</i>/(<i>f</i> − <i>u</i>) directly. And keep a one-line nature check ready — for a real object, a concave mirror gives a real inverted image <b>only</b> when the object is beyond <i>F</i>; place it inside <i>F</i> and the image is virtual, erect, magnified (convex mirror: virtual, erect, diminished). This rule eliminates two MCQ options instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Laws of reflection', note: '<i>i</i> = <i>r</i>; incident ray, reflected ray, normal are coplanar.' },
          {
            f: 'Geometry',
            note: '<i>f</i> = <i>R</i>/2. Concave: <i>f</i>, <i>R</i> < 0. Convex: <i>f</i>, <i>R</i> > 0. Real object: <i>u</i> < 0.',
          },
          { f: 'Mirror formula', note: '1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>.' },
          {
            f: 'Magnifications',
            note: 'lateral <i>m</i> = −<i>v</i>/<i>u</i> = <i>f</i>/(<i>f</i> − <i>u</i>); longitudinal −<i>m</i><sup>2</sup>; areal <i>m</i><sup>2</sup>. Sign of <i>m</i>: + erect/virtual, − inverted/real.',
          },
          {
            f: 'Deviation',
            note: 'single reflection <i>δ</i> = 180° − 2<i>i</i>; rotate mirror by <i>θ</i> ⇒ reflected ray turns 2<i>θ</i>.',
          },
          {
            f: 'Two mirrors at <i>θ</i>',
            note: 'images via <i>N</i> = 360°/<i>θ</i>. <b>Newton:</b> <i>x</i><sub>1</sub><i>x</i><sub>2</sub> = <i>f</i><sup>2</sup>. Mirror <i>f</i> is medium- and colour-independent (no chromatic aberration).',
          },
        ],
        aids: [
          '“Real is negative” — real objects and real images sit in front of the mirror, where distances are negative.',
          '“Concave caves in, convex bulges out” (match to the steel-spoon test).',
          '“PUF–VUF”: jot <b>P</b>ositions, then <b>U</b>, <b>F</b>, then solve for <b>V</b> — signs first, algebra second.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 567–576 ─────────────────────────
  {
    n: '02',
    title: 'Refraction and Total Internal Reflection',
    kalam: 'Crucially, when light enters a denser medium it bends toward the normal; entering a rarer medium it bends away.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield pair. <b>JEE Main</b> reliably carries 1–2 questions (Snell’s law, lateral/normal shift, critical angle, optical-fibre numerical aperture). <b>NEET</b> favours the conceptual side — apparent depth, critical-angle comparisons, mirage/diamond reasoning. <b>JEE Advanced</b> hides TIR inside multi-interface problems (fibres, prisms, cones of light). <b>CBSE Boards</b> love the apparent-depth and critical-angle derivations and a 1–2 mark “why does a diamond sparkle / why does a star twinkle” question.',
      },
      { t: 'p', html: '<b>Refraction</b>' },
      {
        t: 'p',
        html: 'Imagine a marching band crossing from a paved road onto soft sand at an angle. The row of players doesn’t stop, but the moment the first foot hits the sand it slows down, while the player still on the road keeps marching fast — so the whole line <b>pivots</b> and changes direction. Light does exactly this. When it crosses from one transparent medium into another, its <b>speed changes</b>, and if it strikes the boundary at an angle, the beam bends. This bending is <b>refraction</b>, and it is the reason a straw in a glass of nimbu paani looks snapped at the surface, and why the bottom of a swimming pool always seems shallower than it really is.',
      },
      {
        t: 'p',
        html: 'How much does light slow down? That’s captured by the <b>refractive index</b> <i>n</i> of the medium: <i>n</i> = <i>c</i>/<i>v</i>, the ratio of light’s speed in vacuum to its speed in the material. Air is essentially <i>n</i> = 1, water <i>n</i> = 1.33, ordinary glass <i>n</i> = 1.5, and diamond a hefty <i>n</i> = 2.42. A bigger <i>n</i> means slower light and <b>stronger bending</b>. Crucially, when light enters a denser medium it bends toward the normal; entering a rarer medium it bends away. The rule that ties the two angles together is <b>Snell’s law</b>: <i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>. (You’ll also see the index written <i>μ</i> in coaching books — same quantity.)',
      },
      {
        t: 'p',
        html: 'One subtle but exam-critical fact: when light slows down on entering glass, its <b>frequency stays the same</b> — frequency is fixed by the source. What changes is the speed and hence the <b>wavelength</b> (<i>λ</i> = <i>λ</i><sub>0</sub>/<i>n</i>). Colour is set by frequency, so a red laser stays red underwater even though its wavelength shrinks.',
      },
      {
        t: 'p',
        html: 'Refraction also stages a few quiet everyday tricks worth knowing for boards. Because the atmosphere’s density — and hence its refractive index — falls with altitude, light from the rising or setting Sun bends gradually toward the Earth. The result: we glimpse the Sun <b>about two minutes before</b> it actually reaches the horizon at dawn and for roughly <b>two minutes after</b> it has set at dusk, and near the horizon the Sun looks slightly <b>flattened</b> because its lower edge is lifted more than its upper. That same restless, fluctuating refraction in turbulent air is why <b>stars twinkle</b>, while the nearer, broader planets shine steadier.',
      },
      { t: 'p', html: '<b>Total internal reflection</b>' },
      {
        t: 'p',
        html: 'Now flip the journey: send light from a <b>denser medium toward a rarer one</b> (glass to air, water to air). It bends away from the normal, so as you increase the angle of incidence, the refracted ray leans flatter and flatter against the surface. <b>Think about it this way…</b> picture a torch underwater, slowly tilting upward. At a special incidence angle — the <b>critical angle</b> <i>C</i> — the refracted ray lies exactly along the surface (<i>r</i> = 90°). Tilt even a hair more, and there is simply no valid refracted ray left for Snell’s law to produce. With nowhere to go, <b>all</b> the light bounces back into the denser medium. This is <b>total internal reflection (TIR)</b> — a perfect mirror made of nothing but a boundary.',
      },
      {
        t: 'p',
        html: 'TIR is everywhere in Indian daily life and technology: the dazzling sparkle of a <b>diamond</b> (its tiny critical angle of 24° traps light inside, ricocheting it around before release), the shimmering <b>mirage</b> on a hot highway near Nagpur in summer (hot, less-dense air near the road bends skylight up into TIR, so the road looks wet), the <b>optical fibres</b> carrying your internet, and the <b>totally-reflecting prisms</b> inside binoculars and periscopes.',
      },
      {
        t: 'p',
        html: 'There’s a beautiful flip side for anyone underwater. Looking up from below a still pond, a fish — or a diver — sees the <b>entire</b> 180° <b>world above the surface squeezed into one bright circular window</b> whose half-angle equals the critical angle (≈ 48.6° for water). Outside that circle the surface behaves like a mirror, reflecting the pool bed back down. This “optical manhole,” called <b>Snell’s window</b>, is exactly the cone of escape seen in reverse — the same geometry, looking the other way.',
      },
      {
        t: 'p',
        html: 'Why do periscopes, binoculars, and high-quality cameras prefer totally-reflecting prisms over ordinary silvered mirrors? Because TIR reflects <b>100% of the light</b> — there is no metal coating to absorb a slice of the beam, nothing to tarnish or peel over time, and no faint secondary “ghost” image from the front glass surface that plagues back-silvered mirrors. A boundary that costs nothing and never wears out is hard to beat, which is exactly why images formed by TIR look noticeably brighter than those from mirrors or lenses.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Snell’s law assumes smooth, homogeneous media and a sharp boundary. The apparent-depth result <i>d</i>′ = <i>d</i>/<i>n</i> holds only for <b>near-normal (paraxial) viewing</b> — look at the pool steeply from the side and the simple formula breaks. TIR has <b>two non-negotiable conditions</b>: light must travel from denser to rarer (<i>n</i><sub>1</sub> > <i>n</i><sub>2</sub>), and the angle of incidence must exceed the critical angle. Miss either, and you get ordinary partial refraction, not total reflection.',
      },
      { t: 'fig', id: 'p12-09-fig-9.4' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Refractive index (absolute)',
        main: '<i>n</i> = <i>c</i>/<i>v</i>',
        legend: [],
        note: 'ratio of speed of light in vacuum (<i>c</i>) to speed in the medium (<i>v</i>). Dimensionless, [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Relative refractive index',
        main: '<i>n</i><sub>21</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Snell’s law (law of refraction)',
        main: '<i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>',
        legend: ['<i>i</i> = angle of incidence', '<i>r</i> = angle of refraction'],
        note: 'both measured <b>from the normal</b>.',
      },
      {
        t: 'formula',
        kicker: 'Wavelength in a medium',
        main: '<i>λ</i> = <i>λ</i><sub>0</sub>/<i>n</i>',
        legend: [],
        note: '(frequency unchanged)',
      },
      {
        t: 'formula',
        kicker: 'Apparent depth (near-normal viewing, object in denser medium seen from rarer)',
        main: 'apparent depth = (real depth)/<i>n</i><br>apparent shift = <i>d</i>(1 − 1/<i>n</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Normal shift produced by a slab of thickness <i>t</i>',
        main: 'Δ = <i>t</i>(1 − 1/<i>n</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Lateral shift through a parallel slab',
        main: '<i>d</i> = (<i>t</i> sin(<i>i</i> − <i>r</i>))/cos <i>r</i>',
        legend: [
          '<i>t</i> = slab thickness',
          '<i>d</i> = perpendicular displacement of the emergent ray (which stays parallel to the incident ray)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Critical angle',
        main: 'sin <i>C</i> = <i>n</i><sub>rarer</sub>/<i>n</i><sub>denser</sub><br>rarer = air: sin <i>C</i> = 1/<i>n</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Conditions for TIR',
        main: '(1) light travels from denser to rarer medium; (2) angle of incidence <i>i</i> > <i>C</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Numerical aperture of an optical fibre (core <i>n</i><sub>1</sub>, cladding <i>n</i><sub>2</sub>)',
        main: 'NA = sin <i>θ</i><sub>max</sub> = √(<i>n</i><sub>1</sub><sup>2</sup> − <i>n</i><sub>2</sub><sup>2</sup>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Radius of the circle of light (cone of escape) from a point source at depth <i>h</i> in a denser medium',
        main: '<i>r</i> = <i>h</i> tan <i>C</i> = <i>h</i>/√(<i>n</i><sup>2</sup> − 1)',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'All angles are dimensionless. The <b>optical path length</b> = <i>n</i> × (geometric path) has the dimension of length, [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>].',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Stating the laws of refraction.</b> (i) The incident ray, refracted ray, and normal at the point of incidence are coplanar. (ii) For a given pair of media and colour, sin <i>i</i>/sin <i>r</i> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = constant (Snell’s law). Always measure angles from the <b>normal</b>, never from the surface. Snell’s law itself is taken as experimental here; its wave-theory proof belongs to Wave Optics.',
      },
      {
        t: 'p',
        html: '<b>Derivation 1 — Critical-angle expression.</b> Consider light passing from a denser medium (index <i>n</i>) into air. By Snell’s law, <i>n</i> sin <i>i</i> = (1) sin <i>r</i>. As <i>i</i> grows, so does <i>r</i>, and the refracted ray bends away from the normal. The largest possible angle of refraction is <i>r</i> = 90° (refracted ray grazing the surface); the incidence angle at which this happens is the critical angle <i>C</i>. Substituting <i>i</i> = <i>C</i>, <i>r</i> = 90°:<br><i>n</i> sin <i>C</i> = sin 90° = 1 ⇒ sin <i>C</i> = 1/<i>n</i>.<br>For incidence beyond <i>C</i>, Snell’s law would demand sin <i>r</i> > 1, which is impossible — so no refraction can occur and the light is <b>totally internally reflected</b>. This is why TIR requires the denser-to-rarer direction: only then can sin <i>r</i> exceed sin <i>i</i> and hit the wall of 90°.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Apparent depth and normal shift.</b> Let a point object <i>O</i> sit at real depth <i>d</i> below the surface of a medium of index <i>n</i>, viewed from the air directly above using near-normal rays. A ray from <i>O</i> meets the surface at a small horizontal offset <i>x</i>, making angle <i>θ</i><sub>1</sub> in the medium and <i>θ</i><sub>2</sub> in air. Snell’s law (medium → air): <i>n</i> sin <i>θ</i><sub>1</sub> = sin <i>θ</i><sub>2</sub>. For paraxial rays sin <i>θ</i> ≈ tan <i>θ</i>, so <i>n</i> tan <i>θ</i><sub>1</sub> = tan <i>θ</i><sub>2</sub>. From the geometry, tan <i>θ</i><sub>1</sub> = <i>x</i>/<i>d</i> (real depth) and tan <i>θ</i><sub>2</sub> = <i>x</i>/<i>d</i>′ (apparent depth <i>d</i>′). Therefore<br><i>n</i> · <i>x</i>/<i>d</i> = <i>x</i>/<i>d</i>′ ⇒ <i>d</i>′ = <i>d</i>/<i>n</i>.<br>The object appears <b>raised</b> by <i>d</i> − <i>d</i>′ = <i>d</i>(1 − 1/<i>n</i>). The same algebra applied to a glass slab of thickness <i>t</i> resting over an object gives the <b>normal shift</b> Δ = <i>t</i>(1 − 1/<i>n</i>) — the slab seems to lift whatever lies beneath it by this amount.',
      },
      { t: 'fig', id: 'p12-09-fig-9.5' },
      {
        t: 'p',
        html: '<b>Derivation 3 — Lateral shift through a parallel-sided slab.</b> A ray strikes a slab (index <i>n</i>, thickness <i>t</i>) at angle <i>i</i>, refracts to angle <i>r</i>, crosses the slab, and emerges from the parallel far face. Because the two faces are parallel, the emergent ray is <b>parallel to the incident ray</b> but displaced sideways. The path length inside the slab is <i>t</i>/cos <i>r</i>. The perpendicular (lateral) displacement between the original direction and the emergent ray is that path length times sin(<i>i</i> − <i>r</i>):<br><i>d</i> = (<i>t</i> sin(<i>i</i> − <i>r</i>))/cos <i>r</i>.<br>The shift grows with thickness, with incidence angle, and with refractive index — a thick, dense slab at a steep angle displaces the beam most.',
      },
      {
        t: 'p',
        html: '<b>Derivation 4 — Relative index and the principle of reversibility.</b> Applying Snell’s law from medium 1 into medium 2, <i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>, the relative index is <i>n</i><sub>21</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = sin <i>i</i>/sin <i>r</i>. Now reverse the ray: light retraces its path, so going from medium 2 back into medium 1 the roles of <i>i</i> and <i>r</i> swap, giving <i>n</i><sub>12</sub> = sin <i>r</i>/sin <i>i</i> = 1/<i>n</i><sub>21</sub>. Hence<br><i>n</i><sub>12</sub><i>n</i><sub>21</sub> = 1.<br>The refractive indices of a pair of media, taken in opposite order, are reciprocals. This <b>principle of reversibility</b> — that a light ray traces the same path when its direction is reversed — quietly powers many exam shortcuts, from swapping object and image to treating the two parallel faces of a slab symmetrically.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A coin lies at the bottom of a beaker filled with water (<i>n</i> = 4/3) to a depth of 24 cm. To an observer looking straight down, how deep does the coin appear, and by how much does it seem to rise?',
        steps: [
          '<b>Given:</b> real depth <i>d</i> = 24 cm, <i>n</i> = 4/3.',
          '<b>Apparent depth:</b><br><i>d</i>′ = <i>d</i>/<i>n</i> = 24/(4/3) = 24 × 3/4 = 18 cm.',
          '<b>Apparent rise:</b> <i>d</i> − <i>d</i>′ = 24 − 18 = 6 cm.',
          '(<b>Sanity check:</b> the apparent shift equals <i>d</i>(1 − 1/<i>n</i>) = 24(1 − 3/4) = 6 cm. ✓)',
        ],
        ans: 'The coin appears 18 cm below the surface, raised by 6 cm.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A ray inside a glass block strikes the glass–air face at 45°. For which of these glasses does it undergo total internal reflection? (a) <i>n</i> = 1.30 (b) <i>n</i> = 1.40 (c) <i>n</i> = 1.50 (d) it never can.',
        steps: [
          '<b>The shortcut:</b> TIR at 45° needs 45° > <i>C</i>, i.e. sin 45° > sin <i>C</i> = 1/<i>n</i>. So 1/√2 > 1/<i>n</i> ⇒ <i>n</i> > √2 ≈ 1.414. <b>Don’t compute a critical angle for each option</b> — just compare <i>n</i> to √2. Only <i>n</i> = 1.50 clears the bar.',
          '<b>The trap:</b> students laboriously find <i>C</i> = arcsin(1/<i>n</i>) three times; the “compare to √2” reflex (the standard 45° totally-reflecting-prism condition) saves all of it.',
        ],
        ans: '<b>(c)</b>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A ray of light is incident at 60° on a parallel glass slab of refractive index √3 and thickness 9 cm. Find (a) the angle of refraction and (b) the lateral shift of the emergent beam. (Combines Snell’s law with slab geometry.)',
        steps: [
          '<b>Step 1 — angle of refraction (Snell):</b><br>sin 60° = √3 sin <i>r</i> ⇒ sin <i>r</i> = (√3/2)/√3 = 1/2 ⇒ <i>r</i> = 30°.',
          '<b>Step 2 — lateral shift:</b><br><i>d</i> = (<i>t</i> sin(<i>i</i> − <i>r</i>))/cos <i>r</i> = (9 × sin 30°)/cos 30° = (9 × 1/2)/(√3/2) = 9/√3 = 3√3 ≈ 5.20 cm.',
          'Note the clean collapse sin(<i>i</i> − <i>r</i>)/cos <i>r</i> = tan 30° when <i>i</i> − <i>r</i> = <i>r</i> — a useful flag that the geometry simplified.',
        ],
        ans: '(a) <i>r</i> = 30°; (b) lateral shift ≈ 5.20 cm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p12-09-fig-9.6',
        q: 'A step-index optical fibre has a core of refractive index <i>n</i><sub>1</sub> = 1.50 and cladding of index <i>n</i><sub>2</sub> = 1.46. Derive and evaluate the <b>acceptance angle</b> — the maximum half-angle of the cone of light (entering from air) that the fibre will guide by total internal reflection.',
        steps: [
          '<b>Reasoning across two interfaces.</b> Light enters the flat end face from air at angle <i>θ</i> to the axis and refracts to angle <i>α</i> inside the core. It then strikes the core–cladding wall at angle (90° − <i>α</i>) to that wall’s normal. For guiding, this wall angle must be <b>at least the critical angle</b> <i>C</i> for the core–cladding pair:<br>90° − <i>α</i> ≥ <i>C</i>, where sin <i>C</i> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>.',
          'The limiting case is 90° − <i>α</i> = <i>C</i>, i.e. <i>α</i> = 90° − <i>C</i>, so sin <i>α</i> = cos <i>C</i> = √(1 − sin<sup>2</sup> <i>C</i>) = √(1 − <i>n</i><sub>2</sub><sup>2</sup>/<i>n</i><sub>1</sub><sup>2</sup>).',
          '<b>Snell at the entry face</b> (air → core): sin <i>θ</i><sub>max</sub> = <i>n</i><sub>1</sub> sin <i>α</i> = <i>n</i><sub>1</sub>√(1 − <i>n</i><sub>2</sub><sup>2</sup>/<i>n</i><sub>1</sub><sup>2</sup>) = √(<i>n</i><sub>1</sub><sup>2</sup> − <i>n</i><sub>2</sub><sup>2</sup>) = NA.',
          '<b>Evaluate:</b><br>NA = √(1.50<sup>2</sup> − 1.46<sup>2</sup>) = √(2.25 − 2.1316) = √0.1184 ≈ 0.344.<br><i>θ</i><sub>max</sub> = arcsin(0.344) ≈ 20.1°.',
          'The elegance here is that the messy two-interface chain collapses to the compact result NA = √(<i>n</i><sub>1</sub><sup>2</sup> − <i>n</i><sub>2</sub><sup>2</sup>).',
        ],
        ans: 'Only rays entering within about a 20° half-cone of the axis are trapped and guided — which is exactly why fibre connectors must be precisely aligned.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Light travels from air into a glass plate of refractive index 1.5. If the speed of light in vacuum is 3 × 10<sup>8</sup> m s<sup>−1</sup>, find its speed and wavelength inside the glass for light of vacuum wavelength 600 nm.',
            a: '<i>v</i> = 2 × 10<sup>8</sup> m s<sup>−1</sup>, <i>λ</i> = 400 nm.',
          },
          {
            q: '[NEET] The critical angle for a certain glass–air interface is 42°. Will a ray inside this glass undergo total internal reflection if it strikes the surface at 40°? At 50°? Give a one-line reason for each.',
            a: 'At 40°: no (less than <i>C</i>, ray partly refracts out). At 50°: yes (> <i>C</i>, denser→rarer).',
          },
          {
            q: '[JEE Main] A microscope is focused on a mark on a table. When a glass slab 6 cm thick (<i>n</i> = 1.5) is placed over the mark, by how much must the microscope be raised to refocus?',
            a: 'Raise by Δ = <i>t</i>(1 − 1/<i>n</i>) = 6(1 − 2/3) = 2 cm.',
          },
          {
            q: '[JEE Main] A ray strikes a 4 cm thick parallel glass slab (<i>n</i> = 1.5) at an angle of incidence 60°. Find the lateral displacement of the emergent ray.',
            a: '<i>d</i> = (4 sin(60° − <i>r</i>))/cos <i>r</i> with <i>r</i> = arcsin(sin 60°/1.5) ≈ 35.3° ⇒ <i>d</i> ≈ 2.05 cm.',
          },
          {
            q: '[JEE Advanced] A small lamp lies at the bottom of a pool of water (<i>n</i> = 4/3), 2.0 m deep. Find the radius and area of the bright circle of light seen on the surface from above, outside which the surface looks totally reflecting.',
            a: '<i>r</i> = <i>h</i>/√(<i>n</i><sup>2</sup> − 1) = 2/(√7/3) = 6/√7 ≈ 2.27 m; area = π<i>r</i><sup>2</sup> ≈ 16.2 m<sup>2</sup>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A ray of light passes from medium 1 into medium 2 and bends toward the normal. Which statement is certainly true?',
        opts: [
          {
            label: '<i>v</i><sub>1</sub> < <i>v</i><sub>2</sub>',
            nudge: '<b>(a)</b> is backwards: in the denser medium light is slower, <i>v</i><sub>2</sub> < <i>v</i><sub>1</sub>.',
          },
          { label: 'medium 2 is optically denser', nudge: null },
          {
            label: 'the frequency increases in medium 2',
            nudge: '<b>(c)</b> is a classic error — frequency never changes on refraction. Picking (c) or (d) signals the “everything changes” misconception.',
          },
          {
            label: 'the wavelength increases in medium 2',
            nudge: '<b>(d)</b> is also wrong: in a denser medium <i>λ</i> decreases (<i>λ</i> = <i>λ</i><sub>0</sub>/<i>n</i>). Picking (c) or (d) signals the “everything changes” misconception.',
          },
        ],
        correct: 1,
        solution: 'Bending toward the normal means <i>r</i> < <i>i</i>, so by Snell’s law <i>n</i><sub>2</sub> > <i>n</i><sub>1</sub> — medium 2 is denser.',
      },
      {
        t: 'mcq',
        q: 'Total internal reflection can occur when light travels from:',
        opts: [
          {
            label: 'air to glass',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all go rarer → denser, where the ray bends toward the normal and can always refract out — no critical angle exists.',
          },
          {
            label: 'air to water',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all go rarer → denser, where the ray bends toward the normal and can always refract out — no critical angle exists.',
          },
          { label: 'glass to water', nudge: null },
          {
            label: 'water to glass',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> all go rarer → denser, where the ray bends toward the normal and can always refract out — no critical angle exists. Students who only memorise “glass and water” without tracking direction fall for (d).',
          },
        ],
        correct: 2,
        solution: 'TIR needs denser → rarer. Glass (<i>n</i> ≈ 1.5) to water (<i>n</i> ≈ 1.33) qualifies.',
      },
      {
        t: 'mcq',
        q: 'The critical angle for a medium with respect to air is 30°. Its refractive index is:',
        opts: [
          {
            label: '0.5',
            nudge: '<b>(a)</b> comes from writing <i>n</i> = sin <i>C</i> (formula inverted — and an index below 1 should immediately look impossible for a denser medium).',
          },
          { label: '√3', nudge: '<b>(b)</b> and <b>(d)</b> arise from confusing sin, cos, or tan of 30°.' },
          { label: '2', nudge: null },
          { label: '2/√3', nudge: '<b>(b)</b> and <b>(d)</b> arise from confusing sin, cos, or tan of 30°.' },
        ],
        correct: 2,
        solution: 'sin <i>C</i> = 1/<i>n</i> ⇒ <i>n</i> = 1/sin 30° = 1/0.5 = 2. A quick sanity rule: a smaller critical angle means a larger <i>n</i> (diamond’s 24° ⇒ <i>n</i> = 2.42).',
      },
      {
        t: 'mcq',
        q: 'A diamond (<i>n</i> = 2.42) sparkles far more than an equally well-cut glass imitation (<i>n</i> = 1.5) mainly because:',
        opts: [
          { label: 'diamond reflects all colours', nudge: '<b>(a)</b> and <b>(c)</b> are irrelevant to sparkle.' },
          { label: 'diamond has a much smaller critical angle, so light undergoes TIR more readily inside it', nudge: null },
          { label: 'diamond absorbs less light', nudge: '<b>(a)</b> and <b>(c)</b> are irrelevant to sparkle.' },
          {
            label: 'diamond disperses light less',
            nudge: '<b>(d)</b> is actually false (diamond disperses more, adding the fire of colour) and confuses dispersion with the brilliance that TIR produces.',
          },
        ],
        correct: 1,
        solution: 'Diamond’s tiny critical angle (≈ 24° vs glass’s ≈ 42°) means light striking its internal faces almost always exceeds <i>C</i> and is totally internally reflected, bouncing around before escaping in brilliant flashes.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Measuring angles from the surface, not the normal.</b> Snell’s law uses angles to the normal. A ray “at 30° to the surface” has <i>i</i> = 60°. This single slip wrecks otherwise perfect solutions.',
          '<b>Forgetting the direction requirement for TIR.</b> TIR is impossible rarer → denser. Always check the medium order before hunting for a critical angle.',
          '<b>Inverting the critical-angle formula.</b> It is sin <i>C</i> = 1/<i>n</i>, not <i>n</i> = sin <i>C</i>. If you ever get <i>n</i> < 1 for a real material, you’ve flipped it.',
          '<b>Assuming apparent depth works at any viewing angle.</b> <i>d</i>′ = <i>d</i>/<i>n</i> is a near-normal result. Steep, oblique viewing needs the full Snell geometry.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Two reflexes worth memorising. (1) For the standard 45° totally-reflecting prism, TIR happens iff <i>n</i> > √2 ≈ 1.414 — skip the per-case critical angle. (2) Relate <i>C</i> and <i>n</i> qualitatively: small <i>C</i> ⇔ large <i>n</i>. This lets you eliminate MCQ options on sight (a 24° critical angle must belong to a high-index material like diamond).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Refractive index',
            note: '<i>n</i> = <i>c</i>/<i>v</i>; relative <i>n</i><sub>21</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>. On refraction, frequency is fixed; <i>λ</i> = <i>λ</i><sub>0</sub>/<i>n</i>.',
          },
          {
            f: 'Snell’s law',
            note: '<i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i> (angles from the normal). Denser ⇒ bend toward normal; rarer ⇒ bend away.',
          },
          {
            f: '<b>Apparent depth</b> = (real depth)/<i>n</i>; <b>normal shift</b> = <i>t</i>(1 − 1/<i>n</i>); <b>lateral shift</b> = (<i>t</i> sin(<i>i</i> − <i>r</i>))/cos <i>r</i>.',
            note: '',
          },
          {
            f: 'Critical angle',
            note: 'sin <i>C</i> = 1/<i>n</i>. <b>TIR conditions:</b> denser → rarer <b>and</b> <i>i</i> > <i>C</i>.',
          },
          {
            f: 'Optical fibre',
            note: 'NA = sin <i>θ</i><sub>max</sub> = √(<i>n</i><sub>1</sub><sup>2</sup> − <i>n</i><sub>2</sub><sup>2</sup>). <b>Cone of escape:</b> <i>r</i> = <i>h</i>/√(<i>n</i><sup>2</sup> − 1).',
          },
        ],
        aids: [
          '“Slower → bends toward” — entering a denser (slower) medium, the ray bends toward the normal.',
          '“Denser to rarer, and over the critical” — both boxes must be ticked for TIR.',
          '“Small angle, big index” — a small critical angle means a large refractive index.',
        ],
      },
    ],
  },
];
