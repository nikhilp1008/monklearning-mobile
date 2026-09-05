# The label layer

How sourced-but-unlabelled art becomes a teaching figure.

**Status.** Everything in §0 and every arithmetic result below is derived from
files that exist in this repo today, named inline so you can check it. Every
file, script, column and tool that does **not** exist yet is marked
**PROPOSAL**. `lib/widgets/CLAUDE.md` §8 lists six documents that were cited as
though they were reviewed and were never written. This is the seventh document
in `docs/`; it is not going to be the seventh of those.

---

## 0. Why this exists, and how big it is

The 149-figure audit found the bottleneck is **labelling, not licensing**.
Servier Medical Art (CC BY 4.0) is broad for human anatomy and systematically
unlabelled; plant micrographs are cleanly licensed and unlabelled; the labelled
schematics are CC BY-SA and unusable. Accepting that *we* supply the label layer
converts partials into hits and opens whole libraries.

What the repo says about the size of the job — `content/concept-archetypes.csv`,
1,154 rows:

| `build_class` | rows |
|---|---:|
| `widget` | 764 |
| `none` | 194 |
| `illustration` | **146** |
| `review` | 50 |

Of the 146 `illustration` rows, `archetype_v2` splits them: **59
`labelled_figure`**, 68 `none_symbolic`, 8 `apparatus`, 5 `process_flow`, 2
`gap_floral_diagram`, 2 `data_table_trend`, 1 `reaction_scheme`, 1
`gap_spirogram`. 132 of the 146 are biology, 10 chemistry, 4 physics.

Two things to note rather than smooth over. The CSV says **146**, the audit says
**149** — a 3-row discrepancy that nobody has reconciled; reconcile it before
anyone plans capacity off either number. And the 59 `labelled_figure` rows are
the direct target of this spec; the other 87 need art but not necessarily this
machinery.

---

## 1. The data format

Two files per figure, and the art is **never modified**.

```
assets/figures/<figure_id>.png          the mirrored art, byte-for-byte as sourced
content/figures/<figure_id>.json        provenance + label set          PROPOSAL
```

### 1.1 The figure record

```jsonc
{
  "figure_id": "bio-11-08-cockroach-mouthparts",   // stable, never reused
  "art": {
    "file": "assets/figures/bio-11-08-cockroach-mouthparts.png",
    "intrinsic_w": 1600,          // pixels, of THIS file, measured at ingest
    "intrinsic_h": 1200
  },
  "provenance": { /* §4 */ },
  "label_set_version": 1,
  "reviewed_by": "r.nandy",       // §3 gate 4 — NOT NULL, no placeholders
  "reviewed_at": "2026-09-05",
  "labels": [ /* §1.2 */ ]
}
```

### 1.2 A label record

```jsonc
{
  "id": "labrum",                              // unique within the figure
  "term": { "en": "Labrum", "hi": "ऊर्ध्वोष्ठ" },
  "anchor": { "u": 0.412, "v": 0.233 },        // normalised 0..1, §1.3
  "side": "left",                              // 'left' | 'right' — REQUIRED
  "v_hint": 0.21,                              // optional; a HINT, see §1.5
  "leader_via": { "u": 0.30, "v": 0.19 }       // optional elbow to route around ink
}
```

`term` carries **both languages from the start**. A record with only `en` is
invalid at ingest, not "to be translated later" — retrofitting a second language
is how a layout budget gets discovered after the figures are authored (§5).

### 1.3 Why normalised, with the arithmetic

`anchor` is a fraction of the art's intrinsic size, not a pixel. The art is
letterboxed into the board box:

```
s  = min(W / intrinsic_w,  H / intrinsic_h)
sW = s * intrinsic_w        sH = s * intrinsic_h
ox = (W - sW) / 2           oy = (H - sH) / 2
x  = ox + u * sW            y  = oy + v * sH
```

For a 1600×1200 art at the three board sizes:

| Board | `s` | drawn `sW × sH` | `ox` |
|---|---:|---:|---:|
| 900×430 | 0.35833 | 573.33 × 430.00 | 163.33 |
| 495×270 | 0.22500 | 360.00 × 270.00 | 67.50 |
| 343×236 | 0.19667 | 314.67 × 236.00 | 14.17 |

`u = 0.412` yields x = 399.5 / 215.8 / 143.8 respectively — **one authored
number, three correct positions.** Store `412` (a source pixel) instead and
every render needs `intrinsic_w` at draw time, and every re-export of the art at
a different resolution silently invalidates all 10 anchors. Normalisation folds
the intrinsic size in once, at authoring time, where a human is looking.

