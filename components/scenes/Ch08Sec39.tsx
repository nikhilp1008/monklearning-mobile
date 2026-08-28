/**
 * Ch08 · Section 39 — "Past yield: the material gives"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Subtopic 4 kickoff: elastic/plastic bands + the unloading line that
 * misses the origin (permanent set).
 *
 * Beats (en [0, 13.06, 25.26, 34.22, 45.57, 63.49, 76.89]):
 *  0 title only
 *  1 diagram: bands, curve, unload point, dashed return line, permanent set
 *  2 label: springs back (elastic)
 *  3 label: keeps stretching (plastic)
 *  4 red margin: release now — does NOT return, permanent set
 *  5 label: unload line ∥ elastic
 *  6 label: = permanent set (the signature)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..780 y130..470
 *  b1 | bands               | Fade | x150..270 y130..470 · x270..550 y100..470
 *  b1 | curve               | Draw | (150,470)→(450,260)
 *  b1 | unload dot+label    | Draw/T| c(450,260) · x460 bl250
 *  b1 | dashed return       | Fade | (450,260)→(302,470)
 *  b1 | permanent-set bracket| Fade| y485 x150..302
 *  b1 | "permanent set"(11) | T mid| x226 bl502
 *  b2 | tick/label (13)     | T mid| x210 bl545
 *  b3 | tick/label (13)     | T mid| x380 bl545
 *  b4 | margin bar          | Draw | x60 y575..603
 *  b4 | note (15)           | T st | x76..456 bl595
 *  b5 | tick/label (12)     | T mid| x560 bl545
 *  b6 | tick/label (12)     | T mid| x720 bl545
 */

import React from "react";
import { Line, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("past the yield point, the material gives", "yield point ke paar, material give karta hai")}
        </T>
      </Fade>

      {/* beat 1 — the curve, unload point, and the permanent set */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 470, 150, 130)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(150, 470, 780, 470)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Rect x={150} y={130} width={120} height={340} fill={GREEN} fillOpacity={0.15} />
        <Rect x={270} y={100} width={280} height={370} fill={AMBER_DARK} fillOpacity={0.15} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M150 470 L270 300 C320 270 380 262 450 260" stroke={INK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M450 260 A4 4 0 1 1 449.9 260" stroke={RED} sw={1.8} dur={0.3} fill={RED} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={460} y={250} size={10} fill={RED} anchor="start">
          {t("unload here", "yahan unload")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <Line x1={450} y1={260} x2={302} y2={470} stroke={RED} strokeWidth={1.8} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <Line x1={150} y1={485} x2={302} y2={485} stroke={RED} strokeWidth={2} />
        <Line x1={150} y1={479} x2={150} y2={491} stroke={RED} strokeWidth={1.6} />
        <Line x1={302} y1={479} x2={302} y2={491} stroke={RED} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.1)}>
        <T x={226} y={502} size={11} fill={RED}>
          {t("permanent set", "permanent set")}
        </T>
      </Fade>

      {/* beat 2 — elastic: springs back */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M195 531 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={210} y={545} size={13} fill={GREEN} script>
          {t("springs back", "wapas spring")}
        </T>
      </Fade>

      {/* beat 3 — plastic: keeps stretching */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M365 531 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={380} y={545} size={13} fill={AMBER_DARK} script>
          {t("keeps stretching", "khinchta rehta")}
        </T>
      </Fade>

      {/* beat 4 — does NOT return */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M60 562 L60 588" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={582} size={14} fill={RED} script anchor="start">
          {t("release now — does NOT return, permanent set", "abhi release — WAPAS NAHI, permanent set")}
        </T>
      </Fade>

      {/* beat 5 — the unload line's slope */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M545 531 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={560} y={545} size={12} fill={RED} script>
          {t("unload line ∥ elastic", "unload line ∥ elastic")}
        </T>
      </Fade>

      {/* beat 6 — the signature */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M705 531 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={720} y={545} size={12} fill={INK} script>
          {t("= permanent set", "= permanent set")}
        </T>
      </Fade>
    </Scene>
  );
}
