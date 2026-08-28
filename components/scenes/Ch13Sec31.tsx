/**
 * Ch13 · Section 31 — "Worked example (JEE Main): springs in series and parallel"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.2, 24.56, 40.93, 54.29, 62.04, 74.97, 91.77]):
 *  0 shelf
 *  1 given: m=2kg, k₁=6N/m, k₂=3N/m · find T (series) and T (parallel)
 *  2 series: 1/k_eff = 1/6+1/3 = 3/6 ⇒ k_eff = 2 N/m
 *  3 hero (high): T_series = 2π√(2/2) = 2π ≈ 6.28 s
 *  4 parallel: k_eff = 6+3 = 9 N/m
 *  5 hero (high): T_parallel = 2π√(2/9) = 2π√2/3 ≈ 2.96 s
 *  6 series softer→slower, parallel stiffer→faster
 *  7 method (high): find k_eff first, never average periods
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size13 · st x70 bl135 size12
 *  b2 | st x70 bl170 size13
 *  b3 | box x70..420 y190..245 rx14 · line cx245 bl223 size17
 *  b4 | st x70 bl280 size13
 *  b5 | box x70..450 y300..355 rx14 · line cx260 bl333 size17
 *  b6 | st x70 bl395 size12
 *  b7 | box x100..980 y415..475 rx16 · line cx540 bl449 size13
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
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t("Find the effective constant, then the period", "Pehle effective constant, phir period")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={13} fill={INK} anchor="start" weight={700}>
          m = 2 kg , k₁ = 6 N/m , k₂ = 3 N/m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={135} size={12} fill={INK} anchor="start" weight={700}>
          {t("find: T (series) and T (parallel)", "nikaalo: T (series) aur T (parallel)")}
        </T>
      </Fade>

      {/* beat 2 — series constant */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={170} size={13} fill={INK} anchor="start" weight={700}>
          series: 1/k_eff = 1/6+1/3 = 3/6 ⇒ k_eff = 2 N/m
        </T>
      </Fade>

      {/* beat 3 — series period, high emphasis */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.3)}
          d="M 84 190 h 322 q 14 0 14 14 v 27 q 0 14 -14 14 h -322 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={245} y={223} size={17} fill={INK} weight={800}>
          T_series = 2π√(2/2) = 2π ≈ 6.28 s
        </T>
      </Fade>

      {/* beat 4 — parallel constant */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={280} size={13} fill={INK} anchor="start" weight={700}>
          parallel: k_eff = 6+3 = 9 N/m
        </T>
      </Fade>

      {/* beat 5 — parallel period, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 300 h 352 q 14 0 14 14 v 27 q 0 14 -14 14 h -352 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={260} y={333} size={17} fill={INK} weight={800}>
          T_parallel = 2π√(2/9) = 2π√2/3 ≈ 2.96 s
        </T>
      </Fade>

      {/* beat 6 — matching intuition */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={395} size={12} fill={INK} anchor="start">
          {t(
            "series softer→slower, parallel stiffer→faster (matches intuition)",
            "series softer→slow, parallel stiffer→fast (intuition se match)"
          )}
        </T>
      </Fade>

      {/* beat 7 — the discipline, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 116 415 h 848 q 16 0 16 16 v 28 q 0 16 -16 16 h -848 q -16 0 -16 -16 v -28 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={449} size={13} fill={INK} weight={700}>
          {t(
            "find k_eff first, then T=2π√(m/k_eff) — never average periods",
            "pehle k_eff nikaalo, phir T=2π√(m/k_eff) — kabhi periods average mat karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
