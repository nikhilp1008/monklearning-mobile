# Biology 11 Chapter 13 (Plant Growth and Development): third expert review (R3, Opus)

Reviewer: third independent reviewer, 2026-11-17. Share: the whole chapter as it now stands
(`content/textbooks/bio-11-13/topics-1-2.ts`, `topic-3-extras-a-b.ts`, `extras-c-f.ts`,
`lib/diagrams/biology-11-13.ts`, `lib/revise/keypoints-biology-11-13.ts`), including the fixers' new wording
(`new-text-F1.md`, `new-text-F2.md`). Book pp. 765 to 818; errata pp. 1171 to 1177 hold no Chapter 13 entry.
No repo file was edited.

Method, in order: (1) a word-level diff (Python difflib) of every string in each topic file against the
book's text layer for its pages (765-782, 783-797, 798-818); every difference was traced either to a listed
[NEW] fixer change, a house rule (em dash, "Sub-topic" to "Topic", section headings, answer layout) or a flag
below; (2) a full read of every block for the biology; (3) every number recomputed; (4) every MCQ / AR key
checked against its question; (5) each Additional topic's introduction checked against Topics 01 to 03 as
built; (6) the four figures rendered and compared with the page images (pp. 769, 771, 777, 786) and p. 801
(the phytochrome chain) read as an image; (7) all 28 key points read against the chapter. Only after this
pass were review-R1 and review-R2 read; each flag is marked NEW (not raised before) or REPEAT (raised before
and not fixed, or fixed incompletely).

## Flags, most serious first

### 1. [NEW] Nastic movements: flexor and extensor are the wrong way round (nyctinasty), and the naming is shaky for Mimosa
- **Where:** `extras-c-f.ts`, topic E (index 7), Method, paragraph "Nyctinasty: circadian leaf movements", bullet Mechanism (book p. 805); same naming in the Seismonasty bullet, Ex E.2 (c), Practice 6 answer, and key point E2 (`keypoints-biology-11-13.ts`, topic 7, second point).
- **Says now:** "At dusk, water moves out of flexor cells and into extensor cells of the pulvinus, causing the leaf to close downward. At dawn, the reverse occurs: water moves into flexor cells, pushing the leaf upward." Seismonasty: "rapid efflux of K<sup>+</sup> and Cl<sup>−</sup> from the motor (flexor) cells on the lower side of the pulvinus". Practice 6: "Flexor cells in the pulvinus are responsible for closure."
- **What is wrong:** by the standard definition used in the pulvinus literature (Satter, Moran), extensor cells are the ones that swell when the leaf opens and flexor cells the ones that swell when it closes. So at dusk (closing) water moves INTO the flexor cells and OUT of the extensor cells; the book has it reversed. For the Mimosa touch response the cells that lose turgor are the lower-half motor cells, which several sources name extensor, not flexor; the naming varies between sources, so the safe fix is to drop the label.
- **Fix [NEW]:** Nyctinasty bullet: "<b>Mechanism:</b> Turgor changes in the pulvinus (a joint-like swelling at the base of the leaf or leaflet). At dusk, water moves out of the extensor cells and into the flexor cells of the pulvinus, and the leaf closes. At dawn, the reverse occurs: water moves back into the extensor cells and the leaf opens." Seismonasty bullet: "...this signal triggers rapid efflux of K<sup>+</sup> and Cl<sup>−</sup> from the motor cells in the lower half of the pulvinus, followed by water efflux by osmosis." Ex E.2 (c): "...from the motor cells in the lower half of the pulvinus..." Practice 6 answer: "The motor cells in the lower half of the pulvinus are responsible for closure. The primary ion efflux is K<sup>+</sup> (potassium), accompanied by Cl<sup>−</sup> (chloride). Loss of these ions makes the water potential inside these motor cells higher (less negative) than outside, so water leaves by osmosis and the cells lose turgor, producing rapid leaf closure." Key point E2: replace "Water moves between the flexor and extensor cells of the pulvinus" (this part is fine, keep) and "K<sup>+</sup> and Cl<sup>−</sup> leave the flexor cells" with "K<sup>+</sup> and Cl<sup>−</sup> leave the motor cells in the lower half of the pulvinus". Practice 6's question ("name the cells in the pulvinus") can stay.
- **Kind:** biology error (terminology). **Source:** book. **Confidence:** likely for the nyctinasty sentence; possible for the Mimosa naming.

