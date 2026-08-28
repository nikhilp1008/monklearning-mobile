/**
 * Ch10 · Section 60 — "Worked example: absolute zero from two readings"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,9.17,24.95,38.35,50.13] — beats 0-1 exactly 1s apart,
 * so those Fade delays stay ≤ ~0.3s):
 *  0 hook: recover absolute zero from just two measurements
 *  1 setup: P=1.000atm@0°C, P=1.366atm@100°C — find the implied absolute zero
 *  2 model: P = a + bt (t in Celsius)
 *  3 at t=0: a=1.000; slope b=(1.366−1)/100=3.66×10⁻³ atm/°C
 *  4 set P=0: t₀ = −a/b ≈ −273.2°C
 *  5 exactly how it was first pinned down — extrapolating to zero pressure
 *  6 the fingerprint: 1.366 = 373.15/273.15 — the absolute scale inside Celsius
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | setup mid x540 bl122
 *  b2 | model mid x540 bl155
 *  b3 | slope mid x540 bl190
 *  b4 | box x340..740 y215..257 · t0 mid x540 bl241
 *  b5 | insight mid x540 bl288
 *  b6 | fingerprint mid x540 bl322
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("worked example — absolute zero from two readings", "worked example — do readings se absolute zero")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={12} fill={INK} script anchor="middle">
          {t("recovering absolute zero from just two measurements", "sirf do measurements se absolute zero nikaalna")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={122} size={12} fill={INK} script anchor="middle">
          {t(
            "P=1.000atm at 0°C, P=1.366atm at 100°C — find the implied T₀",
            "P=1.000atm 0°C par, P=1.366atm 100°C par — implied T₀?"
          )}
        </T>
      </Fade>

      {/* beat 2 — the model */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={155} size={13} fill={INK} anchor="middle">
          {t("model: P = a + bt (t in Celsius)", "model: P = a + bt (t Celsius mein)")}
        </T>
      </Fade>

      {/* beat 3 — a and b */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={190} size={12} fill={MUTED} anchor="middle">
          a=1.000; b=(1.366−1)/100=3.66×10⁻³
        </T>
      </Fade>

      {/* beat 4 — set P to zero */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M340 215 h400 v42 h-400 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={241} size={15} fill={GREEN} weight={800} anchor="middle">
          t₀ = −a/b ≈ −273.2°C
        </T>
      </Fade>

      {/* beat 5 — the insight */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={288} size={12} fill={AMBER_DARK} script anchor="middle">
          {t(
            "exactly how it was first pinned down — extrapolate to zero P",
            "isi tarah pehli baar pata chala tha — zero P tak extrapolate"
          )}
        </T>
      </Fade>

      {/* beat 6 — the fingerprint */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={322} size={12} fill={INK} script weight={700} anchor="middle">
          {t(
            "fingerprint: 1.366 = 373.15/273.15 — the absolute scale hiding inside",
            "fingerprint: 1.366 = 373.15/273.15 — andar chhupa absolute scale"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
