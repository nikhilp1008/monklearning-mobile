import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 01 to 04: pp. 8–31 of the Class 11 Chemistry Master
 * Reference, word for word. The chapter’s title page (p. 7) and contents (top
 * of p. 8) are not copied. Topic 01, Nature of Matter (pp. 8–14), Topic 02,
 * Measurement & SI Units (pp. 15–19), Topic 03, Uncertainty in Measurement &
 * Significant Figures (pp. 20–24), and Topic 04, Laws of Chemical Combination
 * & Atomic Theory (pp. 25–31), are each split at their Sections 1 to 8.
 * Figure 1.1 (caption p. 10, after Section 2 of Topic 01; drawn on the
 * “Chapter 1 · Figures” page, p. 11) is redrawn in
 * lib/diagrams/chemistry-11-01.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 8–14 ─────────────────────────
  {
    n: '01',
    title: 'Nature of Matter',
    kalam: 'A pure substance has a fixed composition throughout and cannot be separated into other substances by physical means.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The conceptual gateway to all of chemistry. CBSE Boards reliably ask a 1–2 mark “classify as element/compound/mixture” or “physical vs chemical change” question. NEET and JEE rarely test it directly, but every later topic silently assumes it — you cannot reason about formulae or reactions without first knowing what kind of matter you are holding.',
      },
      {
        t: 'p',
        html: 'Look around you right now. The phone in your hand, the air you are breathing, the glass of water on the table — every one of them is <b>matter</b>: anything that has mass and occupies space. Chemistry begins by sorting this endless variety into a few clean categories, because once you know what kind of matter something is, you immediately know how it will behave.',
      },
      {
        t: 'p',
        html: 'The first sorting is by <b>physical state</b>. Matter exists as <b>solid</b> (particles packed tightly in fixed positions — a piece of chalk holds its shape), <b>liquid</b> (particles close but free to slide — water takes the shape of its container), or <b>gas</b> (particles far apart and moving freely — LPG fills the whole cylinder). The same substance can move between states by changing temperature or pressure: ice → water → steam is one substance wearing three different “costumes.”',
      },
      {
        t: 'p',
        html: 'What actually distinguishes the states is the balance between two things: how strongly the particles attract one another, and how much thermal energy they have to move about. In a solid, attractions win — particles only vibrate in place, so a solid has fixed shape and fixed volume. In a liquid, the two are comparable — particles stay close but flow past one another, giving fixed volume but no fixed shape. In a gas, thermal motion dominates — particles fly apart and fill any container, so a gas has neither fixed shape nor fixed volume and is easily compressed. Heating supplies energy that loosens the attractions, which is why warming pushes matter solid → liquid → gas.',
      },
      {
        t: 'p',
        html: 'The second, deeper sorting asks: is this one kind of stuff, or several mixed together?<br>• A <b>pure substance</b> has a fixed composition throughout and cannot be separated into other substances by physical means. Pure substances split further:<br>– An <b>element</b> is made of only one kind of atom — gold (Au), oxygen (O<sub>2</sub>), iron (Fe).<br>– A <b>compound</b> is made of two or more elements chemically combined in a fixed ratio by mass — water (H<sub>2</sub>O), common salt (NaCl), carbon dioxide (CO<sub>2</sub>). (This “fixed ratio by mass” is exactly the law of definite proportions you will meet in Topic 04.)<br>• A <b>mixture</b> contains two or more substances physically blended in any proportion, each keeping its own identity:<br>– A <b>homogeneous</b> mixture is uniform throughout — you cannot see the boundaries. Salt dissolved in water, air, brass.<br>– A <b>heterogeneous</b> mixture has visibly distinct regions — sand and iron filings, oil and water, a fruit salad.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a steel thali. A serving of plain dal is <b>homogeneous</b> — every spoonful tastes the same and you cannot pick out separate ingredients. A plate of chana and puri side by side is <b>heterogeneous</b> — clearly separate things you could physically pull apart. Now contrast both with table salt: salt is a <b>compound</b>, not a mixture, because its sodium and chlorine are chemically bonded in a fixed ratio and no amount of physical sorting (no sieve, no magnet, no filter) can separate them — only a chemical reaction can.',
      },
      {
        t: 'p',
        html: 'Matter is also described by its <b>properties</b>. <b>Physical properties</b> can be observed without changing the substance’s identity — colour, melting point, boiling point, density, solubility. <b>Chemical properties</b> describe how a substance transforms into new substances — combustibility, acidity, reactivity with water. This distinction drives the difference between a <b>physical change</b> (no new substance; melting ice, dissolving sugar, tearing paper — often, though not always, reversible) and a <b>chemical change</b> (a new substance with new properties forms; burning paper, rusting iron, curdling milk — usually not easily reversed).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• “Pure” in chemistry means single substance, not the everyday “clean/unadulterated.” Pure-looking air is actually a homogeneous mixture of gases.<br>• The homogeneous/heterogeneous line depends on scale: milk looks uniform but is a colloid (heterogeneous at the microscopic level).<br>• Dissolving (e.g., salt in water) is a <b>physical</b> change — the salt can be recovered by evaporation — even though it feels like something new was made.',
      },

      { t: 'part', title: 'Key definitions' },
      { t: 'def', term: 'Matter', html: 'anything that has mass and occupies space.' },
      {
        t: 'def',
        term: 'Element',
        html: 'a pure substance made of a single type of atom (cannot be broken down chemically). E.g., Na, O<sub>2</sub>.',
      },
      {
        t: 'def',
        term: 'Compound',
        html: 'a pure substance of two or more elements chemically combined in a fixed mass ratio; separable only by chemical means. E.g., H<sub>2</sub>O.',
      },
      {
        t: 'def',
        term: 'Mixture',
        html: 'two or more substances physically combined in any ratio, each retaining its identity; separable by physical means.',
      },
      { t: 'def', term: 'Homogeneous mixture (solution)', html: 'uniform composition throughout (salt water, air).' },
      { t: 'def', term: 'Heterogeneous mixture', html: 'non-uniform, with visible phases (sand + salt).' },
      {
        t: 'def',
        term: 'Solute / solvent',
        html: 'in a solution, the dissolved substance / the dissolving medium. Solutions need not be liquid: <b>air</b> is a gaseous solution and <b>brass</b> (zinc in copper) is a solid solution, or <b>alloy</b>. The component present in the largest amount is normally called the solvent.',
      },
      { t: 'def', term: 'Physical property', html: 'observable without changing identity (colour, m.p., density).' },
      { t: 'def', term: 'Chemical property', html: 'describes formation of new substances (combustibility).' },
      { t: 'def', term: 'Physical change', html: 'no new substance formed (state change, dissolving).' },
      { t: 'def', term: 'Chemical change', html: 'new substance(s) formed (combustion, rusting).' },
      { t: 'fig', id: 'c11-01-fig-1.1' },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: 'There is no formula here — mastery is a clean classification routine.' },
      {
        t: 'proc',
        title: 'Procedure A — Classify any sample of matter',
        steps: [
          '<b>Is the composition fixed, or can it vary?</b> If it can be mixed in any proportion → <b>mixture</b>; if it is fixed → <b>pure substance</b>. <b>Why:</b> the defining feature of a compound is its fixed mass ratio; mixtures have no such constraint.',
          '<b>(If mixture) Is it uniform throughout?</b> Uniform → <b>homogeneous</b>; visibly distinct regions → <b>heterogeneous</b>.',
          '<b>(If pure) Can it be broken into simpler substances by chemical means?</b> No → <b>element</b>; yes → <b>compound</b>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B — Physical change or chemical change?</b> Ask three questions: Is a new substance with new properties formed? Is it easily reversible? Is there an energy change accompanied by a permanent transformation? A “yes, new substance / no, not reversible” points to a <b>chemical</b> change; “no new substance / yes, reversible” points to a <b>physical</b> change. <b>Why this works:</b> identity is the test — physical changes rearrange the form of the same substance, chemical changes rearrange the atoms into different substances.',
      },
      {
        t: 'p',
        html: '<b>Procedure C — Separating mixtures (and why it proves they are mixtures).</b> Because a mixture’s components keep their own physical properties, those very differences let us separate them: filtration (particle size), evaporation/crystallisation (volatility/solubility), distillation (boiling point), magnetic separation (magnetism), chromatography (adsorption). The fact that physical methods alone work is itself the proof that the sample was a mixture, not a compound.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Classify each of the following as an element, a compound, or a mixture: (i) brass, (ii) ozone (O<sub>3</sub>), (iii) baking soda (NaHCO<sub>3</sub>), (iv) sea water.',
        steps: [
          '(i) <b>Brass</b> — an alloy of copper and zinc, mixed in variable proportion → <b>homogeneous mixture</b>.',
          '(ii) <b>Ozone</b> — a single kind of atom (oxygen) only → <b>element</b>.',
          '(iii) <b>Baking soda</b> — different elements (Na, H, C, O) chemically combined in a fixed ratio → <b>compound</b>.',
          '(iv) <b>Sea water</b> — water with dissolved salts in variable amount, uniform appearance → <b>homogeneous mixture</b>.',
          'The deciding question each time: fixed composition (compound) or variable (mixture); one atom type (element) or many bonded (compound).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of the following is <b>not</b> a mixture?<br>(a) Air (b) Gasoline (c) Diamond (d) Bronze',
        steps: [
          '<b>Fast solution.</b> Diamond is pure carbon — a single element. Air (gases), gasoline (hydrocarbons), and bronze (Cu–Sn alloy) are all mixtures.',
          '<b>The trap:</b> students see “diamond” and “bronze” as both “solid shiny materials” and guess by appearance. <b>Speed tip:</b> ignore looks; ask “how many kinds of substance?” Diamond = one element = not a mixture.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Classify each process as a physical or a chemical change, with a one-line reason: (i) sublimation of camphor, (ii) souring of milk, (iii) dissolving sugar in tea, (iv) digestion of food.',
        steps: [
          '(i) <b>Sublimation of camphor</b> — solid → vapour, same substance → <b>physical</b>.',
          '(ii) <b>Souring of milk</b> — lactose converts to lactic acid, a new substance → <b>chemical</b>.',
          '(iii) <b>Dissolving sugar</b> — sugar can be recovered by evaporation, no new substance → <b>physical</b>.',
          '(iv) <b>Digestion</b> — large molecules broken into new, smaller ones by reactions → <b>chemical</b>.',
          'The discriminator is always: was a new substance formed? State changes and dissolving are physical; anything producing genuinely new compounds is chemical.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A student claims that “dissolving anhydrous copper sulphate in water is a purely physical change, exactly like dissolving common salt.” Critically evaluate this claim.',
        steps: [
          'Dissolving most salts (like NaCl) is physical — the ions disperse and can be fully recovered by evaporation. But anhydrous copper sulphate (CuSO<sub>4</sub>, white) in water turns blue because it forms the <b>hydrated</b> ion [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> (crystallises as CuSO<sub>4</sub>·5H<sub>2</sub>O), a chemically distinct, coloured substance accompanied by a release of heat. So the claim is <b>not fully correct</b>: while the bulk dissolution is physical, the colour change and hydration reveal a genuine chemical interaction (hydration) with the water. The lesson: “dissolving” is usually physical, but the appearance of a new coloured species and an energy change are warning signs that a chemical step is also occurring.',
          'This is the kind of edge case JEE Advanced uses to test whether you apply the “new substance?” criterion rigorously rather than by rote.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Classify as element/compound/mixture: (i) graphite, (ii) ammonia, (iii) milk, (iv) 22-carat gold.',
            a: 'graphite = element; ammonia = compound; milk = mixture (colloid); 22-carat gold = mixture (alloy).',
          },
          {
            q: '[NEET] Which of these is a heterogeneous mixture: sugar solution, brass, muddy water, or air?',
            a: 'Muddy water.',
          },
          {
            q: '[JEE Main] Identify each as physical or chemical change: (i) melting of wax, (ii) burning of wax, (iii) cutting of wood, (iv) photosynthesis.',
            a: '(i) physical, (ii) chemical, (iii) physical, (iv) chemical.',
          },
          {
            q: '[JEE Main] Name the separation technique best suited for: (i) salt from sea water, (ii) iron filings from sand, (iii) two miscible liquids of different boiling points.',
            a: '(i) evaporation/crystallisation, (ii) magnetic separation, (iii) fractional distillation.',
          },
          {
            q: '[JEE Advanced] Explain why the rusting of iron is classified as a chemical change but the magnetisation of an iron nail is a physical change.',
            a: 'Rusting forms a new substance (hydrated iron oxide) with new properties → chemical; magnetisation only aligns existing domains, no new substance, and is reversible → physical.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is a compound?',
        opts: [
          { label: 'Air', nudge: '<b>(a)</b>, <b>(d)</b> are homogeneous mixtures.' },
          { label: 'Brass', nudge: '<b>(b)</b> is an alloy (mixture).' },
          { label: 'Carbon dioxide', nudge: null },
          { label: 'Sea water', nudge: '<b>(a)</b>, <b>(d)</b> are homogeneous mixtures.' },
        ],
        correct: 2,
        solution: 'CO<sub>2</sub> is elements chemically combined in a fixed ratio. The trap is treating any single, uniform-looking substance as “a compound” — uniformity alone does not make a compound; fixed chemical combination does.',
      },
      {
        t: 'mcq',
        q: 'Conversion of water into steam is:',
        opts: [
          { label: 'a chemical change', nudge: '<b>(a)</b>, <b>(d)</b> wrongly assume a new substance.' },
          { label: 'a physical change', nudge: null },
          { label: 'an irreversible change', nudge: '<b>(c)</b> is false since condensation reverses it.' },
          { label: 'a change that forms a new compound', nudge: '<b>(a)</b>, <b>(d)</b> wrongly assume a new substance.' },
        ],
        correct: 1,
        solution: 'Only the physical state changes; the substance is still H<sub>2</sub>O. The trap is equating “dramatic visible change” with “chemical change.”',
      },
      {
        t: 'mcq',
        q: 'Which property is a <b>chemical</b> property of iron?',
        opts: [
          { label: 'Density', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all observable without changing iron’s identity → physical properties.' },
          { label: 'Melting point', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all observable without changing iron’s identity → physical properties.' },
          { label: 'Grey colour', nudge: '<b>(a)</b>, <b>(b)</b>, <b>(c)</b> are all observable without changing iron’s identity → physical properties.' },
          { label: 'Rusting in moist air', nudge: null },
        ],
        correct: 3,
        solution: 'Rusting describes iron forming a new substance — a chemical property.',
      },
      {
        t: 'mcq',
        q: 'A homogeneous mixture differs from a compound in that:',
        opts: [
          { label: 'it has a fixed composition', nudge: '<b>(a)</b> describes a compound, not a mixture.' },
          { label: 'its components can be separated by physical means', nudge: null },
          {
            label: 'it is always a liquid',
            nudge: '<b>(c)</b>, <b>(d)</b> are simply false (air is a gaseous homogeneous mixture; a solution is a homogeneous mixture).',
          },
          {
            label: 'it cannot be a solution',
            nudge: '<b>(c)</b>, <b>(d)</b> are simply false (air is a gaseous homogeneous mixture; a solution is a homogeneous mixture).',
          },
        ],
        correct: 1,
        solution: 'A mixture’s components retain their identities and separate by physical methods; a compound’s do not.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing a homogeneous mixture with a compound.</b> Both look uniform, but a compound has a fixed composition and needs chemical separation; a mixture has variable composition and separates physically.',
          '<b>Classifying by appearance.</b> Diamond and graphite look nothing alike yet are both the element carbon; brass and copper both look metallic yet one is a mixture. Judge by composition, never by looks.',
          '<b>Calling dissolving a chemical change.</b> Dissolving salt or sugar is physical — the solute is recoverable. Watch for genuine exceptions (coloured hydration, gas evolution) that signal chemistry.',
          '<b>Equating “dramatic” with “chemical.”</b> Boiling, sublimation, and shattering are all physical despite looking dramatic. The only test is: was a new substance formed?',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> For any classification question, silently run the two-question filter — “<b>fixed or variable composition?</b>” then “<b>one substance or many?</b>” Those two questions resolve almost every element/compound/mixture item in seconds, with appearance ignored entirely.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Matter = anything that has mass and occupies space; exists as solid / liquid / gas (interconvert by heat/pressure).', note: '' },
          {
            f: 'Pure substance (fixed composition)',
            note: '<b>element</b> (one atom type) or <b>compound</b> (elements bonded in fixed ratio).',
          },
          {
            f: 'Mixture (variable composition)',
            note: '<b>homogeneous</b> (uniform — solutions, air) or <b>heterogeneous</b> (visible phases).',
          },
          { f: 'Physical property/change', note: 'identity unchanged (m.p., density; melting, dissolving).' },
          { f: 'Chemical property/change', note: 'new substance formed (combustibility; rusting, burning).' },
          { f: 'Mixtures separate by physical methods; compounds only by chemical means.', note: '' },
        ],
        aids: [
          '“Fixed or free?” — fixed composition = compound; free proportion = mixture.',
          '“Looks lie” — classify by composition, not appearance (diamond vs brass).',
          '“New substance = chemical” — the one test for change type.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 15–19 ─────────────────────────
  {
    n: '02',
    title: 'Measurement & SI Units',
    kalam: 'Every physical quantity is reported as a number multiplied by a unit: 5 kg, not just “5.”',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Quiet but dependable marks. CBSE Boards set a 1–2 mark temperature-conversion or unit-conversion numerical and expect correct SI usage everywhere. NEET and JEE assume fluent unit handling in every numerical — a dropped prefix or a botched conversion silently sinks otherwise-correct answers. The factor-label method introduced here is a tool you will use in literally every quantitative chapter.',
      },
      {
        t: 'p',
        html: 'Imagine telling a shopkeeper you want “5 of sugar.” Five what — grams, kilograms, sacks? A bare number is meaningless in science. Every <b>physical quantity</b> is reported as a <b>number multiplied by a unit</b>: 5 kg, not just “5.” The number tells you how many; the unit tells you how many of what. Get the unit wrong and the number lies.',
      },
      {
        t: 'p',
        html: 'To stop the chaos of everyone using their own units, scientists worldwide agreed on the <b>SI system</b> (Système International), built on <b>seven base units</b>, each measuring one fundamental quantity:<br>• length → <b>metre (m)</b>, mass → <b>kilogram (kg)</b>, time → <b>second (s)</b>, electric current → <b>ampere (A)</b>, temperature → <b>kelvin (K)</b>, amount of substance → <b>mole (mol)</b>, luminous intensity → <b>candela (cd)</b>.',
      },
      {
        t: 'p',
        html: 'Everything else is a <b>derived unit</b> built from these. Area is m<sup>2</sup>, volume is m<sup>3</sup>, speed is m s<sup>−1</sup>, <b>density</b> is mass per unit volume (kg m<sup>−3</sup>, or the lab-friendly g cm<sup>−3</sup>).',
      },
      {
        t: 'p',
        html: 'Because the metre is sometimes too big (the size of an atom) or too small (the distance to a city), SI uses <b>prefixes</b> that scale a unit up or down in powers of ten: kilo- (10<sup>3</sup>), centi- (10<sup>−2</sup>), milli- (10<sup>−3</sup>), micro- (10<sup>−6</sup>), nano- (10<sup>−9</sup>), and so on. A nanometre is 10<sup>−9</sup> m — a billionth of a metre, the scale of molecules.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Units are like currencies and prefixes are like denominations. Saying “2000 m” is like saying “2000 rupees”; saying “2 km” is like saying “2 thousand-rupee notes” — same value, tidier expression. And just as you would convert rupees to dollars using an exchange rate, you convert metres to feet (or grams to kilograms) using a <b>conversion factor</b>. This is the heart of the <b>factor-label method</b>: multiply by a fraction equal to 1 (like (1 kg)/(1000 g)) so the unwanted unit cancels and the wanted one survives.',
      },
      {
        t: 'p',
        html: 'Two ideas trip students often and deserve early clarity:<br><br><b>Mass vs weight.</b> <b>Mass</b> is the amount of matter in an object (SI unit kg) and never changes. <b>Weight</b> is the gravitational force on that mass (<i>W</i> = <i>mg</i>, SI unit newton) and changes with location — you weigh slightly less on a mountaintop and far less on the Moon, though your mass is identical everywhere.',
      },
      {
        t: 'p',
        html: '<b>Temperature scales.</b> Three scales coexist: <b>Celsius (°C)</b>, the everyday scale; <b>Kelvin (K)</b>, the SI absolute scale (no negative values — 0 K is absolute zero); and <b>Fahrenheit (°F)</b>, used in a few countries. They measure the same thing on different rulers, related by simple formulae.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The Celsius–Kelvin offset is exactly 273.15, not 273 (use 273 only when a problem rounds).<br>• Kelvin has <b>no degree symbol</b> and never goes negative; a negative kelvin temperature is a sure sign of an error.<br>• Density depends on temperature (substances expand on heating), so density values are quoted at a stated temperature.<br>• The factor-label method only works when your conversion factors are genuine equalities (e.g., 1 L = 1000 mL); a wrong factor cancels nothing meaningful.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Physical quantity',
        main: 'Physical quantity = (numerical value) × (unit)',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'SI base units (7)',
        html: 'metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd).',
      },
      {
        t: 'def',
        term: 'Common prefixes',
        html: 'giga (10<sup>9</sup>), mega (10<sup>6</sup>), kilo (10<sup>3</sup>), deci (10<sup>−1</sup>), centi (10<sup>−2</sup>), milli (10<sup>−3</sup>), micro (10<sup>−6</sup>), nano (10<sup>−9</sup>), pico (10<sup>−12</sup>).',
      },
      {
        t: 'formula',
        kicker: 'Density',
        main: '<i>ρ</i> = mass/volume',
        legend: [],
        note: 'SI unit kg m<sup>−3</sup>; common unit g cm<sup>−3</sup>. Dimensional formula [M L<sup>−3</sup>].',
      },
      {
        t: 'formula',
        kicker: 'Volume conversions',
        main: '1 L = 1000 mL = 1000 cm<sup>3</sup> = 10<sup>−3</sup> m<sup>3</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Other derived units you will meet later: pressure</b> — SI unit pascal (Pa); chemistry also uses atmosphere, bar, and millimetre of mercury, related by 1 atm = 101325 Pa = 1.01325 bar = 760 mmHg (torr). <b>Energy</b> — SI unit joule (J); the older calorie is related by 1 cal = 4.184 J. (You need not master these now — just recognise that they, too, are built from the seven base units, e.g. 1 J = 1 kg m<sup>2</sup> s<sup>−2</sup>.)',
      },
      {
        t: 'formula',
        kicker: 'Mass vs weight',
        main: '<i>W</i> = <i>mg</i>',
        legend: ['<i>W</i> = weight, in newton', '<i>m</i> = mass, in kg', '<i>g</i> ≈ 9.8 m s<sup>−2</sup>'],
        note: 'Mass is invariant; weight varies with <i>g</i>.',
      },
      {
        t: 'formula',
        kicker: 'Temperature conversions',
        main: '<i>T</i>(K) = <i>t</i>(°C) + 273.15<br><i>t</i>(°F) = (9/5)<i>t</i>(°C) + 32<br><i>t</i>(°C) = (5/9)(<i>t</i>(°F) − 32)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Factor-label (dimensional analysis)',
        main: 'quantity × (wanted unit)/(given unit) = answer in wanted unit',
        legend: [],
        note: 'multiply the given quantity by conversion factors (each equal to 1) arranged so unwanted units cancel.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — Unit conversion by the factor-label method',
        steps: [
          'Write the given quantity with its unit.',
          'Multiply by one or more fractions, each a true equality (e.g., (1 m)/(100 cm)), oriented so the unwanted unit sits opposite to where it appears and <b>cancels</b>.',
          'Multiply the numbers, cancel the units, and read off the result. <b>Why it cannot fail:</b> every conversion factor equals 1, so multiplying by it changes the units without changing the value — you are re-expressing the same physical amount.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure B — Compound-unit conversion (e.g., density).</b> Convert each unit in turn. For g cm<sup>−3</sup> → kg m<sup>−3</sup>: turn grams into kilograms (÷1000) and cm<sup>−3</sup> into m<sup>−3</sup> (note 1 m<sup>3</sup> = 10<sup>6</sup> cm<sup>3</sup>, so ×10<sup>6</sup>). The net effect multiplies by 1000. <b>Why be careful:</b> cubic units scale by the cube of the linear factor — a frequent error is forgetting that 1 m<sup>3</sup> ≠ 100 cm<sup>3</sup> but 10<sup>6</sup> cm<sup>3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Procedure C — Temperature conversion.</b> Identify the scales involved and apply the matching formula. To go Fahrenheit → Kelvin, first convert to Celsius, then add 273.15 — there is no need to memorise a direct F→K formula. <b>Why the offsets and factors:</b> Celsius and Kelvin share the same degree size (so only an offset of 273.15 separates them), while Fahrenheit uses smaller degrees (180 F-degrees span the same range as 100 C-degrees, giving the factor 9/5) and a shifted zero (hence +32).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Normal human body temperature is 37 °C. Express this in (i) kelvin and (ii) degrees Fahrenheit.',
        steps: [
          '(i) <i>T</i>(K) = 37 + 273.15',
          '(ii) <i>t</i>(°F) = (9/5)(37) + 32 = 66.6 + 32',
        ],
        ans: '(i) 310.15 K; (ii) 98.6 °F — the familiar “98.6” of a thermometer.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Arrange in increasing order of length: 1 nm, 1 μm, 1 pm, 1 mm.',
        steps: [
          '<b>Fast solution.</b> Compare the exponents only: pm = 10<sup>−12</sup>, nm = 10<sup>−9</sup>, μm = 10<sup>−6</sup>, mm = 10<sup>−3</sup>. So<br>1 pm < 1 nm < 1 μm < 1 mm.',
          '<b>The trap:</b> students confuse “nano is smaller than micro” or rank by the alphabet/familiarity. <b>Speed tip:</b> memorise the prefix ladder as powers of ten and just compare exponents — never the names.',
        ],
        ans: 'pm < nm < μm < mm.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'The density of mercury is 13.6 g cm<sup>−3</sup>. Express this in SI units (kg m<sup>−3</sup>), and hence find the mass of 250 mL of mercury in kilograms. (Combines unit conversion with the density relation.)',
        steps: [
          '<b>Convert density:</b><br>13.6 g/cm<sup>3</sup> × (1 kg)/(1000 g) × (10<sup>6</sup> cm<sup>3</sup>)/(1 m<sup>3</sup>) = 13.6 × 1000',
          'Volume of 250 mL = 250 cm<sup>3</sup>: using <i>ρ</i> = <i>m</i>/<i>V</i> in the original units,<br><i>m</i> = <i>ρV</i> = 13.6 × 250 = 3400 g',
          'The cube factor (10<sup>6</sup>, not 10<sup>2</sup>) is the step that separates a correct answer from a wrong one.',
        ],
        ans: '13600 kg m<sup>−3</sup>; 3.4 kg',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'At what temperature do the Celsius and Fahrenheit scales show the <b>same numerical reading</b>?',
        steps: [
          'Set the readings equal: let the common value be <i>x</i>. Then <i>x</i> = (9/5)<i>x</i> + 32.<br><i>x</i> − (9/5)<i>x</i> = 32 ⇒ −(4/5)<i>x</i> = 32 ⇒ <i>x</i> = −40.',
          '<b>Check:</b> (9/5)(−40) + 32 = −72 + 32 = −40 ✓.',
          'The elegance is in recognising that “same reading” means setting the two expressions equal and solving a single linear equation — a conceptual leap rather than a plug-in.',
        ],
        ans: '−40 °C = −40 °F',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Convert (i) 25 °C to kelvin and (ii) 300 K to degrees Celsius.',
            a: '(i) 298.15 K; (ii) 26.85 °C.',
          },
          {
            q: '[NEET] Express 0.00045 m in (i) millimetres and (ii) micrometres.',
            a: '(i) 0.45 mm; (ii) 450 μm.',
          },
          {
            q: '[JEE Main] A gold bar has a mass of 193 g and a volume of 10.0 cm<sup>3</sup>. Find its density in g cm<sup>−3</sup> and in kg m<sup>−3</sup>.',
            a: '19.3 g cm<sup>−3</sup> = 19300 kg m<sup>−3</sup>.',
          },
          {
            q: '[JEE Main] Convert a speed of 72 km h<sup>−1</sup> to m s<sup>−1</sup> using the factor-label method.',
            a: '72 × (1000 m)/(1 km) × (1 h)/(3600 s) = 20 m s<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] A liquid of density 0.80 g cm<sup>−3</sup> fills a cubical tank of edge 0.50 m. Find the mass of the liquid in kilograms.',
            a: 'Volume = (0.50)<sup>3</sup> = 0.125 m<sup>3</sup> = 1.25 × 10<sup>5</sup> cm<sup>3</sup>; mass = 0.80 × 1.25 × 10<sup>5</sup> = 1.0 × 10<sup>5</sup> g = 1.0 × 10<sup>2</sup> kg.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The SI base unit of the amount of a substance is:',
        opts: [
          { label: 'gram', nudge: '<b>(a)</b>, <b>(c)</b> are mass units.' },
          { label: 'mole', nudge: null },
          { label: 'kilogram', nudge: '<b>(a)</b>, <b>(c)</b> are mass units.' },
          { label: 'litre', nudge: '<b>(d)</b> is a volume unit (and not even SI base).' },
        ],
        correct: 1,
        solution: 'The mole is the SI base unit for amount of substance. The trap is conflating “amount” with “mass.”',
      },
      {
        t: 'mcq',
        q: '1 m<sup>3</sup> equals:',
        opts: [
          {
            label: '100 cm<sup>3</sup>',
            nudge: '<b>(a)</b> uses the linear factor without cubing it — the single most common unit error in the chapter.',
          },
          {
            label: '1000 cm<sup>3</sup>',
            nudge: '<b>(b)</b> confuses the cubic metre with the litre (1 L = 1000 cm<sup>3</sup>).',
          },
          {
            label: '10<sup>4</sup> cm<sup>3</sup>',
            nudge: '<b>(c)</b> squares instead of cubing.',
          },
          { label: '10<sup>6</sup> cm<sup>3</sup>', nudge: null },
        ],
        correct: 3,
        solution: '1 m = 100 cm, so 1 m<sup>3</sup> = (100)<sup>3</sup> = 10<sup>6</sup> cm<sup>3</sup>.',
      },
      {
        t: 'mcq',
        q: 'Which statement is correct?',
        opts: [
          { label: 'Mass changes with location; weight does not.', nudge: '<b>(a)</b> reverses the two.' },
          { label: 'Weight changes with location; mass does not.', nudge: null },
          {
            label: 'Both change with location.',
            nudge: '<b>(c)</b>, <b>(d)</b> misunderstand that only the gravitational force, not the matter content, depends on place.',
          },
          {
            label: 'Neither changes with location.',
            nudge: '<b>(c)</b>, <b>(d)</b> misunderstand that only the gravitational force, not the matter content, depends on place.',
          },
        ],
        correct: 1,
        solution: 'Mass (amount of matter) is invariant; weight (<i>mg</i>) depends on <i>g</i>, which varies with location.',
      },
      {
        t: 'mcq',
        q: '−273.15 °C corresponds to:',
        opts: [
          { label: '0 K', nudge: null },
          { label: '273.15 K', nudge: '<b>(b)</b> drops the minus sign of −273.15 °C; 273.15 K is the kelvin value of 0 °C.' },
          {
            label: '−273.15 K',
            nudge: '<b>(c)</b> is impossible (kelvin is never negative) and is the giveaway that an error was made.',
          },
          { label: '100 K', nudge: '<b>(d)</b> is arbitrary.' },
        ],
        correct: 0,
        solution: '<i>T</i>(K) = −273.15 + 273.15 = 0 K, absolute zero.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting to cube (or square) the factor.</b> 1 m<sup>3</sup> = 10<sup>6</sup> cm<sup>3</sup>, not 100. Always raise the linear conversion to the power of the unit’s dimension.',
          '<b>Flipping the conversion factor.</b> Set the factor so the unwanted unit cancels; if the units don’t cancel, the fraction is upside-down.',
          '<b>Wrong temperature offset.</b> Use 273.15 (or 273 only when told to round), and never report a negative kelvin temperature — it signals an arithmetic error.',
          '<b>Confusing mass and weight.</b> Mass (kg) is fixed; weight (N) depends on gravity. Chemistry almost always deals with mass.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> Always carry units through the whole calculation, not just at the end. If the units of your final expression do not simplify to the units the answer should have, you have made a mistake before you even check the number — unit-tracking is a free error detector.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Quantity = number × unit.', note: 'Seven SI base units: m, kg, s, A, K, mol, cd.' },
          {
            f: 'Prefixes',
            note: 'k 10<sup>3</sup>, c 10<sup>−2</sup>, m 10<sup>−3</sup>, μ 10<sup>−6</sup>, n 10<sup>−9</sup>, p 10<sup>−12</sup>.',
          },
          {
            f: 'Density',
            note: '<i>ρ</i> = <i>m</i>/<i>V</i> (g cm<sup>−3</sup> or kg m<sup>−3</sup>); 1 g cm<sup>−3</sup> = 1000 kg m<sup>−3</sup>.',
          },
          {
            f: 'Volume',
            note: '1 L = 1000 mL = 1000 cm<sup>3</sup> = 10<sup>−3</sup> m<sup>3</sup>; 1 m<sup>3</sup> = 10<sup>6</sup> cm<sup>3</sup>.',
          },
          { f: 'Temperature', note: '<i>T</i>(K) = <i>t</i>(°C) + 273.15; <i>t</i>(°F) = (9/5)<i>t</i>(°C) + 32; coincide at −40.' },
          { f: 'Mass (kg, invariant) vs weight (<i>W</i> = <i>mg</i>, N, location-dependent).', note: '' },
        ],
        aids: [
          '“Cube the cube” — volume conversions raise the linear factor to the third power.',
          '“Cancel to convert” — orient factor-label fractions so unwanted units vanish.',
          '“Kelvin never goes negative” — a negative K is a red flag.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 20–24 ─────────────────────────
  {
    n: '03',
    title: 'Uncertainty in Measurement & Significant Figures',
    kalam: 'Significant figures are the grammar of measurement: they let a number quietly tell the reader how trustworthy it is.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A CBSE favourite — almost every year a 1–2 mark question on counting significant figures, rounding, or applying the calculation rules. NEET occasionally tests sig-fig counting, and JEE expects you to report every numerical answer to the right number of figures (marks are deducted for over- or understating precision). Scientific notation is assumed everywhere.',
      },
      {
        t: 'p',
        html: 'No measurement is ever exact. When you read “2.5 cm” off a ruler, you are really saying “somewhere close to 2.5” — the last digit is an estimate. Science is honest about this built-in <b>uncertainty</b>, and that honesty is encoded in how we write numbers.',
      },
      {
        t: 'p',
        html: 'The first tool is <b>scientific (exponential) notation</b>: writing any number as a coefficient between 1 and 10 times a power of ten, e.g. 0.000 000 000 000 000 000 000 001 66 g becomes the tidy 1.66 × 10<sup>−24</sup> g. Beyond saving ink, it makes the precision unambiguous, because only the digits in the coefficient “count.”',
      },
      {
        t: 'p',
        html: 'Which brings us to the central idea: <b>significant figures</b> — the digits in a measurement that carry real, reliable information. If a balance reads 12.5 g, that “5” is meaningful; you are claiming the mass is 12.5, not 12.4 or 12.6. Reporting 12.50000 g from that same balance would be a lie — you would be claiming a precision you do not have. Significant figures are the grammar of measurement: they let a number quietly tell the reader how trustworthy it is.',
      },
      {
        t: 'p',
        html: 'In fact, the <b>last</b> significant digit is always the uncertain one — it is the experimenter’s best estimate. A length recorded as 12.5 cm on a centimetre-graduated ruler really means “12.5 ± 0.1 cm”: the 1 and 2 are certain, the 5 is estimated. This is why you can never legitimately add digits a measurement does not contain — and why a single measurement and a count behave so differently. A count of “24 students” is <b>exact</b>: there is no estimated last digit, no ±, so it carries infinite significant figures and never limits a calculation. The same is true of defined relations such as 1 m = 100 cm. Distinguishing measured numbers (uncertain last digit) from exact numbers (no uncertainty) is essential before applying any of the rules below.',
      },
      {
        t: 'p',
        html: 'Two words are often muddled and worth pinning down:<br>• <b>Accuracy</b> is how close a measurement is to the true value.<br>• <b>Precision</b> is how close repeated measurements are to each other (regardless of the truth).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture three archers shooting at a target. One clusters all arrows tightly but off to the side — <b>precise but not accurate</b>. Another scatters arrows all around the bullseye, averaging to the centre — <b>accurate (on average) but not precise</b>. The third clusters tightly on the bullseye — <b>both accurate and precise</b>. A good experiment, like a good archer, aims for both; significant figures report the precision honestly so no one mistakes a lucky scatter for a tight cluster.',
      },
      {
        t: 'p',
        html: 'When measurements are combined by arithmetic, the uncertainty must be carried through — you cannot create precision out of thin air. That is why there are strict rules for how many significant figures a calculated result may keep. The guiding principle: <b>a chain is only as strong as its weakest link</b> — the least precise measurement limits the precision of the whole calculation.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <b>Exact numbers</b> — counts (e.g., 5 students) and defined relations (e.g., 1 kg = 1000 g, the “2” in a diameter formula) — have infinite significant figures and never limit the result.<br>• Trailing zeros are ambiguous without a decimal point: “100” could be 1, 2, or 3 sig figs — scientific notation removes the ambiguity (1 × 10<sup>2</sup> vs 1.00 × 10<sup>2</sup>).<br>• The rules below are about reporting precision honestly; they are not a license to round aggressively mid-calculation (carry extra digits through intermediate steps, round only at the end).',
      },

      { t: 'part', title: 'Key rules and definitions' },
      {
        t: 'formula',
        kicker: 'Scientific notation',
        main: '<i>N</i> × 10<sup><i>n</i></sup>',
        legend: ['<i>N</i> = a number with 1 ≤ <i>N</i> < 10', '<i>n</i> = an integer'],
        note: 'Only the digits of <i>N</i> are significant.',
      },
      {
        t: 'proc',
        title: 'Counting significant figures',
        steps: [
          'All non-zero digits are significant (345 → 3).',
          'Zeros between non-zero digits are significant (1.004 → 4).',
          'Leading zeros (before the first non-zero digit) are <b>not</b> significant (0.0025 → 2).',
          'Trailing zeros are significant <b>only if a decimal point is present</b> (100 → 1; 100. → 3; 1.00 × 10<sup>2</sup> → 3; 2.50 → 3).',
          '<b>Exact numbers</b> (counts, defined conversions) have infinite significant figures.',
        ],
      },
      {
        t: 'def',
        term: 'Rounding off (round-to-even rule for a trailing 5)',
        html: 'when the digit to be dropped is exactly 5 (with nothing significant after it), increase the preceding digit by one only if it is <b>odd</b>; leave it unchanged if it is <b>even</b>. (If the digit to drop is > 5, round up; if < 5, round down.)',
      },
      {
        t: 'p',
        html: '<b>Significant figures in calculations:</b><br>• <b>Addition / subtraction:</b> the result keeps as many decimal places as the term with the <b>fewest decimal places</b>.<br>• <b>Multiplication / division:</b> the result keeps as many significant figures as the factor with the <b>fewest significant figures</b>.',
      },
      {
        t: 'p',
        html: '<b>Accuracy</b> = closeness to the true value. <b>Precision</b> = closeness of repeated measurements to one another.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: '<b>Procedure A — Count significant figures.</b> Scan left to right. Ignore leading zeros entirely. Count every non-zero digit and every zero that is either sandwiched between non-zeros or trailing after a decimal point. For a plain whole number with trailing zeros, treat those zeros as uncertain (rewrite in scientific notation to be unambiguous). <b>Why:</b> leading zeros are mere place-holders that locate the decimal; they add no measurement information, whereas a deliberately written trailing zero after a decimal is a claim of precision.',
      },
      {
        t: 'p',
        html: '<b>Procedure B — Round to a required number of figures.</b> Keep the desired count of significant digits; look at the first dropped digit. Greater than 5 → round up; less than 5 → round down; exactly 5 with nothing after → apply the round-to-even rule. <b>Why round-to-even:</b> always rounding 5 up would bias a long series of results slightly upward; rounding to the nearest even digit cancels that bias over many calculations.',
      },
      {
        t: 'p',
        html: '<b>Procedure C — Combine measurements with the right rule.</b><br>• For sums and differences, line up the decimal points and stop at the column of the least precise term (fewest decimals). <b>Why decimals:</b> addition mixes the positions of uncertainty, so the coarsest decimal place dominates.<br>• For products and quotients, count significant figures and match the factor with the fewest. <b>Why sig figs:</b> multiplication scales relative uncertainties, which are captured by significant-figure count, not decimal places.<br>• Carry extra digits through intermediate steps; round <b>once</b>, at the very end, so rounding errors do not accumulate.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'State the number of significant figures in each: (i) 0.00250, (ii) 1.004, (iii) 50000, (iv) 6.022 × 10<sup>23</sup>, (v) 100.0.',
        steps: [
          '(i) 0.00250 → leading zeros don’t count; “2”, “5”, and the trailing “0” after the decimal do → <b>3</b>.',
          '(ii) 1.004 → captive zeros count → <b>4</b>.',
          '(iii) 50000 → no decimal point, so trailing zeros are not significant → <b>1</b>.',
          '(iv) 6.022 × 10<sup>23</sup> → only the coefficient’s digits count → <b>4</b>.',
          '(v) 100.0 → the decimal point makes all trailing zeros significant → <b>4</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Round each to <b>three</b> significant figures: (i) 2.745, (ii) 2.735, (iii) 0.023456.',
        steps: [
          '<b>Fast solution.</b><br>(i) Drop the final 5; preceding digit is 4 (even) → unchanged → <b>2.74</b>.<br>(ii) Drop the final 5; preceding digit is 3 (odd) → increase → <b>2.74</b>.<br>(iii) Fourth significant digit is 5, followed by 6 (more than half) → round up → <b>0.0235</b>.',
          '<b>The trap:</b> students reflexively “round 5 up,” and so write 2.75 for (i), which is wrong under the even-digit rule; (ii) gives 2.74 either way. <b>Speed tip:</b> when the dropped digit is exactly 5, look at the digit before it — even stays, odd climbs.',
        ],
        ans: '2.74, 2.74, 0.0235.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A rectangular metal sheet measures 2.1 cm by 3.46 cm. Calculate (i) its perimeter and (ii) its area, each to the correct number of significant figures. (Uses both calculation rules.)',
        steps: [
          '<b>(i) Perimeter (addition rule):</b><br><i>P</i> = 2 × (2.1 + 3.46) = 2 × 5.56 cm.',
          'The sum 2.1 + 3.46 = 5.56; keep it unrounded. The “2” is exact, so <i>P</i> = 2 × 5.56 = 11.12 cm, and since 2.1 has only <b>1 decimal place</b> the perimeter is reported to 1 decimal place:',
          '<b>(ii) Area (multiplication rule):</b><br><i>A</i> = 2.1 × 3.46 = 7.266 cm<sup>2</sup>.',
          'The factor 2.1 has only <b>2 significant figures</b>, so <i>A</i> =',
          'Notice the two rules give different “limiting” terms: decimals govern the sum, significant figures govern the product.',
        ],
        ans: '(i) <i>P</i> = 11.1 cm; (ii) <i>A</i> = 7.3 cm<sup>2</sup>',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Evaluate 4.5 × 10<sup>4</sup> + 2.3 × 10<sup>3</sup> and express the result in scientific notation to the correct number of significant figures.',
        steps: [
          'First bring both terms to the same power of ten:<br>4.5 × 10<sup>4</sup> + 0.23 × 10<sup>4</sup> = 4.73 × 10<sup>4</sup>.',
          'Now apply the <b>addition rule</b> to the coefficients written at the common power: 4.5 has 1 decimal place, 0.23 has 2, so the sum is limited to <b>1 decimal place</b>:',
          'The subtlety: the significant-figure decision must be made after aligning the exponents, because “decimal places” only have a consistent meaning once both numbers share the same power of ten.',
        ],
        ans: '4.7 × 10<sup>4</sup>',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] How many significant figures are in: (i) 0.0030, (ii) 40.06, (iii) 4.500 × 10<sup>3</sup>, (iv) 6000?',
            a: '(i) 2, (ii) 4, (iii) 4, (iv) 1.',
          },
          {
            q: '[NEET] Round 48.350 to three significant figures.',
            a: '48.4 (drop 5, preceding 3 is odd → up).',
          },
          {
            q: '[JEE Main] Evaluate to correct significant figures: 15.75 + 2.1 + 0.036.',
            a: '15.75 + 2.1 + 0.036 = 17.886 → 17.9 (least decimal places = 1, from 2.1).',
          },
          {
            q: '[JEE Main] A car travels 128 km in 2.0 h. Report its average speed to the correct number of significant figures.',
            a: '128/2.0 = 64 km h<sup>−1</sup> → 2 sig figs → 64 km h<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] The density of a metal is found by dividing a mass of 26.95 g by a volume of 5.0 cm<sup>3</sup>. Report the density to the correct number of significant figures, and state which measurement limits the precision.',
            a: '26.95/5.0 = 5.39 → 5.4 g cm<sup>−3</sup> (limited to 2 sig figs by the volume 5.0).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of significant figures in 0.005060 is:',
        opts: [
          { label: '6', nudge: '<b>(a)</b> counts every digit after the decimal point.' },
          { label: '3', nudge: '<b>(b)</b> drops the trailing zero.' },
          { label: '4', nudge: null },
          { label: '5', nudge: '<b>(d)</b> miscounts.' },
        ],
        correct: 2,
        solution: 'Leading zeros don’t count; “5”, captive “0”, “6”, and trailing “0” after the decimal do → 4. The trap is mishandling the leading vs trailing zeros simultaneously.',
      },
      {
        t: 'mcq',
        q: '3.0 × 10<sup>2</sup> has how many significant figures?',
        opts: [
          { label: '1', nudge: '<b>(a)</b> ignores the deliberate trailing zero.' },
          { label: '2', nudge: null },
          { label: '3', nudge: '<b>(c)</b>, <b>(d)</b> count the exponent’s digits, which never count.' },
          { label: '4', nudge: '<b>(c)</b>, <b>(d)</b> count the exponent’s digits, which never count.' },
        ],
        correct: 1,
        solution: 'Only the coefficient 3.0 counts → 2.',
      },
      {
        t: 'mcq',
        q: 'The result of 2.5 × 3.42, to the correct number of significant figures, is:',
        opts: [
          { label: '8.55', nudge: '<b>(a)</b>, <b>(c)</b> keep too many figures (false precision).' },
          { label: '8.6', nudge: null },
          { label: '8.550', nudge: '<b>(a)</b>, <b>(c)</b> keep too many figures (false precision).' },
          { label: '9', nudge: '<b>(d)</b> keeps too few.' },
        ],
        correct: 1,
        solution: 'Product = 8.55, but 2.5 has only 2 sig figs → 8.6. The least-sig-fig factor sets the limit.',
      },
      {
        t: 'mcq',
        q: 'Adding 25.2 g, 1.34 g, and 0.022 g gives, to correct significant figures:',
        opts: [
          { label: '26.562 g', nudge: '<b>(a)</b>, <b>(b)</b> keep too many decimals.' },
          { label: '26.56 g', nudge: '<b>(a)</b>, <b>(b)</b> keep too many decimals.' },
          { label: '26.6 g', nudge: null },
          { label: '27 g', nudge: '<b>(d)</b> applies the multiplication rule by mistake.' },
        ],
        correct: 2,
        solution: 'Sum = 26.562, but the coarsest term 25.2 has 1 decimal place → 26.6 g. Addition is governed by decimal places, not sig figs.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mishandling zeros.</b> Leading zeros never count; trailing zeros count only with a decimal point. 0.0025 has 2 sig figs; 2500 (no decimal) has 2.',
          '<b>Always rounding 5 up.</b> When the dropped digit is exactly 5, use round-to-even — even stays, odd climbs.',
          '<b>Mixing the calculation rules.</b> Sums/differences follow decimal places; products/quotients follow significant figures. Using the wrong one is a classic slip.',
          '<b>Manufacturing precision.</b> A result can never be more precise than its least precise input. Reporting 5.39 from a measurement good to 5.0 overstates what you know.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> Round only <b>once, at the very end</b>. Carry one or two guard digits through every intermediate step; rounding at each stage lets small errors snowball into a wrong final figure. And before writing the answer, ask which input was the weakest link — that input sets your figure count.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Scientific notation',
            note: '<i>N</i> × 10<sup><i>n</i></sup>, 1 ≤ <i>N</i> < 10; only <i>N</i>’s digits are significant.',
          },
          {
            f: 'Counting',
            note: 'non-zeros count; captive zeros count; leading zeros don’t; trailing zeros count only with a decimal point; exact numbers are infinite.',
          },
          { f: 'Rounding a 5', note: 'round-to-even (even unchanged, odd up); otherwise > 5 up, < 5 down.' },
          { f: 'Add/subtract', note: 'answer to fewest <b>decimal places</b>.' },
          { f: 'Multiply/divide', note: 'answer to fewest <b>significant figures</b>.' },
          { f: 'Accuracy = near the truth; precision = measurements near each other.', note: '' },
        ],
        aids: [
          '“Leading zeros are placeholders, trailing zeros are promises” (only after a decimal).',
          '“Add by decimals, multiply by sig figs.”',
          '“Weakest link rule” — the least precise input caps the answer.',
          '“Round once, at the end” — never step-by-step.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 25–31 ─────────────────────────
  {
    n: '04',
    title: 'Laws of Chemical Combination & Atomic Theory',
    kalam: 'What exams actually test is the reverse skill: given a table of masses, decide which law the data obeys.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual foundation of all of Class 11 Chemistry. CBSE Boards almost always carry a 1–2 mark definition or a “state the law” question. NEET reliably asks 1 identify-the-law MCQ from numerical data. JEE Main blends combining-volumes reasoning with formula determination, and JEE Advanced occasionally tests reciprocal proportions as a multi-step verification.',
      },
      {
        t: 'p',
        html: 'Imagine you are at a kirana shop weighing out ingredients for your grandmother’s secret masala. She insists: for every 2 spoons of cumin, exactly 1 spoon of pepper — never a pinch more, never a pinch less. Whether she makes it in Chennai or in Amritsar, whether she makes 100 grams or 5 kilograms, that ratio holds. Change it, and it stops being her masala and becomes something else entirely.',
      },
      {
        t: 'p',
        html: 'Nature, it turns out, is even stricter than your grandmother. Long before anyone had ever “seen” an atom, chemists in the late 1700s noticed that substances combine with one another in fixed, predictable, almost stubbornly mathematical proportions. These observations — distilled from thousands of careful weighings on balances far cruder than the ones you use in your school lab — became the <b>laws of chemical combination</b>. They are the empirical bedrock on which the entire atomic picture of matter was eventually built.',
      },
      {
        t: 'p',
        html: 'There are five of them, and they tell a connected story:<br>1. <b>Conservation of mass</b> — when a reaction happens, the books always balance. Nothing in matter is gained or lost; it is only rearranged.<br>2. <b>Definite (constant) proportions</b> — a given compound always contains the same elements in the same fixed proportion by mass.<br>3. <b>Multiple proportions</b> — when the same two elements form more than one compound, the numbers that show up are small whole numbers, never messy fractions.<br>4. <b>Reciprocal proportions</b> — the way two elements combine with a third one quietly predicts how they will combine with each other.<br>5. <b>Gay-Lussac’s law of combining volumes</b> — for gases, the same whole-number simplicity appears, but now in volumes rather than masses.<br>(NCERT counts Avogadro’s law as the fifth law; reciprocal proportions is outside the current NCERT syllabus.)',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture matter as being made of identical LEGO bricks. If every brick has a fixed weight, then a wall built from a fixed recipe of red and blue bricks must always have the same red-to-blue mass ratio (definite proportions). You can never end up with half a brick, so when you build two different structures from the same two colours, the brick counts — and hence the masses — must come out as simple whole-number ratios (multiple proportions). And since you never destroy a brick by snapping it together with another, the total weight before and after equals out (conservation of mass). This LEGO-brick insight is exactly what <b>John Dalton</b> formalised in 1808 as his <b>atomic theory</b> — and the laws above are precisely the experimental footprints those invisible bricks leave behind.',
      },
      {
        t: 'p',
        html: 'The story has one beautiful twist. Gay-Lussac noticed gases combine in simple volume ratios (e.g., 2 volumes of hydrogen + 1 volume of oxygen → 2 volumes of water vapour). Dalton’s bricks could not explain this cleanly — if 2 “atoms” of hydrogen plus 1 “atom” of oxygen gave 2 “particles” of water, each water particle would need half an oxygen atom, which Dalton declared impossible. In 1811, <b>Amedeo Avogadro</b> resolved the paradox with one elegant idea: equal volumes of gases (at the same temperature and pressure) hold equal numbers of molecules, and elemental gases like H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub> are <b>diatomic</b>. Suddenly the volume ratios made perfect sense. This was the moment chemistry learned the crucial difference between an <b>atom</b> (smallest particle of an element) and a <b>molecule</b> (smallest particle that exists independently).',
      },
      {
        t: 'p',
        html: 'The cleanest piece of evidence is the formation of hydrogen chloride. Experiment shows that 1 volume of hydrogen plus 1 volume of chlorine gives exactly 2 volumes of hydrogen chloride. If hydrogen and chlorine atoms were truly indivisible single particles (as Dalton insisted), then 1 particle of each could give at most 1 particle of product — never 2. The only way to get two volumes of HCl is if each reacting molecule splits: a hydrogen molecule must contain (at least) two hydrogen atoms, and likewise for chlorine. So the very arithmetic of combining volumes forces the conclusion that elemental hydrogen and chlorine are <b>diatomic</b> (H<sub>2</sub>, Cl<sub>2</sub>), and that during reaction these molecules break into atoms which then recombine. This same logic — running Avogadro’s law backwards from measured volumes — is exactly how early chemists determined the <b>atomicity</b> of the common elemental gases, deducing that oxygen and nitrogen are diatomic, the noble gases monoatomic, and ozone triatomic.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions</b> — the fine print that exams love:<br>• <b>Conservation of mass</b> holds in a <b>closed system</b>. Burn a candle in open air and it appears to lose mass — only because CO<sub>2</sub> and water vapour escape. Mass is conserved; you just stopped weighing some of it. (At a deeper level Einstein showed mass and energy interconvert, so the law is “mass–energy” conservation, but for ordinary chemistry the mass change is unmeasurably tiny.)<br>• <b>Definite proportions</b> can fail for <b>non-stoichiometric compounds</b> (e.g., certain metal oxides like Fe<sub><i>x</i></sub>O) and where <b>isotopes</b> differ between samples (heavy water D<sub>2</sub>O vs ordinary H<sub>2</sub>O have genuinely different mass ratios).<br>• <b>Gay-Lussac’s combining-volumes law applies only to gases</b>, and only when all volumes are measured at the <b>same temperature and pressure</b>. It says nothing about solids or liquids.',
      },

      { t: 'part', title: 'Key definitions and statements' },
      {
        t: 'p',
        html: '(For this topic the “quantities” are mass ratios and volume ratios — dimensionless comparisons — so dimensional formulae do not apply. The relevant SI quantities are mass, in kilograms, dimension [M], and volume, in cubic metres, dimension [L<sup>3</sup>].)',
      },
      {
        t: 'formula',
        kicker: 'Law of Conservation of Mass (Lavoisier, 1789)',
        main: '∑ <i>m</i><sub>reactants</sub> = ∑ <i>m</i><sub>products</sub> (closed system)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Law of Definite Proportions (Proust, 1799)',
        main: '(<i>m</i><sub><i>A</i></sub>/<i>m</i><sub><i>B</i></sub>)<sub>sample 1</sub> = (<i>m</i><sub><i>A</i></sub>/<i>m</i><sub><i>B</i></sub>)<sub>sample 2</sub>',
        legend: [],
        note: 'a pure compound, from any source, has a fixed mass fraction of each element.',
      },
      {
        t: 'formula',
        kicker: 'Law of Multiple Proportions (Dalton, 1803)',
        main: '(<i>m</i><sub><i>B</i></sub>)<sub>compound 1</sub>/(<i>m</i><sub><i>B</i></sub>)<sub>compound 2</sub> = a simple whole-number ratio',
        legend: ['<i>m</i><sub><i>B</i></sub> = mass of element <i>B</i>, with the mass of the other element fixed'],
        note: 'for two compounds of the same pair of elements.',
      },
      {
        t: 'def',
        term: 'Law of Reciprocal Proportions (Richter, 1792)',
        html: 'if elements <i>A</i> and <i>B</i> each combine with a fixed mass of element <i>C</i>, then the ratio <i>m</i><sub><i>A</i></sub> ∶ <i>m</i><sub><i>B</i></sub> in which they combine with each other is the same as, or a simple multiple of, the ratio in which they each combined with <i>C</i>.',
      },
      {
        t: 'def',
        term: 'Gay-Lussac’s Law of Combining Volumes (1808)',
        html: 'gases react in volumes that bear simple whole-number ratios to each other and to gaseous products, at constant <i>T</i> and <i>P</i>.',
      },
      {
        t: 'formula',
        kicker: 'Avogadro’s Law (1811)',
        main: 'At the same <i>T</i> and <i>P</i>:<br><i>V</i> ∝ <i>n</i> ⇒ <i>V</i><sub>1</sub>/<i>V</i><sub>2</sub> = <i>n</i><sub>1</sub>/<i>n</i><sub>2</sub>',
        legend: [],
        note: 'i.e., equal volumes contain equal numbers of molecules.',
      },
      { t: 'p', html: '<b>Key terms:</b>' },
      { t: 'def', term: 'Atom', html: 'the smallest particle of an element that takes part in a chemical reaction.' },
      {
        t: 'def',
        term: 'Molecule',
        html: 'the smallest particle of an element or compound capable of independent existence.',
      },
      {
        t: 'def',
        term: 'Atomicity',
        html: 'number of atoms in one molecule of an element (He = 1, O<sub>2</sub> = 2, O<sub>3</sub> = 3).',
      },
      {
        t: 'def',
        term: 'Relative atomic mass',
        html: 'mass of an atom relative to exactly 1/12 the mass of a <sup>12</sup>C atom (which is defined as exactly 12 u).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no algebraic derivation of these laws — they are experimental generalisations. What exams actually test is the reverse skill: <b>given a table of masses, decide which law the data obeys.</b> Here is the reliable procedure.',
      },
      {
        t: 'p',
        html: '<b>Step 0 — Read what is being compared.</b><br>• One reaction, masses of reactants vs products? → think <b>conservation of mass</b>.<br>• One compound, multiple samples/sources? → think <b>definite proportions</b>.<br>• Two compounds of the same two elements? → think <b>multiple proportions</b>.<br>• Three elements interlinked through a common one? → think <b>reciprocal proportions</b>.<br>• Volumes of gases? → think <b>combining volumes / Avogadro</b>.',
      },
      {
        t: 'p',
        html: '<b>Why this first?</b> The single most common exam mistake is applying the wrong law because the student never paused to count “how many compounds, how many elements.” The trigger words are in the data structure itself.',
      },
      {
        t: 'p',
        html: '<b>Step 1 (multiple proportions) — fix the common element.</b> Normalise both compounds so the mass of the shared element is identical (usually 1 g or some convenient value). Only then compare the masses of the other element.',
      },
      {
        t: 'p',
        html: '<b>Why?</b> “Simple whole-number ratio” is meaningful only when you hold one element constant. Comparing raw masses without fixing the common element gives garbage.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — reduce to lowest terms.</b> Divide the two normalised masses and reduce. If you get something like 1 ∶ 2, 2 ∶ 3, 3 ∶ 4, the law holds. If you get 1.37 ∶ 2.81 that refuses to simplify, either the law does not apply or you made an arithmetic slip — recheck Step 1.',
      },
      {
        t: 'p',
        html: '<b>Step 3 (reciprocal proportions) — build the bridge.</b> Find the mass of <i>A</i> and the mass of <i>B</i> that each combine with the same fixed mass of <i>C</i>. That gives a predicted ratio <i>m</i><sub><i>A</i></sub> ∶ <i>m</i><sub><i>B</i></sub>. Then check it against the ratio in which <i>A</i> and <i>B</i> combine directly. Equal (or simple multiple) ⇒ law verified.',
      },
      {
        t: 'p',
        html: '<b>Step 4 (combining volumes) — write the volume “equation.”</b> Treat volumes like moles (Avogadro guarantees this). Balance atoms across the gaseous equation to extract an unknown formula.',
      },
      {
        t: 'p',
        html: '<b>Why Avogadro lets you do this:</b> since <i>V</i> ∝ <i>n</i> at fixed <i>T</i>, <i>P</i>, a ratio of volumes is a ratio of molecules. So “2 vol H<sub>2</sub> : 1 vol O<sub>2</sub>” literally means “2 molecules H<sub>2</sub> : 1 molecule O<sub>2</sub>.”',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'In a sealed, rigid container, 5.6 g of iron reacts completely with 3.2 g of sulphur to form iron(II) sulphide. What mass of iron sulphide is produced, and which law of chemical combination does this illustrate?',
        steps: [
          '<b>Given:</b> mass of iron = 5.6 g, mass of sulphur = 3.2 g, container sealed (closed system).',
          'The reaction is<br>Fe(s) + S(s) → FeS(s)',
          'Since the system is closed, no matter enters or leaves. By the <b>Law of Conservation of Mass</b>:<br><i>m</i><sub>FeS</sub> = <i>m</i><sub>Fe</sub> + <i>m</i><sub>S</sub> = 5.6 g + 3.2 g',
          '<b>This illustrates the Law of Conservation of Mass.</b> The key phrase is “sealed container”: that is the marker telling you the law applies cleanly.',
        ],
        ans: '8.8 g',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Sulphur forms two oxides. In oxide <b>A</b>, 16 g of sulphur is combined with 16 g of oxygen. In oxide <b>B</b>, 16 g of sulphur is combined with 24 g of oxygen. Which law is demonstrated?<br>(a) Conservation of mass (b) Definite proportions (c) Multiple proportions (d) Reciprocal proportions',
        steps: [
          '<b>Fast solution.</b> Same two elements (S and O), two different compounds → screams <b>multiple proportions</b>. The mass of sulphur is already fixed at 16 g in both, so you skip straight to the oxygen ratio:<br>O<sub>A</sub>/O<sub>B</sub> = 16/24 = 2/3',
          'A clean small-whole-number ratio 2 ∶ 3 ⇒ <b>Law of Multiple Proportions.</b>',
          '<b>The trap:</b> weaker students add the masses (16 + 16 = 32 vs 16 + 24 = 40) and compare totals, or compare oxygen masses without noticing the sulphur was already equalised — wasting time hunting for a common element that is already common. <b>Speed tip:</b> the instant you see “two oxides / two compounds of the same elements,” fix the repeated element and ratio the other one. Under 10 seconds.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '1 volume of a gaseous hydrocarbon burns completely in 5 volumes of oxygen to give 3 volumes of carbon dioxide and 4 volumes of water vapour, all measured at the same temperature and pressure. Deduce the molecular formula of the hydrocarbon. (This links Gay-Lussac’s combining-volumes law with Avogadro’s law.)',
        steps: [
          'By <b>Gay-Lussac + Avogadro</b>, volume ratios = molecule ratios. Let the hydrocarbon be C<sub><i>x</i></sub>H<sub><i>y</i></sub>:<br>C<sub><i>x</i></sub>H<sub><i>y</i></sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O',
          '<b>Carbon balance:</b> all carbon ends up in CO<sub>2</sub>. 3 molecules CO<sub>2</sub> carry 3 C atoms ⇒ <i>x</i> = 3.',
          '<b>Hydrogen balance:</b> 4 molecules H<sub>2</sub>O carry 4 × 2 = 8 H atoms ⇒ <i>y</i> = 8.',
          '<b>Oxygen check (the sanity step):</b> products contain 3 × 2 + 4 × 1 = 10 O atoms = 5 O<sub>2</sub> ✓ — matches the given 5 volumes.',
          'The link is the heart of the problem: without Avogadro’s <i>V</i> ∝ <i>n</i>, you could not turn “volumes” into “atoms” and the balance would be impossible.',
        ],
        ans: '∴ The hydrocarbon is C<sub>3</sub>H<sub>8</sub> (propane).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Three compounds are analysed by mass:<br>• Methane is 75.0% carbon and 25.0% hydrogen.<br>• Carbon dioxide is 27.3% carbon and 72.7% oxygen.<br>• Water is 11.1% hydrogen and 88.9% oxygen.<br>Show that these data are consistent with the <b>Law of Reciprocal Proportions</b>.',
        steps: [
          'Strategy: hydrogen is the common bridge element. Fix 1 g of hydrogen and find how much carbon, and how much oxygen, separately combine with it. Then compare that predicted C : O ratio with the C : O ratio found directly in CO<sub>2</sub>.',
          '<b>Carbon per gram of hydrogen (from methane):</b><br><i>m</i><sub>C</sub>/<i>m</i><sub>H</sub> = 75.0/25.0 = 3.00 ⇒ 1 g H combines with 3.00 g C.',
          '<b>Oxygen per gram of hydrogen (from water):</b><br><i>m</i><sub>O</sub>/<i>m</i><sub>H</sub> = 88.9/11.1 = 8.01 ⇒ 1 g H combines with 8.01 g O.',
          'So, reciprocal prediction: when carbon and oxygen combine, they should do so in the ratio<br><i>m</i><sub>C</sub> ∶ <i>m</i><sub>O</sub> = 3.00 ∶ 8.01.',
          '<b>Now the direct test (from CO<sub>2</sub>):</b><br><i>m</i><sub>C</sub>/<i>m</i><sub>O</sub> = 27.3/72.7 = 0.3755 = 3.00/7.99 ≈ 3.00/8.00.',
          'The predicted ratio 3.00 ∶ 8.01 and the observed ratio 3.00 ∶ 8.00 agree within rounding.',
          'The rigour is in recognising which element is the bridge and that you must equalise it to 1 g in <b>both</b> branches before the two ratios become comparable.',
        ],
        ans: '∴ The data obey the Law of Reciprocal Proportions.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the law of conservation of mass. A reaction carried out in an open beaker shows a measurable decrease in mass. Does this violate the law? Justify in two lines.',
            a: 'No — open system; gaseous product(s) escaped, so mass is still conserved overall.',
          },
          {
            q: '[NEET] Copper forms two oxides. In one, 8.0 g of copper is combined with 1.0 g of oxygen; in the other, 4.0 g of copper is combined with 1.0 g of oxygen. Which law is illustrated, and what is the ratio of oxygen masses for a fixed mass of copper?',
            a: 'Multiple proportions; oxygen ratio (per fixed Cu) = 1 : 2.',
          },
          {
            q: '[JEE Main] 10 mL of a gaseous compound of nitrogen and hydrogen, on decomposition, gives 5 mL of nitrogen and 15 mL of hydrogen (all at the same <i>T</i>, <i>P</i>). Determine the molecular formula of the compound.',
            a: '10 mL of compound gives 5 mL N<sub>2</sub> + 15 mL H<sub>2</sub>, i.e. 2 molecules give 1 N<sub>2</sub> + 3 H<sub>2</sub>, so each molecule has 1 N and 3 H: formula NH<sub>3</sub>.',
          },
          {
            q: '[JEE Main] A 2.50 g sample of a pure compound contains 1.00 g of element X and 1.50 g of element Y. A different 5.00 g sample of the same compound, prepared by another method, is analysed. Predict the mass of X it must contain, and name the law you used.',
            a: '2.00 g of X; Law of Definite Proportions.',
          },
          {
            q: '[JEE Advanced] Nitrogen and oxygen form a series of oxides. In oxide P, 14 g N combines with 8 g O; in oxide Q, 14 g N combines with 16 g O; in oxide R, 14 g N combines with 40 g O. Show the data obey the law of multiple proportions and give the simplest ratio of the oxygen masses across P : Q : R.',
            a: 'Ratio 8 : 16 : 40 = 1 : 2 : 5 (simple whole numbers) ⇒ multiple proportions.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A pure sample of water from the Ganga and a sample synthesised in a lab are each found to be 11.1% hydrogen by mass. This is a direct demonstration of:',
        opts: [
          {
            label: 'Conservation of mass',
            nudge: '<b>(a)</b> tests a single reaction’s mass balance, not composition across sources — wrong structure.',
          },
          {
            label: 'Multiple proportions',
            nudge: '<b>(b)</b> needs two different compounds of the same elements; here there is only one compound (water). The trap is seeing “two samples” and misreading it as “two compounds.”',
          },
          { label: 'Definite proportions', nudge: null },
          {
            label: 'Avogadro’s law',
            nudge: '<b>(d)</b> concerns gas volumes and molecule counts, irrelevant to a fixed-composition statement about a liquid.',
          },
        ],
        correct: 2,
        solution: 'Same compound, two different sources, identical composition — that is the definition of definite (constant) proportions.',
      },
      {
        t: 'mcq',
        q: 'Two volumes of a gas X react with one volume of O<sub>2</sub> to give two volumes of a gaseous oxide (same <i>T</i>, <i>P</i>). If X is diatomic, the formula of the oxide is:',
        opts: [
          {
            label: 'XO',
            nudge: '<b>(a)</b> XO would need 2 X<sub>2</sub> + 2 O<sub>2</sub> → 4 XO (2 volumes of O<sub>2</sub> and 4 of product, not the 1 and 2 given) — a balancing error.',
          },
          { label: 'X<sub>2</sub>O', nudge: null },
          { label: 'XO<sub>2</sub>', nudge: '<b>(c)</b> XO<sub>2</sub> uses too much oxygen for the given 1 volume of O<sub>2</sub>.' },
          { label: 'X<sub>2</sub>O<sub>3</sub>', nudge: '<b>(d)</b> X<sub>2</sub>O<sub>3</sub> would need 3 volumes of O<sub>2</sub> per 2 of X<sub>2</sub>, not 1.' },
        ],
        correct: 1,
        solution: 'By Avogadro, volumes = molecules: 2 X<sub>2</sub> + O<sub>2</sub> → 2 (oxide). Atoms: 4 X and 2 O distributed over 2 oxide molecules ⇒ each is X<sub>2</sub>O. The trap is guessing the formula without writing the volume equation.',
      },
      {
        t: 'mcq',
        q: 'In compound I, 1 g of element A combines with 0.5 g of B. In compound II, 1 g of A combines with 1.5 g of B. The ratio of B that combines with a fixed mass of A is:',
        opts: [
          { label: '1 ∶ 2', nudge: '<b>(a)</b> 1 ∶ 2 comes from carelessly halving instead of using the actual values.' },
          { label: '1 ∶ 3', nudge: null },
          { label: '2 ∶ 3', nudge: '<b>(c)</b> 2 ∶ 3 is a fabricated reduction.' },
          {
            label: '3 ∶ 1',
            nudge: '<b>(d)</b> 3 ∶ 1 is the correct ratio written backwards — a sign/order slip. Always state the ratio in the order the compounds are listed.',
          },
        ],
        correct: 1,
        solution: 'A is already fixed at 1 g; ratio of B = 0.5 ∶ 1.5 = 1 ∶ 3 — small whole numbers, consistent with multiple proportions.',
      },
      {
        t: 'mcq',
        q: 'Which statement about Dalton’s atomic theory is <b>incorrect</b> in light of modern chemistry?',
        opts: [
          {
            label: 'Atoms combine in simple whole-number ratios to form compounds.',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> remain essentially valid and are core to the theory.',
          },
          {
            label: 'Atoms are neither created nor destroyed in a chemical reaction.',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> remain essentially valid and are core to the theory. The trap is that <b>(b)</b> sounds like it might be “wrong” because of nuclear reactions — but Dalton’s claim is about <b>chemical</b> reactions, where it still holds, so it is not the incorrect statement.',
          },
          { label: 'All atoms of a given element are identical in mass.', nudge: null },
          {
            label: 'Matter is made up of tiny particles called atoms.',
            nudge: '<b>(a)</b>, <b>(b)</b>, <b>(d)</b> remain essentially valid and are core to the theory.',
          },
        ],
        correct: 2,
        solution: 'Isotopes (e.g., <sup>12</sup>C and <sup>13</sup>C) are atoms of the same element with different masses, so this Dalton postulate is now known to be false.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mistaking an open system for a broken law.</b> A burning candle or an effervescing reaction in an open beaker loses apparent mass because gases escape. Conservation of mass is intact — you simply stopped weighing the escaping CO<sub>2</sub>/H<sub>2</sub>O.',
          '<b>Comparing the wrong quantities in multiple proportions.</b> Students compare total masses, or compare the variable element before equalising the fixed element. Always fix the common element to the same value in both compounds first.',
          '<b>Treating gas volumes as masses.</b> In combining-volume problems, volume ratios are molecule ratios (via Avogadro), not mass ratios. Do not convert to grams unless asked.',
          '<b>Over-applying Dalton.</b> Remember the modern cracks: isotopes (atoms of one element can differ in mass), isobars (atoms of different elements with the same mass), and the divisibility of the atom (subatomic particles).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> Before touching numbers, count <b>how many compounds and how many elements</b> the data describes. One compound, many sources → definite proportions. Two compounds, two elements → multiple proportions. Three elements via a common one → reciprocal. Gases with volumes → combining volumes/Avogadro. This 5-second classification alone earns the mark in most identify-the-law questions.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Conservation of mass (Lavoisier)',
            note: '∑ <i>m</i><sub>reactants</sub> = ∑ <i>m</i><sub>products</sub>, closed system only.',
          },
          { f: 'Definite proportions (Proust)', note: 'one compound, fixed mass ratio, any source.' },
          {
            f: 'Multiple proportions (Dalton)',
            note: 'two compounds of same elements → fix one element, other is in small whole-number ratio.',
          },
          {
            f: 'Reciprocal proportions (Richter)',
            note: 'combination with a common third element predicts direct combination ratio.',
          },
          {
            f: 'Combining volumes (Gay-Lussac, gases only, same <i>T</i>, <i>P</i>)',
            note: 'simple whole-number volume ratios.',
          },
          {
            f: 'Avogadro’s law',
            note: '<i>V</i> ∝ <i>n</i> at constant <i>T</i>, <i>P</i> ⇒ equal volumes = equal molecules; common elemental gases (H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, Cl<sub>2</sub>) are diatomic.',
          },
          {
            f: 'Dalton’s atomic theory (1808)',
            note: 'atoms indivisible · identical within an element · combine in fixed whole-number ratios · conserved in reactions. Modern cracks: isotopes, isobars, subatomic particles.',
          },
        ],
        aids: [
          'Discoverer order by date: “Lavoisier–Proust–Dalton” → conservation → definite → multiple.',
          '“Same compound = same recipe” → definite proportions.',
          '“Two compounds, count the brick ratio” → multiple proportions.',
          '“Volumes are votes, one molecule one vote” → Avogadro turns volume ratios into molecule ratios.',
        ],
      },
    ],
  },
];