### 2. [NEW] Ex B.1: "Soaking in warm water is not scarification" (fixer wording, applying R2 flag 12) is itself wrong
- **Where:** `topic-3-extras-a-b.ts`, topic B (index 4), Worked examples, Ex B.1 (CUET) step (book p. 796).
- **Says now:** "The hard coat physically blocks water: this is physical dormancy. Soaking in warm water is not scarification, since the coat is not cut or abraded; it works because it softens the coat and makes it permeable, so water can enter (imbibition)."
- **What is wrong:** scarification is any treatment that weakens, softens or opens the seed coat; it is done mechanically, chemically or with heat ("hot-water scarification" is a standard term). The book's "a scarification-type treatment, because it makes the coat permeable" was defensible; the new sentence states the opposite as fact, and it contradicts F Q8 (i) in the same chapter ("Scarification is a method that makes the seed coat permeable to water", marked correct).
- **Fix [NEW]:** "The hard coat physically blocks water: this is physical dormancy. Soaking in warm water softens the coat and makes it permeable, so water can enter (imbibition): a mild, heat-based form of scarification, which need not cut or abrade the coat."
- **Kind:** biology error (in fixer wording). **Source:** ours (F2 item 9). **Confidence:** likely. Earlier flag applied wrongly: R2 flag 12.

### 3. [REPEAT] Figure 13.4 panel (b): the first two bars are in the opposite order to the book
- **Where:** `lib/diagrams/biology-11-13.ts`, `b11-13-fig-13.4` (topic 2), drawn p. 786.
- **Says now:** panel (b) Long-Day Plant: bar 1 = 8 h light / 16 h dark, "no flower"; bar 2 = 16 h light / 8 h dark, "FLOWERS"; bar 3 = night break, "FLOWERS".
- **What is wrong:** the book's panel (b) prints bar 1 = 16 h light / 8 h dark "✓ FLOWERS", bar 2 = 8 h light / 16 h dark "no flower", bar 3 = night break "✓ FLOWERS". Each outcome in the app is right; only the order differs from the page. The diagram helper's report and the file header describe panel (a)'s order as if it applied to both panels. R1 flag 17 noted it; no fix and no founder decision is recorded.
- **Fix:** either redraw panel (b) in the book's order (16/8 FLOWERS, 8/16 no flower, break FLOWERS), or keep the parallel order and record it in the file header and the founder list as a layout decision: [NEW] header line "Panel (b) repeats panel (a)'s bar order (8/16, 16/8, night break) so the two panels compare row by row; the book prints its first two bars the other way round." Key point topic 2 shortcut ("in the same three cycles: it does not flower, then flowers, then flowers") is right with either choice.
- **Kind:** figure error (fidelity). **Source:** introduced in drawing. **Confidence:** certain.

### 4. [REPEAT] Key point D1 still says Pr "promotes stem elongation in darkness"; the chapter was fixed, the key point was not
- **Where:** `keypoints-biology-11-13.ts`, topic 6 (Additional D), first point, `a` (cites pp. 801-802).
- **Says now:** "...Pr maintains seed dormancy in light-sensitive seeds and promotes stem elongation in darkness".
- **What is wrong:** R2 flag 5 had the chapter say Pr is inactive and "Where Pfr is absent, as in darkness, the seedling stays etiolated"; the key point keeps the book's old claim that the inactive form actively promotes elongation, contradicting the chapter beside it.
- **Fix [NEW]:** "...Pr maintains seed dormancy in light-sensitive seeds; where Pfr is absent, as in darkness, the seedling stays etiolated (pale and elongated)".
- **Kind:** unclear or misleading (inconsistent with chapter). **Source:** key point. **Confidence:** certain.

### 5. [NEW] Assertion-reason advice says a "factually true R" can name the wrong site
- **Where:** `extras-c-f.ts`, topic F (index 8), Archetype 5 "Approach" (book p. 810); and key point F2 `why` (topic 8, second point).
- **Says now:** "The most common trap is a true A paired with a partially true but logically disconnected R. A second trap: a factually true R that names the wrong site, hormone, or direction." Key point: "In an assertion-reason item a true A can be paired with a true R that names the wrong site, hormone or direction."
- **What is wrong:** an R that names the wrong site, hormone or direction is false (that is exactly the Topic 03 AR and F Q12, keyed "A true, R false"). Telling students such an R is "true" pushes them to option (1)/(2) on these items. "The most common trap" is also an unsupported frequency claim.
- **Fix [NEW]:** Archetype 5: "One trap is a true A paired with a partially true but logically disconnected R. A second trap: an R that sounds right but names the wrong site, hormone or direction, which makes R false." Key point why: "In an assertion-reason item, an R that names the wrong site, hormone or direction is false, however familiar it sounds."
- **Kind:** unclear or misleading. **Source:** book (key point repeats it). **Confidence:** certain.

