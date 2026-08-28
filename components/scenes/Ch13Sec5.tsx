/**
 * Ch13 · Section 5 — "Derivation: velocity as a function of position"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.08, 27.42, 32.97, 45.37, 57.77, 67.24, 81.27]):
 *  0 recall: x = A sin(ωt+φ), v = Aω cos(ωt+φ)
 *  1 "position given, not time ⇒ want v(x)"
 *  2 x/A = sin(ωt+φ) , v/(Aω) = cos(ωt+φ)
 *  3 identity: x²/A² + v²/(A²ω²) = 1
 *  4 hero: v = ±ω√(A² − x²)
 *  5 the v-x ellipse: axes + ellipse
 *  6 landmarks: top/bottom dots (v=ωA max), left/right dots (v=0)
 *  7 red note: the ± is real — two passes per point
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020 · recap1 x70 bl105 · recap2 x70 bl135 (size13 muted)
 *  b1 | script13 st x70 bl170 (box 70..335,153..177)
 *  b2 | st x70 bl210 · st x70 bl244 (size15)
 *  b3 | st x70 bl285 size16 amber (box 70..278,273..290)
 *  b4 | box x82..520 y305..375 rx14 · text cx301 bl350 size24
 *  b5 | x-axis y240 x655..985 → · y-axis x820 y325..135 ↑ · ellipse cx820 cy240 rx140 ry90 ·
 *      "v" x820 bl128 · "x" x995 bl244
 *  b6 | dot(820,150) + "v = ωA (max)" x835 bl158 · dot(820,330) · dot(680,240) ·
 *      dot(960,240) + "v = 0 (x = ±A)" cx960 bl270
 *  b7 | red bar x66 y480..552 · L1 st x84 bl502 · L2 st x84 bl542
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Eliminating time to get v from x", "Time hataakar v ko x se nikaalna")}
        </T>
      </Fade>

      {/* beat 0 — recall the pair we already have */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={70} y={105} size={13} fill={MUTED} anchor="start">
          x = A sin(ωt + φ)
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.3)}>
        <T x={70} y={135} size={13} fill={MUTED} anchor="start">
          v = Aω cos(ωt + φ)
        </T>
      </Fade>

      {/* beat 1 — why: position is what problems give */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={170} size={13} fill={AMBER_DARK} script anchor="start">
          {t("position given, not time ⇒ want v(x)", "position pata hai, time nahi ⇒ v(x) chahiye")}
        </T>
      </Fade>

      {/* beat 2 — divide by A and Aω */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={210} size={15} fill={INK} anchor="start" weight={700}>
          x/A = sin(ωt + φ)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={70} y={244} size={15} fill={INK} anchor="start" weight={700}>
          v/(Aω) = cos(ωt + φ)
        </T>
      </Fade>

      {/* beat 3 — sin²+cos²=1, time vanishes */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={285} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          x² / A² + v² / (A² ω²) = 1
        </T>
      </Fade>

      {/* beat 4 — the workhorse result, stamped */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.4)}
          d="M 96 305 h 410 q 14 0 14 14 v 42 q 0 14 -14 14 h -410 q -14 0 -14 -14 v -42 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={301} y={350} size={24} fill={INK} weight={800}>
          v = ±ω√(A² − x²)
        </T>
      </Fade>

      {/* beat 5 — plot it: v against x is an ellipse */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(655, 240, 985, 240)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(820, 325, 820, 135)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.3)}
        d="M 680 240 A 140 90 0 1 0 960 240 A 140 90 0 1 0 680 240"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={820} y={128} size={13} fill={INK}>
          v
        </T>
        <T x={995} y={244} size={13} fill={INK}>
          x
        </T>
      </Fade>

      {/* beat 6 — the two landmarks off the ellipse */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Circle cx={820} cy={150} r={5} fill={RED} />
        <Circle cx={820} cy={330} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={835} y={158} size={13} fill={RED} anchor="start">
          v = ωA (max)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <Circle cx={680} cy={240} r={5} fill={RED} />
        <Circle cx={960} cy={240} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={960} y={270} size={13} fill={RED}>
          v = 0 (x = ±A)
        </T>
      </Fade>

      {/* beat 7 — the plus-minus is real */}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 66 480 V 552" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={502} size={13} fill={RED} script anchor="start">
          {t("the ± is real: each point is crossed twice", "± sach hai: har point do baar cross hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={84} y={542} size={13} fill={RED} script anchor="start">
          {t("once moving forward, once moving back", "ek baar aage, ek baar wapas aate hue")}
        </T>
      </Fade>
    </Scene>
  );
}
