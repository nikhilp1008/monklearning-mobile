import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 05 and 06: pp. 679–700 of the Class 12 Physics Master
 * Reference, word for word: Diffraction of Light (pp. 679–689) and
 * Polarisation of Light (pp. 690–700), each split at its Sections 1 to 8.
 * Figures 10.8–10.12 (captions in the text pages, drawn on the book's
 * "CHAPTER 10 · FIGURES" pages 681, 683, 692, 694, 696) are redrawn in
 * lib/diagrams/physics-12-10b.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 679–689 ─────────────────────────
  {
    n: '05',
    title: 'Diffraction of Light',
    kalam: 'Diffraction is the bending or spreading of a wave as it passes the edge of an obstacle or squeezes through an aperture.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards regularly ask the single-slit minima derivation and the central-maximum width (3–5 marks). JEE Main asks 1–2 questions on central-maximum width, missing orders, or resolving power. NEET typically asks one conceptual MCQ (Fresnel vs Fraunhofer, or the minima condition). JEE Advanced layers it with intensity, resolving limits, and diffraction–interference combinations.',
      },
      {
        t: 'p',
        html: '<b>Notation note:</b> <i>a</i> = <b>slit width</b> (single aperture), the same aperture symbol used in Topic 01 and deliberately different from <i>d</i> = slit separation in YDSE. Mixing them up is the most expensive error in this topic — guard it.',
      },
      {
        t: 'p',
        html: 'Stand in a gully in any old town and you can hear the vegetable vendor calling out from around the corner long before you can see their cart. Sound happily bends around the corner; light stubbornly travels straight and leaves a sharp shadow. Same corner, same physics of waves — so why the difference? The answer is <b>diffraction</b>, and the whole secret is the ratio of the wavelength to the size of the obstacle or opening.',
      },
      {
        t: 'p',
        html: 'Diffraction is the bending or spreading of a wave as it passes the edge of an obstacle or squeezes through an aperture. Every wave does it, but the effect is only noticeable when the aperture is roughly the same size as the wavelength. Sound has a wavelength of about a metre — comparable to a doorway — so it spreads through doorways and around corners with ease. Visible light has a wavelength of around half a micrometre — thousands to millions of times smaller than everyday openings — so its bending is microscopic and we are fooled into thinking light always goes in straight lines. Shrink the opening down to the scale of light’s wavelength, though, and light spreads out dramatically, exactly like the sound.',
      },
      {
        t: 'p',
        html: 'Picture a parallel beam (a plane wavefront) hitting a single narrow slit of width <i>a</i> and landing on a distant screen. Naive ray optics predicts a single bright strip the exact width of the slit. What you actually see is a <b>broad, bright central band</b>, flanked on both sides by a series of progressively <b>fainter bright bands separated by dark bands</b>. The light has fanned out far beyond the geometric slit image. This is the <b>single-slit diffraction pattern</b>, and it is the canonical demonstration that light is a wave.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> here is the beautiful link back to Topic 01. By Huygens’ principle, every point across the width of the slit acts as a secondary source, all starting in phase because the incoming wavefront is plane. The pattern on the screen is just these countless secondary wavelets interfering with one another. So diffraction is not some new mechanism — it is <b>interference of a wavefront with itself</b>. Straight ahead (the centre), every wavelet travels essentially the same distance, so they all arrive in phase and reinforce: that is the bright central maximum. At an angle, wavelets from the top of the slit lag those from the bottom, and at special angles the contributions pair up and cancel completely: those are the dark minima.',
      },
      {
        t: 'p',
        html: 'The single most important — and most counterintuitive — feature is the condition for darkness. In the double-slit experiment, Δ<i>x</i> = <i>mλ</i> gave a bright fringe. In single-slit diffraction, the very same-looking condition <i>a</i> sin <i>θ</i> = <i>mλ</i> gives a <b>dark</b> fringe. This reversal catches almost everyone, so we will derive it carefully.',
      },
      {
        t: 'p',
        html: '<b>Beyond a single slit.</b> Line up many equally spaced slits and you have a <b>diffraction grating</b> — the sharper, more useful cousin of the double slit. Its principal maxima obey <i>d</i> sin <i>θ</i> = <i>mλ</i> (with <i>d</i> the slit spacing), but with thousands of slits the bright lines become razor-thin, which is why gratings are the workhorse of spectroscopy: they fan white light into a pure spectrum and let us measure wavelengths precisely. You meet the same physics every day — the rainbow sheen off a CD or DVD is a reflection grating at work, its closely spaced tracks diffracting different colours to different angles. Push the wavelength down to the size of atoms and the natural “grating” becomes a crystal: X-rays diffracting off the regular planes of atoms (Bragg’s condition 2<i>d</i> sin <i>θ</i> = <i>mλ</i>) is exactly how the structure of crystals, and famously of DNA, was decoded. Diffraction is not a laboratory curiosity — it is how we read the very small.',
      },
      { t: 'fig', id: 'p12-10-fig-10.8' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>Aperture must be comparable to</b> <i>λ</i> for diffraction to be appreciable. If <i>a</i> ≫ <i>λ</i>, the spreading is negligible and ray optics is recovered — this is precisely the <b>Fresnel-distance</b> boundary from Topic 01: beyond <i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i> the beam has spread noticeably; before it, ray optics holds.<br>• <b>Fraunhofer vs Fresnel.</b> The clean formula <i>a</i> sin <i>θ</i> = <i>mλ</i> assumes <b>Fraunhofer diffraction</b>: both the incident and diffracted wavefronts are planar (source and screen effectively at infinity, usually arranged with lenses). When the source or screen is close, the wavefronts are curved and you get the messier <b>Fresnel diffraction</b>.<br>• <b>Monochromatic light</b> gives sharp, well-defined minima; white light smears each minimum into coloured edges.<br>• <b>The central maximum is special:</b> it is <b>twice as wide</b> as every other maximum, and far brighter — it carries the bulk of the energy.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Condition for minima (dark bands) in single-slit diffraction',
        main: '<i>a</i> sin <i>θ</i> = <i>mλ</i>, <i>m</i> = ±1, ±2, ±3, … (<i>m</i> ≠ 0)',
        legend: ['<i>a</i> = slit width', '<i>θ</i> = angular position of the minimum', '<i>λ</i> = wavelength'],
        note: '(<i>m</i> = 0 is excluded — it is the central maximum, not a minimum.)',
      },
      {
        t: 'formula',
        kicker: 'Condition for secondary maxima (approximate)',
        main: '<i>a</i> sin <i>θ</i> ≈ (<i>m</i> + ½)<i>λ</i>, <i>m</i> = 1, 2, 3, …',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Angular half-width of the central maximum (axis to first minimum)',
        main: '<i>θ</i><sub>1</sub> ≈ <i>λ</i>/<i>a</i> (small angle)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Full angular width of central maximum',
        main: 'Δ<i>θ</i> = 2<i>λ</i>/<i>a</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Linear width of central maximum on a screen at distance <i>D</i> (or focal length <i>f</i> with a lens)',
        main: '<i>w</i> = 2<i>λD</i>/<i>a</i> (or 2<i>fλ</i>/<i>a</i>)',
        legend: [],
        note: 'Units: metre, [L].',
      },
      {
        t: 'formula',
        kicker: 'Fresnel distance (ray-optics/wave-optics boundary, introduced in Topic 01)',
        main: '<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Rayleigh criterion for resolution (smallest resolvable angular separation through an aperture of diameter <i>D</i><sub>ap</sub>)',
        main: '<i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i><sub>ap</sub>',
        legend: [],
        note: 'The factor 1.22 arises from the circular aperture; for a slit it would be <i>λ</i>/<i>a</i>. This <i>θ</i><sub>min</sub> governs a <b>telescope</b> (resolving two distant stars). Resolving power = 1/<i>θ</i><sub>min</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Microscope — limit of resolution (smallest separation between two points that can be distinguished)',
        main: '<i>d</i><sub>min</sub> = 1.22<i>λ</i>/(2<i>n</i> sin <i>β</i>) = 0.61<i>λ</i>/NA',
        legend: ['<i>n</i> sin <i>β</i> = numerical aperture (NA)', '<i>n</i> = refractive index of the medium between object and objective', '<i>β</i> = half-angle of the cone of light entering the objective'],
        note: null,
      },
      {
        t: 'p',
        html: 'Smaller <i>d</i><sub>min</sub> means better resolution, so a microscope is improved by a large NA (and shorter <i>λ</i> — the basis of oil-immersion and electron microscopy), whereas a telescope is improved by a large aperture diameter.',
      },

      { t: 'part', title: 'CBSE board derivation — Single-slit minima' },
      { t: 'fig', id: 'p12-10-fig-10.9' },
      {
        t: 'p',
        html: '<b>Setup.</b> A plane monochromatic wavefront of wavelength <i>λ</i> falls normally on a slit of width <i>a</i>. By Huygens’ principle every point across the slit is a secondary source, all in phase. We examine the resultant at a point on the screen in the direction making angle <i>θ</i> with the normal.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — the path difference across the whole slit.</b> Light from the bottom edge of the slit travels farther than light from the top edge by<br>Δ<i>x</i><sub>edges</sub> = <i>a</i> sin <i>θ</i><br><b>Physical reason:</b> this is the same edge-to-edge path difference geometry we used for the slits in Topic 03 — only now the “edges” are the two ends of one slit.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — the pairing trick (why this gives a minimum, not a maximum).</b> Mentally split the slit into two equal halves, each of width <i>a</i>/2. Pair each point in the upper half with the point exactly <i>a</i>/2 below it in the lower half. The path difference between any such pair is<br>Δ<i>x</i><sub>pair</sub> = (<i>a</i>/2) sin <i>θ</i>',
      },
      {
        t: 'p',
        html: '<b>Step 3 — impose cancellation.</b> If each pair is exactly out of phase — path difference <i>λ</i>/2 — then every point in the upper half is cancelled by its partner in the lower half, and the total amplitude is <b>zero</b>:<br>(<i>a</i>/2) sin <i>θ</i> = <i>λ</i>/2 ⟹ <i>a</i> sin <i>θ</i> = <i>λ</i><br>This is the <b>first minimum</b>. The crucial insight: pairing produces cancellation, which is why <i>a</i> sin <i>θ</i> = <i>λ</i> marks darkness, the exact opposite of the double slit.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — generalise.</b> Splitting the slit into 4 equal parts and pairing within them gives complete cancellation when (<i>a</i>/4) sin <i>θ</i> = <i>λ</i>/2, i.e. <i>a</i> sin <i>θ</i> = 2<i>λ</i>. Continuing this for 2<i>m</i> equal parts gives the general minima condition:<br><i>a</i> sin <i>θ</i> = <i>mλ</i>, <i>m</i> = ±1, ±2, …',
      },
      {
        t: 'p',
        html: '<b>Step 5 — read off the central maximum.</b> Between the <i>m</i> = +1 and <i>m</i> = −1 minima lies the central maximum. Its angular half-width (small angle) is <i>θ</i><sub>1</sub> ≈ <i>λ</i>/<i>a</i>, so its full width is 2<i>λ</i>/<i>a</i> — <b>twice</b> the spacing between successive higher-order minima. That extra width, plus the fact that the secondary maxima are far weaker (the next is only about 4.7% as intense), is the signature of a diffraction envelope.',
      },
      {
        t: 'p',
        html: '<b>Contrast with interference (one line worth memorising):</b> double-slit bright fringes obey <i>d</i> sin <i>θ</i> = <i>mλ</i>; single-slit dark fringes obey <i>a</i> sin <i>θ</i> = <i>mλ</i>. Same algebra, opposite meaning, different length (<i>d</i> vs <i>a</i>).',
      },
      { t: 'p', html: 'The full comparison is a frequent 2–3 mark exam question:' },
      {
        t: 'table',
        title: null,
        head: ['Feature', 'Interference (YDSE)', 'Diffraction (single slit)'],
        rows: [
          ['Source of waves', 'two separate coherent slits', 'many points across one wavefront'],
          ['Fringe spacing', 'all fringes equally spaced', 'central max wide (2<i>λD</i>/<i>a</i>); others half as wide'],
          ['Fringe intensity', 'all bright fringes (nearly) equal', 'central max brightest; rapidly fainter outward'],
          ['Condition <i>mλ</i> gives', 'bright fringe (<i>d</i> sin <i>θ</i>)', 'dark fringe (<i>a</i> sin <i>θ</i>)'],
          ['Region of good contrast', 'many sharp fringes', 'few usable fringes'],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Light of wavelength 600 nm falls normally on a single slit of width 0.2 mm. A screen is placed 1.5 m away. Find (a) the angular position of the first minimum and (b) the linear width of the central maximum.',
        steps: [
          '<b>Given:</b> <i>λ</i> = 600 × 10<sup>−9</sup> m, <i>a</i> = 0.2 × 10<sup>−3</sup> m, <i>D</i> = 1.5 m.',
          '(a) First minimum (<i>m</i> = 1): <i>a</i> sin <i>θ</i> = <i>λ</i>, so<br>sin <i>θ</i> = <i>λ</i>/<i>a</i> = (600 × 10<sup>−9</sup>)/(0.2 × 10<sup>−3</sup>)',
          '(b) Width of central maximum:<br><i>w</i> = 2<i>λD</i>/<i>a</i> = 2 × (3 × 10<sup>−3</sup>) × 1.5 = 9 × 10<sup>−3</sup> m',
        ],
        ans: '(a) <i>θ</i><sub>1</sub> = 3 × 10<sup>−3</sup> rad; (b) central maximum width = 9 mm.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'In a single-slit diffraction experiment, if the slit width is halved, the width of the central maximum:<br>(A) halves (B) doubles (C) stays the same (D) quadruples',
        steps: [
          '<b>The fast reasoning:</b> <i>w</i> = 2<i>λD</i>/<i>a</i> ∝ 1/<i>a</i>. Halving <i>a</i> doubles <i>w</i>.',
          '<b>Trap to avoid:</b> The intuition “smaller slit ⇒ smaller everything” pushes students to (A). It is backwards. A narrower slit forces the light to spread more — a tiny aperture diffracts strongly. Sanity check: in the limit <i>a</i> → <i>λ</i>, the central maximum fills nearly the whole screen. Narrower slit, wider spread.',
        ],
        ans: '(B) doubles.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A double-slit arrangement has slit separation <i>d</i> = 0.9 mm and each slit has width <i>a</i> = 0.3 mm. Which interference maxima are missing from the pattern, and how many bright fringes lie inside the central diffraction maximum?',
        steps: [
          '<b>Concept (this is the diffraction–interference combination):</b> The double-slit interference fringes are modulated by the single-slit diffraction envelope. An interference maximum is wiped out wherever it falls on a diffraction minimum — a “missing order.” This happens when the bright-fringe and dark-band conditions coincide:<br><i>d</i> sin <i>θ</i> = <i>m</i><sub>I</sub><i>λ</i> (interference max) and <i>a</i> sin <i>θ</i> = <i>m</i><sub>D</sub><i>λ</i> (diffraction min)',
          'Dividing: <i>m</i><sub>I</sub>/<i>m</i><sub>D</sub> = <i>d</i>/<i>a</i> = 0.9/0.3 = 3.',
          'So <i>m</i><sub>I</sub> = 3, 6, 9, … are missing — <b>every 3rd interference order vanishes</b> (the orders <i>m</i><sub>I</sub> = ±3, ±6, …).',
          '<b>Fringes inside the central diffraction maximum:</b> the central maximum spans up to the first diffraction minimum (<i>m</i><sub>D</sub> = 1), i.e. <i>a</i> sin <i>θ</i> = <i>λ</i>. The interference orders within this are those with |<i>m</i><sub>I</sub>| < <i>d</i>/<i>a</i> = 3, namely <i>m</i><sub>I</sub> = 0, ±1, ±2 — that is the central fringe plus 2 on each side <b>= 5 bright fringes</b> (the <i>m</i><sub>I</sub> = ±3 orders are missing, falling exactly on the edge).',
          '<b>Why “multi-concept”:</b> it requires the YDSE condition (Topic 03) and the diffraction-minima condition (this topic) simultaneously — the hallmark of a JEE Main wave-optics question.',
        ],
        ans: 'Orders <i>m</i><sub>I</sub> = ±3, ±6, … are missing; 5 bright fringes fit within the central maximum.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The objective lens of a telescope has aperture diameter <i>D</i><sub>ap</sub> = 12 cm. Using light of mean wavelength 550 nm, (a) find the smallest angular separation it can resolve, and (b) determine the minimum distance between two point objects on the Moon (3.8 × 10<sup>8</sup> m away) that this telescope could just resolve.',
        steps: [
          '<b>Step 1 — Rayleigh limit.</b><br><i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i><sub>ap</sub> = (1.22 × 550 × 10<sup>−9</sup>)/0.12 = (6.71 × 10<sup>−7</sup>)/0.12 ≈ 5.59 × 10<sup>−6</sup> rad',
          '<b>Step 2 — convert angle to a separation at the Moon’s distance.</b> For a small angle, linear separation <i>s</i> = <i>θ</i><sub>min</sub> × <i>L</i> (<i>L</i> = 3.8 × 10<sup>8</sup> m, the Moon’s distance):<br><i>s</i> = (5.59 × 10<sup>−6</sup>) × (3.8 × 10<sup>8</sup>) ≈ 2.1 × 10<sup>3</sup> m',
          '<b>Interpretation:</b> even a fine telescope, limited purely by diffraction at its aperture, cannot distinguish two lunar features closer than about 2 km — a vivid reminder that resolution is set by the wave nature of light, not by lens “magnification.” Larger aperture ⇒ smaller <i>θ</i><sub>min</sub> ⇒ finer detail, which is exactly why research telescopes chase ever-bigger mirrors.',
        ],
        ans: '(a) <i>θ</i><sub>min</sub> ≈ 5.6 × 10<sup>−6</sup> rad; (b) minimum resolvable separation ≈ 2.1 km.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Light of wavelength 500 nm falls on a slit of width 0.1 mm. Find the angular width of the central maximum.',
            a: 'Δ<i>θ</i> = 2<i>λ</i>/<i>a</i> = 2(500 × 10<sup>−9</sup>)/(0.1 × 10<sup>−3</sup>) = 0.01 rad.',
          },
          {
            q: '[NEET] In single-slit diffraction, the first minimum for another colour occurs at a smaller angle than the first minimum for red light (<i>λ</i> = 700 nm). Is the second colour’s wavelength larger or smaller than 700 nm? (Conceptual — give the reasoning.)',
            a: 'Smaller. Since sin <i>θ</i> = <i>λ</i>/<i>a</i>, a smaller angle means a smaller <i>λ</i> (slit width fixed).',
          },
          {
            q: '[JEE Main] A parallel beam of 600 nm light passes through a slit and is focused by a lens of focal length 0.5 m onto a screen. If the central maximum is 3 mm wide, find the slit width.',
            a: '<i>a</i> = 2<i>fλ</i>/<i>w</i> = 2(0.5)(600 × 10<sup>−9</sup>)/(3 × 10<sup>−3</sup>) = 2 × 10<sup>−4</sup> m = 0.2 mm.',
          },
          {
            q: '[JEE Main] Estimate the Fresnel distance for an aperture of 3 mm illuminated by light of wavelength 500 nm, and state whether ray optics is valid at a screen 10 m away.',
            a: '<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i> = (3 × 10<sup>−3</sup>)<sup>2</sup>/(500 × 10<sup>−9</sup>) = 18 m. Since 10 m < <i>z</i><sub>F</sub> but not ≪ <i>z</i><sub>F</sub>, ray optics holds only roughly — diffraction spreading (≈ <i>λz</i>/<i>a</i> ≈ 1.7 mm) is already comparable to the aperture.',
          },
          {
            q: '[JEE Advanced] Two stars have an angular separation of 4 × 10<sup>−6</sup> rad. What is the minimum aperture diameter of a telescope (using <i>λ</i> = 500 nm) needed to just resolve them?',
            a: '<i>D</i><sub>ap</sub> = 1.22<i>λ</i>/<i>θ</i><sub>min</sub> = 1.22(500 × 10<sup>−9</sup>)/(4 × 10<sup>−6</sup>) ≈ 0.15 m = 15 cm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In single-slit diffraction, the condition <i>a</i> sin <i>θ</i> = <i>λ</i> gives:',
        opts: [
          {
            label: 'the first bright fringe',
            nudge: '<b>(A)</b> is the killer trap: students import the YDSE rule (<i>d</i> sin <i>θ</i> = <i>mλ</i> = bright) and assume the same here. It is reversed.',
          },
          { label: 'the first dark fringe', nudge: null },
          {
            label: 'the central maximum',
            nudge: '<b>(C)</b> is wrong because the central maximum sits at <i>θ</i> = 0 (<i>m</i> = 0), which is excluded from the minima formula.',
          },
          { label: 'the second dark fringe', nudge: '<b>(D)</b> would need <i>a</i> sin <i>θ</i> = 2<i>λ</i>.' },
        ],
        correct: 1,
        solution: 'In single-slit diffraction <i>a</i> sin <i>θ</i> = <i>mλ</i> locates the minima; <i>m</i> = 1 is the first dark fringe.',
      },
      {
        t: 'mcq',
        q: 'The type of diffraction in which both the incident and the diffracted wavefronts are plane is called:',
        opts: [
          {
            label: 'Fresnel diffraction',
            nudge: '<b>(A)</b> Fresnel diffraction has curved wavefronts (near-field) — the opposite condition.',
          },
          { label: 'Fraunhofer diffraction', nudge: null },
          {
            label: 'Huygens diffraction',
            nudge: '<b>(C)</b> is not a real category; Huygens gave the construction, not a diffraction class.',
          },
          { label: 'Bragg diffraction', nudge: '<b>(D)</b> Bragg diffraction refers specifically to X-rays off crystal planes.' },
        ],
        correct: 1,
        solution: 'Fraunhofer diffraction = plane (parallel) wavefronts, source and screen effectively at infinity.',
      },
      {
        t: 'mcq',
        q: 'When the width of a single slit is increased, the central diffraction maximum:',
        opts: [
          { label: 'becomes wider and brighter', nudge: '<b>(A)</b> reverses the width dependence.' },
          { label: 'becomes narrower and brighter', nudge: null },
          {
            label: 'becomes wider and dimmer',
            nudge: '<b>(C)</b> gets width right but brightness wrong — more energy passes through a wider slit.',
          },
          { label: 'is unchanged', nudge: '<b>(D)</b> ignores the inverse dependence on <i>a</i>.' },
        ],
        correct: 1,
        solution: 'Width <i>w</i> = 2<i>λD</i>/<i>a</i> ∝ 1/<i>a</i>, so increasing <i>a</i> narrows the central maximum; more light gets through and is concentrated into a smaller region, so it is also brighter.',
      },
      {
        t: 'mcq',
        q: 'The resolving power of a telescope is increased by:',
        opts: [
          {
            label: 'increasing the focal length of the objective',
            nudge: '<b>(A)</b> increases magnification, not resolution — a common conflation of the two.',
          },
          { label: 'increasing the aperture of the objective', nudge: null },
          { label: 'decreasing the aperture of the objective', nudge: '<b>(C)</b> is exactly backwards.' },
          { label: 'increasing the eyepiece focal length', nudge: '<b>(D)</b> affects magnification only.' },
        ],
        correct: 1,
        solution: 'Resolving power = 1/<i>θ</i><sub>min</sub> = <i>D</i><sub>ap</sub>/(1.22<i>λ</i>), so a larger aperture means finer resolution.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>The signature trap: minima vs maxima.</b> <i>a</i> sin <i>θ</i> = <i>mλ</i> is the <b>dark</b> (minimum) condition in single-slit diffraction — the mirror image of YDSE’s bright condition. Whenever you write this formula, say “minimum” out loud.',
          '<b>Confusing <i>a</i> (slit width) with <i>d</i> (slit separation).</b> Single-slit diffraction uses the width <i>a</i>; double-slit interference uses the separation <i>d</i>. In a combined problem (missing orders) you need both, and swapping them gives nonsense.',
          '<b>Forgetting the central maximum is twice as wide.</b> Higher-order maxima are spaced by <i>λ</i>/<i>a</i> in sin <i>θ</i>, but the central one spans 2<i>λ</i>/<i>a</i>. Many students compute the wrong central width by a factor of 2.',
          '<b>Confusing resolution with magnification.</b> A bigger aperture improves resolution; a longer objective focal length improves magnification. They are independent.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the <i>λ</i>/<i>a</i> reflex.</b> Almost every diffraction estimate reduces to the single quantity <i>λ</i>/<i>a</i> (the angular half-width). First minimum at <i>λ</i>/<i>a</i>, central width 2<i>λ</i>/<i>a</i>, linear central width 2<i>λD</i>/<i>a</i>. Compute <i>λ</i>/<i>a</i> once and the rest are one multiplication away. And a quick sanity check: if <i>λ</i>/<i>a</i> comes out larger than about 0.1, you are well into strong-diffraction territory; if it is microscopic, ray optics is fine.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Diffraction = bending/spreading of waves at apertures/edges; visible when aperture ∼ <i>λ</i>.', note: '' },
          { f: 'Mechanism', note: 'interference of one wavefront with itself (every slit point = Huygens source).' },
          { f: 'Minima (DARK)', note: '<i>a</i> sin <i>θ</i> = <i>mλ</i>, <i>m</i> = ±1, ±2, … — opposite of YDSE!' },
          {
            f: 'Central maximum',
            note: 'angular width 2<i>λ</i>/<i>a</i>; linear width 2<i>λD</i>/<i>a</i> — <b>twice</b> as wide as others, and brightest.',
          },
          { f: 'Fraunhofer = plane wavefronts (far field); Fresnel = curved wavefronts (near field).', note: '' },
          { f: 'Fresnel distance', note: '<i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i> (ray optics for ≪ <i>z</i><sub>F</sub>).' },
          { f: 'Limit of resolution (Rayleigh)', note: '<i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i><sub>ap</sub> — bigger aperture ⇒ finer detail.' },
          { f: 'Missing orders (with YDSE)', note: 'at <i>m</i><sub>I</sub>/<i>m</i><sub>D</sub> = <i>d</i>/<i>a</i>.' },
        ],
        aids: ['Mnemonic: “<i>d</i> for double (bright), <i>a</i> for aperture (dark)” — same formula → <i>mλ</i>, opposite result.'],
      },
    ],
  },

  // ───────────────────────── Topic 06 · pp. 690–700 ─────────────────────────
  {
    n: '06',
    title: 'Polarisation of Light',
    kalam: 'Here is the deep idea that makes polarisation matter far beyond a party trick: only transverse waves can be polarised.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards ask Malus’s law, Brewster’s law, and “why is polarisation evidence for the transverse nature of light” (2–3 marks). JEE Main asks 1 numerical most years (two/three polaroids, or Brewster angle). NEET favours the conceptual MCQ — transverse-only polarisation, or the <i>I</i><sub>0</sub>/2 rule. JEE Advanced layers multiple polaroids with optimisation.',
      },
      {
        t: 'p',
        html: '<b>Notation note:</b> <i>n</i> remains the <b>refractive index</b> throughout the chapter. This is precisely why Brewster’s law tan <i>i</i><sub>B</sub> = <i>n</i> reads cleanly here — had we let <i>n</i> mean fringe order back in YDSE, this formula would have collided.',
      },
      {
        t: 'p',
        html: 'Tie one end of a rope to a wall and shake the free end. You can shake it up-and-down, side-to-side, or in any direction in the plane perpendicular to the rope — and each produces a wave. Now thread the rope through the vertical slats of a fence. Only your up-and-down shakes get through; the side-to-side ones are blocked by the slats. The fence has <b>filtered</b> the vibrations, letting through only those aligned with its gap. That fence is a perfect mental model of a <b>polaroid</b>, and the whole topic of polarisation is about which direction a transverse wave wiggles in.',
      },
      {
        t: 'p',
        html: 'Here is the deep idea that makes polarisation matter far beyond a party trick: <b>only transverse waves can be polarised.</b> Light is a transverse electromagnetic wave — its electric field oscillates perpendicular to the direction of travel — so it has a “wiggle direction” that can be filtered. Sound, by contrast, is a longitudinal wave: its oscillations are along the direction of travel, so there is no sideways direction to filter, and <b>sound cannot be polarised.</b> This is not a minor footnote — it is the single most direct piece of evidence that light is transverse. (Recall from the waves chapter that longitudinal and transverse waves differ exactly in this respect; polarisation is the experiment that sorts light into the transverse camp.)',
      },
      {
        t: 'p',
        html: 'Ordinary light from the Sun or a bulb is <b>unpolarised</b>: it is a chaotic mixture of waves wiggling in every possible transverse direction, changing randomly billions of times a second. A <b>polaroid</b> (or “polariser”) has a built-in molecular “grating” that transmits only the component of the electric field along its <b>pass axis</b> and absorbs the rest. Pass unpolarised light through one polaroid and you get <b>plane-polarised</b> light — wiggling in just one direction — at exactly <b>half</b> the original intensity (because, averaged over all the random directions, half the energy lines up with the pass axis and half does not).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> take two polaroids and look through both at a bright window. Rotate one of them. When their pass axes are parallel, light sails through. As you rotate toward 90°, the view darkens, and at exactly 90° — “crossed” polaroids — it goes <b>completely black</b>: the first polaroid has already filtered the light to one direction, and the second, perpendicular to it, blocks that direction entirely. This is the two-fence picture: a vertical fence followed by a horizontal one passes nothing. The smooth darkening in between is described quantitatively by <b>Malus’s law</b>.',
      },
      { t: 'fig', id: 'p12-10-fig-10.10' },
      {
        t: 'p',
        html: 'A second route to polarised light needs no polaroid at all: <b>reflection.</b> When unpolarised light reflects off a non-metallic surface (water, glass, a wet road), the reflected beam is partially polarised — and at one special angle of incidence, the <b>Brewster angle</b>, it becomes completely plane-polarised. This is why <b>polaroid sunglasses cut glare</b>: glare off horizontal surfaces is horizontally polarised, and the sunglasses’ vertical pass axis blocks it.',
      },
      {
        t: 'p',
        html: 'In fact there are three everyday ways to manufacture polarised light, and exams expect you to know them. The first is <b>selective absorption</b> (dichroism) — the mechanism inside a polaroid sheet, whose long aligned molecules absorb the field component along their length and transmit the perpendicular one. The second is <b>reflection</b> at the Brewster angle, just described. The third is <b>scattering</b>, and it is happening above your head right now: when sunlight scatters off air molecules, the light scattered at 90° to the Sun is strongly polarised. That is why a clear blue sky, viewed through a rotating polaroid, brightens and dims — and it is how bees navigate by the polarisation pattern of the sky even when the Sun is hidden. (There is a fourth, <b>double refraction</b> in crystals like calcite, which splits a beam into two perpendicularly polarised rays — the basis of the older Nicol prism.) The common thread: each method selects one transverse direction out of the unpolarised jumble.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>Only transverse waves polarise.</b> Sound (longitudinal) cannot — a favourite one-mark question.<br>• <b>The <i>I</i><sub>0</sub>/2 rule applies only to unpolarised light entering the first polaroid.</b> Once the light is already polarised, you use Malus’s law (no extra factor of ½).<br>• <b>Malus’s law assumes ideal polaroids</b> (perfect transmission along the axis, perfect absorption across it). Real polaroids transmit slightly less.<br>• <b>Brewster’s angle depends on wavelength</b> (because <i>n</i> does), so “complete” polarisation by reflection is strictly true only for one colour at a time.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Unpolarised light through one polaroid (intensity <i>I</i><sub>0</sub> in → out)',
        main: '<i>I</i> = <i>I</i><sub>0</sub>/2',
        legend: [],
        note: 'The output is plane-polarised along the pass axis.',
      },
      {
        t: 'formula',
        kicker: 'Malus’s law (already-polarised light through a polaroid whose axis makes angle <i>θ</i> with the polarisation direction)',
        main: '<i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i>',
        legend: [
          '<i>I</i><sub>0</sub> = intensity of the incident polarised light',
          '<i>θ</i> = angle between the light’s polarisation and the polaroid’s pass axis',
        ],
        note: 'Intensity units: W m<sup>−2</sup>; dimensional formula [M T<sup>−3</sup>].',
      },
      {
        t: 'p',
        html: '<b>Crossed polaroids:</b> <i>θ</i> = 90° ⇒ <i>I</i> = 0. <b>Parallel:</b> <i>θ</i> = 0° ⇒ <i>I</i> = <i>I</i><sub>0</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Brewster’s law (polarising angle of incidence <i>i</i><sub>B</sub> for a medium of refractive index <i>n</i>)',
        main: 'tan <i>i</i><sub>B</sub> = <i>n</i>',
        legend: ['<i>i</i><sub>B</sub> = Brewster angle, for light incident from air (in general tan <i>i</i><sub>B</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>)'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'At the Brewster angle the reflected and refracted rays are mutually perpendicular',
        main: '<i>i</i><sub>B</sub> + <i>r</i> = 90°',
        legend: [],
        note: 'and the reflected light is completely plane-polarised (perpendicular to the plane of incidence). <i>n</i> is dimensionless, [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Degree of polarisation (for partially polarised light)',
        main: '<i>P</i> = (<i>I</i><sub>max</sub> − <i>I</i><sub>min</sub>)/(<i>I</i><sub>max</sub> + <i>I</i><sub>min</sub>)',
        legend: [],
        note: '<i>P</i> = 0 unpolarised, <i>P</i> = 1 fully polarised.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      { t: 'p', html: '<b>Derivation 3.1 — Malus’s Law</b>' },
      { t: 'fig', id: 'p12-10-fig-10.11' },
      {
        t: 'p',
        html: '<b>Setup.</b> Plane-polarised light of amplitude <i>E</i><sub>0</sub> (so incident intensity <i>I</i><sub>0</sub> ∝ <i>E</i><sub>0</sub><sup>2</sup>) is incident on a polaroid (the analyser) whose pass axis makes angle <i>θ</i> with the direction of the incident polarisation.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — resolve the amplitude.</b> Only the component of the electric field along the pass axis is transmitted. Resolving <i>E</i><sub>0</sub> into components parallel and perpendicular to the pass axis:<br><i>E</i><sub>∥</sub> = <i>E</i><sub>0</sub> cos <i>θ</i>, <i>E</i><sub>⊥</sub> = <i>E</i><sub>0</sub> sin <i>θ</i><br><b>Physical reason:</b> the polaroid passes the parallel component fully and absorbs the perpendicular one entirely.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — transmitted amplitude.</b> The emerging amplitude is just the parallel component:<br><i>E</i> = <i>E</i><sub>0</sub> cos <i>θ</i>',
      },
      {
        t: 'p',
        html: '<b>Step 3 — convert amplitude to intensity.</b> Since intensity ∝ amplitude<sup>2</sup>:<br><i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i>',
      },
      {
        t: 'p',
        html: '<i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i> (Malus’s law)<br>Check the limits: <i>θ</i> = 0 gives <i>I</i> = <i>I</i><sub>0</sub> (axes aligned, full transmission); <i>θ</i> = 90° gives <i>I</i> = 0 (crossed, total block). For unpolarised input, averaging cos<sup>2</sup> <i>θ</i> over all random <i>θ</i> gives ⟨cos<sup>2</sup> <i>θ</i>⟩ = ½, which is exactly the <i>I</i><sub>0</sub>/2 rule for the first polaroid.',
      },
      { t: 'p', html: '<b>Derivation 3.2 — Brewster’s Law</b>' },
      { t: 'fig', id: 'p12-10-fig-10.12' },
      {
        t: 'p',
        html: '<b>Setup.</b> Unpolarised light strikes a medium of refractive index <i>n</i> at the angle of incidence <i>i</i><sub>B</sub> for which the reflected beam is completely plane-polarised. Experiment (Brewster, 1815) shows that at this angle the <b>reflected ray is perpendicular to the refracted ray</b>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — state the geometric condition.</b> At the polarising angle:<br><i>i</i><sub>B</sub> + <i>r</i> = 90° ⇒ <i>r</i> = 90° − <i>i</i><sub>B</sub><br><b>Physical reason:</b> when the reflected and refracted rays are perpendicular, the dipoles oscillating in the medium cannot radiate along the reflected direction for one polarisation component, leaving the reflected light fully polarised.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — apply Snell’s law,</b> with the first medium air (<i>n</i><sub>1</sub> = 1):<br><i>n</i> = sin <i>i</i><sub>B</sub>/sin <i>r</i> = sin <i>i</i><sub>B</sub>/sin(90° − <i>i</i><sub>B</sub>) = sin <i>i</i><sub>B</sub>/cos <i>i</i><sub>B</sub>',
      },
      {
        t: 'p',
        html: '<b>Step 3 — simplify.</b><br><i>n</i> = tan <i>i</i><sub>B</sub> (Brewster’s law)<br>For glass (<i>n</i> ≈ 1.5), <i>i</i><sub>B</sub> = tan<sup>−1</sup>(1.5) ≈ 56.3°. Because <i>n</i> varies slightly with wavelength, so does <i>i</i><sub>B</sub> — which is why polarisation by reflection is perfectly complete only for one colour at a time.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Unpolarised light of intensity <i>I</i><sub>0</sub> passes through two polaroids whose pass axes are at 30° to each other. Find the intensity of the emerging light.',
        steps: [
          '<b>Step 1 — first polaroid.</b> Unpolarised in, so output is halved:<br><i>I</i><sub>1</sub> = <i>I</i><sub>0</sub>/2',
          '<b>Step 2 — second polaroid (Malus’s law).</b> The light reaching it is now polarised; apply cos<sup>2</sup> <i>θ</i> with <i>θ</i> = 30°:<br><i>I</i><sub>2</sub> = <i>I</i><sub>1</sub> cos<sup>2</sup> 30° = (<i>I</i><sub>0</sub>/2) × (√3/2)<sup>2</sup> = (<i>I</i><sub>0</sub>/2) × (3/4)',
        ],
        ans: '<i>I</i> = 3<i>I</i><sub>0</sub>/8.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Unpolarised light of intensity <i>I</i><sub>0</sub> falls on a single polaroid. The transmitted intensity is:<br>(A) <i>I</i><sub>0</sub> (B) <i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i> (C) <i>I</i><sub>0</sub>/2 (D) 0',
        steps: [
          '<b>The fast reasoning:</b> For unpolarised light through one polaroid, the output is always <i>I</i><sub>0</sub>/2, regardless of the polaroid’s orientation (there is no defined <i>θ</i> — the input has no single polarisation direction).',
          '<b>Trap to avoid:</b> Option (B) is the classic mistake — applying Malus’s law to unpolarised light. Malus’s law needs an incident polarisation direction to measure <i>θ</i> from; unpolarised light has none. Reach for cos<sup>2</sup> <i>θ</i> only after the first polaroid has done its job.',
        ],
        ans: '(C) <i>I</i><sub>0</sub>/2.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Unpolarised light of intensity <i>I</i><sub>0</sub> passes through three polaroids. The first and third are crossed (axes at 90°). The middle one has its axis at 30° to the first. Find the intensity emerging from the third polaroid.',
        steps: [
          '<b>Step 1 — first polaroid:</b> <i>I</i><sub>1</sub> = <i>I</i><sub>0</sub>/2.',
          '<b>Step 2 — second polaroid</b> (Malus, <i>θ</i> = 30° from the first):<br><i>I</i><sub>2</sub> = <i>I</i><sub>1</sub> cos<sup>2</sup> 30° = (<i>I</i><sub>0</sub>/2) × (3/4) = 3<i>I</i><sub>0</sub>/8',
          '<b>Step 3 — third polaroid.</b> Its axis is at 90° to the first, hence at 90° − 30° = 60° to the second. Apply Malus again:<br><i>I</i><sub>3</sub> = <i>I</i><sub>2</sub> cos<sup>2</sup> 60° = (3<i>I</i><sub>0</sub>/8) × (1/4)',
          '<b>The striking point:</b> with only the first and third (crossed) polaroids the output is zero. Inserting a polaroid between two crossed ones lets light through again — a genuinely non-intuitive result that makes this a JEE Main favourite.',
        ],
        ans: '<i>I</i> = 3<i>I</i><sub>0</sub>/32.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two polaroids are crossed (axes at 90°). A third polaroid is inserted between them with its pass axis at angle <i>φ</i> to the first. (a) Find the intensity transmitted by the system as a function of <i>φ</i> (input unpolarised, intensity <i>I</i><sub>0</sub>). (b) For what <i>φ</i> is the transmitted intensity maximum, and what is that maximum?',
        steps: [
          '<b>Step 1 — build the expression.</b> After the first polaroid: <i>I</i><sub>0</sub>/2. The middle polaroid is at <i>φ</i> to the first; the last is at 90° to the first, i.e. at (90° − <i>φ</i>) to the middle one. Applying Malus twice:<br><i>I</i>(<i>φ</i>) = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup> <i>φ</i> cos<sup>2</sup>(90° − <i>φ</i>) = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup> <i>φ</i> sin<sup>2</sup> <i>φ</i>',
          '<b>Step 2 — simplify with a double-angle identity.</b> Using cos <i>φ</i> sin <i>φ</i> = ½ sin 2<i>φ</i>:<br><i>I</i>(<i>φ</i>) = (<i>I</i><sub>0</sub>/2) · (1/4) sin<sup>2</sup> 2<i>φ</i> = (<i>I</i><sub>0</sub>/8) sin<sup>2</sup> 2<i>φ</i>',
          '<b>Step 3 — maximise.</b> sin<sup>2</sup> 2<i>φ</i> is maximum (equal to 1) when 2<i>φ</i> = 90°.',
          '<b>Interpretation:</b> the middle polaroid should bisect the angle between the crossed pair. Each Malus factor is then cos<sup>2</sup> 45° = ½, giving (<i>I</i><sub>0</sub>/2) · (1/2) · (1/2) = <i>I</i><sub>0</sub>/8. This optimisation — turning a “no light” system into one passing one-eighth of the input — is the elegant sting of the problem.',
        ],
        ans: '(a) <i>I</i>(<i>φ</i>) = (<i>I</i><sub>0</sub>/8) sin<sup>2</sup> 2<i>φ</i>; (b) maximum <i>I</i><sub>0</sub>/8 at <i>φ</i> = 45°.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is the angle of incidence at which light reflected off a glass surface (<i>n</i> = 1.5) is completely plane-polarised?',
            a: '<i>i</i><sub>B</sub> = tan<sup>−1</sup>(1.5) ≈ 56.3°.',
          },
          {
            q: '[NEET] Two polaroids are oriented with their pass axes parallel. By what angle must one be rotated so that the transmitted intensity falls to one-fourth of its parallel value?',
            a: '<i>I</i>/<i>I</i><sub>0</sub> = cos<sup>2</sup> <i>θ</i> = 1/4 ⇒ cos <i>θ</i> = 1/2 ⇒ <i>θ</i> = 60°.',
          },
          {
            q: '[JEE Main] Unpolarised light of intensity 32 W m<sup>−2</sup> passes through two polaroids with axes at 45°. Find the final intensity.',
            a: '<i>I</i> = (32/2) cos<sup>2</sup> 45° = 16 × ½ = 8 W m<sup>−2</sup>.',
          },
          {
            q: '[JEE Main] At the Brewster angle for a certain medium, the angle of refraction is 32°. Find the refractive index of the medium.',
            a: '<i>i</i><sub>B</sub> = 90° − 32° = 58°; <i>n</i> = tan 58° ≈ 1.60.',
          },
          {
            q: '[JEE Advanced] Three polaroids are stacked. The second is at 30° to the first, and the third is at 30° to the second (i.e. 60° to the first). If unpolarised light of intensity <i>I</i><sub>0</sub> is incident, find the emerging intensity.',
            a: '<i>I</i> = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup> 30° cos<sup>2</sup> 30° = (<i>I</i><sub>0</sub>/2) × (3/4) × (3/4) = 9<i>I</i><sub>0</sub>/32.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Polarisation of light proves that light waves are:',
        opts: [
          {
            label: 'longitudinal',
            nudge: '<b>(A)</b> is the opposite of the truth and would predict (wrongly) that light cannot be polarised — which is how sound behaves.',
          },
          { label: 'transverse', nudge: null },
          {
            label: 'both longitudinal and transverse',
            nudge: '<b>(C)</b> confuses light with a mixed-mode wave; light is purely transverse.',
          },
          { label: 'neither', nudge: '<b>(D)</b> ignores the experimental fact of polarisation altogether.' },
        ],
        correct: 1,
        solution: 'Only transverse waves have a polarisation direction to filter; the very fact that light can be polarised shows it is transverse.',
      },
      {
        t: 'mcq',
        q: 'When unpolarised light of intensity <i>I</i><sub>0</sub> passes through a single ideal polaroid, the transmitted intensity is:',
        opts: [
          { label: '<i>I</i><sub>0</sub>', nudge: '<b>(A)</b> ignores absorption of the perpendicular components.' },
          {
            label: '<i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i>',
            nudge: '<b>(B)</b> wrongly applies Malus’s law, which requires a defined incident polarisation.',
          },
          { label: '<i>I</i><sub>0</sub>/2', nudge: null },
          { label: '<i>I</i><sub>0</sub>/4', nudge: '<b>(D)</b> double-counts a halving.' },
        ],
        correct: 2,
        solution: 'Averaging over all incident polarisation directions gives exactly half.',
      },
      {
        t: 'mcq',
        q: 'Light reflected from a surface is completely plane-polarised when the angle between the reflected and refracted rays is:',
        opts: [
          { label: '0°', nudge: '<b>(A)</b> would mean no separation of rays — no polarisation effect.' },
          {
            label: '45°',
            nudge: '<b>(B)</b> and <b>(D)</b> are arbitrary values with no physical basis here; <b>(B)</b> often tempts students who confuse this with a Malus-law angle.',
          },
          { label: '90°', nudge: null },
          {
            label: '180°',
            nudge: '<b>(B)</b> and <b>(D)</b> are arbitrary values with no physical basis here.',
          },
        ],
        correct: 2,
        solution: 'At the Brewster angle the reflected and refracted rays are mutually perpendicular (<i>i</i><sub>B</sub> + <i>r</i> = 90°).',
      },
      {
        t: 'mcq',
        q: 'The Brewster angle for a medium of refractive index √3 is:',
        opts: [
          { label: '30°', nudge: '<b>(A)</b> corresponds to tan <i>i</i><sub>B</sub> = 1/√3 — inverting the relation.' },
          { label: '45°', nudge: '<b>(B)</b> corresponds to <i>n</i> = 1 (no medium).' },
          { label: '60°', nudge: null },
          { label: '90°', nudge: '<b>(D)</b> 90° would need tan <i>i</i><sub>B</sub> → ∞ (grazing incidence) — no real medium.' },
        ],
        correct: 2,
        solution: 'tan <i>i</i><sub>B</sub> = <i>n</i> = √3 ⇒ <i>i</i><sub>B</sub> = 60°.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Skipping the <i>I</i><sub>0</sub>/2 at the first polaroid.</b> Unpolarised light entering the first polaroid is always halved. Forgetting this throws off every multi-polaroid numerical.',
          '<b>Applying Malus’s law to unpolarised light.</b> <i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i> needs a defined incident polarisation. Use it only for light that is already polarised — i.e. from the second polaroid onward.',
          '<b>Measuring Malus angles from the wrong reference.</b> In a stack, each <i>θ</i> is measured between consecutive polaroids, not from the first one. Track the running orientation carefully.',
          '<b>Forgetting Brewster’s angle is an angle of incidence.</b> tan <i>i</i><sub>B</sub> = <i>n</i> gives the incidence angle; the refraction angle is its complement (90° − <i>i</i><sub>B</sub>).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the “half then chain” routine.</b> Almost every polaroid problem is: write <i>I</i><sub>0</sub>/2 for the first polaroid, then multiply by cos<sup>2</sup>(Δ<i>θ</i>) for each subsequent polaroid, where Δ<i>θ</i> is the angle to the previous one. Sanity checks: crossed polaroids (90°) give zero; inserting one in between at any angle other than 0° or 90° to the first lets some light back through; and the most a two-polaroid stack can pass (from unpolarised input) is <i>I</i><sub>0</sub>/2.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Polarisation = direction of the electric-field oscillation.',
            note: 'Only <b>transverse</b> waves polarise ⇒ light is transverse; <b>sound cannot</b> be polarised.',
          },
          { f: 'Unpolarised → one polaroid', note: '<i>I</i> = <i>I</i><sub>0</sub>/2 (output plane-polarised).' },
          {
            f: 'Malus’s law (already-polarised)',
            note: '<i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup> <i>θ</i>. Crossed (90°) ⇒ 0; parallel ⇒ <i>I</i><sub>0</sub>.',
          },
          {
            f: 'Brewster’s law',
            note: 'tan <i>i</i><sub>B</sub> = <i>n</i>; at <i>i</i><sub>B</sub>, reflected ⊥ refracted (<i>i</i><sub>B</sub> + <i>r</i> = 90°); reflected light fully polarised.',
          },
          {
            f: 'Multi-polaroid routine',
            note: '<i>I</i><sub>0</sub>/2, then × cos<sup>2</sup>(Δ<i>θ</i>) per polaroid (angle to previous).',
          },
          {
            f: 'Applications',
            note: 'polaroid sunglasses (cut horizontally-polarised glare), 3D glasses, LCD screens, photography filters.',
          },
        ],
        aids: ['Mnemonic: “Half first, cosine-squared the rest.” And “transverse polarises, longitudinal can’t.”'],
      },
    ],
  },
];
