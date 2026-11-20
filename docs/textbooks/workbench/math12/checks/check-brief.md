# How to check app screenshots (Class 12 Maths, Android emulator)

Read every png in your assigned set with the Read tool, in name order. Work alone (no helper agents). Write a running note to your own notes file after every few images (path given in your task), so findings survive if earlier images drop out of memory or the session is interrupted. Byte-identical consecutive shots (check with `md5 -q`) can be skipped after the first.

Names: c12-cNN-cardNNN = formula card; c12-cNN-dgNN-… = diagram; c12-cNN-pXXX-YY = reading page for part XXX (scroll shots); rNN-pXXX-cardN-YY = card N of the worked-example / quiz card set in part XXX.

REPORT these real faults (file + what):
- a line STARTING with an operator because of wrapping ("=", "+", "−", "×", "⇒", "⟺", "→", "·") mid-expression
- an expression split inside a bracket ("(y² −" / "x³)") or a short expression torn apart ("a ×" / "b = 0")
- a word or symbol alone on a line inside a box / answer box, a stray "." or ")" alone
- a blank line or big gap inside a block, or uneven gaps between bullets of one list
- text cut off, overlapping, running off the side; table cells clipped or crammed
- a fraction inside a fraction, "÷" next to a stacked fraction, stacked fractions touching each other
- an em dash (—)
- the answer printed twice in a row (last step ending with the answer box's text), or a step ending on a dangling "=" / "⇒"
- frozen screen / "isn't responding" / blank page / Home screen / card set not advancing (card N showing the same content as card N−1) / card set shifted off screen
- diagrams: clipped, labels overlapping each other or lines, labels off the drawing, geometry not matching its caption
- wrong maths

DO NOT report (known and accepted):
- taller line spacing on lines of a paragraph that holds an inline stacked fraction
- an "=", "⇒", "+", "×" or "·" at the END of a line (breaking after an operator is normal typesetting)
- the bottom "Ask Drona" bar, faded text at a card's bottom edge (scroll fade)
- the minus sign looking short (it is the correct character), the book's own "⟹" arrows and spaced "–" dashes in prose

Finish with: faults grouped by file (part index, card number), then a count. Do not edit any files.
