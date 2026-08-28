/**
 * Ch09 · Section 46 — "Tank draining time" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 16.92]):
 *  0 title (always-on)
 *  1 text: tank area 1.0 m², height 5.0 m; hole area 1.0 cm²
 *  2 tank + falling-level arrow "dy/dt" + low hole + jet
 *  3 text: outflow at the hole equals the drop in stored volume
 *  4 formula a√(2gy) = −A(dy/dt)
 *  5 formula t = (A/a)√(2H/g)
 *  6 formula (green) t = 10⁴×1 = 10⁴ s ≈ 2.8 hours
 *  7 red-margin note: time scales as √H — outflow slows as the level falls
 *
 * Layout plan:
 *  b2 | tank walls + gap          | Draw  | x300..550  y150..450 (gap y430..445)
 *  b2 | falling arrow + "dy/dt"   | Draw+T | (400,170)→(400,210) · label x415 bl 195
 *  b2 | jet arc                   | Draw   | (550,437) Q (605,443) (635,465)
 *  b1 | text (13, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 470
 *  b4 | formula (16, w700)        | T mid  | x540  bl 500
 *  b5 | formula (17, w700)        | T mid  | x540  bl 530
 *  b6 | formula (15, w800, grn)   | T mid  | x540  bl 558
 *  b7 | margin bar (red)          | Draw   | x460  y566..590
 *  b7 | note (script 12, red)     | T st   | x476.. bl 586
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Advanced: tank draining time", "JEE Advanced: tank draining time")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={13} fill={MUTED} script anchor="middle">
          {t("tank area 1.0 m², height 5.0 m; hole area 1.0 cm²", "tank area 1.0 m², height 5.0 m; hole area 1.0 cm²")}
        </T>
      </Fade>

      {/* beat 2 — the draining tank */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 150 V 450 H 430" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 445 450 H 550 V 150" stroke={INK} sw={2.2} dur={0.7} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.2)}
        d="M 300 150 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0 q 21 -8 42 0 q 21 8 42 0"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Draw on={beat >= 2} d={arrowD(400, 170, 400, 210)} stroke={INK} sw={2.2} dur={0.4} />
        <T x={415} y={195} size={12} fill={INK} anchor="start">
          dy/dt
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Draw on={beat >= 2} d="M 437 450 Q 437 455 437 458" stroke={INK} sw={1.4} dur={0.3} />
        <Draw on={beat >= 2} d="M 550 437 Q 605 443 635 465" stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={470} size={13} fill={MUTED} script anchor="middle">
          {t("outflow at the hole equals the drop in stored volume", "hole se outflow, stored volume ke drop ke barabar hota")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={500} size={16} fill={INK} weight={700} anchor="middle">
          a√(2gy) = −A(dy/dt)
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={530} size={17} fill={INK} weight={700} anchor="middle">
          t = (A/a)√(2H/g)
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={558} size={15} fill={GREEN} weight={800} anchor="middle">
          t = 10⁴×1 = 10⁴ s ≈ 2.8 hours
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 566 L 460 590" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={586} size={12} fill={RED} script anchor="start">
          {t("time scales as √H — outflow slows as level falls", "time √H se scale hota — level girte hi outflow slow hota")}
        </T>
      </Fade>
    </Scene>
  );
}
