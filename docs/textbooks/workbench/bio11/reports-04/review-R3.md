# Biology 11 Chapter 4 (Animal Kingdom): third expert review (R3)

Reviewer: third independent reviewer, Claude Opus. Date: 2026-11-17. Nothing in the repo was edited; no tsc, jest or git was run.
Share: the whole chapter as it now stands: `content/textbooks/bio-11-04/topics-1-3.ts`, `topics-4-5-extras-a-c.ts`, `extras-d-f.ts`, `lib/diagrams/biology-11-04.ts`, `lib/revise/keypoints-biology-11-04.ts`, including the fixers' new wording (`new-text-F1.md`, `new-text-F2.md`).

Method (own pass first, before reading R1/R2):
- Every app string dumped in block order (all 11 topics, 293 blocks) and diffed word by word against the book text for pp. 221 to 283 (`bio11.paged.txt`), hyphenation and page furniture filtered out; every remaining difference read (about 400), and each traced either to a fixer's listed change or to a slip.
- Page images read for the three big tables (p. 234 to 235 phylum matrix, p. 243 vertebrate class table, p. 251 Master Revision table) and for all six figure pages (pp. 224, 228, 237, 245, 247).
- All six diagrams rendered from the source (sucrase loader, the same `draw(case).svg()` call the dump test uses; no jest) and compared with the book drawings and captions; each diagram's own `check` list also returned all true.
- Every MCQ key, worked-example answer and practice key checked against its question; every number recomputed; every Additional-topic introduction checked against the Topics as built; every [NEW] item in F1/F2 checked for truth and plainness.
- Only then were review-R1 and review-R2 read, and each flag below marked NEW or REPEAT.

Kinds: biology error / nomenclature / wrong or weak MCQ key / unclear or misleading / overclaim / notation / figure / applied fix wrong. Source: book (printed in the Master Reference) or ours (introduced by a writer or fixer).

---

## Flags, most serious first

### 1. Topic 04 Worked example 3 (Assertion–Reason): a non-NCERT claim labelled "NCERT", placed inside the Reason being judged  [NEW; an earlier fix applied wrongly: R2 flag 3]
- Where: `topics-4-5-extras-a-c.ts`, Topic 04 (topic 3), Worked examples, ex "NEET Assertion–Reason", the question's Reason and the step "Evaluate R" (book p. 246).
- Says now (in R and again in the step): "They possess a cranium enclosing the brain (NCERT: cranium and vertebral column are cartilaginous; in lampreys the vertebral elements are small, and hagfishes have none)."
- Wrong: NCERT says only that the cyclostome "cranium and vertebral column is cartilaginous". The second half (lamprey vertebral elements small, hagfishes have none) is not in NCERT, yet it sits under "NCERT:". Worse, the bracket is inside the Reason statement that the student must judge true or false, and it contradicts itself (cartilaginous vertebral column, then "none").
- Fix: Reason: "They possess a cranium enclosing the brain." Step "Evaluate R": [NEW] "They do have a cranium enclosing the brain (NCERT: their cranium and vertebral column are cartilaginous), the defining vertebrate criterion." If the hagfish detail is wanted, add after the step, outside the item: [NEW] "(Beyond NCERT: in lampreys the vertebral elements are small, and hagfishes have none.)"
- Kind: applied fix wrong (misattribution) / unclear. Source: ours. Confidence: certain.

### 2. Additional F, Graded Practice Level 1 Q4: "only crocodiles" is false against the chapter's own lists  [NEW; an earlier fix applied wrongly: R2 flag 25]
- Where: `extras-d-f.ts`, topic 10, A Graded Practice Set, item 4 answer (book p. 279).
- Says now: "Among the reptiles in this chapter’s lists, only crocodiles have a four-chambered heart; the others (cobra, turtle, chameleon) have three-chambered hearts."
- Wrong: the chapter's own Example Bank (Topic 05) lists <i>Alligator</i>, which also has a four-chambered heart. The fixer's "in this chapter's lists" makes the sentence checkably false.
- Fix: [NEW] "Among the reptiles in this chapter’s lists, only the crocodilians (<i>Crocodilus</i>, <i>Alligator</i>) have a four-chambered heart; the other options (cobra, turtle, chameleon) have three-chambered hearts."
- Kind: applied fix wrong / biology. Source: ours. Confidence: certain.

