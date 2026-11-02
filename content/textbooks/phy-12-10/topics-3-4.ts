import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 03 and 04: pp. 657–678 of the Class 12 Physics Master
 * Reference, word for word: Interference of Light and Young’s Double-Slit
 * Experiment (pp. 657–668) and Thin-Film Interference (pp. 669–678), each split
 * at its Sections 1 to 8. Figures 10.4 (caption p. 658, drawn p. 659), 10.5
 * (caption p. 661, drawn p. 662), 10.6 (caption p. 669, drawn p. 670) and 10.7
 * (caption p. 672, drawn p. 673) are redrawn in lib/diagrams/physics-12-10.ts
 * and physics-12-10b.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 657–668 ─────────────────────────
  {
    n: '03',
    title: 'Interference of Light and Young’s Double-Slit Experiment',
    kalam: 'Two sources that maintain a fixed phase difference are called coherent sources.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the single most heavily examined subtopic in the chapter. CBSE Boards almost guarantee a 3–5 mark derivation of fringe width plus a numerical. JEE Main asks 1–2 questions every year — fringe width, intensity ratios, glass-plate shift, or two-wavelength coincidence. NEET typically asks 1 direct numerical or a coherence-concept MCQ. JEE Advanced layers it with intensity distribution, unequal slits, and shifted patterns.',
      },
      {
        t: 'p',
        html: '<b>Notation note:</b> Throughout this chapter we write the <b>fringe order as</b> <i>m</i> (the <i>m</i>th bright/dark fringe) and reserve <i>n</i> for refractive index. Many Indian textbooks use <i>n</i> for the fringe order — just mentally swap <i>n</i> → <i>m</i> when you compare.',
      },
      {
        t: 'p',
        html: 'Drop two stones into a still pond, a little apart, at the very same instant. Two sets of circular ripples spread out and run into each other. Watch the overlap region carefully: at some points the water heaves up violently, while at others it stays almost dead flat. Nothing was added or removed — the same two ripple-trains are present everywhere — yet the combination is loud in some places and silent in others. That redistribution of energy is <b>interference</b>, and it is the fingerprint of waves.',
      },
      {
        t: 'p',
        html: 'The rule behind it is the <b>principle of superposition</b>: when two waves overlap, the resultant displacement at any instant is just the sum of the individual displacements. If two crests arrive together (in phase), they add to give a bigger crest — <b>constructive interference</b>. If a crest of one meets a trough of the other (out of phase by half a cycle), they cancel — <b>destructive interference</b>. Crucially, energy is never destroyed at the dark points; it is merely shifted to the bright points. The bright fringes are brighter precisely because the dark fringes are dark.',
      },
      {
        t: 'p',
        html: 'Now here is the catch that makes optical interference hard to see, and the reason this experiment is famous. For the bright-and-dark pattern to stay put long enough for your eye to register it, the two overlapping waves must keep a <b>constant phase relationship</b> over time. Two sources that maintain a fixed phase difference are called <b>coherent sources</b>. Two ordinary light bulbs — or two different LEDs — are hopelessly incoherent: light is emitted by countless atoms in random, independent bursts lasting about 10<sup>−8</sup> s, so the phase between two separate sources scrambles about a hundred million (10<sup>8</sup>) times a second. The pattern flickers into a uniform grey blur faster than any eye or camera can catch. This is why you never see interference fringes from your room’s two tube-lights.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine two singers trying to harmonise. If both follow the same conductor, they stay locked in step and produce a stable, rich blend — coherent. If each sings to their own private metronome, drifting in and out of time, the audience hears only a muddled wash — incoherent. Thomas Young’s 1801 stroke of genius was the optical equivalent of “give them one conductor”: he took light from a single source and split it into two using two closely spaced slits. Since both slits are fed by the same original wavefront, whatever random phase jitter the source has is identical in both beams — it cancels out in the difference. The two slits are therefore permanently coherent, and a steady pattern of bright and dark bands appears on a screen.',
      },
      {
        t: 'p',
        html: 'There are broadly two ways to manufacture coherent sources from one parent source, and both appear in exams. The first is <b>division of wavefront</b>: a single wavefront is split sideways into two parts that then overlap — this is exactly what Young’s two slits do (and what a Fresnel biprism or Lloyd’s mirror do too). The second is <b>division of amplitude</b>: a single beam is partially reflected and partially transmitted at a surface, so the same wave is split into two reduced-amplitude copies that later recombine — this is the mechanism behind the colours of a soap film or an oil slick, which you will meet again in thin-film interference. In both cases the trick is identical in spirit: never use two separate sources; always split one.',
      },
      { t: 'fig', id: 'p12-10-fig-10.4' },
      {
        t: 'p',
        html: 'The pattern itself is a set of equally spaced, parallel bright and dark bands called <b>fringes</b>. The central fringe (straight ahead, where both paths are equal) is always bright. Whether any other point is bright or dark depends entirely on the <b>path difference</b> — how much farther light from one slit travels than light from the other to reach that point.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean fringe pattern relies on several things, and exams probe exactly when it breaks:<br>• <b>Coherence is non-negotiable.</b> Remove it (use two independent sources) and fringes vanish.<br>• <b>Comparable amplitudes give good contrast.</b> If one slit is much brighter than the other, the dark fringes never reach true zero and the pattern washes out (this is why <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> matters).<br>• <b>Monochromatic light for sharp fringes.</b> White light gives a white central fringe with coloured edges and only a few visible fringes, because each wavelength has its own fringe width.<br>• <b>Small-angle geometry.</b> The simple formulas assume <i>D</i> ≫ <i>d</i> and the screen region is close to the axis, so sin <i>θ</i> ≈ tan <i>θ</i> ≈ <i>θ</i>.<br>• <b>The source slit must be narrow enough:</b> roughly <i>s</i>/<i>S</i> < <i>λ</i>/<i>d</i> (with <i>s</i> the source size and <i>S</i> its distance), or fringes from different parts of the source overlap and blur.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Path difference (extra distance travelled from the two slits to a point at position <i>y</i> on the screen)',
        main: 'Δ<i>x</i> = <i>d</i> sin <i>θ</i> ≈ <i>yd</i>/<i>D</i>',
        legend: [
          '<i>d</i> = slit separation',
          '<i>D</i> = slit-to-screen distance',
          '<i>y</i> = distance of the point from the central fringe',
          '<i>θ</i> = angular position',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Phase difference',
        main: '<i>φ</i> = (2π/<i>λ</i>) Δ<i>x</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Condition for bright fringes (maxima)',
        main: 'Δ<i>x</i> = <i>mλ</i> ⇒ <i>y</i><sub><i>m</i></sub><sup>bright</sup> = <i>mλD</i>/<i>d</i>,   <i>m</i> = 0, ±1, ±2, …',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Condition for dark fringes (minima)',
        main: 'Δ<i>x</i> = (2<i>m</i> − 1)<i>λ</i>/2 ⇒ <i>y</i><sub><i>m</i></sub><sup>dark</sup> = (2<i>m</i> − 1)<i>λD</i>/(2<i>d</i>),   <i>m</i> = 1, 2, 3, … (each side)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Fringe width (spacing between consecutive bright — or consecutive dark — fringes)',
        main: '<i>β</i> = <i>λD</i>/<i>d</i>',
        legend: [],
        note: 'Units: metre. Dimensional formula: [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>], i.e. [L].',
      },
      {
        t: 'formula',
        kicker: 'Angular fringe width (independent of <i>D</i>)',
        main: '<i>θ</i><sub><i>β</i></sub> = <i>β</i>/<i>D</i> = <i>λ</i>/<i>d</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Resultant intensity (general, two sources of intensity <i>I</i><sub>1</sub>, <i>I</i><sub>2</sub>)',
        main: '<i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos <i>φ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equal sources (<i>I</i><sub>1</sub> = <i>I</i><sub>2</sub> = <i>I</i><sub>0</sub>)',
        main: '<i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(<i>φ</i>/2)<br><i>I</i><sub>max</sub> = 4<i>I</i><sub>0</sub><br><i>I</i><sub>min</sub> = 0',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Contrast ratio (amplitudes <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>)',
        main: '<i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = ((√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)/(√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>))<sup>2</sup> = ((<i>a</i><sub>1</sub> + <i>a</i><sub>2</sub>)/(<i>a</i><sub>1</sub> − <i>a</i><sub>2</sub>))<sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Fringe width in a medium of refractive index <i>n</i>',
        main: '<i>β</i>′ = <i>β</i>/<i>n</i>',
        legend: [],
        note: 'since <i>λ</i><sub>med</sub> = <i>λ</i>/<i>n</i>',
      },

      { t: 'part', title: 'CBSE board derivation — Fringe width and intensity in YDSE' },
      { t: 'p', html: '<b>Derivation 3.1 — Position of fringes and fringe width</b>' },
      { t: 'fig', id: 'p12-10-fig-10.5' },
      {
        t: 'p',
        html: '<b>Setup.</b> Two coherent slits <i>S</i><sub>1</sub> and <i>S</i><sub>2</sub>, separated by a small distance <i>d</i>, are illuminated by monochromatic light of wavelength <i>λ</i>. A screen is placed parallel to the slits at a distance <i>D</i> ≫ <i>d</i>. Consider a point <i>P</i> on the screen at distance <i>y</i> from the central point <i>O</i> (the foot of the perpendicular bisector).',
      },
      {
        t: 'p',
        html: '<b>Step 1 — write the two path lengths.</b> The waves reach <i>P</i> having travelled <i>S</i><sub>1</sub><i>P</i> and <i>S</i><sub>2</sub><i>P</i>. The brightness at <i>P</i> is decided by the <b>path difference</b> Δ<i>x</i> = <i>S</i><sub>2</sub><i>P</i> − <i>S</i><sub>1</sub><i>P</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — compute the path difference geometrically.</b> Drop a perpendicular from <i>S</i><sub>1</sub> onto <i>S</i><sub>2</sub><i>P</i>, meeting it at <i>N</i>. Because <i>D</i> ≫ <i>d</i>, the lines <i>S</i><sub>1</sub><i>P</i> and <i>S</i><sub>2</sub><i>P</i> are very nearly parallel, both making angle <i>θ</i> with the axis. Then<br>Δ<i>x</i> = <i>S</i><sub>2</sub><i>N</i> = <i>d</i> sin <i>θ</i><br><b>Physical reason:</b> the only extra distance the lower beam travels is the short leg <i>S</i><sub>2</sub><i>N</i> at the slits; everything beyond <i>N</i> is common to both paths.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — apply small-angle geometry.</b> For points near the axis, <i>θ</i> is tiny, so sin <i>θ</i> ≈ tan <i>θ</i> = <i>y</i>/<i>D</i>:<br>Δ<i>x</i> = <i>yd</i>/<i>D</i>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — impose the brightness conditions.</b> For a <b>bright</b> fringe the two waves must arrive in phase, i.e. path difference an integer number of wavelengths:<br><i>yd</i>/<i>D</i> = <i>mλ</i> ⇒ <i>y</i><sub><i>m</i></sub><sup>bright</sup> = <i>mλD</i>/<i>d</i><br>For a <b>dark</b> fringe they must arrive exactly out of phase, i.e. an odd number of half-wavelengths:<br><i>yd</i>/<i>D</i> = (2<i>m</i> − 1)<i>λ</i>/2 ⇒ <i>y</i><sub><i>m</i></sub><sup>dark</sup> = (2<i>m</i> − 1)<i>λD</i>/(2<i>d</i>)<br>Note <i>m</i> = 0 gives <i>y</i> = 0: the <b>central fringe is always bright</b>, because at <i>O</i> both path lengths are exactly equal (Δ<i>x</i> = 0).',
      },
      {
        t: 'p',
        html: '<b>Step 5 — extract the fringe width.</b> The spacing between consecutive bright fringes:<br><i>β</i> = <i>y</i><sub><i>m</i>+1</sub><sup>bright</sup> − <i>y</i><sub><i>m</i></sub><sup>bright</sup> = (<i>m</i> + 1)<i>λD</i>/<i>d</i> − <i>mλD</i>/<i>d</i><br><i>β</i> = <i>λD</i>/<i>d</i><br>The same spacing comes out for consecutive dark fringes — so <b>all fringes are equally spaced</b> and bright and dark fringes are equally wide. Notice <i>β</i> does not depend on <i>m</i>: the pattern is uniform across the screen.',
      },
      { t: 'p', html: '<b>Derivation 3.2 — Intensity distribution</b>' },
      {
        t: 'p',
        html: 'Let each slit alone produce amplitude <i>a</i> at <i>P</i>, with a phase difference <i>φ</i> = (2π/<i>λ</i>)Δ<i>x</i> between them. By superposition the resultant amplitude is<br><i>A</i> = √(<i>a</i><sup>2</sup> + <i>a</i><sup>2</sup> + 2<i>a</i> · <i>a</i> cos <i>φ</i>) = 2<i>a</i> cos(<i>φ</i>/2)<br>Since intensity ∝ amplitude<sup>2</sup>, and writing <i>I</i><sub>0</sub> = <i>a</i><sup>2</sup> for one slit:<br><i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(<i>φ</i>/2)<br>This is maximum (4<i>I</i><sub>0</sub>) when <i>φ</i> = 0, 2π, 4π, … (i.e. Δ<i>x</i> = <i>mλ</i> — the bright fringes) and zero when <i>φ</i> = π, 3π, … (the dark fringes). The average intensity over the pattern is 2<i>I</i><sub>0</sub> — exactly the sum of the two individual intensities, confirming energy is only <b>redistributed</b>, not created.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'In a Young’s double-slit experiment, light of wavelength 600 nm illuminates two slits 0.8 mm apart. The screen is 1.5 m away. Find (a) the fringe width and (b) the distance of the 3rd bright fringe from the centre.',
        steps: [
          '<b>Given:</b> <i>λ</i> = 600 × 10<sup>−9</sup> m, <i>d</i> = 0.8 × 10<sup>−3</sup> m, <i>D</i> = 1.5 m.',
          '(a) Fringe width:<br><i>β</i> = <i>λD</i>/<i>d</i> = ((600 × 10<sup>−9</sup>)(1.5))/(0.8 × 10<sup>−3</sup>) = (9 × 10<sup>−7</sup>)/(0.8 × 10<sup>−3</sup>) = 1.125 × 10<sup>−3</sup> m',
          '(b) Position of the 3rd bright fringe (<i>m</i> = 3):<br><i>y</i><sub>3</sub> = <i>mλD</i>/<i>d</i> = <i>mβ</i> = 3 × 1.125',
        ],
        ans: '<i>β</i> = 1.125 mm; the 3rd bright fringe is 3.375 mm from the centre.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A YDSE pattern has fringe width <i>β</i> in air. The entire apparatus (slits, screen and all) is now immersed in water (<i>n</i> = 4/3). The new fringe width is:<br>(A) 4<i>β</i>/3   (B) 3<i>β</i>/4   (C) <i>β</i>   (D) 16<i>β</i>/9',
        steps: [
          '<b>The fast reasoning (no full recompute):</b> Immersing the apparatus only changes one thing — the wavelength shrinks to <i>λ</i>′ = <i>λ</i>/<i>n</i>. Since <i>β</i> ∝ <i>λ</i>,<br><i>β</i>′ = <i>β</i>/<i>n</i> = <i>β</i>/(4/3)',
          '<b>Trap to avoid:</b> The “more refractive index = bigger” instinct pushes students toward (A). But a denser medium shortens the wavelength, so fringes crowd closer. Option (D) is for those who square the index by mistake. Always sanity-check direction: water shrinks <i>λ</i>, so it shrinks <i>β</i>.',
        ],
        ans: '(B) 3<i>β</i>/4.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In a YDSE with <i>d</i> = 0.5 mm and <i>D</i> = 1 m, light containing two wavelengths <i>λ</i><sub>1</sub> = 480 nm and <i>λ</i><sub>2</sub> = 600 nm is used. Find the least distance from the central fringe where a bright fringe of <i>λ</i><sub>1</sub> coincides with a bright fringe of <i>λ</i><sub>2</sub>.',
        steps: [
          '<b>Concept:</b> Coincidence needs a position that is simultaneously a bright fringe for both wavelengths:<br><i>y</i> = <i>m</i><sub>1</sub><i>λ</i><sub>1</sub><i>D</i>/<i>d</i> = <i>m</i><sub>2</sub><i>λ</i><sub>2</sub><i>D</i>/<i>d</i> ⇒ <i>m</i><sub>1</sub><i>λ</i><sub>1</sub> = <i>m</i><sub>2</sub><i>λ</i><sub>2</sub>',
          'So <i>m</i><sub>1</sub>/<i>m</i><sub>2</sub> = <i>λ</i><sub>2</sub>/<i>λ</i><sub>1</sub> = 600/480 = 5/4.',
          'The smallest integers are <i>m</i><sub>1</sub> = 5, <i>m</i><sub>2</sub> = 4. The coincidence occurs at:<br><i>y</i> = <i>m</i><sub>1</sub><i>λ</i><sub>1</sub><i>D</i>/<i>d</i> = (5 × (480 × 10<sup>−9</sup>) × 1)/(0.5 × 10<sup>−3</sup>) = (5 × 4.8 × 10<sup>−7</sup>)/(5 × 10<sup>−4</sup>) = 4.8 × 10<sup>−3</sup> m',
          'Check with <i>λ</i><sub>2</sub>: <i>y</i> = (4 × (600 × 10<sup>−9</sup>) × 1)/(0.5 × 10<sup>−3</sup>) = 4.8 × 10<sup>−3</sup> m. ✓',
          '<b>Why “multi-concept”:</b> it forces the simultaneous-condition idea (<i>m</i><sub>1</sub><i>λ</i><sub>1</sub> = <i>m</i><sub>2</sub><i>λ</i><sub>2</sub>), a smallest-integer-ratio step, and unit-careful substitution — a typical JEE Main composite.',
        ],
        ans: '<i>y</i> = 4.8 mm (the 5th fringe of 480 nm = 4th fringe of 600 nm).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A thin transparent sheet of refractive index <i>n</i> = 1.5 and thickness <i>t</i> is placed over <b>one</b> slit of a YDSE using light of wavelength <i>λ</i> = 500 nm. The central bright fringe shifts to the position previously occupied by the 6th bright fringe. Find <i>t</i>. Then find the new fringe width if originally <i>d</i> = 0.4 mm, <i>D</i> = 1 m.',
        steps: [
          '<b>Step 1 — the extra optical path from the sheet.</b> A sheet of thickness <i>t</i> and index <i>n</i> replaces a length <i>t</i> of air, adding optical path (this is the same (<i>n</i> − 1)<i>t</i> factor we met for the thin prism in Topic 01):<br>Δ<sub>extra</sub> = (<i>n</i> − 1)<i>t</i><br>This delay is added to the covered slit’s path, so the whole pattern shifts toward that slit until the central (zero-total-path-difference) point sits where the extra path is cancelled by geometry.',
          '<b>Step 2 — the shift condition.</b> The central fringe now sits where the 6th bright fringe used to be, so the introduced path difference equals 6 wavelengths:<br>(<i>n</i> − 1)<i>t</i> = 6<i>λ</i><br><i>t</i> = 6<i>λ</i>/(<i>n</i> − 1) = (6 × 500 × 10<sup>−9</sup>)/(1.5 − 1) = (3 × 10<sup>−6</sup>)/0.5 = 6 × 10<sup>−6</sup> m',
          '<b>Step 3 — the new fringe width.</b> Inserting a thin sheet <b>shifts</b> the pattern but does <b>not</b> change the fringe spacing — <i>β</i> depends only on <i>λ</i>, <i>D</i>, <i>d</i>, none of which changed:<br><i>β</i> = <i>λD</i>/<i>d</i> = ((500 × 10<sup>−9</sup>)(1))/(0.4 × 10<sup>−3</sup>) = 1.25 × 10<sup>−3</sup> m',
          '<b>The subtle point (the JEE-Advanced sting):</b> students often “double-count,” expecting <i>β</i> to change because the geometry looks disturbed. It doesn’t — a uniform sheet adds a constant path to every ray through that slit, translating the entire pattern rigidly. Spacing is preserved; only the centre moves.',
        ],
        ans: '<i>t</i> = 6 μm; fringe width unchanged at <i>β</i> = 1.25 mm (pattern shifted by 6 fringes).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] In a YDSE, the slits are 1 mm apart and the screen is 1.2 m away. If the fringe width is 0.6 mm, find the wavelength of the light used.',
            a: '<i>λ</i> = <i>βd</i>/<i>D</i> = ((0.6 × 10<sup>−3</sup>)(1 × 10<sup>−3</sup>))/1.2 = 5 × 10<sup>−7</sup> m = 500 nm.',
          },
          {
            q: '[NEET] Two coherent sources have intensities in the ratio 4 ∶ 1. Find the ratio <i>I</i><sub>max</sub> ∶ <i>I</i><sub>min</sub> in the interference pattern.',
            a: '<i>a</i><sub>1</sub> ∶ <i>a</i><sub>2</sub> = 2 ∶ 1, so <i>I</i><sub>max</sub> ∶ <i>I</i><sub>min</sub> = (2 + 1)<sup>2</sup> ∶ (2 − 1)<sup>2</sup> = 9 ∶ 1.',
          },
          {
            q: '[JEE Main] In a YDSE, when the apparatus is in air the fringe width is 0.4 mm. If <i>d</i> = 0.5 mm and <i>D</i> = 50 cm, find (a) the wavelength and (b) the fringe width when the experiment is repeated in a medium of refractive index 1.6.',
            a: '(a) <i>λ</i> = <i>βd</i>/<i>D</i> = (0.4 × 10<sup>−3</sup>)(0.5 × 10<sup>−3</sup>)/0.5 = 4 × 10<sup>−7</sup> m = 400 nm; (b) <i>β</i>′ = <i>β</i>/<i>n</i> = 0.4/1.6 = 0.25 mm.',
          },
          {
            q: '[JEE Main] In a YDSE, the path difference at a point <i>P</i> on the screen is 1.5<i>λ</i>. If the intensity due to each slit alone is <i>I</i><sub>0</sub>, what is the resultant intensity at <i>P</i>?',
            a: '<i>φ</i> = (2π/<i>λ</i>)(1.5<i>λ</i>) = 3π ⇒ <i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(3π/2) = 0. Resultant intensity = 0 (a dark point).',
          },
          {
            q: '[JEE Advanced] In a YDSE the two slits have widths in the ratio 1 ∶ 9, so the amplitudes of the waves reaching the screen are in the ratio 1 ∶ 3. Find (a) the ratio of maximum to minimum intensity, and (b) the ratio of the intensity at a point of constructive interference to the intensity due to one slit alone (the narrower one).',
            a: '(a) <i>I</i><sub>max</sub> ∶ <i>I</i><sub>min</sub> = (3 + 1)<sup>2</sup> ∶ (3 − 1)<sup>2</sup> = 16 ∶ 4 = 4 ∶ 1; (b) constructive: <i>I</i> = (<i>a</i><sub>1</sub> + <i>a</i><sub>2</sub>)<sup>2</sup> = (1 + 3)<sup>2</sup> = 16 units; one (narrow) slit alone = <i>a</i><sub>1</sub><sup>2</sup> = 1 unit; ratio = 16 ∶ 1.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Two independent sodium lamps emitting light of the same wavelength are used in place of the two slits in Young’s experiment. The screen will show:',
        opts: [
          {
            label: 'the usual bright and dark fringes',
            nudge: '<b>(A)</b> assumes equal wavelength is enough — it is not; constant phase relationship is the real requirement.',
          },
          { label: 'wider fringes', nudge: '<b>(B)</b> confuses “different source” with “geometry change.”' },
          { label: 'uniform illumination with no fringes', nudge: null },
          {
            label: 'only a single central bright fringe',
            nudge: '<b>(D)</b> misremembers the white-light single-fringe result and mis-applies it; with no coherence there is no central fringe either.',
          },
        ],
        correct: 2,
        solution: 'Two independent lamps are incoherent — their phase difference changes randomly ∼ 10<sup>8</sup> times per second, so the pattern shifts faster than it can be seen and averages to uniform brightness.',
      },
      {
        t: 'mcq',
        q: 'In a YDSE, the fringe width is <i>β</i>. If the distance between the slits is doubled and the distance to the screen is halved, the new fringe width is:',
        opts: [
          {
            label: '<i>β</i>',
            nudge: '<b>(A)</b> is for students who think the two changes “cancel” — they don’t, because <i>d</i> is in the denominator and <i>D</i> in the numerator, so both push the same way.',
          },
          { label: '<i>β</i>/2', nudge: '<b>(B)</b> catches only one of the two effects.' },
          { label: '<i>β</i>/4', nudge: null },
          { label: '4<i>β</i>', nudge: '<b>(D)</b> inverts both dependences.' },
        ],
        correct: 2,
        solution: '<i>β</i> = <i>λD</i>/<i>d</i>. Doubling <i>d</i> halves <i>β</i>; halving <i>D</i> halves it again: <i>β</i> → <i>β</i> × ½ × ½ = <i>β</i>/4.',
      },
      {
        t: 'mcq',
        q: 'At a point on the screen in a YDSE, the path difference between the two waves is <i>λ</i>/4. If the maximum intensity in the pattern is <i>I</i><sub>0</sub>, the intensity at this point is:',
        opts: [
          { label: '<i>I</i><sub>0</sub>', nudge: '<b>(A)</b> ignores that <i>λ</i>/4 is neither a max nor a min.' },
          { label: '<i>I</i><sub>0</sub>/2', nudge: null },
          {
            label: '<i>I</i><sub>0</sub>/4',
            nudge: '<b>(C)</b> <i>I</i><sub>0</sub>/4 needs cos<sup>2</sup>(<i>φ</i>/2) = 1/4, i.e. Δ<i>x</i> = <i>λ</i>/3 — not <i>λ</i>/4.',
          },
          {
            label: '3<i>I</i><sub>0</sub>/4',
            nudge: '<b>(D)</b> 3<i>I</i><sub>0</sub>/4 needs cos<sup>2</sup>(<i>φ</i>/2) = 3/4, i.e. Δ<i>x</i> = <i>λ</i>/6 — not <i>λ</i>/4.',
          },
        ],
        correct: 1,
        solution: 'Here <i>I</i><sub>max</sub> = <i>I</i><sub>0</sub> corresponds to 4(one-slit intensity). Phase difference <i>φ</i> = (2π/<i>λ</i>) · (<i>λ</i>/4) = π/2. Then <i>I</i> = <i>I</i><sub>max</sub> cos<sup>2</sup>(<i>φ</i>/2) = <i>I</i><sub>0</sub> cos<sup>2</sup>(π/4) = <i>I</i><sub>0</sub> · ½ = <i>I</i><sub>0</sub>/2.',
      },
      {
        t: 'mcq',
        q: 'In a YDSE, the central fringe is white when white light is used. The fringe closest to the central white fringe is:',
        opts: [
          { label: 'white', nudge: '<b>(A)</b> is true only exactly at the centre, where all colours have zero path difference.' },
          {
            label: 'violet',
            nudge: '<b>(B)</b> mixes up two things: violet’s first-order bright fringe does sit nearer the centre than red’s (<i>β</i> ∝ <i>λ</i>), but before it is reached violet–blue is the first colour cancelled, so the band next to the white centre looks red.',
          },
          { label: 'red', nudge: null },
          {
            label: 'black',
            nudge: '<b>(D)</b> confuses the white-light interference edge with a dark fringe — the inner fringes are coloured, not black.',
          },
        ],
        correct: 2,
        solution: 'Moving off the centre, the path difference first reaches half a wavelength for the shortest wavelengths, so violet–blue light is the first to be cancelled; with blue missing, the light there looks red. So the fringe closest on either side of the central white fringe is red, and the farthest visible fringes look blue.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the half-angle in intensity.</b> The correct relation is <i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(<i>φ</i>/2), not cos<sup>2</sup> <i>φ</i>. Dropping the 1/2 is the most common intensity error.',
          '<b>Inserting a glass sheet and “changing” the fringe width.</b> A uniform sheet over one slit only shifts the pattern (by (<i>n</i> − 1)<i>t</i>/<i>λ</i> fringes); it leaves <i>β</i> = <i>λD</i>/<i>d</i> untouched. Don’t recompute <i>β</i>.',
          '<b>Wrong direction for the medium effect.</b> A denser medium shrinks <i>λ</i>, so it shrinks <i>β</i> (<i>β</i>′ = <i>β</i>/<i>n</i>). Students routinely multiply by <i>n</i> instead of dividing.',
          '<b>Mixing the bright/dark conditions.</b> Bright: Δ<i>x</i> = <i>mλ</i>. Dark: Δ<i>x</i> = (2<i>m</i> − 1)<i>λ</i>/2. A sign of trouble is a “dark central fringe” — at the centre Δ<i>x</i> = 0, which is always bright in standard YDSE.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — think in fringes, not metres.</b> Most YDSE numericals collapse if you treat <i>β</i> as your unit: the <i>m</i>th bright fringe is just at <i>mβ</i>, the <i>m</i>th dark fringe at (<i>m</i> − ½)<i>β</i>, and a glass sheet shifts the pattern by (<i>n</i> − 1)<i>t</i>/<i>λ</i> fringes. Converting everything to “number of fringe widths” turns messy substitutions into one-line ratios.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Coherent sources = constant phase difference (same <i>λ</i>, fixed phase). Two independent bulbs ⇒ NO fringes.',
            note: '',
          },
          {
            f: 'Path difference',
            note: 'Δ<i>x</i> = <i>d</i> sin <i>θ</i> ≈ <i>yd</i>/<i>D</i>; <b>Phase:</b> <i>φ</i> = (2π/<i>λ</i>)Δ<i>x</i>.',
          },
          {
            f: 'Bright',
            note: 'Δ<i>x</i> = <i>mλ</i>; <b>Dark:</b> Δ<i>x</i> = (2<i>m</i> − 1)<i>λ</i>/2. Central fringe <b>always bright</b>.',
          },
          {
            f: 'Fringe width',
            note: '<i>β</i> = <i>λD</i>/<i>d</i> (uniform, independent of <i>m</i>). <b>Angular:</b> <i>θ</i><sub><i>β</i></sub> = <i>λ</i>/<i>d</i>.',
          },
          {
            f: 'Intensity',
            note: '<i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(<i>φ</i>/2); <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = ((<i>a</i><sub>1</sub> + <i>a</i><sub>2</sub>)/(<i>a</i><sub>1</sub> − <i>a</i><sub>2</sub>))<sup>2</sup>.',
          },
          {
            f: 'In a medium',
            note: '<i>β</i>′ = <i>β</i>/<i>n</i>. <b>Glass sheet over one slit:</b> shifts pattern by (<i>n</i> − 1)<i>t</i>/<i>λ</i> fringes, <i>β</i> unchanged.',
          },
        ],
        aids: ['“Order <i>m</i>, index <i>n</i>” — keep them apart. And “denser shrinks” — denser medium ⇒ shorter <i>λ</i> ⇒ narrower fringes.'],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 669–678 ─────────────────────────
  {
    n: '04',
    title: 'Thin-Film Interference',
    kalam: 'A soap bubble is colourless soapy water — yet it blazes with shifting rainbows.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards treat this mostly qualitatively — “why do soap bubbles and oil films show colours” (1–2 marks). JEE Main regularly sets numericals on film thickness, anti-reflection coatings, and Newton’s rings. JEE Advanced layers in the half-wave loss, wedge films, and liquid-filled Newton’s rings. NEET asks it rarely.',
      },
      {
        t: 'p',
        html: '<b>Notation note:</b> the film’s refractive index is written <i>n</i> (chapter-wide convention, ≡ <i>μ</i> in some books); <i>t</i> = film thickness, <i>m</i> = order, <i>r</i> = refraction angle inside the film, <i>R</i> = radius of curvature (Newton’s rings), <i>ρ</i> = ring radius.',
      },
      {
        t: 'p',
        html: 'A soap bubble is colourless soapy water — yet it blazes with shifting rainbows. A film of oil on a rain puddle does the same. No pigment is involved; the colour is pure wave physics, and it is the second great branch of interference: <b>division of amplitude</b> (recall from Topic 03 that the other branch, division of wavefront, gave us Young’s two slits).',
      },
      {
        t: 'p',
        html: 'Here is the mechanism. When light hits a thin transparent film, it does not simply pass through. Part of it <b>reflects off the top surface</b>, and part refracts in, travels to the bottom surface, <b>reflects off the bottom</b>, and comes back out. You now have two reflected beams travelling in the same direction — and because they came from the same original ray, they are perfectly <b>coherent</b>. They interfere. Whether you see brightness or darkness (for a given colour) depends on the extra distance the second beam travelled inside the film — which depends on the film’s <b>thickness</b> <i>t</i>, its <b>refractive index</b> <i>n</i>, and the <b>angle</b> of viewing.',
      },
      {
        t: 'p',
        html: 'Because the condition depends on wavelength, white light produces colour: at a given thickness, one colour interferes constructively while others partly cancel, so that patch of film glows with that colour. As the bubble’s wall thins and flows, the thickness changes from place to place and moment to moment — and the colours swirl. (Just before a soap bubble pops, the top goes black — the film has become so thin that the two reflections cancel for all visible wavelengths.)',
      },
      { t: 'fig', id: 'p12-10-fig-10.6' },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the two reflected beams are like two runners who start together; one takes a short detour down through the film and back. If that detour makes him arrive exactly in step with the first runner, they reinforce (bright); exactly out of step, they cancel (dark).',
      },
      {
        t: 'p',
        html: 'But there is a crucial extra twist that trips up almost everyone: the <b>half-wave loss</b>. When light reflects off a surface going from a rarer medium into a denser one (low <i>n</i> to high <i>n</i>), the reflected wave suffers an abrupt phase reversal — equivalent to an extra path of <i>λ</i>/2. (Reflection from denser to rarer has no such change.) For a film in air, the top reflection (air → film) has this <i>λ</i>/2 loss but the bottom reflection (film → air) does not — so there is a net <i>λ</i>/2 to account for. This is exactly why the bright/dark conditions for a thin film look “flipped” compared with what you would naively write.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>Thickness comparable to <i>λ</i>.</b> Too thick and the colours wash out (paths differ by many wavelengths, all colours overlap); too thin and everything cancels (black film).<br>• <b>The half-wave loss must be tracked</b> at every reflection where the wave goes rarer → denser. Getting it wrong swaps bright and dark.<br>• <b>Reflected vs transmitted patterns are complementary.</b> Where the reflected light is bright, the transmitted light is dark, and vice versa (energy conservation).<br>• <b>Coherence over the film</b> requires the two beams to overlap before the source’s phase scrambles — easily satisfied for thin films.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Optical path difference between the two reflected beams (film index <i>n</i>, thickness <i>t</i>, internal angle <i>r</i>)',
        main: 'Δ<sub>path</sub> = 2<i>nt</i> cos <i>r</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Effective path difference including the half-wave loss (film in air, one rarer→denser reflection at the top)',
        main: 'Δ = 2<i>nt</i> cos <i>r</i> − <i>λ</i>/2',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Reflected light — interference conditions',
        main: 'Bright (maxima): 2<i>nt</i> cos <i>r</i> = (<i>m</i> + ½)<i>λ</i>,   <i>m</i> = 0, 1, 2, …<br>Dark (minima): 2<i>nt</i> cos <i>r</i> = <i>mλ</i>,   <i>m</i> = 0, 1, 2, …',
        legend: [],
        note: '(The ½ sits with the bright condition because of the half-wave loss — the reverse of what you would write without it.)',
      },
      {
        t: 'formula',
        kicker: 'Transmitted light — conditions are exactly reversed (no net half-wave loss)',
        main: 'Bright: 2<i>nt</i> cos <i>r</i> = <i>mλ</i><br>Dark: 2<i>nt</i> cos <i>r</i> = (<i>m</i> + ½)<i>λ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Near-normal incidence</b> (<i>r</i> ≈ 0, cos <i>r</i> ≈ 1): replace 2<i>nt</i> cos <i>r</i> by 2<i>nt</i>.',
      },
      {
        t: 'formula',
        kicker: 'Anti-reflection (AR) coating — minimum thickness for zero reflection (quarter-wave)',
        main: '<i>t</i><sub>min</sub> = <i>λ</i>/(4<i>n</i><sub>coat</sub>)<br>ideal <i>n</i><sub>coat</sub> = √<i>n</i><sub>glass</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Newton’s rings (air film between a plano-convex lens of radius <i>R</i> and a flat plate; reflected light)',
        main: 'air-film thickness at radius <i>ρ</i> is: <i>t</i> = <i>ρ</i><sup>2</sup>/(2<i>R</i>)<br>Dark rings: <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>),   <i>m</i> = 0, 1, 2, … (centre dark)<br>Bright rings: <i>ρ</i><sub><i>m</i></sub> = √((<i>m</i> − ½)<i>λR</i>),   <i>m</i> = 1, 2, 3, …',
        legend: [],
        note: 'With a liquid of index <i>n</i> filling the gap, <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>/<i>n</i>) (rings shrink by √<i>n</i>).',
      },
      {
        t: 'p',
        html: 'Units: <i>t</i>, <i>ρ</i>, <i>R</i>, <i>λ</i> all in metres, [L]; <i>n</i> dimensionless.',
      },

      { t: 'part', title: 'Key derivations and procedures' },
      { t: 'p', html: '<b>Derivation 3.1 — The path difference 2<i>nt</i> cos <i>r</i></b>' },
      { t: 'fig', id: 'p12-10-fig-10.7' },
      {
        t: 'p',
        html: '<b>Setup.</b> A ray strikes a film (index <i>n</i>, thickness <i>t</i>) at incidence angle <i>i</i>, refracting to angle <i>r</i> inside. Beam 1 reflects at the top surface (point <i>A</i>). Beam 2 refracts in, reflects at the bottom (<i>B</i>), and exits at <i>C</i>, parallel to beam 1.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — the in-film path.</b> Inside the film the second beam travels <i>AB</i> + <i>BC</i>. With each leg of length <i>t</i>/cos <i>r</i>:<br><i>AB</i> + <i>BC</i> = 2<i>t</i>/cos <i>r</i><br>The optical path is <i>n</i> times this: 2<i>nt</i>/cos <i>r</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — subtract the head start of beam 1.</b> Beam 1 has already travelled to <i>C</i>’s level along the surface. Dropping a perpendicular <i>CD</i> onto beam 1, the path beam 1 covers that beam 2 does not is <i>AD</i>, where <i>AD</i> = <i>AC</i> sin <i>i</i> and <i>AC</i> = 2<i>t</i> tan <i>r</i>. Using Snell’s law sin <i>i</i> = <i>n</i> sin <i>r</i>:<br><i>AD</i> = (2<i>t</i> tan <i>r</i>)(<i>n</i> sin <i>r</i>) = (2<i>nt</i> sin<sup>2</sup> <i>r</i>)/cos <i>r</i>',
      },
      {
        t: 'p',
        html: '<b>Step 3 — combine.</b><br>Δ<sub>path</sub> = 2<i>nt</i>/cos <i>r</i> − (2<i>nt</i> sin<sup>2</sup> <i>r</i>)/cos <i>r</i> = (2<i>nt</i>(1 − sin<sup>2</sup> <i>r</i>))/cos <i>r</i> = (2<i>nt</i> cos<sup>2</sup> <i>r</i>)/cos <i>r</i><br>Δ<sub>path</sub> = 2<i>nt</i> cos <i>r</i>',
      },
      {
        t: 'p',
        html: '<b>Step 4 — add the half-wave loss.</b> Beam 1 reflects at the top (air → denser film), gaining an extra <i>λ</i>/2; beam 2’s internal reflection (film → air, denser → rarer) gains nothing. The net effective path difference is therefore 2<i>nt</i> cos <i>r</i> − <i>λ</i>/2. Reinforcement (bright) requires this effective difference to be an integer number of wavelengths, while cancellation (dark) requires a half-integer — which, after moving the <i>λ</i>/2 across, gives exactly the clean statements in Key formulas and definitions: <b>reflected bright</b> at 2<i>nt</i> cos <i>r</i> = (<i>m</i> + ½)<i>λ</i>, <b>reflected dark</b> at 2<i>nt</i> cos <i>r</i> = <i>mλ</i>.',
      },
      { t: 'p', html: '<b>Derivation 3.2 — Anti-reflection coating (quarter-wave)</b>' },
      {
        t: 'p',
        html: 'To make a lens reflect as little as possible, coat it with a thin film whose index lies between air and glass, so that both reflections (air→coat and coat→glass) are rarer→denser and each carries a <i>λ</i>/2 loss. The two losses cancel, leaving a net path difference of just 2<i>nt</i> (near-normal). For the two reflected beams to destructively interfere (minimum reflection):<br>2<i>n</i><sub>coat</sub><i>t</i> = (<i>m</i> + ½)<i>λ</i><br>The thinnest such coating (<i>m</i> = 0):<br><i>t</i><sub>min</sub> = <i>λ</i>/(4<i>n</i><sub>coat</sub>)<br>a “quarter-wave” layer. Choosing <i>n</i><sub>coat</sub> = √<i>n</i><sub>glass</sub> also matches the two reflected amplitudes so the cancellation is nearly complete — the principle behind the bluish-purple bloom on camera lenses and spectacles.',
      },
      { t: 'p', html: '<b>Procedure — Newton’s rings</b>' },
      {
        t: 'p',
        html: 'The air gap under a plano-convex lens grows as <i>t</i> = <i>ρ</i><sup>2</sup>/(2<i>R</i>). With the half-wave loss at the plate (air → glass) reflection, the <b>centre is dark</b> and dark rings satisfy 2<i>t</i> = <i>mλ</i>, giving <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>). Measuring ring radii thus yields <i>λ</i> (if <i>R</i> known) or <i>R</i> (if <i>λ</i> known); filling the gap with liquid of index <i>n</i> shrinks every ring by √<i>n</i>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE / JEE Main Level',
        q: 'A soap film (<i>n</i> = 1.33) in air is viewed by reflected light at near-normal incidence. Find the minimum thickness for which the film appears bright for light of wavelength 532 nm.',
        steps: [
          '<b>Reflected bright condition</b> (near-normal, cos <i>r</i> ≈ 1): 2<i>nt</i> = (<i>m</i> + ½)<i>λ</i>. Minimum thickness is <i>m</i> = 0:<br><i>t</i><sub>min</sub> = <i>λ</i>/(4<i>n</i>) = (532 × 10<sup>−9</sup>)/(4 × 1.33) = (532 × 10<sup>−9</sup>)/5.32 = 1.0 × 10<sup>−7</sup> m',
        ],
        ans: '<i>t</i><sub>min</sub> = 100 nm.',
      },
      {
        t: 'ex',
        tag: 'NEET / Speed Trap',
        q: 'A camera lens (<i>n</i><sub>glass</sub> = 1.5) is to be coated with magnesium fluoride (<i>n</i> = 1.38) to minimise reflection of 550 nm light. The minimum coating thickness is about:<br>(A) 50 nm   (B) 100 nm   (C) 138 nm   (D) 200 nm',
        steps: [
          '<b>The fast reasoning:</b> AR coating is a quarter-wave layer: <i>t</i> = <i>λ</i>/(4<i>n</i>) = 550/(4 × 1.38) ≈ 550/5.52',
          '<b>Trap to avoid:</b> Students plug in <i>n</i><sub>glass</sub> = 1.5 instead of the coating index, or forget the factor of 4 and compute <i>λ</i>/(2<i>n</i>). The relevant index is always the <b>film’s</b> (<i>n</i><sub>coat</sub>), and the quarter-wave factor is 4.',
        ],
        ans: '(B) ≈ 100 nm.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In a Newton’s rings experiment (<i>λ</i> = 600 nm, lens radius of curvature <i>R</i> = 1.0 m), find the radius of the 10th dark ring seen in reflected light.',
        steps: [
          '<b>Dark ring radius:</b> <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>) with <i>m</i> = 10:<br><i>ρ</i><sub>10</sub> = √(10 × (600 × 10<sup>−9</sup>) × 1.0) = √(6.0 × 10<sup>−6</sup>) ≈ 2.45 × 10<sup>−3</sup> m',
        ],
        ans: '<i>ρ</i><sub>10</sub> ≈ 2.45 mm (diameter ≈ 4.9 mm).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'In a Newton’s rings setup, the diameter of the 15th dark ring in air is 5.90 mm. A transparent liquid is then introduced into the air gap, and the diameter of the same (15th) dark ring shrinks to 5.10 mm. Find the refractive index of the liquid.',
        steps: [
          '<b>Step 1 — ring radius with and without liquid.</b> Dark-ring radius is <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>) in air and <i>ρ</i>′<sub><i>m</i></sub> = √(<i>mλR</i>/<i>n</i>) with liquid. Taking the ratio (same <i>m</i>, <i>λ</i>, <i>R</i>):<br><i>ρ</i><sub><i>m</i></sub><sup>2</sup>/<i>ρ</i>′<sub><i>m</i></sub><sup>2</sup> = <i>n</i> ⟹ <i>n</i> = <i>D</i><sub><i>m</i></sub><sup>2</sup>/<i>D</i>′<sub><i>m</i></sub><sup>2</sup><br>(diameters <i>D</i> = 2<i>ρ</i>, so the factor of 4 cancels).',
          '<b>Step 2 — substitute the diameters.</b><br><i>n</i> = (5.90)<sup>2</sup>/(5.10)<sup>2</sup> = 34.81/26.01',
          '<b>Interpretation:</b> introducing a medium of index <i>n</i> replaces the air film’s optical path 2<i>t</i> with 2<i>nt</i>, so each ring condition is met at a smaller thickness — hence smaller radius — and the ratio of squared diameters directly reads off <i>n</i>. This “rings shrink by √<i>n</i>” result, inverted to measure <i>n</i>, is a classic JEE-Advanced application.',
        ],
        ans: '<i>n</i> ≈ 1.34.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Explain in two or three lines why a thin film of oil on water shows brilliant colours in sunlight but a thick slab of the same oil does not.',
            a: 'In a thin film the two reflected beams differ by only a wavelength-scale path, so each colour interferes strongly and selectively (vivid colour); in a thick slab the path difference spans many wavelengths and varies rapidly, so all colours average to white (no net colour).',
          },
          {
            q: '[NEET] A thin film of index 1.5 appears dark in reflected light of wavelength 600 nm at near-normal incidence. What is the minimum non-zero thickness of the film?',
            a: 'Dark (reflected): 2<i>nt</i> = <i>mλ</i>; minimum non-zero (<i>m</i> = 1): <i>t</i> = <i>λ</i>/(2<i>n</i>) = 600/(2 × 1.5) = 200 nm.',
          },
          {
            q: '[JEE Main] A lens is to be given an anti-reflection coating of index 1.25 for light of wavelength 500 nm. Find the minimum coating thickness.',
            a: '<i>t</i> = <i>λ</i>/(4<i>n</i>) = 500/(4 × 1.25) = 100 nm.',
          },
          {
            q: '[JEE Main] In a Newton’s rings experiment with <i>λ</i> = 589 nm and <i>R</i> = 0.8 m, find the radius of the 5th bright ring in reflected light.',
            a: 'Bright: <i>ρ</i><sub><i>m</i></sub> = √((<i>m</i> − ½)<i>λR</i>), <i>m</i> = 5: <i>ρ</i> = √(4.5 × 589 × 10<sup>−9</sup> × 0.8) = √(2.12 × 10<sup>−6</sup>) ≈ 1.46 mm.',
          },
          {
            q: '[JEE Advanced] A wedge-shaped air film is formed between two glass plates in contact at one edge, with a thin wire of diameter <i>D</i> placed <i>L</i> = 5 cm from the contact edge. With light of wavelength 600 nm at normal incidence, 40 bright fringes are seen between the contact edge and the wire. Find the wire diameter <i>D</i>. (Hint: fringe spacing relates to the wedge angle; total thickness change over <i>L</i> equals <i>D</i>.)',
            a: 'Bright fringes (reflected, air wedge): consecutive bright fringes correspond to a thickness change of <i>λ</i>/2. For 40 bright fringes, total thickness change <i>D</i> = 40 × <i>λ</i>/2 = 40 × 300 × 10<sup>−9</sup> = 1.2 × 10<sup>−5</sup> m = 12 μm.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A very thin soap film, much thinner than the wavelength of light, appears black in reflected light because:',
        opts: [
          { label: 'it absorbs all the light', nudge: '<b>(A)</b> is wrong: a soap film barely absorbs visible light.' },
          { label: 'the two reflected beams interfere destructively due to the half-wave loss', nudge: null },
          {
            label: 'it transmits all colours equally',
            nudge: '<b>(C)</b> describes transmission, not why reflection is dark (though the two are complementary).',
          },
          { label: 'it reflects only ultraviolet light', nudge: '<b>(D)</b> is invented; nothing selects UV here.' },
        ],
        correct: 1,
        solution: 'When <i>t</i> → 0, the geometric path 2<i>nt</i> → 0, but the half-wave loss at the top reflection remains, so the two reflected beams are <i>λ</i>/2 out of step — destructive for all visible wavelengths, hence black.',
      },
      {
        t: 'mcq',
        q: 'The condition for a bright fringe in light reflected from a thin film of index <i>n</i> and thickness <i>t</i> (normal incidence) is:',
        opts: [
          {
            label: '2<i>nt</i> = <i>mλ</i>',
            nudge: '<b>(A)</b> is the dark condition for reflected light (a very common reversal error).',
          },
          { label: '2<i>nt</i> = (<i>m</i> + ½)<i>λ</i>', nudge: null },
          { label: '<i>nt</i> = <i>mλ</i>', nudge: '<b>(C)</b> drops the factor of 2 from the down-and-back path.' },
          {
            label: '2<i>t</i> = <i>mλ</i>',
            nudge: '<b>(D)</b> forgets the film index <i>n</i> (uses geometric, not optical, path).',
          },
        ],
        correct: 1,
        solution: 'The half-wave loss puts the ½ with the bright condition for reflected light.',
      },
      {
        t: 'mcq',
        q: 'An anti-reflection coating works by:',
        opts: [
          { label: 'absorbing the reflected light', nudge: '<b>(A)</b> is wrong — the coating is transparent, not absorbing.' },
          { label: 'making the two surface reflections interfere destructively', nudge: null },
          {
            label: 'increasing the refractive index of the glass',
            nudge: '<b>(C)</b> confuses a surface coating with bulk glass properties.',
          },
          {
            label: 'polarising the reflected light',
            nudge: '<b>(D)</b> describes a different phenomenon (Brewster), not AR coatings.',
          },
        ],
        correct: 1,
        solution: 'A quarter-wave coating makes the reflections off its two surfaces cancel, so almost no light is reflected (and more is transmitted).',
      },
      {
        t: 'mcq',
        q: 'In a Newton’s rings experiment with reflected light, the central spot is:',
        opts: [
          { label: 'bright', nudge: '<b>(A)</b> ignores the half-wave loss.' },
          { label: 'dark', nudge: null },
          {
            label: 'coloured',
            nudge: '<b>(C)</b> applies to white light at outer rings, not the centre with monochromatic light.',
          },
          { label: 'absent', nudge: '<b>(D)</b> is wrong — there is a definite (dark) central spot.' },
        ],
        correct: 1,
        solution: 'At the centre the air-film thickness is essentially zero, but the half-wave loss makes the two reflections cancel — a dark central spot.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the half-wave loss.</b> This is the signature thin-film error. A rarer→denser reflection adds <i>λ</i>/2; account for it at every such surface, and bright/dark conditions land correctly.',
          '<b>Swapping reflected and transmitted conditions.</b> They are complementary: reflected-bright is transmitted-dark. State which one a problem asks for before writing the condition.',
          '<b>Using geometric instead of optical path.</b> It is 2<i>nt</i> cos <i>r</i>, not 2<i>t</i> cos <i>r</i> — the film index multiplies the path, and at non-normal incidence the cos <i>r</i> matters.',
          '<b>Plugging the wrong index into an AR coating.</b> Use the coating’s index in <i>t</i> = <i>λ</i>/(4<i>n</i>), not the glass’s.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — the “2<i>nt</i>, then half-wave” routine.</b> For any thin-film problem at near-normal incidence: write the optical path 2<i>nt</i>, decide whether there is a net half-wave loss (one rarer→denser reflection ⇒ yes; zero or two ⇒ no), and only then choose the bright/dark condition. For AR coatings remember the magic quarter: <i>t</i> = <i>λ</i>/(4<i>n</i>). Sanity check: thinnest bright/AR films come out around 100 nm for visible light — if your answer is microns or millimetres, recheck.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Mechanism',
            note: 'division of amplitude — top-surface and bottom-surface reflections interfere (coherent, same source).',
          },
          { f: 'Optical path difference', note: 'Δ = 2<i>nt</i> cos <i>r</i> (near-normal: 2<i>nt</i>).' },
          { f: 'Half-wave loss', note: 'reflection rarer → denser adds <i>λ</i>/2 (denser → rarer adds nothing).' },
          {
            f: 'Reflected light',
            note: 'bright 2<i>nt</i> cos <i>r</i> = (<i>m</i> + ½)<i>λ</i>; dark 2<i>nt</i> cos <i>r</i> = <i>mλ</i>. <b>Transmitted:</b> reversed.',
          },
          { f: 'Very thin film ⇒ black in reflection (half-wave loss dominates).', note: '' },
          {
            f: 'AR coating (quarter-wave)',
            note: '<i>t</i><sub>min</sub> = <i>λ</i>/(4<i>n</i><sub>coat</sub>), ideal <i>n</i><sub>coat</sub> = √<i>n</i><sub>glass</sub>.',
          },
          {
            f: 'Newton’s rings (reflected)',
            note: 'centre <b>dark</b>; dark <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>); liquid ⇒ rings shrink by √<i>n</i>.',
          },
        ],
        aids: ['“Two-en-tee, mind the half” — write 2<i>nt</i>, then add the half-wave loss before deciding bright or dark.'],
      },
    ],
  },
];
