import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topic 05: pp. 48–59 of the Class 12 Physics Master Reference,
 * word for word: Electric Flux and Gauss’s Law, split at its Sections 1 to 8
 * (Section 3 is the book’s “CBSE Board Derivations”). The “Memory aids” line
 * alone on p. 59 belongs to the cheat sheet. Figures 1.10 and 1.11 (referred
 * to on p. 50, drawn on p. 51), 1.12 (pp. 52–53) and 1.13 (pp. 55–56) are
 * redrawn in lib/diagrams/physics-12-01.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 48–59 ─────────────────────────
  {
    n: '05',
    title: 'Electric Flux and Gauss’s Law',
    kalam: 'Charge is the “source” of field lines; the net lines escaping a closed surface count the net charge inside.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the most heavily tested topics in the chapter. <b>CBSE Boards</b> almost always ask one of the three application derivations (line charge, plane sheet, or spherical shell) for 3–5 marks. <b>JEE Main</b> sets numericals on flux through surfaces and fields from symmetric distributions (1–2 questions). <b>NEET</b> loves the conceptual traps — flux independence from surface shape, charges outside contributing zero. <b>JEE Advanced</b> pushes into non-uniform charge densities and cavity problems where Gauss’s law plus superposition do the heavy lifting.',
      },
      {
        t: 'p',
        html: '<b>Part A — Electric Flux: counting the field that “flows through”</b><br>Picture holding a rectangular net in a flowing river. How much water passes through the net each second? It depends on three things: how fast the water flows, how big the net is, and — crucially — the angle you hold it. Hold the net face-on to the current and you catch the maximum flow. Turn it edge-on and almost nothing passes through, even though the net hasn’t shrunk.',
      },
      {
        t: 'p',
        html: '<b>Electric flux</b> is exactly this idea, with the electric field playing the role of the river’s flow. It measures how much electric field passes through a given surface. For a flat surface of area <i>A</i> in a uniform field <i>E⃗</i>:<br>Φ<sub><i>E</i></sub> = <i>EA</i> cos <i>θ</i> = <i>E⃗</i> · <i>A⃗</i><br>where <i>θ</i> is the angle between the field and the <b>area vector</b> <i>A⃗</i> — a vector of magnitude <i>A</i> pointing perpendicular (normal) to the surface. The cos <i>θ</i> is the “angle of the net”: face-on (<i>θ</i> = 0) gives maximum flux <i>EA</i>; edge-on (<i>θ</i> = 90°) gives zero.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine field lines as threads piercing the surface. Flux is just the net number of threads passing through. Tilt the surface and fewer threads pass; the surface “sees” a smaller effective area <i>A</i> cos <i>θ</i>. For a curved surface or a varying field, we chop the surface into tiny patches d<i>A⃗</i>, compute <i>E⃗</i> · d<i>A⃗</i> on each, and add them up — a surface integral Φ<sub><i>E</i></sub> = ∫ <i>E⃗</i> · d<i>A⃗</i>.',
      },
      {
        t: 'p',
        html: '<b>Part B — Gauss’s Law: charge controls the net flux</b><br>Now here’s the magic. Take any closed surface — a balloon of any lumpy shape — and add up the flux poking outward through all of it. Gauss discovered something astonishing: this total outward flux doesn’t care about the shape or size of the surface, or how the charges are arranged inside, or even what charges sit outside. It depends on <b>one thing only</b> — the net charge trapped inside:<br>Φ<sub><i>E</i></sub> = ∮ <i>E⃗</i> · d<i>A⃗</i> = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a gulab jamun sitting inside a sealed box. The sugar syrup it releases must all eventually escape through the box’s walls — the total amount leaking out equals the total syrup inside, no matter how oddly the box is shaped. A second sweet placed outside the box contributes nothing to what escapes this box: whatever syrup enters at one wall leaves through another. Charge is the “source” of field lines; the net lines escaping a closed surface count the net charge inside.',
      },
      {
        t: 'p',
        html: 'This is more than a calculation trick — it’s one of the four Maxwell equations, a foundational law of nature. But it has a hugely practical payoff: when a charge distribution has enough <b>symmetry</b>, Gauss’s law lets us find the field in two or three lines, replacing the brutal integrals Coulomb’s law would demand.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• Gauss’s law is always true for any closed surface, but it’s only useful for finding <i>E⃗</i> when the symmetry (spherical, cylindrical, or planar) lets us pull <i>E</i> outside the integral.<br>• The <i>E⃗</i> in the flux integral is the <b>total field from all charges</b> (inside and outside); only the net flux depends solely on enclosed charge.<br>• The Gaussian surface is <b>imaginary</b> — choose it freely, but never let it pass through a point charge (the field is undefined there). It may pass through continuous distributions.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Electric flux (uniform field, flat surface)',
        main: 'Φ<sub><i>E</i></sub> = <i>E⃗</i> · <i>A⃗</i> = <i>EA</i> cos <i>θ</i>',
        legend: [],
        note: 'SI unit: N·m<sup>2</sup>/C (or V·m); dimensional formula [M L<sup>3</sup> T<sup>−3</sup> A<sup>−1</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Electric flux (general)',
        main: 'Φ<sub><i>E</i></sub> = ∫ <i>E⃗</i> · d<i>A⃗</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Gauss’s law',
        main: '∮ <i>E⃗</i> · d<i>A⃗</i> = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Standard application results (the three to memorise)',
        head: ['Distribution', 'Field magnitude', 'Direction / notes'],
        rows: [
          ['Infinite line charge, density <i>λ</i>', '<i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>)', 'radial; ∝ 1/<i>r</i>'],
          ['Infinite plane sheet, density <i>σ</i>', '<i>E</i> = <i>σ</i>/(2ε<sub>0</sub>)', 'perpendicular; independent of distance'],
          [
            'Thin spherical shell, charge <i>Q</i>, radius <i>R</i>',
            '<i>E</i> = (1/(4πε<sub>0</sub>))(<i>Q</i>/<i>r</i><sup>2</sup>) (<i>r</i> > <i>R</i>);<br><i>E</i> = 0 (<i>r</i> < <i>R</i>)',
            'outside: like a point charge at centre',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Symbol dictionary:</b><br>• Φ<sub><i>E</i></sub> — electric flux; <i>A⃗</i> = <i>An̂</i> — area vector (normal to surface).<br>• <i>Q</i><sub>enc</sub> — net charge enclosed by the Gaussian surface (algebraic sum).<br>• <i>λ</i> — linear charge density (C/m); <i>σ</i> — surface charge density (C/m<sup>2</sup>); <i>ρ</i> — volume charge density (C/m<sup>3</sup>).<br>• ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>.',
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>Foundation — Why Φ = <i>q</i>/ε<sub>0</sub> (point charge in a sphere)</b><br>Place a point charge <i>q</i> at the centre of an imaginary sphere of radius <i>r</i>. By symmetry, <i>E⃗</i> points radially outward and has the same magnitude <i>E</i> = (1/(4πε<sub>0</sub>))(<i>q</i>/<i>r</i><sup>2</sup>) everywhere on the surface, parallel to d<i>A⃗</i> at every point. So:<br>Φ<sub><i>E</i></sub> = ∮ <i>E</i> d<i>A</i> = <i>E</i> ∮ d<i>A</i> = (1/(4πε<sub>0</sub>))(<i>q</i>/<i>r</i><sup>2</sup>) · (4π<i>r</i><sup>2</sup>) = <i>q</i>/ε<sub>0</sub><br>The radius <i>r</i> has cancelled — the flux is independent of the sphere’s size, foreshadowing the full Gauss’s law Φ = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>.',
      },
      { t: 'p', html: '<b>Derivation 1 — Field of an infinite line charge</b>' },
      { t: 'fig', id: 'p12-01-fig-1.10' },
      {
        t: 'p',
        html: 'Consider an infinite straight wire with uniform linear density <i>λ</i>. <b>Symmetry argument:</b> the field must point radially outward (perpendicular to the wire) and depend only on the perpendicular distance <i>r</i> — there’s no reason for it to favour any direction along or around the wire.',
      },
      {
        t: 'p',
        html: 'Choose a <b>coaxial cylinder</b> of radius <i>r</i> and length <i>L</i> as the Gaussian surface. The flux splits into three parts: the two flat ends contribute nothing (there <i>E⃗</i> is parallel to the surface, so <i>E⃗</i> · d<i>A⃗</i> = 0), while on the curved surface <i>E⃗</i> is everywhere perpendicular and constant:<br>Φ<sub><i>E</i></sub> = <i>E</i> × (curved area) = <i>E</i> (2π<i>rL</i>)<br>The charge enclosed is <i>Q</i><sub>enc</sub> = <i>λL</i>. Applying Gauss’s law:<br><i>E</i> (2π<i>rL</i>) = <i>λL</i>/ε<sub>0</sub> ⇒ <i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>)',
      },
      {
        t: 'p',
        html: 'Note the 1/<i>r</i> dependence — slower than a point charge’s 1/<i>r</i><sup>2</sup>, because the line keeps “feeding” the field as you move along it.',
      },
      { t: 'p', html: '<b>Derivation 2 — Field of an infinite plane sheet of charge</b>' },
      { t: 'fig', id: 'p12-01-fig-1.11' },
      {
        t: 'p',
        html: 'For an infinite sheet of uniform surface density <i>σ</i>, symmetry demands the field point straight away from the sheet, with equal magnitude on both sides and independent of distance.',
      },
      {
        t: 'p',
        html: 'Choose a <b>pillbox</b> (a short cylinder) piercing the sheet, with flat caps of area <i>A</i> on either side. The curved side contributes no flux (<i>E⃗</i> is parallel to it). Each cap contributes <i>EA</i>, and there are two caps:<br>Φ<sub><i>E</i></sub> = <i>EA</i> + <i>EA</i> = 2<i>EA</i><br>The enclosed charge is <i>Q</i><sub>enc</sub> = <i>σA</i>. Gauss’s law gives:<br>2<i>EA</i> = <i>σA</i>/ε<sub>0</sub> ⇒ <i>E</i> = <i>σ</i>/(2ε<sub>0</sub>)',
      },
      {
        t: 'p',
        html: 'The field is uniform — it doesn’t weaken with distance, because an infinite sheet always “looks” infinite no matter how far back you stand. (Watch the factor of 2 — it distinguishes a charged sheet from a conductor’s surface; see Pitfalls.)',
      },
      { t: 'p', html: '<b>Derivation 3 — Field of a uniformly charged thin spherical shell</b>' },
      { t: 'fig', id: 'p12-01-fig-1.12' },
      {
        t: 'p',
        html: 'A thin shell of radius <i>R</i> carries total charge <i>Q</i> spread uniformly. By spherical symmetry, <i>E⃗</i> is radial and constant in magnitude over any concentric sphere.',
      },
      {
        t: 'p',
        html: '<b>Outside (<i>r</i> > <i>R</i>):</b> Take a Gaussian sphere of radius <i>r</i>. It encloses the full charge <i>Q</i>:<br><i>E</i> (4π<i>r</i><sup>2</sup>) = <i>Q</i>/ε<sub>0</sub> ⇒ <i>E</i> = (1/(4πε<sub>0</sub>))(<i>Q</i>/<i>r</i><sup>2</sup>) (<i>r</i> > <i>R</i>)<br>The shell behaves exactly like a point charge <i>Q</i> sitting at its centre. At the surface, <i>E</i> = (1/(4πε<sub>0</sub>))(<i>Q</i>/<i>R</i><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Inside (<i>r</i> < <i>R</i>):</b> A Gaussian sphere of radius <i>r</i> < <i>R</i> lies entirely inside the shell, so it encloses <b>no charge</b> (<i>Q</i><sub>enc</sub> = 0):<br><i>E</i> (4π<i>r</i><sup>2</sup>) = 0/ε<sub>0</sub> ⇒ <i>E</i> = 0 (<i>r</i> < <i>R</i>)',
      },
      {
        t: 'p',
        html: 'The field is zero everywhere inside a charged shell — a deep and frequently tested result. The field jumps abruptly from 0 to <i>Q</i>/(4πε<sub>0</sub><i>R</i><sup>2</sup>) as you cross the surface.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A point charge <i>q</i> = +6 μC is placed at the centre of a cube of side 10 cm. (a) Find the total electric flux through the cube. (b) Find the flux through one face.',
        steps: [
          '<b>(a)</b> By Gauss’s law, the total flux depends only on the enclosed charge, not the shape:<br>Φ<sub>total</sub> = <i>q</i>/ε<sub>0</sub> = (6 × 10<sup>−6</sup>)/(8.854 × 10<sup>−12</sup>)',
          '<b>(b)</b> The charge sits at the centre, so by symmetry the flux divides equally among the cube’s <b>6 faces</b>:<br>Φ<sub>face</sub> = Φ<sub>total</sub>/6 = (1/6) · <i>q</i>/ε<sub>0</sub> = (6.78 × 10<sup>5</sup>)/6',
          '(Notice the side length never entered — flux is size-independent.)',
        ],
        ans: 'Total Φ = 6.78 × 10<sup>5</sup> N·m<sup>2</sup>/C; per face Φ = 1.13 × 10<sup>5</sup> N·m<sup>2</sup>/C.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A charge +<i>Q</i> sits inside a closed surface; the flux through it is Φ<sub>0</sub>. Without moving +<i>Q</i>, (i) the surface is enlarged to twice its size, and separately (ii) a charge +3<i>Q</i> is brought to a point just <b>outside</b> the surface. What is the flux in each case?',
        steps: [
          '<b>The trap:</b> Students instinctively think a bigger surface or a nearby external charge must change the flux. Neither does. Flux through a closed surface = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>, full stop.',
          '<b>(i)</b> Enlarging the surface doesn’t change what’s enclosed — still just +<i>Q</i>. Flux = Φ<sub>0</sub> (<b>unchanged</b>).',
          '<b>(ii)</b> The +3<i>Q</i> is outside, so <i>Q</i><sub>enc</sub> is still +<i>Q</i>. Its field lines enter one part of the surface and leave another, contributing zero net flux. Flux = Φ<sub>0</sub> (<b>unchanged</b>).',
          '<b>The shortcut:</b> only ask “what’s inside?”',
        ],
        ans: 'Φ<sub>0</sub> in both cases.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (two parallel sheets — Gauss + superposition)',
        fig: 'p12-01-fig-1.13',
        q: 'Two large parallel sheets carry uniform surface densities +<i>σ</i> and −<i>σ</i>. Find the field (a) in the region between the sheets, and (b) in the regions outside.',
        steps: [
          '<b>Setup.</b> Each sheet alone produces a uniform field <i>E</i><sub>0</sub> = <i>σ</i>/(2ε<sub>0</sub>), pointing away from the +<i>σ</i> sheet and towards the −<i>σ</i> sheet. Use superposition.',
          '<b>(a) Between the sheets:</b> The +<i>σ</i> sheet pushes field to the right; the −<i>σ</i> sheet pulls field to the right as well — they <b>add</b>:<br><i>E</i><sub>between</sub> = <i>σ</i>/(2ε<sub>0</sub>) + <i>σ</i>/(2ε<sub>0</sub>) = <i>σ</i>/ε<sub>0</sub><br>directed from the positive sheet to the negative sheet.',
          '<b>(b) Outside (either region):</b> The two sheets’ fields point in opposite directions and <b>cancel</b>:<br><i>E</i><sub>outside</sub> = <i>σ</i>/(2ε<sub>0</sub>) − <i>σ</i>/(2ε<sub>0</sub>)',
          'This is the ideal parallel-plate capacitor field — and the result drops straight out of Gauss + superposition.',
        ],
        ans: '<i>E</i> = <i>σ</i>/ε<sub>0</sub> between, 0 outside.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (non-uniform volume charge density)',
        q: 'A solid sphere of radius <i>R</i> carries a volume charge density that varies as <i>ρ</i>(<i>r</i>) = <i>ρ</i><sub>0</sub>(1 − <i>r</i>/<i>R</i>) for <i>r</i> ≤ <i>R</i>. Find the electric field (a) at an interior point <i>r</i> < <i>R</i>, and (b) at an exterior point <i>r</i> > <i>R</i>. Verify the two expressions agree at <i>r</i> = <i>R</i>.',
        steps: [
          '<b>(a) Interior (<i>r</i> < <i>R</i>).</b> Gauss’s law needs the charge enclosed within radius <i>r</i>. Integrate over spherical shells of thickness d<i>r</i>′ (volume 4π<i>r</i>′<sup>2</sup>d<i>r</i>′):<br><i>Q</i><sub>enc</sub> = ∫<sub>0</sub><sup><i>r</i></sup> <i>ρ</i><sub>0</sub>(1 − <i>r</i>′/<i>R</i>) 4π<i>r</i>′<sup>2</sup> d<i>r</i>′ = 4π<i>ρ</i><sub>0</sub> ∫<sub>0</sub><sup><i>r</i></sup> (<i>r</i>′<sup>2</sup> − <i>r</i>′<sup>3</sup>/<i>R</i>) d<i>r</i>′ = 4π<i>ρ</i><sub>0</sub>(<i>r</i><sup>3</sup>/3 − <i>r</i><sup>4</sup>/(4<i>R</i>))',
          'Apply Gauss’s law over a sphere of radius <i>r</i>:<br><i>E</i> (4π<i>r</i><sup>2</sup>) = <i>Q</i><sub>enc</sub>/ε<sub>0</sub> ⇒ <i>E</i> = (<i>ρ</i><sub>0</sub>/(ε<sub>0</sub><i>r</i><sup>2</sup>))(<i>r</i><sup>3</sup>/3 − <i>r</i><sup>4</sup>/(4<i>R</i>))',
          '<b>(b) Exterior (<i>r</i> > <i>R</i>).</b> Now the full charge is enclosed:<br><i>Q</i> = 4π<i>ρ</i><sub>0</sub>(<i>R</i><sup>3</sup>/3 − <i>R</i><sup>3</sup>/4) = 4π<i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>(1/12) = π<i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>/3<br><i>E</i> (4π<i>r</i><sup>2</sup>) = <i>Q</i>/ε<sub>0</sub>',
          '<b>Verification at <i>r</i> = <i>R</i>.</b> Interior: (<i>ρ</i><sub>0</sub>/ε<sub>0</sub>)(<i>R</i>/3 − <i>R</i>/4) = <i>ρ</i><sub>0</sub><i>R</i>/(12ε<sub>0</sub>). Exterior: <i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>/(12ε<sub>0</sub><i>R</i><sup>2</sup>) = <i>ρ</i><sub>0</sub><i>R</i>/(12ε<sub>0</sub>). <b>They match</b> — the field is continuous across the surface, confirming both results.',
        ],
        ans: '(a) <i>E</i> = (<i>ρ</i><sub>0</sub>/ε<sub>0</sub>)(<i>r</i>/3 − <i>r</i><sup>2</sup>/(4<i>R</i>)) (<i>r</i> < <i>R</i>); (b) <i>E</i> = <i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>/(12ε<sub>0</sub><i>r</i><sup>2</sup>) (<i>r</i> > <i>R</i>).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A uniform electric field <i>E</i> = 5 × 10<sup>3</sup> N/C passes through a square of side 20 cm. Find the flux when the square’s normal makes (a) 0° and (b) 60° with the field.',
            a: '(a) 200 N·m<sup>2</sup>/C; (b) 100 N·m<sup>2</sup>/C.',
          },
          {
            q: '[NEET] A point charge is placed at one corner of a cube. What fraction of the total flux passes through the cube? (Hint: think about how many cubes would surround the charge.)',
            a: '1/8 of the total (Φ = <i>q</i>/(8ε<sub>0</sub>)).',
          },
          {
            q: '[JEE Main] An infinite line charge produces a field of 9 × 10<sup>4</sup> N/C at a perpendicular distance of 2 cm. Find the linear charge density <i>λ</i>.',
            a: '<i>λ</i> = 2πε<sub>0</sub><i>rE</i> = <i>rE</i>/(2<i>k</i>) = (0.02)(9 × 10<sup>4</sup>)/(2(9 × 10<sup>9</sup>)) = 1 × 10<sup>−7</sup> C/m.',
          },
          {
            q: '[JEE Main] A thin spherical shell of radius 20 cm carries charge 5 μC. Find the field (a) at 30 cm and (b) at 10 cm from the centre.',
            a: '(a) <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup> = 5 × 10<sup>5</sup> N/C; (b) <i>E</i> = 0 (inside the shell).',
          },
          {
            q: '[JEE Advanced] A solid sphere of radius <i>R</i> has uniform volume charge density <i>ρ</i>. Show that the field at an interior point (<i>r</i> < <i>R</i>) grows linearly as <i>E</i> = <i>ρr</i>/(3ε<sub>0</sub>).',
            a: 'Enclose <i>Q</i><sub>enc</sub> = <i>ρ</i> · (4/3)π<i>r</i><sup>3</sup>; Gauss gives <i>E</i> 4π<i>r</i><sup>2</sup> = <i>ρ</i>(4/3)π<i>r</i><sup>3</sup>/ε<sub>0</sub> ⇒ <i>E</i> = <i>ρr</i>/(3ε<sub>0</sub>).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A closed surface encloses a net charge <i>q</i>. If the shape of the surface is changed (keeping <i>q</i> inside) and an extra charge is placed outside it, the net flux through the surface:',
        opts: [
          {
            label: 'increases',
            nudge: '<b>(A)</b> and <b>(D)</b> tempt students who think a bigger/odd surface or a nearby charge alters flux.',
          },
          {
            label: 'becomes zero',
            nudge: '<b>(B)</b> is for those who confuse “external charge gives zero flux” (true for that charge’s contribution) with “total flux is zero” (false — there’s still <i>q</i> inside).',
          },
          { label: 'remains <i>q</i>/ε<sub>0</sub>', nudge: null },
          {
            label: 'depends on the new shape',
            nudge: '<b>(A)</b> and <b>(D)</b> tempt students who think a bigger/odd surface or a nearby charge alters flux.',
          },
        ],
        correct: 2,
        solution: 'Gauss’s law: net flux = <i>Q</i><sub>enc</sub>/ε<sub>0</sub>, independent of surface shape and of any external charge. Both changes leave <i>Q</i><sub>enc</sub> = <i>q</i> untouched.',
      },
      {
        t: 'mcq',
        q: 'The field just outside a large conducting plate of surface density <i>σ</i>, and the field due to a non-conducting infinite sheet of the same <i>σ</i>, are respectively:',
        opts: [
          {
            label: '<i>σ</i>/(2ε<sub>0</sub>), <i>σ</i>/ε<sub>0</sub>',
            nudge: '<b>(A)</b> swaps the two — the single most common wrong answer.',
          },
          { label: '<i>σ</i>/ε<sub>0</sub>, <i>σ</i>/(2ε<sub>0</sub>)', nudge: null },
          {
            label: 'both <i>σ</i>/(2ε<sub>0</sub>)',
            nudge: '<b>(C)</b> and <b>(D)</b> wrongly assume the geometry is identical.',
          },
          {
            label: 'both <i>σ</i>/ε<sub>0</sub>',
            nudge: '<b>(C)</b> and <b>(D)</b> wrongly assume the geometry is identical.',
          },
        ],
        correct: 1,
        solution: 'A conductor’s surface field is <i>σ</i>/ε<sub>0</sub> (the charge has a conductor behind it, field exists only on one side, so the pillbox has one active cap). A thin non-conducting sheet radiates both ways, giving <i>σ</i>/(2ε<sub>0</sub>) (two active caps). This factor of 2 is one of the most punished traps in the chapter.',
      },
      {
        t: 'mcq',
        q: 'The electric field at a point inside a uniformly charged thin spherical shell is:',
        opts: [
          { label: '<i>kQ</i>/<i>r</i><sup>2</sup>', nudge: '<b>(A)</b> is the outside field — wrong region.' },
          { label: '<i>kQ</i>/<i>R</i><sup>2</sup>', nudge: '<b>(B)</b> is the surface field.' },
          { label: 'zero', nudge: null },
          {
            label: '<i>kQr</i>/<i>R</i><sup>3</sup>',
            nudge: '<b>(D)</b> is the interior field of a solid uniformly charged sphere — a tempting mix-up between shell and solid sphere.',
          },
        ],
        correct: 2,
        solution: 'A Gaussian sphere inside the shell encloses zero charge, so <i>E</i> = 0 everywhere inside.',
      },
      {
        t: 'mcq',
        q: 'The SI unit and dimensional formula of electric flux are:',
        opts: [
          {
            label: 'N/C, [M L T<sup>−3</sup> A<sup>−1</sup>]',
            nudge: '<b>(A)</b> is the unit of field, not flux (forgot to multiply by area).',
          },
          { label: 'N·m<sup>2</sup>/C, [M L<sup>3</sup> T<sup>−3</sup> A<sup>−1</sup>]', nudge: null },
          { label: 'N·m/C, [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]', nudge: '<b>(C)</b> is off by one power of length.' },
          {
            label: 'C/m<sup>2</sup>, dimensionless',
            nudge: '<b>(D)</b> is surface charge density — an unrelated quantity.',
          },
        ],
        correct: 1,
        solution: 'Flux = <i>E⃗</i> · <i>A⃗</i>, so units are (N/C)(m<sup>2</sup>) = N·m<sup>2</sup>/C, and [<i>E</i>][<i>A</i>] = [M L T<sup>−3</sup> A<sup>−1</sup>][L<sup>2</sup>] = [M L<sup>3</sup> T<sup>−3</sup> A<sup>−1</sup>].',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>“Field on the surface” vs “flux through it.”</b> The <i>E⃗</i> in ∮ <i>E⃗</i> · d<i>A⃗</i> is the total field from all charges (inside and outside). But the net flux depends only on the enclosed charge. Students wrongly conclude that external charges affect flux — they affect the field at points on the surface, yet contribute zero net flux.',
          '<b>The <i>σ</i>/(2ε<sub>0</sub>) vs <i>σ</i>/ε<sub>0</sub> trap.</b> A thin charged sheet gives <i>σ</i>/(2ε<sub>0</sub>) (field on both sides); a conductor’s surface gives <i>σ</i>/ε<sub>0</sub> (field on one side only). Tag which one the problem describes before writing anything.',
          '<b>Choosing a poor Gaussian surface.</b> Gauss’s law only helps find <i>E</i> when the surface matches the symmetry — sphere for spherical, cylinder for linear, pillbox for planar. On a random surface, <i>E</i> varies across it and can’t come out of the integral.',
          '<b>Shell vs solid sphere interior.</b> Inside a shell, <i>E</i> = 0. Inside a uniformly charged solid sphere, <i>E</i> = <i>ρr</i>/(3ε<sub>0</sub>) = <i>kQr</i>/<i>R</i><sup>3</sup> grows with <i>r</i>. Don’t merge these.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before any Gauss problem, identify the symmetry first (spherical / cylindrical / planar), then draw the matching Gaussian surface, then split the flux into faces where <i>E⃗</i> ∥ d<i>A⃗</i> (contributes <i>E</i> × area) and faces where <i>E⃗</i> ⊥ d<i>A⃗</i> (contributes zero). Half the marks are in that split. And for “flux through a closed surface” questions, never compute the field — just read off <i>Q</i><sub>enc</sub>/ε<sub>0</sub>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Flux',
            note: 'Φ<sub><i>E</i></sub> = <i>E⃗</i> · <i>A⃗</i> = <i>EA</i> cos <i>θ</i>; general Φ<sub><i>E</i></sub> = ∫ <i>E⃗</i> · d<i>A⃗</i>. Unit N·m<sup>2</sup>/C, [M L<sup>3</sup> T<sup>−3</sup> A<sup>−1</sup>].',
          },
          {
            f: 'Gauss’s law',
            note: '∮ <i>E⃗</i> · d<i>A⃗</i> = <i>Q</i><sub>enc</sub>/ε<sub>0</sub> — shape-independent; external charges give zero net flux.',
          },
          { f: 'Line charge', note: '<i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>) (∝ 1/<i>r</i>, cylindrical surface).' },
          {
            f: 'Plane sheet',
            note: '<i>E</i> = <i>σ</i>/(2ε<sub>0</sub>) (uniform; pillbox). <b>Conductor surface:</b> <i>E</i> = <i>σ</i>/ε<sub>0</sub>.',
          },
          {
            f: 'Spherical shell',
            note: 'outside <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>; surface <i>E</i> = <i>kQ</i>/<i>R</i><sup>2</sup>; inside <i>E</i> = 0.',
          },
          {
            f: 'Solid sphere (uniform <i>ρ</i>)',
            note: 'inside <i>E</i> = <i>ρr</i>/(3ε<sub>0</sub>); outside <i>E</i> = <i>kQ</i>/<i>r</i><sup>2</sup>.',
          },
          {
            f: 'Point charge in a cube',
            note: 'total flux <i>q</i>/ε<sub>0</sub>; per face <i>q</i>/(6ε<sub>0</sub>); at a corner <i>q</i>/(8ε<sub>0</sub>).',
          },
        ],
        aids: [
          '“Flux counts what’s inside — shape and outsiders don’t matter.”',
          '“Sheet halves it (<i>σ</i>/(2ε<sub>0</sub>)), conductor doesn’t (<i>σ</i>/ε<sub>0</sub>).”',
          '“Inside a shell, nothing; inside a solid, linear.”',
          '“Match the surface to the symmetry.”',
        ],
      },
    ],
  },
];
