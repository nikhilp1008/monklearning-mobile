# Biology 12 Chapter 13, review R3 (third independent review): the whole chapter as it now stands

Share: content/textbooks/bio-12-13/topics-1-3.ts, extras-a-d.ts, extras-e-f.ts; lib/diagrams/biology-12-13.ts; lib/revise/keypoints-biology-12-13.ts. Book pp. 714 to 758 (bio12.pdf / bio12.paged.txt). Nothing in the repo edited; no tsc, jest or git run.

Method: own full pass first. Every app string compared with the book by a word-level diff script (book text for pp. 714 to 733, 734 to 746, 747 to 758 against the strings of each file), then the page images of pp. 717, 719, 725, 730, 732 against the drawing code. Every number recomputed. Every key checked against its question. Every Additional-topic introduction checked against Topics 01 to 03 as built. Every [NEW] line in new-text-F1.md and new-text-F2.md read for correctness and overclaiming. Only then R1 and R2 were read; each flag below is marked NEW (not raised before) or REPEAT (raised before, not fixed or fixed wrongly).

## Flags, most serious first

### 1. Core zone of a biosphere reserve: the chapter now contradicts itself  [NEW in Topic 02; R2 flag 20 fixed only F and the key points]
- Where: topics-1-3.ts, Topic 02, "Key concepts, definitions and frameworks", Biosphere Reserve zonation paragraph (p. 723); Topic 02 Practice 4 (q and a, p. 726); Topic 02 Cheat sheet row "Biosphere reserve zones" (p. 727).
- Says now: "<b>Core zone:</b> legally protected; no human activity permitted."; Practice 4 q "...and state which permits no human activity." a "Core (no human activity), buffer, transition/manipulation."; Cheat sheet "Core (no human activity) → Buffer → Transition."
- Wrong: core zones allow non-destructive research and monitoring. Additional topic F Q11 and the Topic 1 key point were corrected to "strictly protected; only non-destructive research and monitoring", so the Topic 02 text, its practice item and its cheat sheet now teach the opposite of F and the revise card.
- Fix [NEW]: zonation bullet "<b>Core zone:</b> legally protected; no settlement or human use, only non-destructive research and monitoring." Practice 4 q [NEW] "Name the three zones of a biosphere reserve and state which is the most strictly protected." a [NEW] "Core (strictly protected; only non-destructive research and monitoring), buffer, transition/manipulation." Cheat sheet [NEW] "Core (strictly protected) → Buffer → Transition."
- Kind: biology error / internal contradiction. Source: book (fix half-applied by us). Confidence: likely.

### 2. F Archetype 6 (c): "z = 0.25 falls in the within-region band (0.1–0.2 ...)"  [REPEAT: R2 flag 23 applied incompletely]
- Where: extras-e-f.ts, Additional topic F, "The Recurring Archetypes", 6, worked representative, step (c) (p. 754).
- Says now: "(c) <i>z</i> = 0.25 falls in the within-region band (0.1–0.2, or just above it for a regional study). A continental <i>z</i> would be 0.6–1.2. Reading: 0.25 is nearer the within-region band (about 0.1–0.2, sometimes a little higher) than the continental 0.6–1.2. This is a <b>within-region / landscape-scale</b> study."
- Wrong: 0.25 does not fall in 0.1–0.2; the fixer added the "Reading:" sentence but kept the false clause, so the step now says both. Topic 01 Example 3 says correctly "sits just above".
- Fix [NEW]: "(c) <i>z</i> = 0.25 lies just above the within-region band (0.1–0.2) and far below the continental band (0.6–1.2), so it is much nearer the within-region values. This is a <b>within-region / landscape-scale</b> study."
- Kind: number / self-contradiction. Source: book, fix incomplete. Confidence: certain.

