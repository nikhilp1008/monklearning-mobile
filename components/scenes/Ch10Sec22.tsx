/**
 * Ch10 · Section 22 — "Worked example: ice into warm water, mind the melt"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,5,16.52] — beats 0-4 exactly 1s apart, so those
 * Fade delays stay ≤ ~0.3s):
 *  0 hook: the trap NEET loves in every mixing problem
 *  1 setup: 5g ice(0°C) + 20g water(30°C), insulated, find final T
 *  2 the reflex (WRONG): 20(30−T)=5T ⇒ 24°C — forgets the melt
 *  3 budget: water cooling to 0°C can give 600 cal
 *  4 melt needs 5×80=400 cal < 600 ⇒ all ice melts, 200 cal left
 *  5 surplus warms all 25g: 200=25×1×T ⇒ T=8°C
 *  6 rule: melt first, then warm — skipping it is the #1 error
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | setup mid x540 bl118
 *  b2 | box x280..800 y145..185 · wrong mid x540 bl168 · cross over box
 *  b3 | budget1 mid x540 bl215
 *  b4 | budget2 mid x540 bl250
 *  b5 | box x350..730 y280..320 · answer mid x540 bl305
 *  b6 | rule mid x540 bl355
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("worked example — ice into warm water, mind the melt", "worked example — garam paani mein baraf, melt yaad rakho")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("the trap NEET loves in every mixing problem", "har mixing problem mein NEET ka pasandeeda trap")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={118} size={13} fill={INK} script anchor="middle">
          {t(
            "5g ice(0°C) + 20g water(30°C), insulated — find final T",
            "5g ice(0°C) + 20g paani(30°C), insulated — final T nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 2 — the wrong reflex */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M280 145 h520 v40 h-520 z" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={540} y={168} size={13} fill={RED} anchor="middle">
          20(30−T)=5T ⇒ T=24°C — {t("WRONG (forgets the melt!)", "GALAT (melt bhool gaye!)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={crossD(280, 145, 520, 40)} stroke={RED} sw={2} dur={0.35} />

      {/* beat 3 — the budget: what water gives */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={215} size={13} fill={INK} script anchor="middle">
          {t("water cools to 0°C — can give: 600 cal", "paani 0°C tak thanda — de sakta: 600 cal")}
        </T>
      </Fade>

      {/* beat 4 — what melting needs */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={250} size={13} fill={INK} script anchor="middle">
          {t(
            "melt needs 5×80=400 cal < 600 ⇒ ALL ice melts, 200 cal left",
            "melt ko 5×80=400 cal chahiye < 600 ⇒ SAARA baraf pighle, 200 cal bache"
          )}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M350 280 h380 v40 h-380 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={305} size={15} fill={GREEN} weight={800} anchor="middle">
          200 = 25×1×T ⇒ T = 8°C
        </T>
      </Fade>

      {/* beat 6 — the rule */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={355} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "melt first, then warm — skipping the latent step is the #1 error",
            "pehle melt, phir warm — latent step chhodna #1 galti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
