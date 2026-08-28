/**
 * Ch10 · Section 55 — "The gas laws combined and the ideal-gas equation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: hi reveals have beats 0-2 exactly 1s apart, so those Fade delays
 * stay ≤ ~0.3s.
 *
 * Beats (en [0,4.69,17.41,28.25,36.1,47.87,64.68]):
 *  0 intro: the combined toolkit for any fixed mass of gas
 *  1 recap: Boyle PV=const(T), Charles V/T=const(P), Gay-Lussac P/T=const(V)
 *  2 combined identity: P₁V₁/T₁ = P₂V₂/T₂ (all T in kelvin)
 *  3 the ideal-gas equation: PV = nRT = NkBT
 *  4 constants: R=8.314 J/(mol·K), kB=1.38×10⁻²³ J/K
 *  5 expansion coefficient 1/273.15 — same for all ideal gases
 *  6 the triple point of water: 273.16K at 611.7 Pa defines the kelvin
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | recap mid x540 bl118
 *  b2 | box x330..750 y143..185 · identity mid x540 bl168
 *  b3 | equation mid x540 bl215
 *  b4 | constants mid x540 bl248
 *  b5 | note mid x540 bl280
 *  b6 | triple point mid x540 bl315
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

export default function Ch10Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("the gas laws combined and the ideal-gas equation", "gas laws jode aur ideal-gas equation")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("the combined toolkit for any fixed mass of gas", "kisi bhi fixed mass ke gas ke liye combined toolkit")}
        </T>
      </Fade>

      {/* beat 1 — the three laws recap */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={118} size={11} fill={MUTED} anchor="middle">
          Boyle: PV=const(T) · Charles: V/T=const(P) · Gay-Lussac: P/T=const(V)
        </T>
      </Fade>

      {/* beat 2 — the combined identity */}
      <Draw on={beat >= 2} delay={dl(2, 0.15)} d="M330 143 h420 v42 h-420 z" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={168} size={15} fill={AMBER_DARK} weight={800} anchor="middle">
          P₁V₁/T₁ = P₂V₂/T₂
        </T>
      </Fade>

      {/* beat 3 — the ideal-gas equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={215} size={16} fill={INK} weight={800} anchor="middle">
          PV = nRT = Nk_BT
        </T>
      </Fade>

      {/* beat 4 — the constants */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={248} size={12} fill={INK} anchor="middle">
          R = 8.314 J/(mol·K),  k_B = 1.38×10⁻²³ J/K
        </T>
      </Fade>

      {/* beat 5 — the expansion coefficient */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={280} size={12} fill={MUTED} script anchor="middle">
          {t("expands at 1/273.15 per °C — same for all ideal gases", "1/273.15 per °C se expand — sab ideal gases ke liye same")}
        </T>
      </Fade>

      {/* beat 6 — the triple point */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={315} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "triple point of water: 273.16K at 611.7 Pa — defines the kelvin",
            "paani ka triple point: 273.16K, 611.7 Pa — kelvin ki paribhasha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
