# Moments — encouragement, spec

Not built yet. This is the agreed shape of three features, written before any
design so the data and the wiring are settled first. Decided 2026-08-20.

The category name for all of this is **progression feedback**. Three pieces
were chosen out of a longer brainstorm; the rest are parked at the bottom with
the reason.

---

## The principle these three share

**We celebrate what a student has proven, not what they have clicked.**

This is not a slogan, it is the acceptance test. Most edtech celebrates
volume — "100 questions!", "7-day streak!". We can't, without contradicting
our own product: the Monk Score is explicitly defined as moving *"only when
you prove concepts on questions you've never seen"*. If the app throws
confetti for activity the score refuses to reward, the score stops meaning
anything, and the score is the whole promise.

So, three rules that every moment below must pass:

1. **It must be earned by proof** — a concept moved, a flag cleared, a chapter
   went Strong, or a genuine first.
2. **Silence is allowed.** If a student practised for an hour and nothing was
   proven, we say nothing. An app that congratulates you for an unproductive
   hour teaches you to ignore it.
3. **The teacher speaks, not the system.** Every moment is in Drona's or
   Vedha's voice (whichever the student picked — `lib/preferences.ts`), in the
   teacher's visual language. No generic toasts. This is the part competitors
   can't copy, because they don't have a named teacher.

---

## Shared plumbing: the proof diff

All three features need the same one thing, so it gets built once.

**What it is.** `GET /progress` already returns everything needed: the score,
`flagged_concepts`, the `ledger` (doubts solved, questions attempted,
concepts mastered, chapters strong), and every concept's `state`. Snapshot
that, compare it later, and the difference *is* the list of things worth
saying.

**Proposed module — `lib/proof.ts`:**

- `captureProof()` — stores a compact snapshot of the current `/progress`
  facts in AsyncStorage: score, flagged count, ledger totals, and the set of
  concept ids currently `strong`. Only ids and numbers, not the 128KB payload.
- `diffProof(previous, current)` → a typed list of events:
  `concept_strong` (with names), `flag_cleared`, `chapter_strong`,
  `score_up` (by how much), `first_class` / `first_doubt` / `first_question`.
- `markSeen(eventIds)` — records which events have already been shown, so a
  moment never fires twice.

**Where snapshots are taken:** on entering a class (`entering-classroom.tsx`),
on opening Practice, and on app foreground. Comparison happens at the moments
below.

**Everything here is client-side. No backend work is required for any of the
three features.** That is the main reason these three were chosen.

---

## 1. Celebrate at the end of a session

**Why here.** The highest-emotion moment is the second a class or a practice
run ends, while the student is still engaged — not on a later app open, which
is the consolation slot.

**Where it lives.** `app/session-summary.tsx` — the screen already exists and
already receives real data from `endDronaSession()` (`chapterTitle`,
`summaryPoints`, `mistakesCount`, `questionsAnswered`, `durationMinutes`).
**This is an enhancement of an existing screen, not a new one.**

**When it fires.** After a Drona class ends. `live-classroom.tsx` already
routes here on End.

**What it says.** Re-fetch `/progress` on arrival, diff against the snapshot
taken when the class started, and lead with the proof:

- concepts that moved to Strong during this class, by name
- any flag cleared — and say what it means: *"your ceiling just went up"*,
  which is mechanically true, since flags cap the score
- the score delta, if it moved
- if nothing moved: **say nothing celebratory.** Show the existing summary
  plainly. This is rule 2 and it is not optional.

**Practice needs a decision.** Practice has no end today — a student answers
questions until they leave, and there is no "run finished" event anywhere in
`app/(tabs)/practice.tsx`. Two options, to pick before building:

- **(a) Define a sitting.** Snapshot on mount, diff when the student leaves
  the tab, and show the moment on return or as an inline card. Honest, no new
  UI concepts, but the moment lands *after* the student has moved on.
- **(b) Add a natural stopping point** — e.g. after 10 questions, offer a
  "wrap up this set" card that produces a real summary. Creates the moment
  rather than salvaging one, but it is a product change to Practice's
  never-ending framing.

Recommendation: **(a) for v1**, because it changes nothing about how Practice
feels; revisit (b) if the moment lands weakly.

---

## 2. "Your teacher noticed"

**What it is.** An occasional card on Home, in the teacher's voice, making a
real observation from the student's own data. Not a tip, not a promotion — an
observation only we can make, because only we have concept-level mastery.

**Where it lives.** Home, in the lower half — which also answers the
"everything below the fold is plain" problem, since this is a real card with
real weight.

**When it fires.** At most one observation visible at a time; it changes when
the underlying fact changes, not on a timer. If there is no honest
observation, **the card is not rendered at all** (same rule as Recent notes).

**What it can say — all computable from `/progress` today:**

- *"Three Physics chapters are Strong. Chemistry hasn't started."* — from
  subject scores and chapter states.
