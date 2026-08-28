/**
 * Ch13 · Section 24 — "Formula board, part one: periods and spring combinations"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.27, 15.23, 23.19, 38.76, 48.1, 57.45, 68.18]):
 *  0 shelf
 *  1 pendulum: T = 2π√(L/g) , ω = √(g/L)
 *  2 mass-spring: T = 2π√(m/k) , ω = √(k/m)
 *  3 vertical spring shortcut: T = 2π√(x₀/g)
 *  4 diagram: series springs (softer) vs parallel springs (stiffer)
 *  5 series: 1/k_eff = 1/k₁+1/k₂ · parallel: k_eff = k₁+k₂
 *  6 hero: cut into n pieces: k_piece = nk
 *  7 summary: series softer/longer T, parallel stiffer/shorter T, cut stiffer
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size14
 *  b2 | st x70 bl148 size14
 *  b3 | st x70 bl185 size13 amber
 *  b4 | series: wall x650..664 y150..190 · spring1 664→720 y170 · dot(725,170) · spring2 730→796 y170 ·
 *      block x796..836 y155..185 "m" cx816 bl175 · "series (softer)" cx742 bl205 amber ·
 *      parallel: wall x650..664 y225..285 · spring-up 664→780 y250(peak238) · spring-down 664→780 y260(peak272) ·
 *      block x780..830 y235..275 "m" cx805 bl260 · "parallel (stiffer)" cx740 bl300 green
 *  b5 | st x70 bl230 size13 · st x70 bl260 size13
 *  b6 | box x70..430 y280..335 rx14 · line cx250 bl314 size18
 *  b7 | box x100..980 y460..522 rx16 · line cx540 bl495 size13
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Pendulum, spring, static stretch, and combinations", "Pendulum, spring, static stretch, aur combinations")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the pendulum */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={14} fill={INK} anchor="start" weight={700}>
          pendulum: T = 2π√(L/g) , ω = √(g/L)
        </T>
      </Fade>

      {/* beat 2 — the mass-spring */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={148} size={14} fill={INK} anchor="start" weight={700}>
          mass-spring: T = 2π√(m/k) , ω = √(k/m)
        </T>
      </Fade>

      {/* beat 3 — the vertical-spring shortcut */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={185} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          vertical spring shortcut: T = 2π√(x₀/g)  (mg=kx₀)
        </T>
      </Fade>

      {/* beat 4 — series is softer, parallel is stiffer */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 650 150 h 14 v 40 h -14 z" stroke={INK} sw={1.6} dur={0.4} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 664 170 L 678 158 L 693 182 L 708 158 L 720 170" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <Circle cx={725} cy={170} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d="M 730 170 L 744 158 L 759 182 L 774 158 L 796 170" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <Draw on={beat >= 4} delay={dl(4, 2.0)} d="M 796 155 h 40 v 30 h -40 z" stroke={INK} sw={1.6} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={816} y={175} size={12} fill={INK} weight={800}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={742} y={205} size={11} fill={AMBER_DARK}>
          {t("series (softer)", "series (soft)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <Draw on={beat >= 4} delay={dl(4, 3.1)} d="M 650 235 h 14 v 80 h -14 z" stroke={INK} sw={1.6} dur={0.4} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.6)} d="M 664 245 L 686 233 L 708 257 L 730 233 L 752 257 L 780 245" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 4.2)} d="M 664 305 L 686 293 L 708 317 L 730 293 L 752 317 L 780 305" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <Draw on={beat >= 4} delay={dl(4, 4.8)} d="M 780 235 h 50 v 80 h -50 z" stroke={INK} sw={1.6} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.3)}>
        <T x={805} y={278} size={12} fill={INK} weight={800}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={740} y={340} size={11} fill={GREEN}>
          {t("parallel (stiffer)", "parallel (stiff)")}
        </T>
      </Fade>

      {/* beat 5 — series and parallel formulas */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={230} size={13} fill={INK} anchor="start" weight={700}>
          series: 1/k_eff = 1/k₁ + 1/k₂
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={70} y={260} size={13} fill={INK} anchor="start" weight={700}>
          parallel: k_eff = k₁ + k₂
        </T>
      </Fade>

      {/* beat 6 — the hero: cut into n pieces */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 84 280 h 332 q 14 0 14 14 v 27 q 0 14 -14 14 h -332 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={250} y={314} size={18} fill={INK} weight={800}>
          cut into n pieces: k_piece = nk
        </T>
      </Fade>

      {/* beat 7 — the summary */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 116 460 h 848 q 16 0 16 16 v 30 q 0 16 -16 16 h -848 q -16 0 -16 -16 v -30 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={495} size={13} fill={INK} weight={700}>
          {t(
            "series softer (longer T) · parallel stiffer (shorter T) · cut piece stiffer",
            "series softer (lamba T) · parallel stiffer (chota T) · cut piece stiffer"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
