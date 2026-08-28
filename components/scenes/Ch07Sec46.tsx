/**
 * Ch07 · Section 46 — "Worked example: escape velocity by ratio (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.63, 26.2, 36.18, 45.91, 54.19, 61.1, 72.02]):
 *  0 title + problem
 *  1 amber: reason in ratios, ve ∝ √(M/R)
 *  2 two-planet cards: Earth vs planet (2M, R/2)
 *  3 ratio setup line
 *  4 evaluate: √4 = 2
 *  5 green box: ve = 22.4 km/s
 *  6 red trap: 44.8 crossed out
 *  7 red margin: apply inside root, take once
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  b1 | line cx540 bl130
 *  cards y165..250: Earth x120..430 (circle r45 cx220 cy220, label bl165) ·
 *   planet x580..890 (circle r34 cx740 cy220, label bl165)
 *  b3 | line cx540 bl300 · b4 | line cx540 bl335
 *  b5 | green box x400..680 y360..412(bl392)
 *  b6 | bar x66 y440..492 · trap "44.8" cx300 bl470 crossed · text bl495
 *  b7 | bar x480 y440..492 lines bl460/486
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the ratio problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [NEET] — escape velocity by ratio",
            "Example [NEET] — ratio se escape velocity"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "Earth v(e) = 11.2 km/s — planet with 2M, R/2: find v(e)",
            "Earth v(e) = 11.2 km/s — planet 2M, R/2: v(e) nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — reason in ratios */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={130} size={14} fill={AMBER_DARK} script>
          {t(
            "reason in ratios: v(e) ∝ √(M ⁄ R)",
            "ratios mein socho: v(e) ∝ √(M ⁄ R)"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two planets */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 220 175 A 45 45 0 1 1 219.9 175"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={220} y={280} size={13} fill={INK} weight={700}>
          {t("Earth: M, R", "Earth: M, R")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 2.2)}
          d="M 740 186 A 34 34 0 1 1 739.9 186"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={740} y={280} size={13} fill={AMBER_DARK} weight={700}>
          {t("planet: 2M, R⁄2", "planet: 2M, R⁄2")}
        </T>
      </Fade>

      {/* beat 3 — the ratio */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={300} size={16} fill={INK} weight={700}>
          v(e,p) ⁄ v(e,E) = √(2 ⁄ ½)
        </T>
      </Fade>

      {/* beat 4 — evaluate */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={335} size={16} fill={INK} weight={700}>
          √4 = 2
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 412 360 h 256 q 12 0 12 12 v 28 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={392} size={17} fill={INK} weight={800}>
          v(e,p) = 22.4 km ⁄ s
        </T>
      </Fade>

      {/* beat 6 — the trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "trap: forget the root, apply factor 4 →",
            "trap: root bhoolo, factor 4 apply karo →"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={300} y={490} size={17} fill={RED} weight={800}>
          44.8
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.5)}
        d={crossD(280, 474, 60, 20)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />

      {/* beat 7 — the shape to remember */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 480 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={498} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "apply factors INSIDE the root, take it ONCE",
            "factors ANDAR root ke, root EK baar lo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={498} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "don't confuse with orbital velocity",
            "orbital velocity se confuse mat karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
