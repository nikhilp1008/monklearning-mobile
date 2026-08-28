/**
 * Ch14 · Section 37 — "Formula recap: the complete Waves toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.49, 20.67, 33.94, 43.19, 54.61, 63.25, 75.28]):
 *  0 intro: complete toolkit, whole chapter, one frame — recall not re-teach
 *  1 wave basics: v=fλ=λ/T=ω/k, string v=√(T/μ), v_p,max=Aω
 *  2 superposition: A=√(A1²+A2²+2A1A2cosφ), I_max/min=(√I1±√I2)²
 *  3 beats: f_beat=|f1−f2|, Δf/f=½ΔT/T
 *  4 standing waves: string/open all harmonics, closed odd only
 *  5 resonance tube: λ=2(l2−l1), e=(l2−3l1)/2
 *  6 Doppler: f'=f(v±vo)/(v∓vs), wall-echo beat=2uf/(v−u)
 *  7 closing: if you can say what each line does, you're ready
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b1 | wave basics (12.5)            | T st  | x60 bl290             y278..295
 *  b2 | superposition (12)            | T st  | x60 bl330             y318..335
 *  b3 | beats (13)                    | T st  | x60 bl370             y358..375
 *  b4 | standing waves (11.5)         | T st  | x60 bl410             y398..415
 *  b5 | resonance tube (12.5)         | T st  | x60 bl450             y438..455
 *  b6 | Doppler (12)                  | T st  | x60 bl490             y478..495
 *  b7 | closing (13)                  | T mid | x540 bl545            y532..549
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("formula recap: the complete Waves toolkit", "formula recap: poora Waves toolkit")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t("complete toolkit — recall it, don't re-derive it!", "poora toolkit — recall karo, dobara derive mat karo!")}
        </T>
      </Fade>

      {/* beat 1 — wave basics */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={290} size={12.5} fill={INK} anchor="start">
          wave: v=fλ=λ/T=ω/k · string: v=√(T/μ) · v_p,max=Aω
        </T>
      </Fade>

      {/* beat 2 — superposition */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={330} size={12} fill={INK} anchor="start">
          superposition: A=√(A1²+A2²+2A1A2cosφ) · I_max/min=(√I1±√I2)²
        </T>
      </Fade>

      {/* beat 3 — beats */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={370} size={13} fill={INK} anchor="start">
          beats: f_beat=|f1−f2| · Δf/f=½ΔT/T
        </T>
      </Fade>

      {/* beat 4 — standing waves */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={410} size={11.5} fill={INK} anchor="start">
          standing waves: string/open f_n=nv/2L(all) · closed f_n=(2n−1)v/4L(odd)
        </T>
      </Fade>

      {/* beat 5 — resonance tube */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={450} size={12.5} fill={INK} anchor="start">
          resonance tube: λ=2(l2−l1) · e=(l2−3l1)/2
        </T>
      </Fade>

      {/* beat 6 — Doppler */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={60} y={490} size={12} fill={INK} anchor="start">
          Doppler: f'=f(v±vo)/(v∓vs) · wall-echo beat=2uf/(v−u)
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={545} size={13} fill={RED} script>
          {t(
            "if you can say what each line does, you're ready!",
            "har line dekh ke bata sako to ready ho!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
