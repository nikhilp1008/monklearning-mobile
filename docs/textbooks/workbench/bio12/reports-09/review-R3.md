# Biology 12 Chapter 9: expert review R3 (third, independent, whole chapter)

Share: the WHOLE chapter as it now stands, after both fixers.
`content/textbooks/bio-12-09/topics-1-3.ts`, `topic-4-extras-a-b.ts`, `extras-c-d.ts`;
`lib/diagrams/biology-12-09.ts`; `lib/revise/keypoints-biology-12-09.ts`.
Book: `biology-work/books/bio12.pdf`, pp. 479-533 (page-tagged dump for the word diff; page
images rendered for pp. 490, 492, 498, 500, 504, 508, 512, 521, 529, 530).
Method: a word-level diff of every app string (all 261 blocks, 8 topics) against the book text of
pp. 480-533 was run first and every difference read; then the numbers, keys, crosses and
sequences were recomputed; then the figures were compared with the page images; then the
Additional-topic introductions were checked against the topics as built; then every item in
`new-text-F1.md` and `new-text-F2.md` was located in the files and judged on its own.
Only AFTER that pass were `review-R1.md` and `review-R2.md` read, and each flag below marked
NEW or REPEAT. **Nothing in the repo was edited. No tsc, jest or git was run.**
`[NEW]` marks wording proposed by this review.

---

## FLAGS (most serious first)

### 1. The fixer's own correction in Additional topic A is false: Topic 04 also names the Ti plasmid and retroviruses
- **Where:** `topic-4-extras-a-b.ts`, Additional topic A (index 4), Introduction, paragraph 2
  (block 4.2); book p. 512. Added by F2 (new-text-F2, "A Introduction para 2 [NEW] (2b)").
- **Says now:** "This section develops that additional tier (the Ti plasmid and retroviral vectors
  are **only named in Topic 02**; lambda, cosmid, BAC, YAC and adenoviral vectors are new)."
- **What is wrong:** while F2 was writing that line, F1 was adding the Ti plasmid and retroviruses
  to Topic 04 as well. Topic 04, 4.3.4 (block 3.19) now reads "...or a disarmed Ti plasmid or
  retrovirus carrying the DNA in", and Topic 04's cheat sheet row "Competence" is unchanged only
  because it belongs to Topic 02. So the chapter now tells the student that these two appear
  "only" in Topic 02 one page after they appear again in Topic 04. This is exactly the class of
  claim (a "the chapter never covers / only mentions X" sentence in an Additional-topic
  introduction) that R2 flag 2 was raised to remove, reintroduced by the fix itself.
- **Fix [NEW]:** "This section develops that additional tier (the Ti plasmid and retroviral vectors
  are named in Topics 02 and 04 without being developed; lambda, cosmid, BAC, YAC and adenoviral
  vectors are new)."
- **Kind:** unclear / misleading claim about the chapter. **Source:** ours (fixer). **Confidence:** certain.
- **NEW** (the underlying claim is R2 flag 2b, but the applied wording is wrong in a new way).

### 2. Additional topic B now tells a CBSE student two opposite things in consecutive paragraphs
- **Where:** `topic-4-extras-a-b.ts`, Additional topic B (index 5), Method, blocks 5.4 and 5.5;
  book p. 516. Block 5.5 added by F2 (new-text-F2, "B new paragraph ... (9)").
- **Says now:** 5.4 "Many students lose marks by calling screening 'selection.' The distinction
  matters: antibiotic resistance is selection; *lacZ* disruption is screening." Immediately
  followed by 5.5 "NCERT calls insertional inactivation and the chromogenic (blue-white) test
  selectable markers for recombinants; in this strict sense they are screening steps that follow
  the antibiotic selection. Use NCERT's wording in a CBSE answer."
- **What is wrong:** the reader is told, in one breath, that calling a screen "selection" loses
  marks and that NCERT calls it a selectable marker and NCERT's wording should be used. The
  caveat was added without softening the sentence it contradicts. R2 flag 9 asked for the caveat;
  it did not ask for the "loses marks" sentence to stay as printed.
