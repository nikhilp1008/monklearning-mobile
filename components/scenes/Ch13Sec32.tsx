/**
 * Ch13 · Section 32 — "Worked example (JEE Advanced): the uniform rod pendulum"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.25, 28.17, 40.42, 53.07, 66.96, 84.1, 99.62]):
 *  0 shelf
 *  1 diagram: rod pivoted at one end, CM marked at midpoint
 *  2 uniform rod M, L, pivot at end · T = 2π√(I/Mgd)
 *  3 I = ML²/3 , d = L/2
 *  4 hero (high): T = 2π√((ML²/3)/(Mg·L/2)) = 2π√(2L/3g)
 *  5 L_eq = I/(Md) = 2L/3
 *  6 2L/3 < L ⇒ rod swings FASTER than simple pendulum of length L
 *  7 closing (high): mass closer to pivot on average ⇒ shorter effective length
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | pivot(750,90) r3 · vertical dashed 750,90→750,253 · rod 750,90→826,253 (sw4) ·
 *      CM dot(788,171) r5 · "L" x800 bl160 · "CM" x798 bl184
 *  b2 | st x70 bl110 size13 · st x70 bl140 size13
 *  b3 | st x70 bl178 size14
 *  b4 | box x70..470 y200..262 rx14 · line cx270 bl236 size16
 *  b5 | st x70 bl300 size13
 *  b6 | st x70 bl335 size12
 *  b7 | script13 st x70 bl375 amber
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t("A physical pendulum with effective length 2L/3", "Physical pendulum jiski effective length 2L/3 hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the rod, pivoted at one end */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Circle cx={750} cy={90} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Path d="M 750 90 V 253" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d="M 750 90 L 826 253" stroke={INK} sw={4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Draw on={beat >= 1} delay={dl(1, 1.7)} d="M 788 166 A 5 5 0 1 1 787.9 166" stroke={INK} sw={1.6} dur={0.3} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={800} y={160} size={12} fill={INK} anchor="start">
          L
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={798} y={184} size={10} fill={AMBER_DARK} anchor="start">
          CM
        </T>
      </Fade>

      {/* beat 2 — setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t("uniform rod: mass M, length L, pivot at end", "uniform rod: mass M, length L, ek sire par pivot")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={70} y={140} size={13} fill={INK} anchor="start" weight={700}>
          T = 2π√(I/Mgd)
        </T>
      </Fade>

      {/* beat 3 — the two ingredients */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={178} size={14} fill={INK} anchor="start" weight={700}>
          I = ML²/3 , d = L/2
        </T>
      </Fade>

      {/* beat 4 — the hero result */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 200 h 372 q 14 0 14 14 v 34 q 0 14 -14 14 h -372 q -14 0 -14 -14 v -34 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={270} y={236} size={16} fill={INK} weight={800}>
          T = 2π√((ML²/3)/(Mg·L/2)) = 2π√(2L/3g)
        </T>
      </Fade>

      {/* beat 5 — the equivalent simple-pendulum length */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={300} size={13} fill={INK} anchor="start" weight={700}>
          L_eq = I/(Md) = (ML²/3)/(M·L/2) = 2L/3
        </T>
      </Fade>

      {/* beat 6 — the punchline */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={335} size={12} fill={INK} anchor="start">
          {t(
            "2L/3 < L ⇒ rod swings FASTER than simple pendulum of length L",
            "2L/3 < L ⇒ rod, same L ke simple pendulum se FASTER swing karta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the physical reason, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={375} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "mass sits closer to pivot on average ⇒ shorter effective length",
            "mass average mein pivot ke zyada paas hoti hai ⇒ effective length chhoti"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
