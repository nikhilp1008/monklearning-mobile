import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 01 and 02: pp. 636–656 of the Class 12 Physics Master
 * Reference, word for word. Topic 01, Wavefront and Huygens’ Principle
 * (pp. 636–648), and Topic 02, The Doppler Effect of Light (pp. 649–656), are
 * each split at their Sections 1 to 8. Figures 10.1 (caption p. 638, drawn
 * p. 639), 10.2 (caption p. 640, drawn p. 641) and 10.3 (caption p. 644, drawn
 * p. 645; inside worked example 4) are redrawn in lib/diagrams/physics-12-10.ts.
 * Topic 02’s cheat-sheet heading (p. 655) is printed apart from its box
 * (p. 656): the box is kept whole.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 636–648 ─────────────────────────
  {
    n: '01',
    title: 'Wavefront and Huygens’ Principle',
    kalam: 'A wavefront is the locus of all points of a medium that are vibrating in the same phase at a given instant.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual gateway to the whole chapter. CBSE Boards almost always carry a 2–3 mark item here — usually “define a wavefront / state Huygens’ principle” or a full 3-mark derivation of the law of refraction. JEE Main typically asks 1 conceptual question (wavefront shape, or which law follows from Huygens). NEET keeps it short: a 1-mark fact about wavefront types or the validity of Huygens’ construction. JEE Advanced rarely asks it directly but leans on it for atmospheric-refraction and “tilted wavefront” reasoning.',
      },
      {
        t: 'p',
        html: 'Picture the crowd at a packed IPL final doing the Mexican wave. One section stands up, sits down; a moment later the next section does the same, then the next, and a visible “ridge” of standing people sweeps around the stadium. Now freeze the stadium with an imaginary camera. Draw a line through every person who is, at this exact instant, fully standing. That line is a snapshot of the disturbance — and it is the cleanest mental model you will ever have of a <b>wavefront</b>.',
      },
      {
        t: 'p',
        html: 'A wavefront is the locus of all points of a medium that are vibrating in the same phase at a given instant. “Same phase” is the whole idea: every point on a wavefront is at the same stage of its oscillation cycle — all at a crest together, or all crossing zero together, or all at a trough together. When you drop a stone into a still village pond, the expanding circular ridge you see is literally a wavefront made visible, because every point on that ridge started moving at the same moment and is therefore in step.',
      },
      {
        t: 'p',
        html: 'The shape of a wavefront is decided by the shape of the source and how far you are from it. A tiny point source — a single LED, a distant star — sends disturbance out equally in all directions, so points of equal phase lie on a <b>sphere</b>: a spherical wavefront. A long thin source, like a glowing tube-light filament or a narrow slit, produces points of equal phase lying on a <b>cylinder</b>: a cylindrical wavefront. And here is the part that quietly powers the rest of the chapter — if you stand very far from the source, the little patch of sphere reaching you is so gently curved that it is effectively flat. This is a <b>plane wavefront</b>. It is the same reason the horizon of the Arabian Sea looks like a straight edge even though the Earth is a ball, and the reason sunlight arriving on your terrace is treated as a plane wave even though the Sun is a sphere about 1.4 million km wide.',
      },
      {
        t: 'p',
        html: 'One more piece of geometry you must lock in: a <b>ray</b> is simply an arrow drawn perpendicular to the wavefront, pointing in the direction the wavefront advances. Wavefronts and rays are two languages for the same thing — ray optics (Chapter 9) tracks the arrows; wave optics tracks the surfaces. For a spherical wavefront the rays are the radii shooting outward; for a plane wavefront the rays are a parallel beam.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> how does the wavefront know where to go next? In 1678 Christiaan Huygens gave a startlingly simple answer. He said: forget the source. Once a wavefront exists, every single point on it becomes a fresh little source of its own tiny spherical wave — a “secondary wavelet” — and all these wavelets crawl forward at the wave’s speed. A tick of time later, you draw the common surface that just touches all these wavelets (their envelope), and that surface is the new wavefront. It is exactly the stadium wave again: each standing person is what nudges their neighbour to stand. The frontier of the disturbance keeps regenerating itself, point by point, with no memory of where the original stone fell. This self-propagating picture is <b>Huygens’ principle</b>, and from it the entire behaviour of light — bending, bouncing, spreading — can be reconstructed geometrically.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Huygens’ original construction is powerful but not perfect, and exams love this nuance:<br>• It is a purely <b>geometrical/kinematic</b> rule. It tells you correctly where the new wavefront sits and which way the wave travels, but in its raw 1678 form it does <b>not</b> correctly predict how bright each part of the wavefront is. The honest intensity distribution needs Fresnel’s and Kirchhoff’s later corrections.<br>• It has a famous embarrassment: the <b>backwave</b>. If every point genuinely radiates a full sphere, half of each wavelet goes backwards, so the construction predicts a wave travelling back toward the source — which never happens. Huygens patched this by assuming the wavelet amplitude is maximum forward and zero backward (the “obliquity factor”). It is an ad-hoc fix; the real justification comes from rigorous wave theory.<br>• It assumes secondary wavelets travel at the <b>local wave speed of the medium</b>. The neat spherical-stays-spherical, plane-stays-plane results only hold in a <b>homogeneous</b> medium. In a medium where speed varies with position (hot air near a road), wavelets on one side outrun the other and the wavefront bends — which is exactly how mirages happen, and, because the air’s <i>n</i> keeps fluctuating, why stars twinkle.<br>• It is <b>not limited to light.</b> The same construction works for sound, water ripples, and any wave. (A common Board question: yes, Huygens’ principle is valid for longitudinal sound waves too.)',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'def', term: 'Wavefront', html: 'surface (locus) of points oscillating in the same phase.' },
      { t: 'def', term: 'Ray', html: 'line perpendicular to the wavefront, along the direction of energy propagation.' },
      {
        t: 'formula',
        kicker: 'Refractive index of a medium',
        main: '<i>n</i> = <i>c</i>/<i>v</i>',
        legend: ['<i>c</i> = speed of light in vacuum (≈ 3 × 10<sup>8</sup> m s<sup>−1</sup>)', '<i>v</i> = speed of light in the medium'],
        note: 'Units: dimensionless. Dimensional formula: [M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Snell’s law (the wavefront result of this topic)',
        main: 'sin <i>i</i>/sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>λ</i><sub>1</sub>/<i>λ</i><sub>2</sub> = <i>n</i><sub>21</sub>',
        legend: [
          '<i>i</i> = angle of incidence',
          '<i>r</i> = angle of refraction',
          '<i>v</i><sub>1</sub>, <i>v</i><sub>2</sub> = wave speeds in media 1 and 2',
          '<i>n</i><sub>1</sub>, <i>n</i><sub>2</sub> = refractive indices',
          '<i>λ</i><sub>1</sub>, <i>λ</i><sub>2</sub> = wavelengths in the two media',
          '<i>n</i><sub>21</sub> = refractive index of medium 2 relative to medium 1',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Key consequence — what changes and what does not on refraction',
        main: '<i>f</i><sub>1</sub> = <i>f</i><sub>2</sub> (frequency unchanged)<br><i>λ</i><sub>medium</sub> = <i>λ</i><sub>vacuum</sub>/<i>n</i>',
        legend: [],
        note: 'The source sets the frequency; the medium can only rescale the wavelength.',
      },
      {
        t: 'formula',
        kicker: 'Wave relation',
        main: '<i>v</i> = <i>fλ</i>',
        legend: ['<i>v</i> = wave speed [LT<sup>−1</sup>]', '<i>f</i> = frequency [T<sup>−1</sup>]', '<i>λ</i> = wavelength [L]'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Intensity from a point source',
        main: '<i>I</i> ∝ 1/<i>r</i><sup>2</sup><br><i>A</i> ∝ 1/<i>r</i><br><i>I</i> ∝ <i>A</i><sup>2</sup>',
        legend: ['<i>I</i> = intensity (power per unit area)', '<i>A</i> = amplitude', '<i>r</i> = distance from the point source'],
        note: 'Intensity units: W m<sup>−2</sup>. Dimensional formula: [MT<sup>−3</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Fresnel distance (ray-optics vs wave-optics boundary)',
        main: '<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i>',
        legend: ['<i>a</i> = size of the aperture/obstacle', '<i>λ</i> = wavelength'],
        note: 'For distances much less than <i>z</i><sub>F</sub>, ray optics is a good approximation; well beyond <i>z</i><sub>F</sub>, diffraction (wave optics) dominates. Units: metre, [L].',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: 'This topic carries two of the most-asked derivations in the chapter. Both use the same Huygens recipe: take the incident wavefront, let each point launch a wavelet of radius <i>vτ</i>, draw the tangent (envelope), read off the geometry.',
      },
      { t: 'p', html: '<b>Derivation 3.1 — Laws of Reflection from Huygens’ Principle</b>' },
      { t: 'fig', id: 'p12-10-fig-10.1' },
      {
        t: 'p',
        html: '<b>Setup (state the assumptions).</b> Let a plane wavefront <i>AB</i> travel through a single homogeneous medium (speed <i>v</i>) and strike a plane reflecting surface <i>MM</i>′. Let point <i>A</i> of the wavefront reach the surface first, while <i>B</i> is still a distance away. Let <i>τ</i> be the time the wavefront end <i>B</i> takes to travel down to the surface at point <i>C</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — let the wavelets grow.</b> During this interval <i>τ</i>:<br><i>BC</i> = <i>vτ</i><br><b>Physical reason:</b> <i>B</i> simply keeps advancing at the wave speed until it lands on the mirror.<br><br>Meanwhile, the instant <i>A</i> touched the surface it began throwing out a secondary wavelet into the same medium. After time <i>τ</i> this wavelet is a sphere (here, a semicircle in the plane of the page) of radius<br><i>AD</i> = <i>vτ</i><br><b>Physical reason:</b> the wavelet from <i>A</i> has had the same time <i>τ</i> to spread at the same speed <i>v</i>, so it travels the same distance as <i>B</i> did.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — draw the new wavefront (the envelope).</b> From <i>C</i>, draw the tangent <i>CD</i> to the wavelet centred at <i>A</i>. Because <i>CD</i> touches the wavelet, <i>CD</i> is the reflected wavefront, and <i>AD</i> ⊥ <i>CD</i> (radius ⊥ tangent).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — compare the two right triangles.</b> Triangles <i>ABC</i> (right-angled at <i>B</i>) and <i>ADC</i> (right-angled at <i>D</i>) share the hypotenuse <i>AC</i>, and <i>BC</i> = <i>AD</i> = <i>vτ</i>. Hence the triangles are congruent.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — extract the angles.</b> The angle of incidence <i>i</i> equals ∠<i>BAC</i> and the angle of reflection <i>r</i> equals ∠<i>DCA</i> (angles between wavefronts/rays and the surface). From congruence:<br>sin <i>i</i> = <i>BC</i>/<i>AC</i> = <i>vτ</i>/<i>AC</i>, sin <i>r</i> = <i>AD</i>/<i>AC</i> = <i>vτ</i>/<i>AC</i><br>∴ ∠<i>i</i> = ∠<i>r</i><br>The incident ray, reflected ray and normal also lie in one plane (the plane of the page), completing the <b>laws of reflection</b>.',
      },
      { t: 'p', html: '<b>Derivation 3.2 — Laws of Refraction (Snell’s Law) from Huygens’ Principle</b>' },
      { t: 'fig', id: 'p12-10-fig-10.2' },
      {
        t: 'p',
        html: '<b>Setup.</b> A plane wavefront <i>AB</i> in medium 1 (speed <i>v</i><sub>1</sub>) is incident at angle <i>i</i> on the plane interface <i>PP</i>′ separating it from medium 2 (speed <i>v</i><sub>2</sub>). Point <i>A</i> reaches the interface first.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — finish the journey in medium 1.</b> Let <i>τ</i> be the time for <i>B</i> to reach the interface at <i>C</i>:<br><i>BC</i> = <i>v</i><sub>1</sub><i>τ</i>',
      },
      {
        t: 'p',
        html: '<b>Step 2 — start the wavelet in medium 2.</b> The moment <i>A</i> entered medium 2 it began radiating a wavelet at the new speed <i>v</i><sub>2</sub>. After the same time <i>τ</i>, this wavelet has radius<br><i>AE</i> = <i>v</i><sub>2</sub><i>τ</i><br>This single difference — wavelets in medium 2 grow at <i>v</i><sub>2</sub>, not <i>v</i><sub>1</sub> — is where all of refraction comes from.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — draw the refracted wavefront.</b> From <i>C</i>, draw the tangent <i>CE</i> to the wavelet centred at <i>A</i>. <i>CE</i> is the refracted wavefront, with <i>AE</i> ⊥ <i>CE</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — read the geometry.</b> In right triangle <i>ABC</i> (right angle at <i>B</i>) the angle at <i>A</i> equals <i>i</i>; in right triangle <i>AEC</i> (right angle at <i>E</i>) the angle at <i>C</i> equals <i>r</i>. Both triangles share the hypotenuse <i>AC</i>:<br>sin <i>i</i> = <i>BC</i>/<i>AC</i> = <i>v</i><sub>1</sub><i>τ</i>/<i>AC</i>, sin <i>r</i> = <i>AE</i>/<i>AC</i> = <i>v</i><sub>2</sub><i>τ</i>/<i>AC</i>',
      },
      {
        t: 'p',
        html: '<b>Step 5 — divide.</b><br>sin <i>i</i>/sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub><br>Using <i>n</i> = <i>c</i>/<i>v</i>, so <i>v</i><sub>1</sub> = <i>c</i>/<i>n</i><sub>1</sub> and <i>v</i><sub>2</sub> = <i>c</i>/<i>n</i><sub>2</sub>:<br>sin <i>i</i>/sin <i>r</i> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> ⇒ <i>n</i><sub>1</sub> sin <i>i</i> = <i>n</i><sub>2</sub> sin <i>r</i>',
      },
      {
        t: 'p',
        html: '<b>Step 6 — the physics payoff.</b> If medium 2 is denser (<i>n</i><sub>2</sub> > <i>n</i><sub>1</sub>), then <i>v</i><sub>2</sub> < <i>v</i><sub>1</sub>, so sin <i>r</i> < sin <i>i</i>: the ray bends <b>toward</b> the normal. This is the deep result — wave theory predicts light slows down in a denser medium. Newton’s rival corpuscular theory predicted the opposite (light speeds up in glass). Foucault’s 1850 measurement showed light is slower in water, settling the argument in favour of the wave picture.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A beam of monochromatic light of wavelength 600 nm in air enters a glass slab of refractive index <i>n</i> = 1.5. Find (a) the speed of light in the glass, (b) the wavelength in the glass, and (c) the frequency in the glass.',
        steps: [
          '<b>Given:</b> <i>λ</i><sub>air</sub> = 600 nm = 600 × 10<sup>−9</sup> m, <i>n</i> = 1.5, <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>.',
          '<b>(a)</b> Speed in glass:<br><i>v</i> = <i>c</i>/<i>n</i> = (3 × 10<sup>8</sup>)/1.5 = 2 × 10<sup>8</sup> m s<sup>−1</sup>',
          '<b>(b)</b> Frequency is set by the source and is unchanged. First find it in air:<br><i>f</i> = <i>c</i>/<i>λ</i><sub>air</sub> = (3 × 10<sup>8</sup>)/(600 × 10<sup>−9</sup>) = 5 × 10<sup>14</sup> Hz<br>Wavelength in glass:<br><i>λ</i><sub>glass</sub> = <i>λ</i><sub>air</sub>/<i>n</i> = 600/1.5 = 400 nm',
          '<b>(c)</b> Frequency in glass:<br><i>f</i><sub>glass</sub> = <i>f</i>',
        ],
        ans: '<i>v</i> = 2 × 10<sup>8</sup> m s<sup>−1</sup>, <i>λ</i> = 400 nm, <i>f</i> = 5 × 10<sup>14</sup> Hz (unchanged).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A point source of light is placed exactly at the focus of a convex lens. What is the shape of the wavefront that emerges from the other side of the lens? And if that emergent beam now falls on a second, far-away screen, has the wavelength of the light changed compared to before the lens?',
        steps: [
          '<b>The fast reasoning (no algebra needed):</b><br>• A point source produces a spherical wavefront. Placed at the focus, the lens converts this diverging spherical wavefront into a <b>plane wavefront</b> (parallel beam) — this is the defining job of a lens fed from its focus.<br>• The lens (assume same medium, air, on both sides) does <b>not</b> change the medium of travel, so <i>v</i>, <i>f</i> and therefore <i>λ</i> are all unchanged.',
          '<b>Trap to avoid:</b> Students see “lens” and reflexively reach for the lens formula or assume the wavelength shrinks “because it passed through glass.” But the question asks about the emergent beam in air. The light spent a microscopic time inside the glass, but once back in air it recovers its original <i>v</i> and <i>λ</i>. Only the wavefront shape changed (spherical → plane), not the wavelength.',
        ],
        ans: 'Emergent wavefront is <b>plane</b>; wavelength is <b>unchanged</b>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Light of wavelength 500 nm passes through a circular aperture of diameter <i>a</i> = 1 mm. (a) Estimate the Fresnel distance. (b) A screen is placed first at 0.5 m and then at 5 m from the aperture. In which case is ray optics a good description, and in which does diffraction (wave optics) take over?',
        steps: [
          '<b>Given:</b> <i>λ</i> = 500 nm = 5 × 10<sup>−7</sup> m, <i>a</i> = 1 mm = 10<sup>−3</sup> m.',
          '<b>(a)</b> Fresnel distance:<br><i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i> = (10<sup>−3</sup>)<sup>2</sup>/(5 × 10<sup>−7</sup>) = 10<sup>−6</sup>/(5 × 10<sup>−7</sup>) = 2 m',
          '<b>(b)</b> Compare each screen distance with <i>z</i><sub>F</sub> = 2 m:<br>• At 0.5 m (≪ <i>z</i><sub>F</sub>): the beam has not yet spread appreciably, so <b>ray optics holds</b> — the patch of light is essentially the size of the aperture.<br>• At 5 m (> <i>z</i><sub>F</sub>): the beam has spread well beyond its geometric width, so <b>wave optics (diffraction) dominates</b> — you see a diffraction pattern, not a sharp 1 mm spot.',
          '<b>Why this is “multi-concept”:</b> it stitches the wavefront/wave-optics applicability condition to a quantitative length scale, and forces a comparison rather than a single plug-in. The conceptual takeaway — ray optics is the short-distance, large-aperture limit of wave optics — is the spine of the whole chapter.',
        ],
        ans: '<i>z</i><sub>F</sub> = 2 m; ray optics at 0.5 m, diffraction at 5 m.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p12-10-fig-10.3',
        q: 'A plane wavefront travelling in air (<i>n</i> = 1) is incident normally on a <b>thin prism</b> of small refracting angle <i>A</i> and refractive index <i>n</i>. Using a Huygens / optical-path argument, show that the emergent wavefront is still plane but is tilted by an angle<br><i>δ</i> = (<i>n</i> − 1)<i>A</i><br>and identify <i>δ</i> physically.',
        steps: [
          '<b>Reasoning.</b> Take a vertical plane wavefront hitting the prism face-on. Two points on this wavefront — one entering where the glass is thick (near the base), one where it is thin (near the apex) — must stay in phase as a wavefront, but they pass through different glass thicknesses.',
          'Light slows inside glass, so a portion crossing thickness <i>t</i> of glass acquires an extra <b>optical path</b> compared with travelling the same geometric distance in air:<br>Δ(optical path) = <i>nt</i> − <i>t</i> = (<i>n</i> − 1)<i>t</i>',
          'Let the prism thickness vary linearly across a transverse height <i>h</i>, from <i>t</i><sub>thin</sub> near the apex to <i>t</i><sub>thick</sub> near the base, with <i>t</i><sub>thick</sub> − <i>t</i><sub>thin</sub> = <i>h</i> tan <i>A</i> ≈ <i>hA</i> for a thin prism. The bottom of the wavefront (thick glass) is delayed more than the top by an extra optical path:<br>Δ = (<i>n</i> − 1)(<i>t</i><sub>thick</sub> − <i>t</i><sub>thin</sub>) = (<i>n</i> − 1)<i>hA</i>',
          'By Huygens’ construction, every point re-emits wavelets that have all advanced the same optical path; so the new envelope is a <b>plane</b> (a uniform delay gradient gives a straight, tilted surface — not a curved one). The wavefront tilts because one edge lags the other by the constant gradient above. The geometric tilt angle is the lag-in-length divided by the transverse height:<br><i>δ</i> = Δ/<i>h</i> = (<i>n</i> − 1)<i>hA</i>/<i>h</i> = (<i>n</i> − 1)<i>A</i>',
          '<b>Physical identification.</b> <i>δ</i> = (<i>n</i> − 1)<i>A</i> is precisely the <b>angle of minimum deviation of a thin prism</b> — the same result you meet in ray optics — but here it falls out purely from how Huygens’ wavefronts tilt under a transverse optical-path gradient. The wavefront stays plane (so the emergent beam is still parallel), it has merely been rotated.',
        ],
        ans: '<i>δ</i> = (<i>n</i> − 1)<i>A</i>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a wavefront. Draw the shape of the wavefront in each case: (a) light diverging from a point source, (b) light emerging from a convex lens when a point source is at its focus, (c) a portion of a spherical wavefront very far from the source.',
            a: '(a) spherical (diverging), (b) plane, (c) plane (nearly).',
          },
          {
            q: '[NEET] The frequency of monochromatic light is 6 × 10<sup>14</sup> Hz in vacuum. It enters a medium of refractive index 1.5. Find its frequency and wavelength in the medium.',
            a: 'Frequency unchanged = 6 × 10<sup>14</sup> Hz; vacuum wavelength = 500 nm, so <i>λ</i><sub>medium</sub> = 500/1.5 ≈ 333 nm.',
          },
          {
            q: '[JEE Main] Light of wavelength 480 nm in air enters water (<i>n</i> = 4/3) at an angle of incidence of 30°. Find (a) the wavelength in water and (b) the angle of refraction.',
            a: '(a) <i>λ</i><sub>water</sub> = 480/(4/3) = 360 nm; (b) sin <i>r</i> = sin 30°/(4/3) = (0.5 × 3)/4 = 0.375 ⇒ <i>r</i> ≈ 22°.',
          },
          {
            q: '[JEE Main] A parallel beam of light of wavelength 600 nm passes through a slit of width 2 mm. Up to what distance from the slit can ray optics be safely used?',
            a: '<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i> = (2 × 10<sup>−3</sup>)<sup>2</sup>/(600 × 10<sup>−9</sup>) ≈ 6.7 m.',
          },
          {
            q: '[JEE Advanced] A plane wavefront is incident on the boundary of a medium whose refractive index increases continuously with depth. Using Huygens’ principle, argue qualitatively how the wavefront and the ray will curve, and connect your reasoning to why stars near the horizon appear to twinkle and to shift position.',
            a: 'Wavelets travel slower where <i>n</i> is larger (deeper), so the deeper edge of each wavefront lags; the wavefront tilts progressively and the ray (⊥ to it) bends toward the denser region — a continuous, curving refraction. This atmospheric bending causes the apparent positional shift of low-horizon stars; because the air’s refractive index keeps fluctuating (turbulence), the bending keeps changing, which makes them twinkle.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A wavefront is best defined as the locus of points that',
        opts: [
          {
            label: 'have the same amplitude only',
            nudge: '<b>(A)</b> is a trap because points on a wavefront often do share amplitude (for an ideal point source), but equal amplitude is a consequence, not the definition — two points of equal amplitude but opposite phase are not on the same wavefront.',
          },
          {
            label: 'are at the same distance from the observer',
            nudge: '<b>(B)</b> confuses “distance from the source” (true for a spherical wavefront) with “distance from the observer” (irrelevant). Students who memorise “equidistant from the source” mis-apply it here.',
          },
          { label: 'are vibrating in the same phase', nudge: null },
          {
            label: 'lie on a straight line perpendicular to the ray',
            nudge: '<b>(D)</b> inverts the ray–wavefront relationship: the ray is perpendicular to the wavefront, but the wavefront itself is a surface of constant phase, not “a line perpendicular to the ray.”',
          },
        ],
        correct: 2,
        solution: 'A wavefront is a surface of constant phase.',
      },
      {
        t: 'mcq',
        q: 'When light passes from air into glass, which quantity remains unchanged?',
        opts: [
          {
            label: 'Speed',
            nudge: '<b>(A)</b> is wrong: <i>v</i> = <i>c</i>/<i>n</i> decreases in glass — this is the central result of the chapter.',
          },
          {
            label: 'Wavelength',
            nudge: '<b>(B)</b> is the most common error: <i>λ</i> = <i>λ</i><sub>0</sub>/<i>n</i> shrinks. Students assume “wave = wavelength is the wave’s identity,” but it is frequency that is conserved.',
          },
          { label: 'Frequency', nudge: null },
          {
            label: 'Refractive index of the medium',
            nudge: '<b>(D)</b> is a distractor that confuses the property of the medium (which obviously differs between air and glass) with a property of the light.',
          },
        ],
        correct: 2,
        solution: 'Frequency is fixed by the source; the medium cannot alter how many cycles arrive per second.',
      },
      {
        t: 'mcq',
        q: 'Huygens’ principle, in its original form, fails to satisfactorily explain',
        opts: [
          {
            label: 'the laws of reflection',
            nudge: '<b>(A)</b> and <b>(B)</b> are exactly what Huygens’ principle successfully derives, so picking them shows the concept is reversed in the student’s mind.',
          },
          {
            label: 'the laws of refraction',
            nudge: '<b>(A)</b> and <b>(B)</b> are exactly what Huygens’ principle successfully derives, so picking them shows the concept is reversed in the student’s mind.',
          },
          { label: 'the absence of the backward-travelling wave', nudge: null },
          {
            label: 'the spherical shape of the wavefront from a point source',
            nudge: '<b>(D)</b> is also explained by the construction: wavelets of equal radius from a spherical wavefront have a spherical envelope.',
          },
        ],
        correct: 2,
        solution: 'The construction predicts a backwave; Huygens removed it only by an ad hoc obliquity assumption, so the absence of the backwave is the genuine weak point.',
      },
      {
        t: 'mcq',
        q: 'A point source emits light uniformly in all directions. At distance <i>r</i> the intensity is <i>I</i> and the amplitude is <i>A</i>. At distance 2<i>r</i>, the amplitude of the wave becomes',
        opts: [
          { label: '<i>A</i>/2', nudge: null },
          {
            label: '<i>A</i>/4',
            nudge: '<b>(B)</b> is the trap for students who correctly write <i>I</i> ∝ 1/<i>r</i><sup>2</sup> but forget the extra square-root step from intensity to amplitude — they apply the 1/<i>r</i><sup>2</sup> law directly to <i>A</i>.',
          },
          { label: '<i>A</i>', nudge: '<b>(C)</b> ignores the inverse-distance fall-off entirely.' },
          {
            label: '<i>A</i>/√2',
            nudge: '<b>(D)</b> results from misremembering <i>A</i> ∝ 1/√<i>r</i> instead of <i>A</i> ∝ 1/<i>r</i>.',
          },
        ],
        correct: 0,
        solution: 'For a point source <i>I</i> ∝ 1/<i>r</i><sup>2</sup>, and since <i>I</i> ∝ <i>A</i><sup>2</sup>, amplitude <i>A</i> ∝ 1/<i>r</i>. Doubling <i>r</i> halves <i>A</i>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Frequency changes in a new medium.”</b> It does not. Only <i>v</i> and <i>λ</i> change; <i>f</i> is the source’s signature and is conserved across boundaries. This single fact silently decides a large fraction of wave-optics MCQs.',
          '<b>Confusing the ray and the wavefront.</b> The ray is the arrow; the wavefront is the surface, and they are always mutually perpendicular. In a derivation, always label which angle (between the wavefront and the surface) you are calling <i>i</i> and <i>r</i> — careless students measure from the wrong line and lose the geometry.',
          '<b>Forgetting the intensity → amplitude square root.</b> <i>I</i> ∝ 1/<i>r</i><sup>2</sup> but <i>A</i> ∝ 1/<i>r</i>. Apply the inverse-square law to intensity, never directly to amplitude.',
          '<b>Calling the denser medium the “faster” one.</b> Higher <i>n</i> means slower light (<i>v</i> = <i>c</i>/<i>n</i>) and bending toward the normal. The historical corpuscular-vs-wave debate hinged on exactly this; don’t repeat Newton’s mistake.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the ratio shortcut.</b> Almost every refraction numerical reduces to one chain:<br><i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = <i>λ</i><sub>1</sub>/<i>λ</i><sub>2</sub> = sin <i>i</i>/sin <i>r</i><br>Memorise it as “big <i>n</i>, small everything-else.” If a problem gives you any one ratio, you instantly have the other three — no need to compute absolute speeds or wavelengths. Sanity check: the answer must always show light slower and wavelength shorter in the denser medium.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Wavefront</b> = locus of points in the <b>same phase</b>. <b>Ray</b> ⊥ wavefront.', note: '' },
          { f: 'Types', note: 'point source → <b>spherical</b>; line source → <b>cylindrical</b>; far source → <b>plane</b>.' },
          {
            f: 'Huygens’ principle',
            note: 'every point on a wavefront = a secondary source → wavelets spread at speed <i>v</i> → their <b>envelope</b> = the new wavefront.',
          },
          {
            f: 'Derives',
            note: 'laws of reflection (<i>i</i> = <i>r</i>) and refraction (Snell’s law) — both from “wavelet radius = <i>vτ</i>.”',
          },
          {
            f: 'Snell chain',
            note: 'sin <i>i</i>/sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>λ</i><sub>1</sub>/<i>λ</i><sub>2</sub>, with <i>n</i> = <i>c</i>/<i>v</i>.',
          },
          {
            f: 'Conserved on refraction',
            note: 'frequency <i>f</i>. <b>Changes:</b> <i>v</i> and <i>λ</i> (<i>λ</i><sub>med</sub> = <i>λ</i><sub>0</sub>/<i>n</i>).',
          },
          { f: 'Point source', note: '<i>I</i> ∝ 1/<i>r</i><sup>2</sup>, <i>A</i> ∝ 1/<i>r</i>.' },
          {
            f: 'Fresnel distance',
            note: '<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i> (ray optics for ≪ <i>z</i><sub>F</sub>, wave optics beyond).',
          },
          {
            f: 'Limitations',
            note: 'geometric construction only; backwave needs the ad-hoc obliquity fix; valid for all waves (incl. sound).',
          },
        ],
        aids: ['Mnemonic: “Big <i>n</i>, slow & short” — denser medium ⇒ smaller speed ⇒ shorter wavelength ⇒ bend toward normal.'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 649–656 ─────────────────────────
  {
    n: '02',
    title: 'The Doppler Effect of Light',
    kalam: 'Doppler effect = change in observed frequency/wavelength from relative motion of source and observer.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards ask the definition, the redshift/blueshift idea, and the fractional-shift formula (1–2 marks). JEE Main occasionally sets a one-step numerical (find the recession speed from a measured shift). NEET asks it rarely, usually as a one-line concept. JEE Advanced may fold it into an astrophysics-flavoured problem (stellar rotation, expanding universe).',
      },
      {
        t: 'p',
        html: '<b>Notation note:</b> frequency is written <i>f</i> (as in the wave relation <i>v</i> = <i>fλ</i>), not <i>ν</i>. <i>v</i><sub>r</sub> is the <b>radial</b> (line-of-sight) relative speed; <i>c</i> is the speed of light.',
      },
      {
        t: 'p',
        html: 'Stand on a railway platform as the Rajdhani roars through without stopping. As it approaches, the horn sounds shrill and high; the instant it passes and recedes, the pitch drops to a lower drone. The horn itself never changed its note — your ears received a different frequency because the source was moving relative to you. That shift in observed frequency due to relative motion of source and observer is the <b>Doppler effect</b>, and it happens for every wave, including light.',
      },
      {
        t: 'p',
        html: 'For light the effect is the same in spirit but with two important twists. First, light needs <b>no medium</b>, so there is no “air” to measure motion against — only the <b>relative velocity</b> between source and observer matters. Second, light is fast: the shifts are tiny unless the relative speed is an appreciable fraction of <i>c</i>, so for everyday and most astronomical situations we use a simple small-speed formula.',
      },
      {
        t: 'p',
        html: 'The vocabulary you must own: when a light source <b>moves away</b> from you, every wavefront is emitted from slightly farther back, so the waves arrive <b>stretched</b> — longer wavelength, lower frequency. Since “longer wavelength” means shifted toward the red end of the spectrum, this is called a <b>redshift</b>. When the source <b>approaches</b>, the waves are <b>squeezed</b> — shorter wavelength, higher frequency — a <b>blueshift</b>. Receding → red; approaching → blue.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the spherical wavefronts of Topic 01 leaving a moving source. As the source drifts in one direction while emitting, the wavefronts pile up close together in front of it (the direction it moves toward) and spread out behind it. An observer ahead sees crowded wavefronts (blueshift); an observer behind sees stretched ones (redshift). The wave pattern itself tells you which way the source is going and how fast.',
      },
      {
        t: 'p',
        html: 'This single idea quietly underpins a huge amount of modern science. The light from distant galaxies is <b>redshifted</b>, and the farther they are the more redshifted — Edwin Hubble’s discovery that the universe is expanding. Police <b>speed guns</b> and weather <b>radar</b> bounce waves off a moving target and read the Doppler shift to compute its speed. Astronomers measure how fast stars approach or recede, detect unseen planets by the tiny wobble they induce in their star’s spectrum, and even clock the <b>rotation</b> of the Sun by comparing the shift of its two edges.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>Small-speed approximation.</b> The formula Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> holds only for <i>v</i><sub>r</sub> ≪ <i>c</i>. At speeds approaching <i>c</i> you must use the relativistic Doppler formula (stated in Key formulas and definitions).<br>• <b>Radial velocity only.</b> Just the <b>component of velocity along the line of sight</b> (<i>v</i><sub>r</sub>) produces this first-order shift. A source moving purely across your line of sight (transverse) gives no first-order classical shift at all (there is a tiny second-order relativistic transverse effect, ignored at this level).<br>• <b>Relative velocity, not absolute.</b> Because light has no medium, only the source–observer relative speed enters; it does not matter “who” is moving.<br>• <b>Sign discipline.</b> Take <i>v</i><sub>r</sub> <b>positive for recession</b> (moving apart). Then Δ<i>f</i> is negative (redshift) and Δ<i>λ</i> is positive.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Fractional frequency shift (small speed, <i>v</i><sub>r</sub> ≪ <i>c</i>)',
        main: 'Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i>',
        legend: [
          'Δ<i>f</i> = <i>f</i><sub>observed</sub> − <i>f</i><sub>source</sub>',
          '<i>v</i><sub>r</sub> = radial relative speed (positive for recession)',
          '<i>c</i> = speed of light',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Fractional wavelength shift (equivalent form)',
        main: 'Δ<i>λ</i>/<i>λ</i> = +<i>v</i><sub>r</sub>/<i>c</i>',
        legend: [],
        note: 'Recession (<i>v</i><sub>r</sub> > 0) gives Δ<i>λ</i> > 0 — a redshift.',
      },
      {
        t: 'formula',
        kicker: 'Recession (or approach) speed from a measured shift',
        main: '<i>v</i><sub>r</sub> = <i>c</i> Δ<i>λ</i>/<i>λ</i> = −<i>c</i> Δ<i>f</i>/<i>f</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Relativistic Doppler formula (exact, for completeness / high speeds)',
        main: 'for a source receding at speed <i>v</i>:<br><i>f</i>′ = <i>f</i>√((<i>c</i> − <i>v</i>)/(<i>c</i> + <i>v</i>))',
        legend: [],
        note: 'For <i>v</i> ≪ <i>c</i> this reduces to Δ<i>f</i>/<i>f</i> ≈ −<i>v</i>/<i>c</i>.',
      },
      {
        t: 'p',
        html: 'All three small-speed quantities are dimensionless ratios. <i>v</i><sub>r</sub> and <i>c</i> carry units m s<sup>−1</sup>, [LT<sup>−1</sup>].',
      },
      {
        t: 'table',
        title: 'Sign summary',
        head: ['Motion', '<i>v</i><sub>r</sub>', 'Frequency', 'Wavelength', 'Name'],
        rows: [
          ['Receding', '+', 'decreases', 'increases', 'redshift'],
          ['Approaching', '−', 'increases', 'decreases', 'blueshift'],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no Huygens-style geometric derivation here; instead, the small-speed result follows from a clean wave-counting argument. Knowing why the formula looks the way it does is what exams reward.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — set up one period.</b> Let the source emit light of frequency <i>f</i>, period <i>T</i> = 1/<i>f</i>, and wavelength <i>λ</i> = <i>cT</i>. Suppose the source recedes from the observer along the line of sight at speed <i>v</i><sub>r</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — track two successive wavefronts.</b> The source emits one wavefront, then emits the next exactly one period <i>T</i> later. In that period, the first wavefront has travelled a distance <i>cT</i> = <i>λ</i> toward the observer. But the source has also moved away by <i>v</i><sub>r</sub><i>T</i> during the same period.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — find the new wavelength.</b> The separation between the two successive wavefronts — which is the observed wavelength — is therefore the original spacing plus the extra gap opened up by the receding source:<br><i>λ</i>′ = <i>cT</i> + <i>v</i><sub>r</sub><i>T</i> = (<i>c</i> + <i>v</i><sub>r</sub>)<i>T</i><br>Since <i>λ</i> = <i>cT</i>:<br><i>λ</i>′ = <i>λ</i>(1 + <i>v</i><sub>r</sub>/<i>c</i>) ⇒ Δ<i>λ</i>/<i>λ</i> = <i>v</i><sub>r</sub>/<i>c</i><br><b>Physical reason:</b> every wavefront is launched from a point slightly farther back, so the waves arrive stretched — exactly the “wavefronts spreading out behind a moving source” picture.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — convert to frequency.</b> Using <i>f</i>′ = <i>c</i>/<i>λ</i>′:<br><i>f</i>′ = <i>c</i>/(<i>λ</i>(1 + <i>v</i><sub>r</sub>/<i>c</i>)) = <i>f</i>/(1 + <i>v</i><sub>r</sub>/<i>c</i>) ≈ <i>f</i>(1 − <i>v</i><sub>r</sub>/<i>c</i>) (<i>v</i><sub>r</sub> ≪ <i>c</i>)<br>Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i><br>The minus sign is the whole story: recede and the frequency drops.',
      },
      {
        t: 'proc',
        title: 'Procedure to solve any Doppler-of-light problem',
        steps: [
          'Identify the measured quantity — a shift in <i>λ</i> or <i>f</i> — and compute the fractional shift.',
          'Read its <b>sign</b>: longer <i>λ</i> (or lower <i>f</i>) = redshift = receding; shorter = blueshift = approaching.',
          'Apply <i>v</i><sub>r</sub> = <i>c</i> Δ<i>λ</i>/<i>λ</i> to get the radial speed.',
          'If the geometry gives only a component along the line of sight, remember you have found <i>v</i><sub>r</sub>, not the full speed.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A particular spectral line emitted by hydrogen has wavelength 656.3 nm in the laboratory. In the light from a distant star the same line is observed at 656.5 nm. Find the star’s radial speed and state whether it is approaching or receding.',
        steps: [
          '<b>Given:</b> <i>λ</i> = 656.3 nm, <i>λ</i>′ = 656.5 nm, so Δ<i>λ</i> = +0.2 nm.',
          'The wavelength has increased — a redshift — so the star is <b>receding</b>.',
          '<i>v</i><sub>r</sub> = <i>c</i> Δ<i>λ</i>/<i>λ</i> = (3 × 10<sup>8</sup>) × 0.2/656.3 ≈ (3 × 10<sup>8</sup>)(3.05 × 10<sup>−4</sup>)',
        ],
        ans: '<i>v</i><sub>r</sub> ≈ 9.1 × 10<sup>4</sup> m s<sup>−1</sup> (≈ 91 km s<sup>−1</sup>), receding.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The light from a far-off galaxy shows all its spectral lines shifted toward longer wavelengths. This tells us the galaxy is:<br>(A) approaching us (B) receding from us (C) stationary (D) rotating only',
        steps: [
          '<b>The fast reasoning:</b> Longer wavelength = redshift = <b>receding</b>. No calculation needed.',
          '<b>Trap to avoid:</b> Students who half-remember “blue = cold, red = hot” or who reverse the rule pick (A). Anchor it physically: receding stretches the waves (longer <i>λ</i> = red). The systematic redshift of galaxies is exactly Hubble’s evidence for an expanding universe.',
        ],
        ans: '(B) receding.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A star emits light at a frequency of 5.0 × 10<sup>14</sup> Hz. It is approaching Earth at 3.0 × 10<sup>5</sup> m s<sup>−1</sup>. Find (a) the fractional change in frequency, (b) the observed frequency, and (c) the corresponding change in wavelength.',
        steps: [
          '<b>Given:</b> <i>f</i> = 5.0 × 10<sup>14</sup> Hz, approaching so <i>v</i><sub>r</sub> = −3.0 × 10<sup>5</sup> m s<sup>−1</sup>.',
          '<b>(a)</b> Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> = −(−3.0 × 10<sup>5</sup>)/(3.0 × 10<sup>8</sup>) = +1.0 × 10<sup>−3</sup> (frequency increases — blueshift).',
          '<b>(b)</b> Δ<i>f</i> = (1.0 × 10<sup>−3</sup>)(5.0 × 10<sup>14</sup>) = 5.0 × 10<sup>11</sup> Hz, so<br><i>f</i>′ = 5.0 × 10<sup>14</sup> + 5.0 × 10<sup>11</sup> ≈ 5.005 × 10<sup>14</sup> Hz',
          '<b>(c)</b> Original <i>λ</i> = <i>c</i>/<i>f</i> = (3 × 10<sup>8</sup>)/(5 × 10<sup>14</sup>) = 600 nm. Blueshift, so Δ<i>λ</i>/<i>λ</i> = <i>v</i><sub>r</sub>/<i>c</i> = −1.0 × 10<sup>−3</sup> (with <i>v</i><sub>r</sub> < 0 for an approaching source):<br>Δ<i>λ</i> = (−1.0 × 10<sup>−3</sup>)(600 nm) = −0.6 nm<br>Wavelength decreases by 0.6 nm (to 599.4 nm).',
          '<b>Why “multi-concept”:</b> it ties Doppler to the wave relation <i>λ</i> = <i>c</i>/<i>f</i> (Topic 01) and demands consistent sign-tracking across both frequency and wavelength forms.',
        ],
        ans: 'Δ<i>f</i>/<i>f</i> = +10<sup>−3</sup>; <i>f</i>′ ≈ 5.005 × 10<sup>14</sup> Hz; Δ<i>λ</i> = −0.6 nm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Light of wavelength 600.0 nm from a spectral line is observed from the two opposite edges (limbs) of the Sun’s equator. Because the Sun rotates, one limb is approaching and the other is receding, and the line is measured at slightly different wavelengths from the two edges, differing by Δ<i>λ</i><sub>total</sub> = 0.0080 nm. The Sun’s radius is 7.0 × 10<sup>8</sup> m. Find (a) the equatorial rotational speed and (b) the rotation period.',
        steps: [
          '<b>Step 1 — the two edges give opposite shifts.</b> The approaching limb is blueshifted by <i>λv</i><sub>eq</sub>/<i>c</i> and the receding limb redshifted by <i>λv</i><sub>eq</sub>/<i>c</i>, so the total wavelength difference between the limbs is twice a single shift:<br>Δ<i>λ</i><sub>total</sub> = 2<i>λv</i><sub>eq</sub>/<i>c</i>',
          '<b>Step 2 — solve for the equatorial speed.</b><br><i>v</i><sub>eq</sub> = <i>c</i> Δ<i>λ</i><sub>total</sub>/(2<i>λ</i>) = (3 × 10<sup>8</sup>)(0.0080 × 10<sup>−9</sup>)/(2 × (600 × 10<sup>−9</sup>)) = (2.4 × 10<sup>−3</sup>)/(1.2 × 10<sup>−6</sup>) = 2.0 × 10<sup>3</sup> m s<sup>−1</sup><br>So <i>v</i><sub>eq</sub> ≈ 2 km s<sup>−1</sup>.',
          '<b>Step 3 — rotation period.</b><br><i>T</i> = 2π<i>R</i>/<i>v</i><sub>eq</sub> = 2π(7.0 × 10<sup>8</sup>)/(2.0 × 10<sup>3</sup>) ≈ 2.2 × 10<sup>6</sup> s ≈ 25 days',
          '<b>Interpretation:</b> this is remarkably close to the Sun’s real ≈25-day equatorial rotation — a vivid demonstration that a wavelength shift of eight thousandths of a nanometre encodes the rotation of an entire star. The factor of <b>2</b> (both limbs contributing oppositely) is the JEE-Advanced subtlety students most often miss.',
        ],
        ans: '<i>v</i><sub>eq</sub> ≈ 2 km s<sup>−1</sup>; <i>T</i> ≈ 25 days.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A spectral line of wavelength 500 nm from a star appears at 500.05 nm. Is the star approaching or receding, and at what radial speed?',
            a: 'Redshift (wavelength increased) ⇒ receding; <i>v</i><sub>r</sub> = <i>c</i> Δ<i>λ</i>/<i>λ</i> = (3 × 10<sup>8</sup>)(0.05/500) = 3.0 × 10<sup>4</sup> m s<sup>−1</sup>.',
          },
          {
            q: '[NEET] The radial velocity of a galaxy is 1.5 × 10<sup>6</sup> m s<sup>−1</sup> away from Earth. What is the fractional change in the wavelength of its light?',
            a: 'Δ<i>λ</i>/<i>λ</i> = <i>v</i><sub>r</sub>/<i>c</i> = (1.5 × 10<sup>6</sup>)/(3 × 10<sup>8</sup>) = 5 × 10<sup>−3</sup> (increase, redshift).',
          },
          {
            q: '[JEE Main] A source of light of frequency 6.0 × 10<sup>14</sup> Hz approaches an observer at 6.0 × 10<sup>6</sup> m s<sup>−1</sup>. Find the observed frequency.',
            a: 'Δ<i>f</i>/<i>f</i> = <i>v</i>/<i>c</i> = (6 × 10<sup>6</sup>)/(3 × 10<sup>8</sup>) = 2 × 10<sup>−2</sup>; <i>f</i>′ = 6.0 × 10<sup>14</sup>(1.02) = 6.12 × 10<sup>14</sup> Hz.',
          },
          {
            q: '[JEE Main] The Hα line (656.3 nm) from a star is redshifted by 0.15 nm. Compute the star’s recession speed.',
            a: '<i>v</i><sub>r</sub> = <i>c</i> Δ<i>λ</i>/<i>λ</i> = (3 × 10<sup>8</sup>)(0.15/656.3) ≈ 6.86 × 10<sup>4</sup> m s<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] A radar emits microwaves of wavelength 3.0 cm toward a car approaching at 30 m s<sup>−1</sup>. The wave reflects off the car and returns. Find the total fractional change in wavelength of the received wave compared with the emitted wave. (Hint: the moving car acts as both a moving observer and then a moving source — the shift happens twice.)',
            a: 'The shift occurs twice (car receives blueshifted, then re-emits blueshifted again), so |Δ<i>λ</i>/<i>λ</i>| = 2<i>v</i>/<i>c</i> = 2(30)/(3 × 10<sup>8</sup>) = 2.0 × 10<sup>−7</sup> (decrease).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The spectral lines of a distant galaxy are shifted toward the red end. This indicates that the galaxy is:',
        opts: [
          { label: 'approaching at increasing speed', nudge: '<b>(A)</b> reverses the rule (approach gives a blueshift).' },
          { label: 'receding', nudge: null },
          { label: 'stationary', nudge: '<b>(C)</b> would give no shift at all.' },
          {
            label: 'emitting only red light',
            nudge: '<b>(D)</b> confuses an intrinsic colour with a Doppler shift of existing lines — the lines are identified by pattern and found shifted, not recoloured.',
          },
        ],
        correct: 1,
        solution: 'A redshift means longer observed wavelength, which by the Doppler effect means the source is receding.',
      },
      {
        t: 'mcq',
        q: 'The Doppler shift in the light from a star depends on:',
        opts: [
          {
            label: 'the total speed of the star',
            nudge: '<b>(A)</b> over-counts: a star moving partly sideways contributes only its radial part.',
          },
          { label: 'only the component of velocity along the line of sight', nudge: null },
          {
            label: 'only the component of velocity perpendicular to the line of sight',
            nudge: '<b>(C)</b> is backwards — transverse motion gives no first-order shift.',
          },
          {
            label: 'the distance of the star',
            nudge: '<b>(D)</b> confuses Doppler shift (depends on velocity) with brightness or Hubble distance.',
          },
        ],
        correct: 1,
        solution: 'Only the radial (line-of-sight) component produces the first-order shift.',
      },
      {
        t: 'mcq',
        q: 'For a source receding at speed <i>v</i> ≪ <i>c</i>, the fractional change in frequency is:',
        opts: [
          { label: '+<i>v</i>/<i>c</i>', nudge: '<b>(A)</b> has the wrong sign (that would be a blueshift).' },
          { label: '−<i>v</i>/<i>c</i>', nudge: null },
          {
            label: '+<i>c</i>/<i>v</i>',
            nudge: '<b>(C)</b> and <b>(D)</b> invert the ratio — a magnitude red flag: Δ<i>f</i>/<i>f</i> must be small, and <i>c</i>/<i>v</i> > 1 is impossible for a small shift.',
          },
          {
            label: '−<i>c</i>/<i>v</i>',
            nudge: '<b>(C)</b> and <b>(D)</b> invert the ratio — a magnitude red flag: Δ<i>f</i>/<i>f</i> must be small, and <i>c</i>/<i>v</i> > 1 is impossible for a small shift.',
          },
        ],
        correct: 1,
        solution: 'Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i>; recession lowers the frequency.',
      },
      {
        t: 'mcq',
        q: 'A wavelength of 600 nm is observed as 600.6 nm. The radial speed of the source is about:',
        opts: [
          {
            label: '3 × 10<sup>5</sup> m s<sup>−1</sup>, approaching',
            nudge: '<b>(A)</b> gets the speed right but the direction wrong.',
          },
          { label: '3 × 10<sup>5</sup> m s<sup>−1</sup>, receding', nudge: null },
          {
            label: '3 × 10<sup>6</sup> m s<sup>−1</sup>, receding',
            nudge: '<b>(C)</b> is off by a factor of 10 (arithmetic slip in Δ<i>λ</i>/<i>λ</i>).',
          },
          { label: '6 × 10<sup>5</sup> m s<sup>−1</sup>, receding', nudge: '<b>(D)</b> double-counts the shift.' },
        ],
        correct: 1,
        solution: 'Δ<i>λ</i>/<i>λ</i> = 0.6/600 = 10<sup>−3</sup>; <i>v</i><sub>r</sub> = <i>c</i> × 10<sup>−3</sup> = 3 × 10<sup>5</sup> m s<sup>−1</sup>. Wavelength increased ⇒ receding.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reversing redshift and blueshift.</b> Receding = stretched = longer wavelength = <b>red</b>. Approaching = squeezed = <b>blue</b>. Anchor it to the stretching-wavefronts picture, not to rote.',
          '<b>Using the full speed instead of the radial component.</b> Only the line-of-sight component <i>v</i><sub>r</sub> enters the first-order formula. A star whizzing mostly sideways shows almost no shift.',
          '<b>Sign slips between the <i>f</i> and <i>λ</i> forms.</b> They carry opposite signs: Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> but Δ<i>λ</i>/<i>λ</i> = +<i>v</i><sub>r</sub>/<i>c</i>. Pick one form and stick with it.',
          '<b>Forgetting the factor of 2 in reflection/two-edge problems.</b> Radar (wave reflects off a mover) and stellar-rotation (two opposite limbs) both double the single-shift result.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — work in fractional shifts.</b> Almost every problem is just Δ<i>λ</i>/<i>λ</i> = <i>v</i><sub>r</sub>/<i>c</i>. Compute the dimensionless fractional shift first, decide the sign from “longer = receding,” then multiply by <i>c</i> for speed, by <i>λ</i> for Δ<i>λ</i>, or by <i>f</i> for Δ<i>f</i>. Quick sanity check: everyday and stellar speeds give fractional shifts of 10<sup>−7</sup> to 10<sup>−3</sup> — if you get a shift near or above 1, you have an error (or you are doing relativistic astrophysics).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Doppler effect</b> = change in observed frequency/wavelength from relative motion of source and observer. For light, only <b>relative</b> velocity matters (no medium).',
            note: '',
          },
          {
            f: 'Small-speed formulas (<i>v</i><sub>r</sub> ≪ <i>c</i>)',
            note: 'Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i>, Δ<i>λ</i>/<i>λ</i> = +<i>v</i><sub>r</sub>/<i>c</i> (<i>v</i><sub>r</sub> positive for recession).',
          },
          { f: 'Speed from shift', note: '<i>v</i><sub>r</sub> = <i>c</i> Δ<i>λ</i>/<i>λ</i>.' },
          {
            f: '<b>Receding</b> ⇒ <b>redshift</b> (longer <i>λ</i>, lower <i>f</i>); <b>approaching</b> ⇒ <b>blueshift</b>.',
            note: '',
          },
          { f: '<b>Only the radial (line-of-sight) velocity</b> produces the first-order shift.', note: '' },
          {
            f: '<b>Factor of 2</b> when the wave reflects off a mover (radar) or two opposite edges are compared (stellar rotation).',
            note: '',
          },
          { f: 'Relativistic (exact)', note: '<i>f</i>′ = <i>f</i>√((<i>c</i> − <i>v</i>)/(<i>c</i> + <i>v</i>)).' },
          {
            f: 'Applications',
            note: 'expanding universe (Hubble), speed guns/radar, exoplanet detection, stellar/solar rotation.',
          },
        ],
        aids: ['Mnemonic: “Red = receding, retreating; Blue = bound toward you.”'],
      },
    ],
  },
];
