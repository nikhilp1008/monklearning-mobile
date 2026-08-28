/**
 * Ch13 · Section 19 — "Worked example (JEE Main): split the energy at a point"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.32, 17.53, 27.3, 40.51, 49.42, 60.63, 69.53]):
 *  0 shelf
 *  1 given: m=0.1kg, A=10cm, ω=10rad/s · find K,U at x=6cm
 *  2 E = ½mω²A² = 0.05 J
 *  3 U = ½mω²x² = 0.018 J
 *  4 hero (high): K = E − U = 0.032 J
 *  5 K/U = (A²−x²)/x² = 16/9
 *  6 cross-check: 0.032/0.018 = 16/9 ✓
 *  7 method verdict (high): total first, then split by position
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size14 · st x70 bl142 size13
 *  b2 | st x70 bl180 size14
 *  b3 | st x70 bl215 size14
 *  b4 | box x70..470 y235..290 rx14 · line cx270 bl268 size17
 *  b5 | st x70 bl330 size14
 *  b6 | script13 st x70 bl365 green
 *  b7 | box x140..940 y450..505 rx16 · line cx540 bl482 size14
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

export default function Ch13Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Total first, then divide by position", "Pehle total, phir position se divide")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={14} fill={INK} anchor="start" weight={700}>
          m = 0.1 kg , A = 10 cm , ω = 10 rad/s
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={142} size={13} fill={INK} anchor="start" weight={700}>
          {t("find: K, U at x = 6 cm", "nikaalo: K, U x = 6 cm par")}
        </T>
      </Fade>

      {/* beat 2 — the total energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={180} size={14} fill={INK} anchor="start" weight={700}>
          E = ½mω²A² = ½(0.1)(100)(0.01) = 0.05 J
        </T>
      </Fade>

      {/* beat 3 — the potential at x */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={215} size={14} fill={INK} anchor="start" weight={700}>
          U = ½mω²x² = ½(0.1)(100)(0.06)² = 0.018 J
        </T>
      </Fade>

      {/* beat 4 — the kinetic, hero */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 235 h 372 q 14 0 14 14 v 27 q 0 14 -14 14 h -372 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={270} y={268} size={17} fill={INK} weight={800}>
          K = E − U = 0.05 − 0.018 = 0.032 J
        </T>
      </Fade>

      {/* beat 5 — verify by ratio */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={330} size={14} fill={INK} anchor="start" weight={700}>
          K/U = (A² − x²)/x² = (100−36)/36 = 16/9
        </T>
      </Fade>

      {/* beat 6 — cross-check */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={365} size={13} fill={GREEN} script anchor="start">
          {t("check: 0.032/0.018 = 16/9 ✓ consistent", "check: 0.032/0.018 = 16/9 ✓ consistent hai")}
        </T>
      </Fade>

      {/* beat 7 — the method, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 156 450 h 768 q 16 0 16 16 v 23 q 0 16 -16 16 h -768 q -16 0 -16 -16 v -23 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={482} size={14} fill={INK} weight={700}>
          {t(
            "total first, then split by position — never re-integrate",
            "pehle total, phir position se split — kabhi integral se shuru mat karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