### 3. "Echidna" set in italics as a genus  [NEW]
- Where: Topic 04 Worked example 4 step 2 ("The monotremes (<i>Ornithorhynchus</i>, <i>Echidna</i>)", p. 248); Topic 05 Every Exception ("except monotremes (<i>Ornithorhynchus</i>, <i>Echidna</i>)", p. 252); key points topic 3 shortcut and topic 4 first remember point (same pair).
- Wrong: echidna is a common name; the echidna genera are <i>Tachyglossus</i> and <i>Zaglossus</i>. <i>Echidna</i> as a genus is a moray eel. A student copying "<i>Echidna</i>" as a scientific name loses the nomenclature mark.
- Fix (all four places): [NEW] "(<i>Ornithorhynchus</i>, the platypus, and <i>Tachyglossus</i>, the echidna)"; or, shorter, [NEW] "(<i>Ornithorhynchus</i> and the echidna)".
- Kind: nomenclature. Source: book. Confidence: certain.

### 4. Limulus: haemocyanin is not what detects endotoxins  [NEW]
- Where: `topics-4-5-extras-a-c.ts`, Additional B (topic 6), B2 table, <i>Limulus</i> row (p. 260); key points topic 6 second point ("its blue blood (haemocyanin) is used to detect bacterial endotoxins").
- Says now: "Not a parasite; its blue blood (haemocyanin) is used to detect bacterial endotoxins in medical equipment, critically important in pharmaceutical safety testing".
- Wrong: the test reagent (LAL, limulus amoebocyte lysate) is made from the blood cells (amoebocytes); haemocyanin only makes the blood blue. B Practice 4's answer says this correctly, so the table and key point contradict it.
- Fix, table: [NEW] "Not a parasite; an extract of its blood cells (amoebocytes), LAL, is used to detect bacterial endotoxins in vaccines, injectable drugs and medical equipment (its blood is blue from haemocyanin)". Key point: [NEW] "<i>Limulus</i> is no parasite: an extract of its blood cells (LAL, limulus amoebocyte lysate) is used to detect bacterial endotoxins; its blood is blue from haemocyanin".
- Kind: biology error. Source: book (table), carried into the key point. Confidence: certain.

### 5. Additional F Archetype 3 worked example: tube feet are not worked by "coelomic fluid"  [NEW]
- Where: `extras-d-f.ts`, topic 10, Archetype 3, ex step "R:" (p. 275).
- Says now: "• R: Tube feet extend by hydraulic pressure from coelomic fluid and contract by muscles: this is the mechanism. True."
- Wrong: the pressure comes from the fluid of the water vascular (ambulacral) system, squeezed into the tube foot by its ampulla; "coelomic fluid" invites the student to name the perivisceral coelom, which is the standard wrong answer.
- Fix: [NEW] "• R: Tube feet extend by the hydraulic pressure of the water-vascular fluid, squeezed in by the ampullae, and shorten when their muscles contract: this is the mechanism. True."
- Kind: biology error. Source: book. Confidence: likely (the water vascular system is coelomic in origin, but its fluid is not what a NEET key calls "coelomic fluid").

### 6. Topic 04 MCQ 3: Cyclostomata also fits the stem  [NEW]
- Where: `topics-4-5-extras-a-c.ts`, Topic 04, Crack the MCQ, third MCQ (p. 249).
- Says now: "A marine cartilaginous fish that lacks an operculum and an air bladder belongs to" (key (b) Chondrichthyes; nudge (c) "cyclostomes are jawless and not true fishes").
- Wrong: a lamprey or hagfish is marine, cartilaginous, has no operculum and no air bladder, and is called a "fish" in its own common names ("hagfish"); the only thing ruling (c) out is a technicality about the word "fish". Two defensible answers.
- Fix (stem): [NEW] "A marine, jawed, cartilaginous fish that lacks an operculum and an air bladder belongs to". Nudge (c): [NEW] "<b>(c)</b> trap: cyclostomes are jawless, so the word “jawed” rules them out." Key stays (b).
- Kind: weak MCQ (two defensible answers). Source: book. Confidence: likely.

