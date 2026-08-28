/**
 * Ch10 · Section 42 — "Stefan-Boltzmann and Wien"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,19.24,25.55,35.54,45.09] — beats 0-1 exactly 1s
 * apart, so those Fade delays stay ≤ ~0.3s):
 *  0 intro: the two radiation laws, cleanly
 *  1 Stefan-Boltzmann: P=eσAT⁴, P_net=eσA(T⁴−T₀⁴)
 *  2 e = emissivity (0 to 1, 1 for black body); σ = 5.67×10⁻⁸ W/(m²K⁴)
 *  3 black body: emissive power per unit area = σT⁴
 *  4 Wien's law: λ_m T = b
 *  5 b = 2.9×10⁻³ m·K; hotter ⇒ smaller λ_m ⇒ bluer
 *  6 golden rule: always work in absolute kelvin
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | law mid x540 bl118 · net mid x540 bl145
 *  b2 | constants mid x540 bl178
 *  b3 | note mid x540 bl210
 *  b4 | wien mid x540 bl245
 *  b5 | note mid x540 bl278
 *  b6 | box x300..780 y305..347 · rule mid x540 bl331
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("stefan-boltzmann and wien", "stefan-boltzmann aur wien")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("the two radiation laws, cleanly", "dono radiation laws, saaf saaf")}
        </T>
      </Fade>

      {/* beat 1 — Stefan-Boltzmann */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={118} size={15} fill={INK} weight={700} anchor="middle">
          P = eσAT⁴
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={145} size={13} fill={INK} anchor="middle">
          P_net = eσA(T⁴−T₀⁴)
        </T>
      </Fade>

      {/* beat 2 — e and sigma */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={178} size={12} fill={MUTED} anchor="middle">
          e ∈ [0,1] (1 = black body),  σ = 5.67×10⁻⁸ W/(m²K⁴)
        </T>
      </Fade>

      {/* beat 3 — black body per-area */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={210} size={13} fill={INK} script anchor="middle">
          {t("black body: emissive power per unit area = σT⁴", "black body: per unit area emissive power = σT⁴")}
        </T>
      </Fade>

      {/* beat 4 — Wien's law */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={245} size={15} fill={INK} weight={700} anchor="middle">
          λ_m T = b
        </T>
      </Fade>

      {/* beat 5 — Wien's constant */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={278} size={12} fill={MUTED} script anchor="middle">
          {t("b = 2.9×10⁻³ m·K — hotter ⇒ smaller λ_m ⇒ bluer", "b = 2.9×10⁻³ m·K — garam ⇒ chhota λ_m ⇒ bluer")}
        </T>
      </Fade>

      {/* beat 6 — the golden rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M300 305 h480 v42 h-480 z" stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.55)}>
        <T x={540} y={331} size={14} fill={RED} weight={700} anchor="middle">
          {t("always work in ABSOLUTE KELVIN", "hamesha ABSOLUTE KELVIN mein kaam karo")}
        </T>
      </Fade>
    </Scene>
  );
}
