import type { Topic } from '@/lib/textbooks';

/**
 * Class 12 Chapter 5, Topic 05: pp. 365–371 of the Class 12 Physics Master
 * Reference, word for word: Permanent Magnets and Electromagnets, split at its
 * Sections 1 to 8. Figure 5.8 (caption p. 366, drawn on p. 367) is redrawn in
 * lib/diagrams/physics-12-05.ts. The book's layout defects listed in its
 * errata are undone: the three steps of Section 3(C) are set one per step,
 * the MCQ options are split, and the practice answers are paired with their
 * questions.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 365–371 ─────────────────────────
  {
    n: '05',
    title: 'Permanent Magnets and Electromagnets',
    kalam: 'Steel is for permanent magnets; soft iron is for electromagnets.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A steady CBSE favourite for 2–3 marks — “how is a permanent magnet made,” “why is soft iron used for an electromagnet’s core,” or selecting a material from a hysteresis loop. NEET asks single-statement and assertion–reason items on material choice (steel vs soft iron). JEE Main reaches for the cored-solenoid field <i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i> and electromagnet lifting-force numericals; JEE Advanced may turn these into a small design problem. High-yield, low-effort marks once the soft/hard logic is locked in.',
      },
      {
        t: 'p',
        html: '<b>Notation (from Topic 03):</b> retentivity, coercivity, permeability <i>μ</i> = μ<sub>0</sub><i>μ</i><sub>r</sub>, and the hysteresis loop carry their meanings from Topic 03. New here: <i>n</i> = <i>N</i>/<i>L</i> = turns per unit length of a solenoid; the electromagnet field <i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i>; pole-face lifting force <i>F</i> = <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>) per face.',
      },
      {
        t: 'p',
        html: 'Two magnets sit in the average kitchen: the little disc holding a note to the fridge, and — hidden inside the doorbell on the wall — a coil that becomes a magnet only when you press the button. They are the two ends of this topic. One keeps its magnetism for years with no help at all; the other has magnetism on tap, summoned and dismissed by a flick of current. Understanding why a material falls into one camp or the other is the whole game, and it comes straight from the <b>hysteresis loop</b> of Topic 03.',
      },
      {
        t: 'p',
        html: 'A <b>permanent magnet</b> is a ferromagnetic material whose domains, once aligned, stubbornly stay aligned even after the magnetising field is switched off. For that you need two things from the hysteresis loop: high <b>retentivity</b> (so it keeps a strong field at <i>H</i> = 0) and, even more importantly, high <b>coercivity</b> (so a stray opposing field, a knock, or the passage of time can’t easily wipe it out). Materials with a fat hysteresis loop — <b>steel</b>, <b>Alnico</b> (aluminium–nickel–cobalt), cobalt-steel, ferrites, and the modern rare-earth giants like neodymium (Nd–Fe–B) — fit the bill.',
      },
      {
        t: 'p',
        html: 'An <b>electromagnet</b> wants the opposite temperament. It should produce a strong field while current flows, then let that field collapse the instant the current stops. For that you want very high <b>permeability</b> (a big field for a modest current) but low retentivity and low coercivity (so nothing lingers when you switch off). That’s a thin hysteresis loop — and <b>soft iron</b> is the textbook choice. Wrap a coil around a soft-iron core, pass a current, and you have a magnet you can command; cut the current and it forgets almost instantly.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the domains as a crowd of people facing random directions. Magnetising is getting them all to face one way. In <b>steel</b> (permanent), the crowd is stubborn — once turned, they hold their pose long after you stop directing them (high coercivity), which is exactly what you want for a magnet that must last. In <b>soft iron</b> (electromagnet), the crowd is eager but flighty — they snap to attention the moment you direct them (high permeability) but relax back to random the instant you stop (low retentivity), perfect for a magnet you want to turn off. Steel is the disciplined soldier; soft iron is the obedient-but-forgetful recruit.',
      },
      {
        t: 'p',
        html: 'How do you actually make a permanent magnet? The cleanest modern way is electrical: place the steel rod inside a solenoid and pass a strong direct current — the coil’s field aligns the domains and the steel keeps the alignment. Older hands-on methods include <b>stroking</b> the rod repeatedly with one pole of an existing magnet (always in the same direction), or holding the rod along the Earth’s field and <b>hammering</b> it so the shocks let domains settle into alignment. To destroy magnetism, do the reverse: <b>heat it past the Curie temperature</b> (Topic 03) so thermal chaos scrambles the domains, hammer it about randomly, or place it in a solenoid carrying <b>alternating current of slowly decreasing amplitude</b>.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> (1) All of this lives below the Curie temperature — heat any ferromagnet past <i>T</i><sub>c</sub> and it becomes paramagnetic, losing both retentivity and coercivity. (2) The neat formula <i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i> for a cored solenoid assumes the core is unsaturated and <i>μ</i><sub>r</sub> is roughly constant; near saturation <i>μ</i><sub>r</sub> drops and the field stops rising in proportion to current. (3) The lifting-force formula <i>F</i> = <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>) assumes the pole face and the load are in flush, gap-free contact — even a thin air gap slashes the force dramatically.',
      },
      { t: 'fig', id: 'p12-05-fig-5.8' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Retentivity (remanence)',
        html: 'the magnetic flux density <i>B</i> (or magnetisation <i>M</i>) remaining in a material when the magnetising field <i>H</i> is reduced to zero — how much magnetism it keeps.',
      },
      {
        t: 'def',
        term: 'Coercivity',
        html: 'the reverse magnetising field <i>H</i> required to reduce the material’s <i>B</i> (or <i>M</i>) back to zero — how hard it is to demagnetise. Unit: A·m<sup>−1</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Field inside a long solenoid with a core',
        main: '<i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i> = <i>μnI</i><br><i>n</i> = <i>N</i>/<i>L</i>',
        legend: [
          '<i>N</i> = total turns',
          '<i>L</i> = length',
          '<i>I</i> = current',
          '<i>μ</i><sub>r</sub> = relative permeability of the core',
        ],
        note: 'For an air-core solenoid, <i>μ</i><sub>r</sub> = 1 and <i>B</i> = μ<sub>0</sub><i>nI</i>. A soft-iron core multiplies this by <i>μ</i><sub>r</sub> (hundreds to thousands).',
      },
      {
        t: 'formula',
        kicker: 'Lifting (holding) force at a pole face of area <i>A</i> carrying flux density <i>B</i>',
        main: '<i>F</i> = <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>) (per pole face)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Total force of a horseshoe electromagnet (two pole faces, each area <i>A</i>)',
        main: '<i>F</i><sub>total</sub> = <i>B</i><sup>2</sup><i>A</i>/μ<sub>0</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Reverse current that brings <i>B</i> to zero in a sample of coercivity <i>H</i><sub>c</sub> (solenoid of <i>n</i> turns per metre)',
        main: '<i>I</i> = <i>H</i><sub>c</sub>/<i>n</i>',
        legend: [],
        note: 'The sample keeps some magnetisation once this current is switched off; full demagnetisation needs an alternating current of decreasing amplitude, or heating past <i>T</i><sub>c</sub>.',
      },
      {
        t: 'table',
        title: 'Material selection summary',
        head: ['Requirement', 'Permanent magnet', 'Electromagnet core'],
        rows: [
          ['Retentivity', 'high', 'low'],
          ['Coercivity', '<b>high</b> (key)', '<b>low</b> (key)'],
          ['Permeability', 'not critical (often low)', 'very high'],
          ['Hysteresis loop', 'wide / fat (large area)', 'narrow / thin (small area)'],
          ['Typical material', 'steel, Alnico, ferrite, Nd–Fe–B', 'soft iron'],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: '(A) Making a permanent magnet — the methods',
        steps: [
          '<b>Electrical method (most effective, used commercially):</b> place the steel rod inside a solenoid and pass a strong <b>direct current</b>. The intense, uniform field aligns the domains; steel’s high coercivity then locks the alignment in place after the current is switched off.',
          '<b>Single-touch (stroking):</b> stroke the rod from end to end repeatedly with one pole of a bar magnet, always in the <b>same direction</b>, lifting the magnet well clear between strokes. Each pass nudges more domains into alignment.',
          '<b>Double-touch:</b> stroke from the centre outwards using two unlike poles simultaneously, one moving to each end.',
          '<b>Hammering in the Earth’s field:</b> hold the rod along the Earth’s field direction (pointing north and dipped) and tap it with a hammer — the mechanical shocks help domains jostle into alignment with the Earth’s field.',
        ],
      },
      {
        t: 'proc',
        title: '(B) Destroying magnetism (demagnetisation)',
        steps: [
          '<b>Heat past the Curie temperature</b> — thermal agitation randomises the domains (Topic 03); on cooling the material is unmagnetised.',
          '<b>Rough handling / random hammering</b> — shocks delivered in random orientations scatter the domain alignment.',
          '<b>AC demagnetisation</b> — place the magnet in a solenoid carrying <b>alternating current whose amplitude is slowly reduced to zero</b>; the repeatedly reversing, shrinking field walks the material round ever-smaller hysteresis loops down to zero magnetisation.',
        ],
      },
      { t: 'p', html: 'The hysteresis loop is the decision chart:' },
      {
        t: 'proc',
        title: '(C) Reading the loop to choose a material (logical chain)',
        steps: [
          'Need the magnet to <b>stay</b> magnetised? → demand high <b>coercivity</b> (won’t demagnetise) and high <b>retentivity</b> (strong remanent field) → choose a <b>wide-loop</b> material (steel, Alnico).',
          'Need the magnet to <b>switch off cleanly</b> and waste little energy per cycle? → demand <b>low coercivity, low retentivity, high permeability</b>, and a <b>small loop area</b> (small hysteresis loss) → choose <b>soft iron</b>.',
          'Recall from Topic 03 that the <b>loop area = energy dissipated per unit volume per cycle</b>; a transformer or AC electromagnet, cycled many times a second, must have a thin loop to avoid overheating.',
        ],
      },
      { t: 'p', html: '<b>(D) The electromagnet — why a soft-iron core multiplies the field</b>' },
      {
        t: 'p',
        html: 'A current-carrying solenoid alone gives <i>B</i> = μ<sub>0</sub><i>nI</i>. Insert a soft-iron core and its domains align with the solenoid’s field, adding their own enormous magnetisation; the field becomes <i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i> — larger by the factor <i>μ</i><sub>r</sub>, which for soft iron is several hundred to a few thousand. Because soft iron has low retentivity, the moment the current stops the domains relax and the field nearly vanishes — giving the on/off control an electromagnet exists to provide.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A solenoid 0.25 m long has 500 turns and carries a current of 1.0 A. A soft-iron core of relative permeability 600 fills it. Find the magnetic field inside.',
        steps: [
          '<b>Given:</b> <i>L</i> = 0.25 m, <i>N</i> = 500, <i>I</i> = 1.0 A, <i>μ</i><sub>r</sub> = 600.',
          'Turns per metre: <i>n</i> = <i>N</i>/<i>L</i> = 500/0.25 = 2000 m<sup>−1</sup>.',
          '<i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i> = (4π × 10<sup>−7</sup>)(600)(2000)(1.0).<br><i>B</i> = (1.2566 × 10<sup>−6</sup>)(1.2 × 10<sup>6</sup>)',
          'Without the core the field would be only μ<sub>0</sub><i>nI</i> = 2.5 × 10<sup>−3</sup> T — the soft iron multiplies it by 600. That amplification, plus the clean switch-off, is the entire point of an electromagnet.',
        ],
        ans: '<i>B</i> ≈ 1.5 T.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'For the core of an electromagnet, which is the better choice — soft iron or steel — and why?',
        steps: [
          '<b>Answer instantly from the soft/hard logic: soft iron.</b> An electromagnet must produce a strong field while current flows and lose it the moment the current stops. Soft iron has <b>high permeability</b> (strong field per unit current) and <b>low retentivity</b> (no lingering magnetism) — a thin hysteresis loop.',
          'The trap is to pick steel because “steel is strong/hard, so it makes a stronger magnet.” Steel’s high coercivity is exactly wrong here — it would stay magnetised after switch-off, defeating the on/off purpose. Steel is for permanent magnets; soft iron is for electromagnets. (Mnemonic: Soft for Switching, Hard for Holding.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (lifting force)',
        q: 'A horseshoe electromagnet produces a flux density of 1.5 T at each of its two pole faces, each of area 8.0 cm<sup>2</sup>. Find the maximum weight it can support.',
        steps: [
          'The total attractive force from two pole faces (each area <i>A</i>) is<br><i>F</i> = <i>B</i><sup>2</sup><i>A</i>/μ<sub>0</sub> = (1.5)<sup>2</sup>(8.0 × 10<sup>−4</sup>)/(4π × 10<sup>−7</sup>) = (2.25)(8.0 × 10<sup>−4</sup>)/(1.2566 × 10<sup>−6</sup>) = (1.8 × 10<sup>−3</sup>)/(1.2566 × 10<sup>−6</sup>)',
          'This is the maximum supportable weight, ≈ 1432 N — equivalent to a mass of <i>m</i> = <i>F</i>/<i>g</i> = 1432/9.8 ≈ <b>146</b> kg. (Per pole face the force is <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>); two faces double it, cancelling the 2.) Such forces are why scrapyard electromagnets lift cars.',
        ],
        ans: '<i>F</i> ≈ 1.4 × 10<sup>3</sup> N.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (design problem)',
        q: 'A horseshoe electromagnet must lift a 200 kg iron block. Each of its two pole faces has area 10 cm<sup>2</sup>. The core has relative permeability 800, and the energising solenoid has 4000 turns per metre. (a) What flux density is needed at the poles? (b) What current must flow? (Take <i>g</i> = 9.8 m·s<sup>−2</sup>.)',
        steps: [
          '<b>(a)</b> The required holding force equals the block’s weight, <i>F</i> = <i>mg</i> = 200 × 9.8 = 1960 N. Using the two-pole formula <i>F</i> = <i>B</i><sup>2</sup><i>A</i>/μ<sub>0</sub> with <i>A</i> = 10 × 10<sup>−4</sup> m<sup>2</sup>:<br><i>B</i> = √(<i>F</i>μ<sub>0</sub>/<i>A</i>) = √((1960)(1.2566 × 10<sup>−6</sup>)/(1.0 × 10<sup>−3</sup>)) = √2.463',
          '<b>(b)</b> From <i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i>:<br><i>I</i> = <i>B</i>/(μ<sub>0</sub><i>μ</i><sub>r</sub><i>n</i>) = 1.57/((1.2566 × 10<sup>−6</sup>)(800)(4000)) = 1.57/4.021',
          'A striking result: a soft-iron core (<i>μ</i><sub>r</sub> = 800) lets a current of well under half an ampere generate enough field to hold 200 kg. Strip the core away (<i>μ</i><sub>r</sub> = 1) and you’d need 800× the current — about 310 A — which is precisely why electromagnets are always built around a high-permeability core.',
        ],
        ans: '(a) <i>B</i> ≈ 1.57 T; (b) <i>I</i> ≈ 0.39 A.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State two methods by which a steel bar can be converted into a permanent magnet.',
            a: 'e.g. stroking (single-touch) with one pole of a magnet; placing in a DC solenoid',
          },
          {
            q: '[NEET] Name the material best suited for the core of an electromagnet and give the property that makes it suitable.',
            a: 'soft iron — high permeability with low retentivity',
          },
          {
            q: '[JEE Main] A solenoid 0.40 m long with 800 turns carries 1.5 A around a core of relative permeability 500. Find the magnetic field inside.',
            a: '≈ 1.9 T',
          },
          {
            q: '[JEE Main] One pole face of an electromagnet, of area 5.0 cm<sup>2</sup>, carries a flux density of 1.2 T. Find the force with which it attracts a soft-iron keeper placed flush against it.',
            a: '≈ 286 N',
          },
          {
            q: '[JEE Advanced] A ferromagnetic sample has a coercivity of 5000 A·m<sup>−1</sup>. It is placed in a solenoid wound with 2500 turns per metre. Find the reverse current that brings its <i>B</i> to zero while the current flows, and name one alternative (non-electrical) method of demagnetising it.',
            a: '2.0 A (reverse); alternatively, heat it above its Curie temperature (or hammer it in random orientations)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The material most suitable for making a permanent magnet should have:',
        opts: [
          {
            label: 'high retentivity and low coercivity',
            nudge: '<b>(a)</b> low coercivity would let it demagnetise easily — useless for permanence.',
          },
          {
            label: 'low retentivity and high coercivity',
            nudge: '<b>(b)</b> low retentivity means little remanent field to begin with.',
          },
          { label: 'high retentivity and high coercivity', nudge: null },
          {
            label: 'low retentivity and low coercivity',
            nudge: '<b>(d)</b> describes soft iron — an electromagnet core, not a permanent magnet.',
          },
        ],
        correct: 2,
        solution: 'A permanent magnet must hold a strong field (high retentivity) and resist being demagnetised by stray fields or knocks (high coercivity) — a wide hysteresis loop, as in steel or Alnico.',
      },
      {
        t: 'mcq',
        q: 'Soft iron is preferred over steel for the core of an electromagnet because soft iron has:',
        opts: [
          {
            label: 'high coercivity',
            nudge: '<b>(a)</b>, <b>(c)</b> describe permanent-magnet (steel) traits — the field would persist, defeating on/off control.',
          },
          { label: 'high permeability and low retentivity', nudge: null },
          {
            label: 'high retentivity and high coercivity',
            nudge: '<b>(a)</b>, <b>(c)</b> describe permanent-magnet (steel) traits — the field would persist, defeating on/off control.',
          },
          {
            label: 'a large hysteresis loop area',
            nudge: '<b>(d)</b> a large loop area means large energy loss per cycle — undesirable in an electromagnet.',
          },
        ],
        correct: 1,
        solution: 'High permeability gives a strong field for a given current; low retentivity ensures the magnetism vanishes when the current is switched off — exactly what an electromagnet needs.',
      },
      {
        t: 'mcq',
        q: 'Which of the following will <b>not</b> demagnetise a permanent magnet?',
        opts: [
          {
            label: 'Heating it above its Curie temperature',
            nudge: '<b>(a)</b> thermal chaos past <i>T</i><sub>c</sub> randomises domains — demagnetises.',
          },
          {
            label: 'Hammering it in random orientations',
            nudge: '<b>(b)</b> random shocks scatter domain alignment — demagnetises.',
          },
          { label: 'Placing it in a solenoid with steady DC current aligned to its magnetisation', nudge: null },
          {
            label: 'Placing it in a solenoid with decreasing alternating current',
            nudge: '<b>(d)</b> the standard AC demagnetisation method — demagnetises.',
          },
        ],
        correct: 2,
        solution: 'A steady DC field aligned with the existing magnetisation would only reinforce it, not destroy it.',
      },
      {
        t: 'mcq',
        q: 'A solenoid with an iron core (<i>μ</i><sub>r</sub> = 1000) carries a current that would produce 0.0015 T in air. The field inside the core is:',
        opts: [
          { label: '0.0015 T', nudge: '<b>(a)</b> ignores the core entirely.' },
          { label: '1.5 T', nudge: null },
          { label: '0.15 T', nudge: '<b>(c)</b> multiplies by 100 instead of 1000.' },
          { label: '15 T', nudge: '<b>(d)</b> multiplies by 10,000.' },
        ],
        correct: 1,
        solution: 'The core multiplies the air-core field by <i>μ</i><sub>r</sub>: <i>B</i> = <i>μ</i><sub>r</sub> × <i>B</i><sub>air</sub> = 1000 × 0.0015 = 1.5 T.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping steel and soft iron.</b> Steel (high coercivity, wide loop) → <b>permanent</b> magnets; soft iron (high permeability, low retentivity, thin loop) → <b>electromagnet</b> cores. Reversing these is the single most common error in this topic.',
          '<b>Forgetting the core factor.</b> A cored solenoid gives <i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i>, not μ<sub>0</sub><i>nI</i>. Dropping <i>μ</i><sub>r</sub> undercounts the field by hundreds or thousands of times.',
          '<b>Missing the second pole face in lifting force.</b> A horseshoe grips with two faces: <i>F</i><sub>total</sub> = <i>B</i><sup>2</sup><i>A</i>/μ<sub>0</sub>, which is twice the single-face <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>).',
          '<b>Confusing retentivity with coercivity.</b> Retentivity = field left at <i>H</i> = 0 (how much it keeps); coercivity = reverse field needed to zero it (how hard to erase). Permanent magnets need both high, but coercivity is the make-or-break property.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Reduce every material question to one phrase — “Soft for Switching, Hard for Holding.” Soft iron switches (electromagnet); hard steel holds (permanent magnet). For force problems, check whether the magnet has one pole face or two before plugging in, and always convert pole-face area from cm<sup>2</sup> to m<sup>2</sup> (a factor of 10<sup>−4</sup> that students routinely drop).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Permanent magnet (steel, Alnico, ferrite, Nd–Fe–B)',
            note: 'high <b>retentivity</b> + high <b>coercivity</b>, wide hysteresis loop — it holds its field.',
          },
          {
            f: 'Electromagnet core (soft iron)',
            note: 'high <b>permeability</b> + low <b>retentivity</b> + low <b>coercivity</b>, thin loop — it switches cleanly.',
          },
          {
            f: 'Cored-solenoid field',
            note: '<i>B</i> = μ<sub>0</sub><i>μ</i><sub>r</sub><i>nI</i>, with <i>n</i> = <i>N</i>/<i>L</i>. (Core boosts the field by <i>μ</i><sub>r</sub>.)',
          },
          {
            f: 'Lifting force',
            note: '<i>F</i> = <i>B</i><sup>2</sup><i>A</i>/(2μ<sub>0</sub>) per pole face; <i>B</i><sup>2</sup><i>A</i>/μ<sub>0</sub> for a two-pole horseshoe.',
          },
          {
            f: 'Make a magnet',
            note: 'DC solenoid (best), stroking/single-touch, hammering along Earth’s field.',
          },
          {
            f: 'Demagnetise',
            note: 'heat above <i>T</i><sub>c</sub>, hammer randomly, or AC solenoid with decreasing current. (A reverse current <i>I</i> = <i>H</i><sub>c</sub>/<i>n</i> drives <i>B</i> to zero only while it flows.)',
          },
        ],
        aids: [
          '“Soft for Switching, Hard for Holding.”',
          '“Retentivity = what’s Retained; Coercivity = force to Cancel.”',
          '“Core multiplies by <i>μ</i><sub>r</sub> — never forget the core.”',
        ],
      },
    ],
  },
];
