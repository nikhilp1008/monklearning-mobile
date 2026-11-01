import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topics 05 and 06: pp. 592–611 of the Class 12 Physics Master
 * Reference, word for word: Prism and Dispersion (book 9.5, pp. 592–602) and
 * Optical Instruments (book 9.6, pp. 603–611), each split at its sections
 * 9.N.1 to 9.N.8. Figures 9.10–9.17 (captions on the text pages, drawn on the
 * "CHAPTER 9 · FIGURES" pages 593, 595, 597, 599, 605 and 608) are redrawn in
 * lib/diagrams/physics-12-09b.ts. The errata's layout item (θ = (n_v − n_r)A
 * split across two lines in the pitfall "Confusing angular dispersion with
 * dispersive power", p. 602 here, p. 607 in the errata's numbering) is
 * written whole.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 592–602 ─────────────────────────
  {
    n: '05',
    title: 'Prism and Dispersion',
    kalam: 'A prism is just a wedge of glass with two flat faces meeting at an angle — the triangular paperweight that throws a rainbow on the wall when sunlight catches it.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite. <b>JEE Main</b> almost always carries a prism question (deviation, minimum deviation, prism formula, or dispersive power). <b>NEET</b> leans on the conceptual side — minimum-deviation symmetry, thin-prism deviation, and “which colour bends most.” <b>JEE Advanced</b> combines prisms with TIR (condition for no emergence) or with achromatic combinations. <b>CBSE Boards</b> reliably ask the <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i> derivation, the prism formula, or a 1–2 mark dispersion/dispersive-power definition.',
      },
      {
        t: 'p',
        html: 'A prism is just a wedge of glass with two flat faces meeting at an angle — the triangular paperweight that throws a rainbow on the wall when sunlight catches it. To understand it, you don’t need anything new: a prism is simply <b>two refractions, one after another</b>, at two surfaces that are not parallel. That single fact — non-parallel faces — is what makes a prism so different from the parallel slab of Topic 02. In a slab the second face undoes the bending of the first, so the ray emerges parallel to how it went in (just shifted sideways). In a prism the two faces are tilted relative to each other, so the bends <b>add up</b> instead of cancelling, and the ray leaves travelling in a genuinely new direction. The total turning is the <b>angle of deviation</b> <i>δ</i>.',
      },
      {
        t: 'p',
        html: 'The <b>refracting angle</b> <i>A</i> (also called the apex angle) is the angle between the two faces. As light enters the first face it bends toward the normal (into the denser glass); as it leaves the second face it bends away from the normal (back into air). Both bends nudge the ray toward the thick part — the <b>base</b> — of the prism. That’s a handy mental rule: a prism always deviates light toward its base.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine cycling from smooth road onto sand and back, but where the sandy patch is wedge-shaped. You turn once going in and again coming out, and because the two edges of the patch aren’t parallel, you end up heading off at an angle you never would have on a straight strip. The wedge geometry is the whole story.',
      },
      {
        t: 'p',
        html: 'Now here’s the elegant part. If you slowly rotate the prism (changing the angle of incidence <i>i</i>), the deviation <i>δ</i> doesn’t change in a simple way — it first decreases, reaches a <b>lowest value</b>, then increases again. That single special minimum, the <b>angle of minimum deviation</b> <i>δ</i><sub>m</sub>, happens at one symmetric arrangement where the ray passes through the prism parallel to the base (for an isosceles prism), with the angle of incidence exactly equal to the angle of emergence (<i>i</i> = <i>e</i>). This symmetry is the key that unlocks the famous <b>prism formula</b> for measuring refractive index.',
      },
      {
        t: 'p',
        html: 'Why a rainbow, though? Because glass bends different colours by different amounts. The refractive index <i>n</i> is slightly larger for violet light than for red — so violet slows more, bends more, and deviates more. White light, a blend of all colours, enters as one beam and fans out into a spectrum: red deviated least, violet most. This spreading is <b>dispersion</b>, and the angular spread between the extreme colours is the <b>angular dispersion</b>. The reason a slab doesn’t make rainbows but a prism does is the same wedge geometry: in a slab the colours re-merge; in a prism they keep diverging.',
      },
      { t: 'fig', id: 'p12-09-fig-9.10' },
      {
        t: 'p',
        html: 'One more prism trick deserves mention because it links straight back to total internal reflection. A right-angled 45°–45°–90° <b>prism</b> of ordinary glass (<i>C</i> ≈ 42°) turns light that meets one of its faces from inside at 45° entirely by TIR — at the hypotenuse to bend a beam through 90° (periscopes), or at the two shorter faces in turn to send it back through 180° (binoculars) — with no silvering at all. Here the prism isn’t dispersing light; it’s acting as a perfect, loss-free mirror, which is exactly why quality binoculars use prisms rather than coated mirrors.',
      },
      {
        t: 'p',
        html: '<b>Natural phenomena due to sunlight.</b> Two of the sky’s most familiar sights are dispersion and scattering at work. The <b>rainbow</b> is sunlight dispersed and internally reflected inside countless raindrops, each acting as a tiny prism-plus-mirror. In the <b>primary rainbow</b> light refracts entering a drop, undergoes a single internal reflection, and refracts again on leaving — emerging concentrated near 42° from the antisolar point, with <b>red on the outer edge and violet on the inner</b>. The fainter <b>secondary rainbow</b> involves two internal reflections, appears near 51°, and has its <b>colours reversed</b> (red inside). Separately, <b>scattering</b> explains the sky’s colours: tiny air molecules scatter short (blue) wavelengths far more strongly than long (red) ones — Rayleigh’s law gives scattering ∝ 1/<i>λ</i><sup>4</sup> — so the daytime sky glows <b>blue</b>, while at sunrise and sunset the sunlight travels a long slanted path through the atmosphere, loses most of its blue, and arrives <b>red</b>. The same reason makes danger and stop signals red: red light scatters least and so penetrates haze and fog the farthest.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean prism formula <i>n</i> = sin((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/sin(<i>A</i>/2) holds <b>only at minimum deviation</b>. The simple thin-prism result <i>δ</i> = (<i>n</i> − 1)<i>A</i> and the dispersion formulae assume a <b>small refracting angle</b> <i>A</i> (a few degrees) and near-normal incidence. And a ray will only emerge from the second face if it strikes that face below the critical angle — push the prism angle too large and the light gets trapped by total internal reflection instead of emerging.',
      },
      { t: 'fig', id: 'p12-09-fig-9.11' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Angle relations within a prism',
        main: '<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i><br><i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i>',
        legend: [
          '<i>A</i> = refracting (apex) angle',
          '<i>i</i> = angle of incidence',
          '<i>e</i> = angle of emergence',
          '<i>r</i><sub>1</sub>, <i>r</i><sub>2</sub> = angles of refraction at the two faces',
          '<i>δ</i> = angle of deviation',
        ],
        note: 'All dimensionless (angles).',
      },
      {
        t: 'formula',
        kicker: 'At minimum deviation (<i>δ</i> = <i>δ</i><sub>m</sub>)',
        main: '<i>i</i> = <i>e</i><br><i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2<br><i>δ</i><sub>m</sub> = 2<i>i</i> − <i>A</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Prism formula (refractive index from minimum deviation)',
        main: '<i>n</i> = sin((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/sin(<i>A</i>/2)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Thin (small-angle) prism deviation',
        main: '<i>δ</i> = (<i>n</i> − 1)<i>A</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Maximum apex angle for emergence (else TIR at the second face)',
        main: '<i>A</i><sub>max</sub> = 2<i>C</i>, where sin <i>C</i> = 1/<i>n</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Dispersion (thin prism)',
        main: 'Mean deviation: <i>δ</i><sub>y</sub> = (<i>n</i><sub>y</sub> − 1)<i>A</i><br>Angular dispersion: <i>θ</i> = <i>δ</i><sub>v</sub> − <i>δ</i><sub>r</sub> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i><br>Dispersive power: <i>ω</i> = (<i>δ</i><sub>v</sub> − <i>δ</i><sub>r</sub>)/<i>δ</i><sub>y</sub> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1)',
        legend: ['v = violet', 'r = red', 'y = mean/yellow'],
        note: '<i>ω</i> is <b>dimensionless</b> [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>] and is a property of the <b>material only</b>, independent of the prism angle.',
      },
      {
        t: 'formula',
        kicker: 'Achromatic combination (deviation without dispersion)',
        main: 'two thin prisms with:<br>(<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> + (<i>n</i>′<sub>v</sub> − <i>n</i>′<sub>r</sub>)<i>A</i>′ = 0',
        legend: ['<i>A</i>′ = angle of the second (inverted) prism, counted negative'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Direct-vision combination (dispersion without net deviation)',
        main: '(<i>n</i><sub>y</sub> − 1)<i>A</i> + (<i>n</i>′<sub>y</sub> − 1)<i>A</i>′ = 0',
        legend: ['<i>A</i>′ = angle of the second (inverted) prism, counted negative'],
        note: null,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      { t: 'p', html: '<b>Derivation 1 — The relations <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i> and <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i>.</b>' },
      {
        t: 'p',
        html: 'Let a ray strike the first face at incidence <i>i</i>, refract to <i>r</i><sub>1</sub>, travel to the second face where it makes angle <i>r</i><sub>2</sub> with that face’s normal, and emerge at angle <i>e</i>. Drop normals at both points of incidence; they meet at a point, forming a quadrilateral with the apex. In that quadrilateral, the apex angle <i>A</i> and the angle between the two normals are supplementary: <i>A</i> + ∠(normals) = 180°. In the triangle formed by the internal ray and the two normals, <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> + ∠(normals) = 180°. Subtracting,<br><i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>.',
      },
      {
        t: 'p',
        html: 'The deviation at the first face is (<i>i</i> − <i>r</i><sub>1</sub>) and at the second face (<i>e</i> − <i>r</i><sub>2</sub>); total deviation is their sum:<br><i>δ</i> = (<i>i</i> − <i>r</i><sub>1</sub>) + (<i>e</i> − <i>r</i><sub>2</sub>) = (<i>i</i> + <i>e</i>) − (<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub>) = <i>i</i> + <i>e</i> − <i>A</i>.',
      },
      { t: 'p', html: '<b>Derivation 2 — Minimum deviation and the prism formula.</b>' },
      {
        t: 'p',
        html: 'The deviation <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i> depends on <i>i</i> (since <i>e</i> is fixed by <i>i</i> through the two refractions). Experiment and the reversibility of light show the <i>δ</i>-versus-<i>i</i> curve dips to a single minimum, and <b>by reversibility the minimum must be symmetric</b>: if the path were not symmetric, reversing the ray would give a second incidence angle with the same deviation — but the minimum is unique, so it must satisfy <i>i</i> = <i>e</i>. Then <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub>, and from <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i> we get <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2. Putting <i>i</i> = <i>e</i> into <i>δ</i><sub>m</sub> = <i>i</i> + <i>e</i> − <i>A</i> gives <i>i</i> = (<i>A</i> + <i>δ</i><sub>m</sub>)/2.',
      },
      {
        t: 'p',
        html: 'Now apply Snell’s law at the first face (sin <i>i</i> = <i>n</i> sin <i>r</i><sub>1</sub>):<br><i>n</i> = sin <i>i</i>/sin <i>r</i><sub>1</sub> = sin((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/sin(<i>A</i>/2).<br>This is the working formula of a laboratory spectrometer: measure <i>A</i> and <i>δ</i><sub>m</sub>, read off <i>n</i>.',
      },
      { t: 'fig', id: 'p12-09-fig-9.12' },
      {
        t: 'p',
        html: '<b>Derivation 3 — Thin-prism deviation <i>δ</i> = (<i>n</i> − 1)<i>A</i>.</b> For a small apex angle <i>A</i>, all the angles (<i>i</i>, <i>r</i><sub>1</sub>, <i>r</i><sub>2</sub>, <i>e</i>) are small, so sines may be replaced by the angles themselves in the prism formula:<br><i>n</i> = sin((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/sin(<i>A</i>/2) ≈ ((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/(<i>A</i>/2) = (<i>A</i> + <i>δ</i><sub>m</sub>)/<i>A</i> ⇒ <i>δ</i><sub>m</sub> = (<i>n</i> − 1)<i>A</i>.',
      },
      {
        t: 'p',
        html: 'For a thin prism the deviation is essentially independent of the (small) angle of incidence — a fact that makes thin prisms the natural building blocks for dispersion analysis.',
      },
      {
        t: 'p',
        html: '<b>Key Procedure — dispersion through a thin prism.</b> Because <i>n</i> differs with colour, each colour gets its own deviation <i>δ</i> = (<i>n</i> − 1)<i>A</i>. Red (smallest <i>n</i>) deviates least; violet (largest <i>n</i>) deviates most. The <b>angular dispersion</b> is the difference <i>θ</i> = <i>δ</i><sub>v</sub> − <i>δ</i><sub>r</sub> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i>, and dividing the spread by the mean deviation gives the <b>dispersive power</b> <i>ω</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1) — a pure number characterising the material, not the prism’s size.',
      },
      {
        t: 'p',
        html: '<b>Key Procedure — combining two prisms.</b> Pairing a crown-glass prism with an oppositely-oriented flint-glass prism lets us split the two effects a single prism always bundles together:<br>• An <b>achromatic combination</b> cancels the colour spreading while keeping a net bend. Set the total angular dispersion to zero: (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> + (<i>n</i>′<sub>v</sub> − <i>n</i>′<sub>r</sub>)<i>A</i>′ = 0. Inverting the second prism makes <i>A</i>′ count negative (in magnitudes, (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> = (<i>n</i>′<sub>v</sub> − <i>n</i>′<sub>r</sub>)<i>A</i>′), so this can be met while a net mean deviation survives — the same principle (in spirit) by which lens systems are corrected for chromatic aberration.<br>• A <b>direct-vision combination</b> does the reverse: it cancels the net deviation so white light emerges straight ahead, while the colours still fan out. Set (<i>n</i><sub>y</sub> − 1)<i>A</i> + (<i>n</i>′<sub>y</sub> − 1)<i>A</i>′ = 0 (in magnitudes, (<i>n</i><sub>y</sub> − 1)<i>A</i> = (<i>n</i>′<sub>y</sub> − 1)<i>A</i>′); a direct-vision spectroscope works this way.',
      },
      {
        t: 'p',
        html: 'Because flint glass has a higher dispersive power than crown glass (<i>ω</i>′ ≠ <i>ω</i>), the two conditions cannot be satisfied together — you deliberately choose which effect to kill.',
      },
      { t: 'fig', id: 'p12-09-fig-9.13' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An equilateral glass prism produces an angle of minimum deviation of 30°. Find the refractive index of the prism material.',
        steps: [
          '<b>Given:</b> equilateral ⇒ <i>A</i> = 60°; <i>δ</i><sub>m</sub> = 30°.',
          '<b>Prism formula:</b><br><i>n</i> = sin((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/sin(<i>A</i>/2) = sin((60° + 30°)/2)/sin(60°/2) = sin 45°/sin 30° = (1/√2)/(1/2) = 2/√2 = √2 ≈ 1.414.',
          '(<b>Sanity check:</b> a refractive index near 1.4–1.5 is exactly what we expect for glass. ✓)',
        ],
        ans: '<i>n</i> = √2',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A ray passes through a prism of refracting angle 60° at minimum deviation. The prism material has <i>n</i> = √3. Find the angle of incidence.',
        steps: [
          '<b>The shortcut:</b> at minimum deviation you <b>never need the full prism formula</b> — just use the symmetry. Here <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2 = 30°. Snell at the first face:<br>sin <i>i</i> = <i>n</i> sin <i>r</i><sub>1</sub> = √3 × sin 30° = √3 × ½ = √3/2.',
          '<b>The trap:</b> students reach for <i>n</i> = sin((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/sin(<i>A</i>/2), solve for <i>δ</i><sub>m</sub>, then back out <i>i</i> — three steps where one suffices. Recognising “minimum deviation ⇒ <i>r</i> = <i>A</i>/2” collapses it instantly. (As a bonus, <i>δ</i><sub>m</sub> = 2<i>i</i> − <i>A</i> = 120° − 60° = 60°.)',
        ],
        ans: '<i>i</i> = 60°',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A thin crown-glass prism has a refracting angle of 5°. Its refractive indices are <i>n</i><sub>v</sub> = 1.524 for violet and <i>n</i><sub>r</sub> = 1.514 for red, with a mean value <i>n</i><sub>y</sub> = 1.519. Find (a) the mean deviation, (b) the angular dispersion, and (c) the dispersive power. (Combines thin-prism deviation with dispersion.)',
        steps: [
          '<b>(a) Mean deviation:</b> <i>δ</i><sub>y</sub> = (<i>n</i><sub>y</sub> − 1)<i>A</i> = (1.519 − 1)(5°) = 0.519 × 5° = 2.595°.',
          '<b>(b) Angular dispersion:</b> <i>θ</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> = (1.524 − 1.514)(5°) = 0.010 × 5° = 0.05°.',
          '<b>(c) Dispersive power:</b><br><i>ω</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1) = 0.010/0.519 ≈ 0.0193.',
          'Note <i>ω</i> would be identical for any apex angle — it is a material constant, while the two deviations scale with <i>A</i>.',
        ],
        ans: '<i>δ</i><sub>y</sub> ≈ 2.60°, <i>θ</i> = 0.05°, <i>ω</i> ≈ 0.019',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A prism is made of glass with refractive index <i>n</i> = 1.5. Show that a ray of light cannot emerge from the second face if the refracting angle exceeds a certain maximum, and evaluate that maximum angle.',
        steps: [
          '<b>Reasoning.</b> For the ray to emerge at the second face, it must strike that face at less than the critical angle: <i>r</i><sub>2</sub> < <i>C</i>, where sin <i>C</i> = 1/<i>n</i>. Since <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>, we have <i>r</i><sub>2</sub> = <i>A</i> − <i>r</i><sub>1</sub>. The smallest possible <i>r</i><sub>2</sub> (the best chance to emerge) occurs when <i>r</i><sub>1</sub> is largest, which happens at grazing incidence <i>i</i> = 90°:<br>sin 90° = <i>n</i> sin <i>r</i><sub>1,max</sub> ⇒ sin <i>r</i><sub>1,max</sub> = 1/<i>n</i> = sin <i>C</i> ⇒ <i>r</i><sub>1,max</sub> = <i>C</i>.',
          'So the minimum achievable <i>r</i><sub>2</sub> is <i>r</i><sub>2,min</sub> = <i>A</i> − <i>C</i>. Emergence is possible only if even this satisfies <i>r</i><sub>2</sub> < <i>C</i>:<br><i>A</i> − <i>C</i> < <i>C</i> ⇒ <i>A</i> < 2<i>C</i>.',
          'If <i>A</i> > 2<i>C</i>, then every ray — even the most favourable, grazing one — hits the second face beyond the critical angle and is totally internally reflected; no light can emerge.',
          '<b>Evaluate:</b> sin <i>C</i> = 1/1.5 = 0.667 ⇒ <i>C</i> = 41.8°, so <i>A</i><sub>max</sub> = 2<i>C</i> = 83.6°.',
          'The elegance is that the limiting case chains two ideas — grazing incidence fixes <i>r</i><sub>1,max</sub> = <i>C</i>, and the critical-angle condition at the second face then forces <i>A</i> < 2<i>C</i>.',
        ],
        ans: 'For this glass, any prism with apex angle above about 83.6° will trap the light by TIR.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A prism of refracting angle 60° is made of material of refractive index 1.5. Find the angle of minimum deviation.',
            a: '<i>δ</i><sub>m</sub> = 2 sin<sup>−1</sup>(1.5 sin 30°) − 60° ≈ 37.2°',
          },
          {
            q: '[NEET] Light passes symmetrically through an equilateral prism, and the deviation equals the refracting angle of the prism. Find the refractive index of the material.',
            a: '<i>n</i> = sin((60° + 60°)/2)/sin 30° = sin 60°/sin 30° = √3 ≈ 1.732',
          },
          {
            q: '[JEE Main] A thin prism of angle 6° gives a deviation of 3°. A second thin prism gives a deviation of 3° for the same colour. If the two are combined to produce a direct-vision (zero net deviation) arrangement, find the refracting angle of the second prism (its material has <i>n</i> = 1.6).',
            a: 'First prism <i>n</i><sub>1</sub> = 1.5 (since 3° = (<i>n</i><sub>1</sub> − 1)6°); for zero net deviation (<i>n</i><sub>1</sub> − 1)<i>A</i><sub>1</sub> = (<i>n</i><sub>2</sub> − 1)<i>A</i><sub>2</sub> ⇒ 3° = 0.6 <i>A</i><sub>2</sub> ⇒ <i>A</i><sub>2</sub> = 5°',
          },
          {
            q: '[JEE Main] For a certain flint-glass prism, <i>n</i><sub>v</sub> = 1.66, <i>n</i><sub>r</sub> = 1.62, and <i>n</i><sub>y</sub> = 1.64. Find its dispersive power.',
            a: '<i>ω</i> = 0.04/0.64 = 0.0625',
          },
          {
            q: '[JEE Advanced] A ray is incident normally on the first face of a prism of refracting angle <i>A</i> and refractive index <i>n</i> = 1.5. For what range of <i>A</i> will the ray undergo total internal reflection at the second face?',
            a: 'Normal incidence ⇒ <i>r</i><sub>1</sub> = 0, so <i>r</i><sub>2</sub> = <i>A</i>; TIR needs <i>A</i> > <i>C</i> = sin<sup>−1</sup>(1/1.5) ≈ 41.8°',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'At the angle of minimum deviation through a prism, which is correct?',
        opts: [
          { label: 'the ray inside the prism is parallel to the base and <i>i</i> = <i>e</i>', nudge: null },
          { label: 'the angle of incidence is 90°', nudge: '<b>(b)</b> describes grazing incidence, a different special case.' },
          {
            label: 'the emergent ray is normal to the second face',
            nudge: '<b>(c)</b> describes a ray emerging normally (a one-face condition), not minimum deviation.',
          },
          {
            label: 'the deviation is maximum',
            nudge: '<b>(d)</b> is the exact opposite — students who don’t visualise the U-shaped <i>δ</i>–<i>i</i> curve sometimes flip minimum and maximum.',
          },
        ],
        correct: 0,
        solution: 'Minimum deviation is the symmetric case: <i>i</i> = <i>e</i>, <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2, and the internal ray runs parallel to the base (for an isosceles prism).',
      },
      {
        t: 'mcq',
        q: 'A thin prism of angle 4° and refractive index 1.5 produces a deviation of:',
        opts: [
          { label: '1°', nudge: '<b>(a)</b> halves it again (an extra stray factor).' },
          { label: '2°', nudge: null },
          { label: '4°', nudge: '<b>(c)</b> forgets the (<i>n</i> − 1) factor entirely and just copies <i>A</i>.' },
          {
            label: '6°',
            nudge: '<b>(d)</b> multiplies <i>A</i> by <i>n</i> = 1.5 instead of (<i>n</i> − 1) — the single most common slip on thin prisms.',
          },
        ],
        correct: 1,
        solution: 'Thin prism: <i>δ</i> = (<i>n</i> − 1)<i>A</i> = (0.5)(4°) = 2°.',
      },
      {
        t: 'mcq',
        q: 'Dispersive power of a prism material depends on:',
        opts: [
          {
            label: 'the refracting angle <i>A</i>',
            nudge: '<b>(a)</b> confuses dispersive power with angular dispersion <i>θ</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i>, which does scale with <i>A</i>.',
          },
          { label: 'only the material (its refractive indices)', nudge: null },
          {
            label: 'the angle of incidence',
            nudge: '<b>(c)</b> and <b>(d)</b> are irrelevant geometric quantities; picking them signals confusing the spread of colours (which depends on the prism) with the power to disperse (which depends on the glass).',
          },
          {
            label: 'the height of the prism',
            nudge: '<b>(c)</b> and <b>(d)</b> are irrelevant geometric quantities; picking them signals confusing the spread of colours (which depends on the prism) with the power to disperse (which depends on the glass).',
          },
        ],
        correct: 1,
        solution: '<i>ω</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1) contains no geometric factor — it is purely a material property.',
      },
      {
        t: 'mcq',
        q: 'White light passes through a prism. Compared with red light, violet light is:',
        opts: [
          {
            label: 'deviated less because it travels faster in glass',
            nudge: '<b>(a)</b> is doubly wrong — violet travels slower in glass, and it deviates more.',
          },
          { label: 'deviated more because the refractive index is larger for violet', nudge: null },
          {
            label: 'deviated equally — colour does not affect deviation',
            nudge: '<b>(c)</b> denies dispersion outright (then there’d be no rainbow).',
          },
          { label: 'not deviated at all', nudge: '<b>(d)</b> is nonsensical for an oblique ray.' },
        ],
        correct: 1,
        solution: 'Glass has a larger <i>n</i> for violet, so violet slows more, bends more, and deviates most; red deviates least. Memory hook: in the spectrum, “<b>R</b>ed <b>R</b>ides <b>R</b>ound the outside” — least deviated.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Writing <i>i</i> + <i>e</i> = <i>A</i> instead of <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>.</b> The apex angle equals the sum of the internal refraction angles, not the incidence and emergence angles. The correct deviation relation is <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i>.',
          '<b>Thinking minimum deviation happens at normal incidence.</b> It happens at the symmetric setting (<i>i</i> = <i>e</i>), not at <i>i</i> = 0. Many students assume the lowest deviation is when light goes “straight in.”',
          '<b>Dropping the (<i>n</i> − 1) in thin-prism deviation.</b> It is <i>δ</i> = (<i>n</i> − 1)<i>A</i>, never <i>nA</i>. With <i>n</i> ≈ 1.5 that’s a factor-of-three error.',
          '<b>Confusing angular dispersion with dispersive power.</b> Angular dispersion <i>θ</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i> has units of angle and depends on <i>A</i>; dispersive power <i>ω</i> = <i>θ</i>/<i>δ</i><sub>y</sub> is a dimensionless material constant.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> At minimum deviation, jump straight to <i>r</i> = <i>A</i>/2 and apply Snell once — skip the full prism formula. And for any dispersion problem, separate “size” from “material”: deviations scale with <i>A</i>, but <i>ω</i> never does, so if a question changes only the prism angle, <i>ω</i> is unchanged and you can reuse it.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Geometry',
            note: '<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>; deviation <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i>. A prism bends light <b>toward its base</b>.',
          },
          {
            f: 'Minimum deviation',
            note: '<i>i</i> = <i>e</i>, <i>r</i><sub>1</sub> = <i>r</i><sub>2</sub> = <i>A</i>/2, <i>δ</i><sub>m</sub> = 2<i>i</i> − <i>A</i>. <b>Prism formula:</b> <i>n</i> = sin((<i>A</i> + <i>δ</i><sub>m</sub>)/2)/sin(<i>A</i>/2).',
          },
          { f: 'Thin prism', note: '<i>δ</i> = (<i>n</i> − 1)<i>A</i> (independent of small incidence angle).' },
          { f: 'No emergence (TIR at 2nd face)', note: 'when <i>A</i> > 2<i>C</i>, with sin <i>C</i> = 1/<i>n</i>.' },
          {
            f: 'Dispersion',
            note: 'mean <i>δ</i><sub>y</sub> = (<i>n</i><sub>y</sub> − 1)<i>A</i>; angular <i>θ</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)<i>A</i>; <b>dispersive power</b> <i>ω</i> = (<i>n</i><sub>v</sub> − <i>n</i><sub>r</sub>)/(<i>n</i><sub>y</sub> − 1) (dimensionless, material-only).',
          },
          { f: 'Combinations', note: 'achromatic ⇒ net dispersion = 0; direct-vision ⇒ net deviation = 0.' },
        ],
        aids: [
          '“<i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>A</i>, <i>δ</i> = <i>i</i> + <i>e</i> − <i>A</i>” — the two prism equations to never mix up.',
          '“Symmetry means minimum” — equal in, equal out gives least deviation.',
          '“ROYGBIV: Red deviated least, Violet most.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 06 · pp. 603–611 ─────────────────────────
  {
    n: '06',
    title: 'Optical Instruments',
    kalam: 'Here is the single idea behind every optical instrument in this topic: what decides how big something looks is not its real size but the angle it subtends at your eye.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dependable scoring topic. <b>JEE Main</b> usually carries one magnifying-power numerical (microscope or telescope). <b>NEET</b> favours the formula-and-adjustment angle (relaxed vs strained eye, normal adjustment). <b>JEE Advanced</b> combines the lens equations with tube-length geometry. For <b>CBSE Boards</b>, the compound-microscope or astronomical-telescope ray diagram with its magnifying-power expression is a classic 3-mark question.',
      },
      {
        t: 'p',
        html: 'Here is the single idea behind every optical instrument in this topic: <b>what decides how big something looks is not its real size but the angle it subtends at your eye.</b> A distant kite and a nearby coin can occupy the same angle and so appear the same size. Your eye can make a small thing look bigger by bringing it closer — but only up to a limit. The closest distance at which a healthy eye can see clearly (with full accommodation) is the <b>least distance of distinct vision</b>, <i>D</i> ≈ 25 cm (the near point). Bring an ant closer than that and it blurs. So the eye is stuck: it cannot increase the viewing angle past <i>h</i>/<i>D</i> for an object of height <i>h</i>. Every instrument here is a device to <b>beat that limit by enlarging the angle subtended at the eye</b> — a quantity we call <b>magnifying power</b> (or angular magnification) <i>M</i>.',
      },
      {
        t: 'p',
        html: '<b>The simple microscope</b> is just a convex lens — the jeweller’s loupe, the magnifying glass over a stamp. Placed within its focal length of a tiny object, it forms an enlarged, erect, virtual image that your eye can focus on, while letting the object sit closer than the near point. The angle is boosted, so the object looks bigger. The trade is one of angle, not of true size: the image may be “at infinity,” yet it appears large because it subtends a wide angle.',
      },
      {
        t: 'p',
        html: '<b>The compound microscope</b> does the job in two stages, because one lens can’t deliver the huge magnifications a biology lab needs. A short-focus <b>objective</b> lens, held close to the specimen, forms a real, inverted, magnified image inside the tube. A second lens, the <b>eyepiece</b>, then acts as a simple microscope on that image, magnifying it again. Two amplifications multiply: <i>M</i> = <i>m</i><sub>o</sub> × <i>M</i><sub>e</sub>. <b>Think about it this way…</b> it’s like photocopying a document at 300%, then photocopying the copy at 300% again — the enlargements compound.',
      },
      {
        t: 'p',
        html: '<b>The telescope</b> solves the opposite problem. You cannot bring the Moon closer, so instead of magnifying a near object you magnify the angle of a far one. A large, long-focus <b>objective</b> gathers the nearly parallel rays from the distant object and forms a small real image at its focus; the <b>eyepiece</b> then views that image like a magnifying glass. The payoff is the ratio of focal lengths, <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>. Notice the role reversal: in a microscope the objective has a short focal length, while in a telescope the objective has a long one — a distinction worth burning into memory.',
      },
      {
        t: 'p',
        html: 'A <b>reflecting telescope</b> replaces the objective lens with a large concave mirror. Big lenses sag under their own weight, are hard to make flawless, and split colours (chromatic aberration); a mirror suffers none of these, which is why every giant research telescope is a reflector.',
      },
      {
        t: 'p',
        html: 'There’s one more variant worth knowing. A plain astronomical telescope gives an <b>inverted</b> image — perfectly fine for a star, but useless for watching a cricket match or a distant ship. A <b>terrestrial telescope</b> cures this by slipping an <b>erecting lens</b> between the objective and eyepiece; it flips the intermediate image upright while leaving the magnifying power unchanged (<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> still). The cost is a longer tube, since the extra relay lens adds length.',
      },
      {
        t: 'p',
        html: 'A quick word on <b>aperture</b>, which magnification alone hides. The diameter of a telescope’s objective sets how much light it collects: a wider objective gathers more light, revealing fainter stars and producing a brighter, crisper image. This light-gathering power — entirely separate from how much the instrument magnifies — is the deeper reason research telescopes are built with enormous objectives, and another point in favour of large mirrors over large lenses.',
      },
      { t: 'fig', id: 'p12-09-fig-9.14' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Keep <b>magnifying power</b> <i>M</i> (a ratio of angles) firmly separate from <b>linear magnification</b> <i>m</i> (a ratio of heights) — they are different numbers for the same instrument. The standard value <i>D</i> = 25 cm is a convention; it differs between people and grows with age. Two standard “adjustments” recur: <b>normal/relaxed</b> (final image at infinity, eye unstrained) and <b>near-point/strained</b> (final image at <i>D</i>, giving slightly higher magnification). The simple thin-lens formulae assume small angles and thin lenses.',
      },
      { t: 'fig', id: 'p12-09-fig-9.15' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Magnifying power (angular magnification)',
        main: '<i>M</i> = <i>β</i>/<i>α</i>',
        legend: [
          '<i>α</i> = angle the object subtends at the unaided eye (placed at <i>D</i> for a microscope; where it is, for a telescope)',
          '<i>β</i> = angle subtended through the instrument',
        ],
        note: 'Dimensionless, [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Simple microscope (magnifying glass)',
        main: '<i>M</i> = <i>D</i>/<i>f</i> (image at infinity, relaxed)<br><i>M</i> = 1 + <i>D</i>/<i>f</i> (image at near point, strained)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Compound microscope',
        main: '<i>M</i> = <i>m</i><sub>o</sub> × <i>M</i><sub>e</sub> = (<i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|)(<i>D</i>/<i>f</i><sub>e</sub>) (relaxed)<br><i>M</i> = (<i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|)(1 + <i>D</i>/<i>f</i><sub>e</sub>) (strained)',
        legend: [],
        note: 'total magnifying power = (linear magnification of objective) × (angular magnification of eyepiece).',
      },
      {
        t: 'p',
        html: 'For a long tube with the object near <i>f</i><sub>o</sub>, a useful approximation is <i>M</i> ≈ (<i>L</i>/<i>f</i><sub>o</sub>) · (<i>D</i>/<i>f</i><sub>e</sub>), where <i>L</i> ≈ <i>v</i><sub>o</sub>. (NCERT defines the tube length <i>L</i> as the distance between the second focal point of the objective and the first focal point of the eyepiece; then <i>v</i><sub>o</sub> = <i>f</i><sub>o</sub> + <i>L</i> and <i>m</i><sub>o</sub> = <i>L</i>/<i>f</i><sub>o</sub> exactly.) For the relaxed eye the lens separation is <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Astronomical (refracting) telescope',
        main: '<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> (normal adjustment)<br><i>M</i> = (<i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>)(1 + <i>f</i><sub>e</sub>/<i>D</i>) (image at near point)<br>Tube length in normal adjustment: <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Reflecting telescope',
        main: '<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>',
        legend: [],
        note: 'with the objective being a concave mirror of focal length <i>f</i><sub>o</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Terrestrial telescope',
        main: '<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> (same as astronomical)',
        legend: [],
        note: 'with an erecting lens of focal length <i>f</i> giving an upright image; tube length <i>L</i> = <i>f</i><sub>o</sub> + 4<i>f</i> + <i>f</i><sub>e</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Power of a lens (used throughout)',
        main: '<i>P</i> = 1/<i>f</i> (in dioptre, D, with <i>f</i> in metres)',
        legend: [],
        note: 'dimensional formula [M<sup>0</sup> L<sup>−1</sup> T<sup>0</sup>]. Note <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub> for a telescope.',
      },
      {
        t: 'p',
        html: '<b>Definitions.</b> <i>f</i><sub>o</sub>, <i>f</i><sub>e</sub> = objective, eyepiece focal lengths; <i>u</i><sub>o</sub>, <i>v</i><sub>o</sub> = object, image distances for the objective; <i>D</i> = 25 cm = least distance of distinct vision; <i>L</i> = tube length.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Simple microscope.</b> Without the lens, the largest angle an object of height <i>h</i> can subtend is at the near point: <i>α</i> = <i>h</i>/<i>D</i>. Place the lens so the object sits at (or within) its focus.',
      },
      {
        t: 'p',
        html: '<b>Image at infinity (relaxed eye):</b> the object is exactly at the focus, so rays emerge parallel and the image subtends <i>β</i> = <i>h</i>/<i>f</i>. Therefore<br><i>M</i> = <i>β</i>/<i>α</i> = (<i>h</i>/<i>f</i>)/(<i>h</i>/<i>D</i>) = <i>D</i>/<i>f</i>.',
      },
      {
        t: 'p',
        html: '<b>Image at the near point (strained eye, maximum magnification):</b> the virtual image is formed at distance <i>D</i>. Using the lens equation with <i>v</i> = −<i>D</i> gives the slightly larger value<br><i>M</i> = 1 + <i>D</i>/<i>f</i>.<br>The “+1” is the bonus from pulling the image right up to the near point — at the cost of eye strain.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Compound microscope.</b> The objective forms a real, inverted, magnified image of the specimen with linear magnification <i>m</i><sub>o</sub> = <i>v</i><sub>o</sub>/<i>u</i><sub>o</sub> (magnitude <i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|). This intermediate image then serves as the object for the eyepiece, which acts as a simple microscope on it with angular magnification <i>M</i><sub>e</sub> = <i>D</i>/<i>f</i><sub>e</sub> (relaxed) or 1 + <i>D</i>/<i>f</i><sub>e</sub> (strained). Because the two stages act in series, their effects multiply:<br><i>M</i> = <i>m</i><sub>o</sub> × <i>M</i><sub>e</sub> = (<i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|)(<i>D</i>/<i>f</i><sub>e</sub>).<br>When the object is very close to <i>f</i><sub>o</sub> and the tube is long, <i>v</i><sub>o</sub> ≈ <i>L</i> and |<i>u</i><sub>o</sub>| ≈ <i>f</i><sub>o</sub>, giving the compact design formula <i>M</i> ≈ (<i>L</i>/<i>f</i><sub>o</sub>) · (<i>D</i>/<i>f</i><sub>e</sub>). To make <i>M</i> large, both focal lengths must be <b>small</b> — hence the tiny lenses in a microscope.',
      },
      {
        t: 'p',
        html: '<b>Derivation 3 — Astronomical telescope (normal adjustment).</b> A distant object subtends angle <i>α</i> at the objective. The objective forms a real, inverted image of height <i>h</i>′ at its focus, so <i>α</i> = <i>h</i>′/<i>f</i><sub>o</sub>. In normal adjustment this image lies at the eyepiece’s focus too, so the eyepiece sends out parallel rays and the final image is at infinity; the angle it subtends at the eye is <i>β</i> = <i>h</i>′/<i>f</i><sub>e</sub>. Hence<br><i>M</i> = <i>β</i>/<i>α</i> = (<i>h</i>′/<i>f</i><sub>e</sub>)/(<i>h</i>′/<i>f</i><sub>o</sub>) = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>.<br>For high magnification the objective should have a <b>large</b> focal length and the eyepiece a <b>small</b> one — the exact opposite priority to a microscope. The tube length is <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>. (Pulling the final image to the near point instead multiplies <i>M</i> by the factor 1 + <i>f</i><sub>e</sub>/<i>D</i>.)',
      },
      { t: 'fig', id: 'p12-09-fig-9.16' },
      {
        t: 'p',
        html: '<b>Key Procedure — reflecting telescope and its advantages.</b> Replace the objective lens with a large concave mirror; a small secondary mirror (Newtonian: a plane mirror at 45°; Cassegrain: a convex mirror) diverts the converging beam to an eyepiece. Magnifying power is still <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>. Reflecting designs are preferred for serious astronomy because a mirror <b>shows no chromatic aberration</b> (reflection is colour-independent), can be made <b>very large and rigid</b> (supported from behind, so no sagging), gathers <b>more light</b> for fainter objects, and (with a parabolic mirror) suppresses spherical aberration — all at lower cost and weight than a giant lens.',
      },
      { t: 'fig', id: 'p12-09-fig-9.17' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A compound microscope has an objective of focal length 1.5 cm and an eyepiece of focal length 5 cm. An object is placed 2 cm from the objective, and the final image is formed at the near point (<i>D</i> = 25 cm). Find (a) the objective image distance, (b) the magnification of the objective, and (c) the total magnifying power.',
        steps: [
          '<b>(a) Objective (lens equation, <i>u</i><sub>o</sub> = −2 cm, <i>f</i><sub>o</sub> = 1.5 cm):</b><br>1/<i>v</i><sub>o</sub> = 1/<i>f</i><sub>o</sub> + 1/<i>u</i><sub>o</sub> = 1/1.5 + 1/(−2) = 0.667 − 0.5 = 0.167 ⇒ <i>v</i><sub>o</sub> = 6 cm.',
          '<b>(b) Objective magnification:</b> <i>m</i><sub>o</sub> = <i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>| = 6/2 = 3.',
          '<b>(c) Eyepiece (near point):</b> <i>M</i><sub>e</sub> = 1 + <i>D</i>/<i>f</i><sub>e</sub> = 1 + 25/5 = 6.<br><i>M</i> = <i>m</i><sub>o</sub> × <i>M</i><sub>e</sub> = 3 × 6 = 18.',
          'Note how the two stages multiply — neither lens alone would manage it.',
        ],
        ans: 'The microscope magnifies 18×.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'An astronomical telescope is built from an objective of power 0.5 D and an eyepiece of power 25 D, used in normal adjustment. Find its magnifying power.',
        steps: [
          '<b>The shortcut:</b> for a telescope <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = (1/<i>P</i><sub>o</sub>)/(1/<i>P</i><sub>e</sub>) = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub>. So just divide the powers:<br><i>M</i> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub> = 25/0.5.',
          '<b>The trap:</b> the <b>objective</b> is the low-power (long-focal-length) lens and the <b>eyepiece</b> the high-power one. Students who convert to focal lengths and accidentally divide the wrong way get 1/50. Working straight from powers as <i>M</i> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub> sidesteps both the conversion and the inversion. (<b>Check:</b> <i>f</i><sub>o</sub> = 200 cm, <i>f</i><sub>e</sub> = 4 cm, <i>M</i> = 200/4 = 50. ✓)',
        ],
        ans: '<i>M</i> = 50',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An astronomical telescope in normal adjustment has a magnifying power of 24 and an overall tube length of 100 cm. Find the focal lengths of the objective and eyepiece. (A two-equation system linking <i>M</i> and tube length.)',
        steps: [
          '<b>Set up:</b> <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = 24 and <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub> = 100 cm.',
          '<b>Solve:</b> substitute <i>f</i><sub>o</sub> = 24<i>f</i><sub>e</sub> into the tube equation: 24<i>f</i><sub>e</sub> + <i>f</i><sub>e</sub> = 100 ⇒ 25<i>f</i><sub>e</sub> = 100 ⇒ <i>f</i><sub>e</sub> = 4 cm, hence <i>f</i><sub>o</sub> = 96 cm.',
          'The long objective and short eyepiece are exactly the telescope signature.',
        ],
        ans: '<i>f</i><sub>o</sub> = 96 cm, <i>f</i><sub>e</sub> = 4 cm',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A compound microscope has <i>f</i><sub>o</sub> = 2 cm and <i>f</i><sub>e</sub> = 5 cm, with the lenses separated by 17 cm. It is focused so the <b>final image is at infinity</b> (relaxed eye). Find (a) where the object must be placed and (b) the total magnifying power.',
        steps: [
          '<b>Step 1 — locate the intermediate image.</b> For the final image to be at infinity, the intermediate (objective) image must fall exactly at the eyepiece’s focus, i.e. <i>f</i><sub>e</sub> = 5 cm in front of the eyepiece. With a separation of 17 cm,<br><i>v</i><sub>o</sub> = 17 − 5 = 12 cm.',
          '<b>Step 2 — objective lens equation for the object distance.</b><br>1/<i>u</i><sub>o</sub> = 1/<i>v</i><sub>o</sub> − 1/<i>f</i><sub>o</sub> = 1/12 − 1/2 = (1 − 6)/12 = −5/12 ⇒ <i>u</i><sub>o</sub> = −2.4 cm.<br>So the object sits 2.4 cm in front of the objective (just beyond its 2 cm focus, as it must be).',
          '<b>Step 3 — combine the magnifications.</b><br><i>m</i><sub>o</sub> = <i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>| = 12/2.4 = 5,   <i>M</i><sub>e</sub> = <i>D</i>/<i>f</i><sub>e</sub> = 25/5 = 5,<br><i>M</i> = <i>m</i><sub>o</sub> × <i>M</i><sub>e</sub> = 5 × 5 = 25.',
          'The relaxed-eye condition is what fixes <i>v</i><sub>o</sub> — once you see that the intermediate image must land on the eyepiece focus, the rest is bookkeeping.',
        ],
        ans: 'Object at 2.4 cm, total magnifying power 25×.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A magnifying glass of focal length 5 cm is used to read fine print. Find its magnifying power when the final image is (a) at infinity and (b) at the near point (<i>D</i> = 25 cm).',
            a: '(a) <i>M</i> = <i>D</i>/<i>f</i> = 5; (b) <i>M</i> = 1 + <i>D</i>/<i>f</i> = 6',
          },
          {
            q: '[NEET] The objective and eyepiece of an astronomical telescope have focal lengths 150 cm and 6 cm. Find the magnifying power and tube length in normal adjustment.',
            a: '<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = 25; tube length = 156 cm',
          },
          {
            q: '[JEE Main] A compound microscope has <i>f</i><sub>o</sub> = 1 cm, <i>f</i><sub>e</sub> = 4 cm, and tube length 20 cm (take <i>v</i><sub>o</sub> ≈ tube length minus <i>f</i><sub>e</sub>). For relaxed-eye viewing, estimate the total magnifying power.',
            a: '<i>v</i><sub>o</sub> ≈ 20 − 4 = 16 cm; <i>m</i><sub>o</sub> = <i>v</i><sub>o</sub>/<i>f</i><sub>o</sub> − 1 = 15; <i>M</i><sub>e</sub> = 25/4 = 6.25; <i>M</i> ≈ 15 × 6.25 ≈ 94 (the rough <i>m</i><sub>o</sub> ≈ <i>v</i><sub>o</sub>/<i>f</i><sub>o</sub> = 16 gives ≈ 100)',
          },
          {
            q: '[JEE Main] An astronomical telescope has a magnifying power of 20 in normal adjustment with an eyepiece of focal length 5 cm. If it is readjusted so the final image forms at the near point, what is the new magnifying power?',
            a: '<i>M</i><sub>near</sub> = (<i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>)(1 + <i>f</i><sub>e</sub>/<i>D</i>) = 20(1 + 5/25) = 24',
          },
          {
            q: '[JEE Advanced] A reflecting telescope uses a concave mirror objective of focal length 120 cm and an eyepiece of focal length 3 cm. Find its magnifying power, and state two reasons such a design is preferred over a refracting telescope of the same magnifying power.',
            a: '<i>M</i> = 120/3 = 40; preferred because a mirror has no chromatic aberration and can be made larger/brighter and more rigid (lighter, cheaper) than a large lens',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The magnifying power of a simple microscope when the image is formed at infinity is:',
        opts: [
          {
            label: '1 + <i>D</i>/<i>f</i>',
            nudge: '<b>(a)</b> is the near-point (strained) value — the most common mix-up between the two adjustments.',
          },
          { label: '<i>D</i>/<i>f</i>', nudge: null },
          {
            label: '<i>f</i>/<i>D</i>',
            nudge: '<b>(c)</b> and <b>(d)</b> invert the ratio; a magnifier must magnify, so <i>M</i> > 1 requires <i>D</i>/<i>f</i> (since <i>f</i> < <i>D</i>), making <i>f</i>/<i>D</i> < 1 obviously wrong.',
          },
          {
            label: '1 + <i>f</i>/<i>D</i>',
            nudge: '<b>(d)</b> inverts the ratio inside the near-point form: 1 + <i>f</i>/<i>D</i> is barely above 1 (1.2 for <i>f</i> = 5 cm), so the lens would hardly magnify.',
          },
        ],
        correct: 1,
        solution: 'Image at infinity is the relaxed case, <i>M</i> = <i>D</i>/<i>f</i>.',
      },
      {
        t: 'mcq',
        q: 'In an astronomical telescope in normal adjustment, <i>f</i><sub>o</sub> = 100 cm and <i>f</i><sub>e</sub> = 5 cm. Its magnifying power and tube length are:',
        opts: [
          { label: '20 and 105 cm', nudge: null },
          {
            label: '20 and 95 cm',
            nudge: '<b>(b)</b> wrongly subtracts the focal lengths (confusing telescope tube length with the Galilean telescope’s <i>f</i><sub>o</sub> − |<i>f</i><sub>e</sub>|).',
          },
          { label: '0.05 and 105 cm', nudge: '<b>(c)</b> inverts the magnification ratio.' },
          { label: '500 and 105 cm', nudge: '<b>(d)</b> multiplies the focal lengths — a units-blind slip.' },
        ],
        correct: 0,
        solution: '<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = 100/5 = 20; tube length = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub> = 105 cm.',
      },
      {
        t: 'mcq',
        q: 'To increase the magnifying power of a compound microscope, one should:',
        opts: [
          { label: 'increase both <i>f</i><sub>o</sub> and <i>f</i><sub>e</sub>', nudge: '<b>(a)</b> lowers <i>M</i>.' },
          { label: 'decrease both <i>f</i><sub>o</sub> and <i>f</i><sub>e</sub>', nudge: null },
          {
            label: 'increase <i>f</i><sub>o</sub>, decrease <i>f</i><sub>e</sub>',
            nudge: '<b>(c)</b> confuses the microscope with the telescope, where the objective wants a long focal length.',
          },
          {
            label: 'use a single long-focus lens',
            nudge: '<b>(d)</b> abandons the two-stage design that makes high magnification possible.',
          },
        ],
        correct: 1,
        solution: 'Since <i>M</i> ≈ (<i>L</i>/<i>f</i><sub>o</sub>) · (<i>D</i>/<i>f</i><sub>e</sub>), smaller focal lengths raise <i>M</i> — hence the tiny lenses in a microscope.',
      },
      {
        t: 'mcq',
        q: 'A reflecting telescope is preferred over a refracting telescope mainly because the mirror objective:',
        opts: [
          {
            label: 'bends light more strongly',
            nudge: '<b>(a)</b> is meaningless for a mirror (it reflects, not refracts). Picking (a) or (c) usually means importing lens intuitions onto a mirror.',
          },
          { label: 'is free from chromatic aberration and can be made large', nudge: null },
          {
            label: 'has a shorter focal length',
            nudge: '<b>(c)</b> is irrelevant to the choice. Picking (a) or (c) usually means importing lens intuitions onto a mirror.',
          },
          { label: 'needs no eyepiece', nudge: '<b>(d)</b> is false — reflecting telescopes still use an eyepiece.' },
        ],
        correct: 1,
        solution: 'Reflection is colour-independent, so a mirror shows no chromatic aberration, and a mirror can be built large, rigid, and light-gathering.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing magnifying power <i>M</i> with linear magnification <i>m</i>.</b> <i>M</i> compares angles at the eye; <i>m</i> compares heights. For a simple microscope at infinity, <i>m</i> is technically infinite while <i>M</i> = <i>D</i>/<i>f</i> is finite and is the quantity that matters.',
          '<b>Swapping objective and eyepiece roles.</b> Microscope: objective has the short focal length. Telescope: objective has the long focal length. They are opposite — mixing them inverts the answer.',
          '<b>Forgetting which adjustment is asked.</b> “Relaxed / normal / image at infinity” uses <i>D</i>/<i>f</i> (and <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>); “strained / near point” adds the +1 (and the 1 + <i>f</i><sub>e</sub>/<i>D</i> factor). Read the wording before choosing the formula.',
          '<b>Wrong tube length formula.</b> Telescope (normal adjustment): <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>. Microscope: the lens separation is <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub> (relaxed eye), and NCERT’s tube length <i>L</i> is <i>v</i><sub>o</sub> − <i>f</i><sub>o</sub> — these are not interchangeable.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> For telescopes, work directly in powers: <i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub> — it skips two unit conversions and removes the inversion trap. And keep a one-line role check handy: “short-focus objective ⇒ microscope; long-focus objective ⇒ telescope.”',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Core idea',
            note: 'instruments enlarge the <b>angle</b> subtended at the eye; <i>M</i> = <i>β</i>/<i>α</i> (angular), distinct from linear <i>m</i> = <i>h</i>′/<i>h</i>.',
          },
          {
            f: 'Simple microscope',
            note: '<i>M</i> = <i>D</i>/<i>f</i> (relaxed) or 1 + <i>D</i>/<i>f</i> (near point); <i>D</i> = 25 cm.',
          },
          {
            f: 'Compound microscope',
            note: '<i>M</i> = (<i>v</i><sub>o</sub>/|<i>u</i><sub>o</sub>|) · (<i>D</i>/<i>f</i><sub>e</sub>) ≈ (<i>L</i>/<i>f</i><sub>o</sub>) · (<i>D</i>/<i>f</i><sub>e</sub>); both focal lengths small; lens separation = <i>v</i><sub>o</sub> + <i>f</i><sub>e</sub>.',
          },
          {
            f: 'Astronomical telescope',
            note: '<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub> = <i>P</i><sub>e</sub>/<i>P</i><sub>o</sub> (normal); tube <i>L</i> = <i>f</i><sub>o</sub> + <i>f</i><sub>e</sub>; long objective, short eyepiece.',
          },
          {
            f: 'Reflecting telescope',
            note: '<i>M</i> = <i>f</i><sub>o</sub>/<i>f</i><sub>e</sub>; mirror objective ⇒ no chromatic aberration, large aperture, rigid and cheap.',
          },
        ],
        aids: [
          '“Angle, not size” — magnifying power is about the angle at your eye.',
          '“Micro-short, Tele-long” — the objective’s focal length is short in a microscope, long in a telescope.',
          '“Relaxed = <i>D</i>/<i>f</i>; strained adds 1.”',
        ],
      },
    ],
  },
];
