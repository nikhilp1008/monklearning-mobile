# Biology 12 Ch 2 Human Reproduction: third expert review R3 (whole chapter, as it now stands after fixers F1 and F2)

Reviewer R3 (Opus). Scope: content/textbooks/bio-12-02/topics-1-2.ts, topic-3-extras-a-b.ts, extras-c-f.ts; lib/diagrams/biology-12-02.ts; lib/revise/keypoints-biology-12-02.ts. Nothing in the repo was edited. No tsc, jest or git run.

Method: (1) an independent pass first. A word-level diff of every app string against bio12.paged.txt for pp. 63-81, 82-95 and 95-111 (script in the scratchpad), so every difference from the book is either a layout or house-rule change or a fixer's wording. (2) Page images of the seven figure pages (67, 69, 71, 77, 79, 85, 87) compared side by side with the eight figures, rendered from lib/diagrams/biology-12-02.ts with a sucrase loader. All built-in figure checks pass. (3) Every number, ratio, day range, match key, MCQ key and A-R key was recomputed or re-derived. (4) Every Additional-topic introduction was checked against the built topics. (5) Every item in new-text-F1.md and new-text-F2.md was checked. Only after that were review-R1.md and review-R2.md read, and each flag below is marked [NEW], or [REPEAT] (raised before, still not fixed or fixed wrongly).

## Flags, most serious first

### 1. [REPEAT, earlier fix applied wrongly] Hyaluronidase still "released" after zona binding, yet said to have cleared the cumulus earlier
- Where: Additional D, Method, "The Acrosome Reaction", steps 1 to 4 (p. 99); Ex D.1 (A→E); KP topic 6 remember 2 ("release of the acrosomal enzymes, acrosin (a protease) and hyaluronidase; penetration (hyaluronidase has already cleared the granulosa layer on the way to the zona ...)").
- Says now: "When a capacitated sperm contacts the zona pellucida: 1. Binding ... 3. Enzyme release: ... acrosin (a protease), hyaluronidase (breaks down hyaluronic acid in the cell matrix between the granulosa cells; the sperm meets and crosses this layer before it reaches the zona) ... 4. Penetration path: Hyaluronidase has cleared the granulosa (cumulus) layer on the way to the zona".
- Wrong: R2 flag 4 itself said that an enzyme released after zona binding cannot be what cleared the cumulus first. The F2 fix keeps hyaluronidase among the enzymes released at step 3, after binding, and then says it "has cleared" the layer before the zona. The sequence is still self-contradictory, and a careful student will notice. Standard account: hyaluronidase (largely the sperm-surface PH-20, plus some early acrosomal release) acts while the sperm crosses the cumulus, before zona binding. Acrosin acts at the zona after the acrosome reaction.
- Fix [NEW], step 3: "3. Enzyme release: The fused membranes break into vesicles through which the acrosomal contents escape: acrosin (a protease) and other glycosidases. (Hyaluronidase, which breaks down hyaluronic acid between the granulosa (cumulus) cells, has already acted earlier: much of it sits on the sperm surface, and it lets the sperm cross the cumulus layer before it reaches and binds the zona.)"
- Step 4 [NEW]: "4. Penetration path: acrosin helps digest a path through the zona pellucida."
- KP topic 6 remember 2 [NEW]: "... release of the acrosomal enzymes, chiefly acrosin (a protease); penetration (acrosin helps digest a path through the zona pellucida; hyaluronidase acted earlier, as the sperm crossed the granulosa (cumulus) layer on its way to the zona); merger ..."
- Practice D.2 can stay (both enzymes and their roles are right).
- Kind: biology error (sequence). Source: book, made inconsistent by the fix. Confidence: likely.