### 6. [NEW] "Auxins are indole compounds" is overgeneral: NAA and 2,4-D are not indoles
- **Where:** `topics-1-2.ts`, topic 02 (index 1): Concept intuition paragraph 3 ("Auxins are indole compounds, gibberellins are terpenes..."), Key definitions block "1. Auxins (indole compounds)." (book p. 776); key point topic 1 first point ("Auxins are indole compounds: natural IAA and IBA, synthetic NAA, 2,4-D and 2,4,5-T"); F Q1 answer "auxins are indole or phenoxy compounds" (p. 813).
- **What is wrong:** IAA and IBA are indoles; NAA is a naphthalene compound and 2,4-D and 2,4,5-T are phenoxy compounds. Listing synthetic auxins under the heading "(indole compounds)" teaches a false chemistry fact, and it also undercuts the chapter's own natural/synthetic lesson.
- **Fix [NEW]:** Concept intuition: "Natural auxins are indole compounds, gibberellins are terpenes, ..." Heading: "<b>1. Auxins</b> (natural ones are indole compounds)." Key point: "Natural auxins, IAA and IBA, are indole compounds; the synthetic ones are NAA, 2,4-D and 2,4,5-T." F Q1: "...auxins are indole compounds (natural) or synthetic compounds such as NAA and 2,4-D."
- **Kind:** biology error (overgeneral). **Source:** book. **Confidence:** certain.

### 7. [NEW] Topic 03 still says a defoliated plant "cannot flower" without the photoperiod-sensitive qualifier given to F Q12; and the AR assertion has an unlisted transcription change
- **Where:** `topic-3-extras-a-b.ts`, topic 03 (index 2): procedure A step 4 (p. 785); Worked example 4 (AR) question (p. 788).
- **Says now:** step 4: "This is why a <b>defoliated plant cannot flower</b> however ideal the day length". AR: "Assertion (A): A plant whose every leaf has been removed will not flower even under a fully inductive photoperiodic stimulus."
- **What is wrong:** (a) R2 flag 2 qualified the same claim in F Q12 to "a photoperiod-sensitive plant"; Topic 03 keeps the unqualified form (a day-neutral plant, or one already induced, can flower without leaves). (b) The book prints "under a fully inductive photoperiod"; "photoperiodic stimulus" is a silent word change not in new-text-F1.
- **Fix [NEW]:** step 4: "This is why a <b>defoliated photoperiod-sensitive plant cannot be induced to flower</b> however ideal the day length: ..." AR assertion: "Assertion (A): A photoperiod-sensitive plant whose every leaf has been removed will not flower even under a fully inductive photoperiod." (key (3) unchanged).
- **Kind:** unclear or misleading / transcription slip. **Source:** book (a), transcription (b). **Confidence:** certain for (b), likely for (a).

### 8. [NEW] ABA's discovery: NCERT names three inhibitors, the chapter two
- **Where:** `topics-1-2.ts`, topic 02 (index 1), Key processes B, ABA bullet (p. 777).
- **Says now:** "found independently as a growth-inhibitor (“abscisin II”) and a dormancy-inducer (“dormin”); the two names were merged into abscisic acid."
- **What is wrong:** NCERT reports three inhibitors, inhibitor-B, abscission II and dormin, later shown to be chemically identical. A NEET item built on NCERT's line ("three different inhibitors") would be missed.
- **Fix [NEW]:** "<b>ABA:</b> found independently as three inhibitors, inhibitor-B, abscission II (abscisin II) and dormin; all three proved to be the same chemical, named abscisic acid."
- **Kind:** biology error (incomplete vs NCERT). **Source:** book. **Confidence:** likely (NCERT wording from memory; no NCERT copy in the repo to cite).

