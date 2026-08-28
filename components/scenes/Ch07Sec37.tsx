/**
 * Ch07 · Section 37 — "Pitfalls and pro-tips for g"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 15.99, 30.07, 43.9, 54.65, 64.55]):
 *  0 title
 *  1 trap 1: altitude approx only for small h
 *  2 trap 2: height has the 2, depth doesn't
 *  3 trap 3: g depends on the planet, not the body
 *  4 trap 4: equator lighter from BOTH bulge and spin
 *  5 amber: reason in ratios
 *  6 amber: same density → g∝R; same mass → g∝1/R²
 *  7 green box: the magic period
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  trap bars x66, lines st x84: t1 bl102(bar 92..118) · t2 bl148/174(bar138..190) ·
 *  t3 bl224/250(bar 214..266) · t4 bl300/326(bar 290..342)
 *  b5 line st x84 bl372 · b6 line st x84 bl404
 *  b7 green box x260..820 y440..492 (bl472)
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — closing g */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "g — four traps, and ratio shortcuts",
            "g — chaar traps, aur ratio shortcuts"
          )}
        </T>
      </Fade>

      {/* beat 1 — the altitude approximation */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 66 92 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={84} y={110} size={13} fill={RED} script anchor="start">
          {t(
            "trap 1 — altitude approx only for small h; else use gR² ⁄ (R+h)²",
            "trap 1 — altitude approx sirf chhote h ke liye; warna gR² ⁄ (R+h)²"
          )}
        </T>
      </Fade>

      {/* beat 2 — height has the two */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 66 138 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={84} y={156} size={13} fill={RED} script anchor="start">
          {t(
            "trap 2 — swapping altitude/depth: height has the 2, depth doesn't",
            "trap 2 — altitude/depth badalna: height mein 2, depth mein nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={84} y={182} size={13} fill={RED} script anchor="start">
          {t(
            "(1−2h/R) vs (1−d/R) — so d = 2h for equal drops",
            "(1−2h/R) vs (1−d/R) — isliye same girawat par d = 2h"
          )}
        </T>
      </Fade>

      {/* beat 3 — g doesn't depend on the falling body */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 66 214 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={84} y={232} size={13} fill={RED} script anchor="start">
          {t(
            "trap 3 — g depends on the PLANET, never the falling body",
            "trap 3 — g PLANET par depend karta hai, girti body par nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={84} y={258} size={13} fill={RED} script anchor="start">
          {t(
            "weight depends on the body; g does not",
            "weight body par depend karta hai; g nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — both bulge and spin */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 66 290 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={84} y={308} size={13} fill={RED} script anchor="start">
          {t(
            "trap 4 — equator lighter from BOTH the bulge and the spin",
            "trap 4 — equator halka BOTH bulge aur spin se"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={84} y={334} size={13} fill={RED} script anchor="start">
          {t(
            "naming only one in a board answer loses marks",
            "board answer mein sirf ek batana marks le dooba"
          )}
        </T>
      </Fade>

      {/* beat 5 — reason in ratios */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={84} y={372} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "shortcut: reason in ratios — g ∝ M ⁄ R², or g ∝ ρ·R",
            "shortcut: ratios mein socho — g ∝ M ⁄ R², ya g ∝ ρ·R"
          )}
        </T>
      </Fade>

      {/* beat 6 — pick the isolating form */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={84} y={404} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "same density → g ∝ R  ·  same mass → g ∝ 1⁄R²",
            "same density → g ∝ R  ·  same mass → g ∝ 1⁄R²"
          )}
        </T>
      </Fade>

      {/* beat 7 — the magic period */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.6)}
          d="M 272 440 h 536 q 12 0 12 12 v 28 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={472} size={14} fill={INK} weight={800}>
          {t(
            "magic period: T = 2π√(R⁄g) ≈ 84 min — tunnel, satellite, equator day",
            "magic period: T = 2π√(R⁄g) ≈ 84 min — tunnel, satellite, equator din"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
