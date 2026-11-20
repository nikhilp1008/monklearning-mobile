# Review R3 (third review, Opus): Biology 12 Chapter 4, Principles of Inheritance and Variation, whole chapter as it now stands

Files reviewed: content/textbooks/bio-12-04/topics-1-3.ts, topics-4-5-extras-a-c.ts, extras-d-g.ts (all 12 topics: 01 to 05, Additional A to G), lib/diagrams/biology-12-04.ts, lib/revise/keypoints-biology-12-04.ts (39 points). Book: bio12.pdf pp. 163 to 222 (bio12.paged.txt and page images). Nothing in the repo was edited; no tsc, jest or git run.

Method: (1) my own pass first: every block dumped to plain text from the TypeScript (sucrase), a word-level diff of the app text against the page-tagged book text for each topic's pages (163-169, 170-176, 177-184, 185-191, 192-198, 199-222), every remaining difference read and traced to new-text-F1.md / new-text-F2.md; page images for the tables and the examples whose symbols the text layer scrambles; every cross, ratio, probability, Hardy-Weinberg value, map distance and answer key recomputed; every Additional-topic introduction checked against the topics as built; every [NEW] wording in F1 and F2 read for correctness and overclaiming. (2) Only then review-R1.md and review-R2.md were read, and each flag below is marked NEW (not raised before) or REPEAT (raised before but not fixed, or fixed incompletely or wrongly).

Verdict in one line: the transcription is faithful and the arithmetic is right throughout; the remaining errors are almost all in our own fix wording (an MCQ option change that re-created a duplicate answer, a wrong Bombay key-point line, a self-contradicting mitochondrial key point, an NCERT wording dropped from the polygenic definition, a half-applied "model plant" edit) plus a handful of book wordings no reviewer caught.

## Flags, most serious first

Format: Where | Says now | What is wrong | Fix (our own wording marked [NEW]) | Kind | Source | Confidence | NEW/REPEAT.

### 1. Additional G, Graded Practice Q9 (extras-d-g.ts line 527; book p. 220): two options are the same gene order
- Says now: "(a) A–B–C (b) B–A–C (c) A–C–B (d) B–C–A". Key (b).
- Wrong: three genes on a line have only three distinct orders (B, A or C in the middle). B–C–A read backwards is A–C–B, so (d) is the same answer as (c). R2 flag 18 asked to replace the book's (d) C–B–A because it duplicated (a); the fixer's B–C–A duplicates (c) instead. Any fourth order will always duplicate one of the other three.
- Fix [NEW]: option (d) "The order cannot be found from these three distances". New q string: `'[Evaluation (Hard)] Three genes give pairwise map distances: A–B = 5 cM, B–C = 15 cM, A–C = 10 cM. What is the linear order of these genes on the chromosome?<br><b>(a)</b> A–B–C<br><b>(b)</b> B–A–C<br><b>(c)</b> A–C–B<br><b>(d)</b> The order cannot be found from these three distances'`. Key (b) and the answer text unchanged.
- Kind: wrong MCQ (ambiguous options). Source: ours (fixer F2 item 33, from R2 18). Confidence: certain. NEW (and R2 18 applied wrongly).

### 2. Key points, topic 7 (Additional C) point 1, `why` (keypoints-biology-12-04.ts line 424)
- Says now: "A group O child of an AB parent, or an A or B child of two group O parents, points to a hidden Bombay (<i>hh</i>) parent rather than <i>ii</i>."
- Wrong for the first case: a group O child of an AB parent is itself the Bombay (hh) individual; its parents carry h (both Hh) but need not be Bombay (an hh parent cannot type AB at all). Only the second case (an A or B child of two "group O" parents) points to a Bombay parent who carries I<sup>A</sup> or I<sup>B</sup>.
- Fix [NEW]: `why: 'A group O child of an AB parent points to a Bombay (<i>hh</i>) child, both of whose parents carry <i>h</i>; an A or B child of two group O parents points to a Bombay (<i>hh</i>) parent who carries <i>I</i><sup><i>A</i></sup> or <i>I</i><sup><i>B</i></sup>.'`
- Kind: biology error (key point). Source: ours (R2 flag 8 wording, applied as written). Confidence: certain. NEW (R2 8 applied wrongly).

