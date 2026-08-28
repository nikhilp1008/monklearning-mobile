/**
 * Ch12 · Section 9 — Pitfalls and pro-tips: molecular nature
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.02, 24.66, 37.21, 53.33, 54.33, 55.33]):
 *  0 title + underline · 1-5 five traps, each a drawn ✗ + red correction line
 *    (spacing≠MFP, volumes don't add, not only attractive, gas isn't dense,
 *    Brownian ≠ seeing molecules) · 6 pro-tip box: three scales, line them up
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 26, red)          | T mid | x260..820 y37..82 (bl70)
 *  b0 | underline                        | Draw  | y94 x330..750
 *  b1..b5 | ✗ mark (crossD)             | Draw  | x55..77 y[112,167,222,277,332]
 *  b1..b5 | trap line (15, red, start)  | T st  | x95.. y[130,185,240,295,350]
 *  b6 | pro-tip box                      | Draw  | x150..930 y435..505
 *  b6 | pro-tip line1 (16, ink, bold)   | T mid | x540 y462
 *  b6 | pro-tip line2 (14, green, sc.)  | T mid | x540 y492
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
  [130, "✗ spacing ≠ mean free path — spacing ~10×d, mean free path ~1000×d", "✗ spacing ≠ mean free path — spacing ~10×d, mean free path ~1000×d"],
  [185, "✗ volumes don't just add — balanced equation & Avogadro's law rule", "✗ volumes yun hi add nahi hote — balanced equation & Avogadro's law"],
  [240, "✗ molecules aren't only attractive — repulsion stops collapse", "✗ molecules sirf attract nahi karte — repulsion collapse rokti hai"],
  [295, "✗ a gas isn't densely packed — ~99.96% empty space at STP", "✗ gas densely packed nahi — ~99.96% empty space at STP"],
  [350, "✗ Brownian motion isn't seeing molecules — you see the grain's dance", "✗ Brownian motion molecules dikhana nahi — grain ka dance dikhta hai"],
];

export default function Ch12Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={26} fill={RED} script>
          {t("pitfalls and pro-tips: molecular nature", "pitfalls aur pro-tip: molecular nature")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 94 C 420 90, 660 98, 750 92" stroke={RED} sw={2.4} dur={0.7} />

      {TRAPS.map(([y, eTxt, hTxt], i) => {
        const k = i + 1;
        return (
          <G key={y}>
            <Draw on={beat >= k} delay={dl(k, 0.2)} d={crossD(55, y - 20, 22, 26)} stroke={RED} sw={2.6} dur={0.5} />
            <Fade on={beat >= k} delay={dl(k, 0.9)}>
              <T x={95} y={y} size={15} fill={RED} anchor="start" script>
                {t(eTxt, hTxt)}
              </T>
            </Fade>
          </G>
        );
      })}

      {/* beat 6 — pro-tip */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 160 435 h 760 q 10 0 10 10 v 50 q 0 10 -10 10 h -760 q -10 0 -10 -10 v -50 q 0 -10 10 -10" stroke={GREEN} sw={2.4} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={462} size={16} fill={INK} weight={700}>
          PRO-TIP: size ~10⁻¹⁰ m · spacing ~10× · mean free path ~1000×
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={492} size={14} fill={GREEN} script>
          {t(
            "most conceptual questions fall to lining up these scales",
            "zyaadatar conceptual questions in scales ko line up karne se solve"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
