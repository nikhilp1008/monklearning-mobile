# Biology 11 Ch 3 (Plant Kingdom), expert review R3 (third review, Opus): whole chapter as it now stands

Scope: content/textbooks/bio-11-03/topics-1-3.ts, topics-4-6.ts, extras.ts (Topics 01 to 06, Additional A to H), lib/diagrams/biology-11-03.ts (Figs 3.1 to 3.5), lib/revise/keypoints-biology-11-03.ts (44 points), including every wording listed in reports-03/new-text-F1.md and new-text-F2.md. Book pp. 142 to 220.

Method: own pass first. A 4-word-shingle diff of every app string against the book text of pp. 142 to 220, both ways (app words not in the book; book runs not in the app); every residue read (almost all are table cells the text layer interleaves, part headings, option letters, and the fixers' [NEW] wording). Tables read against the page text in column layout; page images rendered for the five figure pages (pp. 152, 154, 162, 171, 178). Every number, count, ratio and every printed key recomputed. Each Additional-topic introduction checked against the Topics as built. Every F1 and F2 [NEW] wording checked. Only then were review-R1-topics-1-6.md and review-R2-extras.md read, and each flag below marked NEW or REPEAT.

Nothing in the repo was edited apart from this report. No tsc, jest or git was run, so the app's SVGs were not rendered (see "Could not check").

## Flags, most serious first

### 1. Gymnosperm female gametophyte called an "embryo sac", "microscopic" and "a few cells" [NEW; partly introduced by F1's wording for R1 flag 1]
- **Where:**
  - topics-4-6.ts, Topic 06, table 2.1, Diplontic row, "Other phase" (F1 [NEW], p. 184).
  - topics-4-6.ts, Topic 06, 3.2, last bullet (book, p. 185).
  - extras.ts, F, Matrix 1, "Free-living gametophyte", Gymnosperms cell (book, p. 205).
  - keypoints, topic 11 point 1 `why`.
  - keypoints, topic 5 `mistake` (Are ferns diplontic?).
  - topics-1-3.ts, Topic 02, Pattern B, and Fig 3.2(B) caption CAP32B ("few-celled gametophytes", F1 [NEW]).
- **Says now:**
  - "Gametophyte reduced to a few cells (pollen grain, embryo sac in seed plants) or to the gametes alone (<i>Fucus</i>)".
  - "Gymnosperms & Angiosperms: diplontic: the sporophyte is everything; the gametophytes are microscopic and never free-living (pollen grain; embryo sac)".
  - Matrix 1, gymnosperm cell: "No (pollen grain, embryo sac)".
  - KP: "The gametophytes of the seed plants, the pollen grain and the embryo sac, are never free-living."
  - KP: "the seed plants, whose gametophytes are microscopic and never free-living".
  - "which grow into the few-celled gametophytes".
- **What is wrong:** "Embryo sac" is the angiosperm female gametophyte only. The gymnosperm female gametophyte is a large, multicellular tissue: it is the haploid endosperm, and in a pine nut it can be seen and eaten. The chapter says this itself: Topic 04 step 4, C step 2, and H Q6 "The multicellular female gametophyte". So the chapter now contradicts itself. NCERT's "single to few-celled" is loose for gymnosperms, so "much reduced" is safer.
- **Fix:**
  - Topic 06 table [NEW]: "Gametophyte much reduced and never free-living (the pollen grain, and the female gametophyte inside the ovule, which in angiosperms is the embryo sac) or reduced to the gametes alone (<i>Fucus</i>)".
  - Topic 06 3.2 [NEW]: "<b>Gymnosperms & Angiosperms: diplontic</b>: the sporophyte is everything; the gametophytes are much reduced and never free-living (the pollen grain; the female gametophyte inside the ovule, the embryo sac in angiosperms)."
  - Matrix 1 gymnosperm cell [NEW]: "No (pollen grain; female gametophyte inside the ovule)".
  - KP topic 11 why [NEW]: "The gametophytes of the seed plants (the pollen grain, and the female gametophyte inside the ovule, the embryo sac in angiosperms) are never free-living."
  - KP topic 5 mistake [NEW]: "…the seed plants, whose gametophytes are much reduced and never free-living, with <i>Fucus</i> a clear case among the algae".
  - Pattern B and CAP32B [NEW]: replace "which grow into the few-celled gametophytes" with "which grow into much-reduced gametophytes".
- **Kind:** biology error. **Source:** book (3.2, Matrix 1) and ours (F1 table, KP). **Confidence:** certain.

### 2. "Where meiosis occurs fixes the pattern" stated as a universal rule, which the seed plants now break [NEW; R1 flag 1 was applied incompletely]
- **Where:**
  - topics-4-6.ts, Topic 06, Concept intuition, caveat bullet 3.
  - Topic 06, pitfall 1.
  - Topic 06, Pro-Tip.
  - extras.ts, H, Archetype 2, step 1.
  - keypoints, topic 5 point 1 `why` and topic 5 shortcut.
- **Says now:**
  - "Meiosis happens once per cycle, but where it happens (in the zygote, in the gamete-mother cells, or in spore mother cells) is exactly what distinguishes the three patterns."
  - "It is the cleanest discriminator: zygotic = haplontic, gametic = diplontic, sporic = haplo-diplontic."
  - Pro-Tip: "(1) where is meiosis? fixes the pattern".
  - Archetype 2: "Where does meiosis occur? Zygotic → haplontic. Gametic → diplontic. Sporic → haplo-diplontic."
  - KP: "Meiosis happens once per cycle; where it happens is what separates the three patterns." and "First, where is meiosis? That fixes the pattern."
- **What is wrong:** after F1's fix, the chapter correctly says that seed plants have sporic meiosis and are still diplontic (NCERT convention). A student who applies the rule as printed gets "haplo-diplontic" for an angiosperm.
- **Fix** (the Z-G-S aid can stay as the book's mnemonic):
  - caveat [NEW]: "• Meiosis happens once per cycle, and where it happens (in the zygote, at gamete formation, or at spore formation) separates the patterns in the algae, bryophytes and pteridophytes. Seed plants are the exception: NCERT calls them diplontic, though their meiosis forms spores."
  - pitfall 1 [NEW]: "<b>Forgetting where meiosis happens.</b> In the algae, bryophytes and pteridophytes it is the cleanest discriminator: <b>zygotic = haplontic, gametic = diplontic, sporic = haplo-diplontic.</b> Seed plants are the exception: diplontic by NCERT’s convention, though their meiosis forms spores, because their gametophytes are never free-living."
  - Pro-Tip [NEW]: "(1) where is meiosis? fixes the pattern (a seed plant is diplontic whatever its meiosis, since its gametophytes are never free-living);"
  - Archetype 2 step 1, append [NEW]: "(Seed plants are the exception: diplontic by NCERT’s convention, though their meiosis forms spores.)"
  - KP topic 5 why [NEW]: "Meiosis happens once per cycle; where it happens separates the three patterns, with the seed plants the exception (diplontic, though their meiosis forms spores)."
  - KP shortcut [NEW]: "First, where is meiosis? That fixes the pattern, except in the seed plants, which are diplontic by NCERT’s convention although their meiosis forms spores."
- **Kind:** unclear or misleading (internal contradiction). **Source:** book, exposed by our fix. **Confidence:** certain.

### 3. Key points: "<i>Eudorina</i> is the usual NCERT example" of anisogamy [NEW; R2's key-point note applied wrongly]
- **Where:** keypoints, topic 6 point 1, and the header comment ("Eudorina is the usual NCERT anisogamy example").
- **Says now:** "Anisogamy: … <i>Eudorina</i> is the usual NCERT example, and some <i>Chlamydomonas</i> species."
- **What is wrong:**
  - NCERT's anisogamy example is "species of <i>Chlamydomonas</i>". As I recall it: "Fusion of two gametes dissimilar in size, as in species of Chlamydomonas is termed as anisogamous". It does not name <i>Eudorina</i>.
  - <i>Eudorina</i> also appears nowhere in the chapter, which breaks the key-point rule "every fact is from the chapter text".
  - F2 itself marked this as unchecked.
- **Fix:**
  - KP [NEW]: "Anisogamy: both gametes motile but unlike in size, the smaller male and the larger female; some <i>Chlamydomonas</i> species (NCERT’s example)."
  - Header [NEW]: "NCERT’s anisogamy example is species of Chlamydomonas".
- **Kind:** biology/attribution error. **Source:** ours. **Confidence:** likely (from memory of the NCERT text; confirm against the NCERT page).

### 4. The <i>Selaginella</i> life cycle: strobili, the order of male gametophyte development, a "photosynthetic" female gametophyte, and retention overstated [NEW; R2 flag 13 covered only "within or just outside"]
- **Where:**
  - extras.ts, B, Method, "Heterospory" bullets.
  - B, Method, "<i>Selaginella</i> life cycle" steps 1, 2, 3 and 5.
  - Worked example B.1 (iii) and B.3 step 2 (F2 [NEW]).
  - keypoints, topic 7 point 2.
  - Book pp. 193 to 194.
- **Says now:**
  - Step 1: "bears two types of strobili (cones): strobili containing microsporophylls and strobili containing megasporophylls. These may be on the same axis (mixed cone) or on separate branches."
  - Step 2: "Each microspore is a <b>male gametophyte in miniature</b>. It germinates inside the spore wall: the spore coat ruptures, and a small prothallial cell and an antheridial cell are formed."
  - Step 3: "The megaspores are retained inside the megasporangium on the parent sporophyte. … The gametophyte is <b>photosynthetic</b> initially, then becomes non-green."
  - Heterospory bullet: "The egg is fertilised in place, and the embryo develops while attached to the parent".
  - B.3: "the female gametophyte is retained in the megaspore on the parent sporophyte".
- **What is wrong:**
  - A <i>Selaginella</i> strobilus is usually bisporangiate: megasporophylls below, microsporophylls above. Separate micro- and megastrobili are the minority case. The text calls them "two types of strobili" and then a "mixed cone".
  - Male gametophyte development is endosporic. The prothallial and antheridial cells form inside the intact wall, and the wall ruptures only to free the antherozoids. The text gives the reverse order.
  - The female gametophyte develops inside the megaspore on stored food. Only the part exposed at the ruptured triradiate ridge may turn green, so "photosynthetic initially, then non-green" is reversed.
  - Retention: NCERT says the female gametophytes are retained on the parent "for variable periods". In many species the megaspores are shed before fertilisation, and step 6 of the same Method says so.
- **Fix:**
  - Step 1 [NEW]: "<b>Sporophyte (2n):</b> The dominant plant body bears <b>strobili</b> (cones) at its branch tips. A strobilus usually carries both kinds of sporophyll, megasporophylls in its lower part and microsporophylls above; in some species they are in separate strobili."
  - Step 2 [NEW]: "Each microspore gives rise to a <b>male gametophyte</b>, which develops inside the spore wall: a small <b>prothallial cell</b> and an <b>antheridial cell</b> are formed, and the antheridial cell divides repeatedly to produce numerous <b>antherozoids</b> (biflagellate male gametes), which escape when the spore wall ruptures."
  - Step 3, last sentence [NEW]: "The female gametophyte is mostly non-green and lives on food stored in the megaspore; the part exposed where the spore wall ruptures may turn green."
  - Step 3, "retained" sentence [NEW]: "The megaspores are retained inside the megasporangium on the parent sporophyte for a variable period."
  - Heterospory bullet [NEW]: "The megaspore is retained on the parent sporophyte for a variable period. It germinates into the <b>female gametophyte</b> inside the spore wall, and the female gametophyte produces <b>archegonia</b>. Where the megaspore is still on the parent at fertilisation, the embryo begins its development there; this is the seed-habit precursor condition."
  - B.3 step 2 [NEW]: "…the female gametophyte develops inside the megaspore, which stays on the parent sporophyte for a variable period, and the male gametophyte stays inside the microspore wall."
  - KP topic 7 point 2: replace "retained in the megasporangium on the parent sporophyte" with "retained in the megasporangium on the parent sporophyte for a variable period".
- **Kind:** biology error. **Source:** book (and F2 wording). **Confidence:** likely (strobili, male gametophyte); possible (green female gametophyte).

### 5. Fern sporangium "bilipped (bivalved) capsule … annulus … breaks open at the stomium" [REPEAT: R2 flag 26, "low priority", not fixed]
- **Where:** extras.ts, B, Method, "Sorus structure", last bullet (p. 192); keypoints, topic 7 point 1.
- **Says now:** "Each sporangium has a <b>bilipped (bivalved) capsule</b> with a vertical annulus (a band of thickened cells) that runs around the capsule and breaks open at the <b>stomium</b> to release the spores."
- **What is wrong:**
  - A fern (leptosporangiate) sporangium is a stalked, biconvex capsule.
  - Its annulus is incomplete: it runs about two-thirds of the way round.
  - The annulus does not break: the capsule wall ruptures at the thin-walled stomium as the drying annulus pulls it open.
- **Fix:**
  - Method bullet [NEW]: "Inside each sorus, numerous sporangia develop. Each sporangium is a stalked, biconvex capsule. A vertical row of thick-walled cells, the <b>annulus</b>, runs about two-thirds of the way round it and ends at a patch of thin-walled cells, the <b>stomium</b>; as the annulus dries it pulls the capsule open at the stomium and flings out the spores."
  - KP topic 7 point 1 [NEW]: "Each sporangium is a stalked capsule with an incomplete ring of thick-walled cells, the annulus, which on drying tears the capsule open at the thin-walled stomium to release the spores".
- **Kind:** biology error. **Source:** book. **Confidence:** likely.

### 6. F worked example "(most algae)" left after R1 fixed the same claim everywhere else [NEW]
- **Where:** extras.ts, F, Worked example "Life Cycle Identification", step 2 (p. 208).
- **Says now:** "Examples: <i>Volvox</i>, <i>Spirogyra</i>, <i>Chlamydomonas</i> (most algae)."
- **What is wrong:**
  - The same overgeneral claim that R1 flag 3 replaced in Topics 02 and 06.
  - Brown and red algae are mostly haplo-diplontic or diplontic.
  - Only some <i>Chlamydomonas</i> species are haplontic.
- **Fix [NEW]:** "Examples: <i>Volvox</i>, <i>Spirogyra</i>, some <i>Chlamydomonas</i> (many green algae)."
- **Kind:** biology error (overgeneral). **Source:** book. **Confidence:** certain.

### 7. C's kalam and Introduction (F2 [NEW]): "the ovule becomes a naked, winged seed" [NEW]
- **Where:** extras.ts, C, `kalam` and Introduction (F2 item 7, R2 flag 2d).
- **Says now:** "…that <i>Cycas</i> keeps motile sperm, and that the ovule becomes a naked, winged seed."
- **What is wrong:** Topic 04 says the ovule becomes a naked seed, "in <i>Pinus</i>, a winged seed". <i>Cycas</i> seeds have no wing, so this sentence, which is about what the chapter says, generalises <i>Pinus</i> to all gymnosperms.
- **Fix [NEW]:** "…and that the ovule becomes a naked seed (winged in <i>Pinus</i>)." In the kalam: "…and that the ovule becomes a naked seed (winged in Pinus)."
- **Kind:** unclear or misleading (claim about the chapter). **Source:** ours. **Confidence:** certain.

### 8. Exam-frequency superlatives that survived the R1 and R2 sweeps [NEW at these places; the recurring flag type]
- **Where and fixes:**
  - extras.ts, H, Archetype 1, "<b>Floridean starch → red</b> (most frequently tested; …)". [NEW] "(frequently tested; the book’s estimate from past papers, not official figures)".
  - extras.ts, H, Archetype 5: "This is the most common statement-type format in exam questions on this chapter". [NEW] "This is a common statement-type format in exam questions on this chapter (the book’s estimate from past papers, not official figures)."
  - extras.ts, H, "The Traps", zone 1: "The single most-tested fact is also the most-miscopied". [NEW] "It is a frequently tested fact, and an easy one to confuse (the book’s estimate from past papers, not official figures)."
  - extras.ts, A, Method, conjugation: "it is a high-yield NEET item precisely because it is unusual". [NEW] "it is worth knowing well precisely because it is unusual".
  - topics-1-3.ts, Topic 02, pitfall 1: "The single most common slip". [NEW] "A common slip".
  - topics-1-3.ts, Topic 03, pitfall 1: "The single biggest error". [NEW] "A common error".
- **Kind:** unclear or misleading (exam claims). **Source:** book. **Confidence:** certain that these are unsupported superlatives.

### 9. Matrix 4 "vessels absent, apart from <i>Gnetum</i>" (R2 [NEW]) is narrower than Topic 04's "except in Gnetales" [NEW]
- **Where:** extras.ts, F, Matrix 4, Xylem row.
- **Says now:** "Tracheids only (vessels absent, apart from <i>Gnetum</i>)".
- **What is wrong:** <i>Ephedra</i> and <i>Welwitschia</i> also have vessels. Topic 04 (table 2.1, 2.3, MCQ 4 nudge, pitfall 4 and cheat sheet) says "except in Gnetales"; the two should agree.
- **Fix [NEW]:** "Tracheids only (vessels absent, except in Gnetales)".
- **Kind:** biology (inconsistency). **Source:** ours. **Confidence:** certain.

### 10. Fig 3.1 <i>Laminaria</i>: the blade is drawn with a midrib and veins [NEW]
- **Where:** lib/diagrams/biology-11-03.ts, draw31 ("midrib and four veins (grey, schematic)"); book p. 152 draws the same.
- **What is wrong:**
  - A kelp blade has no midrib and no veins.
  - A midrib is the mark of <i>Fucus</i>, so it misleads a student matching a drawing to a genus.
  - The header already treats the veins as schematic, so dropping them costs no fidelity to the book's words.
- **Fix:** remove the midrib path and the four vein paths from draw31; keep the ripple, the outline and the three labels. The header's "the blade's ripple and veins" becomes "the blade's ripple".
- **Kind:** figure error. **Source:** book. **Confidence:** likely.

### 11. "Each sorus is covered by … the indusium" [NEW]
- **Where:** extras.ts, B, Method, "Sorus structure" (p. 192), and the same idea in keypoints, topic 7 point 1 ("each covered by a protective flap, the indusium").
- **What is wrong:**
  - Many ferns have naked sori (<i>Polypodium</i>, for example).
  - <i>Adiantum</i>, in the next bullet, has only a false indusium.
- **Fix [NEW]:** "In many ferns each sorus is covered by a protective flap of tissue called the <b>indusium</b> (derived from the leaf tissue)." In the KP: "…clusters on the underside of the frond, in many ferns each covered by a protective flap, the indusium, …".
- **Kind:** biology (overgeneral). **Source:** book. **Confidence:** likely.

### 12. H Archetype 5 tells students to skip statements [NEW]
- **Where:** extras.ts, H, Archetype 5, approach (p. 215).
- **Says now:** "Read only the statements relevant to your knowledge gaps; skip the ones you know cold."
- **What is wrong:** a "how many are correct" item can be scored only by judging every statement. The advice contradicts the sentence before it, "Treat each numbered statement as a True/False binary."
- **Fix [NEW]:** "Mark every statement True or False, starting with the ones you know cold, and spend the time you save on the ones you are unsure of."
- **Kind:** unclear or misleading. **Source:** book. **Confidence:** likely.

### 13. "About 900 living species" of gymnosperms [NEW]
- **Where:**
  - topics-4-6.ts, Topic 04, Concept intuition (p. 167).
  - Cheat sheet "~900 species".
  - keypoints, topic 3 point 1.
- **What is wrong:** current counts are about 1,000 to 1,100 living species. NCERT gives no figure, so a number is not needed.
- **Fix [NEW]:** "About <b>1,000 living species</b>" (cheat sheet "<b>~1,000 species</b>"; KP "about 1,000 living species"). Or drop the number in all three places.
- **Kind:** number. **Source:** book. **Confidence:** possible.

### 14. "even in the fur of the <b>sloth bear</b>" [REPEAT: R1 flag 15, left "keep or fix"]
- **Where:** topics-1-3.ts, Topic 02, Concept intuition (p. 149).
- **What is wrong:** NCERT prints "sloth bear", but the alga known for this (<i>Trichophilus</i>) grows in the fur of the tree sloth.
- **Fix:** optional (keeping NCERT's wording, with the nuance beside it). [NEW] "…and even in the fur of the <b>sloth bear</b> (NCERT’s example; the alga best known for this grows in the fur of the tree sloth)."
- **Kind:** biology. **Source:** book and NCERT. **Confidence:** likely.

### 15. D Method: "In the anther (microsporangium)" and "Each microspore is initially tetrahedral (pyramid-shaped)" [NEW]
- **Where:** extras.ts, D, Method, Microsporogenesis steps 1 and 6 (pp. 198 to 199).
- **What is wrong:**
  - An anther holds four microsporangia (pollen sacs), as Topic 05 table 2.2 says ("microsporangia").
  - It is the tetrad that is tetrahedral (the four microspores lie at the corners of a tetrahedron); a microspore is not pyramid-shaped.
- **Fix [NEW]:**
  - Step 1: "In each <b>microsporangium</b> (pollen sac) of the anther, a layer of hypodermal cells differentiates into <b>archesporial cells</b>."
  - Step 6: "The four microspores, usually arranged in a <b>tetrahedral</b> tetrad, separate."
- **Kind:** biology. **Source:** book. **Confidence:** likely (step 1), possible (step 6).

### 16. <i>Pinus</i>: "The generative cell divides into two male cells" [NEW, low]
- **Where:** extras.ts, C, Method, "Pollen tube growth and fertilisation in <i>Pinus</i>", step 1 (p. 196).
- **What is wrong:** in <i>Pinus</i> the generative cell divides into a stalk cell and a body cell, and the body cell gives the two male cells.
- **Fix [NEW]:** "The <b>generative cell</b> gives rise, through a body cell, to two <b>male cells (male gametes)</b>; these are non-motile."
- **Kind:** biology (simplified to the point of error). **Source:** book. **Confidence:** likely.

### 17. Ex C.2 evolutionary wording [NEW, low]
- **Where:** extras.ts, C, Worked example C.2, step 2 (p. 197).
- **Says now:** "inherited from the aquatic ancestors of land plants (like pteridophytes). <i>Cycas</i> has retained this ancestral feature, while <i>Pinus</i> (and most other gymnosperms) have lost it and evolved the pollen-tube mechanism."
- **What is wrong:**
  - Pteridophytes are not "aquatic ancestors".
  - <i>Cycas</i> also has a pollen tube (a haustorial one that releases the sperm).
  - <i>Ginkgo</i> also keeps motile sperm.
- **Fix [NEW]:** "…inherited from the ancestors of land plants and still seen in bryophytes and pteridophytes. <i>Cycas</i> (and <i>Ginkgo</i>) have retained this ancestral feature, while in <i>Pinus</i> (and most other gymnosperms) the pollen tube carries non-motile male cells to the egg."
- **Kind:** biology. **Source:** book. **Confidence:** likely.

### 18. A Method, anisogamy: "differ in size (and sometimes motility), but both are motile" [NEW, low]
- **Where:** extras.ts, A, Method, Anisogamy (p. 190).
- **What is wrong:** the sentence contradicts itself.
- **Fix [NEW]:** "The two gametes differ in size, and both are usually motile."
- **Kind:** unclear. **Source:** book. **Confidence:** certain.

### 19. Pteridophyte gametophyte called "free-living" without the heterosporous exception, and "cones" for <i>Salvinia</i> [NEW, low; R2 flag 5 fixed only Matrices 1 and 3]
- **Where:**
  - topics-1-3.ts, Topic 03, table 2.1, Gametophyte row: "<b>Prothallus</b>: small, short-lived, free-living".
  - Topic 03, key term: "<b>Prothallus</b>: the small, free-living, photosynthetic <b>gametophyte</b>".
  - extras.ts, F, Worked example "Mixed Comparison": "Flowers: <b>No</b> (cones, not flowers)" for "<i>Selaginella</i> or <i>Salvinia</i>".
- **What is wrong:**
  - The chapter's own Topic 03 3.2 and Additional B keep the <i>Selaginella</i> gametophytes inside the spore walls.
  - <i>Salvinia</i> bears sporocarps, not cones.
- **Fix [NEW]:**
  - Table 2.1 cell: "<b>Prothallus</b>: small, short-lived, free-living (in homosporous ferns)".
  - Key term: "<b>Prothallus</b>: the small, free-living, photosynthetic <b>gametophyte</b> of a homosporous fern, into which a spore germinates."
  - F example: "Flowers: <b>No</b> (<i>Selaginella</i> bears cones, not flowers)."
- **Kind:** biology (overgeneral). **Source:** book. **Confidence:** likely.

### 20. "<i>Chlamydomonas</i>" given as haplontic without "some" [NEW, low]
- **Where:**
  - topics-1-3.ts, Topic 02, the summary bullet after Fig 3.2: "<i>Volvox</i>, <i>Spirogyra</i>, <i>Chlamydomonas</i> (many algae)".
  - topics-4-6.ts, Topic 06, table 2.1, Haplontic row.
  - extras.ts, F, Matrix 6, Haplontic row.
  - keypoints, topic 1 mixup and topic 5 point 2.
- **What is wrong:** Pattern A (F1) and NCERT say "some species of <i>Chlamydomonas</i>"; these places drop the qualifier, and the Topic 02 bullet keeps "many algae" where R1 flag 3 settled on "many green algae".
- **Fix [NEW]:** write "some <i>Chlamydomonas</i>" in each place, and "(many green algae)" in the Topic 02 bullet.
- **Kind:** biology (overgeneral). **Source:** book. **Confidence:** certain.

### 21. The A Introduction says Topic 02 does not give "the further organisms (<i>Ulothrix</i>, <i>Chara</i>)" (R2 [NEW]) [NEW, low]
- **Where:** extras.ts, A, Introduction paragraph 2.
- **What is wrong:** Topic 02 names both <i>Ulothrix</i> and <i>Chara</i>, in its table, cheat sheet, MCQ 1 and the CUET match. What it does not do is use them as examples of a fusion type.
- **Fix [NEW]:** "…It does not show the cellular events, further examples of each type (<i>Ulothrix</i> for isogamy, <i>Chara</i> for oogamy), conjugation in <i>Spirogyra</i>, or the NEET-style questions these distinctions generate. This additional topic supplies all four."
- **Kind:** claim about the chapter. **Source:** ours. **Confidence:** certain.

### 22. Notation: ploidy n and the chlorophyll letters upright in half the chapter [NEW, low]
- **Where:**
  - topics-4-6.ts (56 places) and extras.ts (52 places) print "(n)", "(2n)", "(3n)" and "1n" upright.
  - topics-1-3.ts (26 places) and the key points use <i>n</i>, and the book's own tables (e.g. p. 168, "Haploid (𝑛)", "Triploid (3𝑛)") print it italic.
  - Chlorophyll <i>a</i>, <i>b</i> are italic in Topic 02 but upright in Matrix 2, Trap 1 and H Archetype 5 ("Chl a, b", "chlorophyll-a and b").
- **Fix:** one search and replace to <i>n</i> in the two files (outside the cheat-sheet mnemonic "1n Before", which can stay). Set the chlorophyll letters as Topic 02 does: "chlorophyll <i>a</i> and <i>b</i>".
- **Kind:** notation and italics. **Source:** transcription. **Confidence:** certain.

## Earlier flags I believe were applied wrongly, or only in part
- **R2 key-point note "Eudorina as the usual anisogamy example"**: applied by F2 and false as stated (flag 3).
- **R1 flag 1, table wording "embryo sac in seed plants"**: wrong for gymnosperms (flag 1).
- **R1 flag 1, applied incompletely**: the universal "where is meiosis" rule was left in the caveat, pitfall, Pro-Tip, Archetype 2 and the key points (flag 2).
- **R1 flag 1, Fig 3.2(B) example line cut from the book's "Fucus; seed plants" to "Fucus"**: defensible with the caption note, but the drawing now departs from the book while every text place keeps seed plants as diplontic. Optional: restore "<i>Fucus</i>; seed plants" and keep the caption note.
- **R1 flag 3 ("most algae")**: missed F Worked example F.2 (flag 6).
- **R1 flag 12 and R2 flag 24 (superlatives)**: missed three in H, one in A, and two pitfalls (flag 8).
- **R2 flag 2(d), C kalam and Introduction "naked, winged seed"**: overgeneral (flag 7).
- **R2 flag 2(b), "the further organisms (Ulothrix, Chara)"**: overclaims (flag 21).
- **R2 flag 11, Matrix 4 "apart from <i>Gnetum</i>"**: narrower than Topic 04's "Gnetales" (flag 9).
- **R2 flag 13, B.3 "female gametophyte is retained in the megaspore on the parent sporophyte"**: overstated (flag 4).
- **R2 flag 26 (sporangium)**: not applied (flag 5).
- **R1 flag 15 (sloth bear)**: left open (flag 14).

All other F1 and F2 [NEW] wordings check out as correct, plain and not overclaiming:
- F1: Spirulina, the descent chain, Gnetales, vessels, archegonia, Sequoia sempervirens, the pollen cell count, Riccia, Wolffia, sago and Metroxylon, cytotaxonomy.
- F2: the Spirogyra isogamy note, oogamy "most animals", the B, D, E and F Introductions, the chapter-reference column (Topic 02 3.3, Topic 03 3.4, Topic 04 3.4, Topic 05 3.5, each checked against the built sections), Matrices 1, 3 and 6, Trap 9, G Q7 and Q10, the H share and archetype edits, H Q9 and Q10.

## Counts verified
- **MCQs and keys:**
  - 24 MCQs (4 per topic). Keys: T01 1,2,1,2; T02 0,2,1,2; T03 1,2,1,1; T04 1,1,1,2; T05 1,2,1,1; T06 2,2,2,1. Every keyed option is correct and the only correct one.
  - Every nudge explains its own option. The shared nudges, e.g. "(a)/(d)", are attached to both of their options.
- **Worked examples:** 24 in Topics 01 to 06; 17 in A to F (3, 3, 3, 3, 2, 3); 5 in H. Every printed answer was rechecked against its question.
- **Practice items:** 30 in Topics 01 to 06, 30 in A to F, 10 in G, 10 in H. Every key checked: G Q7 key (b) is consistent with its stem, and H Q1 to Q10 keys are all correct.
- **Assertion-reason items:** 15 (12 in the topics, G Q7, H Archetype 4 example, H Q7). The fourth option reads "A false, R true" in every one, and none reads "both false".
- **Arithmetic:**
  - Embryo sac 3 + 3 + 1 = 7 cells and 6 × 1 + 2 = 8 nuclei (text, Fig 3.5 and key points); 2³ = 8 (G Q7).
  - Triple fusion n + n + n = 3n.
  - H distribution 19 + 10 + 9 + 4 + 4 + 3 + 2 + 1 = 52, and 19/52 = 36.5 %, which is "a little over a third".
  - <i>Fucus</i>: eight eggs per oogonium.
  - Genera Plantarum 1862 to 1883.
- **Tables:**
  - Topic tables: 2.1 and 2.2 (T01); the algae table (T02); 2.1, 2.3 and the contrast table (T03); 2.1 and the genera defgrid (T04); dicot/monocot and 2.2 (T05); 2.1 (T06).
  - E economic table: 31 rows, with all binomials checked.
  - Matrices 1 to 6, and the H distribution and Archetype 3 tables.
  - All cells match the book apart from the listed fixes.
- **Additional-topic introductions:** all checked against the Topics as built (A to F). Only flags 7 and 21 remain.
- **Key points:** 44 points read against the chapter text. The issues are in flags 1, 2, 3, 4, 5, 11, 13 and 20.

## Figures checked (book page images rendered)
- Fig 3.1, p. 152 (caption p. 151).
- Fig 3.2, p. 154 (caption p. 153).
- Fig 3.3, p. 162 (caption p. 161).
- Fig 3.4, p. 171 (caption p. 170).
- Fig 3.5, p. 178 (caption p. 177).

All five captions match the book word for word (CAP32B carries F1's added sentence). The diagram code carries every printed label; I compared the label lists and the logic checks in the code with the page images:
- Fig 3.3: archegonia near the notch, antheridia near the rhizoids.
- Fig 3.4: the ovuliferous scale label, which R1 flag 7 asked for, is now present.
- Fig 3.5: the egg apparatus at the micropylar end and the antipodals at the chalazal end.

`pdfimages -list` for pp. 142 to 220 lists no raster image, so only the five vector drawings exist. Only Fig 3.1 has a biology problem (flag 10).

## Could not check
- **The app's rendered SVGs:** this pass did not allow jest, so the dump test (`DUMP_DIAGRAMS`) did not run. Figures were checked from the code against the book pages.
- **The NCERT text itself:** flags 3 and 14 and the "NCERT convention" notes rest on my memory of NCERT Class 11 Chapter 3. Confirm against the NCERT page before applying flag 3.
- **Page images beyond the five figure pages:** tables and italics were checked against the column-preserving text dump, not images.
- **On-device rendering of ♀ ♂, the ⇄ arrow and `<sup>` arrow labels:** this belongs to the Android pass.
