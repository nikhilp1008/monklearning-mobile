# Writer 1, Biology 11 Chapter 15: Topics 01 and 02 (pp. 887 to 904)
File: content/textbooks/bio-11-15/topics-1-2.ts

## Boundaries (confirmed on page images)
p. 887: contents box not copied, Topic 01 starts below it. Topic 01 pp. 887-896, Topic 02 pp. 897-904, p. 905 opens Sub-topic 03. No difference from the brief.

## Counts
- Topic 01 "Blood: Components & Coagulation": 8 parts, 4 ex, 5 practice, 4 MCQ, 4 pitfalls, 1 pro-tip, cheat sheet 7 rows, 2 tables, figs 15.1, 15.2, 15.3.
- Topic 02 "Lymph & the Human Circulatory System": 8 parts, 4 ex, 5 practice, 4 MCQ, 4 pitfalls, 1 pro-tip, cheat sheet 8 rows, 2 tables (valves, comparative), figs 15.4, 15.5.
- The book's MCQ and example options are lettered (a) to (d) here (not 1-4): kept as bold (a) in q and nudges, correct index from the printed letter.

## Figures
Seen: 15.1 (caption p. 889, plate p. 890), 15.2 (p. 891 / 892), 15.3 (p. 893 / 894), 15.4 (p. 899 / 900), 15.5 (p. 901 / 902). Ids b11-15-fig-15.1 to 15.5 used. No raster images (pdfimages empty); no unnumbered drawing on pp. 887-904 (the arrows with a label over them on p. 891 and the chains on p. 899 are typeset text). Fig 15.4 plate has no "Pulmonary valve" label (known; the diagram agent must add it).

