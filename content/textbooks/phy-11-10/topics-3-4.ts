import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 03 and 04, pp. 693–710 of the Class 11 Physics Master
 * Reference, word for word: Heat Transfer (Conduction, Convection) (pp. 693 to
 * 702) and Radiation and Cooling Laws (pp. 703 to 710), each split at the
 * book's Sections 1 to 8. Figure 10.3 (caption p. 695, drawn on p. 696),
 * Figure 10.4 (p. 698, drawn on p. 699, inside worked example 4) and
 * Figure 10.5 (p. 705, drawn on p. 706).
 */
export const TOPICS: Topic[] = [
  {
    n: '03',
    title: 'Heat Transfer (Conduction, Convection)',
    kalam: 'The most useful “derivation” in this topic is establishing the series and parallel rules, because every hard conduction problem reduces to them.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Conduction is a dependable scorer — JEE Main almost always carries a numerical on Fourier’s law, series/parallel rods, or junction temperature, and JEE Advanced reaches for the “growth of ice on a pond” integration or a composite-slab network. NEET sticks to conceptual MCQs: which mode works in vacuum, why metal feels colder than wood, and the sea-breeze/land-breeze story (convection). CBSE Boards ask a 2–3 mark definition of thermal conductivity, the units/dimensions of <i>K</i>, or a clean rate-of-heat-flow calculation through a wall or windowpane.',
      },
      {
        t: 'p',
        html: 'Hold a steel spoon in a cup of hot chai and within seconds the far end — the bit your fingers are holding — turns uncomfortably warm. You never moved the spoon; nothing visibly travelled. Yet energy clearly crawled from the hot end to the cold end. That silent, particle-to-particle relay is <b>conduction</b>, and it is the first of the three ways heat moves from a hotter place to a cooler one.',
      },
      {
        t: 'p',
        html: 'In conduction, the material itself stays put. Near the hot end, atoms vibrate more violently; they jostle their neighbours, who jostle their neighbours, and the agitation marches down the rod like a whispered message passed along a row of seated people — each person stays in their seat, only the message travels. In metals there is a second, faster courier: free electrons, which drift and carry energy bodily. That extra channel is exactly why metals conduct heat (and electricity) so much better than wood, glass, or plastic. A metal door handle and a wooden one in the same room are at the same temperature, but the metal feels colder because it whisks heat out of your warm hand far faster — your skin, not the handle, is what you’re really sensing.',
      },
      {
        t: 'p',
        html: 'How fast does heat conduct? It depends on four sensible things, all bundled into one law (Fourier’s law of conduction):<br>d<i>Q</i>/d<i>t</i> = <i>KA</i> Δ<i>T</i>/<i>L</i>.<br>Read it intuitively: heat flows faster through a fatter conductor (more area <i>A</i>), faster when the two ends differ more in temperature (bigger Δ<i>T</i>), slower through a longer path (bigger <i>L</i>), and the material’s own willingness to conduct is captured by <i>K</i>, the <b>thermal conductivity</b>. Copper has a huge <i>K</i>; air and wool have tiny ones. This is the whole reason a woollen blanket warms you — wool itself isn’t “hot,” it simply has a low <i>K</i> (made lower still by the trapped air), so it throttles the escape of your body heat.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture heat flow as water flowing through a pipe. The temperature difference Δ<i>T</i> is the pressure pushing the water, and the heat current <i>H</i> = d<i>Q</i>/d<i>t</i> is the flow rate. A short, wide, smooth pipe (large <i>A</i>, small <i>L</i>, large <i>K</i>) lets water gush; a long, narrow, clogged pipe (small <i>A</i>, large <i>L</i>, small <i>K</i>) chokes it. We even define a <b>thermal resistance</b> <i>R</i> = <i>L</i>/(<i>KA</i>), so that <i>H</i> = Δ<i>T</i>/<i>R</i> — exactly Ohm’s law, with temperature difference playing the role of voltage and heat current the role of electric current. This single analogy turns frightening multi-rod problems into ordinary circuit problems, and we will lean on it hard.',
      },
      {
        t: 'p',
        html: 'Now the second mode. Conduction is hopeless in a glass of water heated from below — water is a poor conductor. So how does the whole pot get hot? The heated water at the bottom expands, becomes less dense, and physically rises, while cooler dense water sinks to take its place. The fluid literally carries its heat with it as it moves. This bulk transport of heat by a moving fluid is <b>convection</b>. Crucially, convection needs a fluid that is free to flow — it cannot happen in a solid.',
      },
      {
        t: 'p',
        html: 'Convection runs our world. The <b>sea breeze</b> on a Chennai afternoon exists because land (low specific heat) heats faster than the sea; air over the hot land rises, and cooler sea air rushes in to replace it. At night the flow reverses into a <b>land breeze</b>. The same physics, scaled up enormously, drives the <b>monsoon</b>. Inside your home, a room heater warms the air at floor level, which rises and circulates — natural convection. When a fan or pump does the pushing instead of buoyancy, we call it <b>forced convection</b>; your body’s own blood circulation, pumped by the heart to spread heat evenly, is a beautiful biological example.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The clean formula <i>H</i> = <i>KA</i> Δ<i>T</i>/<i>L</i> assumes (i) <b>steady state</b> — temperatures at every point have stopped changing with time, so the same heat current flows through every cross-section; (ii) <b>no heat leaks sideways</b> — the rod’s curved surface is perfectly insulated, so heat flows only along its length; (iii) a uniform cross-section and constant <i>K</i>. If the rod is still warming up (transient state), or loses heat from its sides, or <i>K</i> varies with temperature, the simple formula breaks and we must integrate. And note: this conduction law says nothing about convection or radiation — those obey entirely different rules.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Fourier’s law of conduction (steady state)',
        main: '<i>H</i> = d<i>Q</i>/d<i>t</i> = <i>KA</i>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>L</i>',
        legend: [
          '<i>H</i> = heat current (rate of heat flow), unit watt (W)',
          '<i>K</i> = thermal conductivity',
          '<i>A</i> = cross-sectional area',
          '<i>L</i> = length',
          '(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) = temperature difference across the ends',
        ],
        note: '<b>Temperature gradient</b> = (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>L</i>, unit K m<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Thermal conductivity <i>K</i>:</b><br>• SI unit: W m<sup>−1</sup> K<sup>−1</sup>.<br>• Dimensional formula: [M L T<sup>−3</sup> Θ<sup>−1</sup>].<br>• High for metals (copper ≈ 400, aluminium ≈ 235 W m<sup>−1</sup> K<sup>−1</sup>); low for insulators (glass ≈ 0.8, wood ≈ 0.1, air ≈ 0.025).',
      },
      {
        t: 'formula',
        kicker: 'Thermal resistance (the electrical analogy)',
        main: '<i>R</i> = <i>L</i>/(<i>KA</i>)<br><i>H</i> = Δ<i>T</i>/<i>R</i>',
        legend: [],
        note: 'Unit of <i>R</i>: K W<sup>−1</sup>. Temperature difference ↔ voltage; heat current ↔ current.',
      },
      {
        t: 'formula',
        kicker: 'Rods in SERIES (joined end to end — same heat current through each)',
        main: '<i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + ⋯',
        legend: [],
        note: '<i>H</i> is common; Δ<i>T</i> divides in proportion to <i>R</i>.',
      },
      {
        t: 'formula',
        kicker: 'Rods in PARALLEL (side by side, same two end-temperatures)',
        main: '1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> + ⋯',
        legend: [],
        note: 'Δ<i>T</i> is common; <i>H</i> adds.',
      },
      {
        t: 'formula',
        kicker: 'For two rods of equal length and area in parallel',
        main: '<i>K</i><sub>eq</sub> = (<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>)/2',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Convection</b> (qualitative — no simple universal exam formula): bulk transport of heat by a moving fluid. <b>Natural convection</b> is driven by buoyancy (density differences); <b>forced convection</b> is driven by an external pump or fan. Requires a fluid; cannot occur in solids or vacuum.',
      },

      { t: 'part', title: 'CBSE derivation / key procedures — the thermal-resistance network' },
      {
        t: 'p',
        html: 'The most useful “derivation” in this topic is establishing the series and parallel rules, because every hard conduction problem reduces to them. We build them from Fourier’s law using the resistance idea.',
      },
      {
        t: 'p',
        html: '<b>Setting up resistance.</b> Rewrite Fourier’s law as <i>H</i> = Δ<i>T</i>/(<i>L</i>/(<i>KA</i>)). Defining <i>R</i> ≡ <i>L</i>/(<i>KA</i>) gives the compact form <i>H</i> = Δ<i>T</i>/<i>R</i> — structurally identical to <i>I</i> = <i>V</i>/<i>R</i>. Why this is worth doing: it lets us combine conductors using the same arithmetic students already trust from circuits.',
      },
      {
        t: 'p',
        html: '<b>Series combination — derivation.</b> Join two rods end to end between a hot reservoir at <i>T</i><sub>1</sub> and a cold one at <i>T</i><sub>3</sub>, with junction temperature <i>T</i><sub>2</sub>.',
      },
      { t: 'fig', id: 'p11-10-fig-10.3' },
      {
        t: 'p',
        html: '<b>Step 1 — the key physical fact.</b> In steady state no heat accumulates at the junction, so <b>the same heat current <i>H</i> flows through both rods</b>. (If more flowed in than out, the junction would keep heating — contradicting steady state.)',
      },
      {
        t: 'p',
        html: '<b>Step 2 — write each rod’s drop.</b> From <i>H</i> = Δ<i>T</i>/<i>R</i>:<br><i>T</i><sub>1</sub> − <i>T</i><sub>2</sub> = <i>HR</i><sub>1</sub>,   <i>T</i><sub>2</sub> − <i>T</i><sub>3</sub> = <i>HR</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — add them.</b> The junction temperature <i>T</i><sub>2</sub> cancels:<br><i>T</i><sub>1</sub> − <i>T</i><sub>3</sub> = <i>H</i>(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 4 — identify.</b> Comparing with <i>T</i><sub>1</sub> − <i>T</i><sub>3</sub> = <i>HR</i><sub>eq</sub>:<br><i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub><br>Series resistances add — and the larger drop appears across the larger resistance, just like voltage across a bigger resistor.',
      },
      {
        t: 'p',
        html: '<b>Parallel combination — derivation.</b> Now place two rods side by side, both spanning the same hot face <i>T</i><sub>1</sub> and cold face <i>T</i><sub>2</sub>, so <b>both have the same Δ<i>T</i></b>.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — each carries its own current.</b> <i>H</i><sub>1</sub> = Δ<i>T</i>/<i>R</i><sub>1</sub> and <i>H</i><sub>2</sub> = Δ<i>T</i>/<i>R</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — currents add.</b> The total heat delivered is <i>H</i> = <i>H</i><sub>1</sub> + <i>H</i><sub>2</sub> = Δ<i>T</i>(1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — identify.</b> Writing <i>H</i> = Δ<i>T</i>/<i>R</i><sub>eq</sub>:<br>1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>',
      },
      {
        t: 'p',
        html: '<b>Junction-temperature shortcut.</b> For two rods in series with the same <i>A</i> and <i>L</i> but different conductivities, equal heat currents give <i>K</i><sub>1</sub>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>) = <i>K</i><sub>2</sub>(<i>T</i><sub>2</sub> − <i>T</i><sub>3</sub>), so<br><i>T</i><sub>2</sub> = (<i>K</i><sub>1</sub><i>T</i><sub>1</sub> + <i>K</i><sub>2</sub><i>T</i><sub>3</sub>)/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>).<br>A clean weighted average — the junction sits closer to the temperature of the better conductor’s reservoir. Keep this in your pocket; it cracks a whole class of MCQs in seconds.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A glass windowpane measures 1.5 m × 1.0 m and is 4.0 mm thick. On a winter day the inside surface is at 22°C and the outside surface at 8°C. Find the rate at which heat is conducted out. Take <i>K</i><sub>glass</sub> = 0.80 W m<sup>−1</sup> K<sup>−1</sup>.',
        steps: [
          '<b>Given:</b> <i>A</i> = 1.5 × 1.0 = 1.5 m<sup>2</sup>, <i>L</i> = 4.0 × 10<sup>−3</sup> m, Δ<i>T</i> = 22 − 8 = 14 K.',
          '<b>Formula:</b> <i>H</i> = <i>KA</i> Δ<i>T</i>/<i>L</i>.',
          '<b>Substitution:</b><br><i>H</i> = (0.80)(1.5)(14)/(4.0 × 10<sup>−3</sup>) = 16.8/(4.0 × 10<sup>−3</sup>)',
          '<b>Concluding remark:</b> Over four kilowatts through one thin pane — which is exactly why double-glazed windows trap a layer of low-<i>K</i> air between two glass sheets to cut this loss dramatically.',
        ],
        ans: '<i>H</i> = 4200 W = 4.2 kW',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A metal rod conducts heat at a steady rate <i>H</i> for a fixed temperature difference between its ends. If its length is halved and its radius is doubled, the new rate of heat conduction is:',
        steps: [
          '<b>The trap:</b> students adjust for length and radius but forget that the cross-sectional area of a rod goes as <i>r</i><sup>2</sup>, not <i>r</i>. They write “double the radius → double the area” and land on the wrong factor.',
          '<b>The fast way.</b> Since <i>H</i> ∝ <i>A</i>/<i>L</i> ∝ <i>r</i><sup>2</sup>/<i>L</i> (with Δ<i>T</i> and <i>K</i> fixed):<br>• radius doubled ⇒ <i>r</i><sup>2</sup> grows by 2<sup>2</sup> = 4,<br>• length halved ⇒ dividing by <i>L</i>/2 multiplies by 2.<br><i>H</i><sub>new</sub> = <i>H</i> × 4 × 2',
          '<b>Speed insight:</b> for circular rods, always think <i>r</i><sup>2</sup>. A “doubled radius” is a fourfold area — that single reflex saves you from the most common NEET conduction error.',
        ],
        ans: '8<i>H</i>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (series resistance + junction temperature)',
        q: 'A copper rod (<i>K</i><sub>1</sub> = 400 W m<sup>−1</sup> K<sup>−1</sup>) and a steel rod (<i>K</i><sub>2</sub> = 50 W m<sup>−1</sup> K<sup>−1</sup>), each of length 0.50 m and cross-section 4.0 cm<sup>2</sup>, are joined end to end. The free copper end is held at 100°C and the free steel end at 0°C. Find (a) the rate of heat flow and (b) the junction temperature, in steady state.',
        steps: [
          '<b>Approach — treat it as a circuit.</b> Convert each rod to a thermal resistance, add in series, then apply <i>H</i> = Δ<i>T</i>/<i>R</i><sub>eq</sub>.',
          '<b>Step 1 — resistances</b> (<i>A</i> = 4.0 × 10<sup>−4</sup> m<sup>2</sup>):<br><i>R</i><sub>1</sub> = <i>L</i>/(<i>K</i><sub>1</sub><i>A</i>) = 0.50/((400)(4.0 × 10<sup>−4</sup>)) = 3.125 K W<sup>−1</sup><br><i>R</i><sub>2</sub> = <i>L</i>/(<i>K</i><sub>2</sub><i>A</i>) = 0.50/((50)(4.0 × 10<sup>−4</sup>)) = 25.0 K W<sup>−1</sup><br><i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> = 28.125 K W<sup>−1</sup>.',
          '<b>Step 2 — heat current:</b><br><i>H</i> = Δ<i>T</i>/<i>R</i><sub>eq</sub> = (100 − 0)/28.125',
          '<b>Step 3 — junction temperature</b> (drop across copper from the hot end):<br><i>T</i><sub>junction</sub> = 100 − <i>HR</i><sub>1</sub> = 100 − (3.56)(3.125)',
          'Notice the junction sits very close to the hot end — because copper’s tiny resistance produces only a tiny drop, while almost the entire 100° drop is spent across the steel. The poor conductor “hogs” the temperature difference, exactly like a large resistor hogs the voltage.',
        ],
        ans: '(a) ≈ 3.56 W; (b) ≈ 88.9 °C',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Growth of Ice on a Pond',
        fig: 'p11-10-fig-10.4',
        q: 'A still pond is already covered by a 4.0 cm layer of ice. The air above stays at −10°C while the water just below the ice is at 0°C. How long will it take for the ice layer to thicken from 4.0 cm to 6.0 cm? Take <i>K</i><sub>ice</sub> = 2.2 W m<sup>−1</sup> K<sup>−1</sup>, <i>ρ</i><sub>ice</sub> = 920 kg m<sup>−3</sup>, <i>L</i><sub><i>f</i></sub> = 3.36 × 10<sup>5</sup> J kg<sup>−1</sup>.',
        steps: [
          '<b>Physical picture.</b> New ice forms at the bottom of the sheet (the water–ice boundary, at 0°C). The latent heat released by this freezing must conduct upward through the existing ice thickness <i>x</i> to the cold air. As the sheet thickens, the conduction path lengthens and freezing slows — so the rate is not constant, and we must integrate.',
          '<b>Step 1 — heat conducted up through thickness <i>x</i></b> (per unit area <i>A</i>):<br>d<i>Q</i>/d<i>t</i> = <i>KA</i>(0 − (−10))/<i>x</i> = <i>KAθ</i>/<i>x</i>,   <i>θ</i> = 10 °C.',
          '<b>Step 2 — heat released by freezing a layer d<i>x</i>.</b> Mass frozen = <i>ρA</i> d<i>x</i>, so d<i>Q</i> = <i>ρL</i><sub><i>f</i></sub><i>A</i> d<i>x</i>.',
          '<b>Step 3 — equate (energy conservation):</b><br><i>ρL</i><sub><i>f</i></sub><i>A</i> d<i>x</i>/d<i>t</i> = <i>KAθ</i>/<i>x</i> ⇒ <i>x</i> d<i>x</i> = (<i>Kθ</i>/(<i>ρL</i><sub><i>f</i></sub>)) d<i>t</i>.',
          '<b>Step 4 — integrate</b> from <i>x</i><sub>1</sub> = 0.04 m to <i>x</i><sub>2</sub> = 0.06 m, time 0 to <i>t</i>:<br>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>)/2 = (<i>Kθ</i>/(<i>ρL</i><sub><i>f</i></sub>)) <i>t</i> ⇒ <i>t</i> = <i>ρL</i><sub><i>f</i></sub>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>)/(2<i>Kθ</i>).',
          '<b>Step 5 — substitute:</b><br><i>t</i> = ((920)(3.36 × 10<sup>5</sup>)[(0.06)<sup>2</sup> − (0.04)<sup>2</sup>])/(2(2.2)(10)) = ((3.0912 × 10<sup>8</sup>)(2.0 × 10<sup>−3</sup>))/44<br><i>t</i> = (6.182 × 10<sup>5</sup>)/44',
          'The crucial insight — that thickening time scales as <i>x</i><sup>2</sup> — means the second centimetre of ice takes far longer than the first. This is why a frozen lake’s ice layer grows quickly at first and then crawls.',
        ],
        ans: '≈ 1.41 × 10<sup>4</sup> s ≈ 3.9 hours',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A brick wall of an air-conditioned room is 5.0 m × 3.0 m and 20 cm thick. The outside is at 40°C and the inside at 25°C. Find the rate at which heat enters. Take <i>K</i><sub>brick</sub> = 0.70 W m<sup>−1</sup> K<sup>−1</sup>.',
            a: '≈ 788 W',
          },
          {
            q: '[NEET] Two rods of the same material: rod P has length <i>L</i> and radius <i>r</i>; rod Q has length 2<i>L</i> and radius 2<i>r</i>. For the same temperature difference across their ends, find the ratio of their heat currents <i>H</i><sub><i>P</i></sub> : <i>H</i><sub><i>Q</i></sub>.',
            a: '<i>H</i><sub><i>P</i></sub> : <i>H</i><sub><i>Q</i></sub> = 1 : 2',
          },
          {
            q: '[JEE Main] Two rods of equal length and equal cross-section, with thermal conductivities 200 and 100 W m<sup>−1</sup> K<sup>−1</sup>, are placed side by side (in parallel) between the same hot and cold faces. Find the equivalent thermal conductivity of the combination.',
            a: '150 W m<sup>−1</sup> K<sup>−1</sup>',
          },
          {
            q: '[JEE Main] One end of a copper rod (<i>K</i> = 400 W m<sup>−1</sup> K<sup>−1</sup>) of length 1.0 m and cross-section 5.0 cm<sup>2</sup> is held at 100°C; the other end touches ice at 0°C. Find the rate at which ice melts. (<i>L</i><sub><i>f</i></sub> = 3.36 × 10<sup>5</sup> J kg<sup>−1</sup>.)',
            a: '≈ 5.95 × 10<sup>−5</sup> kg s<sup>−1</sup> (≈ 0.21 kg per hour)',
          },
          {
            q: '[JEE Advanced] Starting from open water, ice begins to form on a pond when the air above is at −15°C. Find the time taken for the ice to reach a thickness of 5.0 cm. Take <i>K</i><sub>ice</sub> = 2.2 W m<sup>−1</sup> K<sup>−1</sup>, <i>ρ</i><sub>ice</sub> = 920 kg m<sup>−3</sup>, <i>L</i><sub><i>f</i></sub> = 3.36 × 10<sup>5</sup> J kg<sup>−1</sup>.',
            a: '≈ 1.17 × 10<sup>4</sup> s (≈ 3.3 hours)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which mode(s) of heat transfer can carry energy across a perfect vacuum?',
        opts: [
          { label: 'conduction only', nudge: '<b>(a)</b> and <b>(b)</b> both invoke a medium that a vacuum lacks.' },
          { label: 'convection only', nudge: '<b>(a)</b> and <b>(b)</b> both invoke a medium that a vacuum lacks.' },
          { label: 'radiation only', nudge: null },
          {
            label: 'all three',
            nudge: '<b>(d)</b> is the careless “more is safer” pick; it ignores that two of the three modes are impossible without matter.',
          },
        ],
        correct: 2,
        solution: 'Conduction needs a material medium to pass the energy along, and convection needs a fluid to physically move — both require matter. Only <b>radiation</b> travels through empty space (which is how the Sun’s energy reaches Earth).',
      },
      {
        t: 'mcq',
        q: 'On a cold morning, a metal chair feels much colder to the touch than a wooden chair standing right beside it, even though both are at the same temperature. This is because the metal:',
        opts: [
          {
            label: 'is actually at a lower temperature',
            nudge: '<b>(a)</b> contradicts the given (same temperature) — the classic trap.',
          },
          { label: 'conducts heat away from your hand much faster than wood', nudge: null },
          {
            label: 'has a higher specific heat than wood',
            nudge: '<b>(c)</b> is false — a metal’s specific heat is actually lower than wood’s — and in any case the sensation is about rate of heat removal from your hand, i.e. conductivity.',
          },
          {
            label: 'radiates more heat than wood',
            nudge: '<b>(d)</b> is false too — a bare metal surface radiates less than wood — and the sensation is about rate of heat removal from your hand, i.e. conductivity.',
          },
        ],
        correct: 1,
        solution: 'Both objects are at room temperature; the metal’s high thermal conductivity drains heat from your warm skin rapidly, so your nerves register “cold.” Wood, a poor conductor, barely draws heat away.',
      },
      {
        t: 'mcq',
        q: 'During the daytime near a coast, a cool breeze blows from the sea toward the land. The best explanation is:',
        opts: [
          { label: 'the sea is hotter than the land, so air flows from hot to cold', nudge: '<b>(a)</b> inverts the temperatures.' },
          { label: 'the land heats faster than the sea; air over the land rises and cooler sea air moves in to replace it', nudge: null },
          {
            label: 'the wind is caused purely by the Earth’s rotation',
            nudge: '<b>(c)</b> and <b>(d)</b> invoke unrelated effects; the driver here is convective circulation from differential heating.',
          },
          {
            label: 'water vapour from the sea pushes the air inland',
            nudge: '<b>(c)</b> and <b>(d)</b> invoke unrelated effects; the driver here is convective circulation from differential heating.',
          },
        ],
        correct: 1,
        solution: 'Land has a lower specific heat than water, so by afternoon it is hotter; the warm air above it rises (natural convection), and denser cool air from over the sea flows in underneath — the sea breeze.',
      },
      {
        t: 'mcq',
        q: 'Two rods of the same length and cross-section but different conductivities are joined in series, with their outer ends maintained at fixed different temperatures. In steady state:',
        opts: [
          {
            label: 'the heat current is larger in the rod with higher conductivity',
            nudge: '<b>(a)</b> violates steady-state continuity of heat current.',
          },
          { label: 'the temperature drop is larger across the rod with lower conductivity', nudge: null },
          {
            label: 'the temperature drop is the same across both rods',
            nudge: '<b>(c)</b> would hold only if the resistances were equal.',
          },
          {
            label: 'the better conductor has the larger temperature drop',
            nudge: '<b>(d)</b> reverses the correct relationship — the poor conductor takes the big drop, like a large resistor takes the big voltage.',
          },
        ],
        correct: 1,
        solution: 'In series the heat current is identical in both rods, so the drop Δ<i>T</i> = <i>HR</i> is largest where the resistance <i>R</i> = <i>L</i>/(<i>KA</i>) is largest — i.e. across the lower-conductivity rod.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting <i>A</i> ∝ <i>r</i><sup>2</sup>.</b> For a cylindrical rod the cross-section is π<i>r</i><sup>2</sup>. “Doubling the radius” quadruples the area and hence the heat current. Many marks are lost to a stray factor here.',
          '<b>Confusing series and parallel.</b> Rods end to end are in <b>series</b> (resistances add, heat current common). Rods side by side spanning the same faces are in <b>parallel</b> (conductances add, Δ<i>T</i> common). Map it onto a circuit before computing.',
          '<b>Thinking Δ<i>T</i> is shared equally in series.</b> It isn’t — the heat current is shared (equal in each rod), while Δ<i>T</i> divides in proportion to each resistance. The poor conductor takes the bigger drop.',
          '<b>Applying conduction formulas in the transient stage.</b> <i>H</i> = <i>KA</i> Δ<i>T</i>/<i>L</i> holds only in steady state. If the rod is still warming up, the heat current differs along its length and the formula doesn’t apply.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Treat every conduction problem as a DC circuit. Replace each segment by <i>R</i> = <i>L</i>/(<i>KA</i>), redraw the network, and use <i>H</i> = Δ<i>T</i>/<i>R</i><sub>eq</sub> with the series/parallel rules you already know. Junction temperatures then fall out as “voltage drops.” This one habit converts the scariest multi-rod JEE Advanced problem into routine circuit arithmetic.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Fourier’s law', note: '<i>H</i> = d<i>Q</i>/d<i>t</i> = <i>KA</i> Δ<i>T</i>/<i>L</i>, unit of <i>H</i> is watt.' },
          { f: 'Thermal conductivity <i>K</i>', note: 'unit W m<sup>−1</sup> K<sup>−1</sup>, dimensions [M L T<sup>−3</sup> Θ<sup>−1</sup>].' },
          {
            f: 'Electrical analogy',
            note: '<i>R</i> = <i>L</i>/(<i>KA</i>), <i>H</i> = Δ<i>T</i>/<i>R</i> — temperature drop ↔ voltage, heat current ↔ current.',
          },
          {
            f: '<b>Series:</b> <i>R</i><sub>eq</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> (same <i>H</i>). <b>Parallel:</b> 1/<i>R</i><sub>eq</sub> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> (same Δ<i>T</i>).',
            note: '',
          },
          {
            f: 'Junction temp (equal <i>A</i>, <i>L</i>)',
            note: '<i>T</i><sub>2</sub> = (<i>K</i><sub>1</sub><i>T</i><sub>1</sub> + <i>K</i><sub>2</sub><i>T</i><sub>3</sub>)/(<i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>).',
          },
          {
            f: 'Ice growth on a pond',
            note: '<i>t</i> = <i>ρL</i><sub><i>f</i></sub>(<i>x</i><sub>2</sub><sup>2</sup> − <i>x</i><sub>1</sub><sup>2</sup>)/(2<i>Kθ</i>) — time scales as thickness squared.',
          },
          {
            f: 'Convection',
            note: 'bulk heat transport by moving fluid; natural (buoyancy) vs forced (pump/fan); needs a fluid.',
          },
        ],
        aids: ['Mnemonic: “Solids conduct, fluids convect, vacuum only radiates.”'],
      },
    ],
  },

  {
    n: '04',
    title: 'Radiation and Cooling Laws',
    kalam: 'How fast a body radiates depends fiercely on its temperature.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-yield topic. JEE Main reliably pulls a Stefan–Boltzmann (<i>T</i><sup>4</sup>) numerical, a Wien’s-law wavelength–temperature question, or a Newton’s-law-of-cooling problem. NEET loves the conceptual MCQs — good absorber = good emitter (Kirchhoff), why heated iron changes colour (Wien), and the black-body definition — plus an occasional <i>T</i><sup>4</sup> ratio. JEE Advanced combines Wien + Stefan (e.g. finding a star’s temperature and power) or sets up a multi-step cooling problem. CBSE Boards ask the statement of Stefan’s/Wien’s law, the definition of a black body, or the <b>derivation of Newton’s law of cooling from Stefan’s law</b> — a perennial favourite.',
      },
      {
        t: 'p',
        html: 'Stand outside on a clear winter morning in Delhi. The air is freezing, yet the instant the Sun clears the rooftops you feel its warmth on your face. That warmth did not arrive by conduction — air is a poor conductor. It did not arrive by convection — the Sun’s heat crossed 150 million kilometres of near-total vacuum, where there is no fluid to carry anything. It arrived by <b>radiation</b>: energy emitted as electromagnetic waves that need no medium at all to travel. This is the crucial, defining feature of the third mode of heat transfer, and the one thing you must never forget — radiation alone can cross empty space.',
      },
      {
        t: 'p',
        html: 'Here is the first surprising fact: <b>every object radiates, all the time, at every temperature</b> — you, this page, an ice cube, a star. This is <b>Prevost’s theory of exchange</b>: a body is never “off”; it is always both emitting radiation to its surroundings and absorbing radiation from them. What you observe as heating or cooling is simply the net balance. A hot cup of chai in a cool room radiates faster than it absorbs, so it loses energy and cools. An ice cube in a warm room absorbs faster than it radiates, so it gains energy and warms. And when an object reaches the temperature of its surroundings, it does not stop radiating — it simply radiates and absorbs at equal rates, a dynamic standoff we call thermal equilibrium.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a crowded room where everyone is continuously tossing tennis balls at everyone else and catching the ones thrown at them. Each ball is a packet of radiant energy. A “hot” person throws balls faster than the room average; if they throw more than they catch, their pile (energy) shrinks — they cool. A “cold” person catches more than they throw and their pile grows — they warm. Eventually everyone throws and catches at the same rate: equilibrium, with balls still flying everywhere. Nobody ever stops throwing. That ceaseless two-way exchange is exactly Prevost’s picture.',
      },
      {
        t: 'p',
        html: 'How fast a body radiates depends fiercely on its temperature. Double the absolute temperature and the radiated power leaps by a factor of <b>sixteen</b> — because power scales as the fourth power of temperature (Stefan–Boltzmann law). This brutal sensitivity is why a slightly hotter star outshines a cooler one so dramatically, and why “rate of cooling” problems are so temperature-dependent.',
      },
      {
        t: 'p',
        html: 'Temperature also controls the colour of the glow. Heat an iron rod in a furnace and watch it: first it glows a dull red, then orange, then yellow, and if hot enough, brilliant white. As it gets hotter, the wavelength at which it radiates most strongly slides toward the shorter (bluer) end of the spectrum. This is <b>Wien’s displacement law</b> — hotter means bluer. It is the same physics that tells an astronomer that a blue-white star is far hotter than a red one.',
      },
      {
        t: 'p',
        html: 'Finally, a beautifully simple rule connects absorbing and emitting. Place a shiny polished can and a black-painted can of boiling water side by side; the black one cools noticeably faster. Why? Because <b>good absorbers of radiation are also good emitters</b> — this is <b>Kirchhoff’s law</b>. A surface that greedily soaks up radiation also pours it out greedily. The ideal limit is a <b>black body</b>: a body that absorbs all radiation falling on it (reflecting and transmitting none) and therefore also emits at the maximum possible rate for its temperature. No real surface is perfectly black, but a small hole in a closed cavity comes astonishingly close — any ray entering the hole bounces around inside and is absorbed before it can find its way out. This is also why a thermos (Dewar) flask defeats all three modes at once: silvered walls reflect radiation, and the vacuum gap between them kills conduction and convection.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Stefan’s law in its pure form <i>E</i> = <i>σT</i><sup>4</sup> holds for a perfect black body; for a real surface we insert the <b>emissivity</b> <i>e</i> (between 0 and 1) and write <i>P</i> = <i>eσAT</i><sup>4</sup>. The net exchange formula <i>P</i><sub>net</sub> = <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>) assumes the surroundings are at a single uniform temperature <i>T</i><sub>0</sub>. And <b>Newton’s law of cooling</b> — that the rate of cooling is proportional to the temperature excess — is only an approximation, valid when the temperature difference between the body and its surroundings is small (as we will prove, it is just Stefan’s law in disguise for small excess).',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Stefan–Boltzmann Law (total power radiated)',
        main: '<i>P</i> = <i>eσAT</i><sup>4</sup> (emitted)<br><i>P</i><sub>net</sub> = <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>)',
        legend: [
          '<i>P</i> = radiated power (W)',
          '<i>e</i> = emissivity (0 ≤ <i>e</i> ≤ 1, dimensionless; <i>e</i> = 1 for a black body)',
          '<i>A</i> = surface area',
          '<i>T</i> = absolute temperature of the body',
          '<i>T</i><sub>0</sub> = absolute temperature of surroundings',
          '<i>σ</i> = Stefan–Boltzmann constant, 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup> (dimensional formula [M T<sup>−3</sup> Θ<sup>−4</sup>])',
        ],
        note: '<b>Emissive power</b> <i>E</i> = energy radiated per unit area per unit time (W m<sup>−2</sup>); for a black body <i>E</i> = <i>σT</i><sup>4</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Wien’s Displacement Law (wavelength of peak emission)',
        main: '<i>λ</i><sub><i>m</i></sub><i>T</i> = <i>b</i>',
        legend: [
          '<i>λ</i><sub><i>m</i></sub> = wavelength at which the emission is maximum',
          '<i>T</i> = absolute temperature',
          '<i>b</i> = Wien’s constant, 2.9 × 10<sup>−3</sup> m K (dimensional formula [L Θ])',
        ],
        note: 'Hotter body → smaller <i>λ</i><sub><i>m</i></sub> → bluer.',
      },
      {
        t: 'formula',
        kicker: 'Kirchhoff’s Law',
        main: 'At a given temperature, the ratio of emissive power to absorptive power is the same for all bodies and equals the emissive power of a black body:<br><i>e</i><sub><i>λ</i></sub>/<i>a</i><sub><i>λ</i></sub> = <i>E</i><sub><i>λ</i></sub><sup>(black body)</sup> = constant ⇒ good absorbers are good emitters.',
        legend: [
          '<i>e</i><sub><i>λ</i></sub> = emissive power at wavelength <i>λ</i>',
          '<i>a</i><sub><i>λ</i></sub> = absorptive power',
          '<i>E</i><sub><i>λ</i></sub> = emissive power of a black body',
        ],
        note: 'Numerically, <b>emissivity = absorptivity</b> for a surface at a given temperature.',
      },
      {
        t: 'formula',
        kicker: 'Newton’s Law of Cooling (small temperature excess)',
        main: '−d<i>T</i>/d<i>t</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>)',
        legend: [
          '<i>T</i> = temperature of the body',
          '<i>T</i><sub>0</sub> = temperature of the surroundings',
          '<i>k</i> = a positive constant depending on the body’s area, nature of surface, mass and specific heat (and on <i>T</i><sub>0</sub>)',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Newton’s law of cooling — practical (average) form',
        main: 'for a body cooling from <i>T</i><sub>1</sub> to <i>T</i><sub>2</sub> in time <i>t</i>, surroundings at <i>T</i><sub>0</sub>:<br>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>t</i> = <i>k</i>((<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2 − <i>T</i><sub>0</sub>).',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Black body',
        html: 'an ideal body that absorbs all incident radiation (absorptivity = 1) and emits the maximum possible radiation at every wavelength for its temperature.',
      },

      { t: 'part', title: 'CBSE derivation — Newton’s law of cooling from Stefan’s law' },
      {
        t: 'p',
        html: 'This is the most-asked derivation of the topic. The goal: show that the famous “rate of cooling ∝ temperature excess” is really just the Stefan–Boltzmann law, valid only when the excess is small.',
      },
      {
        t: 'p',
        html: '<b>Initial setup.</b> Consider a body of mass <i>m</i>, specific heat <i>c</i>, surface area <i>A</i>, and emissivity <i>e</i>, at absolute temperature <i>T</i>, placed in surroundings at temperature <i>T</i><sub>0</sub> (with <i>T</i> only slightly greater than <i>T</i><sub>0</sub>).',
      },
      {
        t: 'p',
        html: '<b>Step 1 — net rate of energy loss (Stefan’s law).</b> The body emits and absorbs simultaneously; the net power lost is<br><i>P</i><sub>net</sub> = <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>).',
      },
      {
        t: 'p',
        html: '<b>Step 2 — relate to temperature drop.</b> This lost power comes out of the body’s internal energy, so its temperature falls:<br>−<i>mc</i> d<i>T</i>/d<i>t</i> = <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>) ⇒ −d<i>T</i>/d<i>t</i> = (<i>eσA</i>/(<i>mc</i>))(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>).',
      },
      {
        t: 'p',
        html: '<b>Step 3 — write <i>T</i> = <i>T</i><sub>0</sub> + Δ<i>T</i> with Δ<i>T</i> small.</b> Now expand <i>T</i><sup>4</sup> using the binomial approximation. Since <i>T</i> = <i>T</i><sub>0</sub>(1 + Δ<i>T</i>/<i>T</i><sub>0</sub>),<br><i>T</i><sup>4</sup> = <i>T</i><sub>0</sub><sup>4</sup>(1 + Δ<i>T</i>/<i>T</i><sub>0</sub>)<sup>4</sup> ≈ <i>T</i><sub>0</sub><sup>4</sup>(1 + 4Δ<i>T</i>/<i>T</i><sub>0</sub>) = <i>T</i><sub>0</sub><sup>4</sup> + 4<i>T</i><sub>0</sub><sup>3</sup> Δ<i>T</i>,<br>where we kept only the first-order term because Δ<i>T</i>/<i>T</i><sub>0</sub> ≪ 1 (this is the crucial approximation — it is exactly where “small excess” enters).',
      },
      {
        t: 'p',
        html: '<b>Step 4 — substitute.</b> Then <i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup> ≈ 4<i>T</i><sub>0</sub><sup>3</sup> Δ<i>T</i>, so<br>−d<i>T</i>/d<i>t</i> = (<i>eσA</i>/(<i>mc</i>))(4<i>T</i><sub>0</sub><sup>3</sup>) Δ<i>T</i> = (4<i>eσAT</i><sub>0</sub><sup>3</sup>/(<i>mc</i>))(<i>T</i> − <i>T</i><sub>0</sub>),<br>4<i>eσAT</i><sub>0</sub><sup>3</sup>/(<i>mc</i>) ≡ <i>k</i>.',
      },
      {
        t: 'p',
        html: '<b>Step 5 — conclude.</b><br>−d<i>T</i>/d<i>t</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>)<br>This is precisely Newton’s law of cooling, and the derivation reveals two things a memoriser never sees: (i) the cooling constant <i>k</i> = 4<i>eσAT</i><sub>0</sub><sup>3</sup>/(<i>mc</i>) depends on the surroundings’ temperature, the surface, and the body’s heat capacity; and (ii) the law is fundamentally an <b>approximation</b> — it holds only while Δ<i>T</i> ≪ <i>T</i><sub>0</sub>, because we threw away the higher-order terms of the binomial. For a large temperature difference, the full <i>T</i><sup>4</sup> behaviour dominates and the simple proportionality fails.',
      },
      { t: 'fig', id: 'p11-10-fig-10.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A spherical black body of radius 5.0 cm is maintained at 327°C in surroundings at 27°C. Find the net power it radiates. Take <i>σ</i> = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>.',
        steps: [
          '<b>Given (convert to kelvin):</b> <i>T</i> = 327 + 273 = 600 K, <i>T</i><sub>0</sub> = 27 + 273 = 300 K, <i>r</i> = 0.05 m, <i>e</i> = 1.',
          '<b>Surface area:</b> <i>A</i> = 4π<i>r</i><sup>2</sup> = 4π(0.05)<sup>2</sup> = 4π(2.5 × 10<sup>−3</sup>) = 3.14 × 10<sup>−2</sup> m<sup>2</sup>.',
          '<b>Formula:</b> <i>P</i><sub>net</sub> = <i>σA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>).',
          '<b>Substitution:</b><br><i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup> = (600)<sup>4</sup> − (300)<sup>4</sup> = 1.296 × 10<sup>11</sup> − 0.081 × 10<sup>11</sup> = 1.215 × 10<sup>11</sup> K<sup>4</sup><br><i>P</i><sub>net</sub> = (5.67 × 10<sup>−8</sup>)(3.14 × 10<sup>−2</sup>)(1.215 × 10<sup>11</sup>)',
          '<b>Concluding remark:</b> Always convert temperatures to kelvin before taking the fourth power, and don’t drop the <i>T</i><sub>0</sub><sup>4</sup> term — the surroundings are radiating back at the body.',
        ],
        ans: '<i>P</i><sub>net</sub> ≈ 216 W',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The temperature of a body is raised from 27°C to 327°C. By what factor does the power it radiates increase?',
        steps: [
          '<b>The trap (two errors at once):</b> students plug Celsius numbers and write (327/27)<sup>4</sup>, or they forget the fourth power and answer “2”. Both are wrong.',
          '<b>The fast way.</b> Convert to kelvin: 300 K → 600 K, a ratio of exactly 2. Since <i>P</i> ∝ <i>T</i><sup>4</sup>:<br><i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<sup>4</sup> = (600/300)<sup>4</sup> = 2<sup>4</sup>',
          '<b>Speed insight:</b> for any radiation-ratio question, work in kelvin and use <i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<sup>4</sup> — never compute <i>σ</i> or area. Forgetting to convert °C → K is the single deadliest trap on this topic, because the fourth power magnifies the error enormously.',
        ],
        ans: '16',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Wien + Stefan combined)',
        q: 'The radiation from a certain star peaks in intensity at a wavelength of 500 nm. Treating the star as a black body, find (a) its surface temperature, and (b) the power it radiates per unit area of its surface. Take Wien’s constant <i>b</i> = 2.9 × 10<sup>−3</sup> m K and <i>σ</i> = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>.',
        steps: [
          '<b>Part (a) — Wien’s law.</b><br><i>T</i> = <i>b</i>/<i>λ</i><sub><i>m</i></sub> = (2.9 × 10<sup>−3</sup>)/(500 × 10<sup>−9</sup>) = (2.9 × 10<sup>−3</sup>)/(5.0 × 10<sup>−7</sup>)',
          '<b>Part (b) — Stefan’s law</b> (per unit area, black body):<br><i>E</i> = <i>σT</i><sup>4</sup> = (5.67 × 10<sup>−8</sup>)(5800)<sup>4</sup>.<br>Compute (5800)<sup>4</sup> = (5.8 × 10<sup>3</sup>)<sup>4</sup> = (5.8)<sup>4</sup> × 10<sup>12</sup> = 1131.6 × 10<sup>12</sup> = 1.132 × 10<sup>15</sup>:<br><i>E</i> = (5.67 × 10<sup>−8</sup>)(1.132 × 10<sup>15</sup>)',
          'This two-step pattern — Wien to get <i>T</i> from the spectrum, then Stefan to get the power — is the standard JEE Main “astrophysics flavoured” question. Note <i>T</i> landing near 5800 K, which is indeed close to the Sun’s surface temperature.',
        ],
        ans: '(a) 5800 K; (b) ≈ 6.4 × 10<sup>7</sup> W m<sup>−2</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Newton’s Law of Cooling',
        q: 'A metal block cools from 80°C to 60°C in 5.0 minutes when left in a room at 20°C. How long will it take to cool further from 60°C to 40°C, assuming Newton’s law of cooling holds?',
        steps: [
          '<b>Step 1 — first stage gives the constant <i>k</i>.</b> Use the average-temperature form, with the mean temperature of the body during the interval:<br>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>t</i> = <i>k</i>((<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2 − <i>T</i><sub>0</sub>)<br>(80 − 60)/5 = <i>k</i>((80 + 60)/2 − 20) ⇒ 4 = <i>k</i>(70 − 20) = 50<i>k</i> ⇒ <i>k</i> = 0.08 min<sup>−1</sup>.',
          '<b>Step 2 — second stage uses the same <i>k</i>.</b> Mean temperature now is (60 + 40)/2 = 50°C:<br>(60 − 40)/<i>t</i> = <i>k</i>((60 + 40)/2 − 20) = (0.08)(50 − 20) = (0.08)(30) = 2.4.',
          '<b>Step 3 — solve for <i>t</i>:</b><br>20/<i>t</i> = 2.4',
          'The deeper point: the same 20°C drop takes longer (8.3 min vs 5 min) the second time, because the block is now cooler and closer to the room — a smaller temperature excess means a slower rate of cooling. That slowing-down-as-you-approach-the-surroundings behaviour is the entire character of Newton’s law, visible right in the numbers.',
        ],
        ans: '<i>t</i> ≈ 8.3 minutes',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A black body of surface area 20 cm<sup>2</sup> is maintained at 727°C. Find the power it radiates. Take <i>σ</i> = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>.',
            a: '≈ 113 W',
          },
          {
            q: '[NEET] The radiation emitted by a hot body has its maximum intensity at a wavelength of 1.45 μm. Find the body’s absolute temperature. (Wien’s constant = 2.9 × 10<sup>−3</sup> m K.)',
            a: '2000 K',
          },
          {
            q: '[JEE Main] A body radiates a certain power at 727°C. At what temperature (in °C) will it radiate <b>16 times</b> that power, all else unchanged?',
            a: '1727 °C (since 16 = 2<sup>4</sup>, the absolute temperature doubles: 1000 K → 2000 K)',
          },
          {
            q: '[JEE Main] A liquid cools from 70°C to 50°C in 6.0 minutes in surroundings at 20°C. Using Newton’s law of cooling, find the time taken to cool from 50°C to 40°C.',
            a: '≈ 4.8 minutes',
          },
          {
            q: '[JEE Advanced] A body cools from 60°C to 50°C in the first 10 minutes when the surroundings are at 25°C. Assuming Newton’s law of cooling, find its temperature at the end of the next 10 minutes.',
            a: '≈ 42.9 °C',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Two identical kettles, one with a shiny polished surface and one painted dull black, are filled with boiling water and left in the same room. Which cools faster, and why?',
        opts: [
          {
            label: 'the polished kettle, because shiny surfaces lose heat faster',
            nudge: '<b>(a)</b> inverts the physics — polished surfaces are poor emitters.',
          },
          { label: 'the black kettle, because good absorbers are also good emitters', nudge: null },
          {
            label: 'both cool at the same rate, since they hold the same water',
            nudge: '<b>(c)</b> ignores that the rate of radiative loss depends on the surface, not just the contents.',
          },
          {
            label: 'the black kettle, because black objects are always hotter',
            nudge: '<b>(d)</b> is nonsense; both start at the same temperature.',
          },
        ],
        correct: 1,
        solution: 'By Kirchhoff’s law a good absorber is a good emitter; the black surface radiates more strongly, so it loses heat faster and cools quicker.',
      },
      {
        t: 'mcq',
        q: 'If the absolute temperature of a black body is doubled, the total energy it radiates per unit time becomes:',
        opts: [
          { label: '2 times', nudge: '<b>(a)</b> assumes a linear dependence.' },
          {
            label: '4 times',
            nudge: '<b>(b)</b> and <b>(c)</b> are the traps for students who use <i>T</i><sup>2</sup> or <i>T</i><sup>3</sup> — easy to misremember the exponent.',
          },
          {
            label: '8 times',
            nudge: '<b>(b)</b> and <b>(c)</b> are the traps for students who use <i>T</i><sup>2</sup> or <i>T</i><sup>3</sup> — easy to misremember the exponent.',
          },
          { label: '16 times', nudge: null },
        ],
        correct: 3,
        solution: 'Stefan’s law gives <i>P</i> ∝ <i>T</i><sup>4</sup>, so doubling <i>T</i> multiplies the power by 2<sup>4</sup> = 16.',
      },
      {
        t: 'mcq',
        q: 'As a piece of iron is heated to higher and higher temperatures, the wavelength at which it radiates most intensely:',
        opts: [
          { label: 'increases (shifts toward red)', nudge: '<b>(a)</b> reverses the relationship.' },
          { label: 'decreases (shifts toward blue)', nudge: null },
          {
            label: 'stays the same',
            nudge: '<b>(c)</b> would require <i>λ</i><sub><i>m</i></sub> independent of <i>T</i>, contradicting Wien.',
          },
          { label: 'first increases, then decreases', nudge: '<b>(d)</b> invents a non-existent turnaround.' },
        ],
        correct: 1,
        solution: 'Wien’s law, <i>λ</i><sub><i>m</i></sub><i>T</i> = constant, means a higher <i>T</i> gives a smaller <i>λ</i><sub><i>m</i></sub> — the peak shifts toward shorter (bluer) wavelengths. This is why heated iron goes from dull red to white-hot.',
      },
      {
        t: 'mcq',
        q: 'Newton’s law of cooling is best described as:',
        opts: [
          {
            label: 'an exact law valid for all temperature differences',
            nudge: '<b>(a)</b> is false — it fails for large differences.',
          },
          {
            label: 'a special case of Stefan’s law, valid only when the temperature difference between body and surroundings is small',
            nudge: null,
          },
          {
            label: 'applicable only to black bodies',
            nudge: '<b>(c)</b> is wrong; it applies to ordinary bodies (via emissivity), not only black bodies.',
          },
          {
            label: 'independent of the surface area of the body',
            nudge: '<b>(d)</b> is wrong; the cooling constant <i>k</i> explicitly contains the area <i>A</i>.',
          },
        ],
        correct: 1,
        solution: 'Newton’s law follows from Stefan’s <i>T</i><sup>4</sup> law by a first-order (binomial) approximation that is valid only for a small excess temperature.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Using Celsius in Stefan’s or Wien’s law.</b> Both demand absolute (kelvin) temperature. With the fourth power in Stefan’s law, a stray “use of °C” produces wildly wrong answers. Convert first, always.',
          '<b>Dropping the surroundings term.</b> Net radiation is <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>), not <i>eσAT</i><sup>4</sup>. A body in a warm room is also being heated by the room’s radiation.',
          '<b>Confusing emissive power with emissivity.</b> Emissive power <i>E</i> has units W m<sup>−2</sup>; emissivity <i>e</i> is a dimensionless number between 0 and 1. A black body has <i>e</i> = 1, but its emissive power <i>σT</i><sup>4</sup> is certainly not 1.',
          '<b>Applying Newton’s law of cooling to large differences.</b> It is an approximation for small excess only. For a body far hotter than its surroundings, use the full Stefan <i>T</i><sup>4</sup> relation.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For any “by what factor” radiation question, skip the constants entirely and use ratios in kelvin: <i>P</i><sub>2</sub>/<i>P</i><sub>1</sub> = (<i>T</i><sub>2</sub>/<i>T</i><sub>1</sub>)<sup>4</sup> for power and <i>λ</i><sub>2</sub>/<i>λ</i><sub>1</sub> = <i>T</i><sub>1</sub>/<i>T</i><sub>2</sub> for peak wavelength. For cooling problems, the average-temperature form (<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>t</i> = <i>k</i>((<i>T</i><sub>1</sub> + <i>T</i><sub>2</sub>)/2 − <i>T</i><sub>0</sub>) turns a differential equation into one line of arithmetic.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Radiation</b> needs no medium (crosses vacuum); <b>all bodies radiate at all temperatures</b> (Prevost’s exchange theory).',
            note: '',
          },
          {
            f: 'Stefan–Boltzmann',
            note: '<i>P</i> = <i>eσAT</i><sup>4</sup>; net <i>P</i> = <i>eσA</i>(<i>T</i><sup>4</sup> − <i>T</i><sub>0</sub><sup>4</sup>); <i>σ</i> = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>, dimensions [M T<sup>−3</sup> Θ<sup>−4</sup>].',
          },
          {
            f: 'Wien',
            note: '<i>λ</i><sub><i>m</i></sub><i>T</i> = <i>b</i>, <i>b</i> = 2.9 × 10<sup>−3</sup> m K — hotter = bluer (shorter <i>λ</i><sub><i>m</i></sub>).',
          },
          {
            f: '<b>Kirchhoff:</b> good absorbers are good emitters; emissivity = absorptivity. <b>Black body:</b> absorbs all, <i>e</i> = 1.',
            note: '',
          },
          {
            f: 'Newton’s cooling',
            note: '−d<i>T</i>/d<i>t</i> = <i>k</i>(<i>T</i> − <i>T</i><sub>0</sub>) — an approximation of Stefan’s law for small excess; <i>k</i> = 4<i>eσAT</i><sub>0</sub><sup>3</sup>/(<i>mc</i>).',
          },
        ],
        aids: ['“Stefan: power to the fourth (in Kelvin!)”', '“Wien: hot is blue, cool is red”', '“Black absorbs all, emits all.”'],
      },
    ],
  },
];
