# Biology 11 Ch 18 (Neural Control and Coordination): third expert review R3 (Opus)

Share: the whole chapter as it stands after fixers F1 and F2: `content/textbooks/bio-11-18/topics-0-2.ts`, `topics-3-4-extras-a-b.ts`, `extras-c-h.ts`; `lib/diagrams/biology-11-18.ts`; `lib/revise/keypoints-biology-11-18.ts`. Book pp. 1074-1134.
Method: my own full pass first (forward and reverse 4-gram word diff of every app string against the page-tagged text of pp. 1074-1135; every block read in full; page images of pp. 1081, 1083, 1090, 1098, 1101, 1107 (figure plates) and 1099, 1111, 1112, 1113, 1114, 1116, 1118, 1122 (tables); all six figures rendered from source with sucrase (no jest) and compared with the plates; every number, sum, answer key and "the chapter never covers" introduction rechecked against the topics as built; every line of new-text-F1.md and new-text-F2.md checked). Only then read review-R1.md and review-R2.md and marked each flag NEW or REPEAT. Nothing in the repo was edited; no tsc, jest or git.

Verdict up front: the transcription is faithful (no dropped, duplicated or miscopied sentence, number or table cell outside the declared liberties and the fixers' listed edits); every answer key and every sum is right; the six figures match the plates. What remains is (a) four new biology/consistency errors the two earlier reviews missed, the worst being a statement in Additional A that contradicts Additional D, (b) three slips introduced by the fixers' own wording, and (c) several places where a fix was applied to one copy of a claim but not to its twin elsewhere in the chapter.

## FLAGS (most serious first)

### 1. [NEW] A subthreshold stimulus "never" fires, contradicting temporal summation (Additional D)
- Where: `topics-3-4-extras-a-b.ts`, Additional A (topic index 5), part "Method", paragraph after the graded-potential bullets (block 9), and the topic's `kalam`; book p. 1112.
- Says now: "A subthreshold stimulus produces no impulse regardless of how many times it is applied." (the kalam is the same sentence).
- Wrong: repeated subthreshold stimuli arriving close together summate and can reach threshold. Additional D (Method, "Temporal summation: one input repeatedly") teaches exactly that, so the chapter contradicts itself, and the kalam puts the false sentence on the topic card.
- Fix [NEW] paragraph: "Only when the graded potential at the axon hillock reaches approximately −55 mV (the threshold) does the all-or-none action potential fire. A single subthreshold stimulus produces no impulse; repeated subthreshold stimuli fire one only if they arrive close enough together to add up to threshold (temporal summation, Additional topic D)."
- Fix kalam (a book sentence): "Only when the graded potential at the axon hillock reaches approximately −55 mV (the threshold) does the all-or-none action potential fire."
- Kind: biology error / internal contradiction. Source: book. Confidence: certain (the contradiction), likely (the physiology as worded for NEET).

### 2. [REPEAT, R1 flag 8 applied wrongly] Reflex arc "up to five components", CNS centre "absent in a monosynaptic arc"
- Where: `topics-3-4-extras-a-b.ts`, Topic 04, part "Key structures, definitions and terminology", block 10; key point topic 4 first Remember (`keypoints-biology-11-18.ts`, cite pp. 1105-1106) and its header comment; book p. 1105.
- Says now: "It has up to five components, in order: ... 3. CNS centre (interneuron): within the spinal cord (grey matter); processes and relays the signal (absent in a monosynaptic arc)." KP: "with up to five parts in order: ... CNS centre (an interneuron in the grey matter of the cord) ... A monosynaptic arc has no interneuron".
- Wrong: the fix confuses the centre with the interneuron. A monosynaptic arc still has five components; its centre is the single synapse in the grey matter, it only lacks an interneuron. As written, "absent" attaches to the whole item "CNS centre", which says a knee-jerk has no CNS centre. It also now contradicts the same topic's Practice 3 ("List the five components of a reflex arc in order"), the cheat sheet ("5 parts"), the Pro-Tip, the KP Exam shortcut ("the five parts"), and Fig. 18.6 (five numbered steps). NEET treats the arc as five components.
- Fix [NEW] Topic 04: "It has five components, in order:" and item 3: "<b>CNS centre:</b> within the spinal cord (grey matter), where the signal is passed from the sensory to the motor side, through one or more interneurons in a polysynaptic arc or by a single direct synapse in a monosynaptic arc."
- Fix [NEW] KP topic 4 Remember: "The reflex arc is the pathway the impulse follows, with five parts in order: receptor, afferent (sensory) neuron, CNS centre (the grey matter of the cord, with one or more interneurons except in a monosynaptic arc), efferent (motor) neuron, effector (muscle or gland)." (KP header line "the arc has 'up to five' parts, since a monosynaptic arc has no interneuron" -> "the arc has five parts; a monosynaptic arc has no interneuron at its centre".)
- Kind: biology error introduced by a fix. Source: ours. Confidence: likely.

### 3. [NEW] Eye and ear sent to "the sensory-reception section of NCERT" (removed in the rationalised book)
- Where: `extras-c-h.ts`, Additional H (topic 12), part "The Distribution", table row "Sense Organs (Eye & Ear)"; part "Gaps to Fill in Your Notes", item 2; KP topic 12 Remember ("study them from the sensory reception of the NCERT book"); H practice Q12 (an eye question); book pp. 1125, 1133.
- Says now: "They are not part of this chapter’s text, so study them from the sensory-reception section of NCERT." and "Study the sensory-reception section of NCERT and make a comparison table ...".
- Wrong: to my knowledge the rationalised NCERT Class 11 chapter (2023 onward) ends at the central neural system: "Reflex action and reflex arc" and "Sensory reception and processing" (eye, ear) were deleted, and the NMC NEET-UG syllabus for this unit lists neuron and nerves, CNS, PNS and visceral nervous system, and generation and conduction of the nerve impulse only. If so, the advice sends students to a section that no longer exists and to material outside the syllabus, and the "Highest volume" verdict describes old papers. This contradicts R2 flag 26 ("sensory reception is NCERT 18.5"), which reflects the pre-2023 book. The same check bears on Topic 04 (reflex arc) and on the preface's "covers the complete rationalised NCERT Class 11 chapter".
- Fix [NEW] H table cell: "<b>Highest volume</b> in past papers: rods vs cones, fovea/blind spot, cochlear chambers, organ of Corti, balance receptors. These appear as statement-type and match-the-column questions. They are not part of this chapter’s text, and the eye and ear section has been removed from the rationalised NCERT book: check the current NEET syllabus before spending time on them."
- Fix [NEW] Gaps item 2: "<b>Eye and ear are not covered in this chapter’s text.</b> They were removed from the rationalised NCERT chapter. If the current NEET syllabus still lists them, make a comparison table (structure, location, function, what is absent there) for rods vs cones, fovea vs blind spot, and the cochlear chambers."
- Fix [NEW] KP topic 12: "Eye and ear are not in this chapter’s text, nor in the rationalised NCERT chapter: check the current syllabus before studying them."
- Founder decision: verify the syllabus first (I worked from memory; no syllabus file is in the repo). If eye/ear and the reflex arc are out of the 2026 syllabus, decide whether H Q11/Q12 and Topic 04 stay (they are not wrong, only off-syllabus).
- Kind: misleading / exam usefulness. Source: book (kept by R2). Confidence: likely.

### 4. [NEW] Breathing called "partly under autonomic control"
- Where: `topics-3-4-extras-a-b.ts`, Topic 03, part "Concept intuition", Limiting conditions bullet 2 (block 7); book p. 1096.
- Says now: "“Involuntary” doesn’t mean “uncontrollable”: breathing is partly under autonomic control yet you can override it briefly."
- Wrong: breathing is driven by the respiratory centres of the medulla and pons through somatic motor neurons to skeletal muscles (diaphragm, intercostals). It is automatic, but it is not autonomic; the chapter's own definition (Topic 03) gives the ANS only smooth muscle, cardiac muscle and glands. A student can carry "breathing = autonomic" into an MCQ.
- Fix [NEW]: "“Involuntary” doesn’t mean “uncontrollable”: breathing runs automatically from centres in the brain stem, yet you can override it briefly. The categories describe the default mode."
- Kind: biology error. Source: book. Confidence: likely.

### 5. [NEW] Sympathetic–adrenal link called "the body’s main bridge" (the hypothalamus fix said the opposite)
- Where: `topics-3-4-extras-a-b.ts`, Topic 03, part "Key processes and mechanisms", "Link to the endocrine system" (block 28); book p. 1099.
- Says now: "This is the body’s main bridge from fast electrical control to slower, longer-lasting chemical control: the theme you will pick up in the next chapter on chemical coordination."
- Wrong: unsupported superlative; the hypothalamus–pituitary axis is the principal neural–endocrine link, and Topic 02 (after R1 flag 3) now calls the hypothalamus "a main point where electrical neural control hands over to chemical hormonal control". The two topics now name different "main" bridges.
- Fix [NEW]: "This is one of the bridges from fast electrical control to slower, longer-lasting chemical control (the hypothalamus and pituitary are the other): the theme you will pick up in the next chapter on chemical coordination."
- Kind: overgeneral / internal inconsistency. Source: book. Confidence: likely.

### 6. [NEW, introduced by F2] H Archetype 4 solution quotes stem wording that is no longer in the stem
- Where: `extras-c-h.ts`, Additional H, part "The Recurring Archetypes", worked representative 4 (block 16), second step; book p. 1128.
- Says now: stem "MRI shows the structure is dorsal, behind the pons and medulla, and below the cerebrum"; step: "“Dorsal, posterior to midbrain, below cerebrum” → cerebellum is the second-largest brain part ...".
- Wrong: F2 changed the stem but left the quoted cue in the solution, so the solution quotes words the student never read.
- Fix [NEW] step: "“Dorsal, behind the pons and medulla, below the cerebrum” → cerebellum is the second-largest brain part, dorsal and posterior, lying below the occipital cerebrum."
- Kind: transcription/consistency slip. Source: ours (F2). Confidence: certain.

### 7. [NEW, introduced by F2] "This local depolarisation" now follows a list that includes the IPSP
- Where: `topics-3-4-extras-a-b.ts`, Additional A, part "Method", block 8 (graded potential); book p. 1112.
- Says now: "... called a receptor potential (also called a generator potential) at a sensory receptor, and an EPSP or IPSP at a synapse. This local depolarisation:"
- Wrong: an IPSP is a hyperpolarisation (Additional D's table says so), so "this local depolarisation" no longer fits the sentence before it.
- Fix [NEW]: "... and an EPSP or IPSP at a synapse. This local change:"
- Kind: unclear/misleading. Source: ours (F2, from R2 flag 23). Confidence: certain.

### 8. [REPEAT, R1 flag 1 / R2 flag 20 fixed incompletely] Limbic system: the solutions still say its "components are" the hypothalamus, amygdala and hippocampus
- Where: (a) `topics-0-2.ts`, Topic 02, Worked example 4 (block 32), reasoning; (b) `extras-c-h.ts`, Additional H, practice Q7 solution; book pp. 1092, 1131.
- Says now: (a) "R is true: its components are indeed the hypothalamus, amygdala, and hippocampus. (NCERT words the limbic system as ... working with the hypothalamus; ...)" (the sentence and its own bracket disagree); R still reads "is composed of". (b) R now "includes", but the solution says "R is true: its components are the hypothalamus, amygdala, and hippocampus."
- Wrong: the key-structures bullet (fixed) says the hypothalamus works with the limbic system; both solutions still teach it as a closed list of components, and the two copies of the same question word R differently ("is composed of" vs "includes").
- Fix [NEW] (a) reasoning: "<b>R is taken as true</b>: the hypothalamus, amygdala and hippocampus are the usual shorthand list (NCERT words the limbic system as the inner parts of the cerebral hemispheres with the amygdala, hippocampus and related structures, working with the hypothalamus)." and R, if the founder allows a stem change: "The limbic system includes the hypothalamus, amygdala, and hippocampus."
- Fix [NEW] (b) solution: "R is taken as true: the hypothalamus, amygdala and hippocampus are the usual shorthand list, though NCERT has the hypothalamus working with the limbic system rather than inside it."
- Kind: unclear / inconsistent. Source: book + incomplete fix. Confidence: likely.

### 9. [REPEAT, R1 flag 8 fixed in one place only] "always" produces the same response
- Where: `topics-3-4-extras-a-b.ts`, Topic 04, part "Key processes", 3.1 closing paragraph (block 21); `extras-c-h.ts`, H practice Q10 solution; book pp. 1106, 1132.
- Says now: "... guaranteeing that a stimulus always produces the correct, stereotyped response." and "the same stimulus always produces the same response."
- Wrong: Topic 04's Limiting conditions (fixed) now say "usually", and 3.4 says higher centres modulate reflexes; these two copies still say "always".
- Fix [NEW] Topic 04: "... so that a stimulus produces the correct, stereotyped response." H Q10: "the same stimulus usually produces the same response."
- Kind: overgeneral / inconsistency. Source: book. Confidence: likely.

### 10. [NEW] Pons "relays signals between the two halves of the cerebellum"
- Where: `topics-0-2.ts`, Topic 02, part "Key processes", 3.1 Pons bullet (block 21); book p. 1089.
- Says now: "Pons: helps regulate breathing rhythm and relays signals between the two halves of the cerebellum."
- Wrong: the pons's transverse fibres relay signals from the cerebral cortex to the cerebellum (cortico-ponto-cerebellar route); the "connects the two cerebellar hemispheres" description is an old simplification. NCERT says only that the pons has fibre tracts interconnecting regions of the brain (as the fixed key-structures bullet now says).
- Fix [NEW]: "Pons: helps regulate breathing rhythm and relays signals between the cerebrum and the cerebellum."
- Kind: biology error (minor). Source: book. Confidence: possible.

### 11. [REPEAT, R2 flag 25 fixed in C only] G Q1: pain fibres cross "at the level of entry"
- Where: `extras-c-h.ts`, Additional G, practice Q1 answer; book p. 1124.
- Says now: "Pain (spinothalamic tract) crosses at the level of entry into the spinal cord."
- Fix [NEW]: "Pain (spinothalamic tract) crosses within a segment or two of its entry into the spinal cord." (matches the C table and KP topic 11).
- Kind: inconsistency. Source: book. Confidence: certain.

### 12. [REPEAT, R2 flag 2 logic not carried to G] G Q2: Na+ channels "in the inactivated state" throughout the absolute refractory period
- Where: `extras-c-h.ts`, Additional G, practice Q2 answer; book p. 1124.
- Says now: "During the absolute refractory period, voltage-gated Na+ channels are in the inactivated state: they cannot reopen ..."
- Wrong: A's table and paragraph (fixed) say the channels are open and then inactivated in this window; early in it they are open, not inactivated.
- Fix [NEW]: "During the absolute refractory period the voltage-gated Na<sup>+</sup> channels are first open and then inactivated; inactivated channels cannot reopen no matter how strong the depolarising stimulus. Because no further Na<sup>+</sup> can enter, a new depolarisation cannot start. The membrane is physically incapable of firing."
- Kind: inconsistency. Source: book. Confidence: likely.

### 13. [NEW] Assertion–reason list still offers "Both A and R are false" as a variant
- Where: `extras-c-h.ts`, Additional H, archetype 3 "What it looks like", option (d) line; book p. 1127.
- Says now: "(d) A is false, but R is true. (Some papers print “Both A and R are false” here.)"
- Wrong: the house rule for the whole build is that the fourth option is "A false, R true", never "both false" (the app already changed H Q7's printed "both false"). The bracket reintroduces the variant the rule removes; NEET's current A–R format has "A false, R true" as the fourth option.
- Fix [NEW]: delete the bracket, leaving "(d) A is false, but R is true."
- Kind: notation / exam format. Source: book. Confidence: likely.

### 14. [NEW] Knee-jerk "how many synapses in total": 1
- Where: `extras-c-h.ts`, Additional E, practice Q3; KP topic 9 first Remember `why` ("One synapse in the whole knee-jerk arc"); book p. 1121.
- Says now: "The knee-jerk reflex involves how many synapses in total? ... (b): one."
- Wrong: the central reflex path is monosynaptic, but "in total" also counts the neuromuscular junction, and the reciprocal relaxation of the hamstrings uses an inhibitory interneuron (Additional E itself teaches reciprocal innervation).
- Fix [NEW] stem: "In the knee-jerk reflex arc, how many synapses lie between the sensory neuron and the motor neuron in the spinal cord?" KP `why` [NEW]: "One synapse in the cord: the spindle’s sensory neuron meets the motor neuron directly."
- Kind: overgeneral. Source: book. Confidence: possible.

### 15. [NEW] B Example B.1 names the facial nerve in the question
- Where: `topics-3-4-extras-a-b.ts`, Additional B, Worked example 1 (block 10); book p. 1114.
- Says now: "A patient with damage to the facial nerve cannot close the eyelid properly, ... Which nerve is affected, and what is its type?"
- Wrong: the stem gives the answer away.
- Fix [NEW]: "A patient cannot close the eyelid properly, has loss of taste on the anterior two-thirds of the tongue, and produces less saliva. Which cranial nerve is damaged, and what is its type?"
- Kind: unclear (question gives its answer). Source: book. Confidence: certain.

### 16. [REPEAT, R2 flag 9 fixed in the answer only] B Practice 5 still asks for a "purely sensory" nerve
- Where: `topics-3-4-extras-a-b.ts`, Additional B, practice 5 question; book p. 1115.
- Says now: "Which cranial nerve is purely sensory?" (table now: "Mainly sensory"; answer now: "is a sensory nerve").
- Fix [NEW]: "Which of these cranial nerves is a sensory nerve?"
- Kind: inconsistency. Source: book. Confidence: likely.

### 17. [REPEAT, R2 flag 18 fix reads oddly] G introduction "after completing each additional topic"
- Where: `extras-c-h.ts`, Additional G, Introduction; book p. 1123.
- Says now: "The following questions synthesise across all the additional topics. Attempt them after completing each additional topic."
- Wrong: questions that draw on all of A to F cannot be attempted after each one.
- Fix [NEW]: "Attempt them after completing Additional topics A to F."
- Kind: unclear. Source: ours (F2). Confidence: certain.

### 18. [NEW] H practice Q1 ratio written with a plain colon
- Where: `extras-c-h.ts`, Additional H, practice Q1 options (a) to (d); book p. 1129.
- Says now: "2 Na+ out : 2 K+ in" (and the three others with " : ").
- Fix: use the ratio sign, as everywhere else in the chapter: "2 Na<sup>+</sup> out ∶ 2 K<sup>+</sup> in", "3 Na<sup>+</sup> out ∶ 2 K<sup>+</sup> in", "2 Na<sup>+</sup> out ∶ 3 K<sup>+</sup> in", "3 K<sup>+</sup> out ∶ 2 Na<sup>+</sup> in".
- Kind: notation. Source: transcription. Confidence: certain.

### 19. [NEW] Topic 02 hindbrain MCQ: the nudge on (b) explains (d) only
- Where: `topics-0-2.ts`, Topic 02, Crack the MCQ Q2 (block 37), options (b) and (d); book p. 1093.
- Says now (shared nudge): "(b) and (d) mix divisions: corpora quadrigemina and thalamus belong to midbrain and forebrain respectively." Option (b) is "midbrain, pons, cerebrum": it has neither structure named.
- Fix [NEW] (b): "<b>(b)</b> mixes divisions: the midbrain is a division of its own and the cerebrum is forebrain." (d): "<b>(d)</b> mixes divisions: the corpora quadrigemina are midbrain and the thalamus is forebrain."
- Kind: unclear (nudge). Source: book. Confidence: certain.

### 20. [NEW] Topic 01 MCQ 1: nudge on (d) "impermeable to both"
- Where: `topics-0-2.ts`, Topic 01, Crack the MCQ Q1 (block 45), shared (c)/(d) nudge; book p. 1085.
- Says now: "(c) and (d) would collapse the gradient and make a resting potential impossible."
- Wrong for (d): a membrane impermeable to both ions would keep the gradient (the pump still runs); what it loses is the K+ leak that makes the potential.
- Fix [NEW] (d): "<b>(d)</b> would leave no K<sup>+</sup> leak, and the leak is what sets the resting potential." Keep the shared text for (c).
- Kind: unclear (nudge). Source: book. Confidence: possible.

### 21. [NEW, cosmetic] Two brackets in a row in Topic 01 Exam Relevance; KP topic 12 mistake opens with the label
- Where: `topics-0-2.ts`, Topic 01, Concept intuition block 1: "... resting/action potential (often as assertion–reason) (the book’s estimate from past papers, not official figures)." KP topic 12 Common mistakes answer opens "The book’s estimate from past papers, not official figures. Motor nerves carrying ...".
- Fix [NEW] Topic 01: "... and the resting/action potential, often as assertion–reason (the book’s estimate from past papers, not official figures)." KP: move the label to the end: "... saltatory conduction is the fast one. (Which options recur is the book’s estimate from past papers, not official figures.)"
- Kind: unclear (cosmetic). Source: ours. Confidence: certain.

## Earlier flags I believe were applied wrongly or incompletely
- R1 flag 8 (reflex arc "up to five", "(absent in a monosynaptic arc)"): applied wrongly; see my flag 2.
- R1 flag 1 / R2 flag 20 (limbic): the definition was fixed, but both worked solutions still say "its components are"; see flag 8.
- R1 flag 8 ("every time"): fixed in the Limiting conditions only; see flag 9.
- R2 flag 23 (graded potential naming): the new wording made "This local depolarisation" wrong; see flag 7.
- R2 flag 25 ("crosses immediately"): fixed in C, not in G Q1; see flag 11.
- R2 flag 2 (open then inactivated): fixed in A, not in G Q2 (F2 left it on purpose); see flag 12.
- R2 flag 9 ("only sensory"): the stem of B Practice 5 still says "purely"; see flag 16.
- R2 flag 18 (G introduction): "each additional topic" is illogical for a cross-topic set; see flag 17.
- F2's H archetype 4 stem edit (from R2's writer-3 ruling) left the solution's quotation unchanged; see flag 6.
- R2 flag 26 (eye and ear in NCERT 18.5): I believe the premise is out of date (rationalised NCERT); see flag 3.
- Checked and agreed (not wrong): R2 flag 2's new absolute-refractory wording ("about 2 ms, to the end of repolarisation") matches standard physiology texts (the absolute period overlaps almost the whole spike) and the A table timings (1 ms + 1 ms), and Example A.1 (0.5 ms after onset) stays inside it. R1 flag 10 (gap widths dropped) is fine. All other F1/F2 [NEW] wordings read correctly, plainly and without overclaiming.

## Counts verified
- Blocks per topic (from the built data): T00 4 parts, 9 p; T01 8 parts, 1 table, 2 figs, 4 ex, 5 practice, 4 MCQ, 4 pitfalls, 1 pro-tip, cheat sheet; T02 8 parts, 1 table, 1 fig, 4/5/4/4/1; T03 8 parts, 3 tables, 2 figs, 4/5/4/4/1; T04 8 parts, 1 fig, 4/5/4/5/1; A 2 tables, 2 ex, 5 practice; B 2 tables, 2 ex, 5; C 1 table, 2 ex, 5; D 2 tables, 2 ex, 5; E 1 table, 2 ex, 5; F 1 table, 2 ex, 5; G 5 practice; H 2 tables, 4 worked representatives, 12 practice. All equal the book.
- Answer keys re-derived, all correct and single-correct: T01 ex2 (b), ex3 A-3 B-1 C-2, ex4 (c), practice (c),(c),(a); MCQ b,b,b,c. T02 ex2 (c), ex3 A-2 B-4 C-1 D-3, ex4 (b), practice (b),(c),(c); MCQ b,c,b,b. T03 ex2 (b), ex3 A-3 B-4 C-1 D-2, ex4 (a), practice (c),(b),(a); MCQ b,a,b,b. T04 ex2 (b), ex3 A-2 B-1 C-4 D-3, ex4 (a), practice (b),(c),(a); MCQ all b. A (a),(b); B (d), A-2 B-1 C-3, (b), (c); C (b),(c),(a); D (c),(b),(c), D.2 (a); E (b),(b),(b); F (c),(c), A-2 B-3 C-1, (b); H archetypes (b),(a),(a),(c); H Q1-Q12 b,c,c,b,c,b,b,a,a,c,c,c.
- Numbers recomputed: −70 mV, +30 mV, 3 ∶ 2; threshold −70 + 15 = −55; −70 + 10 = −60 (no AP); −70 + 20 = −50 (AP); −70 + 6 = −64; 3 × 6 = 18, −70 + 18 = −52 (AP); 2 × (+5) + (−8) = +2, −70 + 2 = −68 (no AP); waveform 1 + 1 = 2 ms absolute period, stimulus at t = 2 ms and 2.5 ms (0.5 ms after onset, inside it); 12 cranial = 3 sensory + 5 motor + 4 mixed (I, II, VIII; III, IV, VI, XI, XII; V, VII, IX, X); 31 spinal pairs; meninges dura, arachnoid, pia outside in; anterior <frac>2/3</frac> and posterior <frac>1/3</frac> stacked. All correct.
- Introductions of Additional topics checked against Topics 00-04 as built: A (no timings, no numerical threshold, one-line refractory mention: true), B (12 pairs, only the vagus named: true), C (ascending tracts and thalamus relay, no named pathways: true), D (net effect stated, summation not named; ACh, noradrenaline, adrenaline, GABA given: true), E (opposing muscle relaxed, no spindle, no "reciprocal innervation": true), F (no disease treated in detail: true; "barely mentions" fair). F "Why these link": true as reworded.
- Notation: only <i>Hydra</i> italic in the text; no em dash in any student string; ions with real superscripts; fractions stacked; t plain; one ratio slip (flag 18).
- Key points: 39 points (topic 0: 3; 1-4: 5 each; 5-11: 2 each; 12: 2); every q/a/why checked against the chapter as it stands; page cites checked; 7 `say` lines as the header now says. Disagreements with the text: flags 2, 3, 14, 21 only.

## Figures checked (rendered from source with sucrase, Mac stand-in fonts; compared with the plates)
- Fig 18.1 (plate p. 1081, caption p. 1080): five dendrites, cyton with nucleus and Nissl's granules, three myelin stretches with Schwann cells, two nodes, three terminals with knobs, impulse arrow away from the cell body. Correct.
- Fig 18.2 (p. 1083 / 1082): title "Chemical Synapse", Ca<sup>2+</sup> with a true superscript (the errata gap is fixed), five vesicles, four transmitter dots to four receptors, EPSP rising and IPSP falling. Correct.
- Fig 18.3 (p. 1090 / 1089): all fifteen names, meninges dura, arachnoid, pia from outside in, corpus callosum above thalamus and hypothalamus, corpora quadrigemina above the aqueduct. Correct; schematic as in the book (Midbrain/Aqueduct/Pons leaders close together, no pons bulge: cosmetic).
- Fig 18.4 (p. 1098 / 1097): eleven boxes, ten joins, three notes, two dashed frames. Correct.
- Fig 18.5 (p. 1101 / 1100): two cases; four effects each with the right arrows (pupil, bronchi, heart rate, digestion). Correct.
- Fig 18.6 (p. 1107 / 1106): title, steps 1 to 5 in order, dorsal root and ganglion, interneuron, ventral root, grey and white matter, central canal, dashed branch to the brain. Correct; cosmetic only: the dashed "Informed afterwards" line starts at the cord's outline rather than inside the grey matter as on the plate.
- Pages with no drawing: all other pages of pp. 1074-1134 (text layer and the table pages I rendered show tables and rules only).

## Could not check
- The app's on-device rendering (iOS or Android) of these files; the jest diagram dump was not run (instruction), so the SVGs were built outside jest with Mac stand-in fonts.
- The NCERT text and the current NMC NEET syllabus are not in the repo: flag 3 (and NCERT wordings in flags 2, 8, 10) rest on my knowledge and should be verified before the store build.
