/**
 * Ch09 · Section 37 — "Bernoulli: energy conservation for flow"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 13.09, 21.11, 25.38, 35.54]):
 *  0 title (always-on)
 *  1 text: a flowing fluid carries pressure, kinetic, and potential energy
 *  2 tapered pipe + speed arrows (slow/fast) + pressure gauges (tall/short)
 *  3 formula (green) P + ½ρv² + ρgh = constant
 *  4 text: the three forms can only shuffle between one another
 *  5 red-margin note: on a level pipe, faster flow means lower pressure
 *  6 text: the fast air beside the train spent its pressure to buy speed
 *
 * Layout plan:
 *  b2 | pressure gauge (tall)     | rect  | x260..280  y180..230
 *  b2 | "P₁ high" (12)            | T mid  | x270  bl 172
 *  b2 | pressure gauge (short)    | rect   | x640..660  y210..230
 *  b2 | "P₂ low" (12)             | T mid  | x650  bl 202
 *  b2 | pipe walls                | Draw   | x150..750  y250→280 / 350→320
 *  b2 | slow arrow "v1"           | Draw+T | (200,300)→(320,300) · bl 285
 *  b2 | fast arrow "v2"           | Draw+T | (560,300)→(740,300) · bl 285
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (19, w800, grn)   | T mid  | x540  bl 410
 *  b4 | text (14, script)         | T mid  | x540  bl 445
 *  b5 | margin bar (red)          | Draw   | x460  y468..492
 *  b5 | note (script 14, red)     | T st   | x476.. bl 488
 *  b6 | text (14, script)         | T mid  | x540  bl 522
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("Bernoulli: energy conservation for flow", "Bernoulli: flow ke liye energy conservation")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("a flowing fluid carries pressure, kinetic, and potential energy", "flowing fluid pressure, kinetic, aur potential energy carry karta")}
        </T>
      </Fade>

      {/* beat 2 — faster flow, lower pressure */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={260} y={180} width={20} height={50} fill={AMBER} stroke={INK} strokeWidth={1.4} />
        <T x={270} y={172} size={12} fill={INK} anchor="middle">
          {t("P₁ high", "P₁ high")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Rect x={640} y={210} width={20} height={20} fill={AMBER} stroke={INK} strokeWidth={1.4} />
        <T x={650} y={202} size={12} fill={INK} anchor="middle">
          {t("P₂ low", "P₂ low")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 150 250 H 400 L 500 280 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 1.9)} d="M 150 350 H 400 L 500 320 H 750" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Draw on={beat >= 2} d={arrowD(200, 300, 320, 300)} stroke={INK} sw={2.2} dur={0.5} />
        <T x={260} y={285} size={13} fill={INK} anchor="middle">
          v₁
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Draw on={beat >= 2} d={arrowD(560, 300, 740, 300)} stroke={INK} sw={2.6} dur={0.4} />
        <T x={650} y={285} size={13} fill={INK} anchor="middle">
          v₂
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={410} size={19} fill={GREEN} weight={800} anchor="middle">
          P + ½ρv² + ρgh = constant
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={445} size={14} fill={MUTED} script anchor="middle">
          {t("the three forms can only shuffle between one another", "teeno forms sirf ek dusre mein shuffle ho sakte")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 468 L 460 492" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={488} size={14} fill={RED} script anchor="start">
          {t("on a level pipe, faster flow means lower pressure", "level pipe pe, faster flow matlab lower pressure")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={522} size={14} fill={MUTED} script anchor="middle">
          {t("fast air beside the train spent its pressure to buy speed", "train ke paas ki fast air ne pressure kharch ki speed ke liye")}
        </T>
      </Fade>
    </Scene>
  );
}