### 3. Key points, topic 8 (Additional D) point 2, answer (line 452): contradicts itself and drops "usually"
- Says now: "Affected mother: mitochondrial passes it to all her children, ... A family where an affected father has an affected child, and the unaffected mother cannot give mutant mitochondria, does not fit the simple rule of mitochondrial inheritance, and points to a nuclear gene or to mutant mitochondria carried by the mother (heteroplasmy)"
- Wrong: the same sentence says the unaffected mother "cannot give mutant mitochondria" and then that the cause may be "mutant mitochondria carried by the mother"; and "passes it to all her children" is the absolute the chapter text (Additional D, KP topic 8 point 1) now softens to "usually".
- Fix [NEW]: replace the two sentences with "Affected mother: mitochondrial usually passes it to all her children, while an affected X-linked mother with a normal father has all sons affected and all daughters carriers." and "A family where an affected father has an affected child by an unaffected mother does not fit the simple rule of mitochondrial inheritance: the father passes on no mitochondria, so it points to a nuclear gene or to a small share of mutant mitochondria carried by the apparently unaffected mother (heteroplasmy)"
- Kind: unclear/contradictory (key point). Source: ours. Confidence: certain. REPEAT (R2 flag 3 asked for this point; only its tail was changed).

### 4. Topic 04, definition "Polygenic inheritance" and Practice 1 answer (topics-4-5-extras-a-c.ts lines 92 and 239; book pp. 186, 190): NCERT wording dropped
- Says now: def "a mode of inheritance in which a single trait is controlled by two or more genes (usually several), each contributing a small additive effect."; Practice 1 "A trait controlled by two or more (usually several) additive genes; e.g. human skin colour (or height)".
- Wrong: the book said "three or more", which is NCERT's own wording ("Such traits are generally controlled by three or more genes"). R1 flag 2 replaced it, stating "NCERT: many"; that recollection is wrong, and the fix removed the NCERT line a NEET student is examined on (the founder's rule: keep NCERT wording, add the nuance beside it). The two-gene model in Worked example 4 and Practice 5 is the nuance.
- Fix [NEW]: def "a mode of inheritance in which a single trait is controlled by several genes (NCERT: generally three or more; the two-gene model used below is a simpler teaching case), each contributing a small additive effect." Practice 1 answer "A trait controlled by three or more additive genes (NCERT's wording; problems also use a two-gene model); e.g. human skin colour (or height)". Key points topic 3 point 1 ("controlled by several genes") can stay.
- Kind: NCERT fidelity. Source: ours (fix of R1 flag 2). Confidence: likely (NCERT wording from memory). NEW (R1 2 applied wrongly).

### 5. Additional A, Worked example 1 stem (line 758; book p. 200): "model plant" edit half applied
- Says now: "In a model plant (a squash-like pattern, not the real colour genetics of squash), gene C allows pigment ... When C is homozygous recessive (cc), no pigment forms and the squash is white regardless of Z."
- Wrong: after the organism was changed to a model plant, the same stem still calls it "the squash"; a student reads it as a statement about squash, which R2 showed is wrong (summer squash fruit colour is 12 ∶ 3 ∶ 1).
- Fix [NEW]: "... no pigment forms and the plant is white regardless of <i>Z</i>." (rest unchanged).
- Kind: biology (wrong organism) / unclear. Source: ours (incomplete fix). Confidence: certain. REPEAT (R2 flag 11, applied incompletely).

### 6. Topic 01, Common pitfall 3 (topics-1-3.ts line 279; book p. 169): wrong definition of back cross versus test cross
- Says now: "Forgetting the test cross needs a homozygous recessive partner. Crossing with any recessive-looking or any parental plant is a back cross, not necessarily a test cross. Only the homozygous recessive cleanly reveals the unknown genotype."
- Wrong: under complete dominance a recessive-looking plant is the homozygous recessive, so crossing with it is a test cross; and a back cross is an F<sub>1</sub> crossed with a parent, not "any parental plant". The key point (KP3) already states it correctly.
- Fix [NEW]: "<b>Forgetting the test cross needs a homozygous recessive partner.</b> Crossing an F<sub>1</sub> with either parent is a back cross; it is a test cross only when that parent is the homozygous recessive. Only the homozygous recessive cleanly reveals the unknown genotype."
- Kind: biology/misleading. Source: book. Confidence: likely. NEW.

