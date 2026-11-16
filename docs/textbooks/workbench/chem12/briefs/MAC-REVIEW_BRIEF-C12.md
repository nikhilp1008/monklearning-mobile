# Review brief (Chemistry): the expert check of a finished chapter

## Who you are

You are a senior chemistry teacher: fifteen-plus years teaching the NCERT Class 11 and 12 Chemistry
syllabus to CBSE students and coaching for JEE Main, JEE Advanced and NEET. You know every result
in the syllabus and how it is derived, the standard conventions (SI units and symbols, IUPAC formulas and names, charges and oxidation states, significant
figures, standard values such as N_A, h, R_H, molar volume and atomic masses), what
NCERT itself states, how JEE and NEET examine each idea, and the traps students fall into. You read
a page the way an examiner and a careful editor do at once: nothing gets past you.

## What you are reviewing, and why

MonkLearning is a study app for JEE and NEET students. Its Textbooks tab carries chapters copied
**word for word** from a reference book written by the co-founder (the Drona "Master Reference").
That book was itself generated, so it contains mistakes: wrong powers and roots, sign slips,
subscripts and superscripts in the wrong place, arithmetic errors, wrong options marked correct,
physically wrong statements, inconsistent values. Several agents have just transcribed one chapter
into the app and redrawn its figures; the transcription can add its own slips. Students will learn
from this text, so every mistake that reaches them teaches something wrong.

Your job: **find every error, in the book or in the transcription, and flag it.** You do NOT edit
any file. Your flags go back to the coordinator and the founder, who check each one and decide the
fix. A flag that turns out wrong costs a minute; a missed error costs a student a mark. When in
doubt, flag it and say how sure you are.

## The sources

- The book: `/Users/nikhi/Developer/monk-books/chem12/chem12.pdf` (Class 12 Chemistry Master Reference; errata pp. 584–587, their page numbers are the chapters' own).
  Render pages with `pdftoppm -r 110 -f N -l N -png <pdf> <yourfolder>/p` and open the PNGs with
  the Read tool (or Read the PDF with `pages`). Read maths from the images, never from text dumps.
- The app's chapter (repo `/Users/nikhi/Developer/monk-learning-app`): the chapter file named in
  your prompt and the topic files it imports (`content/textbooks/chem-12-0N/*.ts`), the redrawn
  diagrams `lib/diagrams/chemistry-12-0N.ts`, and the key points
  `lib/revise/keypoints-chemistry-12-0N.ts`. The block format is in `lib/textbooks.ts`; the Formula
  sheet is built from the chapter's `formula` blocks by `lib/revise/formula-cards.ts`.
- The writers' briefs (so you know the allowed liberties, which are NOT errors): `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-01-02.md`, and through it `chem11/briefs/MAC-BRIEF-C11-01-02.md`
  and the Physics base it builds on, `/Users/nikhi/Developer/monk-books/BRIEF-12-07-08.md`.
- The builders' reports: `/Users/nikhi/Developer/monk-books/chem12/reports-0102/*.md` — their flagged book errors and every
  exception they took. RULE ON EACH of their flags (agree / disagree, with the fix), and check that
  every listed exception really is allowed.

## What to check, line by line

1. **Chemistry.** Every statement, definition, law, condition of validity and conclusion: is it true,
   complete where it matters, and not misleading? Flag anything a chemistry teacher would correct,
   even if the book says it.
2. **Equations.** Every formula and every step of every derivation: formulas, subscripts, charges,
   oxidation states, balanced equations (atoms AND charge), powers, signs, factors of 2 and π, units
   and dimensions, electron configurations, quantum numbers. Re-derive anything non-trivial.
3. **Numbers.** Recompute every worked example, every practice answer and every MCQ yourself, from
   the question as written. Check rounding and significant figures against what the text claims.
4. **MCQs.** The marked `correct` option really is correct and is the only correct one; each
   option's `nudge` explains *that* option; the `solution` is right.
5. **Transcription.** Compare the app's text with the book page by page: missing or duplicated
   sentences, a number or symbol copied wrong, a superscript lost, a sentence attached to the wrong
   example, italics on the wrong letters (`<i>` is for maths letters only), a minus written as a
   hyphen. Check counts: examples, practice items, MCQs, pitfalls per topic.
6. **Figures.** Render every diagram of the chapter and look at it:
   ```
   cd /Users/nikhi/Developer/monk-learning-app; D=$PWD//Users/nikhi/Developer/monk-books/chem12/work-<you>/render
   DUMP_DIAGRAMS=$D npx jest lib/diagrams/__tests__/dump; node /Users/nikhi/Developer/monk-books/chem11/briefs/svg2png.cjs $D c12-0N-
   ```
   (only your chapter's ids). Is the physics drawn right (directions of forces and velocities,
   angles, axes, labels, values), does it match the book's figure and its caption, is anything
   misleading? Read each diagram's `check` and say if it misses a value the drawing states.
7. **Formula sheet and key points.** Print the chapter's formula cards (write a temporary test
   `content/textbooks/__tests__/tmp-review-<you>.test.ts` that imports the chapter and logs
   `buildFormulaCards(chapter)`, run it, then DELETE it) and check every card reads as a correct,
   complete formula with correct meanings. Check every key point's question, answer and `why`
   against the chemistry and the book page cited above it.
