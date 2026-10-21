import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 07 and the four Additional Topics, word for word from the
 * Class 11 Physics Master Reference, pages 655 to 674: Surface Tension and
 * Capillarity (pp. 655 to 663), split at the book's Sections 1 to 8, with
 * Figures 9.12, 9.13 and 9.14 (captions p. 657, drawn on p. 658); then the
 * addenda's shared opening (p. 664, set at the head of Addendum A), A Hydrostatic
 * Force on Plane Surfaces and Centre of Pressure (pp. 664 to 666), B Hydrostatic
 * Force on Curved Surfaces (pp. 667 to 669), C Stability of Floating Bodies:
 * Metacentric Height (pp. 670 to 671) and D Viscous Flow in Non-Circular Ducts:
 * Parallel Plates and Annuli (pp. 672 to 674). The addenda print no drawings.
 */
export const TOPICS: Topic[] = [
  {
    n: '07',
    title: 'Surface Tension and Capillarity',
    kalam: 'Surface tension S = F/L — force per unit length; surface acts like a stretched membrane minimising area.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield, formula-rich subtopic that closes the chapter. CBSE Boards ask the definition of surface tension/surface energy, the relation between them, and capillary rise (2–5 marks), plus the conceptual angle-of-contact question. JEE Main reliably carries an excess-pressure or capillary-rise numerical and the drop-splitting energy problem. NEET favours the drop-vs-bubble excess-pressure trap and the temperature/impurity behaviour. JEE Advanced builds droplet-coalescence-with-heating, double-bubble, and insufficient-length capillary problems.',
      },
      {
        t: 'p',
        html: 'Watch a water strider skate across a pond without sinking, or a sewing needle laid gently flat float on water though steel is eight times denser. Notice how rain collects into near-perfect spherical beads on a freshly waxed car, and how water climbs up the thin stem of a cotton wick against gravity. All of these everyday wonders trace back to one property of liquid surfaces: <b>surface tension</b> — the tendency of a liquid surface to behave like a stretched elastic membrane, always trying to shrink to the smallest possible area.',
      },
      {
        t: 'p',
        html: 'Where does this “skin” come from? Molecules in a liquid attract their neighbours (these are <b>cohesive forces</b>). A molecule deep inside the liquid is pulled equally in all directions — up, down, sideways — so the net force on it is zero. But a molecule right at the surface has liquid below and beside it, and only air above. With no neighbours pulling up, it feels a net inward pull. Every surface molecule is tugged toward the bulk, so the surface is squeezed taut, like the stretched skin of a drum. To create more surface, you must drag molecules from the comfortable interior up to the surface against this inward pull — which costs energy. That is why liquids minimise their surface area, and why a free drop, having no other constraints, pulls itself into a sphere: a sphere has the least surface area for a given volume.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the surface as a perpetually shrinking sheet of stretched rubber. Cut an imaginary line anywhere on it, and the rubber on each side pulls the other inward along the surface, perpendicular to the line. The force per unit length of this line is the surface tension, <i>S</i>. Equivalently — and this is the second face of the same coin — every unit of new surface area you create stores a fixed amount of potential energy, called the <b>surface energy</b>. The two views are numerically identical: surface tension (force per unit length, N/m) equals surface energy (energy per unit area, J/m<sup>2</sup>). Pulling a wire to stretch a film and counting the work done gives the same number as measuring the force per length directly.',
      },
      {
        t: 'p',
        html: 'This single idea blossoms into three big consequences. First, a curved liquid surface has higher pressure on its concave side — the membrane’s inward squeeze must be balanced by extra internal pressure, giving the <b>excess pressure</b> inside drops and bubbles. Second, when a liquid meets a solid, the competition between cohesion (liquid-to-liquid) and <b>adhesion</b> (liquid-to-solid) decides the shape of the surface where they meet — the <b>angle of contact</b>. If adhesion wins (water on clean glass), the liquid climbs the wall and the surface curves up (concave meniscus, wetting). If cohesion wins (mercury on glass), the liquid pulls away and the surface bulges down (convex meniscus, non-wetting). Third, in a narrow tube, this wall-climbing plus the surface tension drags the whole liquid column up (or, for mercury, pushes it down) — the phenomenon of <b>capillarity</b>, which carries water up the soil to plant roots and oil up a lamp wick.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) Surface tension is a property of the interface between two media (usually liquid-air); it is not a property of a single substance in isolation. (2) It <b>decreases with temperature</b>, falling to zero at the liquid’s critical temperature — the surface vanishes there. (3) <b>Impurities matter:</b> highly soluble impurities (like common salt) raise it, while sparingly soluble ones (soap, detergents) lower it. (4) The capillary formula <i>h</i> = 2<i>S</i> cos <i>θ</i>/(<i>rρg</i>) assumes a clean, narrow, vertical cylindrical tube and a spherical meniscus (hemispherical when <i>θ</i> = 0); it fails for wide tubes or tubes of insufficient length (where the meniscus simply flattens rather than overflowing).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Surface tension',
        main: 'force per unit length acting perpendicular to an imaginary line on the surface:<br><i>S</i> = <i>F</i>/<i>L</i>',
        legend: [],
        note: '• <b>SI unit:</b> N m<sup>−1</sup>; <b>CGS unit:</b> dyne cm<sup>−1</sup> (1 N m<sup>−1</sup> = 10<sup>3</sup> dyne cm<sup>−1</sup>).<br>• <b>Dimensional formula:</b> [<i>S</i>] = [M L T<sup>−2</sup>]/[L] = [M L<sup>0</sup> T<sup>−2</sup>] = [M T<sup>−2</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Surface energy',
        main: 'work done to increase surface area by unit amount; numerically equal to surface tension:<br><i>E</i> = <i>W</i>/Δ<i>A</i> = <i>S</i>',
        legend: [],
        note: '(SI unit J m<sup>−2</sup>)',
      },
      {
        t: 'formula',
        kicker: 'Work to change area',
        main: 'for a film/soap bubble with <b>two</b> surfaces: <i>W</i> = <i>S</i> · 2 Δ<i>A</i><sub>geom</sub><br>for a single-surface drop: <i>W</i> = <i>S</i> · Δ<i>A</i>',
        legend: [],
        note: '(account for number of surfaces)',
      },
      {
        t: 'formula',
        kicker: 'Forces to detach objects from a liquid surface',
        main: 'Straight wire of length <i>ℓ</i>: <i>F</i> = 2<i>Sℓ</i> (film has two surfaces).<br>Thin ring of radius <i>r</i>: <i>F</i> = 4π<i>rS</i> (inner + outer circumference).',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Excess pressure (pressure inside minus pressure outside)',
        main: 'Liquid drop (one surface): Δ<i>P</i> = 2<i>S</i>/<i>r</i><br>Air bubble inside a liquid (one surface): Δ<i>P</i> = 2<i>S</i>/<i>r</i><br>Soap bubble in air (two surfaces): Δ<i>P</i> = 4<i>S</i>/<i>r</i>',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Angle of contact <i>θ</i>',
        html: 'the angle between the solid surface and the tangent to the liquid surface at the point of contact, measured inside the liquid. <i>θ</i> < 90° ⇒ wetting (concave meniscus, adhesion > cohesion); <i>θ</i> > 90° ⇒ non-wetting (convex meniscus, cohesion > adhesion). <i>θ</i> decreases with rising temperature.',
      },
      {
        t: 'formula',
        kicker: 'Capillary rise (Jurin’s law)',
        main: '<i>h</i> = 2<i>S</i> cos <i>θ</i>/(<i>rρg</i>) = 2<i>S</i>/(<i>Rρg</i>)',
        legend: ['<i>r</i> = tube radius', '<i>R</i> = <i>r</i>/cos <i>θ</i> = radius of the meniscus', '<i>ρ</i> = liquid density'],
        note: 'Key scaling: <i>h</i> ∝ 1/<i>r</i> (narrower tube ⇒ higher rise). For <i>θ</i> > 90° (mercury), cos <i>θ</i> < 0 and <i>h</i> is negative — a depression.',
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      { t: 'p', html: '<b>Derivation 1 — Relation between surface tension and surface energy.</b>' },
      { t: 'fig', id: 'p11-09-fig-9.12' },
      {
        t: 'p',
        html: '<b>Assumption:</b> a soap film stretched on a U-frame with a sliding wire of length <i>ℓ</i>; the film has two surfaces (front and back).<br><br>The film pulls the sliding wire inward with a force <i>F</i> = <i>S</i> × 2<i>ℓ</i> (the factor 2 because the film has two surfaces, each contributing a tension along the edge of length <i>ℓ</i>). To extend the film, pull the wire outward by a small distance <i>x</i> against this force. <b>Physical reasoning:</b> the work done against surface tension is stored as the extra potential energy of the newly created surface. Work done:<br><i>W</i> = <i>F</i> · <i>x</i> = 2<i>Sℓx</i><br>The increase in surface area (both faces) is Δ<i>A</i> = 2(<i>ℓx</i>). By energy conservation this work equals the surface energy stored, <i>E</i> · Δ<i>A</i>:<br>2<i>Sℓx</i> = <i>E</i> · (2<i>ℓx</i>)   ⟹   <i>S</i> = <i>E</i><br>Surface tension equals surface energy per unit area, numerically and dimensionally.',
      },
      { t: 'p', html: '<b>Derivation 2 — Excess pressure inside a soap bubble.</b>' },
      { t: 'fig', id: 'p11-09-fig-9.13' },
      {
        t: 'p',
        html: '<b>Assumption:</b> a spherical soap bubble of radius <i>R</i> in equilibrium; surface tension <i>S</i>; a soap bubble has <b>two</b> liquid-air surfaces.<br><br>Consider one hemisphere. Two forces act across the flat circular boundary where it joins the other half:<br>• The surface-tension pull holding the halves together, around the circumference 2π<i>R</i>, for each of the two surfaces: <i>F</i><sub>ST</sub> = 2 × (2π<i>R</i>) <i>S</i> = 4π<i>RS</i>.<br>• The outward force from the excess pressure Δ<i>P</i> acting over the projected circular area π<i>R</i><sup>2</sup>: <i>F</i><sub><i>P</i></sub> = Δ<i>P</i> · π<i>R</i><sup>2</sup>.<br><br><b>Physical reasoning:</b> in equilibrium the outward pressure force exactly balances the inward surface-tension pull, otherwise the bubble would expand or collapse:<br>Δ<i>P</i> · π<i>R</i><sup>2</sup> = 4π<i>RS</i><br>Δ<i>P</i> = 4<i>S</i>/<i>R</i><br>For a <b>liquid drop</b> (a single surface, not two), the surface-tension force is halved to 2π<i>RS</i>, giving Δ<i>P</i> = 2<i>S</i>/<i>R</i>. The factor-of-two difference between bubble and drop is purely the count of surfaces.',
      },
      { t: 'p', html: '<b>Derivation 3 — Capillary rise (Jurin’s law).</b>' },
      { t: 'fig', id: 'p11-09-fig-9.14' },
      {
        t: 'p',
        html: '<b>Assumption:</b> a clean, narrow, vertical tube of radius <i>r</i> dipped in a wetting liquid (angle of contact <i>θ</i>, density <i>ρ</i>). The meniscus is a spherical cap of radius <i>R</i> = <i>r</i>/cos <i>θ</i>.<br><br>Below the concave meniscus, the pressure is lower than atmospheric by the excess pressure 2<i>S</i>/<i>R</i>.<br><b>Physical reasoning:</b> outside the tube, just below the flat liquid surface, the pressure is atmospheric (<i>P</i><sub>0</sub>); inside the tube, just below the curved meniscus, it is <i>P</i><sub>0</sub> − 2<i>S</i>/<i>R</i>. Since pressure must be equal at the same horizontal level in a connected liquid, liquid flows up the tube to make up this deficit, rising until the weight of the raised column produces a matching hydrostatic pressure <i>ρgh</i>:<br><i>ρgh</i> = 2<i>S</i>/<i>R</i> = 2<i>S</i> cos <i>θ</i>/<i>r</i><br><i>h</i> = 2<i>S</i> cos <i>θ</i>/(<i>rρg</i>)<br>This is Jurin’s law: <i>h</i> ∝ 1/<i>r</i>, so the narrower the tube, the higher the rise. For mercury on glass (<i>θ</i> = 135°, cos <i>θ</i> < 0), <i>h</i> is negative — the liquid is depressed.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Calculate the work done in blowing a soap bubble of radius 3.0 cm. The surface tension of the soap solution is 0.030 N m<sup>−1</sup>. (Assume the bubble is blown from a thin film, starting from negligible initial size.)',
        steps: [
          '<b>Given:</b> <i>r</i> = 3.0 cm = 0.030 m, <i>S</i> = 0.030 N m<sup>−1</sup>.',
          'A soap bubble has <b>two</b> surfaces, so the total surface area created is twice the geometric sphere area:<br>Δ<i>A</i> = 2 × 4π<i>r</i><sup>2</sup> = 8π<i>r</i><sup>2</sup> = 8π(0.030)<sup>2</sup> = 8π(9.0 × 10<sup>−4</sup>) = 2.26 × 10<sup>−2</sup> m<sup>2</sup>',
          'Work done = surface tension × area created:<br><i>W</i> = <i>S</i> · Δ<i>A</i> = 0.030 × 2.26 × 10<sup>−2</sup>',
          '(Had this been a liquid drop of the same radius, the work would be exactly half, since a drop has only one surface.)',
        ],
        ans: '6.8 × 10<sup>−4</sup> J',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A spherical raindrop and a soap bubble have the same radius and are made from liquids of the same surface tension. Find the ratio of the excess pressure inside the soap bubble to that inside the raindrop.',
        steps: [
          '<b>The trap to avoid:</b> treating both as 2<i>S</i>/<i>r</i> (giving a wrong ratio of 1 : 1). A soap bubble has <b>two</b> surfaces, a drop only <b>one</b>.',
          '<b>Speed approach.</b><br>Δ<i>P</i><sub>bubble</sub>/Δ<i>P</i><sub>drop</sub> = (4<i>S</i>/<i>r</i>)/(2<i>S</i>/<i>r</i>)',
          '<b>Mental check:</b> the soap bubble’s two surfaces double its excess pressure compared with a single-surface drop of the same size. “Bubble beats drop, two to one” — anchor it on the surface count.',
        ],
        ans: '2 : 1',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (capillary rise + Jurin’s law scaling)',
        q: 'A capillary tube of radius 0.25 mm is dipped vertically in water (surface tension 0.072 N m<sup>−1</sup>, density 1000 kg m<sup>−3</sup>, angle of contact 0°). (a) Find the height to which water rises. (b) If a tube of half this radius is used instead, find the new height. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '(a) With cos 0° = 1:<br><i>h</i> = 2<i>S</i> cos <i>θ</i>/(<i>rρg</i>) = (2 × 0.072 × 1)/((0.25 × 10<sup>−3</sup>)(1000)(10)) = 0.144/2.5 = 0.0576 m',
          '(b) By Jurin’s law, <i>h</i> ∝ 1/<i>r</i>. Halving the radius <b>doubles</b> the rise:<br><i>h</i>′ = 2 × 5.76',
          'No need to recompute from scratch — the scaling relation does the work, which is the fast route in an exam.',
        ],
        ans: '(a) 5.76 cm; (b) 11.52 cm',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (surface energy + volume conservation + calorimetry)',
        q: 'A large number <i>n</i> of identical water droplets, each of radius <i>r</i>, coalesce to form a single spherical drop of radius <i>R</i>. Assuming all the surface energy released is used to heat the water, derive an expression for the temperature rise Δ<i>T</i> in terms of <i>S</i>, density <i>ρ</i>, specific heat <i>c</i>, <i>r</i>, and <i>R</i>. Then evaluate it for <i>n</i> = 10<sup>6</sup>, <i>r</i> = 1.0 × 10<sup>−4</sup> m, <i>S</i> = 0.072 N m<sup>−1</sup>, <i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>c</i> = 4200 J kg<sup>−1</sup> K<sup>−1</sup>.',
        steps: [
          '<b>Step 1 — Volume conservation</b> (mass is conserved on merging):<br><i>n</i> · (4/3)π<i>r</i><sup>3</sup> = (4/3)π<i>R</i><sup>3</sup>   ⟹   <i>nr</i><sup>3</sup> = <i>R</i><sup>3</sup>',
          '<b>Step 2 — Energy released.</b> The total surface area shrinks as droplets merge (less surface for the same volume), and surface energy = <i>S</i> × area is released:<br>Δ<i>E</i> = <i>S</i>(<i>n</i> · 4π<i>r</i><sup>2</sup> − 4π<i>R</i><sup>2</sup>) = 4π<i>S</i>(<i>nr</i><sup>2</sup> − <i>R</i><sup>2</sup>)',
          'Using <i>nr</i><sup>3</sup> = <i>R</i><sup>3</sup>, write <i>nr</i><sup>2</sup> = <i>R</i><sup>3</sup>/<i>r</i>:<br>Δ<i>E</i> = 4π<i>S</i>(<i>R</i><sup>3</sup>/<i>r</i> − <i>R</i><sup>2</sup>) = 4π<i>SR</i><sup>3</sup>(1/<i>r</i> − 1/<i>R</i>)',
          '<b>Step 3 — Heat balance.</b> The mass of the final drop is <i>m</i> = <i>ρ</i> · (4/3)π<i>R</i><sup>3</sup>, and Δ<i>E</i> = <i>mc</i> Δ<i>T</i>:<br>Δ<i>T</i> = Δ<i>E</i>/(<i>mc</i>) = (4π<i>SR</i><sup>3</sup>(1/<i>r</i> − 1/<i>R</i>))/(<i>ρ</i> · (4/3)π<i>R</i><sup>3</sup> · <i>c</i>)',
          '<b>Step 4 — Numerical.</b> With <i>n</i> = 10<sup>6</sup>, <i>R</i> = <i>n</i><sup>1/3</sup><i>r</i> = 100<i>r</i> = 1.0 × 10<sup>−2</sup> m:<br>Δ<i>T</i> = (3(0.072)/(1000 × 4200))(1/10<sup>−4</sup> − 1/10<sup>−2</sup>) = (5.14 × 10<sup>−8</sup>)(10 000 − 100)',
          '<b>Insight:</b> the rise is tiny but real, and the structure (1/<i>r</i> − 1/<i>R</i>) shows the smaller the original droplets, the larger the heating — because tiny droplets pack enormous surface area per unit volume. When <i>R</i> ≫ <i>r</i>, Δ<i>T</i> ≈ 3<i>S</i>/(<i>ρcr</i>).',
        ],
        ans: 'Δ<i>T</i> = (3<i>S</i>/(<i>ρc</i>))(1/<i>r</i> − 1/<i>R</i>); Δ<i>T</i> ≈ 5.1 × 10<sup>−4</sup> K',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (capillary tube of insufficient length)',
        q: 'Water would rise to a height of 8.0 cm in a given capillary tube. The tube is now cut so that only 5.0 cm of it projects above the water surface. Does the water overflow? If not, find the radius of curvature of the meniscus at the top. (Angle of contact 0°.)',
        steps: [
          '<b>Key idea:</b> water <b>never overflows</b> from a short tube. The product (rise) × (meniscus radius) is fixed by the surface tension, <i>hR</i> = 2<i>S</i>/(<i>ρg</i>) = constant. If the available length <i>h</i>′ is less than the natural rise <i>h</i>, the water climbs to the top and the meniscus simply flattens (its radius increases) until equilibrium is restored.',
          'Let the natural meniscus radius (for full rise <i>h</i> = 8.0 cm) be <i>R</i><sub>0</sub> — equal to the tube radius <i>r</i> since <i>θ</i> = 0. With the tube length limited to <i>h</i>′ = 5.0 cm, the new meniscus radius <i>R</i>′ satisfies <i>hR</i><sub>0</sub> = <i>h</i>′<i>R</i>′:<br><i>R</i>′ = <i>R</i><sub>0</sub> <i>h</i>/<i>h</i>′ = <i>r</i> × 8.0/5.0',
          'The water rises to the top (5.0 cm) and stops; the meniscus becomes less curved (radius 1.6× the tube radius). No overflow — the classic resolution of this favourite trap.',
        ],
        ans: '1.6<i>r</i>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (rise between parallel plates + combined bubbles)',
        q: '(a) Two parallel glass plates separated by a small distance <i>d</i> are dipped vertically in water (surface tension <i>S</i>, density <i>ρ</i>, angle of contact 0°). Derive the height to which water rises between them. (b) Two soap bubbles of radii <i>a</i> and <i>b</i> (<i>a</i> > <i>b</i>) coalesce so they share a common interfacial film. Find the radius of curvature of that common film.',
        steps: [
          '(a) For two plates a distance <i>d</i> apart, the meniscus is cylindrical (curved in one direction only), so the excess pressure below it is <i>S</i>/<i>R</i> with <i>R</i> = <i>d</i>/2. Balancing against the hydrostatic pressure of the raised column:<br>2<i>S</i>/<i>d</i> = <i>ρgh</i>',
          'Note the contrast with a cylindrical tube (<i>h</i> = 2<i>S</i>/(<i>rρg</i>)): plates give 2<i>S</i>/(<i>ρgd</i>) (one curvature), a tube gives 2<i>S</i>/(<i>rρg</i>) (two curvatures); for <i>d</i> = 2<i>r</i> plates rise half as high.',
          '(b) The smaller bubble has the larger internal excess pressure (4<i>S</i>/<i>r</i> grows as <i>r</i> shrinks), so air pushes from the small bubble toward the large one and the common film bulges into the larger bubble. The excess pressure across the common film equals the difference of the two individual excess pressures:<br>4<i>S</i>/<i>R</i> = 4<i>S</i>/<i>b</i> − 4<i>S</i>/<i>a</i>   ⟹   1/<i>R</i> = 1/<i>b</i> − 1/<i>a</i>',
          'The common film curves toward the bigger bubble, with radius <i>R</i> = <i>ab</i>/(<i>a</i> − <i>b</i>) — a standard JEE Advanced result.',
        ],
        ans: '(a) <i>h</i> = 2<i>S</i>/(<i>ρgd</i>); (b) <i>R</i> = <i>ab</i>/(<i>a</i> − <i>b</i>)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define surface tension and state its SI unit and dimensional formula. Explain in one line why small liquid drops are spherical.',
            a: 'Spherical because a sphere has minimum surface area (hence minimum surface energy) for a given volume.',
          },
          {
            q: '[NEET] Water rises in a capillary tube to a height <i>h</i>. If the same tube is dipped in a liquid of half the surface tension, double the density, and the same (zero) angle of contact, the rise will be: <i>h</i>, <i>h</i>/2, <i>h</i>/4, or 2<i>h</i>? Justify.',
            a: '<i>h</i>/4.',
          },
          {
            q: '[JEE Main] The excess pressure inside a soap bubble of radius 2.0 cm is 6.0 Pa. Find the surface tension of the soap solution.',
            a: '<i>S</i> = 0.030 N m<sup>−1</sup>.',
          },
          {
            q: '[JEE Main] A water drop of radius 1.0 mm is broken into 1000 identical smaller droplets. Surface tension of water is 0.072 N m<sup>−1</sup>. Find the work done in the process.',
            a: '<i>W</i> ≈ 8.1 × 10<sup>−6</sup> J.',
          },
          {
            q: '[JEE Advanced] Two soap bubbles of radii <i>a</i> and <i>b</i> (<i>a</i> > <i>b</i>) coalesce to form a single bubble. Assuming the temperature stays constant and the external pressure is <i>P</i><sub>0</sub>, show that the radius <i>R</i> of the combined bubble satisfies a relation involving <i>P</i><sub>0</sub>, <i>S</i>, <i>a</i>, <i>b</i>. (Hint: conserve the total number of air molecules, i.e. apply <i>PV</i> = const for the trapped air, using the excess-pressure relation for each bubble.)',
            a: '<i>P</i><sub>0</sub>(<i>R</i><sup>3</sup> − <i>a</i><sup>3</sup> − <i>b</i><sup>3</sup>) + 4<i>S</i>(<i>R</i><sup>2</sup> − <i>a</i><sup>2</sup> − <i>b</i><sup>2</sup>) = 0.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The excess pressure inside a soap bubble of radius <i>r</i> compared with that inside a liquid drop of the same radius and same surface tension is:',
        opts: [
          { label: 'Equal', nudge: '<b>(a)</b> ignores the surface count — the dominant error.' },
          { label: 'Twice', nudge: null },
          { label: 'Half', nudge: '<b>(c)</b> inverts the ratio.' },
          { label: 'Four times', nudge: '<b>(d)</b> double-counts, applying the factor of two twice.' },
        ],
        correct: 1,
        solution: 'Soap bubble: Δ<i>P</i> = 4<i>S</i>/<i>r</i> (two surfaces); liquid drop: Δ<i>P</i> = 2<i>S</i>/<i>r</i> (one surface). The ratio is 2 : 1.',
      },
      {
        t: 'mcq',
        q: 'Water rises in a capillary tube of radius <i>r</i>. If a tube of radius 2<i>r</i> is used (everything else unchanged), the height of rise becomes:',
        opts: [
          { label: '2<i>h</i>', nudge: '<b>(a)</b>/<b>(b)</b> assume rise increases with radius — backwards.' },
          { label: '4<i>h</i>', nudge: '<b>(a)</b>/<b>(b)</b> assume rise increases with radius — backwards.' },
          { label: '<i>h</i>/2', nudge: null },
          { label: '<i>h</i>/4', nudge: '<b>(d)</b> uses <i>h</i> ∝ 1/<i>r</i><sup>2</sup>, confusing with an area dependence.' },
        ],
        correct: 2,
        solution: 'By Jurin’s law <i>h</i> ∝ 1/<i>r</i>. Doubling the radius halves the rise.',
      },
      {
        t: 'mcq',
        q: 'For a liquid that does not wet the surface of a solid (e.g. mercury on glass), the angle of contact is:',
        opts: [
          { label: 'Zero', nudge: '<b>(a)</b>/<b>(b)</b> describe a wetting liquid like water on clean glass.' },
          { label: 'Acute (< 90°)', nudge: '<b>(a)</b>/<b>(b)</b> describe a wetting liquid like water on clean glass.' },
          {
            label: 'A right angle (90°)',
            nudge: '<b>(c)</b> (90°) is the special borderline case (e.g. water on silver), giving a flat surface and zero rise.',
          },
          { label: 'Obtuse (> 90°)', nudge: null },
        ],
        correct: 3,
        solution: 'Non-wetting means cohesion dominates adhesion: the meniscus is convex and the angle of contact is obtuse (mercury-glass ≈ 135°), producing a capillary depression.',
      },
      {
        t: 'mcq',
        q: 'As the temperature of a liquid is increased towards its critical temperature, its surface tension:',
        opts: [
          { label: 'Increases', nudge: '<b>(a)</b> reverses the trend.' },
          { label: 'Decreases and becomes zero at the critical temperature', nudge: null },
          { label: 'Stays constant', nudge: '<b>(c)</b> ignores the temperature dependence entirely.' },
          {
            label: 'First decreases then increases',
            nudge: '<b>(d)</b> has no physical basis for ordinary liquids (a few molten metals are exceptions, but not the general rule).',
          },
        ],
        correct: 1,
        solution: 'Rising temperature increases molecular motion and intermolecular distances, weakening the cohesive forces that cause surface tension; at the critical temperature the liquid-vapour distinction vanishes and surface tension drops to zero.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the soap bubble’s two surfaces.</b> A soap bubble has an inner and an outer surface: excess pressure 4<i>S</i>/<i>r</i>, and work to blow it = <i>S</i> × 2(4π<i>r</i><sup>2</sup>). A liquid drop or an air bubble inside a liquid has only one surface: 2<i>S</i>/<i>r</i>. Always ask “how many surfaces?” before writing the formula.',
          '<b>Inverting Jurin’s law.</b> Capillary rise <i>h</i> ∝ 1/<i>r</i> — narrower tubes give higher rise, not lower. The intuitive guess (bigger tube, more water, higher rise) is exactly wrong.',
          '<b>Muddling the angle of contact.</b> Acute (< 90°) = wetting = concave meniscus = capillary rise (water-glass). Obtuse (> 90°) = non-wetting = convex meniscus = capillary depression (mercury-glass). And <i>θ</i> decreases with temperature — as surface tension itself falls, hot water wets surfaces better, one reason it cleans better.',
          '<b>Confusing tube radius with meniscus radius.</b> In the capillary formula, <i>r</i> is the tube radius but the excess pressure uses the meniscus radius <i>R</i> = <i>r</i>/cos <i>θ</i>. They are equal only when <i>θ</i> = 0. Keep them distinct when <i>θ</i> ≠ 0.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Before any surface-tension calculation, run a two-second checklist — how many surfaces (one for a drop/air-bubble, two for a soap film/bubble), and is the angle of contact zero (so tube radius = meniscus radius)? Getting these two right disposes of the majority of exam errors in this topic. For ratio questions, lean on the scalings — Δ<i>P</i> ∝ 1/<i>r</i> and <i>h</i> ∝ 1/<i>r</i> — and you can often answer without computing <i>S</i> at all.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Surface tension</b> <i>S</i> = <i>F</i>/<i>L</i>',
            note: 'force per unit length; surface acts like a stretched membrane minimising area. SI unit N m<sup>−1</sup>; <b>dimensions</b> [M T<sup>−2</sup>].',
          },
          {
            f: '<b>Surface energy</b> = work per unit new area = <i>S</i> <b>numerically</b>. Count surfaces: film/bubble has <b>two</b>, drop has <b>one</b> (work <i>W</i> = <i>S</i> Δ<i>A</i>).',
            note: '',
          },
          {
            f: '<b>Excess pressure</b>',
            note: 'drop & air-bubble 2<i>S</i>/<i>r</i> (one surface); soap bubble 4<i>S</i>/<i>r</i> (two surfaces).',
          },
          {
            f: '<b>Angle of contact</b> <i>θ</i>',
            note: 'acute = wetting (concave, rise); obtuse = non-wetting (convex, depression); decreases with temperature.',
          },
          {
            f: '<b>Capillary rise (Jurin)</b> <i>h</i> = 2<i>S</i> cos <i>θ</i>/(<i>rρg</i>), with <i>h</i> ∝ 1/<i>r</i>. Mercury (<i>θ</i> > 90°) is depressed.',
            note: '',
          },
          {
            f: '<b>Temperature/impurities</b>',
            note: '<i>S</i> decreases with <i>T</i>, zero at critical temperature; soluble impurities raise <i>S</i>, sparingly soluble (soap) lower it.',
          },
          {
            f: '<b>Extended configurations</b>',
            note: 'between <b>parallel plates</b> <i>h</i> = 2<i>S</i>/(<i>ρgd</i>) (separation <i>d</i>); a <b>tube too short to allow full rise</b> never overflows — the meniscus flattens with <i>hR</i> = const; <b>two coalescing bubbles</b> (<i>a</i> > <i>b</i>) share a film of radius <i>R</i> = <i>ab</i>/(<i>a</i> − <i>b</i>) bulging into the larger.',
          },
        ],
        aids: [
          '“Bubble = 4, drop = 2” (excess pressure, surface count).',
          '“Narrow tube, high climb” (<i>h</i> ∝ 1/<i>r</i>).',
          '“Acute wets, obtuse won’t.”',
          '“Hot liquid, weak skin” (surface tension falls with temperature).',
        ],
      },
    ],
  },

  {
    n: 'A',
    title: 'Hydrostatic Force on Plane Surfaces and Centre of Pressure',
    extra: true,
    kalam:
      'For an inclined or vertical plane surface, the pressure varies linearly with depth, so the total force is the integral of pressure over the area, and the resultant acts at the centre of pressure (CP), which lies below the centroid because pressure increases with depth.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The seven topics of this chapter taught you the core formulas of fluid statics and dynamics, and the worked examples covered the standard CBSE, NEET, and JEE Main patterns. Three JEE Advanced patterns remain that the chapter only hints at: (1) hydrostatic forces on curved surfaces and the centre of pressure on plane surfaces, which require integrating pressure over an area rather than using the base-pressure shortcut; (2) the metacentric height of a floating body, which decides whether a ship rights itself or capsizes — a full derivation from the chapter’s stability note; and (3) viscous flow in non-circular ducts (parallel plates and annuli), where the velocity profile and flow rate scale differently from the circular Poiseuille law. Addenda A to D supply these three patterns with complete derivations, unit-carried examples, and practice problems.',
      },
      {
        t: 'p',
        html: 'Topic 01 gave the force on a horizontal base: <i>F</i> = <i>P</i><sub>base</sub><i>A</i>. For an inclined or vertical plane surface, the pressure varies linearly with depth, so the total force is the integral of pressure over the area, and the resultant acts at the centre of pressure (CP), which lies below the centroid because pressure increases with depth. JEE Advanced regularly asks for the force on a sluice gate, a triangular dam face, or a circular porthole, and for the depth of the CP — often combined with a moment-equilibrium problem (e.g., “find the force needed to hold the gate shut”).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Choose coordinates.</b> Let the plane surface make an angle <i>θ</i> with the horizontal. Measure distance <i>y</i> along the plane from the free surface (or from the intersection of the plane with the free surface) downward. The vertical depth is <i>h</i> = <i>y</i> sin <i>θ</i>.',
          '<b>Pressure at <i>y</i>:</b> <i>P</i>(<i>y</i>) = <i>P</i><sub>0</sub> + <i>ρgy</i> sin <i>θ</i>. (If the free surface is open, <i>P</i><sub>0</sub> is atmospheric; gauge pressure is <i>ρgy</i> sin <i>θ</i>.)',
          '<b>Total force (gauge):</b> <i>F</i> = ∫ <i>P</i><sub>gauge</sub> d<i>A</i> = <i>ρg</i> sin <i>θ</i> ∫ <i>y</i> d<i>A</i> = <i>ρg</i> sin <i>θ</i> <i>ȳA</i>, where <i>ȳ</i> is the distance of the centroid from the free-surface intersection. In terms of the vertical depth of the centroid <i>h̄</i> = <i>ȳ</i> sin <i>θ</i>, this is simply <i>F</i> = <i>ρgh̄A</i> — the same as the pressure at the centroid times the area.',
          '<b>Centre of pressure (CP).</b> The moment of the resultant force about the free-surface intersection equals the integral of the pressure moments:<br><i>Fy</i><sub>CP</sub> = ∫ <i>yP</i><sub>gauge</sub> d<i>A</i> = <i>ρg</i> sin <i>θ</i> ∫ <i>y</i><sup>2</sup> d<i>A</i> = <i>ρg</i> sin <i>θ</i> <i>I</i><sub><i>xx</i>,<i>O</i></sub><br>where <i>I</i><sub><i>xx</i>,<i>O</i></sub> is the second moment of area about the intersection line (the axis in the plane at the free surface). Using <i>F</i> = <i>ρg</i> sin <i>θ</i> <i>ȳA</i>:<br><i>y</i><sub>CP</sub> = <i>I</i><sub><i>xx</i>,<i>O</i></sub>/(<i>ȳA</i>)<br>Apply the parallel-axis theorem: <i>I</i><sub><i>xx</i>,<i>O</i></sub> = <i>I</i><sub><i>xx</i>,<i>C</i></sub> + <i>Aȳ</i><sup>2</sup>, where <i>I</i><sub><i>xx</i>,<i>C</i></sub> is the second moment about a parallel axis through the centroid. Then<br><i>y</i><sub>CP</sub> = <i>ȳ</i> + <i>I</i><sub><i>xx</i>,<i>C</i></sub>/(<i>ȳA</i>)<br>The vertical depth of the CP is <i>h</i><sub>CP</sub> = <i>y</i><sub>CP</sub> sin <i>θ</i>.',
          '<b>Sign convention:</b> <i>y</i> increases downward along the plane; CP is always below the centroid (<i>y</i><sub>CP</sub> > <i>ȳ</i>).',
        ],
      },
      {
        t: 'table',
        title: 'Standard Results (Gauge Pressure, Free Surface at y = 0)',
        head: ['Shape', 'Centroid ȳ', 'Second moment about centroid', 'Centre of pressure (from free surface)'],
        rows: [
          ['Rectangle width <i>b</i>, height <i>H</i> (plane vertical, <i>θ</i> = 90°)', '<i>H</i>/2', '<i>bH</i><sup>3</sup>/12', '2<i>H</i>/3'],
          ['Rectangle width <i>b</i>, length <i>L</i> inclined at <i>θ</i>, top edge at free surface', '<i>L</i>/2', '<i>bL</i><sup>3</sup>/12', '2<i>L</i>/3'],
          ['Triangle base <i>b</i>, height <i>H</i>, vertex at free surface', '2<i>H</i>/3', '<i>bH</i><sup>3</sup>/36', '3<i>H</i>/4'],
          [
            'Circle radius <i>R</i>, centre at distance <i>ȳ</i> from free surface',
            '<i>ȳ</i>',
            'π<i>R</i><sup>4</sup>/4',
            '<i>ȳ</i> + π<i>R</i><sup>4</sup>/(4<i>ȳ</i>π<i>R</i><sup>2</sup>) = <i>ȳ</i> + <i>R</i><sup>2</sup>/(4<i>ȳ</i>)',
          ],
        ],
        note: '<i>b</i>, <i>H</i>, <i>L</i>, <i>R</i> in metres; <i>ȳ</i>, <i>y</i><sub>CP</sub> in metres; <i>F</i> in newtons; <i>ρ</i> in kg m<sup>−3</sup>; <i>g</i> in m s<sup>−2</sup>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Inclined Rectangular Gate)',
        q: 'A rectangular gate 2.0 m wide and 3.0 m long closes a tank. The gate is hinged along its top edge and makes an angle of 30° with the horizontal. The water level reaches the top edge of the gate. Find (a) the magnitude of the hydrostatic force on the gate (gauge), and (b) the distance from the hinge to the line of action of this force. Take <i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.',
        steps: [
          '<b>Given:</b> <i>b</i> = 2.0 m, <i>L</i> = 3.0 m, <i>θ</i> = 30°, <i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.',
          '<b>(a) Force.</b> The centroid is at <i>ȳ</i> = <i>L</i>/2 = 1.5 m from the hinge. Vertical depth of centroid: <i>h̄</i> = <i>ȳ</i> sin <i>θ</i> = 1.5 × sin 30° = 1.5 × 0.5 = 0.75 m. Area <i>A</i> = <i>bL</i> = 2.0 × 3.0 = 6.0 m<sup>2</sup>. Gauge force:<br><i>F</i> = <i>ρgh̄A</i> = 1000 × 10 × 0.75 × 6.0 = 4.5 × 10<sup>4</sup> N.',
          '<b>(b) Centre of pressure.</b> For a rectangle about its top edge (the hinge line), <i>I</i><sub><i>xx</i>,<i>O</i></sub> = <i>bL</i><sup>3</sup>/3 = 2.0 × 27/3 = 18.0 m<sup>4</sup>. (Or use <i>I</i><sub><i>xx</i>,<i>C</i></sub> = <i>bL</i><sup>3</sup>/12 = 4.5 m<sup>4</sup>, <i>ȳ</i> = 1.5 m, then <i>I</i><sub><i>xx</i>,<i>O</i></sub> = 4.5 + 6.0 × 1.5<sup>2</sup> = 4.5 + 13.5 = 18.0 m<sup>4</sup>.)<br><i>y</i><sub>CP</sub> = <i>I</i><sub><i>xx</i>,<i>O</i></sub>/(<i>ȳA</i>) = 18.0/(1.5 × 6.0) = 2.0 m.',
          'The resultant acts 2.0 m down the gate from the hinge. (Check: <i>y</i><sub>CP</sub> = 2<i>L</i>/3 = 2.0 m.)',
          '<b>Verification.</b> Moment of force about hinge: <i>F</i> × 2.0 = 9.0 × 10<sup>4</sup> N m. Direct moment integral: ∫<sub>0</sub><sup><i>L</i></sup> (<i>ρgy</i> sin <i>θ</i>)<i>by</i> d<i>y</i> = <i>ρgb</i> sin <i>θ</i> <i>L</i><sup>3</sup>/3 = 1000 × 10 × 2.0 × 0.5 × 9 = 9.0 × 10<sup>4</sup> N m.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Triangular Dam Face)',
        q: 'A vertical triangular dam face has base <i>b</i> = 6.0 m at the water surface and height <i>H</i> = 4.0 m (vertex at the bottom). Water stands against the face up to the top edge. Find (a) the total hydrostatic force, and (b) the depth of the centre of pressure below the water surface. Take <i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.',
        steps: [
          '<b>(a)</b> The triangle is vertical (<i>θ</i> = 90°), so depth <i>h</i> = <i>y</i>. Its base lies in the free surface and its vertex is at the bottom, so the centroid (one third of the height from the base) is at <i>ȳ</i> = <i>H</i>/3 = 4/3 m below the surface. Area <i>A</i> = ½<i>bH</i> = 12 m<sup>2</sup>.<br><i>F</i> = <i>ρgȳA</i> = 1000 × 10 × 4/3 × 12 = 1.6 × 10<sup>5</sup> N.',
          '<b>(b)</b> <i>I</i><sub><i>xx</i>,<i>C</i></sub> for triangle about centroidal axis parallel to base: <i>bH</i><sup>3</sup>/36 = 6.0 × 64/36 = 10.67 m<sup>4</sup>. <i>ȳ</i> = 4/3 m, <i>A</i> = 12 m<sup>2</sup>.<br><i>y</i><sub>CP</sub> = <i>ȳ</i> + <i>I</i><sub><i>xx</i>,<i>C</i></sub>/(<i>ȳA</i>) = 4/3 + 10.67/((4/3) × 12) = 1.333 + 10.67/16 = 1.333 + 0.667 = 2.0 m.',
          'The centre of pressure is 2.0 m below the water surface, i.e. at <i>H</i>/2. (Contrast the vertex-at-surface triangle in the table, where <i>ȳ</i> = 2<i>H</i>/3 and <i>y</i><sub>CP</sub> = 3<i>H</i>/4; here the wide edge is at the surface, so more of the area lies near the surface and both <i>ȳ</i> and <i>y</i><sub>CP</sub> are smaller.)',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A vertical circular porthole of diameter 0.50 m has its centre 3.0 m below the free surface of water. Find the hydrostatic force on the porthole and the depth of the centre of pressure. (<i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '<i>F</i> = 5.89 × 10<sup>3</sup> N; <i>h</i><sub>CP</sub> = 3.0052 m.',
          },
          {
            q: 'A rectangular gate 1.5 m wide and 2.0 m high is inclined at 60° to the horizontal. The top edge is 1.0 m below the free surface (measured vertically). Find the hydrostatic force on the gate and the distance of the CP from the top edge along the gate. (<i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '<i>F</i> = 5.6 × 10<sup>4</sup> N; the CP is 1.15 m from the top edge, measured along the gate (<i>y</i><sub>CP</sub> ≈ 2.31 m from the free-surface line).',
          },
          {
            q: 'A vertical triangular gate with base 2.0 m (horizontal) and height 3.0 m is hinged along its base. The vertex points downward. The water level is exactly at the base. Find the moment required at the hinge to keep the gate closed. (<i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '<i>M</i> = 4.5 × 10<sup>4</sup> N m.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Hydrostatic Force on Curved Surfaces',
    extra: true,
    kalam: 'The standard method resolves the resultant into horizontal and vertical components.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'For a curved surface, the hydrostatic force is not simply <i>P</i><sub>centroid</sub><i>A</i> because pressure forces have different directions. The standard method resolves the resultant into horizontal and vertical components. The horizontal component equals the force on the vertical projection of the curved surface; the vertical component equals the weight of the fluid vertically above the surface up to the free surface (or, if the fluid lies below the surface, the weight of the fluid that would fill the space up to the free surface, acting upward). JEE Advanced often puts a curved gate (quarter-cylinder, parabolic) in a tank and asks for the resultant force magnitude, direction, and line of action.',
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: 'Consider a curved surface in contact with a static fluid (density <i>ρ</i>). Work in gauge pressure.' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Horizontal component <i>F</i><sub><i>H</i></sub>.</b> Project the curved surface onto a vertical plane. <i>F</i><sub><i>H</i></sub> equals the total hydrostatic force on that projected plane area. Its line of action passes through the centre of pressure of that projected area.',
          '<b>Vertical component <i>F</i><sub><i>V</i></sub>.</b> <i>F</i><sub><i>V</i></sub> equals the weight of the fluid column vertically above the curved surface, extending up to the free surface. If the surface is a “floor” (fluid above it), <i>F</i><sub><i>V</i></sub> acts <b>downward</b> on the surface; if the surface is a “ceiling” (fluid below it), <i>F</i><sub><i>V</i></sub> acts <b>upward</b>. In magnitude, <i>F</i><sub><i>V</i></sub> = <i>ρgV</i><sub>above</sub>, where <i>V</i><sub>above</sub> is the volume of the fluid prism above the surface per unit width (or total volume for 3D).',
          '<b>Resultant:</b> <i>F</i><sub><i>R</i></sub> = √(<i>F</i><sub><i>H</i></sub><sup>2</sup> + <i>F</i><sub><i>V</i></sub><sup>2</sup>), angle <i>α</i> = tan<sup>−1</sup>(<i>F</i><sub><i>V</i></sub>/<i>F</i><sub><i>H</i></sub>) from horizontal.',
          '<b>Line of action.</b> The resultant must produce the same moment about any point as the distributed pressure. Usually, take moments about a convenient hinge or the intersection of the horizontal and vertical lines of action of <i>F</i><sub><i>H</i></sub> and <i>F</i><sub><i>V</i></sub>. For a cylindrical surface (circular arc), the pressure forces all pass through the cylinder axis, so the resultant also passes through the axis — a major shortcut.',
        ],
      },
      {
        t: 'table',
        title: 'Standard Configurations',
        head: ['Surface', 'Horizontal force', 'Vertical force', 'Resultant Direction'],
        rows: [
          [
            'Quarter-cylinder, radius <i>R</i>, fluid inside (concave to fluid), free surface level with the top edge',
            '½<i>ρgR</i><sup>2</sup> × width (on vertical projection)',
            '(π/4)<i>ρgR</i><sup>2</sup> × width (weight of the fluid in the quarter-cylinder)',
            'Acts through cylinder axis',
          ],
          [
            'Quarter-cylinder, radius <i>R</i>, fluid outside (convex to fluid), free surface level with the top edge',
            'Same <i>F</i><sub><i>H</i></sub>',
            '(π/4)<i>ρgR</i><sup>2</sup> × width (weight of the fluid that would fill the quarter-cylinder), acting in the opposite sense',
            'Acts through cylinder axis',
          ],
          [
            'Parabolic gate <i>y</i> = <i>kx</i><sup>2</sup>, width <i>b</i>, fluid on convex side',
            'Force on vertical projection',
            'Weight of fluid above parabola up to free surface',
            'Not through a fixed point; use moment balance',
          ],
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Half-Cylinder Gate)',
        q: 'A long gate has a semi-cylindrical cross-section of radius <i>R</i> = 2.0 m, axis horizontal, hinged along the horizontal line at the top of the curved surface (the top generator). Water stands against the gate on the concave side (inside the half-cylinder) up to the hinge level. The gate has length <i>L</i> = 4.0 m. Find the moment required at the hinge to hold the gate closed. Take <i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.',
        steps: [
          '<b>Solution.</b> Set the hinge H at the origin with the centre O of the circle a distance <i>R</i> directly below it. Since pressure on a circular arc always acts along the radius, every elementary pressure force passes through O — so the resultant <i>F</i>′<sub><i>R</i></sub> (per unit length) also passes through O, a distance <i>R</i> from the hinge.',
          '<b>Horizontal component (per unit length).</b> This equals the force on the vertical projection of the curved surface — the vertical diameter, of length 2<i>R</i>, with pressure varying linearly from 0 at the hinge (water surface) to <i>ρg</i>(2<i>R</i>) at the bottom:<br><i>F</i>′<sub><i>H</i></sub> = ∫<sub>0</sub><sup>2<i>R</i></sup> <i>ρgy</i> d<i>y</i> = <i>ρg</i>(2<i>R</i>)<sup>2</sup>/2 = 2<i>ρgR</i><sup>2</sup><br>(equivalently: depth of centroid × projected area, per unit length = <i>ρg</i> · <i>R</i> · 2<i>R</i> = 2<i>ρgR</i><sup>2</sup> — the two methods agree).',
          '<b>Vertical component (per unit length)</b> equals the weight of the water filling the half-cylinder: <i>F</i>′<sub><i>V</i></sub> = <i>ρg</i> · (π/2)<i>R</i><sup>2</sup>.',
          '<b>Moment about the hinge.</b> With <i>HO⃗</i> = (0, −<i>R</i>) and <i>F⃗</i>′<sub><i>R</i></sub> = (<i>F</i>′<sub><i>H</i></sub>, −<i>F</i>′<sub><i>V</i></sub>) (horizontal outward, vertical downward), the moment is <i>HO⃗</i> × <i>F⃗</i>′<sub><i>R</i></sub> = <i>RF</i>′<sub><i>H</i></sub> — the vertical component contributes nothing, since it acts along a line through O that passes directly below the hinge. So<br><i>M</i>′ = <i>RF</i>′<sub><i>H</i></sub> = <i>R</i>(2<i>ρgR</i><sup>2</sup>) = 2<i>ρgR</i><sup>3</sup>',
          'Plugging in <i>ρg</i> = 10<sup>4</sup> Pa/m, <i>R</i> = 2 m: <i>M</i>′ = 2 × 10<sup>4</sup> × 8 = 1.6 × 10<sup>5</sup> N·m/m. For length <i>L</i> = 4 m:<br><i>M</i> = 1.6 × 10<sup>5</sup> × 4 = 6.4 × 10<sup>5</sup> N·m',
          '<b>Key JEE shortcut this illustrates:</b> for any circular-arc gate, the resultant hydrostatic force passes through the centre of the circle. If the hinge happens to lie on the line of action of the resultant (e.g. hinged at the centre itself), the moment is trivially zero — the force produces no torque about a point it passes through. A non-zero moment requires the hinge to be off that line, as here: the resultant passes through the centre a full radius below the hinge but is tilted from the vertical, so it misses the hinge.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Force on Hemispherical Bowl)',
        q: 'A hemispherical bowl of radius <i>R</i> = 0.5 m is filled with water. Find the magnitude and direction of the resultant hydrostatic force on the bowl (the curved surface only). Take <i>ρ</i> = 1000 kg m<sup>−3</sup>, <i>g</i> = 10 m s<sup>−2</sup>.',
        steps: [
          '<b>Solution:</b> The bowl is a hemisphere, open at the top. Water fills it. The curved surface is the hemisphere. By symmetry, the horizontal components cancel. The resultant is purely vertical. Vertical force on the hemisphere = weight of water above the hemisphere. But the water is inside the hemisphere. The volume above the curved surface is exactly the volume of the hemisphere: <i>V</i> = (2/3)π<i>R</i><sup>3</sup>. <i>F</i><sub><i>V</i></sub> = <i>ρgV</i> = 1000 × 10 × (2/3)π(0.5)<sup>3</sup> = 10<sup>4</sup> × (2/3)π × 0.125 = 10<sup>4</sup> × π/12 ≈ 2618 N. Direction: vertically downward (water pushes down on the bowl). Magnitude: <i>F</i><sub><i>R</i></sub> = 2618 N downward.',
          '<b>Check:</b> the vertical component is nothing more than the weight of the water standing above the curved surface, and for a hemisphere that volume is the hemisphere itself: <i>V</i> = (2/3)π<i>R</i><sup>3</sup> = 0.262 m<sup>3</sup>, i.e. 262 kg of water weighing ≈ 2618 N — the figure obtained above.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A quarter-cylindrical gate of radius <i>R</i> = 1.0 m and width <i>b</i> = 2.0 m holds water on its convex side. The axis of the arc lies in the water surface, vertically above the bottom horizontal edge, and the gate is hinged along that bottom edge. Find the moment required at the hinge to keep the gate closed. (<i>ρ</i> = 1000, <i>g</i> = 10).',
            a: '<i>M</i> = 1.0 × 10<sup>4</sup> N m (the resultant passes through the axis, a distance <i>R</i> above the hinge. With <i>F</i><sub><i>H</i></sub> = ½<i>ρgR</i><sup>2</sup><i>b</i> = 1.0 × 10<sup>4</sup> N and <i>F</i><sub><i>V</i></sub> = (π/4)<i>ρgR</i><sup>2</sup><i>b</i> = 1.57 × 10<sup>4</sup> N, only <i>F</i><sub><i>H</i></sub> has a lever arm about the hinge, so <i>M</i> = <i>RF</i><sub><i>H</i></sub>).',
          },
          {
            q: 'A parabolic gate <i>y</i> = <i>x</i><sup>2</sup> (with <i>y</i> in metres, <i>x</i> in metres) from <i>x</i> = 0 to <i>x</i> = 1 m, width <i>b</i> = 1 m, is vertical. Water stands against it up to <i>y</i> = 1 m, on the side <i>y</i> > <i>x</i><sup>2</sup> (<i>y</i> measured upward). Find the horizontal and vertical components of the hydrostatic force on the gate.',
            a: '<i>F</i><sub><i>H</i></sub> = 5.0 × 10<sup>3</sup> N, <i>F</i><sub><i>V</i></sub> = 6.67 × 10<sup>3</sup> N (for water on the side <i>y</i> > <i>x</i><sup>2</sup>, i.e. above the parabola; if the water were on the other side, <i>F</i><sub><i>V</i></sub> would be 3.33 × 10<sup>3</sup> N).',
          },
          {
            q: 'A hemispherical dome of radius <i>R</i> = 3 m is submerged in water with its flat face horizontal and uppermost. The top of the dome is at a depth of 2 m. Find the net hydrostatic force on the dome (magnitude and direction). (<i>ρ</i> = 1000, <i>g</i> = 10).',
            a: 'Net force = 5.65 × 10<sup>5</sup> N upward, equal to the buoyancy <i>ρg</i> · (2/3)π<i>R</i><sup>3</sup>. (The curved surface alone feels 1.13 × 10<sup>6</sup> N upward, the weight of the water column above it, 36π m<sup>3</sup>; the flat top is pushed down by <i>ρg</i>(2)(π<i>R</i><sup>2</sup>) = 5.65 × 10<sup>5</sup> N.)',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Stability of Floating Bodies: Metacentric Height',
    extra: true,
    kalam: 'The metacentric height GM = BM − BG (for G above B) determines the righting moment.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 02 states that a floating body is stable if the metacentre M lies above the centre of gravity G. The metacentric height <i>GM</i> = <i>BM</i> − <i>BG</i> (for G above B) determines the righting moment. JEE Advanced asks for the metacentric height of a given floating body (rectangular barge, cylindrical log, etc.) and the condition for stability, often combined with a small-angle oscillation period.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Centre of Buoyancy B:</b> For a floating body in equilibrium, B is the centroid of the submerged volume.',
          '<b>Centre of Gravity G:</b> Given or computed from mass distribution.',
          '<b>Metacentre M:</b> When the body tilts by a small angle <i>θ</i>, the submerged volume shifts. The buoyant force acts through the new centre of buoyancy B′. The vertical line through B′ intersects the body centreline at M. For small <i>θ</i>, M is fixed.',
          '<b>Distance BM:</b> <i>BM</i> = <i>I</i>/<i>V</i><sub>sub</sub>, where <i>I</i> is the second moment of area of the waterplane (the cross-section at the waterline) about the axis of tilt, and <i>V</i><sub>sub</sub> is the submerged volume.<br>• Derivation: The wedge of fluid shifted creates a moment. The shift of B is such that <i>V</i><sub>sub</sub> × <i>BB</i>′ = <i>Iθ</i>. For small <i>θ</i>, <i>BB</i>′ ≈ <i>BM</i> · <i>θ</i>, so <i>BM</i> = <i>I</i>/<i>V</i><sub>sub</sub>.',
          '<b>Metacentric height:</b> <i>GM</i> = <i>BM</i> − <i>BG</i> if G is above B; <i>GM</i> = <i>BM</i> + <i>BG</i> if G is below B. (Sign convention: positive GM means M above G, stable.)',
          '<b>Righting moment:</b> For a small heel angle <i>θ</i>, the righting moment is <i>M</i><sub><i>R</i></sub> = <i>W</i> · <i>GM</i> · <i>θ</i>, where <i>W</i> = <i>mg</i> is the weight of the body.',
          '<b>Period of oscillation (rolling):</b> <i>T</i> = 2π√(<i>k</i><sup>2</sup>/(<i>g</i> · <i>GM</i>)), where <i>k</i> is the radius of gyration of the body about its longitudinal axis.',
        ],
      },
      {
        t: 'defgrid',
        title: 'Standard Results — second moment I of the waterplane (about centroidal axis)',
        rows: [
          { k: 'Rectangle breadth <i>B</i>, length <i>L</i> (tilt about longitudinal axis)', v: '<i>LB</i><sup>3</sup>/12' },
          { k: 'Circle radius <i>R</i>', v: 'π<i>R</i><sup>4</sup>/4' },
          { k: 'Ellipse semi-axes <i>a</i>, <i>b</i> (tilt about major axis <i>a</i>)', v: 'π<i>ab</i><sup>3</sup>/4' },
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Rectangular Barge)',
        q: 'A rectangular barge of length <i>L</i> = 30 m, breadth <i>B</i> = 10 m, and depth <i>D</i> = 5 m floats in sea water (<i>ρ</i> = 1025 kg m<sup>−3</sup>). Its mass is 1.2 × 10<sup>6</sup> kg, and its centre of gravity G is 2.0 m above the keel (bottom). Find (a) the draft <i>d</i>, (b) the metacentric height <i>GM</i>, and (c) the period of small rolling oscillations. Take <i>g</i> = 10 m s<sup>−2</sup>. The radius of gyration of the barge about its longitudinal axis is <i>k</i> = 0.35<i>B</i>.',
        steps: [
          '<b>Solution: (a) Draft.</b> Weight <i>W</i> = <i>mg</i> = 1.2 × 10<sup>6</sup> × 10 = 1.2 × 10<sup>7</sup> N. Buoyancy <i>F</i><sub><i>B</i></sub> = <i>ρgV</i><sub>sub</sub> = <i>ρg</i>(<i>LBd</i>). Equilibrium: <i>ρgLBd</i> = <i>mg</i> ⇒ <i>d</i> = <i>m</i>/(<i>ρLB</i>) = (1.2 × 10<sup>6</sup>)/(1025 × 30 × 10) = (1.2 × 10<sup>6</sup>)/(3.075 × 10<sup>5</sup>) ≈ 3.90 m. So submerged volume <i>V</i><sub>sub</sub> = 30 × 10 × 3.90 = 1170 m<sup>3</sup>.',
          '<b>(b) Metacentric height.</b> Centre of buoyancy B is at <i>d</i>/2 = 1.95 m above keel. Centre of gravity G is at 2.0 m above keel. <i>BG</i> = 2.0 − 1.95 = 0.05 m (G above B). Waterplane area is <i>L</i> × <i>B</i> = 300 m<sup>2</sup>. Tilt is about the longitudinal axis (along length). Second moment of waterplane about longitudinal axis: <i>I</i> = <i>LB</i><sup>3</sup>/12 = (30 × 1000)/12 = 2500 m<sup>4</sup>. <i>BM</i> = <i>I</i>/<i>V</i><sub>sub</sub> = 2500/1170 ≈ 2.137 m. <i>GM</i> = <i>BM</i> − <i>BG</i> = 2.137 − 0.05 = 2.087 m. (Positive, so stable.)',
          '<b>(c) Period of rolling.</b> Radius of gyration <i>k</i> = 0.35<i>B</i> = 3.5 m. <i>T</i> = 2π√(<i>k</i><sup>2</sup>/(<i>g</i> · <i>GM</i>)) = 2π√(12.25/(10 × 2.087)) = 2π√0.587 ≈ 2π × 0.766 = 4.81 s.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Rectangular Block)',
        q: 'A rectangular block of wood 2 m × 1 m × 1 m (L × B × H) floats in water with the 2 m dimension horizontal and the 1 m dimension vertical. Its density is 600 kg m<sup>−3</sup>. Find the metacentric height for rolling (tilt about the longitudinal axis). Is it stable? (<i>ρ</i><sub>water</sub> = 1000 kg m<sup>−3</sup>).',
        steps: [
          '<b>Solution:</b> Draft <i>d</i> = (<i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>w</i></sub>)<i>H</i> = 0.6 × 1 = 0.6 m. B is at <i>d</i>/2 = 0.3 m above bottom. G is at <i>H</i>/2 = 0.5 m above bottom. <i>BG</i> = 0.5 − 0.3 = 0.2 m (G above B). Waterplane area: <i>L</i> × <i>B</i> = 2 × 1 = 2 m<sup>2</sup>. <i>I</i> about longitudinal axis (along L): <i>I</i> = <i>LB</i><sup>3</sup>/12 = (2 × 1)/12 = 1/6 m<sup>4</sup>. <i>V</i><sub>sub</sub> = <i>LBd</i> = 2 × 1 × 0.6 = 1.2 m<sup>3</sup>. <i>BM</i> = <i>I</i>/<i>V</i><sub>sub</sub> = (1/6)/1.2 = 1/7.2 ≈ 0.1389 m. <i>GM</i> = <i>BM</i> − <i>BG</i> = 0.1389 − 0.2 = −0.0611 m. Negative ⇒ unstable. The block will not float upright: it heels over and settles in a tilted position. (Turning it so that the 2 m side is vertical does not help: then <i>d</i> = 1.2 m, <i>BG</i> = 1.0 − 0.6 = 0.4 m and <i>BM</i> = (1/12)/1.2 ≈ 0.069 m, so <i>GM</i> < 0 there too.)',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A cylindrical buoy of diameter 1.0 m and height 2.0 m floats vertically in sea water (<i>ρ</i> = 1025 kg m<sup>−3</sup>). The buoy is uniform with mass 400 kg and its centre of gravity is at the geometric centre. Find the metacentric height. Is it stable?',
            a: '<i>GM</i> ≈ −0.63 m (unstable): <i>V</i><sub>sub</sub> = 400/1025 = 0.390 m<sup>3</sup>, draft 0.497 m, <i>BG</i> = 1.0 − 0.248 = 0.752 m, <i>BM</i> = (π(0.5)<sup>4</sup>/4)/0.390 = 0.126 m.',
          },
          {
            q: 'A rectangular barge 20 m × 8 m × 4 m (L × B × D) has a mass of 5.0 × 10<sup>5</sup> kg and KG = 2.5 m (above keel). It floats in fresh water. Find GM for rolling.',
            a: '<i>d</i> = 3.125 m, <i>BM</i> = 1.71 m, <i>BG</i> = 2.5 − 1.5625 = 0.94 m, <i>GM</i> = 0.77 m (stable).',
          },
          {
            q: 'A solid cube of side <i>a</i> and density <i>ρ</i><sub><i>b</i></sub> floats in a liquid of density <i>ρ</i><sub><i>f</i></sub> (<i>ρ</i><sub><i>b</i></sub> < <i>ρ</i><sub><i>f</i></sub>). Derive the condition on <i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub> for the cube to be stable in the orientation with one face horizontal.',
            a: 'Draft <i>d</i> = (<i>ρ</i><sub><i>b</i></sub>/<i>ρ</i><sub><i>f</i></sub>)<i>a</i> ≡ <i>ra</i>. The waterplane is a square of side <i>a</i>, so <i>I</i> = <i>a</i><sup>4</sup>/12 and <i>V</i><sub>sub</sub> = <i>a</i><sup>3</sup><i>r</i>, giving <i>BM</i> = <i>I</i>/<i>V</i><sub>sub</sub> = <i>a</i>/(12<i>r</i>). <i>B</i> sits at <i>d</i>/2 = <i>ar</i>/2 above the keel and <i>G</i> at <i>a</i>/2, so <i>BG</i> = (<i>a</i>/2)(1 − <i>r</i>) and<br><i>GM</i> = <i>a</i>/(12<i>r</i>) − (<i>a</i>/2)(1 − <i>r</i>).<br><i>GM</i> > 0 requires 6<i>r</i><sup>2</sup> − 6<i>r</i> + 1 > 0, whose roots are <i>r</i> = ½ ± 1/(2√3). Hence the cube is stable face-up for <i>r</i> < 0.211 or <i>r</i> > 0.789; for intermediate densities it capsizes to float on an edge or corner.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Viscous Flow in Non-Circular Ducts: Parallel Plates and Annuli',
    extra: true,
    kalam:
      'JEE Advanced often asks for the flow rate between two infinite parallel plates (plane Poiseuille flow) or in an annular gap between concentric cylinders.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 06 derived Poiseuille’s law for a circular pipe: <i>Q</i> = πΔ<i>PR</i><sup>4</sup>/(8<i>ηL</i>). JEE Advanced often asks for the flow rate between two infinite parallel plates (plane Poiseuille flow) or in an annular gap between concentric cylinders. The velocity profile and the <i>R</i>-dependence change, but the method — balancing pressure force and viscous force on a fluid element — is identical.',
      },

      { t: 'part', title: 'Method: Plane Poiseuille Flow (Parallel Plates)' },
      {
        t: 'p',
        html: 'Consider steady, laminar flow of a Newtonian fluid between two infinite parallel plates separated by distance 2<i>h</i>. Use a coordinate <i>y</i> measured from the mid-plane. The plates are at <i>y</i> = ±<i>h</i>. The pressure gradient is −d<i>P</i>/d<i>x</i> = Δ<i>P</i>/<i>L</i> (constant).',
      },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Force balance on a fluid slab</b> of thickness d<i>y</i>, length d<i>x</i>, width <i>W</i> (into page).<br>• Pressure force: Δ<i>P</i> · <i>W</i> d<i>y</i> = −(d<i>P</i>/d<i>x</i>) d<i>x</i> · <i>W</i> d<i>y</i>.<br>• Viscous force on top and bottom faces: <i>τ</i>(<i>y</i> + d<i>y</i>)<i>W</i> d<i>x</i> − <i>τ</i>(<i>y</i>)<i>W</i> d<i>x</i> = (d<i>τ</i>/d<i>y</i>) d<i>y W</i> d<i>x</i>.<br>• Equilibrium: −(d<i>P</i>/d<i>x</i>) d<i>x W</i> d<i>y</i> + (d<i>τ</i>/d<i>y</i>) d<i>y W</i> d<i>x</i> = 0 ⇒ d<i>τ</i>/d<i>y</i> = d<i>P</i>/d<i>x</i> = −<i>G</i>, where <i>G</i> = −d<i>P</i>/d<i>x</i> = Δ<i>P</i>/<i>L</i> > 0.',
          '<b>Newton’s law of viscosity:</b> <i>τ</i> = <i>η</i> d<i>u</i>/d<i>y</i>. Substituting into the force balance gives <i>η</i> d<sup>2</sup><i>u</i>/d<i>y</i><sup>2</sup> = −<i>G</i>.',
          '<b>Integrate:</b> d<i>u</i>/d<i>y</i> = −(<i>G</i>/<i>η</i>)<i>y</i> + <i>C</i><sub>1</sub>. Symmetry (<i>u</i> maximum at <i>y</i> = 0) gives <i>C</i><sub>1</sub> = 0. <i>u</i>(<i>y</i>) = −(<i>G</i>/(2<i>η</i>))<i>y</i><sup>2</sup> + <i>C</i><sub>2</sub>. No-slip at <i>y</i> = ±<i>h</i>: <i>u</i>(±<i>h</i>) = 0 ⇒ <i>C</i><sub>2</sub> = (<i>G</i>/(2<i>η</i>))<i>h</i><sup>2</sup>. <i>u</i>(<i>y</i>) = (<i>G</i>/(2<i>η</i>))(<i>h</i><sup>2</sup> − <i>y</i><sup>2</sup>). Parabolic profile. Maximum velocity at centre: <i>u</i><sub>max</sub> = <i>Gh</i><sup>2</sup>/(2<i>η</i>).',
          '<b>Flow rate per unit width</b> <i>q</i> = ∫<sub>−<i>h</i></sub><sup><i>h</i></sup> <i>u</i>(<i>y</i>) d<i>y</i> = (2/3)<i>Gh</i><sup>3</sup>/<i>η</i>. For width <i>W</i>, <i>Q</i> = (2/3)<i>Gh</i><sup>3</sup><i>W</i>/<i>η</i> = (2/3)(Δ<i>P</i>/<i>L</i>)(<i>h</i><sup>3</sup><i>W</i>/<i>η</i>). Often written with gap 2<i>h</i> = <i>H</i>: <i>Q</i> = (Δ<i>P</i>/<i>L</i>)(<i>H</i><sup>3</sup><i>W</i>/(12<i>η</i>)).',
          '<b>Mean velocity:</b> <i>u</i><sub>avg</sub> = <i>Q</i>/(2<i>hW</i>) = <i>Gh</i><sup>2</sup>/(3<i>η</i>) = (2/3)<i>u</i><sub>max</sub>.',
        ],
      },

      { t: 'part', title: 'Method: Annular Flow (Concentric Cylinders)' },
      {
        t: 'p',
        html: 'Inner radius <i>R</i><sub><i>i</i></sub>, outer radius <i>R</i><sub><i>o</i></sub>. Pressure gradient <i>G</i> = −d<i>P</i>/d<i>x</i>. Force balance on a cylindrical shell of radius <i>r</i>, thickness d<i>r</i>, length d<i>x</i>:<br>• Pressure force = <i>G</i> · 2π<i>r</i> d<i>r</i> d<i>x</i>.<br>• Viscous force on the shell: <i>τ</i>(<i>r</i> + d<i>r</i>) 2π(<i>r</i> + d<i>r</i>) d<i>x</i> − <i>τ</i>(<i>r</i>) 2π<i>r</i> d<i>x</i> ≈ (d/d<i>r</i>)(<i>τr</i>) d<i>r</i> 2π d<i>x</i>.<br>• Equilibrium: <i>G</i> · 2π<i>r</i> d<i>r</i> d<i>x</i> + (d/d<i>r</i>)(<i>τr</i>) d<i>r</i> 2π d<i>x</i> = 0 ⇒ (d/d<i>r</i>)(<i>τr</i>) = −<i>Gr</i>.<br>• <i>τ</i> = <i>η</i> d<i>u</i>/d<i>r</i>. So (d/d<i>r</i>)(<i>r</i> d<i>u</i>/d<i>r</i>) = −(<i>G</i>/<i>η</i>)<i>r</i>.<br>• Integrate: <i>r</i> d<i>u</i>/d<i>r</i> = −(<i>G</i>/(2<i>η</i>))<i>r</i><sup>2</sup> + <i>C</i><sub>1</sub> ⇒ d<i>u</i>/d<i>r</i> = −(<i>G</i>/(2<i>η</i>))<i>r</i> + <i>C</i><sub>1</sub>/<i>r</i>.<br>• Integrate: <i>u</i>(<i>r</i>) = −(<i>G</i>/(4<i>η</i>))<i>r</i><sup>2</sup> + <i>C</i><sub>1</sub> ln <i>r</i> + <i>C</i><sub>2</sub>.<br>• Boundary conditions: <i>u</i>(<i>R</i><sub><i>i</i></sub>) = 0, <i>u</i>(<i>R</i><sub><i>o</i></sub>) = 0.<br>• Solve for <i>C</i><sub>1</sub>, <i>C</i><sub>2</sub>:<br>• <i>C</i><sub>1</sub> = (<i>G</i>/(4<i>η</i>))(<i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup>)/ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>).<br>• <i>C</i><sub>2</sub> = (<i>G</i>/(4<i>η</i>))<i>R</i><sub><i>i</i></sub><sup>2</sup> − <i>C</i><sub>1</sub> ln <i>R</i><sub><i>i</i></sub>.<br>• Flow rate <i>Q</i> = ∫<sub><i>R</i><sub><i>i</i></sub></sub><sup><i>R</i><sub><i>o</i></sub></sup> <i>u</i>(<i>r</i>)2π<i>r</i> d<i>r</i>.<br>• After integrating (algebra omitted) and writing <i>G</i> = Δ<i>P</i>/<i>L</i>:<br><i>Q</i> = (πΔ<i>P</i>/(8<i>ηL</i>))[<i>R</i><sub><i>o</i></sub><sup>4</sup> − <i>R</i><sub><i>i</i></sub><sup>4</sup> − (<i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup>)<sup>2</sup>/ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>)]',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Plane Poiseuille Flow)',
        q: 'Oil (<i>η</i> = 0.10 Pa·s, <i>ρ</i> = 900 kg m<sup>−3</sup>) flows between two large parallel plates separated by 10 mm. The pressure drop is 500 Pa over a length of 1.0 m. The plates are 0.50 m wide. Find (a) the maximum velocity, (b) the volume flow rate, and (c) the Reynolds number based on hydraulic diameter. Is the flow laminar?',
        steps: [
          '<b>Given:</b> 2<i>h</i> = 0.010 m ⇒ <i>h</i> = 0.005 m. Δ<i>P</i> = 500 Pa, <i>L</i> = 1.0 m, <i>W</i> = 0.50 m, <i>η</i> = 0.10 Pa·s. <i>G</i> = Δ<i>P</i>/<i>L</i> = 500 Pa/m.',
          '<b>(a)</b> <i>u</i><sub>max</sub> = <i>Gh</i><sup>2</sup>/(2<i>η</i>) = (500 × (0.005)<sup>2</sup>)/(2 × 0.10) = (500 × 2.5 × 10<sup>−5</sup>)/0.2 = 0.0125/0.2 = 0.0625 m/s.',
          '<b>(b)</b> <i>Q</i> = (2/3)(<i>Gh</i><sup>3</sup><i>W</i>/<i>η</i>) = (2/3) × (500 × (0.005)<sup>3</sup> × 0.50)/0.10 = (2/3) × (500 × 1.25 × 10<sup>−7</sup> × 0.50)/0.10 = (2/3) × (3.125 × 10<sup>−5</sup>)/0.10 = (2/3) × 3.125 × 10<sup>−4</sup> = 2.08 × 10<sup>−4</sup> m<sup>3</sup>/s.',
          '<b>(c)</b> Hydraulic diameter <i>D</i><sub>h</sub> = (4 × cross-sectional area)/(wetted perimeter) = (4 × (2<i>hW</i>))/(2<i>W</i>) = 4<i>h</i> = 0.020 m. <i>u</i><sub>avg</sub> = <i>Q</i>/(2<i>hW</i>) = (2.08 × 10<sup>−4</sup>)/(0.01 × 0.5) = 0.0417 m/s. Re = <i>ρu</i><sub>avg</sub><i>D</i><sub>h</sub>/<i>η</i> = (900 × 0.0417 × 0.020)/0.10 = 7.5. Re ≪ 2000, so flow is laminar.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Annular Flow)',
        q: 'Water (<i>η</i> = 1.0 × 10<sup>−3</sup> Pa·s) flows through an annulus between two concentric pipes. Inner radius <i>R</i><sub><i>i</i></sub> = 10 mm, outer radius <i>R</i><sub><i>o</i></sub> = 20 mm. Length <i>L</i> = 5.0 m, pressure drop Δ<i>P</i> = 20 Pa. Find the volume flow rate and confirm that the flow is laminar.',
        steps: [
          '<b>Given:</b> <i>R</i><sub><i>i</i></sub> = 0.010 m, <i>R</i><sub><i>o</i></sub> = 0.020 m, <i>L</i> = 5.0 m, Δ<i>P</i> = 20 Pa, <i>η</i> = 1.0 × 10<sup>−3</sup> Pa·s, <i>ρ</i> = 1000 kg m<sup>−3</sup>.',
          'Use the annular flow formula:<br><i>Q</i> = (πΔ<i>P</i>/(8<i>ηL</i>))[<i>R</i><sub><i>o</i></sub><sup>4</sup> − <i>R</i><sub><i>i</i></sub><sup>4</sup> − (<i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup>)<sup>2</sup>/ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>)]',
          'Compute terms: <i>R</i><sub><i>o</i></sub><sup>4</sup> = (0.02)<sup>4</sup> = 16 × 10<sup>−8</sup> = 1.6 × 10<sup>−7</sup> m<sup>4</sup>. <i>R</i><sub><i>i</i></sub><sup>4</sup> = (0.01)<sup>4</sup> = 1 × 10<sup>−8</sup> = 1.0 × 10<sup>−8</sup> m<sup>4</sup>. <i>R</i><sub><i>o</i></sub><sup>4</sup> − <i>R</i><sub><i>i</i></sub><sup>4</sup> = 1.5 × 10<sup>−7</sup> m<sup>4</sup>. <i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup> = (0.0004 − 0.0001) = 3 × 10<sup>−4</sup> m<sup>2</sup>. (<i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup>)<sup>2</sup> = 9 × 10<sup>−8</sup> m<sup>4</sup>. ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>) = ln 2 = 0.69315. (<i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup>)<sup>2</sup>/ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>) = (9 × 10<sup>−8</sup>)/0.69315 ≈ 1.298 × 10<sup>−7</sup> m<sup>4</sup>.',
          'Bracket term: 1.5 × 10<sup>−7</sup> − 1.298 × 10<sup>−7</sup> = 2.02 × 10<sup>−8</sup> m<sup>4</sup>.',
          '<i>Q</i> = (π × 20)/(8 × 1.0 × 10<sup>−3</sup> × 5.0) × 2.02 × 10<sup>−8</sup> = (π × 20)/0.04 × 2.02 × 10<sup>−8</sup> = π × 500 × 2.02 × 10<sup>−8</sup> ≈ 3.17 × 10<sup>−5</sup> m<sup>3</sup>/s.',
          '<b>Laminar check.</b> Flow area π(<i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup>) = π × 3 × 10<sup>−4</sup> = 9.42 × 10<sup>−4</sup> m<sup>2</sup>, so the mean speed is (3.17 × 10<sup>−5</sup>)/(9.42 × 10<sup>−4</sup>) = 0.0336 m/s. With hydraulic diameter <i>D</i><sub>h</sub> = 2(<i>R</i><sub><i>o</i></sub> − <i>R</i><sub><i>i</i></sub>) = 0.020 m, Re = <i>ρuD</i><sub>h</sub>/<i>η</i> = (1000 × 0.0336 × 0.020)/(1.0 × 10<sup>−3</sup>) ≈ 670 ≪ 2000, so the laminar formula applies.',
          '<b>Check:</b> For a solid pipe of radius <i>R</i><sub><i>o</i></sub>, <i>Q</i><sub>solid</sub> = πΔ<i>PR</i><sub><i>o</i></sub><sup>4</sup>/(8<i>ηL</i>) = (π × 20 × 1.6 × 10<sup>−7</sup>)/0.04 = π × 8 × 10<sup>−5</sup> = 2.5 × 10<sup>−4</sup> m<sup>3</sup>/s. The annulus carries only about one eighth of this because the inner wall adds drag and removes the fast central core.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Water flows between two parallel plates separated by 5.0 mm. The pressure gradient is 10 Pa/m. The plates are 0.20 m wide. Find the flow rate per unit width and the maximum velocity. (<i>η</i> = 1.0 × 10<sup>−3</sup> Pa·s).',
            a: '<i>q</i> = 1.04 × 10<sup>−4</sup> m<sup>2</sup>/s (per unit width), <i>Q</i> = 2.08 × 10<sup>−5</sup> m<sup>3</sup>/s; <i>u</i><sub>max</sub> = 0.03125 m/s.',
          },
          {
            q: 'An annulus has <i>R</i><sub><i>i</i></sub> = 5 mm, <i>R</i><sub><i>o</i></sub> = 15 mm. Water (<i>η</i> = 1.0 × 10<sup>−3</sup> Pa·s) flows with Δ<i>P</i> = 10 Pa over <i>L</i> = 2.0 m. Find the flow rate.',
            a: '<i>Q</i> = 2.67 × 10<sup>−5</sup> m<sup>3</sup>/s.',
          },
          {
            q: 'Show that for an annulus with <i>R</i><sub><i>i</i></sub> → 0, the annular flow formula reduces to the Poiseuille formula for a solid cylinder of radius <i>R</i><sub><i>o</i></sub>. (Hint: how does ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>) behave as <i>R</i><sub><i>i</i></sub> → 0?)',
            a: 'As <i>R</i><sub><i>i</i></sub> → 0, ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>) → ∞, so the term (<i>R</i><sub><i>o</i></sub><sup>2</sup> − <i>R</i><sub><i>i</i></sub><sup>2</sup>)<sup>2</sup>/ln(<i>R</i><sub><i>o</i></sub>/<i>R</i><sub><i>i</i></sub>) → 0, and <i>R</i><sub><i>i</i></sub><sup>4</sup> → 0; the bracket tends to <i>R</i><sub><i>o</i></sub><sup>4</sup> and <i>Q</i> → πΔ<i>PR</i><sub><i>o</i></sub><sup>4</sup>/(8<i>ηL</i>).',
          },
        ],
      },
      {
        t: 'p',
        html: 'This completes the Advanced Addendum. Each addendum develops a JEE Advanced pattern that the chapter itself only touches, with full derivations, unit-carrying calculations, and practice problems with answers.',
      },
    ],
  },
];
