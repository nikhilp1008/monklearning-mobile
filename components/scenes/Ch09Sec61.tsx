/**
 * Ch09 · Section 61 — "Fluid resistance: an Ohm's law analogy"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.17, 8.17, 9.17, 10.17, 11.17, 12.17]):
 *  0 title (always-on)
 *  1 text: a pressure difference drives flow, as voltage drives current
 *  2 series tube pair + parallel tube pair
 *  3 formula R = ΔP/Q = 8ηl/(πr⁴)
 *  4 text: pressure is voltage; flow is current; R is resistance
 *  5 red-margin note: series — resistances add; parallel — reciprocals add
 *  6 red-margin note: the analogy is quantitative, not just a metaphor
 *
 * Layout plan:
 *  b2 | series tubes ×2 + junction | Draw  | x200..350 / x370..520  y270..290
 *  b2 | "series" (13)              | T mid  | x360  bl 320
 *  b2 | parallel tubes ×2 + joins  | Draw   | x650..850  y230..250 / y310..330
 *  b2 | "parallel" (13)            | T mid  | x750  bl 360
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | formula (18, w700)         | T mid  | x540  bl 400
 *  b4 | text (13, script)          | T mid  | x540  bl 428
 *  b5 | margin bar (red)           | Draw   | x460  y448..472
 *  b5 | note (script 14, red)      | T st   | x476.. bl 468
 *  b6 | margin bar (red)           | Draw   | x460  y490..514
 *  b6 | note (script 14, red)      | T st   | x476.. bl 510
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("fluid resistance: an Ohm's law analogy", "fluid resistance: Ohm's law analogy")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("pressure difference drives flow, as voltage drives current", "pressure difference flow drive karta, jaise voltage current drive karta")}
        </T>
      </Fade>

      {/* beat 2 — series vs parallel */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 200 270 H 350 V 290 H 200 Z" stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 370 270 H 520 V 290 H 370 Z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Line x1={350} y1={280} x2={370} y2={280} stroke={INK} strokeWidth={2} />
        <T x={360} y={320} size={13} fill={MUTED} anchor="middle">
          {t("series", "series")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 650 230 H 850 V 250 H 650 Z" stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d="M 650 310 H 850 V 330 H 650 Z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <Line x1={650} y1={240} x2={650} y2={320} stroke={INK} strokeWidth={1.6} />
        <Line x1={850} y1={240} x2={850} y2={320} stroke={INK} strokeWidth={1.6} />
        <T x={750} y={360} size={13} fill={MUTED} anchor="middle">
          {t("parallel", "parallel")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={18} fill={INK} weight={700} anchor="middle">
          R = ΔP/Q = 8ηl / πr⁴
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={428} size={13} fill={MUTED} script anchor="middle">
          {t("pressure is voltage; flow is current; R is resistance", "pressure voltage hai; flow current hai; R resistance hai")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 448 L 460 472" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={468} size={14} fill={RED} script anchor="start">
          {t("series: resistances add. parallel: reciprocals add", "series: resistances add. parallel: reciprocals add")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 490 L 460 514" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={510} size={14} fill={RED} script anchor="start">
          {t("the analogy is quantitative, not just a metaphor", "yeh analogy quantitative hai, sirf metaphor nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
