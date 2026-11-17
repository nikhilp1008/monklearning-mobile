# Biology 12 Chapter 12 (Ecosystem), review R3 (third expert review, whole chapter, as it now stands)

Share: the whole chapter as it stands after fixers F1 and F2: `content/textbooks/bio-12-12/topics-1-3.ts`, `topics-4-5-extras-a-b.ts`, `extras-c-f.ts` (Topics 01 to 05, Additional topics A to F), `lib/diagrams/biology-12-12.ts` (Figures 12.1 to 12.5), `lib/revise/keypoints-biology-12-12.ts` (52 points). Book pp. 659 to 713. Nothing in the repo was edited; no tsc, jest or git was run.

Method. My own pass came first: (1) a word-level diff (difflib on normalised words) of every app string against the page-tagged book text for pp. 659 to 713, with every difference read by hand; (2) a full read of every block of the three topic files, the key points and the diagram code; (3) page images of the five figure pages (663, 670, 676, 684, 689) compared with the drawing code (labels, arrows, directions, slices); (4) every number recomputed. Only after that did I read review-R1, review-R2, new-text-F1, new-text-F2 and the writer reports, to mark each flag NEW (not raised before) or REPEAT (raised before, by a reviewer or a writer, and not fixed or fixed only in part).

Transcription: faithful. Every difference between the app and the book is an allowed one (em dashes, "subtopic" to "topic", headings, (i)-(iv) to (a)-(d), labels on exam estimates, exam years to "a recent NEET paper", hyphen joins, the answer-not-printed-twice convention of writer 1) or a listed fixer change. No missing or duplicated sentence, no copied-wrong number, no wrong key. The errata: Topic 04's Exam Relevance carries the corrected "but check the current NTA syllabus for its status", and the old "dropped from the NEET 2026 syllabus" claim appears nowhere; Figure 12.4's return arrow starts at the Decomposers / P-solubilising bacteria box and ends in the soil solution, and Topic 04 Framework C says decomposers and phosphate-solubilising bacteria return phosphorus.

## Flags, most serious first

