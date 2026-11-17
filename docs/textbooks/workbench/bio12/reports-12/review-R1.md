# Biology 12 Chapter 12 (Ecosystem), review R1: Topics 01 to 05, Figures 12.1 to 12.5, key points for topic indexes 0 to 4

Share: Topics 01 to 03 (`topics-1-3.ts`), Topics 04 and 05 (the Topic part of `topics-4-5-extras-a-b.ts`, before Additional topic A), `lib/diagrams/biology-12-12.ts` (all five figures), key points with `topic` 0 to 4 (25 points). Book pp. 659 to 691 (figure pages 663, 670, 676, 684, 689). Nothing edited.

Method: a word-level (4-gram) comparison of the whole app text of Topics 01 to 05 against the page-tagged book text, both directions (everything not matched was read by hand; the only differences are the allowed ones: em dashes, "subtopic" to "topic", part headings, the added "(the book's estimate ...)" labels, practice answers set apart, hyphen-wrap joins), plus a read of every block, every cross, ratio and MCQ key, and the five figure pages rendered from the PDF and compared with the code.

Overall: the transcription is faithful, with no missing or duplicated sentence, no copied number wrong, every key and every example answer attached to the right item. The numbers all recompute. The faults are in the book's biology, mostly overgeneral or loose statements, plus three plain wrong ones (pond energy, glucose "reserve food", Costanza label). The key points file has already dropped most of the book's looser claims; a few flags below also hit it.

## FLAGS (most serious first)

