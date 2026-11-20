# Re-shoot of the changed formula cards (commit df807c9), 2026-11-17

Environment: worktree wt-biology-textbooks at df807c9, Metro with --clear on 8082, emulator-5554 (pixel_play), signed in, `-p com.monklearning.app`. New shots in `shots/reshoot/`; old shots `shots/biol11/c11-c12-card002..003.png`, `shots/biol12/c12-c08-card002..004.png`. Side-by-side sheets: `sheets/re1.png`, `sheets/re2.png`, `sheets/re3.png`.

| Card | New shot | Raised text beside arrow | Line starts with arrow | Line ends on minus | Result |
|---|---|---|---|---|---|
| B11 ch12 card 1 Net summary of glycolysis | reshoot/biol11/c11-c12-card001.png | none | no | no | PASS (unchanged) |
| B11 ch12 card 2 Alcoholic | reshoot/biol11/c11-c12-card002.png | gone | no ("Pyruvate -> Acetaldehyde + / CO2 -> Ethanol") | no | PASS |
| B11 ch12 card 3 Lactic acid | reshoot/biol11/c11-c12-card003.png | gone | no | no | PASS |
| B12 ch8 card 1 Lactic acid fermentation | reshoot/biol12/c12-c08-card001.png | gone | no | no | PASS |
| B12 ch8 card 2 Alcoholic fermentation | reshoot/biol12/c12-c08-card002.png | gone | no (one line) | no | PASS |
| B12 ch8 card 3 Acetic acid fermentation | reshoot/biol12/c12-c08-card003.png | gone | no (one line now) | no | PASS |
| B12 ch8 card 4 BOD | reshoot/biol12/c12-c08-card004.png | n/a | no | YES: "BOD = (DO_initial -" / "DO_final) x dilution factor" is unchanged | FAIL |
| B12 ch8 card 5 Methanogenesis | reshoot/biol12/c12-c08-card005.png | none | no | no | PASS (unchanged) |
| B12 ch8 card 6 From organic matter | reshoot/biol12/c12-c08-card006.png | none | no | no | PASS (unchanged) |

