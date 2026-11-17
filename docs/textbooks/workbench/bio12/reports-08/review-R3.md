# Review R3: Biology 12 Chapter 8 (Microbes in Human Welfare), third expert review, whole chapter

Scope: content/textbooks/bio-12-08/topics-0-2.ts, topics-3-5.ts, extras-a-g.ts (all 13 topics), lib/diagrams/biology-12-08.ts (8 figures), lib/revise/keypoints-biology-12-08.ts (all points, indexes 0 to 12), against bio12.pdf pp. 409 to 478. Reviewed as the chapter now stands, after fixers F1 and F2. Nothing in the repo was edited; no tsc, jest or git was run.

Method: (1) loaded the three topic files into JSON and ran a word-level diff of every app string against the page-tagged book text for pp. 409 to 478 (hyphen breaks joined, em dashes and section numbers normalised), plus a separate number-sequence diff (every digit run) for the main topics and the Additional topics; (2) read every block of every topic in full as a NEET teacher; (3) recomputed every equation, mass, mole, dilution, BOD and percentage; checked every MCQ / ex / practice key and every A-R fourth option; (4) checked every Additional-topic introduction against the Topics as built; (5) rendered book pages 414, 416, 424, 432, 440, 448, 450 and compared every label, step, row, arrow and caption with the diagram source; (6) read new-text-F1.md and new-text-F2.md and checked each [NEW] wording. Only after this own pass were review-R1.md and review-R2.md read, to mark NEW / REPEAT.

