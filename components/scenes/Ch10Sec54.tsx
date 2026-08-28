/**
 * Ch10 · Section 54 — "Thermometric relation, gas thermometer, absolute zero"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,14.48,26.17,37.52,48.19,55.44] — beat 0 is 1s, rest roomy):
 *  0 intro: make the measurement formulas precise
 *  1 linear thermometric relation: t = [(X_t−X₀)/(X₁₀₀−X₀)] × 100°C
 *  2 X = any thermometric property; X₀=ice point, X₁₀₀=steam point
 *  3 constant-volume gas thermometer: T = 273.16 × (P/P_tr)
 *  4 needs only ONE fixed point — the triple point of water
 *  5 absolute zero: 0 K = −273.15°C
 *  6 reminder: an extrapolated limit — approached, never reached
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | box x270..810 y105..150 · formula mid x540 bl132
 *  b2 | note mid x540 bl180
 *  b3 | formula mid x540 bl215
 *  b4 | note mid x540 bl248
 *  b5 | equation mid x540 bl285
 *  b6 | reminder mid x540 bl320
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={18} fill={INK} script>
          {t("thermometric relation, gas thermometer, absolute zero", "thermometric relation, gas thermometer, absolute zero")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("making the measurement formulas precise", "measurement formulas ko precise banana")}
        </T>
      </Fade>

      {/* beat 1 — the linear thermometric relation */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M270 105 h540 v45 h-540 z" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={132} size={14} fill={AMBER_DARK} weight={800} anchor="middle">
          t = [(X_t−X₀)/(X₁₀₀−X₀)] × 100°C
        </T>
      </Fade>

      {/* beat 2 — what X is */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={180} size={12} fill={MUTED} script anchor="middle">
          {t(
            "X = any thermometric property — X₀=ice point, X₁₀₀=steam point",
            "X = koi bhi thermometric property — X₀=ice point, X₁₀₀=steam point"
          )}
        </T>
      </Fade>

      {/* beat 3 — the gas thermometer formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={215} size={14} fill={INK} weight={700} anchor="middle">
          T = 273.16 × (P/P_tr)
        </T>
      </Fade>

      {/* beat 4 — one fixed point */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={248} size={12} fill={INK} script anchor="middle">
          {t(
            "needs only ONE fixed point — the triple point of water",
            "sirf EK fixed point chahiye — paani ka triple point"
          )}
        </T>
      </Fade>

      {/* beat 5 — absolute zero */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={285} size={14} fill={RED} weight={700} anchor="middle">
          0 K = −273.15°C
        </T>
      </Fade>

      {/* beat 6 — the reminder */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={320} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "an extrapolated limit — approached, but never reached",
            "ek extrapolated limit — kareeb, par kabhi poora nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