### 1. [NEW] Nutrient cycling and ecosystem services are presented as current NEET/NCERT content without the syllabus caveat the errata gave succession
- Where: Topic 04 Concept intuition, Exam Relevance (p. 680): "Nutrient Cycling is full-scope: CBSE asks a 2–3 mark carbon/phosphorus cycle or gaseous-vs-sedimentary question, and NEET often draws 1–2 questions a year, most often …"; Topic 04 MCQ 2 and 4 labels "(NEET-scope: nutrient)"; Topic 05 Exam Relevance (p. 687) "NEET asks it only occasionally, usually the US $33 trillion figure …"; Topic 05 Key definitions note "This split is NCERT’s wording and the one examined"; Topic 05 "which is why NCERT names them as the major source".
- What is wrong: the rationalised NCERT Class 12 Ecosystem chapter (2023 onward) keeps structure and function, productivity, decomposition, energy flow and ecological pyramids, and removes ecological succession, nutrient cycling and ecosystem services; the NEET-UG syllabus from 2024 follows it ("Ecosystems: patterns, components; productivity and decomposition; energy flow; pyramids of number, biomass, energy"). The errata softened the succession sentence to "check the current NTA syllabus", but the same box calls nutrient cycling "full-scope" for NEET, and Topic 05 says NEET asks ecosystem services. Additional F already says "Check the current NTA syllabus for your attempt year". A student could spend time on topics not examined, or (worse) trust a "the NCERT list" that is not in the current NCERT book.
- Fix [NEW]: Topic 04 Exam Relevance, replace from "Nutrient Cycling is full-scope:" to the end of the label with: "Nutrient Cycling appears in CBSE Boards as a 2–3 mark carbon/phosphorus cycle or gaseous-vs-sedimentary question, and has carried NEET questions in past papers, most often the “phosphorus is sedimentary, not gaseous” trap or reservoir matching (the book’s estimate from past papers, not official figures); check the current NTA syllabus for its status." Topic 05 Exam Relevance, after "(the book’s estimate from past papers, not official figures)." add: "Check the current NTA syllabus for its status." MCQ labels: "(NEET-scope: nutrient)" to "(nutrient cycling)". In Topic 05, "NCERT" in "which is why NCERT names them", "The standard NCERT list" and "NCERT’s wording and the one examined" to "NCERT (earlier editions)" or leave and rely on the added syllabus sentence (founder's choice).
- Kind: unclear or misleading (exam relevance). Source: book. Confidence: likely (from memory of the 2023 NCERT rationalisation list and the NEET 2024 syllabus; I could not read either document offline: the founder should confirm against the live NTA syllabus).

### 2. [NEW] Additional D, Practice 6 answer: number AND biomass pyramids said to invert "when one large producer supports many small consumers"
- Where: `extras-c-f.ts`, Additional D, Practice, item 6 answer (book p. 702).
- Says now: "…This makes an inverted pyramid of energy flow physically impossible, whereas number and biomass pyramids can invert when one large producer supports many small consumers."
- What is wrong: one large producer (a tree) inverts only the pyramid of numbers; its biomass pyramid stays upright (the chapter's own Topic 03 worked example 2, Additional F Q5: "biomass upright"). The biomass pyramid inverts in the sea, where a small, fast-renewed phytoplankton standing crop supports a larger consumer biomass. As printed the sentence contradicts two other places in the chapter.
- Fix [NEW]: "…This makes an inverted pyramid of energy flow physically impossible, whereas a pyramid of numbers can invert when one large producer (a tree) supports many small consumers, and a pyramid of biomass can invert in the sea, where a small, fast-renewed phytoplankton standing crop supports a larger biomass of consumers."
- Kind: biology error. Source: book (R2 flag 8 touched this answer for the energy wording only). Confidence: certain.

### 3. [REPEAT, R2 flag 13, fixed in part] Additional A, C:N table: "Optimal (fastest, balanced)" for 25–30 ∶ 1 contradicts "<25 ∶ 1 Fast" and "below 25 ∶ 1 decomposition is rapid"
- Where: `topics-4-5-extras-a-b.ts`, Additional A, Method, table "C:N bands", row 2 "Decomposition rate" cell (book p. 692); also key point topic 5 #2 ("decomposes best … below 25 ∶ 1 … it is fast").
- Says now: row 1 "<25 ∶ 1 | Fast"; row 2 "25–30 ∶ 1 | Optimal (fastest, balanced)"; paragraph above: "Below 25 ∶ 1 (e.g., animal tissue, legume residues), decomposition is rapid."
- What is wrong: the table calls two different bands the fastest. Low-C:N material decomposes at least as fast (it also releases surplus nitrogen as ammonium); 25–30 ∶ 1 is "optimal" for balanced composting (no net nitrogen drawn from the soil), not the fastest. F2 changed the example and the title but kept "fastest".
- Fix [NEW]: row 2 cell: "Optimal (fast and balanced: no nitrogen drawn from the soil)". Key point topic 5 #2 answer: "Detritus at about 25–30 ∶ 1 decomposes fast and in balance; above about 80 ∶ 1 (straw, woody stems) it is slow, because microbes must take nitrogen from the soil to grow; below 25 ∶ 1 (animal tissue, legume residues) it is also fast. …" (rest unchanged).
- Kind: number / internal contradiction. Source: book. Confidence: likely.

### 4. [NEW] Additional A, Worked example 3: "Higher moisture in the rainforest maintains aerobic conditions"
- Where: `topics-4-5-extras-a-b.ts`, Additional A, Worked examples, NEET High-Difficulty "Effect of Temperature and Moisture", step and answer (book p. 693).
- Says now: step "Higher moisture in the rainforest maintains aerobic conditions and supports greater microbial biomass."; answer "the temperate winter’s cold and often waterlogged conditions slow microbial enzyme activity …".
- What is wrong: moisture does not maintain aerobic conditions; too much water makes soil anaerobic (Topic 02 and this topic's own Practice 4: waterlogging slows decomposition). Moisture helps because microbes need water, as long as the soil stays aerated. The answer's "often waterlogged" temperate winter soil is unsupported (it is usually cold or frozen) and muddles the moisture point.
- Fix [NEW]: step: "Higher soil moisture in the rainforest (moist but well-aerated soil) supports a larger and more active microbial biomass." Answer: "Tropical conditions (warmth + moisture) accelerate enzymatic catabolism; the temperate winter’s near-freezing temperatures slow microbial enzyme activity, decelerating catabolism most severely."
- Kind: biology error. Source: book. Confidence: likely.

### 5. [REPEAT, writer-3 p. 702, not taken up by R2] Additional E: bees / honeybee given as a keystone species
- Where: `extras-c-f.ts`, Additional E, Method "Keystone species" ("Classic examples: sea otters …; elephants …; bees (pollinate crops)."); Practice 2 answer ("Example: sea otter (<i>Enhydra lutris</i>), elephant (<i>Elephas maximus</i>), or honeybee (<i>Apis</i> spp.)"); also Practice 5 answer "(a keystone-level service provider)" (book pp. 702, 704).
- What is wrong: a keystone species is defined by an effect far larger than its abundance; honeybees are abundant (often managed and introduced), and crop pollination is a service, not keystone status. Textbook keystone examples are the sea otter, the starfish <i>Pisaster</i> and elephants. A student who writes "honeybee" for "give one example of a keystone species" may lose the mark. The key points already avoid the bee (their header says so).
- Fix [NEW]: Method: "Classic examples: sea otters (control sea urchins → protect kelp forests); the starfish <i>Pisaster</i> (its removal lets mussels crowd out other shore species); elephants (create clearings and disperse seeds)." Practice 2 answer: "… Example: sea otter (<i>Enhydra lutris</i>) or elephant (<i>Elephas maximus</i>)." Practice 5 answer: replace "(a keystone-level service provider)" with "(an important service provider)".
- Kind: biology (loose example). Source: book. Confidence: likely.

### 6. [NEW] Unlabelled exam-frequency claims left in kalams and introductions (one of them in F2's own wording)
- Where and fix:
  a. Additional B kalam (p. 694): "NEET and CUET questions regularly ask for these precise sequences." The intro was softened and labelled; the kalam (the line shown on the topic card) was not, and R2 1g passed it as "labelled". Fix [NEW]: kalam "Each seral stage modifies the habitat in a way that makes room for the next."
  b. Additional C kalam: "…involve specific microbial transformations that are tested independently." (intro now says "can be tested"). Fix [NEW]: "These cycles share the gaseous/sedimentary distinction and involve specific microbial transformations."
  c. Additional E intro (p. 702): "These are tested in NEET high-difficulty and CUET application questions." Keystone species and valuation methods are not NCERT. Fix [NEW]: "These can appear in high-difficulty application questions."
  d. Additional A intro para 1 (F2's [NEW]): "…and ecosystem-service valuation with the keystone-species concept. Questions in NEET, CUET and CBSE Board papers draw on these layers." The main topics never touch keystone species (the sentence says the chapter "touches on" all five), and the last sentence is an unlabelled exam claim. Fix [NEW]: "…and ecosystem-service valuation, with the keystone-species concept that the chapter does not cover. High-difficulty questions can draw on these layers."
  e. Additional F, "Three Places to Drill": "because NEET often tests them" (F2) and A intro para 2 "that NEET and CUET often examine (the book’s estimate …)" are labelled or mild; leave.
- Kind: unclear or misleading (exam claims). Source: book (d: fixer). Confidence: certain.

### 7. [NEW] Additional A intro para 2 (F2's wording) says the same thing twice
- Where: `topics-4-5-extras-a-b.ts`, Additional A, Introduction, para 2.
- Says now: "The chapter names the five steps of decomposition and states that detritivores fragment while decomposers mineralise. It names earthworms and termites as examples of detritivores and says that decomposers mineralise. It does not name …"
- Fix [NEW]: "The chapter names the five steps of decomposition, gives earthworms and termites as detritivores that fragment detritus, and says that decomposers (fungi and bacteria) mineralise it. It does not name the other organisms involved (by genus), which enzymes drive catabolism, or how the carbon-to-nitrogen (C:N) ratio of detritus governs the rate. These are distinct, testable details that NEET and CUET often examine (the book’s estimate from past papers, not official figures)." (Checked against Topic 02 as built: earthworms and termites in Framework A step 1, fungi and bacteria throughout, no genus, no enzyme name, no C:N.)
- Kind: unclear (repetition). Source: fixer. Confidence: certain.

### 8. [REPEAT, R1 flag 9, fixed in part] Topic 03 cheat sheet still says "~90% lost as heat"
- Where: `topics-1-3.ts`, Topic 03, Cheat sheet, row "10% law (Lindeman, 1942)" (p. 679); Figure 12.3 drawn labels "~90% lost / as heat" (p. 676).
- Says now: "<i>E</i><sub><i>n</i>+1</sub> ≈ 0.1 <i>E</i><sub><i>n</i></sub>; ~90% lost as heat → chains limited to ~4–5 levels."
- What is wrong: the topic text, Framework A, the Figure 12.3 caption and the key points now say the 90% is "not passed on (most of it lost as heat, the rest left as waste and dead matter)"; R1 flag 9 listed the cheat sheet, but F1 left it, and "limited to ~4–5" is stricter than the topic's "usually 4–5 (a few reach six)".
- Fix [NEW]: "<i>E</i><sub><i>n</i>+1</sub> ≈ 0.1 <i>E</i><sub><i>n</i></sub>; ~90% not passed on (mostly lost as heat) → chains usually ~4–5 levels." Figure labels: founder decision already open (F1 decision 3); I recommend "~90% not passed on" in the drawing too, so the picture and its caption agree.
- Kind: biology (loose) / internal inconsistency. Source: book. Confidence: likely.

### 9. [NEW] Topic 03: "the lone exception being deep-sea hydrothermal vent communities"
- Where: `topics-1-3.ts`, Topic 03, Concept intuition, para 3 (p. 673).
- Says now: "The Sun is the only energy source for nearly all ecosystems (the lone exception being deep-sea hydrothermal vent communities)."
- What is wrong: chemosynthetic communities also live at cold seeps, whale falls and in some sealed caves (Movile Cave), so the vents are the best-known exception, not the only one; "only … nearly all … lone" also overstates in a single sentence.
- Fix [NEW]: "The Sun is the energy source for nearly all ecosystems (the main exception being chemosynthetic communities, such as those at deep-sea hydrothermal vents)."
- Kind: biology (overgeneral). Source: book. Confidence: likely.

### 10. [NEW] Topic 04 Framework A: "forest (climax; a forest where the climate allows)" (F1's wording)
- Where: `topics-4-5-extras-a-b.ts`, Topic 04, Key processes, Framework A, end of the xerarch and the hydrarch sequences.
- Says now: xerarch "→ <b>forest (climax; a forest where the climate allows)</b>"; hydrarch "→ <b>terrestrial forest (climax; a forest where the climate allows)</b>".
- What is wrong: the arrow still ends at "forest" and then qualifies it with "a forest where…": circular and hard to read. R1 flag 13 wanted the climax not to be fixed as forest.
- Fix [NEW]: xerarch "→ <b>climax community</b> (a forest, where the climate allows)"; hydrarch "→ <b>climax community</b> (a terrestrial forest, where the climate allows)".
- Kind: unclear wording. Source: fixer. Confidence: certain.

### 11. [NEW] Additional F, archetype 5 rule (2): "biomass pyramid can invert in aquatic ecosystems"
- Where: `extras-c-f.ts`, Additional F, archetype 5 "Approach" (p. 707).
- What is wrong: overgeneral. The chapter (after R1 flag 4) says the sea, and its own table calls most ponds "usually upright" for numbers and lists only "some ponds" as inverted biomass.
- Fix [NEW]: "(2) the biomass pyramid can invert in some aquatic ecosystems, typically the sea;".
- Kind: overgeneral. Source: book. Confidence: likely.

### 12. [NEW] Additional E Practice 5 (F2's wording) credits bees alone with the 75% figure
- Where: `extras-c-f.ts`, Additional E, Practice 5 answer.
- Says now: "Bees are small but provide pollination, a service that raises the yield of about 75% of the leading crop species and is essential for some."
- What is wrong: the 75% (Klein and colleagues, 2007) is for animal pollination of all kinds, of which bees are the main but not the only part.
- Fix [NEW]: "Bees are small but are the main animal pollinators, and animal pollination raises the yield of about 75% of the leading crop species and is essential for some. A small, easily overlooked group with a large effect on agriculture makes them functionally critical (an important service provider)." (last clause as in flag 5).
- Kind: number attribution. Source: fixer (from the book's 75%). Confidence: possible.

### 13. [NEW] Topic 04 Framework A hydrarch: "free-floating and rooted plants (e.g. Wolffia, Azolla)" names only free-floating examples; NCERT's text order differs
- Where: `topics-4-5-extras-a-b.ts`, Topic 04 Framework A (p. 682); Additional B hydrarch stage 3 "Free-floating plants" (p. 695).
- What is wrong: <i>Wolffia</i> and <i>Azolla</i> are free-floating; the rooted floating-leaved plants of this stage (<i>Nymphaea</i>, <i>Nelumbo</i>, <i>Trapa</i>) are not named. Also note for the founder: the NCERT text puts "free-floating angiosperms, then rooted hydrophytes" after the phytoplankton, while the NCERT figure (and the book) put submerged plants first; a student who meets the NCERT sentence may think the book's order is wrong.
- Fix [NEW]: Topic 04: "→ free-floating and rooted floating plants (e.g. <i>Wolffia</i>, <i>Azolla</i>; <i>Nymphaea</i>, <i>Trapa</i>)". Optional note after the hydrarch sequence: "(NCERT’s text gives the shorter order phytoplankton → free-floating plants → rooted hydrophytes → sedges and grasses → trees; its figure gives the stages above.)"
- Kind: incomplete example / unclear. Source: book. Confidence: possible.

### 14. [NEW] Additional F archetype 4: "Draw a quick two-by-two or three-by-three table" for four-item columns
- Where: `extras-c-f.ts`, Additional F, archetype 4 "Approach" (p. 707).
- Fix [NEW]: "Draw a quick four-by-four grid (one row for each item of Column I)."
- Kind: unclear. Source: book. Confidence: certain.

### 15. [NEW] Topic 05 Framework B (F1's wording) reads as a contradiction
- Where: `topics-4-5-extras-a-b.ts`, Topic 05, Framework B.
- Says now: "Every item in the NCERT list slots into one of these four (none falls under provisioning, which has no item in the NCERT list), which makes …"
- Fix [NEW]: "Every item in the NCERT list slots into regulating, supporting or cultural (the list has no provisioning item), which makes the list far easier to recall under exam pressure."
- Kind: unclear wording. Source: fixer. Confidence: certain.

### 16. [NEW] Key point topic 0 #2: the `why` does not explain the answer
- Where: `keypoints-biology-12-12.ts`, topic 0, second "remember" point (parts of an ecosystem; structural against functional).
- Says now: why "An aquarium has too few producers, and water too deep for light has no photosynthetic producers, so each needs input from outside."
- What is wrong: the question asks for the parts and the structural/functional split; the `why` talks about incomplete ecosystems, which the answer never mentions.
- Fix [NEW]: why "Structure is what is there and how it is layered; function is what the ecosystem does: making, breaking down and passing on matter and energy."
- Kind: key point mismatch. Source: key-point writer. Confidence: certain.

### 17. [NEW] Additional A kalam: "The C:N ratio of detritus determines decomposition speed."
- Where: Additional A kalam and the first sentence of "C:N ratio as rate controller" (p. 692).
- What is wrong: overgeneral; the chapter's own Topic 02 lists chemistry (lignin, chitin, nitrogen, sugars), temperature, moisture and oxygen; C:N is one control.
- Fix [NEW]: kalam and sentence: "The C:N ratio of detritus is one of the main controls on decomposition speed."
- Kind: overgeneral. Source: book. Confidence: likely.

## Earlier flags and fixes that I believe were applied wrongly or rest on a wrong claim
- R2 flag 2 says it is "certain that the book's 'below 10%' differs from NCERT's 'about 10%'". NCERT prints "contributions of other services like recreation and nutrient cycling, are less than 10 per cent each". The fixers were right to keep "less than 10%"; F1 founder decision 2 and F2 founder decision 1 can be closed: keep as printed.
- F1 founder decision 1 / F2 decision 6 (carbon 1% and 71%): these are NCERT's figures ("about 71 per cent carbon is found dissolved in oceans … the atmosphere only contains about 1 per cent of total global carbon"). Keep them in Framework C and the Figure 12.4 caption; adding them to the key point is optional.
- The Costanza half-share note (R1 flag 1, R2 flag 2): correct as applied (in the 1997 table nutrient cycling is about USD 17 trillion of 33; soil formation is small). Note that the paper's recreation, climate-regulation and habitat shares are also not NCERT's (each about 2% or less), so "treat these labels as NCERT's" is the right framing.
- R2 flag 13 applied in part (flag 3 above); R1 flag 9 applied in part (flag 8 above); R1 flag 13 applied as an awkward phrase (flag 10 above); R2 1g passed the B kalam as labelled (flag 6a above).
- No earlier fix introduced a factual error that I found; the A-R letters (F1 addendum) are consistent ((a) to (d), fourth "A false, R true") and the keys T1 (a), T2 (b), T3 (b), T4 (a), F Q7 (d), F Q8 (a) are right.

## Counts and values verified
- Every number recomputed: NPP 25,000 − 9,000 = 16,000; R 32,000 − 20,000 = 12,000; 48,000 → 4,800 → 480; 0.6 × 10<sup>5</sup> = 60,000 → 6,000 → 600 → 60 → 6 → 0.6; 9 × 10<sup>4</sup> → 9 × 10<sup>3</sup> → 900 → 90; PAR under 50% × 2–10% = at most 1–5% of incident (so 95–99% not fixed); 50,000 → 5,000 → 500 → 50; 20,000 → 2,000 → 200; assimilation 1,000 − 400 = 600, 60%; production 600 − 300 = 300, 30%; carnivore 200 − 120 = 80; F Q6 20,000 − 7,000 = 13,000 → 1,300 → 130 (key (a) right); 33 ÷ 18 = 1.83 ("nearly twice" holds); pie slices 21 + 6 + 6 + 8 + 9 + 50 = 100; 170 billion tonnes (NCERT); N<sub>2</sub> about 78%.
- Every MCQ and worked-example key checked against its question: 20 MCQs (Topics 01 to 05, four each), 20 topic worked examples, 15 Additional-topic worked examples, 6 F representative examples, 8 F graded questions: all keys correct and unique; every A-R fourth option is "A false, R true".
- Every Additional-topic introduction checked against Topics 01 to 05 as built: A (flag 6d, 7), B (true), C (true), D (true), E (true; exam sentence flag 6c).
- Notation: genus and species italic everywhere in text and key points, "spp." upright, <i>R</i>, <i>E</i><sub><i>n</i></sub>, <i>Q</i><sub>10</sub> italic; compound units with real superscripts (no slash); ratios with ∶; no em dash in the five files; fractions stacked (ten per cent law, efficiencies, 33 over 18).
- Errata (two entries) checked as above.

## Figures checked (page images against the drawing code)
- 12.1 (p. 663): GPP → NPP → secondary productivity, GPP → R; labels as printed; re-laid in one column. Matches.
- 12.2 (p. 670): detritus then the five steps in order, the "occur simultaneously" bracket over the five steps only, both rate notes. Matches.
- 12.3 (p. 676): solar → PAR (<50%) → producers (~2–10% of PAR) → herbivores → carnivores → top carnivores, three "×10% / ~90% lost as heat" transfers, closing note. Matches (caption amended by F1; see flag 8).
- 12.4 (p. 684): carbon panel (CO<sub>2</sub> reservoir ↔ oceans sink, photosynthesis down, respiration/decomposition/combustion up); phosphorus panel (rock → weathering → soil solution, dashed run-off to sediments, uptake to producers, producers → decomposers, return arrow from decomposers / P-solubilising bacteria to the soil solution, as the errata require). Matches.
- 12.5 (p. 689): six slices in the book's order, soil formation half the circle, labels "~50%", "~6%", "<10%", "(remainder)", footer. Matches.

## Could not check
- The live NTA syllabus and the current NCERT book (flag 1): offline; from memory.
- I did not render the app's SVGs (the brief for this run forbids jest); figures were checked from the drawing code (coordinates, arrow ends, label strings) against the page images, and R1 and the diagram agent report the rendered output.
- The Costanza 1997 table and Klein 2007 figures are from memory (about 85% sure on both).

## Overall judgement
The chapter is accurate and faithfully transcribed, and the two earlier rounds removed most of the book's overstatements. What is left is a short list: one plain contradiction that a teacher would mark wrong (flag 2, biomass inversion in D Practice 6), one wrong mechanism (flag 4, moisture "maintains aerobic conditions"), an internal contradiction in the C:N table (flag 3), a weak keystone example (flag 5), and the syllabus caveat for nutrient cycling and ecosystem services (flag 1), which matters more than any single fact because it decides whether a NEET student should study two whole topics. The rest are wording and labelling fixes, several of them in the fixers' own new text.

17 flags: 14 NEW, 3 REPEAT (3, 5, 8; flag 6a was seen by R2 and passed, so it is counted NEW). Serious (would teach a wrong fact or mislead on what is examined): 5 (flags 1, 2, 3, 4, 5).
