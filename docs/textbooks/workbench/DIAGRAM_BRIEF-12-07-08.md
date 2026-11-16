# Diagram brief (read BRIEF-12-07-08.md first; this adds to it)

You redraw every drawing in your chapter of the book as an app diagram, in the "App tags" style
the founder chose, computed from the physics, with checks that prove each drawing is right.

## What to read first

- `lib/diagrams/kit.ts` (the drawing kit: `Sketch`, colours `C`, fonts `F`, tags, results, the
  layout `audit`) — read all of it.
- `lib/diagrams/types.ts` (`Diagram`, `DiagramCase`, `Check`).
- `lib/diagrams/physics-12-04.ts`, `physics-12-03b.ts`, `physics-12-03.ts` (newest, expert-reviewed: magnetic
  fields, ⊙/⊗, loops, circuits, meters), `physics-12-01.ts`, `physics-12-02.ts`, `physics-11-13.ts`, `physics-11-14.ts`, `physics-11-09.ts`,
  and `lib/diagrams/physics-11-01.ts`, `physics-11-02.ts`: the finished, approved
  redraws (cards, a pendulum, vernier scales, parallax, x–t / v–t / a–t graphs,
  area slivers, decision charts). They are the model for technique, style and checks; reuse their
  helpers by copying them into your file (do not import from another chapter's file).
- `components/revise/diagram-card.tsx` (how a diagram is shown: name, drawing, chips, caption).
- `lib/diagrams/__tests__/diagrams.test.ts` (what every diagram must pass).

## The style: "App tags" (agreed, do not vary it)

- White ground, no fills ever. Objects in ink, stroke 1.7, rounded joins.
- Names of things go in small white tags: Onest SemiBold 11, fine border, with a leader line and
  a dot to the thing named. Symbols and values (θ, 2.5 m s⁻¹, t = 8 s) go in STIX straight on the
  drawing, no tag.
- One marigold highlight per drawing (the thing the figure is about), with a marigold-edged tag.
- Helpers, axes and components in grey; components dashed.
- The result, if the figure has one, is one ink-edged Onest Bold 13 tag, bottom-right, never under
  the heading.
- Tags place themselves from preferred spots (the kit does this). A group is named by a line
  drawn round it, never by tagging one member. Two things at the same place get different marks
  and tags on opposite sides. When no clean leader line exists, the item goes in a key strip
  under the drawing showing its own mark.
- Mixed-font maths text goes through `Sketch.text` (the app lays it over the SVG with its own
  text engine, because react-native-svg mis-spaces mixed STIX faces). Raised and lowered letters
  in STIX; italic only for maths letters.

## Rules for every diagram

1. Draw from computed geometry and the physics, never from hand-placed coordinates that merely
   look right: a v–t graph's area, a pendulum's angle, a scale's divisions, a parallax angle are
   computed from the values the book gives.
2. Every diagram has a `check(c)` that recomputes the physics behind the drawing from the same
   values and returns `[description, ok]` pairs: e.g. the drawn trapezium's area equals the
   displacement the caption states, velocity really is zero at t = 8 s, the vernier line that
   coincides really is the one the reading needs. Check every number the caption or the drawing
   states.
3. Every point and label is registered so `audit` runs: tags inside the frame, no tag on another
   tag, point or label (4 px gap), no leader line through a point or label it does not name.
   `draw(c).unplaced` must be empty.
4. `id` from BRIEF-12-07-08.md; `topic` is the topic's index in the chapter's `topics` array (Class 12
   Chapter 7: app topics 01–05 are 0–4 (book Subtopics 00, 01, 04, 02, 03 in page order), Additional
   topics A–E are 5–9; Chapter 8: topics 01–04 are 0–3, Additional topics A–D are 4–7);
   `name` is a short name a student would say ("Simple pendulum", "Reading x–t and v–t graphs");
   `cases`: one per panel when the book's figure has panels ((i), (ii), (iii), or "top / bottom"),
   with `chip` a 1–3 word label for the panel and `cap` the book's caption text for that panel,
   word for word (minus "see next page"-type pointers, which you must report). One case when the
   figure is one picture: `cap` = the whole caption, word for word.
5. Show what the book's figure shows — the same objects, values, labels, axes and highlights —
   in our style. Do not add physics the figure does not have, and do not drop any.

## Seeing your drawings

You cannot use the app or a simulator. Instead:

```
D=/Users/nikhi/Developer/monk-books/work-<you>/render
cd /Users/nikhi/Developer/monk-learning-app && DUMP_DIAGRAMS=$D npx jest lib/diagrams/__tests__/dump
cd $D && qlmanage -t -s 1000 -o . <id>__*.svg >/dev/null 2>&1
```

then open the PNGs with the Read tool. (The dump writes every registered diagram, other agents'
included; only look at yours.) Fonts are the Mac's stand-ins, so judge layout and correctness,
not typography. Compare each drawing side by side with the book's page image. Iterate until each
one is clear, correct and in the style.

## Done means

- Every drawing in your pages is redrawn (numbered figures and unnumbered drawings), with ids
  per BRIEF-12-07-08.md.
- `npx jest lib/diagrams` passes (checks, audit, nothing unplaced, unique ids).
- `npx tsc --noEmit` and eslint on your file pass.
- Your report lists: each diagram (id, page, name, cases, what its `check` verifies), any drawing
  in your pages you judged NOT to be a drawing (e.g. a table) and why, and anything you could not
  draw faithfully.

## Added for Chapters 9–10 (still applies)

- Vector arrows (U+20D7 after the letter) in `Sketch.text`/`sym` text render correctly in the app
  now; use them where the book's figure has them.
- Fluids and heat figures are computed from the physics like the others: pressure linear in depth,
  the free-surface slope tan θ = a/g, the rotating paraboloid y = ω²x²/(2g), continuity A₁v₁ = A₂v₂,
  a terminal-velocity v–t curve approaching v_t exponentially, the Poiseuille parabolic velocity
  profile, capillary rise h = 2S cos θ/(rρg), a heating curve whose leg lengths match Q = mcΔT and
  Q = mL for the stated values, a cooling curve that is a real exponential, a phase diagram with the
  triple point and the fusion curve's negative slope for water. Each `check` recomputes these.
- A label must sit clear of every outline it does not name (4 px). Chapter 7's tunnel figure had a
  label overrunning the Earth's outline: measure it.

## Added for Chapters 11–14

- Thermodynamics, kinetic theory, oscillations and waves figures are computed like the others:
  P–V curves from PV = nRT (isotherms PV = const, adiabats PV^γ = const, steeper than isotherms by γ),
  cycle areas equal to the net work the book states, Carnot cycles with the right efficiency, the
  Maxwell–Boltzmann curve with v_mp < v_av < v_rms in the right ratios (1 : 1.128 : 1.225), SHM x–t /
  v–t / a–t phases, energy parabolas, damped envelopes A e^(−bt/2m), resonance curves, wave shapes from
  y = A sin(kx − ωt), standing-wave nodes at the right spacings, Doppler wavefronts. Each `check`
  recomputes them from the values the book gives.
- A label must sit clear of every line it does not name (4 px), measured, as in Chapters 9–10.
- Fitting matters on a phone: when a to-scale drawing makes a part unreadably small, keep it to scale
  only if each part can still be seen and named; otherwise draw it as a clearly labelled schematic with
  correct relative slopes/order, and say which you chose.

## Added for Class 12 (electrostatics)

- Computed like the others, from the physics: field lines of point charges and dipoles traced by
  integrating the field (lines start on + and end on −, never cross, leave a conductor at right
  angles, density shows strength); equipotentials perpendicular to field lines; the dipole field
  on its axis twice that on its equator at the same distance; the ring's on-axis field E(x) =
  kQx/(x² + R²)^(3/2) peaking at x = R/√2; Gauss-law E(r) graphs (inside a shell zero, a solid
  sphere linear then 1/r², a line 1/r, a sheet constant); V(r) graphs continuous where E jumps;
  capacitor plates with uniform field between, fringing only if the book shows it; dielectric
  slabs and series/parallel networks as the book draws them. Each `check` recomputes what the
  drawing and caption state (peak position, ratios, slopes, the stated values).
- Vectors keep their arrows in labels (E⃗, p⃗, F⃗); charges are labelled as the book does (+q, −q, Q).
- Read the Errata (/Users/nikhi/Developer/monk-books/errata.txt, pp. 929–933): no figure defects are
  listed for Chapters 1–2, but if you find a figure that contradicts its own text or physics, draw
  the physically correct version only if the text supports it, and report it either way.
- Never open, boot or use the iOS Simulator or an Android emulator.
- The disk is nearly full: delete your render PNG/SVG files when you are done.

## Added for Chapters 3 and 4

- **Circuits** (most of Chapter 3): draw resistors as the standard zig-zag (or the book's box symbol if
  it uses one — match the book), cells with long (+) and short (−) plates, ammeter/voltmeter/
  galvanometer as labelled circles (A, V, G), switches/keys, the meter-bridge wire with its scale,
  the potentiometer wire with jockey. Build small helpers in your file (copy, don't import across
  chapter files). Every circuit `check` reads the wiring back as nodes (as physics-12-02.ts does for
  capacitor networks) and recomputes the equivalent resistance, currents, balance condition or reading
  the caption or the text's example states.
- **Magnetic fields** (Chapter 4): field lines of a straight wire (concentric circles, right-hand rule
  sense), a loop and a solenoid; ⊙ / ⊗ marks for out of / into the page; circular and helical paths of
  charged particles (radius mv/(qB), pitch from v cos θ); force directions from F⃗ = qv⃗ × B⃗ and
  I L⃗ × B⃗; torque on a loop; galvanometer shunt and series-resistor circuits; the magnetic dipole
  field. Each `check` recomputes directions (cross products) and the values the caption states.
- **Figure 3.1** is the book's chapter map (eight topic boxes and their links): draw it as a tidy flow
  chart in the App tags style (tags for the boxes, arrows between them), topic index 0 (the guide).

## Added for Chapters 5 and 6

- **Magnetism and matter:** bar-magnet field lines (closed loops, N to S outside, S to N inside) computed
  from a dipole or two poles; the Earth's field with geographic and magnetic axes, declination and dip
  (B_H, B_V, tan δ = B_V/B_H); para-, dia- and ferromagnetic samples in a field (lines crowd into para/ferro,
  spread out of dia); a hysteresis loop (retentivity, coercivity, its area); toroids and electromagnets.
- **Induction:** coil-and-magnet experiments with galvanometer deflections from Lenz's law; a rod sliding
  on rails (ε = Blv, current direction, the force opposing motion); eddy-current pendulums; self and mutual
  inductance; LR growth/decay curves (time constant L/R, 63%); the AC generator (coil, slip rings, brushes;
  ε = NBAω sin ωt with the right phase). Each `check` verifies every direction (cross products, Lenz) and
  every value the caption states.
- "&" in labels now renders correctly (the renderer decodes entities).
- Leader dots must not land on an arrowhead or a mark (⊙, a tick); labels 4 px clear of dashed guides and
  of each other; draw small symbols large enough to read on a phone. Captions keep units with numbers
  automatically (Ω, T, Wb included).

## Added for Chapters 7 and 8

- **AC:** sinusoids V = V₀ sin ωt with the right phase for R (in phase), L (current lags by 90°) and C
  (current leads by 90°); phasor diagrams with rotating arrows, V_R along I, V_L ahead, V_C behind, and the
  resultant V with tan φ = (X_L − X_C)/R; resonance curves (current against ω) peaking at ω₀ = 1/√(LC) with
  the bandwidth/Q drawn as the book shows; LC energy exchange; transformer coils on a core. Each `check`
  recomputes the phases, the resultant's length and angle, the peak position and every stated value.
- **EM waves:** a plane wave with E⃗ and B⃗ in phase, perpendicular to each other and to the direction of
  travel (E⃗ × B⃗ along propagation); a charging capacitor with conduction and displacement current; the
  spectrum as a scale with the book's ranges. Each `check` verifies the directions and the values.
