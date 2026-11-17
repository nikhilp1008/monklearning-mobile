# Biology 12 Chapter 5, writer 3: Additional topics A to G (pp. 272 to 293)
File: content/textbooks/bio-12-05/extras-a-g.ts (7 topics; indexes A=6 ... G=12). Checks: eslint clean; book-rules/book-chapters: only failures are the 8 undrawn fig ids (diagram agent), and Ch 6 / Ch 11 / Ch 19 items not mine.

## Boundaries (differences from brief)
- Shared intro p.272 has NO mention of "Addendum P" (brief said it does); it opens A's Introduction. Text says "This addendum" (kept).
- A: p.272 l.11 to p.274. B: p.275 top; its last practice answer spills to the top of p.277 (brief: ends 276). C: p.277 to 279. D: low p.279; last answer spills to top of p.282 (brief: ends 281). E: p.282; practice on p.283, ANSWERS on top of p.284. F: p.284 mid to foot p.285. G: heading foot p.285, text pp.286-293 (ends "Two Skills Worth Extra Practice"). p.294 next chapter.
- Figures: none on pp.272-293 (PyMuPDF: only straight lines: rules). Fig ids used: none.

## Counts
A: 3 parts+intro, 3 method paras, 3 ex, 5 practice. B: 3 method paras+1 table, 3 ex, 5 practice. C: 2 paras+1 table, 3 ex, 5 practice. D: 3 paras, 3 ex, 5 practice. E: 3 paras, 3 ex, 5 practice. F: 5 parts (answers as numbered lines). G: Distribution (1 table), 5 archetypes (5 ex), Traps table (9 rows), 12 graded items (as practice items, answers in `a`), closing paragraph. No MCQ/pitfall/pro-tip/cheat sheet blocks exist in these pages.

## False "chapter never covers X" claims (checked against pp.224-271 dump)
- Shared intro: "leaves systematically untested" is overstated (see A-E).
- A: "does not work through why the lagging strand must be discontinuous": FALSE, pp.225, 228, 230 do (Topic 01). Okazaki joining by ligase is covered pp.228-229 (primer removal by pol I is not). Multiple origins: true, not covered.
- B: "does not work through the sequence in which [capping, splicing, tailing] occur": FALSE, steps 1-2-3 in order on p.243 and Fig 5.5 (pp.245-246; Topic 03). Co-transcription, alternative splicing, lariat, snRNPs: not covered (true).
- C: "does not include ... mRNA lengths": partly FALSE, p.255-256 (Topic 04) gives codons = nucleotides / 3 and a Pro-Tip. trp only named in lists (pp.259, 264): true. Glucose/positive regulation is mentioned p.258.
- D: "does not examine ... chromosome size ... ELSI": FALSE in part: ELSI is one of the six goals (pp.266, 270, 271); chr 1 (2968) vs Y (231) gene counts on pp.266, 268-271; model organisms p.266. Gene density and ESTs: true, not covered.
- E: "does not include questions where students must match VNTR band patterns": FALSE, Topic 06 Q4 (p.269) is a swapped-children band-matching item. Y-STR and random-match probability: true.

