# Biology 12 Chapter 11 (Organisms and Populations): review R3 (third expert review, Opus), whole chapter as it now stands

Share: content/textbooks/bio-12-11/topics-1-3.ts, topic-4-extras-a-c.ts, extras-d-f.ts (Topics 01 to 04, Additional A to F), lib/diagrams/biology-12-11.ts (6 figures), lib/revise/keypoints-biology-12-11.ts (32 points). Book bio12.pdf pp. 601 to 655. Nothing in the repo edited; no tsc, jest or git run.

Method (own pass first, before reading R1/R2): every string of the three topic files and the key points loaded from the TS source (sucrase transform, no tsc) and diffed word by word against the page-tagged book text for each topic's page range; every non-equal stretch read (all were deliberate edits listed in new-text-F1/F2, em-dash or label changes, or the book's math fonts that the text layer drops). Page images viewed for pp. 605, 610, 613, 618, 619, 621, 622, 626, 629, 643, 644 and the Q10 text chart on p. 654 (text layer). The six drawings rendered to SVG from the diagram file itself (a node loader, not jest) and compared with the book pages. Every number recomputed. Then new-text-F1.md and new-text-F2.md checked line by line in the files. Only then R1 and R2 read, and each flag marked NEW or REPEAT.

Format: Where / says now / what is wrong / fix ([NEW] = our wording) / kind / source / confidence / NEW or REPEAT.

## FLAGS, most serious first

