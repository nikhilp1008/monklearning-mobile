import type { Topic } from '@/lib/textbooks';

/**
 * Biology 12 Chapter 13 (Biodiversity and Conservation), Additional topics A to D, word for word from the Class 12
 * Biology Master Reference (book pp. 734 to 746): the shared introduction (p. 734 lines 2 to 11, the first paragraph of
 * A's Introduction), A "Biodiversity Indices: Quantifying Diversity Beyond Species Counts" (p. 734 to the practice
 * answers at the top of p. 737), B "Species-Area Relationship: Logarithmic Form and Slope Interpretation" (low p. 737 to
 * the practice answers at the top of p. 740), C "India as Megadiversity Nation: Endemism, Endemic vs Exotic, and
 * India-Specific Threat Data" (mid p. 740 to the practice answers at the top of p. 743) and D "Extinction: IUCN
 * Categories and Rate Distinctions" (low p. 743 to p. 746). Page 747 is Additional topic E (the next writer's file).
 *
 * Topic indexes: A = 3, B = 4, C = 5, D = 6 (Topics 01 to 03 = 0 to 2). No figure is drawn on these pages (only ruled
 * table lines and fraction bars). The book's example headings ("Example A.1: [CBSE Board] Computing Shannon Index")
 * become the example's tag (the bracket) and a bold lead on its question. Worked-example tables are written as labelled
 * rows. Where the book prints no label "Answer:" the example's ans is still the printed answer line; every example here
 * has one. Assertion-reason examples print the standard four options ("A false, R true"). Logarithms in Addendum B are
 * base 10 (the book writes 10 raised to the power), the Shannon index of A uses the natural logarithm.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 734–737 ─────────────────────────
  {
    n: 'A',
    title: 'Biodiversity Indices: Quantifying Diversity Beyond Species Counts',
    extra: true,
    kalam: 'Species richness is simply the count S of species in a defined area.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'These additional topics extend Chapter 13 with five layers (A to E) that CBSE Boards and NEET-UG test but the chapter does not cover in detail: (A) how biodiversity indices quantify diversity beyond raw species counts; (B) the logarithmic species-area equation: intercept meaning, slope interpretation, and prediction from log-log data; (C) India’s megadiversity specifics, including endemic versus exotic species and India-targeted threat figures; (D) IUCN Red List categories and the distinction between background and current extinction rates; and (E) field sampling methods for biodiversity assessment and their assumptions. These five sections add what a student aiming high also needs to answer the 2–4 examination questions that fall in these niches every year (the book’s estimate from past papers, not official figures). A final topic (F) shows how NEET asks about the chapter.',
      },
      {
        t: 'p',
        html: 'The chapter defines species richness (the number of species) and explains the latitudinal gradient. It does not teach how ecologists combine species number with species abundance into a single diversity index, how to compute or compare indices, or what alpha, beta, and gamma diversity mean as spatial scales (beta is only named once, in a practice answer). These can be asked in NEET and CUET as application questions and as assertion-reason pairs.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Species richness</b> is simply the count <i>S</i> of species in a defined area. It ignores how many individuals each species has.',
      },
      {
        t: 'p',
        html: '<b>Shannon Index (<i>H</i>′)</b> combines richness with evenness:<br><i>H</i>′ = −∑<sub><i>i</i>=1</sub><sup><i>S</i></sup> <i>p</i><sub><i>i</i></sub> ln(<i>p</i><sub><i>i</i></sub>)<br>where <i>p</i><sub><i>i</i></sub> is the proportion of individuals belonging to species <i>i</i> and the sum runs over all <i>S</i> species. Higher <i>H</i>′ means more diverse. Typical values are often 1.5–3.5 for diverse communities (a rule of thumb; richer communities can exceed 4).',
      },
      {
        t: 'p',
        html: '<b>Simpson’s Index of Diversity (<i>D</i>)</b> measures the probability that two randomly selected individuals belong to different species:<br><i>D</i> = 1 − ∑<sub><i>i</i>=1</sub><sup><i>S</i></sup> <i>p</i><sub><i>i</i></sub><sup>2</sup><br>Again, higher <i>D</i> (closer to 1) means more diverse. Its complement, 1 − <i>D</i> = ∑<i>p</i><sub><i>i</i></sub><sup>2</sup>, is Simpson’s Index (a measure of dominance): a high value means LOW diversity.',
      },
      {
        t: 'p',
        html: '<b>Alpha diversity (<i>α</i>):</b> species richness within a single, homogeneous community or sample.',
      },
      {
        t: 'p',
        html: '<b>Beta diversity (<i>β</i>):</b> turnover in species composition between two different communities or habitats. High <i>β</i> means the communities are very different from each other. A simple measure is: <i>β</i> = <frac><num><i>γ</i></num><den><i>ᾱ</i></den></frac>, where <i>γ</i> is regional species richness and <i>ᾱ</i> is the average alpha diversity.',
      },
      {
        t: 'p',
        html: '<b>Gamma diversity (<i>γ</i>):</b> total species richness across an entire landscape or region.',
      },
      {
        t: 'p',
        html: 'The spatial nesting: <i>α</i> (within one habitat) → <i>β</i> (between habitats) → <i>γ</i> (whole region).',
      },
      {
        t: 'p',
        html: '<b>Practical computation shortcut.</b> For Shannon: build a table of <i>p</i><sub><i>i</i></sub> for each species, calculate <i>p</i><sub><i>i</i></sub> ln(<i>p</i><sub><i>i</i></sub>), sum, and negate. For Simpson’s: square each <i>p</i><sub><i>i</i></sub>, sum, subtract from 1.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Computing Shannon Index.</b> A forest plot has 100 individuals belonging to 4 tree species:<br>• Species W: 50 individuals<br>• Species X: 25 individuals<br>• Species Y: 15 individuals<br>• Species Z: 10 individuals<br>Calculate the Shannon Index.',
        steps: [
          'Total <i>N</i> = 100. Proportions: <i>p</i><sub><i>W</i></sub> = 0.50, <i>p</i><sub><i>X</i></sub> = 0.25, <i>p</i><sub><i>Y</i></sub> = 0.15, <i>p</i><sub><i>Z</i></sub> = 0.10.',
          '<b>Working table.</b><br>Species W: <i>p</i><sub><i>i</i></sub> = 0.50, ln(<i>p</i><sub><i>i</i></sub>) = −0.693, <i>p</i><sub><i>i</i></sub> ln(<i>p</i><sub><i>i</i></sub>) = −0.347<br>Species X: <i>p</i><sub><i>i</i></sub> = 0.25, ln(<i>p</i><sub><i>i</i></sub>) = −1.386, <i>p</i><sub><i>i</i></sub> ln(<i>p</i><sub><i>i</i></sub>) = −0.347<br>Species Y: <i>p</i><sub><i>i</i></sub> = 0.15, ln(<i>p</i><sub><i>i</i></sub>) = −1.897, <i>p</i><sub><i>i</i></sub> ln(<i>p</i><sub><i>i</i></sub>) = −0.285<br>Species Z: <i>p</i><sub><i>i</i></sub> = 0.10, ln(<i>p</i><sub><i>i</i></sub>) = −2.303, <i>p</i><sub><i>i</i></sub> ln(<i>p</i><sub><i>i</i></sub>) = −0.230',
          'Sum of <i>p</i><sub><i>i</i></sub> ln(<i>p</i><sub><i>i</i></sub>) ≈ −1.21.',
          '<i>H</i>′ = −(−1.208) ≈ 1.21.',
        ],
        ans: 'Shannon Index <i>H</i>′ ≈ 1.21.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Comparing Two Communities.</b> Community A has 10 species, all with equal abundance (10 individuals each). Community B has 10 species but with abundances 91, 1, 1, 1, 1, 1, 1, 1, 1, 1. Which has higher diversity and why?',
        steps: [
          'Community A: <i>p</i><sub><i>i</i></sub> = 0.1 for all 10 species.',
          '∑<i>p</i><sub><i>i</i></sub><sup>2</sup> = 10 × (0.1)<sup>2</sup> = 0.10',
          '<i>D</i><sub><i>A</i></sub> = 1 − 0.10 = 0.90',
          'Community B: <i>p</i><sub>1</sub> = 0.91, remaining 9 species each have <i>p</i><sub><i>i</i></sub> = 0.01.',
          '∑<i>p</i><sub><i>i</i></sub><sup>2</sup> = (0.91)<sup>2</sup> + 9 × (0.01)<sup>2</sup> = 0.8281 + 0.0009 = 0.8290',
          '<i>D</i><sub><i>B</i></sub> = 1 − 0.8290 = 0.171',
          'Community A has <i>D</i> = 0.90, Community B has <i>D</i> = 0.17. Community A is far more diverse because its individuals are evenly distributed among species (high evenness), whereas Community B is dominated by one species.',
        ],
        ans: 'Community A has the higher Simpson’s Index of Diversity (<i>D</i> = 0.90 against 0.17); even though both have the same species count, A has greater evenness.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Alpha, Beta, and Gamma Diversity.</b> A region contains three forest patches. Patch 1 has species {A, B, C}; Patch 2 has {A, B, D, E}; Patch 3 has {B, D, F}. Calculate alpha, beta, and gamma diversity.',
        steps: [
          'Alpha diversity of each patch:<br>• Patch 1: <i>α</i><sub>1</sub> = 3<br>• Patch 2: <i>α</i><sub>2</sub> = 4<br>• Patch 3: <i>α</i><sub>3</sub> = 3',
          'Mean alpha: <i>ᾱ</i> = <frac><num>3 + 4 + 3</num><den>3</den></frac> = <frac><num>10</num><den>3</den></frac> ≈ 3.33.',
          'Gamma diversity (all species in region): {A, B, C, D, E, F} = 6 species.',
          'Beta diversity: <i>β</i> = <frac><num><i>γ</i></num><den><i>ᾱ</i></den></frac> = <frac><num>6</num><den>3.33</den></frac> ≈ 1.80.',
          'This means the whole region holds about 1.8 times as many species as an average patch: there is moderate species turnover between patches.',
        ],
        ans: 'Alpha ≈ 3.33 (average); Gamma = 6; Beta ≈ 1.80.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Interpretation of Index Values.</b> Assertion (A): A grassland with Shannon Index <i>H</i>′ = 2.8 is considered more diverse than a grassland with <i>H</i>′ = 1.4. Reason (R): Shannon Index increases with both the number of species and the evenness of their distribution. Options: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          'A is true: 2.8 > 1.4, and higher <i>H</i>′ means higher diversity. R is true and gives the correct biological reason: <i>H</i>′ is maximised when all species have equal abundance (high evenness) and the number of species is large. Since both conditions apply, R correctly explains A.',
        ],
        ans: '(a) Both true, R explains A.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define Shannon Index and state its unit. Why is it preferred over species richness alone?',
            a: '<i>H</i>′ = −∑<i>p</i><sub><i>i</i></sub> ln(<i>p</i><sub><i>i</i></sub>); unitless (log of a proportion has no unit). It combines species count (richness) with abundance distribution (evenness), making it more informative than a simple count.',
          },
          {
            q: '[NEET] A community has 5 species with proportions 0.5, 0.25, 0.125, 0.0625, 0.0625. Calculate Simpson’s Index of Diversity.',
            a: '∑<i>p</i><sub><i>i</i></sub><sup>2</sup> = (0.5)<sup>2</sup> + (0.25)<sup>2</sup> + (0.125)<sup>2</sup> + (0.0625)<sup>2</sup> + (0.0625)<sup>2</sup> = 0.25 + 0.0625 + 0.0156 + 0.0039 + 0.0039 = 0.3359. <i>D</i> = 1 − 0.3359 = 0.664.',
          },
          {
            q: '[CUET] Distinguish between alpha and gamma diversity with an example.',
            a: 'Alpha = species within one sample/habitat; gamma = total species across a region. Example: one forest patch (alpha) vs the whole mountain range (gamma).',
          },
          {
            q: '[NEET] Community X has 15 species; Community Y has 15 species. Can we conclude their diversities are equal? Give a reason.',
            a: 'No. Equal richness can go with different abundance distributions, which give different index values. Diversity depends on both richness and evenness.',
          },
          {
            q: '[NEET High-Difficulty] A pond has 8 species. Five species have 20 individuals each; three species have 2 individuals each. Calculate the Shannon Index.',
            a: 'Total individuals = 5 × 20 + 3 × 2 = 106. Proportions for common species = <frac><num>20</num><den>106</den></frac> = 0.1887; for rare species = <frac><num>2</num><den>106</den></frac> = 0.0189. Shannon calculation: five common species contribute 5 × (−0.1887 ln 0.1887) = 5 × 0.3147 = 1.573; three rare species contribute 3 × (−0.0189 ln 0.0189) = 3 × 0.0749 = 0.225. So <i>H</i>′ ≈ 1.573 + 0.225 ≈ 1.80.',
          },
          {
            q: '[CUET] If beta diversity among three or more habitats of a region is 3.0, what does this number mean biologically?',
            a: 'Beta diversity of 3.0 means the regional species pool (gamma) is 3 times the average local species count (alpha), indicating high species turnover among the habitats. (Two habitats can give at most 2.)',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 737–740 ─────────────────────────
  {
    n: 'B',
    title: 'Species-Area Relationship: Logarithmic Form and Slope Interpretation',
    extra: true,
    kalam: 'The slope z measures how quickly new species are encountered as area increases.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives both forms of the species-area equation (<i>S</i> = <i>CA</i><sup><i>z</i></sup> and log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>), states typical <i>z</i>-ranges for small and continental scales, and works a prediction and notes in one line that <i>C</i> is the species count at unit area. It does not go further into how to read the intercept of a fitted line, why the log-log line is used for prediction, or the limits of extending a fitted line beyond the areas it covers. Questions of this kind can be asked at 2-mark and high-difficulty level.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The log-log form.</b> Taking log of both sides of <i>S</i> = <i>CA</i><sup><i>z</i></sup>:<br>log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>',
      },
      {
        t: 'p',
        html: 'On a plot of log <i>S</i> (y-axis) against log <i>A</i> (x-axis), this is a straight line with slope <i>z</i> and intercept log <i>C</i>.',
      },
      {
        t: 'p',
        html: '<b>Interpreting <i>z</i> biologically.</b> The slope <i>z</i> measures how quickly new species are encountered as area increases:<br>• Small/regional scale (<i>z</i> ≈ 0.10–0.20): adding area largely re-samples the same species pool. The community is relatively homogeneous.<br>• Large/continental scale (<i>z</i> ≈ 0.60–1.20): adding area crosses major biogeographic boundaries, encountering entirely new species pools (different biomes, evolutionary histories). High species turnover (<i>β</i>-diversity) makes <i>z</i> steep.',
      },
      {
        t: 'p',
        html: 'The ratio of slopes: a continental <i>z</i> of 0.9 is about 6–9 times steeper than a local <i>z</i> of 0.10–0.15, reflecting vastly greater compositional change at the larger scale.',
      },
      {
        t: 'p',
        html: '<b>Interpreting <i>C</i> (the intercept).</b> When log <i>A</i> = 0 (i.e., <i>A</i> = 1 unit of whatever area unit is used), log <i>S</i> = log <i>C</i>, so <i>S</i> = <i>C</i> at a unit area. In practice, <i>C</i> represents the expected species count at a 1-unit reference area; it is a fitting constant that shifts the regression line up or down. Strictly, because <i>S</i> is a count and <i>A</i> carries units of area, <i>C</i> carries units of area<sup>−<i>z</i></sup>; only <i>z</i> is dimensionless.',
      },
      {
        t: 'p',
        html: '<b>Using the log form for prediction.</b> Given log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>:<br>1. Identify <i>C</i> and <i>z</i> from the equation.<br>2. Convert the target area <i>A</i> to log <i>A</i>.<br>3. Compute log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>.<br>4. Take antilog: <i>S</i> = 10<sup>log <i>S</i></sup>.',
      },
      {
        t: 'p',
        html: '<b>Key constraint.</b> The model is calibrated for the range of areas in the original data. Extrapolating far outside that range (e.g., from a 10-hectare survey predicting species on 10,000 hectares) is unreliable.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: '<b>Identifying Parameters and Predicting Richness.</b> A species-area study in a national park gives log <i>S</i> = 0.30 + 0.18 log <i>A</i> (<i>A</i> in hectares). (a) State the values of <i>C</i> and <i>z</i>. (b) Predict species richness for a 50-hectare area. (c) Is this a local or continental-scale study?',
        steps: [
          '(a) <i>C</i> = 10<sup>0.30</sup> = 1.995 ≈ 2.0 species at 1 hectare; <i>z</i> = 0.18.',
          '(b) For <i>A</i> = 50 ha: log <i>A</i> = log 50 = 1.699.',
          'log <i>S</i> = 0.30 + 0.18 × 1.699 = 0.30 + 0.306 = 0.606',
          '<i>S</i> = 10<sup>0.606</sup> ≈ 4.04 ≈ 4 species',
          '(c) <i>z</i> = 0.18 falls in the local/regional range (0.1–0.2), so this is a within-region study.',
        ],
        ans: '<i>C</i> ≈ 2, <i>z</i> = 0.18; ~4 species at 50 ha; local-scale study.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Why Continental <i>z</i> is Steeper.</b> Explain biologically why a continental-scale bird survey returns <i>z</i> = 0.9 while a park-scale survey of the same taxon returns <i>z</i> = 0.15.',
        steps: [
          'At the continental scale, each added unit of area crosses major biogeographic boundaries (deserts, mountain ranges, ocean barriers) that contain entirely different suites of species. The species pool changes completely, so each unit of added area brings many genuinely new species, making the slope steep (<i>z</i> ≈ 0.9).',
          'At the park scale, all patches share the same local species pool. Adding more park area mostly re-samples species already present; genuinely new species appear slowly, giving a shallow slope (<i>z</i> ≈ 0.15).',
          'The steep continental slope reflects high <i>β</i>-diversity (species turnover between biomes); the shallow local slope reflects low <i>β</i>-diversity (species pooling within a single biome).',
        ],
        ans: 'High species turnover across biogeographic zones at continental scale gives a steep slope; shared species pool within a region gives a shallow slope.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Interpreting the Intercept.</b> In a log-log regression, a student reports log <i>S</i> = 1.50 + 0.25 log <i>A</i>. What does the intercept value of 1.50 mean?',
        steps: [
          'When <i>A</i> = 1 hectare (because log 1 = 0): log <i>S</i> = 1.50, so <i>S</i> = 10<sup>1.50</sup> = 31.6 ≈ 32 species.',
          'Biologically, the intercept <i>C</i> ≈ 32 is the predicted species count at a reference area of 1 hectare for this regression. It is a fitted constant; it does not mean the model predicts 32 species at every site regardless of area, but rather sets the baseline for the log-scale line. The actual prediction at any other area uses both <i>C</i> and the slope <i>z</i>.',
        ],
        ans: '<i>C</i> = 10<sup>1.50</sup> ≈ 32 species at <i>A</i> = 1 hectare; it is the baseline species count anchored by the regression line.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Extrapolation and its Limits.</b> A researcher fits log <i>S</i> = 0.70 + 0.20 log <i>A</i> to a dataset covering 1–100 hectares. She uses it to predict richness for an area of 10,000 hectares. Evaluate this approach.',
        steps: [
          'The model was calibrated for the range 1–100 hectares. Extrapolating to 10,000 hectares (100 times the upper data limit) is unreliable because: (i) the relationship is a power law fitted over the 1–100 ha range, and the slope itself changes when whole new species pools are entered; (ii) at 10,000 hectares the researcher has almost certainly crossed into different biomes not represented in the original data, violating the assumption of a single homogeneous species pool; (iii) the linear log-log relationship typically holds within a scale range but bends at scale transitions.',
          'A better approach would be to use continental-scale data (<i>z</i> ≈ 0.6–1.2) for such large areas, or to fit a piecewise model.',
        ],
        ans: 'The extrapolation is unreliable. The model is valid only within the calibration range (1–100 ha). For 10,000 ha, a different slope (continental <i>z</i>) and possibly a different model form are needed.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the logarithmic form of the species-area relationship and label each term.',
            a: 'log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i>. <i>S</i> = species richness, <i>C</i> = intercept constant (species at unit area), <i>z</i> = slope (rate of species accumulation with area), <i>A</i> = area.',
          },
          {
            q: '[CUET] A log-log regression gives log <i>S</i> = 0.10 + 0.12 log <i>A</i>. Predict <i>S</i> for <i>A</i> = 100 hectares.',
            a: 'log <i>A</i> = 2; log <i>S</i> = 0.10 + 0.12 × 2 = 0.34; <i>S</i> = 10<sup>0.34</sup> ≈ 2.19 ≈ 2 species.',
          },
          {
            q: '[NEET] State the typical range of <i>z</i> for (a) small areas and (b) continental areas, and give one biological reason for the difference.',
            a: '(a) <i>z</i> = 0.10–0.20 (small/regional); (b) <i>z</i> = 0.60–1.20 (continental). Reason: large scales cross biogeographic boundaries with entirely different species pools (high turnover); small scales sample the same pool repeatedly (low turnover).',
          },
          {
            q: '[NEET High-Difficulty] Two studies on the same taxonomic group report <i>z</i> = 0.15 (local) and <i>z</i> = 0.85 (continental). The local study covers 0.1–50 hectares; the continental covers 10<sup>6</sup>–10<sup>9</sup> hectares. Explain why the intercepts of these two regressions cannot be directly compared.',
            a: 'The intercept <i>C</i> is the predicted species count at <i>A</i> = 1 unit of area. Because the two studies cover completely different ranges of area (0.1–50 ha versus 10<sup>6</sup>–10<sup>9</sup> ha), a reference area of 1 ha lies far outside the continental range, so the two <i>C</i> values are anchored to very different reference points. A direct numerical comparison of intercepts between scales is meaningless.',
          },
          {
            q: '[CUET] A student plots log <i>S</i> against log <i>A</i> and finds a straight line of slope 0.22. Is this a local or continental study?',
            a: '<i>z</i> = 0.22 sits just above the local range (0.1–0.2) and well below the continental range (0.6–1.2), so it is much nearer the local values: a regional-to-local scale study.',
          },
          {
            q: '[NEET] Why does the species-area curve flatten on ordinary (non-log) axes but remain linear on log-log axes?',
            a: 'On ordinary axes NCERT draws a rectangular hyperbola: richness rises steeply at small areas and more slowly at larger ones as the same species pool is re-sampled (a power law does not reach a plateau). On log-log axes, log <i>S</i> = log <i>C</i> + <i>z</i> log <i>A</i> is the equation of a straight line because the logarithmic transformation linearises the power-law relationship.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 740–743 ─────────────────────────
  {
    n: 'C',
    title: 'India as Megadiversity Nation: Endemism, Endemic vs Exotic, and India-Specific Threat Data',
    extra: true,
    kalam: 'Endemic species are those found naturally only in a particular, restricted geographic area and nowhere else in the world.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter states India holds 8.1% of recorded species on 2.4% of land area, names the three Indian hotspots and defines an endemic species in one line. It does not contrast endemic with exotic (introduced) species, does not give India-specific endemic counts, and does not address the threat profile of India’s endemic groups. These specifics can be asked as 1–2 mark questions and as matching-column items.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Endemic species</b> are those found naturally only in a particular, restricted geographic area and nowhere else in the world. They have evolved in isolation and survive only within that range.',
      },
      {
        t: 'p',
        html: '<b>Exotic (non-native/alien) species</b> are those introduced intentionally or accidentally by humans into regions outside their natural range. They are not part of the native assemblage and can become invasive.',
      },
      {
        t: 'p',
        html: '<b>Key distinction for exams:</b> Within its restricted home range an endemic species is native, never exotic. An exotic species, by definition, is native somewhere else. Whether a species counts as native, endemic or exotic is always judged relative to a stated region: a species endemic to the Western Ghats, for instance, is native there and found naturally nowhere else, whereas <i>Lantana camara</i> is exotic to India because its natural range lies in tropical America.',
      },
      {
        t: 'p',
        html: '<b>India’s major endemic groups (examples used here, not NCERT’s):</b><br>• Western Ghats: over 1,500 endemic flowering plant species; many endemic butterflies; many endemic amphibians and reptiles<br>• Himalaya: extensive endemic flora including many rhododendron and orchid species<br>• Indo-Burma: rich in endemic freshwater fish and amphibians',
      },
      {
        t: 'p',
        html: '<b>India’s exotic/invasive species (examples used here; NCERT names <i>Eichhornia</i>, <i>Parthenium</i>, <i>Lantana</i> and <i>Clarias gariepinus</i>):</b><br>• <i>Lantana camara</i>: invasive in Indian forests and grasslands, introduced as ornamental<br>• <i>Parthenium hysterophorus</i>: aggressive weed, introduced in contaminated wheat imports (widely stated; NCERT gives no route)<br>• <i>Eichhornia crassipes</i> (water hyacinth): invasive in wetlands and rivers<br>• <i>Clarias gariepinus</i> (African catfish): threatens native catfish populations<br>• <i>Prosopis juliflora</i>: invasive in arid and semi-arid regions',
      },
      {
        t: 'p',
        html: '<b>Why endemism matters for conservation:</b> Endemic species cannot be replaced if lost globally: they exist nowhere else. This makes endemic-rich hotspots high-priority conservation targets (priority also depends on how threatened they are: a hotspot needs both endemism and loss).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Endemic vs Exotic Identification.</b> Identify which species in the list are endemic to India and which are exotic:<br>(i) Western Ghats endemic frog <i>Hydrophylax malabaricus</i>;<br>(ii) <i>Lantana camara</i> introduced from tropical America;<br>(iii) <i>Bambusa bambos</i> (Indian bamboo), native to Indian forests;<br>(iv) <i>Eucalyptus globulus</i> introduced from Australia for pulp plantations.',
        steps: [
          'Native or endemic: (i) <i>Hydrophylax malabaricus</i> is found only in the Western Ghats: it occurs naturally nowhere else in the world. (iii) <i>Bambusa bambos</i> is native to India and found naturally in Indian forests, so it is not exotic; but it also grows naturally in neighbouring parts of South and Southeast Asia, so it is not endemic to India either.',
          'Exotic: (ii) <i>Lantana camara</i> and (iv) <i>Eucalyptus globulus</i> are both introduced from outside India.',
        ],
        ans: 'Endemic: (i); Exotic: (ii) and (iv); (iii) is native (neither exotic nor endemic).',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>India Megadiversity: Calculation.</b> India has 2.4% of the world’s land area but 8.1% of recorded species. A student claims India has more species per unit area than the global average. Verify this calculation.',
        steps: [
          'Global average species density = <frac><num>total recorded species</num><den>total world land area</den></frac>. Indian species density = <frac><num>0.081 × total recorded species</num><den>0.024 × total world land area</den></frac>.',
          'Ratio of Indian to global density:<br><frac><num>Indian density</num><den>Global density</den></frac> = <frac><num><frac><num>0.081</num><den>0.024</den></frac></num><den>1</den></frac> = <frac><num>0.081</num><den>0.024</den></frac> ≈ 3.375',
          'India has approximately 3.4 times the global average species density per unit area, confirming it is a megadiversity nation.',
        ],
        ans: 'India has ~3.4 times the global average species density per unit land area.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Why Endemic Species are Conservation Priorities.</b> Assertion (A): Endemic species require priority conservation attention. Reason (R): Endemic species are found in large numbers across many countries. Options: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          'A is true: endemic species are conservation priorities because they exist nowhere else; losing them means losing the species globally. R is false: by definition, endemic species are found only in a restricted area, not in large numbers across many countries. The reasoning directly contradicts the premise.',
        ],
        ans: '(c) A true, R false.',
      },
      {
        t: 'ex',
        tag: 'CUET / Match',
        q: '<b>Endemism and Hotspots.</b> Column I:<br>(P) <i>Hydrophylax malabaricus</i><br>(Q) Invasive weed from tropical America<br>(R) Indian hotspot that also includes Sri Lanka<br>(S) Endangered native tiger subspecies<br>Column II:<br>(i) Western Ghats–Sri Lanka hotspot<br>(ii) <i>Lantana camara</i><br>(iii) Bengal tiger (<i>Panthera tigris tigris</i>)<br>(iv) Endemic to the Western Ghats',
        steps: [
          '<b>Reasoning:</b> (P) <i>Hydrophylax malabaricus</i> is found naturally only in the Western Ghats, so it is endemic there (iv). (Q) <i>Lantana camara</i> is exotic, introduced from tropical America (ii). (R) The Western Ghats–Sri Lanka hotspot is the Indian hotspot that also includes Sri Lanka (i); like every hotspot it has more than 1,500 endemic vascular plants. (S) The Bengal tiger is a native Indian tiger subspecies (not exotic); it also occurs in neighbouring countries, so it is native rather than strictly endemic to India (iii).',
        ],
        ans: 'P–iv, Q–ii, R–i, S–iii.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define endemic species and exotic species. Give one example of each from the Indian context.',
            a: 'Endemic: found naturally only in a restricted area (e.g., <i>Hydrophylax malabaricus</i>, a frog found only in the Western Ghats). Exotic: introduced from outside natural range (e.g., <i>Lantana camara</i>, introduced from tropical America).',
          },
          {
            q: '[CUET] Why are endemic species given priority in hotspot conservation?',
            a: 'Endemic species exist only within the hotspot and nowhere else on Earth. If an endemic species becomes extinct within the hotspot, it is globally extinct: there is no other population to fall back on. This makes them irreplaceable and a high conservation priority.',
          },
          {
            q: '[NEET] Name the three biodiversity hotspots that extend into India and state one endemic group characteristic of each.',
            a: 'Western Ghats–Sri Lanka (more than 1,500 endemic vascular plants, many endemic butterflies and amphibians); Himalaya (endemic rhododendrons, orchids, mountain ungulates); Indo-Burma (endemic freshwater fish, amphibians, ~7,000 endemic plants).',
          },
          {
            q: '[NEET] <i>Parthenium hysterophorus</i> is an aggressive weed in Indian agricultural fields. Is it native or exotic to India? State its region of origin.',
            a: 'Exotic to India; native to tropical America (Mexico/Central America region). It was accidentally introduced through contaminated wheat imports (widely stated; NCERT gives no route).',
          },
          {
            q: '[CUET] If a species has <i>N</i> individuals and all of its individuals occur within one restricted geographic area, does it qualify as endemic? Explain.',
            a: 'Yes. If all <i>N</i> individuals, that is, the whole species, occur only within that one restricted area, the species is endemic to it. It would not be endemic if some individuals of the species also occurred naturally elsewhere; the defining feature is that the species occurs naturally nowhere else.',
          },
          {
            q: '[NEET High-Difficulty] Two species A and B each have 100 individuals. A is distributed across 5 countries; B is found only in the Western Ghats. Which faces higher global extinction risk and why?',
            a: 'Species B (Western Ghats endemic) faces higher global extinction risk. Species A occurs in 5 countries, so even if it goes extinct in one country, remnant populations survive elsewhere. Species B occurs only in the Western Ghats: a threat that covers that single area can remove the entire global population. This is why endemics in biodiversity hotspots are disproportionately threatened.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 743–746 ─────────────────────────
  {
    n: 'D',
    title: 'Extinction: IUCN Categories and Rate Distinctions',
    extra: true,
    kalam: 'The five past mass extinctions were natural events; the current one is categorically different because humans are the cause.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives the Evil Quartet, the 2004 IUCN figures (784 extinct over 500 years), the natural origin of the five mass extinctions and the human origin of the sixth, and the statement that the current rate is 100–1000 times the background rate. It does not define the IUCN Red List categories (CR, EN, VU), does not say what “threatened” means in the ~32% amphibian figure, and does not show how a rate per million species per year is applied to a group of species. These appear regularly in NEET MCQs and assertion-reason items (the book’s estimate from past papers, not official figures).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>IUCN Red List categories (key ones for examinations):</b><br>• <b>Extinct (EX):</b> No individuals remaining anywhere after exhaustive surveys over known and expected habitats.<br>• <b>Extinct in the Wild (EW):</b> Survives only in cultivation, in captivity or as a naturalised population well outside its past range.<br>• <b>Critically Endangered (CR):</b> Extremely high risk of extinction in the wild; criteria include population decline ≥ 80% over 10 years or three generations, whichever is longer, or fewer than 50 mature individuals remaining.<br>• <b>Endangered (EN):</b> Very high risk of extinction; criteria include population decline ≥ 50% over 10 years or three generations, whichever is longer.<br>• <b>Vulnerable (VU):</b> High risk of extinction; criteria include population decline ≥ 30% over 10 years or three generations, whichever is longer.<br>• <b>Near Threatened (NT):</b> Likely to become threatened in the near future.<br>• <b>Least Concern (LC):</b> Widespread and abundant.<br>• <b>Data Deficient (DD) / Not Evaluated (NE):</b> Not enough information or not yet assessed.',
      },
      {
        t: 'p',
        html: '<b>Where the figures come from.</b> The chapter’s figure of “~32% of amphibians threatened” is an IUCN Red List result: assessed amphibian species are placed in the categories above, and “threatened” counts those in CR, EN or VU (see worked example 3).',
      },
      {
        t: 'p',
        html: '<b>The rate statement.</b> The chapter says the current extinction rate is 100–1000 times the pre-human background rate. This means:<br>• Background (natural) rate: approximately 1 species per million species per year (natural turnover in stable ecosystems)<br>• Current rate: 100–1000 species per million species per year',
      },
      {
        t: 'p',
        html: 'This is the anthropogenic (human-caused) sixth mass extinction. The five past mass extinctions were natural events; the current one is categorically different because humans are the cause.',
      },
      {
        t: 'p',
        html: '<b>Natural vs current extinction, the key distinction for examinations:</b><br>• Natural background extinctions occur at the background rate through ecological and evolutionary processes (competition, slow climate change over geological time). The five past mass extinctions were also natural (for example volcanism, impacts, climate change) but were short episodes of much higher loss.<br>• Current extinctions are caused by the Evil Quartet (habitat loss, over-exploitation, invasive species, co-extinction) and occur at rates 100–1000 times faster.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Matching Threat Level to IUCN Category.</b> Place the following species in correct IUCN categories:<br>(i) A bird species with 40 mature individuals and declining;<br>(ii) a frog last seen 40 years ago with no individuals found despite exhaustive searches;<br>(iii) a fish with population reduced by 40% over 10 years due to dam construction;<br>(iv) a mammal with populations stable and widespread.',
        steps: [
          '(i) 40 mature individuals fits <b>Critically Endangered</b> (CR): one criterion for CR is fewer than 50 mature individuals remaining.',
          '(ii) Not found despite exhaustive surveys over many years = Extinct (EX). (If the searches were few, it stays Critically Endangered.)',
          '(iii) 40% decline over 10 years exceeds the 30% threshold for Vulnerable and approaches the 50% threshold for Endangered. If the trend continues, it will reach EN. Classification: Vulnerable (VU) based on current data.',
          '(iv) Stable and widespread = Least Concern (LC).',
        ],
        ans: '(i) CR; (ii) EX; (iii) VU; (iv) LC.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: '<b>Assertion-Reason on Extinction Rates.</b> Assertion (A): The ongoing sixth mass extinction is considered more worrying than the five past natural mass extinctions. Reason (R): The five past extinctions were caused by natural events whereas the current one is human-caused and far faster. Options: <b>(a)</b> Both true, R explains A; <b>(b)</b> Both true, R does not explain A; <b>(c)</b> A true, R false; <b>(d)</b> A false, R true.',
        steps: [
          'A is true: the sixth extinction is considered more worrying because it is human-driven and is running at 100–1000 times the natural background rate. R is true as the item states it: the past five were natural events and the present one is human-caused. The cause is the key distinction and it explains A. (The chapter compares the present rate with the natural background rate; the “far faster” in R is the item’s own wording.)',
        ],
        ans: '(a) Both true, R explains A.',
      },
      {
        t: 'ex',
        tag: 'CUET',
        q: '<b>Interpreting the Percentage of Threatened Species.</b> The chapter states ~32% of amphibians are threatened. Explain what “threatened” means in this context and which IUCN categories it encompasses.',
        steps: [
          'In IUCN terminology, “threatened” is a collective term for the three highest-risk categories: Critically Endangered (CR), Endangered (EN), and Vulnerable (VU). “Threatened” does NOT include Extinct (EX), Near Threatened (NT), or Least Concern (LC).',
          'So the statement “~32% of amphibians are threatened” means approximately 32% of the assessed amphibian species fall into CR, EN, or VU categories. The remaining ~68% of the assessed species are in EX, EW, NT, LC or DD; Not Evaluated (NE) species are outside the count.',
        ],
        ans: '“Threatened” = CR + EN + VU. The 32% figure means roughly one in three amphibian species faces a high to extremely high risk of extinction in the wild.',
      },
      {
        t: 'ex',
        tag: 'NEET High-Difficulty',
        q: '<b>Distinguishing Background and Current Rates.</b> A forest ecologist states: “At the natural background rate, we should lose about 0.1% of species per millennium. At current rates, we are losing species 500 times faster.” Calculate how many species would be lost over 100 years in a group of 10,000 species under (a) background rate and (b) current rate.',
        steps: [
          '(a) Background rate: 0.1% per millennium = 0.001 per 1,000 years = 10<sup>−6</sup> per year (1 species per million species per year). Over 100 years: 10,000 × 10<sup>−6</sup> × 100 = 1 species lost.',
          '(b) Current rate (500 times background): 500 × 10<sup>−6</sup> = 5 × 10<sup>−4</sup> per year. Over 100 years: 10,000 × 5 × 10<sup>−4</sup> × 100 = 500 species lost.',
          'This is 5% of the group in a century at the current rate, compared with 0.01% at the background rate.',
        ],
        ans: '(a) ~1 species; (b) ~500 species (5% of the group).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is the IUCN Red List? Name three categories of threatened species.',
            a: 'The IUCN Red List categorises the extinction risk of species based on quantitative criteria. Three threatened categories: Critically Endangered (CR), Endangered (EN), Vulnerable (VU).',
          },
          {
            q: '[NEET] Arrange in increasing order of extinction risk: EN, VU, EX, CR, NT.',
            a: 'NT < VU < EN < CR < EX (from lowest to highest extinction risk).',
          },
          {
            q: '[CUET] A species of freshwater turtle has a population of 40 mature individuals and is declining. According to IUCN criteria, which category does it fall into and why?',
            a: 'Critically Endangered (CR). One IUCN criterion for CR is population size fewer than 50 mature individuals, which applies here (40 individuals). Rapid ongoing decline compounds the risk, confirming CR.',
          },
          {
            q: '[NEET] Distinguish between the background extinction rate and the current extinction rate. What is the approximate multiplier?',
            a: 'Background rate: natural extinction over geological time, approximately 1 species per million species per year. Current rate: 100–1000 times faster due to human activities (the Evil Quartet). The approximate multiplier is 100–1000.',
          },
          {
            q: '[CUET] Why does “threatened” include CR, EN, and VU but not EX?',
            a: '“Threatened” means facing a high to extremely high risk of extinction in the wild in the near future. Extinct (EX) species are already gone: they are not facing a future risk. NT species are close to qualifying for a threatened category (or likely to qualify in the near future) but do not currently meet the criteria for CR, EN or VU.',
          },
          {
            q: '[NEET High-Difficulty] A rainforest fragment of 50 hectares shows 5 species extinctions over 20 years. The original species pool (before fragmentation) was 200 species. Calculate the rate of extinction per century. Compare this to the background rate of 1 species per million per year.',
            a: 'Observed rate = <frac><num>5 extinctions</num><den>20 years</den></frac> = 0.25 species per year = 25 species per century. Background rate for 200 species = 200 × 10<sup>−6</sup> = 2 × 10<sup>−4</sup> per year = 0.02 species per century. The observed rate is therefore <frac><num>25</num><den>0.02</den></frac> = 1,250 times the background rate: slightly above the textbook 100–1000 range, as expected for a heavily fragmented habitat. (A local fragment is not like for like with the global background rate; the arithmetic is a classroom illustration.)',
          },
        ],
      },
    ],
  },
];
