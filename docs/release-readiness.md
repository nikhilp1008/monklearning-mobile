# Release readiness — board widget runtime (2026-09-29, Session X)

Verdict: **GO to cut the build from `release-1.1.0` (see "Build from"); release once the device
checklist below passes on a real iPhone.** The branch is merged into main's history and tested; the
build commit is final. One check still needs a real device (an audio-route change mid-sentence),
and the content fixes listed under "Waiting on the owner's line" are server-side: they can land
before or after the build.

## Build from

`release-1.1.0` = `6265a70` "Merge board-widget-runtime into main for the 1.1.0 build" plus this
document (a docs-only commit on top; the app is byte-identical). It is `origin/main` (`a3abcb6`,
"Events say which phone sent them") merged with `board-widget-runtime` (`b5fb645`): no conflicts.
`main` fast-forwards to it (`git push origin release-1.1.0:main`), so the release comes from main.

## What the release is

The last build in students' hands is the **19 Sep iOS build** (mobile `76393a4`).

**Server-only — already live, no app release needed.** The API deploys from `main` on push.
Production reports `/version` commit `d7006c3`, validator `present`, `widget_negotiation` on,
row verdicts 66 loaded / 61 adopted, 4 workers on Redis. Live since 19 Sep, among others:
- board lines ride the sentence that says them; no line waits for the end of a turn (W4: 0 of
  2,499 lines in a 735-turn replay, was 1.23%);
- turn 1 teaches the lesson's first slice (the client's "Begin lesson segment" is no longer
  answered as a question), and a reply that answers nothing no longer uses up a slice (W6);
- content: 2,238 stored board figures (832 redrawn and reviewed 2026-09-28; a tighter legibility
  scan since found 31 more with a label crossed, and 14 are stored re-spaced — the 28 Sep
  workaround for the old layout nudger — rather than in the layout their reviewer approved: both
  fixes are ready, see "Waiting on the owner's line"), 0 consecutive repeated boards except
  deliberate ones, 106 lesson segments' factual errors fixed, and all 290 plans accepted as the
  reviewed baseline (still matching on 2026-09-29).
Old builds are protected by negotiation (a client with no manifest is served only the 12-widget
19 Sep baseline): sweep 2026-09-29, 0 leaks, 0 blank boards, all 30 chapters, all three manifests.

**Client-side — needs this build. Native code changed, so it cannot ship over the air.**
- **Found in live classes on the simulator, 2026-09-29 (X1), fixed and verified there:**
  - the board kept following new lines: it used to stop following with nobody touching it when a
    widget laid out during the board's own glide (`d3127d2`; 35-minute class afterwards, never once);
  - a centred widget text with a Greek letter or subscript drew that glyph over its neighbour
    ("d sinθ = mλ" as "d sin θ̶m λ") — every comparison table with one, 17 stored payloads
    (`cf5971f`; before/after on the simulator);
  - figure text with `&lt;` `&gt;` `&amp;` or `&#…;` drew the characters literally ("=&gt;"): 178 of
    2,238 stored figures (`b5fb645`; "ΔT << T0" on the simulator);
  - a picture drawn twice put two board rows on one React key (`d3127d2`);
  - four widget renderer defects the payload review found: a wrapped table header drawn through its
    rule, words split without a hyphen, zero leading in trend tables, readouts cut mid-word or
    counting arrows as steps (`bd0107a`; note for the widgets' owner in
    `docs/notes/widget-renderer-fixes.md`).
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
| jest (`6265a70`, the build commit) | 2433 passed, 3 skipped, 0 failed (production-isolation guard on) |
| `tsc --noEmit` | 0 errors |
| `expo lint` | 0 errors, 3 warnings (all three predate this build) |
| `verify:render` (519 trees) | 516 pass; the 3 `free_body_forces` phone-frame trees are checked at 900x430 and read as "degenerate" — a gate-harness frame mismatch that predates this build, not a widget defect |
| API pytest (`2f9e4dc4` = `d7006c3` + X4, X5, backfill override, validator re-pin) | 2192 passed, 36 skipped, 0 failed; network guard on, 0 production attempts |
| corpus_check (mobile `6265a70`) | green: every stored SVG sizes and parses in the client; every adopted segment has a board |
| V5 sweep (API `2f9e4dc4`, mobile `6265a70`; 30 chapters × 3 manifests) | on target: 0 blank, 0 live-dependent in adopted chapters, 0 leaks, 0 held-chapter widgets, 0 resolver bugs, 0 true repeats. Widget boards: current client 83 (55 stored + 29 archetype, minus `adfd3853:5`, which the new client refuses and draws from its stored SVG until its payload fix lands), 19 Sep client 52 |
| Legibility scan, tightened band (all 2,238 stored SVGs) | segment figures (2,143): 31 with a label crossed by a line (redraws waiting), 5 deliberate strike-throughs; 14 are legible but stored re-spaced rather than as approved (restores waiting). Concept figures (95): 74 fail, none served (the 18 segments still on a concept figure all use clean ones) |
| V8 production | `/version` = `d7006c3`, validator present (pinned to mobile `55e899bd`), negotiation on. The four API commits above are tested but NOT deployed: a push to API main is a production deploy and waits for the owner. The build does not depend on them — on `d7006c3` the one payload the new client refuses (`adfd3853:5`) draws its stored SVG |

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
- [ ] An adopted chapter shows widgets; a held chapter shows none. Wave Optics / Diffraction of
      Light shows comparison tables at segments 3, 6 and 9; Units & Measurements / Significant
      Figures at 2 and 3.
