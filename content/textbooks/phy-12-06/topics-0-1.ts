import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, the opening section and Topic 01: pp. 390–402 of the Class 12
 * Physics Master Reference, word for word. The chapter’s title page and
 * contents (p. 389 and the top of p. 390) are not copied. The opening,
 * “Experimental Foundations — The Faraday & Henry Experiments” (pp. 390–392),
 * is n “00” (the founder’s choice, 2026-10-22), split at its own headings.
 * Topic 01, Magnetic Flux, Faraday’s and Lenz’s Laws (pp. 393–402), is split
 * at its Sections 1 to 8 (Section 3 is the book’s “CBSE Board Derivations &
 * Key Procedures”). Figures 6.1 (pp. 396–397) and 6.2 (pp. 399–400) are
 * redrawn in lib/diagrams/physics-12-06.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Opening section · pp. 390–392 ─────────────────────────
  {
    n: '00',
    title: 'Experimental Foundations — The Faraday & Henry Experiments',
    kalam: 'An emf is induced in a circuit whenever the magnetic flux linked with it changes with time — and the faster the flux changes, the larger the induced emf.',
    blocks: [
      { t: 'part', title: 'Why this chapter exists' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards may ask a 2–3 mark “describe Faraday’s experiment” or “what do the experiments conclude” question. NEET/JEE rarely ask the experiments directly but test the conclusion they establish — that a <b>changing</b> magnetic flux, not a magnetic field by itself, is the source of induced emf. Understanding these experiments makes every later formula feel inevitable rather than arbitrary.',
      },
      {
        t: 'p',
        html: 'By the 1820s physicists knew that an electric current produces a magnetic field (Oersted, Ampère). The natural question was the reverse: can a magnetic field produce a current? Working independently, <b>Michael Faraday</b> in England and <b>Joseph Henry</b> in the USA answered yes — but with a crucial subtlety that took years to pin down. Their experiments are the bedrock of the entire chapter, and of the electrical age that followed: every generator, transformer, and induction motor is a descendant of what follows.',
      },

      { t: 'part', title: 'Experiment 1 — A magnet and a coil' },
      {
        t: 'p',
        html: 'A coil of wire is connected to a sensitive galvanometer (a current detector with a centre-zero needle). No battery is present anywhere in the circuit.<br>• When a bar magnet is <b>pushed toward</b> the coil, the galvanometer needle deflects — a current flows, even though there is no cell.<br>• When the magnet is <b>held stationary</b> (even right inside the coil), the needle returns to zero — no current.<br>• When the magnet is <b>pulled away</b>, the needle deflects the <b>opposite</b> way.<br>• Moving the magnet <b>faster</b> produces a <b>larger</b> deflection.<br>• The same effects occur if the magnet is held still and the <b>coil</b> is moved instead — only the relative motion matters.',
      },
      {
        t: 'p',
        html: '<b>Conclusion:</b> relative motion between the magnet and the coil induces a current. Since current needs an emf to drive it, an <b>emf is induced</b> whenever the magnetic environment of the coil changes, and its size grows with the rate of change.',
      },

      { t: 'part', title: 'Experiment 2 — A coil in place of the magnet' },
      {
        t: 'p',
        html: 'The bar magnet is replaced by a second coil carrying a steady current from a battery (a current-carrying coil is itself a magnet). When this second coil is moved toward or away from the first, the galvanometer in the first coil deflects exactly as it did with the bar magnet.',
      },
      {
        t: 'p',
        html: '<b>Conclusion:</b> a current-carrying coil behaves just like a magnet, so the effect is genuinely about the <b>magnetic field</b> linking the coil — not about magnets specifically. This is the seed of mutual induction (Topic 03).',
      },

      { t: 'part', title: 'Experiment 3 — No motion at all (the decisive one)' },
      {
        t: 'p',
        html: 'Now nothing moves. Two coils are placed close together and held fixed. The first (primary) coil is connected to a battery through a <b>key</b> (<b>switch</b>) and a variable resistor; the second (secondary) coil is connected only to the galvanometer.<br>• At the instant the key is <b>pressed</b> (current in the primary suddenly rises), the galvanometer gives a <b>momentary</b> kick.<br>• While the current stays <b>steady</b>, the galvanometer reads <b>zero</b> — no matter how large that current is.<br>• At the instant the key is <b>released</b> (current suddenly falls), the galvanometer kicks the <b>other</b> way.<br>• The same momentary deflections appear if, instead of switching, the resistance is varied so the primary current <b>changes</b>.',
      },
      {
        t: 'p',
        html: '<b>Conclusion — the heart of the whole chapter:</b> induced emf appears even with <b>no motion whatsoever</b>. What all three experiments share is not motion and not the mere presence of a field, but a <b>changing magnetic flux</b> through the circuit. A steady flux, however large, induces nothing; a changing flux induces an emf. Joseph Henry observed the same effect independently and went on to discover self-induction.',
      },

      { t: 'part', title: 'The unifying statement' },
      {
        t: 'p',
        html: 'Strip away the particular apparatus and every experiment reduces to one sentence, which the rest of the chapter makes quantitative:<br><b>An emf is induced in a circuit whenever the magnetic flux linked with it changes with time — and the faster the flux changes, the larger the induced emf.</b>',
      },
      {
        t: 'p',
        html: 'This single idea unfolds into Faraday’s law and Lenz’s law (Topic 01), the many ways of changing flux — by motion (Topic 02), by changing currents (Topic 03), and by rotation (Topic 04, the AC generator) — and the bulk-conductor version, eddy currents.',
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 393–402 ─────────────────────────
  {
    n: '01',
    title: 'Magnetic Flux, Faraday’s and Lenz’s Laws',
    kalam: 'A steady, unchanging flux, no matter how enormous, induces nothing.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation stone of the entire chapter. CBSE Boards almost always carry a 2–3 mark derivation or definition (flux, Faraday’s law statement, Lenz’s law as energy conservation). NEET reliably asks 1 conceptual question on the change-vs-magnitude trap. JEE Main carries 1–2 numericals on induced emf/charge, and JEE Advanced loves combining flux-by-integration (non-uniform fields) with Lenz-law direction reasoning.',
      },
      {
        t: 'p',
        html: 'Imagine you are standing on a railway platform during the monsoon, holding a large empty picture frame out into the rain. How much rain passes through the frame in one second? It depends on three things: how heavy the rain is, how big your frame is, and how you tilt it. Hold it flat, face-up to the falling rain, and a lot passes through. Tilt it sideways so the rain just grazes past, and almost nothing goes through. That “amount of rain threading through the frame” is exactly the idea behind <b>magnetic flux</b> — except instead of raindrops, we are counting how many magnetic field lines pierce through a loop of wire.',
      },
      {
        t: 'p',
        html: 'So magnetic flux, written Φ<sub>B</sub>, is a measure of how much magnetic field passes through a given area. A strong field threading straight through a large loop means high flux. The same field skimming parallel to the loop’s surface means zero flux — the lines slide past without piercing through.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a small circular coil and a bar magnet sitting next to it on a table. Right now, nothing is happening — the galvanometer connected to the coil reads zero. The instant you push the magnet towards the coil, the needle jumps. Hold the magnet still again — even right inside the coil — and the needle drops back to zero. Pull it away, and the needle jumps the other way. This is the single most important observation in this entire chapter, and Michael Faraday spent years chasing it: <b>it is not the presence of a magnetic field that creates electricity in the coil — it is the change in flux through it.</b> A steady, unchanging flux, no matter how enormous, induces nothing.',
      },
      {
        t: 'p',
        html: 'This leads to <b>Faraday’s law</b>: whenever the magnetic flux linked with a circuit changes, an emf (a voltage that can drive current) is induced, and the faster the flux changes, the bigger the emf. A gentle, slow change gives a feeble emf; a sudden, violent change gives a strong one.',
      },
      {
        t: 'p',
        html: 'But nature adds a twist, and this is <b>Lenz’s law</b>: the induced current always flows in whatever direction fights the change that created it. Think of nature as a stubborn, lazy referee who hates being disturbed. Push a magnet’s north pole toward a coil, and the coil promptly turns its own near-face into a north pole to repel the intruder. Pull the magnet away, and the coil switches to a south pole to cling on and resist the departure. The coil always opposes whatever you are trying to do — and that opposition is not arbitrary. It is the universe protecting the law of conservation of energy, as we’ll see in CBSE board derivations and key procedures.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions you must respect:</b><br>• The simple formula Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i> assumes the field <i>B⃗</i> is <b>uniform</b> across the whole area and the surface is <b>flat</b>. For a non-uniform field (say, near a current-carrying wire) you must integrate.<br>• Induced emf depends only on the rate of change of flux — <b>not</b> on the resistance of the circuit. The induced current, however, does depend on resistance through <i>I</i> = <i>ε</i>/<i>R</i>. A perfectly insulating loop still has an induced emf, but zero current.<br>• A constant flux — even a huge one — produces <b>zero</b> emf. This is the trap that catches more students than any other in the chapter.<br>• The angle <i>θ</i> in the flux formula is always measured between <i>B⃗</i> and the <b>area vector</b> (the normal to the surface), never between <i>B⃗</i> and the plane of the loop.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Magnetic flux (uniform field, flat area)',
        main: 'Φ<sub>B</sub> = <i>B⃗</i> · <i>A⃗</i> = <i>BA</i> cos <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Magnetic flux (non-uniform field or curved surface)',
        main: 'Φ<sub>B</sub> = ∫ <i>B⃗</i> · d<i>A⃗</i> = ∫ <i>B</i> d<i>A</i> cos <i>θ</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Faraday’s law of induction (single loop)',
        main: '<i>ε</i> = −dΦ<sub>B</sub>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Faraday’s law for a coil of <i>N</i> turns',
        main: '<i>ε</i> = −<i>N</i> dΦ<sub>B</sub>/d<i>t</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Induced current',
        main: '<i>I</i> = |<i>ε</i>|/<i>R</i> = (<i>N</i>/<i>R</i>) |dΦ<sub>B</sub>/d<i>t</i>|',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Total induced charge (independent of time taken!)',
        main: '<i>q</i> = <i>N</i> |ΔΦ<sub>B</sub>|/<i>R</i>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Notation key:</b><br>• Φ<sub>B</sub> — magnetic flux through the loop (the core quantity; carried throughout this chapter)<br>• <i>B⃗</i> — magnetic field; <i>B</i> its magnitude<br>• <i>A⃗</i> — area vector, perpendicular to the surface, magnitude equal to area <i>A</i><br>• <i>θ</i> — angle between <i>B⃗</i> and <i>A⃗</i><br>• <i>ε</i> — induced emf<br>• <i>N</i> — number of turns in the coil<br>• <i>I</i> — induced current; <i>R</i> — total circuit resistance<br>• <i>q</i> — total charge displaced; ΔΦ<sub>B</sub> — net change in flux',
      },
      {
        t: 'p',
        html: '<b>SI units & dimensions:</b><br>• Magnetic flux: weber (Wb), where 1 Wb = 1 T · m<sup>2</sup> = 1 V · s. Dimensional formula: [Φ<sub>B</sub>] = [M L<sup>2</sup> T<sup>−2</sup> A<sup>−1</sup>]<br>• Induced emf: volt (V). Dimensional formula: [<i>ε</i>] = [M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]<br>• The negative sign in Faraday’s law is <b>not</b> a numerical factor — it is a direction-bookkeeper that encodes Lenz’s law. When computing only the magnitude of emf, you drop it and reinstate direction separately.',
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: '<b>(a) Building up the flux integral.</b> Start with the simplest case: a flat surface of area <i>A</i> in a uniform field <i>B⃗</i>, with the area vector <i>A⃗</i> making angle <i>θ</i> with the field. Only the component of <i>B⃗</i> along the normal threads through the surface; the in-plane component slides past and contributes nothing. That perpendicular component is <i>B</i> cos <i>θ</i>, so the flux is<br>Φ<sub>B</sub> = (<i>B</i> cos <i>θ</i>)<i>A</i> = <i>BA</i> cos <i>θ</i> = <i>B⃗</i> · <i>A⃗</i>.',
      },
      {
        t: 'p',
        html: 'Now suppose the field is not uniform — it varies in magnitude and direction across the surface. We chop the surface into infinitesimal patches d<i>A⃗</i>, each so tiny that <i>B⃗</i> is effectively constant over it. The flux through one patch is <i>B⃗</i> · d<i>A⃗</i>, and summing over all patches turns the sum into an integral:<br>Φ<sub>B</sub> = ∫ <i>B⃗</i> · d<i>A⃗</i>.<br>This integral form is what you reach for whenever <i>B⃗</i> changes from point to point — the central trick in JEE Advanced flux problems.',
      },
      {
        t: 'p',
        html: '<b>(b) Faraday’s law and the induced charge.</b> Faraday’s experiments showed that the induced emf equals the negative rate of change of flux linkage. For <i>N</i> turns:<br><i>ε</i> = −<i>N</i> dΦ<sub>B</sub>/d<i>t</i>.',
      },
      {
        t: 'p',
        html: 'Here is a beautiful and exam-favourite consequence. The induced current is <i>I</i> = <i>ε</i>/<i>R</i>, so the charge that flows in a small time d<i>t</i> is d<i>q</i> = <i>I</i> d<i>t</i> = (<i>ε</i>/<i>R</i>) d<i>t</i>. Substituting Faraday’s law:<br>d<i>q</i> = −(<i>N</i>/<i>R</i>)(dΦ<sub>B</sub>/d<i>t</i>) d<i>t</i> = −(<i>N</i>/<i>R</i>) dΦ<sub>B</sub>.<br>Integrating from the initial to the final state:<br><i>q</i> = −(<i>N</i>/<i>R</i>) ∫<sub>Φ<sub>i</sub></sub><sup>Φ<sub>f</sub></sup> dΦ<sub>B</sub> = <i>N</i>(Φ<sub>i</sub> − Φ<sub>f</sub>)/<i>R</i> = −<i>N</i>ΔΦ/<i>R</i>.',
      },
      {
        t: 'p',
        html: 'The remarkable physical insight: <b>the total charge depends only on the net change in flux and the resistance — not on how quickly the change happens.</b> Whether you yank the magnet out in a flash or ease it out slowly, the same total charge flows. (A fast pull gives a large current for a short time; a slow pull gives a small current for a long time — and they balance out exactly.)',
      },
      {
        t: 'p',
        html: '<b>(c) Lenz’s law as conservation of energy.</b> Why must the induced current oppose the change, rather than aid it? Suppose, for contradiction, that it aided the change. Push a magnet toward a coil; the induced current would then create a face that attracts the magnet, pulling it in faster, inducing a still larger current, attracting it harder still — an ever-accelerating magnet generating ever-growing electrical energy out of nothing. That is a perpetual motion machine, forbidden by conservation of energy.',
      },
      {
        t: 'p',
        html: 'So the induced current must oppose the approaching magnet, meaning <b>you have to do work</b> to push the magnet in against this opposition. That mechanical work you supply is exactly the source of the electrical energy that appears in the circuit (and ultimately the heat dissipated in the resistance). Lenz’s law is therefore not an independent rule bolted on top of Faraday’s law — it is energy conservation written into the minus sign.',
      },
      { t: 'fig', id: 'p12-06-fig-6.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A circular coil of <i>N</i> = 200 turns and radius <i>r</i> = 5.0 cm is placed so that its plane is perpendicular to a uniform magnetic field of <i>B</i> = 0.40 T (the field points along the area vector). The field is then steadily reduced to zero in 0.20 s. Find (a) the initial flux through one turn, and (b) the magnitude of the induced emf.',
        steps: [
          '<b>Given:</b> <i>N</i> = 200, <i>r</i> = 5.0 cm = 0.050 m, <i>B</i> = 0.40 T, <i>θ</i> = 0°, Δ<i>t</i> = 0.20 s.',
          '(a) Area of one turn: <i>A</i> = π<i>r</i><sup>2</sup> = π(0.050)<sup>2</sup> = 7.85 × 10<sup>−3</sup> m<sup>2</sup>.<br>Φ<sub>B</sub> = <i>BA</i> cos 0° = (0.40)(7.85 × 10<sup>−3</sup>) = 3.14 × 10<sup>−3</sup> Wb.',
          '(b) The flux falls from Φ<sub>B</sub> to 0, so |ΔΦ<sub>B</sub>| = 3.14 × 10<sup>−3</sup> Wb.<br>|<i>ε</i>| = <i>N</i> |ΔΦ<sub>B</sub>|/Δ<i>t</i> = 200 × (3.14 × 10<sup>−3</sup>)/0.20',
          '(Notice how stating the angle, substituting cleanly, and tracking units carries the marks.)',
        ],
        ans: 'The induced emf is 3.14 V.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A square conducting loop of area 100 cm<sup>2</sup> lies entirely inside a large region of uniform magnetic field 0.50 T perpendicular to the plane of the loop. The loop is pushed across the region at a steady 2.0 m/s, never crossing the boundary. What is the induced emf?',
        steps: [
          '<b>The trap:</b> students see “loop moving in a magnetic field” and instantly write <i>ε</i> = <i>Blv</i> = 0.50 × 0.10 × 2.0 = 0.10 V.',
          '<b>The fast, correct read:</b> ask one question — does the flux change? The loop is always fully inside a uniform field, so the number of field lines threading it is constant: Φ = <i>BA</i> = constant. Therefore dΦ<sub>B</sub>/d<i>t</i> = 0 and<br>Motional emf appears only at a boundary, where the loop’s area inside the field is changing. Inside a uniform field, motion at any speed induces nothing. <b>Speed rule:</b> never compute — first check whether Φ<sub>B</sub> = <i>BA</i> cos <i>θ</i> actually changes.',
        ],
        ans: '<i>ε</i> = 0',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A coil of <i>N</i> = 50 turns, area <i>A</i> = 200 cm<sup>2</sup>, and total resistance <i>R</i> = 10 Ω sits with its plane perpendicular to a field that decreases uniformly as <i>B</i>(<i>t</i>) = (0.60 − 0.20 <i>t</i>) T (with <i>t</i> in seconds). Find (a) the induced emf, (b) the induced current, and (c) the total heat dissipated by the time the field reaches zero.',
        steps: [
          'This problem links Faraday’s law with Joule heating.',
          '<i>A</i> = 200 cm<sup>2</sup> = 0.020 m<sup>2</sup>, and d<i>B</i>/d<i>t</i> = −0.20 T/s.',
          '(a) Φ<sub>B</sub> = <i>BA</i> per turn, so<br>|<i>ε</i>| = <i>NA</i> |d<i>B</i>/d<i>t</i>| = 50 × 0.020 × 0.20 = 0.20 V.',
          '(b) <i>I</i> = |<i>ε</i>|/<i>R</i> = 0.20/10 = 0.020 A = 20 mA.',
          '(c) The field goes from 0.60 T to 0 at 0.20 T/s, taking <i>t</i> = 0.60/0.20 = 3.0 s. Since the emf (and hence current) is constant during this time,<br><i>Q</i> = <i>I</i><sup>2</sup><i>Rt</i> = (0.020)<sup>2</sup> × 10 × 3.0 = 0.012 J',
        ],
        ans: 'The coil dissipates 12 mJ of heat.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'p12-06-fig-6.2',
        q: 'A rectangular loop of length <i>L</i> = 0.30 m (its long side parallel to a long straight wire) lies in the same plane as the wire. The near long side is at distance <i>c</i> = 0.020 m from the wire, and the loop’s width (measured away from the wire) is <i>a</i> = 0.080 m. The wire carries current <i>I</i>.<br>(a) Find the magnetic flux through the loop when <i>I</i> = <i>I</i><sub>0</sub> = 10 A.<br>(b) If the current then increases at d<i>I</i>/d<i>t</i> = 25 A/s, find the magnitude of the induced emf and the direction of the induced current.',
        steps: [
          '<b>Why integration is unavoidable:</b> the wire’s field <i>B</i> = μ<sub>0</sub><i>I</i>/(2π<i>r</i>) is non-uniform — stronger near the wire, weaker far away — so <i>BA</i> cos <i>θ</i> does not apply directly.',
          '(a) Take a thin vertical strip of width d<i>r</i> at distance <i>r</i> from the wire; its area is <i>L</i> d<i>r</i> and the field <i>B</i>(<i>r</i>) = μ<sub>0</sub><i>I</i><sub>0</sub>/(2π<i>r</i>) is essentially uniform across it. The flux through this strip is dΦ = <i>B</i>(<i>r</i>) <i>L</i> d<i>r</i>. Integrate from <i>r</i> = <i>c</i> to <i>r</i> = <i>c</i> + <i>a</i>:<br>Φ<sub>B</sub> = ∫<sub><i>c</i></sub><sup><i>c</i>+<i>a</i></sup> (μ<sub>0</sub><i>I</i><sub>0</sub><i>L</i>/(2π<i>r</i>)) d<i>r</i> = (μ<sub>0</sub><i>I</i><sub>0</sub><i>L</i>/(2π)) ln((<i>c</i> + <i>a</i>)/<i>c</i>).',
          'Substituting μ<sub>0</sub><i>I</i><sub>0</sub><i>L</i>/(2π) = (4π × 10<sup>−7</sup>)(10)(0.30)/(2π) = 6.0 × 10<sup>−7</sup> and ln(0.100/0.020) = ln 5 = 1.609:<br>Φ<sub>B</sub> = 6.0 × 10<sup>−7</sup> × 1.609 = 9.66 × 10<sup>−7</sup> Wb ≈ 0.97 μWb.',
          '(b) Since Φ<sub>B</sub> ∝ <i>I</i>,<br>|<i>ε</i>| = dΦ<sub>B</sub>/d<i>t</i> = (μ<sub>0</sub><i>L</i>/(2π)) ln((<i>c</i> + <i>a</i>)/<i>c</i>) d<i>I</i>/d<i>t</i> = (6.0 × 10<sup>−8</sup>)(1.609)(25) = 2.4 × 10<sup>−6</sup> V ≈ 2.4 μV.',
          'The current in the wire is increasing, so the flux through the loop is increasing. By Lenz’s law, the induced current must oppose this — it flows so as to create a field opposing the wire’s field inside the loop, i.e. out of the page, so the induced current is counter-clockwise.',
          '<b>Foreshadowing:</b> the quantity Φ<sub>B</sub>/<i>I</i> = (μ<sub>0</sub><i>L</i>/(2π)) ln((<i>c</i> + <i>a</i>)/<i>c</i>) that we factored out is precisely the <b>mutual inductance</b> between the wire and the loop — the concept we develop in Topic 03.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A coil of 150 turns and area 0.025 m<sup>2</sup> is held with its plane perpendicular to a uniform field. The field increases steadily from 0.10 T to 0.50 T in 2.0 s. Find the induced emf.',
            a: '0.75 V',
          },
          {
            q: '[NEET] A circular loop is rotated in a uniform magnetic field about an axis perpendicular to the field. State the orientation at which the flux through it is (i) maximum and (ii) zero, and the orientation at which the induced emf is maximum.',
            a: '(i) plane ⊥ to <i>B⃗</i> (area vector along field), (ii) plane parallel to <i>B⃗</i>; induced emf maximum when the plane contains <i>B⃗</i> (i.e., as the loop sweeps through the parallel orientation)',
          },
          {
            q: '[JEE Main] A flat coil of 80 turns and area 0.015 m<sup>2</sup> has resistance 4.0 Ω. The flux per turn through it is reversed (flips sign keeping the same magnitude) from +6.0 × 10<sup>−3</sup> Wb to −6.0 × 10<sup>−3</sup> Wb. Find the total charge that flows through the coil.',
            a: '<i>q</i> = <i>N</i> ΔΦ/<i>R</i> = 80 × (1.2 × 10<sup>−2</sup>)/4.0 = 0.24 C',
          },
          {
            q: '[JEE Main] A square loop of side 0.20 m lies in a region where the field is uniform but tilted so it makes 30° with the plane of the loop, at <i>B</i> = 0.80 T. Compute the flux through the loop.',
            a: 'Φ = <i>BA</i> sin 30° = 0.80 × 0.04 × 0.5 = 1.6 × 10<sup>−2</sup> Wb',
          },
          {
            q: '[JEE Advanced] A magnetic field perpendicular to a single circular loop of radius <i>R</i> and resistance <i>r</i> varies as <i>B</i>(<i>t</i>) = <i>B</i><sub>0</sub> sin(<i>ωt</i>). Find an expression for the induced current as a function of time, and the instant within the first quarter-cycle at which it is maximum.',
            a: '<i>I</i>(<i>t</i>) = −(π<i>R</i><sup>2</sup><i>B</i><sub>0</sub><i>ω</i>/<i>r</i>) cos(<i>ωt</i>), so |<i>I</i>| is maximum at <i>t</i> = 0.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The dimensional formula of magnetic flux is:',
        opts: [
          {
            label: '[M T<sup>−2</sup> A<sup>−1</sup>]',
            nudge: '<b>(A)</b> is the dimension of <i>B</i> itself — chosen by students who forget to multiply by area.',
          },
          { label: '[M L<sup>2</sup> T<sup>−2</sup> A<sup>−1</sup>]', nudge: null },
          {
            label: '[M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]',
            nudge: '<b>(C)</b> is the dimension of emf (volt) — picked by those who confuse flux with its rate of change (flux carries one fewer power of T<sup>−1</sup>).',
          },
          {
            label: '[M L<sup>2</sup> T<sup>−1</sup> A<sup>−1</sup>]',
            nudge: '<b>(D)</b> is a plausible-looking distractor with the wrong time power; no physical quantity here matches it.',
          },
        ],
        correct: 1,
        solution: 'Flux = <i>B</i> × <i>A</i>. Magnetic field <i>B</i> has dimensions [M T<sup>−2</sup> A<sup>−1</sup>] (from <i>F</i> = <i>qvB</i>), and area contributes [L<sup>2</sup>], giving [M L<sup>2</sup> T<sup>−2</sup> A<sup>−1</sup>].',
      },
      {
        t: 'mcq',
        q: 'The magnetic flux through a coil is held constant at 8 Wb. The emf induced in the coil is:',
        opts: [
          {
            label: '8 V',
            nudge: '<b>(A)</b> comes from blindly reading “8 Wb” as “8 V” — the classic flux-equals-emf confusion.',
          },
          { label: '0', nudge: null },
          {
            label: '8 V divided by the resistance',
            nudge: '<b>(C)</b> mixes up emf with current (<i>I</i> = <i>ε</i>/<i>R</i>); even so, a zero emf gives zero current.',
          },
          {
            label: 'cannot be determined without time',
            nudge: '<b>(D)</b> wrongly assumes more information is needed; constancy already fixes the answer at zero.',
          },
        ],
        correct: 1,
        solution: 'Faraday’s law gives emf from the rate of change of flux. A constant flux means dΦ<sub>B</sub>/d<i>t</i> = 0, so <i>ε</i> = 0 — regardless of how large the flux is.',
      },
      {
        t: 'mcq',
        q: 'The north pole of a bar magnet is brought towards a horizontal conducting ring from above. As seen from above, the induced current and the force on the magnet are:',
        opts: [
          {
            label: 'clockwise; attractive',
            nudge: '<b>(A)</b> gets both wrong: a clockwise current (seen from above) would aid the incoming flux, violating Lenz, and attraction would help the magnet approach.',
          },
          { label: 'anticlockwise; repulsive', nudge: null },
          {
            label: 'clockwise; repulsive',
            nudge: '<b>(A)</b> and <b>(C)</b> get the current sense wrong (a clockwise current as seen from above would aid the incoming flux, violating Lenz).',
          },
          {
            label: 'anticlockwise; attractive',
            nudge: '<b>(D)</b> correctly opposes but mislabels the force as attractive; attraction would help the magnet approach, which is energetically forbidden.',
          },
        ],
        correct: 1,
        solution: 'The downward-approaching N pole increases the downward flux through the ring. By Lenz’s law the ring opposes this by presenting its own N pole upward (toward the magnet), which means — by the right-hand rule — the current runs anticlockwise as viewed from above. Two N poles facing each other repel.',
      },
      {
        t: 'mcq',
        q: 'A flux change ΔΦ (per turn) occurs through a coil of <i>N</i> turns and resistance <i>R</i>. The total charge that flows depends on:',
        opts: [
          {
            label: 'the time taken for the change',
            nudge: '<b>(A)</b>, <b>(C)</b> and <b>(D)</b> all assume the timing matters. It controls the instantaneous current and emf, but these effects cancel on integration — a fast change gives a brief large current, a slow change a prolonged small one, and the total charge is identical.',
          },
          { label: 'only ΔΦ, <i>N</i> and <i>R</i>', nudge: null },
          {
            label: 'the rate of change of flux',
            nudge: '<b>(A)</b>, <b>(C)</b> and <b>(D)</b> all assume the timing matters. It controls the instantaneous current and emf, but these effects cancel on integration — a fast change gives a brief large current, a slow change a prolonged small one, and the total charge is identical.',
          },
          {
            label: 'the precise way the flux varies in time',
            nudge: '<b>(A)</b>, <b>(C)</b> and <b>(D)</b> all assume the timing matters. It controls the instantaneous current and emf, but these effects cancel on integration — a fast change gives a brief large current, a slow change a prolonged small one, and the total charge is identical.',
          },
        ],
        correct: 1,
        solution: 'From <i>q</i> = <i>N</i> ΔΦ/<i>R</i>, the charge is set entirely by the net flux change and the resistance.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mistaking flux for emf.</b> A large flux does not mean a large emf. Only a changing flux induces emf. Whenever you see a flux value, immediately ask “is it changing?” before doing anything else.',
          '<b>The angle confusion.</b> <i>θ</i> in Φ = <i>BA</i> cos <i>θ</i> is the angle between <i>B⃗</i> and the <b>area vector</b> (<b>normal</b>), not the plane of the loop. If a problem says “the field makes angle <i>α</i> with the plane,” then <i>θ</i> = 90° − <i>α</i>, and the flux becomes Φ = <i>BA</i> sin <i>α</i>.',
          '<b>Dropping the number of turns.</b> For an <i>N</i>-turn coil the emf is <i>N</i> times bigger: <i>ε</i> = −<i>N</i> dΦ<sub>B</sub>/d<i>t</i>. Forgetting the <i>N</i> is a guaranteed mark loss in numericals.',
          '<b>Misreading the minus sign.</b> The negative sign in Faraday’s law is not a number you carry into arithmetic — it is a direction rule (Lenz’s law). Compute the magnitude, then assign direction separately.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “charge that flows” question, skip emf and current entirely — go straight to <i>q</i> = <i>N</i> ΔΦ/<i>R</i>. And for “field at angle <i>α</i> to the plane,” reach for sin <i>α</i> directly instead of converting to the normal angle each time. Both shortcuts save 30–40 precious seconds in NEET/JEE Main.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Flux',
            note: 'Φ<sub>B</sub> = <i>B⃗</i> · <i>A⃗</i> = <i>BA</i> cos <i>θ</i> (uniform); Φ<sub>B</sub> = ∫ <i>B⃗</i> · d<i>A⃗</i> (non-uniform). Unit: weber, 1 Wb = 1 T · m<sup>2</sup> = 1 V · s. Dimension: [M L<sup>2</sup> T<sup>−2</sup> A<sup>−1</sup>].',
          },
          {
            f: 'Faraday’s law',
            note: '<i>ε</i> = −<i>N</i> dΦ<sub>B</sub>/d<i>t</i> — emf is born only from changing flux.',
          },
          {
            f: 'Induced current',
            note: '<i>I</i> = |<i>ε</i>|/<i>R</i> (emf is independent of <i>R</i>; current is not).',
          },
          {
            f: 'Induced charge',
            note: '<i>q</i> = <i>N</i> ΔΦ<sub>B</sub>/<i>R</i> — depends only on ΔΦ and <i>R</i>, never on time.',
          },
          {
            f: 'Lenz’s law',
            note: 'induced effects oppose the change that created them — it is conservation of energy in disguise.',
          },
        ],
        aids: [
          '“Nature is lazy — it opposes change” (Lenz).',
          '“Theta is from the normal, not the plane” (flux angle).',
          '“Change, not amount” (Faraday).',
        ],
      },
    ],
  },
];