### 7. Additional F, Graded Practice Level 2 Q5 (A: echinoderm adults radial; R: larvae bilateral, adult radial secondarily acquired): key (a) is weak  [REPEAT: R2 flag 16, not fixed]
- Where: `extras-d-f.ts`, topic 10, A Graded Practice Set, item 5 (p. 280).
- Says now: "Answer: (a). Both statements are textbook facts. R directly explains why A is true: the radial adult symmetry is a derived condition, not the ancestral one."
- Wrong: R says the larva is bilateral and the adult's radial symmetry is secondary; that describes the history of the symmetry, not why the adult is radial (an adaptation to a slow-moving, bottom-living life). The chapter itself, in Topic 03 MCQ 4, keys (b) on the same logic ("R explains how the coelom forms, not why"). The two items now teach opposite rules.
- Fix (founder choice): either key (b) with [NEW] "<b>Answer: (b).</b><br>Both statements are true, but R describes the larva and the evolutionary origin of the adult symmetry; it does not say why the adult is radial (an adaptation to a slow-moving, bottom-living life). So R is true but is not the explanation of A." or keep (a) and reword R to [NEW] "Reason (R): The radial symmetry of adult echinoderms is a secondary adaptation to a slow-moving, bottom-living life; their larvae are bilaterally symmetric."
- Kind: weak MCQ key. Source: book. Confidence: likely.

### 8. "by body plan, molluscs" (schizocoelom) is not a reason and reads as a mistake  [NEW; an earlier fix applied wrongly: R1 flag 6, also carried by F2 into D and the key points]
- Where: Topic 02 Key terms 4 (NEET extension) and Cheat sheet "Coelom"; Topic 03 Step 4 and Cheat sheet "Coelom line-up"; Additional D lead paragraph, table row "Phyla", and "Why this matters"; key points topic 8 first point and the file header.
- Says now: "a schizocoelom: annelids, arthropods and, by body plan, molluscs" (and the same phrase in each place).
- Wrong: whether a coelom is a schizocoelom is a matter of how it forms in the embryo, not of body plan; "by body plan" suggests molluscs are schizocoelous only by analogy. Molluscs are protostomes whose coelom forms by splitting of mesoderm (it is reduced in the adult, mainly to the pericardial cavity).
- Fix (every place): [NEW] "annelids, arthropods and molluscs (in molluscs the coelom is small, mainly the cavity round the heart)"; in cheat sheets and table cells the short form [NEW] "annelids, arthropods and molluscs".
- Kind: unclear or misleading. Source: book phrase (p. 236), spread to nine places by the fixes. Confidence: likely.

### 9. Additional A1 table, Mollusca: an organ written into the "Nitrogenous Waste" column  [NEW; an earlier fix applied wrongly: R2 flag 8]
- Where: `topics-4-5-extras-a-c.ts`, topic 5, A1 table, Mollusca row, third cell (book p. 255 prints "Urea or ammonia").
- Says now: "Ammonia (aquatic forms); uric acid (land snails); kidney-like metanephridia".
- Wrong: "kidney-like metanephridia" is the excretory organ (already in column 2), not a waste.
- Fix: [NEW] "Ammonia (aquatic forms); uric acid (land snails)".
- Kind: applied fix wrong (transcription-type slip). Source: ours. Confidence: certain.

