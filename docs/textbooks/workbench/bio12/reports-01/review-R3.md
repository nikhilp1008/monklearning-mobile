# Biology 12 Chapter 1: review R3 (third independent review, whole chapter, on Opus)

Share: `content/textbooks/bio-12-01/topics-1-3.ts`, `topic-4-extras-a-c.ts`, `extras-d-g.ts` (Topics 01 to 04, Additional A to G), `lib/diagrams/biology-12-01.ts` (Figures 1.1 to 1.6), `lib/revise/keypoints-biology-12-01.ts` (all 34 points). Book pp. 9 to 62. Reviewed as it stands after fixers F1 and F2.

Method (own pass first, before reading R1 and R2):
- Word-level 4-gram comparison of every app string against the book text of its page range (PyMuPDF text of pp. 9 to 62), both directions: every app sentence not found in the book and every book sentence not found in the app was listed and read against the page. Every difference is either a declared house change (em dashes, cross-references, labels, options), a fixer change listed in `new-text-F1.md` / `new-text-F2.md`, or one of the flags below. No dropped or duplicated book sentence was found.
- Tables read on the page text and the page images (pp. 38, 41 to 42, 47, 49 to 50, 54, 58, 62); figure pages 12, 19, 26, 33 rendered as images and compared with my own render of every diagram case.
- Every number, ratio, key, cross and count recomputed; every Additional-topic introduction checked against the Topics as built; every [NEW] item in F1 and F2 checked for correctness.
- NEW = not raised by R1 or R2. REPEAT = raised before but not fixed, or fixed wrongly.

## FLAGS, most serious first

**1. [NEW] Line of dehiscence placed in the groove between the two thecae (biology error)**
- Where: Topic 01, Key structures, terms and definitions, Anther bullet (book p. 9).
- Says now: "The longitudinal groove between theca, along which the anther splits open, is the line of dehiscence."
- Wrong: the groove that runs lengthwise between the two thecae (with the connective in it) separates the lobes; it is not where the anther opens. Each theca opens along its own line of dehiscence (the stomium), between its two microsporangia. NCERT says only that a longitudinal groove often runs lengthwise "separating the theca", and its T.S. figure marks the line of dehiscence on each lobe.
- Fix [NEW]: "Often a longitudinal groove runs lengthwise separating the two thecae. Each theca splits open along its own line of dehiscence, between its two microsporangia, to release the pollen."
- Kind: biology error. Source: book. Confidence: likely.

**2. [REPEAT: R1 8d applied wrongly] Siphonogamy said to be the mode of all seed plants**
- Where: Topic 02, Key terms and definitions, Siphonogamy bullet; Topic 02, Processes and procedures, 3.2 step 4 (book p. 17, 18). Both are F1 wording (F1 items 15, 18).
- Says now: "the mode of gamete transfer in seed plants, including angiosperms." and "this mode of transfer (used by angiosperms and other seed plants) is called siphonogamy."
- Wrong: cycads and <i>Ginkgo</i> are seed plants whose pollen tube is haustorial and releases swimming, flagellate sperm (zooidogamy). Siphonogamy (non-motile gametes carried to the egg in the tube) is the mode of angiosperms, conifers and gnetophytes. The book's "the angiosperm mode" was too narrow; the fix is too wide.
- Fix [NEW] (Key terms): "<b>Siphonogamy:</b> delivery of non-motile male gametes to the egg through a pollen tube; the mode of gamete transfer in angiosperms and in conifers and gnetophytes (cycads and <i>Ginkgo</i> still release swimming sperm from the tube)."
- Fix [NEW] (3.2 step 4): "...this mode of transfer (used by angiosperms and most other seed plants) is called <b>siphonogamy</b>."
- Kind: biology error (introduced by the fix). Confidence: likely (certain on cycads and <i>Ginkgo</i>).