- **Fix [NEW]:** replace both paragraphs with one: "Keep the two ideas apart in your own reasoning:
  the antibiotic plate is a selection (non-transformants die), while blue-white colour or
  insertional inactivation is a test applied to the colonies that survived. NCERT calls the
  chromogenic (blue-white) test and insertional inactivation **selectable markers for
  recombinants**, so in a CBSE answer use NCERT's words and keep the mechanism straight."
- **Kind:** unclear / misleading. **Source:** ours (fixer). **Confidence:** certain.
- **NEW.**

### 3. The neem revocation year added in Additional topic C is wrong as stated
- **Where:** `extras-c-d.ts`, Additional topic C (index 6), Worked example C.4 steps (block 6.17);
  book p. 522. Added by F2 (new-text-F2, C flag 10; F2's own report says "date from the
  reviewer's memory: founder to verify").
- **Says now:** "...a US company and the US government held a European patent on a neem-based
  fungicide, which Indian groups challenged on grounds of prior traditional knowledge (**it was
  revoked in 2005**)."
- **What is wrong:** the European Patent Office revoked that patent in **2000** after the
  opposition; 2005 is the year the revocation was upheld on appeal. Printing 2005 alone as the
  revocation year teaches a wrong date, and the chapter elsewhere carries no exam years at all
  (DECISIONS-B12), so a bare year here is also out of house style.
- **Fix [NEW]:** "...which Indian groups challenged on grounds of prior traditional knowledge; the
  patent was revoked and the revocation upheld on appeal." (No year.)
- **Kind:** attribution / number. **Source:** ours (fixer). **Confidence:** likely (the 2000/2005
  sequence is from memory, but the single-date form is wrong either way).
- **NEW.**

### 4. Two printed book values were replaced from a reviewer's memory
- **Where:**
  (a) Additional topic B, Method "Electroporation" (block 5.7), Worked example B.2 and Practice 2
      (blocks 5.14, 5.19); book pp. 516, 519. Book prints **12-15 kV/cm**; the app now prints
      **"about 12-18 kV cm<sup>-1</sup>"** in all three places (F2, flag 7; F2's founder decision 3).
  (b) Additional topic A, vector table row YAC (block 4.5), Example A.1, Practice 1 and 6
      (blocks 4.12, 4.17); book p. 512 prints **500 kb - 1.5 Mb**; the app now prints **"about
      200 kb - 2 Mb"**, "typical YACs carry about 0.2-2 Mb", "up to about 2 Mb" (F2, flag 18).
- **What is wrong:** both are defensible as biology, but the rule for this job is that a printed
  value is kept and the doubt is written beside it, not that the value is overwritten from
  recollection. Overwriting also breaks the chapter against its own source if the founder later
  checks a page. (b) additionally changes the only number that made Example A.1's reasoning work
  on the page, so the book's internal arithmetic can no longer be audited.
- **Fix [NEW]:** restore the printed values and qualify once each.
  (a) "Typical conditions for <i>E. coli</i>: field strength about 12-15 kV cm<sup>-1</sup> as this
      chapter gives it (published protocols run to about 18 kV cm<sup>-1</sup>), a pulse lasting a
      few milliseconds, cells in a low-ionic-strength buffer at 0-4 °C." Practice 2: "Electroporation
      (for <i>E. coli</i>, about 12-15 kV cm<sup>-1</sup> as given here)."
  (b) Table cell: "500 kb - 1.5 Mb (published YACs span about 0.2-2 Mb)". Example A.1: "A YAC could
      also hold it, but is less stable." Practice 1: "...insert size 500 kb-1.5 Mb as given here."
- **Kind:** number / fidelity to the source. **Source:** ours (fixer). **Confidence:** certain that
  the printed values were replaced; the preferred handling is the founder's call.
- **REPEAT of R2 flags 7 and 18, applied in a way I believe is wrong.**

### 5. The new pBR322 "schematic map" sentence is incomplete and can mislead
- **Where:** `topics-1-3.ts`, Topic 02 (index 1), Key tools, pBR322 paragraph (block 1.17); book
  p. 489. Added by F1 (new-text-F1, Topic 02).
- **Says now:** "The map is schematic: EcoRI and PvuII lie in neither resistance gene, so insertion
  there does not inactivate either marker."
- **What is wrong:** it stops one step short in two ways. On the book's own Figure 9.2 (p. 490)
  PvuII sits on the **rop** arc, so an insert there does disrupt something (copy-number control),
  which the sentence's "does not inactivate either marker" invites a student to forget. And the
  two sites the sentence does not name, ClaI and HindIII, lie immediately next to <i>tet</i><sup>R</sup>
  (in its promoter region on the real plasmid), so the schematic map must not be used to predict
  their effect either. As written, a student may conclude that any site outside the two arcs is
  "free".
- **Fix [NEW]:** "The map is schematic. Of the sites drawn, only PstI and PvuI (in
  <i>amp</i><sup>R</sup>) and BamHI and SalI (in <i>tet</i><sup>R</sup>) are used for insertional
  inactivation in this chapter. EcoRI lies in neither resistance gene; PvuII is drawn on the
  <i>rop</i> arc, and ClaI and HindIII sit just beside <i>tet</i><sup>R</sup>, so this drawing should
  not be used to predict what an insert at those three sites would switch off."
- **Kind:** unclear / incomplete biology. **Source:** ours (fixer). **Confidence:** likely.
- **NEW** (R1 flag 15 recorded the real-plasmid facts in its report but no fix was carried into the
  chapter except the one sentence above).

### 6. Nested brackets inside MCQ nudges: the frequency label is applied mechanically
- **Where:** `topics-1-3.ts`, Topic 02 MCQ 3 option (c) nudge (block 1.45); the same pattern in
  Topic 04 MCQ 3 option (d) nudge (block 3.32). Applied by F1 ("labels added to ... the MCQ 3
  nudge").
- **Says now:** "(c) is false: restriction endonucleases cut both strands (a classic NEET distractor
  (the book's estimate from past papers, not official figures))." - a bracket inside a bracket,
  closing "))".
- **What is wrong:** the label is a disclaimer about the book's exam-frequency estimates; dropping
  it inside a one-line nudge gives a doubled bracket and, on a phone, a nudge longer than the
  option it explains. The chapter now carries this clause about twenty times. Nothing is factually
  wrong; the reading is.
- **Fix [NEW]:** Topic 02 MCQ 3 (c): "<b>(c)</b> is false: restriction endonucleases cut both
  strands. This is a recurring distractor." Topic 04 MCQ 3 (d): "<b>(d)</b> PCR amplifies DNA, not
  protein: a frequent NEET confusion." Keep the full label in each topic's Exam Relevance block and
  in the pitfalls list, where it was already carried, and drop it from option nudges.
- **Kind:** unclear / format. **Source:** ours (fixer). **Confidence:** certain.
- **NEW.**

### 7. Figure 9.8: the pill and the caption now disagree about the hedge
- **Where:** `lib/diagrams/biology-12-09.ts`, `fig98` (drawn p. 508). F1 changed the pill
  (new-text-F1, "Figure 9.8") and, by its own founder decision 4, deliberately left the caption.
- **Says now:** pill "~30 cycles: **up to about** a billion copies (2<sup>30</sup> ≈ 10<sup>9</sup>)";
  caption "About 30 cycles give **roughly** a billion copies of the target."
- **What is wrong:** the same figure now hedges in the drawing and not in its caption, and the
  figure's own `check` string was rewritten to match the pill, so the test no longer guards the
  caption's claim. The chapter text (Topic 04, block 3.9 and the cheat sheet) hedges with "in the
  ideal case", which is the wording to match.
- **Fix [NEW]:** caption: "...About 30 cycles give roughly a billion copies of the target in the
  ideal case." Pill: "~30 cycles: about a billion copies in the ideal case (2<sup>30</sup> ≈
  10<sup>9</sup>)."
- **Kind:** figure / consistency. **Source:** ours (fixer). **Confidence:** certain.
- **NEW.**

### 8. "integrates permanently" survives in the first sentence of the retroviral paragraph
- **Where:** `topic-4-extras-a-b.ts`, Additional topic A, Method "Retroviral vector cycle"
  (block 4.9); book p. 513.
- **Says now:** "This DNA **integrates permanently** into the host genome (provirus)." - then, three
  sentences later, the F2 wording "...where it is copied with the chromosome (the provirus can
  sometimes be silenced, and a random insertion can disrupt a host gene)."
- **What is wrong:** R2 flag 6 was raised against "permanently"; the hedge was added at the end of
  the paragraph and the word was left standing at its start, so the paragraph asserts and then
  withdraws the same claim.
- **Fix [NEW]:** "This DNA integrates into the host genome as a **provirus** and is copied with the
  chromosome at every division."
- **Kind:** biology (overgeneral). **Source:** book, left by the fix. **Confidence:** certain.
- **REPEAT (R2 flag 6, fixed only in part).**

### 9. Topic 02 Practice 5 answer: clumsy new sentence, and the circular vector is not stated
- **Where:** `topics-1-3.ts`, Topic 02 Practice exercises, item 5 answer (block 1.41); book p. 494.
  Replacement written by F1 (R1 flag 11).
- **Says now:** "The enzyme will **cut** the vector at both sites and **cut** it into two fragments,
  so it no longer stays one intact carrier; a usable vector needs a single recognition site for
  that enzyme."
- **What is wrong:** "cut ... and cut" in one clause; and "two fragments" is the right count only
  because the vector is circular (a linear one cut at two sites gives three), which the answer
  never says. The fact is correct; a NEET student asked to justify the count cannot.
- **Fix [NEW]:** "A circular vector cut at two sites falls into two fragments (n cuts on a circle
  give n pieces), so it no longer stays one intact carrier and the gene cannot be cloned on it; a
  usable vector needs a single recognition site for the enzyme you intend to use."
- **Kind:** unclear / number. **Source:** ours (fixer). **Confidence:** certain.
- **NEW.**

### 10. The NCERT selection-versus-screening caveat is now printed four times
- **Where:** Topic 02 block 1.29; Additional topic B block 5.5; Additional topic D "Values and
  Distinctions", item 2 (block 7.31); key points, Additional B point 1 `why`.
- **What is wrong:** four near-identical parentheses on one point inside one chapter. One of the
  four (B) also contradicts its own neighbour (flag 2). Nothing is false; it reads as a tic, and
  a student meeting it the fourth time stops reading the brackets, which is where the other real
  qualifications live.
- **Fix [NEW]:** keep it in Topic 02 (where insertional inactivation is taught) and in D Values
  item 2 (where both marker systems are compared); replace it in B by the merged paragraph of
  flag 2; shorten the key point's `why` to "Antibiotic resistance is selection; <i>lacZ</i>
  disruption is screening (NCERT calls both selectable markers)."
- **Kind:** unclear / repetition. **Source:** ours (fixers, independently). **Confidence:** certain.
- **NEW.**

### 11. Additional topic D, graded Q1: the same fact is now stated twice in one answer
- **Where:** `extras-c-d.ts`, Additional topic D (index 7), graded practice Q1 answer (block 7.29);
  book p. 531. Appended by F2 (R2 flag 17).
- **Says now:** "(b): Hind II (Hamilton Smith, 1970) was the first type II restriction endonuclease
  characterized. EcoRI is the enzyme most often illustrated... **NCERT calls Hind II the first
  restriction endonuclease; strictly it is the first type II enzyme characterised (Smith, 1970;
  Nobel Prize 1978 with Arber and Nathans).**"
- **What is wrong:** the appended sentence repeats "first type II enzyme characterised (Smith,
  1970)", already the answer's opening clause. The Nobel detail is new and worth keeping.
