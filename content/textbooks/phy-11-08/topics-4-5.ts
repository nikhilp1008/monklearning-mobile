import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topics 04 and 05, pp. 570–585 of the Class 11 Physics Master
 * Reference, word for word: Ductility, Malleability and Yielding (pp. 570 to
 * 577) and Applications of Elastic Behaviour (pp. 578 to 585), each split at
 * the book's Sections 1 to 8. Figure 8.2 (caption p. 571, drawn on p. 572).
 */
export const TOPICS: Topic[] = [
  {
    n: '04',
    title: 'Ductility, Malleability and Yielding',
    kalam: 'What a material does after it yields is its personality — and it sorts materials into families.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Notation (carried from Topics 01–03):</b> stress <i>σ</i> · strain <i>ε</i> · Young’s <i>Y</i> · yield stress <i>σ</i><sub><i>y</i></sub> · energy density <i>u</i>. Poisson’s ratio is <i>ν</i> throughout (not <i>σ</i>).',
      },
      {
        t: 'p',
        html: 'In Topic 01 you learned to read the stress-strain curve — to name its landmarks (proportional limit, elastic limit, yield point, ultimate strength, fracture). This topic asks a different question: given that curve, <b>what kind of material are you holding?</b> Ductile or brittle? Malleable? An elastomer? And what exactly happens at the moment a material “gives up” elastically and starts to flow?',
      },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Heavy on conceptual and graph-reading questions. CBSE Boards ask definitions (ductile, brittle, elastomer, yield point) and a stress-strain interpretation. NEET reliably puts up a two-curve comparison (“which material is more brittle / has greater Young’s modulus?”). JEE Main tests yield-strength design and energy-to-yield. JEE Advanced reaches for multi-statement reasoning on stress-strain graphs and elastic-hysteresis energy loss.',
      },
      {
        t: 'p',
        html: 'Every solid, pushed hard enough, eventually stops behaving like a spring. Up to a point it stretches and springs back faithfully — that’s the elastic behaviour of Topics 01–03. But push past the <b>yield point</b> and something irreversible happens: the material gives. It keeps stretching with barely any extra force, and when you finally release it, it does <b>not</b> return to its original shape. It carries a permanent set. Think of it like a government queue that holds its shape under mild pressure but, once a critical crowd builds, suddenly surges forward and never reforms into the neat line it was.<br><br>What a material does after it yields is its personality — and it sorts materials into families.',
      },
      {
        t: 'p',
        html: '<b>Ductile materials</b> (copper, gold, mild steel) have a long, generous plastic region between yielding and fracture. They stretch a lot before breaking, which means they can be <b>drawn out into thin wires</b> — that’s literally what ductility means. The copper in your charger cable, the gold in a jeweller’s thread: both owe their existence to a long plastic range.',
      },
      {
        t: 'p',
        html: '<b>Malleable materials</b> (gold, silver, aluminium, lead) yield easily under compression and can be <b>hammered or rolled into thin sheets</b> without cracking. Ductility is about pulling into wires; malleability is about beating into sheets. The gold leaf on a temple dome and the aluminium foil in your kitchen are malleability in action. (Most ductile metals are also malleable, but the two are distinct ideas — one lives in tension, the other in compression.)',
      },
      {
        t: 'p',
        html: '<b>Brittle materials</b> (glass, cast iron, ceramic) have almost no plastic region. They snap clean, with little warning, very soon after the elastic limit. A glass tumbler doesn’t bend before it shatters — it goes straight from “fine” to “in pieces.”',
      },
      {
        t: 'p',
        html: 'Think about it this way… there’s a famous puzzle: is rubber more elastic than steel? In everyday language, obviously — rubber stretches enormously and pings right back. And in that sense rubber is remarkable: it can be stretched to several times its length and still recover fully, where steel would have snapped long ago. But physics defines elasticity by the restoring force per unit strain — by Young’s modulus. For the same strain, steel develops vastly larger internal forces than rubber. So by the modulus definition, <b>steel is the more elastic</b> of the two. Rubber is an <b>elastomer</b>: a material that endures huge strains elastically, has essentially <b>no region of proportionality</b> (its curve is bent from the start, so Hooke’s law never really applies), and crucially does <b>not retrace its path</b> on unloading — the loading and unloading curves enclose a loop. That loop is <b>elastic hysteresis</b>, and the area inside it is energy quietly converted to heat each cycle. This is exactly why rubber is chosen for vehicle tyres and shock absorbers: it eats vibration energy rather than bouncing it back. It’s also why a much-flexed rubber band warms up.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> These behaviours are properties of the material, but they shift with temperature (many brittle metals turn ductile when hot — which is why a blacksmith heats iron before hammering), with the rate of loading (sudden shocks make even ductile metals behave brittlely), and with repeated cycling (<b>elastic fatigue</b> — a material loses its strength after countless load cycles and can fail well below its normal breaking stress, which is why aircraft parts and railway axles are retired on a schedule, not just when they look worn).',
      },

      { t: 'part', title: 'Key definitions and quantities' },
      { t: 'p', html: 'This topic is largely qualitative, but a few quantities anchor it:' },
      {
        t: 'def',
        term: 'Yield strength <i>σ</i><sub><i>y</i></sub>',
        html: 'the stress at the yield point, marking the boundary between elastic (recoverable) and plastic (permanent) deformation. Unit Pa.',
      },
      {
        t: 'def',
        term: 'Ultimate tensile strength',
        html: 'the maximum stress on the curve; the most the material can bear before it begins to neck and head toward fracture.',
      },
      { t: 'def', term: 'Breaking (fracture) stress', html: 'the stress at the point of actual rupture.' },
      {
        t: 'def',
        term: 'Modulus of resilience',
        html: 'the elastic energy a material can absorb per unit volume up to its yield point (i.e. the area under the elastic part of the curve):',
      },
      {
        t: 'formula',
        kicker: 'Modulus of resilience',
        main: '<i>u</i><sub>resilience</sub> = ½<i>σ</i><sub><i>y</i></sub><i>ε</i><sub><i>y</i></sub> = <i>σ</i><sub><i>y</i></sub><sup>2</sup>/(2<i>Y</i>)',
        legend: ['<i>ε</i><sub><i>y</i></sub> = strain at the yield point'],
        note: '(unit: J m<sup>−3</sup>)',
      },
      {
        t: 'def',
        term: 'Toughness',
        html: 'the total energy absorbed per unit volume up to fracture (the <b>whole</b> area under the stress-strain curve). A tough material absorbs a lot of energy before breaking; ductile materials are generally tough, brittle ones are not.',
      },
      {
        t: 'def',
        term: 'Ductility (graphical measure)',
        html: 'the length of the stress-strain curve between the yield point and the fracture point; the longer this stretch, the more ductile the material.',
      },
      {
        t: 'def',
        term: 'Permanent set',
        html: 'the residual strain left after a material is loaded past yield and then unloaded.',
      },
      { t: 'fig', id: 'p11-08-fig-8.2' },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '(This topic has no single formal derivation; instead, here is the logical walkthrough of the stress-strain journey and how to classify a material from it.)',
      },
      { t: 'p', html: 'Loading a wire and following its stress-strain curve:' },
      {
        t: 'proc',
        title: 'The journey along the curve, region by region',
        steps: [
          '<b>Linear (elastic) region — up to the proportional limit.</b> Stress ∝ strain; Hooke’s law holds; slope = <i>Y</i>. Unload here and the wire fully recovers.',
          '<b>Elastic limit / yield point.</b> The last point of full recovery. Why it matters: cross it and recovery is no longer complete. (For many metals the elastic limit and yield point sit so close together they’re treated as one; conceptually the elastic limit is “last full recovery” and the yield point is “onset of large plastic flow.”)',
          '<b>Plastic region — beyond yield.</b> Strain grows rapidly for little extra stress (“plastic flow”). Unload from here and the wire keeps a <b>permanent set</b> — the unloading line runs parallel to the original elastic line but doesn’t return to the origin. This is the defining feature of yielding.',
          '<b>Ultimate tensile strength.</b> The peak stress. Past it, a ductile sample <b>necks</b> (thins locally).',
          '<b>Fracture point.</b> The wire breaks; the stress here is the breaking stress.',
        ],
      },
      {
        t: 'p',
        html: '<b>How to classify a material from its curve:</b><br>• Steep initial slope? → high Young’s modulus (stiff). Gentle slope? → low <i>Y</i> (flexible). The slope, not the height, gives stiffness.<br>• Long plastic region between yield and fracture? → <b>ductile</b>. Fracture almost immediately after the elastic limit? → <b>brittle</b>.<br>• No straight portion at all, huge recoverable strain, an unloading loop? → <b>elastomer</b>.<br>• Large total area under the curve? → <b>tough</b> (absorbs much energy before breaking).',
      },
      {
        t: 'p',
        html: '<b>Resilience vs. toughness — a tale of two areas.</b> Both are areas under the same curve, but bounded differently:<br>• <b>Resilience</b> = area under the curve up to the yield point = energy stored elastically (fully recoverable). This is what springs and trampolines are designed to maximise.<br>• <b>Toughness</b> = area under the entire curve up to fracture = total energy absorbed before breaking. This is what crash barriers and helmets are designed to maximise.<br>A material can be very resilient but not especially tough (a hardened, high-carbon spring steel with little plastic range), or very tough but not especially resilient (a ductile structural metal). Why the distinction matters: you choose a resilient material when you want energy returned, a tough one when you want energy absorbed and not given back.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A steel wire has a yield strength of 3.0 × 10<sup>8</sup> Pa and Young’s modulus 2.0 × 10<sup>11</sup> Pa. Calculate its modulus of resilience (the maximum elastic energy it can store per unit volume without taking a permanent set).',
        steps: [
          'The modulus of resilience is the energy density at the yield point:<br><i>u</i><sub>resilience</sub> = <i>σ</i><sub><i>y</i></sub><sup>2</sup>/(2<i>Y</i>) = (3.0 × 10<sup>8</sup>)<sup>2</sup>/(2(2.0 × 10<sup>11</sup>)) = (9.0 × 10<sup>16</sup>)/(4.0 × 10<sup>11</sup>)',
          'Beyond this energy density the wire would yield and not fully recover — so this is the safe elastic “energy budget” per cubic metre.',
        ],
        ans: '<i>u</i><sub>resilience</sub> = 2.25 × 10<sup>5</sup> J m<sup>−3</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two materials, P and Q, are tested. On the same stress-strain axes, P’s curve rises steeply and ends abruptly at a low strain; Q’s curve rises less steeply but continues to a much higher strain before fracturing. Which material (i) has the greater Young’s modulus, and (ii) is more ductile?',
        steps: [
          '<b>The trap:</b> students assume the curve that “goes higher/steeper” is better in every way, or they confuse stiffness with ductility.',
          '<b>Speed method — separate the two ideas:</b><br>• <b>Young’s modulus = slope of the linear part.</b> P is steeper ⇒ <b>P has the greater <i>Y</i></b> (P is stiffer).<br>• <b>Ductility = how far the curve extends (plastic length) before fracture.</b> Q reaches much higher strain ⇒ <b>Q is more ductile</b> (and P, snapping early, is the more brittle).',
          'So stiffness and ductility point to different materials here — a stiff material can be brittle, a flexible one ductile. Eliminate any option that bundles “greater <i>Y</i>” with “more ductile” for the same material; that’s the planted error.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A steel lift cable must support a maximum load of 2000 kg. The yield strength of the steel is 2.5 × 10<sup>8</sup> Pa, and the design requires a safety factor of 5 (the working stress must not exceed one-fifth of the yield strength). Find the minimum diameter of the cable. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          '<b>Two ideas:</b> the working-stress limit set by yield strength and safety factor, then converting a required area into a diameter.',
          'Maximum force: <i>F</i> = <i>mg</i> = 2000 × 10 = 2.0 × 10<sup>4</sup> N.',
          'Allowed working stress: <i>σ</i><sub>work</sub> = <i>σ</i><sub><i>y</i></sub>/5 = (2.5 × 10<sup>8</sup>)/5 = 5.0 × 10<sup>7</sup> Pa.',
          'Minimum cross-sectional area: <i>A</i> = <i>F</i>/<i>σ</i><sub>work</sub> = (2.0 × 10<sup>4</sup>)/(5.0 × 10<sup>7</sup>) = 4.0 × 10<sup>−4</sup> m<sup>2</sup>.',
          'From <i>A</i> = π<i>d</i><sup>2</sup>/4:<br><i>d</i> = √(4<i>A</i>/π) = √(4(4.0 × 10<sup>−4</sup>)/π) = √(5.09 × 10<sup>−4</sup>)',
          'The safety factor keeps the cable working comfortably inside its elastic region — it never approaches yielding under the rated load.',
        ],
        ans: '2.3 × 10<sup>−2</sup> m = 2.3 cm',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two wires of equal length and equal cross-section, made of materials A and B, are tested to fracture. Their stress-strain curves are described as follows. Curve A: a steep straight line up to a high stress, then fracture almost immediately. Curve B: a less steep straight line to a lower yield stress, followed by a long plastic plateau extending to large strain before fracture, the plateau lying below A’s fracture stress. For these two materials, determine and justify which has (i) the greater Young’s modulus, (ii) the greater breaking stress, (iii) the greater ductility, and (iv) the greater toughness.',
        steps: [
          'This is a reasoning problem; read each property off the right feature of the curve.',
          '(i) <b>Young’s modulus</b> = slope of the initial straight line. A is steeper ⇒ <i>Y</i><sub><i>A</i></sub> > <i>Y</i><sub><i>B</i></sub>. A is the stiffer material.',
          '(ii) <b>Breaking stress</b> = the stress at the fracture point. A fractures at a high stress; B’s entire plateau lies below that ⇒ <b>breaking stress of A > breaking stress of B.</b> A is stronger.',
          '(iii) <b>Ductility</b> = extent of plastic deformation (curve length from yield to fracture). A snaps with almost no plastic region; B has a long plateau ⇒ <b>B is far more ductile</b> (A is brittle).',
          '(iv) <b>Toughness</b> = total area under the curve to fracture. Although A reaches a higher stress, its area is a thin sliver (it breaks at tiny strain). B’s modest stress acts over a huge strain, enclosing a much larger area ⇒ <b>B is the tougher material.</b>',
          '<b>The deep takeaway:</b> “strong” (high breaking stress), “stiff” (high <i>Y</i>), and “tough” (high energy absorption) are three independent properties. Material A wins on strength and stiffness; B wins on ductility and toughness. A glass rod (like A) shatters with almost no warning, while a mild-steel rod (like B) bends and absorbs enormous energy before failing — which is precisely why structural beams are made of the latter.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define ductile and brittle materials, and give one example of each. Which region of the stress-strain curve determines whether a material is ductile or brittle?',
            a: 'ductile e.g. copper, brittle e.g. glass; the plastic region (yield→fracture) decides',
          },
          {
            q: '[NEET] A material is stretched and then unloaded; it does not return to its original length but retains some elongation. Which property does this demonstrate, and what is the retained strain called?',
            a: 'plasticity / plastic deformation; the retained strain is the permanent set',
          },
          {
            q: '[JEE Main] A material has yield strength 4.0 × 10<sup>8</sup> Pa and Young’s modulus 1.0 × 10<sup>11</sup> Pa. Find its modulus of resilience (maximum recoverable elastic energy per unit volume).',
            a: '8.0 × 10<sup>5</sup> J m<sup>−3</sup>',
          },
          {
            q: '[JEE Main] A wire of cross-section 2.0 mm<sup>2</sup> is made of a material whose yield strength is 2.0 × 10<sup>8</sup> Pa. What is the maximum load the wire can carry without undergoing permanent deformation? (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '40 kg (<i>F</i><sub>max</sub> = <i>σ</i><sub><i>y</i></sub><i>A</i> = 400 N)',
          },
          {
            q: '[JEE Advanced] Explain, in terms of the area enclosed by its loading-unloading curve, why rubber is chosen over steel for vehicle tyres and shock absorbers, and state where the “lost” energy goes.',
            a: 'the enclosed hysteresis-loop area is energy dissipated as heat each cycle, so rubber absorbs/damps vibration rather than returning it; the lost energy becomes heat.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A material that breaks soon after the elastic limit is crossed, with almost no plastic deformation, is called:',
        opts: [
          { label: 'ductile', nudge: '<b>(a)</b> ductile is the opposite — a long plastic region.' },
          { label: 'brittle', nudge: null },
          { label: 'malleable', nudge: '<b>(c)</b> malleability is about being hammered into sheets, unrelated to early fracture.' },
          {
            label: 'an elastomer',
            nudge: '<b>(d)</b> an elastomer endures huge strains elastically — the very opposite of snapping early.',
          },
        ],
        correct: 1,
        solution: 'Little to no plastic region before fracture is the definition of brittleness (e.g. glass, cast iron).',
      },
      {
        t: 'mcq',
        q: 'Regarding steel and rubber, which statement is correct?',
        opts: [
          {
            label: 'Rubber is more elastic than steel because it has a larger Young’s modulus.',
            nudge: '<b>(a)</b> reverses the modulus comparison — rubber’s <i>Y</i> is small, not large.',
          },
          {
            label: 'Steel is more elastic than rubber because, for a given strain, larger restoring stress develops in steel.',
            nudge: null,
          },
          { label: 'Both have the same Young’s modulus.', nudge: '<b>(c)</b> is plainly false.' },
          {
            label: 'Rubber obeys Hooke’s law more closely than steel.',
            nudge: '<b>(d)</b> is backwards: rubber has almost no proportional region, so it obeys Hooke’s law less well than steel.',
          },
        ],
        correct: 1,
        solution: 'Elasticity by the modulus definition favours steel: the same strain calls up far greater internal stress in steel (<i>Y</i><sub>steel</sub> ≫ <i>Y</i><sub>rubber</sub>).',
      },
      {
        t: 'mcq',
        q: 'The ductility of a material, read from its stress-strain curve, is measured by:',
        opts: [
          {
            label: 'the slope of the linear region',
            nudge: '<b>(a)</b> the slope gives Young’s modulus (stiffness), not ductility.',
          },
          { label: 'the area under the elastic portion', nudge: '<b>(b)</b> the elastic-portion area is resilience.' },
          { label: 'the length of the curve between the yield point and the fracture point', nudge: null },
          {
            label: 'the stress at the proportional limit',
            nudge: '<b>(d)</b> the proportional-limit stress concerns elasticity, not plastic extensibility.',
          },
        ],
        correct: 2,
        solution: 'A longer curve between yielding and fracture means more plastic stretch before failure — more ductility.',
      },
      {
        t: 'mcq',
        q: 'Vulcanised rubber is preferred for shock absorbers mainly because:',
        opts: [
          { label: 'it has a very high Young’s modulus', nudge: '<b>(a)</b> rubber’s <i>Y</i> is low, not high.' },
          {
            label: 'it obeys Hooke’s law over a large range',
            nudge: '<b>(b)</b> rubber notably does not obey Hooke’s law over its range.',
          },
          { label: 'its loading and unloading curves enclose a large area, dissipating energy as heat', nudge: null },
          {
            label: 'it is brittle and absorbs shock by cracking',
            nudge: '<b>(d)</b> rubber is the opposite of brittle, and cracking would be a failure, not a feature.',
          },
        ],
        correct: 2,
        solution: 'The large elastic-hysteresis loop means a lot of energy is converted to heat per cycle — ideal for damping vibration.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing ductility, malleability, and elasticity.</b> Ductility = drawn into wires (tension). Malleability = hammered into sheets (compression). Elasticity = ability to recover. They are three different properties; a material can rank differently on each.',
          '<b>“Rubber is more elastic than steel.”</b> True only in the loose everyday sense (large recoverable strain). By the physics definition (Young’s modulus), <b>steel is more elastic.</b> Know which definition the question wants.',
          '<b>Slope vs. area on the stress-strain curve.</b> The slope of the linear part is Young’s modulus (stiffness). Areas are energies — area to yield is resilience, total area to fracture is toughness. Mixing these up is the single most common graph-question error.',
          '<b>Yield point treated as fracture.</b> Yielding is the onset of permanent deformation, not breaking. A material can yield and continue carrying load for a long plastic range before it finally fractures.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> On any two-curve comparison, decode each property from one specific feature and answer in this fixed order: <b>slope → stiffness (<i>Y</i>); height of fracture point → strength (breaking stress); horizontal extent past yield → ductility; total enclosed area → toughness.</b> Running this checklist stops you from bundling “stiff,” “strong,” and “tough” into one material when the graph is deliberately separating them.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Yield point',
            note: 'boundary between elastic (recovers) and plastic (permanent set). Beyond it → plastic flow.',
          },
          {
            f: '<b>Ductile</b> = long plastic region → drawn into wires (copper). <b>Brittle</b> = breaks just after elastic limit (glass). <b>Malleable</b> = hammered into sheets (gold, aluminium). <b>Elastomer</b> = huge recoverable strain, no proportional region, hysteresis loop (rubber).',
            note: '',
          },
          {
            f: 'Steel vs rubber',
            note: 'steel is more elastic by modulus (<i>Y</i><sub>steel</sub> ≫ <i>Y</i><sub>rubber</sub>); rubber recovers from larger strains.',
          },
          {
            f: '<b>Resilience</b> = <i>σ</i><sub><i>y</i></sub><sup>2</sup>/(2<i>Y</i>) = area under elastic region (energy returned). <b>Toughness</b> = total area to fracture (energy absorbed).',
            note: '',
          },
          {
            f: 'Elastic hysteresis',
            note: 'loading ≠ unloading curve; enclosed area = energy lost as heat per cycle → tyres, shock absorbers. <b>Elastic fatigue:</b> strength lost after many load cycles.',
          },
        ],
        aids: [
          '“Ductile draws wires, malleable makes sheets.”',
          '“Slope is stiff, area is energy, length is ductility.”',
          '“Loop = lost heat” — the hysteresis-loop area is the energy rubber eats.',
        ],
      },
    ],
  },

  {
    n: '05',
    title: 'Applications of Elastic Behaviour',
    kalam: 'The whole art is to get maximum stiffness and strength from minimum material, staying safely within the elastic limit at all times.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Notation (carried from Topics 01–04):</b> stress <i>σ</i> · strain <i>ε</i> · Young’s <i>Y</i> · Bulk <i>B</i> · Rigidity <i>η</i> · Poisson’s ratio <i>ν</i> · coefficient of linear expansion <i>α</i> · geometrical moment of inertia of a cross-section <i>I</i><sub><i>g</i></sub>.',
      },
      {
        t: 'p',
        html: 'Topics 01–04 built the theory of elasticity from the ground up. This final topic puts it to work in the real world — how beams sag, why girders are I-shaped, how tall a mountain can be, what happens when a clamped rod is heated, how a wire resists twisting, and how Young’s modulus is actually measured in the lab. It also returns to the very beginning: <b>why</b> solids are elastic at all, at the level of atoms.',
      },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards regularly ask the I-section/beam-design reasoning, the mountain-height estimate, and Searle’s experiment (3–5 marks). JEE Main tests beam depression and thermal stress numericals. NEET favours thermal stress and the conceptual beam-design questions. JEE Advanced reaches for torsion of a cylinder and multi-concept thermal-stress problems. This topic ties the whole chapter together.',
      },
      {
        t: 'p',
        html: 'Why is a solid elastic in the first place? Zoom all the way in. The atoms of a solid sit at fixed average positions, held there by electrical forces from their neighbours — attractive when pulled apart, repulsive when pushed together. Each atom rests at the bottom of a “potential well,” the separation <i>r</i><sub>0</sub> where these forces balance. Displace an atom slightly and the well behaves, for small displacements, exactly like a tiny spring: the restoring force grows in proportion to the displacement. Multiply this over the roughly 10<sup>23</sup> atomic bonds in a wire and you get the macroscopic behaviour you already know — <b>Hooke’s law is the collective voice of countless atomic springs.</b> Young’s modulus is large when those bonds are stiff (metals, diamond) and small when they are floppy (rubber, where long molecular chains uncoil rather than stretch their bonds).',
      },
      {
        t: 'p',
        html: 'That microscopic stiffness is what engineers spend their lives exploiting and respecting. Think about it this way… every structure you trust — the railway bridge your train rumbles over, the crane lifting a slab at a construction site, the pillars of a flyover, the wing of an aeroplane — is a deliberate negotiation with elasticity. Too flexible and it sags or sways dangerously; too brittle and it cracks; too heavy and it’s wasteful. The whole art is to get maximum stiffness and strength from minimum material, staying safely within the elastic limit at all times.',
      },
      {
        t: 'p',
        html: 'A few of the headline negotiations:<br>• <b>Beams that don’t sag.</b> A beam loaded in the middle bends — its lower fibres stretch (tension), its upper fibres compress, and a “neutral layer” in between neither stretches nor shrinks. How much it sags (the <b>depression</b>) depends not just on the load and the material but, dramatically, on the shape of its cross-section.<br>• <b>The I-shaped girder.</b> Since the material near the neutral layer barely does any work, you can scoop it out and pile that material far from the centre instead — giving the familiar <b>I-section</b>. Same stiffness, far less weight. This single insight is why steel girders, railway tracks, and aircraft spars are I-shaped or hollow.<br>• <b>Why mountains can’t be infinitely tall.</b> Rock at the base of a mountain bears the weight of everything above it. Pile the mountain too high and that stress exceeds rock’s strength — the base flows or crumbles. This sets a natural ceiling on mountain height of roughly 10 km, which is why Everest is the size it is and not ten times bigger.<br>• <b>Heat as a hidden force.</b> Clamp a rod rigidly and heat it: it wants to expand but can’t, so it pushes on its supports with enormous force. This <b>thermal stress</b> is why railway tracks have gaps, why bridges sit on roller supports, and why pipelines have expansion loops.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Everything here assumes the material stays <b>within its elastic limit</b> — once you cross into plastic flow (Topic 04), these formulas fail and permanent damage begins. The beam and torsion results assume small deformations, uniform cross-sections, and homogeneous isotropic material. The mountain-height estimate is a clean order-of-magnitude argument, not a precise geological prediction (it ignores temperature, rock layering, and isostasy).',
      },

      { t: 'part', title: 'Key formulas and reference data' },
      {
        t: 'formula',
        kicker: 'Depression of a beam under load W',
        main: 'Cantilever (loaded at free end): <i>δ</i> = <i>WL</i><sup>3</sup>/(3<i>YI</i><sub><i>g</i></sub>)<br>Beam on two supports (central load): <i>δ</i> = <i>WL</i><sup>3</sup>/(48<i>YI</i><sub><i>g</i></sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Geometrical moment of inertia of the cross-section',
        main: 'Rectangle (breadth <i>b</i>, depth <i>d</i>): <i>I</i><sub><i>g</i></sub> = <i>bd</i><sup>3</sup>/12<br>Circle (radius <i>r</i>): <i>I</i><sub><i>g</i></sub> = π<i>r</i><sup>4</sup>/4',
        legend: [],
        note: '(about the neutral axis)',
      },
      {
        t: 'p',
        html: 'Key consequence: <i>δ</i> ∝ 1/<i>I</i><sub><i>g</i></sub>, and for a rectangle <i>I</i><sub><i>g</i></sub> ∝ <i>d</i><sup>3</sup> — <b>depth matters far more than breadth.</b>',
      },
      {
        t: 'formula',
        kicker: 'Maximum height of a mountain',
        main: '<i>h</i><sub>max</sub> = <i>σ</i><sub>max</sub>/(<i>ρg</i>)',
        legend: [],
        note: '(base stress = breaking/compressive stress <i>σ</i><sub>max</sub>)',
      },
      {
        t: 'formula',
        kicker: 'Thermal stress',
        main: '<i>σ</i><sub>thermal</sub> = <i>Yα</i> Δ<i>T</i><br><i>F</i><sub>thermal</sub> = <i>YAα</i> Δ<i>T</i>',
        legend: [],
        note: '(rod rigidly clamped at both ends, temperature change Δ<i>T</i>)<br>Note: independent of the rod’s length; the force depends on area but not length.',
      },
      {
        t: 'formula',
        kicker: 'Torsion of a solid cylinder',
        main: '<i>C</i> = (π<i>ηr</i><sup>4</sup>/(2<i>L</i>))<i>θ</i><br>Torsional rigidity <i>c</i> = <i>C</i>/<i>θ</i> = π<i>ηr</i><sup>4</sup>/(2<i>L</i>)',
        legend: [],
        note: '(radius <i>r</i>, length <i>L</i>, twisted through angle <i>θ</i>)',
      },
      {
        t: 'formula',
        kicker: 'Young’s modulus from Searle’s experiment',
        main: '<i>Y</i> = <i>MgL</i>/(π<i>r</i><sup>2</sup> Δ<i>L</i>) = (<i>Mg</i>/<i>A</i>)/(Δ<i>L</i>/<i>L</i>) = slope of the stress–strain graph (stress on the <i>y</i>-axis)',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: 'Representative elastic constants (approximate, at room temperature; for reference)',
        head: ['Material', 'Y (GPa)', 'η (GPa)', 'B (GPa)', 'ν'],
        rows: [
          ['Steel', '~200', '~80', '~160', '~0.29'],
          ['Copper', '~120', '~44', '~140', '~0.34'],
          ['Brass', '~95', '~35', '~110', '~0.34'],
          ['Aluminium', '~70', '~25', '~75', '~0.33'],
          ['Glass', '~60', '~25', '~40', '~0.23'],
          ['Bone', '~15', '~6', '~9', '~0.30'],
          ['Rubber', '~0.01–0.1', 'very low', '~1–2', '~0.50'],
        ],
        note: '(1 GPa = 10<sup>9</sup> Pa. Values vary with composition/treatment — use as orders of magnitude.)',
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: '<b>Derivation 1 — Why Hooke’s law emerges from atoms (qualitative).</b> Let <i>U</i>(<i>r</i>) be the potential energy of two neighbouring atoms a distance <i>r</i> apart, with a minimum at the equilibrium separation <i>r</i><sub>0</sub>. Near <i>r</i><sub>0</sub>, expand <i>U</i>(<i>r</i>) as a parabola (the leading term of any smooth minimum): <i>U</i>(<i>r</i>) ≈ <i>U</i>(<i>r</i><sub>0</sub>) + ½<i>κ</i>(<i>r</i> − <i>r</i><sub>0</sub>)<sup>2</sup>. The interatomic force is <i>F</i> = −d<i>U</i>/d<i>r</i> ≈ −<i>κ</i>(<i>r</i> − <i>r</i><sub>0</sub>) — <b>linear</b> in displacement, i.e. a spring of constant <i>κ</i>. Summed over all bonds across a cross-section, this linear atomic response is the macroscopic Hooke’s law <i>σ</i> = <i>Yε</i>, with <i>Y</i> set by the bond stiffness <i>κ</i> and spacing <i>r</i><sub>0</sub>. Why it matters: it explains why Hooke’s law holds only for small strains — stretch far enough and the parabola approximation (and the bond) breaks.',
      },
      {
        t: 'p',
        html: '<b>Derivation 2 — Maximum height of a mountain.</b> Model the mountain as a column of rock of height <i>h</i> and density <i>ρ</i>. The compressive stress at its base is the weight per unit area of the rock above:<br><i>σ</i><sub>base</sub> = (volume × <i>ρ</i> × <i>g</i>)/area = <i>Ahρg</i>/<i>A</i> = <i>ρgh</i><br>The base cannot bear more than the material’s breaking (compressive) stress <i>σ</i><sub>max</sub>; beyond it, the rock yields and flows. Setting <i>σ</i><sub>base</sub> = <i>σ</i><sub>max</sub>:<br><i>h</i><sub>max</sub> = <i>σ</i><sub>max</sub>/(<i>ρg</i>)<br>For rock, <i>σ</i><sub>max</sub> ∼ 3 × 10<sup>8</sup> Pa and <i>ρ</i> ∼ 3 × 10<sup>3</sup> kg m<sup>−3</sup>, giving <i>h</i><sub>max</sub> ∼ (3 × 10<sup>8</sup>)/((3 × 10<sup>3</sup>)(10)) ≈ 10<sup>4</sup> m = 10 km — comfortably bracketing Everest.',
      },
      {
        t: 'p',
        html: '<b>Derivation 3 — Thermal stress.</b> Heat a rod and, left free, it would lengthen by Δ<i>L</i> = <i>Lα</i> Δ<i>T</i>, a thermal strain of <i>ε</i><sub>th</sub> = <i>α</i> Δ<i>T</i>. Now clamp both ends so it cannot expand. The walls must supply exactly the compression needed to cancel that expansion, i.e. an equal and opposite mechanical strain <i>ε</i> = <i>α</i> Δ<i>T</i>. By Hooke’s law the stress this requires is<br><i>σ</i><sub>thermal</sub> = <i>Yε</i> = <i>Yα</i> Δ<i>T</i><br>and the force on each support is <i>F</i> = <i>σA</i> = <i>YAα</i> Δ<i>T</i>. The striking feature: neither expression contains <i>L</i> — a short clamped rod and a long one develop the same thermal stress for the same temperature change.',
      },
      {
        t: 'p',
        html: '<b>Derivation 4 — Torsion of a solid cylinder.</b> Fix one end of a cylinder (radius <i>R</i>, length <i>L</i>, rigidity <i>η</i>) and twist the other through angle <i>θ</i>. Consider a thin coaxial shell of radius <i>x</i> and thickness d<i>x</i>. A straight line drawn along its surface is sheared through an angle <i>φ</i>, where the twist at the rim, <i>xθ</i>, equals <i>Lφ</i>, so <i>φ</i> = <i>xθ</i>/<i>L</i>. The shear stress on this shell is <i>τ</i> = <i>ηφ</i> = <i>ηxθ</i>/<i>L</i>. The tangential force on the ring of area 2π<i>x</i> d<i>x</i> is <i>τ</i> · 2π<i>x</i> d<i>x</i>, and its moment about the axis is<br>d<i>C</i> = <i>τ</i>(2π<i>x</i> d<i>x</i>)<i>x</i> = (2π<i>ηθ</i>/<i>L</i>)<i>x</i><sup>3</sup> d<i>x</i><br>Integrating from 0 to <i>R</i>:<br><i>C</i> = (2π<i>ηθ</i>/<i>L</i>) ∫<sub>0</sub><sup><i>R</i></sup> <i>x</i><sup>3</sup> d<i>x</i> = (2π<i>ηθ</i>/<i>L</i>) · <i>R</i><sup>4</sup>/4 = π<i>ηR</i><sup>4</sup><i>θ</i>/(2<i>L</i>)<br>The <i>R</i><sup>4</sup> dependence is why even a modest increase in shaft radius dramatically stiffens it against twisting.',
      },
      {
        t: 'proc',
        title: 'Procedure — Searle’s experiment (determining Y)',
        steps: [
          'Hang <b>two identical wires</b> side by side from the same rigid support: a reference wire (carrying a fixed dead load to keep it taut) and the experimental wire (which will be loaded).',
          'Connect them with a frame carrying a <b>spirit level</b> and a <b>micrometer screw</b>, so tilting of the frame measures the difference in their elongations.',
          'Add known loads to the experimental wire in steps; for each, level the spirit bubble with the micrometer and record the extension Δ<i>L</i>.',
          'Plot <b>load (or stress) against extension (or strain)</b> — a straight line within the elastic limit.',
        ],
      },
      {
        t: 'p',
        html: 'From its slope, <i>Y</i> = <i>MgL</i>/(π<i>r</i><sup>2</sup> Δ<i>L</i>). Why two wires? The reference wire automatically cancels errors from temperature change and any yielding of the support — both wires shift together, so only the load-induced extension is measured. (Measure the wire’s radius separately and carefully, since <i>Y</i> ∝ 1/<i>r</i><sup>2</sup> — a small radius error is doubled in the result.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'The breaking (compressive) stress of a certain rock is 3.0 × 10<sup>8</sup> Pa and its density is 2.5 × 10<sup>3</sup> kg m<sup>−3</sup>. Estimate the maximum height of a mountain that this rock could support. (Take <i>g</i> = 10 m s<sup>−2</sup>.)',
        steps: [
          'The base stress <i>ρgh</i> must not exceed the breaking stress:<br><i>h</i><sub>max</sub> = <i>σ</i><sub>max</sub>/(<i>ρg</i>) = (3.0 × 10<sup>8</sup>)/((2.5 × 10<sup>3</sup>)(10)) = (3.0 × 10<sup>8</sup>)/(2.5 × 10<sup>4</sup>)',
          'Reassuringly close to the scale of the tallest mountains on Earth.',
        ],
        ans: '1.2 × 10<sup>4</sup> m = 12 km',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A steel rod is clamped rigidly between two fixed walls and then heated so its temperature rises by 40 °C. Given <i>Y</i> = 2.0 × 10<sup>11</sup> Pa and <i>α</i> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>, find the thermal stress developed. Does the answer depend on the rod’s length?',
        steps: [
          '<b>The trap:</b> students hunt for the rod’s length and cross-section, assuming a longer or thinner rod gives a different stress. It doesn’t.',
          '<b>Speed method:</b> thermal stress depends only on material and temperature change:<br><i>σ</i> = <i>Yα</i> Δ<i>T</i> = (2.0 × 10<sup>11</sup>)(1.2 × 10<sup>−5</sup>)(40)',
          '<b>No</b> — it is independent of length (and the stress is independent of area too; only the force = <i>σA</i> would need the area). If a NEET option changes the answer when “length is doubled,” eliminate it on sight.',
        ],
        ans: '9.6 × 10<sup>7</sup> Pa',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A cantilever beam of length 1.0 m has a rectangular cross-section of breadth 4.0 cm and depth 6.0 cm. A load of 200 N is hung from its free end. If <i>Y</i> = 2.0 × 10<sup>11</sup> Pa, find the depression of the free end.',
        steps: [
          '<b>Two steps:</b> compute the geometrical moment of inertia, then apply the cantilever formula.',
          '<i>I</i><sub><i>g</i></sub> = <i>bd</i><sup>3</sup>/12 = (0.040)(0.060)<sup>3</sup>/12 = (0.040)(2.16 × 10<sup>−4</sup>)/12 = (8.64 × 10<sup>−6</sup>)/12 = 7.2 × 10<sup>−7</sup> m<sup>4</sup>',
          '<i>δ</i> = <i>WL</i><sup>3</sup>/(3<i>YI</i><sub><i>g</i></sub>) = (200)(1.0)<sup>3</sup>/(3(2.0 × 10<sup>11</sup>)(7.2 × 10<sup>−7</sup>)) = 200/(4.32 × 10<sup>5</sup>)',
          '<b>Check the intuition:</b> if the beam were turned on its side (breadth and depth swapped, depth now 4.0 cm), <i>I</i><sub><i>g</i></sub> would fall by a factor (6/4)<sup>2</sup> = 2.25 and the depression would rise to ≈ 1.0 mm — concretely showing why beams are mounted with their <b>long dimension vertical.</b>',
        ],
        ans: '4.6 × 10<sup>−4</sup> m = 0.46 mm',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A solid cylindrical shaft of radius 2.0 cm and length 1.0 m is made of a metal of shear modulus <i>η</i> = 4.0 × 10<sup>10</sup> Pa. (a) Find the torque required to twist one end through 0.50 rad relative to the other. (b) If the radius is doubled, by what factor does the required torque change for the same twist?',
        steps: [
          '(a) Using the torsion result:<br><i>C</i> = π<i>ηr</i><sup>4</sup><i>θ</i>/(2<i>L</i>) = π(4.0 × 10<sup>10</sup>)(0.020)<sup>4</sup>(0.50)/(2(1.0))',
          'Compute <i>r</i><sup>4</sup> = (0.020)<sup>4</sup> = 1.6 × 10<sup>−7</sup> m<sup>4</sup>:<br><i>C</i> = π(4.0 × 10<sup>10</sup>)(1.6 × 10<sup>−7</sup>)(0.50)/2 = π(3.2 × 10<sup>3</sup>)/2 ≈ 5.0 × 10<sup>3</sup> N·m',
          '(b) Since <i>C</i> ∝ <i>r</i><sup>4</sup>, doubling the radius multiplies the torque by 2<sup>4</sup> = 16. A shaft only twice as thick is sixteen times harder to twist — the dramatic payoff of the <i>r</i><sup>4</sup> law, and the reason drive shafts and axles are made as fat as weight allows.',
        ],
        ans: '(a) 5.0 × 10<sup>3</sup> N·m (b) 2<sup>4</sup> = 16',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Explain why the cross-section of a girder used in construction is made in the shape of the letter “I” rather than being solid rectangular. Which dimension of a beam most strongly reduces its sagging, and why?',
            a: 'material near the neutral axis carries little stress, so removing it (I-section) keeps stiffness while saving weight; depth, because <i>I</i><sub><i>g</i></sub> ∝ <i>d</i><sup>3</sup> for a rectangle',
          },
          {
            q: '[NEET] A metal rod is held between two rigid clamps and cooled by 30 °C. If <i>Y</i> = 1.0 × 10<sup>11</sup> Pa and <i>α</i> = 2.0 × 10<sup>−5</sup> °C<sup>−1</sup>, find the tensile stress that develops in the rod.',
            a: '6.0 × 10<sup>7</sup> Pa',
          },
          {
            q: '[JEE Main] A beam supported at both ends carries a load <i>W</i> at its centre and depresses by <i>δ</i>. If the beam is replaced by one of the same material and length but with twice the depth (same breadth), find the new depression in terms of <i>δ</i>.',
            a: '<i>δ</i>/8 (since <i>δ</i> ∝ 1/<i>d</i><sup>3</sup>)',
          },
          {
            q: '[JEE Main] A wire of radius <i>r</i> requires a torque <i>C</i> to twist through a given angle. What torque is required to twist a wire of the same length and material but radius 1.5<i>r</i> through the same angle?',
            a: '(1.5)<sup>4</sup><i>C</i> = 5.06<i>C</i>',
          },
          {
            q: '[JEE Advanced] A steel rail of cross-sectional area 40 cm<sup>2</sup> is clamped so it cannot expand. Its temperature rises by 25 °C. Taking <i>Y</i> = 2.0 × 10<sup>11</sup> Pa and <i>α</i> = 1.2 × 10<sup>−5</sup> °C<sup>−1</sup>, find the force the rail exerts on its supports.',
            a: '<i>F</i> = <i>YAα</i> Δ<i>T</i> = (2.0 × 10<sup>11</sup>)(40 × 10<sup>−4</sup>)(1.2 × 10<sup>−5</sup>)(25) = 2.4 × 10<sup>5</sup> N',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A girder is given an I-shaped cross-section primarily because:',
        opts: [
          { label: 'it looks aesthetically better', nudge: '<b>(a)</b> appearance is irrelevant to mechanics.' },
          { label: 'it uses material far from the neutral axis, giving high stiffness for low weight', nudge: null },
          {
            label: 'the I-shape increases the Young’s modulus of the steel',
            nudge: '<b>(c)</b> <i>Y</i> is a material property — shape cannot change it.',
          },
          {
            label: 'it makes the beam more brittle and therefore stronger',
            nudge: '<b>(d)</b> brittleness is undesirable and unrelated to the I-shape’s purpose.',
          },
        ],
        correct: 1,
        solution: 'Bending stress is greatest far from the neutral axis and nearly zero at it, so concentrating material in top and bottom flanges maximises <i>I</i><sub><i>g</i></sub> per unit weight.',
      },
      {
        t: 'mcq',
        q: 'The maximum height of a mountain on a planet depends on the rock’s breaking stress <i>σ</i>, its density <i>ρ</i>, and the surface gravity <i>g</i> as:',
        opts: [
          { label: '<i>σ</i>/(<i>ρg</i>)', nudge: null },
          { label: '<i>ρg</i>/<i>σ</i>', nudge: '<b>(b)</b> is the reciprocal (wrong dimensions for height).' },
          {
            label: '<i>σρg</i>',
            nudge: '<b>(c)</b> and <b>(d)</b> misplace the factors — a quick dimension check ([<i>σ</i>/(<i>ρg</i>)] = metres) rules them out instantly.',
          },
          {
            label: '<i>σg</i>/<i>ρ</i>',
            nudge: '<b>(c)</b> and <b>(d)</b> misplace the factors — a quick dimension check ([<i>σ</i>/(<i>ρg</i>)] = metres) rules them out instantly.',
          },
        ],
        correct: 0,
        solution: 'Base stress <i>ρgh</i> set equal to <i>σ</i> gives <i>h</i><sub>max</sub> = <i>σ</i>/(<i>ρg</i>). (Note: higher gravity ⇒ shorter mountains, which is why a low-gravity planet like Mars hosts Olympus Mons.)',
      },
      {
        t: 'mcq',
        q: 'A rod clamped rigidly between two walls is heated. The thermal stress developed is independent of:',
        opts: [
          {
            label: 'the Young’s modulus of the rod',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> all appear explicitly in <i>σ</i> = <i>Yα</i>Δ<i>T</i>, so the stress does depend on each of them.',
          },
          {
            label: 'the temperature rise',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> all appear explicitly in <i>σ</i> = <i>Yα</i>Δ<i>T</i>, so the stress does depend on each of them.',
          },
          {
            label: 'the coefficient of linear expansion',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> all appear explicitly in <i>σ</i> = <i>Yα</i>Δ<i>T</i>, so the stress does depend on each of them.',
          },
          { label: 'the length of the rod', nudge: null },
        ],
        correct: 3,
        solution: '<i>σ</i> = <i>Yα</i>Δ<i>T</i> contains no length term. Length affects how much the rod would expand, but not the stress when expansion is fully prevented.',
      },
      {
        t: 'mcq',
        q: 'The depression at the free end of a loaded cantilever of rectangular cross-section is proportional to:',
        opts: [
          {
            label: '<i>d</i><sup>3</sup>',
            nudge: '<b>(a)</b> confuses the dependence of <i>I</i><sub><i>g</i></sub> (which does go as <i>d</i><sup>3</sup>) with that of the depression (its reciprocal).',
          },
          { label: '1/<i>d</i><sup>3</sup>', nudge: null },
          { label: '<i>d</i>', nudge: '<b>(c)</b> and <b>(d)</b> use the wrong power of depth entirely.' },
          { label: '1/<i>d</i>', nudge: '<b>(c)</b> and <b>(d)</b> use the wrong power of depth entirely.' },
        ],
        correct: 1,
        solution: '<i>δ</i> ∝ 1/<i>I</i><sub><i>g</i></sub> and <i>I</i><sub><i>g</i></sub> = <i>bd</i><sup>3</sup>/12 ∝ <i>d</i><sup>3</sup>, so <i>δ</i> ∝ 1/<i>d</i><sup>3</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Putting length into thermal stress.</b> <i>σ</i> = <i>Yα</i>Δ<i>T</i> has no length. Length determines the (prevented) expansion, not the resulting stress. Only the force (<i>σA</i>) needs the area.',
          '<b>Confusing <i>I</i><sub><i>g</i></sub> (geometrical) with mass moment of inertia.</b> The “moment of inertia” in beam formulas is the area moment <i>I</i><sub><i>g</i></sub> = ∫ <i>y</i><sup>2</sup> d<i>A</i> (units m<sup>4</sup>), not the rotational ∑ <i>mr</i><sup>2</sup>. Same name, different quantity.',
          '<b>Treating depth and breadth as equal partners.</b> For a rectangular beam, depression goes as 1/<i>d</i><sup>3</sup> but only as 1/<i>b</i>. Doubling the depth is four times as effective as doubling the breadth — always orient the larger dimension vertically.',
          '<b>Forgetting the <i>r</i><sup>4</sup> laws.</b> Both beam stiffness (circular, <i>I</i><sub><i>g</i></sub> ∝ <i>r</i><sup>4</sup>) and torsional rigidity (∝ <i>r</i><sup>4</sup>) scale with the fourth power of radius. Small radius changes have outsized effects — and a small radius measurement error wrecks a <i>Y</i> determination, since <i>Y</i> ∝ 1/<i>r</i><sup>2</sup>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “what happens if I change a dimension” question (beam, shaft, wire), don’t recompute from scratch — use the <b>power-law shortcut</b>. Write the proportionality (<i>δ</i> ∝ 1/<i>d</i><sup>3</sup>, <i>C</i> ∝ <i>r</i><sup>4</sup>, <i>σ</i><sub>th</sub> independent of <i>L</i>), take the ratio, and you have the answer in one line. Most exam questions on this topic are secretly just testing whether you know the exponent.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Atomic origin',
            note: 'Hooke’s law = parabolic bottom of the interatomic potential well; <i>Y</i> ∝ bond stiffness. Valid only for small strains.',
          },
          {
            f: 'Beam depression',
            note: 'cantilever <i>δ</i> = <i>WL</i><sup>3</sup>/(3<i>YI</i><sub><i>g</i></sub>); supported (central) <i>δ</i> = <i>WL</i><sup>3</sup>/(48<i>YI</i><sub><i>g</i></sub>). Rectangle <i>I</i><sub><i>g</i></sub> = <i>bd</i><sup>3</sup>/12, circle <i>I</i><sub><i>g</i></sub> = π<i>r</i><sup>4</sup>/4. <i>δ</i> ∝ 1/<i>d</i><sup>3</sup>.',
          },
          {
            f: 'I-section',
            note: 'remove low-stress material near the neutral axis → high stiffness, low weight.',
          },
          { f: 'Mountain height', note: '<i>h</i><sub>max</sub> = <i>σ</i><sub>max</sub>/(<i>ρg</i>) ≈ 10 km for rock.' },
          {
            f: 'Thermal stress',
            note: '<i>σ</i> = <i>Yα</i> Δ<i>T</i>, force = <i>YAα</i> Δ<i>T</i> — independent of length.',
          },
          {
            f: 'Torsion',
            note: '<i>C</i> = π<i>ηr</i><sup>4</sup><i>θ</i>/(2<i>L</i>); torsional rigidity ∝ <i>r</i><sup>4</sup>.',
          },
          {
            f: 'Searle’s experiment',
            note: 'twin-wire setup (reference cancels temperature/support errors); <i>Y</i> = <i>MgL</i>/(π<i>r</i><sup>2</sup> Δ<i>L</i>) from the load–extension slope.',
          },
        ],
        aids: [
          '“Depth cubed, breadth single” — beams sag as 1/<i>d</i><sup>3</sup> but only 1/<i>b</i>.',
          '“Heat builds stress, not by the metre” — <i>σ</i> = <i>Yα</i>Δ<i>T</i>, no length.',
          '“Twist loves the fourth power” — torsional stiffness ∝ <i>r</i><sup>4</sup>.',
          '“Mountains end where rock gives way” — <i>h</i><sub>max</sub> = <i>σ</i><sub>max</sub>/(<i>ρg</i>).',
        ],
      },
    ],
  },
];
