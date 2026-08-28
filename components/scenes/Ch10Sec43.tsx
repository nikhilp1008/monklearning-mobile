/**
 * Ch10 · Section 43 — "Kirchhoff, Newton's cooling, and the black body"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,5.03,16.04,23.3,24.3,25.3,26.3] — beats 3-6 exactly 1s
 * apart, so those Fade delays stay ≤ ~0.3s):
 *  0 intro: two more relations complete the toolkit
 *  1 Kirchhoff's law: emissive/absorptive ratio same for all bodies = E_black
 *  2 practical reading: e = α — good absorbers are good emitters
 *  3 Newton's law: −dT/dt = k(T−T₀), for a small excess
 *  4 k depends on area, surface nature, specific heat; T₀=surroundings
 *  5 average form: (T₁−T₂)/t = k(T̄ −T₀)
 *  6 black body once more: α=1, emits the max at every wavelength
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | kirchhoff mid x540 bl120
 *  b2 | practical mid x540 bl152
 *  b3 | newton mid x540 bl185
 *  b4 | note mid x540 bl215
 *  b5 | box x310..770 y240..282 · average mid x540 bl267
 *  b6 | note mid x540 bl315
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

export default function Ch10Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("kirchhoff, newton's cooling, and the black body", "kirchhoff, newton ki cooling, aur black body")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("two more relations complete the toolkit", "do aur relations toolkit poori karte hain")}
        </T>
      </Fade>

      {/* beat 1 — Kirchhoff formal */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={120} size={12} fill={INK} script anchor="middle">
          {t(
            "Kirchhoff: emissive/absorptive ratio, same for all bodies = E_black",
            "Kirchhoff: emissive/absorptive ratio, sab bodies ke liye same = E_black"
          )}
        </T>
      </Fade>

      {/* beat 2 — practical reading */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={152} size={13} fill={INK} weight={700} anchor="middle">
          e = α  ({t("good absorbers = good emitters", "achhe absorbers = achhe emitters")})
        </T>
      </Fade>

      {/* beat 3 — Newton's law */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={185} size={15} fill={INK} weight={700} anchor="middle">
          −dT/dt = k(T−T₀)
        </T>
      </Fade>

      {/* beat 4 — what k depends on */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={215} size={12} fill={MUTED} script anchor="middle">
          {t(
            "k depends on area, surface, specific heat; T₀ = surroundings",
            "k area, surface, specific heat par depend; T₀ = surroundings"
          )}
        </T>
      </Fade>

      {/* beat 5 — the practical average form */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M310 240 h460 v42 h-460 z" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={267} size={14} fill={AMBER_DARK} weight={800} anchor="middle">
          (T₁−T₂)/t = k(T̄ −T₀)
        </T>
      </Fade>

      {/* beat 6 — the black body, once more */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={315} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t("black body: α=1, emits the max at every wavelength", "black body: α=1, har wavelength par max emit karta")}
        </T>
      </Fade>
    </Scene>
  );
}
