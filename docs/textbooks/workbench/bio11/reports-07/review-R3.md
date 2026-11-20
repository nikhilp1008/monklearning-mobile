# Biology 11 Ch 7 (Structural Organisation in Animals): third expert review (R3)

Reviewer: third independent reviewer, Claude Opus. Date 2026-11-17. Scope: the whole chapter as it now stands, after fixers F1 and F2:
`content/textbooks/bio-11-07/topics-1-3.ts`, `topics-4-5-extras-a-b.ts`, `extras-c-j.ts`, `lib/diagrams/biology-11-07.ts`, `lib/revise/keypoints-biology-11-07.ts`. Book pp. 407 to 469 (errata p. 1173). Nothing in the repo was edited.

Method: my own pass came first. I extracted every string from the three topic files, ran a word-level diff against the book's text for pp. 409 to 469 (the page-tagged dump, with hyphenation joined), and read every difference. I read every block for its science and recomputed every number and count. I checked all 16 MCQ keys, the 40 worked-example answers and the 77 practice answers, every assertion-reason option set, the 22 tables, the errata in all five places, each Additional topic's introduction against Topics 01 to 05 as built, and each line in new-text-F1.md and new-text-F2.md. I compared the four figures (9 panels) with page images of pp. 413, 422, 429 and 435. I read review-R1 and review-R2 only after that, to mark each flag NEW or REPEAT.

Tags: [NEW] = our proposed wording. NEW = not raised before. REPEAT = raised before and still open, or fixed wrongly.

## Flags, most serious first

### 1. Additional C, Introduction: the "never says" claim is now false (NEW; fixers' wording) — serious
- **Where:** `extras-c-j.ts`, topic index 7 (C), part "Introduction", first `p` (line 35). Book p. 445.
- **Says now:** "The chapter lists the three nephridia types, with the segments and outlet of the septal and integumentary types, but it never says where the pharyngeal nephridia open."
- **Wrong:** F1 (R1 flag 1) changed Topic 03's MCQ 3 nudge (b), which now reads "pharyngeal nephridia are tufts in segments 4–6 that open into the pharynx, not the intestine" (`topics-1-3.ts` line 592). So the chapter does now say where they open. F2's intro (R2 flag 7) was written without knowing about F1's edit. This is the false-"never covers" kind of flag.
- **Fix [NEW]:** "The chapter gives the segments and outlets of the septal and integumentary nephridia and the segments of the pharyngeal nephridia, but it says where the pharyngeal ones open only in a multiple-choice hint, and never sets the three side by side. NEET asks both the segment numbers and where each type opens, so this section puts all three in one table and gives a method for keeping them straight."
- **Kind:** false claim about the chapter. **Source:** ours (F2). **Confidence:** certain.

### 2. Additional A, Worked example 3 (assertion-reason): the key contradicts its own solution (REPEAT; fixed wrongly) — serious
- **Where:** `topics-4-5-extras-a-b.ts`, topic 5 (A), Worked examples, ex 3 (lines 720 to 724). Book p. 440.
- **Says now:** A: "All connective tissues are derived from the mesoderm." R: "The mesoderm gives rise to bone, cartilage, blood and the loose and dense connective tissues." Key (a). The reasoning says "A is true ... This is the NEET convention; the connective tissue of the head and face is the exception, arising from neural crest."
- **Wrong:** The solution names an exception, so it admits that "all" is false, but it still marks A true. A student is taught that an "all" statement with a known exception is true. R is also only a list that restates A, not a reason for it. The writer flagged this, R2 flag 14 added the hedge, and F2 left it as founder decision 4. The hedge makes the item contradict itself.
- **Fix [NEW]:** Assertion (A): "Bone, cartilage, blood and areolar tissue are all derived from the mesoderm." Reason (R): "The mesoderm, the middle germ layer, forms the body’s supporting, packing and circulating tissues." Keep the key (a). Reasoning: "A is true: these connective tissues of the trunk and limbs arise from the mesoderm. R is true and explains A: bone and cartilage support, areolar tissue packs, and blood circulates, and these are the jobs of the tissues the middle layer forms. (Some connective tissue of the head and face comes from the neural crest instead, which is why the assertion names the tissues rather than saying ‘all’.)"
- **Kind:** wrong or unclear assertion-reason, overgeneral "all". **Source:** book, made worse by the fix. **Confidence:** likely.

