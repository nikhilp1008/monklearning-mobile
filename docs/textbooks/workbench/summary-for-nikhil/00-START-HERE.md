# Biology 11 + 12 and Maths 11 Ch 0: what Nikhil needs to sign off

Nothing here is pushed beyond what is already on main (e9f191b). The reviewed, fixed state sits on branch `biology-textbooks` (c9faab7 plus the Android fixes below). No push until you sign off.

## What was done for your list
1. **New-text list per chapter**: `part-1.md` to `part-6.md` (first round, about 455 places of new wording and the 15 layout decisions) and `r3-part-1.md` to `r3-part-5.md` (changes made by the third review). Layout decisions are also in `../bio11/DECISIONS-B11.md`, `../bio12/DECISIONS-B12.md`, `../math11/DECISIONS-M11.md`.
2. **Third review on Opus**: done for all 32 Biology chapters and Maths 11 Ch 0; flags applied; reports saved per chapter as `review-R3.md` and `new-text-R3.md`.
3. **Android check** (emulator, Pixel 8, Android 16): `../bio-android-check-2026-11-17.md`. Every Biology figure and case (255 of 255), all 23 Formula sheet cards, all 27 sex-symbol pages, all 20 underlined-G pages, regression pages from Maths and Chemistry. No blocking problem; the shared-reader change for the sex symbols broke nothing.
4. **Shelf names vs live catalogue**: checked against the live chapter list; re-check once more just before a store build.
5. **Helper reports** (figures and Key points) saved with the writers' and reviewers' reports.

## Fixed after the Android check
- Pedigree legend now reads "square = male, circle = female" (the two symbols drew at different sizes).
- Biology 11 Ch 15 practice card: "L/min" and "/min" no longer split across lines (written as "litres per minute", "beats per minute").
- Biology 11 Ch 16 cheat sheet: the stray bold line now has the label "Excretion type".
- Biology 11 Ch 19 gland tables: the long repeated column label is now "Disorder"; the "excess, then deficiency" note moved into the table title.
- Formula cards (Biology 11 Ch 12, Biology 12 Ch 8): enzyme and organism names no longer sit as tiny raised text over the arrow; they are in the card's note line. Arrows and the minus in the BOD formula are kept on the same line as their neighbours. Enzyme and organism names now sit in each card's legend, and the BOD card is `BOD = (DOi − DOf) × D` with a legend. Re-shot on Android: all six cards pass.
- Student-visible authoring notes ("[New wording]" etc.) removed from Ch 17 and Ch 18. These are still visible on main until this branch is pushed.

## Fixed after the card re-shoot
- Biology 12 Ch 5 Hershey-Chase chips now read "Track 1: labelled DNA" and "Track 2: labelled protein" (the isotopes are in the figure and the prose).
- Biology 11 Ch 14 O2-Hb curve: the "Lungs (pO2 = 104 mmHg)" label moved above the curve plateau, clear of the dotted line.
- BOD card legend no longer repeats itself.

## Not changed (reader layout or taste; none blocks release)
- Biology 12 Ch 4 ABO table and the Ch 6 Hardy-Weinberg grid show as stacked rows on the phone (shared table layout, affects every subject).
- Very small labels in a few figures (Android report item 10): legible, nothing overlaps.
- Shared reader polish that already existed: fraction line spacing, superscript-on-superscript size, serif sub/superscripts.

## Settled earlier, no action
- Ch 11 "NCERT values" bullet: rewritten in the third review to NCERT's own wording.
- Ch 13 phytochrome line: the book prints it as a typeset line, not a drawing, so text is faithful; no figure needed.

## Process note
Maths 11 Ch 0 and the Biology chapters went to main before your sign-off and Android check. Going forward nothing is pushed until you sign off. If you want Ch 0 or the Biology chapters taken back off main until then, say so.
