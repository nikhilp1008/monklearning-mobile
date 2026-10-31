import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 03 and 04: pp. 577–591 of the Class 12 Physics Master
 * Reference, word for word: 9.3 Refraction at Spherical Surfaces and the
 * Lens-Maker’s Formula (pp. 577–583) and 9.4 Thin Lens, Power and Combinations
 * (pp. 584–591), each split at its Sections 9.N.1 to 9.N.8. Figures 9.7
 * (caption p. 578, drawn p. 579), 9.8 (caption p. 584, drawn p. 585) and 9.9
 * (caption p. 587, drawn p. 588) are redrawn in lib/diagrams.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 577–583 ─────────────────────────
  {
    n: '03',
    title: 'Refraction at Spherical Surfaces and the Lens-Maker’s Formula',
    kalam: 'To understand a lens, we first have to understand what one curved surface does, and then simply do it twice.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The engine room of lens optics. <b>JEE Main</b> regularly asks a lens-maker numerical (find <i>f</i> from <i>R</i> and <i>n</i>, or the focal-length change when a lens is dipped in a liquid). <b>JEE Advanced</b> loves refraction at a single spherical surface — glass spheres, rods, and immersed objects. <b>NEET</b> keeps it conceptual (how <i>f</i> depends on medium and shape). For <b>CBSE Boards</b>, the single-surface relation and the lens-maker’s formula derivation are classic 2–3 mark questions.',
      },
      {
        t: 'p',
        html: 'So far every refraction we have met happened at a flat boundary. But the most useful optical device of all — the lens — is built from <b>curved</b> refracting surfaces. To understand a lens, we first have to understand what one curved surface does, and then simply do it twice.',
      },
      {
        t: 'p',
        html: 'Picture looking at a fish through the rounded glass wall of an aquarium. The fish appears shifted and resized, and the reason is that light from the fish refracts as it crosses the curved wall (water to glass to air). A curved surface bends each ray by a different amount depending on where it strikes, and the net effect is to gather (or spread) the rays so they appear to come from a new point — an image. The position of that image depends on three things: the two refractive indices on either side (<i>n</i><sub>1</sub> and <i>n</i><sub>2</sub>) and the <b>radius of curvature</b> <i>R</i> of the surface. These combine into one tidy relation, <i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>, which is the curved-surface cousin of Snell’s law.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a flat surface (Topic 02) is just a spherical surface with <i>R</i> = ∞. Put <i>R</i> → ∞ in the relation and the right side vanishes, giving <i>n</i><sub>2</sub>/<i>v</i> = <i>n</i><sub>1</sub>/<i>u</i> — exactly the apparent-depth result. So the curved-surface formula doesn’t replace what you learned; it generalises it. Curvature is what lets a surface focus light instead of merely shifting it.',
      },
      {
        t: 'p',
        html: 'Now build a lens. A <b>thin lens</b> is two refracting surfaces back to back, with glass in between and air (usually) outside. Light refracts once entering the glass and again leaving it. If we apply the single-surface relation at each face and add the two results, almost everything cancels and we are left with the <b>lens-maker’s formula</b>:<br>1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>).<br>This is a remarkable statement: it says the focal length of a lens — its entire optical personality — is fixed by just two things, the <b>material</b> (<i>n</i>) and the <b>shape</b> (<i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>). A lens grinder (“lens-maker”) choosing glass and curvatures is literally dialling in a focal length, which is why the formula carries that name.',
      },
      {
        t: 'p',
        html: 'Two consequences are worth feeling in your bones before the algebra. First, <b>a lens’s focal length depends on the surrounding medium.</b> The (<i>n</i> − 1) factor is really (<i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1). Dip a glass lens in water and that factor shrinks dramatically, so the lens becomes much weaker (longer focal length). Push it to the extreme — a lens made of ice in water almost stops working as a lens, and glass in a liquid of the same index stops working at all. Second, <b>the same lens can converge or diverge depending on the medium</b>: an air bubble in water is shaped like a convex lens but actually diverges light, because the “lens” is now rarer than its surroundings.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The single-surface relation and the lens-maker’s formula are <b>paraxial</b> (small angles, narrow beams near the axis) and assume a <b>thin lens</b> (its thickness is negligible compared with the object/image distances and the radii). For thick lenses or wide apertures, aberrations creep in and these clean formulas only approximate reality. The sign convention must be applied rigorously — more so here than anywhere else in the chapter, because two indices and two radii all carry signs.',
      },
      { t: 'fig', id: 'p12-09-fig-9.7' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Refraction at a single spherical surface (light going from medium <i>n</i><sub>1</sub> into <i>n</i><sub>2</sub>)',
        main: '<i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>',
        legend: ['<i>u</i> = object distance', '<i>v</i> = image distance', '<i>R</i> = radius of curvature'],
        note: '(all from the pole of the surface, New Cartesian convention)',
      },
      {
        t: 'formula',
        kicker: 'Magnification at a single surface',
        main: '<i>m</i> = <i>h</i>′/<i>h</i> = <i>n</i><sub>1</sub><i>v</i>/(<i>n</i><sub>2</sub><i>u</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Lens-maker’s formula (thin lens in air)',
        main: '1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Lens-maker’s formula, general (lens of index <i>n</i><sub>2</sub> in a medium of index <i>n</i><sub>1</sub>)',
        main: '1/<i>f</i> = (<i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>)',
        legend: ['<i>R</i><sub>1</sub> = radius of the first surface light meets', '<i>R</i><sub>2</sub> = radius of the second'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Thin lens formula',
        main: '1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Sign convention for radii</b> (New Cartesian, light travelling left to right): <i>R</i> is <b>positive</b> if the centre of curvature lies on the <b>outgoing (right) side</b> of the surface, <b>negative</b> if on the incoming (left) side. Hence for a <b>biconvex</b> lens <i>R</i><sub>1</sub> > 0, <i>R</i><sub>2</sub> < 0; for a <b>biconcave</b> lens <i>R</i><sub>1</sub> < 0, <i>R</i><sub>2</sub> > 0.',
      },
      {
        t: 'p',
        html: '<b>Definitions & units.</b> <i>n</i> (refractive index) is dimensionless. <i>u</i>, <i>v</i>, <i>f</i>, <i>R</i> are lengths, SI unit metre, [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]. Magnification is dimensionless. A useful shape check: a lens is <b>converging</b> (real <i>f</i> > 0) when it is thicker at the centre and denser than its surroundings, or thinner at the centre and rarer than them; otherwise it diverges.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Refraction at a single spherical surface.</b> Let a convex surface of radius <i>R</i> separate a rarer medium <i>n</i><sub>1</sub> (left) from a denser medium <i>n</i><sub>2</sub> (right), with centre of curvature <i>C</i> on the right. A paraxial ray from an axial point object <i>O</i> strikes the surface at <i>M</i> (small height <i>h</i> above the axis) and refracts to form the image <i>I</i>. Let <i>α</i> = ∠<i>MOP</i>, <i>β</i> = ∠<i>MIP</i>, and <i>θ</i> = ∠<i>MCP</i>, with <i>i</i>, <i>r</i> the angles of incidence and refraction.',
      },
      {
        t: 'p',
        html: 'In triangle <i>OMC</i>, the exterior angle gives <i>i</i> = <i>α</i> + <i>θ</i>. In triangle <i>MIC</i>, <i>θ</i> = <i>r</i> + <i>β</i>, so <i>r</i> = <i>θ</i> − <i>β</i>. For paraxial rays Snell’s law linearises to <i>n</i><sub>1</sub><i>i</i> = <i>n</i><sub>2</sub><i>r</i>:<br><i>n</i><sub>1</sub>(<i>α</i> + <i>θ</i>) = <i>n</i><sub>2</sub>(<i>θ</i> − <i>β</i>) ⇒ <i>n</i><sub>1</sub><i>α</i> + <i>n</i><sub>2</sub><i>β</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)<i>θ</i>.<br>For small angles, <i>α</i> ≈ <i>h</i>/(−<i>u</i>), <i>β</i> ≈ <i>h</i>/<i>v</i>, <i>θ</i> ≈ <i>h</i>/<i>R</i> (using the sign convention, with <i>u</i> negative for a real object). Substituting and cancelling <i>h</i>:<br><i>n</i><sub>1</sub>/(−<i>u</i>) + <i>n</i><sub>2</sub>/<i>v</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i> ⇒ <i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>.',
      },
      {
        t: 'p',
        html: 'Although derived for a convex surface and a real image, sign-consistency makes it universal for any spherical refracting surface.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Lens-maker’s formula.</b> A thin lens of material index <i>n</i> in air has two surfaces of radii <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub>. Treat it as two single-surface refractions in series; because the lens is thin, both refractions occur at essentially the same plane.',
      },
      {
        t: 'p',
        html: '<b>Surface 1</b> (air → glass, radius <i>R</i><sub>1</sub>): an object at <i>u</i> forms an intermediate image at <i>v</i><sub>1</sub>,<br><i>n</i>/<i>v</i><sub>1</sub> − 1/<i>u</i> = (<i>n</i> − 1)/<i>R</i><sub>1</sub>.   (1)<br><b>Surface 2</b> (glass → air, radius <i>R</i><sub>2</sub>): the intermediate image <i>v</i><sub>1</sub> acts as the object, giving the final image at <i>v</i>,<br>1/<i>v</i> − <i>n</i>/<i>v</i><sub>1</sub> = (1 − <i>n</i>)/<i>R</i><sub>2</sub>.   (2)<br>Adding (1) and (2), the <i>n</i>/<i>v</i><sub>1</sub> terms cancel:<br>1/<i>v</i> − 1/<i>u</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>).<br>Comparing with the thin-lens definition 1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i> (object at infinity ⇒ <i>v</i> = <i>f</i>):<br>1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: 'Repeating the derivation with the lens in a medium of index <i>n</i><sub>1</sub> replaces (<i>n</i> − 1) by (<i>n</i>/<i>n</i><sub>1</sub> − 1) — the result that governs every “lens dipped in liquid” problem.',
      },
      {
        t: 'p',
        html: '<b>Derivation 3 — Magnification at a single spherical surface.</b> Tracing the ray through the pole and applying the small-angle (paraxial) Snell relation to the object and image heights gives <i>h</i>′/<i>h</i> = <i>n</i><sub>1</sub><i>v</i>/(<i>n</i><sub>2</sub><i>u</i>). The extra index ratio (absent in the mirror case) appears because object and image sit in different media, so the angular sizes scale with the refractive indices as well as the distances.',
      },
      {
        t: 'p',
        html: '<b>Key Procedure — applying the radius sign convention.</b> (i) Always take light as travelling left to right. (ii) For each surface, ask: on which side is its centre of curvature? Right side ⇒ <i>R</i> > 0; left side ⇒ <i>R</i> < 0. (iii) A flat surface has <i>R</i> = ∞, contributing zero. Get these signs right and the lens-maker’s formula automatically delivers a positive <i>f</i> for converging lenses and negative for diverging ones.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'One end of a long glass rod (<i>n</i> = 1.5) is polished into a convex surface of radius 10 cm. A small object is placed in air on the axis, 50 cm from this end. Where is the image formed?',
        steps: [
          '<b>Given:</b> <i>n</i><sub>1</sub> = 1, <i>n</i><sub>2</sub> = 1.5, <i>R</i> = +10 cm (centre of curvature inside the rod, on the outgoing side), <i>u</i> = −50 cm.',
          '<i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i> ⇒ 1.5/<i>v</i> − 1/(−50) = 0.5/10 = 0.05.',
          '1.5/<i>v</i> = 0.05 − 0.02 = 0.03 ⇒ <i>v</i> = 1.5/0.03 = +50 cm.',
          'The positive <i>v</i> confirms it lies on the outgoing (glass) side.',
        ],
        ans: 'A real image forms 50 cm inside the rod.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A biconvex lens has both faces of radius 20 cm and is made of glass with <i>n</i> = 1.5. Find its focal length.',
        steps: [
          '<b>The shortcut:</b> for a symmetric biconvex lens, <i>R</i><sub>1</sub> = +20, <i>R</i><sub>2</sub> = −20, so 1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub> = 1/20 + 1/20 = 1/10.',
          '1/<i>f</i> = (1.5 − 1)(1/10) = 0.05',
          '<b>The trap:</b> forgetting that <i>R</i><sub>2</sub> is <b>negative</b> for the second face turns the sum into a difference and gives an infinite focal length. Memory aid for symmetric lenses: <i>f</i> = <i>R</i>/(2(<i>n</i> − 1)) — here 20/(2(0.5)) = 20 cm instantly.',
        ],
        ans: '<i>f</i> = 20 cm',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'The lens of worked example 2 (<i>f</i> = 20 cm in air, <i>n</i><sub>g</sub> = 1.5) is fully immersed in water (<i>n</i><sub>w</sub> = 4/3). Find its new focal length. (Combines the lens-maker’s formula with the medium-dependence of <i>f</i>.)',
        steps: [
          '<b>Take the ratio of the two lens-maker expressions</b> (the shape factor cancels):<br><i>f</i><sub>water</sub>/<i>f</i><sub>air</sub> = (<i>n</i><sub>g</sub> − 1)/(<i>n</i><sub>g</sub>/<i>n</i><sub>w</sub> − 1) = 0.5/(1.5/(4/3) − 1) = 0.5/(1.125 − 1) = 0.5/0.125 = 4.',
          '<i>f</i><sub>water</sub> = 4 × 20',
          'Physically, the glass–water index contrast is far smaller than glass–air, so each surface bends light much less.',
        ],
        ans: '<i>f</i><sub>water</sub> = 80 cm: in water the lens is four times weaker.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A solid glass sphere of radius <i>R</i> and refractive index 1.5 is placed in air. A parallel beam travels along a diameter. Where does it come to a focus? (Two single-surface refractions in series.)',
        steps: [
          '<b>Surface 1</b> (air → glass, radius +<i>R</i>, object at infinity):<br>1.5/<i>v</i><sub>1</sub> − 1/(−∞) = 0.5/<i>R</i> ⇒ <i>v</i><sub>1</sub> = 3<i>R</i> (measured from surface 1).',
          'This would-be image lies 3<i>R</i> to the right of surface 1, but surface 2 is only 2<i>R</i> away (the diameter). So it falls <i>R</i> beyond surface 2 and serves as a <b>virtual object</b> for it at <i>u</i><sub>2</sub> = +<i>R</i>.',
          '<b>Surface 2</b> (glass → air, radius −<i>R</i> since its centre of curvature is now on the incoming side):<br>1/<i>v</i> − 1.5/<i>u</i><sub>2</sub> = (1 − 1.5)/(−<i>R</i>) = 0.5/<i>R</i>,   <i>u</i><sub>2</sub> = +<i>R</i>.<br>1/<i>v</i> = 0.5/<i>R</i> + 1.5/<i>R</i> = 2/<i>R</i> ⇒ <i>v</i> = <i>R</i>/2.',
          'This is the standard result that a glass sphere (<i>n</i> = 1.5) focuses parallel light half a radius outside itself. The elegance is that the cancelling intermediate image and the careful <i>R</i>-sign flip at the second surface are the whole game.',
        ],
        ans: 'The beam focuses at <i>R</i>/2 beyond the far surface of the sphere.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A convex spherical surface of radius 15 cm separates air from glass (<i>n</i> = 1.5). An object in air is 30 cm from the surface. Find the image position.',
            a: '1.5/<i>v</i> − 1/(−30) = 0.5/15 ⇒ <i>v</i> = ∞ (image at infinity).',
          },
          {
            q: '[NEET] A plano-convex lens of glass (<i>n</i> = 1.5) has its curved face of radius 25 cm. Find its focal length and power.',
            a: '1/<i>f</i> = 0.5(1/25) ⇒ <i>f</i> = 50 cm, <i>P</i> = +2 D.',
          },
          {
            q: '[JEE Main] A double-concave lens of glass (<i>n</i> = 1.5) has both faces of radius 30 cm. Find its focal length, and state whether it converges or diverges.',
            a: '<i>R</i><sub>1</sub> = −30, <i>R</i><sub>2</sub> = +30 ⇒ 1/<i>f</i> = 0.5(−1/15) ⇒ <i>f</i> = −30 cm; diverging.',
          },
          {
            q: '[JEE Main] An equiconvex lens has focal length 15 cm in air (<i>n</i> = 1.5). What is its focal length when immersed in a liquid of index 1.6?',
            a: '<i>f</i><sub>liq</sub>/<i>f</i><sub>air</sub> = 0.5/(1.5/1.6 − 1) = 0.5/(−0.0625) = −8 ⇒ <i>f</i><sub>liq</sub> = −120 cm (now diverging, since glass is rarer than the liquid).',
          },
          {
            q: '[JEE Advanced] A small air bubble is trapped inside a large block of glass (<i>n</i> = 1.5). Viewed normally through the nearest flat face, the bubble appears to be 5 cm below the surface. Find its real depth.',
            a: 'Flat face ⇒ apparent depth = real depth/<i>n</i>, so real depth = 5 × 1.5 = 7.5 cm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The lens-maker’s formula assumes the lens is:',
        opts: [
          {
            label: 'thick and made of crown glass',
            nudge: '<b>(a)</b> contradicts the thin-lens assumption. Choosing <b>(a)</b> usually means forgetting why the two surfaces could be combined at one point.',
          },
          { label: 'thin, with paraxial rays', nudge: null },
          { label: 'used only in water', nudge: '<b>(c)</b> and <b>(d)</b> are unrelated special cases.' },
          { label: 'silvered on one face', nudge: '<b>(c)</b> and <b>(d)</b> are unrelated special cases.' },
        ],
        correct: 1,
        solution: 'The derivation adds two single-surface results taken at the same plane (thin lens) for paraxial rays.',
      },
      {
        t: 'mcq',
        q: 'A glass convex lens (<i>n</i> = 1.5) has focal length <i>f</i> in air. When placed in a medium of refractive index 1.5, its focal length becomes:',
        opts: [
          { label: '<i>f</i>', nudge: '<b>(a)</b> ignores the medium dependence.' },
          { label: '1.5<i>f</i>', nudge: '<b>(b)</b> scales <i>f</i> by the medium’s index; the lens-maker factor (<i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1) does not scale, it vanishes.' },
          { label: 'zero', nudge: '<b>(c)</b> confuses <i>f</i> → ∞ (no power) with <i>f</i> = 0.' },
          { label: 'infinite', nudge: null },
        ],
        correct: 3,
        solution: 'With <i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> = 1, the factor (<i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1) = 0, so 1/<i>f</i> = 0 ⇒ <i>f</i> = ∞ — the lens vanishes optically. The lens becomes invisible because there is no index contrast to refract at.',
      },
      {
        t: 'mcq',
        q: 'For refraction at a single spherical surface, the correct relation is:',
        opts: [
          {
            label: '<i>n</i><sub>1</sub>/<i>v</i> − <i>n</i><sub>2</sub>/<i>u</i> = (<i>n</i><sub>1</sub> − <i>n</i><sub>2</sub>)/<i>R</i>',
            nudge: '<b>(a)</b> swaps which index pairs with which distance.',
          },
          { label: '<i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>', nudge: null },
          {
            label: '1/<i>v</i> − 1/<i>u</i> = 1/<i>R</i>',
            nudge: '<b>(c)</b> drops the indices entirely (that’s a mirror-like guess).',
          },
          {
            label: '<i>n</i><sub>2</sub>/<i>v</i> + <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>',
            nudge: '<b>(d)</b> uses a + sign, importing the mirror formula’s structure — a very common cross-topic slip.',
          },
        ],
        correct: 1,
        solution: 'Image-side index over image distance, minus object-side index over object distance, equals the index jump over <i>R</i>.',
      },
      {
        t: 'mcq',
        q: 'An equiconvex lens is cut into two equal halves by a plane containing the principal axis (a “longitudinal” cut). The focal length of each half is:',
        opts: [
          { label: '<i>f</i>/2', nudge: '<b>(a)</b> <i>f</i>/2 is what two such lenses in contact give, not half of one.' },
          { label: '<i>f</i>', nudge: null },
          {
            label: '2<i>f</i>',
            nudge: 'Option <b>(c)</b> confuses this with a transverse cut (perpendicular to the axis), which would make two plano-convex lenses each of focal length 2<i>f</i>.',
          },
          { label: '4<i>f</i>', nudge: '<b>(d)</b> 4<i>f</i> has no basis: no cut changes the radii that much.' },
        ],
        correct: 1,
        solution: 'A cut along the axis leaves each half with the same two radii of curvature, so by the lens-maker’s formula <i>f</i> is unchanged. Recognising which cut preserves the radii is the whole point.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Wrong sign for <i>R</i><sub>2</sub> (and <i>R</i><sub>1</sub>).</b> For a biconvex lens <i>R</i><sub>1</sub> > 0 but <i>R</i><sub>2</sub> < 0. Treating both as positive collapses the lens-maker’s formula. Decide each radius’s sign from where its centre of curvature sits, every time.',
          '<b>Forgetting the medium in (<i>n</i> − 1).</b> The factor is really (<i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1). Any “lens in water/liquid” problem needs the ratio, not the bare (<i>n</i> − 1).',
          '<b>Mixing up <i>n</i><sub>1</sub> and <i>n</i><sub>2</sub> at a single surface.</b> <i>n</i><sub>1</sub> is the medium the light starts in; <i>n</i><sub>2</sub> is the medium it enters. The relation is <i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i> — image-side index with <i>v</i>.',
          '<b>Using the mirror’s “+” in the lens/surface formula.</b> Refraction relations subtract (−<i>n</i><sub>1</sub>/<i>u</i>); the mirror formula adds. Keep the two structures distinct.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For a symmetric (equiconvex/equiconcave) lens use <i>f</i> = <i>R</i>/(2(<i>n</i> − 1)) to skip the sign bookkeeping. And for “lens in liquid,” compute the ratio <i>f</i><sub>medium</sub>/<i>f</i><sub>air</sub> = (<i>n</i><sub>g</sub> − 1)/(<i>n</i><sub>g</sub>/<i>n</i><sub>m</sub> − 1) directly — the shape cancels, so you never need the radii.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Single spherical surface',
            note: '<i>n</i><sub>2</sub>/<i>v</i> − <i>n</i><sub>1</sub>/<i>u</i> = (<i>n</i><sub>2</sub> − <i>n</i><sub>1</sub>)/<i>R</i>; magnification <i>m</i> = <i>n</i><sub>1</sub><i>v</i>/(<i>n</i><sub>2</sub><i>u</i>).',
          },
          {
            f: 'Lens-maker (air)',
            note: '1/<i>f</i> = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>); <b>in medium:</b> replace (<i>n</i> − 1) by (<i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> − 1).',
          },
          {
            f: 'Radius signs',
            note: 'centre of curvature on outgoing side ⇒ <i>R</i> > 0. Biconvex: <i>R</i><sub>1</sub> > 0, <i>R</i><sub>2</sub> < 0. Flat: <i>R</i> = ∞.',
          },
          { f: 'Symmetric-lens shortcut', note: '<i>f</i> = <i>R</i>/(2(<i>n</i> − 1)).' },
          {
            f: 'Lens in liquid',
            note: '<i>f</i><sub>liq</sub>/<i>f</i><sub>air</sub> = (<i>n</i><sub>g</sub> − 1)/(<i>n</i><sub>g</sub>/<i>n</i><sub>ℓ</sub> − 1); lens weakens as the medium index approaches the glass’s, and reverses once it exceeds it.',
          },
        ],
        aids: [
          '“A flat surface is just <i>R</i> = ∞” — curvature is what focuses.',
          '“Refraction subtracts, reflection adds” — single-surface and lens formulas use a minus sign; the mirror formula uses a plus.',
          '“(<i>n</i> − 1) hides the medium” — it is really <i>n</i><sub>lens</sub>/<i>n</i><sub>medium</sub> − 1.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 584–591 ─────────────────────────
  {
    n: '04',
    title: 'Thin Lens, Power and Combinations',
    kalam: 'A lens is a sculptor of wavefronts.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Among the highest-yield topics in the whole chapter. <b>JEE Main</b> and <b>NEET</b> both almost always carry a lens-formula or magnification numerical, and combinations/power appear most years. <b>JEE Advanced</b> mixes lenses with mirrors, displacement-method, and silvered lenses. <b>CBSE Boards</b> ask the lens formula, magnification, power, and combination-in-contact derivations — easy, dependable marks.',
      },
      {
        t: 'p',
        html: 'A lens is a sculptor of wavefronts. A <b>convex (converging) lens</b> is thicker in the middle: it slows the central part of a wavefront more than the edges, curving a flat incoming wave inward so the rays meet at the focus. A <b>concave (diverging) lens</b> is thinner in the middle and does the reverse, spreading rays apart as though they sprang from a virtual focus. The magnifying glass, the camera, your spectacles, the eyepiece of every instrument in this chapter — all are lenses doing exactly this.',
      },
      {
        t: 'p',
        html: 'The single relation that locates any image through a thin lens is the <b>lens formula</b>:<br>1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>.<br>Notice the <b>minus sign</b> — this is not the mirror formula. It is the most important sign distinction in the chapter, and getting it backwards is the single most common lens mistake. The companion is the <b>magnification</b> <i>m</i> = <i>v</i>/<i>u</i> (again, plus <i>v</i>/<i>u</i> for a lens, versus −<i>v</i>/<i>u</i> for a mirror). A negative <i>m</i> means an inverted (real) image; a positive <i>m</i> means erect (virtual).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a convex lens behaves like a generous host: bring an object closer and closer from far away, and the real image it throws marches outward and grows, racing to infinity as the object reaches the focus. Step the object inside the focus and the lens switches roles entirely — it now gives a magnified, erect, virtual image on the same side, which is precisely the “magnifying glass” mode. A concave lens, by contrast, is utterly predictable: for any real object it always produces a virtual, erect, diminished image — the exact analogue of a convex mirror.',
      },
      {
        t: 'p',
        html: 'For practical work we rate a lens not by its focal length but by its <b>power</b>, <i>P</i> = 1/<i>f</i>, measured in <b>dioptres</b> (D) when <i>f</i> is in metres. A short focal length means strong bending, hence high power: a +5 D lens (<i>f</i> = 20 cm) is twice as strong as a +2.5 D lens. Power is convenient because <b>lenses placed in contact simply add their powers</b> — your optician prescribing “−2.5 D” is specifying exactly the diverging power needed to correct your eye. When two thin lenses are kept in contact, <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub>; if they are separated by a distance, a correction term appears.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Everything here is for <b>thin lenses</b> and <b>paraxial</b> rays. The simple contact rule <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> requires the lenses to be touching (negligible separation); for a finite gap you must use the separated-lens formula. Real lenses also suffer <b>chromatic aberration</b> (different colours focus at slightly different points, since <i>n</i> — and hence <i>f</i> — depends on wavelength) and spherical aberration; the thin-lens formula ignores both.',
      },
      { t: 'fig', id: 'p12-09-fig-9.8' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Lens formula',
        main: '1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Magnification',
        main: '<i>m</i> = <i>h</i>′/<i>h</i> = <i>v</i>/<i>u</i>',
        legend: [],
        note: 'Positive ⇒ erect/virtual; negative ⇒ inverted/real.',
      },
      {
        t: 'formula',
        kicker: 'Power of a lens',
        main: '<i>P</i> = 1/<i>f</i> (dioptre, D; <i>f</i> in metres) = (<i>n</i> − 1)(1/<i>R</i><sub>1</sub> − 1/<i>R</i><sub>2</sub>)',
        legend: [],
        note: 'Dimensional formula [M<sup>0</sup> L<sup>−1</sup> T<sup>0</sup>]. Convex ⇒ <i>P</i> > 0; concave ⇒ <i>P</i> < 0.',
      },
      {
        t: 'formula',
        kicker: 'Combination of thin lenses in contact',
        main: '1/<i>F</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub> + ⋯<br><i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> + ⋯<br><i>m</i> = <i>m</i><sub>1</sub> × <i>m</i><sub>2</sub> × ⋯',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Two thin lenses separated by distance <i>d</i>',
        main: '1/<i>F</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub> − <i>d</i>/(<i>f</i><sub>1</sub><i>f</i><sub>2</sub>)<br><i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> − <i>dP</i><sub>1</sub><i>P</i><sub>2</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Silvered lens (acts as an equivalent mirror)',
        main: '<i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>',
        legend: [
          '<i>P</i><sub>lens</sub> = power of the lens, 1/<i>f</i><sub>lens</sub>',
          '<i>P</i><sub>mirror</sub> = power of the silvered surface as a mirror in air, positive if concave',
          '<i>P</i><sub>eq</sub> = power of the equivalent mirror, <i>f</i><sub>eq</sub> = −1/<i>P</i><sub>eq</sub>',
        ],
        note: null,
      },
      {
        t: 'table',
        title: 'Image formation by a convex lens (real object)',
        head: ['Object position', 'Image position', 'Nature', 'Size'],
        rows: [
          ['At infinity', 'At <i>F</i>', 'Real, inverted', 'Point/diminished'],
          ['Beyond 2<i>F</i>', 'Between <i>F</i> and 2<i>F</i>', 'Real, inverted', 'Diminished'],
          ['At 2<i>F</i>', 'At 2<i>F</i>', 'Real, inverted', 'Same size'],
          ['Between <i>F</i> and 2<i>F</i>', 'Beyond 2<i>F</i>', 'Real, inverted', 'Magnified'],
          ['At <i>F</i>', 'At infinity', 'Real, inverted', 'Highly magnified'],
          ['Between <i>F</i> and lens', 'Same side as object', 'Virtual, erect', 'Magnified'],
        ],
      },
      {
        t: 'p',
        html: 'A <b>concave lens</b> gives, for every real object, a virtual, erect, diminished image between the lens and <i>F</i>.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Magnification <i>m</i> = <i>v</i>/<i>u</i>.</b> Consider a convex lens forming a real image. A ray from the top of the object through the <b>optical centre</b> travels undeviated. With the object of height <i>h</i> at distance <i>u</i> and the image of height <i>h</i>′ at distance <i>v</i>, similar triangles on either side of the optical centre give <i>h</i>′/<i>h</i> = <i>v</i>/<i>u</i> (the heights and distances carrying their New Cartesian signs). Hence<br><i>m</i> = <i>h</i>′/<i>h</i> = <i>v</i>/<i>u</i>.<br>For a real object (<i>u</i> < 0) and a real image (<i>v</i> > 0), <i>m</i> < 0 — the image is inverted, exactly as observed.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Lenses in contact.</b> Place two thin lenses of focal lengths <i>f</i><sub>1</sub> and <i>f</i><sub>2</sub> in contact. An object at <i>u</i> is imaged by lens 1 at <i>v</i><sub>1</sub>:<br>1/<i>v</i><sub>1</sub> − 1/<i>u</i> = 1/<i>f</i><sub>1</sub>.<br>This image acts as the object for lens 2 (at the same location, since the lenses touch), which forms the final image at <i>v</i>:<br>1/<i>v</i> − 1/<i>v</i><sub>1</sub> = 1/<i>f</i><sub>2</sub>.<br>Adding the two equations, 1/<i>v</i><sub>1</sub> cancels:<br>1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub>.<br>But the combination behaves as a single lens of focal length <i>F</i> with 1/<i>v</i> − 1/<i>u</i> = 1/<i>F</i>, so<br>1/<i>F</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub> ⟺ <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: 'The magnifications also chain: <i>m</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>. Extending to <i>N</i> lenses simply adds more terms.',
      },
      {
        t: 'p',
        html: 'Draw any two of these three principal rays from a point on the object; their intersection (or the intersection of their backward extensions) locates the image:',
      },
      {
        t: 'proc',
        title: 'Key Procedure — locating a lens image by ray diagram',
        steps: [
          'A ray <b>parallel to the principal axis</b> refracts through the <b>far focus</b> <i>F</i> (convex) or appears to diverge from the <b>near focus</b> (concave).',
          'A ray <b>through the optical centre</b> passes <b>straight through, undeviated</b>.',
          'A ray <b>through the focus</b> (convex) emerges <b>parallel to the axis</b>.',
        ],
      },
      {
        t: 'p',
        html: 'If the refracted rays themselves meet, the image is <b>real</b> (opposite side, inverted); if only their extensions meet, it is <b>virtual</b> (same side, erect). Two rays suffice; the third is a check.',
      },
      { t: 'fig', id: 'p12-09-fig-9.9' },
      {
        t: 'p',
        html: '<b>Key Procedure — silvered lens as an equivalent mirror.</b> When one face of a lens is silvered, light <b>refracts through the lens, reflects at the silvered surface, then refracts back through the lens</b> — three optical events in series. Adding powers (a reflection contributes a mirror power, and the lens power is counted twice because light passes through it twice):<br><i>P</i><sub>eq</sub> = <i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub> + <i>P</i><sub>lens</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>.<br>The system then behaves as a single mirror of focal length <i>f</i><sub>eq</sub> = −1/<i>P</i><sub>eq</sub> in New Cartesian signs (powers are counted positive for converging elements, so <i>P</i><sub>mirror</sub> = −1/<i>f</i><sub>mirror</sub>; a positive <i>P</i><sub>eq</sub> means a concave, converging mirror).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An object is placed 30 cm in front of a convex lens of focal length 20 cm. Find the position, magnification, and nature of the image.',
        steps: [
          '<b>Given:</b> <i>u</i> = −30 cm, <i>f</i> = +20 cm.',
          '1/<i>v</i> = 1/<i>f</i> + 1/<i>u</i> = 1/20 + 1/(−30) = (3 − 2)/60 = 1/60 ⇒ <i>v</i> = +60 cm.',
          '<i>m</i> = <i>v</i>/<i>u</i> = 60/(−30) = −2.',
          '<b>Conclusion:</b> A real image forms 60 cm on the far side, <b>inverted</b> and <b>magnified</b> 2× (object lies between <i>F</i> and 2<i>F</i>, matching the table). Note the lens formula uses “+1/<i>u</i>” because we rearranged 1/<i>v</i> = 1/<i>f</i> + 1/<i>u</i>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'An object is placed 30 cm in front of a concave lens of focal length 15 cm. Find the image.',
        steps: [
          '<b>The shortcut:</b> a concave lens <b>always</b> gives a virtual, erect, diminished image — so before any algebra you know <i>v</i> < 0, 0 < <i>m</i> < 1. With <i>f</i> = −15, <i>u</i> = −30:<br>1/<i>v</i> = 1/(−15) + 1/(−30) = (−2 − 1)/30 = −1/10 ⇒ <i>v</i> = −10 cm,   <i>m</i> = <i>v</i>/<i>u</i> = (−10)/(−30) = +1/3.',
          '<b>The trap:</b> students plug in <i>f</i> = +15 (forgetting concave is negative) and get a spurious real image. The “always virtual, erect, diminished” rule is the instant sanity check — any option with |<i>m</i>| > 1 or a real image is wrong on sight.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 30 cm. Find the focal length and power of the combination, and state its nature. (Combination of lenses.)',
        steps: [
          '1/<i>F</i> = 1/<i>f</i><sub>1</sub> + 1/<i>f</i><sub>2</sub> = 1/20 + 1/(−30) = (3 − 2)/60 = 1/60 ⇒ <i>F</i> = +60 cm.',
          '<i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> = 1/0.20 + 1/(−0.30) = 5 − 3.33 = +1.67 D.',
          '<b>Conclusion:</b> The pair behaves as a <b>converging</b> lens of focal length 60 cm (<i>P</i> ≈ +1.67 D) — the convex lens wins because it is the stronger of the two.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A plano-convex lens of glass (<i>n</i> = 1.5) has its curved face of radius 20 cm, and that curved face is silvered. Find the focal length of the equivalent mirror and describe the system. (Silvered-lens / equivalent-mirror method.)',
        steps: [
          '<b>Step 1 — lens power.</b> Plano-convex: the light enters the flat face first, so <i>R</i><sub>1</sub> = ∞ (flat) and <i>R</i><sub>2</sub> = −20 cm (the curved face).<br>1/<i>f</i><sub>lens</sub> = (1.5 − 1)(1/∞ − 1/(−20)) = 0.5 × 1/20 = 1/40, so <i>f</i><sub>lens</sub> = 40 cm, <i>P</i><sub>lens</sub> = 1/0.40 = 2.5 D.',
          '<b>Step 2 — mirror power.</b> The silvered curved face is a concave mirror of radius 20 cm (<i>f</i><sub>mirror</sub> = −10 cm in New Cartesian signs), so <i>P</i><sub>mirror</sub> = −1/<i>f</i><sub>mirror</sub> = 1/0.10 = +10 D.',
          '<b>Step 3 — combine.</b><br><i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub> = 2(2.5) + 10 = 15 D ⇒ <i>f</i><sub>eq</sub> = −1/15 m = −6.67 cm.',
          '<b>Conclusion:</b> The silvered lens behaves as a <b>concave mirror</b> of focal length ≈ 6.67 cm (<i>f</i><sub>eq</sub> = −6.67 cm). The power of the lens enters <b>twice</b> because light traverses the glass on the way in and again on the way out — the subtlety that makes this a JEE Advanced staple.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] An object is placed 15 cm from a convex lens of focal length 10 cm. Find the image distance, magnification, and nature.',
            a: '1/<i>v</i> = 1/10 − 1/15 = 1/30 ⇒ <i>v</i> = +30 cm, <i>m</i> = −2, real and inverted.',
          },
          {
            q: '[NEET] A converging lens of power +4 D is combined in contact with a diverging lens of power −6 D. Find the power and focal length of the combination, and state its nature.',
            a: '<i>P</i> = 4 + (−6) = −2 D, <i>F</i> = −50 cm; diverging.',
          },
          {
            q: '[JEE Main] A convex lens forms a real image three times the size of an object placed 20 cm from it. Find the focal length of the lens.',
            a: 'Real image ⇒ <i>m</i> = −3 = <i>v</i>/<i>u</i> with <i>u</i> = −20 ⇒ <i>v</i> = +60 cm; 1/<i>f</i> = 1/60 + 1/20 (from 1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>), <i>f</i> = +15 cm.',
          },
          {
            q: '[JEE Main] Two thin convex lenses of focal lengths 20 cm and 30 cm are placed coaxially 10 cm apart. Find the focal length of the combination.',
            a: '1/<i>F</i> = 1/20 + 1/30 − 10/600 = 1/12 − 1/60 = 4/60 ⇒ <i>F</i> = 15 cm.',
          },
          {
            q: '[JEE Advanced] A point object and a screen are fixed 80 cm apart. A convex lens placed between them forms a sharp image on the screen at two different lens positions 20 cm apart (the displacement method). Find the focal length of the lens.',
            a: 'Displacement method: <i>f</i> = (<i>D</i><sup>2</sup> − <i>d</i><sup>2</sup>)/(4<i>D</i>) = (80<sup>2</sup> − 20<sup>2</sup>)/(4(80)) = (6400 − 400)/320 = 18.75 cm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The lens formula is:',
        opts: [
          {
            label: '1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i>',
            nudge: '<b>(a)</b> is the <b>mirror</b> formula — the most common cross-topic confusion.',
          },
          { label: '1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>', nudge: null },
          { label: '1/<i>u</i> − 1/<i>v</i> = 1/<i>f</i>', nudge: '<b>(c)</b> has the subtraction reversed (wrong sign of <i>f</i>).' },
          { label: '<i>v</i> − <i>u</i> = <i>f</i>', nudge: '<b>(d)</b> is dimensionally consistent but is not a lens relation at all — it has no physical basis.' },
        ],
        correct: 1,
        solution: 'The thin-lens relation subtracts the object term. Burn in: mirror adds, lens subtracts.',
      },
      {
        t: 'mcq',
        q: 'Two thin lenses of powers +5 D and −3 D are placed in contact. The focal length of the combination is:',
        opts: [
          { label: '+50 cm', nudge: null },
          { label: '−50 cm', nudge: '<b>(b)</b> gets the sign of <i>P</i> wrong.' },
          { label: '+12.5 cm', nudge: '<b>(c)</b> adds the powers’ magnitudes (5 + 3 = 8 ⇒ 12.5 cm).' },
          { label: '+2 cm', nudge: '<b>(d)</b> confuses the power (2 D) with the focal length in cm.' },
        ],
        correct: 0,
        solution: '<i>P</i> = 5 + (−3) = +2 D ⇒ <i>F</i> = 1/2 = 0.5 m = +50 cm. Powers add with sign — that is the whole convenience of the dioptre.',
      },
      {
        t: 'mcq',
        q: 'A convex lens of focal length <i>f</i> produces an image of the same size as the object. The object distance is:',
        opts: [
          { label: '<i>f</i>', nudge: '<b>(a)</b> gives an image at infinity.' },
          { label: '3<i>f</i>/2', nudge: '<b>(b)</b> and <b>(d)</b> give magnified and diminished images respectively.' },
          { label: '2<i>f</i>', nudge: null },
          { label: '4<i>f</i>', nudge: '<b>(b)</b> and <b>(d)</b> give magnified and diminished images respectively.' },
        ],
        correct: 2,
        solution: 'Same size (real, inverted) means |<i>m</i>| = 1, which a convex lens gives only when the object is at 2<i>f</i> (image also at 2<i>f</i>). The “2<i>F</i> to 2<i>F</i>, unit magnification” rule from the image table settles it.',
      },
      {
        t: 'mcq',
        q: 'When a convex lens (<i>n</i> = 1.5, <i>f</i> = 20 cm in air) is placed in a liquid of refractive index 1.5, it behaves as:',
        opts: [
          { label: 'a stronger converging lens', nudge: '<b>(a)</b> ignores the medium effect.' },
          { label: 'a diverging lens', nudge: '<b>(b)</b> would require the medium to be denser than the lens.' },
          { label: 'a plane glass plate (no focusing)', nudge: null },
          { label: 'a converging lens of <i>f</i> = 30 cm', nudge: '<b>(d)</b> assumes the liquid only weakens the lens; with equal indices it stops focusing altogether.' },
        ],
        correct: 2,
        solution: 'With lens and medium of equal index, the lens-maker factor is zero, <i>f</i> = ∞ — it stops refracting and acts like a flat plate. No index contrast means no lens.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using the mirror formula for a lens.</b> Lens: 1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i> and <i>m</i> = +<i>v</i>/<i>u</i>. Mirror: 1/<i>v</i> + 1/<i>u</i> = 1/<i>f</i> and <i>m</i> = −<i>v</i>/<i>u</i>. The sign of the <i>u</i>-term and of <i>m</i> are both opposite — this is the highest-frequency error in the chapter.',
          '<b>Wrong sign of <i>f</i> for a concave lens.</b> Concave (diverging) ⇒ <i>f</i> < 0, <i>P</i> < 0. A “real image from a concave lens” answer almost always traces to a missing minus.',
          '<b>Adding powers for separated lenses.</b> <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> holds <b>only in contact</b>. With a gap <i>d</i>, subtract <i>dP</i><sub>1</sub><i>P</i><sub>2</sub>.',
          '<b>Counting the lens power once in a silvered lens.</b> Light passes through the glass <b>twice</b>, so the lens power enters twice: <i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Work combinations in <b>dioptres</b> — adding signed powers is faster and less error-prone than juggling reciprocals of focal lengths, and the optician’s prescription is already in those units. For the lab favourite, memorise the <b>displacement-method</b> result <i>f</i> = (<i>D</i><sup>2</sup> − <i>d</i><sup>2</sup>)/(4<i>D</i>) (object–screen separation <i>D</i>, lens-shift <i>d</i>) — it turns a multi-step problem into one line.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Lens formula',
            note: '1/<i>v</i> − 1/<i>u</i> = 1/<i>f</i>; <b>magnification</b> <i>m</i> = <i>v</i>/<i>u</i>. (Mirror adds and uses −<i>v</i>/<i>u</i> — keep them apart.)',
          },
          { f: 'Power', note: '<i>P</i> = 1/<i>f</i> (dioptre, <i>f</i> in m); convex +, concave −.' },
          {
            f: 'In contact',
            note: '1/<i>F</i> = ∑ 1/<i>f</i><sub><i>i</i></sub>, <i>P</i> = ∑ <i>P</i><sub><i>i</i></sub>, <i>m</i> = ∏ <i>m</i><sub><i>i</i></sub>. <b>Separated by <i>d</i>:</b> <i>P</i> = <i>P</i><sub>1</sub> + <i>P</i><sub>2</sub> − <i>dP</i><sub>1</sub><i>P</i><sub>2</sub>.',
          },
          {
            f: 'Silvered lens',
            note: '<i>P</i><sub>eq</sub> = 2<i>P</i><sub>lens</sub> + <i>P</i><sub>mirror</sub> (light crosses the glass twice).',
          },
          { f: 'Displacement method', note: '<i>f</i> = (<i>D</i><sup>2</sup> − <i>d</i><sup>2</sup>)/(4<i>D</i>).' },
          {
            f: 'Convex-lens image table',
            note: 'beyond 2<i>F</i> → between <i>F</i>&2<i>F</i> (real, dim.); at 2<i>F</i> → 2<i>F</i> (same size); <i>F</i>–2<i>F</i> → beyond 2<i>F</i> (magnified); inside <i>F</i> → virtual, erect, magnified.',
          },
        ],
        aids: [
          '“Mirror adds, lens subtracts.”',
          '“Concave lens = convex mirror’s twin” — always virtual, erect, diminished.',
          '“Powers add (in contact); dioptres are just 1/<i>f</i> in metres.”',
        ],
      },
    ],
  },
];
