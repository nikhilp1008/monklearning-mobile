# Biology 11 Chapter 2 (Biological Classification): third expert review (R3, Opus), whole chapter as it now stands

Reviewer: R3 (third independent review, Claude Opus), 2026-11-17. Scope: content/textbooks/bio-11-02/topics-0-2.ts, topics-3-5.ts, extras.ts; lib/diagrams/biology-11-02.ts; lib/revise/keypoints-biology-11-02.ts. Nothing in the repo was edited. No tsc, jest or git was run (the figures were rendered by transpiling the diagram file with the repo's sucrase in a scratch folder, then qlmanage).

Method: (1) every app string extracted per topic and word-diffed against bio11.paged.txt for the topic's pages (pp. 64-141); every reordering or replacement the diff threw up was read; (2) every block of every topic read in full for biology, notation and overclaiming; (3) page images for all eight figure pages (66, 74, 77, 84, 93, 96, 102, 110) and the two table pages most at risk (67 master table, 118 Gram table); (4) every MCQ key, worked answer, match and statement item recomputed; (5) each Additional topic introduction checked against Topics 00-05 as built; (6) every item in new-text-F1.md and new-text-F2.md checked. Only after that were review-R1-topics-0-5.md and review-R2-extras-A-H.md read and each flag marked NEW or REPEAT.

Kinds: biology error / nomenclature / number / wrong MCQ answer / transcription slip / figure error / unclear or misleading. [NEW] = our own proposed wording.

## Flags, most serious first

### 1. H, Graded Practice Set Q8, Reason (R): duplicated words (fixer slip)  [NEW flag]
- Where: extras.ts, Additional H (index 13), "A Graded Practice Set", item 8 `q`; book p. 139.
- Says now: "Reason (R): Viruses are acellular and are acellular and metabolically inert outside a host cell, lacking the cellular organisation on which the five-kingdom scheme is based."
- Wrong: "are acellular and" is printed twice; F2's replacement of the book's "behave as inert crystals" was pasted after the existing "are acellular and".
- Fix: "Reason (R): Viruses are acellular and metabolically inert outside a host cell, lacking the cellular organisation on which the five-kingdom scheme is based."
- Kind: transcription slip. Source: ours (fixer F2). Confidence: certain.

### 2. Additional A (and G2, KP A): "as anciently diverged as either is from the eukaryotes" contradicts "Archaea are sister to Eukarya"  [NEW; R2 flag 9 applied wrongly]
- Where (all extras.ts unless noted, book pp. 115-117, 129-130):
  (a) A, Method, "The domain logic": "...two groups so deeply diverged that they do not share a recent common ancestor with each other any more than either shares one with eukaryotes; the three-domain system itself was proposed in 1990."
  (b) A, Practice 2 Reason: "Molecular studies show that archaebacteria and eubacteria are as different from each other as either is from eukaryotes."
  (c) A, Practice 2 answer (F2 [NEW]): "...two lineages as anciently diverged from each other as either is from the eukaryotes."
  (d) A, Practice 5 answer: "...Archaea and Bacteria are as anciently diverged as any other pair of domains..."
  (e) G, item 2 answer: "...archaebacteria and eubacteria are as anciently diverged as any pair of domains..."
  (f) keypoints-biology-11-02.ts, topic 6 first point `a`: "...two groups as anciently diverged from each other as either is from the eukaryotes, with Archaea closer to Eukarya on the rRNA evidence."
- Wrong: the same section (and F2's own wording) says the rRNA tree's deepest split is Bacteria versus Archaea-plus-Eukarya, i.e. Archaea share a more recent ancestor with Eukarya than with Bacteria. Then Archaea are NOT as far from eukaryotes as from Bacteria. (f) contradicts itself inside one sentence. Equidistance was Woese's 1977 picture; the rooted tree (1989-90) is the one the chapter now teaches.
- Fix [NEW]:
  (a) "...showed that “prokaryotes” are actually two groups that diverged at the very root of the tree of life; the three-domain system itself was proposed in 1990."
  (b) "Reason (R): Molecular (rRNA) studies show that archaebacteria and eubacteria are two lineages that separated at the root of the tree of life."
  (c) "(a) Both A and R are true, and R is the correct explanation of A. Molecular phylogeny (rRNA sequencing) shows that the prokaryote kingdom Monera holds two lineages that separated at the root of the tree of life, so one kingdom cannot hold them both."
  (d) "...The three-domain system reveals that Archaea and Bacteria separated at the root of the tree of life, so grouping them together misrepresents their evolutionary relationship. The domain system places Archaea closer to Eukarya than to Bacteria, reflecting the tree of life as the rRNA evidence shows it."
  (e) "...show that archaebacteria and eubacteria separated at the root of the tree of life, justifying their placement in separate domains."
  (f) "Woese’s rRNA sequencing showed the prokaryotes to be two groups that separated at the root of the tree of life, with Archaea closer to Eukarya on the rRNA evidence."
- Kind: biology error (internal contradiction). Source: book (a, b, d, e) and ours (c, f; R2 9 proposed (c)). Confidence: certain.

### 3. Topic 00 Pro-Tip decision tree (and KP topic 0 shortcut) sends yeast to Protista  [REPEAT: R1 flag 10 applied wrongly]
- Where: topics-0-2.ts, Topic 00, "Common student pitfalls and pro-tips", protip; book p. 71. Keypoints topic 0, kind 'shortcut'.
- Says now: "(2) Multicellular? If single-celled, Protista. If multicellular: makes its own food with a cellulose wall → Plantae; absorbs food with a chitin wall → Fungi; ingests food with no wall → Animalia. Cell type first, then body organisation, then nutrition + wall." KP: "If it is a eukaryote, ask whether it is single-celled: if so, Protista."
- Wrong: yeast is a single-celled eukaryote with a chitin wall that absorbs its food; the chapter itself (Topic 03) calls it the unicellular fungus. The tree now files it under Protista. (Chlamydomonas/Chlorella, which NCERT puts with the algae, fall the same way.) The book's own order ("single-celled and none of the above → Protista", last) was safer; the fix moved the single-celled test first.
- Fix [NEW] (protip): "To place any organism, run the table top-down: (1) prokaryote? → Monera. If eukaryote: (2) makes its own food with a cellulose wall → Plantae; absorbs food with a chitin wall → Fungi (yeast too, though single-celled); multicellular, ingests food, no wall → Animalia. (3) A single-celled eukaryote that fits none of these → Protista (diatoms and dinoflagellates are walled and photosynthetic, yet protists). Cell type first, then nutrition + wall, then body organisation."
  KP `a` [NEW]: "Run the table top down. Prokaryote? Monera. If it is a eukaryote: makes its own food with a cellulose wall, Plantae; absorbs food with a chitin wall, Fungi (yeast too, though single-celled); multicellular, ingests food, no wall, Animalia. A single-celled eukaryote that fits none of these is Protista."
- Kind: biology error. Source: ours (F1/KP rewrite). Confidence: certain.

### 4. Topic 00: "the deepest division in all of biology" contradicts Additional A  [NEW]
- Where: topics-0-2.ts, Topic 00, "Classification framework...", Whittaker's criteria, item 1; book p. 65. Also MCQ1 solution "it is a far deeper difference than colour, size or nutrition".
- Says now: "1. Cell structure: ... This is the deepest division in all of biology and is why Monera stands apart from every other kingdom..."
- Wrong: Additional A (and its F2 wording) states "The deepest split in the living world is not “prokaryote vs eukaryote.”" A student reading both gets two opposite statements.
- Fix [NEW]: "This is the most fundamental division used in the five-kingdom system and is why Monera stands apart from every other kingdom, however else its members behave."
- Kind: unclear or misleading (contradiction). Source: book. Confidence: certain.

### 5. Additional A, "Why the Domain System Matters": wrong subject for "despite sharing the prokaryote label"  [NEW]
- Where: extras.ts, A, part "Why the Domain System Matters Evolutionarily"; book p. 116.
- Says now: "Eukaryotes (Domain Eukarya) are more closely related to Archaea than to Bacteria on the rRNA evidence, despite sharing the prokaryote label with Bacteria under Whittaker’s scheme."
- Wrong: grammatically the eukaryotes share the prokaryote label; it is Archaea that share it.
- Fix [NEW]: "Archaea are more closely related to Eukarya than to Bacteria on the rRNA evidence, despite sharing the prokaryote label with Bacteria under Whittaker’s scheme."
- Kind: unclear or misleading. Source: book (kept by F2). Confidence: certain.

### 6. Topic 04 pitfall: algae said not to be Plantae  [NEW]
- Where: topics-3-5.ts, Topic 04, Common student pitfalls, item 5; book p. 106.
- Says now: "Confusing a mushroom or alga with these kingdoms. A mushroom is a fungus and many “pond scums” are protists or algae: being green or growing like a plant does not make something Plantae."
- Wrong: in NCERT (and in this very topic: "It includes everything from simple algae through bryophytes...") algae ARE Kingdom Plantae. Pond scum is usually green algae (Spirogyra) or cyanobacteria.
- Fix [NEW]: "Confusing a mushroom or a blue-green “alga” with these kingdoms. A mushroom is a fungus, and many “pond scums” are cyanobacteria (Monera) or protists: being green or growing like a plant does not by itself make something Plantae."
- Kind: biology error. Source: book. Confidence: certain.

### 7. Additional B (and KP B): "The shape name and the genus name are unrelated"  [NEW]
- Where: extras.ts, B1, note after the shape table; book p. 118. Keypoints topic 7 first point: "the shape name is unrelated to the genus Bacillus".
- Wrong: the genus Bacillus is named for its rod shape (bacillus = little rod). The real point is that not every rod (bacillus) belongs to the genus Bacillus (E. coli is a rod).
- Fix [NEW] (B): "Note: “Bacillus” is both a shape and a genus name (e.g., <i>Bacillus anthracis</i> causes anthrax). The genus is named for its rod shape, but not every rod-shaped bacterium belongs to the genus <i>Bacillus</i> (<i>E. coli</i> is a rod too)."  KP [NEW]: "the shape name bacillus is not the genus <i>Bacillus</i>: every <i>Bacillus</i> is a rod, but not every rod is a <i>Bacillus</i> (<i>Bacillus anthracis</i> causes anthrax)."
- Kind: biology error. Source: book. Confidence: certain.

### 8. Topic 03 cheat sheet: "clamp connections in Asco/Basidio"  [NEW]
- Where: topics-3-5.ts, Topic 03, Cheat sheet row "Sexual cycle"; book p. 99.
- Says now: "plasmogamy → karyogamy → meiosis; dikaryon (n+n) & clamp connections in Asco/Basidio."
- Wrong: clamp connections are a Basidiomycete feature (Topic 03 3.3 itself says "In many Basidiomycetes"; Additional D says Ascomycetes use croziers and "the clamp mechanism belongs to the Basidiomycetes").
- Fix [NEW]: "plasmogamy → karyogamy → meiosis; dikaryon (n+n) in Asco/Basidio; clamp connections in many Basidiomycetes."
- Kind: biology error. Source: book. Confidence: certain.

### 9. Topic 03: yeast credited with raising idli batter  [NEW]
- Where: topics-3-5.ts, Topic 03, 3.5 "Why fungi matter", beneficial paragraph; book p. 97.
- Says now: "Saccharomyces (brewer’s/baker’s yeast) is the workhorse of fermentation, raising bread dough and the batter for idli, and producing beer and wine..."
- Wrong: NCERT (Class 12, Microbes in Human Welfare) says the dough for dosa and idli is fermented by bacteria; a NEET item on this keys bacteria.
- Fix [NEW]: "...is the workhorse of fermentation, raising bread dough and producing beer and wine: the CO<sub>2</sub> it releases is what makes dough puff up."
- Kind: biology error (against NCERT). Source: book. Confidence: likely.

### 10. Additional F: Chlamydomonas and Chlorella filed under Kingdom Protista  [NEW; F2 [NEW] line]
- Where: extras.ts, F, "Kingdom Protista", plant-like protists, new line "Hard-to-place green algae: Chlamydomonas, Chlorella".
- Wrong: NCERT puts both in Plantae (algae, Chlorophyceae, Chapter 3); filing them in a Protista index teaches the wrong kingdom. Topic 00 only says they "sit uneasily on kingdom boundaries".
- Fix [NEW]: delete the line from Protista and add under "Kingdom Plantae": "• Green algae placed in Plantae (NCERT), though they sit near the protist boundary: <i>Chlamydomonas</i>, <i>Chlorella</i>".
- Kind: unclear or misleading. Source: ours (F2). Confidence: likely.

### 11. Additional F: Clostridium and Streptomyces are in the chapter; F2 decision 5 wrong  [REPEAT: R2 flag 2, not applied]
- Where: new-text-F2.md decision 5 says "Clostridium and Streptomyces (report says in chapter; not found in Topics 00-05 text)". They are: topics-0-2.ts Topic 01 table "Archaebacteria vs Eubacteria", Examples row ("Cyanobacteria, <i>Bacillus</i>, <i>Clostridium</i>, <i>Mycoplasma</i>") and Topic 01 3.4 ("certain bacteria (e.g., <i>Streptomyces</i>) are sources of antibiotics").
- Fix [NEW] in F, "Eubacteria (by function)": add "• Spore-former: <i>Clostridium</i>" and "• Antibiotic source: <i>Streptomyces</i>".
- Kind: transcription slip (incomplete index). Source: ours. Confidence: certain.

### 12. Additional G3 answer: (c) dropped unlisted; "(b) is for interest" leaves one difference  [NEW; R2 flag 8 applied wrongly]
- Where: extras.ts, G item 3 answer; book p. 130.
- Says now: "(a) Heterocysts have a thickened, multilayered wall ...; (b) Heterocysts lack the photosystem II oxygen-evolving complex and so do not release oxygen or fix CO<sub>2</sub> by photosynthesis; they are dedicated to nitrogen fixation. Two differences are enough; (b) is for interest and goes beyond the chapter."
- Wrong: the question asks for two differences; marking (b) "for interest" leaves one. The book's (c) ("heterocysts are non-viable for regrowth...") was removed without being listed in new-text-F2. (b)'s core fact is in the chapter (Additional B: heterocysts "do not carry out oxygen-releasing photosynthesis").
- Fix [NEW]: "(b) Heterocysts do not carry out oxygen-releasing photosynthesis (they lack the oxygen-evolving photosystem II), so they keep the oxygen-free conditions nitrogenase needs; ordinary cells photosynthesise and release O<sub>2</sub>." and delete "Two differences are enough; (b) is for interest and goes beyond the chapter." List the (c) removal in new-text-F2.
- Kind: unclear or misleading. Source: ours. Confidence: certain.

### 13. Topic 01 vs Topic 02: two kingdoms each called "most varied"  [NEW]
- Where: topics-0-2.ts, Topic 01 intuition ("They are the single most abundant and the most metabolically diverse organisms on the planet.") vs Topic 02 intuition ("their nutrition is the most varied of any single kingdom") and Topic 02 cheat-sheet row "Most varied nutrition of any kingdom"; keypoints topic 2 first point ("has the most varied nutrition of any kingdom"). Book pp. 72, 82, 90.
- Fix [NEW]: Topic 01: "They are the most abundant micro-organisms (NCERT) and among the most metabolically diverse organisms on the planet." Topic 02: "their nutrition is among the most varied of any kingdom"; cheat-sheet row "Very varied nutrition"; KP: "and has very varied nutrition".
- Kind: unclear or misleading (superlatives in conflict). Source: book. Confidence: certain.

### 14. Topic 01: archaebacteria called the "oldest" lineage  [NEW]
- Where: topics-0-2.ts, Topic 01 table "Archaebacteria vs Eubacteria", Habitat row: "Extreme / harsh (the “oldest” survivors)"; worked question 1 Examiner tip: "archaebacteria are often the oldest, most extremophilic lineage". Book pp. 73, 78.
- Wrong: neither domain is older than the other: on the chapter's own rRNA account they separated at the root. NCERT does not call archaebacteria older.
- Fix [NEW]: table cell "Extreme / harsh habitats"; tip "...add a fourth contrast: archaebacteria are typically extremophiles of harsh habitats, whereas eubacteria dominate everyday habitats including the human body and soil."
- Kind: biology error. Source: book. Confidence: likely.

### 15. Additional D Practice 1 and G15: perfect stage "borne in a fruiting body", asci or basidia only  [NEW; R2 flag 7 wording]
- Where: extras.ts, D Practice 1 answer: "...producing sexual spores in spore-bearing structures (asci or basidia) borne in a fruiting body."; G item 15 answer: "...the ascus in Ascomycetes or the basidium in Basidiomycetes, spore-bearing structures borne in a fruiting body."
- Wrong: yeast forms naked asci with no fruiting body, and the Phycomycetes' perfect stage is the zygospore (no ascus, basidium or fruiting body).
- Fix [NEW]: D Practice 1: "The perfect stage is the complete sexual cycle (plasmogamy → karyogamy → meiosis), ending in sexual spores (for example zygospores, ascospores in asci or basidiospores on basidia, often in a fruiting body)." G15: "...because fungi are classified by their sexual (perfect) stage, for example the ascus of Ascomycetes or the basidium of Basidiomycetes."
- Kind: biology error (overgeneral). Source: ours. Confidence: likely.

### 16. Additional D Practice 2 assertion-reason: cause and effect reversed relative to Topic 03  [NEW]
- Where: extras.ts, D Practice 2 (A: "Deuteromycetes is called an artificial/heterogeneous group." R: "Once the sexual stage ... is discovered, it is removed from the group." key (a)); Topic 03 worked question 4 has the reverse pairing (A: removed on discovery; R: artificial group defined by the missing stage), also keyed (a).
- Wrong: both directions cannot be "R explains A". The group is artificial because it is defined only by a missing sexual stage; removal follows from that. The answer's own explanation argues from the definition, not from R.
- Fix [NEW]: "Reason (R): Deuteromycetes is defined only by the absence of a known sexual stage, not by shared ancestry." (key (a) stands; answer unchanged).
- Kind: wrong MCQ answer (possible). Source: book. Confidence: possible.

### 17. Additional A: "together they replace Kingdom Monera"  [NEW]
- Where: extras.ts, A, Method, "Domain-kingdom mapping": "Both Archaea and Bacteria are prokaryotic, so together they replace Kingdom Monera." (also the kalam, not rendered).
- Wrong: the chapter (and the retitle to "Split") teaches that domains refine, not replace, kingdoms; the table row "Kingdom(s): Monera" keeps Monera.
- Fix [NEW]: "Both Archaea and Bacteria are prokaryotic, so Kingdom Monera is divided between them."
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 18. Topic 05: renumbering cross-reference "Topics 01 to 03"  [NEW]
- Where: topics-3-5.ts, Topic 05 intuition: "...set aside almost everything you learned about cell structure in Topics 01 to 03." Book p. 108 "in the first three sub-topics".
- Wrong: in the app's page order Topic 04 (Plantae & Animalia, cellular) also comes before Topic 05.
- Fix [NEW]: "...in Topics 01 to 04." List with the DECISIONS-B11 10 renumberings.
- Kind: transcription slip (cross-reference). Source: ours. Confidence: likely.

### 19. Cuscuta / "mostly multicellular" fixes not carried through everywhere  [REPEAT: R1 flags 11, 12]
- Where and says now:
  (a) Topic 04 limiting conditions: "remember the insectivorous (partially heterotrophic) and parasitic (non-photosynthetic) exceptions"
  (b) Topic 04 pitfall 1: "a plant can be heterotrophic in part or in whole and still be a plant"
  (c) Topic 04 cheat sheet row "Shared": "both eukaryotic, multicellular, reproduce sexually."
  (d) Topic 00 Crack the MCQ 2, nudge (d): "Plantae are autotrophic and multicellular."
- Fix [NEW]: (a) "parasitic (almost no chlorophyll)"; (b) "a plant can be heterotrophic in part or almost wholly and still be a plant"; (c) "both eukaryotic, mostly multicellular, reproduce sexually."; (d) "(d) Plantae are mostly autotrophic and mostly multicellular."
- Kind: unclear or misleading. Source: ours (incomplete fix). Confidence: certain.

### 20. Additional G9 assertion: clamp connections stated without "many"  [REPEAT-ish: R2 flag 7 scope]
- Where: extras.ts, G item 9: "Assertion (A): Clamp connections are found in dikaryotic Basidiomycete mycelium." Answer: "Clamp connections form at septation in dikaryotic Basidiomycete hyphae specifically..."
- Fix [NEW]: "Assertion (A): Clamp connections are found in the dikaryotic mycelium of many Basidiomycetes." Answer: "...form at septation in the dikaryotic hyphae of many Basidiomycetes (not rusts and smuts) to ensure..."
- Kind: biology error (overgeneral). Source: book. Confidence: likely.

### 21. Figs 2.2 and 2.3: mesosome drawn as a free vesicle  [NEW]
- Where: lib/diagrams/biology-11-02.ts, b11-02-fig-2.2 case "Prokaryotic cell" and b11-02-fig-2.3; book pp. 74, 77.
- Wrong: the mesosome is drawn as a small circle floating in the cytoplasm, clear of the plasma membrane. The text says the membrane "folds inward to form the mesosome", and the book's p. 77 drawing sets the circle on the membrane.
- Fix: draw the mesosome as an inward fold continuous with the plasma membrane (or at least touching it), leader unchanged.
- Kind: figure error. Source: ours (redraw). Confidence: likely.

### 22. Option labels with genus names not italic  [REPEAT: R1 flag 24 premise wrong]
- Where: topics-0-2.ts Topic 01 Crack the MCQ 3 option (c) label "Mycoplasma"; Topic 02 Crack the MCQ 4 labels "Amoeba", "Paramecium", "Trypanosoma", "Plasmodium".
- Wrong: R1 assumed labels are plain text; they take markup (Chapter 3, bio-11-03/topics-1-3.ts, labels '<i>Chlamydomonas</i>, <i>Volvox</i>, ...'). DECISIONS-B11 6 requires italics.
- Fix: label '<i>Mycoplasma</i>', '<i>Amoeba</i>', '<i>Paramecium</i>', '<i>Trypanosoma</i>', '<i>Plasmodium</i>'.
- Kind: nomenclature. Source: ours. Confidence: certain.

### 23. Remaining exam-frequency claims and superlatives  [partly REPEAT: R1 flag 26 listed "recurring CUET/NEET item"; rest NEW]
- Where / says now (all unlabelled, no "book's estimate" note):
  topics-0-2.ts: Topic 00 table title "(the single most useful table in the chapter)"; Topic 00 pitfall 4 "they are frequently asked"; Topic 01 Exam Relevance "Monera is a NEET favourite" (label follows later, fine); Topic 02 Exam Relevance "Protista is one of the highest-yield topics" and "Many recent NEET items test fine discriminations"; Topic 02 table title "(this is the table examiners love to test)"; Topic 01 "Remove Monera and ecosystems would choke on their own waste within weeks".
  topics-3-5.ts: Topic 03 Exam Relevance "assertion–reason and match-the-column formats appear here more than almost anywhere else in the chapter"; Topic 03 worked Q2 "grouping the three together is a recurring CUET/NEET item"; Topic 03 MCQ4 nudge "the single most common swap in this whole topic"; Topic 05 Exam Relevance "Prions ... have appeared in recent papers"; Topic 05 intuition "the single most important idea in this whole topic, and examiners test it endlessly".
- Fix [NEW]: "(a very useful table in the chapter)"; "they are often asked"; "Protista is a high-yield topic"; "NEET items often test fine discriminations"; "(a table examiners often test)"; "Without bacteria, dead matter would build up and nutrient cycles would stall"; "assertion–reason and match-the-column formats are common here"; "grouping the three together is a common item"; "a very common swap in this topic"; "Prions and the virus–viroid–prion comparison are also asked"; "the central idea of this topic, and examiners test it often".
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 24. Topic 02 Noctiluca sentence repeats "bioluminescent"  [NEW; F1 [NEW] wording]
- Where: topics-0-2.ts, Topic 02, 3.2 dinoflagellates: "some (e.g., <i>Noctiluca</i>, a mostly heterotrophic, bioluminescent dinoflagellate) are bioluminescent: the eerie “sea sparkle”..."
- Fix [NEW]: "some are bioluminescent (e.g., <i>Noctiluca</i>, a mostly heterotrophic dinoflagellate): the eerie “sea sparkle”..."
- Kind: unclear (style). Source: ours. Confidence: certain.

### 25. Topic 02: "absorb decaying matter" now clashes with "engulfing"  [NEW]
- Where: topics-0-2.ts, Topic 02, 3.1 paragraph after the three lifestyles: "Fix the lifestyle first (does it photosynthesise, hunt, or absorb decaying matter?)" while the line above (R1 22 fix) says slime moulds feed "by engulfing it".
- Fix [NEW]: "(does it photosynthesise, hunt, or feed on decaying matter?)"
- Kind: unclear. Source: book (left after fix). Confidence: likely.

### 26. Topic 01: "many form endospores" (and KP topic 1 mixup `why`)  [NEW]
- Where: topics-0-2.ts, Topic 01, 3.2: "Under unfavourable conditions: many form endospores"; KP: "many bacteria form tough endospores in unfavourable conditions".
- Wrong: endospores are formed by a few Gram-positive genera (e.g., <i>Bacillus</i>, <i>Clostridium</i>); NCERT says only "they produce spores".
- Fix [NEW]: "Under unfavourable conditions: some (e.g., <i>Bacillus</i>, <i>Clostridium</i>) form endospores: ..."; KP "some bacteria (e.g., <i>Bacillus</i>, <i>Clostridium</i>) form tough endospores".
- Kind: biology error (overgeneral). Source: book. Confidence: likely.

### 27. Archaebacterial wall "pseudomurein" given for all archaebacteria  [NEW]
- Where: topics-0-2.ts, Topic 01 table, Cell wall, Archaebacteria: "No peptidoglycan; wall has protein + non-cellulosic polysaccharides (pseudomurein)".
- Wrong: pseudomurein occurs only in some methanogens; most archaea have protein (S-layer) walls.
- Fix [NEW]: "No peptidoglycan; wall of protein and non-cellulosic polysaccharides (pseudomurein in some methanogens)".
- Kind: biology error (overgeneral). Source: book. Confidence: likely.

### 28. Topic 00: fungi kept with plants "only ... because both happen to be non-motile"  [NEW]
- Where: topics-0-2.ts, Topic 00, "How the five kingdoms reorganised life", Fungi bullet; book p. 67.
- Fix [NEW]: "...so grouping them with green plants never made biological sense and persisted mainly because both are walled and non-motile."
- Kind: unclear (overclaim). Source: book. Confidence: possible.

### 29. Additional F: two indexing slips  [NEW]
- (a) F, Protista: "Diatoms (centric and pennate types: <i>Navicula</i>, <i>Pinnularia</i>)": both genera are pennate. Fix [NEW]: "Diatoms (centric and pennate types; e.g., the pennate <i>Navicula</i> and <i>Pinnularia</i>)". Source: book. Confidence: certain.
- (b) F, Plantae: "Fully autotrophic comparison: <i>Spirogyra</i>" and "Gymnosperm: <i>Cycas</i>" sit under the heading "Autotrophic exceptions:". Fix [NEW]: a separate paragraph "Other examples named in the chapter:" holding those two lines. Source: ours (F2). Confidence: certain.
- Kind: unclear or misleading.

### 30. Small figure points  [NEW]
- (a) Fig 2.2, Eukaryotic cell: the Golgi apparatus leader dot ends in empty cytoplasm below the stack; move it onto the arcs. Confidence: certain. Figure error, ours.
- (b) Fig 2.5: the dashed arrow into "Hypha magnified" starts from the "substrate" box, so the inset reads as a magnified substrate; start it from a hypha (book p. 93 runs it from the mycelium to the inset). Confidence: likely. Figure error, ours.
- (c) Fig 2.6: "Ascospores in Ascus" shows four ascospores; the typical ascus (NCERT-level teaching) holds eight. Book's drawing; note for the founder, or draw eight. Confidence: possible. Figure, book.
- (d) Fig 2.8 (a): label "Tail fibers" while the caption says "tail fibres" (British spelling everywhere else); (b): the "helically arranged capsomeres" are drawn as two straight columns of beads, which reads as a ladder, not a helix. Book labels it "Tail fibers". Confidence: certain (spelling) / possible (helix). Figure, book/ours.

### 31. Minor science notes  [NEW]
- (a) H Q7 statement (iv): "plants (e.g., little leaf of brinjal)": the agent is a phytoplasma (a wall-less, Mycoplasma-like organism); keep the key, add "(caused by a Mycoplasma-like phytoplasma)". Book. Possible.
- (b) KP topic 13 traps: "Pili, not fimbriae, carry the F factor." The F factor passes through the pilus bridge. [NEW] "The F factor passes through sex pili, not fimbriae." Ours. Likely.
- (c) Topic 04 3.1: "the producers that ultimately feed nearly every other organism, including all animals" (vent animals live on chemosynthetic bacteria). [NEW] "...including almost all animals." Book. Possible.
- (d) Topic 05 3.1 and KP topic 5: "Viruses are too small to be seen with a light microscope" (giant viruses are visible). [NEW] "Most viruses are too small...". Book. Possible.
- (e) G item 4: a "soil bacterium" answered with <i>E. coli</i> and <i>Salmonella typhi</i> (gut bacteria). [NEW] "(b) any Gram-negative bacillus, e.g., <i>Escherichia coli</i>, <i>Salmonella typhi</i> or <i>Klebsiella</i>." is fine if the stem drops "soil": "A student observes a bacterium under a microscope...". Book. Possible.

## Earlier flags I believe were applied wrongly or not applied
- R1 flag 10 (decision tree): applied, but the new tree files single-celled yeast in Protista (flag 3).
- R1 flag 24 (italics): "option labels plain-text limit" is wrong; labels take <i> (flag 22).
- R1 flags 11 and 12: not carried into four places (flag 19).
- R1 flag 26: "recurring CUET/NEET item" still present (flag 23).
- R2 flag 2: Clostridium and Streptomyces are in Topic 01; F2 decision 5 rejected them wrongly (flag 11).
- R2 flag 9: its proposed A Practice 2 answer "as anciently diverged from each other as either is from the eukaryotes" is false on the rooted tree it also proposes (flag 2).
- R2 flag 8 ("G3 extras 'for interest'"): applied to (b), a chapter-level fact, while (c) was deleted without being listed (flag 12).
- F2's H Q8 replacement left duplicated words (flag 1).

## New-text (F1, F2) wording checked
Every item in new-text-F1.md and new-text-F2.md was checked in place. Correct and plain: all F1 items except the decision tree (flag 3) and the Noctiluca sentence (flag 24); all F2 items except A Practice 2 (flag 2), the KP A sentence (flag 2f), F "Hard-to-place green algae" line (flag 10), F "Fully autotrophic comparison"/"Gymnosperm" placement (flag 29b), G3 ending (flag 12), D Practice 1 and G15 "fruiting body" (flag 15), H Q8 (flag 1) and the Clostridium/Streptomyces ruling (flag 11). The A title "Split" and the G13 replacement item are sound (G13 key (a) checked: Stanley crystallised TMV in 1935).

## Additional-topic introductions against the Topics as built
Shared intro (A), A, B, C, D, E and F introductions: each "the chapter already says / gives" claim checked against Topics 00-05 and found true (A: domains, wall and lipid differences in Topic 00/01; B: shapes, Gram, nutrition, heterocysts in Topic 01; C: pellicle, two flagella, mixotrophy in Topic 02; D: imperfect stage, delayed karyogamy, clamp connection in Topic 03; E: phosphorus and water for sugars, SO<sub>2</sub>, diatomaceous earth uses in Topics 02/03; F: "some standard examples the chapter itself does not name" true). No false "never covers" claim remains. The A intro's "NEET questions now routinely test" carries the book's-estimate label.

## Counts verified
- 14 topics (6 + A-H); every block read. 24 Crack-the-MCQ items: all 24 keys correct and the only correct option; every nudge explains its own option.
- 34 worked examples (Topics 4 each, A 2, B 1, C 1, D 1, H 5): every answer recomputed, including H Q3 statement item (c), H match (a), G12 match (a)-(ii), (b)-(iii), (c)-(i), (d)-(iv), H Q7 (c) with statement (iii) false per the errata (p. 1171), and every assertion-reason fourth option ("A false, R true"; none uses "both false").
- 79 practice items (Topics 30, A 5, B 5, C 4, D 5, E 5, G 15, H 10).
- 42 key points (30 topic, 10 for A-E, 2 for H), 12 memory lines: checked against the chapter text.
- Numbers: H shares 25 + 20 + 20 + 15 + 15 + 5 = 100 %; Fig 2.1 years Ancient, 1735, 1969, 1990 (with the 1977 note); Fig 2.5 six sporangia, four septa, five nuclei; TMV ~300 nm; ribosomes 70S/80S; Diener 1971; Stanley 1935; Haeckel 1866; Whittaker 1969.
- Tables checked on the page image: master comparison table p. 67 (all 30 cells match), Gram table p. 118 (all cells match). Other tables via the text-layer diff (no cell differences found beyond the listed fixes).
- Transcription: the word diff of every topic against its pages found no dropped or duplicated book sentence other than the fixers' listed changes, flag 1 and the unlisted G3 (c) deletion (flag 12).

## Figures checked (all 8 figures, 11 cases)
b11-02-fig-2.1 (p. 66), 2.2 both cases (p. 74), 2.3 (p. 77), 2.4 (p. 84), 2.5 (p. 93), 2.6 (p. 96), 2.7 both cases (p. 102), 2.8 both cases (p. 110): rendered from the current file and compared with the page images and captions. Labels, counts, arrows and captions match the book except flags 21 and 30.

## What I could not check
- The real app reader on iPhone or Android (fonts, the U+2640/2642 symbols route, label wrapping, italics inside option labels on device): renders here use the Mac's stand-in fonts.
- The live /drona/catalogue name for this chapter's shelf key ('biology|11|biological classification').
- Page images for the non-figure, non-table pages: those were compared through the text layer (diff), not visually.
- jest/tsc (not to be run): the edits proposed above are not checked against the book-rules tests.

## Summary
31 flags (several grouped). NEW: 24; REPEAT or earlier flag applied wrongly: 7 (flags 3, 11, 19, 20, 22, 23 partly, and flag 2 as R2 9 applied wrongly). Serious (a student would learn something false or contradictory): 12 (flags 1 to 12). The rest are overgeneral wording, consistency, notation and small figure points. Overall the transcription is faithful and the earlier fixes mostly landed; the main problems are the three-domain equidistance contradiction, the new decision tree, a duplicated-word slip in H Q8, and several book statements a teacher would correct (algae not Plantae, Bacillus naming, clamp connections in Ascomycetes, idli yeast).
