/**
 * Ch10 · Section 6 — "Heat, specific heat, and the calorie"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 10.83, 24.82] — beats 0-3 only 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: heat is energy — what does a ΔT cost?
 *  1 the equation: Q = m c ΔT
 *  2 recipe: mass × reluctance(c) × ΔT — triple mass ⇒ triple heat
 *  3 variable legend: Q, m, c, ΔT
 *  4 1 calorie = 4.186 J
 *  5 precise calorie def (1g water, 14.5→15.5°C) + c's SI unit J/(kg·K)
 *  6 mechanical equivalent J — just a conversion constant
 *
 * Layout plan (strict non-overlapping y-bands, sans bl−0.78s..+0.31s):
 *  b0 | flame x150..190 y100..140 · label st x220 bl120
 *  b1 | equation mid x540 bl185 size32
 *  b2 | text mid x540 bl235 · bars x500..524 y245..274
 *  b3 | Q/m st x250/650 bl305 · c/ΔT st x250/650 bl335
 *  b4 | chip x400..680 y370..405
 *  b5 | line1 mid x540 bl450 · line2 mid x540 bl480
 *  b6 | box x300..780 y515..565 · text mid x540 bl545
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={25} fill={INK} script>
          {t("heat, specific heat, and the calorie", "heat, specific heat, aur calorie")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Draw on={beat >= 0} delay={dl(0, 0.1)} d="M170 140 q-14 -18 0 -32 q6 10 6 16 q0 -22 12 -30 q-4 24 6 30 q10 6 6 16 q-4 10 -14 10 q-10 0 -16 -10" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={220} y={120} size={14} fill={INK} script anchor="start">
          {t("heat is energy — what does a ΔT cost?", "heat energy hai — ΔT ki keemat kya?")}
        </T>
      </Fade>

      {/* beat 1 — the equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={185} size={32} fill={INK} weight={800} anchor="middle">
          Q = m c ΔT
        </T>
      </Fade>

      {/* beat 2 — the recipe */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={235} size={14} fill={INK} script anchor="middle">
          {t(
            "recipe: mass × reluctance(c) × ΔT — triple mass ⇒ triple heat",
            "recipe: mass × reluctance(c) × ΔT — mass 3x ⇒ heat bhi 3x"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M500 274 v-8 M512 274 v-16 M524 274 v-24" stroke={GREEN} sw={3} dur={0.4} />

      {/* beat 3 — variable legend */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={250} y={305} size={13} fill={INK} script anchor="start">
          {t("Q = heat (joules)", "Q = heat (joules)")}
        </T>
        <T x={650} y={305} size={13} fill={INK} script anchor="start">
          {t("m = mass", "m = mass")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={250} y={335} size={13} fill={INK} script anchor="start">
          {t("c = specific heat capacity", "c = specific heat capacity")}
        </T>
        <T x={650} y={335} size={13} fill={INK} script anchor="start">
          {t("ΔT = temperature change", "ΔT = temperature ka badlaav")}
        </T>
      </Fade>

      {/* beat 4 — the calorie */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={400} y={370} w={280} h={35} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={18} script={false}>
          1 cal = 4.186 J
        </Chip>
      </Fade>

      {/* beat 5 — precise definition + c's SI unit */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={450} size={13} fill={INK} script anchor="middle">
          {t(
            "precisely: 1g water, 14.5°C → 15.5°C = 1 calorie",
            "sateek: 1g paani, 14.5°C → 15.5°C = 1 calorie"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={480} size={13} fill={AMBER_DARK} script anchor="middle">
          {t("c's SI unit: J ⁄ (kg·K)", "c ki SI unit: J ⁄ (kg·K)")}
        </T>
      </Fade>

      {/* beat 6 — mechanical equivalent J */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M300 515 h480 v50 h-480 z" stroke={AMBER} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={545} size={14} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "J = mechanical equivalent — just a conversion constant",
            "J = mechanical equivalent — bas ek conversion constant"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
