/**
 * Ch08 · Section 41 — "Rubber, elastomers and hysteresis"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Loading/unloading hysteresis loop diagram.
 *
 * Beats (en [0, 9.56, 19.37, 38.74, 53.85, 66.05, 77.74]):
 *  0 title only
 *  1 diagram: loading curve, unloading curve, shaded loop
 *  2 text: steel wins (by modulus — bigger stress for given strain)
 *  3 text: rubber = elastomer, no proportional region
 *  4 red margin: loading/unloading differ → enclosed loop = hysteresis
 *  5 text: loop area = energy lost as heat per cycle
 *  6 text: why rubber: tyres & shock absorbers — eats vibration
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..680 y130..470
 *  b1 | loading curve       | Draw | (150,470)→(450,260)
 *  b1 | unloading curve     | Draw | (450,260)→(150,470)
 *  b1 | shaded loop         | Fade | closed path
 *  b1 | labels (11)         | T st | x200 bl410 / x310 bl420
 *  b2 | tick/label (12)     | T mid| x230 bl520
 *  b3 | tick/label (12)     | T mid| x480 bl520
 *  b4 | margin bar          | Draw | x60 y550..578
 *  b4 | note (14)           | T st | x76..~500 bl570
 *  b5 | text (12)           | T mid| x400 bl500
 *  b6 | text (13)           | T mid| x540 bl590
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
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("rubber, elastomers and hysteresis", "rubber, elastomers aur hysteresis")}
        </T>
      </Fade>

      {/* beat 1 — the loading/unloading loop */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 470, 150, 130)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(150, 470, 680, 470)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M150 470 C240 440 320 320 450 260" stroke={RED} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={200} y={410} size={11} fill={RED} anchor="start">
          {t("loading", "loading")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M450 260 C370 320 260 430 150 470" stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={310} y={425} size={11} fill={INK} anchor="start">
          {t("unloading", "unloading")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <Path
          d="M150 470 C240 440 320 320 450 260 C370 320 260 430 150 470 Z"
          fill={AMBER}
          fillOpacity={0.25}
        />
      </Fade>

      {/* beat 2 — steel wins by the modulus */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M195 506 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={230} y={520} size={12} fill={INK}>
          {t("steel wins (by modulus)", "steel jeetta (modulus se)")}
        </T>
      </Fade>

      {/* beat 3 — rubber is an elastomer */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M425 506 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={480} y={520} size={12} fill={AMBER_DARK}>
          {t("rubber = elastomer, no proportional part", "rubber = elastomer, proportional part nahi")}
        </T>
      </Fade>

      {/* beat 4 — the enclosed loop is hysteresis */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M60 550 L60 578" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={570} size={14} fill={RED} script anchor="start">
          {t("loading ≠ unloading — the loop is hysteresis", "loading ≠ unloading — loop hi hysteresis hai")}
        </T>
      </Fade>

      {/* beat 5 — the loop is heat */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={400} y={500} size={12} fill={AMBER_DARK} weight={700}>
          {t("loop area = heat per cycle", "loop area = heat per cycle")}
        </T>
      </Fade>

      {/* beat 6 — why rubber is chosen */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={588} size={12} fill={GREEN} script>
          {t("tyres & shock absorbers — eats vibration, not bounce", "tyres & shock absorbers — vibration khaata, bounce nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
