/**
 * Ch12 · Section 36 — Pitfalls and pro-tips: speeds and the Maxwell curve
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.09, 28.07, 38.31, 54.53, 55.53, 56.53]):
 *  0 title + underline · 1-5 five traps, each a drawn ✗ + red line (kg/mol,
 *    Celsius→kelvin, RAM coefficients, velocity vs speed, curve area not
 *    height) · 6 pro-tip: compare gases via v∝√(T/M) directly
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 24, red)          | T mid | x260..820 y37..80 (bl68)
 *  b0 | underline                        | Draw  | y92 x330..750
 *  b1..b5 | ✗ mark (crossD)             | Draw  | x55..77 y[100,152,204,256,308]
 *  b1..b5 | trap line (14, red, start)  | T st  | x95.. y[118,170,222,274,326]
 *  b6 | pro-tip box                      | Draw  | x140..940 y352..406
 *  b6 | pro-tip line (14, ink, bold)    | T mid | x540 y384
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const TRAPS: [number, string, string][] = [
  [118, "✗ M must be kg/mol, not g/mol — inflates every speed by ~32×", "✗ M kg/mol mein ho, g/mol nahi — speed ~32× inflate hoti"],
  [170, "✗ Celsius → kelvin, convert BEFORE the square root", "✗ Celsius → kelvin, square root se PEHLE convert karo"],
  [222, "✗ coefficients: √3(rms), √(8/π)(avg), √2(mp) — only avg has π", "✗ coefficients: √3(rms), √(8/π)(avg), √2(mp) — sirf avg mein π"],
  [274, "✗ avg velocity (vector) = 0 ≠ avg speed (scalar) ≠ 0", "✗ avg velocity (vector) = 0 ≠ avg speed (scalar) ≠ 0"],
  [326, "✗ curve HEIGHT ≠ probability — only AREA gives the fraction", "✗ curve HEIGHT ≠ probability — sirf AREA fraction deta"],
];

export default function Ch12Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("pitfalls and pro-tips: speeds and the Maxwell curve", "pitfalls aur pro-tip: speeds aur Maxwell curve")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 92 C 420 88, 660 96, 750 90" stroke={RED} sw={2.4} dur={0.7} />

      {TRAPS.map(([y, eTxt, hTxt], i) => {
        const k = i + 1;
        return (
          <G key={y}>
            <Draw on={beat >= k} delay={dl(k, 0.2)} d={crossD(55, y - 20, 22, 26)} stroke={RED} sw={2.6} dur={0.5} />
            <Fade on={beat >= k} delay={dl(k, 0.9)}>
              <T x={95} y={y} size={14} fill={RED} anchor="start" script>
                {t(eTxt, hTxt)}
              </T>
            </Fade>
          </G>
        );
      })}

      {/* beat 6 — pro-tip */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 140 352 h 800 q 10 0 10 10 v 34 q 0 10 -10 10 h -800 q -10 0 -10 -10 v -34 q 0 -10 10 -10"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={384} size={14} fill={INK} weight={700}>
          {t(
            "PRO-TIP: compare gases/temps via v ∝ √(T/M) — one line, no calculator",
            "PRO-TIP: gases/temps compare karo v ∝ √(T/M) se — ek line, no calculator"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
