/**
 * Ch10 · Section 38 — "Radiation: heat across empty space, and Prevost's exchange"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Opens Subtopic 4 (Radiation and Cooling Laws).
 *
 * Beats (en [0,1,2,3,13.84,23.82,36.02] — beats 0-2 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: Delhi morning, sun clears the rooftop — how did the heat arrive?
 *  1 not conduction, not convection — sun's rays cross a vacuum
 *  2 radiation: EM waves, no medium needed — the only mode crossing empty space
 *  3 every object radiates, always — you, this page, an ice cube, a star
 *  4 Prevost's exchange: a body always emits AND absorbs
 *  5 net balance: radiate>absorb ⇒ cool; absorb>radiate ⇒ warm
 *  6 equilibrium: still radiating — just at equal rates (dynamic standoff)
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | sun x520..560 y95..125 · rays x540 y130..160 · label mid x540 bl175
 *  b2 | note mid x540 bl205
 *  b3 | note mid x540 bl235
 *  b4 | body c(540,280)r25 · in-arrow x470..510 · out-arrow x570..610 ·
 *       label mid x540 bl325
 *  b5 | note mid x540 bl358
 *  b6 | note mid x540 bl390
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("radiation — heat across empty space, and prevost's exchange", "radiation — khali space mein heat, aur prevost ka exchange")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("Delhi morning, sun clears the rooftop — how did the heat arrive?", "Delhi ki subah, suraj rooftop ke upar — heat kaise pahunchi?")}
        </T>
      </Fade>

      {/* beat 1 — the sun, crossing a vacuum */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M525 95 A15 15 0 1 1 555 95 A15 15 0 1 1 525 95" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.35)} d="M540 130 v10 M540 145 v10" stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={175} size={12} fill={INK} script anchor="middle">
          {t("not conduction, not convection — it crossed a vacuum", "conduction nahi, convection nahi — yeh vacuum paar kar aaya")}
        </T>
      </Fade>

      {/* beat 2 — radiation defined */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={205} size={13} fill={RED} script weight={700} anchor="middle">
          {t("RADIATION — EM waves, no medium needed", "RADIATION — EM waves, medium ki zaroorat nahi")}
        </T>
      </Fade>

      {/* beat 3 — everyone radiates */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={235} size={12} fill={INK} script anchor="middle">
          {t("every object radiates, always — you, this page, an ice cube, a star", "har object radiate karta, hamesha — tum, yeh page, ice cube, ek taara")}
        </T>
      </Fade>

      {/* beat 4 — Prevost's exchange */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M515 280 A25 25 0 1 1 565 280 A25 25 0 1 1 515 280" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={arrowD(470, 280, 508, 280)} stroke={GREEN} sw={2} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 0.75)} d={arrowD(572, 280, 610, 280)} stroke={RED} sw={2} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={325} size={13} fill={INK} script anchor="middle">
          {t("Prevost: always emitting AND absorbing", "Prevost: hamesha emit AUR absorb karta")}
        </T>
      </Fade>

      {/* beat 5 — the net balance */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={358} size={13} fill={AMBER_DARK} script anchor="middle">
          {t("net balance: radiate>absorb ⇒ cool; absorb>radiate ⇒ warm", "net balance: radiate>absorb ⇒ thanda; absorb>radiate ⇒ garam")}
        </T>
      </Fade>

      {/* beat 6 — equilibrium */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={390} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t("equilibrium: still radiating — just at equal rates", "equilibrium: radiate ho raha hai — bas barabar rates par")}
        </T>
      </Fade>
    </Scene>
  );
}
