# Biology 11 Chapter 17: writer 3 (Additional C to G, pp. 1053 to 1073)

File: content/textbooks/bio-11-17/extras-c-g.ts (TOPICS, 5 topics, C to G). Checks: eslint clean; book-rules passes; book-chapters failures are not mine: (1) topic letters A, B missing (writer 2's stub), (2) fig ids 17.1 to 17.3 undrawn (diagram agent). No fig ids in my file.

## Boundaries (confirmed on page images)
- C opens mid-p. 1053 after Addendum B's practice answers (the first 15 lines of p. 1053 are B's, writer 2); ends p. 1057 (answers).
- D p. 1057 to p. 1060 (answers end mid-p. 1060); E p. 1060 to p. 1063 (answers end top p. 1063); F "Practice Answer Key" p. 1063 to p. 1065 (mid-page); G "Addendum P" p. 1065 to p. 1073 (ends with Q12's answer). p. 1074 not touched.

## Counts
- C: 4 parts (Introduction, Method, Worked examples, Practice); 2 tables, 2 examples, 6 practice items.
- D: 4 parts; 2 tables, 2 examples, 6 practice.
- E: 4 parts; 4 pattern paragraphs, 2 examples, 5 practice.
- F: 5 parts (one per Additional topic A to E), each a numbered `proc` of the printed answers (5, 6, 6, 6, 5 = 28 answers). The key prints answers only (no questions), so a `proc` keeps them numbered without inventing question text.
- G: 4 parts (The Distribution, The Recurring Archetypes, The Traps, A Graded Practice Set); 1 table, 5 worked `ex` (tag "NEET pattern"; the 5th "NEET pattern, text version of a labelled-limb question"), 1 `mistakes` list of 9 traps, 12 graded practice items. No pro-tips/cheat sheet in this part.

## Figures
None seen on pp. 1053 to 1073 (page images read for 1053 to 1062 and 1065 to 1069; the text pages 1063, 1064, 1070 to 1073 read as text/tables; `pdfimages -list` on 1053 to 1073 lists no raster image). Only tables and rules. Judged: no drawing.

## Exceptions to word for word
- Em dashes (all) replaced by colons, commas or brackets, sense unchanged. Titles: "Practice Answer Key — Full Solutions" -> "Practice Answer Key: Full Solutions"; headings "Ossification — two pathways." etc. -> colon. Zone list and bullet lists written as `<br>` lines.
- Headings "Addendum A" to "E" in the key -> "Additional topic A" to "E" (part titles, and the `proc` title repeats the part title). "Practice — Addendum C/D/E" -> part "Practice". "Addendum P" -> title "What NEET Actually Asks".
- p. 1065 "four sub-topics" -> "four topics"; table head "Sub-topic" -> "Topic".
- "Example C.1 — [NEET] ..." headings: tag = bracket, heading text kept as the bold question, "Solution." kept as bold lead of the first step. Examples with no printed answer line: ans ''. E.2's table written as labelled rows (Structure affected, Typical cause, Common sites, Signs), each "Sprain: ...; Strain: ...".
- Practice items in C, D, E: "— Evaluate A, R, ..." -> dash dropped (the dash was a separator). No standard four options added to these evaluate-style A-R items (the question asks to evaluate, not choose); answer text says "A true, R true, R explains A".
- Graded set: "Q1 — Easy" -> bold "Q1: Easy"; "Answer: (b) — ..." -> the answer field starts "(b): ..." (label dropped, in the Answer slot). Worked archetype examples: "Answer: (c)." -> `ans` "(c)", explanation in the step.
- Assertion-reason fourth option (new wording, marked in text): p. 1067 "(d) both false" -> "(d) A false R true" with a bracketed note; Q10 option (d) "Both A and R are false" -> "A is false but R is true" with a bracketed note. Answer keys unchanged (answer (a)).
- New nuance (marked "[Note, new wording: ...]") in E practice 5 answer (p. 1063): sclerostin claim (see errors).
- Exam-share labels added "(the book's estimate from past papers, not official figures)": p. 1065 "roughly from most to least frequently tested"; p. 1066 "among the most frequently repeated items"; p. 1067 "tests every year" (Archetype 2); p. 1067 "most common lactic-acid A-R" (Archetype 3); p. 1068 Traps lead "students fall for them every year"; p. 1069 traps 1 "Every NEET cycle tests", 3 "single most-repeatable error", 5 "three joints students most misclassify", 6 "routinely". No exam years occur on these pages.
- Option letters (a) to (d) kept (this part prints letters). "Amoeba" and "Paramecium" italic (genus alone); the book's italic emphasis on "detach" dropped. "9–11 mg/dL" with a no-break space.

## False "the chapter never covers X" intros
- C (p. 1053): "two topics remain entirely outside its scope" is half false. Topic 03 (p. 1035) already gives the synovial cavity and fluid, articular (hyaline) cartilage, hyaline/elastic/fibro cartilage, and says growth-region cartilage "ossifies after puberty". Only the two ossification pathways and epiphyseal plate zones are new. Replacement: "the chapter names the synovial cavity, fluid and articular cartilage, but not the ossification pathways or the finer architecture".
- D (p. 1057): "treats calcium in two separate, disconnected contexts" is false: Topic 04 (pp. 1042 to 1043) says "same element, two very different disorders", names parathyroid malfunction as the cause of tetany, and links osteoporosis to calcium and vitamin D. Replacement: "treats the two briefly; here the hormonal axis is added".
- E (p. 1060): "The chapter closes with disorders in isolation" is false: Topic 04 ends with a cross-topic integration and Figure 5 flow chart (p. 1043).
- G (p. 1065): "four sub-topics" while the chapter has five topics (00 to 04); the table merges Topic 00 and Topic 04 in one row.

## Suspected book errors (page, text, correction)
1. p. 1063 (E practice 5 answer) "stimulates osteocytes to produce signals (sclerostin, osteoprotegerin) that suppress osteoclast differentiation": sclerostin inhibits bone formation by osteoblasts and rises with unloading; osteoprotegerin is the osteoclast brake. Noted in text.
2. p. 1054 table "Most bones: all long bones" and "Flat bones: skull vault, clavicle, maxilla": clavicle is a long bone formed largely intramembranously; maxilla is not a flat bone. Say "most long bones".
3. p. 1058 "approximately 9–11 mg/dL" (not NCERT; total serum Ca is usually quoted 8.5 to 10.5 or 9 to 11 mg/dL; fine as approximate, flag as outside NCERT).
4. p. 1058 and p. 1059: "Calcium ... raises the threshold at which voltage-gated Na+ channels open": fine in effect (surface-charge screening); simplified.
5. p. 1060 Pattern 1 and p. 1061 "Training does not turn slow fibres into fast fibres or the reverse": overgeneral (endurance training shifts type IIx toward IIa); "the type of a fibre is set largely by the motor neuron" is acceptable.
6. p. 1062 "Both are soft-tissue injuries; neither involves a fracture": avulsion fractures can accompany severe sprains/strains. Say "usually".
7. p. 1061 Pattern 3 "The weakness is neurological, not purely structural": overgeneral; structural damage also weakens.
8. p. 1054 "synovial joints ... hyaline" articular cartilage: fibrocartilage in a few (jaw, sternoclavicular); "Articular cartilage ... blood vessels would rupture under compression" is teleological.
9. p. 1066 "which is never true" / "never changes length" (A-band): true for sliding filament model; fine for NCERT, flag as absolute.
10. p. 1067 Archetype 3: lists "(d) both false" as the fourth option (should be A false, R true); Q10 same. Fixed in our wording, noted.
11. p. 1067 "The chapter's A-R items frequently test ... (cardiac disproves it)" fine. p. 1069 trap 8 heading "Fibrous/cartilaginous vs synovial confusion for intervertebral discs" does not match its body (fibrous vs cartilaginous).
12. pp. 1070, 1073 Q3 and Q11 "joint between adjacent vertebrae is cartilaginous": true for the vertebral bodies (discs); the facet (zygapophyseal) joints are synovial (Topic 03, p. 1035 mentions the articular processes). Overgeneral.
13. p. 1071 Q6 cardiac "uninucleate" (often, not always; some binucleate); "controlled by the autonomic nervous system" omits the intrinsic pacemaker.
14. Unlabelled superlatives/frequency claims (labelled as above): "single highest-yield fact", "non-negotiable", "every NEET cycle", "in every joint-classification question" (p. 1069 trap 7), "tests every year".
15. p. 1068 "the seven tarsals ... five metatarsals" correct; arithmetic of Q9 ((i) and (iii) only = option b) and Q12 mapping checked correct; matching on p. 1068 (A-II, B-III, C-IV, D-I = option b) checked correct. No numerical examples in these pages.

## Not checked / notes
- Answer key items for Additional topics A and B were compared with their questions (pp. 1049, 1052 to 1053) only for numbering and sense; those topics' own text is writer 2's.
- Whether the reader draws a `proc` of one-word steps ("Sprain.", "Tetanus.") well was not checked (no simulator).
- Test of the 29-character word "1,25-dihydroxycholecalciferol" passed the width rule.
