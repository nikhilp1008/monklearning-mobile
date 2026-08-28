/**
 * Ch10 · Section 13 — "Worked example: a pendulum clock in a Rajasthan summer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: audio not yet generated for this section (Ch10 pipeline gap from
 * Sec12 onward, see PROGRESS.md) — verified via tsc + verify-scene.mjs
 * blank-board contract; per-beat geometry via careful manual box math.
 *
 * Beats (en [0,6.83,18.77,27.31,39.42,40.42,41.42], hi [0,1,12.43,19.6,
 * 31.12,41.45,54.76] — tight 1s gaps land at different beats per
 * language, so every Fade delay below stays ≤ ~0.4s):
 *  0 hook: last example — a genuine multi-step bridge, JEE Advanced level
 *  1 setup: pendulum clock, 20°C perfect → 45°C Rajasthan summer
 *  2 period: T = 2π√(L/g), T ∝ √L
 *  3 log differential: ΔT⁄T = ½ αΔθ
 *  4 conceptual core: hotter ⇒ longer pendulum ⇒ ticks less ⇒ runs SLOW
 *  5 substitute: ½ × 1.2×10⁻⁵ × 25 × 86400
 *  6 answer: ≈13 seconds lost every day
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl92
 *  b1 | pivot+string x540 y120..168 · bob c(540,180)r12 ·
 *       temp mid x540 bl215 · question mid x540 bl250
 *  b2 | formula mid x540 bl285
 *  b3 | differential mid x540 bl315
 *  b4 | core mid x540 bl350
 *  b5 | substitution mid x540 bl385
 *  b6 | box x380..700 y410..455 · answer mid x540 bl438
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("worked example — a pendulum clock in a Rajasthan summer", "worked example — Rajasthan ki garmi mein pendulum clock")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={92} size={13} fill={INK} script anchor="middle">
          {t(
            "the last example — a genuine multi-step bridge, JEE Advanced level",
            "aakhri example — poora multi-step bridge, JEE Advanced level"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M530 120 h20 M540 120 v48" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.35)} d="M528 168 A12 12 0 1 1 552 168 A12 12 0 1 1 528 168" stroke={INK_LIGHT} sw={1.8} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 0.65)}>
        <T x={540} y={215} size={12} fill={MUTED} anchor="middle">20°C → 45°C</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.95)}>
        <T x={540} y={250} size={13} fill={INK} script anchor="middle">
          {t("fast or slow? by how much after 1 day?", "tez ya dheeraj? 1 din mein kitna?")}
        </T>
      </Fade>

      {/* beat 2 — period formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={285} size={14} fill={INK} anchor="middle">
          T = 2π√(L⁄g), T ∝ √L
        </T>
      </Fade>

      {/* beat 3 — log differential */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={315} size={14} fill={INK} anchor="middle">
          ΔT⁄T = ½ αΔθ
        </T>
      </Fade>

      {/* beat 4 — the conceptual core */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={350} size={13} fill={RED} script weight={700} anchor="middle">
          {t(
            "hotter ⇒ longer pendulum ⇒ longer swings ⇒ ticks less ⇒ runs SLOW",
            "garam ⇒ lamba pendulum ⇒ lambe swing ⇒ kam ticks ⇒ DHEERE chalti"
          )}
        </T>
      </Fade>

      {/* beat 5 — substitute */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <T x={540} y={385} size={14} fill={INK} anchor="middle">
          = ½ × 1.2×10⁻⁵ × 25 × 86400
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw on={beat >= 6} delay={dl(6, 0.15)} d="M380 410 h320 v45 h-320 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={438} size={16} fill={GREEN} weight={800} anchor="middle">
          {t("≈ 13 seconds LOST every day", "≈ 13 second har din KHO jaate")}
        </T>
      </Fade>
    </Scene>
  );
}
