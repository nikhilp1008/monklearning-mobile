/**
 * Ch10 · Section 59 — "Worked example: pressure in a sealed rigid vessel"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,9.31,22.37,35.85] — beats 0-2 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: a constant-volume problem — a sealed rigid vessel
 *  1 setup: gas at 27°C, 1atm, heated to 127°C — find new pressure
 *  2 rigid vessel ⇒ V constant ⇒ Gay-Lussac's law, P ∝ T
 *  3 work in kelvin: 27°C=300K, 127°C=400K
 *  4 P₂ = P₁×T₂/T₁ = 1×400/300 = 4/3 ≈ 1.33 atm
 *  5 insight: 100° rise sounds big — only a 33% pressure increase
 *  6 takeaway: reason in kelvin — Celsius suggests a misleading factor of ~5
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | setup mid x540 bl120
 *  b2 | note mid x540 bl153
 *  b3 | convert mid x540 bl188
 *  b4 | box x330..750 y212..254 · answer mid x540 bl238
 *  b5 | insight mid x540 bl285
 *  b6 | takeaway mid x540 bl320
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

export default function Ch10Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("worked example — pressure in a sealed rigid vessel", "worked example — sealed rigid vessel mein pressure")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("a constant-volume problem — a sealed rigid vessel", "ek constant-volume problem — sealed rigid vessel")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={120} size={12} fill={INK} script anchor="middle">
          {t(
            "gas at 27°C, 1atm, heated to 127°C — find new pressure",
            "gas 27°C, 1atm par, 127°C tak garam — naya pressure?"
          )}
        </T>
      </Fade>

      {/* beat 2 — Gay-Lussac's law applies */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={153} size={12} fill={MUTED} script anchor="middle">
          {t("rigid ⇒ V constant ⇒ Gay-Lussac's law, P ∝ T", "rigid ⇒ V constant ⇒ Gay-Lussac's law, P ∝ T")}
        </T>
      </Fade>

      {/* beat 3 — convert to kelvin */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={188} size={13} fill={INK} anchor="middle">
          27°C=300K, 127°C=400K
        </T>
      </Fade>

      {/* beat 4 — the answer */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M330 212 h420 v42 h-420 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={238} size={15} fill={GREEN} weight={800} anchor="middle">
          P₂ = 1×400/300 ≈ 1.33 atm
        </T>
      </Fade>

      {/* beat 5 — the insight */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={285} size={12} fill={AMBER_DARK} script anchor="middle">
          {t(
            "100° rise sounds big — only a 33% pressure increase",
            "100° ka rise bada lagta — pressure sirf 33% badhta"
          )}
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={320} size={13} fill={INK} script weight={700} anchor="middle">
          {t(
            "reason in kelvin — Celsius suggests a misleading factor of ~5",
            "kelvin mein socho — Celsius ~5 ka galat factor sujhata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
