# Biology 12 Chapter 11, writer 1 (Topics 01 to 03, pp. 601 to 624)

File: `content/textbooks/bio-12-11/topics-1-3.ts` (only file touched). eslint clean. Narrow jest run: the only failures are undrawn fig ids (11.1 to 11.6, diagram agent's; 11.6 is writer 2's) and `b11-17` figure captions with em dashes (another chapter, not mine). No failure names Biology 12 Chapter 11 text.

## Boundaries (checked on the page text and page images 603, 610, 611, 617 to 620, 622 to 624)
Confirmed as in the brief: Topic 01 starts low on p. 601 (heading, Exam Relevance box; Section 1.1 is p. 602) and ends p. 608; Topic 02 pp. 609 to 615; Topic 03 pp. 616 to 624; Topic 04 starts at the top of p. 625. No difference. Part 3.4 is "Worked Examples", the others "Worked Questions" (parts titled accordingly).

## Counts (each topic: 8 parts; worked 4 `ex`; practice 5 items; MCQ 4; pitfalls 4; pro-tip 1; cheat sheet rows 6/6/6)
- 01 Organism and Its Environment...: tables 2, memory hook p, fig 11.1 (caption p. 604, drawn p. 605).
- 02 Responses to Abiotic Factors & Adaptations: tables 2, fig 11.2 (caption p. 612, drawn p. 613).
- 03 Population Attributes & Growth: 3 `formula` blocks, 4 `def`, 1 growth-model table, derivations as `p` (equation lines inside), figs 11.3 (caption p. 617, drawn p. 618), 11.4 and 11.5 (captions p. 620, drawn p. 621).
- Fig ids used: b12-11-fig-11.1, .2, .3, .4, .5. No unnumbered drawing on pp. 601 to 624.