### 9. [NEW] The fixer's "(wheat, sugar beet and barley vary by variety)" does not say what varies
- **Where:** `topic-3-extras-a-b.ts`, topic 03 (index 2), Key definitions, LDP examples (p. 784); F1 item 22.
- **Says now:** "<b>Examples:</b> spinach (<i>Spinacia</i>), radish, lettuce, wheat, sugar beet, spring barley (wheat, sugar beet and barley vary by variety), <i>Hyoscyamus niger</i> (henbane)."
- **What is wrong:** a student cannot tell whether "vary" means some varieties are not long-day, or that winter varieties also need cold. The real point is the latter: the same crops appear below as vernalisation-requiring (winter wheat and barley, sugar beet), which is not a contradiction.
- **Fix [NEW]:** "(wheat, barley and sugar beet also appear below under vernalisation: their winter varieties need a cold spell first, then long days)".
- **Kind:** unclear (fixer wording). **Source:** ours. **Confidence:** likely.

### 10. [NEW] "A so-called short-day plant might actually need more hours of light than a long-day plant"
- **Where:** `topic-3-extras-a-b.ts`, topic 03, Concept intuition paragraph 5 (p. 783); key point topic 2 mistake `why`.
- **What is wrong:** a short-day plant never "needs" a minimum of light hours; it has a maximum. The true point is that its critical day length can be longer than a long-day plant's, so it may flower under a day that is long enough for some long-day plants.
- **Fix [NEW]:** "...not absolute hours: a so-called short-day plant can flower under a longer day than some long-day plants need." Key point why: "A so-called short-day plant can flower under a longer day than some long-day plants need."
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** likely.

### 11. [NEW] Shared introduction: "(A and B also go beyond the NCERT text)" implies D and E do not (R2 flag 15, applied incompletely)
- **Where:** `topic-3-extras-a-b.ts`, topic A (index 3), Introduction paragraph 1 (p. 791).
- **Says now:** "...where it returns to something Topics 01 to 03 already teach, it builds on it (A and B also go beyond the NCERT text)."
- **What is wrong:** C is marked enrichment in the same sentence, and the D and E introductions each say their topic goes beyond NCERT. Naming only A and B tells the reader D and E are inside NCERT.
- **Fix [NEW]:** "...it builds on it (all five go beyond the NCERT text)."
- **Kind:** unclear (claim about the chapter). **Source:** ours (F2 item 1). **Confidence:** certain. Earlier flag applied incompletely: R2 flag 15.

### 12. [NEW] B introduction says the chapter gives no breaking methods; Topic 03 now names stratification and Topic 02 gibberellin
- **Where:** `topic-3-extras-a-b.ts`, topic B (index 4), Introduction (p. 794).
- **Says now:** "...but it does not give the types of dormancy, the germination mechanism or the breaking methods."
- **What is wrong:** Topic 02 Practice 3 answers "break the dormancy of a freshly harvested seed" with gibberellin, and Topic 03 Pitfall 3 (F1 item 25) now names stratification as the cold treatment that breaks seed dormancy.
- **Fix [NEW]:** "...but it does not give the types of dormancy or the germination mechanism, and it names breaking methods only in passing (gibberellin in Topic 02, stratification in a Topic 03 pitfall)."
- **Kind:** false "never covers" claim. **Source:** ours (F2 item 5, made untrue by F1 item 25). **Confidence:** certain.

### 13. [NEW] Exam-frequency claims and superlatives that survived the fixes
- **Where and fix [NEW]:**
  - Topic 01 Exam Relevance (p. 765): "<b>NEET</b> almost every year (the book’s estimate...) hides one trap here" -> "<b>NEET</b> often hides one trap here (the book’s estimate from past papers, not official figures)", matching Topic 02's fixed line. Same paragraph: "The toughest <b>NEET assertion-reason</b> items exploit..." -> "Hard <b>NEET assertion-reason</b> items exploit...".
  - B procedure title (p. 795): "This is the most testable mechanism:" -> "The mechanism, step by step:".
  - F "PGR dominance is real and consistent." (p. 808) -> "<b>PGR questions dominate.</b>" (the following sentences already carry the estimate label at the top of the part).
  - F Archetype 5: "The most common trap" (see flag 5).
- **Kind:** exam-frequency claim / superlative. **Source:** book. **Confidence:** likely (house rule, not biology).