[NEW] marks wording proposed by this review (our own wording, not the book's).

## Flags, most serious first

### 1. Clostridium presented as a non-nitrogen-fixer (Additional G) [NEW]
- Where: extras-a-g.ts, Additional G, Archetype 3 worked example solution (book p. 471) and The Traps row "Rhizobium = Clostridium" (p. 474).
- Says now: solution "The distractor (a) tempts students who misread <i>Clostridium</i> as a generic nitrogen-fixer without checking the specific genus."; trap fix "<i>Rhizobium</i> is the legume nodule bacterium; <i>Clostridium</i> is butyric acid maker: they appear in different sections".
- Wrong: Clostridium (e.g. C. pasteurianum) IS a free-living, anaerobic nitrogen fixer; that is exactly why the A-R item is a trap. The text tells students the opposite. R is false only because legume nodules hold Rhizobium, not Clostridium.
- Fix [NEW] (solution, last sentence): "The distractor <b>(a)</b> tempts students who know <i>Clostridium</i> as a nitrogen-fixer: some species do fix nitrogen, but free-living in the soil, never in legume nodules, which hold <i>Rhizobium</i>."
- Fix [NEW] (trap, third cell): "<i>Rhizobium</i> is the legume-nodule bacterium; in this chapter <i>Clostridium butylicum</i> is the butyric acid maker (some <i>Clostridium</i> species fix nitrogen free in the soil, but never in nodules)".
- Kind: biology error (misleading). Source: book. Confidence: likely.

### 2. Methanogens said to produce hydrogen; contradicts the chapter's own correction (Topic 04) [NEW]
- Where: topics-3-5.ts Topic 04 Concept intuition para 2 (p. 437); Table 4.1 row "Products of methanogens" (p. 438); Worked Q CBSE model answer (p. 439 to 440); Cheat sheet row 2 (p. 443). Same idea in key point index 4 Remember 1 ("growing on cellulosic material").
- Says now: "...that grow anaerobically on cellulosic material and produce a large amount of methane along with carbon dioxide and hydrogen"; "Products of methanogens | Methane + carbon dioxide + hydrogen (NCERT); ..."; "produce methane (with CO2 and H2)"; "make methane (+ CO2, H2)".
- Wrong: methanogens consume H2 (and CO2 or acetate) and give out methane; H2 is made by the fermenting bacteria. The same topic now says (F1 wording) "methanogens use the H2 and CO2 released", and Additional D gives CO2 + 4 H2 → CH4 + 2 H2O, so the chapter contradicts itself. NCERT's sentence ("certain bacteria ... produce large amount of methane along with CO2 and H2") describes the digesting community.
- Fix [NEW] Concept para: "...that grow anaerobically on cellulosic material and produce a large amount of methane along with carbon dioxide and hydrogen (NCERT's wording for the digesting microbes as a group; strictly, other bacteria make the H<sub>2</sub> and CO<sub>2</sub>, and methanogens use them to make methane)."
- Fix [NEW] Table 4.1 first cell: "Gases made in the digester" (keep the rest of the row).
- Fix [NEW] CBSE answer: "...that grow on cellulosic material and produce <b>methane</b> (NCERT lists CO<sub>2</sub> and H<sub>2</sub> with it)." Cheat sheet: "...that grow on cellulosic matter and make methane (NCERT: with CO<sub>2</sub>, H<sub>2</sub>)."
- Kind: biology error / internal contradiction. Source: book (NCERT wording). Confidence: likely.

### 3. Erythromycin relabelled "Broad-spectrum" (Additional B) [NEW; earlier flag R2-12a applied wrongly]
- Where: extras-a-g.ts Additional B, Classification Table, Erythromycin row (p. 459).
- Says now: "Broad-spectrum (most active against Gram-positive bacteria)". Book: "Moderate-spectrum".
- Wrong: erythromycin (a macrolide) is usually classed as narrow or intermediate spectrum: Gram-positive cocci plus a few Gram-negative and atypical organisms. Calling it broad-spectrum puts it beside tetracycline and chloramphenicol, which is the wrong exam answer. The fixer turned the book's defensible label into a less defensible one.
- Fix [NEW]: "Narrow to moderate spectrum (mainly Gram-positive bacteria)".
- Kind: biology error. Source: introduced by fixer (book said moderate). Confidence: likely.

### 4. "Five NCERT sections" in Additional A against "six" in Topic 00 and the key points [REPEAT, R2-18 noted it, no change made]
- Where: extras-a-g.ts Additional A, Introduction para 1 (p. 455).
- Says now: "The chapter provides a solid foundation in the five NCERT sections: household fermentation, industrial microbiology, sewage treatment, biogas production, and biocontrol/biofertilisers."
- Wrong: NCERT Chapter 8 has six sections (8.1 to 8.6; biocontrol agents and biofertilisers are two). Topic 00 (F1) and key point index 0 (F2) now say six NCERT sections in five topics, so the chapter contradicts itself on its first two pages of Additional topics.
- Fix [NEW]: "The chapter provides a solid foundation in the six NCERT sections, taught in five topics: household fermentation, industrial microbiology, sewage treatment, biogas production, and biocontrol agents and biofertilisers (two NCERT sections in one topic)."
- Kind: claims about the chapter / inconsistency. Source: book. Confidence: certain.

### 5. Biogas composition does not add up (Additional D, key point index 9) [REPEAT, R2-16: hedged, not fixed]
- Where: Additional D Method "Biogas composition" (p. 463); key point index 9 Remember 2 (answer and why).
- Says now: "methane about 50–70%, CO<sub>2</sub> about 30–40% (the exact figures vary with the feed), and small amounts of H<sub>2</sub> and H<sub>2</sub>S"; KP why "The two ranges are not added: each gas varies with the feedstock."
- Wrong: at the top end 70 + 40 = 110 per cent; at the bottom end 50 + 30 = 80 per cent, leaving 20 per cent for gases the text calls "small amounts". CH4 and CO2 together make up roughly 95 per cent or more, so when methane is 50 per cent CO2 is about 45 to 50 per cent. The KP "why" tells students not to add percentages of one mixture, which is the wrong habit.
- Fix [NEW] Additional D: "methane about 50–70%, with CO<sub>2</sub> making up most of the rest (about 30–45%), and small amounts of H<sub>2</sub> and H<sub>2</sub>S; the exact figures vary with the feed."
- Fix [NEW] KP index 9 answer: "Biogas is about 50–70% methane, with CO<sub>2</sub> making up most of the rest (about 30–45%) and small amounts of H<sub>2</sub> and H<sub>2</sub>S; NCERT says “predominantly methane”." KP why [NEW]: "Methane and CO<sub>2</sub> together are nearly all of the gas, so when one rises the other falls."
- Kind: number. Source: book (kept by fixer). Confidence: likely.

### 6. "Baculovirus is not pH-critical" (Additional E) [NEW; R2-11 wording applied without checking the biology]
- Where: Additional E kalam, Method "Biocontrol agent conditions", Environmental Parameters table, Baculovirus row, pH cell "Not critical" (p. 466).
- Says now: "Each agent works best within a temperature range, and most within a pH range (baculovirus is not pH-critical)."
- Wrong: baculovirus infection depends on pH as much as Bt does: the occlusion bodies (polyhedra) dissolve only in the alkaline midgut of the larva, releasing the virions. In soil or on the leaf pH matters little, but "not pH-critical" without that qualifier is untrue, and it sits beside the Bt "alkaline gut" row.
- Fix [NEW] table cell: "Not critical outside the host (its occlusion bodies, like Bt crystals, dissolve only in the alkaline larval gut)". Kalam and Method [NEW]: "Each agent works best within a temperature range, and most within a pH range (for baculovirus, only the alkaline larval gut matters)."
- Kind: biology error. Source: book table, sharpened by fixer. Confidence: possible to likely.

### 7. "Anabaena azollae (NCERT's name ...)" [NEW; R1-13 assumption carried into the text]
- Where: topics-3-5.ts Topic 05 Table 5.2, Azolla row (p. 446); extras-a-g.ts Additional G, Traps, Azolla row (p. 474).
- Says now: "<i>Anabaena azollae</i> (NCERT’s name; now <i>Trichormus azollae</i>)"; trap "(NCERT’s name; now called <i>Trichormus azollae</i> or <i>Nostoc azollae</i>)".
- Wrong: the NCERT Class 12 chapter's biofertiliser section names Anabaena, Nostoc and Oscillatoria in paddy fields; to my knowledge it does not mention Azolla or Anabaena azollae, so "NCERT's name" is an attribution the book does not make (the book prints the name with no NCERT label). The two places also give different current names.
- Fix [NEW] (both places): "<i>Anabaena azollae</i> (the traditional name; now <i>Trichormus azollae</i>, also called <i>Nostoc azollae</i>)". If the founder confirms an NCERT source, keep "NCERT's name".
- Kind: nomenclature / attribution. Source: introduced by fixers F1 and F2. Confidence: likely.

### 8. "Note from NCERT: ... Trichoderma acts as a mycoparasite" (Additional E) [NEW]
- Where: Additional E, paragraph under the table (p. 466).
- Says now: "Note from NCERT: Bt toxin is activated by the alkaline pH of the insect gut. <i>Trichoderma</i> acts as a mycoparasite on fungal plant pathogens. <i>Rhizobium</i> lives in legume root nodules. <i>Glomus</i> forms mycorrhizal associations with plant roots."
- Wrong: NCERT says Trichoderma species are free-living fungi, very common in root ecosystems, and effective biocontrol agents of several plant pathogens; "mycoparasite" is the book's. (The alkaline-gut activation of Bt is NCERT, but in Chapter 10, not Chapter 8.)
- Fix [NEW]: "Note from NCERT: Bt toxin is activated by the alkaline pH of the insect gut (NCERT Chapter 10). <i>Trichoderma</i> species are free-living fungi of the root ecosystem and effective biocontrol agents of several plant pathogens (that they act as mycoparasites goes beyond NCERT). <i>Rhizobium</i> lives in legume root nodules. <i>Glomus</i> forms mycorrhizal associations with plant roots."
- Kind: attribution. Source: book. Confidence: likely.

### 9. Glomus error placed "in the biocontrol topic" (Additional G Traps) [NEW; R2-17d softened the superlative but kept the wrong section]
- Where: Additional G, Traps, row "Glomus fixes nitrogen", second cell (p. 474).
- Says now: "A common error in the biocontrol topic".
- Wrong: Glomus is a biofertiliser, not a biocontrol agent; the label sends students to the wrong half of Topic 05 and itself repeats the biocontrol/biofertiliser swap.
- Fix [NEW]: "A common error in the biofertiliser part of the last topic".
- Kind: transcription-level misleading / unclear. Source: book, kept by fixer. Confidence: certain.

### 10. "Antibiotics work on microbes, not viruses" (Topic 02) [NEW]
- Where: topics-0-2.ts Topic 02, Concept intuition, Limiting Conditions bullet 1 (p. 420).
- Says now: "<b>Antibiotics work on microbes, not viruses.</b> They target bacterial/fungal structures and processes."
- Wrong: in NCERT's own definition viruses are microbes (the chapter opening lists protozoa, bacteria, fungi, viruses, viroids, prions), so the heading contradicts itself. Pitfall 3 and the key point say it correctly ("chiefly bacteria").
- Fix [NEW]: "<b>Antibiotics act on bacteria (and some on fungi), not on viruses.</b> They target bacterial/fungal structures and processes."
- Kind: unclear or misleading. Source: book. Confidence: likely.

### 11. "(the usual host, as NCERT says)" (Topic 05) [NEW; R1-17 wording]
- Where: Topic 05 Concept intuition, Limiting Conditions bullet 2 (p. 444).
- Says now: "<i>Rhizobium</i> fixes nitrogen in the root nodules of <b>legumes</b> (the usual host, as NCERT says); with wheat it does not form nodules."
- Wrong: NCERT does not say "usual host"; it says the nodules on legume roots are formed by the symbiotic association of Rhizobium. The parenthesis reads as an NCERT quotation that does not exist.
- Fix [NEW]: "<i>Rhizobium</i> fixes nitrogen in the root nodules of <b>legumes</b> (NCERT's example; a rare non-legume host exists); with wheat it does not form nodules."
- Kind: attribution. Source: introduced by fixer F1. Confidence: likely.

### 12. Unlabelled exam-frequency phrases still in the topics [REPEAT, R1-14 and R2-17 fixed most, these remain]
- Where and says now: Topic 02 Limiting conditions "a favourite conceptual trap", "Mixing these up is a classic error"; Topic 02 Pitfall 4 "These three enzyme uses are often tested"; Topic 04 Limiting conditions "Calling biogas “pure methane” is a classic exam error"; Topic 04 Pitfall 4 "a frequently tested “fate” question"; Topic 05 Limiting conditions "Mixing these up is the classic exam trap"; Topic 05 diagnostic "Bt’s mechanism is often asked"; Topic 05 MCQ 2 nudge "the favourite swap"; Topic 05 Pitfall 4 "a frequently mis-paired agent"; Topic 01 MCQ 2 nudge "the classic distractor"; Topic 05 MCQ 1 nudge "the classic conceptual error"; Additional G Key Distinctions 2 "a frequently tested distinction"; G Level 3 "a frequently reversed distinction".
- Wrong: frequency claims without the "(the book's estimate ...)" label the rest of the chapter now carries.
- Fix [NEW]: replace each with a plain non-frequency phrase: "a common conceptual trap"; "Mixing these up costs marks"; "These three enzyme uses are worth learning"; "Calling biogas “pure methane” is wrong"; "a “fate” question"; "Mixing these up is a common error"; "Learn Bt's mechanism."; "the usual swap"; "a commonly mis-paired agent"; "the reversed distractor"; "the eradication error"; "a key distinction"; "a commonly reversed distinction".
- Kind: exam-frequency claims. Source: book. Confidence: certain (that they are unlabelled).

### 13. Indian BOD standards are not BOD5 at 20 °C (Additional C) [NEW]
- Where: Additional C Method para after the formula, "Threshold BOD for discharge", Standard Values table, Worked NEET, Practice 4, Answer Key C4 (pp. 461 to 463).
- Says now: "The standard test (BOD<sub>5</sub>) measures the oxygen used in 5 days at 20°C ..." then "Indian standards typically require BOD below 20–30 mg L<sup>−1</sup> for discharge into inland waters."
- Wrong: the Indian discharge limits (CPCB, 30 mg L<sup>−1</sup> for inland surface water) are set on the BOD3 test, 3 days at 27 °C, not BOD5 at 20 °C; the two numbers are presented as one test. (The CPCB class A water-quality criterion is BOD5 at 20 °C, so that row is fine.)
- Fix [NEW] add after "if all the organic matter were oxidised.": "(Indian discharge standards use a 3-day test at 27 °C, BOD<sub>3</sub>, which gives similar values.)"
- Kind: number / unclear. Source: book plus fixer wording. Confidence: possible.

### 14. Two BOD definitions in Additional C and its answer key [NEW; side effect of R2-1]
- Where: Additional F, "Additional topic C" answer 1 (p. 469), against Additional C Practice 1 answer (p. 463).
- Says now: F: "BOD is the oxygen consumed by microbes in the standard 5-day, 20°C test (BOD5), a part of the oxygen needed to oxidise all the organic matter in 1 L of water"; Practice 1: "BOD ... is the amount of oxygen that microbes would consume in oxidising the organic matter in 1 litre of water (NCERT: if all of it were oxidised). The standard laboratory test measures what is used in 5 days at 20°C (BOD5), which is only a part of this."
- Wrong: the answer key defines BOD as the 5-day measurement, the practice answer (and Topic 03, NCERT) as the full demand. A student revising from F learns a non-NCERT definition.
- Fix [NEW] F C1: "1. BOD is the oxygen microbes would consume in oxidising the organic matter in 1 L of water (NCERT: if all of it were oxidised); the standard 5-day, 20°C test (BOD<sub>5</sub>) measures part of it; unit mg L<sup>−1</sup>."
- Kind: inconsistency. Source: introduced by fixer F2. Confidence: certain.

### 15. Methanogens said to digest glucose / organic matter themselves [NEW]
- Where: Additional D Worked example 2 (NEET, p. 464) question and solution; Topic 04 Practice 5 answer (p. 442).
- Says now: D: "One molecule of glucose is completely converted to methane and carbon dioxide by methanogens."; Topic 04: "...where <b>anaerobic methanogens</b> digest the organic matter and produce a <b>methane-rich biogas</b>".
- Wrong: methanogens cannot use glucose or digest sludge; other anaerobic bacteria do (as Additional D's own new paragraph and Topic 03 step 5, "other kinds of bacteria, which grow anaerobically, digest the bacteria and fungi", say).
- Fix [NEW] D question: "...completely converted to methane and carbon dioxide by the microbes of a digester (fermenting bacteria, then methanogens)." Topic 04 answer: "...where <b>anaerobic bacteria</b> digest the organic matter and <b>methanogens</b> produce a <b>methane-rich biogas</b>: so biogas is a by-product of sewage treatment."
- Kind: biology error (overgeneral). Source: book. Confidence: likely.

### 16. Bt activation: pH credited with proteolysis; spores said to activate (Topic 05) [NEW]
- Where: Topic 05 proc "How Bacillus thuringiensis kills a caterpillar", steps 1 and 3 (pp. 446 to 447).
- Says now: step 3 "The caterpillar’s gut is strongly <b>alkaline</b>, and this high pH solubilises and proteolytically processes the protoxin into the <b>active toxin</b>."; step 1 "<b>Why dried spores:</b> they are stable, easy to store, and activate only once eaten."
- Wrong: the high pH dissolves the crystal; gut proteases (enzymes) cut the protoxin to the active toxin. And it is the protoxin, not the spore, that becomes active on eating.
- Fix [NEW] step 3: "...strongly <b>alkaline</b>; this high pH dissolves the crystals, and gut enzymes (proteases) cut the protoxin into the <b>active toxin</b>." Step 1: "...they are stable, easy to store, and the toxin they carry becomes active only once eaten."
- Kind: biology error (minor). Source: book. Confidence: likely.

### 17. Streptokinase called an enzyme [NEW]
- Where: Topic 02 Table 2.3 Type "Enzyme" (p. 422; NCERT grouping, keep); Additional G Level 3 streptokinase answer (p. 477): "it is a clot-dissolving enzyme (“clot buster”) that activates plasminogen to plasmin"; Topic 02 proc step 2 parenthesis.
- Wrong: streptokinase has no enzyme activity of its own; it binds plasminogen and the complex converts other plasminogen to plasmin. NCERT lists it under enzymes, so the table can stay, but the G answer explains the mechanism and so should be exact.
- Fix [NEW] G answer: "It is not an antibiotic; it is a clot buster (NCERT lists it with enzymes): it binds plasminogen, and the complex turns plasminogen into plasmin, which degrades the fibrin of the clot."
- Kind: biology (nuance). Source: book. Confidence: possible.

### 18. Smaller wording points [NEW unless stated]
- (a) Additional A "Note from NCERT: <i>Acetobacter aceti</i> produces acetic acid from ethanol." NCERT names A. aceti for acetic acid only. Fix [NEW]: "Note from NCERT: <i>Acetobacter aceti</i> is the bacterium that produces acetic acid (that it oxidises ethanol goes beyond NCERT). The overall process requires oxygen (aerobic)." Possible.
- (b) Additional G Practice lead-in (F2 wording) "where an answer goes beyond NCERT it says so": not every such answer says so (Level 3 "in symbiosis with the water fern Azolla", Level 4 (a) "parasitoid wasps", Level 2 legume answer). Fix [NEW]: "The questions follow NEET/AIPMT patterns; several answers go beyond NCERT, and the main ones say so." Likely.
- (c) Additional G Level 3 Bt/Anabaena answer quotes the section as "Microbes as Biocontrol and Biofertilisers"; the topic title is "Microbes as Biocontrol Agents and Biofertilisers". Fix: use the title. Certain, trivial.
- (d) Additional B Worked CUET "preventing cross-linking of the glycan chains": the transpeptidase makes peptide cross-links between glycan chains. Fix [NEW]: "preventing the peptide cross-links between the glycan chains". Possible.
- (e) Key points index 5 Remember 1: "Baculovirus (Nucleopolyhedrovirus)" is upright while the chapter (founder decision 1 of F1) sets <i>Nucleopolyhedrovirus</i> italic. Fix: "Baculovirus (<i>Nucleopolyhedrovirus</i>)" if the italic decision stands. Certain (inconsistency).
- (f) Topic 04: the parenthesis "(the cellulose is broken down mainly by other rumen microbes; methanogens use the H2 and CO2 released ...)" now appears six times in one topic (Concept, Table 4.1, diagnostic bullet, rumen-link paragraph, CBSE answer, cheat sheet) and directly follows "methanogens that help break down the cellulose". Readability only; suggest keeping it in the Concept paragraph and Table 4.1 and cutting it to "(with other rumen microbes)" elsewhere. REPEAT of the R1-8 fix shape, not of its content. Low.

## Earlier flags I believe were applied wrongly or incompletely
- R2-12 (a): erythromycin "Moderate-spectrum" changed to "Broad-spectrum (most active against Gram-positive bacteria)": wrong direction (flag 3).
- R2-11: "baculovirus is not pH-critical" written into the kalam and Method as a fact (flag 6).
- R2-16: biogas composition arithmetic hedged with "(the exact figures vary with the feed)" instead of corrected; KP index 9 "why" now teaches not to add the ranges (flag 5).
- R2-17 (d): superlative removed but the wrong section ("the biocontrol topic") kept for Glomus (flag 9).
- R2-18: noticed "five NCERT sections" against Topic 00's "six" and left it (flag 4).
- R2-1: the F C1 answer now defines BOD as the 5-day measurement, unlike every other BOD definition in the chapter (flag 14).
- R1-13 / R1-17: "NCERT's name" for Anabaena azollae and "the usual host, as NCERT says" for Rhizobium put NCERT attributions into the text that NCERT does not make (flags 7, 11).
- R1-8 / F1: the "methanogens use the H2 and CO2" nuance was added, but the neighbouring "methanogens produce ... hydrogen" lines were left, creating a contradiction (flag 2).

## Writers' and fixers' founder decisions: my view
- Nucleopolyhedrovirus italic: correct by ICTV; keep, and italicise it in the key points too (18e).
- Methanogens "archaea; NCERT calls them bacteria": correct.
- Monascus a mould, NCERT "yeast" kept beside it: correct.
- Streptomycin "Broad-spectrum": acceptable (aminoglycosides are commonly called broad-spectrum; mainly Gram-negative aerobes and mycobacteria).
- Waksman 1942 in G Archetype 4 option (b): acceptable as printed (sources give 1941 or 1942); it is not marked as the answer.
- Current-name notes (Tolypocladium inflatum, Penicillium rubens, C. butyricum, P. freudenreichii subsp. shermanii): all correct; keep NCERT spellings for answers as written.
- CPCB class A 2 mg L<sup>−1</sup>: correct (class A criterion is BOD5 at 20 °C of 2 mg L<sup>−1</sup> or less). Mitochondrial ribosome side-effect note: correct.

## Counts verified
- Topic 00: 1 part, 1 paragraph. Topics 01 to 05: 8 parts each; 4 worked questions, 5 practice items, 4 MCQs, 4 pitfalls, 1 pro-tip, 1 cheat sheet each: same as the book (book counts of x.4.n, x.6.n and Pitfall lines agree). Tables: 01 (1.1, 1.2, comparison), 02 (2.1, 2.2 as defgrid, 2.3, 2.4, comparison), 03 (3.1, 3.2, comparison), 04 (4.1, 4.2, comparison), 05 (5.1, 5.2, two comparisons).
- Additional A to E: 3 worked + 5 practice each; formulas A 3, C 1, D 2; table rows A 3, B 7, C 4, D 4, E 6. F: 5 x 5 answers, each matches its practice item. G: distribution 5 rows, 6 archetypes with 1 worked item each, traps 10 rows, graded practice 10, key distinctions 3.
- Keys checked (all correct and unique): Topic 01 ex (c), match A-ii B-iv C-i D-iii, A-R (a), practice (c), (c), MCQs (b) (c) (b) (d); Topic 02 ex (b), A-iii B-i C-ii D-iv, (a), practice (c) (a), MCQs (b) (c) (b) (c); Topic 03 (b), A-ii B-i C-iv D-iii, (a), practice (b) (c), MCQs (b) (b) (c) (b); Topic 04 (c), A-ii B-iii C-i D-iv, (a), practice (d) (b), MCQs (b) (b) (b) (b); Topic 05 (c), A-ii B-i C-iv D-iii, (a), practice (b) (a), MCQs (b) (b) (b) (b); B ex (b), B practice (c); G Archetypes (c), (c) (only option with A-III B-IV C-II D-V E-I), (c), (d), (a), (a); graded Level 1 (b) (b), Level 2 (b) (b) (b), Level 3 (c) (c).
- Every A-R item's fourth option is "A false, R true" (Topics 01 to 05 worked and practice, G Archetype 3, G Level 3); G Archetype 3 approach line now reads "A false, R true".
- Recomputed: C6H12O6 → 2 C3H6O3 (C6 H12 O6 both sides; 180 g → 2 x 90 = 180 g); C6H12O6 → 2 C2H5OH + 2 CO2 (4 + 2 = 6 C; H12, O6); C2H5OH + O2 → CH3COOH + H2O (2 C, 6 H, 3 O); CO2 + 4 H2 → CH4 + 2 H2O (balanced); C6H12O6 → 3 CO2 + 3 CH4 (C6, H12, O6); CH3COOH → CH4 + CO2 (C2 H4 O2); 3 x 16 = 48 g; 3 x 22.4 = 67.2 L (KP); BOD 8.0 − 2.0 = 6.0, 250/50 = 5, 30 mg L<sup>−1</sup>; 9.0 − 3.0 = 6.0, 500/100 = 5, 30 mg L<sup>−1</sup>; methane LHV about 36 MJ m<sup>−3</sup> (book "~36"): correct. Biogas percentages: see flag 5.
- Additional-topic introductions against the Topics as built: A true except the "five NCERT sections" count (flag 4); B true (no spectrum or mechanism in Topic 02); C true (Topic 03 defines BOD, no arithmetic); D true (Topic 04 has no equation or yield); E true as rewritten (Topic 05 does say agents depend on moisture and temperature, and gives no numbers).
- Number diff app vs book (every digit run, pp. 455 to 478): no changed value; the exam years on p. 470 (2012, 2015, 2016, 2022) are dropped, as the brief requires. Word diff pp. 409 to 478: no dropped or altered sentence other than the fixers' listed [NEW] changes and allowed layout edits.
- Key points: 2 Remember per topic 0 to 5 plus one Don't mix up, Common mistake and Exam shortcut for 1 to 5; 2 per Additional topic 6 to 11; 1 Remember + 1 Common mistake for 12; page cites match the book's section pages (checked against the located headings: pitfalls 418, 427, 435, 443, 453; Additional A 455, B 458, C 461, D 463, E 465, F 468, G 469, Traps 473 to 474).

## Figures checked (book page images rendered and compared with the diagram source labels, steps, arrows and captions)
- 8.1 stages of curd making, p. 414: four steps, every box line, three arrows: match.
- 8.2 dough before and after, p. 414: both titles, dense / risen porous dough, "microbes ferment", CO2 note, bread and idli lines: match.
- 8.3 acid vs gas (leavening) fermentation table, p. 416: all 5 rows x 3 columns word for word; the Topic 01 table's "Gives a soft, airy texture" now agrees in sense with the figure's "Spongy, puffed-up texture".
- 8.4 microbial industrial products, p. 424: fermentor (bioreactor), four classes in book order, every product and organism: match.
- 8.5 sewage treatment plant, p. 432: Sewage in → PRIMARY → SECONDARY → Settling tank → Activated sludge → Anaerobic sludge digester → Biogas (CH4, CO2, H2S); Effluent, Primary sludge, Treated water into the river, dashed "Small part recycled as inoculum", "Major part": match.
- 8.6 floating gas-holder biogas plant, p. 440: gas outlet pipe, stove, floating gas holder "biogas (about 60% CH4)", ground level, slurry sealed anaerobic methanogens active, DIGESTER, inlet dung + water slurry, outlet spent slurry used as manure (outlet lower than inlet): match.
- 8.7 Bt mode of action, p. 448: Ingestion, Activation (Alkaline gut pH, Protoxin → Toxin), Lysis, four cells with three pore rings; the bee note now "mostly unharmed: the toxin acts on a limited group of insects" (F1 change from the book's "unharmed: the toxin is specific to the target insects"), caption "largely unharmed": correct and acceptable.
- 8.8 Rhizobium nodules and Glomus mycorrhiza, p. 450: N from bacteria / P from fungus, root nodules with Rhizobium, symbiotic N2 fixation to usable ammonia, Glomus hyphae (mycorrhiza), six PO4(3−), Soil, "Hyphae reach phosphate beyond the roots": match.
- No figure error found.

## Could not check
- The app's own SVG renders (the task forbids running jest, and the dump script runs through jest); figures were checked from the diagram source text against the book page images, not as drawn on screen. Android rendering not checked.
- The NCERT textbook itself is not in the workspace; NCERT attributions (flags 7, 8, 11, 18a) are checked from my knowledge of the NCERT text, hence "likely", not "certain".
- Italic and bold styling on the book's text pages was checked only through the app's HTML tags and the writers' notes (page images were rendered only for the seven figure pages).
- CPCB BOD3 detail (flag 13) is from memory.

## Overall
The transcription is faithful: no sentence dropped, no number changed, every key and every A-R option right, every figure label present. The remaining errors are biology the book carried and two fixers half-corrected: a Clostridium trap that teaches Clostridium is not a nitrogen fixer, methanogens that both make and use hydrogen, an erythromycin relabelled broad-spectrum, the "five" versus "six" NCERT sections, a biogas composition that does not add up, and a handful of NCERT attributions the fixers added that NCERT does not make. Fix flags 1 to 6 before the store build; 7 to 18 are low and quick.

Summary: 18 flags (flag 18 holds 6 small sub-points); 15 NEW (1, 2, 3, 6 to 11, 13 to 18), 3 REPEAT (4, 5, 12); 18f partly repeats the shape of R1-8. Serious (fix before build): 6 (flags 1 to 6).