### 3. Topic 01, Key processes 1, and key point Topic 01 "mistake": nerve cells do not have a basal lamina (NEW; fixer's wording)
- **Where:** `topics-1-3.ts`, topic 0, part "Key processes and structural logic", item 1 (line 124). Book p. 411. Also `keypoints-biology-11-07.ts` line 120, and the header comment, which says "muscle fibres and neurons also have a basal lamina".
- **Says now:** "(Muscle fibres and nerve cells have only a thin basal lamina round each cell.)"
- **Wrong:** Each muscle fibre does have an external (basal) lamina. Neurons do not. In the CNS there is none, and in nerves the basal lamina wraps the Schwann cell, not the neuron. The book's original claim was wrong, and the correction has added a new error.
- **Fix [NEW]:** Topic 01: "(Each muscle fibre does have a thin basal lamina round it, but muscle fibres and nerve cells do not form a sheet with a free surface.)" Key point: "(muscle fibres each have a thin basal lamina, but neither muscle nor nerve cells form a sheet with a free surface)". Header comment: "(muscle fibres also have a basal lamina)".
- **Kind:** biology error. **Source:** ours (F1/F2). **Confidence:** likely.

### 4. Earthworm calciferous glands: NCERT places them in the stomach (REPEAT; founder decision open)
- **Where:** `topics-1-3.ts`, topic 2, Structural logic, second paragraph (line 470), and key point Topic 03 point 1 (`keypoints` line 160).
- **Says now:** "the <b>calciferous glands</b> of the oesophagus and stomach region secrete calcium carbonate that neutralises the humic acid".
- **Wrong:** NCERT says "The calciferous glands, present in the stomach, neutralise the humic acid present in humus." "Oesophageal" calciferous glands is the *Lumbricus* pattern. For a NEET student the NCERT location is the one that scores. Item 1 of the same part already says "the stomach neutralises the humic acid".
- **Fix [NEW]:** "the <b>calciferous glands</b> in the stomach wall secrete calcium carbonate that neutralises the humic acid..." (and the same words in the key point).
- **Kind:** NCERT mismatch. **Source:** ours (F1 flag 15). **Confidence:** likely.

### 5. Topic 02, circulatory bullet: "insect haemolymph has no respiratory pigment" is too general (NEW; fixer's wording)
- **Where:** `topics-1-3.ts`, topic 1, part "Two patterns worth memorising" (line 373). Book p. 417.
- **Says now:** "In insects the air is carried by tracheae, not by blood, so insect haemolymph has no respiratory pigment, while earthworm and frog blood, which carry oxygen, do."
- **Wrong:** Some insects carry haemoglobin in their haemolymph (for example *Chironomus* larvae, the "blood-worms"). The claim is true of the cockroach, which is the animal in this chapter. Key point Topic 02 point 2 already says "the cockroach haemolymph has none".
- **Fix [NEW]:** "In insects the air is carried by tracheae, not by blood, so the cockroach’s haemolymph has no respiratory pigment, while earthworm and frog blood, which carry oxygen, do."
- **Kind:** overgeneral claim. **Source:** ours (F1). **Confidence:** likely.

### 6. Additional D, Practice 3: two defensible answers (NEW)
- **Where:** `extras-c-j.ts`, topic 8 (D), Practice item 3 (line 221). Book p. 449.
- **Says now:** "Which of these is NOT a function of Malpighian tubules? (a) Uptake of nitrogenous waste from haemolymph, (b) Conversion of nitrogenous waste to uric acid, (c) Oxygen transport, (d) Water reabsorption." Answer (c).
- **Wrong:** D's own three-step table puts water reabsorption "At the hindgut and rectum", not in the tubules. A careful student can therefore pick (d) as well as (c).
- **Fix [NEW]:** Option (d): "(d) Discharge of uric acid into the gut". The answer stays (c).
- **Kind:** MCQ with more than one defensible answer. **Source:** book. **Confidence:** likely.