### 14. [NEW] Two fixer additions in F overclaim or no longer attach to anything
- **Where:** `extras-c-f.ts`, topic F: "A Graded Practice Set" lead (p. 813) and "Two Ideas Worth Drilling" (p. 818).
- **Says now:** "Answers are checked against the chapter content and NCERT." and "Two ideas are worth rehearsing until they are automatic (the book’s estimate from past papers, not official figures)."
- **What is wrong:** (a) "and NCERT" is our assertion that every answer was verified against NCERT (R2 flag 23 asked for it); several answers rest on non-NCERT content (Q8 Richmond-Lang name, Q12's florigen/effector wording). Keep the book's sentence. (b) after the superlative was removed, the estimate label qualifies nothing.
- **Fix [NEW]:** (a) "Answers are checked against the chapter content." (b) "Two ideas are worth rehearsing until they are automatic."
- **Kind:** unclear (fixer wording). **Source:** ours (F2 items 21, 22). **Confidence:** likely. Earlier flag questioned: R2 flag 23.

### 15. [NEW] Afterripening stated as ABA "broken down" as fact (chapter); the key point already softens it
- **Where:** `topic-3-extras-a-b.ts`, topic B: Ex B.3 step and answer (p. 796), Practice 3 answer (p. 797).
- **Says now:** "During dry storage (afterripening), ABA is gradually broken down and the GA∶ABA ratio rises." / "ABA is slowly catabolised".
- **What is wrong:** afterripening is explained as a fall in ABA content and, as much, a fall in the seed's sensitivity to ABA (and a rise in sensitivity to GA); "ABA is degraded" as the whole mechanism is overstated. The key point already says "the book explains it by ABA falling".
- **Fix [NEW]:** Ex B.3 step: "During dry storage (afterripening), ABA content falls and the seed becomes less sensitive to ABA, so the GA∶ABA balance shifts toward GA." Answer: "Afterripening; during dry storage ABA content and ABA sensitivity fall, shifting the GA∶ABA balance toward GA and breaking physiological dormancy." Practice 3: "Afterripening: during dry storage ABA content falls (and the seed becomes less sensitive to ABA), raising the GA∶ABA ratio, so the seed loses dormancy without any other treatment."
- **Kind:** biology (overstated mechanism). **Source:** book. **Confidence:** possible.

### 16. [NEW] Smaller points (low)
- Topic 02 Key definitions, Gibberellins Application (p. 776): "enlarges fruit (e.g. apple)". NCERT: gibberellins make apple fruits elongate and improve their shape. Fix [NEW]: "makes fruits such as apple elongate and improves their shape". Kind: number/NCERT wording. Confidence: likely.
- Topic 02 Concept intuition (p. 775): "a few molecules can swing the fate of a whole organ" is hyperbole. Fix [NEW]: "a tiny amount can swing the fate of a whole organ". Confidence: possible.
- C Practice 1 (p. 799) "on which gibberellin acts to break seed dormancy in germinating cereals" and B Practice 6 (p. 796) "used commercially to break dormancy in barley for the malting process": GA in the aleurone mobilises reserves for germination and speeds malting; it is not the dormancy-breaking step. Fix [NEW]: C Practice 1 "Name the tissue on which gibberellin acts to mobilise food reserves in germinating cereals, and name the enzyme it induces." B Practice 6 "Which PGR is used commercially to speed up malting of barley, and which enzyme does it induce?" Confidence: possible.
- C2 step 3 and Ex C.2 step 2, key point C2 (pp. 798-799): "ABA binds to ABA receptors in guard cell membranes". The ABA receptors now known (PYR/PYL) are soluble proteins inside the cell. Fix [NEW]: "ABA binds to ABA receptors in the guard cells." Confidence: possible (enrichment only).
- D circadian paragraph (p. 802): "Phytochrome acts as the set signal that entrains" -> [NEW] "Phytochrome is one of the light signals that entrain" (cryptochromes also entrain). Confidence: possible.
- B Ex B.2, C1 (pp. 796, 798): the embryo's gibberellin is called GA<sub>3</sub>; in barley the native active gibberellin is mainly GA<sub>1</sub>, GA<sub>3</sub> being the commercial form. Leave as printed (NEET uses GA<sub>3</sub>) or add [NEW] "(GA<sub>3</sub> is the form used commercially)". Confidence: possible.

## Rulings on R1 and R2 (after my own pass)
- Applied correctly and verified in the files: R1 flags 1-8, 10-16, 18, 19; R2 flags 1-11, 13, 14, 16-22, 25 and the key-point items. The AR fourth options are now "A false, R true" everywhere (Topic 01, 02, 03 AR, F Archetype 5, Q7, Q12).
- Applied wrongly: R2 flag 12 (warm water "is not scarification": flag 2 above).
- Applied incompletely: R2 flag 15 (flag 11); R2 flag 5 (chapter fixed, key point D1 not: flag 4); R2 flag 2 (F Q12 qualified, Topic 03 step 4 and AR not: flag 7).
- Questioned: R2 flag 23 ("and NCERT": flag 14a); R1 flag 9's wording "vary by variety" (flag 9).
- Not acted on: R1 flag 17 (Fig 13.4 (b) order: flag 3).
- R2 flag 7 (phytochrome chain p. 801): ruling. The page image shows a typeset reaction line (Pr, arrow labelled "red light (660 nm)", Pfr, arrow labelled "far-red light (730 nm)", Pr), not a drawing. The two-line text in the app ("Pr → Pfr: red light (660 nm). / Pfr → Pr: far-red light (730 nm), and slowly in darkness.") carries the same content and adds dark reversion. No figure is needed; b11-13-D-d1 should be dropped from the founder's open list unless the founder wants a picture.
- R2 flag 9 (ABI3/ABI5 sentence): the wording is correct (ABI3 and ABI5 are ABA-signalling transcription factors that hold germination genes off in the seed); keep or delete is a style call.

## Counts verified
- Topics 01, 02, 03: 4 worked examples, 5 practice items, 4 MCQs, 4 pitfalls and 1 pro-tip each, as the book. A: 4 examples, 6 practice; B: 4, 6; C: 3, 6; D: 3, 6; E: 4, 6; F: 6 archetype examples, 10 trap rows, 12 graded questions. All match the book.
- Every MCQ / AR / match key checked against its question (12 chapter MCQs, 4 AR items in topics, F's 6 representative items and 12 graded questions, B.4 and the two match items): all correct and unique.
- Numbers recomputed: T01 Ex1 (AGR 2.0 cm day<sup>−1</sup>, RGR 66.7%, r = ln(11/3)/4 = 32.5% day<sup>−1</sup>), Ex3 (100%, 10%), Practice 3 (13.5 cm); A.1 (25 days), A.2 (6.93, 23.03), A.3 (30% and 7.5% per 5 days, 6% and 1.5% day<sup>−1</sup>, 4 times; log form 18.3% vs 6.4% day<sup>−1</sup>, same ranking), A.4 (13.86, 41.58), A practice (20 days; 3.47 h, 11.5 h; 8.33% vs 0.83% day<sup>−1</sup>, log form 23.1% vs 4.4%; 5e<sup>2</sup> = 36.95 g, 31.95 g; ln 20/0.3 = 9.99); T03 Practice 5 (14 > 13 LDP, 12 < 13 SDP); F Archetype 6 (8 h < 10 h); F Q4 (45 and 5 cm<sup>2</sup> day<sup>−1</sup>; 450% and 10%). All right.
- Additional-topic introductions A to E checked against Topics 01 to 03 as built: A, C, D, E true as now worded; B and the shared intro need flags 11 and 12.
- All 28 key points read against the chapter: correct except flags 1, 4, 5, 6, 10 above.

## Figures checked
- b11-13-fig-13.1 vs p. 769: line, sigmoid, four phase labels, legend, axes and caption match.
- b11-13-fig-13.2 vs p. 771: every box, arrow and label match; caption matches p. 770.
- b11-13-fig-13.3 vs p. 777: title, subtitle, arc, beam tilt, both boxes and caption match.
- b11-13-fig-13.4 vs p. 786: panel (a) matches; panel (b) bar order differs (flag 3); flash width and position (15.5-16.5 h), outcomes, legend, box and caption match.
- p. 801 phytochrome chain: typeset text, not a drawing (ruling above).
- Pages 765-818 otherwise hold no drawings (diff of the text layer shows only the four figure pages carry figure labels).

## What I could not check
- No Android or iPhone rendering: SVGs were rendered with qlmanage (no app fonts) only. Note: to render them I ran the read-only diagram dump test once (`DUMP_DIAGRAMS=<scratch> npx jest lib/diagrams/__tests__/dump`), as the review brief describes; it writes only to the scratchpad. No tsc, no other jest, no git.
- No NCERT copy is in the repo; every "NCERT says" above is from my knowledge of the rationalised Class 11 text (flags 6, 8 and 16 depend on it).
- The flexor/extensor convention (flag 1) differs between sources for Mimosa; the nyctinasty reversal follows the standard Samanea definition.

## Summary
16 flags (flag 16 groups six small points): 14 NEW, 2 REPEAT. Serious (would teach a wrong fact or cost a mark): flags 1, 2, 4, 5, 6, 7; the rest are fidelity, clarity, claims about the chapter and house-rule items. The chapter is otherwise faithful to the book page for page, every key and number is right, and the fixers' wording is sound apart from flags 2, 9, 11, 12 and 14.
