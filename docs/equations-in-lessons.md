# Equations in lessons

Two decisions that block corpus-wide precompute and block nothing before it.

Everything proposed here is marked **PROPOSAL**. Everything stated as fact was
read in the file cited. Nothing is cited that was not opened — see
`lib/widgets/CLAUDE.md` §8 for why that rule exists here.

**The premise, not re-derived:** the book corpus is 67.5% damaged, concentrated
entirely in mathematical notation (biology prose is fine; maths/physics/chemistry
are 77–80%). A Mathpix re-extraction is authorised. Chunks will soon carry
**correct** equations, plausibly as LaTeX. That is the good outcome. Both
decisions below exist because of it.

Neither decision blocks the re-extraction, the widget backlog, or any lesson
shipping today. Both block **corpus-wide precompute**, because precompute bakes
the output in: ~9,200 board events and their narration are generated once and
replayed forever, so a wrong answer to either question is a wrong answer 9,200
times.

---

## 0. What is already true (measured, in this repo)

Six things, all verified by reading the code, because three of them contradict
what the brief assumed.

1. **`boxed_derivation` exists.** Not in this repo — in the API, as a
   server-rendered SVG template: `monk-learning-api/app/drona/diagram_templates.py:492`,
   registered in `TEMPLATES` at line 1715, prompted for in `prompts/tutor.md:87`
   and cued in `app/drona/tutor.py:115`. §2.1 covers what it currently means.

2. **The app already renders LaTeX without KaTeX.** `lib/latex-text.ts` (623
   lines) converts a real subset of LaTeX to Unicode; `latexToSegments` +
   `components/math-line.tsx` render stacked fractions and Unicode-unspellable
   sub/superscripts as actual views. `app/live-classroom.tsx:1171` already runs
   every board line through `latexToText`.

3. **`katex` and `mathjax` are absent from `package.json`.** `react-native-webview@13.15.0`
   is present and is load-bearing for the molecule widget only.

4. **The caption and the spoken text are the same string.** `live_session_ws.py:394`
   and `:427` send `"speech": clean_text` in the `audio_chunk`;
   `lib/drona-voice-client.ts:204` and `:564` route it to `onCaptionReveal`.
   `clean_text` is *post*-sanitiser — the caption strip shows what the ear got.

5. **Delimiters are not read aloud today.** `voice_proxy.py:590` strips
   `{ } $ * # \`` outright before synthesis. The brief's stated failure mode is
   already handled. §1.1 is about a worse one.

