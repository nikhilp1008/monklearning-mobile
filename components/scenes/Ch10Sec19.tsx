/**
 * Ch10 · Section 19 — "Heat: per degree, per body, per mole"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,5,20.96] — beats 0-4 exactly 1s apart, so those
 * Fade delays stay ≤ ~0.3s):
 *  0 intro: the family of heat formulas — per degree, per body, per mole
 *  1 the workhorse: Q = m c ΔT (no phase change)
 *  2 c = specific heat capacity, SI unit J/(kg·K), a material property
 *  3 C = m c — heat capacity of the whole body, in J/K
 *  4 C depends on mass and material; c depends on material alone
 *  5 molar heat capacity: Mc = Q/(nΔT), J/(mol·K)
 *  6 subtlety: c ranges 0 to ∞ (even negative!) — not a fixed number
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl90
 *  b1 | formula mid x540 bl135
 *  b2 | note mid x540 bl175
 *  b3 | note mid x540 bl210
 *  b4 | line1 mid x540 bl245 · line2 mid x540 bl280
 *  b5 | formula mid x540 bl315
 *  b6 | box x300..780 y340..390 · text mid x540 bl365
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("heat — per degree, per body, per mole", "heat — per degree, per body, per mole")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={12} fill={INK} script anchor="middle">
          {t("the family of heat formulas — pinned down", "heat formulas ka poora parivaar — pinned down")}
        </T>
      </Fade>

      {/* beat 1 — the workhorse */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={135} size={26} fill={INK} weight={800} anchor="middle">
          Q = m c ΔT
        </T>
      </Fade>

      {/* beat 2 — specific heat capacity */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={175} size={13} fill={INK} script anchor="middle">
          {t("c = specific heat capacity — SI unit J⁄(kg·K), a material property", "c = specific heat capacity — SI unit J⁄(kg·K), material ki property")}
        </T>
      </Fade>

      {/* beat 3 — heat capacity of the whole body */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={210} size={13} fill={INK} anchor="middle">
          C = m c — {t("heat capacity of the WHOLE body, J⁄K", "poori body ki heat capacity, J⁄K")}
        </T>
      </Fade>

      {/* beat 4 — the distinction */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={245} size={13} fill={AMBER_DARK} script anchor="middle">
          {t("C depends on mass AND material", "C mass AUR material dono par depend karta")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={280} size={13} fill={GREEN} script anchor="middle">
          {t("c depends on material ALONE", "c sirf material par depend karta")}
        </T>
      </Fade>

      {/* beat 5 — molar heat capacity */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={315} size={13} fill={INK} anchor="middle">
          Mc = Q⁄(nΔT), J⁄(mol·K)  ({t("M=molar mass, n=moles", "M=molar mass, n=moles")})
        </T>
      </Fade>

      {/* beat 6 — the subtlety */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M300 340 h480 v50 h-480 z" stroke={AMBER} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.55)}>
        <T x={540} y={365} size={13} fill={RED} script weight={700} anchor="middle">
          {t(
            "c can range 0 to ∞ (even negative!) — not a fixed number",
            "c 0 se ∞ tak (kabhi negative bhi!) — fixed number nahi hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