(The card order in the sheet: ch8 card numbers follow the formula-sheet order; the file names above are the shoot's card index.)

## Issues

1. **BOD card still breaks on the minus** (reshoot/biol12/c12-c08-card004.png). The non-breaking space was put before the minus, so the minus stays at the end of line 1 and DO_final starts line 2. The fix wanted is the opposite: bind the minus to the FOLLOWING term (non-breaking space AFTER the minus, and/or a normal space before it), e.g. `DO<sub>initial</sub> −&nbsp;DO<sub>final</sub>`, or keep "(DO_initial - DO_final)" on one line with a word joiner. The card is otherwise correct.
2. **The new "note" lines do not show on the formula cards at all.** `buildFormulaCards` (lib/revise/formula-cards.ts) never reads `note`, only `main` and `legend`, so cards with an empty legend (all of these) show the equation only. The OCR of the new card shots confirms there is no "Carried out by ..." or "Step 1 uses ..." text. So on the card sheet the enzyme and organism names are now gone entirely; they survive only where the formula block is read in the chapter page (not shot, I did not locate those blocks). If the cards should still name the organism or enzyme, put it in `legend` (e.g. `legend: ['Lactobacillus: the organism']`-style row) or add `note` rendering to the card builder.

## Curd parts (Lactose -> Lactic acid (by Lactobacillus))

PASS. Part 3 "Comparative characteristics and key processes", step 3 of the curd procedure (`reshoot/biol12/c12-c08-p003-02.png`): "Lactose -> Lactic acid (by Lactobacillus)" on one line, italic organism name, arrow in the body font, nothing raised, nothing clipped. Part 8 "Cheat sheet", Curd row (`reshoot/biol12/c12-c08-p008-01.png`): the snapshot row reads "Lactobacillus (LAB) -> lactose to lactic acid -> coagulates casein -> sets curd. Bonus: up-arrow vitamin B12 ... Lactose -> Lactic acid (by Lactobacillus) => casein coagulates"; wraps sensibly, no line starts with an arrow. (The row repeats the first half of its own sentence; content, not layout.)

## Housekeeping

- Metro stopped (my process on 8082 only).
- A second emulator, emulator-5556, is attached and signed in as the same account; it was showing a "Couldn't start the payment" dialog. It is not mine and I did not touch it (I only added and removed one adb reverse on it by mistake at the start).

## Second re-shoot (commit de4c95c: enzymes in legends, short BOD card): NOT DONE

Blocked by the emulator, not by the content. The pixel_play emulator I used before is no longer running. I started it again (`emulator -avd pixel_play -port 5554`); its process is up but hung ("detected a hanging thread 'QEMU2 main loop'", log: android-check-bio/emulator2.log) and never appears in `adb devices`. Killing the hung process was refused by the permission guard, so I stopped. The only attached emulator is `emulator-5556` (AVD pixel_pay), which belongs to another session (it showed a payment dialog earlier), so I did not use it. Metro (--clear, 8082) was started from de4c95c and then stopped. No shots were taken.

To finish: kill the hung `qemu-system-aarch64 -avd pixel_play` process (or close that emulator window) and ask me to run again, or tell me to use emulator-5556.

## Third attempt (after the user's pkill): still blocked

The hung `qemu-system-aarch64 -avd pixel_play` (pid 14738) is still alive (it ignored the plain pkill, so it needs `kill -9 14738`). A fresh launch is refused with "Another emulator instance is running" (emulator3.log), so no emulator is available except emulator-5556 (pixel_pay, another session's), which I did not use. No Metro was started and no shots were taken. Per instruction I killed nothing.

## Fourth attempt (after the user's kill -9): DONE at commit de4c95c

Cold-booted pixel_play (emulator-5554, not 5556), app still signed in, Metro --clear on 8082 (stopped afterwards). One transient "System UI isn't responding" box right after the boot was answered with Wait and did not recur. Shots in `shots/reshoot2/`, comparison sheet `sheets/re4.png`.

| Card | Shot | Legend | Raised text | Clipped / bad break | Result |
|---|---|---|---|---|---|
| B11 ch12 card 2 Alcoholic | reshoot2/biol11/c11-c12-card002.png | "Step 1 enzyme: pyruvate decarboxylase", "Step 2 enzyme: alcohol dehydrogenase" (two bullets) | none | none; "Pyruvate -> Acetaldehyde + / CO2 -> Ethanol" | PASS |
| B11 ch12 card 3 Lactic acid | reshoot2/biol11/c11-c12-card003.png | "Enzyme: lactate dehydrogenase" | none | none; "NAD+" wraps alone on line 2, no leading arrow | PASS |
| B12 ch8 card 1 Lactic acid fermentation | reshoot2/biol12/c12-c08-card001.png | "Organism: Lactobacillus" (italic) | none | none | PASS |
| B12 ch8 card 2 Alcoholic fermentation | reshoot2/biol12/c12-c08-card002.png | "Organism: Saccharomyces (yeast)" | none | none; one line | PASS |
| B12 ch8 card 3 Acetic acid fermentation | reshoot2/biol12/c12-c08-card003.png | "Organism: Acetobacter aceti" | none | none; one line | PASS |
| B12 ch8 card 4 BOD | reshoot2/biol12/c12-c08-card004.png | three rows: DO_i = dissolved oxygen before incubation, DO_f = after incubation, D = dilution factor | none | formula "BOD = (DO_i - DO_f) x D" on one line, no break | PASS |

Cards 5 and 6 of ch 8 and card 1 of ch 12 were re-shot too (reshoot2/) and are unchanged. Minor, not a failure: in the BOD legend the symbol column shows "DO_i" then repeats "DO_initial" in the text, which reads a little redundantly.