**3. [REPEAT: R2 17 applied wrongly] Cleistogamy: "normally autogamous" drops NCERT's wording and contradicts Topic 01**
- Where: Additional G, The Traps, row "Chasmogamous = requires pollinator", correct-recall cell (book p. 58; F2 wording). Topic 01 Key structures still says "(always autogamous; ...)".
- Says now: "Cleistogamous = flowers stay closed (normally autogamous); chasmogamous = opens (may be self or cross)".
- Wrong: NCERT's own statement is that cleistogamous flowers are invariably autogamous (no cross-pollen can reach the stigma of a flower that never opens). "Normally" weakens an NCERT fact a student is asked to reproduce, and the chapter now says "always" in Topic 01 and "normally" in G. R1 (flag 15) had ruled to keep it; F1 kept it; F2 changed it.
- Fix [NEW]: "Cleistogamous = never opens (invariably autogamous, as NCERT says); chasmogamous = opens (may be self or cross)". Optionally make Topic 01 read "(invariably autogamous; ...)" so both places use NCERT's word.
- Kind: NCERT fidelity / internal contradiction. Source: fixer. Confidence: certain on the NCERT wording.

**4. [REPEAT: R2 6 applied only in Additional C] Filiform apparatus: two different "two functions" in one chapter, and a self-contradicting bullet**
- Where: Topic 01, Key structures, Filiform apparatus bullet (book p. 10, plus F1 item 3); Topic 01, Practice exercises, item 2 answer (book p. 14, plus F1 item 8). Against: Additional C Method, Ex C.3, Practice 3; Additional F; key point topic 6 (all now "folded wall increases the surface for absorbing nutrients").
- Says now (Topic 01): "special thickenings in the synergids that guide the pollen tube into the synergid and aid sperm release. (Release of the sperm cells itself follows the degeneration of the synergid; the other function usually listed ... absorbing nutrients into the synergid.)" and Practice 2: "it guides pollen-tube entry into the synergid and aids release of the sperm cells (other texts list the second function as ...)".
- Wrong: the bullet asserts a function and then, in the next sentence, says the release is not its doing. The same exam question ("state its two functions") is answered one way in Topic 01 and another in Additional C; the key-point header says there is "no 'discharge' role". A student cannot tell which answer to write.
- Fix [NEW] (bullet): "<b>Filiform apparatus:</b> special finger-like wall thickenings at the micropylar tip of the synergids that <b>guide the pollen tube</b> into the synergid; its folded wall also increases the surface for absorbing nutrients into the synergid."
- Fix [NEW] (Practice 2 answer): "Filiform apparatus; it guides the pollen tube into the synergid, and its folded wall increases the surface for absorbing nutrients into the synergid."
- Kind: unclear / internal contradiction. Source: book plus partial fix. Confidence: likely.

**5. [NEW] "Secondary nucleus" called the same structure as the primary endosperm nucleus**
- Where: Topic 03, Key structures, terms and definitions, Primary Endosperm Cell (PEC) bullet (book p. 23 to 24).
- Says now: "(Some books call the fused polar nuclei the “secondary nucleus,” and the post-fusion cell the “primary endosperm mother cell”: same structure, different label.)"
- Wrong: the secondary nucleus is the diploid nucleus formed when the two polar nuclei fuse before fertilisation; the PEN is the triploid nucleus after triple fusion. "Same structure" invites a student to call the secondary nucleus 3<i>n</i> (or the PEN 2<i>n</i>). Additional G Archetype 1 uses the term correctly ("the secondary nucleus is the fused polar nuclei inside the central cell").
- Fix [NEW]: "(In many plants the two polar nuclei fuse before fertilisation into a diploid <b>secondary nucleus</b>; the second male gamete then fuses with it, giving the same triploid PEN. Some books call the cell after triple fusion the “primary endosperm mother cell”: it is the PEC under another name.)"
- Kind: unclear / misleading. Source: book. Confidence: likely.