### 7. Additional A, epistasis table, 9 ∶ 7 row and Worked example 2 (lines 727, 770; book pp. 199-201): complementary genes described as independent pathways
- Says now: table reason "Two independent pathways must both be “on”"; example "flower colour requires at least one dominant allele at gene C and at gene P simultaneously: two independent biosynthetic steps."
- Wrong: complementary genes give 9 ∶ 7 because both genes control steps of the same pathway (in sweet pea both act in the one anthocyanin pathway); if they were independent pathways each able to give colour, the ratio would not be 9 ∶ 7.
- Fix [NEW]: table cell "Two steps of one pathway must both work"; example "... simultaneously: two steps of one biosynthetic pathway."
- Kind: biology. Source: book. Confidence: likely. NEW.

### 8. Topic 04, Limiting conditions (3) (line 85; book p. 186): "epistasis ... beyond this chapter's core scope"
- Says now: "(As an aside, gene interactions such as epistasis are further deviations, but they lie beyond this chapter’s core scope.)"
- Wrong: Additional topic A of the same chapter teaches epistasis; the line reads as "not in this chapter".
- Fix [NEW]: "(As an aside, gene interactions such as epistasis are further deviations; they go beyond the NCERT core and are worked in Additional topic A.)"
- Kind: false "not covered" claim. Source: book. Confidence: certain. REPEAT (R2 flag 10 named it; F1 left it for the founder).

### 9. Topic 05, definition "Gene (point) mutation" (line 411; book p. 193): gene mutation equated with point mutation
- Says now: term "Gene (point) mutation", text "a change in the DNA sequence of a single gene. – Substitution / point mutation: ... – Frameshift mutation: ..."
- Wrong: the heading makes "point mutation" a synonym of every gene mutation, so the frameshift sub-bullet sits under "point", while the same topic's pitfall and MCQs teach point mutation and frameshift as opposites.
- Fix [NEW]: term "Gene mutation"; first sub-bullet label "Point (substitution) mutation:" (rest unchanged).
- Kind: misleading terminology. Source: book. Confidence: likely. NEW.

### 10. "Blended intermediate" for incomplete dominance (topics-1-3.ts line 240 MCQ Q2 nudge (a), line 278 pitfall 2; topics-4-5-extras-a-c.ts line 65; book pp. 168, 169, 185)
- Says now: "incomplete dominance (a blended intermediate)"; "incomplete dominance shows a blended intermediate (pink)"; "a single gene whose heterozygote is blended".
- Wrong: the topic's own key message is that incomplete dominance is "not blending" (the parental types reappear in F<sub>2</sub>); calling the heterozygote "blended" re-teaches the error.
- Fix [NEW]: "(a new intermediate)"; "incomplete dominance shows a new intermediate (pink)"; "a single gene whose heterozygote is intermediate".
- Kind: misleading. Source: book. Confidence: likely. NEW.

### 11. Additional A, epistasis table, 12 ∶ 3 ∶ 1 row (line 733; book p. 200)
- Says now: "One phenotype combines two of the four genotypic classes (9 + 3 = 12)"
- Wrong: the 9 and the 3 are phenotypic classes of 9 ∶ 3 ∶ 3 ∶ 1 (each holds several genotypes).
- Fix [NEW]: "One phenotype combines two of the four phenotypic classes of 9 ∶ 3 ∶ 3 ∶ 1 (9 + 3 = 12)"
- Kind: terminology. Source: book. Confidence: certain. NEW.

### 12. Topic 03, Crack the MCQ Q3 nudges for (a) and (d) (lines 773, 776; book p. 182)
- Says now: "(a) and (d) are gene-level (single base) changes, not changes in chromosome number."
- Wrong: (d) is a frameshift, an insertion or deletion of one or more bases (any number not a multiple of three), not necessarily a single-base change.
- Fix [NEW] (both nudges): "<b>(a)</b> and <b>(d)</b> are gene-level changes in the DNA sequence, not changes in chromosome number."
- Kind: misleading. Source: book. Confidence: likely. NEW.

### 13. Topic 03, cheat sheet "Sickle-cell" row (line 815; book p. 183)
- Says now: "... Hb<sup>A</sup>Hb<sup>S</sup> = carrier (malaria-resistant)."
- Wrong: carriers have some resistance to (severe falciparum) malaria, not immunity; the topic text says "some resistance".
- Fix [NEW]: "= carrier (some resistance to malaria)."
- Kind: overgeneral. Source: book. Confidence: likely. NEW.

