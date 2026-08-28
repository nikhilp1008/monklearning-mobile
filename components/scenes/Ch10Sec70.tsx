/**
 * Ch10 · Section 70 — "Worked example: why dry ice sublimes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 4-6 and hi beats 0-2 are exactly 1s apart, so all
 * Fade/Draw delays in this file stay ≤ ~0.3s.
 *
 * Beats (en [0,3.75,21.16,29.44,38.14,39.14,40.14]):
 *  0 hook: a phase-diagram argument, and a satisfying one
 *  1 setup: CO2 triple point 216.6K/5.1atm — why sublimes at 1atm?
 *  2 CO2's triple point sits at 5.1 atm — well above 1 atm
 *  3 liquid phase exists only above the triple-point pressure
 *  4 at 1atm: horizontal line crosses only the sublimation curve
 *  5 hence dry ice sublimes — need P>5.1atm for liquid CO2
 *  6 generalized: water's triple point is far below 1atm — it melts
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | setup mid x540 bl113
 *  b2 | axes x230..780 y100..300 · triple dot (330,180) · solid label ·
 *       caption mid x540 bl330
 *  b3 | fusion + vaporization curves · liquid label · caption bl354
 *  b4 | sublimation curve · 1atm dashed line y250 · crossing dot ·
 *       gas label · "1 atm" tag · caption bl378
 *  b5 | caption mid x540 bl405
 *  b6 | caption mid x540 bl430
 */

import React from "react";
import { Path } from 'react-native-svg';
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

export default function Ch10Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("worked example — why dry ice sublimes", "worked example — dry ice sublime kyun hota")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("a phase-diagram argument, and a satisfying one", "ek phase-diagram tark, aur ek satisfying wala")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={113} size={12} fill={INK} script anchor="middle">
          {t("CO₂ triple point: 216.6K, 5.1atm — why sublime at 1atm?", "CO₂ triple point: 216.6K, 5.1atm — 1atm par sublime kyun?")}
        </T>
      </Fade>

      {/* beat 2 — axes, triple point, solid region */}
      <Draw on={beat >= 2} delay={dl(2, 0.05)} d="M230 100 v200 M230 300 h550" stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M326 180 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={260} y={220} size={11} fill={MUTED} anchor="middle">{t("solid", "solid")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={330} size={12} fill={RED} script anchor="middle">
          {t("triple point: 5.1 atm — well above 1 atm", "triple point: 5.1 atm — 1 atm se kaafi upar")}
        </T>
      </Fade>

      {/* beat 3 — liquid region */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M330 180 L360 100" stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 0.25)} d="M330 180 Q460 140 590 100" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={460} y={130} size={11} fill={MUTED} anchor="middle">{t("liquid", "liquid")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={354} size={12} fill={INK} script anchor="middle">
          {t("liquid exists only above the triple-point pressure", "liquid sirf triple-point pressure se upar milta")}
        </T>
      </Fade>

      {/* beat 4 — sublimation curve, 1atm line, crossing */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M330 180 L200 290" stroke={GREEN} sw={2} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <Path d="M230 250 h550" fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M243 250 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" stroke={AMBER_DARK} sw={2.2} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={650} y={260} size={11} fill={MUTED} anchor="middle">{t("gas", "gas")}</T>
        <T x={790} y={254} size={11} fill={AMBER_DARK} anchor="start">{t("1 atm", "1 atm")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.45)}>
        <T x={540} y={378} size={12} fill={GREEN} script anchor="middle">
          {t("at 1atm: crosses only sublimation — never liquid", "1atm par: sirf sublimation cross — liquid kabhi nahi")}
        </T>
      </Fade>

      {/* beat 5 — conclusion */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={405} size={13} fill={GREEN} weight={700} anchor="middle">
          {t("dry ice sublimes — need P>5.1atm for liquid CO₂", "dry ice sublime hota — liquid CO₂ ko P>5.1atm chahiye")}
        </T>
      </Fade>

      {/* beat 6 — generalized rule */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={430} size={12} fill={INK} script weight={700} anchor="middle">
          {t(
            "water's triple point is far below 1atm — it melts, not sublimes",
            "paani ka triple point 1atm se kaafi neeche — melt hota, sublime nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
