# Biology 11 Chapter 6 (Anatomy of Flowering Plants): third expert review (R3, Opus)

Reviewer: third independent review, run on Claude Opus, 2026-11-17. Scope: the whole chapter as it now stands (after fixers F1 and F2):
`content/textbooks/bio-11-06/topics-1-2.ts`, `topics-3-4.ts`, `extras.ts`, `lib/diagrams/biology-11-06.ts`, `lib/revise/keypoints-biology-11-06.ts`.
Book: `biology-work/books/bio11.pdf` pp. 354 to 406 (text `bio11.paged.txt`, page images for pp. 358, 366, 373, 379).
Method: my own full pass first (word-level diff of every app string against the book text per topic, a read of every block, every number recomputed, every key and nudge checked, every Additional-topic introduction checked against the Topics as built, every F1/F2 [NEW] wording checked); only then were review-R1-topics-1-4.md and review-R2-extras-A-G.md read to mark each flag NEW or REPEAT.
Nothing in the repo was edited. No tsc, jest or git was run.

Topic indexes used below: T1 to T4 = Topics 01 to 04 (index 0 to 3); A to G = Additional topics (index 4 to 10). KP = key point (file order).

## Flags, most serious first

### 1. "Oldest tissue at the centre, youngest at the periphery" is false for the phloem and the bark, and contradicts the chapter itself [NEW] (serious)
- Where: `topics-3-4.ts`, T4, Concept intuition, 4th paragraph (p. 376); T4 Pro-Tip (p. 381); T4 Cheat sheet aid "Oldest centre → youngest edge." (p. 382); KP topic 3 #2 `why` and KP topic 3 shortcut (`a`).
- Says now: "secondary growth is overwhelmingly an adding-rings-outward process, so the <b>oldest tissue sits at the centre and the youngest at the periphery</b>, a fact that explains almost every feature below, from heartwood to bark." Pro-Tip: "Orient every secondary-growth fact by the rule “<b>oldest at the centre, youngest at the edge, and the cambium makes xylem inward / phloem outward.</b>”" KP: "Secondary growth adds rings outward, so the oldest tissue is at the centre and the youngest at the periphery." and "Use one compass: oldest at the centre, youngest at the edge, ...".
- What is wrong: true only of the wood. The cambium adds phloem on its outer face, so in the secondary phloem the youngest layer is next to the cambium and the oldest is outermost (the chapter itself says "the older outer phloem is crushed and shed with the bark" and "the older phloem gets crushed against the cortex"); in the periderm the youngest cork is next to the phellogen. The youngest tissue of the whole stem is at the cambium, not at the periphery. A student who applies the "compass" to phloem or bark gets the order backwards, and "from heartwood to bark" claims it works for bark.
- Fix (concept paragraph) [NEW]: "Second, the cambium adds wood on its inner face and phloem on its outer face, so in the wood the <b>oldest xylem sits at the centre and the youngest next to the cambium</b>, while in the phloem the order is reversed: the youngest phloem lies next to the cambium and the oldest is pushed outward, where it is crushed. This explains almost every feature below, from heartwood to bark."
- Fix (Pro-Tip) [NEW]: "Orient every secondary-growth fact from the cambium: “<b>the cambium makes xylem inward and phloem outward, so the oldest wood is at the centre and the oldest phloem at the outside.</b>” From that compass you can place heartwood (centre), sapwood (just outside it), cambium, secondary phloem and periderm in the correct order without rote memory."
- Fix (aid) [NEW]: "“Oldest wood at the centre, oldest phloem at the edge.”"
- Fix (KP topic 3 #2 why) [NEW]: "The cambium adds wood inward and phloem outward, so the oldest wood is at the centre and the oldest phloem at the outside." KP shortcut first sentence [NEW]: "Use one compass: the cambium makes xylem inward and phloem outward, so the oldest wood is at the centre and the oldest phloem at the outside."
- Kind: biology error. Source: book (p. 376, 381, 382), carried into the key points. Confidence: certain.

### 2. Phloem is described as four elements with no word that this is angiosperm phloem; gymnosperm phloem (sieve cells, albuminous cells) is missing [NEW] (serious for NEET)
- Where: `topics-1-2.ts`, T2, Concept intuition "Phloem, the four-member crew" (p. 362); phloem table note (F22's note); Cheat sheet "Phloem" row; KP topic 1 #1.
- Says now: "<b>Phloem, the four-member crew:</b> sieve tube elements, companion cells, phloem parenchyma, and phloem fibres." The chapter never qualifies this.
- What is wrong: NCERT states it in so many words: phloem in angiosperms is composed of sieve tube elements, companion cells, phloem parenchyma and phloem fibres; gymnosperms have albuminous cells and sieve cells and lack sieve tubes and companion cells. This contrast is a standard NEET item, and the chapter (which already contrasts gymnosperm tracheids with angiosperm vessels) teaches the four-element phloem as universal.
- Fix: in the Concept intuition paragraph [NEW] "<b>Phloem, the four-member crew (in angiosperms):</b> sieve tube elements, ..." and extend the note after the phloem table [NEW]: "Note: phloem fibres are generally absent from primary phloem, and phloem parenchyma is absent in most monocots. Gymnosperm phloem is different: it has sieve cells and albuminous cells and lacks sieve tubes and companion cells." Cheat sheet "Phloem" note [NEW] append: "(angiosperms; gymnosperms have sieve cells and albuminous cells instead)". KP topic 1 #1 [NEW] append: "This is angiosperm phloem; gymnosperms have sieve cells and albuminous cells, with no sieve tubes or companion cells."
- Kind: biology omission (misleading by generality). Source: book. Confidence: certain (NCERT wording).

### 3. Additional A's introduction still overclaims: "the one trace" is not the only one [REPEAT: R2 flag 5 applied incompletely]
- Where: `extras.ts`, A, Introduction p 2 (F2 item 3).
- Says now: "It does not trace those components back to their embryological source; the one trace is its remark that the intrafascicular cambium is leftover procambium."
- What is wrong: T4's MCQ 1 nudge (d) also says "procambium gives the primary vascular tissue, not secondary girth", so there are two traces, and "the one trace" is false as built.
- Fix [NEW]: "It does not trace those components back to their embryological source, beyond two remarks in Topic 04: that the intrafascicular cambium is leftover procambium, and that the procambium gives the primary vascular tissue."
- Kind: false claim about the chapter. Source: ours (F2 wording on R2's flag). Confidence: certain.

### 4. Additional D calls a beyond-NCERT topic "a frequent NEET question" [NEW, fixer wording; R2 flag 8 relabelled it but kept the claim]
- Where: `extras.ts`, D, Introduction (F2 item 17).
- Says now: "...is only mentioned there (<i>Dracaena</i> is named in Topic 04); it is still a frequent NEET question (the book’s estimate, not official)."
- What is wrong: the same topic's own Note says Dracaena-type growth is "a rare exception beyond NCERT". NEET is set from NCERT; calling it "frequent" (the book said "recurring") overclaims and contradicts the Note. The label "the book's estimate" does not make a contradictory claim true.
- Fix [NEW]: "...is only mentioned there (<i>Dracaena</i> is named in Topic 04). It lies beyond NCERT, but it explains the one well-known exception to the rule, so it is worked through here."
- Kind: exam-frequency claim / unclear. Source: book ("recurring NEET question", p. 390), strengthened in our wording. Confidence: likely.

### 5. Additional F, Practice 1: the answer does not answer the question asked [NEW]
- Where: `extras.ts`, F, Practice item 1 (book p. 397 answer 1).
- Says now: Q "State the two most decisive anatomical features that distinguish a dicot root from a monocot stem." A "Bundle geometry (radial in root, conjoint in stem) and xylem group number (di/tetrarch vs polyarch for roots; ring vs scattered for stems). These are the two most decisive attributes."
- What is wrong: the second feature mixes root-vs-root and stem-vs-stem tests; "xylem group number" cannot compare a dicot root with a monocot stem (a monocot stem has no xylem groups to count, and "polyarch" is a monocot-root term). The superlative "two most decisive" is also the book's.
- Fix (question) [NEW]: "State two anatomical features that distinguish a dicot root from a monocot stem." Fix (answer) [NEW]: "Bundle geometry (radial in the dicot root; conjoint, collateral and closed in the monocot stem) and the position of the protoxylem (exarch in the root, endarch in the stem). The layout also differs: 2–4 xylem groups around a small or absent pith in the root against many bundles scattered through undifferentiated ground tissue in the stem."
- Kind: wrong/unclear practice answer. Source: book. Confidence: likely.

### 6. Additional G, Archetype 4: tracheids called "the only conducting element" of most gymnosperms [NEW, fixer wording]
- Where: `extras.ts`, G, Archetype 4, uniqueness list (F2 item 33).
- Says now: "• Tracheid → tapering ends, pits (found in all vascular plants; in most gymnosperms the only conducting element)"
- What is wrong: gymnosperms also conduct food (phloem); the fixer's own wording elsewhere (T2 Ex 1, KP topic 1) correctly says "water-conducting".
- Fix [NEW]: "(found in all vascular plants; in most gymnosperms the only water-conducting element)".
- Kind: biology slip in our wording. Source: ours. Confidence: certain.

### 7. Passage cells described as "gaps" [NEW]
- Where: `topics-3-4.ts`, T3, Procedure D (p. 372).
- Says now: "...a barrel-shaped ring of cells with <b>casparian thickenings</b> (suberin bands) on their walls; gaps called <b>passage cells</b> let water through."
- What is wrong: passage cells are not gaps in the endodermis; they are endodermal cells (usually opposite the protoxylem) that stay thin-walled and unsuberised when the others thicken, so water can still pass into the stele through them.
- Fix [NEW]: "...on their walls; some cells, usually opposite the protoxylem, stay thin-walled: these <b>passage cells</b> let water through."
- Kind: biology error (misleading). Source: book. Confidence: likely.

### 8. Additional F, Worked example 3: passage cells "without crossing the Casparian strip" [NEW]
- Where: `extras.ts`, F, Worked ex 3 reasoning (p. 397).
- Says now: "...and the passage cells allow selective transport without crossing the Casparian strip."
- What is wrong: passage cells have the Casparian strip too; what they lack are the later suberin layers. Water still passes through their membranes (symplastically), not around the strip.
- Fix [NEW]: "...and the passage cells, which stay thin-walled without the later suberin layers, still let water and minerals pass into the stele through their living cytoplasm."
- Kind: biology error. Source: book. Confidence: likely.

### 9. Bicollateral bundle of Cucurbita: inner cambium omitted, inner phloem called "discontinuous/patchy" [NEW]
- Where: `extras.ts`, C, Worked ex 2 (reasoning and answer) and Practice 4 answer (pp. 389-390); KP topic 6 #2.
- Says now: "The inner phloem is typically discontinuous or patchy." / "...inner phloem (discontinuous/patchy, facing the pith), with a cambium between xylem and outer phloem." KP: "...a second, often discontinuous or patchy band on its inner face, next to the pith, with a cambium between the xylem and the outer phloem."
- What is wrong: in the standard Cucurbita stem the bundle is described as outer phloem, outer cambium, xylem, inner cambium, inner phloem; the inner phloem forms a cap on each bundle (smaller than the outer one), not a patchy band, and an inner cambium strip is usually present (less active). Teaching "one cambium, patchy inner phloem" contradicts the usual board answer for the Cucurbita stem.
- Fix (Worked ex 2 reasoning, last sentence) [NEW]: "The inner phloem is usually smaller than the outer phloem." Worked ex 2 answer [NEW]: "Bicollateral vascular bundle. Xylem forms a central strand with a cap of phloem on its outer face (as in a normal collateral bundle) and a second, smaller cap of phloem on its inner face, next to the pith; a strip of cambium lies between the xylem and the outer phloem, and often a less active one between the xylem and the inner phloem." Practice 4 answer [NEW]: "Around the central xylem strand: outer phloem with a cambium strip between it and the xylem, and inner phloem (smaller, facing the pith), often with a second, less active cambium strip." KP topic 6 #2 [NEW] to match.
- Kind: biology error / incomplete. Source: book. Confidence: possible-to-likely (beyond NCERT; standard plant-anatomy texts).

### 10. Dracaena-type growth: new bundles do not arise "scattered throughout the ground tissue" [NEW]
- Where: `extras.ts`, D, Method p, table "Vascular bundles" row, Note, Worked ex 2, Practice 3 and 4; KP topic 7 #1 and #2.
- Says now: "a separate cambium produces new vascular bundles scattered throughout the ground tissue"; table: "New bundles form scattered in ground tissue".
- What is wrong: the monocot (secondary) cambium arises in the parenchyma just outside the primary bundles and cuts off secondary (amphivasal) bundles and lignified conjunctive tissue mainly toward the inside, so the secondary bundles lie in a zone inside the cambium, often in radial rows, not throughout the ground tissue. "No concentric rings of wood" is right; "scattered throughout the ground tissue" is not.
- Fix (Note, last sentence) [NEW]: "...instead of a vascular cambium that adds rings of secondary xylem, a separate cambium outside the primary bundles cuts off new vascular bundles, embedded in conjunctive tissue, mainly toward the inside." Table cell [NEW]: "New bundles cut off inward, embedded in conjunctive tissue (no rings of wood)". Keep the contrast "concentric rings against no rings" elsewhere, and change "scattered throughout the ground tissue" to [NEW] "embedded in a zone of conjunctive tissue inside the cambium" in Worked ex 2, Practice 3 and 4 and KP topic 7.
- Kind: biology error (beyond-NCERT content). Source: book. Confidence: possible-to-likely.

### 11. Wheat used as the example of a typical scattered-bundle monocot stem [NEW]
- Where: `extras.ts`, D Method ("Normal monocot stems (e.g., maize, wheat): closed, scattered bundles"), F Worked ex 1 answer ("Monocot stem (e.g., maize, wheat, grasses)"); KP topic 7 #1 ("Normal monocot stems (maize, wheat)").
- What is wrong: the wheat internode is hollow, with its bundles in two rings, not scattered through a solid ground tissue; the NCERT and board example of the scattered-bundle monocot stem is maize. (Wheat is fine for the guard-cell examples.)
- Fix [NEW]: D: "Normal monocot stems (e.g., maize): ..."; F: "Monocot stem (e.g., maize)."; KP: "Normal monocot stems (maize) ...".
- Kind: unclear or misleading example. Source: book. Confidence: likely.

### 12. Exam-frequency and superlative claims left in Topics 01, 03 and 04 [REPEAT: R1 flag 18 applied in part]
- Where: T1 Exam Relevance: "assertion–reason pairs on collenchyma corner-thickening and sclereid distribution are perennial"; T3 Exam Relevance: "a NEET favourite", "NEET leans hard on"; T4 Exam Relevance: "A perennial high-yield block", "NEET loves match-the-column grids"; T2: "NEET loves match-the-column grids". A Introduction: "the pairing has been tested in NEET"; C Introduction: "Two further geometries that NEET has tested" (neither labelled as the book's estimate).
- What is wrong: unlabelled exam-history claims, against the standing rule (frequency claims carry "the book's estimate from past papers, not official figures").
- Fix [NEW]: T1: "...and assertion–reason pairs on collenchyma corner-thickening and sclereid distribution recur." T3: "A table-heavy, diagram-labelled topic." and "NEET relies on match-the-column grids ...". T4: "A high-yield block." and "NEET uses match-the-column grids ...". T2: "NEET uses match-the-column grids ...". A: "Standard plant-anatomy texts give this sequence, and it is a common exam pairing (the book’s estimate, not official)." C: "Two further geometries that exams test (the book’s estimate, not official) are named in one line in Topic 03 but not developed:".
- Kind: exam-frequency claim. Source: book. Confidence: certain that they are unlabelled; the founder decides how strict.

### 13. Additional F's introduction understates what the chapter already does [NEW]
- Where: `extras.ts`, F, Introduction (p. 395).
- Says now: "The chapter provides individual decision procedures for root, stem, and leaf. NEET and CUET often combine these into a single unknown section ... This additional topic integrates the procedures into one universal identification framework..."
- What is wrong: Topic 03 already combines them: Procedure A is "Root or stem? Then dicot or monocot?", and the Topic 03 Pro-Tip resolves "any of the six sections" in two questions.
- Fix [NEW]: "The chapter gives decision procedures for root, stem and leaf, and its Topic 03 Pro-Tip already resolves a section in two questions. NEET and CUET often set a single unknown section (the book’s estimate, not official). This additional topic sets the procedures out as one numbered ladder, with worked examples covering transitional and ambiguous cases."
- Kind: false claim about the chapter. Source: book. Confidence: likely.

### 14. T1 Practice 1: parenchyma "from which others are derived" [NEW]
- Where: `topics-1-2.ts`, T1, Practice item 1 answer (p. 359).
- Says now: "...parenchyma is “fundamental” because it is the most abundant, least specialised tissue from which others are derived."
- What is wrong: in the plant body all tissues come from meristems, not from parenchyma. The usual reasoning is that parenchyma is the least specialised and most abundant tissue, forms the ground in which the others lie, and is considered the tissue from which the others evolved.
- Fix [NEW]: "...parenchyma is “fundamental” because it is the most abundant and least specialised tissue, forms the bulk of the ground tissue, and is considered the tissue from which the more specialised tissues evolved."
- Kind: biology error (misleading). Source: book. Confidence: possible.

### 15. T1 Practice 5 (fixer's new question): a mature cell does not "pass through" differentiation again [NEW, fixer wording]
- Where: `topics-1-2.ts`, T1, Practice item 5 question (F1 F2).
- Says now: "Arrange and name the three stages a mature cortical parenchyma cell passes through when it gives rise to a cork cambium and, through it, to cork cells..." Answer: "Differentiation → dedifferentiation → redifferentiation".
- What is wrong: the cell is already mature, so its first stage (differentiation) is behind it; the question as worded asks for stages it has yet to pass through.
- Fix [NEW]: "Name, in order, the three stages in the life of a cortical parenchyma cell that matures and later gives rise to a cork cambium and, through it, to cork cells, and state at which stage division capacity is regained." (answer unchanged).
- Kind: unclear wording. Source: ours. Confidence: likely.

### 16. Timber sentence still says beams are cut "not [from] the perishable sapwood" [REPEAT: R1 flag 13 applied in part]
- Where: `topics-3-4.ts`, T4, "Why it matters" paragraph.
- Says now: "...which is exactly why furniture, railway sleepers and construction beams are cut from the dark central wood, not the perishable sapwood."
- What is wrong: after "Timber is mostly cut from heartwood", the closing clause is absolute again; sapwood is widely used (usually after treatment).
- Fix [NEW]: "...which is why heartwood is preferred for furniture, railway sleepers and construction beams, while sapwood is less durable unless treated."
- Kind: overgeneral claim. Source: book. Confidence: likely.

### 17. G Archetype 3: "supplies the causal chain for the assertion–reason questions in this chapter" [NEW on the sentence R2 kept]
- Where: `extras.ts`, G, Archetype 3, last sentence.
- Says now: "The chapter’s differentiation framework (Framework A of Topic 01) supplies the causal chain for the assertion–reason questions in this chapter."
- What is wrong: only one of the chapter's assertion–reason items (T1) uses that framework; the others rest on the companion cell (T2), protoxylem position (T3), unequal cambial activity (T4), starch sheath, cork and Dracaena.
- Fix [NEW]: "The chapter’s frameworks supply the causal chains: for example the differentiation framework (Framework A of Topic 01) for living versus dead tissues, and the unequal activity of the cambium (Topic 04) for thin phloem."
- Kind: overgeneral. Source: book. Confidence: likely.

### 18. G worked assertion–reason (vessels): the steps never state that A is true [NEW]
- Where: `extras.ts`, G, Archetype 3 worked example steps.
- Says now: step 1 "R is true: vessels are dead and lignified." step 2 "...So both are true but R is not the correct explanation of A."
- Fix [NEW] first step: "A is true: the open, continuous lumen of a vessel conducts water faster than a chain of tracheids. R is true: vessels are dead and lignified."
- Kind: incomplete solution. Source: book. Confidence: certain.

### 19. T2 Framework C step 4 reads awkwardly after the superlative was removed [NEW, fixer wording]
- Where: `topics-1-2.ts`, T2, Framework C step 4 (F1 F18).
- Says now: "The “living, anucleate, conducts food” combination is unique to the sieve tube: it is a highly diagnostic description in the whole topic."
- Fix [NEW]: "The “living, anucleate, conducts food” combination is unique to the sieve tube among the eight elements, so that description identifies it at once."
- Kind: unclear wording. Source: ours. Confidence: certain.

### 20. T2 Concept intuition: physiology "belongs to later topics" [NEW]
- Where: `topics-1-2.ts`, T2, "Limiting conditions" paragraph.
- Says now: "...how those cells are arranged into bundles (radial, conjoint, collateral and so on) and the physiology of how sap actually rises and food is translocated belong to later topics".
- What is wrong: bundle types are Topic 03, but sap rise and translocation are not in any later topic of this chapter (they are plant physiology, as the topic's own Pitfall 4 says).
- Fix [NEW]: "...how those cells are arranged into bundles (radial, conjoint, collateral and so on) is Topic 03, and the physiology of how sap rises and food is translocated belongs to plant physiology, not this chapter".
- Kind: unclear cross-reference. Source: book ("later subtopics"). Confidence: certain.

### 21. Stomatal index described as "the proportion of epidermal tissue that is stomatal" [NEW]
- Where: `extras.ts`, B, formula note and Worked ex 1 answer; KP topic 5 #2.
- Says now: "The index measures the proportion of epidermal tissue that is stomatal." / "approximately one-quarter of the epidermal tissue in this leaf is stomatal."
- What is wrong: the index is a ratio of counts (stomata among all epidermal units), not of tissue area; a stoma is far smaller than a quarter of the tissue.
- Fix [NEW] note: "The index gives the percentage of stomata among all the epidermal units counted (stomata plus epidermal cells)." Worked ex 1 answer [NEW]: "Stomatal index = 24%: about one in four of the epidermal units counted is a stoma." KP [NEW] to match.
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 22. NCERT-wording notes worth adding (two places where our text is better biology than NCERT, but NEET quotes NCERT) [NEW]
- (a) Casparian strip walls. `extras.ts` F Worked ex 3: "(suberin bands on radial and transverse walls)". Correct botany; NCERT says the deposit is on the "tangential as well as radial walls". Suggest [NEW] appending: "(NCERT’s text says tangential and radial walls; answer an NCERT-worded question in those words)". Confidence: possible (founder's call).
- (b) Lenticel cells. T4 table text and Framework B: "loose, rounded complementary cells". NCERT says the phellogen cuts off "closely arranged parenchymatous cells" that rupture the epidermis. Suggest [NEW] adding to the periderm paragraph: "(NCERT calls these closely arranged parenchymatous cells)". Confidence: possible (founder's call).
- Kind: NCERT difference. Source: book/ours.

### 23. Notation: "casparian" in lower case in Topic 03, capital in the Additional topics; Dracaena not italic in one table head [NEW]
- Where: T3 Procedure D, Procedure E, Ex 3, MCQ 4, Cheat sheet, Pitfalls ("casparian thickenings", "casparian-banded"); KP topic 2 shortcut ("A casparian-banded endodermis"); `extras.ts` D table head "Dracaena-type Anomalous Growth".
- Fix [NEW]: "Casparian" with a capital throughout (named after Caspary), as in A, F and the Fig 6.3 labels; table head "<i>Dracaena</i>-type Anomalous Growth" (if the reader renders markup in table heads; otherwise leave).
- Kind: notation. Source: book (lower case) / transcription (table head). Confidence: certain.

### 24. Smaller wording points [NEW]
- (a) T1 MCQ 1 solution: "Collenchyma is the only tissue that is simultaneously mechanical and living with unlignified (cellulose–pectin) walls." Fix [NEW]: "Of these options, only collenchyma is both mechanical and living, with unlignified (cellulose, hemicellulose and pectin) walls." (overgeneral; also matches the harmonised wall composition). Confidence: likely.
- (b) E Worked ex 2 trap: "confusing phloem fibres (jute) with sclerenchyma fibres from stem tissue" (phloem is stem tissue too). Fix [NEW]: "confusing phloem (bast) fibres such as jute with sclerenchyma fibres from other tissues, such as coir from the coconut husk". Confidence: likely.
- (c) KP topic 3 mixup (heartwood) `why`: "...because tyloses block its vessels, while lenticels open the bark." The lenticel clause is a stray from the match example. Fix [NEW]: "Heartwood is central, so students infer it conducts; it does not, because tyloses block its vessels." Confidence: certain.
- (d) KP topic 9 #2 and F Practice 4: "in a dicot stem it is the starch sheath, which stores starch and has no Casparian strips" is absolute. Fix [NEW]: "...which stores starch and usually lacks Casparian strips". Confidence: possible.

### 25. Figure 6.3, monocot stem: bundles not oriented (phloem should face the outside) [REPEAT: R1 flag 19, optional, not applied]
- Where: `lib/diagrams/biology-11-06.ts`, `b11-06-fig-6.3`, case "Monocot stem" (book p. 373).
- What is wrong: in several bundles the phloem dot sits beside or inside the xylem rather than toward the periphery; a collateral bundle has phloem outward, xylem inward. The book's own drawing is equally loose, so this is optional.
- Fix: rotate each bundle so its phloem faces the stem surface. Kind: figure error (minor). Source: book. Confidence: certain (optional).

### 26. Figure 6.2, vessel: perforation plates drawn as solid bars [NEW, optional]
- Where: `b11-06-fig-6.2`, case "Xylem" (book p. 366).
- What is wrong: the end walls of vessel elements are perforated (open); drawing them as thick solid bars beside the label "Elements form one continuous tube" suggests closed cross-walls. The book draws them the same way.
- Fix: draw each perforation plate as a broken (open) bar or a rim with a gap. Kind: figure (minor). Source: book. Confidence: possible (optional).

## Earlier flags I believe were applied wrongly or incompletely
- R2 flag 5 (A introduction): "the one trace" is still a false "never covers" claim; T4 MCQ 1 nudge (d) is a second trace (my flag 3).
- R2 flag 8 (D introduction): the book's "recurring NEET question" became "a frequent NEET question (the book's estimate, not official)", which keeps the overclaim and contradicts D's own Note that Dracaena is beyond NCERT (my flag 4).
- R2 flag 10 / F2 item 33: the new tracheid wording says "the only conducting element" instead of "the only water-conducting element" (my flag 6).
- R1 flag 18: superlatives and frequency claims were softened only in part (my flag 12).
- R1 flag 13: "mostly cut from heartwood" was applied, but the same sentence still ends "not the perishable sapwood" (my flag 16).
- R2 flag 1: the Archetype 3 sentence on Framework A was kept although it is overgeneral (my flag 17).
- R1 flag 2 / F1 F2: the new T1 Practice 5 question asks for stages a mature cell "passes through", including one it has already passed (my flag 15).
- R1 flag 19 (Fig 6.3 monocot bundle orientation): not applied (optional) (my flag 25).
- All other R1 and R2 fixes I checked in place and found correct, including the radial-bundle "no cambium" wording, sapwood living parenchyma, bark definition, guard cells "grasses (monocots such as wheat, maize)", gymnosperm tracheids with the Gnetales note, mesarch nudge, phloem note, the A dicot-root separate-radii fix, the A Match iv wording, the starch-sheath A-R rewrite, the D dicot table cell, the E timber row and the hardboard-row deletion (the row was odd and not tied to any chapter tissue; deleting it is acceptable).

## Counts verified
- Topics: 11 (4 Topics, 7 Additional). Blocks: 44, 47, 44, 44, 12, 13, 10, 11, 11, 14, 29.
- MCQs: 16 (4 per Topic 01 to 04); every `correct` index checked against the book's printed answer and against the biology; all correct and unique. Every nudge read; all explain their own option.
- Worked examples: 37 (16 in Topics, 21 in Additional topics). Match-the-column keys checked: 7 (T1, T2, T3, T4, A, E, G); all correct. Assertion–reason items: 9 (T1, T2, T3, T4, A, D, E, G archetype 3, G Q7); every key checked ((a) eight times, (b) once, G archetype 3); every option set ends "(d) A false, R true"; no "both false" option anywhere.
- Practice items: 57 (20 in Topics; A 5, B 5, C 5, D 4, E 5, F 5, G 8); every answer checked against its question.
- Arithmetic recomputed: SI = 24/(24 + 76) × 100 = 24%; 18/(18 + 42) × 100 = 30%; S = 0.10 T and 0.35 T, 20 and 70 for T = 200; KP 24/76 × 100 = 31.6%; eight conducting-tissue elements = 4 dead + 4 living. All correct; fractions stacked.
- Key points: 34 read in full against the chapter (6+5+5+5 Topics 01 to 04 with memory lines, 2 each for A to F, 2 for G); issues in flags 1, 2, 9, 10, 11, 21, 24.
- Additional-topic introductions checked against the Topics as built: A (flag 3), B (true), C (true as now worded), D (true about Topic 04; frequency claim flag 4), E (true), F (flag 13), G (frequency labels present).
- Word-level diff of app against book per topic: every non-equal run inspected; the differences are the allowed ones (sub-topic renumbering, removed em dashes, removed "Example/Answer/Section" labels, hyphenation joins, fixers' listed changes). No missing or duplicated sentences, no copied-wrong numbers found apart from the fixers' deliberate changes.
- Italics: scientific names italic everywhere in the running text (Dracaena 19, Cucurbita 5, Quercus suber 5, Corchorus 4, others); no exam years anywhere; no em dashes.

## Figures checked (with pages)
- b11-06-fig-6.1 (p. 358): one case; parenchyma (with spaces), collenchyma corner thickening, fibre (tapering both ends) and sclereid; labels and notes match. OK.
- b11-06-fig-6.2 (p. 366): Xylem and Phloem cases; all book labels present (tapering closed ends, pits, elements form one continuous tube, perforation plates, sieve plate at both ends, living anucleate, living nucleate, plasmodesmata note). Flag 26 (optional).
- b11-06-fig-6.3 (p. 373): six cases; errata note "Di- to tetrarch xylem (2–4 groups); pith small or absent" present; exarch roots, endarch dicot stem, open ring of bundles, scattered closed bundles with sclerenchymatous sheath, dorsiventral and isobilateral leaves with bulliform cells; all labels match. Flag 25 (optional).
- b11-06-fig-6.4 (p. 379): (a) primary structure, (b) cambial ring (solid intrafascicular, dashed interfascicular), (c) secondary growth, and the trunk wedge (pith, heartwood, sapwood, spring and autumn wood, annual ring, vascular cambium, secondary phloem, periderm, lenticel). Layer order correct; the arrows between (a) to (c) are not drawn (panels are separate cases). OK.
- Pages 354 to 406 hold no other drawing (the text layer has only these four figure captions and `pdfimages -list` shows no raster images in the range).

## What I could not check
- I did not run jest (as instructed), so the figures were viewed from the SVG dumps in /private/tmp/claude-501/b12svg/ (written 2026-11-16 18:58, later than the diagrams file's last change at 17:19), rendered with qlmanage without the app's fonts.
- No device or Android rendering (STIX symbols, stacked fractions, table heads with markup).
- The page citations above each key point were checked only where a flag touched them.
- Exam-frequency claims (G Distribution, "Lower but consistent" for Topic 03) cannot be verified from sources available here; they are labelled as the book's estimate. My own experience is that dicot/monocot organ anatomy (Topic 03) is asked at least as often as the zones G ranks above it, so the founder may wish to soften "Lower but consistent".

## Overall judgement
The transcription is faithful and the two earlier fix rounds removed most of the book's overgeneral claims. The most important remaining error is the book's "oldest at the centre, youngest at the periphery" rule (flag 1), which is wrong for phloem and bark and is repeated as the Topic 04 Pro-Tip, a memory aid and two key points. The most important omission for NEET is gymnosperm phloem (flag 2). Several smaller items are in our own new wording (flags 3, 4, 6, 15, 19), and the beyond-NCERT Additional topics C and D carry book descriptions of Cucurbita and Dracaena anatomy that a botany teacher would correct (flags 9, 10).

## Summary
26 flags: 22 NEW, 4 REPEAT (flags 3, 12, 16 and the optional figure flag 25). Serious: 2 (flags 1 and 2); next in importance: flags 3 to 11.
