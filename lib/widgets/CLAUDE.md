# CLAUDE.md — Drona Board Widget Runtime

This file governs work on the **board widget runtime**: the system that draws
interactive diagrams during a Learn with Drona live class. Read it before
touching anything under `lib/widgets/`, `assets/molecule-host.html`, or the
board rendering path in the classroom flow.

`AGENTS.md` still applies in full. Its standing rule is repeated here because it
matters most in this subsystem: **read the versioned docs at
`https://docs.expo.dev/versions/v54.0.0/` before writing code.** SDK 54 moved a
lot, and several of the rules below exist because a plausible-looking API is
either newer than our pin or older than it.

---

## 1. The one idea

**The model never draws. It selects a widget and fills that widget's parameters.**

A widget is a deterministic TypeScript renderer that we write, review for
physical correctness once, and then trust. The model's entire output for a
diagram is a small JSON payload — typically 60–150 tokens — validated against
the widget's own validator before a single pixel is drawn.

This is not a token-cost optimisation, though it is one. It is a correctness
guarantee. A model hand-writing SVG for a projectile draws an *approximate*
parabola, and our students read values off these diagrams. A registry widget
computes `y = x·tanθ − gx²/(2v²cos²θ)` and cannot be approximately right.

If you are ever tempted to have the model emit SVG, coordinates, or drawing
commands for something the registry covers — don't. That is the fallback tier,
and it is instrumented as a defect.

---

## 2. The three tiers

Every diagram on the board resolves through exactly one of these. `BoardWidget`
is the single entry point; nothing else renders a diagram.

| Tier | Source | Latency | When |
|---|---|---|---|
| `precomputed` | Payload baked into the lesson JSON at content-build time, stored in Supabase | 0 ms | Any concept in the authored curriculum |
| `live` | Payload returned by the doubt endpoint on the Railway API | ~1 s | A student question the registry covers but the lesson didn't precompute |
| `fallback_svg` | Model-generated SVG string, rendered through `SvgXml` | ~10 s | No registry widget matches |

**Precomputing and live doubts are not in tension.** We cache *payloads*, not
pictures. A cache miss costs one model call against a registry the model already
knows; it does not cost a broken lesson. Precompute aggressively for authored
concepts and let tier 2 absorb everything else.

**Tier 3 is a measurement, not a failure.** `BoardWidget` calls `onGap` on every
tier-3 render with the reason and payload. That feed is the queue that decides
which widget we build next. Treat its rate as a tracked metric with a target
near zero on the core syllabus — JEE/NEET is a closed syllabus, which is the
entire reason a fixed registry works for us and would not for a general
assistant. Do not let tier 3 quietly become 40% of diagrams.

---

## 3. Non-negotiable rules

These are pinned to our actual dependency versions. Each one has a reason; the
reason is stated so you can tell when it stops applying.

### TypeScript, not JavaScript
Every widget is `.ts` / `.tsx`. The repo is TS 5.9 `strict` and gated on
`tsc --noEmit`. Do not add `.js` files under `lib/`, and do not reach for `any`
outside the two places the registry already uses it (heterogeneous module map).

