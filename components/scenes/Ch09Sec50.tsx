/**
 * Ch09 · Section 50 — "Terminal velocity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.8, 11.26, 19.71, 25.26, 34.05, 43.09]):
 *  0 title (always-on)
 *  1 text: a pellet sinking in glycerine, a raindrop falling through air
 *  2 sphere + weight (down, big) + buoyancy (up, small) + drag (up, growing)
 *  3 text: the weight is fixed, but the drag grows with speed
 *  4 text: as the object speeds up, the upward drag grows
 *  5 red-margin note: when the three balance, acceleration stops
 *  6 text (green): it then falls at a constant maximum speed
 *
 * Layout plan:
 *  b2 | sphere (cream)            | circle | c(540,280) r30
 *  b2 | weight arrow "W"          | Draw+T | (540,315)→(540,375) · bl 392
 *  b2 | buoyancy arrow "F_B"      | Draw+T | (515,245)→(515,210) · bl 198
 *  b2 | drag arrow "F_v"          | Draw+T | (565,245)→(565,180) · bl 168
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 420
 *  b4 | text (13, script)         | T mid  | x540  bl 448
 *  b5 | margin bar (red)          | Draw   | x460  y470..494
 *  b5 | note (script 14, red)     | T st   | x476.. bl 490
 *  b6 | text (14, script, grn)    | T mid  | x540  bl 522
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("terminal velocity", "terminal velocity")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("a pellet sinking in glycerine, a raindrop falling through air", "glycerine mein sinking pellet, air se girta raindrop")}
        </T>
      </Fade>

      {/* beat 2 — the three forces */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={540} cy={280} r={30} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Draw on={beat >= 2} d={arrowD(540, 315, 540, 375)} stroke={INK} sw={2.6} dur={0.5} />
        <T x={540} y={392} size={14} fill={INK} anchor="middle">
          W
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Draw on={beat >= 2} d={arrowD(515, 245, 515, 210)} stroke={INK} sw={2} dur={0.4} />
        <T x={515} y={198} size={12} fill={INK} anchor="middle">
          F<TSpan fontSize={8} dy={3}>B</TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Draw on={beat >= 2} d={arrowD(565, 245, 565, 180)} stroke={INK} sw={2.4} dur={0.5} />
        <T x={565} y={168} size={13} fill={INK} anchor="middle">
          F<TSpan fontSize={9} dy={3}>v</TSpan>
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={420} size={13} fill={MUTED} script anchor="middle">
          {t("the weight is fixed, but the drag grows with speed", "weight fixed hai, par drag speed ke saath badhta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={448} size={13} fill={MUTED} script anchor="middle">
          {t("as the object speeds up, the upward drag grows", "object speed up hote hi, upward drag badhta jaata")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 470 L 460 494" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={490} size={14} fill={RED} script anchor="start">
          {t("when the three balance, acceleration stops", "jab teeno balance hote, acceleration ruk jaata")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={522} size={14} fill={GREEN} script anchor="middle">
          {t("it then falls at a constant maximum speed", "phir woh constant maximum speed se girta")}
        </T>
      </Fade>
    </Scene>
  );
}
