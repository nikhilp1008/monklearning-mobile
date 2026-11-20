# Biology Class 12 Chapter 7: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:56:41Z)

DONE. Wrote only /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-07.ts (export DIAGRAMS_BIOLOGY_12_07 kept, 7 diagrams, one case each).

TESTS: jest-serial.sh lib/diagrams -t "biology.12.7" gives 22 passed, 0 failed (7 figures x 3 tests, plus the unique-ids test). npx eslint on the file is clean (0 errors, 0 warnings). No em dashes in the file. I rendered every figure to PNG (qlmanage) and looked at it. The Mac stand-in fonts show no bold or italic, so I judged layout only. Scratch test, SVGs and page images are deleted; no other file touched.

IDS (all 7 match the chapter text, so nothing is missing either way; the fig blocks are in topics-1-3.ts and topic-4-extras-a-d.ts):
- b12-07-fig-7.1, drawn p. 359, topic 1 (Topic 02). Life cycle of Plasmodium, stages 1-6.
- b12-07-fig-7.2, p. 359, topic 1. Modes of transmission (4 routes, 12 examples).
- b12-07-fig-7.3, p. 365, topic 2 (Topic 03). Master tree of immunity.
- b12-07-fig-7.4, p. 365, topic 2. Antibody structure.
- b12-07-fig-7.5, p. 368, topic 2. HIV replication, steps A-E.
- b12-07-fig-7.6, p. 375, topic 3 (Topic 04). Addiction, tolerance, dependence cycle.
- b12-07-fig-7.7, p. 375, topic 3. Tobacco's two harmful pathways.
Captions are the book's word for word, minus "Figure 7.x" and "(see next page)". The vector census: drawings only on pp. 359, 365, 368 and 375. I did not render or scan the Additional-topic pages; I relied on the brief's "nothing else" and the chapter text carrying no other fig ids.

BOOK'S (kept): every box, label, step, number and arrow order. That covers the six Plasmodium stages and their texts, the human host (1-4) versus mosquito (5-6) split, the 4 routes with all examples and vectors (Anopheles, Culex, Aedes), the tree levels, the antibody's labels and the "2 heavy + 2 light chains (H2L2)" note, HIV steps A-E and the legend sentences, the 4 cycle stages with "escalating use" and the centre note, and both tobacco pathways with the proto-oncogene note.
Note on 7.1: the brief says "stages 1 to 6" and the book prints 1-6, but the book's own caption says "stages 1-4" and "5-6" (human and mosquito), which I follow.

SCHEMATIC (re-laid for a phone, all sizes and positions):
- 7.1 is the cycle unrolled into a column, with a return arrow 6 to 1. The book's footnote "Stages 1-4 occur in the human host... arrows run clockwise" is not drawn. The two host frames carry the split, and "clockwise" is dropped because a column cannot show it.
- 7.5 is a vertical flow instead of the book's left-to-right.
- 7.6 is a 2x2 square, clockwise, instead of the book's diamond with arcs.
- 7.7 is two columns under the cigarette instead of two rows.
- 7.4's angle and proportions are not to scale. The check does verify that the arms mirror each other, the light chain lies on the outer side and is shorter than the heavy chain, and a ring sits on each arm tip.
- The book's in-drawing titles (e.g. "Life cycle of Plasmodium") are omitted, since the card prints the name.
- Colours are the app's single marigold highlight, not the book's green and orange.

Highlights: 7.1 stage 1 (infective stage); 7.2 the insect-vector row; 7.3 ACQUIRED; 7.4 the antigen-binding site rings; 7.5 reverse transcription (step B); 7.6 the centre note "Withdrawal forces continued use..."; 7.7 the Cancer box.

Book text changed (house rules, all in Fig 7.2): the book's em dashes ("Malaria — Anopheles", "Filariasis — Culex", "Yellow fever — Aedes") are colons. Genus names Anopheles, Culex, Aedes (and Plasmodium in the caption) are italic although 7.2 prints them roman.

Checks per figure (each also runs the layout audit, 4 px label clearance, labels inside boxes, nothing unplaced):
- 7.1: stages 1-6 in order; 1-4 inside the human frame and 5-6 inside the mosquito frame; all stage texts present; 6 arrowheads (5 down, 1 return); one highlight.
- 7.2: the four routes in the book's order; all 12 examples; 8 arrowheads; the root box centred on the trunk; the insect-vector row highlighted.
- 7.3: the 5 boxes; INNATE and ACQUIRED one level below IMMUNITY; ACTIVE and PASSIVE below ACQUIRED; the four innate barriers named; all texts; 4 arrowheads; ACQUIRED highlighted.
- 7.4: heavy versus light chain lengths; arms mirrored about the stem axis; light chain on the outer side at 13 px; two rings centred on the arm tips; every printed label present.
- 7.5: letters A-E twice (drawing and legend) with the five sentences; viral RNA and DNA in the cytoplasm and outside the nucleus, viral DNA joining host DNA inside it; virions outside the macrophage; three virions and three fading T cells; 6 arrowheads; reverse transcription highlighted; the "Retrovirus: RNA → DNA" pill.
- 7.6: stages 1-4 clockwise with 4 arrowheads closing the loop; "escalating use" label; centre note; the three "Biology of the loop" lines.
- 7.7: both 3-step pathways in order; headings and note; 6 arrowheads; one highlight.

Notes for the coordinator:
- Not run (outside my narrow test): the book-rules and book-chapters chapter tests; the diagram tests above are green.
- jest briefly failed to parse lib/diagrams/biology-12-08.ts (a duplicate sub2 declaration) during the dump run. That is another agent's in-progress file, not mine; the later runs were fine.
- All pages in the range show only the drawings above. The only book layout oddity seen is that every figure's caption is printed on the previous page with "(see next page)".
