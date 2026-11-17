# Biology Class 12 Chapter 5: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:58:31Z)

DONE. Wrote only /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-05.ts (export DIAGRAMS_BIOLOGY_12_05 kept, still registered under 'biology|12|5'; no em dashes in the file). Eight figures, ids match the chapter text exactly (b12-05-fig-5.1 to 5.8 each appear once as a fig block; nothing missing either way).

Test results: `jest-serial.sh lib/diagrams -t "biology.12.5"` gives 31 passed, 0 failed (each case: check, audit, no unplaced tags). `npx eslint lib/diagrams/biology-12-05.ts` is clean. Every figure was rendered from the kit's dump route and looked at (SVG to PNG with qlmanage; its stand-in fonts show no italics, so judge type on device). Scratch dumps are outside the repo in /private/tmp/claude-501/b12svg. Note: other agents' scratch tests (lib/diagrams/__tests__/zz-scratch-b1212.test.ts, and a zzscratch-b1207 that vanished mid-run) sit in the shared tree; one showed as a suite failure once, not mine.

Ids, drawn page, topic index, cases:
- b12-05-fig-5.1, p. 227 (caption p. 226), topic 0: chromatin packaging levels, six levels bottom to top.
- b12-05-fig-5.2, p. 229 (caption p. 228), topic 0: replication fork.
- b12-05-fig-5.3, p. 237 (caption p. 236), topic 1: Hershey-Chase, 2 cases (Track 1: 32P-DNA; Track 2: 35S-protein), caption split by track, conclusion box in both.
- b12-05-fig-5.4, p. 244 (caption p. 243), topic 2: transcription unit (prokaryote).
- b12-05-fig-5.5, p. 246 (caption p. 245), topic 2: hnRNA to mature mRNA.
- b12-05-fig-5.6, p. 252 (caption p. 251), topic 3: bacterial ribosome, A and P sites.
- b12-05-fig-5.7, p. 260 (caption p. 259), topic 4: lac operon, 2 cases ((a) lactose absent, (b) lactose present), caption split a/b with the shared first sentence in both.
- b12-05-fig-5.8, p. 267 (caption p. 266), topic 5: DNA fingerprinting workflow.
Captions are word for word from the page (primes U+2032, arrows, curly quotes in 5.1 and 5.8, en dash in "Hershey–Chase" and "cap – joined exons – poly-A tail"). Page images confirmed for all eight; no other drawing on pp. 223-293.

THE BOOK'S (kept): every label, title, step, size and sequence. 5.1: six levels in order with 2 nm / ~11 nm / 30 nm / ~700 nm / ~1400 nm, ~200 bp + H2A H2B H3 H4, 7 H1 at 8 beads, "increasing packaging". 5.2: both template names with direction, 5′/3′ on all strands (3 Okazaki fragments, 2 ligases, helicase, parental duplex 3′ top / 5′ bottom, fork-movement arrow, the three-entry key). 5.3: both tracks, pellet/supernatant radioactivity, conclusion. 5.4: coding 5′→3′ above, template 3′→5′ below, promoter (−35 / −10), structural gene, terminator, RNA pol, growing transcript. 5.5: E1 I1 E2 I2 E3 I3 E4, three steps, removed introns I1 I2 I3, m7G cap, poly-A tail. 5.6: mRNA 5′ AUG UUU GCC GAA 3′, P tRNA 3′-AAA-5′ (Phe), A tRNA 3′-CGG-5′ (Ala), Met-Phe chain, peptide bond, 23S rRNA (ribozyme). 5.7: i P O z y a order, R on O in (a), R + allolactose (I) in (b). 5.8: seven steps (2 optional, dashed), gel and blot each 3 lanes of 3 bands.
Em dashes became colons (5.3 conclusion; 5.7 "Lactose ABSENT/PRESENT: operon OFF/ON" and "No mRNA: z, y, a are not transcribed"; 5.8 title).
Recomputed in checks: 5.6 codons vs genetic code and anticodon pairing; 5.4 and 5.2 arrow/end directions (antiparallel); 5.1 sizes rising; 5.5 block sequences.

SCHEMATIC: all sizes, positions and shapes (re-laid as one column or one panel per case for a phone), helix/loops/fibre/transcript curves, leader angles, band positions on the gel and blot (book's pattern approximated: 3 lanes x 3 bands). Book's colour fills not copied (one marigold highlight each: nucleosome, helicase, radioactive pellet/supernatant, RNA pol, mature mRNA row, peptide bond, bound repressor / inactive complex, step 6 hybridisation); where the book says labelled vs unlabelled by orange fill, the text says it (5.3 Track 2 phage coat drawn with a heavy ring). In 5.2 the leading and lagging new strands are told apart by solid vs dashed (book: green vs purple). The 5.1 helix and 5.6 sequences are upright.

Things to report:
1. Brief says the Figure 5.3 caption prints Track 1 only; the page caption prints both tracks plus the conclusion (used in full, split across the two cases).
2. Page typography: sequences AUG/UUU/GCC/GAA in 5.6 and "lac" in captions are set in the page's italic label/caption face; I set sequences upright (house rule) and "lac" upright (caption is all-italic, so not evidence of a gene-name italic). Gene symbols i, P, O, z, y, a italic (page prints them italic in the boxes); R, pol, I upright; E. coli italic.
3. Book facts to check later in the text pass: "~1.65 turns" copied as printed (NCERT-style value is ~1.65 turns of ~147 bp); nucleosome labelled "~11 nm" and "~200 bp" as printed; "30 nm fibre". Nothing else numeric in the figures.
4. Book page quirk: the figure titles (e.g. "Chromatin Packaging Levels", "Replication Fork", "Lac Operon: Inducible System") are drawn as labels at the top of each figure, as the Class 11 files did for titles that sit in the drawing.
