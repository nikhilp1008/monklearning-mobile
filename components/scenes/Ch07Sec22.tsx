/**
 * Ch07 · Section 22 — "Worked example: shell versus solid sphere (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.42, 22.95, 23.95, 24.95, 36.39, 43.13, 55.93]):
 *  0 title + problem
 *  1 two circles: hollow shell vs solid sphere, same M·R chip, R radii
 *  2 "no calculation — just cases" line
 *  3 case 1: shell centre E = 0 (+ 0 mark)
 *  4 case 2: solid centre GMr/R³ → 0 (+ 0 mark)
 *  5 green chip: both zero at centre
 *  6 surface dots + green chip: both GM/R² at surface
 *  7 red margin: they differ only inside
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  shell c(280,230) r75 · solid c(640,230) r75 (CREAM fill) · labels bl340 ·
 *  chip "same M · same R" x395..555 y150..182 · radii dashes + "R" labels
 *  b2 | line cx540 bl370 · b3 | line st x100 bl395 + "0" (280,236) ·
 *  b4 | line st x100 bl428 + "0" (640,236) ·
 *  b5 | chip x100 y450 w380 h32 · b6 | dots (355,230)/(715,230) + chip x560 y450 w440 h32
 *  b7 | bar x66 y520..572 · lines st x84 bl540 / 566
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the comparison question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [NEET] — shell vs solid sphere",
            "Example [NEET] — shell vs solid sphere"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "same M, same R — where is E zero, and where identical for both?",
            "same M, same R — E kahan zero, aur kahan dono ke liye same?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two bodies */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 280 155 A 75 75 0 1 1 279.9 155"
        stroke={INK}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 1.8)}
          d="M 640 155 A 75 75 0 1 1 639.9 155"
          stroke={INK}
          sw={2.6}
          dur={0.8}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={280} y={340} size={13} fill={INK} script>
          {t("hollow SHELL", "hollow SHELL")}
        </T>
        <T x={640} y={340} size={13} fill={INK} script>
          {t("SOLID sphere", "SOLID sphere")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <Chip x={395} y={150} w={160} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12}>
          same M · same R
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <Path d="M 280 230 L 353 230" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 5" fill="none" />
        <T x={318} y={220} size={11} fill={MUTED} weight={700}>
          R
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <Path d="M 640 230 L 713 230" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 5" fill="none" />
        <T x={678} y={220} size={11} fill={MUTED} weight={700}>
          R
        </T>
      </Fade>

      {/* beat 2 — think in cases */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={370} size={13} fill={AMBER_DARK} script>
          {t(
            "no calculation needed — reason case by case",
            "koi calculation nahi — bas case dar case socho"
          )}
        </T>
      </Fade>

      {/* beat 3 — shell centre */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={100} y={395} size={13} fill={INK} script anchor="start">
          {t(
            "case 1 — shell's centre: E = 0 (zero everywhere inside a shell)",
            "case 1 — shell ka centre: E = 0 (andar har jagah zero)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={280} y={236} size={15} fill={GREEN} weight={800}>
          0
        </T>
      </Fade>

      {/* beat 4 — solid centre */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={100} y={428} size={13} fill={INK} script anchor="start">
          {t(
            "case 2 — solid's centre: E = GMr ⁄ R³, at r = 0 → 0",
            "case 2 — solid ka centre: E = GMr ⁄ R³, r = 0 par → 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={640} y={236} size={15} fill={GREEN} weight={800}>
          0
        </T>
      </Fade>

      {/* beat 5 — meeting point one */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={100} y={450} w={380} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13}>
          {t(
            "centre: BOTH zero — meeting point 1",
            "centre: DONO zero — meeting point 1"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — meeting point two */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Circle cx={355} cy={230} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Circle cx={715} cy={230} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Chip x={560} y={450} w={440} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13}>
          {t(
            "surface: BOTH GM ⁄ R² — a point mass from outside",
            "surface: DONO GM ⁄ R² — bahar se point mass jaisa"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the trap */}
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 66 520 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={84} y={540} size={13} fill={RED} script anchor="start">
          {t(
            "trap: non-zero at the solid's centre? NO · different at the surface? NO",
            "trap: solid ke centre par non-zero? NAHI · surface par alag? NAHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={566} size={13} fill={RED} script anchor="start">
          {t(
            "they differ only INSIDE: shell flat 0 · solid rises linearly",
            "farq sirf ANDAR: shell flat 0 · solid linear chadhai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
