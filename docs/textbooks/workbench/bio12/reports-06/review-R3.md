# Review R3 (third expert review): Biology 12 Chapter 6 (Evolution), whole chapter, as it now stands after fixers F1 and F2

Reviewer: R3. Nothing in the repo was edited except this report. No tsc, jest or git was run.
Files read in full: content/textbooks/bio-12-06/topics-1-2.ts, topics-3-4-extra-a.ts, extras-b-d.ts; lib/diagrams/biology-12-06.ts; lib/revise/keypoints-biology-12-06.ts; briefs MAC-BRIEF-B12-06.md and MAC-REVIEW_BRIEF-B12.md; bio11/FOUNDER-REVIEW-INDEX.md; new-text-F1.md and new-text-F2.md.
Method: my own full pass first: a word-level diff (script) of every app string against the book text dump for pp. 295 to 350; page images for the four figure pages (pp. 300, 309, 319, 327) and the tables on pp. 316 and 335; every number, equation, chi-square, root, rate and ratio recomputed; every printed key checked against its question; every Additional-topic introduction checked against Topics 01 to 04 as built; every [NEW] wording in new-text-F1/F2 checked. Only after that were review-R1.md and review-R2.md read, to mark each flag NEW or REPEAT.
Topic numbering below: Topic 01 to 04, Additional A to D (key-point `topic` index 0 to 7).

## FLAGS, most serious first

