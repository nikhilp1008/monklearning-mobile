# Writer 1, Biology 11 Chapter 18, Topics 00 to 02 (pp. 1075 to 1094)
File: content/textbooks/bio-11-18/topics-0-2.ts

## Boundaries (confirmed on page images)
- Topic 00 = preface "How to use this guide" (foot of p.1075 and p.1076, parts: "How to use this guide") + overview p.1077 (parts: Introduction [text before first heading], Neural organisation across animals, The human neural system at a glance). Contents box p.1075 not copied.
- Topic 01 pp.1078-1086, Topic 02 pp.1087-1094; p.1095 is Topic 03 (not mine). No differences from the brief.

## Counts
- T00: 4 parts, 0 ex. T01: 8 parts, 4 ex, 5 practice, 4 MCQ, 4 pitfalls, 1 pro-tip, cheat sheet 7 rows + 1 aid, 1 table. T02: 8 parts, 4 ex, 5 practice, 4 MCQ, 4 pitfalls, 1 pro-tip, cheat sheet 6 rows + 1 aid, 1 table.

## Figures
fig blocks: b11-18-fig-18.1 (caption p.1080, plate p.1081, T01), 18.2 (caption p.1082, plate p.1083, T01), 18.3 (caption p.1089, plate p.1090, T02). Pages judged to hold no other drawing: all others in 1075-1094 (pdfimages: no raster images; page images checked). No unnumbered drawings.

## Exceptions taken
- Every em dash replaced by colon/comma/brackets (many; sense unchanged). Run-in labels bold, emphasis italics dropped (only <i>Hydra</i> kept). Option letters (a)-(d) kept as printed (book uses letters here, not numerals); bold in stems.
- Cross-refs: p.1077 "Unit 1" -> "Topic 01"; p.1078 "subtopics" -> "topics"; p.1080 "the reflex-arc subtopic" -> "the reflex-arc topic (Topic 04)"; p.1082 "Section 1" -> "Concept intuition"; p.1078/1087 "subtopic" -> "topic"; practice 5 (T01, T02) "as in Example 4" -> "as in worked example 4". Preface "study units"/"Each unit"/list 1 to 4 left as printed.
- Exam statements labelled "(the book's estimate from past papers, not official figures)": p.1078 "NEET reliably pulls 1-2 questions", p.1087 "NEET draws 1-2 questions almost every year".
- Fig captions' "(see next page)" dropped (captions belong to diagrams). Ratio 3:2 written "3 ∶ 2". Values use no-break space before mV/nm. "~" kept as printed in "~-70 mV", "~+30 mV".
- Worked-example tags = bracket text ("CBSE Board: Diagram identification" etc.). Ex answers: only the printed "Answer:" lines (T01 ex3, T02 ex3) are `ans`; others `ans: ''` (result is inside the reasoning). Match-the-column tables written as `<br>` labelled lists in q.
- T02 MCQ4: book's closing "none manage the body's thermostat" moved once to the end of `solution` (was inside option d's sentence); (d) nudge keeps "governs balance."
- Wrong options discussed together (T01 Q1 c/d, Q3 a/c; T02 Q2 b/d, Q3 c/d) carry the same nudge on each. T01 Q4 correct-option explanation: book prints none, `solution` = "The neuron is the structural and functional unit of the neural system." (our wording, since the book's Q4 has no right-answer sentence; please list for founder). Mnemonics (T01 bullet, T02 bullet) placed in `aids`.
- Two-column "developmental divisions" table kept as `table` with head (as Ch.14).

## False "never covers" claims
None in my range (Additional intros are not mine).

## Suspected book errors / overgeneral claims (copied as printed)
- p.1078 "foundation for the synapse and reflex-arc subtopics that follow": the synapse is in the same topic (Section 3.4), not a later one.
- p.1078 "A perennial favourite", "reliably pulls", p.1087 "almost every year": unlabelled frequency claims (now labelled).
- p.1079 Unipolar "Usually the embryonic stage": adult sensory neurons (dorsal root ganglion, pseudo-unipolar) are also unipolar; NCERT wording kept.
- p.1079 Neurilemma "the myelin is discontinuous (the neurilemma may be continuous)": loosely worded; neurilemma = outer Schwann cell layer.
- p.1082 "depolarisation can only happen at the exposed nodes": "only" overgeneral (voltage-gated channels cluster at nodes, but wording is absolute).
- p.1082 synaptic gaps "≈ 5 nm" electrical, "≈ 10-20 nm" chemical: not in NCERT; usual figures are ~3.5 nm and ~20-40 nm. Unverified.
- p.1084 Ex4/Q1 etc fine; p.1085 Q1 (a) "inverts the truth": at depolarisation the membrane is Na+ permeable but K+ is not "impermeable"; loose.
- p.1087 "Grey matter and white matter are distributed oppositely in the brain versus the spinal cord", p.1093 Q3/pitfall "Cerebrum: grey outside": true for cortex only; brain also has deep grey nuclei (and the book itself says "Nuclei ... grey matter embedded within white matter" p.1089); cerebellum cortex is also outer grey.
- p.1088 Pons "forms the floor of the brain stem": odd; pons is part of the brain stem, ventral not floor.
- p.1088/1092 limbic system "the hypothalamus together with the amygdala and hippocampus" and Ex4 R "composed of": incomplete (NCERT: inner parts of cerebral hemispheres plus amygdala, hippocampus etc.); Ex4 verdict (b) depends on it.
- p.1089 Thalamus "almost all sensory and motor signals pass through it": olfaction bypasses it; overgeneral.
- p.1089 Hypothalamus "the single point where electrical neural control hands over to chemical hormonal control": overgeneral (adrenal medulla, neurohypophysis release are other hand-overs).
- p.1089 Cerebellum "inhibitory GABA": correct. Fig 18.3 plate labels both "Midbrain" and "Pons" on a schematic (diagram agent's concern).
- Numbers: all EPSP/IPSP sums are in Topic A, not mine. In my range no computed numbers (resting about -70 mV, peak about +30 mV, 3 ∶ 2 pump) recomputed: consistent.
- Fourth A-R option in the book is correctly "A false, R true" (no "both false" found).

## Could not check
Visual rendering of bold/italic beyond the PDF images; Fig 18.2 "Ca2+" thin gap is a drawing issue (draw Ca<sup>2+</sup> properly).

## Checks
jest-serial (book-rules + book-chapters, filtered): book-rules PASS; only failure "Biology 11 Chapter 18 draws only figures that exist" listing the six undrawn ids 18.1-18.6 (diagram agent's). eslint: clean.
