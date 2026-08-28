/**
 * Ch09 · Section 70 — "Two faces: force per length equals energy per area"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 4.78, 12.63, 18.26, 23.98, 35.33, 36.33, 37.33]):
 *  0 title (always-on)
 *  1 text: cut a line on the surface; each side pulls the other inward
 *  2 U-frame + film + sliding bar + F arrow + L bracket
 *  3 formula S = F/L
 *  4 text: each unit of new area stores a fixed energy
 *  5 text: the two views are numerically identical
 *  6 red-margin note: surface tension equals surface energy per unit area
 *  7 text (green): both measurements give the same value
 *
 * Layout plan:
 *  b2 | rails ×2                  | Draw  | x300 & x600  y200..400
 *  b2 | film (cream)              | rect   | x300..600  y200..300
 *  b2 | sliding bar               | Draw   | x300..600  y300
 *  b2 | F arrow + label           | Draw+T | (450,300)→(450,350) · bl 368
 *  b2 | L bracket + label         | Draw+T | x300..600  y320 · bl 335
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (20, w800)        | T mid  | x540  bl 400
 *  b4 | text (13, script)         | T mid  | x540  bl 430
 *  b5 | text (13, script)         | T mid  | x540  bl 458
 *  b6 | margin bar (red)          | Draw   | x460  y480..504
 *  b6 | note (script 14, red)     | T st   | x476.. bl 500
 *  b7 | text (14, script, grn)    | T mid  | x540  bl 528
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("two faces of the same coin", "same coin ke do faces")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("cut a line on the surface — each side pulls the other inward", "surface pe ek line kaato — har side dusri ko inward khinchti")}
        </T>
      </Fade>

      {/* beat 2 — the sliding-bar frame */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Rect x={300} y={200} width={300} height={100} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d="M 300 200 V 400" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 600 200 V 400" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d="M 300 300 H 600" stroke={INK} sw={3} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Draw on={beat >= 2} d={arrowD(450, 300, 450, 350)} stroke={INK} sw={2.4} dur={0.4} />
        <T x={450} y={368} size={13} fill={INK} anchor="middle">
          F
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Draw on={beat >= 2} d="M 300 315 V 320 M 600 315 V 320 M 300 318 H 600" stroke={INK} sw={1.4} dur={0.5} />
        <T x={450} y={335} size={12} fill={MUTED} anchor="middle">
          L
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={20} fill={INK} weight={800} anchor="middle">
          S = F/L
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={430} size={13} fill={MUTED} script anchor="middle">
          {t("each unit of new area stores a fixed energy", "har new area unit ek fixed energy store karta")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={458} size={13} fill={MUTED} script anchor="middle">
          {t("the two views are numerically identical", "dono views numerically identical hote")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 480 L 460 504" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={500} size={14} fill={RED} script anchor="start">
          {t("surface tension equals surface energy per unit area", "surface tension = surface energy per unit area")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={528} size={14} fill={GREEN} script anchor="middle">
          {t("both measurements give the same value", "dono measurements same value dete")}
        </T>
      </Fade>
    </Scene>
  );
}