### 2. [REPEAT, earlier fix applied wrongly] The NCERT line "hCG, hPL and relaxin are produced in women only during pregnancy" was deleted from Topic 03, and the chapter now contradicts its own Q4 key
- Where: Topic 03, Key definitions, the line after "Hormones of pregnancy & birth" (p. 83); Topic 03 cheat-sheet aid "CHaPLeR" (p. 89) and KP topic 2 remember 2 `say`; Exam Relevance (see flag 6).
- Says now: "(hCG and hPL are made by the placenta <b>only in pregnancy</b> (hCG also by rare tumours); relaxin rises in late pregnancy and is made by the ovary (the corpus luteum makes it in the luteal phase too).)"
- Wrong: NCERT prints "hCG, hPL and relaxin are produced in women only during pregnancy", and NEET keys on it. The chapter itself keys Additional F Q4 (relaxin) on exactly that NCERT sentence. A student who reads Topic 03 now learns that relaxin is not pregnancy-only, then meets Q4 keyed the other way. This repeats the house lesson: a correction must not drop the NCERT wording, it adds the nuance beside it. The line also has nested brackets closing on ").)".
- Fix [NEW], whole line: "(NCERT: hCG, hPL and relaxin are produced in women only during pregnancy. Strictly, hCG is also made by some rare tumours, and the corpus luteum makes a little relaxin in the luteal phase of an ordinary cycle.)"
- Mnemonic aid and KP `say` [NEW], identical in both files: "CHaPLeR: hCG, hPL, Relaxin, the hormones NCERT gives as produced only in pregnancy (relaxin also comes from the ovary)."
- Kind: NCERT fidelity / internal contradiction. Source: introduced by the fix (R1 3). Confidence: certain about the NCERT wording.

