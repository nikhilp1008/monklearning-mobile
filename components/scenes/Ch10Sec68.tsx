/**
 * Ch10 · Section 68 — "Worked example: cooker fast, mountain slow"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 2-6 are exactly 1s apart, so those Fade/Draw delays
 * stay ≤ ~0.3s.
 *
 * Beats (en [0,2.99,13.74,14.74,15.74,16.74,17.74]):
 *  0 hook: a classic board explain-with-reason question
 *  1 the question: why cooker cooks faster, hill station slower
 *  2 principle: boils when SVP = surrounding pressure
 *  3 cooker: trapped steam → BP climbs above 100°C → hotter, faster
 *  4 hill station: lower P → BP falls below 100°C → cooler, slower
 *  5 controlling variable: temperature of the boiling water, set by P
 *  6 the chain: higher P → higher BP → faster cooking
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | question mid x540 bl115
 *  b2 | principle mid x540 bl148
 *  b3 | box x260..820 y175..215 · text mid x540 y200
 *  b4 | box x260..820 y230..270 · text mid x540 y255
 *  b5 | note mid x540 bl305
 *  b6 | box x300..780 y330..372 · text mid x540 y357
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
  MUTED,
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("worked example — cooker fast, mountain slow", "worked example — cooker tez, mountain dheema")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("a classic board explain-with-reason question", "ek classic board explain-with-reason sawaal")}
        </T>
      </Fade>

      {/* beat 1 — the question */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={115} size={12} fill={INK} script anchor="middle">
          {t(
            "why food cooks faster in a cooker, slower on a hill station",
            "cooker mein khana tez kyun pakta, hill station par dheema kyun"
          )}
        </T>
      </Fade>

      {/* beat 2 — the principle */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={148} size={12} fill={MUTED} script anchor="middle">
          {t("boils when: saturated vapour pressure = surrounding pressure", "ubalta jab: SVP = surrounding pressure")}
        </T>
      </Fade>

      {/* beat 3 — the cooker */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M260 175 h560 v40 h-560 z" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={200} size={12} fill={AMBER_DARK} anchor="middle">
          {t("cooker: trapped steam → BP climbs above 100°C → hotter, faster", "cooker: bhaap fasi → BP 100°C se upar → garam, tez")}
        </T>
      </Fade>

      {/* beat 4 — the hill station */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M260 230 h560 v40 h-560 z" stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={255} size={12} fill={GREEN} anchor="middle">
          {t("hill station: lower P → BP falls below 100°C → cooler, slower", "hill station: kam P → BP 100°C se neeche → thanda, dheema")}
        </T>
      </Fade>

      {/* beat 5 — the controlling variable */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={305} size={12} fill={INK} script anchor="middle">
          {t("controlling variable: temperature of boiling water, set by P", "controlling variable: ubalte paani ka T, jo P se set hota")}
        </T>
      </Fade>

      {/* beat 6 — the chain */}
      <Draw on={beat >= 6} delay={dl(6, 0.15)} d="M300 330 h480 v42 h-480 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={357} size={14} fill={GREEN} weight={800} anchor="middle">
          {t("higher P → higher BP → faster cooking", "zyada P → zyada BP → tez cooking")}
        </T>
      </Fade>
    </Scene>
  );
}
