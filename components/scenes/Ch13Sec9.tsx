/**
 * Ch13 · Section 9 — "Worked example (JEE Main): two speeds at two positions"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 3.2, 6.82, 10.13, 14.18, 16.42, 21.43, 25.91]):
 *  0 shelf + recall v = ω√(A²−x²)
 *  1 diagram: two points on the v-x curve, (3,16) and (4,12)
 *  2 given: 16 cm/s at x=3, 12 cm/s at x=4 · find A, T
 *  3 256 = ω²(A² − 9)
 *  4 144 = ω²(A² − 16)
 *  5 subtract, high: 256−144 = 7ω² ⇒ ω = 4 rad/s
 *  6 hero: A = 5 cm , T = π/2 s
 *  7 method verdict: square v(x) at each point, subtract ⇒ ω
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020 · st x70 bl105 size13 muted
 *  b1 | x-axis y215 x630..980 · y-axis x650 y230..95 · curve M655,105 A260 140 0 0 1 900,215 ·
 *      pt1(770,135) + guides + "(3,16)" x778 bl128 · pt2(830,160) + guides + "(4,12)" x838 bl153 ·
 *      "v" x650 bl88 · "x" x995 bl219
 *  b2 | st x70 bl140 · st x70 bl170 (size13)
 *  b3 | st x70 bl210 size15
 *  b4 | st x70 bl245 size15
 *  b5 | st x70 bl285 size16 red
 *  b6 | box x70..420 y305..362 rx14 · line cx245 bl340 size20
 *  b7 | box x160..920 y470..535 rx16 · line cx540 bl508
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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

export default function Ch13Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Subtract to eliminate ω", "Subtract karke ω hataana")}
        </T>
      </Fade>

      {/* beat 0 — recall the v-x relation */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={70} y={105} size={13} fill={MUTED} anchor="start">
          v = ω√(A² − x²)
        </T>
      </Fade>

      {/* beat 1 — two measured points on the curve */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(630, 215, 980, 215)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(650, 230, 650, 95)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d="M 655 105 A 260 140 0 0 1 900 215" stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={770} cy={135} r={5} fill={RED} />
        <Path d="M 770 135 V 215 M 770 135 H 650" stroke={RED} strokeWidth={1} strokeDasharray="3 3" fill="none" />
        <T x={778} y={128} size={11} fill={RED} anchor="start">
          (3,16)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={830} cy={160} r={5} fill={AMBER_DARK} />
        <Path d="M 830 160 V 215 M 830 160 H 650" stroke={AMBER_DARK} strokeWidth={1} strokeDasharray="3 3" fill="none" />
        <T x={838} y={153} size={11} fill={AMBER_DARK} anchor="start">
          (4,12)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={650} y={88} size={12} fill={INK}>
          v
        </T>
        <T x={995} y={219} size={12} fill={INK}>
          x
        </T>
      </Fade>

      {/* beat 2 — the given data */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={140} size={13} fill={INK} anchor="start" weight={700}>
          16 cm/s at x = 3 cm , 12 cm/s at x = 4 cm
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={70} y={170} size={13} fill={INK} anchor="start" weight={700}>
          {t("find: A, T", "nikaalo: A, T")}
        </T>
      </Fade>

      {/* beat 3 — equation at the first point */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={210} size={15} fill={INK} anchor="start" weight={700}>
          256 = ω²(A² − 9)
        </T>
      </Fade>

      {/* beat 4 — equation at the second point */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={245} size={15} fill={INK} anchor="start" weight={700}>
          144 = ω²(A² − 16)
        </T>
      </Fade>

      {/* beat 5 — the key move: subtract */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={285} size={16} fill={RED} anchor="start" weight={700}>
          256 − 144 = 7ω² ⇒ ω = 4 rad/s
        </T>
      </Fade>

      {/* beat 6 — the hero result */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 84 305 h 322 q 14 0 14 14 v 29 q 0 14 -14 14 h -322 q -14 0 -14 -14 v -29 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={245} y={340} size={20} fill={INK} weight={800}>
          A = 5 cm , T = π/2 s
        </T>
      </Fade>

      {/* beat 7 — the standard route */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 176 470 h 728 q 16 0 16 16 v 33 q 0 16 -16 16 h -728 q -16 0 -16 -16 v -33 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={508} size={14} fill={INK} weight={700}>
          {t(
            "square v(x) at each point, subtract ⇒ ω falls out in one line",
            "har point pe v(x) square karo, subtract karo ⇒ ω ek line mein nikalta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