## False "the chapter never covers X" claims
None in my share (the shared Additional introduction is writer 2's).

## Test and lint
eslint clean. jest (narrow): book-rules passes; book-chapters: 2 failures, neither mine: undrawn fig ids 15.1-15.5, and the Additional topic letters (other writers' stubs). "the text of every book chapter" passes.

## Exceptions taken
- All em dashes replaced (colon, comma or brackets); none changes sense. Em-dash headings: "Blood Coagulation (clotting): the repair cascade", "Blood Groups: the ABO and Rh systems", "The Heart: chambers", "The conduction pathway: how a heartbeat spreads", "Double Circulation: blood's two loops"; table titles "Valves (4): one-way doors", "Comparative circulation: an evolutionary ladder". "Solution. No: trap reversed."
- Placeholder cells "—" (valve Cusps for pulmonary and aortic, p. 898; Heart for arthropods and molluscs, p. 901) written as an en dash "–".
- Stacked arrow labels (p. 891: prothrombinase over, Ca2+ under; thrombin over) written inline: "Prothrombin → Thrombin [over the arrow: prothrombinase; under it: Ca2+]" and "Fibrinogen (soluble) → Fibrin (insoluble) [over the arrow: thrombin]". Our wording for the bracket.
- WBC table: the Class cell is printed once per group; repeated on each row. Bold in table cells dropped (plain text cells).
- Example "Q." and "Example N, [tag]" labels dropped (tag = bracket text); "Solution." kept as bold lead; examples 1, 2, 4 (both topics) have no separate answer line so ans '' (Topic 01 Ex 3 ans = "So plasma ≈ 2.75 L and formed elements ≈ 2.25 L.").
- MCQ solution holds the text after "Answer: (x)" (e.g. "Spleen. RBCs ... destroyed here."). Right answers the book never explains (solution ''): Topic 01 Q3 (heparin), Topic 02 Q2 had only the answer name used, Topic 02 Q3 (lymph). Grouped nudges "(c)/(d)" and "(b)/(d)" given to both options.
- Cheat sheet: the "Mnemonics" bullet is a row (it is a bullet inside the box, not under it); aids empty. Bold in "f" dropped; lines without a colon split at the first sentence (Topic 01 row 1) or at the topic word.
- "this subtopic" (p. 904) -> "this topic". "Sub-topic" headings not copied. Exam statements: labelled once each ("the book's estimate from past papers, not official figures") after the first NEET claim, p. 887 ("1-2 ... almost every year") and p. 897 ("2-3 questions"); the later "appears almost every year" (p. 897) is covered by the same sentence label only; unlabelled superlatives left: "A perennial favourite", "classic high-difficulty NEET traps" (p. 887), "One of the highest-yield areas" (p. 897).
- Italics dropped for emphasis; "hydrops fetalis" (a clinical term, not a species) set upright. "autorhythmic" printed "auto-rhythmic" across a line break, joined. Line-break hyphenations joined.
- Genotype/maths: "V plasma" written V<sub>plasma</sub>, "V formed elements" V<sub>formed elements</sub>, units with no-break spaces, "µm" as "μm".
- kalam T01 uses commas for the book's two dashes ("Blood is a connective tissue, the only one that flows, made of ...").

## Recomputed
Ex 3 (Topic 01): 0.55 x 5.0 = 2.75 L; 5.0 - 2.75 = 2.25 L = 45% of 5.0: correct. Differential: 60-65 + 20-25 + 6-8 + 2-3 + 0.5-1 is consistent (about 100%). No other number needs computing. Abundance order in cheat sheet and MCQ 2 agrees with the table.

## Suspected book errors / overgeneral claims (page, quote, correction)
1. p. 887 "Blood is a connective tissue, the only one that flows": lymph also flows (fluid connective tissue); say "the only one that is fluid and flows in vessels" or drop "the only".
2. p. 889 and p. 891: "thromboplastin (thrombokinase)" then "prothrombinase (thrombokinase activity)": thrombokinase is used for two different things; NCERT's wording keeps thromboplastin and the activator separate.
3. p. 891 "heparin ... by inhibiting the conversion of prothrombin to thrombin" (also MCQ 3 p. 895, cheat sheet, fig 15.2): heparin acts through antithrombin, inactivating thrombin and factor Xa; also made by basophils and mast cells. Keep NCERT wording, add nuance.
4. p. 891 "In Haemophilia A, factor VIII is absent": usually deficient or defective, not always absent.
5. p. 888 and p. 895 Ex 4: serum is "plasma minus the clotting factors" / "its fibrinogen and other clotting factors are spent": fibrinogen, prothrombin, V, VIII, XIII are consumed but some factors remain in serum.
6. p. 893 Ex 2: patient is O-negative but the answer says "can only receive O blood": should say O-negative (Rh also matters).
7. p. 896 pro-tip "antibodies are always the complement of what the RBC carries": true for the natural ABO antibodies, not for anti-D (made only after exposure).
8. p. 896 "The single most common error", p. 904 "The single biggest error in this topic": unsupported superlatives.
9. p. 897 "No cell in your body sits directly in blood": blood cells themselves, and endothelial cells, do; say "No tissue cell".
10. p. 897 "Double circulation is complete only in birds and mammals" contradicts p. 901 table, p. 904 pitfall 4 and the cheat sheet (crocodiles 4-chambered, complete). Also Practice 4 answer p. 903 lists birds, mammals only.
11. p. 898 "Arteries ... All carry oxygenated blood except the pulmonary artery", p. 903 practice 3 "the only artery ... the only vein", MCQ 2 and cheat sheet: the umbilical arteries carry deoxygenated blood and the umbilical vein oxygenated blood (foetus); "NCERT-level" only. Also p. 904 pitfall "Veins have no valves. Wrong": not all veins have valves (venae cavae, venules do not).
12. p. 898 "cardiac muscle, a tissue found nowhere else": cardiac muscle is also found in the walls of the great veins near the heart (minor).
13. p. 899 "oxygenated and deoxygenated streams never mix" is true of complete double circulation only (the page itself says amphibians mix).
14. p. 901 "open ... arthropods and molluscs": cephalopod molluscs have closed circulation; "flow is sluggish and poorly regulated" and "closed plan is the more advanced" are value judgements, overgeneral.
15. p. 904 "alphabetical-ish chain S -> A -> His -> Purkinje": not alphabetical.
16. SA node rate: 70-75 per minute and 72 per minute in main text (pp. 898, 903, 904): the NCERT value; Additional topics (D, pp. 906, 908, 924) give a different intrinsic rate (writers 2 and 3 to record).
17. Errata check: p. 891 reads "Prothrombinase, by contrast, promotes clotting"; no "antiheparin" in the text on my pages (fig 15.2 and cheat sheet carry no such word on pp. 892, 896).

## Could not check
Nothing blocked. Fig 15.2 flow direction and labels are the diagram agent's job.
