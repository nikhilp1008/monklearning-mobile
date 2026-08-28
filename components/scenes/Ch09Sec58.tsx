/**
 * Ch09 · Section 58 — "Poiseuille: flow through a thin tube"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 10.24, 20.48, 29.44, 30.44, 31.44, 32.44]):
 *  0 title (always-on)
 *  1 text: water through a drip pipe, blood through an artery, ink through a nib
 *  2 tube + P1/P2 labels + flow arrow + L bracket + r bracket
 *  3 text: longer tube, less flow; more viscous fluid, less flow
 *  4 text: a more viscous fluid also lowers the flow
 *  5 red-margin note: flow depends on radius to the fourth power
 *  6 text (green): halve the radius and the flow falls to one sixteenth
 *
 * Layout plan:
 *  b2 | tube walls                | Draw  | x300..750  y270 / y310
 *  b2 | "P₁"/"P₂" (13)            | T     | x280 bl 294 · x770 bl 294
 *  b2 | flow arrow                 | Draw   | (350,290)→(700,290)
 *  b2 | L bracket + label          | Draw+T | x300..750  y330 · bl 349
 *  b2 | r bracket + label          | Draw+T | x270..280  y270..310 · bl 294
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | text (13, script)          | T mid  | x540  bl 375
 *  b4 | text (13, script)          | T mid  | x540  bl 403
 *  b5 | margin bar (red)           | Draw   | x460  y425..449
 *  b5 | note (script 14, red)      | T st   | x476.. bl 445
 *  b6 | text (14, script, grn)     | T mid  | x540  bl 475
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("Poiseuille: flow through a thin tube", "Poiseuille: thin tube se flow")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("drip pipe, artery, or ink through a nib — all the same law", "drip pipe, artery, ya nib se ink — sab same law")}
        </T>
      </Fade>

      {/* beat 2 — the tube, pressures, and flow */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 270 H 750" stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 300 310 H 750" stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={280} y={294} size={13} fill={INK} anchor="end">
          P₁
        </T>
        <T x={770} y={294} size={13} fill={INK} anchor="start">
          P₂
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Draw on={beat >= 2} d={arrowD(350, 290, 700, 290)} stroke={INK} sw={2.4} dur={0.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Draw on={beat >= 2} d="M 300 330 V 335 M 750 330 V 335 M 300 333 H 750" stroke={INK} sw={1.4} dur={0.6} />
        <T x={525} y={349} size={12} fill={MUTED} anchor="middle">
          L
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <Draw on={beat >= 2} d="M 270 270 H 275 M 270 310 H 275 M 272 270 V 310" stroke={INK} sw={1.4} dur={0.5} />
        <T x={260} y={294} size={12} fill={MUTED} anchor="end">
          r
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={375} size={13} fill={MUTED} script anchor="middle">
          {t("longer tube, less flow; more viscous fluid, less flow", "longer tube, kam flow; viscous fluid, aur kam flow")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={403} size={13} fill={MUTED} script anchor="middle">
          {t("a more viscous fluid also lowers the flow", "zyada viscous fluid bhi flow ko kam karta")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 425 L 460 449" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={445} size={14} fill={RED} script anchor="start">
          {t("flow depends on radius to the fourth power", "flow radius ki fourth power pe depend karta")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={475} size={14} fill={GREEN} script anchor="middle">
          {t("halve the radius and the flow falls to one sixteenth", "radius half karo aur flow 1/16 tak gir jaata")}
        </T>
      </Fade>
    </Scene>
  );
}