## Suspected book errors (page, text, why, fix, confidence)
- p.279 C practice 5(b) (and Answer C): "expression is higher than in (a)": both media contain glucose and lactose is irrelevant to an operator-constitutive mutant; no reason for (b) > (a); the F summary does not say "higher". Delete "higher than in (a) and". Medium.
- p.283-285 E practice 5: question never says which family each child is currently with, so "swapped" does not follow (only that A belongs to Y and B to X). Add "A was given to X and B to Y". Medium.
- p.283 E.2: "1/1.56 × 10^10" printed on one line means 1/(1.56 × 10^10); I stacked it with the whole product in the denominator. Also "extremely unlikely" for a random match: with ~8 billion people the expected number of matches is about 0.5. Medium.
- p.282 E: "making forensic identification essentially certain" (assumes independent loci and 1/100 per locus; real match probabilities per locus are higher). Medium. "Y-STRs inherited unchanged" (p.283): Y-STRs mutate at about 0.2% per locus per generation; add "except for rare mutations". Medium. D1S80 bands of 4 kb and 7 kb are schematic (real D1S80 PCR products are under 1 kb). Low.
- p.281 D.3 / D.5: average gene 27,000 bp vs NCERT "average gene consists of 3000 bases"; book's 30,000 genes vs current ~20,000 (and NCERT's newer 20,000-25,000); pp.279, 289 "3.2 billion" vs "3 billion" elsewhere (NCERT 3164.7 million). Report both values. Medium-high.
- p.275-276 B: RNA Pol III "snRNAs" marked "NCERT-exact": true to NCERT, but spliceosomal U1, U2, U4, U5 are Pol II products (only U6 is Pol III). Medium. "Poly-A tailing ... only after transcription terminates": cleavage/polyadenylation is coupled to termination (the book's own B practice 1 says "termination and 3' cleavage"). Low-medium.
- pp.272-274 A: pol I removes primers and fills gaps is the E. coli picture (eukaryotes: RNase H/FEN1, pol delta). "polymerase can only extend 5'->3'" (also pp.289, 290, 292, 284 "only"): true of polymerisation, unqualified. Ambiguous "toward the fork" for the leading strand (pp.273, 274, 287: used for the template read direction and for the new strand). Low.
- p.277-278 C: lac Z "~1024 amino acids" (real 1023); coding region 3072 excludes the stop codon (3075 with it); "a single lac operator" (E. coli has three, O1-O3; NCERT shows one); "about 10 molecules" are tetramers. Low.
- p.280 D: chr 21 with 281 genes (not in NCERT; not verified). Low.
- p.286 G: "heaviest", "most heavily tested combination", "every section has appeared in NEET papers", "reliably", "five question shapes so faithfully", "three most common traps" (p.288), table emphasis column: all unlabelled exam claims; labelled with the "book's estimate" wording. p.286 "The answer always runs through A = T and G = C", "Never set up anything more elaborate".
- p.289 Traps: "Chargaff ... holds only for double-stranded DNA; single-stranded nucleic acids do not obey it" (dsRNA obeys A=U; say "double-stranded DNA (and double-stranded RNA with U)") medium; "RNA ... that is precisely why DNA replaced it as the archive" (state as the accepted hypothesis) medium; sigma "starts", rho "ends" (bacteria only; many terminators are rho-independent) low.
- p.292 Q10: "making each person's band pattern unique" (identical twins; p.284 says so itself) low.
- p.288 archetype 5: "Exactly one combination is correct" but only option (a) is printed. Low.
- Recomputed all numbers: A.3 (1,440,000; 2,880,000; 104.2 -> 105; 833 h = 35 days), B.3 (200, 150, 50), C.2 (3072, 138, 3172), C practice 3 (1500), D.1 (11.9, 4.1, 2.9x, 4.4x, 12.9x), D.3 (8.1e8, 0.27, 4.5e7, 1.5%, 98.5%), D practice 1, 5 (5.9, 94.4%), E.2 (6.4e-11, 15.6 billion), E practice 3 (6.25e-6), E practice 1, 5 bands, G Q3, Q7, Q8 (1:1; 3:1 third generation), Archetype 1: all agree with the book.

## Exceptions taken
- Every em dash (about 90) replaced by colon, comma, brackets or full stop; in titles/lead-ins "X — Y" became "X: Y"; table cells and answers likewise. No sense changes intended; the ones with reordered punctuation: A method ("away from the fork (it cannot extend toward the fork), so"), C.1, D.2, E method, G Q10 answer, Q12 answer ("(a). Both ...").
- "Example A.1 — [NEET] Title" -> tag = bracket text, Title = bold lead in q. "Practice — Addendum A" -> part "Practice"; "Answers" -> each `a`.
- "Addendum A..E" in F -> part titles "Additional topic A..E"; "sub-topics/Sub-topic" (G, p.286 x3) -> "topics/Topic" (table head too).
- Examples where the book's Answer repeats the solution's last words: Archetype 1 solution ends before "A = 30 %" and `ans` is "A = 30 %" (printed-once rule).
- Archetype 2 and Q12 print no options: standard four added (NEW WORDING, for the founder): "Choose: (a) Both true, R explains A. (b) Both true, R not the explanation. (c) A true, R false. (d) A false, R true."
- Archetype 5 table written as "Column I: ...; Column II: ..." lines in q.
- Graded set (Q1-Q12) written as `practice` items: "Q1 — Recall (Easy)" -> "[Recall (Easy)]"; the "Answer:" label dropped, answer starts "(c). ...". Options one per line, bold letters.
- Stacked fractions (all book slashes: 2968/249, 231/57, 281/48, 1/100, 1/50, 1/20, (27,000-1500)/27,000, 3e8/2.88e6 ...). Ceiling brackets kept as printed. Ratios use "∶".
- Italics: gene/site symbols as the page prints them: oriC, lacZ, z-y-a, i, O^c, i^- italic; "the z gene of the lac operon" (p.277), practice C2 "i gene", archetype 5 "i, z, y, a" (bold) and Q6 stay upright as the page prints them (inconsistent with the genetics rule; flag for review). Emphasis italics (must, away, immediately, inducible, repressible, connect, not, and all answer lines of the graded set) dropped. Species names italic.
- NBSP between number and kb/bp/Mb/% where the book has a space ("20 %"); "27%" kept without.
- "→" spacing normalised ("cap → splicing"). "2'-OH" non-breaking hyphen printed as plain hyphen.
- Exam labelling: the "book's estimate" sentence added at: C and E intros ("standard NEET extensions"), G distribution lead-in, "what this means", "every section has appeared", archetypes lead-in, archetype 4, Traps lead-in, Two Skills. Years kept (1944, 1958, 1985 are discoveries).
- kalam: book sentences (A "Each Okazaki fragment begins..."; B poly-A; C inducible/repressible; D 1-2%; E two alleles; F "5 introns: ..."; G "Treat these weightings...").

## Could not check
No figures on these pages. Page images read for pp.272-291; pp.292-293 read from the text dump and PyMuPDF italics only. Whether the font test accepts ⌈ ⌉ ≡ ≠: display-fonts passes (9 of 10 pass; the one failure is Biology 11 Ch 19).