- **Fix [NEW]:** "(b): Hind II was the first type II restriction endonuclease characterised
  (Hamilton Smith, 1970; Nobel Prize 1978 with Arber and Nathans). NCERT calls it simply the first
  restriction endonuclease, so answer "Hind II". EcoRI is the enzyme most often illustrated, which
  is why students confuse "famous" with "first"."
- **Kind:** unclear / repetition. **Source:** ours (fixer). **Confidence:** certain.
- **NEW.**

### 12. Topic 01 cheat-sheet row now carries a publication-year aside
- **Where:** `topics-1-3.ts`, Topic 01 Cheat sheet, row 4 (block 0.42); book p. 486. Added by F1.
- **Says now:** "First rDNA, Cohen & Boyer (1972; the paper appeared in 1973)".
- **What is wrong:** the cheat sheet is the one-glance recall card; the same qualification is
  already in the milestones bullet (block 0.10), which is where a student who wants it will look.
  In a snapshot row it invites exactly the confusion it was meant to prevent ("so which year do I
  write?").
- **Fix [NEW]:** cheat-sheet row back to "First rDNA, Cohen & Boyer (1972)"; keep the bullet's
  "(NCERT gives 1972; the paper appeared in 1973.)" unchanged.
- **Kind:** unclear. **Source:** ours (fixer). **Confidence:** possible (a style call).
- **NEW.**

### 13. Additional topic A introduction describes three of the four Additional topics
- **Where:** `topic-4-extras-a-b.ts`, Additional topic A, Introduction paragraph 1 (block 4.1);
  book p. 512 lines 1-11 (the shared introduction).
- **Says now:** "These Additional topics extend Chapter 9 by covering **five examinable layers**..."
  and lists five layers, all of which live in A, B and C.
- **What is wrong:** there are four Additional topics; D ("What NEET Actually Asks") is covered by
  none of the five layers, so the introduction under-describes the set it introduces. This is the
  book's own structure (the shared introduction sits before Addendum A), not a transcription slip,
  and the sentence is now ours, so it can be completed.
- **Fix [NEW]:** append to the paragraph: "A last Additional topic then sets out what NEET actually
  asks from this chapter and how to answer each question shape."
- **Kind:** unclear / claim about the chapter. **Source:** book, carried into our wording.
  **Confidence:** certain that D is not described; the fix is a style call.
- **NEW.**

### 14. Diagram self-check for Figure 9.6 asserts a size the figure does not show
- **Where:** `lib/diagrams/biology-12-09.ts`, `check96`, first check string: "The gel shows three
  ordinary bands and the target fragment lowest (the farthest run, **hence the smallest**)".
- **What is wrong:** the drawing (and the book's p. 500) has no electrodes, no wells and no
  direction of run, so "lowest = farthest = smallest" is an inference, not something the figure
  states; Figure 9.5 runs left to right, Figure 9.6 top to bottom. The check text is internal (a
  test description, not student-visible), so this is low priority, but the claim should not be
  recorded as verified by the figure.
- **Fix [NEW]:** check string: "The gel shows three ordinary bands with the target fragment lowest,
  as the book draws it (the book gives no sizes and no direction of run)."
- **Kind:** figure / overclaim in our own check. **Source:** ours. **Confidence:** certain.
- **NEW.**

---

## Verified clean (checked this pass, no flag)

- **Assertion-Reason fourth option.** All five A-R items (Topic 01 worked Q2, Topic 02 worked Q4,
  Topic 03 worked Q4, Topic 04 worked Q4, Additional D archetype 3 representative, plus D graded
  Q8) print "(d) A is false, R is true". No "both A and R are false" anywhere in the chapter.
  Conforms to the house rule; R2 flag 20's ruling has held.
- **Exam years.** Zero exam years anywhere in the chapter. The book's Evidence column (p. 524,
  AIPMT 2015, NEET 2016-2021) is replaced by "Recent AIPMT and NEET papers" with the note that the
  years are not given. The only years left are historical (1972/1973, 1978, 1990, 2001, 2002, 1970)
  and the 2005 of flag 3.
- **The three Additional-topic introductions against the topics as built.** Checked by searching
  Topics 01-04 for every term each introduction claims is absent: "blue-white" 0 hits, "lacZ"
  0, "chromogenic" 0, "colony hybridisation" 0, "gene therapy" 0, "fingerprint" 0, "lambda" 0,
  "adenoviral" 0 - so A's and B's new lists and C's introduction are true. The single exception is
  flag 1 ("only named in Topic 02").
- **Transcription.** The word diff of all 261 blocks against pp. 480-533 shows no missing,
  duplicated or misplaced sentence, no table cell wrong, no answer attached to the wrong item. Every
  difference is either a declared liberty (em dashes, topic numbering, "Additional topic", options
  in letters, run-in lists set as lists, no exam years, gene symbols italic, primes and no-break
  spaces) or an item listed in new-text-F1/F2.

## Counts verified

- Blocks read: 261 across 8 topics (Topics 01-04 and Additional A-D; indexes 0-7 correct, last
  Additional letter D correct).
- Answer keys recomputed independently: **43** - 16 MCQ keys (4 per topic, Topics 01-04:
  b,b,b,a / b,b,b,b / b,b,c,c / b,c,c,b; stored `correct` 1,1,1,0 / 1,1,1,1 / 1,1,2,2 / 1,2,2,1),
  11 worked-question keys in Topics 01-04, 6 D representative keys, 10 D graded keys. All correct
  and, after the Topic 01 Q3 rewrite, each has exactly one defensible answer; D graded Q5 keeps a
  defensible alternative (b), already noted in the chapter.
- Match-the-column keys recomputed: 4 (Topic 02 A-3 B-1 C-4 D-2; Topic 03 A-2 B-1 C-4 D-3;
  Topic 04 A-3 B-1 C-2; D representative A-III B-I C-II D-IV). All unique and correct.
- Arithmetic and sequences recomputed: 2^30 = 1,073,741,824 ≈ 1.07 x 10^9 (pill, cheat sheet,
  Figure 9.8 check); B.5 restriction map 3.0 + 2.5 + 0.5 = 6.0 kb, empty vector one 3.0 kb band;
  circular plasmid cut n times gives n fragments (Topic 02 Practice 5, see flag 9); 7 of 10 bands =
  70 % (C Practice 6); EcoRI 5'-AATT against BamHI 5'-GATC incompatible (D Q9); Figure 9.3
  sequences recut by hand (G^AATTC top, CTTAA^G bottom, 4-base stagger, AATT/TTAA overhangs, four
  nicks, ligated product GAATTC...GAATTC with its exact complement).
- Temperatures and operating values checked against pp. 504-508: 0/42/0 °C; ~94, ~40-60, ~72 °C;
  bioreactor ~100-1000 L; all with the no-break space before °C.

## Figures checked (8 of 8)

Compared against the page images of pp. **490, 492 (two figures), 498, 500, 508** and, for
**pp. 483 and 506**, against the page text plus the drawing code and its own checks (I did not
render the SVGs; see "Could not check").

| Figure | Page | Verdict |
|---|---|---|
| 9.1 three steps | 483 | Three boxes, the book's words, the closing note; column re-lay allowed. OK. |
| 9.2 pBR322 | 490 | Ring, 4361 bp, four genes with the book's descriptions, eight sites, the two notes. Site angles match the page within a few degrees; PstI/PvuI inside <i>amp</i><sup>R</sup>, BamHI/SalI inside <i>tet</i><sup>R</sup>, PvuII on the <i>rop</i> arc as the book draws it. OK; see flag 5 for the text beside it. |
| 9.3 cut, sticky ends, ligation | 492 | Three panels, every sequence and piece name as printed; recut by hand, correct. OK. |
| 9.4 heat shock | 492 | 0/42/0 °C, the three captions, three pores, the legend, CaCl<sub>2</sub> subscript. OK. |
| 9.5 gel | 498 | Wells at the cathode (-) left, anode (+) right, 3/4/2 bands in gel and UV panel, arrow rightwards, "smaller travel farthest". OK. |
| 9.6 elution | 500 | Three grey bands with the target lowest, dashed cut lines, slice, elution box, tube, "ready for ligation". Matches. See flag 14 (the check string, not the drawing). |
| 9.7 workflow | 506 | Nine steps in the book's serpentine, the colour key kept as words. OK. |
| 9.8 PCR cycle | 508 | A/B/C with ~94, ~40-60, ~72 °C, two primers on opposite strands, Taq at the growing end, the repeat loop, the 2^30 pill. See flag 7 (pill against caption). |

## Key points

All 30 points read against the chapter text and the pages cited above each. Questions, answers and
`why` lines are correct and, where the book is loose, the points are true without repeating the
loose claim (the file's header comment sets this out and matches what the points actually say).
Two notes: the Additional B point 1 `why` carries the fourth copy of the NCERT caveat (flag 10);
the file header's description of the chapter's gene-symbol italics is now accurate, since F1 and F2
italicised <i>amp</i>, <i>tet</i>, <i>ori</i>, <i>rop</i>, <i>lacZ</i> and <i>vir</i> throughout -
but the file-top comment of `topic-4-extras-a-b.ts` still says those symbols are upright (F2's own
open item 6; it is a code comment, not student-visible, and should be corrected before the build).

## Could not check

- The rendered SVGs of the eight figures (no jest run in this session, per the task). I compared the
  drawing code, its coordinates, its sequences and its own checks with the page images; I did not
  see the phone render, the fonts, label collisions, or the grey-against-dark distinction in Figure
  9.3 that the diagram agent explicitly asked to have looked at on a device. **This is the open item
  that the Android/phone pass must cover for this chapter.**
- Facts outside the book: the neem EPO dates, the real pBR322 coordinates, published electroporation
  field strengths, YAC size ranges and the Hind II history are from my own knowledge, not from a
  source read in this session. Confidences are stated per flag.
- Exam-frequency claims cannot be verified by anyone; they are labelled throughout.
- Whether the shelf name "Biotechnology: Principles and Processes" matches the live chapter list
  (outside this share; it is on the founder's list).

## Rulings on the earlier reviews

- **R1 flags 1, 2, 3, 9, 10, 11, 17, 18 and R2 flags 2a, 2c, 3, 4, 5, 8, 9, 11, 12, 13, 14, 16,
  19a-d, 19g-j:** agreed, and the applied wording is correct as it now stands in the files.
- **R1 flag 4 / R2 flag 1 (same-enzyme rule):** agreed; the qualifier "(or enzymes that leave
  compatible ends)" is correctly placed in all ten locations and nowhere contradicts the chapter's
  teaching rule. Checked each.
- **R1 flag 5 / R2 flag 17 (Hind II "first"):** agreed; the NCERT idiom is kept with the type II
  qualifier. See flag 11 for the duplication in D Q1.
- **R1 flag 7 (gel "only/strictly/sole"):** agreed; all four places now read "mainly/main", and the
  added parenthesis about gel concentration, voltage and DNA shape is correct.
- **R1 flag 8 / R2 flag 19j (exam superlatives):** agreed in substance, but the label has been
  applied too mechanically - see flag 6.
- **R1 flag 12 / R2 flag 15 (gene-symbol italics):** agreed; italics are now consistent across
  topics, figures and key points. The stale file-top comment noted above is the only residue.
- **R1 flag 14 (heat shock "thought to open transient pores"):** agreed; applied in the text, and
  the Figure 9.4 caption correctly left as the book prints it (a caption), as F1's founder decision 4
  records.
- **R1 flag 16 / R2 flag 12, 18, 20:** agreed. R2 flag 20's A-R ruling verified clean (above).
- **Applied in a way I believe is wrong:** R2 flag 7 and R2 flag 18 (printed values overwritten from
  memory - flag 4 above); R2 flag 2b (the replacement is itself false - flag 1 above); R2 flag 9
  (the caveat added without softening the sentence it contradicts - flag 2 above); R2 flag 6 (fixed
  in part only - flag 8 above); R2 flag 10 (a remembered year printed as fact - flag 3 above).

## Overall judgement

As it now stands the chapter is accurate and the transcription is faithful: no sentence is missing
or misplaced, every number, cross, sequence and marked key recomputes, the figures agree with their
pages, and the two earlier reviews caught the book's substantive errors, all of which have been
repaired. What this third pass adds is almost entirely about the repairs themselves: two of them
state something that is no longer true of the chapter (the "only named in Topic 02" parenthesis and
the contradiction inside Additional topic B), two replace a printed book value with a remembered
one, one prints a wrong year as fact, and several are redundant or awkwardly bracketed. None of
these would cost a student a mark on the facts; three of them (flags 1, 2, 3) would teach something
wrong or confusing and should be settled before the founder's sign-off. Nothing here blocks the
chapter on its biology.

---

**Summary: 14 flags; 11 NEW, 1 REPEAT, 2 REPEAT-applied-wrongly; 4 serious (flags 1-4).**
