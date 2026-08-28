/**
 * Ch09 · Section 26 — "Spin makes a paraboloid"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 8.19, 14.76, 20.99, 29.7, 36.44, 37.44]):
 *  0 title (always-on)
 *  1 text: each parcel needs an inward centripetal force to circle
 *  2 container + rotation axis (ω) + paraboloid surface + inward arrows
 *  3 text: pressure rises outward, so the rim rises
 *  4 red-margin note: the free surface curves into a paraboloid
 *  5 text: faster spin — deeper central dip, higher rim
 *  6 text (green): liquid-mirror telescopes use exactly this
 *
 * Layout plan:
 *  b2 | rotation axis (dashed)    | line  | x500  y180..420
 *  b2 | ω loop + label            | Draw+T | c(500,160) · "ω" x520 bl 165
 *  b2 | container walls           | Draw   | x300..700  y200..420
 *  b2 | paraboloid surface        | Draw   | (300,260) Q (500,380) (700,260)
 *  b2 | inward arrows ×2          | Draw   | x380→420 / x620→580  y240..255
 *  b2 | "high rim" (12) end       | T end  | x290  bl 249
 *  b2 | "low centre" (12)         | T mid  | x500  bl 399
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (14, script)         | T mid  | x540  bl 450
 *  b4 | margin bar (red)          | Draw   | x460  y470..494
 *  b4 | note (script 14, red)     | T st   | x476.. bl 490
 *  b5 | text (14, script)         | T mid  | x540  bl 522
 *  b6 | text (14, script, grn)    | T mid  | x540  bl 554
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("spin makes a paraboloid", "spin ek paraboloid banata")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("each parcel needs an inward centripetal force to circle", "har parcel ko circle karne ke liye inward centripetal force chahiye")}
        </T>
      </Fade>

      {/* beat 2 — the spinning container and its curved surface */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Line x1={500} y1={180} x2={500} y2={420} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Draw on={beat >= 2} d="M 480 150 A 22 14 0 1 1 478 152" stroke={INK} sw={2} dur={0.6} />
        <T x={520} y={165} size={13} fill={INK} anchor="start">
          ω
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 300 200 V 420 H 700 V 200" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Draw on={beat >= 2} d="M 300 260 Q 500 380 700 260" stroke={AMBER_DARK} sw={2.4} dur={0.9} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <Draw on={beat >= 2} d={arrowD(380, 240, 420, 258)} stroke={INK} sw={2} dur={0.4} />
        <Draw on={beat >= 2} d={arrowD(620, 240, 580, 258)} stroke={INK} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={290} y={249} size={12} fill={MUTED} anchor="end">
          {t("high rim", "high rim")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.3)}>
        <T x={500} y={399} size={12} fill={MUTED} anchor="middle">
          {t("low centre", "low centre")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={450} size={14} fill={MUTED} script anchor="middle">
          {t("pressure rises outward, so the rim rises", "pressure outward badhta, isliye rim rises hota")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 460 470 L 460 494" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={476} y={490} size={14} fill={RED} script anchor="start">
          {t("the free surface curves into a paraboloid", "free surface ek paraboloid mein curve hota")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={522} size={14} fill={MUTED} script anchor="middle">
          {t("faster spin: deeper central dip, higher rim", "faster spin: deeper central dip, higher rim")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={554} size={14} fill={GREEN} script anchor="middle">
          {t("liquid-mirror telescopes use exactly this", "liquid-mirror telescopes isi ka use karte")}
        </T>
      </Fade>
    </Scene>
  );
}