### 7. Additional H Practice 7, and key point H: only the anterior pituitary comes from Rathke's pouch (NEW)
- **Where:** `extras-c-j.ts`, topic 12 (H), Practice 7 answer (line 739). Book pp. 459 to 460. Key point H point 2 (`keypoints` line 450).
- **Says now:** "The pituitary gland develops from Rathke’s pouch (oral ectoderm) and the pineal gland develops from the diencephalon roof (neuroectoderm)."
- **Wrong:** Only the anterior lobe comes from Rathke's pouch. The posterior lobe grows down from the floor of the diencephalon (neuroectoderm). The key (a) is unaffected.
- **Fix [NEW]:** "The pituitary develops from Rathke’s pouch (oral ectoderm, the anterior lobe) and from the floor of the diencephalon (neuroectoderm, the posterior lobe); the pineal gland develops from the diencephalon roof (neuroectoderm)." Key point: "the pituitary from Rathke’s pouch (oral ectoderm) and the floor of the diencephalon, the pineal from the diencephalon roof".
- **Kind:** incomplete science. **Source:** book. **Confidence:** likely.

### 8. Topic 04, Exam Relevance: "recur every year" (REPEAT; R1 flag 17 left it)
- **Where:** `topics-4-5-extras-a-b.ts`, topic 3, first `p` (line 29). Book p. 425.
- **Says now:** "...and paurometabolous development recur every year (the book’s estimate from past papers, not official figures)."
- **Wrong:** "Every year" is an absolute frequency claim. J says "asked almost every year", and F2's J note says the two agree.
- **Fix:** "recur almost every year".
- **Kind:** exam-frequency overclaim. **Source:** book. **Confidence:** likely.

### 9. Frog conus and truncus arteriosus treated as one chamber (REPEAT in part; R1 flag 7 notes)
- **Where:** `topics-4-5-extras-a-b.ts`, topic 4, MCQ 1 nudge (b) (line 526); key point Topic 05 point 2 (`keypoints` line 263); Additional E kalam and Method (lines 242, 254).
- **Says now:** nudge: "the heart’s cone-like chamber is the conus (truncus) arteriosus". Key point: "the truncus arteriosus (NCERT calls it the conus arteriosus), the cone-like chamber that distributes blood out of the ventricle". E: "The frog’s truncus arteriosus divides into three pairs of arteries as it leaves the single ventricle."
- **Wrong:** In the frog the conus arteriosus is the chamber that leaves the ventricle. The truncus is its short forward continuation, which branches into the arches. NCERT names only the conus. Writing "conus (truncus)" and "truncus ... the cone-like chamber" tells students the two are synonyms. The "(NCERT: conus arteriosus)" notes are fine and should stay.
- **Fix [NEW]:** nudge (b): "“conus medullaris” is part of the spinal cord; the heart’s cone-shaped outflow chamber is the conus arteriosus (NCERT’s name; the book calls the outflow the truncus arteriosus)." Key point: "...the truncus arteriosus (NCERT: conus arteriosus), the outflow chamber that carries blood out of the ventricle." E kalam and Method: "The frog’s truncus arteriosus, leading out of the single ventricle, divides into three pairs of arteries:"
- **Kind:** unclear or misleading. **Source:** ours (F1) and the book. **Confidence:** possible.

### 10. Additional G, Introduction and kalam: the chapter does name the diencephalon (NEW; fixer's wording)
- **Where:** `extras-c-j.ts`, topic 11 (G), kalam (line 570) and Introduction (line 575). Book p. 456.
- **Says now:** "This section adds the diencephalon (epithalamus, thalamus, hypothalamus), ..."
- **Wrong:** Topic 05, Structural logic 5 (line 443) already lists "the diencephalon" in the forebrain. What G adds is its parts.
- **Fix [NEW]:** "This section adds the parts of the diencephalon (epithalamus, thalamus, hypothalamus), ..." (in both the kalam and the Introduction).
- **Kind:** false claim about the chapter. **Source:** ours (F2). **Confidence:** certain.

### 11. Key point Topic 02 point 2: a sentence is duplicated (NEW; F2 edit)
- **Where:** `keypoints-biology-11-07.ts` line 149.
- **Says now:** "...open in the cockroach, where blood (haemolymph) leaves the vessels and bathes the organs in the haemocoel. In an open system the blood (haemolymph) leaves the vessels and bathes the organs directly. Earthworm and frog blood..."
- **Fix:** Delete "In an open system the blood (haemolymph) leaves the vessels and bathes the organs directly."
- **Kind:** editorial slip. **Source:** ours. **Confidence:** certain.

