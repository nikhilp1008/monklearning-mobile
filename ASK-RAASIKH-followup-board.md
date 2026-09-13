# Ask: let a follow-up answer say it has nothing to write on the board

**One rule in `prompts/snap_followup.md`. No schema change, no route change, and
the client already behaves correctly if you do nothing.**

## What happens now

The Ask Follow-up bar on a doubt is a microphone, and students talk into
microphones. Not every press is a question:

> "Hi."
> "Can you hear me?"
> "Wait, one sec."
> "How are you."

`/doubts/{id}/ask-voice` answers all of them, which is right — the teacher
should reply. But the prompt asks for `{"spoken": …, "steps": […]}` every time,
so the model writes a step for "hi" as well, and on the phone a written step is
what raises the answer board over the student's solution.

The result is a board that appears when you say hello. Reported from the
simulator and from a device: *"even though I didn't ask any doubt. Even if I say
'hi', it pops up."*

## The ask

In `snap_followup.md`, under the shape of an answer: **when the student's
message is not about the working, return `"steps": []` and answer in `spoken`
alone.**

Suggested wording, in the voice of the rest of that file:

> **Some messages have nothing to write down.** "Hi", "can you hear me", "one
> sec", "thanks" — answer them in `spoken` and return `"steps": []`. The board
> exists for what the ear cannot hold, and a student who said hello is not
> waiting to read anything. A step written for a greeting puts a panel over the
> solution they were looking at, which is worse than not answering at all.

The prompt already has the principle it follows from — *"Keep only what the voice
cannot carry"* — this just makes the empty case legal and explicit.

## What the client does

Nothing new is needed: the sheet has always required at least one step, so
`steps: []` keeps it shut on its own.

Because we could not wait for this, the phone now judges it from the
TRANSCRIPT — what the student said, not what came back. That is in
`lib/followup-board.ts` with the test beside it.

Reading the answer was tried first and did not survive contact. Asked "hello
wassup", the model wrote:

```
1. Ball thrown up at 29.4 m/s; find max height.
2. Ask away — which step is bugging you?
```

Two steps, carrying the question's own numbers, indistinguishable from a real
explanation by any reading of them. The question is distinguishable instantly,
so that is what the phone reads now — word lists for English and Hinglish, a
small-talk list, and the words the utterance borrows from the page.

It is a list of words standing in for something you know for certain, and it
will be wrong sometimes. If the prompt rule lands it stops being the thing
deciding and becomes a backstop.

## Not urgent, and not a blocker

Voice answers are unaffected either way. Nothing breaks if this never ships.

---

## Separately — the client is behind on the follow-up stream

Noticed while reading `origin/main`, not part of the ask above.

`_followup_response` now sends the voice **inline**, as `audio` frames on the
same stream, marks `spoken` with `"voice": "inline"`, and closes with `answered`
and `voice_done`. The phone still ignores all four and makes a second request to
`/speak-stream` after `spoken` arrives — the exact round trip the inline path was
built to remove, paid in silence in front of the student.

That is ours to fix, not yours. Flagging it so you know the saving is not being
collected yet.
