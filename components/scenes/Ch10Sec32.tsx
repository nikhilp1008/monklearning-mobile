/**
 * Ch10 · Section 32 — "Building the series and parallel rules"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,5,14.39,27.02] — beats 0-4 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 intro: the derivation every hard problem reduces to
 *  1 setup: rod T₁→T₂ then T₂→T₃, junction at T₂
 *  2 steady state: no pileup at junction — same H through both
 *  3 T₁−T₂ = HR₁, T₂−T₃ = HR₂
 *  4 add: T₁−T₃ = H(R₁+R₂) ⇒ R_eq = R₁+R₂
 *  5 parallel setup: two rods sharing the same ΔT
 *  6 H = ΔT(1/R₁+1/R₂) ⇒ reciprocals add
 *  7 shortcut: T₂ = (K₁T₁+K₂T₃)/(K₁+K₂), weighted toward better conductor
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | rod1 x200..450 y115..135 · rod2 x450..700 y115..135 · junction (450,125) ·
 *       T₁ end x180 bl130 · T₂ mid x450 bl105 · T₃ st x720 bl130
 *  b2 | fact mid x540 bl165
 *  b3 | drops mid x540 bl195
 *  b4 | box x330..750 y225..260 · conclusion mid x540 bl248
 *  b5 | label mid x540 bl285 · rod1 x300..600 y295..310 ·
 *       rod2 x300..600 y320..335 · connectors x300/600
 *  b6 | box x300..780 y350..385 · conclusion mid x540 bl372
 *  b7 | shortcut mid x540 bl410
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

export default function Ch10Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("building the series and parallel rules", "series aur parallel rules ki derivation")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("the derivation every hard problem reduces to", "yeh derivation, jismein har mushkil problem simat jaata")}
        </T>
      </Fade>

      {/* beat 1 — series setup with junction */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M200 115 h250 v20 h-250 z" stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M450 115 h250 v20 h-250 z" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M446 121 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" stroke={INK} sw={1.6} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={180} y={130} size={12} fill={RED} anchor="end">T₁</T>
        <T x={450} y={105} size={12} fill={INK} anchor="middle">T₂</T>
        <T x={720} y={130} size={12} fill={MUTED} anchor="start">T₃</T>
      </Fade>

      {/* beat 2 — steady state fact */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={165} size={12} fill={INK} script anchor="middle">
          {t("steady state: no pileup at the junction — same H through both", "steady state: junction pe pileup nahi — dono mein same H")}
        </T>
      </Fade>

      {/* beat 3 — the two drops */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={195} size={13} fill={INK} anchor="middle">
          T₁−T₂ = HR₁,  T₂−T₃ = HR₂
        </T>
      </Fade>

      {/* beat 4 — the conclusion */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M330 225 h420 v35 h-420 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={248} size={14} fill={GREEN} weight={800} anchor="middle">
          T₁−T₃ = H(R₁+R₂) ⇒ R_eq = R₁+R₂
        </T>
      </Fade>

      {/* beat 5 — parallel setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <T x={540} y={285} size={12} fill={INK} script weight={700} anchor="middle">
          {t("parallel — same ΔT across both", "parallel — dono mein same ΔT")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M300 295 h300 v15 h-300 z" stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.65)} d="M300 320 h300 v15 h-300 z" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d="M300 295 v40 M600 295 v40" stroke={MUTED} sw={1.6} dur={0.4} />

      {/* beat 6 — the parallel conclusion */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M300 350 h480 v35 h-480 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.55)}>
        <T x={540} y={372} size={14} fill={GREEN} weight={800} anchor="middle">
          H = ΔT(1⁄R₁+1⁄R₂) ⇒ 1⁄R_eq = 1⁄R₁+1⁄R₂
        </T>
      </Fade>

      {/* beat 7 — the shortcut */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={410} size={12} fill={AMBER_DARK} script anchor="middle">
          {t(
            "shortcut: T₂ = (K₁T₁+K₂T₃)/(K₁+K₂) — weighted toward the better conductor",
            "shortcut: T₂ = (K₁T₁+K₂T₃)/(K₁+K₂) — behtar conductor ki taraf weighted"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