- *"Kinetic Theory is your weakest chapter and you haven't opened it this
  week."* — needs-revision state plus local recency.
- *"You've answered 40 questions since anything last went Strong — try a
  chapter you haven't touched."* — honest, useful, and the opposite of
  flattery.
- *"Two flags are capping your ceiling. Clearing one lifts it."*

**Day one.** No data means no observation, so the card must have an honest
first-run form: an invitation rather than a diagnosis —
*"Take your first class and I'll tell you where you stand."*

**Open question to settle:** how much of this is templated in the client
versus generated by the tutor model. Templates are predictable and free and
work offline; generated lines are warmer but cost a call and can drift.
Recommendation: **templates for v1**, with the copy written in the teacher's
voice, and revisit generation later.

---

## 3. Milestones that persist

**What it is.** Instead of a pop-up that vanishes, a milestone becomes a small
card the student keeps — collected on a page they can return to.

**The elegant part: the collection is derived, not stored.** Almost every
milestone is recomputable from `/progress` at any time — `chapters_strong: 3`
*means* three chapter milestones exist. So we do not store the collection
(and it survives losing the phone). The only thing stored locally is the
**seen set**, so we know which ones are new enough to celebrate.

**What earns one:**

- **Firsts** — first class, first doubt solved, first practice question.
  Hardest step, most deserving.
- **A chapter goes Strong** — named: *"Kinetic Theory · Strong"*.
- **Every 10 concepts mastered.**
- **All flags cleared** — the ceiling is fully open. Rare and meaningful.
  (Individual flag clears are celebrated in the moment but are too frequent to
  earn a permanent card.)

**Where they live.** Their own page, reached from Progress's *"The journey so
far"* section — which is already the ledger of what a student has done, so the
collection belongs next to it. Deliberately **not** a fourth Library tab:
Library is about content the student saved, and mixing earned things into it
muddies both.

**Visual direction (for later, not now):** the app's paper language already
has a vocabulary for this — the ruled sheet, the red margin rule, the Kalam
handwriting. A milestone should feel like something stamped into a notebook,
not a game badge.

---

## What this does not do

Deliberately excluded, so nobody adds them by reflex later:

- **No streaks.** A streak punishes a missed day and rewards showing up rather
  than learning. It also collides with rule 1.
- **No volume badges** ("500 questions!"). Same reason.
- **No leaderboards or peer comparison.** Wrong for exam anxiety, and we have
  no social graph.
- **No notification-driven guilt.** These moments live inside the app.

---

## Build order

1. ~~`lib/proof.ts` — snapshot, diff, seen-set.~~ **Done.**
2. ~~**End-of-session moment** on `session-summary.tsx` (classes only).~~
   **Done.**
3. ~~**Milestones page** from Progress.~~ **Done** — with two corrections to
   this spec, both recorded in PROGRESS.md: `all_flags_cleared` is *not*
   derivable (a day-one student also has zero flags), so it is the one thing
   stored; and the milestones page needs its own seen-set, because
   `session-summary` consumes proof.ts's before the collection ever sees it.
4. ~~**"Your teacher noticed"** card on Home.~~ **Done** — templated, as
   recommended. Two things this spec didn't anticipate, both found on real
   data: the API marks a chapter `needs_revision` the moment one question in
   it goes wrong, so mastery is routinely `0.0` and "0% of it is holding"
   reads like a broken string; and with several chapters tied at that same
   zero, calling one of them "the weakest" is a superlative the data doesn't
   support. The card now only makes a claim as strong as its evidence.

**All four are built.** What is deliberately still open: Practice's option (a)
vs (b), and the local-recency observation ("you haven't opened it this week"),
which needs per-chapter open tracking that nothing records yet.

Then decide Practice's option (a) or (b) with the moment already working for
classes.

---

## Parked, with reasons

- **Show the product on day one** — a short silent loop of a Drona board being
  written, on Home, for students who have not taken a class yet. On day one no
  number can impress, but the product itself can. Parked, not rejected: it is
  the strongest day-one idea and needs a recorded asset rather than data.
- **First-run starter plan** — seeding Today's Plan with three real, tickable
  starter tasks ("take your first class", "snap one doubt", "answer 5
  questions"). Solves day-one blankness honestly. Parked for now.
- **Monk Score card on Home** — the brand's central number currently renders as
  10pt grey text on Home and 44pt on Progress. Fixing that asymmetry would also
  anchor the bottom of the page.
- **Parent/weekly share card** — the payer is the parent; a shareable weekly
  summary is a retention *and* renewal lever. Highest commercial upside of
  anything in the brainstorm, and the only one needing a share surface.
- **Consistency ribbon** — a week strip. Close to a streak; kept out for now on
  rule 1, but it is the honest version if we ever want one.
- **Flip-card reveal** — only earns itself in one place: the doubt of the day
  flipping to show the answer. Elsewhere, expand-in-place beats flipping,
  because it keeps context.
