# Small-screen rendering rules for board widgets

Applies to all 19 widgets. Read this before writing any layout math in a new
widget, and check an existing one against it whenever it's touched.

### The frame rule: a widget is never authored at a canvas size and scaled down

Found building `field_lines@1` and rendering it at real handset board sizes —
it is a defect class, not a `field_lines`-specific bug, and it applies to all
19 widgets.

A widget takes the MEASURED `width`/`height` it is given and computes its own
geometry from them:

```ts
const S = Math.min((W - 2 * PAD) / world.w, (H - 2 * PAD) / world.h); // px per metre
```

Every geometric constant in a widget is one of exactly two kinds, and they must
never be confused:

- **World constants** — the subject's own units: metres, seconds, moles. They
  define what the diagram must contain, and they SCALE with `S`.
- **Chrome constants** — device points: label font size, note font size,
  charge/node glyph radius, stroke weight, arrowhead length and half-width, the
  gap between a glyph and where a line may start. They NEVER scale — they are
  the same 12px label whether the board is 343pt or 680pt wide (see "Board
  sizes to check against" below — none of the numbers this app checks against
  are portrait; the classroom is landscape-only).

**`viewBox` units are neither, and are the trap.** A label sized in `viewBox`
units looks identical at every zoom level in a design tool and is a different
number of real points on every device that renders it. This is exactly the
kind of confusion `metresToPx` in `projectile-motion/physics.ts` was written
to prevent for the world/pixel boundary — the same discipline has to extend to
chrome constants, which `metresToPx` says nothing about.

**The bug this rule prevents.** `field_lines` seeded its streamlines on a ring
of radius 0.03 m around each charge — a WORLD constant standing in for what
should have been a chrome offset. At desktop scale that ring sits 16px out,
clear of the 13px charge glyph. At this app's real small-screen box (SE
landscape, 495×270 after gutters — see below) the same 0.03 m collapses to
10px, so every line starts UNDERNEATH the glyph and appears to emerge from
nowhere. The fix is to express the offset as a device distance and convert
back into world units at render time:

```ts
const seedR = (D.glyphR + D.seedGap) / S; // metres, derived from points, not the reverse
```

**Any widget with a "just outside the marker" offset has this bug latent in
it** — force arrows off a body, labels off a node, tick marks off an axis, a
velocity vector's origin offset from the point it describes. Audit for this
specifically when reviewing a new widget, not just for "does it render".

**What does not survive a small screen: line and mark DENSITY.** Where the
count of something is the teaching point — `field_lines`' line count is
proportional to charge, and that proportionality IS the lesson — it cannot be
thinned adaptively for a small board, because thinning it changes what the
diagram is teaching. The fix is a schema cap enforced in `validate()`, not a
rendering-time decision: `field_lines`' `charge_uc` is bounded at 20, and the
narration makes its point by doubling 8→16 rather than running to the top of
the declared range. **Where density carries meaning, cap the parameter in the
schema. Do not thin the render.**

**Board sizes to check against.** Two numbers, checked deliberately, on
purpose, even though they disagree about what "the small case" is:

| Name | Width×height (pt) | Where it comes from |
|---|---|---|
| `real-small` | **495×270** | Derived from this app's actual live-classroom layout code (`components/classroom-chrome.tsx`'s `BOARD_LEFT=56`, `app/live-classroom.tsx`'s `BOARD_RIGHT_GUTTER=116`, `diagramBox.maxHeight = boardHeight * 0.72`) against a real iPhone SE landscape window (667×375pt, Apple's documented point dimensions). This is what the shipped classroom actually hands a widget today. |
| `spec-small` | **343×236** | This document's own original reference number for an iPhone SE board — the one the small-screen worked example below is written against. The classroom is landscape-only, so this does not correspond to a real portrait slot in this app. Checked anyway: if the two numbers disagree about what counts as "small", that is worth having on record rather than silently picking one. |

