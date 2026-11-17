# Biology 11 Ch 9 (Biomolecules): third expert review (R3, Opus), whole chapter

Scope: content/textbooks/bio-11-09/topics-1-2.ts, topics-3-4.ts, extras.ts; lib/diagrams/biology-11-09.ts; lib/revise/keypoints-biology-11-09.ts; against bio11.pdf pp. 533-590.
I made my own pass first: a word-level diff of every app string against the book text for each file's page range, the page images for all five figure pages, recomputed numbers, and checked the answer keys and the introductions of the Additional topics. After that I read R1 (review-R1-topics-1-4.md), R2 (review-R2-extras-A-F.md), new-text-F1.md and new-text-F2.md. I edited no repo file and ran no tsc, jest or git.

Tags: [NEW] = not raised before; [REPEAT] = raised before and not fixed, or fixed wrongly. Proposed wording that is our own is marked [NEW TEXT].

## Flags, most serious first

### 1. D.4 MCQ has three strictly incorrect statements, not one [REPEAT, R2 #4/#5, founder decision still open]
- Where: extras.ts, Additional D, Worked examples, CUET MCQ "Which of the following statements about cholesterol is incorrect?" (book p. 581).
- Says now: (b) "It is absent from plant cell membranes." (c) "It is the precursor of vitamin D<sub>3</sub>." The key is (d), and the reasoning admits that (b) holds only as an "idiom" and that (c) is "read loosely".
- Wrong: plant membranes do contain traces of cholesterol, and our own D1 text says so. Vitamin D3 comes from 7-dehydrocholesterol, which is cholesterol's immediate precursor, not something made from cholesterol. So (b), (c) and (d) are all false. A student who knows the science is marked wrong, and the item contradicts D1 and the E checklist.
- Fix (keeps key (d), no founder trade-off needed): (b) [NEW TEXT] "It is the characteristic sterol of animal cell membranes." (c) [NEW TEXT] "Its biosynthetic pathway supplies 7-dehydrocholesterol, from which vitamin D<sub>3</sub> forms in the skin." Reasoning: [NEW TEXT] "Statements (a), (b) and (c) are true. Cholesterol is synthesised from acetyl-CoA (the two-carbon precursor), not from amino acids."
- Kind: wrong MCQ (multiple incorrect options). Source: book. Confidence: certain.

### 2. The NEET question counts per topic add up to more than the chapter total [NEW]
- Where: Topic 02 Exam Relevance ("NEET reliably pulls 2–3 questions a year"), Topic 03 ("1–2 questions … almost every year"), Topic 04 ("NEET asks 2–3 questions a year"), F The Distribution ("NEET typically asks 2–3 questions from it in each paper").
- Wrong: the topic estimates add up to 5 to 8 a year, but F gives 2 to 3 for the whole chapter. The hedges added in review ("the book's estimate…") do not fix the contradiction. This is the recurring exam-frequency flag.
- Fix: in Topics 02, 03 and 04, replace the counts with [NEW TEXT] "NEET regularly draws on this topic (the book's estimate from past papers, not official figures)". Keep the chapter total in F only.
- Kind: unclear or misleading (exam claim). Source: book. Confidence: certain (about the inconsistency).

### 3. B introduction now makes a false claim about the chapter [REPEAT: R2 #8 applied wrongly]
- Where: extras.ts, Additional B, Introduction: "The chapter lists the water-soluble vitamins among the micromolecules of the acid-soluble pool…"
- Wrong: Topic 01 (def Acid-soluble pool, Worked example 1) lists only "vitamins", without saying which kind. R2 asked for Topic 01 to say "water-soluble". The fixer changed the claim about the chapter instead, so the claim is false.
- Fix (either): change the B intro to [NEW TEXT] "The chapter lists vitamins among the micromolecules of the acid-soluble pool (strictly, only the water-soluble ones; see Method) and names NAD<sup>+</sup> and FAD as coenzymes." Or change Topic 01 to "water-soluble vitamins" in the def and in Ex 1, and keep the B intro.
- Kind: false chapter claim. Source: ours (fixer). Confidence: certain.

