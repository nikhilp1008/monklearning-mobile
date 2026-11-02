import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Additional Topics A to E, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 701, set at
 * the head of Addendum A), then A Thin Films: The General Phase-Change Case
 * (pp. 701 to 704; its practice answers end at the top of p. 704), B The
 * Diffraction Grating (pp. 704 to 706), C Intensity Distribution in
 * Single-Slit Diffraction (pp. 707 to 709; its answers sit at the top of
 * p. 709), D Polarisation by Double Refraction (pp. 709 to 711; its practice
 * and answers are on p. 711) and E Resolving Power: Rayleigh Criterion in
 * Depth (pp. 711 to 713). Each addendum prints its own practice problems and
 * answers, which are its Practice part. These pages print no drawings: every
 * equation is typeset, and A's half-wave-loss table is a table.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 701–704 ─────────────────────────
  {
    n: 'A',
    title: 'Thin Films: The General Phase-Change Case',
    extra: true,
    kalam: 'When the phase-change count is the same on both surfaces, the bright/dark conditions swap relative to the chapter’s formulas.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This addendum covers six JEE patterns that Chapter 10 states but does not work out: the general case of thin-film interference with films in liquids or on supports (Topic 04 met the two-loss case only in the anti-reflection coating), Newton’s rings viewed in transmitted light, the diffraction-grating equation with intensity and resolving power, the exact intensity formula for single-slit diffraction and the positions of secondary maxima, birefringence in doubly-refracting crystals, and the Rayleigh criterion applied to microscopes and grating spectroscopes.',
      },
      {
        t: 'p',
        html: 'Chapter 10 derives the standard thin-film conditions for a film in air, where exactly one reflection carries a half-wave loss (air→film, rarer→denser) and the other does not (film→air, denser→rarer). (Topic 04’s anti-reflection coating was the one two-loss case.) JEE Main and Advanced regularly set films on glass supports of higher index, where <b>both</b> reflections suffer a half-wave loss. When the phase-change count is the same on both surfaces, the bright/dark conditions swap relative to the chapter’s formulas.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Step 1 — count the half-wave losses.</b> A half-wave (π rad) phase reversal occurs at a reflection <b>only when</b> the wave goes from rarer to denser medium. Check both the top-surface reflection and the bottom-surface reflection:',
      },
      {
        t: 'table',
        title: null,
        head: ['Situation', 'Top surface', 'Bottom surface', 'Net half-wave losses'],
        rows: [
          ['Film in air (chapter case)', 'rarer→denser: <b>yes</b>', 'denser→rarer: no', '1 (net)'],
          ['Film on glass (film index below the glass’s)', 'rarer→denser: <b>yes</b>', 'denser→even denser: <b>yes</b>', '2 (net: 2 × <i>λ</i>/2 = <i>λ</i>)'],
          ['Film immersed in liquid with lower index than film', 'rarer→denser: <b>yes</b>', 'denser→rarer: no', '1 (same as chapter)'],
          ['Film in liquid with higher index', 'denser→rarer: no', 'rarer→denser: <b>yes</b>', '1'],
        ],
      },
      {
        t: 'p',
        html: '<b>Step 2 — write the effective path difference.</b> For near-normal incidence (cos <i>r</i> ≈ 1):<br>Δ = 2<i>n</i><sub>f</sub><i>t</i> − <i>N</i><sub>HW</sub> · <i>λ</i>/2<br>where <i>N</i><sub>HW</sub> is the net number of half-wave losses.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — apply conditions.</b> Reflected bright: Δ = <i>mλ</i> (integer wavelengths); reflected dark: Δ = (<i>m</i> + 1/2)<i>λ</i> (half-integer wavelengths).',
      },
      {
        t: 'p',
        html: '<b>Step 4 — simplify.</b> If <i>N</i><sub>HW</sub> = 1: 2<i>nt</i> = (<i>m</i> + ½)<i>λ</i> (bright) — chapter’s case. If <i>N</i><sub>HW</sub> = 2: 2<i>nt</i> − <i>λ</i> = <i>mλ</i>, i.e. 2<i>nt</i> = (<i>m</i> + 1)<i>λ</i> for bright.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>n</i> dimensionless, <i>t</i> in m, <i>λ</i> in m. 2<i>nt</i> has units m (×dimensionless). The <i>λ</i> term also has units m. Difference is m. Setting equal to <i>mλ</i> (also m). Consistent.',
      },
      {
        t: 'p',
        html: '<b>Newton’s rings in transmitted light.</b> Two beams emerge after transmission through the air gap: one passes straight through, and the other is reflected twice inside the gap, first from the glass plate (air→glass, rarer→denser) and then from the lens surface (air→glass, rarer→denser). Both reflections carry a half-wave loss, so the net extra path is 2 × (<i>λ</i>/2) = <i>λ</i> (a phase change of 2π), equivalent to two half-wave losses. The centre (zero thickness) is therefore bright for transmitted rings, opposite to the reflected case.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Film on Glass',
        q: 'A soap film (<i>n</i> = 1.33) of thickness <i>t</i> = 300 nm is formed on a glass plate (<i>n</i> = 1.5). The film is illuminated by light of wavelength <i>λ</i> = 600 nm at near-normal incidence. Will the film appear bright or dark in reflected light?',
        steps: [
          '<b>Step 1 — count half-wave losses.</b> Top surface: air (<i>n</i> = 1) → film (<i>n</i> = 1.33): rarer→denser → <b>one half-wave loss</b>. Bottom surface: film (<i>n</i> = 1.33) → glass (<i>n</i> = 1.5): rarer→denser (1.33 → 1.5) → <b>one half-wave loss</b>. Net: <i>N</i><sub>HW</sub> = 2.',
          '<b>Step 2 — effective path difference.</b> Two half-wave losses add a total extra phase of 2 × π = 2π, which is the same as no extra phase at all (mod 2π). So the effective optical path difference is simply<br>Δ = 2<i>n</i><sub>f</sub><i>t</i> = 2 × 1.33 × 300 nm = 798 nm,<br>with the ordinary conditions <b>bright:</b> Δ = <i>mλ</i>, <b>dark:</b> Δ = (<i>m</i> + ½)<i>λ</i> (no half-wave correction needed, since the two losses cancel).',
          '<b>Step 3 — check against conditions.</b> Δ/<i>λ</i> = 798/600 = 1.33. The nearest bright condition is <i>m</i> = 1 (Δ = 600 nm, off by 198 nm); the nearest dark condition is <i>m</i> = 1 (Δ = 900 nm, off by only 102 nm). Neither is exact, but 798 nm sits closer to the dark condition — the film appears <b>closer to dark</b> (dim) than bright in reflected 600 nm light.',
          'The film is neither exactly bright nor dark. Reinforcement at 600 nm needs Δ = <i>λ</i>, i.e. <i>t</i> = 600/(2 × 1.33) = 226 nm; extinction needs Δ = 1.5<i>λ</i>, i.e. <i>t</i> = 338 nm. At <i>t</i> = 300 nm the path difference lies between these, nearer the dark condition.',
        ],
        ans: 'At 300 nm the film appears closer to dark (dim) than bright for 600 nm light, since Δ/<i>λ</i> = 1.33 lies between 1 (bright) and 1.5 (dark).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Newton’s Rings in Transmitted Light',
        q: 'In a Newton’s rings experiment viewed by <b>transmitted</b> light (<i>λ</i> = 589 nm), the air gap is formed between a plano-convex lens (<i>R</i> = 0.90 m) and a glass plate. (a) What is the nature of the central ring? (b) Find the radius of the 5th dark ring.',
        steps: [
          '<b>Step 1 — central ring in transmitted light.</b> For transmitted rings, the path difference between the two transmitted beams is Δ = 2<i>t</i> + <i>λ</i> (each of the two internal reflections contributes a half-wave loss, net <i>λ</i>). At the centre <i>t</i> = 0, so Δ = <i>λ</i>, a whole number of wavelengths, which is the condition for a <b>bright</b> central ring.',
          '<b>Step 2 — transmitted dark-ring condition.</b> Dark in transmission requires destructive interference, Δ = (<i>m</i> + 1/2)<i>λ</i>:<br>2<i>t</i> + <i>λ</i> = (<i>m</i> + 1/2)<i>λ</i> ⇒ 2<i>t</i> = (<i>m</i> − 1/2)<i>λ</i>',
          '<b>Step 3 — relate <i>t</i> to ring radius.</b><br><i>t</i> = <i>ρ</i><sup>2</sup>/(2<i>R</i>)',
          '<b>Step 4 — combine and solve for <i>ρ</i><sub>5</sub>.</b><br>2 · <i>ρ</i><sup>2</sup>/(2<i>R</i>) = (5 − ½)<i>λ</i> = (9/2)<i>λ</i><br><i>ρ</i><sub>5</sub><sup>2</sup> = (9/2)<i>λR</i><br><i>ρ</i><sub>5</sub> = √((9/2) × 589 × 10<sup>−9</sup> × 0.90)<br><i>ρ</i><sub>5</sub> = √(2.385 × 10<sup>−6</sup>) = 1.54 × 10<sup>−3</sup> m',
          '<b>Check.</b> In reflected light the 5th dark ring satisfies 2<i>t</i> = 5<i>λ</i>; in transmitted light it satisfies 2<i>t</i> = (5 − 1/2)<i>λ</i> = 9<i>λ</i>/2. The transmitted dark ring of order <i>m</i> coincides with the reflected bright ring of order <i>m</i> (complementary patterns).',
        ],
        ans: '(a) Central ring is bright. (b) <i>ρ</i><sub>5</sub> = 1.54 mm.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A thin oil film (<i>n</i> = 1.45) on a glass plate (<i>n</i> = 1.5) is illuminated by white light. The film appears bright for <i>λ</i> = 500 nm at normal incidence. Find the minimum non-zero thickness.',
            a: 'Both surfaces: rarer→denser (air→oil at top, oil→glass at bottom) → net 2 half-wave losses. Bright reflected: 2<i>nt</i> = (<i>m</i> + 1)<i>λ</i>. Minimum <i>m</i> = 0: <i>t</i> = <i>λ</i>/(2<i>n</i>) = 500/(2 × 1.45) = 172 nm.',
          },
          {
            q: '[JEE Main] In a Newton’s rings experiment in transmitted light with <i>λ</i> = 600 nm and <i>R</i> = 1.2 m, find the diameter of the 8th bright ring.',
            a: 'Transmitted bright: 2<i>t</i> = <i>mλ</i>. With <i>t</i> = <i>ρ</i><sup>2</sup>/(2<i>R</i>): <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>). For <i>m</i> = 8: <i>ρ</i> = √(8 × 600 × 10<sup>−9</sup> × 1.2) = √(5.76 × 10<sup>−6</sup>) = 2.4 mm. Diameter = 4.8 mm.',
          },
          {
            q: '[JEE Advanced] A film of water (<i>n</i> = 4/3) is sandwiched between two glass plates (<i>n</i> = 1.5). Light of <i>λ</i> = 480 nm is incident normally. Find the thickness for which reflected light shows the first bright fringe.',
            a: 'Light travels in glass: glass→water (no loss), water→glass (one loss) → net 1 loss. Bright: 2<i>nt</i> = (<i>m</i> + 1/2)<i>λ</i>. Minimum <i>m</i> = 0: <i>t</i> = <i>λ</i>/(4<i>n</i>) = 480/(4 × 4/3) = 90 nm.',
          },
          {
            q: '[JEE Advanced] In a Newton’s rings setup, the diameter of the 10th dark ring in reflected light is 5.0 mm. The same ring, viewed in transmitted light, has what diameter?',
            a: 'In reflected light the dark rings satisfy 2<i>t</i> = <i>mλ</i> (centre dark), so the 10th dark ring has 2<i>t</i> = 10<i>λ</i>. The same ring (same <i>t</i>, hence same radius) appears bright in transmitted light, so its diameter is still 5.0 mm. (If instead the 10th dark ring in transmitted light is meant: 2<i>t</i> = 9.5<i>λ</i>, so <i>D</i> = 5.0 × √(9.5/10) = 4.87 mm.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 704–706 ─────────────────────────
  {
    n: 'B',
    title: 'The Diffraction Grating',
    extra: true,
    kalam: 'A diffraction grating is a large number N of equally spaced, parallel slits (or rulings).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Chapter 10 covers the single-slit minima condition <i>a</i> sin <i>θ</i> = <i>mλ</i>. A diffraction grating is a large number <i>N</i> of equally spaced, parallel slits (or rulings). It produces <b>sharp principal maxima</b> at angles satisfying <i>d</i> sin <i>θ</i> = <i>mλ</i>, where <i>d</i> is the slit spacing. The key JEE additions are the <b>intensity distribution</b> of the grating pattern and the <b>resolving power</b> <i>R</i> = <i>λ</i>/Δ<i>λ</i> = <i>mN</i>.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Grating equation.</b> For a grating with <i>N</i> rulings illuminated by monochromatic light of wavelength <i>λ</i>:<br><i>d</i> sin <i>θ</i> = <i>mλ</i>, <i>m</i> = 0, ±1, ±2, …<br>where <i>d</i> = 1/<i>N</i><sub>0</sub> and <i>N</i><sub>0</sub> is the number of lines per unit length (usually given as lines/mm).',
      },
      {
        t: 'p',
        html: '<b>Intensity distribution.</b> Each slit (amplitude <i>a</i><sub>0</sub>, intensity <i>I</i><sub>0</sub>) contributes equally. The phase difference between adjacent slits at angle <i>θ</i> is:<br><i>φ</i> = 2π<i>d</i> sin <i>θ</i>/<i>λ</i><br>The resultant amplitude from <i>N</i> slits is:<br><i>A</i> = <i>a</i><sub>0</sub> sin(<i>Nφ</i>/2)/sin(<i>φ</i>/2)<br>Intensity:<br><i>I</i> = <i>I</i><sub>0</sub> sin<sup>2</sup>(<i>Nφ</i>/2)/sin<sup>2</sup>(<i>φ</i>/2) (for very narrow slits; otherwise multiply by the single-slit factor (sin <i>α</i>/<i>α</i>)<sup>2</sup>)',
      },
      {
        t: 'p',
        html: '<b>Principal maxima</b> occur when <i>φ</i> = 2π<i>m</i>, i.e. <i>d</i> sin <i>θ</i> = <i>mλ</i>. At these angles sin(<i>φ</i>/2) = 0, giving an indeterminate form; applying L’Hôpital’s rule or recognizing the geometric series sum gives <i>I</i><sub>max</sub> = <i>N</i><sup>2</sup><i>I</i><sub>0</sub>.',
      },
      {
        t: 'p',
        html: '<b>Minima</b> occur when sin(<i>Nφ</i>/2) = 0 but sin(<i>φ</i>/2) ≠ 0:<br><i>Nφ</i>/2 = <i>p</i>π, <i>p</i> = 1, 2, 3, … (with <i>p</i> not a multiple of <i>N</i>)<br>Between two adjacent principal maxima exist: (<i>N</i> − 1) minima, (<i>N</i> − 2) secondary maxima.',
      },
      {
        t: 'p',
        html: '<b>Resolving power.</b> The Rayleigh criterion for two wavelengths <i>λ</i> and <i>λ</i> + Δ<i>λ</i> to be just resolved in order <i>m</i>:<br><i>R</i> = <i>λ</i>/Δ<i>λ</i> = <i>mN</i>',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>d</i> in m, <i>λ</i> in m, sin <i>θ</i> dimensionless. <i>R</i> = <i>mN</i>: both <i>m</i> and <i>N</i> are pure numbers, so <i>R</i> is dimensionless. Correct.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Grating Spectroscope',
        q: 'A diffraction grating has 500 lines per mm. (a) What is the slit spacing <i>d</i>? (b) At what angle does the second-order maximum for <i>λ</i> = 600 nm occur? (c) What is the maximum order observable?',
        steps: [
          '<b>Given:</b> <i>N</i><sub>0</sub> = 500 lines/mm = 500 × 10<sup>3</sup> lines/m = 5 × 10<sup>5</sup> lines/m.',
          '(a) <i>d</i> = 1/<i>N</i><sub>0</sub> = 1/(5 × 10<sup>5</sup>) = 2 × 10<sup>−6</sup> m',
          '(b) Second order: <i>m</i> = 2.<br><i>d</i> sin <i>θ</i> = 2<i>λ</i> ⇒ sin <i>θ</i> = 2<i>λ</i>/<i>d</i> = (2 × 600 × 10<sup>−9</sup>)/(2 × 10<sup>−6</sup>) = 0.6<br><i>θ</i> = sin<sup>−1</sup>(0.6)',
          '(c) Maximum order: sin <i>θ</i> ≤ 1, so <i>m</i><sub>max</sub> ≤ <i>d</i>/<i>λ</i> = (2 × 10<sup>−6</sup>)/(600 × 10<sup>−9</sup>) = 3.33.',
        ],
        ans: '(a) <i>d</i> = 2 μm. (b) <i>θ</i> ≈ 36.9°. (c) <i>m</i><sub>max</sub> = 3.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Resolving Power',
        q: 'A diffraction grating 5 cm wide has 1000 lines per cm. It is used in the second order to resolve the sodium doublet (<i>λ</i><sub>1</sub> = 589.0 nm, <i>λ</i><sub>2</sub> = 589.6 nm). (a) Find the resolving power. (b) Can it resolve the doublet in second order? (c) What is the angular separation between the two wavelengths in second order?',
        steps: [
          '<b>Step 1 — count the total number of illuminated slits.</b> Width <i>L</i> = 5 cm = 0.05 m. Lines per cm: 1000 lines/cm = 10<sup>5</sup> lines/m.<br><i>N</i> = <i>N</i><sub>0</sub> × <i>L</i> = 10<sup>5</sup> × 0.05 = 5 × 10<sup>3</sup> lines',
          '<b>Step 2 — resolving power.</b><br><i>R</i> = <i>mN</i> = 2 × 5000 = 10 000<br>The minimum resolvable wavelength separation:<br>Δ<i>λ</i><sub>min</sub> = <i>λ</i>/<i>R</i> = 589.3/10 000 = 0.0589 nm ≈ 0.06 nm',
          '<b>Step 3 — check against sodium doublet.</b> Sodium doublet separation: 589.6 − 589.0 = 0.6 nm > 0.06 nm. The grating <b>can resolve</b> the doublet in second order.',
          '<b>Step 4 — angular separation.</b> For <i>λ</i><sub>1</sub> = 589.0 nm, <i>m</i> = 2:<br>sin <i>θ</i><sub>1</sub> = (2 × 589.0 × 10<sup>−9</sup>)/(1 × 10<sup>−5</sup>) = 0.1178<br><i>θ</i><sub>1</sub> = 6.765°<br>For <i>λ</i><sub>2</sub> = 589.6 nm:<br>sin <i>θ</i><sub>2</sub> = (2 × 589.6 × 10<sup>−9</sup>)/(1 × 10<sup>−5</sup>) = 0.11792<br><i>θ</i><sub>2</sub> = 6.772°<br>Δ<i>θ</i> ≈ 1.2 × 10<sup>−4</sup> rad ≈ 0.007° ≈ 0.4′ (arc-minutes)',
        ],
        ans: '(a) <i>R</i> = 10 000. (b) Yes — required Δ<i>λ</i> = 0.06 nm < 0.6 nm. (c) Δ<i>θ</i> ≈ 0.007°.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A grating has 600 lines/mm. Find the angular separation between the first-order maxima of 500 nm and 501 nm light.',
            a: '<i>d</i> = 1/600 mm = 1.67 × 10<sup>−6</sup> m. For <i>λ</i> = 500 nm, <i>m</i> = 1: sin <i>θ</i><sub>1</sub> = 0.300, <i>θ</i><sub>1</sub> = 17.46°. For <i>λ</i> = 501 nm: sin <i>θ</i><sub>2</sub> = 0.3006, <i>θ</i><sub>2</sub> = 17.49°. Δ<i>θ</i> = Δ<i>λ</i>/(<i>d</i> cos <i>θ</i>) ≈ 6.3 × 10<sup>−4</sup> rad ≈ 0.036°.',
          },
          {
            q: '[JEE Main] How many lines are needed in a grating to resolve the D-lines of sodium (<i>λ</i> = 589 nm, separation 0.6 nm) in the first order?',
            a: '<i>R</i> = <i>λ</i>/Δ<i>λ</i> = 589/0.6 = 982. For <i>m</i> = 1: <i>N</i> = 982. Need at least 982 illuminated lines.',
          },
          {
            q: '[JEE Advanced] A parallel beam of white light (400–700 nm) is incident normally on a grating with 400 lines/mm. How many orders are visible?',
            a: 'Three complete orders on each side; <i>d</i> = 2.5 μm: violet (400 nm) reaches order 6, red (700 nm) only order 3 (<i>d</i>/<i>λ</i> = 3.57); full spectrum up to order 3, overlapping from order 2.',
          },
          {
            q: '[JEE Advanced] A grating has 200 lines/mm and is 6 cm wide. Find (a) the total number of lines, (b) the resolving power in the third order, and (c) the minimum wavelength difference it can resolve at <i>λ</i> = 500 nm.',
            a: '(a) <i>N</i> = 200 × 10<sup>3</sup> × 0.06 = 12 000. (b) <i>R</i> = 3 × 12 000 = 36 000. (c) Δ<i>λ</i> = <i>λ</i>/<i>R</i> = 500/36 000 = 0.014 nm.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 707–709 ─────────────────────────
  {
    n: 'C',
    title: 'Intensity Distribution in Single-Slit Diffraction',
    extra: true,
    kalam: 'The first secondary maximum is about 4.7% of the central maximum.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Chapter 10 derives the minima positions <i>a</i> sin <i>θ</i> = <i>mλ</i> but does not give the <b>intensity formula</b> or the exact positions of the <b>secondary maxima</b> (Topic 05 quotes only <i>a</i> sin <i>θ</i> ≈ (<i>m</i> + ½)<i>λ</i>). Both appear in JEE Advanced.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Intensity formula.</b> Divide the slit into <i>N</i> infinitesimal elements (let <i>N</i> → ∞). Each element has amplitude d<i>a</i> and phase proportional to its position. Summing by integration gives:<br><i>I</i>(<i>θ</i>) = <i>I</i><sub>0</sub>(sin <i>α</i>/<i>α</i>)<sup>2</sup><br>where:<br><i>α</i> = π<i>a</i> sin <i>θ</i>/<i>λ</i><br><i>I</i><sub>0</sub> is the intensity at <i>θ</i> = 0 (central maximum).',
      },
      {
        t: 'p',
        html: '<b>Derivation sketch.</b> Element at position <i>x</i> from the slit centre contributes amplitude d<i>a</i> ∝ d<i>x</i>. Phase relative to centre: <i>δ</i> = 2π<i>x</i> sin <i>θ</i>/<i>λ</i>. Summing d<i>a</i> · <i>e</i><sup><i>iδ</i></sup> from −<i>a</i>/2 to <i>a</i>/2 gives a phasor of length:<br><i>A</i> = ∫<sub>−<i>a</i>/2</sub><sup><i>a</i>/2</sup> <i>e</i><sup><i>iδ</i></sup> d<i>x</i> = <i>a</i> · (sin <i>α</i>/<i>α</i>) · <i>e</i><sup><i>i</i>·0</sup><br>Since <i>I</i> ∝ <i>A</i><sup>2</sup>:<br><i>I</i>(<i>θ</i>) = <i>I</i><sub>0</sub>(sin <i>α</i>/<i>α</i>)<sup>2</sup>',
      },
      {
        t: 'p',
        html: '<b>Secondary maxima.</b> Between minima at <i>α</i> = <i>m</i>π and (<i>m</i> + 1)π, the intensity has a maximum where d<i>I</i>/d<i>α</i> = 0:<br>d/d<i>α</i>[(sin <i>α</i>/<i>α</i>)<sup>2</sup>] = 0 ⇒ tan <i>α</i> = <i>α</i><br>This transcendental equation has solutions between each consecutive pair of <i>α</i> = <i>m</i>π (minima). The first few solutions are approximately <i>α</i> = 4.493, 7.725, 10.904, 14.066, … The first secondary maximum (between <i>m</i> = 1 and <i>m</i> = 2 minima) has <i>α</i> ≈ 4.493 rad, giving intensity:<br><i>I</i><sub>sec,1</sub> = <i>I</i><sub>0</sub>(sin 4.493/4.493)<sup>2</sup> = <i>I</i><sub>0</sub>(−0.976/4.493)<sup>2</sup> ≈ <i>I</i><sub>0</sub>/21.2 ≈ 0.047 <i>I</i><sub>0</sub><br>The first secondary maximum is about <b>4.7%</b> of the central maximum.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>α</i> = (π<i>a</i> sin <i>θ</i>)/<i>λ</i>: <i>a</i> in m, sin <i>θ</i> dimensionless, <i>λ</i> in m. π dimensionless. <i>α</i> is dimensionless. sin <i>α</i>/<i>α</i> dimensionless. Intensity ratio dimensionless. Consistent.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Intensity at a Specific Point',
        q: 'Light of <i>λ</i> = 600 nm falls on a slit of width <i>a</i> = 0.3 mm. Find the intensity at a point where sin <i>θ</i> = 0.01 as a fraction of the central maximum intensity.',
        steps: [
          '<b>Step 1 — compute <i>α</i>.</b><br><i>α</i> = π<i>a</i> sin <i>θ</i>/<i>λ</i> = (π × 0.3 × 10<sup>−3</sup> × 0.01)/(600 × 10<sup>−9</sup>) = (π × 3 × 10<sup>−6</sup>)/(6 × 10<sup>−7</sup>) = 5π',
          '<b>Step 2 — evaluate the intensity.</b> Since <i>α</i> = 5π = (5)π, this is exactly at the 5th minimum (where <i>m</i> = 5, <i>α</i> = <i>m</i>π = 5π).<br>(sin <i>α</i>/<i>α</i>)<sup>2</sup> = (sin 5π/(5π))<sup>2</sup> = 0',
        ],
        ans: 'Intensity is zero (this point is a minimum).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Position of First Secondary Maximum',
        q: 'Find (a) the angular position and (b) the intensity of the first secondary maximum in single-slit diffraction for <i>λ</i> = 500 nm and <i>a</i> = 0.5 mm.',
        steps: [
          '<b>(a) Angular position.</b> The first secondary maximum lies between <i>α</i> = π (first minimum, <i>m</i> = 1) and <i>α</i> = 2π (second minimum, <i>m</i> = 2). Solve tan <i>α</i> = <i>α</i>.<br>Using the known root <i>α</i><sub>1</sub> ≈ 4.493 rad:<br>sin <i>θ</i> = <i>αλ</i>/(π<i>a</i>) = (4.493 × 500 × 10<sup>−9</sup>)/(π × 0.5 × 10<sup>−3</sup>) = (2246.5 × 10<sup>−9</sup>)/(1.571 × 10<sup>−3</sup>) = 1.43 × 10<sup>−3</sup><br><i>θ</i> ≈ 0.082° ≈ 4.9′ (arc-minutes)',
          '<b>(b) Intensity.</b><br><i>I</i> = <i>I</i><sub>0</sub>(sin 4.493/4.493)<sup>2</sup> = <i>I</i><sub>0</sub>(−0.976/4.493)<sup>2</sup> ≈ 0.047 <i>I</i><sub>0</sub><br>So the first secondary maximum carries about <b>4.7%</b> of the central intensity.',
        ],
        ans: '(a) <i>θ</i> ≈ 0.082°. (b) <i>I</i> ≈ 0.047 <i>I</i><sub>0</sub> (about 4.7% of central maximum).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] In single-slit diffraction with <i>a</i> = 0.4 mm and <i>λ</i> = 600 nm, find the intensity ratio <i>I</i>/<i>I</i><sub>0</sub> at <i>θ</i> = 0.5°.',
            a: '<i>α</i> = π<i>a</i> sin <i>θ</i>/<i>λ</i> with sin <i>θ</i> ≈ <i>θ</i> = 0.5π/180 = 8.73 × 10<sup>−3</sup>, so <i>α</i> = π × 0.4 × 10<sup>−3</sup> × 8.73 × 10<sup>−3</sup>/(600 × 10<sup>−9</sup>) = 18.28 rad. <i>I</i>/<i>I</i><sub>0</sub> = (sin <i>α</i>/<i>α</i>)<sup>2</sup>; sin(18.28 rad) = −0.542 (since <i>α</i> − 6π = −0.57 rad), so <i>I</i>/<i>I</i><sub>0</sub> = (0.542/18.28)<sup>2</sup> ≈ 8.8 × 10<sup>−4</sup>.',
          },
          {
            q: '[JEE Main] Show that the intensity of the first secondary maximum is approximately 1/21.2 of the central maximum.',
            a: 'The equation tan <i>α</i> = <i>α</i> gives <i>α</i><sub>1</sub> = 4.493 rad. sin <i>α</i><sub>1</sub> = sin 4.493 = −0.976. (sin <i>α</i><sub>1</sub>/<i>α</i><sub>1</sub>)<sup>2</sup> = (0.976/4.493)<sup>2</sup> = 0.0472 ≈ 1/21.2.',
          },
          {
            q: '[JEE Advanced] A slit of width <i>a</i> = 0.2 mm is illuminated by light of <i>λ</i> = 550 nm. Find the angular separation between the first minimum and the first secondary maximum.',
            a: 'First minimum (<i>m</i> = 1): <i>α</i> = π. sin <i>θ</i><sub>1</sub> = <i>λ</i>/<i>a</i> = 550 × 10<sup>−9</sup>/(0.2 × 10<sup>−3</sup>) = 2.75 × 10<sup>−3</sup>. First secondary max: <i>α</i> = 4.493. sin <i>θ</i><sub>2</sub> = 4.493 × <i>λ</i>/(π<i>a</i>) = 4.493 × 2.75 × 10<sup>−3</sup>/π = 3.93 × 10<sup>−3</sup>. Δ sin <i>θ</i> ≈ Δ<i>θ</i> = 1.18 × 10<sup>−3</sup> rad = 0.068° = 4.1′.',
          },
          {
            q: '[JEE Advanced] In a single-slit diffraction pattern, the intensity at a point is <i>I</i><sub>0</sub>/8. Find all possible values of <i>α</i> = π<i>a</i> sin <i>θ</i>/<i>λ</i> at that point.',
            a: '<i>I</i>/<i>I</i><sub>0</sub> = (sin <i>α</i>/<i>α</i>)<sup>2</sup> = 1/8, so |sin <i>α</i>/<i>α</i>| = 1/√8 = 0.354. <i>α</i> = π/2 gives 2/π = 0.637 (too large) and <i>α</i> = π gives 0 (too small), so a root lies between them: <i>α</i> ≈ 2.23 rad (sin 2.23/2.23 = 0.355). There is no other root, because every secondary maximum of |sin <i>α</i>/<i>α</i>| is at most 0.217 < 0.354; hence <i>α</i> = ±2.23 rad.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 709–711 ─────────────────────────
  {
    n: 'D',
    title: 'Polarisation by Double Refraction',
    extra: true,
    kalam: 'A quarter-wave plate converts linearly polarised light into circularly polarised light (when the input is at 45° to the optic axis).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Chapter 10 covers Malus’s law, Brewster’s law, and plane polarisation. JEE Advanced adds <b>double refraction</b> (birefringence) in crystals such as calcite and quartz, where an unpolarised beam splits into two rays polarised in perpendicular directions with different speeds (different refractive indices <i>n</i><sub>o</sub> and <i>n</i><sub>e</sub>). If the incident light is plane-polarised, an analyser that brings these two beams onto a common polarisation direction makes them interfere, and the path difference Δ = <i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>) determines the outcome.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Double refraction basics.</b> Ordinary ray (O-ray): obeys Snell’s law, polarised perpendicular to the principal plane, index <i>n</i><sub>o</sub>. Extraordinary ray (E-ray): does not obey Snell’s law in general, polarised in the principal plane, index <i>n</i><sub>e</sub>. Path difference after thickness <i>t</i>: Δ = <i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>); phase difference <i>δ</i> = 2πΔ/<i>λ</i> = 2π<i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>)/<i>λ</i>.',
      },
      {
        t: 'p',
        html: '<b>Without an analyser.</b> The two beams have perpendicular polarisations, so their intensities simply add — no interference pattern forms (for plane-polarised input the emerging light is in general elliptically polarised).',
      },
      {
        t: 'p',
        html: '<b>With an analyser.</b> Project both polarisations onto the analyser’s axis. The two projected components have a phase difference <i>δ</i>, so they interfere. Intensity follows the standard two-beam interference formula:<br><i>I</i> = <i>I</i><sub>o</sub> + <i>I</i><sub>e</sub> + 2√(<i>I</i><sub>o</sub><i>I</i><sub>e</sub>) cos <i>δ</i><br>Let plane-polarised light (intensity <i>I</i><sub>0</sub>) fall on the plate at 45° to the optic axis, so the O and E parts each carry <i>I</i><sub>0</sub>/2, and an analyser parallel (or crossed) to the input polariser passes <i>I</i><sub>0</sub>/4 of each (<i>I</i><sub>o</sub> = <i>I</i><sub>e</sub> = <i>I</i><sub>0</sub>/4 in the formula above):<br><i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup>(<i>δ</i>/2) (parallel), <i>I</i> = <i>I</i><sub>0</sub> sin<sup>2</sup>(<i>δ</i>/2) (crossed)<br>(For unpolarised input the O and E parts are incoherent, so no <i>δ</i>-dependence.)',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>t</i> in m, <i>n</i><sub>o</sub> − <i>n</i><sub>e</sub> dimensionless, <i>λ</i> in m. <i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>) in m. 2π<i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>)/<i>λ</i> is dimensionless (phase). Consistent.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Calcite Crystal',
        q: 'A calcite crystal has <i>n</i><sub>o</sub> = 1.658 and <i>n</i><sub>e</sub> = 1.486. Light of <i>λ</i> = 589 nm is incident normally on a plate of thickness <i>t</i> = 0.05 mm cut parallel to the optic axis. (a) Find the path difference and phase difference between the O- and E-rays. (b) If the incident light is plane-polarised at 45° to the optic axis and the emergent beam is viewed through a polaroid parallel to that incident polarisation (so at 45° to each ray’s polarisation direction), find the transmitted intensity as a fraction of the incident intensity.',
        steps: [
          '<b>(a) Path difference and phase difference.</b><br>Δ = <i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>) = 0.05 × 10<sup>−3</sup> × (1.658 − 1.486) = 5 × 10<sup>−5</sup> × 0.172 = 8.6 × 10<sup>−6</sup> m = 8.6 μm<br><i>δ</i> = 2πΔ/<i>λ</i> = (2π × 8.6 × 10<sup>−6</sup>)/(589 × 10<sup>−9</sup>) = 2π × 14.60 = 29.2π rad<br><i>δ</i> = 29.2π = (14 × 2π) + 1.2π',
          '<b>(b) Intensity through analyser.</b> With the analyser at 45° to each polarisation, the two equal-intensity components project as <i>I</i><sub>0</sub>/4 each. Phase difference <i>δ</i> gives:<br><i>I</i> = <i>I</i><sub>0</sub>/4 + <i>I</i><sub>0</sub>/4 + 2 × (<i>I</i><sub>0</sub>/4) cos(1.2π) = <i>I</i><sub>0</sub>/2 + (<i>I</i><sub>0</sub>/2) cos(216°)<br>cos(216°) = cos(180° + 36°) = −cos 36° = −0.809<br><i>I</i> = (<i>I</i><sub>0</sub>/2)(1 − 0.809) = (<i>I</i><sub>0</sub>/2) × 0.191 = 0.0955 <i>I</i><sub>0</sub> ≈ <i>I</i><sub>0</sub>/10.5',
        ],
        ans: '(a) Δ = 8.6 μm, <i>δ</i> = 1.2π rad (216°). (b) <i>I</i> ≈ 0.096–0.097 <i>I</i><sub>0</sub> (about 9.6–9.7% of incident).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Quarter-Wave Plate',
        q: 'A quarter-wave plate converts linearly polarised light into circularly polarised light (when the input is at 45° to the optic axis). What thickness of calcite would make it a quarter-wave plate for <i>λ</i> = 550 nm?',
        steps: [
          'A quarter-wave plate introduces a phase difference of π/2 between the O- and E-components:<br><i>δ</i> = π/2 = 2π<i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>)/<i>λ</i><br><i>t</i> = <i>λ</i>/(4(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>)) = (550 × 10<sup>−9</sup>)/(4 × (1.658 − 1.486)) = (550 × 10<sup>−9</sup>)/(4 × 0.172) = (550 × 10<sup>−9</sup>)/0.688 ≈ 8.0 × 10<sup>−7</sup> m',
        ],
        ans: '<i>t</i> ≈ 800 nm.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Advanced] In a calcite crystal (<i>n</i><sub>o</sub> = 1.658, <i>n</i><sub>e</sub> = 1.486), find the minimum thickness for which the O- and E-rays differ in phase by 180° for <i>λ</i> = 600 nm. (This is a half-wave plate.)',
            a: 'Half-wave: <i>δ</i> = π. <i>δ</i> = 2π<i>t</i>Δ<i>n</i>/<i>λ</i> = π ⇒ <i>t</i> = <i>λ</i>/(2Δ<i>n</i>) = 600 × 10<sup>−9</sup>/(2 × 0.172) = 600 × 10<sup>−9</sup>/0.344 = 1.74 × 10<sup>−6</sup> m = 1.74 μm.',
          },
          {
            q: '[JEE Advanced] Light of <i>λ</i> = 532 nm, plane-polarised at 45° to the optic axis, passes through a quartz plate (parallel cut, <i>n</i><sub>e</sub> − <i>n</i><sub>o</sub> = 0.009) of thickness <i>t</i> = 0.1 mm. The emergent light is analysed by a polaroid. Find the intensity ratio of maxima to minima in the analysed beam.',
            a: '<i>δ</i> = 2π<i>t</i>Δ<i>n</i>/<i>λ</i> = 2π × 0.1 × 10<sup>−3</sup> × 0.009/(532 × 10<sup>−9</sup>) = 2π × 1.69 = 3.38π. Take plane-polarised light at 45° to the optic axis, so the O and E parts have equal intensity <i>I</i><sub>0</sub>/2. Behind the plate an analyser at angle <i>ψ</i> to the O-direction passes <i>I</i> = (<i>I</i><sub>0</sub>/2)[1 + sin 2<i>ψ</i> cos <i>δ</i>]. Rotating the analyser, <i>I</i><sub>max</sub> = (<i>I</i><sub>0</sub>/2)(1 + |cos <i>δ</i>|) and <i>I</i><sub>min</sub> = (<i>I</i><sub>0</sub>/2)(1 − |cos <i>δ</i>|). Here cos <i>δ</i> = cos 3.38π = −0.36, so <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = 1.36/0.64 ≈ 2.1.',
          },
          {
            q: '[JEE Advanced] A beam of unpolarised light of intensity <i>I</i><sub>0</sub> is incident on two parallel polaroids with a doubly-refracting plate (thickness <i>t</i>, birefringence |Δ<i>n</i>| = |<i>n</i><sub>e</sub> − <i>n</i><sub>o</sub>|) inserted between them at 45° to each polaroid’s axis. For what <i>t</i> does the system act as an intensity switch (minimum transmission = 0)?',
            a: 'With parallel polaroids and the plate at 45° to their axes, <i>I</i> = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup>(<i>δ</i>/2) (<i>I</i><sub>0</sub>/2 is the intensity after the first polaroid). It vanishes when <i>δ</i> = (2<i>k</i> + 1)π, i.e. <i>t</i> = (2<i>k</i> + 1)<i>λ</i>/(2|Δ<i>n</i>|), <i>k</i> = 0, 1, 2, … (the smallest is the half-wave plate, <i>t</i> = <i>λ</i>/(2|Δ<i>n</i>|)). Different wavelengths see different <i>δ</i>, so the system transmits some wavelengths and blocks others — a coloured filter.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 711–713 ─────────────────────────
  {
    n: 'E',
    title: 'Resolving Power: Rayleigh Criterion in Depth',
    extra: true,
    kalam: 'Two point sources are just resolvable when the central maximum of one diffraction pattern falls on the first minimum of the other.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Chapter 10 states the Rayleigh criterion <i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i> for circular apertures and <i>R</i> = <i>D</i>/(1.22<i>λ</i>) for resolving power. JEE Advanced requires applying this criterion, as Topic 05 began to, to <b>telescopes</b>, <b>microscopes</b>, and <b>grating spectroscopes</b> simultaneously, understanding the role of the <b>numerical aperture</b> in microscopy, and knowing when magnification helps versus when only aperture matters.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Rayleigh criterion recap.</b> Two point sources are just resolvable when the central maximum of one diffraction pattern falls on the first minimum of the other. For a circular aperture of diameter <i>D</i>:<br><i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i> (radians)<br>For a slit of width <i>a</i>: <i>θ</i><sub>min</sub> = <i>λ</i>/<i>a</i> (the factor 1.22 is specific to circular apertures).',
      },
      {
        t: 'p',
        html: '<b>Telescope resolving power.</b> The minimum angular separation depends <b>only on aperture diameter</b> <i>D</i>, not on magnification. A larger objective lens or mirror means finer resolution. Magnification only enlarges an already-resolved image.',
      },
      {
        t: 'p',
        html: '<b>Microscope limit of resolution.</b> The minimum resolvable separation <i>d</i><sub>min</sub> between two objects under the microscope:<br><i>d</i><sub>min</sub> = 0.61<i>λ</i>/NA<br>where the numerical aperture NA = <i>n</i> sin <i>α</i>, <i>n</i> is the refractive index of the medium between the object and the objective, and <i>α</i> is the half-angle of the cone of light entering the objective.',
      },
      {
        t: 'p',
        html: '<b>Improving resolution:</b> Microscope: increase NA (oil immersion, <i>n</i> > 1; larger <i>α</i> by better lens design) or decrease <i>λ</i> (blue light instead of red; electron microscopy uses <i>λ</i> ∼ 0.001 nm). Telescope: increase <i>D</i>.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> <i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i>: <i>λ</i> in m, <i>D</i> in m, ratio in rad (dimensionless). <i>R</i> = 1/<i>θ</i><sub>min</sub> = <i>D</i>/(1.22<i>λ</i>): <i>D</i> and <i>λ</i> in m, ratio dimensionless. Microscope: <i>d</i><sub>min</sub> = 0.61<i>λ</i>/NA: <i>λ</i> in m, NA dimensionless, <i>d</i><sub>min</sub> in m. All consistent.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Moon Landing Resolution',
        q: 'A telescope with objective diameter <i>D</i> = 5 m observes the Moon (<i>L</i> = 3.84 × 10<sup>8</sup> m away). (a) Find the minimum angular separation it can resolve at <i>λ</i> = 550 nm. (b) What is the minimum linear separation on the Moon’s surface that this telescope can distinguish? (c) Could this telescope resolve two astronauts standing 2 m apart on the Moon?',
        steps: [
          '<b>(a) Angular resolution.</b><br><i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i> = 1.22 × (550 × 10<sup>−9</sup>)/5 = 1.22 × 1.1 × 10<sup>−7</sup> = 1.34 × 10<sup>−7</sup> rad',
          '<b>(b) Linear resolution on the Moon.</b><br><i>s</i><sub>min</sub> = <i>θ</i><sub>min</sub> × <i>L</i> = 1.34 × 10<sup>−7</sup> × 3.84 × 10<sup>8</sup>',
          '<b>(c) Two astronauts at 2 m.</b><br><i>θ</i><sub>astronauts</sub> = 2/(3.84 × 10<sup>8</sup>) = 5.2 × 10<sup>−9</sup> rad<br>Required resolution: 5.2 × 10<sup>−9</sup> rad. Available: 1.34 × 10<sup>−7</sup> rad. The telescope <b>cannot</b> resolve 2 m at this distance — it needs an angular resolution about 26 times better, requiring <i>D</i> ≈ 130 m.',
        ],
        ans: '(a) <i>θ</i><sub>min</sub> ≈ 1.3 × 10<sup>−7</sup> rad. (b) ≈ 51 m. (c) No — 2 m separation corresponds to ≈ 5 × 10<sup>−9</sup> rad, which is below the telescope’s resolution.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Grating Spectroscope vs Prism',
        q: 'A prism spectroscope and a grating spectroscope are both used to resolve the sodium doublet (<i>λ</i> ≈ 589.3 nm, separation 0.6 nm). Compare the resolving power required of each.',
        steps: [
          '<b>Grating:</b> As in practice question 2 of Additional topic B, <i>R</i> = <i>λ</i>/Δ<i>λ</i> = 589.3/0.6 = 982. For a grating, <i>R</i> = <i>mN</i>. To resolve in first order (<i>m</i> = 1): need <i>N</i> = 982 illuminated lines.',
          '<b>Prism:</b> The resolving power of a prism is <i>R</i> = <i>t</i> · d<i>n</i>/d<i>λ</i> (where <i>t</i> is the base length and d<i>n</i>/d<i>λ</i> is the dispersion). For typical glass, |d<i>n</i>/d<i>λ</i>| ≈ 1000 cm<sup>−1</sup> (order of magnitude). To get <i>R</i> = 982:<br><i>t</i> ≈ 982/(1000 cm<sup>−1</sup>) ≈ 1 cm',
          'A prism of base width about 1 cm resolves the sodium doublet. A good diffraction grating needs only about 1000 lines illuminated.',
        ],
        ans: 'Both can resolve the doublet. Grating: <i>R</i> ≈ 982, requiring at least 982 lines in the first order. Prism: requires base width <i>t</i> ≈ 1 cm with typical glass dispersion.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] A telescope has an objective of diameter 10 cm. Using <i>λ</i> = 560 nm, find the limiting angular resolution.',
            a: '<i>θ</i><sub>min</sub> = 1.22 × 560 × 10<sup>−9</sup>/0.10 = 6.8 × 10<sup>−6</sup> rad ≈ 1.4″ (arc-seconds).',
          },
          {
            q: '[JEE Main] What diameter of telescope objective is needed to resolve two stars with an angular separation of 2 × 10<sup>−6</sup> rad at <i>λ</i> = 550 nm?',
            a: '<i>D</i> = 1.22<i>λ</i>/<i>θ</i> = 1.22 × 550 × 10<sup>−9</sup>/(2 × 10<sup>−6</sup>) = 0.336 m ≈ 34 cm.',
          },
          {
            q: '[JEE Advanced] A microscope objective has numerical aperture 0.85 and uses blue light of <i>λ</i> = 450 nm. Find the limit of resolution.',
            a: '<i>d</i><sub>min</sub> = 0.61 × 450 × 10<sup>−9</sup>/0.85 = 3.23 × 10<sup>−7</sup> m = 0.32 μm.',
          },
          {
            q: '[JEE Advanced] (a) An oil-immersion microscope objective has NA = 1.30 and <i>λ</i> = 546 nm. What is the smallest separation it can resolve? (b) If it were replaced by a dry (air) objective of NA ≈ 0.65, by what factor would the resolution degrade?',
            a: '(a) <i>d</i><sub>min</sub> = 0.61 × 546 × 10<sup>−9</sup>/1.30 = 2.56 × 10<sup>−7</sup> m = 0.26 μm. (b) Oil immersion NA = 1.30, dry objective NA ≈ 0.65: in air the limit is 0.61 × 546 nm/0.65 = 0.51 μm, twice as large, so the resolving ability is halved.',
          },
        ],
      },
    ],
  },
];
