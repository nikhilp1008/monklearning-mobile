# Release readiness — board widget runtime (2026-09-29)

Verdict: **GO to cut the build; release once the device checklist below passes on a real iPhone.**
Every blocker Claude can close is closed. The branch still has to be merged and the build cut
(owner), and one check needs a real device: an audio-route change mid-sentence.

## What the release is

The last build in students' hands is the **19 Sep iOS build** (mobile `76393a4`).

**Server-only — already live, no app release needed.** The API deploys from `main` on push.
Production reports `/version` commit `d7006c3`, validator `present`, `widget_negotiation` on,
row verdicts 66 loaded / 61 adopted, 4 workers on Redis. Live since 19 Sep, among others:
- board lines ride the sentence that says them; no line waits for the end of a turn (W4: 0 of
  2,499 lines in a 735-turn replay, was 1.23%);
- turn 1 teaches the lesson's first slice (the client's "Begin lesson segment" is no longer
  answered as a question), and a reply that answers nothing no longer uses up a slice (W6);
- content: 2,238 stored board figures, all legible (832 redrawn and reviewed 2026-09-28), 0
  consecutive repeated boards except deliberate ones, 106 lesson segments' factual errors fixed,
  and all 290 plans accepted as the reviewed baseline.
Old builds are protected by negotiation (a client with no manifest is served only the 12-widget
19 Sep baseline): sweep 2026-09-29, 0 leaks, 0 blank boards, all 30 chapters, all three manifests.

**Client-side — needs this build. Native code changed, so it cannot ship over the air.**
- **Audio survives a route change** (Bluetooth, headphones, AirPlay, a call, Siri). `3b1c02c` +
  `a2cef11`:
  - native `PcmPlayerModule.swift`: a buffer counts as heard only while the engine runs; engine
    restart retried at 0.25/0.5/1/2 s; `play()` never on a stopped engine; no lock taken on
    AVFoundation's completion queue (the deadlock found in testing: a barge-in could hang the app);
    `recoveries()` counter;
  - JS `pcm-playback-queue.ts`: dead-engine watchdog (JUMP/FROZEN) that rebuilds and replays what
    was not heard, and stands down while the native side is replaying.
- **Two different figures are never one board** (`fea84f5`, `board-continuity.ts`): the SVG
  signature hashes the whole SVG instead of its first 200 characters.
- Everything listed on 2026-09-26: five new widgets (17-widget manifest), the manifest on the WS
  query string, widget fallback pictures, `(frame, seq)` board events and reconnect replay, a chunk
  reveals every line it carries, `board_gap` telemetry, Keychain tokens, mock tests,
  report-a-mistake.

## Checks

| Check | Result |
|---|---|
| jest (`a2cef11`, rebased on `8c2be0d`) | 2341 passed, 3 skipped, 0 failed (with the production-isolation guard) |
| `tsc --noEmit` | 0 errors |
| `expo lint` | 0 errors, 3 warnings |
| API pytest (`d7006c3`) | 2182 passed, 36 skipped, 0 failed; network guard on, 0 production attempts |
| corpus_check | green: every stored SVG sizes and parses in the client; every adopted segment has a board |
| V5 sweep (30 chapters × 3 manifests) | on target: 0 blank, 0 live-dependent in adopted chapters, 0 leaks, 0 held-chapter widgets, 0 resolver bugs, 0 true repeats |
| Legibility scan (all 2,238 stored SVGs) | 0 faults except 5 deliberate strike-throughs |
| V8 production | `/version` = `d7006c3`, validator present, negotiation on, 4× Redis, no errors |

**Audio proof (simulator, 2026-09-28).** A temporary debug build forced the engine stop iOS makes on
a route change (reverted afterwards). Phase 4, on the fixed code: 22 of 22 pass — route-change
stop ×7, silent stop ×5, restart failures ×5 (all late in a part), real barge-ins ×7 including 2
within 20 ms of a recovery. Audio resumed, unheard audio replayed in order, no burst of board lines,
no hang, 0 JS rebuilds on top of a native recovery. Then four normal classes (Physics, Chemistry,
Maths, Biology) on the clean build: 0 recoveries of any kind, and turn 1 put slice 1 (4/4 items) on
the board in every subject. The Simulator's own audio-output switch cannot trigger the stop (all its
outputs are 48 kHz), so the real route change is checked on a device (below).

## Device checklist (real iPhone, this build, production API)

Audio route — mid-sentence, while Drona is speaking a long answer:
- [ ] Connect Bluetooth headphones/AirPods; then disconnect them. Each time: audio pauses about a
      second, then carries on from the start of the part it was in; no lines burst onto the board.
- [ ] Plug in / unplug wired headphones (or a USB-C/Lightning adapter). Same expectations.
- [ ] Trigger Siri; dismiss. Audio resumes; the class carries on.
- [ ] Receive a phone call (decline it; another time, answer and hang up). Audio resumes after.
- [ ] Barge in (tap to talk) mid-sentence 3 times; the app never freezes, audio stops cleanly.
Rotation:
- [ ] Rotate portrait ↔ landscape mid-sentence several times: audio continues, the board re-lays out,
      no line lost or duplicated.
Network:
- [ ] Wi-Fi off mid-class for ~10 s, then on: the class reconnects, the board and any pending
      question come back as they were, no duplicate lines.
Board content:
- [ ] One class per subject (suggested: Wave Optics, Aldehydes/Ketones, Application of Integrals,
      Plant Kingdom): figures legible, no label crossed by a line, each figure matches what is said.
- [ ] Plant Kingdom / Structural Organisation: the labelled illustration shows its plate labels,
      and consecutive segments show the intended plate (cues are set for every illustration segment).
- [ ] An adopted chapter shows widgets; a held chapter shows none.

## Open items (not blockers)

- **CI (W8):** `corpus-check.yml` still fails only on missing repository secrets `DATABASE_URL` and
  `MOBILE_REPO_TOKEN`. Once they are added, re-run it; mark it required on `main` after it is green.
- **`diagram_author.repair_layout`** (API) moves labels that don't actually overlap — it
  overestimates text width ~25-40% for the app font and moves text away from the lines and brackets
  it belongs to. It damaged 13 reviewed figures at write (all re-written). The live model-drawn path
  uses the same function. Fix proposed in `docs/svg-repair-2026-09-28.md`; not made.
- **Content:** every review pass found a few factual errors in lesson text outside what it was asked
  to check; 106 segments are fixed, but a full content audit is the systematic fix.
- **Questions mid-class** get a spoken answer but no figure of their own (by design today).

## Proposed version

`app.json` version `1.0.0` → **`1.1.0`**. Build number is EAS-managed (`appVersionSource: remote`,
`autoIncrement`): whatever EAS assigns next.

## Release notes (draft)

> **Sharper, clearer boards in live classes.** Diagrams appear exactly when your teacher says them,
> and hundreds of diagrams have been redrawn to be clean and correct on your phone. Five new
> interactive figures join the board (comparison tables, LCR resonance, flux through a surface,
> shaded regions, vector sums). Your teacher's voice now carries on if you connect headphones or
> Bluetooth, get a call, or use Siri mid-class. If your connection drops, the board comes back as
> you left it. Also new: full mock tests with review, and a way to report a mistake from anywhere.
