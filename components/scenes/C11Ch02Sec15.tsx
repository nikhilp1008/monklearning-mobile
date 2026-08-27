/**
 * C11 Ch02 · Section 15 — "Light as a wave: Maxwell and c = nu lambda"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. First section of subtopic 2 (EM Radiation).
 *
 * Beats (en [0, 11.95, 20.74, 41.47, 52.48, 66.13, 78.93, 86.95]):
 *  0 anchor: "light's first identity: a wave"
 *  1 transition: first, understand the light atoms emit
 *  2 represent: Maxwell's EM wave — E ⊥ B, no medium needed
 *  3 formula (high): c = νλ = 3×10⁸ m/s (vacuum)
 *  4 explain: described by λ, ν, c — simplest relation in the chapter
 *  5 represent: the EM spectrum, radio → gamma
 *  6 explain: visible light is a thin slice
 *  7 guardrail (high): explains interference/diffraction — 2 brick walls ahead
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y54 size15 script red
 *  b0 | anchor caption      | T mid | x540 y86             [dims@b1]
 *  b1 | transition caption  | T mid | x540 y118
 *  b2 | "E" label           | T sta | x200 y150
 *  b2 | axis + E/B waves    | Draw  | y195  x160..740
 *  b2 | "B" label           | T sta | x200 y245
 *  b2 | "no medium" note    | T mid | x540 y274
 *  b3 | c=νλ box (GREEN)    | Chip  | x350..730 y296..330
 *  b4 | "λ,ν,c" caption     | T mid | x540 y356
 *  b5 | 7 spectrum rects    | Fade  | y376..400  x140..936
 *  b5 | band labels ×7      | T     | y418
 *  b5 | arrow + label       | Draw/T| y434 / y460
 *  b6 | "thin slice" cap    | T mid | x540 y492
 *  b7 | guardrail (RED)     | T mid | x540 y526
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function sineD(x0: number, x1: number, y: number, amp: number, cycles: number, steps = 60): string {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps;
    const yy = y + amp * Math.sin(cycles * 2 * Math.PI * (i / steps));
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${yy.toFixed(1)} `;
  }
  return d;
}

const E_WAVE_D = sineD(160, 740, 195, 30, 3);
const B_WAVE_D = sineD(160, 740, 195, 14, 3);

const SPECTRUM: [number, string, string, string?][] = [
  [140, "radio", MUTED],
  [254, "micro", AMBER],
  [368, "IR", AMBER_DARK],
  [482, "visible", GREEN],
  [596, "UV", RED],
  [710, "X-ray", INK],
  [824, "gamma", CREAM, INK],
];

export default function C11Ch02Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={54} size={15} fill={RED} script>
          {t("light as a wave: Maxwell and c = νλ", "light ek wave: Maxwell aur c = νλ")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={86} size={11} fill={RED} script>
          {t("light's first identity: a wave", "light ki pehli pehchaan: ek wave")}
        </T>
      </Fade>

      {/* beat 1 — transition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={118} size={12} fill={INK} script>
          {t("first, understand the light atoms emit", "pehle samjho jo light atoms chhodte hain")}
        </T>
      </Fade>

      {/* beat 2 — represent: Maxwell's EM wave */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={200} y={150} size={11} fill={RED} anchor="start">
          E ({t("electric field", "electric field")})
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={arrowD(160, 195, 740, 195)} stroke={INK} sw={1.6} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={E_WAVE_D} stroke={RED} sw={2.2} dur={1.2} />
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d={B_WAVE_D} stroke={AMBER_DARK} sw={1.8} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={200} y={245} size={11} fill={AMBER_DARK} anchor="start">
          B ({t("magnetic field, ⊥", "magnetic field, ⊥")})
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={540} y={274} size={11} fill={MUTED} script>
          {t("no medium needed — travels through vacuum", "koi medium nahi chahiye — vacuum mein bhi chalti hai")}
        </T>
      </Fade>

      {/* beat 3 — formula (high emphasis) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={350} y={296} w={380} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          c = νλ = 3 × 10⁸ m/s (vacuum)
        </Chip>
      </Fade>

      {/* beat 4 — explain: the three describing quantities */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={356} size={12} fill={INK} script>
          {t(
            "described by λ (wavelength), ν (frequency), c (speed)",
            "λ (wavelength), ν (frequency), c (speed) se describe hoti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — represent: the EM spectrum */}
      {SPECTRUM.map(([x, name, fill, stroke], i) => (
        <React.Fragment key={x}>
          <Fade on={beat >= 5} delay={dl(5, 0.2 + i * 0.15)}>
            <Rect x={x} y={376} width={104} height={24} fill={fill} stroke={stroke} strokeWidth={stroke ? 1.5 : 0} />
          </Fade>
          <Fade on={beat >= 5} delay={dl(5, 1.3 + i * 0.15)}>
            <T x={x + 52} y={418} size={9} fill={INK}>
              {name}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw on={beat >= 5} delay={dl(5, 2.5)} d={arrowD(140, 434, 930, 434)} stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 3.3)}>
        <T x={540} y={460} size={11} fill={MUTED} script>
          {t("increasing frequency and energy per photon →", "frequency aur per-photon energy badhti hai →")}
        </T>
      </Fade>

      {/* beat 6 — explain: visible is a thin slice */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={492} size={12} fill={INK} script>
          {t("visible light — just a thin slice", "visible light — bas ek patla hissa")}
        </T>
      </Fade>

      {/* beat 7 — guardrail (high): two brick walls ahead */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={526} size={13} fill={RED} script>
          {t(
            "explains interference & diffraction — but hits two brick walls",
            "interference & diffraction explain karta hai — par do brick walls aati hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
