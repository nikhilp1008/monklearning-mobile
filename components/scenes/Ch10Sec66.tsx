/**
 * Ch10 · Section 66 — "The change-of-state facts and constants"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: hi reveals have beats 3-6 exactly 1s apart, so those Fade
 * delays stay ≤ ~0.3s (kept uniform across the file for consistency).
 *
 * Beats (en [0,5.12,15.96,27.99,40.19,47.87,58.45]):
 *  0 gather the change-of-state facts worth carrying into the exam
 *  1 Q = mL — fusion 80 cal/g, vaporization 540 cal/g
 *  2 melting pt vs P: water decreases (~-0.0075°C/atm), most substances rise
 *  3 boiling pt vs P: rises (cooker), falls at altitude (mountain)
 *  4 triple point of water: 273.16K at 611.7 Pa
 *  5 critical point of water: 647K at 22.1 MPa — can't liquefy above it
 *  6 sublimation rule: ambient P below triple-point P (dry ice @ 1atm)
 *
 * Layout plan (strict non-overlapping y-bands, formula-card style):
 *  b0 | intro mid x540 bl85
 *  b1 | chip x420 y100 w240 h40 "Q = mL" · text mid x540 bl165
 *  b2 | line1 mid x540 bl195 · line2 mid x540 bl218
 *  b3 | line1 mid x540 bl248 · line2 mid x540 bl271
 *  b4 | note mid x540 bl304
 *  b5 | note mid x540 bl330
 *  b6 | note mid x540 bl362
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  MUTED,
  CREAM,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("the change-of-state facts and constants", "change-of-state facts aur constants")}
        </T>
      </Fade>

      {/* beat 0 — gather the facts */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("the facts worth carrying into the exam", "exam mein le jaane laayak facts")}
        </T>
      </Fade>

      {/* beat 1 — Q = mL */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={420} y={100} w={240} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={20} script={false}>
          Q = mL
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.25)}>
        <T x={540} y={165} size={12} fill={MUTED} anchor="middle">
          {t("fusion 80 cal/g · vaporization 540 cal/g", "fusion 80 cal/g · vaporization 540 cal/g")}
        </T>
      </Fade>

      {/* beat 2 — melting point vs pressure */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={540} y={195} size={12} fill={RED} script anchor="middle">
          {t("water: melting point DECREASES (~ -0.0075°C/atm)", "paani: melting point GHATTA (~ -0.0075°C/atm)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.25)}>
        <T x={540} y={218} size={12} fill={INK} script anchor="middle">
          {t("most substances: melting point increases", "zyadatar substances: melting point badhta")}
        </T>
      </Fade>

      {/* beat 3 — boiling point vs pressure */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <T x={540} y={248} size={12} fill={AMBER_DARK} script anchor="middle">
          {t("boiling point RISES with pressure — pressure cooker", "boiling point BADHTA pressure se — pressure cooker")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.25)}>
        <T x={540} y={271} size={12} fill={GREEN} script anchor="middle">
          {t("falls at altitude — slow mountain cooking", "altitude par ghatta — mountain par dheeme cooking")}
        </T>
      </Fade>

      {/* beat 4 — triple point of water */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={304} size={13} fill={INK} weight={700} anchor="middle">
          {t("triple point: 273.16 K at 611.7 Pa", "triple point: 273.16 K par 611.7 Pa")}
        </T>
      </Fade>

      {/* beat 5 — critical point of water */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={330} size={12} fill={INK} anchor="middle">
          {t("critical point: 647 K at 22.1 MPa — no liquefying above this", "critical point: 647 K par 22.1 MPa — iske upar liquefy nahi")}
        </T>
      </Fade>

      {/* beat 6 — sublimation rule */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={362} size={13} fill={INK} script weight={700} anchor="middle">
          {t(
            "sublimation: ambient P < triple-point P (dry ice @ 1 atm)",
            "sublimation: ambient P < triple-point P (dry ice @ 1 atm)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
