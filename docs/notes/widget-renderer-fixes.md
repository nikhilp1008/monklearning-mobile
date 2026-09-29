# Note for the owner of `comparison_table`, `data_table_trend`, `process_flow` and `BoardText`

The 2026-09-29 review of the 60 stored payloads in adopted chapters found four
renderer defects: 39 `comparison_table`, 15 `process_flow` and 6
`data_table_trend`. None of them can be fixed in a payload. Each fix below is a
few lines in the widget's own files. Each has a test in the widget's own
`__tests__/` that fails on `b80d3b7` and passes now. No payload, golden or
snapshot changed; none of these widgets has a golden. A fifth defect, in the
shared `BoardText`, showed only on the simulator in a live class (section 5).

## 1. comparison_table: a wrapped column label was drawn under the header rule

**Why:** the rule sat at `top + BAND_H` (28) whatever the header held. A
two-line label is centred on the one-line baseline, so its lines land at 14.8
and 29.2, and the rule went through the second line: "Ecosystem" over a
struck-out "services". This hit 15 of the 39 stored tables, at every frame.
verify-render can't see it, because it checks text against text, not against
lines.

**Rule:** `headerY = top + BAND_H` became
`top + BAND_H + (headerLines − 1) · HEADER_SIZE · LINE_LEADING / 2`.
`layoutTable` takes `headerLines` (default 1), and the component passes the
tallest label's line count. For a two-line header the rule moves from 28 to
35.2 and the rows move down with it. The label text doesn't move, and the rule
keeps the 6pt a one-line header has under its baseline.

**Stays the same:**
- A one-line header draws exactly as before.
- `needH` is unchanged. It has always budgeted two header bands, 8pt more than
  a one-line header uses, and the 7.2pt move fits inside that. So no table's
  validation changes, and a 4-row table with both labels wrapped still fits
  343x236.

**Test:** `comparison-table/__tests__/wrapped-header-clears-rule.test.tsx`

## 2. comparison_table: a word was split with no hyphen

**Why:** with no space inside the line, `wrapCell` cut the word bare. That drew
"Mineralisatio / n", "Direction / al" (which reads as a real word),
"Exhaustiv / e detail" and "Gas-independe / nt". `fits()` passed all of them,
because it prices only the longest line.

**Rule:** `[t.slice(0, max), t.slice(max)]` became
`[t.slice(0, max − 1) + '-', t.slice(max − 1)]`. That is `data_table_trend`'s
rule verbatim, and the test checks that the two functions agree.

**Why hyphenate rather than refuse:** a refusal would break this widget's own
contract, "Stratification is wrapped, not refused", and its test. It would also
drop 7 stored tables to the fallback, one of them judged correct (645cf0f8:5,
"Mineralisation"). Hyphenating keeps everything that validated still
validating, with one exception.

**The one validation change:** a space-free string of exactly two full lines
(26 characters at two columns, 18 at three) no longer fits, because the hyphen
takes a slot. One stored payload hits this: adfd3853:5, whose cell
`f'(g(h(x)))·g'(h(x))·h'(x)` is now refused with the measurement. The review had
already judged it wrong for that break, and its fix validates.

**Known limit:** inside a formula the hyphen can read as a minus.
2ae02396:5 (judged wrong, and the fix avoids it) now draws `a(r^n-1)/(r--` /
`1)`. Before, it drew `…/(r-1` / `)`. A formula needs a space or a shorter form.

**Possible follow-up, for both tables:** break after an existing `-` or `/`
before hyphenating, which would give "Gas-" / "independent" and
"Free-" / "floating".

**Test:** `comparison-table/__tests__/words-split-with-a-hyphen.test.tsx`

## 3. data_table_trend: wrapped lines had zero leading

**Why:** lines were one font size apart, and the gate boxes a line at 1.15 of
the size. So the two lines of every wrapped cell overlapped by 1.8pt: every
stored trend table that wraps failed the gate at 340 and 343 ("Crustose" and
"lichen" collide). The header had the same problem twice over. Its second line
sat 1.2pt above the rule (46.4 against 47.6), and its first line reached into
the readout, so "Common" collided with the caption.

**Rule:** a new `LINE_LEADING = 1.2`, `comparison_table`'s value for the same
reason.

- **Cell line `li`:** was `rowCentre + (n = 1 ? 0.35 : −0.15)·size + li·size`.
  It is now `rowCentre + 0.35·size − (n − 1)·size·1.2/2 + li·size·1.2`. A
  one-line cell doesn't move, and two lines stay centred where one would sit.