### 1. [NEW] Additional D, graded practice Q10 answer: an editor's instruction is printed to the student
Where: extras-b-d.ts, Additional D, "A Graded Practice Set", Q10 (book p. 349), `a`.
Says now: "... (Current work treats the early atmosphere as less strongly reducing than NCERT states.) If the key (a) is preferred, reword R to “Because free oxygen was absent, organic molecules formed from the gases could accumulate instead of being oxidised.”"
Wrong: the last sentence is R2's note to the founder (R2 flag 1, "If the founder keeps (a), reword R ..."), copied by F2 into the student-facing answer. A student reads an instruction to an editor and a second, contradictory key. The key itself was changed from the book's (a) to (b) and is still a founder decision (new-text-F2, decision 1).
Fix [NEW], answer: "<b>Answer:</b> (b). Both are true, but R does not explain why the atmosphere was reducing; it explains why a reducing atmosphere was necessary for chemical evolution: oxygen is a strong oxidising agent that would have oxidised organic monomers as fast as they formed, so without it step 2 of chemical evolution (inorganic → organic monomers) could not proceed. (Current work treats the early atmosphere as less strongly reducing than NCERT states.)" Keep the alternative wording of R only in new-text-F2 for the founder.
Kind: transcription slip (fixer's). Source: ours (introduced by F2). Confidence: certain.

### 2. [NEW] Topic 02, Key derivation, "Precision note": only selection and drift "actually change frequencies"
Where: topics-1-2.ts, Topic 02, "Key derivation and conceptual frameworks", the "Precision note" paragraph (book p. 311).
Says now: "NCERT lists all five as factors affecting equilibrium, and that is the exam-expected answer, but selection and drift are the forces that actually change frequencies."
Wrong: gene flow changes allele frequencies (often fast), and mutation changes them too (slowly). The same topic says so twice: Concept intuition "natural selection, gene flow and genetic drift change its frequency" and the Caveats bullet (F1's) "a small population, mutation, gene flow or selection changes allele frequencies". A student is told two different things on one page.
Fix [NEW]: "... and that is the exam-expected answer, but the forces that actually change allele frequencies are selection, drift and gene flow, with mutation acting only very slowly."
Kind: biology error (overgeneral). Source: book. Confidence: certain.

### 3. [REPEAT: R2 flag 16, applied wrongly] Additional B, Introduction: adaptive radiation is placed in Topic 02
Where: extras-b-d.ts, Additional B, Introduction (book p. 334).
Says now: "The chapter treats adaptive radiation (Topic 02 and Topic 04) and, in the Modern Synthesis (Topic 02), names reproductive isolation ..."
Wrong: adaptive radiation is treated in Topic 01 (Core terms: "Adaptive radiation ... Darwin’s finches ... marsupials of Australia"; Practice 5; cheat sheet "Adaptive radiation (Osborn)") and Topic 04 (Framework B). Topic 02 never mentions it (grep of all three files). R2's own fix wording carried the slip; F2 applied it as given.
Fix [NEW]: "The chapter treats adaptive radiation (Topic 01 and Topic 04) and, in the Modern Synthesis (Topic 02), names reproductive isolation as part of how speciation is explained." (The kalam, which names no topic, is fine.)
Kind: false claim about the chapter. Source: ours (R2/F2). Confidence: certain.

### 4. [NEW] Additional C and key points: "the chapter mentions ... ~1.8%", but the chapter no longer says 1.8%
Where: extras-b-d.ts, Additional C, Introduction (p. 338); Worked example "Molecular vs Morphological Evolution" stem and last step (p. 339); keypoints topic 0 "remember" (five classes) and topic 6 second "remember".
Says now: C intro "The chapter mentions molecular evidence for evolution (human–chimpanzee DNA differing in ~1.8% of base pairs, about 1.2 to 1.8% depending on how differences are counted)"; C.2 "than the observed ~1.8%" and "The ~1.8% figure counts differences"; KP 0 "the book gives human and chimpanzee DNA as differing in about 1.8% of bases".
Wrong: F1 (R1 flag 17) changed every 1.8% in Topic 01 to "about 1–2% of aligned bases" (evidence table, Framework B, MCQ 3 "more than 98 per cent identical", cheat sheet). The Additional-C introduction now misquotes the chapter, and the key point quotes a figure the student cannot find in the chapter. Two fixers worked from two flags without reconciling.
Fix [NEW]: C intro: "The chapter mentions molecular evidence for evolution (human and chimpanzee DNA differ in only about 1–2% of aligned bases, the figure depending on how differences are counted) but does not develop the concept of a molecular clock: ..."; C.2 stem: "... their DNA should differ by a much larger percentage than the observed 1–2%."; C.2 last sentence: "The 1–2% figure counts differences, most of them neutral; it does not measure the rate of morphological change."; KP topic 0: "molecular (the more alike the genetic material, the closer the relationship; human and chimpanzee DNA differ in only about 1–2% of aligned bases, and the figure depends on how differences are counted)"; KP topic 6: "Most DNA differences are neutral, which is why a small DNA difference (about 1–2% for human and chimpanzee, depending on how differences are counted) sits beside large differences in appearance".
Kind: false claim about the chapter / internal inconsistency. Source: ours (fixers). Confidence: certain.

### 5. [REPEAT: R1 flag 8, applied wrongly] Topic 03, Practice 1 (iii) now gives its own answer away
Where: topics-3-4-extra-a.ts, Topic 03, Practice exercises item 1 (book p. 321).
Says now: "[CBSE] Name the hominin associated with each: (i) an early bipedal hominin, (ii) the “handy man”, credited with tools, (iii) an early Neanderthal-associated burial." Answer "(iii) Neanderthal man".
Wrong: the clue names the answer; the item no longer tests anything. (R1's point, that "first known to bury its dead" is an overclaim, is right; the replacement is the problem.)
Fix [NEW]: "(iii) the hominin that covered the body with hides and buried its dead." Answer unchanged.
Kind: unclear or misleading (practice item). Source: ours (R1/F1). Confidence: certain.

### 6. [REPEAT: R1 flag 19, new wording overclaims] Topic 02, Concept intuition: de Vries "showed"
Where: topics-1-2.ts, Topic 02, Concept intuition para 5 (book p. 306).
Says now: "That gap was addressed in two steps: first by Hugo de Vries, who showed that heritable variation arises by sudden large mutations (saltation), ..."
Wrong: de Vries proposed it; he did not show it. His evening-primrose "mutations" were mostly chromosomal oddities, and saltation as the engine of evolution is not accepted (the Modern Synthesis rests on small heritable variation plus selection). The book's "argued" was more accurate on this point; the new "showed" turns a hypothesis into a finding.
Fix [NEW]: "That gap was addressed in two steps: first by Hugo de Vries, who proposed, from his work on the evening primrose, that new heritable variation arises by sudden large mutations (saltation), and finally by the Modern Synthetic Theory, ..."
Kind: biology error (overclaim). Source: ours (R1/F1). Confidence: likely.

### 7. [NEW] Additional B, Practice 4: frogs breeding "at different times of day"
Where: extras-b-d.ts, Additional B, Practice item 4 (book p. 337).
Says now: "Two species of frog, <i>Rana pipiens</i> and <i>Rana clamitans</i>, breed in the same pond but at different times of day."
Wrong: the textbook case of temporal isolation in these frogs is breeding season: <i>R. pipiens</i> (leopard frog) breeds in early spring, <i>R. clamitans</i> (green frog) in early summer. "Times of day" is not the documented difference. The key (temporal, pre-zygotic) is right either way.
Fix [NEW]: "Two species of frog, <i>Rana pipiens</i> and <i>Rana clamitans</i>, live in the same ponds but breed at different times of the year (<i>R. pipiens</i> in early spring, <i>R. clamitans</i> in early summer). What type of isolating mechanism is this?" Answer unchanged.
Kind: biology error. Source: book. Confidence: likely (from memory of the standard example; not checked against a source here).

### 8. [REPEAT: R2 flag 12(d), not applied] Additional B, pre-zygotic table: "<i>Cicada</i> species"
Where: extras-b-d.ts, Additional B, pre-zygotic table, Temporal isolation row (book p. 335; the page prints Cicada in italic).
Says now: "<i>Cicada</i> species emerging in different years".
Wrong: the periodical cicadas that emerge in different years (13- and 17-year cycles) are the genus <i>Magicicada</i>; <i>Cicada</i> is a different (Old World) genus with annual species. Italicising "Cicada" makes it a genus claim, and the wrong one.
Fix [NEW]: "Periodical cicadas (<i>Magicicada</i>) with 13-year and 17-year cycles, emerging in different years".
Kind: nomenclature. Source: book. Confidence: likely.

### 9. [REPEAT: R1 flag 9, applied incompletely] Topic 03, note under the hominin table calls the dates "mostly NCERT’s" without NCERT’s Australopithecus date
Where: topics-3-4-extra-a.ts, Topic 03, the note paragraph after the hominin table (F1's [NEW]); table row Australopithecus "~3–4 mya" (book p. 316).
Says now: "Dates and brain sizes in this table are the book’s (mostly NCERT’s) round figures; current work gives earlier or wider ranges (for example Homo sapiens about 300,000 years ago, Neanderthals about 400,000 to 40,000 years ago)."
Wrong: the one table date that differs from NCERT (NCERT: Australopithecines about 2 mya; book: ~3–4 mya) is the one the note does not name, and the NEET student follows NCERT. Additional D (Traps row 4) and the key points already give "NCERT gives about 2 mya"; the topic itself does not. R1 flag 9 listed it ("Note only"); the note F1 wrote left it out.
Fix [NEW]: "Dates and brain sizes in this table are the book’s round figures, mostly NCERT’s (NCERT gives about 2 mya for <i>Australopithecus</i>); current work gives earlier or wider ranges (for example <i>Homo sapiens</i> about 300,000 years ago, Neanderthals about 400,000 to 40,000 years ago). The order is what is examined." (Also italicise Homo sapiens in the note: it is upright there now.)
Kind: number (NCERT difference) / nomenclature. Source: book + ours. Confidence: likely (NCERT value from memory, as R1's).

### 10. [REPEAT: R1 flag 3, not carried to the figure] Figure 6.4: the fishes bar starts with the amphibians at 350 mya
Where: lib/diagrams/biology-12-06.ts, Figure 6.4 (book p. 327), GROUPS "Fishes" from 350 and "Amphibians" from 350; caption CAP64.
Says now (caption): "Values are the book’s (the earliest cells are now dated to about 3.5 bya)."
Wrong: the bars draw fishes and amphibians appearing at the same moment, which contradicts the order the topic drills (fishes before amphibians) and the corrected Topic 04 table ("~500–350 mya ... the oldest jawless fishes are about 500 mya"). Founder decision 3 keeps the bars as the book draws them; then the caption should carry the fish note as it carries the cells note.
Fix [NEW], caption: "Geological timeline of life (mya). The dashed line marks the dinosaur mass extinction (~65 mya), followed by the adaptive radiation of mammals. Lower track: plant evolution, algae → bryophytes → pteridophytes → gymnosperms → angiosperms. Values are the book’s (the earliest cells are now dated to about 3.5 bya, the oldest jawless fishes to about 500 mya, well before the first amphibians, and the first land plants to about 470 mya)." (The last clause covers flag 12.)
Kind: figure error (book's data). Source: book. Confidence: likely.

### 11. [NEW] Additional D, Distribution table: exam-frequency signals that contradict the topics’ own Exam Relevance boxes
Where: extras-b-d.ts, Additional D, "The Distribution" table (book p. 341); Topic 03 Exam Relevance (p. 315).
Says now: "Homology vs Analogy | Very high: 2–3 items per paper is common"; "Origin of Life & Chemical Evolution | High: appears in nearly every paper"; "Natural Selection (types & evidence) | High: appears annually". Topic 01's box says the whole of Origin of Life & Evidences (which contains homology) gets "1–2 direct questions"; Topic 03's box says "overwhelmingly a chronological-sequence item".
Wrong: 2–3 homology items per paper is more than Topic 01's 1–2 for the whole topic including homology, and more than the chapter as a whole usually gets. The intro labels these as the book's estimate, but they are internally inconsistent, and "overwhelmingly" is an unlabelled exam-share superlative.
Fix [NEW]: Homology row "Very high: asked in most papers"; Topic 03 Exam Relevance "usually a <b>chronological-sequence</b> item" (for "overwhelmingly a").
Kind: unclear or misleading (exam-frequency claim). Source: book. Confidence: likely (inconsistency certain; true frequency not verifiable).

### 12. [NEW] Figure 6.4, plant track: bryophytes begin about 700 mya
Where: lib/diagrams/biology-12-06.ts, PLANTS (Bryophytes from 700 to 470, Pteridophytes from 470), read from the book's line (p. 327).
Wrong: land plants (bryophyte-grade) appear about 470 mya and vascular plants about 430 mya; a bryophyte stretch from ~700 mya puts land plants 230 million years too early, and before the 500 mya invertebrates bar. The book prints no numbers, but the axis invites reading them.
Fix [NEW]: the caption clause in flag 10 ("and the first land plants to about 470 mya"); or, better if the founder allows, shift the boundaries to about 470 (algae/bryophytes), 430 (pteridophytes), 360 (gymnosperms), 130 (angiosperms).
Kind: figure error (schematic). Source: book. Confidence: possible.

### 13. [NEW] Additional C, worked example "Molecular vs Morphological Evolution": "accumulate at a constant rate"
Where: extras-b-d.ts, Additional C, NEET worked example, step (p. 339).
Says now: "These changes accumulate at a constant rate regardless of how different the organisms look externally."
Wrong: the same topic says the clock is "approximate, not exact" and the rate only "roughly constant"; the High-Difficulty example lists rate variation as a cause of error.
Fix [NEW]: "These changes accumulate at a roughly constant rate regardless of how different the organisms look externally."
Kind: overgeneral. Source: book. Confidence: certain.

### 14. [NEW] Topic 01, Key definitions: "NCERT groups them into these classes" (with biogeography as a class)
Where: topics-1-2.ts, Topic 01, lead-in to the evidence table (book p. 297).
Says now: "<b>Evidences for Evolution:</b> the second half of this topic. NCERT groups them into these classes:"
Wrong: NCERT's evidence section covers fossils, comparative anatomy (homology and analogy), biochemical similarity and embryology, and gives adaptive radiation (Galápagos, Australia) and natural selection in action (peppered moth, resistance) as further evidence; it has no "biogeographical" class with Wegener. The table is fine as a teaching grouping; the attribution to NCERT is not.
Fix [NEW]: "<b>Evidences for Evolution:</b> the second half of this topic. They are usually grouped into these classes:"
Kind: attribution. Source: book. Confidence: possible.

### 15. [NEW] Topic 03, hominin table: column head "Hominin" over Dryopithecus and Ramapithecus
Where: topics-3-4-extra-a.ts, Topic 03, Classification table, head cell 1 (book p. 316).
Wrong: the Core terms paragraph (F1's [NEW]) now defines hominin as the human lineage after the split from the chimpanzee line, "the book’s list runs from Australopithecus to Homo sapiens"; the first row of the same table (Dryopithecus and Ramapithecus, Miocene apes) contradicts its own column head.
Fix [NEW]: head "Ape or hominin" (or keep "Hominin" and add to the note under the table: "<i>Dryopithecus</i> and <i>Ramapithecus</i> are apes, listed for the exam order.")
Kind: nomenclature / internal inconsistency. Source: book + ours. Confidence: possible.

### 16. [NEW] Key points, Additional D: book titles set in italic
Where: keypoints-biology-12-06.ts, topic 7 "remember" (<i>On the Origin of Species</i>, <i>Philosophie Zoologique</i>) and "mistake" (<i>Principles of Biology</i>).
Wrong: the chapter's rule (file header and brief) is <i> for scientific names, gene symbols and variables only; the chapter text sets the same titles upright (Additional D Lamarck table, graded Q3).
Fix [NEW]: remove the <i> around the three titles.
Kind: notation. Source: ours. Confidence: possible (low harm).

### 17. [NEW] Topic 02 (and Worked Q2, cheat sheet): Weismann "22 generations" (note only)
Where: Topic 02 Concept intuition, Worked Q2 (CUET), cheat sheet "Weismann" (book pp. 306, 311, 314); KP topic 1 shortcut.
Note: Weismann's 1889 report covered five generations of tail-cut mice; "22 generations" is the figure Indian textbooks print. NEET follows the textbook figure, so no change is proposed; recorded so the founder knows the number is conventional. 
Kind: number. Source: book. Confidence: possible.

## Earlier flags I believe were applied wrongly or incompletely
- R2 flag 16 (Additional B intro): its fix wording says "Topic 02" for adaptive radiation; should be Topic 01 (my flag 3).
- R2 flag 1 (Additional D Q10): the note meant for the founder ("If the founder keeps (a), reword R ...") was applied into the student's answer by F2 (my flag 1).
- R1 flag 8 (Topic 03 Practice 1): the replacement (iii) "an early Neanderthal-associated burial" names the answer (my flag 5).
- R1 flag 19 (Topic 02 de Vries): replacement "showed" overclaims (my flag 6).
- R1 flag 9 (Topic 03 dates note): the note omits the NCERT Australopithecus date, the one difference that matters for NEET (my flag 9).
- R1 flag 17 vs R2 flag 13: Topic 01 moved to "1–2%" while Additional C and the key points kept "~1.8%" and still say "the chapter mentions ~1.8%" (my flag 4).
- R1 flag 3 / founder decision 3: the jawless-fish date is fixed in the table but not noted on Figure 6.4, which still starts fishes with amphibians (my flag 10).
- R2 flag 12(d) (Cicada) was not applied (F2 decision 4); I repeat it (my flag 8).
- All other R1 and R2 fixes I checked in place and found correct, including R1 1 (Q4 Reason now false as worded, key (c) right), R1 4 (wings), 5 (hominin/hominid), 6, 7, 10 to 16, 18, 20 to 29, and R2 2 to 15, 17 to 20, 23, 24.

## Checks of the fixers' [NEW] wording (new-text-F1, new-text-F2)
Every [NEW] item in both lists was read in place. Correct, plain and not overclaiming, except: F1 Topic 02 de Vries "showed" (flag 6); F1 Topic 03 Practice 1 (iii) (flag 5); F1 Topic 03 table note (flag 9, incomplete, and Homo sapiens upright in it); F2 Additional B intro "Topic 02" (flag 3); F2 Additional C intro and C.2 "~1.8%" against F1's "1–2%" (flag 4); F2 Q10 answer's last sentence (flag 1). Arithmetic in the [NEW] text recomputed: chi-square A.1 1.896 + 5.027 + 3.332 = 10.255 (10.26 printed); Practice 4 3.480 + 7.539 + 4.084 = 15.103 (15.10); both above 3.84 at 1 d.f. Pair-rate convention (16 mya, or 8 mya per lineage) right.

## COUNTS VERIFIED
- MCQs: Topics 01 to 04, 4 each (16); `correct` = 1,2,2,2 / 1,2,2,1 / 1,2,1,1 / 1,2,1,2, equal to the book's letters, each the only correct option, each wrong option's nudge about that option.
- Worked examples: Topics 01 to 04, 4 each; A 3; B 4; C 3; D 10 (1, 2, 2, 2, 1, 2 per archetype). Practice: Topics 01 to 04, 5 each; A, B, C 5 each; D graded set 10. Every printed key checked against its question: all right as they now stand (D Q10 now (b), founder decision).
- Assertion–reason items (Topic 01 Q4, Topic 03 Q4, Topic 04 Q4, D Archetype 4 x2, D graded Q5, Q9, Q10): every fourth option is "A is false but R is true"; none "both false".
- Hardy–Weinberg recomputed: Topic 02 Q3 (q² 0.04, q 0.2, p 0.8, 3200 carriers, 6400, sum 10000); Q4 (p 0.55, expected 302.5/495/202.5, chi-square about 0.10, near equilibrium right); Practice 3 (0.42), Practice 5 (q 0.01, 2pq 0.0198, about 200 per 10,000); MCQ 3 (9000; distractors 500, 4500, 40,500 as described). A.1 (570/430, 0.57/0.43, 162.45/245.10/92.45); A.2 (q² − q + 0.18 = 0, roots 0.2354 and 0.7646, book's 0.2355/0.7645 from √0.28 rounded to 0.529); A.3 (0.70/0.30, identical); A practice 1 to 5 (0.5; 480; q 0.3; 162.24/299.52/138.24; p 0.7, q 0.3). D: 0.42, 0.48.
- Molecular clock: 15/20 = 0.75 per million years; 30/0.75 = 40 mya; 8/0.5 = 16 mya (pair rate) or 8 mya (per lineage). Cytochrome c: human = chimpanzee, human–rhesus 1, human–horse 12, human–chicken 13: standard values.
- Other numbers: reptile rule about 135 million years (200 − 65); brain capacities identical across table, ladders, pro-tip, Fig 6.3 and key points.
- Classifications: homology/analogy examples all classed right (Bougainvillea/Cucurbita homologous; octopus/mammal eyes, insect/bird wings, sweet potato/potato analogous); selection types right (peppered moth directional, birth weight stabilising, bill-size example disruptive, not attributed to Darwin's finches); isolating mechanisms classed right (temporal, habitat, behavioural, mechanical, gametic pre-zygotic; inviability, sterility, breakdown post-zygotic); B.1 allopatric, B.3 sympatric.
- Notation: scientific names italic throughout except flag 9's note; p, q, N, A, a and genotypes italic in Topic 02 and Additional A (the kalam of A plain, by the book-rules test); subscripts in CH4, NH3, H2, H2O, O2, F1, F2 right.
- Additional-topic introductions checked against Topics 01 to 04: A right (Topic 02 does compare observed with expected once); B wrong topic number (flag 3); C misquotes the chapter's figure (flag 4); D makes no chapter claim.
- Figures checked against page images: 6.1 (p. 300: labels A to E, Heat, loop C → B → condenser → U-trap → C, title) correct; 6.2 (p. 309: three panels, legend, axes, which part removed) correct; 6.3 (p. 319: nine leaves in order, last common ancestor, seven hominins with every cc value) correct as the book; 6.4 (p. 327: seven bars with starts 220/150/300 (dark 200 to 65)/350/350/500/2000, 65 mya line, ticks, plant track) correct as the book, with flags 10 and 12 on the book's data. Captions match the book plus the [NEW] notes.
- Tables checked on the page image: p. 316 hominin table (every cell as printed, apart from F1's listed rewordings); p. 335 isolating-mechanism tables (as printed apart from F2's listed rewordings).

## COULD NOT CHECK
- Figures were not rendered (jest is not allowed in this review); they were compared as drawing code against the page images, not as SVG.
- Page images were viewed for pp. 300, 309, 316, 319, 327 and 335 only; the other tables (pp. 297, 298, 307, 308, 324, 341, 345 to 346, 349) and the bold runs were compared through the text dump and the diff.
- NCERT values (Australopithecus about 2 mya, the evidence classes), the frog breeding seasons, the Magicicada genus and Weismann's five generations are from memory, without a source at hand.
- The original key of the D Archetype 4 chemoautotroph item (R2 flag 2) could not be checked against its source.

## WRITERS' FLAGGED ITEMS AND THE BRIEF'S TRAPS (rulings)
- Dinosaur extinction "~65 mya": keep (NCERT's value); the key point's "recent work gives about 66" is enough. Agree with R1 and the founder decision.
- Hominin dates: agree with R1 9, plus flag 9 here for the NCERT Australopithecus date.
- Hardy–Weinberg: every value right (above). Natural-selection types: right. Attributions (Oparin–Haldane, Miller–Urey 1953, Lamarck 1809, Darwin–Wallace 1859, de Vries 1901, Haeckel, Weismann, Spencer 1864, Osborn, Wegener 1912, Arrhenius 1903): right, apart from flag 6's wording.
- Options fewer than four in D (octopus eyes: 2; selection graph: 3): as printed (R2 15); acceptable as "worked representative" items, not MCQ blocks.
- Miller "before 1953": keep (R2 21).

## OVERALL
The chapter is a faithful copy of the book with two rounds of fixes correctly applied in almost every place: no missing or mis-copied sentence, every key and every number right. The problems left are mostly the fixers' own: one editor's note printed to students (flag 1), two false or stale statements about the chapter in the Additional-topic introductions (flags 3, 4), a self-answering practice item (flag 5) and an overclaiming "showed" (flag 6). Of the book's own errors, the precision note's "only selection and drift change frequencies" (flag 2) is the one a student could lose a mark on; the frog, cicada, figure-date and frequency items are smaller. With flags 1 to 9 applied the chapter is ready for the founder's sign-off.

## SUMMARY
17 flags: 11 NEW (1, 2, 4, 7, 11, 12, 13, 14, 15, 16, 17; flag 17 is a note with no change proposed) and 6 REPEAT (3, 5, 6, 8, 9, 10: raised before but not applied, or applied wrongly). Serious (fix before the store build): 5, namely flags 1, 2, 3, 4 and 5.
