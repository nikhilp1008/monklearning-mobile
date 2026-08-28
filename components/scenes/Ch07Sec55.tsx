/**
 * Ch07 · Section 55 — "Time period and Kepler's third law"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 5, 12.68, 23.09]):
 *  0 title
 *  1 T² vs r³ graph: straight line through origin
 *  2 derivation: T = 2πr/vo → 2π√(r³/GM)
 *  3 words line: distance around ÷ speed
 *  4 green box: T² = (4π²/GM)·r³
 *  5 amber: Newton in two lines vs Kepler's decades
 *  6 red: constant depends only on central mass
 *  7 green margin: ≈84 min, the magic number again
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  axes (140,300)→(420,300)/(140,120) · line M140 300 L400 150 ·
 *   "T²" (128,130) · "r³" (430,318)
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 green box x480..900 y225..277(bl257)
 *  b5 line st x480 bl320 · b6 bar x460 y345..397 lines bl365/391
 *  b7 bar x66 y440..492 line bl462
 */

import React from "react";
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — one circumference per period */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("One circumference per period", "Har period mein ek circumference")}
        </T>
      </Fade>

      {/* beat 1 — T² vs r³ */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d={`${arrowD(140, 300, 420, 300)} ${arrowD(140, 300, 140, 120)}`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M 140 300 L 400 150" stroke={GREEN} sw={2.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={128} y={130} size={13} fill={INK} weight={700}>
          T²
        </T>
        <T x={430} y={318} size={13} fill={INK} weight={700}>
          r³
        </T>
      </Fade>

      {/* beat 2 — the derivation */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={15} fill={INK} anchor="start" weight={700}>
          T = 2πr ⁄ v(o) = 2π√(r³ ⁄ GM)
        </T>
      </Fade>

      {/* beat 3 — in words */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={12} fill={INK} script anchor="start">
          {t(
            "time for one trip = distance around ÷ speed",
            "ek chakkar ka samay = doori ÷ speed"
          )}
        </T>
      </Fade>

      {/* beat 4 — Kepler III */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 225 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={680} y={257} size={17} fill={INK} weight={800}>
          T² = (4π² ⁄ GM)·r³
        </T>
      </Fade>

      {/* beat 5 — Newton in two lines */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={320} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "Newton derives in TWO lines what Kepler only observed",
            "Newton DO lines mein derive karta hai jo Kepler ne sirf dekha"
          )}
        </T>
      </Fade>

      {/* beat 6 — the constant belongs to the central mass */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 460 345 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={478} y={365} size={13} fill={RED} script anchor="start">
          {t(
            "4π²⁄GM depends only on the CENTRAL mass",
            "4π²⁄GM sirf CENTRAL mass par depend karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={478} y={391} size={13} fill={RED} script anchor="start">
          {t(
            "same for every satellite of that planet",
            "us planet ke har satellite ke liye same"
          )}
        </T>
      </Fade>

      {/* beat 7 — the magic number returns */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={462} size={13} fill={GREEN} script anchor="start">
          {t(
            "near the surface: T ≈ 84 min — the chapter's magic number, again",
            "surface ke paas: T ≈ 84 min — chapter ka magic number, phir se"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