**6. [NEW] Aleurone layer said to separate the endosperm from the embryo (contradicts Additional A)**
- Where: Topic 03, Developmental sequences and processes, 3.4 (book p. 25 to 26).
- Says now: "In cereal (albuminous) seeds, a special proteinaceous aleurone layer lines the endosperm and separates it from the embryo; it later helps mobilise stored food at germination."
- Wrong: the aleurone layer is the outermost layer of the endosperm, lying under the fused pericarp and testa; between the endosperm and the embryo lies the scutellum. Additional A, Ex A.2 (ii) says it correctly: "the outermost cell layer of the endosperm in cereal grains, surrounding the starchy endosperm". (NCERT Class 11 Morphology words the maize-grain sentence loosely, which is probably the source; keep the NCERT idea that it is the endosperm's proteinaceous covering, and add where it is.)
- Fix [NEW]: "In cereal (albuminous) seeds, a special proteinaceous <b>aleurone layer</b> forms the outer covering of the endosperm, just under the fused seed coat and fruit wall (the scutellum lies between the endosperm and the embryo); at germination it releases the enzymes that mobilise the stored food."
- Kind: biology error / internal contradiction. Source: book. Confidence: likely.

**7. [NEW] Barley embryo's own gibberellin given as GA<sub>3</sub>**
- Where: Additional A, Worked examples, Ex A.2 (NEET "Hormonal Mechanism in Cereal Germination"), step (i) and `ans` (book p. 39).
- Says now: "(i) Gibberellin (specifically GA<sub>3</sub>) is synthesised by the embryo and acts on the aleurone layer." and "(i) Gibberellin (GA<sub>3</sub>); ..."
- Wrong: the active gibberellin made by the barley embryo is mainly GA<sub>1</sub> (with GA<sub>4</sub>); GA<sub>3</sub> (gibberellic acid) is the fungal form applied commercially, as the topic's own table row "GA<sub>3</sub> application ... Barley (malting)" correctly says. For an exam answer "gibberellin (GA)" is enough.
- Fix [NEW] (step): "(i) Gibberellin (GA; in barley mainly GA<sub>1</sub>, while GA<sub>3</sub>, gibberellic acid, is the form applied in malting) is synthesised by the embryo and acts on the aleurone layer."
- Fix [NEW] (ans): "(i) Gibberellin (GA); (ii) aleurone layer; (iii) ABA antagonises."
- Kind: biology error. Source: book. Confidence: likely.

**8. [REPEAT: R1 10, fixed with a new unverified attribution] "Called superior to vegetative propagation in NCERT"; comma splice in 3.3**
- Where: Topic 04, Cheat sheet, row "Nucellar embryony" (F1 item 54); Topic 04, Mechanisms and classification, 3.3 second bullet (book p. 32).
- Says now (row): "nucellar seedlings tend to be disease-free (usually virus-free) and are called superior to vegetative propagation in NCERT, so they are valued as true-to-type planting stock and rootstocks." (3.3): "<b>nucellar embryos are superior to plants raised by ordinary vegetative propagation</b>, they tend to be <b>disease-free</b> ..."
- Wrong: the NCERT Class 12 text on polyembryony does not say this; the phrase "in NCERT" is the fixer's attribution and I cannot confirm it (it may come from an Exemplar-style question, which is not the NCERT text). In 3.3 the book's dash became a comma, joining two sentences.
- Fix [NEW] (row): "embryos from <b>diploid maternal nucellar tissue</b> → clones; nucellar seedlings tend to be <b>disease-free</b> (usually virus-free) and are often described as superior to plants raised by vegetative propagation, so they are valued as true-to-type planting stock and rootstocks."
- Fix [NEW] (3.3 bullet): "• <b>nucellar embryos are often described as superior to plants raised by ordinary vegetative propagation</b>: they tend to be <b>disease-free</b> and retain their vigour for a long time (usually virus-free, though not immune to disease)."
- Kind: attribution / punctuation. Source: fixer (attribution), transcription (comma). Confidence: possible (attribution), certain (comma splice).

**9. [NEW] Exam claims for beyond-NCERT material (still overclaiming after labelling)**
- Where: Additional D Introduction (book p. 46); Additional B Introduction (book p. 41).
- Says now (D): "CUET match questions and NEET diagram questions regularly test dispersal mechanisms (the book’s estimate from past papers, not official figures)." (B): "These details are frequently tested in CUET matching questions and NEET assertion–reason items (the book’s estimate ...)".
- Wrong: dispersal mechanisms and the gametophytic/sporophytic S-allele genetics are not in the NCERT Class 12 chapter (NCERT names dispersal only as an advantage of seeds and SI only as an outbreeding device), so "NEET diagram questions regularly" and "frequently tested in NEET" are not supportable even as an estimate, and would push a NEET student to over-invest. The label does not cure a claim that the syllabus itself contradicts.
- Fix [NEW] (D): "Dispersal mechanisms go beyond the NCERT text; they appear mainly in CUET-style matching questions (the book’s estimate from past papers, not official figures)."
- Fix [NEW] (B): "These details go beyond the NCERT text; they appear in some CUET matching and assertion–reason items (the book’s estimate from past papers, not official figures)."
- Kind: exam claim. Source: book. Confidence: possible.

**10. [REPEAT: R2 20 mango, fixed in the table but not in Ex D.2] Mango keyed as endozoochory against the topic's own note**
- Where: Additional D, Worked examples, Ex D.2 (NEET "Matching Dispersal Type"), step and `ans` (book p. 48). F2 kept the key on purpose.
- Says now: "<i>Mangifera</i> fleshy fruit: endozoochory (animals eat and disperse)." / "<i>Mangifera</i>: endozoochory." while the table and the Fleshy-fruit bullet now say "the mango stone is usually dropped after the pulp is eaten".
- Wrong: the same topic now teaches both answers.
- Fix [NEW] (step): "<i>Mangifera</i> fleshy fruit: zoochory (animals eat the pulp and carry or drop the large stone; small-seeded fruits such as guava are the clear cases of endozoochory)."
- Fix [NEW] (ans): "<i>Sonchus</i>: anemochory; <i>Acer</i>: anemochory; <i>Xanthium</i>: epizoochory; <i>Mangifera</i>: zoochory (fleshy fruit)."
- Kind: internal contradiction. Source: book plus partial fix. Confidence: possible.

**11. [NEW] Figure 1.3 panel titles set wholly in italic, so <i>Yucca</i> and <i>Pronuba</i> are not marked**
- Where: `lib/diagrams/biology-12-01.ts`, FLOWERS titles (book p. 19).
- Says now: `'<i>(a) Wind-pollinated grass floret</i>'`, `'<i>(b) Insect-pollinated flower</i>'`, `'<i>(c) <i>Yucca</i> and its moth (<i>Pronuba</i>)</i>'`. The rendered SVG sets every word of all three titles in STIX italic, so the genus names look like the words around them; Figure 1.1's panel names are upright, so the chapter is inconsistent.
- Fix: `'(a) Wind-pollinated grass floret'`, `'(b) Insect-pollinated flower'`, `'(c) <i>Yucca</i> and its moth (<i>Pronuba</i>)'` (italics only on the genus names, as the house rule says: no emphasis italics).
- Kind: nomenclature. Source: figure transcription (the book prints the panel names in italic). Confidence: certain.

**12. [NEW] Topic 04 Practice 5: the Reason states diplospory as if it were all apomixis**
- Where: Topic 04, Practice exercises, item 5 (assertion–reason) (book p. 34 to 35).
- Says now: "R: In apomixis the megaspore mother cell develops into the embryo sac without undergoing meiosis."
- Wrong: after the fixes the chapter rightly says that only diplospory works this way (apospory uses a somatic cell; adventive embryony has no sac). As a general statement R is false for two of the three routes.
- Fix [NEW]: "R: In diplospory, the megaspore mother cell develops into the embryo sac without undergoing meiosis." (Key (a) stands.)
- Kind: overgeneral. Source: book. Confidence: possible.

**13. [NEW] Additional B Ex B.3: a general Assertion explained by a one-type Reason**
- Where: Additional B, Worked examples, Ex B.3 (NEET assertion–reason) (book p. 43).
- Says now: "Assertion (A): Self-incompatibility ensures that a plant’s own pollen cannot fertilise its ovules. Reason (R): In gametophytic SI, the S-RNase mechanism destroys the RNA of pollen tubes ..." key (a). Heading "SI and Genetic Variation" is not what the item tests.
- Wrong: R explains only gametophytic SI (sporophytic SI rejects at the stigma, with no S-RNase), and "ensures" is absolute (SI is often leaky: pseudo-self-compatibility). Keyed (a) is defensible only if A is about gametophytic SI.
- Fix [NEW]: "Assertion (A): In gametophytic self-incompatibility, a plant’s own pollen normally cannot fertilise its ovules." (key (a) stands).
- Kind: unclear (A-R logic). Source: book (A partly F2). Confidence: possible.

**14. [NEW] Non-recurrent apomixis: "a haploid plant that cannot reproduce sexually"**
- Where: Additional E, Method, "Diploid vs haploid outcome" (book p. 50).
- Says now: "produces a haploid plant that cannot reproduce sexually: this is a dead end ..."
- Wrong: haploid plants are usually (not always) sterile, and Topic 04 3.2 says only that the plant "does not breed true".
- Fix [NEW]: "produces a haploid plant that is usually sterile: this is a dead end and is not the focus of the NCERT or examination."
- Kind: overgeneral. Source: book. Confidence: possible.

**15. [NEW] Cashew grouped with the thalamus**
- Where: Topic 03, Common student pitfalls and pro-tips, bullet 3 (book p. 28).
- Says now: "Ovary only = true (mango). Thalamus joins in = false (apple, cashew)."
- Wrong: the fleshy "apple" of cashew is the swollen pedicel (hypocarp), not the thalamus. (Key structures, which says "other floral parts (esp. the thalamus)", is fine.)
- Fix [NEW]: "Ovary only = true (mango). Another floral part joins in = false (apple and strawberry from the thalamus; cashew from the swollen pedicel)."
- Kind: biology (example). Source: book. Confidence: likely.

**16. [NEW] Middle layers "1–2" in number**
- Where: Additional G, Archetype 5 worked representative ("3 = middle layers (1–2 cells thick; temporary)"); Graded Practice Q8 answer ("The middle layers are 1–2 thin layers that usually collapse") (book p. 56, 61).
- Wrong: the middle layers are usually given as 1 to 3 (often 2 to 3) layers; NCERT gives no number. "1–2" is narrower than the standard teaching.
- Fix [NEW]: "middle layers (usually 1–3 layers; they degenerate at maturity)" and "The middle layers are usually 1–3 thin layers that degenerate at maturity".
- Kind: number. Source: book. Confidence: possible.

**17. [NEW] Topic 03 Crack the MCQ Q4 stem: "In a typical angiosperm ... perisperm"**
- Where: Topic 03, Crack the MCQ, Q4 stem (book p. 28).
- Says now: "In a typical angiosperm, the persistent remnant of the nucellus in a seed is called:"
- Wrong: in a typical angiosperm the nucellus is used up; a perisperm persists only in some seeds (black pepper, beet).
- Fix [NEW]: "In some seeds, such as black pepper, the persistent remnant of the nucellus is called:"
- Kind: misleading. Source: book. Confidence: possible.

**18. [NEW] "If pollination fails, no endosperm is wasted"**
- Where: Topic 03, Concept intuition, "Think about it this way…" paragraph (book p. 23).
- Wrong: the endosperm depends on fertilisation (triple fusion), not on pollination alone; pollination can succeed and fertilisation still fail (Topic 02 says so).
- Fix [NEW]: "If fertilization fails, no endosperm is wasted."
- Kind: wording. Source: book. Confidence: certain (low impact).

**19. [NEW] Additional B Practice 3: "the family" for each SI type**
- Where: Additional B, Practice, item 3 (CUET) (book p. 43).
- Says now: "Name the family in which gametophytic SI is found and the family in which sporophytic SI is found."
- Wrong: gametophytic SI occurs in several families (Solanaceae, Rosaceae, Papaveraceae, Fabaceae, Poaceae); the topic's own table names <i>Papaver</i>.
- Fix [NEW]: "Name one family in which gametophytic SI is found and one in which sporophytic SI is found."
- Kind: overgeneral. Source: book. Confidence: likely (low impact).

**20. [NEW] Beggartick "with spines"**
- Where: Additional D, Practice, item 5 answer (book p. 49); against item 4 answer "<i>Bidens</i> with barbed bristles".
- Wrong: beggarticks are <i>Bidens</i>; their fruits carry barbed awns (bristles), not spines; two answers on one page describe the same plant differently.
- Fix [NEW]: "(e.g. <i>Xanthium</i> with hooks, <i>Bidens</i> (beggarticks) with barbed bristles)".
- Kind: wording / consistency. Source: book. Confidence: likely (low impact).

**21. [NEW, low] Hot-water soak "distinct from scarification"**
- Where: Additional A, Ex A.1 step and answer; Practice 3 answer; table row; F bullet (book pp. 38 to 41).
- Says now: "This is pre-soaking in warm water (a hot-water soak), a method distinct from scarification, which damages the coat mechanically or chemically."
- Note: many horticulture texts list hot-water treatment as a form of scarification ("hot-water scarification"); the book's separation is a choice, not a fact. Acceptable as printed if the founder prefers the book; otherwise [NEW]: "This is a hot-water soak, which softens the testa (some texts count it as a third kind of scarification, beside mechanical and chemical)."
- Kind: classification. Source: book. Confidence: possible.

**22. [NEW, low] Figure 1.6 Apospory box adds "cell"**
- Where: Figure 1.6, Apospory box (book p. 33 prints "Apospory (somatic → 2n embryo sac)"; the app prints "(somatic cell → 2<i>n</i> embryo sac)").
- Note: harmless and matches the caption ("somatic cell"); list it as an exception to word for word, or revert to "(somatic →".
- Kind: transcription (declared by the diagram agent). Confidence: certain.

## Earlier flags I believe were applied wrongly or only in part
- R1 8d (siphonogamy): the wording proposed and applied ("seed plants, including angiosperms") is itself overgeneral (flag 2).
- R2 17 (cleistogamy "normally autogamous"): drops NCERT's "invariably" and now disagrees with Topic 01; R1 15 had ruled to keep it (flag 3).
- R2 6 (filiform apparatus): applied in Additional C, F and the key points, but not in Topic 01, where F1 kept the book's "aid sperm release" and added a sentence that contradicts it (flag 4).
- R1 10 (nucellar seedlings "superior"): the fix added "are called superior ... in NCERT", an attribution I cannot confirm; the 3.3 bullet keeps "superior" with a comma splice (flag 8).
- R2 20 (mango): fixed in the table and bullet but not in Ex D.2, which now disagrees (flag 10).
- All other R1 and R2 fixes I checked are applied as proposed and read correctly (Ephedra/Gnetum note, parthenogenesis wording, "usual routes" for apomixis, ploidy rule, exine "no enzyme is known", oldest seed, Amorphophallus, Yucca/Tegeticula, micropyle "usually", Allium "(reported)", Citrus unshiu, A/C/D/E introductions, SI "self-fertilisation", LURE peptides, Shorea sepals, hot-water soak, legume examples, chilling requirement, Pfr, Papaver at the stigma, pseudogamy, Archetype 6 rule, Distribution commentary, labels, S italics, en dashes, "Choose" lines).

## Check of the fixers' new wording (F1 items 1 to 54, F2 all items)
Every item was read in place. Correct, plain and not overclaiming, except: F1 15 and 18 (flag 2), F1 3 and 8 (flag 4), F1 54 "in NCERT" (flag 8), F2 Traps chasmogamous row (flag 3). Notes on the rest:
- F1 26 "NCERT calls it unique to flowering plants. (A second fusion also occurs in <i>Ephedra</i> and <i>Gnetum</i>, but it does not make endosperm ...)": correct; NCERT does call it unique to flowering plants.
- F1 4 xenogamy "the type (of these three)": keeps NCERT's sense ("the only type ... brings genetically different pollen"); acceptable.
- F1 28, 34, 37, 49 parthenogenesis: correct.
- F1 36 "(Strictly, nucellar seedlings are usually free of the viruses ...)": correct.
- F1 41 Winkler broad sense: correct.
- F1 42 "Often one embryo (usually the zygotic one) is weak or aborts, and several seedlings may emerge": acceptable.
- F2 A introduction: true against the Topics as built (no ABA, GA or gibberellin anywhere in Topics 01 to 04; dormancy is in Topic 02 3.5 and Topic 03 3.4).
- F2 C introduction: true (Topics 01 and 02 give stigma, style, ovary, micropyle, synergid; no transmitting tissue, no chemotropism).
- F2 D introduction: true (dispersal appears only in Topic 02 3.5), but see flag 9 for its last sentence.
- F2 E introduction: true (Topic 04 Key definitions, 3.2 and Figure 1.6 name and define the three routes).
- F2 temperature-shock row "Physiological: temperature-sensitive": acceptable. (I could not verify "Rice" as an example of alternating-temperature treatment; rice dormancy is more often broken by dry heat. Low; not flagged.)
- F2 apospory examples <i>Hieracium</i>, <i>Pennisetum</i> (<i>Cenchrus</i>), <i>Panicum maximum</i>: correct.
- F2 "Usually no dominance: the alleles act independently" and "in <i>Papaver</i>, at the stigma": correct.

## Counts verified
- Topics 01 to 04: 4 worked examples, 5 practice, 4 MCQs, 1 pitfall list, 1 pro-tip each: equal to the book. A 5 ex / 6 practice; B 4 / 5; C 3 / 4; D 3 / 5; E 4 / 6; F 5 parts; G 6 worked representatives, 9 trap rows, 10 graded questions, 3-row comparison table: equal to the book.
- All 16 MCQ keys (T01 c c c c; T02 b b b c; T03 c b b a; T04 c c b b) match the book's "Correct:" lines and are the only correct option; every nudge explains its own option.
- Worked-example and practice keys recomputed: T01 (b), both correct, (a), practice A–3 B–1 C–2, A-R (c); T02 (c), A–2 B–1 C–3, (a), A-R (a); T03 (b), A–3 B–1 C–4 D–2, (a), 3<i>n</i> = 36, A-R (a); T04 (d), A–2 B–3 C–1, (c), A-R (a); A match P–iii Q–i R–ii S–iv; B.1 only <i>S</i><sub>3</sub> pollen (50 %); B sporophytic <i>S</i><sub>1</sub> coat works on <i>S</i><sub>2</sub><i>S</i><sub>3</sub>, rejected on <i>S</i><sub>1</sub><i>S</i><sub>3</sub>; E A-R (c); G Arch 2 (c), Arch 3 (a) 42 → 21, Arch 4 A–2 B–3 C–1, Arch 5 (c), Arch 6 12 + 12 + 12 = 36; Q1 (c), Q2 (b), Q3 (c) 36, Q4 (b), Q5 (c), Q6 (c), Q7 (b), Q8 (b), Q9 (a), Q10 (a).
- Embryo sac 3 + 2 + 1 + 1 = 7 cells, 1 → 2 → 4 → 8 nuclei; 4 microsporangia (2 per theca); Distribution 16 + 13 + 12 + 5 + 22 = 68, shares 23.5, 19.1, 17.6, 7.4, 32.4 → 24 + 19 + 18 + 7 + 32 = 100; Topics 01 + 02 = 29 of 68 = 42.6 % ≈ 43 %. Endosperm ploidy 2<i>n</i> <i>Oenothera</i>, 5<i>n</i> <i>Fritillaria</i>, 9<i>n</i> <i>Peperomia</i> (some species 15<i>n</i>): acceptable. Dates Winkler 1908, Leeuwenhoek 1719, Haberlandt 1921: correct.
- No assertion–reason item anywhere prints "both false"; every added fourth option reads "A false, R true". No exam year remains (the "2000–2017" range and "NEET 2016" are gone); every share or frequency line I found carries the label.
- Italics: all genera and binomials italic, families upright, <i>S</i> alleles italic, S-RNase upright, ploidy 2<i>n</i>, 3<i>n</i>, <i>n</i>. No em dash and no slash fraction in the three content files.
- Key points: 34 points, topic indexes 0 to 10 right; each answer and `why` agrees with the chapter text as it now stands; `say` lines match the cheat-sheet aids. Two follow the chapter where it is now inconsistent: topic 6 (filiform apparatus, agrees with Additional C, not Topic 01: flag 4) and topic 10 mistake (cleistogamous "self-pollinate", fine).

## Figures checked (book pages against my render of every case)
- Figure 1.1 (p. 12): lobes, four microsporangia, rings in the order epidermis, endothecium, middle layers, tapetum, sporogenous core, all labels: matches.
- Figure 1.2 (p. 12): anatropous ovule, two integuments, nucellus, sac with 3 antipodals at the chalaza, central cell with 2 polar nuclei, egg between 2 synergids with filiform lines at the micropyle, hilum and funicle beside the micropyle, all 15 labels: matches.
- Figure 1.3 (p. 19), three cases: labels and the three lines under each flower are the book's; flag 11 for the titles.
- Figure 1.4 (p. 19): six steps in the book's order and words, five arrows: matches.
- Figure 1.5 (p. 26): pollen tube with 2 male gametes into the synergid at the micropylar end, arrows to egg (syngamy → zygote (2<i>n</i>)) and central cell (triple fusion → PEN (3<i>n</i>)), degenerating synergids and antipodals: matches.
- Figure 1.6 (p. 33): tree and notes match; flag 22 ("cell"); the "bypasses embryo sac" note against the text's "no embryo sac stage" is the founder's decision already listed by F1.
- Captions: the book's, with colons for em dashes and 2<i>n</i>/3<i>n</i>.

## Could not check
- Real device fonts: my render used the Mac's stand-in fonts (sucrase + Node, no jest), so label fit on Android is not checked here.
- NCERT wording I quote is from memory (invariably autogamous; groove separating the theca; double fertilisation unique to flowering plants); I did not have the NCERT PDF open. The NCERT Exemplar questions the book cites are unverified.
- The cell origins of the five <i>Allium odorum</i> embryos and "forty embryos in <i>Citrus unshiu</i>" (both marked or softened already).
- No tsc, jest or git was run; no repo file was edited (only this report was written).

## Summary
22 flags: 17 NEW, 5 REPEAT (earlier fixes applied wrongly or in part: siphonogamy, cleistogamy, filiform apparatus, "superior ... in NCERT", mango key). Serious (a student would learn something wrong or meet two answers to one question): flags 1 to 7 (7). The transcription is faithful and every key, count and sum is right; the remaining risk is a handful of book statements the earlier reviews missed (line of dehiscence, secondary nucleus, aleurone position, GA<sub>3</sub>) and four places where the fixes themselves introduced an overgeneral or inconsistent line.
