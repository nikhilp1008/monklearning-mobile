/**
 * Ch09 · Section 69 — "Surface tension: the stretched skin"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 8.19, 20.14, 29.01, 37.89, 46.08, 54.95, 55.95]):
 *  0 title (always-on)
 *  1 text: a water strider skates; a steel needle floats
 *  2 wavy surface line + interior molecule (balanced) + surface molecule (net pull)
 *  3 text: interior molecules are pulled equally in all directions
 *  4 text: a surface molecule has liquid below but only air above
 *  5 red-margin note: with no neighbours pulling up, it feels a net inward pull
 *  6 text: the surface is squeezed taut, so liquids minimise area
 *  7 red-margin note: a free drop pulls itself into a sphere — least area
 *
 * Layout plan:
 *  b2 | surface line (wavy)       | Draw  | x300..750  y250
 *  b2 | interior molecule + 4     | circle+Draw | c(400,340) r5, arrows len22
 *  b2 | surface molecule + 3+net  | circle+Draw | c(600,250) r5, arrows len22 + net len45
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 400
 *  b4 | text (13, script)         | T mid  | x540  bl 428
 *  b5 | margin bar (red)          | Draw   | x460  y448..472
 *  b5 | note (script 14, red)     | T st   | x476.. bl 468
 *  b6 | text (13, script)         | T mid  | x540  bl 495
 *  b7 | margin bar (red)          | Draw   | x460  y515..539
 *  b7 | note (script 14, red)     | T st   | x476.. bl 535
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("surface tension: the stretched skin", "surface tension: stretched skin")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("a water strider skates; a steel needle floats", "water strider skate karta; steel needle float karti")}
        </T>
      </Fade>

      {/* beat 2 — interior (balanced) vs surface (net pull) */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 250 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0 q 19 -8 38 0 q 19 8 38 0" stroke={INK} sw={1.8} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <Circle cx={400} cy={340} r={5} fill={INK} />
        <Draw on={beat >= 2} d={arrowD(400, 318, 400, 340)} stroke={INK} sw={1.8} dur={0.4} />
        <Draw on={beat >= 2} d={arrowD(400, 362, 400, 340)} stroke={INK} sw={1.8} dur={0.4} />
        <Draw on={beat >= 2} d={arrowD(378, 340, 400, 340)} stroke={INK} sw={1.8} dur={0.4} />
        <Draw on={beat >= 2} d={arrowD(422, 340, 400, 340)} stroke={INK} sw={1.8} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={600} cy={250} r={5} fill={INK} />
        <Draw on={beat >= 2} d={arrowD(583, 267, 600, 250)} stroke={INK} sw={1.8} dur={0.4} />
        <Draw on={beat >= 2} d={arrowD(600, 272, 600, 250)} stroke={INK} sw={1.8} dur={0.4} />
        <Draw on={beat >= 2} d={arrowD(617, 267, 600, 250)} stroke={INK} sw={1.8} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Draw on={beat >= 2} d={arrowD(600, 250, 600, 300)} stroke={RED} sw={2.6} dur={0.5} />
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={13} fill={MUTED} script anchor="middle">
          {t("interior molecules are pulled equally in all directions", "interior molecules sabhi directions mein equally pull hote")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={428} size={13} fill={MUTED} script anchor="middle">
          {t("a surface molecule has liquid below but only air above", "surface molecule ke neeche liquid, upar sirf air hai")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 448 L 460 472" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={468} size={14} fill={RED} script anchor="start">
          {t("with no upward pull, it feels a net inward pull", "upward pull na hone se, net inward pull feel hota")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={495} size={13} fill={MUTED} script anchor="middle">
          {t("the surface is squeezed taut, so liquids minimise area", "surface taut squeeze hota, isliye liquids area minimise karte")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 515 L 460 539" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={535} size={14} fill={RED} script anchor="start">
          {t("a free drop pulls itself into a sphere — least area", "free drop khud ko sphere mein khinch leta — least area")}
        </T>
      </Fade>
    </Scene>
  );
}
