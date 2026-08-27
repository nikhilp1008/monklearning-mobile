/**
 * Ch03 · Section 31 — "Board derivation: integrating up the equations of motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.2, 20.1, 31.7, 41.8, 51.2, 61.4, 73.4]):
 *  0 heading
 *  1 start: a = dv/dt, constant
 *  2 integrate both sides
 *  3 box: v = v₀ + at
 *  4 now v = dr/dt, substitute
 *  5 integrate v₀ + at
 *  6 box: r = r₀ + v₀t + ½at²
 *  7 red: constant a REQUIRED
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 110 s14 · caption st x84 bl 134 s11
 *  b2 | st x104 bl 172 s14 · st x104 bl 200 s13
 *  b3 | box x104..500 y220..266 text cx302 bl 250 s16 · caption st x104 bl 290 s11
 *  b4 | st x580 bl 110 s14
 *  b5 | st x600 bl 148 s14 · st x600 bl 176 s13
 *  b6 | box x580..1010 y196..242 text cx795 bl 226 s16 · caption st x580 bl 266 s11
 *  b7 | bar M66 330 v52 · lines st x84 bl 348 / 372 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "CBSE DERIVATION — integrate the definitions",
            "CBSE DERIVATION — definitions ko integrate karo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the starting point */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={110} size={14} fill={INK} weight={700} anchor="start">
          {t("start:  a = dv ⁄ dt ,  a CONSTANT", "shuru:  a = dv ⁄ dt ,  a CONSTANT")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={84} y={134} size={11} fill={MUTED} script anchor="start">
          {t("that is the whole starting point", "bas yahi poora starting point hai")}
        </T>
      </Fade>

      {/* beat 2 — integrate once */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={104} y={172} size={14} fill={INK} weight={700} anchor="start">
          ∫ dv  (v₀ → v)  =  ∫ a dt  (0 → t)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={104} y={200} size={13} fill={INK} weight={700} anchor="start">
          {t(
            "v − v₀ = a t   (constant a walks out of the ∫)",
            "v − v₀ = a t   (constant a integral se bahar)"
          )}
        </T>
      </Fade>

      {/* beat 3 — first equation */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 116 220 h 372 q 12 0 12 12 v 22 q 0 12 -12 12 h -372 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={302} y={250} size={16} fill={INK} weight={800}>
          v = v₀ + a t
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={104} y={290} size={11} fill={GREEN} script anchor="start">
          {t(
            "no new physics — the definition of a, integrated once",
            "koi nayi physics nahi — a ki definition, ek baar integrate"
          )}
        </T>
      </Fade>

      {/* beat 4 — second definition */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={110} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "now  v = dr ⁄ dt — substitute the v we found",
            "ab  v = dr ⁄ dt — abhi wala v daal do"
          )}
        </T>
      </Fade>

      {/* beat 5 — integrate again */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={600} y={148} size={14} fill={INK} weight={700} anchor="start">
          ∫ dr = ∫ (v₀ + a t) dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={600} y={176} size={13} fill={INK} weight={700} anchor="start">
          {t("v₀ term → v₀t  ·  at term → ½ a t²", "v₀ term → v₀t  ·  at term → ½ a t²")}
        </T>
      </Fade>

      {/* beat 6 — second equation */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 592 196 h 406 q 12 0 12 12 v 22 q 0 12 -12 12 h -406 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={795} y={226} size={16} fill={INK} weight={800}>
          r = r₀ + v₀t + ½ a t²
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={580} y={266} size={11} fill={GREEN} script anchor="start">
          {t(
            "both equations — two integrations of the definitions",
            "dono equations — definitions ke do integrations"
          )}
        </T>
      </Fade>

      {/* beat 7 — the condition */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 330 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={348} size={12} fill={RED} script anchor="start">
          {t(
            "constant acceleration is REQUIRED, throughout",
            "constant acceleration ZAROORI hai, shuru se aakhir tak"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={372} size={12} fill={RED} script anchor="start">
          {t(
            "a varies? go back to the definitions and integrate directly",
            "a badalta hai? wapas definitions par jao aur seedha integrate karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
