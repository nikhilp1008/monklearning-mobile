/**
 * Ch14 · Section 34 — "Worked example: both approaching"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.65, 27.29, 34.67, 43.15, 50.16, 59.01, 67.49]):
 *  0 hook badge + question: find f heard by rider
 *  1 the figure: ambulance (vs=40) and rider (vo=20) closing on each other
 *  2 data: f=600Hz, vs=40, vo=20, v=340
 *  3 both approaching: +vo numerator, −vs denominator (both push f up)
 *  4 formula: f'=600×(340+20)/(340−40)
 *  5 compute: =600×360/300=720 Hz
 *  6 sanity: 720 ≫ 600 ✓ both approaching
 *  7 final: 720 Hz
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..132
 *  b0 | question chip (h34)           | Chip  | x380..680 y100..134
 *  b1 | ambulance body+wheels         | Draw  | x150..230 y155..180
 *  b1 | arrow + "vs=40" (12)          | Draw+T| x235..280 y165
 *  b1 | rider circle                 | Draw  | c(420,165) r8
 *  b1 | arrow + "vo=20" (12)          | Draw+T| x355..405 y165
 *  b2 | data chip (h36)               | Chip  | x280..800 y285..321
 *  b3 | sign logic (13)               | T st  | x60 bl340             y328..343
 *  b4 | formula (15)                  | T st  | x60 bl370             y358..375
 *  b5 | compute chip (h40)            | Chip  | x60..400  y390..430
 *  b6 | sanity (13,green)             | T st  | x60 bl460             y448..461
 *  b7 | final chip (h54,s22)          | Chip  | x380..700 y490..544
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("worked example: both approaching", "worked example: dono approach kar rahe")}
        </T>
      </Fade>

      {/* beat 0 — hook + question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ JEE Main staple — both moving!", "★ JEE Main staple — dono moving!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={380} y={100} w={300} h={34} fill="#fff" stroke={INK} textFill={INK} size={13} script={false}>
          {t("find: f heard by rider?", "find karo: rider ko kaunsi f?")}
        </Chip>
      </Fade>

      {/* beat 1 — the picture */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 155 h 80 v 20 h -80 z" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 165 175 A 5 5 0 1 1 175 175 A 5 5 0 1 1 165 175 M 205 175 A 5 5 0 1 1 215 175 A 5 5 0 1 1 205 175" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(235, 165, 280, 165)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={257} y={150} size={12} fill={AMBER_DARK}>
          vs=40
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d="M 416 165 A 8 8 0 1 1 424 165 A 8 8 0 1 1 416 165" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={arrowD(405, 165, 360, 165)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={383} y={150} size={12} fill={GREEN}>
          vo=20
        </T>
      </Fade>

      {/* beat 2 — the data */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={280} y={285} w={520} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          f=600Hz, vs=40(toward), vo=20(toward), v=340
        </Chip>
      </Fade>

      {/* beat 3 — the sign logic */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={340} size={13} fill={INK} anchor="start">
          {t(
            "both approaching: +vo numerator, −vs denominator",
            "dono approach: +vo numerator, −vs denominator"
          )}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={370} size={15} fill={INK} anchor="start">
          f' = 600×(340+20)/(340−40)
        </T>
      </Fade>

      {/* beat 5 — compute */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={60} y={390} w={340} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          = 600×360/300 = 720 Hz
        </Chip>
      </Fade>

      {/* beat 6 — sanity check */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={460} size={13} fill={GREEN} anchor="start">
          {t("720 ≫ 600 ✓ both approaching!", "720 ≫ 600 ✓ dono approach kar rahe!")}
        </T>
      </Fade>

      {/* beat 7 — final answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={380} y={490} w={320} h={54} fill={GREEN} textFill="#fff" size={22} script={false}>
          720 Hz
        </Chip>
      </Fade>
    </Scene>
  );
}
