# Biology 11 Ch 18, Topics 03, 04 and Additional A, B (pp. 1095–1115): writer 2 report (condensed)

File: content/textbooks/bio-11-18/topics-3-4-extras-a-b.ts. Checks: jest (book-rules + book-chapters, Chapter 18 filter) only failure = undrawn figs b11-18-fig-18.1 to 18.6 (diagram agent's); eslint clean; no em dash left.

## Boundaries confirmed (page images/text)
Topic 03 pp. 1095–1103; Topic 04 pp. 1104–1110; shared intro p. 1111 (heads A's Introduction, then A's own two-sentence intro); A pp. 1111–1113 (answers end p. 1113, B starts mid-page); B pp. 1113–1115 (answers end p. 1115, Addendum C starts below). Topic 03 and 04 have the eight sections; both open with "Exam Relevance".

## Counts
- 03: 8 parts, 4 ex, 5 practice, 4 MCQ (correct idx 1,0,1,1 = b,a,b,b), 4 pitfalls, 1 pro-tip, 3 tables, 2 figs.
- 04: 8 parts, 4 ex, 5 practice, 4 MCQ (all b, idx 1), 5 pitfalls, 1 pro-tip, 1 fig.
- A: 4 parts (Introduction, Method, Worked examples, Practice), 2 ex, 5 practice, 2 tables.
- B: 4 parts, 2 ex, 5 practice, 2 tables (classification, twelve nerves). All twelve rows checked on the page image.
Options kept as (a)–(d), as the book prints them here.

## Figures (ids on my pages)
b11-18-fig-18.4 (caption p. 1097, drawn p. 1098, end of Topic 03 part 2); b11-18-fig-18.5 (caption p. 1100, drawn p. 1101, end of part 3); b11-18-fig-18.6 (caption p. 1106, drawn p. 1107, end of Topic 04 part 2). No unnumbered drawings on pp. 1095–1115 (A and B hold tables only). Pages with none besides the plates: 1095–1097, 1099–1100, 1102–1106, 1108–1115. Captions not copied ("(see next page)" dropped with them).

## Exceptions taken
- Em dashes (every one, ~120) replaced by colon, commas, brackets or full stop; no sense change. Table cell "—" (A, resting duration; sympathetic-only row, "Blood vessels to muscles", parasympathetic cell) written as "–" (en dash), meaning "none given".
- "Addendum A–F" in the shared intro (p. 1111) → "Additional topic A–F". "Addendum" headings not copied. Titles: "Action Potential: The Complete Waveform and Refractory Periods", "The Twelve Cranial Nerves" as printed.
- Section names: "Key Structures, Definitions & Terminology" → "Key structures, definitions and terminology"; "Key Processes & Mechanisms" → "Key processes and mechanisms"; rest standard.
- Exam statements (no years in my pages): the Exam Relevance paragraphs of Topic 03 and 04 carry "(the book’s estimate from past papers, not official figures)" once each, after the CUET sentence (new wording).
- Assertion-reason practice items 5 (Topic 03 and 04) print only "choose (a)/(b)/(c)/(d)": standard four options written in letters (new wording). Worked A-R examples print their own options; both correctly end "(d) A false, R true".
- Worked-example headings (A.1, A.2, B.1, B.2 titles) became a bold lead in the question; "Example A.1" labels dropped. Match-the-column tables (Topic 03 ex 3, Topic 04 ex 3) written as "Column I: A. …; Column II: 1. …" in the question; the printed "Answer: …" is `ans`; other examples have no separate answer line, so `ans: ''`.
- Cheat sheets: the "Mnemonic(s)" bullet is in `aids` (Topic 03, 04); in Topic 04 the printed last line "Reflexes are inborn … acquired/conditioned" follows the mnemonic bullet in the book but is a row here (it sits before the aid).
- "2/3" and "1/3" in the B table stacked (<frac>). 𝑡 written as plain t. "mV"/"ms" kept with a no-break space. Inline bullets and numbered lists in prose are `<br>` lines.
- Plain "Mnemonic" column of B's classification table kept as a table column.
- Kalams (each a book sentence): Topic 03 p. 1095 "The autonomic system itself has two opposing teams…"; 04 p. 1104 "The reflex action is the event…"; A p. 1112; B p. 1114.

## False "never covers" claims in the shared introduction / A / B (checked against Topics 00–04 as read in the book, pp. 1077–1110)
1. A intro (p. 1111) "gives only the resting … and peak … values, with no timings, no threshold value and no refractory-period logic": Topic 01 (p. 1080) also gives repolarisation, hyperpolarisation ("overshoot") and the Na–K pump restoration step, mentions the threshold (pp. 1078, 1080) and says "the refractory period is why impulses don’t run backwards". True: no numeric timings and no −55 mV value. Correction: "gives only the resting and peak values, with no timings and no numerical threshold, and only a one-line mention of the refractory period."
2. B intro (p. 1113) "never names them, classifies them, or states their functions": Topic 03 names the vagus and its reach into thorax and abdomen (p. 1096), the vagus as craniosacral outflow (p. 1097), and Topic 04 names cranial reflexes (blinking, pupillary, salivation, p. 1105). True: it never lists the twelve nor classifies them. Correction: "never lists them (only the vagus is named) or classifies them."
3. Shared intro (p. 1111) "Addendum F names the clinical conditions the chapter never mentions": Topic 01 mentions "demyelinating disease" (p. 1079). Mild; "names by name the conditions the chapter barely mentions".
4. Shared intro "Addendum E rewires the reflex arc with the muscle spindle and the flexor-extensor story": Topic 04 3.2 (p. 1106) already says polysynaptic reflexes "relax the opposing muscle", and the knee-jerk is described with a "stretch receptor" (p. 1106). Not false, but not new.
5. Shared intro says "Six examination patterns"; it lists six but the chapter's Additional topics G and H follow: harmless.
6. A and C/D claims ("the chapter mentions … but never drives", "opens the synapse one level deeper") are true: Topic 01 gives EPSP/IPSP and net effect (p. 1082), Topic 02 mentions ascending tracts and thalamus (p. 1091).

## Suspected book errors (page, quote, why, correction)
- p. 1111 table, Restoration "Na–K pump restores gradients ≈ 5–10 ms": the −90 to −70 mV return is mainly closing of the voltage-gated K+ channels and the resting K+ leak; the pump restores ion gradients over a much longer time and is only slightly electrogenic. Correction: "K+ channels close; resting leak; Na–K pump later restores gradients".
- p. 1111 "Resting … Na–K pump working": the resting potential is set by K+ leak; the pump maintains the gradients (the chapter says so too, p. 1080). Add "and K+ leak".
- p. 1112 "absolute refractory period … lasts roughly 1–2 ms, covering the depolarisation phase and the early part of repolarisation": with the table's 1 ms depolarisation plus 1 ms repolarisation the absolute period runs to the end of repolarisation (about 2 ms), and the relative period follows; "early part" is loose. Example A.1 is consistent: the stimulus 0.5 ms after onset falls inside it (onset 2 ms, absolute until about 4 ms).
- p. 1112 Example A.1 reasoning "At t = 2.5 ms … the membrane is still depolarising": true only because depolarisation is ≈ 1 ms in the table; fine, flagged for consistency.
- p. 1113 Practice A.4 asks to arrange four phases; the answer adds a fifth ("restoration"): ask lists four, answer five.
- p. 1114 "Origin clue: Cranial nerves III–XII emerge from the brain stem": XI (accessory) has a spinal root from the upper cervical cord (hence "spinal accessory"). Also "Olfactory (I) and optic (II) … considered part of the CNS": true for the optic nerve and olfactory bulb/tract; the olfactory nerve fibres themselves are classically listed as cranial nerves of the PNS. Reword "optic nerve is a CNS tract; olfactory nerve fibres end in the olfactory bulb".
- p. 1113 type table "Motor: Only motor (efferent)": the "motor" cranial nerves also carry proprioceptive afferents; "mainly motor". Same for "Sensory: only sensory". Overgeneral "only".
- p. 1114 XI "Motor" listed under "Only motor": see above. X "Parasympathetic to heart, lungs, digestive tract": correct for most of the gut, not the distal colon (sacral outflow); the book's p. 1097 "craniosacral" note covers it.
- p. 1114 "Only cranial nerves III, VII, IX, and X carry parasympathetic fibres": correct for cranial nerves; the sacral outflow also carries them (p. 1097): add "among cranial nerves".
- p. 1095 "single most tested idea here": unsupported superlative; label added only as the book's estimate; suggest "a frequently tested idea".
- p. 1095 "Exam Relevance … 1–2 questions": shares labelled once.
- p. 1096 "The PNS has no information-processing of its own beyond simple relays": the enteric nervous system (gut wall plexuses) integrates reflexes on its own; add "except the gut’s enteric network".
- p. 1103 pitfall "Sympathetic (postganglionic) → noradrenaline; parasympathetic → acetylcholine. A single swap loses the mark." and table "Main postganglionic transmitter": overgeneral; sympathetic postganglionic fibres to most sweat glands release acetylcholine, and all preganglionic autonomic fibres release ACh. The book itself says (p. 1099) most sweat glands are sympathetic. Add "mainly".
- p. 1099 table "Blood glucose … Parasympathetic: Lowered / storage favoured": the parasympathetic system has no major direct glucose-lowering action (insulin release is only modestly vagal). Reword "no major effect; digestion and storage favoured".
- p. 1099 "Blood vessels to muscles: Dilate" (sympathetic): most blood vessels constrict under sympathetic nerve (noradrenaline); dilation in skeletal muscle is by adrenaline and the sympathetic cholinergic fibres: add "(skeletal muscle)".
- p. 1097 "sympathetic ganglia form a chain close to the cord, hence short preganglionic and long postganglionic": the prevertebral (coeliac, mesenteric) ganglia lie farther out and the adrenal medulla has no postganglionic fibre; "typically".
- p. 1105/1104 internal contradiction: "cannot be consciously prevented once triggered" (Limiting conditions) vs "you can partly suppress a flinch" (3.4, p. 1108). Reword the first "cannot be consciously prevented once triggered" → "is hard to prevent once triggered".
- p. 1105 "It has five components" (including interneuron) vs the monosynaptic arc defined on the same page with no interneuron: say "up to five".
- p. 1106 "most spinal nerves are mixed nerves": all 31 pairs are mixed (the roots are separate, the nerves are not): "all".
- p. 1106 "the chemical synapses in the cord allow the impulse to travel only from sensory side to motor side": true; "cord" is generalised to all reflex arcs; fine.
- p. 1105 "salivation" is listed as a cranial reflex and as "salivation when food enters the mouth" (inborn) while "mouth watering at the sight of food" is conditioned: consistent, no change.
- A-R option 4 is "(d) A false, R true" in every printed A-R option list on my pages: none printed "both false".
- Exam-frequency wording kept (labelled): p. 1095 "regularly", "appear often enough", p. 1104 "reliable", "frequent", p. 1111 "These are standard NEET questions", p. 1113 "NEET asks exactly this". Unlabelled frequency claims: suggest "often asked".
- Practice tags [NEET]/[CBSE]/[CUET] are difficulty tags (book-wide note).
- Practice B.1 option set and answer are right (vagus); Practice B.3 is a trick question with no answer from the options: kept.
- Name currency: "Spinal accessory" printed; the current name is "accessory nerve (CN XI)"; "Vestibulocochlear" is current.

## Numbers recomputed (all correct as printed)
−70 + 15 = −55; −70 + 10 = −60 (below threshold); −70 + 20 = −50 (above); practice A.5 −60 subthreshold. Refractory example: stimulus at t = 2 ms, second at 2.5 ms, 0.5 ms after onset, inside absolute refractory (about 2 ms from onset). 12 cranial pairs, 31 spinal pairs, only III, VII, IX, X parasympathetic: correct. Cranial table type split: sensory I, II, VIII; motor III, IV, VI, XI, XII; mixed V, VII, IX, X: matches the page. Topic 03/04 answers (letters) all re-derived and match.

## Not checked / notes
Figure content (drawn on the plates) not read beyond the captions: diagram agent. Superscript ions read from the page image (the dump scrambles them).
