# Biology 11 Chapter 1, The Living World: third expert review (R3, Opus), 2026-11-17

Scope: the whole chapter as it stands after fixers F1 and F2: content/textbooks/bio-11-01/topics-0-1.ts, topic-2-extras-a-b.ts, extras-c-e.ts; lib/diagrams/biology-11-01.ts; lib/revise/keypoints-biology-11-01.ts. Book pp. 12-63.
Method: my own full pass first (every block read against the book's page-tagged text for pp. 13-62, plus a word-level diff script of the app strings against the book; page images for Fig 1.1 (p. 15), Fig 1.3 (p. 30) and the traps table (p. 57); every number, ratio, chromosome sum, matching coefficient, answer key and MCQ `correct` index recomputed; every Additional-topic introduction checked against Topics 00-02 as built; every [NEW] line in new-text-b11-01-F1.md and -F2.md checked). Only then did I read the earlier reviews. For Chapter 1 there is no review-R1.md / review-R2.md: the two earlier reviews exist only as the coordinator's condensed `review-flags.md` (R1 = Topics 00-02 and figures, R2 = Additional topics), with fix lists FIXES-F1 and FIXES-F2. NEW = not raised before; REPEAT = raised before (by a reviewer or the writers) and not fixed or fixed wrongly.
Nothing in the repo was edited except this report. No tsc, jest or git was run.

## Flags, most serious first

### Serious (S)

**1. [S] Fig 1.1 caption still says the test tube is "neither living nor non-living", contradicting the redrawn figure and the whole corrected chapter.** REPEAT (R1 #1 / review-flags #1 said "Fig 1.1 follows the book: change it with the text"; F1 item 1 then told the fixer "the caption stays the book's", so it was applied wrongly).
- Where: lib/diagrams/biology-11-01.ts, `CAP11` (Fig b11-01-fig-1.1, Topic 00 Concept intuition; book caption p. 14/15).
- Says now: "… An isolated metabolic reaction in a test tube is neither living nor non-living." The box in the same figure now reads "not a living thing, / but a living reaction".
- Fix: [NEW] "Which characteristics can define life? Growth and reproduction fail the test; metabolism, cellular organisation and consciousness (response to stimuli) pass. An isolated metabolic reaction in a test tube is a living reaction, but not a living thing."
- Kind: biology error / internal contradiction. Source: book (kept by our fix list). Confidence: certain.

**2. [S] Additional topic B, bacteria paragraph: a duplicated sentence, and "entirely asexually" contradicts NCERT.** Duplicate: NEW (fixer slip: F2 #12 inserted the new sentence but left the book's first sentence above it). "Entirely": NEW.
- Where: topic-2-extras-a-b.ts, Additional topic B, part "The Four Species Concepts", p block "Why the biological species concept fails…" (book p. 40).
- Says now: "Bacteria reproduce entirely asexually by binary fission. Bacteria reproduce by binary fission, so a bacterial lineage is a set of clones and there is no interbreeding population …"
- Wrong: the same claim twice in a row; and NCERT Ch 2 says bacteria "also reproduce by a sort of sexual reproduction by adopting a primitive type of DNA transfer", so "entirely asexually" is false (the book's own B.2(D) mentions conjugation).
- Fix: delete the first sentence; the paragraph then opens [NEW] "Bacteria reproduce mainly by binary fission, so a bacterial lineage is a set of clones and there is no interbreeding population or shared gene pool for the biological concept to test." (only "mainly" is added to the F2 wording).
- Kind: transcription/fix slip + biology overclaim. Source: ours (duplicate), book ("entirely"). Confidence: certain.

**3. [S] Worked example A.1, answer: duplicated clause with a capital after a semicolon.** NEW (fixer slip: F2 #8 asked for the book's closing sentence to be replaced; the new one was appended after half of the old).
- Where: topic-2-extras-a-b.ts, Additional topic A, "Worked examples", ex 1 `ans` (book p. 37).
- Says now: "SM(A, B) = 0.80; SM(C, D) = 0.80. Both pairs are equally similar by this metric; Both pairs are equally similar (SM = 0.80). Among A to D the other pairs score at most 1/5 (A with C, B with D), …"
- Fix: [NEW] "SM(A, B) = 0.80; SM(C, D) = 0.80. Both pairs are equally similar by this metric. Among A to D the other pairs score at most <frac><num>1</num><den>5</den></frac> (A with C, B with D), so A and B would form one cluster and C and D another, far apart."
- Arithmetic re-checked from the p. 37 data: A=11011, B=11001, C=00110, D=00100, E=10010. A-B 4/5, C-D 4/5, A-C 1/5, A-D 0/5, B-C 0/5, B-D 1/5, A-E 3/5, B-E 2/5, C-E 3/5, D-E 2/5. "At most 1/5 among A to D" is right.
- Kind: fix slip. Source: ours. Confidence: certain.

**4. [S] Shared introduction to the Additional topics: the deletion left an ungrammatical sentence.** NEW (fixer slip from F2 #6d).
- Where: topic-2-extras-a-b.ts, Additional topic A, "Introduction", p 1 (book p. 35).
- Says now: "Additional topic C supplies the dichotomous key, the standard identification tool used in herbaria, and never taught anywhere in it, with full construction and use."
- Wrong: "and never taught anywhere in it" no longer has a referent for "it" and does not parse.
- Fix: [NEW] "Additional topic C supplies the dichotomous key, the standard identification tool used in herbaria, which the chapter never teaches, with full construction and use."
- Kind: fix slip. Source: ours. Confidence: certain.

**5. [S] Practice D4 answer: "phylogenetically as distant from each other as either is from eukaryotes" is wrong, and it survived although F2 removed the same claim from the Woese paragraph.** NEW (the claim was in the book's p. 47 paragraph too; F2 #20 rewrote that paragraph but told the fixer to keep D4).
- Where: extras-c-e.ts, Additional topic D, "Practice", item 4 answer (book p. 51).
- Says now: "… and 16S rRNA sequence analysis showing they are phylogenetically as distant from each other as either is from eukaryotes."
- Wrong: that was Woese's 1977 picture of three equidistant lines; on current evidence archaea are much closer to eukaryotes than to bacteria (the eukaryotes' information machinery is archaeal). A student can be marked wrong on the "archaea closer to eukaryotes" statement.
- Fix: [NEW] "… and 16S rRNA sequence analysis showing two deeply separate prokaryotic lineages (archaea are in fact closer to eukaryotes than to bacteria)."
- Kind: biology error. Source: book. Confidence: likely (certain on the modern view; NCERT itself is silent).

**6. [S] Key point 6 #2 says "The six kingdoms are:" and then lists only two.** NEW.
- Where: lib/revise/keypoints-biology-11-01.ts, topic 6, second point, `a`.
- Says now: "… The six kingdoms are: Archaebacteria (Archaea), with ether-linked, … and Eubacteria (Bacteria), with ester-linked lipids …"
- Fix: [NEW] "… Monera becomes two kingdoms: Archaebacteria (Archaea), with ether-linked, branched-chain membrane lipids and no peptidoglycan, …, and Eubacteria (Bacteria), with ester-linked lipids and peptidoglycan, cyanobacteria included; with Protista, Fungi, Plantae and Animalia that makes six."
- Kind: unclear/misleading (wrong count). Source: ours (key points). Confidence: certain.

**7. [S] Topic 02 Worked example 2 names the wrong trap option.** NEW.
- Where: topic-2-extras-a-b.ts, Topic 02, "Worked examples", ex 2, last step (book p. 32, same in the book).
- Says now: "(The instinctive wrong move is (3), where students “feel” R is just a restatement; in fact it is the mechanism.)"
- Wrong: a student who thinks R is a mere restatement accepts R as true but not as the explanation: that is option (2) "Both true, R not the explanation". Option (3) is "A true, R false". The parallel Topic 00 Example 2 correctly names (2).
- Fix: "(The instinctive wrong move is (2), where students “feel” R is just a restatement; in fact it is the mechanism.)" (one numeral changed).
- Kind: wrong MCQ reasoning. Source: book. Confidence: certain.

### Moderate (M)

**8. [M] Additional topic A introduction (our F2 wording) contradicts itself.** NEW (in [NEW] text 6a).
- Where: topic-2-extras-a-b.ts, A, "Introduction", p 1.
- Says now: "Additional topic A marries the “classification” word of Topic 01 to the classification methods the chapter names but never teaches: Topic 01 names karyotaxonomy and chemotaxonomy in one line, Topic 02 names cytotaxonomy and chemotaxonomy in one phrase, and numerical taxonomy is not mentioned at all; none of them is explained."
- Wrong: "methods the chapter names" then "numerical taxonomy is not mentioned at all".
- Fix: [NEW] "Additional topic A marries the “classification” word of Topic 01 to classification methods the chapter barely touches: Topic 01 names karyotaxonomy and chemotaxonomy in one line, Topic 02 names cytotaxonomy and chemotaxonomy in one phrase, and numerical taxonomy is not mentioned at all; none of them is explained."
- Kind: unclear (claim about the chapter). Source: ours. Confidence: certain.

**9. [M] Topic 01 cheat sheet: "Panthera leo / Panthera leo" shows the same name twice with nothing to tell them apart.** NEW (the writers noted it; no reviewer flagged it).
- Where: topics-0-1.ts, Topic 01, "Cheat sheet", row 2 (book p. 27, where the second form is underlined).
- Says now: "… → <b><i>Panthera leo</i> / Panthera leo</b>."
- Wrong: the markup cannot underline, so the reader sees a meaningless repeat.
- Fix: [NEW] "… → <b><i>Panthera leo</i></b> in print; Panthera leo with each word underlined separately when handwritten."
- Kind: transcription (lost underline). Source: ours. Confidence: certain.

**10. [M] Additional topic C introduction: "(NCERT lists the key as a taxonomic aid)" may cite deleted NCERT content.** NEW (in [NEW] text F2 #17).
- Where: extras-c-e.ts, C, "Introduction".
- Says now: "… NEET occasionally asks about taxonomic keys and the term “couplet” (NCERT lists the key as a taxonomic aid)."
- Wrong (possible): the section "Taxonomical aids" (herbarium, botanical gardens, museum, zoos, key) was, as far as I recall, removed from NCERT Class 11 Chapter 1 in the 2023 rationalisation, and the current NEET syllabus does not list taxonomic aids. If so, the bracket points students to text that is no longer in their book. The same applies to E Level 3 Q12 (Kew Gardens), which is taxonomical-aids content.
- Fix: verify against the current NCERT edition; if removed, [NEW] "… NEET occasionally asks about taxonomic keys and the term “couplet” (older NCERT editions listed the key among taxonomical aids)."
- Kind: unclear/misleading attribution. Source: ours. Confidence: possible.

**11. [M] Cytotaxonomy: "the three species of Drosophila … The banding patterns … form a “fingerprint” unique to each species."** REPEAT (writers' item 12 asked for the Drosophila example to be checked; F2 #7 kept it).
- Where: topic-2-extras-a-b.ts, A, "The Three Classification Methods", Cytotaxonomy p (book p. 36).
- Wrong: "the three species of Drosophila" reads as if the genus had three species (it has well over a thousand); the "unique fingerprint" is overstated (D. melanogaster and D. simulans share most of their banding and differ mainly by an inversion).
- Fix: [NEW] "Classic example: three species of <i>Drosophila</i> (fruit fly), <i>D. melanogaster</i>, <i>D. simulans</i> and <i>D. yakuba</i>, differ by chromosome inversions visible in the banding of their polytene chromosomes, so the banding pattern helps tell the species apart."
- Kind: biology (overclaim). Source: book. Confidence: likely.

**12. [M] Animal families "commonly end -idae": the code makes it a rule.** NEW (in [NEW] text F2 #27 and key point 7 #2).
- Where: extras-c-e.ts, E, "The Traps" table, row "Order ends with “-ales”", third cell; keypoints-biology-11-01.ts topic 7 #2.
- Says now: "(animal orders have no fixed ending; animal families commonly end -idae)".
- Wrong: under the ICZN every animal family name ends in -idae (subfamily -inae); "commonly" understates a rule that is examined.
- Fix: [NEW] "In plants, order -ales and family -aceae (animal orders have no fixed ending; animal family names end in -idae). Separate them." Same change in the key point.
- Kind: nomenclature. Source: ours. Confidence: certain.

**13. [M] Exam-frequency labels now sit on our own wording, not on the book's estimate.** NEW.
- Where: extras-c-e.ts, D "Introduction" ("… frequently (the book’s estimate from past papers, not official figures)"); E "The Distribution" p 2 ("has appeared in several cycles (the book’s estimate …)"); key point 7 #1 ("has appeared in several cycles, by the book’s estimate").
- Wrong: the book's estimates were "every cycle" (p. 46) and "virtually every NEET/AIPMT cycle" (p. 52). After F2 softened the words, the label attributes our softer claim to the book.
- Fix: drop the label where the claim is ours: [NEW] D: "NEET often asks for the five-kingdom criteria and kingdom assignments for individual organisms (bacteria, fungi, algae, moss, fern, gymnosperm, angiosperm)." E: "The “defining property of life” question, asking which of growth, reproduction, metabolism or consciousness actually defines living organisms, is a recurring NEET item." Key point: "… is a recurring item." (The founder may instead prefer to keep the book's words with the label.)
- Kind: exam claim. Source: ours. Confidence: likely.

**14. [M] Topic 02 superlatives were not softened as Topics 00 and 01 were.** NEW (R1 #4 / F1 #3 covered Topics 00-01 only).
- Where: topic-2-extras-a-b.ts, Topic 02: pitfall 1 "By far the most frequent sequencing error."; MCQ 1 option (1) nudge "the single most common ordering error"; Concept intuition "examiners test it relentlessly"; Exam Relevance "One of the most reliably-tested sections of the whole chapter" (book pp. 28, 33, 34).
- Fix: [NEW] pitfall 1 "A very common sequencing error."; nudge "<b>(1)</b> swaps Family and Order: a common ordering error."; "and examiners test it often". The Exam Relevance line can stay ("one of" is hedged).
- Kind: overgeneral claim. Source: book. Confidence: likely.

**15. [M] E graded Q10: "need not share" should be "cannot share".** NEW.
- Where: extras-c-e.ts, E, "A Graded Practice Set", Level 3 Q10 answer (book p. 61).
- Says now: "• They need not share Species (different orders, different lineages). • They need not share Genus (genus is below class in the hierarchy)."
- Wrong: organisms in different orders cannot share a genus or species (each genus lies inside one order). "Need not" teaches a weaker, wrong idea of the containment rule the topic is about.
- Fix: [NEW] "• They cannot share Genus or Species: both lie below Order, and X and Y are in different orders."
- Kind: biology/logic. Source: book. Confidence: certain.

**16. [M] B introduction (our wording): "biologists use four species concepts".** NEW (in [NEW] text F2 #10).
- Where: topic-2-extras-a-b.ts, B, "Introduction".
- Wrong: there are more than twenty named species concepts; four are the commonly taught ones.
- Fix: [NEW] "What the chapter does not tell you is that biologists use several species concepts, four of them common, and why the biological concept fails for bacteria, asexual organisms, fossils and hybridising plants."
- Kind: overclaim. Source: ours. Confidence: likely.

### Minor (m)

**17. [m] ICBN "(and historically algae and fungi)".** NEW. topics-0-1.ts, Topic 01, Key terms, ICBN def (p. 21). The code (now ICN) still governs algae and fungi; "historically" suggests it no longer does. Fix [NEW]: "governs naming of plants (and also algae and fungi)". Biology/nomenclature; book; likely.

**18. [m] B.2 analysis (C) still says "Different water depths = different niches = different species."** NEW. topic-2-extras-a-b.ts, B, ex 2 step (p. 41). F2 #15 changed the statement but left this overgeneral equation. Fix [NEW]: "(C) True: the ecological species concept classifies based on niche, so populations occupying different niches would be treated as different species." Overclaim; book; likely.

**19. [m] E Archetype 3: the handwritten form is shown in italics.** NEW. extras-c-e.ts, E, Archetype 3 worked representative, step 2 and `ans`. "Correct handwritten form: <i>Mangifera indica</i> (two separate underlines)" is italic, unlike Topic 01 Ex 1 where the handwritten form is upright. Fix: "Correct handwritten form: Mangifera indica (each word underlined separately)." and ans "… or Mangifera indica, each word underlined (handwritten)." Notation; ours (italic choice); certain.

**20. [m] Topic 01 internal tension: Binomial nomenclature def says "the specific epithet (species)" while our new line says "the specific epithet alone is not a species name".** NEW. topics-0-1.ts, Topic 01, Key terms (p. 21). Fix [NEW]: "… the <b>generic name (genus)</b> followed by the <b>specific epithet</b>." (drop "(species)"). Same "(species)" in Topic 01 MCQ 1 solution "species (specific epithet) second" is acceptable. Notation; book; likely.

**21. [m] Topic 01 cheat sheet "Codes" row keeps "ICNB → bacteria" without the "(now ICNP)" note given in Key terms and key point 1 #3.** NEW. Fix [NEW]: "ICNB (now ICNP) → bacteria". Consistency; ours; certain.

**22. [m] Topic 00 growth still described as "throughout the body", against the new meristem example.** REPEAT (R1 #15 / F1 #10 fixed the example only). topics-0-1.ts, Topic 00, Concept intuition bullet 1 ("by cell division throughout the body") and Framework B bullet 1 ("From inside, throughout the body, by cell division"). Plant growth is localised at meristems. Fix [NEW]: "from within, by cell division (in plants, at the growing regions)" and "From inside, by cell division". Biology; book; possible.

**23. [m] D kingdom table: Saccharomyces "chitin cell wall".** NEW. extras-c-e.ts, D, "Kingdom assignments" (p. 48). Yeast walls are mainly glucans and mannans with a little chitin. Fix [NEW]: "Eukaryotic, unicellular, cell wall of glucans and mannans with some chitin". Biology; book; likely.

**24. [m] C.1 herbarium table: tulsi inflorescence "Raceme".** NEW. extras-c-e.ts, C, ex 1 (p. 43). Ocimum bears verticillasters (whorls along a spike-like axis). The key does not use this row, so the answer is unaffected. Fix: "Verticillaster". Biology; book; likely.

**25. [m] D archaebacteria "live in extreme environments (methanogens, halophiles, thermophiles)".** NEW. extras-c-e.ts, D, six-kingdom p. NCERT places methanogens in marshes and the gut of ruminants, not only extreme habitats. Fix [NEW]: "live in harsh habitats such as salty areas (halophiles) and hot springs (thermoacidophiles), and in marshes and the gut of ruminants (methanogens)". Biology; book; likely.

**26. [m] Archetype 1 and Topic 00 Framework A: "Only metabolism and consciousness survive both" omits cellular organisation, while the same chapter calls the defining bundle MCC.** NEW. extras-c-e.ts E Archetype 1 p (p. 52); topics-0-1.ts Topic 00 Framework A step 2 ("Metabolism and consciousness survive both"). Fix [NEW] E: "Metabolism, cellular organisation and consciousness survive both. When the options include consciousness, pick it …"; Topic 00: "Metabolism, cellular organisation and consciousness survive both; growth and reproduction do not." Consistency; book; likely.

**27. [m] Additional topic A Step 3 ends on a dangling adjective.** NEW. topic-2-extras-a-b.ts, A, ex 1 step 3 (p. 37): "C and D share the non-flagellate, non-sporulating, Gram-negative, capsule-bearing." Fix: "… capsule-bearing pattern." Book; certain.

**28. [m] Shared introduction: "Four examinable patterns still stand outside the door" while five Additional topics follow.** REPEAT (writers flagged; not fixed). A "Introduction" p 1 (p. 35). E is a summary, not a pattern, so this is defensible; if changed, [NEW] "Four examinable patterns still stand outside the door, and a last section shows what NEET actually asks." Book; possible.

**29. [m] Topic 00 self-consciousness: the NCERT qualifier sits on the definition only.** REPEAT-partial (R1 #16). Concept intuition ("we are the only organisms aware of ourselves"), Framework D, Ex 4 (D) step, pitfall 4, cheat sheet row 5 keep the bare "humans only". The answer key follows NCERT, so no change is required; optionally add "(NCERT’s statement)" in the Concept intuition sentence. Book; possible.

**30. [m] Key point 7 #2 trap line is confusing.** NEW. "Calling a test-tube metabolic reaction living: it is a living reaction, but the flask is not a living thing." Fix [NEW]: "Calling a test-tube flask a living thing: the reaction is a living reaction, but the flask is not a living thing." Ours; certain.

**31. [m] Key point 3 #2 writes "2<i>n</i>" while the chapter writes 2n upright everywhere.** NEW. Fix: "the 2n of <i>B. juncea</i>". Notation; ours; certain.

**32. [m] E Level 3 Q12 (Kew) is tagged "Multi-step Reasoning" but is direct recall.** NEW. Book's tag; leave or retag "[Level 1: Direct Recall]" with a note. Book; certain (tag), low importance.

## Earlier flags applied wrongly or incompletely
- review-flags #1 (test tube): Fig 1.1 caption left saying "neither living nor non-living" (flag 1 here).
- review-flags #3 (bacteria): new sentence added beside, not instead of, the book's first sentence; duplicate (flag 2).
- review-flags #16 / F2 #8 (A.1 closing): new sentence appended to half of the old one; duplicate clause (flag 3).
- review-flags #8 / F2 #6d (deleting "referenced in the chapter’s opening vignette"): left "and never taught anywhere in it" (flag 4). F2 #6a [NEW] itself self-contradictory (flag 8).
- review-flags #9 / F2 #20 (Woese): the equidistance claim removed from the paragraph but kept in Practice D4 (flag 5).
- review-flags #5 / F2 #27: "-idae" written as "commonly" (flag 12).
- review-flags #17 / F2 #23, #31: softened claims still carry the "book’s estimate" label (flag 13).
- review-flags #15 / F1 #10: example fixed, the "throughout the body" claim left (flag 22).
- review-flags #19 / F1 #3: superlatives fixed in Topics 00 and 01 only (flag 14).
- Not wrong, but noted: F2 #4 put the book's lead sentence into the proc `title` of Topic 02 Framework B; it will display as a heading-weight title. A layout call for the founder.

## Rulings on the [NEW] lists (new-text-b11-01-F1.md, -F2.md)
All other [NEW] texts checked and correct, plain and not overclaiming: F1 1-27 (F1 27 correct in the box, but see flag 1 for the caption); F2 1, 2, 3, 6b, 6c, 6e, 7, 8 (wording right, placement wrong: flag 3), 9, 11, 12 (wording right, placement wrong: flag 2), 13, 14, 15, 16, 17 (see flag 10), 18, 20, 21, 22, 23 (see flag 13), 25, 26, 28, 29, 30, 31 (see flag 13). Problems only in F2 6a (flag 8), 10 (flag 16), 27 (flag 12).
Checked specifically: Woese and Fox 1977, three domains 1990: right. Van Valen 1976: right. DDH ≥70 %, 16S ≥97 % older / ~98.65 % current: right. Anopheles gambiae complex as cryptic species: right. Male donkey × female horse = mule: right. Tautonyms barred in botany: right. ICNP, "L.", Canis lupus familiaris, Primates: right. Monera wall "non-cellulosic (polysaccharide + amino acid)": NCERT's own table wording. Archetype 6 (a): (ii), (iii) incorrect: right. Level 2 Q3 answer (3): right.

## Counts verified
- Per topic (blocks against book): Topic 00: 4 worked examples, 5 practice, 4 MCQs, 4 pitfalls, 2 pro-tips, cheat sheet 6 rows + 1 aid. Topic 01: 4, 5, 4, 4, 2, 6 rows + 2 aids. Topic 02: 4, 5, 4, 4, 2, 6 rows + 1 aid line. A: 3 examples, 6 practice. B: 2 examples, 6 practice. C: 2 examples, 6 practice. D: 3 examples, 6 practice. E: 6 worked representatives, 9 trap rows, 12 graded questions. All match the book.
- MCQ `correct` indices (12): T00 2,2,1,1 = book (3),(3),(2),(2); T01 1,3,2,2 = (2),(4),(3),(3); T02 1,3,0,2 = (2),(4),(1),(3). All right, and each is the only correct option.
- Answer keys re-derived: all 29 printed example answers and all practice answers (A-R items, match-the-columns E Archetype 4 (b) and Q8 (b), count items T00 Ex 4 three, T01 Ex 4 one, T02 Ex 4 three, A.3, B.2 one, E Q6 one, Q10 (a), Q11 (c)). Only the reasoning faults in flags 7 and 15.
- Numbers: SM table (10 pairs, flag 3); Brassica 2n: oleracea 18, nigra 16, rapa 20, juncea 36 = 2 × (10 + 8), napus 38 = 2 × (10 + 9), carinata 34 = 2 × (8 + 9); E shares 35-40 / 30-35 / 25-30 %; 1.7-1.8 million species (NCERT's figure); Whittaker 1969.
- Table 1.1 (p. 31): every cell matches NCERT. Five-kingdom table (p. 47), kingdom-assignment table (pp. 47-49), D.2 partial table (p. 50), C.1 herbarium table (p. 43), C.2 vertebrate matrix (p. 44), C practice insect matrix (p. 45), B species-concept table (pp. 39-40), E traps table (pp. 56-57, image checked): every cell matches the book or a listed fix.
- Additional-topic introductions against Topics 00-02 as built: A (both paragraphs), B, C, D: claims now true except the wording issues in flags 4 and 8. D's "Topic 01 … names only three (artificial, natural, phylogenetic)": true. C's "The chapter gives no method": true.
- Italics: every <i> in the five files is on a genus or binomial (or an epithet); ranks and common names upright; "var." upright. Only exceptions are flags 19 and 31.
- Errata (p. 1171ff): no phylum/division coining credit in the definitions, Framework D or cheat sheet: confirmed.

## Figures checked
- b11-01-fig-1.1 against p. 15 (page image): title, FAILS/PASSES split, all box texts, highlight on Consciousness: right; box verdict changed as intended; caption wrong (flag 1).
- b11-01-fig-1.2 against p. 22 (text layer): the five names and the one scientific name, caption: right.
- b11-01-fig-1.3 against p. 30 (page image): seven ranks in order, both end notes, left arrow up "number of organisms increases", right arrow down "number of common characters increases", caption: right.

## Could not check
- I did not render the app's diagrams (the dump needs jest, which this task forbade), so Fig 1.1-1.3 were checked from the code, not from a picture; the Fig 1.2 petiole fix and the italic species name in Fig 1.2 are unverified visually.
- Page images were rendered for pp. 15, 30 and 57 only; the other tables were compared through the PDF text layer, whose columns were unambiguous for these pages.
- Flag 10 (whether the current NCERT still prints "Taxonomical aids") is from memory; it needs the current NCERT PDF.
- Note for the coordinator: the scratch folder scratchpad/r3 already held another agent's files; my diff script and text extract (diff.py, book.txt) may have overwritten files of the same name there.

## Summary
32 flags: 7 serious, 9 moderate, 16 minor. 27 NEW, 5 REPEAT (1, 11, 22, 28, 29); flag 14 is counted as NEW because the earlier superlative flag covered Topics 00 and 01 only. Five of the serious ones are slips or gaps left by the two fix passes (a contradicting figure caption, two duplicated sentences, one broken sentence, a wrong count in a key point), one is a science error the fix list kept (archaea equidistant from eukaryotes), and one is a book reasoning error (Topic 02 Ex 2 names option (3) for a (2) trap). The transcription itself is faithful: every answer key, MCQ index and table cell checks.