Both are rendered and checked by `lib/widgets/__tests__/render-trees.test.tsx`
and `scripts/verify-tree-dir.mjs` for every widget in the registry — see
"Verification at corpus scale" in `CLAUDE.md`.

Neither is a portrait number, and there is no "landscape is the wide case,
portrait is the small case" axis to worry about here the way a
portrait-capable app would have — every configuration this runtime renders
into is landscape. iPhone 15 Pro landscape (852×393pt window → **680×283** box
after the same gutters) is the wide case; the aspect range to design against
is roughly 1.8–2.4. A widget whose natural world extent is much squarer than
that range will still letterpad at the wide end; declare a per-configuration
world extent rather than one fixed aspect for the whole widget if that matters
for a specific diagram.

## Worked example: the reference widget had this bug

`projectile-motion/index.tsx` — the file this document and `CLAUDE.md` both
tell you to pattern-match — shipped exactly the defect class this rule warns
about, in its own author's words: *"Both those bugs are mine — I wrote that
file."* Two bugs, found by the render harness's small-screen assertions, not
by inspection:

**1. A font size computed as a fraction of view width, clamped 9–13:**

```ts
const tickFont = Math.max(9, Math.min(13, width * 0.014));
```

Run across every board width this rule actually cares about:

| Board width (pt) | `width * 0.014` | After `clamp(9, 13)` | ≥ 11px floor? |
|---:|---:|---:|:---:|
| 343 (`spec-small`) | 4.80 | 9 | no |
| 361 | 5.05 | 9 | no |
| 495 (`real-small`) | 6.93 | 9 | no |
| 734 (15 Pro landscape) | 10.28 | 10.28 | no |
| 900 (this checker's default board) | 12.60 | 12.60 | yes |

**It fails at every width a real device in this app actually has, and passes
only at a width no phone is.** On real hardware the clamp does all the work
and the multiplier never operates — it is a hardcoded 9 wearing a responsive
costume. This is a cleaner illustration of why the rule exists than a
hypothetical would be, which is why it is recorded here rather than just
fixed silently.

**2. A stroke width that never scaled at all, and was simply too thin:**
gridlines were `strokeWidth={1}` everywhere, below any floor this checker or
this document would accept, at every board size — not a scaling bug, just an
unexamined value.

**The fix was not to retune the formula — it was to delete it.** Three
independent fixed device-point constants replaced the one shared,
multiplier-derived `tickFont`:

```ts
const TICK_LABEL_SIZE = 12;
const AXIS_TITLE_SIZE = 12;
const READOUT_SIZE = 14;
const GRIDLINE_STROKE = 1.5;
```

Chosen by rendering the actual widget at `spec-small` (343×236) and comparing
candidates directly — not by picking whatever clears the checker's floors.
**11px and 1.2 stroke are floors, not targets**: a widget sitting exactly on a
floor has zero margin against the next rounding difference, font substitution,
or reviewer's second-guess. `12`/`1.5` were chosen because they read
comfortably past both floors, not because they are the minimum that passes.

## Every assertion needs a fixture that fails it

The font-floor check above was live in `scripts/verify-render.mjs` for one
commit **and matched nothing** — `els.filter(isText)` was passing whole
element objects to a function that compares against a type string, so the
filter was silently empty and the assertion always passed. It was only caught
because a real widget's small-board render had errors an eyeball could see
were missing, not because the checker caught its own bug.

So: `test/fixtures/` carries one fixture that **fails** each assertion this
checker has, alongside the ones that pass — `font-too-small.json`,
`stroke-too-thin.json`, `glyphs-too-close.json` for the small-screen
assertions specifically — and `scripts/verify-fixtures.mjs` runs every one of
them and asserts the exact expected exit code, wired into `npm run verify`. An
assertion with no failing fixture checked in is an assertion trusted on the
strength of having been written, which is exactly the failure mode this
section describes. Adding assertion 9 to the checker someday means adding a
fixture that fails assertion 9 in the same change — not a follow-up, not
optional.