### 3. [REPEAT, earlier fix applied wrongly] NCERT's stethoscope sentence removed from the foetal timeline
- Where: Topic 03, Key processes, "Foetal timeline, by trimester" (p. 84).
- Says now: "(the heartbeat is the first sign of a growing foetus; it can be detected after about five to six weeks by ultrasound)".
- Wrong: NCERT reads: the first sign of a growing foetus may be noticed by listening to the heart sound carefully through the stethoscope. That is the line NEET tests. The fix (R1 19, marked "Possible" and left to the founder in F1's decision 1) replaced it rather than adding the nuance beside it.
- Fix [NEW]: "(the heartbeat is the first sign of a growing foetus; NCERT says it may be noticed by listening carefully to the heart sound through a stethoscope, though in practice an ultrasound picks it up first, from about six weeks)".
- Kind: NCERT fidelity. Source: introduced by the fix. Confidence: certain about NCERT's wording.

### 4. [REPEAT] Where meiosis I is completed: the chapter still says three different things
- Where: Topic 02, Oogenesis paragraph 2 ("which matures into a Graafian follicle. Within it, the primary oocyte finally completes its first meiotic division ... (NCERT places this in the tertiary follicle; ...)"); Topic 02 Ex 4 step "meiosis I finishes only at the Graafian stage"; Practice 5 answer "meiosis I completes only at the Graafian stage after puberty"; cheat sheet "meiosis I completes at the Graafian stage"; Figure 2.5 arrow label "Meiosis I (unequal; completed in the Graafian follicle, at puberty onward)"; while F Q6/Q8 now say "in the large (tertiary, then Graafian) follicle just before ovulation", and the KPs say "in the large follicle before ovulation".
- Wrong: NCERT says the primary oocyte within the tertiary follicle completes its first meiotic division. A NEET item worded "the secondary oocyte is formed in" expects the tertiary follicle. The text now holds a book sentence and an NCERT sentence that disagree, and three places keep "Graafian" alone.
- Fix [NEW], with the same phrase everywhere: Ex 4 "meiosis I finishes only in the large follicle just before ovulation (NCERT: the tertiary follicle)"; Practice 5 "meiosis I completes only in the large (tertiary) follicle just before ovulation, after puberty"; cheat sheet "meiosis I completes in the large (tertiary, then Graafian) follicle just before ovulation"; Fig 2.5 label "Meiosis I (unequal; completed in the tertiary follicle, from puberty onward)"; Oogenesis paragraph "Within the tertiary follicle, the primary oocyte finally completes its first meiotic division ... (It is completed under the LH surge just before ovulation.)"
- Kind: NCERT difference / inconsistency. Source: book. Confidence: likely.

### 5. [NEW] FSH across the cycle: the text, the Additional E table and Figure 2.6 disagree
- Where: Topic 02, Menstrual cycle item 2 "rising FSH and LH stimulate follicle development"; Additional E table, Menstrual row FSH "Rising slowly", Follicular row FSH "Rising"; E key principle "Negative feedback: Oestrogen at low/moderate levels suppresses FSH and LH (follicular phase)"; Ex E.1 "FSH is low on days 1–5, rises steadily from day 6 to day 12"; Figure 2.6 (p. 79, drawn as the book prints it): FSH highest on days 1 to 5, falling through the follicular phase, a small peak with LH at day 14.
- Wrong: the brief asks for every pair that does not agree. The figure, which is right physiologically, shows FSH falling through the follicular phase. The E table and Ex E.1 show it rising. The E table also contradicts its own principle that oestrogen holds FSH down in the follicular phase. NCERT's text says only that LH and FSH increase gradually during the follicular phase, so Topic 02's sentence can stay.
- Fix [NEW], one note under the E feedback table: "(The table follows NCERT's simple wording, a gradual rise of FSH and LH through the follicular phase. Figure 2.6 shows the finer pattern: FSH is highest at the start of the cycle, falls through the follicular phase as oestrogen and inhibin hold it down, and peaks again with LH at mid-cycle.)" No figure change.
- Kind: internal inconsistency. Source: book. Confidence: likely.

### 6. [NEW] Topic 03 calls relaxin a placental hormone
- Where: Topic 03, Concept intuition, Exam Relevance (p. 82): "NEET often asks ... the placental hormones (hCG/hPL/relaxin)".
- Wrong: the same topic's table and placenta list (and NCERT) give relaxin from the ovary.
- Fix [NEW]: "the pregnancy hormones (hCG/hPL/relaxin)".
- Kind: biology error. Source: book. Confidence: certain.

### 7. [REPEAT, earlier fix applied wrongly] "Ampulla in two places" now lists three
- Where: Additional F, The Traps, row "“Ampulla” in two places" (p. 107); KP topic 0 shortcut and KP topic 8 mistake (now list three); against Topic 01 Key processes "“ampulla” is used for two different structures", Topic 01 pitfall 4 "It exists in both the Fallopian tube and the mammary gland", and Topic 01 Practice 5 "two anatomically unrelated structures".
- Says now (F): "Same word, different organs: the wide part of the Fallopian tube (fertilisation happens at its junction with the isthmus), the widened end of the vas deferens and the widened part of the mammary duct."
- Wrong: the R2 11 fix added the vas deferens under a heading that still says "two places". Topic 01 also says two throughout, so the KP shortcut contradicts its own topic. NCERT names only the oviduct and mammary ampullae. R2 also said "the ampulla of the vas deferens, Topic 01", but Topic 01 never mentions it.
- Fix [NEW] (recommended, NCERT-aligned): F cell "Same word, different organs: the wide part of the Fallopian tube (fertilisation happens at its junction with the isthmus) and the widened part of the mammary duct." KP topic 0 shortcut "The word ampulla names a part of the oviduct and a widened part of the mammary duct, so read the context before answering". KP topic 8 mistake "ampulla in the oviduct and the mammary duct". If the founder wants the vas deferens kept, the heading must change to "“Ampulla” in more than one place".
- Kind: internal inconsistency. Source: introduced by the fix. Confidence: certain.

### 8. [REPEAT] Exam-share superlatives remain, covered only by the label
- Where: Topic 01 Exam Relevance "one of the highest-weight units", "a reliable 2–4 question zone, almost always testing NCERT lines verbatim"; Topic 02 "One of the densest, highest-yield zones", "assertion–reason traps are perennial", "a large block of marks becomes free"; Topic 03 "A consistently high-yield closing arc", "a favourite source"; F Distribution cells "High: recurs every year", "High: single largest node".
- Wrong: the Lessons say exam-usefulness lines must not be superlatives. Labelling makes them the book's estimate, but "almost always", "recurs every year" and "single largest" are still absolute claims. The chapter brief names "almost always testing NCERT lines verbatim" and "reliable 2–4 question zone" explicitly. F1 left them, as noted in its decision 5.
- Fix [NEW] (minimal): T1 "This is the foundation of an important unit in Class 12 Biology ... In NEET it usually draws a few questions, often testing NCERT lines closely and assertion–reason pairs."; T2 "One of the denser, high-yield zones ... assertion–reason traps recur."; T3 "A high-yield closing arc ... a common source of sequence-ordering questions."; F cells "High: recurs often" and "High: a large node".
- Kind: unlabelled/overstated exam claim. Source: book. Confidence: certain (that they remain).

### 9. [NEW] Saheli "NCERT note" attributes centchroman and SERM to NCERT
- Where: Additional C, Method, "NCERT note: Saheli, a once-a-week pill, contains centchroman (ormeloxifene), a non-steroidal oral contraceptive; chemically it is a selective oestrogen receptor modulator (SERM)."; Practice C.5 "Name one non-steroidal oral contraceptive mentioned in NCERT ... and name the class of compound it belongs to" with answer "Centchroman (ormeloxifene), sold as Saheli ..."; KP topic 5 remember 1.
- Wrong: the current NCERT names Saheli as a once-a-week, non-steroidal oral pill. As far as I know it does not name centchroman, and it does not say SERM. The facts are true, but "NCERT note" and "mentioned in NCERT" overclaim.
- Fix [NEW]: "<b>Note:</b> Saheli (NCERT: a once-a-week, non-steroidal oral contraceptive pill) contains centchroman (ormeloxifene); chemically it is a selective oestrogen receptor modulator (SERM), a detail beyond NCERT." Practice C.5 question: "Name the non-steroidal once-a-week oral contraceptive named in NCERT, its active compound, and the class of compound it belongs to." Answer: "Saheli, taken once a week; it contains centchroman (ormeloxifene), a selective oestrogen receptor modulator (SERM)."
- Kind: attribution. Source: book. Confidence: possible (on the NCERT text).

### 10. [NEW] F Q5 solution says the endometrium is rebuilt "under rising FSH"
- Where: Additional F, Graded set Q5 solution (p. 109): "The follicular phase involves rebuilding of the endometrium under rising FSH."
- Wrong: FSH acts on the follicle. Oestrogen from the growing follicle rebuilds the endometrium, as Topic 02's own hormone roster says ("Oestrogen: Rebuilds endometrium").
- Fix [NEW]: "The follicular phase involves rebuilding of the endometrium under rising oestrogen from the growing follicles (which FSH stimulates)."
- Kind: biology error. Source: book. Confidence: certain.

### 11. [REPEAT, partly] Oogonia numbers: NCERT's "within each fetal ovary" lost in the fix
- Where: Topic 02, Oogenesis paragraph 1.
- Says now: "millions of gamete mother cells (oogonia) form in the foetal ovary ... about one to two million primary oocytes (primary follicles) are present in the two ovaries together at birth".
- Wrong: NCERT reads "a couple of million gamete mother cells (oogonia) are formed within each fetal ovary". The "1–2 million at birth (both ovaries)" is a standard physiology figure but not NCERT's. Not an error, but the NCERT phrase should be kept.
- Fix [NEW]: "a couple of million gamete mother cells (oogonia) are formed within each foetal ovary (NCERT), and no more are made after birth ... about one to two million primary oocytes (primary follicles) are present in the two ovaries together at birth (a figure beyond NCERT)".
- Kind: NCERT fidelity. Source: fix. Confidence: likely.

### 12. [NEW] Additional A: exam label placed so it reads as if the IVF birth were the estimate; label repeated inside kalams
- Where: Additional A, Introduction para 2: "... as well as the landmark of the first successful human IVF birth (the book’s estimate from past papers, not official figures)." Also the C and E `kalam`s carry the full label.
- Fix [NEW]: "NEET and CUET ask (the book’s estimate from past papers, not official figures) for the full names, procedural steps, and clinical indications of four ART methods (IVF, GIFT, ZIFT, and ICSI), as well as the landmark of the first successful human IVF birth." C kalam [NEW]: "Contraceptive methods are classified by how each works, and by whether it is reversible or permanent." E kalam [NEW]: "Beyond the four phases and four hormones lie the feedback relationships across the cycle and the hormonal basis of common clinical conditions."
- Kind: unclear. Source: fix. Confidence: certain.

### 13. [NEW] A Practice 2 answer drops the sperm condition the chapter uses in Ex A.3
- Where: Additional A, Practice 2 answer: "GIFT suits a woman who cannot produce ova but has a healthy Fallopian tube (NCERT: ovum from a donor); prerequisite: at least one functional tube."
- Wrong: Ex A.3 rules GIFT out for severe oligospermia because GIFT needs adequate sperm. The answer to "when is GIFT appropriate instead of IVF" now omits that, which the book's answer had.
- Fix [NEW]: "GIFT suits a woman with at least one healthy Fallopian tube when the sperm are adequate, for example a woman who cannot produce ova and receives a donor ovum (NCERT's account); prerequisite: at least one functional tube."
- Kind: incomplete. Source: fix. Confidence: likely.

### 14. [NEW] Topic 03 "Limiting conditions": "In nature ... (in vitro fertilisation is the exception)"
- Says now: "In nature fertilisation occurs only in the female tract (in vitro fertilisation is the exception), and only in a short window around ovulation."
- Wrong: IVF is not "in nature", so the bracket contradicts its own clause.
- Fix [NEW]: "In the body, fertilisation occurs only in the female tract (in vitro fertilisation, in a dish, is the laboratory exception), and only in a short window around ovulation."
- Kind: unclear wording. Source: fix. Confidence: certain.

### 15. [NEW] F Archetype 5 counter-trap example has an empty answer
- Where: Additional F, Archetype 5, "Second example, counter-trap" (`ans: ''`). The step concludes "(c): A true, R false", but the answer line is blank.
- Fix [NEW]: ans "(c) A true, R false." (or leave it blank, if the house rule "no answer line printed = empty" is kept; the step already gives it).
- Kind: presentation. Source: book layout. Confidence: certain.

### 16. [NEW] Topic 01 Practice 5 answer: "near the fertilisation site"
- Says now: "One ampulla is the wide middle region of the Fallopian tube (near the fertilisation site)".
- Wrong: Topic 01 itself calls the ampulla "the usual fertilisation site" (text, MCQ 3, figure 2.2). "Near" fits Topic 03's ampullary-isthmic junction but not Topic 01.
- Fix [NEW]: "(where fertilisation usually happens, at its junction with the isthmus)".
- Kind: minor inconsistency. Source: book. Confidence: possible.

## Earlier flags applied wrongly or incompletely (summary)
- R1 3 (hCG/relaxin "only"): removed the NCERT sentence; Q4 still keys on it. See flag 2.
- R1 19 (stethoscope): NCERT wording replaced instead of kept. See flag 3.
- R2 4 (hyaluronidase order): the contradiction it named is still there. See flag 1.
- R2 11 (ampulla): the third organ was added under a "two places" heading, and Topic 01 still says two. See flag 7.
- R1 9 (oogonia numbers): NCERT's "within each fetal ovary" dropped. See flag 11.
- R1 10 / R2 14 (tertiary vs Graafian): applied in F and the KPs only; Topic 02 and Fig 2.5 left mixed. See flag 4.
- Everything else in new-text-F1.md and new-text-F2.md I checked and found correct and plain. This covers items F1 Topic 01 to 03 (except those above), and F2 items 1 to 6, 7 to 12, 13 to 16, 17 to 21 (except 18), 22 to 26, 27 to 33, 35 to 39, 40 to 45 (except the ampulla part of 40 and 43). In particular: the Latin root ferre; "third/fifth station"; the hPL role; the Mesoderm "skeletal, cardiac and most smooth muscle"; the inhibin from granulosa; the E table "simplified pattern" cells; "36–48 hours, a figure beyond NCERT"; "5 million/mL, a common cut-off for severe"; HSV-2 or HSV-1; HBsAg acute or chronic; and the Mifepristone "in the NCERT context".

## Counts verified
- Topics: 3 main + 6 Additional (A to F), indexes 0 to 8 as the brief. Parts and the eight sections per topic are present in the book's order.
- Topic 01: 4 worked examples, 5 practice, 4 MCQs, 4 pitfalls, 1 pro-tip, 7 cheat-sheet rows. Topic 02: 4 / 5 / 4 / 4 / 1 / 8. Topic 03: 4 / 5 / 4 / 5 / 1 / 7 + 1 aid. A: 3 ex / 5 practice; B: 3 / 5; C: 3 / 5; D: 2 / 5; E: 3 / 5; F: 7 worked representatives, 8 trap rows, 10 graded questions, 7 distribution rows. The word diff shows no dropped or duplicated sentence. The only book text removed is the contents box, headers and footers, "inner inner" and the fixers' replacements listed above.
- MCQ keys, all checked: T1 (b, d, b, c), T2 (b, b, b, c), T3 (b, b, c, c); F archetype examples (b, b, b, b, A-R b, A-R c); graded Q1 b, Q3 c, Q4 a (NCERT key), Q5 c, Q6 b, Q7 a, Q9 c, Q10 c, Q2 order iv→iii→vi→i→vii→ii→v. All correct and the only correct option. Every A-R item's fourth option reads "A false, R true". The A-R keys are T1 (a), T1-P4 (c), T2 (a), T2-P4 (c), T3 (a), T3-P4 (a), A-P4 (a), B-P4 (a), C-P4 (a), D-P4 (d), E-P4 (b), F (b), (c), Q7 (a): all right (E-P4 (b) and the F corpus-luteum item (b) are defensible keys).
- Match keys: T1, T2, T3, A.2, B.1, C.3: all correct.
- Numbers: testis 4–5 × 2–3 cm, 250 lobules, 1–3 tubules, 2–2.5 °C, ovary 2–4 cm, oviduct 10–12 cm, 15–20 lobes, 46/46/23/23, yields 4 and 1, 60,000–80,000 per ovary, menopause about 50, days 1–5 + 6–13 + 14 + 15–28 = 28, morula 8–16 cells, heart about 1 month, limbs end of month 2, 12 weeks, 24 weeks, fifth month, gestation about 9 months, ZIFT up to 8 blastomeres, 1978, 72 h, days 10–17, LH ∶ FSH > 2 ∶ 1 and 3 ∶ 1, 5 million/mL: all consistent with NCERT or standard values, except as flagged.
- Additional-topic introductions: no "the chapter never covers X" claim is left. "Five examinable topics that sit alongside Chapter 2" matches A to E. E's "four phases and four hormones" matches Topic 02.

## Figures checked (book page vs app render)
2.1 (p. 67), 2.2 (p. 69), 2.3 (p. 71, on Topic 01 Ex 4), 2.4 (p. 77), 2.5 (p. 77), 2.6 (p. 79), 2.7 (p. 85), 2.8 (p. 87). Every label, order, arrow and value matches the book. The W, X, Y, Z order is right (W vasa efferentia, X vas deferens, Y ejaculatory duct where the seminal-vesicle duct joins, Z urethra where the bladder joins). Ploidy in 2.4, 2.5 and 2.7 is right. 2.6 has its phase bar 1–5/6–13/14/15–28, the LH surge at 13–14, the oestrogen peak before it and progesterone luteal. 2.8's loop returns to the oxytocin box. The only figure point is Fig 2.5's meiosis-I label (flag 4), and Fig 2.6's FSH against the text (flag 5, no change to the figure).

## Could not check
- Rendering in the app's own fonts, on iPhone or Android (qlmanage renders without them). The ♀/♂ glyph route is not used in this chapter.
- The exact current NCERT sentence for Saheli (flag 9): stated from memory, so confidence is possible.
- I did not re-rule each writer-flagged item. R1 and R2 ruled on them, and my independent pass found no disagreement beyond the flags above.

## Summary
16 flags; 10 NEW, 6 REPEAT (5 of them are earlier fixes that were applied wrongly or incompletely). Serious (should change before sign-off): flags 1 to 7. The rest are minor wording, NCERT-fidelity or consistency points. The transcription itself is accurate: the word diff shows no dropped text, and all keys and figures are right.
