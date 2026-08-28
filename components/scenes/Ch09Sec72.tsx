/**
 * Ch09 · Section 72 — "Angle of contact: cohesion versus adhesion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.31, 16.21, 19.54, 29.7, 35.67, 36.67, 37.67]):
 *  0 title (always-on)
 *  1 text: cohesion pulls the liquid inward; adhesion clings to the solid
 *  2 water tube (concave meniscus) + mercury tube (convex meniscus)
 *  3 text: adhesion wins (water on glass) — concave meniscus
 *  4 red-margin note: wetting — angle of contact under 90°
 *  5 text: cohesion wins (mercury on glass) — convex meniscus
 *  6 red-margin note: non-wetting — angle of contact over 90°
 *  7 text (green): acute wets, obtuse won't — the angle falls with temperature
 *
 * Layout plan:
 *  b2 | water tube walls          | Draw  | x250..400  y230..400
 *  b2 | water meniscus (concave)  | Draw   | (250,260) Q (325,300) (400,260)
 *  b2 | "water" (13)              | T mid  | x325  bl 420
 *  b2 | mercury tube walls        | Draw   | x650..800  y230..400
 *  b2 | mercury meniscus (convex) | Draw   | (650,300) Q (725,260) (800,300)
 *  b2 | "mercury" (13)            | T mid  | x725  bl 420
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 430
 *  b4 | margin bar (red)          | Draw   | x460  y452..476
 *  b4 | note (script 14, red)     | T st   | x476.. bl 472
 *  b5 | text (13, script)         | T mid  | x540  bl 500
 *  b6 | margin bar (red)          | Draw   | x460  y520..544
 *  b6 | note (script 14, red)     | T st   | x476.. bl 540
 *  b7 | text (13, script, grn)    | T mid  | x540  bl 566
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec72({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("angle of contact", "angle of contact")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("cohesion pulls the liquid inward; adhesion clings to the solid", "cohesion liquid ko inward khinchti; adhesion solid se chipakti")}
        </T>
      </Fade>

      {/* beat 2 — concave water vs convex mercury */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 250 230 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 400 230 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d="M 250 260 Q 325 300 400 260" stroke={INK} sw={2.2} dur={0.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={325} y={420} size={13} fill={MUTED} anchor="middle">
          {t("water", "water")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M 650 230 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2.8)} d="M 800 230 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <Draw on={beat >= 2} d="M 650 300 Q 725 260 800 300" stroke={INK} sw={2.2} dur={0.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.1)}>
        <T x={725} y={420} size={13} fill={MUTED} anchor="middle">
          {t("mercury", "mercury")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={430} size={13} fill={MUTED} script anchor="middle">
          {t("adhesion wins (water on glass) — concave meniscus", "adhesion jeetta (water on glass) — concave meniscus")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 460 452 L 460 476" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={476} y={472} size={14} fill={RED} script anchor="start">
          {t("wetting: angle of contact under 90°", "wetting: angle of contact 90° se kam")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={500} size={13} fill={MUTED} script anchor="middle">
          {t("cohesion wins (mercury on glass) — convex meniscus", "cohesion jeetta (mercury on glass) — convex meniscus")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 520 L 460 544" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={540} size={14} fill={RED} script anchor="start">
          {t("non-wetting: angle of contact over 90°", "non-wetting: angle of contact 90° se zyada")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={566} size={13} fill={GREEN} script anchor="middle">
          {t("acute wets, obtuse won't — angle falls with temperature", "acute wets karta, obtuse nahi — angle temperature se girta")}
        </T>
      </Fade>
    </Scene>
  );
}
