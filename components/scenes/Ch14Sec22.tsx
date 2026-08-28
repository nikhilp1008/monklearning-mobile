/**
 * Ch14 · Section 22 — "Standing waves and acoustics: the toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.6, 19.85, 29.14, 40.55, 53.22, 68.84, 86.58]):
 *  0 framing: complete reference for this subtopic
 *  1 y = 2a sin(kx)cos(ωt) — the standing wave itself
 *  2 spacing: node↔node = λ/2, node↔antinode = λ/4
 *  3 open pipe/string: f_n = nv/2L, ALL harmonics
 *  4 closed pipe: f_n = (2n−1)v/4L, ODD harmonics only
 *  5 end correction: L_eff = L + 0.6r per open end
 *  6 resonance tube: λ=2(l2−l1), v=2f(l2−l1), e=(l2−3l1)/2
 *  7 overtone map: string/open → 2nd harmonic; closed → 3rd harmonic
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b1 | "y=2a sin(kx)cos(ωt)" (16)    | T st  | x60 bl300             y288..305
 *  b2 | spacing (13)                  | T st  | x60 bl335             y323..340
 *  b3 | open/string f_n (13)          | T st  | x60 bl370             y358..375
 *  b4 | closed pipe f_n (13)          | T st  | x60 bl405             y393..410
 *  b5 | end correction (13)           | T st  | x560 bl300            y288..305
 *  b6 | λ,v formulas (13)             | T st  | x560 bl335            y323..340
 *  b6 | end-correction formula (13)   | T st  | x560 bl370            y358..375
 *  b7 | overtone: string/open (13)    | T st  | x560 bl405            y393..410
 *  b7 | overtone: closed (13)         | T st  | x560 bl430            y418..435
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("standing waves & acoustics: the toolkit", "standing waves & acoustics: toolkit")}
        </T>
      </Fade>

      {/* beat 0 — framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t("your complete reference for this subtopic", "is subtopic ka poora reference")}
        </T>
      </Fade>

      {/* beat 1 — the standing wave */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={300} size={16} fill={INK} anchor="start">
          y = 2a sin(kx)cos(ωt)
        </T>
      </Fade>

      {/* beat 2 — the spacing */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={335} size={13} fill={INK} anchor="start">
          node↔node = λ/2  ·  node↔antinode = λ/4
        </T>
      </Fade>

      {/* beat 3 — open pipe / string */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={370} size={13} fill={GREEN} anchor="start">
          {t("open pipe/string: f_n = nv/2L (ALL harmonics)", "open pipe/string: f_n = nv/2L (SAARE harmonics)")}
        </T>
      </Fade>

      {/* beat 4 — closed pipe */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={405} size={13} fill={RED} anchor="start">
          {t("closed pipe: f_n = (2n−1)v/4L (ODD only)", "closed pipe: f_n = (2n−1)v/4L (sirf ODD)")}
        </T>
      </Fade>

      {/* beat 5 — end correction */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={300} size={13} fill={INK} anchor="start">
          {t("end correction: L_eff = L + 0.6r (per open end)", "end correction: L_eff = L + 0.6r (per open end)")}
        </T>
      </Fade>

      {/* beat 6 — resonance tube */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={560} y={335} size={13} fill={INK} anchor="start">
          λ = 2(l₂−l₁)  ·  v = 2f(l₂−l₁)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={560} y={370} size={13} fill={INK} anchor="start">
          {t("end correction e = (l₂−3l₁)/2", "end correction e = (l₂−3l₁)/2")}
        </T>
      </Fade>

      {/* beat 7 — the overtone map */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={560} y={405} size={13} fill={GREEN} anchor="start">
          {t("string/open: 1st overtone = 2nd harmonic", "string/open: 1st overtone = 2nd harmonic")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={560} y={430} size={13} fill={RED} anchor="start">
          {t("closed pipe: 1st overtone = 3rd harmonic!", "closed pipe: 1st overtone = 3rd harmonic!")}
        </T>
      </Fade>
    </Scene>
  );
}
