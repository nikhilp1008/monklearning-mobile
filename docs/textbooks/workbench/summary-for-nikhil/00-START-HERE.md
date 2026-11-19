# Biology 11 + 12 and Maths 11 Ch 0: what Nikhil needs to sign off

Everything described here is on main (7f842ed). It was pushed on 2026-11-18 after your sign-off, in four steps: c20b816, ec68231 and 943c33f (the five pre-build items), then c969553 (Android and NCERT leftovers). Nothing is waiting on a push. Students see it only with the next store build.

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
- Student-visible authoring notes ("[New wording]" etc.) removed from Ch 17 and Ch 18.

## Fixed after the card re-shoot
- Biology 12 Ch 5 Hershey-Chase chips now read "Track 1: labelled DNA" and "Track 2: labelled protein" (the isotopes are in the figure and the prose).
- Biology 11 Ch 14 O2-Hb curve: the "Lungs (pO2 = 104 mmHg)" label moved above the curve plateau, clear of the dotted line.
- BOD card legend no longer repeats itself.

## Done on 2026-11-18 (your five pre-build items, and the leftovers)
1. **First aid, MTP and contraception lines** (Biology 12 Ch 3 and Ch 7) checked against WHO and the MTP Act, or cut to NCERT's words. Copper IUD now says "within 72 hours (NCERT's limit; WHO allows up to 5 days)".
2. **Every "NCERT says" line** (about 483) checked against an NCERT PDF by six Opus agents; about 38 corrections applied, and attributions that could not be checked were removed. Reports: `../bio-ncert-check-2026-11-18.md`. Lines true only of older editions were left on purpose; three were tidied in c969553 (1000 Da cut-off in Ch 9 now called the book's own, "(core NCERT)" dropped from a Ch 14 heading, false and floating ribs named separately in Ch 17).
3. **Echinoderm keys** (Biology 11 Ch 4): the two clashing keys settled; you chose to keep ours where we differ from the book.
4. **Changed answer keys** (Biology 11 Ch 2 and Ch 8, Biology 12 Ch 6, 11, 13) re-checked against the source.
5. **Eye and ear** (Biology 11 Ch 18): not in the NEET (UG) 2026 syllabus (official NMC annexure, NTA notice of 8 Jan 2026); the row says so.
6. **Gene count** (Biology 12 Ch 5) shows "30,000 or 20,000-25,000". One-line fractions are banned by the book rules, so "or" stands in for the slash you wrote.
7. **Android leftovers** (c969553): Biology 12 Ch 4 ABO table cells read "Blood group A" and so on; Biology 12 Ch 5 Hershey-Chase labels in the figure read "P-32 DNA" and "S-35 protein" (superscripts are lost in drawn labels on Android); Biology 11 Ch 14 O2-Hb curve labels and leaders moved off the dotted line and curves.

## Not changed (reader layout or taste; none blocks release)
- The Biology 12 Ch 6 Hardy-Weinberg grid shows as stacked rows on the phone (shared table layout, affects every subject). The Biology 12 Ch 4 ABO table is the same layout, but its cells now say "Blood group A" and so on, so it reads correctly.
- Very small labels in a few figures (Android report item 10): legible, nothing overlaps.
- Shared reader polish that already existed: fraction line spacing, superscript-on-superscript size, serif sub/superscripts.

## Settled earlier, no action
- Ch 11 "NCERT values" bullet: rewritten in the third review to NCERT's own wording.
- Ch 13 phytochrome line: the book prints it as a typeset line, not a drawing, so text is faithful; no figure needed.

## Still open
- **Android re-shot** of Biology 11 fig 14.5, Biology 12 fig 5.3 and the ABO table after the 2026-11-18 fixes: the iOS simulator shows them right (fig 14.5 keeps one thin leader crossing the right-shift curve), but no Android shot has been taken yet.
- **Shelf names vs live catalogue**: re-check once more just before a store build.
- **Process**: Maths 11 Ch 0 and the Biology chapters first reached main before your sign-off and the Android check. Every push since (c20b816 onwards) was on your "push to main". Nothing is pushed without it.
