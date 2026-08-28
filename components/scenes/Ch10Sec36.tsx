/**
 * Ch10 · Section 36 — "Worked example: how ice thickens on a pond"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,19.79,27.81] — beats 0-4 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: an advanced integration, a lesson that outlives the numbers
 *  1 setup: pond 4cm ice, air −10°C above, water 0°C below — time to 6cm?
 *  2 ice forms at the bottom — heat conducts up through x, freezing slows
 *  3 ρL_f A dx/dt = KAθ/x ⇒ x dx = (Kθ/ρL_f) dt
 *  4 integrate 4→6cm: t = ρL_f(x₂²−x₁²)/(2Kθ)
 *  5 t ≈ 1.41×10⁴ s ≈ 3.9 hours
 *  6 thickening time ∝ x² — fast at first, then crawls
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | setup mid x540 bl115
 *  b2 | physics mid x540 bl148
 *  b3 | ode mid x540 bl180
 *  b4 | integral mid x540 bl212
 *  b5 | box x350..730 y240..282 · answer mid x540 bl265
 *  b6 | insight mid x540 bl315
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
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("worked example — how ice thickens on a pond", "worked example — talab par baraf kaise mota hota")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("an advanced integration — a lesson that outlives the numbers", "advanced integration — sabak jo numbers se aage jaata")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={115} size={12} fill={INK} script anchor="middle">
          {t(
            "pond: 4cm ice, air −10°C above, water 0°C below — time to 6cm?",
            "talab: 4cm ice, air −10°C upar, paani 0°C neeche — 6cm tak kitna time?"
          )}
        </T>
      </Fade>

      {/* beat 2 — the physics */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={148} size={12} fill={INK} script anchor="middle">
          {t(
            "ice forms at the bottom — heat conducts up through x, freezing slows",
            "ice neeche banta — heat x ke through upar jaati, freezing dheemi hoti"
          )}
        </T>
      </Fade>

      {/* beat 3 — the differential equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={180} size={13} fill={INK} anchor="middle">
          ρL_f A dx/dt = KAθ/x ⇒ x dx = (Kθ/ρL_f) dt
        </T>
      </Fade>

      {/* beat 4 — the integral */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={212} size={13} fill={INK} anchor="middle">
          {t("integrate 4→6cm:", "4→6cm integrate karo:")} t = ρL_f(x₂²−x₁²)/(2Kθ)
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M350 240 h380 v42 h-380 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={266} size={15} fill={GREEN} weight={800} anchor="middle">
          t ≈ 1.41×10⁴ s ≈ 3.9 hours
        </T>
      </Fade>

      {/* beat 6 — the crucial insight */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={315} size={14} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "thickening time ∝ x² — fast at first, then it crawls",
            "mota hone ka time ∝ x² — pehle tez, phir rengta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