- [ ] In those tables, "a sinθ = mλ" reads cleanly: no glyph over its neighbour, no gap before θ.
- [ ] Leave the board alone for a whole segment that brings a table: it keeps following the newest
      line, and no "Jump to live" pill appears unless you scroll up yourself.
- [ ] A figure whose text has "<<" or "=>" (e.g. Thermal Properties of Matter) shows the symbols,
      not "&lt;&lt;" or "=&gt;".

## Waiting on the owner's line (server-side; independent of the build)

- **25 of the 60 adopted widget payloads are wrong** (auditor + independent verifier, 2026-09-29).
  24 fixes are ready to apply in place (they draw under the new client and production validators;
  dry run: all 24 stored payloads are still the ones reviewed). One (`b97e8ea8:1`) needs its widget
  swapped, which retires its SANE verdict until re-reviewed — a separate decision. Until applied,
  students see those tables as they are (Wave Optics seg 9 says "Width λ/a" for YDSE).
- **45 stored figures**: 31 redrawn where a line crosses a label (batch 4, reviewed) and 14 put back
  in the exact layout their reviewer approved (stored re-spaced on 28 Sep so the old nudger would
  leave them alone; legible, but not what was approved). Every plan is accepted, so the backfill
  writes into an accepted plan only on the owner's line (`--accepted-plan-line`, named segments
  only, the line kept in each figure's provenance).
- **Re-acceptance** of the plans those writes change (41 for the figures, 20 for the payloads; 58
  together), after they are listed.

## Open items (not blockers)

- **CI (W8):** `corpus-check.yml` still fails only on missing repository secrets `DATABASE_URL` and
  `MOBILE_REPO_TOKEN`. Once they are added, re-run it; mark it required on `main` after it is green.
- **`diagram_author.repair_layout`** (API): the fix is in its third review round, not deployed. Rounds 1–2 moved it to the measured Onest width model, stopped it moving labels off the lines they belong to, and fixed parsing, totality and speed; round 3 removes the last case where structural drawing (a fraction bar, a bond, a stacked bar) could move with a label, and caps the gate's allowance for long labels. Until it ships the live path keeps the old nudger, and the 45-figure write waits for it (under the old code all 14 restores would be moved again).
- **Content:** a full audit of all 290 plans is planned and costed (API `docs/content-audit-plan.md`,
  not run); calibration found ~4 confirmed issues per segment, ~0.8 of them serious.
- **Cosmetic, for the widgets' owner:** a formula line with `x_{\text{edges}}` shows `x_(edges)`, and
  `x_{\text{pair}}` mixes subscript letters from two Unicode blocks at two heights; the hyphen rule can
  put a hyphen inside a formula (only in a payload the review already judged wrong).
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
