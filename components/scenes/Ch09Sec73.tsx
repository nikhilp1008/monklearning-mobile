/**
 * Ch09 · Section 73 — "Capillarity: the third consequence"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 15.45, 24.32, 32.51, 33.51, 34.51, 35.51]):
 *  0 title (always-on)
 *  1 text: in a narrow tube, wall-climbing plus tension drags the column up
 *  2 water capillary (risen, concave) + mercury capillary (depressed, convex)
 *  3 text: a fine tube lifts water above, or depresses mercury below
 *  4 red-margin note: carries water up soil to plant roots, oil up a wick
 *  5 text: the narrower the tube, the higher the rise
 *  6 text (green): three consequences from one idea
 *
 * Layout plan:
 *  b2 | water tube walls           | Draw  | x280..320  y200..400
 *  b2 | water meniscus (risen)     | Draw   | (280,250) Q (300,270) (320,250)
 *  b2 | "water rises" (13)         | T mid  | x300  bl 420
 *  b2 | mercury tube walls         | Draw   | x700..740  y200..400
 *  b2 | mercury meniscus (dep.)    | Draw   | (700,320) Q (720,300) (740,320)
 *  b2 | "mercury depressed" (13)   | T mid  | x720  bl 420
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | text (13, script)          | T mid  | x540  bl 445
 *  b4 | margin bar (red)           | Draw   | x460  y468..492
 *  b4 | note (script 14, red)      | T st   | x476.. bl 488
 *  b5 | text (13, script)          | T mid  | x540  bl 518
 *  b6 | text (13, script, grn)     | T mid  | x540  bl 546
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("capillarity", "capillarity")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("wall-climbing plus tension drags the column up a narrow tube", "wall-climbing aur tension narrow tube mein column ko upar khinchte")}
        </T>
      </Fade>

      {/* beat 2 — rise vs depression */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 280 200 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 320 200 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d="M 280 250 Q 300 270 320 250" stroke={INK} sw={2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={300} y={420} size={13} fill={MUTED} anchor="middle">
          {t("water rises", "water rises")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 700 200 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2.7)} d="M 740 200 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <Draw on={beat >= 2} d="M 700 320 Q 720 300 740 320" stroke={INK} sw={2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={720} y={420} size={13} fill={MUTED} anchor="middle">
          {t("mercury depressed", "mercury depressed")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={445} size={13} fill={MUTED} script anchor="middle">
          {t("a fine tube lifts water above, or depresses mercury below", "fine tube water ko upar uthata, ya mercury ko neeche dabata")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 460 468 L 460 492" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={476} y={488} size={14} fill={RED} script anchor="start">
          {t("carries water up soil to plant roots, oil up a wick", "soil se plant roots tak water, wick mein oil upar le jaati")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={518} size={13} fill={MUTED} script anchor="middle">
          {t("the narrower the tube, the higher the rise", "tube jitna narrow, rise utni zyada")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={546} size={13} fill={GREEN} script anchor="middle">
          {t("three consequences from one idea", "ek idea se teen consequences")}
        </T>
      </Fade>
    </Scene>
  );
}
