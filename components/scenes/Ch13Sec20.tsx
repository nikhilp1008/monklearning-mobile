/**
 * Ch13 · Section 20 — "Worked example (JEE Advanced): two kinds of average"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.89, 18.62, 30.01, 41.12, 50.57, 57.79, 69.46]):
 *  0 shelf
 *  1 claim: ⟨K⟩_t = E/2, but ⟨K⟩_x = 2E/3
 *  2 ⟨K⟩_t = (1/T)∫E cos²(ωt) dt = E/2
 *  3 hero (high): ⟨K⟩_x = (1/2A)∫E(A²−x²)/A² dx = 2E/3
 *  4 diagram: K(x) parabola with E/2 and 2E/3 reference levels
 *  5 why: particle lingers near extremes (K small)
 *  6 time-weight ⇒ E/2, position-weight ⇒ 2E/3 (high)
 *  7 lesson: average is meaningless without "w.r.t. what"
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size14
 *  b2 | st x70 bl150 size13
 *  b3 | st x70 bl188 size13 red
 *  b4 | x-axis y260 x620..1020 → · y-axis x820 y275..90 ↑ ·
 *      K curve M640,258 Q820,100 1000,258 · 2E/3 line y153 x640..1000 (green dashed) "2E/3" x1005 bl157 ·
 *      E/2 line y180 x640..1000 (red dashed) "E/2" x1005 bl188 · "−A" cx640 bl282 · "0" cx820 bl282 · "A" cx1000 bl282
 *  b5 | st x70 bl230 size12
 *  b6 | st x70 bl270 size14 amber
 *  b7 | script13 st x70 bl320
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch13Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Averaged over time versus averaged over position", "Time ke respect mein average vs position ke respect mein")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the claim */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={14} fill={INK} anchor="start" weight={700}>
          {t("claim: ⟨K⟩", "claim: ⟨K⟩")}
          <Sub>t</Sub>
          <Up> = E/2 , {t("but", "par")} ⟨K⟩</Up>
          <Sub>x</Sub>
          <Up> = 2E/3</Up>
        </T>
      </Fade>

      {/* beat 2 — the time average */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={150} size={13} fill={INK} anchor="start" weight={700}>
          ⟨K⟩<Sub>t</Sub>
          <Up> = (1/T)∫E cos²(ωt) dt = E×½ = E/2</Up>
        </T>
      </Fade>

      {/* beat 3 — the position average, hero/high */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={188} size={13} fill={RED} anchor="start" weight={700}>
          ⟨K⟩<Sub>x</Sub>
          <Up> = (1/2A)∫E(A² − x²)/A² dx = 2E/3</Up>
        </T>
      </Fade>

      {/* beat 4 — the picture: two levels on the same curve */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={arrowD(620, 260, 1020, 260)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(820, 275, 820, 90)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d="M 640 258 Q 820 100 1000 258" stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Path d="M 640 153 L 1000 153" stroke={GREEN} strokeWidth={1.8} strokeDasharray="5 4" fill="none" />
        <T x={1005} y={157} size={12} fill={GREEN} anchor="start">
          2E/3
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Path d="M 640 180 L 1000 180" stroke={RED} strokeWidth={1.8} strokeDasharray="5 4" fill="none" />
        <T x={1005} y={188} size={12} fill={RED} anchor="start">
          E/2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.0)}>
        <T x={640} y={282} size={11} fill={INK}>
          −A
        </T>
        <T x={820} y={282} size={11} fill={INK}>
          0
        </T>
        <T x={1000} y={282} size={11} fill={INK}>
          A
        </T>
      </Fade>

      {/* beat 5 — why the gap */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={230} size={12} fill={INK} anchor="start">
          {t(
            "particle lingers near extremes (K small) ⇒ time-avg pulled down",
            "extremes ke paas particle slow chalti hai (K chhota) ⇒ time-avg neeche khinchta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the two weightings, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={270} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("time-weight ⇒ E/2 , position-weight ⇒ 2E/3", "time-weight ⇒ E/2 , position-weight ⇒ 2E/3")}
        </T>
      </Fade>

      {/* beat 7 — the deeper lesson */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={320} size={13} fill={INK} script anchor="start">
          {t(
            "lesson: 'average' is meaningless without saying w.r.t. what",
            "lesson: 'average' meaningless hai jab tak na bolo kiske respect mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