### 1. Costanza: "soil formation about 50 per cent" is almost certainly a mislabel (NCERT's, copied by the book)
- Where: Topic 05, every place: Key definitions "Value breakdown (Costanza estimate)"; Framework C; Worked example 3 (and its `ans`); Practice 4 answer; MCQ 3 ("Which contributes the largest share ..." key (c)) and its solution; pitfall 2; cheat-sheet "Value breakdown" row and "Soil takes half" mnemonic; Figure 12.5 (slice, caption "Soil formation accounts for about 50% of the total"); p. 688 to 691; Topic 05 kalam is unaffected. Key point (topic 4, "Which service has the largest share") already carries the note.
- Says now: "soil formation accounts for about 50% of the total; recreation and nutrient cycling are less than 10% each; climate regulation and wildlife habitat are about 6% each."
- Wrong: in Costanza et al.'s own table (Nature, 1997) the roughly half share (about US $17 trillion of 33) is nutrient cycling; soil formation is a small item. NCERT's labels look swapped, and "nutrient cycling < 10%" cannot hold with the paper. NEET follows NCERT, so the option keyed (c) stays the exam answer.
- Fix [NEW], add once after the definition and (short) after each place: "(This split is NCERT's wording and the one examined. In Costanza et al.'s original 1997 table the share of about half belongs to nutrient cycling, so treat these labels as NCERT's.)" Do not change the keys. Add the same sentence to the Figure 12.5 caption.
- Kind: biology error (book/NCERT). Source: book. Confidence: likely (about 75 per cent; from memory of the paper's table).

### 2. Pond "none of these is imported ... the same fixed energy ... keep the unit ticking"
- Where: Topic 01, Concept intuition, the pond paragraph (p. 659 to 660).
- Says now: "None of these is imported from outside on a daily basis: the same fixed energy and recycled nutrients keep the unit ticking, which is exactly what “self-sustaining” means."
- Wrong: sunlight reaches the pond every day, so energy IS imported daily; only the matter is recycled. It also contradicts Topic 03 ("energy ... enters ... from the Sun", "never to return"). The writer flagged this; ruling below.
- Fix [NEW]: "None of these living members has to be brought in from outside: the pond receives sunlight every day, and the same recycled nutrients keep the unit ticking, which is exactly what “self-sustaining” means."
- Kind: biology error. Source: book. Confidence: certain.

### 3. Glucose called "a reserve food"
- Where: Topic 04, Concept intuition, "Think about it this way..." paragraph (p. 681).
- Says now: "glucose, for example, is a reserve food made inside the plant, not a biogeochemically cycled nutrient, a distinction examiners like to test."
- Wrong: glucose is the transport and respiratory sugar; the plant's reserve food is starch (or sucrose/fructans). The point (a food molecule is not a cycled nutrient element) is right.
- Fix [NEW]: "glucose, for example, is a food molecule the plant makes, not a nutrient element that is cycled, a distinction examiners like to test."
- Kind: biology error. Source: book. Confidence: certain.

### 4. Biomass pyramid "inverted in a pond" (NCERT's example is the sea); propagates
- Where: Topic 03: table row Biomass ("pond / open-sea aquatic (tiny phytoplankton biomass at base)"); Framework B step 3 ("a pyramid of biomass can invert in a pond (small phytoplankton standing crop supports a larger fish biomass at a moment)"); Worked example 4 Reason ("The pyramid of biomass is inverted in an aquatic (pond) ecosystem") and its Evaluate R step; Practice 4 answer ("biomass inverts in a pond"); Practice 5 (question "Explain why the biomass pyramid is inverted in the pond but upright in the forest" and its answer); MCQ 2 nudge "(single tree; pond)"; cheat-sheet "pond → biomass"; pitfall wording is fine. The key points already say "sea".
- Wrong: NCERT gives the sea; most ponds (and lakes with rooted plants) have an upright biomass pyramid, and the book's own Number row calls a pond "usually upright".
- Fix [NEW]: replace "pond" by "sea (open-sea aquatic ecosystem)" in each place above, for example table cell "sea (tiny phytoplankton biomass at base, turning over fast); some ponds"; Ex 4 Reason "The pyramid of biomass is inverted in the sea."; Practice 5 question "A sea and a forest receive comparable sunlight. Explain why the biomass pyramid is inverted in the sea but upright in the forest, even though the energy pyramid is upright in both."; nudge "(single tree; sea)"; cheat sheet "sea → biomass".
- Kind: biology error / overgeneral. Source: book. Confidence: likely.

### 5. "Energy and matter enter only through producers"; aquarium or deep ocean "lacks producers"
- Where: Topic 01 Framework A step 2 ("Energy and matter enter only through producers, so they anchor the description."); Limiting conditions (2) ("an aquarium or the deep aphotic ocean lacks producers, so it cannot self-sustain"); Practice 5 answer ("Producers are effectively absent/insufficient, so it cannot self-sustain; food/energy (and often oxygen and nutrient input) must be supplied externally."); key point topic 0 #2 `why` ("An aquarium, or water too deep for light, lacks photosynthetic producers ...").
- Wrong: detritus imported from outside (a stream or cave fed by leaf litter) and chemosynthetic producers (the hydrothermal vents the book itself names on p. 673) are exceptions; "all" aquariums do not lack producers (most carry plants or algae); the deep aphotic ocean lacks photosynthetic producers only.
- Fix [NEW]: step 2: "Energy and matter enter an ecosystem mainly through producers, so they anchor the description." Limiting (2): "an aquarium, with few producers for its animals, or the deep aphotic ocean, with no photosynthetic producers, cannot self-sustain and depends on outside input." Practice 5 answer: "Photosynthetic producers are few compared with the consumers, and decomposition and nutrient recycling are too small, so it cannot self-sustain; food (energy), and often oxygen and nutrients, must be supplied externally." Key point why: "An aquarium has too few producers, and water too deep for light has no photosynthetic producers, so each needs input from outside."
- Kind: biology (overgeneral "only"/"lacks"). Source: book. Confidence: likely.

### 6. Lichens "the only" pioneers, "never mosses or grasses"
- Where: Topic 04 Worked example 1 step 2 ("on bare rock the pioneers are lichens, because only they can colonise a substratum with no soil"); MCQ 1 solution ("Only lichens can colonise bare rock with no soil"); pitfall 2 ("the pioneers are lichens, never mosses or grasses"); Practice 3 and cheat sheet are fine.
- Wrong: cyanobacteria, free-living microbes and crustose lichens' neighbours can also start on rock; on sand dunes (a psammosere, which the same topic defines) pioneers are often grasses; in hydrarch succession the pioneers are phytoplankton. NCERT says "usually lichens".
- Fix [NEW]: Ex 1: "on bare rock the usual pioneers are lichens, which can live on a substratum with no soil and whose acids weather the rock." MCQ solution: "Correct: (c). Lichens are the usual pioneers on bare rock; they weather it and begin soil formation." Pitfall: "On bare rock the pioneers are lichens, not mosses or grasses, which need some soil first."
- Kind: biology (overgeneral). Source: book. Confidence: certain for the wording, likely for the exceptions.

### 7. Decomposition "the only process that returns locked-up nutrients to circulation"
- Where: Topic 02 Concept intuition, "Why does any of this matter so much?" (p. 667).
- Wrong: weathering, fire, excretion and leaching also return nutrients; the key point already says "not the only way".
- Fix [NEW]: "Because decomposition is the main process that returns locked-up nutrients to circulation."
- Kind: biology (overgeneral). Source: book. Confidence: certain.

### 8. "the three were introduced by Charles Elton, 1927" (pyramids)
- Where: Topic 03 Concept intuition (p. 674); definition term "Ecological pyramids (Elton, 1927)"; cheat sheet "Pyramids (Elton, 1927)"; MCQ 1 nudge (b) "Elton gave the pyramids: the favourite distractor."
- Wrong: Elton (1927, Animal Ecology) introduced the pyramid of numbers; the energy pyramid came later (Lindeman 1942, Odum). The book's own MCQ 1 credits Lindeman with the 10% law.
- Fix [NEW]: "(Charles Elton introduced the pyramid of numbers in 1927, so ecological pyramids are also called Eltonian pyramids; the pyramids of biomass and energy were developed later.)"; term "Ecological pyramids (Eltonian pyramids)"; cheat sheet "Pyramids (Eltonian)"; nudge "(b) Elton introduced the pyramid of numbers: the favourite distractor."
- Kind: attribution. Source: book. Confidence: likely.

### 9. "roughly 90% is lost as heat through respiration and metabolic activity"
- Where: Topic 03 "Think about it this way" (p. 674); Framework A step 3 ("Each level spends most of its intake on respiration and loses it as heat"); Figure 12.3 labels "~90% lost as heat" and its caption; cheat sheet "~90% lost as heat".
- Wrong: the 90% that is not passed on is partly heat, partly faeces and dead matter that feed the detritus chain (the book's own Framework C). The key point already words it correctly.
- Fix [NEW]: "while roughly 90% is not passed on (most of it lost as heat through respiration and metabolic activity, the rest left as waste and dead matter that feed the detritus chain)". Step 3: "Each level spends most of its intake on respiration and loses it as heat (second law), and some leaves as waste and dead matter; only the small surplus is available to the next level." Leave the figure as the book draws it, but label the caption note the same way if the founder wants.
- Kind: biology (loose). Source: book. Confidence: likely.

### 10. Parasitic food chain: direction
- Where: Topic 03 Concept intuition, chain-types paragraph.
- Says now: "a large host feeding many smaller parasites and they in turn feeding still-smaller hyperparasites (tree → leaf-eating insects → parasitic mites)."
- Wrong: parasites feed on the host, not the host on them.
- Fix [NEW]: "a large host on which many smaller parasites feed, and on those parasites in turn still-smaller hyperparasites feed (tree → leaf-eating insects → parasitic mites)."
- Kind: biology / unclear. Source: book. Confidence: certain.

### 11. Carbon: "the reservoir is the atmosphere", oceans "= sink"
- Where: Topic 04 Concept (reservoir paragraph), Framework C, definition "Reservoir", MCQ 4, Figure 12.4 carbon panel and caption ("the reservoir is atmospheric CO2 and the oceans act as a sink"), key point topic 3 #2.
- Wrong or misleading: NCERT's classification (gaseous cycle: reservoir atmosphere or hydrosphere) stands, but NCERT also says the atmosphere holds only about 1% of the world's carbon and the oceans about 71%. Calling the atmosphere "the reservoir" and the ocean only "a sink" can teach that the air is the big store.
- Fix [NEW] (Framework C and caption): "Carbon cycle (gaseous; the reservoir is the atmosphere and hydrosphere: the air holds only about 1% of the world's carbon and the oceans about 71%, and the oceans act as a major sink for CO2)". Check the 1% and 71% against the NCERT page before use.
- Kind: unclear or misleading. Source: book. Confidence: possible to likely (figures from memory of NCERT).

### 12. "energy ... is not wasted: it re-enters the system through the DFC"
- Where: Topic 03 Framework C (last sentence); key point topic 2 #3 `why` ("Energy that leaves the GFC as dead matter and waste re-enters through the DFC.").
- Wrong: it contradicts "energy never returns" (same topic); the energy passes to the detritus chain and is finally lost as heat.
- Fix [NEW]: "energy 'lost' from the GFC as dead matter and waste is not wasted: it passes to the DFC, which uses it before it is finally lost as heat." Key point why: "Energy that leaves the GFC as dead matter and waste passes to the DFC instead of being wasted."
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 13. Climax "forest" and "stable net productivity, maximum diversity"
- Where: Topic 04 Practice 1 answer ("stable net productivity, maximum diversity/niche specialisation, self-perpetuating"); Practice 3 answer ("the same mesic (terrestrial forest) climax"); Framework A "terrestrial forest (climax)".
- Wrong: a climax need not be forest (grassland, desert shrub where the climate says so); net productivity of a climax tends towards zero and biomass is the maximum; "maximum diversity" is a tendency, not NCERT.
- Fix [NEW]: P1: "The final, stable, self-perpetuating community in equilibrium with the climate; fairly constant species composition, high biomass, usually high diversity and niche specialisation." P3: "both progress toward a mesic climax community (a forest where the climate allows)."
- Kind: biology (overgeneral). Source: book. Confidence: likely.

### 14. Topic 02 Framework B: "cellulose" among the slow substrates; soil pH rule
- Where: Topic 02 Framework B first bullet ("detritus rich in cellulose, lignin, tannin or resin → slow"); the "Soil pH" bullet ("acidic soils decompose slowly, more alkaline soils faster").
- Wrong: NCERT names lignin and chitin as slow; many fungi and bacteria digest cellulose well (slower than sugars, far faster than lignin); the pH rule is not NCERT and is a broad generalisation.
- Fix [NEW]: "detritus rich in lignin, chitin, tannin or resin → slow". pH bullet: "Soil pH influences which microbes thrive (most work best near neutral), so strongly acidic soils usually decompose litter more slowly."
- Kind: biology (loose). Source: book. Confidence: likely (cellulose), possible (pH).

### 15. Harvested wheat as NPP
- Where: Topic 01 Worked example 2 step 1 ("it reflects NPP, not GPP") and `ans` ("it represents net primary productivity").
- Wrong: harvested grain is only the economic part of NPP (not roots, straw, litter). Key point already says so.
- Fix [NEW]: "i.e. it reflects net, not gross, productivity (and is only the harvested part of NPP). GPP would additionally include everything the plant already respired away." `ans`: "Incorrect to call it GPP. As a per-area-per-time figure it represents net primary productivity (only the harvested part of it)."
- Kind: biology (loose). Source: book. Confidence: likely.

### 16. Energy pyramid "always upright / never inverts"
- Where: Topic 03 Limiting condition (4), the table's Energy row ("always upright", "never (forbidden by 2nd law)"), Framework B step 3 ("can never invert"), Worked ex 2 and 4, Practice 4, MCQ 2, pitfall 3 ("Energy pyramid can be inverted. Never."), cheat sheet.
- Judgement: NCERT's own wording, and true for energy flow per unit area per unit time; a pyramid of energy stored at one instant need not be. Keep the NCERT wording, add the basis once.
- Fix [NEW], in the Limiting condition and the table's Energy row: "the pyramid of energy, drawn as energy flow per unit area per unit time, is always upright". Pitfall 3 [NEW]: "Energy pyramid can be inverted. Not for energy flow per area per year (NCERT's pyramid); only the number and biomass pyramids invert."
- Kind: overgeneral (keep, qualify). Source: book/NCERT. Confidence: certain on the nuance.

### 17. Superlatives and exam claims left unlabelled (Class 11 standard: absent or labelled)
The frequencies are labelled once per Exam Relevance box (good). These phrases sit outside the label and are superlatives:
- Topic 01 Exam box: "This topic is a near-guaranteed scorer." [NEW] "This topic is a scoring topic." and "CUET treats it as MCQ-certain" [NEW] "CUET asks it as MCQs". Limiting (3): "the single most common conceptual slip" [NEW] "a common conceptual slip".
- Topic 02 Exam box: "A dependable scorer." [NEW] delete the sentence; "almost always the order of the five steps" [NEW] "usually the order of the five steps".
- Topic 03 Exam box: "One of the highest-yield zones of the whole chapter." [NEW] "A heavily weighted topic in the book's view." "MCQ-certain" [NEW] "asks it as MCQs"; "almost always" [NEW] "usually"; "If you master only one functional aspect for marks-per-hour, make it this one." [NEW] delete. Limiting (4): "the single costliest error in the exam" [NEW] "a costly error in the exam". Pitfall 3: "This is the most-tested trap in the chapter." [NEW] "This is a frequently tested trap (the book's view, not an official figure)."
- Topic 04: "NEET reliably draws 1–2 questions a year" (labelled) [NEW] "NEET often draws 1–2 questions a year"; MCQ 2 solution and pitfall 1 are labelled.
- Topic 05: "Little reasoning, high marks-per-word" is harmless; labelled lines fine.
- No exam years occur in Topics 01 to 05 (Lindeman 1942, Elton 1927, Costanza are discoveries); no counts of papers.
- Kind: unclear or misleading. Source: book. Confidence: certain.

### 18. Standing crop "measured as dry weight"
- Where: Topic 01 definition (and key point topic 0 #3 "measured as dry weight"). NCERT: biomass in fresh or dry weight. The book's reason for dry weight is sound.
- Fix [NEW]: "usually measured as dry weight (water content varies and would distort fresh-weight comparisons)". Low. Confidence: likely.

### 19. "decomposers (microbes) are said to form the largest population in a food chain"
- Where: Topic 02, same paragraph as flag 7. Not NCERT; "population" misused (numbers, not a population). Fix [NEW]: "It is also why decomposers are so abundant in soil: there is an enormous supply of dead matter for them to work on, far more than the living biomass that herbivores eat." Low-likely.

### 20. Practice 5 answer "(humification persists)"
- Where: Topic 02 Practice 5 answer. Fix [NEW]: "(humus persists)". The key point already reads it so. Kind: wording. Certain.

### 21. "a food chain can support only 4–5 trophic levels ... not enough left to feed a sixth"
- Where: Topic 03 "Think about it" paragraph, "A typical chain ... four to five", Framework A step 4, Worked ex 3 step 2, Figure 12.3 note, cheat sheet.
- Comment: NCERT editions differ (3 to 4, or 4 to 5); some marine chains carry five or six levels. Fix [NEW]: "a food chain usually has only 4–5 trophic levels (a few reach six)". Low. Possible.

### 22. Topic 03 Worked example 3 evaluation
- Where: Step 2: "by the 5th–6th level the available energy collapses to a few kJ, too little to support a viable population." The conclusion depends on the starting value, not on 6 kJ being small in itself. Fix [NEW]: "each level holds only a tenth of the one below, so the fifth and sixth levels hold only 6 and 0.6 kJ m−2 yr−1 here; this is why chains seldom exceed 4–5 levels." Low.

### 23. Topic 02 MCQ 4 nudge for (d)
- Where: option "rich in water-soluble salts"; shared nudge says (a), (b), (d) "are all readily broken down". Salts are not decomposed at all. Fix [NEW] for (d): "(d) is not lignin or chitin: water-soluble material is easy for microbes to take up, so it does not slow decomposition." Key (c) is right and unique. Low.

### 24. Topic 03 Framework A: "95–99% ... 1–5%"
- Consistent with PAR below 50% times 2–10% (1–5% at most), but it mixes "radiation reaching a plant" with "incident" radiation. Fix [NEW]: "of the incident radiation, only about 1–5% at most is fixed ... " Low.

### 25. Terms that are not NCERT (label or soften)
- Topic 04 Limiting (3): gaseous "perfect", sedimentary "imperfect" (Odum's terms; the chapter's own Practice 5 repeats "less perfect"); Framework D: "ecesis (continuing) causes" (ecesis is one process, not the label for the continuing causes); Topic 05 Framework B: the four families (the page says study aid; the claim "Every item in the NCERT list slots into one of these four" is fine, and provisioning has no NCERT item). Fix [NEW] for the first: "(these 'perfect' and 'imperfect' labels are Odum's, not NCERT's)". Low. Likely.

### 26. Topic 05: "Forests ... the major source", "less than 10%"
- NCERT's example is "healthy forest ecosystems purify air and water ... " rather than "forests are the major source"; a superlative. Fix [NEW]: "Forests are the usual example of an ecosystem that delivers many of these services at once." Also check the printed "<10%" for recreation and nutrient cycling against the NCERT figure (it may print about 10% each). Possible.
- Costanza's paper is 1997 (the book prints no year, none added, correct under the exam rule); optional [NEW] note "(Costanza et al., 1997)". "Nearly twice": 33 over 18 = 1.83, correct.

### 27. Notation note (not an error)
- Assertion-reason keys are (i) to (iv) as the book prints, while MCQs and examples use (a) to (d); the fourth option is the right "A false, R true". Consistent with the book; the founder may prefer letters.

## Writer-flagged items: rulings
Writer 1 (Topics 01 to 03):
- Superlatives (near-guaranteed, MCQ-certain, highest-yield, single costliest, most-tested): AGREE, flag 17.
- "enter only through producers": AGREE, flag 5. "deep aphotic ocean lacks producers": AGREE, flag 5 (also contradicts p. 673 vents).
- "None imported daily ... fixed energy": AGREE, flag 2 (certain).
- Standing crop dry weight: AGREE (low), flag 18.
- Harvested grain: AGREE, flag 15.
- "only process that returns nutrients": AGREE, flag 7. "decomposers largest population": AGREE, flag 19.
- Cellulose and pH: AGREE, flag 14.
- "humification persists": AGREE, flag 20.
- Hydrothermal vent "lone exception": NO CHANGE needed, it is NCERT's own line ("the Sun is the only source of energy for all ecosystems except the deep-sea hydrothermal ecosystem"); optional note that other chemosynthetic systems exist.
- PFC direction: AGREE, flag 10 (certain).
- 4–5 levels: AGREE, flag 21.
- Elton attribution: AGREE, flag 8.
- 90% lost as heat: AGREE, flag 9.
- Energy pyramid always/never: AGREE with the writer's "keep NCERT wording, add nuance", flag 16.
- "pond" for inverted biomass: AGREE, flag 4, and I add the other places.
- 95–99% / 1–5%: AGREE (low), flag 24.
- Exceptions taken (em dashes, "subtopic", labels, `kalam` shortenings, roman-numeral A-R keys, fraction 10 over 100, run-in lists as lists, Framework lists as `proc`/`p`, no answer printed twice, Mnemonics label kept): all ALLOWED. One point: Topic 01 Example 1 and Topic 03 Example 1 `steps` stop before the result and `ans` carries it (the decision "no answer printed twice"): fine.
Writer 2 (Topics 04 and 05):
- Costanza label: AGREE and raise it to flag 1.
- 33 over 18: AGREE (1.83).
- Superlatives labelled: AGREE; the labels are present; I add softer wording (flag 17).
- Lichens "only/never": AGREE, flag 6.
- Option (d) "never reaches a climax": AGREE low; the correct key (b) is the only right one, and the nudge could read "(d) is wrong: both normally head toward a climax, although disturbance can arrest either".
- Climax "forest": AGREE, flag 13.
- Ecesis wording, perfect/imperfect, "stable net productivity", four families: AGREE (flags 25 and 13).
- Items 10 to 14 and 17 (C:N table, Trichoderma, Zizyphus, B practice 6 and others): in Additional topics A and B, outside my share; the key points file for topics 5 and 6 already avoids ligninase on Trichoderma.
- Exceptions (colon for em dash, "Exam Relevance (split)" label kept, `<br>` bullets in one `p`, Costanza `$` units with superscript, labels added): ALLOWED.
- False "never covers" claims in the Additional introductions: CONFIRMED against Topics 01 to 05 as built. The shared intro's "complete seral-stage sequence with specific pioneer organisms ... omitted from the main chapter text" is false (Topic 04 Framework A and Example 1 give both sequences with named organisms); B's "does not list every seral stage in sequence ... nor explain why each stage prepares the next" is false (Topic 04 Framework A explains it); A's "does not identify which organisms carry out fragmentation" is false (Topic 02 names detritivores such as earthworms and termites). Their replacements are for the Additional-topic reviewer.
- Errata checks: (1) Topic 04 Exam Relevance box carries "but check the current NTA syllabus for its status"; the old "dropped from the NEET 2026 syllabus" claim appears nowhere in the Topics (searched the chapter files: no "dropped" and no "2026"). CONFIRMED. (2) Figure 12.4: the "return" arrow starts at the Decomposers / P-solubilising bacteria box and ends at Soil solution, drawn and checked in code and against p. 684; text (Framework C and key point) says decomposers and phosphate-solubilising bacteria return phosphorus. CONFIRMED. The "Remaining" layout item (Framework C short first line before inline bullets) is gone in Topic 01 Framework C.

## Counts verified
- Parts per topic: 8 each (Concept intuition, Key definitions, Key processes, Worked examples, Practice, Crack the MCQ, Pitfalls and pro-tips, Cheat sheet).
- Worked examples: Topic 01: 4, 02: 4, 03: 4, 04: 4, 05: 3 (book 3). Practice: 5 each. MCQs: 4 each. Pitfalls: 4 each. Pro-tip: 1 each. Cheat-sheet rows and aids: 01: 6 and 2; 02: 6 and 3; 03: 6 and 3; 04: 6 and 3; 05: 5 and 2 (all as the book).
- Marked keys equal the book's "Correct": Topic 01 b, d, c, c; 02 b, c, b, c; 03 c, c, b, c; 04 c, c, b, b; 05 a, b, c, b; each the only correct option. Example keys: (i), (ii), (ii) in Topics 01 to 03, (i) in 04, "(c)" in 05 Ex 2; right. Nudges attach to their own option except where flagged (flag 23).
- Arithmetic recomputed, all right: 25,000 − 9,000 = 16,000; 32,000 − 20,000 = 12,000; 48,000 → 4,800 → 480 (secondary consumer = 3rd level, two steps); 0.6 × 10^5 = 60,000 → 6,000 → 600 → 60 (4th) → 6 → 0.6; 9 × 10^4 → 9 × 10^3 → 9 × 10^2 → 90 (tertiary = 4th, three steps); 10/100 = 0.1; PAR below 50% times 2–10% gives at most 1–5% of incident, consistent with "95–99% lost, 1–5% fixed"; 33 over 18 = 1.83; pie 21 + 6 + 6 + 8 + 9 + 50 = 100; "three arrows divide by 1,000" right. The percent signs: no unlabelled sums.
- Figures: five numbered figures, ids 12.1 to 12.5 in Topics 01 to 05 (topic index 0 to 4); no unnumbered drawing; no figure missing.
- Key points: 25 (five per topic: two Remember, one Don't mix up, one Common mistake, one Exam shortcut); `say` lines are the cheat sheet's first two aids per topic; indexes 0 to 4 are right.
- Topic 03 italics: E and n italic with real sub-script; scientific names italic and genera only (Rhizocarpon, Rinodina, Parmelia, Dermatocarpon, Polytrichum, Grimmia, Rhus, Hydrilla, Vallisneria, Potamogeton, Wolffia, Azolla, Sagittaria, Juncus, Carex); no em dashes; no number-over-number slash in Topics 01 to 05.

## Figures (page images 663, 670, 676, 684, 689 against the code)
- 12.1: GPP to NPP to secondary productivity, GPP to R; every label as the book; re-laid in one column (schematic). No error.
- 12.2: Detritus then the five steps in order, "occur simultaneously" over the five steps only, both rate notes, mineralisation highlighted; labels as the book. No error (the bracket "simultaneously" over a left-to-right arrow chain is the book's own tension; see Topic 02 text).
- 12.3: solar radiation to PAR (<50%) to producers (~2–10% of PAR, 1st level) to herbivores, carnivores, top carnivores (2nd to 4th), three "×10%" and "~90% lost as heat", closing note; as the book. Content caveat: flag 9.
- 12.4: carbon panel (CO2 reservoir with the Oceans = sink, photosynthesis down, respiration / decomposition / combustion up) and phosphorus panel (rock phosphate, weathering, soil solution, dashed run-off to sediments, uptake, producers to decomposers, and the corrected "return" arrow from Decomposers / P-solubilising bacteria to soil solution). As the book and the errata. Caveat: flag 11.
- 12.5: six slices in the book's order from the top (other services, wildlife habitat ~6%, climate regulation ~6%, recreation <10%, nutrient cycling <10%, soil formation ~50%), the printed note and caption; slice sizes 21, 6, 6, 8, 9, 50 are a reading of the page and add to 100; the "~50%" half circle is exact. Caveat: flag 1.

## Could not check
- The app's own SVG renderings: the sandbox permission classifier denied the diagram-dump jest run (twice, so I did not retry); the code and its built-in checks were read, and the book pages rendered, so the geometry (label gaps, box fit, arrow ends) is verified only from the code, not looked at.
- Bold on single words (80 to 110 dpi page reading, same limit as the writers).
- NCERT's own text (no copy in the tree): the statements about NCERT wording (Costanza split, "usually lichens", the 1% and 71% carbon figures, 3 to 4 against 4 to 5 trophic levels, the forests sentence) are from memory; flags 1, 11, 21 and 26 should be confirmed against the NCERT page. The original Costanza table is also from memory.
- Additional topics A to F (R2's share).

## Overall judgement
Topics 01 to 05 are a faithful copy of the book (no transcription error found), with every calculation and every MCQ key correct, and the five figures match their pages including the corrected Figure 12.4 arrow. The book's weaknesses are overgeneral "only/all/never" lines (producers, lichens, the energy pyramid, the only process), a few plain mistakes (pond energy import, glucose as a reserve, the parasitic chain direction, the Costanza label swap) and un-NCERT attributions (Elton, "perfect" cycles). The pond-for-sea biomass example appears in about eight places and is the widest propagation. The key points file is the cleanest layer: it already avoids most of these and needs only the small edits in flags 5, 11 and 12.
