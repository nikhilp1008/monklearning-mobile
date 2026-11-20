# Biology 11 Chapter 11 (Photosynthesis in Higher Plants): third expert review (R3)

Reviewer: third independent review, run on Claude Opus, 2026-11-17. Scope: the whole chapter as it now stands, after fixers F1 and F2:
`content/textbooks/bio-11-11/topics-1-2.ts`, `topics-3-4.ts`, `extras.ts`, `lib/diagrams/biology-11-11.ts`, `lib/revise/keypoints-biology-11-11.ts`.
Book pp. 642 to 705 (`bio11.pdf`, `bio11.paged.txt`). No repo file was edited; no tsc, jest or git was run.

Method: own pass first (word-level 3-gram diff of every app string against the book text for pp. 642 to 705, both directions;
every equation, count, ratio and answer key recomputed; every Additional-topic introduction checked against Topics 01 to 04 as built;
every F1/F2 new wording read for correctness; the nine figures compared with the book's figure pages). Only then were R1 and R2 read
and each flag marked NEW (not raised before) or REPEAT (raised before, by a writer or reviewer, but not fixed or fixed wrongly).

Transcription: faithful. Every difference between the app and the book found by the diff is either a writer exception already listed
in writer-*.md or a fixer change listed in new-text-F1.md / new-text-F2.md, with one exception noted in flag 28 (undeclared Exam
Relevance labels). No missing or duplicated sentence, no wrong number, no misplaced example.

---

## Flags, most serious first

### 1. Additional D, Method (a): the new solubility sentence is itself false [applied wrongly: R2 6(a) and F2 decision 1]
- Where: `extras.ts`, Additional D (topic 7), Method, "Temperature optima" first paragraph; book p. 688.
- Says now: "Photorespiration rises with temperature (partly because CO<sub>2</sub> becomes less soluble than O<sub>2</sub> as water warms, so the CO2/O2 ratio at RuBisCO falls)."
- Wrong: CO<sub>2</sub> is far MORE soluble in water than O<sub>2</sub> at every temperature (roughly 20 to 30 times). What happens is that CO<sub>2</sub> solubility falls faster than O<sub>2</sub> solubility as water warms. "Becomes less soluble than O<sub>2</sub>" states a false fact. R2's wording ("O<sub>2</sub> dissolves less well than CO<sub>2</sub> as it warms") was also wrong; F2 caught the direction but wrote a new error.
- Fix [NEW]: "Photorespiration rises with temperature (partly because the solubility of CO<sub>2</sub> in water falls faster than that of O<sub>2</sub> as it warms, so the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio at RuBisCO falls, and partly because RuBisCO itself favours O<sub>2</sub> more at higher temperature)."
- Kind: biology error. Source: ours (fixer). Confidence: certain. Status: applied wrongly (R2 flag 6(a)).

### 2. Topic 04, factors bullet "NCERT values": the temperature numbers are not NCERT's [REPEAT / applied wrongly: R1 18; founder index item]
- Where: `topics-3-4.ts`, Topic 04 (topic 3), part "Key procedures and mechanisms", 3.3 Factors bullet list; NCERT 11 Biology, Photosynthesis, "Factors affecting photosynthesis".
- Says now: "<b>NCERT values:</b> the optimum temperature is about 20–25 °C for C<sub>3</sub> plants and 30–45 °C for C<sub>4</sub> plants; the rate of C<sub>3</sub> plants keeps rising with CO<sub>2</sub> until about 450 µL L<sup>−1</sup>, whereas C<sub>4</sub> plants saturate at about 360 µL L<sup>−1</sup>; light saturates at about 10 per cent of full sunlight, so apart from shade or dense forest, light is rarely limiting in nature."
- Wrong: NCERT gives no temperature numbers. Its line is that C<sub>4</sub> plants respond to higher temperatures and show a higher rate, while C<sub>3</sub> plants have a much lower temperature optimum. The 20–25 °C and 30–45 °C figures are the book's own (Additional D, p. 688), so labelling them "NCERT values" is a false attribution. Also NCERT says C<sub>3</sub> saturation is seen only BEYOND 450 µL L<sup>−1</sup>; "keeps rising until about 450" implies saturation at 450. The CO<sub>2</sub> 360 figure and the 10 per cent light figure are NCERT's and are right.
- Fix [NEW] (keep it, NCERT-faithful): "<b>NCERT values:</b> C<sub>4</sub> plants respond to higher temperatures and show a higher rate of photosynthesis, while C<sub>3</sub> plants have a much lower temperature optimum; C<sub>4</sub> plants show CO<sub>2</sub> saturation at about 360 µL L<sup>−1</sup>, while C<sub>3</sub> plants respond to increasing CO<sub>2</sub> and saturate only beyond 450 µL L<sup>−1</sup>; light saturation occurs at about 10 per cent of full sunlight, so except for plants in shade or in dense forests, light is rarely a limiting factor in nature."
- Kind: unclear or misleading (false attribution). Source: ours (fixer, on R1's suggestion). Confidence: certain. Knock-on: flags 11 and 17.

### 3. Additional B, shuttle table, aspartate column: NAD-malic enzyme does not decarboxylate OAA [applied wrongly: R2 1]
- Where: `extras.ts`, Additional B (topic 5), Method, shuttle table, row "Bundle sheath reaction", column "Aspartate shuttle"; book p. 684.
- Says now: "Aspartate is converted back to OAA, which is decarboxylated either by NAD-malic enzyme (NAD-ME type) or by PEP carboxykinase (PEP-CK type, CO<sub>2</sub> + PEP)"
- Wrong: malic enzyme acts on malate, not OAA. In NAD-ME plants the OAA from aspartate is first reduced to malate in the bundle-sheath mitochondria, and NAD-malic enzyme decarboxylates that malate (CO<sub>2</sub> + pyruvate). Only PEP carboxykinase acts on OAA (in the cytosol, giving CO<sub>2</sub> + PEP).
- Fix [NEW]: "Aspartate is converted back to OAA. In NAD-ME plants the OAA is reduced to malate in the mitochondria, and NAD-malic enzyme decarboxylates the malate (CO<sub>2</sub> + pyruvate); in PEP-CK plants PEP carboxykinase decarboxylates the OAA in the cytosol (CO<sub>2</sub> + PEP)"
- Kind: biology error. Source: ours (fixer). Confidence: certain. Status: applied wrongly (R2 flag 1).

### 4. Additional H, Trap 1: "6 of which reappear on the right" teaches a false idea [applied wrongly: R2 11]
- Where: `extras.ts`, Additional H (topic 11), part "The Traps", first `mistakes` item; book p. 700.
- Says now: "...is the built-in giveaway: writing 12 H<sub>2</sub>O on the left, 6 of which reappear on the right, shows that the O<sub>2</sub> comes from water."
- Wrong: the 6 H<sub>2</sub>O on the right are not 6 of the reactant waters passing through; they are newly made in the Calvin cycle and their oxygen comes from CO<sub>2</sub>. The reason for writing 12 H<sub>2</sub>O is that the 6 O<sub>2</sub> released hold 12 O atoms, all from water. The book's line ("the 12-H<sub>2</sub>O-in / 6-H<sub>2</sub>O-out asymmetry encodes the water source") was vague but not false; the fixer's rewording is false.
- Fix [NEW]: "...is the built-in giveaway: the 6 O<sub>2</sub> released hold 12 oxygen atoms, exactly the oxygen of the 12 H<sub>2</sub>O on the left, while the 6 H<sub>2</sub>O on the right are newly formed and take their oxygen from CO<sub>2</sub>. Any option suggesting CO<sub>2</sub> as the oxygen source is a trap."
- Kind: biology error. Source: ours (fixer). Confidence: certain. Status: applied wrongly (R2 flag 11).

### 5. Key point, Topic 01 pigments: the question asks for the order in which pigments RUN, and the answer gives a different order [NEW]; Topic 01 lead-in still says "In order" [REPEAT, R1 16 partly applied]
- Where: `keypoints-biology-11-11.ts`, topic 0, second `remember` point (pp. 645–647, 651); `topics-1-2.ts`, Topic 01, Key definitions, pigment table lead-in; book p. 644.
- Says now (KP q): "In what order do the leaf pigments run on a chromatogram, and what do the accessory pigments do?" Answer: "...chlorophyll a (bright or blue-green), chlorophyll b (yellow-green), xanthophylls (yellow) and carotenoids (yellow to yellow-orange)". Topic 01: "...resolves them into four bands. In order, with their characteristic colours (listed as NCERT lists them):"
- Wrong: on a paper chromatogram the carotenes run farthest, then xanthophylls, then chlorophyll a, then chlorophyll b (the chapter's own CUET example says the carotenoids travel farthest). The KP question asks for the running order and the answer gives NCERT's listing order, so a student learns a wrong band order. In Topic 01, "In order" next to "(listed as NCERT lists them)" still reads as band order.
- Fix [NEW] KP q: "Which four pigments does paper chromatography separate, with their colours, and what do the accessory pigments do?" Add to the answer after the four colours: "(this is NCERT's order of listing; on the strip the carotenoids run farthest)". Topic 01 lead-in [NEW]: "With their characteristic colours, in the order NCERT lists them (not the order of the bands on the strip):"
- Kind: unclear or misleading (KP: wrong answer to its own question). Source: ours (KP) and book (Topic 01). Confidence: certain (KP), likely (Topic 01).

### 6. Additional A, Example 2 (CBSE): "The chapter writes the shorter form" is now false [NEW, consequence of R1 1]
- Where: `extras.ts`, Additional A (topic 4), worked example "Scaling to Glucose", step 1; book p. 682.
- Says now: "The chapter writes the shorter form 6CO<sub>2</sub> + 18ATP + 12NADPH → glucose + 18ADP + 12NADP<sup>+</sup> (+ 18P<sub>i</sub>), which leaves out the H<sup>+</sup> and H<sub>2</sub>O; that shorter form is the one to quote when a question asks only for the ATP and NADPH counts."
- Wrong: F1 (R1 flag 1) replaced the chapter's short form in Topic 03 (stoichiometry paragraph and cheat-sheet "Overall" row) with this same balanced equation, so the chapter no longer writes the short form. Only the Topic 03 cheat-sheet "Stoichiometry" row gives the short count.
- Fix [NEW]: "The chapter (Topic 03) gives this same balanced form; its cheat sheet also gives the short count, 6 CO<sub>2</sub> + 18 ATP + 12 NADPH per glucose, which is the one to quote when a question asks only for the ATP and NADPH counts."
- Kind: unclear or misleading (false claim about the chapter). Source: book, made false by our fix. Confidence: certain.

### 7. Additional A, Introduction p2: the fixers' sentence is a false "the chapter does not" claim [applied wrongly: R2 3]
- Where: `extras.ts`, Additional A (topic 4), Introduction, second paragraph; book p. 681.
- Says now: "The chapter gives the per-turn and per-glucose counts, 3 ATP and 2 NADPH, 18 ATP and 12 NADPH, but does not trace why ATP outnumbers NADPH, and does not train the worded problems that scale them. Every NEET numerical on the Calvin cycle is a multiple or a fraction of these two numbers."
- Wrong: Topic 03 does trace it: Phase 2 "per CO<sub>2</sub> fixed, this phase uses 2 ATP and 2 NADPH", Phase 3 "using one more ATP per CO<sub>2</sub> fixed", and its NEET Speed Trap example scales 18 and 12 to 50 glucose (900 ATP, 600 NADPH). "Every NEET numerical" is an overgeneral exam claim.
- Fix [NEW]: "The chapter gives the per-turn and per-glucose counts (3 ATP and 2 NADPH; 18 ATP and 12 NADPH), the cost of each phase, and one scaled example (50 glucose). This section gathers the counting rules in one place and trains more of the worded problems that scale them. A Calvin-cycle numerical is usually a multiple or a fraction of these two numbers."
- Kind: false "never covers" claim. Source: ours (fixer, on R2's wording). Confidence: certain.

### 8. Additional H: assertion-reason fourth option "Both A and R are false" (two items) [REPEAT: writer-extras flagged; R1/R2 did not]
- Where: `extras.ts`, Additional H (topic 11): Archetype 5 worked representative (book p. 699), and Graded Practice Q9 [Hard] (book p. 703).
- Says now: "(d) Both A and R are false" in both.
- Wrong: house rule for assertion-reason: the fourth option is "A is false but R is true", never "both false". Neither key changes (both are (a)).
- Fix [NEW]: in both items, "(d) A is false but R is true".
- Kind: MCQ format (house rule). Source: book. Confidence: certain.

### 9. Figure 11.4: the "Calvin cycle in stroma" leader ends on the inner envelope, not in the stroma [NEW]
- Where: `lib/diagrams/biology-11-11.ts`, `draw114`, last `lead(...)` call (end point `[152, 238]`); book p. 655.
- Says now: the leader dot sits about 3 px inside the inner envelope line (inner ellipse at x = 152 is at y ≈ 241), so on screen it reads as pointing at the inner envelope membrane. The book's arrow points well into the stroma.
- Wrong: a student reads "Calvin cycle" as located on the inner membrane. No check covers this leader.
- Fix [NEW]: end the leader inside the stroma, clear of the membrane, for example at `[170, 222]` (just left of the "Stroma" word), and add a check that the end point lies inside the inner ellipse with a margin of at least 10 px.
- Kind: figure error. Source: ours (drawing). Confidence: likely (rendered from the 2026-11-16 18:58 dump, which post-dates the file's last change; the app font may shift text but not the leader end).

### 10. Topic 02 chemiosmosis: NADP<sup>+</sup> reduction listed as "crowding protons into the lumen" [NEW; R1 3 fixed only Topic 03]
- Where: `topics-1-2.ts`, Topic 02 (topic 1), part "Key procedures and mechanisms", paragraph before the numbered list; and cheat sheet row "Chemiosmosis"; book pp. 658, 662.
- Says now: "Three things crowd protons into the thylakoid lumen:" (item 3 is "NADP<sup>+</sup> reduction removes an H<sup>+</sup> from the stroma side"); cheat row: "H<sup>+</sup> piled into the lumen (water-splitting + carrier shuttle + NADP<sup>+</sup> reduction) → rush back through ..."
- Wrong: NADP<sup>+</sup> reduction removes H<sup>+</sup> from the stroma; it adds none to the lumen. R1 flag 3 fixed the same wording in Topic 03's cheat sheet only, so the two topics now disagree.
- Fix [NEW]: lead-in "Three things build the gradient: two add protons to the thylakoid lumen, and one removes them from the stroma:"; cheat row "H<sup>+</sup> piled into the lumen (water-splitting + carrier shuttle) and stromal H<sup>+</sup> used up in NADP<sup>+</sup> reduction → rush back through <b>ATP synthase (F<sub>0</sub>–F<sub>1</sub>)</b> → ATP. Gradient = the real energy store (works even in the dark)."
- Kind: biology error (misleading). Source: book. Confidence: certain.

### 11. Additional D, Introduction: two claims about the chapter's table are now false [NEW (i); applied wrongly R2 4 (sites)]
- Where: `extras.ts`, Additional D (topic 7), Introduction; book p. 688.
- Says now: "The chapter provides a comparison table (Topic 04) covering acceptor, first product, fixing enzyme, Kranz anatomy, the sites of photosynthesis and photorespiration, and examples. What it omits: (i) temperature optima and why they differ, ..."
- Wrong: (a) the Topic 04 table has a "Photorespiration" row giving how much (Significant / Negligible), not where; there is no site-of-photorespiration row. (b) With F1's "NCERT values" bullet the chapter now gives the temperature optima (20–25 and 30–45 °C), so (i) is false as the chapter stands. If flag 2's fix is applied, the chapter no longer gives numbers and (i) can name them.
- Fix [NEW]: "covering acceptor, first product, fixing enzyme, sites of photosynthesis, Kranz anatomy, how much photorespiration occurs, and examples. What it omits: (i) the temperature optima as numbers, and why they differ, ..." (if flag 2 is NOT applied, use "(i) why the temperature optima differ, ...").
- Kind: false "never covers" claim. Source: ours (fixer). Confidence: certain.

### 12. Additional C, Introduction (iv): "the reason C<sub>4</sub> plants suppress it" is listed as omitted [REPEAT: writer-extras flagged FALSE; R2 4 kept it]
- Where: `extras.ts`, Additional C (topic 6), Introduction; book p. 686.
- Says now: "What it omits: ... (iv) the reason C<sub>4</sub> plants suppress it, and the extent to which the suppression is not absolute."
- Wrong: Topic 04 gives the reason twice ("Why C<sub>4</sub> plants escape it: by concentrating CO<sub>2</sub> in the bundle sheath, they keep RuBisCO's CO<sub>2</sub>/O<sub>2</sub> ratio high..."; also the C<sub>4</sub> pathway steps).
- Fix [NEW]: "(iv) how far the suppression in C<sub>4</sub> plants goes: the chapter gives the reason (a high CO<sub>2</sub> concentration around RuBisCO in the bundle sheath) but not that a little photorespiration remains."
- Kind: false "never covers" claim. Source: book. Confidence: certain.

### 13. Additional F, Introduction (iii): the water-stress connection is listed as omitted [REPEAT: writer-extras flagged FALSE; R2 4 only appended ABA]
- Where: `extras.ts`, Additional F (topic 9), Introduction; book p. 692.
- Says now: "What it omits: ... (iii) the water-stress connection (stomatal closure → CO<sub>2</sub> limitation → photosynthesis falls) and the hormone and guard-cell mechanism behind that stomatal closure (abscisic acid), ..."
- Wrong: Topic 04 states it: "Water: under water stress, stomata close, cutting CO<sub>2</sub> supply, so the photosynthetic rate falls (water acts indirectly, mostly through stomata)." Only ABA and the guard-cell mechanism are new.
- Fix [NEW]: "(iii) the hormone and guard-cell mechanism (abscisic acid) behind the stomatal closure under water stress that the chapter mentions, ..."
- Kind: false "never covers" claim. Source: book. Confidence: certain.

### 14. Additional C, Example 1: "This answer adds the order" is false [NEW, fixer wording]
- Where: `extras.ts`, Additional C (topic 6), worked example "Tracing the Pathway", step; book p. 687.
- Says now: "the chapter names the three organelles and says CO<sub>2</sub> is released in the mitochondrion. This answer adds the order and the glycine step."
- Wrong: Topic 04 already gives the order ("Three organelles: chloroplast → peroxisome → mitochondrion"). What the answer adds is the return trip (back to the peroxisome, then the chloroplast) and the glycine step.
- Fix [NEW]: "This answer adds the return trip through the peroxisome to the chloroplast, and the glycine step."
- Kind: false claim about the chapter. Source: ours (fixer). Confidence: certain.

### 15. Additional B, Introduction (iii): CAM "night and day steps" are now in the chapter [NEW, consequence of R1 4]
- Where: `extras.ts`, Additional B (topic 5), Introduction; book p. 683.
- Says now: "What it omits: ... (iii) the CAM pathway, which the chapter mentions in one line (steps separated in time), with its night and day steps, ..."
- Wrong: F1's new Topic 04 CAM bullet already gives the night and day steps ("PEP carboxylase fixation at night, Calvin cycle by day").
- Fix [NEW]: "(iii) the CAM pathway in more detail: the chapter gives it one line (fixation at night, Calvin cycle by day); this section adds the stomatal timing, malate storage in the vacuole and examples, ..."
- Kind: false "never covers" claim. Source: ours (fixer). Confidence: certain.

### 16. Additional D, kalam: still the old compensation-point definition [NEW]
- Where: `extras.ts`, Additional D (topic 7), `kalam`.
- Says now: "The CO2 compensation point is the atmospheric CO2 concentration at which photosynthetic CO2 uptake exactly equals respiratory CO2 release."
- Wrong: R2 6(e) made the body define it as net exchange zero, "respiration plus, in C<sub>3</sub> leaves, photorespiration"; the kalam (the topic's headline line) still gives the respiration-only form, so the topic contradicts itself.
- Fix [NEW]: "The CO2 compensation point is the CO2 concentration at which a leaf's net CO2 exchange is zero."
- Kind: unclear or misleading (internal contradiction). Source: book. Confidence: certain.

### 17. Additional F light-saturation figures now clash with Topic 04's NCERT "10 per cent of full sunlight" [NEW]
- Where: `extras.ts`, Additional F (topic 9), Method, LSP bullet ("≈ 500–800 μmol photons m<sup>−2</sup> s<sup>−1</sup>") and monsoon working ("light drops to ≈ 200–500 ..., below the saturation point"); `topics-3-4.ts` Topic 04 NCERT bullet; book pp. 693, 694.
- Wrong: with full sunlight at 1500–2000 (F's own figure), NCERT's 10 per cent is about 150–200, which would make 200–500 at or above saturation. A student who reads both meets two answers. Sunlit crop leaves really do saturate higher than 10 per cent, so the F figures are defensible as "illustrative", but the clash needs one sentence.
- Fix [NEW] (add after the LSP bullet's figure): "NCERT gives a rounder figure, light saturation at about 10 per cent of full sunlight; sunlit crop leaves often saturate higher, as in the illustrative figures here."
- Kind: number (internal inconsistency). Source: book plus our Topic 04 addition. Confidence: possible.

### 18. Additional D, Mixed-pathway plants: the lead-in says C<sub>3</sub>/C<sub>4</sub> but both examples are CAM switches [NEW]; Portulaca line [REPEAT, founder decision 2]
- Where: `extras.ts`, Additional D (topic 7), Method, "Mixed-pathway plants"; book p. 689.
- Says now: "Some plants use both C<sub>3</sub> and C<sub>4</sub> or switch between them:" followed by Portulaca (C<sub>4</sub> to CAM) and Kalanchoe (CAM to C<sub>3</sub>-like).
- Wrong: neither example uses both C<sub>3</sub> and C<sub>4</sub>. The Portulaca facultative-CAM fact is real (in the literature) but not NCERT; founder decision 2 stands.
- Fix [NEW]: "Some plants run more than one pathway or switch between them:"
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 19. Additional D, Method (b): C<sub>4</sub> temperature lines overclaim [NEW]
- Where: `extras.ts`, Additional D (topic 7), Method, second paragraph; book p. 688. Same idea in KP topic 7 remember ("so higher temperature favours them by speeding the PEP carboxylase reaction").
- Says now: "Because photorespiration is suppressed by the high CO<sub>2</sub> concentration around RuBisCO, temperature does not increase photorespiration. Higher temperature actually favours C<sub>4</sub> plants by accelerating the PEP carboxylase reaction."
- Wrong: temperature does raise RuBisCO's oxygenase tendency in C<sub>4</sub> bundle sheath too; it is the high CO<sub>2</sub> that keeps the effect small. The PEP carboxylase reason is a simplification the chapter does not support.
- Fix [NEW]: "Because photorespiration is suppressed by the high CO<sub>2</sub> concentration around RuBisCO, a rise in temperature raises it far less than in C<sub>3</sub> plants, so C<sub>4</sub> plants keep photosynthesising efficiently when it is hot." KP topic 7 [NEW]: "while in C<sub>4</sub> plants it stays suppressed, so they keep working well when it is hot."
- Kind: biology (overclaim). Source: book. Confidence: possible.

### 20. Topic 02 weedicide example: "precisely how such herbicides kill weeds" [NEW]
- Where: `topics-1-2.ts`, Topic 02 (topic 1), worked example NEET High-Difficulty / Application, bullet 2; book p. 659.
- Says now: "...the plant effectively cannot photosynthesise, which is precisely how such herbicides kill weeds."
- Wrong: DCMU-type herbicides kill mainly through the light damage (photo-oxidation) that follows the blocked chain, not by starvation alone; "precisely" overclaims.
- Fix [NEW]: "...the plant effectively cannot photosynthesise; together with the light damage that the blocked chain causes, this is how such herbicides kill weeds."
- Kind: biology (overclaim). Source: book. Confidence: possible.

### 21. Leftover "proves / proof" wording after the fixers softened E [NEW]
- Where and says now: `extras.ts` G (topic 10) row "Hill reaction (Hill, 1937)": "Proves water splitting is a thylakoid function."; E (topic 8) Practice 1 question: "what does it prove about the site of water splitting?" (the answer now says "shows"); H (topic 11) Graded Q9 answer: "This is the experimental proof of Mitchell's chemiosmotic hypothesis." (book pp. 695, 692, 703).
- Wrong: inconsistent with E's softened wording; the acid-bath experiment (Jagendorf) is strong support, not proof.
- Fix [NEW]: G "Shows that water splitting is a thylakoid function."; E practice 1 "what does it show about the site of water splitting?"; H Q9 "This is classic experimental support for Mitchell's chemiosmotic hypothesis."
- Kind: unclear or misleading (overclaim). Source: book. Confidence: likely.

### 22. "Entirely" / "never" for C<sub>4</sub> photorespiration, against the chapter's own "suppressed, not absent" [NEW]
- Where: `topics-3-4.ts` Topic 04 (topic 3), worked example NEET High-Difficulty / Assertion–Reason, step: "C<sub>4</sub> plants sidestep this entirely by using PEPcase..."; Topic 04 C<sub>4</sub> step 4: "RuBisCO essentially never binds O<sub>2</sub>" (book pp. 674, 677).
- Wrong: Additional C (as fixed) says C<sub>4</sub> plants still show a small amount of photorespiration.
- Fix [NEW]: "C<sub>4</sub> plants largely sidestep this by using PEPcase..."; "RuBisCO rarely binds O<sub>2</sub>".
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 23. "PS I only receives them" / "PS II only splits water" [NEW]
- Where: `extras.ts` H (topic 11) Trap 2: "In fact PS II acts first (it splits water and passes electrons on to PS I); PS I only receives them."; KP topic 1 `mistake`: "it sends electrons to PS I, which only receives them."; `topics-1-2.ts` Topic 02 MCQ 1 nudge (a): "PS II only splits water." (book pp. 700, 660).
- Wrong: PS I receives the electrons and re-excites them to NADP<sup>+</sup>; PS II also passes electrons on to plastoquinone. "Only" understates both.
- Fix [NEW]: Trap 2 "...; PS I receives them and passes them on to NADP<sup>+</sup>."; KP "it sends electrons to PS I, which passes them on to NADP<sup>+</sup>."; nudge "PS II splits water and passes electrons on; it does not reduce NADP<sup>+</sup>."
- Kind: unclear or misleading. Source: book (KP copies it). Confidence: likely.

### 24. Unlabelled exam-frequency claims still in place [REPEAT: writer reports list them]
- Where and says now: `extras.ts` A Method rule 5 "This photon count is rarely asked in NEET numericals"; B Introduction "These distinctions appear in NEET high-difficulty options."; C Introduction "NEET assertion–reason questions hinge on these fine points."; E Introduction "NEET occasionally asks for the Hill reagent or the stoichiometry of oxygen release"; H "Three Facts to Lock In" 1 "NEET asks the per-CO<sub>2</sub> ratio directly"; `topics-1-2.ts` Topic 02 pitfall 2 "Examiners plant this in assertion–reason questions constantly."; `topics-3-4.ts` Topic 04 Exam Relevance "is a perennial NEET high-difficulty item".
- Wrong: frequency claims without the "(the book's estimate)" label used elsewhere in this chapter.
- Fix [NEW]: either add "(the book's estimate)" after each, or soften: A "This photon count is seldom needed in NEET numericals"; C "NEET-style assertion–reason questions can turn on these points."; E "NEET-style questions may ask for the Hill reagent..."; H "NEET-style questions ask the per-CO<sub>2</sub> ratio directly"; Topic 02 "Examiners often plant this in assertion–reason questions."; Topic 04 "is a common NEET-style high-difficulty item".
- Kind: exam claim. Source: book. Confidence: certain (that they are unlabelled).

### 25. Topic 03 balanced equation: "(ATP side schematic)" is opaque to a student [NEW]
- Where: `topics-3-4.ts` Topic 03 (topic 2), stoichiometry paragraph and cheat-sheet "Overall" row (F1 item 1).
- Says now: "... + 12 NADP<sup>+</sup> + 6 H<sub>2</sub>O (ATP side schematic)"
- Wrong: the equation is correct for C, H, O and charge except that ATP → ADP + P<sub>i</sub> uses water, which is left out; "ATP side schematic" does not tell a student that.
- Fix [NEW]: "(balanced for C, H and O; the water used in splitting ATP into ADP + P<sub>i</sub> is left out)"
- Kind: unclear wording. Source: ours (fixer). Confidence: likely.

### 26. Key point, H `mistake`: the `why` line is unrelated to the question [NEW]
- Where: `keypoints-biology-11-11.ts`, topic 11, `mistake` point ("Which traps does the chapter's question set keep using?").
- Says now (why): "In a sealed bright greenhouse CO<sub>2</sub> runs out first, so light or water cannot raise the rate."
- Wrong: the point is about the seven traps; the greenhouse line belongs to Blackman's law and explains nothing here.
- Fix [NEW]: "Before marking an option, check it against these swaps: many wrong options in this chapter are one of them."
- Kind: key point. Source: ours (KP). Confidence: certain.

### 27. Figure 11.5: the "PC" label sits on top of the "energy released → ATP synthesis" note, away from its dot [NEW]
- Where: `lib/diagrams/biology-11-11.ts`, Figure 11.5; book p. 657.
- Says now: in the render, "PC" is printed directly above "energy released / → ATP synthesis", so it reads as the first line of that note; the PC dot is to the right; "Cyt b<sub>6</sub>f" also floats above-right of its dot.
- Fix [NEW]: put "PC" just below-left of its own dot (as the book does) and move the "energy released → ATP synthesis" note so a gap separates them.
- Kind: figure (legibility). Source: ours (drawing). Confidence: possible (render lacks the app fonts).

### 28. Process: new wording not in the new-text lists, and two lines that now disagree [NEW / REPEAT]
- The label "(the book’s estimate from past papers, not official figures)" in the Exam Relevance paragraphs of Topics 02, 03 and 04 (`topics-1-2.ts` Topic 02; `topics-3-4.ts` Topics 03 and 04) is new wording but appears in neither new-text-F1.md nor new-text-F2.md (it is a writer exception), so the founder has not been shown it. [NEW]
- Topic 01 cheat-sheet aid keeps "a-b-X-C → green→green→yellow→orange" while the KP `say` line now reads "a-b-X-C → blue-green → yellow-green → yellow → yellow-orange" (F2 decision 3). Choose one. The KP header comment still says the second aid is "the book's own colour line" and is stale. [REPEAT, founder decision]

### 29. Topic 01 assertion–reason example (van Niel): key (a) is defensible but arguable [REPEAT: R1 12, kept]
- Where: `topics-1-2.ts`, Topic 01 (topic 0), worked example NEET High-Difficulty / Assertion–Reason; book p. 649.
- Says now: A "In green plants, the oxygen evolved ... comes from water." R "Photosynthetic sulphur bacteria use H<sub>2</sub>S instead of H<sub>2</sub>O and release sulphur rather than oxygen." Key (a).
- Note: R is the analogy that led van Niel to A, not an explanation of why plant O<sub>2</sub> comes from water; a strict examiner could key (b). The softened step ("R is the evidence (by analogy) that led van Niel to A") is accurate. Keep (a) with that step; no change proposed unless the founder prefers to avoid the item.
- Kind: MCQ key (arguable). Source: book. Confidence: possible.

---

## Earlier flags I believe were applied wrongly or incompletely
- R1 18 (NCERT values): temperature figures are the book's, not NCERT's; C<sub>3</sub> CO<sub>2</sub> saturation misworded (flag 2; knock-on flags 11, 17).
- R1 1 (balanced Calvin equation): correct in Topic 03, but it made Additional A Example 2's "The chapter writes the shorter form" false (flag 6).
- R1 3 (chemiosmosis cheat row): fixed in Topic 03 only; the same error stays in Topic 02's cheat row and text (flag 10).
- R1 4 (CAM bullet): correct, but B's Introduction still lists the night and day steps as omitted (flag 15).
- R1 16 (pigment table): "In order" kept beside "(listed as NCERT lists them)" (flag 5).
- R2 1 (aspartate shuttle): NAD-ME now said to decarboxylate OAA (flag 3).
- R2 3 (A Introduction): the replacement sentence is itself a false "does not" claim (flag 7).
- R2 4 (never-covers): D Introduction now names a "site of photorespiration" row that does not exist (flag 11); C (iv) and F (iii) false claims kept (flags 12, 13).
- R2 6(a) (temperature and solubility): R2's wording was wrong and F2's replacement is also wrong (flag 1).
- R2 6(e) (compensation point): body fixed, kalam not (flag 16).
- R2 11 (traps water asymmetry): reworded into a false statement (flag 4).
All other R1 and R2 items were checked in place and are applied correctly (R1 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17; R2 2, 5, 7, 8, 9, 10, the remaining parts of 11).

## Rulings on the writers' and fixers' open items
- F2 decision 1 (D temperature wording): disagree with both versions; use flag 1's wording.
- F2 decision 2 (Portulaca): the fact is real but not NCERT; keeping it is acceptable if the lead-in is fixed (flag 18). The replacement D practice 4 (Opuntia, key (b)) is correct and has one right answer.
- F2 decision 3 (mnemonic): change the topic aid to match the KP say line, or revert the say line; one form only (flag 28).
- F2 decision 4 (H Q2 "chief pigment ... reaction centre of both photosystems"): agree.
- F1 item 18 / index "Ch 11 NCERT values bullet": verify-or-drop resolved by flag 2: keep it, with NCERT's own wording.
- Writer item "C.2 Fixed nitrogen is lost as ammonia": fixed correctly ("must be re-assimilated at a cost in ATP").
- Writer item "C4 practice 4 'does not occur'": fixed correctly ("negligible").

## Counts verified
- Topics 01 to 04: each 4 worked examples, 5 practice items, 4 MCQs, 4 pitfalls, 1 pro-tip; tables: Topic 01 pigments, Topic 02 cyclic/non-cyclic, Topic 04 C<sub>3</sub> vs C<sub>4</sub>. Additional A 4 ex / 5 practice (and a 5-rule `proc`); B 3 / 5 (shuttle table 6 rows); C 3 / 5; D 3 / 5; E 2 / 4; F 3 / 5; G 11 snapshot rows; H 5 representatives, 7 traps, 12 graded items, 2 tables. All match the book and the writer reports.
- Every marked key and printed answer checked against its question: all correct (keys unchanged by any flag above).
- Arithmetic recomputed, all correct: 18 × 50 = 900 ATP, 12 × 50 = 600 NADPH; 120 CO<sub>2</sub> → 360 ATP, 240 NADPH; 10 glucose → 60 turns → 180 ATP (120 NADPH); 30 CO<sub>2</sub> → 60 NADPH; 54 ATP → 18 CO<sub>2</sub>; per CO<sub>2</sub> 3 ATP + 2 NADPH; C<sub>4</sub> 3 + 2 = 5 ATP per CO<sub>2</sub>, 30 per glucose, 12 extra; photons 2 + 2 per NADPH, 24 at PS I and 48 in all for 12 NADPH; photorespiration 2 phosphoglycolate (4 C) → 1 CO<sub>2</sub> + 1 glycerate (3 C), 0.5 CO<sub>2</sub> per oxygenation; 2 DCPIP per O<sub>2</sub>; Fig 11.7 3 RuBP + 3 CO<sub>2</sub> → 6 PGA, 18 C balance, 5 G3P (15 C) → 3 RuBP, 9 ATP + 6 NADPH.
- Equations balanced (atoms and charge): overall photosynthesis; van Niel's 2 H<sub>2</sub>A + CO<sub>2</sub> → 2 A + CH<sub>2</sub>O + H<sub>2</sub>O; light-reaction summary (2 H<sub>2</sub>O + 2 NADP<sup>+</sup> ... → 2 NADPH + 2 H<sup>+</sup> + O<sub>2</sub>); photolysis; Calvin with 12 H<sup>+</sup> and 6 H<sub>2</sub>O (ATP hydrolysis water omitted, flag 25); Hill with DCPIP.
- Errata (pp. 1171–1177) present everywhere: accessory pigments "chlorophyll b, xanthophylls and carotenoids"; chlorophyll a blue (~430 nm) and red (~660 nm); "Accessory pigments (chlorophyll b and the carotenoids) funnel energy to chlorophyll a" (H Q2); H table headed "Indicative NEET emphasis" with "indicative only".
- Key points: all 34 read against the chapter text and book pages; errors only as in flags 5, 19, 23, 26, 28.

## Figures checked (rendered from the dump at /private/tmp/claude-501/b12svg, 2026-11-16 18:58, newer than the diagram file's last change; compared with the book pages)
- 11.1 (p. 646): curves, peaks at ~430 and ~660 nm, labels, caption: match.
- 11.2 (p. 646): three jars, labels, caption: match.
- 11.3 (p. 648): prism, six bands, Cladophora filament, bacteria density, captions: match (bands unfilled by house style).
- 11.4 (p. 655): all labels match; leader error in flag 9.
- 11.5 (p. 657): carrier order, two hν, water equation, caption: match; label crowding in flag 27.
- 11.6 (p. 665): membrane, PS II, Cyt b<sub>6</sub>f, F<sub>0</sub>/F<sub>1</sub>, H<sup>+</sup> arrows, NADP<sup>+</sup> reductase, caption: match.
- 11.7 (p. 668): all counts, F1's "2 G3P make 1 glucose" label and caption addition: correct.
- 11.8 (p. 675): match.
- 11.9 (p. 677): match (book's curves; the baseline still rises well past the marked "transition point", as in the book; not flagged).
- No unnumbered drawings on pp. 642 to 705 (agrees with the diagram report; checked by the text layer and the figure pages only, no `pdfimages` count).

## Could not check
- The diagrams in the app's own fonts or on a device (no jest dump, no simulator, no Android, per the brief); positions were judged from the qlmanage render.
- Tables other than the figures were compared through the text layer, not page images (pigment table p. 644, cyclic table p. 654, C<sub>3</sub>/C<sub>4</sub> table p. 673, shuttle table p. 684, H tables pp. 696 and 698); the diff found no cell differences beyond the fixers' listed changes.
- NCERT wording quoted in flag 2 is from my knowledge of the NCERT Class 11 text (Photosynthesis in Higher Plants, Factors affecting photosynthesis); the NCERT book itself is not in the repo.
- Exam-frequency claims (H Distribution) cannot be verified; they are labelled as the book's estimate.

## Overall judgement
The transcription is faithful and every number, key and equation is right. The risk now sits in the fixers' own new wording: four of their sentences state false science (flags 1, 3, 4, and the NCERT attribution in flag 2), and four "the chapter does not cover" claims are false, three of them made false by the fixes themselves (flags 6, 7, 11, 15) and two left from the book (12, 13). One key point teaches a wrong chromatogram order (flag 5), and the assertion-reason "both false" option survives twice in H (flag 8). None of these is hard to fix with the exact wording given above.

## Summary
29 flags: 23 NEW (six of them, flags 1, 3, 4, 6, 7 and 11, are errors created when an earlier flag was applied; flags 5, 18 and 28 also carry a REPEAT part) and 6 REPEAT (flags 2, 8, 12, 13, 24, 29). Serious: 8 (flags 1 to 8). Figures: 2 flags (9 likely, 27 possible).