This is the frame rule from `docs/small-screen-rendering-rules.md` applied to
labels: **a label's POSITION is a world quantity and scales; its FONT SIZE is
chrome and never does.**

### 1.4 The one thing normalisation does not survive: a re-crop

A re-*scale* leaves `u,v` correct. A re-*crop* moves every anchor and changes
nothing else. So `intrinsic_w/h` are recorded **and checked**: if the shipped
file's aspect ratio differs from `intrinsic_w / intrinsic_h` by more than 0.5%,
that is a hard error (§4). A silent re-crop is otherwise undetectable and
invisibly wrong.

### 1.5 What is deliberately NOT in the format: an absolute text position

The obvious field — "where the text goes", as `{u, v}` — is omitted on purpose.
An authored text position is a world quantity; the text it positions is chrome.
Two labels separated by `Δv = 0.05`:

| Board height | `Δv × H` | vs. `ROW = 17.8pt` (§2.3) |
|---|---:|---|
| 430 | 21.5pt | clears |
| 270 | 13.5pt | **collides** |
| 236 | 11.8pt | **collides** |

The same authored separation is comfortable at 900×430 and a hard gate error at
343×236. So no authored vertical spacing is trustworthy, `v_hint` is a *hint*
consumed before the de-collision pass, and the de-collision pass always runs
last. `side` is authored (it is a judgement about the anatomy — which way the
structure faces); the label's x is derived; its y is derived from `v_hint ??
anchor.v` and then corrected.

---

## 2. Rendering

**PROPOSAL:** a registry widget `labelled_figure`, built to the existing
`WidgetModule` contract in `lib/widgets/types.ts` and registered in
`lib/widgets/registry.ts` like any other. It uses `Image` from
`react-native-svg@15.12.1` (confirmed present:
`node_modules/react-native-svg/lib/typescript/elements/Image.d.ts`, props
`x/y/width/height/href/preserveAspectRatio`). The `href` is a **bundled asset** —
`lib/widgets/CLAUDE.md` §3 "Never fetch at render time" applies without
exception; a live class renders in airplane mode.

All chrome comes from `lib/widgets/chrome.ts`, unchanged: `LABEL_SIZE = 12`,
`LINE_STROKE = 1.6`, `PAD_EDGE = 10`, `CHAR_W = 0.58`, `textWidth()`.
**12pt at every board size.** Not 12 at 900 and 11 at 343.

### 2.1 Corner-pinning is not available, and neither is a halo

`chrome.ts`'s `cornerAnchor` records how `field_lines` beat label collision:
park the label in a board corner, where it is collision-proof by construction.
That is unavailable here — an anatomical label must point at its structure, and
a corner-pinned "Labrum" names nothing.

A halo is not the answer either, and the reason is mechanical. `chrome.ts` says
the halo pattern is "draw the same text twice: once thick in the background
colour, once normally on top." Run that through `scripts/verify-render.mjs`:
both copies are `Text` elements with the same `x`, `y` and content, so
`textBox()` returns two identical boxes, and `overlaps()` — a strict
`a.x0 < b.x1 && b.x0 < a.x1 && ...` — is true for identical boxes. Assertion 4
fires: **`labels collide: "Labrum" and "Labrum"`.** A naive halo fails the gate
on its own text.

So: **a filled `Rect` plate, not a halo.** One `Rect` at `theme.surface`, sized
from `textWidth(term, LABEL_SIZE)` and `bandFor(LABEL_SIZE)`, drawn under a
single `Text`. One text element, gate untouched. Fill only — **no stroke on the
plate**, or assertion 7's 1.2 stroke floor becomes a live risk for a decorative
hairline. The cost is honest and worth stating: every label hides a rectangle of
the illustration, roughly 153 × 20pt at the 22-character cap.

### 2.2 The layout: two columns pinned to the art, leaders back to the anchor

```
left column   textAnchor 'end',   tx = clamp(ox,        PAD_EDGE, ...)
right column  textAnchor 'start', tx = clamp(ox + sW, ..., W - PAD_EDGE)
leader        Line from the plate's inner edge to (anchor.x, anchor.y),
              LINE_STROKE 1.6 (clears assertion 7's 1.2 floor),
              via leader_via if authored
```

Columns are pinned to the *art's* edges (world), but text may overhang into the
board margin — the hard bound is the **board**, because assertion 3 is what
actually errors (`label "X" runs off the board`). For a portrait art
(1200×1600) at 343×236 the art is only 177pt wide with 83pt of margin each
side, and forbidding overhang there would cap terms at 11 characters.

### 2.3 Collision handling: deterministic vertical de-collision

Determinism is not a nicety. `CLAUDE.md` §3a: *nothing is created during a live
session* — precompute binds, a live session only selects. A layout that depends
on measured text or a solver is a layout that can differ between the CI tree and
the device.

```
ROW = LABEL_SIZE * 1.15 + 4 = 17.80pt
per column, sorted by y ascending:
  y[0] = max(y[0], oy + LABEL_SIZE)
  y[i] = max(y[i], y[i-1] + ROW)
  if y[n-1] > oy + sH - PAD_EDGE: shift the column up by the excess, re-clamp down
```

`17.80` is not a guess. The gate models a text box as `h = fontSize * 1.15`
= 13.8pt, top at `y - fontSize * 0.82`. Two boxes in a column with the same x
overlap iff their y separation is under 13.8. `ROW = 17.8` gives **4pt of
slack** — a margin, not a floor, per `small-screen-rendering-rules.md`'s "11px
and 1.2 stroke are floors, not targets".

Cross-column collision is a width problem, not a stacking problem, and it is
what sets the schema cap in §2.4.

### 2.4 The schema caps, derived at 343×236

`CLAUDE.md`: *"When the two disagree, narrow the schema. Never widen the gate"*,
and *"measure the new bound at the SMALLEST board"*.

Worst case is a left and a right label at the same y. They clear if

```
2 * (L * LABEL_SIZE * CHAR_W) + 2 * PAD_EDGE + 2 * LEADER_STUB  <=  W
2 * (L * 12 * 0.58)           + 20            + 16              <=  343
13.92 * L <= 307   ->   L <= 22.05
```

| | max term length at 343×236 |
|---|---:|
| Latin (`CHAR_W = 0.58`) | **22 characters** |
| Devanagari (`CHAR_W_DEVA = 0.75`, §5) | **17 code units** |

Check: 22 chars = 153.12pt; 2 × 153.12 + 36 = 342.24 ≤ 343. 23 chars gives
356.16 > 343 and fails. "Mitochondrion" (13) fits; "Endoplasmic reticulum" (21)
fits; "Rough endoplasmic reticulum" (26) does not and must be shortened by the
author, in the vocabulary, once — not truncated at render time.

**Label count.** Column capacity at 343×236 with a full-height art:
`(236 - 20) / 17.80 = 12` rows per column, 24 total. **Proposed cap: 10 per
figure.** At 10 (5/5) each column is 89 of 216pt — 41% occupied — so
de-collision rarely displaces a label more than one ROW from its true `v` and
leaders stay short. At 16 (8/8) occupancy is 66% and displacement is routine,
which turns a leader line into a line that crosses the illustration.

This is the same shape as `field_lines`' `charge_uc` cap: where density carries
meaning, **cap the parameter in the schema, do not thin the render.** A figure
that genuinely needs 18 labels is two figures, or it is not this board's job.

### 2.5 Anchor dots, and the constraint they import

**Proposal: draw a `TICK_R = 3` dot at each anchor.** A bare line-end reads as
ambiguous on a dense micrograph. The cost is that assertion 8 then applies: two
circles of the same radius closer than `2r + 4 = 10pt` are a hard error. At
343×236 with a 1600×1200 art that is a minimum normalised separation of

```
horizontal:  10 / 314.67 = 0.032 in u
vertical:    10 / 236.00 = 0.042 in v
```

This is a *good* constraint — two anatomical points 10pt apart on a phone are
not separately readable anyway — and the authoring tool should compute it from
the actual art aspect and refuse the click (§3). For a 1200×1600 portrait art
the horizontal bound tightens to `10 / 177 = 0.057`.

### 2.6 A gate change this needs, and its fixture

`scripts/verify-render.mjs`'s `boundsOf()` has cases for `Path`, `Circle`,
`Line` and `Rect` and **no case for `Image`** — it returns `null`. Consequences
for a figure whose only large element is the art:

- assertion 1 (`renders nothing`) — the art does not count as drawn;
- assertion 2 (ink coverage) — computed from leader `Line`s and label `Rect`s
  alone. Worse than failing: with plates spread across the art the union bbox
  approximates the art's, so the figure **passes for the wrong reason**;
- assertion 3 (out of bounds) — an art placed off-board is not checked at all.

**PROPOSAL:** add `case 'RNSVGImage': case 'Image':` to `boundsOf`, reading
`x/y/width/height` exactly as the `Rect` case does. With it, a 1600×1200 art
covers 63.7% of a 900×430 board and 91.7% of a 343×236 one — clear of the 5%
error and 20% warn lines.

Per `small-screen-rendering-rules.md`'s standing rule — *"an assertion with no
failing fixture checked in is an assertion trusted on the strength of having
been written"* — this change ships with `test/fixtures/image-off-board.json`
alongside the seven fixtures already there, wired into
`scripts/verify-fixtures.mjs` with its expected exit code. Same change, not a
follow-up.

### 2.7 What gets rendered and gated

Six trees per figure: **3 board sizes × 2 languages**, via
`lib/widgets/__tests__/render-trees.test.tsx` and `scripts/verify-tree-dir.mjs`,
through `verify-render.mjs` unchanged. `495×270` and `343×236` are already the
two small boards that harness renders. A figure is not shippable until all six
exit 0.

---

## 3. The authoring flow

### 3.1 The tool

**PROPOSAL:** `tools/label-place/index.html` — a single local page, no server,
no build. It loads the mirrored art at intrinsic size, and a click emits
`{u: e.offsetX / img.naturalWidth, v: e.offsetY / img.naturalHeight}`.
`naturalWidth/naturalHeight` is the reason this is a browser page and not a
screen in the app: the DOM hands you the intrinsic size for free, and the
intrinsic size is exactly what §1.3 needs folded in.

The tool also, at click time:

- refuses a click within the §2.5 minimum separation of an existing anchor,
  computed from *this* art's aspect at 343×236, and says which label it is too
  close to;
- refuses a term over the §2.4 cap — 22 Latin characters, 17 Devanagari code
  units — and shows the count as you select;
- renders a live preview at 343×236 in both languages, because that is the box
  that fails.

### 3.2 Who clicks

A **subject author** — the person who writes the lesson — not an engineer. The
defect being prevented is a correct term on the wrong structure, and only a
biologist sees that. 132 of the 146 illustration rows are biology.

### 3.3 What stops a typo or a mispositioned label reaching a student

Four gates, in order. Each catches a different class, and the last one is the
only one that catches the class that matters most.

**Gate 1 — the term is selected, never typed.** A closed bilingual vocabulary
(**PROPOSAL:** `content/figure-terms.json`, keyed by term id, carrying `en` and
`hi`). Adding a term is an explicit edit to that file with a reason, reviewed
once. This kills the typo class outright: you cannot misspell a term you pick
from a list, and "Mitochondria"/"Mitochondrion" cannot both exist across two
figures. It also means the Hindi term is authored once by someone who reads
Hindi, rather than 59 times by whoever is placing dots.

**Gate 2 — `scripts/verify-figures.mjs` (PROPOSAL).** Schema, provenance (§4),
every `term` id present in the vocabulary, `side` present, term lengths within
the §2.4 caps, anchors within 0..1, anchor separations within §2.5, ≤ 10 labels,
art aspect matching `intrinsic_w/h` (§1.4).

**Gate 3 — the render gate.** Six trees through `verify-render.mjs` (§2.7). This
catches collisions, off-board text, the font floor and the stroke floor. It is
mechanical and complete for what it covers.

**Gate 4 — a second human, on the render, at 343×236.** A *different* subject
author from the one who placed the labels opens the rendered figure — not the
JSON — at the smallest board, in both languages, and signs off. This is the only
step that can catch "the leader line points at the wrong organelle", and no
script will ever catch it: `verify-render.mjs` can prove two labels do not
overlap and has no idea what either one is pointing at. The sign-off is recorded
as `reviewed_by` / `reviewed_at` in the figure record, NOT NULL, subject to the
same placeholder denylist as provenance (§4.2). An unreviewed figure does not
render; it is not a warning.

Reviewing the JSON instead of the render is the failure mode to name explicitly.
`{"u": 0.412, "v": 0.233}` is unreviewable by a human. The picture is reviewable.

---

## 4. Provenance

This project has had five provenance failures: `prompt_version`, `grounded`,
`topic_hash`, `page_start` hardcoded to `1`, and six documents cited that never
existed. Every one of them is the same bug — **a field that could be satisfied
by a plausible value nobody supplied.** The design below is aimed at that shape,
not at "remember to fill it in".

### 4.1 The record

```jsonc
"provenance": {
  "licence": "CC-BY-4.0",                    // closed enum, §4.3
  "licence_url": "https://commons.wikimedia.org/wiki/File:...",
  "licence_checked_at": "2026-09-05",        // ISO date, at the MIRRORED file
  "source_url": "https://commons.wikimedia.org/wiki/File:...",
  "author": "OpenStax College",
  "attribution": "OpenStax Anatomy & Physiology, CC BY 4.0",
  "arrived_labelled": "unlabelled",          // 3-valued, §4.4
  "syllabus_gap": []                         // §4.5 — [] is an assertion, not a blank
}
```

`licence_url` is separate from `source_url` on purpose. `CLAUDE.md` §3a: *record
the licence AT THE MIRRORED FILE, never from the current site.* openstax.org now
serves CC BY-NC-SA site-wide while its older Commons mirrors remain CC BY,
because CC grants are irrevocable. A `source_url` alone does not say where
anyone read a licence. `licence_url` plus `licence_checked_at` says a human
looked at a specific page on a specific day.

### 4.2 The checks that fail loudly

`scripts/verify-figures.mjs` (**PROPOSAL**), non-zero exit, no warn tier for any
of these:

1. **No defaults anywhere.** Not in the schema, not in the ingest tool, not in a
   TypeScript type. `page_start: 1` failed *because a default existed* — the
   field was always populated, so it was never missing, so nothing ever
   complained. The ingest tool refuses to construct a partial record rather than
   completing one.
2. **Placeholder denylist**, case-insensitive, on every string field:
   `unknown`, `n/a`, `na`, `tbd`, `todo`, `-`, `–`, `null`, `none`, `?`,
   `public domain?`, `unclear`, `various`, `see source`, plus the empty string
   and whitespace-only. A `NOT NULL` column stops `null`; it does not stop
   `"unknown"`, and `"unknown"` is what actually gets typed.
3. **`licence` is a closed enum** (§4.3), not a free string. An unusable licence
   is not a *value with a warning* — it is not a member of the type, so it
   cannot be entered and then argued about.
4. **Aspect check** (§1.4): recorded vs. actual, 0.5% tolerance.
5. **Fixtures that fail.** `test/fixtures/figure-missing-licence.json`,
   `figure-placeholder-author.json`, `figure-sharealike.json`,
   `figure-recropped.json` — checked in beside the seven existing fixtures and
   run by `scripts/verify-fixtures.mjs` with expected exit codes, in the same
   change that adds the checks. This is the standing rule in
   `small-screen-rendering-rules.md`, and it is there because a font-floor
   assertion was live for one commit and matched nothing.

Wire `verify-figures` into `npm run verify` alongside `verify:fixtures`,
`verify:render` and `verify:plans`.

### 4.3 The licence enum

```
CC0-1.0 | CC-BY-4.0 | CC-BY-3.0 | CC-BY-2.5 | PD-US-gov | PD-old-70
```

That is the whole list. No `CC-BY-SA-*` and no `*-NC-*` member exists, so
share-alike and non-commercial art cannot be recorded, let alone shipped —
`CLAUDE.md` §3a's **authorship, not fame** rule made unrepresentable rather than
documented. NCERT figures are all-rights-reserved: never reproduced, traced or
redrawn from, and there is no enum member that could describe one.

### 4.4 `arrived_labelled` is three-valued, not a boolean

```
"unlabelled" | "labelled_usable" | "labelled_unusable"
```

A boolean cannot describe the PD cockroach plate labelled only "A head, B
thorax, C abdomen". It arrived labelled *and* is unusable, and those are the two
facts anyone triaging the queue needs. `labelled_unusable` is a **sourcing**
verdict, not a labelling task (§6).

### 4.5 `syllabus_gap` is non-null and often empty

An array of structure names the syllabus requires that the art does not draw —
`["mesosome"]` for the OpenStax prokaryote. `[]` is a valid value and means "an
author checked and found none"; `null` and a missing key are both hard errors.
The distinction between "checked, nothing found" and "nobody looked" is the
entire content of this field.

---

## 5. Bilingual

Both languages exist in `term` from the first record. The app already loads
`AnekDevanagari_500Medium` (`app/_layout.tsx:20,59`; used today at
`components/classroom-chrome.tsx:410`), so there is a real Devanagari face to
set `fontFamily` to.

### 5.1 The layout consequence: one language at a time

Stacking `en` over `hi` doubles each label's vertical footprint:
`2 × 13.8 + 4 = 31.6pt` per label. Ten labels split across two columns need
`5 × 31.6 = 158pt` per column against 216pt of usable height at 343×236 — 73%
occupancy, before any de-collision displacement, against the 41% that keeps
leaders short. Twelve labels overflow the column outright.

**So the widget renders one language at a time**, selected by a `lang` param.
Both terms ship in the payload; one is drawn. The gate then runs per language
(§2.7), which is the point: **a figure that passes in English can fail in
Hindi**, and running only the English tree would never show it.

### 5.2 The width model does not know about Devanagari, and that is a live risk

`chrome.ts` `CHAR_W = 0.58` is *deliberately* the same constant
`verify-render.mjs` uses, so the widget and the checker cannot disagree. Both
compute width as `s.length * fontSize * 0.58`, script-blind, on JavaScript
`String.length` — UTF-16 code units.

For Devanagari that model is wrong in both directions at once:

- **Over-counts.** Below-base and above-base matras have zero advance width.
  `मूल` is 3 code units (`म` + `ू` + `ल`) and about 2 advance widths. `क्ष` is 3
  code units and renders as one conjunct ligature.
- **Under-counts.** Devanagari base glyphs at 12pt are wider than the Latin
  average `0.58` was fitted to, and the shirorekha runs the full advance.

The errors partly cancel, unpredictably, per string. **That means the fix is not
a retuned constant** — no single multiplier is right for both `मूल` and a
conjunct-free 8-syllable term.

Which direction is dangerous matters. Under-estimating width makes
`verify-render.mjs` **under-report collisions** — it passes, and two labels
overlap on a device. Over-estimating fails loudly and costs only a shorter term.
So:

**PROPOSAL, and it is unmeasured:** `CHAR_W_DEVA = 0.75` — a deliberate
over-estimate on code-unit length — used by both the widget and the checker for
any string containing U+0900–U+097F, yielding the 17-code-unit cap in §2.4.
Nobody has measured Anek Devanagari's advance widths at 12pt. Until someone
does, `0.75` is a guardrail, not a measurement, and it should not be described
as one anywhere. The real fix is a measured per-glyph table checked in with a
fixture that fails against the Latin model — until then this section is the
honest statement of a known gap, which is what §8 of `CLAUDE.md` exists to
prevent us from skipping.

---

## 6. What this does not solve

Stated plainly, because a spec that implies more coverage than it has is how the
149 figures get planned as one job.

1. **The 65 commissions.** No art, nothing to label. A label layer over nothing
   is nothing. These need a budget and an illustrator, and this document does
   not touch them.

2. **Curriculum mismatch — the mesosome.** A label can only name a structure the
   art actually draws. Placing "mesosome" on an OpenStax prokaryote that does
   not draw one is **fabrication**, and worse than an absent figure, because it
   asserts a structure at a position the art does not support. The hard rule:
   *a label must point at a structure visible in the art.* Nothing enforces it
   automatically — `verify-figures.mjs` can check that `syllabus_gap` was filled
   in, and only gate 4's human can check whether it was filled in *correctly*.
   A figure whose `syllabus_gap` includes an NCERT-required structure is a
   **commission**, not a labelling job, and belongs in bucket 1.

3. **A badly-labelled PD plate.** "A head, B thorax, C abdomen" is burned into
   the pixels. We do not modify the art — that is the premise of the whole
   design. Adding our layer on top yields two competing label systems on one
   image. So `labelled_unusable` art is rejected at **sourcing**; it is not an
   input to this pipeline. Same for a staged clinical sign, which is a
   photograph problem, not a text problem.

4. **Whether a label points at the right thing.** `verify-render.mjs` proves two
   labels do not overlap. It has no concept of what either one names. Gate 4 is
   a human, deliberately, and its throughput is the real constraint on 59
   figures.

5. **Non-point structures.** `anchor` is a point. A tissue *layer*, a *boundary*,
   a *region* — the epidermis, the pleural cavity — has no single right point. A
   `region` shape (polyline or box) is a plausible extension and is **out of
   scope here**; today the author picks a representative point and gate 4 either
   accepts it or the figure is deferred.

6. **Leader-line crossings.** No assertion exists for line-on-line crossing, and
   §2.6 does not add one. Two leaders can cross, or a leader can run straight
   through the structure it points at, and all six trees will exit 0. `side` is
   the author's tool against this and gate 4 is the only check.

7. **Devanagari width.** §5.2. Unmeasured, guardrailed, open.
