# Ask: tell the client which earlier board lines a sentence is talking about

**One optional field on `audio_chunk`. Nothing else changes, nothing breaks if it's absent.**

## What we want to build

When Drona says *"…and remember the speed of light is 3 × 10⁸ metres per second"*,
and that value is already written on the board from two minutes ago, we want that
line to light up while she says it, then settle back.

Right now we can't, and it's the only thing missing.

## Why we can't, today

`audio_chunk` already gives us almost everything. Per sentence we get:

| field | what it is |
|---|---|
| `sentence_id` | the sentence |
| `speech` | the words being spoken |
| `board_event` | the board line **this sentence introduces** |
| `duration_ms` | how long the clip runs, measured from the synthesised PCM |

That's genuinely good — we know what's being said, what it writes, and for
exactly how long. We already use it to reveal each line at the moment its
sentence starts playing.

The gap is that `board_event` only ever names the line a sentence **creates**.
Nothing ever says *"this sentence is about seq 7, which I wrote earlier."* So a
sentence that refers back to existing writing carries no pointer, and the client
has no way to know what's being discussed.

We tried building the highlight without it. It technically worked and was
invisible, because a line is written at the moment its sentence begins — so
"the line being spoken" is always the newest line, and nothing already on the
board ever lights up. Removed it again.

## The ask

On `audio_chunk`, an optional array of board `seq` numbers this sentence refers to:

```jsonc
{
  "sentence_id": "…",
  "speech": "and remember the speed of light is 3 times ten to the eight metres per second",
  "board_event": null,          // this sentence writes nothing new
  "duration_ms": 4120,
  "refs": [7]                   // <-- it is TALKING ABOUT line 7
}
```

- `refs?: number[]` — board `seq` values already sent this session.
- Omit it, or send `[]`, when a sentence refers to nothing. **Absent must stay
  legal** — we'll ship the client so an older server behaves exactly as now.
- It can coexist with `board_event`: a sentence may write a new line *and* refer
  back to an earlier one.
- Order doesn't matter; duplicates are fine.
- If a `seq` is unknown to the client, we ignore it rather than erroring.

## Where it probably comes from

The planner already decides what each sentence says about what. If the segment
prompt knows it's referencing an earlier board item, that's the place to emit the
`seq`. If it's easier to infer than to author, even a rough match would be worth
having — a highlight that's right most of the time still beats none.

## What it's worth

This is the difference between a lesson that scrolls past and one that points at
itself while it explains. It's the single highest-value thing we could add to the
board right now, and the client work is small — the highlight code was already
written once and the note marking where it goes is in `BoardLine` in
`app/live-classroom.tsx`.

## Not urgent, and not a blocker

Everything works without it. This is additive.
