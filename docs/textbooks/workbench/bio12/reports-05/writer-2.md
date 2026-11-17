# Biology 12 Chapter 5, writer 2 (Topics 04 to 06, pp. 250 to 271)

File: content/textbooks/bio-12-05/topics-4-6.ts. Checks: eslint clean; narrow jest: 23 pass, 2 fail, neither mine (undrawn ids b12-05-fig-5.1 to 5.8, of which mine are 5.6, 5.7, 5.8; and the em dashes in b11-17 figure labels, Biology 11 Chapter 17). Boundaries confirmed from the page dump (starts at top of pp. 250, 258, 265; Topic 04 ends p. 257 top; Topic 06 ends p. 271; shared Additional intro on p. 272 is writer 3's). Page images checked only for pp. 259 and 263; bold and italic read from a PyMuPDF font dump of all pages, other pages not seen as images.

## Counts
- Topic 04: 8 parts; 4 worked questions; 5 practice; 4 MCQ; 4 pitfalls; 1 pro-tip; 7 cheat rows + 1 aid; 2 tables; fig 5.6.
- Topic 05: 8 parts; 4 worked; 5 practice; 4 MCQ; 4 pitfalls; 1 pro-tip; 6 cheat rows + 1 aid; 2 tables; fig 5.7.
- Topic 06: 8 parts; 4 worked; 5 practice; 4 MCQ; 4 pitfalls; 1 pro-tip; 5 cheat rows + 1 aid; 1 table; 1 proc; fig 5.8.
Figures (undrawn when written): b12-05-fig-5.6 (caption p. 251, drawn p. 252), 5.7 (p. 259, drawn p. 260), 5.8 (p. 266, drawn p. 267); each at the end of "Key definitions, structures and diagnostic features". No other drawing on my pages.

## Exceptions to word for word
1. Every em dash replaced by colon, comma, bracket or full stop (about 150). Sense-sensitive: "reason:" run-in on p. 258 ("scarce, reason: if ...", italic dropped); "Blotting — transfer" and "Amplification ... copies — optional" (p. 268) now colons; "3 billion / 3164.7 million base pairs" (p. 265) is "3 billion or 3164.7 million base pairs" (slash between numbers would trip the fraction check); "India — Lalji Singh" is a colon.
2. Prime: the book prints 5’ and 3’ (apostrophe) in many places; all written 5′ 3′.
3. Math-italic β (U+1D6FD) written β; emphasis italics dropped (reads, builds, not, because, etc.); "Reason:" italic run-ins are bold.
4. Exam Relevance labels (new wording, to approve): "(the book’s estimate from past papers, not official figures)" added after the frequency claim on p. 250, p. 258, p. 265; also after "the most-tested table in this section" (p. 259) and "high-frequency exam facts" (p. 265). No exam years on my pages.
5. Tags: "CBSE Board — 3 marks" is "CBSE Board: 3 marks"; "CUET — match the column" is "CUET: match the column"; likewise NEET items. Question numbers dropped. Match-the-column tables are written as Column I / Column II lines in q; the A-R options printed on the page are in q as (a) to (d).
6. Worked questions with no separate answer line (T04 Q1, Q4; T05 Q1, Q4; T06 Q1, Q4): ans ''. 
7. MCQ nudges: where the book groups wrong options ("(a) and (d) ...", "(c) and (d) ...", "The others are real operons ...", "The others are invented distractors ...") the sentence is repeated in each named option, rephrased only to name the options. T05 MCQ 1: "the trap is confusing the regulatory gene with the structural ones" appended once to solution.
8. Layout: numbered sub-headings (3.1 ...) are bold paragraphs without numbers; the p. 258 to 259 levels table (one row, multi-line cells) is one table row with line breaks; mnemonics inside the cheat sheets are `aids` ("Mnemonic —" now "Mnemonic," ); "Section 4" etc. dropped; part titles sentence case with "and". Titles: "lac" cannot be italic in the plain title field (page prints it italic); "Fingerprint-ing" is "Fingerprinting".
9. Gene symbols i, z, y, a italic (the page prints z, y, a bold upright in the p. 261 answer and p. 263 pitfall, and "(i)" bold upright in "regulatory (i) gene": written bold italic). P and O italic in the parts table as printed. lac, trp, ara, his, val italic as printed. No "subtopic" or cross-references on my pages.

## False "never covers" claims
None in my topics (the Additional introduction on p. 272 is writer 3's).

## Suspected book errors and overgeneral lines (page, quote, note, confidence)
- p. 254 "it can never “drift” between frames once initiation has set it": programmed ribosomal frameshifting exists; say "does not normally drift". Medium.
- p. 254 "which is why a functional mRNA must contain AUG to be translated at all": bacteria also use GUG and UUG starts. Low-medium.
- p. 254 "The stop codons, having no tRNA, are the only built-in “end” signal"; p. 255 "the stop codon never is [coding]": UGA can encode selenocysteine in special contexts. Low.
- p. 250 "tRNA ... powerful clue that life’s earliest catalysts were RNA, not protein": the RNA world is a hypothesis; state as such. Medium.
- p. 251 "Large subunit: has two tRNA sites (P, A)": the sites span both subunits and there is also an E site; this is the NCERT simplification. Low.
- p. 253 "This single architectural difference ... explains a whole cluster": overstated. Low. "Translation is one of the most energy-hungry processes": unsupported superlative, low.
- p. 262 "The cell therefore cannot use lactose": a super-repressor still allows basal leakage; say "cannot efficiently". Low.
- p. 263 MCQ 4 "the first and classic operon model": lac is the first operon described (Jacob and Monod, 1961, Nobel 1965); fine. Pitfall "z, y, a" bold upright is a typographic point only.
- p. 265/266/268 human gene count "~30,000" (also "far fewer than 80,000–140,000"): matches older NCERT; current estimate about 20,000 protein-coding genes. High. Chromosome 1 "2968" and Y "231", "1.4 million SNPs": NCERT's figures; current databases give different, larger SNP counts. Medium. Propagates to p. 265 text, p. 268 Q1, p. 270 practice 1, 3, MCQ 3, pitfall 1, p. 271 pro-tip and cheat sheet; all copied.
- p. 266/271 "Discovered by Alec Jeffreys (1985)": 1984 to 1985 (paper 1985); fine. "Lalji Singh (CCMB)": pioneered in India, fine.
- p. 268 "Most of the genome is identical between people, so comparing genes would be uninformative"; p. 269 "Only the highly polymorphic VNTR ... regions carry enough individual variation" and "genes are too similar between people": overgeneral (SNP panels, STRs, coding variants also discriminate). Medium.
- p. 271 pitfall "(Largest gene-count vs smallest, not largest/smallest chromosome by size)": chromosome 1 is also the largest chromosome by size, so the contrast is muddled; Y is not the smallest (21 is). Low-medium.
- p. 266 model organisms list (E. coli, yeast, roundworm, mouse) differs from NCERT's (bacteria, yeast, C. elegans, Drosophila, rice, Arabidopsis); not claimed as complete. Low.
- Superlatives/frequency copied and labelled or listed: "Steady NEET territory" (p. 250), "A NEET favourite ... almost every year" (p. 258), "Reliable marks" (p. 265), "most tempting distractor", "the most common misconception" (p. 255), "the most common numerical error" (p. 256), "most MCQs resolve instantly" (p. 271).
- Recomputed: 153 nucleotides / 3 = 51 codons, 50 amino acids (correct); 5′–GCA–3′ anticodon 3′–CGU–5′ = 5′–UGC–3′ (correct); AUG anticodon 3′–UAC–5′ = 5′–CAU–3′ (correct); match answers T04 A–2 B–1 C–4 D–3, T05 A–2 B–1 C–4 D–3, T06 A–3 B–1 C–2 D–4 (all correct); every MCQ key correct and unique (T04: b, c, b, b; T05: c, c, b, b; T06: b, c, c, a); "I-PRESHA" letters match the seven steps. A-R items all key (a), standard four options printed, no "both false".

## Not checked
Page images other than pp. 259 and 263 (bold/italic come from the font dump); the figure drawings themselves.
