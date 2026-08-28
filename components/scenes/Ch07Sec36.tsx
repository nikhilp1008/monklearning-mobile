/**
 * Ch07 · Section 36 — "Worked example: a tunnel through the Earth is SHM (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.01, 12.01, 13.01, 14.01, 15.01, 16.01, 17.01]):
 *  0 title + problem: Earth, tunnel line, ball at r
 *  1 shell theorem note: only sphere of radius r pulls
 *  2 g(r) = g·r/R line
 *  3 F = −(mg/R)·r
 *  4 red: minus sign — always back to centre
 *  5 green: Hooke's law match, k_eff
 *  6 ω = √(g/R)
 *  7 green box: T ≈ 84.6 min — same as sec35, unification
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  Earth c(220,300) r120 · tunnel M100 300 H340 · ball (270,300) r6 ·
 *   "r" dim M220 300 H270 + label bl288 · caption cx220 bl450
 *  right col x480: b1 line bl150 · b2 line bl195 · b3 line bl235 ·
 *  b4 bar x460 y255..307 lines bl275/301 · b5 line bl345 (Hooke) ·
 *  b6 line bl385 · b7 green box x480..900 y410..462 (bl442)
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

export default function Ch07Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — a tunnel through the centre */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Advanced] — a tunnel through the Earth",
            "Example [JEE Advanced] — Earth ke aar-paar tunnel"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "frictionless tunnel through the centre — show the ball's motion is SHM",
            "centre ke aar-paar frictionless tunnel — dikhao motion SHM hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — shell theorem, again */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 220 180 A 120 120 0 1 1 219.9 180"
        stroke={INK}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Path d="M 100 300 H 340" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={270} cy={300} r={6} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={arrowD(258, 300, 232, 300)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={245} y={288} size={11} fill={INK} weight={700}>
          r
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={220} y={450} size={12} fill={AMBER_DARK} script>
          {t(
            "shell theorem: only the sphere of radius r pulls",
            "shell theorem: sirf radius r ka sphere kheenchta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the local acceleration */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={15} fill={INK} anchor="start" weight={700}>
          g(r) = g·r ⁄ R　{t("(toward centre)", "(centre ki taraf)")}
        </T>
      </Fade>

      {/* beat 3 — the force */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={16} fill={INK} anchor="start" weight={800}>
          F = −(mg ⁄ R)·r
        </T>
      </Fade>

      {/* beat 4 — the minus sign speaks */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={235} size={13} fill={INK} script anchor="start">
          {t(
            "force ALWAYS points back to the centre — restoring",
            "force HAMESHA centre ki taraf — restoring"
          )}
        </T>
      </Fade>

      {/* beat 5 — Hooke's law recognized */}
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 460 255 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={478} y={275} size={13} fill={GREEN} script anchor="start">
          {t(
            "this IS Hooke's law: F = −k(eff)·r",
            "yahi Hooke's law hai: F = −k(eff)·r"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={478} y={301} size={13} fill={GREEN} script anchor="start">
          {t("k(eff) = mg ⁄ R", "k(eff) = mg ⁄ R")}
        </T>
      </Fade>

      {/* beat 6 — the angular frequency */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={345} size={15} fill={INK} anchor="start" weight={700}>
          ω = √(k(eff) ⁄ m) = √(g ⁄ R)
        </T>
      </Fade>

      {/* beat 7 — the same magic number */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.5)}
          d="M 492 410 h 408 q 12 0 12 12 v 28 q 0 12 -12 12 h -408 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={696} y={442} size={15} fill={INK} weight={800}>
          T = 2π√(R⁄g) ≈ 84.6 min — same as before!
        </T>
      </Fade>
    </Scene>
  );
}
