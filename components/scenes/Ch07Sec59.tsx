/**
 * Ch07 · Section 59 — "Worked example: scaling the period with radius (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.23, 24.41, 32, 33, 34, 35, 36]):
 *  0 title + problem
 *  1 amber: reason as a ratio, T ∝ r^(3/2)
 *  2 (continues, no shortcuts note)
 *  3 T ∝ r^(3/2) derivation
 *  4 ratio setup: T2/T1 = 4^(3/2)
 *  5 green box: 64, √64=8 → T2 = 48 hours
 *  6 red trap: 4×6=24 crossed out
 *  7 red margin: cube then root, 5-second calc
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  b1 | line cx540 bl130
 *  b3 | line cx540 bl175
 *  b4 | line cx540 bl215
 *  b5 | green box x380..700 y245..297(bl277)
 *  b6 | bar x66 y330..382 · "24 h" cx300 bl360 crossed
 *  b7 | bar x480 y330..382 lines bl350/376
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

export default function Ch07Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the scaling problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [NEET] — radius up 4×, period up?",
            "Example [NEET] — radius 4×, period?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "T₁ = 6 hours, r increased to 4× — find T₂",
            "T₁ = 6 ghante, r ko 4× kiya — T₂ nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — reason as a ratio */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={130} size={14} fill={AMBER_DARK} script>
          {t(
            "reason as a ratio: T² ∝ r³ → T ∝ r^(3⁄2)",
            "ratio mein socho: T² ∝ r³ → T ∝ r^(3⁄2)"
          )}
        </T>
      </Fade>

      {/* beat 3 — derivation */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={175} size={15} fill={INK} weight={700}>
          T² ∝ r³ → T ∝ r^(3⁄2)
        </T>
      </Fade>

      {/* beat 4 — the ratio */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={215} size={16} fill={INK} weight={700}>
          T₂ ⁄ T₁ = 4^(3⁄2)
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 392 245 h 296 q 12 0 12 12 v 28 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={277} size={17} fill={INK} weight={800}>
          4³=64, √64=8 → T₂ = 48 h
        </T>
      </Fade>

      {/* beat 6 — the linear trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 330 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={84} y={350} size={13} fill={RED} script anchor="start">
          {t(
            "trap: 4 × 6 =",
            "trap: 4 × 6 ="
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={220} y={355} size={17} fill={RED} weight={800}>
          24 h
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.4)}
        d={crossD(200, 340, 60, 20)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={84} y={376} size={13} fill={RED} script anchor="start">
          {t(
            "treats T ∝ r — wrong exponent",
            "T ∝ r maanta hai — galat exponent"
          )}
        </T>
      </Fade>

      {/* beat 7 — cube then root */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 480 330 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={498} y={350} size={13} fill={RED} script anchor="start">
          {t(
            "cube the factor, THEN take the root",
            "factor ko cube karo, PHIR root lo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={498} y={376} size={13} fill={RED} script anchor="start">
          {t(
            "4³=64, √64=8 — a five-second calc",
            "4³=64, √64=8 — paanch second ka calc"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