### 10. Topic 03 Worked example 1 conclusion: "both species and individuals" overclaims  [NEW]
- Where: `topics-1-3.ts`, Topic 03 (topic 2), Worked example 1 (CBSE), "Concluding statement" (p. 238).
- Says now: "...explains why arthropods outnumber all other animals in both species and individuals."
- Wrong: the species claim is NCERT's (over two-thirds of named species); the claim about individuals is not established (nematodes are usually cited as the most numerous animals by individuals).
- Fix: [NEW] "...explains why arthropods outnumber all other animals in number of species."
- Kind: overclaim. Source: book. Confidence: likely.

### 11. Key points: the lamprey is still "finless"  [REPEAT: R2 flag 3 fixed in the chapter, not in the key points]
- Where: `keypoints-biology-11-04.ts`, topic 3, kind 'mistake' ("Are all chordates vertebrates..."), answer, last sentence.
- Says now: "A jawless, finless lamprey is still a vertebrate, because of its cranium".
- Wrong: lampreys have dorsal and caudal (unpaired) fins; the chapter was corrected to "without paired fins".
- Fix: [NEW] "A jawless lamprey, with no paired fins, is still a vertebrate, because of its cranium".
- Kind: biology error. Source: book wording, left in the key point. Confidence: certain.

### 12. Additional C2: "from the chapter’s description of Obelia" contradicts the lead above it  [NEW]
- Where: `topics-4-5-extras-a-c.ts`, topic 7, C2, paragraph heading "The complete cycle (from the chapter’s description of <i>Obelia</i>):" (p. 264).
- Wrong: the lead (F2's own [NEW]) says "the chapter gives only the polyp-medusa alternation; the stages below are added detail beyond NCERT". The heading then says the stages are the chapter's.
- Fix: [NEW] "<b>The complete cycle (added detail beyond the chapter):</b>"
- Kind: false claim about the chapter. Source: book heading, now inconsistent with our lead. Confidence: certain.

### 13. Additional A3 table, Porifera: "seawater"  [NEW]
- Where: topic 5, A3 table, Porifera row (p. 257).
- Says now: "No circulatory system: all transport by diffusion through seawater in the canal system".
- Wrong: the chapter's own NCERT freshwater sponge, <i>Spongilla</i>, lives in fresh water.
- Fix: [NEW] "No circulatory system: all transport is by diffusion from the water flowing through the canal system".
- Kind: overgeneral. Source: book. Confidence: certain.

### 14. Additional B Worked example (Taenia), part (c): "eggs or cysts"  [NEW]
- Where: topic 6, ex "CBSE Board", step (c) (p. 261).
- Says now: "...proper disposal of human sewage to prevent cattle and pigs from ingesting eggs or cysts."
- Wrong: cattle and pigs are infected by eating tapeworm eggs (in gravid proglottids passed in human faeces); the cyst (cysticercus) forms in their muscle afterwards and is what infects humans.
- Fix: [NEW] "...to prevent cattle and pigs from swallowing the eggs (or the egg-filled gravid proglottids) passed in human faeces."
- Kind: biology error. Source: book. Confidence: certain.

### 15. Additional F Level 1 Q3: "whales and seals" lack pinnae  [NEW]
- Where: `extras-d-f.ts`, topic 10, Graded Practice item 3 answer (p. 279).
- Says now: "pinnae are absent in the platypus and in whales and seals".
- Wrong: eared seals (sea lions, fur seals) have small pinnae; Archetype 2 in the same topic correctly says "true seals".
- Fix: [NEW] "pinnae are absent in the platypus, whales and true seals".
- Kind: overgeneral / inconsistency. Source: book. Confidence: certain.

### 16. Additional B Worked example (filariasis): Culex as "the primary Indian rural vector"  [NEW]
- Where: topic 6, ex "NEET HOTS", step (p. 261); echoed in key points topic 6 ("the Indian rural vector") header comment.
- Says now: "(<i>Anopheles</i> and <i>Aedes</i> are also vectors, but <i>Culex</i> is the primary Indian rural vector.)"
- Wrong: <i>Culex quinquefasciatus</i> is India's main vector of <i>W. bancrofti</i>, but it is chiefly an urban and semi-urban mosquito breeding in polluted standing water; "rural" is the wrong qualifier.
- Fix: [NEW] "(<i>Anopheles</i> and <i>Aedes</i> can also transmit it, but in India the main vector is <i>Culex</i> (<i>C. quinquefasciatus</i>), which breeds in dirty standing water.)"
- Kind: unclear or misleading. Source: book. Confidence: possible.

### 17. Additional C1 table, Ammocoete: "Ciliated"  [NEW]
- Where: topic 7, C1 table, Ammocoete row, Stage cell (p. 263).
- Says now: "Ciliated, filter-feeding larval stage of the lamprey; lives burrowed in sand; metamorphoses into a parasitic adult after several years".
- Wrong: beside planula and trochophore, "ciliated" reads as a ciliated swimming larva; the ammocoete is a burrowing, eel-like larva that filter-feeds with a mucus-lined, ciliated pharynx. The key points already drop the word.
- Fix: [NEW] "Eel-like, filter-feeding larval stage of the lamprey (it feeds through a mucus-lined, ciliated pharynx); lives burrowed in sand; metamorphoses into a parasitic adult after several years".
- Kind: unclear or misleading. Source: book. Confidence: possible.

### 18. Topic 04 Exam Relevance: the examples given are the exceptions, not exception-free facts  [NEW]
- Where: Topic 04, Concept intuition, first paragraph (p. 242).
- Says now: "weighted heavily toward vertebrate-class characteristics “without a single exception” (the crocodile’s heart, the platypus’s eggs)".
- Wrong: the crocodile heart and platypus eggs are the exceptions that break the class rules; as written they read as the exception-free characteristics.
- Fix: [NEW] "weighted heavily toward “without exception” questions on vertebrate-class characteristics, where the exceptions (the crocodile’s heart, the platypus’s eggs) are the trap".
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 19. Additional D "Three facts", item 1: contradicts the D table's own caveat  [NEW]
- Where: `extras-d-f.ts`, topic 8, paragraph "Three facts that follow from this scheme", item 1 (p. 266).
- Says now: "1. Echinoderms and chordates share enterocoelom formation: this is a deeper body-plan similarity than merely both being coelomates."
- Wrong: two blocks above, the table (fixer's [NEW]) says the vertebrate coelom forms by splitting of the lateral plate mesoderm, so "chordates share enterocoelom formation" is the simplification it warns against.
- Fix: [NEW] "1. Echinoderms and chordates are both deuterostomes (and, in the usual textbook scheme, both enterocoelous): a deeper similarity than merely both being coelomates."
- Kind: internal inconsistency. Source: book, made inconsistent by our caveat. Confidence: likely.

### 20. Topic 03 Limiting conditions: why Hemichordata was put in Chordata  [NEW]
- Where: `topics-1-3.ts`, Topic 03, Limiting conditions bullet 3 (p. 235).
- Says now: "It was once placed inside Chordata because of its gill slits, but it lacks a true notochord".
- Wrong (incomplete): it was placed there also because its stomochord was taken for a notochord; Additional D and its Assertion–Reason item say exactly this, so Topic 03 gives half the reason.
- Fix: [NEW] "It was once placed inside Chordata because of its gill slits and a short rod (the stomochord) that was taken for a notochord, but it lacks a true notochord".
- Kind: incomplete. Source: book. Confidence: possible.

### 21. Figure 4.4 (Sycon section): choanocytes drawn as bars across the middle of the spongocoel  [NEW]
- Where: `lib/diagrams/biology-11-04.ts`, `b11-04-fig-4.4` (book p. 237).
- Wrong: the redraw (like the book) puts five rows of choanocyte circles across the centre of the cavity, with the water arrows passing between them; the caption and text say the spongocoel is lined with choanocytes. A student copying this draws collar cells floating in the cavity.
- Fix: draw the choanocytes as a single row lining the inner face of the body wall on both sides, and point "Choanocytes (collar cells)" at that lining; the caption can stay.
- Kind: figure error. Source: book drawing, kept in the redraw. Confidence: likely.

### 22. Figure 4.2, pseudocoelomate panel: the mesoderm patches float in the cavity  [REPEAT: R1 flag 3, partly fixed]
- Where: `b11-04-fig-4.2` (book p. 228).
- Wrong: the acoelomate and eucoelomate panels were fixed; the pseudocoelomate patches still sit a clear gap inside the ectoderm, while the label above says "mesoderm (patches on body wall)" and the book draws them against the wall.
- Fix: move the eleven patches outwards so each touches the inner side of the ectoderm ring.
- Kind: figure. Source: ours. Confidence: certain (seen on the render).

### 23. Additional E kalam is a copied quiz question  [NEW]
- Where: `extras-d-f.ts`, topic 9 `kalam`.
- Says now: "Which of the following is the correct sequence of larval forms in the life cycle of Fasciola?"
- Wrong: the kalam is the topic's one-line tagline; here it is the text of practice item 2, shown out of context (and with <i>Fasciola</i> roman).
- Fix: [NEW] "Test the whole chapter in mixed NEET and Board formats: single-concept, assertion–reason and HOTS."
- Kind: layout / unclear. Source: ours. Confidence: likely.

### 24. Topic 01, larval-forms line: a "figures" disclaimer on a claim that has no figures  [NEW]
- Where: `topics-1-3.ts`, Topic 01, last paragraph (p. 223).
- Says now: "(a common NEET one-mark, the book’s estimate from past papers, not official figures)".
- Wrong: reads oddly (there is no number to be an estimate of).
- Fix: [NEW] "(a common NEET one-mark, in the book’s view)".
- Kind: wording. Source: ours. Confidence: certain.

### 25. Additional A1 table, Arthropoda: superlative  [NEW]
- Where: topic 5, A1 table, Arthropoda "Nature of System" cell (p. 255).
- Says now: "Malpighian tubules are the landmark: arthropods have the most varied excretory equipment in the kingdom".
- Fix: [NEW] "Malpighian tubules are the landmark; arthropods use several different excretory organs".
- Kind: overclaim (superlative). Source: book. Confidence: possible.

### 26. Notation: Chameleon and Hydra  [NEW]
- F Level 1 Q4 option "(c) Chameleon" is roman, while Topic 05 sets it <i>Chameleon</i> (the book's genus spelling; current genus <i>Chamaeleo</i>). Fix: [NEW] "(c) <i>Chameleon</i> (tree lizard)" and in the answer "(cobra, turtle, tree lizard)".
- Key points topic 1 'shortcut' `why`: "Hydra radial" is roman while other `why` fields italicise genera. Fix: "<i>Hydra</i> radial".
- Kind: notation. Source: book / ours. Confidence: certain (consistency).

---

## Earlier flags applied wrongly or incompletely
- R1 6 (schizocoelom "by body plan"): applied, but the phrase is unclear (flag 8 above).
- R1 3 (Fig 4.2): pseudocoelomate patches still off the body wall (flag 22).
- R2 3 (cyclostome Reason): the bracket marked "NCERT" contains non-NCERT detail and sits inside the Reason (flag 1); the key points still say "finless" (flag 11).
- R2 8 (Mollusca waste): an organ left in the waste column (flag 9).
- R2 16 (F Level 2 Q5): flagged weak, left unresolved; it now contradicts Topic 03 MCQ 4 (flag 7).
- R2 25 (F Level 1 Q4): "in this chapter's lists, only crocodiles" is false because of <i>Alligator</i> (flag 2).
- F1 41 says the Fig 4.6 label "Notochord rod throughout life" is new; it is in fact printed on the book's p. 247 under panel A, so it restores the book rather than adding wording (no harm; the new-text list can drop it).
All other F1 and F2 [NEW] items were checked and are correct and plain.

## Rulings on the founder decisions in the new-text files
- F1 37 / Reptilia errata: agree; the errata cell "3-chambered (4 in crocodiles)" is correct biology and is what NCERT says.
- F2 1 (Chondrichthyes notochord): NCERT does print "Notochord is persistent throughout life" for Chondrichthyes; nothing in the chapter now contradicts it. Agree.
- F2 2 (title "What NEET Actually Asks"): the body now says "the book's estimate"; the title still claims knowledge of the real paper. Safer: "What NEET Asks: The Book's View" (founder's call).
- F2 3: see flag 7.
- F2 5 (D5(c) Branchiostoma/Antedon): correct.
- F2 Exam Tips NCERT quote: NCERT's mammal text does say "They are viviparous with few exceptions" and lists <i>Ornithorhynchus</i> as oviparous. Correct.

## Counts verified
- Topics: 11 (Topics 01 to 05, Additional A to F); blocks: 293.
- MCQ blocks: 12 (Topics 02, 03, 04, four each); every key checked against the book's "Correct:" letter and against the biology: 12/12 match the book; 1 has a second defensible answer (flag 6).
- Worked examples (`ex`): 25; every printed answer checked (all match the book; F Archetype 1 and Q9 (v) changed by fixers on R2 flag 2, both now correct).
- Practice items: 59 (5 per main topic, 5 each in A to D, 5 + 3 + 4 in E, 12 in F); every key checked; 1 weak key (flag 7), 2 wrong answer texts (flags 2, 15).
- Assertion–reason items: 14; every fourth option reads "A false, R true" (none says "both false").
- Tables checked cell by cell against the page images: phylum matrix (pp. 234 to 235, 10 rows x 7), vertebrate class table (p. 243, 7 x 8), Master Revision table (p. 251, 19 x 7), A1/A2/A3 (pp. 254 to 258), B1/B2/mosquito (pp. 259 to 261), C1 (p. 263), D (p. 266), F distribution and traps (pp. 272, 277 to 278).
- Numbers recomputed: earthworm hearts in segments 7, 9, 12, 13 (four pairs); cyclostome gill slits 6 to 15 pairs; heart chambers 2/3/4 by class; eight comb-plate rows; seven vertebrate classes; ten non-chordate phyla; Fasciola five larval stages (miracidium, sporocyst, redia, cercaria, metacercaria); mnemonic initials P-C-C-P-A-A-A-M-E-H against the ten phyla in order; F shares 20–25 + 30–35 + 40–45 % (sum 90 to 105 %, indicative as the book says); match-the-column options in F Archetype 4 and Level 2 Q8 (each distractor's mismatches recounted: four in (a), one swap each in (c) and (d)).
- Additional-topic introductions (A, A1, A2, A3, B, B2, C, C2, C3, D) checked against Topics 01 to 05 as built: all true except C2's heading (flag 12).
- Key points: 31 points read against the chapter; 3 flags (3, 4, 11) plus one notation item (26).

## Figures checked (with pages)
- 4.1 (drawn p. 224, caption p. 223): all labels, ten phyla in order, every example genus, every Yes/No branch: matches.
- 4.2 (p. 228, caption p. 227): matches except the pseudocoelomate patches (flag 22).
- 4.3 (p. 237, caption p. 236): every question and answer label and every end phylum: matches (the book's misplaced Ctenophora box is correctly not repeated).
- 4.4 (p. 237, caption p. 236): all labels; "mesohyl" correction right; choanocyte placement (flag 21).
- 4.5 (p. 245, caption p. 244): matches.
- 4.6 (p. 247, caption p. 246): matches.
- Italics on the renders: every genus label italic; nothing else italic except the book's question/answer labels.

## What I could not check
- The renders use the Mac's stand-in fonts (qlmanage), so type weight and the exact phone layout were not judged; the Android/iPhone look is outside this review.
- I did not run `pdfimages -list` over all of pp. 221 to 283 for unnumbered drawings; the page images I read (224, 228, 234, 235, 237, 243, 245, 247, 251) show no extra drawing, and the diff found no unmatched caption text, but pages not imaged were not inspected for vector art.
- The NCERT wordings cited above are from my knowledge of the current NCERT Class 11 text, not from a copy of it in the repo.
