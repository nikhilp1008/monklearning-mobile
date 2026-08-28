/**
 * Ch14 · Section 32 — "Worked example: train toward a listener"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.58, 28.62, 37.2, 49.06, 56.01, 65.82, 73.59]):
 *  0 hook badge + question: find f heard by listener
 *  1 the figure: train approaches a still listener, vs=30 m/s
 *  2 data: f=500Hz, vs=30, vo=0, v=330
 *  3 identify: source→observer, use −vs in denominator
 *  4 formula: f' = f·v/(v−vs)
 *  5 compute: f' = 500×330/300 = 550 Hz
 *  6 sanity: 550 > 500 ✓ matches approach
 *  7 final: 550 Hz
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..132
 *  b0 | question chip (h34)           | Chip  | x380..680 y100..134
 *  b1 | train body + wheels + horn    | Draw  | x150..230 y155..180
 *  b1 | listener head                 | Draw  | c(400,165) r8
 *  b1 | arrow + "vs=30 m/s" (12)      | Draw+T| x235..385 y165
 *  b2 | data chip (h36)               | Chip  | x300..780 y285..321
 *  b3 | case text (13)                | T st  | x60 bl340             y328..343
 *  b4 | "f'=f·v/(v−vs)" (16)          | T st  | x60 bl370             y358..375
 *  b5 | compute chip (h40)            | Chip  | x60..400  y390..430
 *  b6 | sanity (13,green)             | T st  | x60 bl460             y448..461
 *  b7 | final chip (h54,s22)          | Chip  | x380..700 y490..544
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("worked example: train toward a listener", "worked example: train listener ki taraf")}
        </T>
      </Fade>

      {/* beat 0 — hook + question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ clean board Doppler numerical", "★ saaf board-level Doppler numerical")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={380} y={100} w={300} h={34} fill="#fff" stroke={INK} textFill={INK} size={13} script={false}>
          {t("find: f heard by listener?", "find karo: listener ko kaunsi f?")}
        </Chip>
      </Fade>

      {/* beat 1 — the picture */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 155 h 80 v 20 h -80 z" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 165 175 A 5 5 0 1 1 175 175 A 5 5 0 1 1 165 175 M 205 175 A 5 5 0 1 1 215 175 A 5 5 0 1 1 205 175" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M 232 158 q 8 -6 16 0 M 232 168 q 10 -6 20 0" stroke={AMBER_DARK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 396 165 A 8 8 0 1 1 404 165 A 8 8 0 1 1 396 165" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={arrowD(235, 165, 385, 165)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={310} y={155} size={12} fill={AMBER_DARK}>
          vs = 30 m/s
        </T>
      </Fade>

      {/* beat 2 — the data */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={300} y={285} w={480} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          f=500Hz, vs=30m/s, vo=0, v=330m/s
        </Chip>
      </Fade>

      {/* beat 3 — identify the case */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={340} size={13} fill={INK} anchor="start">
          {t("source→observer: use −vs in denominator", "source→observer: denominator mein −vs use karo")}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={370} size={16} fill={INK} anchor="start">
          f' = f·v/(v−vs)
        </T>
      </Fade>

      {/* beat 5 — compute */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={60} y={390} w={340} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          f' = 500×330/300 = 550 Hz
        </Chip>
      </Fade>

      {/* beat 6 — sanity check */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={460} size={13} fill={GREEN} anchor="start">
          {t("550 > 500 ✓ matches approach!", "550 > 500 ✓ approach jaisa hi!")}
        </T>
      </Fade>

      {/* beat 7 — final answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={380} y={490} w={320} h={54} fill={GREEN} textFill="#fff" size={22} script={false}>
          550 Hz
        </Chip>
      </Fade>
    </Scene>
  );
}