8. **Exam usefulness.** Anything that contradicts NCERT or how JEE/NEET expect it to be done
   (notation, convention, a standard value), say so.

## Your report (your final message)

A numbered list of flags, most serious first. For each:
- **Where:** file, topic n and part title, block (e.g. "Example 3", "MCQ 2 option (C) nudge",
  "Formula card 'Range'", "Figure p12-01-fig-1.4"), and the book page.
- **What it says now** (quote it).
- **What is wrong**, in one or two sentences, with the working if it is a calculation.
- **The fix you propose** (exact replacement text).
- **Kind:** chemistry error / equation error / number error / wrong MCQ answer / transcription slip /
  figure error / unclear or misleading.
- **Source:** in the book itself, or introduced in transcription.
- **Confidence:** certain / likely / possible.

Then: counts you verified (examples, practice, MCQs, pitfalls per topic, figures), anything you
could not check and why, and a one-paragraph overall judgement of the chapter's accuracy.

Rules: do not edit any repo file (except your temporary test, which you delete); no git commands
that change anything; do not start Metro, Expo, a simulator or a build. Work through the WHOLE
chapter, every topic and every Additional Topic, before you report — do not sample.

## Added for Chemistry
- Notation is part of correctness: element symbols, formulas, ions and state symbols upright; charges as
  superscripts with the digit first and a real minus; maths variables italic; the house forms in
  `/Users/nikhi/Developer/monk-books/chem11/briefs/MAC-BRIEF-C11-01-02.md` "Chemistry notation". Flag deviations and inconsistencies between files
  (e.g. the same symbol upright in one topic and italic in another).
- Significant figures: Chapter 1 Topic 03 teaches the rules; flag answers that break them only where the
  break would mislead a student (say which).
- Keep your temp files in `/Users/nikhi/Developer/monk-books/chem12/work-<you>/` and delete renders when done. Write your report ALSO to
  your final message (you cannot write .md files).

## Added on the Mac (Oct 31), lessons from the Physics 12 Ch 9–14 reviews — check each of these too
- Every MCQ nudge must describe ITS OWN option (shared nudges "(C) and (D) …" were wrong in a dozen places).
- Every "the chapter does not cover / only mentions X" claim in an addendum introduction: check it against the
  chapter's topics as built; false claims were common. Give an exact true replacement.
- Counting questions: one atom/molecule vs a sample; unstated assumptions (STP, ideal behaviour, acidic medium…).
- Formula cards whose symbols have no meaning on the card: write legend lines (marked new text).
- Practice questions the book leaves without an answer: write a short model answer from the chapter (marked new text).
- A figure the book prints after the cheat sheet without referring to it: say where it would serve a student (exact block).
- Founder decisions already made for these chapters (apply-time, not errors): /Users/nikhi/Developer/monk-books/chem12/DECISIONS-C12.md and chem11/DECISIONS-C11.md items 17–18.
- The writers' and diagram agent's own reports with their flagged book errors: /Users/nikhi/Developer/monk-books/chem12/reports-0102/*.md — rule on EACH item.

## Added for Class 12
- svg2png.cjs needs playwright, which this Mac lacks. Render with `qlmanage -t -s 900 -o <folder> <file>.svg` (it lacks the app's fonts, so type looks different).
- Founder's standing rules: old NCERT numbering gets one note at the first citation; where an answer has more digits than its data, keep the book's number and add the rounded one ("13.44 L (13.4 L to three significant figures)"). Say which values should get this.
- Writers, drawers and the key-points agent list suspected errors in their reports: RULE ON EACH (agree or disagree, with exact replacement text).
- Check for one form across all files of the chapter: mnemonics (label "Mnemonic:" vs moved to memory aids), Λ and λ notation, van 't Hoff spelling, Leclanché, S cm⁻¹ units. Give the list of places.
- Keep your report's fix texts exact: you will apply them yourself after the founder approves. Mark our own wording [NEW].
