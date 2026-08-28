/**
 * Ch07 · Section 73 — "Worked example: a full binary analysis (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 17.79, 25.3, 36.05, 51.07, 64.89]):
 *  0 title + problem
 *  1 diagram: m and 2m, COM closer to 2m, r1/r2 orbits
 *  2 radii: r1 = 2d/3, r2 = d/3
 *  3 amber: lighter star swings wider
 *  4 ω and v = ωr setup
 *  5 v1, v2 values, v1 = 2v2
 *  6 green box: E = −Gm²/d
 *  7 red margin: negative → bound
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  com dot (280,300) · 2m star c(210,300)r18 orbit r70 dashed ·
 *   m star c(420,290)r10 orbit r140 dashed · caption cx280 bl430
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 line bl235 · b5 line bl270
 *  b6 green box x480..760 y300..352(bl332)
 *  b7 bar x66 y440..492 line bl462
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the full binary */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Advanced] — an m–2m binary",
            "Example [JEE Advanced] — m–2m binary"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "masses m, 2m at separation d — find radii, speeds, energy",
            "masses m, 2m separation d par — radii, speeds, energy nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the geometry */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle
          cx={280}
          cy={300}
          r={70}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
        <Circle
          cx={280}
          cy={300}
          r={140}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={280} cy={300} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={210} cy={300} r={18} fill={AMBER_DARK} />
        <T x={210} y={345} size={11} fill={AMBER_DARK} weight={700}>
          2m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={420} cy={300} r={10} fill={INK} />
        <T x={420} y={335} size={11} fill={INK} weight={700}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={280} y={430} size={12} fill={INK} script>
          {t(
            "COM closer to 2m — m swings wider",
            "COM 2m ke paas — m chauda ghoomta"
          )}
        </T>
      </Fade>

      {/* beat 2 — the radii */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={15} fill={INK} anchor="start" weight={700}>
          r₁ = 2d⁄3, r₂ = d⁄3
        </T>
      </Fade>

      {/* beat 3 — lighter star, bigger circle */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "lighter star traces the BIGGER circle",
            "halka star BADA circle banaata hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — speeds setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={235} size={14} fill={INK} anchor="start" weight={700}>
          ω = √(3Gm ⁄ d³) ,  v = ωr
        </T>
      </Fade>

      {/* beat 5 — v1, v2 */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={270} size={13} fill={INK} anchor="start" weight={700}>
          v₁ = (2⁄3)√(3Gm⁄d) = 2v₂
        </T>
      </Fade>

      {/* beat 6 — the energy */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 492 300 h 268 q 12 0 12 12 v 28 q 0 12 -12 12 h -268 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={626} y={332} size={17} fill={INK} weight={800}>
          E = −Gm² ⁄ d
        </T>
      </Fade>

      {/* beat 7 — negative → bound */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={462} size={13} fill={RED} script anchor="start">
          {t(
            "negative total energy → bound, as any real binary must be",
            "negative total energy → bound, jaisa real binary ko hona chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