### 4. "NCERT's Table 9.1" is the wrong table number [NEW; the error is in R1 #2's own wording]
- Where: topics-1-2.ts, Topic 02, Crack the MCQ Q4, option (c) nudge: "(NCERT's Table 9.1 also lists cellulose among the polymeric secondary metabolites; know both labels)".
- Wrong: in NCERT Class 11 Ch 9 the secondary-metabolite list is Table 9.3. Table 9.1 compares the elements in the Earth's crust and in the human body. Topic 01's twin nudge just says "NCERT lists", with no number.
- Fix: [NEW TEXT] "(NCERT also lists cellulose among the polymeric secondary metabolites; know both labels)". Drop the table number.
- Kind: number/attribution. Source: ours (R1 wording). Confidence: likely (please check against the current NCERT edition; dropping the number is safe either way).

### 5. Additional B practice AR: Reason R as worded is false [NEW]
- Where: extras.ts, B Practice 5: "R: Niacin is a coenzyme in oxidation-reduction reactions." The key says both are true and R explains A.
- Wrong: niacin is a vitamin, the precursor of NAD<sup>+</sup>/NADP<sup>+</sup>. It is not itself the coenzyme, and the answer text says so ("Niacin is the precursor of NAD<sup>+</sup>"). As written, R is false, so (c) would be the key.
- Fix: R [NEW TEXT] "Niacin is the precursor of NAD<sup>+</sup>, a coenzyme in oxidation-reduction reactions." The answer then stands.
- Kind: wrong MCQ / biology error. Source: book. Confidence: certain.

### 6. The "EP" note confuses students [REPEAT: R1 #13 applied with confusing wording]
- Where: topics-3-4.ts, Topic 04, Procedure B, "E + S ⇌ ES → EP → E + P<br>(The book's shorthand omits the enzyme-product complex EP.)". The same note is in KP topic 3 #1.
- Wrong: the scheme above the note already contains EP, so "the book's shorthand omits EP" contradicts what the student is reading. "The book" also means nothing to an app reader.
- Fix: replace the note with [NEW TEXT] "(EP is the enzyme–product complex, formed before the product is released.)" Make the same change in KP 3 #1.
- Kind: unclear or misleading. Source: ours. Confidence: certain.