### 12. Topic 04, Concept intuition: "Instead it breathes" has lost its subject (NEW; F1 insertion)
- **Where:** `topics-4-5-extras-a-b.ts`, topic 3, "Think about it this way…" (line 41).
- **Says now:** "...whereas earthworm and frog blood, which carry oxygen, do have one. Instead it breathes through a private pipework, the <b>tracheal system</b>..."
- **Wrong:** After F1's inserted clause, "it" now follows "earthworm and frog blood", so the reader no longer knows what breathes.
- **Fix [NEW]:** "Instead the cockroach breathes through a private pipework, the <b>tracheal system</b>, ..."
- **Kind:** unclear. **Source:** ours. **Confidence:** certain.

### 13. Additional B4 table, frog spiracle cell (NEW)
- **Where:** `topics-4-5-extras-a-b.ts`, topic 6 (B), B4 table, Spiracles row, Frog cell (line 896). Book p. 443.
- **Says now:** "None (lungs via mouth)".
- **Wrong:** The frog draws air in through the external nostrils into the buccal cavity and pumps it into the lungs. It does not breathe through the mouth, which is kept closed.
- **Fix [NEW]:** "None (air reaches the lungs through the nostrils and buccal cavity)".
- **Kind:** biology slip. **Source:** book. **Confidence:** likely.

### 14. Additional B Practice 5: a heart is neither "open" nor "closed" (NEW)
- **Where:** `topics-4-5-extras-a-b.ts`, topic 6 (B), Practice 5 (lines 1038 to 1039). Book p. 445.
- **Says now:** answer "(c) Closed with haemoglobin. The frog heart is closed (blood in vessels) ... The cockroach has an open heart (discharging into haemocoel) with no haemoglobin."
- **Wrong:** "Open" and "closed" describe the circulation, not the heart.
- **Fix [NEW]:** answer "(c) Closed with haemoglobin. The frog’s heart pumps blood that stays in vessels (closed circulation) and carries haemoglobin in nucleated RBCs. The cockroach’s heart discharges haemolymph into the haemocoel (open circulation), with no haemoglobin." Optionally change option (d) to "part of an open circulation" and option (c) to "part of a closed circulation with haemoglobin".
- **Kind:** unclear. **Source:** book. **Confidence:** possible.

### 15. Additional J, Trap 3: unsupported exam advice (NEW)
- **Where:** `extras-c-j.ts`, topic 14 (J), "The Traps", Trap 3 (line 880). Book p. 465.
- **Says now:** "If the question mentions both, the adult answer is usually what NEET wants."
- **Wrong:** This is an exam-pattern claim with no basis, and the advice can lead a student to the wrong stage.
- **Fix [NEW]:** "If the question mentions both stages, read which stage it asks about before you answer."
- **Kind:** exam-frequency overclaim. **Source:** book. **Confidence:** possible.

### 16. Additional D, step 2 "Conversion": uric acid is made mainly in the fat body (NEW)
- **Where:** `extras-c-j.ts`, topic 8 (D), three-step table, row 2 (lines 163 to 165), the CBSE worked example, and key point D point 2.
- **Says now:** "Tubule cells convert the nitrogenous waste into uric acid".
- **Wrong:** In insects, urate is synthesised mainly in the fat body. The Malpighian tubules take it up and secrete it into the tubule lumen. The book's version is the common school simplification.
- **Fix [NEW]** (if the founder wants it exact): row 2 "What happens": "Uric acid, made mainly in the fat body, is secreted by the tubule cells into the tubule fluid". Otherwise leave it as the book has it.
- **Kind:** simplification. **Source:** book. **Confidence:** possible.

### 17. Additional C table and Topic 03: pharyngeal nephridia outlet (NEW, minor)
- **Where:** `extras-c-j.ts`, C table, Pharyngeal row "Open into the pharynx (enteronephric)" (line 45); also Topic 03 MCQ 3 nudge.
- **Wrong:** Standard zoology texts say the pharyngeal nephridia of segment 4 open into the buccal cavity and those of segments 5 and 6 into the pharynx. NCERT says nothing about this.
- **Fix [NEW]:** "Open into the buccal cavity and pharynx (enteronephric)". Optional.
- **Kind:** incomplete. **Source:** book. **Confidence:** possible.