6. **"Snap-only when the moving geometry is label-terminated" is not documented
   in `lib/widgets/CLAUDE.md`.** Grepped: 453 lines, no "snap-only", no
   "label-terminated". What *is* there is the readout-ordering paragraph in §3
   ("animating SVG `<Text>` content per frame, which `react-native-svg` does not
   make cheap") and the §6 checklist line "Reduced-motion honoured: cue tweens
   collapse to snaps." The conclusion follows from those two; the rule as phrased
   has never been written down. Flagged rather than repeated, per §8.

---

# Decision 1 — Equations in narration

## 1.1 The actual failure mode

The concern is that LaTeX in `speech` gets spoken. The real risk is narrower and
worse: **a server-side rewriter already runs, it is lossy, and its losses are
silent.**

`check_tts_safety_filter` (`voice_proxy.py:571`) is called on every sentence
bound for Rumik (`live_session_ws.py:522`, `:625`, `:641`). It runs
`_latex_to_speech` then `_notation_to_speech`, then strips delimiters. The
unknown-command branch is `voice_proxy.py:558-564`:

```python
else:
    # Unknown command (or a pure wrapper like \ce, \vec): drop the
    # markup, keep what it wrapped.
    if name not in _LATEX_UNWRAP and not args:
        pass
```

A command that is not in `_LATEX_SYMBOL_WORDS`, not in `_LATEX_UNWRAP`, and
carries no brace arguments is **dropped with no trace**. `\int`, `\sum`, `\lim`,
`\oint` and `\prod` are all absent from both maps (grepped). Worked through, for
`\int_0^t a\,dt`:

| stage | text |
|---|---|
| model emits | `\int_0^t a\,dt` |
| `\int` — no args, unknown | dropped |
| `\,` — backslash + non-alpha, `name` empty | dropped (`voice_proxy.py:533`) |
| `_notation_to_speech` `_0` | ` 0 ` |
| `_notation_to_speech` `^t` | ` to the power t ` |
| **spoken** | **"0 to the power t a, dt"** |

The integral sign is gone and its limits have been re-read as an exponent. This
is not a degraded reading of the statement; it is a different statement. Tier-1
logs a warning (`voice_proxy.py:583`) and proceeds.

Today this is rare — the corpus's maths is damaged, so the planner has little
correct notation to copy. **Mathpix removes exactly that accident.** The leak
rate goes from "the model occasionally improvises markup" to "every maths-bearing
chunk carries it, correctly." Volume is the whole change.

## 1.2 The options

### (a) Harden the server-side LaTeX→spoken transform

**Where it lives.** It already lives at `voice_proxy.py:513-593`. This option is
not "build a transform"; it is "close three named holes in the one that ships."

**Cost.** One Python file. `_LATEX_SYMBOL_WORDS` gains entries; `\int` / `\sum` /
`\lim` need handling *before* the generic `_` / `^` pass so their limits are read
as limits; the silent-drop branch becomes a logged drop. No schema change, no
wire change, no client deploy, unit-testable against `tests/drona/`.

**How it fails.** It is a rewriter over an unbounded input language, and its
coverage is unfalsifiable — you cannot enumerate what the model will emit next.
More fundamentally it produces **one string serving two organs**: "1 over 2 mv
squared" is correct for the ear and wrong for the caption strip, and no amount of
hardening changes that.

**Interaction with `spoken-math.ts`.** None — and that is the problem. Hardening
(a) makes `spoken-math.ts` *more* necessary, not less: better LaTeX→speech means
more spelled-out English prose in the caption for the client to un-spell.

### (b) The planner emits both a spoken form and a display form per segment

**Where it lives.** Four sites: `prompts/tutor.md` (a `speech_display` sibling to
`speech`), the turn schema in `app/drona/tutor.py`, the `audio_chunk` payload in
`live_session_ws.py:391-395`, and the client at `lib/drona-voice-client.ts:564`
→ `app/live-classroom.tsx:506`. Each change is small; there are four of them, and
the wire field must be optional so an older server still works — the pattern
`drona-voice-client.ts` already uses for `durationMs` (`:547`).

**Cost.** Doubles the model's output on every maths-bearing sentence, in a prompt
(`prompts/tutor.md`) that already carries a long list of things the model gets
wrong under load.

**How it fails.** Two channels can disagree, and **nothing here would make them
agree.** `lib/widgets/CLAUDE.md` §3a's answer to that class of bug is
`{{derived}}` tokens — but those guard *numbers in cue captions*, computed once
by `computeDerived` and read by both the readout and the caption
(`lib/widgets/types.ts`, `WidgetModule.derived`). A display caption is prose.
There is no derived value for two prose renderings of one sentence to share, so
`alignment-lint.ts` would need a genuinely new mechanism, not an extension.

**Interaction with `spoken-math.ts`.** (b) **supersedes it entirely**, and
`lib/spoken-math.ts`'s own header says so: *"it is safe to delete the day the
server sends notation itself."* If (b) ships, `lib/spoken-math.ts` and
`lib/__tests__/spoken-math.test.ts` are deleted in the same change. Yes — this is
a client-side display patch that a server-side display form makes redundant.

### (c) Take the display form from the board, which already has it

**PROPOSAL.** The correct notation for a maths sentence is already on the wire,
in the same frame, keyed to that sentence.

`prompts/tutor.md`'s Formula Mirroring rule requires it: *say "speed ka formula
hai length divided by time" → board `\text{speed} = \dfrac{L}{T}`*. Board events
carry `seq` = the 1-indexed sentence in `speech`, and `live_session_ws.py:378-380`
already pairs the chunk with its `matching_evt`. `lib/drona-voice-client.ts:571`
already stores `{ speech, boardEvent, durationMs }` together per playback id.

So: **when the chunk being revealed has a paired board event of type `formula`,
the caption strip renders that event's `latex` — through `latexToText`, or
`MathLine` for real fractions — instead of the spoken string.**

**Where it lives.** `app/live-classroom.tsx:506`, one `useMemo`. Client-only.

**Cost.** Near zero. No prompt change, no server change, no new agreement
problem: the two channels are bound by a rule that already exists and is already
prompted for.

**How it fails.** Coverage. Board density is capped by the plan's `board_content`
count, so only some maths sentences have a paired formula event. It fixes the
sentences where the formula *is* the point and leaves the rest as they are. It
also trusts the mirroring rule, which nothing enforces.

**Interaction with `spoken-math.ts`.** Supersedes it for formula-paired sentences
only. Prose sentences like *"about 6 times ten to the power 24 kilograms"* carry
no board event and still need it. **Under (c), keep `spoken-math.ts`.**

### (c2) Instrument before spending

**PROPOSAL.** `check_tts_safety_filter` already returns `tier1_viol` and
`tier2_viol` and already logs (`voice_proxy.py:579-583`). Count them per 1,000
sentences and record it alongside `rumik_requests` (`tutor.py:1833`), before and
after the Mathpix re-extraction lands.

This is the same posture `BoardWidget`'s `onGap` takes for tier-3 renders: *"Tier
3 is a measurement, not a failure"* (`lib/widgets/CLAUDE.md` §2). The tier-1 rate
is the number that says whether (b) is worth its four sites.

## 1.3 Recommendation

**Do (c) + (c2) + the three named holes in (a), now. Hold (b) until the
instrumentation says the rewriter is losing.**

Reasoning:

- (a)'s holes are **named and verifiable** — `\int`, `\sum`, `\lim` are absent
  from both maps and are exactly the constructions Mathpix will start delivering
  from maths and physics chapters. Closing three specific gaps is a different
  proposition from "improve LaTeX handling," and only the first is schedulable.
- (c) removes the caption problem where it matters most, client-only, using a
  binding the prompt already asserts. It is the cheapest thing on this page.
- (b) is the durable answer and I am not arguing against it. I am arguing against
  paying for it before (c2) has produced a number. A prompt field the model
  populates inconsistently is worse than no field, and this prompt is already
  long.
- Doing (a) *alone* actively worsens the caption, which is the trap: it looks
  like progress on the ear and is a regression for the eye.

## 1.4 The hard cases, concretely

**"x squared" vs "x to the power 2" — already decided, already correct.**
`_POWER_WORDS = {'2': ' squared ', '3': ' cubed '}` (`voice_proxy.py:456`), read
by `_sup` in `_notation_to_speech`. So `x^2` and `x^{2}` both give "x squared";
`x^4` gives "x to the power 4"; `x^{n+1}` gives "x to the power n plus 1"
(the `-`/`+` are spaced on both sides at `:500`, deliberately). **Do not extend
the map past 3.** "x to the fourth" is more natural English and less certain
speech, and a tutor says both forms anyway.

The residue is a *display* problem, not a speech one: `x^{-2}` speaks correctly
as "to the power minus 2" and that string then appears in the caption.
`spoken-math.ts`'s `POWER_OF_TEN` fires only on a literal `10`/`ten`, so
`x^{-2}` is **not** covered by it and never was. Under (c) that sentence's
caption comes from the board and renders `x⁻²` via `latexToText`'s `SUPERSCRIPT`
table.

**Integrals with limits — the worst case, and currently broken.** Worked through
in §1.1: `\int_0^t a\,dt` is spoken as "0 to the power t a, dt". Same shape for
`\sum_{i=1}^{n}` → "eye equals 1 to the power en". Fix: handle `\int`, `\sum`,
`\lim` *with their `_a^b`* before the generic sub/sup pass — "the integral from 0
to t of a dee t", "the sum from i equals 1 to n of", "the limit as x tends to 0
of". Those three plus `\oint` are the entire Class 11–12 requirement; this is not
a general parser.

**Subscripted variables — right for letters, ambiguous for words.**
`_notation_to_speech` maps `v_x` → "v x", and `_apply_letter_phonetics`'s
`_LETTER_RUN` then spells both single letters → "vee ex". `E_k` → "ee kay".
Correct: a teacher says "E k". But `a_{net}` → "a net", where `_LETTER_RUN` needs
a single letter on *both* sides and `_LETTER_BESIDE_MATH` needs a formula word
after — "net" is neither, so the base stays a bare `a` and Rumik reads it as the
article. Cheapest correct fix: spell a single-letter base inside
`_notation_to_speech`'s subscript branch, where the code already knows it is a
subscript base, rather than hoping the later heuristic infers it.

**Units — the one case where the two-channel design already shipped.**
`prompts/tutor.md` already forbids symbol units in `speech` (*"kilojoules per
mole" not "kJ/mol"*) and requires the board to carry the symbol. The design is
already "ear gets words, eye gets notation." What is missing is only the client
honouring it — today the caption shows the spoken form, so a student reads
"metres per second squared" beside a board reading m s⁻². That is (c), exactly,
and units are the clearest argument for it.

---

# Decision 2 — Equations on the board

## 2.1 What renders a derivation today

**Two things do, and neither is a widget.**

**Path A — N sequential `formula` board events.** `app/live-classroom.tsx:1155`
takes `event.latex` for a `formula` event, runs it through `latexToText`
(`:1171`), and renders `<Text style={styles.boardEquation}>`. A derivation is
already expressible as N of these in the board's scroll. This path has no
height cap (the board scrolls), no widget gate, and no KaTeX. What it loses:
`latexToText` flattens non-numeric fractions to `a/b`, and `MathLine` — which
already stacks them properly (`components/math-line.tsx`) — **is not used on the
board.** `\dfrac{eE}{m}\tau` reaches a student as `(eE)/(m)τ` on a live drift-velocity
board; `lib/latex-text.ts:211` records that exact case.

**Path B — the server-rendered `boxed_derivation` SVG.** `diagram_templates.py:492`
builds a complete SVG; `tutor.py:1103`'s `_materialise_template` turns
`{template, params}` into a `{type: "diagram", svg}` board event; that reaches
`components/board-diagram.tsx` via `app/live-classroom.tsx:1196` and renders
through `SvgXml`. This is the thing the brief believed was a template name. It
is, and it draws.

So the honest answer to "can anything today render a derivation" is **yes, two
ways** — and the useful question is what they cost.

## 2.2 What `boxed_derivation` costs at 343×236 — the arithmetic

`boxed_derivation`'s geometry, read from `diagram_templates.py:492-537`:

```
w      = 500 (fixed)
chars  = 42 per line, max 2 lines per step (_wrap)
steps  = 2..7 (_sequence min_len=2 max_len=7), each capped at 80 chars
top    = 50 with a title, 26 without
gap    = 30 between steps
step_h = 16 + 20 * lines            -> 36 (1 line) or 56 (2 lines)
h      = top + sum(step_h) + 30*(n-1) + 26
fonts  = title 17, step 15.5, boxed final step 16
```

`components/board-diagram.tsx` fits it with
`width = min(availableWidth, maxHeight * aspect); height = width / aspect`, so

```
scale = min(availableWidth / 500, maxHeight / h)
```

At `spec-small` **343×236** the width term alone is `343 / 500 = 0.686`, so the
15.5pt step font lands at **10.63pt** — under `chrome.ts`'s `MIN_FONT_SIZE = 11`
before height is even considered. To clear 11pt you need
`scale >= 11/15.5 = 0.7097`, i.e. a board **at least 355pt wide**.
**No configuration of `boxed_derivation` reaches 11pt at 343.** It is 12pt short
on width, always.

At `real-small` **495×270** (the box the shipped classroom actually hands a
widget — `docs/small-screen-rendering-rules.md`) width gives 0.99 and height
binds: `270 / h >= 0.7097` → `h <= 380`.

| shape | h(n) | max n at 495×270 | schema allows |
|---|---|---:|---:|
| 1-line steps, no title | 66n + 22 | **5** | 7 |
| 1-line steps, with title | 66n + 46 | **5** | 7 |
| 2-line steps, no title | 86n + 22 | **4** | 7 |
| 2-line steps, with title | 86n + 46 | **3** | 7 |

Worst legal payload — 7 steps, 2 lines each, titled — is `h = 648`, aspect 500:648
(**portrait, on a landscape board**). `scale = min(0.686, 236/648) = 0.364`, so
the steps render at **5.6pt** and the title at **6.2pt**.

This is `lib/widgets/CLAUDE.md` §3's rule, violated: *"The schema's legal range
must be a SUBSET of what renders correctly."* The schema admits 7 steps; five is
the most that is legible on the real small board, and none are legible at 343.
The rule's remedy applies unchanged: **narrow the schema, never widen the gate.**

Two caveats, stated so nobody over-reads the table. `scripts/verify-render.mjs`
does **not** run on this path — it asserts over `react-test-renderer` trees of
registry widgets, and `boxed_derivation` is a server SVG string. The 11pt figure
is `chrome.ts`'s own legibility floor applied as a standard, not a gate result.
And 343×236 is `spec-small`, which `docs/small-screen-rendering-rules.md` records
as **not corresponding to a real slot in this landscape-only app** — it is checked
anyway, deliberately, and it is the number the brief asked for.

## 2.3 A native widget: the arithmetic that would bound it

**PROPOSAL**, sketched to be compared against §2.4, not to be built first.

*Horizontal*, at 343 with `PAD_EDGE = 10` each side → 323pt usable. Character
width is `fontSize * CHAR_W` with `CHAR_W = 0.58` — deliberately the same model
`verify-render.mjs`'s `textBox()` uses (`chrome.ts` says so, and assertion 4
depends on it):

| step font | pt/char | chars per line at 343 |
|---|---:|---:|
| `LABEL_SIZE` 12 | 6.96 | **46** |
| `READOUT_SIZE` 14 | 8.12 | **39** |

*Vertical*, at 236: minus `READOUT_BAND` (`14*1.6+6 = 28.4`) minus `PAD_EDGE` 10
→ **197.6pt**. Assertion 4 makes any two overlapping text boxes a hard error, and
the gate models a box as `h = fontSize * 1.15` (13.8 at 12pt). `docs/label-layer.md`
§2.3 already derived the row pitch from that: `ROW = fontSize * 1.15 + 4`, 4pt of
slack, *a margin not a floor*.

| step font | ROW | rows in 197.6 |
|---|---:|---:|
| 12 | 17.80 | **11** |
| 14 | 20.10 | **9** |

Budget them: 1 title row, 1 rule, and the boxed final step — a `Rect` of
`bandFor(12) = 25.2` against a plain 17.8 row, plus clearance, ≈ 2 rows. At 14pt
that leaves **6 intermediate steps, 7 total**; at 12pt, **8 intermediate, 9
total**.

A derivation is the primary object on its board, not a tick label, so 14pt. Per
*"floors, not targets"*: **cap at 6 steps of ≤36 characters** — 36 × 8.12 = 292.3
against 323 usable, 30pt of margin — rather than the 7 × 39 that exactly fits.

*Ink coverage.* `boundsOf()` has cases for `Path`, `Circle`, `Line`, `Rect` and
returns `null` for text, so a derivation contributes **nothing** to assertion 2.
`data-table-trend/index.tsx:255` hit this and says so in the code:

> `boundsOf` understands Path/Circle/Line/Rect but NOT text, so a table of pure
> text has a degenerate bounding box and fails the ink-coverage assertion despite
> rendering perfectly. Two rules at different y give the tree real extent.

A derivation hits it harder — a table at least has a grid. Drawn elements would
be: a full-width rule under the title (y≈40) and the `Rect` around the boxed final
step (y≈190). Union bbox 323 × ~175 = 56,525 of 343×236 = 80,948 → **69.8%**,
clear of the 5% error and the 20% warn. **One rule is not enough**: the box alone
is ~209 × 25 = 5,225 → 6.5%, which passes the error and trips the warn. The two
horizontal rules are load-bearing, exactly as in `data_table_trend`.

*Params sketch.*

```ts
{
  steps: string[];        // 2..6, each <= 36 chars post-latexToText
  title?: string;         // <= 28 chars
  boxed_index?: number;   // default steps.length - 1
}
derived: ['step_count']   // the only number a caption could want
animatable: []            // see below
```

*What is animatable: nothing.* The only motion a derivation has is **reveal** —
which line is showing. That is not geometry, and `lib/widgets/types.ts` is
explicit that `motion` "Drives geometry only." Reveal would have to animate SVG
`<Text>`, which `lib/widgets/CLAUDE.md` §3 declines to do for the readout on cost
grounds ("`react-native-svg` does not make cheap"). So `animatable: []`, and a
cue that changes the visible line count is a **snap** — which is also what the §6
checklist requires under reduced motion anyway. As noted in §0.6, the general
rule this instantiates is not written down in `CLAUDE.md`; if it is adopted it
should be written there rather than cited from here.

## 2.4 Can it consume LaTeX without KaTeX? — the crux

**Partly, and the partly is the whole answer.**

`lib/latex-text.ts` proves LaTeX is consumable without a browser: its header
records the measurement that retired KaTeX (24 sampled `/practice/next`
questions, 2026-08-16 — only 17% contained `$…$` at all, and the *only*
backslash commands present were `\frac` and `\circ`). `SYMBOLS` covers Greek,
operators, relations, arrows, `∫ ∑ ∏ ∮ ∂ ∇`, and `SUPERSCRIPT`/`SUBSCRIPT` cover
most scripts. For the *inline maths of one derivation line* — `v^2 = u^2 + 2as`,
`\dfrac{1}{2}mv^2`, `[LT^{-2}]` — this is enough, offline, in the app's own font.

What it cannot do, in its own words: *"Anything genuinely beyond Unicode's reach
(matrices, integrals with limits) degrades to readable linear text."* Plus two
documented gaps: non-numeric fractions flatten to `a/b`
(`latex-text.ts:198-203`), and the Unicode subscript alphabet has holes — no
subscript `y`, `b`, `c`, `d`, `f`, `g`, `q`, `w`, `z` — so `v_x` and `v_y` spell
differently *in the same sentence*.

Both gaps are already solved, and solved in **React Native views, not SVG**:
`latexToSegments` emits `fraction` / `sub` / `sup` segments and
`components/math-line.tsx` draws them with a `View` rule and a `translateY`.
`react-native-svg`'s `Text` has no equivalent — there is no stacked fraction in
an SVG widget without hand-laying-out three elements per fraction and then
defending them against assertion 4.

**So the answer is not "LaTeX or structured line-by-line." It is both, at
different levels:**

- **Structure the derivation** — an ordered list of steps, which is what
  `boxed_derivation(steps, title)` already takes and what `prompts/tutor.md:87`
  already prompts. Do not ask the model for an `align` environment or a
  multi-line LaTeX block; nothing here can lay one out.
- **Let each step be LaTeX**, consumed by `latexToText` / `latexToSegments`. The
  model already emits per-line LaTeX in `formula` board events today.

And that conclusion argues against the SVG widget. **An SVG `boxed_derivation`
widget would render *worse maths* than the board line already does**, because it
forfeits `MathLine`. The gate is not the reason to avoid it; the fractions are.

## 2.5 Recommendation

**PROPOSAL — do this on Path A, not as a registry widget:**

1. **Render board `formula` lines through `MathLine`, not `latexToText`.** One
   call site: `app/live-classroom.tsx:1206`, with `:1171`'s `latexToText` folded into it. `MathLine` already exists, is
   already used by the solution screens, and short-circuits to a single `<Text>`
   when a line has no fraction and no drawn script — so lines without maths are
   byte-identical to today. This alone fixes `(eE)/(m)τ` on a live board.
2. **Group consecutive `formula` events into a derivation block** — a rule above,
   a box on the last line — in the board renderer. No new widget, no new payload,
   no gate, no height cap, and it scrolls.
3. **Narrow `boxed_derivation`'s schema in the API** from `max_len=7` to `5`, and
   from 80 chars/step to a length that does not wrap to 2 lines at 42 chars.
   Per §2.2 that is the difference between legible and 5.6pt. `diagram_templates.py:494` (`_sequence(..., max_len=7)`) and `:495` (the 80-char `_label` cap).

Registry widget deferred, not rejected. Revisit it when the tier-3 gap queue says
derivations are actually arriving as `fallback_svg` — `lib/widgets/CLAUDE.md` §5:
*"Pick the next widget from the tier-3 gap queue, not from intuition."* Right now
they are not; they arrive as a template that draws.

---

## 3. What I would not do, and why

1. **Not reintroduce KaTeX, including as one shared WebView.**
   `lib/widgets/CLAUDE.md` §3 forbids the pattern by name, and
   `lib/latex-text.ts`'s header carries the measurement that justified removing
   it. A single shared instance would dodge the five-WebViews-per-MCQ cost and
   still fail *"Never fetch at render time"* and *"renders with the device in
   airplane mode."*

2. **Not make tier-1 a hard reject.** Refusing a sentence puts a hole in the
   lesson. This codebase is consistent on the trade —
   `diagram_author.py`: *"a missing diagram is a plainer lesson; a blocked turn
   is a broken one."* Instrument (c2), do not block.

3. **Not build a general LaTeX→speech engine.** JEE/NEET is a closed syllabus —
   the same premise `lib/widgets/CLAUDE.md` §2 uses to justify a fixed registry.
   Three constructions are missing. Add three.

4. **Not register a `boxed_derivation` widget while a server-rendered
   `boxed_derivation` ships.** Two things with one name that lay out differently
   is worse than either alone, and the model is already prompted for the server
   one at `prompts/tutor.md:87`.

5. **Not add an `Image`/text case to `boundsOf` for this.** The two-rules
   construction in §2.3 gives a derivation real extent honestly.
   `docs/label-layer.md` §2.6 proposes an `Image` case for a different reason (an
   art that genuinely is the ink); text is not ink and should not be counted as
   ink. *"When the two disagree, narrow the schema. Never widen the gate."*

6. **Not delete `lib/spoken-math.ts` yet.** Under the recommendation (c), it still
   covers prose sentences with no paired board event. Delete it the day (b) ships,
   as its own header instructs — not before.

7. **Not ask the model for a second prose channel before (c2) produces a number.**
   `prompts/tutor.md` is long and the model already drops rules under load. Add a
   field when a measurement says the rewriter is losing, not when it seems likely.

8. **Not write down "snap-only when the moving geometry is label-terminated" as
   though it were an existing rule.** It is not in `lib/widgets/CLAUDE.md`
   (§0.6). If it is adopted, it goes in `CLAUDE.md` §3 as a new rule with its
   reason — not cited from this document as though it had already been reviewed.
   That is the failure `CLAUDE.md` §8 exists to prevent.