### 7. "IUB (now IUBMB)" six classes: IUBMB now has seven [NEW]
- Where: topics-3-4.ts, Topic 04, proc title "The six IUB (now IUBMB) classes"; KP topic 3 #5 and the KP header.
- Wrong: IUBMB added a seventh class, translocases (EC 7), in 2018. NCERT and NEET still use six. "now IUBMB … six" is therefore out of date.
- Fix: [NEW TEXT] "The six IUB classes used by NCERT (mnemonic: “OTHLIL”; IUBMB added a seventh, translocases, in 2018)". In KP 3 #5: "The six IUB classes (OTHLIL)".
- Kind: biology (nomenclature). Source: ours (R1 #12). Confidence: certain.

### 8. Lyases "without water" is wrong [NEW]
- Where: Topic 04 Pro-Tip ("forms a double bond without water → lyase"); KP topic 3 #5 ("Lyases (add or remove groups to form a double bond, without water)").
- Wrong: many lyases add or remove water across a double bond (fumarase/fumarate hydratase, enolase). The defining point is that they act "not by hydrolysis", which is what Topic 04's own definition says ("non-hydrolytic").
- Fix: Pro-Tip [NEW TEXT] "adds or removes groups at a double bond, not by hydrolysis → lyase"; KP "(add or remove groups to form or at a double bond, not by hydrolysis)".
- Kind: biology error. Source: book (pro-tip) and ours (KP). Confidence: certain.

### 9. C.2 "The sample is pure starch" overclaims [NEW]
- Where: extras.ts, C Worked example 2 (NEET, MCQ reasoning), reasoning (book p. 576).
- Wrong: Molisch +, iodine + and Benedict's − show that starch is present and free reducing sugar is absent. They cannot rule out other non-reducing carbohydrates (sucrose, cellulose), so "pure" does not follow.
- Fix: [NEW TEXT] "The sample contains starch and no free reducing sugar (a non-reducing carbohydrate such as sucrose is not ruled out by these three tests)." The answer "Starch" stands.
- Kind: unclear or misleading. Source: book. Confidence: certain.

### 10. Key point still says "only" after the topic was softened [NEW]
- Where: keypoints, topic 0 shortcut, why: "The lipid exception is the only one to memorise against this rule."; the answer also has "a lipid is the one small molecule found in the acid-insoluble fraction".
- Wrong: R1 #14 softened the Topic 01 Pro-Tip to "the main thing to memorise". The key point still carries the old absolute claim.
- Fix: [NEW TEXT] "The lipid exception is the main one to memorise against this rule." and "a lipid is the classic small molecule found in the acid-insoluble fraction".
- Kind: overgeneral claim / consistency. Source: ours (KP). Confidence: certain.

### 11. F Archetype 1: "the only achiral amino acid" is unqualified [NEW]
- Where: extras.ts, F Archetype 1 worked representative, solution: "making it the smallest (simplest) and the only achiral amino acid".
- Wrong: R1 #7 made the chapter say "standard" everywhere in the Topics. This line was missed, and other achiral amino acids exist outside the 20.
- Fix: [NEW TEXT] "the only achiral standard amino acid".
- Kind: overgeneral claim. Source: book. Confidence: certain.

### 12. Topic 03 Practice 1 is a comma splice [REPEAT: R1 #22 wording slip]
- Where: topics-3-4.ts, Topic 03, Practice 1: "Differentiate between a nucleoside and a nucleotide, name the component that distinguishes them."
- Fix: [NEW TEXT] "Differentiate between a nucleoside and a nucleotide, and name the component that distinguishes them."
- Kind: transcription slip (ours). Confidence: certain.

### 13. Cholesterol rings: "three cyclohexane rings" sits beside a C5=C6 double bond [NEW, minor]
- Where: extras.ts, D1 Structure ("three cyclohexane rings and one cyclopentane"); D Practice 1 answer ("ring B is cyclohexane (with one double bond)").
- Wrong: a cyclohexane ring with a double bond is a cyclohexene, so the wording contradicts itself. The KP wording ("three six-membered and one five-membered") is right.
- Fix: D1 [NEW TEXT] "Four fused rings (A, B, C, D): three six-membered rings and one five-membered ring." Practice 1 [NEW TEXT] "rings A, B and C are six-membered (ring B carries the C5=C6 double bond), ring D is five-membered".
- Kind: notation. Source: book. Confidence: certain.

### 14. "NEET expects you to know cholesterol as their parent molecule" is an exam claim [NEW, minor]
- Where: extras.ts, D1 "As a metabolic parent molecule".
- Fix: [NEW TEXT] "(cortisol, aldosterone, testosterone, oestradiol: all made from cholesterol)".
- Kind: exam claim. Source: book. Confidence: possible.

### 15. Topic 01 MCQ 1 nudge (b) "the borderline zone" is vague [NEW, minor]
- Where: topics-1-2.ts, Topic 01 MCQ 1, option (b) nudge.
- Fix: [NEW TEXT] "(b) lies above the acid-soluble range, which stops near 800 Da: chosen by students who confuse the two pools."
- Kind: unclear. Source: ours (R1 #3). Confidence: possible.

### 16. "Water is the single largest component of any cell" [NEW, minor]
- Where: Topic 01, Key procedures E. The book's figure applies to active cells; dormant seeds and spores can hold about 10 % water.
- Fix: [NEW TEXT] "of an active cell".
- Kind: overgeneral claim. Source: book. Confidence: possible.

## Earlier flags I believe were applied wrongly
- R2 #8 (B intro, vitamins): see flag 3. The claim about the chapter was changed, not the chapter.
- R1 #2 (Topic 02 nudge): the "Table 9.1" number is wrong; see flag 4.
- R1 #12 ("IUB (now IUBMB)"): this adds an outdated "six-class" claim to IUBMB; see flag 7.
- R1 #13 (EP note): the scheme was fixed, but the note now contradicts it; see flag 6.
- R1 #14: not carried into KP topic 0 #5; see flag 10. R1 #7: not carried into F Archetype 1; see flag 11.
- R2 #4 called D.4 (c) "defensible". I disagree; see flag 1.

All other R1/R2 items were applied, and the new wording is correct (checked against the lists in new-text-F1.md and new-text-F2.md): the lipid special case, the Da cut-offs, glucose 4.2–6.1 mM (NCERT), standard amino acids, the basic/aromatic note, essential fatty acids, five nitrogenous bases, cofactor/FAD, the denaturation MCQ, phospholipid, zwitterion, cellulose in the biosphere, the vitamin rows (B6, folate, B12), the cholesterol methyls, Archetype 3/6, F practice 6, the E checklist, and "liver main site".

## Counts verified
- Worked examples: 35 (16 in Topics 01-04, 3 in A, 3 in B, 3 in C, 4 in D, 6 in F). Practice items: 50 (20 in Topics, 4 in A, 5 in B, 5 in C, 6 in D, 10 in F). Crack-the-MCQ items: 16. Key points: 30. All answer keys checked; flags 1 and 5 are the only key problems.
- Assertion-reason items checked: 16. Each has 'A false, R true' as its fourth option where options are printed; none uses 'both false'.
- Recomputed: Michaelis-Menten table (v = 50[S]/(20+[S]) reproduces 10, 16.7, 25, 35.7, 41.7; 1/v 0.100 and 0.024; slope 0.4 min; intercept 0.02; Vmax 50, Km 20); A practice 1 (20), 2 ([I] = 5 μM), 3 (Ki ≈ 3 mM); units check (min); urea cycle net equation and the 3 ATP / 4 ~P count; cholesterol C27H46O ≈ 386.7 Da; cell composition figures (NCERT Table values); Fig 9.5(iv) Km′ = 3 Km with the same Vmax (curve values at the right edge ≈ 0.83 and 0.62, consistent).
- Figures checked against the page images: 9.1 (p. 538), 9.2 (p. 547), 9.3 (p. 555), 9.4 (p. 562), 9.5 (p. 564). All 14 panels match the book's labels, sequence, bond counts, cis geometry, antiparallel 5′/3′ and H-bond counts. The captions match the book; the Fig 9.5 caption addition is correct. No figure errors.
- Additional-topic introductions checked against the Topics as built: A, C and D are true. B is false (flag 3). The shared introduction and E are fine.

## Could not check
- The render is the SVG dump from /private/tmp/claude-501/b12svg (18:58, after the diagram file's last change at 17:23), viewed with qlmanage. I ran no jest dump (forbidden for this pass), and the app fonts were not loaded.
- The NCERT table number (flag 4) is from memory; please verify it against the 2023-24 NCERT edition. The same applies to whether 9.8-9.10 (metabolism, living state) were removed in the 2023 rationalisation; the fixer's softened enrichment intro is safe either way.

## Summary
16 flags: 12 NEW, 4 REPEAT (flags 1, 3, 6 and 12; flags 3 and 6 are earlier fixes that were applied wrongly). Serious (wrong science, wrong key or a false claim): flags 1, 2, 3, 5, 6, 7, 8 (7). The rest are minor. Transcription against the book is faithful, and the figures, numbers and other keys are correct.
