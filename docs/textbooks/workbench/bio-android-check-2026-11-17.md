# Android check: Biology 11 and 12 textbooks, Maths 11 ch 0 (2026-11-17)

Shots, scripts and contact sheets are outside the repo in `/Users/raasikhnaveed/Desktop/monk-learning-mobile/android-check-bio/` (`shots/`, `sheets/`, `FINDINGS.md` = raw running notes, `PROGRESS.md`). Nothing in the repo was edited.

## Verdict

No blocking problem. On Android no text is clipped off-screen, no symbol is a box or missing (except the pedigree legend, below), no subscript is a bare stroke, every figure and every case opens and draws, all 23 Formula sheet cards are correct, and the sex symbols (U+2640, U+2642, U+26A5), the underlined G (U+0332), italic gene symbols with superscripts, stacked fractions and chemical subscripts all render. The `markup.tsx` change for the sex symbols broke nothing in the Maths, Chemistry or Physics-style pages sampled. What is left is 11 minor items in our chapters (mostly legibility and a few line-break and wording points) and 3 minor shared-reader items that already exist.

## Environment

- Emulator `pixel_play` (Pixel 8, Android 16, 1080x2400, 420 dpi). Dev client built from the worktree (`expo prebuild` + `gradlew :app:assembleDebug`, 3m22s), package `com.monklearning.app`, scheme `monklearningapp`. Metro for this worktree on port 8082 (8081 was held by another session's Metro); `adb reverse tcp:8082 tcp:8082`. Metro stopped at the end; emulator left running; `android/` (gitignored) left in the worktree.
- Signed in by the owner. No purchase, no account change.
- Scripts: `d.py` (the repo's `drive-c11.py` with the package id, port 8082, `-p com.monklearning.app` on every launch, and a hop through another screen so an open diagram viewer resets), `run.py` (cards/diagrams/pages), `kp.py` (Key points), `tall.py` (scroll test). Manifest from a temporary jest test, deleted. Swift OCR and stack tools built. Pitfalls found: the old release build `com.monklearning.mobile` also claims the scheme, so a chooser (and one ANR) appears without `-p`; a second adb device appearing once killed a run (rerun with `ANDROID_SERIAL=emulator-5554`).

## What was shot

| Part | Shot |
|---|---|
| Figures | all 188 Biology figures, every case (every chip): 255 case shots (Biology 11: 160 files, ch 19 has none; Biology 12: 95 files, ch 4 has none). Verified file by file against the manifest: 255 of 255. |
| Formula sheet cards | all 23 (Biology 11: ch 6 x1, ch 12 x3, ch 13 x4, ch 14 x1, ch 15 x1, ch 16 x1; Biology 12: ch 4 x1, ch 8 x6, ch 11 x3, ch 12 x2). The brief said 24; the registry gives 23. |
| Reading pages | 109 chosen parts (about 1,100 screens): Biology 11 ch 1-19 (69 parts incl. extras), Biology 12 ch 1-13 (40 parts). All 27 parts with sex symbols, all 20 with the underlined G, genetics parts (including 6 extra Biology 12 ch 4 parts), a table, subscript, superscript, fraction, nucleic and chemical page per chapter, plus worked-example, practice and MCQ cards (each card turned, answers opened). |
| Tall-figure scroll test | Biology 11 ch 4 (2 figures), ch 12, ch 18; Biology 12 ch 3 (`shots/tall/`). |
| Key points | 12 chapters (Biology 11 ch 1, 5, 9, 12, 15, 19; Biology 12 ch 1, 4, 5, 8, 11, 13) plus Maths 11 ch 0, top, "Tap to check" opened, scrolled. |
| Regression | Maths 11 ch 0 (3 pages) and ch 6, ch 12; Maths 12 ch 1 and ch 7 (stacked fractions, sigma/integral); Chemistry 11 ch 6 and ch 7 (equilibrium, oxidation numbers). Physics was not shot: no Physics part had features beyond Maths fractions; I judged the Maths fraction pages the relevant regression for `markup.tsx` (not shot is not the same as checked). |

Not shot or not judged: the other ~1,900 Biology reading parts (only risky/sampled ones); Key points of the other 20 chapters; a physical-phone check (only the emulator's Roboto/Noto fallbacks); iOS. Contact sheets were judged by eye at reduced size; text I could not read at sheet size I zoomed on (stacked crops), but small defects on unzoomed pages could be missed.

## A. Problems in our new chapters

All minor; none blocks release. Paths are under `android-check-bio/shots/`.

1. **Biology 12 ch 4, Cheat sheet (part 23), "Pedigree symbols"** (`biol12/c12-c04-p023-02.png`): the legend "□ male, ○ female" draws the square (U+25A1) about 1.4x the x-height and the circle as a tiny raised dot, from two different fallback fonts; the pair does not read as the standard pedigree symbols. Fix: content (matched pair at equal size, e.g. U+25A1 with U+25EF, or "square = male, circle = female") or a shared-reader rule giving both the same font. This is the only symbol that is not clean. Italic gene symbols with superscripts (Hb^S, I^A) are correct.
2. **Biology 12 ch 4, part 2 "Key procedures and crosses", ABO genotype table** (`biol12/c12-c04-p002-13.png`): the two-column table (genotype, blood group) shows as stacked pairs with no column headings, so "I^A I^A, I^A i" sits over "A" with nothing saying genotype or group. Fix: content (head row, or "Blood group A: ...").
3. **Biology 12 ch 6, part 10 Hardy-Weinberg derivation** (`biol12/c12-c06-p010-02.png`): the 2x2 Punnett grid collapses to a stacked list ("A sperm (p)" over "A egg (p)  AA = p2"). Correct and readable, but students never see a grid. Shared reader (all tables); either accept or add a grid layout later.
4. **Biology 11 ch 15, part 48, Practice card 2/5** (`biol11/c11-c15-p048-04.png`): "20 L/ min" and "200/ min": the line breaks after the slash, splitting the unit L/min. Fix: content (non-breaking join around "/") or shared reader (no break after "/" between a number or letter and "min").
5. **Biology 11 ch 16, Cheat sheet (part 15)** (`biol11/c11-c16-p015-01.png`, `-02.png`): the "Master arrow" row is followed by an unlabelled bold run-on line starting with a dash ("- Ammonotelic -> aquatic ...; Ureotelic ..."); it reads as a stray bold bullet. Fix: content (give it a label such as "Excretion type" or fold it into the row above).
6. **Biology 11 ch 19, part 22 "Master Comparison Tables"** (`biol11/c11-c19-p022-*.png`): the row label "Disorder (excess / deficiency, in this order where both are given)" repeats for every gland and wraps to 4 or 5 lines in the narrow label column, making each gland card about 40 percent taller. Fix: content (label "Disorder", move the note to a table note).
7. **Biology 11 ch 12 Formula cards 2 and 3 ("Alcoholic", "Lactic acid")** (`biol11/c11-c12-card002.png`, `card003.png`) and **Biology 12 ch 8 cards 2 to 4** (`biol12/c12-c08-card002..004.png`): the enzyme or organism written over the arrow draws as a tiny raised superscript to the right of the arrow ("Pyruvate ->^pyruvate decarboxylase", "->^Lactobacillus"), not above it. On card 4 (acetic acid) a line starts with the arrow ("-> Acetobacter aceti CH3COOH + H2O"); on the BOD card a line ends on a minus ("(DOinitial -" / "DOfinal) x dilution factor"). Legible but cramped. Fix: content (organism or enzyme in the legend or its own line; non-breaking space before arrows and minus) or shared card layout (arrow with label above).
8. **Biology 12 ch 5, figure 5.3 Hershey-Chase chips** (`biol12/c12-c05-dg03-1.png`): the chips read "Track 1: 32P-DNA" / "35S-protein" with plain digits because a chip cannot carry superscripts (the figure and the prose show 32P/35S correctly). Fix: content ("P-32 DNA") or allow markup in chips.
9. **Biology 11 ch 14, figure 14.5 O2-Hb dissociation curve** (`biol11/c11-c14-dg05-1.png`): the dotted vertical line at pO2 104 runs through the "Lungs (pO2 = 104 mmHg)" label; "Left shift" sits inside the plot against the axis; leader lines cross the right-shift curve. Fix: diagram change (move the labels).
10. **Label density in other figures** (legible, no overlap): Biology 11 ch 6 fig 6.3 (T.S. root/stem/leaf, all 6 cases, `c11-c06-dg03-*.png`) about 8 px glyphs; ch 7 fig 7.3 cockroach (`c11-c07-dg03-1.png`) leader lines cross the body and each other; ch 11 figs 11.7 and 11.8 (Calvin, C4) tiny text in boxes and long captions; ch 18 figs 18.2 and 18.3 (synapse, brain) label pills stacked with no gap; Biology 12 ch 5 figs 5.2 and 5.4 (5'/3' labels about 7 px); Biology 12 ch 11 fig 11.3 (age pyramids) the smallest labels of the set; Biology 11 ch 5 floral diagrams (ch 5 figs 10, 11, 13) left label pills tightly stacked. Fix: diagram change if the owner wants them larger; none is wrong.
11. **Tall figures** (info, not a defect): Biology 11 ch 4 figs 1 and 6, ch 12 glycolysis, ch 18 neuron, Biology 12 ch 3 contraceptive tree are taller than the card, so the first view cuts them at the card edge; the card scrolls (scrollbar shown) and the figure is complete when scrolled (`shots/tall/*-s.png`). Worth a "scroll" hint only if students miss it.

Checked and fine (so nobody re-checks): sex symbols in floral formulas and tables (`biol11/c11-c05-p010-03.png`, `c11-c03-p017-02.png`); underlined G with whorl subscripts in floral formulas, MCQ stems and options (`c11-c05-p017-17.png`, `c11-c05-p029-01.png`); "%" for zygomorphic is the book's own sign (documented in `bio-11-05/extras.ts`), it reads like a percent sign, nothing to fix; stomatal index and all stacked fractions, nested ln(W1/W0)/dt, V_max / K_m, nPr, SV = CO/HR; Hb^S Hb^S, I^A I^B, X^C X^c, amp^r, 32P/35S in prose; CO2, H2O, C6H12O6, NH3, Mg2+; mV and K+ on the action potential table; tables with 4 columns; Key points screens (question, answer, "I knew it"); Punnett-style tables as stacked rows; the 23 formula cards.

## B. Problems that already exist elsewhere (shared reader, not caused by Biology)

1. Stacked fraction touches or sits tight against the next text line (`biol11/c11-c09-p034-01.png`, Michaelis-Menten "where v is..."), and nested fractions (ln(W1/W0)/dt) are very small (`c11-c13-p026-03.png`). Shared reader polish (line spacing around `<frac>`).
2. A superscript on a superscripted lowercase letter (X^C X^c) is about 5 px and barely readable (`biol12/c12-c04-p067-14.png`); (1/2)^3 draws the exponent slightly high.
3. Subscripts and superscripts draw in the serif (STIX-like) face while body text is sans, so "K(5) C(5) A5" and "Hb^S" mix faces. By design, noted as the look of the reader.
4. Dev-build only: the "isn't responding" box appeared once mid-shoot (handled by the script; one file, `biol12/c12-c10-p033-06.png`, shows it). Not a store-build issue as far as I can tell.

Regression (markup.tsx change): Maths 11 ch 0 surds, logarithms and `log_a` subscripts; Maths 11 ch 6 counting formulas; ch 12 limits; Maths 12 ch 1 and ch 7 (integral and sigma limits); Chemistry 11 ch 6 (pH, Ka = c a^2/(1-a), common-ion figure) and ch 7 (oxidation numbers): all render normally.

## Open or unverified

- Not a real phone: fallback fonts are the emulator's.
- I looked at about 1,100 page screens mostly as contact sheets plus zooms; absence of a finding on an unzoomed page is not proof.
- The other Biology reading parts and Key points of 20 chapters were not shot; the flagged risky categories were covered chapter by chapter.
