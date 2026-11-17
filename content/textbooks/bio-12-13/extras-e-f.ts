import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 13 (Biodiversity and Conservation), Additional topics E and F, word for word from the Class 12
 * Biology Master Reference (book pp. 747 to 758): E "Sampling Biodiversity: Methods, Assumptions, and Limitations"
 * (starts at the top of p. 747, its practice answers end on p. 750) and F "What NEET Actually Asks" (the book's
 * "Addendum P", p. 750 to p. 758). Page 759 is the errata: not copied.
 *
 * Topic indexes: E = 7, F = 8. No figure is drawn on these pages. The book's example headings ("Example E.1 - [CBSE
 * Board] Quadrat Density Calculation") become the example's tag (the bracket) and a bold lead on its question. Where the
 * book prints no answer line of its own, the example's ans is ''.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic E · pp. 747–750 ─────────────────────────
  {
    n: 'E',
    title: 'Sampling Biodiversity: Methods, Assumptions, and Limitations',
    extra: true,
    kalam: 'The chapter explains what biodiversity is and why it matters but does not describe how scientists sample diversity in the field.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter explains what biodiversity is and why it matters but does not describe how scientists sample diversity in the field. NEET occasionally asks about quadrat and transect methods, capture-recapture assumptions, and the limitations of sampling (the book’s estimate from past papers, not official figures). These methods also underpin the species-area relationship and diversity indices in Additional topics A and B.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Quadrat sampling:</b> for stationary or slow-moving organisms (plants, sessile invertebrates):<br>• Place a square frame of known area (e.g., 1 m × 1 m = 1 m<sup>2</sup>) randomly or systematically within the study area.<br>• Count all individuals of the target species within the quadrat.<br>• Repeat across multiple quadrats.<br>• Calculate mean density:<br>Density = <frac><num>Mean individuals per quadrat</num><den>Quadrat area</den></frac><br>• Total population estimate: Density × Total habitat area.',
      },
      {
        t: 'p',
        html: '<b>Assumptions:</b> organisms are randomly distributed (not strongly clumped); quadrat size is appropriate for the organism (large enough to include enough individuals, small enough to distinguish them); the habitat is reasonably homogeneous.',
      },
      {
        t: 'p',
        html: '<b>Line transect:</b> records species along a straight line:<br>• Stretch a tape across the habitat.<br>• Note each species that touches or falls within a set perpendicular distance (belt width) of the line.<br>• Suitable for plants, birds, and large mammals.',
      },
      {
        t: 'p',
        html: '<b>Belt transect:</b> a strip of known width and length:<br>• Like a line transect but with a fixed belt (e.g., 2 m wide, 50 m long = 100 m<sup>2</sup>).<br>• Allows density estimation along with presence-absence.',
      },
      {
        t: 'p',
        html: '<b>Capture-recapture:</b> for mobile animal populations:<br>• Capture a sample (<i>M</i>), mark and release.<br>• After sufficient time for mixing, recapture a second sample (<i>n</i>).<br>• Count marked individuals in the recapture sample (<i>R</i>).<br>• Estimate population size: <i>N</i><sub>total</sub> = <frac><num><i>M</i> × <i>n</i></num><den><i>R</i></den></frac>.',
      },
      {
        t: 'p',
        html: '<b>Assumptions for capture-recapture:</b> marks are not lost or missed; population is closed (no births, deaths, immigration, emigration during the interval); all individuals have equal capture probability; marks do not affect survivability.',
      },
      {
        t: 'p',
        html: '<b>Limitation:</b> if the second sample is too small (<i>R</i> is small), the estimate becomes unreliable (division by a small number inflates the estimate).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Quadrat Density Calculation.</b> A student places five 1 m<sup>2</sup> quadrats in a grassland and counts individuals of a grass species: Quadrat counts = {12, 8, 15, 10, 11}. The total grassland area is 500 m<sup>2</sup>. Estimate the total population of this grass species.',
        steps: [
          'Mean per quadrat: <frac><num>12 + 8 + 15 + 10 + 11</num><den>5</den></frac> = <frac><num>56</num><den>5</den></frac> = 11.2 individuals per m<sup>2</sup>.',
          'Density = 11.2 individuals m<sup>−2</sup>.',
          'Total population = 11.2 × 500',
        ],
        ans: 'Estimated population = 5,600 individuals.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Capture-Recapture Estimation.</b> A researcher captures and marks 80 fish in a lake. One week later, she captures 60 fish and finds 12 are marked. Estimate the total fish population.',
        steps: [
          'Using <i>N</i><sub>total</sub> = <frac><num><i>M</i> × <i>n</i></num><den><i>R</i></den></frac>:',
          '<i>N</i><sub>total</sub> = <frac><num>80 × 60</num><den>12</den></frac> = <frac><num>4,800</num><den>12</den></frac> = 400 fish',
          '<b>Assumptions to check:</b> marks are visible and retained; the lake is closed (no major stocking or fishing mortality in the intervening week); fish mixed randomly between releases; all fish had equal chance of capture both times.',
        ],
        ans: 'Estimated population = 400 fish.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Limitations of Sampling Methods.</b> A botanist samples a forest using five 10 m<sup>2</sup> quadrats and reports 25 tree species in the study area. A colleague says this is almost certainly an underestimate. Explain why.',
        steps: [
          'Five quadrats in a large forest is a very small sample relative to the total area and species diversity. Key limitations:<br>• Small sample size: five quadrats cannot adequately represent species that occur at low density or in different microhabitats within the forest.<br>• Quadrat placement: random placement may miss rare species that are spatially clumped.<br>• Quadrat size: 10 m<sup>2</sup> is small for trees (which may be spaced far apart); a larger quadrat or a different method (belt transect, plotless methods) would be more appropriate.<br>• Species-area effect: the species count increases with sampled area (Additional topic B). Sampling only a tiny fraction of the forest systematically underestimates richness.',
          'The underestimation is predictable from the species-area relationship: the botanist sampled far less area than needed to capture the full species pool.',
        ],
        ans: 'Five quadrats of 10 m<sup>2</sup> is too small a sample for a forest; rare species are likely missed, and the species-area relationship predicts that small samples yield lower richness counts.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Capture-Recapture with Small Recapture.</b> In a capture-recapture study, <i>M</i> = 50 marked, <i>n</i> = 20 recaptured, <i>R</i> = 1 marked recaptured. Calculate the population estimate and explain why this estimate is unreliable.',
        steps: [
          '<i>N</i><sub>total</sub> = <frac><num>50 × 20</num><den>1</den></frac> = 1,000',
          'The estimate is 1,000 individuals. However, this is highly unreliable because only 1 out of 20 recaptured individuals was marked (<i>R</i> = 1). This could occur by chance even in a large population, or it could indicate that:<br>• The marked individuals died, dispersed, or lost their marks.<br>• The population is open (births, deaths, immigration, emigration occurred).<br>• The second capture sample was too small.',
          'The confidence interval around this estimate is very wide. A reliable estimate requires a larger number of marked recaptures (a common rule of thumb is at least 5–10).',
        ],
        ans: 'Estimated <i>N</i> = 1,000, but unreliable because <i>R</i> = 1 gives a large standard error; the estimate is sensitive to the single recaptured individual and assumptions of a closed population.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe the quadrat method for estimating plant population density. State two assumptions.',
            a: 'Place square frames (quadrats) of known area at random or systematic points in the study area; count individuals of the target species in each; calculate mean density = <frac><num>mean count</num><den>quadrat area</den></frac>; multiply by total habitat area. Assumptions: organisms are randomly distributed; quadrat size is appropriate; habitat is homogeneous.',
          },
          {
            q: '[NEET] In a capture-recapture study, 60 animals are marked and released. A second capture of 80 animals contains 16 marked individuals. Estimate the population size.',
            a: '<i>N</i> = <frac><num>60 × 80</num><den>16</den></frac> = <frac><num>4,800</num><den>16</den></frac> = 300 individuals.',
          },
          {
            q: '[CUET] A student uses line transects to survey birds in a forest. Why might this method miss species that are present?',
            a: 'Line transects record only species that cross the line or fall within the belt width. Cryptic species, canopy birds that fly over the line, or species in the forest interior beyond the belt width may be missed. Also, birds with low density or large territories may not intersect the transect.',
          },
          {
            q: '[NEET] State two assumptions of the capture-recapture method and explain what happens if they are violated.',
            a: '(i) Population is closed (no births, deaths, immigration, emigration between captures): violation causes over- or under-estimation. (ii) All individuals have equal capture probability: violation causes bias if some individuals are trap-shy or trap-happy. Loss of marks also violates the method.',
          },
          {
            q: '[CUET] Why is it important to place quadrats randomly rather than in convenient locations?',
            a: 'Random placement avoids bias: convenient locations tend to be accessible, visible, or structurally similar, which may not represent the full habitat. Random (or systematic random) sampling ensures every part of the habitat has an equal chance of being sampled, giving an unbiased estimate.',
          },
          {
            q: '[NEET High-Difficulty] A population estimate of 2,000 is obtained from capture-recapture with <i>M</i> = 100, <i>n</i> = 100, <i>R</i> = 5. A second independent estimate gives about 833 with <i>M</i> = 50, <i>n</i> = 50, <i>R</i> = 3. Which estimate is more reliable and why?',
            a: 'The first estimate (<i>N</i> = 2,000) is somewhat more reliable. It rests on <i>R</i> = 5 marked recaptures, whereas the second (<i>N</i> ≈ 833, from <frac><num>50 × 50</num><den>3</den></frac>) rests on only <i>R</i> = 3, so it is more sensitive to the exact count of marked individuals recaptured: one more or one fewer changes it greatly. Even so, both <i>R</i> values are small, so both estimates are rough; a reliable estimate needs more marked recaptures.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 750–758 ─────────────────────────
  {
    n: 'F',
    title: 'What NEET Actually Asks',
    extra: true,
    kalam: 'NEET and AIPMT questions on this chapter fall into four groups.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'NEET/AIPMT questions on this chapter, across a range of past papers, fall into four groups (the shares are the book’s estimate from past papers, not official figures):',
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Approximate share', 'What NEET actually tests'],
        rows: [
          [
            '<b>Biodiversity patterns & loss</b> (levels, latitudinal gradient, species–area, Evil Quartet, IUCN numbers)',
            '~35 %',
            'Exact figures are the hook: 784 extinct/500 yr, 32 % amphibians threatened, 2.4 % land / 8.1 % species for India. “Evil Quartet” order (HOAC) is asked as a direct-recall item.',
          ],
          [
            '<b>Conservation strategies</b> (in situ vs ex situ, hotspots, biosphere-reserve zonation, sacred groves)',
            '~30 %',
            'The in-situ/ex-situ boundary is often tested. Hotspot criteria (≥1,500 endemic plants AND ≥70 % vegetation lost) and the 34-vs-36 count are asked.',
          ],
          [
            '<b>Magnitude & taxonomy</b> (global species estimates, which group has most species, Tilman’s experiments)',
            '~20 %',
            '“Insects = largest group” and “fungi > all vertebrates” are both asked. The Robert May estimate (≈7 million) and the ~1.5 million recorded figure are stand-alone recall items.',
          ],
          [
            '<b>Assertion–Reason & Matching</b> (conceptual chains, cause-effect)',
            '~15 %',
            'The usual pattern: one limb is a textbook fact, the other is a half-correct mechanistic statement. The candidate must separate true facts from true-but-not-explanatory reasons.',
          ],
        ],
      },
      {
        t: 'p',
        html: 'The shares above are the book’s rough estimate and should not be read as a frequency table.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. Definition / One-line Fact (Easy)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A single statement with four options: three are textbook definitions, one is a distractor that swaps a key word.<br><b>Approach:</b> Read the NCERT line verbatim. The distractor may invert a qualifier (“all levels” → “below species level”; “endemic” → “cosmopolitan”).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Biodiversity describes the study of diversity<br><b>(a)</b> below species level<br><b>(b)</b> at species level<br><b>(c)</b> at community level<br><b>(d)</b> at all levels of biological organization',
        steps: ['Biodiversity covers every rung: genes, species, and ecosystems. Options (a)–(c) each restrict it to a single level.'],
        ans: '(d)',
      },

      { t: 'p', html: '<b>2. The In-Situ / Ex-Situ Boundary (Medium)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Five or six items are listed; the candidate must pick the one that is not ex situ (or vice versa). Common items: wildlife sanctuary, national park, sacred grove, seed bank, botanical garden, cryopreservation.<br><b>Approach:</b> One-question test: is the organism still in its natural habitat?<br>Yes → in situ. No → ex situ.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Which of the following is NOT an approach for in-situ conservation?<br><b>(a)</b> Biosphere reserve<br><b>(b)</b> Sanctuary<br><b>(c)</b> Wildlife safari park<br><b>(d)</b> Sacred grove',
        steps: ['“Wildlife safari park” implies animals removed from their original habitat and displayed in a managed setting: that is ex situ. The other three protect organisms on-site.'],
        ans: '(c)',
      },

      { t: 'p', html: '<b>3. Assertion–Reason (Hard)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two statements: Assertion (A) and Reason (R). Options are (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.<br><b>Approach:</b><br>Step 1: Is A true?<br>Step 2: Is R true?<br>Step 3: If both true, does R actually cause or define A, or is it just another true fact?',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<b>Assertion (A):</b> Communities that comprise more species tend to be more stable.<br><b>Reason (R):</b> A higher number of species results in less year-to-year variation in total biomass.<br>Choose the correct option.<br><b>(a)</b> Both true, R explains A.<br><b>(b)</b> Both true, R not the explanation.<br><b>(c)</b> A true, R false.<br><b>(d)</b> A false, R true.',
        steps: [
          'A is true: Tilman’s field experiments show species-rich communities are both steadier and more productive.',
          'R is true: “less variation in total biomass” is exactly Tilman’s finding.',
          'R explains A: the mechanism behind greater stability is the dampening of year-to-year swings when different species respond differently to the same stress. R is also the measured evidence for A: it is how Tilman’s results show that species-rich plots are steadier.',
        ],
        ans: '(a)',
      },

      { t: 'p', html: '<b>4. Matching Column (Medium–Hard)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two columns of four or five items each; the candidate must pair every item in Column I with one in Column II.<br><b>Approach:</b> First memorise the pairs that recur:<br>• Nile perch → alien species invasion<br>• Narrowly utilitarian → direct economic benefits (food, medicine); in the worked item below the book pairs it with “Obvious reasons for biodiversity conservation”<br>• Habitat destruction → main cause of biodiversity loss<br>• Hotspots → high endemism<br><br>Then solve the remaining items by elimination.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Column-I | Column-II<br>A. Nile Perch in Lake Victoria | I. Obvious reasons for biodiversity conservation<br>B. Narrowly utilitarian | II. Habitat destruction<br>C. Main cause for biodiversity loss | III. High endemism<br>D. Hotspots | IV. Alien species',
        steps: [],
        ans: 'A–IV, B–I, C–II, D–III',
      },

      { t: 'p', html: '<b>5. Diagram / Proportion-ID (Medium)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A pie chart or bar diagram shows proportionate species numbers across taxa. Candidates must identify which taxon occupies a labelled wedge.<br><b>Approach:</b> Know the hierarchy cold:<br>Animals about 70 % of all species (NCERT says more than 70 %) → within animals, Insects dominate (~70 % of animals) → within vertebrates, fishes are the largest group → fungi > all vertebrates combined.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Animals make up about 70 % of all species, and insects make up about 70 % of animal species. Insects therefore account for roughly what percentage of all species?<br><b>(a)</b> 7 %<br><b>(b)</b> 21 %<br><b>(c)</b> 49 %<br><b>(d)</b> 70 %',
        steps: ['0.70 × 0.70 ≈ 0.49, i.e. about 49 % (the chapter’s pie chart shows the same figure). Option (d) forgets that 70 % is a share of animals only, not of all species.'],
        ans: '(c)',
      },

      { t: 'p', html: '<b>6. Quantitative / Species–Area (Medium–Hard)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Log–log form given; candidate must extract the slope <i>z</i>, compute species richness, or identify the scale (within-region vs continental).',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'A beetle survey across forest patches fits the line log <i>S</i> = 0.25 log <i>A</i> + 1.40, with <i>A</i> in hectares.<br>(a) State <i>z</i> and <i>C</i>.<br>(b) Predict species richness in a 100-ha patch.<br>(c) Is this a within-region or a continental-scale study?',
        steps: [
          '<b>Solution:</b><br>(a) By comparison with log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>: <i>z</i> = 0.25; log <i>C</i> = 1.40, so <i>C</i> = 10<sup>1.40</sup> ≈ 25.1.',
          '(b) For <i>A</i> = 100 ha: log <i>S</i> = 0.25 × log 100 + 1.40 = 0.25 × 2 + 1.40 = 1.90, so <i>S</i> = 10<sup>1.90</sup> ≈ <b>79 species</b>.',
          '(c) <i>z</i> = 0.25 falls in the within-region band (0.1–0.2, or just above it for a regional study). A continental <i>z</i> would be 0.6–1.2. Reading: 0.25 is nearer the within-region band (about 0.1–0.2, sometimes a little higher) than the continental 0.6–1.2. This is a <b>within-region / landscape-scale</b> study.',
        ],
        ans: '',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'table',
        title: null,
        head: ['Trap', 'What it looks like', 'How to beat it'],
        rows: [
          [
            '<b>“Every exotic species is harmful”</b>',
            '“Exotic species always increase biodiversity” → FALSE',
            'Invasive exotic (alien) species can reduce biodiversity by out-competing natives; many introduced species (most crops, for example) are not invasive.',
          ],
          [
            '<b>Endemic ≠ Exotic</b>',
            '“Endemic = cosmopolitan” → FALSE',
            'Endemic = restricted to one region; exotic = introduced from outside.',
          ],
          [
            '<b>Pigeon trap</b>',
            '“Pigeon” listed as a recent extinction → students may pick it',
            'A question may offer “pigeon”. The passenger pigeon (<i>Ectopistes migratorius</i>, North America; the last bird died in 1914) is extinct, but pigeons in general (the rock pigeon <i>Columba livia</i>, for example) are not. It is not among NCERT’s named recent extinctions (Dodo, Quagga, Thylacine, Steller’s sea cow, three tiger subspecies).',
          ],
          [
            '<b>°F vs °C in cryopreservation</b>',
            '−196 °F is offered as an option → the correct answer is “none of these”',
            'NCERT gives −196 <b>°C</b>. The Fahrenheit option is a unit trap.',
          ],
          [
            '<b>“Hunting” in Evil Quartet</b>',
            'Hunting is listed as a fourth cause',
            'The NCERT Evil Quartet is: Habitat loss, Over-exploitation, Alien species invasions, Co-extinction (the mnemonic HOAC). “Hunting” is a form of over-exploitation, not a separate fourth item.',
          ],
          [
            '<b>34 vs 36 hotspots</b>',
            'Most answer keys say 34',
            'The NCERT-based key says 34; Conservation International now counts 36. Match the source the question implies.',
          ],
          [
            '<b>Wrong invasive species</b>',
            'Nile perch is a common item; sturgeon or eels are offered as distractors',
            'Nile perch (Lake Victoria) → cichlid extinction. African catfish (<i>Clarias gariepinus</i>) → Indian river threat. Water hyacinth and <i>Lantana</i> → Indian habitat chokers.',
          ],
          [
            '<b>In-situ includes wildlife sanctuary</b>',
            'Sanctuary offered as “not in situ”',
            'Wildlife sanctuaries protect animals in their natural habitat → they are in situ. Off-site conservation (seed bank, zoo, botanical garden, safari park, cryopreservation) is ex situ.',
          ],
          [
            '<b>“Fungi = most species”</b>',
            'Fungi listed as the largest group',
            'Fungi exceed all vertebrates combined, but insects still hold the top position overall. The trap uses the true fungi statement to misplace it at the very top.',
          ],
          [
            '<b>Global warming as a listed cause</b>',
            '“Global warming” offered as a major cause',
            'NCERT lists the Evil Quartet; global warming is a driver of habitat loss and climate stress but is not one of the four named causes in the textbook.',
          ],
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: 'Answers follow NCERT where it states the point; Q6, Q8 and Q11 go beyond it.' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] The International Union for Conservation of Nature (IUCN) Red List (2004) records that out of 784 species documented extinct in the last 500 years, the number that were vertebrates is:<br><b>(a)</b> 87<br><b>(b)</b> 338<br><b>(c)</b> 359<br><b>(d)</b> 784',
            a: '(b): NCERT gives 338 vertebrates, 359 invertebrates, 87 plants.',
          },
          {
            q: '[Easy] A seed bank storing seeds of rare Himalayan plants is an example of:<br><b>(a)</b> in situ conservation<br><b>(b)</b> ex situ conservation<br><b>(c)</b> in situ and ex situ both<br><b>(d)</b> hotspot conservation',
            a: '(b): the germplasm is stored away from the natural habitat.',
          },
          {
            q: '[Medium] The species–area relationship on a logarithmic scale is written as:<br><b>(a)</b> <i>S</i> = <i>CA</i><sup><i>z</i></sup><br><b>(b)</b> log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i><br><b>(c)</b> log <i>S</i> = <i>z</i> log <i>C</i> + log <i>A</i><br><b>(d)</b> <i>S</i> = <i>zAC</i>',
            a: '(b): taking logs of <i>S</i> = <i>CA</i><sup><i>z</i></sup> gives log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>. The other options are the arithmetic form (a), a swapped constant (c), and a scrambled formula (d).',
          },
          {
            q: '[Medium] Assertion (A): The presently occurring species extinction is different from the five past mass extinctions. Reason (R): Extinction in the present day is due to natural causes, whereas earlier it was due to man-made causes.<br><b>(a)</b> Both true, R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
            a: '(c): A is true: the sixth extinction is anthropogenic, while the five past events were natural. R is false: the present extinction is man-made, not natural. The statement inverts the reality.',
          },
          {
            q: '[Medium] Which one of the following shows the concept of species–area relationship?<br><b>(a)</b> The number of species in an area increases with the size of the area.<br><b>(b)</b> Larger species require larger habitat areas than do smaller species.<br><b>(c)</b> Most species within any given area are endemic.<br><b>(d)</b> The larger the area, the greater the extinction rate.',
            a: '(a): the species–area relationship states that species richness rises with sampled area (rising more slowly as area grows). Option (b) confounds individual body size with range size; (c) and (d) are unrelated.',
          },
          {
            q: '[Medium] A region with very high endemism (more than 1,500 endemic plant species) that is also under severe threat must have lost at least what percentage of its original vegetation (the threshold value)?<br><b>(a)</b> 30 %<br><b>(b)</b> 50 %<br><b>(c)</b> 70 %<br><b>(d)</b> 90 %',
            a: '(c): the hotspot threat criterion is ≥70 % original vegetation lost (equivalently, ≤30 % remaining). The 30 % and 50 % options are not the threshold the criterion uses (a region that has lost 70 % has also lost more than 30 %), and the criterion is Myers’s, with the 1,500 endemic plant condition.',
          },
          {
            q: '[Hard] Assertion (A): A species-rich community is generally more stable than a species-poor one. Reason (R): Higher diversity guarantees that every individual species in the community is itself immune to disturbance.<br><b>(a)</b> Both true, R explains A<br><b>(b)</b> Both true, R does not explain A<br><b>(c)</b> A true, R false<br><b>(d)</b> A false, R true',
            a: '(c): A is true (Tilman’s experiments). R is false: diversity does not make any single species immune; stability arises at the community level through statistical averaging across species that respond differently to stress.',
          },
          {
            q: '[Hard] A continental-scale bird survey returns a species–area slope <i>z</i> = 0.95, while a park-scale survey of the same taxon returns <i>z</i> = 0.15. The continental slope is steeper because:<br><b>(a)</b> continental areas have more habitat types than a park.<br><b>(b)</b> across continents you cross multiple biogeographic zones with high species turnover (β-diversity), so each added unit of area brings many genuinely new species; within one park most added area re-samples the same local pool.<br><b>(c)</b> continental <i>z</i> values are always larger by convention.<br><b>(d)</b> park studies use a different equation.',
            a: '(b): the mechanistic explanation. The steep continental slope reflects crossing entire distinct species pools; the gentle park slope reflects re-sampling of the same local pool. (a) is true but does not explain the difference in slope: bigger areas also have more habitats at every scale; what steepens <i>z</i> is the turnover of whole species pools (beta diversity).',
          },
          {
            q: '[Hard] Which one of the following statements about the distribution of species on Earth is correct?<br><b>(a)</b> Vertebrate species outnumber fungal species.<br><b>(b)</b> Fungal species outnumber all vertebrate species combined.<br><b>(c)</b> Plants make up a larger share of species than insects.<br><b>(d)</b> Molluscs are the largest animal group.',
            a: '(b): fungi are more numerous than all vertebrates put together, but insects are the largest group overall and among animals. (a) is false; (c) and (d) are false: insects outnumber plants and molluscs.',
          },
          {
            q: '[Hard] Which of the following is an example of the broadly utilitarian argument for conserving biodiversity?<br><b>(a)</b> Food, firewood and fibre obtained from forests<br><b>(b)</b> Medicines obtained from plants<br><b>(c)</b> Release of about 20 % of the Earth’s oxygen by the Amazon rainforest<br><b>(d)</b> The view that every species has an intrinsic value',
            a: '(c): broadly utilitarian arguments rest on ecosystem services; NCERT quotes about 20 % of the atmosphere’s oxygen from the Amazon, which is a popular overstatement (the forest uses nearly all it makes), so learn it as NCERT’s figure. (a) and (b) are direct economic benefits (narrowly utilitarian) and (d) is the ethical argument.',
          },
          {
            q: '[Hard] The three zones of a biosphere reserve in the correct order from strictest protection outward are:<br><b>(a)</b> transition → buffer → core<br><b>(b)</b> buffer → core → transition<br><b>(c)</b> core → buffer → transition<br><b>(d)</b> core → transition → buffer',
            a: '(c): core zone (strictly protected; only non-destructive research and monitoring) → buffer zone (limited regulated activity) → transition/manipulation zone (active human use).',
          },
          {
            q: '[Hard] In David Tilman’s long-term plot experiments, increasing plant species richness led to:<br><b>(a)</b> more year-to-year biomass variation and lower productivity.<br><b>(b)</b> less year-to-year variation and higher productivity.<br><b>(c)</b> no measurable effect.<br><b>(d)</b> higher variation but higher productivity.',
            a: '(b): Tilman found both effects simultaneously: communities became both steadier (less year-to-year swing) and more productive (greater total biomass captured).',
          },
        ],
      },

      { t: 'part', title: 'Study Tips: Where Students Slip' },
      {
        t: 'mistakes',
        items: [
          '<b>Draw the in-situ / ex-situ line every time.</b> A frequent trap is a “wildlife sanctuary” or “sacred grove” offered as ex situ. Ask one question: is the organism still in its natural habitat? Sanctuaries, national parks, biosphere reserves and sacred groves are in situ; zoos, botanical gardens, seed banks and cryopreservation are ex situ.',
          '<b>Know both hotspot counts (34 and 36).</b> The textbook figure of 34 is the one the NCERT-based key uses; Conservation International now counts 36. Read the question for its implied source before choosing.',
          '<b>Assemble the species hierarchy into one chain.</b> Animals make up about 70 % of species (NCERT says more than 70 %); insects are about 70 % of animals (about 49 % of all species); fungi outnumber all vertebrates combined. Held together, this chain answers “which group has the most species?” under time pressure.',
        ],
      },
    ],
  },
];
