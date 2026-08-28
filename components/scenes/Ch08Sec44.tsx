/**
 * Ch08 · Section 44 — "Resilience versus toughness"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 3..6 are ~1s each — short delays throughout for English.
 *
 * Two overlaid areas under one curve: resilience (to yield) vs
 * toughness (to fracture).
 *
 * Beats (en [0, 8.79, 18.69, 19.69, 20.69, 21.69, 22.69]):
 *  0 title only
 *  1 diagram: curve + toughness wash (whole) + resilience wedge (to yield)
 *  2 text: both areas under same curve, differ in where you stop
 *  3 text: resilience = area to yield = recoverable energy
 *  4 text: toughness = area to fracture = total absorbed
 *  5 red margin: springs/trampolines → resilience; barriers/helmets → toughness
 *  6 text: can be resilient but not tough, or vice versa
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..780 y130..470
 *  b1 | curve               | Draw | (150,470)→(480,300)
 *  b1 | toughness wash      | Fade | closed path (whole)
 *  b1 | resilience wedge    | Fade | polygon (to yield)
 *  b1 | dashed yield line   | Fade | x270 y300..470
 *  b1 | labels (10/11)      | T    | x210 bl418/431 · x360 bl418
 *  b2 | text (13)           | T mid| x400 bl500
 *  b3 | tick/label (12)     | T mid| x210 bl530
 *  b4 | tick/label (12)     | T mid| x460 bl530
 *  b5 | margin bar          | Draw | x60 y550..578
 *  b5 | note (14)           | T st | x76..~530 bl570
 *  b6 | text (12)           | T mid| x540 bl590
 */

import React from "react";
import { Line, Path, Polygon } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("resilience vs toughness: two areas", "resilience vs toughness: do areas")}
        </T>
      </Fade>

      {/* beat 1 — two areas under one curve */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 470, 150, 130)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(150, 470, 780, 470)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M150 470 L270 300 C320 270 400 255 450 260 L480 300" stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Path d="M150 470 L270 300 C320 270 400 255 450 260 L480 300 L480 470 Z" fill={AMBER} fillOpacity={0.18} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Polygon points="150,470 270,300 270,470" fill={GREEN} fillOpacity={0.45} />
        <Line x1={270} y1={300} x2={270} y2={470} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={210} y={418} size={10} fill={GREEN} weight={700}>
          {t("resilience", "resilience")}
        </T>
        <T x={210} y={431} size={8} fill={GREEN}>
          {t("(to yield)", "(yield tak)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={360} y={418} size={11} fill={AMBER_DARK} weight={700}>
          {t("toughness (to fracture)", "toughness (fracture tak)")}
        </T>
      </Fade>

      {/* beat 2 — same curve, different stopping point */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={400} y={500} size={13} fill={INK} script>
          {t("both areas, same curve — differ in where you stop", "dono areas, same curve — farak stop karne ki jagah")}
        </T>
      </Fade>

      {/* beat 3 — resilience: recoverable */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M195 516 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={230} y={530} size={12} fill={GREEN}>
          {t("resilience = recoverable energy", "resilience = recoverable energy")}
        </T>
      </Fade>

      {/* beat 4 — toughness: total absorbed */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M425 516 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={460} y={530} size={12} fill={AMBER_DARK}>
          {t("toughness = total absorbed", "toughness = total absorbed")}
        </T>
      </Fade>

      {/* beat 5 — the design split */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M60 550 L60 578" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={570} size={14} fill={RED} script anchor="start">
          {t("springs → resilience; crash barriers → toughness", "springs → resilience; crash barriers → toughness")}
        </T>
      </Fade>

      {/* beat 6 — genuinely independent */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M655 516 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={690} y={530} size={11} fill={GREEN}>
          {t("resilient ≠ tough, or reverse", "resilient ≠ tough, ya ulta")}
        </T>
      </Fade>
    </Scene>
  );
}
