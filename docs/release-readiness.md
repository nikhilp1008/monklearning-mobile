# Release readiness — board widget runtime (2026-09-26)

Verdict: **NO-GO today.** GO once blocker 3 below (audio-route recovery) is
fixed and device-checked, and the branch is merged. Nothing
here needs a migration or a credential from Claude.

## What the release is

The last build in students' hands is the **19 Sep iOS build**, cut from mobile
`76393a4`. Everything since splits into two kinds.

**Server-only — already live, no app release needed.** The API deploys from
`main` on push; production reports `/version` commit = pushed HEAD, validator
`present` (vendored bundle pinned to mobile `55e899b`), `widget_negotiation`
on, row verdicts 66 loaded / 61 adopted. Since 19 Sep: P1–P3, Q1–Q4, S1–S3,
T1–T5, U1–U5, V1 (`b3720de`), V3, V4 (`ddeface`), V5 (`c1f474f`), backfill
tooling (`26a48b9`). Old builds are protected by negotiation: a client that
sends no manifest is treated as `BASELINE_MANIFEST_2026_09_19` (12 widgets),
so it is never sent a widget it cannot draw (V5 sweep: 0 leaks, 0 blank, all
30 chapters, all three manifests).

**Client-side — needs this build.** 98 mobile commits since `76393a4`, 32 of
them on the board path. The ones a student sees:

- five new widgets: `comparison_table`, `lcr_resonance`, `flux_surface`,
  `region_plot`, `vector_sum` (the 17-widget manifest);
- the manifest itself on the WS query string (`&widgets=id@ver,…`) — without
  it the server must assume the 12-widget baseline;
- a widget always carries its fallback picture; a malformed stored SVG reports
  `svg_invalid` and falls back instead of drawing blank (U5);
- board events keyed `(frame, seq)`, written once; reconnect replay merges (T4);
- a chunk reveals every line it carries (`board_events` list, V4) — old builds
  read only `board_event` and get the rest at end of turn, exactly once;
- `board_gap` telemetry (`onWidgetGap → track('board_gap')`) — **no released
  build sends it**, so the daily gap report is blind until this ships;
- Keychain session tokens, WS token out of the URL; mock tests; report-a-mistake.

## Checks on `board-widget-runtime` @ `ab246f8`

| Check | Result |
|---|---|
| jest | 2317 passed, 3 skipped, 0 failed |
| `tsc --noEmit` | 0 errors |
| `expo lint` | 0 errors, 3 warnings |
| manifest on WS query | sent; server logs `widget manifest: 17 widgets` on every connect |
| manifest == what the build renders | `lib/__tests__/drona-socket-manifest.test.ts` (registry ↔ `build/registry-manifest.json`) |
| API pytest (main) | 1951 passed, 32 skipped, 0 failed |

Simulator (production API, 2026-09-26): 8 classes across Physics, Chemistry,
Maths — every board line revealed with its own sentence's audio, gap 0–2 ms
client-side and 0 ms server-side, 0 orphans; held chapters served no widget;
three real mid-class redeploys reconnected with the board and pending question
restored, no duplicate lines.

## Blockers

1. ~~Merge to `main` conflicts~~ — **resolved** (`ab246f8`, main merged into
   this branch on 2026-09-26). `board-widget-runtime` now merges into `main`
   cleanly and is 0 commits behind it. What remains is the merge itself and
   cutting the build from `main`. **Owner: Raasikh.**
2. ~~Adopted chapters depend on live drawing~~ — **closed 2026-09-26.** 847
   session-authored stored SVGs written (every one independently reviewed),
   0 invalid, 0 failed; `corpus_check` green on all six checks; the three-manifest
   sweep shows 0 live-dependent segments in adopted chapters and 0 blank boards.
3. **Audio stops for good after an audio-route change** (was filed as "after
   rotation"). Rotation was not the cause: 73 rotations on the simulator, 0
   stalls. The stall on 2026-09-26 came from the Mac's audio output switching
   (AirPlay turned off) 1 s before the rotate tap. iOS stopped the
   AVAudioEngine, and the dev client, built 09-24, before `2eff0e6` ("The
   voice recovers…"), never restarted it. The WebSocket stayed alive the
   whole time. The same thing will happen on a phone when Bluetooth, AirPlay,
   headphones or a call change the route. `2eff0e6` is on this branch, but it
   still has two gaps:
   - the flushed completions are counted before the engine-change
     notification, so lines are revealed in a burst and the audio is skipped;
   - `engine.start()` is not retried.
   **Fix to land before release:** the JS dead-engine watchdog in
   `lib/pcm-playback-queue.ts` (prototype with 5 tests; it also protects
   binaries already in the field) plus the native follow-up (count a
   completion only while the engine runs, retry start with backoff). Then a
   device check: switch the audio route mid-sentence. **Owner: client audio.**

## Open decisions (not blockers, not Claude's)

- `components/paywall/plans.ts`: the uncommitted price change that sat in the
  working checkout is now identical to the branch tip (main's ₹2,999 ladder,
  `7f2e675`, came in with `ab246f8`). Nothing to decide. **Owner: Raasikh.**
- Probability `complementary-events…` segments 2→3: two different SVGs share a
  length and first 200 characters, so `boardSignature` treats them as one board
  and would not draw segment 3. Dormant (chapter held). **Owner: cofounder
  (`board-continuity.ts`).**
- 357 consecutive repeated boards across the corpus (figure `a` with no cue;
  shared concept SVG). Content, not resolver. **Owner: Raasikh.**

## Proposed version

`app.json` version `1.0.0` → **`1.1.0`** (new widgets, new mock flow, new
telemetry). Build number is EAS-managed (`appVersionSource: remote`,
`autoIncrement`), so it is whatever EAS assigns next; Claude cannot read it
(no EAS credentials).

## After it ships

- Turn on `scripts/gap_report.py --require-events` and delete its banner.
- Once the 19 Sep build is gone from the field, add a new baseline constant
  (never edit `BASELINE_MANIFEST_2026_09_19`).

## Release notes (draft)

> **Sharper boards in live classes.** Diagrams now appear exactly when your
> teacher says them, and five new interactive figures join the board
> (comparison tables, LCR resonance, flux through a surface, shaded regions,
> vector sums). If your connection drops mid-class, the board comes back as you
> left it. Also new: full mock tests with review, and a way to report a mistake
> from anywhere in the app.