- **Header line `li`:** was `top + size + (li − (n − 1)/2)·size`. It is now
  `top + size + li·size·1.2`. The band grows down, because the readout is
  directly above it.
- **Header rule:** was `top + HEADER_H`. It is now
  `top + HEADER_H + (headerLines − 1)·size·1.2`, so 47.6 becomes 62.0 for two
  lines. The rows share what is left, as before.

**Stays the same:** numeric tables, and any table whose labels and cells fit
one line, draw exactly as before. That covers all four render-trees cases.

**Result:** gate failures on the stored and fixed trend payloads went from 18
trees to 0.

**Not fixed:**
- At 343x236 with 6 or more rows, a row gets about 30pt or less, and a
  two-line cell needs 28.2pt in the gate's box. A wrapped cell in the LAST row
  therefore has its second line close to the bottom rule: its baseline is at
  222.5 against the rule at 226, where it was 221.3.
- At 7–8 rows, two wrapped cells stacked in one column cannot clear each other
  at any leading. No stored payload does this.

If either matters, the fix is a `validate()` cap on wrapped cells by row
count. I didn't add one, because it would refuse payloads that validate today.

**Tests:**
- `data-table-trend/__tests__/wrapped-lines-have-leading.test.tsx` runs the
  real `verify-render.mjs`, plus the header-rule check, on three stored
  payloads at all five frames.

## 4. process_flow readout counted arrows; categorical readout was cut mid-word

**Why:** `nodes` is documented as "One label per step", but the readout printed
`stepCount`, which counts the arrows. The result was "Five steps of
decomposition in order   4 steps · open".

**Rule:** the readout now prints `nodeCount`.
- An open chain now reads n, not n − 1.
- A closed chain or ring still reads n, because its return edge is the n-th
  arrow.
- "· 1 branch" is unchanged.

**Stays the same:** `stepCount` still means directed edges. `physics.test.ts`
and any `{{stepCount}}` token are untouched.

**Side effects:**
- All 12 stored open chains now read one higher.
- d43861a6:7's caption "Two arrows, two divide-by-10s" now sits beside
  "3 steps · open", where it said "2 steps". The content side may want to
  reword it.
- `app/dev-widget-preview.tsx` listed the expected readouts. I updated its three
  open-chain examples to match: 9 → 10, 6 → 7, and 3 → 4 with a branch.
- If the payload generator's prompt says an open chain reads "n − 1 steps", it
  should now say n.

**`data_table_trend`'s categorical readout:** this was
`caption.slice(0, fit)`. A caption that doesn't fit now ends on a whole word
followed by "…", as `fitReadout` already does for the numeric readout. For
example, "Discontinuity types by limit beha" becomes "Discontinuity types by
limit…". Captions that fit are unchanged.

**Tests:**
- `process-flow/__tests__/readout-counts-nodes.test.tsx`
- `data-table-trend/__tests__/readout-ends-on-a-word.test.tsx`

## 5. BoardText: a centred text with a Greek letter drew it over its neighbour

**Why:** found on the simulator in the X1 Wave Optics class, not in a review.
Every comparison-table cell with a Greek letter or a subscript — "d sinθ =
mλ", "Source & screen at ∞" — drew the companion-face run one glyph too far
right: the θ sat under the "=", the λ a space off. `BoardText` splits such a
string into TSpans (Onest, then Inter for the glyphs Onest lacks), and on iOS
react-native-svg 15.12.1 misplaces the TSpans of a text anchored `middle` or
`end`. It is the anchor, not the fonts: the same split drawn in Onest alone
broke the same way, and the same split anchored at `start` drew correctly. The
render trees could not show it — their props were right.

**Rule:** a text of two or more runs anchored `middle`/`end` is anchored by
`BoardText`: x moves left by half (or all) of the width `textWidth` measures,
without the 5% margin, and the renderer is told `start`. A text it cannot
measure (x or fontSize not a number) is drawn as one string, which iOS draws
in place with a per-glyph fallback face. One-run text — almost all of it —
renders exactly as before.

**Measured on the simulator** (captures in the X1 report): before, "d sin θ̶m
λ"; after, "d sinθ = mλ" centred on its x, and "a sin θ = λ/2 · Ω · μF · CO₂ ·
10⁻³" with Inter's own sub- and superscripts. 17 stored payloads draw a
companion glyph in Onest-set text (15 comparison tables, 2 LCR); all of them
were affected.

**Test:** `lib/widgets/__tests__/board-text-anchor.test.tsx`; the companion-face
gate still passes every stored board at all five frames.
