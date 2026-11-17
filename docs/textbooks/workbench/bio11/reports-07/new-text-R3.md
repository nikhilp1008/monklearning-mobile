# Bio 11 Ch 7: R3 fixes (new text for the founder)

Files: T13 = topics-1-3.ts, T45 = topics-4-5-extras-a-b.ts, CJ = extras-c-j.ts, KP = keypoints-biology-11-07.ts, DG = diagrams.

## [NEW] wordings
1. CJ Additional C, Introduction, first p: "The chapter gives the segments and outlets of the septal and integumentary nephridia and the segments of the pharyngeal nephridia, but it says where the pharyngeal ones open only in a multiple-choice hint, and never sets the three side by side. NEET asks both the segment numbers and where each type opens, so this section puts all three in one table and gives a method for keeping them straight."
2. T45 Additional A, Worked example 3 (A-R). A: "Bone, cartilage, blood and areolar tissue are all derived from the mesoderm." R: "The mesoderm, the middle germ layer, forms the body’s supporting, packing and circulating tissues." Reasoning: "A is true: these connective tissues of the trunk and limbs arise from the mesoderm. R is true and explains A: bone and cartilage support, areolar tissue packs, and blood circulates, and these are the jobs of the tissues the middle layer forms. (Some connective tissue of the head and face comes from the neural crest instead, which is why the assertion names the tissues rather than saying “all”.) The correct option is (a): both A and R true, R is the correct explanation of A." Key stays (a).
3. T13 Topic 01, Key processes 1: "(Each muscle fibre does have a thin basal lamina round it, but muscle fibres and nerve cells do not form a sheet with a free surface.)" KP Topic 01 point: "(muscle fibres each have a thin basal lamina, but neither muscle nor nerve cells form a sheet with a free surface)". KP header comment: "(muscle fibres also have a basal lamina)".
4. T13 Topic 03 Structural logic 2 and KP Topic 03 point 1: "the calciferous glands in the stomach wall secrete calcium carbonate ..." (replaces "of the oesophagus and stomach region").
5. T13 Topic 02, Two patterns: "... so the cockroach’s haemolymph has no respiratory pigment, while earthworm and frog blood, which carry oxygen, do."
6. CJ Additional D, Practice 3 option (d): "(d) Discharge of uric acid into the gut." Answer (c) unchanged.
7. CJ Additional H, Practice 7 answer: "The pituitary develops from Rathke’s pouch (oral ectoderm, the anterior lobe) and from the floor of the diencephalon (neuroectoderm, the posterior lobe); the pineal gland develops from the diencephalon roof (neuroectoderm)." KP H point 2: "the pituitary from Rathke’s pouch (oral ectoderm) and the floor of the diencephalon, the pineal from the diencephalon roof".
8. T45 Topic 04 Exam Relevance: "recur almost every year".
9. Conus/truncus. T45 Topic 05 MCQ 1 nudge (b): "“conus medullaris” is part of the spinal cord; the heart’s cone-shaped outflow chamber is the conus arteriosus (NCERT’s name; the book calls the outflow the truncus arteriosus)." KP Topic 05 point 2: "the truncus arteriosus (NCERT: conus arteriosus), the outflow chamber that carries blood out of the ventricle." CJ E kalam: "The frog’s truncus arteriosus, leading out of the single ventricle, divides into three pairs of arteries." CJ E Method sentence: "The frog’s truncus arteriosus, leading out of the single ventricle, divides into three pairs of arteries:". KP E "why": "The truncus arteriosus, leading out of the single ventricle, divides into three pairs." The "(NCERT: conus arteriosus)" notes were kept.
10. CJ G kalam and Introduction: "This section adds the parts of the diencephalon (epithalamus, thalamus, hypothalamus), ..."
11. KP Topic 02 point 2: duplicated sentence deleted.
12. T45 Topic 04 Concept intuition: "Instead the cockroach breathes through a private pipework ..."
13. T45 B4 table, Spiracles row, Frog: "None (air reaches the lungs through the nostrils and buccal cavity)".
14. T45 B Practice 5: answer "(c) Closed with haemoglobin. The frog’s heart pumps blood that stays in vessels (closed circulation) and carries haemoglobin in nucleated RBCs. The cockroach’s heart discharges haemolymph into the haemocoel (open circulation), with no haemoglobin." Optional options applied: "(c) part of a closed circulation with haemoglobin, (d) part of an open circulation."
15. CJ J Trap 3: "If the question mentions both stages, read which stage it asks about before you answer."
16. CJ D table row 2, applied with the book's wording KEPT and the nuance added beside it: "Tubule cells convert the nitrogenous waste into uric acid (non-toxic, nearly insoluble); in insects much of the uric acid is made in the fat body and secreted into the tubule fluid by these cells". KP D point 2 gets "(in insects much of it is made in the fat body and secreted by these cells)". The D CBSE worked example, its answer and the D Reasoning were left as the book has them.
17. CJ C table, Pharyngeal row: "Open into the buccal cavity and pharynx (enteronephric)". T13 Topic 03 MCQ 3 nudge (b) changed to match: "... that open into the buccal cavity and pharynx, not the intestine."
18. T45 B1 Body wall earthworm cell: "Cuticle + epidermis + muscles (no hard skeleton)". KP (mixup, Topic 03 line and the body-plan point): "no hard skeleton".
19. T45 Topic 05 Concept intuition: "... exactly why it earns a whole topic of its own."
20. CJ E metamorphosis table, row 2: "mouth bears horny jaws for scraping algae" (replaces "mouth is a simple, undifferentiated opening").
21. DG Fig 7.1(a): wave baseline moved from 154 to 160 (cells' lower edges at 154 now sit on the wave, which is 156 to 164); the "basement membrane" leader dot follows the wave (`waveY(324)`); the check `sits` now tests the 6 px offset.

## Printed keys, numbers, titles, headings changed
- A-R key Additional A ex 3: stays (a); A and R texts changed (old: "All connective tissues are derived from the mesoderm" / "The mesoderm gives rise to bone, cartilage, blood and the loose and dense connective tissues").
- D Practice 3: option (d) old "Water reabsorption", new "Discharge of uric acid into the gut"; key (c).
- B Practice 5: options (c), (d) reworded (see 14); key (c).
- No titles, headings or numbers changed. Segment numbers, counts and the errata places were not touched.

## Not applied, and decisions for the founder
- Flag 21, Fig 7.3 dorsal view (thorax leader dot): not changed. The thorax and hindwing leaders run up from labels below the figure; moving the thorax dot into the upper half of the ellipse would make its leader pass through the hindwings dot (and sit about 13 px from the tegmina dot). It needs a render to move both dots safely, and the diagram agent should do it. Not verified on a render either way.
- Flag 21, Fig 7.1(a): changed in code only; I did not render it. Please look at the dump once.
- Flag 16 is a simplification the book makes on purpose; I kept the book's wording and added the nuance (see 16). The founder may remove the added clause.
- Flag 17 and 20 are beyond NCERT; applied as the reviewer suggested.
- Flag 4: applied the NCERT location (stomach). The founder had left this open; confirm.
- Flag 14 options (c), (d): the question is a [NEET] item from the book, so this reword is ours.
- Flag 9: the book's "truncus arteriosus" was kept everywhere and NCERT's "conus arteriosus" put beside it; the two are no longer called synonyms.

## Tests
Run once at the end: book-rules + book-chapters + display-fit (27 passed), lib/diagrams "biology.11.7" (28 passed), lib/revise (137 passed), eslint on changed files (clean, no output).
