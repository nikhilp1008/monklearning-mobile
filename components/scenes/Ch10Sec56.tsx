/**
 * Ch10 · Section 56 — "Deriving absolute zero from a gas thermometer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * The full board derivation of absolute zero — extra care taken.
 *
 * Beats (en [0,1,2,3,4,13.56,28.23] — beats 0-4 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 intro: extrapolating P to zero defines a universal coldest temperature
 *  1 P(t) = P₀(1+γt), γ = 1/273.15 (fixed mass, fixed volume)
 *  2 every dilute gas gives the same γ — a property of temperature itself
 *  3 set P=0: 0 = P₀(1+t/273.15) ⇒ t = −273.15°C
 *  4 same intercept for every gas — the coldest conceivable temperature
 *  5 shift origin: T=t+273.15 ⇒ P(t) = P₀×T/T₀ (pure proportionality)
 *  6 adopt the triple point ⇒ T = 273.16 × (P/P_tr)
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | formula mid x540 bl118
 *  b2 | note mid x540 bl150
 *  b3 | box x330..750 y175..217 · result mid x540 bl200
 *  b4 | note mid x540 bl245
 *  b5 | shift mid x540 bl280
 *  b6 | box x320..760 y305..350 · final mid x540 bl332
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

export default function Ch10Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("deriving absolute zero from a gas thermometer", "gas thermometer se absolute zero derive karna")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t(
            "extrapolating P to zero defines a universal coldest temperature",
            "P ko zero tak extrapolate karna ek universal coldest T defines karta"
          )}
        </T>
      </Fade>

      {/* beat 1 — the experimental fact */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={118} size={14} fill={INK} anchor="middle">
          P(t) = P₀(1+γt), γ = 1/273.15
        </T>
      </Fade>

      {/* beat 2 — same gamma for every gas */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={150} size={12} fill={MUTED} script anchor="middle">
          {t(
            "every dilute gas gives the same γ — a property of temperature",
            "har dilute gas same γ deta — temperature ki apni property"
          )}
        </T>
      </Fade>

      {/* beat 3 — set P to zero */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M330 175 h420 v42 h-420 z" stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={200} size={14} fill={RED} weight={800} anchor="middle">
          0 = P₀(1+t/273.15) ⇒ t = −273.15°C
        </T>
      </Fade>

      {/* beat 4 — same intercept for every gas */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={245} size={12} fill={INK} script anchor="middle">
          {t(
            "same intercept for every gas — the coldest conceivable temperature",
            "har gas ka same intercept — sabse thanda temperature jo soch sakte"
          )}
        </T>
      </Fade>

      {/* beat 5 — shift the origin */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={280} size={13} fill={AMBER_DARK} weight={700} anchor="middle">
          T=t+273.15 ⇒ P(t) = P₀×T/T₀
        </T>
      </Fade>

      {/* beat 6 — the working formula */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M320 305 h440 v45 h-440 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.55)}>
        <T x={540} y={332} size={15} fill={GREEN} weight={800} anchor="middle">
          T = 273.16 × (P/P_tr)
        </T>
      </Fade>
    </Scene>
  );
}