### 14. Topic 04 and Topic 05 Exam Relevance boxes: per-year question counts kept, unlike Topics 01 to 03
- Says now: Topic 04 "NEET asks 1–2 questions yearly, most often the contrast between polygenic inheritance, multiple allelism, and pleiotropy, plus the “number of phenotypic classes” calculation." Topic 05 "NEET regularly sets 1–2 questions: classifying a mutation (point vs frameshift), the reading-frame / codon-alteration numerical, and the structural chromosomal aberrations."
- Wrong: after R1 13 the Topic 01 to 03 boxes no longer state counts; 04 and 05 still do (labelled, but inconsistent and unverifiable). F1 lists it as a founder decision.
- Fix [NEW]: Topic 04 "NEET often asks about the contrast between polygenic inheritance, multiple allelism, and pleiotropy, and about the “number of phenotypic classes” calculation." Topic 05 "NEET regularly asks about classifying a mutation (point vs frameshift), the reading-frame / codon-alteration numerical, and the structural chromosomal aberrations." Keep the closing SHARE sentence.
- Kind: exam-frequency claim. Source: book. Confidence: certain (inconsistency). NEW (not raised by a reviewer; noted by F1 as a founder decision).

### 15. Additional A, Introduction (line 699): "13 ∶ 3 is only named"
- Says now: "(9 ∶ 3 ∶ 4, 9 ∶ 7, 12 ∶ 3 ∶ 1, 15 ∶ 1; these are beyond the NCERT text, and 13 ∶ 3 is only named)"
- Wrong: 13 ∶ 3 is not named anywhere in Additional A, and Additional G's Traps row now explains it class by class (9 + 3 + 1 = 13 uncoloured, 3 coloured), so "only named" misdescribes both.
- Fix [NEW]: "(9 ∶ 3 ∶ 4, 9 ∶ 7, 12 ∶ 3 ∶ 1 and 15 ∶ 1, worked below; these are beyond the NCERT text, and a fifth, 13 ∶ 3, is explained briefly in Additional topic G)"
- Kind: false claim about the chapter. Source: ours (R2 10 wording). Confidence: certain. NEW.

### 16. Topic 04, Worked example 4 (a) (line 227; book p. 189): ends of the ratio labelled the wrong way round
- Says now: "in the binomial ratio of (4 k) for k = 0, 1, 2, 3, 4: 1 ∶ 4 ∶ 6 ∶ 4 ∶ 1 (out of 16). So 1 darkest ∶ 4 ∶ 6 (most common, intermediate) ∶ 4 ∶ 1 lightest."
- Wrong: listed for k = 0 to 4 dominant alleles, the first term is the lightest (0 dominant alleles). Numerically harmless (symmetric), but it contradicts the line above.
- Fix [NEW]: "So 1 lightest ∶ 4 ∶ 6 (most common, intermediate) ∶ 4 ∶ 1 darkest."
- Kind: unclear. Source: book. Confidence: certain (wording). NEW.

### 17. Additional A, Worked example 4, Capsella (line 790; book p. 201)
- Says now: "Only aabb gives a round capsule." / "triangular ∶ round = 15 ∶ 1".
- Wrong: the recessive capsule of shepherd's purse is ovoid (top-shaped), not round.
- Fix [NEW]: "Only <i>aabb</i> gives an ovoid (top-shaped) capsule." and "triangular ∶ ovoid = 15 ∶ 1" (KP topic 5 point 2: "and <i>aabb</i> an ovoid one").
- Kind: biology detail. Source: book. Confidence: possible. NEW.

### 18. Layout: three blocks end in an empty double line break
- Where: Topic 04 Procedure "Spelled out for the three-gene cross..." paragraph (line 145), Worked example 2 step (line 207), Worked example 3 step (line 217): each string ends in `<br><br>`.
- Wrong: renders an empty gap at the end of the block (no other Biology chapter does this).
- Fix: drop the trailing `<br><br>` in each (no wording change).
- Kind: layout. Source: transcription. Confidence: certain. NEW.

## Earlier flags applied wrongly or incompletely
- R1 flag 2 (polygenic "three or more"): the fix dropped NCERT's own wording on the strength of a wrong NCERT recollection ("NCERT: many"). See flag 4.
- R2 flag 8 (Bombay `why`): the proposed and applied text is wrong for its first case. See flag 2.
- R2 flag 18 (Q9 option (d)): the replacement B–C–A duplicates option (c). See flag 1.
- R2 flag 3 (mitochondrial D.1 / KP): applied in the chapter text, but the key point keeps "the unaffected mother cannot give mutant mitochondria". See flag 3.
- R2 flag 11 (squash): "the squash is white" left in the stem. See flag 5.
- R2 flag 10 (Topic 04 epistasis aside): not applied. See flag 8.
- All other R1 (1, 3 to 26) and R2 (1, 2, 4 to 7, 9, 12 to 17, 19 to 21) fixes are in the text as proposed and I find their wording correct and not overclaiming.

