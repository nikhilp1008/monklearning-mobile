# Biology 11 Ch 17, fixes from review-R3: [NEW] wording and changes

Files: T = content/textbooks/bio-11-17/topics-0-2.ts, B = topics-3-4-extras-a-b.ts, C = extras-c-g.ts, K = lib/revise/keypoints-biology-11-17.ts, F = lib/diagrams/biology-11-17.ts. Everything below is our own [NEW] wording unless marked "book".

## Applied per flag
1. T Topic 01 MCQ Q3 solution: "F = fibrous (helical) polymer" -> "F = filamentous (helical) polymer". C Additional G trap 4: "F = <b>Fibrous</b> polymer" -> "F = <b>Filamentous</b> polymer".
2. T Topic 00 "Crucially, ..." paragraph: "skeletal-muscle movement is never the muscle acting alone" ... "Remove any one component and that movement fails", then appended: "(Smooth and cardiac muscle, which move the gut and the heart, need no skeleton.)".
3. T Topic 02 Calcium logistics: "Smooth and cardiac muscle have a less extensive SR and also take in Ca<sup>2+</sup> from the <b>extracellular fluid</b> (in smooth muscle a large share; in cardiac muscle a smaller share that triggers further release from the SR). This comparison goes beyond NCERT."
4. B Additional A intro: "(Topic 02 gives recruitment and summation in one paragraph and lactic acid as the cause of fatigue; the phases of a twitch, tetanus and the finer causes of fatigue are new)". B Additional B intro: "...the phases of a twitch, summation and tetanus, which the chapter names only in passing (and tetanus not at all), and the causes of fatigue beyond the lactic acid that Topic 02 gives."
5. B Additional B Method, Tetanus bullet: "when stimuli arrive so rapidly that the muscle has little or no time to relax between them, the individual twitches fuse into a sustained contraction. Two types:". K topic 6 first point: "...has little or no time to relax between them, the twitches fuse into a sustained contraction, tetanus: complete (no relaxation, a smooth plateau) or incomplete (small drops in tension still show between the peaks)".
6. F Figure 17.2 sarcomere case: the two "A-band" labels under the bands removed; the bracket label now reads "A-band = thick-filament span (length fixed)" [NEW]; check strings updated (A-band label count 0, bracket text expected).
7. F Figure 17.1 Muscular panel: muscle redrawn as a spindle running from the upper bone across the joint onto the lever; labels unchanged; check text now says it spans the joint.
8. C Additional G graded practice Q3 answer: appended "(Strictly, the articular processes of neighbouring vertebrae also meet at small synovial gliding joints, as Topic 03 says; cartilaginous is the NCERT answer wanted here.)" Key (c) unchanged.
9. B Topic 03 skull bullet: "(The ear ossicles and the hyoid, which NCERT also places with the skull, are movable too; the 22 here are the cranial and facial bones.)" Practice 5 answer (key (a) unchanged) appended: "(R holds for the 22 cranial and facial bones; the hyoid and the ear ossicles are not joined by sutures.)"
10. C Additional C intro: "synovial joint structure, including the make-up of synovial fluid, is a likely short-answer topic in board-style papers (the book's estimate; NEET asks MCQs only, and this goes beyond NCERT)." C Method: "The full architecture (beyond NCERT):" and "Synovial fluid composition (beyond NCERT)." D intro: "To see the whole picture, the reader must integrate these:". E intro: "The skill these questions test is connecting ..."; E heading "Four clinical integration patterns (beyond NCERT)." B Topic 04: "(a linking question worth expecting)" and "which makes them likely “application” questions".
11. C Example E.1: "The fibres do <b>not</b> usually change from one main type to the other" ... "training does not convert fast-twitch fibres into slow-twitch fibres to any useful extent." Practice 3 answer: "(The fibres adapt largely within their type; they do not switch between slow and fast.)"
12. T Topic 01 intercalated discs def: "join adjacent cells"; Topic 01 MCQ Q2 solution: "Intercalated discs join cardiac cells so they contract as one unit."
13. C Additional C Practice 3 answer and F Additional C item 3: hyaluronic acid "gives synovial fluid its viscosity and helps lubricate the joint."
14. B Additional A intro: "begins every skeletal-muscle contraction (Topic 02, steps 1 to 3)".
15. C Additional G Q6 answer: "(has organised sarcomeres) but involuntary (it beats on its own; the autonomic nervous system only adjusts its rate)".
16. T Topic 01 cheat-sheet aid: "striped rebel, takes no orders, hardly tires."
17. T Topic 02 Exam Relevance: "This is a high-yield slice of the chapter. NEET asks the <b>sliding-filament cycle</b> almost every year (the book’s estimate from past papers, not official figures): ..." (the first duplicate label removed).
18. C Additional D: "Estrogen deficiency ... because estrogen normally suppresses" (was Oestrogen/oestrogen); "organised" (see 15).

## Printed answer keys, numbers, titles or headings changed
None. Every key, number, title and figure number is unchanged (Practice 5 key (a), G Q3 key (c) kept). Headings changed only as in flag 10 ("Synovial fluid composition (examinable)." -> "(beyond NCERT)."; "Four clinical integration patterns (exam-tested)." -> "(beyond NCERT)."; the Topic 04 sub-heading "(a favourite linking question)" -> "(a linking question worth expecting)").

## Not applied / founder decisions
- Flag 19 (visible "[New wording ...]" / "[Standard four options in letters, new wording ...]" brackets in student text: A3, B6, C5, D5, E5, D PTH note, E5 note, F E5, G Archetype 3, G Q10): NOT removed. The review itself marks this as a pending founder decision (F2-1) and the brackets are the in-file record of our new wording. Recommend removing them all before the store build; each is already listed in new-text-F2.md.
- Flag 13's wording "helps lubricate the joint" and flag 3's "This comparison goes beyond NCERT." are new wording for the founder to confirm.
- Nothing else skipped. No flags conflicted, and no NCERT wording of the book was dropped: the book's wording was kept in every case and the nuance added beside it (flags 8, 9).

## Tests
- book-rules + book-chapters + display-fit (-t "Biology 11 Chapter 17|the text of every book chapter|fits its line"): 26 passed, 1 failed. The one failure is display-fit "Biology 11 Ch 19 A p: pGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH2 is 345 wide on a 342 line", another chapter's text, not Chapter 17 (no Chapter 17 line failed).
- lib/diagrams -t "biology.11.17": 31 passed.
- lib/revise: 137 passed.
- eslint on content/textbooks/bio-11-17, lib/diagrams/biology-11-17.ts, lib/revise/keypoints-biology-11-17.ts: clean.