## Changes to the book's text (all pages)
- Every em dash (about 170) replaced by a colon, comma, brackets or full stop; no sense changed except where noted below. Part titles: "Derivations — Exponential and Logistic Growth" is "Derivations: exponential and logistic growth"; "Step 1 — …" is "Step 1: …".
- "subtopic" to "topic": p. 601 box ("later subtopic"), p. 603 ("This subtopic", "held back for the population subtopics" is "population topics"), p. 604 ("in this subtopic"), p. 609 box ("most scoring subtopics"), p. 609 "In the previous subtopic" is "In Topic 01", p. 617 ("This subtopic does have formal derivations" on p. 619), p. 623 ("in this subtopic").
- p. 619 "(derived in §3)" is a table note: "Derived in the part “Derivations: exponential and logistic growth” of this topic."
- "(see next page)" dropped from the five captions (captions belong to the diagrams). Figure captions not copied.
- Plain-text table title "Tolerance-classification terms (high-frequency in MCQs)" (p. 603/604): title shortened, the parenthesis became the table note labelled "the book’s estimate from past papers, not official figures".
- Errata layouts applied: p. 611 "Adaptation" four-item run-on is a bulleted list (heading sentence in its own paragraph); every stacked fraction (growth-model table, cheat sheet) is a `<frac>`; Q4 unit set as part of `ans`: "(i) 37.5 ind. yr<sup>−1</sup>; (ii) 50 ind. yr<sup>−1</sup>" (the boxes' units).
- Book slash fractions stacked: p. 623 practice answer 3 "15/25", answer 4 "ln 2/r", "0.69/0.69", answer 1 "(K − N)/K", dN/dt, p. 624 "D = N/S", "K/2" everywhere, p. 622 practice 2 option (d) "K/(1 + e^−rt)". Kept as a slash (fraction inside a subscript, exception): p. 622 Q4 "dN/dt |N=K/2" subscript "N=K/2".
- Examples: "Q1 — [tag]." labels dropped, tag = text in brackets; "Answer: (c)." kept inside the step (ans '' for non-numerical items); numerical results (880 fish, 443 mites, Q4) are `ans`, steps end before the result.
- Exam statements labelled "the book’s estimate from past papers, not official figures": the three Exam Relevance boxes (pp. 601, 609, 616; none has a year), p. 603/604 "high-frequency in MCQs", p. 607 pitfall "A startling number of NEET marks are lost", p. 608 "this is the standard NEET coexistence question". Not labelled (no frequency): p. 616 "The examiner almost always rigs r and t" is copied (see below). No exam years on these pages.
- Assertion-reason practice items print no options (p. 607 item 5, p. 614 item 5, p. 623 item 5, each "Choose the correct A–R option."): standard four options appended as NEW WORDING: "Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true."
- Worked-example and MCQ options in letters (a) to (d), `correct` = position; fourth A-R option in the printed worked A-Rs (pp. 606, 612) is "A false, R true" (no "both false" on these pages).
- "Mnemonic(s):" label dropped in `aids` (pp. 608, 615, 624). Cheat-sheet B, I, D, E (p. 624, printed upright) are set italic as variables. p. 603 table "Water" row: "freshwater < 5" copied.
- Notation: variables italic with real subscripts; units with no-break space where a value stands before a unit (°C); emphasis italics dropped (e.g. "does", "net", "dispersion: uniform, random, clumped"); "Opuntia" italic; Greek, ≈, ⇒, ∫ real characters.
- p. 625 headings of Topic 04 not touched.
- `formula` blocks with an empty legend: vital index (the book has no symbols). Change-in-density legend lists only N_t (B and D are defined nowhere in 3.2; see below).

## "The chapter never covers X" claims
None on pp. 601 to 624 (this topic block has no Additional-topic introduction). Near misses to check later: p. 601 "This chapter deliberately stays at the two smallest levels — organism and population" (consistent with Topics 01 to 04, though Topic 04 is interspecific interactions, which is community level; low). p. 603 "biotic interactions … are held back for the population subtopics": true (Topic 04).

## Suspected book errors and overgeneral claims (page, exact words, why, correction, confidence)
1. p. 617: "Population density (D) — … D = N/S" while the same page and cheat sheet use D for deaths (N_t+1 equation, "Mortality (D)"). Symbol clash; suggest "ρ" or write "density" for the first and keep D for deaths. High.
2. p. 617: "if N_t is the density at time t" while N is "total number of individuals". N_t is a number, not a density (density is N/S). Say "population size". High (NCERT writes N_t as population density but the equation adds counts).
3. p. 617: "Natality / birth rate (b) — new individuals added per capita per unit time" and the equation uses B, D (numbers) which are never defined in 3.2 (only on p. 624). Add "B = births, D = deaths in the period". High.
4. p. 619 / 620: "Premise. … every individual realises its full breeding potential" fine; "Step 4 — … Growth rate is maximal where its own slope is zero, i.e. at N = K/2": correct; label "(enrichment)" is meaningless in the heading (low).
5. p. 622 Q1: "Find the fish density" but answer 880 fish is a number (size), not a density (see 2). Recomputed: 800 + (220 − 140) = 880. Correct.
6. p. 623 MCQ 1: "Population density … increases only when (B + I) > (D + E)": true by the identity, but the stem uses "density" for a count; also an overstated "only" for density (area changes also change density). Low.
7. p. 623 pitfall 1: "If a question mentions carrying capacity, the answer is logistic — full stop." Overgeneral (a question can ask about K in another context, e.g. harvest, or exponential growth "no K"). Suggest "usually points to logistic growth". Medium.
8. p. 623 pitfall 2: "is the most common numerical error in this subtopic": unsupported superlative; label or drop. p. 623 Pro-tip: "The examiner almost always rigs r and t": unsupported. Medium.
9. p. 616 box: "the single most exam-dense block of the chapter", "NEET almost always lifts 2 questions", p. 601 "one of the highest-yielding ecology chapters", p. 609 "perennial NEET favourite", "among the most 'scoring' subtopics": superlatives, labelled, content unverified. High (as unsupported).
10. p. 609/610 table: "Regulate … All birds and mammals". Overgeneral: hibernating bats, hummingbirds in torpor, and heterotherms do not hold a constant temperature all the time (NCERT: regulators are "some organisms", e.g. birds and mammals). Suggest "Most birds and mammals". Medium-high. p. 611: "True regulators — birds and mammals" same.
11. p. 610/611/614: "~99% of animals and nearly all plants are conformers" / "Roughly 99% of animals … conform" is the NCERT statement ("99 per cent of animals and nearly all plants cannot maintain a constant internal environment"); but p. 612 Q1 "most animals and nearly all plants" is fine; "conform" vs "cannot regulate": a conformer is one that does not regulate, but many animals regulate partially (p. 609 itself says "partial regulators at best"). Low.
12. p. 610/611: kangaroo rat "meeting its water needs from internal fat oxidation" and "manufactures water internally by oxidising fat": NCERT: "capable of meeting all its water requirements through its internal fat oxidation (in which water is a by-product)". Fat oxidation gives metabolic water but desert rodents also get water from dry seeds; "never needs to drink" is the NCERT line. Low.
13. p. 610/615: "Antarctic fish with antifreeze solutes" (p. 610) and "antifreeze proteins" (p. 611): inconsistent wording; antifreeze glycoproteins/proteins. Low.
14. p. 615 cheat sheet: "Physiological (… CAM, antifreeze fish, blubber)": blubber is a structural (morphological/anatomical) layer, and p. 610 lists "thick cuticle and sunken stomata" as morphological while CAM is physiological; blubber classification inconsistent with p. 611. Low-medium.
15. p. 614 MCQ 3 distractor (b): "which the lizard notably lacks the ability to use for this": lizards do regulate partly physiologically; sentence is unsupported. Suggest "(b) refers to internal function, which this behaviour does not change". Medium.
16. p. 611: "Cold-climate mammals follow Allen’s Rule — shorter ears, limbs, and tails" (also p. 614 practice 5, p. 615 cheat sheet): Allen's rule is a tendency ("generally", NCERT says mammals from colder climates "generally have shorter ears and limbs"); copied as printed. Low.
17. p. 611: "Over days the body acclimatises, chiefly by producing more red blood cells": NCERT adds decreased binding affinity of haemoglobin and faster breathing; "chiefly" is an overstatement. Low-medium.
18. p. 610: Hibernation example "Bears, frogs": NCERT says bears; frogs also hibernate; bear winter dormancy is torpor rather than deep hibernation (biologists differ). Low.
19. p. 603 table: Temperature anchor "> 45–50 °C (deserts, thermal springs)": thermal springs exceed 100 °C (p. 611 itself says above 100 °C); NCERT gives "> 50 °C in tropical deserts in summer". Low-medium. Salinity "freshwater < 5; marine 30–35; hypersaline > 100": NCERT says inland waters < 5 ppt (freshwater is strictly < 0.5 ppt), sea 30–35, hypersaline lagoons > 100: matches NCERT; "inland water" is the NCERT word. Low.
20. p. 602: "four nested levels … organism, population, community, and the biome": NCERT lists organism, population, community, biome; ecosystem and biosphere are omitted here (NCERT Chapter 13 intro). Low. "The Earth’s tilt and its orbit hand different latitudes different amounts of solar energy" fine.
21. p. 606 Q4 / 602: "Two bird species feeding in the same tree can coexist permanently": "permanently" overstated (niche difference is necessary, not sufficient); the answer (a) is the book's. Low-medium.
22. p. 602 "this is precisely what lets many species coexist": overgeneral (competitive exclusion needs a niche difference, other factors too). Low.
23. p. 619 "r … (per unit time)", "characteristic values differ by species (it is small for large slow breeders, large for tiny fast breeders)": fine.
24. p. 616 "Darwinian (reproductive) fitness, i.e. a high r": NCERT says "high r value" fitness; fine.
25. p. 617/619 "Dispersion — uniform, random, or clumped" and "Vital index = natality/mortality × 100": vital index is "births/deaths × 100": fine; but "natality" and "mortality" here are rates, not counts, ok. Low.
26. p. 616: "exponential … tracing a steepening J-shaped curve … the world Malthus warned about … resources crawl up arithmetically": Malthus' claim; fine.
27. Statement checks that passed: K is "the maximum number the habitat can support", not "maximum ever reached" (p. 616, 617 limiting-conditions note says fixed K "idealisation"). Growth rate greatest at N = K/2 and zero at 0 and K: correct; p. 623 MCQ 3 distractor (c) "2K … dN/dt < 0": recomputed r·2K·(K−2K)/K = −2rK < 0, correct; (d) "N = 0 … rate ≈ 0" correct.

## Recomputed numbers (all correct, none differ)
- p. 622 Q1: 800 + [(180 + 40) − (110 + 30)] = 800 + 80 = 880.
- Q3: 60 × e^(0.2×10) = 60 × e² ≈ 60 × 7.39 = 443.4 (true e² = 7.389, 443.3): 443 mites.
- Q4: 0.1 × 500 × (2000 − 500)/2000 = 0.1 × 500 × 0.75 = 37.5 ind. yr⁻¹; K/2 = 1000: 0.1 × 1000 × 0.5 = 50 ind. yr⁻¹ (unit just outside the box on the page; set in `ans`).
- Practice 3: 15/25 = 0.6 per plant per year (the stem says per year). Practice 4: t = ln 2 / 0.69 = 1 h (ln 2 = 0.693 so ≈ 1.0 h). Q2 key (c) K, practice 2 key (b), MCQ keys: 1 (c), 2 (a), 3 (b), 4 (b); Topic 01 MCQ keys (c), (b), (b), (b); Topic 02 MCQ keys (c), (c), (c), (b): all verified against their explanations.
- Age pyramid text (p. 623 pitfall, p. 617 caption, Figure 11.3): broad base expanding, equal-width bars stable (the figure draws the pre-reproductive bar slightly wider than the post-reproductive, stable), narrow base declining. Consistent.

## Figures seen on my pages
Drawn pages: 605 (Fig 11.1: tolerance curves; the stenothermal curve is the narrow one, zones marked on it), 613 (Fig 11.2), 618 (Fig 11.3, three age pyramids), 621 (Figs 11.4 and 11.5; axes Population Density (N) 0 to 100, Time (t) 0 to 12, K labelled at 100 in 11.4; 11.5 marks lag, acceleration (log phase), deceleration, asymptote N = K, N = K/2 maximum growth rate). No other drawing on pp. 601 to 624. Fig 11.4 legend prints "Logistic: dN/dt = rN(K N)/K" in the dump (the minus lost); read as (K − N) on the image check pending for the diagram agent (I did not view p. 621 as an image).

## Not checked / limits
- I did not view page images for pp. 601, 602, 604 to 609, 612, 614 to 616 (text from the dump, which is clean for prose; tables on pp. 603, 610 were verified on the image). p. 621 not viewed as an image.
- Fonts/display tests (display-fonts, display-fit) not run (not requested).
