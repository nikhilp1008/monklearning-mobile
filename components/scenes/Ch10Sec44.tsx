/**
 * Ch10 · Section 44 — "Deriving Newton's cooling from Stefan's law"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * The most-asked derivation of this subtopic — extra care taken.
 *
 * Beats (en [0,1,2,3,13.58,25.95,38.67] — beats 0-2 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 intro: Newton's cooling is Stefan's law for a small excess
 *  1 start: net power = eσA(T⁴−T₀⁴)
 *  2 loss from internal energy: −mc dT/dt = eσA(T⁴−T₀⁴)
 *  3 write T = T₀+ΔT (small), expand T⁴ by the binomial
 *  4 keep first order: T⁴ ≈ T₀⁴+4T₀³ΔT ⇒ difference ≈ 4T₀³ΔT
 *  5 substitute: −dT/dt = (4eσAT₀³/mc)(T−T₀) = k(T−T₀)
 *  6 cooling constant k=4eσAT₀³/mc — only an approximation, small excess
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | start mid x540 bl118
 *  b2 | loss mid x540 bl150
 *  b3 | expand mid x540 bl182
 *  b4 | keep mid x540 bl214
 *  b5 | box x300..780 y240..282 · sub mid x540 bl267
 *  b6 | constant mid x540 bl315
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("deriving newton's cooling from stefan's law", "stefan's law se newton ki cooling derive karna")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("Newton's cooling is Stefan's law for a small excess", "Newton ki cooling — chhote excess ke liye Stefan's law")}
        </T>
      </Fade>

      {/* beat 1 — starting point */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={118} size={14} fill={INK} anchor="middle">
          {t("start: net power = eσA(T⁴−T₀⁴)", "shuru: net power = eσA(T⁴−T₀⁴)")}
        </T>
      </Fade>

      {/* beat 2 — loss from internal energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={150} size={13} fill={INK} anchor="middle">
          −mc dT/dt = eσA(T⁴−T₀⁴)
        </T>
      </Fade>

      {/* beat 3 — write T = T0 + delta T */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={182} size={12} fill={MUTED} script anchor="middle">
          {t("T = T₀+ΔT (small) — expand T⁴ by the binomial", "T = T₀+ΔT (chhota) — T⁴ ko binomial se expand karo")}
        </T>
      </Fade>

      {/* beat 4 — keep first order */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={214} size={13} fill={INK} anchor="middle">
          T⁴ ≈ T₀⁴+4T₀³ΔT ⇒ diff ≈ 4T₀³ΔT
        </T>
      </Fade>

      {/* beat 5 — the substitution */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M300 240 h480 v42 h-480 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={267} size={14} fill={GREEN} weight={800} anchor="middle">
          −dT/dt = (4eσAT₀³/mc)(T−T₀) = k(T−T₀)
        </T>
      </Fade>

      {/* beat 6 — the cooling constant */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={315} size={13} fill={RED} script weight={700} anchor="middle">
          {t(
            "k=4eσAT₀³/mc — only an approximation, valid for a small excess",
            "k=4eσAT₀³/mc — sirf approximation, chhote excess ke liye sahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