### 18. Additional B1 table: earthworm body wall "(no skeleton)" against "Hydrostatic skeleton" two rows lower (NEW, minor)
- **Where:** `topics-4-5-extras-a-b.ts`, B1 "Body wall", earthworm cell (line 785); key point B Topic 06 mixup (line 225), "Earthworm: no skeleton, a fluid-filled coelom as a hydrostatic skeleton".
- **Fix [NEW]:** "Cuticle + epidermis + muscles (no hard skeleton)", and in the key point "Earthworm: no hard skeleton, a fluid-filled coelom as a hydrostatic skeleton".
- **Kind:** internal inconsistency. **Source:** book. **Confidence:** possible.

### 19. Topic 05, Concept intuition: "earns a whole chapter" (NEW, minor)
- **Where:** `topics-4-5-extras-a-b.ts`, topic 4, second `p` (line 349). Book p. 432.
- **Says now:** "...and that is exactly why it earns a whole chapter."
- **Wrong:** The frog is one topic of this chapter.
- **Fix [NEW]:** "...and that is exactly why it earns a whole topic of its own."
- **Kind:** transcription context. **Source:** book. **Confidence:** certain (minor).

### 20. Additional E, stage 2: "mouth is a simple, undifferentiated opening" (NEW, minor)
- **Where:** `extras-c-j.ts`, E metamorphosis table, row 2 (line 291). Book p. 450.
- **Wrong:** A feeding tadpole's mouth has horny jaw sheaths and rows of labial teeth for scraping algae.
- **Fix [NEW]:** "mouth bears horny jaws for scraping algae".
- **Kind:** biology slip. **Source:** book. **Confidence:** possible.

### 21. Figures: two small clarity points (NEW, minor)
- **Fig 7.1(a)** (`b11-07-fig-7.1`, panel 0; book p. 413): the wavy basement membrane runs through the lower edges of the three cells, not beneath them. The book draws it under the cells. Suggest moving the wave down by about the cell half-height so the cells sit on it. Possible.
- **Fig 7.3 dorsal view** (panel 0; book p. 429): the "thorax" and "hindwings (membranous)" leader dots land within about 30 px of each other on the second body ellipse, so it is hard to tell which label goes with which part. Suggest moving the thorax dot to the middle of the ellipse's upper half. Possible.
- Everything else matches the book. Fig 7.1: four panels, every label present, nuclei correct for skeletal (peripheral, many), smooth (central, one) and cardiac. Fig 7.2: I recomputed the segment grid from the render: the clitellum covers segments 14 to 16, the female pore is on 14, the male pores on 18, the peristomium is segment 1, the 5/10/15 scale sits under segment centres, and the four spermathecal pores sit in grooves 5/6, 6/7, 7/8 and 8/9. The gut order is right. Fig 7.3: the canal order is right, the Malpighian tubules are at the midgut–hindgut junction, there are three pairs of legs on the thorax and 10 abdominal segments. Fig 7.4: five stages in book order, the external fertilisation arrow, the metamorphosis arrow and the footnote are all there.

## Earlier flags applied wrongly (or leaving a new problem)
- **R1 flag 9** (basement membrane): the replacement says nerve cells have a basal lamina. See flag 3.
- **R1 flag 2** (pigment): "insect haemolymph has no respiratory pigment" is too general (flag 5), and the Topic 04 insertion leaves "Instead it breathes" without a subject (flag 12).
- **R1 flag 7** (truncus/conus): the nudge and the key point equate conus and truncus. See flag 9.
- **R1 flag 15** (calciferous glands): the "oesophagus and stomach region" wording departs from NCERT. See flag 4.
- **R1 flag 17** (exam claims): Topic 04's "recur every year" was left. See flag 8.
- **R2 flag 7** (C intro): made false by R1 flag 1's new nudge. See flag 1.
- **R2 flag 10** (G intro): "adds the diencephalon" is false. See flag 10.
- **R2 flag 14** (A.3 hedge): makes the key contradict itself. See flag 2.
- **F2 key-point edit** (Topic 02 point 2): a sentence is duplicated. See flag 11.
- All the other R1 and R2 items checked out as applied correctly. These include the left atrium "from the lungs", frog cranial nerves only, frog vision deleted, the stomach glands, the Darwin rewording, "does not normally self-fertilise", "harmless to handle", the assertion-reason options added, the E systemic arteries, the E thyroxine lead-in, "about 13 moults", "up to about a week", G Practice 3 and 4, H.5, H.8, the J wording changes, and F1 / F Practice 3.