## Rulings on the fixers' new wording (F1 items 1-45, F2 items 1-42)
Every F1 and F2 item was found in the files exactly as listed. Correct and plain: all except F1 36 (flag 4), F2 1 ("13 ∶ 3 is only named", flag 15), F2 2 (half applied, flag 5), F2 33 Q9 (flag 1), F2 36 (flag 2), F2 37 (flag 3). F2 33 Q7 option (c) "1/6" is an arbitrary but harmless distractor; keep. F2 10 / KP topic 7 point 2 "(NCERT's wording; ...)" and "(the book's and NCERT's wording; ...)" are acceptable notes.

## Counts verified
- Blocks per topic (app = book): Topics 01 to 05 each 4 worked examples, 5 practice items, 4 MCQs, 4 pitfalls, 1 Pro-Tip, cheat sheet; tables 2, 1, 2, 0, 0. Additional A 4 examples / 5 practice / 1 table / 1 proc; B 3 / 5; C 2 / 4; D 2 / 4 / 1 table; E 3 / 5 / formula; F 1 / 4; G 6 worked archetype examples, 10 graded questions, 3 tables (distribution 5 rows, ABO 4 rows, traps 7 rows), 2 revision tips. Key points 39: 5 per Topic 01 to 05 (2 remember, mix-up, mistake, shortcut), 2 per A to F, 2 for G; topic indexes 0 to 11 correct.
- MCQ keys recomputed, each the only correct option: T01 b, b, c, c; T02 b, a, b, b; T03 b, c, b, b; T04 c, a, c, b; T05 b, b, c, b. Graded set Q1 to Q10: b, a, b, b, (numeric), c, b, b, b, b. Assertion-reason item (G Archetype 4): options (a) both true R explains, (b) both true R not explanation, (c) A true R false, (d) A false R true; keyed (c), correct. Match item A–II, B–III, C–IV, D–I correct.
- Crosses and ratios: Pp × Pp 1 ∶ 2 ∶ 1, 3 ∶ 1; dihybrid 1+2+1+2+4+2+1+2+1 = 16, 9 genotypes; AaBBCcDd n = 3, 8 gametes; AaBbCC 4; aabbcc (1/4)<sup>3</sup> = 1/64 (p. 167 image: stem prints aabbcc, correct); AB × O 1/2 A, 1/2 B; I<sup>A</sup>i × I<sup>B</sup>i 1 ∶ 1 ∶ 1 ∶ 1; RrTt × RrTt 1/2 × 3/4 = 3/8, 3 × 2 = 6 classes; YyRr × yyrr 1 ∶ 1 ∶ 1 ∶ 1.
- Linkage and sex: 80/1000 = 8% = 8 cM; 18% = 18 cM; 60/1000 = 6 cM; 2n 24/14/20 gives 12/7/10; 5 + 8 = 13 (B–A–C), 10 + 4 = 14 (B–A–C), 5 + 10 = 15 (B–A–C), 5 + 12 = 17 (B–A–C); F.1 A–B (42 + 38)/1000 = 8%, B–C (31 + 29)/1000 = 6%, A–C 140/1000 = 14% = 8 + 6, order A–B–C, double-crossover classes A<sup>+</sup>bC<sup>+</sup> and aB<sup>+</sup>c absent, 436 + 424 + 42 + 38 + 31 + 29 = 1000; F practice 9.4 + 2(0.3) = 10.0 = 3 + 7. P(son) = 1/2.
- Disorders: carrier × carrier 1/4, 1/2, 1/4; carrier mother × normal father sons 1/2, daughters 0; colour-blind father × carrier mother daughters 1/2, child 1/4 + 1/4 = 1/2 (the maximum without an affected mother, true); haemophilic father × homozygous normal mother sons 0; 44 + XXY = 47, 44 + XO = 45; GAG → GUG (mRNA), GAG → GTG (coding strand) correct.
- Polygenic: 2n + 1 = 7 and 5; 3<sup>n</sup> = 27 and 9; 2<sup>n</sup> = 8 and 4; 1 ∶ 6 ∶ 15 ∶ 20 ∶ 15 ∶ 6 ∶ 1 = 64; 1 ∶ 4 ∶ 6 ∶ 4 ∶ 1 = 16; C(6,3)/2<sup>6</sup> = 20/64 = 5/16; (1/2)<sup>2n</sup> = (1/4)<sup>n</sup>.
- Mutation: 300/3 = 100, position 31, 90 altered; 600/3 = 200, position 61, 180; 2n = 24: 25, 36, 48; 2n = 20 trisomic 21; THE CAT ATE THE RAT minus the E of THE = THC ATA TET HER AT; A–B–C–D–E inversion of B–C–D = A–D–C–B–E.
- Epistasis: 9 ∶ 3 ∶ 4, 9 ∶ 7, 12 ∶ 3 ∶ 1, 15 ∶ 1, 13 ∶ 3 each sum to 16 and the class groupings are right.
- Hardy-Weinberg: q<sup>2</sup> = 0.0001, q = 0.01, 2pq = 0.0198 (about 1 in 50); p(2 − p) = 0.64, √1.44 = 1.2, p = 0.4, q = 0.6; selfing q = 0.3: aa 0.105 + 0.09 = 0.195, Aa 0.21, AA 0.49 + 0.105 = 0.595, sum 1; practice 0.1, 0.32, 0.04. NCERT's five factors list matches.
- Pedigree: P(carrier | unaffected sib of affected) = 2/3; II-4 with an aa mother is Aa with probability 1.
- Bombay cross: I<sup>A</sup>i; hh × I<sup>A</sup>I<sup>A</sup>; HH gives all Hh and all group A; with an Hh mother half hh. Rh: father homozygous Rh<sup>+</sup>, so every child is Rh-positive.
- Introductions: Additional A (shared overview) checked against Topics 01 to 05 as built: "Topic 03 introduces pedigree analysis" and "Topic 02 gives the distance method" true; only the 13 ∶ 3 clause is off (flag 15). B to G introductions make no "the chapter never covers" claim; Topic 04's aside does (flag 8).
- Errata (production tag, folios 165, 172, 173, 179, 180, 187, 194): no stray tag, bracketed code or label in the app text (the only brackets are the book's [NEET]/[CUET]/[CBSE] and Bloom labels). No em dash in the four files. No exam year anywhere (the only years are 1856–1863, 1891, 1900, 1902, 1910, all historical).
- Absolutes: every "always/never/only/all/cannot" in the text read in context; the remaining ones are true as stated or already qualified by R1/R2 fixes.

## Figures checked
- lib/diagrams/biology-12-04.ts is an empty array (stub comment): correct, the chapter has no drawn figure. Page images viewed: pp. 165 (core ratios table), 167 (Example 2 stem and AB × O), 171 (sex-determination definitions), 178 (disorder tables), 199 (Overview and epistasis table), 206 (Additional C answers and D key features), 210 (Additional E answers, F method): text and ruled tables only, no drawing; table cells match the app.

## Could not check
- NCERT wording was checked from memory, not against a copy (flag 4 depends on it; I am fairly sure NCERT says "generally controlled by three or more genes").
- Page images rendered but not individually inspected: pp. 164, 166, 186, 200, 212, 216 (the text diff covered their prose; tables there were compared on the text layer).
- No rendering on a device (fonts for ∶, ✓, □, ○, ∝, the binom markup); no jest.
- Real-world NEET question counts (G Distribution) cannot be verified from the repo.

## Overall judgement
Chapter 4 is an accurate word-for-word copy, and after the two reviews the book's overgeneral rules, exam superlatives and mitochondrial absolutes are fixed. The arithmetic (crosses, ratios, Hardy-Weinberg, map distances, codon counts) is all correct and all MCQ keys are right. What remains is mostly in our own new wording: one MCQ that now has two equivalent options (flag 1), two key-point lines that teach something wrong or contradict themselves (flags 2, 3), the NCERT "three or more" line removed (flag 4) and a half-applied organism change (flag 5). Flags 1 to 8 should be fixed before sign-off; 9 to 18 are wording and layout tidy-ups.

Summary: 18 flags; 15 NEW, 3 REPEAT (3, 5, 8); 6 earlier flags applied wrongly or incompletely (R1 2, R2 3, 8, 10, 11, 18); serious (fix before sign-off): 5 (flags 1 to 5).
