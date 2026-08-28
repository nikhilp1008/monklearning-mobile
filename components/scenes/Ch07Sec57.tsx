/**
 * Ch07 · Section 57 — "Kepler's second law, and the tools for ellipses"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.42, 8.42, 9.42, 10.42, 11.42, 12.42, 13.42, 24.86]):
 *  0 title
 *  1 diagram: central force line, no torque note
 *  2 amber: L stays constant
 *  3 dA/dt = L/2m
 *  4 → equal areas in equal times
 *  5 red margin: speeds up near Sun to keep L fixed
 *  6 ellipse energy: E = −GMm/2a
 *  7 perigee/apogee formula: vp·rp = va·ra
 *  8 green margin: two laws crack any two-point problem
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Sun (200,300) r14 · planet (340,240) · radial line dashed ·
 *   caption cx270 bl380
 *  b3 | line cx540 bl150
 *  b4 | line cx540 bl185
 *  b5 | bar x66 y220..272 lines bl240/266
 *  b6 | line cx540 bl330
 *  b7 | line cx540 bl365
 *  b8 | bar x480 y440..492 lines bl460/486
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — a conservation law in disguise */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Equal areas = conserved angular momentum",
            "Equal areas = conserved angular momentum"
          )}
        </T>
      </Fade>

      {/* beat 1 — a central force, no torque */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 200 300 A 14 14 0 1 1 199.9 300"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={340} cy={240} r={7} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Path d="M 200 300 L 340 240" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={270} y={385} size={12} fill={AMBER_DARK} script>
          {t(
            "central force → NO torque about the centre",
            "central force → centre ke baare mein NO torque"
          )}
        </T>
      </Fade>

      {/* beat 2 — L stays constant */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={270} y={415} size={12} fill={INK} script>
          {t("→ angular momentum L is CONSTANT", "→ angular momentum L CONSTANT hai")}
        </T>
      </Fade>

      {/* beat 3 — areal velocity */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={150} size={16} fill={INK} anchor="start" weight={700}>
          dA ⁄ dt = L ⁄ 2m = {t("constant", "constant")}
        </T>
      </Fade>

      {/* beat 4 — equal areas in equal times */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={185} size={13} fill={INK} script anchor="start">
          {t(
            "→ equal areas swept in equal times",
            "→ barabar samay mein barabar areas"
          )}
        </T>
      </Fade>

      {/* beat 5 — speeds up near the Sun */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 66 220 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={84} y={240} size={13} fill={RED} script anchor="start">
          {t(
            "small r → v must be large to keep L = mvr fixed",
            "chhota r → L = mvr fixed rakhne ko v bada"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={84} y={266} size={13} fill={RED} script anchor="start">
          {t(
            "law of areas = angular momentum, in disguise",
            "law of areas = angular momentum, bhes mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — ellipse energy */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={330} size={16} fill={INK} anchor="start" weight={700}>
          E = −GMm ⁄ 2a　{t("(semi-major axis a)", "(semi-major axis a)")}
        </T>
      </Fade>

      {/* beat 7 — perigee/apogee */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={540} y={365} size={16} fill={INK} anchor="start" weight={700}>
          v(p)·r(p) = v(a)·r(a)
        </T>
      </Fade>

      {/* beat 8 — the two-tool combo */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 480 440 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={498} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "energy (a) + angular momentum (turning points)",
            "energy (a) + angular momentum (turning points)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={498} y={486} size={13} fill={GREEN} script anchor="start">
          {t(
            "cracks almost any two-point ellipse problem",
            "lagbhag har two-point ellipse problem crack"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
