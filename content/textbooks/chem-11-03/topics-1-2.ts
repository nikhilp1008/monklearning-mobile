import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topics 01 and 02: pp. 118–134 of the Class 11 Chemistry Master
 * Reference, word for word. The chapter’s title page (p. 117) and contents
 * (top of p. 118) are not copied. Topic 01, Development of the Periodic Table
 * & the Modern Periodic Law (starts under the contents on p. 118, ends with
 * the last mnemonic on p. 126; Figure 3.1 on the figures page p. 122), and
 * Topic 02, Periodic Trends in Physical Properties (pp. 127–134; Figure 3.2
 * on the figures page p. 131), are each split at their Sections 1 to 8.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 118–126 ─────────────────────────
  {
    n: '01',
    title: 'Development of the Periodic Table & the Modern Periodic Law',
    kalam: 'The physical and chemical properties of the elements are a periodic function of their atomic numbers (Z).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A reliable scorer. CBSE Boards almost always carry a 1–3 mark item here — state a law, list two demerits of Mendeleev’s table, or name an element with <i>Z</i> > 100. NEET asks 1 conceptual MCQ most years (who-proposed-what, octaves, triads). JEE Main folds it into nomenclature + block-prediction questions; JEE Advanced rarely asks it alone but expects the reasoning — why atomic number, not atomic weight — as a foundation for everything downstream.',
      },
      {
        t: 'p',
        html: 'Imagine you have just been handed the keys to a giant, unorganised kirana store. Hundreds of items are dumped on the floor — no shelves, no labels. A customer asks for “something to make the dal sour.” You have no idea where the tamarind, lemon, or kokum are. Now imagine the same store after a smart shopkeeper has arranged everything: pulses on one rack, spices on another, souring agents together. Suddenly, even an item you have never seen before is findable — if it behaves like tamarind, it lives near tamarind.',
      },
      {
        t: 'p',
        html: 'That is exactly the problem chemists faced in the 1800s. New elements were being discovered every few years, and each one’s properties had to be memorised from scratch. The periodic table is the “shelving system” that turned this chaos into a map. Its single most powerful promise is this: <b>once you know where an element sits, you can predict how it behaves — even if nobody has ever studied it.</b>',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the platforms at a busy junction like Howrah or New Delhi station. Trains on Platform 1 all head north; Platform 2 trains all head east. You don’t need to read every train’s full route — the platform tells you the family. In the periodic table, a vertical column (a <b>group</b>) is a platform: every element on it shares a “destination,” meaning similar chemical behaviour. A horizontal row (a <b>period</b>) is like the order in which platforms fill up as the station expands. The genius of the table is that “platform” and “row position” are not arbitrary — they are dictated by the element’s electronic structure.',
      },
      {
        t: 'p',
        html: 'The story of how this shelving system was built is a story of three big leaps:<br>1. <b>Spotting hidden patterns</b> in small clusters of elements (Döbereiner’s triads, Newlands’ octaves, de Chancourtois’ helix, Lothar Meyer’s curve).<br>2. <b>Mendeleev’s masterstroke</b> — arranging all known elements by atomic weight, and being bold enough to leave <b>gaps</b> for elements not yet discovered, predicting their properties in advance.<br>3. <b>The Moseley correction</b> — realising the true organising principle is not atomic weight but atomic number, which fixed the handful of cases where Mendeleev’s table looked “wrong.”',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions to keep in mind:</b><br>• The early attempts (triads, octaves) <b>only worked for the lightest, then-known elements</b>. Newlands’ octave pattern collapsed completely after calcium, and many triads simply did not exist. These were clues, not laws.<br>• Mendeleev’s law assumed <b>atomic weight</b> was the master variable. This assumption fails at a few stubborn pairs (we will meet Ar/K, Te/I, Co/Ni) — the very failures that pointed chemists toward atomic number.<br>• The table organises chemical periodicity; it does <b>not</b> by itself explain why periodicity happens. That “why” only arrived with the quantum model of the atom — which is why hydrogen, with its split personality, still refuses to sit comfortably in any one group.',
      },
      {
        t: 'p',
        html: 'Hold onto that last point. Every “exception” you will be asked about in an exam is really the periodic table being honest about the limits of a simple rule.',
      },

      { t: 'part', title: 'Key definitions, laws and landmark data' },
      {
        t: 'p',
        html: '(Chemistry fork — this topic has formulae only in the sense of arithmetic patterns and naming rules; the “data” here is historical and definitional.)',
      },
      {
        t: 'def',
        term: 'Döbereiner’s Law of Triads (1817–1829)',
        html: 'In a group of three chemically similar elements (a triad) arranged by increasing atomic mass, the atomic mass of the <b>middle</b> element is approximately the <b>arithmetic mean</b> of the other two.',
      },
      {
        t: 'formula',
        kicker: 'Triad rule',
        main: '<i>A</i><sub>middle</sub> ≈ (<i>A</i><sub>first</sub> + <i>A</i><sub>last</sub>)/2',
        legend: ['<i>A</i> = atomic mass'],
        note: null,
      },
      {
        t: 'def',
        term: 'Newlands’ Law of Octaves (1865)',
        html: 'When elements are arranged by increasing atomic mass, every <b>eighth</b> element shows properties similar to the first — like the repeating notes of a musical octave (sa, re, ga… returning to sa). The pattern held only up to calcium.',
      },
      {
        t: 'def',
        term: 'Mendeleev’s Periodic Law (1869)',
        html: 'The physical and chemical properties of the elements are a periodic function of their atomic weights.',
      },
      {
        t: 'def',
        term: 'Modern Periodic Law (Moseley, ~1913)',
        html: 'The physical and chemical properties of the elements are a periodic function of their atomic numbers (<i>Z</i>).',
      },
      {
        t: 'p',
        html: '<b>Core definitions:</b><br>• <b>Period</b> — a horizontal row. Elements in the same period have the same number of occupied principal energy shells (same highest principal quantum number <i>n</i>). There are <b>7</b> periods.<br>• <b>Group</b> — a vertical column. Elements in the same group share a similar <b>valence-shell electronic configuration</b>, hence similar chemical properties. The modern long form has <b>18</b> groups (IUPAC 1–18 numbering).<br>• <b>Atomic number (<i>Z</i>)</b> — the number of protons (equivalently, electrons in a neutral atom). It is the fundamental property that defines an element’s identity.',
      },
      {
        t: 'table',
        title: 'Period-wise element capacity (long form)',
        head: ['Period', 'Subshells filled', 'Max elements'],
        rows: [
          ['1', '1s', '2'],
          ['2', '2s 2p', '8'],
          ['3', '3s 3p', '8'],
          ['4', '4s 3d 4p', '18'],
          ['5', '5s 4d 5p', '18'],
          ['6', '6s 4f 5d 6p', '32'],
          ['7', '7s 5f 6d 7p', '32'],
        ],
      },
      {
        t: 'p',
        html: 'The “magic numbers” by which similar properties recur — <b>2, 8, 8, 18, 18, 32, 32</b> — are a direct consequence of subshell capacities, not coincidence.',
      },
      {
        t: 'p',
        html: '<b>Mendeleev’s predictive triumph (landmark data):</b> He left a gap below aluminium (“eka-aluminium”) and below silicon (“eka-silicon”) and predicted their properties. When gallium and germanium were discovered, the match was striking — for example, eka-silicon was predicted to have an oxide of formula <i>E</i>O<sub>2</sub> and a chloride <i>E</i>Cl<sub>4</sub>; germanium delivered exactly GeO<sub>2</sub> and GeCl<sub>4</sub>, with measured density and atomic mass close to prediction.',
      },
      {
        t: 'table',
        title: 'IUPAC numerical roots for naming Z > 100',
        head: ['Digit', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        rows: [
          ['Root', 'nil', 'un', 'bi', 'tri', 'quad', 'pent', 'hex', 'sept', 'oct', 'enn'],
          ['Letter', 'n', 'u', 'b', 't', 'q', 'p', 'h', 's', 'o', 'e'],
        ],
      },
      {
        t: 'p',
        html: 'The name is built digit-by-digit and ends in <b>-ium</b>; the symbol is the first letter of each root.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '(No formal derivation exists for this topic, so this section gives the reasoning frameworks and step-by-step procedures examiners reward.)',
      },
      {
        t: 'p',
        html: '<b>Why it works:</b> if three elements are genuine chemical “siblings” climbing a group, their atomic masses tend to step up in roughly equal jumps, so the middle one lands near the average. This is a consistency test, not a fundamental law.',
      },
      {
        t: 'proc',
        title: '3.1 — Checking a Döbereiner triad',
        steps: [
          'Confirm the three elements are chemically similar (same family).',
          'Order them by increasing atomic mass.',
          'Compute the mean of the first and third masses.',
          'Compare with the actual middle mass. A close match supports a triad; a large gap means the grouping fails.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why it works:</b> if properties vary smoothly down a group and across a period, then a missing slot must hold an element whose properties are intermediate between its known neighbours. Mendeleev treated the table as a grid you could interpolate within.',
      },
      {
        t: 'proc',
        title: '3.2 — The logic of Mendeleev’s gaps (predicting “eka-” elements)',
        steps: [
          'Locate the empty slot and identify the element <b>above</b> it (same group) and the elements <b>flanking</b> it in the same period.',
          'For each property (atomic mass, oxide/chloride formula, density), read off the trend among the known neighbours.',
          'Interpolate to predict the missing element’s value.',
          'Use group valency to fix the formula of its oxide and chloride.',
        ],
      },
      { t: 'p', html: 'This is the conceptual heart of the topic.' },
      {
        t: 'proc',
        title: '3.3 — From atomic weight to atomic number (the reasoning chain)',
        steps: [
          '<b>Observation of anomalies.</b> Ordering strictly by atomic weight forced a few pairs into the wrong chemical company — argon (≈40) would sit after potassium (≈39), tellurium (≈128) after iodine (≈127), cobalt (≈59) after nickel (≈59). Mendeleev reversed Te/I and Co/Ni on chemical grounds, admitting his law had cracks.',
          '<b>A deeper property is needed.</b> Chemistry is governed by <b>electrons</b>, and the electron count is set by the <b>nuclear charge</b> — the number of protons.',
          '<b>Moseley’s evidence.</b> Studying the characteristic X-ray spectra of elements, Moseley found a clean, regular relationship tied to a whole-number quantity — the atomic number <i>Z</i> — and proposed <i>Z</i>, not weight, as the true ordering variable.',
          '<b>The anomalies dissolve.</b> Order by <i>Z</i> and Ar (18) correctly precedes K (19), Te (52) precedes I (53), Co (27) precedes Ni (28). No swaps needed. The law becomes exact.',
        ],
      },
      {
        t: 'proc',
        title: '3.4 — Building (and reading) the long form',
        steps: [
          'The row you are in = the highest principal quantum number <i>n</i> being filled = the <b>period</b>.',
          'The subshell receiving the differentiating (last) electron places you in a <b>block</b> (s, p, d, or f).',
          'The valence-shell configuration fixes the <b>group</b>. Two elements with the same valence configuration are group-mates with similar chemistry.',
        ],
      },
      { t: 'fig', id: 'c11-03-fig-3.1' },
      {
        t: 'proc',
        title: '3.5 — Naming an element with Z > 100',
        steps: [
          'Write the atomic number digit by digit.',
          'Replace each digit with its numerical root (the table in Key definitions, laws and landmark data).',
          'Concatenate the roots in order and append <b>-ium</b>.',
          'The symbol is the first letter of each root, capitalising only the first.',
        ],
      },
      { t: 'p', html: '(Worked instance in worked example 3.)' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Strontium lies between calcium and barium in a Döbereiner triad. Given the atomic masses of calcium and barium as 40.1 and 137.3 respectively, predict the atomic mass of strontium and comment on how close your prediction is to the accepted value of 87.6.',
        steps: [
          '<b>Given:</b> <i>A</i><sub>Ca</sub> = 40.1, <i>A</i><sub>Ba</sub> = 137.3. Triad rule:<br><i>A</i><sub>Sr</sub> ≈ (<i>A</i><sub>Ca</sub> + <i>A</i><sub>Ba</sub>)/2 = (40.1 + 137.3)/2 = 177.4/2',
        ],
        ans: 'Predicted atomic mass of strontium ≈ <b>88.7</b> u. The accepted value is 87.6 u, so the prediction is within about 1.3% — close enough to confirm Ca, Sr, Ba form a valid triad.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Three statements are made about early classification:<br>(I) Newlands’ octaves remained valid up to and beyond iron.<br>(II) Döbereiner’s triad mass-rule applies to every set of three similar elements.<br>(III) Mendeleev arranged elements primarily by atomic weight. How many statements are correct?',
        steps: [
          '<b>Speed approach.</b> Don’t compute — eliminate on known limits.<br>• (I) is the classic trap: octaves <b>broke down after calcium</b>, not iron. ✗<br>• (II) over-generalises: many similar trios are not triads (the mean fails). ✗<br>• (III) is the textbook definition of Mendeleev’s law. ✓',
          'The two distractors both work by replacing a limited historical pattern with a falsely universal one — the most common way this topic is trapped in NEET.',
        ],
        ans: '1 statement correct.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept: nomenclature + block prediction',
        q: 'A newly synthesised superheavy element has atomic number 124. (a) Give its temporary IUPAC name and symbol. (b) Predict the block it belongs to, assuming the Aufbau order holds.',
        steps: [
          '<b>(a) Naming.</b> Digits of 124: 1 → un, 2 → bi, 4 → quad. Concatenate + “-ium”: <b>un + bi + quad + ium = unbiquadium</b>. Symbol from first letters: <b>Ubq</b>.',
          '<b>(b) Block.</b> Build the configuration up to <i>Z</i> = 124. The noble gas oganesson is <i>Z</i> = 118 ([Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>6</sup>). The next electrons (for <i>Z</i> = 119, 120) enter 8s; thereafter, following the extended Aufbau order, the 5g subshell begins to fill. Elements 121 onward start populating g-orbitals, so <i>Z</i> = 124 falls in the predicted <b>g-block</b> (a hypothetical extension beyond the current s, p, d, f scheme).',
          'This question links two skills: the digit-by-digit naming procedure and electron-filling logic — exactly the kind of stitching JEE Main favours.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Argon (<i>Z</i> = 18, atomic mass ≈ 39.95) appears before potassium (<i>Z</i> = 19, atomic mass ≈ 39.10) in the modern table, even though argon is the heavier element. (a) Explain why a strict atomic-weight ordering would invert this pair, and why the modern law does not. (b) Identify the physical reason argon’s atomic mass exceeds potassium’s despite its smaller atomic number, and state what this reveals about the limitation of Mendeleev’s original variable.',
        steps: [
          '<b>(a)</b> Under Mendeleev’s law, ordering is by atomic weight, so argon (39.95) would be placed after potassium (39.10) — landing argon, a noble gas, in the reactive-metal column and potassium among inert gases, which is chemically absurd. (Argon was found only in 1894, after Mendeleev’s table; the Te/I swap was his own.) The modern law orders by atomic number: <i>Z</i> = 18 (Ar) < <i>Z</i> = 19 (K), so argon precedes potassium automatically. No hand-correction is needed.',
          '<b>(b)</b> Atomic mass depends on the <b>number of neutrons</b>, not just protons. Naturally occurring argon is dominated by the isotope with mass number 40 (a relatively neutron-rich nuclide), while potassium’s principal isotope has mass number 39. So argon, despite one fewer proton, carries more nucleons on average and is heavier. This exposes the core limitation of Mendeleev’s variable: <b>atomic weight is a property of the nucleus’s total nucleon count, which can vary irregularly (isotopes, neutron number), whereas chemical behaviour is governed by the electron count — fixed by <i>Z</i>.</b> Hence ordering by <i>Z</i> is both more fundamental and free of “anomalous pairs.”',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the modern periodic law. How does it differ in its basis from Mendeleev’s original law?',
            a: 'Properties are a periodic function of atomic <b>number</b> (modern) vs atomic <b>weight</b> (Mendeleev).',
          },
          {
            q: '[NEET] Which scientist is credited with the Law of Octaves, and at which element did the pattern first break down?',
            a: '<b>Newlands</b>; the pattern broke down after <b>calcium</b>.',
          },
          {
            q: '[JEE Main] Write the IUPAC temporary name and three-letter symbol for the element with atomic number 113.',
            a: '<b>Ununtrium</b>, symbol <b>Uut</b>.',
          },
          {
            q: '[JEE Main] The atomic masses of chlorine and iodine are 35.5 and 127. If Cl, Br, I form a Döbereiner triad, predict bromine’s atomic mass and compare with its accepted value of 79.9.',
            a: 'Predicted ≈ (35.5 + 127)/2 = 81.25 u; accepted 79.9 u (within ~1.7%, confirming the triad).',
          },
          {
            q: '[JEE Advanced] Cobalt (<i>Z</i> = 27, mass ≈ 58.93) is placed before nickel (<i>Z</i> = 28, mass ≈ 58.69) in the modern table. Explain why this ordering is consistent with the modern periodic law but would be an “anomaly” under Mendeleev’s law, and identify the family each element belongs to.',
            a: 'By <i>Z</i>: 27 < 28, so Co precedes Ni automatically; by weight, Co (58.93) is heavier, so a strict weight ordering would invert them (an anomalous pair). Both are group-9/10 d-block (transition) metals; the inversion arises from isotopic/neutron-count differences, not chemistry.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The fundamental property used to arrange elements in the modern periodic table is:',
        opts: [
          {
            label: 'atomic mass',
            nudge: '<b>(a)</b> is the Mendeleev-era basis — picked by students who blur the two laws together; it is precisely what Moseley replaced.',
          },
          { label: 'atomic number', nudge: null },
          {
            label: 'atomic radius',
            nudge: '<b>(c)</b> atomic radius is a periodic trend (a consequence), not the organising variable — a tempting swap if you confuse cause and effect.',
          },
          {
            label: 'atomic volume',
            nudge: '<b>(d)</b> atomic volume underlies Lothar Meyer’s curve, not the table’s ordering — a distractor for those who muddle the two contributors.',
          },
        ],
        correct: 1,
        solution: 'The modern law is built on atomic number <i>Z</i>, the proton/electron count that governs chemistry.',
      },
      {
        t: 'mcq',
        q: 'Which pair represents an “anomalous pair” that Mendeleev had to reorder against atomic-weight sequence?',
        opts: [
          {
            label: 'Na and K',
            nudge: '<b>(a), (c), (d)</b> are all normal group-mate or sequential pairs with no weight–chemistry conflict; they are offered to a student who remembers “there were anomalous pairs” but not which.',
          },
          { label: 'Te and I', nudge: null },
          {
            label: 'Li and Na',
            nudge: '<b>(a), (c), (d)</b> are all normal group-mate or sequential pairs with no weight–chemistry conflict; they are offered to a student who remembers “there were anomalous pairs” but not which.',
          },
          {
            label: 'F and Cl',
            nudge: '<b>(a), (c), (d)</b> are all normal group-mate or sequential pairs with no weight–chemistry conflict; they are offered to a student who remembers “there were anomalous pairs” but not which.',
          },
        ],
        correct: 1,
        solution: 'Tellurium (≈ 128) is heavier than iodine (≈ 127), yet I sits after Te to keep iodine with the halogens — resolved cleanly by atomic number (<i>Z</i><sub>Te</sub> = 52 < <i>Z</i><sub>I</sub> = 53).',
      },
      {
        t: 'mcq',
        q: 'The IUPAC name for the element with <i>Z</i> = 105 is:',
        opts: [
          { label: 'unnilpentium', nudge: null },
          {
            label: 'unununium',
            nudge: '<b>(b)</b> unununium corresponds to 111 (1-1-1) — a slip from mis-reading the digits.',
          },
          { label: 'unbipentium', nudge: '<b>(c)</b> unbipentium would be 125 (1-2-5) — wrong middle digit.' },
          {
            label: 'pentnilnilium',
            nudge: '<b>(d)</b> pentnilnilium encodes 500, not 105; the roots must follow the digits left to right.',
          },
        ],
        correct: 0,
        solution: '105 → 1, 0, 5 → un-nil-pent + -ium = <b>unnilpentium</b> (symbol Unp).',
      },
      {
        t: 'mcq',
        q: 'Newlands’ Law of Octaves failed primarily because:',
        opts: [
          {
            label: 'it was based on atomic number',
            nudge: '<b>(a)</b> is false — octaves used atomic weight; this distractor swaps in the modern basis.',
          },
          { label: 'the pattern broke down for heavier elements / after calcium', nudge: null },
          {
            label: 'noble gases disturbed it',
            nudge: '<b>(c)</b> noble gases were undiscovered in Newlands’ time, so they could not have “disturbed” his scheme — a plausible-sounding but anachronistic trap.',
          },
          {
            label: 'it ignored isotopes',
            nudge: '<b>(d)</b> isotopes are irrelevant to the octave breakdown; offered to students reaching for any “missing concept.”',
          },
        ],
        correct: 1,
        solution: 'The eighth-element repetition held only for the lightest elements and collapsed beyond calcium.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the two laws’ basis.</b> The single most-penalised error: writing “atomic number” for Mendeleev or “atomic weight” for the modern law. Lock it: <b>Mendeleev = weight, Modern (Moseley) = number.</b>',
          '<b>Treating triads/octaves as universal.</b> They are historical clues with narrow validity — octaves die after calcium, and many trios are not triads. Examiners trap this constantly.',
          '<b>Nomenclature root slips.</b> Forgetting the trailing <b>-ium</b>, or confusing quad (4) with similar-sounding roots, or reversing digit order. Always read <i>Z</i> left-to-right, root-by-root.',
          '<b>Calling anomalous pairs “Mendeleev’s mistakes.”</b> They are not errors — they are evidence that atomic weight was the wrong variable. The neutron count (isotopes) explains the heavier-but-earlier ordering.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any “who proposed what” MCQ, memorise the chronology as a single chain — <b>Döbereiner</b> → <b>de Chancourtois</b> → <b>Newlands</b> → <b>Lothar Meyer</b> → <b>Mendeleev</b> → <b>Moseley</b> — and attach one keyword to each (triads → helix → octaves → curve → gaps & weight → number). Most NEET/Board one-markers are answered straight off this chain, no reasoning needed. For nomenclature, sanity-check your symbol length: a three-digit <i>Z</i> always gives a <b>three-letter</b> symbol.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Mendeleev’s Law',
            note: 'properties are a periodic function of <b>atomic weight</b>. <b>Modern Law (Moseley):</b> periodic function of <b>atomic number</b> <i>Z</i>.',
          },
          {
            f: 'Early clues (and their limits)',
            note: 'Döbereiner triads (middle ≈ mean of extremes); Newlands octaves (every 8th repeats — <b>fails after Ca</b>); de Chancourtois telluric helix; Lothar Meyer atomic-volume curve.',
          },
          { f: 'Triad rule', note: '<i>A</i><sub>middle</sub> ≈ (<i>A</i><sub>first</sub> + <i>A</i><sub>last</sub>)/2.' },
          {
            f: 'Mendeleev’s strengths',
            note: 'predicted eka-elements (Ga, Ge) via gaps; corrected wrong atomic masses (e.g., beryllium). <b>Weaknesses:</b> anomalous pairs (<b>Ar/K, Te/I, Co/Ni</b>), uncertain H position, no separate place for isotopes, lanthanides/actinides cramped.',
          },
          {
            f: 'Long form',
            note: '7 periods, 18 groups (IUPAC 1–18); period = highest <i>n</i>; group = valence-shell configuration. Recurrence numbers <b>2, 8, 8, 18, 18, 32, 32</b>.',
          },
          {
            f: 'Naming <i>Z</i> > 100',
            note: 'nil-un-bi-tri-<b>quad</b>-pent-hex-sept-oct-enn, end in <b>-ium</b>; symbol = first letters. (e.g., 124 → unbiquadium, Ubq.)',
          },
        ],
        aids: [
          '<b>Mnemonic for the chronology:</b> “Dogs Chew Nice Leather Mats, Moseley.” (Döbereiner, de Chancourtois, Newlands, Lothar Meyer, Mendeleev, Moseley.)',
          '<b>Mnemonic for the three classic anomalous pairs:</b> “Argon’s King, Telling India, Cobalt’s Nice” → <b>Ar–K, Te–I, Co–Ni.</b>',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 127–134 ─────────────────────────
  {
    n: '02',
    title: 'Periodic Trends in Physical Properties',
    kalam: 'Remarkably, almost every physical trend in the table is the tug-of-war between just two opposing forces.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The most heavily examined part of this chapter. CBSE Boards reliably ask 2–3 marks on ordering atomic/ionic radii or explaining an anomaly. NEET asks 1–2 MCQs almost every year (isoelectronic ordering, IE/EGE anomalies). JEE Main loves multi-step questions that read successive ionisation energies to deduce a group, or combine size with electronegativity. JEE Advanced probes the reasoning behind the two famous reversals (Be>B, N>O) and the d-/f-screening anomalies.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we settled what organises the table: the atomic number <i>Z</i>. This topic answers the next, more useful question — <b>once an element has its seat, can we predict how big it is, how tightly it grips its electrons, and how greedily it pulls on a shared pair?</b> Remarkably, almost every physical trend in the table is the tug-of-war between just two opposing forces.',
      },
      {
        t: 'p',
        html: 'Picture a crowded local train compartment with a single ticket-checker (the nucleus) standing at the door. The ticket-checker’s authority is the <b>nuclear charge</b>. The passengers nearest the door (valence electrons) feel that authority strongly. But the passengers packed between the checker and the door (the inner-shell electrons) block his line of sight and water down his authority — this is the <b>shielding (screening) effect</b>. What a valence electron actually feels is not the full nuclear charge but a reduced, net pull called the <b>effective nuclear charge</b>, <i>Z</i><sub>eff</sub>.',
      },
      {
        t: 'formula',
        kicker: 'Effective nuclear charge',
        main: '<i>Z</i><sub>eff</sub> = <i>Z</i> − <i>σ</i>',
        legend: ['<i>σ</i> = the screening contributed by inner electrons'],
        note: null,
      },
      {
        t: 'p',
        html: 'Hold onto this single quantity — it is the engine under the bonnet of every trend that follows.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine you are buying vegetables at a busy Indian mandi. Walk across one row of stalls (a <b>period</b>): you keep adding both a vendor and a customer at the same counter — protons in the nucleus and electrons in the same outer shell. The new electrons are poor at shielding each other, so the nucleus’s grip (<i>Z</i><sub>eff</sub>) tightens with every step. The “cloud” of shoppers is pulled in tighter — <b>atoms shrink across a period.</b> Now walk down the market to the next floor (a <b>group</b>): an entirely new shell of stalls opens up, farther from the nucleus, with a thick wall of inner shoppers shielding it. Distance and shielding win — <b>atoms grow down a group.</b>',
      },
      {
        t: 'p',
        html: 'From that one picture, the rest cascades:<br>• A smaller atom holds its outer electron more tightly → <b>harder to remove</b> (higher ionisation enthalpy) and <b>more eager to grab</b> an extra one (more negative electron gain enthalpy, higher electronegativity).<br>• A bigger atom does the opposite.',
      },
      {
        t: 'p',
        html: 'So across a period: size ↓, <i>Z</i><sub>eff</sub> ↑, IE ↑, EGE more negative, EN ↑. Down a group: size ↑, IE ↓, EGE less negative, EN ↓.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• These are general trends for the <b>representative (s- and p-block) elements</b>. The d- and f-block elements behave differently — across a transition series, added d-electrons shield almost as fast as the nuclear charge grows, so their radii barely change. (That story belongs to Class 12; here it is only a forward-reference.)<br>• “Bigger atom” reasoning has famous <b>exceptions</b> wherever a particularly stable sub-shell (fully filled or exactly half-filled) gets in the way — these are not failures of the theory but its finest predictions (Trend logic and reasoning framework).<br>• Noble-gas radii cannot be compared on the same footing: with no bonds, their size is a van der Waals radius, which is inherently larger than a covalent radius. Comparing them directly to neighbours is an apples-to-oranges trap.',
      },

      { t: 'part', title: 'Key definitions, trends and data tables' },
      {
        t: 'p',
        html: '<b>Atomic radius.</b> An atom has no hard boundary (the electron cloud fades gradually), so we measure it operationally in three ways:<br>• <b>Covalent radius</b> — half the internuclear distance between two like atoms joined by a single covalent bond. For a homonuclear molecule <i>A</i><sub>2</sub>: <i>r</i><sub>cov</sub> = ½<i>d</i><sub><i>A</i>–<i>A</i></sub>.<br>• <b>Van der Waals radius</b> — half the distance between the nuclei of two non-bonded atoms of adjacent molecules (used for noble gases). Always the largest: <i>r</i><sub>vdW</sub> > <i>r</i><sub>metallic</sub> > <i>r</i><sub>cov</sub>.<br>• <b>Metallic radius</b> — half the internuclear distance between adjacent atoms in a metallic crystal.',
      },
      { t: 'p', html: 'Units: picometres (pm) or ångström (1 Å = 100 pm).' },
      { t: 'p', html: 'Canonical data (atomic radii / pm; metallic for Group 1, else covalent):' },
      {
        t: 'table',
        title: null,
        head: ['Period 2', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F'],
        rows: [['radius', '152', '111', '88', '77', '74', '66', '64']],
      },
      {
        t: 'table',
        title: null,
        head: ['Group 1', 'Li', 'Na', 'K', 'Rb', 'Cs'],
        rows: [['radius', '152', '186', '231', '244', '262']],
      },
      { t: 'p', html: '(Decrease across the period; increase down the group — exactly as the engine predicts.)' },
      {
        t: 'p',
        html: '<b>Ionic radius.</b> The effective size of an ion in a crystal.<br>• <b>Cation < parent atom</b> (lost electrons, often a whole shell; same <i>Z</i> now grips fewer electrons → contraction). e.g. <i>r</i><sub>Na</sub> = 186 pm vs <i>r</i><sub>Na⁺</sub> = 95 pm.<br>• <b>Anion > parent atom</b> (added electrons increase repulsion, <i>Z</i><sub>eff</sub> per electron drops → expansion). e.g. <i>r</i><sub>F</sub> = 64 pm vs <i>r</i><sub>F⁻</sub> = 136 pm.<br>• <b>Isoelectronic species</b> — atoms/ions with the same electron count; among them, radius decreases as nuclear charge <i>Z</i> increases.',
      },
      {
        t: 'formula',
        kicker: 'Ionisation enthalpy (Δ<sub>i</sub><i>H</i>)',
        main: 'The energy required to remove the most loosely held electron from one mole of isolated gaseous atoms:<br><i>X</i>(g) → <i>X</i><sup>+</sup>(g) + e<sup>−</sup> Δ<sub>i</sub><i>H</i><sub>1</sub><br><i>X</i><sup>+</sup>(g) → <i>X</i><sup>2+</sup>(g) + e<sup>−</sup> Δ<sub>i</sub><i>H</i><sub>2</sub>',
        legend: [],
        note: 'Always <b>positive</b> (endothermic). Successive values rise sharply: Δ<sub>i</sub><i>H</i><sub>1</sub> < Δ<sub>i</sub><i>H</i><sub>2</sub> < Δ<sub>i</sub><i>H</i><sub>3</sub> …, because each electron is pulled from an increasingly positive ion. Units: kJ mol<sup>−1</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Electron gain enthalpy (Δ<sub>eg</sub><i>H</i>)',
        main: 'The enthalpy change when one mole of isolated gaseous atoms each gain an electron:<br><i>X</i>(g) + e<sup>−</sup> → <i>X</i><sup>−</sup>(g) Δ<sub>eg</sub><i>H</i>',
        legend: [],
        note: 'Usually <b>negative</b> (energy released); more negative = stronger pull. Units: kJ mol<sup>−1</sup>.',
      },
      {
        t: 'p',
        html: '<b>Electronegativity (<i>χ</i>).</b> The tendency of a bonded atom to attract the shared electron pair towards itself. It is <b>dimensionless</b> (a relative number, not measurable directly). Three common scales:<br>• <b>Pauling scale</b> (most used): <i>χ</i><sub>F</sub> = 4.0 assigned as the maximum; derived from bond energies.',
      },
      {
        t: 'formula',
        kicker: 'Mulliken scale',
        main: '<i>χ</i><sub>M</sub> = (IE + EA)/2<br>Mulliken values run ≈ 2.8× the Pauling values, so:<br><i>χ</i><sub>P</sub> ≈ <i>χ</i><sub>M</sub>/2.8',
        legend: [
          '<i>χ</i><sub>M</sub> = the average of ionisation energy (IE) and electron affinity (EA), both in eV',
          '<i>χ</i><sub>P</sub> = the Pauling value',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Allred–Rochow scale',
        main: '<i>χ</i><sub>AR</sub> = 0.359<i>Z</i><sub>eff</sub>/<i>r</i><sup>2</sup> + 0.744',
        legend: ['<i>r</i> = the covalent radius in Å', '<i>Z</i><sub>eff</sub> = effective nuclear charge'],
        note: 'Treating EN as the electrostatic force on a peripheral electron.',
      },
      {
        t: 'p',
        html: 'Canonical data (Pauling electronegativity): F 4.0, O 3.5, N 3.0, C 2.5 across period 2; down group 1: Li 1.0, Na 0.9, K 0.8, Cs 0.7. Fluorine is highest; caesium lowest (excluding radioactive francium). Noble-gas EN is effectively zero.',
      },
      {
        t: 'p',
        html: '<b>Quantities that carry no unit:</b> electronegativity and metallic character. <b>Quantities with units (kJ mol<sup>−1</sup>):</b> ionisation enthalpy and electron gain enthalpy.',
      },

      { t: 'part', title: 'Trend logic and reasoning framework' },
      {
        t: 'p',
        html: '(No formal derivation exists; what examiners reward is the chain of physical reasoning behind each trend and each exception.)',
      },
      {
        t: 'p',
        html: '<b>3.1 — Why size falls across a period and rises down a group</b><br>Across a period, each added electron enters the <b>same</b> shell and shields poorly, so <i>Z</i><sub>eff</sub> climbs steadily and pulls the cloud inward → radius ↓. Down a group, every step adds a <b>new</b> principal shell at greater distance, plus a thick inner-electron screen, so distance and shielding dominate the rising <i>Z</i> → radius ↑.',
      },
      {
        t: 'p',
        html: '<b>3.2 — Why cations shrink and anions swell; ordering isoelectronic species</b><br>Removing an electron (especially a whole outer shell) leaves the same nuclear charge gripping fewer electrons → contraction (cation smaller). Adding an electron raises mutual repulsion and lowers <i>Z</i><sub>eff</sub> per electron → expansion (anion larger). For an <b>isoelectronic</b> set (same electron count), the only variable left is <i>Z</i>: the higher the nuclear charge, the tighter the same cloud is held, so radius falls as <i>Z</i> rises.',
      },
      {
        t: 'p',
        html: '<b>3.3 — Ionisation enthalpy: the trend and its two celebrated reversals</b><br>Across a period IE generally ↑ (smaller size, higher <i>Z</i><sub>eff</sub>, tighter grip); down a group IE ↓ (bigger size, more shielding). Two reversals in period 2 are favourite exam material:<br>• <b>Be > B</b> (Δ<sub>i</sub><i>H</i>): boron’s outgoing electron sits in a higher-energy 2p orbital, while beryllium’s is in a fully filled, stable 2s<sup>2</sup>. The extra stability of 2s<sup>2</sup> makes beryllium’s electron harder to remove than boron’s.<br>• <b>N > O</b> (Δ<sub>i</sub><i>H</i>): nitrogen has an exactly half-filled 2p<sup>3</sup> set — a specially stable, symmetric, low-repulsion arrangement. Oxygen’s 2p<sup>4</sup> forces a fourth electron to pair up in an already-occupied orbital, raising repulsion and making it easier to remove. So removing oxygen’s electron costs less than removing nitrogen’s.',
      },
      {
        t: 'p',
        html: 'A big jump between successive ionisation energies (Δ<sub>i</sub><i>H</i><sub><i>n</i></sub> ≪ Δ<sub>i</sub><i>H</i><sub><i>n</i>+1</sub>) signals that the (<i>n</i>+1)-th electron is being torn from a stable noble-gas-like core — the number of “easy” electrons before the jump equals the number of <b>valence electrons</b>, hence the <b>group</b>.',
      },
      {
        t: 'p',
        html: '<b>3.4 — Electron gain enthalpy: the trend and the F < Cl surprise</b><br>Across a period EGE becomes more negative (smaller atoms pull an incoming electron harder); down a group it becomes less negative (the new electron lands farther out). The exception: <b>chlorine releases more energy than fluorine</b> on gaining an electron. Fluorine is so small that its 2p sub-shell is already cramped; an incoming electron faces fierce electron–electron repulsion in that tight <i>n</i> = 2 shell. Chlorine’s <i>n</i> = 3 shell is roomier, repulsion is milder, so Δ<sub>eg</sub><i>H</i><sub>Cl</sub> is more negative than Δ<sub>eg</sub><i>H</i><sub>F</sub>.',
      },
      {
        t: 'p',
        html: '<b>3.5 — Electronegativity logic and the scales</b><br>EN tracks the same engine: small size + high <i>Z</i><sub>eff</sub> ⇒ strong pull on shared electrons ⇒ high EN. Hence EN ↑ across a period, ↓ down a group, mirroring IE. The three scales differ in how they put a number on this pull — bond energies (Pauling), the average of IE and EA (Mulliken), or the electrostatic force at the covalent radius (Allred–Rochow) — but they agree on the trend and rank fluorine highest. (Advanced note: EN also rises with greater s-character of hybridisation, sp > sp<sup>2</sup> > sp<sup>3</sup>, and with higher oxidation state of the same element.)',
      },
      {
        t: 'p',
        html: '<b>3.6 — The d- and f-screening anomaly (Ga < Al, In ≈ Tl)</b><br>Going down group 13, you would expect each element to be larger. Yet <b>gallium is slightly smaller than aluminium</b>. Between them sit ten 3d electrons (first appearing after Al) that screen poorly; the extra nuclear charge is incompletely cancelled, contracting gallium. The same poor screening by d- (and later f-) electrons makes the group-13 ionisation energies fall irregularly rather than smoothly, giving the well-known order B > Tl > Ga ≥ Al > In.',
      },
      { t: 'fig', id: 'c11-03-fig-3.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Arrange the following isoelectronic species in increasing order of ionic radius, giving reasons: Al<sup>3+</sup>, Mg<sup>2+</sup>, Na<sup>+</sup>, F<sup>−</sup>, O<sup>2−</sup>.',
        steps: [
          'Each species has 10 electrons (isoelectronic, neon-like). For an isoelectronic set, radius <b>decreases as nuclear charge <i>Z</i> increases</b>. List nuclear charges: O<sup>2−</sup> (<i>Z</i> = 8) < F<sup>−</sup> (9) < Na<sup>+</sup> (11) < Mg<sup>2+</sup> (12) < Al<sup>3+</sup> (13). Higher <i>Z</i> pulls the same 10 electrons in tighter, so the smallest is the one with the largest <i>Z</i>.',
        ],
        ans: 'Increasing radius: Al<sup>3+</sup> < Mg<sup>2+</sup> < Na<sup>+</sup> < F<sup>−</sup> < O<sup>2−</sup>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of the following has the <b>most negative</b> electron gain enthalpy? S, Cl, F, P.',
        steps: [
          '<b>Speed approach.</b> The instinct “topmost halogen = most negative” picks F — and that is the trap.<br>• Move across period 3 (P → S → Cl): EGE grows more negative, so Cl beats S beats P.<br>• Now Cl vs F: F is anomalously less negative than Cl because of severe electron–electron repulsion in its tiny 2p shell. So the winner is <b>chlorine</b>, not fluorine.',
          'The single most-tested EGE fact in NEET — whenever F and Cl both appear, suspect the anomaly before answering.',
        ],
        ans: 'Cl.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept: successive IE + electronic configuration',
        q: 'The first four ionisation enthalpies of a gaseous element Q (in kJ mol<sup>−1</sup>) are 736, 1448, 7720, 10560. (a) How many valence electrons does Q have? (b) To which group does it belong, and what is the general valence-shell configuration? (c) Predict the formula of its most stable oxide.',
        steps: [
          '<b>(a)</b> Inspect the jumps: Δ<sub>i</sub><i>H</i><sub>1</sub> → Δ<sub>i</sub><i>H</i><sub>2</sub> rises modestly (736 → 1448), but Δ<sub>i</sub><i>H</i><sub>2</sub> → Δ<sub>i</sub><i>H</i><sub>3</sub> leaps more than fivefold (1448 → 7720). The huge jump after the <b>second</b> electron means the third comes from a stable noble-gas core. Hence Q has <b>2 valence electrons</b>.',
          '<b>(b)</b> Two easily removed electrons ⇒ <b>Group 2</b> (alkaline earth metals), valence configuration <i>n</i>s<sup>2</sup>.',
          '<b>(c)</b> A group-2 element forms a +2 ion and combines with O<sup>2−</sup> in a 1 ∶ 1 ratio ⇒ oxide formula <b>QO</b>.',
          'This stitches two skills: reading the IE “jump” (trend) and translating it into electron configuration and chemistry (classification).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The experimentally observed order of first ionisation enthalpy in period 2 is<br>Li < B < Be < C < O < N < F < Ne.<br>(a) Identify the two places where the order reverses the simple “increase across a period” rule, and explain each. (b) Hence predict, with reasoning, whether an analogous reversal between aluminium and magnesium, and between sulphur and phosphorus, should appear in period 3.',
        steps: [
          '<b>(a)</b> Two reversals:<br>• <b>Be > B:</b> beryllium’s electron leaves a filled 2s<sup>2</sup> sub-shell (extra stability), whereas boron’s leaves a higher-energy, less-stable 2p<sup>1</sup>. So removing boron’s electron costs less — Δ<sub>i</sub><i>H</i><sub>B</sub> < Δ<sub>i</sub><i>H</i><sub>Be</sub>, against the naïve trend.<br>• <b>N > O:</b> nitrogen’s 2p<sup>3</sup> is exactly half-filled (symmetric, low pairing repulsion, extra-stable). Oxygen’s 2p<sup>4</sup> has one paired electron experiencing extra repulsion, so it is removed more easily — Δ<sub>i</sub><i>H</i><sub>O</sub> < Δ<sub>i</sub><i>H</i><sub>N</sub>.',
          '<b>(b)</b> Both reversals are caused by the <b>filled-</b> and <b>half-filled-subshell stability</b> that recurs in every period.<br>• Period 3 repeats the <i>n</i>s<sup>2</sup> vs <i>n</i>p<sup>1</sup> situation at <b>Mg (3s<sup>2</sup>) vs Al (3p<sup>1</sup>)</b> ⇒ expect Δ<sub>i</sub><i>H</i><sub>Mg</sub> > Δ<sub>i</sub><i>H</i><sub>Al</sub> (a Be–B-type reversal). ✓ (Observed.)<br>• Period 3 repeats the half-filled <i>n</i>p<sup>3</sup> situation at <b>P (3p<sup>3</sup>) vs S (3p<sup>4</sup>)</b> ⇒ expect Δ<sub>i</sub><i>H</i><sub>P</sub> > Δ<sub>i</sub><i>H</i><sub>S</sub> (an N–O-type reversal). ✓ (Observed.)',
          'The reasoning generalises: wherever a period crosses from a filled s to a p<sup>1</sup>, or from a half-filled p<sup>3</sup> to a p<sup>4</sup>, the IE dips against the trend — a structural prediction, not a coincidence.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define ionisation enthalpy. Why is the second ionisation enthalpy of an element always greater than its first?',
            a: 'Energy to remove the most loosely held electron from an isolated gaseous atom; the second removal is from a positively charged ion (smaller, higher <i>Z</i><sub>eff</sub>), so it needs more energy.',
          },
          {
            q: '[NEET] Among N<sup>3−</sup>, O<sup>2−</sup>, F<sup>−</sup> and Na<sup>+</sup>, which has the largest ionic radius?',
            a: 'N<sup>3−</sup> (lowest nuclear charge <i>Z</i> = 7 among the isoelectronic, 10-electron set).',
          },
          {
            q: '[JEE Main] Explain why the atomic radius of gallium is slightly smaller than that of aluminium, even though gallium lies below aluminium in group 13.',
            a: 'The intervening 3d<sup>10</sup> electrons screen poorly, so <i>Z</i><sub>eff</sub> on gallium’s valence electrons is higher than expected, contracting it below aluminium.',
          },
          {
            q: '[JEE Main] The first ionisation enthalpies (in kJ mol<sup>−1</sup>) of five consecutive period-2 elements are 801, 1086, 1402, 1314, 1681. Identify which value corresponds to nitrogen and which to oxygen, and justify the apparent dip.',
            a: '1402 → nitrogen (half-filled 2p<sup>3</sup> stability), 1314 → oxygen; oxygen’s 2p<sup>4</sup> has added pairing repulsion, so its IE dips below nitrogen’s.',
          },
          {
            q: '[JEE Advanced] An atom A has ionisation energy 9.8 eV and electron affinity 1.8 eV; atom B has ionisation energy 11.2 eV and electron affinity 3.4 eV. Using the Mulliken scale, determine which atom is more electronegative and convert both values to the approximate Pauling scale.',
            a: '<i>χ</i><sub>M</sub>(A) = (9.8 + 1.8)/2 = 5.8 eV; <i>χ</i><sub>M</sub>(B) = (11.2 + 3.4)/2 = 7.3 eV → <b>B more electronegative</b>.<br>Pauling: <i>χ</i><sub>P</sub>(A) ≈ 5.8/2.8 ≈ 2.1; <i>χ</i><sub>P</sub>(B) ≈ 7.3/2.8 ≈ 2.6.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The correct order of increasing ionic radius is:',
        opts: [
          { label: 'Al<sup>3+</sup> < Mg<sup>2+</sup> < Na<sup>+</sup> < F<sup>−</sup>', nudge: null },
          {
            label: 'F<sup>−</sup> < Na<sup>+</sup> < Mg<sup>2+</sup> < Al<sup>3+</sup>',
            nudge: '<b>(b)</b> is the exact reverse — chosen by students who think “more positive charge = bigger.”',
          },
          {
            label: 'Na<sup>+</sup> < F<sup>−</sup> < Al<sup>3+</sup> < Mg<sup>2+</sup>',
            nudge: '<b>(c), (d)</b> scramble the order, typically by ranking on ionic charge magnitude rather than nuclear charge.',
          },
          {
            label: 'Mg<sup>2+</sup> < Al<sup>3+</sup> < F<sup>−</sup> < Na<sup>+</sup>',
            nudge: '<b>(c), (d)</b> scramble the order, typically by ranking on ionic charge magnitude rather than nuclear charge.',
          },
        ],
        correct: 0,
        solution: 'All four are isoelectronic (10 e<sup>−</sup>); radius falls as <i>Z</i> rises, so the most highly charged cation is smallest.',
      },
      {
        t: 'mcq',
        q: 'Which property has <b>no unit</b>?',
        opts: [
          {
            label: 'Ionisation enthalpy',
            nudge: '<b>(a), (b), (d)</b> are all energies measured in kJ mol<sup>−1</sup> — picked by students who conflate electronegativity (a tendency in a bond) with electron gain enthalpy (a measurable energy).',
          },
          {
            label: 'Electron gain enthalpy',
            nudge: '<b>(a), (b), (d)</b> are all energies measured in kJ mol<sup>−1</sup> — picked by students who conflate electronegativity (a tendency in a bond) with electron gain enthalpy (a measurable energy).',
          },
          { label: 'Electronegativity', nudge: null },
          {
            label: 'Lattice enthalpy',
            nudge: '<b>(a), (b), (d)</b> are all energies measured in kJ mol<sup>−1</sup> — picked by students who conflate electronegativity (a tendency in a bond) with electron gain enthalpy (a measurable energy).',
          },
        ],
        correct: 2,
        solution: 'Electronegativity is a relative, dimensionless number.',
      },
      {
        t: 'mcq',
        q: 'The first ionisation enthalpy of nitrogen is greater than that of oxygen because:',
        opts: [
          {
            label: 'nitrogen is larger than oxygen',
            nudge: '<b>(a)</b> is true as a fact (nitrogen is slightly larger) but cannot explain a higher IE; a larger atom would lose its electron more easily; the option is a trap.',
          },
          { label: 'nitrogen has a stable, exactly half-filled 2p<sup>3</sup> configuration', nudge: null },
          {
            label: 'oxygen has higher nuclear charge so its electron is harder to remove',
            nudge: '<b>(c)</b> correctly notes oxygen’s higher <i>Z</i> but draws the wrong conclusion (that would make oxygen’s IE higher, not lower).',
          },
          {
            label: 'nitrogen is more electronegative than oxygen',
            nudge: '<b>(d)</b> is false — oxygen is more electronegative; this swaps the two anomaly facts.',
          },
        ],
        correct: 1,
        solution: 'The symmetric half-filled 2p<sup>3</sup> is extra-stable, so removing nitrogen’s electron costs more.',
      },
      {
        t: 'mcq',
        q: 'Going down group 13 (B → Al → Ga → In → Tl), the first ionisation enthalpy does <b>not</b> decrease smoothly. The anomalously small Al → Ga change is mainly due to:',
        opts: [
          {
            label: 'increase in atomic size',
            nudge: '<b>(a)</b> is the naïve “bigger = lower IE” answer that ignores the screening break.',
          },
          { label: 'poor shielding by the intervening 3d<sup>10</sup> electrons', nudge: null },
          {
            label: 'the inert pair effect',
            nudge: '<b>(c)</b> inert pair effect explains +1 vs +3 stability lower in the group, not the Al/Ga IE step.',
          },
          {
            label: 'lanthanoid contraction',
            nudge: '<b>(d)</b> lanthanoid contraction acts between the 4f and later elements (e.g. In/Tl region), not at Al/Ga — a tempting but misplaced cause.',
          },
        ],
        correct: 1,
        solution: 'The 3d<sup>10</sup> electrons (new between Al and Ga) screen weakly, so <i>Z</i><sub>eff</sub> on gallium’s valence electrons stays high, keeping its IE from falling as expected.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Ordering isoelectronic species the wrong way.</b> With equal electrons, only nuclear charge matters — bigger <i>Z</i> ⇒ smaller ion. Do not order by group position or by charge sign.',
          '<b>Assuming fluorine has the most negative electron gain enthalpy.</b> It is <b>chlorine</b> — F’s tiny 2p shell over-repels the incoming electron. Whenever F and Cl both appear, check for this.',
          '<b>Forgetting the two IE reversals.</b> “IE always increases across a period” is wrong at filled-s (Be, Mg) and half-filled-p (N, P) points. Examiners target exactly these.',
          '<b>Mixing up units.</b> Electronegativity and metallic character are unitless; ionisation and electron gain enthalpies are in kJ mol<sup>−1</sup>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Reduce the whole topic to one master arrow — <b>across a period, <i>Z</i><sub>eff</sub> ↑ and size ↓</b>; everything else (IE ↑, EGE more −ve, EN ↑) follows the same direction, and down a group it all reverses. Then memorise just the four “exception flags”: <b>Be/Mg, N/P</b> (IE peaks), <b>F vs Cl</b> (EGE), <b>Ga < Al</b> (size/IE). If not flagged, trust the master arrow and move on — no calculation needed. For successive-IE questions, find the <b>biggest ratio jump</b>; the count of electrons before it is the group number.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Master engine',
            note: '<i>Z</i><sub>eff</sub> = <i>Z</i> − <i>σ</i>. Across a period <i>Z</i><sub>eff</sub> ↑ ⇒ size ↓, IE ↑, EGE more −ve, EN ↑. Down a group it all reverses.',
          },
          {
            f: 'Radius order',
            note: '<i>r</i><sub>vdW</sub> > <i>r</i><sub>metallic</sub> > <i>r</i><sub>cov</sub>; covalent radius = ½<i>d</i><sub><i>A</i>–<i>A</i></sub>.',
          },
          { f: 'Ions', note: 'cation < parent; anion > parent. Isoelectronic ⇒ higher <i>Z</i> = smaller.' },
          {
            f: 'IE',
            note: '<i>X</i>(g) → <i>X</i><sup>+</sup>(g) + e<sup>−</sup>, always +ve, Δ<sub>i</sub><i>H</i><sub>1</sub> < Δ<sub>i</sub><i>H</i><sub>2</sub> < …; reversals at <b>Be>B, N>O</b> (and Mg>Al, P>S).',
          },
          { f: 'EGE', note: 'more −ve across a period; <b>Cl more −ve than F</b> (small-shell repulsion).' },
          {
            f: 'EN (dimensionless)',
            note: 'Pauling (<i>χ</i><sub>F</sub> = 4.0), Mulliken <i>χ</i><sub>M</sub> = (IE + EA)/2 (≈2.8× Pauling), Allred–Rochow <i>χ</i><sub>AR</sub> = 0.359<i>Z</i><sub>eff</sub>/<i>r</i><sup>2</sup> + 0.744. Highest F, lowest Cs.',
          },
          { f: 'Units', note: 'EN & metallic character → none; IE & EGE → kJ mol<sup>−1</sup>.' },
        ],
        aids: [
          '<b>Mnemonic for the IE anomalies:</b> “Be Nice, Phosphorus Magnifies” → the highs sit at <b>Be, N</b> (period 2) and <b>Mg, P</b> (period 3).',
          '<b>Mnemonic for EGE:</b> “Cl out-grabs F” — chlorine’s electron gain enthalpy is more negative than fluorine’s.',
        ],
      },
    ],
  },
];