### 3. Figure 13.1 still draws a ceiling the text now says does not exist  [REPEAT: R1 flag 1, left as a founder decision]
- Where: lib/diagrams/biology-12-13.ts, Figure 13.1 left case (curve S = 4.6A/(25 + A), dashed line labelled "plateau") and caption CAP131 (book pp. 716 to 717); against Topic 01 Pitfall 2 "Treating the curve ... as one with a hard ceiling" and B Practice 6 "(a power law does not reach a plateau)".
- Says now (caption): "...rises steeply with area A and then more slowly, levelling off (a rectangular hyperbola; NCERT's description, strictly a power law)."; drawing: a true asymptote at 4.6 labelled "plateau".
- Wrong: the student sees a labelled plateau and "levelling off" on the figure while two text blocks tell them not to think of a ceiling. Also (book's, schematic) the two panels are different functions: the right line (C = 1, z = 0.2) gives S(100) = 10^0.4 = 2.5, the left curve gives 3.7.
- Fix: preferred, redraw the left curve as S = C A^z (for example C = 1, z = 0.2 rescaled to the same axes, or the book's points with z about 0.3) and drop the dashed "plateau" line. If the book's drawing is kept, caption [NEW]: "Species–area relationship. Left: on arithmetic axes, species richness <i>S</i> rises steeply with area <i>A</i> and then ever more slowly (NCERT calls this curve a rectangular hyperbola; the dashed 'plateau' is the book's sketch, since the power law <i>S</i> = <i>C</i><i>A</i><sup><i>z</i></sup> has no ceiling). Right: on log–log axes, log <i>S</i> plotted against log <i>A</i> is a straight line of slope <i>z</i> and intercept log <i>C</i>."
- Kind: figure error / internal contradiction. Source: book. Confidence: certain (that the two disagree); founder's call on the remedy.

### 4. Evil Quartet: an order of harm is still asserted in four places  [REPEAT: R1 flag 7 applied only in part]
- Where: Topic 01 "Memory hook" (p. 716); Topic 01 Cheat sheet row label (p. 721); F Distribution table row 1 (p. 750).
- Says now: hook "<b>H</b>abitat loss > <b>O</b>ver-exploitation > <b>A</b>lien species > <b>C</b>o-extinction (HOAC). ... the order of the other three is not fixed."; cheat sheet "Evil Quartet (order of harm, “HOAC”)" with "> ... > ... >"; F "“Evil Quartet” order (HOAC) is asked as a direct-recall item."
- Wrong: the ">" signs and the label "order of harm" still rank all four, in the same block that says only the first is ranked. R1 proposed commas; the fixer kept ">".
- Fix [NEW]: hook "Memory hook (the book's order): <b>H</b>abitat loss, <b>O</b>ver-exploitation, <b>A</b>lien species, <b>C</b>o-extinction (HOAC). Habitat loss and fragmentation is generally ranked the most important cause; the order of the other three is not fixed." Cheat sheet label "Evil Quartet (memory order “HOAC”)", note "<b>H</b>abitat loss & fragmentation (generally ranked first), then <b>O</b>ver-exploitation, <b>A</b>lien species, <b>C</b>o-extinction." F row "The four causes of the Evil Quartet (memory order HOAC) are asked as a direct-recall item."
- Kind: overgeneral. Source: book. Confidence: likely.

### 5. "older NCERT texts print 14; the later official count is 18" implies NCERT now prints 18  [NEW; R1 flag 14a wording]
- Where: Topic 02, "In situ machinery (India)", protected-area bullet (p. 723).
- Says now: "India has <b>18 biosphere reserves</b> (older NCERT texts print 14; the later official count is 18)."
- Wrong: to my knowledge the current NCERT Class 12 text still prints "14 biosphere reserves, 90 national parks and 448 wildlife sanctuaries"; "older" suggests a newer NCERT gives 18. A NEET item keyed to NCERT would expect 14.
- Fix [NEW]: "India has <b>18 biosphere reserves</b> by the current official count (NCERT prints 14)."
- Kind: dating / attribution. Source: ours (R1 wording). Confidence: likely.

### 6. Amazon "about 40,000 plant species": NCERT says more than 40,000  [NEW; R1 flag 18 wording, F1 item 3 asks the founder to confirm]
- Where: Topic 01, Concept intuition, paragraph 3 (p. 715).
- Says now: "The Amazon basin alone holds about 40,000 plant species, more than most temperate countries."
- Wrong: NCERT: the Amazonian rain forest "is home to more than 40,000 species of plants". "About" undercounts NCERT's figure.
- Fix [NEW]: "The Amazon basin alone holds more than 40,000 plant species, more than most temperate countries."
- Kind: number. Source: ours. Confidence: likely.

### 7. Topic 03 Practice 2: the order of plants and "other animals" cannot be settled from the chapter's figures  [NEW]
- Where: Topic 03, Practice exercises 2 (q and a, p. 731).
- Says now: q "Arrange in decreasing order of number of described species: plants, insects, all (non-insect) animals." a "Insects (~49%) > plants (~22%) > all other animals (~21%) (animals are about 70%, insects about 70% of animals)."
- Wrong: plants 22 against other animals 21 rests on rounded figures; the chapter itself says animals are "more than 70%" and plants "under ~22%", which would put other animals at 21% or more and plants at 22% or less, so the second and third places can swap. Only "insects first" is safe.
- Fix [NEW] answer: "Insects (about 49%) come first. Plants (about 22%) and all other animals (about 21%) are nearly equal on the chapter's rounded figures, so only the first place is certain: insects > plants ≈ other animals." (Or replace the item with "Which of the three has the most described species?")
- Kind: misleading / MCQ-style key. Source: book. Confidence: likely.

### 8. D Example 3: "Not Evaluated" counted among assessed species  [NEW; R2 flag 3 wording]
- Where: extras-a-d.ts, Additional topic D, Worked example 3, step 2 (p. 745).
- Says now: "...approximately 32% of the assessed amphibian species fall into CR, EN, or VU categories. The remaining ~68% are distributed among EW, NT, LC, DD and NE (and the few EX)."
- Wrong: NE species have, by definition, not been assessed, so they cannot be part of the "remaining 68% of assessed species".
- Fix [NEW]: "The remaining ~68% of the assessed species are in EX, EW, NT, LC or DD; Not Evaluated (NE) species are outside the count."
- Kind: biology error. Source: ours. Confidence: certain.

### 9. B introduction now understates Topic 01 on the intercept  [NEW; interaction of R1 flag 5 and R2 flag 4a]
- Where: Additional topic B, Introduction (p. 737).
- Says now: "It does not go further into what the intercept means for a fitted line, why the log-log line is used for prediction, or the limits of extending a fitted line beyond the areas it covers."
- Wrong: after the R1 fix, Topic 01's "note on units" says "<i>C</i> is a fitted constant, the species count at unit area on the fitted line", and the "where" line names log C as the intercept. The first clause is no longer true as written.
- Fix [NEW]: "The chapter gives both forms of the species-area equation (...), states typical <i>z</i>-ranges for small and continental scales, works a prediction and notes in one line that <i>C</i> is the species count at unit area. It does not go further into how to read the intercept of a fitted line, why the log-log line is used for prediction, or the limits of extending a fitted line beyond the areas it covers. Questions of this kind can be asked at 2-mark and high-difficulty level."
- Kind: false "chapter does not cover" claim. Source: ours (introduced by the fixes). Confidence: certain.

### 10. Sacred groves: "Sarguja–Chanda–Bastar belt (Chhattisgarh/Madhya Pradesh)"  [NEW]
- Where: Topic 02, "In situ machinery (India)", sacred-groves bullet (p. 723).
- Wrong: NCERT writes "the Sarguja, Chanda and Bastar areas of Madhya Pradesh" (pre-2000 boundaries). Today Sarguja and Bastar are in Chhattisgarh, and Chanda is the old name of Chandrapur, in Maharashtra. The book's parenthesis is a mix of both and puts Chanda in neither.
- Fix [NEW]: "the <b>Sarguja, Chanda and Bastar areas</b> (NCERT places them in Madhya Pradesh; Sarguja and Bastar are now in Chhattisgarh, Chanda (Chandrapur) in Maharashtra)." Minimum: "(Madhya Pradesh, as NCERT names them)".
- Kind: fact / geography. Source: book. Confidence: likely.

### 11. F Archetype 1 describes the item the wrong way round  [NEW]
- Where: Additional topic F, The Recurring Archetypes, 1, "What it looks like" (p. 751).
- Says now: "A single statement with four options: three are textbook definitions, one is a distractor that swaps a key word."
- Wrong: the worked representative (and every such item) has one correct option and three distractors.
- Fix [NEW]: "A single statement with four options: one is the textbook definition, the other three are distractors that swap a key word."
- Kind: unclear / wrong description. Source: book. Confidence: certain.

### 12. D Example 2: "far faster than the geological-time-scale natural events" against D Method "short episodes of much higher loss"  [NEW]
- Where: Additional topic D, Worked example 2, step (p. 744), against the [NEW] Method line (p. 744).
- Says now: "...occurs at 100–1000 times the natural rate, which is far faster than the geological-time-scale natural events."
- Wrong: the Method (fixer F2) now says the past mass extinctions were natural "but were short episodes of much higher loss"; the example says the current rate is far faster than them. NCERT compares the present rate only with the pre-human background rate; whether it exceeds the past mass-extinction rates is not settled.
- Fix [NEW]: "A is true: the sixth extinction is considered more worrying because it is human-driven and is running at 100–1000 times the natural background rate. R is true: the cause is the key distinction. The faster rate (which R implies by the “far faster” characterisation) is the reason A holds."
- Kind: overclaim / internal contradiction. Source: book. Confidence: possible to likely.

### 13. F Q6 answer: the parenthesis reopens the ambiguity the stem fix closed  [NEW; fixer F2 wording]
- Where: Additional topic F, A Graded Practice Set, Q6 answer (p. 756).
- Says now: "(c): ... The 30 % and 50 % options are not the threshold the criterion uses (a region that has lost 70 % has also lost more than 30 %), and the criterion is Myers’s, with the 1,500 endemic plant condition."
- Wrong: the parenthesis tells the student that (a) is also true, which is exactly what the "(the threshold value)" stem was added to rule out; the sentence is hard to read. The stem's "more than 1,500" also differs from Topic 02's "at least 1,500".
- Fix [NEW] answer: "(c): the hotspot threat criterion is that at least 70 % of the original vegetation has been lost (no more than 30 % remains). 30 % and 50 % are not the threshold, and 90 % is stricter than it. The criterion is Myers’s, together with at least 1,500 endemic vascular plants." Stem: "(at least 1,500 endemic plant species)".
- Kind: unclear MCQ solution. Source: ours. Confidence: likely.

### 14. C Example 4: (P) still matches (iv) only as a tautology  [REPEAT: R2 flag 13b fixed awkwardly]
- Where: Additional topic C, Worked example 4, question and reasoning (p. 742).
- Says now: (P) "an endemic amphibian of the Western Ghats, taken as a species" … (iv) "any endemic amphibian"; reasoning "(P) an endemic amphibian of the Western Ghats, taken as a species, is an endemic species (iv)."
- Wrong: "taken as a species" is unclear to a student, and (iv) "any endemic amphibian" is not a Column II answer; the pair matches word for word, so the item tests nothing.
- Fix [NEW]: (P) "<i>Hydrophylax malabaricus</i>" and (iv) "Endemic to the Western Ghats"; reasoning "(P) <i>Hydrophylax malabaricus</i> is found naturally only in the Western Ghats, so it is endemic there (iv)." (Uses the chapter's own Example 1 species.)
- Kind: unclear matching item. Source: book, fix awkward. Confidence: likely.

### 15. 34 against 36 hotspots: two unlabelled claims about examiners  [NEW]
- Where: Topic 02 "Number of hotspots" (p. 723); F Traps table row "34 vs 36 hotspots", column 2 (p. 755).
- Says now: "this 34-vs-36 gap is a deliberate trap."; "Most answer keys say 34".
- Wrong: claims about examiners' intent and about "most answer keys" that nobody can check; the Lessons ask for these to be removed or labelled.
- Fix [NEW]: Topic 02 "In an NCERT-based exam, answer 34 unless the question cites a current source." (delete the last clause). F row column 2: "Answer keys based on NCERT say 34".
- Kind: unqualified claim. Source: book. Confidence: likely.

### 16. F Traps "°F vs °C": "the correct answer is “none of these”"  [NEW]
- Where: Additional topic F, The Traps, row "°F vs °C in cryopreservation" (p. 754).
- Wrong: that is the answer only when no option gives −196 °C; stated as a rule it is overgeneral.
- Fix [NEW] column 2: "−196 °F is offered in place of −196 °C → reject it (if no option gives −196 °C, the answer is “none of these”)".
- Kind: overgeneral. Source: book. Confidence: likely.

### 17. D Practice 6: "at the upper end of (slightly above) the textbook 100–1000 range"  [NEW]
- Where: Additional topic D, Practice 6 answer (p. 746).
- Wrong: 1,250 is outside the range; "at the upper end of" and "slightly above" say different things.
- Fix [NEW]: "...= 1,250 times the background rate: slightly above the textbook 100–1000 range, as expected for a heavily fragmented habitat."
- Kind: number wording. Source: book. Confidence: certain.

### 18. D Practice 5: "NT species are likely threatened"  [NEW]
- Where: Additional topic D, Practice 5 answer (p. 746).
- Wrong: Near Threatened species are not threatened; they are close to qualifying, or likely to qualify soon, for a threatened category.
- Fix [NEW]: "NT species are close to qualifying for a threatened category (or likely to qualify in the near future) but do not currently meet the criteria for CR, EN or VU."
- Kind: biology wording. Source: book. Confidence: certain.

### 19. E Method "Limitation": second sample confused with R  [NEW]
- Where: Additional topic E, Method, "Limitation" (p. 748).
- Says now: "if the second sample is too small (<i>R</i> is small), the estimate becomes unreliable".
- Wrong: the second sample is <i>n</i>; <i>R</i> is the number of marked animals in it. A large second sample can still have a small <i>R</i> (Example 4: <i>n</i> = 20, <i>R</i> = 1).
- Fix [NEW]: "if few marked animals are recaptured (<i>R</i> is small), the estimate becomes unreliable (division by a small number inflates the estimate)."
- Kind: notation / unclear. Source: book. Confidence: certain.

### 20. Key points: hunting is a "fifth" cause in one point and a "fourth" in another  [NEW]
- Where: keypoints-biology-12-13.ts, topic 0 Remember 2 `why` ("so it is not a separate fifth cause") against topic 8 Common mistakes ("Hunting as a separate fourth cause") and F Traps row ("Hunting is listed as a fourth cause").
- Fix [NEW] topic 0 why: "Hunting is a form of over-exploitation, so it is not a separate cause."
- Kind: inconsistency. Source: ours. Confidence: certain (low stakes).

### 21. Figure 13.6: schematic values captioned as Tilman's  [NEW]
- Where: diagrams, Figure 13.6 caption CAP136 (book p. 731 caption, p. 732 drawing).
- Says now: "Total biomass versus year in low-diversity and high-diversity plots (Tilman): more species gives steadier and more productive communities."
- Wrong: the twelve points are the book's illustration, not Tilman's Cedar Creek data; a student could quote "mean 51 against 76" as his result.
- Fix [NEW]: append "(illustrative values, not Tilman's data)". Same note in the book caption copy if it is shown.
- Kind: misleading attribution. Source: book. Confidence: possible.

### 22. Duplicated clause in the z-band readings  [NEW; fixer wording]
- Where: Topic 01 Worked example 3 (c) (p. 718); Additional topic B Practice 5 answer (p. 740).
- Says now (Topic 01): "...sits just above the within-region band (0.1–0.2) and well below the continental band (0.6–1.2): it is nearer the within-region band (about 0.1–0.2, sometimes a little higher), so this is a regional-scale study"; B Practice 5 repeats the same pair of sentences.
- Wrong: not false, but it states the band twice in one sentence; plain wording reads better.
- Fix [NEW] Topic 01: "(c) <i>z</i> = 0.25 sits just above the <b>within-region</b> band (0.1–0.2) and well below the <b>continental</b> band (0.6–1.2), so it is much nearer the within-region values: this is a regional-scale study (a single landscape, not whole continents)." B Practice 5 [NEW]: "<i>z</i> = 0.22 sits just above the local range (0.1–0.2) and well below the continental range (0.6–1.2), so it is much nearer the local values: a regional-to-local scale study."
- Kind: unclear wording. Source: ours. Confidence: certain (style).

### 23. <i>Rauvolfia vomitoria</i> "across the Himalayan range" (note only)  [NEW]
- Where: Topic 01 Key concepts table row 1 (p. 715), MCQ 1 (p. 720), key point topic 0 mix-up.
- Note: this is NCERT's own example, but <i>R. vomitoria</i> is an African species; the Himalayan reserpine plant is <i>R. serpentina</i>. NEET quotes NCERT verbatim, so no text change is proposed; the founder may want a one-line note: [NEW] "(NCERT's example; the Indian reserpine plant is <i>Rauvolfia serpentina</i>.)"
- Kind: biology (NCERT oddity). Source: book (NCERT). Confidence: likely.

## Earlier flags applied wrongly or incompletely
- R2 flag 20 (core zone): applied in F Q11 and the key points only; Topic 02 text, Practice 4 and cheat sheet keep "no human activity" (flag 1).
- R2 flag 23 (archetype 6): the "Reading" sentence was added but the false "falls in the within-region band" was kept (flag 2).
- R1 flag 7 (HOAC): "(worst)" replaced, but the ">" chain and "order of harm" label kept, and F's "order (HOAC) is asked" kept (flag 4).
- R1 flag 14a: its wording "older NCERT texts print 14" was applied; I believe current NCERT still prints 14 (flag 5).
- R1 flag 18: "about 40,000" applied; NCERT says "more than 40,000" (flag 6).
- R2 flag 3: the inserted "(and the few EX)" sentence lists NE among assessed species (flag 8).
- R2 flag 13b: "taken as a species" applied; the item is still a tautology (flag 14).
- R1 flag 5 + R2 flag 4a: the two fixes together left B's introduction partly untrue (flag 9).
- R1 flag 1: the figure was left as a founder decision; text and figure now disagree (flag 3).
All other R1 and R2 fixes listed in new-text-F1.md and new-text-F2.md are in the files as listed, and their [NEW] wording is correct and plain except where flagged above.

## Counts verified
- Structure: Topics 01 to 03 have 8 parts each; 4 worked examples, 5 practice items, 4 MCQs, 4 pitfalls, 1 pro-tip and a cheat sheet (6 / 8 / 6 rows, one aid each) per topic; 5 tables; figure blocks 2 / 1 / 3 with the six briefed ids. A to E: 4 worked examples and 6 practice items each; F: distribution table (4 rows), 6 archetypes with 6 worked representatives, traps table (10 rows), 12 graded items, 3 study tips. Key points: 15 for topics 0 to 2, 2 each for 3 to 8; topic indexes correct.
- Book comparison: no omitted or duplicated sentence found beyond the listed [NEW] changes; no em dash in any of the five files; no "Sub-04", "subtopic" or "Section N" reference left in the text (comments only); the errata passage "Why conserve at all? Three argument-types: ..." reads correctly; all assertion-reason items use "A false, R true" as option (d); the book's "Both false" item in F is standardised.
- Topic 01: 338 + 359 + 87 = 784; 12 / 23 / 32 / 31% match NCERT; 27 species in 20 years; >15,500 threatened; tropics 23.5° N to 23.5° S; birds 1,400 / >1,200 / 105 / 56; rainforest 14% to under 6%; Ex 3: C = 10^1.40 = 25.12, log S = 0.50 + 1.40 = 1.90, S = 79.4; z ranges 0.1–0.2 and 0.6–1.2.
- Topic 02: 1,500 of about 300,000 = 0.5%; 70% lost = 30% remaining; dates 1971, 1972, 1973, 1992 (twice), 2002; Hailey, Kaziranga (NP 1974), Gir (1965), Bandipur (1974) later than Hailey; CBD text adopted Nairobi May 1992, opened for signature at Rio; cryopreservation −196 °C. Every in situ / ex situ example in the right class (text, table, Figure 13.3, MCQs, Example 1).
- Topic 03: 1.5 ÷ 7 = 21.4%; 0.7 × 0.7 = 0.49; 49 + 21 = 70; 70 + 22 + 8 = 100; India 8.1 ÷ 2.4 = 3.375; 45,000 ÷ 0.22 = 204,545 (about 1.6 lakh plants undiscovered), 90,000 ÷ 0.22 = 409,091 (about 3.2 lakh animals): "well over a lakh" and "several lakh" hold.
- A: H′ terms 0.3466 + 0.3466 + 0.2846 + 0.2303 = 1.2080; D_A = 0.90, D_B = 1 − 0.8290 = 0.171; ᾱ = 10/3, β = 6 ÷ 3.333 = 1.80; practice D = 1 − 0.3359 = 0.664; pond H′ = 5 × 0.3147 + 3 × 0.0749 = 1.573 + 0.225 = 1.798.
- B: 10^0.30 = 1.995; 0.18 × 1.699 = 0.306, 10^0.606 = 4.04; 10^1.50 = 31.6; 0.10 + 0.24 = 0.34, 10^0.34 = 2.19; 0.9 ÷ 0.15 = 6, 0.9 ÷ 0.10 = 9.
- C: 0.081 ÷ 0.024 = 3.375. D: 0.001 per 1,000 years = 10^−6 per year; 1 and 500 species; 5% and 0.01%; 5 ÷ 20 = 0.25 per year = 25 per century; 200 × 10^−6 = 2 × 10^−4 per year = 0.02 per century; 25 ÷ 0.02 = 1,250; IUCN thresholds 80 / 50 / 30% (A2), fewer than 50 mature individuals (CR D), order NT < VU < EN < CR < EX.
- E: 56 ÷ 5 = 11.2, × 500 = 5,600; 80 × 60 ÷ 12 = 400; 50 × 20 ÷ 1 = 1,000; 60 × 80 ÷ 16 = 300; 100 × 100 ÷ 5 = 2,000; 50 × 50 ÷ 3 = 833. F: 35 + 30 + 20 + 15 = 100; archetype 6 as Topic 01 Ex 3.
- Keys: Topic MCQs (c), (b), (b), (d); (b), (c), (c), (b); (b), (c), (b), (b). Worked-example answers (c), (c), (a), (b), (b), (c) in Topics; A (a), C (c), C.4 P–iv Q–ii R–i S–iii, D (a); F representatives (d), (c), (a), A–IV B–I C–II D–III, (c), and Q1 to Q12 b, b, b, c, a, c, c, b, b, c, c, b. All correct and the only correct option (Q6 see flag 13; Topic 03 Practice 2 see flag 7).
- Italics: <i>Mangifera indica</i>, <i>Rauvolfia vomitoria</i>, <i>Catharanthus roseus</i>, <i>Eichhornia</i>, <i>Parthenium</i>, <i>Lantana</i>, <i>Clarias gariepinus</i>, <i>Sophora toromiro</i>, <i>Hydrophylax malabaricus</i>, <i>Bambusa bambos</i>, <i>Eucalyptus globulus</i>, <i>Panthera tigris tigris</i>, <i>Parthenium hysterophorus</i>, <i>Eichhornia crassipes</i>, <i>Prosopis juliflora</i>, <i>Ectopistes migratorius</i>, <i>Columba livia</i> correct; variables S, C, A, z, H′, D, p_i, M, n, R, N italic; real superscripts and stacked fractions present.
- Key points: every point's question, answer and why checked against the text; all agree except flag 20 and the core-zone mismatch of flag 1 (the key point is the correct side).

## Figures checked (page images rendered with pdftoppm and compared with the drawing code)
- 13.1 (p. 717): axes, ticks, words, plateau 4.6, curve 2.04 at A = 20 and 3.68 at A = 100, log line z = 0.2 from log C = 0, slope triangle (1.2, 0.24) to (1.9, 0.38): matches the book (see flag 3).
- 13.2 (p. 719): 5 + 5 wing rivets, 8 + 8 fuselage rivets, popped top 2nd and 7th and bottom 8th, keystone ringed on the upper wing, both labels: matches.
- 13.3 (p. 725): six in situ and six ex situ items in the book's order, cryopreservation (−196 °C) highlighted: matches; every item in the right class.
- 13.4 and 13.5 (p. 730): five rows, callout, 70 / 22 / 8 bar; pie 8 / 22 / 21 / 49 clockwise from 12 o'clock, notes: match; the two figures agree (49 + 21 = 70).
- 13.6 (p. 732): twelve points per series agree with the page to within 1 unit; means 611 ÷ 12 = 50.9 and 915.3 ÷ 12 = 76.3; ranges 55.7 and 15.8: matches (see flag 21).

## Could not check
- The app's own rendering of the six figures: jest (and so the diagram dump) was off limits for this review, so the drawings were checked from the code against the page images, not as rendered SVG; layout, fonts and the Android look are unchecked.
- NCERT wording (14 biosphere reserves in the current edition, "more than 40,000" Amazon plants, the Sarguja/Chanda/Bastar sentence, "Rauwolfia vomitoria ... Himalayan ranges") is from my recollection of the NCERT text, not a consulted copy; confidence stated per flag.
- IUCN criteria from memory of the 2001 v3.1 categories; Chanda = Chandrapur from general knowledge.

## Overall
The chapter is a faithful transcription and every number, key and figure value recomputes correctly. The fixers' work is mostly sound. What remains are places where a fix was applied in one part of the chapter and not carried to another (core zone, HOAC order, the z = 0.25 reading, the figure's plateau). A few fixer sentences are themselves slightly wrong (NE among assessed species, "older NCERT", "about 40,000", B's introduction now understating Topic 01). The rest are smaller book overclaims in F and D. None of the keys is wrong.

Summary: 23 flags; 19 NEW, 4 REPEAT (flags 2, 3, 4, 14); 3 serious (flags 1, 2, 3).