### Animation: `useAnimatedProps`, never CSS animations
We are on **`react-native-reanimated@4.1.1`** (SDK 54's pin). Reanimated's own
docs show SVG path morphing via CSS animations (`animationName`, `animationDuration`).
**That feature does not exist at our version.** Partial SVG CSS-animation support
landed in 4.1.0 and full support — including `Path` morphing — only in 4.3.0.
Copying the docs' headline example produces code that silently does nothing.

The correct pattern here:

```ts
const AnimatedPath = Animated.createAnimatedComponent(Path);
const animatedProps = useAnimatedProps(() => ({
  d: trajectoryPath(angle.value, speed, gravity, originX, groundY, pxPerM, 72),
}));
<AnimatedPath animatedProps={animatedProps} />
```

`trajectoryPath` must be marked `'worklet'`, and every function it calls must be
a worklet too. String concatenation and `Math.*` are fine inside a worklet.

Animatable props on `react-native-svg@15.12.1`: `Path.d`, `Circle.cx/cy/r`,
`Ellipse.cx/cy/rx/ry`, `Rect.x/y/width/height/rx/ry`, `Line.x1/y1/x2/y2`,
`Polygon/Polyline.points`, plus stroke and fill props on everything. `Line` and
`Polyline` point animation is native-only, which is fine — we are iOS-only.

Reanimated 4 requires the New Architecture. We have it enabled. Do not attempt
to support the old architecture.

### Cue sync: keyed to reveal order, not seconds (revised M2)
**This subsystem targets live Drona sessions, not the pre-recorded lesson
player.** An earlier draft of this file (and of `use-cue-track.ts`) assumed a
single seekable audio track with a `player.currentTime` to poll — the shape
`app/lesson-player.tsx` has, and does not. Live sessions have neither a
section-length track nor any timestamp on the wire at all: read
`lib/drona-voice-client.ts`'s `BoardEvent` — there is no `at`, no
`currentTime`, no duration. What a live session has instead is a strictly
ordered stream of board events, each revealed exactly when the `audio_chunk`
pairing it to its sentence starts playing (`AudioPlaybackQueue.onItemStart`).

So `Cue.seq` names the board event a cue applies at, not a second, and
`use-cue-track.ts` selects on `activeSeq` — the highest board-event `seq`
revealed so far in the turn, threaded down from the classroom's own `board`
array — rather than on a rAF-polled clock. This is not a workaround for
missing timing data; it is **strictly more robust** than a seconds model: a
cue fires WITH its sentence, by construction, so it cannot fire early or late
the way a written-in-advance `at: 2.4` could if TTS pacing disagreed with the
estimate. See `docs/cue-timing.md` for the pre-recorded-lesson problem this
sidesteps entirely, and `Cue.seq`'s own doc comment in `lib/widgets/types.ts`
for the full reasoning.

Pause still works (the queue simply stops; no clip starts, no cue fires). Seek
and backward scrub do not exist in a live session and are not attempted —
there is nothing to seek along.

If a widget is ever wired into `app/lesson-player.tsx` (a real seekable track,
real `durationSec`, real `revealAt[]`), that screen needs `useCueTrack`'s
*original* seconds-based selector back, or a second cue-selection strategy
alongside this one — the two systems' clocks are genuinely different, and
`Cue.seq` cannot mean anything on a track that has no board-event stream to
number.

### The `params` / `motion` split
Two channels carry parameters, deliberately:

- `params` — authoritative, JS thread, re-renders. Drives axes, gridlines, ticks,
  labels, readouts.
- `motion` — one `SharedValue<number>` per key listed in `animatable`, UI thread.
  Drives geometry only.

**A widget's static scaffolding must be computed from `params` only, and must not
depend on any value a cue tween changes mid-flight.** Concretely, in
`projectile-motion` the pixels-per-metre scale is a function of speed and gravity
but *never* of launch angle — because angle is the parameter cues move most, and
an axis that rescales mid-tween makes two trajectories visually incomparable,
which destroys the one thing the animation exists to teach.

Maximum 4 animatable params per widget (`useCueTrack` allocates a fixed pool;
hooks cannot be called in a loop over data). A widget needing five simultaneously
tweening numbers is two widgets.

**The readout jumps ahead of the curve, on purpose — decided M2, not a bug.**
`use-cue-track.ts` calls `setParams(target)` (the new, final values) and only
*then* sets each `motion` SharedValue to `withTiming(to, ...)`. Since `params`
drives readouts and `motion` drives geometry, that ordering means a readout
like "R 49.3 m" shows the DESTINATION value the instant a cue fires, while the
curve is still ~1.1s (a typical `tween`) into travelling there. The number is
already the answer; the curve is the explanation of how it got there — and the
student's eye is on the moving curve, not the strip. Keep this. Synchronising
the two would mean animating SVG `<Text>` content per frame, which
`react-native-svg` does not make cheap and which is not worth it for a
strip most students are not staring at during the tween. **Every widget built
against this contract inherits this ordering — do not special-case one widget
to feel "more synced" than the others; if this decision changes, it changes
`use-cue-track.ts` once, for everyone.**

### `validate()` is total and never throws
Every widget exports a `validate(raw: unknown)` returning a discriminated result.
It clamps in-range values, rejects the rest, and returns readable errors. This is
the only place a malformed model payload can be stopped, and it is what makes
tier 2 safe to expose to arbitrary student questions.

Never `JSON.parse` a payload straight into a widget. Never trust `params` because
it came from our own API.

### Exactly one WebView, and only for 3D
`react-native-webview` was removed from this app for good reason: the old KaTeX
maths path mounted five browser instances per four-option MCQ, each fetching
KaTeX from a CDN before it could paint. **Do not reintroduce that pattern.**

The molecule widget is a different shape and is the only sanctioned exception:

- **one** WebView instance, mounted only in the classroom flow;
- `3Dmol.js` **inlined into the HTML** by `scripts/build-molecule-host.mjs` —
  zero network at runtime, ever;
- structures pushed in over `postMessage`, so changing molecule does **not**
  remount the WebView or rebuild the GL context;
- `source={{ html }}` with `originWhitelist={['*']}` (required for an inline
  html source — the default whitelist is http/https only).

We avoid `file://` entirely, which sidesteps the whole permissions mess. For
reference if you ever do need it: `allowFileAccess` is **Android-only**; the iOS
knob is `allowingReadAccessToURL`, and it must point at the containing directory,
not the file. Our pin is `react-native-webview@13.15.0` via `npx expo install`.
Do not hand-install 14.x.

`'html'` is already in Metro's default `assetExts`, so the asset bundles with no
`metro.config.js` change.

**If the WebView ever regresses**, the escape hatch is `expo-gl` (`~16.0.10`,
New-Architecture-supported) plus `@react-three/fiber/native`. Note that
**`expo-three` is unmaintained** — last release 2024-07-28, flagged
`newArchitecture: false` — so do not reach for it. R3F peers `react >=19 <19.3`,
which our React 19.1.0 satisfies. Budget a spike; do not swap on a hunch.

### Never fetch at render time
No CDN, no API call, no `fetch` inside a widget. Structures, fonts and libraries
are bundled or cached before the class starts. `WidgetServices.resolveStructure`
is cache-first and offline by contract. A live class must render with the network
off.

### The model never emits coordinates
For 3D, the payload carries an **identifier** — `pubchem:5957`, `pdb:1BNA` —
resolved against our cache. Model-generated atomic coordinates are plausible and
chemically wrong. Small molecules are generated server-side with RDKit
(ETKDGv3 + MMFF94) and cached; macromolecules come from RCSB PDB rather than
being generated, because nothing generated is right at that size.

### Landscape, and the app's own fonts
The classroom is landscape-locked via `hooks/use-landscape-lock.ts`. Widgets
receive an explicit `width`/`height` box and must lay out for landscape. Do not
hardcode a viewBox. Text inside SVG uses `theme.fontFamily` / `theme.monoFontFamily`,
which resolve to the app's loaded families (Anek Latin, Kalam) — a diagram in a
different typeface than the board around it reads as a bug.

### Sliders are out of scope right now
The product decision is narration-driven variation first. Widgets must not render
their own controls. The `animatable` list and the `motion` channel already support
student-driven values when we turn them on; nothing needs redesigning for that.

---

## 3a. Content side: which concepts get a diagram

Widget *selection* is not the model's judgment call either. A human-owned
taxonomy (`content/concept-types.seed.json`) maps each `concept_type` to a
diagram policy — `required` / `expected` / `optional` / `prohibited` — and the
lesson plan declares the visual slot before any prose is generated.
`scripts/validate-lesson-plan.mjs` fails the build on an empty `required` slot or
a widget the client registry cannot render.

Full rules, the two-pass plan/generate contract, and the segment-count bands are
in `docs/visual-grammar.md`. Read it before changing anything about how lessons
are planned or generated.

For the ~149 figures no renderer can generate — labelled anatomy, floral diagrams,
dissections — see `docs/asset-pipeline.md`. It is licence-gated: **never fetch an
image from the open web**, ingest only from the allowlist, and capture licence,
source and attribution as non-null columns at ingest. NCERT figures are all-rights-
reserved and must never be reproduced, traced or redrawn from.

`docs/narration-diagram-alignment.md` covers the one thing no validator checks: whether
the words and the picture agree. Read it before writing any generation prompt — the rule
that numbers in captions are `{{derived}}` tokens rather than typed values is what makes a
whole class of mismatch impossible.

`docs/asset-flow.md` traces one figure through both moments — precompute binding and
live doubt resolution. The invariant: **nothing is created during a live session**;
precompute creates and binds, a live session only selects from what already exists.

---

## 4. File layout

```
content/
  concept-types.seed.json      concept_type -> diagram policy + eligible widgets
docs/
  visual-grammar.md            when a concept needs a diagram, and how it is enforced
  widget-prompt-template.md    fill-in-the-blank brief for building one widget
lib/widgets/
  types.ts                     the contract — read this first
  registry.ts                  the closed set of drawable things
  BoardWidget.tsx              single entry point; tier dispatch + gap logging
  use-cue-track.ts             narration sync (rAF over player.currentTime)
  projectile-motion/
    physics.ts                 worklet-safe closed-form maths, no rendering
    index.tsx                  react-native-svg component + validate + module
  molecule-3d/
    index.tsx                  WebView host + postMessage bridge + validate
assets/
  molecule-host.html           GENERATED — do not hand-edit
scripts/
  build-molecule-host.mjs      regenerates the above; run in CI, fail if stale
  validate-lesson-plan.mjs     enforces visual coverage; run in CI
  verify-render.mjs            render assertions over payloads; run in CI
```

Keep maths in `physics.ts`-style files, separate from rendering. It is the part
that needs a physics review, and it should be readable without React in the way.

---

## 5. Adding a widget

1. Create `lib/widgets/<name>/`. Put the closed-form maths in its own module,
   every exported function marked `'worklet'` if geometry depends on it.
2. Write `validate()` first, before the component. It defines the payload
   contract the model will be prompted against.
3. Build the component from `params` for scaffolding and `motion` for geometry.
4. Register it in `lib/widgets/registry.ts`. This is the only way to add one.
5. Export the manifest to the server so the payload generator's widget list and
   the client's registry cannot drift.
6. Verify with the checklist in §6.

Pick the next widget from the tier-3 gap queue, not from intuition. Before
designing anything new, mine the diagram board events already generated across
the completed chapters and let the frequency distribution rank them.

---

## 5a. Verification at corpus scale

The §6 checklist is per widget. It does not scale to ~9,200 board events, and schema
validation alone does not prove a diagram is legible — a valid payload can still render
off-canvas, with colliding labels, or empty.

`scripts/verify-render.mjs` asserts over the rendered component tree (via
`react-test-renderer`, no device needed): something was drawn, ink covers enough of the
board, nothing outside the bounds, no label overlaps another, no `NaN` in any prop. Run it
on every payload in CI. See `docs/render-verification.md` for what it cannot catch and how
to sample for human review.

---

## 6. Definition of done

A widget is not done until all of these hold:

- [ ] `npx tsc --noEmit` clean, and `npx expo lint` clean.
- [ ] `validate()` rejects: wrong type, missing required key, `NaN`, `Infinity`,
      out-of-domain values, and an empty object — each with a readable message.
      It never throws.
- [ ] Numeric output checked against at least three known values from an NCERT
      or standard reference, written down in a comment in the maths module.
- [ ] Axes/scaffolding provably do not move while an animatable param tweens.
- [ ] Renders correctly at the classroom's landscape box on the smallest
      supported device, and at 2× that width.
- [ ] Reduced-motion honoured: cue tweens collapse to snaps.
- [ ] A cue track drives it correctly through play, pause, seek forward, and
      scrub backwards.
- [ ] No `fetch`, no CDN reference, no `Date.now()`-driven animation.
- [ ] Renders with the device in airplane mode.

---

## 7. Not this subsystem's job

Do not, while working here: change the audio architecture (expo-audio for
playback and `@siteed/audio-studio` for capture are deliberately separate — a
shared session routes Drona to the earpiece); change orientation handling outside
the classroom; add a state-management library; or "clean up" `react-native-webview`
out of `package.json` — as of this runtime it is load-bearing again.
