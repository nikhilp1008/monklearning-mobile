# Biology 11 Chapter 12 (Respiration in Plants): third expert review (R3)

The third independent review, of the whole chapter as it stands after fixers F1 and F2: `content/textbooks/bio-11-12/topics-0-1.ts`, `topics-2-3.ts`, `extras.ts`, `lib/diagrams/biology-11-12.ts`, `lib/revise/keypoints-biology-11-12.ts`. Book pages 706 to 764 of `bio11.pdf`.

Method: I did my own pass first. That covered a word-level diff of every app string against the page-tagged book text (pp. 707 to 720, 721 to 737 and 738 to 764), a full read of all five files against the book, recomputing every number, and checking every Additional-topic introduction against Topics 00 to 03 as built. I also checked every F1/F2 [NEW] wording and rendered all four figures to compare them with the book pages. Only after that did I read review-R1-topics-0-3.md and review-R2-extras-A-F.md to mark each flag NEW or REPEAT. No repo file was edited except this report. I did not run tsc, jest or git.

Marking: **[NEW]** marks our own proposed wording. **NEW** means R1 and R2 did not raise it. **REPEAT/APPLIED WRONGLY** means an earlier flag whose fix introduced or kept an error.

---

## Flags, most serious first

### 1. Topic 01 practice 3: the fixed question stem is garbled and gives away the answer. SERIOUS
- **Where:** topics-0-1.ts, Topic 01, Practice exercises, item 3 (book p. 718).
- **Says now:** "[NEET] During vigorous exercise a sprinter’s calf muscle accumulates a 3-carbon acid before lactic acid builds up and the muscle tires. Name the acid, the enzyme, and explain why no CO<sub>2</sub> is liberated."
- **What is wrong:** F1's "cramps" replacement (R1 #8) was spliced into the wrong place. The stem now names lactic acid while asking for "the acid". It also says the muscle accumulates an acid "before lactic acid builds up", which is nonsense because the acid *is* lactic acid.
- **Fix:** "[NEET] During vigorous exercise a sprinter’s calf muscle accumulates a 3-carbon acid and tires. Name the acid, the enzyme, and explain why no CO<sub>2</sub> is liberated." [NEW]
- **Kind:** transcription slip (fixer) / unclear. **Source:** ours (F1). **Confidence:** certain. **REPEAT / APPLIED WRONGLY** (R1 #8).

### 2. Topic 00 practice 4: "no heat-generating tissue" is false and contradicts Additional topic D. SERIOUS
- **Where:** topics-0-1.ts, Topic 00, Practice exercises, item 4 answer (book p. 710).
- **Says now:** "Because plants are generally non-motile, have no heat-generating tissue to keep a body temperature, and have a large proportion of dead/inactive tissue, giving a low overall O<sub>2</sub> demand."
- **What is wrong:** Additional topic D, in this same chapter, teaches thermogenic plant tissues: the spadix of *Arum*, the voodoo lily and skunk cabbage, heated by the alternative oxidase. So "plants have no heat-generating tissue" is false and contradicts D. The book's own wording, "do not maintain body heat", was closer to the truth.
- **Fix:** "Because plants are generally non-motile, do not keep a constant warm body temperature, and have a large proportion of dead/inactive tissue, giving a low overall O<sub>2</sub> demand." [NEW]
- **Kind:** biology error. **Source:** ours (F1, R1 #16). **Confidence:** certain. **REPEAT / APPLIED WRONGLY** (R1 #16).

### 3. Additional F distribution and key point (topic 9): "the ranges do not add to 100%" is false. SERIOUS (number)
- **Where:** extras.ts, F, The Distribution, first paragraph (book p. 755). Also keypoints-biology-11-12.ts, topic 9, first point (`a`). The file's header comment repeats the claim, but students do not see that.
- **Says now (extras):** "(indicative only; the book’s estimate from past papers, not official figures; the ranges do not add to 100%)". **KP:** "...so they deserve the most revision time (the ranges do not add to 100%), while gaseous exchange is mostly asked as assertion-reason".
- **What is wrong:** The ranges are 30–35, 30–35, 15–20 and 10–15. Their lows sum to 85 and their highs to 105, so 100% lies inside the span, for example 35 + 35 + 20 + 10 = 100. The statement is arithmetically wrong.
- **Fix (extras):** "(indicative only; the book’s estimate from past papers, not official figures)" [NEW], which simply deletes the clause. **Fix (KP):** delete " (the ranges do not add to 100%)". Also correct the KP header comment ("the four ranges do not add to 100%, so no point adds them") to "the four ranges are approximate, so no point adds them".
- **Kind:** number. **Source:** ours (F2, R2 #7h). **Confidence:** certain. **REPEAT / APPLIED WRONGLY** (R2 #7h).

### 4. Additional C introduction: a false claim about what the chapter does (malic acid equation). SERIOUS (false "chapter covers" claim)
- **Where:** extras.ts, C, Introduction (book p. 745).
- **Says now:** "...reads the RQ of tripalmitin and of malic acid from their equations, and cautions that real tissues burn mixtures."
- **What is wrong:** Topics 00 to 03 never write the malic acid equation. Topic 03 only quotes the value ("malic 1.33, oxalic 4") in the RQ table, the Topic 03 Example 4 analysis and the cheat sheet. Only tripalmitin is worked from an equation (Topic 03 Example 3), plus glucose.
- **Fix:** "The chapter gives the RQ values for pure substrates (carbohydrate = 1, protein about 0.8 to 0.9, fat about 0.7, organic acid > 1, anaerobic = infinity), works the RQ of glucose and of tripalmitin from their equations, quotes malic acid at 1.33 and oxalic acid at 4, and cautions that real tissues burn mixtures." [NEW]
- **Kind:** unclear or misleading (false chapter claim). **Source:** ours (F2, R2 #1a). **Confidence:** certain. **REPEAT / APPLIED WRONGLY** (R2 #1a).

### 5. Topic 02 ETS step 4: "Protons can only return ... through ATP synthase" contradicts Additional A Step 4
- **Where:** topics-2-3.ts, Topic 02, Key procedures, chemiosmosis `proc`, step 4 (book p. 725).
- **Says now:** "Protons can only return to the matrix through <b>ATP synthase (Complex V)</b>: they enter the F<sub>0</sub> channel, ..."
- **What is wrong:** This is an overgeneral "only". Additional A Step 4 in the same chapter says: "Protons leak back across the inner membrane without passing through ATP synthase." Plant mitochondria also carry uncoupling proteins. The two places contradict each other.
- **Fix:** "Protons return to the matrix mainly through <b>ATP synthase (Complex V)</b>: they enter the F<sub>0</sub> channel, and their flow turns the machinery of the F<sub>1</sub> headpiece, which catalyses ADP + P<sub>i</sub> → ATP." [NEW]
- **Kind:** biology error (overgeneral). **Source:** book. **Confidence:** likely. **NEW**.

### 6. Topic 02 Example 3 and key point (topic 2 shortcut): "Complex IV is the only complex that hands electrons to O<sub>2</sub> ... oxygen consumption stops". This is not true of plants, and the chapter's own Additional D says so.
- **Where:** topics-2-3.ts, Topic 02, Worked examples, Example 3 (NEET, Complex IV inhibitor), step 1 (book pp. 725 to 727). keypoints-biology-11-12.ts, topic 2, `shortcut` ("if Complex IV is blocked, O<sub>2</sub> consumption stops ...").
- **Says now:** "(i) Complex IV is the only complex that hands electrons to O<sub>2</sub>. Block it and O<sub>2</sub> can no longer be reduced → <b>oxygen consumption stops</b>. ... (This is exactly how cyanide, a Complex IV poison, is lethal.)"
- **What is wrong:** The chapter is Respiration in *Plants*. Additional D teaches that plants have a cyanide-resistant alternative oxidase that reduces O<sub>2</sub> while Complexes III and IV are blocked. So in a plant tissue, blocking Complex IV (for example with cyanide) does not stop all O<sub>2</sub> uptake. The NEET answer is fine for the standard chain, but a one-line qualifier keeps the chapter consistent.
- **Fix (Example 3, step 1):** "(i) Complex IV is the only complex of the standard chain that hands electrons to O<sub>2</sub>. Block it and O<sub>2</sub> can no longer be reduced through the chain → <b>oxygen consumption through the chain stops</b>. ..." Then, after "(This is exactly how cyanide, a Complex IV poison, is lethal.)", add: "(Many plant tissues can still pass some electrons to O<sub>2</sub> through the cyanide-resistant alternative oxidase; see Additional topic D.)" [NEW] **Fix (KP topic 2 shortcut):** "if Complex IV is blocked, O<sub>2</sub> consumption through the standard chain stops, ..." [NEW]
- **Kind:** biology error (overgeneral, internal contradiction). **Source:** book. **Confidence:** likely. **NEW**.

### 7. Topic 01 Example 4 (hexokinase AR): F1's qualifier "as in this chapter" is not true
- **Where:** topics-0-1.ts, Topic 01, Worked examples, Example 4, question (book p. 717).
- **Says now:** "Assertion (A): If hexokinase is competitively inhibited, lactic acid fermentation in a muscle cell also stops (taking glucose as the only entry, as in this chapter)."
- **What is wrong:** The chapter does not take glucose as the only entry. Topic 03 has glycerol entering glycolysis, fats and proteins as substrates, and the substrate table. Muscle glycogen also enters as glucose-6-phosphate without hexokinase, which is why the qualifier is needed at all. The qualifier is right to exist, but its justification is wrong.
- **Fix:** "... lactic acid fermentation in a muscle cell also stops (taking free glucose as the cell’s only fuel)." [NEW]
- **Kind:** unclear or misleading. **Source:** ours (F1, R1 #10). **Confidence:** likely. **REPEAT / APPLIED WRONGLY** (R1 #10).

### 8. Additional E Example 3: the new respirometer sentence says the wrong thing about the second flask, and the paragraph's order is broken
- **Where:** extras.ts, E, Example 3 (Comparative Pathway Analysis), step 2 "Predicted results" (book p. 753).
- **Says now:** "...is not interpretable. Run one respirometer with KOH (to read O<sub>2</sub> change) and one without (to read CO<sub>2</sub> change); use darkness for a true RQ. However, mitochondrial respiration continues, and its RQ remains unchanged."
- **What is wrong:** A respirometer without KOH reads the *difference*, CO<sub>2</sub> released minus O<sub>2</sub> taken up. It does not read the CO<sub>2</sub> change, so CO<sub>2</sub> is found by subtraction. Also, the inserted method sentence now sits between the light-condition prediction and its "However, ...", so "However" no longer follows from anything.
- **Fix:** "... so the ratio of net gas changes no longer measures respiratory RQ and is not interpretable. However, mitochondrial respiration continues, and its RQ remains unchanged. The net RQ measured reflects the difference between photosynthetic CO<sub>2</sub> consumption and respiratory CO<sub>2</sub> production. ATP yield from respiration itself is unchanged (38 per glucose oxidised), but the overall energy balance of the tissue includes the ATP generated by photosynthesis. (Method note: one respirometer with KOH reads the O<sub>2</sub> taken up; one without KOH reads CO<sub>2</sub> released minus O<sub>2</sub> taken up, so the CO<sub>2</sub> is found by subtraction; use darkness for a true RQ.)" [NEW]
- **Kind:** biology error (method) / unclear. **Source:** ours (F2, R2 #5). **Confidence:** likely. **REPEAT / APPLIED WRONGLY** (R2 #5, in part).

### 9. Topic 03: RQ = 0 "never happens". This needs a NEET-safe qualifier, because coaching quotes RQ ≈ 0 for CAM succulents at night.
- **Where:** topics-2-3.ts, Topic 03, Crack the MCQ Q1, option (d) nudge, and the pitfall "Forgetting the anaerobic case" (book pp. 735 to 736).
- **Says now:** "(d) would require no CO<sub>2</sub> at all, which never happens in active respiration." Pitfall: "... not 0. Zero would mean no CO<sub>2</sub> at all."
- **What is wrong:** Respiration does always make CO<sub>2</sub>, so the logic is right. But many NEET guides state "RQ of succulents (CAM plants) at night is zero", because the CO<sub>2</sub> is re-fixed into malic acid and none is given out. Topic 03 Example 4 also discusses CAM succulents. A student who has met that line will read "never happens" as a contradiction.
- **Fix (nudge):** "(d) would require no CO<sub>2</sub> to be given out at all; respiration always makes CO<sub>2</sub> (an apparent RQ near zero is quoted only for CAM succulents at night, because they re-fix that CO<sub>2</sub> into acids instead of releasing it)." [NEW] Leave the pitfall as it is, or add the same bracket.
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** possible. **NEW**.

### 10. Topic 01 procedures: F1's two new sentences read awkwardly, and one talks about "the book" to the student
- **Where:** topics-0-1.ts, Topic 01, Key procedures: (a) the "Splitting" paragraph; (b) "Pyruvate is the crossroads" (book pp. 715, 717).
- **Says now:** (a) "(The book numbers the steps 1 to 9 because triose phosphate isomerase is folded into step 4; counted separately, glycolysis is ten reactions.)" (b) "This is a key branch-point molecule, the “where do I go next?” molecule, in the whole chapter, so fix it now."
- **What is wrong:** (a) The student is reading the app, not "the book". (b) "a key branch-point molecule ... in the whole chapter" does not parse well.
- **Fix:** (a) "(The steps here are numbered 1 to 9 because triose phosphate isomerase is folded into step 4; counted separately, glycolysis is ten reactions.)" [NEW] (b) "This is the chapter’s key branch point, the “where do I go next?” molecule, so fix it now." [NEW]
- **Kind:** unclear (wording). **Source:** ours (F1, R1 #21). **Confidence:** certain. **REPEAT / APPLIED WRONGLY** (wording only).

### 11. Topic 01 step 1: "the cell has committed" at hexokinase contradicts "the committed ... step" at PFK
- **Where:** topics-0-1.ts, Topic 01, Investment phase paragraph, step 1 (book p. 715).
- **Says now:** "Why? A charged, phosphorylated sugar cannot leak back out through the membrane: the cell has committed." Two lines later, step 3 says: "This is the committed, irreversible, rate-limiting step".
- **What is wrong:** Glucose-6-phosphate is trapped in the cell, but it is not committed to glycolysis, since it can still go to starch/glycogen or the pentose phosphate pathway. The commitment is at PFK, as the next step says. A student meets two "committed" steps.
- **Fix:** "Why? A charged, phosphorylated sugar cannot leak back out through the membrane: the glucose is now held inside the cell." [NEW]
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** likely. **NEW**.

### 12. Superlatives and exam-frequency lines left in Topics 00 to 03 (F was softened, the Topics were not)
- **Where / says now / fix:**
  - topics-0-1.ts, Topic 00, Key reasoning: "This is the question examiners love, so reason it through ..." → "This is a common exam question, so reason it through ..." [NEW]
  - topics-0-1.ts, Topic 00, MCQ 3, option (a) nudge: "the favourite trap for students who forget the day/night switch" → "a classic trap for students who forget the day/night switch" [NEW]
  - topics-0-1.ts, Topic 01, fermentation mechanism: "<b>No CO<sub>2</sub></b> is released: a favourite NEET discriminator." → "... : a common NEET discriminator." [NEW]
  - topics-0-1.ts, Topic 01, pitfalls: "The single most common Board/NEET error: writing 4 instead of 2." → "A very common Board/NEET error: writing 4 instead of 2." [NEW]; "Examiners exploit this constantly." → "Examiners often test this." [NEW]
  - topics-2-3.ts, Topic 02, pitfalls: "This wrong-partner option is a favourite NEET distractor." → "... is a common NEET distractor." [NEW]
  - topics-2-3.ts, Topic 03, pitfalls: "Examiners love this trap." → "This is a common trap." [NEW]
- **Kind:** unclear or misleading (exam-frequency superlative). **Source:** book. **Confidence:** certain (that they are superlatives); the founder decides. **NEW** (R2 #7g softened them in F only).

### 13. Additional A: the shuttle story is the animal picture, and the chapter is about plants
- **Where:** extras.ts, A, Introduction para 2, Step 2, Example 2 and practice 5 (book pp. 738 to 742).
- **Says now:** "Because NADH cannot cross the inner mitochondrial membrane, cells use shuttle systems ..."; Step 2 names the malate-aspartate and glycerol-3-phosphate shuttles; practice 5: "The glycerol-3-phosphate shuttle is prominent in skeletal muscle."
- **What is wrong:** The arithmetic and the exam answer (38 or 36) are right. But in plant cells, cytoplasmic NADH is mainly oxidised by NAD(P)H dehydrogenases on the outer face of the inner membrane. These feed ubiquinone, bypass Complex I, and so give about 2 ATP, the same yield as the glycerol-phosphate route. The two named shuttles are the textbook animal (mammalian) case. A short note keeps a plant chapter honest without changing any number.
- **Fix:** add at the end of Step 2: "(These two shuttles are the standard animal case. Plant mitochondria also oxidise cytoplasmic NADH directly, with an enzyme on the outer face of the inner membrane that feeds ubiquinone, which likewise gives about 2 ATP per NADH. Exam answers use 38, or 36 with the 2-ATP route.)" [NEW]
- **Kind:** unclear or misleading (enrichment accuracy). **Source:** book. **Confidence:** possible. **NEW**.

### 14. Additional A Example 3 and practice 5 disagree about the muscle cell
- **Where:** extras.ts, A, Example 3 (Energy Comparison) and Practice 5 (book pp. 741 to 742).
- **Says now:** Example 3: "Aerobic (muscle cell): up to 38 ATP per glucose (36 if the glycerol-3-phosphate shuttle carries the glycolytic NADH)"; answer "36 ATP difference". Practice 5: "The glycerol-3-phosphate shuttle is prominent in skeletal muscle."
- **What is wrong:** By practice 5's own statement, the muscle case is the 36 case, with a difference of 34. The answer gives only the 38-based difference.
- **Fix (answer):** "36 ATP difference (idealised: 38 aerobic against 2 by fermentation; 34 if the muscle’s glycolytic NADH uses the glycerol-3-phosphate shuttle)." [NEW]
- **Kind:** number (consistency). **Source:** ours/book (F2 added the 36 bracket in the step but not in the answer). **Confidence:** likely. **NEW**.

### 15. Shared introduction (A): "integrated numericals that demand all three together" has no "three" to refer to
- **Where:** extras.ts, A, Introduction para 1 (book p. 738).
- **Says now:** "...the alternative oxidase pathway of plants, which the chapter does not address; and integrated numericals that demand all three together."
- **What is wrong:** The sentence lists five patterns, so "all three" is unclear. The three meant are named only in E's introduction: ATP accounting, the amphibolic pathway and RQ.
- **Fix:** "... and integrated numericals that combine ATP accounting, the amphibolic pathway and RQ in one problem." [NEW] Optionally also "see topic D" → "see Additional topic D" [NEW].
- **Kind:** unclear. **Source:** book. **Confidence:** certain. **NEW**.

### 16. Protein RQ: NCERT says "about 0.9"; the chapter says "≈ 0.8–0.9"
- **Where:** topics-2-3.ts, Topic 03, RQ table row "Protein", cheat sheet "protein ≈ 0.8–0.9"; extras.ts, C Step 2 table; KP topic 3 and topic 6 (book pp. 731, 737, 745).
- **What is wrong:** Nothing is false, since the range contains 0.9. But NEET keys follow NCERT's "about 0.9", and a student who picks "0.8" from this range against a "0.9" option loses the mark.
- **Fix:** in the Topic 03 table and cheat sheet, write "≈ 0.8–0.9 (< 1; NCERT quotes about 0.9)" [NEW].
- **Kind:** number (NCERT note). **Source:** book. **Confidence:** possible. **NEW**.

### 17. Additional F, Habit 3: "and works normally" is vague
- **Where:** extras.ts, F, Three Habits That Win Marks, habit 3 (book p. 764); the KP topic 9 `mistake` point repeats the habit.
- **Says now:** "True anaerobic respiration, found in some bacteria, uses an ETS with an inorganic acceptor other than O<sub>2</sub> (for example nitrate or sulphate) and works normally."
- **What is wrong:** "Works normally" says nothing a student can use. Also, the Topics use NCERT's looser sense, where Topic 03's RQ table reads "Anaerobic respiration / fermentation: ∞". The habit should say where the line is drawn.
- **Fix:** "... uses an ETS with an inorganic acceptor other than O<sub>2</sub> (for example nitrate or sulphate), so it makes ATP by oxidative phosphorylation. At NCERT level “anaerobic respiration” in plants and muscle usually means fermentation; separate the two only when an option does." [NEW]
- **Kind:** unclear. **Source:** book. **Confidence:** likely. **NEW**.

### 18. Additional F, Archetype 5: the note on "Both A and R are false"
- **Where:** extras.ts, F, Archetype 5, "What it looks like" (book p. 759).
- **Says now:** "(The wording of the last option can vary between papers: some print “Both A and R are false”, so always read the options given.)"
- **What is wrong:** As a statement about old AIIMS-style papers it is true. It does not change any option, since every AR item in the app correctly ends "(d) A false, R true". But the founder's house rule is that the fourth option is always "A false, R true", and this line puts the other form in front of students. Founder's call.
- **Fix:** keep it, or delete the bracket. If it is kept: "(Older papers sometimes add or substitute “Both A and R are false”; always read the options given.)" [NEW]
- **Kind:** unclear (house rule). **Source:** ours (F2). **Confidence:** possible. **NEW**.

---

## Earlier flags I believe were applied wrongly
- **R1 #8** ("cramps" → "tires"): fine in the intuition and cheat sheet, but it broke Topic 01 practice 3 (flag 1).
- **R1 #10** (hexokinase qualifier): the qualifier is right, but "as in this chapter" is false (flag 7).
- **R1 #16** (Topic 00 practice 4): it introduced the false "no heat-generating tissue" (flag 2).
- **R1 #21**: its wording reads badly and refers to "the book" (flag 10).
- **R2 #1a** (C intro): it introduced the false malic-equation claim (flag 4).
- **R2 #5** (E.3): the "without KOH reads CO<sub>2</sub>" error and the broken order (flag 8).
- **R2 #7h**: "the ranges do not add to 100%" is arithmetically false. It sits in extras F and in the KP topic 9 point (flag 3).

All other R1 and R2 items (R1 #1–7, 9, 11–15, 17–20; R2 #1b–g, 2–4, 6, 7a–g and 7i, 8–11, and the KP items) were applied correctly. I checked each against the files as they stand. The F2 open item "verify NCERT's 38" is fine: NCERT's respiratory balance sheet gives a net gain of 38 ATP per glucose, so "the idealised figure the NCERT chapter works with" stands.

## Founder decisions noted (no flag)
- Additional D title "Respiration in Plants: The Alternative Oxidase Pathway" (book: "Plant-Specific Respiration: ..."). The new title is accurate; the keypoints file's section comment still says "Plant-Specific Respiration", which is a code comment only.

---

## Counts verified
- **Transcription:** word-level diff of all three topic files against the book text for pp. 707 to 764. Apart from the fixer changes listed in new-text-F1/F2, the house rules (em dashes, "Sub-topic" → "Topic", AR option letters, subscripts) and the flags above, I found no missing, duplicated or miscopied sentence.
- **Blocks:** Topics 00 to 03 have 4 worked examples, 5 practice items and 4 MCQs each (16 examples, 20 practice, 16 MCQs), the same as the book. Additional topics: A has 3 examples and 5 practice; B 3 and 5; C 4 and 5; D 2 and 5; E 3 and 5; F has 7 representative examples and 8 graded practice. All counts match the book.
- **Answer keys:** I checked all 16 MCQ `correct` indexes against the book's "Correct:" and against the science, and all are right. The 8 F graded keys are right: (b), (c), (b), (b), (b), (c), (a), plus the open Q8. All 9 assertion-reason items end with "(d) A false, R true", and every keyed answer is correct: Topic 00 (a), Topic 01 (a), Topic 02 (a), Topic 03 (a), F (d), F (a), F graded (a).
- **Arithmetic I recomputed:**
  - Glycolysis: 4 − 2 = 2 ATP; 2 NADH; 2 pyruvate. The net equation balances.
  - Krebs: per turn 2 CO<sub>2</sub>, 3 NADH, 1 FADH<sub>2</sub>, 1 GTP; per glucose 4, 6, 2, 2. From Krebs carriers alone, 6 × 3 + 2 × 2 = 22.
  - Balance sheet (errata rows separate and correct): 4 direct, 10 NADH, 2 FADH<sub>2</sub>; 30 + 4 = 34; 34 + 4 = 38. The shuttle case gives 36: 4 + 24 + 4 + 4. Efficiency about 40%.
  - Fermentation comparison: 38 − 2 = 36 and 38 ÷ 2 = 19. E practice 3: 2 + 38 = 40, or 2 + 36 = 38.
  - Tripalmitin: 2 C<sub>51</sub>H<sub>98</sub>O<sub>6</sub> + 145 O<sub>2</sub> → 102 CO<sub>2</sub> + 98 H<sub>2</sub>O balances (C 102, H 196, O 302 on each side); RQ = 102 ÷ 145 = 0.7034.
  - Glucose RQ = 6 ÷ 6 = 1.
  - Malic acid: C<sub>4</sub>H<sub>6</sub>O<sub>5</sub> + 3 O<sub>2</sub> → 4 CO<sub>2</sub> + 3 H<sub>2</sub>O; RQ = 4 ÷ 3 = 1.33.
  - Tartaric acid: 2 C<sub>4</sub>H<sub>6</sub>O<sub>6</sub> + 5 O<sub>2</sub> → 8 CO<sub>2</sub> + 6 H<sub>2</sub>O (O 22 = 22, H 12 = 12); RQ = 8 ÷ 5 = 1.6. Oxalic acid RQ = 4 checks out.
  - Mixed fuels: 0.85 is the midpoint of 0.7 and 1.0.
  - Palmitate: 31 × 3 + 15 × 2 + 8 − 2 = 129; 3 × 129 = 387. Glycerol: 6 NADH × 3 = 18, 1 FADH<sub>2</sub> × 2 = 2, direct 2 + 1 − 1 = 2, total 22. Tripalmitin total 409. Per carbon: 129 ÷ 16 ≈ 8 and 38 ÷ 6 ≈ 6.
  - α-ketoglutarate withdrawal: 3 + 1 + 2 + 3 = 9.
  - F direct ATP: 6 gross − 2 = 4; ETS 6 + 6 + 18 + 4 = 34; total 38.
  - Distribution: 60–70% for the two big zones is consistent; the "do not add to 100%" note is false (flag 3).
- **Carbon tracking (B):** I verified every carbon assignment. DHAP from C1–C3 becomes G3P with aldehyde C3; the other G3P has aldehyde C4. The pyruvate carboxyls are C3 and C4, lost in the link reaction. The acetyl groups carry C1/C2 and C6/C5. The C2 path into citrate (the acetyl-derived carboxyl) is right, Krebs CO<sub>2</sub> comes from the OAA-derived carbons, and label scrambling by symmetrical succinate is right.
- **Additional-topic introductions checked against the Topics as built:**
  - Shared intro: holds, apart from "all three" (flag 15).
  - A: true. The chapter mentions a 2-ATP shuttle giving about 36 but names no shuttle.
  - B: true.
  - C: false on malic acid (flag 4); the rest is true.
  - D: true. There is no AOX anywhere in Topics 00 to 03; cyanide appears only as a Complex IV poison.
  - E: true.
- **Key points:** I checked all 26 against the chapter text. Every number and claim is right except the topic 9 "do not add to 100%" (flag 3) and the topic 2 shortcut's unqualified "O<sub>2</sub> consumption stops" (flag 6).

## Figures checked (with pages)
I rendered all four drawings from `lib/diagrams/biology-11-12.ts`, by running the module's `draw()` and `check()` through sucrase-node (not jest), converted them with qlmanage, and compared each with the book page image. All 48 internal checks pass.
- **Figure 12.1, glycolysis (p. 716; caption p. 715).** Every box (Glc … Pyr, G3P, DHAP, 2G3P) and every enzyme label are the book's: hexokinase −ATP, phosphohexose isomerase, phosphofructokinase −ATP, aldolase, triose phosphate isomerase, PGAL dehydrogenase +NADH, +ATP (substrate-level), phosphoglycerate mutase, enolase −H<sub>2</sub>O, pyruvate kinase +ATP. The phases and key match, and the caption agrees with the redrawn key.
- **Figure 12.2, Krebs cycle (p. 724).** All 8 members with carbon counts and all 8 enzymes match. CO<sub>2</sub> at isocitrate and α-KG dehydrogenase, NADH ×3, FADH<sub>2</sub> at succinate dehydrogenase, GTP at succinate thiokinase and acetyl-CoA entry at citrate synthase are all correct.
- **Figure 12.3, ETS (p. 726).** Complexes I to IV and ATP synthase, with H<sup>+</sup> pumped at I, III and IV only and II not pumping. UQ, cyt c, NADH/FADH<sub>2</sub> entries, O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O, ADP + P<sub>i</sub> → ATP and the H<sup>+</sup> back-flow all match.
- **Figure 12.4, amphibolic (p. 733).** Every box and arrow matches, including "enters at DHAP/PGAL", "to Krebs intermediates" and the two highlighted reverse arrows (fatty-acid and amino-acid synthesis). The captions of 12.1 and 12.4 correctly replace the colour words.
- **Tables:** p. 714 (glycolysis accounting), p. 722 (Krebs yield, ETS complexes), p. 731 (substrates, RQ), p. 734 (balance sheet), pp. 738 to 739 (A tables), p. 742 (B carbon tables), p. 745 (C RQ table), p. 748 (D comparison), p. 755 (F distribution), p. 757 (three-room map), pp. 760 to 761 (traps). I checked every cell against the text layer, which was clean for these pages.

## What I could not check
- I did not render page images for the tables; I compared them against the text layer only. The text layer read cleanly and its numbers agree with the arithmetic.
- No device or Android look, since no simulator was allowed. The fraction and subscript rendering of the RQ stacks is unchecked on a phone.
- I checked NCERT wording (38 ATP, protein RQ about 0.9, less than 7%, 13% alcohol, Embden–Meyerhof–Parnas, complex names) from my knowledge of the NCERT Class 11 chapter, not against an NCERT PDF.

## Overall judgement
The chapter is accurate. The transcription is faithful, every number and equation recomputes, all MCQ and AR keys are right, and the four figures match the book. The serious problems are almost all introduced by the fixers, not the book:
- a garbled practice stem that gives its answer away (flag 1);
- a false "no heat-generating tissue" line that contradicts Additional D (flag 2);
- a false arithmetic aside on the NEET shares (flag 3);
- a false claim that the chapter works the malic acid equation (flag 4).

The two "only" statements in Topic 02 (flags 5 and 6) are the book's own, and they contradict the chapter's Additional topics A and D. They need a few words each.

## Summary
18 flags. 11 are NEW (5, 6, 9, 11, 12, 13, 14, 15, 16, 17, 18) and 7 are REPEAT/APPLIED WRONGLY (1, 2, 3, 4, 7, 8, 10). 4 are serious (1 to 4). Flags 5 and 6 are medium, and the rest are low or possible.
