/**
 * Ch10 · Section 15 — "Specific heat: the stubbornness of water"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Opens Subtopic 2 (Calorimetry and Specific Heat).
 *
 * Beats (en [0,10.92,22.19,32.68,41.64,52.82,67.93]):
 *  0 hook: steel ladle + water mug, same flame, same time — why differ?
 *  1 pick up: ladle scorching, water just warm
 *  2 temps rose wildly differently: water refused, steel surrendered
 *  3 definition: specific heat c = heat to raise 1 kg by 1°C
 *  4 water's value: 4186 J/(kg·K) = 1 cal/(g·°C) — unusually high
 *  5 consequences: sea breeze, hot-water bottle, coastal climate, body temp
 *  6 verdict: water is nature's thermal shock-absorber
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | ladle x298..390 y108..160 + flame · mug x630..695 y110..150 + flame ·
 *       caption mid x540 bl215
 *  b1 | scorch overlay on ladle · label mid x320 bl245 (red) ·
 *       label mid x655 bl245 (green)
 *  b2 | baseline y315 x280..660 · water bar x300..330 y295..315 ·
 *       steel bar x600..630 y250..315 · labels mid x315/615 bl340
 *  b3 | definition mid x540 bl372
 *  b4 | box x350..730 y390..430 · value mid x540 bl413
 *  b5 | consequences mid x540 bl460
 *  b6 | verdict mid x540 bl500
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
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("specific heat — the stubbornness of water", "specific heat — paani ki ziddi tabiyat")}
        </T>
      </Fade>

      {/* beat 0 — hook: ladle and mug, same flame */}
      <Draw on={beat >= 0} delay={dl(0, 0.2)} d="M298 130 A22 22 0 1 1 342 130 A22 22 0 1 1 298 130 M342 130 l40 -18" stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M310 158 q5 -10 0 -18 M320 158 q5 -10 0 -18 M330 158 q5 -10 0 -18" stroke={AMBER_DARK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M630 110 h50 v40 h-50 z M680 118 q14 2 14 14 q-2 12 -14 14" stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Draw on={beat >= 0} delay={dl(0, 1.3)} d="M645 155 q5 -10 0 -18 M655 155 q5 -10 0 -18 M665 155 q5 -10 0 -18" stroke={AMBER_DARK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 0} delay={dl(0, 1.7)}>
        <T x={540} y={215} size={13} fill={INK} script anchor="middle">
          {t(
            "same flame, same time — why does one scorch, one stay warm?",
            "same flame, same time — ek jalta hai, doosra bas garam kyun?"
          )}
        </T>
      </Fade>

      {/* beat 1 — pick them up */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M305 118 l10 10 M325 112 l8 8 M315 138 l10 8" stroke={RED} sw={1.8} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={320} y={245} size={12} fill={RED} weight={700} anchor="middle">{t("scorching!", "jal raha!")}</T>
        <T x={655} y={245} size={12} fill={GREEN} weight={700} anchor="middle">{t("just warm", "bas garam")}</T>
      </Fade>

      {/* beat 2 — wildly different temperature rise */}
      <Draw on={beat >= 2} delay={dl(2, 0.15)} d="M280 315 h380" stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M300 295 h30 v20 h-30 z" stroke={GREEN} sw={2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 0.65)} d="M600 250 h30 v65 h-30 z" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={315} y={340} size={11} fill={MUTED} anchor="middle">{t("water: small ΔT", "paani: chhota ΔT")}</T>
        <T x={615} y={340} size={11} fill={MUTED} anchor="middle">{t("steel: big ΔT", "steel: bada ΔT")}</T>
      </Fade>

      {/* beat 3 — the definition */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={372} size={14} fill={INK} script anchor="middle">
          {t("specific heat c = heat to raise 1 kg by 1°C", "specific heat c = 1 kg ko 1°C badhaane ki heat")}
        </T>
      </Fade>

      {/* beat 4 — water's value */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M350 390 h380 v40 h-380 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.55)}>
        <T x={540} y={413} size={14} fill={AMBER_DARK} weight={700} anchor="middle">
          c_water = 4186 J⁄(kg·K) = 1 cal⁄(g·°C)
        </T>
      </Fade>

      {/* beat 5 — the consequences */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={460} size={12} fill={INK} script anchor="middle">
          {t(
            "sea breeze · hot-water bottle · coastal climates · steady body heat",
            "sea breeze · hot-water bottle · coastal climate · sthir body heat"
          )}
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={500} size={15} fill={GREEN} script weight={700} anchor="middle">
          {t("water is nature's thermal shock-absorber", "paani nature ka thermal shock-absorber hai")}
        </T>
      </Fade>
    </Scene>
  );
}
