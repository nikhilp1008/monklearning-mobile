# Biology 11 Ch19, review R3 (third review, Opus): whole chapter as it now stands

Scope: content/textbooks/bio-11-19/topics-1-12-extra-a.ts, extras-b-g.ts, extra-h.ts; lib/diagrams/biology-11-19.ts; lib/revise/keypoints-biology-11-19.ts. Book pp. 1136 to 1170 (bio11.pdf / bio11.paged.txt). Nothing in the repo was edited; no tsc, jest or git.
Method: my own pass first. A word-level diff of every app string in the three topic files against the book text for pp. 1136 to 1170 (script and output in my scratch folder r3-b1119). Every difference is a layout label, a sub/sup split or one of the [NEW] items in new-text-F1/F2, except the items flagged below. Page images viewed for pp. 1141 (Topic 08 table) and 1148 (RAAS cascade). Every match key, peptide length, timing and A-R key recomputed. Every Additional-topic "the chapter states / does not" sentence checked against Topics 01 to 12 as built, and every fixer [NEW] wording checked. Only after that I read R1 and R2 and tagged each flag NEW or REPEAT.

## Flags, most serious first
([NEW] = our own proposed wording. "Fix-induced" = NEW, but caused by how an earlier flag was applied.)

1. **H (What NEET Actually Asks), Archetype 3, "Common trap" paragraph (p. 1163).** NEW, fix-induced (R2-8 applied wrongly).
   Says now: "When R says the opposite of what is physiologically correct, the answer is <b>(c) A true, R false</b> or <b>(d) A false, R true</b>."
   Wrong: the premise is that R is false, so (d) "A false, R true" can never be the answer. The fix to the book's "(d) both false" kept the "or (d)" and so now teaches a rule that contradicts itself.
   Fix [NEW]: "When R says the opposite of what is physiologically correct, R is false, so the answer is <b>(c) A true, R false</b>. When it is A that is wrong and R is a true statement, the answer is <b>(d) A false, R true</b>."
   Kind: unclear/misleading (wrong exam rule). Source: ours (fixer). Confidence: certain.

2. **Topic 01, Introduction, "Exam Relevance (whole chapter)" (p. 1136).** NEW, fix-induced (R1-11 applied wrongly).
   Says now: "(typically 1–3 questions in recent papers; the book’s estimate from past papers, not official figures)"
   Wrong: the book prints "typically 3–5 questions". The new text changes the number and still credits it to the book, so the label is now false. "1–3" is our own unverified estimate. (The founder decision in new-text-F1 is still open.)
   Fix [NEW], either: (a) drop the count: "Chemical Coordination is one of the <b>higher-yield chapters for NEET</b> and a reliable <b>CBSE</b> scorer (...)"; or (b) keep the book's count with the label: "(typically 3–5 questions; the book’s estimate from past papers, not official figures)". Do not credit "1–3" to the book.
   Kind: unclear/misleading (misattributed number). Source: ours. Confidence: certain.

3. **Topic 08, table "Gland → Hormone → Action → Disorder", the 8 "none" cells (pp. 1140 to 1141), and the key point Topic 08 (index 7) first Remember `why`.** NEW.
   Says now: Adrenal medulla, Testis, Ovary, Heart, Kidney, GI tract, Hypothalamus and Pineal rows: "none". Key point why: "Hypothalamus, pineal, adrenal medulla, testis, ovary, heart, kidney and GI tract have no disorder in the table."
   Wrong: the book's "—" means "not listed", but "none" says the gland has no disorder. The chapter itself contradicts that: Additional E Practice 5 names phaeochromocytoma, a tumour of the adrenal medulla. Hypogonadism, and kidney failure causing anaemia, are other real cases.
   Fix [NEW]: write each of the 8 cells as "not listed". Key point why: "Hypothalamus, pineal, adrenal medulla, testis, ovary, heart, kidney and GI tract have no disorder listed in the table."
   Kind: unclear/misleading. Source: transcription (writer exception, ruled allowed by R1). Confidence: likely.

4. **Additional D, Practice answer 4 (iv) (p. 1154).** NEW.
   Says now: "(iv) each activated PKA phosphorylates many target enzymes (phosphorylase kinase and glycogen phosphorylase);"
   Wrong: PKA phosphorylates phosphorylase kinase, and phosphorylase kinase then phosphorylates glycogen phosphorylase. PKA does not phosphorylate glycogen phosphorylase directly. Worked Example D.1 in the same topic says it correctly, so the answer contradicts the topic.
   Fix [NEW]: "(iv) each activated PKA phosphorylates many phosphorylase kinase molecules, and each phosphorylase kinase activates many glycogen phosphorylase molecules;"
   Kind: biology error. Source: book. Confidence: certain.

