/**
 * Ch12 · Section 41 — "The toolkit: freedom, energy, heat, and free path" (formula sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 17.96, 37.16, 53.37, 65.15, 89.98]):
 *  0 title + underline · 1 U=(f/2)nRT, per-molecule (f/2)kT · 2 Cv, Cp, γ
 *    chips · 3 benchmarks mono/di/poly · 4 λ formula · 5 collision frequency
 *    · 6 Dulong-Petit extension (solid 3R, water 9R) · 7 discipline: R vs kʙ
 *
 * Layout plan (Anek width≈0.5×size×chars):
 *  b0 | title (script 21, red)          | T mid | x270..810 y31..64 (bl52)
 *  b0 | underline                        | Draw  | y74 x330..750
 *  b1 | bridge chip                       | Chip  | x230..850 y88..122
 *  b2 | 3 chips: Cv, Cp, γ                | Chip  | y138..170 x110/400/680
 *  b3 | 3 benchmark chips                 | Chip  | y178..210 x100/400/720
 *  b4 | λ line (14, ink)                 | T mid | x540 y236
 *  b5 | collision-freq line (14, ink)    | T mid | x540 y260
 *  b6 | Dulong-Petit chips ×2            | Chip  | x230..560 / x580..900 y280..312
 *  b7 | discipline (14, red, bold)       | T mid | x540 y342
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={RED} script>
          {t("the toolkit: freedom, energy, heat, and free path", "toolkit: freedom, energy, heat, aur free path")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 74 C 420 70, 660 78, 750 72" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — U = (f/2)nRT */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={230} y={88} w={620} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          U = (f/2)nRT — per molecule = (f/2)kʙT
        </Chip>
      </Fade>

      {/* beat 2 — Cv, Cp, gamma */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={110} y={138} w={230} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          Cv = f/2 R
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={400} y={138} w={230} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          Cp = Cv + R
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Chip x={680} y={138} w={280} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          γ = 1+2/f (Cv=R/(γ−1))
        </Chip>
      </Fade>

      {/* beat 3 — benchmarks */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={100} y={178} w={260} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          mono: f=3, γ≈1.67
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={400} y={178} w={260} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          diatomic: f=5, γ=1.40
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Chip x={720} y={178} w={260} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          poly: f=6, γ≈1.33
        </Chip>
      </Fade>

      {/* beat 4 — lambda */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={236} size={14} fill={INK}>
          λ = 1/(√2 πd²n) = kʙT/(√2 πd²P)
        </T>
      </Fade>

      {/* beat 5 — collision frequency */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={260} size={14} fill={INK}>
          {t("collision freq = v̄/λ = √2 πd²n·v̄", "collision freq = v̄/λ = √2 πd²n·v̄")}
        </T>
      </Fade>

      {/* beat 6 — Dulong-Petit extension */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={230} y={280} w={330} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("solid: Cv=3R≈25 (Dulong-Petit)", "solid: Cv=3R≈25 (Dulong-Petit)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={580} y={280} w={320} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("water: Cv=9R≈75", "water: Cv=9R≈75")}
        </Chip>
      </Fade>

      {/* beat 7 — discipline */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={342} size={14} fill={RED} weight={700}>
          {t("molar → R; per-molecule → kʙ; T always in kelvin", "molar → R; per-molecule → kʙ; T hamesha kelvin")}
        </T>
      </Fade>
    </Scene>
  );
}
