/**
 * Ch10 · Section 4 — "When the formulas hold, and water's rebellion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.31, 7.31, 8.31, 9.31, 10.31, 11.31] — beats 1-6 only 1s
 * apart in English, so every Fade delay below stays ≤ ~1s):
 *  0 fine print: three assumptions, before we write formulas
 *  1 assumption 1 — ΔT modest, α stays ~constant
 *  2 assumption 2 — isotropic, equal in all directions
 *  3 assumption 3 — normal behaviour... except one rebel
 *  4 water 0→4°C: contracts as warmed, density peaks at 4°C
 *  5 above 4°C: water expands the normal way
 *  6 fish survive under frozen ponds — "4 keeps the fish alive"
 *
 * Layout plan (strict non-overlapping y-bands, Kalam bl−1.3s..+0.5s):
 *  b0 | glass c(175,120)r18 + handle · label st x230 bl125
 *  b1 | badge c(170,185)r13 "1" · text st x200 bl190
 *  b2 | badge c(170,225)r13 "2" · text st x200 bl230
 *  b3 | badge c(170,265)r13 "3" · text st x200 bl270
 *  b4 | axes x200..480 y320..420 · curve 0→4°C to peak (350,360) · peak label mid x350 bl345
 *  b5 | curve 4→8°C falling · label st x420 bl372
 *  b6 | ice x550..700 y340 + hatch · fish x580..660 y355..380 · caption st x560 bl405
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

export default function Ch10Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={25} fill={INK} script>
          {t("when the formulas hold, and water's rebellion", "formulas kab chalte hain, aur paani ka rebellion")}
        </T>
      </Fade>

      {/* beat 0 — three assumptions, before the formulas */}
      <Draw on={beat >= 0} delay={dl(0, 0.2)} d="M157 120 a18 18 0 1 1 36 0 a18 18 0 1 1 -36 0 M188 133 l18 18" stroke={INK_LIGHT} sw={1.8} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={230} y={125} size={15} fill={INK} script anchor="start">
          {t("before the formulas — the fine print", "formulas se pehle — fine print")}
        </T>
      </Fade>

      {/* beat 1 — assumption 1 */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M157 185 a13 13 0 1 1 26 0 a13 13 0 1 1 -26 0" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={170} y={190} size={13} fill={AMBER_DARK} weight={800}>1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={200} y={190} size={14} fill={INK} script anchor="start">
          {t("ΔT modest — α stays ~constant", "ΔT halka — α ~constant rehta hai")}
        </T>
      </Fade>

      {/* beat 2 — assumption 2 */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M157 225 a13 13 0 1 1 26 0 a13 13 0 1 1 -26 0" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={170} y={230} size={13} fill={AMBER_DARK} weight={800}>2</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={200} y={230} size={14} fill={INK} script anchor="start">
          {t("isotropic — equal in all directions", "isotropic — sabhi disha mein barabar")}
        </T>
      </Fade>

      {/* beat 3 — assumption 3, the rebel */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M157 265 a13 13 0 1 1 26 0 a13 13 0 1 1 -26 0" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={170} y={270} size={13} fill={RED} weight={800}>3</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={200} y={270} size={14} fill={RED} script anchor="start">
          {t("normal behaviour... except one rebel", "normal vyavhaar... ek rebel chhodkar")}
        </T>
      </Fade>

      {/* beat 4 — water 0→4°C, density rises to a peak */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M200 320 v100 M200 420 h280" stroke={INK_LIGHT} sw={1.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={200} y={435} size={11} fill={MUTED}>0°C</T>
        <T x={350} y={435} size={11} fill={MUTED}>4°C</T>
        <T x={480} y={435} size={11} fill={MUTED}>8°C</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M200 395 Q275 365 350 360" stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={350} y={345} size={12} fill={RED} weight={700}>
          {t("peak — density MAX", "peak — density MAX")}
        </T>
      </Fade>

      {/* beat 5 — above 4°C: normal expansion resumes */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M350 360 Q425 375 480 385" stroke={INK_LIGHT} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={420} y={372} size={12} fill={INK_LIGHT} script anchor="start">
          {t("above 4°C — normal", "4°C se upar — normal")}
        </T>
      </Fade>

      {/* beat 6 — fish under frozen pond */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M550 340 h150" stroke={INK} sw={3} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M560 340 l-8 -10 M580 340 l-8 -10 M600 340 l-8 -10 M620 340 l-8 -10" stroke={INK_LIGHT} sw={1.4} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M580 365 q20 -12 40 0 q-20 12 -40 0 M620 365 l12 -8 l0 16 z" stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={560} y={405} size={13} fill={GREEN} script anchor="start">
          {t(
            "fish survive — '4 keeps the fish alive'",
            "machli bachti hai — 'chaar hi machli ko zinda rakhta hai'"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