5. **Topic 08, table head vs Thyroid row (p. 1141).** NEW, fix-induced (R2's optional head gloss applied without fixing the row).
   Says now: head "Disorder (excess / deficiency, in this order where both are given)"; Thyroid cell "goitre, cretinism, myxoedema / Graves’".
   Wrong: the Thyroid cell lists the deficiency states first and Graves’ (excess) second, so it breaks the order the new head now promises. GH, Parathyroid and Adrenal cortex follow the order. Writer 1 and R2 both noticed the order is mixed in the book.
   Fix [NEW]: Thyroid cell "Graves’ / goitre, cretinism, myxoedema". If the founder wants the book's cell order kept, drop the gloss and go back to the head "Disorder (excess / deficiency)". The key point Topic 08 "mistake" ("The table lists them as excess and deficiency, so place each on the right side") then reads true.
   Kind: unclear/misleading (table). Source: ours plus book. Confidence: certain.

6. **Additional A, Axis 3 "Mechanism" (p. 1146), file topics-1-12-extra-a.ts line 558.** REPEAT (R1-2, R2-13). new-text-F2 item 6 says this was fixed; it was not.
   Says now: "a decapeptide with the sequence pGlu-His-Trp-Ser-Tyr-<br>Gly-Leu-Arg-Pro-Gly-NH<sub>2</sub>"
   Wrong: a forced line break inside the peptide sequence, copied from the book's line wrap.
   Fix: delete the `<br>`, giving "pGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH<sub>2</sub>". The sequence itself is correct: 10 residues, checked letter by letter.
   Kind: transcription slip. Source: transcription. Confidence: certain.

7. **Additional C, Practice answer 2 (p. 1152).** NEW, fix-induced (R2-6 applied with a doubled phrase).
   Says now: "...which enlarge and become overactive (secondary hyperparathyroidism) → secondary hyperparathyroidism → increased bone resorption..."
   Fix [NEW]: "Low calcium (and high phosphate) stimulates the parathyroids, which enlarge and become overactive → secondary hyperparathyroidism → increased bone resorption → bone pain and renal osteodystrophy."
   Kind: transcription slip (new wording). Source: ours. Confidence: certain.

8. **Additional A, "What the chapter states", last sentence (p. 1144).** REPEAT (knock-on of R1-13/R2-25; F2 founder decision 1 foresaw it).
   Says now: "...and it uses the term “tropic hormone” without defining it."
   Wrong: Topic 09 now reads "(trophic hormone)", so the sentence misquotes the chapter as built.
   Fix [NEW]: "...and it uses the term “trophic hormone” without defining it." If Topic 09 goes back to NCERT's "tropic", keep the current sentence.
   Kind: false claim about the chapter. Source: ours. Confidence: certain.

9. **Exam-claim labels whose wording does not fit the claim.** NEW (on fixer wording). Places:
   - A Axis 1 "Clinical note" (p. 1145): "a point often tested in NEET clinical scenarios (the book’s estimate from past papers, not official figures)";
   - H "Two Topics Worth Contrasting" (p. 1169): "assertion–reason questions often test the difference (the book’s estimate from past papers, not official figures)";
   - B, C, D, E, F "What the Examination Requires": "(This is the book’s view of what the exam asks, from past papers, not an official figure.)".
   Wrong: none of these is a number, so "estimate" and "not an official figure" do not fit. They read oddly to a student.
   Fix [NEW]:
   - A: "The TSH level distinguishes the level of the defect, a point the book says is often tested." TSH-level scenarios are beyond NCERT.
   - H: "...and the book says assertion–reason questions often test the difference."
   - B to F: "(This is the book’s view of what the exam asks.)"
   Kind: unclear wording. Source: ours. Confidence: certain (wording); founder's call on style.

10. **Additional F, Method, "Prostaglandins as local hormones" (p. 1158).** NEW.
    Says now: "arachidonic acid (a 20-carbon polyunsaturated fatty acid, membrane phospholipid)"
    Wrong: arachidonic acid is a fatty acid held in membrane phospholipids; it is not itself a phospholipid. Practice 2 and 5 say it correctly ("released from membrane phospholipids by phospholipase A<sub>2</sub>").
    Fix [NEW]: "arachidonic acid (a 20-carbon polyunsaturated fatty acid released from membrane phospholipids)".
    Kind: biology error. Source: book. Confidence: certain.

11. **Additional A, Axis 3 "Feedback" (p. 1146).** NEW.
    Says now: "In females, feedback switches: estrogen from the developing follicle suppresses FSH/LH until the LH surge at mid-cycle; after ovulation, progesterone from the corpus luteum suppresses both."
    Wrong: incomplete. The "switch" is that high estrogen at mid-cycle turns to positive feedback and causes the LH surge. As written, the surge seems to come from nowhere. Key point Topic 09 already names the LH surge as positive feedback.
    Fix [NEW]: "...estrogen from the developing follicle suppresses FSH/LH until, at mid-cycle, high estrogen switches to positive feedback and triggers the LH surge; after ovulation, progesterone from the corpus luteum suppresses both."
    Kind: unclear/incomplete. Source: book. Confidence: likely.

12. **H, Graded set, Level 2 Q3 answer (p. 1166).** NEW.
    Says now: "It binds receptor tyrosine kinase (RTK) on the cell surface, autophosphorylates, and triggers..." Here "It" is insulin, but the receptor, not insulin, autophosphorylates.
    Fix [NEW]: "It binds a receptor tyrosine kinase (RTK) on the cell surface; the receptor autophosphorylates and triggers the IRS–PI3K–Akt pathway..."
    Kind: biology error (wrong agent). Source: book. Confidence: certain.

13. **H, Graded set, Level 3 Q6 answer (p. 1167).** NEW.
    Says now: "Steroids must enter the nucleus, bind DNA, and synthesize new proteins"
    Wrong: the hormone does not make proteins. Its receptor complex binds DNA and the cell makes the proteins.
    Fix [NEW]: "Steroids must enter the cell, where the hormone–receptor complex binds DNA and the cell makes new proteins → slow onset, durable effect."
    Kind: biology wording. Source: book. Confidence: likely.

14. **Additional C, Hormone 3 (Calcitriol), step 1 (p. 1150).** NEW.
    Says now: "1. <b>Skin/liver:</b> Vitamin D<sub>3</sub> → 25-hydroxyvitamin D (calcidiol)"
    Wrong: the skin makes vitamin D<sub>3</sub>; the 25-hydroxylation is done in the liver only. Practice 3 and the key point say "the liver performs the first hydroxylation".
    Fix [NEW]: "1. <b>Liver:</b> Vitamin D<sub>3</sub> (from the skin or the diet) → 25-hydroxyvitamin D (calcidiol)..."
    Kind: biology error (minor). Source: book. Confidence: likely.

15. **Key point, Additional D first Remember (topic 15, pp. 1152 to 1154).** NEW.
    Says now: "Each step multiplies the signal."
    Wrong: it contradicts D Practice 4 (ii): "each α<sub>s</sub>-GTP activates one adenylyl cyclase molecule".
    Fix [NEW]: "Most steps multiply the signal."
    Kind: overgeneral. Source: ours (key points). Confidence: certain.

16. **Additional D, "The G<sub>q</sub> pathway (for comparison)" (p. 1153).** NEW.
    Says now: "The chapter mentions Ca<sup>2+</sup> as a second messenger; this is the pathway that generates it."
    Fix [NEW]: "...this is the main hormone pathway that generates it." Calcium also enters through membrane channels.
    Kind: overgeneral. Source: book. Confidence: likely.

17. **Additional F, prostaglandin actions (p. 1158).** NEW.
    Says now: "PGF<sub>2α</sub>: bronchoconstriction; in uterus, causes contraction (used to induce labour)."
    Wrong: clinically, PGE<sub>2</sub> (dinoprostone) is the prostaglandin used to induce labour. PGF<sub>2α</sub> analogues are used for postpartum haemorrhage and termination.
    Fix [NEW]: "...in uterus, causes contraction (prostaglandins are used clinically to induce labour)."
    Kind: biology imprecision. Source: book. Confidence: possible.

18. **Topic 01, Exam Relevance (p. 1136).** NEW.
    Says now: "one of the <b>highest-yield chapters for NEET</b>": an unlabelled, bolded superlative. The key points header says it is not given as fact.
    Fix [NEW]: "a <b>high-yield chapter for NEET</b>". This can be combined with flag 2.
    Kind: exam superlative. Source: book. Confidence: likely.

19. **Additional C, "What the Examination Requires" (p. 1150).** NEW.
    D, E and F carry "This part goes beyond NCERT Class 11 Biology; treat it as extension material." C does not, though calcitriol, RANKL, FGF23 and the CKD answer are beyond NCERT Chapter 19. "NEET asks for the three calcium-regulating hormones" overstates NCERT.
    Fix [NEW]: append the same sentence to C: "This part goes beyond NCERT Class 11 Biology; treat it as extension material."
    Kind: exam usefulness. Source: ours (consistency). Confidence: likely.

20. **H, "Two Topics Worth Contrasting" (p. 1169).** NEW (on R2-20 wording).
    Says now: "They share the word “diabetes” and the symptom of thirst". The table beside it shows both also pass large volumes of urine.
    Fix [NEW]: "They share the word “diabetes” and the symptoms of thirst and passing large volumes of urine, but arise from entirely different hormone systems."
    The key point Topic 08 mixup ("share the word diabetes and the symptom of thirst") needs the same change.
    Kind: incomplete. Source: ours. Confidence: likely.

21. **Additional C, Worked Example C.2 (p. 1151).** NEW.
    The book's two tables are set as run-on labelled prose: "Main target organ Bone, kidney, Effect on blood Ca<sup>2+</sup> Raises Ca<sup>2+</sup>". The comma after "kidney" runs into the next label.
    Fix [NEW]: use colons and semicolons in each row of the answer. Example: "<b>PTH:</b> Secreted by: parathyroid chief cells; Stimulus: low plasma Ca<sup>2+</sup>; Main target organ: bone, kidney; Effect on blood Ca<sup>2+</sup>: raises Ca<sup>2+</sup>". Treat Calcitonin and Calcitriol the same way, and the question rows likewise ("Secreted by: ?; ..."). Alternatively use H's " | " convention.
    Kind: layout/clarity. Source: transcription. Confidence: certain.

22. **Topic 10, ex 2 (CUET, match) (p. 1142).** REPEAT (R1-12c; the added stem makes it worse).
    The stem now says "Match each hormone (P to S) with its gland and action (1 to 4)" but then prints the pairs already matched.
    Fix [NEW] q: "Match each hormone with its gland and action. Hormones: P. Aldosterone; Q. Thymosin; R. Calcitonin; S. Glucagon. Gland/action: (1) thyroid C-cells/lowers Ca<sup>2+</sup>; (2) α-cells/raises glucose; (3) adrenal cortex/Na<sup>+</sup>-K<sup>+</sup>; (4) thymus/T-cells." ans unchanged: "P-3, Q-4, R-1, S-2." (recomputed, correct).
    Kind: unclear (self-answering). Source: book. Confidence: certain.

23. **Key point, Topic 06 first Remember (topic 5, p. 1139).** NEW.
    It says the JG cells secrete erythropoietin with no caveat, while the chapter now carries the note "(NCERT credits the JG cells; in physiology textbooks the source is the peritubular interstitial cells of the kidney)". F2 founder decision 3 left this open.
    Fix [NEW], if the chapter note stays: "...in the kidney the juxtaglomerular (JG) cells (as NCERT says) secrete erythropoietin...".
    Kind: consistency. Source: ours. Confidence: certain.

24. **Additional F, Method, Paracrine (p. 1158).** NEW.
    Says now: "hormone acts on neighboring cells within the same tissue". The book's own example is histamine from mast cells acting on blood vessels and nerve endings, which are not the same tissue.
    Fix [NEW]: "a signal acts on nearby cells, without entering the blood."
    Kind: overgeneral. Source: book. Confidence: possible.

25. **Additional D, Step 2 (p. 1153).** NEW.
    Says now: "The receptor is constitutively associated with a G-protein". In the standard model taught at this level, the G-protein binds the receptor after the hormone does.
    Fix [NEW]: "The receptor is coupled to a G-protein, which is a heterotrimer of α, β and γ subunits."
    Kind: biology imprecision. Source: book. Confidence: possible.

## Earlier flags I judge applied wrongly or not applied
- R2-8 (A-R trap): applied so that the sentence now contradicts itself (flag 1).
- R1-11 (exam count): the number was changed and still credited to the book (flag 2).
- R2 optional table-head gloss: added without fixing the Thyroid row (flag 5).
- R1-2 / R2-13 (GnRH `<br>`): reported fixed in new-text-F2 item 6, still present (flag 6).
- R2-6 (CKD parathyroids): applied with a doubled "secondary hyperparathyroidism" (flag 7).
- R1-13 / R2-25 (tropic to trophic in Topic 09): the A sentence quoting "tropic" was not updated (flag 8).
- R1-12c (CUET match stem): the added stem makes the self-answering item read as a task (flag 22).
- R2-20: the DI/DM wording still leaves out the shared urine symptom (flag 20).

All other R1/R2 fixes checked and correct as applied: thymus position (matches current NCERT), polycythemia removed, corpus luteum, Topic 07 catecholamines plus insulin RTK note, erythropoietin note, "most command hormones", inner two cortex layers, TRH pGlu-His-Pro-NH<sub>2</sub>, A Practice 3 and 5, D Practice 4 (iii) (four cAMP per PKA, correct), E "What the chapter states", E Practice 4 question, E integrated sentence, B Practice 3 and 5, C.1, F aspirin, F.1, H glucagon option (c), H traps and second messengers, H Q2, Q4, Q9 and Q12. GnRH "about every 1 to 2 hours" is defensible (often given as 60 to 120 minutes) but departs from the book's 60 to 90; it is in F2 for sign-off.

## Counts verified
- Topics: T01 2 parts; T02 4; T03 2; T04 4; T05 2; T06 4; T07 4; T08 2 (table 15 rows x 4, every cell matches p. 1140 to 1141 image/text apart from "none" and the head gloss); T09 4; T10 2 parts, 4 ex; T11 2 parts, 5 practice; T12 2 snapshots, 9 + 3 = 12 rows (book 12 bullets). A 9 parts, 2 ex, 5 practice. B to F: 2 ex and 5 practice each. G 1 table, 6 x 3. H 5 parts, 4 ex, 1 proc (3 steps), 3 tables (8 rows summing to 100 %, 9 traps, 4 DI/DM rows), 12 practice items.
- Keys recomputed: T10 ex 2 P-3, Q-4, R-1, S-2; T10 ex 4 (1); H glycogenesis (b); glucagon (a); calcitonin A-R (a); match (d) A–II B–III C–IV D–I, unique, and each elimination step correct; Q1 (c), Q2 (b), Q3 (c), Q4 (a), Q5 (b), Q6 (a), Q7 (b), Q8 (a) A–III B–IV C–I D–II (unique), Q9 (a), Q10 (c), Q11 (c), Q12 (a). All correct.
- Numbers: TRH 3, CRH 41, ACTH 39, GnRH 10 (sequence letter by letter), PTH 84, calcitonin 32, angiotensin I 10 → II 8 (ACE removes 2: 10 − 2 = 8), four cAMP per PKA, cortisol 30 to 60 min, glycogen 12 to 24 h, distribution shares 25 + 15 + 12 + 10 + 10 + 10 + 8 + 10 = 100 %. No fraction or arithmetic otherwise.
- Additional-topic introductions vs topics as built: shared introduction ("cannot fully develop") true; A true except flag 8; B (no cascade steps) true; C (no vitamin D) true; D (no G-protein; Ca<sup>2+</sup> mentioned) true, though Topic 07 now says "peptide/protein hormones and catecholamines" where D says "peptide and amine hormones" (acceptable); E (new wording) true; F true; G not applicable.
- Key points: 59 points (Topics 01 to 12: 43; Additional A to H: 16). Each one checked against the chapter text; issues are only flags 3, 15, 20 and 23.
- Figures: none. The diagram file is the empty stub (`DIAGRAMS_BIOLOGY_11_19 = []`), which is correct. pdfimages lists no raster image on pp. 1135 to 1170. PyMuPDF vector drawings on every page are header and footer rules, box frames and table rules. Page images viewed: p. 1141 (table) and p. 1148 (RAAS cascade with brace: typeset text, correctly written as text with arrows). Pages judged to hold no drawing: 1136 to 1170.

## Could not check
- Rendering on device (iOS or Android): U+22A3 ⊣, ⇄, the arrow chains, the Topic 12 snapshot rows with empty `note`, and the "|" column lines in H. No simulator or emulator was in my scope.
- NCERT PDF not available here: the thymus position ("between lungs behind sternum on the ventral side of aorta"), EPO from JG cells, and secretin acting on the exocrine pancreas are from memory of the current NCERT (confidence likely).
- Real NEET question counts per year (flag 2): not verified, so I propose no number of our own.
- Page images were viewed only for pp. 1141 and 1148. The other pages' tables were compared by text layer and word diff, which showed no cell differences.

## Summary
25 flags: 22 NEW (6 of them introduced by how earlier fixes were applied) and 3 REPEAT (6, 8, 22). 4 serious (1 A-R rule contradicts itself; 2 exam count misattributed to the book; 3 "none" disorder cells contradict Additional E; 4 PKA wrongly said to phosphorylate glycogen phosphorylase directly). The transcription is otherwise faithful word for word, and the chapter has no figures to draw.