## Counts verified
- Transcription: a word-level diff of all three topic files against pp. 409 to 469. Every difference is either a recorded exception (dashes, labels, "Topic" for "Sub-topic", option sets added, en dashes) or a listed F1/F2 change. No missing or duplicated book sentences were found, and no number was copied wrong.
- Errata: "ovaries 1 pair (segments 12–13)" (Topic 03 table), "ovaries (12–13)" (Structural logic 4), "ovary 12–13" (pitfalls, cheat sheet, J recall list). All five are present.
- 16 MCQs (Topics 01, 03, 04, 05): each `correct` index matches the book's answer and is the only correct option. The nudges fit their options.
- 40 worked examples (16 in the topics, 24 in the Additional topics including J's four representatives) and 77 practice answers: every answer was rechecked against its question. Every assertion-reason set ends "(d) A false, R true". None says "both false".
- Numbers rechecked: earthworm segment numbers (buccal 1–3, oesophagus 5–7, gizzard 8–9, stomach 9–14, intestine from 15, caeca 26, blood glands 4–6, hearts 4 pairs, testes 10–11, ovaries 12–13, spermathecae 6–9 with openings in grooves 5/6 to 8/9, clitellum 14–16, female pore 14, male pores 18, nephridia 3→last, 4–6 and 15→last); cockroach (head 6 segments, 3 thoracic, 10 abdominal, 6+3+10, 13 heart chambers, 10 spiracle pairs = 2+8, 100–150 Malpighian tubules, ganglia 3+6 = 9, testes 4th–6th, ovaries 2nd–6th with 8 ovarioles, ootheca 14–16 eggs, 9–10 oothecae, about 13 moults, up to about a week without the head); frog (2 atria + 1 ventricle, 10–12 vasa efferentia, forelimb 4 / hindlimb 5 digits, 10 pairs of cranial nerves, 2,500 to 3,000 ova as "a few thousand"). All agree with NCERT, except the calciferous gland site (flag 4).
- Italics: every scientific name in the body text is in `<i>`. Titles are plain, as the brief allows. No em dashes.
- Additional-topic introductions checked against Topics 01 to 05: A, B, D, E, F, H and the shared introduction are true as now built. C (flag 1) and G (flag 10) are not.
- Key points: all 40 checked against the chapter text. Flags 3, 4, 7, 9, 11, 16 and 18 carry over into them.
- Figures checked: 7.1 (4 panels, p. 413), 7.2 (2 panels, p. 422), 7.3 (2 panels, p. 429), 7.4 (1 panel, p. 435), against page images.

## Could not check
- I did not run jest, tsc or the diagram dump test, as instructed. The figure renders I compared are the newest existing dump SVGs (`scratchpad/dump/b11-07-fig-*.svg`, written 2026-11-16 19:04, after the diagram file's last change at 17:27), rendered with qlmanage and without the app's fonts. Final placement of the text in the app and on Android is not checked.
- NCERT wording is quoted from my knowledge of the NCERT Class 11 text (Chapter 7, earthworm, cockroach and frog sections). I did not open an NCERT PDF.
- Whether frog "10 pairs of spinal nerves" (deleted by F1) should come back: *Rana* references give 9 or 10. Not needed for NEET, so it is fine left out.

## Summary
21 flags: 18 NEW, 3 REPEAT (flags 2, 4, 8; flag 9 is part repeat). Serious: 2 (flag 1, the false C introduction created by the fixers; flag 2, the self-contradicting A.3 assertion-reason key). Then 5 likely science or NCERT points (flags 3, 4, 5, 6, 7). The rest are minor or possible. Nine earlier fixes are applied wrongly or leave a new slip (listed above), and most of them come from the fixers' own new wording. The transcription is faithful and every MCQ key is right.
