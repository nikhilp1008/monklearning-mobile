import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Additional Topics A to F, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 612, set at
 * the head of Addendum A), then A Refraction Across Multiple and Curved
 * Boundaries (pp. 612 to 616; its practice answers end at the top of p. 616),
 * B Advanced Mirror-Lens Combinations and Silvered Elements (pp. 616 to 620;
 * its last answer is at the top of p. 620), C Chromatic Aberration and
 * Achromatic Systems (pp. 620 to 624; its last answer is at the top of
 * p. 624), D Advanced Prism Situations (pp. 624 to 626), E Advanced Image
 * Velocity and Rotating Systems (pp. 627 to 630; its answers end at the top of
 * p. 630) and F Advanced Optical Instruments and Resolving Power (pp. 630 to
 * 633). Each addendum prints its own practice problems and answers, which are
 * its Practice part. These pages print no drawings: every equation is typeset.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 612–616 ─────────────────────────
  {
    n: 'A',
    title: 'Refraction Across Multiple and Curved Boundaries',
    extra: true,
    kalam: 'Treat the image formed by surface 1 as the object for surface 2.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the complete toolkit for single optical elements: the mirror and lens formulae, Snell’s law, the lens-maker’s equation, prism geometry, and the two standard optical instruments. What it treats only briefly are the systems that combine these elements: refraction through several boundaries in a row (Addendum A), silvered lenses and mirror-lens chains (Addendum B), the chromatic-correction problem that plagues real lenses (Addendum C), the prism situations that go beyond minimum deviation (Addendum D), the velocity-and-rotation problems that JEE Advanced likes to set as multi-concept traps (Addendum E), and the resolving power and adjustment of optical instruments (Addendum F). Each addendum marries two things the chapter teaches separately, exactly as a strong JEE paper does.',
      },
      {
        t: 'p',
        html: 'The chapter handles refraction at a single flat surface (slab) and at a single spherical surface, and puts two surfaces in series only for the thin lens (lens-maker derivation) and a parallel beam through a glass sphere (Topic 03, worked example 4). JEE Advanced regularly strings two or more refracting surfaces together — a glass sphere viewed from outside, a fish seen through the water and the glass wall of an aquarium, a rod with one spherical and one flat end. The method is always the same: apply the single-surface relation twice, tracking the image from the first surface into the second, and carry the sign of each radius carefully.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Two-surface refraction (object in medium <i>n</i><sub>0</sub>, through surface 1 into <i>n</i><sub>1</sub>, through surface 2 into <i>n</i><sub>2</sub>).</b> Treat the image formed by surface 1 as the object for surface 2. Work entirely with the signed distances from each surface’s pole.<br><br>For a spherical drop or sphere viewed from a medium: apply surface 1 (air → glass), find the intermediate image, then apply surface 2 (glass → air) treating that intermediate image as the object. The key is that the second surface’s radius sign flips relative to the first because the centre of curvature is on the opposite side.',
      },
      {
        t: 'p',
        html: '<b>Apparent depth through multiple media.</b> If a layer of thickness <i>t</i><sub>1</sub> with index <i>n</i><sub>1</sub> sits over a layer of thickness <i>t</i><sub>2</sub> with index <i>n</i><sub>2</sub> over the object, the apparent depth is the sum of individual apparent contributions:<br><i>d</i>′ = <i>t</i><sub>1</sub>/<i>n</i><sub>1</sub> + <i>t</i><sub>2</sub>/<i>n</i><sub>2</sub>.<br>The total apparent shift is <i>d</i> − <i>d</i>′.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> Each term <i>t</i>/<i>n</i> has units (m)/(dimensionless) = m. Sum is in metres. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Glass Sphere Seen from Air',
        q: 'A solid glass sphere of radius <i>R</i> = 6 cm and refractive index <i>n</i> = 1.5 is placed in air. A point object <i>O</i> is on the axis, 18 cm from the near surface. Find the position of the final image.',
        steps: [
          '<b>Step 1 — Surface 1 (air → glass, convex, <i>R</i><sub>1</sub> = +6 cm).</b> Object at <i>u</i><sub>1</sub> = −18 cm.<br><i>n</i>/<i>v</i><sub>1</sub> − 1/<i>u</i><sub>1</sub> = (<i>n</i> − 1)/<i>R</i><sub>1</sub> ⟹ 1.5/<i>v</i><sub>1</sub> − 1/(−18) = 0.5/6.<br>1.5/<i>v</i><sub>1</sub> + 1/18 = 1/12 ⟹ 1.5/<i>v</i><sub>1</sub> = 1/12 − 1/18 = (3 − 2)/36 = 1/36.<br><i>v</i><sub>1</sub> = 1.5 × 36 = 54 cm.',
          'The intermediate image <i>I</i><sub>1</sub> would form 54 cm from surface 1. Since the diameter of the sphere is 2<i>R</i> = 12 cm, this is 54 − 12 = 42 cm beyond surface 2, outside the sphere.',
          '<b>Step 2 — Surface 2 (glass → air, concave from inside, <i>R</i><sub>2</sub> = −6 cm).</b> The sphere is 2<i>R</i> = 12 cm thick, so <i>I</i><sub>1</sub> lies 54 − 12 = 42 cm beyond surface 2. It is a virtual object for surface 2: <i>u</i><sub>2</sub> = +42 cm (positive because it lies on the outgoing side of surface 2).<br>1/<i>v</i><sub>2</sub> − 1.5/42 = (1 − 1.5)/(−6) = −0.5/(−6) = 1/12.<br>1/<i>v</i><sub>2</sub> = 1/12 + 1.5/42 = 1/12 + 1/28 = (7 + 3)/84 = 5/42.<br><i>v</i><sub>2</sub> = 42/5 = 8.4 cm.',
          'The positive <i>v</i><sub>2</sub> places the final image 8.4 cm outside the sphere on the far side.',
          '<b>Check.</b> A glass ball behaves as a converging element. Surface 1 alone would bring the rays to a focus at 54 cm; the power of each surface is (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>, which is +0.5/6 cm<sup>−1</sup> for surface 1 and (1 − 1.5)/(−6) = +0.5/6 cm<sup>−1</sup> for surface 2. Both surfaces converge the light, so surface 2 pulls the image in from the virtual position 42 cm behind it to a real image only 8.4 cm beyond the sphere.',
        ],
        ans: 'Final image is real, 8.4 cm beyond the sphere’s far surface.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Fish Seen Through Plane Glass',
        q: 'A fish is 40 cm from the glass wall of a water tank (<i>n</i><sub>w</sub> = 4/3); the wall is 5 cm thick (<i>n</i><sub>g</sub> = 1.5). An observer outside looks through the wall at normal incidence. How far behind the outer glass surface does the fish appear?',
        steps: [
          '<b>Step 1 — Water to glass (plane surface, <i>R</i> = ∞).</b> Apply single-surface formula with <i>R</i> = ∞:<br><i>n</i><sub>g</sub>/<i>v</i><sub>1</sub> − <i>n</i><sub>w</sub>/<i>u</i><sub>1</sub> = (<i>n</i><sub>g</sub> − <i>n</i><sub>w</sub>)/∞ = 0 ⟹ 1.5/<i>v</i><sub>1</sub> = <i>n</i><sub>w</sub>/<i>u</i><sub>1</sub> = (4/3)/(−40).<br><i>v</i><sub>1</sub> = (1.5 × (−40))/(4/3) = −1.5 × 40 × 3/4 = −45 cm.',
          'The image in glass is 45 cm from the water-glass boundary, on the water side (virtual image relative to the glass).',
          '<b>Step 2 — Glass to air (plane surface, <i>R</i> = ∞).</b> The object for surface 2 is this image, at <i>u</i><sub>2</sub> = −(45 + 5) = −50 cm from the glass-air surface (negative because it’s on the incoming side).<br>1/<i>v</i><sub>2</sub> − 1.5/(−50) = 0 ⟹ 1/<i>v</i><sub>2</sub> = −1.5/50 = −3/100.<br><i>v</i><sub>2</sub> = −100/3 ≈ −33.3 cm.',
          'The negative sign means the final image is virtual: it lies 33.3 cm from the outer surface on the same side as the object (the tank side), and the observer sees the fish at that apparent distance.',
          '<b>Alternative shortcut.</b> For two plane surfaces in series, the total apparent shift is the sum of individual shifts:<br>Δ<i>d</i> = <i>t</i><sub>w</sub>(1 − 1/<i>n</i><sub>w</sub>) + <i>t</i><sub>g</sub>(1 − 1/<i>n</i><sub>g</sub>).<br>Δ<i>d</i> = 40(1 − 3/4) + 5(1 − 2/3) = 40 × 1/4 + 5 × 1/3 = 10 + 5/3 = 35/3 ≈ 11.67 cm.',
          'The real distance of the fish from the outer glass surface is 40 + 5 = 45 cm, so the apparent depth from the outer surface is 45 − 11.67 = 33.3 cm, which agrees with the two-step result of 33.3 cm.',
        ],
        ans: 'The fish appears approximately 33.3 cm behind the outer glass surface.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Can a Glass Sphere Trap Light by Total Internal Reflection?',
        q: 'A glass sphere of radius <i>R</i> and refractive index <i>n</i> = 1.5 is in air. A ray enters the sphere, refracts, and strikes the far surface. Show whether any ray that enters directly from air can undergo total internal reflection at the far surface.',
        steps: [
          '<b>Step 1 — Entry refraction.</b> Consider a ray entering at angle of incidence <i>i</i>. By Snell’s law at the first surface:<br>sin <i>r</i> = sin <i>i</i>/<i>n</i>.',
          '<b>Step 2 — Why the angle of incidence at the far surface equals <i>r</i> for every ray.</b> Let <i>C</i> be the centre of the sphere, <i>A</i> the point of entry, and <i>B</i> the point where the refracted ray meets the far surface. Since <i>A</i> and <i>B</i> both lie on the sphere, <i>CA</i> = <i>CB</i> = <i>R</i>, so triangle <i>ABC</i> is isosceles. By construction, the refracted ray <i>AB</i> makes angle <i>r</i> with the radius <i>CA</i> — the normal at <i>A</i>. Because the triangle is isosceles, its base angles are equal, so the same ray also makes angle <i>r</i> with the radius <i>CB</i> — the normal at <i>B</i>. This is a pure property of chords in a circle and holds for every ray entering the sphere, however oblique. So the angle of incidence at the far surface is exactly <i>θ</i> = <i>r</i>.',
          '<b>Step 3 — Applying the TIR condition.</b> TIR at the far surface requires <i>θ</i> > <i>C</i><sub>crit</sub>, i.e. <i>r</i> > <i>C</i><sub>crit</sub>, where sin <i>C</i><sub>crit</sub> = 1/<i>n</i>. Using sin <i>r</i> = sin <i>i</i>/<i>n</i> from Step 1, this becomes<br>sin <i>i</i>/<i>n</i> > 1/<i>n</i> ⟹ sin <i>i</i> > 1,<br>which is impossible for any real angle of incidence. The largest sin <i>i</i> can be is 1, at grazing incidence (<i>i</i> = 90°), and even then <i>r</i> = <i>C</i><sub>crit</sub> exactly — equality, not the strict inequality TIR requires.',
        ],
        ans: 'No ray entering the sphere directly from air can strike the far surface beyond the critical angle: <i>θ</i> = <i>r</i> ≤ <i>C</i><sub>crit</sub> for every entry angle 0° ≤ <i>i</i> ≤ 90°, with equality reached only at the unattainable limit <i>i</i> = 90°. There is no cone of rays that undergoes TIR on striking the far surface directly — this is why a plain glass sphere cannot trap light by total internal reflection after a single entry refraction.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A glass slab of thickness 4 cm and refractive index 1.5 is placed over a mark. By how much does the mark appear raised if viewed from above? If a second slab of thickness 2 cm and index 1.6 is placed on top, by how much is it raised total?',
            a: 'First slab alone: shift = 4(1 − 2/3) = 4/3 cm. Second slab: shift = 2(1 − 1/1.6) = 2(0.375) = 0.75 cm. Total apparent raise = 4/3 + 0.75 ≈ 2.08 cm.',
          },
          {
            q: '[JEE Advanced] A glass ball of radius 3 cm and index 1.5 is in air. An object is placed 9 cm from the near surface on the axis. Find the final image position.',
            a: 'Surface 1: 1.5/<i>v</i><sub>1</sub> + 1/9 = 0.5/3 ⇒ 1.5/<i>v</i><sub>1</sub> = 1/6 − 1/9 = 1/18 ⇒ <i>v</i><sub>1</sub> = 27 cm. The ball is 6 cm thick, so <i>I</i><sub>1</sub> is 27 − 6 = 21 cm beyond surface 2 (<i>u</i><sub>2</sub> = +21 cm). Surface 2 (<i>R</i><sub>2</sub> = −3 cm): 1/<i>v</i><sub>2</sub> − 1.5/21 = (1 − 1.5)/(−3) = 1/6 ⇒ 1/<i>v</i><sub>2</sub> = 1/6 + 1/14 = 5/21 ⇒ <i>v</i><sub>2</sub> = 4.2 cm. The final image is real, 4.2 cm beyond the far surface.',
          },
          {
            q: '[JEE Advanced] A cylindrical glass rod has one flat end and one convex spherical end of radius <i>R</i> = 2 cm. An object is placed 6 cm from the spherical end (along the axis) in air. The rod has <i>n</i> = 1.5 and is 10 cm long. Find where the image forms.',
            a: 'Surface 1 (convex, <i>R</i> = +2 cm): <i>u</i> = −6 cm, 1.5/<i>v</i><sub>1</sub> + 1/6 = 0.5/2 ⇒ 1.5/<i>v</i><sub>1</sub> = 1/4 − 1/6 = 1/12 ⇒ <i>v</i><sub>1</sub> = 18 cm. The rod is 10 cm long, so <i>I</i><sub>1</sub> lies 18 − 10 = 8 cm beyond the flat end: a virtual object, <i>u</i><sub>2</sub> = +8 cm. Surface 2 (flat, <i>R</i> = ∞): 1/<i>v</i><sub>2</sub> − 1.5/8 = 0 ⇒ <i>v</i><sub>2</sub> = 8/1.5 = 5.33 cm. The final image is real, about 5.3 cm beyond the flat end.',
          },
          {
            q: '[NEET] Water (<i>n</i> = 4/3) is in a tank 60 cm deep. A coin is at the bottom. By how much does it appear raised when viewed from directly above?',
            a: 'Apparent depth = 60/(4/3) = 45 cm. Apparent raise = 60 − 45 = 15 cm.',
          },
          {
            q: '[JEE Main] A glass slab of refractive index 1.5 has a small air bubble inside it. Viewed normally through one face, the bubble appears 2 cm from that face. Find the real depth of the bubble.',
            a: 'Apparent depth from face: <i>d</i>′ = 2 cm. Real depth = <i>n</i> × <i>d</i>′ = 1.5 × 2 = 3 cm.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 616–620 ─────────────────────────
  {
    n: 'B',
    title: 'Advanced Mirror-Lens Combinations and Silvered Elements',
    extra: true,
    kalam: 'Light enters through the unsilvered face, refracts, reflects at the silvered surface (as a mirror), refracts again on exit.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers lenses in contact (Topic 04) and the silvered-lens shortcut (Topic 04, Key Procedure). JEE Advanced regularly tests three configurations that go beyond the chapter: (i) a lens with one face silvered — worked once in Topic 04 (worked example 4) and here traced in full — light traverses the glass twice, giving an equivalent mirror; (ii) a mirror-lens system in which light is refracted, reflected and refracted again; (iii) the chain of images formed between two parallel plane mirrors, which the chapter does not treat (Topic 01 covers inclined mirrors only).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Silvered lens as equivalent mirror.</b> Light enters through the unsilvered face, refracts, reflects at the silvered surface (as a mirror), refracts again on exit. The equivalent power is the sum of two lens-pass powers and one mirror power:<br><i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>.',
      },
      {
        t: 'p',
        html: 'For a lens with one face silvered (all powers counted <b>positive when converging</b>):<br>1. The silvered face acts as a mirror of focal length |<i>f</i><sub>m</sub>| = |<i>R</i>|/2, where <i>R</i> is its radius of curvature. Seen by the light inside the glass, a surface whose centre of curvature lies on the incoming-light side is a concave mirror (converging, <i>P</i><sub>m</sub> = +1/|<i>f</i><sub>m</sub>|); one whose centre of curvature lies beyond the surface is a convex mirror (diverging, <i>P</i><sub>m</sub> = −1/|<i>f</i><sub>m</sub>|).<br>2. The lens power is <i>P</i><sub><i>l</i></sub> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>).<br>3. The size of the equivalent focal length is 1/|<i>P</i><sub>eq</sub>|. A positive <i>P</i><sub>eq</sub> means the system acts as a concave (converging) mirror; a negative <i>P</i><sub>eq</sub> means a convex (diverging) mirror. (In New Cartesian signs, as used in Topic 01 and in the practice answers below, the equivalent mirror’s focal length is <i>f</i><sub>eq</sub> = −1/<i>P</i><sub>eq</sub>: −6.67 cm in worked example 1.)',
      },
      {
        t: 'p',
        html: '<b>Mirror + lens system.</b> When an object is placed in front of a plane mirror with a lens between the object and the mirror:<br>1. Find the image formed by the lens.<br>2. Treat that image as the object for the mirror (accounting for the lens-mirror distance).<br>3. The mirror forms an image of the lens image.<br>4. That mirror image is viewed through the lens again if needed.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> Power <i>P</i> in dioptre (D = m<sup>−1</sup>). Focal length in metres. <i>P</i><sub>eq</sub> in D gives <i>f</i><sub>eq</sub> in metres. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Silvered Plano-Convex Lens',
        q: 'A plano-convex lens of glass (<i>n</i> = 1.5) has its convex face of radius 20 cm silvered. Find the focal length and nature of the equivalent optical element.',
        steps: [
          '<b>Step 1 — Lens power.</b> Light enters the flat face first, so <i>R</i><sub>1</sub> = ∞ (flat) and <i>R</i><sub>2</sub> = −20 cm (the curved face, with its centre of curvature on the incoming-light side).<br><i>P</i><sub><i>l</i></sub> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>) = 0.5(0 − 1/(−20)) = 0.5/20 = 0.025 cm<sup>−1</sup>.<br>So <i>f</i><sub><i>l</i></sub> = 1/<i>P</i><sub><i>l</i></sub> = 40 cm = 0.4 m and <i>P</i><sub><i>l</i></sub> = +2.5 D.',
          '<b>Step 2 — Mirror power.</b> The light reaches the silvered curved face from inside the glass. Seen from inside, the centre of curvature of that face lies on the side the light comes from, so the silvered face is a <b>concave mirror</b> of radius 20 cm: |<i>f</i><sub>m</sub>| = <i>R</i>/2 = 10 cm = 0.1 m, converging, so <i>P</i><sub>m</sub> = +1/0.1 = +10 D.',
          '<b>Step 3 — Equivalent power.</b> The light crosses the lens twice and is reflected once:<br><i>P</i><sub>eq</sub> = 2<i>P</i><sub><i>l</i></sub> + <i>P</i><sub>m</sub> = 2(2.5) + 10 = +15 D.<br>1/<i>P</i><sub>eq</sub> = 1/15 m = 6.67 cm.',
          '<b>Check by tracing a ray.</b> A parallel beam enters the flat face undeviated and is focused by the silvered concave surface at 10 cm inside the glass. On leaving through the flat face, refraction makes that point appear at 10/1.5 = 6.67 cm from the face. This agrees with 1/<i>P</i><sub>eq</sub>.',
          '<b>Check with the other face silvered.</b> If the flat face were silvered instead, <i>P</i><sub>m</sub> = 0 and <i>P</i><sub>eq</sub> = 2 × 2.5 = +5 D, so 1/<i>P</i><sub>eq</sub> = 20 cm: a concave mirror again, but a much weaker one. The choice of which face carries the silvering changes the focal length completely.',
        ],
        ans: 'The system behaves as a <b>concave mirror of focal length 6.67 cm</b> (converging).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Lens and Plane Mirror System',
        q: 'A convex lens of focal length 20 cm and a plane mirror are 40 cm apart. An object is placed 30 cm in front of the lens (on the side away from the mirror). Find the position of the final image.',
        steps: [
          '<b>Step 1 — Lens forms image of object.</b> Object at <i>u</i> = −30 cm, <i>f</i> = +20 cm.<br>1/<i>v</i> = 1/20 + 1/(−30) = (3 − 2)/60 = 1/60 ⟹ <i>v</i> = +60 cm.',
          'The lens would form a real image 60 cm on the far side. The mirror is only 40 cm from the lens, so this image falls 20 cm <b>behind the mirror</b>: the mirror intercepts the converging rays before they meet, and the point acts as a virtual object for the mirror.',
          '<b>Step 2 — Mirror forms image of this image.</b> Since the intermediate image is 20 cm behind the mirror, the mirror forms a real image 20 cm in front of the mirror (symmetric). This is 20 cm from the mirror toward the lens.',
          '<b>Step 3 — Lens forms image of the mirror’s image.</b> This is now an object for the lens, located 20 cm from the lens (since the mirror is 40 cm away, and the mirror-image is 20 cm in front of the mirror, toward the lens).',
          'Object distance: <i>u</i> = −20 cm (negative: a real object on the side the reflected light comes from).<br>1/<i>v</i>′ = 1/20 + 1/(−20) = 0.',
          'The image forms at infinity! The lens sends parallel rays to the eye.',
          '<b>Check.</b> The key is tracking where each image forms relative to the next optical element. The chain is: object → lens → image<sub>1</sub> (behind mirror) → mirror → image<sub>2</sub> (in front of mirror) → lens → image at infinity.',
        ],
        ans: 'The final image is at infinity: the reflected light leaves the lens as a parallel beam, because the object for the second pass sits exactly at the focus of the lens.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Images Between Two Parallel Plane Mirrors',
        q: 'Two plane mirrors <i>M</i><sub>1</sub> and <i>M</i><sub>2</sub> face each other, parallel and 60 cm apart. A point object is placed between them, 10 cm from <i>M</i><sub>1</sub>. Find the positions of the first few images as seen in <i>M</i><sub>1</sub>.',
        steps: [
          '<b>Method.</b> Every image formed by one mirror acts as an object for the other, so the images form an endless chain. Measure position along the line perpendicular to the mirrors: <i>M</i><sub>1</sub> at <i>x</i> = 0, <i>M</i><sub>2</sub> at <i>x</i> = 60 cm, object at <i>x</i> = 10 cm. A plane mirror at <i>x</i> = <i>a</i> sends a point at <i>x</i> to <i>x</i>′ = 2<i>a</i> − <i>x</i>.',
          '<b>Chain starting with <i>M</i><sub>1</sub>:</b><br>• Image in <i>M</i><sub>1</sub>: 2(0) − 10 = −10 cm.<br>• That image in <i>M</i><sub>2</sub>: 2(60) − (−10) = 130 cm.<br>• That image in <i>M</i><sub>1</sub>: 2(0) − 130 = −130 cm.<br>• That image in <i>M</i><sub>2</sub>: 120 + 130 = 250 cm, then −250 cm in <i>M</i><sub>1</sub>, and so on.',
          '<b>Chain starting with <i>M</i><sub>2</sub>:</b><br>• Image in <i>M</i><sub>2</sub>: 120 − 10 = 110 cm.<br>• That image in <i>M</i><sub>1</sub>: −110 cm.<br>• That image in <i>M</i><sub>2</sub>: 120 + 110 = 230 cm, then −230 cm in <i>M</i><sub>1</sub>, and so on.',
          '<b>Check.</b> The distances 10, 130, 250, … come from the chain that starts with <i>M</i><sub>1</sub>, and 110, 230, … from the chain that starts with <i>M</i><sub>2</sub>; each chain repeats every 2 × 60 = 120 cm, twice the mirror separation, and the two chains interleave to give the alternating 100 cm and 20 cm gaps.',
        ],
        ans: 'Behind <i>M</i><sub>1</sub> (negative <i>x</i>) the images lie at distances 10 cm, 110 cm, 130 cm, 230 cm, 250 cm, … from <i>M</i><sub>1</sub>. The spacing alternates between 100 cm and 20 cm. There are infinitely many images; they grow progressively fainter because each reflection loses some light.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A plano-concave lens of focal length −20 cm (<i>n</i> = 1.5) has its concave face silvered. Find the equivalent focal length and state the nature of the system.',
            a: 'For a plano-concave lens, 1/|<i>f</i>| = (<i>n</i> − 1)/|<i>R</i>|, so |<i>R</i>| = 0.5 × 20 = 10 cm and <i>P</i><sub><i>l</i></sub> = −5 D. Light enters through the flat face and meets the curved silvered face from inside the glass. The centre of curvature of that face lies beyond the surface, so for the light it is a convex mirror: |<i>f</i><sub>m</sub>| = <i>R</i>/2 = 5 cm, diverging, <i>P</i><sub>m</sub> = −20 D. Then <i>P</i><sub>eq</sub> = 2(−5) + (−20) = −30 D, so 1/<i>P</i><sub>eq</sub> = −1/30 m = −3.33 cm (negative: diverging). The system acts as a <b>convex (diverging) mirror of focal length 3.33 cm</b> (<i>f</i><sub>eq</sub> = +3.33 cm in New Cartesian signs). (Check: parallel light is reflected as if from a point 5 cm behind the silvered surface; refraction at the flat face moves it to 5/1.5 = 3.33 cm.)',
          },
          {
            q: '[JEE Advanced] A convex lens of focal length 20 cm and a convex mirror of radius 40 cm face each other, 30 cm apart. An object is placed 15 cm in front of the lens, on the side away from the mirror. Find the final image position and nature.',
            a: 'Lens: <i>u</i> = −15 cm, 1/<i>v</i> = 1/20 − 1/15 = −1/60, <i>v</i> = −60 cm (virtual, 60 cm on the object side). For the convex mirror (<i>f</i> = +20 cm, 30 cm from the lens) this is a real object at <i>u</i> = −(60 + 30) = −90 cm: 1/<i>v</i> = 1/20 + 1/90 = 11/180, so <i>v</i> = +16.4 cm behind the mirror, i.e. 46.4 cm from the lens. For the second pass through the lens the object is at <i>u</i> = −46.4 cm: 1/<i>v</i> = 1/20 − 1/46.4 ⇒ <i>v</i> ≈ +35.2 cm. The final image is real, about 35.2 cm from the lens on the same side as the original object.',
          },
          {
            q: '[JEE Main] A plano-convex lens is silvered on the plane face. If <i>R</i><sub>curved</sub> = 15 cm and <i>n</i> = 1.6, find the equivalent focal length.',
            a: 'Flat face silvered: the mirror is plane, so <i>P</i><sub>m</sub> = 0. Lens: <i>R</i><sub>1</sub> = +15 cm, <i>R</i><sub>2</sub> = ∞, so <i>P</i><sub><i>l</i></sub> = 0.6/15 = 0.04 cm<sup>−1</sup>, i.e. <i>f</i><sub><i>l</i></sub> = 25 cm and <i>P</i><sub><i>l</i></sub> = +4 D. <i>P</i><sub>eq</sub> = 2 × 4 + 0 = +8 D, so 1/<i>P</i><sub>eq</sub> = 12.5 cm: a converging (concave) mirror system.',
          },
          {
            q: '[JEE Advanced] An object is placed 20 cm from a lens of <i>f</i> = +10 cm. A plane mirror is 30 cm beyond the lens. Find where the final image is formed after reflection from the mirror and passage through the lens.',
            a: 'Lens: 1/<i>v</i> = 1/10 − 1/20 = 1/20, <i>v</i> = +20 cm. This image is 10 cm in front of the mirror (the mirror is at 30 cm). The plane mirror forms a virtual image 10 cm behind itself, i.e. 40 cm from the lens. On the return pass the object distance is <i>u</i> = −40 cm: 1/<i>v</i> = 1/10 − 1/40 = 3/40, so <i>v</i> = 40/3 ≈ 13.3 cm. The final image is real, 13.3 cm from the lens on the same side as the original object.',
          },
          {
            q: '[NEET] A concave mirror of focal length 20 cm and a convex lens of focal length 10 cm are placed 50 cm apart, facing each other. An object is placed 30 cm from the mirror. Find the image after one reflection and one refraction.',
            a: 'Mirror: <i>u</i> = −30 cm, <i>f</i> = −20 cm, 1/<i>v</i> = 1/<i>f</i> − 1/<i>u</i> = −1/20 + 1/30 = −1/60, so <i>v</i> = −60 cm: a real image 60 cm in front of the mirror. The lens is 50 cm from the mirror, so this image lies 10 cm beyond the lens and is a virtual object for it: <i>u</i> = +10 cm. Then 1/<i>v</i> = 1/10 + 1/10 ⇒ <i>v</i> = +5 cm. The final image is real, 5 cm beyond the lens (55 cm from the mirror).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 620–624 ─────────────────────────
  {
    n: 'C',
    title: 'Chromatic Aberration and Achromatic Systems',
    extra: true,
    kalam: 'Violet has the larger refractive index and therefore the shorter focal length.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 05 covers dispersion through prisms: angular spread, dispersive power, and achromatic prism combinations. What the chapter only names (Topic 04, Topic 06) but never works out is <b>chromatic aberration in lenses</b> — the fact that a single lens focuses different colours at different points because glass has different refractive indices for different wavelengths. JEE Advanced has asked, by name, to “remove chromatic aberration” from a lens system, and the answer is always an achromatic doublet: two lenses of different glasses whose chromatic effects cancel.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Chromatic aberration of a thin lens.</b> For a lens in air, the focal length depends on refractive index:<br>1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>).<br>Differentiating with respect to <i>n</i>:<br>d<i>f</i>/d<i>n</i> = −<i>f</i>/(<i>n</i> − 1).<br>For the extreme colours (red and violet), with indices <i>n</i><sub>r</sub> and <i>n</i><sub>v</sub>:<br><i>f</i><sub>v</sub> = <i>f</i><sub>0</sub>/(1 + <i>ω</i>/2) ≈ <i>f</i><sub>0</sub>(1 − <i>ω</i>/2), <i>f</i><sub>r</sub> = <i>f</i><sub>0</sub>/(1 − <i>ω</i>/2) ≈ <i>f</i><sub>0</sub>(1 + <i>ω</i>/2),<br>where <i>f</i><sub>0</sub> is the focal length for the mean (yellow) colour (taking <i>n</i><sub>y</sub> midway between <i>n</i><sub>r</sub> and <i>n</i><sub>v</sub>) and <i>ω</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1) is the <b>dispersive power</b> of the glass (same definition as for prisms, a material constant). Violet has the larger refractive index and therefore the shorter focal length.<br><br>The longitudinal chromatic aberration is <i>f</i><sub>r</sub> − <i>f</i><sub>v</sub> ≈ <i>f</i><sub>0</sub><i>ω</i>.',
      },
      {
        t: 'p',
        html: '<b>Achromatic doublet (two lenses in contact).</b> To have the same focal length for red and violet light, we need:<br>1/<i>F</i> = 1/<i>f</i><sub>r</sub> + 1/<i>f</i>′<sub>r</sub> = 1/<i>f</i><sub>v</sub> + 1/<i>f</i>′<sub>v</sub>.<br>Using the lens-maker formula and expanding to first order in dispersive powers:<br><i>ω</i><sub>1</sub>(1/<i>f</i><sub>1</sub>) + <i>ω</i><sub>2</sub>(1/<i>f</i><sub>2</sub>) = 0,<br>or equivalently:<br><i>ω</i><sub>1</sub>/<i>f</i><sub>1</sub> + <i>ω</i><sub>2</sub>/<i>f</i><sub>2</sub> = 0.<br>This is the <b>achromatic condition</b>. One lens must be converging, the other diverging (of different glasses).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>ω</i> is dimensionless. <i>f</i> is in metres. <i>ω</i>/<i>f</i> is in m<sup>−1</sup>. The equation is dimensionally consistent.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Achromatic Doublet Design',
        q: 'A converging achromatic doublet is to be made from crown glass (<i>n</i><sub>y</sub> = 1.50, <i>ω</i><sub>c</sub> = 0.15) and flint glass (<i>n</i><sub>y</sub> = 1.60, <i>ω</i><sub>f</sub> = 0.24). The focal length of the combination is 20 cm. Find the individual focal lengths.',
        steps: [
          '<b>Step 1 — State the conditions.</b><br>Total power: <i>P</i> = <i>P</i><sub>c</sub> + <i>P</i><sub>f</sub> = 1/(0.20 m) = +5 D.<br>Achromatic condition: <i>ω</i><sub>c</sub>/<i>f</i><sub>c</sub> + <i>ω</i><sub>f</sub>/<i>f</i><sub>f</sub> = 0.',
          '<b>Step 2 — Solve the system.</b><br><i>P</i><sub>c</sub> + <i>P</i><sub>f</sub> = 5,<br>0.15/<i>f</i><sub>c</sub> + 0.24/<i>f</i><sub>f</sub> = 0.',
          'From the second: 0.15/<i>f</i><sub>c</sub> = −0.24/<i>f</i><sub>f</sub> ⟹ <i>f</i><sub>f</sub> = −(0.24/0.15)<i>f</i><sub>c</sub> = −1.6<i>f</i><sub>c</sub>.<br>The negative sign confirms the flint glass lens must be diverging.',
          'Substitute: <i>P</i><sub>c</sub> − 1/(1.6<i>f</i><sub>c</sub>) = 5.<br>But <i>P</i><sub>c</sub> = 1/<i>f</i><sub>c</sub> (in dioptres), so:<br>1/<i>f</i><sub>c</sub> − 1/(1.6<i>f</i><sub>c</sub>) = 5 ⟹ (1.6 − 1)/(1.6<i>f</i><sub>c</sub>) = 5.<br>0.6/(1.6<i>f</i><sub>c</sub>) = 5 ⟹ <i>f</i><sub>c</sub> = 0.6/8 = 0.075 m = 7.5 cm.<br><i>P</i><sub>c</sub> = 1/0.075 ≈ +13.33 D.<br><i>P</i><sub>f</sub> = 5 − 13.33 = −8.33 D ⟹ <i>f</i><sub>f</sub> = −12 cm.',
          '<b>Check.</b> The chromatic effect of each lens is <i>ωP</i>: crown 0.15 × 13.33 = +2.0 D, flint 0.24 × (−8.33) = −2.0 D. They cancel. The flint lens is weaker in power (12 cm against 7.5 cm) but has the higher dispersive power, so it can cancel the chromatic error of the stronger crown lens.',
        ],
        ans: 'Use a converging crown glass lens of focal length approximately 7.5 cm and a diverging flint glass lens of focal length approximately 12 cm, in contact.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Chromatic Aberration of a Single Lens',
        q: 'A biconvex lens of glass (<i>n</i><sub>y</sub> = 1.5, <i>n</i><sub>v</sub> = 1.52, <i>n</i><sub>r</sub> = 1.48) has <i>R</i><sub>1</sub> = +20 cm, <i>R</i><sub>2</sub> = −20 cm. Find the longitudinal chromatic aberration.',
        steps: [
          '<b>Step 1 — Mean focal length.</b><br>1/<i>f</i><sub>y</sub> = (1.5 − 1)(1/20 − 1/(−20)) = 0.5 × 2/20 = 1/20.<br><i>f</i><sub>y</sub> = 20 cm.',
          '<b>Step 2 — Violet focal length.</b><br>1/<i>f</i><sub>v</sub> = (1.52 − 1)(2/20) = 0.52 × 0.1 = 0.052 ⟹ <i>f</i><sub>v</sub> = 1/0.052 ≈ 19.23 cm.',
          '<b>Step 3 — Red focal length.</b><br>1/<i>f</i><sub>r</sub> = (1.48 − 1)(2/20) = 0.48 × 0.1 = 0.048 ⟹ <i>f</i><sub>r</sub> = 1/0.048 ≈ 20.83 cm.',
          '<b>Step 4 — Longitudinal chromatic aberration.</b><br><i>f</i><sub>r</sub> − <i>f</i><sub>v</sub> ≈ 20.83 − 19.23 = 1.6 cm.<br>The red focus is 1.6 cm farther from the lens than the violet focus.',
          '<b>Check.</b> This is why white light through a simple lens produces coloured fringes — each colour focuses at a slightly different distance.',
        ],
        ans: 'Longitudinal chromatic aberration is approximately 1.6 cm. The lens focuses violet light nearer the lens than red light.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Direct-Vision Prism Combination',
        q: 'A direct-vision spectroscope uses a crown glass prism and a flint glass prism placed in contact with opposite orientations (the apex of one beside the base of the other), so that yellow light emerges undeviated while the colours are still spread out. The crown prism has <i>n</i><sub>y</sub> = 1.50, <i>ω</i><sub>c</sub> = 0.15 and apex angle <i>A</i><sub>c</sub> = 10°; the flint prism has <i>n</i><sub>y</sub> = 1.60, <i>ω</i><sub>f</sub> = 0.24. Find the apex angle of the flint prism and the net angular dispersion between violet and red.',
        steps: [
          'This is the achromatic idea turned round: for prisms we cancel the deviation of the mean colour and keep the dispersion.',
          '<b>Step 1 — Zero deviation for yellow.</b> For thin prisms the deviation is (<i>n</i><sub>y</sub> − 1)<i>A</i>, and the two prisms deviate in opposite senses:<br>(<i>n</i><sub>c</sub> − 1)<i>A</i><sub>c</sub> = (<i>n</i><sub>f</sub> − 1)<i>A</i><sub>f</sub> ⟹ 0.5<i>A</i><sub>c</sub> = 0.6<i>A</i><sub>f</sub> ⟹ <i>A</i><sub>f</sub> = (5/6)<i>A</i><sub>c</sub> = 8.33°.',
          '<b>Step 2 — Net dispersion.</b> The angular dispersion produced by a thin prism is <i>θ</i><sub>v</sub> − <i>θ</i><sub>r</sub> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> = <i>ω</i>(<i>n</i><sub>y</sub> − 1)<i>A</i>. For the crown prism this is 0.15 × 0.5 × 10° = 0.75°; for the flint prism it is 0.24 × 0.6 × 8.33° = 1.20°. The prisms act in opposite senses, so<br>|<i>θ</i><sub>v</sub> − <i>θ</i><sub>r</sub>|<sub>net</sub> = 1.20° − 0.75° = 0.45°.',
          'Equivalently, (<i>θ</i><sub>v</sub> − <i>θ</i><sub>r</sub>)<sub>net</sub> = 0.5<i>A</i><sub>c</sub>(<i>ω</i><sub>c</sub> − <i>ω</i><sub>f</sub>) = 0.5<i>A</i><sub>c</sub>(0.15 − 0.24) = −0.045<i>A</i><sub>c</sub>, whose magnitude is 0.45° for <i>A</i><sub>c</sub> = 10°.',
          '<b>Check.</b> If the two prisms had the same dispersive power (<i>ω</i><sub>c</sub> = <i>ω</i><sub>f</sub>), cancelling the deviation would cancel the dispersion too, and the pair would do nothing at all, like a parallel slab. (An achromatic pair does the reverse: it cancels the dispersion and keeps a deviation.) A direct-vision spectroscope deliberately uses glasses with different <i>ω</i> so that dispersion survives when the deviation is cancelled.',
        ],
        ans: 'The flint prism must have <i>A</i><sub>f</sub> = 8.33°. Yellow light goes straight through, and violet and red emerge about 0.45° apart. The flint prism, having the larger dispersion, sets the sense of the spread.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A converging lens of focal length 10 cm is made of glass with <i>ω</i> = 0.20. What is its longitudinal chromatic aberration?',
            a: 'Δ<i>f</i> = <i>fω</i> ≈ 10 × 0.20 = 2 cm.',
          },
          {
            q: '[JEE Advanced] An achromatic doublet is made using a converging lens of <i>f</i><sub>1</sub> = 15 cm and dispersive power <i>ω</i><sub>1</sub> = 0.20 together with a second lens of dispersive power <i>ω</i><sub>2</sub> = 0.30. Find the focal length of the second lens and the focal length of the doublet.',
            a: 'Achromatic condition: <i>ω</i><sub>1</sub>/<i>f</i><sub>1</sub> + <i>ω</i><sub>2</sub>/<i>f</i><sub>2</sub> = 0. With <i>f</i><sub>1</sub> = +15 cm: 0.20/15 + 0.30/<i>f</i><sub>2</sub> = 0 ⟹ <i>f</i><sub>2</sub> = −22.5 cm (diverging). The doublet has 1/<i>F</i> = 1/15 − 1/22.5 = 1/45, so <i>F</i> = +45 cm.',
          },
          {
            q: '[JEE Main] Two lenses of focal lengths 20 cm (convex) and 40 cm (concave) are in contact. Their dispersive powers are 0.15 and 0.20 respectively. Is the combination achromatic for the extreme colours?',
            a: 'Total focal length: 1/<i>F</i> = 1/20 − 1/40 = 1/40, <i>F</i> = 40 cm. Check: <i>ω</i><sub>1</sub>/<i>f</i><sub>1</sub> + <i>ω</i><sub>2</sub>/<i>f</i><sub>2</sub> = 0.15/20 − 0.20/40 = 0.0075 − 0.005 = 0.0025 ≠ 0. Not achromatic.',
          },
          {
            q: '[NEET] Two thin lenses of the same focal length are made from crown glass (<i>ω</i> = 0.15) and flint glass (<i>ω</i> = 0.24). Which shows the greater longitudinal chromatic aberration?',
            a: 'For a thin lens the longitudinal chromatic aberration is <i>ωf</i>. At the same <i>f</i> it is proportional to <i>ω</i>, so the flint lens (0.24<i>f</i>) shows more than the crown lens (0.15<i>f</i>).',
          },
          {
            q: '[JEE Advanced] A thick lens is approximated as two thin lenses separated by a small distance. Derive the condition for achromatism when the lenses are separated.',
            a: 'For separated lenses, 1/<i>F</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub> − <i>d</i>/(<i>f</i><sub>1</sub><i>f</i><sub>2</sub>). Varying the colour changes each 1/<i>f</i><sub><i>i</i></sub> by an amount proportional to <i>ω</i><sub><i>i</i></sub>/<i>f</i><sub><i>i</i></sub>, so <i>F</i> is unchanged for red and violet when<br><i>ω</i><sub>1</sub>/<i>f</i><sub>1</sub> + <i>ω</i><sub>2</sub>/<i>f</i><sub>2</sub> − <i>d</i>(<i>ω</i><sub>1</sub> + <i>ω</i><sub>2</sub>)/(<i>f</i><sub>1</sub><i>f</i><sub>2</sub>) = 0,<br>where <i>d</i> is the separation. For two lenses of the same glass (<i>ω</i><sub>1</sub> = <i>ω</i><sub>2</sub>) this reduces to the standard result <i>d</i> = (<i>f</i><sub>1</sub> + <i>f</i><sub>2</sub>)/2.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 624–626 ─────────────────────────
  {
    n: 'D',
    title: 'Advanced Prism Situations',
    extra: true,
    kalam: 'Grazing emergence means the emergent ray just grazes the second face: e = 90°.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers minimum deviation, thin-prism deviation (Topic 05 also back-calculates <i>n</i> and <i>A</i> from it) and the no-emergence condition <i>A</i> > 2<i>C</i> (Topic 05, worked example 4). JEE Advanced pushes further: (i) which rays emerge when only some can; (ii) more thin-prism back-calculations; and (iii) the <b>grazing emergence</b> condition, which the chapter does not treat.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Condition for no emergence (all rays undergo TIR).</b> For a ray to have any hope of emerging, its angle of incidence at the second face must satisfy <i>r</i><sub>2</sub> < <i>C</i>. Since <i>r</i><sub>2</sub> = <i>A</i> − <i>r</i><sub>1</sub>, and <i>r</i><sub>1</sub> can range up to <i>C</i> (beyond <i>C</i> at the first face means no entry; <i>r</i><sub>1</sub> can also be negative, for a ray incident on the other side of the normal, which only makes <i>r</i><sub>2</sub> larger), the minimum possible <i>r</i><sub>2</sub> is <i>A</i> − <i>C</i>. If even this minimum exceeds <i>C</i>, no ray emerges:<br><i>A</i> − <i>C</i> > <i>C</i> ⟹ <i>A</i> > 2<i>C</i>.<br>For a glass prism (<i>n</i> = 1.5, <i>C</i> ≈ 41.8°), any prism with apex angle <i>A</i> > 83.6° traps all light.',
      },
      {
        t: 'p',
        html: '<b>Grazing emergence condition.</b> Grazing emergence means the emergent ray just grazes the second face: <i>e</i> = 90°. (This coincides with the symmetric, minimum-deviation path only in the borderline case <i>A</i> = 2<i>C</i>.) At grazing emergence:<br>sin <i>e</i> = 1 = <i>n</i> sin <i>r</i><sub>2</sub> ⟹ <i>r</i><sub>2</sub> = <i>C</i>.<br>Since <i>r</i><sub>2</sub> = <i>A</i> − <i>r</i><sub>1</sub>, we get <i>r</i><sub>1</sub> = <i>A</i> − <i>C</i>. The corresponding angle of incidence is found from Snell’s law at face 1.',
      },
      {
        t: 'p',
        html: '<b>Thin prism with given deviation.</b> For a thin prism: <i>δ</i> = (<i>n</i> − 1)<i>A</i>. If <i>δ</i> and <i>A</i> are given, <i>n</i> = 1 + <i>δ</i>/<i>A</i>. If <i>δ</i> and <i>n</i> are given, <i>A</i> = <i>δ</i>/(<i>n</i> − 1).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>δ</i> in radians (or degrees), <i>A</i> in the same units. <i>δ</i>/<i>A</i> is dimensionless. <i>n</i> is dimensionless. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — No-Emergence Condition',
        q: 'A prism of glass (<i>n</i> = 1.5) has apex angle <i>A</i> = 80°. Will all rays entering the prism emerge? If not, what is the maximum apex angle for which some rays can emerge?',
        steps: [
          '<b>Step 1 — Critical angle.</b><br>sin <i>C</i> = 1/<i>n</i> = 2/3 ⟹ <i>C</i> = sin<sup>−1</sup>(0.667) ≈ 41.8°.',
          '<b>Step 2 — Check no-emergence condition.</b> 2<i>C</i> = 83.6°. Since <i>A</i> = 80° < 83.6°, some rays can emerge.',
          '<b>Step 3 — Which rays can emerge?</b> A ray emerges only if its angle of incidence at the second face satisfies <i>r</i><sub>2</sub> < <i>C</i> = 41.8°. Since <i>r</i><sub>2</sub> = <i>A</i> − <i>r</i><sub>1</sub>, this means <i>r</i><sub>1</sub> > <i>A</i> − <i>C</i> = 80° − 41.8° = 38.2°. At the first face <i>r</i><sub>1</sub> can be at most <i>C</i> = 41.8° (grazing entry). So only rays with 38.2° < <i>r</i><sub>1</sub> ≤ 41.8° emerge. Rays with <i>r</i><sub>1</sub> < 38.2° have <i>r</i><sub>2</sub> > 41.8° and undergo TIR at the second face.',
          'Specifically: a ray entering near normal (<i>r</i><sub>1</sub> ≈ 0) has <i>r</i><sub>2</sub> = <i>A</i> = 80° > <i>C</i> — it undergoes TIR. A ray entering at <i>r</i><sub>1</sub> = 40° has <i>r</i><sub>2</sub> = 40° < <i>C</i> — it emerges.',
        ],
        ans: 'No — only some rays emerge; not all are trapped. The no-emergence condition requires <i>A</i> > 83.6°, so the <b>maximum apex angle for which some rays can still emerge is</b> <i>A</i> = 2<i>C</i> ≈ 83.6°. For <i>A</i> = 80°, only rays with <i>r</i><sub>1</sub> > 38.2° (that is, sin <i>i</i> > 1.5 sin 38.2° ≈ 0.93, so <i>i</i> ≳ 68°) can emerge; near-normal rays undergo TIR.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Finding n from Thin Prism Deviation',
        q: 'A thin prism with apex angle 5° produces a minimum deviation of 2.5°. Find the refractive index.',
        steps: [
          '<b>Step 1 — Thin prism formula.</b><br><i>δ</i><sub>m</sub> = (<i>n</i> − 1)<i>A</i>.',
          '<b>Step 2 — Solve for <i>n</i>.</b><br><i>n</i> − 1 = <i>δ</i><sub>m</sub>/<i>A</i> = 2.5°/5° = 0.5.<br><i>n</i> = 1.5.',
          '<b>Check.</b> This is exactly what we expect for ordinary crown glass.',
        ],
        ans: 'The refractive index is 1.5.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Grazing Emergence',
        q: 'A prism of glass (<i>n</i> = 1.5) has apex angle <i>A</i> = 60°. Find the angle of incidence for which the ray emerges grazing the second face.',
        steps: [
          '<b>Step 1 — At grazing emergence.</b><br>sin <i>e</i> = 1 ⟹ <i>r</i><sub>2</sub> = <i>C</i> = sin<sup>−1</sup>(1/1.5) = 41.8°.',
          '<b>Step 2 — Find <i>r</i><sub>1</sub>.</b><br><i>r</i><sub>1</sub> = <i>A</i> − <i>r</i><sub>2</sub> = 60° − 41.8° = 18.2°.',
          '<b>Step 3 — Find <i>i</i>.</b><br>sin <i>i</i> = <i>n</i> sin <i>r</i><sub>1</sub> = 1.5 × sin 18.2° = 1.5 × 0.312 = 0.468.<br><i>i</i> = sin<sup>−1</sup>(0.468) ≈ 27.9°.',
          '<b>Check.</b> At this angle the ray meets the second face at exactly the critical angle, and the emergent ray skims along the face at <i>e</i> = 90°. Any smaller <i>i</i> means smaller <i>r</i><sub>1</sub>, larger <i>r</i><sub>2</sub>, and the ray would be totally internally reflected.',
        ],
        ans: 'A ray incident at approximately 28° will emerge grazing the second face.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A thin prism of angle 4° gives a deviation of 3° for yellow light. Find <i>n</i><sub>y</sub>.',
            a: '<i>n</i> = 1 + <i>δ</i>/<i>A</i> = 1 + 3/4 = 1.75.',
          },
          {
            q: '[JEE Advanced] For what range of apex angles will a glass prism (<i>n</i> = 1.5) trap ALL rays by TIR?',
            a: '<i>A</i> > 2<i>C</i> = 2 × sin<sup>−1</sup>(2/3) ≈ 83.6°. All prisms with <i>A</i> > 83.6° trap all rays.',
          },
          {
            q: '[NEET] A ray passes through a prism at minimum deviation. If <i>A</i> = 60° and <i>δ</i><sub>m</sub> = 30°, find the angle of incidence.',
            a: 'At minimum deviation <i>i</i> = <i>e</i> and <i>δ</i><sub>m</sub> = 2<i>i</i> − <i>A</i>, so <i>i</i> = (<i>A</i> + <i>δ</i><sub>m</sub>)/2 = (60° + 30°)/2 = 45°. (The refractive index then follows from <i>n</i> = sin <i>i</i>/sin(<i>A</i>/2) = sin 45°/sin 30° ≈ 1.41.)',
          },
          {
            q: '[JEE Advanced] A prism with <i>A</i> = 50° and <i>n</i> = 1.6 is used. Find the range of angles of incidence for which a ray still emerges from the second face.',
            a: 'Here sin <i>C</i> = 1/1.6 = 0.625, so <i>C</i> ≈ 38.7°. A ray emerges only if <i>r</i><sub>2</sub> = <i>A</i> − <i>r</i><sub>1</sub> < <i>C</i>, i.e. <i>r</i><sub>1</sub> > <i>A</i> − <i>C</i> = 50° − 38.7° = 11.3°. The corresponding angle of incidence is sin <i>i</i> = 1.6 sin 11.3° = 1.6 × 0.196 = 0.314, so <i>i</i> ≈ 18.3°. Rays with <i>i</i> < 18.3° undergo TIR at the second face. At the other end, <i>r</i><sub>1</sub> cannot exceed <i>C</i>, so <i>r</i><sub>2</sub> = <i>A</i> − <i>r</i><sub>1</sub> ≥ 50° − 38.7° = 11.3°, which is always well below <i>C</i>: increasing <i>i</i> only makes emergence easier, and there is no upper cutoff short of <i>i</i> = 90°. <b>Rays emerge for 18.3° ≤ <i>i</i> ≤ 90°.</b>',
          },
          {
            q: '[JEE Main] Two thin prisms are combined to produce zero deviation for yellow light. The first has <i>n</i> = 1.5, <i>A</i> = 4°. The second has <i>n</i> = 1.6. Find the angle of the second prism.',
            a: 'Zero deviation: (<i>n</i><sub>1</sub> − 1)<i>A</i><sub>1</sub> = (<i>n</i><sub>2</sub> − 1)<i>A</i><sub>2</sub>. 0.5 × 4° = 0.6 × <i>A</i><sub>2</sub> ⟹ <i>A</i><sub>2</sub> = (0.5 × 4°)/0.6 = 3.33°.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 627–630 ─────────────────────────
  {
    n: 'E',
    title: 'Advanced Image Velocity and Rotating Systems',
    extra: true,
    kalam: 'A plane mirror rotated by angle θ causes the reflected ray to rotate by 2θ.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 01 covers the plane-mirror image, the mirror-rotation rule and the axial image velocity of a curved mirror. JEE Advanced extends these to: (i) a mirror rotating steadily, whose reflected beam turns at twice its angular speed; (ii) a moving mirror, whose image moves at twice the mirror’s speed; and (iii) the image velocity <i>v̇</i> = −<i>m</i><sup>2</sup><i>u̇</i> applied with signs to concave and convex mirrors.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Rotating plane mirror.</b> A plane mirror rotated by angle <i>θ</i> causes the reflected ray to rotate by 2<i>θ</i>. If a beam is reflected from a rotating mirror to a distant screen, the spot moves.<br><br>If the mirror rotates at angular speed <i>ω</i><sub>m</sub>, the reflected beam rotates at 2<i>ω</i><sub>m</sub>.<br><br>The speed of the spot on a screen at distance <i>D</i>, at the instant when the reflected beam strikes the screen perpendicularly (or at any instant if the screen is a circular arc centred on the mirror), is:<br><i>v</i><sub>spot</sub> = 2<i>ω</i><sub>m</sub><i>D</i>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>ω</i><sub>m</sub> in rad s<sup>−1</sup>, <i>D</i> in m, <i>v</i> in m s<sup>−1</sup>. Correct.',
      },
      {
        t: 'p',
        html: '<b>Image velocity for a moving object in front of a plane mirror.</b> Take the <i>x</i>-axis along the normal to a fixed mirror at <i>x</i> = 0. The image of a point at (<i>x</i>, <i>y</i>, <i>z</i>) is at (−<i>x</i>, <i>y</i>, <i>z</i>), so the velocity component along the normal is reversed and the components parallel to the mirror are unchanged:<br><i>v⃗</i><sub>image</sub> = (−<i>v</i><sub><i>x</i></sub>, <i>v</i><sub><i>y</i></sub>, <i>v</i><sub><i>z</i></sub>).',
      },
      {
        t: 'p',
        html: '<b>Spherical mirror — image velocity.</b> From the mirror formula, differentiating with respect to time:<br>d/d<i>t</i> (1/<i>v</i> + 1/<i>u</i>) = 0 ⟹ −<i>v̇</i>/<i>v</i><sup>2</sup> − <i>u̇</i>/<i>u</i><sup>2</sup> = 0 ⟹ <i>v̇</i>/<i>u̇</i> = −<i>v</i><sup>2</sup>/<i>u</i><sup>2</sup>.<br>The longitudinal image speed is <i>v̇</i> = −(<i>v</i>/<i>u</i>)<sup>2</sup><i>u̇</i> = −<i>m</i><sup>2</sup><i>u̇</i>, where <i>m</i> = −<i>v</i>/<i>u</i> is the magnification (only <i>m</i><sup>2</sup> enters, so the sign convention for <i>m</i> does not matter). Here <i>u</i> is the signed object coordinate, so an object approaching the mirror has <i>u̇</i> > 0.<br><br>The lateral image speed involves the magnification directly.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>u̇</i> in m s<sup>−1</sup>, <i>v</i>/<i>u</i> dimensionless, so <i>v̇</i> in m s<sup>−1</sup>. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Rotating Mirror with Screen',
        q: 'A plane mirror is rotating about a vertical axis at 600 rpm. A light beam is reflected from the mirror to a wall 10 m away. Find the speed of the spot of light on the wall at the instant when the reflected beam is perpendicular to the wall.',
        steps: [
          '<b>Step 1 — Convert rpm to rad s<sup>−1</sup>.</b><br>600 rpm = 600/60 rev/s = 10 rev/s.<br><i>ω</i><sub>m</sub> = 10 × 2π = 20π rad s<sup>−1</sup>.',
          '<b>Step 2 — Spot angular velocity.</b> The reflected beam rotates at 2<i>ω</i><sub>m</sub> = 40π rad/s.',
          '<b>Step 3 — Linear spot speed.</b><br><i>v</i><sub>spot</sub> = 2<i>ω</i><sub>m</sub> × <i>D</i> = 40π × 10 = 400π ≈ 1257 m s<sup>−1</sup>.',
          '<b>Check.</b> 600 rpm is fast (10 revolutions per second), and each mirror revolution turns the beam through 4π rad — two full turns — since the beam rotates at twice the mirror’s rate. If the wall were a circular arc of radius 10 m centred on the mirror, two full turns would cover 2 × 2π × 10 ≈ 125.6 m per mirror revolution. At 10 revolutions per second, that is ≈ 1257 m/s, matching the direct calculation.',
        ],
        ans: 'The spot moves at approximately 1257 m/s (about 1.26 km/s) along the wall.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Object Moving Toward a Convex Mirror',
        q: 'A convex mirror of focal length 20 cm has an object approaching it along the axis at 5 cm/s. At the instant when the object is 40 cm from the mirror, find the image velocity.',
        steps: [
          '<b>Step 1 — Find image position.</b> Convex mirror: <i>f</i> = +20 cm, <i>u</i> = −40 cm.<br>1/<i>v</i> = 1/<i>f</i> − 1/<i>u</i> = 1/20 − 1/(−40) = (2 + 1)/40 = 3/40.<br><i>v</i> = 40/3 ≈ 13.3 cm.',
          '<b>Step 2 — Magnification.</b><br><i>m</i> = −<i>v</i>/<i>u</i> = −13.3/(−40) = +0.333.',
          '<b>Step 3 — Image velocity.</b> The object approaches the mirror, so <i>u</i> increases from −40 cm towards zero: <i>u̇</i> = +5 cm/s.<br><i>v̇</i> = −<i>m</i><sup>2</sup><i>u̇</i> = −(1/3)<sup>2</sup> × (+5) = −0.556 cm/s.<br>The negative sign means <i>v</i> is decreasing: the virtual image, which lies behind the mirror, moves towards the mirror.',
          '<b>Check.</b> As the object comes closer, <i>u</i> goes from −40 cm to −20 cm and the image distance goes from 13.3 cm to 10 cm, so the image does move towards the mirror, but more slowly than the object. The factor <i>m</i><sup>2</sup> ≈ 0.11 means the image speed is about 11% of the object speed.',
        ],
        ans: 'The image approaches the mirror at approximately 0.56 cm/s.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Moving Mirror',
        q: 'A plane mirror is moving away from a stationary object at 2 m/s. Find the velocity of the image.',
        steps: [
          'The image of a stationary object in a moving mirror moves at twice the mirror’s speed.',
          '<b>Solution.</b> Place the object at the origin. The mirror starts at <i>x</i> = −<i>d</i> and moves away from the object, so after time <i>t</i> it is at <i>x</i><sub>m</sub> = −<i>d</i> − 2<i>t</i>. The image of the object (at <i>x</i> = 0) in a plane mirror at <i>x</i><sub>m</sub> lies at the mirror-symmetric position<br><i>x</i><sub>i</sub> = 2<i>x</i><sub>m</sub> − 0 = −2<i>d</i> − 4<i>t</i>.',
          'The image velocity is<br>d<i>x</i><sub>i</sub>/d<i>t</i> = −4 m/s.',
        ],
        ans: 'The image moves away from the object, in the direction of the mirror’s motion, at 4 m/s — twice the speed of the mirror. (Relative to the mirror, the image moves at 2 m/s in the same direction, away from the mirror.)',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A plane mirror is rotated at 10 rpm. A beam is reflected to a screen 5 m away. Find the spot speed at the instant the beam strikes the screen perpendicularly.',
            a: '<i>ω</i><sub>m</sub> = 10 rpm = π/3 rad s<sup>−1</sup>. Beam: 2<i>ω</i><sub>m</sub> = 2π/3 rad s<sup>−1</sup>. Since <i>ω</i> is in rad/s and <i>D</i> in m, <i>v</i> = 2<i>ω</i><sub>m</sub><i>D</i> comes out directly in m/s: <i>v</i> = (2π/3) × 5 = 10π/3 ≈ 10.5 m/s.',
          },
          {
            q: '[JEE Advanced] A concave mirror of focal length 10 cm has an object moving toward it at 3 cm/s. When <i>u</i> = −30 cm, find the image velocity.',
            a: 'Concave mirror: <i>f</i> = −10 cm, <i>u</i> = −30 cm. 1/<i>v</i> = 1/<i>f</i> − 1/<i>u</i> = −1/10 + 1/30 = −2/30, <i>v</i> = −15 cm. <i>m</i> = −<i>v</i>/<i>u</i> = −(−15)/(−30) = −0.5. Object approaching the mirror: <i>u̇</i> = +3 cm/s. <i>v̇</i> = −<i>m</i><sup>2</sup><i>u̇</i> = −(0.25)(+3) = −0.75 cm/s. Since <i>v</i> is negative and <i>v̇</i> is also negative, <i>v</i> becomes more negative — the image distance grows (15 cm, 15.26 cm for <i>u</i> = −29 cm, …), so the real image moves away from the mirror at 0.75 cm/s.',
          },
          {
            q: '[NEET] An object is placed 20 cm from a convex mirror (<i>f</i> = 20 cm). If the object moves toward the mirror at 10 cm/s, find the image velocity.',
            a: '<i>u</i> = −20, <i>f</i> = +20. 1/<i>v</i> = 1/20 − 1/(−20) = 1/10, <i>v</i> = +10 cm. <i>m</i> = −10/(−20) = +0.5. <i>u̇</i> = +10 cm/s, so <i>v̇</i> = −<i>m</i><sup>2</sup><i>u̇</i> = −(0.25)(+10) = −2.5 cm/s. The virtual image (<i>v</i> = +10 cm) moves toward the mirror at 2.5 cm/s.',
          },
          {
            q: '[JEE Advanced] Two plane mirrors are inclined at 30°. A ray makes an angle of 40° with the first mirror. The first mirror rotates at 2°/s. At what rate does the final reflected ray rotate?',
            a: 'Rotating a plane mirror by Δ<i>θ</i> rotates its reflected ray by 2Δ<i>θ</i>, whatever the direction of the incident ray: the angle of reflection always equals the angle of incidence measured from the (rotated) normal. Only mirror 1 rotates, so the ray leaving it turns at 2 × 2°/s = 4°/s. Mirror 2 is fixed; a reflection reverses the sense of rotation but not its magnitude, so the final ray also turns at 4°/s, in the sense opposite to the ray leaving mirror 1. The 30° angle between the mirrors and the 40° angle the ray makes with the first mirror fix the ray’s direction but do not affect this rate.',
          },
          {
            q: '[JEE Main] Prove that for a plane mirror, the image of a point moving with velocity <i>v⃗</i> has velocity <i>v⃗</i>′ = (−<i>v</i><sub><i>x</i></sub>, <i>v</i><sub><i>y</i></sub>, <i>v</i><sub><i>z</i></sub>), that is, <i>v⃗</i> reflected in the mirror plane (<i>x</i> = 0).',
            a: '(Proof) Let the object be at position <i>r⃗</i> = (<i>x</i>, <i>y</i>, <i>z</i>) and the mirror in the plane <i>x</i> = 0. The image is at <i>r⃗</i>′ = (−<i>x</i>, <i>y</i>, <i>z</i>). Differentiating, <i>v⃗</i>′ = d<i>r⃗</i>′/d<i>t</i> = (−<i>v</i><sub><i>x</i></sub>, <i>v</i><sub><i>y</i></sub>, <i>v</i><sub><i>z</i></sub>). This is <i>v⃗</i> reflected in the mirror plane: the normal component changes sign and the parallel components are unchanged. (It is not −<i>v⃗</i>, which would also reverse <i>v</i><sub><i>y</i></sub> and <i>v</i><sub><i>z</i></sub>.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 630–633 ─────────────────────────
  {
    n: 'F',
    title: 'Advanced Optical Instruments and Resolving Power',
    extra: true,
    kalam: 'Two point objects are just resolvable when the central diffraction maximum of one coincides with the first minimum of the other.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 06 covers the simple and compound microscopes (with their derivations) and the astronomical, terrestrial and reflecting telescopes. The chapter does not address (i) <b>resolving power</b> — the ability to distinguish two close objects — or (ii) the <b>Galilean telescope</b>; this addendum also works one more relaxed-eye microscope with a given lens separation.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Resolving power of a microscope (Rayleigh criterion).</b> Two point objects are just resolvable when the <b>central</b> diffraction maximum of one coincides with the first minimum of the other. For a microscope objective of diameter <i>D</i> (here <i>D</i> is the objective’s diameter, not the 25 cm least distance of distinct vision), the angular separation is:<br><i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i>.<br>The linear separation on the object is:<br><i>d</i><sub>min</sub> = 0.61<i>λ</i>/NA,<br>where NA = <i>n</i> sin <i>α</i> is the numerical aperture, <i>n</i> the refractive index of the medium between object and objective, and <i>α</i> the half-angle of the cone of light accepted by the objective.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>λ</i> in m, NA dimensionless, so <i>d</i><sub>min</sub> in m. Correct.',
      },
      {
        t: 'p',
        html: '<b>Resolving power of a telescope.</b> For a telescope objective of diameter <i>D</i>:<br><i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i>.<br>Larger <i>D</i> means better resolution (smaller <i>θ</i><sub>min</sub>).',
      },
      {
        t: 'p',
        html: '<b>Galilean telescope.</b> Uses a convex objective (converging) and a concave eyepiece (diverging). The final image is virtual and erect. Magnifying power:<br><i>M</i> = −<i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>.<br>(Here <i>M</i> carries a sign, as <i>m</i> = <i>v</i>/<i>u</i> does: <i>M</i> = −<i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> is negative, an inverted image, for the astronomical telescope and positive, an erect image, for the Galilean, whose <i>f</i><sub>e</sub> < 0. Topic 06 quotes only its size, <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>.)<br>Tube length: <i>L</i> = <i>f</i><sub>o</sub> − |<i>f</i><sub>e</sub>| (shorter than the astronomical telescope’s <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>).',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>f</i><sub>o</sub> and <i>f</i><sub>e</sub> in same units, <i>M</i> dimensionless. <i>L</i> in same units. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Resolving Power of a Microscope',
        q: 'A microscope has an objective of diameter 2 mm and numerical aperture 0.8. It is used to view objects in yellow light (<i>λ</i> = 600 nm) with oil immersion of refractive index 1.5. Find the minimum resolvable distance.',
        steps: [
          '<b>Step 1 — Apply Rayleigh criterion.</b><br><i>d</i><sub>min</sub> = 0.61<i>λ</i>/NA.',
          '<b>Step 2 — Substitute.</b><br><i>λ</i> = 600 × 10<sup>−9</sup> m = 6 × 10<sup>−7</sup> m.<br><i>d</i><sub>min</sub> = (0.61 × 6 × 10<sup>−7</sup>)/0.8 = (3.66 × 10<sup>−7</sup>)/0.8 = 4.575 × 10<sup>−7</sup> m = 0.458 μm.',
          '<b>Check.</b> Oil immersion increases NA (by increasing <i>n</i>), which decreases <i>d</i><sub>min</sub> and improves resolution. The value 0.5 μm is typical of the resolution limit of optical microscopes. (The objective diameter is not needed here: the numerical aperture already carries the light-collecting geometry.)',
        ],
        ans: 'The minimum resolvable distance is approximately 0.46 μm — about half a micrometre.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Galilean Telescope',
        q: 'A Galilean telescope has an objective of focal length 80 cm and eyepiece of focal length 20 cm (concave). Find its magnifying power and tube length.',
        steps: [
          '<b>Step 1 — Magnifying power.</b><br><i>M</i> = −<i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = −80/(−20) = +4.<br>The positive sign indicates an erect image.',
          '<b>Step 2 — Tube length.</b><br><i>L</i> = <i>f</i><sub>o</sub> − |<i>f</i><sub>e</sub>| = 80 − 20 = 60 cm.',
          '<b>Check.</b> The astronomical telescope with same objective but convex eyepiece of 20 cm would give <i>M</i> = −4 (inverted; its size, 4, is Topic 06’s <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>) and <i>L</i> = 80 + 20 = 100 cm. The Galilean version is shorter and gives an upright image — the reasons it’s used in opera glasses and cheap theatre binoculars.',
        ],
        ans: 'Magnifying power is 4× (erect), tube length is 60 cm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Compound Microscope with a Given Lens Separation',
        q: 'A compound microscope has an objective of focal length 1 cm and an eyepiece of focal length 5 cm. The distance between the two lenses is 20 cm. It is focused for a relaxed eye (final image at infinity). Find: (a) the object distance from the objective, and (b) the total magnification. Take the least distance of distinct vision as 25 cm.',
        steps: [
          '<b>Step 1 — Image distance of the objective.</b> For relaxed-eye viewing the real image formed by the objective must fall exactly at the eyepiece’s first focal point, so that the eyepiece acts as a simple magnifier on an object at its focus. The distance between the lenses is therefore <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub>, so<br><i>v</i><sub>o</sub> = 20 − <i>f</i><sub>e</sub> = 20 − 5 = 15 cm.',
          '<b>Step 2 — Object distance.</b> Apply the lens formula to the objective:<br>1/<i>v</i><sub>o</sub> − 1/<i>u</i><sub>o</sub> = 1/<i>f</i><sub>o</sub> ⟹ 1/15 − 1/<i>u</i><sub>o</sub> = 1/1.<br>1/<i>u</i><sub>o</sub> = 1/15 − 1 = −14/15 ⟹ <i>u</i><sub>o</sub> = −15/14 ≈ −1.07 cm.<br>The object is approximately 1.07 cm from the objective.',
          '<b>Step 3 — Magnification.</b><br><i>m</i><sub>o</sub> = <i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>| = 15/(15/14) = 14.<br><i>M</i><sub>e</sub> = <i>D</i>/<i>f</i><sub>e</sub> = 25/5 = 5.<br><i>M</i> = <i>m</i><sub>o</sub> × <i>M</i><sub>e</sub> = 14 × 5 = 70.',
          '<b>Check.</b> Using <i>m</i><sub>o</sub> = <i>v</i><sub>o</sub>/<i>f</i><sub>o</sub> − 1 = 15 − 1 = 14 gives the same value. If instead the question had given NCERT’s tube length <i>L</i> = 20 cm (lenses 26 cm apart), then <i>v</i><sub>o</sub> = <i>f</i><sub>o</sub> + <i>L</i> = 21 cm, <i>u</i><sub>o</sub> = −1.05 cm, <i>m</i><sub>o</sub> = 20 and <i>M</i> = 100. Always read how the tube length is defined in the question.',
        ],
        ans: 'The object is about 1.07 cm from the objective and the total magnification is 70.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A telescope has an objective of diameter 10 cm. What is its theoretical resolving power for yellow light (<i>λ</i> = 600 nm)?',
            a: '<i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i> = (1.22 × 600 × 10<sup>−9</sup>)/0.1 = 7.32 × 10<sup>−6</sup> rad ≈ 1.5 arcseconds; resolving power 1/<i>θ</i><sub>min</sub> ≈ 1.4 × 10<sup>5</sup> rad<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] A microscope has NA = 1.2 and uses oil of <i>n</i> = 1.5. Find the minimum resolvable distance for green light (<i>λ</i> = 550 nm).',
            a: '<i>d</i><sub>min</sub> = 0.61<i>λ</i>/NA = (0.61 × 550 × 10<sup>−9</sup>)/1.2 ≈ 2.8 × 10<sup>−7</sup> m = 0.28 μm.',
          },
          {
            q: '[NEET] The magnifying power of a telescope is 50 in normal adjustment. If the focal length of the eyepiece is 4 cm, find the focal length of the objective.',
            a: '<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = 50, <i>f</i><sub>e</sub> = 4 cm, so <i>f</i><sub>o</sub> = 200 cm.',
          },
          {
            q: '[JEE Advanced] A Galilean telescope has <i>f</i><sub>o</sub> = 30 cm and <i>f</i><sub>e</sub> = −6 cm. It is used to view an object 50 m away. Find the angular magnification in normal adjustment (final image at infinity).',
            a: '<i>M</i> = −<i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = −30/(−6) = +5 (erect). The object at 50 m is practically at infinity compared with <i>f</i><sub>o</sub>, so <i>M</i> ≈ 5. (Exactly, the objective’s image is at <i>v</i><sub>o</sub> = 30.18 cm and <i>M</i> = <i>v</i><sub>o</sub>/|<i>f</i><sub>e</sub>| ≈ 5.03.)',
          },
          {
            q: '[JEE Main] Show that the resolving power of a telescope improves with larger objective diameter.',
            a: '<i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i>. Larger <i>D</i> means smaller <i>θ</i><sub>min</sub>, so smaller minimum resolvable angle — better resolving power. Light-gathering power also scales as <i>D</i><sup>2</sup>, so larger telescopes can see fainter objects and distinguish closer pairs.',
          },
        ],
      },
    ],
  },
];