1. **Topic 04, 4.2 "Diagnostic features" Competition bullet and table row; Topic 04 Key point (topic 3 remember 1 says only "the weaker species is hurt more").**
   Says now: "Competition: two species need the same resource that is in short supply; the fitness of the weaker is usually depressed by the stronger's presence." Table: "Both usually harmed by a shared limited resource (one may suffer far more)".
   Wrong: NCERT's competition section makes two points this chapter never gives, and both are classic NEET statement traps: (i) totally unrelated species can compete for the same resource (flamingos and resident fishes for zooplankton in South American lakes; the Abingdon tortoise and introduced goats on the Galapagos), and (ii) resources need not be limiting for competition to occur: in interference competition one species lowers the other's feeding efficiency even when food and space are plentiful. As written, a student will mark "competition occurs only when resources are limited" as true. (Gause's principle needing a limiting resource is correct and stays.)
   Fix [NEW], append to the Competition bullet: "NCERT adds two points: totally unrelated species can also compete for the same resource (flamingos and resident fishes compete for zooplankton in some shallow South American lakes; on the Galapagos, introduced goats drove out the Abingdon tortoise by out-browsing it), and resources need not be limiting for competition to occur: in interference competition one species lowers the other's feeding efficiency even when food and space are plentiful." Table row [NEW]: "Both usually harmed, through a shared resource or interference (one may suffer far more)".
   Kind: biology (incomplete, contradicts NCERT). Source: book. Confidence: likely (NCERT wording from memory; the flamingo and Abingdon tortoise examples and the interference sentence are NCERT's). NEW.

2. **Figure 11.6, Amensalism panel (lib/diagrams/biology-12-11.ts; book p. 629).**
   Says now: "mould ⊣ microbe" with "(−, 0)" under it. Every other panel lists species A first and B second, matching the sign pair and the 4.2 table (predator +, prey −; tick +, dog −; orchid +, tree 0). Here the first-named partner, the mould, is the unaffected one and the microbe is harmed, so the pair should read (0, −) for the order drawn; the text (4.2 table: Species A −, Species B 0; bullet "Penicillium secreting penicillin that kills bacteria, while the mould is unaffected") makes the harmed one species A.
   Fix [NEW]: swap the two labels so the harmed partner comes first, "microbe" on the left and "mould" on the right, with the blocking bar at the microbe end (the line runs from the mould to a bar in front of the microbe). Caption, signs and sub-label "One harmed, other unaffected" unchanged. (If the drawing cannot be mirrored, change only the labels' order and leave the bar where it is; the bar then meets the microbe from the left.)
   Kind: figure error. Source: book (drawn as printed). Confidence: likely. NEW (R1 checked the pairs and missed the order).

3. **Topic 02, 2.2 table Regulate row; 2.3 "Why so few species regulate"; Pitfall 2; MCQ 1 solution (fixer F1 wording from R1 flag 7).**
   Says now: "Most birds and mammals; humans sweat in summer ..."; "The best-known regulators (birds and mammals)"; "Birds and mammals are the best-known regulators".
   Wrong: NCERT's sentence is "all birds and mammals, and a very few lower vertebrate and invertebrate species are indeed capable of such regulation (thermoregulation and osmoregulation)". "Most birds and mammals" drops NCERT's wording and implies some birds or mammals cannot regulate at all; a student who learns "most" will lose the NCERT-line question. Torpor and hibernation are a nuance to put beside the NCERT line, not a replacement (founder rule: keep NCERT wording, add the nuance next to it). It also drops "a very few lower vertebrates and invertebrates", which the old MCQ solution had.
   Fix [NEW] table: "All birds and mammals, and a very few lower vertebrates and invertebrates (NCERT); some let body temperature fall in torpor or hibernation. Humans sweat in summer (evaporative cooling), shiver in winter (heat from muscle activity)". 2.3 [NEW]: "Regulators (NCERT: all birds and mammals, and a very few lower vertebrates and invertebrates) pay a steep, continuous energy bill ...". MCQ 1 solution [NEW]: "Roughly 99% of animals and nearly all plants conform (NCERT's figure); all birds and mammals, and a very few others, regulate." Pitfall 2 [NEW]: "Birds and mammals regulate (NCERT: all of them, and a very few other animals); the vast majority of organisms conform."
   Kind: NCERT fidelity / biology. Source: introduced by the fix (R1 flag 7). Confidence: likely. REPEAT of R1 7 in the sense that R1's fix is applied wrongly (see "Earlier flags applied wrongly").

4. **Topic 02, 2.1 "Limiting conditions & assumptions"; key point topic 1 remember 1 `why`.**
   Says now: "most organisms are partial regulators at best, regulating against mild stress and conforming when it becomes extreme" and KP why "Most organisms are partial regulators at best, so read regulate and conform as the two ends of a range."
   Wrong: contradicts the same topic's table and MCQ ("~99% of animals and nearly all plants are conformers"); NCERT says some species regulate only over a limited range and conform beyond it (the partial regulators), not most organisms.
   Fix [NEW] 2.1: "“Regulate” in the strict sense means holding the internal environment constant; many organisms are only partial regulators, regulating against mild stress and conforming when it becomes extreme." KP why [NEW]: "Some species regulate only over a limited range and conform beyond it (partial regulators), so read regulate and conform as the two ends of a range."
   Kind: overgeneral / internal contradiction. Source: book. Confidence: likely. NEW (writer 1 noted it as low under item 11; neither review flagged it and the key-point header keeps it on purpose).

5. **Additional F, Graded Q8 (Level 3, barnacles; book p. 653).**
   Says now: "... Balanus (the superior competitor) excludes Chthamalus from the lower intertidal zone. When Balanus is experimentally removed, Chthamalus expands into the vacated zone. This demonstrates: (a) competitive exclusion (b) competitive release ..." key (b).
   Wrong: two options are defensible. The stem itself describes exclusion, and NCERT presents Connell's barnacles as its example of competitive exclusion ("Balanus dominates the intertidal area, and excludes the smaller barnacle Chthamalus"); this chapter's own Topic 04 and Additional C call the removal result proof that "the exclusion was competitive". A student following NCERT picks (a).
   Fix [NEW] stem end: "When Balanus is experimentally removed, Chthamalus expands into the vacated zone. This expansion of Chthamalus after its rival is removed is called:" Key (b) and solution unchanged.
   Kind: wrong/ambiguous MCQ key. Source: book. Confidence: likely. NEW.

6. **Topic 03, 3.7 Pro-Tip (fixer F1 wording, R1 flag 21).**
   Says now: "For exponential numericals, compute rt first and look for a clean exponent (rt = 1, 2, ln 2 …). Questions often choose r and t so that the exponent comes out clean (rt = 1, 2, ln 2 …); if your exponent is ugly, recheck your arithmetic before reaching for a calculator."
   Wrong: the fix repeated the bracket and the idea; the same parenthesis appears twice in two sentences.
   Fix [NEW]: "Pro-Tip (speed): For exponential numericals, compute rt first and look for a clean exponent (rt = 1, 2, ln 2 …). Questions are often set so that the exponent is a value you can evaluate mentally; if yours is ugly, recheck your arithmetic before reaching for a calculator."
   Kind: transcription (our wording). Source: introduced by the fix. Confidence: certain. NEW (R1 21 applied wrongly).

7. **Additional F, Graded Q10 (Level 4, age pyramids; book p. 654) (writer 3's wording, allowed by R2).**
   Says now: "The figure below shows three age pyramids. Each bar is one age group. Which population is declining? (Bar lengths, counted in blocks of the book's text chart:) Population (i): pre-reproductive 10, reproductive 6, post-reproductive 2 ..."
   Wrong: there is no figure below, and "the book's text chart" means nothing to a student in the app. The counts themselves are right (checked on the text layer: (i) 10, 6, 2; (ii) 7, 8, 6; (iii) 5, 9, 7) and the key (c) is right.
   Fix [NEW]: "Three age pyramids have the bar lengths below (each bar is one age group; pre-reproductive is the base). Which population is declining? Population (i): pre-reproductive 10, reproductive 6, post-reproductive 2. Population (ii): pre-reproductive 7, reproductive 8, post-reproductive 6. Population (iii): pre-reproductive 5, reproductive 9, post-reproductive 7." (Better still, if the founder wants it: draw the three pyramids as a figure with these widths.)
   Kind: unclear (our wording). Source: transcription. Confidence: certain. NEW.

8. **Additional E, "Interpreting human age pyramids", Stationary bullet; against Practice E2 answer and the stage table.**
   Says now: "Stationary pyramid (roughly rectangular): Balanced age distribution, moderate birth and death rates. Stage 3 or 4."
   Wrong: the stage table puts Stage 4 at low rates (birth ~12 to 15, death ~8 to 10) and Practice E2's answer says "low and balanced birth and death rates"; "moderate" contradicts both.
   Fix [NEW]: "Stationary pyramid (roughly rectangular): balanced age distribution, low birth and death rates. Stage 3 or 4. Many developed countries in earlier decades."
   Kind: inconsistency. Source: book. Confidence: likely. NEW.

9. **Additional F, Graded Q12 solution (Cuscuta) (F2 wording from R2 flag 19).**
   Says now: "Cuscuta draws all nutrition through haustoria from the host's vascular tissue. ... The loss of chlorophyll and leaves is evidence of its obligate parasitic lifestyle: it almost entirely no longer needs to photosynthesise because it steals the host's carbohydrates."
   Wrong: "almost entirely no longer" is not English, and "draws all nutrition" contradicts the hedge.
   Fix [NEW]: "Cuscuta draws its food through haustoria from the host's vascular tissue. The host is harmed; Cuscuta benefits: (+, −). Note: this is a total stem parasite, not an epiphyte (which would be commensalism). The loss of leaves and of (almost all) chlorophyll is evidence of its obligate parasitic lifestyle: it no longer needs to photosynthesise because it takes the host's food."
   Kind: unclear (our wording). Source: introduced by the fix. Confidence: certain. REPEAT (R2 19, applied awkwardly).

10. **Additional F, "Key Points to Remember" 2 (F2 wording).**
    Says now: "cattle egret and sea anemone–clownfish (commensalism, often treated as mutualism)".
    Wrong: reads as if the cattle egret pair were also often treated as mutualism; the chapter's own trap row and Topic 04 MCQ 2 say the egret is commensalism, not mutualism.
    Fix [NEW]: "cattle egret and sea anemone–clownfish (commensalism; the clownfish pair is often treated as mutualism)".
    Kind: unclear (our wording). Source: introduced by the fix. Confidence: likely. NEW.

11. **Additional B, Lotka–Volterra equations; key point topic 5 remember 2.**
    Says now: "dN/dt = rN − aNP (prey), dP/dt = baNP − dP (predator), where a is the predation rate constant, b is the conversion efficiency (prey turned into predator), and d is the predator death rate."
    Wrong: the chapter already uses b and d for the per capita birth and death rates (r = b − d, stated in A's introduction two screens earlier); here b is a conversion efficiency and d a death rate of a different population. A student substituting r = b − d gets nonsense.
    Fix [NEW]: "dN/dt = rN − aNP (prey), dP/dt = caNP − mP (predator), where a is the predation rate constant, c is the conversion efficiency (prey turned into predator), and m is the predator death rate." Same letters in key point topic 5 ("dP/dt = caNP − mP").
    Kind: notation / unclear. Source: book. Confidence: possible. NEW.

12. **Additional E, Introduction (F2 wording from R2 flag 7d).**
    Says now: "... but it says nothing about human populations: the mechanism of demographic transition, the pyramids of real countries or India's demographic position."
    Wrong: Topic 03 does touch humans (Malthus's warning about geometric growth, "one person cannot have a birth rate ... but a city can"), so "says nothing" is again a "the chapter never covers" overclaim, the very class R2 corrected.
    Fix [NEW]: "The chapter shows the J-shaped and S-shaped growth curves and reads age pyramids in general (Topic 03, Figure 11.3: broad base expanding, bell stable, urn declining), but it touches human populations only in passing (Malthus, in Topic 03): it does not cover the mechanism of demographic transition, the pyramids of real countries or India's demographic position."
    Kind: false "never covers" claim. Source: introduced by the fix. Confidence: possible. NEW.

13. **Additional C, Introduction (F2 wording from R2 flag 7c).**
    Says now: "It does not develop ... what Connell's removal experiment showed, or the ways species partition resources (such as MacArthur's warblers)."
    Wrong (small): Topic 04 does name ways of partitioning ("different feeding times or foraging zones"), and it already names Connell's case. True part: the warblers and the full axes (spatial, temporal, dietary, behavioural) are new here.
    Fix [NEW]: "... what Connell's removal experiment showed, or the full set of ways species partition resources, with MacArthur's warblers as the classic case."
    Kind: "never covers" claim, slight. Source: introduced by the fix. Confidence: possible. NEW.

14. **Additional A, Introduction paragraph 1 (the shared introduction).**
    Says now: "This section adds five topics that NEET, CUET and CBSE questions draw on beyond the main chapter text: ..."
    Wrong: an unlabelled exam claim; the Allee effect, Lotka–Volterra, Holling's responses and the demographic transition are beyond the NCERT chapter, and NEET's own syllabus is NCERT. R2 flag 8 cut the other A-intro claims but left this one.
    Fix [NEW]: "This section adds five topics that go beyond the main chapter text (and beyond NCERT); the book judges that NEET, CUET and CBSE questions draw on them (its estimate from past papers, not official figures): ..."
    Kind: exam-frequency claim. Source: book. Confidence: possible. NEW.

15. **Key points, variables upright in plain-text fields** (lib/revise/keypoints-biology-12-11.ts).
    Says now: topic 2 remember 2 `why` "The factor (K − N) over K is the share of capacity still unused: near 1 when N is small, 0 at K."; topic 4 remember 2 `why` "The brake (K − N) over K falls from 0.80 to 0.65 ..."; questions "... and what is K?", "... at r = 0.2 per day ...", "... the doubling time and r?", "... half of K ...".
    Wrong: the chapter's notation rule is italic N, K, r; these six fields print them upright while their `a` fields use <i>. (Other Biology key-point files use <i> in `q` and `why`.)
    Fix [NEW]: wrap each variable in <i> (e.g. "The factor (<i>K</i> − <i>N</i>) over <i>K</i> ..."); leave the `say` memory line plain, as designed.
    Kind: notation. Source: key points. Confidence: certain (that they are upright); possible (that q/why render markup, by precedent). NEW.

16. **Topic 04, Worked Q1 (b), and Additional C, Example C.2.**
    Says now: "two species of paramecium in one flask"; "Two species of paramecium (Paramecium caudatum and Paramecium aurelia)".
    Note: lower-case roman "paramecium" as a common noun is acceptable English and is the book's; NEET texts usually write the genus, "two species of Paramecium". Optional fix [NEW]: "two species of <i>Paramecium</i>" in both places.
    Kind: nomenclature (style). Source: book. Confidence: possible. NEW.

17. **Additional E, Expanding pyramid bullet against key point topic 8 remember 2.**
    Says now: text "This is a Stage 1 and 2 pattern."; key point "A broad base with a narrow top is expanding (a Stage 2 pattern)".
    Fix [NEW] key point: "(a Stage 1 and 2 pattern)". Kind: inconsistency (minor). Source: fix applied to text only. Confidence: certain. NEW.

## New wording checked (new-text-F1.md, new-text-F2.md)
Every listed [NEW] text was found in the files as listed. Checked for truth, plainness and overclaiming: all correct except flags 3 (Regulate "Most"), 6 (Pro-Tip duplicate), 9 (Cuscuta), 10 (KP 2), 12 (E intro), 13 (C intro), and the R2-allowed Q10 wording (flag 7). Specific confirmations:
- Corrected logistic time formula in A: t = (1/r) ln[N_t(K − N_0)/(N_0(K − N_t))] re-derived; at N_t = K/2 it gives (1/r) ln((K − N_0)/N_0). Practice A3 check: 10 ln 9 = 21.97 days. Correct.
- Salinity anchors (inland < 5, sea 30–35, hypersaline lagoons > 100) and the temperature anchor (below 0 °C to above 50 °C; springs and vents above 100 °C) match NCERT.
- Altitude (three changes), antifreeze proteins, blubber as morphological, camel's hump stores fat, "(the proportion of prey eaten stays constant)" for Type I, Japan and Germany beyond Stage 4, E.2 15–64, E4 momentum answer, (1 − N/K) as the unused fraction (not environmental resistance), Q11 R wording, UV and light statements, Yellowstone wording, Semibalanus, lower/upper shore, Gause as complete competitors with NCERT's "closely related, limiting resources" beside it: all correct and plain.
- "Bears (winter torpor)" and "many fish and insects of temperate habitats" (founder decisions): both true; I would keep both.
- "roughly 2005–2055 on most estimates": acceptable (UNFPA quotes about 2005–06 to 2055–56). "India passed 1 billion in about 2000": correct. "UN estimate for 2023 about 1,430 million": correct (about 1,429 million).

## Earlier flags I believe were applied wrongly
- R1 flag 7 (Regulate row "Most birds and mammals", "best-known regulators"): departs from NCERT's "all birds and mammals, and a very few lower vertebrates and invertebrates". Keep NCERT's line and put torpor beside it (flag 3).
- R1 flag 21 (Pro-Tip): the new sentence duplicates the first (flag 6).
- R2 flag 19 / writer 3 item 11 (Cuscuta): applied as "almost entirely no longer needs", ungrammatical and inconsistent with "draws all nutrition" (flag 9).
- R2 flag 7d (E introduction): replaced one overclaim with another, "says nothing about human populations" (flag 12).
- Writer 3 item 6 / R2 exceptions (Q10 "figure below" plus "the book's text chart"): allowed by R2 but unsuitable for a student (flag 7).
Everything else from R1 (flags 1 to 28) and R2 (flags 1 to 21) that was applied is applied correctly as far as I checked.

## Counts verified
- Topics 01 to 04: 8 parts each; 4 worked questions, 5 practice items, 4 MCQs, 4 pitfalls, 1 Pro-Tip each; cheat sheets present with mnemonics as aids. Additional: A 4 examples + 6 practice; B 3 + 5; C 3 + 5; D 2 + 4; E 3 + 6 and the 4-row stage table; F 5 parts, distribution table 5 rows (30 + 25 + 20 + 20 + 5 = 100 %), traps table 8 rows, 6 worked representatives, Q1 to Q12, 3 key points. Block totals: 37 worked (`ex`), 16 MCQs, 10 practice blocks, 9 tables, 6 figures, 32 key points.
- Every MCQ key is the only correct option: T01 Temperature, functional role, euryhaline, cascade; T02 plants and most animals, migration, behavioural, physiological; T03 (B + I) > (D + E), unlimited resources, K/2, b − d; T04 predation and parasitism, commensalism, resources are limited, sexual deceit. Every assertion-reason item's fourth option is "A false, R true"; every A-R key checked (C5 (c) correct; the rest (a)).
- Numbers recomputed: 800 + (220 − 140) = 880; 60 e^2 = 443.4 → 443; 0.1 × 500 × 0.75 = 37.5 and 0.1 × 1000 × 0.5 = 50 ind. yr⁻¹ (errata entry applied, unit in `ans`, no cheat-sheet repeat); 15/25 = 0.6; ln 2/0.69 = 1 h; ln 20/0.3 = 9.99 h; ln 8/6 = 0.347 h⁻¹ and 0.693/0.347 = 2.0 h; 20 ln 49 = 77.84 yr; brakes 0.80 and 0.65, ln 1.75 = 0.560; 5 ln 8 = 10.4; ln 2/0.5 = 1.386 h⁻¹; 10 ln 9 = 21.97; ln 8/8 = 0.260 h⁻¹; 0.693/0.05 = 13.86; 200 e^3 = 4020; Allee signs (negative below A, positive A to K, negative above K); Holling II and III forms; key point 28 (38 − 12 = 26, 12 − 10 = 2 per 1000). All correct.
- Scientific names: every genus and species name in the three topic files, the key points and the diagram file is inside <i>.
- "The chapter never covers" claims in A to E checked against Topics 01 to 04 as built (no Allee, top-down/bottom-up, Lotka–Volterra, MacArthur, Holling, demographic transition, AGR in the topics): A, B, D true; C and E slightly overclaim (flags 12, 13).

## Figures checked (rendered from lib/diagrams/biology-12-11.ts, compared with the book page)
- 11.1 (p. 605): five zones at 0–20–40–60–80–100, both curves peak 1.0 at 50, labels and note match. OK.
- 11.2 (p. 613): four response boxes with the book's descriptions, hub, three adaptation types and examples. OK.
- 11.3 (p. 618): expanding/stable/declining with the book's widths, pre-reproductive at the base. OK.
- 11.4 and 11.5 (p. 621): exponential reaches K past t = 6, logistic 95.5 at t = 12; K/2 = 50 marked at t ≈ 5.9; lag, log, deceleration, asymptote labels. Variables are italic in the source (the Mac render lacks the font). OK.
- 11.6 (p. 629): five panels OK; Amensalism order wrong (flag 2).
- Captions: all six word for word with the book.
- Tables against page images: 2.2 responses and dormancy (p. 610), growth-model table (p. 619), worked Q4 boxes (p. 622), six-interaction table (p. 626), E stage table (pp. 643–644). OK.

## Could not check
- On-device rendering (iPhone or Android) of the stacked fractions, the nested fraction in A's logistic formula, and the variables in the figures; the figure renders were made with the Mac's stand-in fonts.
- NCERT wording quoted from memory (no NCERT copy to hand): "all birds and mammals, and a very few lower vertebrate and invertebrate species", the flamingo/fish and Abingdon tortoise competition examples, interference competition, "shrews and humming birds". Confidence likely, not certain.
- Page images not viewed for pp. 602–604, 606–609, 611–612, 614–617, 620, 623–625, 627–628, 630–642, 645–653, 655 (text layer used; it is clean for prose, and the scrambled math was checked against the page images listed above).
- Whether `q` and `why` fields of key points render <i> on the device (flag 15 assumes they do, as in other Biology key-point files).

## Overall
The transcription is faithful and the arithmetic is right throughout; the two earlier reviews and their fixes removed the book's real errors (the logistic-time sign, environmental resistance, Japan and Germany in Stage 4, the Gause overstatement, density against number). What remains is mostly about NCERT fidelity and the fixers' own wording: the competition section misses NCERT's two classic points (unrelated species compete; resources need not be limiting), the fix changed NCERT's "all birds and mammals" to "most", one figure panel has its pair in the wrong order, one MCQ key (F Q8) has a second defensible answer, and a handful of new sentences need tidying (Pro-Tip duplicate, Cuscuta, Q10, key point 2, two "never covers" introductions).

Summary: 17 flags; 15 NEW, 2 REPEAT (flag 3 = R1 7 applied wrongly; flag 9 = R2 19 applied awkwardly). Serious (would teach or mark something wrong): 5 (flags 1 to 5).
