# Note for the owner of `lib/widgets/board-continuity.ts`

**What changed (one line plus a helper):**
`boardSignature` used to identify a stored SVG as `svg:<length>:<first 200 chars>`.
It is now `svg:<length>:<FNV-1a hash of the whole SVG>`.

**Why:** two different figures can share a length and a 200-character
prefix. They're the same XML header, `viewBox` and opening shapes, which is
common for figures drawn to one house style. Your continuity rule then treats
them as one board, so the second figure is never drawn. The sweep found a real
case in held Probability (`complementary-events-and-at-least-one-problems`,
segments 2 → 3): both figures are 2,774 characters and identical for the first
205. The chapter is held, so no student has seen it yet. The 847 new stored
figures follow one style closely, which makes more collisions likely.

**What stays the same:**
- Widget, board-sequence and illustration signatures are untouched.
- An identical SVG sent twice still collapses into one draw, as the rule
  intends. That case is tested.
- The helper is dependency-free (a 32-bit FNV-1a over UTF-16 code units,
  `Math.imul`), so it runs the same in Hermes and in Jest.

**Side effect:** the signature doubles as the React key for a board row, so
an SVG board's key changes format once. There's no persisted state keyed on
it.

**Mirror:** `scripts/class_sweep.py` in the API repo keeps a Python copy of
`boardSignature` to count repeated boards offline. It was updated in the same
change to `_fnv1a_u16`, and the two were checked to agree character for
character, surrogate pairs included. If you change the signature again,
please change that copy too, or the sweep's cross-check will flag every SVG
board.

Tests: `lib/widgets/__tests__/board-continuity.test.ts` → "two different SVGs
are never the same board".
